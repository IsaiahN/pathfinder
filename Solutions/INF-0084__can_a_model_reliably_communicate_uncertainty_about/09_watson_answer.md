# WATSON answer: can a model reliably communicate uncertainty about unfamiliar inputs?

**Mode: `general` for the figure-derived shape, `specified` for its application to current models, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This WATSON run synthesizes material already in `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (The Recursive Self-Improvement Trap: LLM output is a simulacrum and "the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the question it reports on. No measurement was taken by this derivation.

## QUESTION

Decide, in effect terms, what the Tether says about the disjunction: can a model reliably communicate uncertainty about unfamiliar inputs, or does it mainly reflect the limits of its training and evaluation? Option A: treat a model's uncertainty report as a readable signal about the unfamiliar input, so trust it for abstention and escalation. Option B: treat the report as a quantity produced by the training and evaluation regime, so require an external anchor before acting on it. What each leads to: A spends independence and risks treating a mirror as a ground; B withholds a useful signal until an instrument settles it and risks under-use if a genuine signal exists. The sought-for shape was bound as an ordinary term before the search: reliability means tracking ground-truth error on inputs provably outside the training and evaluation closure, stable across independent frames.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors, currency and anchor, partition or union, and order by dependency.

- **R (the residual).** Arity: three terms, the emitted report, the ground value on the input, and the regime that produced the report. Symmetry: the mapping report to claim about input is directed; reliability is a threshold relation, not a symmetric join. Scale: first order inside the trained closure, second order at the boundary where an unfamiliar input meets that closure. Fig 9 :54 "when the split lands on a union rather than a partition, unbundle before you search again": calibration on familiar inputs and detection of unfamiliar ones are overlapping conditions, so R is a union compound, not one hard question.
- **Domain 1, the inference frame.** Actors: parameters, belief b, weighting w, prediction Γ(b,a), softmax score, calibration metric. Currency: predictive accuracy and loss on the eval set. Anchor: the eval set, present but not legitimate, because it shares an evidence pool with training and moves with the model family.
- **Domain 2, the ground.** Actors: the unfamiliar inputs, their true labels or consequences, the distribution shift. Currency: contact, does the report track actual error on genuinely held-out inputs. Anchor: a measurement on a distribution provably disjoint from train and eval, stable across model families. Nameable, and it does not update when the model changes its mind.
- **Domain 3, verification and evaluation.** Actors: evaluators, benchmark designers, metric choosers. Currency: agreement between reported confidence and observed accuracy. Anchor: should be Domain 2, but in standard practice it is the benchmark, a convention that has decided an outcome.
- **Domain 4, human analogue.** Actors: a person and their confidence feeling. Currency: confidence-accuracy correlation. Anchor: objective task performance. World corroboration only; it contributes no figure verdict.
- **Order by dependency.** Settle perception of novelty before calibration objectives (Fig 3); bind the sought-for shape before judging it (Formula, Direction); describe the residual before choosing a frame (Fig 9 :27).

Strain test applied: I first used Fig 8 :39 for a model's failure to flag novelty. That strained the line, because Fig 8 governs underivability inside a closure, not statistical novelty. Re-census moved the depth-versus-absence question to Fig 6 :27. No strain remains after re-census; see `01_figure_grounded_audit.md` section 2.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs. Verdicts are kept per domain and never averaged.

- Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." -> Domain 1: a model's own confidence cannot establish its own reliability.
- Fig 5 :48 "Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing." -> Domain 1: a self-report is an output, not a settlement. **Domain 1 verdict: triangulated** (two figures, low overlap).
- Fig 6 :27 "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same." -> Domain 2: a low-confidence flag reports the indistinguishability, not its cause.
- Fig 9 :44 "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing." -> Domain 2: no frame certifies its own coverage. **Domain 2 verdict: triangulated** (Fig 6 and Fig 9).
- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." -> Domain 3: an eval set from the training pool is not an anchor.
- Fig 10 :47 "a convention that decides an outcome has stopped being one" -> Domain 3: a benchmark promoted to decider is a frame in the collapsed panel of Fig 2. **Domain 3 verdict: triangulated** (Fig 2 and Fig 10).
- Fig 9 :54 "when the split lands on a union rather than a partition, unbundle before you search again" -> union finding.
- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> averaging hides the unfamiliar slot. **Union verdict: triangulated** (Fig 9 and Fig 1).
- Fig 9 :32 "you get a kind of thing, never the answer itself" -> the framework returns a shape, not a number.
- Fig 12 :125 "A composition costs in two currencies, and they do not add." -> a number prices a description in bits; settling it costs actions. **Shape verdict: single-source** for the two-currency pricing (Fig 12), with Fig 9 corroborating the shape-not-a-number limit.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." -> refusing the reliability horn is not proving that no useful signal exists.
- Fig 13 :134 "Unreachable is a verdict here, not a silence" -> the honest stop is reportable.

**Gap, stated plainly.** No figure line was found that licenses a numeric confidence on a genuinely novel input as a ground-settled name. That is not a silence: it is a gap after a genuine census, and it is why the shape is a refusal. Fig 13 :134 gives the form of the verdict: "Unreachable is a verdict here, not a silence". If such a line is found by re-census, the gap closes and the verdict changes (see reversed by).

## WORLD (secondary sources read)

World sources are corroboration only. Overlap is declared rather than hidden.

- **Field: machine learning, calibration.** Chuan Guo, Geoff Pleiss, Yu Sun and Kilian Q. Weinberger, "On Calibration of Modern Neural Networks", ICML 2017, https://arxiv.org/abs/1706.04599. Quote: "modern neural networks, unlike those from a decade ago, are poorly calibrated." Prediction: a confidence number is not by itself a ground reading. Corroborates the limits horn. Overlap: moderate, one of several empirical ML sources on calibration.
- **Field: machine learning, uncertainty types.** Alex Kendall and Yarin Gal, "What Uncertainties Do We Need in Bayesian Deep Learning for Computer Vision?", NIPS 2017, https://arxiv.org/abs/1703.04977. Quote: "Aleatoric uncertainty captures noise inherent in the observations. On the other hand, epistemic uncertainty accounts for uncertainty in the model -- uncertainty which can be explained away given enough data." Prediction: the two conditions have different remedies and must be split. Corroborates the union finding. Overlap: moderate, same broad empirical ML pool.
- **Field: machine learning, dataset shift.** Yaniv Ovadia, Emily Fertig, Jie Ren, Zachary Nado, D Sculley, Sebastian Nowozin, Joshua V. Dillon, Balaji Lakshminarayanan and Jasper Snoek, "Can You Trust Your Model's Uncertainty? Evaluating Predictive Uncertainty Under Dataset Shift", NeurIPS 2019, https://arxiv.org/abs/1906.02530. Quote: "We find that traditional post-hoc calibration does indeed fall short, as do several other previous methods." Prediction: cheap calibration in bits does not purchase a settlement under shift. Corroborates the limits horn and the two-currency claim. Overlap: moderate.
- **Field: machine learning, out-of-distribution detection.** Dan Hendrycks and Kevin Gimpel, "A Baseline for Detecting Misclassified and Out-of-Distribution Examples in Neural Networks", ICLR 2017, https://arxiv.org/abs/1610.02136. Quote: "Correctly classified examples tend to have greater maximum softmax probabilities than erroneously classified and out-of-distribution examples, allowing for their detection." Prediction: there is a weak but real signal. This **conflicts** with the strongest form of the limits horn (that there is no signal at all), and corroborates the union split I actually derived. I do not claim no signal exists. Overlap: moderate. The conflict sends us back to the census, not to a softer verdict: it confirms that detection and calibration are distinct conditions.
- **Field: human cognition, metacognition.** Stephen M. Fleming, "Metacognition and Confidence: A Review and Synthesis", Annual Review of Psychology 75:241-268, 2024, https://www.annualreviews.org/content/journals/10.1146/annurev-psych-022423-032425. Quote: "metacognitive judgments are inferential and sometimes diverge from task performance." Prediction: a report about confidence is an inference, not a ground. Corroborates the shape at low overlap. Overlap: low field overlap, but shares the question framing.
- **Field: human cognition, confidence-accuracy.** Sunny Jin, Paul Verhaeghen and Dobromir Rahnev, "Across-subject correlation between confidence and accuracy: A meta-analysis of the Confidence Database", Psychonomic Bulletin and Review 29:1405-1413, 2022, https://link.springer.com/article/10.3758/s13423-022-02063-7. Quote: this correlation "is largely unrelated to the metacognitive ability of the individual participants." Prediction: an aggregate confidence-accuracy correlation does not certify individual reliability. Corroborates Fig 1 :19. Overlap: low field overlap, shared framing.
- **Field: metatheory, canonical usage.** Isaiah N, "The Hard Problem is About Source", adventuresinml Substack, 2026, https://adventuresinml.substack.com/p/the-hard-problem-is-about-source. Quote: "If several paths create the same behavior, then behavior is a projection with lossy information." Prediction: a confidence reading cannot comment on its source; an instrument is owed. Corroborates the figure verdict. Overlap: high, same author as the figures, so weak corroboration.
- **Field: validation and simulacra.** Isaiah N, "The Recursive Self-Improvement Trap", adventuresinml Substack, 2026, https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap. Quote: "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." Prediction: this derivation cannot settle its own claim. Corroborates its simulated status. Overlap: high, framework author.

No source flips the figure verdict. The one conflict (Hendrycks and Gimpel) was returned to the census and resolved by keeping calibration and detection as separate conditions, which is the union finding. The essays are by the framework's author, so their agreement with the figures carries little independent weight.

## VERDICT (from the figures)

The question as posed is a union compound and must be split. Once split, the figures decide the three loops separately: a model's own uncertainty output cannot establish its reliability; the boundary between unseen and unrepresentable cannot be named from inside the frame; and the standard verification frame shares an evidence pool with the frame it checks. The figure-licensed shape of a reliable report is a refusal that ranges against an anchor outside the training and evaluation pools, not a precise probability the model scores itself. Under current training and evaluation practice that anchor is usually absent, so the report mainly reflects the limits of training and evaluation. This is `general` for the shape and `specified` for the application to current models. It is not `grounded`: no source-discriminating instrument was run here, and the framework reports "Unreachable is a verdict here, not a silence".

- **cost if wrong:** bounded and locatable. If a genuine signal exists and this verdict under-uses it, the cost is a missed control opportunity on unfamiliar inputs. The packet states its refuter first, so the error is findable rather than invisible. The larger cost is the opposite direction: treating a mirror as a ground and spending an outside reader's independence, which Fig 2 :42 prices as "Buy independence in proportion to the cost of being wrong." That cost is avoidable by leading with the shape claim and its refuter.
- **undoable:** yes. The verdict is a shape, not a primitive, so it can be narrowed or withdrawn without discarding the derivation. A reported confidence can be reclassified from name to settled fact if a ground pays for it. `07_the_tether_answer.md` and `08_expert_verification_packet.md` already carry the narrower form.
- **reversed by:** a ground reading, not agreement. An experiment showing that the uncertainty signal tracks ground-truth error on inputs provably disjoint from training and evaluation, stable across two or more independent model families, would establish the reliability horn for those cases. A source-discriminating instrument that separates input noise from model absence on the same case would name what the flag currently leaves indistinct. A figure re-census that admits a line licensing self-scoring, or that finds a partition boundary between the two conditions, would break the verdict. Until one of these fires, the claim stands as candidate.

## Sources

- [Figures README, canonical](https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md)
- [Verbatim figures text with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Canonical figures README (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [WATSON 60, figures as metalaws (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\60_FIGURES_AS_METALAWS.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [On Calibration of Modern Neural Networks](https://arxiv.org/abs/1706.04599)
- [What Uncertainties Do We Need in Bayesian Deep Learning for Computer Vision?](https://arxiv.org/abs/1703.04977)
- [Can You Trust Your Model's Uncertainty? Evaluating Predictive Uncertainty Under Dataset Shift](https://arxiv.org/abs/1906.02530)
- [A Baseline for Detecting Misclassified and Out-of-Distribution Examples in Neural Networks](https://arxiv.org/abs/1610.02136)
- [Metacognition and Confidence: A Review and Synthesis](https://www.annualreviews.org/content/journals/10.1146/annurev-psych-022423-032425)
- [Across-subject correlation between confidence and accuracy](https://link.springer.com/article/10.3758/s13423-022-02063-7)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [Decoding Tacit Knowledge: Why Context, Subtext and Pretext Matter](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
