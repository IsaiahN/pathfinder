# The Tether's answer: when hubs stabilize and when they make a network fragile

**Mode: `specified` - not `grounded`.** This is a shape and a route, not a result for any particular network. Simulated derivation checked against the figures (`05_what_shape_means.md` section 6), not a ground reading.

## 1. The residual it answers

For the same network and the same high-degree node, a network-level measurement flips sign when the perturbation changes from random loss to targeted removal, or when the quantity propagating changes from a harmless one to a harmful one. The unexplained quantity is the **valence of the hub**. R is indexed per (network, perturbation, instrument) slot, never averaged (fig 1 :19, :22). The question is a union compound, not one hard problem (fig 9 :4-5).

## 2. The shape

1. **Valence is relational.** fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."* A hub is a benefactor to the residual "keep the giant component under random loss" and a malfactor to the residual "keep it under targeted removal of the highest-degree nodes". fig 11 :51: *"No standing list of good actors survives a change of residual."*

2. **The question splits.** Random failure and targeted failure are two conditions; propagation is a third. fig 9 :4-5: *"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."* Verdicts stay separate and are never averaged.

3. **An anchor must be named first.** fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* "Stable" must become percolation threshold, cascade die-out, synchrony or epidemic prevalence. Until then the domain has no anchor.

4. **Degree ordering and adjacency are independent frames.** fig 13 :35: *"Neither are spectrum, gradient and network."* A high degree (spectrum) is not the same claim as being critical to global connectivity (network). The two can come apart, and the literature shows they do (Doyle et al 2005, same degree sequence, different outcome).

5. **The two reported cases are isomers.** fig 12 :117: *"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* Same degree sequence, different arrangement, different fragility. This is the structural form of the answer: it is not that one paper wins, but that two substances were described over one atom set.

6. **The hub is a functional group.** fig 12 :123: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."* The qualifier (random or targeted, core or periphery) is where the verdict lives. Under random loss the hub also behaves as a catalyst, *"a part that survives its own use"* (fig 12 :119).

7. **The sign is not returned.** The framework gives the shape of the answer, not the sign for a given network. The sign requires a measurement at a named anchor. This is the canonical shape-not-a-name limit, not an evasion.

## 3. What it explicitly does not say

- Not that hubs are universally good or universally bad. Both are names for a slot the framework leaves open.
- Not that a power-law degree distribution is universal. Broido and Clauset 2019 find strongly scale-free structure rare across 928 networks.
- Not that the famous result is refuted by the engineering critique. The two are isomers; the record of where each arrangement came from separates them.
- Not a derivation of connectivity from degree. fig 13 says ordering does not produce adjacency.
- Not `grounded`. No network was measured for this derivation.

## 4. What would settle it - the ground

A discriminating instrument, not a further argument. From *The Hard Problem is About Source*: an instrument that reads green *"cannot comment on the source"*; the spectrometer resolved it. Here the corresponding questions are:

- At a named anchor, does degree rank, betweenness, k-core number or spatial position discriminate the two isomers? A descriptor that predicts the targeted-removal outcome out of sample would name the mechanism.
- **Targeted test:** remove nodes in degree-ranked order and report the giant-component fraction or cascade size after each removal, for both the core-hub and periphery-hub arrangements at the same average degree.
- **Random test:** remove the same number of uniformly chosen nodes and report the same statistic. The two curves, not a verbal claim, are the result.
- **Propagation test:** with a harmful quantity propagating, does the epidemic threshold vanish when the high-degree nodes are the connectors? Pastor-Satorras and Vespignani 2001 predict it does.
- Standing falsifiers from `01`: same sign at the same anchor for random and targeted removal; an anchor-independent stability definition on which independent instruments agree; adjacency derived from degree; a seventh primitive.

## 5. The honest stop

**Unreached, not unreachable.** fig 8 :39: *"So a search that finds nothing is never a proof of absence."* The sources converge on a conditional but do not supply a universal sign. That is a property of the question, not a silence in the framework. The answer stops where the instruments stop distinguishing arrangements, and records the lineage so the stop is checkable. Indiscernibility is not identity.

## 6. One-paragraph version for outreach

> The Tether does not answer "do hubs stabilise?" with a yes or a no. It says the question is two questions. A hub's valence is relative to the residual, so the same high-degree node holds a network together under random loss and becomes the point of failure under targeted removal. Before either can be measured, an anchor must be named: percolation, cascade die-out, synchrony or epidemic prevalence. Degree ordering and adjacency are independent, so a high degree is not the same thing as being critical to global connectivity. The famous result and the engineering critique of it are isomers over the same degree sequence, same atoms, different arrangement, different substance. What the framework returns is that shape and a set of falsifiers written in advance. The sign for your network is owed to a measurement, not to an argument, and until that measurement exists the slot stays open.
