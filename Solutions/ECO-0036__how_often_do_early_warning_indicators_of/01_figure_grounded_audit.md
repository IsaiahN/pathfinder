# Figure-grounded audit: how often do early-warning indicators fail?

**Mode of this document: `general` on the structural findings, `specified` on the predictions about failure modes, `gap` on the numeric frequency. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap* (essay, opened 2026-11-23): "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the empirical question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Figure quotes: `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`. Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. World sources were opened over HTTP on 2026-11-23; see `10_source_ledger.csv`.

---

## 0. The residual, in effect terms

The question is about a predictor and its failures. We hold a frame, the early-warning-signal (EWS) machinery: rising variance, lag-1 autocorrelation, skewness, detrended fluctuation analysis, spatial clustering. From a time series it predicts that a regime shift is approaching. The ground is whether the ecosystem actually crossed into a contrasting state. The residual `R` is the gap between prediction and observation, indexed by system, indicator, lead time and threshold convention (Symbols table: `R` is "always a slice: what cannot be perceived yet is residual and simply cannot be read").

Two failure modes are named in the question:

- **False alarm.** The indicator fires, the ground does not deliver a collapse. The residual fires on the prediction side.
- **Failure to appear.** The ground delivers a collapse, no alarm was issued (or no alarm was resolvable at any available resolution). The residual arrives on the observation side with nothing in the frame to catch it.

**Direction step, written before the run.** Bind the sought-for answer as an ordinary term so it can accrue a residual: `f = (false alarms + misses) / (all indicator outcomes)`, with the denominator restricted to a named system class, a named indicator, a named lead-time window and a named threshold convention, and with the outcome settled independently of the indicator. Without those four bindings, `f` is a preference for a kind of answer, not a term the loop can test. THE_FORMULA.md "Direction": "make the sought-for shape an ORDINARY TERM - write down what an answer would look like, bind it, and let it accrue a residual like anything else." The figures return a shape, not a number: Fig 9 :32 "you get a kind of thing, never the answer itself."

---

## 1. Domain census (before any figure line was chosen)

**R by arity, symmetry and scale.**

- *Arity:* at least two conditions (false alarm, missed warning) plus a third operation, pooling across systems. The question is a **union compound with an averaging layer**, not one hard question. Fig 9 :5 "are not one hard question but several well-formed ones. Split it rather than search."
- *Symmetry:* a false alarm and a miss are **not symmetric**. They have different mechanisms, different base rates and different costs. Fig 12 defines comparison `⋛` as ordered; the Operators table calls it "a threshold relation between two quantities" with the test "is it about which is larger, rather than both being present?". The two failures cannot be added into one symmetric count without losing the ordering the question itself imposes.
- *Scale:* the indicator is a local measurement on a time series; collapse is a system-level transition. A lossy transform connects them. Fig 4 :27 "The transform between scales loses information, and that is the point." The round-trip gap `R_T` is owed.

**One line per domain: actors / currency / anchor.**

| domain | actors | currency | anchor | partition or union |
|---|---|---|---|---|
| D1 Indicator frame | variance, lag-1 AC, skewness, kNDVI clusters, the analyst choosing window and detrending | signal strength and significance | the time series and the chosen state variable, an instrument not a ground | one frame; its reading does not settle the transition |
| D2 Ecological ground | the ecosystem, the stressor, the bifurcation, the observed regime shift | the transition itself | the observed transition, legitimate only if fixed independently of the indicator | the thing that settles the question |
| D3 Monitoring channel | sensors, sampling interval, observers, the maintainers of the percept | contact with the ground | the ground stays, the channel decays (Fig 10 :24) | a separate office, not a frame to be corrected by agreement |
| D4 Study-selection and aggregation | studies, databases of transitions, meta-analyses, the "how often" statistic | pooled counts and rates | should be D2, often becomes the selection itself | union of D1 and D3 failure conditions, then an illegitimate average |

**No nameable anchor means it is not a domain yet.** D1 has no ground of its own; it ranges against D2. D4 currently borrows an anchor from D2 but updates it when studies are selected for having collapsed, which is a collapsed anchor (Fig 2 collapse 1 and 2).

**Partition or union.** Union across failure modes (Fig 9 :54). The intersection, a system that both raises a false alarm early and misses a later transition, is a compound with its own loop, not a harder instance of either. The averaging layer across systems is a separate error, since it discards the per-slot signal (Fig 1 :19, :22).

**Dependency order (Fig 3).** Maintain channel contact (D3) before reading the indicator (D1); describe the residual per slot before aggregating (Fig 1); unbundle the union before counting (Fig 9 :54); settle the ground independently before computing a rate (formula step 5); refuse a wrong term before minting a new one (formula step 2). Optimising a threshold before any of these arrives is effort above the break (Fig 3 :19: "Optimising a link that already works cannot rescue one that does not.").

---

## 2. Figure census

| figure | bearing on this residual | verdict |
|---|---|---|
| 1 The Agent | residual indexed per slot, not aggregated; frame cannot self-score | governs D4, general |
| 2 The Ground | anchor must not update; independence vs shared pool | governs D2 and D4, general |
| 3 Dependency Chain | a reading below the break is a reading of nothing | governs the order, general |
| 4 The Membrane | lossy cross-scale transform, measured round trip | governs indicator to collapse mapping, single-source |
| 5 Mint Pipeline | mis-attached gap, guards as a product | governs false-alarm reinterpretation, general |
| 6 Closure / Reachability | depth vs genuine absence look identical; instruments improved from worse ones | governs "fail to appear", specified |
| 7 Room Chain | handed-along agreement compounds, evidence does not | governs literature pooling, general |
| 8 Union Surplus | no search finds nothing as proof of absence | governs missed warnings, specified |
| 9 Leave / Arrive | union split, describe before looking, shape not a number | governs D4 and the verdict type, general |
| 10 Ground Maintainer | ground does not decay, channel does; convention that decides an outcome | governs D3 and threshold conventions, specified |
| 11 The Habitat | habitat enumerated, contact cascades three steps out | governs indicator variable choice, specified |
| 12 The Bond | ordered comparison; isomer and functional group | governs non-symmetry of failure modes, general |
| 13 Minimum Viable Set | residual compounding, chaos and noise; unreachable as verdict | governs the honest stop, general |
| Operators / Symbols | `⋛` ordered threshold; `R` always a slice | governs arithmetic of the rate, general |

Strained readings are named in §7, not smoothed over.

---

## 3. Findings

### F1 - "How often" is an aggregation that discards the only signal (decisive against the question as phrased)

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**
Fig 1 :28: **"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."**

A single frequency over all studies, ecosystems and indicators is exactly the quantity these lines disqualify for locating where an EWS fails. The world literature confirms the mechanism at the measurement level: Hirsch and Koren (2026) report that treating an ecoregion as homogeneous masks transitions that spatially coherent subregions reveal. Their paper's own phrase is "structural ecosystem transitions that would be masked by treating ecoregions as homogeneous units or by analyzing individual pixels independently."

**Mode:** `general` (structural), with `specified` prediction that any single pooled rate will be unstable under re-slotting.
**Refuter:** show that a single pooled rate is sufficient to decide where an indicator fails, i.e. it is invariant to per-system and per-indicator decomposition. If that holds, Fig 1 :19 and :22 do not govern this quantity and the census was wrong.
**Status:** triangulated (Fig 1 per-slot residual and Fig 9 union split are low-overlap figure lines), plus a world source at a different scale.

### F2 - False alarms and failures to appear are two conditions, not one rate

Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**
Fig 9 :5: **"are not one hard question but several well-formed ones. Split it rather than search."**
Fig 9 :58: **"It stops being a mixture and becomes a specific compound."**

The question joins two failure modes with "or". They have different denominators: a false alarm is conditional on systems that did not collapse, a missed warning on systems that did. Pooling them is the undirected union failure Fig 8 names, where "closures differ, so a surplus exists" but "nothing was aimed; the union is mute" (Fig 8 :19, :21). Detection theory, a low-overlap field, makes the same structural point in its own vocabulary: "Bias is independent of sensitivity. Bias can be desirable if false alarms and misses lead to different costs."

**Mode:** `general`.
**Refuter:** demonstrate one mechanism and one denominator for both failure modes, with the same cost structure and the same base rate. Then the union reading fails and a single rate is legitimate.
**Status:** triangulated (Fig 9 union/partition rule, Fig 8 undirected union, plus signal detection theory).

### F3 - "Fail to appear" conflates three states that look identical from inside the frame

Fig 6 :27: **"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."**
Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**
Fig 10 :24: **"the ground does not decay, the channel does"**
Fig 10 :28: **"you have lost touch"**

A warning that did not appear can be: (a) genuine absence, no signal existed at any resolvable scale; (b) depth, a signal existed but the instrument could not resolve it; (c) channel failure, the ground kept the transition while the monitoring percept decayed, was "stale percepts, dropped transients," or "saturated metrics, pooled readings" (Fig 10 :25, :26). From inside the indicator frame these are one observation: no alarm. Counting all three as "failure to appear" attributes a channel defect to the ecosystem or to the theory.

Robel, Holly and Ambelorun (2026) give a concrete case from a different Earth system: "Autocorrelation of surface mass balance exhibits spurious multidecadal trends under a wide range of climatic conditions due to the slow response of ice sheets to climatic fluctuations, making this a poor early-warning signal of destabilization." Their simulations produced positive variance trends in more than 98% of runs even far from the destabilization point, and positive autocorrelation trends in about half, which is a coin flip dressed as a warning.

**Mode:** `specified` (a falsifiable three-way decomposition).
**Refuter:** a source-discriminating instrument that shows a given "failure to appear" was genuine absence at every resolvable scale, not depth and not channel decay. Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."
**Status:** triangulated (Fig 6, Fig 8, Fig 10, three low-overlap lines).

### F4 - A false alarm may be a correct detection of a different residual

Fig 5 :13: **"mis-attached: refit what you have, do not invent"**
Fig 11 :48: **"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."**
Fig 11 :52: **"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."**

Rising variance is a reading, not a source. *The Hard Problem is About Source* (essay, opened 2026-11-23): "An instrument that can't distinguish these cases demonstrates its own inadequacy, it cannot claim anything substantial about what is being measured or what causes it." Hirsch and Koren (2026) state the ecological version: "Temporal autocorrelation is interpreted as a resilience indicator, yet it can also be affected by external forcing and stochastic variability, and therefore does not uniquely indicate proximity to a tipping point." Boettiger and Hastings (2012) show that selecting systems because they underwent a transition produces "an elevated rate of false-positives in common warning signal statistics." The alarm may be correctly registering a real but different disturbance three steps out in the habitat.

**Mode:** `specified`.
**Refuter:** show, with an instrument that discriminates sources, that an alarm which was not followed by collapse registered nothing at all in the habitat. Then the mis-attached reading fails.
**Status:** triangulated (Fig 5 mis-attachment, Fig 11 habitat cascades), with world corroboration from two fields and one framework essay declared as high-overlap.

### F5 - The anchor only settles the question if it does not move with the selection

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**
Fig 2 :33: **"The anchor must not update."**
Fig 10 :47: **"a convention that decides an outcome has stopped being one"**
Fig 1 :27: **"A frame cannot score itself with a quantity it also produces."**

If "collapse" is defined after the trajectory is seen, or if studies are included because a collapse occurred, the ground has become another frame (Fig 2 panel 1, coherent drift). The base-rate fallacy literature, a low-overlap field, gives the arithmetic: "The probability of a positive test result is determined not only by the accuracy of the test but also by the characteristics of the sampled population." Boettiger and Hastings (2012) name the ecological instance the prosecutor's fallacy and note that "experimental studies with replicates avoid this pitfall entirely." Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

**Mode:** `general`.
**Refuter:** exhibit a collapse definition and a study-selection rule that are invariant to the indicator's trajectory and to the analyst's expectations, and show the reported rate does not change under their variation. Then the anchor concern is answered.
**Status:** triangulated (Fig 2 anchor rule, Fig 10 convention rule, Fig 1 self-scoring).

### F6 - The cross-scale round trip has a gap that must be measured, not assumed

Fig 4 :27: **"The transform between scales loses information, and that is the point."**
Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

The indicator is computed on a local series; "collapse" is a statement about a system state. Carrying a local alarm up to a system verdict and back down to a management decision drops information. The Symbols table defines `R_T = gap(x, (T_E ∘ T_A)(x))` as "the gap between what was sent up and what came back down." No source read here supplies that measurement.

**Mode:** `general` with an owed `R_T` measurement.
**Refuter:** a measured round trip whose gap is zero at the resolution that matters. Then the lossy-transform claim does not bite this question.
**Status:** single-source (Fig 4), with the formula's `R_T` definition as same-framework corroboration, not an independent witness.

### F7 - A count of failures is not the same as the frequency of failures

Fig 9 :32: **"you get a kind of thing, never the answer itself."**
Fig 13 :134: **"Unreachable is a verdict here, not a silence"**
Fig 13 :140: **"Which is what a hard decision needs and rarely gets: not only what was concluded, but what could have been concluded, and what would have had to be true for the answer to differ."**

Nothing in the figure set yields a base rate of ecosystem collapse, a false-alarm fraction or a miss fraction. Those are ground readings. What the figures yield is the shape any honest estimate must have, and the list of things that would have to be true for the estimate to differ. Fig 8 :53: "Residual first, frame second." The three world sources most directly about frequency all decline to supply one: Scheffer et al. (2009) say the signals "may indicate for a wide class of systems if a critical threshold is approaching"; Hirsch and Koren (2026) explicitly say "our study does not attempt to directly detect ecosystem collapse itself"; Robel et al. (2026) conclude the statistics "are not reliable EWS of ice sheet destabilization" without giving a transferable rate.

**Mode:** `general` on the rule, `gap` on the number.
**Refuter:** a figure line that determines a numerical false-alarm or miss rate. None was found after the re-census in §7. "Unreachable is a verdict, not a silence."
**Status:** triangulated for the rule (Fig 9, Fig 13), `gap` for the number.

### F8 - What actually survives

| claim | mode | status | figure |
|---|---|---|---|
| A single pooled frequency discards the signal that says where failure occurs | `general` | triangulated | Fig 1 :19, :22; Fig 9 :54 |
| False alarms and misses must be counted against separate denominators | `general` | triangulated | Fig 9 :54, :58; Fig 8 :19, :21 |
| "Failure to appear" must be split into absence, depth and channel decay | `specified` | triangulated | Fig 6 :27; Fig 8 :39; Fig 10 :24, :28 |
| A false alarm can be a correct reading of a different residual | `specified` | triangulated | Fig 5 :13; Fig 11 :48, :52 |
| The collapse anchor must be fixed before selection and must not update | `general` | triangulated | Fig 2 :29, :33; Fig 10 :47 |
| The local-to-system transform carries a measurable round-trip gap | `general` | single-source, owed measurement | Fig 4 :27, :30 |
| A single honest "how often" number | `gap` | no figure line governs it | Fig 9 :32; Fig 13 :134 |

---

## 4. Pre-registered refuter

Written before the conclusion, per the seat map: "a falsifier written before the run is a design instrument, not only an honesty device." The shape claim is refuted if any of the following holds.

1. A single pooled frequency is shown sufficient to decide where an EWS fails, invariant to per-system, per-indicator and per-lead-time decomposition (breaks F1, Fig 1 :19 and :22).
2. False alarms and failures to appear are shown to share one mechanism, one denominator and one cost structure (breaks F2, Fig 9 :54).
3. A source-discriminating instrument demonstrates that a named "failure to appear" was genuine absence at every resolvable scale, not depth and not channel decay (breaks F3, Fig 6 :27, Fig 8 :39, Fig 10 :24).
4. A threshold convention and study-selection rule are exhibited under which the reported rate does not move (breaks F5, Fig 10 :47, Fig 2 :29).
5. A figure line is produced that determines a numerical false-alarm or miss rate without a ground reading (breaks F7).

If any fires, the shape claim is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Do not answer with one number. Split the question into (a) false-alarm rate conditional on selection design and threshold convention, and (b) miss rate decomposed into absence, depth and channel decay.
2. Publish per-slot rates with denominators, not a pooled mean. Fig 1 :28: "A system that averages across objects has thrown away the only signal that says where to look."
3. Register the collapse definition, the state variable, the lead-time window and the alarm threshold before looking at trajectories. Fig 9 :27 to :28: describe the residual before choosing the frame.
4. Keep the monitoring channel as its own office with its own record. Fig 10 :29: "keep the anchor reachable."
5. Report the round-trip gap `R_T` from local alarm to system verdict, or say it was not measured.
6. Lead outreach with the shape claim and the pre-registered refuter. Fig 10 :52: "Bring a characterised residual, never the source."

---

## 6. Canonical usage check and retraction / confirmation log

Two canonical sources were read after the first five sections and govern how figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw." Limit: the framework gives "what a missing thing would have to look like (a shape, not a name)" and "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: "the figures are the ground for design questions; Isaiah is the anchor for what the figures genuinely cannot settle." A seat must not ask the anchor to rule on what the figures decide. "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." The numeric frequency is a ground question, not a design question, so it is not escalated to an anchor ruling here; it is recorded as `gap`.

| earlier reading | status after the canonical check |
|---|---|
| F1 called "decisive against the question as phrased" | **Confirmed, but narrowed.** It is decisive against a single pooled rate, not against collecting rates. Fig 1 :19 governs where the residual lives, not whether a rate may be reported per slot. |
| F3 originally read as "instruments are too weak" | **Corrected.** The three-way split (absence / depth / channel decay) is required by Fig 6 :27 and Fig 10 :24. It is not a claim that instruments are permanently inadequate; Fig 6 :32 says instruments are improved from worse instruments already returning something. |
| F4 originally called "false alarms are all selection bias" | **Retracted in that strong form.** Boettiger and Hastings establish selection bias as one mechanism; Fig 5 :13 and Fig 11 :52 establish mis-attachment to a different residual as another. Both are kept. |
| F6 treated the round trip as a defect to be fixed | **Corrected.** Fig 4 :31 says the gap "is not an error to eliminate. It is the measurement of what the coarser description cannot hold." The owed item is a measurement, not a repair. |
| F7 "gap" initially written as "unreachable in principle" | **Retracted and narrowed.** Underivable from the figures is not the same as unreachable by an instrument. Fig 8 :40 to :43: "Underivable: go outside. Unreachable-at-budget: the term is already in the closure and was not found." The rate is ground-only, not forbidden. |
| Shape-not-a-name applied to the failure-rate number | **Narrowed.** The phrase governs a missing primitive. Here it supports the claim that the figures return the constraints on an answer rather than the answer; it does not ban empirical counting. |
| Apparent strain Fig 6 :27 versus Fig 10 :24 | **Not strained after re-census.** Fig 6 governs what a frame cannot distinguish from inside; Fig 10 governs which office maintains contact. Different objects, different questions. |

---

## 7. Strains, re-census and verdict

**Strain 1, named and resolved.** Fig 8 :39 says a search that finds nothing is never proof of absence. Fig 6 :27 says absence and depth look the same from inside. Read together they could seem to forbid ever calling a miss genuine absence. Re-census: Fig 8 rules on what a failed search licenses; Fig 6 rules on what the frame can discriminate. They constrain different moves. No correction owed.

**Strain 2, still live.** Fig 10 :24 says the ground does not decay while the channel does. A collapse is an observed transition, but the observation of it is also a channel product. Whether a recorded "collapse" is ground or a stale percept depends on an instrument that discriminates source (the Source essay's point). This is recorded as a strain, not hidden: the anchor is legitimate only when the question is constitutively about it (Fig 2 :36), and here it is partly about the measurement.

**Strain 3, named.** Fig 12 treats comparison as ordered; detection theory's "bias is independent of sensitivity" gives an independent reason the two failure modes do not add symmetrically. No strain between them, but the arithmetic of a combined rate remains undefined until the two are separated.

**After re-census:** no hidden strain. One live strain (anchor versus observation of anchor), recorded above.

**Verdict.** The figures govern the shape of any answer to ECO-0036 and they govern it at `general` and `specified` mode. They do not govern a frequency. The requested number is a `gap` at this budget and by this method, reachable only by a pre-registered, per-slot ground reading with a fixed anchor, a stated convention and a maintained channel. "Unreachable is a verdict here, not a silence." This is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.
