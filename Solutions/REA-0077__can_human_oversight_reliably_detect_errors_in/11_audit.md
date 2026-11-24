# Second-seat audit of the REA-0077 solution

**Mode: `specified`, not `grounded`.**

**Honest standing of this document.** This is a simulated second seat. It read the same evidence pool as the primary derivation in `01_figure_grounded_audit.md`: the same figure text, the same framework docs, the same essays, the same outside sources, and the same folder files. Fig 2 :40 says "agreement about the world is worthless when the agreeing frames share an evidence pool" and Fig 2 :35 says "Alignment is triangulation, not negotiation. A mirror cannot correct you." A second seat that shares the evidence pool is a mirror with a different name. What follows is therefore a check of **internal consistency only. It is not corroboration, not a second witness, and not a ground reading.** No measurement was taken. This audit cannot settle the claim it audits.

## Independent domain census

I redid this before reading the primary's conclusions, starting only from the residual line: can human oversight reliably detect errors in a system that performs better than people on some tasks and worse on others? I used the WATSON order, R by arity, symmetry and scale; one line per domain with actors, currency and anchor; partition or union; order by dependency.

- **R (arity, symmetry, scale).** The gap between what an oversight arrangement predicts about correctness and what the ground returns. Arity: two competence regimes sharing one checker and one arrangement, so a **union** with an intersection, not a partition (Fig 9 :54, :57). Symmetry: asymmetric; a checker ranges against a maker and a ground, and the detection relation is a threshold comparison rather than a symmetric join. Scale: one review at first order, the whole arrangement at second order, with a lossy transform.
- **Domain 1, maker.** Actors: system, corpus, confidence. Currency: per-slot prediction. Anchor: task correctness. It cannot author the ground.
- **Domain 2, checker.** Actors: person, rubric, interface, time. Currency: detection, agreement, refusal. Anchor: currently ambiguous between the person's judgment and a separate ground. This ambiguity is the residual, not a defect of the write-up.
- **Domain 3, ground.** Actors: verification set, measurement, counter, experiment. Currency: settled correctness. Anchor: itself. Not a party to the disagreement.
- **Domain 4, habitat.** Actors: case selection, feedback, other frames, rotation. Currency: independence and channel fidelity. Anchor: the ground, kept reachable.

Order by dependency: ground legitimacy (Fig 2 :36-38), then vocabulary (Fig 3 :25-27), then independence (Fig 2 :31-32), then per-slot residual (Fig 1 :19), then refusal (Fig 5 :53), then channel (Fig 10 :24), and only then any reliability claim (Fig 3 :19).

My census matches the primary's four domains and its union reading. I reached it from Fig 9's union/partition split and Fig 3's dependency order, where the primary reached it from Fig 2's anchor legitimacy and Fig 11's capability clause. Different starting figures, same boundaries: low overlap between routes inside the framework, but still one evidence pool. The agreement is weak, not circular in a strict sense, and not independent.

## Comparison with the primary

I checked each primary finding against the verbatim figure text and the corrected files, including the retraction table.

| primary finding | my independent check | agreement |
|---|---|---|
| F1 human judgment is an instrument for correctness | Fig 2 :36-38 separates the two anchors explicitly; nothing needs stretching | agree, decisive |
| F2 shared pools give no surplus | Fig 2 :31-32, Fig 7 :12-13, Fig 8 :48-49 all name the same independence quantity | agree |
| F3 aggregate hides the live slot | Fig 1 :13 permits near zero global residual with one live slot; Symbols table :43-44 requires per slot | agree |
| F4 detection is a refusal | Fig 5 :53 names the refuted bin; Operators table :58 says a vocabulary without negation can only accumulate | agree |
| F5 capability is agent-and-habitat | Fig 11 :39-40; Bowman et al. is an arrangement result, not a person-level result | agree; earlier conflict correctly retracted |
| F6 absence is not proof | Fig 8 :39, Fig 9 :44 | agree |
| F7 channel decays | Fig 10 :24-26; seat map shelf life | agree |
| F8 chain breaks at vocabulary | Fig 3 :25-27; weak-supervision literature corroborates empirically | agree, figure claim single-source |
| Scalar verdict is a gap | Fig 9 :32 and Fig 13 :134 give a shape and a stop, not a coefficient | agree |
| F1 blanket version retracted | the narrower claim is what the figure licenses; the retraction is visible | agree |

No disagreement with the primary. Since we share an evidence pool, this agreement has no independent weight.

## Verbatim figure lines checked

I reopened `FRAMEWORK/reference/03-FIGURES_TEXT.md` and checked these character by character before relying on them. Each is a primary quote; none is taken from a summary.

- Fig 2 :36 "An anchor is legitimate when the question is constitutively about it." checked.
- Fig 2 :37-38 "It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure." checked. The sentence wraps across SVG lines 37 and 38; the quotation joins them with a space, which is what the whitespace-normalised extract gives.
- Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool" checked; it is a clause of the full line, not the whole line.
- Fig 1 :19 "The residual is indexed by object slot, not aggregated." checked.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." checked.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." checked.
- Fig 11 :39 "capability is a property of agent-and-habitat, never of the agent alone" checked; it is a clause of the full line.
- Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." checked.
- Fig 10 :24 "the ground does not decay, the channel does" checked; clause of the full line.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." checked.
- Fig 13 :134 "Unreachable is a verdict here, not a silence" checked; the extract has a trailing comma, which is not part of the quotation.
- Fig 5 :53 "refuted: a term we hold is wrong; a term is owed that says so" checked.
- Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." checked.
- Operators table :58 "a refutation is a negation, which is why a vocabulary without it can only accumulate" checked.
- Symbols table :43-44 "R is measured per slot, never as a single global number." checked across the line wrap.

All checked strings are present verbatim in the extract after whitespace normalisation. No quote drifted. Two of them are deliberate truncations of longer lines, and each truncation stops at a clause boundary and is marked as a clause here.

## Round trip gap R_T

The Symbols table defines R_T as the gap between what was sent up and what came back down, `gap(x, (T_E ∘ T_A)(x))`. Fig 4 :30 requires it to be measured rather than assumed. I ran it on the condensation this folder actually uses.

1. **Sent up (x):** the verbatim figure set, chiefly Fig 2 :36-38 (anchor legitimacy), Fig 1 :19 (per-slot residual), Fig 11 :39-40 (capability and contact), Fig 9 :54 (union).
2. **Abstraction (T_A):** the shorthand carried in `07_the_tether_answer.md` and `09_watson_answer.md`: human judgment is an instrument, reliability belongs to the arrangement, report per slot, keep a refusal, maintain the channel, unbundle the union.
3. **Concretisation (T_E):** a concrete oversight deployment: named reviewer, named rubric, named dataset, named error classes, a reviewer selection rule, a rotation schedule.

**R_T is nonzero.** Three things the shorthand holds do not survive the trip back down:

- which specific measurement counts as a legitimate ground for the particular task, since Fig 2 :36 says legitimacy is constitutively about the question and the abstraction does not decide the task;
- how independence is to be measured between a particular person and a particular model, since the abstraction says "differ" but the figure defines independence as shared evidence and does not supply an instrument;
- the operational form of a refusal in a given review interface, since the Operators table licenses negation but does not design a workflow.

Conversely, one thing survives cleanly: for a correctness question the person is an instrument and the ground must be separate, plus the requirement never to aggregate the live slot. That is the residue worth sending. R_T was **not** measured numerically because no ground reading exists; it is recorded qualitatively as the enumerated set of dropped constraints. Treating "the formula is the condensed version of the metalaws" as identity would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names. The honest form is a lossy condensation with a recorded gap, which is what `09_watson_answer.md` states.

## Strains and re-census

- **Fig 2 instrument clause versus Fig 11 capability clause.** Re-census resolves it: Fig 2 governs which anchor is legitimate for a question; Fig 11 governs where capability resides. Different objects.
- **Verifier non-access versus inability to reproduce.** Still live. Fig 10 :42 makes non-access a soundness condition; a reviewer who cannot reproduce a superhuman output has non-access in one sense but is not thereby a sound verifier. Fig 12 :104 lets settled molecules become atoms, but nothing here settles the reviewer's relation to the criterion. I record this as a strain, not a correction. It is named in `01` section 6 and in `09` TETHER.
- **Bowman et al. as conflict.** Resolved by re-census as corroboration of F5. The correction is kept visible in `01` section 6 rather than erased.
- **"Shape, not a name" over-read.** The correction in `05` section 5 narrows it to missing primitives and keeps the metamerism argument with a different reason. Agreed.
- **After re-census: one live strain, named, none hidden.**

## Verdict on the solution

**On internal consistency: the solution passes.** The files are consistent with one another and with the verbatim figure text. The retraction table is applied rather than ignored: the blanket "oversight cannot work" claim is retracted, the Bowman conflict is re-censused as corroboration, the verifier non-access over-read is narrowed, the negation objection is retracted, the union reading replaces the single-question reading, and the "shape, not a name" rule is corrected in `05`. `09_watson_answer.md` carries the full WATSON shape with all verdict fields stated; `10_source_ledger.csv` lists every source actually read with accessed date 2026-11-24 and local paths where applicable; this file records the independent check. The strongest artifact remains `08_expert_verification_packet.md`: mode, three checkable sub-claims, verbatim lines, refuters and provenance before the conclusion.

**On corroboration: none.** This second seat shares the primary's evidence pool. By Fig 2 :40 its agreement is the pool talking, and by Fig 2 :35 a mirror cannot correct you. What this audit establishes is that the folder is internally consistent, not that the claim is true.

**On the claim: `specified`, ungrounded, candidate; scalar verdict is a gap.** For correctness questions the human is an instrument and not the anchor, so a bare person cannot be the verifier on the tasks where the system is stronger. Reliability belongs to an arrangement with a legitimate ground, an independent checker, per-slot residuals, a refusal, and a maintained channel. The outside sources in low-overlap fields corroborate the shape but do not decide it. Nothing here is settled: a per-slot detection experiment against a verified ground, a reviewer-only change that moves task correctness without changing contact, or a demonstration that correctness is constitutively defined by human judgment would be required to move it to `grounded`. Prestige or agreement is not such an instrument.

**Recommendation.** Send the packet with its mode and refuters attached, ask what would refute it, and do not pool later agreement as corroboration. Keep the shape claim and the refuter in front of the links. Record any returned refutation here with provenance and re-evaluate it as if it came from any other source.
