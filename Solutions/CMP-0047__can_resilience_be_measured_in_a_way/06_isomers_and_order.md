# Bonds, isomers and order in the resilience measurement question

**Mode: `specified` on the per-domain claims, `general` on the structural bond typing.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

---

## RESIDUAL

A single word, "resilience," is being asked to carry two effects. The supporting questions are: (1) which typed bonds are actually in play, (2) are the two readings isomers over a shared atom set or simply different substances with different atoms, (3) where does the dependency chain break when someone tries to build the measurement, and (4) which external analogues are low-overlap corroborations rather than identity claims.

## DOMAIN CENSUS

Atoms available: a reference state, a disturbed state, a time index, a basin boundary, a channel. Bonds available: the seven plus negation. No new primitive is needed. The names "resistance" and "recovery" are bindings from the field's vocabulary onto atoms already held; they are not minted primitives.

---

## Q1. Bond typing: which operator does each reading use?

- Resistance is a **comparison** (⋛): *"a threshold relation between two quantities"* (Operators table). The two quantities are the disturbed state and the reference. The test is *"is it about which is larger, rather than both being present?"* Yes: how much larger is the departure than zero, or than an acceptable band.
- Recovery is a **sequence** (→): *"A then B; B needs A to have happened"* (Fig 12 :30). The trajectory at t₁ needs the disturbance at t₀ to have happened; the ordering is load bearing, and swapping the operands produces a different thing.
- Same-basin return versus basin change is a **cycle** question. Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** A chain reading cannot represent closure, so a metric built as a chain of magnitudes is structurally unable to report recovery, regardless of its precision.
- A failed measurement that must be withdrawn is a **negation** (¬), not a subtraction. The Operators table: *"a refutation is a negation, which is why a vocabulary without it can only accumulate."* Subtracting the recovery term from a composite does not refuse the composite; it leaves a different composite.

**Ordering result:** the three readings are not interchangeable. A vocabulary holding only the symmetric conjunction bond could record that a state and a time are both present, and could not record that one follows the other or that a loop closed. Fig 12 :111: **"A vocabulary without bonds can name a state and cannot name a route to one."**

**Falsifier for Q1.** Show that the cycle-closure distinction can be written entirely as a threshold on magnitudes, with no sequence or cycle term, and that this representation preserves the basin decision on a ground where the two outcomes occur with identical peak departures. Q1 fails and F6 of `01` is retracted.

### A note on the comparison operand type

The Operators table defines ⋛ over two quantities. At the level of the measurement, the operands are state variables, so the type is clean. At the level of the decision, the operands can be two composed molecules (a resistance reading and a recovery reading) treated as quantities at the next level. Fig 12 :104 permits this: **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."** But whether a resilience decision actually uses ⋛ at that level is an instrument question, not a figure question. This remains a named strain, not a hidden one.

---

## Q2. Are resistance and recovery isomers?

Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

**Weak reading.** If resistance is read as `{reference, disturbed state, comparison}` and recovery as `{disturbed state, reference, time, sequence}`, the atom sets differ (time is present in one and not the other). They are **not isomers**. They are two different molecules that share some atoms. This is the honest reading for most measurement practice, where resistance is a single post-disturbance number and recovery is a time series.

**Strong reading.** If both are written over the full shared atom set `{reference, disturbed state, time, basin boundary, channel}`, differing only in which bond is placed where, then they **are isomers**: same atoms, different bond, different substance. This is the claim worth testing, because it is what makes a single instrument able to report both readings at once.

**Functional-group reading.** Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."** Both readings share the functional group `reference compared against observation`. The qualifier is the bond: comparison for resistance, sequence and closure for recovery. The field's own vocabulary supports this: Grimm and Wissel's "staying essentially unchanged" and "returning to the reference state" share a reference and differ in the operation performed on it.

**Falsifier, written before the run.** If either reading can be written without an atom the other requires (for example, recovery with no basin boundary, or resistance with no reference state), the strong isomer claim fails and the functional-group reading stands. This is the same discipline used in the exemplar's isomer derivation.

**Status:** `specified`, unmeasured. The weak reading is triangulated (Fig 12 :117 plus the field's own three-property reduction); the strong reading is single-source on Fig 12 and is recorded as a candidate, not a result.

---

## Q3. Where does the dependency chain break?

Dependency order from Fig 3: perception → vocabulary → objective → planning → learn and carry. Applied to a resilience measurement:

| link | what it requires here | status |
|---|---|---|
| perception | tell the disturbed state from what was there before | usually available; instruments return trajectories |
| vocabulary | have terms for displacement, return and basin boundary | partly available; "resilience" is an unbound ingredient word |
| objective | say what would count as recovery: which reference, which basin, which time horizon | **the break**; this is where most measurement work has no instrument |
| planning | aim the probe at the transient rather than only at the peak | downstream of the break; cannot be diagnosed until the objective is fixed |
| learn and carry | name what worked, verify it, carry it to the next disturbance | unreachable while the objective is unset |

Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."** Fig 3 :29-30 (read as a substring): *"Most improvement effort in practice lands above the break, because that is where the measurements already exist."* The field has excellent peak detectors and good return-time estimators. It has much less that states, in advance, which basin and which reference make a return a recovery. That is the missing middle link.

**Falsifier for Q3.** Show a measurement programme in which the objective link (reference and basin stated in advance) is instrumented and the resist/recover verdict still cannot be produced, while perception and vocabulary are working. Then the break is elsewhere and this table is withdrawn.

---

## Q4. Analogues and their limits

Three low-overlap analogues were considered. None is promoted to identity.

1. **The adaptive cycle and panarchy** (Walker et al. 2004; MathisonSlee et al. 2022). The four-phase cycle (growth, conservation, release, reorganization) resembles the recovery/reorganization distinction, and the rigidity-trap finding shows that high rigidity can reduce novelty. But the adaptive cycle is a heuristic for social-ecological dynamics, not a typed bond structure. It corroborates the union shape, not the operator typing. Overlap with the ecology evidence pool is maximal.
2. **Critical slowing down** (Scheffer et al. 2009). Rising lag-1 autocorrelation as a threshold approaches is a genuine instrument returning something about recovery rate. It corroborates that the trajectory reading is measurable. It does not by itself distinguish resistance from recovery, because a system can be slow to return for reasons that have nothing to do with proximity to a threshold. Corroboration of F5 only; no verdict weight on F1.
3. **Robustness versus graceful extensibility** (Woods, resilience engineering; Hollnagel's four potentials). This is the cleanest low-overlap analogue: robustness is the ability to deal with an anticipated challenge, graceful extensibility is the ability to develop new capability under surprise. It corroborates the two-reading shape from safety science, a genuinely different evidence pool. It is an analogue, not the figure derivation, and it is recorded as corroboration only.

**Analogue falsifier.** If any of these fields returns a measurement in which the "resistant" and "recovering" categories are the same bucket under a different name (perfect correlation with no discriminator), the analogue corroboration is withdrawn. The figure verdict does not depend on them.

---

## ORDER SUMMARY

1. Bond typing is load bearing: comparison for magnitude, sequence for trajectory, cycle for closure, negation for refusal (Q1).
2. Resistance and recovery are not isomers under the weak atom set; they can be isomers under the full shared set, with a functional-group reading in between (Q2).
3. The chain breaks at the objective link, where reference and basin must be stated in advance (Q3).
4. External analogues corroborate the shape from three pools but never decide it (Q4).

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` and the Operators table, re-opened this session. Walker et al. 2004, MathisonSlee et al. 2022, Scheffer et al. 2009, the resilience-engineering reference page and the Stockholm Resilience Centre dictionary were read via the URLs in `10_source_ledger.csv`. No new measurement was taken. Mode `specified`, candidate, not `grounded`.

## FIGURE CENSUS

Fig 3 (dependency order, the objective link), Fig 6 (instrument improved from a worse one), Fig 8 (provenance of converging readings), Fig 9 (filter versus witness), Fig 10 (channel failure), Fig 11 (enumerate the habitat), Fig 12 (bond types, isomer, functional group, cycle, level-relative irreducibility), Fig 13 (ordering versus duration), Operators table (⋛, →, ¬), `THE_FORMULA.md` (steps 2, 3, 7). One live strain: the operand type of ⋛ at the decision level. Named, not hidden.
