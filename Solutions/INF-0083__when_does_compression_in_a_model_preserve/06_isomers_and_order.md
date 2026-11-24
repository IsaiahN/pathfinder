# What kind of structure survives: bonds, symmetry, and dependency order

**Mode: `specified`. Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 8).**

## RESIDUAL

The word `structure` in the question is undefined. Compression can keep the atom list and drop the arrangement, or keep a re-applicable generator and drop the snapshot. Two questions are owed: (1) what kind of thing is preserved when a compression preserves structure, and (2) in what order must the checks be run so that a positive result is not a reading of nothing (Fig 3).

## DOMAIN CENSUS

Atoms held: the six terms (space, time, energy states; spectrum, gradient, network structures) are framework primaries; in a model frame they are the retained primitives of the representation. Bonds held: the seven, three symmetric (+, ∥, ≡) and four ordered (→, ⇒, −, ⋛), plus negation as a unary operator. Currency: description length in bits and settlement actions, held apart (Fig 12 :125-126). No new primitive is available without import (Fig 6 :21).

## DERIVATION

### Q1 - Is "useful structure" an atom list or a bonded molecule?

- Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."
- Fig 12 :46: "A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."
- Fig 12 :94: "The arrangement is the substance."
- Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

⇒ `useful structure` is not the retained parameter count. It is the retained typed arrangement. Two compressed models with the same retained atom set can be isomers: same atoms, different bond, different behaviour. The one that kept the wrong bond looks identical in the notation and fails at the slot.

- **Triangulated** (Fig 12 :5 + :46 + :94 + :117, plus the Operators table opening: "The bond carries information the operands do not, so a term that names only its ingredients has recorded half of itself."). The world corroborator is Hinton et al. 2015: soft targets and specialist models carry the fine-grained relation among classes that a hard label drops.

### Q2 - Symmetric versus ordered bonds: when is a compressed collapse legitimate?

- Fig 12 :92: "Symmetry is what decides whether an arrangement is a new thing."
- Fig 12 :93: "Under a symmetric bond, k operands have k! spellings and one term, so a code that charges for the sequence overcharges by log₂(k!) while the bond term undercharges. Both wrong, in opposite directions, and only one is usually noticed."
- Fig 12 :43: "one bond type costs nothing; seven cost 2.8 bits each"
- Operators :59: "Symmetry decides whether an arrangement is a new thing."

⇒ A compression that collapses the k! spellings under a symmetric bond is legitimate and saves exactly the overcharge. A compression that treats an ordered bond (→, ⇒, −, ⋛) as symmetric merges distinct terms and is an erasure even when the parameter count matches. Order is not a cosmetic property of the representation; it is part of what the term is.

- **Falsifier, written before the run:** exhibit a compressed representation that collapses an ordered arrangement into a symmetric one, or charges sequence over a symmetric arrangement, and still pays the acceptance bargain with zero leftover at every slot. If so, bond type does not govern preservation.

### Q3 - Are there isomers of a compressed model?

- Fig 12 :117 (above) defines the isomer: same atoms, different bond, different substance.
- Fig 13 :124-125: "Two chains built from different links may compose functionally identical terms, and the converse holds too: the same ingredients under a different bond are a different substance."

⇒ Two compression schemes over the same retained primitive set are isomers when they differ only in the typed arrangement of what they kept. This is the precise sense in which "same size, different behaviour" is possible without any new primitive. It is a structural claim, checkable by comparing the bonds held, not by comparing the parameter counts.

- **Live condition:** the isomer claim holds over a fixed retained atom set. If one compression removes an atom the other keeps, the difference is composition plus import or subtraction, not isomerism. This condition is named, not hidden.

### Q4 - What is the dependency order of the checks?

- Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."
- Fig 3 :20: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."
- Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

The checks order as: (1) perceive the residual per slot (Fig 1 :19), (2) say what would count as progress by naming the derivations that must still go through (Fig 3 :10), (3) identify the bond type held (Q1, Q2), (4) run the round trip and measure R_T (Fig 4 :30), (5) settle at the ground per slot. Running step 4 before step 1 produces a gap measurement of nothing, which is "a reading of nothing" (Fig 3 :23). Running a benchmark before naming the slots is the common inversion: it optimises above the break.

- Fig 9 :53: "Nobody chooses. The gap does, and the gap is only as good as its description."

### Q5 - What about a catalyst or a functional group in a compressed model?

- Fig 12 :119: "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."
- Fig 12 :123: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

⇒ A retained component that is a catalyst behaves differently across uses from a spent part, and a parameter count cannot tell them apart. A retained substructure can fix the outcome (functional group) while the specific member is a binding. These are reasons why "which parameters were kept" is not a sufficient description of what was preserved.

## CONCLUSION

The structure worth preserving is the bonded arrangement, not the atom list. Legitimate compression collapses spellings that a symmetric bond makes equivalent; erasing compression flattens an ordered bond or drops the bond entirely. Two compressions over a fixed retained atom set are isomers, same atoms, different bond, different behaviour. The checks are ordered by dependency: residual per slot, objective, bond type, round trip, ground. No step in that order returns a universal safe ratio.

This framing keeps what is defensible in the engineering results without the part they do not certify: an aggregate-accuracy-equivalent compressed model is an isomer claim awaiting a bond-level and per-slot check, not a proof that the rare case survived.

## ANCHOR

Verbatim figure text extracted from the canonical framework file this session; the world sources in `10_source_ledger.csv`, all opened 2026-11-23; the eight essays as mapped in `05_what_shape_means.md`. No model measurement was used.

## FIGURE CENSUS

Fig 3 (:10, :19, :20, :23, :27), Fig 4 (:30), Fig 6 (:21), Fig 9 (:53), Fig 12 (:5, :43, :46, :92, :93, :94, :117, :119, :123, :125, :126), Fig 13 (:124-125), Operators table (opening, :59). Strains after re-census: one live fixed-atom condition on the isomer claim (Q3), named; no figure conflict.
