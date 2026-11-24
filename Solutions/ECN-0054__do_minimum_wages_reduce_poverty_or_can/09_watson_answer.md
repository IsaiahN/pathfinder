# WATSON answer: do minimum wages reduce poverty, or can they reduce employment for some workers?

**Mode: `specified` on the per-slot and per-domain claims, `general` on the structural shape, `gap` on the pooled net sign. Not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This WATSON run synthesizes material already in `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*: LLM output is simulacra and "the truly testable output would need to be derived from the real architecture or working the formula yourself"), it cannot settle the question it reports on. No payroll record or household survey was read for this solution.

## QUESTION

Decide, in effect terms, what the Tether says about the question as posed. Option A: a wage floor reduces poverty. Option B: a wage floor can reduce employment for some workers. What each leads to: A points at a household income survey and a poverty line; B points at payroll records and a worker-by-worker employment history. The two readings have different currencies, different anchors and different slots. Refuse the compromise answer that averages them, and ask first whether the question is one question at all.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain giving actors / currency / anchor, partition or union, and order by dependency.

- **R (the residual).** A legislature sets a wage floor and two outcomes are requested. Arity: three, one lever and two outcome quantities. Symmetry: "reduce" is an ordered comparison with a subtraction, not a symmetric join; the floor is a ⋛ threshold between the floor and the wage that would otherwise clear. Scale: per worker-firm slot, per household slot, per sector, per policy regime. Fig 9 :4-5 names the signature of a bundle rather than one hard question, and Fig 1 :19 requires the residual to stay indexed.
- **Domain 1, labour-market frame.** Actors: workers, firms, hours, the statutory floor. Currency: jobs and wage rate. Anchor: payroll records and employment counts, a market and a counter that do not update on any frame's opinion. Question type: one condition of a union; verdict per worker slot.
- **Domain 2, household-distribution frame.** Actors: households, heads, secondary earners, transfers. Currency: disposable household income against a poverty line. Anchor: household income survey and headcount or poverty-gap measurement. Question type: the second condition of the same union; verdict per household slot.
- **Domain 3, research / identification frame.** Actors: researchers, estimators, data sets, designs. Currency: estimates, residuals, citations. Anchor: the measured outcomes, never agreement between papers. Question type: the frame that ranges the other two. In this simulated run all seats draw on one evidence pool, so their agreement is one pool talking, not corroboration.
- **Domain 4, habitat / coverage frame.** Actors: covered and uncovered sectors, compliance, informal work, household sharing, safety nets. Currency: coverage and spillover. Anchor: measured formal and informal outcomes. Question type: the compound where the two conditions overlap.
- **Order by dependency.** Employment is read first, because a household cannot be lifted by the wage of a job that was not read. The poverty objective has no instrument until a line is named. Describe the residual before choosing a frame.

Strain test applied: an early reading made Fig 11 :51 govern the wage floor as an actor with fixed valence. That strains the line. Re-census assigns valence of actors to Fig 11 and the floor as a threshold to Fig 12 :87. Different quantities, no strain after re-census.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs.

- Fig 9 :4-5 "are not one hard question but several well-formed ones. Split it rather than search." -> the "or" is a bundle, not a dichotomy.
- Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." -> a union, not a partition.
- Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound." -> the low-skilled worker in a poor household is a compound with its own loop.
- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> keep the employment and household readings separate.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." -> a pooled national statistic hides both signals.
- Fig 12 :87 "a threshold relation between two quantities" -> the floor is a comparison, not an atom.
- Fig 12 :125 "A composition costs in two currencies, and they do not add." -> wage gain and job loss cannot be summed.
- Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries." -> the same floor helps one slot and hurts another.
- Fig 11 :43-44 "The habitat is enumerated, never composed." -> list coverage, compliance, household composition and transfers from the world.
- Fig 3 :20 "The chain is ordered by dependency, not by importance." -> employment read before household income.
- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." -> payroll and household income are anchors; study agreement is not.
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" -> overlapping studies are one witness.
- Fig 7 :35 "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." -> many agreeing papers do not settle a sign.
- Fig 13 :134 "Unreachable is a verdict here, not a silence." -> the pooled net sign is `gap`, reported, not hidden.

Triangulation status: the split verdict is triangulated across Fig 1 (per-slot residual), Fig 9 (union/partition) and Fig 12 (two currencies), which are low-overlap routes. The per-slot valence verdict is triangulated across Fig 11 and the two distinct anchors in D1 and D2. The research-frame verdict is triangulated across Fig 2, Fig 7 and Fig 8, with the statistics source corroborating at low overlap. The household targeting seam in D2 is `single-source` on the figure side (Fig 2 :36) with the IZA source secondary, and is not upgraded. The common-scale question is a live strain: Fig 12 :125 forbids the addition, while the literature sometimes reports a net welfare measure that would require an import with a source gate and shadow test. Named, not hidden.

## WORLD (secondary sources read)

World sources are corroboration only. Each was opened on 2026-11-23; author, venue, year, accessed date and a quote are recorded in `10_source_ledger.csv`.

- **Labour economics / employment effects.** David Neumark and William Wascher, NBER Working Paper 12663 (NBER, 2006, revised 2007): "the studies that focus on the least-skilled groups provide relatively overwhelming evidence of stronger disemployment effects for these groups." Predicts per-slot employment losses among the least skilled. Corroborates D1. Overlap: one labour-economics pool with the other economics sources.
- **Labour economics / policy synthesis.** David Neumark, "Employment effects of minimum wages", IZA World of Labor (IZA@LISER, updated version): "If minimum wages reduce employment of low-skill workers, then minimum wages are not a "free lunch" with which to help poor and low-income families, but instead pose a trade-off of benefits for some versus costs for others." Predicts the union shape. Corroborates F3 and F5. Overlap: same pool.
- **Labour economics / distribution.** Arindrajit Dube, "Impacts of minimum wages: review of the international evidence", GOV.UK (2019, page updated 2026): "points to a very muted effect of minimum wages on employment, while significantly increasing the earnings of low paid workers." Predicts wage gains without large aggregate job losses. Corroborates that the employment slot is heterogeneous; it does not overrule the figure verdict. Overlap: same pool, and partly the same studies as Neumark.
- **Development economics / poverty.** T. H. Gindling, "Does increasing the minimum wage reduce poverty in developing countries?", IZA World of Labor (updated version): "minimum wages pull some households out of poverty, but may push others into poverty." Predicts opposite valence in different household slots. Corroborates Fig 11. Overlap: same broad pool but a different country set, so slightly lower overlap than the other economics sources.
- **Logic and reasoning (genuinely low overlap).** Wikipedia, "False dilemma" (2026, accessed 2026-11-23): "A false dilemma, also referred to as false dichotomy or false binary, is an informal fallacy based on a premise that erroneously limits what options are available." Predicts that the question's "or" excludes viable alternatives. Corroborates the split, does not decide it.
- **Statistics / survey methodology (genuinely low overlap).** Wikipedia, "Design effect" (WikiJournal of Science 2024 edition, accessed 2026-11-23): "The effective sample size, defined by Kish in 1965, is calculated by dividing the original sample size by the design effect." Predicts that correlated studies count as fewer witnesses. Corroborates Fig 2 :31 and :40.
- **Metatheory / validation.** Isaiah N, "The Recursive Self-Improvement Trap" (adventuresinml, 2026-11-19): "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." Predicts that this derivation cannot settle its own claim. Corroborates the simulated status. Overlap: high, framework author.
- **Human cognition / source discrimination.** Isaiah N, "The Hard Problem is About Source" (adventuresinml, 2026-08-28): "If several paths create the same behavior, then behavior is a projection with lossy information." Predicts that a national statistic cannot name its source. Corroborates the call for a better instrument. Overlap: high, framework author.
- **Search / shape.** Isaiah N, "The Library of Babel: Locating The Book of Books" (adventuresinml, 2026-10-02): "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." Predicts a shape, not a sign. Corroborates the `gap` verdict. Overlap: high, framework author.

No world source conflicts with the figure verdict. The apparent conflict between Neumark and Dube was returned to the census and re-mapped to the one-pool finding rather than flipping a verdict. Agreement from a shared evidence pool is one witness, not two. The essays all share the framework author's evidence pool, so their agreement with the figures carries little independent weight.

## VERDICT (from the figures)

The question as posed is refused. A wage floor is a threshold comparison whose valence is relative to the residual. The employment effect and the poverty effect are different slots in a union of overlapping conditions, measured in different currencies against different anchors. A floor can raise household income where a head keeps work and withdraw a job from another worker, and both readings can be true at once. The overlap, a low-skilled worker in a poor household, is a specific compound that needs both readings, and the uncovered sector and household composition decide whether the first reaches the second. Employment is read upstream of household income. Studies sharing a survey are one witness. No figure line returns a universal net sign, so that part is `gap`, reported as unreachable at this budget, not silence. `specified` on the per-slot claims, `general` on the structure, not `grounded`. The floor and the earned income tax credit are isomers over a shared atom set (`06_isomers_and_order.md`), with different bonds and different behaviour.

- **cost if wrong:** bounded and locatable. The verdict names its slots, anchors and refuters, so an error is findable rather than invisible. The real cost is spending the independence of outside readers by sending an averaged recording instead of a generator, which Fig 2 :42 prices: "Buy independence in proportion to the cost of being wrong." That cost is avoidable by leading with the split and its refuters.
- **undoable:** yes. The pooled sign was never asserted, so nothing has to be withdrawn to change course. A new payroll or household reading can be composed over the existing shape, and the refusal term stays in the record (Fig 5 :55 "What it removes is not a term but a term's standing to be composed over. Nothing leaves the library. What falls is the reach.").
- **reversed by:** a ground reading, not agreement. A payroll record per worker slot with binding status recorded, plus a household income survey per household slot distinguishing headcount from poverty gap and heads from secondary earners, read by two frames with no shared data and no shared design, would move the per-slot verdicts toward `grounded`. Nested rather than overlapping conditions would refute the compound. A properly indexed reading improving both slots for the same workers and households with no compensating habitat loss would refute the relative-valence verdict. A figure re-census finding a line that returns the pooled sign would refute the `gap`. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [The figures, as text (local verbatim extract)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [WATSON 60: the figures as metalaws (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\60_FIGURES_AS_METALAWS.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [The Seat Map Field Guide, amended (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_SEAT_MAP_Field_Guide_amended.md)
- [Minimum Wages and Employment: A Review of Evidence from the New Minimum Wage Research](https://www.nber.org/papers/w12663)
- [Employment effects of minimum wages, IZA World of Labor](https://wol.iza.org/articles/employment-effects-of-minimum-wages/long)
- [Impacts of minimum wages: review of the international evidence, GOV.UK](https://www.gov.uk/government/publications/impacts-of-minimum-wages-review-of-the-international-evidence)
- [Does increasing the minimum wage reduce poverty in developing countries?, IZA World of Labor](https://wol.iza.org/articles/does-increasing-the-minimum-wage-reduce-poverty-in-developing-countries/long)
- [Minimum wage, Wikipedia](https://en.wikipedia.org/wiki/Minimum_wage)
- [False dilemma, Wikipedia](https://en.wikipedia.org/wiki/False_dilemma)
- [Design effect, Wikipedia](https://en.wikipedia.org/wiki/Design_effect)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [Decoding Tacit Knowledge: Why Context, Subtext, and Pretext Matter](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [They're Scanning Books When They Should Be Studying Nature](https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should)
- [How Intelligence Actually Works](https://adventuresinml.substack.com/p/how-intelligence-actually-works)
- [How a Society of Agents Would Work](https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work)
- Folder material synthesized: `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, `08_expert_verification_packet.md`.
