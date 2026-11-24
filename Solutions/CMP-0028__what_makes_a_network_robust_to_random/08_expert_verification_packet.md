# Expert verification packet - random failure versus targeted attack

**What this is:** a claim in a form a network scientist can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` - not `grounded`.** No removal experiment was run for this packet. This is a shape and a route, not a result, and it is a simulated derivation checked for internal consistency against the figures.

## 1. The claim, in one paragraph

The question bundles two different operations on one graph. Under uniform random removal a heavy-tailed degree distribution keeps its giant component because the few high-degree slots are almost never selected; under degree-ranked removal an agent recomputes the ranking after each step and the same graph fragments early. That is two verdicts on one arrangement, not two values of one scalar. The framework's contribution is only the shape: heterogeneity indexed per slot, a ranking seat on one side and no selector on the other, and a union that must be unbundled before it is searched. The numerical threshold, the exponent and the label "scale-free" are imports from the network-science frame, cited with provenance, not derived here.

## 2. Three checkable sub-claims

### C1 - framework-internal; checkable by reading Figures 1 and 9

- **Statement:** the residual is per slot, and the two removal conditions form a union compound whose verdicts must not be averaged.
- **Source, verbatim:** Fig 1 :19 - *"The residual is indexed by object slot, not aggregated."* Fig 1 :22 - *"Aggregating across slots is how a live signal disappears into an average."* Fig 9 :57 - *"a case in two conditions is not a harder case of either"*
- **Refuter:** exhibit one metric, measured at the ground, whose value under random and degree-ranked removal is the same number for every network in a test set while both behaviours the question names are present.

### C2 - physics-facing; checkable against your own knowledge of percolation on networks

- **Statement:** the two regimes differ by the presence of a ranking seat that recomputes after each removal. Under uniform sampling a heavy-tailed graph deflates one leaf at a time; under ranked removal it collapses at a small fraction. The same hub changes role between regimes.
- **Source, verbatim:** Fig 11 :14-15 - *"nothing selects; what survives is what the ground kept"*; Fig 11 :37 - *"Where a seat exists, something is doing work, and it is exactly what the seat does: enumerate the habitat, rank by cascade, introduce actors, build instruments, read the ground."*; Fig 11 :49 - *"An actor's valence is relative to the residual, not a property it carries."*
- **What to check:** is the characterisation faithful? In the canonical experiment, attack at `f_c` near 0.18 fragments the scale-free model while random failure shows an extremely delayed transition. Does recomputing degree after each removal matter, or is a static precomputed list enough?
- **Refuter:** the same early collapse under a sampler that is exchangeable across nodes with a different seed; or a static list giving the same curve as recomputation. Either kills the seat claim.

### C3 - framework plus world; an isomer reading at matched size

- **Statement:** two graphs with the same node count and the same link count but different degree arrangement are isomers under the figure's definition. The difference is invisible in `(N, L, mean degree)` and decisive in behaviour.
- **Source, verbatim:** Fig 12 :117 - *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* Level caveat: Fig 12 :104 - *"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world"*; at the graph level nodes and edges are atoms, at the substrate level the whole network is one structure.
- **Refuter:** show that degree sequence alone, with wiring varied freely, fully determines both removal curves at the ground. Then the bond information adds nothing and this sub-claim fails.

## 3. What is explicitly not claimed

- Not a scalar robustness index.
- Not a derivation of `f_c`, `gamma`, the inequality `gamma < 3`, or the term "scale-free". Those are imports from the network-science frame with a source gate and a shadow test.
- Not a claim that all heavy-tailed networks behave alike. Modularity, nestedness and connectance also move the curves in the ecology literature.
- Not a claim that this framework predates the network-science results. It does not.
- Not grounded. No removal experiment was run in this derivation.
- Not a claim that hubs are intrinsically good or bad. Their valence flips with the removal regime.

## 4. Provenance

- Verbatim figure text extracted from the local SVG-derived extract `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read 2026-11-22. Every `Fig N :line` citation in this packet was checked against it.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`, local copy, read 2026-11-22.
- The loop and the mode rule: `FRAMEWORK/figures/THE_FORMULA.md`, read 2026-11-22.
- Verification rules: `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, read 2026-11-22.
- Framework essays: four opened 2026-11-22, listed in `05_what_shape_means.md` §7.
- World sources read 2026-11-22: Albert, Jeong and Barabasi 2000 (Nature 406, arXiv full text); Callaway, Newman, Strogatz and Watts 2000 (Phys Rev Lett 85); Cohen, Erez, ben-Avraham and Havlin 2001 (Phys Rev Lett 86); Carlson and Doyle 2002 (PNAS); Nuwagaba, Zhang and Hui 2017 (PLOS ONE). Full URLs, quotes and overlap in `10_source_ledger.csv`.
- This packet compiled 2026-11-22.

## 5. What would settle it

A percolation run at the ground, not a further argument. The figure-grounded reason: Fig 2 :29 - *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*

1. Measure the degree distribution, not just the mean.
2. Remove uniformly at random; record largest component and mean isolated-cluster size against `f`.
3. Remove in descending degree order, recomputing after each step; record the same two curves.
4. Repeat both on an exponential graph matched for N and L.
5. Apply the five refuters in `01_figure_grounded_audit.md` §5 before concluding.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19 and :22, Fig 9 :57, Fig 11 :37 and :49, Fig 12 :117. Five short passages.
2. Check C2 against your own knowledge: are the two regime characterisations faithful, and does recomputation after each removal matter?
3. Name the discriminator that would separate "heavy-tailed arrangement" from "modular but narrow arrangement" on a removal curve alone, or say why none is possible.
4. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
