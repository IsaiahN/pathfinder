# Solution REA-0018 - figure-grounded package

**Question:** Can systems reliably learn from feedback that is sparse, inconsistent, or biased?

**Source:** `Questions/reasoning.txt` line 23, question 18 in that file.

**Section:** 2. Learning and generalization.

**Mode:** `specified` on the per-domain claims, `general` on the structural shape, `gap` on the literal numerical guarantee of reliability, not `grounded`. Every substantive file is labelled a simulated derivation checked for internal consistency against the figures, not a ground reading.

**Status:** done.

**Registry status:** pending (registry files are outside this folder and were not modified).

**Boundary.** All work happened inside `Solutions/REA-0018__can_systems_reliably_learn_from_feedback_that/`. No file outside that folder was read for editing or changed. Figure quotes come from the local canonical extract `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`. World sources are real URLs opened on 2026-11-23 and recorded in `10_source_ledger.csv`.

## Restating the question in effect terms

The question asks whether a system can count on its feedback to drive learning when the feedback channel is degraded in three ways: scarce signal (sparse), conflicting signal (inconsistent), or signal that depends on what the system already believes (biased). In the framework's vocabulary, feedback is the observation `o'`, not the ground. The residual is `R = |Γ(b,a) − o'|` per slot `s` (Symbols table :36-40; Fig 1 :11). So the question is whether `R` can still drive the loop to settlement when `o'` is thin, contradictory, or measures the frame instead of the world.

Two options and what each leads to:

- **Option A (affirm a plain yes):** treat feedback as a signal to be aggregated and made robust, then report a reliability figure. This leads to a frame-internal metric (coverage, accuracy on the same pool) that the figures disqualify, and it spends the independence of anyone asked to check it (Fig 1 :24-27; Fig 2 :40).
- **Option B (the derivation taken here):** refuse the single yes/no, split the question into three conditions with different mechanisms, re-ground "reliably" as a set of contact conditions (per-slot residual, non-updating anchor, independent frames, reachable channel, available refusal), keep verdicts per domain, and report the numerical guarantee as a declared `gap` (Fig 9 :54-58; Fig 13 :134).

## What is here

| file | what it is |
|---|---|
| `01_figure_grounded_audit.md` | Derive-first audit. Residual, domain census, figure census, findings F1-F12 with verbatim quotes and refuters, pre-registered refuter, recommendation, canonical usage check, retraction log. |
| `02_outreach_email.md` | Two-stage offer. Residual and refuter first, verdict recorded before theory, links only after. One-to-one, never asks for trust or agreement. |
| `03_public_contact_points.csv` | Public, opt-in, institutional submission and contact venues in machine learning, noisy-label learning, human-feedback alignment and pluralistic evaluation. No personal emails. |
| `04_links_and_distribution.md` | Verified public links actually fetched, wider literature with overlap declared, distribution rules, two-stage offer. |
| `05_what_shape_means.md` | Canonical reading of "shape" from the eight essays, with sources and an honest note on which were opened directly this session. |
| `06_isomers_and_order.md` | Supporting derivation: the three conditions as a union, order by dependency, the isomer question for two noise regimes, with a falsifier. |
| `07_the_tether_answer.md` | Synthesized answer, mode, non-claims, what would settle it, honest stop, one-paragraph version. |
| `08_expert_verification_packet.md` | The one to send. Claim, three checkable sub-claims with verbatim figure lines and refuters, non-claims, provenance, 20-minute check list. |
| `09_watson_answer.md` | Canonical WATSON shape: QUESTION / DOMAIN CENSUS / TETHER / WORLD / VERDICT, with cost if wrong, undoable, reversed by, and sources as linked titles. |
| `10_source_ledger.csv` | One row per source actually read, with url, title, author, venue, year, accessed date, quote, field, overlap, status and files used. |
| `11_audit.md` | Independent second-seat re-census from the residual line alone, comparison, verbatim checks, round-trip gap `R_T`, strains, verdict on the solution. |

## What is deliberately not here

- No personal emails of named individuals.
- No ranking of people by how likely they are to agree with the claim.
- No bulk-send plan.
- No numerical reliability guarantee. The figures return a shape and a falsifier, not an accuracy percentage, and manufacturing one would be the error named at Fig 9 :32 and Fig 13 :134.

Three reasons from the figures and the framework essays:

1. **Agreement is not a verdict.** Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." A list selected for receptiveness manufactures the correlation that makes agreement worthless (Fig 2 :40; Fig 2 :42).
2. **A ground that updates is not a ground.** Fig 2 :33: "The anchor must not update." If the feedback channel moves when the frame pushes on it, the system is in the coherent-drift collapse and cannot see it from inside (Fig 2 :34).
3. **A frame cannot validate itself.** *The Recursive Self-Improvement Trap*, opened 2026-11-23: "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." This package is a simulated derivation and does not settle the question it reports on.

## Suggested next step

Take `08_expert_verification_packet.md` and `02_outreach_email.md` to the public, opt-in venues in `03_public_contact_points.csv`. Ask what a checker would count as a failure before showing any of the framework. If they are curious, offer the figure text and the essays, in that order. Record their stage-1 verdict before any theory is shown, and never pool later agreement as corroboration.
