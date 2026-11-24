# Figure-grounded audit: can a model reliably communicate uncertainty about unfamiliar inputs?

**Mode of this document: `general` for the structural shape, `specified` for its application to current models, not `grounded`.**
Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** The Recursive Self-Improvement Trap (essay, opened 2026-11-23) says LLM output is a simulacrum and that "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the claim it reports on. See `05_what_shape_means.md` section 7.

**Sources.** Local canonical files: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`. World sources are listed in `10_source_ledger.csv` and were opened 2026-11-23.

---

## 0. The question restated as an effect

> "Can a model reliably communicate uncertainty about unfamiliar inputs, or does it mainly reflect the limits of its training and evaluation?"

Stated in effect terms, the question asks what a model's uncertainty report actually tracks. When a model flags an input as uncertain, there are two candidate referents:

- **A (the reliability horn):** the report tracks a real property of that input. It is a readable signal about something outside the model, namely the unfamiliarity or the likely error on that input. Acting on it is warranted.
- **B (the limits horn):** the report tracks the model's own training and evaluation regime. It is a quantity the frame produces about itself, a mirror of the benchmark. Acting on it without an external ground is not warranted.

What each option leads to: A licenses using uncertainty as a control signal for abstention, escalation and trust. B requires an independent anchor before the number can mean anything. The question is not which answer is popular. It is which referent the report has.

**Binding the sought-for shape as an ordinary term (Formula, "Direction").** I write down what an answer would look like before searching: a reliable uncertainty report is one whose variation across inputs tracks ground-truth error on inputs provably outside the training and evaluation closure, and whose behaviour is stable across independent frames. An unreliable one varies with the eval regime and collapses under shift. Binding this makes the preference refusable by the same test as anything else.

---

## 1. Domain census, before choosing any figure line

### 1.1 R by arity, symmetry, scale

- **Arity.** The residual has at least three terms: (i) the emitted uncertainty report, (ii) the true novelty or correctness of the input, (iii) the training and evaluation regime that produced (i). It is not a two-term correlation. It is a comparison under a threshold, with the regime as a hidden third operand.
- **Symmetry.** The mapping "report gives a claim about the input" is directed. Reliability is a threshold relation between report and ground error, not a symmetric join. No symmetric bond governs it.
- **Scale.** First order inside the trained closure (calibration on a known eval set). Second order at the boundary, where a genuinely unfamiliar input meets that closure. The boundary is the whole question, so the second-order reading governs.

### 1.2 Union or partition

Fig 9 :54 "when the split lands on a union rather than a partition, unbundle before you search again" and Fig 9 :55-58 say a case in two conditions is not a harder case of either. The two horns are not mutually exclusive across the input space. A model can be well calibrated on familiar inputs while failing to detect novel ones (Guo et al., 2017; Hendrycks and Gimpel, 2017, both opened), or flag novelty while being miscalibrated on the error it actually makes. These are overlapping conditions, so R is a **union compound**. It must be split before it is searched. This is a finding of the census, not a conclusion smuggled in.

The split I will use: (C1) does the report score itself, or range against an anchor; (C2) can the boundary between "unseen" and "unrepresentable" be named from inside the frame; (C3) does the verification frame share an evidence pool with the frame being verified. Each gets its own loop and its own verdict. Verdicts stay separate and are never averaged.

### 1.3 One line per domain: actors, currency, anchor

A domain without a nameable anchor is not a domain yet.

| domain | actors | currency | anchor | nameable? |
|---|---|---|---|---|
| D1 Inference frame (training plus architecture) | parameters, belief b, weighting w, prediction Γ(b,a), softmax score, calibration metric | predictive accuracy, loss, expected calibration error on the eval set | the evaluation set | present but **not legitimate** as an anchor: it shares an evidence pool with training and moves with the model family |
| D2 The ground (world) | the unfamiliar inputs, their true labels or consequences, the distribution shift | contact: does the report track actual error on genuinely held-out inputs | a measurement on a distribution provably disjoint from train and eval, stable across model families | yes, and it does not update when the model changes its mind |
| D3 Verification / evaluation frame | evaluators, benchmark designers, metric choosers | agreement between reported confidence and observed accuracy | should be D2; in standard practice it is the benchmark | benchmark is a convention that has decided an outcome, so the legitimate anchor is often missing |
| D4 Human analogue (corroboration only) | a person and their confidence feeling | confidence-accuracy correlation | objective task performance | yes, but it is a world source, not a figure-governed domain for this question |

D4 is included because it is a low-overlap field, but it contributes no figure verdict. It corroborates or conflicts only.

### 1.4 Order by dependency (Fig 3)

Fig 3 :20 "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces" and Fig 3 :19 "Optimising a link that already works cannot rescue one that does not."

1. **Perception.** Can the system tell an unfamiliar input from a familiar one at all?
2. **Vocabulary.** Does it have a term for "I cannot represent this", or only a confidence scalar?
3. **Objective.** What would count as progress, and calibration to what reference?
4. **Planning.** A route from the report to a decision.
5. **Learn and carry.** Name what worked, verify it, carry it forward.

Fig 3 :25-27 says the chain usually breaks between vocabulary and objective, the link with neither obvious failures nor obvious tests, and adds Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." Most effort in uncertainty research lands above the break, on calibration metrics (link 3 and 4), because those have instruments. Whether the system can tell novelty at all (link 1) is the less examined break. This is a `general` structural claim, not a measurement.

---

## 2. Figure census, quoted verbatim before concluding

All strings below are exact substrings of `FRAMEWORK/reference/03-FIGURES_TEXT.md`, checked this session.

| figure | verbatim line | bearing |
|---|---|---|
| Fig 1 :19 | "The residual is indexed by object slot, not aggregated." | an average calibration score hides the single unfamiliar slot where the signal matters |
| Fig 1 :27 | "They are frame-internal. A frame cannot score itself with a quantity it also produces." | decisive for horn A when the only check is the model's own confidence |
| Fig 2 :29 | "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." | anchor test for the eval set |
| Fig 2 :35 | "Alignment is triangulation, not negotiation. A mirror cannot correct you." | a benchmark drawn from the same pool is a mirror |
| Fig 2 :40 | "agreement about the world is worthless when the agreeing frames share an evidence pool" | calibration agreement inside one pool is not evidence |
| Fig 2 :42 | "Buy independence in proportion to the cost of being wrong." | why an external anchor is worth buying |
| Fig 3 :19 | "Optimising a link that already works cannot rescue one that does not." | dependency order |
| Fig 3 :27 | "A link with no instrument is not a link that works. It is a link nobody has looked at." | novelty perception is the unmeasured link |
| Fig 4 :30 | "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." | a confidence number that is never checked is dead reckoning |
| Fig 5 :48 | "Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing." | a self-reported uncertainty is an output |
| Fig 6 :23 | "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." | the boundary needs an outside frame |
| Fig 6 :27 | "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same." | the model cannot tell "never seen" from "cannot represent" from inside |
| Fig 7 :35 | "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." | agreement among eval runs is not a verdict |
| Fig 8 :39 | "So a search that finds nothing is never a proof of absence." | failure to detect novelty is not proof that the input is in distribution |
| Fig 9 :27 | "describe it before you go looking, or any frame you pick will seem to fit" | describe the residual before choosing the metric |
| Fig 9 :32 | "you get a kind of thing, never the answer itself" | the framework returns a shape |
| Fig 9 :44 | "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing." | no self-certification of coverage |
| Fig 9 :54 | "when the split lands on a union rather than a partition, unbundle before you search again" | the union finding |
| Fig 9 :60 | "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." | calibration metrics are budget filters, not verdicts |
| Fig 10 :42 | "A verifier that can reconstruct the claim cannot verify it." | independence of the verifier |
| Fig 10 :47 | "a convention that decides an outcome has stopped being one" | a benchmark that settles "is it calibrated" is no longer a convention |
| Fig 10 :52 | "Bring a characterised residual, never the source." | outreach order |
| Fig 11 :40 | "An improvement that does not change contact changes nothing, however much it improves." | a better score that does not change contact with the novel input changes nothing |
| Fig 12 :104 | "A settled molecule becomes an atom for whatever composes over it." | recursion, used in the supporting derivation |
| Fig 12 :125 | "A composition costs in two currencies, and they do not add." | bits for the description, actions for settling it |
| Fig 13 :133 | "what it returns is a shape rather than a name" | a refusal flag is a shape, a precise probability is a name |
| Fig 13 :135 | "It cannot say which primitive is missing, because naming it would mean already holding it." | why the model cannot name what it lacks |

### Strain test

I first tried to use Fig 8 :39 "So a search that finds nothing is never a proof of absence." to govern a model's failure to flag a novel input. That strains the line: Fig 8 is about underivability from inside a closure, not about statistical novelty. Re-census moved the depth-versus-absence question to Fig 6 :27 "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same." Fig 8 :39 is confirmed as governing underivability, and it is retained only for that. **No strain remains after re-census.** This correction is kept visible in section 7.

---

## 3. Findings, one loop per domain

### F1 (D1, triangulated) A model's own uncertainty output cannot establish its own reliability

Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." Fig 5 :48 "Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing." These are two figures with low overlap, one about the ground metric and one about the mint pipeline, so this is **triangulated**, not a repeated saying of one line.

A confidence scalar is a quantity the model produces. To use that same scalar as the check that the model communicates uncertainty reliably is to score the frame with a quantity the frame also produces. This is the named collapse. It does not matter how many eval runs are averaged (Fig 7 :35 "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes.").

**Refuter:** exhibit a composition in which the reported uncertainty is settled by an external measurement and the report's standing to be composed over comes from that settlement, not from the model's own scoring. If such a composition is demonstrated, F1 fails for it.

### F2 (D1, single-source) Averaging hides the unfamiliar slot

Fig 1 :19 "The residual is indexed by object slot, not aggregated." A benchmark-level expected calibration error pools all slots. The unfamiliar input is one slot. A near-zero global residual with one live slot is a legal state (Fig 1). So an aggregate calibration score can be excellent while the exact input the question asks about is unread.

**Mode:** `general`, structural. **Status:** single-source for the slot rule (Fig 1), with world corroboration from Guo et al. (2017), who report that aggregate accuracy and calibration part company in modern networks.

**Refuter:** show that the slot-wise residual for the unfamiliar input is itself bounded by the global residual under a declared metric, so no masking is possible.

### F3 (D2, triangulated) The model cannot name its own boundary from inside

Fig 6 :27 "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same." Fig 9 :44 "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing." Fig 13 :135 "It cannot say which primitive is missing, because naming it would mean already holding it."

An unfamiliar input can be unfamiliar because the model has not encountered it (depth, more search or more data) or because it is outside what the model can represent at all (genuine absence, an import would be needed). From inside the closure these look the same. A low-confidence flag reports the indistinguishability, not which case holds. It therefore cannot by itself discriminate "I have not seen this" from "I cannot say anything about this". Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." supplies the instruction: contact with a frame whose closure differs, that is, an external ground.

**Refuter:** demonstrate an internal signal that separates depth from genuine absence on the same input without contact with a different closure. Under Fig 6 :23 this would require the frame to move its own wall, which is what the line forbids; if it were shown, the line would be wrong for this quantity.

### F4 (D2, single-source) The honest shape of the report is a refusal, not a number

Fig 13 :133 "what it returns is a shape rather than a name" and Fig 9 :32 "you get a kind of thing, never the answer itself." Fig 12 :125 "A composition costs in two currencies, and they do not add." A precise probability is a name: it prices the description in bits. Whether the claim holds prices the finding out in actions. Collapsing the two makes a cheap number look like an expensive settlement.

So the figure-licensed form of "I am uncertain" is a shape: "this is outside my range, do not compose over my output as if it were settled." A calibrated probability attached to a genuinely novel input names what the framework says it cannot name. This is `general` for the shape and `specified` for the claim that today's scalar confidences are names in this sense.

**Refuter:** show a case where a numeric confidence was settled against the ground on a genuinely novel input, so the number is a name that the ground paid for. That would move the claim from `specified` to `grounded` for that case.

### F5 (D3, triangulated) The standard verification frame shares an evidence pool with the frame it checks

Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 10 :47 "a convention that decides an outcome has stopped being one." Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool."

A held-out eval set drawn from the same distribution as training is not an anchor in the Fig 2 sense. It does not settle the question "does this report track unfamiliar inputs", because it contains no unfamiliar inputs of the relevant kind. It is a convention that has been promoted to a decider. When it decides whether the uncertainty communication is reliable, it has stopped being a convention and become a frame in the collapsed panel of Fig 2. Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." applies when the verifier is another model trained on the same corpus.

**Refuter:** identify a real anchor for this question that does not update with the model and is not drawn from the training pool, and show the report ranges against it. The world literature supplies candidates (dataset shift benchmarks, OOD detection sets), but whether they are genuinely disjoint from the training and eval pools is an empirical question this derivation did not settle.

### F6 (D1, triangulated) Per-slot support must exist before a confidence claim is minted

Formula step 3 gates any new term by SUPPORT, REACHABILITY and NOVELTY as a product, with any factor at zero forcing inertness. Fig 5 :33-41 says the three guards are a product, not a checklist. For an uncertainty claim about an unfamiliar input, SUPPORT is the positive residual on that slot (Fig 1 :19). If the model has no live slot for the novel input, the claim has nothing to explain. A confident output in that state is not a calibrated confidence; it is the machinery firing with no scoring, which Fig 5 :48 names.

**Refuter:** show that the slot-wise residual is positive on the unfamiliar input before any confidence is emitted, with a declared instrument. Then SUPPORT passes and the guard no longer refuses the claim.

### F7 (union finding) The two horns cannot be averaged

Fig 9 :54 "when the split lands on a union rather than a partition, unbundle before you search again" and the compound rule in Fig 9 :55-58. Horn A and horn B are not points on one scale where a model is "partly reliable". They are different conditions over different regions of the input space. A model can be reliable on familiar inputs and a mirror on unfamiliar ones. Averaging them produces the "global R near zero with one live slot" state of Fig 1 and loses the only signal that says where to look.

**Refuter:** re-census the question as a partition, showing that for every input exactly one horn holds and the boundary is decidable from inside. I did not find such a boundary.

---

## 4. Pre-registered refuter (written before the conclusion)

Required by the framework's own rule that a falsifier written before the run is a design instrument.

The shape claim below is refuted if any of the following holds:

1. **Source-discriminating instrument.** An experiment shows the uncertainty signal tracks ground-truth error on inputs provably disjoint from both training and evaluation, and the result is stable across two or more independent model families and closures. This is an anchor that does not move when the model changes its mind (Fig 2 :29).
2. **Self-scoring licensed.** A figure re-census finds a line permitting a frame to score itself with a quantity it produces, overturning Fig 1 :27 and Fig 5 :48 for this quantity.
3. **Ground-settled number.** A composition is demonstrated in which a reported confidence on a novel input is settled by the ground rather than by a convention (Fig 10 :47).
4. **Union dissolved.** The two horns are re-censused as a partition with a decidable internal boundary, overturning the union finding (Fig 9 :54).

If any fires, the shape claim is withdrawn or narrowed. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Split the question before searching it. Treat calibration on familiar inputs and detection of unfamiliar ones as two conditions with two loops (F7).
2. Never accept a confidence score as evidence about a novel input unless it ranges against an anchor drawn from outside the training and eval pools (F5).
3. Bind the desired shape as an ordinary term first: reliability means tracking ground error on genuinely held-out inputs, stable across frames. Then let it accrue a residual (Formula, "Direction").
4. Report uncertainty as a refusal shape where the boundary is unknown: "outside my range, do not compose over this", not a precise number (F4).
5. Buy independence in proportion to the cost of being wrong (Fig 2 :42). For high-stakes use, that means a source-discriminating instrument and an outside frame, not another average.

---

## 6. Canonical usage check

Two local sources govern how the figures may be used, read after sections 0 to 5.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw." The framework returns "what a missing thing would have to look like (a shape, not a name)" and then stops at the limit of the instruments, recording the lineage so the stop is honest. "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the seat reads the ground; it does not ask the anchor to decide what the figures already settle. Design questions are answered by derivation, not by escalation.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| Fig 8 :39 governs a model's failure to flag novelty | **Retracted and re-censused.** Fig 8 governs underivability inside a closure. The depth-versus-absence question is governed by Fig 6 :27. Both lines retained for their proper quantities. |
| The question is one hard problem about calibration | **Retracted.** It is a union compound (Fig 9 :54), split into three loops in section 3. |
| Human metacognition literature is a second witness for the verdict | **Retracted.** Fleming (2024) and Jin, Verhaeghen and Rahnev (2022) are world corroboration only. They share the question framing with this derivation, so their agreement is one pool talking, not corroboration (Fig 2 :40). |
| F1 "a model cannot score itself" | **Canonically confirmed.** The figures README names the ground as the only decider, and Fig 1 :27 is explicit. |
| F4 "shape, not a name" | **Canonically confirmed and narrowed.** The README phrase governs a missing thing. For a novel input the model lacks a representation, so the refusal form applies; this is a binding of the limit, not an invention of a seventh term. |
| Apparent strain Fig 8 versus Fig 6 | **Not strained after re-census.** Different quantities: underivability from inside (Fig 8) versus depth and genuine absence (Fig 6). |
| This derivation settles the question | **Refused.** Simulated derivation, not a ground reading. No instrument was run. |

### Round trip, qualitative

`T_A` (abstraction): the figure set reduces to "self-report cannot ground itself, the boundary cannot be named from inside, eval pools are mirrors." `T_E` (concretisation): the concrete claim about a model's confidence on a novel input. Three constraints do not survive the trip back down without an instrument: which specific novel input is at issue (slot, Fig 1 :19), whether the eval pool is genuinely disjoint (Fig 2 :29), and whether the report is a shape or a name (Fig 9 :32). `R_T` is therefore nonzero and is recorded as these three dropped constraints, not as a number. Treating a condensed slogan as identical to the figure set would set `R_T` to zero and commit the dead-reckoning error of Fig 4 :30.

---

## 7. Updated verdict

The question as posed is a union compound and must be split. Once split, the figures decide the three loops separately and never average them:

- A model's own uncertainty output cannot establish its reliability (F1, F6).
- The boundary between unseen and unrepresentable cannot be named from inside the frame (F3).
- The standard verification frame shares an evidence pool with the frame it checks, so its agreement is not evidence (F5).

What survives as a `general` shape: reliable uncertainty communication, if it exists at all, is a shape, a refusal flag that ranges against an anchor outside the training and evaluation closure. It is not a precise probability that the model scores itself. Under current training and evaluation practice, the report therefore mainly reflects the limits of training and evaluation, because the anchor that would settle the other horn is usually absent. This is `specified` when applied to current models, not `grounded`. The honest stop is **unreached, not unreachable**: a source-discriminating instrument could move it, and the refuter in section 4 says exactly what would count.
