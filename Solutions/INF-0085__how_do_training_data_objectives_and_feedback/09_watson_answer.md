# WATSON answer: how training data, objectives and feedback channels shape learned priority

**Mode: `specified` on the three domain verdicts, `general` on the structural shape.**

**Status: SIMULATED DERIVATION, not a ground reading.** This WATSON run synthesizes `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*: *"the truly testable output would need to be derived from the real architecture or working the formula yourself"*) it cannot settle the question it reports on. No measurement was taken.

## QUESTION

Decide, in effect terms, what the Tether says about three offered levers on an AI system's learned priority. Option A: rank training data, objectives and feedback channels by importance and report a winner. Option B: treat them as one lever. Option C: derive the shape of the mapping, keep per-domain verdicts separate, mark the union, and state what is owed. What each leads to: A hands a filter a verdict and erases per-slot structure; B clears only the region where one condition holds and leaves the intersections standing; C gives a checkable shape with written refuters and an honest stop.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor, partition or union, and order by dependency.

- **R (the residual).** The mapping from three levers to per-slot priority. Arity: a relation between a system (Γ, b, w) and its habitat, with three overlapping inputs, so a union rather than an integer. Symmetry: per slot, never aggregated, per Fig 1 :19 and :28. Scale: within one closure per training run, crossing scales through the lossy membrane of Fig 4.
- **Domain 1, data and habitat.** Actors: training examples, corpus, labels, sampling distribution. Currency: contact and exposure. Anchor: the ground the data was drawn from, which the corpus itself is not. Question type: partition boundary, what is in contact with the residual.
- **Domain 2, objective.** Actors: loss function, reward, comparison, threshold. Currency: what would count as progress, in the system's own terms. Anchor: none of its own. A frame-internal score cannot anchor. Question type: partition, which compositions cross the kinds.
- **Domain 3, feedback channel.** Actors: reward signal, preference labels, graders, evaluators. Currency: the residual R carried back to the controller. Anchor: the ground at the far end of the channel. Question type: union with D1 and D2. Feedback labels are data; the objective weights both.
- **Domain 4, verification.** Actors: outside readers and this simulated second seat. Currency: agreement versus residual. Anchor: the ground, never agreement. In this run all seats share one evidence pool, so independence is zero.
- **Partition or union.** Union. Fig 9 :55 to :57 describes overlapping conditions where a single lever leaves the intersections standing.
- **Order by dependency.** Data and vocabulary, then objective, then planning and feedback. Fig 3 :20: *"The chain is ordered by dependency, not by importance."* Refuse before mint (Formula step 2); describe the residual before choosing a frame (Fig 9 :27 to :28).

Strain test: the source-gate question for a proxy reward model is still open, Fig 6 :23 versus Fig 8's provenance requirement. Recorded, not smoothed; see `01_figure_grounded_audit.md` section 8.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs.

- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> priority is per slot. No global ranking is licensed. Governs all three domains.
- Fig 1 :28 "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look." -> an averaged loss or reward hides a live rare slot. Governs the measurement form.
- Fig 11 :40 "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves." -> data shapes priority through contact. Governs D1.
- Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." -> synthetic data and fixed benchmarks prove wiring only. Governs D1.
- Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." -> more of the same data is SEARCHED, not IMPORT. Governs D1.
- Fig 3 :10 "it can say what would count as progress here, in its own terms" -> the objective is the third dependency link. Governs D2.
- Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." -> the objective link is the usual break. Governs D2.
- Fig 12 :112 "A plan is a sequence. A goal is a comparison. Progress is a subtraction." -> an objective is a comparison, not added information. Governs D2.
- Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." -> training loss and proxy reward cannot be anchors. Governs D2 and D3.
- Fig 10 :24 "the ground does not decay, the channel does" -> feedback failure is channel failure. Governs D3.
- Fig 10 :25 "stale percepts, dropped transients, saturated metrics, pooled readings" -> the named channel failure modes. Governs D3.
- Fig 2 :36 "An anchor is legitimate when the question is constitutively about it." -> scope condition for feedback. Governs D3.
- Fig 2 :38 "It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure." -> human preference is not a general anchor. Governs D3.
- Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool" -> shared-pool agreement is not corroboration. Governs D4.
- Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." -> the three levers are a compound. Governs the union.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." -> no ranking of levers. Governs the method.
- Fig 12 :125 "A composition costs in two currencies, and they do not add." -> bits for data, actions for ground testing. Governs the union.
- Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." -> the shorthand carries a nonzero R_T.

Triangulation status: D1 is triangulated across Fig 11 (habitat and contact), Fig 6 (closure and import) and Fig 1 (per-slot residual), three low-overlap routes. D2 is triangulated across Fig 3 (dependency break), Fig 12 and the Operators table (comparison grammar) and Fig 1 (ground-only metric). D3 is triangulated across Fig 10 (channel decay), Fig 2 (anchor legitimacy) and Fig 7 (agreement versus evidence). D4 is single-source, Fig 2 :40 primary, with Fig 7 and Seat Map :163 as high-overlap echoes only. The union verdict is triangulated across Fig 9 and Fig 8, with the forward test unmeasured. No `gap` domain after re-census.

## WORLD (secondary, corroboration only)

World sources never override a figure line. Each was opened on 2026-11-23.

- **AI safety / objectives.** Dario Amodei, Chris Olah, Jacob Steinhardt, Paul Christiano, John Schulman and Dan Mané, *Concrete Problems in AI Safety*, arXiv:1606.06565, 2016. Quote: *"an objective function that is too expensive to evaluate frequently"*. Predicts that objective design is a distinct accident class, separate from data and from learning dynamics. Corroborates D2. Overlap: low, independent of the framework.
- **RL / feedback channels.** Paul Christiano, Jan Leike, Tom B. Brown, Miljan Martic, Shane Legg and Dario Amodei, *Deep reinforcement learning from human preferences*, arXiv:1706.03741, 2017. Quote: *"goals defined in terms of (non-expert) human preferences between pairs of trajectory segments"*. Predicts that sparse human feedback can shape priority without a dense reward. Corroborates D3's channel reading. Overlap: low, independent.
- **Reward modeling / channel decay.** Leo Gao, John Schulman and Jacob Hilton, *Scaling Laws for Reward Model Overoptimization*, arXiv:2210.10760, 2022. Quote: *"Because the reward model is an imperfect proxy, optimizing its value too much can hinder ground truth performance, in accordance with Goodhart's law."* Predicts proxy reward rising while ground performance falls, exactly Fig 10 :24 read empirically. Corroborates D3 and the frame-internal ban. Overlap: low, independent.
- **Training data / substituted habitat.** Ilia Shumailov, Zakhar Shumaylov, Yiren Zhao, Yarin Gal, Nicolas Papernot and Ross Anderson, *The Curse of Recursion*, arXiv:2305.17493, 2023, revised 2024. Quote: *"use of model-generated content in training causes irreversible defects in the resulting models, where tails of the original content distribution disappear."* Predicts that recycled output loses the tails of the original distribution, a concrete instance of Fig 11 :70. Corroborates D1. Overlap: low, independent.
- **Dataset documentation / effect description.** Timnit Gebru, Jamie Morgenstern, Briana Vecchione, Jennifer Wortman Vaughan, Hanna Wallach, Hal Daumé III and Kate Crawford, *Datasheets for Datasets*, arXiv:1803.09010, 2018, CACM 2021. Quote: *"every dataset be accompanied with a datasheet that documents its motivation, composition, collection process, recommended uses, and so on."* Predicts that describing the data in effect terms is a precondition for checking a model against it. Corroborates Fig 9 :30. Overlap: low, independent.
- **Metatheory / canonical usage.** Isaiah N, *figures README*, GitHub `general-agent` branch, 2026. Quote: *"a shape, not a name"*. Predicts a refused ranking and a recorded stop. Corroborates the method. Overlap: high, framework author.
- **Source discrimination.** Isaiah N, *The Hard Problem is About Source*, adventuresinml, 2026-08-28. Quote: *"If several paths create the same behavior, then behavior is a projection with lossy information"*. Predicts that a single reward reading cannot name its source. Corroborates the frame-internal ban. Overlap: high.
- **Search and shape.** Isaiah N, *The Library of Babel: Locating The Book of Books*, adventuresinml, 2026-10-02. Quote: *"With each new term gained, you narrow the space and deepen your vocabulary."* Predicts a narrowed shape rather than a filled ranking. Corroborates. Overlap: high.
- **Validation, prestige and ground.** Isaiah N, *The Recursive Self-Improvement Trap*, adventuresinml, 2026-11-19. Quote: *"The Tether ties alignment to the ground. Not to human preferences. Not to a reward model trained on human feedback."* Predicts that preference feedback is not a general ground. Corroborates D3. Overlap: high.
- **Contact and effect description.** Isaiah N, *Decoding Tacit Knowledge*, adventuresinml, 2026-11-10. Quote: *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."* Predicts describe-the-residual-first outreach. Corroborates Fig 9. Overlap: high.
- **Outputs versus generators.** Isaiah N, *They're Scanning Books When They Should Be Studying Nature*, adventuresinml, 2026-09-06. Quote: *"A corpus is the compressed output of human minds; the capacity that produced it is a generator, and outputs do not contain their generator."* Predicts that more of the same corpus cannot yield a new axis of priority. Corroborates D1 and F9. Overlap: high.
- **Independence and weighting.** Isaiah N, *How a Society of Agents Would Work*, adventuresinml, 2026-10-22. Quote: *"Every agent in a group leans partly on its own experience and partly on the crowd's."* Predicts that the weighting w, not the headcount, decides the lean of priority. Corroborates D2 and D3. Overlap: high.
- **Indiscernibility and the lineage.** Isaiah N, *How Intelligence Actually Works*, adventuresinml, 2026-09-16. Quote: *"The projection that no instrument distinguishes from the thing is still a projection, which is why the lineage has to be kept even when the copy is perfect."* Predicts an honest stop at the union horizon. Corroborates. Overlap: high.
- **Simulation caveat.** Isaiah N, *Arrival of the Fittest: The Tether Architecture*, adventuresinml, 2026-08-19. Quote: *"the library is unknown to us (black-box training data) which is not Framework Compliant, therefore the outputs generated must be seen as simulacra."* Predicts that this derivation is a simulation and cannot settle its own claim. Corroborates the honesty label. Overlap: high.

No world source conflicts with a figure verdict. One apparent conflict was examined and resolved by scope, not by flipping a verdict: the RSI essay says alignment is *"Not to human preferences. Not to a reward model trained on human feedback"*, while Fig 2 :37 says human judgment is the right anchor for *"is this a good answer for a person"*. Fig 2 :36 resolves it: an anchor is legitimate when the question is constitutively about it. For people-questions preference is the ground; for correctness questions it is an instrument. Recorded as a scope strain in `01` and `11`. The five independent papers are five distinct literatures, not one pool; the nine framework-author sources are one pool and are counted as one witness.

## VERDICT (from the figures)

The shape survives; every ranking of the three levers does not. Priority is per slot. Data acts through contact and an enumerated habitat, and synthetic or benchmark-only data proves wiring rather than capability. The objective is the third dependency link and a comparison that decides what counts as progress; it is the link most likely to lack an instrument, and a frame-internal objective cannot anchor. Feedback is a channel that decays while the ground does not; human preference is an anchor only for questions about people, and shared-pool agreement is not corroboration. The three form a union compound with its own loop, and bits and actions do not add. This is `specified`, ungrounded and a candidate. Two strains are named and none hidden: the proxy reward model's source gate, and the apparent preference-versus-ground tension resolved by scope.

- **cost if wrong:** bounded and locatable. The packet states mode, three checkable sub-claims and six refuters before the conclusion, so an error is findable rather than invisible. The real cost is spending the independence of outside readers by sending a ranking or a recording instead of a per-slot shape. Fig 2 :42 prices that: *"Buy independence in proportion to the cost of being wrong."* That cost is avoidable by leading with the shape and its refuters.
- **undoable:** yes. The ranking claim was withdrawn without touching the derivation, `07_the_tether_answer.md` and `08_expert_verification_packet.md` already carry the corrected form, and no primitive has to be withdrawn. A sent claim can be superseded by the corrected packet.
- **reversed by:** a ground reading, not agreement. A per-slot data ablation would move D1. A measured proxy-versus-gold divergence with per-slot labels would move D3. A working standard instrument for whether an objective says what counts as progress would move D2. Demonstrated separability of the three levers on every slot would break the union verdict. A derivation of a new primitive from additional draws from the same distribution and closure would break F9. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [Figures folder, branch general-agent](https://github.com/IsaiahN/tether/tree/general-agent/figures)
- [Figures text extract with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [THE SEAT MAP Field Guide (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_SEAT_MAP_Field_Guide_amended.md)
- [WATSON 60, figures as metalaws (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\60_FIGURES_AS_METALAWS.md)
- [Concrete Problems in AI Safety](https://arxiv.org/abs/1606.06565)
- [Deep reinforcement learning from human preferences](https://arxiv.org/abs/1706.03741)
- [Scaling Laws for Reward Model Overoptimization](https://arxiv.org/abs/2210.10760)
- [The Curse of Recursion](https://arxiv.org/abs/2305.17493)
- [Datasheets for Datasets](https://arxiv.org/abs/1803.09010)
- [How Intelligence Actually Works](https://adventuresinml.substack.com/p/how-intelligence-actually-works)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [Decoding Tacit Knowledge](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [How a Society of Agents Would Work](https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [They're Scanning Books When They Should Be Studying Nature](https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [Arrival of the Fittest: The Tether Architecture](https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether)
