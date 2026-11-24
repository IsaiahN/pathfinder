# The Tether's answer: how often do early warning signals falsely signal a transition?

**Mode: `gap` on the requested scalar, `specified` on the shape, `general` on the structural constraint. Not `grounded`.** Simulated derivation checked for internal consistency against the figures, not a ground reading (`05_what_shape_means.md` §6).

## 1. The residual it answers

The detector predicts "a transition is approaching" when variance rises or recovery slows. The observation o' is whether a transition actually followed in the decision window. R_s = |Gamma(b,a) - o'| per slot s, where s is a system, an indicator, a threshold and a window. A false signal is R_s > 0 with the alarm having fired. The residual is per slot, never a global scalar (Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*).

## 2. The answer

1. **There is no scalar answer in the figure set.** The figures carry a residual, a slot, a threshold, a ground and an anchor. They carry no frequency. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* The number requires a labelled ensemble, which is a ground reading and is owed. Verdict on the literal question: `gap`.
2. **What is reachable is the shape any admissible rate must have.** Report a hit rate against a false-alarm rate as the decision threshold moves, separately for each system class and each indicator, with the base rate of transitions stated and the false-alarm conditions enumerated. Fig 9 :32: *"you get a kind of thing, never the answer itself."*
3. **The indicator is a filter, not a verdict.** Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* Rising variance budgets attention; the realized transition settles whether the alarm was false. Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
4. **Variance and recovery are one witness under two descriptions.** Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."* Both are consequences of critical slowing down. Their agreement is not two confirmations (see `06_isomers_and_order.md`).
5. **The base rate belongs to the answer.** Whether a positive alarm is more likely true than false depends on how common transitions are in the ensemble. This is the prosecutor's-fallacy structure that Boettiger and Hastings 2012 import into EWS, and it is corroborated independently by the base-rate literature.
6. **The union must be split before counting.** Large deviations, noise-induced crossings, benign bifurcations, rapid parameter changes and large perturbations are distinct conditions with overlapping intersections. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*

## 3. What it explicitly does not say

- Not a percentage. No number in this folder is "the" false-alarm rate.
- Not that early warning signals are useless. They are legitimate filters for budgeting attention; the failure is letting the filter hand you a verdict.
- Not that variance and recovery are independent confirmations.
- Not that expert agreement can score an alarm. Only the ground can.
- Not `grounded`. No measurement was taken here; every substantive claim is `specified` or `general`.

## 4. What would settle it, the ground

A labelled ensemble, not a further argument. From *The Hard Problem is About Source*: an instrument that reads green *"cannot comment on the source"*; the spectrometer, not an argument, resolved the case. Here the corresponding questions are:

- **Threshold test:** for each indicator and system class, what is the false-alarm rate at each criterion, with the base rate of transitions stated? This is an ROC curve, not a scalar.
- **Independence test:** are variance and recovery conditionally independent given the true state and control-parameter trajectory? If yes, they are two witnesses; if no, one.
- **Habitat test:** which look-alike conditions were present, and does the rate change with the set? Each new condition is added to the list and the curve is recomputed, not absorbed into an error bar.
- **Ground test:** on held-out systems, does an agreement-only calibration of alarms match calibration by realized transitions? If it does, F5 of the audit is retracted.

## 5. The honest stop

**Unreached, not unreachable.** The stop is at the limit of what the available instruments distinguish: a detector reading cannot discriminate the source of a rise, and the literature's available rates are model-specific and dataset-specific. Fig 6 :27: *"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."* Here it is a genuine absence of a labelled ground over the union, not a matter of trying harder with the same detectors. The lineage is recorded so the stop is checkable. *"Indiscernibility is not identity."*

## 6. One-paragraph version for outreach

> The honest answer to "how often do early warning signals cry wolf" is that there is no single frequency to report. A false-alarm rate depends on where you set the decision threshold, on how common transitions are in the systems you are watching, and on which look-alike causes (a random large excursion, a noise-induced jump, a benign bifurcation, a fast-moving control parameter) were in the set. The same indicator at the same tolerance has been reported at wildly different false-alarm rates in different datasets. Two usual indicators, rising variance and slower recovery, are not independent corroboration; they are two readings of the same slowing-down process, so counting both as two witnesses double-counts one. What the framework can supply is the shape of a legitimate answer: for each system and indicator, a curve of hits against false alarms as the threshold moves, with the base rate stated and the list of look-alike conditions made explicit, and with each alarm scored against whether a transition actually followed. It cannot supply the number; that needs measurement. It is a `gap` where a number was requested, and that is a verdict rather than a silence.

## 7. Pre-registered refuter, restated for this file

Written before the conclusion, from `01_figure_grounded_audit.md` §4: the shape claim is refuted if (R1) a figure line returns a frequency directly; (R2) one scalar rate is invariant across system class, indicator, threshold and base rate on a labelled ensemble; (R3) variance and recovery are conditionally independent given state and trajectory; (R4) agreement-only calibration matches ground calibration on held-out systems; or (R5) all false-alarm conditions collapse to one mechanism and one base rate. If any fires, the affected claim is retracted visibly and this file is updated.
