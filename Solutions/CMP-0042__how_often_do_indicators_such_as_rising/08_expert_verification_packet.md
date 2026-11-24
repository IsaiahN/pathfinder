# Expert verification packet: the Tether on early-warning false alarms

**What this is:** a claim in a form a researcher in early warning signals, tipping points or signal detection can check. Mode, derivation and refuters are stated before the conclusion.

**Mode: `gap` on the requested scalar, `specified` on the shape, `general` on the structural constraint.** Not `grounded`. No measurement is claimed here. This is a simulated derivation checked for internal consistency against the figures, not a ground reading.

## 1. The claim, in one paragraph

The question "how often do indicators such as rising variance or slower recovery falsely signal an approaching transition?" has no single-number answer available either from the figures or from the sources read for this packet. A false-alarm rate is a curve, indexed by system class and indicator, over the decision threshold, with the base rate of transitions stated and the look-alike conditions enumerated. The indicator is a filter that budgets attention; the realized transition, not agreement among researchers, scores each alarm. Variance and recovery are two readings of one slowing-down process, so their agreement is one witness read twice. What is owed to settle the question is a labelled ensemble, not a further argument.

## 2. Three checkable sub-claims

### C1 : Framework-internal; checkable by reading Figure 1 and the Symbols table

- **Statement:** the residual is per slot, never a global scalar; a pooled false-alarm rate destroys the only signal that says where the detector fails.
- **Source, verbatim:** Fig 1 :19 : *"The residual is indexed by object slot, not aggregated."* Fig 1 :22 : *"Aggregating across slots is how a live signal disappears into an average."* Symbols table :43 : *"R is measured per slot, never as a single global number."*
- **World corroboration:** Boettiger and Hastings 2012, J R Soc Interface 9(75):2527-2539, Table 2. At a fixed 90 percent detection rate, the variance indicator produced false-alarm rates of 49 percent (simulation), 81 percent (Daphnia chemostat) and 93 percent (glaciation record). Same indicator, same tolerance, three different values.
- **Refuter:** a labelled ensemble on which one scalar rate is invariant across system class, indicator, threshold and base rate to within measurement error.

### C2 : Framework-internal plus decision theory; checkable by a reader of signal detection theory

- **Statement:** the indicator is a filter and the threshold is a goal-comparison, not a verdict. A false alarm additionally requires a refusal (negation), not merely the absence of an alarm.
- **Source, verbatim:** Fig 9 :60 : *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* Operators table :47 : *"a threshold relation between two quantities."* Operators table :51 : *"a goal is a comparison, which is why a vocabulary without it cannot state one."* Operators table :57 : *"a refutation is a negation, which is why a vocabulary without it can only accumulate."*
- **World corroboration:** Lynn and Barrett 2014, *Psychological Science* 25(9):1663-1673: *"It is well known that payoffs and base rate influence bias"*; *"When in the presence of perceptual uncertainty, mistakes cannot be avoided."* The cognitivepsychology.com SDT reference: *"When signals are rare, the optimal criterion rises, because most 'yes' responses to weak evidence would be false alarms."*
- **Refuter:** show that treating the indicator as a verdict does not degrade decisions on a labelled ensemble, or that the alarm and the ground check can be swapped without loss.

### C3 : Cross-frame; checkable against the EWS literature

- **Statement:** variance and recovery are two readings of one slowing-down process, and the conditions that mimic a warning form a union that must be unbundled before counting.
- **Source, verbatim:** Fig 2 :40 : *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."* Fig 9 :54 : *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 12 :117 : *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
- **World corroboration:** Boettiger and Hastings 2013, arXiv:1307.4415: *"rising variance or autocorrelation patterns typical of fold bifurcations can be observed in more benign bifurcations or smooth transitions"* and *"early warning signals do not exist for purely stochastic transitions."* Boettiger and Hastings 2012 §2.1: *"variance may increase for reasons that do not signal an approaching transition."*
- **Refuter:** show variance and recovery are conditionally independent given true state and control-parameter trajectory (kills the one-witness claim), or that all look-alike conditions collapse to one mechanism with one base rate (kills the union claim).

## 3. What is explicitly not claimed

- No percentage is asserted as the false-alarm rate. The 49 / 81 / 93 figures are evidence of variation, not the answer.
- Not that early warning signals are useless or always unreliable.
- Not that variance and recovery are independent confirmations.
- Not that agreement among experts can score an alarm; only the realized transition can.
- Not `grounded`. No measurement was taken in the derivation.
- Not a claim that the Tether framework settles an empirical frequency. It supplies the shape; the ground supplies the number.

## 4. Provenance

- Figure text extracted verbatim from the canonical set: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (local extract), cited as `Fig N :line`.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`; metalaw reading: `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`.
- Loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`. Checking rules: `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`.
- World sources, all opened 2026-11-22: Boettiger and Hastings 2012 (PMC3427498), Boettiger and Hastings 2013 (arXiv:1307.4415), Lynn and Barrett 2014 (PMC4304641), cognitivepsychology.com SDT reference, Wikipedia "Base rate fallacy", and the four essays by Isaiah N listed in `05_what_shape_means.md`. Full provenance in `10_source_ledger.csv`.
- This packet compiled 2026-11-22.

## 5. What would settle it

A labelled ensemble, not a further argument. From *The Hard Problem is About Source*: an instrument that reads green *"cannot comment on the source"*; the spectrometer, not an argument, resolved the case.

1. **Threshold test:** hit rate against false-alarm rate at each criterion, per system and indicator, with the transition base rate stated.
2. **Independence test:** conditional independence of variance and recovery given state and trajectory.
3. **Habitat test:** does the rate change as the set of look-alike conditions changes?
4. **Ground test:** does agreement-only calibration match ground calibration on held-out systems?

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19 and :22, Fig 9 :60 and :54, Fig 2 :40, Fig 12 :117. Six short passages.
2. Check C2 against their own knowledge of decision theory: is the filter/verdict distinction and the role of the criterion faithful?
3. Look at Table 2 of Boettiger and Hastings 2012 (open access): do the three false-alarm values support C1's per-slot claim?
4. Name one instrument or design that would test the conditional independence of variance and recovery, or say why none is possible.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the question it reports on.
