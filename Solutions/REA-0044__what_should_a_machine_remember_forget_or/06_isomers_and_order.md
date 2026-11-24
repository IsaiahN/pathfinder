# Isomers and order in a machine memory policy

**Mode: `specified` for the machine application, `general` for the structural claims. Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).**

## RESIDUAL

F1 to F5 in `01` give three operations but do not fix their order, and the record/reach pair needs a structural account. Two questions are owed: (1) in what dependency order do record, refusal and compression have to be applied, and (2) are a retained method and a retained recording of one occasion isomers under Fig 12, or merely members of a functional group?

## DOMAIN CENSUS (already run in `01`, restated for this derivation)

Atoms held: terms, atoms, bonds, provenance stamps, refusals (¬), methods, head starts. Bonds held: all seven plus the unary ¬. Cost currency is bits; the settling currency is ground payment. No new primitive is available without import. Fig 6 :21: *"MINT composes inside the closure and can never add an atom."*

## DERIVATION

### Q1 What is the order of the three operations?

Fig 3 :20: *"The chain is ordered by dependency, not by importance."* The dependence is:

1. **Perception** gives R per slot (Fig 1 :19, *"The residual is indexed by object slot, not aggregated."*). Without this, no term can be singled out.
2. **Vocabulary** names the term that is generating the residual (Fig 3 :7).
3. **Objective** decides what would count as a smaller residual. This is where "whose interests" enters: the objective must be ranged against the ground, not against the frame's own compression score (Fig 1 :27).
4. **Refusal** is applied to the bound term whose residual persists and does not trend down (F5). It must come before compression, because compressing a term that should be refused would enshrine a wrong predictor in a reusable method. Formula step 3 (local) says *"a refusing term pays the same bargain"*, so refusal is a mint, not a cleanup.
5. **Compression** carries the surviving method upward (Fig 4 :8-9). It comes after refusal for the reason in step 4, and before any head start is sent down (Fig 4 :11).
6. **Carry** stamps origin and seq (Formula step 4, local) so that the next loop can read the lineage.

So the order is: perceive, name, range against ground, refuse, compress, stamp, repeat. A policy that begins by compressing everything and then pruning begins below the break; its later refusal arrives at a term that is no longer identifiable (Fig 3 :22-23).

**Falsifier, written before the run:** show a case in which compressing a term with a persistent flat residual improves the next ground reading as much as refusing it first, with no extra import. Then step 4 and step 5 commute and the order claim is withdrawn.

### Q2 Are a retained method and a retained recording isomers?

Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

Fig 12 :119: **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."**

Fig 12 :5: the bond carries information the operands do not, so a term naming only its ingredients has recorded half of itself.

Write the two candidates over the same atom set {term, occurrence, provenance}:

- **Method:** `term → (reapplied across occurrences)`, with the bond being a production or sequence that survives use. This is Fig 12's catalyst: a part that survives its own use. It can be sent down as a head start (Fig 4 :11).
- **Recording:** `term + occurrence`, a conjunction of one term with one occasion. Under a symmetric bond, all spellings are one term (Fig 12 :92), so the record looks compact but carries no route to a new occasion.

They share atoms and differ in bond. Therefore they are **isomers under Fig 12 :117** when written over the full atom set, and the difference is decisive in behaviour: one can compose at the next scale, the other can only be replayed (Fig 4 :25-26).

**Weaker reading.** If the "method" has never been settled against the ground, it is not a catalyst yet; it is a candidate with a recorded provenance. A vocabulary without settlement cannot compose over it (Fig 12 :106: *"Nothing composes over what was never admitted as a part."*). The isomer claim then degrades to a functional-group claim: both share the shape "retained term with provenance" (Fig 12 :124, functional group), but only one is a catalyst.

**Falsifier, written before the run:** show that a recording of one occasion can be composed over at the next scale as well as a settled method can, with no new term and no import. That breaks Fig 4 :25 and the isomer claim falls to the functional-group claim.

### Q3 What is the record/reach pair structurally?

Fig 6 :43: *"the closure and the reach are two quantities: one monotone, one not."* This is not a contradiction and must not be averaged. Structurally:

```
record(t+1) = record(t) ∪ {φ, ¬φ}        monotone
reach(t+1) = derivable(record(t+1))      can fall
```

A refusal is added, not subtracted, so the fall is safe to compute: *"a term is reachable if it is derivable under everything currently held, so what happens to terms built on a refuted one follows from derivation rather than being stipulated"* (Fig 6 :44). The record is the term (Fig 12 :130), so what is kept is the lineage, and what is "forgotten" is only derivability.

**Falsifier:** a system whose reachable set falls while its record and refusal set are unchanged. Then the fall was not derived and Fig 6 :44 is broken.

### Q4 Which bond does "forget" use?

Not subtraction. Fig 12 :80-82 defines `−` as *"A with B removed or absent"*, with the test *"is the second operand's absence the point? Yes."* Not negation-as-bond either: Fig 12 :112 says *"A refutation is a negation, and that one is not a bond."* ¬ is unary and is not priced in |bonds| (Operators table :77-78, local). So "forget" is an operator outside the bond set, acting on one term, and it leaves the record intact (Fig 5 :55). A memory vocabulary with `−` and without ¬ can say that a term is absent and cannot say that it is wrong; it can only accumulate (Operators table :74, local). This is the structural reason a deletion-only memory policy cannot correct itself.

**Falsifier:** exhibit a binary bond with the same effect as ¬ (refusal of a claim rather than absence of an operand) that passes all six bond tests. Operators table :68 (local) says a relation failing all tests is not a missing operator; the converse would need to be shown here.

## CONCLUSION

The order is perceive, name, range against ground, refuse, compress, stamp, repeat, with refusal before compression. A retained method and a retained recording are isomers over the shared atom set if and only if the method has been settled and can serve as a catalyst; otherwise the weaker functional-group claim holds. The record grows while the reach falls, and forgetting is the unary operator ¬ rather than any of the seven bonds. These are structural results about the shape, with mode `general` for the structure and `specified` for the machine application. They are not measurements of any deployed system.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` (Fig 1, 3, 4, 5, 6, 12), `THE_FORMULA.md` steps 3 and 4, `THE_SEAT_MAP_Field_Guide_amended.md`, and the eight essays. No measurement was used.

## FIGURE CENSUS

Fig 1 :19, :27; Fig 3 :20, :7, :22-23; Fig 4 :8-9, :11, :22, :25-26; Fig 5 :55, :58; Fig 6 :21, :42-44; Fig 12 :5, :80-82, :92, :106, :112, :117, :119, :124; Operators table :68, :73-78; Formula steps 3, 4. Strains after re-census: none. The apparent tension between ¬ as a unary operator and "forget" as a memory operation is resolved by treating forgetting as refusal, not removal (Q4).
