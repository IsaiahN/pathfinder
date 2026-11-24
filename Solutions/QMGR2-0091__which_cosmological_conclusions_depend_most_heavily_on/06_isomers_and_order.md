# Calibration hierarchies: order, isomers and the two currencies

**Mode: `specified` on the structural claims, `general` on the order claim, not `grounded`.** This is a simulated derivation checked against the figures, not a ground reading (see `05` section 6).

## RESIDUAL

The audit isolates three unclosed items: (1) the order within a calibration hierarchy, (2) whether two routes to the same scale are isomers or merely members of a functional group, and (3) why cheap-to-state model extensions and expensive-to-settle calibrations cannot be compared on one numeric scale. Each is owed a derivation and a falsifier.

## DOMAIN CENSUS

Atoms held for D1: geometric anchor, rung indicator, calibrated ruler, model relation, datum. Bonds held: the seven plus negation. No new atom is available without import. Currency in D1: propagated scale and uncertainty. Anchor: the non-updating ground. For D2 the atoms are the base parameters and the bond is the model relation that produces derived parameters.

## DERIVATION

### Q1 - What order is a calibration hierarchy?

- Fig 3 :20 "The chain is ordered by dependency, not by importance."
- Fig 3 :19 "Optimising a link that already works cannot rescue one that does not."
- Fig 12 :46 "A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."

A calibration hierarchy is a **sequence**, the ordered bond `→` (Operators table: "A then B; B needs A to have happened"). The geometric anchor must be settled before the rung can be calibrated; the rung before the ruler; the ruler before the model inference; the model inference before the conclusion. Reversing the order is not a different spelling of the same chain, it is a different term. This matches VIM3 2.40: a calibration hierarchy is a sequence in which the outcome of each calibration depends on the previous one, and uncertainty necessarily increases along it. **Falsifier:** derive a conclusion's scale without settling any upstream rung, and show the resulting value is not underdetermined; that would break the order claim.

### Q2 - Are two routes to a scale isomers?

- Fig 12 :117 "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Fig 12 :124 "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

As the literature writes them, the local ladder `{geometric anchor, Cepheid, SN Ia absolute magnitude, Hubble-flow SNe}` and the early-Universe ladder `{baryon density, matter density, recombination physics, sound horizon, acoustic scale}` share almost no atoms. By Fig 12's definition they are **not isomers**; they are two members of the same **functional group**, an anchor-to-scale route with different qualifiers. That is the honest weaker claim, and it is already enough for F6: sharing a functional group means sharing the failure mode "if the anchor is a frame, the output moves".

The stronger form: if both are written over the full shared atom set `{anchor, rung, ruler, model relation, datum}` and differ only in which rung and which model relation occupy the slots, then they **are** isomers under Fig 12 :117. That is the claim worth testing, because isomerism would make the difference in behaviour decisive rather than accidental. **Falsifier:** if either route can be written without an atom the other requires and still produces the same scale, the isomer claim fails and the functional-group reading stands. (For H0, this is exactly what the inverse distance ladder tests: it replaces the stellar rung with the sound horizon and still reaches a scale, so the shared atom set must include both, and the analogy is limited. Recorded as a strain, not smoothed.)

### Q3 - Base versus derived parameters are joined by a bond, not a degree

- Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom"
- Fig 13 :74 "Everything else is a composition across the two kinds, never within one."

The base CMB parameters are settled within the CMB closure, so each becomes an atom at the next level. H0 is a molecule composed from those atoms plus a model relation, then settled (or not) against a different ground. The difference between base and derived is therefore a **bond** (what joins the atoms), not a larger or smaller uncertainty on one list. This is why a paper can truthfully say both that its primary results are weakly model-dependent and that its inferred H0 is model-dependent: the two sentences are about different molecules. **Falsifier:** show a derived parameter that does not gain a model bond, or a base parameter that does; then the partition in D2 is wrong.

### Q4 - Description cost and settlement cost do not add

- Fig 12 :125 "A composition costs in two currencies, and they do not add."
- Fig 12 :126 "Bits price the description. Actions price finding out whether it holds."

A model extension can be cheap to state (one new parameter, a few bits) and very expensive to settle against the CMB and BAO simultaneously. A Cepheid period-luminosity correction can be moderately expensive to describe and comparatively cheap to refute with a better geometric anchor. Neither cost predicts the other. Summing them into one "model dependence score" is the error Fig 12 names, not the fix. This is the structural reason the numeric ranking in F9 is a gap that an instrument, not an argument, must close. **Falsifier:** exhibit a single currency in which both costs are commensurable and in which the per-conclusion ranking is invariant under change of unit; the figure asserts they are in different units.

### Q5 - A refusal is owed, not an average

- Operators table :58 "a refutation is a negation, which is why a vocabulary without it can only accumulate"
- Fig 8 :39 "So a search that finds nothing is never a proof of absence."

When a conclusion fails the anchor test, what is owed is a refusal of its standing as a ground-anchored result, not a re-weighting of it. Operators :58 distinguishes negation from subtraction: subtraction removes an operand, negation refuses a claim. Averaging a moving calibration with a non-moving anchor into one uncertainty budget keeps the moving term's standing and is therefore the accumulation failure. **Falsifier:** show that a failed anchor test can be repaired purely by reweighting without changing contact; Fig 11 :40 says an improvement that does not change contact changes nothing.

## CONCLUSION

A calibration hierarchy is an ordered sequence (Fig 3 :20) whose links carry typed bonds (Fig 12 :46). Two routes to the same scale are, as written, a functional group rather than isomers; the isomer reading requires the stronger shared-atom condition and has a stated falsifier. Base and derived parameters differ by bond (Fig 12 :104), which dissolves the apparent contradiction in the Planck abstract. Description cost and settlement cost are two currencies (Fig 12 :125-126), so the numeric ranking is owed to an instrument. A failed anchor test demands a refusal (Operators :58), not an average.

Mode: `specified` on Q2 to Q5, `general` on the order claim in Q1. No measurement was used.

## ANCHOR

Verbatim figure text extracted from the local figure files this session; the VIM metrology definitions opened this session; the SEP measurement entry opened this session. No cosmological datum was used.

## FIGURE CENSUS

Fig 3 :19/:20 (chain order), Fig 8 :39 (search is not absence), Fig 11 :40 (contact), Fig 12 :46/:104/:117/:124/:125/:126 (bond, level, isomer, functional group, two currencies), Fig 13 :74 (composition across kinds), Operators table :58 (negation). Strains after re-census: one live, the shared-atom condition on the isomer claim, because the inverse distance ladder really does substitute one rung for another; named, not hidden.
