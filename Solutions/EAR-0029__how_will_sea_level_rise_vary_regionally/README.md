# Solution EAR-0029 : figure-grounded package

**Question:** How will sea-level rise vary regionally as ocean circulation, gravity, and land movement change?

**Source:** earth systems.txt line 39

**Section:** 3. Oceans and circulation

**Mode:** `general` on the structural shape (the residual is per-slot, the drivers form a union, actor valence is relative to the slot, the contact chain cascades). `specified` on the binding of the three named drivers onto the world frame. Nothing here is `grounded`: no measurement was taken in this derivation and the numerical regional field is not produced by the framework.

**Status:** done

**Registry status:** pending

**Field for public contact points:** sea level research.

---

## The question stated as an effect

Option A: report one global mean sea-level number and treat regional departures as local noise. This leads to a live per-coast signal being averaged away; a global residual near zero with one live coastal slot is a legal state under Fig 1, so the aggregate can look healthy while a coast is failing. Option B: report a vector of per-slot residuals, each an overlapping compound of circulation, gravitational/deformational, and land-motion conditions, with the sign of each driver relative to the slot, and let the ground (tide gauges, altimeters, GNSS, GRACE) settle each slot separately. This leads to a checkable shape and a measurement plan, and it stops honestly before producing a map of numbers the framework does not contain.

What an answer would look like, bound as an ordinary term (formula step "Direction"): a per-coast vector, not a scalar; a union, not a partition; a sign that flips with distance from the ice source; and a named instrument that would discriminate among the drivers at a slot. This prediction was written down before the world search; see `01_figure_grounded_audit.md` §3.

## Boundary and honest standing

This folder contains a **simulated derivation checked for internal consistency against the figures, not a ground reading**. It cannot settle the question it reports on. *The Recursive Self-Improvement Trap*: "the truly testable output would need to be derived from the real architecture or working the formula yourself." Fig 8 :39: "So a search that finds nothing is never a proof of absence." An honest stop is recorded as a verdict, not hidden as silence.

No file outside this solution folder was modified. Framework sources were read from `FRAMEWORK/reference/` and `FRAMEWORK/figures/`.

## What is deliberately not here

- No personal emails of named individuals. Contact venues are public institutional pages, forms, and submission portals.
- No ranking of researchers by how likely they are to agree with the shape claim.
- No bulk-send plan. The two-stage offer is one-to-one and opt-in.
- No regional map of projected sea level produced by this framework. That is a ground result, not a figure result.

Reasons, in the figures' own words: Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool". Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." Fig 2 :42 "Buy independence in proportion to the cost of being wrong."

## Files

| file | what it is |
|---|---|
| `01_figure_grounded_audit.md` | Derive-first audit: residual, domain census, verbatim figure census, findings F1 to F8, pre-registered refuter, recommendation, canonical usage check, retraction log. Mode `general` / `specified`. |
| `02_outreach_email.md` | Two-stage, one-to-one offer. Residual and refuter first, links only after a verdict is recorded. |
| `03_public_contact_points.csv` | Public, opt-in, institutional contact and submission venues in sea level research. Not a mailing list. |
| `04_links_and_distribution.md` | Verified public links actually fetched, relevant wider literature, distribution rules, two-stage offer. |
| `05_what_shape_means.md` | Canonical reading of "shape" for this question from the eight essays, with sources. |
| `06_isomers_and_order.md` | Supporting derivation: the space gradient versus the time gradient, union versus partition, and the functional-group reading of the three drivers, with a falsifier. |
| `07_the_tether_answer.md` | Synthesized answer, mode, non-claims, what would settle it, honest stop, one-paragraph version. |
| `08_expert_verification_packet.md` | The one to send. Claim, three checkable sub-claims with verbatim figure lines and refuters, non-claims, provenance, 20-minute check list. |
| `09_watson_answer.md` | Canonical WATSON shape: QUESTION / DOMAIN CENSUS / TETHER / WORLD / VERDICT with cost if wrong, undoable, reversed by, and Sources. |
| `10_source_ledger.csv` | One row per source actually read, with URL, author, venue, year, accessed date, quote, field, overlap, status, and use. |
| `11_audit.md` | Independent second-seat re-census from the residual line alone, round-trip gap `R_T`, strains, verdict on the solution. |
