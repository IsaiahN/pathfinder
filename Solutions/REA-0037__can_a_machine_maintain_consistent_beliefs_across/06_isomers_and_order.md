# Bond type, dependency order and isomers in belief maintenance

**Mode: `specified` on the derivation, `general` on the bond-type distinction.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

Two ordinary phrases in the question hide structure. "Maintain consistent beliefs" treats consistency as a symmetric relation among held terms. "Changing evidence" treats revision as an ordered relation from new observation to revised belief. Are these the same relation under different names, or different bonds over a shared atom set? And in what order must the components of a revision system be built?

## DOMAIN CENSUS

Atoms available without import: a held term, an observation `o'`, a residual `R` indexed per slot, a candidate φ, a refusal ¬, an anchor, a channel, a transcript or lineage. Bonds available: the seven binary bonds of Fig 12 plus the unary negation operator (Operators table). No new primitive is licensed.

## DERIVATION

### Q1 - Is "consistency" a symmetric bond and "revision" an ordered one?

- Fig 12 :46: *"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."*
- Operators table: `+` conjunction is symmetric, test *"swap the operands. Does the meaning change? No."* `→` sequence is ordered, test *"swap them. Does it become a different thing? Yes."* `⋛` comparison is ordered, *"is it about which is larger, rather than both being present? Yes."* `¬` negation is unary, *"is the point that it is false, rather than absent? Yes."*
- Internal coherence C1 is `A + B`, both held at once. Swapping A and B changes nothing. It is the flat formula's only bond: *"the only bond in a flat formula, which is why a formula records ingredients and not arrangement"* (Operators table).
- Revision is `o' → ¬A` or `o' ⇒ B`: an observation precedes and produces a change. Swapping the operands gives a different thing. The anchor relation is `frame ⋛ anchor`: a threshold comparison, not a mutual update.
- **Result:** C1 and C2 are not two names for one quantity. They are different bonds, and a vocabulary holding only `+` can say what a machine contains and cannot say what would count as getting somewhere from it. Fig 12 :111: *"A vocabulary without bonds can name a state and cannot name a route to one."*
- **Falsifier, written before the run:** exhibit a system in which swapping an observation and a held belief leaves the revision behaviour identical in every tested case, with no anchor consulted. If that holds, the ordered-bond reading is wrong and C1 and C2 collapse into one symmetric quantity.

### Q2 - Is refusal a bond?

- Fig 12 :112-113: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."*
- Operators table :70-74: *"Seven of the eight are bonds... Negation joins nothing, so its symmetry entry is empty rather than no."*
- Refusal takes one operand and yields a term. It does not join an observation to a belief. Where a system has `−` (subtraction) but not `¬`, it can say what is missing from an arrangement and cannot say that an arrangement is false: *"A vocabulary with − and without ¬ can say what is missing from an arrangement and cannot say that an arrangement is wrong, so it can only ever accumulate"* (Operators table :73-74).
- **Result:** "removing a belief from memory" is not the same as refusing it. The former is subtraction; the latter changes the reach while leaving the record intact (Fig 5 :55). A machine can delete an obsolete fact and still have no way to carry the correction.
- **Falsifier:** a system whose "refusal" is implemented purely by deletion, where the deleted term's standing to be composed over is not removed but the record still shows the correction as available. If the correction cannot be recomposed, the figure's distinction collapses in practice even if it holds in notation. Recorded as a live type question, not hidden.

### Q3 - What is the order of dependency?

- Fig 3 :20: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."*
- Mapped to this question:
  1. **Perception.** Register `o'` through a channel that still resolves differences (Fig 10 :25-28).
  2. **Vocabulary.** Have terms for what the evidence affords, including a refusal term and a bond type (Fig 12 :115).
  3. **Objective.** Say what counts as progress per slot, a shrinking residual, not "consistency."
  4. **Planning.** Choose a revision under incomplete information.
  5. **Learn and carry.** Name what worked, verify it, carry a method rather than a recording (Fig 4 :22-25).
- Fig 3 :24-27 names the middle link as the usual break: having terms for what a situation affords and being able to say what would count as progress has neither an obvious failure nor an obvious test.
- **Result:** the link that matters for belief consistency is link 3, the objective. A machine can register new evidence and have a dictionary of facts and still have no term for "this belief has stopped predicting." Where the break is, adding context or memory is effort above the break.
- **Falsifier:** show a system with a working, instrumented objective term (per-slot residual that is actually read) whose failure is entirely at perception or planning, with vocabulary complete. Then the middle-link claim is wrong for that system.

### Q4 - Are two belief-maintenance arrangements isomers?

- Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
- Fig 12 :124: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*
- Consider two systems over the same atom set `{held term, observation, residual, anchor, channel, refusal}`:
  - **System P** weights the held term above conflicting context. The dominant bond from observation to belief is confirmation, `+` with the held term. The anchor is read after the belief is fixed.
  - **System C** weights coherent context above the held term. The dominant bond from observation to belief is sequence, `→`, and the anchor is read before the belief is fixed.
- Over the shared atom set these are **isomers**: same atoms, different bonds, different behaviour. The knowledge-conflicts survey read this session found that models favor *"knowledge that is semantically coherent, logical, and compelling"* over generic conflicting information, and that a *"strong confirmation bias"* favors information consistent with internal memory (Xu et al., EMNLP 2024). Those are two different arrangements of one vocabulary, not one mechanism with a different parameter.
- The weaker claim is a **functional group**: both systems have the shape `belief ⋛ anchor` with a channel and a refusal, so they are members of one kind with different qualifiers. As written by any real machine, only the functional-group claim is safe; the isomer claim requires that both use the full shared atom set with no substitution.
- **Falsifier, written before the run:** if either system requires an atom the other does not (for example, one has no anchor reading at all, or no refusal operator), the isomer claim fails and only the functional-group reading stands. The machine side is unmeasured here, so the isomer claim is `specified` and not upgraded.

### Q5 - What does the room chain add?

- Fig 7 :36: *"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."*
- Fig 7 :26: *"progress per handoff: R = h² × S"*, with fidelity and ground pressure as the two factors (Fig 7 :37-39).
- A belief carried across a long conversation is a molecule crossing a membrane (Fig 4). What may cross upward is a method, not a recording of one occasion: *"A recording carried upward looks like knowledge and is a description of one occasion."* (Fig 4 :25). A transcript is a recording. A rule for re-deriving the belief against the anchor is a method. Handing the transcript forward and treating it as settled is the mirror chain.
- Fig 4 :30 requires the round trip: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* `R_T` is the gap between the belief as held and the belief as re-derived at the next turn.
- **Falsifier:** a long conversation whose per-turn `R_T` is measured at zero across all slots without any re-derivation step. That would show the round trip is unnecessary and break Fig 4 :30 as applied here.

## CONCLUSION

The two ordinary phrases are different bonds over an overlapping atom set, not one quantity. Coherence is symmetric and cheap; revision is ordered and needs a refusal that is unary, not a subtraction. The chain breaks at the objective link, where a machine needs a per-slot residual it can actually read. Two arrangements over the same atoms are isomers in the figure's sense, but only the weaker functional-group claim is safe without a machine measurement. The order is perception, vocabulary, objective, planning, carry; effort spent above a broken objective link cannot rescue it.

This rescues what is defensible in the question without inventing a mechanism: the shape of a belief-maintenance system is stateable, its bond types are checkable, and its failure order is fixed. Which machine instantiates it is a ground question.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` (Figures 3, 4, 5, 7, 12 and the Operators table), plus `THE_FORMULA.md` and the world sources recorded in `10_source_ledger.csv`. No machine measurement was used.

## FIGURE CENSUS

Fig 3 (dependency order, middle link), Fig 4 (method versus recording, round trip), Fig 5 (refusal adds, reach falls), Fig 7 (mirror chain, two factors), Fig 12 (bond types, negation not a bond, isomer, functional group), Operators table (symmetric versus ordered, unary negation). Strains after re-census: one live, the implementation of refusal as deletion (Q2); the isomer claim's shared-atom condition (Q4) is named, not hidden.
