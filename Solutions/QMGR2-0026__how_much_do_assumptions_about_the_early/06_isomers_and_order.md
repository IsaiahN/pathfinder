# Structure, order and analogues in the CMB-to-H0 inference

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

The primary audit establishes that the CMB supplies a ratio and the early-universe model supplies an imported scale. Two supporting questions remain: (1) what is the order of dependency in the inference, and where is the break, and (2) are different early-universe assumptions related to each other as isomers, and is the space of assumptions a partition or a union?

## DOMAIN CENSUS

Atoms held in the inference frame: the measured acoustic scale `theta_*`, the angular diameter distance `D_A`, the sound horizon `r_s` (imported), the inferred H0 (derived). Relation held: `theta_* = r_s / D_A`, with `D_A` depending on the late-time expansion history. No new primitive is available without import from the early-universe frame. The seven typed bonds of Fig 12 are not at issue here; the relation that varies between models is the assumed pre-recombination content, which enters as an import.

## DERIVATION

### Q1 - What is the structure of the inference?

- Fig 9 :32 "you get a kind of thing, never the answer itself": the measurement returns a ratio, not H0.
- Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs": `r_s` is not in the measurement closure; it arrives from the early-universe frame.
- Fig 4 :27 "The transform between scales loses information, and that is the point": going from a recombination-era ratio to a present-day rate discards the pre-recombination history except as compressed into the assumed `r_s`.
- ⇒ The structure is `measure ratio -> import scale -> derive estimate`. It is a chain, and it is cross-scale.

### Q2 - What is the order, and where is the break?

- Fig 3 :20-21 "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."
- The links here are: 1 measure `theta_*`; 2 have a term for what the acoustic scale affords (the need for `r_s`); 3 say what counts as progress (fit the same `theta_*` with a different `r_s`); 4 compute H0; 5 carry the result to the local frame.
- Link 2 has no direct instrument in the CMB data. Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." This is precisely where the assumptions enter, and it is the middle link the figure says attracts the least attention.
- Fig 3 :19 "Optimising a link that already works cannot rescue one that does not." Making `theta_*` more precise (link 1, already at 0.03%) cannot resolve the H0 question while link 2 is assumed rather than measured.
- ⇒ The break, if the chain breaks, is between the measurement and the model. Effort spent on more CMB precision lands above the break.

### Q3 - Are different early-universe models isomers?

- Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Two fits that hold the same `theta_*` but differ in assumed early-universe content (say base Lambda-CDM versus early dark energy) share the measured ingredient. They differ in the imported arrangement that supplies `r_s`. They produce different H0. In the figure's vocabulary they behave as isomers: same observable atoms, different internal arrangement, decisively different inferred substance.
- **Limit, named:** the "bond" that differs is an imported model assumption, not one of the seven typed bonds of Fig 12. So this is a structural analogy about composition, not a literal bond claim. The Operators table :68 warns: "A relation that fails all seven is not an operator you are missing; it is a claim that has not been made yet." Marked `specified`, not `grounded`.
- Weaker reading via Fig 12 :124 "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." All the models share the functional group "a pre-recombination scale that sets `r_s`"; the qualifier says which model supplies it.
- **Falsifier, written before the run:** if two models with demonstrably different early-universe content give the same inferred H0 at fixed `theta_*` within the quoted errors, the isomer reading fails and only the functional-group reading stands.

### Q4 - Union or partition among the assumptions?

- Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."
- Fig 9 :57-58 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."
- Extra N_eff, early dark energy, and altered recombination all reduce `r_s`. They overlap. If a constraint excludes one, the intersections remain binding. The space of early-universe explanations is therefore a union, not a list of separate partitions.
- Consequence for the outreach: do not ask "which single assumption matters". Ask how far the imported scale can move under the union of allowed assumptions. That is the bound that answers "how much".

### Q5 - Round trip and the gap R_T

- Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."
- Sent up (x): the full pre-recombination physics, including possible extra species and early dark energy.
- Abstraction (T_A): the six-parameter base Lambda-CDM fit, which fixes the assumed early-universe content.
- Concretisation (T_E): the inferred H0 reported alongside the fit.
- The gap R_T is the set of early-universe options the six-parameter description cannot hold. It is nonzero: Planck's own extension analysis shows the inferred late-Universe parameters move under extensions, and Poulin et al. 2019 shows the inferred H0 can be raised into agreement with SH0ES by reducing `r_s`. Fig 4 :31-32 "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."
- R_T is recorded qualitatively, not numerically. No instrument was run here; claiming a number would be the dead-reckoning error the figure names.

## CONCLUSION

The inference is a dependency chain with its break at the unmeasured model link: more CMB precision cannot repair an assumed `r_s`. The alternative early-universe fits stand to one another as isomers in the figure's structural sense, same measured atoms and different imported arrangement, with the caveat that the varying relation is an import rather than one of the seven typed bonds. The space of assumptions is a union, so the honest quantity is a bound on the movement of `r_s`, not a ranking of single causes. The compression to six parameters has a nonzero round-trip gap, and that gap is the substantive content of "how much".

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the Operators table, `THE_FORMULA.md`, and the world sources opened 2026-11-23 and listed in `10_source_ledger.csv`. No measurement was taken by this derivation.

## FIGURE CENSUS

Fig 3 (dependency order, link with no instrument, optimising above the break), Fig 4 (lossy transform, round trip, gap as measurement), Fig 6 (import and closure), Fig 9 (kind of thing, union before split, describe before look), Fig 12 (isomer, functional group, level-relative irreducibility, untyped relation), Operators table (what a failed relation is not). After re-census: one level caveat on the "bond" (import, not typed bond) and one unmeasured gap R_T, both named, none hidden.
