# Solution QMGR2-0026 - Tether / WATSON figure-grounded package

**Question:** How much do assumptions about the early universe affect estimates from the cosmic microwave background?

**Source:** `QM & GR Questions.txt` line 172.

**Section:** C. The Hubble tension and cosmological measurements.

**Mode:** `general` on the structural shape, `specified` on the load-bearing claim about the sound horizon. Nothing here is `grounded`: no new measurement was taken, and the numeric sizes quoted from the literature are corroboration, not figure-derived results.

**Status:** done.

**Registry status:** pending (set by the registry pass, not by this folder).

## What this folder answers, in effect terms

The CMB does not return a Hubble constant. It returns a tightly measured angular acoustic scale, `theta_* = r_s / D_A`. To turn that ratio into H0 you must supply a sound horizon `r_s`, and `r_s` is fixed by assumed pre-recombination physics (N_eff, recombination history, any early dark energy), not by the CMB data. So the question "how much do the assumptions matter" becomes: how much does the imported `r_s` move when the early-universe frame's closure changes? The Tether answer is that this import is the dominant systematic in the CMB-to-H0 inference, while the directly measured ratio is essentially assumption-free. The world data agree: Planck measures `100 theta_* = 1.0411 +/- 0.0003` (0.03%) and infers `H0 = 67.4 +/- 0.5` only under base-Lambda-CDM; allowing early-universe changes moves the inferred value by roughly the 5 to 6 km/s/Mpc that separates it from the local ladder value `73.04 +/- 1.04`.

## Boundary and provenance

Sources used were the local canonical framework files under `FRAMEWORK/` (figure text with line numbers, figures README, THE_FORMULA, seat map), the eight essays by Isaiah N as mapped in `05_what_shape_means.md`, and the public cosmology sources listed in `04_links_and_distribution.md` and `10_source_ledger.csv`. Every figure quotation is checked verbatim against `FRAMEWORK/reference/03-FIGURES_TEXT.md` and cited as `Fig N :line`. Every world source was opened and is recorded with author, venue, year, accessed date and a quote.

This is a **simulated derivation**, checked for internal consistency against the figures. By the framework's own rule (*The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the question it reports on. It states what is reachable, what must be imported, and what would reverse it. No em dashes appear in any file.

## File list

| file | what it is |
|---|---|
| `README.md` | this manifest. |
| `01_figure_grounded_audit.md` | derive-first audit: residual, domain census, verbatim figure census, findings F1 to F9 with refuters, pre-registered refuter, recommendation, canonical usage check, retractions. |
| `02_outreach_email.md` | two-stage offer, one-to-one, residual and refuter before theory, no request for trust or agreement. |
| `03_public_contact_points.csv` | public, opt-in institutional submission and contact venues in cosmology. No personal emails. |
| `04_links_and_distribution.md` | verified public links actually fetched, wider literature, distribution rules, two-stage offer. |
| `05_what_shape_means.md` | canonical reading of "shape" for this question from the eight essays, with a correction. |
| `06_isomers_and_order.md` | supporting derivation: split into measurement / model / local domains, order by dependency, cross-scale transform and round-trip gap, with a falsifier. |
| `07_the_tether_answer.md` | synthesized answer, mode, non-claims, what would settle it, honest stop, one-paragraph version. |
| `08_expert_verification_packet.md` | the one to send: claim, three checkable sub-claims with verbatim lines and refuters, non-claims, provenance, 20-minute check. |
| `09_watson_answer.md` | canonical WATSON output: QUESTION / DOMAIN CENSUS / TETHER / WORLD / VERDICT with cost if wrong, undoable, reversed by / Sources. |
| `10_source_ledger.csv` | one row per source actually read, with url, author, venue, year, accessed date, quote, field, overlap, status, used_in_file. |
| `11_audit.md` | independent second-seat re-census, round-trip gap R_T, strains, verdict. The second seat shares the evidence pool, so its agreement is internal consistency, not corroboration. |

## What is deliberately not here

- No personal emails of named individuals, and no receptiveness ranking of people.
- No bulk-send plan.
- No claim that this derivation has settled the Hubble tension or named the missing early-universe physics. Fig 13 :134: "It cannot say which primitive is missing, because naming it would mean already holding it."

Three reasons from the figures: Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you."; Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"; Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it."

## Suggested next step

Take `01` and `08` to one of the public venues in `03`. Ask for a refutation of the stage-1 shape claim first. Record the answer before offering any framework material.
