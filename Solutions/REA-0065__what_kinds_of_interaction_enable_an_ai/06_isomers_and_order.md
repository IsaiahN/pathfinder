# Structure and order of the interaction shape

**Mode: `specified`, not `grounded`.** This is a simulated derivation checked against the figures, not a measurement of any system (see `05_what_shape_means.md` §6).

## RESIDUAL

The audit derived four necessary conditions plus two further ones. A second derivation is owed: how do those conditions compose, what order do they run in, and are two different interaction protocols the same thing under different names? A list of ingredients is not a molecule (Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information").

## DOMAIN CENSUS

Atoms held: system, person, situation, correction, ground, history. Bonds held: the seven, including `+` conjunction, `→` sequence, `⇒` production, `⋛` comparison, `−` subtraction; and the unary `¬` refusal, which is not a bond (Operators table). No new primitive is available without import. Fig 12 :46: "A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."

## DERIVATION

### Q1 : Is the answer a list or a molecule?

The conditions are joined by `+` (conjunction): all four must hold at once, and the product of guards applies in the sense that any condition at zero removes the result. Fig 12 :57: "both hold at once." But the *interaction itself* is not a flat conjunction. It has internal order: the system acts, the person responds, the response is compared with the prediction, and the comparison can refuse a held term. That is `→` followed by `⋛`, with `¬` available at the end. Fig 12 :72: "A then B; B needs A to have happened." Fig 12 :87: "a threshold relation between two quantities." The residual `R = |Γ(b,a) − o′|` is literally the comparison bond applied to prediction and observation.

**Consequence:** an artifact that records only "the system talked to people and got feedback" has recorded the ingredients and not the arrangement. Fig 12 :14-16: "the ingredients are recorded and the arrangement is not / nothing downstream can tell them apart, / and nothing signals that anything was lost." This is the flat-formula collapse at the interaction level.

### Q2 : What is the dependency order?

Fig 3 gives the chain: perception, vocabulary, objective, planning, learn and carry. For REA-0065 the mapping is:

1. **Perception:** register the person's response as a reading distinct from prior readings (Fig 1 :5 "the system can tell what is in front of it, and tell it apart from what was there before").
2. **Vocabulary:** have a term for what the situation affords that person, what they can expect, prefer, or object to (Fig 3 :7 "it has terms for what things afford").
3. **Objective:** be able to say what would count as progress in this person's own terms, that is, `R_s` decreasing per slot.
4. **Planning:** choose the next interaction under incomplete information.
5. **Learn and carry:** name what worked, verify against the person's ground, carry it as a head start to the next interaction.

Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." The middle link, vocabulary and objective, is the one most likely to be assumed in AI work. A model can have fluent language about people (perception) and a reward signal (objective) while having no term for what a specific situation affords that specific person.

**Falsifier:** if per-person residual decreases at the same rate when step 2 is removed (no person-specific affordance terms, only a generic reward), the dependency chain is wrong for this case and the ordering claim is withdrawn.

### Q3 : Are two interaction protocols isomers?

Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

Consider two protocols over the same atom set `{people, predictions, corrections, ground, history}`:

- **Protocol P, pooled.** All people's corrections enter one training set, joined with `+` into a single distribution. The bond is symmetric; under `+`, k operands have k! spellings and one term (Fig 12 :92). Order and personhood are destroyed.
- **Protocol Q, attributed.** Each person's prediction is compared with that person's observation by `⋛`, and a correction can refuse a held generic term by `¬`. Same atoms, different bonds.

Under Fig 12 these are **isomers**, not variants of one thing: same atoms, different bond, different substance. The difference is invisible if the artifact records only its ingredients (a corpus plus a reward model) and decisive in behaviour (whether `R_s` drops per person). This is a checkable structural claim, not a ranking of protocols: it says P and Q are different kinds of thing, not which one is better in deployment.

**Falsifier, written before the run:** if two protocols with identical atoms and identical bonds produce systematically different per-person residuals, the bond does not carry the difference and the isomer reading fails. If they have different atoms, the isomer reading also fails and they are simply different molecules.

### Q4 : Does order matter inside one protocol?

Fig 12 :92-93: under a symmetric bond, k operands have k! spellings and one term; under an ordered bond, different orders are different terms. So "correction then comparison" and "comparison then correction" are the same thing if the conjunction `+` is the only bond, and different things if `→` holds. The figures require the ordered reading for the refusal path: a refusal must be aimed at a term that is currently bound and predicting, which presupposes the comparison has already happened (Fig 5 :58: "every term currently bound and generating a prediction is a candidate for being the wrong one"). Formula step 2 separately requires "refuse before mint," so the refusal precedes the addition of any replacement term.

The external developmental evidence agrees with the ordered reading: Tomasello et al. 2005 report that shared intentionality "develop gradually during the first 14 months of life," and the Tacit Knowledge essay notes that the loop "only closes if the learner acts," so the learner's attempt must precede the correction. This is corroboration only, not the ground for the verdict.

### Q5 : What is the union, and what stays open?

The four conditions form a **union of two compounds** (audit §2): C1 contact and import across differing closures, C2 attribution and an unupdating anchor. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :57: "a case in two conditions is not a harder case of either." A single lever, for example more conversational turns, clears the region where only C1 holds and leaves the intersection standing because C2 still binds.

What stays open is which *named* protocol best satisfies the conjunction. No figure line governs it. Fig 8 :39: "So a search that finds nothing is never a proof of absence." The honest report is a `gap`, not a silent substitution of a favourite method.

## CONCLUSION

The shape is a molecule, not a list: a conjunction of conditions, with an ordered interior of act, respond, compare, refuse. Two protocols over the same atoms joined by different bonds are **isomers** under Fig 12, and the pooled-versus-attributed pair is the checkable instance. The dependency order follows Fig 3, with vocabulary and objective as the fragile middle link. The ranking of named protocols is a declared `gap`. Nothing here is `grounded`.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the Operators table, `THE_FORMULA.md`, and the essays. No measurement of an AI system was used.

## FIGURE CENSUS

Fig 1 (per-slot perception), Fig 3 (dependency order, the middle link), Fig 5 (candidates for refusal), Fig 8 (surplus and the gap), Fig 9 (union before search, shape not a name), Fig 12 (flat formula, bond symmetry, isomer, arrangement as substance), Operators table (negation is unary), Formula (refuse before mint, step 2). Strains after re-census: none hidden; the protocol ranking remains a declared `gap`.
