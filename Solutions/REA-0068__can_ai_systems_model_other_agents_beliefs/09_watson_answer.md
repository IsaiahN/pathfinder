# WATSON answer, REA-0068

**Mode: `specified`, not `grounded`.** Figures are primary and decide. World sources are secondary, corroborate but never overrule, and a conflict returns the derivation to the domain census. This is a simulated derivation checked for internal consistency against the figures, not a ground reading.

## QUESTION

Can AI systems model other agents' beliefs and intentions without mistaking prediction for understanding?

Restated as an effect: can R = |Γ(b,a) - o′| be driven to zero on an agent's behaviour while remaining large on the latent belief or intention that produced it? R is indexed per agent-slot and per mental-state slot, never averaged (Fig 1 :19). Anchor test: held-out behaviour is legitimate for the prediction question because that question is constitutively about behaviour (Fig 2 :36); it is only an instrument for the attribution question, which is constitutively about a latent that is *"Not the observation"* (Symbols table, `b`).

## DOMAIN CENSUS

Arity: a relation among model library, model belief, emitted attribution, agent behaviour and the agent's unobserved latent, indexed by slot and ordered by time; it carries an ordered bond and a comparison bond, not symmetric ones. Symmetry: not symmetric, the model observes behaviour but not the latent. Scale: the agent's own step loop and the model's loop about it; the membrane is lossy (Fig 4 :30).

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Model prediction loop | model Γ, b_model, attribution a, agent behaviour o′ | residual reduction per slot | held-out behaviour | admitted |
| D2 Agent's own loop | Γ_agent, b_agent, w_agent, a_agent | reduction of its own residual | the agent's own ground | admitted; interior not observable from D1 |
| D3a Frame boundary, synthetic | two frames plus recorded latent ground truth | what crosses: behaviour versus latent | experimenter-controlled latent | admitted |
| D3b Frame boundary, real agent | two frames, real agent | same currency | none nameable without a source discriminator | not a domain yet for the attribution claim |
| D4 Verification frame | outside checkers, benchmark designers | agreement and residual | the ground, never agreement | admitted |
| X1 "Understanding" as a free property | the model, a label | insight | none independent of an instrument | not a domain yet |

Union, not partition: D1/D3 and D2/D3 form two compounds; the whole is a union of C1 (prediction) and C2 (source attribution) (Fig 9 :54-57). Dependency order: perception → vocabulary → objective → planning → learn and carry (Fig 3). Strain test: applying Fig 13's six physical terms to mental states only fit by renaming beliefs as energy, so Fig 13 was re-censed to the honest-stop role only (S1 in `01`).

## TETHER (primary, verbatim, per domain, low-overlap fields first)

**D1 Model prediction loop, status triangulated (Fig 1 and Fig 2, per-slot residual vs anchor legitimacy).**

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"An anchor is legitimate when the question is constitutively about it."** (Fig 2 :36)

Reading: prediction is well posed with behaviour as its anchor, but only per slot. Mode `general` for the anchor rule, `specified` for the model application. Refuter: a controlled experiment where accuracy discriminates two latent sources behind one behaviour.

**D2 Agent's own loop and the frame boundary, status triangulated (Fig 6, Fig 8, Fig 4, distinct roles).**

> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"What is unavailable is a sensor for something that has never registered anywhere, at any resolution. That is the whole of it."** (Fig 6 :40)
> **"Only the actors, the currency and the anchor change."** (Fig 4 :20)

Reading: the latent is reached by import from a differing closure or by an instrument, not by more internal composition. Mode `specified`. Refuter: an atom added to the model's reach purely by internal composition with no ground-truth latent entering.

**D3a Synthetic case, status single-source for the structural claim (Symbols table), world-confirmed by Rabinowitz et al.**

> Symbols table, `F`: *"Cannot be run without a pose."* Frame entry: *"there is no known transform between two of them."*

Reading: a pose-bearing transform is the missing thing in the figure set; in a gridworld the experimenter supplies it by recording the latent. Mode `general` about the framework. Refuter: a verified pose-free transform between two frames.

**D3b Real-agent case, status `gap`.** No figure line governs the attribution claim after a genuine re-census. The Symbols table says `b` is *"Not the observation."* Fig 9 :32: *"you get a kind of thing, never the answer itself."* Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* The missing thing is a source-discriminating instrument, characterized in effect terms but not held.

**D4 Verification frame, status triangulated (Fig 7, Fig 10, Fig 9, low overlap).**

> *"agreement compounds, evidence does not"* (Fig 7 :13)
> *"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."* (Fig 7 :36)
> **"A verifier that can reconstruct the claim cannot verify it."** (Fig 10 :42)
> **"Soundness requires the checker to be unable to produce what it is checking."** (Fig 10 :43)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

Reading: benchmarks are filters; the checker must be outside the attribution. Mode `general` for the non-access rule, `specified` for benchmarks. Refuter: a score that prospectively predicts per-slot attribution errors out of distribution.

**Union and meaning, status triangulated (Fig 9, Fig 12, Fig 11).**

> *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."* (Fig 9 :57)
> *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* (Fig 12 :117)
> *"Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground."* (Fig 11 :36)

Triangulation status: the anchor split is triangulated across Fig 2 and Fig 1 (low topical overlap). The closure/import verdict is triangulated across Fig 6, Fig 8 and Fig 4. The non-access rule is triangulated across Fig 10 and Fig 9. The no-transform claim is single-source (Symbols table), with Fig 4's lossy membrane as a same-framework corroboration, so it is one witness. The source-discriminator gap is declared, not smoothed.

## WORLD (secondary, each source read; field, author/venue/year, quote, prediction, corroborates|conflicts)

**Evidence pool A, machine and LLM theory of mind (one witness, not five).**

- **AI / multi-agent learning.** Neil C. Rabinowitz, Frank Perbet, H. Francis Song et al., *Machine Theory of Mind*, arXiv:1802.07740, 2018. Opened 2026-11-23. Quote: models are built *"from observations of their behaviour alone."* Prediction: a latent-like model can be learned from behaviour in a synthetic habitat. **Corroborates** C1 and the D3a case; it does not touch C2, because the latent is supplied by the experimenter.
- **NLP / social intelligence.** Maarten Sap, Ronan LeBras, Daniel Fried and Yejin Choi, *Neural Theory-of-Mind? On the Limits of Social Intelligence in Large LMs*, EMNLP 2022, updated arXiv v2 2023. Quote: *"even ChatGPT and GPT-4 do not display emergent Theory of Mind"*, with 60 percent on ToMi. Prediction: scale alone does not move the wall. **Corroborates** Fig 6 :21; same pool as the other AI sources.
- **NLP / belief tracking.** Melanie Sclar, Sachin Kumar, Peter West, Alane Suhr, Yejin Choi and Yulia Tsvetkov, *Minding Language Models' (Lack of) Theory of Mind*, ACL 2023, arXiv:2306.00924. Quote: the work reveals *"spurious patterns in existing theory of mind benchmarks."* Prediction: a score can rise while the instrument stays blind to the source. **Corroborates** F5 and C3.
- **Cognitive science / PNAS letter.** Damian K. F. Pang, Severin K. Y. Pang, Marianne D. Broeker and Alix Hibble, *Do large language models have a theory of mind?*, PNAS 122(28), 2025. Quote: *"successfully solving isolated ToM tasks is insufficient evidence to indicate the presence of ToM."* Prediction: isolated tasks are not a cumulative case. **Corroborates** the anchor split and the outside-checker rule.
- **NLP / belief revision.** Chunkit Chan et al., *MuSeToM: Multi-Sensory Evaluation of Belief Revision with Textual Cues Across Six Senses*, arXiv:2611.16662, 2026. Quote: models *"often detect that a belief may change"* but *"struggle to identify the updated belief"* and over-update on *"perceptually salient but epistemically insufficient cues."* Prediction: a pooled cue can swamp the per-slot latent signal. **Corroborates** Fig 1 :22 and Fig 10 :26.

**Low-overlap fields (independent witnesses for the mechanism shape).**

- **Formal semantics / NLU.** Emily M. Bender and Alexander Koller, *Climbing towards NLU: On Meaning, Form, and Understanding in the Age of Data*, ACL 2020, pages 5185 to 5198. Quote: *"a system trained only on form has a priori no way to learn meaning."* Prediction: matching form is not recovering the source. **Corroborates** Fig 12 :5 from a different evidence pool.
- **Comparative primatology.** Natalie Schwob, Rosemary Bettle, Megan Mulhinch, Zarin P. Machanda and Alexandra G. Rosati, *Tolerant and despotic macaques show divergent temperament but similar theory of mind*, Philosophical Transactions of the Royal Society B 380(1929), 2025. Quote: *"both species showed similar success in each social task"*, and *"there is currently no evidence that macaques show this skill"* for false belief. Prediction: similar capacities in distinct habitats, and no proto-instrument where nothing has registered. **Corroborates** Fig 11 :39 and Fig 6 :40.
- **Cognitive-science reference entry.** *Theory of mind*, Wikipedia, accessed 2026-11-23. Quote: *"the behavior of the other person... is the only thing being directly observed; no one has direct access to the mind of another, and the existence and nature of the mind must be inferred."* Prediction: the latent is inferred, not read. **Corroborates** the Symbols `b` entry; also reports Dennett's intentional stance as *"rather than the accuracy of its representation of the world"*, which corroborates the prediction/understanding split.
- **Framework-internal essays**, used for the canonical reading only, not as world witnesses. Isaiah N, *The Library of Babel*, Oct 02 2026; *The Recursive Self-Improvement Trap*, Nov 19 2026; *The Hard Problem is About Source*, Aug 28 2026; all Adventures in Machine Learning, opened 2026-11-23. Key quote from the last: *"the answer is unreached until a better instrument exists."* Overlap with the figures is maximal, so they carry no independent corroboration weight.

**Venue pages opened, no verdict bearing (silent on the question).** Cognitive Science Society, SRCD, ACL Rolling Review, AsPredicted and APS. These establish public opt-in routes only.

No world source conflicts with the figure verdict; the conflict rule was not triggered. The apparent tension between Rabinowitz's working ToMnet and Fig 6 :21 was resolved by re-census into the D3a/D3b split, not by softening either.

## VERDICT (from the figures)

The figure-derived verdict: prediction and understanding are different quantities. Prediction is well posed, indexed per agent-slot, with held-out behaviour as its legitimate anchor. Attributing a latent belief or intention needs a source-discriminating instrument because the latent is not the observation and several latents can yield one behaviour. The model composes inside its own closure, the frame transform needs a pose not held, convergent derivation and adopted import are identical in output and separated only by the record, and a checker that can reconstruct the attribution cannot verify it. So a small behavioural residual can coexist with a wrong latent attribution, and mistaking the first for the second is the specific forbidden move. For synthetic agents with recorded latent ground truth the gap is closable in principle; for real agents it is a declared `gap`. The verdict is the union kept separate per domain, never averaged. Mode `specified`, with the anchor and non-access rules at `general`. No world source flipped a verdict.

- **cost if wrong:** misdirected diagnosis. A system failing C2 would be sold more accuracy and a bigger benchmark, while a system failing C1 would be sent looking for a latent instrument it does not need. In outreach terms, an expert's twenty minutes would be spent refuting a shape that was never the right shape. The cost is real but bounded and largely reversible. The deeper cost is spending an outside checker's independence by sending a recording instead of a residual and a refuter, which Fig 2 :42 prices: *"Buy independence in proportion to the cost of being wrong."*
- **undoable:** yes. No term is deleted if the claim fails; a refutation is added and the reach falls because *"something was added rather than because anything was deleted"* (Fig 6 :42-43). The shape and its five refuters are recorded in a provenance trail so a later reader can locate the error (Fig 10 :62-64).
- **reversed by:** any of the five pre-registered falsifiers, in particular (1) a real-agent latent manipulation with behaviour held fixed where attribution tracks the latent and not the behaviour, (2) a pose-free frame transform checked against the agent's ground, (3) one accuracy score that predicts out-of-distribution per-slot attribution errors, (4) a checker that reconstructs the attribution and still catches a wrong one against ground, or (5) a change in latent-tracking capability with contact held fixed. A source with a genuinely different evidence pool showing that source attribution is uniquely recoverable from behaviour would also reverse it.

## Sources

- [The figures, as text (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [Machine Theory of Mind, Rabinowitz et al. 2018](https://arxiv.org/abs/1802.07740)
- [Neural Theory-of-Mind? On the Limits of Social Intelligence in Large LMs, Sap et al.](https://arxiv.org/abs/2210.13312)
- [Minding Language Models' (Lack of) Theory of Mind, Sclar et al. 2023](https://arxiv.org/abs/2306.00924)
- [Do large language models have a theory of mind?, Pang et al. 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12280963/)
- [MuSeToM: Multi-Sensory Evaluation of Belief Revision, Chan et al. 2026](https://arxiv.org/abs/2611.16662)
- [Climbing towards NLU: On Meaning, Form, and Understanding, Bender and Koller 2020](https://aclanthology.org/2020.acl-main.463/)
- [Tolerant and despotic macaques show divergent temperament but similar theory of mind, Schwob et al. 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12198900/)
- [Theory of mind, reference entry](https://en.wikipedia.org/wiki/Theory_of_mind)
- [The Library of Babel, Isaiah N 2026](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Recursive Self-Improvement Trap, Isaiah N 2026](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [The Hard Problem is About Source, Isaiah N 2026](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [Cognitive Science Society](https://cognitivesciencesociety.org/)
- [Society for Research in Child Development](https://www.srcd.org/)
- [ACL Rolling Review](https://aclrollingreview.org/)
- [AsPredicted](https://aspredicted.org/)
- [Association for Psychological Science](https://www.psychologicalscience.org/)
