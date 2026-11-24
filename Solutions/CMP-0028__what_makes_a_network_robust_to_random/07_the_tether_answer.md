# The Tether's answer on random failure and targeted attack

**Mode: `specified` - not `grounded`.** This is a shape and a route, not a result. Simulated derivation checked against the figures (`05_what_shape_means.md` §6), not a ground reading.

## 1. The residual it answers

The same graph keeps its connectivity when nodes are removed uniformly at random, but fragments when a small fraction is removed in descending degree order. A single "robustness" score cannot hold both facts, because it averages across slots (Fig 1 :22) and across two different operations (Fig 9 :57). The residual is a union compound, not one hard question. Its ground is a percolation measurement on a specified graph with a specified degree distribution.

## 2. The shape

1. **Heterogeneity across slots, not the aggregate.** Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* A few high-degree slots hold most of the paths; most slots carry one or two links. Uniform sampling almost never selects the live slots, so the giant component deflates one leaf at a time. A narrow degree distribution has no live slots and fragments at a well-defined threshold. The mean degree is not the answer; the distribution is.
2. **A ranking seat on one side and no seat on the other.** Random failure is the unmaintained habitat: *"nothing selects; what survives is what the ground kept"* (Fig 11 :14-15). Targeted disruption is the maintained habitat: Fig 11 :37 - *"Where a seat exists, something is doing work, and it is exactly what the seat does: enumerate the habitat, rank by cascade, introduce actors, build instruments, read the ground."* The attacker recomputes degree after each removal, so the attack is a cycle, not a fixed list (Fig 12 :121).
3. **Two verdicts, never averaged.** Fig 9 :57: *"a case in two conditions is not a harder case of either"*. Robustness under random removal and fragility under targeted removal are separate outputs of the same arrangement under two habitats. They do not combine into one number.
4. **Robustness is a leftover, not a primitive.** Fig 13 :74: *"Everything else is a composition across the two kinds, never within one."* Network is a structure among the six; robustness and fragility are what a composition leaves behind (Fig 13 :125). Adding links uniformly does not change contact with a degree-ranking attacker (Fig 11 :40).
5. **Same atoms, different arrangement.** The exponential and scale-free graphs compared in the canonical experiment have equal N and equal L but different behaviour. Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* The difference is invisible in `(N, L, mean degree)` and decisive in the removal curves.
6. **Valence flips with the regime.** A hub preserves paths under uniform removal and is the first casualty under ranked removal. Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."* There is no standing list of good or bad nodes.
7. **The framework returns a shape, not a number.** Fig 9 :32: *"you get a kind of thing, never the answer itself"*. `f_c`, `gamma`, the inequality `gamma < 3`, and the name "scale-free" are imports from the network-science frame, cited with provenance, not derivations.

## 3. What it explicitly does not say

- Not a scalar robustness index. That is the aggregate the figures disallow.
- Not a derivation of the percolation threshold, the exponent, or the scale-free label. Those are ground readings from the world frame.
- Not a claim that all heavy-tailed networks behave alike. Fig 13 :115: *"The set is closed. The arrangements are not. That gap is why import exists."* Modularity, nestedness and connectance also move the curves in the ecology literature.
- Not a claim that this framework came first. The 1999 to 2001 network papers predate it. Their priority is theirs; the framework offers a shape, not a history.
- Not grounded. No removal experiment was run in this derivation.

## 4. What would settle it - the ground

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Here the anchor is a percolation run on a graph with a measured degree distribution:

1. **Per-slot discriminator:** measure the degree distribution, not just the mean. Confirm that a small fraction of slots carries a large fraction of links.
2. **Random curve:** remove nodes uniformly at random and record the largest component and mean isolated-cluster size against `f`. Expect slow deflation and an extremely delayed transition in a heavy-tailed graph.
3. **Targeted curve:** remove in descending degree order, recomputing after each step. Expect an early collapse at a small `f_c`.
4. **Matched control:** run both curves on an exponential graph with the same N and L. Expect little difference between its two curves.
5. **Standing falsifiers:** the five conditions in `01_figure_grounded_audit.md` §5. If any fires, withdraw or re-census.

## 5. The honest stop

**Unreached, not unreachable.** The figures give the shape and the dependency order. They do not give the number, and they cannot discriminate among heavy-tailed families on shape alone. Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* A search that finds no figure line for `f_c` is not proof that no such line could exist; it is a report that no line was found after a genuine census. The answer stops at the limit of what the available instruments can distinguish and records the lineage so the stop is checkable. Indiscernibility is not identity.

## 6. One-paragraph version for outreach

> The Tether does not give a robustness score for a network. It says the score was the wrong question. The asymmetry comes from two things that the average hides: the arrangement of connectivity across individual nodes, and the fact that one removal regime has an agent that ranks nodes by degree while the other has no selector at all. Remove nodes uniformly from a network with a heavy-tailed degree distribution and you almost never touch the few hubs that hold the paths, so the giant component deflates slowly. Let an attacker rank by degree and recompute after each removal and the same network fragments early. These are two verdicts on one arrangement, not two values of one property, and the same hub changes role between them. The framework returns that shape, plus the shape of the experiment that would close it. It does not derive the critical fraction, the power-law exponent, or the name "scale-free". Those are measurements from the network-science frame, and they are cited as imports with provenance, not claimed as figure derivations. What is offered in advance is the refuter: a homogeneous network with the same asymmetry, or a heavy-tailed network without it, would break the shape.
