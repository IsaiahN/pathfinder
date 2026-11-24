# WATSON answer: what role do goals and needs play in determining which information is useful?

**Mode: `general` on the structural role, `specified` on the per-slot routing prediction, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This WATSON run synthesizes material already in `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the question it reports on. No decision outcome was measured.

## QUESTION

Decide, in effect terms, what the Tether says assigns usefulness to an item of information. Option A: usefulness is carried by the item, so the same item is useful to every recipient and the system may score itself with a quantity it also produces. Option B: usefulness is a relation between an item and a live residual, where a goal or need sets the comparison and the subtraction that make a slot live. What each leads to: A cannot explain why the same item is noise to another system and it makes the score frame-internal; B predicts that the same item changes valence when the residual changes, that a global average loses the routing, and that an unbound goal can misdirect the check. The sought-for shape was bound before the run as `USEFUL(i | R, goal)`.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain giving actors / currency / anchor, partition or union, and order by dependency.

- **R (the residual).** The miss between what the system predicted and what happened, indexed per object slot. Arity: one slot at a time (Fig 1 :19). Symmetry: broken per slot, so item valence is not invariant under swapping slots (Fig 1 :22). Scale: per object, not per step or global (Fig 1 :13). Direction: R is the aim as well as the error signal, so it selects the target (Symbols table :38-40).
- **Domain 1, agent perception loop.** Actors: object slots, agent, ground. Currency: per-slot residual, priced in description and actions. Anchor: Fig 1 :23 "The ground enters as the only metric." Partition: which slot is live.
- **Domain 2, composition grammar.** Actors: atoms and the eight operators. Currency: bits under minimum description length. Anchor: the six separating tests plus the ground for settlement. Partition boundary: what a vocabulary can state at all.
- **Domain 3, habitat and valence.** Actors: candidate items as habitat actors, conditions, relations. Currency: contact and cascade. Anchor: the ground; Fig 11 :49 fixes valence to R. Compound with its own loop because contact cascades.
- **Domain 4, search and frame selection.** Actors: frames A and B, the question. Currency: overlap and independence. Anchor: the ground, never agreement. Union: residual first, frame second.
- **Domain 5, direction and preference.** Actors: frame plus the sought shape. Currency: residual accrual, or its absence. Anchor: the ground, reached only by binding the shape as a term. Second-order loop over domains 1 to 4 because the mechanism checks cannot see the direction of the question.
- **Order by dependency.** Domain 2 makes the goal statable, then domain 1 measures R per slot, then domain 3 assigns valence, then domain 4 uses R to pick frames, then domain 5 checks direction. Fig 3 :20 "The chain is ordered by dependency, not by importance."

Strain test applied: the apparent conflict between Fig 1's "R is the aim" and Fig 5's "a preference is invisible" was resolved by re-census. Fig 1 governs the bound per-slot residual inside the loop; Fig 5 governs the unbound direction of the question. Different objects, so no strain remains.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs. Verdicts are kept per domain and never averaged.

- Domain 1, Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries." -> usefulness is a relation to a residual, not an item property. **Triangulated** with Fig 1 :15 "where to look: broken vs novel" (agent loop, different anchor).
- Domain 3, Fig 11 :50-51 "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds. No standing list of good actors survives a change of residual." -> option A is refused; no standing useful-item list survives a goal change. **Single-source** for this exact sentence (Fig 11), corroborated relationally by domain 1.
- Domain 2, Fig 12 :112 "A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond." -> goals and needs are bond compositions over held atoms. **Triangulated** with Fig 3 :10 "it can say what would count as progress here, in its own terms" (dependency chain, distinct figure).
- Domain 2, Operators table :52 "a goal is a comparison, which is why a vocabulary without it cannot state one" and :46 "progress is a subtraction, which is why a vocabulary without it cannot say how far along it is" -> the specific bond assignment. **Single-source** as operator definition (same evidence pool as Fig 12).
- Domain 1, Fig 1 :19 "The residual is indexed by object slot, not aggregated." and Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." -> routing is per slot; a global average loses the signal. **Triangulated** with Fig 9 :26 "R's own predicates name the habitat that holds φ" (search domain, distinct anchor).
- Domain 1, Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." -> coverage, compression, predicates minted and credibility accrued cannot settle usefulness. **Single-source** in the figures; externally corroborated by SEP Information.
- Domain 4, Fig 8 :53 "Residual first, frame second." and Fig 7 :40 "The room is summoned by the residual rather than composed." -> the goal or need selects the frame and habitat, not the reverse. **Triangulated** across two distinct figures.
- Domain 5, Fig 5 :62 "holds that shape as a PREFERENCE rather than as a term" and Fig 5 :66 "Then the preference is refusable by the same test as everything else." -> an unbound goal is invisible to the check; bind it before the run. **Triangulated** with Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."
- Verdict discipline, Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" and Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." -> this simulated second seat and the outside witnesses are not the ground. Keep stage 1 free of the source.

## WORLD (secondary, each source read)

World sources are corroboration only. They never decide. Overlap is declared rather than hidden.

- **Cognitive pragmatics.** Author/venue/year: Sperber and Wilson, summarized in Wikipedia, *Relevance theory*, accessed 2026-11-23. Quote: "Relevance is a comparative property: the more positive cognitive effects and the less processing effort, the more relevant the utterance." Also: a positive cognitive effect "contributes positively to the fulfilment of the individual's cognitive functions and goals." Prediction: usefulness is a comparative relation to a recipient's goals and effort, not a carried property. **Corroborates** domain 1 and domain 3. Overlap with the framework: none.
- **Decision theory and information economics.** Author/venue/year: Wikipedia, *Value of information*, accessed 2026-11-23 (citing Howard 1966). Quote: "Value of information (VOI or VoI) is the amount a decision maker would be willing to pay for information prior to making a decision." Prediction: the same item has different value in different decision situations, and value cannot be negative because the item can be ignored. **Corroborates** domain 3. Overlap: none.
- **Information science and retrieval.** Author/venue/year: Wikipedia, *Relevance (information retrieval)*, accessed 2026-11-23. Quote: "relevance denotes how well a retrieved document or set of documents meets the information need of the user". Prediction: relevance is defined against a need, and maximal marginal relevance scores an item by the new information it brings given previous results, which has the subtraction shape. **Corroborates** domain 2 and domain 1. Overlap: none.
- **Behavioural ecology.** Author/venue/year: Wikipedia, *Optimal foraging theory*, accessed 2026-11-23. Quote: "The goals and currencies of humans can often change due to behavioral flexibility." Prediction: what counts as a profitable item depends on the forager's hypothesis about its currency and constraints. **Corroborates** domain 3, with a strain: its currency in net energy is not a figure primitive, so only the effect transfers. Overlap: none.
- **Cognitive psychology and neuroscience.** Author/venue/year: Wikipedia, *Attention*, accessed 2026-11-23. Quote: "Endogenous orienting is the intentional allocation of attention to a location or object based on goals or instructions." Prediction: goal-directed selection is a distinct mechanism from stimulus-driven selection. **Corroborates** domain 1. Overlap: none.
- **Philosophy of information.** Author/venue/year: Stanford Encyclopedia of Philosophy, *Information*, first published 2012, substantive revision 2023, accessed 2026-11-23. Quote: "Shannon information is the best known quantitative definition of information but it is a rather weak concept that does not capture the notion of disorder that intuitively is essential for the thermodynamic concept of entropy". Prediction: entropy alone cannot settle usefulness. **Corroborates** domain 1's disqualification of frame-internal scores. Overlap: none.
- **Metatheory, Library of Babel.** Author/venue/year: Isaiah N, *The Library of Babel*, Substack, 2026-10-02, accessed 2026-11-23. Quote: "The problem you have determines what makes a book relevant to you or not." Prediction: the question, not the book, fixes relevance. **Corroborates** the whole verdict. Overlap: high, framework author.
- **Metatheory, Recursive Self-Improvement Trap.** Author/venue/year: Isaiah N, Substack, 2026-11-19, accessed 2026-11-23. Quote: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." Prediction: agreement and fame cannot settle usefulness. **Corroborates** the verdict discipline. Overlap: high.
- **Metatheory, Hard Problem is About Source.** Author/venue/year: Isaiah N, Substack, 2026-08-28, accessed 2026-11-23. Quote: "If several paths create the same behavior, then behavior is a projection with lossy information". Prediction: attending to an item is a reading, not a source; a discriminating instrument is owed. **Corroborates** the honest stop. Overlap: high.
- **Metatheory, How Intelligence Actually Works.** Author/venue/year: Isaiah N, Substack, 2026-09-16, accessed 2026-11-23. Quote: "indiscernibility is not identity." Prediction: the relational shape is not the specific judgment. **Corroborates** the shape-not-a-name limit. Overlap: high.
- **Metatheory, Decoding Tacit Knowledge.** Author/venue/year: Isaiah N, Substack, 2026-11-10, accessed 2026-11-23. Quote: "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." Prediction: state the refuter before the theory. **Corroborates** the outreach order. Overlap: high.
- **Metatheory, How a Society of Agents Would Work.** Author/venue/year: Isaiah N, Substack, 2026-10-22, accessed 2026-11-23. Quote: "A shared store only helps if what rises in it is what actually works." Prediction: group agreement is not the verdict; use the success rate per kind of situation, not an average. **Corroborates** domain 1's per-slot rule. Overlap: high.
- **Metatheory, They're Scanning Books.** Author/venue/year: Isaiah N, Substack, 2026-09-06, accessed 2026-11-23. Quote: "A minimum viable set of six terms is a human's careful guess at reality's compression axes; another sensorium's minimum set need not be those six." Prediction: the relational claim is a visible choice, not a neutral fact about all systems. **Corroborates** the honest stop. Overlap: high.
- **Metatheory, Arrival of the Fittest.** Author/venue/year: Isaiah N, Substack, 2026-08-19, accessed 2026-11-23. Quote: "if the solutions presented were not contrived to fit the formula." Prediction: a simulated derivation must declare itself and write its refuter first. **Corroborates** the simulated status. Overlap: high.

No world source conflicts with the figure verdict; the conflict rule was not triggered. The six non-framework sources are genuinely low-overlap and constitute a weak but real corroboration. The eight framework essays share an author and an evidence pool with the figures, so their agreement is one pool talking.

## VERDICT (from the figures)

Usefulness is valence relative to a live residual. Goals and needs are bond compositions, a comparison that states the target and a subtraction that measures the distance still to go, and through those they decide which object slot carries positive residual and which information can reduce it. Per-slot routing survives; a global average and a frame-internal score do not. The same item changes valence when the residual changes. A goal selects when bound as a testable term; unbound as a preference it steers the search without being checkable. The framework returns the shape of a useful item, not the item. This is a `general` structural result with `specified` per-slot predictions, ungrounded and therefore still a candidate.

- **cost if wrong:** bounded and locatable. The packet states modes, refuters and provenance before the conclusion, so an error is findable rather than invisible. The real cost is spending an outside checker's independence by sending a conclusion instead of a residual and a refuter (Fig 2 :42 "Buy independence in proportion to the cost of being wrong."). That cost is avoidable.
- **undoable:** yes. If a falsifier fires, the corresponding finding is withdrawn without touching the others. The verdicts are per domain and were never averaged, so one domain can fall while the rest stand. Nothing has to be deleted from the record: Fig 6's amendment says what is recorded only grows and reach falls by addition.
- **reversed by:** a ground reading, not agreement. A per-slot perturbation showing attention follows the live slot would support it; a global average that routes better, a goal expressible with symmetric bonds alone, or a frame scoring itself with a quantity it produces and settling a decision at the ground would reverse it. No amount of endorsement among shared-pool frames reverses anything (Fig 2 :40).

## Sources

- [The figures, as text with line numbers (local: FRAMEWORK/reference/03-FIGURES_TEXT.md)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [WATSON 60, the figures as metalaws](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\60_FIGURES_AS_METALAWS.md)
- [THE FORMULA](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [The SEAT MAP Field Guide, amended](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_SEAT_MAP_Field_Guide_amended.md)
- [Figures folder, branch general-agent](https://github.com/IsaiahN/tether/tree/general-agent/figures)
- [Relevance theory](https://en.wikipedia.org/wiki/Relevance_theory)
- [Value of information](https://en.wikipedia.org/wiki/Value_of_information)
- [Relevance (information retrieval)](https://en.wikipedia.org/wiki/Relevance_(information_retrieval))
- [Optimal foraging theory](https://en.wikipedia.org/wiki/Optimal_foraging_theory)
- [Attention](https://en.wikipedia.org/wiki/Attention)
- [Information, Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/entries/information/)
- [The Library of Babel](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [How Intelligence Actually Works](https://adventuresinml.substack.com/p/how-intelligence-actually-works)
- [Decoding Tacit Knowledge](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [How a Society of Agents Would Work](https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work)
- [They're Scanning Books When They Should Be Studying Nature](https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should)
- [Arrival of the Fittest: The Tether Architecture](https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether)
