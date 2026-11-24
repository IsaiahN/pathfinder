# The Tether's answer on learning from sparse, inconsistent, biased feedback

**Mode: `specified` on the per-domain findings, `general` on the structural shape, `gap` on a numerical reliability guarantee, not `grounded`.** This is a shape and a route, not a result. Simulated derivation checked against the figures (`05_what_shape_means.md` section 7), not a ground reading.

## 1. The residual it answers

A system predicts `Γ(b,a)` and receives feedback `o'_s` at slot `s`. The residual is `R_s = |Γ(b,a) − o'_s|` (Symbols :36-40). The question asks whether this residual can drive the loop to settlement when the channel returning `o'_s` is thin, mutually contradictory, or dependent on the belief that formed the prediction.

The question's ordinary word "reliably" is not a quantity the figures define. It has been made an ordinary term by binding five conditions before the run (formula "Direction"): S1 per-slot live mass; S2 a ground that does not update on the frame; S3 two frames ranging against it separately; S4 a channel still reachable; S5 an operator able to refuse a held term that keeps being wrong.

## 2. The answer, one domain at a time

**D1, sparse feedback: conditional yes, with a hard boundary.** Sparse is a per-slot support problem, not a data-volume problem. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." A global residual near zero with one live slot is a legal state (Fig 1 :13). Where some instrument already returns something, the instrument can be sharpened from that worse instrument (Fig 6 :32-33). Where nothing anywhere registers, there is no edge to extend and the case is `unreachable`: "the search for a proto-instrument is a search for one that is already there" (Fig 6 :34-35). Adding more readings by averaging can destroy the signal that was there.

**D2, inconsistent feedback: yes only after splitting and anchoring.** Fig 9 :4-5: "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." The three conditions are a union with overlapping intersections, so one lever leaves the intersections standing (Fig 9 :54-58). Each split is ranged separately against a ground that does not update (Fig 2 :45-46). Agreement between frames that share an evidence pool is the pool talking, not corroboration (Fig 2 :40); Fig 2 :44 gives the arithmetic as a warning. Verdict by domain and by split, never averaged.

**D3, biased feedback: no, not while the channel updates on the frame.** Fig 2 :33: "The anchor must not update." Fig 2 :34: when it does, "everything drifts together, and the drift is coherent, which is why nobody notices." The Symbols table :24-26 shows the mechanism in the weighting `w`: "Two frames with identical architecture diverge because their histories and their w diverge." The thing called feedback is then a mirror, and "A mirror cannot correct you" (Fig 2 :35). The remedy is not a better aggregator but an anchor the question is constitutively about, with its blind axes stated (Fig 2 :36-38) and any unremovable stake declared (Fig 10 :59-60). Until such an anchor can be named, D3 has no domain in which reliability can be assessed.

**D4, verification and benchmarks: harness success is not reliability.** Fig 10 :24: "the ground does not decay, the channel does." Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone." A clean-label benchmark omits the degraded channel it was meant to test.

**The gap.** No figure line returns a numerical bound on reliability across systems and slots. Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 13 :134: "Unreachable is a verdict here, not a silence." The number is declared `gap`, of the shape-not-a-name kind. Manufacturing one would be answering outside the framework and then attributing the answer to it.

## 3. What it explicitly does not say

- Not that degraded feedback can never be learned from. The answer is conditional per condition, not a blanket no.
- Not that human feedback is worthless. Fig 2 :36-38 makes human judgment the legitimate anchor when the question is constitutively about people; it is only an instrument, with blind axes, when the question is about something else.
- Not that a particular loss, estimator, or reward model wins. Those are bindings from the machine-learning frame and need provenance and a ground reading (Fig 8 :50-52).
- Not that the three conditions are three settings of one noise dial. They are a union (Fig 9 :54-57).
- Not that averaging disagreement is always wrong. It is efficient for a convention (Fig 2 :41). It is disqualifying for a verdict about the world (Fig 2 :40).
- Not `grounded`. No measurement was taken by this agent and no figure was settled.

## 4. What would settle it - the ground

A source-discriminating instrument, not a further argument. From *The Hard Problem is About Source*, opened 2026-11-23: a color instrument "cannot comment on the source", and it was the spectrometer, not an argument, that resolved the case. Here the corresponding questions are:

1. At a named slot, does some instrument return positive live mass under the sparse channel, and does a version that averages across slots lose it? This tests S1.
2. Is there a ground for the slot that does not move when the frame's prediction is pushed on? Can two frames range against it with low evidence overlap and still converge? This tests S2 and S3.
3. Does the reward or label depend on the frame's own belief after controlling for the slot? An active-sampling design with fixed presentation is the discriminator used by Kaanders et al. 2022. This tests S4 and the bias mechanism.
4. Is there a persisted, non-trending residual on a held term, and does the system carry a refusal for it? This tests S5.
5. Standing falsifiers from `01` section 4: averaged-away slot still learned; updating channel still settled a false term at an outside ground; shared-evidence frames predicted a non-updating ground better out of sample; saturated metric still tracked an independent ground; no-negation system withdrew a false term correctly.

## 5. The honest stop

**Unreached, not unreachable, for the numerical claim.** The question as asked wants one word, "reliably", applied to three different conditions. The figures do not return that word as a verdict. They return a separator, a set of necessary conditions, and five ways to be wrong. The stop is at the limit of what the available instruments distinguish, and the lineage is recorded so the stop is checkable. "Indiscernibility is not identity."

This package is a simulated derivation. By *The Recursive Self-Improvement Trap*, "the truly testable output would need to be derived from the real architecture or working the formula yourself." It cannot settle the question it reports on. Anyone who wants to move a finding from `candidate` to `grounded` must run one of the five tests in section 4 at a named slot and record the instrument.

## 6. One-paragraph version for outreach

> The Tether does not answer "yes" to reliable learning from sparse, inconsistent or biased feedback, and it does not answer "no". It says those are three different conditions, not one noise dial. Sparse feedback is a per-slot support problem, and averaging across slots is how the live signal disappears; where nothing anywhere registers, the case is unreachable rather than absent. Inconsistent feedback is a union to split and then range separately against a ground that does not update; agreement between frames sharing one evidence pool is the pool talking, not corroboration. Biased feedback is the anchor becoming another frame, so the drift is coherent and nobody notices from inside. What the framework returns is the shape any answer must have: live mass per slot, a non-updating anchor, separate frames, a reachable channel, and an operator able to refuse a held term that keeps being wrong. It does not return a reliability percentage, and it writes down five ways to refute the shape before anyone checks it. The center stays open until an instrument settles a named slot.
