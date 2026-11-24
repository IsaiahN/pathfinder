# Isomers, catalysts and the order of the union

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

Albert et al 2000 and Doyle et al 2005 report opposite conclusions about high-degree nodes in networks. Both can be right if the two describe different arrangements over the same atom set. Three questions are owed:

1. Are the two cases **isomers** under fig 12's definition?
2. Is the hub a **catalyst** or a **functional group**, and does that distinction decide anything?
3. What is the **order** of the union of threat conditions, and which links can be settled first?

## DOMAIN CENSUS

Atoms held: the six structures and states of fig 13, plus the graph-theoretic atoms of D1 (node, edge, degree, component). Bonds held: the seven, including comparison ⋛ and sequence →. No new primitive is available without import. The perturbation frame D2 supplies the qualifier that selects which member of a kind is being discussed.

## DERIVATION

### Q1 - Are the two cases isomers?

fig 12 :117 (verified exact): *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*

Doyle et al 2005 constructed two graphs with **the same degree sequence** D. In one (SFnet), high-degree vertices form a core and their removal fragments the network. In the other (HOTnet), high-degree vertices sit at the periphery and their removal disconnects only low-bandwidth users. They report that *"the Achilles' heel claim for SF networks does not seem to hold simply on the basis of having a scaling-degree sequence"*.

- Same atoms: identical degree sequence, same number of nodes and edges, same nominal hub count. The written formula (degree distribution) cannot tell the two apart. This is exactly fig 12 :13-16: *"the ingredients are recorded and the arrangement is not"*.
- Different bond: in one graph the high-degree node is bonded to the core (critical to global connectivity); in the other it is bonded to the periphery (locally contained). The typed relation to global connectivity differs, and it is not recoverable from the degree operand.
- Different substance: fragile under targeted removal versus robust under the same removal. Decisive in the behaviour.

**Conclusion:** yes, the two cases are isomers in the figure's sense, at the level of the graph arrangement. This is the strongest single use of fig 12 for this question. It converts a literature conflict into a structural distinction with a stated check.

**Falsifier, written before the run:** if a graph invariant computed from the degree sequence alone (without edge placement) predicts the targeted-removal outcome for both graphs, the isomer claim fails. The two would then be two spellings of one substance, not two substances.

### Q2 - Is the hub a catalyst or a functional group?

fig 12 :119: *"catalyst. A part that survives its own use."*
fig 12 :123: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*

- Under random loss, a high-degree node survives many removals and keeps carrying edges. It behaves as a catalyst: spent and regenerating parts behave differently across uses, and the hub is on the regenerating side until it is finally hit.
- Under targeted loss, the same node is removed at the first step. The catalyst reading no longer applies.
- As a **functional group**, the high-degree position fixes the kind of outcome (connectivity maintained or lost), and the qualifier (random or targeted, core or periphery) says which member of the kind we have. This is exactly the figure's grammar: fig 12 :112, *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."* The qualifier is not decoration; it is where the verdict lives.

**Mode:** `general` for the structural identification; `specified` for the claim that any particular network's hub is on the regenerating side. Single-source (fig 12) for the catalyst reading, triangulated with fig 11's valence rule for the qualifier dependence.

**Falsifier:** show that the qualifier does not change the outcome for any arrangement at any anchor, or that a high-degree node is spent after its first use under random removal in every measured network.

### Q3 - What is the order of the union?

fig 9 :54-57 requires unbundling a union before searching again. The union here has at least two conditions (random threat, targeted threat) and a dynamics condition (what propagates). fig 3 :19-20 says the chain is *"ordered by dependency, not by importance. Each link consumes what the one above produces"*.

Dependency order derived:

1. **Perception**: measure the graph. Node, edge, degree, component, spatial position (fig 3 :4-5).
2. **Vocabulary**: name the arrangements that matter (degree rank, core position, periphery, component membership). This is the link that usually has no instrument (fig 3 :26-27).
3. **Objective / anchor**: say what counts as stable. Percolation threshold, cascade die-out, synchrony, epidemic prevalence. Without this, steps below cannot be assessed.
4. **Planning**: choose the perturbation and the instrument. Random removal, degree-ranked removal, betweenness-ranked removal, load-shift cascade.
5. **Learn and carry**: name what worked, verify it against the ground, and carry it to the next network (fig 3 :14-15).

Post-arrival order inside each threat loop: describe R, find the frame whose closure predicts its shape (fig 9 :25-28), then eliminate candidates against the ground (fig 9 :38-42). *"narrowing gets you close, the ground decides"*.

**Falsifier:** demonstrate a valid measurement of hub effect that can be made before the anchor is named, on which two independent instruments agree. If that exists, the dependency order is wrong and the objective link can be skipped.

### Q4 - Does anything here add a primitive?

No. fig 13 :116: *"Six members, and no amount of arranging produces a seventh"*. The isomer distinction is an arrangement of network and spectrum over nodes. It needs no new member of the minimum set. What it needs is a better descriptor of arrangement, which is an instrument question, not a primitive question (fig 6 :32: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."*).

The available worse instruments already returning something are degree, betweenness, k-core number and spatial position. Each returns a reading. The question is which one discriminates the two isomers at a named anchor. That is a measurement programme, not a figure derivation.

## CONCLUSION

The two reported cases are isomers over the same atom set: same degree sequence, different bond to global connectivity, different behaviour under targeted removal. The hub is a functional group whose qualifier carries the verdict, and a catalyst only under the random-loss member of the union. The union must be unbundled in dependency order: perception, vocabulary, anchor, perturbation, carry. Nothing requires a seventh primitive. What remains open is which arrangement descriptor discriminates the isomers, and that is owed to the ground.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read this session. Doyle et al 2005 and Broido and Clauset 2019 were fetched and read this session. No network was measured for this derivation.

## FIGURE CENSUS

fig 3 (dependency order, middle link), fig 6 (instrument from worse instrument; import adds no atom), fig 9 (union unbundling, narrowing then ground), fig 11 (valence relative to residual), fig 12 (isomer, catalyst, functional group, arrangement is the substance), fig 13 (no seventh member). Strained after re-census: none. The fig 12 isomer definition governs graph arrangements; fig 13 governs the primitive set. Different objects, so no contradiction.
