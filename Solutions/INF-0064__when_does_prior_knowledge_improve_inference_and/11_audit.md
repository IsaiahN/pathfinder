# Second-seat audit of the INF-0064 solution

**Mode: `specified`, not `grounded`.**

**Honest standing of this document.** This is a simulated second seat. It reads the same evidence pool as the primary derivation in `01_figure_grounded_audit.md`: the same figure text, the same formula, the same essays, the same four world sources, the same folder files. Fig 2 :40 says *"agreement about the world is worthless when the agreeing frames share an evidence pool"* and Fig 2 :35 says *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* A second seat that shares the evidence pool is a mirror with a different name. What follows is therefore a check of **internal consistency only. It is not corroboration, not a second witness, and not a ground reading.** No ablation was run. This audit cannot settle the claim it audits.

I wrote this census from the residual line alone before reading the primary's conclusions: "when does prior knowledge improve inference, and when does it lock a learner into a mistaken model?"

## Independent domain census

- **R (arity / symmetry / scale).** The residual is the gap between a prediction formed from a belief that mixes history and inherited prior, and an observation. Arity: one belief, two sources, many slots. Symmetry: directed error, and the prior is not a symmetric partner of the ground because the anchor must not update. Scale: the prior crosses a membrane, so it can be a first-order term or a second-order object (the weight `w` is itself learnable). Question type: **union**, not partition. The two outcomes can hold on different slots of one learner. This I derived from Fig 1 :19 and Fig 9 :54-58, not from the primary's section 0.
- **Domain 1, the learner's inference loop.** Actors: library, belief, weighting, action, observation, per-slot residual, candidate term, refusal. Currency: residual shrinkage plus the two prices in Fig 12 (bits and actions). Anchor: the ground, the only metric. Question: bound refusable term or invisible preference?
- **Domain 2, the membrane.** Actors: source frame, target learner, head start, recording, generator, replay. Currency: reapplicability. Anchor: the round-trip gap `R_T`. Dependency: upstream of Domain 1, because what kind of thing crosses decides how it can be used.
- **Domain 3, frame independence.** Actors: frames or rooms, evidence pools, anchor. Currency: independence. Anchor: the ground, never agreement. Question: does shared prior make agreement evidence?

Order by dependency: bind the shape, refuse before mint, describe before looking, import with gates, settle against the ground (Fig 3 :20; Formula steps 2 and 7).

My census matches the primary's three domains and its union reading. Where the primary derived from Fig 5 :62 (invisible preference) and Fig 4 :25 (recording), I derived from Fig 1 :19 (slot indexing) and Fig 2 :33 (non-updating anchor). Different starting figures, same domain boundaries: low overlap between routes, so the agreement is weak but not circular within the framework. It is still one evidence pool.

## Comparison with primary

I checked each primary finding against the verbatim figure text and against the corrected files.

| primary finding | my independent check | agreement |
|---|---|---|
| F1 discriminator is refusability, not prior strength | Fig 5 :62 makes an unbound preference invisible to the checking machinery; the Formula "Direction" paragraph is the same claim at a different level | agree |
| F2 prior that updates the anchor gives coherent drift | Fig 2 :33-34; a prior is a frame, not an anchor | agree |
| F3 closure cannot correct itself | Fig 6 :21, :23; Fig 8 :32 | agree |
| F4 correction adds a refusal, does not delete | Fig 6 :42; the record only grows. The open contradiction of Fig 6 :47 is correctly left open | agree |
| F5 method versus recording | Fig 4 :22, :25; confirmed by Formula step 6 | agree |
| F6 per slot, never averaged | Fig 1 :19, :22. I would rank this finding higher than the primary does: without it, all four world sources report only aggregate accuracy and the mechanism stays invisible | agree, priority raised |
| F7 shared prior makes a community one frame | Fig 7 :12, :35; Fig 8 :48 | agree |
| F8 middle link has no instrument | Fig 3 :25-27. The world sources support this: warnings alone often do not remove an Einstellung effect | agree |
| F9 channel decays, not the ground | Fig 10 :24-25 | agree |
| F10 numeric tipping point is a gap | Fig 9 :32; Fig 13 :134-135. Correctly marked `gap`, not `grounded` | agree |

No disagreement with the primary. Since we share an evidence pool, that agreement is expected and carries no independent weight.

## Verbatim figure lines checked

I reopened `FRAMEWORK/reference/03-FIGURES_TEXT.md` and checked these lines character by character before relying on them.

- Fig 5 :62 "A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term. It is not bound, it predicts nothing, and it accrues no residual, so nothing here can see it." checked. The sentence wraps across lines 62-63 in the extract; the quotation joins them.
- Fig 4 :22 "Only methods cross up. Only head starts come down." checked.
- Fig 4 :25 "A recording carried upward looks like knowledge and is a description of one occasion. Replayed downward, it produces a system that repeats a past success and cannot produce a new one." checked.
- Fig 2 :33 "The anchor must not update." checked.
- Fig 2 :34 "If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices." checked.
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" checked; the leading clause is part of the line and is included.
- Fig 1 :19 "The residual is indexed by object slot, not aggregated." checked.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." checked.
- Fig 6 :42 "What is recorded only grows. What is reachable is derived, and it can fall. A refutation adds a term that refuses; it removes nothing, and the reach falls because something was added rather than because anything was deleted." checked.
- Fig 6 :47 "If a term and its refusal are both settled, the record holds a contradiction. Whether that is two scopes, an error in the ground, or a world that changed is not yet decidable here." checked.
- Fig 8 :32 "no search, however long, adds an atom" checked.
- Fig 9 :32 "you get a kind of thing, never the answer itself" checked.
- Fig 13 :134 "Unreachable is a verdict here, not a silence," checked; the line ends with a comma in the extract.
- Fig 13 :135 "It cannot say which primitive is missing, because naming it would mean already holding it." checked.

All checked lines are present verbatim in the extract. No quote was found to have drifted.

## Round trip gap R_T

The Symbols table defines R_T as `gap(x, (T_E ∘ T_A)(x))`, and Fig 4 :30 requires it to be measured rather than assumed. I ran the round trip on the condensation the folder actually uses.

1. **Sent up (x):** the verbatim figure set, chiefly Fig 4 :22-25 (method versus recording), Fig 5 :62 (invisible preference), Fig 2 :33-34 (non-updating anchor), Fig 1 :19 (slot indexing), Fig 6 :42 (refusal added).
2. **Abstraction (T_A):** the shorthand in `07_the_tether_answer.md`, "a prior helps when it is a method, a refusable term, ranged against a fixed ground, measured per slot, checked by independent frames."
3. **Concretisation (T_E):** an experimental design: ablate the prior, hold the anchor fixed, measure per-case residual, bind a falsifying observation, test on a novel case, use checkers who did not share the prior.

**R_T is nonzero.** Three things the shorthand holds do not survive the trip back down:

- the **two-currency price** (Fig 12 :126-127): a prior is cheap to state and expensive to settle; the shorthand's four adjectives say nothing about which budget is being spent;
- the **order of refusal before mint** (Formula step 2), which an ablation design can silently reverse by adding a new model before binding the old expectation as a term;
- the **operand type of ⋛** at the tipping point: the Operators table restricts it to two quantities, while the shorthand speaks loosely of "ground pressure."

Conversely, one thing survives cleanly: a per-slot residual against an immovable ground, with a stated refusal. That is the residue worth sending first. R_T was **not** measured numerically, because no ground reading exists; it is recorded qualitatively as the enumerated set of dropped constraints. Treating "the formula is the condensed version of the metalaws" as identity would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names. The honest form is a lossy condensation with a measured gap, which is what `09_watson_answer.md` states.

## Strains and re-census

- **Earlier reading: Fig 2 :33 "the anchor must not update" forbids priors.** Re-census resolves it: the anchor is the ground, the prior is a frame. The line constrains their relation. Matches the canonical rule that a reading which makes figures contradict has misidentified its domain.
- **Earlier reading: "shape, not a name" forbids describing the discriminator.** Re-census narrows it: the phrase governs a missing primitive. The four discriminators are relations among held atoms, so describing them is permitted; naming `w*` is not. Recorded as a visible correction in `05_what_shape_means.md` section 6.
- **⋛ operand type at the tipping point.** Still live. The Operators table calls ⋛ "a threshold relation between two quantities"; here the quantities would be prior reach and ground pressure at a given level. Fig 9 :32 permits the comparison shape, but whether the two readings are separable needs an instrument. I record this as a strain, not a correction. `06_isomers_and_order.md` Q3 and `09_watson_answer.md` do the same.
- **World-source agreement.** Four independent fields agree, but the two animal-behaviour sources are one pool for the learning-set phenomenon, so they count as one witness there. Their agreement corroborates the shape; by Fig 9 :60 it never hands the verdict.
- **After re-census: one strain, named, none hidden.**

## Verdict on the solution

**On internal consistency: the solution passes.** The twelve files are consistent with each other and with the verbatim figure text. The two self-corrections are applied rather than erased: the partition reading is withdrawn in favour of a union, and the `w*` name is withdrawn in favour of a `gap`. F1 to F10 are triangulated or marked single-source or gap as appropriate. `09_watson_answer.md` carries the full WATSON shape with cost if wrong, undoable and reversed by stated. `10_source_ledger.csv` lists every source actually opened, with verified URLs, accessed date 2026-11-23 and local paths where applicable. This file records the independent check.

**On corroboration: none from this seat.** This second seat shares the primary's evidence pool. By Fig 2 :40 its agreement is the pool talking, and by Fig 2 :35 a mirror cannot correct you. What this audit establishes is that the folder is internally consistent, not that the claim is true. The four independent world literatures provide real external corroboration of the shape, but they are secondary and do not decide it.

**On the claim: `specified`, ungrounded, candidate.** The shape survives: a prior helps as a method, a refusable bound term, ranged against a non-updating ground, measured per slot, checked by independent frames; it locks in as a replayed recording, an invisible preference, a captured ground, an averaged signal, or a claim checked by a shared pool. The numeric threshold does not survive as a claim; it is a `gap`. An ablation with a fixed anchor, a refusability probe, a novel-case recording test, or an independence check would be required to move it to `grounded`. Prestige or agreement is not such an instrument.

**Recommendation.** Send the packet with its mode and refuters attached, ask what would refute it, and do not pool later agreement as corroboration. Keep the shape claim and the per-slot ablation in front of the links.
