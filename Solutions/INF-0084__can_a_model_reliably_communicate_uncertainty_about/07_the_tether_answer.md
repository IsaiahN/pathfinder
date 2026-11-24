# The Tether's answer: can a model reliably communicate uncertainty about unfamiliar inputs?

**Mode: `general` for the figure-derived shape, `specified` when applied to current models, not `grounded`.** Simulated derivation checked against the figures (`05_what_shape_means.md` section 5), not a ground reading. No instrument was run in this derivation.

## 1. The residual it answers

The question offers one disjunction, but the residual is a union compound. Calibration on familiar inputs and detection of unfamiliar ones are overlapping conditions with different remedies. Fig 9 :54 "when the split lands on a union rather than a partition, unbundle before you search again." Keeping them bundled lets a good average hide the one unfamiliar slot: Fig 1 :19 "The residual is indexed by object slot, not aggregated."

## 2. The shape, verdicts kept separate

**D1, the inference frame. A model's own uncertainty output cannot establish its reliability.**
Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." Fig 5 :48 "Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing." A confidence scalar is a quantity the frame produces, so using it as the check on itself is the named collapse. This is `triangulated` across two figures with low overlap.

**D2, the ground. The boundary cannot be named from inside.**
Fig 6 :27 "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same." A low-confidence flag reports that the model cannot distinguish "not seen" from "cannot represent". It does not report which is the case. Only contact with a frame whose closure differs can move that boundary. This is `triangulated` (Fig 6 and Fig 9 :44).

**D3, verification. The standard check shares an evidence pool with the thing checked.**
Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." A held-out set drawn from the training distribution does not settle the unfamiliar-input question and moves with the model family. Fig 10 :47 "a convention that decides an outcome has stopped being one." This is `triangulated` (Fig 2 and Fig 10).

**The shape that results.** Reliable uncertainty communication, if it exists, is a refusal that ranges against an anchor outside the training and evaluation pools. It is "this is outside my range, do not compose over my output as if it were settled." Fig 9 :32 "you get a kind of thing, never the answer itself." A precise probability attached to a genuinely novel input is a name where only a shape is licensed. Fig 12 :125 "A composition costs in two currencies, and they do not add": a number is cheap in bits, a settlement costs actions.

**Verdict for the question as posed.** Under current training and evaluation practice, the report mainly reflects the limits of training and evaluation, because the anchor that would establish the reliability horn is usually absent. This is the limits horn, not a proof that no useful signal exists. Fig 8 :39 "So a search that finds nothing is never a proof of absence."

## 3. What it explicitly does not say

- Not that models never signal anything about novelty. The empirical literature has positive results on OOD detection (Hendrycks and Gimpel, 2017) and on methods that survive shift better than post-hoc calibration (Ovadia et al., 2019). Whether those signals range against a genuine anchor was not settled here.
- Not that calibration is useless. It is a budget filter (Fig 9 :60), not a verdict. "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."
- Not a measurement, not a new primitive, and not a derivation of one theory from another.
- Not `grounded`. No source-discriminating instrument was run in this derivation.

## 4. What would settle it, the ground

A source-discriminating instrument, not a further argument. The essay The Hard Problem is About Source gives the model: an instrument that reads green "cannot comment on the source"; the spectrometer resolved it, not an argument. Here:

- **Anchor test:** does the uncertainty signal track ground-truth error on inputs provably disjoint from both training and evaluation, stable across two or more independent model families? That is an anchor that does not move when the model changes its mind (Fig 2 :29).
- **Source test:** can an instrument distinguish aleatoric noise in the input from epistemic absence in the model on the same case? Kendall and Gal (2017) separate the two in principle; the figure asks for a case-level discriminator.
- **Currency test:** is the report's description cost being mistaken for its settlement cost (Fig 12 :125)? A demonstration that the number was paid for by the ground would move the claim toward `grounded`.
- **Standing refuters** from `01_figure_grounded_audit.md` section 4: a figure re-census licensing self-scoring; a ground-settled number; a partition boundary between the two conditions.

Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves." A better calibration score with no new contact with the unfamiliar input is not progress on this question.

## 5. The honest stop

**Unreached, not unreachable.** The question could be moved by an instrument. It is not moved by agreement among frames, because Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." The framework returns a shape with a written refuter and stops at the limit of what the available instruments distinguish, recording the lineage so the stop is checkable.

## 6. One-paragraph version for outreach

> The question bundles two things: calibration on familiar inputs and detection of unfamiliar ones. They must be searched separately, not averaged, because a good average hides the one unfamiliar slot. The Tether says that a model's own confidence cannot establish that the confidence is reliable, since a frame cannot score itself with a quantity it produces. It also says a model inside its own closure cannot tell "I have not seen this" from "I cannot represent this," so a low confidence flag reports the indistinguishability rather than the cause. Reliable uncertainty communication, if it exists, is therefore a shape: a refusal that ranges against an anchor outside the training and evaluation pools, not a precise probability the model scores itself. Under current training and evaluation practice that anchor is usually missing, so the report mainly reflects the limits of training and evaluation. This is a shape with a refuter written in advance, not a measurement. A source-discriminating instrument could reverse it; agreement cannot.
