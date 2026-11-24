# WATSON answer: how context and background knowledge change the information conveyed by the same signal

**Mode: `general` on the structural shape, `specified` on the predictions, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This run synthesizes material already in `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*: LLM output is an approximate simulation and *"the truly testable output would need to be derived from the real architecture or working the formula yourself"*) it cannot settle the question it reports on. No measurement was taken.

## QUESTION

Decide, in effect terms, what changes the information obtained from a fixed token sequence when the receiver's context and background knowledge differ. Option A: information is in the signal, so changing the receiver leaves it unchanged. Option B: information is a per-slot residual relative to a receiving frame, carried by a bond the frame supplies, with shared context a convention and the ground the only arbiter of truth. What each leads to: A treats disagreement as noise and shared bit counts as sufficient; B predicts different per-slot residuals under different libraries and beliefs, a bond-carried difference invisible in the token list, coordination without evidence, and a ground that must range against each frame separately.

## DOMAIN CENSUS

R by arity, symmetry, scale; one line per domain with actors, currency, anchor; partition or union; order by dependency.

- **R (the residual).** The difference in information obtained from the same `o′`. Arity three: signal, receiving frame, ground. Symmetry: ordered, because the ground updates the frame and not the reverse (Fig 2 :33, *"The anchor must not update."*). Scale: first order inside one receiver, second order at the union of two receivers. Fig 1 :19 bars aggregation.
- **D1, the code or syntactic channel.** Actors: source, tokens, channel, receiver. Currency: bits and surprisal. Anchor: none internal, since the measure is frame-internal (Fig 1 :27). Nameable anchor absent, so this domain is retained only as a boundary, not as a verdict domain.
- **D2, the receiving library and belief.** Actors: `Γ`, `b`, `w`, slots `s`. Currency: residual `R = |Γ(b,a) − o′|` per slot. Anchor: the ground (Fig 2 :29-30).
- **D3, the bond or arrangement.** Actors: token atoms, seven bonds, negation. Currency: description length and arrangement. Anchor: behaviour, the difference the arrangement makes (Fig 12 :117).
- **D4, convention versus ground.** Actors: two frames, shared meaning, the ground. Currency: agreement versus contact. Anchor: the ground, never agreement (Fig 2 :35).
- **D5, verification across frames.** Actors: two receiver frames, a witness frame. Currency: independence. Anchor: the ground; evidence bearing only on the maker is inadmissible (Fig 9 :51).
- **Partition or union.** A union compound with overlapping conditions (Fig 9 :54-56), not a partition. The same signal sits in D1 and D3; the same receiver sits in D2 and D4. Each domain gets its own loop and verdict.
- **Order by dependency (Fig 3).** Perceive the signal per slot; have vocabulary to bind it; state what counts as progress; plan; learn and carry. Fig 3 :25-27 names the vocabulary link as the one that usually breaks and has no instrument.

Strain test applied: Fig 12 governs the bond and its price; Fig 13 governs the minimum set and allows two chains to compose the same substance. Different quantities, so no strain after re-census. One genuine gap remains: which bond a given context supplies.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs. Verdict per domain, never averaged.

**D1 boundary, no verdict domain.** Fig 1 :27 *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* The code measure cannot score the interpretation question. D1 is a boundary, not a witness, so no triangulated or single-source label applies.

**D2 receiving library and belief, triangulated.** Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."* Symbols table :20-21 *"Formed from its own history and from what it inherited, mixed by w. Not the observation."* Symbols table :24-26 *"Two frames with identical architecture diverge because their histories and their w diverge."* Fig 6 :22 *"NOVEL means novel relative to atoms, not to the world."* Fig 5 :30 *"the machinery worked; the answer was already known."* Low overlap between the per-slot loop, the notation, and the reach geometry, so the agreement is weak but not circular inside the framework.

**D3 bond or arrangement, triangulated.** Fig 12 :5 *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."* Fig 12 :94 *"The arrangement is the substance."* Fig 12 :96-97 *"Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."* Fig 13 :124-125 *"the same ingredients under a different bond are a different substance."* Fig 12 :117 *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* This is the strongest governing line for the exact question. The identity of the bond a particular context supplies is **gap**, not silently filled: Fig 12 defines the bonds and selects none.

**D4 convention versus ground, triangulated.** Fig 10 :49 *"Declaring a meaning does not ground it."* Fig 10 :47 *"a convention that decides an outcome has stopped being one."* Fig 2 :41 *"agreement about a shared meaning is the product, not a corruption of it."* Fig 2 :40 *"agreement about the world is worthless when the agreeing frames share an evidence pool."* Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*

**D5 verification across frames, triangulated with one single-source tail.** Fig 8 :45 *"Two frames together reach what neither reaches alone."* Fig 8 :50-52 *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them."* Fig 8 :53 *"Residual first, frame second."* Fig 9 :27-28 *"describe it before you go looking, or any frame you pick will seem to fit."* Fig 3 :25-26 *"having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."* The vocabulary-link finding is **single-source** (Fig 3 only) and is marked as such.

## WORLD (secondary, each source read)

World sources are corroboration only. Most share an author or an evidence pool with the figures, so overlap is declared rather than hidden.

- **Engineering and mathematics, Shannon via Wikipedia, Information theory (Wikipedia contributors, Wikipedia, 2026, accessed 2026-11-23).** Quote: *"if one transmits 1000 bits (0s and 1s), and the value of each of these bits is known to the receiver (has a specific value with certainty) ahead of transmission, no information is transmitted."* Prediction: even at the syntactic level, receiver knowledge changes the information obtained. Corroborates D2 at the boundary; does not settle semantics. Overlap: independent of the framework but a different domain.
- **Cognitive science, Predictive coding (Wikipedia contributors, Wikipedia, 2026, accessed 2026-11-23).** Quote: *"prior knowledge shapes how sensory information is processed, and precision weighting, which refers to how strongly prior expectations versus new sensory input are taken into account."* Prediction: the same sensory signal with different priors yields different perception, and prediction error is the operative residual. Corroborates D2. Overlap: independent literature, though the framework essay on tacit knowledge cites prediction-adjacent work.
- **Human cognition, Schema (psychology) (Wikipedia contributors, Wikipedia, 2026, accessed 2026-11-23).** Quote: *"Schemata are interrelated and multiple conflicting schemata can be applied to the same information."* Prediction: multiple interpretations of one signal coexist and are selected by history. Corroborates D3. Overlap: independent literature; the framework essay cites Bartlett, the same origin, so treat this as one pool for the Bartlett-specific claim.
- **Philosophy of mind, Symbol grounding problem (Wikipedia contributors, Wikipedia, 2026, accessed 2026-11-23).** Quote: *"According to Harnad, ultimately grounding has to be sensorimotor, to avoid infinite regress."* Prediction: token manipulation alone does not confer meaning. Corroborates D4's *"a declared meaning is not a grounded one."* Overlap: independent source, but the framework essays cite Harnad and Searle, so corroboration is weak on that link.
- **Animal behaviour, Animal communication (Wikipedia contributors, Wikipedia, 2026, accessed 2026-11-23).** Quote: *"Animal communication is the transfer of information from one or a group of non-human animals (sender or senders) to one or more other non-human animals (receiver or receivers) that affects the current or future behavior of the receivers."* Prediction: information is defined by its effect on a receiver, and different receivers respond differently to the same call. Corroborates D2 from a genuinely different pool. Overlap: low.
- **Framework essay, Decoding Tacit Knowledge (Isaiah N, adventuresinml Substack, 2026-11-10, accessed 2026-11-23).** Quote: *"Context, subtext and pretext decide what a message means to you. None of them decides whether it is true. Only the ground does that."* Prediction: the receiver-side three-part structure plus a ground. Corroborates the shape. Overlap: high, same author as the figures, so weak independent weight.
- **Framework essay, The Library of Babel (Isaiah N, adventuresinml Substack, 2026-10-02, accessed 2026-11-23).** Quote: *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* Prediction: stop at a shape, not a mechanism name. Corroborates the gap on bond identity. Overlap: high.
- **Framework essay, The Recursive Self-Improvement Trap (Isaiah N, adventuresinml Substack, 2026-11-19, accessed 2026-11-23).** Quote: *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* Prediction: this derivation cannot validate itself. Corroborates the simulated status. Overlap: high.
- **Framework essay, The Hard Problem is About Source (Isaiah N, adventuresinml Substack, 2026-08-28, accessed 2026-11-23).** Quote: *"An instrument that can’t distinguish these cases demonstrates its own inadequacy."* Prediction: naming a source from a reading is premature without a discriminating instrument. Corroborates the gap. Overlap: high.

No world source conflicts with the figure verdict, so the conflict rule was not triggered. Agreement from the four essays is one evidence pool talking, not four witnesses. The independent-pool sources (Shannon boundary, predictive coding, schema theory, animal behaviour) corroborate the per-slot and receiver-dependence claims but do not decide the bond claim, which remains figure-governed.

## VERDICT (from the figures)

The shape survives; a mechanism name does not. The same signal conveys different information because information is a per-slot residual against a receiving library and belief, and the difference is carried by the bond, which is not recoverable from the tokens. Background knowledge maps to `Γ`, `b`, and `w`; context in the narrow sense is the selector of which part of that history a signal addresses. Shared context is a convention, efficient for coordination and disqualified as evidence. A second frame with a differing closure adds reach from the same signal, provided it is chosen against the residual. The ground alone decides which interpretation was right. Which bond a given context supplies is a `gap`, recorded openly. This is a `general` structural and `specified` predictive result, ungrounded and therefore `candidate`.

- **cost if wrong:** bounded and locatable. The packet states its mode, refuters, and provenance before the conclusion, so an error is findable rather than invisible. The avoidable cost is spending the independence of outside readers by sending the framework before asking for a verdict; Fig 2 :42 prices that as *"Buy independence in proportion to the cost of being wrong."* Leading with the residual and its refuter avoids it.
- **undoable:** yes. The unbound bond identity and the imprecise context mapping are removable without touching the per-slot or convention findings. `06_isomers_and_order.md` already corrects the mapping. Nothing has to be withdrawn as a new primitive, and no measurement has to be un-run.
- **reversed by:** a ground reading, not agreement. An instrument that discriminates two bonds for the same token list would name what context supplies; two frames with different libraries and beliefs producing identical per-slot residuals would falsify D2; agreement among context-sharing frames settling a factual question would collapse Fig 2's anchor into a frame; a reading that uniquely determines its source without an instrument would clear the source gap. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [The figures, as text (local extract)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [WATSON 60: the figures as metalaws](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\60_FIGURES_AS_METALAWS.md)
- [Information theory (Wikipedia)](https://en.wikipedia.org/wiki/Information_theory)
- [Predictive coding (Wikipedia)](https://en.wikipedia.org/wiki/Predictive_coding)
- [Schema (psychology) (Wikipedia)](https://en.wikipedia.org/wiki/Schema_(psychology))
- [Symbol grounding problem (Wikipedia)](https://en.wikipedia.org/wiki/Symbol_grounding_problem)
- [Animal communication (Wikipedia)](https://en.wikipedia.org/wiki/Animal_communication)
- [Decoding Tacit Knowledge: Why Context, Subtext, and Pretext Matter](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [Figures and formula, public repo](https://github.com/IsaiahN/tether/tree/general-agent/figures)
- [Canonical figures README on GitHub](https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md)
