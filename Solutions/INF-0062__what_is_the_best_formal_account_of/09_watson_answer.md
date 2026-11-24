# WATSON answer: INF-0062

**Mode: `specified` on the shape, `general` on the structural constraints, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This WATSON run synthesizes `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*: *"the truly testable output would need to be derived from the real architecture or working the formula yourself"*) it cannot settle the question it reports on. No learning system was run and no dataset was measured.

## QUESTION

Decide, in effect terms, the best formal account of learning when data are sparse, noisy and unevenly informative. Option A: name one of PAC, Bayesian inference, MDL or active learning as the winner and defend it. Option B: state the shape any adequate account must have and refuse the ranking. What each leads to: A delivers a `general`-mode verdict with no ground settlement, mistakes budget and mechanism for witness, and invites agreement from a shared evidence pool; B delivers per-domain verdicts, six pre-registered refuters and an honest stop. The figures decide B without claiming that the question is unanswerable.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors, currency and anchor; partition or union; order by dependency.

- **R (the residual).** A learner must say where to look and what to admit when few observations arrive, are corrupted, and are unequally informative. Arity: three overlapping conditions, so a **union compound**, not one hard question (Fig 9 :57: *"a case in two conditions is not a harder case of either"*). Symmetry: not symmetric; swapping a data-rich slot with a data-poor slot changes the account. Scale: one loop per slot, a second at the library level where terms are minted, a third at the habitat level where contact is maintained.
- **D1, the inference mechanism.** Actors: slots, prediction, observation, residual, candidate term. Currency: residuals and description length. Anchor: the ground through what pays. Nameable anchor: yes, a slot with positive residual mass. Question type: partition (which compositions and admissions are legal).
- **D2, the data and ground relation.** Actors: observations, instruments, independent frames. Currency: independence and settlement. Anchor: a measurement that does not change when a frame pushes on it. Nameable anchor: yes. Question type: verdict about the world.
- **D3, the learner in its habitat.** Actors: learner, data source, conditions, relations, maintainer. Currency: contact. Anchor: the ground decides; the habitat only supplies actors. Nameable anchor: yes, the habitat enumerated from contact. Question type: capability.
- **D4, the cost accounting.** Actors: descriptions and actions. Currency: bits and actions in different units. Anchor: the budget, which decides how much of the space is reached. Nameable anchor: yes. Question type: price.
- **Order by dependency.** Perceive, refuse before mint, support before search, settle before carry, with describe-the-residual before frame (Fig 3 ; Formula step 2; Fig 5 :32; Fig 9 :27). Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*

Strain test applied: Fig 1 disqualifies compression as a ground metric while Fig 5 uses description length as an admission price. These govern different quantities, so re-census dissolved the strain rather than smoothing it over (see `01` F8). No other strain survived.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVG text. Verdicts are kept per domain and never averaged.

**D1, inference mechanism (triangulated).** Low overlap between Fig 1 (per-slot residual in an agent) and Fig 5 (the mint pipeline).
- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> a pooled loss is not an admissible summary of the residual.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." -> sparsity and unevenness make aggregation actively harmful.
- Fig 5 :42 "The acceptance test is a bargain, not a threshold." -> admission is by cost comparison.
- Fig 5 :43 "A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before." -> the form of the bargain.
- Fig 5 :45 "This is minimum description length, Rissanen 1978, which is itself a composition of Kolmogorov complexity and Shannon coding put to work on model selection." -> the one formal principle the figures name.
- Fig 5 :33 "The three guards are a product, not a checklist." -> support, reachability and novelty multiply; a zero anywhere stops the mint.

**D2, data and ground (triangulated).** Low overlap between Fig 2 (anchor, independence) and Fig 8 (union surplus, underivable versus unreachable).
- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." -> "best" needs a ground, not a vote.
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" -> shared-pool agreement is one witness.
- Fig 2 :42 "Buy independence in proportion to the cost of being wrong." -> independence is a budgeted resource.
- Fig 6 :27 "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same." -> a data-poor slot is unreached, not proven absent.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." -> the honest report on a swept but empty slot.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." -> PAC and sample complexity are filters, not witnesses.

**D3, learner in habitat (single-source).** Fig 11 alone governs this domain.
- Fig 11 :39 "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone." -> sparse data is a contact property of the habitat.
- Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves." -> agent-only fixes are not enough.
- Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." -> benchmark results are not ground settlements.

**D4, cost accounting (single-source).** Fig 12 alone governs this domain.
- Fig 12 :125 "A composition costs in two currencies, and they do not add." -> bit price and action price are separate.
- Fig 12 :126 "Bits price the description. Actions price finding out whether it holds." -> the two readings.
- Fig 12 :130 "Summing them into one figure is the error this names, not the fix for it." -> a single scalar is forbidden.

**Overall.** The shape is triangulated across D1 and D2; D3 and D4 are single-source and reported as such. No domain is a `gap`, because each has a nameable anchor. The refusal to name a winner is the framework's stated limit, not an absence of a figure line.

## WORLD (secondary sources read)

World sources corroborate but never overrule. Each was opened on 2026-11-23. Overlap is declared rather than hidden.

- **Field: model selection / information theory.** Wikipedia contributors, "Minimum description length" (Wikipedia, 2026). Quote: *"Minimum description length (MDL) is a model selection principle where the shortest description of the data is judged to be the best model."* Prediction: the description-length bargain is a live formal principle. Corroborates D1. Overlap: high with the learning-theory pool; also the source of the Rissanen 1978 citation the figure itself names.
- **Field: computational learning theory.** Wikipedia contributors, "Probably approximately correct learning" (Wikipedia, 2026). Quote: *"The model was later extended to treat noise (misclassified samples)."* Prediction: noise is a formal modification inside an account, not a different question. Corroborates the unbundling of D1 and D2. Overlap: high with the same pool.
- **Field: statistical learning theory.** Wikipedia contributors, "Sample complexity" (Wikipedia, 2026). Quote: *"The No Free Lunch Theorem ... proves that, in general, the strong sample complexity is infinite"* and finite for restricted classes. Prediction: the budget role, and that a restricted hypothesis class is the import that moves the wall. Corroborates D2 and Fig 9 :60. Overlap: high.
- **Field: machine learning strategy.** Wikipedia contributors, "Active learning (machine learning)" (Wikipedia, 2026). Quote: *"there is a risk that the algorithm is overwhelmed by uninformative examples."* Prediction: choosing which points to label is a habitat intervention, not a verdict. Corroborates D3. Overlap: medium, different subfield but same broad pool.
- **Field: statistics / epistemology.** Wikipedia contributors, "Bayesian inference" (Wikipedia, 2026). Quote: *"hard convictions are insensitive to counter-evidence."* Prediction: the weighting mechanism needs a refusal operator, which accumulation alone lacks. Corroborates D1 and the Formula's fifth residual kind. Overlap: medium.
- **Field: decision theory / information economics.** Wikipedia contributors, "Value of information" (Wikipedia, 2026). Quote: *"Value of information (VOI or VoI) is the amount a decision maker would be willing to pay for information prior to making a decision."* Prediction at first reading: conflicts with Fig 12, because it offers one monetary scalar for information. Conflict sent back to census: re-census showed it prices actions while Fig 12 :126 prices descriptions and settling actions separately. After re-census, corroborates D4 as the example of the error Fig 12 names. Overlap: low, genuinely different field.
- **Field: search / shape.** Isaiah N, "The Library of Babel: Locating The Book of Books" (adventuresinml, 2026). Quote: *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* Prediction: a narrowed shape, not a filled ranking. Corroborates the QUESTION verdict. Overlap: high, framework author.
- **Field: measurement / source discrimination.** Isaiah N, "The Hard Problem is About Source" (adventuresinml, 2026). Quote: *"It was proven wrong not by argument, but by the arrival of a better instrument."* Prediction: the ranking needs an instrument, not a further argument. Corroborates D2. Overlap: high.
- **Field: validation / self-validation.** Isaiah N, "The Recursive Self-Improvement Trap" (adventuresinml, 2026). Quote: *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* Prediction: this derivation cannot settle its own claim. Corroborates the simulated status. Overlap: high.

No world source overturns a figure verdict. Agreement from the learning-theory pool is counted as one witness, not four. The decision-theory source is the only low-overlap field and it initially conflicted; the conflict was returned to the census and resolved without flipping the verdict.

## VERDICT (from the figures)

The best account is a shape, not a winner. An adequate account keeps residuals indexed by slot, admits terms by the description-length bargain with three guards as a product, holds bits and actions apart, reports data-poor slots as unreached at this budget rather than absent, and is settled by an anchor that does not update. MDL is the one formal principle the figures name; PAC and sample complexity supply the budget, Bayesian inference the weighting, and active learning the habitat intervention. None of those is licensed as "best" without a ground settlement. Per-domain verdicts: D1 triangulated, D2 triangulated, D3 single-source, D4 single-source. No `gap`. Mode `specified`, candidate, not `grounded`.

- **cost if wrong:** bounded and locatable. The packet states mode, six refuters and provenance before the conclusion, so an error is findable rather than invisible. The real cost is spending the independence of outside readers by sending a ranking instead of a shape, which Fig 2 :42 prices. That cost is avoidable by leading with the shape claim and its refuters. If the per-slot claim is wrong, any account that pools data is safe to use, and the correction is to withdraw F1 rather than to rebuild the whole shape.
- **undoable:** yes. The ranking is simply not asserted, so there is nothing to retract in the named theories. The shape can be tightened by adding a refuter that fires, and the single-source domains (D3, D4) can be upgraded by finding a second low-overlap figure route. A sent packet can be superseded without withdrawing any primitive.
- **reversed by:** a ground reading, not agreement. A source-discriminating comparison with an anchor independent of the compared frames could name a winner; a pooled-loss account that locates a live slot below the noise floor would break D1; a single scalar that prices descriptions and actions without loss would break D4; an agent-only improvement that changes contact with habitat fixed would break D3. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [The figures, as text (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [Minimum description length](https://en.wikipedia.org/wiki/Minimum_description_length)
- [Probably approximately correct learning](https://en.wikipedia.org/wiki/Probably_approximately_correct_learning)
- [Sample complexity](https://en.wikipedia.org/wiki/Sample_complexity)
- [Active learning (machine learning)](https://en.wikipedia.org/wiki/Active_learning_(machine_learning))
- [Bayesian inference](https://en.wikipedia.org/wiki/Bayesian_inference)
- [Value of information](https://en.wikipedia.org/wiki/Value_of_information)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [Journal of Machine Learning Research](https://www.jmlr.org/)
- [Association for Computational Learning / COLT](https://learningtheory.org/)
- [Association for Algorithmic Learning Theory / ALT](https://www.algorithmiclearningtheory.org/)
