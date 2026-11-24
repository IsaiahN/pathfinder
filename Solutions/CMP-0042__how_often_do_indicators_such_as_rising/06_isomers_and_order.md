# Are rising variance and slower recovery isomers? Order, threshold and the decision bond

**Mode: `specified` on the structural claims, `general` on the bond grammar. Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).**

## RESIDUAL

The question treats "rising variance" and "slower recovery" as two named indicators, as if they were two independent instruments that could corroborate one another. Two questions are owed: (1) what structure relates them under the figure grammar, and (2) what order does a decision about a transition have, and where does the threshold enter? The answer determines whether counting both indicators gives two witnesses or one.

## DOMAIN CENSUS

Atoms held (from the world literature, not from the six-term substrate; this is a different level of description): the observed state x, the noise process, the control parameter r, the basin boundary, the recovery rate, the variance of the rolling window. Bonds held: → sequence, ⋛ comparison, ¬ negation. No new primitive is needed for the derivation; the threshold is a comparison of a statistic with a criterion.

Scale: first order inside one time series (statistic → alarm), second order at the ensemble (settled alarms → rate curve). The composition rule Fig 13 :74 applies: *"Everything else is a composition across the two kinds, never within one."* Here the two "kinds" at this level are the state of the system and the structure of the detector; an alarm composes them, and must then be settled before it can be composed over.

## DERIVATION

### Q1 : What is the relation between rising variance and slower recovery?

- Near a fold bifurcation the dominant eigenvalue approaches zero, so return time after a perturbation grows (critical slowing down); the same flattening of the potential makes the stationary variance grow. Both are consequences of one change in the system, not two independent events.
- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

Two readings are possible:

1. **Isomer reading.** If we write variance and recovery over the *same* atom set (the same state, noise and control parameter), differing only in which bond composes the statistic: `state → rolling variance` and `state → return time`. Same atoms, different statistic, different visible behavior. That is the figure's isomer: *"same atoms, different bond, different substance."* The two are different measurements of one underlying change.
2. **Functional-group reading.** If we write them as members of the class "generic early-warning statistic," they share a substructure (`state → statistic → comparison`) and differ in which statistic fills the middle slot. That is Fig 12 :124: *"the group says what kind; the qualifier says which member."*

Both readings agree on the operative point: they are **the same witness under two descriptions**, not two independent witnesses. Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence."* Their overlap is maximal because their evidence is the same slowing-down process.

**Falsifier, written before the run:** if variance and recovery are shown to be conditionally independent given the true state and the control-parameter trajectory, the isomer/functional-group reading fails and they become two frames with low overlap. Until that test is run, the claim is `specified`, unmeasured.

### Q2 : What is the order of a decision?

The decision is not a symmetric combination of the two indicators. It is an ordered chain:

```
perception of state  →  statistic  →  comparison with threshold  →  alarm  →  ground check
```

- **→ sequence**, Fig 12 :30: *"A then B; B needs A to have happened."* The comparison needs the statistic; the alarm needs the comparison; the ground check needs the alarm. Swapping any adjacent pair produces a different thing (an alarm before a statistic is a guess, not a detection).
- **⋛ comparison**, Operators table :47: *"a threshold relation between two quantities"*, with test :50: *"is it about which is larger, rather than both being present?"* The decision is exactly this: is the statistic larger than the criterion? Fig 12 :52 (via Operators table :51): *"a goal is a comparison, which is why a vocabulary without it cannot state one."* The threshold states a goal (how much evidence before acting), not a fact about the world.
- **¬ negation**, Operators table :53-57: *"this does not hold"*, *"a refutation is a negation, which is why a vocabulary without it can only accumulate."* A false alarm requires ¬: the alarm was issued, and the claim "a transition is approaching" is refused because the ground did not pay. A vocabulary of alarms without negation can only accumulate alarms. This is why a library of past warnings cannot by itself yield a false-alarm rate.

**Falsifier:** show that the alarm and the ground check can be swapped (a verdict rendered before the evidence arrives) with no loss. If that holds, the sequence bond is wrong here.

### Q3 : Why the rate is second order and needs no new atom

- Fig 12 :104: **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."**
- Each first-order alarm is settled when the transition (or its absence) is observed. Settled, it becomes an atom. The ensemble rate composes over settled alarms.
- No new atom is needed for the rate. What changes at second order is the bond: from `statistic → alarm` to `settled alarms ⋛ base rate` in the sense of a comparison against the population's transition prevalence. The base rate itself is measured, not minted.
- Fig 9 :32: *"you get a kind of thing, never the answer itself."* The second-order composition still returns a shape (a curve), not a scalar.

**Falsifier:** exhibit a system in which a first-order alarm cannot be settled even in principle (no observable transition, no window boundary). Then the ensemble atom is never available and the rate is not composable for that class. That class must be reported separately, not absorbed into the average.

### Q4 : Why the union must be unbundled before counting

- Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*
- The conditions that produce a false alarm (large deviation, noise-induced crossing, benign bifurcation, rapid parameter change, large perturbation of state) overlap. They are not mutually exclusive classes. A single pooled false-alarm rate is therefore a rate over a union with unstated intersections.
- Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."* A system that both approaches a bifurcation slowly and receives a large perturbation is not two hard cases of one indicator; it is a compound whose rate must be counted in its own cell.
- The world corroborates: Boettiger and Hastings 2012 §2.1 enumerates three of these alternatives explicitly, and Boettiger and Hastings 2013 adds large deviations in a single-well system. Their 49 / 81 / 93 percent table is evidence that the cells do not share one rate.

**Falsifier:** show that all the listed conditions collapse to one mechanism with one base rate, so the union is actually a partition. Then pooling is legitimate and this section is retracted.

## CONCLUSION

Rising variance and slower recovery are two readings of one change, best described as isomers (same underlying atoms, different statistic-bond) or as members of one functional group of generic warning statistics. They are not two independent instruments, so their agreement is one witness read twice. A decision is an ordered chain ending in a comparison bond whose threshold states a goal, and a false alarm requires negation, not merely an absent alarm. The frequency is a second-order composition over settled first-order alarms and needs no new atom, but it is still a shape (a curve), not a scalar. The union of false-alarm conditions must be unbundled before any rate is counted.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` (local extract) and the Operators table. World enumeration from Boettiger and Hastings 2012 and 2013, both opened 2026-11-22. No measurement was used in this derivation. The statistical independence claim in Q1 is explicitly unmeasured.

## FIGURE CENSUS

Fig 2 (independence, shared evidence), Fig 9 (union versus partition, shape not answer), Fig 12 (isomer, functional group, ordered bonds, settled molecule becomes an atom, recursive levels), Fig 13 (cross-kind composition), Operators table (→ sequence, ⋛ comparison, ¬ negation and their tests). Strains after re-census: none. The "two kinds" at the EWS level are detector state and detector structure, an analogue of Fig 13's states and structures at a different stratum; this is an analogy, not a claim that the six-term substrate literally contains a variance estimator.
