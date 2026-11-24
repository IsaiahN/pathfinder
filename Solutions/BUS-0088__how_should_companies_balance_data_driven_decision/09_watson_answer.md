# WATSON answer: how should companies balance data-driven decisions with human judgment?

**Mode: `general` on the shape, `specified` on the per-domain predictions, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This run synthesizes material already in `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (the Recursive Self-Improvement Trap: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the question it reports on. No measurement was taken.

## QUESTION

Decide, in effect terms, what follows from two options for a company decision slot with incomplete or biased data. Option A: tune a scalar balance between a model score and a manager's judgment, and treat the blend as the decision. Option B: split the decision into its constituent questions, name an immovable ground for each, make the model and the human range against it separately, keep residuals per slot, and repair the channel where data are degraded. A sends a convention in place of a verdict and spends the independence of the people who would check it. B sends a checkable shape with refuters written in advance and an open slot until the ground settles it.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor, partition or union, and order by dependency.

- **R (the residual).** For slot `s`, `R_s = |Γ(b,a) - o'|`: the gap between the model's prediction and what happened. Arity: many slots, not one global score (Fig 1 :19). Symmetry: model and human are asymmetric frames, not interchangeable weights. Scale: first loop is one decision, second loop is the policy that governs future decisions. It is a union compound: a factual prediction, a people-facing value question and a legitimacy question overlap in one decision (Fig 9 :54).
- **Domain 1, the data/model frame.** Actors: dataset, model, metric, engineers. Currency: reduction of slot residual and description length. Anchor: the realized outcome, not in-sample accuracy. Not yet a domain if no outcome returns: then perception is broken and the chain stops below the objective link.
- **Domain 2, the human/judgment frame.** Actors: manager, expert, affected person, tacit knowledge. Currency: context, causal narrative, procedural legitimacy. Anchor: two-valued. For a question constitutively about people, the people are the anchor; for a factual prediction, human judgment is an instrument with axes it does not measure. If the "anchor" is elicited after the model's framing, there is no nameable anchor and this slot is `gap`.
- **Domain 3, the verification frame.** Actors: reviewer, board, audit, experiment. Currency: agreement versus residual. Anchor: the ground, never agreement. Independence is bought in proportion to the cost of being wrong.
- **Domain 4, the decision habitat (compound).** Actors: data sources, incentives, institution, instruments, affected people. Currency: contact with the ground. Anchor: the ground. Capability is agent-and-habitat, so a model-only change in a fixed habitat is not a capability change.
- **Order by dependency.** Perception, vocabulary, objective, planning, learn and carry (Fig 3). Refuse before mint (Formula step 2). Describe the residual before choosing a frame (Fig 9).

Strain test: Fig 2 makes human judgment an anchor for people questions while also requiring an anchor not to move when a frame pushes on it. Re-census scopes the first to constitutively people questions and requires pre-model, independent elicitation. If that cannot be arranged the strain is live and the slot verdict is `gap`; it is not smoothed into a recommendation to use both. A second strain, convergence versus adopted import in the contents, is handled by recording where each atom came from.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs.

- Fig 2 :29-30 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor." -> the ground is the realized outcome, not the model score or the manager's override.
- Fig 2 :45 "Frames range against the ground. They do not negotiate with it." -> two separate readings, not a blended compromise.
- Fig 2 :37-38 "Human judgment is the right anchor for is this a good answer for a person, because the question is about people. It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure." -> the human role is set by question type, not by a universal weight.
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" -> a manager reading the same dashboard as the model is one witness, not two.
- Fig 2 :42 "Buy independence in proportion to the cost of being wrong." -> low-cost decisions need one frame and a spot check; high-cost decisions need two low-overlap frames and a ground reading.
- Fig 1 :19 "The residual is indexed by object slot, not aggregated." and Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." -> keep the residual per decision, not per dashboard.
- Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." -> split the bundle before choosing a frame.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." -> a balance ratio is a budget filter, not a verdict.
- Fig 10 :24 "the ground does not decay, the channel does" -> incomplete or biased data are a channel fault.
- Fig 6 :32 "An instrument is not built from a description. It is improved from a worse instrument already returning something." -> repair from an instrument already returning something.
- Fig 8 :45 "Two frames together reach what neither reaches alone." -> the human frame's surplus exists only where its closure differs.
- Fig 7 :35 "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." -> committee consensus is not a ground.
- Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves." -> a better model in the same habitat gains nothing.
- Fig 3 :19 "Optimising a link that already works cannot rescue one that does not." -> diagnose the broken link before changing the frame mix.
- Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." -> the method carried from one decision to policy level has a nonzero gap R_T.

Triangulation status: the one-ground/two-ranges verdict is triangulated across Fig 2 and Fig 1 (low overlap between the anchor definition and the per-slot rule). The channel-decay verdict is triangulated across Fig 10 and Fig 6. The union diagnosis is triangulated across Fig 9 and Fig 3. The two-valued human role is single-source in the figures (Fig 2), with independent world corroboration from the fairness textbook and the AOM report on managerial judgment. The claim that a better model alone gains nothing is single-source (Fig 11) with world corroboration from NIST's socio-technical finding. The human-anchor immovability strain is live, not triangulated away.

## WORLD (secondary sources read)

World sources corroborate only and never overrule. Overlap with the framework author is declared.

- **Government standards / AI governance.** NIST, AI Risk Management Framework overview (nist.gov, 2023, revised 2026): "intended for voluntary use and to improve the ability to incorporate trustworthiness considerations into the design, development, use, and evaluation of AI products, services, and systems." Predicts a process that keeps trustworthiness checkable through evaluation; corroborates the ground-and-channel framing. Overlap: low, independent institution.
- **Government research / bias.** NIST, "There's More to AI Bias Than Biased Data" (nist.gov, 2022): "Context is everything" and "AI systems do not operate in isolation. They help people make decisions that directly affect other people's lives." Bias includes human and systemic sources, and NIST recommends a socio-technical approach. Predicts that a model-only fix will not close a biased slot; corroborates Fig 10 and Fig 11. Overlap: low.
- **Machine-learning fairness / normative.** Barocas, Hardt and Narayanan, *Fairness and Machine Learning* (MIT Press / fairmlbook.org, 2023): "The legitimacy question should precede other fairness questions." Predicts that a factual accuracy metric cannot answer the legitimacy part of a decision; corroborates the union split. Overlap: low.
- **Machine-learning fairness / data.** Same authors, chapter "Datasets": "the dataset itself is an integral part of the problem formulation" and "there is no simple answer to the question of what makes data good for what purpose." Predicts that incomplete data are a formulation problem, not just a missing-rows problem; corroborates the channel diagnosis. Overlap: low, same authors as the previous row.
- **Socio-technical conference.** ACM FAccT (facctconference.org, 2026): "Research challenges are not limited to technological solutions regarding potential bias, but include the question of whether decisions should be outsourced to data- and code-driven computing systems." Predicts a separate legitimacy question; corroborates the split. Overlap: low.
- **Decision research society.** Society for Judgment and Decision Making (sjdm.org, 2026): "an interdisciplinary academic organization dedicated to the study of normative, descriptive, and prescriptive theories of judgments and decisions." Predicts three distinct question types rather than one metric; corroborates the split. Overlap: low.
- **Decision research journal.** *Judgment and Decision Making* (Cambridge University Press, 2026): "The study of judgment and decision making (JDM) concerns normative, descriptive, and prescriptive analysis of human judgments and decisions." Predicts that the fact/value distinction is a real domain boundary; corroborates Fig 2 :37-38. Overlap: low.
- **Decision sciences.** Decision Sciences Institute (decisionsciences.org, 2026): "Decision Sciences is the study of managerial decision making, using state-of-the-art data driven and behavioral approaches to solve real world problems in both the private and public sectors." Predicts that data-driven and behavioral frames are both legitimate objects of study; corroborates a two-frame census. Overlap: low.
- **Organizational behavior.** Academy of Management news report on a University of Bath study in *Academy of Management Review* (aom.org, 2026-09-28): "over-reliance on the technology may erode managers' ability to build moral insights, contextual understanding and know-how to do get a job done." Predicts that if the manager's frame is generated by the model's frame, their overlap rises and the surplus vanishes; corroborates Fig 8 :29. Overlap: low.
- **Human-computer interaction.** ACM CHI 2026 (chi2026.acm.org): "the leading international conference on Human-Computer Interaction." Public author tracks include work on human-facing AI decision support. Predicts a venue where the two-frame claim can be checked; corroborates only distribution, not the verdict. Overlap: low.
- **Framework author / validation.** Isaiah N, "The Recursive Self-Improvement Trap" (adventuresinml Substack, 2026): "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." Predicts that a prestigious model or manager cannot settle a slot; corroborates Fig 2. Overlap: high, same author as the figures.
- **Framework author / shape.** Isaiah N, "The Library of Babel: Locating the Book of Books" (adventuresinml Substack, 2026): "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." Predicts a shape, not a ratio; corroborates Fig 9 :32. Overlap: high.
- **Framework author / tacit knowledge.** Isaiah N, "Decoding Tacit Knowledge" (adventuresinml Substack, 2026): "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." Predicts residual-first outreach; corroborates Fig 10 :52. Overlap: high.
- **Framework author / source discrimination.** Isaiah N, "The Hard Problem is About Source" (adventuresinml Substack, 2026): "If several paths create the same behavior, then behavior is a projection with lossy information." Predicts that a blended score cannot reveal which frame produced it; corroborates the provenance requirement. Overlap: high.

No world source conflicts with the figure verdict, so the conflict rule was not triggered. The nine low-overlap sources and the five framework-author essays are kept separate in `10_source_ledger.csv`; agreement within the author pool is one witness, not two.

## VERDICT (from the figures)

The scalar-balance framing fails; the shape survives. A company decision is a union of a factual prediction, a people-facing value question and a legitimacy question, each with its own anchor. The ground is what actually happened, which neither frame can move. The model and the human must range against it separately with residuals per slot; averaging them produces a convention, not a verdict. Human judgment is the anchor only for constitutively people questions and must then be elicited independently of the model; on factual questions it is a fallible instrument whose surplus depends on low overlap with the model's evidence. Incomplete or biased data are channel decay, repaired by sharpening an instrument already returning something and by changing the habitat where needed. This is a `general` shape with `specified` per-domain predictions, ungrounded, candidate.

- **cost if wrong:** a bad decision on a live slot, plus the avoidable cost of spending the independence of outside reviewers by sending a framework instead of a residual. Fig 2 :42 puts a price on that independence. The cost is bounded and locatable because the packet states which slot failed and which refuter would fire; it is not an invisible reputational error.
- **undoable:** yes. The balance ratio, the unexamined human override and the unprovenanced import are removable without changing the derivation. `07_the_tether_answer.md` and `08_expert_verification_packet.md` already remove them. A decision can be revisited when the ground reading arrives; no primitive has to be withdrawn.
- **reversed by:** a ground reading, not agreement. An experimental holdout or field audit that closes the persistent slot residual; a provenance record showing which frame produced which atom and which paid; an independent pre-model elicitation of the people-facing anchor that does not move; a demonstration that a single global ratio closes every per-slot residual; or a model-only improvement that changes contact in an unchanged habitat. The first two would settle a slot; the last three would reverse the shape claim. Until one fires, the verdict stands as `candidate`, and any slot without a nameable anchor stands as `gap`.

## Sources

- [Figures README (canonical local copy)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [The figures, as text with line numbers](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [THE FORMULA](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [THE SEAT MAP Field Guide, amended](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_SEAT_MAP_Field_Guide_amended.md)
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [There's More to AI Bias Than Biased Data, NIST](https://www.nist.gov/news-events/news/2022/03/theres-more-ai-bias-biased-data-nist-report-highlights)
- [NIST Seeks Comments on Draft AI RMF, Offers Guidance on AI Bias](https://www.nist.gov/news-events/news/2022/03/nist-seeks-comments-draft-ai-risk-management-framework-offers-guidance-ai)
- [Fairness and Machine Learning: Limitations and Opportunities](https://www.fairmlbook.org/)
- [When is automated decision making legitimate?](https://www.fairmlbook.org/legitimacy.html)
- [Datasets, from Fairness and Machine Learning](https://www.fairmlbook.org/datasets.html)
- [ACM FAccT Conference](https://facctconference.org/)
- [Society for Judgment and Decision Making](https://sjdm.org/)
- [Judgment and Decision Making journal, Cambridge](https://www.cambridge.org/core/journals/judgment-and-decision-making)
- [Decision Sciences Institute](https://decisionsciences.org/)
- [Academy of Management](https://www.aom.org/)
- [AI Could Undermine Managers' Judgment Unless Used Carefully, Study Warns, AOM](https://www.aom.org/news/phys-org-ai-could-undermine-managers-judgment-unless-used-carefully-study-warns/)
- [ACM CHI 2026](https://chi2026.acm.org/)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [The Library of Babel: Locating the Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [Decoding Tacit Knowledge](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [How a Society of Agents Would Work](https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work)
- [They're Scanning Books When They Should Be Studying Nature](https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should)
- [How Intelligence Actually Works](https://adventuresinml.substack.com/p/how-intelligence-actually-works)
- [Arrival of the Fittest: The Tether Architecture](https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether)
