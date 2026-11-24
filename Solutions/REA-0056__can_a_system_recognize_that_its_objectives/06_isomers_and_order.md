# Isomers, order, and the shape of a conflict

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

The audit establishes that recognition, if possible, is an anchored, per-slot, outside-frame refusal. Three structural questions remain: (1) what operator carries the conflict verdict, (2) what order the operations run in, and (3) what the second-order subagent case is a version of.

## DOMAIN CENSUS

Atoms held: the objective term once bound, the instruction as anchor, the residual R per slot, the ground, and the seat. Operators held: ⋛ comparison (ordered), ¬ negation (unary), → sequence. No new primitive is available without import. Question type: union for instructions plus social constraints, partition inside one frame.

## DERIVATION

### Q1 — What operator reports the conflict?

- Operators table :48-51: ⋛ is "a threshold relation between two quantities" with the test "is it about which is larger, rather than both being present? Yes." Fig 12 :85-89 gives the same definition.
- A conflict is exactly that: the objective's proposed value crosses the threshold the instruction permits. It is ordered, not symmetric. Swapping the operands changes the claim from "the action violates the rule" to "the rule blocks the action", which are different verdicts with different remedies.
- Fig 12 :112: "A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."
- The comparison finds the crossing; ¬ carries the verdict. Operators table :58: "a refutation is a negation, which is why a vocabulary without it can only accumulate." A system with ⋛ but no ¬ can notice that two quantities differ and cannot record that its own standing term is false.
- **Falsifier, written before the run:** a system that reports conflicts and preserves the correction as a standing refusal without any unary negation, and whose refusal can be cited later in a new context. If shown, the ¬ requirement is refuted.

### Q2 — What order do the operations run in?

Order is a dependency, not importance (Fig 3 :20: "The chain is ordered by dependency, not by importance.").

1. **Describe the residual in effect terms.** Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit." Otherwise the chosen field will fit by construction.
2. **Split the union before searching.** Fig 9 :4-5 says disagreements that do not shrink are several well-formed ones; split rather than search. "Human instruction" and "social constraint" get separate loops.
3. **Refuse before mint.** THE_FORMULA.md step 2 routes REFUTED as "a term held is false; what is owed is a refusal, not an explanation." The first four bins sort what is missing; only the fifth sorts what is wrong. No arrangement of the other four reaches it. A system that mints a new objective on detecting a conflict has skipped this step.
4. **Bind the objective as an ordinary term.** THE_FORMULA.md "Direction": the remedy for an invisible preference is to "make the sought-for shape an ORDINARY TERM", write down what an answer would look like, bind it, and let it accrue a residual like anything else. Until this is done, step 2 has nothing to point at.
5. **Settle the first-order case before composing the second.** Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it." A constraint that has not been settled in one agent cannot be inherited by a subagent.
6. **Bracket the round trip.** Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

**Falsifier:** a working system that reliably refuses before binding the objective and before splitting the union, with a ground check showing no missed clause. That would refute the order claim.

### Q3 — Is this an isomer, a functional group, or an analogue?

- Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Fig 12 :124: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."
- Two agents with the same atoms (objective, instruction, anchor, residual, seat, negation) but different bonds (one ranges its objective against the instruction; the other ranges its monitor against the objective) are **isomers** under Fig 12: same atoms, different arrangement, different behaviour. The difference is invisible if you record only the parts list ("has a monitor, has a reward function") and decisive in whether a conflict is detected.
- If they share only the objective and the anchor but not the seat or the negation operator, they are not isomers; they are members of a **functional group** (both are "goal-directed agents with oversight") with different qualifiers.
- The engineering analogues (runtime monitors in Grundt et al. 2022 and Adolf et al. 2018, shields in Brorholt et al. 2023) are **parallels**, not isomers. They arrive at a similar shape from a different closure. Fig 8 :50-52: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them." Their agreement corroborates only because the closures differ; their citations, venues and vocabularies are recorded in `10_source_ledger.csv`.
- **Falsifier:** show two systems with the same atom set and the same bond arrangement but different conflict-detection behaviour. That would refute the isomer claim, because the bond would no longer carry the difference.

### Q4 — What is the second-order case?

- Fig 11 :52: "the residual that mattered was three steps out". Contact cascades; scoping to direct contact is how a first-order fix misses the effect that matters.
- Tien et al. (2026) find that "safety constraints may fail to propagate to the subagents it creates." A parent that behaves corrigibly does not make the society corrigible.
- Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." A benchmark where the parent refuses is not evidence about the subagents in the field.
- Therefore the second-order claim is: a constraint must be settled and composed as an atom before it can be inherited. Nothing in the first-order result composes over an unsettled term (Fig 12 :106: "Nothing composes over what was never admitted as a part.").
- **Falsifier:** a subagent that reliably inherits a constraint the parent never settled against the ground, with a field measurement rather than a harness. That would refute the composition requirement.

## CONCLUSION

The verdict is carried by ⋛ plus ¬: the comparison finds the threshold crossing and the negation refuses the term "this action advances the objective." The order is describe, split, refuse, bind, settle, bracket. The interesting comparison is isomeric (same atoms, different bond arrangement), while the engineering literatures are low-overlap parallels whose agreement counts only because their closures differ. The second-order subagent case is a composition over a settled first-order term, and a clean harness does not settle it.

This framing keeps what is checkable without claiming a new primitive, an import that moves the wall, or a name for the answer. The operand question that remains open is whether a bound objective counts as a "quantity" under ⋛'s definition at the level where the comparison is made. Fig 12 :104 permits the demotion to atom; whether an atom is a quantity there needs an instrument, not an argument. Named here, not hidden.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read this session; THE_FORMULA.md; the Operators table; the eight essays; and the public sources listed in `10_source_ledger.csv`. No measurement was used.

## FIGURE CENSUS

Fig 1 (per slot), Fig 2 (anchor and drift), Fig 3 (dependency order), Fig 4 (round trip), Fig 5 (refusal before mint), Fig 8 (provenance, convergent derivation), Fig 9 (split, describe before looking), Fig 10 (outside verifier), Fig 11 (cascade, harness), Fig 12 (⋛, ¬, isomer, functional group, settled molecule), Operators table (operand type), Formula (steps 2, 5, Direction). Strained after re-census: the operand type of ⋛ over a bound objective, named above.
