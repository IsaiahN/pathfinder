# Supporting derivation: bonds, currencies, order and analogues

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

The main audit establishes the shape but leaves the notation open. Three questions remain:

1. The question is phrased "combine experimentation **with** reliable operations." Which bond does "with" name? If it is conjunction, the arrangement is recorded as nothing (Fig 12 :6-17), and the whole derivation collapses into a flat formula.
2. The two sides are priced differently. Can they be written in one accounting, or must they be held apart?
3. What is the order of dependence, and are the two loops isomers, a functional group, or something else?

## DOMAIN CENSUS

Atoms held for this derivation: a frame, a library Γ, a residual R indexed by slot, a ground, bits (the cost of stating a routine or method), and actions (the cost of finding out whether a candidate holds). Bonds held: the seven from Fig 12, plus negation, which joins nothing. No new primitive is available without import.

## DERIVATION

### Q1 — "Explore AND exploit" is the wrong bond

Fig 12 :55-59: conjunction `+` means "both hold at once," is symmetric, and its test is "swap the operands. Does the meaning change? No." Under a symmetric bond, k operands have k! spellings and one term (Fig 12 :92-93).

Writing the answer as `experimentation + reliability` therefore records the ingredients and discards the arrangement. That is exactly Fig 12's "flat formula" collapse: "the ingredients are recorded and the arrangement is not, and nothing signals that anything was lost" (Fig 12 :14-16). It is also contradicted by the two-currency finding (F1) and by the split rule (Fig 9 :4-5).

**Verdict:** wrong bond. The plus sign makes the two sides one term and loses the direction that carries the method. Triangulated across Fig 12 and Fig 9. **Falsifier:** show that the crossing is genuinely symmetric and order-free, so that swapping operations and experiments changes nothing at the ground, and that a method still crosses.

### Q2 — The membrane uses two ordered bonds, and that is a binding, not a derivation

Fig 12 :70-74: sequence `→` means "A then B; B needs A to have happened," with the test "swap them. Does it become a different thing? Yes." Fig 12 :75-79: production `⇒` means "A produces B; B did not exist before," with the test "is there a B before A fires? No."

The figure's membrane (Fig 4 :22-26) has two directed crossings:

- Experiment → operations carries a **verified reapplicable method**. That fits `⇒` production more than `→`: the capability did not exist in operations before the method fired.
- Operations → experiment carries a **head start** that makes the next search cheaper. That fits `→` sequence: it presupposes the settled operations baseline and arrives before the search.

So the connection is not one symmetric join but two ordered crossings, bracketed by a round trip whose gap is measured (Fig 4 :30).

**Honesty:** Fig 4 does not name a glyph for the membrane. Assigning `⇒` and `→` is a binding from our notation onto the figure's words, provenanced as such. It is not a figure-derived result. Mode `specified`, ungrounded. **Falsifier:** demonstrate an order-free crossing in which swapping the two directions still carries a verified method and lowers the next search cost, with no round-trip gap.

### Q3 — The two currencies must be held apart, not summed

Fig 12 :125-130:

> **"A composition costs in two currencies, and they do not add."**
> **"Bits price the description. Actions price finding out whether it holds."**
> **"They are in different units, so a system holding one accounting cannot compare them and will not notice the shortfall."**
> **"Summing them into one figure is the error this names, not the fix for it."**

The reliability side mostly spends bits: writing the routine, training the operator, keeping the metric legible. The experiment side mostly spends actions: running the test and paying for the outcome. A single "performance score" that adds uptime to experiment throughput is a system holding one accounting. It will not notice that one side is being starved, because the shortfall is in units the score cannot express.

**Verdict:** triangulated across Fig 12 and Fig 9 :60. No single KPI. **Falsifier:** produce one unit in which both currencies price, such that a change in that unit predicts ground-settled improvement across organisations without hiding a shortfall on either side.

### Q4 — Isomers, or a functional group?

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Fig 12 :123: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

As the two literatures write them, the reliability loop and the experimentation loop share almost no atoms: incident rates, SOPs and audits on one side; hypotheses, prototypes and experiments on the other. Under Fig 12's definition they are **not** isomers. They are two members of a **functional group** with the shared substructure "a frame ranging a library against a ground through a per-slot residual." The group says what kind; the qualifier says which member.

The stronger claim becomes available only if both are rewritten over the full shared atom set {frame, Γ, R per slot, ground, bits, actions}, differing only in which bond dominates and which currency is spent. Then they **are** isomers: same atoms, different arrangement, different substance. That is the testable version, and it needs no new primitive.

**Falsifier, written before the run:** if either loop can be written without an atom the other requires, the isomer claim fails and the functional-group claim stands. At the level of the published vocabularies it already fails; that is why the weaker claim is the one reported in `01`.

### Q5 — Catalyst and cycle: which parts survive their own use?

Fig 12 :119: "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is." Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."

A reliability practice (an instrument, a checklist, a reporting channel that stays reachable) is a catalyst if it survives its own use. A one-off experimental success is a spent part. Management records normally list both as "initiatives" and omit which kind each is (Fig 12 :119: "nothing records which a term is"). Double-loop learning is a cycle: the output residual re-enters and may change the routine. Whether it closes depends on the sign of the loop, that is, whether a live residual is allowed to refuse a held routine (formula step 2, REFUTED, "a term held is false; what is owed is a refusal, not an explanation").

**Falsifier:** show a practice that is spent after one use yet behaves like a catalyst across uses, or a returning residual that changes the routine while the sign of the loop is negative.

### Q6 — Order by dependency, not by importance

Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." Fig 3 :20-21: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it." Fig 3 :25-27: the middle link, "having terms for what a situation affords and being able to say what would count as progress," has "neither" an obvious failure nor an obvious test, so "it attracts the least attention and the fewest instruments," and "A link with no instrument is not a link that works. It is a link nobody has looked at."

For this question the order is:

1. **Perceive.** Can the organisation see `R_s` at all, per slot, against an anchor it cannot move? (Fig 1 :19, Fig 2 :29-30)
2. **Vocabulary.** Does it have terms for what a slot affords, and can it say what progress there would look like? This is the unwatched middle link.
3. **Objective.** Does each loop have its own objective, in its own currency, with no sum? (Fig 9 :4-5, Fig 12 :130)
4. **Plan.** Only now do planning tools and dashboards belong. Effort spent here before links 1 to 3 arrive at a step that cannot use it.
5. **Learn and carry.** Name what worked, verify it, carry it as a method, not a recording (Fig 3 :15, Fig 4 :22-24).

Fig 3 :29-30: "Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."

**Falsifier:** show an organisation where a planning or optimisation intervention measurably repaired a broken vocabulary link without first installing an instrument for that link.

## CONCLUSION

The combination is not a conjunction. It is:

- two ordered crossings across a directed membrane, not a symmetric join (Q1, Q2);
- two currencies held in separate accountings, never summed into one KPI (Q3);
- a functional group as published, with isomerism as a stronger claim available only over a shared atom set (Q4);
- a catalyst/cycle distinction that records which practices survive their own use and whether a returning residual can refuse a routine (Q5);
- a dependency order that installs the per-slot instrument and the objective before any optimisation effort (Q6).

Every item carries its own falsifier. None is `grounded`; no organisation was measured.

## ANCHOR

Verbatim figure text extracted from the canonical local `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; the eight essays by Isaiah N, read 2026-11-22; the world sources listed in `10_source_ledger.csv`. No measurement was taken.

## FIGURE CENSUS

Fig 3 (dependency order, the unwatched middle link), Fig 4 (membrane direction, round trip), Fig 5 (refusal as step 2), Fig 9 (split, filters not verdicts), Fig 12 (symmetry, production, sequence, two currencies, isomer, functional group, catalyst, cycle), Fig 1 and Fig 2 (per-slot residual, unmoving anchor), Formula (steps 2, 3, 5, 7). Strained after re-census: the glyph assignment in Q2 is a binding onto Fig 4's words, not a figure derivation, and is labelled as such; no figure-to-figure strain remains.
