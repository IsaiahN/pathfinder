# Solution EAR-0052 — figure-grounded package

**Question:** How quickly can soil degradation reduce crop productivity, water retention, and ecosystem resilience?

**Source:** `earth systems.txt` line 71

**Section:** 6. Soils, water, and land systems

**Field for public contact points:** soil science and agriculture research

**Mode:** `general` on the structural shape returned by the figures, `specified` on the binding of soil quantities to figure quantities. Nothing here is `grounded` by the figures. The numeric rates reported from soil-science literature are `ground` for those particular measurements only, and are recorded as world evidence, never as figure derivations.

**Status:** done

**Registry status:** pending

---

## The question restated as an effect

What is being decided is a **rate**, in units of effect per unit time (yield percent per year, soil organic carbon mass per area per year, years to a new soil-carbon equilibrium). Each option leads somewhere different:

- **Option A, one number for all three outputs.** Leads to an average that hides which slot is actually failing. Fig 1 :19 says the residual is indexed by object slot, and Fig 1 :22 says aggregating across slots is how a live signal disappears into an average.
- **Option B, three separate loops with a ground each.** Leads to three rate statements that can disagree, stay unaveraged, and each be checked against a measurement. Fig 9 :54 says to unbundle a union before searching again.

**What an answer would look like (bound as an ordinary term before the run):** three rate statements, one per output slot, each with (i) its own actor set and currency, (ii) its own anchor (an instrument or dataset), (iii) a stated mode, and (iv) a refuter. A single global "speed of soil degradation" is NOT such an answer. This binding is written down before the derivation so the sought-for shape is refusable by the same test as everything else (formula step "Direction").

## Why the figures cannot supply the number

The figures return a shape, not a measurement. Fig 2 :29 names the anchor as a measurement or experiment, and Fig 13 says an unreachable answer is "Unreachable is a verdict here, not a silence." The rate is settled by soil-science ground data, which this package reports as secondary corroboration in `09_watson_answer.md` and `10_source_ledger.csv`, not as a figure output. The Tether verdict is about the **shape** of the answer; the **number** is owed from outside the figure frame.

---

## What is here

| file | what it is |
|---|---|
| `01_figure_grounded_audit.md` | Derive-first audit: residual in effect terms, domain census, verbatim figure census, findings with refuters, pre-registered refuter, canonical usage check, retraction log. |
| `02_outreach_email.md` | Two-stage offer. Residual, refuter and verdict first, links only after. One-to-one, never asks for trust or agreement. |
| `03_public_contact_points.csv` | Verified public institutional submission and contact venues in soil science and agriculture research. Not a mailing list. No personal emails. |
| `04_links_and_distribution.md` | Public links actually fetched, wider literature, distribution rules, two-stage offer. |
| `05_what_shape_means.md` | Canonical reading of "shape" from the eight essays, with sources actually opened. |
| `06_isomers_and_order.md` | Supporting derivation: degradation mechanisms as Fig 12 isomers and functional groups, dependency order from Fig 3, with a falsifier. |
| `07_the_tether_answer.md` | Synthesized answer, mode, non-claims, per-slot verdicts kept separate, honest stop, one-paragraph version. |
| `08_expert_verification_packet.md` | **The one to send.** Three checkable sub-claims, verbatim figure lines, refuters, provenance, 20-minute check. |
| `09_watson_answer.md` | Canonical WATSON shape: QUESTION / DOMAIN CENSUS / TETHER / WORLD / VERDICT / Sources. |
| `10_source_ledger.csv` | Provenance ledger, one row per source actually read. |
| `11_audit.md` | Independent second-seat re-census, round-trip gap, strains, verdict on the solution. |

## What is deliberately not here

- No personal emails of named individuals.
- No ranking of people by how likely they are to agree with the shape claim.
- No bulk-send plan.
- No claim that the figures settle the numeric rate.

Three reasons, in the figures' own words:

1. **Agreement is not an anchor.** Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Selecting recipients for receptiveness manufactures the correlation that makes their agreement worthless (Fig 2 :40).
2. **Do not spend the reader's independence.** Fig 10 :42: *"A verifier that can reconstruct the claim cannot verify it."* The residual and refuter go first; the framework interior goes only to those who opt in.
3. **Filters are not witnesses.** Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* Venue prestige and publication count decide what gets tried first, never whether the shape is right.

## Honest status of this derivation

This is a **simulated derivation checked for internal consistency against the figures**, not a ground reading. *The Recursive Self-Improvement Trap* (essay, opened 2026-11-22): "the truly testable output would need to be derived from the real architecture or working the formula yourself," and LLM output is a simulacrum. By its own rule this package cannot settle the question it reports on. See `05_what_shape_means.md` §6.

## Suggested next step

Take `01` and `08` to the public venues in `03`. Ask what would refute the shape claim. Record the verdict before showing the framework. If a soil scientist supplies a rate with its own anchor, that is a ground contribution, not corroboration of the figures.
