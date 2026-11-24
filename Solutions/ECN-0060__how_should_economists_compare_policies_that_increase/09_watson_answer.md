# WATSON answer: how should economists compare income-increasing and distribution-increasing policies?

**Mode: `specified` on the shape of the comparison procedure, `general` on the structural rules, `gap` on the ranking. Not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This WATSON run synthesizes `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the question it reports on. No measurement was taken.

## QUESTION

Decide, in effect terms, what the Tether says about comparing a policy that raises total income with one that distributes income more evenly. Option A: report a single winner using a social welfare criterion. Option B: declare the ranking a gap and return the shape of a comparison procedure with pre-registered refuters. What each leads to: A adds two currencies that do not add, imports an objective without provenance, and spends the independence of the people checking it; B reports two readings held apart, states the missing anchor, and remains checkable until a ground closes it.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor, partition or union, and order by dependency.

- **R (the residual).** A comparison is demanded between two effects in different currencies, using a third quantity that has no anchor. Arity: at least two options, each with two effects, so a binary comparison rather than a scalar. Symmetry: ordered, not a symmetric join; swapping the options changes the answer. Scale: first order inside a policy, second order between policies, third order at social aggregation, and the anchor goes missing at the third. Fig 9 names a union compound, not one hard question.
- **Domain 1, aggregate income.** Actors: firms, workers, households, statistical offices. Currency: money income. Anchor: markets and national accounts, nameable and not moved by a frame's opinion. Status: measured.
- **Domain 2, distribution.** Actors: households by rank, tax and survey instruments. Currency: shares and inequality indices. Anchor: records and surveys for the shape of the distribution; no anchor for the weight attached to its parts. Status: measured on the shape, unanchored on the weight.
- **Domain 3, social objective.** Actors: economists, policymakers, welfare functions, compensation tests. Currency: social welfare and distributional weights. Anchor: none nameable; every candidate changes its answer when pushed. Status: `gap`.
- **Domain 4, verification and outreach.** Actors: expert evaluators. Currency: agreement and residual. Anchor: the ground, never agreement. In this simulated run all seats draw on one evidence pool, so this domain's independence is zero.
- **Partition or union.** Domains 1 and 2 are overlapping conditions on the same outcomes, so a union with an intersection; unbundle into pure-efficiency, pure-distribution and compound cases before searching.
- **Order by dependency.** Measure and name first; settle the objective before choosing a policy; refuse to add the currencies before ranking; describe the residual before naming a welfare frame.

Strain test applied: the no-add rule in Fig 12 governs the cost of a composition in bits and actions, not income and equity directly. Re-census via Fig 4 :20 shows that only the actors, currency and anchor change across domains, so the structural rule transfers and the currency pair is substituted. The application is `specified`, not `grounded`. This strain is named, not smoothed.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs.

- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." -> a welfare function that moves when its weights move is not an anchor, so the ranking has no ground.
- Fig 12 :125 "A composition costs in two currencies, and they do not add." -> total income and distribution are two currencies; a single summed score repeats a named error.
- Fig 12 :130 "Summing them into one figure is the error this names, not the fix for it." -> hold the two readings apart.
- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> report per group or percentile, not as a national mean.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." -> a single aggregate destroys the decision-relevant signal.
- Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." -> split the compound before comparing.
- Fig 9 :57-58 "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound." -> the both-conditions case has its own loop.
- Fig 3 :19 "Optimising a link that already works cannot rescue one that does not." -> better measurement cannot settle a missing objective.
- Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." -> the objective link is the break.
- Fig 6 :26 "An import adds no atom to the world." -> adopting a welfare function is a convention, not a discovery.
- Fig 8 :51 "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them" -> the objective's provenance must be recorded.
- Fig 9 :32 "you get a kind of thing, never the answer itself" -> the framework returns the shape of the comparison, not the winner.
- Fig 13 :134 "Unreachable is a verdict here, not a silence" -> the ranking gap is stated, not hidden.
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." -> agreement about the shape is not a ground.
- Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool" -> this simulated second seat is not a corroborating witness.
- Fig 2 :42 "Buy independence in proportion to the cost of being wrong." -> one-to-one contact through public venues.

Triangulation status per domain: the no-add verdict is triangulated across Fig 12 and Fig 4 with a low-overlap world corroborator from policy evaluation. The per-slot verdict is single-source for the figure rule (Fig 1), corroborated by the inequality-measurement literature. The union verdict is triangulated across Fig 9 and the domain census reached by a different route. The ranking gap is triangulated across Fig 2 and Fig 10, two figures with low overlap. The currency substitution remains the one live strain and is recorded in `01` §5. No verdict was averaged across domains.

## WORLD (secondary sources read)

World sources are corroboration only. All were opened on 2026-11-23. None shares the framework author's evidence pool.

- **Welfare economics / social choice.** Wikipedia contributors, "Social welfare function" (Wikipedia, accessed 2026): Bergson's intention is quoted as "to state in precise form the value judgments required for the derivation of the conditions of maximum economic welfare"; Robbins is recorded as arguing that interpersonal utility comparison "is not measurable by any empirical test". Predicts an unanchored objective and a provenance requirement; corroborates F1 and F7. Overlap: low, different field and authors.
- **Policy evaluation.** Wikipedia contributors, "Cost-benefit analysis" (Wikipedia, accessed 2026), quoting Phaneuf and Requate: "CBA today relies on the Kaldor-Hicks criteria to make statements about efficiency without addressing issues of income distribution. This has allowed economists to stay silent on issues of equity, while focusing on the more familiar task of measuring costs and benefits". Predicts the shortfall Fig 12 names; corroborates F2. Overlap: low.
- **Mathematics / social choice.** Wikipedia contributors, "Arrow's impossibility theorem" (Wikipedia, accessed 2026): "no group decision-making procedure based on ordinal utilities (citizens' rankings of different alternatives) can satisfy the requirements of rational choice." Predicts no anchor for a group ranking; corroborates F1. Overlap: low.
- **Inequality measurement.** Wikipedia contributors, "Atkinson index" (Wikipedia, accessed 2026), recording Atkinson 1970 and Shorrocks 1980: "The Atkinson index is defined in reference to a corresponding social welfare function, where mean income multiplied by one minus the Atkinson index gives the welfare equivalent equally distributed income." Also records that overall inequality "can be computed as the sum of the corresponding GE indices within each group, and the GE index of the group mean incomes". Predicts an embedded value judgment and a per-group decomposition; corroborates F1 and F3. Overlap: low.
- **Animal behaviour.** Wikipedia contributors, "Inequity aversion" (Wikipedia, accessed 2026), recording Brosnan and de Waal 2003: "An experiment on capuchin monkeys (Brosnan, S and de Waal, F) showed that the subjects would prefer receiving nothing to receiving a reward awarded inequitably in favor of a second monkey, and appeared to target their anger at the researchers responsible for the inequitable distribution of food." Predicts that distribution is evaluated separately from absolute reward, even in a non-human frame; corroborates F2. Overlap: lowest of all sources.

The five Wikipedia pages are treated as one public-reference pool for overlap purposes, so their agreement is not five independent witnesses. The eight framework essays (one evidence pool, framework author) were used for the canonical reading of shape in `05`, not as independent corroboration. No world source conflicted with the figure verdict, so the conflict rule was not triggered.

## VERDICT (from the figures)

The ranking is a `gap`; the shape is `specified` and survives. Total income and the distribution are two currencies that do not add, so report two readings held apart rather than a composite score. Report per group or percentile. Unbundle the union into pure-efficiency, pure-distribution and compound cases. State the two quantities and the threshold, because the comparison is a goal. Record the provenance of any objective used. No available objective is an anchor, so the framework cannot name a winner and the ranking is declared unreachable at this budget, not silent. The two policy types are isomers over the shared atom set (Fig 12 :117), which is why a flat ingredient list cannot tell them apart. Verdicts per domain are kept separate and are never averaged.

- **cost if wrong:** bounded and locatable. The packet states the mode, the refuters and the lineage before the conclusion, so an error is findable rather than invisible. The real cost is spending the independence of outside readers by sending a conclusion instead of a generator, which Fig 2 :42 prices. That cost is avoidable by leading with the shape and the four refuters and recording the verdict before showing theory.
- **undoable:** yes. The shape claim can be superseded without withdrawing any figure line. If an anchor, a commensurable unit, an objective instrument, or an information-preserving aggregate is produced, the four refuters tell exactly which part to replace. No primitive has to be retracted, and the ranking gap closes to the extent each fires.
- **reversed by:** a ground reading, not agreement. A proposal that survives the push test in `08` C2, a commensurable unit that does not depend on a chosen welfare weight, an instrument at the objective link that returns different ground-checkable readings for A and B, or a summary statistic that preserves all per-group effects would move the claim. A figure re-census that supplies a fifth kind of quantity beyond the two currencies would also change it. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [Figures text extract with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [WATSON 60: the figures as metalaws (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\60_FIGURES_AS_METALAWS.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [Social welfare function](https://en.wikipedia.org/wiki/Social_welfare_function)
- [Cost-benefit analysis](https://en.wikipedia.org/wiki/Cost%E2%80%93benefit_analysis)
- [Arrow's impossibility theorem](https://en.wikipedia.org/wiki/Arrow%27s_impossibility_theorem)
- [Inequity aversion](https://en.wikipedia.org/wiki/Inequity_aversion)
- [Atkinson index](https://en.wikipedia.org/wiki/Atkinson_index)
- [How Intelligence Actually Works](https://adventuresinml.substack.com/p/how-intelligence-actually-works)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
