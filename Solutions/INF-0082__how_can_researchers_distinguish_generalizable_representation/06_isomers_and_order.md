# Isomers and order: the probe design for INF-0082

**Mode: `specified` on the probe shape, `general` on the structural claim. Not `grounded`.** Simulated derivation checked against the figures, not a ground reading (`05_what_shape_means.md` section 7).

## RESIDUAL

The shape from `01` says *hold ingredients fixed and change the bond*. This file derives what that means operationally: which changes are new substances and which are only new spellings, and what the round trip to a new habitat can and cannot carry.

## DOMAIN CENSUS (supporting derivation, done from the residual line)

- **Atoms held:** the features, parameters and primitives of the representation already available to the learning frame. No new atom is assumed.
- **Bonds held:** the seven typed relations plus negation (Operators table), in particular sequence `→` and comparison `⋛`.
- **Currency:** two, and they do not add. Fig 12 :125: "A composition costs in two currencies, and they do not add." Fig 12 :126: "Bits price the description. Actions price finding out whether it holds."
- **Anchor:** the new habitat's ground, which does not update on the representation's own prediction (Fig 2 :29).
- **Question type:** union of an arrangement condition and a measurement condition; order by dependency, with perception first (Fig 3 :20).

## DERIVATION

### Q1. Is a generalization probe an isomer test?

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

A probe that changes the data distribution while keeping the *same feature vocabulary* is an isomer probe: same atoms, different bond. A probe that introduces a new feature is an import, not an isomer test, and needs a source gate and a shadow test (Fig 6 :23, Fig 8 :51).

- **Isomer probe:** held ingredient set, changed relation or order. This is the discriminating case. If A generalizes and B does not, the difference lies in what the bond carried.
- **Import probe:** new atom required. Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." A training-only representation cannot reach it by more fitting either way; the question becomes Formula step 7 SEARCHED / INWARD / OUTWARD.
- **Falsifier, written before the run:** if a representation with the same atoms and a different bond produces the same per-slot residual in the new habitat as the fitted one, the isomer probe has no discriminating power and the separator must be re-censused.

### Q2. Functional group: the method skeleton versus the qualifier

Fig 12 :123: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

Two representations that share a method skeleton (for example, state then structure then state) but differ in which atom fills the slot are members of one functional group, not isomers. This is the weaker, safer claim when the full atom sets are not identical. Verdict: `specified`. Falsifier: the method skeleton changes between the two representations, in which case they are different kinds, not members of one group.

### Q3. Order: which permutations are new substances?

Operators table :59-62: "Symmetry decides whether an arrangement is a new thing. Under a symmetric bond, k operands have k! spellings and one term, so a code that charges for the sequence overcharges by log₂(k!) while the bond term undercharges. Both wrong, in opposite directions, and only one is usually noticed."

- Under a **symmetric** bond (`+`, `∥`, `≡`), permuting operands is the same term. A probe that rewards a model for ordering them is measuring a spelling, not a substance.
- Under an **ordered** bond (`→`, `⇒`, `−`, `⋛`), a different order is a different term. A probe that ignores order cannot see the difference between training-only and generalizable.

Fig 12 :94: "The arrangement is the substance." Operators :34: "the only bond a flat chain can express, so every term today is a sequence whether or not it should be." So the probe must *know* which bond it is testing. A generic accuracy score averaged over permutations is another aggregate that hides the live slot (Fig 1 :22).

**Falsifier:** if permuting a supposedly ordered pair never changes the new-habitat residual, the ordered-bond reading is wrong for that representation; record it as a failure, do not delete the claim.

### Q4. The round trip: what can cross to the new habitat?

Fig 4 :22: "Only methods cross up. Only head starts come down." Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion." Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

1. **Sent up (x):** the fitted representation's per-slot residual pattern plus its recorded atoms and bonds.
2. **Abstraction (T_A):** the method, with the occasion-specific details thrown away. This is what makes it reapplicable.
3. **Concretisation (T_E):** applying the method in the new habitat.
4. **Round trip gap `R_T`:** Symbols table :75-78, "The gap between what was sent up and what came back down". It is not an error to eliminate; it is the honest report of what the coarser description cannot hold (Fig 4 :31-32).

Fig 12 :107-110: "where the arrangement is recorded, re-deriving it is a lookup and the actions were spent once. Where it is not, the result carries forward and the deriving does not, so every lineage pays again." A generalizable representation is one whose arrangement is recorded; a training-only one makes every lineage pay again.

**Falsifier:** if `R_T` is zero under the round trip, either the method carried everything (a genuine generalizer) or the probe habitat was not a substituted habitat at all (Fig 11 :66: "Isolation is not removal of the habitat. It is substitution of one habitat for another."). Distinguish by checking the anchor and the closure.

### Q5. Negation: the separator must be refusable

Operators :58: "a refutation is a negation, which is why a vocabulary without it can only accumulate." Fig 5 :65: "Write down what an answer would look like, bind it, and let it accrue a residual like anything else."

The six refuters in `01` section 5 are negation terms. A framework that can only add techniques (regularizers, augmentations, bigger corpora) cannot carry a correction; it can only accumulate. This is why the separator is written as a set of failure conditions before the run, not as a shopping list of methods.

## CONCLUSION

The discriminating test is an **isomer probe**: hold the atom set fixed, change the bond or order, and read the residual per slot against an anchor that does not update. Where the full atom sets differ, fall back to the weaker **functional group** claim. The round trip supplies `R_T` as the honest error signal, and negation supplies the refuter. This rescues the operational content of "generalizes" without naming a universal architecture. Mode `specified`; no probe was run, so nothing is `grounded`.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the Operators table and `THE_FORMULA.md` (local files, read this session). World corroboration for the bond/isomer shape is in `10_source_ledger.csv`; no world source outranks the figures.

## FIGURE CENSUS

Fig 1 :22, Fig 2 :29, Fig 3 :20, Fig 4 :22/:25/:30/:31-32, Fig 5 :65, Fig 6 :23/:32, Fig 8 :32/:51, Fig 11 :66, Fig 12 :5/:94/:107-110/:117/:123/:125-126, Operators :34/:58/:59-62, Symbols :75-78. Strains after re-census: none hidden. The live type question about "stating the term" (S2 in `01`) is recorded there and not resolved by this derivation.
