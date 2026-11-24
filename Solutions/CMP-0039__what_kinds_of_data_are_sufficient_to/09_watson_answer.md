# WATSON answer: what kinds of data are sufficient to identify causal influence under feedback, confounding and hidden variables?

**Mode: `specified`, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This WATSON run synthesizes `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*: "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself") it cannot settle the question it reports on. No measurement was taken.

## QUESTION

Decide, in effect terms, which data suffice to settle "X causally influences Y" in a system with feedback, confounding and hidden variables. Option A: more observational data of the same kind are sufficient once the sample is large enough. Option B: only data with an anchor, independence from the hidden source, loop resolution and an imported atom are sufficient; observational data alone are a filter. What each leads to: A mistakes a narrowed equivalence class for a verdict and spends the independence of the people checking it; B reports a shape with falsifiers and stops at the instrument limit.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor; partition or union; order by dependency.

- **R (the residual).** The question of what converts a fitted joint distribution into a settled directional claim. Arity: a binary relation embedded in a network. Symmetry: the data is symmetric across observationally equivalent structures; the causal claim is ordered (Fig 12 :49). Scale: first order inside the system, second order when an intervention is applied from outside. Fig 9 :55 names the compound a union, not a list of separate problems.
- **Domain 1, observational data frame.** Actors: measured variables, joint distribution, conditional independences. Currency: association and fit. Anchor: none available from inside the frame. This is the failure that drives the question.
- **Domain 2, intervention frame.** Actors: experimenter, do-operation, randomization, instrument, environment. Currency: measurements under perturbation. Anchor: the intervention, provided it does not update on the system.
- **Domain 3, hidden-variable frame.** Actors: unmeasured common causes and mechanisms three steps out. Currency: unexplained covariance. Anchor: a discriminating instrument or an independent environment that imports the missing atom.
- **Domain 4, verification frame.** Actors: analysts and reviewers. Currency: agreement and residuals. Anchor: the ground, never agreement. In this simulated run all seats draw on one evidence pool, so their independence is low.
- **Partition or union.** Union. Feedback, confounding and hidden variables are overlapping conditions; a case in two conditions is not a harder case of either (Fig 9 :57). The compound needs its own loop.
- **Order by dependency (Fig 3).** Perceive variables -> possess ordered bonds -> state what counts as identification -> plan the intervention -> carry invariance across environments. Anchor and independence precede loop resolution, which precedes importing the latent.

Strain test: no line was forced. Two candidate strains were re-censed. The distinction between "unreachable at this budget" and "underivable without an import" is Fig 6 :27 and Fig 8's scope rule, different scopes rather than a contradiction. The framework's "shape, not a name" governs missing primitives, not the naming of atoms a discriminating instrument has already imported, so it does not conflict with naming a measured latent.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs.

- Fig 12 :5 "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." -> the joint distribution records ingredients, not the causal arrangement. This is why more of the same data cannot by itself identify a direction.
- Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." -> observationally equivalent graphs are isomers; their difference is invisible in the distribution and decisive under intervention.
- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." -> the sufficient setting mechanism must not update on the system. Randomization and do-operations are the canonical instances.
- Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence." -> two frames sharing a hidden source are one witness; sufficient data require independence, not just volume.
- Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool" -> confirming a direction with the same confounded dataset is not corroboration.
- Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." -> only an import from a different frame supplies the missing atom, in this case the intervention or the environment that measures the latent.
- Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." -> feedback needs data that resolve the loop; a longer chain does not close it.
- Fig 11 :52 "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out." -> hidden common causes are found by enumerating the cascade, not by direct contact with the two observed variables.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." -> sample size and fit are filters; the anchor is the witness.
- Fig 9 :32 "you get a kind of thing, never the answer itself" -> the framework returns a shape of sufficient data, not a specific instrument or a named latent.
- Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." -> the outside checker must receive the residual and refuter, not the fitted model.

Triangulation status: the no-direction-from-distribution verdict is triangulated across Fig 12 :5, :46 and the canonical figures README's "a shape, not a name" limit (low overlap between the bond definition and the usage rule). The anchor requirement is triangulated across Fig 2 :29 and Fig 10 :24 ("the ground does not decay, the channel does"), two separate figures. The isomer reading is single-source for the figure definition (Fig 12 :117), with the world check still unmeasured. The loop-resolution claim is single-source for Fig 12 :121, corroborated weakly by the convergent cross mapping literature. The operand type of `⋛` is not used in this derivation, so the exemplar's type strain does not transfer.

## WORLD (secondary, each source read)

World sources corroborate only; they never overrule the figures. Overlap is declared.

- **Reference work / statistics.** Wikipedia contributors, "Causal inference" (Wikipedia, accessed 2026-11-22): "The main difference between causal inference and inference of association is that causal inference analyzes the response of an effect variable when a cause of the effect variable is changed." Predicts that the sufficient data must include a changed cause; corroborates C2 and the anchor requirement. Overlap: low with framework.
- **Complex systems / ecology.** Wikipedia contributors, "Convergent cross mapping" (Wikipedia, accessed 2026-11-22), citing Sugihara, May, Ye, Hsieh, Deyle, Fogarty and Munch, Science 2012: "Cross mapping is generally asymmetric. If X forces Y unidirectionally, variable Y will contain information about X, but not vice versa." Predicts that causal direction is readable as an asymmetry in time-series information flow; corroborates the ordered-bond and loop-resolution claims. Overlap: low. The underlying Science paper was read through this page, not directly, and is recorded that way.
- **Causal machine learning / domain generalization.** Kasra Jalaldoust and Elias Bareinboum, "Abduction-Deduction Entanglement: Domain Generalization via Representation Transplants" (arXiv, 2026): "these structural invariances are non-identifiable from the source data alone." Predicts that one observational environment cannot pin the mechanism; corroborates Fig 6 :21. Overlap: low.
- **Statistics / philosophy of AI.** Ernest Fokoué, "Causality as the Statistical Conscience of Artificial Intelligence" (arXiv, 2026): "identifying mechanisms invariant under intervention" is set against prediction `P(Y|X)` versus `P(Y|do(X))`. Predicts that intervention is the identifying ingredient; corroborates the anchor requirement. Overlap: low.
- **Interpretability / information geometry.** Dominic Dahlem, Diego Maniloff and Mac Misiura, "Self-Attention as Transport: Limits of Symmetric Spectral Diagnostics" (arXiv, 2026): "every transpose-invariant spectral diagnostic is orientation-blind". Predicts that symmetric readings cannot see direction; corroborates Fig 12 :5 and :92. Overlap: low.
- **Physics / mechanistic interpretability.** Chih-Ting Liao and Xin Cao, "The Objective Decides: When a Learned Dynamics Model Uses a Conserved Quantity" (arXiv, 2026): a probe can decode a quantity at `R² ≈ 1` while it is "causally inert on next-state prediction"; overwriting it leaves the forward pass unchanged. Predicts that decodability is not causal deployment; corroborates the filter-versus-witness rule. Overlap: low.
- **Econometrics.** Saeyoung Rho, Cyrus Illick, Samhitha Narasipura, Alberto Abadie, Daniel Hsu and Vishal Misra, "Time-Aware Synthetic Control" (arXiv, 2026): "The synthetic control (SC) framework is widely used for observational causal inference with time-series panel data." Predicts that temporal ordering matters for identifying effects from panels; corroborates loop resolution. Overlap: low.
- **Environmental time series.** Ziruo Hao, Tao Yang, Xiaofeng Wu and Bo Hu, "Distributed Dynamic Invariant Causal Prediction in Environmental Time Series" (arXiv, 2026): the method learns causal predictors while "mitigating spatial confounding variables" using environmental context. Predicts that multiple environments supply what one dataset cannot; corroborates the independence and import requirements. Overlap: low.
- **Metatheory / perception.** Isaiah N, "How Intelligence Actually Works" (adventuresinml Substack, 2026-09-16): "The projection of green can't tell you whether it was RGB, CMYK or something else that composed it." Predicts that naming a source from a projection is the metamerism error; corroborates "shape, not a name". Overlap: high, framework author.
- **Metatheory / instrument discrimination.** Isaiah N, "The Hard Problem is About Source" (adventuresinml Substack, 2026-08-28): "An instrument that can't distinguish these cases demonstrates its own inadequacy, it cannot claim anything substantial about what is being measured or what causes it." Predicts that equivalence classes need better instruments, not more argument; corroborates Fig 6 :29. Overlap: high, framework author.
- **Validation / prestige.** Isaiah N, "The Recursive Self-Improvement Trap" (adventuresinml Substack, 2026-11-19): "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." Predicts that agreement cannot substitute for a ground reading; corroborates the simulated status and the refusal to rank contacts by receptiveness. Overlap: high, framework author.

No world source conflicts with the figure verdict; the conflict rule was not triggered. The three framework essays share an author and an evidence pool with the figures, so their agreement is one pool talking, not independent corroboration (Fig 2 :40).

## VERDICT (from the figures)

Observational data alone are **not sufficient** in general. They narrow the space to a class of observationally equivalent structures (isomers) and can never select a member without an import. **Sufficient data** have four properties and one lineage condition: an anchor whose setting does not update on the system; independence from the hidden source across frames; time or intervention that resolves the feedback loop; an imported atom that measures or replaces the unmeasured variable; and provenance with a verifier that cannot reconstruct the claim. This is a `specified`, ungrounded shape. Which specific dataset suffices for a given pair X,Y is left to the ground and to instruments not yet brought to bear. The strongest figure statement of the whole answer is Fig 12 :5: the bond is the half that nothing was recording.

- **cost if wrong:** bounded and locatable. The packet states the four properties, the refuters and the lineage, so an error is findable rather than invisible. The real cost is spending the independence of outside readers by sending a fitted model instead of a residual, which Fig 2 :42 prices ("Buy independence in proportion to the cost of being wrong."). That cost is avoidable by leading with the question and the refuter.
- **undoable:** yes. The four-part shape can be revised without withdrawing any figure. If a specific anchor fails in a given system, the case is re-censused and a different import is sought. `07_the_tether_answer.md` and `08_expert_verification_packet.md` already state the non-claims that keep the revision cheap.
- **reversed by:** a ground reading, not agreement. A source-discriminating instrument that splits an equivalence class would move the latent slot from ungrounded to settled; a procedure recovering direction from a distribution alone, a confounded intervention that still identifies, or a cycle signed from one time slice would break the shape; a re-census showing that a closed frame can add an atom by composition alone would break the import requirement. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [Verbatim figure text with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [Causal inference (reference overview)](https://en.wikipedia.org/wiki/Causal_inference)
- [Convergent cross mapping](https://en.wikipedia.org/wiki/Convergent_cross_mapping)
- [Abduction-Deduction Entanglement: Domain Generalization via Representation Transplants](https://arxiv.org/abs/2605.25156)
- [Causality as the Statistical Conscience of Artificial Intelligence](https://arxiv.org/abs/2605.24076)
- [Self-Attention as Transport: Limits of Symmetric Spectral Diagnostics](https://arxiv.org/abs/2605.04893)
- [The Objective Decides: When a Learned Dynamics Model Uses a Conserved Quantity](https://arxiv.org/abs/2607.03728)
- [Time-Aware Synthetic Control](https://arxiv.org/abs/2601.03099)
- [Distributed Dynamic Invariant Causal Prediction in Environmental Time Series](https://arxiv.org/abs/2603.02902)
- [How Intelligence Actually Works](https://adventuresinml.substack.com/p/how-intelligence-actually-works)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
