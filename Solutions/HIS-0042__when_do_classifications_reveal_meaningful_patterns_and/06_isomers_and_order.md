# Isomers, order and union: a supporting derivation

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

The main audit says a classification reveals pattern when it preserves bonds and slots and when its cut is a real partition. Three questions are owed: (1) what exactly is lost when two things share an ingredient list, (2) what order must the operations of classifying run in, and (3) what is the structure of a class that bundles two conditions.

## DOMAIN CENSUS

Atoms held: the seven bonds plus negation from the Operators table; the symmetric bonds `+` (conjunction), `∥` (disjunction), `≡` (identity), and the ordered bonds `→` (sequence), `⇒` (production), `−` (subtraction), `⋛` (comparison). Structures held: partition, union, compound, slot, average. No new primitive is available without import.

## DERIVATION

### Q1 - What is lost when two things share an ingredient list?

- Fig 12 :23 "this bond is symmetric, so the four are one term": under a symmetric bond, k operands have k! spellings but one term, so counting spellings overcharges by log2(k!).
- Fig 12 :92-93 "Under a symmetric bond, k operands have k! spellings and one term": a code that charges for the sequence overcharges and the bond term undercharges, "Both wrong, in opposite directions, and only one is usually noticed."
- Fig 12 :95-96 "Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."
- Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

So an ingredient-list classification is not a coarser version of a bond-preserving one. It is a different notation that cannot represent the distinction at all. The loss is not measured by how many items were merged, but by the absence of a place in the notation where the difference could be recorded. Fig 12 :14 "the ingredients are recorded and the arrangement is not" and Fig 12 :15-16 "nothing downstream can tell them apart, and nothing signals that anything was lost."

**Falsifier, written before the run:** if a feature-list classification discriminates two bonded isomers on a ground-paying axis without an added relation, the claim that the bond is unrecoverable from the operands is false. This is testable against the chemistry record, which is why the isomer episode is used as the historical anchor in `09`.

### Q2 - What order must classifying run in?

Fig 3 gives the dependency chain: perception of difference, vocabulary of features, a criterion of progress, a route (the partition), then naming and carrying. Fig 3 :19 "Optimising a link that already works cannot rescue one that does not." Fig 3 :26-27 "A link with no instrument is not a link that works. It is a link nobody has looked at."

Applied to classification:

1. **Perceive** differences per slot, not as a global average (Fig 1 :19).
2. **Bind** features that afford a difference, including a criterion of progress (Fig 3 link 3). Without this, the classifier cannot say what would count as a better cut.
3. **Describe the residual in effect terms before choosing a frame** (Fig 9 :27-28 "describe it before you go looking, or any frame you pick will seem to fit").
4. **Refuse before mint** if a held class is the wrong one (Formula step 2; Fig 5 amendment, "refuted: a term we hold is wrong; a term is owed that says so"). This is the case a taxonomy usually lacks, because vocabularies without negation can only accumulate.
5. **Partition, then name**, and stamp each cut with its origin and the reason it was kept (Fig 9 :41 "so keep every cut ranked and reversible").

**Falsifier:** a scheme that names its classes before it states its criterion of progress and still passes a ground test on held-out slots. If that happens the dependency order is a preference, not a law.

### Q3 - What is the structure of a class that bundles two conditions?

Fig 9 :55-56 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."

A class C defined as "A or B" is a disjunction, `A ∥ B`. Fig 12 :64 "remove one. Does it still work? Yes." So each single-condition region survives removal of the other, and a cut aimed at A alone leaves B standing. The intersection `A + B` is a compound, and Fig 9 :57-58 says what it becomes after unbundling: "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."

The consequence for the main question: a class that will not converge under effort is not one hard category. Fig 9 :4-5 "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." *The Library of Babel* essay says the same in its own terms: "Perhaps your problem was a bundle or conflation of several problems masquerading as one?"

**Falsifier:** a class defined as a disjunction of two independently measurable conditions whose boundaries do converge under effort and whose intersection behaves exactly like the single-condition regions. Then the union reading is unnecessary.

### Q4 - Why "same class" and "similar" are not the same relation

The outside clustering literature gives an independent way to see the arity point in `01`. "Same class" is transitive. "Similar to" need not be. A clustering that tries to make the first approximate the second faces an impossibility result: no clustering function satisfies scale invariance, richness (every partition is recoverable for some distance matrix) and consistency simultaneously. The MerceMay technical note (opened 2026-11-23) states it: "no clustering function can satisfy scale invariance, richness... and consistency... simultaneously." The AAAI paper calls the simpler form "the simplest clustering impossibility theorem": the relation "x and y belong to the same cluster" is transitive whereas "being similar" may violate transitivity.

This corroborates F1 and F5 from a field with no stake in the framework: the cut is imposed by the criterion, not read off the world. It does not decide the verdict; the figures do.

## CONCLUSION

An ingredient-list classification and a bond-preserving one are different notations, not different resolutions of the same notation. The order of classifying is perceive, bind a criterion, describe the residual, refuse where necessary, partition, then name. A class that bundles conditions is a disjunction with a live intersection and must be unbundled before it is searched. These three results make the main audit's F2 and F3 checkable without appealing to a particular taxonomy.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read this session. Verbatim world quotes from the sources opened 2026-11-23 and listed in `10_source_ledger.csv`. No measurement was taken.

## FIGURE CENSUS

Fig 1 (slot, not aggregate), Fig 3 (dependency order, middle link), Fig 5 (refusal before mint, the five kinds), Fig 8 (metaframe limits, opened 2026-11-23), Fig 9 (describe before looking, union versus partition, split rather than search, reversible cuts), Fig 12 (symmetric and ordered bonds, isomer, functional group, what a flat formula loses), Fig 13 (no new member by arrangement). Strained after re-census: none. The apparent Fig 12 versus Fig 13 strain is resolved in `01` section 6: one governs recursion across levels, the other governs membership of the generating set.
