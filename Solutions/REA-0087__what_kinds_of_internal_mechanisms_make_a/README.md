# Solution REA-0087

**Question:** What kinds of internal mechanisms make a system robust to unfamiliar inputs and adversarial pressure?

**Source:** reasoning.txt line 106

**Section:** 9. Limits, scaling, and architecture

**Mode:** `general` on the structural shape (it follows from the figures as metalaws), `specified` on the mapping of unfamiliar and adversarial inputs to the route bins, nothing `grounded`. This is a simulated derivation checked for internal consistency against the figures, not a ground reading.

**Status:** done

**Registry status:** pending

## The question restated as an effect

`R = |Γ(b,a) − o′|` is measured per object slot, never aggregated (Fig 1 :19). The question asks why `R` stays small in some systems when `o′` is unfamiliar (the NOVEL bin) or when an actor in the habitat is actively maximising the gap (adversarial pressure). Option A: robustness is a gadget inside the model, so the search is for an internal component. Option B: robustness is a union of conditions spanning the per-slot loop, the reach, the ground channel, independence between frames, and the habitat, so the search is for the shape those conditions must satisfy. A leads to a single mechanism that can be defeated by a different pressure; B leads to a checkable shape with a stated refuter and an open slot where a name is not licensed.

What an answer would look like is bound here as an ordinary term before the run: a set of conditions, each with its own anchor and its own failure, stated in effect terms so a checker can recognise a failure without holding the framework's interior.

## What is here

| file | what it is |
|---|---|
| `01_figure_grounded_audit.md` | Derive-first audit: residual, domain census, verbatim figure census, findings F1-F9, pre-registered refuter, retraction log. |
| `02_outreach_email.md` | Two-stage offer, one-to-one, residual and refuter before theory, no request for trust or agreement. |
| `03_public_contact_points.csv` | Public, opt-in, institutional submission and contact venues for AI robustness research. Not a mailing list. |
| `04_links_and_distribution.md` | Verified public links actually fetched, wider literature, distribution rules, two-stage offer. |
| `05_what_shape_means.md` | Canonical reading of "shape" for this question from the eight essays. |
| `06_isomers_and_order.md` | Supporting derivation: bonds and operators, isomers of robustness, dependency order, falsifier. |
| `07_the_tether_answer.md` | Synthesised answer, mode, non-claims, what would settle it, honest stop, one-paragraph version. |
| `08_expert_verification_packet.md` | The one to send. Claim, three checkable sub-claims, verbatim figure lines, refuters, provenance, 20-minute check. |
| `09_watson_answer.md` | Canonical WATSON output: QUESTION / DOMAIN CENSUS / TETHER / WORLD / VERDICT / cost if wrong, undoable, reversed by / Sources. |
| `10_source_ledger.csv` | Every source actually read, with author, venue, year, accessed date, quote and overlap. Local framework files use `local:` paths. |
| `11_audit.md` | Independent second-seat re-census from the residual line alone, round trip gap R_T, strains, verdict. |

## What is deliberately not here

- No personal emails of named individuals.
- No ranking of people by how likely they are to agree.
- No bulk-send plan.
- No claim that a named architecture (a particular ensemble, a particular regulariser) is the answer. The figures return a shape, not a name (Fig 9 :32).

## Boundary

No file outside this folder was edited. Sources were the 16 canonical figures and their verbatim text extract under `FRAMEWORK/`, the formula, the seat map, the metalaws note, the eight essays, and the public web pages listed in `10_source_ledger.csv`, all opened on 2026-11-24.

## Suggested next step

Take `08_expert_verification_packet.md` and `02_outreach_email.md` to a public venue in `03_public_contact_points.csv`. Ask what would refute the shape claim. Record that verdict before showing any theory. A reported failure is more useful than an endorsement.
