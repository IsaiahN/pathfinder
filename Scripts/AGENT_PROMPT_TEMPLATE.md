# Pathfinder solution author: standing instructions

You are producing ONE complete Pathfinder Solution. You will be given a question ID and the exact Solution folder to work in. Work ONLY inside that folder. Never modify files outside it.

## Read first, in this order

1. Your folder's `README.md` (question, source line, section).
2. `C:\Users\Admin\Desktop\Project Pathfinder\README.md` and `PLANS\00_MASTER_PLAN.md` (sections 2, 8, 9).
3. `C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md`.
4. `C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md` — the VERBATIM figure text with line numbers. Grep it. Cite as `Fig N :line`. Every quoted string must be an exact substring of this file (case-insensitive, ignoring trailing punctuation).
5. `C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md`.
6. The completed exemplar: `C:\Users\Admin\Desktop\Project Pathfinder\Solutions\QMGR-0037__spacetime_continuum_or_emergent\` — read all 9 files. Match its depth, tone, structure, and honesty, including its retractions.
7. Optionally, an already-validated pilot: `Solutions\BUS-0001__why_do_some_firms_sustain_superior_performance\`.

## Method: derive first, never paraphrase a summary

- State the residual in effect terms.
- DOMAIN CENSUS before choosing any figure line: describe R by arity / symmetry / scale; one line per domain with actors / currency / anchor (no nameable anchor means it is not a domain yet); partition or union; dependency order (Fig 3).
- Quote figure lines VERBATIM with `Fig N :line` from the local FIGURES_TEXT.md BEFORE concluding. Strain test: if a line only fits with a strain, it governs another quantity, so re-census.
- Keep verdicts per domain separate, never averaged. Mark each `triangulated` (two figures with low overlap) or `single-source`.
- If no figure line governs after a genuine re-census, say `gap` plainly. "Unreachable is a verdict, not a silence."
- WATSON: figures are primary and decide; world sources are secondary corroboration only. Search low-overlap fields (human cognition, animal behaviour, sciences, mathematics, engineering, business). Open every source you cite; record author, venue, year, accessed date, and a quote. Never cite what you did not read. A conflict sends you back to the census, it never flips the verdict. Agreement from a shared evidence pool is one witness, not two.
- State mode on every substantive claim: `general` / `specified` / `grounded`. State explicitly that this is a simulated derivation checked for internal consistency against the figures, NOT a ground reading, so it cannot settle the question it reports on.
- Write the pre-registered refuter BEFORE the conclusion. "A falsifier written before the run is a design instrument."
- Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict.
- NO EM DASHES in any file. Use commas, colons, parentheses, or hyphens.
- Keep corrections and retractions visible. Never silently erase an earlier reading.

## Files to write (all 12; scaffold headers already exist)

- `README.md`: manifest, question, source line, section, mode, status = done, file list.
- `01_figure_grounded_audit.md`: full derive-first audit. Residual, figure census table, findings F1..Fn with verbatim quotes and refuters, pre-registered refuter, recommendation, canonical usage check, retraction/confirmation log.
- `02_outreach_email.md`: two-stage offer. Residual and refuter first, verdict recorded before theory, links only after. Never ask for trust or agreement. One-to-one, not bulk.
- `03_public_contact_points.csv`: public, opt-in, institutional submission/contact venues for this field. No personal emails. Same columns as the exemplar.
- `04_links_and_distribution.md`: verified public links actually fetched, relevant wider literature, distribution rules, two-stage offer.
- `05_what_shape_means.md`: canonical reading of "shape" for this question from the eight essays, with sources.
- `06_isomers_and_order.md`: supporting derivation (structure, order, analogues as the question needs), with a falsifier.
- `07_the_tether_answer.md`: synthesized answer, mode, non-claims, what would settle it, honest stop, one-paragraph version.
- `08_expert_verification_packet.md`: the one to send. Claim, three checkable sub-claims with verbatim figure lines and refuters, non-claims, provenance, 20-minute check list.
- `09_watson_answer.md`: canonical shape exactly: QUESTION / DOMAIN CENSUS / TETHER (primary, verbatim, per domain, triangulated|single-source|gap) / WORLD (secondary, each source: field, author/venue/year, quote, prediction, corroborates|conflicts) / VERDICT (from the figures) with "cost if wrong", "undoable", "reversed by" / Sources as linked titles.
- `10_source_ledger.csv`: columns url,title,author,venue,year,accessed_date,quote,field,overlap_with_other_sources,status,used_in_file. One row per source actually read. Local framework files use `local: PATH`.
- `11_audit.md`: independent second-seat re-census written from the residual line alone, comparison with the primary census, verbatim figure lines checked, round trip gap `R_T`, strains, verdict on the solution. If the second seat is simulated and shares an evidence pool, say so honestly: its agreement is internal consistency, not corroboration.

## Quality bar

Match the exemplar's depth. Substantive work, not placeholders. Every figure quote must be an exact string from FIGURES_TEXT.md. Every world source must be a real URL you actually opened; if a fetch fails, find another or say so. Validate with `python C:\Users\Admin\Desktop\Project Pathfinder\Scripts\validate_solution.py <ID>` before finishing and fix any problem it reports.

Write your summary (word count, key verdict, mode, figure lines used, number of world sources read, gaps and strains, validation result) into `C:\Users\Admin\Desktop\Project Pathfinder\Logs\completion_log.md` by APPENDING a new section headed `## <QUESTION_ID>`. Do not overwrite that file. Then return to me a single line only: `<QUESTION_ID> PASS <word_count> words <N> world sources`. Keep all detail in the log file, not in your reply.
