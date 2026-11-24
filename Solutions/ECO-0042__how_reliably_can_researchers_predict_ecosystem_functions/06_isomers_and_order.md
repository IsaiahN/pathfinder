# Structure, order and analogues: what the count omits

**Mode: `general` on the structure, `specified` on the ecological reading.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §7).

## RESIDUAL

The question asks for the reliability of one predictor class. Before rating it, two structural questions are owed:

1. What kind of object is a species count, and what kind of object is an ecosystem function, such that a map between them is or is not a composition?
2. Are two communities with the same count best read as the *same term in different spellings*, as *isomers*, or as *members of one functional group*?

## DOMAIN CENSUS

Atoms held in D1: species tokens and the integer `S`. Atoms held in D2: identities, traits, abundance distributions, complementarity. Atoms held in D3: conditions (light, water, temperature, season, terrain) and relations (pollination, predation, competition, dependency). Bonds held: the seven, including the symmetric `+`, ordered `→` and `⇒`, subtraction `−`, comparison `⋛`, and negation `¬` (Operators table). No new primitive is available without import.

## DERIVATION

### Q1 — What kind of object is a count?

> Fig 12 :5 *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*

A species list is already poorer than a molecule: it holds ingredients but not the relations. A species count is poorer still: it does not hold even the ingredients, only their cardinality. Under a symmetric bond, `k` operands have `k!` spellings and one term (Fig 12 :92). A count is the extreme case: every identity substitution and every ordering collapses to one integer.

So a count is not a composition and cannot be rated as one. It is a **projection from a composed object to a scalar**. The map is many-to-one, so it is non-invertible, and the information lost is exactly what the functions depend on when identity matters.

**Falsifier (written before the run):** exhibit a target function for which all communities of count `k` give the same value. For that function the projection is lossless and this finding does not apply. Mark such functions explicitly rather than assuming them.

### Q2 — Are two communities with the same count the same term?

No. They are different terms whose notation cannot tell them apart.

> Fig 12 :23 *"this bond is symmetric, so the four are one term"*
> Fig 12 :14 *"the ingredients are recorded and the arrangement is not"*

The count notation records neither the ingredients nor the arrangement, so it systematically under-describes. The colour-science analogue is exact: *"a perceived matching of colors with different (nonmatching) spectral power distributions."* Same reading, different source.

### Q3 — Are they isomers?

There are two cases, and they must not be conflated.

**Case A: different atom sets.** Community `{A, B, C}` and community `{X, Y, Z}` at the same count share no species with each other. They are not isomers, because isomers require the same atoms. They are simply different substances that the count notation maps to one term. This is the common field situation and the one that breaks count-only prediction most visibly.

**Case B: same regional species pool.** Two communities drawn from the same species pool, differing in which members are present and in their relative abundances and relations, do share an atom set. Under the figure's definition:

> Fig 12 :117 *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*

They are isomers in the figure's sense: same atoms, different arrangement, different function, and the difference is invisible in the count. World corroboration: Gagic et al. (2015) found responses were due to *"identity and dominance patterns of the trait composition"*, which is an arrangement claim, and Hong et al. (2022) attributed effects to *"interspecific complementarity"*, which is a bond claim.

**Falsifier:** if communities built from the same species pool in different abundances always produce the same function, the isomer reading fails and the weaker functional-group reading below stands alone.

### Q4 — Functional group reading (the weaker, safer claim)

> Fig 12 :123 *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*

All communities of count `k` in habitat `H` form a nominal group: "k species in H". The group says what kind; it does not say which member. The qualifier, identity, traits, dominance and relations, fixes the function. A count-only predictor holds the group and discards the qualifier, so it can say what kind of community is present and cannot say what the community will do.

### Q5 — What order is the dependency?

> Fig 3 :20 *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."*

The correct order for a study is:

1. **Perception:** can the observer identify species and count them at all? Cryptic species and taxonomic uncertainty live here.
2. **Vocabulary:** are there terms for traits, functions, conditions and relations? Without them the observer can name a state and cannot name a route (Fig 12 :111).
3. **Objective:** what counts as progress? Reduce per-slot `R`, not a global average (Fig 1 :19).
4. **Planning:** choose which functions and habitats to measure, and which frames to import.
5. **Learn and carry:** record which predictor reduced which slot residual, with provenance, so the next site is cheaper.

A count-only protocol spends most effort at steps 1 and 4 while the break sits at step 2 or 3. Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*

### Q6 — Sequence, comparison, subtraction

> Fig 12 :112 *"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."*

A count names what a situation contains. It does not name a route to a function (no sequence), a target function against which to compare (no comparison), how far the residual fell (no subtraction), or that a predictor failed for a case (no negation). A protocol built only on counts can accumulate fits and cannot carry the correction (Operators table :58: *"a refutation is a negation, which is why a vocabulary without it can only accumulate"*). This is why the four refuters in `01` are written as explicit negations rather than as additional fits.

### Q7 — The two currencies of the bargain

> Fig 12 :125 *"A composition costs in two currencies, and they do not add."*
> Fig 12 :126 *"Bits price the description. Actions price finding out whether it holds."*

A count is extremely cheap in bits and cheap to obtain (one census). A per-function, per-habitat report is expensive in both: many bits to describe, many actions to measure. But the acceptance test is the bargain, not the sticker price: a term is worth having when its cost plus its leftover residual is less than the residual before it (Fig 5 :43). If the left-over from the count rule is large on a live slot, the count rule fails the bargain despite being cheap. Conversely, a cheap filter that triages sites is a valid use, because it reduces the actions needed for the ground reading without pretending to settle the function.

## CONCLUSION

A species count is a symmetric projection, not a composition. Communities sharing a count are different terms under one notation; communities sharing a species pool but differing in arrangement are isomers in the figure's sense. The weaker functional-group reading always holds, and is enough to defeat the universal claim. Dependency order puts vocabulary and objective before optimization, and the two-currency bargain shows why cheapness does not make the count rule sufficient. Falsifiers for Q1 and Q3 are stated above; both are ground tests, so this derivation stays `specified` and ungrounded.

## ANCHOR

Verbatim figure text in `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened 2026-11-23. World anchors: Gagic et al. 2015, Carrick and Forsythe 2020, Hong et al. 2022, and the colour-science source, all opened 2026-11-23. No new measurement was taken here.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 3 (dependency order), Fig 5 (bargain), Fig 9 (union before search), Fig 12 (ingredients, symmetric bond, isomer, functional group, two currencies, negation), Operators table (symmetry, negation). Strained after re-census: **none**. The Fig 11 "enumerate the habitat" rule and the Fig 12 "compose inside the library" rule were initially read as competing; re-census separates the habitat (read from the world) from the library (composed inside a frame), so no strain remains.
