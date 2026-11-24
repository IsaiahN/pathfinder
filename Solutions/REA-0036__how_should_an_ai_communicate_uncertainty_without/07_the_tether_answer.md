# The Tether's answer: communicating uncertainty without breaking the answer

**Mode: `specified` on the substantive claims, `general` on the structural shape, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This answer synthesizes `01_figure_grounded_audit.md`, `05_what_shape_means.md` and `06_isomers_and_order.md`. It is checked for internal consistency against the verbatim figure text, but no reader experiment was run. By its own rule it cannot settle the human-facing half of the question. See `05_what_shape_means.md` §6.

---

## 1. The residual it answers, in effect terms

An AI emits an answer to a person. At the same moment there are three things: the model's state (a library Γ, a belief b, a weighting w), the compressed message that crosses to the reader, and the reader's decision in a habitat of tools, time and other sources. The residual is not one number. It is `R = |Γ(b,a) - o'|` indexed per slot s, where the slots are the factual claims, the reported confidence, the message and the decision. Symbols table :43-44: "R is measured per slot, never as a single global number." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

The question asks us to choose a communication policy, and the two options lead to different failures:

- **Option A, a bare scalar or a uniform hedge** ("I am 70% confident", "this may be wrong") with no stated ground, scope or cost. It leads to **misleading** when the number is a frame grading itself (Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces."), and to **unusable** when everything is hedged so that a constant "uncertain about everything" has decided the outcome by convention (Fig 10 :47: "a convention that decides an outcome has stopped being one").
- **Option B, a per-slot shape** that says what is committed and on what ground, what is out of reach, what would change the answer, and what each part costs to state and to check. It stays usable because the committed part is fixed and the uncertain part is bounded, and stays non-misleading because each part ranges against an anchor the model cannot move.

The sought-for shape, written as an ordinary term so it can accrue a residual (Formula step "Direction"), is: **a ground-referenced, per-slot uncertainty statement that reports the measured compression gap in effect terms, keeps two costs in separate ledgers, carries provenance for imports, and outputs `gap` where nothing closes R.**

---

## 2. Verdicts per domain, kept separate and never averaged

### D1. Model-ground contact (calibration)

Actors: model Γ, belief b, weighting w, held-out outcomes. Currency: per-slot residual reduction. Anchor: observed correctness, a counter that does not update on the model's opinion.

Fig 2 :29-30: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."

**Verdict (`specified`, triangulated across Fig 2 anchor rule and Fig 1 per-slot rule).** Calibration is real and necessary here, but it is one domain only. A confidence number is admissible when it ranges against outcomes, carries its source and shadow test, and is reported per slot. It is not admissible as a self-certifying verdict. Calibration alone does not answer a question that is constitutively about people.

### D2. Message seam (communication)

Actors: the compressed message and the reader. Currency: bits to describe and actions to check. Anchor: outcomes for "is this claim true", human judgment for "is this a good answer for a person".

Fig 2 :37-38: "Human judgment is the right anchor for is this a good answer for a person, because the question is about people. It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."

Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

Fig 4 :31-32: "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."

Fig 9 :30-31: "your words are borrowed too, so describe the effect rather than the cause"

Fig 12 :126: "Bits price the description. Actions price finding out whether it holds."

Fig 12 :130: "Summing them into one figure is the error this names, not the fix for it."

**Verdict (`specified`, triangulated across Fig 4 round trip, Fig 12 pricing and Fig 2 anchor rule).** The uncertainty content of a message is exactly what the lossy compression dropped: scope, conditions, what would change the answer, what is out of reach. State it in effect terms the reader can check, not as a story about internals. Keep the description cost and the checking cost in two readings. A single "trust score" adds a scalar over two currencies and hides the failure it is meant to measure. "Unusable" and "misleading" are not two ends of one dial.

### D3. Reader decision habitat

Actors: reader, task, tools, time, other sources. Currency: reliance and decision accuracy. Anchor: the task outcome.

Fig 11 :39: "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."

Fig 11 :40: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."

**Verdict (`specified`, triangulated with the world measurement recorded by HEAR in `10_source_ledger.csv`, different evidence pool).** Rewriting only the confidence text changes the message, not the capability. An intervention that gives the reader possibilities to check changes contact and can move decision accuracy. This is why the packet in `08_expert_verification_packet.md` asks for a failure mode, not an endorsement: the check must engage the reader's habitat.

### D4. Channel maintenance over time

Actors: instruments, metrics, percepts, pooled readings. Currency: contact. Anchor: the ground, which does not decay while the channel does.

Fig 10 :24: "the ground does not decay, the channel does"

Fig 10 :27-28: "the output is not a verdict, it is you have lost touch"

Fig 7 :13: "agreement compounds, evidence does not"

**Verdict (`specified`, triangulated across Fig 10 channel decay and Fig 7 mirror chain).** A metric that saturates at 0.9, or a pooled reading across a distribution shift, is a channel failure, not a new finding about the model. The output is a loss-of-contact report. A room of readers who all say the answer felt confident is agreement compounding, not calibration evidence.

### The compound, not a third average

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."

Fig 9 :57-58: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

The question is a union of "contact maintained" and "message usable", each with its own loop and its own ground. No single lever clears both. Do not trade one off against the other.

---

## 3. Import, provenance and the honest stop

Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."

Fig 8 :50-52: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."

A conformal coverage guarantee is a legitimate import: it has a source (the theorem), a shadow test (it explains the coverage gap) and a ground (empirical coverage of the true label). A verbal "likely" with no calibration record is an adopted import presented as if it were convergent. In the message the two look alike, so the message must carry its provenance.

Fig 13 :134: "Unreachable is a verdict here, not a silence,"

Fig 8 :39: "So a search that finds nothing is never a proof of absence."

When no term closes R, the honest output is: this part is out of reach with what is held, here is the shape of what would settle it, and here is what remains unsaid. It is neither a confident answer invented to keep the response useful nor silence.

---

## 4. What this answer explicitly does not say

- Not a UI prescription. No verbal form (words, percentages, intervals, disclaimers) is derived. Which form maximizes decision quality is a declared `gap`, to be settled by a human experiment, not by figure composition.
- Not that confidence numbers are forbidden. What is forbidden is a self-certifying anchor. A number with a source gate, a shadow test and outcome calibration is a legitimate import (Fig 6 :23).
- Not that calibration settles usability. Calibration is D1 only. The usability half requires human judgment as anchor (Fig 2 :37-38).
- Not "balance usability against accuracy". They are different currencies and cannot be added (Fig 12 :130).
- Not that honest refusal is a failure to answer. `gap` and `unreachable` are outputs (Fig 13 :134).
- Not `grounded`. No reader study was run, and a model cannot certify its own usability.

---

## 5. What would settle it

A source-discriminating instrument, not a further argument. The pre-registered refuters are in `01_figure_grounded_audit.md` §4 and the testable form is in `08_expert_verification_packet.md` §6. The decisive ones here are:

1. A self-reported confidence, with no outcome measurement and no reader measurement, settles whether an answer is usable for a person. That would break Fig 2 :37-38.
2. A multi-claim answer with one false slot, communicated as one scalar, produces no decision change when that slot is flipped. That would break the per-slot requirement (Symbols table :43-44, Fig 1 :19).
3. The uncertainty text is invariant when the model is forced to drop or add information, or the reader can reconstruct the full internal state from it. That would break Fig 4 :30 and Fig 10 :42.
4. One scalar trades hedging against accuracy and preserves both failure modes under controlled variation. That would break Fig 12 :126-130.
5. A definite answer is emitted when nothing in the system's reach closes the question and no provenanced import occurred. That would break Fig 13 :134.

A reported failure of any of these is more useful than an endorsement.

---

## 6. The honest stop

The figure-derived shape stops where the human-facing instrument starts. *Decoding Tacit Knowledge* (Isaiah N, 2026-11-10) puts the boundary: "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." That is what `08_expert_verification_packet.md` sends. Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." The world literature in `10_source_ledger.csv` shows the claim is *needed*, not that it is *true*. Keep those two separate.

---

## 7. One-paragraph version for outreach

> The Tether does not tell an AI to say a percentage, add a disclaimer, or hedge everything. It says that uncertainty has to be reported per claim, not as one global confidence, because a single number averages away the one slot that is wrong. Each slot should carry what is committed and the ground it would range against, what is out of reach, what observation would change it, and the two costs kept apart: the cost of stating the part and the cost of checking it. The uncertainty text is the honest report of what was lost when the model's state was compressed into a message, not decoration added afterwards. Human judgment, not the model's own score, settles whether the result is usable, because the question is about people. Where nothing closes the question, the right output is an explicit gap, not a fabricated answer and not silence. The framework returns that shape, not a UI; which verbal form works best is an open empirical question, and the packet asks what would refute the shape before offering any theory.
