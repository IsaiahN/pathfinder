# The Tether's answer: how often the signals show, and when they fail

**Mode: `general` on the structural shape, `specified` on the per-domain verdicts and the failure taxonomy, `gap` on the universal frequency. Nothing here is `grounded` by this derivation.** Simulated derivation checked for internal consistency against the figures (`05_what_shape_means.md` §6), not a ground reading.

## 1. The residual it answers

For each system `s`, the residual is the gap between what the indicator says (`a threshold is approaching`) and what the ground delivers (`a crossing, or none`): `R_s = |Gamma(b,a)_s - o'_s|`. It is indexed by slot. Fig 1 :19: **"The residual is indexed by object slot, not aggregated."** Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**

The question bundles three overlapping conditions. Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."** So:

- **loop D, detection:** did the signal precede a real crossing?
- **loop FP, false positive:** did it fire when no crossing followed?
- **loop FN, false negative:** did a crossing happen with no signal?

"How often" is a count across slots. It is a filter for a monitoring budget, not a verdict on any slot. Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

## 2. Domain census in brief

| domain | actors | currency | anchor |
|---|---|---|---|
| 1. Indicator frame | AR(1), SD, skewness, kurtosis, spectral ratio | a trend statistic from one detrended series | none; borrows domain 2 |
| 2. The ground | the realised crossing or its absence; replicated experiments and controls | the realised transition | itself; it does not update on the indicator |
| 3. The channel | sampling, window, detrending, variable choice, truncation | contact with the ground | inherited from domain 2 |
| 4. The habitat | lakes, forests, reefs, climate subsystems | frequency counts | each system's own ground |

Dependency order: perception, vocabulary, objective, planning, learn and carry (Fig 3). The break is at vocabulary, the link that says what a slowing recovery affords. Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."**

## 3. Pre-registered refuter (written before the answer below)

1. A pre-registered detector, tested on replicated bifurcation and replicated stable systems, separating them at false-positive and false-negative bounds fixed before the run, refutes the claim that the indicator is an unanchored channel.
2. A demonstration that two indicators computed from one series draw on independent evidence rather than one pool refutes the shared-pool verdict for that pair.
3. An instrument that reads the transition mechanism from the pre-transition series alone refutes the vocabulary-break claim.
4. One protocol enumerated over a stated habitat returning a stable frequency across independent enumerations closes the frequency gap.
5. A case where the ground itself, not the habitat around it, changes after settlement requires re-census of the anchor rule.
6. A pre-registered window, variable and threshold whose verdict survives stable controls refutes the post-hoc-convention finding for that study.

These were written before the conclusion. None fired in this simulated run.

## 4. The answer, with verdicts kept separate

### Domain 1, the indicator frame: a channel, not an anchor. `general`, triangulated.

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** Fig 2 :30: **"If it moves when you push on it, it is not an anchor."** A rising AR(1) is a reading made by a frame; it is not the crossing. Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** An indicator cannot validate itself. Verdict: triangulated across Fig 2 and Fig 10, with empirical corroboration from Gsell et al. 2016.

### Domain 2, the ground: reachable in principle, often unreachable at this budget. `general` plus a `specified` reachability limit, triangulated.

Fig 2 :45: **"Frames range against the ground. They do not negotiate with it."** Fig 9 :44: **"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."** A prospective forecast usually has one realisation and no control, so the ground is not yet measured. That is a budget limit, not underivability. Fig 8 :40: **"Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."** The remedy is replication, controls and longer records. Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."** Verdict: triangulated.

### Domain 3, the channel and its failure modes: this is the direct answer to "when do they fail". `general` taxonomy with `specified` instances, triangulated.

Fig 10 :24: **"the ground does not decay, the channel does"**; :25: **"stale percepts, dropped transients, saturated metrics, pooled readings"**.

- **Stale percepts:** a window chosen after the collapse is visible. Boettiger and Hastings 2012 show the prosecutor's fallacy: selecting on collapse manufactures the warning. Fig 10 :47: **"a convention that decides an outcome has stopped being one"**.
- **Dropped transients:** a fast excursion missed by fortnightly or monthly sampling. Gsell et al. 2016 find low AR(1) partly from sampling too coarsely for fast plankton dynamics.
- **Saturated metrics:** a variance or autocorrelation statistic that cannot discriminate because of detrending, window length or noise. Contosta et al. 2023 find that these choices change false-positive likelihood; Dakos et al. 2012 show variance can even decrease near a transition.
- **Pooled readings:** averaging across variables, taxa, trophic levels or systems. O'Brien et al. 2023 find different trophic levels in one lake following different transition mechanisms.

Verdict: triangulated across Fig 10 and Fig 1, with several empirical instances. Signals fail when the channel loses ground contact while the indicator keeps producing readings.

### Domain 4, the frequency across real systems: `gap`. `general`.

Fig 11 :43: **"The habitat is enumerated, never composed."** Fig 11 :48: **"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."** Published enumerations disagree because they enumerate different habitats and different definitions: Gsell et al. 2016 report at least one indicator in 14 of 16 lake series but failure in 44 percent of 64 indicator tests; Contosta et al. 2023 report about 58 percent of signals suggesting declining resilience in one forest with critical slowing down only about 20 percent; O'Brien et al. 2023 report few critical transitions and most indicators no better than chance across nine lakes; Wang et al. 2012 find signals 10 to 30 years early but of the flickering kind in one lake. These are not one estimate with noise and they must not be averaged. Fig 13 :134: **"Unreachable is a verdict here, not a silence"**. The honest report is habitat-specific frequencies attached to their protocols, or `gap` for a universal one.

### A note on indicator structure. `specified`, triangulated.

Fig 12 :117: **"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."** The classic indicators are isomers of one reading, grouped into critical-slowing-down and flickering kinds. That is why swapping one for another changes the verdict (`06_isomers_and_order.md`).

## 5. What it explicitly does not say

- Not that the signals never work. Studies find them, sometimes years ahead.
- Not that there is a universal success rate. Frequency is a filter, not a witness.
- Not that a slowing recovery is specific to a catastrophic bifurcation. Kéfi et al. 2013 show it is not.
- Not that agreement among four indicators is four witnesses. Fig 2 :40: **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"**.
- Not `grounded`. No measurement in this derivation settles anything.
- Not a claim about which indicator is best. That needs a ground and a budget, not an argument.

## 6. What would settle it

The ground, not agreement. Concretely:

1. Replicated bifurcation systems and replicated stable systems, with the detector, window, variable and threshold registered before the outcomes are examined. This is the remedy named by Boettiger and Hastings 2012 and Contosta et al. 2023.
2. A source-discriminating instrument that separates approaching bifurcation from chance excursion, flickering and detrending artefact. *The Hard Problem is About Source*: the reading cannot comment on the source; the spectrometer resolved the analogous case.
3. An instrument at the vocabulary link that reads mechanism from the pre-transition series. Without it, every indicator remains a hypothesis about kind.
4. For frequency: one protocol applied to an enumerated habitat and repeated independently, with the habitat and the definition of "signal" fixed in advance.

## 7. The honest stop

**Unreached, not unreachable.** The figures give the shape of a valid warning channel and the taxonomy of its failure. They do not give a count, and a count would not be a verdict for a system. Fig 8 :39: **"So a search that finds nothing is never a proof of absence."** The stop is at the limit of the instruments: one realisation, no control, and no instrument for mechanism. The lineage is recorded so the stop is checkable. Fig 10 :59: **"an interest in the outcome is unavoidable, an interest in the reading is disqualifying"**; the author of this claim cannot be its verifier.

## 8. One-paragraph version for outreach

> The figures do not say whether early-warning signals work often or rarely. They say what a signal is and how it fails. A rising variance or autocorrelation is a reading produced by a frame, not the transition itself, so it has to be ranged against the ground, and the ground is the realised crossing or a stable control. Signals fail when that channel loses contact: a window chosen after the collapse, a fast excursion missed by the sampling interval, a statistic saturated by noise or detrending, or an average across systems that erases the one live slot. Four classic indicators are isomers of one reading and split into two kinds, critical slowing down and flickering, which is why they disagree. "How often" is an enumeration over habitats, not a universal percentage, and published enumerations differ because the habitats differ. What would settle it is replication, a pre-registered threshold, and an instrument that distinguishes an approaching bifurcation from a chance excursion. Until then the answer is a shape and a failure taxonomy with refuters written in advance, not a number.
