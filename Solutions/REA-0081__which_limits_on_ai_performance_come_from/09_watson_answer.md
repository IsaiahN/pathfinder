# WATSON answer: which AI limits are architectural and which are resource limits

**Mode: `specified` on the structural shape, `general` on the distinction, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** By *The Recursive Self-Improvement Trap*, LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This run synthesizes material already in `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. It cannot settle which cause is active in any real system. No measurement was taken.

## QUESTION

Decide, in effect terms, what the Tether says about the question: do limits on AI performance come from current architectures or from limited data, computing power, and energy? Option A says all such limits are architectural and more resources cannot help. Option B says all are resource limits and a larger budget always helps. What each leads to: A spends no budget on a shortfall that may be unfound, and refuses cheap search; B spends an unbounded budget against a wall that cannot move, and imports an atom that was not needed. The figures offer neither A nor B. They offer a four-way split and a discriminating procedure.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor, partition or union, and order by dependency.

- **R (the residual).** A performance shortfall. Arity: the question proposes two causes, but a census finds at least four conditions, so this is a **union compound**, not a partition. Symmetry: asymmetric. Architecture sets the wall; the budget sets how much of the reachable space is visited. Scale: architecture governs kinds and primitives; resources govern arrangements inside a fixed closure. Fig 9 :4 says to split rather than search when readings do not shrink with effort.
- **Domain 1, architecture / closure.** Actors: `Γ`, `atoms(Γ)`, `closure(Γ)`, the wall, IMPORT. Currency: composition and reach. Anchor: the figures as metalaws, plus a measurement for any specific wall. Question type: partition boundary, what composes across the two kinds.
- **Domain 2, resources / budget.** Actors: searchers, corpus, FLOPs, watts, tokens, instruments. Currency: bits and actions, two currencies that do not add. Anchor: the ground, by measurement. Question type: unfound versus unfunded inside a fixed reach.
- **Domain 3, habitat / contact.** Actors: the model, the environment, the benchmark, the user. Currency: contact with the ground. Anchor: the ground, never agreement. Question type: agent-and-habitat, not agent alone.
- **Domain 4, verification / evaluation.** Actors: metrics, benchmarks, expert readers. Currency: agreement and residual. Anchor: the ground, never agreement. Question type: which cause is active.
- **Order by dependency (Fig 3).** Describe the residual in effect terms before choosing a frame; decide whether the term is in `closure(Γ)` before asking about budget; run SEARCHED, then INWARD, then OUTWARD, keeping the last two as separate tracks; check habitat contact before accepting a benchmark solve as capability.

Strain test: "architecture" in machine-learning discourse names implementation choices, while in the figures it names the closure of a frame. An architecture change is an import only if it adds a new atom or kind; otherwise it is a rearrangement inside the same reach. Re-census resolved it as a vocabulary collision, not a figure conflict. Two strains remain live and are named in `01_figure_grounded_audit.md` §6.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs. Verdicts are kept per domain and never averaged.

- **Domain 1, architectural limit, triangulated.** Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Fig 13 :118 "infinite effort inside a finite reach." Three low-overlap routes, an idempotence law, a wall operator, and an unbounded-arrangements law, converge: a wall is moved by import, not by buying more of what the frame holds.
- **Domain 2, resource limit, triangulated.** Fig 8 :41-42 "Unreachable-at-budget: the term is already in the closure and was not found, so the remedy is more search, not another atom." Fig 6 :49 "more search at the same reach: is it in here and unfound? The closure does not change. Same atoms, same wall, more of the space actually visited." Fig 12 :127 "the budget is what decides how much of the space is reached at all." The remedy is search, allocation, or an instrument improved from a worse one that already returned something (Fig 6 :32).
- **Domain 3, contact limit, single-source.** Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves." Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." One figure governs this; world sources are compatible but do not settle it.
- **Domain 4, indiscernibility, triangulated.** Fig 8 :40 "Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions." Fig 6 :27 "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." The distinction is real in principle and unavailable to a single curve in practice.
- **Two currencies, single-source in the figures.** Fig 12 :125 "A composition costs in two currencies, and they do not add." Fig 12 :130 "Summing them into one figure is the error this names, not the fix for it."
- **Report the stop, triangulated.** Fig 13 :134 "Unreachable is a verdict here, not a silence." Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

No figure line was strained to fit. Two live strains are recorded rather than smoothed: the conditional status of complexity-theoretic impossibility results, and the vocabulary collision over "architecture."

## WORLD (secondary sources read 2026-11-24)

Each source gives field, author and venue and year, a quote recorded when read, a prediction here, and whether it corroborates or conflicts. World sources never overrule the figures.

- **Machine learning, resource allocation.** Jordan Hoffmann et al., DeepMind research blog and NeurIPS 2022, "Our main finding is that the current large language models are far too large for their compute budget and are not being trained on enough data." Predicts a budget-allocation effect inside a fixed architecture, which is Domain 2. Corroborates Fig 8 :41-42. Overlap with other world sources: moderate, it is the source Villalobos builds on.
- **AI forecasting, data and compute limits.** Pablo Villalobos et al., ICML 2024, PMLR 235, "the growth in compute is also subject to limits, and current fast rates may not be sustained indefintely." Also: "For AI progress to continue into the 2030s, either new sources of data or less data-hungry techniques must be developed." Predicts a finite budget and a need for new techniques after exhaustion. Corroborates Domain 2 and is compatible with an import after a budget wall. Overlap: high with Hoffmann, whose scaling law it uses.
- **Mathematics and complexity theory, architectural limits.** William Merrill and Ashish Sabharwal, TACL 2023, "this suggests a potential inherent weakness of the scaling paradigm." Predicts an architecture-level ceiling that more scale does not remove. Corroborates the shape of Domain 1, but the theorem is conditional and asymptotic, so it does not certify a particular wall. Overlap: low with the ML scaling sources, different method and venue.
- **Evaluation and human measurement.** Rylan Schaeffer, Brando Miranda, Sanmi Koyejo, NeurIPS 2023, "alleged emergent abilities evaporate with different metrics or with better statistics, and may not be a fundamental property of scaling AI models." Predicts that a claimed new capability can be a metric artifact. Corroborates Domain 4 and Fig 1 :27. Overlap: low, evaluation rather than scaling.
- **AI evaluation, reasoning limits.** Parshin Shojaee et al., Apple Machine Learning Research and NeurIPS 2025, "frontier LRMs face a complete accuracy collapse beyond certain complexities." Predicts a shortfall that persists despite adequate token budget. Compatible with Domain 1, Domain 2, or Domain 3, so it does not discriminate. Corroborates the need for a discriminating intervention; conflicts with no figure line. Overlap: low with the scaling-law sources.
- **AI methodology.** Rich Sutton, 2019, "general methods that leverage computation are ultimately the most effective, and by a large margin." Predicts that budget and general methods win over hand-built structure. Corroborates Domain 2 and stands in productive tension with the complexity result. Overlap: low, historical essay rather than experiment.
- **Energy policy and infrastructure.** International Energy Agency, Key Questions on Energy and AI, 2026, "Data centres accounted for around 1.5% of the world's electricity consumption in 2024, or 415 terawatt-hours (TWh)." Predicts a physical ceiling on the action account. Corroborates Fig 12 :127. Overlap: moderate with Brookings, which cites the IEA.
- **Energy governance.** Brooke Tanner, Derek Belle, Cameron F. Kerry, Nicoleta Kyosovska, Andrea Renda, Elham Tabassi, Andrew W. Wyckoff, Brookings, 2026, "future constraints that power availability and grid capacity may place on AI compute." Predicts that part of the budget ceiling is physical and institutional, not financial. Corroborates Domain 2. Overlap: high with the IEA source.
- **Framework essays, same author as the figures.** Isaiah N, The Library of Babel, "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question"; The Hard Problem is About Source, "If several paths create the same behavior, then behavior is a projection with lossy information"; Decoding Tacit Knowledge, "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world"; The Recursive Self-Improvement Trap, "the truly testable output would need to be derived from the real architecture or working the formula yourself." All predict the shape-not-a-name stop, the need for a discriminating instrument, and this run's simulated status. Corroborate, but share an evidence pool with the figures, so they are weak witnesses.

No world source conflicts with a figure verdict. The conflict rule was not triggered; the apparent conflict between the metric-mirage result and the reasoning-collapse result was resolved by re-census, since they measure different objects. Agreement among sources that draw on Hoffmann or on the IEA is one witness, not two.

## VERDICT (from the figures)

The figures govern the question directly, and they do not answer it with either of the two options offered. An architectural limit is a closure limit: no amount of data, compute, or energy adds a new kind, and only import moves the wall. A resource limit is a budget limit inside a fixed closure: the remedy is more search, better allocation, or a sharper instrument, not a new kind. A third condition is more search at the same reach, and a fourth is a limit of contact with the habitat rather than of the agent. The two headline causes are different facts with different instructions, yet from inside a single performance curve they look the same. Data and compute are held in separate accounts and never summed. This is a `specified`, ungrounded result. It does not classify any named model.

- **cost if wrong:** bounded and locatable if the packet is sent with its mode and refuters attached. If an architectural limit is mislabeled as a budget limit, an unbounded budget is spent against a wall that cannot move, and Fig 6 prices a wrong atom above starting from primitives. If a budget limit is mislabeled as architectural, an unneeded import is paid for. If a contact limit is mislabeled as either, the agent is optimized while contact is unchanged. The avoidable cost is sending a single averaged score instead of four verdicts, which Fig 1 :22 names as the way a live signal disappears.
- **undoable:** yes. The classification is revisable as instruments improve; no primitive has to be withdrawn. A sent claim can be superseded by a corrected packet. The two live strains are recorded, so they can be removed when an instrument settles them.
- **reversed by:** a ground reading, not agreement. A fixed-closure budget sweep with a residual that persists and does not trend down, an architecture swap at fixed or lower budget that reaches what the old one cannot, a metric swap that turns a claimed discontinuity into a continuous curve, or a real-habitat transfer test would each move one verdict. A seventh primitive derived from the six would break the framework. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [The figures, as text (local extract)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [WATSON 60, the figures as metalaws (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\60_FIGURES_AS_METALAWS.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [The seat map field guide (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_SEAT_MAP_Field_Guide_amended.md)
- [An empirical analysis of compute-optimal large language model training](https://deepmind.google/en/blog/an-empirical-analysis-of-compute-optimal-large-language-model-training)
- [Training Compute-Optimal Large Language Models](https://arxiv.org/html/2203.15556)
- [Will we run out of data? Limits of LLM scaling based on human-generated data](https://arxiv.org/html/2211.04325)
- [Position: Will we run out of data? (PMLR)](https://proceedings.mlr.press/v235/villalobos24a.html)
- [The Parallelism Tradeoff: Limitations of Log-Precision Transformers](https://arxiv.org/html/2207.00729v4)
- [Are Emergent Abilities of Large Language Models a Mirage?](https://proceedings.neurips.cc/paper_files/paper/2023/hash/adc98a266f45005c403b8311ca7e8bd7-Abstract-Conference.html)
- [The Illusion of Thinking](https://machinelearning.apple.com/research/illusion-of-thinking)
- [The Bitter Lesson](https://bitterlesson.ai/)
- [Key Questions on Energy and AI, executive summary](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary)
- [Global energy demands within the AI regulatory landscape](https://www.brookings.edu/articles/global-energy-demands-within-the-ai-regulatory-landscape/)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [Decoding Tacit Knowledge: Why Context, Subtext and Pretext Matter](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)

Folder material synthesized: `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, `08_expert_verification_packet.md`.
