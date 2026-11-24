# The Tether's answer: can alignment be defined precisely under disagreement?

**Mode: `general` on the split and the shape, `specified` on the per-domain verdicts, nowhere `grounded`.** Simulated derivation checked for internal consistency against the figures (`05_what_shape_means.md` section 6), not a ground reading. No measurement settles a contested value here.

## 1. The residual it answers

A system must be said to be "aligned," while the people it serves disagree about values, goals, and acceptable risk. The phrase "defined precisely" is ambiguous between a convention (a shared meaning that coordinates action) and a verdict (a ground-settled claim about what the system should do). These have different anchors and different failure modes. Choosing between them silently is what makes the question look harder than it is and easier than it is at the same time.

Per-domain verdicts, kept separate and never averaged, are in `01_figure_grounded_audit.md` section 8. This file synthesizes them.

## 2. The answer, in five moves

1. **Name the anchor and test whether it moves.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* "Human values as currently stated" moves when pushed, so it is not an anchor. It is the residual. Fig 2 :33: *"The anchor must not update,"* and :34 warns that if it does, *"everything drifts together, and the drift is coherent, which is why nobody notices."*
2. **Say yes for conventions, no for aggregate verdicts.** Fig 2 :41: agreement about shared meaning is *"efficient for a convention."* Fig 2 :40: the same agreement is *"disqualifying for a verdict"* about the world. Fig 10 :47: *"a convention that decides an outcome has stopped being one."* So a precise, violable convention is not only possible but required, because Fig 10 :17 says the convention *"makes the bug statable."* It is not a verdict.
3. **Keep the disagreement per slot.** Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* A single alignment score is not a precise definition of anything except the definer's chosen averaging rule.
4. **Split the union.** Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* "Values and goals" has no internal anchor and is bounded by Arrow's theorem (D2). "Acceptable risk" is partly an instrument question with a possible ground (D3). Their intersection needs its own loop.
5. **Deliver a shape, not a name.** Fig 9 :32: *"you get a kind of thing, never the answer itself."* The shape any candidate must have: non-updating anchor; per-slot residual preserved; convention separated from verdict; union unbundled; refusal clause present; author's stake declared. Which values a deployment should serve is a `gap` from the figures, owed to a ground reading or a provenanced import (Fig 6 :23).

## 3. What it explicitly does not say

- Not that alignment is undefined. It is precisely definable in two distinct senses, one of which must not be promoted to the other.
- Not that human judgment is useless. Fig 2 :37 makes it the right anchor where the question is constitutively about a person. It is an instrument, and can be wrong on axes it does not measure, for questions like "is this code correct" or "is this failure rate acceptable."
- Not that Arrow's theorem forbids decisions. It bounds one frame (D2); it says nothing about choosing under a convention or a ground.
- Not a specific utility function, value ordering, or risk tolerance. The figures return a shape. Naming content needs a source gate and a shadow test.
- Not that a constitution, a reward model, or a published standard is grounded by being precise. Fig 10 :18: *"a declared meaning is not a grounded one."*
- Not `grounded`. This is a `general`/`specified` result from a simulated derivation.

## 4. What would settle it, the ground

A source-discriminating instrument, not a further argument. *The Hard Problem is About Source* (2026-08-28): an instrument that reads green *"cannot comment on the source,"* and the spectrometer, not an argument, resolved the case. Here the corresponding tests are:

- **Anchor test:** exhibit an anchor that does not move when frames push on it, and show that each frame's correction against it is separately checkable (Fig 2 :46).
- **Per-slot test:** show from real rating data that the per-slot disagreement is recoverable, and that no single global score preserves it (Fig 1 :22).
- **Union test:** apply one lever to both conditions in a real deployment and measure what residual remains in the intersection (Fig 9 :56).
- **Convention test:** show that a precise rule can be violated and that a violation changes the record without changing the rule's meaning (Fig 10 :19).
- **Standing refuters:** the five in `01_figure_grounded_audit.md` section 6, written before this conclusion.

## 5. The honest stop

**Unreached for value content, not unreachable in principle.** Fig 13 :134: *"Unreachable is a verdict here, not a silence."* Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* The derivation stops at the limit of the instruments available here and records the lineage. The value-content gap is declared, not filled with a plausible list. *Indiscernibility is not identity.*

The second honest limit is my own standing: this derivation is simulated and framework-sympathetic. It has no independent witness. By Fig 2 :40 its agreement with the figures is one evidence pool talking, not corroboration.

## 6. One-paragraph version for outreach

> The Tether does not give a single precise definition of alignment under disagreement, because the phrase asks two different questions. As a convention, a precise definition is possible and useful: a shared, violable statement that makes the disagreement statable and gives everyone something to check. As a verdict about what a system should do, a single precise definition is not available by aggregating or negotiating the disagreement. Aggregation is bounded by Arrow's theorem, negotiation makes the anchor move (the framework's alignment figure says alignment is triangulation, not negotiation, and a mirror cannot correct you), and averaging disagreement into one score destroys the per-slot signal that said where the trouble was. The values and risk questions must be split, because they have different anchors. What the framework offers is the shape any candidate definition must have, a refusal clause, five falsifiers written in advance, and a declared gap where the value content should be. Which values a deployment should serve is not answered here; that requires a ground reading or a provenanced import, not a more precise sentence.
