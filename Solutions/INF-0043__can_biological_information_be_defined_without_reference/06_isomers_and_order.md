# Bonds, symmetry, and order: the supporting derivation

**Mode: `specified`.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

The question asks whether one definition can be given without three references. That presupposes that "information" is one substance whose ingredients can be rearranged. This file tests the presupposition with the figure's own composition theory: a list of ingredients is not a molecule, and the bond is the missing information.

Two questions are owed:

1. Are the correlational and semantic definitions **isomers** (same atoms, different bond) or different **functional groups** (same structural pattern, different atoms)?
2. In what order must the three slots be settled, and what breaks if the order is reversed?

## DOMAIN CENSUS

Atoms held in the two frames:

- Statistical frame: symbols, probability distributions, channel, noise, code, description length.
- Function frame: sender, receiver, trait, selected effect, norm, malfunction, fitness.
- Shared possible atoms: a signal, a state of the world, a receiver, a correlation.

Bonds held: the seven figure bonds plus negation (`+`, `∥`, `≡`, `→`, `⇒`, `−`, `⋛`, `¬`). No new primitive is available without import.

## DERIVATION

### Q1 - Are the two definitions isomers or members of a functional group?

Fig 12 :117: "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
Fig 12 :124: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."
Fig 12 :5: "The bond is the rest of the information, and it is the half nothing was recording."

Written as flat ingredient lists:

- Correlational definition: `{signal, world state, correlation}`.
- Semantic definition: `{signal, world state, correlation, function, receiver}`.

As written, they do **not** share the same atom set, so by Fig 12's definition they are not isomers. They are two different molecules, one of which has an atom the other lacks. The weaker structural claim is that both exhibit a shared pattern, roughly `state / structure / state`, which is Fig 12's functional group: "the group says what kind; the qualifier says which member."

The stronger version, which is the checkable one, is: write both definitions over the **full shared atom set** `{signal, world state, correlation, receiver, function}`, and let them differ only in the bond that joins signal to world state. Then:

- the correlational definition uses a symmetric bond, since mutual information has no direction (if A carries information about B, B carries information about A);
- the semantic definition uses an ordered bond, since an alarm call carries information about a snake but the snake does not carry information about the call.

Same atoms, different bond, different substance. That is a real isomer claim under Fig 12. Artiga (2024, SEP) supplies the world description: "correlational information is symmetrical: if A carries information about B, then B carries information about A", while the biological notion is "asymmetric, normative, and non-ubiquitous."

**Falsifier, written before the run:** if either definition can be written without an atom the other requires (for example a semantic definition with no correlation, or a correlational definition that already contains a receiver), the isomer claim fails and the functional-group reading stands instead. A second falsifier: if the symmetry difference is shown to be a notational artifact rather than a difference in the bond, the isomer claim fails even with a shared atom set.

**Status: single-source** for the figure definition of isomer and functional group (Fig 12), with a world corroboration from a different author pool (Artiga 2024). Treated as `specified`, unmeasured.

### Q2 - What is the symmetry of each bond, and what does that decide?

Operators table: under a symmetric bond, k operands have k! spellings and one term; under an ordered bond, different orders are different terms.

- The correlational bond is symmetric in the sense just described. Swapping the two operands leaves the quantity unchanged. A code that charged for the order would overcharge.
- The semantic bond is ordered. Swapping signal and world state produces a different term (the snake now "carries information about" the alarm). A code that ignored the order would undercharge.

Fig 12 :94: "The arrangement is the substance." Applied: the difference between "information about" and "correlation with" is carried entirely by the bond, not by the symbol inventory. This is the figure-level reason a flat symbol count cannot decide the question.

**Falsifier:** exhibit a case where swapping signal and world state leaves both the correlational and the semantic readings unchanged. Then the symmetry distinction collapses and Q1's isomer claim loses its basis.

### Q3 - What is the order of the three slots, and what happens if it is reversed?

Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." Fig 3 :20: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."

The dependency order is:

1. **S1, correlational definition.** This link works. It is measurable and settled by calculation. Settle it first.
2. **S2, semantic definition.** It consumes S1 (a correlational base) plus an imported function atom. It cannot be settled before S1, because its correlational component would then be unmeasured.
3. **S3, function theory.** It consumes S2, because the question "must the function be evolutionary?" only has content once we know that a function atom is owed.

If S3 is attempted first, the answer is decided by which theory of function the searcher already prefers. That is the apophenia failure Fig 9 :27-28 names: "describe it before you go looking, or any frame you pick will seem to fit." If S2 is attempted before S1, the semantic definition inherits an unmeasured statistical base and cannot say what its correlation contributes.

Fig 3 :26-27: "the link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments." The function atom is exactly that middle link here. A link with no instrument is not a link that works; it is a link nobody has looked at.

**Falsifier:** show that S3 can be settled independently of S2, by an instrument that selects a function theory without first knowing what the function atom must do. If that instrument exists, the dependency order is wrong and should be re-censused.

### Q4 - What does the analogue contribute that the main audit does not?

The main audit (`01_figure_grounded_audit.md`) establishes reachability. This file establishes **structure**: the difference between the two definitions is a bond difference, not an ingredient difference, and the order in which the slots are settled is a dependency order, not a ranking of importance. Without Q1 and Q2, a reader could accept F3 (the barrier) and still think the two definitions are the same thing described twice. Without Q3, a reader could accept the barrier and then answer S3 by preference.

Nothing here adds a primitive. The isomer reading and the dependency order are both compositions over atoms already held; no import is claimed in this file.

## CONCLUSION

Under Fig 12 the two definitions are isomers only when written over a shared atom set; as the field currently writes them they are different molecules with different ingredients, although they share a functional-group pattern. The symmetry of the bond is the decisive structural difference: correlation is symmetric, semantic information is asymmetric. The three slots form a dependency chain (Fig 3): settle the working statistical link first, then the semantic link that imports the function atom, then the function theory that decides whether evolution and survival are required. If the order is reversed, a preferred frame substitutes for a measured residual.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` (opened this session); `THE_FORMULA.md`; the four essays and five SEP entries listed in `04_links_and_distribution.md`. No measurement was taken.

## FIGURE CENSUS

Fig 3 (dependency order, middle link), Fig 6 (import moves the wall), Fig 9 (describe before looking; union split), Fig 12 (bond, isomer, functional group, arrangement as substance), Operators table (symmetry rule), Formula (steps 3, 5, 7). Strains after re-census: none; the survival question is kept as a separate slot rather than forced into the function slot.
