# WATSON answer: how can researchers test generalization rather than historical fit?

**Mode: `general` on the shape, `specified` on the falsifiable predictions, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This run synthesizes material already in `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (Recursive Self-Improvement Trap: LLM output can simulate an answer, but "the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the question it reports on. No model was deployed and no measurement was taken.

## QUESTION

Decide, in effect terms, what a valid test of generalization looks like and what would count against it. Option A: accept small in-sample or same-pool held-out error as evidence that predictions carry to new conditions. Option B: require a sealed, low-overlap anchor and per-condition residuals, and treat the claim as a candidate until a ground reading pays. What each leads to: A counts a quantity the model produces as evidence and spends the independence of anyone asked to trust it; B yields a checkable shape, a measured round-trip gap, and an open verdict.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor, partition or union, and order by dependency.

- **R (the residual).** The gap between a model's fit on historical data and its residual under new conditions. Arity two (model and habitat). Symmetry ordered: fitting on C_hist then testing on C_new is not the reverse test, because the anchor does not update. Scale two: first order inside a condition, second order across conditions. Fig 9 names fit and transport a union compound, not one hard question.
- **Domain 1, fitting frame.** Actors: model, historical data, optimiser, hyperparameters. Currency: in-sample loss. Anchor: none internally. This is the object under test, not a witness. A frame cannot score itself with a quantity it also produces.
- **Domain 2, evaluation frame.** Actors: sealed observations, new conditions, instrument, verifier. Currency: residual against observation. Anchor: the observation, which does not change when the frame changes its mind.
- **Domain 3, habitat / transport frame.** Actors: conditions, actors, relations in contact with the residual. Currency: contact and causal reach. Anchor: still the ground; the habitat is where actors come from and is not itself the ground. Overlaps D2, so the compound needs its own loop.
- **Domain 4, reporting / verification frame.** Actors: verifier, per-condition residual record. Currency: admissible evidence. Anchor: the ground, never agreement. Downstream of D2 and D3.
- **Partition or union.** Union. One lever clears the fitting region and leaves the transport intersection standing.
- **Order by dependency (Fig 3).** Describe R, seal the anchor, enumerate the habitat, choose the instrument, range the model per condition, measure the gap, then select the next condition against the surfaced residual.

Strain test applied: "object slot" in Fig 1 is tracked objects; using conditions as the index is a declared level crossing, not a literal reading. The round trip in Fig 4 crosses between scales; fitting and deployment put the same lossy structure at a different stratum, which Fig 4's invariant kernel permits. No strain was smoothed over.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs.

- Fig 1 :27 "A frame cannot score itself with a quantity it also produces." -> in-sample fit is not evidence for transport.
- Fig 5 :44 "A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly." -> the overfit case is a named figure failure, not a rhetorical preference.
- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." -> the test condition must be fixed before model selection.
- Fig 2 :30 "If it moves when you push on it, it is not an anchor." -> tuning on the test set destroys the test.
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" -> a random split of one dataset cannot witness transport.
- Fig 8 :48 "Two frames that overlap almost completely are one frame wearing two names." -> same-pool train and test are one frame.
- Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." -> an i.i.d. holdout is not a transport test.
- Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." -> transport error is R_T, the gap the fitted description cannot hold.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." -> publish per-condition residuals and the worst case.
- Fig 9 :51 "evidence bearing on the residual is admissible; evidence bearing only on its maker is a stake-inducing channel, and the verifier is denied it" -> show predictions and outcomes, not pedigree.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." -> passing leaves a candidate, not a validated generalizer.
- Fig 2 :42 "Buy independence in proportion to the cost of being wrong." -> high-stakes models warrant genuinely new conditions, not more splits.

Triangulation status: the in-sample-fit verdict is triangulated across Fig 1 (ground is the only metric) and Fig 5 (the MDL bargain), which have different objects. The low-overlap condition verdict is triangulated across Fig 2 (independence) and Fig 8 (union surplus). The substituted-habitat verdict is triangulated across Fig 11 and Fig 2 :40. The per-condition rule is single-source in its literal "object slot" wording (Fig 1) and triangulated for the no-pooling principle with Fig 10 :25-26. The verifier-blindness verdict is triangulated across Fig 9 :51 and Fig 10 :42. One strain is declared (condition slot as a level crossing), none hidden.

## WORLD (secondary sources read)

World sources corroborate; they never overrule the figures. Overlap is declared rather than hidden. These five do not share an author with the framework, unlike the essays used in `05_what_shape_means.md`.

- **Machine learning / distribution shift.** Martin Arjovsky, Léon Bottou, Ishaan Gulrajani, David Lopez-Paz, "Invariant Risk Minimization", arXiv:1907.02893, 2019, revised 2020. Quote: invariances learned by the method "enable out-of-distribution generalization". Prediction: a model selected for average in-distribution risk fails when the environment changes. Corroborates the low-overlap condition requirement. Overlap: separate author group from the other ML sources, though Geirhos et al. cite it.
- **Machine learning / underspecification.** Alexander D'Amour et al., "Underspecification Presents Challenges for Credibility in Modern Machine Learning", arXiv:2011.03395, 2020 (JMLR 2022). Quote: "An ML pipeline is underspecified when it can return many predictors with equivalently strong held-out performance in the training domain." Prediction: even good held-out performance leaves deployment behaviour undetermined. Corroborates in-sample fit is not transport evidence. Overlap: distinct author group; cites related shift work but is not the same evidence pool.
- **Machine learning / benchmarks.** Pang Wei Koh et al., "WILDS: A Benchmark of in-the-Wild Distribution Shifts", arXiv:2012.07421, 2020 (ICML 2021). Quote: "standard training yields substantially lower out-of-distribution than in-distribution performance". Prediction: a measurable gap opens between same-pool and new-condition performance. Corroborates the round-trip gap R_T. Overlap: distinct author group.
- **Machine learning and cognition / shortcut learning.** Robert Geirhos et al., "Shortcut learning in deep neural networks", Nature Machine Intelligence 2, 665 to 673, 2020. Quote: shortcuts "perform well on standard benchmarks but fail to transfer to more challenging testing conditions". Prediction: benchmark fit can come from decision rules that do not transfer. Corroborates the "one occasion perfectly" failure. Overlap: cites Arjovsky et al., so not fully independent of the first row; recorded as partial overlap.
- **Medical statistics / prediction model validation.** Gary S Collins, Johannes B Reitsma, Douglas G Altman, Karel G M Moons, "TRIPOD: the TRIPOD statement", BMJ 2015;350:g7594. Quote: apparent performance "will tend to give an optimistic estimate of performance, owing to overfitting"; external validation requires applying "the original model (that is, the published regression formula)" in new data and comparing with observed outcomes. Prediction: frozen-model external validation is the transport-shaped analogue, and apparent performance is optimistic. Corroborates the sealed-anchor condition. Overlap: low, different field and different evidence pool.

No world source conflicts with the figure verdict, so the conflict rule was not triggered. The four framework essays in `05_what_shape_means.md` are framework-author sources and carry high overlap with the figures; they are used there to read "shape" and are not counted as independent witnesses here.

## VERDICT (from the figures)

A valid generalization test is a transport measurement with four load-bearing parts: a sealed anchor the model cannot update, conditions drawn from a different evidence pool than training, a residual reported per condition rather than averaged, and a verifier shown prediction and outcome rather than model pedigree. The measured quantity is the round-trip gap R_T between fitting and deployment. In-sample fit and same-pool holdouts are fit checks, not transport witnesses. Passing a finite suite leaves the model a candidate, never a grounded generalizer. Fit and transport are a union compound and must be reported as separate domain verdicts. This is a `general` and `specified` result, ungrounded.

- **cost if wrong:** bounded and locatable if the shape is adopted, because each claim carries a refuter and the evidence pool is recorded. The real cost is shipping a model whose validation score was produced by its own fitting frame and then discovering the failure in deployment. Fig 2 :42 prices the remedy: independence bought in proportion to the cost of being wrong. That cost is avoidable by sealing the anchor before selection and adding low-overlap conditions.
- **undoable:** yes. A defective test protocol can be replaced without withdrawing the model or the residual record. `07_the_tether_answer.md` and `08_expert_verification_packet.md` already state the corrected form. The lineage stays so the change is visible.
- **reversed by:** a ground reading, not agreement. A sealed new-condition observation showing that same-pool holdouts predict deployment error as well as low-overlap conditions would break Fig 2 :40 and Fig 11 :70. A demonstration that averaging preserves every live per-condition failure would break Fig 1 :22. A demonstration that an updated anchor still settles the verdict would break Fig 2 :30. A re-census admitting that capability belongs to the model alone would break Fig 11 :39. Until one of these fires, the verdict stands as candidate.

## Sources

- [Figures README, canonical (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [Figures text extract with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [Invariant Risk Minimization](https://arxiv.org/abs/1907.02893)
- [Underspecification Presents Challenges for Credibility in Modern Machine Learning](https://arxiv.org/abs/2011.03395)
- [WILDS: A Benchmark of in-the-Wild Distribution Shifts](https://arxiv.org/abs/2012.07421)
- [Shortcut learning in deep neural networks](https://www.nature.com/articles/s42256-020-00257-z)
- [TRIPOD: the TRIPOD statement](https://www.bmj.com/content/350/bmj.g7594)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [Decoding Tacit Knowledge](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
