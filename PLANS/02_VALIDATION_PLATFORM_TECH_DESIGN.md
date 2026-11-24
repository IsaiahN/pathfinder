# Project Pathfinder — Validation Platform Technical Design (v1)

Result of the research subagent (verified against GitHub Docs). This is the implementation
blueprint for the `pathfinder` GitHub repo + Pages human-validation benchmark.

## Recommended v1 architecture

Public repo `USER/pathfinder` is both source of truth and CDN:

```
pathfinder/
├── .nojekyll                    # byte-exact static serving
├── index.html                   # SPA shell; fetch() all data
├── 404.html                     # SPA fallback for /problem/ID deep links
├── app.js, app.css
├── data/
│   ├── problems.json            # 1,300 records, generated from solutions
│   ├── validation.json          # SYNCED verdicts + vote counts
│   └── history.json             # SYNCED life-graph events
├── certificates/                # optional Lean 4 proofs
├── .github/
│   ├── ISSUE_TEMPLATE/validation.yml (+ config.yml)
│   └── workflows/
│       ├── sync-validation.yml  # issues+reactions -> data/*.json -> commit
│       └── keepalive.yml        # defeat 60-day schedule disable
```

**Flow:** static problems.json generated once → emailed `/problem/QMGR-0037` link resolved by
404.html trick → Validate/Refute/Accept buttons are prefilled `issues/new?...` links → a
scheduled + event-driven Action harvests issues and reactions via `actions/github-script`,
commits `data/*.json` → Pages set to "Deploy from branch: main" auto-rebuilds → life graph and
rebuttal rounds render from the JSON.

## Key verified facts

- Issue prefill query params: `title`, `body`, `labels`, `milestone`, `assignees`, `template`,
  `type`. Form field `id`s are canonical query keys. Labels/assignees need submitter permission
  → use ONE shared `validation` label + ID in the title, not 1,300 labels.
- Discussions: `category`, `title`, `body` prefill works; no labels, no per-field prefill,
  reactions are GraphQL-only → **use Issues**.
- Reactions: `GET /repos/{o}/{r}/issues/{n}/reactions`, max 100/page, paginate. Issue object
  has a `reactions` rollup for cheap counts. Map 👍 confirm / 👎 dispute / 🎉 accept / 👀 review.
- Pages `fetch('./data/*.json')` works same-origin; add `.nojekyll`; ~10 min CDN cache; show
  `generated_at`; project-site base path is `/pathfinder/`.
- Deep links: 404.html SPA trick (no build) recommended; static folder per problem as SEO fallback.
- GITHUB_TOKEN commits do NOT retrigger workflows → set Pages source = Deploy from branch main.
- Public repos disable schedules after 60 days idle → keepalive workflow with a bimonthly push.
- Privacy: no emails anywhere public; identity = GitHub login; publish aggregate vote counts
  only; bot commits use `github-actions[bot]@users.noreply.github.com`.
- Lean certification: commit `certificates/<ID>.lean`, CI `lake env lean`, label `certified:lean`.

## Concrete snippets (full versions in the research agent's report / session log)

### Prefilled validation buttons (markdown-template fallback, most reliable)
```
https://github.com/USER/pathfinder/issues/new?labels=validation&title=%5BVALIDATE%5D%20QMGR-0037&body=Problem%3A%20QMGR-0037%0AVerdict%3A%20VALIDATE%0A%0AExplanation%3A%20
```
Sync parses `^\[(VALIDATE|REFUTE|ACCEPT)\]\s+(QMGR-\d{4})` from the title.

### Sync workflow essentials
Triggers: `issues`, `issue_comment`, `schedule` (`cron: "17 */6 * * *"`), `workflow_dispatch`.
Permissions: `contents: write`, `issues: read`.
Harvest labeled issues → parse ID/verdict → paginate reactions → aggregate counts → write
`data/validation.json` → build `data/history.json` → `git add/commit/push` only if changed.

## Implementation checklist

1. Repo `pathfinder`, `.nojekyll`, Pages = Deploy from branch main.
2. Generate `data/problems.json`; SPA shell; verify `/problem/QMGR-0037` deep link.
3. Labels: `validation`, `rebuttal`, `certified:lean`, `spam`.
4. Issue template (`validation.yml` + `.md` fallback).
5. Wire Validate/Refute/Accept buttons; test with a throwaway issue.
6. `sync-validation.yml`; confirm data commit + Pages rebuild.
7. `keepalive.yml`.
8. Life graph + rebuttal/attempt rendering.
9. Optional Lean certificate CI + `certified:lean`.
10. Validator instructions page (browser not mobile app; no personal data; votes public).

## Reference sources
- https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue
- https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema
- https://docs.github.com/rest/reactions/reactions
- https://github.com/actions/github-script
- https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site
- https://github.com/rafgraph/spa-github-pages
