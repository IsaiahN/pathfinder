# Project Pathfinder: master plan

Version 1.0, 2026-11-22. Owner: this session. Applies to all 1,300 questions in `Questions/`.

---

## 0. Proposal header (required by seat reasoning)

```
DECIDES:    Two lead tracks are authorised. Track A = figure-grounded, ground-visible, opt-in,
            evidence axis separate from contact axis. Track B = direct outreach with a
            receptiveness estimate and publicly published institutional emails, clearly labelled
            non-Tether, verdict weight zero, no bulk send. The tracks are separate files and their
            replies are never pooled (Seat Map :163, :171). A = B? No, they answer different
            questions: who can refute, versus who may be willing to talk.
HOURS:      Setup 1-2. Registry + ranking 3-6. Pilot 3 questions 6-12. Production 1,299 x
            0.5-1.5h of agent time (650-1,950h), parallelizable in batches of ~12-20.
            Leads 0.25h per completed solution. Global audit 8-16.
PRIOR CASE: Tether_Outreach, 2026-11-22, one QM/GR question, imported at
            Solutions/QMGR-0037__spacetime_continuum_or_emergent/. It is the calibration case,
            including its retractions after the canonical usage check.
ANALOGUE:   Library of Babel searcher: describe the residual in effect terms, bootstrap
            vocabulary by proximity, steer by the question-as-tether, stop at a shape. Society
            of agents: room per problem, commons of methods only, ground under all.
LIMIT:      At 1,300 questions, does the audit stay flat? Only if each solution gets an
            independent re-census by a second seat. Otherwise agreement compounds and evidence
            does not (Fig 7 :35-36). The audit is not optional at scale.
```

---

## 1. Definitions of done

The project is done when:

1. Every one of the 1,300 questions has a stable ID in `Registry/question_registry.csv`.
2. Every question is ranked in `Registry/question_ranking.csv` with a stated reason for its tier.
3. Every question has a `Solutions/<ID>__<slug>/` folder containing the exemplar-based file set listed in `README.md` section 6, with a stated mode and a pre-registered refuter.
4. Every world source in every `09_watson_answer.md` was opened and is recorded in `10_source_ledger.csv` with author, venue, year, accessed date, and a quote.
5. Every solution passed an independent second-seat re-census in `11_audit.md`.
6. `Leads/expert_leads.csv` contains non-famous, ground-visible, publicly reachable people per completed solution, with no personal emails and no receptiveness rank.
7. `Registry/master_ranking.xlsx` ranks questions, solutions, leads, and sources, with a separate sheet for decisions and strains.

A question may honestly end in `gap` or `unreachable`. That is a verdict, not a failure. "A search that finds nothing is never a proof of absence" (Fig 8 :39).

---

## 2. Source of truth and reading discipline

- Quote figure lines from `FRAMEWORK/reference/03-FIGURES_TEXT.md` only. Open it every session. Never quote from a summary, a memory, or this plan. Cite as `Fig N :line`.
- When layout matters (the six-term set, the bond table), open the original SVG in `FRAMEWORK/figures/`.
- The formula is `FRAMEWORK/figures/THE_FORMULA.md`. Mode rule: `general | specified | grounded`, state which.
- The seats' rules are in `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`.
- The eight essays are the philosophical grounding. The exemplar's `05_what_shape_means.md` already maps them, but the essays themselves are the authority for "shape", "prestige is not action", "source", and "outputs are not generators".
- WATSON procedure: figures primary, world secondary, world corroborates but never overrules. Conflict sends us back to the domain census.
- Style for WATSON answer files: no em dashes (explicit rule in the WATSON instructions).

---

## 3. Naming and IDs

ID format: `<CAT>-<NNNN>`, where CAT is the category slug and NNNN is the question's own number in its source file, zero-padded.

| slug | source file | count |
|---|---|---|
| `BUS` | business.txt | 100 |
| `COG` | cognitive science.txt | 100 |
| `CMP` | complexity science.txt | 100 |
| `EAR` | earth systems.txt | 100 |
| `ECO` | ecology.txt | 100 |
| `ECN` | economics questions.txt | 100 |
| `HIS` | history of science and knowledge.txt | 100 |
| `INF` | Information Theory.txt | 100 |
| `INS` | institutional questions.txt | 100 |
| `ORI` | origins of life.txt | 100 |
| `QMGR` | QM & GR Questions.txt, physics block (numbers 1-100) | 100 |
| `QMGR2` | QM & GR Questions.txt, astronomy and cosmology block (numbers 1-100) | 100 |
| `REA` | reasoning.txt | 100 |

Stable IDs survive file reordering. The exemplar is mapped to `QMGR-0037` and cross-linked to `QMGR-0038` and `QMGR-0044`; its actual subject is the preamble-level question of how QM and GR compose, so the mapping note must say so rather than pretend an exact match.

---

## 4. Phase 0: setup (1-2 hours)

- [x] Read all reference material (figures, formula, seat map, WATSON repo, eight essays, exemplar).
- [x] Create folder skeleton.
- [x] Copy canonical figures, figure text, figures README, metalaws doc.
- [x] Import the exemplar into its Solution folder and a clean TEMPLATES copy.
- [ ] Write `TEMPLATES/solution_template/` as eight empty files with section headers only.
- [ ] Write `Scripts/build_registry.py`, `Scripts/new_solution.py`, `Scripts/validate_solution.py`, `Scripts/rank.py`.
- [ ] Write `Logs/derivation_log.md` with the exemplar's carried methods.

Gate: a blank solution folder can be scaffolded from a single ID.

---

## 5. Phase 1: ingest (1-3 hours)

Parse the 12 txt files. Each file has a preamble, then `##` or `###` sections, then numbered questions. Preserve section headings as the subcategory. Strip the `<citation>` tags into a separate `source_citation_tags` column rather than dropping them.

`Registry/question_registry.csv` columns:

```
id, category_slug, category_name, source_file, source_line, section, question_text,
source_citation_tags, status, solution_path, notes
```

`status` is one of `pending | in_progress | done | retracted`. `solution_path` is filled when the folder is created. No ranking yet. This is a mechanical pass and must be exact: count check is 1,300 rows, section counts are preserved.

Gate: row count 1,300, no duplicate IDs, every question text non-empty.

---

## 6. Phase 2: ranking and grouping (2-4 hours)

Rank before solving. The rank decides production order, not the other way round.

`Registry/question_ranking.csv` columns:

```
id, category_slug, section, question_text,
importance_1_5, ground_availability_0_3, tractability_0_3, tether_bearing_0_3,
expert_accessibility_0_3, independence_opportunity_0_3,
upstream_depends_on (IDs or none), cost_if_wrong_1_5, reversibility_0_3,
priority_score, tier, reason
```

Scoring rules, each justified from the figures:

- **importance**: how many other questions would move if this one were answered. Fig 1 :19 (per-slot residual, never aggregate) means we ask what other slots this residual touches.
- **ground_availability**: is there an instrument, experiment, dataset, court, market, or board that could settle it? Fig 2 :29-30 (anchor test).
- **tractability**: can WATSON make real progress with current sources? Fig 8 :40-43 (underivable versus unreachable at this budget).
- **tether_bearing**: does a figure line govern this question directly? `3` direct and triangulated, `2` single figure, `1` shape only, `0` gap after re-census.
- **expert_accessibility**: are there public, opt-in, checkable people? This is a **contact** score, never an evidence score.
- **independence_opportunity**: can we get two or more low-overlap frames? Fig 2 :31-32, :42.
- **priority_score**: weighted sum, weights fixed before the run and written into the plan log. Proposed: `importance x 3 + ground x 2 + tether_bearing x 2 + tractability + independence + expert_access x 0.5`. Cost and reversibility gate the top tier rather than adding to the score.
- **tier**: A (top 100, do first), B (next 400), C (remaining 799).

Grouping in the spreadsheet: by `category_slug`, by `section`, by tier, and by `upstream_depends_on` (Fig 3 dependency order, upstream first).

These scores are **filters for the budget, never witnesses for the verdict** (Fig 9 :60). A tier A label says what gets tried first. It says nothing about whether an answer is true. Never let a filter hand you a verdict.

Gate: every row has a score and a one-sentence reason; no score decided by file order, name, or seed (seat reasoning move 5).

---

## 7. Phase 3: pilot (6-12 hours)

Do three questions end to end, one from each tier. For each, write all eight solution files, run the second-seat re-census, find three leads, and write one outreach packet. Measure actual hours per file. Use the measurements to reset batch size and the production estimate. If a pilot solution cannot produce a figure line after a genuine census, record `gap` and keep going. Do not force a fit.

Gate: the exemplar and the three pilots agree on section structure, and `validate_solution.py` passes on all four.

---

## 8. Phase 4: batch production (the long phase)

Run in batches of 12-20 questions, tier order. Each question gets one primary seat and one independent reviewer seat. The reviewer writes its own census from the residual line alone before reading the primary's census (derive-first, "two seats, two censuses").

### Per-question recipe

1. **`README.md`**. Manifest: ID, question text, source line, mode, status, file list. Restate the question as an effect: what is being decided and what each option leads to. Write down what an answer would look like and bind it as an ordinary term (formula step "Direction").
2. **`01_figure_grounded_audit.md`**. Describe R by arity, symmetry, scale. One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet. Partition or union (an overlap is a compound with its own loop). Order by dependency (Fig 3). Grep the verbatim figure text and quote before concluding. Strain test: if a line only fits with a strain, it governs another quantity, so re-census. Mark triangulated, single-source, or gap. When no line closes the residual, ask SEARCHED first (cheapest, and the other two assume its answer), then INWARD, then OUTWARD (formula step 7). Keep those three distinct. Add the pre-registered refuter and the retraction log.
3. **`05_what_shape_means.md`** and **`06_isomers_and_order.md`**. The two supporting derivations. What "shape" means for this question from the essays, and the second derivation the question needs (structure, order, isomers, analogues as applicable), each with its own falsifier.
4. **`07_the_tether_answer.md`**. One loop per domain, verdicts kept separate and never averaged. Stated mode, non-claims, falsifiers, and a one-paragraph version. If no line governs, say `gap` plainly.
5. **`09_watson_answer.md`**. World search across low-overlap fields (human cognition, animal behaviour, sciences, mathematics, engineering, business). Open every source, quote it, give author, venue, year. State what each predicts here and whether it corroborates or conflicts. Verdict comes from the figures. Add cost if wrong, undoable, reversed by.
6. **`10_source_ledger.csv`**. Provenance ledger. Never cite what was not read.
7. **`08_expert_verification_packet.md`**, **`02_outreach_email.md`**, **`03_public_contact_points.csv`**, **`04_links_and_distribution.md`**. The four outreach artifacts, following the exemplar exactly: the packet to send, the two-stage email, public contact points, and verified links with distribution rules.
8. **`11_audit.md`**. Independent re-census from the residual line alone, round trip gap `R_T`, strains sent to the log, final status.

Carry **methods**, not recordings, into `Logs/derivation_log.md`. When a similar residual appears again, reuse the method, not the previous answer.

Gate per question: `validate_solution.py` passes; a second seat signed the audit; mode stated everywhere; no figure quote came from a summary.

---

## 9. Phase 5: leads (0.25 hours per completed solution)

### The four seats mapped to Pathfinder roles

The seat map's minimum viable arrangement maps directly onto this pipeline. Keep the roles separate even when one person fills two of them.

| Seat | Pathfinder role | What it may see | What it must not see |
|---|---|---|---|
| Anchor / ground | experiment, dataset, proof checker, published record | nothing from any frame | any frame's opinion |
| Seat 1, maker | the solution author (primary seat) | the interiors of the derivation | the refuter's exact criterion, so it cannot build to pass it |
| Seat 3, ground maintainer | the auditor writing `11_audit.md` | records, provenance, the residual | the solution's interiors; no gain from a particular reading |
| Seat 4, outside frame | the expert lead | the residual and the shape claim only | the framework's interiors, records, and stake |

Seat 4 verifies nothing and checks nothing. Its output is a correction on shape, a named failure class, and the question "could this have been anything else?" That is why the first contact carries the residual and its refuter, never the source. "An interest in the outcome is unavoidable, an interest in the reading is disqualifying." Where a stake cannot be removed, declare it.

**Track A, figure-grounded.** `Leads/expert_leads.csv`:

```
lead_id, question_id, name, current_affiliation, field, subfield,
ground_contact_evidence, public_work_url, public_work_year,
different_closure_from_author (yes/no + why),
public_opt_in_channel, channel_url, channel_opt_in (yes/no), verified_date,
declared_stake, prestige_load_estimate (contact cost only, never evidence),
source_url_for_every_claim, evidence_score, contact_score, contact_format_note
```

Rules:

- No personal emails. No scraped contact lists. No bulk send. Public institutional or opt-in channels only.
- `prestige_load_estimate` and `contact_score` live apart from `evidence_score` and must never enter a verdict. A column comment in the CSV says so.
- "Not famous" is a filter on public platform size, not on competence. Competence is the public, checkable ground record.
- Every factual claim about a lead gets a source URL and a verification date in `Leads/lead_provenance.csv`.
- Leads are found from the **residual**, described in effect terms first. Frame second (Fig 8 :53, Fig 9 :27-28). Otherwise any field picked will seem to fit.

Gate for Track A: no lead has a personal email, no receptiveness column exists, and every lead has at least one public checkable work and one opt-in channel.

**Track B, direct outreach (non-Tether, user-authorized).** `Leads/direct_outreach_leads.csv`. Same identity and field columns as Track A, plus:

```
track (always direct_non_tether), receptiveness_estimate_1_5, receptiveness_reason,
published_email, email_source_url, email_verified_date, verdict_weight (always 0),
legal_note, contact_status (not_contacted | contacted | replied | declined)
```

Rules for Track B:
- Only emails the person has published themselves on an institutional directory, a personal academic page, or a public professional profile. Record the source URL and verification date for each. No purchased lists, no data brokers, no harvesting from private posts.
- One-to-one contact only. No bulk send, no automation, no misleading subject lines, and an opt-out line in every message. GDPR and CAN-SPAM style rules apply to unsolicited outreach in many jurisdictions; the `legal_note` column records the constraint per lead.
- `verdict_weight` is 0 by definition. A Track B reply is a conversation, never corroboration (Fig 2 :40; Seat Map :163). If a Track B person returns a refutation, it is copied into the solution's `11_audit.md` with provenance and re-evaluated by the auditor seat as if it came from any other source.
- Track B overlaps with Track A are allowed but marked `also_in_track_a` with the lead_id, so we can see when the same person is being approached in two roles.

Gate for Track B: every email has a public source URL and verification date; `verdict_weight = 0` on every row; no bulk-send plan exists anywhere in the folder.

---

## 10. Phase 6: outreach packets (after Phase 5)

Use the exemplar's two-stage offer, adapted per question:

1. Stage 1: send the residual, the shape claim, and the pre-registered refuter. Ask what they would count as a failure. Record their verdict **before** showing any theory.
2. Stage 2, opt-in only: if they are curious, offer the three source links. The figures, not our summary, are the authority.
3. Stage 3: offer the formula as a method to reuse, with the instruction that each user writes their own refuter and states their own mode.

Do not ask for agreement, do not ask for trust, and do not pool later agreement as corroboration (Fig 2 :40, Fig 10 :42). A failure is more useful than an endorsement.

Packets live in `Outreach/packets/<ID>/`. Nothing is sent by this agent. You host and send.

---

## 11. Phase 7: global ranking and audit

`Registry/master_ranking.xlsx` sheets:

1. `Questions`: all 1,300, ranked, with tier and reason.
2. `Solutions`: ID, mode, tether status, world status, refuter fired or not, audit status, hours.
3. `Leads`: evidence score, contact score, opt-in channel, verification date.
4. `Sources`: every source ever read, with field and overlap, to detect over-reliance on one pool.
5. `Decisions and strains`: every gap, every strain, every re-census, and what was carried forward.
6. `Re-ranking`: final order after all solutions exist, computed from actual outcomes, not the pre-run estimate. The pre-run ranking is preserved beside it so the difference is visible (Fig 4 round trip).

Final audit: sample the top 50 solutions and re-run the independent census. Report how many changed verdict. That number is the honest measure of the pipeline.

---

## 12. Decisions, resolved 2026-11-22

1. **Lead selection rule.** User chose a mix of both tracks. Track A figure-grounded plus Track B direct outreach with receptiveness estimate and publicly published institutional emails. Implemented in section 9. Track B is labelled non-Tether and carries zero verdict weight.
2. **Scope and order.** User chose answers first, then organization into folders following the supplied template. Start with a pilot, then do the entire backlog. Ranking and leads come after the solutions. Phase order is therefore: 0, 1, 3, 4, 2, 5, 6, 7 (Phase 2 ranking consumes the finished solutions as well as the registry).
3. **Spreadsheet format.** `.xlsx` with CSV mirrors.
4. **Exemplar mapping.** `QMGR-0037` confirmed.

Answer these and I will start Phase 1. Until then I will not generate 1,299 solution folders.

---

## 13. Risks and honest limits

- **Output volume.** 1,300 x 8 files is roughly 10,400 artifacts. At full WATSON depth this is hundreds of agent-hours. The tier system exists so the most important work is done first and the rest is visible as pending.
- **Simulacra.** LLM output is a simulated derivation, not a ground reading (Recursive Self-Improvement Trap; exemplar `01` and `05` say this explicitly). Every solution says so in its mode line. We do not claim to settle a question the figures leave open.
- **Source independence.** Two web pages quoting the same review are one witness. The source ledger records overlap so we do not mistake a pool for corroboration.
- **Strain.** A figure line that needs forcing means the wrong domain. The audit sends it back to census, not to a softer reading.
- **Fame leak.** Prestige creeps in through "well known reviewer" shortcuts. The lead schema excludes it from evidence and the audit checks it.
- **Legal.** GDPR/CAN-SPAM style rules apply to unsolicited bulk email. Public opt-in channels avoid that failure as well as the structural one.

---

## 14. Immediate next action

Run `Scripts/build_registry.py` to produce `Registry/question_registry.csv`, scaffold `TEMPLATES/solution_template/`, then run the three-question pilot. After pilot validation, continue with the full backlog in batches, using `QMGR-0037` as the calibration reference. Ranking and both lead tracks follow the solutions.
