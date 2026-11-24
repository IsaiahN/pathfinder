# The Tether's answer on regional sea-level rise

**Mode: `general` on the shape, `specified` on the world binding of the three mechanisms, not `grounded`.** This is a shape and a measurement plan, not a regional map. Simulated derivation checked against the figures (`05_what_shape_means.md` §6), not a ground reading.

## 1. The residual it answers

The question asks how sea-level rise varies regionally as circulation, gravity and land movement change. In effect terms the residual is `R_s`, the gap between observed and predicted sea level at coastal slot `s`. The live signal is in the vector, not in its mean. Fig 1 :19: **"The residual is indexed by object slot, not aggregated."** Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."** A global mean near zero with one live coastal slot is a legal state (Fig 1 :13, :20), so the aggregate cannot be the object the loop drives on.

The three named drivers are a union of overlapping conditions, not a partition and not one hard problem (Fig 9 :54, :57; `06_isomers_and_order.md` Q1).

## 2. The shape

1. **Per slot.** The answer is a coastal vector. The global mean remains a legitimate aggregate indicator, but it is a summary statistic, not the residual that decides where to look (Fig 1 :19, :28).

2. **Union, unbundled.** Circulation, gravity/rotation/deformation and land motion each need a slot-level treatment before their intersections are handled as compounds with their own loops. Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**

3. **Sign relative to the slot.** There is no standing list of sea-level-raising mechanisms. Fig 11 :49: **"An actor's valence is relative to the residual, not a property it carries."** Ice loss can lower relative sea level near the sheet and raise it above the global average far away. As the world sources put it, "Logic might suggest that nearby levels would rise, but instead they fall. Thousands of miles away, however, they do go up in a kind of seesaw effect." (Harvard Gazette, 2022).

4. **Cascade.** The chain from ice mass loss to coastal flood frequency runs through gravity, rotation and deformation, then water redistribution, then regional mean, then extremes. Fig 11 :52: **"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."** The decisive middle link, GRD, is the one with no single dedicated coastal instrument (Fig 3 :27).

5. **Two different gradients.** The regional pattern is a gradient over space, the rise is a gradient over time. Fig 13 :76: **"A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is."** They must not be collapsed into one field.

6. **Triangulation, not consensus.** Tide gauges measure water relative to land; altimeters measure water relative to a reference frame. Fig 2 :31: **"Independence, between two frames, is how little they draw on the same evidence."** Fig 8 :45: **"Two frames together reach what neither reaches alone."** Their disagreement locates vertical land motion; their agreement is only evidence if the overlap is low.

7. **The numerical field is a `gap` for the figure closure.** The framework returns the kind of thing, not the thing: Fig 9 :32 "you get a kind of thing, never the answer itself". Fig 8 :39 "So a search that finds nothing is never a proof of absence." Fig 13 :134 "Unreachable is a verdict here, not a silence." The numbers are owed by instruments and assessed projections, not by further composition inside the six-term set.

## 3. What it explicitly does not say

- Not that the global mean is useless. It is a valid aggregate and a useful input; it simply cannot carry the per-slot live signal.
- Not a regional map, not a coefficient per coast, and not a dominant-driver ranking. Those are ground results.
- Not that the three mechanisms are figure-derived. They are an assessed world result (IPCC AR6 WG1 Ch9), marked `specified`, used as corroboration only.
- Not that the framework names the mechanisms. It returns a shape; the world frame supplies the names with provenance (see the correction in `05_what_shape_means.md` §3).
- Not that any part is settled. No measurement was taken in this derivation.

## 4. What would settle it : the ground

A source-discriminating instrument, not a further argument. *The Hard Problem is About Source*: "If several paths create the same behavior, then behavior is a projection with lossy information", and "The answer is unreached until a better instrument exists." The global mean reads green and cannot comment on the source. The corresponding questions here are:

1. **Per-slot check.** Does a global mean plus fixed local offsets reproduce observed sea level within instrument error at every coast? If yes, F1 fails.
2. **Union check.** Do the three drivers act on disjoint slot sets with empty intersections? If yes, F2 fails.
3. **Fingerprint check.** Does one ice-loss event raise relative sea level equally everywhere? If yes, F3 fails.
4. **Independence check.** Do tide gauges and altimeters draw on the same evidence pool? If yes, F6 fails.
5. **Source discriminator.** Is there an instrument at a slot that separates circulation from GRD from land motion on the same record? This is the owed INWARD instrument. Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something." Altimetry, GNSS, GRACE and tide gauges are the worse instruments already returning something.

All five are stated before the conclusion in `01_figure_grounded_audit.md` §3. Four are cheap to run against existing observations; the fourth needs an overlap audit of instrument records.

## 5. The honest stop

**Unreached, not unreachable.** *They're Scanning Books When They Should Be Studying Nature*: "A minimum viable set of six terms is a human's careful guess at reality's compression axes; another sensorium's minimum set need not be those six." Declaring the axes makes the choice visible, not neutral. The answer stops at the limit of what the available instruments can distinguish and records the lineage so the stop is checkable. The figures README: "Indiscernibility is not identity." The round trip from the verbatim figures to this summary and back loses constraints; the dropped set is enumerated in `11_audit.md` as a qualitative `R_T`.

## 6. One-paragraph version for outreach

> Regional sea-level rise is not one number with local corrections. The live signal is indexed by coast, so a healthy global mean and a failing coast are simultaneously possible. The three named drivers, ocean circulation, gravity and land movement, form a union of overlapping conditions rather than three separable problems, and the sign of each driver is relative to the coast: ice loss can lower sea level near the ice and raise it far away. The causal chain reaches the shore three steps out, through the gravity, rotation and deformation response, so a model scoped only to the coast misses the driver. The pattern over space and the rate over time are different terms and must be kept apart. Tide gauges and satellite altimeters measure different reference frames; their disagreement is information about land motion, and their agreement counts as evidence only if their evidence pools are independent. The framework supplies that shape and the measurement plan, not a numerical map. What would refute it was written down before the search: a fixed-offset global model that works at every coast, empty intersections among the three drivers, a fingerprint with no near-field fall, or two instruments sharing one evidence pool. The numbers stay open until the ground settles them.

## Verdict fields

- **cost if wrong:** bounded and locatable. The shape is stated with its refuters, so an error is findable rather than invisible. The real cost is spending the independence of outside checkers by sending a theory before a checked output. Fig 2 :42 "Buy independence in proportion to the cost of being wrong." That cost is avoidable by leading with the shape and the refuter (Fig 10 :52).
- **undoable:** yes. The world binding is removable without touching the shape; `01` F9 keeps the two apart. A sent claim can be superseded by a corrected packet and no primitive has to be withdrawn.
- **reversed by:** a ground reading, not agreement. A source-discriminating instrument at a slot, a fingerprint measurement with no near-field reversal, a fixed-offset model that predicts every coast, or an overlap audit showing one evidence pool would each move the verdict. Prestige or consensus is not such an instrument (`05_what_shape_means.md` §6).
