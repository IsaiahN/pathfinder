# Isomers, catalysts, cycles and order in local rules

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §7).

## RESIDUAL

The main answer says robustness has the shape of a closing loop and a per-slot damped remainder, and that no rule type is named by the figures. Two sub-questions are owed: (1) what distinguishes two rule sets that contain the same local rules but are arranged differently, and (2) what kind of order the question's "types" actually requires, a sequence, a comparison, or a threshold. This file answers those using Fig 12's structures and the Operators table.

## DOMAIN CENSUS

- **R by arity / symmetry / scale.** Arity: two operands at least (rule plus habitat); symmetry: under a symmetric bond the order of operands does not matter, under an ordered bond it does; scale: one agent step, one cycle, one macro level, and a lineage if agents adapt.
- **Domain A, ingredients.** Actors: the individual local rules (align, cohere, separate, compare-to-threshold, reinforce). Currency: state updates. Anchor: the observed per-slot behavior.
- **Domain B, arrangement.** Actors: the bonds between rules (sequence, comparison, cycle, negation). Currency: which bond holds. Anchor: the macro pattern the ground returns.
- **Domain C, verification.** Actors: the modeller and the instrument. Currency: agreement and residual. Anchor: the ground, never agreement.
- **Union.** Ingredients and arrangement overlap: the same rules under a different bond give a different substance. Order by dependency: ingredients first, then bonds, then settlement, then comparison across rule sets.

## DERIVATION

### Q1 : Are two rule sets with the same rules isomers?

Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

Example from the public swarm reference: boids and the Vicsek self-propelled-particle model both use local alignment and neighbourhood averaging, but the Vicsek model adds random perturbation and adopts the average direction of the local neighbourhood, and starlings use a *"topological, rather than a metric, rule"* (Wikipedia, Swarm behaviour, 2026). If both are written over the same ingredient set {alignment, cohesion, separation, neighbourhood} and differ only in which bond and which neighbourhood relation holds, they are isomers under Fig 12's definition. The macro behavior differs while the ingredient list looks the same.

Fig 12 :94: **"The arrangement is the substance."** A list of local rules is not the collective behavior. The bond is the rest of the information.

- **Falsifier, written before the run:** if two rule sets with identical ingredients and identical bonds but different arrangement produce the same macro pattern over all initial conditions, the isomer claim fails and the two are one rule set under two descriptions.
- **Mode: `specified`.** Triangulated: Fig 12 :117 and :94, with the swarm reference as low-overlap world witness.

### Q2 : Is a threshold rule a comparison bond?

Operators table :51: **"a goal is a comparison, which is why a vocabulary without it cannot state one"**. Fig 12 :85 to :88 defines ⋛ as **"comparison: a threshold relation between two quantities"** with the test *"is it about which is larger, rather than both being present? Yes."*

Schelling's model is the world instance: an agent checks the fraction of like neighbours B against a tolerance B_a and moves if B < B_a; the public reference reports a threshold B_seg where *"B_a<B_seg leads to a random population configuration and B_a≥B_seg leads to a segregated configuration"* (Wikipedia, Schelling's model of segregation, 2026). The local rule is a threshold comparison, not a conjunction. That is why adding a small amount of in-group preference produces a large macro change: a comparison is a bond that carries a direction, not just a presence.

- **Falsifier:** show that the Schelling move can be written as a plain conjunction of held conditions with no threshold, and that the macro transition still arrives at the same boundary. Then the comparison reading is retracted.
- **Mode: `specified`, ungrounded for the mapping.** Single-source for the figure definition (Operators table), corroborated by the Schelling page.

### Q3 : What does the cycle sign buy, and what does the catalyst add?

Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** Fig 12 :119: **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."**

For local rules this gives two distinct structural requirements. The first is closure: a rule whose output re-enters as input can stabilize only if the loop sign opposes the deviation. The second is maintenance: the regulator must be regenerated, otherwise the rule works once and then stops. Ant pheromone trails are the world instance: the trail is laid, followed, and reinforced, so the coordinator survives its own use; the reference describes *"a positive feedback cycle"* producing a *"collective decision for the best food source"* (Wikipedia, Swarm behaviour, 2026). A positive sign here amplifies a difference that the ground has already discriminated (the better food source), which is not the same as amplifying an unreconciled remainder.

That distinction matters for `01` F3. The claim there is that amplifying a *per-slot remainder* gives chaos (Fig 13 :31 to :32), while an amplifying loop whose input is *already ground-discriminated* gives a collective decision. Both are cycle signs; they differ by what the loop feeds on. This is a genuine boundary, not a contradiction.

- **Falsifier:** exhibit a maintained positive-feedback rule whose loop feeds on an undiscriminated per-slot remainder and still yields macro invariance across initial conditions. That breaks the boundary and `01` F3 with it.
- **Mode: `specified`.** Triangulated: Fig 12 :121 and :119, with Fig 13 :31 to :32.

### Q4 : What order is required by "types of rules"?

Fig 12 :111 to :112: **"A vocabulary without bonds can name a state and cannot name a route to one. A plan is a sequence. A goal is a comparison. Progress is a subtraction."** The question asks for "types", which is a vocabulary of ingredients. But robustness is a route, and a route needs bonds. So the answer cannot be a list of rule types; it must be a bonded arrangement.

Fig 12 :103: **"Composition is recursive, and the level decides what is irreducible."** A settled macro pattern becomes an atom for whatever composes over it. The comparison between two rule sets is therefore second order: each first-order set is settled against the ground, then the two are compared. Fig 12 :104: **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."**

- **Falsifier:** show that a robust collective behavior can be specified entirely as an ingredient list, with no bond, no comparison, and no route, and that the ingredient list still predicts macro invariance. Then this Q4 is retracted.
- **Mode: `general` for the bond requirement, `specified` for this application.** Single-source in Fig 12, corroborated by the structure-over-members result cited in *How a Society of Agents Would Work*: *"The arrangement mattered more than the members."*

## CONCLUSION

Two rule sets with the same ingredients under different bonds are isomers, so "which rules" is incomplete without "which arrangement". A threshold rule is a comparison bond, which is why a small local preference can move a macro state across a boundary. A robust rule needs both a closing loop sign and a maintained regulator, with the additional boundary that amplification is stabilizing only when it feeds on a ground-discriminated difference rather than an undiscriminated per-slot remainder. Finally, the question's demand for "types" is an ingredient vocabulary, while robustness is a route; the answer to a route question must carry bonds.

This framing does not name a winning rule type, needs no seventh primitive, and imports nothing that moves the wall. It rescues the structural part of the question while leaving the name owed to a measurement (Fig 9 :32).

## ANCHOR

Verbatim figure text extracted from the canonical local file this session; the Operators table; and the three public reference pages cited above. No measurement of any rule set was used.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 4 (same kernel at any size), Fig 9 (shape not a name, union), Fig 11 (capability is agent and habitat; no standing good actor), Fig 12 (isomer, catalyst, cycle, functional group, arrangement is the substance, level-relative irreducibility, two currencies), Fig 13 (remainder compounding gives chaos), Operators table (⋛ comparison; a goal is a comparison), Formula (steps 3, 5, 7).

**Strains after re-census:** one boundary, named and not hidden. Fig 12's cycle sign and Fig 13's amplifying remainder both govern feedback, but they apply to different inputs (ground-discriminated difference versus undiscriminated remainder). The distinction is recorded in Q3 and sent to `11_audit.md`, not smoothed over. After that re-census: no live strain.
