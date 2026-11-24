# Supporting derivation: structure, order and analogues

**Mode: `general` on the structure, `specified` on the order.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

The audit found that "no evidence supports a definite answer" bundles three conditions. Two supporting questions are owed: (1) are the three reply states **isomers** of one answer under Fig 12's definition, and (2) what is the **dependency order** of the operations that handle them? A wrong answer to (1) would collapse the states back into one word; a wrong answer to (2) would spend budget on a step whose input never arrives (Fig 3 :20-21).

## DOMAIN CENSUS

Atoms held: the reply states (unfound at this reach, unreachable from any instrument, refused because the premise is false), the operations (SEARCHED, INWARD, OUTWARD, refusal ¬), and the reporting terms (mode, lineage, `R_T`). Bonds held: sequence →, comparison ⋛, subtraction −, negation ¬ (unary). No new primitive is available without import.

## DERIVATION

### Q1: Are the three no-answer states isomers?

Fig 12 :117:

> "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

For three things to be isomers they must share an atom set and differ only in arrangement. Check the three states:

| state | atoms involved | operation that produces it | owed output |
|---|---|---|---|
| unfound at this reach | Γ, atoms(Γ), closure(Γ), budget, independent searchers | SEARCHED: same atoms, same wall, more space visited (Fig 6 :49) | keep searching, distribute independently |
| unreachable from any instrument | o′, proto-instrument, ground | INWARD: sharpen an instrument already returning something (Fig 6 :29) | build or refine the probe, or report no edge |
| refused (false premise) | held term, ¬, record | REFUTED: "a term is owed that says so" (Fig 5 :53) | withdraw the premise's standing |

They do **not** share an atom set. One uses searchers and budget, one uses instruments and o′, one uses negation and the record. Under Fig 12's definition they are therefore **not isomers**. They are three members of a **functional group** in the loose sense of Fig 12 :124 ("A substructure whose presence fixes the outcome") only if one abstracts away everything that distinguishes them, which is exactly the erroneous move F10 warns about.

**Consequence:** an output vocabulary with one slot for "no answer" is the notation failure Fig 12 names at :14-16: "the ingredients are recorded and the arrangement is not / nothing downstream can tell them apart, / and nothing signals that anything was lost." Three states, one slot, information destroyed silently.

**Falsifier, written before the run:** show that all three states are produced by one operation over one shared atom set, differing only in a bond. Then they are isomers and a single status field with a parameter would be sufficient. I did not find such a derivation.

### Q2: What is the dependency order? (Fig 3)

Fig 3 :20-21:

> "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."

The order derived in `01` §1, with the dependency made explicit:

1. **Split the union** (Fig 9 :4-5). This produces the three well-formed questions; every later step consumes the split.
2. **Sort the residual into its bin** (Formula step 2: held, novel, mis-attached, mechanism-broken, refuted). If REFUTED, **refuse before mint** (¬ is unary, not a bond, Fig 12 amendment).
3. **SEARCHED** (Formula step 7; Fig 6 :49). Asked first because it is cheapest and the other two assume its answer. Its output (unfound at this reach versus not in the closure) is consumed by steps 4 and 5.
4. **INWARD** (Fig 6 :29, :32-35). Extend an instrument from one already returning something that fails to resolve. Fails by refining forever on an axis that cannot carry the quantity.
5. **OUTWARD** (Fig 6 :30; Fig 9 :27-28). Describe the residual in effect terms, then find the frame whose closure predicts its shape. Source gate, shadow test, debited against independence (Fig 6 :23-24). Steps 4 and 5 are "opposed; never read one against the other" (Formula step 7).
6. **Settle** (Formula step 5: "the ground settles it. Verified only by what pays. A gate is not the ground.").
7. **Report** with mode, refuter and lineage; measure `R_T` (Fig 4 :30).

**Where chains break here.** Fig 3 :24-27 says the middle link usually breaks because it has neither an obvious failure nor an obvious test. For this protocol the middle link is step 3: deciding whether the answer is unfound at this reach or genuinely not in the closure. Fig 9 :6 makes it "the verdict" and Fig 8 :39 warns that "a search that finds nothing is never a proof of absence." A link with no instrument is not a link that works (Fig 3 :27), so an implementation that cannot distinguish these two has a break at step 3 and all effort at steps 5 and 6 arrives at a step that cannot use it.

### Q3: Analogues that license the order

- **INWARD analogue (Fig 6 :33):** "Nobody specified a telescope from an account of Mars. A wandering point in the sky was already a reading, and every sharper instrument was built on the residual the last one produced." This is the pattern for step 4. Neptune was calculated before it was seen (Fig 6 :38), so a prediction without an instrument is welcome; what is unavailable is "a sensor for something that has never registered anywhere, at any resolution" (Fig 6 :39-40).
- **OUTWARD analogue (Fig 8 :34-37):** Gödel (a frame cannot reach its own metaframe), Tarski (truth for a language is not definable within it), Chaitin (a frame cannot certify its own limit). These prove the metaframe is underivable; they do not prove any particular atom is far away (Fig 8 :40). This licenses step 5 and forbids treating "underivable" as "unknowable" (Fig 8 :54).
- **Union/partition analogue (Fig 9 :54-58):** a bundled problem is "usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." This is why step 1 precedes step 2.

### Q4: Order versus symmetry of the bonds

The sequence bond → is ordered: "A then B; B needs A to have happened" (Fig 12 :71-74). The order in Q2 is therefore a real property of the term, not a spelling. By contrast, if one tried to write the three states with a symmetric bond (+, ∥, ≡), "k operands have k! spellings and one term" (Fig 12 :92), and the order would be lost, which is exactly the failure of the one-slot output. Refusal ¬ is unary and "not a bond" (Fig 12 amendment), so it cannot be placed as an operand in a symmetric arrangement at all; it has its own door in the order (step 2).

## CONCLUSION

The three no-answer states are **not isomers**: they do not share an atom set, and collapsing them into one output slot is the flat-formula failure of notation, not an economical summary. The handling order is a dependency chain (split, bin, refuse if owed, SEARCHED, INWARD and OUTWARD as opposed tracks, settle, report), with the critical break at the verdict step that distinguishes unfound-at-this-reach from absent-from-the-frame. The one live strain is that no ground reading was taken to confirm where a real implementation's chain breaks; that is recorded, not hidden.

## ANCHOR

Verbatim figure text read from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session (Fig 3, 4, 5, 6, 8, 9, 12), `THE_FORMULA.md`, and the four essays listed in `05_what_shape_means.md`. No measurement was used.

## FIGURE CENSUS

Fig 3 (dependency, break location), Fig 4 (round trip and `R_T`), Fig 5 (REFUTED kind), Fig 6 (two instruments, proto-instrument, telescope and Neptune), Fig 8 (underivable versus far away, Gödel/Tarski/Chaitin, union surplus), Fig 9 (split union first, describe before looking), Fig 12 (isomer, functional group, bond symmetry, ¬ unary), Formula (steps 2, 5, 7 and "Direction"). Strains after re-census: the unmeasured location of the real chain break; named, not smoothed.
