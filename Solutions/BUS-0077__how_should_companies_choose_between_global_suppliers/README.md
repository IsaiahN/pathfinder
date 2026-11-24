# Solution BUS-0077: figure-grounded package

**Question:** How should companies choose between global suppliers and regional or domestic production?

**Source:** `business.txt` line 102

**Section:** 8. Operations, supply chains, and resilience

**Mode:** `general` on the structural shape of the decision, `specified` on the per-domain predictions, not `grounded`. No measurement taken here settles a real sourcing decision, so nothing in this folder is `grounded`.

**Status:** done

**Registry status:** pending (this folder does not edit the registry)

## The question restated as an effect

A firm is deciding how to configure the supply base for one product at one time. Option A, global sourcing, buys a lower unit price at the cost of distance, longer and more variable lead time, exposure to a single lane or region, and a coordination burden that is hard to price. Option B, regional or domestic production, buys shorter contact and faster recovery at the cost of a higher unit price and the loss of capabilities that the distant configuration had quietly sustained. Each option leads to a different distribution of landed cost, lead-time variance, quality escapes, recovery time, and adaptation capacity. The residual is the gap between the configuration the firm predicts will perform and what the ground returns when demand, a disruption, or a quality event actually arrives. That residual is indexed per product, per supplier slot, per lane. It is never a single global number (Fig 1 :19, Fig 1 :22).

## What an answer would look like, bound as an ordinary term

Per `THE_FORMULA.md` step "Direction" and Fig 5 :65-66, the sought-for shape is written down and bound before the run so it can accrue a residual like any other term. The bound term here is:

> **A figure-licensed sourcing decision** is a procedure that, for each product slot, (1) unbundles the decision into its separate conditions, (2) names for each condition an anchor that does not move when the firm changes its mind, (3) counts second-order contact rather than first-order price alone, (4) treats any relocation as a substitution of habitat rather than a removal of risk, (5) prices the decision in two incommensurable currencies, (6) triangulates low-overlap frames, and (7) keeps every cut ranked and reversible. It returns a shape and a route. It does not return a country name.

This is the ordinary term that the findings below test. It is binding in the sense that a finding which breaks any of its seven clauses refutes the shape claim.

## Boundary and honesty

This is a **simulated derivation checked for internal consistency against the figures, not a ground reading.** Per *The Recursive Self-Improvement Trap*, LLM output is a simulation and "the truly testable output would need to be derived from the real architecture or working the formula yourself." It cannot settle the question it reports on. No real firm's cost, recovery, or quality data was measured. World sources were opened on 2026-11-22 and are recorded with author, venue, year and a quote in `10_source_ledger.csv`. All figure quotes are taken from `FRAMEWORK/reference/03-FIGURES_TEXT.md` and cited as `Fig N :line`.

Work was confined to this folder. The only writes outside it are the validation report produced by the project's own validation script and the appended completion-log entry required by the standing instructions.

## What is here

| file | what it is |
|---|---|
| `01_figure_grounded_audit.md` | Derive-first audit: residual, domain census, verbatim figure lines, findings F1 to F10, pre-registered refuter, retraction log. |
| `02_outreach_email.md` | Two-stage, one-to-one offer. Residual and refuter first, verdict before theory, links only after. |
| `03_public_contact_points.csv` | Public, opt-in institutional venues in global sourcing and supply chain management research. No personal emails. |
| `04_links_and_distribution.md` | Links actually fetched, relevant wider literature, distribution rules, two-stage offer, and failed fetches disclosed. |
| `05_what_shape_means.md` | Canonical reading of "shape" for this question from the eight essays, with the source discipline and a correction. |
| `06_isomers_and_order.md` | Supporting derivation: union versus partition, order by dependency, analogues, and a falsifier. |
| `07_the_tether_answer.md` | Synthesized answer, mode, non-claims, what would settle it, honest stop, one-paragraph version. |
| `08_expert_verification_packet.md` | **The one to send.** Claim, three checkable sub-claims with verbatim lines and refuters, non-claims, provenance, 20-minute check. |
| `09_watson_answer.md` | Canonical WATSON output: QUESTION / DOMAIN CENSUS / TETHER / WORLD / VERDICT with cost, undoability and reversal / Sources. |
| `10_source_ledger.csv` | One row per source actually read, with URL, author, venue, year, accessed date, quote, field, overlap and usage. |
| `11_audit.md` | Independent second-seat re-census from the residual line, round-trip gap R_T, strains, verdict. |

## What is deliberately not here

- No personal emails of named individuals.
- No ranking of people by how likely they are to agree with the shape claim.
- No bulk-send plan.

Three figure-grounded reasons:

1. **Agreement is not a witness when the frames share a pool.** Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool". A list selected for receptiveness manufactures exactly the correlation that makes later agreement worthless (Fig 2 :31).
2. **A room does not supply an anchor.** Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." More recipients raise the vocabulary, not the ground contact.
3. **Sending the interior before the verdict spends the reader's independence.** Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it." The offer therefore leads with the residual and its refuter.

Legally, scraping personal emails for unsolicited bulk outreach breaches GDPR and CAN-SPAM style rules in many jurisdictions. That is a practical failure on top of the structural one. Public opt-in channels avoid both.

## Suggested next step

Take `08_expert_verification_packet.md` and `02_outreach_email.md` to the public venues in `03_public_contact_points.csv`. Ask what would refute the shape claim. Record the answer before any theory is shown. Never pool later agreement as corroboration.
