# Same atoms, different bond: the transfer test as an isomer check

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §7).

## RESIDUAL

A system succeeds on familiar contexts. We need an observation that separates a reapplied method (H1) from familiar associations (H2). The residual is that the ingredient set alone cannot separate them: both hypotheses predict success when the same ingredients recur. What is owed is a manipulation that changes something H1 tracks and H2 does not.

## DOMAIN CENSUS

- Atoms held: whatever ingredients the new context makes available to the system (tokens, features, primitives of Γ). Bonds held: the seven, of which → sequence and ⋛ comparison are the ordered ones most relevant here (Fig 12 :70-89; Operators table :29-52).
- Currency: transfer of a description from a training context to a test context; the residual on each context; the round trip gap `R_T`.
- Anchor: the ground in the test context. Not the benchmark score.
- Union/partition: atoms and bonds are a partition of the *description* (a bond is not recoverable from its operands, Fig 12 :46); but H1 and H2 are a union of conditions over behaviour, so unbundle before searching (Fig 9 :54).

## DERIVATION

### Q1 — Does "shape, not a name" forbid naming a test? CORRECTION TO MY OWN §3 of `05`

- The canonical README: *"what a **missing** thing would have to look like (a shape, not a name)."* The subject is a missing primitive, one not held in Γ.
- A benchmark (ARC, SCAN, a custom transfer set) is not a missing primitive. It is a binding from the evaluation frame onto held terms: context, transfer, residual, comparison.
- ⇒ Naming a test is **not** forbidden. It is a **binding**, and its provenance must be recorded. What is forbidden is presenting the binding as a figure derivation, or claiming it moves the wall (Fig 6 :22 *"IMPORT adds an atom"*; this one adds none).
- **I overstated this earlier in `05` §3.** "The framework returns a shape, not a name" governs missing primitives, not the selection of a binding onto held terms. Retracted as applied to test selection. Triangulated (README + Fig 6 :22).

### Q2 — Why same-atoms/different-bond is the discriminating manipulation

- Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*
- Fig 12 :46-47: *"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands. A recipe that names only its ingredients has recorded half of itself."*
- Fig 12 :95-96: *"Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."*
- ⇒ Hold the ingredient set fixed and change only the bond. H2, which keys on the ingredient set, cannot tell the two apart and fails. H1, which tracks the bond, transfers. This is the cheapest instrument that separates the hypotheses.
- Fig 9 :29: *"matching is a one-pass check, not a search"* → the manipulation is a check, not an open-ended benchmark campaign.

**Isomer claim.** Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** Two test contexts built from the same atoms under a different bond are isomers in the figure's exact sense. Asking whether the system transfers between them is asking whether it treats them as the same substance because the formula looks the same, or as different substances because the bond differs.

**Falsifier, written before the run:** if the system transfers equally well when the bond is changed and when it is preserved, then the bond is not what it is using; the isomer manipulation has no discriminating power on this system and no conclusion about flexibility follows from it. Record that as a failure of the instrument, not as evidence for H1.

### Q3 — Order: why the transfer test is ordered, not symmetric

- Fig 12 :70-73 defines → sequence: *"A then B; B needs A to have happened"*, with the test *"swap them. Does it become a different thing? Yes."*
- Training context → test context is a sequence. The test context needs the training context to have happened, so swapping them is a different experiment. Generalisation measured test → training is a different quantity (familiarisation, not transfer).
- Fig 12 :92-93: *"Under a symmetric bond, k operands have k! spellings and one term"*; under an ordered bond different orders are different terms. So a benchmark that reports a single symmetric score over training and test contexts has already erased the direction it needed to measure.
- ⇒ The evidence must be reported as an ordered pair: performance on training contexts and performance on the substituted context, separately, with the direction named. This is Fig 1 :19 *"The residual is indexed by object slot, not aggregated"* applied to time as well as to objects.

### Q4 — Is this an analogue?

- Fig 12 :97-98: **"This is not an analogy. Chemistry hit it first: silver fulminate and silver cyanate have the same composition and different properties, which is what forced structure into the notation. Liebig and Wöhler, 1824 to 1826; named isomerism by Berzelius, 1830."**
- The bond table is not a metaphor imported from chemistry into AI evaluation. It is the figure's own definition of what a composition is, and the chemistry case is the figure's cited precedent.
- The **analogue** this question legitimately uses is the one in the world literature: Lake & Baroni 2018's *"dax"* example, where learning a new verb immediately licenses "dax twice" and "sing and dax." That is an instance of the figure's bond rule arrived at independently by another frame, so by Fig 8 :50-52 it is corroboration at low overlap, not an import that moves the wall. Convergent derivation and adopted import look identical in the contents; the record separates them.

### Q5 — What the round trip adds beyond the isomer check

- Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**
- The isomer check tells you whether the system distinguishes two arrangements. The round trip tells you whether the *compressed description* you gave it is the thing that transfers. A system could pass the isomer check by memorising both substances separately (two recordings, not one method). Carrying the compressed method up and bringing it back down into a third context tests exactly that.
- Symbols table: `R_T = gap(x, (T_E ∘ T_A)(x))`. The gap is the measurement of what the coarser description cannot hold (Fig 4 :31-32 *"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up"*).
- ⇒ The two instruments are opposed and must not be read against each other (Fig 6 :31 *"Neither answer tells you much about the other. Run them as two tracks, and never read one against the other"*). Isomer check first (cheap, one-pass), round trip second (measures the method).

### Q6 — Depth versus absence at this budget

- Fig 6 :27: *"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."*
- If the system fails the isomer check, that may be because the method is in the closure and merely unfound (SEARCHED, Formula step 7 *"Same atoms, same wall, more of the space actually visited"*), or because an atom is genuinely missing. More of the same benchmark cannot tell you which (Fig 7 :36 *"A chain of mirrors is one long room"*).
- ⇒ Report the failure as `unreachable-at-this-budget` until SEARCHED has been run with independent searchers, then as `genuine absence` only if a new atom was required and supplied. Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

## CONCLUSION

The cheapest discriminating evidence is an isomer check: hold atoms fixed, change the bond, and see whether transfer survives. It is ordered (training to test, not the reverse), it is not an imported chemistry analogy but the figure's own definition of composition, and it is corroborated at low overlap by the *dax* result in the world literature. It must be followed, not replaced, by a measured round trip, because a system can memorise two isomers separately. Failure is reported as depth or absence after SEARCHED, never as proof of no flexibility. This rescues a checkable instrument without naming a benchmark the figures cannot endorse.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the Symbols table, `THE_FORMULA.md`, and the three essays fetched 2026-11-23 and listed in `05_what_shape_means.md`. No measurement of any AI system was made.

## FIGURE CENSUS

Fig 1 (residual per slot), Fig 4 (method vs recording, round trip gap), Fig 6 (novelty relative to atoms, depth vs absence, two instruments opposed), Fig 7 (mirrors), Fig 8 (provenance, no proof of absence), Fig 9 (one-pass check, unbundle), Fig 12 (bond not recoverable from operands, isomer, ordered bonds, chemistry precedent, round trip compression), Symbols (`R_T`), Formula (steps 5 and 7, "Direction"). Strained after re-census: **none**. The one apparent strain, Fig 11 :70 "a synthetic solve proves wiring and never capability" versus positive results on synthetic compositionality benchmarks, is resolved by re-census: Fig 11 governs capability in a substituted habitat, while the benchmark results are wiring plus within-distribution method transfer, a limit the 2023 Nature paper states itself.
