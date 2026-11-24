# Figure-grounded audit: how often do early warning signals falsely signal a transition?

**Mode of this document: `gap` on the numeric frequency, `specified` on the shape, `general` on the structural constraint. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status: SIMULATED DERIVATION, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No measurement was taken. See `05_what_shape_means.md` §6.

**Sources.** Figure text verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Canonical usage from `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. Loop from `FRAMEWORK/figures/THE_FORMULA.md`. Checking rules from `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`. World sources listed in `10_source_ledger.csv`, all opened 2026-11-22.

---

## 0. The residual, stated in effect terms

What is being asked is a frequency: the fraction of early-warning alarms that are false. State it as a residual between a prediction and an observation per slot:

> For system s, at decision time t, the detector predicts "a transition is approaching" when variance rises or recovery slows. The observation o' is whether a transition actually followed within the decision window. R_s = |Gamma(b,a) - o'|. A false signal is R_s > 0 with the detector having fired.

Three consequences follow immediately and they govern the whole audit.

1. The residual is **per slot s** (system, indicator, threshold, decision window), not a global scalar. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Symbols table :43: *"R is measured per slot, never as a single global number."*
2. Whether R_s is zero is settled only by o', the realized transition. Fig 1 :23: *"The ground enters as the only metric."* Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* A measurement, an experiment, a counter.
3. The requested "how often" is an aggregate over slots, and the framework explicitly warns that the aggregate destroys the signal. Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

So the honest statement of the residual is: the question asks for a number the figures do not contain, and the form of the number is itself the thing in dispute. We bind the sought-for shape as an ordinary term now, before searching (Formula "Direction"): **a false-signal rate is a curve over slots, with a threshold and a base rate, settled by observation.** That shape then accrues a residual like anything else and can be refused.

---

## 1. Domain census (before choosing any figure line)

### R by arity, symmetry and scale

- **Arity.** Three-place: indicator state, threshold decision, realized transition. A false alarm is the conjunction "indicator fired AND no transition followed." Because it names an absence, it requires the negation operator ¬ (Operators table :53-57: *"this does not hold"*, *"a refutation is a negation, which is why a vocabulary without it can only accumulate"*). A library that only records alarms cannot record that an alarm was wrong.
- **Symmetry.** The relation is ordered in time. The indicator precedes the transition, if one follows. This is the sequence bond → (Fig 12 :30: *"A then B; B needs A to have happened"*). The threshold itself is a comparison ⋛ (Operators table :47: *"a threshold relation between two quantities"*). Both bonds are ordered, so swapping the operands is not allowed: "variance rose, then no transition" is not the same claim as "no transition, then variance rose."
- **Scale.** Two scales. Inside one time series, the detector is a first-order device: a rolling summary of an observed state. Across systems, the frequency is a second-order report over many first-order devices, each already settled by its own ground. Fig 12 :103-104: *"Composition is recursive, and the level decides what is irreducible."* A settled first-order alarm becomes an atom for the ensemble count.

### One line per domain: actors, currency, anchor

**Domain 1, the detection frame (statistics of the indicator).**
- Actors: variance estimator, lag-1 autocorrelation, recovery-rate estimator, moving window, decision threshold.
- Currency: hit rate versus false-alarm rate; sensitivity versus criterion.
- Anchor: a labelled time series, that is, data with ground truth about whether a transition followed. Without labels there is no anchor and therefore no rate.

**Domain 2, the dynamical frame (what generates the signal).**
- Actors: state variable, control parameter, basin of attraction, noise process, slow variable.
- Currency: resilience loss, return time, distance to a bifurcation.
- Anchor: the model plus the experiment (chemostat, paleo record, lake). This frame does not settle the false-alarm rate alone; it enumerates the conditions under which a signal can appear without a transition.

**Domain 3, the verification frame (was there a transition?).**
- Actors: the realized regime shift, the observer of the shift, the base rate of shifts in the population of systems examined.
- Currency: confirmed transitions, false alarms, missed alarms.
- Anchor: the transition itself. It does not update when an expert changes their mind. Fig 2 :25: *"pinned: it does not update on A or B"*.

### Partition or union

This is a **union compound, not a partition**. The question bundles at least two indicators (variance, recovery) and at least two generating conditions (a real approach to a bifurcation, and a large deviation or noise event that mimics one). Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* A case in two conditions is not a harder case of either; it is a specific compound with its own loop. The false-alarm rate of variance in a lake and the false-alarm rate of recovery in a paleo record are not two samples of one number. They are different cells of the union.

### Dependency order (Fig 3)

1. **Perception.** Can variance and recovery be measured at all, and can a transition be recognized when it happens? Boettiger and Hastings 2012 show that window choice and an ergodic assumption make this non-trivial.
2. **Vocabulary.** Do we have terms for false alarm, base rate, threshold and criterion? Yes, from signal detection theory (world source, low overlap with the figures). This is the link Fig 3 :114-115 says usually breaks: *"having terms for what a situation affords was taken for a dictionary and it is a grammar."*
3. **Objective.** What counts as a false signal? This must be fixed before a rate can be computed. A rate without a decision rule is a reading of nothing (Fig 3 :22-23: *"not reached, so not assessable"*).
4. **Planning.** Choose the ensemble and the decision window.
5. **Learn and carry.** Publish the curve with its provenance so the next system pays a lookup rather than re-deriving the whole thing (Fig 12 :107-109).

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | residual per slot, never aggregated; ground is the only metric; frame-internal quantities disqualified | a global false-positive rate throws away the only signal |
| **2 The Ground** | anchor must not update; independence decides whether agreement means anything; correlation has valence | agreement among EWS practitioners cannot settle the rate |
| **3 Dependency Chain** | a reading below the break is a reading of nothing | "how often" is undefined until the objective link is fixed |
| **4 The Membrane** | round trip loses information; measure the gap | condensing the literature into one percentage is dead reckoning |
| **5 Mint Pipeline** | output is never a measure of success; a term explaining one occasion fails | a rate fitted to one famous collapse is not a rate |
| **6 Closure / Reachability** | import is the only operator that moves the wall; instruments improved from worse ones already returning something | SDT is an import from a different closure, not a figure-internal mint |
| **7 Room Chain** | agreement is variation, not a verdict; ground votes between rooms | a consensus estimate of the rate is not a measurement |
| **8 Union Surplus** | search that finds nothing is never proof of absence; residual first, frame second | the number is not in the figure closure, but that is a verdict |
| **9 Leave / Arrive** | unbundle a union; filters for budget, witnesses for verdict; describe before looking | the indicator is a filter, not a verdict; the question must be split |
| **10 Ground Maintainer** | the ground does not decay, the channel does; pooled readings and dropped transients | a pooled global rate is the named channel failure |
| **11 The Habitat** | habitat enumerated, never composed; read the list off the world | false-alarm conditions must be enumerated, not assumed |
| **12 The Bond** | ordered bonds; recursion; settled molecule becomes an atom | variance and recovery are isomers of one process, not two witnesses |
| **13 Minimum Viable Set** | unreachable is a verdict, not a silence; a shape, not a name | the frequency is unreachable from the figures; the shape is reachable |
| **Operators table** | negation is a refusal, not an absence; comparison is ordered | a false alarm needs ¬, and the threshold is ⋛ |
| **Symbols table** | R is a slice; measured per slot; the ground is the anchor | no global rate is licensed |

Strained readings are named in §3 and §7, not smoothed over.

---

## 3. Findings

### F1 : The requested frequency is a `gap` (decisive on Reading A)

The figures define a residual, a slot, a threshold, a ground and an anchor. They define no frequency, no rate, no ensemble count. A frequency is a property of a labelled world, not of a metatheory.

- Fig 1 :23: *"The ground enters as the only metric."*
- Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*
- Fig 13 :134: *"Unreachable is a verdict here, not a silence,"*
- Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*
- Fig 9 :44: *"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."*

More searching inside the figure set will not mint a percentage. Fig 6 :21: *"MINT composes inside the closure and can never add an atom."* The atom that would settle this is an observed ensemble, and imports must be source-gated and shadow-tested (Fig 6 :12-13: *"source gate: provenance"*, *"shadow test: explains a gap"*).

**Verdict:** `gap` on the number. Mode `general`. Refuter: exhibit a figure line that returns an error rate, or supply a labelled ensemble whose rate is invariant across the conditions in F6.

### F2 : A single rate is the wrong form; the rate is per slot

The question's grammar invites one scalar. The figures forbid the aggregation that would produce it.

- Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
- Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*
- Symbols table :43: *"R is measured per slot, never as a single global number."*
- Fig 10 :25-26: *"stale percepts, dropped transients, saturated metrics, pooled readings"*

The world corroborates with a result that is not derivable from the figures: Boettiger and Hastings 2012 (J R Soc Interface, opened 2026-11-22) fixed the detection rate at 90 percent and obtained false-alarm rates of **49 percent (simulation), 81 percent (chemostat) and 93 percent (glaciation record)** for the variance indicator. The same indicator, the same tolerance, three different answers. And at a fixed 5 percent false-alarm rate, the variance method detected only 25, 5.0 and 5.4 percent of crashes in those three datasets. These numbers are not the answer to CMP-0042. They are evidence that no single answer exists.

**Verdict:** `specified`, triangulated across Fig 1, the Symbols table and the world result. Refuter: show invariance of the rate across system class, indicator, threshold and base rate on a labelled ensemble.

### F3 : The indicator is a filter, not a verdict

Rising variance and slower recovery budget attention. They do not settle the question of a transition.

- Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*
- Operators table :51: *"a goal is a comparison, which is why a vocabulary without it cannot state one"*
- Fig 9 :32: *"you get a kind of thing, never the answer itself"*
- Fig 5 :48: *"Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."*

World corroboration from a genuinely different closure (human perception and decision making). Lynn and Barrett 2014, *Psychological Science* 25(9), opened 2026-11-22: *"When in the presence of perceptual uncertainty, mistakes cannot be avoided. A liberal criterion (leftward in Fig. 1a) minimizes missed detections but increases exposure to false alarms. A conservative criterion (rightward in Fig. 1a) minimizes false alarms but increases exposure to missed detections."* The cognitivepsychology.com SDT reference (opened 2026-11-22): *"When signals are rare, the optimal criterion rises, because most 'yes' responses to weak evidence would be false alarms."* Both say the false-alarm rate is a function of a chosen criterion, not a property of the signal alone. This is the same claim the figures make in different words, arrived at from a low-overlap field.

**Verdict:** `specified`, triangulated (Fig 9 + Operators table, low-overlap world). Refuter: show that treating the indicator as a verdict does not degrade decisions on a labelled ensemble.

### F4 : Rising variance and slower recovery are one witness, not two

Both are consequences of critical slowing down: as the dominant eigenvalue approaches zero, the system recovers more slowly and its variance grows. Their agreement is not independent confirmation.

- Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence."*
- Fig 2 :39: *"Correlation has valence."*
- Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*
- Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*

World corroboration. Boettiger and Hastings 2013, arXiv:1307.4415, opened 2026-11-22: *"rising variance or autocorrelation patterns typical of fold bifurcations can be observed in more benign bifurcations or smooth transitions"* and *"any large deviation could be similarly misleading."* The same pattern appears in a system with a single stable point. When two indicators are both read off the same large deviation, counting them as two confirmations is the shared-pool collapse Fig 2 names.

**Verdict:** `specified`, triangulated for the structure (Fig 2 + Fig 12 isomer reading in `06_isomers_and_order.md`). The statistical independence of the two estimators is a world question and is marked `specified`, unmeasured. Refuter: show the two are conditionally independent given the true state and the control parameter trajectory.

### F5 : A false alarm is settled by the realized transition, not by agreement

- Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
- Fig 7 :35: *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*
- Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*

World corroboration from a second low-overlap field (probability and judgment). The Wikipedia "Base rate fallacy" entry, opened 2026-11-22: *"the probability of a positive test result is determined not only by the accuracy of the test but also by the characteristics of the sampled population."* And: *"When the prevalence, the proportion of those who have a given condition, is lower than the test's false positive rate, even tests that have a very low risk of giving a false positive in an individual case will give more false than true positives overall."* This is the "prosecutor's fallacy" title of Boettiger and Hastings 2012: a positive alarm is not a probability of a transition. The base rate of transitions in the ensemble is part of the ground, and it is not supplied by the indicator.

**Verdict:** `specified`, triangulated (Fig 2 + Fig 7 + two low-overlap world frames). Refuter: show an agreement-only calibration that matches ground calibration on a labelled ensemble.

### F6 : The conditions of a false alarm must be enumerated from the world

- Fig 11 :43: *"The habitat is enumerated, never composed."*
- Fig 11 :48: *"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."*
- Fig 10 :24: *"the ground does not decay, the channel does"*

The enumeration is already partly done in the world literature and it is longer than the usual list. Boettiger and Hastings 2012 §2.1 opens: *"variance may increase for reasons that do not signal an approaching transition"*, *"variance may not increase as a bifurcation is approached"*, and *"Some classes of sudden transitions may exhibit no warning signals."* The paper names three alternatives: a large perturbation of state, a purely noise-induced transition, and a rapidly moving bifurcation parameter. Boettiger and Hastings 2013 adds a fourth: any large deviation in a single-well system. Hastings and Wysham 2010 (listed in the Early Warning Signals Toolbox bibliography, page opened 2026-11-22) adds sudden transitions with no warning. These are conditions in the habitat of the residual, and each changes the false-alarm rate. A rate that does not state which were enumerated is a rate with a hidden habitat.

**Verdict:** `general` (the enumeration rule), `specified` (the particular list). Triangulated across Fig 11 and the world enumeration. Refuter: exhibit a condition that changes the measured rate and was not in the list; if found, add it and recompute, do not absorb it into the error bar.

### F7 : The question must be unbundled before a rate is sought (strain test)

- Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*
- Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*
- Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*

The two indicators and the multiple generating conditions overlap. If we force a single rate, the figure line strains: it would have to treat a lake variance study, a paleo autocorrelation study and a recovery-rate experiment as replicates of one measurement. They are not; they share a vocabulary and not a ground. Per the canonical usage rule, a strain sends us back to the census, not to a softer reading. The re-census in §1 finds a union and mandates separate loops, one per cell.

**Verdict:** `general` on the unbundling requirement. No strain remains after re-census. Refuter: show a mechanism and a base rate shared by all cells, which would collapse the union to a partition.

### F8 : What survives

| claim | mode | figure / source |
|---|---|---|
| A false-alarm frequency is not derivable from the figures; a labelled ground is owed | `general`, `gap` on the number | F1, Fig 1 :23, Fig 13 :134 |
| The rate is per system, indicator, threshold and window, never a global scalar | `specified` | F2, Fig 1 :19 and :22 |
| The indicator is a filter that budgets attention; the ground settles the transition | `specified` | F3, Fig 9 :60 |
| Variance and recovery are two readings of one process, not independent witnesses | `specified`, statistical independence unmeasured | F4, Fig 2 :31 and :40 |
| The base rate of transitions belongs to the answer, not to the noise | `specified` | F5, world base-rate source |
| The list of false-alarm conditions is read off the world and stays open | `general` + `specified` list | F6, Fig 11 :43 and :48 |
| The question is a union and must be split before a rate is sought | `general` | F7, Fig 9 :54-57 |

---

## 4. Pre-registered refuter (written before the conclusion)

Required by the seat map (Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device"*). The shape claim is: **a false-signal rate is a per-slot curve over thresholds, with a stated base rate and an enumerated habitat, settled by observation; the figures alone cannot supply a scalar frequency.**

It is refuted if any of the following holds:

1. **R1.** A figure line is exhibited that returns a false-alarm frequency directly, with no ground ensemble. That would turn F1 from `gap` into `grounded`.
2. **R2.** On a labelled ensemble, a single scalar rate is invariant across system class, indicator, decision threshold and base rate of transitions, to within the measurement error. That would defeat the per-slot claim in F2 and F3.
3. **R3.** Rising variance and slower recovery are shown to be conditionally independent given the true state and the control-parameter trajectory, so that their agreement is two witnesses. That would defeat F4.
4. **R4.** An agreement-only calibration (expert consensus that an alarm was false) matches the ground calibration on held-out systems. That would defeat F5.
5. **R5.** All false-alarm conditions across the ensemble are captured by a single mechanism with a single base rate, collapsing the union to a partition. That would defeat F6 and F7.

If R1 fires, the framework contains a frequency term we failed to find and the audit is withdrawn. If any of R2 to R5 fires, the shape claim is narrowed accordingly and the affected finding is retracted, visibly, in §6. Until one is run, nothing here is labelled `grounded`.

---

## 5. Route when no figure line closes the residual (Formula step 7)

Kept distinct, as the formula requires.

- **SEARCHED (asked first, cheapest).** Is a frequency already in closure(Γ)? The library holds R, slot, anchor, threshold ⋛, sequence →, negation ¬, ground, habitat. Composing these gives a decision procedure per slot, not a rate over slots. No amount of further search in the figure set mints an ensemble count. Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* Conclusion: the number is not in here and unfound; it is absent from this closure.
- **INWARD (extend an instrument already returning something).** The EWS estimators already return readings: variance trends, lag-1 autocorrelation, recovery time. Boettiger and Hastings 2012 show how to sharpen them into a decision-theoretic instrument by fitting the stable and approaching models and reading ROC curves. Fig 6 :32: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."* This route produces a per-system curve. It cannot by itself produce a universal number.
- **OUTWARD (import a frame whose closure predicts the shape).** Signal detection theory (Green and Swets 1966; Lynn and Barrett 2014) is a frame whose closure already contains hit rate, false-alarm rate, criterion, sensitivity d-prime, ROC and base rate. It predicts exactly the shape in F2 to F5: no rate without a criterion and a prevalence. Fig 9 :27-28: *"describe it before you go looking, or any frame you pick will seem to fit."* We described the residual first (§0), then picked the frame. Source gate: SDT is published, cited and opened. Shadow test: it explains why the same indicator yields 49, 81 and 93 percent in the three datasets. Debit against independence recorded: SDT and the dynamical-systems frame share a statistical lineage, so they are not fully independent; their agreement is weak corroboration, not two witnesses.
- **INWARD and OUTWARD are opposed; never read one against the other.** The inward route sharpens the instrument in the field's own terms; the outward route casts the residual in effect terms into another frame. Both are recorded, neither is used to overrule the other.

Strains after re-census: none hidden. One live strain remains, the statistical independence of the two indicators (F4), recorded as unmeasured rather than assumed.

---

## 6. Canonical usage check and retraction log

Two sources were read after the first five sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; and the canonical limit, the framework says *"what a missing thing would have to look like (**a shape, not a name**)"*, then stops at the limit of the available instruments and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: *"the figures are the ground for design questions; Isaiah is the anchor for what the figures genuinely cannot settle."* A frequency is not a design question; it is an empirical one. So the figures govern the shape and the anchor (measurement) governs the number. No human ruling is owed here.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| F1 called "decisive" | **Confirmed but narrowed.** Decisive on Reading A (the scalar), not on the whole question. The framework's own rule permits an honest `gap`, so "decisive" does not mean "the question is meaningless." |
| Initial temptation to quote the 49/81/93 percent figures as the answer | **Retracted.** They are three model-specific, best-case values from one paper. They are evidence of variance across systems, not a universal frequency. Kept in F2 only in that role. |
| Initial reading of Fig 9 :60 as if the indicator could never be used | **Retracted.** Filters are legitimate for the budget. The sentence prohibits letting a filter hand you a verdict, not using it to budget attention. F3 now says this. |
| "Shape, not a name" applied to the base rate of transitions | **Retracted.** The phrase governs a missing primitive, not a measured population parameter. The base rate is part of the ground and must be measured; it is not banned. |
| Apparent strain: Fig 1 says never aggregate, the question asks for an aggregate | **Not strained after re-census.** Fig 1 governs the residual per slot; the ensemble curve is a second-order composition of settled per-slot results (Fig 12 :104). The aggregate is legitimate only as a curve that preserves the slots, not as a scalar that erases them. |
| SDT treated as an independent second witness | **Narrowed.** It is low-overlap with the dynamical frame but shares a statistical lineage. Its agreement is corroboration of the shape, not a second ground reading. Recorded in the OUTWARD debit above and in `09_watson_answer.md`. |
| F4 statistical independence | **Left live, not resolved.** No source read establishes or refutes conditional independence of variance and recovery estimators given the true state. Marked `specified`, unmeasured. |

### Round trip note

Condensing the figure set into the phrase "EWS false alarms are a decision-theoretic trade-off" loses three constraints on the way back down: the per-slot rule, the requirement that the base rate be measured, and the enumeration of alternative generating conditions. This is the round-trip gap R_T of Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* The gap is recorded qualitatively by F2, F5 and F6, not set to zero.

---

## 7. Updated verdict

The question, read as a request for a scalar frequency, ends in `gap`. That is the honest output of a barrier theorem, not a failure: the figures narrow the shape of any admissible answer and identify exactly what ground would settle it. Read as a request for the form of the answer, it yields a `specified` and checkable shape:

> Report, per system class and per indicator, the hit rate against the false-alarm rate as the decision threshold moves, state the base rate of transitions in the ensemble and the conditions enumerated in the habitat, and let the realized transition (not agreement) score each alarm. No single percentage is licensed by anything in the figures or by the world sources read here.

Cost if this is wrong: bounded and locatable, because the refuters R1 to R5 are written down and the lineage is recorded. Undoable: yes, a labelled ensemble can be added without withdrawing any figure claim. Reversed by: a ground reading, never agreement. Until then, `candidate`.
