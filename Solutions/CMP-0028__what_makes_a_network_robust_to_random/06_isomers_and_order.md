# Isomers and order in the network-robustness question

**Mode: `specified`.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

The question bundles two operations and one graph. Three supporting questions are owed:

1. Are the two networks compared in the literature **isomers** under Fig 12's definition, and at which level?
2. Is the relation between the two removal regimes a **symmetric** relation or an **ordered** one?
3. What is the **dependency order** of the chain from degree arrangement to cascade to threshold, and where can it break?

## DOMAIN CENSUS

Atoms held at the network level: nodes and edges. Bonds available: the seven, including sequence, comparison, disjunction and subtraction. At the substrate level the whole network is one structure among the six. No seventh primitive is available without import. Currency at the network level: connectivity. Anchor: measured removal curves. Order by dependency: enumerate before ranking, describe before choosing a frame, settle before composing.

## DERIVATION

### Q1 - Are the compared networks isomers, and at which level?

- Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
- Fig 12 :104: *"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world"*
- The apparent strain: Fig 13 names network as a structure (a primitive), yet a graph has parts. Re-census with Fig 12 :104 resolves it: at the substrate level the network is an atom; at the graph level nodes and edges are atoms. Irreducibility is level-relative, so no strain remains.
- Albert, Jeong and Barabasi compared networks *"that have the same number of nodes and links"* with a Poisson distribution in one case and a power law in the other, and found opposite behaviour. Same atoms by count, different arrangement, different substance. **They are isomers under Fig 12's definition at the graph level.**
- The isomer claim is **not** about random removal versus attack. Those are two operations on one graph, not two graphs. Earlier reading retracted and recorded in `01_figure_grounded_audit.md` §7.

**Falsifier:** if degree sequence alone, with wiring varied freely, determines both removal curves at the ground, the arrangement carries nothing and the isomer reading fails.

### Q2 - Is the bond between the regimes symmetric or ordered?

- Fig 12 :92: *"Symmetry is what decides whether an arrangement is a new thing."*
- Uniform random sampling passes the disjunction test, Fig 12 :64: *"remove one. Does it still work? Yes."* Any node can be swapped for another and the sampling procedure is unchanged.
- Degree-ranked removal passes the sequence test, Fig 12 :72: *"A then B; B needs A to have happened"*. Remove the highest-degree node, then recompute, then remove the next. Swapping the order gives a different graph and a different outcome.
- The operators are therefore related by an **ordered** bond, not a symmetric one. There is no single term "node removal" under which the two are spellings of one operation (Fig 1 :22).

**Falsifier:** show that both procedures give the same distribution of largest-component sizes over many seeds and networks at the ground. Then they are one term and this distinction is empty.

### Q3 - Union or partition? Is disjunction the right bond inside the compound?

- Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*
- The overlap of the two conditions is the graph itself. The compound is (arrangement, operation), with its own loop and its own ground.
- Fig 12 :121: *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."* After each removal the degree sequence is recomputed, so the attack is a feedback loop, not a fixed list. Random sampling has no such re-entry. This is a second structural difference between the regimes, independent of F3 in the main audit.
- The union is unbundled before search: two verdicts, one per regime, never averaged.

**Falsifier:** if a precomputed static removal list gives the same attack curve as recomputing after each removal, the cycle reading is wrong for this domain.

### Q4 - What is the dependency order, and where can it break?

Fig 3 :20: *"The chain is ordered by dependency, not by importance."*

1. Enumerate the habitat: nodes, edges, degrees, removal operations, metric (Fig 11 :43).
2. Measure the per-slot degree arrangement (Fig 1 :19). Without this step, every node looks alike and no asymmetry is representable.
3. Separate the two operations (Fig 9 :54-58). Without this step the outputs are averaged.
4. Recompute degrees after each attack removal (Fig 12 :121). Without this step the attack is a list, not an adaptive procedure.
5. Read the ground (Fig 1 :23). Without this step no threshold is settled.

A break at step 2 cannot be repaired by effort at step 5. Fig 3 :18: *"Where a given chain stops is a reading, never a property of the chain."* So "we have no `f_c` number" is a reading of the chain stopping at step 5, not evidence that the upper steps are wrong.

### Q5 - Cascade order

Fig 11 :52: *"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."*

The first-order effect of removing one hub is the loss of that node. The second-order effect is the loss of the paths it carried. The residual that matters is the fragmentation of the largest component, often several steps out. Scoping the metric to degree (first order) is why a hub's role can look benign under random failure and decisive under attack. This corroborates the valence finding in `01_figure_grounded_audit.md` F5 without repeating it.

## CONCLUSION

The two graphs compared in the canonical experiment are **isomers at the graph level**: same node and edge counts, different bond arrangement, different behaviour. The two removal regimes are **not** isomers of each other; they are ordered, non-symmetric operations on one graph, one exchangeable and one adaptive. The compound is a **union**, unbundled into two verdicts. The chain from arrangement to threshold is ordered by dependency, and the attack contains a feedback cycle that random sampling does not. All four claims are `specified` and unmeasured here. The one falsifier that would damage the most structure is the degree-sequence-only result in Q1: if arrangement carries nothing, Fig 12 :117 does not govern this domain and the shape must be re-censused.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` read this session, and the public sources listed in `10_source_ledger.csv`, each opened 2026-11-22. No measurement was taken in this derivation.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 3 (dependency order), Fig 9 (union versus partition), Fig 11 (cascade, habitat), Fig 12 (isomer, symmetry, sequence, cycle, level-relative irreducibility), Operators (comparison). Strained after re-census: none. The one apparent strain, network as both primitive and composite, was dissolved by Fig 12 :104 at two levels.
