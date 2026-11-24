# WATSON answer: what makes a network robust to random failure but fragile to targeted attack

**Mode: `specified`, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** By the framework's own rule (*The Recursive Self-Improvement Trap*: LLM output can *"quickly simulate an approximate answer/output"* but *"the truly testable output would need to be derived from the real architecture or working the formula yourself"*) this run cannot settle the question it reports on. No removal experiment was performed. Figures are primary and decide; world sources are secondary corroboration only.

## QUESTION

Decide, in effect terms, what makes one graph tolerant of uniform node removal yet fragile to a small degree-ranked attack. Option A: treat robustness as one property and report a scalar index. Option B: treat the question as a union compound of two operations on one arrangement, and return a shape plus two separate verdicts, with the numbers owed to the ground. What each leads to: A aggregates away the very asymmetry asked about (Fig 1 :22) and gives an ungrounded number; B states what the figures license, keeps the regimes separate, and names the experiment that would close it.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor, partition or union, order by dependency.

- **R (the residual).** Two behaviours of one graph under two removal operations. Arity: two conditions, so a **union compound**, not one hard question (Fig 9 :54). Symmetry: not interchangeable; uniform sampling is exchangeable across nodes, degree-ranked selection is ordered by a comparison. Scale: one removal step, then a cascade of disconnection, then a regime shift at a threshold.
- **Domain 1, the graph.** Actors: nodes, edges, per-slot degree, hubs. Currency: connectivity and largest-component size. Anchor: measured adjacency and degree distribution. Partition question at the graph level (which arrangements cross from a narrow to a heavy-tailed distribution).
- **Domain 2, the removal regimes.** Actors: a uniform sampler; an informed agent that ranks and recomputes. Currency: fraction removed `f`, critical fraction `f_c`. Anchor: a percolation run. **Union** with Domain 1: the compound is (arrangement, operation).
- **Domain 3, the measurement frame.** Actors: the analyst and the chosen metric. Currency: residual R between predicted and observed connectivity. Anchor: the ground, never agreement (Fig 2 :29).
- **Order by dependency (Fig 3):** enumerate the habitat first; measure per-slot degree before choosing a metric; unbundle the two regimes before comparing; settle at the ground before composing. A break at step 2 cannot be repaired at step 5.
- **Strain test:** Fig 13 names network as a structure, yet a graph has parts. Re-census with Fig 12 :104 (irreducibility is level-relative) dissolves it. No strain after re-census. One gap is recorded: no figure line gives a numerical threshold.

## TETHER (primary, verbatim)

Cited against the local extract `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVG-derived text.

**Domain 1, the graph. Triangulated.**

- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> the degree distribution governs; the mean degree does not.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." -> a scalar robustness score erases the hubs that carry the signal.
- Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." -> graphs matched for N and L but differently arranged are different substances.
- Triangulation: Fig 1 (per-slot residual in perception) and Fig 12 (bond carries information the operands do not) address different quantities with low overlap.

**Domain 2, the removal regimes. Triangulated.**

- Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." -> two verdicts, never averaged.
- Fig 9 :57 "a case in two conditions is not a harder case of either" -> the compound is categorically different, not a mixture.
- Fig 11 :14-15 "nothing selects; what survives is what the ground kept" -> random failure is the unmaintained habitat.
- Fig 11 :37 "Where a seat exists, something is doing work, and it is exactly what the seat does: enumerate the habitat, rank by cascade, introduce actors, build instruments, read the ground." -> targeted attack is the maintained habitat.
- Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries." -> the same hub flips role between regimes.
- Triangulation: Fig 9 (union/partition) and Fig 11 (two habitat modes) are low-overlap figures.

**Domain 3, the measurement frame. Triangulated for the rule, gap for the number.**

- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." -> agreement among readers cannot replace a percolation run.
- Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool" -> the world sources below share a 2000 evidence pool and are one chain, not three witnesses.
- Fig 2 :42 "Buy independence in proportion to the cost of being wrong." -> one careful outside check is worth more than a list.
- Fig 9 :32 "you get a kind of thing, never the answer itself" -> the framework returns a shape, not `f_c` or the word "scale-free".
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." -> the missing number is a gap, not a proof that no line exists.
- **Gap:** no figure line yields a numerical percolation threshold or a distribution family. Recorded as a gap, not smoothed.

## WORLD (secondary sources read, 2026-11-22)

- **Physics / network science.** Albert, Jeong and Barabasi, Nature 406, 2000 (arXiv cond-mat/0008064 full text): "error tolerance comes at a high price: these networks are extremely vulnerable to attacks, i.e. to the selection and removal of a few nodes that play the most important role in assuring the network's connectivity." Predicts: heterogeneity yields both behaviours at once. Corroborates the compound verdict. Overlap: foundational source for the next two physics papers.
- **Mathematics / statistical physics.** Callaway, Newman, Strogatz and Watts, Phys Rev Lett 85, 2000 (arXiv cond-mat/0007300): "we study percolation on graphs with completely general degree distribution, giving exact solutions for a variety of cases, including site percolation, bond percolation, and models in which occupation probabilities depend on vertex degree." Predicts: degree-dependent occupation, not the mean, sets resilience. Corroborates the per-slot claim. Overlap: cites Albert et al.
- **Physics / Internet.** Cohen, Erez, ben-Avraham and Havlin, Phys Rev Lett 86, 2001 (arXiv cond-mat/0010251): "even networks with a<=3, known to be resilient to random removal of sites, are sensitive to intentional attack." Predicts: random robustness and attack sensitivity coexist. Corroborates. Overlap: same 2000 evidence pool as the two above.
- **Engineering / systems biology.** Carlson and Doyle, PNAS 99 Suppl 1, 2002 (PMC128573): "robust yet fragile external behavior" and "robust to what is common or anticipated but potentially fragile to what is rare or unanticipated". Predicts: the two regimes are designed-for versus unanticipated habitats. Corroborates the union compound. Overlap: different field and low overlap with the physics chain.
- **Ecology.** Nuwagaba, Zhang and Hui, PLoS ONE 12(12), 2017: "the removal of generalists leads to the most secondary extinctions". Predicts: high-degree actors are the ones whose loss fragments the system, and specialists are more tolerable. Corroborates the valence flip. Overlap: cites Albert et al.; domain is low-overlap.

No world source conflicts with the figure verdict, so the conflict rule was not triggered. The three physics papers agree partly because they share an evidence pool; their agreement is one chain talking, not three independent confirmations. The verdict rests on the figures.

## VERDICT (from the figures)

The question is a union compound, not a property. Robustness under uniform removal comes from heterogeneity across slots: a few hubs hold most paths and random sampling almost never selects them. Fragility under targeted attack comes from a ranking seat that recomputes degree after each removal and selects exactly those live slots. The two verdicts are kept separate and never averaged. Robustness itself is a derived composition property, not a seventh primitive; the compared graphs are isomers at the graph level (same N and L, different arrangement); and the same hub flips valence between regimes. The framework returns this shape only. The percolation threshold, the power-law exponent and the name "scale-free" are provenanced imports from the physics frame and are not claimed as derivations. `specified`, ungrounded. The strongest checkable point is the refuter written before the run, not the shape itself.

- **cost if wrong:** bounded and locatable. The packet states mode, refuters and provenance before the conclusion, so an error is findable rather than invisible. The avoidable cost is spending an outside reader's independence by sending the full framework before their verdict on stage 1 (Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it."). That cost is priced at Fig 2 :42.
- **undoable:** yes. The numerical claims and the label are removable without touching the shape; `07_the_tether_answer.md` and `08_expert_verification_packet.md` already remove them. A sent claim can be superseded by a retraction, and no primitive has to be withdrawn.
- **reversed by:** a ground reading, not agreement. A homogeneous-degree network showing the same asymmetry; a heavy-tailed network without early collapse under ranked removal; the same asymmetry under an exchangeable sampler; degree sequence alone determining both curves; or a derivation of a seventh primitive. Any of these fires a refuter in `01_figure_grounded_audit.md` §5 and reverses the verdict. A figure re-census that yields a numerical threshold would close the recorded gap.

## Sources

- [Figures, verbatim text with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [THE SEAT MAP Field Guide, amended (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_SEAT_MAP_Field_Guide_amended.md)
- [Error and attack tolerance of complex networks (Albert, Jeong, Barabasi, 2000)](https://arxiv.org/html/cond-mat/0008064v1)
- [Network robustness and fragility: percolation on random graphs (Callaway et al., 2000)](https://arxiv.org/abs/cond-mat/0007300)
- [Breakdown of the Internet under intentional attack (Cohen et al., 2001)](https://arxiv.org/abs/cond-mat/0010251)
- [Complexity and robustness (Carlson and Doyle, 2002)](https://pmc.ncbi.nlm.nih.gov/articles/PMC128573)
- [Robustness of rigid and adaptive networks to species loss (Nuwagaba et al., 2017)](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0189086)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [Decoding Tacit Knowledge: Why Context, Subtext, and Pretext Matter](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)

Folder material synthesized: `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, `08_expert_verification_packet.md`.
