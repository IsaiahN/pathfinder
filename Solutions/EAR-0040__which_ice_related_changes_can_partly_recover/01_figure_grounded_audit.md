# Figure-grounded audit: which ice changes can partly recover

**Mode of this document: `specified` on the shape, `general` on the cross-domain invariants, `grounded` only for named world measurements quoted with provenance.**

Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* (attributed to the local formula, not a figure line.)

**Status of this derivation: a simulated derivation checked for internal consistency against the figures, NOT a ground reading.** *The Recursive Self-Improvement Trap*: LLMs can "quickly simulate an approximate answer/output" but "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document cannot settle the question it reports on. No measurement was taken here.

**Sources:** the 16 canonical figure SVGs as extracted verbatim in `FRAMEWORK/reference/03-FIGURES_TEXT.md`; `FRAMEWORK/reference/FIGURES_README_canonical.md`; `FRAMEWORK/figures/THE_FORMULA.md`; eight world sources listed in `10_source_ledger.csv`, each opened 2026-11-22.

---

## 0. Residual stated in effect terms

The question asks for a classification, not a single quantity. Under the counterfactual "temperature stabilizes after a warm perturbation," each ice-related change is to be sorted by two properties:

- **Lag.** How long the quantity keeps moving after forcing stops changing. Response times run from one winter to several millennia.
- **Crossing sensitivity.** Whether a feedback exists such that returning temperature to its prior value does not return the ice to its prior configuration. Where such a feedback exists, the return path is not the loss path run backwards.

Two outputs follow: a set of changes that can partly recover on human timescales, and a set that takes centuries or longer (or does not return at all under the same boundary conditions).

The shape was written down before the run (see README): three classes, not a continuum, and two quantities per subsystem, not one averaged score. That binding is what makes the shape refusable (Formula step "Direction"; Fig 5 :62-63).

---

## 1. Domain census, done before any figure line was chosen

### 1.1 R by arity, symmetry and scale

- **Arity:** four conditions in contact with the residual, not one. The question is a **union**, not a partition. Each condition has its own response time and its own ground.
- **Symmetry:** in the fast, near-linear case, loss and recovery are approximately symmetric about temperature (sea ice area tracks global mean temperature on both warming and cooling). In the crossing-sensitive case they are asymmetric: regrowth requires a colder forcing than the forcing that caused the loss, or it requires a stock that cannot be rebuilt on the timescale.
- **Scale:** response times span roughly 1 to 10 years (seasonal and sea ice), 15 to 600 years (mountain glaciers, depending on thickness and slope), 1500 to 3000 years (the Greenland Ice Sheet), and effectively unbounded on human timescales for released permafrost carbon. Spatial scale runs from a glacier tongue to a continental ice sheet.

### 1.2 One line per domain (actors / currency / anchor)

| domain | actors | currency | nameable anchor? | question type |
|---|---|---|---|---|
| D1 Fast seasonal ice (sea ice, snow, lake and river ice) | atmosphere, ocean surface, seasonal insolation | surface energy balance and enthalpy | yes: satellite extent and thickness records (NSIDC, PIOMAS, CryoSat-2) | near-linear tracking; no crossing for summer sea ice |
| D2 Grounded ice (mountain glaciers, ice caps) | accumulation, ablation, bed slope, debris cover | mass balance and response time tau = thickness / terminus ablation | yes: stake mass balance and terminus length records | union of fast and slow members; regrowth slower than retreat |
| D3 Marine ice sheets and ice shelves (Greenland, West Antarctica, East Antarctic basins) | grounding line, retrograde bed slope, ice shelf buttressing, ocean heat, bedrock uplift | ice flux across the grounding line, basal melt rate | yes: satellite altimetry, gravimetry, BedMachine bed topography | crossing-sensitive; hysteresis and self-sustained retreat |
| D4 Frozen ground (permafrost) | ground thermal regime, snow insulation, microbes, carbon burial | ground temperature and soil carbon stock | yes: GTN-P boreholes and carbon stock inventories | itself a union: AREA tracks temperature, CARBON does not |

No nameable anchor means it is not a domain yet. All four have one, so all four are domains. D4 is itself a compound: area and carbon share the actors but not the currency, so it must be unbundled before it is searched (Fig 9 :54).

### 1.3 Partition or union

**Union.** The four conditions overlap (all respond to temperature, all involve phase change, ice shelves couple to glaciers and ice sheets, sea ice couples to permafrost temperature) but they do not reduce to one law. A single lever (cooling the atmosphere) clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds (Fig 9 :55, :57). This is the reason a single answer cannot be given.

### 1.4 Dependency order (Fig 3)

Order by dependency, not importance (Fig 3 :20):

1. Anchor first. Do instruments exist that settle whether a subsystem is returning? For D1 to D4, yes. A link with no instrument would be "a link with no instrument is not a link that works. It is a link nobody has looked at" (Fig 3 :27). Not the failure here.
2. Vocabulary second. Terms needed: response time, committed change, crossing threshold, hysteresis, spent versus regenerating stock, unbundling.
3. Objective third. Classify each unbundled condition into the three bound classes.
4. Prediction fourth. State which observations would fire or kill each class assignment.
5. Carry and repeat only after the ground pays.

Note the strain risk: the middle link (having terms for what a situation affords and saying what counts as progress) is where chains usually break (Fig 3 :24-27). Here the middle link is the definition of "recover," which is why the three-class shape was bound before the run.

---

## 2. Figure census (verbatim, cited before concluding)

The following lines were read in `FRAMEWORK/reference/03-FIGURES_TEXT.md` and are quoted verbatim. They were selected only after the census above. A line that fits only with a strain was sent back to the census, not smoothed over.

| figure | verbatim bearing | verdict |
|---|---|---|
| Fig 9 :54-57 | "And when the split lands on a union rather than a partition, unbundle before you search again." / "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." | union reading governs |
| Fig 4 :27-29 | "The transform between scales loses information, and that is the point." / "it means the trip is not reversible, and something carried up and brought back down will not match what was sent." | loss is not the inverse of loss when detail is dropped |
| Fig 12 :121 | "The sign of the loop decides whether it closes, and a chain cannot close by construction." | crossing-sensitive feedbacks decide reversibility |
| Fig 12 :119 | "Spent and regenerating parts behave differently across uses, and nothing records which a term is." | permafrost carbon versus area |
| Fig 11 :61-63 | "The seat's power is asymmetric. Introduction is available; exclusion is not." / "a managed ecosystem is permanent work rather than a solved state" | stabilization is continuing work, not a solved state |
| Fig 2 :29, :35 | "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." / "Alignment is triangulation, not negotiation. A mirror cannot correct you." | ground, not agreement, decides |
| Fig 10 :24 | "the ground does not decay, the channel does" | the observation channel is what can fail |
| Fig 9 :32 | "you get a kind of thing, never the answer itself" | numbers are not derivable from the figures |
| Fig 6 :14 | "the only operator that moves the wall" | numerical timescales must be imported with provenance |
| Fig 9 :60 | "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." | response time is a filter for effort, not a witness for reversibility |
| Fig 3 :19-20 | "Optimising a link that already works cannot rescue one that does not." / "The chain is ordered by dependency, not by importance." | ordering of the census |
| Fig 12 :117, :124 | "Same atoms, different bond, different substance." / "the group says what kind; the qualifier says which member." | supporting isomer reading in file 06 |
| Fig 5 :26 | "does the new term cost less to state than the confusion it removes?" | the three-class shape must pay for itself |

---

## 3. Findings

### F1 - The question is a union of four conditions, not one hard question (general, single-source for the figure)

Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
Fig 9 :57: **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."**

Sea ice, glaciers, marine ice sheets, and permafrost share a forcing but not a response law. Asking "which ice changes recover?" as one question invites a single answer ("ice recovers slowly"), which is true of none of them in the right units. Unbundle first (Fig 9 :54).

**Refuter:** a single first-order law with one time constant and no thresholds predicts the return of all four domains after stabilization, and the ground pays for it. If that holds, the union claim fails.

### F2 - Recovery is not the loss path run backwards when a crossing is involved (specified, triangulated)

Fig 4 :28-29: **"it means the trip is not reversible, and something carried up and brought back down will not match what was sent."**
Fig 12 :121: **"The sign of the loop decides whether it closes, and a chain cannot close by construction."**
Fig 11 :61: **"The seat's power is asymmetric. Introduction is available; exclusion is not."**

Three figures with low overlap (scale transform, bond sign, habitat power) converge on the same structural point: once detail or topology is lost, or a positive loop closes, returning the forcing does not restore the prior configuration. This is why the third class in the bound shape exists. The physical content is imported from world measurement; the figures give the shape only.

**Refuter:** a measured case in D3 where, after a crossing, returning temperature to the prior value restores the prior grounding-line position at the same rate it retreated, with no colder forcing required. That would break the asymmetry and remove the third class.

### F3 - Spent and regenerating stocks must be kept apart (specified, figure single-source, world-triangulated)

Fig 12 :119: **"Spent and regenerating parts behave differently across uses, and nothing records which a term is."**

D4 is the clean case. Permafrost AREA is a regenerating part: it follows temperature down and back up (Cui et al. 2025). Permafrost CARBON is a spent part: once decomposed and emitted, the burial mechanism that made it is slow or stopped (Schaefer et al. 2014). One word, "permafrost," covers two substances with opposite reversal behaviour. This is Fig 12 :117 applied to a physical compound: **"Same atoms, different bond, different substance."**

**Refuter:** a measured decadal re-burial and refreezing of released permafrost carbon under stabilized temperature. If carbon returns on the same timescale as area, the spent/regenerating distinction fails for D4.

### F4 - The anchor is a measurement, never agreement (general, triangulated)

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**
Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**
Fig 10 :24: **"the ground does not decay, the channel does"**

For this question the anchors are satellite extent and thickness, mass balance and terminus records, altimetry and gravimetry, and borehole temperatures. Two cryosphere groups agreeing about "reversibility" while reading the same IPCC chapter is one evidence pool talking (Fig 2 :40), not two witnesses. Agreement from a shared pool is one witness.

**Refuter:** identify a case where expert agreement, with no measurement behind it, correctly predicted a rebound or regrowth that later measurements falsified. That would make agreement an anchor, contrary to the figure.

### F5 - Stabilization is permanent work, not a solved state (general, single-source for the figure)

Fig 11 :63: **"a managed ecosystem is permanent work rather than a solved state"**

Stabilizing temperature stops the growth of the perturbation; it does not stop the ice response. Glaciers keep losing mass for decades under stable temperature, ice sheets for centuries, and permafrost carbon continues to be released (world sources below). The classification therefore has a committed component that is independent of whether temperature is stabilized or slightly reduced.

**Refuter:** a domain where stabilized temperature immediately freezes the ice state at its current extent with no further mass change. That would remove the committed class.

### F6 - The figures do not give the numbers (general, honest gap for quantities)

Fig 9 :32: **"you get a kind of thing, never the answer itself"**
Fig 6 :14: **"the only operator that moves the wall"**

The figures return a shape: union, asymmetry, spent versus regenerating, committed work. They do not return "2 years" or "1500 to 3000 years." Those numbers are imported from the world literature with a source gate and a shadow test, and are labelled `grounded` in the sources that measured them. In our synthesis they remain `specified`, because this derivation did not measure them. The figures are metalaws about frames and closures; using them here is a structural analogue, not a physical derivation. That limit is stated rather than hidden.

**Refuter:** derive a numerical relaxation time for a named glacier from the six-term substrate alone. If that were possible, the shape-not-a-number limit would fail.

### F7 - Response time is a filter for the budget, never a witness for the verdict (general)

Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

A short response time tells an outreach effort where to look first; it does not tell you whether a recovery is real. Cost and reversibility gate priority, never truth. Seat and lead selection in the outreach files obey this.

**Refuter:** a case where ranking subsystems by response time produced a correct classification without any ground measurement. That would let a filter hand over a verdict.

---

## 4. Pre-registered refuter (written before the conclusion)

Required before outreach. The shape claim is refuted if any of the following fires:

1. **Union fails.** One first-order law with one time constant and no crossing term predicts the post-stabilization trajectory of all four domains, and a ground measurement pays for it.
2. **Asymmetry fails.** A crossing-sensitive domain retraces its loss path under the same boundary conditions after stabilization, with no colder forcing and no slower return.
3. **Spent/regenerating fails.** Released permafrost carbon is re-buried and refrozen on the same decadal timescale as permafrost area under stabilized temperature.
4. **Committed work fails.** Stabilized temperature immediately freezes at least one slow domain at its current extent with no further mass change.
5. **Ground fails.** A named anchor (satellite extent, mass balance, altimetry, borehole temperature) is shown to move when the frames push on it, so it is not an anchor.

If any fires, the shape is withdrawn. Until one is run, no part of this may be labelled `grounded` by this derivation.

---

## 5. Recommendation

1. Send the union, asymmetry and spent/regenerating shape, not a single verdict about "ice." Unbundle before searching (F1, F3).
2. Keep the three classes separate and never average them into one recovery score (F2, F5).
3. Import the physical timescales only with provenance, and label them as world measurements (F6).
4. Ask the checker which observation would fire the refuter before offering any framework material (F4, Fig 10 :52 "Bring a characterised residual, never the source.").
5. Use response time to decide where to spend attention, never to decide what is true (F7).

---

## 6. Canonical usage check

Two local sources govern how the figures may be used, read after sections 0 to 5:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo"; "the quotes are the authority, not this summary"; a reading that makes figures contradict one another has misidentified its domain; the framework returns "a shape, not a name" and stops at the limit of what instruments distinguish, recording the lineage.
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule; "A gate is not the ground"; "IT IS THE REACH THAT DRIVES THE LOOP, NOT THE LIBRARY."

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| First pass treated "ice" as one domain with one recovery time | **Retracted.** Re-census by arity and crossing sensitivity gives a union of four conditions. Fig 9 :54 governs. |
| First pass applied Fig 4 :28-29 as a direct physical law about ice | **Retracted.** The figure governs a lossy transform between scales of a frame. Its bearing here is structural: the return path is not the inverse of the loss path when detail or topology is dropped. The physical timescales come only from world measurement. Marked `specified`, not `grounded`. |
| First pass merged permafrost area and permafrost carbon into one D4 verdict | **Retracted.** They share actors but not currency and have opposite reversal behaviour. Unbundled under Fig 9 :54 and Fig 12 :119. |
| Fig 4 lossy transform versus Fig 12 cycle sign read as a strain | **Not strained after re-census.** Fig 4 governs information lost across a scale transform; Fig 12 :121 governs the sign of a feedback loop. Different objects, both bear on asymmetry. Recorded as triangulation, not a contradiction. |
| "Stabilization is a solved state" | **Refused.** Fig 11 :63 and the committed-glacier and permafrost-carbon measurements agree. |
| Numbers from world sources | **Confirmed as imports, not derivations.** Fig 9 :32 plus Fig 6 :14. Each carries a source gate and a shadow test in `10_source_ledger.csv`. |
| Agreement among cryosphere sources | **Discounted.** The same assessment pools (IPCC, Global Tipping Points, shared citations) recur across sources. Agreement is one witness, not two (Fig 2 :40). |

### Round trip, qualitative

The condensation carried into the outreach files is: union of four conditions; three outcome classes; asymmetry where a crossing or a spent stock exists; numbers imported. Bringing it back down to the concrete question drops (a) which specific crossing has been crossed in a given basin, (b) whether a given glacier can actually regrow from its bed geometry, and (c) the exact rate of carbon re-burial. Those drops are the round-trip gap R_T, enumerated in `11_audit.md`. They are not errors to erase.

### Updated verdict

The shape survives: an ice question is a union; fast thin ice can partly recover; grounded ice is committed over decades to centuries and regrows more slowly than it retreats; marine ice sheets and released permafrost carbon are effectively irreversible on human timescales once the relevant crossing or spending has occurred. The specific numbers are world measurements, not figure outputs. Strains after re-census: **none hidden**, one limit stated (the figures give shape, not numbers).
