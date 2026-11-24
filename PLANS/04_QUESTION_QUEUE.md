# User question queue — daily operating procedure

Intake is unlimited. The 100/day cap is on **processing**, not acceptance.

## Flow

1. A person clicks **＋ Submit a question** on the [site](https://isaiahn.github.io/pathfinder/).
   The form opens a prefilled GitHub issue with labels `question` and `user-submitted`.
   The issue body has the fields `Question:`, `Field:`, `Context:`, `Source:`.
2. `.github/workflows/question-queue.yml` runs daily at 04:00 UTC, when a new
   `question` issue opens, and on manual dispatch. It harvests every `question`
   issue into:
   - `data/submitted_questions.json` — all submissions with status
     (`queued`, `in-progress`, `answered`, `waiting`)
   - `data/submission_queue.json` — the oldest 100 unanswered items, with position
3. The site's **Submitted** tab and right-rail queue panel render those files.
4. The agent works the queue, at most 100 items per day.

## Working one item

```powershell
$env:PYTHONIOENCODING='utf-8'
python Scripts\submission_tools.py prepare USR-00042
```

This creates `Solutions/user_submitted/USR-00042/` with the 12-file scaffold and a
`00_submission.md` holding the question, submitter, and source issue. Fill the twelve
files using `Scripts/AGENT_PROMPT_TEMPLATE.md`, adapting the question and field. The
ID is always `USR-<issue number, 5 digits>` and never changes. The requested field can
be reassigned once the answer is written; the origin remains `user_submitted`.

Validate with `python Scripts/validate_solution.py USR-00042` — the validator resolves
solution folders by ID prefix, so the USR folder works the same as the 1,300 originals.

## Finishing one item

Write a short answer summary to a text file (a paragraph or two), then:

```powershell
$env:GITHUB_TOKEN = "ghp_..."
python Scripts\submission_tools.py finish USR-00042 answer.txt
```

This posts the summary as a comment on the source issue (GitHub notifies the submitter),
applies the `answered` label, removes `in-progress`, and updates
`data/submitted_questions.json` with the status and solution path.

## After a batch

1. Rebuild the workbook if desired: `python Scripts/build_workbook.py`.
2. Export public data: `python Scripts/export_public_data.py`.
3. Rebuild and push the public mirror, or run `Scripts/publish.ps1`.

The queue workflow will also regenerate the two submission JSON files on its next run.

## Operational notes

- Never put email addresses in any of these files. Identity is the GitHub login.
- If a submission contains personal information, redact it in the issue comment and
  the answer before publishing.
- The `in-progress` label prevents an item being picked up twice. Apply it before
  starting work on an item outside the automated queue file.
- Capacity can be changed by editing `const cap = 100` in the queue workflow.
