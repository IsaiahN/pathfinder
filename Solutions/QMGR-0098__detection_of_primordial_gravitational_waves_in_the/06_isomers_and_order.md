# Union, functional groups and dependency order in the PGW residual

**Mode: `specified` on the separations, `general` on the structural shape.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

The residual is unseparated degree-scale B-mode power (R in `01`). Three questions are owed: (1) is the residual a partition or a union; (2) are the recombination and reionization windows isomers or members of a functional group; (3) what is the dependency order of the instrument chain, and where does it break.

## DOMAIN CENSUS

Atoms held in the physics frame: tensor perturbation, scalar perturbation, E-mode polarization, B-mode polarization, gravitational lensing potential, Galactic dust, synchrotron, free electrons at recombination, free electrons at reionization, frequency channels, external mass tracers. Bonds held: E→B by lensing (second order, scalar), tensor→B (first order), dust→B (foreground emission), synchrotron→B (foreground emission), frequency separation (a cross-kind composition), delensing (a subtraction mediated by an external mass map). No new physical primitive is available without import. The figures contribute the typed-bond and level-relativity rules, not a new astronomy.

## DERIVATION

### Q1: Partition or union?

- Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*
- Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*
- The three conditions (tensor, lensing, foreground) overlap in multipole space and in frequency space. Dust and synchrotron correlate. Lensing and tensor occupy the same degree-scale band at different amplitudes.
- ⇒ **Union.** A single frequency or a single sky patch clears the region where only one condition holds and leaves the intersections standing. The BK18 likelihood (lensed-ΛCDM + r + dust + synchrotron + noise, with a correlation parameter) is the union written as a joint model.
- **Falsifier:** a single observable that separates the tensor component from all other components without multi-frequency or external-tracer information. If one exists, the residual is a partition and this finding fails.

### Q2: Are the two angular windows isomers?

- Fig 12 :117: *"isomer. Same atoms, different bond, different substance."*
- Fig 13 :76: *"A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is."*
- Fig 12 :124: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*
- The recombination bump (ℓ ≈ 80) and the reionization bump (ℓ ≤ 10) share the tensor source and the E/B parity conversion. They are bonded to different states: free electrons at last scattering versus free electrons at reionization. Because *which state it is bonded to is part of what it is* (Fig 13 :76), the atom sets are not identical, so Fig 12's isomer definition is not met.
- ⇒ They are **two members of one functional group**: the tensor-to-polarization conversion is the group that fixes the kind, and the epoch is the qualifier that says which member. This is the strongest figure-grounded reading available, and it is `specified`, not a measurement.
- The stronger isomer form would require fixing the full atom set {tensor perturbation, last-scattering electron, reionization electron, E/B parity} and showing that the two windows differ only in the bond. They do not; the state operand differs. So the isomer claim is **refused as written**, and the refusal is preserved rather than smoothed over.
- **Falsifier:** a demonstration that the two windows can be written over an identical atom set with only the bond differing. If so, they are isomers and the functional-group reading is downgraded. Conversely, if one window can be removed with no loss of tensor information, the group is not minimal and the shape claim in `01` must be narrowed to the surviving window.

### Q3: Are lensing B-modes and tensor B-modes isomers?

- Lensing B modes: E modes + large-scale structure, second order, a settled lensing potential that becomes an atom for delensing (Fig 12 :104, *"A settled molecule becomes an atom for whatever composes over it."*).
- Tensor B modes: tensor perturbations + last scattering, first order.
- Same observable output (B-mode power), different atoms and different order. ⇒ **Not isomers.** They are a functional group defined by the output (B-mode power), with qualifiers set by the generating bond. This matters because a claimed "detection of B modes" does not select a member of the group; the source must be discriminated. That is exactly the 2014 failure.
- **Falsifier:** a fixed atom set from which both components can be built with only the bond differing. If shown, the isomer reading holds and the source-discrimination requirement weakens.

### Q4: What is the order of the instrument chain, and where does it break?

- Fig 3 :20: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."*
- Dependency order for this residual:
  1. **Perception:** build Q/U maps, purify to B modes (achieved by BICEP2 in 2014).
  2. **Vocabulary:** acquire terms for what dust, synchrotron and lensing afford, as frequency and spatial spectra (partially available in 2014 from a conference slide).
  3. **Objective:** state what counts as progress, σ(r) shrinking and refuters firing (not operational with one frequency).
  4. **Planning:** multi-frequency coverage, delensing, independent frames (achieved by BK18 and the Planck joint analysis).
  5. **Learn and carry:** methods cross to BICEP Array and Simons Observatory; the 2014 refusal is carried as a term (Fig 4 :22).
- The break sat between 2 and 3. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* The missing instrument was a source discriminator: multi-frequency maps. Planck supplied it; the chain resumed.
- Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* More 150 GHz sensitivity would not have rescued a broken objective link. That is why the remedy was frequency diversity, not just more detector-seconds.
- **Falsifier:** an analysis that states a detection objective and fires a refuter without any frequency or external-tracer discriminator. If such an analysis is sound, the chain reading is wrong.

### Q5: What does the union leave after one lever is pulled?

- Fig 9 :57: *"a case in two conditions is not a harder case of either"*; Fig 9 :58: *"It stops being a mixture and becomes a specific compound."*
- After multi-frequency cleaning removes the foreground condition and delensing removes most of the lensing condition, the residue is not a smaller mixture; it is a specific compound, a tensor component (or its absence) against the sky. That is why the question can finally be asked as a single amplitude r, and why r is only meaningful after the union is unbundled.
- **Falsifier:** show that r is well defined and interpretable before foreground removal and delensing. It is not; the BK18 analysis marginalises over seven foreground parameters and fixes the lensing spectrum.

## CONCLUSION

The residual is a union, not a partition. The recombination and reionization windows are two members of a tensor-to-polarization functional group, not isomers, because the bonded state is part of the term. Lensing and tensor B modes are likewise a functional group defined by output, not isomers. The instrument chain broke between vocabulary and objective, and multi-frequency data, not more sensitivity at one frequency, was the missing instrument. No figure line returns a value of r; that remains a `gap` of the ground-reading kind.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session (2026-11-23). World facts (the two bumps, the BK18 likelihood structure) are from sources opened and recorded in `10_source_ledger.csv`. No measurement was taken by this author.

## FIGURE CENSUS

Fig 3 :19/:20/:27, Fig 4 :22, Fig 9 :54/:55/:57/:58, Fig 12 :104/:117/:124, Fig 13 :76, plus the Operators and Symbols tables for the typed-bond and level-relativity rules. Strained after re-census: none. The isomorphic reading was refused by re-census against Fig 13 :76, not smoothed over.
