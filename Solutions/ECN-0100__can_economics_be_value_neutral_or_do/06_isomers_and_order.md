# Bond type, symmetry, and order in an economic objective

**Mode: `specified` on the economics application, `general` on the bond-type claims.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

The audit in `01` locates the value choice at the objective link but does not say what kind of operator the objective is, what happens to symmetry when persons are aggregated, or in what order the links must be settled. Three questions are owed:

1. Is the objective a bond, and if so which one?
2. Does symmetric aggregation erase information that an ordered comparison would preserve?
3. Are two economic evaluation frameworks isomers over a shared atom set, and what order settles them?

## DOMAIN CENSUS

Atoms held in D1 and D2: a slot s (a person, a firm, a year), a quantity q(s) (income, health, output), an aggregate Q = sum over s, a threshold t, and an objective O. Bonds held: the seven, plus negation. Operators table :59-68 lists the symmetry tests. No new primitive is available without an import.

## DERIVATION

### Q1 - What kind of operator is an objective?

- Fig 12 :111: *"A vocabulary without bonds can name a state and cannot name a route to one."*
- Fig 12 :112: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."*
- Operators table :52: *"a goal is a comparison, which is why a vocabulary without it cannot state one"*
- Operators table :49: ⋛ comparison, *"a threshold relation between two quantities"*.

⇒ An objective is a **comparison bond ⋛**, not a quantity and not a state. It is ordered: Fig 12 :74 gives the test *"swap them. Does it become a different thing? Yes"*. Comparing Q with t is not the same as comparing t with Q. Choosing which operand is the target and which is the standard is a decision with consequences.

**Falsifier Q1:** exhibit an economic objective that ranks policies without any threshold relation between two quantities. If such an objective exists, the bond-type claim fails and the objective must be re-censused as a state or a distribution, not a goal. Status: triangulated (Fig 12 + Operators table).

### Q2 - What does symmetric aggregation hide?

- Fig 12 :92: *"Under a symmetric bond, k operands have k! spellings and one term, so a code that charges for the sequence overcharges by log₂(k!) while the bond term undercharges. Both wrong, in opposite directions, and only one is usually noticed."*
- Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
- Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

Under a symmetric bond, permuting persons is invisible: Q is the same term. That is exactly what makes Q useful as a summary and dangerous as an objective. An ordered bond between slot-level residuals would preserve the permutation, because swapping who gains and who loses would be a different term. So the political content of aggregation is not an add-on; it is the price of using a symmetric bond.

An aggregate and a distribution are **not isomers** under Fig 12 :117. Isomers share atoms and differ in bond. Here the atoms differ too: the aggregate has dropped slot identity, which is an atom. They are a projection and its source, which is the metamerism case from `05` section 5.

**Falsifier Q2:** show that permuting persons changes the aggregate's contribution to the policy ranking without any additional weighting or constraint. If so, the symmetry claim fails. Status: triangulated (Fig 12 + Fig 1).

### Q3 - Are welfare economics and cost-benefit analysis isomers?

- Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
- Fig 12 :124: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*

Take the shared atom set `{slot, quantity, aggregate, threshold, objective}` and write two frameworks over it:

- A **welfare** framing: per-slot quantities are compared against a threshold of adequacy, then aggregated under a social welfare function, with distributional weights explicit.
- A **cost-benefit** framing: changes in quantities are valued by willingness to pay, summed, and compared against a zero-net-benefit threshold, with distributional weights implicit or absent.

Same atoms, different bonds and different thresholds, so different substance. Under Fig 12 :117 they are **isomers**. As commonly practised, however, they do not share the same atoms: the cost-benefit framing typically drops the explicit distributional weight atom, so they are different substances over different atom sets and the isomer claim is too strong. The weaker, defensible claim is a **functional group**: both are `quantities -> comparison -> aggregate -> decision` chains, with the qualifier deciding which member.

**Falsifier Q3:** if either framework can be written without an atom the other requires (for example, cost-benefit with no threshold, or welfare evaluation with no per-slot quantity), the isomer claim fails and only the functional-group claim stands. Status: single-source for the figure definition (Fig 12), with the economics-facing check still unmeasured.

### Q4 - What is the dependency order?

- Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*
- Fig 3 :20-21: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."*
- Fig 2 :36: *"An anchor is legitimate when the question is constitutively about it."*

Order: **describe the residual -> choose a legitimate anchor -> bind the objective as an ordinary term -> measure per slot -> aggregate -> optimize -> settle.** Reversing the first two is the failure in F4 of `01`: a market price used as an anchor for a welfare question is an instrument on an axis it does not measure. Reversing the third produces the direction limit in F6: a frame cannot check the direction of its own question after the fact.

**Falsifier Q4:** show a case in which the objective can be settled before the anchor is declared, with the settlement surviving a change of anchor. If so, the dependency order is wrong. Status: triangulated (Fig 3 + Fig 2).

### Q5 - Analogues from low-overlap fields

These are corroboration of *shape*, never figure lines and never verdicts.

- **Social choice (mathematics/economics).** SEP reports that *"Arrow himself took them to be 'value judgments'"* when describing the aggregation conditions. This is the ordered-bond claim Q1 at the level of a social welfare function: the aggregation rule is a comparison carrying value content.
- **Monetary economics.** Goodhart's original: *"any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes"*. This is Q2 at the ground: a symmetric aggregate used as a target stops carrying the information it was supposed to carry.
- **Social psychology.** Campbell's law: *"The more any quantitative social indicator is used for social decision-making, the more subject it will be to corruption pressures and the more apt it will be to distort and corrupt the social processes it is intended to monitor."* Same mechanism, different field; counted as one witness for the mechanism, not two.
- **Engineering/HCI.** Value Sensitive Design's *"the two designs differentially adjudicate the value trade-off between an individual's privacy and the group's awareness of individual members' presence and activities"* is Q3's functional group in a non-economic substrate: same system, different arrangement, different value outcome.

## CONCLUSION

The objective is an ordered comparison bond ⋛ requiring a chosen quantity and threshold (Q1). Symmetric aggregation over persons hides precisely the slot-level information a welfare judgment needs (Q2). Welfare economics and cost-benefit analysis are isomers only under a deliberately shared atom set; as normally practised the defensible claim is a functional group (Q3). The order is residual, anchor, objective, measurement, aggregation, optimization, settlement, and reversing the first steps is the failure the audit found (Q4).

This rescues what is checkable in both Option A and Option B: neutral execution is a real property of a chain whose earlier links have been declared; neutral selection of the earlier links is not available. No new primitive, no import that moves the wall, and no naming of a welfare function is required to say it.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` opened 2026-11-23; the Operators and Symbols tables in the same extract; the eight essays and the ten world sources in `10_source_ledger.csv`. No numerical measurement was taken.

## FIGURE CENSUS AND STRAIN

Fig 1 (per-slot indexing), Fig 2 (anchor legitimacy), Fig 3 (dependency order), Fig 10 (convention versus verdict), Fig 12 (bond type, symmetry, isomer, functional group), Operators table (⋛ and the symmetry tests), Symbols table (R as aim). Strains after re-census: one. The comparison ⋛ is defined over *two quantities*, while a policy objective often compares a distribution with a threshold, which is a quantity and a structure. Fig 12 :104 (*"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."*) permits the demotion of a settled aggregate to an operand at the next level, but whether a distribution counts as a quantity at that level needs an instrument, not an argument. Named, not hidden.
