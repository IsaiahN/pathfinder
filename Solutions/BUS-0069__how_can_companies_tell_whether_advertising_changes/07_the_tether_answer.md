# The Tether's answer on advertising and behavior change

**Mode: `specified`: not `grounded`.** This is a shape and a route, not a result. Simulated derivation checked against the figures (`05_what_shape_means.md` §6), not a ground reading.

## 1. The residual it answers

A company sees purchases following ad exposures and wants to know whether the ad caused those purchases or merely reached people who were going to buy anyway. The two cases give the same reading, a purchase after an exposure, and a flat log cannot tell them apart (Fig 12 :15-16). The residual is per consumer slot, `Δ_s`, the difference between what happened with the ad and what would have happened without it in the same slot. It is never a campaign average (Fig 1 :19, :22). This is a **union compound**, not one hard question: C1 (did behavior change) and C2 (did the ad reach likely buyers) are different conditions with different instruments (Fig 9 :54-57).

## 2. The shape

1. **Attributed conversions are not the verdict.** Reach, impressions, clicks, and attributed conversions are quantities the measurement frame produces. *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* (Fig 1 :27). They are budget filters, not witnesses (Fig 9 :60).
2. **The anchor for C1 is a counterfactual that does not update.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* The market settles what was purchased. A randomised holdout, geo split, or equivalent assignment settles what would have been purchased. Neither moves when the analyst changes their mind (Fig 2 :33).
3. **Agreement among analytics frames is one witness.** Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence."* Three attribution models fed by the same logs are one frame wearing three names (Fig 8 :51). A holdout draws on a different evidence source.
4. **The two questions must be kept separate.** A blended ROAS is *"saturated metrics, pooled readings"* (Fig 10 :26). *"a case in two conditions is not a harder case of either"* (Fig 9 :57). C1 needs a counterfactual; C2 needs a selection diagnostic. One lever cannot clear both regions.
5. **The purchase reading cannot name its source.** From *The Hard Problem is About Source*: an instrument that reads green *"cannot comment on the source"*. What is owed is a source-discriminating instrument, improved from a worse one already returning something (Fig 6 :32-34), not a name read off the projection.
6. **Underpowered is not underivable.** Lewis and Rao's wide confidence intervals and 10 million person-week requirement are budget facts. *"So a search that finds nothing is never a proof of absence."* (Fig 8 :39). Ask SEARCHED first, then INWARD, then OUTWARD (Formula step 7).
7. **The break is usually at vocabulary and objective.** The firm has reach data but no term for "would have bought anyway", and states the objective as "improve ROAS" rather than "estimate `Δ_s` per slot" (Fig 3 :24-27).
8. **The framework returns a shape, not a named tool.** Fig 9 :32: *"you get a kind of thing, never the answer itself."* It will not pick a vendor, product, or statistical package.

## 3. What it explicitly does not say

- Not that advertising never works. The shape separates cases; it does not pre-empt the measurement.
- Not that a holdout must be run on every campaign. Budget and spillover are real constraints (F8, Fig 8 :39-43).
- Not that observational methods are useless. They are filters and, at maximum independence, possible corroboration. Their agreement with a holdout is evidence only if the evidence pools differ (Fig 2 :31, :40).
- Not that any named attribution product or MMM is the answer. Naming is a binding from the business frame, recorded as such.
- Not `grounded`. No lift result, purchase record, or market measurement pays for any part of this here.

## 4. What would settle it: the ground

An instrument, not a further argument:

- **Per-slot counterfactual test:** does `⋛(P | A=1, P | A=0)` stay positive at the named slot, where A is an assignment the analyst could not influence? This is the C1 ground.
- **Source-discrimination test:** can any reading of exposure and purchase separate a persuaded purchase from an otherwise identical likely-buyer purchase without a counterfactual? If yes, F4 is broken and attribution alone suffices for that case.
- **Budget test:** for campaigns where the holdout interval is too wide, is the term unreachable-at-this-budget or underivable-in-principle? The two issue different instructions (Fig 8 :39-43).
- **Channel test:** is the holdout still genuinely randomised, or has the channel decayed into stale percepts, pooled readings, and saturated metrics (Fig 10 :26)?
- **Standing falsifiers from the record:** the four in `01_figure_grounded_audit.md` §4, in particular a logs-only statistic that predicts per-consumer causation at the ground, or an intervention that collapses the union into a partition.

## 5. The honest stop

**Unreached, not unreachable.** The measurement stack a firm holds is *"a human's careful guess"* at what pays, not nature's own list of causes. Declaring it makes the choice visible, not neutral. The answer stops at the limit of the available instruments and records the lineage so the stop is checkable. *"Indiscernibility is not identity."* Which named tool wins is a `gap`, not a silence: the framework returns a shape, and the source-discriminating instrument that would name a specific choice is not held here.

## 6. One-paragraph version for outreach

> The Tether does not tell you which attribution product to buy, and it does not claim that advertising never works. It says that a purchase following an ad is a reading, not a source, so reach, clicks, and attributed conversions cannot settle whether the ad changed anything. What settles it is a comparison of the same consumer, with and without the ad, against an assignment that does not move when the analyst changes their mind about who was likely to buy. The question is two questions, not one: did behavior change, and did the ad merely reach likely buyers. They need different instruments and must never be averaged into one ROAS. The framework returns that shape, four falsifiers written in advance, and the instruments that would close it. It stops where the budget and the instruments stop, and records the lineage so the stop is checkable.
