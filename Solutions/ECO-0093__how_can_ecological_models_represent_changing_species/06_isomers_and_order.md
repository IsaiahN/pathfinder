# Are turnover and rewiring isomers? Arrangement, order and what a model vocabulary can refuse

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §7).

## RESIDUAL

The primary audit splits "changing species interactions" into at least two conditions: species turnover and interaction rewiring (`01` F4). Two supporting questions are owed:

1. Can turnover and rewiring be written as **isomers** under Fig 12's definition, and if not, what is the weaker relation between them?
2. Does the **order** in which interactions are applied carry information, or is a species-by-interaction ingredient list sufficient?

A third question emerges from the operators table: can a model vocabulary that has no negation ever represent the disappearance of an interaction, or can it only accumulate them?

## DOMAIN CENSUS

- **Atoms available for composition:** the species set S, the set of measured conditions C (light, water, temperature, season, terrain), the relation set R (pollination, predation, competition, dependency) enumerated from contact per Fig 11 :43-48, and the observed abundance trajectories. Bonding a species to a relation under a condition produces a term.
- **Bonds held:** + conjunction, ∥ disjunction, ≡ identity, → sequence, ⇒ production, − subtraction, ⋛ comparison, plus ¬ negation as a unary operator. Fig 12 :46 "A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."
- **Currency:** description bits and field actions, held apart (Fig 12 :125-130).
- **Anchor:** held-out field slots, never fit quality on the training season.
- **Binding declared, not derived:** calling a species abundance a "state" and an interaction network a "structure" binds ecology vocabulary onto the six-term set. It is a provenanced binding from the ecology frame, not a derivation, exactly as `05` §3 records for model classes. The derivation below uses only Fig 12's bond rules, which are domain-agnostic.

## DERIVATION

### Q1 — Are species turnover and interaction rewiring isomers?

- Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Under the partition used in the ecology literature (Yahaya et al. 2026; Poisot et al. 2015 as cited there), **rewiring** keeps the species set and changes which pairs interact; **turnover** changes which species are present. Read as compositions:
  - Rewiring: same S, different arrangement over S, that is, a different bond between the same operands.
  - Turnover: different S, so a different atom set.
- ⇒ Rewiring is the **isomer case**: same atoms, different bond, different substance. If the species set is held fixed and only the interaction arrangement changes, the two networks are isomers by the figure's own definition. The behavioural consequence is not in the ingredient list.
- ⇒ Turnover is **not** an isomer of rewiring, because the atom set differs. Where the two share only the abstract pattern "a relation among species," they are members of the same **functional group**: Fig 12 :123 "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."
- **Falsifier, written before the run:** if two networks with identical species sets and identical interaction strengths but a different partner arrangement behave indistinguishably across held-out seasons, the isomer claim fails for that system and the weaker functional-group claim stands. If turnover and rewiring can be written over the same atom set with only the bond altered, the stronger claim is reinstated. Triangulated for the definition (Fig 12 :117, :123), single-source until the field comparison is run.

### Q2 — What order is the union?

- Fig 12 :71 "A then B; B needs A to have happened." This is →, sequence, and it is **ordered**: "swap them. Does it become a different thing? Yes" (the operators table's test for →).
- Fig 12 :75-77 gives ⇒ production: "A produces B; B did not exist before." A new species entering a community is closer to production than to sequence: the interaction partner was absent until the species arrived.
- Fig 12 :81-83 gives − subtraction: "A with B removed or absent." Local extinction is the absence of an operand.
- Operators table :57 "a refutation is a negation, which is why a vocabulary without it can only accumulate." A model whose terms are all positive interaction coefficients can lower a coefficient toward zero but cannot **refuse** an interaction it once asserted. To carry a correction, the vocabulary needs ¬, which "acts on a single operand" and "does not enter |bonds| in the price" (Operators table :70, :77).
- ⇒ The union of turnover and rewiring is not a flat list. It is an ordered composition: production (arrival) then sequence (application of interactions under conditions), with subtraction (departure) and negation (refusal of a previously held interaction) as available operators. A vocabulary missing ¬ can be corrected numerically and cannot carry the correction structurally. This is exactly the "flat formula" failure Fig 12 :5 names.
- **Falsifier:** if a model with no explicit negation operator predicts held-out refusals (an interaction that ceases to hold) as well as one that has it, the negation requirement is not load-bearing for that system.

### Q3 — Does order change the behaviour, not just the description?

- Fig 12 :23 "this bond is symmetric, so the four are one term and nothing consults the bond to find that out." Under +, ∥ or ≡, reordering the operands changes no term. Under →, ⇒, − or ⋛, it does.
- Abel and Lutscher 2026, a primary mathematical-ecology article fetched this run, report that "different orders of emergence from the dormant phase lead to different kinds of instabilities." That is a low-overlap world corroboration of the ordered-bond reading: same species, same seasonal environment, different order, different dynamical outcome.
- ⇒ An ecological model that stores only the ingredient set (species plus coefficients) has recorded half of itself (Fig 12 :5). It cannot distinguish two regimes that differ only in timing or order, and that difference is decisive in behaviour. Mode: `specified`, corroborated but not settled.
- **Falsifier:** two otherwise identical simulations that differ only in the order of species emergence produce the same stability classification across parameter draws. If so, order is not a priced bond here.

### Q4 — What composes at the next level?

- Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom"
- Each season-level model, once settled against held-out slots, becomes an atom at the next level. Comparing two settled seasonal models with ⋛ is a **second-order composition**. Fig 12 :87 defines ⋛ as "a threshold relation between two quantities." The operand type at second order is the standing strain from the exemplar: whether settled models count as quantities at that level needs an instrument, not an argument. It is named here, not hidden.
- **Falsifier:** show that ⋛ cannot take settled models as operands at any level, by a type rule that the operators table itself licenses. Then the second-order comparison is illegitimate and the union stays first order.

## CONCLUSION

Rewiring is the isomer case (same species set, different arrangement, different behaviour). Turnover is not an isomer of rewiring; the two share a functional group pattern instead. The union is ordered, not flat: arrival is production, application is sequence, departure is subtraction, and a refusal of a held interaction needs negation, which a coefficients-only vocabulary lacks. Order is a priced bond, and the world literature supplies a corroborating case where different orders produce different instabilities. The next-level comparison of settled seasonal models is second order and carries one open operand-type strain.

This rescues what is checkable in the question without naming a formalism: the modeler must price the bond and the order, not just count ingredients. It does not say which species or which interaction fills a slot.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the Operators table, `THE_FORMULA.md`, and the eight essays. One primary ecological modeling article (Yahaya et al. 2026) and one mathematical-ecology article (Abel and Lutscher 2026) were opened. No field measurement was taken by this author.

## FIGURE CENSUS

Fig 12 (bond definition, symmetric versus ordered, isomer, functional group, settled molecule, two currencies), Fig 11 (enumeration of relations), Fig 8 (provenance and convergent derivation), Operators table (→, ⇒, −, ⋛, ¬ and their tests), Formula (steps 3, 5, 7). Strains after re-census: one, the ⋛ operand type at second order, named and not smoothed.
