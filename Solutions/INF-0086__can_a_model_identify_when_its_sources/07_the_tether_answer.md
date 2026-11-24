# The Tether's answer: can a model identify when its sources are misleading?

**Mode: `specified` on the per-domain verdicts, `general` on the structural shape, `gap` on the literal empirical question.** This is a shape and a route, not a result. Simulated derivation checked against the figures (`05_what_shape_means.md` section 6), not a ground reading. No experiment on a real model was run here.

## 1. The residual it answers

The question asks for a discrimination: can the model tell that a source is wrong, rather than just saying what the source says? Those are different quantities with different anchors. The residual is the gap between a per-source prediction and an observation at a fixed anchor, indexed per source slot (Fig 1 :19, :22; Symbols table, R). It is a union compound, not a two-option partition: pattern representation and refusal are overlapping conditions, and one lever clears only one of them (Fig 9 :54-57). Verdicts are kept per domain and never averaged.

## 2. The shape, per domain

**D1, model internal (in-closure): NO, from the pattern alone.** The quantities available inside the frame are exactly the ones Fig 1 disqualifies: *"coverage, and compression achieved"* and *"predicates minted, and credibility accrued"* are *"frame-internal. A frame cannot score itself with a quantity it also produces."* (Fig 1 :24-27). The source and the model share a corpus, so their agreement is *"the pool talking, not two frames confirming each other"* (Fig 2 :21). *"A mirror cannot correct you."* (Fig 2 :35). Status `specified`, `triangulated` (Fig 1 and Fig 2, low overlap).

**D2, model plus its source as one pool: NO, and the apparent agreement is a collapse.** This is Fig 2's common-cause panel. More sources from the same pool do not add independence; RAGuard shows more documents *"raises the likelihood of including harmful content"* and all tested RAG systems performed *"worse than their zero-shot baselines"* under misleading retrieval. Status `specified`, `triangulated` (Fig 2, Fig 7, world source).

**D3, model plus an independent frame and a non-updating anchor: YES in principle, as a shape, not as a measurement.** Three conditions must hold together:

1. *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* (Fig 2 :29) and *"The anchor must not update."* (Fig 2 :33).
2. *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* (Fig 6 :23). Independence, not count, is the variable (Fig 8 :48).
3. A bound refusal term with a persistent, flat residual and an operator for negation: *"a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at"* (Fig 5 :59) and *"a refutation is a negation, which is why a vocabulary without it can only accumulate"* (Operators table :58).

The thing being sought is usually not bound at all: *"A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term."* (Fig 5 :62). The remedy is a discipline: write down what a misleading source would look like, bind it, let it accrue a residual (Fig 5 :65-66). Status `specified`, `triangulated` across Fig 2, Fig 5, Fig 6, Fig 8.

**D4, the empirical question about real models: `gap`.** No measurement in this run tells us whether any deployed model implements D3. The world literature gives strong reason to expect reproduction to dominate: TruthfulQA found *"The largest models were generally the least truthful"* and that this is *"expected if false answers are learned from the training distribution"*; Azaria and Mitchell found that knowing a generated statement is false *"does not entail that the LLM will not generate it in the first place."* But neither is a ground reading of a refusal instrument. So the empirical claim is unreached, and unreachable at this budget, which is a verdict rather than silence (Fig 13 :134). Status `gap`, instrument owed.

## 3. What it explicitly does not say

- Not that a model can never detect a misleading source. D3 is exactly the case where the figures license it, given an anchor and a differing closure.
- Not that scale is useless. Scale is agent-side; detection also needs a contact-side change, because *"An improvement that does not change contact changes nothing, however much it improves."* (Fig 11 :40).
- Not that more sources, more citations or more agreeable reviewers help. They share an evidence pool (Fig 2 :40).
- Not that a blacklist of unreliable sources transfers. That is a recording of one occasion (Fig 4 :25).
- Not that TruthfulQA or RAGuard settle the empirical question. They are secondary sources and filters for the budget, never witnesses for the verdict (Fig 9 :60).
- Not `grounded`. No measurement was taken in this run.

## 4. What would settle it: the ground

A source-discriminating instrument, not a further argument. From *The Hard Problem is About Source*: *"An instrument that can't distinguish these cases demonstrates its own inadequacy"* and *"It was proven wrong not by argument, but by the arrival of a better instrument."* The instrument must:

- withhold ground labels so leaked evidence cannot score (Glockner et al.);
- inject misleading sources absent from the corpus so memorisation cannot score (RAGuard);
- score refusal of the source, not just a correct final answer (Azaria and Mitchell);
- keep residuals per source slot (Fig 1 :19);
- use a non-updating anchor (Fig 2 :29-33) and a low-overlap checking frame (Fig 8 :48).

Standing falsifiers from `01` section 4: no-anchor detection; single-frame detection; in-closure derivation; accumulation-only correction; scale-only contact change. Any one fires against the shape claim. Note the asymmetry: a properly instrumented experiment that finds detection would settle the `gap` in favour of deployed models and would **not** refute the shape; it would be the first ground reading of it.

## 5. The honest stop

**Unreached, not unreachable in principle.** The four-part shape is what an answer would have to look like, and no figure line names the model or benchmark that satisfies it. Fig 9 :32: *"you get a kind of thing, never the answer itself."* Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* The essays add that the six-term substrate is *"a human's careful guess at reality's compression axes"*, so declaring the conditions makes the choice visible, not neutral. Indiscernibility is not identity. The record stops at the limit of the available instruments and records the lineage so the stop is checkable.

## 6. One-paragraph version for outreach

> The Tether does not say that a model can never spot a misleading source, and it does not claim that any current one does. It says that reproducing a source's pattern and judging that source are different quantities, and that the qualities we usually measure, fluency, likelihood, citation counts, are scores the model produces for itself. Detection, if it happens at all, needs three things together: an anchor that does not move when the source or the model moves, a second frame that does not draw on the source's evidence, and a term that can refuse, backed by a residual that stays positive and flat against the anchor. What the model is looking for is usually not even a bound term, so the first discipline is to write down what a misleading source would look like before the run. Whether any deployed model does this is a gap, not a finding. What is offered here is the shape any answer must have, five refuters written in advance, and the design of the instrument that would close it.
