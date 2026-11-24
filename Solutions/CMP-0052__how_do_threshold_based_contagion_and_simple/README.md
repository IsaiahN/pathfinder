# Solution CMP-0052 - figure-grounded package

**Question:** How do threshold-based contagion and simple exposure-based contagion interact in the same system?

**Source:** `Questions/complexity science.txt` line 65, section 6 "Cascades, contagion, and systemic risk".

**Mode:** `specified` on the substantive structural claims, `general` on the shape. Nothing here is `grounded`: no measurement in this derivation settles which bond governs a given real system, and no threshold value is measured.

**Status:** done.

**Registry status:** pending (set by the orchestrator, not by this subagent).

**Boundary.** Nothing outside this folder was modified. Figure text was read from `FRAMEWORK/reference/03-FIGURES_TEXT.md` and the formula from `FRAMEWORK/figures/THE_FORMULA.md`. Eight world sources were opened on 2026-11-22 and are recorded in `10_source_ledger.csv`.

## The residual, in effect terms

One contact network, one set of nodes and edges, two transmission rules present at once. Under simple (exposure-based) contagion a single contact suffices with probability λ and each exposure acts independently of the others. Under threshold (complex) contagion a node adopts only when the count or fraction of exposed neighbours reaches θ, that is, when a comparison is satisfied. The residual is the shape of their interaction when both rules act on the same system. Two options were carried, never averaged:

- **A:** they are one mechanism with a knob, so a single transmission probability can stand for both.
- **B:** they are two distinct typed relations (bonds) over one contact substrate, forming a union compound with its own mixed region, composing across scales.

The derivation returns **B** as a `specified` shape and refuses the parts of **A** that collapse the bond distinction. It does not return θ, λ, or which bond is active in any particular real system. That needs a ground.

## What is here

| file | what it is |
|---|---|
| `01_figure_grounded_audit.md` | Derive-first audit: residual, domain census, figure census, findings F1 to F7 with verbatim quotes and refuters, pre-registered refuter, retraction log. Mode `specified`. |
| `02_outreach_email.md` | Two-stage offer. Residual and refuter first, verdict recorded before theory, links only after. One-to-one, not bulk. |
| `03_public_contact_points.csv` | Verified public institutional submission and contact venues for contagion models research. No personal emails. |
| `04_links_and_distribution.md` | Links actually fetched, wider literature, distribution rules, two-stage offer. |
| `05_what_shape_means.md` | Canonical reading of "shape" from the eight essays, applied to this question. |
| `06_isomers_and_order.md` | Supporting derivation: bond typing, union versus partition, scale order, analogues, with a falsifier. |
| `07_the_tether_answer.md` | Synthesized answer, mode, non-claims, falsifiers, honest stop, one-paragraph version. |
| `08_expert_verification_packet.md` | **The one to send.** Claim, three checkable sub-claims with verbatim figure lines and refuters, non-claims, provenance, 20-minute check. |
| `09_watson_answer.md` | Canonical WATSON output: QUESTION / DOMAIN CENSUS / TETHER / WORLD / VERDICT / cost if wrong, undoable, reversed by / Sources. |
| `10_source_ledger.csv` | Eight world sources plus local framework files, one row per source actually read. |
| `11_audit.md` | Independent second-seat re-census from the residual line, round-trip gap `R_T`, strains, verdict. |

## What is deliberately not here

- No personal emails of named researchers, and no scraped contact list.
- No ranking of people by how likely they are to agree with this derivation. Fig 2 :39 "Correlation has valence." and the Seat Map rule that correlation disqualifies a verdict make such a list a manufactured consensus, not evidence.
- No bulk-send plan. One-to-one, opt-in venues only.
- No claim that this simulated derivation settles the question it reports on. *The Recursive Self-Improvement Trap* calls LLM output "simulacra" and says "the truly testable output would need to be derived from the real architecture or working the formula yourself." See `05_what_shape_means.md` section 6.

## Suggested next step

Take `01` and `08` to the public venues in `03`. Ask what would refute the shape claim. Record the verdict before showing the framework. Do not pool later agreement as corroboration (Fig 2 :40).
