# Order and structure: bound versus unbound, catalyst versus spent part, refusal versus re-fit

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §7).

## RESIDUAL

The main audit left three structural questions open. (1) Is "reasoning about an assumption" one operation or two orders of object? (2) Is a self-monitor that corrects a system a catalyst or a spent part? (3) Is refusing an assumption the same kind of operation as re-fitting one, and are two differently arranged monitors different substances or two spellings of one? These decide whether the four verdicts in `01` can be composed or are being conflated.

## DOMAIN CENSUS (supporting)

Atoms held: the library Γ, bound terms, the per-slot residual R_s, the ground, the negation operator, the seven bonds. Bonds used: → sequence, − subtraction, ⋛ comparison, + conjunction. No new primitive is available without import. The five domains D1 to D5 from `01` are inherited; this file works inside D1 and D4 and does not redraw the boundary between them.

---

## Q1: bound term versus unbound preference is an order difference, not a degree difference

- The README: *"what a missing thing would have to look like (a shape, not a name)."* The subject is a primitive not held in Γ.
- Fig 5 :58: *"The candidates are ENUMERABLE rather than intuited: every term currently bound and generating a prediction is a candidate for being the wrong one."*
- Fig 5 :62: *"A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term. It is not bound, it predicts nothing, and it accrues no"* residual.
- Fig 12 :104: *"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."*

A bound term has crossed the admission gate and can be an operand at the next level. A preference has not. So the difference is not "more or less accessible"; it is **whether the object exists as an atom at the level where checking happens**. This is a level fact (Fig 12 :104), not a property of the system's intelligence or honesty.

**Correction to my own `05` §5, restated here.** I earlier wrote that "shape, not a name" forbids naming any internal term. It does not: it governs a missing primitive. Naming a held term is a binding and is allowed. What is forbidden here is treating the unbound direction as if it were a bound term already in the library. **Retracted as applied to bound terms; kept as applied to the direction.** Triangulated (README + Fig 5 :58/:62 + Fig 12 :104).

## Q2: a monitor that survives its own use is a catalyst; a one-shot calibration is a spent part

Fig 12 :119: *"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."*

World witness (Wikipedia, *Runtime verification*, opened 2026-11-23): a monitor can be integrated into the system or provided as an external entity, and it can send *"feedback to the system to possibly correct false behaviour."* The engineering literature records two cases the figure separates:

- **Catalyst monitor.** The specification is an imported atom that persists. Every use regenerates it. The system can range against it repeatedly because the reference does not update on the system's reports. This is the legitimate internal monitor, and it is legitimate *because* the spec came from outside the frame (Fig 6 :23).
- **Spent part.** A calibration fitted once to a batch of data and then consumed. It behaves correctly on that occasion and cannot say that an arrangement is wrong on the next one. The record does not mark which a term is, so the system cannot tell them apart from the inside. This is the failure mode that makes "self-monitoring" a label rather than a mechanism.

Fig 12 :119 predicts that a system holding both will not notice the difference. The discriminator is provenance: where did the specification come from, and does it survive its use? This is the same shadow test as Fig 8 :12-14 applied to a monitor.

**Falsifier, written before the run:** if a one-shot calibration and a persistent imported specification are behaviourally and record-theoretically indistinguishable across repeated use with a changing ground, the catalyst/spent-part distinction does not apply here and this finding is withdrawn.

## Q3: refusal is unary, re-fitting is binary, and the order is fixed

- Operators table :70-74: negation acts on a single operand, joins nothing, and is not a bond. *"A refutation is a negation, which is why a vocabulary without it can only accumulate."*
- Fig 12 amendment :139-140: *"Without a unary operator a system can write what a situation contains, what follows what, and how far along it is - and it cannot write that any of those is false."*
- Fig 5 :13: *"mis-attached: refit what you have, do not invent"* versus :53: *"refuted: a term we hold is wrong; a term is owed that says so."*
- Formula step 2: the fifth kind sorts R by what is WRONG, and *"no arrangement of the other four reaches it."* The order is refuse first, then mint (Fig 5 :65-68; audit §5).

A system with only subtraction can say an operand is absent (Fig 12 :81 *"A with B removed or absent"*). It cannot say an arrangement is false. A system that re-fits a false assumption as if it were merely mis-attached will keep a term that should have been refused, and the reach will not fall when it should (Fig 6 :42-46). The order is a design constraint, not a preference.

**Falsifier:** if a system can record and act on "this assumption is false" using only binary bonds and subtraction, with no unary refusal operator and no import, the operator claim is retracted.

## Q4: two monitors over the same atoms are isomers, not spellings

Fig 12 :117: *"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*

Take two systems with the same atoms: Γ, a per-slot residual, a ground and a specification.

- **System A (internal monitor):** specification → system, with the specification authored inside the frame. Bond: → sequence inside one closure. By Fig 2 :34 the reference updates with the author; the drift is coherent and nobody notices. A and its own report are one frame wearing two names (Fig 8 :48-49).
- **System B (external monitor):** specification imported with a source gate and a shadow test (Fig 8 :12-14), monitor ranges against the ground separately (Fig 2 :45-46). Bond: an import across differing closures, then ⋛ comparison between the held term's prediction and the ground.

Same ingredient list, different bond, different substance. Over the fixed atom set they are figure-12 isomers. The difference is invisible in a description that lists only "a system with a monitor"; it is decisive in behaviour, because only B can detect that a held assumption no longer applies.

**Falsifier:** if A and B converge to the same verdict on a held assumption under a ground that moves independently of both, and A's specification is demonstrably authored inside its own frame, the isomer claim fails and the distinction collapses to a provenance label only.

## Q5: the round trip from "self-monitoring" back to the four verdicts loses three constraints

Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

1. **Sent up (x):** the verbatim figure set (Fig 1 :19/:27, Fig 5 :58-68, Fig 8 :34-43, Fig 9 :16-20, Fig 10 :42-52).
2. **Abstraction (T_A):** "a system can monitor itself; detection needs an external ground; whole-set certification is out."
3. **Concretisation (T_E):** an engineering claim such as "a runtime monitor proves the system reasons about its assumptions."

Three constraints do not survive the trip back down: the per-slot index of R (Fig 1 :19), the unary refusal operator (Q3), and the non-updating-anchor condition on the imported specification (Q2). The shorthand makes all three look like implementation details. They are the claim. `11_audit.md` records this as R_T qualitatively, with the same three dropped constraints.

## CONCLUSION

The supporting derivation rescues the useful distinctions without adding a primitive. Bound and unbound are different orders of object, not different degrees of access. A persistent imported monitor is a catalyst and a one-shot calibration is a spent part, and the record does not distinguish them for you. Refusal is unary and ordered before minting; re-fitting is binary and cannot carry a falsehood. Two monitors over the same atoms are isomers, and the bond, not the ingredient list, decides which one can detect failure. No new atom, no wall-moving import and no seventh term is required for any of these claims.

## ANCHOR

Verbatim figure text extracted from the canonical figure files this session; the eight essays (four opened directly, four carried from the exemplar's canonical mapping); the runtime-verification and calibration world sources in `10_source_ledger.csv`. No measurement was used.

## FIGURE CENSUS

Fig 1 :19/:27; Fig 2 :34/:45/:46; Fig 4 :30; Fig 5 :13/:53/:58/:62/:65-68; Fig 6 :23/:42-46; Fig 8 :12-14/:48-49; Fig 9 :27-28; Fig 10 :42-52; Fig 12 :81/:104/:117/:119/:139-140; Operators table :70-74; Formula step 2 and "Direction"; canonical figures README. Strains after re-census: the S3 conditional (external-specification monitor) and S4 (ground type for formal assumptions) remain named in `01` §6; nothing else strains.
