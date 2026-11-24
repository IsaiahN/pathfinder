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

  var BRAND_ICON = '<img class="brand-icon" src="assets/favicon.svg" alt="">';

  var state = {
    config: {}, problems: [], validation: { problems: {} }, history: { events: [] },
    submitted: { questions: [] }, queue: { items: [], daily_cap: 100 },
    figures: [], docs: {}, theme: 'amber',
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
      '</div>' +
      '<div class="panel"><h3>Question queue</h3>' +
        bar('Today’s batch', state.queue.queued_count || 0, state.queue.daily_cap || 100, 'purple',
            (state.queue.queued_count || 0) + ' / ' + (state.queue.daily_cap || 100)) +
        '<div class="next-step" style="margin-top:12px"><span class="arrow">→</span><span>' +
          ((state.queue.waiting_count || 0) ? '<strong>' + state.queue.waiting_count + ' waiting</strong> for a later day.' :
           '<strong>No backlog.</strong> New questions join today’s batch.') + '</span></div>' +
        '<div class="next-step"><span class="arrow">→</span><span>Each answer becomes a full USR-##### solution folder.</span></div>' +
        '<button class="btn btn-outline" id="rail-submit" style="margin-top:6px;width:100%">＋ Submit a question</button>' +
      '</div>';
    right.onclick = function (e) { if (e.target.id === 'rail-submit') openSubmission(); };

    app.innerHTML =
      (meta ? '' : '<img class="dash-banner" src="assets/pathfinder-banner.png" alt="Project Path Finder">') +
      '<div class="page-head"><div class="eyebrow">Corpus · ' + esc(meta ? meta.name : 'all fields') + '</div>' +
        '<h1>' + BRAND_ICON + ' ' + esc(meta ? meta.name : 'Project Pathfinder') + '</h1>' +
        '<p>' + esc(meta ? meta.summary :
          'One method, 1,300 questions, and an open record of every human verdict. Pick a problem, read the derivation, then validate, refute, or accept it.') + '</p></div>' +
      '<div class="toolbar"><div class="searchbox"><span class="muted">⌕</span>' +
        '<input id="q" type="search" placeholder="Search by ID or question text…" autocomplete="off" value="' + esc(state.ui.query) + '">' +
        '<span class="esc-key">⌘K</span></div></div>' +
      '<div class="tabs" id="vtabs">' +
        [['', 'All'], ['open', 'Open'], ['validate', 'Validated'], ['refute', 'Refuted'],
         ['accept', 'Accepted'], ['submitted', 'Submitted']].map(function (x) {
          return '<button class="tab' + (state.ui.verdict === x[0] ? ' active' : '') + '" data-v="' + x[0] + '">' + x[1] + '</button>';
        }).join('') + '</div>' +
      '<div class="table-card"><table><thead><tr><th>ID</th><th>Question</th><th>Mode</th><th>Verdict</th></tr></thead>' +
      '<tbody id="rows"></tbody></table></div>' +
      '<div class="command-bar"><span class="muted">⌕</span><input id="cmd" placeholder="Type an ID to jump straight to a problem…">' +
      '<button class="command-send" id="cmd-send">➤</button></div>';

    function drawRows() {
      var body = document.getElementById('rows');
      var sq = state.ui.query.trim().toLowerCase();
      if (state.ui.verdict === 'submitted') {
        var subs = (state.submitted.questions || []).filter(function (r) {
          return !sq || (r.id + ' ' + r.question + ' ' + (r.field || '')).toLowerCase().indexOf(sq) >= 0;
        });
        body.innerHTML = subs.length ? subs.map(function (r) {
          var answerLink = r.status === 'answered'
            ? ' · <a href="https://github.com/IsaiahN/pathfinder/tree/main/Solutions/user_submitted/' + encodeURIComponent(r.id) +
              '" target="_blank" rel="noopener">solution ↗</a>' : '';
          return '<tr><td class="id-cell"><a href="' + esc(r.source_issue) + '" target="_blank" rel="noopener">' +
            esc(r.id) + '</a></td><td class="q-cell">' + esc(r.question) + '</td>' +
            '<td>' + esc(r.field || 'user_submitted') + '</td>' +
            '<td><span class="status-pill ' + esc(r.status) + '">' + esc(r.status) + '</span>' +
            ' · <a href="' + esc(r.source_issue) + '" target="_blank" rel="noopener">issue ↗</a>' + answerLink + '</td></tr>';
        }).join('') : '<tr><td colspan="4" class="empty">No submitted questions yet. Use “Submit a question” above.</td></tr>';
        return;
      }
      var q = sq;
      var rows = state.problems.filter(function (p) {
        if (state.ui.category && (p.category || 'Other') !== state.ui.category) return false;
        if (q && (p.id + ' ' + p.question).toLowerCase().indexOf(q) < 0) return false;
        var t = verdictTypes(p.id);
        if (state.ui.verdict === 'open' && t.length) return false;
        if (state.ui.verdict && state.ui.verdict !== 'open' && t.indexOf(state.ui.verdict) < 0) return false;
        return true;
      });
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

  /* ── Reader: read-only view of the full solution documents ── */
  var READER_FILES = [
    ["07_the_tether_answer.md", "Tether answer"],
    ["09_watson_answer.md", "WATSON answer"],
    ["01_figure_grounded_audit.md", "Figure audit"],
    ["05_what_shape_means.md", "What shape means"],
    ["06_isomers_and_order.md", "Isomers and order"],
    ["08_expert_verification_packet.md", "Verification packet"],
    ["11_audit.md", "Second-seat audit"],
    ["10_source_ledger.csv", "Source ledger"],
    ["03_public_contact_points.csv", "Public contact points"]
  ];

  function mdToHtml(text) {
    var lines = text.split(/\r?\n/), out = [], inList = false, inTable = false;
    function inline(s) {
      return esc(s)
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\*([^*]+)\*/g, '<em>$1</em>')
        .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,
          '<a href="$2" target="_blank" rel="noopener">$1</a>');
    }
    lines.forEach(function (raw) {
      var ln = raw.trim();
      if (/^\|.*\|$/.test(ln)) {
        if (!inTable) { out.push('<table><tbody>'); inTable = true; }
        if (!/^\|[\s\-:|]+\|$/.test(ln)) {
          out.push('<tr>' + ln.split('|').slice(1, -1).map(function (c) {
            return '<td>' + inline(c.trim()) + '</td>';
          }).join('') + '</tr>');
        }
        return;
      }
      if (inTable) { out.push('</tbody></table>'); inTable = false; }
      if (!ln) { if (inList) { out.push('</ul>'); inList = false; } return; }
      var h = ln.match(/^(#{1,4})\s+(.+)$/);
      if (h) { var n = Math.min(h[1].length, 4); out.push('<h' + n + '>' + inline(h[2]) + '</h' + n + '>'); return; }
      if (/^[-*]\s+/.test(ln)) {
        if (!inList) { out.push('<ul>'); inList = true; }
        out.push('<li>' + inline(ln.replace(/^[-*]\s+/, '')) + '</li>'); return;
      }
      if (inList) { out.push('</ul>'); inList = false; }
      if (/^&gt;|^>/.test(ln)) { out.push('<blockquote>' + inline(ln.replace(/^>\s?/, '')) + '</blockquote>'); return; }
      if (/^---+$/.test(ln)) { out.push('<hr>'); return; }
      out.push('<p>' + inline(ln) + '</p>');
    });
    if (inList) out.push('</ul>');
    if (inTable) out.push('</tbody></table>');
    return out.join('\n');
  }

  function loadDocInto(p, file, target) {
    if (!target) return;
    var key = p.id + '/' + file;
    function show(txt) { target.innerHTML = mdToHtml(txt); }
    if (state.docs[key]) { show(state.docs[key]); return; }
    target.innerHTML = '<p class="muted">Loading ' + esc(file) + '…</p>';
    fetch(p.solution_path + '/' + encodeURIComponent(file), { cache: 'no-store' })
      .then(function (r) { return r.ok ? r.text() : 'This document is not available.'; })
      .then(function (txt) { state.docs[key] = txt; show(txt); });
  }

  function parseCsv(text) {
    var rows = [], row = [], field = '', quoted = false;
    for (var i = 0; i < text.length; i++) {
      var c = text[i];
      if (quoted) {
        if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
        else if (c === '"') { quoted = false; }
        else field += c;
      } else if (c === '"') quoted = true;
      else if (c === ',') { row.push(field); field = ''; }
      else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
      else if (c !== '\r') field += c;
    }
    if (field || row.length) { row.push(field); rows.push(row); }
    return rows;
  }

  function loadLedger(p, target) {
    if (!target) return;
    var key = p.id + '/10_source_ledger.csv';
    function show(txt) {
      var rows = parseCsv(txt);
      if (rows.length < 2) { target.innerHTML = '<p class="small">No ledger rows.</p>'; return; }
      var head = rows[0].map(function (h) { return h.trim(); });
      var wanted = ['url', 'title', 'author', 'venue', 'year', 'quote', 'field', 'status'];
      var cols = wanted.map(function (h) { return head.indexOf(h); }).filter(function (i) { return i >= 0; });
      var html = '<p class="small">' + (rows.length - 1) + ' sources read · <a href="https://github.com/IsaiahN/pathfinder/blob/main/' +
        encodeURI(p.solution_path + '/10_source_ledger.csv') + '" target="_blank" rel="noopener">open raw ledger ↗</a></p>' +
        '<div class="table-card" style="max-height:520px;overflow:auto"><table><thead><tr>' +
        cols.map(function (i) { return '<th>' + esc(head[i]) + '</th>'; }).join('') + '</tr></thead><tbody>' +
        rows.slice(1).map(function (r) {
          return '<tr>' + cols.map(function (i) {
            var v = r[i] || '';
            if (head[i] === 'url' && /^https?:\/\//.test(v)) {
              return '<td><a href="' + esc(v) + '" target="_blank" rel="noopener">' + esc(v.slice(0, 60)) + '</a></td>';
            }
            return '<td>' + esc(v.slice(0, 240)) + '</td>';
          }).join('') + '</tr>';
        }).join('') + '</tbody></table></div>';
      target.innerHTML = html;
    }
    if (state.docs[key]) { show(state.docs[key]); return; }
    target.innerHTML = '<p class="muted">Loading ledger…</p>';
    fetch(p.solution_path + '/10_source_ledger.csv', { cache: 'no-store' })
      .then(function (r) { return r.ok ? r.text() : ''; })
      .then(function (txt) { state.docs[key] = txt; show(txt); });
  }

  function loadReaderDoc(p, file, container) {
    var target = document.getElementById('reader-content');
    if (!target) return;
    var cacheKey = p.id + '/' + file;
    Array.prototype.forEach.call(container.querySelectorAll('.reader-file'), function (b) {
      b.classList.toggle('active', b.getAttribute('data-file') === file);
    });
    function show(txt) {
      target.innerHTML = '<div class="reader-file-meta">' + esc(file) + ' · read only</div>' +
        (file.endsWith('.csv')
          ? '<div class="codeblock">' + esc(txt.slice(0, 20000)) + '</div>'
          : '<div class="reader-doc">' + mdToHtml(txt) + '</div>');
      target.scrollTop = 0;
    }
    if (state.docs[cacheKey]) { show(state.docs[cacheKey]); return; }
    target.innerHTML = '<p class="muted">Loading ' + esc(file) + '…</p>';
    fetch(p.solution_path + '/' + encodeURIComponent(file), { cache: 'no-store' })
      .then(function (r) { return r.ok ? r.text() : 'This document is not available.'; })
      .then(function (txt) { state.docs[cacheKey] = txt; show(txt); });
  }

  function renderReader(p, container) {
    var issueUrl = 'https://github.com/IsaiahN/pathfinder/issues/new?' + new URLSearchParams({
      labels: 'question', title: '[QUESTION] ' + p.id,
      body: 'Question: ' + p.id + ' — ' + p.question + '\nField: user_submitted\n\nMy question or comment:\n'
    }).toString();
    container.innerHTML =
      '<div class="card"><div class="reader-layout">' +
        '<div class="reader-files">' + READER_FILES.map(function (f, i) {
          return '<button class="reader-file' + (i === 0 ? ' active' : '') + '" data-file="' + f[0] + '">' + esc(f[1]) + '</button>';
        }).join('') + '</div>' +
        '<div><div id="reader-content" class="reader-doc"><p class="muted">Loading…</p></div>' +
        '<div class="form-actions" style="border-top:1px solid var(--border);margin-top:20px">' +
          '<a class="btn btn-outline" href="' + esc(issueUrl) + '" target="_blank" rel="noopener">💬 Comment on GitHub</a>' +
          '<a class="btn btn-primary" href="https://github.com/IsaiahN/pathfinder/tree/main/' +
            encodeURI(p.solution_path) + '" target="_blank" rel="noopener">Open folder ↗</a>' +
        '</div></div>' +
      '</div></div>';
    container.onclick = function (e) {
      var b = e.target.closest('.reader-file'); if (!b) return;
      loadReaderDoc(p, b.getAttribute('data-file'), container);
    };
    loadReaderDoc(p, READER_FILES[0][0], container);
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

    var figs = (p.figures_used || []).map(function (f) {
      return '<button class="badge count fig-pill" data-fig="' + esc(f) + '" title="Open ' + esc(f) +
        ' SVG">' + esc(f) + ' ↗</button>';
    }).join(' ');
    var folderUrl = 'https://github.com/IsaiahN/pathfinder/tree/main/' + encodeURI(p.solution_path || '');
    var figureLinksHtml =
      '<div class="btn-row" style="margin-top:12px">' +
        '<a class="btn btn-outline" href="https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether" target="_blank" rel="noopener">✦ Learn about the figures ↗</a>' +
        '<a class="btn btn-outline" href="https://medium.com/@IsaiahNwukor/how-intelligence-actually-works-40ac40fe32b0" target="_blank" rel="noopener">◈ How intelligence works ↗</a>' +
      '</div>';
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
                ['reader', 'Reader'], ['verdicts', 'Verdicts'], ['attempts', 'Attempts']];
    app.innerHTML =
      '<div class="page-head"><div class="eyebrow">Problem · ' + esc(p.category || '') + '</div>' +
        '<h1 class="mono">' + esc(id) + '</h1><p class="question">' + esc(p.question) + '</p></div>' +
      '<div class="tabs" id="ptabs">' + tabs.map(function (t) {
        return '<button class="tab' + (state.ui.tab === t[0] ? ' active' : '') + '" data-t="' + t[0] + '">' + t[1] + '</button>';
      }).join('') + '</div><div id="tabbody"></div>';

    function drawTab() {
      var t = state.ui.tab, body = document.getElementById('tabbody'), html = '';
      if (t === 'answer') {
        html = '<div class="card answer-card"><h2><span class="dot">✦</span> The Tether answer</h2>' +
          '<div id="doc-answer" class="reader-doc"><p class="muted">Loading…</p></div></div>' +
          '<div class="card"><h2><span class="dot">◇</span> What this is</h2><p>A simulated derivation checked for internal consistency against the figures. It is not a ground reading and does not settle the question. Mode: <span class="badge ' + esc(mode) + '">' + esc(mode) + '</span></p></div>';
      } else if (t === 'watson') {
        html = '<div class="card"><h2><span class="dot">◈</span> WATSON answer</h2>' +
          '<div id="doc-watson" class="reader-doc"><p class="muted">Loading…</p></div></div>' +
          '<div class="card"><h2><span class="dot">◇</span> Figures used</h2><p>' + (figs || 'none recorded') + '</p>' +
          figureLinksHtml + '</div>';
      } else if (t === 'figures') {
        html = '<div class="card"><h2><span class="dot">✦</span> Canonical figures</h2><p>' + (figs || 'none recorded') +
          '</p><p class="small">The figures are the authority. Verbatim text and line numbers live in <span class="mono">FRAMEWORK/reference/03-FIGURES_TEXT.md</span>.</p>' +
          '<p><a href="' + esc(folderUrl) + '" target="_blank" rel="noopener">Open the full solution folder ↗</a></p>' +
          figureLinksHtml + '</div>' +
          '<div class="card"><h2><span class="dot">◇</span> Figure-grounded audit</h2>' +
          '<div id="doc-figures" class="reader-doc"><p class="muted">Loading…</p></div></div>';
      } else if (t === 'sources') {
        html = '<div class="card"><h2><span class="dot">◈</span> Source ledger</h2><p>' + (p.world_sources || 0) +
          ' world sources read, ' + (p.fig_citations || 0) + ' figure citations in the derivation.</p>' +
          '<p class="small">World sources corroborate; they never overrule a figure.</p>' +
          '<div id="doc-sources"><p class="muted">Loading…</p></div></div>';
      } else if (t === 'verdicts') {
        html = '<div class="card"><h2><span class="dot">◉</span> Life graph</h2>' + renderLifeGraph(state.history.events, id) + '</div>' +
          '<div class="card"><h2><span class="dot">◇</span> Verdict detail</h2>' +
          (verdicts.length ? verdicts.map(function (x) {
            return '<p class="small"><span class="mono">' + esc(x.validator || 'anonymous') + '</span> · ' +
              esc(String(x.type || '').toUpperCase()) + ' · ' + esc(String(x.created_at || '').slice(0, 10)) + '</p>' +
              '<p>' + esc(x.reason || '') + '</p>';
          }).join('') : '<p class="small">No verdicts yet.</p>') + '</div>' + actionButtons(id);
      } else if (t === 'reader') {
        renderReader(p, document.getElementById('tabbody'));
        return;
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

      if (t === 'answer') loadDocInto(p, '07_the_tether_answer.md', document.getElementById('doc-answer'));
      else if (t === 'watson') loadDocInto(p, '09_watson_answer.md', document.getElementById('doc-watson'));
      else if (t === 'figures') loadDocInto(p, '01_figure_grounded_audit.md', document.getElementById('doc-figures'));
      else if (t === 'sources') loadLedger(p, document.getElementById('doc-sources'));
    }
    document.getElementById('ptabs').addEventListener('click', function (e) {
      var b = e.target.closest('.tab'); if (!b) return;
      state.ui.tab = b.getAttribute('data-t');
      Array.prototype.forEach.call(this.querySelectorAll('.tab'), function (x) { x.classList.remove('active'); });
      b.classList.add('active'); drawTab();
    });
    drawTab();
  }

  /* ── Appearance switcher (palettes from Serendipity | StoryWeaver) ── */
  var THEMES = {
    amber: { name: 'Amber', bg: '#0f1117', accent: '#f0a050', prose: '#d7dbe4', vars: {
      '--bg-primary':'#0f1117','--bg-secondary':'#1a1d27','--bg-tertiary':'#242836','--bg-card':'#1e2230',
      '--bg-hover':'#2a2f3f','--text-primary':'#e8eaed','--text-secondary':'#9aa0b0','--text-muted':'#6b7280',
      '--accent':'#f0a050','--accent-hover':'#e08840','--accent-subtle':'rgba(240,160,80,0.08)',
      '--accent-border':'rgba(240,160,80,0.25)','--border':'#2a2f3f','--editor-bg':'#0d0f14','--prose-color':'#d7dbe4' } },
    midnight: { name: 'Midnight', bg: '#0f172a', accent: '#818cf8', prose: '#dbe4f0', vars: {
      '--bg-primary':'#0f172a','--bg-secondary':'#1e293b','--bg-tertiary':'#334155','--bg-card':'#283548',
      '--bg-hover':'#2d3a4d','--text-primary':'#f1f5f9','--text-secondary':'#cbd5e1','--text-muted':'#64748b',
      '--accent':'#818cf8','--accent-hover':'#6366f1','--accent-subtle':'rgba(129,140,248,0.10)',
      '--accent-border':'rgba(129,140,248,0.25)','--border':'#334155','--editor-bg':'#0c1425','--prose-color':'#dbe4f0' } },
    ember: { name: 'Ember', bg: '#1c1412', accent: '#f97316', prose: '#f0d6c8', vars: {
      '--bg-primary':'#1c1412','--bg-secondary':'#2a1f1b','--bg-tertiary':'#3d2e28','--bg-card':'#332720',
      '--bg-hover':'#3a2d25','--text-primary':'#fef2f2','--text-secondary':'#d6bcb0','--text-muted':'#8b7265',
      '--accent':'#f97316','--accent-hover':'#ea580c','--accent-subtle':'rgba(249,115,22,0.10)',
      '--accent-border':'rgba(249,115,22,0.25)','--border':'#3d2e28','--editor-bg':'#16100e','--prose-color':'#f0d6c8' } },
    forest: { name: 'Forest', bg: '#0f1a14', accent: '#34d399', prose: '#d5eadd', vars: {
      '--bg-primary':'#0f1a14','--bg-secondary':'#1a2e22','--bg-tertiary':'#264032','--bg-card':'#20362a',
      '--bg-hover':'#253d2f','--text-primary':'#ecfdf5','--text-secondary':'#a7d1b8','--text-muted':'#5b8a6e',
      '--accent':'#34d399','--accent-hover':'#10b981','--accent-subtle':'rgba(52,211,153,0.10)',
      '--accent-border':'rgba(52,211,153,0.25)','--border':'#264032','--editor-bg':'#0c1510','--prose-color':'#d5eadd' } },
    twilight: { name: 'Twilight', bg: '#1a1025', accent: '#a78bfa', prose: '#e2d9f5', vars: {
      '--bg-primary':'#1a1025','--bg-secondary':'#261838','--bg-tertiary':'#3a2650','--bg-card':'#301f44',
      '--bg-hover':'#352449','--text-primary':'#f5f3ff','--text-secondary':'#c4b5fd','--text-muted':'#7c5fbf',
      '--accent':'#a78bfa','--accent-hover':'#8b5cf6','--accent-subtle':'rgba(167,139,250,0.10)',
      '--accent-border':'rgba(167,139,250,0.25)','--border':'#3a2650','--editor-bg':'#150d20','--prose-color':'#e2d9f5' } },
    daylight: { name: 'Daylight', bg: '#fafaf9', accent: '#2563eb', prose: '#292524', vars: {
      '--bg-primary':'#fafaf9','--bg-secondary':'#f5f5f4','--bg-tertiary':'#e7e5e4','--bg-card':'#e8e6e4',
      '--bg-hover':'#dddbd8','--text-primary':'#1c1917','--text-secondary':'#44403c','--text-muted':'#78716c',
      '--accent':'#2563eb','--accent-hover':'#1d4ed8','--accent-subtle':'rgba(37,99,235,0.10)',
      '--accent-border':'rgba(37,99,235,0.25)','--border':'#ccc9c6','--editor-bg':'#ebeae8','--prose-color':'#292524' } }
  };

  function applyTheme(key) {
    var t = THEMES[key]; if (!t) return;
    Object.keys(t.vars).forEach(function (p) { document.documentElement.style.setProperty(p, t.vars[p]); });
    document.documentElement.setAttribute('data-theme', key);
    state.theme = key;
    try { localStorage.setItem('pathfinder-theme', key); } catch (e) {}
  }
  function openTheme() {
    openModal('<div class="modal-head"><strong>◐ Appearance</strong><span class="spacer"></span><span class="esc-key">ESC</span></div>' +
      '<div class="theme-grid">' + Object.keys(THEMES).map(function (k) {
        var t = THEMES[k];
        return '<div class="theme-swatch' + (state.theme === k ? ' active' : '') + '" data-theme="' + k + '">' +
          '<div class="chipbox" style="background:' + t.bg + '"><i style="background:' + t.accent + '"></i></div>' +
          '<span>' + t.name + '</span></div>';
      }).join('') + '</div>' +
      '<p class="form-note" style="padding:0 16px 16px">Your choice is saved in this browser only.</p>');
    document.getElementById('modal-box').onclick = function (e) {
      var s = e.target.closest('.theme-swatch'); if (!s) return;
      applyTheme(s.getAttribute('data-theme')); openTheme();
    };
  }
  try { var saved = localStorage.getItem('pathfinder-theme'); if (saved && THEMES[saved]) applyTheme(saved); } catch (e) {}

  /* ── Figure viewer ── */
  var figView = { scale: 1, x: 0, y: 0, pointers: {}, lastDist: 0 };

  function applyFigureTransform() {
    var img = document.getElementById('figure-img');
    if (img) img.style.transform = 'translate(' + figView.x + 'px,' + figView.y + 'px) scale(' + figView.scale + ')';
    var z = document.getElementById('fig-zoom');
    if (z) z.textContent = Math.round(figView.scale * 100) + '%';
  }

  function openFigure(label) {
    var f = state.figures.find(function (x) { return x.fig === label || x.fig.replace(/\s/g, '') === label.replace(/\s/g, ''); });
    if (!f) return;
    figView = { scale: 1, x: 0, y: 0, pointers: {}, lastDist: 0 };
    var modal = document.getElementById('figure-modal');
    var img = document.getElementById('figure-img');
    img.src = f.url;
    img.alt = f.fig + ' — ' + f.title;
    document.getElementById('figure-title').textContent = f.fig + ' · ' + f.title;
    document.getElementById('fig-github').href =
      'https://github.com/IsaiahN/pathfinder/blob/main/' + f.url.split('/').map(encodeURIComponent).join('/');
    modal.hidden = false;
    applyFigureTransform();
  }
  function closeFigure() { document.getElementById('figure-modal').hidden = true; }

  document.getElementById('fig-close').onclick = closeFigure;
  document.getElementById('figure-modal').onclick = function (e) {
    if (e.target === this) closeFigure();
  };
  document.getElementById('fig-in').onclick = function () { figView.scale = Math.min(6, figView.scale * 1.25); applyFigureTransform(); };
  document.getElementById('fig-out').onclick = function () { figView.scale = Math.max(0.25, figView.scale / 1.25); applyFigureTransform(); };
  document.getElementById('fig-reset').onclick = function () { figView.scale = 1; figView.x = 0; figView.y = 0; applyFigureTransform(); };

  var stage = document.getElementById('figure-stage');
  stage.addEventListener('wheel', function (e) {
    if (document.getElementById('figure-modal').hidden) return;
    e.preventDefault();
    figView.scale = Math.max(0.25, Math.min(6, figView.scale * (e.deltaY < 0 ? 1.12 : 0.89)));
    applyFigureTransform();
  }, { passive: false });
  stage.addEventListener('dblclick', function () { figView.scale = 1; figView.x = 0; figView.y = 0; applyFigureTransform(); });
  stage.addEventListener('pointerdown', function (e) {
    stage.setPointerCapture(e.pointerId);
    figView.pointers[e.pointerId] = { x: e.clientX, y: e.clientY };
    var keys = Object.keys(figView.pointers);
    if (keys.length === 2) {
      var a = figView.pointers[keys[0]], b = figView.pointers[keys[1]];
      figView.lastDist = Math.hypot(a.x - b.x, a.y - b.y);
    }
    stage.classList.add('dragging');
  });
  stage.addEventListener('pointermove', function (e) {
    if (!figView.pointers[e.pointerId]) return;
    var prev = figView.pointers[e.pointerId];
    var keys = Object.keys(figView.pointers);
    if (keys.length === 2) {
      figView.pointers[e.pointerId] = { x: e.clientX, y: e.clientY };
      var a = figView.pointers[keys[0]], b = figView.pointers[keys[1]];
      var dist = Math.hypot(a.x - b.x, a.y - b.y);
      if (figView.lastDist > 0) figView.scale = Math.max(0.25, Math.min(6, figView.scale * (dist / figView.lastDist)));
      figView.lastDist = dist;
      applyFigureTransform();
    } else {
      figView.x += e.clientX - prev.x;
      figView.y += e.clientY - prev.y;
      figView.pointers[e.pointerId] = { x: e.clientX, y: e.clientY };
      applyFigureTransform();
    }
  });
  function endPointer(e) {
    delete figView.pointers[e.pointerId];
    figView.lastDist = 0;
    if (!Object.keys(figView.pointers).length) stage.classList.remove('dragging');
  }
  stage.addEventListener('pointerup', endPointer);
  stage.addEventListener('pointercancel', endPointer);

  // Delegated figure pill clicks (pills live inside re-rendered tabs).
  app.onclick = function (e) {
    var pill = e.target.closest('.fig-pill');
    if (pill) openFigure(pill.getAttribute('data-fig'));
  };
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeFigure(); });

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
  function openSubmission() {
    var fields = ['user_submitted', 'Business', 'Complexity science', 'Cognitive science',
      'Earth systems', 'Economics', 'Ecology', 'History of science and knowledge',
      'Information theory', 'Institutional questions', 'Origins of life',
      'Physics (QM and GR)', 'Reasoning and intelligence'];
    openModal(
      '<div class="wizard-head">' +
        '<span class="phase-pill"><b>USER QUESTION</b> · 1 OF 1 <span class="phase-dots"><i></i><i></i><i></i></span></span>' +
        '<h2>What question should we check?</h2>' +
        '<p>One clear question. We run it through WATSON and file a full derivation under USR-#####.</p>' +
        '<div class="example-box" style="margin:12px 0">✧ Example: <em>What would count as evidence that a system has formed concepts rather than learned useful associations?</em></div>' +
      '</div>' +
      '<div class="form-body">' +
        '<div class="field"><label>Field</label><select id="s-f">' + fields.map(function (f) {
          return '<option value="' + esc(f) + '">' + esc(f) + '</option>';
        }).join('') + '</select></div>' +
        '<div class="field"><label>Your question</label>' +
          '<div class="editor-box"><div class="editor-toolbar">' +
            '<span class="tool active">Visual</span><span class="tool">Markdown</span><span class="tool">B</span>' +
            '<span class="tool"><i>I</i></span><span class="tool">H₂</span><span class="tool">☰</span><span class="tool">&lt;/&gt;</span>' +
          '</div><textarea id="s-q" placeholder="Ask one concrete question…"></textarea></div></div>' +
        '<div class="field"><label>Why it matters (optional)</label><input id="s-c" placeholder="What would change if this were answered?"></div>' +
        '<div class="field"><label>Source link (optional)</label><input id="s-s" placeholder="https://…"></div>' +
        '<p class="wizard-help">✓ Unlimited intake · we process up to 100 per day · no email is asked for</p>' +
      '</div>' +
      '<div class="form-actions">' +
        '<a class="btn btn-outline" href="https://github.com/IsaiahN/watson-gpt" target="_blank" rel="noopener">✧ About WATSON</a>' +
        '<button class="btn btn-outline" id="s-cancel">Cancel</button>' +
        '<button class="btn btn-primary" id="s-go">Submit question →</button></div>');
    document.getElementById('s-cancel').onclick = closeModal;
    document.getElementById('s-go').onclick = function () {
      var q = document.getElementById('s-q').value.trim().replace(/\s+/g, ' ');
      if (!q) { document.getElementById('s-q').focus(); return; }
      var f = document.getElementById('s-f').value;
      var c = document.getElementById('s-c').value.trim();
      var s = document.getElementById('s-s').value.trim();
      var body = 'Question: ' + q + '\nField: ' + f +
        (c ? '\nContext: ' + c : '') + (s ? '\nSource: ' + s : '') +
        '\n\n---\nSubmitted from the Project Pathfinder site.';
      var url = 'https://github.com/IsaiahN/pathfinder/issues/new?' + new URLSearchParams({
        labels: 'question,user-submitted',
        title: '[QUESTION] ' + q.slice(0, 90),
        body: body
      }).toString();
      window.open(url, '_blank', 'noopener');
      closeModal();
    };
  }

  document.getElementById('submit-btn').addEventListener('click', openSubmission);
  document.getElementById('theme-btn').addEventListener('click', openTheme);
  document.getElementById('menu-btn').addEventListener('click', function () {
    left.classList.toggle('open');
  });
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
      fetchJSON('data/validation.json'), fetchJSON('data/history.json'),
      fetchJSON('data/submitted_questions.json'), fetchJSON('data/submission_queue.json'),
      fetchJSON('data/figures.json')
    ]).then(function (r) {
      state.config = r[0] || {};
      state.problems = (r[1] && r[1].problems) || [];
      state.validation = r[2] || { problems: {} };
      state.history = r[3] || { events: [] };
      state.submitted = r[4] || { questions: [] };
      state.queue = r[5] || { items: [], daily_cap: 100 };
      state.figures = (r[6] && r[6].figures) || [];
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
