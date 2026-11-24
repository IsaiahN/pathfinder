# WATSON answer: how large is the fiscal multiplier, and why does it vary?

**Mode: `general` on the structural shape, `specified` on the per-slot and union claims, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This WATSON run synthesizes material already in `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*: "the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the question it reports on. No measurement was taken.

## QUESTION

Decide, in effect terms, what the Tether says about the request for one fiscal-multiplier value that also explains variation across recessions, expansions and countries. Option A: report a single pooled coefficient and explain the variation as deviations around it. Option B: report a slot-indexed shape, unbundle the overlapping conditions, and leave each numeric value to its own ground. What each leads to: A aggregates away the signal the question asks about, treats shared-pool agreement as corroboration, and gives a policy user a number whose round trip to their regime was never checked. B keeps the signal, records overlap and lineage, states a refuter, and stops at a shape until a measurement pays for each slot.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor, partition or union, and order by dependency.

- **R (the residual).** Predicted constant `k` versus observed output response, indexed by slot. Arity: at least two indices (economy state, country) plus a third (identifying frame), so the sought object is a vector, not a scalar. Symmetry: swapping recession and expansion changes the value, so the bond between spending and output is condition-dependent, not symmetric. Scale: policy decision at the fiscal authority, response at national-accounts level, with cascades through households, firms, financial conditions and the external sector.
- **Domain 1, fiscal/macro frame.** Actors: government, households, firms. Currency: spending, income, output, taxes. Anchor: measured output response to an identified change in purchases. Question type: which object is being estimated.
- **Domain 2, monetary/financial frame.** Actors: central bank, bond market, banks. Currency: policy rate, money, inflation, debt service. Anchor: the policy-rate path and whether the lower bound binds. Question type: a separate closure that can accommodate or offset the fiscal impulse.
- **Domain 3, open-economy frame.** Actors: foreign sector, trade partners, exchange rate. Currency: imports, exports, exchange rate. Anchor: trade and balance-of-payments data. Question type: leakage and regime dependence.
- **Domain 4, identification/verification frame.** Actors: researchers, datasets, estimators. Currency: estimates and confidence intervals. Anchor: the same measured output response, reached through distinct identification routes. Question type: independence and overlap.
- **Partition or union.** Union. Recession, high debt, a binding lower bound and openness are overlapping conditions; a case in two conditions is a compound with its own loop (Fig 9 :55).
- **Order by dependency.** Identify the spending change, name the conditions, state the estimand, choose the estimator, then carry the result. Effort above a broken identification link cannot diagnose the break (Fig 3 :20-21).

Strain test applied: the Fig 13 six-term substrate was tried as a direct map onto macro aggregates and re-censed out because it governed a different quantity. No strained line governs a verdict here.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs.

- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> the multiplier is per slot; a pooled scalar is the wrong object.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." -> the variation across regimes and countries is the signal, not noise.
- Fig 1 :28 "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look." -> each slot needs its own anchor and refuter.
- Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." -> unbundle the conditions before comparing estimates.
- Fig 9 :57-58 "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound." -> a downturn with a binding lower bound and an open economy is a compound, not a larger recession.
- Fig 2 :29-30 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome." -> the anchor is the identified change plus measured response, not consensus.
- Fig 2 :31-32 "Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are." -> studies sharing a data pool are one frame.
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" -> meta-analytic agreement is not a verdict.
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." -> do not ask for agreement.
- Fig 3 :20-21 "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it." -> identification before estimation.
- Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." -> any one-number summary of the literature has an R_T that must be measured, not assumed zero.
- Fig 9 :32 "you get a kind of thing, never the answer itself" -> the framework returns no numeric multiplier.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." -> ending without a number is a verdict about reachability, not silence.

Triangulation status: the per-slot verdict is **triangulated** across Fig 1 (residual indexing) and Fig 9 (union unbundling), two figure routes with low overlap. The independence verdict is **triangulated** across Fig 2 and Fig 8. The anchor claim is **single-source** (Fig 2), corroborated weakly by a framework-author essay that shares the evidence pool. The dependency-order claim is **single-source** (Fig 3). The round-trip requirement is **single-source** (Fig 4). No figure line was strained to fit; the Fig 13 mapping was set aside in re-census.

## WORLD (secondary sources read)

World sources corroborate only; they never hand a number to the verdict. Overlap is declared rather than hidden.

- **Macroeconomics / identification.** Alan J. Auerbach and Yuriy Gorodnichenko, "Fiscal Multipliers in Recession and Expansion," NBER Working Paper 17447 (2011): "GDP multipliers of government purchases are larger in recession." Predicts state dependence; corroborates the per-slot verdict. Overlap: shares OECD post-war data with the studies below, so weak corroboration.
- **Macroeconomics / journal article.** Auerbach and Gorodnichenko, "Measuring the Output Responses to Fiscal Policy," American Economic Journal: Economic Policy 4(2) (2012): "large differences in the size of spending multipliers in recessions and expansions with fiscal policy being considerably more effective in recessions than in expansions." Predicts the same; corroborates. Overlap: high, same authors and data.
- **Macroeconomics / survey.** Valerie A. Ramey, "Can Government Purchases Stimulate the Economy?", Journal of Economic Literature 49(3) (2011): "I conclude that the multiplier for this type of spending is probably between 0.8 and 1.5." Predicts a bounded range for one narrowly specified experiment; corroborates the demand for per-slot specification, conflicts with any claim that a universal constant follows. Overlap: medium, same field and evidence pool.
- **Macroeconomics / cross-country.** Anja Baum and Marcos Poplawski Ribeiro, "Fiscal Multipliers and the State of the Economy," IMF Working Paper 12/86 (2012): "fiscal multipliers differ across countries, calling for a tailored use of fiscal policy." Predicts exactly the slot-indexed shape; corroborates F1 and F3. Overlap: high, advanced-economy data.
- **Macroeconomics / distinct episode.** Christopher L. House, Christian Proebsting and Linda L. Tesar, "Austerity in the Aftermath of the Great Recession," NBER Working Paper 23147 (2017): "We estimate a cross-sectional multiplier of roughly 2." Predicts large effects in a systemic-crisis compound; corroborates the union claim. Overlap: lower, distinct episode and DSGE structure, though still advanced economies.
- **Economics / meta-regression.** Sebastian Gechert and Ansgar Rannenberg, "Which Fiscal Multipliers Are Regime-Dependent? A Meta-Regression Analysis," Journal of Economic Surveys 32(4) (2018): "spending multipliers are much higher (by about 0.7-0.9 units) during a downturn." Predicts regime dependence; corroborates the per-slot verdict. Overlap: high, it pools the same literature, so it is one witness with a wide view, not many witnesses.
- **Psychology / analytic choice.** Razib Silberzahn et al., "Many Analysts, One Data Set," Advances in Methods and Practices in Psychological Science 1(3) (2018): "estimated effect sizes ranged from 0.89 to 2.93 in odds ratio units, with a median of 1.31." Predicts wide spread from method choices on one dataset; corroborates the independence verdict. Overlap: low, different field, no fiscal content.
- **Biostatistics / heterogeneity.** Sarah C. Anoke, Sharon-Lise Normand and Corwin M. Zigler, "Approaches to treatment effect heterogeneity in the presence of confounding," Statistics in Medicine 38(15) (2019): "it is possible that there is underlying systematic effect heterogeneity that is obscured by focus on the population mean estimand." Predicts that a pooled mean hides subgroups; corroborates Fig 1 and Fig 9. Overlap: low, different field, no fiscal content.
- **Framework essays / canonical usage.** Isaiah N, "The Library of Babel: Locating The Book of Books" (2026): "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." Predicts stopping at a shape; corroborates the honest stop. Overlap: high, framework author.
- **Framework essays / instrument discrimination.** Isaiah N, "The Hard Problem is About Source" (2026): "If several paths create the same behavior, then behavior is a projection with lossy information." Predicts that an output reading does not name its structural source; corroborates the anchor and refuter discipline. Overlap: high, framework author.
- **Framework essays / simulated status.** Isaiah N, "The Recursive Self-Improvement Trap" (2026): "the truly testable output would need to be derived from the real architecture or working the formula yourself." Predicts that this run cannot validate itself; corroborates its simulated status. Overlap: high, framework author.

No world source conflicts with the figure verdict; the conflict rule was not triggered. The economics sources share an evidence pool, so their agreement is one witness, not many. The low-overlap psychology and biostatistics sources corroborate the shape, not the economic content.

## VERDICT (from the figures)

The shape survives, the scalar does not. The multiplier is a slot-indexed residual whose components are settled individually by measured output responses. The variation across recessions, expansions and countries is a union of overlapping conditions that must be unbundled; a case in two conditions is a compound, not a harder case of one. Agreement is weighted by independence, identification precedes estimation, and any condensation to one number carries an R_T that must be measured. The framework returns no numeric multiplier and does not select which conditions fill the slots. The world literature's range is secondary evidence about the slots, not a wandering around one true constant. Mode `general` for the shape, `specified` for the per-slot and union claims, `candidate` and not `grounded`.

- **cost if wrong:** bounded but policy-relevant. A single number used across regimes understates stimulus where slack and accommodation are large and overstates it where leakage and crowding-out bind. The figure price is explicit: "Buy independence in proportion to the cost of being wrong." The cost is avoidable by reporting the indexed table with its refuter before any headline figure.
- **undoable:** yes. A slot-indexed presentation can replace a single-number presentation without discarding any measurement, and the pre-registered refuter can be run on existing data. No primitive has to be withdrawn.
- **reversed by:** a ground reading, not agreement. An identified spending change with a measured response that yields a stable `k` across slots would break the per-slot claim; one condition with no interactions that removes all residual structure would break the union claim; two estimates from a shared pool counted as independent that change the verdict would break the independence claim; a re-census showing Fig 1 governs a different quantity would break the whole derivation. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [The figures, as text (local extract with line numbers)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [THE SEAT MAP Field Guide (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_SEAT_MAP_Field_Guide_amended.md)
- [Fiscal Multipliers in Recession and Expansion (NBER WP 17447)](https://www.nber.org/papers/w17447)
- [Measuring the Output Responses to Fiscal Policy (AEJ: Economic Policy)](https://www.aeaweb.org/articles?id=10.1257/pol.4.2.1)
- [Can Government Purchases Stimulate the Economy? (JEL)](https://www.aeaweb.org/articles?id=10.1257/jel.49.3.673)
- [Fiscal Multipliers and the State of the Economy (IMF WP 12/86)](https://www.imf.org/en/publications/wp/issues/2016/12/31/fiscal-multipliers-and-the-state-of-the-economy-40146)
- [Austerity in the Aftermath of the Great Recession (NBER WP 23147)](https://www.nber.org/papers/w23147)
- [Which Fiscal Multipliers Are Regime-Dependent? (Journal of Economic Surveys)](https://ideas.repec.org/a/bla/jecsur/v32y2018i4p1160-1182.html)
- [Many Analysts, One Data Set (AMPPS)](https://www.cspoerlein.com/publication/silberzahnetal/)
- [Approaches to treatment effect heterogeneity (Statistics in Medicine)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6613382/)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
