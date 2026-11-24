# Union, bond type and cascade order â€” supporting derivation

**Mode: `specified`, not `grounded`.** Simulated derivation checked against the figures (`05_what_shape_means.md` Â§6), not a ground reading.

## RESIDUAL

The question asks how five conditions "combine." Three structural questions are owed before any coefficient: (1) is the split a partition or a union; (2) which bond joins the operands; (3) in what dependency order do the effects propagate? A fourth follows: are two combinations with the same ingredients different substances?

## DOMAIN CENSUS

Atoms held in this frame: the enumerated habitat conditions (temperature, water, soil, season, terrain) and relations (pollination, predation, competition, dependency) of Fig 11 :46-48, plus a measured yield at the ground. Bonds held: the seven named bonds, including symmetric `+` and ordered `â†’`, `â‹›`, `âˆ’`. No eighth bond is available; Operators :68 â€” *"A relation that fails all [tests] is not an operator you are missing; it is a claim that has not been made yet."*

---

## Q1 â€” Partition or union?

- Fig 9 :4-5: *"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."*
- Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*
- Fig 9 :55-56: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."*
- Fig 9 :57-58: *"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."*

The five conditions overlap: heat raises water demand and so interacts with drought; drought changes pest susceptibility; soil water storage changes the effect of both drought and flood; flooding after drought is a sequence, not a coexistence. A partition would assign each yield loss to exactly one condition. That assignment is exactly what the factorial literature says cannot be done reliably (Li et al. 2025: *"cannot be inferred directly from their individual responses"*; Romero et al. 2019: *"hardly predictable from individual effects"*).

**Answer:** union. The intersections are specific compounds with their own loops and their own ground.

**Falsifier, written before the run:** if field data partition yield losses additively among the five with no residual interaction term, the union reading fails and the partition reading stands.

## Q2 â€” Which bond joins them?

- Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*
- Fig 12 :92: *"Under a symmetric bond, k operands have k! spellings and one term"* â€” with five operands, 120 spellings and one term if `+` holds.
- Fig 12 :117: *"isomer. Same atoms, different bond, different substance."*
- Fig 12 :87: *"a threshold relation between two quantities"* (the `â‹›` comparison definition).
- Operators :30 â€” sequence: *"A then B; B needs A to have happened"* (the `â†’` definition).

Three candidate bonds:

| candidate | test | world result |
|---|---|---|
| `+` symmetric conjunction | swap operands, does the meaning change? No | Coexists only as a null model. Meijer et al. 2026 found 58.1% additive observations in legumes, so it is common but not universal; Romero et al. 2019 found 71% additive combinations in biofilms but the non-additive 29% changed sign with duration. |
| `â†’` sequence | swap them, does it become a different thing? Yes | Flood after drought is not drought after flood. Romero et al. 2019: antagonisms rise from 59% at 48 h to 86% at 30 d. |
| `â‹›` comparison | is it about which is larger rather than both being present? Yes | Ribeiro et al. 2020: loss likelihood rises with compound severity; drought dominates heat in the compound. Cohen et al. 2021: effects are more severe at the reproductive stage. |

**Answer:** the bond is not `+` in general. It is `â†’` where timing or exposure duration carries the result, and `â‹›` where severity against a threshold carries it. Grading by severity is a **parameter on the held ordered bonds**, not an eighth bond (strain S2). Under `+` the five would be one term with 120 spellings; the world reports path dependence, so charging for sequence is correct here.

**Falsifier:** a stage-resolved full-factorial experiment showing exact additivity for all five across all severities and durations would kill the ordered-bond claim and leave `+` standing.

## Q3 â€” Are combinations isomers or a functional group?

- Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
- Fig 12 :123: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*
- Fig 12 :104: *"A settled molecule becomes an atom for whatever composes over it."*

Take the full held atom set `{temperature, water, soil, season, terrain, pollination, predation, competition, dependency}` plus a yield ground. Two combinations over that same set â€” say heatâ†’drought at flowering versus droughtâ†’pest at flowering â€” are **isomers**: same atoms, different bond and order, different substance. This is a stronger and more checkable claim than "the five are five causes."

As the question writes them (five named conditions with no shared structure specified), the combinations share only the kind `condition â†’ yield deviation`. Under Fig 12 :123 that is a **functional group** â€” the group says what kind, the qualifier says which member â€” not an isomer set. The isomer reading is earned only when both combinations are written over the full shared atom set.

**Falsifier:** if two combinations over the same atom set produce the same ground outcome under every stage and severity, the isomer claim fails and only the functional-group claim stands.

## Q4 â€” What is the dependency order of the cascade?

- Fig 3 :20 â€” *"The chain is ordered by dependency, not by importance."*
- Fig 3 :19 â€” *"Optimising a link that already works cannot rescue one that does not."*
- Fig 3 :27 â€” *"A link with no instrument is not a link that works. It is a link nobody has looked at."*
- Fig 11 :52-53 â€” *"Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."*

The perceptual link works: heat, rainfall and soil moisture are measured. The vocabulary link works: agronomy has terms for water deficit, heat stress, waterlogging, pest pressure and soil organic matter. The objective link is the one that lacks an instrument for the joint case: what counts as the combined yield deviation, and how is it partitioned among the five? Fig 3 :25-26: *"has neither, so it attracts the least attention and the fewest instruments."*

Cascade order for this question:

1. Temperature and precipitation forcing (D3) change soil water and atmospheric demand.
2. Soil water and temperature change crop physiology and soil biota (D1, D2).
3. Crop physiological state changes susceptibility to pests and pathogens (D2 relation link).
4. Yield deviation is read at the harvest ground.
5. Yield deviation propagates to price, food security and simultaneous regional losses (scale 3, D5).

Step 3 is the "three steps out" residual. SkendÅ¾iÄ‡ et al. (2021) give a concrete mechanism: xylem cavitation in drought-stressed plants emits ultrasonic acoustic emissions detected by bark beetles, and drought-stressed plants produce fewer defensive secondary metabolites. A first-order census of heat and drought alone would not see it.

**Falsifier:** if yield variation is fully accounted for by step 2 with no residual at step 3 across sites, the cascade claim fails.

## Q5 â€” Does the substrate set apply directly? (retraction, kept visible)

A first pass was tempted to read heat and drought as two states joining directly, and to apply Fig 13 :75 (*"Two states never bond directly"*) to them. **Retracted.** Fig 13 governs the six physical states and structures (space, time, energy, spectrum, gradient, network). Heat, drought, floods, pests and soil change are habitat conditions and relations under Fig 11 :46-48, not members of the six. Applying Fig 13 to them is a category error, not a strain to be smoothed. Re-census assigns each figure to its own object (strain S1 dissolved). The figures are consistent; the first reading was wrong.

## CONCLUSION

The five conditions are a union with binding intersections, not a partition; the joining bond is ordered (`â†’`) or threshold-comparative (`â‹›`) and only additively `+` as a testable null; two combinations over a shared atom set are isomers, and as written they are a functional group; the causal order is a contact cascade whose third-order residual is the one that matters; and the Fig 13 substrate does not apply directly to habitat conditions.

The falsifiers above were written before the run. They are repeated in `08_expert_verification_packet.md` and `09_watson_answer.md`.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session; `THE_FORMULA.md`; the two essays opened this session. No field measurement was used.

## FIGURE CENSUS

Fig 1 (per-slot), Fig 2 (anchor and independence), Fig 3 (dependency order), Fig 6 (closure and import), Fig 8 (provenance), Fig 9 (union, split, shape), Fig 10 (channel), Fig 11 (habitat, cascade, valence), Fig 12 (bond, isomer, functional group, recursion), Fig 13 (substrate, re-census), Operators (sequence, comparison, no eighth bond). Strains after re-census: S2 (severity grading is a parameter, not a bond) and S5 (five-way coefficient unreachable at this budget). Both are named, not hidden.
