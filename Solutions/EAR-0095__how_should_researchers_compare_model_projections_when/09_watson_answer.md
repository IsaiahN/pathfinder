# WATSON answer: how should researchers compare disagreeing model projections?

**Mode: `specified`, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This run synthesizes material already in `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the question it reports on. No measurement was taken.

## QUESTION

Decide, in effect terms, what procedure the Tether licenses for comparing model projections that disagree about probability, timing or severity of change. Option A: average the projections, read agreement as robustness and spread as probability. Option B: unbundle the three conditions, range each frame separately against a fixed ground, discount dependent agreement, keep the axes in separate accounts, and report unreachable where the closure cannot resolve a slot. What each leads to: A produces a fluent number that can hide a live per-slot signal and spends the independence of the people asked to endorse it; B produces a checkable per-slot record, a ranked and reversible set of cuts, and an honest stop.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor, partition or union, and order by dependency.

- **R (the residual).** The gap between model projections and the observational record, indexed per slot (region, variable, horizon). Arity: three bundled conditions named in the question, probability, timing, severity. Symmetry: asymmetric; the models are distinct frames and the three axes are not interchangeable. Scale: per slot, never a single global number. Fig 9 :4-5 names this a union compound, not one hard question; Fig 9 :57 says a case in two conditions is not a harder case of either.
- **Domain 1, the models as frames.** Actors: individual climate models, ensemble members, shared physics and code. Currency: projections, that is predictions. Anchor: none of their own; they must range against Domain 2. Union of frames with unequal independence.
- **Domain 2, the observational ground.** Actors: instruments, reanalyses, proxy records. Currency: observations. Anchor: the ground itself, which must not update on model opinion. Partition boundary between what is measured and what is predicted.
- **Domain 3, the comparison and decision frame.** Actors: researchers, assessment bodies, reviewers. Currency: agreement and residuals, verdicts. Anchor: the ground, never agreement. Partition: which cuts are filters for budget and which are witnesses for verdict.
- **Order by dependency.** Describe R per slot before choosing a frame; split the union before searching inside it; range each frame against the ground before reading agreement; establish independence before weighting agreement; let the ground decide last. Effort on the last step cannot rescue a missing third step.

Strain test applied: Fig 12 names two currencies, bits and actions, while the question names three axes. Re-census resolves this as a structural transfer, not a quote: the figure's rule is "different units, do not sum", and the axes are separately treated by the world literature. Declared as `specified`. One live strain remains, the metric for model independence, which the world literature says is not universally agreed.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs.

- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> the comparison unit is the slot, not the ensemble global.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." -> a single score can erase the very disagreement being investigated.
- Fig 1 :28 "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look." -> per-slot indexing is the only diagnostic route.
- Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence." -> independence must be measured before agreement is read.
- Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool" -> correlated models agreeing is one witness speaking several times.
- Fig 2 :33 "The anchor must not update." -> the observational record cannot be adjusted to model consensus.
- Fig 2 :46 "Each frame is corrected by it separately, and what makes the correction sound is that neither frame can move it." -> range each model separately; there is no committee vote.
- Fig 7 :35 "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." -> the ensemble mean is a description, not a verdict.
- Fig 9 :4-5 "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." -> split probability, timing and severity before searching.
- Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." -> the three axes are a union compound.
- Fig 9 :27-28 "describe it before you go looking, or any frame you pick will seem to fit" -> describe the residual before selecting a preferred statistic.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." -> convenience of computation never confers verdict status.
- Fig 12 :125 "A composition costs in two currencies, and they do not add." -> different units stay in different accounts.
- Fig 12 :130 "Summing them into one figure is the error this names, not the fix for it. A price in bits and a price in actions are two readings, held apart." -> do not collapse the axes into one risk score.
- Fig 8 :51-52 "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ." -> keep lineage and provenance records for every model.
- Fig 5 :43-44 "A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly." -> historical fit alone does not license projection.
- Fig 13 :134 "Unreachable is a verdict here, not a silence" -> report unreachable rather than manufacture consensus.
- Fig 13 :138 "narrowing gets you close while the ground decides" -> the procedure narrows; it does not settle.

Triangulation status: the per-slot verdict is triangulated across Fig 1 (controller indexing) and Fig 2 (separate ranging), two figures with low overlap. The no-corroboration verdict is triangulated across Fig 2 :31/:40 and Fig 7 :35, plus the statistics source in WORLD, which is a genuinely low-overlap field. The split verdict is triangulated across Fig 9 :4-5/:54 and the library-search essay, with the IPCC assessment as institutional corroboration. The keep-axes-separate verdict is single-source for the figure statement (Fig 12 :125/:130), corroborated by the climate literature's distinct uncertainty categories, and is explicitly labelled a `specified` transfer. The metric for model independence is strained and named, not smoothed: the law is clear, the application metric is not universally agreed.

## WORLD (secondary sources read)

World sources corroborate only. Most share the climate-modelling evidence pool; overlap is declared rather than hidden.

- **Climate assessment / institutional.** Doblas-Reyes, Sörensson et al., IPCC AR6 WGI Chapter 10 (Cambridge University Press, 2021): "At the regional scale, multi-model mean and ensemble spread are not sufficient to characterize low-likelihood, high-impact changes or situations where different models simulate substantially different or even opposing changes (high confidence). In such cases, storylines aid the interpretation of projection uncertainties." Predicts that the mean is demoted to description where models oppose; corroborates the per-slot and split verdicts. Overlap: high with the climate pool, but an institutionally distinct assessment frame.
- **Climate methodology / model dependence.** Abramowitz, Herger, Gutmann et al., Earth System Dynamics 10, 91-105 (2019): "agreement within an ensemble might not imply robustness, and similarly, the distribution of ensemble members is unlikely to provide useful information about the probability of outcomes." Also: "there is no established and universally accepted methodology to define whether or not ensemble members are independent." Predicts that agreement cannot be read without a dependence analysis; corroborates Fig 2 :40 and the live strain. Overlap: high, CMIP literature, Knutti is a co-author.
- **Climate methodology / weighting.** Brunner, Pendergrass, Lehner et al., Earth System Dynamics 11, 995-1012 (2020): "The CMIP MMEs in particular have not been designed with the aim of including only independent models and are, therefore, sometimes referred to as 'ensembles of opportunity'." Predicts that equal counting overstates evidence; corroborates Fig 2 :31-32. Overlap: high, same pool and author lineage as Abramowitz et al.
- **Climate methodology / effective number of models.** Pathak, Dasari, Ashok and Hoteit, npj Climate and Atmospheric Science 6, 144 (2023): "model similarity leads to projections biased toward the largest set of similar models and intermodel uncertainty underestimation." Predicts a small effective witness count; corroborates Fig 7 :35. Overlap: medium-high, different authors and institution but the same CMIP evidence base.
- **Climate methodology / uncertainty definition.** Knutti and Sedlacek, Nature Climate Change 3, 369-373 (2013): "We argue that defining progress in climate modelling in terms of narrowing uncertainties is too limited." Predicts that narrowing spread is not the same as reaching ground; corroborates Fig 13 :138. Overlap: high, framework-adjacent author network.
- **Climate commentary.** Knutti, Climatic Change 102, 395-404 (2010): title only, "The end of model democracy?" Accessible in preview; no substantive body quote claimed. Predicts that equal weighting is a questioned convention; weakly corroborates the dependence verdict. Overlap: high.
- **Reference synthesis.** Wikipedia, "Climate model" (accessed 2026-11-22): "Confidence in model estimates is higher for some climate variables (e.g., temperature) than for others (e.g., precipitation)." Predicts that confidence is slot dependent; corroborates Fig 1 :19. Overlap: derivative of the IPCC record, low independent weight.
- **Statistics, low-overlap field.** Wikipedia, "Design effect / Effective sample size" (accessed 2026-11-22): "When Deff>1, then inference from the data collected is not as accurate as it could have been if people were picked randomly." Predicts that correlated observations reduce effective sample size; corroborates Fig 2 :44 and Fig 2 :40. Overlap: low, different field and different evidence pool. This is the one genuinely independent witness in the set.
- **Framework essay / search.** Isaiah N, "The Library of Babel: Locating The Book of Books" (adventuresinml, 2026-10-02), read directly: "Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually to find their answers and then combine them in a satisfactory way." Predicts the unbundle rule; corroborates Fig 9 :4-5. Overlap: high, framework author.
- **Framework essay / ground.** Isaiah N, "The Recursive Self-Improvement Trap" (adventuresinml, 2026-11-19), read directly: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." Predicts that endorsement cannot settle the comparison; corroborates the anchor rule. Overlap: high, framework author.

No world source conflicts with the figure verdict; the conflict rule was not triggered. The climate sources are heavily pooled (CMIP literature, shared authors, one assessment record), so their agreement is weaker than their number suggests. The low-overlap statistics source supports the single claim about correlated observations. Agreement from a shared pool is one witness, not two.

## VERDICT (from the figures)

The figures license a shape of procedure, not a numerical answer. Keep the residual indexed by region, variable and horizon. Unbundle probability, timing and severity into separate compounds before searching. Range each model separately against an observational ground that must not update on model consensus. Discount agreement between models that share evidence, lineage or evaluation data. Keep the axes in separate accounts; do not sum them into one score. Use the ensemble mean as a description, never as a verdict. Record provenance so convergent derivation can be told from adopted import. Test out of sample. Where the closure cannot resolve a slot, return "unreachable at this budget" with the residual described in effect terms, and distinguish that from underivable in principle. This is a `specified`, ungrounded, candidate result.

- **cost if wrong:** bounded and locatable. The packet states its mode, lists refuters before the conclusion and keeps the lineage, so an error is findable. The real cost is spending the independence of outside readers by sending a finished verdict instead of a checkable generator. That cost is avoidable by leading with the per-slot residual and its refuter.
- **undoable:** yes. No model has to be withdrawn and no primitive is at stake. The three-axis accounting can be replaced by a single score if a commensuration is demonstrated; the independence discount can be revised when a problem-specific metric is agreed. `07_the_tether_answer.md` and `08_expert_verification_packet.md` already state the conditions.
- **reversed by:** a ground reading, not agreement. A per-slot demonstration that a global score preserves the live signal would reverse F1; a demonstration that correlated models carry full independent weight would reverse F3; evidence that the three axes shrink as one question or are losslessly commensurable would reverse F4 and F5; an agreed independence metric that changes the weighting would revise the live strain; a search showing the "unreachable" slot is in the closure and merely unfound would change the instruction from OUTWARD to SEARCHED. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [Figures text with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [IPCC AR6 WGI Chapter 10: Linking Global to Regional Climate Change](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-10/)
- [ESD Reviews: Model dependence in multi-model climate ensembles](https://esd.copernicus.org/articles/10/91/2019/)
- [Reduced global warming from CMIP6 projections when weighting models by performance and independence](https://esd.copernicus.org/articles/11/995/2020/)
- [Effects of multi-observations uncertainty and models similarity on climate change projections](https://www.nature.com/articles/s41612-023-00473-5)
- [Robustness and uncertainties in the new CMIP5 climate model projections](https://www.nature.com/articles/nclimate1716)
- [The end of model democracy?](https://link.springer.com/article/10.1007/s10584-010-9800-2)
- [Climate model (Wikipedia)](https://en.wikipedia.org/wiki/Climate_model)
- [Design effect / Effective sample size (Wikipedia)](https://en.wikipedia.org/wiki/Effective_sample_size)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
