# Second-seat audit of the REA-0045 solution

**Mode: `specified`, not `grounded`.**

**Honest standing of this document.** This is a simulated second seat. It reads the same evidence pool as the primary derivation in `01_figure_grounded_audit.md`: the same figure text, the same essays, the same direct-field sources, the same question. Fig 2 :40 says "agreement about the world is worthless when the agreeing frames share an evidence pool" and Fig 2 :35 says "Alignment is triangulation, not negotiation. A mirror cannot correct you." A second seat that shares the evidence pool is a mirror with a different name. What follows is therefore a check of **internal consistency only. It is not corroboration, not a second witness, and not a ground reading.** No measurement was taken. This audit cannot settle the claim it audits.

The material audited is the full folder, with special attention to the domain census in `01`, the WATSON shape in `09`, and the provenance ledger in `10`.

## Independent domain census

I redid the census from the residual line alone: "Do large models develop internal representations of objects, people, and events that support reliable reasoning?" (`reasoning.txt` line 56). I wrote this before comparing with the primary census.

- **R (arity / symmetry / scale).** Arity: two conditions, so a **union compound**, not one hard question. Fig 9 :54-58. Symmetry: "representation of" is an identity bond; "supports reliable reasoning" is a production bond. The causal claim is ordered, not symmetric. Scale: internal activations are within-run; reliability is across-run and habitat-level, with a lossy transform between (Fig 4).
- **Domain 1, model-internal structure.** Actors: activations, weights, features, circuits. Currency: probe accuracy, compression, description length. Anchor: none nameable, because the currency is produced by the frame it would score (Fig 1 :27). Not yet a deciding domain.
- **Domain 2, behaviour and ground contact.** Actors: the model acting, objects/people/events as slots, environments. Currency: per-slot residual, verifiable outcome. Anchor: the ground.
- **Domain 3, verification and instruments.** Actors: probes, researchers, expert readers. Currency: agreement versus residual, independence. Anchor: the ground, never agreement.
- **Domain 4, habitat and corpus.** Actors: corpus, selection, world. Currency: contact, cascade. Anchor: the ground that produced the traces.
- **Order by dependency.** Refuse before mint (Formula step 2); describe the residual before choosing a frame (Fig 9 :27-28); settle per slot before composing the route; compose the route before naming the state.

**Comparison with the primary census.** My four domains match the primary's four. The routes differ: I derived the union from Fig 9's union/partition split and the bond distinction from the Operators table, while the primary derived the union from the two-condition structure and the bond distinction from Fig 12. Different starting figures, same domain boundaries. That is low overlap between routes *within* the framework, so the agreement is weakly non-circular methodologically. It is still one evidence pool, so it carries no independent weight about the world.

## Comparison with primary findings

I checked each primary finding against the verbatim figure text and the primary's own corrected files.

| primary finding | my independent check | agreement |
|---|---|---|
| F1 contact decides C2 | Fig 11 :39-40 plus Fig 2 :29; neither says internal structure is irrelevant, only that capability is agent-and-habitat | agree, with the primary's narrowing |
| F2 representation is a borrowed cause-word | Fig 9 :30-31 and Fig 10 :49; "describe the effect rather than the cause" governs the name, not the existence of structure | agree |
| F3 C1 is a `gap`, not a no | Fig 1 :27 disqualifies the currency; Fig 8 :39 forbids turning failed search into absence | agree, `gap` is the right label |
| F4 per slot, not aggregate | Fig 1 :19, :22, :28 | agree |
| F5 instrument inadequacy | Fig 6 :27, :34; Fig 8 :39; corroborated by Hewitt and Liang 2019 | agree |
| F6 state versus route | Fig 12 :111; Operators table ≡ versus ⇒ | agree, structural |
| F8 agreement is not corroboration | Fig 2 :40; Fig 7 :35 | agree |
| F11 no yes/no to the question as written | re-census produces a shape and a `gap`, not a verdict | agree |

No disagreement with the primary. Since we share an evidence pool, that agreement is expected and carries no independent weight.

## Verbatim figure lines checked

I reopened `FRAMEWORK/reference/03-FIGURES_TEXT.md` and checked these lines character by character before relying on them. Each is a primary quote; none is taken from a summary.

- Fig 1 :19 "The residual is indexed by object slot, not aggregated." checked.
- Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." checked. The named examples on :24 and :26 are "coverage, and compression achieved" and "predicates minted, and credibility accrued".
- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." checked; the line continues with a list of examples, so the quotation correctly stops at the full stop.
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." checked.
- Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool" checked; the full line includes the leading clause "disqualifying for a verdict:".
- Fig 2 :42 "Buy independence in proportion to the cost of being wrong." checked.
- Fig 6 :27 "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same." checked.
- Fig 6 :34 "The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve." checked; note the capital "The" and that the line continues onto a new clause after the full stop.
- Fig 7 :35 "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." checked; the SVG uses a typographic apostrophe, normalised here.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." checked.
- Fig 9 :30-31 "your words are borrowed too, so describe the effect rather than the cause" checked across the wrap.
- Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." checked.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." checked.
- Fig 10 :49 "Declaring a meaning does not ground it." checked.
- Fig 11 :39 "capability is a property of agent-and-habitat, never of the agent alone." checked; the full line begins "So the answerable question is not what intelligence is, but what makes a system capable. And".
- Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves." checked.
- Fig 12 :94 "The arrangement is the substance." checked.
- Fig 12 :111 "A vocabulary without bonds can name a state and cannot name a route to one." checked.
- Fig 13 :134 "Unreachable is a verdict here, not a silence" checked; the line ends with a comma, so the quotation is correctly truncated.

All checked lines are present verbatim in the extract. No quote was found to have drifted. The full list of world-source quotes with URLs and access dates is in `10_source_ledger.csv`; each was opened this session.

## Round trip gap `R_T`

The Symbols table defines `R_T` as the gap between what was sent up and what came back down, `gap(x, (T_E ∘ T_A)(x))`, measuring what the coarser description cannot hold. Fig 4 :30 requires it to be measured rather than assumed. I ran the round trip on the condensation the folder actually uses.

1. **Sent up (x):** the verbatim figure set, chiefly Fig 11 :39-40 (capability is agent-and-habitat), Fig 1 :19 and :27 (per-slot residual, frame-internal disqualification), Fig 9 :30-31 (effect not cause).
2. **Abstraction (T_A):** the shorthand carried in `07_the_tether_answer.md`: capability is a contact property, measure per slot, the internal name is an unproven binding, a null result is not absence.
3. **Concretisation (T_E):** a concrete claim about a model, such as "feature F in layer L represents object O and is what makes the model reason reliably."

**`R_T` is nonzero.** Four things the shorthand holds do not survive the trip back down:

- the **anchor requirement**: a specific ground must be named, and "reliable reasoning" as a benchmark average supplies none that the frame did not score itself;
- the **per-slot indexing**: a whole-model claim drops the live-slot residual that is the only signal for where the representation fails;
- the **bond type**: ≡ identity and ⇒ production are different molecules, and the shorthand uses one word for both;
- the **instrument condition**: probe selectivity and source discrimination are required before a decode can be called a representation, and the concrete claim usually omits them.

Conversely, one thing survives cleanly: capability is a property of model-and-habitat, measured per slot, and an internal change that does not change contact changes nothing. That is the residue worth sending. `R_T` was **not** measured numerically, because no ground reading exists; it is recorded qualitatively as the enumerated set of dropped constraints. Treating "the formula is a condensed version of the metalaws" as identity would set `R_T` to zero and would be the dead-reckoning error Fig 4 :30 names. The honest form is a lossy condensation with a recorded gap, which is what `09_watson_answer.md` states.

## Strains and re-census

- **Representation as state versus representation as grounded correspondence.** This is the live terminological strain. Re-census resolves it by binding two separate terms: an internal feature that can be named from the ML frame (a state, not forbidden), and a ground-settled correspondence to a world entity (a verdict, not yet available). Fig 9 :30-31 governs the second. `05_what_shape_means.md` §9 records my correction on this point. Not strained after binding.
- **Fig 11 contact versus internal representational capacity.** Not strained. Re-census: Fig 11 governs capability; internal structure is a candidate mechanism whose standing is decided by contact, not a rival quantity.
- **Linear representation hypothesis versus a `gap` for C1.** Not strained. Re-census: the hypothesis governs internal structure; the `gap` governs the ground-settled "of the world" claim. Different quantities. Its author's own qualification that the hypothesis "does not hold up universally" reinforces the distinction.
- **Record-level omissions.** None found. Every substantive claim in the folder carries a mode, and the refuter is written before the conclusion.

**After re-census: one terminological strain, named and bound; no hidden strains.**

## Verdict on the solution

**On internal consistency: the solution passes.** The four workspace files added across the derivation (`01`, `09`, `10`, this file) are consistent with the supporting files and with the verbatim figure text. The census holds four domains with a union at the intersection of internal structure and ground contact. The verdicts are kept separate: `gap` for literal C1, `specified` triangulated for C2, `specified` triangulated for instrument adequacy. Fig 11 and Fig 2 are used as low-overlap frames; Fig 6 and Fig 8 as another pair. The `gap` is stated plainly rather than converted into a "no." `09_watson_answer.md` carries the full WATSON shape with cost, undoability and reversal fields. `10_source_ledger.csv` lists every source actually read with URL, author, venue, year, accessed date and a quote. This file records the independent check.

**On corroboration: none from this seat.** The second seat shares the primary's evidence pool. By Fig 2 :40 its agreement is the pool talking, and by Fig 2 :35 a mirror cannot correct you. What this audit establishes is that the folder is internally consistent, not that the shape is true.

**On the claim: `specified`, ungrounded, candidate.** The shape survives. The literal question does not receive a yes or no: the state claim is a `gap`, the capability claim is a contact-and-per-slot shape, and the internal name stays open until a ground settles it. A selective probe plus causal intervention with an independent per-slot anchor, invariance of reliability under removal of contact, or admission of a frame-internal quantity as an anchor would move the verdict. Agreement and prestige are not such instruments.

**Recommendation.** Send the corrected packet with its mode, unbundled claims and refuters attached, ask what would refute it, and do not pool later agreement as corroboration. Keep the shape claim and the refuter in front of the links.
