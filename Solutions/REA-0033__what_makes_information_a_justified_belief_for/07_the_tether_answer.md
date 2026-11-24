# The Tether's answer: justified belief versus high-confidence output

**Mode: `general` on the four-part shape, `specified` on the binding to machine components, not `grounded`.** Simulated derivation checked against the figures (`05_what_shape_means.md` section 6), not a ground reading.

## 1. The residual it answers

A machine emits an output with a high confidence score. The residual is the gap between "the model scores this highly" and "this output is warranted by something the model does not itself produce." It is a union of four conditions, not one hard problem (Fig 9 :54-57): holding the output with a tracked residual, settling it against an anchor, making it refusable, and carrying its lineage. A lever on confidence clears only the magnitude inside the first condition and leaves the intersection standing.

## 2. The shape

1. **Confidence is a budget, not a verdict.** Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces." Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." A confidence value is useful for deciding how much checking to spend. It is not evidence that the output is warranted.
2. **There must be an anchor that does not update on the machine.** Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :30: "If it moves when you push on it, it is not an anchor." A measurement, an experiment, a held-out ground truth, a second instrument. The anchor must be allowed to return "false" when the machine is most confident. Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."
3. **The anchor must be reached by a different closure, or by settlement.** Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Fig 12 :106: "Nothing composes over what was never admitted as a part." More search at fixed Γ adds no atom (Fig 8 :32). Sampling the same model repeatedly is one room (Fig 7 :35), not a second witness.
4. **The belief must be refusable.** Operators table :58: "a refutation is a negation, which is why a vocabulary without it can only accumulate." ¬ is unary, not a bond. A system that can only lower a number cannot carry a correction; a system that can negate can withdraw standing and let the reach fall (Fig 5 :54-55).
5. **The lineage is part of the belief.** Fig 13 :130: "A term carries the atoms it was built from and the bonds that joined them. That record is not documentation of the term. It is the term." Fig 10 :65: "Provenance shows a ruling was reached legitimately. It never shows it was right: the ground does that". Lineage is necessary and not sufficient; it travels with the claim, and it does not replace settlement.
6. **The discriminating variable is contact, not magnitude.** Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves." Fig 5 :48: "Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."
7. **The residual is per slot.** Fig 1 :19: "The residual is indexed by object slot, not aggregated." A high global confidence with one unread live slot is a legal state, not a solved one.

Putting these together: **a justified belief for a machine is an output that has been settled against an anchor that cannot be moved by the frame, reached through contact with a differing closure, held in a form the system can refuse, and accompanied by a lineage that is constitutive of the term, with confidence used only to budget the search for those conditions.** The framework returns this shape, not the name of an algorithm (Fig 9 :32).

## 3. What it explicitly does not say

- Not that any particular uncertainty method is the answer. Calibration, conformal prediction, Bayesian posteriors and verification protocols are bindings from their own frames, recorded with provenance (Fig 8 :50-52). `06_isomers_and_order.md` shows two of them are isomers, not aliases.
- Not that confidence is useless. It is a filter and a budget (Fig 9 :60).
- Not that a machine has beliefs in the human sense. The framework is domain-agnostic; b is a formal term, "Not the observation." (Symbols table :21).
- Not that provenance alone justifies. Fig 10 :65 says the opposite.
- Not that a benchmark settlement is the ground. "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." (Fig 11 :70)
- Not `grounded`. No measurement in this folder settles the binding.

## 4. What would settle it, the ground

A source-discriminating instrument, not a further argument. *The Hard Problem is About Source*: an instrument that reads green "cannot comment on the source"; the spectrometer resolved it. Here the corresponding questions are:

- Can an instrument distinguish a claim produced by reliable ground contact from one produced by fluent self-consistency, **given the same confidence value**? If not, the instrument cannot discriminate the two sources and is inadequate for this question (Fig 2 :30).
- **Contact test:** hold the machine's confidence fixed and vary its contact with the anchor. If justification status does not track contact, F10 is refuted.
- **Refusal test:** give the system a ground check that returns false on a held term. If it can only lower the score and cannot withdraw the term's standing, the shape's refusability condition is confirmed as necessary (F7).
- **Pool test:** run two checks that share weights and training data, and two that do not. If the first pair is counted as independent corroboration, F3 is refuted (Fig 2 :40).
- Standing refuters from `01` section 4: confidence alone suffices; provenance alone suffices; no negation needed; calibration survives a shift with no new contact; one pool counts as two witnesses.

## 5. The honest stop

**Unreached, not unreachable.** The binding of the shape onto a particular machine architecture is a choice visible in the record, not a discovery of the machine's own list. Fig 13 :134: "It cannot say which primitive is missing, because naming it would mean already holding it." The answer stops at the limit of the instruments available here and records the lineage so the stop is checkable. "Indiscernibility is not identity." A search that finds no discriminator is not proof that none exists (Fig 8 :39).

## 6. One-paragraph version for outreach

> The Tether does not offer a new definition of belief or a new uncertainty method. It says that a high confidence score cannot be what makes an output a justified belief, because confidence is a number the machine produces about its own output, and a frame cannot score itself with a quantity it also produces. What changes the output's standing is a relation: the claim must be settled against an anchor that does not move when the machine changes its mind, reached through contact with a different closure, held in a form the system can actually refuse, and accompanied by a lineage that is part of the claim rather than an appendix. Confidence stays useful as a budget for how much checking to do. The shape is stated before any mechanism is named, four refuters are written in advance, and the stop is recorded. Whether any particular machine satisfies the shape is a question for an instrument, not for this derivation.
