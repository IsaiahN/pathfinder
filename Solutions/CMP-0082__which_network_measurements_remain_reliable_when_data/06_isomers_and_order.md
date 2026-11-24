# Supporting derivation: union, order, isomers, and refusal

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

`01` established that reliability is a property of (measure, channel, ground), not of a measure alone, and that the three defects form a union. Three supporting questions remain: (1) is the union a partition or a compound, and what follows for the order of work; (2) why can two measures over the same observed graph differ in reliability; (3) is the protocol a checklist or a sequence.

## DOMAIN CENSUS

Atoms held: nodes, edges, slots, the true graph `G`, the observed graph `Ĝ`, the channel `C`, the residual `R_s`, per-slot estimators. Bonds held: the seven, including sequence (→), subtraction (−), comparison (⋛), and the unary negation (¬), which is not a bond. No new primitive is available without import from survey statistics.

## DERIVATION

### Q1 - Partition or union? The unbundling step

`Fig 9 :54`: "And when the split lands on a union rather than a partition, unbundle before you search again." `Fig 9 :55`: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." `Fig 9 :57`: "a case in two conditions is not a harder case of either".

The three defects overlap. Incomplete and biased combine into missing-not-at-random; uneven and biased combine into a platform whose inclusion probability is tied to its own ranking. A single lever clears the region where only one condition holds and leaves the intersections standing, "because the second condition still binds" (`Fig 9 :56`). So the work is a union of four loops: incomplete, uneven, biased, and the intersections. The fourth is categorically different, not a harder instance of the first three.

**Falsifier, written before the run:** if one correction drives the per-slot residual to zero for all three conditions and their intersections against an independent ground, the union reading fails and the problem may be treated as one condition.

### Q2 - The order is a dependency chain, not a checklist

`Fig 3 :4-16` names the links: perception, vocabulary, objective, planning, learn and carry. `Fig 3 :20`: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces". Mapped here:

1. **Perception:** can the slot be observed at all. Incompleteness breaks here.
2. **Vocabulary:** do we have a per-slot term for the measurement, or only a global aggregate.
3. **Objective:** can we say what counts as progress in our own terms, namely a small per-slot residual.
4. **Planning:** choose a measure and a sampling design under incomplete information.
5. **Learn and carry:** verify against the ground and carry the method to the next network.

`Fig 3 :19`: "Optimising a link that already works cannot rescue one that does not." A more sophisticated centrality statistic is work at link 4. If link 1 never delivered the slot, that work arrives at a step that cannot use it. `Fig 3 :22`: "A step whose input never arrives cannot be diagnosed, only its predecessor can." And `Fig 3 :27`: "A link with no instrument is not a link that works. It is a link nobody has looked at."

`Fig 12 :111`: "A vocabulary without bonds can name a state and cannot name a route to one." `Fig 12 :112`: "A plan is a sequence. A goal is a comparison. Progress is a subtraction." So the five conditions in `07` §2 are bound by the ordered bond →, not the symmetric bond +. Each consumes the previous link's output. Writing them as a checklist would overcharge or undercharge the wrong thing: `Fig 12 :92` warns that under a symmetric bond, k operands have k! spellings and one term, while under an ordered bond different orders are different terms. Here different orders are different protocols.

**Falsifier:** if the five checks can be applied in any order with identical results against an independent ground, the sequence claim fails and a symmetric checklist is the right form.

### Q3 - Are two measures on the same graph isomers?

`Fig 12 :117`: "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." `Fig 12 :94`: "The arrangement is the substance."

Degree and betweenness computed on the same observed graph share atoms (nodes and incident edges) but differ in arrangement: a local count versus a global shortest-path comparison. Under `Fig 12 :117` they are **isomers**. That is why they can differ in reliability on the identical dataset: the atoms are the same, the bond is not, and the behaviour under corruption differs. An observed graph does not determine a measure's robustness any more than a formula determines a molecule's behaviour.

The weaker reading is a **functional group**. `Fig 12 :123`: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." All per-slot measures share the substructure "residual indexed by slot", which fixes the kind of reliability claim they can support. The qualifier picks the member. This is the defensible common claim: per-slot measures share a functional group, not an identity.

**Falsifier, written before the run:** if two measures with identical atoms and different arrangements show identical per-slot residuals under all three defects and their intersections against an independent ground, the isomer reading fails and the flat formula is sufficient.

### Q4 - Refusal is a negation, not a subtraction

A platform-published metric is not deleted from the record. It is refused as a ground. `THE_FORMULA.md` step 3: "NOTHING IS EVER DELETED, and the reach falls because something was ADDED." Operators table :57: "a refutation is a negation, which is why a vocabulary without it can only accumulate." `Fig 6 :42`: "What is recorded only grows. What is reachable is derived, and it can fall."

So the protocol does not tell practitioners to discard platform data. It adds a refusal term: this metric may be composed over only after it is ranged against an independent ground. What falls is its standing to be used as an anchor, not the data. That keeps the correction reversible and auditable. A refused term can become reachable again only if something new is minted, here an independent enumeration (`Fig 6 :45`).

**Falsifier:** if discarding the data and refusing its standing produce different per-slot residuals against the same ground, the negation reading is wrong and subtraction is the right operator.

## CONCLUSION

The union reading (`01` F4) implies four loops, and the dependency chain makes their order load-bearing: perception first, then per-slot vocabulary, then the objective, then planning. The five conditions of the answer are a sequence bound by →, not a checklist bound by +. Two measures over the same graph are isomers under `Fig 12 :117`, which explains why robustness is per measure and not per dataset; their common per-slot substructure is a functional group. A platform metric is refused by ¬, not removed by −, so the record keeps the data and loses only its standing as a ground.

All four sub-claims are `specified`, unmeasured. The ground that would settle them is an independently enumerated network with per-slot residuals under each defect.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`; the Operators and Symbols tables; `THE_FORMULA.md`; the three essays listed in `05_what_shape_means.md`. No measurement was used.

## FIGURE CENSUS

Fig 3 (dependency order, break, no instrument), Fig 6 (reach falls by addition, refusal cannot cycle), Fig 9 (union versus partition, unbundle, case in two conditions), Fig 12 (sequence, functional group, isomer, k! spellings), Operators table (negation is unary, refutation as negation), Formula (steps 3 and 5). Strains after re-census: none. The apparent tension between "nothing is deleted" and "discard biased data" is resolved by re-census: the protocol refuses standing, it does not delete the record.
