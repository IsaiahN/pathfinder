# WATSON answer: how should models represent changing, heterogeneous agents?

**Mode: `specified` on the four requirements, `general` on the structural shape, `gap` on the identity of the live rule. Not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This WATSON run synthesizes material already in `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the claim it reports on. No model was built, run or measured.

## QUESTION

Decide, in effect terms, what a model must write down when its agents differ and keep changing across time and context. Option A: use one fixed agent type or a representative agent, pool the outputs, and treat a pooled score as the model's result. Option B: index the residual per agent-slot and per step, encode rule, goal and information as typed relations, carry methods rather than recordings across context shifts, re-enumerate important agents per residual, and report the live rule as a `gap`. What each leads to: A loses the live slot signal and cannot identify which rule governs; B preserves the signal, costs more to state, and stops honestly at an instrument limit. The question is a union of D1 (within-agent time change), D2 (between-agent difference), D3 (across-context change) and D4 (the encoding layer), with verdicts kept separate.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor, partition or union, and order by dependency.

- **R (residual).** Arity: at least three operands (an agent, its rule/goal/information, a context or step), indexed by slot and by step. Symmetry: agents are not interchangeable; swapping a rule-follower and a goal-switcher changes outcomes, while two readings of one event at one slot are one report. Scale: the single agent's step loop, the population with a shared library, and the lineage across contexts.
- **D1, the per-agent per-step loop.** Actors: one agent, belief `b`, weighting `w`, action `a`, observation `o'` and residual per slot. Currency: the per-slot residual. Anchor: the ground as the only metric. Verdict: per-slot indexing is mandatory.
- **D2, the population.** Actors: many agents, a shared library, a ranker of what they produce. Currency: methods up, head starts down. Anchor: the ground ranking outputs. Verdict: the signature matters, not the type label.
- **D3, time and context.** Actors: the sequence of rooms and the residual each surfaces. Currency: variation inside, selection between. Anchor: the ground, never agreement. Verdict: carry a method, re-enumerate per residual.
- **D4, the representation.** Actors: atoms, typed bonds and unary negation. Currency: bits and actions, in different units. Anchor: the ground settling a term. Verdict: typed encoding, two currencies held apart, rule identity is a gap.
- **Union, not partition.** D1, D2 and D3 overlap: an information-access change is a time change, a between-agent difference and possibly a new room. Each overlap is a compound with its own loop (Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either.").
- **Order by dependency.** Slot index first, bonds second, goal as comparison third, non-updating ground fourth (Fig 3 :20 "The chain is ordered by dependency, not by importance.").

Strain test applied: the six-term substrate of Fig 13 governs structural roles, not an agent taxonomy. Re-census assigns the bonds of Fig 12 to the encoding. Different objects, so no strain after re-census. One live open item remains: the price of unary negation is open.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs.

- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> D1: pooling is the operation that discards the signal.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." -> D1: a pooled score is not a coarser truth.
- Fig 1 :28 "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look." -> D1: indexing is by agent-slot and step.
- Fig 4 :20 "Only the actors, the currency and the anchor change." -> D2: heterogeneity is a difference of signature, not of a fixed set of rules.
- Fig 12 :46 "A bond is the typed relation between two operands." -> D2 and D4: encode the relation, not the label.
- Fig 12 :112 "A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond." -> D4: rule, goal, information limit, progress and rule replacement are different operator kinds.
- Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." -> D2: agents with the same ingredients and different bonds are different things.
- Fig 4 :25 "A recording carried upward looks like knowledge and is a description of one occasion." -> D3: a rule that worked once is a recording when the context moves.
- Fig 10 :72 "When the question changes, the room should change. A room that stays fixed while the question moves is the failure; the correlation is only its symptom." -> D3: the representation must be re-grounded per context.
- Fig 11 :51 "No standing list of good actors survives a change of residual." -> D3: re-enumerate important agents per residual.
- Fig 11 :39 "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone." -> D3: capability is not a property of the agent schema in isolation.
- Fig 12 :126 "Bits price the description. Actions price finding out whether it holds." -> D4: description cost and ground-check cost do not add.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." -> D4: complexity is a budget filter, not a witness.
- Fig 9 :32 "you get a kind of thing, never the answer itself" -> gap: the framework returns a shape, not a live rule.
- Fig 13 :135 "It cannot say which primitive is missing, because naming it would mean already holding it." -> gap: naming the live rule from behavior would mean already holding the discriminator.
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." -> the verification arrangement: agreement among modelers is not the anchor.
- Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." -> the standing diagnosis: rule-to-slot binding has no instrument.

Triangulation status: D1 is triangulated across Fig 1, the Symbols table and the per-slot requirement in Fig 9's residual description. D2 and D4 (bond mapping) are single-source on the figure side (Fig 12 plus Operators, one evidence pool) with low-overlap world corroboration. D3 is triangulated across Fig 4 and Fig 10 plus Fig 11, with world corroboration from two distinct fields. The two-currency claim is single-source (Fig 12), structurally stated. The `gap` is triangulated across Fig 9, Fig 13 and the source essay. The open price of negation is named, not smoothed.

## WORLD (secondary sources read)

World sources are corroboration only. The four framework essays share the author's pool with the figures and carry no independent witness weight.

- **Canonical usage / metatheory.** Isaiah N, figures README (GitHub and local canonical copy, 2026): "what a missing thing would have to look like (a shape, not a name)". Predicts a shape plus an open slot; corroborates the figure verdict. Overlap: maximum (framework author).
- **Human cognition / validation.** Isaiah N, "The Recursive Self-Improvement Trap" (adventuresinml Substack, 2026): "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." Predicts that this derivation cannot settle its own claim; corroborates its simulated status. Overlap: maximum.
- **Perception / source discrimination.** Isaiah N, "The Hard Problem is About Source" (adventuresinml Substack, 2026): "If several paths create the same behavior, then behavior is a projection with lossy information". Predicts that naming the live rule from behavior is a metamerism error; corroborates the gap. Overlap: maximum.
- **Search / shape.** Isaiah N, "The Library of Babel" (adventuresinml Substack, 2026): "You can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." Predicts a narrowed shape; corroborates. Overlap: maximum.
- **Human cognition / contact.** Isaiah N, "Decoding Tacit Knowledge" (adventuresinml Substack, 2026): "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." Predicts describe-the-residual-first outreach; corroborates Fig 9. Overlap: maximum.
- **Agent-based modeling / documentation and design.** Volker Grimm, Steven F. Railsback, Christian E. Vincenot, Uta Berger and 13 others, "The ODD Protocol for Describing Agent-Based and Other Simulation Models", JASSS 23(2)7, 2020: state variables "may vary among entities of the same type or vary over time". Predicts that a representation must carry per-entity variation and per-time variation; corroborates D1 and D3. Overlap: high within the ABM pool.
- **Agent-based modeling / correlational limits.** Szymon Talaga and Andrzej Nowak, "Homophily as a Process Generating Social Networks", JASSS 23(2)6, 2020: "it is usually very difficult to disentangle these two effects" (selection and influence). Predicts that behavior alone cannot identify the governing process; corroborates the gap. Overlap: high within the ABM pool.
- **Agent-based modeling / field overview.** Wikipedia, "Agent-based model" (2026): "representative agents are replaced by agents with diverse, dynamic, and interdependent behavior". Predicts rejection of the representative agent; corroborates D1. Overlap: high within the ABM pool.
- **Animal behaviour (low overlap).** Wikipedia, "Personality in animals" (2026), summarizing the consensus definition: "individual differences in behaviour that are consistent across time and ecological context". Also the reaction-norm criticism that one can "erroneously determine that variation in behaviour between individuals exists if the subjects have not been examined across a gradient of ecological contexts". Predicts that a single-context snapshot misidentifies a stable rule; corroborates D3 and the gap.
- **Mathematics and AI (low overlap).** Wikipedia, "Partially observable Markov decision process" (2026): "the agent cannot directly observe the underlying state. Instead, it must maintain a sensor model". Also: optimal behavior "may often include (information gathering) actions". Predicts per-slot history indexing and an instrument owed; corroborates D1 and F7.
- **Machine learning and engineering (low overlap).** Wikipedia, "Concept drift" (2026): "concept drift or drift is an evolution of data that invalidates the data model. It happens when the statistical properties of the target variable, which the model is trying to predict, change over time in unforeseen ways." Predicts that a recorded rule decays when context moves; corroborates D3.
- **Human cognition (low overlap).** Wikipedia, "Bounded rationality" (2026), quoting Simon's aim "to replace the global rationality of economic man with a kind of rational behavior that is compatible with the access to information and the computational capacities that are actually possessed by organisms". Predicts that information access is a typed limit, not an omitted parameter; corroborates D4.

No world source conflicts with the figure verdict; the conflict rule was not triggered. The four low-overlap fields corroborate the mechanism shape, not the framework's authority. The ABM sources are one pool, not eight witnesses.

## VERDICT (from the figures)

The shape survives; a modeling language does not. A representation of changing, heterogeneous agents must keep the residual indexed per agent-slot and per step, encode rule, goal and information as typed relations over a shared library, carry a reapplicable method with its purchase conditions across context shifts, re-enumerate important agents per residual, and hold bits and actions in separate columns. Agents with the same ingredients and different bonds are isomers, so an ingredient list is structurally blind to the difference. Which rule is actually live at a slot is a `gap`: an instrument is owed, and no figure line supplies one. Verdicts for D1, D2, D3 and D4 are kept separate and never averaged into one prescription. This is `specified` on the requirements, `general` on the shape, `gap` on rule identity, and ungrounded.

- **cost if wrong:** bounded and locatable. Each requirement has a named refuter, so an error is findable rather than invisible. The real cost is spending the independence of outside checkers by sending a recording of a conclusion instead of a generator with a falsifier. Fig 2 :42 "Buy independence in proportion to the cost of being wrong." That cost is avoidable by leading with the shape and its refuter.
- **undoable:** yes. The four requirements and the gap can be superseded individually as refuters fire, without withdrawing the census. No modeling formalism or primitive has to be committed to, so nothing has to be un-invented. The sent packet can be replaced by a corrected one.
- **reversed by:** a ground reading, not agreement. Seven pre-registered conditions in `01` §4 would each narrow or withdraw a requirement: a pooled representation that preserves every per-slot signal and pays at the ground; opaque type IDs that survive an agent-swap test; a fixed rule set that pays across a pre-registered context shift; a fixed importance list that survives a residual change; a flat bond-free representation that writes routes, thresholds, absences and refutations more cheaply and pays; a dimensionally valid single scalar that predicts both currencies; or an instrument that identifies the live rule from behavior alone. Until one fires, the verdict stands as candidate.

## Sources

- [Figures README, canonical](https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md)
- [Figures text extract with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README (local canonical copy)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [The Library of Babel: Locating the Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [Decoding Tacit Knowledge: Why Context, Subtext and Pretext Matter](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [The ODD Protocol for Describing Agent-Based and Other Simulation Models](https://www.jasss.org/23/2/7.html)
- [Homophily as a Process Generating Social Networks](https://www.jasss.org/23/2/6.html)
- [Agent-based model](https://en.wikipedia.org/wiki/Agent-based_model)
- [Personality in animals](https://en.wikipedia.org/wiki/Personality_in_animals)
- [Partially observable Markov decision process](https://en.wikipedia.org/wiki/Partially_observable_Markov_decision_process)
- [Concept drift](https://en.wikipedia.org/wiki/Concept_drift)
- [Bounded rationality](https://en.wikipedia.org/wiki/Bounded_rationality)
