# Structure and order in the JIT question: isomers, functional groups, catalysts and cycles

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

The operations literature compares "lean / just-in-time" with "resilient / redundant" as if they were recipes whose ingredients could be listed and compared. Two questions are owed: (1) do two supply arrangements with the same ingredients but different bonds differ in the way the figures say isomers differ, and (2) what order do the bonds have, given that lean systems are drawn as a chain.

## DOMAIN CENSUS

Atoms held: a supply arrangement can be written over actors (supplier, plant, logistics, customer), states (material present or absent at a slot, time), and structures (flow, network, gradient of cost or time). Bonds held: the seven, including → sequence, ∥ disjunction and ⋛ comparison. No new primitive is available without import. The substrate: Fig 13 :74 : *"Everything else is a composition across the two kinds, never within one."* Fig 13 :24 names the network as the structure *"that entities relate, and influence travels"*, so a supply graph is an instance of a held structure, not a seventh term.

## DERIVATION

### Q1 : Are a lean arrangement and a resilient arrangement isomers?

Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*

Take two arrangements over the same atom set: {tier-1 supplier, tier-2 supplier, plant, logistics route, inventory slot, information channel}.

- Arrangement L (lean): single supplier → plant → customer, inventory slot minimized, information flows along the same chain.
- Arrangement R (redundant): (supplier A ∥ supplier B) → plant → customer, inventory slot present, information channel shared across firms.

Same atoms, different bonds. Under Fig 12 they are **isomers**, not variants of one thing. The difference is invisible in an ingredient list (both have suppliers, a plant, a route and a channel) and decisive in behaviour under disruption. This is exactly why a comparison that reports only "inventory days" and "number of suppliers" as separate scalar metrics misses the substance: it records the atoms and not the bond.

**Falsifier, written before the run:** if two arrangements over the same atom set but with a → versus a ∥ bond in the same slot show no systematic difference in per-slot continuity under a controlled disruption, the isomer claim fails and the two are the same substance under a different name.

**Status: triangulated** for the figure definition (Fig 12 :117) with the operations observation in the Wikipedia lean entry that cutting inventory and consolidating suppliers improved normal performance while leaving fewer alternatives; low overlap because the figure gives the rule and the world gives the case. `specified`, ungrounded.

### Q2 : What is the functional group they share?

Fig 12 :123: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*

Both L and R contain the pull path `supplier → plant → customer`. That is a functional group: a sequence of state-structure crossings that says "this is a value stream". The qualifier is what fills the redundancy slot (→ single source, ∥ multiple sources, buffer as a presence, flexibility as a substitute process). Fig 12 :119 adds a second structural object: *"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."* A stocked buffer is spent in a disruption; a qualified alternative supplier or a shared information relationship is regenerating. Nothing in a standard bill of materials records which a term is, so two arrangements that look identical on paper behave differently on the second disruption.

**Falsifier:** if a buffer and a regenerating supplier relationship produce the same per-slot continuity trajectory across two successive disruptions, the catalyst distinction does not apply here.

### Q3 : Why the chain drawing cannot close the loop

Fig 12 :121: *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."*

A lean value stream is drawn and taught as a chain. A chain cannot close by construction, so the feedback that would register a disruption and reconfigure the arrangement is outside the picture. The resilience literature's "sense and adapt" loop is a cycle, and its sign decides the outcome: negative feedback restores continuity, positive feedback is the cascade described in the network source (Wikipedia, Cascading failure: the failure of one part increases the load on others). This is not a claim that lean firms never adapt; it is a claim about what the chain notation can represent. Fig 12 :121 is structural. The operations fact that kanban itself is a feedback signal is a world detail and would need an instrument to verify in any given firm.

Operators table :34: *"the only bond a flat chain can express, so every term today is a sequence whether or not it should be"*. In a chain vocabulary, redundancy ∥ and threshold ⋛ cannot be written, so "resilience" gets described as "more of the same sequence with a bigger number". That is a notation failure, which Fig 12 names as a collapse, not a fact about supply chains.

**Falsifier:** show a chain-notation supply model that represents ∥ redundancy and a signed feedback cycle without changing its bond vocabulary. Then the notation claim is false.

### Q4 : The order of the bonds

Fig 12 :71 (sequence): *"A then B; B needs A to have happened"*. Fig 12 :63 (disjunction): *"either suffices; not both required"*. Fig 12 :87 (comparison): *"a threshold relation between two quantities"*.

Lean's core is →: the next step needs the previous delivery. Resilience adds ∥ at the supplier slot: either supplier suffices. The decision to switch is ⋛: a threshold on time-to-survive versus time-to-recover (the supply-chain-resilience source describes these two measures). The Three guards are not relevant here; the ordering is:

```
(supplier A ∥ supplier B) → plant → customer
             ⋛  (threshold on continuity vs recovery time)
```

A vocabulary holding only → can state the plan and cannot state the alternative or the threshold. That is the middle-link failure of Fig 3 restated in bond terms: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* (Fig 3 :27). The instrument here is the counter that makes the threshold observable.

**Strain, named:** ⋛ is defined as a threshold relation between two quantities. At the arrangement level the operands are continuity and recovery time, which are quantities, so the type is clean here (unlike the QMGR case where settled molecules were applied to ⋛). No strain after this re-census.

## CONCLUSION

A lean and a redundant supply arrangement over the same atom set are **isomers** under Fig 12 :117: same atoms, different bond, different behaviour under disruption. They share a **functional group** (the pull path) and differ in the qualifier that fills the redundancy slot. Buffers and regenerating relationships are distinguished by the **catalyst** structure. The chain drawing cannot express the closing feedback loop, which is a notation failure named by Fig 12 :121 and Operators table :34. The bond order is ∥ inside the supplier slot, → along the value stream, ⋛ at the decision threshold. All of this is `specified` and ungrounded; it is a shape for what to measure, not a measurement.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the Operators table, the four essays opened this session, and the world sources listed in `10_source_ledger.csv`. No firm data or disruption experiment was used.

## FIGURE CENSUS

Fig 3 (middle link has no instrument), Fig 11 (valence relative to residual; permanent work), Fig 12 (isomer, functional group, catalyst, cycle, bonds and their tests), Fig 13 (cross-kind composition; network as a held structure), Operators table (→ sequence, ∥ disjunction, ⋛ comparison; flat chain limitation). Strains after re-census: none hidden; the ⋛ operand type is clean at this level.
