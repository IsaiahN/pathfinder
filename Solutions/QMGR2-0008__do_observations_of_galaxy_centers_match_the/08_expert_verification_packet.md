# Expert verification packet — the Tether on galaxy-center dark-matter profiles

**What this is:** a set of claims in a form an astronomer or cosmologist can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` — not `grounded`.** No measurement is claimed by this derivation. It offers a per-slot shape, a route and four refuters, not a result.

## 1. The claim, in one paragraph

The residual between predicted and inferred dark-matter profiles in galaxy centers is indexed by object, not aggregated: in many low-mass systems the inferred inner enclosed mass is below the collisionless cusp prediction, while more massive dwarfs and some ultra-diffuse galaxies are consistent with the cusp. The cusp prediction is correct inside the dark-matter-only closure, and no further search inside that closure produces a core. A candidate core-forming mechanism exists in a different closure (baryonic feedback driving potential fluctuations), but it is an import with provenance, not a framework derivation, and it does not close every reported deficit. The live problem is the measurement channel: an inferred profile is a reading of a potential, not a direct measurement of dark matter. The framework returns the shape of an answer (less central mass at fixed V_max in the low-mass slots) and does not name the mechanism.

## 2. Three checkable sub-claims

### C1 — framework-internal; checkable by reading Figure 1

- **Statement:** the residual is per object slot. A single match/mismatch score is inadmissible, whatever its sign.
- **Source, verbatim:** Fig 1 :19, *"The residual is indexed by object slot, not aggregated."* Fig 1 :22, *"Aggregating across slots is how a live signal disappears into an average."*
- **Physics-facing content:** the observational literature already reports a distribution at fixed maximum rotation speed. Oman et al. (2015): *"Some dwarfs have rotation curves that agree well with simulations, others do not."* Cooke et al. (2022) finds *"cuspier profiles than lower mass dwarfs"* in six massive dwarfs.
- **Refuter:** a well-measured population in which every slot at fixed V_max has the same inner slope equal to the cusp would collapse the per-slot verdict to a single yes. Show that and this claim is withdrawn.

### C2 — physics-facing; checkable by an astronomer against the measurement chain

- **Statement:** the inferred inner profile is a reading through a channel that can fail, and that failure is a different domain verdict from the model verdict.
- **Source, verbatim:** Fig 10 :24, *"the ground does not decay, the channel does"*. Fig 2 :29, *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*
- **What to check:** dark-matter density profiles are not directly observable and are inferred from rotation curves (reference overview). Sands et al. (2024) report that for well-ordered gaseous disks the measured curve may deviate from the true circular velocity by at most 10 percent, but that *"non-equilibrium behavior, non-circular motions, and non-thermal and non-kinetic stresses may cause much larger discrepancies of 50% or more,"* and that the responsible features are *"not always visibly obvious in HI observations."*
- **Refuter:** an independent mass probe (stellar kinematics, lensing or proper motions) that agrees with the gas-kinematics inferred profiles in the same slots, with no shared reconstruction systematics, closes this strain. Report it and this claim is withdrawn.

### C3 — framework-internal derivation with a physics-facing provenance check

- **Statement:** a constant-density core is not reachable by composing inside the collisionless N-body closure; the atom that produces it enters by import from a frame whose closure differs, with a source gate and a shadow test.
- **Source, verbatim:** Fig 6 :21, *"MINT composes inside the closure and can never add an atom."* Fig 6 :23, *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* Fig 8 :50, *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"*.
- **What to check:** NFW (1997) reports a universal cusp-like family from collisionless N-body. Pontzen and Governato (2012) report that *"fluctuations in the central potential irreversibly transfer energy into collisionless particles, thus generating a dark matter core,"* and that both outflows and fountains can flatten cusps even when only a few percent of baryons form stars. Is that import provenanced (published, cited, with its own tests)? Does it explain the specific deficit, or only the qualitative existence of cores?
- **Refuter:** (a) a dark-matter-only simulation producing a stable constant-density core without baryons or changed microphysics, surviving convergence tests, breaks the closure part; (b) a demonstrated failure of repeated potential fluctuations to produce the observed deficit at fixed V_max fires the source gate and refuses the import. Either is a refutation, not an adjustment.

## 3. What is explicitly not claimed

- Not that the simulations are wrong. The cusp prediction is correct inside its closure.
- Not that the observations are wrong. The readings are real; the inference is the contested link.
- Not that cold dark matter is falsified. A per-slot residual with an open channel is not a model verdict.
- Not that baryonic feedback solves the problem. It is a candidate import, and Oman et al. report deficits *"well in excess of that reported in recent simulations."*
- Not that all dwarfs are cored. Massive dwarfs and some ultra-diffuse galaxies show cusps.
- Not that cusp and core are different dark matter. They are arrangements over shared atoms (Fig 12 :117).
- Not `grounded`. Nothing here is asserted as settled by experiment.

## 4. Provenance

- This packet compiled 2026-11-23. Question QMGR2-0008, source line 144, section A. Dark matter.
- Figure text extracted verbatim from Isaiah's 13 SVGs plus the Operators and Symbols tables; local canonical extract at `FRAMEWORK/reference/03-FIGURES_TEXT.md`.
- Canonical usage rule at `FRAMEWORK/reference/FIGURES_README_canonical.md`; metalaw reading at `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`.
- World sources were opened on 2026-11-23 and are recorded with author, venue, year, quote, field and overlap in `10_source_ledger.csv`. Overlapping astrophysics pools are declared, not hidden.
- The derivation is simulated. *The Recursive Self-Improvement Trap* (fresh 2026-11-23): *"the truly testable output would need to be derived from the real architecture or working the formula yourself."*

## 5. What would settle it

1. **Slot test:** an independent mass probe showing low-mass dwarfs at fixed V_max have NFW-consistent inner slopes. Refutes the cored-slot reading.
2. **Channel test:** agreement between rotation-curve inferred profiles and independent mass probes in the same slots. Closes C2.
3. **Import test:** a hydrodynamical simulation reproducing the observed inner mass deficits at fixed V_max from observed star-formation histories, with convergence and resolution tests reported. Closes C3.
4. **Structure test:** a demonstration that the residual is a partition rather than a union compound, which would force a re-census of the whole derivation.

If 2 and 3 close every slot, the import stands and no refusal is owed. If they do not, the fifth kind of residual applies (Fig 5 :53, *"refuted: a term we hold is wrong; a term is owed that says so"*) and the correct output is a negation of the held binding, not another explanatory story.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19 and :22, Fig 10 :24, Fig 6 :21 and :23, Fig 8 :50, Fig 12 :117. Six short passages.
2. Check C1 against your own knowledge: is the observed inner-slope distribution at fixed V_max really non-uniform? Name one counter-case if not.
3. Check C2: name an independent mass probe for the same objects and say whether it shares the H I/CO reconstruction systematics.
4. Check C3: does the cited feedback mechanism have a published, tested provenance, and does it reproduce the magnitude of the deficit at fixed V_max?
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
