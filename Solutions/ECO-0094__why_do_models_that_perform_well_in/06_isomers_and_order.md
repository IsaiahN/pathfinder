# Transfer as an ordered bond: isomers, functional groups and the round trip

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

The question's shape says that transfer is habitat substitution. Two supporting questions are owed: (1) is transfer a symmetric relation or an ordered bond, and (2) if two models share the same predictors but differ in how they are joined, are they variants of one model or different substances? A third question follows: what is the round-trip gap when a local fit is carried up to a general claim and brought back down?

## DOMAIN CENSUS

- **R.** Arity three (M, A, B), ordered (A to B differs from B to A), scale two (local fit versus general application).
- **D1, model structure.** Atoms: predictors, response, background conditions. Bonds: the seven, especially → (sequence), + (conjunction), ⋛ (comparison). Currency: description length plus settlement cost. Anchor: ground A.
- **D2, habitat structure.** Atoms: actors, conditions, relations (Fig 11 :45-47). Bonds: the relations themselves. Currency: contact. Anchor: ground B.
- **D3, the transfer.** The ordered crossing between D1 and D2. Currency: the round-trip gap R_T. Anchor: independent ground B.
- **Order by dependency.** Fix the atoms, then the bonds, then the crossing, then the check (Fig 12 :103-106, Fig 4 :27-30).

## DERIVATION

### Q1: Is transfer symmetric? CORRECTION TO MY FIRST READING

- Operators table: → is sequence, "A then B; B needs A to have happened", with symmetric = no and the test "swap them. Does it become a different thing? Yes."
- Fig 12 :111: "A vocabulary without bonds can name a state and cannot name a route to one."
- Transfer from A to B is not transfer from B to A. The source habitat sets the closure; the target habitat is imported. Swapping them swaps which closure is held and which is imported, which is a different thing.
- **I initially wrote the residual as R(A,B), a symmetric function of two regions. That was wrong.** It is R(M, A → B), an ordered composition. The correction is kept visible. Verdict: `general`, triangulated (Operators table + Fig 12 :111).

### Q2: Are two models with the same predictors variants or isomers?

- Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Fig 12 :95: "Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond." (checked as part of the figure text; the exact opening of the line reads "Two entries with an identical ingredient set are not variants of one thing.")
- A model fitted in A and a model fitted in B may contain the same predictors (temperature, cover, season) but join them differently (temperature + cover in A, temperature ⋛ season in B). By Fig 12 they are **isomers**, not a better and worse version of one model. Their ingredient lists look interchangeable; their behaviour under transfer is not.
- This is why transferring coefficients rather than methods is the flat-formula error (Fig 12 :13-17): the ingredients are recorded and the arrangement is not, so nothing downstream can tell the two apart.
- **Falsifier, written before the run:** if two independently fitted models with identical predictor sets but different internal structures show identical residuals under a documented habitat swap, the isomer claim fails and the flat-form reading stands instead.

### Q3: What is shared across all such models?

- Fig 12 :123: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."
- Every fitted ecological model here shares a functional group: predictor atoms bonded so as to predict a response against a ground. The **qualifier** is the habitat. The group says "a predictive molecule"; the qualifier says "the one settled in A".
- This explains why a model can look general in form and still fail: the form is the group, the habitat is the qualifier, and the qualifier is not recoverable from the form (Fig 12 :95-96).

### Q4: What is the round-trip gap R_T for a transferred model?

- Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."
- **Sent up (x):** the local fit in A, including its per-site residuals and its habitat enumeration.
- **Abstraction (T_A):** "this model predicts the response" (a method-shaped description with the habitat stripped out).
- **Concretisation (T_E):** apply that description in B, then compare with independent observations in B.
- **R_T is nonzero in general.** What the abstraction drops: the valence of each predictor relative to A's residual, the second-order contacts enumerated in A, the bond arrangement that made the fit work, and the fact that B's habitat was never authored. What survives: the functional group and the requirement that a ground settle the result.
- R_T is not measured numerically here, because no ground reading was taken. It is recorded qualitatively as the enumerated set of dropped constraints. Treating "a fitted model is a general rule" as identity would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names.

### Q5: Spatial and temporal transfer are different terms

- Fig 13 :76: "A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is."
- A model moved across regions is bonded to space; a model moved across periods is bonded to time. These are different molecules, not the same molecule tested twice. Evidence for one is not evidence for the other, by the figure's own identity rule.
- This is a second-order reason why a single "transferability" score is not a single quantity: it averages over two different bond types. Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

## CONCLUSION

Transfer is an **ordered** composition (A → B), not a symmetric relation. Models fitted in different habitats but built from the same predictors are **isomers** (same atoms, different bond, different substance), not versions of one model. What they share is a **functional group** whose qualifier is the habitat. Carrying a local fit to a general claim and back incurs a **round-trip gap R_T** that must be measured, not assumed zero. Spatial and temporal transfer are **different terms** under Fig 13 :76.

This framing recovers what is defensible without inventing a new primitive. It does not name which predictor or interaction caused any specific failure; that stays `gap` until a ground reading closes it.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` reopened this session. The Operators and Symbols tables in that extract. No measurement was used.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 4 (membrane, recording, round trip), Fig 11 (habitat, valence), Fig 12 (ordered bonds, arrangement, isomer, functional group, settled molecule, vocabulary without bonds), Fig 13 (gradient over space versus time), Operators (→ is ordered), Symbols (R is per slot, R_T is the round trip). Strains after re-census: none. The one open instrument question is whether a given pair of fitted models shares enough atoms for the isomer claim to apply; that is empirical, not a figure conflict.

## FALSIFIER (pre-registered)

1. Transfer is shown to be symmetric under a controlled swap of two documented habitats with the model unchanged (breaks Q1).
2. Two models with identical predictor atoms but different internal structures show identical residuals under a habitat swap (breaks Q2).
3. Measured R_T for a transferred local fit is zero on independent ground in three target regions, reproduced by a second group (breaks Q4).
4. A spatial transfer and a temporal transfer are shown to be the same term by an instrument that discriminates the bond type (breaks Q5).

If any fires, the corresponding part of this supporting derivation is withdrawn and the primary audit is re-censused.
