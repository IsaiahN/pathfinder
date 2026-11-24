# WATSON answer: can machine learning reveal useful patterns in Earth-system data, and how can scientists guard against misleading correlations?

**Mode: `general` on the shape, `specified` on the guards, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This run synthesizes `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. By the framework's own rule (*The Recursive Self-Improvement Trap*: LLM output is a simulation and "the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the question it reports on. No measurement of a model or dataset was taken.

## QUESTION

Decide, in effect terms, what the Tether says about two bundled claims. Option A: ML delivers causal knowledge of the Earth system from data, and an ensemble of such models corroborates itself. Option B: ML narrows a shape, a candidate set of regularities that becomes useful only when ranged against an independent ground, and the guards against misleading correlation are figure-derived. What each leads to: A promotes a frame-internal score to a verdict and counts a shared evidence pool as two witnesses; B produces a checkable output with refuters written in advance and an honest stop at the limit of the instruments.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor, partition or union, and order by dependency.

- **R (the residual).** The gap between what a model predicts and what the ground returns, indexed per slot (region, variable, season). Arity: two conditions, so a **union compound** (Fig 9 :55-56: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."), not one hard question. Symmetry: correlation is symmetric (the `+` bond); causation is ordered (`⇒` or `→`); a misleading correlation is a symmetric bond carrying an ordered bond's meaning (Fig 12). Scale: first order inside a model, second order at the handoff to the ground (Fig 4).
- **Domain 1, model frame.** Actors: samples, features, parameters, loss, predictions. Currency: prediction error and description length. Anchor: the held-out ground observation, outside the frame (nameable, yes). Question type: one partition of the union.
- **Domain 2, Earth-system ground.** Actors: satellites, stations, field campaigns, measurements. Currency: observations. Anchor: the physical world as measured (nameable, yes, and it must not move). Question type: the ground for D1 and D3, not a third frame.
- **Domain 3, verification frame.** Actors: scientists, reviewers, independent instruments, independent datasets. Currency: residuals and agreement. Anchor: the ground, never agreement (nameable, yes). Question type: one partition of the union.
- **Overlap D1 ∩ D3 (correlated ensemble).** Actors: models trained on one corpus. Currency: agreement. Anchor: none independent (no nameable anchor). Verdict: not a domain, a compound (Fig 9 :54), so it gets no verdict of its own.
- **Order by dependency (Fig 3 :20).** Split the union, describe the residual in effect terms, state the objective as a per-slot residual that trends down, refuse the causal bond before accepting a pattern, then settle against the ground. A guard at the last step cannot rescue a failure at the second.

Strain test applied: Fig 13 governs composition across the two kinds and does not mention ML, so it is background for the data types (space, time, spectrum, gradient, network), not a verdict on ML. No strain after re-census.

## TETHER (primary, verbatim)

Cited against `local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs. Verdicts are kept per domain, never averaged.

**Per domain 1, model frame (triangulated):**

- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> the residual is a slice, not a global number; per-region and per-season residuals carry the signal.
- Fig 1 :23 "The ground enters as the only metric." -> training loss and compression cannot score the frame.
- Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." -> accuracy and feature counts are disqualified from the verdict.
- Fig 5 :43-44 "A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly." -> overfit and vacuous patterns fail the description-length bargain.
- Fig 9 :27-28 "describe it before you go looking, or any frame you pick will seem to fit" -> register the residual and predicted signature before model search.

**Per domain 3, verification frame (triangulated):**

- Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool" -> correlated models are one witness; this is the central guard against a misleading correlation.
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." -> a list selected for agreement cannot corroborate.
- Fig 7 :13 "agreement compounds, evidence does not" -> ensembles raise vocabulary, not evidence.
- Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." -> more of the same data cannot add the missing causal bond.
- Fig 2 :33 "The anchor must not update." -> the held-out observation cannot be retuned to fit the model.

**Per domain 2, ground and habitat (triangulated):**

- Fig 10 :24 "the ground does not decay, the channel does" -> the practical failures are stale percepts, dropped transients and pooled readings.
- Fig 11 :52-54 "contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out." -> confounders sit several links out; enumerate the habitat.
- Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." -> simulation-only validation proves wiring.
- Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." -> measure R_T when an abstraction is brought back to a slot.

**On the shape of the answer (triangulated):**

- Fig 9 :32 "you get a kind of thing, never the answer itself" -> ML returns a candidate set, not a causal name.
- Fig 12 :117 "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." -> a correlation and its causal reading are different substances over the same variables.

**Gap:** no figure line governs the usefulness of a *named* pattern in a *named* dataset. That is a gap on the ground reading, not a silence on the guards. The figures are domain-agnostic metatheory; they set the shape and the checking discipline, not an empirical result.

## WORLD (secondary sources read)

World sources corroborate only. Low-overlap sources are listed first; each gives field, author / venue / year, quote, prediction here, and corroborates or conflicts.

- **Machine learning, independent of the framework.** Pedro Domingos, Communications of the ACM, 2012. Quote: "even though learners of the kind we have been discussing can only learn correlations, their results are often treated as representing causal relations." Also "The most common mistake among machine learning beginners is to test on the training data and have the illusion of success." Predicts that a pattern needs held-out ground and that correlation must not be promoted to cause. **Corroborates** Fig 1 and Fig 12. Overlap: low (different field, different author).
- **Earth-system ML, independent.** Markus Reichstein et al., Nature 566, 2019 (via MPI-M news page). Quote: "All data-driven and statistical approaches do not guarantee physical consistency per se, are highly dependent on data quality, and have difficulty extrapolating." Predicts that data quality and physical consistency are separate from pattern discovery. **Corroborates** Fig 10. Overlap: low.
- **Causal inference for Earth systems, independent.** Jakob Runge et al., Nature Reviews Earth and Environment, 2023. Quote: "Examples from climate and biogeosciences illustrate typical challenges, such as contemporaneous causation, hidden confounding and non-stationarity." Predicts that guarding against misleading correlation needs causal methods, not more correlation. **Corroborates** Fig 11 and Fig 8. Overlap: low.
- **Statistics education, independent.** Tyler Vigen, Spurious Correlations, 2014 to present. Quote: "any sufficiently large dataset will yield strong correlations completely at random." Predicts that data dredging manufactures patterns before any model is chosen. **Corroborates** Fig 9 :27-28. Overlap: low.
- **Canonical usage, framework author.** Isaiah N, figures README, 2026. Quote: "what a missing thing would have to look like (a shape, not a name)." Predicts a refused causal slot and a recorded stop. **Corroborates** Fig 9 :32. Overlap: high (framework author), so weak corroboration.
- **Source discrimination, framework author.** Isaiah N, "The Hard Problem is About Source," 2026. Quote: "If several paths create the same behavior, then behavior is a projection with lossy information." Predicts that a correlation reading cannot name its source without a discriminating instrument. **Corroborates** the gap verdict. Overlap: high.
- **Describe before looking, framework author.** Isaiah N, "Decoding Tacit Knowledge," 2026. Quote: "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." Predicts pre-registered predicted signatures. **Corroborates** Fig 9 :27-28. Overlap: high.
- **Simulation disclaimer, framework author.** Isaiah N, "The Recursive Self-Improvement Trap," 2026. Quote: "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." Predicts that this derivation cannot settle its own claim. **Corroborates** its simulated status. Overlap: high.

No world source conflicts with the figure verdict, so the conflict rule (back to the census) was not triggered. The four low-overlap sources come from different fields and do not quote one another; the four framework essays share an author and an evidence pool and are one witness, not four.

## VERDICT (from the figures)

The shape survives and the strong reading does not. ML can narrow a candidate set of regularities, a shape, never a causal name on that act alone. It is useful only when ranged against an independent ground through figure-licensed guards: shared evidence pools cannot corroborate; residuals are per slot; the ground is the only metric; overfit and vacuous patterns fail the MDL bargain; the residual is described before model search; thresholds are fixed before the run; the anchor does not update; the habitat is enumerated for cascading confounders; and the round trip is measured. The question is a union of two conditions with two grounds. No named pattern is asserted useful, because no measurement is reported. This is `general` on the shape and `specified` on the guards, ungrounded and `candidate`.

- **cost if wrong:** bounded and locatable. The packet is mode-labelled, states refuters before the conclusion, and records provenance, so an error is findable rather than invisible. The real cost is spending the independence of outside readers by sending a recording instead of a generator, which Fig 2 :42 prices: "Buy independence in proportion to the cost of being wrong." That cost is avoidable by leading with the shape claim and its refuter. In Earth-system decisions the underlying cost of a misleading correlation is high, which is why independence is worth buying.
- **undoable:** yes. No primitive is withdrawn and no named pattern is retracted, because none is asserted. A guard found to fail is removed without touching the others. A sent packet can be superseded by a corrected one. The union split can be revised if one intervention is shown to settle both halves.
- **reversed by:** a ground reading, not agreement. Two models with genuinely disjoint evidence agreeing against a third held-out ground would test the shared-pool guard; a global metric preserving every per-slot live residual would test the per-slot guard; a scoring quantity producible only by the ground would test the only-metric guard; an intervention or causal discovery naming a mechanism with provenance, plus a measured nonzero R_T, would close the gap on a named pattern. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [Figures text extract with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [A Few Useful Things to Know About Machine Learning](https://cacm.acm.org/research/a-few-useful-things-to-know-about-machine-learning)
- [Deep learning and process understanding for data-driven Earth system science](https://www.nature.com/articles/s41586-019-0912-1)
- [Artificial Intelligence for the Earth system (MPI-M report)](https://mpimet.mpg.de/en/communication/news/artificial-intelligence-for-the-earth-system)
- [Causal inference for time series](https://www.nature.com/articles/s43017-023-00431-y)
- [Spurious Correlations](https://www.tylervigen.com/spurious-correlations)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [Decoding Tacit Knowledge](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- Folder material synthesized: `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, `08_expert_verification_packet.md`
