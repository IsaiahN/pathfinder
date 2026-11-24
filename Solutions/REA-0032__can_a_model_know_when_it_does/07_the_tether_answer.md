# The Tether's answer: can a model know when it does not know?

**Mode: `specified` on the substantive claims, `general` on the structural shape, nothing `grounded`.** This is a shape and a route, not a result. Simulated derivation checked against the figures (`05_what_shape_means.md` §7), not a ground reading.

## 1. The residual it answers

A model can produce a fluent, plausible, unsupported answer. From inside a single run, the grounded case and the fabricated case present the same reading. We want to know whether the model can discriminate them and what would have to be present for that discrimination to be checkable. The question is a **union compound** with two conditions, detect and refuse (Fig 9 :57: "a case in two conditions is not a harder case of either"), and a dependency chain whose middle link is uninstrumented (Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at.").

## 2. The shape: four domain verdicts, never averaged

1. **Inside one frame, on its own confidence: no, and this is theorem-backed.** A frame cannot reach its own metaframe or certify its own limit (Fig 8 :34, :37). A confidence score is a quantity the frame also produces, and Fig 1 :27 says "A frame cannot score itself with a quantity it also produces." Confidence is explicitly listed among frame-internal quantities that "do not count" (Fig 1 :24-27). A mirror cannot correct you (Fig 2 :35). Triangulated across four figures with low overlap.
2. **The signal must be per-slot, not aggregate.** Fig 1 :13: "a global R near zero with one live slot residual is a legal state." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." The plausible-but-unsupported answer is exactly a low global residual with one live slot. A scalar uncertainty for the whole answer destroys the signal the question asks for. Triangulated (Fig 1 and the union analysis in §6).
3. **Ranged against an external ground: yes, as a checkable contact relation.** Fig 8 :54: "the union is searchable from contact, so underivable is not unknowable." Fig 9 :19-20: "the witness is always imported"; "it is not in here cannot be proved from inside." An anchor is "whatever settles the question and does not change its answer because of what any frame thinks" (Fig 2 :29). Calibration, selective prediction and conformal prediction are working instances, corroborated from their own fields. This is `specified`: the framework says what the relation must look like, not which deployed model has it.
4. **With an independent peer frame: yes only with real low overlap.** Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence." Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Repeated samples from one model are one pool. Fig 7 :36: "A chain of mirrors is one long room."
5. **At the meta-level: the direction of the question cannot be checked from inside.** Fig 5 :62: "A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term." The only remedy is to bind it as an ordinary term before the run: "Write down what an answer would look like, bind it, and let it accrue a residual like anything else" (Fig 5 :65). This solution does that in its README and §4 of `01`.
6. **"I don't know" is a refusal, not a low probability.** Operators table :58: "a refutation is a negation, which is why a vocabulary without it can only accumulate." Fig 12 :140: "A vocabulary that cannot refuse can only accumulate." Calibration tunes a score; it does not install the operator that refuses a claim's standing. The price of negation is open (Operators :78), so no implementation is claimed.

## 3. What it explicitly does not say

- Not that the answer is a bare "no." Fig 8 :54 forbids that: underivable from inside is not unknowable from contact.
- Not that a model has privileged access to its own grounding. That is the metamerism error: a reading that "cannot comment on the source."
- Not that calibration equals self-knowledge. Calibration supplies an external anchor; it is a method that crosses up, not a recording of an inner capability (Fig 4 :22).
- Not that self-consistency is triangulation. One model's samples share an evidence pool.
- Not that any particular model reliably does this under distribution shift. Kadavath et al. (2022) report that P(IK) struggles with calibration on new tasks. No measurement was taken here.
- Not a derivation of a mechanism. The framework returns a shape, not a name. Naming a mechanism is a binding from a world frame and must be recorded as such.
- Not `grounded`. No instrument settled any part of this for this solution.

## 4. What would settle it: the ground

A source-discriminating instrument, not a further argument. *The Hard Problem is About Source*: an instrument that reads green "cannot comment on the source"; the spectrometer resolved it. Here the corresponding tests are:

- Does a per-slot signal from the model track an external anchor under distribution shift, not just in distribution? A calibration curve on held-out data is the minimum; an out-of-distribution test is the real one.
- Does an abstention mechanism hold its promised error rate when the inputs are the plausible-but-unsupported cases the question is about? Selective prediction supplies a "dial" that guarantees a target error rate with high probability; conformal prediction supplies distribution-free coverage. Both need calibration data.
- Does a second frame with genuinely different training or instrumentation agree, and does that agreement actually reduce error? If the frames share a pool, Fig 2 :40 says the agreement is worthless as a verdict.
- Can a refusal be priced and composed over? The price of negation is an open item in the Operators table. This is a framework question and a research question at once.
- Standing refuters from `01` §4: a figure line permitting self-certification; a self-score shown not to be frame-internal; a method with no anchor and no second frame; independent samples from one model; the metaframe theorems refuted.

## 5. The honest stop

**Unreached, not unreachable.** The per-slot requirement, the anchor requirement and the independence requirement are stateable now. The implementation is not derived. Fig 13 :134: "So the system can report that it lacks something rather than producing an answer anyway. Unreachable is a verdict here, not a silence," Fig 9 :32: "you get a kind of thing, never the answer itself." The answer stops at the limit of the available instruments and records the lineage so the stop is checkable. "Indiscernibility is not identity."

The framework itself is not the final word on this. Fig 7 names "the limit: no last room" and Fig 13 :90: "One chain is one route through a space that has no last route." So this shape is a candidate generator and a refuter-bearing packet, not a settlement.

## 6. One-paragraph version for outreach

> The Tether does not answer yes or no to whether a model knows when it does not know, because the question is several questions bound together. Inside one frame, on its own confidence, the answer is no and the reason is theorem-backed: a frame cannot certify its own completeness, and a score the model produces cannot score the model. The live signal is per slot, so a single aggregate confidence hides exactly the plausible-but-unsupported case the question is about. Ranged against an external ground, the discrimination becomes checkable, and calibration, selective prediction and conformal prediction are working instances, though they add an anchor rather than proving self-knowledge. With a second frame it works only when the evidence pools are genuinely different; repeated samples from one model are a mirror, not a witness. At the meta-level a loop cannot check the direction of its own question, and the only remedy is to write the sought-for shape down as a refutable term before the run. What the framework offers is that shape, its five refuters written in advance, and the instruments that would close it. It stops there, labelled `specified`, because the figures do not settle any particular model and this derivation took no measurement.
