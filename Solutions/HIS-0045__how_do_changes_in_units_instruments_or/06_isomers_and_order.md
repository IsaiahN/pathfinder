# Isomers, operators and order in a trend decomposition

**Mode: `specified` on the structural claims, `gap` on the numerical share.** This is a simulated derivation checked for internal consistency against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

The question yields three further questions once the union framing is accepted. (1) Does "shape, not a name" forbid naming the unit, the instrument or the category? (2) What is the operator structure of a trend, and are the pre-change and post-change series isomers over a fixed atom set? (3) In what order must the corrections be admitted? Each is answered with a falsifier.

## DOMAIN CENSUS

Atoms held in the record: the quantity, the reading, the unit, the instrument, the category, the time index, the provenance trace. Bonds held: the seven, including `≡` identity, `→` sequence, `−` subtraction and `⋛` comparison, plus the unary `¬` negation. No new primitive is available without an import that needs a source gate and a shadow test (Fig 6 :12-13).

---

## Q1 - Does "shape, not a name" forbid naming the cause? CORRECTION TO MY OWN §3/§4 of `05`

- The figures README: "what a **missing** thing would have to look like (a shape, not a name)". The subject is a primitive not held in the library.
- A unit change, an instrument change and a definition change are **already in the record**. They are not missing primitives; they are bindings onto held atoms.
- Fig 13 :135: "It cannot say which primitive is missing, because naming it would mean already holding it." This forbids naming what is *not* held. It does not forbid naming what *is* held.
- Fig 6 :25: "An import adds no atom to the world." Re-expressing a series in new units adds no atom to the quantity. So the change is a binding, not a wall-moving import.
- ⇒ Naming a candidate cause is **not** forbidden. What is forbidden is claiming the framework derived it, or that it moved the ground. **I overstated this earlier** and the correction is kept visible in `05` §5b. Triangulated (README + Fig 13 + Fig 6).

**Falsifier:** produce a case where naming the cause requires positing a primitive absent from the record and from the framework, and where no provenanced import supplies it. Then the name is out of bounds.

---

## Q2 - What is the operator structure of a trend?

- Operators :34: "the only bond a flat chain can express, so every term today is a sequence whether or not it should be." A recorded series is a flat chain of readings ordered by `→`.
- Operators :46: "progress is a subtraction, which is why a vocabulary without it cannot say how far along it is." A trend between two time slices requires `−`.
- Operators :51: "a goal is a comparison, which is why a vocabulary without it cannot state one." Calling a change a "trend" already compares it against a threshold or a reference, which requires `⋛`.
- Fig 12 :112: "A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond." All three bonds occur in one trend statement, and a refutation is a fourth, unary operation.
- Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." A list of values with no metadata about which bond joined them has recorded half of itself.

So a trend is `((reading_t2 − reading_t1) ⋛ reference)` carried by `→` over the series. The three causes act on different operands: a unit change rescales the reading (`≡` over the number), an instrument change replaces the producer of the reading (a change in the channel before `−`), and a definition change re-slices which events enter the reading (a change in the operand set before `−`).

**Falsifier:** exhibit a trend statement that uses none of the three bonds, for example a bare list of values with no reference and no subtraction. Then the operator analysis does not apply to it.

---

## Q3 - Are the pre-change and post-change series isomers?

- Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Fig 12 :94: "The arrangement is the substance."
- Fig 12 :124: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

Case A, **over a fixed atom set**: if the same quantity, readings, time index and category are held, and only the unit code or the instrument changes, then the two series have the same atoms under a different realisation. Over that fixed set they are **isomers**: same atoms, different bond or different realisation, different substance. This is the claim worth testing, because it makes the type of change decisive rather than the size of the jump.

Case B, **as actually recorded**: a redefinition that moves cases between categories changes the atom set itself, since new members enter the count and old ones leave. By Fig 12 :117 those series are **not** isomers; they share a functional group (a series of counts over time) with different qualifiers. The weaker claim is that they are members of the same functional group, not variants of one substance.

- Fig 12 :103: "Composition is recursive, and the level decides what is irreducible." Once a corrected segment is settled against the ground, it becomes an atom for the next level (Fig 12 :104): "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom". So the long corrected series is a second-order composition of settled segments, not a longer first-order series.

**Falsifier, written before the run:** if either series can be written without an atom the other requires, and that atom is not a unit code or instrument realisation but a change in the counted world, the isomer claim fails and the functional-group reading stands instead. This is exactly what a definition change does, so Case B is the default for definitions and Case A for pure unit changes.

---

## Q4 - What order do the operations run in?

Dependency order from Fig 3 and the formula:

1. **Perception (Fig 3 :4-5):** is the channel returning anything that fails to resolve? If no instrument ever registered the change, there is no edge to extend from (Fig 6 :34-35: "The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve.").
2. **Vocabulary (Fig 3 :6-7):** is the unit and category stable across the interval? A reading taken below this break is a reading of nothing (Fig 3 :22-23: "A step whose input never arrives cannot be diagnosed, only its predecessor can.").
3. **Objective (Fig 3 :9-10):** state what would count as progress, i.e. which residual should shrink.
4. **Refuse before mint** (THE_FORMULA.md step 2: "REFUTED a term held is false; what is owed is a refusal, not an explanation"). If the old category was never comparable, refuse its standing before adding a correction factor. Operators :58: "a refutation is a negation, which is why a vocabulary without it can only accumulate."
5. **Mint with guards** (THE_FORMULA.md step 3): SUPPORT, REACHABILITY, NOVELTY as a product. A correction with no positive residual, or not buildable from what is held, or just a restatement of what is already in the record, is inert.
6. **Settle** (THE_FORMULA.md step 5: "the ground settles it. Verified only by what pays. A gate is not the ground."). A provenance gate is not a settlement.
7. **Promote** (Fig 12 :104): the settled segment becomes an atom for the longer series.
8. **Repeat**, with the reach changed by what was accepted and by what a refusal removed the standing of.

**Falsifier:** exhibit a case where a correction admitted at step 5 works better than one admitted after a refusal at step 4, with the old term still false. Then the refusal-first order is wrong for that case.

---

## CONCLUSION

The two series are **isomers over a fixed atom set** when only a unit code or an instrument realisation changes, and **members of one functional group with different qualifiers** when a definition change alters which events enter the count. A trend is not an ingredient list: it is a sequence carrying a subtraction and a comparison, and its refutation is a unary operation outside the seven bonds. The operations must be ordered perception, vocabulary, objective, refusal, mint, settlement, promotion; running a correction before refusing a false term is the out-of-order error named in the formula.

This framing rescues what is checkable in the question without inventing a number. `unit change = convention` is a binding with provenance, not a derivation; `pre and post series are isomers over a fixed atom set` is a checkable structural claim. The numerical share remains a `gap`.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the Operators and Symbols tables, THE_FORMULA.md and the eight essays. No measurement was used. World sources in `01` §4 corroborate the shape but did not decide it.

## FIGURE CENSUS

Fig 3 (dependency order, reading below the break), Fig 4 (round trip, if used with the harmonisation claim), Fig 6 (import adds no atom, instrument rule), Fig 8 (provenance), Fig 9 (union, filters), Fig 12 (`→`, `−`, `⋛`, isomer, functional group, recursion, arrangement as substance), Fig 13 (shape not a name, settled composition), Operators table (`≡`, `→`, `−`, `⋛`, `¬`), THE_FORMULA.md (steps 2, 3, 5, 7). Strains after re-census: S1, the operand type of `⋛` at second order, still open; S2, the fixed-atom condition on the isomer claim, named rather than hidden.
