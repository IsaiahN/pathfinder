# Isomers and order: verification, validation, and the subgrid bond

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

The audit names two unbundled conditions, numerical fidelity (C1) and physical fidelity (C2), and reads two codes with the same ingredients but different subgrid feedback as isomers. Three questions are owed: (1) is the verification/validation distinction a union or a partition, (2) are two same-ingredient codes genuinely isomers under Fig 12's definition, and (3) what is the dependency order in which the two conditions must be checked?

## DOMAIN CENSUS

Atoms held: the solver, resolution, initial conditions, gas, stars, black holes, feedback, enrichment, dust, and observation. Bonds held: the seven, including `→` sequence and `⋛` comparison. No new primitive is available without an import. The anchor for C1 is an analytic test problem; the anchor for C2 is the sky. Two different anchors in one question means a union, not a partition.

## DERIVATION

### Q1 - Is verification versus validation a partition or a union?

- Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*
- Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*
- Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*
- A code can pass verification and fail validation, fail verification and (accidentally) pass validation, or fail both. The four cases are not degrees of one failure; they need different instruments.
- NAFEMS/Oberkampf 2021, a low-overlap engineering frame: verification is *"everything to do with the issue of the solution of the mathematical model"*, validation with *"how well the model results compare to experimental measurements"*, *"two completely different issues"*. This is a corroboration of the structure from outside astronomy, recorded as an import with provenance (Fig 6 :23), not as a verdict.
- **Result:** a union. C1 and C2 are unbundled. A single lever, more particles, clears the C1-only region and leaves the intersection standing, because refinement inside a closure cannot add a bond (Fig 6 :21).
- **Falsifier, written before the run:** one instrument that settles both conditions with no categorically different residue left over. If such an instrument exists, the union collapses into a partition.

### Q2 - Are two same-ingredient codes isomers?

- Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*
- Fig 12 :14: *"the ingredients are recorded and the arrangement is not"*
- Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
- Crain and van de Voort 2023: *"Similar galaxy populations can emerge in simulations with dissimilar subgrid feedback implementations. However, these models generally predict markedly different gas flow rates into, and out of, galaxies and their haloes."* The ingredient list and the calibrated population are the formula; the gas flows are the behaviour in which the difference is decisive.
- **Result:** yes, in the figure's exact sense. Two suites over the same atom set (dark matter, gas, stars, black holes) with different feedback bonds are isomers. The review is careful to add that *"There is no guarantee that the reproduction of a particular observable represents a unique solution"*, which is the same claim from the modelling side.
- **Falsifier:** two codes with different subgrid feedback that agree within observational uncertainty on gas inflow and outflow rates, CGM absorption and dust attenuation, so the bond difference stops being decisive in any observable. Then they are not isomers in the figure's sense. Status: triangulated for the figure definition (Fig 12 and Fig 6, low overlap), single-source and unmeasured for the astronomy instance.

### Q3 - What is the dependency order of the checks?

- Fig 3 :20: *"The chain is ordered by dependency, not by importance."*
- Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*
- Order: 1 perception (can the observation resolve the component?), 2 vocabulary (does the model have subgrid terms for it?), 3 objective (which observable and tolerance count as progress?), 4 planning (which resolution and calibration set?), 5 learn and carry (settle against held-out data and carry up).
- Fig 3 :24-27: the middle link, vocabulary and objective, breaks first because it has the fewest instruments. In this question that is the subgrid bond and the choice of calibration observable, not the solver.
- Fig 3 :29: *"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."*
- **Result:** check perception and vocabulary before spending on resolution. A code that fails at link 2 cannot be rescued by work at link 4. van de Sande et al. 2018 illustrate the same ordering from the observational side: they matched measurement techniques to surveys *"as closely as possible"* before comparing structure and kinematics, because a mismatch at link 1 makes the downstream comparison unreadable.
- **Falsifier:** a documented case where a simulation's failure is located at planning (link 4) while perception, vocabulary and objective all measure as working. That would falsify the "usually at the middle" claim, though not the dependency ordering itself.

### Q4 - What is the round-trip order in calibration?

- Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*
- Symbols table: `R_T = gap(x, (T_E ∘ T_A)(x))`, the gap between what was sent up and what came back down, measuring what the coarser description cannot hold.
- The calibration loop sends a full observed galaxy up to a few statistics (abstraction `T_A`), tunes the model to those statistics, and brings the model back down to mock observables (concretisation `T_E`). The calibration statistics cannot hold everything the galaxy had, so R_T is nonzero by construction.
- Crain and van de Voort 2023: *"the characteristics used for the calibration cannot be considered as predictions of the simulation."* van de Sande et al. 2018 is the round trip executed: the mocks were projected and measured with methods matched to four surveys, and offsets in size, ellipticity, velocity dispersion and age appeared that the mass-function match alone did not predict.
- **Result:** report R_T alongside any calibration claim. Treating a match on the calibration statistic as a match on the galaxy sets R_T to zero, which is the dead-reckoning error Fig 4 :30 names.
- **Falsifier:** a calibration statistic that preserves all information needed to predict every other observable, so the round trip is lossless. If one exists, Q4 fails.

## CONCLUSION

Verification and validation are a **union** of two conditions with different anchors and different instruments, not one scale of goodness. Two codes with the same ingredients and different subgrid feedback are **isomers** under Fig 12 :117: the difference is invisible in the ingredient list and decisive in gas flows. The check order is by dependency, perception and vocabulary before planning, so resolution work cannot rescue a missing subgrid bond. Calibration is a lossy round trip whose gap R_T must be reported rather than assumed zero. This framing keeps what is defensible in the "simulations are accurate" claim without asserting a number or naming a winning code.

**Strain after re-census:** none. An earlier attempt to read the six-term substrate as a taxonomy of gas, stars and dust was strained and retracted; Fig 13 governs composition rules and the honest stop, not a classification of baryons (see `01` section 6, S1).

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; the essays and the astronomy sources listed in `10_source_ledger.csv`, all opened 2026-11-23. No measurement of any code's error was used.

## FIGURE CENSUS

Fig 3 (dependency order, middle link), Fig 4 (round trip and R_T), Fig 6 (import is the only operator that moves the wall), Fig 9 (union versus partition, unbundle before search), Fig 12 (isomer, arrangement is the substance), Symbols table (R_T definition), Formula (steps 3, 5, 7). Strained after re-census: none.
