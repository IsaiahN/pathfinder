# Isomers and order: correlation versus causal explanation as an operator distinction

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

Given X and Y with a stable observed correlation, three questions are owed:

1. What is the structural difference in what the two claims carry?
2. Where do the extra atoms come from, if at all?
3. Are the competing causal readings different things under the figure's definition of "different", or just different spellings of one thing?

## DOMAIN CENSUS

- **Atoms held:** X, Y (observed variables), plus any confounder Z or mechanism M that the frame may already hold or must import. Bonds held: the seven, including symmetric `+` (conjunction) and ordered `→` (sequence), `⇒` (production), `−` (subtraction), `⋛` (comparison); plus negation `¬`.
- **Symmetry:** correlation is symmetric; the causal relations are ordered. This is not a naming preference, it is a property of the operator.
- **Scale:** first order inside one dataset (the correlation, the fitted model); second order across datasets, interventions or instruments (the comparison of two causal readings against the ground).
- **No new primitive is available** without a sourced import (Fig 6 :23). The explanatory structure must be built from the operators already held.

## DERIVATION

### Q1 - What is the exact operator difference?

- Fig 12 :59, for a symmetric bond: "swap the operands. Does the meaning change? No."
- Fig 12 :74, for an ordered bond: "swap them. Does it become a different thing? Yes."
- Fig 12 :46-47: "A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands. A recipe that names only its ingredients has recorded half of itself."
- Operators table :4-5: "The bond carries information the operands do not, so a term that names only its ingredients has recorded half of itself."

A correlation records `X + Y` (both hold at once) plus a strength. Strength is a magnitude, not a relation type: it tells how reliably the pair appears, not what joins them. The causal explanation adds `X → Y` (sequence) or `X ⇒ Y` (production). Fig 12 :77: "A produces B; B did not exist before." Fig 12 :72: "A then B; B needs A to have happened."

**Result:** the extra information is a *choice of relation type*, which is why it is not recoverable from the operands. This is the smallest figure-grounded answer to "what makes it more informative": the bond is the rest of the information.

### Q2 - Arity: the hidden third term

- A correlation is a binary reading: r(X,Y), symmetric.
- Confounding, reverse causation and direct production are not distinguished at arity two. Each requires a third term: a common cause Z, a reversed direction, or a mechanism M.
- Fig 9 :30-31: "your words are borrowed too, so describe the effect rather than the cause." So the third term must be described in effect terms before a frame is chosen.
- Formula "Habitat": "Everything in contact with R, then what is in contact with those, outward until the cascade stops mattering." The confounder is often two steps out, not one (the ice-cream/drowning case: season and temperature).

**Result:** "more informative" also means *higher arity with the hidden term made explicit*. A correlation that silently keeps arity two while acting as if it were three is a flat formula, not a causal explanation.

### Q3 - Are the competing readings isomers?

- Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Fig 12 :123: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

Held fixed: the observations of X and Y, hence the same correlation. Varied: the bond arrangement among {X, Y, Z, M}. Under Fig 12 these are isomers: same ingredients, different bond, different substance, with the difference invisible in the flat correlation and decisive under intervention. This is exactly the structure the world sources describe: two systems of structural equations can agree on all observed correlations and disagree on an intervention (SEP, *Causation and Manipulability*), and the do-calculus exists precisely because the two conditioning operators are not interchangeable (Pearl 1995; SEP *Causal Models*).

Weaker reading: all three stories share a functional group, "two co-varying variables plus an unobserved background". The qualifier (which variable is the parent) decides the member. The functional-group claim is weaker but still an advance on the flat formula, because it records that a hidden slot exists.

- **Falsifier, written before the run:** if two competing causal readings that produce the same correlation also agree on every intervention of interest, the isomer claim fails for this question and only the functional-group reading stands. If one reading requires an atom the other cannot express, the "same atoms" premise fails and they are not isomers at all.

### Q4 - Order and scale

- First order: a correlation over one dataset. It is a recording of one occasion (Fig 4 :25 "A recording carried upward looks like knowledge and is a description of one occasion").
- Second order: the comparison of that correlation against an intervention outcome, or against another frame's causal reading. The first-order object, once settled, becomes an atom for the second (Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it").
- The operator that compares two settled readings is `⋛` (comparison), defined in the Operators table :49 as "a threshold relation between two quantities". Whether two settled causal models count as quantities at that level is a type question needing an instrument, not an argument. **Recorded as a strain, not smoothed.**
- Dependency order: describe the residual (correlation fails under intervention), then choose the causal frame, then settle the bond, then compare readings (Fig 3; Fig 9 :27-28).

### Q5 - The two currencies

- Fig 12 :125 "A composition costs in two currencies, and they do not add."
- Fig 12 :126 "Bits price the description. Actions price finding out whether it holds."
- Fig 5 :26 "does the new term cost less to state than the confusion it removes?"

An ordered bond costs more bits than a symmetric co-occurrence (the bond is charged for what it could have been) and buys a reach in actions. A correlation is cheap to state and may be costly to act on. Ranking "informativeness" by bits alone would prefer the correlation; ranking by successful interventions alone would prefer the causal claim. Fig 12 :130: "Summing them into one figure is the error this names, not the fix for it." Hence the answer is domain-scoped, not a single scalar.

## FALSIFIER (pre-registered, before the conclusion)

The whole structural derivation fails if any of the following holds:

1. A symmetric relation is found to determine `P(Y | do(X))` for all interventions of interest with no extra assumptions.
2. The competing causal readings with the same correlation are not isomers because they never disagree on any intervention that can be run.
3. The extra bond can be written at zero cost under a declared code, meaning it carries no choice and therefore no information.
4. A scalar currency is exhibited in which description bits and intervention actions add without loss.

## CONCLUSION

The operator distinction is exact and figure-derived: correlation is symmetric co-occurrence, causal explanation is an ordered typed bond with a third, hidden term made explicit. Competing causal readings over the same observations are isomers in the figure's sense, with the difference invisible in the correlation and decisive under intervention. The union is second order and depends on first-order readings having been settled. The "more informative" claim is therefore about arrangement and reach, not about fit, and it must be stated per domain because the two currencies do not add. Mode `specified`, ungrounded; the type of `⋛` at second order is the live strain.

## ANCHOR

Verbatim figure text: local `FRAMEWORK/reference/03-FIGURES_TEXT.md`. No measurement was used. World corroboration from SEP *Causal Models*, SEP *Causal Approaches to Scientific Explanation*, SEP *Causation and Manipulability*, Pearl (1995) and Kinney (2023), all read 2026-11-23; those sources share a tradition and are one broad witness, not several independent ones.

## FIGURE CENSUS

Fig 4 (recording versus generator), Fig 5 (MDL bargain), Fig 6 (import and effect terms), Fig 8 (provenance), Fig 9 (describe before looking; effect rather than cause), Fig 10 (ground), Fig 11 (contact), Fig 12 (symmetry, bond, isomer, functional group, two currencies, settled molecule), Operators table (`+` versus `→` `⇒` `⋛`), Formula (Direction, Habitat, step 5). Strains after re-census: the operand type of `⋛` at second order, named above.
