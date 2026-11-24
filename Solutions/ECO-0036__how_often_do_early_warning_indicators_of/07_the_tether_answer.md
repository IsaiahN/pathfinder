# The Tether's answer on early-warning failure rates

**Mode: `general` on the structural constraints, `specified` on the predictions about which failure modes must be separated, `gap` on the requested frequency. Not `grounded`.** Simulated derivation checked against the figures (`05_what_shape_means.md` section 6), not a ground reading. No measurement was taken.

## 1. The residual it answers

The question asks how often early-warning indicators of ecosystem collapse give false alarms or fail to appear. Held frame: the EWS machinery (rising variance, lag-1 autocorrelation, skewness, spatial clustering, a threshold convention). Ground: whether the ecosystem actually crossed into a contrasting state, settled independently of the indicator. Residual `R`: prediction minus observation, indexed by system, indicator, lead-time window and convention. Symbols table: `R` is "always a slice: what cannot be perceived yet is residual and simply cannot be read." The question is a union compound with an averaging layer (Fig 9 :5 "are not one hard question but several well-formed ones. Split it rather than search."), so the answer the figures can give is a shape, not a number: Fig 9 :32 "you get a kind of thing, never the answer itself."

## 2. The shape

1. **Split the "or" into two rates with different denominators.** A false alarm is an alarm not followed by collapse, counted against systems that did not collapse. A missed warning is a collapse not preceded by an alarm, counted against systems that did. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." They are isomers over a shared atom inventory, not severities of one condition (Fig 12 :117, and `06_isomers_and_order.md`). Their costs are not symmetric: detection theory's "Bias is independent of sensitivity" is the world-side statement of the same structure.

2. **A rate only means something with four bindings.** Per-slot denominator (which ecosystem, which indicator, which lead time), ground-defined outcome (collapse settled independently of the indicator), declared threshold convention (what counts as an alarm), and study-selection design (were systems chosen because they collapsed). Without these, `f = (false alarms + misses) / all outcomes` is a preference for an answer shape, not a term the loop can test. The Formula's Direction step requires making the sought-for shape an ordinary term so it can accrue a residual like anything else.

3. **"Fail to appear" must be split three ways before it is counted.** Fig 6 :27: "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same." Fig 10 :24: "the ground does not decay, the channel does"; Fig 10 :28: "you have lost touch." A missing warning can be genuine absence, a real signal below instrument resolution, or a decayed monitoring channel (stale percepts, dropped transients, saturated metrics, pooled readings, Fig 10 :25-26). From inside the indicator frame these are one observation: no alarm. Counting them as one attributes a channel defect to the ecosystem. Fig 8 :39: "So a search that finds nothing is never a proof of absence."

4. **A false alarm may be a correct reading of a different residual.** Rising variance can come from critical slowing down near a bifurcation or from atmospheric warming on a low-accumulation ice sheet. Robel, Holly and Ambelorun (2026) find variance rising in more than 98 percent of simulations far from destabilization and conclude the statistics are "not reliable EWS of ice sheet destabilization." Fig 5 :13: "mis-attached: refit what you have, do not invent." Fig 11 :48: "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual." Fig 11 :52-53: "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out." The alarm can be right about a signal and wrong about the source.

5. **The collapse anchor must be fixed before selection and must not update.** Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :33: "The anchor must not update." Fig 10 :47: "a convention that decides an outcome has stopped being one." Fig 1 :27: "A frame cannot score itself with a quantity it also produces." Boettiger and Hastings (2012) show that selecting systems known to have transitioned produces "an elevated rate of false-positives in common warning signal statistics," and that "experimental studies with replicates avoid this pitfall entirely." A threshold chosen after seeing the collapse manufactures the alarm rate it then reports.

6. **Report the round-trip gap, or say it was not measured.** The statistic is local; collapse is a system statement. Fig 4 :27: "The transform between scales loses information, and that is the point." Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." Fig 4 :31: "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold." No source read here supplies that measurement.

7. **Publish per-slot rates, not a pooled mean.** Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :28: "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look." Hirsch and Koren (2026) report that treating an ecoregion as homogeneous masks transitions that spatially coherent subregions reveal, a world-side instance at a different scale.

## 3. What it explicitly does not say

- Not that early-warning indicators never work. Scheffer et al. (2009) say the signals "may indicate for a wide class of systems if a critical threshold is approaching." This answer does not overwrite that.
- Not that any named statistic is bad, and not that variance or lag-1 autocorrelation should be abandoned. Robel et al. (2026) decline to transfer their null result beyond a Greenland ice-sheet context.
- Not a pooled frequency, not an average of the two failure modes, and not a correction to a published rate. No number is reported.
- Not that the framework has settled ecology. The figures govern the shape of the answer, not the frequency.
- Not `grounded`. This is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.
- Not that the three-way split of a miss is permanent. Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something."

## 4. What would settle it - the ground, and the written refuters

A per-slot ground reading, not a further argument. The refuters were written before the conclusion (`01` section 4; `06` FALSIFIER):

1. A single pooled frequency shown sufficient to decide where an indicator fails, invariant to per-system, per-indicator, per-lead-time and per-convention decomposition (breaks item 1 and item 7, Fig 1 :19 and :22, Fig 9 :54).
2. False alarms and misses shown to share one mechanism, one denominator and one cost structure (breaks item 1, Fig 9 :57-58, Fig 12 :117).
3. A source-discriminating instrument showing a named "failure to appear" was genuine absence at every resolvable scale, not depth and not channel decay (breaks item 3, Fig 6 :27, Fig 8 :39, Fig 10 :24). The needed instrument is one that separates a bifurcation-driven rise in variance from a forcing-driven one, in the way a spectrometer separates metamers; see *The Hard Problem is About Source*: "An instrument that can't distinguish these cases demonstrates its own inadequacy, it cannot claim anything substantial about what is being measured or what causes it."
4. A collapse definition and study-selection rule under which the reported rate does not move (breaks item 5, Fig 10 :47, Fig 2 :29).
5. A measured round trip whose gap is zero at the resolution that matters (breaks item 6, Fig 4 :27 and :30).
6. A figure line that determines a numerical false-alarm or miss rate without a ground reading. None was found after the re-census in `01` section 7. Fig 13 :134: "Unreachable is a verdict here, not a silence."

If any fires, the shape claim is withdrawn. Until one is run, no part of this is `grounded`.

## 5. The honest stop

**Unreached, not unreachable, and it is a gap, not a silence.** Underivable from the figures is not the same as unreachable by an instrument. Fig 8 :40-43: "Underivable: go outside. Unreachable-at-budget: the term is already in the closure and was not found, so the remedy is more search, not another atom." The rate is ground-only, not forbidden. What the figures return is the list of constraints an honest estimate must satisfy and the list of things that would have to be true for the estimate to differ. Fig 13 :140: "Which is what a hard decision needs and rarely gets: not only what was concluded, but what could have been concluded, and what would have had to be true for the answer to differ." The stop is recorded with its lineage, because "Indiscernibility is not identity" (canonical figures README).

## 6. One-paragraph version for outreach

> The Tether does not report a false-alarm rate or a miss rate for early-warning indicators, and it does not claim the question is unanswerable. It says that "false alarm or failure to appear" is a union of two conditions with different denominators, so one pooled number answers neither; that a rate has meaning only with a per-slot denominator, an outcome settled independently of the indicator, a declared alarm threshold and a stated study-selection design; that "fail to appear" must be split into genuine absence, a signal below instrument resolution and a decayed monitoring channel, which look identical from inside the indicator frame; and that a false alarm can be a correct reading of a different residual three steps out in the habitat. The figures return these constraints, not the frequency. The framework stops there and records the stop with its refuters written in advance. The number is ground-only: a pre-registered, per-slot reading with a fixed anchor, a maintained channel and a measured round-trip gap would settle it. This is a simulated derivation checked for internal consistency against the figures, not a ground reading, so it cannot settle the frequency it reports on.
