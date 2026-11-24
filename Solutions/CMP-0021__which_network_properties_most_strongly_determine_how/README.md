# Solution CMP-0021: network properties and the speed or reach of spreading

**Mode:** `specified` on the shape claims, `general` on the substrate rule, `gap` on the specific ranking of degree distribution versus clustering versus community structure. Nothing here is `grounded`: no measurement was taken by this derivation.

**Status:** done.

**Registry status:** pending (set by the parent session, not by this subagent).

## Manifest

- **Question:** Which network properties most strongly determine how fast or widely a process spreads: degree distribution, clustering, community structure, or something else?
- **Source:** `Questions/complexity science.txt` line 28.
- **Section:** 3. Network structure and dynamics.
- **Question ID:** CMP-0021.
- **Folder:** `Solutions/CMP-0021__which_network_properties_most_strongly_determine_how/`.

## The question restated as an effect

Let `R = |Γ(b,a) − o'|` be the gap between the predicted spread of a process over a network and the observed spread. The candidate answers, degree distribution, clustering, community structure, and "something else", are candidate properties of the network structure that the prediction Γ might use. The question asks which of them, when substituted into Γ, shrinks R most across a population of cases.

What an answer would look like, bound as an ordinary term before the run (formula step "Direction"): a property P such that `|predict(spread | P) − observed spread|` is small across many distinct network/process/seed slots, and whose residual does not merely fit one occasion. The shape such an answer must have is derived in `01_figure_grounded_audit.md` before any verdict is stated.

## What this folder concludes, in one line

The figures give the shape but not the ranking: spreading is influence travelling over a network structure (Fig 13 :24) driven by a spendable difference (Fig 13 :22), the candidate properties form a union of overlapping conditions rather than a partition (Fig 9 :55), and the residual is per slot (Fig 1 :19). No figure line ranks the three named properties, so that ranking is a declared `gap` to be settled by the ground, not by the framework.

## Files

| file | what it is |
|---|---|
| `README.md` | This manifest: ID, question, source line, section, mode, status, file list. |
| `01_figure_grounded_audit.md` | Derive-first audit: residual, domain census, verbatim figure census, findings F1 to F7 with refuters, pre-registered refuter, recommendation, canonical usage check, retraction and confirmation log. |
| `02_outreach_email.md` | The two-stage offer, one-to-one. Residual and refuter first, verdict before theory, links only after. |
| `03_public_contact_points.csv` | Public, opt-in, institutional submission and contact venues in network science research. No personal emails. |
| `04_links_and_distribution.md` | Verified public links actually fetched, relevant wider literature, distribution rules, two-stage offer. |
| `05_what_shape_means.md` | Canonical reading of "shape" for this question from the eight essays, with sources and a correction. |
| `06_isomers_and_order.md` | Supporting derivation: the three properties as arrangements (isomers) of one atom set, plus order and a falsifier. |
| `07_the_tether_answer.md` | Synthesized answer, mode, non-claims, what would settle it, honest stop, one-paragraph version. |
| `08_expert_verification_packet.md` | The one to send: claim, three checkable sub-claims with verbatim lines and refuters, non-claims, provenance, 20-minute check. |
| `09_watson_answer.md` | Canonical WATSON shape: QUESTION / DOMAIN CENSUS / TETHER / WORLD / VERDICT / cost if wrong, undoable, reversed by / Sources. |
| `10_source_ledger.csv` | One row per source actually read, with author, venue, year, accessed date, quote, field, overlap, status and files used in. |
| `11_audit.md` | Independent second-seat re-census from the residual line alone, round-trip gap `R_T`, strains, verdict on the solution. |

## What is deliberately not here

- No personal emails of named researchers.
- No ranking of people by how likely they are to agree with the shape claim.
- No bulk-send plan.
- No claim that the framework settles the empirical ranking. Fig 13 :134: "Unreachable is a verdict here, not a silence". A gap is reported, not filled.

Three figure-grounded reasons for the omissions:

1. Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Selecting recipients for likely agreement manufactures exactly the correlation that makes their agreement worthless.
2. Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it." Sending the full framework before asking for a verdict spends the reader's independence.
3. Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." Public venue lists are contact routes, not evidence.

## Honest standing

This entire folder is a simulated derivation checked for internal consistency against the figures, not a ground reading. The Recursive Self-Improvement Trap (Isaiah N, 2026) says LLM output is *"simulacra"* and that *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* It cannot settle the question it reports on. The world sources in `09_watson_answer.md` were opened and are recorded, but they are secondary corroboration only and never overrule a figure line.

## Suggested next step

Take `08_expert_verification_packet.md` and `02_outreach_email.md` to one or two of the public venues in `03_public_contact_points.csv`. Ask for a refutation of the shape, not an endorsement. Record any verdict on stage 1 before offering the framework.
