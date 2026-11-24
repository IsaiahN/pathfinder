# WATSON answer, BUS-0069

**Mode: `specified`, not `grounded`.** Figures are primary and decide. World sources are secondary, corroborate but never overrule, and a conflict returns the derivation to the domain census. This is a simulated derivation checked for internal consistency against the figures, not a ground reading. No holdout, lift test, or purchase record was run.

## QUESTION

How can a company tell whether advertising changed consumer behavior or merely reached people who were already likely to buy?

Restated as an effect: why does R = |Γ(b,a) − o′| stay near zero in some consumer slots and grow in others, even where exposure and purchase coincide? R is indexed per consumer and per time, never averaged into one campaign ROAS (Fig 1 :19). The phenomenon is a union of two conditions, C1 (did the ad change the purchase) and C2 (did the ad reach a likely buyer), not one hard question (Fig 9 :54-57). Option A reads attributed conversions as the verdict; option B requires a per-slot counterfactual against an assignment that does not update on what the analyst believes. A sends a frame-internal quantity into the verdict and pools the two conditions. B sends a checkable shape with four refuters written in advance.

## DOMAIN CENSUS

Arity: a three-place relation, consumer Γ, ad action a, purchase o′, indexed by slot and ordered in time; it carries an ordered bond and a comparison bond, not symmetric ones. Symmetry: "changed" is a threshold relative to a baseline, and the two cases produce the same reading under a symmetric `+` bond (Fig 12 :117). Scale: single consumer decision, campaign population, and the measurement channel across time; the membrane between analytics and the market is lossy, so `R_T` must be measured (Fig 4 :30).

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Consumer decision loop | consumer, belief b, purchase action, exposure | decisions and residual reduction | realized purchase and its no-ad counterpart from a randomised holdout | admitted |
| D2 Measurement and attribution frame | analysts, platforms, attribution models, dashboards | impressions, clicks, attributed conversions, ROAS | none independent; instruments only (Fig 1 :27) | admitted as instrument |
| D3 Market habitat | consumers, competitors, platforms, targeting, season | purchases, share, spend | the market, named in Fig 2 :29 | admitted |
| D4 Comparison instrument and channel | holdouts, geo splits, ghost ads, source discriminators | contact with the counterfactual | the ground, which does not decay (Fig 10 :24) | admitted |
| X1 Brand affinity as a free-floating property | stated preference | survey score | none nameable | not a domain yet |
| X2 Ad spend as sole cause | the budget | dollars | already inside D2 and D3 | absorbed |

Union, not partition: D1/D4 and D2/D3 form two compounds; the whole is C1 plus C2 (Fig 9 :54-57). Dependency order: perception → vocabulary of the counterfactual → objective stated as `Δ_s` → planning → learn and carry (Fig 3 :20, :24-27). Strain test applied: Fig 13's physical substrate does not govern marketing quantities; it was re-census'd to the honest-stop role only. The market cannot anchor the causal question alone, so two anchors at two strata are used, re-named per Fig 4 :20.

## TETHER (primary, verbatim, per domain, triangulated|single-source|gap)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs.

**D1 Consumer decision loop, status triangulated (Fig 1 and Fig 10, evidence rule vs channel decay).**

- Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* -> `Δ_s` is per consumer, not a campaign average.
- Fig 1 :27 *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* -> reach and attributed conversions cannot score the measurement frame.
- Fig 10 :26 *"stale percepts, dropped transients, saturated metrics, pooled readings"* -> the named decay modes of the channel to the counterfactual.

Reading: mode `specified`. Refuter: a logs-only statistic that predicts per-consumer causation at the ground, or a channel documented as stale that still matches a refreshed holdout at every handoff.

**D2 Measurement and attribution frame, status triangulated (Fig 9 and Fig 8, filters vs witnesses and surplus).**

- Fig 9 :60 *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* -> ROAS is a budget filter, not a witness.
- Fig 8 :51 *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."* -> three attribution models on one log are one frame, not three witnesses.
- Fig 9 :32 *"you get a kind of thing, never the answer itself"* -> the framework does not name a tool or vendor.

Reading: mode `general` for the filter rule, `specified` for its practice consequence. Refuter: two frames with provably disjoint evidence pools whose incrementality estimates converge and are confirmed at the ground.

**D3 Market habitat, status triangulated (Fig 2 and Fig 11, anchor rule vs habitat valence).**

- Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* -> the market settles what happened.
- Fig 2 :33 *"The anchor must not update."* -> a holdout assignment is the anchor for what would have happened.
- Fig 11 :49 *"An actor’s valence is relative to the residual, not a property it carries."* -> a targeting rule that helps one residual may harm another; no standing list of good channels survives a change of residual.

Reading: mode `specified`. Refuter: an anchor shown to move when an analyst re-specifies the model or changes the bid.

**D4 Comparison instrument and channel, status triangulated (Fig 6 and Fig 8 and Fig 10, instrument rule, idempotence, channel decay).**

- Fig 6 :34 *"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."* -> improve a holdout from an A/B test already returning a reading; do not specify a sensor from a definition of causality.
- Fig 8 :39 *"So a search that finds nothing is never a proof of absence."* -> wide intervals are not underivability.
- Fig 10 :24 *"the ground does not decay, the channel does"* -> a broken holdout looks like a working one until drift is large.
- Fig 4 :30 *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* -> consumer-level lift and campaign ROAS are not one quantity; `R_T` must be measured.

Reading: mode `specified` for the campaign application, `general` for the instrument rule. Refuter: a proof that no holdout or geo design could resolve the term at any budget for a named class of campaigns.

**Union and method, status triangulated (Fig 9 and Fig 3 and Fig 12).**

- Fig 9 :57 *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."* -> C1 and C2 are different compounds.
- Fig 3 :27 *"A link with no instrument is not a link that works. It is a link nobody has looked at."* -> the missing counterfactual vocabulary is the break.
- Fig 12 :117 *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* -> the two cases are isomers over the full atom set and members of one functional group over the raw log.

**Naming the best tool or vendor, status `gap`.** No figure line governs this after a genuine re-census. Fig 9 :32 *"you get a kind of thing, never the answer itself."* Fig 13 :134 *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39 *"So a search that finds nothing is never a proof of absence."* The missing thing is a source-discriminating instrument and a budget decision, characterised in effect terms but not held here.

## WORLD (secondary, each source read; field, author/venue/year, quote, prediction, corroborates|conflicts)

**Business and economics experiment pool, one witness, not four.**

- **Marketing science.** Brett R. Gordon, Florian Zettelmeyer, Neha Bhargava and Dan Chapsky, *A Comparison of Approaches to Advertising Measurement: Evidence from Big Field Experiments at Facebook*, Marketing Science 38(2), 2019. Read via RePEc abstract, 2026-11-22. Quote: *"The observational methods often fail to produce the same effects as the randomized experiments, even after conditioning on extensive demographic and behavioral variables."* Prediction: granular data plus extensive conditioning does not recover the experimental effect. **Corroborates** F1, F2 and F6 at the campaign stratum. Overlap: high with the other ad papers, so one witness.
- **Economics of advertising.** Tom Blake, Chris Nosko and Steven Tadelis, *Consumer Heterogeneity and Paid Search Effectiveness: A Large Scale Field Experiment*, Econometrica 83, 2015 (NBER WP 20171). Read via RePEc abstract, 2026-11-22. Quote: *"returns from paid search are a fraction of conventional non-experimental estimates"*; also *"brand-keyword ads have no measurable short-term benefits."* Prediction: per-slot heterogeneity, with frequent users not influenced yet accounting for most spend. **Corroborates** Fig 1 :19 and F5. Same pool as Gordon, so not an independent witness.
- **Economics of measurement.** Randall A. Lewis and Justin M. Rao, *The Unfavorable Economics of Measuring the Returns to Advertising*, Quarterly Journal of Economics 130(4), 2015. Read via RePEc abstract, 2026-11-22. Quote: *"The median confidence interval on return on investment is over 100 percentage points wide"*; also *"informative advertising experiments can easily require more than 10 million person-weeks, making experiments costly and potentially infeasible for many firms."* Prediction: low power and selection bias make the verdict expensive but not impossible. **Corroborates** F8, unreachable-at-budget rather than underivable. Same broad pool.
- **Measurement instrument design.** Garrett A. Johnson, Randall A. Lewis and Elmar I. Nubbemeyer, *Ghost Ads: Improving the Economics of Measuring Ad Effectiveness*, MSI working paper, 2015; Journal of Marketing Research 54(6), 2017. Read via MSI record, 2026-11-22. Quote: *"This new methodology for measuring ad effectivenes can reduce experimentation cost, improve measurement precision, and work with ad platforms that optimize ad delivery in real time."* Prediction: an instrument improved from a worse one already returning something lowers the cost of the counterfactual. **Corroborates** Fig 6 :32-34. Same pool, and a platform-facing source, so its independence is limited.
- **Science reporting of the same paper.** Institute for Operations Research and the Management Sciences, *How measurable is online advertising?*, ScienceDaily, 2019-03-21. Read 2026-11-22. Quote: *"did more consumers purchase because they saw an ad, or would many of those consumers have purchased even in the absence of the ad?"* Prediction: the question is a counterfactual one. **Corroborates** the residual statement in section 0. Same paper as Gordon, so zero additional witness weight.

**Low-overlap field, independent witness for the method shape.**

- **Epidemiology and causal inference.** Miguel A. Hernán and James M. Robins, *Using Big Data to Emulate a Target Trial When a Randomized Trial Is Not Available*, American Journal of Epidemiology 183(8), 2016. Read via PMC full text, 2026-11-22. Quote: *"Causal inference from large observational databases (big data) can be viewed as an attempt to emulate a randomized experiment"*. Prediction: specify the target trial before analysing observational data, and evaluate observational analyses by how well they emulate it. **Corroborates** the counterfactual shape and F9 at a different stratum, with no shared advertising evidence pool. The overlap is low and is therefore worth more than the advertising papers' agreement, though it still does not decide anything the figures decide.

**Framework-internal essays, used for the canonical reading only, not as world witnesses.** Isaiah N, *The Library of Babel*, 2026-10-02; *The Hard Problem is About Source*, 2026-08-28; *The Recursive Self-Improvement Trap*, 2026-11-19; *Decoding Tacit Knowledge*, 2026-11-10, all opened 2026-11-22. Key line from the second: *"An instrument that can't distinguish these cases demonstrates its own inadequacy"*; from the third: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* Overlap with the figures is maximal, so they carry no independent corroboration weight.

**Venue pages opened, no verdict bearing (silent on the question).** Marketing Science Institute home, Advertising Research Foundation home, AAPOR home, SSRN home, all read 2026-11-22. They establish public opt-in routes only. The ARF home page does name incrementality and attribution as practical measurement problems, which is a topical match, not evidence.

No world source conflicts with the figure verdict; the conflict rule was not triggered. The advertising papers agree partly because they share experiment methods and pools, which is one witness under Fig 2 :40, not five.

## VERDICT (from the figures)

**The figure-derived verdict:** a company separates the two cases only by comparing behavior per consumer slot against a counterfactual whose assignment does not depend on what the company believes about those consumers, and by keeping C1 (did behavior change) and C2 (did the ad reach likely buyers) as separate compounds with different instruments. Reach, clicks, and attributed conversions are frame-internal budget filters, not witnesses. A campaign average is a pooled reading that destroys the per-slot signal. The purchase reading cannot name its source; what is owed is a source-discriminating instrument improved from an existing one. Wide confidence intervals are an unreachable-at-budget fact, not an underivable one, so the first question is whether the term is already in the closure and merely underpowered. The break is usually at the missing counterfactual vocabulary and the unstated objective, not at planning. Which named tool or vendor is best is a declared `gap`, not a hidden answer. Mode `specified`, ungrounded. No world source flipped a verdict; the one genuine strain, using the market as anchor for two questions, was returned to the census and re-mapped to two anchors at two strata.

- **Cost if wrong:** misdirected diagnosis. A firm failing C2 is sold a better holdout, or a firm failing C1 is told to improve targeting, and a single lever is applied to a union that needs two. The stronger cost is spending the independence of outside readers by sending a recording (a set of vendor claims) instead of a generator (the shape and its refuter). Fig 2 :42 *"Buy independence in proportion to the cost of being wrong."* The cost is real but bounded and reversible.
- **Undoable:** yes. No term is deleted if the claim fails; the refutation is added and the reach falls because *"What is recorded only grows. What is reachable is derived, and it can fall."* (Fig 6 :42). The shape and its four falsifiers are recorded with provenance so a later reader can locate the error (Fig 10 :62).
- **Reversed by:** a ground reading, not agreement. Specifically: a logs-only statistic that predicts per-consumer causation verified against a holdout; an attribution instrument whose reading provably determines its source; an intervention that collapses the union with no categorically different residue; a proof of genuine underivability for a named class; or a channel shown to be stale or pooled whose estimate still matches a refreshed holdout at every handoff. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [The figures, as text (local extract)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [WATSON 60: the figures as metalaws](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\60_FIGURES_AS_METALAWS.md)
- [THE FORMULA](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [THE SEAT MAP, amended](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_SEAT_MAP_Field_Guide_amended.md)
- [A Comparison of Approaches to Advertising Measurement, Gordon et al. 2019](https://ideas.repec.org/a/inm/ormksc/v38y2019i2p193-225.html)
- [Consumer Heterogeneity and Paid Search Effectiveness, Blake, Nosko and Tadelis 2015](https://ideas.repec.org/p/nbr/nberwo/20171.html)
- [The Unfavorable Economics of Measuring the Returns to Advertising, Lewis and Rao 2015](https://ideas.repec.org/a/oup/qjecon/v130y2015i4p1941-1973.html)
- [Ghost Ads, Johnson, Lewis and Nubbemeyer, MSI working paper](https://msi.org/working-papers/ghost-ads-improving-the-economics-of-measuring-ad-effectiveness)
- [How measurable is online advertising?, ScienceDaily 2019](https://www.sciencedaily.com/releases/2019/03/190321130405.htm)
- [Using Big Data to Emulate a Target Trial, Hernán and Robins 2016](https://pmc.ncbi.nlm.nih.gov/articles/PMC4832051)
- [The Library of Babel, Isaiah N 2026](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Hard Problem is About Source, Isaiah N 2026](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [The Recursive Self-Improvement Trap, Isaiah N 2026](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [Decoding Tacit Knowledge, Isaiah N 2026](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [Marketing Science Institute](https://msi.org/)
- [Advertising Research Foundation](https://thearf.org/)
- [AAPOR](https://www.aapor.org/)
- [SSRN](https://www.ssrn.com/)
