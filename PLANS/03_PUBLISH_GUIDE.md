# Publishing `IsaiahN/pathfinder`

The working tree stays private. Only the sanitized mirror at
`C:\Users\Admin\Desktop\pathfinder-public` is ever pushed to GitHub.

## One-command publish

A GitHub token with `repo` scope is required to create and push the repo from this
machine. There is no `gh` CLI installed, so the script uses the REST API directly.

```powershell
$env:GITHUB_TOKEN = "ghp_your_token_here"
powershell -File "C:\Users\Admin\Desktop\Project Pathfinder\Scripts\publish.ps1"
```

Without a token the script still rebuilds the mirror, commits it locally, and prints
the manual steps.

## What the script does

1. Rebuilds the public mirror from the working tree.
2. Redacts every email address from every text file (mostly institutional contact
   points in source ledgers).
3. Excludes all lead data: `Leads/`, `Outreach/`, `Logs/`, `Registry/Leads.csv`,
   the Leads sheet from the ranking workbook, and the lead-authoring scripts.
   Only public research links and the corpus itself are published.
4. Verifies the mirror contains zero email addresses.
4. `git init -b main`, commit everything.
5. Creates the public repo through `POST /user/repos` when a token is present.
6. Pushes `main`, then enables Pages from `main` / root through
   `POST /repos/{owner}/{repo}/pages` (falls back to `PUT` if already configured).

## Manual steps if no token

1. Create a public repository named `pathfinder` at <https://github.com/new>.
2. From `C:\Users\Admin\Desktop\pathfinder-public`:
   ```powershell
   git remote add origin https://github.com/IsaiahN/pathfinder.git
   git push -u origin main
   ```
3. Settings → Pages → Build and deployment → Source: **Deploy from a branch**,
   branch `main`, folder `/ (root)`.

## Why Pages must use branch deployment

The sync workflow commits `data/validation.json` and `data/history.json` with the
`GITHUB_TOKEN`. Commits made with that token do not trigger other workflows, so a
Pages *GitHub Actions* deployment source would never rebuild from sync commits.
Branch deployment rebuilds on every push to `main`.

## Verify after publishing

- Corpus: <https://IsaiahN.github.io/pathfinder/>
- Deep link: <https://IsaiahN.github.io/pathfinder/problem/QMGR-0037>
- Issue prefill: the Validate / Refute / Accept buttons on a problem page must point
  to `https://github.com/IsaiahN/pathfinder/issues/new?labels=validation&...`.
- Open one throwaway validation issue, then check that the sync Action commits
  `data/validation.json` and that the life graph updates.

## Keepalive

`.github/workflows/keepalive.yml` touches `.github/KEEPALIVE` every two months so
GitHub does not disable schedules after 60 days of repo inactivity.
