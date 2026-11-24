# Are the two scale readings isomers, and what is the order of the comparison?

**Mode: `specified` on the mapping, `general` on the structural order. Not `grounded`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

`01` established that the comparison is a round trip with a measured gap. Two supporting questions are still owed: (1) when the two readings concern one system arranged differently across scales, do they stand as Fig 12's **isomers**, and (2) what is the **order** of the comparison operation, and can it be reversed?

## DOMAIN CENSUS

Atoms held: the six terms (space, time, energy, spectrum, gradient, network). Bonds held: the seven plus negation. The transform `T_A` (up) and `T_E` (down) are already defined in the Symbols table; no new primitive is needed. The two readings are descriptions of one system, so the atom set is shared by construction. No measurement of an actual gap is available.

Order of operations: perceive at each scale before comparing; describe the residual before choosing a frame (Fig 9 :27-28); measure the gap only after the descriptions are bound.

## DERIVATION

### Q1 - Are the readings isomers?

- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Fig 12 :94: **"The arrangement is the substance."**
- Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**
- Fig 13 :124-125: **"Smoothness, symmetry, chaos and discreteness are each what a particular composition leaves behind, and none is a seventh member."**

If both readings are taken of the same system over the same atom set, differing only in which arrangement the coarse graining keeps, then they satisfy the figure's definition: same atoms, different arrangement, different reading substance. The difference is *"invisible in the formula"*, which is exactly why a single scalar order parameter cannot compare them. That is a real isomer claim.

If, instead, the two readings concern different atom sets (different components entering at different scales), they share only a **functional group** in Fig 12's sense: both are readings of a system, but they are not the same substance differently arranged. The weaker claim survives; the isomer claim does not.

**Falsifier, written before the run:** if a finer reading requires an atom the coarser reading does not contain, and that atom is not an arrangement of the coarser atoms, the isomer claim fails and the functional-group reading stands. This is checkable in a named system by enumerating the atoms each reading actually uses.

**Triangulation status:** single-source for the definition (Fig 12), corroborated at low overlap by the renormalization group source, where coarse graining changes which observables are *"relevant"* or *"irrelevant"* while the underlying system is one system. The physics source corroborates; it does not decide.

### Q2 - What is the order of the comparison?

- Fig 4 :22: **"Only methods cross up. Only head starts come down."**
- Fig 4 :23: **"upward: a method that can be reapplicable. Never the recording of a particular success."**
- Fig 4 :28-29: **"Going up throws away detail; that is what makes the result reapplicable. But it means the trip is not reversible, and something carried up and brought down, will not match what was sent."**
- Symbols table :75-78: `R_T = gap(x, (T_E ∘ T_A)(x))`.

The order is fixed: **up first, then down, then measure**. You cannot run `T_E` before `T_A`, because the coarser description is what has to be returned to the finer scale. And the two directions are not interchangeable: up throws away detail, down supplies a head start. Running the sequence backwards would compare a recording with a replay, which Fig 4 :25 calls a description of one occasion.

**Falsifier:** a case where `T_E` can be applied before `T_A`, or where both directions have the same information cost, so the membrane is not directional. That would break Fig 4 :22-24.

### Q3 - Is there a single scalar that captures the comparison?

- Fig 12 :125: **"A composition costs in two currencies, and they do not add."**
- Fig 12 :126: **"Bits price the description. Actions price finding out whether it holds."**
- Fig 12 :130: **"Summing them into one figure is the error this names, not the fix for it. A price in bits and a price in actions are two readings, held apart."**

The comparison has at least two readings that do not add: the cost of the coarser description in bits, and the actions needed to settle whether the returned description matches. A single order parameter that sums them is the error Fig 12 names. The honest comparison keeps them apart: report the gap in description and the cost of the instrument that would close it.

World corroboration, two independent fields: the MAUP source separates a **scale effect** (results change with the size of the aggregation unit) from a **zoning effect** (results change with the configuration at the same scale). The Simpson's paradox source shows a trend reversing on combination. Neither supplies a single scalar that survives both effects; both require the partition to be described separately.

**Falsifier:** a demonstrated price function that converts description bits and settlement actions into one additive quantity without loss, for a named system and a named pair of scales.

### Q4 - Does a scale-invariant quantity provide an anchor?

- Fig 13 :134-135: **"It can say the answer is out of reach with the library as it stands... It cannot say which primitive is missing, because naming it would mean already holding it."**
- Fig 2 :29-30: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**

The scale invariance source describes a *"feature of objects or laws that do not change if scales of length, energy, or other variables, are multiplied by a common factor"*, and the renormalization group source describes a fixed point where *"changing the scale does not change the physics"*. These are genuine candidates for an anchor that does not move under the transform. But finding one for a named system is a ground result, not a figure derivation. The framework can say the comparison needs an anchor; it cannot name it. Fig 9 :32: *"you get a kind of thing, never the answer itself."*

**Falsifier:** a derived (not measured) theorem that a specific invariant must survive the round trip for every system at every scale. That would break the shape-not-a-name limit and the Fig 2 anchor rule at once.

## CONCLUSION

The two readings are **isomers at `specified` mode** if they share the atom set: same system, different arrangement, different substance, with the difference invisible in any single formula. The comparison is **ordered**: up, then down, then measure the gap, and the order cannot be reversed. The two prices (description bits and settlement actions) are held apart, never summed. A scale-invariant quantity is a candidate anchor, but naming it is a ground result. The isomer claim, the order claim and the two-price claim each carry their own falsifier above.

This framing keeps what is defensible in the question without pretending a single scale or a single scalar can settle it. The falsifiers are checkable by enumerating atoms, by attempting to reverse the transform, and by attempting to construct the additive price.

## ANCHOR

Verbatim figure text read from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; the canonical README and metalaws doc; the three framework essays and four world sources listed in `10_source_ledger.csv`. No measurement was taken.

## FIGURE CENSUS

Fig 4 (direction of the membrane, what crosses), Fig 9 (describe before looking, shape not a name), Fig 12 (isomer, functional group, arrangement, two currencies), Fig 13 (chaos as residue, indivisibility), Fig 2 (anchor), Symbols table (`R_T`). Strained after re-census: none. The earlier strain about "carrying a measurement up" was resolved in `01` F6: methods cross, recordings do not.
