# Bond typing, union versus partition, and scale order in the two contagion rules

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

Two rules run on one contact substrate. Under simple contagion one exposure suffices; under threshold contagion a count or fraction must reach θ. Three questions are owed: (1) are the two rules two bonds or one bond with a parameter; (2) is their combination a partition or a union; (3) what is the dependency order between them. A fourth question is a check: are they isomers under Fig 12's definition?

## DOMAIN CENSUS (reused, not restated in full)

In Domain 1 the actors are nodes, edges and contact weights, with measured contact data as anchor. In Domain 2 the actors are a susceptible node, one infected neighbour and λ, with an infection curve as anchor. In Domain 3 they are a node, k neighbours and θ, with an adoption curve as anchor. Domain 4 is the coupled system with final adopted fraction as anchor. No new primitive is needed; every operator used is already in the set.

## DERIVATION

### Q1 - Two bonds or one knob?

- Operators table :21, Fig 12 :62: disjunction means "either suffices; not both required", symmetric, tested by "remove one. Does it still work? Yes." This is the simple-exposure rule: one donor is enough and removing the other changes nothing.
- Operators table :49-51, Fig 12 :87: comparison means "a threshold relation between two quantities", ordered, tested by "is it about which is larger, rather than both being present? Yes." This is the threshold rule: the count against θ.
- Fig 12 :94 "The arrangement is the substance." Fig 12 :95: two entries with identical ingredients but a different bond are "different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."
- ⇒ **The two rules are two bonds.** A model that records only the contact graph has recorded the ingredients and not the arrangement.
- **Strain, named:** the world literature writes θ = 1 as the simple limit of one model family (Min and San Miguel: θ = 1 recovers SIR). Re-census: that is a statement about outcomes; the figure line is about the recorded relation. Different objects. Both are kept. The world collapse is not silently erased.
- **Falsifier:** find one bond, passing one test, from which both "one suffices" and "which is larger" follow without adding a second typed relation. If found, this answer fails.

### Q2 - Partition or union?

- Fig 9 :4: rules that work well on different subsets are "not one hard question but several well-formed ones. Split it rather than search."
- Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."
- Fig 9 :55: "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."
- ⇒ When nodes are disjoint (some θ = 1, some θ > 1), the split is a **partition** and each node's rule is independent. When both rules act on the same node and the same contact, the split is a **union** and the intersection is a specific compound (Fig 9 :57). The mixed phase reported by Min and San Miguel and by Andres et al. is that compound, not a blend.
- **Falsifier:** show a single lever clearing the intersection while the second condition still binds. That would break Fig 9 :55.

### Q3 - Dependency order

- Fig 3 :20: "The chain is ordered by dependency, not by importance." Each link consumes what the one above produces.
- Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it." Fig 13 :88 "The residual of the turn just closed is what the next turn composes against, so no two passes begin from the same place."
- ⇒ Successful simple exposures settle first. Their count is the operand of the threshold comparison. The threshold cannot be evaluated before something is available to count; a reading below that break is a reading of nothing (Fig 3 :22-23). This is a `specified` ordering claim.
- **World check:** Min and San Miguel describe the transmission probability as *"a simple contagion process triggering a process of complex contagion"*; Andres et al. describe simple contagion governing early and triggering complex contagion later. Two independent wordings, one dependency order.
- **Falsifier:** a working model of the same system in which the threshold fires before any single exposure settles.

### Q4 - Are they isomers?

- Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Fig 12 :124 "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."
- Read over a shared substrate, the two rules use the same nodes and edges and differ only in the bond applied to each node's neighbourhood. By Fig 12's definition they are **isomers of the contact substrate**: same atoms, different bond, different cascade substance. The infection-pattern matrices reported by Contreras, Cencetti and Barrat are the behavioural difference that the formula (the adjacency matrix) cannot show.
- The weaker, always-available claim is that they share a **functional group**: both are `node -> relation -> adoption`, with a different qualifier (one Exposure suffices versus count reaches θ). Fig 12 :124 governs that reading.
- **Falsifier:** show that one rule requires an atom the other does not (for example, threshold contagion requires a hyperedge that simple contagion cannot express in the same substrate). Then the isomer claim fails and only the functional-group claim survives. Note that simplicial contagion in Contreras et al. does use hypergraphs; for the threshold-on-graphs case the substrate is shared, so the isomer claim holds there.
- **Triangulation status:** single-source for the figure definition (Fig 12), with the world-side behavioural check from Contreras et al. recorded as corroboration, not as a second figure witness.

### Q5 - What about cycles and feedback?

- Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."
- Adoption changes the exposure count of neighbours, which changes their threshold state, which changes adoption. This is a cycle, not a chain. The sign decides die-out versus takeoff. Watts' threshold model shows the two regimes, with the cascade condition reducing to a percolation problem in one regime and local node stability in the other.
- **Falsifier:** a model in which adoption does not alter any neighbour's exposure count. Then the loop is absent and a chain model suffices.

### Q6 - A catalyst-like object?

- Fig 12 :119 "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."
- A contact that transmitted once and remains available is not consumed by transmission; it can transmit again or serve as reinforcement. Simple contagion treats it as reusable; the threshold rule counts it as one of several. Whether the same contact is "spent" depends on the mechanism and the recovery state, and a model that records only the edge cannot record which. This is a `general` structural analogue, not a measured claim.
- **Falsifier:** an empirical system in which a transmitting contact is consumed and cannot contribute again, with no recovery, and the model nevertheless treats it as reusable.

## CONCLUSION

The two contagion rules are two bonds over one substrate, not one knob (Q1). Their combination is a partition when nodes are disjoint and a union when both conditions bind the same node (Q2). Simple transmission is upstream of the threshold comparison (Q3). Over a shared graph substrate they are isomers by Fig 12's definition, with the weaker functional-group claim always available (Q4). Their feedback is a cycle whose sign decides takeoff (Q5). A reusable contact is a catalyst-like part whose state a graph-only record cannot hold (Q6). None of this yields θ or λ, and none identifies which bond produced an observed curve. The derivation stays `specified`.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` (local); the Operators table in the same extract; `THE_FORMULA.md`; the eight world sources in `10_source_ledger.csv`. No measurement was used in this derivation.

## FIGURE CENSUS

Fig 3 (dependency order), Fig 8 (record versus contents), Fig 9 (split, union, mixed region, filters), Fig 11 (contact cascades, relative valence), Fig 12 (bond definitions, arrangement, isomer, functional group, cycle, catalyst, settled molecule), Fig 13 (cross-kind composition, residual into next turn), Operators table (bond tests). Strains after re-census: one live, the theta = 1 outcome collapse versus the bond distinction, named in Q1 and re-examined in `11_audit.md`. No other strain was hidden.
