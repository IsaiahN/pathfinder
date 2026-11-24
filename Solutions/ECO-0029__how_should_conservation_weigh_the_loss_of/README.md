# Solution ECO-0029: figure-grounded package

**Question:** How should conservation weigh the loss of a unique species against the decline of many widespread species?

**Source:** `Questions/ecology.txt` line 36 (question 29). Section 3: Species loss, extinction, and community change.

**Mode:** `general` on the structural shape, `specified` on the per-domain mechanisms, `gap` on any universal scalar weight, not `grounded`. Every substantive file is a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the question it reports on.

**Status:** done.

**Registry status:** pending (set by the registry step, not by this author).

**Field for public contact points:** conservation prioritization research.

## Boundary

All work was confined to this folder. No file outside `Solutions/ECO-0029__how_should_conservation_weigh_the_loss_of/` was modified. Framework primaries are the local canonical copies under `FRAMEWORK/reference/` and `FRAMEWORK/figures/`. World sources are the public pages and Europe PMC records actually opened on 2026-11-23 and listed in `10_source_ledger.csv`. Every figure quote in this folder was checked character by character against `FRAMEWORK/reference/03-FIGURES_TEXT.md`.

## The residual, stated as an effect

A finite conservation budget must be committed. Two losses are placed on one scale:

- **L_unique:** one species with no functional equivalent disappears from the community. The atom is removed; no composition inside the held library can recreate it.
- **L_many:** many widespread species decline in abundance across many slots. The atoms remain; their mass is reduced, and a decline can cross a viability threshold into a loss.

The question asks for a single weight `w` so that `w * L_unique` can be compared with `(1 - w) * L_many`. The residual is `R_s = |r_s - o_s|` per function slot `s`, where `r_s` is the target state and `o_s` the observed state. An answer would look like: *for slot s, the chosen commitment closed R_s and a pre-declared measurement agrees*, or *for slot s, R_s persists and the commitment failed*. This is the "Direction" discipline from `THE_FORMULA.md`: write down what an answer would look like before the run so the sought-for shape can be refused.

The derivation finds that the two losses are not the same kind of quantity, so the requested scalar is a filter for the budget and never a witness for the verdict. It returns a separator with per-slot verdicts, a union boundary where decline becomes loss, an irreversibility burden of proof, and a declared `gap` for the universal weight.

## What is here

| file | what it is |
|---|---|
| `01_figure_grounded_audit.md` | Derive-first audit: residual, domain census, verbatim figure census, findings F1 to F11, pre-registered refuter, recommendation, canonical usage check, retraction and confirmation log. |
| `02_outreach_email.md` | One-to-one, two-stage offer. Residual and refuter first, theory only after a stage-1 verdict is recorded. |
| `03_public_contact_points.csv` | Public, opt-in institutional venues in conservation prioritization research. Not a mailing list. |
| `04_links_and_distribution.md` | Verified public links, wider literature, distribution rules, two-stage offer, and honest fetch failures. |
| `05_what_shape_means.md` | Canonical reading of "shape" for this question from the eight essays, with a correction to an earlier overstatement. |
| `06_isomers_and_order.md` | Supporting derivation: subtraction versus negation, functional group versus isomer, the decline-to-loss threshold, and a falsifier. |
| `07_the_tether_answer.md` | Synthesized answer, mode, non-claims, what would settle it, honest stop, one-paragraph version. |
| `08_expert_verification_packet.md` | **The one to send.** Claim, three checkable sub-claims with verbatim figure lines and refuters, non-claims, provenance, 20-minute check. |
| `09_watson_answer.md` | Canonical WATSON output: QUESTION / DOMAIN CENSUS / TETHER / WORLD / VERDICT, with cost if wrong, undoable, reversed by, and sources. |
| `10_source_ledger.csv` | One row per source actually read, with author, venue, year, accessed date, quote, field, overlap, status and use. |
| `11_audit.md` | Independent second-seat re-census from the residual line, comparison, round-trip gap `R_T`, strains, verdict. |

## What is deliberately not here

- No personal emails of named individuals.
- No ranking of people by how likely they are to agree with the claim.
- No bulk-send plan.

Three reasons, in the framework's own words:

1. **A room does not upgrade the label.** Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." Gathering a list of sympathetic conservationists produces a convention, not corroboration.
2. **Correlation disqualifies a verdict.** Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Selecting recipients for receptiveness manufactures the correlation that makes their agreement worthless.
3. **A verifier who holds the interiors cannot verify.** Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it." The first contact carries the residual and its refuter, never the framework's source.

Legally, scraping personal emails for unsolicited bulk outreach breaches GDPR and CAN-SPAM style rules in many jurisdictions. Public opt-in institutional channels avoid that failure as well as the structural one.

## Suggested next step

Take `01` and `08` to a public venue in `03_public_contact_points.csv`. Ask what would refute the shape claim. Record the stage-1 verdict before offering any theory, and never pool later agreement as corroboration.
