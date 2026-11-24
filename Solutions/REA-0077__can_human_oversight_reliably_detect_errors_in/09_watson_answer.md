# WATSON answer: can human oversight reliably detect errors in a mixed-competence system?

**Mode: `specified` on the substantive claims, `general` on the structural shape, nothing `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This run synthesizes `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself"), it cannot settle the claim it reports on. No measurement was taken.

## QUESTION

Decide, in effect terms, whether "human oversight reliably detects errors" can be asserted of a system that is superhuman on some tasks and subhuman on others. Option A: yes, a competent person is a reliable detector. Option B: the claim is a union compound and human judgment is an instrument, not the anchor, so reliability belongs to an arrangement rather than to a person. What each leads to: A leads to a deployment rule that treats review as the check and spends reviewer independence exactly on the tasks where the reading is weakest. B leads to an unbundled set of conditions, a shape for a checkable arrangement, and a ground that could still reverse the shape.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor, partition or union, and dependency order.

- **R (the residual).** Gap between what the oversight arrangement predicts about correctness and what the ground returns. Arity: two overlapping competence regimes, so a union compound (Fig 9 :54, "And when the split lands on a union rather than a partition, unbundle before you search again"). Symmetry: checker and maker are asymmetric; detection is a comparison against a threshold, not a symmetric bond. Scale: first order for one review, second order for the arrangement, with a lossy transform between.
- **Domain 1, the system (maker).** Actors: model, corpus, confidence signal. Currency: per-slot prediction. Anchor: task correctness, which it cannot author.
- **Domain 2, the human checker.** Actors: reviewer, rubric, interface, attention, time. Currency: agreement, correction, refusal. Anchor in practice: often the reviewer's own judgment; legitimately for correctness, a separate ground. This is where the decisive finding lands.
- **Domain 3, the ground for correctness.** Actors: verification dataset, measurement, counter, experiment, outcome. Currency: settled correctness. Anchor: itself, immovable by frames. Not a party to a disagreement.
- **Domain 4, the oversight arrangement (habitat).** Actors: case selection, feedback, other frames, rotation. Currency: independence and channel fidelity. Anchor: the ground, kept reachable.
- **Order by dependency.** Ground legitimacy first (Fig 2 :36-38); vocabulary and perception second (Fig 3 :25-27); independence third (Fig 2 :31-32); per-slot residual fourth (Fig 1 :19); refusal fifth (Fig 5 :53); authority and channel sixth (Fig 10 :24); reliability claim last (Fig 3 :19).

Strain test applied: Fig 2's instrument clause governs anchor legitimacy; Fig 11's capability clause governs where reliability resides. Different objects, so re-census resolves the apparent tension. One live strain remains (verifier non-access versus mere inability to reproduce an output) and is named in section VERDICT and in `11_audit.md`.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim.

- Fig 2 :36 "An anchor is legitimate when the question is constitutively about it." -> applies only where the question is about people.
- Fig 2 :37-38 "It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure." -> decisive for D2: the human is an instrument for correctness.
- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> a scalar reliability figure cannot carry the live slot.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." -> aggregate accuracy hides the superhuman-task errors.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." -> zero detected errors is silence, not settlement.
- Fig 11 :39 "capability is a property of agent-and-habitat, never of the agent alone" -> reliability belongs to the arrangement.
- Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." -> synthetic oversight studies prove wiring.
- Fig 10 :24 "the ground does not decay, the channel does" -> reliability must be re-measured; familiarity spends independence.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." -> detection rates are budget filters.
- Fig 13 :134 "Unreachable is a verdict here, not a silence" -> the numeric verdict is a gap, reported as such.

Triangulation status. F1 (anchor versus instrument) is triangulated across Fig 2, Fig 11 and the weak-supervision result from Burns et al., which come from different evidence pools. F2 (independence collapse) is triangulated across Fig 2, Fig 7 and Fig 8. F3 (aggregation) is triangulated across Fig 1 and the Symbols table. F4 (refusal) is triangulated across Fig 5, the Operators table and Formula step 2. F5 (agent-and-habitat) is triangulated with Bowman et al. F8 (vocabulary break) is single-source for the figure claim, with empirical corroboration only. The scalar reliability verdict is a `gap` after re-census. One strain is live: Fig 10's verifier non-access condition is a soundness requirement, while mere inability to reproduce a superhuman output is not; the two are related but not identical, and no figure line collapses them.

## WORLD (secondary sources read)

World sources corroborate only. They are listed by field; overlap with the figures or with each other is declared.

- **AI, scalable oversight.** Samuel Bowman, Jeeyoon Hyun, Ethan Perez et al., "Measuring Progress on Scalable Oversight for Large Language Models," arXiv:2211.03540, 2022. Quote: "tasks for which human specialists succeed but unaided humans and current general AI systems fail" and participants using an unreliable assistant "substantially outperform both the model alone and their own unaided performance." Predicts that the regime is real and that the arrangement changes capability. Corroborates F5. Overlap: low with the framework, moderate with other AI sources in this list.
- **AI, weak supervision.** Collin Burns, Pavel Izmailov, Jan Hendrik Kirchner et al., "Weak-to-Strong Generalization," arXiv:2312.09390, 2023. Quote: "future superhuman models will behave in complex ways too difficult for humans to reliably evaluate; humans will only be able to weakly supervise superhuman models." Predicts an axis the human does not measure. Corroborates F1. Overlap: low with the framework, moderate with other AI sources.
- **AI safety, RLHF limits.** Stephen Casper, Xander Davies, Claudia Shi et al., "Open Problems and Fundamental Limitations of Reinforcement Learning from Human Feedback," arXiv:2307.15217, 2023. Quote: "survey open problems and fundamental limitations of RLHF and related methods" and "propose auditing and disclosure standards to improve societal oversight." Predicts that oversight needs standards and audits, not trust. Corroborates F7.
- **Machine learning, multi-frame arrangements.** Geoffrey Irving, Paul Christiano and Dario Amodei, "AI safety via debate," arXiv:1805.00899, 2018. Quote: judging "can fail if the task is too complicated for a human to directly judge." Predicts that the checker should compare frames rather than produce the answer. Corroborates F2 and F4.
- **Machine learning, proxy versus ground.** Leo Gao, John Schulman and Jacob Hilton, "Scaling Laws for Reward Model Overoptimization," arXiv:2210.10760, 2022. Quote: "Because the reward model is an imperfect proxy, optimizing its value too much can hinder ground truth performance, in accordance with Goodhart's law." Predicts that an optimised reading is not an anchor. Corroborates F1 and F3.
- **Human factors, automation bias.** Goddard, Roudsari and Wyatt, "Automation bias: a systematic review of frequency, effect mediators, and mitigators," J Am Med Inform Assoc 2012;19(1):121-7, PMID 21685142, abstract read on PubMed. Quote: "the tendency to over-rely on automation" and "automation-induced complacency, or insufficient monitoring of automation output." Predicts that a reviewer's monitoring degrades with reliance. Corroborates F7.
- **Animal behaviour, low overlap.** Öztel and Balcı, "Mice monitor their timing errors," Sci Rep 2024, PMID 39375395; Kononowicz, van Wassenhove and Doyere, PNAS 2022, PMID 35193973, "Rodents monitor their error in self-generated duration on a single trial basis." Predicts that error monitoring is a mechanism with a ground, not a global self report. Corroborates the per-slot shape. Overlap: very low.
- **Mathematics, low overlap.** Stanford Encyclopedia of Philosophy, "Godel's Incompleteness Theorems," revised 2025. Quote: "the consistency of F cannot be proved in F itself." Predicts that an oversight arrangement cannot certify itself from inside. Corroborates Fig 8 rule 2. Overlap: very low.
- **Government and engineering.** NIST AI Risk Management Framework, 2023, revised 2026, https://www.nist.gov/itl/ai-risk-management-framework. Quote: "to improve the ability to incorporate trustworthiness considerations into the design, development, use, and evaluation of AI products, services, and systems." Predicts that evaluation and governance are institutional, not personal. Corroborates the arrangement reading.

No world source conflicts with the figure verdict. The Bowman et al. result was initially read as a conflict and then re-censused as corroboration of F5, and that correction is recorded in `01` section 6. The AI safety sources share a community and several authors, so their agreement is one pool, not several witnesses. The animal-behaviour, mathematics and government sources are genuinely lower overlap.

## VERDICT (from the figures)

The question as posed cannot be answered with a yes or a number. For a correctness residual, human judgment is an instrument and not the anchor, so a bare person cannot be the verifier on the tasks where the system is stronger. Reliability belongs to the whole arrangement: a legitimate ground, a checker from a different closure, per-slot residuals, an explicit refusal, and a maintained channel. This is a `specified`, ungrounded, triangulated structural verdict. The scalar reliability question is a `gap`: no figure line governs it and no ground reading was taken. The answer stops there and records the lineage.

- **cost if wrong:** bounded and locatable. If the structural verdict is wrong, the arrangement requirements are over-built and cheap human review may be under-used where human judgment really is the anchor, for example judgements of answer quality for people. Fig 2 :42 says "Buy independence in proportion to the cost of being wrong." The avoidable cost is spending reviewer independence by sending them the framework before asking for their verdict, or by selecting them for likely agreement.
- **undoable:** yes. The shape is a design, not a primitive. Each condition can be revised separately without withdrawing the others, and an agent-only improvement that moved the ground would refute F5 while leaving F1 intact. No term has to be deleted; a refutation adds a refusal and the record keeps it.
- **reversed by:** a ground reading, not agreement and not prestige. A per-slot detection experiment on the superhuman-task slots against a verified ground, with measured checker independence, would reverse F1 or F2. A reviewer-only change that moved task correctness without changing contact would reverse F5. A demonstration that correctness here is constitutively defined by human judgment would reverse the anchor finding. A figure re-census that admitted verifier non-access to be sufficient for soundness would clear the live strain. Until one fires, the verdict remains candidate.

## Sources

- [Figures text extract with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [60 FIGURES AS METALAWS (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\60_FIGURES_AS_METALAWS.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [THE SEAT MAP Field Guide (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_SEAT_MAP_Field_Guide_amended.md)
- [Measuring Progress on Scalable Oversight for Large Language Models](https://arxiv.org/abs/2211.03540)
- [Weak-to-Strong Generalization](https://arxiv.org/abs/2312.09390)
- [Open Problems and Fundamental Limitations of RLHF](https://arxiv.org/abs/2307.15217)
- [AI safety via debate](https://arxiv.org/abs/1805.00899)
- [Scaling Laws for Reward Model Overoptimization](https://arxiv.org/abs/2210.10760)
- [Godel's Incompleteness Theorems, SEP](https://plato.stanford.edu/entries/goedel-incompleteness/)
- [Automation bias systematic review, PubMed record](https://pubmed.ncbi.nlm.nih.gov/?term=automation+bias+systematic+review+Goddard)
- [Animal error monitoring, PubMed results](https://pubmed.ncbi.nlm.nih.gov/?term=metacognition+animals+error+monitoring+uncertainty)
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [NIST AI RMF Engage](https://www.nist.gov/itl/ai-risk-management-framework/ai-risk-management-framework-engage)
- [ACM FAccT 2027 Call for Papers](https://facctconference.org/2027/cfp.html)
- [ACM CHI 2026](https://chi2026.acm.org/)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [How Intelligence Actually Works](https://adventuresinml.substack.com/p/how-intelligence-actually-works)
- [Decoding Tacit Knowledge](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [The Library of Babel](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [They're Scanning Books When They Should](https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [How a Society of Agents Would Work](https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work)
- [Arrival of the Fittest: The Tether](https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether)
