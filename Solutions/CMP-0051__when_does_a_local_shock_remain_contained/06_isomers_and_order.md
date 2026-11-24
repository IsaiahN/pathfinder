# Order, sign, and union: supporting derivation for the containment question

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

`01` concluded that containment versus cascade is decided by the sign of the per-slot residual's trend under four separable conditions in a union. Three questions are still owed. (1) Is a cascade a chain or a cycle? (2) What order do the pieces compose in? (3) Are the four conditions isomers, a functional group, or neither? This file answers those without adding a primitive or a number.

## DOMAIN CENSUS

Atoms available: the six of Fig 13 (Space, Time, Energy states; Spectrum, Gradient, Network structures), seven bonds plus negation, and the operators table. No new primitive is available without import. The residual R_s is a per-slot quantity (Fig 1 :19), so anything that composes over it must be a cross-kind composition (Fig 13 :74).

## DERIVATION

### Q1 - Chain or cycle?

Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." Fig 12 :119 "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."

A pure transmission path from s to a neighbour is a **chain**: a sequence bond →, ordered, no closure. A cascade that feeds back, for example a failing node raising load on the node that failed it, is a **cycle**: output re-enters as input. The figure says a chain cannot close by construction, so connectivity alone cannot produce a self-sustaining cascade; a closing loop is required. The sign of that loop decides whether it amplifies (positive, compounding remainder) or damps (negative, residual trends down).

The catalyst term matters operationally: a component that survives its own use (a generator that keeps feeding a failing line, a bank that keeps rolling over the same exposure) behaves differently across steps from one that is spent. A static snapshot cannot tell which a component is; Fig 12 :119 says "nothing records which a term is." So the temporal record, not the topology alone, is part of the measurement. **Falsifier:** a self-sustaining cascade in a provably acyclic propagation graph with no surviving-use component. That would break the cycle reading.

### Q2 - What order do the pieces compose in?

Fig 13 :74 "Everything else is a composition across the two kinds, never within one." Fig 13 :75 "Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state."

A shock path is a state (load, energy in a slot) bonded through a structure (a network edge, a gradient of load) to another state. Two slots never bond directly in the minimum set; a relation carries the influence (Fig 13 :24 "that entities relate, and influence travels"). So a cascade is a cross-kind composition of alternating state and structure, and a per-step residual is left at each crossing (Fig 13 :31-32 "a remainder compounding through a chain that amplifies is chaos"). The order of the crossing matters because "a gradient over space and one over time are different terms, because which state it is bonded to is part of what it is"; the same shock over a spatial edge and over a time step are different molecules.

Dependency order (Fig 3 :20 "The chain is ordered by dependency, not by importance"): resolve the per-slot residual first, then name what an edge affords, then define what counts as contained, then route. Formula step 2 requires refusing a wrong held term before minting a new one. Applied here: before adding a new cascade mechanism, refuse the wrong held term "a co-failure is a contagion" (Fig 2 :19-21). **Falsifier:** a cascade composition that bonds two states directly with no structural relation, admitted by the framework and not refusable. That breaks Fig 13 :75 for this domain.

### Q3 - Union or partition?

Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55-56 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." Fig 9 :57 "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."

The four conditions (topology, boundary filter, independence, feedback sign) overlap. A node can be highly connected *and* share a common source; a boundary can be well filtered *and* sit under positive feedback. Those intersections are specific compounds with their own loops, not harder versions of one condition. The correct move is to unbundle and examine intersections, not to search for one grand threshold. This is F5 in `01`. **Falsifier:** a partition of the four conditions into disjoint sets that predicts the observed containment decisions as well as the union. Then the union claim is idle.

### Q4 - Are the four conditions isomers?

Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Fig 12 :123 "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." Fig 12 :87 "a threshold relation between two quantities."

Each of the four conditions is a comparison (⋛) between a quantity and a bound: does the residual trend down; does the filter pass less than the next level can absorb; do the frames share evidence below a threshold of overlap; is the loop sign positive. They share the **functional group** "threshold relation", but their operands are different atoms, so under Fig 12 :117 they are **not isomers** in the strict sense. The weaker and defensible claim is that they are four members of one functional group whose shared substructure (⋛, "a threshold relation between two quantities") fixes what kind of check each is, while the qualifier (which quantity, which bound) says which member.

Why this matters: a functional-group reading licenses a product rule, not a sum. Fig 5 :41 "Any one of them at zero stops the mint entirely." The formula step 3 gives the same gate: "gated by a product; any factor at zero forces inertness." So all four conditions must pass for containment; one failing condition is enough for cascade. That is the structural reason no single lever decides (F5). **Falsifier:** a case where three conditions hold and the fourth fails, yet the shock is still contained across repeated trials. Then the product rule is wrong and the conditions add rather than gate.

### Q5 - What is second order here?

Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world." Each first-order composition (a slot crossing an edge) is settled or not against the ground (a measured cascade footprint). Settled first-order paths become atoms at the next level, where the four conditions compare them. So the union decision is a second-order composition over first-order paths, and it needs no new primitive. This is the recursion Fig 12 names, not an import. **Falsifier:** a first-order path that has not been settled yet is required as an operand at the second-order comparison, with no instrument to settle it. Then the level rule is violated.

## CONCLUSION

A cascade is a cycle when it sustains itself and a chain when it dies; the sign of the loop, not connectivity alone, decides. Its composition order is cross-kind (slot state through structural relation to next slot state), leaving a per-step remainder. The four conditions are a union, not a partition, and they are members of one functional group (threshold relations) with a product gate, not strict isomers. Each has its own falsifier above. The derivation adds no primitive, no import that moves the wall, and no number.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the Operators table, and `THE_FORMULA.md`, all local and read 2026-11-22. No world measurement was used.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 2 (common cause), Fig 3 (dependency order), Fig 5 (guard product), Fig 9 (union versus partition, describe before looking), Fig 12 (cycle, catalyst, isomer, functional group, threshold bond, settled molecule), Fig 13 (cross-kind composition, per-step remainder), Operators (⋛ threshold relation), Formula (step 2 refuse before mint, step 3 product gate). Strains after re-census: none. D2's membrane analogue is recorded in `01` and `11`, not carried into this file.
