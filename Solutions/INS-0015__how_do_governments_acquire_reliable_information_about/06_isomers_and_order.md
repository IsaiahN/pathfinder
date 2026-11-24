# Instruments, order and isomers in government information gathering

**Mode: `specified` on the per-question claims, `general` on the structural order, not `grounded`.** Simulated derivation checked against the figures, not a ground reading (`05_what_shape_means.md` §7).

## RESIDUAL

The main audit establishes a four-condition shape but leaves two structural questions owed. (1) In what order must the conditions be attempted, given Fig 3's dependency rule? (2) Are the familiar instruments (household survey, administrative register, market trace, independent index) **isomers** over a fixed atom set, or only members of a functional group? A wrong answer to (1) spends effort above the break; a wrong answer to (2) turns a type difference into a degree difference and recommends more of the same instrument.

## DOMAIN CENSUS (brief, full census in `01` §1)

- R by arity, symmetry, scale: three object classes, non-symmetric reference relation, first order at slot and second order at series.
- D1 measurement (actors: households, firms, enumerators, instruments; currency: `o'`, `R_s`; anchor: measurement/counter/market).
- D2 reporting frame (actors: agencies; currency: reports; anchor: contestable).
- D3 outside frames (actors: households, markets, peers; currency: traces; anchor: partial, imported).
- D4 verification seat (actors: auditors, courts; currency: residuals surfaced; anchor: ground, not agreement).
- Union (Fig 9 :54–58), ordered by dependency (Fig 3 :20).

## Q1: Does "shape, not a name" forbid naming a survey or a register? CORRECTION TO MY OWN FIRST PASS

- The canonical phrase is "what a **missing** thing would have to look like (a shape, not a name)". The subject is a primitive not held in Γ.
- A household survey, an administrative register and a price trace are atoms already available in the institutional vocabulary. Naming one is a **binding** from a world frame onto an available slot, not the invention of a seventh primitive.
- Fig 6 :21: **"MINT composes inside the closure and can never add an atom."** Naming an available binding adds no atom, so it cannot move the wall.
- **I overstated the rule on my first pass.** Retracted as applied to available instruments. The gap that remains is the numerical recipe and the institutional layout (F9 of `01`), not the mention of real instruments. Triangulated (README + Fig 6), correction preserved rather than erased.

## Q2: What is the dependency order?

- Fig 3 :20: **"The chain is ordered by dependency, not by importance."**
- Fig 3 :5: "the system can tell what is in front of it, and tell it apart from what was there before" (perception).
- Fig 3 :7: "it has terms for what things afford: what can be moved, opened, joined, blocked" (vocabulary).
- Fig 3 :10: "it can say what would count as progress here, in its own terms" (objective).
- Fig 3 :22: **"A step whose input never arrives cannot be diagnosed, only its predecessor can."**
- Fig 3 :25: "Perception has obvious failures and obvious tests. Planning has obvious failures and obvious tests." Fig 3 :26 says the link between them "has neither, so it attracts the least attention and the fewest instruments." Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."**

**Derivation.** In government information, perception (frames, response rates, price collection) is well instrumented. Vocabulary (does the system have a term for what a local condition affords?) and objective (what would count as progress for this measurement?) are not. Therefore the order is: establish that a reading returns at all, then name what it affords, then state what would count as success, and only then buy more sensors or more agencies. Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."**

**Falsifier, written before the run:** if a program that adds perception capacity (more enumerators, more sensors, bigger samples) is shown to reduce the per-slot residual at a locality whose vocabulary and objective links were never measured, with the reduction reproduced against an independent ground, the dependency-order claim fails and effort above the break is not wasted. Mode `specified`.

## Q3: Are the instruments isomers?

- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Fig 12 :123: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**
- Fig 12 :46: **"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands"**.
- Fig 12 :94: **"The arrangement is the substance."**

Take a fixed atom set for an information instrument: `{slot (household or firm), enumerator or sensor, reading, reference}`. Under that set:

- A **household survey** joins slot and reading by self-report (`+` in the sense that respondent and instrument both hold the statement at once), with the enumerator as intermediary.
- An **administrative register** joins slot and reading by `⇒` production: the reading did not exist until the administrative act fired ("A produces B; B did not exist before", Operators table :37).
- A **market trace** joins slot and reading through a transaction that the measurement did not create, so the reference is produced outside the reporting frame.
- An **independent index** joins two readings by `⋛` comparison, a threshold relation between two quantities (Operators table :49).

As long as each uses the same four atoms and differs only in the typed relation, they are **isomers**: same atoms, different bond, different substance. The difference is decisive in behaviour because a self-report can be shaped by the incentive to answer, a register cannot exist without the administrative act, a market trace can be produced by actors who never saw the questionnaire, and a comparison only exists if two readings do.

**Falsifier, written before the run:** if any one of these instruments can be written without an atom the others require (for example a market trace with no slot at all, or a register with no reading until a downstream user edits it), the isomer claim fails and the instruments are a functional group instead, sharing the shape `slot + reading -> reference` with different qualifiers. Mode `specified`, single-source on the figure definition, with the institutional characterisations as bindings needing provenance.

## Q4: Order: sequence versus production versus comparison

- Operators table :31: `→` is "sequence", "A then B; B needs A to have happened".
- Operators table :37: `⇒` is "production", "A produces B; B did not exist before".
- Operators table :49: `⋛` is "comparison", "a threshold relation between two quantities".
- Fig 12 :112: **"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation"**.

These are not interchangeable, and a flat recipe that says "collect data, then audit, then publish" uses `→` for all three steps. That loses the distinction that matters. An audit is a comparison (`⋛`) between a reported reading and an independent one, not a later step in a queue. A register entry is a production (`⇒`), not a report that happened earlier. A refusal of a false metric is a negation (`¬`), which "is not a bond" (Fig 12 :112) and therefore cannot appear in a list of bonds at all. Fig 5 :56: "Requires an operator for negation, which the seven bonds do not contain."

**Falsifier:** if an audit can be written as a pure sequence with no threshold relation and still detect a metric that has stopped updating, the bond distinction is decorative and the claim is refused. Mode `specified`.

## Q5: The two currencies do not add

- Fig 12 :125: **"A composition costs in two currencies, and they do not add."**
- Fig 12 :126: **"Bits price the description. Actions price finding out whether it holds."**
- Fig 12 :128: "The two readings come apart in both directions. A long chain of cheap parts is expensive to describe and may cost one action to refute."

A richer statistical system costs bits (definitions, classifications, code sets, disclosure rules) and actions (fieldwork, reinterviews, audits, court time). A budget stated only in data fields undercounts the action cost; a budget stated only in fieldwork undercounts the description cost. Fig 12 :130: **"Summing them into one figure is the error this names, not the fix for it."**

**Falsifier:** exhibit a measurement program whose description cost and action cost are commensurable under one declared unit, with an instrument that converts a bit into a fieldwork action without loss. Mode `general` structural.

## CONCLUSION

The dependency order is perception, then vocabulary, then objective, then planning, then carry; the middle links are the ones most likely to be broken and least likely to be instrumented. Over a fixed atom set `{slot, sensor, reading, reference}` the four familiar instruments are isomers, differing by typed bond rather than by ingredient list, so the right question is **which bond** is present, not **how much** of each instrument to buy. The literal institutional recipe (sample size, interval, agency chart, weighting) is a `gap` of the shape-not-a-name kind and is reported as unreachable at this budget, not as silence (Fig 13 :134). The two currencies of description and action are held apart.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the Operators and Symbols tables, and the eight essays. No government measurement was taken.

## FIGURE CENSUS

Fig 3 :5/:7/:10/:19/:20/:22/:25/:26/:27; Fig 5 :56; Fig 6 :21/:24; Fig 8 :51; Fig 9 :32/:54/:58; Fig 12 :46/:94/:104/:112/:117/:123/:125/:126/:128/:130; Fig 13 :134; Operators table :31/:37/:49. Strains after re-census: none hidden; the "shape, not a name" correction is preserved in Q1; the institution-specific recipe remains a named gap.
