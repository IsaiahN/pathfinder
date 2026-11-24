/* Project Pathfinder — static corpus browser + validation front-end.
 * Reads data/*.json produced by Scripts/export_public_data.py and by the sync Action.
 * No backend: verdict submission uses prefilled GitHub issue URLs.
 */
(function () {
  'use strict';

  var app = document.getElementById('app');
  var state = { config: {}, problems: [], validation: { problems: {} }, history: { events: [] } };

  function fetchJSON(path) {
    return fetch(path, { cache: 'no-store' })
      .then(function (r) { if (!r.ok) throw new Error(path + ' ' + r.status); return r.json(); })
      .catch(function () { return null; });
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function problemIdFromUrl() {
    var m = location.pathname.match(/\/problem\/([A-Za-z0-9_-]+)\/?$/);
    if (m) return decodeURIComponent(m[1]);
    var q = new URLSearchParams(location.search).get('id');
    return q ? q.trim().toUpperCase() : null;
  }

  function verdictFor(id) {
    return (state.validation.problems && state.validation.problems[id]) || null;
  }

  function stats() {
    var p = state.problems;
    var withSolution = p.filter(function (x) { return x.solution_status === 'PASS' || x.word_count > 0; }).length;
    var verdictCount = Object.keys(state.validation.problems || {}).reduce(function (n, k) {
      var v = state.validation.problems[k];
      return n + ((v && v.verdicts && v.verdicts.length) || 0);
    }, 0);
    var validators = {};
    (state.history.events || []).forEach(function (e) { if (e.actor) validators[e.actor] = 1; });
    return { total: p.length, solved: withSolution, verdicts: verdictCount, validators: Object.keys(validators).length };
  }

  function renderDashboard() {
    var s = stats();
    var sections = {};
    state.problems.forEach(function (p) { sections[p.section || 'Other'] = (sections[p.section || 'Other'] || 0) + 1; });

    app.innerHTML =
      '<h1>Project Pathfinder</h1>' +
      '<p class="lede">One method, 1,300 questions, and an open record of every human verdict. ' +
      'Pick a problem, read the derivation, then validate, refute, or accept it. ' +
      'Everything you submit is stored as a public GitHub issue.</p>' +
      '<div class="stats">' +
        '<div class="stat"><div class="n">' + s.total + '</div><div class="l">Problems</div></div>' +
        '<div class="stat"><div class="n">' + s.solved + '</div><div class="l">Solutions</div></div>' +
        '<div class="stat"><div class="n">' + s.verdicts + '</div><div class="l">Verdicts</div></div>' +
        '<div class="stat"><div class="n">' + s.validators + '</div><div class="l">Validators</div></div>' +
      '</div>' +
      '<div class="controls">' +
        '<input id="q" type="search" placeholder="Search by ID or question text…" autocomplete="off">' +
        '<select id="verdict-filter"><option value="">All verdicts</option>' +
          '<option value="validate">Validated</option><option value="refute">Refuted</option>' +
          '<option value="accept">Accepted</option><option value="none">No verdict yet</option></select>' +
      '</div>' +
      '<div class="chips" id="chips"><button class="chip active" data-section="">All sections</button>' +
        Object.keys(sections).sort().map(function (k) {
          return '<button class="chip" data-section="' + esc(k) + '">' + esc(k) + ' (' + sections[k] + ')</button>';
        }).join('') +
      '</div>' +
      '<div class="table-wrap"><table><thead><tr><th>ID</th><th>Question</th><th>Section</th><th>Verdict</th></tr></thead>' +
      '<tbody id="rows"></tbody></table></div>';

    var q = document.getElementById('q');
    var vf = document.getElementById('verdict-filter');
    var activeSection = '';
    document.getElementById('chips').addEventListener('click', function (e) {
      var b = e.target.closest('.chip'); if (!b) return;
      activeSection = b.getAttribute('data-section');
      Array.prototype.forEach.call(this.querySelectorAll('.chip'), function (x) { x.classList.remove('active'); });
      b.classList.add('active');
      drawRows();
    });
    q.addEventListener('input', drawRows);
    vf.addEventListener('change', drawRows);

    function drawRows() {
      var term = q.value.trim().toLowerCase();
      var vfVal = vf.value;
      var rows = state.problems.filter(function (p) {
        if (activeSection && (p.section || 'Other') !== activeSection) return false;
        if (term && (p.id + ' ' + p.question).toLowerCase().indexOf(term) < 0) return false;
        var v = verdictFor(p.id);
        var types = v ? (v.verdicts || []).map(function (x) { return String(x.type || '').toLowerCase(); }) : [];
        if (vfVal === 'none' && types.length) return false;
        if (vfVal && vfVal !== 'none' && types.indexOf(vfVal) < 0) return false;
        return true;
      });
      var body = document.getElementById('rows');
      if (!rows.length) { body.innerHTML = '<tr><td colspan="4" class="empty">No matching problems.</td></tr>'; return; }
      body.innerHTML = rows.slice(0, 400).map(function (p) {
        var v = verdictFor(p.id);
        var types = v ? (v.verdicts || []).map(function (x) { return String(x.type || '').toLowerCase(); }) : [];
        var badge = '';
        if (types.indexOf('validate') >= 0) badge = '<span class="badge confirm">validated</span>';
        else if (types.indexOf('refute') >= 0) badge = '<span class="badge dispute">refuted</span>';
        else if (types.indexOf('accept') >= 0) badge = '<span class="badge accept">accepted</span>';
        else badge = '<span class="badge none">open</span>';
        return '<tr><td class="id-cell"><a href="./problem/' + esc(p.id) + '">' + esc(p.id) + '</a></td>' +
          '<td class="q-text">' + esc(p.question) + '</td>' +
          '<td>' + esc(p.section || '—') + '</td><td>' + badge + '</td></tr>';
      }).join('') + (rows.length > 400 ? '<tr><td colspan="4" class="small">Showing first 400 of ' + rows.length + '. Narrow the search.</td></tr>' : '');
    }
    drawRows();
  }

  function issueUrl(id, kind) {
    var repo = state.config.repo || 'OWNER/pathfinder';
    if (repo.indexOf('OWNER') === 0) return null;
    var title = '[' + kind.toUpperCase() + '] ' + id;
    var body = 'Problem: ' + id + '\nVerdict: ' + kind.toUpperCase() + '\n\n' +
      'Reason (what did you check, and what did you find?):\n\n' +
      'Evidence links (optional):\n\n' +
      'Lean certificate (optional):\n\n' +
      '---\nThis issue was opened from the Project Pathfinder corpus page for ' + id + '.\n';
    return 'https://github.com/' + repo + '/issues/new?' + new URLSearchParams({
      labels: 'validation', title: title, body: body
    }).toString();
  }

  function renderLifeGraph(events, id) {
    var evs = (events || []).filter(function (e) { return !id || e.problem_id === id; });
    if (!evs.length) return '<p class="small">No recorded activity yet.</p>';
    var times = evs.map(function (e) { return new Date(e.timestamp || e.created_at || 0).getTime(); }).filter(function (t) { return t > 0; });
    if (!times.length) return '<p class="small">No dated activity yet.</p>';
    var min = Math.min.apply(null, times), max = Math.max.apply(null, times);
    var span = Math.max(max - min, 1);
    var lanes = { validate: 1, refute: 2, accept: 3, attempt: 4, other: 5 };
    var W = 900, H = 170, pad = 34;
    var pts = evs.map(function (e) {
      var t = new Date(e.timestamp || e.created_at || 0).getTime();
      var lane = lanes[String(e.type || '').toLowerCase()] || 5;
      var x = pad + ((t - min) / span) * (W - 2 * pad);
      var y = 18 + lane * 26;
      var kind = String(e.type || '').toLowerCase();
      var cls = kind === 'validate' ? 'validate' : (kind === 'refute' ? 'refute' : (kind === 'accept' ? 'accept' : ''));
      return '<circle class="event ' + cls + '" cx="' + x.toFixed(1) + '" cy="' + y + '" r="5"><title>' +
        esc((e.actor || 'anonymous') + ' — ' + (e.type || 'event') + ' — ' + (e.detail || '').slice(0, 120)) + '</title></circle>';
    }).join('');
    var d0 = new Date(min).toISOString().slice(0, 10), d1 = new Date(max).toISOString().slice(0, 10);
    return '<svg class="timeline" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Validation timeline">' +
      '<line class="axis" x1="' + pad + '" y1="150" x2="' + (W - pad) + '" y2="150"/>' +
      '<text class="axis-label" x="' + pad + '" y="165">' + d0 + '</text>' +
      '<text class="axis-label" x="' + (W - pad) + '" y="165" text-anchor="end">' + d1 + '</text>' +
      '<text class="axis-label" x="2" y="44">validate</text>' +
      '<text class="axis-label" x="2" y="70">refute</text>' +
      '<text class="axis-label" x="2" y="96">accept</text>' +
      '<text class="axis-label" x="2" y="122">attempt</text>' + pts + '</svg>';
  }

  function renderProblem(p) {
    var id = p.id;
    var v = verdictFor(id);
    var verdicts = (v && v.verdicts) || [];
    var counts = v && v.counts || {};
    var figCites = (p.figures_used || []).map(function (f) { return '<code>' + esc(f) + '</code>'; }).join(', ');
    var btn = function (kind) {
      var url = issueUrl(id, kind);
      if (!url) return '<span class="btn ' + kind + '" title="Set the repository owner in data/config.json"> ' + kind.toUpperCase() + '</span>';
      return '<a class="btn ' + kind + '" href="' + esc(url) + '" target="_blank" rel="noopener">' + kind.toUpperCase() + '</a>';
    };
    app.innerHTML =
      '<a class="back" href="./">← Back to corpus</a>' +
      '<h1>' + esc(id) + '</h1>' +
      '<p class="lede">' + esc(p.question) + '</p>' +
      '<p class="meta">' + esc(p.section || '—') + ' · mode: ' + esc(p.mode || 'unspecified') +
        ' · ' + (p.word_count || 0) + ' words · ' + (p.world_sources || 0) + ' world sources</p>' +
      (state.config.repo && state.config.repo.indexOf('OWNER') !== 0
        ? '<div class="actions">' + btn('validate') + btn('refute') + btn('accept') + '</div>'
        : '<div class="panel"><strong>Validator links not configured yet.</strong> Set <code>repo</code> in <code>data/config.json</code> to <code>&lt;owner&gt;/pathfinder</code> when the public repository is created.</div>') +
      '<div class="panel"><h2>Current answer</h2><div class="pre">' + esc(p.tether_summary || 'No summary available.') + '</div></div>' +
      '<div class="panel"><h2>WATSON verdict</h2><div class="pre">' + esc(p.verdict_summary || 'No verdict summary available.') + '</div>' +
        '<p class="small">Figures used: ' + (figCites || 'none recorded') + '</p></div>' +
      '<div class="panel"><h2>Human verdicts</h2>' +
        (verdicts.length ? verdicts.map(function (x) {
          var t = String(x.type || '').toLowerCase();
          return '<div class="verdict ' + esc(t) + '"><div><span class="who">' + esc(x.validator || 'anonymous') +
            '</span> · <span class="when">' + esc((x.created_at || '').slice(0, 10)) + '</span></div>' +
            '<div>' + esc(x.reason || '(no reason given)') + '</div>' +
            '<div class="votes">👍 ' + ((x.reactions && x.reactions['+1']) || 0) +
            ' · 👎 ' + ((x.reactions && x.reactions['-1']) || 0) +
            (x.issue_url ? ' · <a href="' + esc(x.issue_url) + '" target="_blank" rel="noopener">issue</a>' : '') + '</div></div>';
        }).join('') : '<p class="small">No verdicts yet. Be the first.</p>') +
        '<p class="small">Tally: validate ' + (counts.validate || 0) + ' · refute ' + (counts.refute || 0) + ' · accept ' + (counts.accept || 0) + '</p>' +
      '</div>' +
      '<div class="panel"><h2>Life graph</h2>' + renderLifeGraph(state.history.events, id) + '</div>' +
      '<div class="panel"><h2>Attempts &amp; rebuttals</h2>' +
        (p.attempts && p.attempts.length
          ? p.attempts.map(function (a) { return '<p class="small">Round ' + esc(a.round) + ' · ' + esc(a.timestamp || '') + ' · <a href="' + esc(a.path || '#') + '">open folder</a></p>'; }).join('')
          : '<p class="small">Round 1 is the derivation shown above. Rebuttals add round 2, 3, … N.</p>') +
      '</div>';

    var g = document.getElementById('generated-at');
    if (g) g.textContent = 'Data generated ' + esc((state.problemsMeta && state.problemsMeta.generated_at || '').slice(0, 19).replace('T', ' '));
  }

  function start() {
    Promise.all([
      fetchJSON('data/config.json'),
      fetchJSON('data/problems.json'),
      fetchJSON('data/validation.json'),
      fetchJSON('data/history.json')
    ]).then(function (r) {
      state.config = r[0] || {};
      var pd = r[1] || { problems: [] };
      state.problemsMeta = pd;
      state.problems = pd.problems || [];
      state.validation = r[2] || { problems: {} };
      state.history = r[3] || { events: [] };

      var g = document.getElementById('generated-at');
      if (g) g.textContent = 'Data generated ' + String(pd.generated_at || '').slice(0, 19).replace('T', ' ');

      var id = problemIdFromUrl();
      if (id) {
        var p = state.problems.find(function (x) { return x.id === id; });
        if (p) renderProblem(p);
        else app.innerHTML = '<h1>Not found</h1><p class="lede">No problem with ID ' + esc(id) + '. <a href="./">Back to corpus</a>.</p>';
      } else {
        renderDashboard();
      }
    });
  }

  start();
})();
