# Isomers, imports, and order: the supporting derivation

**Mode: `specified` on the structure, `general` on the ordering claim, not `grounded`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).

## RESIDUAL

The primary audit returns a four-condition separator and declares the ranked list a `gap`. Three supporting questions are owed: (1) are the four conditions a union or a partition; (2) is adding an observation an instrument extension or an import, and are the two related as isomers; (3) what is the dependency order among observation, vocabulary, objective, and decision, and which link usually breaks. A fourth question, the comparison "most", is handled at the end.

## DOMAIN CENSUS

Atoms held: instruments, channels, anchors, slots, residuals, bonds. Bonds held: the seven plus negation. No new primitive is available without an import. The objects of the derivation are arrangements of held atoms, not new kinds.

---

## DERIVATION

### Q1 - Union or partition of the four conditions?

The four conditions in `01` are: per-slot residual reduction (C1), independent local anchor (C2), survived round trip (C3), proto-instrument edge or provenanced import (C4).

- Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**
- Fig 9 :57: **"a case in two conditions is not a harder case of either"**

**Derivation.** They are a union. An observation can satisfy C1 and C2 and fail C3: it improves the slot forecast but its value vanishes when the global-to-local transform is applied, because it never informs the boundary. It can satisfy C1 and C3 and fail C2: it improves the slot forecast but is validated only against the model's own pool, so the improvement is not a verdict. It can satisfy C2 and C3 and fail C4: there is no edge to extend and no source for the modality, so the observation cannot be deployed. A single lever clears the region where only one condition holds and leaves every intersection standing.

**Falsifier:** show that satisfying any three conditions entails the fourth across all decision slot classes. Then the conditions collapse to a partition and the separator can be reduced to one test.

### Q2 - Instrument extension and import are different operations, not isomers

- Fig 6 :29: **"inward: is our representation adequate to hold it? The instrument extends access."**
- Fig 6 :30 (substring): **"outward: does another frame already hold it? The description travels."**
- Fig 6 :31: **"Neither answer tells you much about the other. Run them as two tracks, and never read one against the other."**
- Fig 6 :14: **"the only operator that moves the wall"**

**Derivation.** Sharpening an existing gauge network and importing an entirely new observation modality are not variants of one thing arranged differently. They have different operands, different gates and different costs. INWARD operates on an instrument already returning something (Fig 6 :32: **"An instrument is not built from a description. It is improved from a worse instrument already returning something."**). OUTWARD operates on a description of R that travels to a frame whose closure predicts its shape, with a source gate and a shadow test (Fig 8 :9-13). They are not Fig 12's isomers, which require *"Same atoms, different bond, different substance"* (Fig 12 :117). They differ in atom set as well as in bond.

This matters because the world literature often treats "new observing capability" as one category. *Data assimilation* (Wikipedia, 2026) describes a family of methods that *"update information from numerical computer models with information from observations"*, while *Downscaling* (Wikipedia, 2026) describes obtaining local variables from large-scale ones. Those are different operations on different sides of the membrane. Conflating them would import a wrong atom at a cost above starting from primitives (Fig 6 :24).

**Falsifier:** exhibit a case where the same observation is simultaneously an inward sharpening of an existing instrument and an outward import of a new atom, with the atom count invariant. Then the distinction collapses and the source-gate requirement must be re-derived.

### Q3 - Dependency order and the link that breaks

- Fig 3 :20: **"The chain is ordered by dependency, not by importance."**
- Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."**
- Fig 3 :29-30 (substring): **"Most improvement effort in practice lands above the break, because that is where the measurements already exist."**

**Derivation.** For a decision-scale forecast the chain is perception (observe the slot) -> vocabulary (terms for what the observation affords) -> objective (what counts as progress at the slot) -> planning (which network and cadence) -> learn and carry (verify and repeat). The break is usually at perception, because the local reading is the link with no instrument and no routine measurement. Everything above the break, higher-resolution global models, more ensemble members, newer assimilation schemes, arrives at a step that cannot use it if the local outcome was never read.

This is not an argument against those methods. It is a statement about where effort lands relative to the break (Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."**).

**Falsifier:** measure a decision slot class where perception is well instrumented and the break is demonstrably at vocabulary or objective, with the local residual still live. Then the universal priority claim in F3 of `01` must be narrowed to a subset.

### Q4 - Analogues the framework supplies

- **Functional group.** Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."** An independent local reading is a functional group in this derivation: its presence fixes whether a verdict is possible, and the qualifier (gauge, satellite product, survey) says which member. Different members can fill the same group.
- **Catalyst.** Fig 12 :119 (substring): **"catalyst. A part that survives its own use."** A maintained reference station is a catalyst: it survives repeated assimilation cycles and keeps the channel calibrated. A one-off campaign is a spent part: it pays once and is gone. Nothing in a stale metric records which one a term is (Fig 10 :25-26: **"stale percepts, dropped transients, saturated metrics, pooled readings"**).
- **Cycle.** Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** Observation -> assimilation -> forecast -> decision -> new outcome observation is a cycle. If the outcome observation is drawn from the same model chain, the loop closes on itself and agreement compounds without evidence (Fig 7 :13: **"agreement compounds, evidence does not"**).

**Falsifier:** show a decision cycle that produces genuine new ground contact while every observation in it is a replay of the model's own output. Then the cycle sign test above is wrong.

### Q5 - What the comparison "most" actually compares

- Fig 12 :87: **"a threshold relation between two quantities"**
- Fig 12 :125: **"A composition costs in two currencies, and they do not add."**
- Operators table :51 (substring): **"a goal is a comparison, which is why a vocabulary without it cannot state one"**

"Most improve" is ⋛, not +. It compares information gain against the action cost of obtaining it, in two currencies that do not add. The world source *Value of information* (Wikipedia, 2026) defines the decision-theoretic form as the amount a decision maker would pay for information *before* a decision, and states that the value of two new evidence variables *"is not additive."* So the ordering is local to a decision slot and to a declared cost convention. There is no scale-free winner.

**Falsifier:** produce a convention-free total ordering of observations by improvement that is invariant across all slot classes and all cost conventions. Then "most" is a single ranking and the `gap` in `01` F10 is closed.

---

## CONCLUSION

The four conditions are a union, not a partition; a single lever leaves the intersections standing. Instrument sharpening and observation import are different operations, not isomers, and must never be read against each other. The dependent chain breaks most often at local perception, where there is no instrument, so effort spent above the break is effort a broken step cannot use. The framework's functional-group, catalyst and cycle structures describe what a maintained local reading is and how a self-referential verification loop fails. "Most" is a threshold comparison in two currencies, local to a slot and a declared cost convention. No specific observation is selected; that remains the declared `gap`.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; the canonical figures README opened locally; four framework essays opened directly on 2026-11-22; world sources listed in `04` and `10_source_ledger.csv`. No decision-scale measurement was taken.

## FIGURE CENSUS

Fig 3 (:19, :20, :27, :29-30), Fig 6 (:14, :21, :24, :29, :30, :31, :32), Fig 7 (:13), Fig 8 (:9-13, :50-52), Fig 9 (:54, :57), Fig 10 (:25-26), Fig 11 (:49, :51), Fig 12 (:87, :117, :119, :121, :124, :125), Operators table (:51). Strains after re-census: **none unresolved**. The apparent Fig 6 versus Fig 8 tension on new instruments was dissolved in Q2; the two-currency comparison in Q5 remains a live type question, named rather than smoothed.

## FALSIFIER (single sentence)

If a convention-free total ranking of observations by decision-scale improvement is produced, or if a single observation satisfies all four conditions on every slot class after a change of residual, the entire separator in this file and in `01` is withdrawn.
