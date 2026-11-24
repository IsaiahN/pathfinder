# Structure, order and the refused isomer analogue

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

Two things the main audit leaves open: (1) are interactive and pre-collected learning two arrangements of the same atoms, hence Fig 12's **isomers**, or are they a different kind of difference; (2) in what order must the comparison be attempted, given Fig 3's dependency chain?

## DOMAIN CENSUS

Atoms held in the loop: Γ, belief b, weighting w, action a, observation o', residual R per slot, candidate φ. Bonds held: the seven, plus negation. Habitats: live environment and substituted corpus (Fig 11 :66). No new primitive is available without import. The two regimes share the loop atoms; they do not share the habitat.

## DERIVATION

### Q1 - Are the two regimes isomers under Fig 12?

Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

Fig 12 :46-47: **"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."**

The two regimes can be written over the same loop atoms:

```
interactive : b, a, o'(live), R  with o' arriving after a
offline     : b, a, o'(stored), R  with o' already in Γ
```

The apparent difference is the *provenance of o'*, live versus stored. Provenance is not one of the seven bonds. It is a record of where a term came from, and Fig 8 :50-52 says convergent derivation and adopted import look identical in the contents and are separated only by the record. So the difference between the regimes is not invisible in the formula in Fig 12's sense; it is invisible in the formula because the formula does not record provenance at all.

Fig 11 :66: **"Isolation is not removal of the habitat. It is substitution of one habitat for another."**

The honest classification is therefore: the two regimes are **the same kernel in two habitats**, not isomers over one atom set. Calling them isomers would import a relation that fails the bond tests and would strain Fig 12 :117. Per the canonical re-census rule, a line that only fits with a strain governs another quantity, so the analogue is refused, not softened.

**Falsifier, written before the run:** if a single bond from the seven can express the live-versus-stored distinction between o' and the rest of the loop, and both regimes can be written over the identical atom set with that bond as the only difference, then Fig 12 :117 licenses the isomer claim and this refusal is withdrawn. Until such a bond is named, the refusal stands. Triangulated: Fig 12 :117 (definition) plus Fig 11 :66 (substituted habitat) plus Fig 8 :50-52 (provenance, not contents).

### Q2 - What is the order of the comparison?

Fig 3 :20: **"The chain is ordered by dependency, not by importance."**

Fig 3 :9-10: **"the objective" / "it can say what would count as progress here, in its own terms"**.

Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."**

The dependency order for this question is:

1. **Perception** - what is in front of the system, and is it live or stored? (Fig 3 :4-5)
2. **Vocabulary** - are there terms for what the situation affords, including a unit for cost? (Fig 3 :6-8)
3. **Objective** - say what counts as progress: per-slot residual reduction in a declared currency, against a ground. (Fig 3 :9-11)
4. **Planning** - choose where to spend the next action or the next training step under incomplete information. (Fig 3 :12-13)
5. **Learn and carry** - name what worked, verify it, carry it to the next problem. (Fig 3 :14-16)

A system that jumps to step 5 with no step 3 is reporting terms minted, not reach. Formula step 8: "a system measuring progress by terms minted is counting the denominator." This is the exact failure of an efficiency claim made before a currency is bound.

Fig 3 :25-27 names why this link is missed: "having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments." And: **"A link with no instrument is not a link that works. It is a link nobody has looked at."**

**Falsifier:** if an instrument already exists that reads progress in one unit for both regimes at the same slot, then step 3 is not the missing link and the order claim is only a recommendation, not a diagnosis.

### Q3 - What does a vocabulary without bonds fail to write?

Fig 12 :111-113: **"A vocabulary without bonds can name a state and cannot name a route to one. A plan is a sequence. A goal is a comparison. Progress is a subtraction."**

"Efficiency" is built from three of those: progress is a subtraction, a goal is a comparison, and a plan is a sequence. A system that holds only the ingredients (data, model, samples, time) can name a state of the system and cannot write a route to one. It can say what a run contains and cannot say what would count as getting somewhere from it.

Fig 12 :125-127 then prices the route in two currencies. So the comparison needs both the bond vocabulary and the two-currency accounting. Neither comes from counting samples.

**Falsifier:** show a flat ingredient list from which a route, a goal and a progress subtraction are all derivable without typed bonds. That would break Fig 12 :111-113 and dissolve this part of the derivation.

### Q4 - Is there a functional group shared by the two regimes?

Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

Both regimes share the substructure `per-slot residual against a ground`. That is a functional group: it fixes the kind of thing being done. The qualifier is the habitat: live or substituted. This is the weaker, defensible analogue. It says the regimes are two members of one kind, not two arrangements of one molecule.

**Falsifier:** if one regime can be shown to lack a per-slot residual against a non-updating ground (for example, a corpus-trained system scored only on its own training loss), the functional-group claim fails for that case and the regimes are different kinds altogether.

## CONCLUSION

The isomer analogue is **refused**: the regimes share the kernel and differ by substituted habitat, and provenance is not one of the seven bonds. The **functional group** reading survives: both are per-slot residual learning against a ground, qualified by habitat. The comparison must be ordered by dependency, with the objective and its unit bound before any planning or efficiency reading. A vocabulary that can only name ingredients cannot write the route, the goal or the progress subtraction that "efficiency" is made of.

## ANCHOR

Verbatim figure text in `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `THE_FORMULA.md`, and the eight essays as recorded in `05_what_shape_means.md`. No measurement was used.

## FIGURE CENSUS

Fig 3 :4-16 (dependency chain), Fig 3 :19-27 (break and missing instrument), Fig 8 :50-52 (provenance versus contents), Fig 11 :66 (substituted habitat), Fig 12 :46-47 (bonds), :111-113 (route, goal, subtraction), :117 (isomer), :124 (functional group), :125-127 (two currencies), Formula step 8 (reach, not library). Strains after re-census: one refused analogue (isomerism), recorded rather than smoothed; one live restriction (the habitat qualifier on the functional group), named in the expert packet.
