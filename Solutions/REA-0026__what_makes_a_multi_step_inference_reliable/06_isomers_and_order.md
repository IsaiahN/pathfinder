# Structure, order and analogues of a multi-step inference

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

`01_figure_grounded_audit.md` established that reliability is a union of per-link conditions, not a scalar. Two structural questions are still owed: (1) what kind of object is a chain, so that "reliable" can attach to it at all, and (2) does the order of steps make a new substance or only a new spelling? A third, derivative question is which analogues (catalyst, cycle, functional group) the figures license for a chain.

## DOMAIN CENSUS

Atoms held: a step as a molecule of belief b, action a, prediction Γ(b,a), observation o' and residual R on slot s. Bonds held: the seven, plus negation. No new primitive is available without import. The chain is ordered (→ is asymmetric) and multilevel (a settled step becomes an atom at the next level). Actors: steps, bonds, ground, verifier. Currency: residual per slot, settlement, independence. Anchor: the ground, never agreement between steps.

## DERIVATION

### Q1 - A chain is a bonded arrangement, not a list of steps

Fig 12 :5: *"The bond is the rest of the information, and it is the half nothing was recording."* Fig 12 :111: *"A vocabulary without bonds can name a state and cannot name a route to one."* Fig 12 :112: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."* Operators table :34: *"the only bond a flat chain can express, so every term today is a sequence whether or not it should be"*.

A list of steps records ingredients and not arrangement. Nothing downstream can then tell two different routes apart, and nothing signals that anything was lost (Fig 12 :15). So the first structural requirement is that the chain be written as a molecule: steps as operands, typed bonds between them, and the bonds priced. The default notation (a flat sequence of tokens) silently forces every chain into → even when the relation is actually production, comparison or subtraction.

### Q2 - Which bonds govern a multi-step inference

- **→ sequence**, asymmetric. Fig 12 :72: *"A then B; B needs A to have happened"*, test: *"swap them. Does it become a different thing? Yes."* This is the backbone, but Operators table :34 warns it is the only bond a flat notation can express and is therefore over-used.
- **⇒ production**, asymmetric. Fig 12 :77: *"A produces B; B did not exist before"*. A step that mints a new term pays this bond; a step that only copies a reading does not.
- **⋛ comparison**, asymmetric, *"a threshold relation between two quantities"*. This is the bond between a chain's prediction and the ground's return, and the test *"is it about which is larger, rather than both being present?"* decides whether a residual is being compared or merely accumulated.
- **− subtraction**, asymmetric. Fig 12 :82: *"A with B removed or absent"*. Progress is a subtraction: the residual left after a step is what was removed from what was unexplained.
- **¬ negation**, unary and not a bond. Operators table :58: *"a refutation is a negation, which is why a vocabulary without it can only accumulate"*. A chain that can only accumulate residuals cannot withdraw a step it has taken. This is the structural reason F3 (settle before composing) cannot be replaced by later checking alone.

**Why this matters:** a verifier that only re-runs the same sequence has changed no bond. A verifier that adds a comparison against an unmoved anchor, or a negation of a held step, has changed the molecule. That is the structural content of F5 and F6.

### Q3 - Are two chains with the same steps but different order isomers

Fig 12 :117: *"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* Fig 12 :92: *"Symmetry is what decides whether an arrangement is a new thing."*

The answer splits by bond:

- Under a **symmetric** bond (+, ∥, ≡), k operands have k! spellings and one term. Reordering steps that are merely conjoined is not a new substance; it is overcounting by log₂(k!) (Fig 12 :93).
- Under **→**, which is asymmetric, different orders are different terms. Two chains with the same step set in a different order are **not** the same substance with a different name; they are different substances whose ingredient lists happen to match.

So the isomer claim for multi-step inference is real but narrower than it first appears. If the two chains are written as pure sequences, order already makes them different terms by construction, and "isomer" adds nothing. The interesting case is when two chains are written over the full shared atom set {residual, prediction, observation, anchor, verifier} and differ in which bond connects which pair: one uses ⋛ against the ground early, the other uses → until the final answer and only then ⋛. Those are genuine isomers: same atoms, different bonds, different behaviour. This is the structural version of F1 and F5.

### Q4 - Which analogues are licensed

- **Catalyst.** Fig 12 :119: *"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."* A verifier that survives its own use (an anchor that does not update, an instrument that can be re-read) is a catalyst. A confidence score that is consumed by the next step is a spent part. The figures require recording which a term is; the world literature's process-verifier work is an instance of making that distinction explicit.
- **Cycle.** Fig 12 :121: *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."* A purely sequential chain cannot self-correct. Self-correction is a cycle, and the sign of the loop decides whether it converges or diverges. This is Fig 13 :31-32 applied to structure: *"a remainder compounding through a chain that amplifies is chaos"*. A chain plus a negative feedback loop is a different molecule from a chain plus a positive one.
- **Functional group.** Fig 12 :123: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."* The per-slot residual check is a functional group: its presence fixes the kind of reliability claim being made, while the particular slot says which member.

## CONCLUSION

A multi-step inference is a bonded arrangement, not a list. Its reliability is a property of the arrangement and the bonds, which is why changing the checker from an interior reader to an outside anchor changes the molecule rather than merely its label. Under a symmetric bond, reordering is overcounting; under the ordered bonds that actually govern a chain, reordering creates a different substance. The licensed analogues are catalyst (a verifier that survives use), cycle (self-correction, absent from a pure chain by construction) and functional group (the per-slot check). None of these requires a new primitive; all are compositions over held atoms.

## FALSIFIER (written before the analogy search in §4 was completed)

If either of the following holds, this supporting derivation fails:

1. Two chains written over the same atom set, differing only in which bond connects prediction to ground, produce identical per-slot residuals and identical lineages on a held-out set of cases. Then the bond is not carrying the information claimed in Q2 and Q3.
2. A purely sequential chain with no cycle and no external anchor reliably self-corrects a propagated error across many runs. Then Fig 12 :121's "a chain cannot close by construction" does not govern this domain, and the census must be redone.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK\reference\03-FIGURES_TEXT.md` this session; the eight essays; the world sources in `10_source_ledger.csv`. No measurement was taken.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 2 (pinned anchor), Fig 7 (handoff fidelity), Fig 12 (bond, symmetry, priced arrangement, catalyst, cycle, functional group, two currencies), Fig 13 (alternation, amplifying remainder), Operators table (→, ⇒, ⋛, −, ¬ and the flat-chain warning), Symbols table (R, R_T). Strained after re-census: none. The operand type of ⋛ (two quantities) applied across levels remains an open item in `07_the_tether_answer.md` and is recorded there, not hidden here.
