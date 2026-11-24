# WATSON answer: can information gain alone guide rational inquiry?

**Mode: `general` on the shape, `specified` where applied. Not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This run synthesizes material already in `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*: "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself") it cannot settle the question it reports on. No measurement was taken.

## QUESTION

Decide, in effect terms, whether a rational inquirer's next move (probe, term, frame, experiment) can be selected by maximizing information gain alone, or whether the move must also pass checks of relevance, cost, and consequences. Option A: gain alone is the guide; it leads to a self-consistent policy that can aim at the wrong slot, cannot compare two currencies, and has no ground-tied stop. Option B: gain is a filter and a gradient generator, and the move is admitted only after a per-slot residual, a two-currency bargain, and a ground range; it leads to a checkable policy with a pre-registered refuter.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor, partition or union, and order by dependency.

- **R (the residual).** The choice of next inquiry move. Arity: four conditions on a candidate (slot, gain, two currencies, ground range); a unary gain score has the wrong arity. Symmetry: a global gain scalar is slot-permutation invariant, while Fig 1 :19 "The residual is indexed by object slot, not aggregated." breaks that symmetry. Scale: the loop runs within one scale for steps 1 to 5 and across scales at step 6, so the currency at each scale differs.
- **Domain 1, perception and the metric.** Actors: agent, object slots, observations. Currency: residual per slot, description length. Anchor: the ground as the only metric. Partition question: what counts as a signal at all.
- **Domain 2, mint and acceptance.** Actors: candidate term, library, ground. Currency: `cost(φ) + left(R,φ)` against `cost(R)`. Anchor: the ground settles; a gate is not the ground. Partition question: which candidate is worth having.
- **Domain 3, composition currencies.** Actors: operands, typed bonds. Currency: bits and actions. Anchor: structural, the two-currency rule itself. Partition question: two readings, never one.
- **Domain 4, alignment and verdict.** Actors: frames, anchor, witness frame. Currency: overlap, independence, cost of being wrong. Anchor: the immovable ground. Partition question: what makes agreement mean anything.
- **Domain 5, habitat and contact.** Actors: chain links, rooms, habitat actors. Currency: `R = h² × S`, contact. Anchor: the ground. Union compound: several conditions must hold at once.
- **Partition or union.** The four legs are a union compound (Fig 9 :55), not a partition. A single lever clears one condition and leaves the intersections standing. Unbundle before searching again.
- **Order by dependency.** Per-slot residual, then relevance (what would count as progress here), then both currencies, then the ground range, then contact in the habitat. Fig 3 :19 "Optimising a link that already works cannot rescue one that does not."

Strain test applied: Fig 5 :46 (curiosity manufactures a gradient) initially seemed to endorse gain maximization; re-census assigns :46-47 to the drive and :48 to the measure of success, different quantities. One precision limit remains and is named: the question does not fix whether "information gain" means Shannon entropy reduction or Bayesian expected KL; both are frame-internal, so the verdict holds under either.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs.

- Fig 1 :23 "The ground enters as the only metric." -> a self-scored gain cannot be the metric that settles the move.
- Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." -> gain and compression achieved are produced by the scoring frame.
- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> relevance is the slot index inside the residual, not an added preference.
- Fig 1 :28 "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look." -> a global gain scalar has the wrong symmetry.
- Fig 5 :48 "Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing." -> curiosity is a mechanism, not a verdict.
- Fig 5 :42 "The acceptance test is a bargain, not a threshold." -> gain is one term of a comparison that already charges cost and leftover.
- Fig 12 :125 "A composition costs in two currencies, and they do not add." -> the "alone" claim fails categorically.
- Fig 12 :126 "Bits price the description. Actions price finding out whether it holds." -> gain is priced in one currency, inquiry in another.
- Fig 12 :130 "Summing them into one figure is the error this names, not the fix for it. A price in bits and a price in actions are two readings, held apart." -> a single objective that merges them is the named error.
- Fig 2 :42 "Buy independence in proportion to the cost of being wrong." -> consequences enter as a price on independence, not as a multiplier on gain.
- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." -> the verdict requires a range against something the frames cannot move.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." -> gain is a filter for the budget.
- Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." -> combining is categorical, not additive.
- Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves." -> relevance is contact with the residual.
- Fig 5 :47 "So a system that starts with nothing can still be shaped, by seeking the gap that is large and compressible, which is the same quantity the acceptance test scores." -> what survives of gain alone: a gradient generator and a filter.

Triangulation status: the refusal of gain-only is triangulated across Fig 1 (agent metric), Fig 5 (mint bargain), and Fig 12 (composition currencies), three figures with different actors and low overlap. The union reading is triangulated across Fig 9 and Fig 12 (union rule and bond structure). The ground-range requirement is triangulated across Fig 2, Fig 7, and Fig 9. The per-slot claim is `single-source` at figure level (Fig 1) but is corroborated by two independent external fields below. No figure conflict was found after re-census; the precision limit on "information gain" is declared, not hidden.

## WORLD (secondary sources read)

World sources are corroboration only and never overrule the figures. Each was opened on 2026-11-23.

- **Information theory / machine learning.** Tishby, Pereira and Bialek, "The information bottleneck method" (arXiv:physics/0004057, 1999/2000): "These issues were intentionally left out of information theory in its original formulation by Shannon, who focused attention on the problem of transmitting information rather than judging its value to the recipient." Predicts that gain about one variable cannot select what is relevant without a second, relevance variable. Corroborates Fig 1 :19 and F2. Overlap: independent of the framework.
- **Economics.** Maćkowiak, Matějka and Wiederholt, "Rational Inattention: A Review" (Journal of Economic Literature 61(1), 2023): "The theory of rational inattention assumes that agents cannot process all available information, but they can choose which exact pieces of information to attend to." Predicts attention as a costly optimized choice rather than a maximized gain. Corroborates F3 and F5. Overlap: independent of the framework, but shares the economics evidence pool with the next source.
- **Economics / decision theory.** Sims, "Rational Inattention and Monetary Economics" (handbook chapter, Princeton): "Finding whether a test well indicates oil is present may cost thousands of dollars, yet provide only the answer to a yes-or-no question" Predicts that bits and monetary action cost are different currencies. Corroborates Fig 12 :125-126 directly. Overlap: high with the JEL review (same lineage), so these two count as one witness on the economics leg. Status: read from the indexed excerpt returned by the search tool; direct PDF fetch returned a transport error, declared in `10_source_ledger.csv`.
- **Statistics / decision science.** Jackson, Presanis, Conti and De Angelis, "Value of Information: Sensitivity Analysis and Research Design in Bayesian Evidence Synthesis" (JASA 114(528), 2019): "The EVSI can be traded off with the costs of data collection to give the expected net benefit of sampling (ENBS)." Predicts that information value is decision-relative and net of cost. Corroborates F3 and F5. Overlap: independent.
- **Philosophy of information.** Adriaans and van Benthem, "Information" (Stanford Encyclopedia of Philosophy, 2012, substantive revision 2023): "the more technical quantitative concepts of information and computation do not deal with truthfulness and consequently lie outside of the core of philosophy of semantic information." Predicts that bits alone do not carry truth or relevance. Corroborates F2. Overlap: independent.
- **Cognitive neuroscience.** Wu, Nakazato, Yang and Shimokawa, "A neural basis of rational inattention models" (Neuroreport 33(15), 2022): "people decide not only the action to take but also the amount of information to use to maximize the expected utility" Predicts a measurable cognitive cost on information acquisition. Corroborates F3 and F4. Overlap: moderate with the economics sources (it builds on Sims and Matějka/McKay).
- **Animal behaviour.** Dunlap, Papaj and Dornhaus, "Sampling and tracking a changing environment" (Interface Focus 7(3), 2017): "Theory suggests that the value of collecting information, or sampling, depends on environmental persistence and on the relative costs of making wrong decisions." Predicts sampling only at moderate persistence and when error costs justify it. Corroborates F5 and F6. Overlap: independent, lowest overlap with the framework.
- **Statistics / machine learning.** Rainforth, Foster, Ivanova and Bickford Smith, "Modern Bayesian Experimental Design" (arXiv:2302.14545, 2023): "as we care about maximizing information gain for downstream predictions, not the model parameters." Predicts that the target of the gain matters, so gain alone cannot rank inquiries. Corroborates F2 and F5. Overlap: independent.

No world source conflicts with the figure verdict; the conflict rule was not triggered. The JEL review and the Sims chapter are one evidence pool, not two witnesses, and the cognitive neuroscience paper partly draws on the same economics lineage. The eight framework essays are one author's evidence pool and are not counted as corroboration.

## VERDICT (from the figures)

Information gain alone cannot guide rational inquiry. It is necessary as a filter for where signal may be and as the curiosity gradient when nothing is scoring, but it is not sufficient: it has the wrong arity for a four-condition residual, the wrong symmetry for a per-slot signal, one currency where two are required, and no place for the cost of being wrong or for settlement at an immovable ground. Relevance, cost, and consequences must be combined with it, and they combine as a union compound, so "combined" is categorical rather than additive. No weighting among the legs is derived. This is a `general`, ungrounded shape; world sources corroborate it but do not decide it.

- **cost if wrong:** bounded and locatable. If the refusal of gain-only is wrong, the cost is extra checks on cases where gain truly suffices, and the packet states exactly which refuter would show that. If gain-only were wrongly accepted, the cost is higher: budget spent on high-entropy but irrelevant regions, proposals that cannot be afforded to test (Fig 12 :127), and a frame that agrees with itself without ground contact (Fig 2 :35). Both costs are reducible by running the five refuters before acting.
- **undoable:** yes. The four legs are constraints on a move, not primitives. Nothing is withdrawn by adding them; a field-specific objective can still be chosen, provenanced as a binding. A sent claim can be superseded by a corrected packet.
- **reversed by:** a ground reading, not agreement. An instrument that discriminates two inquiry policies with equal gain but different slot targeting, cost accounting, or ground range would name which legs carry weight. A derivation collapsing bits and actions into one currency, a re-census showing the legs partition the move space, or an agent-only gain increase that moves the ground while contact stays fixed would each reverse the verdict. Until one fires, the verdict stands as `candidate`.

## Sources

- [The figures, as text (local extract)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [The Formula (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [WATSON 60: the figures as metalaws (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\60_FIGURES_AS_METALAWS.md)
- [The information bottleneck method](https://arxiv.org/abs/physics/0004057)
- [Rational Inattention: A Review](https://www.aeaweb.org/articles?id=10.1257%2Fjel.20211524)
- [Rational Inattention and Monetary Economics](http://sims.princeton.edu/yftp/RIMP/handbookChapterRI2.pdf)
- [Value of Information: Sensitivity Analysis and Research Design in Bayesian Evidence Synthesis](https://pmc.ncbi.nlm.nih.gov/articles/PMC7034331)
- [Information (Stanford Encyclopedia of Philosophy)](https://plato.stanford.edu/entries/information/)
- [A neural basis of rational inattention models](https://pmc.ncbi.nlm.nih.gov/articles/PMC9477864/)
- [Sampling and tracking a changing environment: bumblebees](https://pmc.ncbi.nlm.nih.gov/articles/PMC5413896/)
- [Modern Bayesian Experimental Design](https://arxiv.org/abs/2302.14545)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [Decoding Tacit Knowledge](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [How a Society of Agents Would Work](https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work)
- [They're Scanning Books When They Should Be Studying Nature](https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should)
- [How Intelligence Actually Works](https://adventuresinml.substack.com/p/how-intelligence-actually-works)
- [Arrival of the Fittest: The Tether Architecture](https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether)
