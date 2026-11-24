# Structure, order and analogues for the uncertainty-message claim

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

The question names two failure modes, "unusable" and "misleading". Are they two ends of one quantity, or two compounds with different structures and different grounds? And in what order must an uncertainty message be assembled if it is to be checkable? The bridge analogy (metamerism, a spectrometer) needs a declared status: is it a governing figure line or only a corroborating analogue?

## DOMAIN CENSUS

Atoms held: per-slot residual `R`, the anchor (ground), the channel, the message as a molecule, `R_T` as the round-trip gap, bits (description cost), actions (checking cost), provenance, `gap`/`unreachable`, and the negation operator for refusal. Bonds held: ⋛ comparison (confidence is a threshold against a ground), → sequence (model then message then reader), − subtraction (the message is the full state with detail removed), and ¬ negation (a refusal of a claim). No new primitive is available without import.

## DERIVATION

### Q1 - Are "unusable" and "misleading" isomers, or two different molecules?

- Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
- Fig 12 :126: *"Bits price the description. Actions price finding out whether it holds."*
- Fig 12 :127: *"They are in different units, so a system holding one accounting cannot compare them and will not notice the shortfall."*

The two failures do not share an atom set. "Misleading" is a contact failure: the message does not range against an anchor it cannot move (F1, F7). "Unusable" is a cost failure: the description is too long, or the checking burden is too high, or a constant hedge has removed the reader's ability to act (F4). They are therefore **not isomers** under Fig 12's definition. They are two molecules over partly overlapping habitats: the misleading molecule uses the anchor and channel atoms; the unusable molecule uses the bits and actions atoms. They share the message slot, which is why a flat "uncertainty score" can make them look like one quantity.

- **Falsifier, written before the run:** if a controlled experiment shows that varying description cost and varying ground contact move a single decision-accuracy reading by the same amount with the same sign across tasks, the two-molecule claim fails and a common scalar may be admissible. Until then, keep two ledgers.

### Q2 - What is the ordered composition of a checkable uncertainty message?

- Fig 3 :20-21: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."*
- Fig 9 :27-28: *"describe it before you go looking, or any frame you pick will seem to fit."*
- Fig 10 :52: *"Bring a characterised residual, never the source."*

Order inside the message (a sequence bond, →, not a symmetric conjunction):

1. **Name the slot and the residual** (what failed to resolve, per claim). This is perception.
2. **Name the anchor for that slot** (outcome for truth, human judgment for usability). Do this before choosing a format. This is vocabulary and objective.
3. **State the committed part** with its ground and its provenance (Fig 8 :50-52). A claim without a source gate is an adopted import pretending to be convergent.
4. **State the owed part** in effect terms: what would change the answer, what is out of reach, what the compression dropped (`R_T`). Fig 4 :31-32 makes the gap the honest content.
5. **Price both ledgers separately**: bits to state, actions to check. Do not add them (Fig 12 :130).
6. **State the refuter** and the mode (`specified`, candidate) before asking for a verdict.

Reversing steps 3 and 2 is the named apophenia: picking "percentage" or "likely" and then looking for a residual it fits. Reversing 5 into a single score is the two-currency collapse. Both are structural failures, not presentation tips.

- **Falsifier:** a recipient who can correctly answer the ground-check question without ever seeing steps 1 and 2 would show that the order is decorative for that audience. The figure rule is general; the application would be refuted for that case.

### Q3 - What bond joins confidence to its ground?

- Operators table :48-52: ⋛ is *"a threshold relation between two quantities"*, with the test *"is it about which is larger, rather than both being present? Yes."* Fig 12 :52: *"a goal is a comparison, which is why a vocabulary without it cannot state one."*
- Fig 2 :29-30: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*

Confidence is not a noun attached to an answer. It is a **comparison** between a predicted correctness likelihood and an observed outcome, under a threshold the reader can inspect. A bare "90% confident" records the first operand and omits the second and the threshold, so the comparison cannot be re-run. This is why the message must carry the ground and the rule, not just the number. Conformal prediction (Angelopoulos and Bates) supplies a full ⋛ molecule: a user-specified 90 percent level and a distribution-free coverage guarantee over held-out outcomes. That is a legitimate import (Fig 6 :23), with its provenance recorded.

- **Strain, named:** at the message level the operands of ⋛ are a reported level and a measured frequency over outcomes, which are quantities. If a reader tries to apply ⋛ directly to a qualitative word such as "likely", the operand type fails. The word is a lossy encoding of a comparison, not the comparison. This is a strain in the application, not a correction to the operator.

### Q4 - Which analogues govern, and which only corroborate?

- **Metamerism / spectrometer** (*The Hard Problem is About Source*): one reading, several possible sources; the instrument cannot comment on the source, and only a better instrument resolves it. This is a **corroborating analogue** for F1 and F7, not a governing figure line. The governing lines are Fig 2 :37-38 and Fig 10 :24-29.
- **Conformal prediction** (Angelopoulos and Bates, 2021): an imported atom with a source gate and shadow test. Governing lines Fig 6 :23 and Fig 8 :50-52.
- **HEAR** (Zhao et al., EMNLP 2024): a habitat intervention measured at the ground, 80 users, 13 percent success gain. Governing lines Fig 11 :39-40.
- **Steyvers et al.** (Nature MI, 2025): a negative result for the "more words is better" binding. Governing line Fig 12 :126-130.
- **PredActBench** (2026): a negative result for current practice under tool noise. Governing lines Fig 10 :24-29 and Fig 2 :35.

Mixing these levels is the error this census prevents. An essay analogue is not a figure line; an import is not a derivation; a world measurement is not the verdict.

### Q5 - Is the answer reachable with what is held?

- Fig 13 :115: *"The set is closed. The arrangements are not. That gap is why import exists."*
- Fig 8 :32: *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."*
- Fig 13 :134: *"Unreachable is a verdict here, not a silence,"*

The shape is reachable: it composes from atoms already held (residual, anchor, channel, gap, two currencies, provenance, refusal). The specific verbal form is **not** reachable from those atoms, because it requires an atom from the human-factors frame (a measured decision-accuracy instrument over readers). Under formula step 7, that is an OUTWARD move: characterize R in effect terms first, then find the frame whose closure predicts its shape, with a source gate and shadow test and debited against independence. Until that import occurs, the correct output for the verbal form is `gap`, not a guessed answer.

- **Falsifier:** a derivation of an optimal verbal form from the figure atoms alone, with no world import and no reader measurement, would break this claim. It would also break the canonical "shape, not a name" limit, so it should be treated as a re-census trigger rather than a minor correction.

## CONCLUSION

The two failure modes are **not isomers**: they are different molecules over partly overlapping habitats, and summing their costs is the named two-currency error. A checkable message has a **dependency order**: residual, anchor, committed claim with provenance, owed part with `R_T`, two separate prices, refuter and mode. Confidence is a **comparison bond** (⋛) whose second operand and threshold must be present, not a noun. The metamerism story is a declared analogue, not a governing line. The shape is reachable from held atoms; the verbal form is a declared `gap` pending a provenanced import from human-factors research.

This **rescues** what is defensible about the question without inventing a UI: the structure and order of a checkable uncertainty message, with an honest stop. It refuses the single score and the self-certifying number.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical figures README, `THE_FORMULA.md`, the seat map field guide, four essays, and six arXiv papers, all opened this session. No reader experiment was run.

## FIGURE CENSUS

Fig 3 (dependency order), Fig 4 (lossy transform, gap as content), Fig 6 (import, wall), Fig 8 (provenance, idempotence), Fig 9 (describe before looking, union), Fig 10 (channel, verifier non-access), Fig 11 (habitat), Fig 12 (isomer test, two currencies, comparison), Fig 13 (closed set, unreachable verdict), Operators (⋛ type). Strains after re-census: one application-level operand-type strain for ⋛ over a verbal word, named in Q3; no governing strain.
