# Figure-grounded audit: REA-0036, communicating uncertainty

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, Adventures in Machine Learning, 2026-11-19): *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post"* but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** The figure text extract `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical figures README, `THE_FORMULA.md`, the seat map field guide, the nine-file exemplar, the validated BUS-0001 pilot, four essays, and the public pages in `10_source_ledger.csv`. All were opened this session.

---

## Proposal header (seat reasoning, five lines)

```
DECIDES:    Separate the ground-contact question from the message-question. An AI should
            communicate uncertainty as a per-slot shape, ground-referenced and provenanced,
            carrying the measured round-trip gap R_T and two separately priced costs (bits
            and actions), with an explicit gap/unreachable verdict where no term closes R.
            It should never offer one scalar confidence as a self-certifying anchor.
            A = B? No. "Is the claim true" and "is this a good answer for a person" are
            different questions with different anchors (Fig 2 :36-38).
HOURS:      Setup and reading 3. Census and audit 3. World search 2. Four outreach artifacts
            1.5. Watson answer and ledger 1. Second-seat audit 1. Total about 11.5 agent-hours.
PRIOR CASE: QMGR-0037, imported exemplar. Its retraction table is the calibration case: a
            figure line that strains was sent back to census, not softened.
ANALOGUE:   Library of Babel searcher: describe the residual in effect terms before choosing
            a frame, bootstrap vocabulary by proximity, stop at a shape. Society of agents:
            room per problem, commons of methods only, ground under all.
LIMIT:      The "usable" half needs human judgment as anchor, and this folder runs no human
            experiment. Fig 2 :38 says instruments can be wrong on axes they do not measure.
            So the verdict is `specified`, never `grounded`, and the UI-level question is a
            declared gap. No amount of figure composition supplies a ground reading.
```

---

## 0. The residual, stated in effect terms

An AI emits an answer to a person. Three things exist at once: the model's state (a library Γ, a belief b, a confidence weighting w), the compressed message that crosses to the reader, and the reader's decision in a habitat of tools, time and other sources. The residual is not a single number. It is `R = |Γ(b,a) - o'|` indexed per slot s, where the slots are the factual claims, the reported confidence, the message, and the decision. Symbols table :43-44: *"R is measured per slot, never as a single global number."*

Restated as an effect, the question asks us to choose a communication policy:

- **Option A**, a bare scalar or a uniform hedge ("I am 70% confident", "this may be wrong") with no stated ground, scope or cost. Leads to either **misleading** (the number is a frame grading itself, Fig 2 :35; extra length raises reader confidence without raising accuracy, Steyvers et al. 2025) or **unusable** (everything is hedged, so a constant "uncertain about everything" has decided the outcome by convention, Fig 10 :47; a message that explains everything by saying nothing fails the bargain, Fig 5 :43-44).
- **Option B**, a per-slot shape: what is committed and on what ground, what is out of reach, what would change the answer, and what each part costs to state and to check. Leads to a message that stays usable because the committed part is fixed and the uncertain part is bounded, and stays non-misleading because each part ranges against an anchor the model cannot move.

What an answer would look like, bound as an ordinary term (formula step "Direction"): a **ground-referenced per-slot uncertainty shape with two priced readings and an honest stop**. That phrase is the sought-for shape made ordinary, so it can accrue a residual like anything else and be refused by the pre-registered refuter in §4.

---

## 1. Domain census

### R by arity, symmetry and scale

- **Arity.** At least three-place: model state, message, reader decision. It is indexed by claim slot (Fig 1 :19, Symbols :43-44), not a single global scalar.
- **Symmetry.** Confidence is a comparison against a ground (a threshold, not a symmetric join). The model-to-reader crossing is ordered (a sequence, not a reversible swap). Adding a hedge is not interchangeable with adding evidence: the two live in different units (Fig 12 :126-127).
- **Scale.** One answer loop per slot; the seam between model and message; the population of readers and decisions over time. Each transform is lossy with a measurable `R_T` (Fig 4 :27-32).

### One line per domain: actors, currency, anchor

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Model-ground contact (calibration) | model Γ, belief b, weighting w, held-out outcomes | per-slot residual reduction | observed correctness: a counter or measurement that does not update on the model's opinion | admitted |
| D2 Message seam (communication) | the compressed message, the reader | bits (description cost) and actions (checking cost) | for "good answer for a person", human judgment; for "is this claim true", the ground | admitted |
| D3 Reader decision habitat | reader, task, tools, time, other sources | reliance and decision accuracy | the task outcome | admitted |
| D4 Channel maintenance over time | instruments, metrics, percepts, pooled readings | contact | the ground, which does not decay; the channel does | admitted |
| X1 Confidence as a self-certifying property of the model | the model's self-report | fluency | none nameable: a frame cannot score itself with a quantity it also produces (Fig 1 :27) | not a domain yet; demoted to an instrument by Fig 2 :37-38 |
| X2 One universal score trading usability against accuracy | a single scalar | an imagined common unit | already inside D2 as a compound of two currencies | absorbed into D2, not admitted as a third domain |

**No nameable anchor means it is not a domain yet.** X1 fails that test. A confidence score is admitted only as an instrument for a different question, and instruments can be wrong on axes they do not measure.

### Partition or union

Union, not partition. D1 and D4 form a contact compound; D2 and D3 form a communication compound. The whole is a union of two conditions, "contact maintained" and "message usable", each with its own loop and its own ground (Fig 9 :54-57: *"And when the split lands on a union rather than a partition, unbundle before you search again."*; :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*). A single lever such as "add more hedging" clears the region where only one condition holds and leaves the intersection standing.

### Order by dependency (Fig 3)

1. **Perception:** what failed to resolve, per slot (R, not accuracy).
2. **Vocabulary:** terms for the uncertainty (per-slot, shape, owed, gap, two currencies). This is the link that usually has no instrument (Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*).
3. **Objective:** what counts as progress, calibrated reliance rather than a confidence score.
4. **Planning:** what to say, given the two currencies.
5. **Learn and carry:** record provenance so the route is checkable (Fig 10 :62: *"A ruling carries provenance like an atom."*).

Effort spent above the break cannot rescue a link below it. Most current work sits at step 1 (accuracy, calibration metrics) and step 4 (wording), while step 2 and step 3 are assumed.

---

## 2. Figure census (quoted before concluding)

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual per slot; frame-internal quantities disqualified | no single confidence scalar; no self-scoring |
| 2 The Ground | anchor must not update; human judgment is the anchor for a question about people | the model's confidence is an instrument, not the anchor |
| 3 Dependency Chain | a link with no instrument is not a link that works | the vocabulary/objective link is unmeasured |
| 4 The Membrane | lossy transform; measure the round trip | the uncertainty message is the honest report of `R_T` |
| 5 Mint Pipeline | MDL bargain; own output is never a measure of success | the empty hedge fails; confidence is not success |
| 6 Closure / Reachability | import is the only operator that moves the wall; two opposed instruments | a conformal guarantee is a legitimate import with a source gate |
| 7 Room Chain | agreement compounds, evidence does not | user agreement is not calibration evidence |
| 8 Union Surplus | convergent derivation and adopted import look identical | provenance is the whole difference |
| 9 Leave / Arrive | describe the effect before choosing a frame; union not partition; filters are not witnesses | unbundle before searching; a score is a filter, not a verdict |
| 10 Ground Maintainer | channel decays; keep anchor reachable; verifier non-access | fix the channel, not the score; do not show interiors first |
| 11 The Habitat | capability is agent-and-habitat | text-only changes do not change capability |
| 12 The Bond | two currencies that do not add; a goal is a comparison | "unusable" and "misleading" are different currencies |
| 13 Minimum Viable Set | unreachable is a verdict; the record is the proof | an honest stop is an output, not a silence |
| Operators table | ⋛ is a threshold relation between two quantities | confidence is a comparison against a ground, not a noun |
| Symbols table | `R` is the aim and is always a slice; measured per slot | the residual is the thing to communicate |

Strained readings are named in §7, not smoothed over.

---

## 3. Findings

### F1 - The anchor for this question is human judgment, not the model's self-report (decisive for D2)

Fig 2 :36: *"An anchor is legitimate when the question is constitutively about it."*

Fig 2 :37-38: *"Human judgment is the right anchor for is this a good answer for a person, because the question is about people. It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."*

Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*

Fig 1 :27: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*

"Unusable or misleading" is constitutively a question about people. So the anchor for the "usable" half is human judgment, and the model's self-reported confidence is an instrument for a different question. A policy cannot be validated by the same number it produces. Two consequences: the stage-1 claim must be checked by people against outcomes, and a room of readers who merely agree with one another is a mirror chain, not a check.

**Mode:** `specified`. **Status:** triangulated (Fig 2 anchor rule and Fig 1 frame-internal rule, low overlap). **Refuter:** a demonstration that a self-reported confidence, with no outcome measurement and no reader measurement, settles whether an answer is usable for a person. That would make the anchor update on the frame's opinion, which Fig 2 :33 forbids.

### F2 - The residual must be per slot, not one global number

Symbols table :43-44: *"R is measured per slot, never as a single global number."*

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*

Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

Symbols table :39-40: *"It is the aim, not only the error signal, and it is always a slice: what cannot be perceived yet is residual and simply cannot be read."*

A single "I am 70% confident" over a four-claim answer averages away the one live slot that is wrong. That is the named aggregation failure, not a stylistic preference. The honest message carries a per-slot shape: this part is settled and on what ground, this part is out of reach, this part would change with X. The unsaid part (what cannot be perceived yet) is residual by definition and cannot be read, so it must be reported as owed rather than filled in.

**Mode:** `specified`. **Status:** triangulated (Symbols table and Fig 1, distinct statements of the same rule). **Refuter:** a controlled case where a multi-claim answer with one false slot is communicated as one scalar and a reader's decision is unchanged when that slot is flipped. If flipping the live slot never changes the decision, per-slot indexing buys nothing in that case.

### F3 - The uncertainty statement is the measured round-trip gap `R_T`, not decoration

Fig 4 :27: *"The transform between scales loses information, and that is the point."*

Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

Fig 4 :31-32: *"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."*

Fig 9 :30-31: *"your words are borrowed too, so describe the effect rather than the cause"*

Fig 9 :32: *"you get a kind of thing, never the answer itself"*

The model's full state cannot fit in a message. The compression is lossy by construction. Therefore the uncertainty content of a message is exactly what the compression dropped: scope, conditions, what would change the answer, what is out of reach. That is the honest report of `R_T`, and Fig 4 requires it to be measured rather than assumed zero. "Describe the effect rather than the cause" means: say what you would expect to see if the claim were wrong, not a story about the model's internals. A reader who receives the full interior can reconstruct the claim and stops being an outside check (Fig 10 :42).

**Mode:** `general` for the lossy-transform requirement, `specified` for the message application. **Status:** triangulated (Fig 4 round trip and Fig 9 effect description, different figures and different mechanisms). **Refuter:** a message whose stated uncertainty is invariant when the model is forced to drop or add information (no gap measured), or one that lets the reader reconstruct the full internal state. Either breaks the claim that the message carries `R_T`.

### F4 - "Unusable" and "misleading" are two currencies and must not be summed

Fig 12 :126: *"Bits price the description. Actions price finding out whether it holds."*

Fig 12 :127: *"They are in different units, so a system holding one accounting cannot compare them and will not notice the shortfall."*

Fig 12 :130: *"Summing them into one figure is the error this names, not the fix for it."*

Fig 5 :43-44: *"A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."*

Fig 10 :47: *"a convention that decides an outcome has stopped being one"*

Verbosity is a description cost in bits. The reader's effort to check is an action cost. Hedging everything adds bits without changing contact with the ground, and a constant "uncertain about everything" is a convention that has decided the outcome (the reader can act on nothing), so it has stopped being a convention and has become a verdict the model authored. The minimum-description-length bargain also kills the empty hedge: a term that explains everything by saying nothing fails. So the two failure modes in the question are not two ends of one dial. They are two ledgers. Steyvers et al. (Nature Machine Intelligence, 2025) supply the non-figure corroboration: longer explanations raised reader confidence *"even when the extra length did not improve answer accuracy."*

**Mode:** `general` for the two-currency structure, `specified` for the message case. **Status:** triangulated across Fig 12 (pricing) and Fig 10 (convention collapse), with Fig 5 used as a corroborating analogue (declared in §7). **Refuter:** a single scalar that trades hedging against accuracy and preserves both failure modes under controlled variation of each. Until one is shown, keep two readings.

### F5 - An honest `gap` or `unreachable` is a verdict, not a silence or a fabricated answer

Fig 13 :134: *"Unreachable is a verdict here, not a silence,"*

Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

Fig 9 :32: *"you get a kind of thing, never the answer itself"*

Fig 2 :29-30: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."*

When no evidence supports a definite answer, the correct communication is: the term is out of reach with what is held, here is the shape of what would settle it, and here is what remains unsaid. It is not a confident answer invented to keep the response useful, and it is not silence. Both of those are failures of the same channel. The answer to "how should an AI communicate uncertainty" includes the case where the honest output is a refusal to be definite.

**Mode:** `specified`. **Status:** triangulated (Fig 13 verdict rule and Fig 8 search rule, low overlap). **Refuter:** a case where the system emits a definite answer while no term in `closure(Γ)` closes R and no import with a source gate and shadow test has occurred (formula step 7). Then the honest-stop rule is broken.

### F6 - A provenanced import is legitimate; a bare number is not

Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*

Fig 8 :50-52: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."*

Fig 10 :62: *"A ruling carries provenance like an atom."*

Conformal prediction (Angelopoulos and Bates, arXiv:2107.07511) is a genuine import from the statistics frame into an AI message: it has a source (the conformal theorem), a shadow test (it explains the coverage gap), and a ground (empirical coverage of the true label). A verbal confidence word such as "likely", with no calibration record, is an adopted import presented as if it were a convergent derivation. In the contents the two look alike. Only the record separates them. This is why the message should carry its provenance: the atom and its refusal look the same from inside.

**Mode:** `specified` for the application, `general` for the provenance rule. **Status:** triangulated (Fig 6 import and Fig 8 record, different figures). **Refuter:** show that a conformal coverage guarantee and an uncalibrated hedge are evidentially identical once the provenance is removed. If they are, the provenance requirement is doing no work here.

### F7 - Maintain the channel, not the score

Fig 10 :24: *"the ground does not decay, the channel does"*

Fig 10 :26: *"stale percepts, dropped transients, saturated metrics, pooled readings"*

Fig 10 :27-28: *"the output is not a verdict, it is you have lost touch"*

Fig 7 :12-13: *"same closure, handed along; agreement compounds, evidence does not"*

A confidence metric that saturates (every answer returns 0.9) or pooled readings across a distribution shift are channel failure, not a finding about the model. The output of the check is "contact has been lost", and the remedy is to restore the reading, not to adjudicate the score. A room of users all saying "the answer felt confident" is agreement compounding, not evidence. PredActBench (AlRabah et al., 2026) shows the practical form: when tools are noisy, models *"rarely make predictor uncertainty visible to users"* and users *"over-rely on incorrect predictions and unsupported claims."*

**Mode:** `specified`. **Status:** triangulated (Fig 10 channel and Fig 7 room chain, distinct mechanisms). **Refuter:** a channel that stays calibrated across a documented distribution shift with no intervention. Then the decay claim is false for that channel.

### F8 - Capability lives in agent and habitat, so the message is not the whole intervention

Fig 11 :39: *"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."*

Fig 11 :40: *"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."*

Rewriting only the model's confidence text changes the message, not the capability. HEAR (Zhao, Nguyen and Daumé, EMNLP 2024) is informative because it changes the habitat: the system *"warns users of potential errors in its instructions and suggests corrections,"* giving readers possibilities to explore, and reports *"a 13% increase in success rate and a 29% reduction in final location error distance"* with 80 users. The gain came from changing contact, not from tuning a number.

**Mode:** `specified`. **Status:** triangulated (Fig 11 capability claim plus a world measurement with its own ground, different evidence pools). **Refuter:** an answer-text-only intervention that changes decision accuracy with no change in the reader's options, tools or time. That would not refute the figure line, but it would refute applying it strongly to this case.

### F9 - What survives, with modes attached

| claim | mode | figure / status |
|---|---|---|
| The question has two anchors: outcomes for truth, human judgment for usability | `specified` | Fig 2 :36-38, triangulated |
| Report per slot, never one scalar | `specified` | Symbols :43-44, Fig 1 :19, triangulated |
| The uncertainty statement is the measured round-trip gap `R_T` | `general` + `specified` | Fig 4 :27-32, triangulated |
| Bits and actions are two currencies, kept in two readings | `general` | Fig 12 :126-130, triangulated |
| `gap` / `unreachable` is an output, not a silence | `specified` | Fig 13 :134, Fig 8 :39, triangulated |
| Imports need a source gate and a shadow test | `general` | Fig 6 :23, Fig 8 :50-52, triangulated |
| Keep the channel to the ground, not the score | `specified` | Fig 10 :24-29, triangulated |
| Refused: a universal scalar that trades usability against accuracy | refused | F4 |
| Refused: self-reported confidence as the anchor for usability | refused | F1 |
| Declared gap: which verbal form (words, numbers, intervals) maximizes decision quality | `gap` | no figure line governs; needs a human experiment |

---

## 4. Pre-registered refuter

Written before the conclusion, per the seat map failure genera: *"And a falsifier written before the run is a design instrument, not only an honesty device."*

The shape claim is refuted if any of the following holds:

1. A self-reported confidence, with no outcome and no reader measurement, settles whether an answer is usable for a person (breaks F1).
2. A multi-claim answer with one false slot, communicated as one scalar, produces no decision change when that slot is flipped (breaks F2).
3. A message's uncertainty text is invariant under a forced change in dropped information, or the reader can reconstruct the full internal state from it (breaks F3).
4. A single scalar trades hedging against accuracy and preserves both failure modes under controlled variation (breaks F4).
5. A definite answer is emitted when no term in `closure(Γ)` closes R and no provenanced import occurred (breaks F5).
6. An uncalibrated verbal hedge is shown to be evidentially identical to a conformal coverage guarantee after provenance is removed (breaks F6).

If any fires, the relevant condition is withdrawn and this folder is revised rather than quietly amended. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. **Separate the two anchors before writing any policy.** Outcomes settle truth; human judgment settles usability. Do not let a confidence metric decide the latter (F1).
2. **Report per slot.** State what is committed, what is out of reach, and what would change it, for each claim (F2, F5).
3. **Make the gap the content.** The uncertainty statement should describe effects the reader can check, not the model's internals (F3).
4. **Keep two ledgers.** Publish a description cost and a checking cost separately. Do not sum them into a "trust score" (F4).
5. **Carry provenance with any number.** A calibration or coverage claim needs its source and shadow test stated, or it is an adopted import in disguise (F6).
6. **Fix channels, not scores.** When a metric saturates or pools readings, report lost contact (F7). Change the reader's habitat, not only the wording (F8).
7. **Offer the generator, not the conclusion.** Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."* Send the shape, the refuter and the method; offer the links only after a verdict is recorded.

---

## 6. Canonical usage check and retraction log

Two local sources were read after the first five sections and govern how the figures may be used: the canonical figures README and `THE_FORMULA.md`.

- The canonical README says the figures *"outrank everything else in the repo"* and that *"the quotes are the authority, not this summary."* It states the limit plainly: the framework reports *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of the instruments and records the lineage. *"Indiscernibility is not identity."*
- `THE_FORMULA.md` step 7 separates SEARCHED, INWARD and OUTWARD and says to ask SEARCHED first. Step "Direction" says a frame cannot check the direction of its own question, so the sought-for shape must be written as an ordinary term. Section "Mode" requires `general | specified | grounded` on every claim.

### Retractions and confirmations

| earlier reading in this audit | status after the canonical check |
|---|---|
| "The framework answers how to communicate uncertainty" | **Retracted.** It returns a shape, not a UI. The verbal form is a declared gap (F9). |
| "Calibration is the answer" | **Narrowed, not retracted.** Calibration is D1 only. The question is constitutively about people, so D2 and D3 are required. |
| "Confidence numbers are forbidden" | **Retracted.** What is forbidden is a self-certifying anchor. A number with a source gate, shadow test and outcome calibration is a legitimate import (Fig 6 :23). |
| "Balance usability against accuracy" | **Corrected.** They cannot be added. Keep two readings (Fig 12 :130). |
| "An honest refusal is a failure to answer" | **Retracted.** The README's own wording and Fig 13 :134 make it a verdict. |
| F1 (human judgment as anchor) | **Canonically confirmed.** Fig 2 :36-38 is explicit, and the README's authority order puts the figures above the model's self-report. |
| This derivation can settle the question | **Retracted.** The RSI essay says LLM output is *"simulacra"* and only a real derivation or ground reading is testable. Mode remains `specified`. |
| Apparent strain, human judgment anchor versus verifier non-access | **Not strained after re-census.** Fig 2 :36-38 governs "good answer for a person"; Fig 10 :42 governs checking a claim about the world. Different objects. |
| Apparent strain, MDL bargain versus empty hedging | **Analogue, not governing line.** Fig 5 :43-44 governs term minting in Γ. The communication seam is governed by Fig 4 :27-32. The MDL line is used as low-overlap corroboration for the same shape, not as the derivation. Declared, not hidden. |

### Seven-question recursive derivation (summary)

1. **Is this one question?** No, it is a union of contact and communication (Fig 9 :54-57). Unbundle before searching.
2. **What is the anchor?** Outcomes for truth, human judgment for "good answer for a person" (Fig 2 :36-38). The model's score is an instrument, not an anchor.
3. **Scalar or per slot?** Per slot (Symbols :43-44, Fig 1 :19). A global average hides the live slot.
4. **What does the uncertainty text carry?** The measured lossy gap `R_T` in effect terms (Fig 4 :27-32, Fig 9 :30-31).
5. **Can costs be merged?** No, bits and actions are different units (Fig 12 :126-130).
6. **Import or mint?** Conformal prediction is an import with a source gate and shadow test; a bare hedge is an adopted import pretending to be convergent (Fig 8 :50-52).
7. **Settlement?** None in this folder. The "usable" half needs a human experiment; status is `candidate` (Fig 2 :35, formula step 5).

### Updated verdict

The shape survives: a ground-referenced, per-slot uncertainty statement that reports the measured compression gap in effect terms, keeps two costs in separate ledgers, carries provenance for imports, and outputs `gap` where nothing closes R. Every specific UI prescription does not survive: no verbal form is derived, no scalar score is licensed, and no claim of usability is settled without people. Strains after re-census: none governing; one declared analogue (Fig 5 applied to hedging). The strongest single point is canonical: the question is about people, so the anchor is human judgment, and the model cannot certify its own usability (Fig 2 :36-38, Fig 1 :27).
