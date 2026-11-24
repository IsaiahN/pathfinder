# Isomers and order in training data: a supporting derivation

**Mode: `specified`.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).

## RESIDUAL

Two corpora can contain the same items and differ only in arrangement. Does the figure set license a difference in learnable reach from arrangement alone, and if so, which arrangement tests are available? A second question: which order claims does the framework actually make, since a corpus is presented in a sequence but the bond inventory is not ordered by the sequence?

## DOMAIN CENSUS (abbreviated; full census in `01_figure_grounded_audit.md`)

Atoms held: the primitives a corpus can supply to Γ (D1). Bonds held: the seven, plus negation (D3). Currency: bits for the description, actions for testing the arrangement (Fig 12 :125-126). Anchor: the task ground. No new primitive is available without import (Fig 6 :23).

## DERIVATION

### Q1. Same items, different bond, different reach

- Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."

**Reading.** Let corpus A present items `(x, y)` with no relation. Let corpus B present the same items with `x → y` (sequence), `x ⇒ y` (production), `x ⋛ y` (comparison) or `¬x` (refusal). They have the same ingredient set and different bond inventories. Under Fig 12 they are **isomers** in the learnable substance, not variants of one substance. The difference is invisible to a token count and decisive to the reach.

**Falsifier (written before the run).** If two corpora with identical item sets and different bond signals produce indistinguishable reaches under a ground-checked probe (not a benchmark score; see F6 of the audit), the isomer claim fails and the flat-formula collapse (Fig 12 :6-17) is not in play for learning systems.

### Q2. When are two corpora not isomers but a functional group?

- Fig 12 :124: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

**Reading.** If corpus A and corpus B share no atoms (different observation vocabularies), they are not isomers. They are members of a **functional group**: both are `state → structure → state` molecules with different atoms in the slots. The weaker, safer claim for arbitrary pairs of corpora is the functional-group claim, not the isomer claim. The isomer claim becomes available only when both corpora are written over the full shared atom set and differ only in which structure mediates which state pair. The exemplar made the same correction for GR and QM.

**Status:** `specified`, triangulated for the definition (Fig 12 plus Fig 13 :121-124 on different routes arriving at the same substance), unmeasured for any pair of real corpora.

### Q3. Which other arrangements matter?

- Fig 12 :119: "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is." A data augmentation or a reusable primitive is a catalyst only if its survival across uses is recorded. If the corpus does not record it, two histories with different catalysts are indiscernible from their artifacts.
- Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." Feedback data is a cycle; a fixed training stream is a chain. A system trained only on the chain cannot represent the loop's closure from the ingredients alone.
- Fig 12 :92: "Symmetry is what decides whether an arrangement is a new thing." Fig 12 :93: "Under a symmetric bond, k operands have k! spellings and one term, so a code that charges for the sequence overcharges by log₂(k!) while the bond term undercharges." A corpus that randomizes the order of a symmetric conjunction creates spurious work for a learner that charges for sequence; a corpus that randomizes the order of an ordered bond destroys the term. Both are structural effects at fixed item count.

**Status:** `general` for the definitions; `specified` for the corpus reading. Single-source for each definition (Fig 12), triangulated at the level of the whole set (Fig 12 plus the Operators table plus Fig 3 for the objective link).

### Q4. What order does the framework actually license?

- Fig 3 :18: "The break is drawn between three and four as an illustration. Where a given chain stops is a reading, never a property of the chain."
- Fig 3 :22: "A step whose input never arrives cannot be diagnosed, only its predecessor can."
- Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

**Reading.** The dependency order is perception -> vocabulary -> objective -> planning -> learn and carry. A corpus is not "first" in an absolute sense; it occupies the perception and vocabulary links. Training more (planning effort) cannot rescue a vocabulary with no bond for goals (objective link), because effort above the break arrives at a step that cannot use it (Fig 3 :20). The middle link is where data structure usually binds and where the fewest instruments exist.

**Falsifier.** Show a system whose objective link is demonstrably uninstrumented (no term for "what would count as progress", verified by a ground-checked probe) and whose planning improvements nevertheless reach the ground at first order, so the chain is not broken there. That would break Fig 3 :19 and :27.

### Q5. Cataloguing the dataset as a chain (dependency order per domain)

| link | corpus-side analogue | anchor | instrument? |
|---|---|---|---|
| perception | What the data lets the system discriminate per slot | ground reading of the slot | per-signal residual, Fig 1 :19 |
| vocabulary | Atoms and bonds the data supplies | figure census, Fig 12/13 | bond inventory probe (missing, F8) |
| objective | Comparison and refusal signals in the data | ground-checked goal | often absent, Fig 3 :27 |
| planning | Training schedule and search budget | benchmark (filter only, F7) | yes |
| learn and carry | What is recorded and settled | settlement, Formula step 5 | provenance record |

Order by dependency, not by importance (Fig 3 :20). The table is a union of conditions, not a ranking; no row's verdict is averaged into another.

## CONCLUSION

Same items plus different bonds yields a different learnable substance (isomer claim); different items plus the same `state → structure → state` form yields the weaker functional-group claim. Dataset order is load-bearing only where the bond is ordered; where the bond is symmetric, sequence is an overcharge. The binding constraint is the vocabulary/objective link, which is where a corpus most often has no instrument at all. All of this is `specified`, triangulated in shape, and unmeasured for any specific corpus.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the Operators table and `THE_FORMULA.md` were reopened this session. The eight essays are framework-internal. No measurement of a learning system was taken.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 3 (dependency order, middle link), Fig 6 (import only moves the wall), Fig 8 (closure idempotence), Fig 11 (habitat), Fig 12 (isomer, functional group, catalyst, cycle, symmetry pricing), Fig 13 (closed set, open arrangements), Operators table (negation). Strains after re-census: none hidden; the one open item is the missing bond-inventory instrument carried forward as F8.
