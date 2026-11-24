/* Project Pathfinder — Pages corpus browser + validation front-end.
 * Reads data/*.json produced by Scripts/export_public_data.py and the sync Action.
 * No backend: verdict submission uses prefilled GitHub issue URLs.
 */
(function () {
  'use strict';

  var app = document.getElementById('app');
  var left = document.getElementById('left-rail');
  var right = document.getElementById('right-rail');
  var crumb = document.getElementById('crumb');
  var modePill = document.getElementById('mode-pill');

  var state = {
    config: {}, problems: [], validation: { problems: {} }, history: { events: [] },
    ui: { category: '', query: '', verdict: '', tab: 'answer' }
  };

  var META = {
    BUS:   { name: 'Business', summary: 'How firms gain and lose advantage, how organizations decide, and what makes strategies and markets work.' },
    CMP:   { name: 'Complexity Science', summary: 'Emergence, nonlinear systems, resilience, and how simple local rules produce collective behavior.' },
    COG:   { name: 'Cognitive Science', summary: 'Attention, memory, perception, reasoning, and how minds work with limited time and information.' },
    EAR:   { name: 'Earth Systems', summary: 'Climate, oceans, cycles, and how the planet’s coupled systems respond to change.' },
    ECN:   { name: 'Economics', summary: 'Markets, incentives, measurement, policy, and how economies fluctuate and grow.' },
    ECO:   { name: 'Ecology', summary: 'Species interactions, biodiversity, stability, and how ecosystems persist under stress.' },
    HIS:   { name: 'History of Science and Knowledge', summary: 'How ideas, institutions, and evidence have changed what counts as knowledge.' },
    INF:   { name: 'Information Theory', summary: 'What information is, how it travels, and the limits it sets on prediction and inference.' },
    INS:   { name: 'Institutional Questions', summary: 'How rules, organizations, and incentives shape behavior and drive institutional change.' },
    ORI:   { name: 'Origins of Life', summary: 'How life begins, what counts as living, and what the evidence from early worlds can support.' },
    QMGR:  { name: 'Physics I — QM and GR', summary: 'Quantum mechanics, general relativity, and the points where the two accounts fail to meet.' },
    QMGR2: { name: 'Physics II — QM and GR', summary: 'Spacetime, observation, simulation, and what a physical theory can actually settle.' },
    REA:   { name: 'Reasoning and Intelligence', summary: 'Defining intelligence, learning, causality, agency, limits, and how people and machines reason.' }
  };

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

  function verdictFor(id) { return (state.validation.problems && state.validation.problems[id]) || null; }
  function verdictTypes(id) {
    var v = verdictFor(id);
    return v ? (v.verdicts || []).map(function (x) { return String(x.type || '').toLowerCase(); }) : [];
  }
  function badgeFor(id) {
    var t = verdictTypes(id);
    if (t.indexOf('validate') >= 0) return '<span class="badge validate">✓ validated</span>';
    if (t.indexOf('refute') >= 0) return '<span class="badge refute">✕ refuted</span>';
    if (t.indexOf('accept') >= 0) return '<span class="badge accept">◆ accepted</span>';
    return '<span class="badge open">open</span>';
  }

  function issueUrl(id, kind, reason) {
    var repo = state.config.repo || 'IsaiahN/pathfinder';
    if (repo.indexOf('OWNER') === 0) return null;
    var body = 'Problem: ' + id + '\nVerdict: ' + kind.toUpperCase() + '\n\n' +
      'Reason (what did you check, and what did you find?):\n' + (reason || '') + '\n\n' +
      'Evidence links (optional):\n\n' +
      'Lean certificate (optional):\n\n' +
      '---\nOpened from the Project Pathfinder corpus page for ' + id + '.\n';
    return 'https://github.com/' + repo + '/issues/new?' + new URLSearchParams({
      labels: 'validation', title: '[' + kind.toUpperCase() + '] ' + id, body: body
    }).toString();
  }

  function actionButtons(id) {
    var kinds = ['validate', 'refute', 'accept'];
    return '<div class="btn-row">' + kinds.map(function (k, i) {
      var url = issueUrl(id, k);
      var cls = 'btn ' + (i === 0 ? 'btn-primary' : 'btn-outline');
      return url ? '<a class="' + cls + '" href="' + esc(url) + '" target="_blank" rel="noopener">' +
        k.toUpperCase() + '</a>' : '<span class="' + cls + '">' + k.toUpperCase() + '</span>';
    }).join('') + '</div>';
  }

  function bar(label, value, max, cls, suffix) {
    var pct = max ? Math.min(100, Math.round((value / max) * 100)) : 0;
    return '<div class="health-label"><span>' + esc(label) + '</span><b>' + esc(suffix == null ? value : suffix) + '</b></div>' +
      '<div class="bar-track"><div class="bar-fill ' + (cls || '') + '" style="width:' + pct + '%"></div></div>';
  }

  function renderLifeGraph(events, id) {
    var evs = (events || []).filter(function (e) { return !id || e.problem_id === id; });
    if (!evs.length) return '<p class="small">No recorded activity yet. Your verdict would be the first mark on this timeline.</p>';
    var times = evs.map(function (e) { return new Date(e.timestamp || e.created_at || 0).getTime(); }).filter(function (t) { return t > 0; });
    if (!times.length) return '<p class="small">No dated activity yet.</p>';
    var min = Math.min.apply(null, times), max = Math.max.apply(null, times), span = Math.max(max - min, 1);
    var lanes = { validate: 1, refute: 2, accept: 3, rebuttal: 4, attempt: 5 };
    var W = 780, H = 176, pad = 34;
    var pts = evs.map(function (e) {
      var t = new Date(e.timestamp || e.created_at || 0).getTime();
      var lane = lanes[String(e.type || '').toLowerCase()] || 5;
      var x = pad + ((t - min) / span) * (W - 2 * pad), y = 20 + lane * 26;
      var cls = String(e.type || '').toLowerCase();
      return '<circle class="event ' + esc(cls) + '" cx="' + x.toFixed(1) + '" cy="' + y + '" r="5"><title>' +
        esc((e.actor || 'anonymous') + ' — ' + (e.type || 'event') + ' — ' + String(e.detail || '').slice(0, 140)) +
        '</title></circle>';
    }).join('');
    return '<svg class="timeline" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Validation timeline">' +
      '<line class="axis" x1="' + pad + '" y1="158" x2="' + (W - pad) + '" y2="158"/>' +
      '<text class="axis-label" x="' + pad + '" y="172">' + new Date(min).toISOString().slice(0, 10) + '</text>' +
      '<text class="axis-label" x="' + (W - pad) + '" y="172" text-anchor="end">' + new Date(max).toISOString().slice(0, 10) + '</text>' +
      '<text class="axis-label" x="2" y="46">validate</text><text class="axis-label" x="2" y="72">refute</text>' +
      '<text class="axis-label" x="2" y="98">accept</text><text class="axis-label" x="2" y="124">rebuttal</text>' + pts + '</svg>';
  }

  /* ── Dashboard ── */
  function renderDashboard() {
    var meta = META[state.ui.category];
    crumb.textContent = meta ? meta.name : 'Corpus';
    modePill.textContent = 'OPEN BENCHMARK';
    modePill.className = 'mode-pill';

    var counts = {};
    state.problems.forEach(function (p) { counts[p.category || 'Other'] = (counts[p.category || 'Other'] || 0) + 1; });
    var solved = state.problems.filter(function (p) { return p.solution_status === 'complete'; }).length;
    var sources = state.problems.reduce(function (n, p) { return n + (p.world_sources || 0); }, 0);
    var cited = state.problems.filter(function (p) { return (p.figures_used || []).length; }).length;
    var verdicts = Object.keys(state.validation.problems || {}).reduce(function (n, k) {
      return n + ((state.validation.problems[k].verdicts || []).length); }, 0);

    left.innerHTML =
      '<div class="rail-title">◇ Registry</div>' +
      '<div class="rail-item' + (state.ui.category ? '' : ' active') + '" data-cat="">All problems<span class="num">' + state.problems.length + '</span></div>' +
      Object.keys(counts).sort().map(function (k) {
        var nm = META[k] ? META[k].name : k;
        return '<div class="rail-item' + (state.ui.category === k ? ' active' : '') + '" data-cat="' + esc(k) +
          '" title="' + esc(nm) + '">' +
          '<span class="tree-icon">▦</span>' + esc(k) + '<span class="num">' + counts[k] + '</span></div>';
      }).join('') +
      '<div class="rail-foot">13 fields · 100 questions each</div>';

    right.innerHTML =
      '<div class="panel"><h3>Next steps</h3>' +
        '<div class="next-step"><span class="arrow">→</span><span><strong>Pick a problem</strong> from the table and read the derivation.</span></div>' +
        '<div class="next-step"><span class="arrow">→</span><span><strong>' + (verdicts ? verdicts + ' verdict' + (verdicts === 1 ? '' : 's') + ' recorded' : 'No verdicts yet') +
        '</strong> — be the first to check one.</span></div>' +
        '<div class="next-step"><span class="arrow">→</span><span><strong>Refute before you endorse.</strong> A concrete failure is worth more than agreement.</span></div>' +
      '</div>' +
      '<div class="panel"><h3>Corpus health</h3>' +
        bar('Solutions', solved, state.problems.length, 'green', solved + ' / ' + state.problems.length) +
        bar('Sources read', sources, 25000, '', sources.toLocaleString()) +
        bar('Figure cited', cited, state.problems.length, 'purple', cited + ' / ' + state.problems.length) +
        '<p class="meter-note">Health is a coverage meter, not a verdict. It says how much material exists, not whether any claim is true.</p>' +
      '</div>' +
      '<div class="panel"><h3>Mode legend</h3>' +
        '<div class="next-step"><span class="badge general">general</span><span>Structural shape, not settled.</span></div>' +
        '<div class="next-step"><span class="badge specified">specified</span><span>Bound by stated conditions.</span></div>' +
        '<div class="next-step"><span class="badge grounded">grounded</span><span>Settled against a ground.</span></div>' +
      '</div>';

    app.innerHTML =
      '<div class="page-head"><div class="eyebrow">Corpus · ' + esc(meta ? meta.name : 'all fields') + '</div>' +
        '<h1>🧭 ' + esc(meta ? meta.name : 'Project Pathfinder') + '</h1>' +
        '<p>' + esc(meta ? meta.summary :
          'One method, 1,300 questions, and an open record of every human verdict. Pick a problem, read the derivation, then validate, refute, or accept it.') + '</p></div>' +
      '<div class="toolbar"><div class="searchbox"><span class="muted">⌕</span>' +
        '<input id="q" type="search" placeholder="Search by ID or question text…" autocomplete="off" value="' + esc(state.ui.query) + '">' +
        '<span class="esc-key">⌘K</span></div></div>' +
      '<div class="tabs" id="vtabs">' +
        [['', 'All'], ['open', 'Open'], ['validate', 'Validated'], ['refute', 'Refuted'], ['accept', 'Accepted']].map(function (x) {
          return '<button class="tab' + (state.ui.verdict === x[0] ? ' active' : '') + '" data-v="' + x[0] + '">' + x[1] + '</button>';
        }).join('') + '</div>' +
      '<div class="table-card"><table><thead><tr><th>ID</th><th>Question</th><th>Mode</th><th>Verdict</th></tr></thead>' +
      '<tbody id="rows"></tbody></table></div>' +
      '<div class="command-bar"><span class="muted">⌕</span><input id="cmd" placeholder="Type an ID to jump straight to a problem…">' +
      '<button class="command-send" id="cmd-send">➤</button></div>';

    function drawRows() {
      var q = state.ui.query.trim().toLowerCase();
      var rows = state.problems.filter(function (p) {
        if (state.ui.category && (p.category || 'Other') !== state.ui.category) return false;
        if (q && (p.id + ' ' + p.question).toLowerCase().indexOf(q) < 0) return false;
        var t = verdictTypes(p.id);
        if (state.ui.verdict === 'open' && t.length) return false;
        if (state.ui.verdict && state.ui.verdict !== 'open' && t.indexOf(state.ui.verdict) < 0) return false;
        return true;
      });
      var body = document.getElementById('rows');
      if (!rows.length) { body.innerHTML = '<tr><td colspan="4" class="empty">No matching problems.</td></tr>'; return; }
      body.innerHTML = rows.slice(0, 300).map(function (p) {
        var mode = p.mode || 'specified';
        return '<tr><td class="id-cell"><a href="./problem/' + esc(p.id) + '">' + esc(p.id) + '</a></td>' +
          '<td class="q-cell">' + esc(p.question) + '</td>' +
          '<td><span class="badge ' + esc(mode) + '">' + esc(mode) + '</span></td>' +
          '<td>' + badgeFor(p.id) + '</td></tr>';
      }).join('') + (rows.length > 300 ? '<tr><td colspan="4" class="small">Showing 300 of ' + rows.length + '. Narrow the search.</td></tr>' : '');
    }

    document.getElementById('q').addEventListener('input', function (e) { state.ui.query = e.target.value; drawRows(); });
    document.getElementById('vtabs').addEventListener('click', function (e) {
      var b = e.target.closest('.tab'); if (!b) return;
      state.ui.verdict = b.getAttribute('data-v'); renderDashboard();
    });
    // Single handler slot: the rail is a persistent node, so addEventListener
    // here would stack a new closure on every re-render.
    left.onclick = function (e) {
      var b = e.target.closest('.rail-item'); if (!b) return;
      state.ui.category = b.getAttribute('data-cat'); renderDashboard();
    };
    var jump = function () {
      var v = document.getElementById('cmd').value.trim().toUpperCase();
      if (v) location.href = './problem/' + encodeURIComponent(v);
    };
    document.getElementById('cmd-send').addEventListener('click', jump);
    document.getElementById('cmd').addEventListener('keydown', function (e) { if (e.key === 'Enter') jump(); });
    drawRows();
  }

  /* ── Problem view ── */
  function renderProblem(p) {
    var id = p.id;
    var v = verdictFor(id);
    var verdicts = (v && v.verdicts) || [];
    var counts = (v && v.counts) || {};
    var mode = p.mode || 'specified';
    crumb.textContent = id;
    modePill.textContent = mode;
    modePill.className = 'mode-pill ' + esc(mode);

    var section = p.section || 'Other';
    var siblings = state.problems.filter(function (x) { return (x.section || 'Other') === section; }).slice(0, 40);
    left.innerHTML =
      '<div class="rail-item" id="back"><span class="tree-icon">←</span>All problems</div>' +
      '<div class="rail-title">▾ ' + esc(section) + '</div>' +
      siblings.map(function (s) {
        return '<div class="rail-item' + (s.id === id ? ' active' : '') + '" data-id="' + esc(s.id) + '">' +
          '<span class="tree-icon">▤</span><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + esc(s.id) + '</span></div>';
      }).join('') +
      '<div class="rail-foot">Problem ' + id + ' of ' + state.problems.length + '</div>';
    left.onclick = function (e) {
      var b = e.target.closest('.rail-item'); if (!b) return;
      if (b.id === 'back') { location.href = './'; return; }
      var sid = b.getAttribute('data-id'); if (sid) location.href = './problem/' + encodeURIComponent(sid);
    };

    var figs = (p.figures_used || []).map(function (f) { return '<span class="badge count">' + esc(f) + '</span>'; }).join(' ');
    var folderUrl = 'https://github.com/IsaiahN/pathfinder/tree/main/' + encodeURI(p.solution_path || '');
    var figCount = (p.figures_used || []).length;
    right.innerHTML =
      '<div class="panel"><h3>Next steps</h3>' +
        '<div class="next-step"><span class="arrow">→</span><span><strong>Read the symbolic answer</strong> and its stated non-claims.</span></div>' +
        '<div class="next-step"><span class="arrow">→</span><span><strong>Check the WATSON verdict</strong> for what the world actually says.</span></div>' +
        '<div class="next-step"><span class="arrow">→</span><span>' + (verdicts.length ?
          '<strong>' + verdicts.length + ' verdict(s) recorded</strong> — add a rebuttal if you disagree.' :
          '<strong>No verdict yet</strong> — test the pre-registered refuter.') + '</span></div>' +
      '</div>' +
      '<div class="panel"><h3>Claim health</h3>' +
        bar('Figure grounding', figCount, 10, 'purple', figCount + ' figures') +
        bar('World sources', p.world_sources || 0, 20, '', (p.world_sources || 0) + ' read') +
        bar('Derivation length', p.word_count || 0, 22000, 'green', (p.word_count || 0).toLocaleString() + ' words') +
        '<p class="meter-note">These are coverage meters. They do not make the claim true.</p>' +
      '</div>' +
      '<div class="panel"><h3>Human verdicts</h3>' +
        (verdicts.length ? verdicts.map(function (x) {
          var t = String(x.type || '').toLowerCase();
          return '<div class="verdict-item ' + esc(t) + '"><div><span class="who">' + esc(x.validator || 'anonymous') +
            '</span> <span class="when">' + esc(String(x.created_at || '').slice(0, 10)) + '</span></div>' +
            '<p>' + esc(String(x.reason || '(no reason given)').slice(0, 240)) + '</p>' +
            '<p class="when">👍 ' + ((x.reactions && x.reactions['+1']) || 0) + ' · 👎 ' + ((x.reactions && x.reactions['-1']) || 0) +
            (x.issue_url ? ' · <a href="' + esc(x.issue_url) + '" target="_blank" rel="noopener">issue ↗</a>' : '') + '</p></div>';
        }).join('') : '<p class="small">No verdicts yet. Be the first.</p>') +
        '<p class="small">validate ' + (counts.validate || 0) + ' · refute ' + (counts.refute || 0) + ' · accept ' + (counts.accept || 0) + '</p>' +
      '</div>' +
      '<div class="panel"><h3>Submit a verdict</h3>' + actionButtons(id) + '</div>';

    var tabs = [['answer', 'Answer'], ['watson', 'WATSON'], ['figures', 'Figures'], ['sources', 'Sources'],
                ['verdicts', 'Verdicts'], ['attempts', 'Attempts']];
    app.innerHTML =
      '<div class="page-head"><div class="eyebrow">Problem · ' + esc(p.category || '') + '</div>' +
        '<h1 class="mono">' + esc(id) + '</h1><p>' + esc(p.question) + '</p></div>' +
      '<div class="tabs" id="ptabs">' + tabs.map(function (t) {
        return '<button class="tab' + (state.ui.tab === t[0] ? ' active' : '') + '" data-t="' + t[0] + '">' + t[1] + '</button>';
      }).join('') + '</div><div id="tabbody"></div>';

    function drawTab() {
      var t = state.ui.tab, body = document.getElementById('tabbody'), html = '';
      if (t === 'answer') {
        html = '<div class="card"><h2><span class="dot">✦</span> The Tether answer</h2><div class="prose">' +
          esc(p.tether_summary || 'No summary available.') + '</div></div>' +
          '<div class="card"><h2><span class="dot">◇</span> What this is</h2><p>A simulated derivation checked for internal consistency against the figures. It is not a ground reading and does not settle the question. Mode: <span class="badge ' + esc(mode) + '">' + esc(mode) + '</span></p></div>';
      } else if (t === 'watson') {
        html = '<div class="card"><h2><span class="dot">◈</span> WATSON verdict</h2><div class="prose">' +
          esc(p.verdict_summary || 'No verdict summary available.') + '</div></div>' +
          '<div class="card"><h2><span class="dot">◇</span> Figures used</h2><p>' + (figs || 'none recorded') + '</p></div>';
      } else if (t === 'figures') {
        html = '<div class="card"><h2><span class="dot">✦</span> Canonical figures</h2><p>' + (figs || 'none recorded') +
          '</p><p class="small">The figures are the authority. Verbatim text and line numbers live in <span class="mono">FRAMEWORK/reference/03-FIGURES_TEXT.md</span>.</p>' +
          '<p><a href="' + esc(folderUrl) + '" target="_blank" rel="noopener">Open the full solution folder ↗</a></p></div>';
      } else if (t === 'sources') {
        html = '<div class="card"><h2><span class="dot">◈</span> Source ledger</h2><p>' + (p.world_sources || 0) +
          ' world sources read, ' + (p.fig_citations || 0) + ' figure citations in the derivation.</p>' +
          '<p class="small">Every source, quote, access date and overlap note is in file 10 of the solution folder. World sources corroborate; they never overrule a figure.</p>' +
          '<p><a href="' + esc(folderUrl) + '" target="_blank" rel="noopener">Open the source ledger ↗</a></p></div>';
      } else if (t === 'verdicts') {
        html = '<div class="card"><h2><span class="dot">◉</span> Life graph</h2>' + renderLifeGraph(state.history.events, id) + '</div>' +
          '<div class="card"><h2><span class="dot">◇</span> Verdict detail</h2>' +
          (verdicts.length ? verdicts.map(function (x) {
            return '<p class="small"><span class="mono">' + esc(x.validator || 'anonymous') + '</span> · ' +
              esc(String(x.type || '').toUpperCase()) + ' · ' + esc(String(x.created_at || '').slice(0, 10)) + '</p>' +
              '<p>' + esc(x.reason || '') + '</p>';
          }).join('') : '<p class="small">No verdicts yet.</p>') + '</div>' + actionButtons(id);
      } else {
        html = '<div class="card"><h2><span class="dot">⟳</span> Attempts and rebuttals</h2>' +
          ((p.attempts && p.attempts.length) ? p.attempts.map(function (a) {
            return '<p class="small">Round ' + esc(a.round) + ' · <a href="' +
              esc('https://github.com/IsaiahN/pathfinder/tree/main/' + encodeURI(a.path || '')) +
              '" target="_blank" rel="noopener">open folder ↗</a></p>';
          }).join('') : '<p class="small">Round 1 is the derivation above. A rebuttal opens round 2, then 3, and so on. Nothing is overwritten.</p>') + '</div>';
      }
      body.innerHTML = html + '<div class="command-bar"><span class="muted">✎</span>' +
        '<input id="propose" placeholder="Propose a refutation or a validation…">' +
        '<button class="command-send" id="propose-send">➤</button></div>';
      var input = document.getElementById('propose');
      var go = function () {
        var url = issueUrl(id, 'refute', input.value.trim());
        if (url) window.open(url, '_blank', 'noopener');
      };
      document.getElementById('propose-send').addEventListener('click', go);
      input.addEventListener('keydown', function (e) { if (e.key === 'Enter') go(); });
    }
    document.getElementById('ptabs').addEventListener('click', function (e) {
      var b = e.target.closest('.tab'); if (!b) return;
      state.ui.tab = b.getAttribute('data-t');
      Array.prototype.forEach.call(this.querySelectorAll('.tab'), function (x) { x.classList.remove('active'); });
      b.classList.add('active'); drawTab();
    });
    drawTab();
  }

  /* ── Command palette / shortcuts ── */
  function openModal(html) {
    document.getElementById('modal-box').innerHTML = html;
    document.getElementById('modal').hidden = false;
    var input = document.getElementById('modal-box').querySelector('input');
    if (input) input.focus();
  }
  function closeModal() { document.getElementById('modal').hidden = true; }
  function openSearch() {
    openModal('<div class="modal-head"><span class="muted">⌕</span><input id="msearch" placeholder="Search problems or type an ID…"><span class="esc-key">ESC</span></div>' +
      '<div class="modal-body" id="mresults"></div>');
    var input = document.getElementById('msearch'), results = document.getElementById('mresults');
    function draw() {
      var q = input.value.trim().toLowerCase();
      var rows = state.problems.filter(function (p) { return !q || (p.id + ' ' + p.question).toLowerCase().indexOf(q) >= 0; }).slice(0, 12);
      results.innerHTML = rows.map(function (p) {
        return '<div class="modal-row" data-id="' + esc(p.id) + '"><span class="mono" style="color:var(--accent)">' + esc(p.id) +
          '</span><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + esc(p.question) + '</span></div>';
      }).join('') || '<div class="modal-row muted">No matching problems</div>';
    }
    input.addEventListener('input', draw);
    results.addEventListener('click', function (e) {
      var r = e.target.closest('.modal-row'); if (!r || !r.getAttribute('data-id')) return;
      location.href = './problem/' + encodeURIComponent(r.getAttribute('data-id'));
    });
    draw();
  }
  function openShortcuts() {
    openModal('<div class="modal-head"><strong>Keyboard shortcuts</strong><span class="spacer"></span><span class="esc-key">ESC</span></div>' +
      '<div class="modal-body" style="padding:12px 16px">' +
      [['Ctrl+K', 'Search the corpus'], ['Enter', 'Open highlighted problem'], ['Esc', 'Close this dialog']].map(function (s) {
        return '<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border);font-size:0.82rem">' +
          '<span class="muted">' + s[1] + '</span><span class="esc-key">' + s[0] + '</span></div>';
      }).join('') + '</div>');
  }
  document.getElementById('search-btn').addEventListener('click', openSearch);
  document.getElementById('shortcuts-btn').addEventListener('click', openShortcuts);
  document.getElementById('modal').addEventListener('click', function (e) { if (e.target.id === 'modal') closeModal(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSearch(); }
  });

  function start() {
    Promise.all([
      fetchJSON('data/config.json'), fetchJSON('data/problems.json'),
      fetchJSON('data/validation.json'), fetchJSON('data/history.json')
    ]).then(function (r) {
      state.config = r[0] || {};
      state.problems = (r[1] && r[1].problems) || [];
      state.validation = r[2] || { problems: {} };
      state.history = r[3] || { events: [] };
      var meta = r[1] || {};
      var g = document.getElementById('generated-at');
      if (g) g.textContent = 'data ' + String(meta.generated_at || '').slice(0, 10);
      var c = document.getElementById('status-count');
      if (c) c.textContent = state.problems.length.toLocaleString() + ' problems';

      var id = problemIdFromUrl();
      if (id) {
        var p = state.problems.find(function (x) { return x.id === id; });
        if (p) renderProblem(p);
        else {
          crumb.textContent = 'Not found';
          app.innerHTML = '<div class="page-head"><div class="eyebrow">404</div><h1>' + esc(id) +
            '</h1><p>No problem with that ID. <a href="./">Back to corpus</a>.</p></div>';
        }
      } else renderDashboard();
    });
  }
  start();
})();
