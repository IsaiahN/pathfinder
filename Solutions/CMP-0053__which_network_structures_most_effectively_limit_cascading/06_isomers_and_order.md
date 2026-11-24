# Isomers, functional groups, catalysts and cycles: supporting derivation for CMP-0053

**Mode: `specified` on the structural analogies, `general` on the figure definitions. Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §7).**

## RESIDUAL

The question asks which network structure limits cascades without blocking beneficial diffusion. Before ranking any structure, two supporting questions are owed:

1. If two topologies share the same nodes and the same number of links but differ in wiring, are they **isomers** under Fig 12, and does that explain why studies disagree?
2. Is there a dependency order among node-level robustness, module-level function and beneficial spread, so that a measurement at one level cannot stand in for another?

## DOMAIN CENSUS

Atoms held: nodes and links, plus the structural primitives of Fig 13 (network, gradient, spectrum). Bonds held: the seven, including sequence and comparison. No new primitive is available without the flow-typed link imported in `01` F6. The domains are the same as in `01` §1: substrate, failure dynamics, diffusion dynamics, ecology/finance, verification. The comparison is between topologies over the same atom set, so it stays inside closure(Γ) (Fig 6 :21, *"MINT composes inside the closure and can never add an atom."*).

## DERIVATION

### Q1 - Are two topologies with the same nodes and link count isomers?

- Fig 12 :94: **"The arrangement is the substance."**
- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Two networks with the same node set and the same link count, but with links placed differently, satisfy the definition: same atoms, different bond, different substance. Their cascade and diffusion behaviour can differ even though an ingredient list cannot tell them apart.
- World check: the Internet null-model study reports that *"the degree distribution is not enough to identify the robustness of a network"* and that micro- and meso-scale structure (assortativity, transitivity, rich club, community structure) carry the difference (Wang et al. 2015). This is exactly the isomer finding in network language.
- **Verdict:** yes, `specified`, triangulated across Fig 12 and an empirical study with low overlap. **Falsifier, written before the run:** exhibit two topologies with identical atoms and identical bonds, under the same flow, threshold rule and measurement, that still differ in cascade or diffusion outcome. Then the bond is not carrying the difference and this finding fails.

### Q2 - What is the functional group shared by all candidate structures?

- Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**
- All candidates for this question share the functional group "a set of links over which influence travels" (Fig 13 :24, *"that entities relate, and influence travels"*). The qualifier is the arrangement: modular, lattice, scale-free, multiplex, overlapping. The group says it is a network; the qualifier says which member.
- Consequence: asking "which member wins" is asking which qualifier to attach to a shared group. The figures do not rank qualifiers. The ranking is empirical and is `gap` in `01` F7.
- **Falsifier:** find a system in which the shared group itself (influence travels over links) does not fix the outcome, so that two networks differing only in whether links carry influence at all behave identically. Then the group is idle and this finding fails.

### Q3 - Catalyst links: parts that survive their own use

- Fig 12 :119: **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."**
- This is the figure-grounded form of the beneficial control channel in Korkali et al. 2017: the communication network *"facilitated valuable systemwide control functions"* during a cascade, and coupling *"performed valuable functions in arresting the spread of cascades."* A control link is used repeatedly and is not consumed by the cascade it helps stop. A one-shot redundant link is spent.
- The figure warns that nothing records which a part is. So a topology description that lists links without recording whether each is catalytic (regenerating control) or spent (one-shot redundancy) has lost the decisive distinction. This is the concrete content of the missing atom in `01` F6: **type the link by whether it is regenerating under the flow**, with provenance.
- **Falsifier:** show that for a given system every link is spent after one use, so no catalytic part exists; then the typing adds nothing there. The general figure claim survives; its application to that system is withdrawn.

### Q4 - Cycles: the sign of the feedback loop decides

- Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."**
- Cascade models are feedback cycles: a failed node raises load on neighbours, which fail and raise load further (positive feedback, cascade closes). Beneficial diffusion models with social reinforcement are also cycles: an adopter raises the adoption probability of neighbours, who adopt and reinforce further (also closing). A chain model cannot represent either closure, which is why a purely topological path-count misses the cascade.
- The sign, not the presence of a cycle, decides the outcome. This is the structural reason the same clustering coefficient can slow a simple contagion and accelerate a complex one: with one exposure needed, redundant links in a cluster are spent; with two or more needed, the same links are the wide bridge that lets the loop close (Centola and Macy 2007; Horsevad et al. 2022). The world literature calls this a transition; the figures call it the sign of the loop.
- **Falsifier:** a cycle with identical sign and identical link typing that sometimes closes and sometimes does not under the same parameters, with no further variable to appeal to. Then the sign is not deciding and this finding fails.

### Q5 - Dependency order: node, module, system

- Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."** Fig 3 :20-21: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."*
- Three links in this question, in dependency order: (1) can we measure per-node failure probability and diffusion reach; (2) can we measure module-level function, which Bagrow et al. 2015 show can fail *"well before the network disintegrates"*; (3) only then can we speak of system-wide cascade size or diffusion speed. Reporting only (3) is a reading taken below a break, which Fig 3 :22-23 calls *"a reading of nothing"*.
- This is also why a global robustness average is forbidden (Fig 1 :19). The order is dependency, not importance: the system measure is not more important, it just arrives last.
- **Falsifier:** show a system in which module-level function can be read directly without first reading per-node outcomes, with a measurement that does not assume the module reading. Then the order can be shortened for that system.

## CONCLUSION

Two topologies over the same atom set are Fig 12 isomers; degree distribution alone cannot tell them apart. Their shared functional group is "links over which influence travels", and the qualifier is the arrangement that the figures do not rank. The decisive link property is whether it is catalytic (regenerating under the flow) or spent, which is the missing typed atom. The sign of the feedback cycle, not its presence, decides whether a cascade or a diffusion closes. And the three measurement levels stand in dependency order, so a system-level average cannot stand in for per-node and per-module readings.

This rescues what is defensible in the world literature without forcing a ranking: the disagreement between studies is an isomer and sign-of-loop effect, not a contradiction to be averaged away. `metric topology = best` remains unproven and is recorded as `gap`; `topologies over a shared atom set are isomers whose behaviour depends on link type and loop sign` is a checkable structural claim.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, Fig 3, 6, 12 and 13. World checks from the sources opened 2026-11-22 and listed in `10_source_ledger.csv`. No simulation or measurement was run.

## FIGURE CENSUS

Fig 3 :19-23 (dependency order, reading below the break), Fig 6 :21 (composition inside closure), Fig 12 :94, :117 (isomer), :119 (catalyst), :121 (cycle), :124 (functional group), Fig 13 :24 (network as influence travel), Fig 1 :19 (per slot). Strained after re-census: none. The ecology study's "modularity hurts mutualism" and the cascade study's "modularity helps containment" were initially read as a figure conflict; re-census placed them as two different flows, which is the valence finding F2, not a strain.
