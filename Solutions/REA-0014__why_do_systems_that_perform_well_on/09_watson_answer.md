# WATSON answer: why benchmark success fails under small context change

**Mode: `general` on the structural shape, `specified` on the transfer prediction, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This run synthesizes `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the question it reports on. No measurement was taken.

## QUESTION

Decide, in effect terms, why a system that performs well on a familiar benchmark often fails under a small change of context. Option A: treat the score as a measure of capability and explain the failure as a loss or a bug in the system. Option B: treat the score as a substituted-habitat reading and explain the failure as a mismatch between a fixed evaluation room and a moved question, with capability belonging to the system and habitat together. What each leads to: A names an agent-internal culprit without an instrument and encourages more of the same training; B yields a checkable shape, five pre-registered refuters, and a required measurement of the round-trip gap `R_T` between score and deployment. The figures decide B.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor, partition or union, and order by dependency.

- **R (the residual).** The gap between the score reported in C0 and the contact the system maintains with the ground after a small change to C1. Arity: two habitats, one system. Symmetry: asymmetric and directional, strong in the familiar direction, collapse in the changed direction; this is a transform across a membrane, not a symmetric join. Scale: agent-and-habitat, and the gap is a cross-scale round trip `R_T`. Fig 1 :19 "The residual is indexed by object slot, not aggregated." A global mean near zero can hide a live slot residual in C1. Question type: a **union compound**, not a partition, of shortcut cues, underspecification, metric saturation, habitat substitution and missing vocabulary (Fig 9 :55).
- **Domain 1, the benchmark frame.** Actors: dataset, metric, scorer, training distribution. Currency: the benchmark score, a frame-internal quantity. Anchor: conditional; legitimate only if the question is constitutively about the benchmark (Fig 2 :36), otherwise it is an instrument, not the ground. It produces the high score and cannot witness transfer.
- **Domain 2, the deployment habitat.** Actors: the system plus the new actors, conditions and relations in contact with the task. Currency: capability, that is contact with the ground. Anchor: the task ground, which is nameable. This is where the failure lives.
- **Domain 3, the robustness verification frame.** Actors: researchers, out-of-distribution evaluation sets, stress tests. Currency: evidence about transfer and agreement. Anchor: the ground, never agreement. In this simulated run all three domains draw on one evidence pool, so independence is low and agreement is not corroboration.
- **Order by dependency.** Settle the ground first; enumerate the deployment habitat next; then instrument the vocabulary/objective link; then design the metric; then improve the model (Fig 3 dependency chain). Refuse the "score equals capability" term before minting a new explanation (Formula step 2). Describe the residual before choosing a frame (Fig 9 :27-28).

Strain test applied: Fig 1 (ground is the only metric) and Fig 2 (an anchor is legitimate when the question is about it) govern different question scopes, so there is no strain after re-census. The one live strain is that `R_T` is required by Fig 4 but has not been measured here.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs.

- Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." -> a high benchmark score is wiring in a substituted habitat, not capability in another.
- Fig 11 :39 "capability is a property of agent-and-habitat, never of the agent alone." -> the failure is a property of the pair; the model did not simply lose an internal ability.
- Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves." -> more of the same training cannot fix a contact failure.
- Fig 11 :68 "what you failed to reproduce is invisible until the goal fails" -> the pre-change score could not carry the information about the missing conditions.
- Fig 11 :69 "what you unintentionally introduced is invisible until it acts" -> the changed habitat brings unchosen actors that only reveal themselves at failure.
- Fig 4 :25 "A recording carried upward looks like knowledge and is a description of one occasion." -> a benchmark-perfect model is a recording of one habitat.
- Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." -> the honest report is the measured gap `R_T`, not the score.
- Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." -> the score cannot be its own witness.
- Fig 10 :26 "saturated metrics, pooled readings" -> saturation is a named channel failure, so a green metric need not mean contact.
- Fig 10 :72 "When the question changes, the room should change. A room that stays fixed while the question moves is the failure; the correlation is only its symptom." -> the direct answer to a small context change: the room stayed fixed and the score is a symptom.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." -> the benchmark allocates effort; it does not decide the transfer claim.
- Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." -> the needed term is not reached by more search in the same closure.
- Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." -> split the compound before searching; one lever will not clear the intersections.
- Fig 12 :117 "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." -> benchmark case and changed-context case are isomers over shared atoms; a score-only formula cannot tell them apart.

Triangulation status: the substituted-habitat verdict is **triangulated** across Fig 11 (capability and habitat) and Fig 4 (lossy scale transform), two figures with low overlap. The filter-not-witness verdict is **triangulated** across Fig 9 and Fig 2. The fixed-room verdict is **triangulated** across Fig 10 and the local Seat Map :235, which states the same sentence in a different authority file. The union-compound verdict is **single-source** for the figure definition (Fig 9), with essay corroboration in the same evidence pool. The isomer reading is **single-source** (Fig 12) and unmeasured. The value of `R_T` is a **gap**: the figure requires the measurement and this simulated run cannot supply it.

## WORLD (secondary sources read)

World sources corroborate only; they cannot overrule the figures. All were opened on 2026-11-23. Overlap is declared rather than hidden: most are in the ML evidence pool, and two share a first author.

- **ML / human comparison.** Robert Geirhos, Jörn-Henrik Jacobsen, Claudio Michaelis et al., "Shortcut learning in deep neural networks", *Nature Machine Intelligence* 2, 665 to 673, 2020. Quote: "Shortcuts are decision rules that perform well on standard benchmarks but fail to transfer to more challenging testing conditions, such as real-world scenarios." Predicts the shape almost verbatim; corroborates F1. Overlap: high, the question's own field.
- **ML / statistics.** Alexander D'Amour et al., "Underspecification Presents Challenges for Credibility in Modern Machine Learning", arXiv:2011.03395, 2020; JMLR 23. Quote: "An ML pipeline is underspecified when it can return many predictors with equivalently strong held-out performance in the training domain." Predicts that equal in-domain scores hide different deployment behaviour; corroborates the union condition C2. Overlap: high.
- **ML / benchmark design.** Pang Wei Koh et al., "WILDS: A Benchmark of in-the-Wild Distribution Shifts", arXiv:2012.07421, 2020; ICML 2021. Quote: "On each dataset, we show that standard training yields substantially lower out-of-distribution than in-distribution performance." Predicts the score-contact gap; corroborates F9. Overlap: high.
- **ML / animal behaviour analogy.** Sebastian Lapuschkin et al., "Unmasking Clever Hans predictors and assessing what machines really learn", *Nature Communications* 10, 1096, 2019. Quote: "We observe that standard performance evaluation metrics can be oblivious to distinguishing these diverse problem solving behaviors." Predicts metric blindness to strategy; corroborates F2 and F4. Overlap: high, and it invokes Clever Hans from comparative psychology, a low-overlap analogue.
- **Computer vision / human psychophysics.** Robert Geirhos et al., "ImageNet-trained CNNs are biased towards texture; increasing shape bias improves accuracy and robustness", arXiv:1811.12231, ICLR 2019. Quote: "We show that ImageNet-trained CNNs are strongly biased towards recognising textures rather than shapes, which is in stark contrast to human behavioural evidence." Supplies a concrete small change (a cue conflict); corroborates habitat substitution. Overlap: high, and shares a first author with the shortcut paper, so these two count as one witness pool.
- **Learning theory / mathematics.** Shai Ben-David et al., "A theory of learning from different domains", *Machine Learning* 79, 151 to 175, 2010. Quote: "Discriminative learning methods for classification perform well when training and test data are drawn from the same distribution." Bounds target error by source error plus domain divergence; corroborates filter-not-witness in a low-overlap frame (mathematics rather than empirical ML).
- **Framework essays (canonical, high overlap with the figures).** Isaiah N, "The Library of Babel: Locating The Book of Books" (2026-10-02): "Perhaps your problem was a bundle or conflation of several problems masquerading as one?" corroborates the union. "The Hard Problem is About Source" (2026-08-28): "If several paths create the same behavior, then behavior is a projection with lossy information" corroborates the need for a discriminator. "Decoding Tacit Knowledge" (2026-11-10): "Long, close contact pulls the frames together, so the process that makes communication easy slowly uses up that extra reach" corroborates benchmark saturation. "The Recursive Self-Improvement Trap" (2026-11-19) corroborates the simulated status and the prestige rule. All four opened 2026-11-23.

No world source conflicts with the figure verdict; the conflict rule was not triggered. Their agreement is recorded as corroboration, not as independent witnesses.

## VERDICT (from the figures)

The shape stands; any specific culprit does not. A benchmark is a substituted habitat, so its score is frame-internal wiring evidence rather than a capability verdict. Capability is agent-and-habitat, so a small context change can collapse task success while the old score stays green, especially when the metric has saturated and the evaluation room has stayed fixed while the question moved. The failure is a union compound, not one bug; more training in the same closure helps only the unfound-in-closure case. The benchmark case and the changed-context case are isomers over shared atoms, different substances that a score-only notation cannot distinguish. The honest report is the round-trip gap `R_T`, which this simulated derivation requires be measured and does not supply. This is a `general`/`specified`, ungrounded, candidate result.

- **cost if wrong:** bounded and locatable. The packet states its mode and refuters before the claim, so an error is findable rather than invisible. The real cost is spending the independence of outside readers by sending a conclusion instead of a generator, which Fig 2 :42 prices: "Buy independence in proportion to the cost of being wrong." That cost is avoidable by leading with the shape claim and its refuter. A second cost is practical: treating a saturated metric as a working channel can keep a failing system deployed.
- **undoable:** yes. The agent-internal framing is removable without touching the derivation; `07_the_tether_answer.md` and `08_expert_verification_packet.md` already remove it. No primitive has to be withdrawn, and a sent claim can be superseded by a corrected packet. What is not undoable in practice is the independence once spent by asking outside readers to endorse before they check.
- **reversed by:** a ground reading, not agreement. A measured `R_T` of zero on a real habitat change would break the round-trip claim; a score that predicts transfer as well as direct contact measurement would break filter-not-witness; an isolated improvement that raises capability in a changed habitat would break Fig 11 :40; an evaluation room that tracks the question while a score collapses with contact intact would break the fixed-room diagnosis; a demonstration that the five conditions are independent would break the union claim. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [The figures, as text (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [WATSON 60: the figures as metalaws (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\60_FIGURES_AS_METALAWS.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [THE SEAT MAP Field Guide (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_SEAT_MAP_Field_Guide_amended.md)
- [Shortcut learning in deep neural networks](https://www.nature.com/articles/s42256-020-00257-z)
- [Underspecification Presents Challenges for Credibility in Modern Machine Learning](https://arxiv.org/abs/2011.03395)
- [WILDS: A Benchmark of in-the-Wild Distribution Shifts](https://arxiv.org/abs/2012.07421)
- [Unmasking Clever Hans predictors and assessing what machines really learn](https://www.nature.com/articles/s41467-019-08987-4)
- [ImageNet-trained CNNs are biased towards texture](https://arxiv.org/abs/1811.12231)
- [A theory of learning from different domains](https://link.springer.com/article/10.1007/s10994-009-5152-4)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [Decoding Tacit Knowledge: Why Context, Subtext, and Pretext Matter](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- Folder material synthesized: `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, `08_expert_verification_packet.md`
