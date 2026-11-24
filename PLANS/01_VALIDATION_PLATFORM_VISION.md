# Project Pathfinder — Validation Platform Vision

Captured from the user's directive (session, date 2026-11-23). This is the post-generation
phase: turn the completed 1,300-solution corpus into a public, GitHub-native research
programme and human-validation benchmark.

## 0. Guiding idea

> "This can be a research programme of its own. Validating just how useful this metatheory is,
> by testing it against thousands of problems in math, science, business, etc."
> "A benchmark of sorts — a way to unify and test any theories at once."

The Tether/Ouroboros + WATSON + figures-audit method is the thing under test. Every solved
problem is one trial. Public validators (people who receive a link or are emailed) submit
validation, refutation, or acceptance. Their feedback drives round 2, 3, ... N of research.
The repo becomes the permanent, versioned record of every attempt and every human verdict.

## 1. Deliverables requested

0. **Repository name: `pathfinder`** (user-specified). Public URL will be
   `https://<owner>.github.io/pathfinder/` for Pages.
1. **GitHub repository** with a README, authored with help from https://humanize.ai/.
2. **Ignore rules**: `.gitignore` must exclude `Leads/` and any file containing email data.
   Exception: links to research/publications are fine (they are URLs, not addresses).
3. **GitHub Pages site**: an excellent data repository front-end for the whole corpus.
4. **Research programme framing**: benchmark the metatheory across thousands of problems.
5. **Deep links**: a URL scheme (`.../problem/ID` and/or `?id=...`) so an emailed user lands
   directly on one problem.
6. **One-click submission**: from that page, the user opens a prefilled GitHub **Issue** or
   **Discussion** to submit validation / refutation / acceptance data.
7. **Voting**: lightweight votes recorded back into the repo automatically.
8. **Life graph**: a visualization of which problems human validators have taken a swing at,
   with verdicts and reasons, over time.
9. **Rebuttal loop**: anything that gets a rebuttal is answered in another research round
   (QA / human review feedback), with rounds 2, 3, ... N.
10. **Folder system for multiple attempts**: each problem keeps every round; GitHub Pages
    displays all attempts.
11. **AI follow-up**: after generation, this AI thread reads all issues and responds,
    restarting/revising rounds.
12. **Lean certification** (where applicable): a way for a validator to provide a *proven*
    lean certificate that substantiates a claim.

## 2. Design constraints discovered during research

- GitHub Pages serves **static files only**. A browser cannot write to the repo directly.
  Therefore "submit data" and "vote" must be implemented through one of:
  - **Prefilled issue/discussion URLs** (querystring prefills title/body/labels; the user
    clicks Submit while logged into GitHub). No backend needed.
  - **GitHub Reactions** (👍/👎/🎉 etc.) on a canonical issue per problem, used as votes.
  - **GitHub Actions** that periodically read Issues/Discussions/Reactions via the API and
    commit derived JSON/CSV back into the repo (the Pages site then reads that data).
  - An **OAuth GitHub App** (full custom UI) — heavier, needs a server; avoid for v1.
- Recommended v1: **prefilled issue templates + reactions + a sync Action**, all free,
  all native, all auditable in git history.
- `gh` CLI is **not installed** in this environment (git 2.55 is). Use `git` + the GitHub
  REST API via `curl`/PowerShell for repo automation, or install `gh` later if needed.

## 3. Proposed repository layout

```
Project-Pathfinder/
├── README.md                     # humanize.ai-assisted
├── .gitignore                    # Leads/, *.csv with emails, private/*
├── PLANS/                        # master plan + this vision
├── FRAMEWORK/                    # figures, WATSON refs, method
├── Registry/                     # question_registry, master_ranking.xlsx (sanitized)
├── Solutions/                    # 1,300 folders, one per question
│   └── QMGR-0037__.../
│       ├── README.md ... 11_audit.md
│       └── attempts/             # NEW: round-N re-research
│           ├── round-01/
│           ├── round-02/
│           └── verdicts.json     # synced human verdicts
├── Leads/                        # IGNORED — email data lives here
├── site/                         # GitHub Pages source
│   ├── index.html                # corpus dashboard
│   ├── problem/ID/index.html     # deep-linkable per-problem pages (or SPA 404 trick)
│   ├── data/                     # generated JSON: problems, verdicts, votes, life-graph
│   └── assets/                   # D3 / charting for life graph
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── validation.yml        # prefilled: validate / refute / accept
│   │   └── rebuttal.yml          # prefilled: rebut a verdict
│   └── workflows/
│       ├── sync-verdicts.yml     # Issues/Reactions -> site/data/*.json
│       └── build-site.yml        # optional Jekyll/SPA build
└── Scripts/                      # generation + validation + export tooling
```

## 4. Data model for the benchmark

- **Problem**: `id`, question_text, section, figures_used, mode, current_verdict.
- **Attempt**: `problem_id`, `round`, timestamp, tether_answer, watson_answer, ledger.
- **Verdict** (from a human): `problem_id`, `validator` (optional/handle), `type`
  (`validate|refute|accept`), `reason`, `evidence_links`, `lean_certificate` (optional),
  `source_issue`.
- **Vote**: `problem_id`, `issue_id`, `reaction`, `count` (synced from GitHub).
- **Life graph**: time-series of attempts + verdicts + votes per problem and globally.

## 5. Human flow (target)

1. Person receives an email/link → `.../problem/QMGR-0037`.
2. Page shows the question, the current answer, the figures, and the open questions.
3. Buttons: "Validate", "Refute", "Accept" → open prefilled GitHub Issue with `?id=...`
   already in the title/body. (No login friction beyond GitHub.)
4. Others vote with Reactions on that issue.
5. A GitHub Action syncs issues + reactions into `site/data/verdicts.json`.
6. Pages re-renders the life graph showing the new activity.
7. This AI thread (or a future agent) reads new issues, writes `attempts/round-N/`,
   responds in-thread, and the cycle repeats.

## 6. Privacy rule (hard requirement)

Nothing in `Leads/` (or any file containing email addresses) is committed. `.gitignore`
must cover it before the first `git add`. Only public research links (URLs) are allowed in
the public repo/tooling. Verify with a scan before every commit.

## 7. Status

- [ ] Vision captured (this doc)
- [ ] Technical design researched (Issue forms, prefilled URLs, reactions, sync Action)
- [ ] First 1,300 solutions completed & validated (IN PROGRESS — see completion_log)
- [ ] Repo scaffold + .gitignore + README (humanize.ai-assisted)
- [ ] Pages site + per-problem deep links
- [ ] Issue/Discussion templates + voting + sync Action
- [ ] Life graph visualization
- [ ] Multi-attempt folder migration + attempt viewer
- [ ] Rebuttal/round-N loop + AI responder
- [ ] Lean-certificate support (where applicable)
