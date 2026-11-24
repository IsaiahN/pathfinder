# Union, negation and order: the supporting derivation

**Mode: `specified`, with the operator claim in `general` mode. Not `grounded`.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

The main audit (`01`, F1 and F2) leaves three supporting questions open: (Q1) is the relation between condition classes a partition, a union or an isomer relation? (Q2) what is the dependency order of the operators "refuse", "compare", "subtract", "introduce"? (Q3) does the union or the partition govern the compound that remains after a single lever clears the single-condition region? Each has its own falsifier.

## DOMAIN CENSUS (redone here, not imported from `01`)

- **Atoms held:** shocks (demand, supply, financial), a propagation channel (credit, prices, expectations), a slot (sector, household, balance sheet), a reading (aggregate activity), a seat (policy authority), an anchor (realized outcomes). No seventh atom is available without import.
- **Bonds held:** the seven, of which `→` sequence, `⋛` comparison and `−` subtraction bear here; plus the unary `¬`, which is not a bond.
- **No anchor-free domain:** each condition class ranges against realized activity and employment, which do not update on announcements. If a class had no such anchor, it would not be a domain yet and would be reported as a gap.

## DERIVATION

### Q1 - Are the condition classes a partition, a union, or isomers?

- Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
- Fig 9 :57 "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."
- Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Fig 12 :124 "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

A partition requires disjoint classes with one lever each, which the source file does not supply: its own list mixes causes and propagations (demand decline, supply disruption, interacting shocks, slow adjustment, instability, malinvestment, financial shocks, tipping points). A union fits: the classes overlap, and the compound in an intersection is categorically different, not merely harder.

The **isomer** reading is stronger and narrower. Consider two recession instances written over the same atom set {shock, channel, slot, seat, anchor}: instance A has demand shock to households through income with policy easing; instance B has a financial shock to banks through credit with liquidity provision. Same atoms, different bonds between them, different behaviour under the same instrument. That satisfies Fig 12's definition: an isomer, where the difference is carried entirely by the bond, not by the ingredient list. The weaker reading is a **functional group**: both share `shock → channel → slot`, which fixes the kind, with the qualifier (which shock, which channel) fixing the member.

- **Verdict:** union for the decision problem; isomers over a fixed atom set for the two instance types; functional group for the shared propagation skeleton. These are different objects and are kept separate, not averaged.
- **Falsifier, written before the run:** if two instances can be written without an atom the other requires (for example instance A with no credit channel, or B with no demand slot), the isomer claim fails and only the functional-group or union claim stands. If a single lever closes both instances and their intersection, the union claim fails.
- **Status:** `specified`, triangulated (Fig 9 union rule and Fig 12 isomer definition; low overlap between the union/partition logic and the bond-level identity rule). The fixed-atom condition is a live constraint, named, not hidden.

### Q2 - What is the operator order?

The temptation is to write one operator chain: refuse, then compare, then subtract, then introduce. The figures do not license that chain, because the operators have different arities and different objects.

- Fig 12 :112 "A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."
- Operators :70-77 amendment: seven of the eight operators are bonds joining two operands; "Negation joins nothing, so its symmetry entry is empty rather than no".
- Formula step 2 names the REFUTED bin: a term held is false, and what is owed is a refusal rather than an explanation.
- Fig 6 :42 "What is recorded only grows. What is reachable is derived, and it can fall."
- Fig 11 :61 "The seat's power is asymmetric. Introduction is available; exclusion is not."
- Fig 3 :20 "The chain is ordered by dependency, not by importance."

Dependency order, separate strands:

1. **Refusal strand (unary).** Enumerate held terms bound and predicting. A term whose residual persists and does not trend down is the candidate for `¬`. Adding the refusal adds nothing to the record and lowers the reach (Fig 6 :42). This is the only operator that can make a claim false rather than absent.
2. **Comparison strand (ordered bond).** `⋛` is "a threshold relation between two quantities" (Fig 12 :87). Here the quantities are with-policy and without-policy amplitude at the same slot. Goal-shaped, not a field or a force.
3. **Subtraction strand (ordered bond).** `−` is "A with B removed or absent" (Operators :43); progress is a subtraction, so what is measured is the removal of residual, not the presence of a new atom.
4. **Introduction strand (seat, not an operator).** The seat adds actors and instruments to a habitat it did not author. It cannot subtract contact. It is permanent work, not a solved state (Fig 11 :63).

These four strands do not compose into a single sequence: strand 1 acts on a held term, strands 2 and 3 act on quantities, strand 4 acts on the habitat. Reading one against another is the error Fig 6 :31 forbids: "Neither answer tells you much about the other. Run them as two tracks, and never read one against the other."

- **Falsifier:** show a single bond under which a refusal and a comparison join two operands and the symmetry test identifies it. That would collapse the strands and break the arity census.
- **Status:** `specified` on the separation, `general` on the arity rule; triangulated (Operators amendment and Fig 12 :112; the amendment governs arity and the main line governs the operator inventory).

### Q3 - Does the residue after one lever stay a union?

- Fig 9 :56 "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."
- Fig 9 :58 "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."
- Fig 9 :34 "candidates kept + φ*" and Fig 9 :38 "elimination compounds here, and only here"; Fig 9 :41 "so keep every cut ranked and reversible".

After a lever clears a single-condition region, the remaining set is smaller and categorically different. Verdicts must be kept per compound, ranked and reversible, because a wrong cut removes the answer and speeds up (Fig 9 :40 "a wrong cut removes the answer and speeds up"). Applying a second identical lever to the residue is asking an old room to answer a new question; Fig 10 :72 "When the question changes, the room should change. A room that stays fixed while the question moves is the failure; the correlation is only its symptom."

- **Falsifier:** show that the residue after a lever has the same conditions and the same bond structure as the pre-lever set, so the same room remains correct. Then Q3 fails.
- **Status:** `specified`, single-source on the figure side for the "categorically different" claim (Fig 9), corroborated in a different field by *The Library of Babel*: "Perhaps your problem was a bundle or conflation of several problems masquerading as one?" The corroboration is secondary, not a second figure.

## CONCLUSION

The condition classes form a union for decision purposes, and specific recession instances are isomers over a fixed atom set with a shared functional group. The four operators (refusal, comparison, subtraction, introduction) act on different objects and cannot be flattened into one chain. After a single lever, the residue is a new compound requiring a new room, and every cut must be kept ranked and reversible. The fixed-atom condition on the isomer claim and the missing instrument for bracket fidelity are live constraints, named rather than hidden.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session; `THE_FORMULA.md`; the two essays opened directly on 2026-11-22. No measurement was used.

## FIGURE CENSUS

Fig 3 (dependency order), Fig 6 (reach falls on refusal, opposed instruments), Fig 9 (union, residue, reversible cuts), Fig 10 (room changes with question), Fig 11 (asymmetric seat), Fig 12 (isomer, functional group, operator inventory, comparison and subtraction), Operators table (unary negation and its price). Strains after re-census: the fixed-atom condition on the isomer claim, and the unary refusal versus seat introduction distinction; both named, none hidden.
