# WATSON answer: when does prior knowledge improve inference, and when does it lock a learner in?

**Mode: `specified`, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This WATSON run synthesizes material already in `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the claim it reports on. No ablation was run.

## QUESTION

Decide, in effect terms, what the figures say about prior knowledge in inference. Option A: the effect scales with the amount of prior, so a critical weighting `w*` separates help from harm. Option B: the effect is decided by the prior's relations, to what crossed the membrane, to refusability, to a non-updating ground, and to the independence of the frames that check it, so the same prior can help on one slot and lock on another and the discriminator is a shape rather than a magnitude. What each leads to: A sends a number the figures do not provide and hides the live per-slot signal inside an average; B sends a checkable shape, written refuters, per-slot tests, and an honest `gap` for the number.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor, partition or union, and order by dependency.

- **R (the residual).** The gap between the prediction formed from a belief `b` mixing private history and inherited prior through `w`, and the observation `o'`: `R = |Γ(b,a) − o'|`. Arity: one belief, two sources, many slots. Symmetry: the error is directed, and the prior is not a symmetric partner of the ground because the anchor must not update (Fig 2 :33). Scale: the prior crosses a membrane between frames, so it can be a first-order term or a second-order object, since `w` is learnable. Fig 9 names the question a union compound, not one hard question: a case in two conditions is not a harder case of either. Verdicts are per slot.
- **Domain 1, the learner's inference loop.** Actors: `Γ`, `b`, `w`, `a`, `o'`, `R_s`, candidate term `φ`, refusal `¬`. Currency: residual shrinkage, minimum description length in bits, and actions spent settling. Anchor: the ground, the only metric (Fig 1 :23). Question: is the prior a bound refusable term or an invisible preference?
- **Domain 2, the membrane.** Actors: source frame, target learner, the membrane, method versus recording, generator versus replay. Currency: whether what crosses is reapplicable. Anchor: the round-trip gap `R_T` (Fig 4 :30). Dependency: upstream of Domain 1, because what kind of thing the prior is decides how the loop can treat it.
- **Domain 3, frame independence.** Actors: frames or rooms, evidence pools, the anchor. Currency: independence, how little frames draw on shared evidence. Anchor: the ground, never agreement (Fig 2 :35, Fig 7 :35). Question: does shared prior make agreement evidence?
- **Order by dependency.** Bind the sought-for shape, refuse before mint, describe the residual before choosing a frame, import with gates, settle against the ground. Fig 3 :20: *"The chain is ordered by dependency, not by importance."*

Strain test applied: Fig 2 :33 governs the anchor, not the existence of priors. An earlier reading that made it forbid priors altogether was a misidentified domain and was re-censused (see `01_figure_grounded_audit.md` section 5). After re-census, one strain remains named: whether ⋛'s "two quantities" can be read as prior reach and ground pressure at a given level needs an instrument, not an argument.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs. Verdicts are per domain and are not averaged.

**Domain 1, single-source for the invisible-preference mechanism, triangulated with the Formula "Direction" paragraph (low overlap).**
- Fig 5 :62 "A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term. It is not bound, it predicts nothing, and it accrues no residual, so nothing here can see it." -> a prior held as an expected answer-shape cannot be corrected by the loop.
- Fig 5 :58 "a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at, which is the same shrinking test the selector already runs, read with the opposite sign." -> the selector already ranks which prior to refuse.
- Fig 6 :42 "What is recorded only grows. What is reachable is derived, and it can fall. A refutation adds a term that refuses; it removes nothing, and the reach falls because something was added rather than because anything was deleted." -> correction adds a refusal; it does not delete the prior.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." -> the lock-in signal is per slot.

**Domain 2, triangulated (Fig 4 membrane direction and Formula step 6, low overlap).**
- Fig 4 :22 "Only methods cross up. Only head starts come down." -> a method helps; a replay locks.
- Fig 4 :25 "A recording carried upward looks like knowledge and is a description of one occasion. Replayed downward, it produces a system that repeats a past success and cannot produce a new one." -> the lock-in is a one-occasion description replayed.
- Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." -> the condensation carries a round-trip gap R_T that must be measured.

**Domain 3, triangulated (Fig 2 anchor, Fig 7 room chain, Fig 8 overlap, all low overlap with each other).**
- Fig 2 :33 "The anchor must not update." and Fig 2 :34 "If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices." -> a prior that moves the ground produces invisible coherent drift.
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" -> shared-prior agreement is not evidence.
- Fig 7 :12 "same closure, handed along; agreement compounds, evidence does not" -> a field sharing a prior is one long room.
- Fig 8 :32 "no search, however long, adds an atom" -> more reasoning inside the prior's closure cannot correct it.
- Fig 2 :42 "Buy independence in proportion to the cost of being wrong." -> independence is purchased, not assumed.

**Cross-domain shape, gap for the number.**
- Fig 9 :32 "you get a kind of thing, never the answer itself" -> a comparison shape for the tipping point, not `w*`.
- Fig 13 :134 "Unreachable is a verdict here, not a silence," -> the numeric threshold is a `gap`, not a failure.

Triangulation summary: help-versus-lock is triangulated across Fig 4 and Formula step 6; the invisible-preference mechanism is single-source in Fig 5 with the Formula "Direction" paragraph as a same-pool corroboration; the anchor and independence verdict is triangulated across Fig 2, Fig 7 and Fig 8; the numeric threshold is a `gap`. The operand type of ⋛ at the tipping point is strained, not smoothed: the Operators table defines it as a threshold relation between two quantities, and whether prior reach and ground pressure are two quantities at a given level needs an instrument.

## WORLD (secondary sources read, corroboration only)

Each source is independent of the framework's author. World sources never decide the Tether verdict; a conflict would send the census back to the drawing board. None conflicts here.

- **Human cognition / problem solving.** Marcel Binz and Eric Schulz, "Reconstructing the Einstellung Effect," *Computational Brain & Behavior* 6, 526-542, 2023 (published online 2022), https://link.springer.com/article/10.1007/s42113-022-00161-2. Quote: "The effect occurs when a repeated solution to old problems is applied to a new problem even though a more appropriate response is available." Predicts that a once-successful method is replayed on a new problem and a simpler solution is missed. Corroborates Fig 4 :25 and F5. Overlap: low with the framework and with the other sources.
- **Engineering / machine learning.** Karl Weiss, Taghi M. Khoshgoftaar and DingDing Wang, "A survey of transfer learning," *Journal of Big Data* 3, article 9, 2016, https://journalofbigdata.springeropen.com/articles/10.1186/s40537-016-0043-6. Quote: "Negative transfer, with regards to transfer learning, occurs when the information learned from a source domain has a detrimental effect on a target learner." Predicts help when source and target are related and harm when they are not, so the outcome is conditional on what crosses. Corroborates F5 and F1. Overlap: low.
- **Animal behaviour.** Harry F. Harlow, "The formation of learning sets," *Psychological Review* 56(1), 51-65, 1949, https://psycnet.apa.org/doiLanding?doi=10.1037%2Fh0062474. Quote: "both children and monkeys showed a progressive acquisition of set for the solution of a given type of problem or alternation of two types." Predicts that prior learning transfers as a procedure that makes new problems nearly errorless after one trial. Corroborates Fig 4 :22 (generator crosses). Overlap: low with the framework, moderate with Medin below (same phenomenon, different author and venue).
- **Animal behaviour / learning review.** Douglas L. Medin, "Role of reinforcement in discrimination learning set in monkeys," *Psychological Bulletin* 77(5), 1972, https://groups.psych.northwestern.edu/medin/documents/Medin1972PsychBull.pdf. Quote: "The monkeys, so to speak, 'learn how to learn.'" Predicts a method, not a stored answer, and reports that improvement is not due to a common solution across problems. Corroborates the generator reading. Overlap: moderate with Harlow (one evidence pool for the learning-set phenomenon, so these two count as one witness for that phenomenon).
- **Business / organizational learning.** Carsten Nielsen, "Exploration and Exploitation in Organizational Learning: A Critical Application of the 4I Model," *British Journal of Management*, 2018, https://onlinelibrary.wiley.com/doi/abs/10.1111/1467-8551.12324. Quote: "organizations that focus on exploitation while not paying appropriate attention to exploration will suffer from the competency trap, finding themselves in a suboptimal equilibrium of old certainties (March, 1991)." Predicts short-run gain followed by long-run lock-in. Corroborates Fig 7 :12 and F7. Overlap: low.

**Framework essays (high overlap, weak corroboration).** Isaiah N, "Decoding Tacit Knowledge: Why Context, Subtext, and Pretext Matter," adventuresinml Substack, 2026, https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context: "Two people who only check against each other drift, and they drift together, so neither notices." Predicts the shared-pretext lock. It corroborates Fig 2 :34, but it shares an author with the figures, so its agreement is one evidence pool talking. The same applies to the other five essays read for `05_what_shape_means.md`.

Effective witness count: four independent fields, of which the two animal-behaviour sources are one pool for the learning-set phenomenon. Agreement across them is corroboration, not a verdict. No source was allowed to flip a verdict.

## VERDICT (from the figures)

Prior knowledge improves inference when it crosses as a reapplicable method, is bound as a refusable term with a live per-slot residual, ranges against a ground that does not update on it, and is checked by frames whose closures differ. It locks a learner into a mistaken model when it is a replayed recording, an invisible preference that accrues no residual, a frame that has captured its own ground, a signal averaged into a global score, or a claim checked only by a pool that already shares it. Correction adds a refusal and removes the prior's standing to be composed over; it does not delete the record. The numeric tipping point is a `gap`. This is a `specified`, ungrounded result, and the four independent literatures corroborate its shape without settling it.

- **cost if wrong:** bounded and locatable. The packet is mode-labelled, states its refuters before the conclusion, and records its lineage, so an error is findable rather than invisible. The real cost is a researcher spending their independence on an ablation designed around the wrong discriminator. Fig 2 :42 prices that: "Buy independence in proportion to the cost of being wrong." That cost is avoidable by leading with the shape and its refuter, and by asking what would count as a failure before showing the theory.
- **undoable:** yes. The claim is a set of relations, not a new primitive; it can be narrowed slot by slot without withdrawing the domain census. A sent packet can be superseded by a corrected one. A mistaken prior is not deleted, so no part of the record has to be erased.
- **reversed by:** a ground reading, not agreement. An ablation with a fixed anchor showing that per-case improvement is predicted by a global residual alone would break the slot claim; a learner that improves while holding an unrefusable preference would break F1; a prior allowed to move the ground that still self-corrects would break F2; a recording that succeeds on a novel case would break F5; an atom derived from inside the prior's closure would break F3. A figure re-census that derives `w*` from the figure set alone would clear the `gap`. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [Figures text extract with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [The Formula (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [Reconstructing the Einstellung Effect](https://link.springer.com/article/10.1007/s42113-022-00161-2)
- [A survey of transfer learning](https://journalofbigdata.springeropen.com/articles/10.1186/s40537-016-0043-6)
- [The formation of learning sets](https://psycnet.apa.org/doiLanding?doi=10.1037%2Fh0062474)
- [Role of reinforcement in discrimination learning set in monkeys](https://groups.psych.northwestern.edu/medin/documents/Medin1972PsychBull.pdf)
- [Exploration and Exploitation in Organizational Learning: A Critical Application of the 4I Model](https://onlinelibrary.wiley.com/doi/abs/10.1111/1467-8551.12324)
- [Decoding Tacit Knowledge: Why Context, Subtext, and Pretext Matter](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [They're Scanning Books When They Should Be Studying Nature](https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should)
- [How Intelligence Actually Works](https://adventuresinml.substack.com/p/how-intelligence-actually-works)
- Folder material synthesized: `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, `08_expert_verification_packet.md`
