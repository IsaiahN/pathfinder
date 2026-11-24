# Isomers and order: chain, cycle, and the bond between two readings

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §8).

## RESIDUAL

The record asks whether expectations are a cause of inflation or a response to it. Two sub-questions are owed: (1) what **bond** joins belief, action and outturn, and (2) are the "cause" reading and the "response" reading **isomers** under Fig 12's definition, that is, the same atoms arranged differently? A third question follows: in what **order** must the three domains be settled?

## DOMAIN CENSUS (brief; full census in `01` §1)

Atoms held: belief `b` (stated expectations), action `a` (price and wage setting), observation `o'` (realised inflation), weighting `w`, residual `R`. Bonds held: sequence `→`, production `⇒`, comparison `⋛`, cycle (Fig 12 :121), functional group (Fig 12 :124). No new primitive is available without an import, and none is owed (Fig 6 :24: "A wrong atom costs more than starting from primitives").

## DERIVATION

### Q1: What bond joins the three atoms?

- Operators table :30: "A then B; B needs A to have happened" (`→`, sequence, ordered).
- Operators table :36: "A produces B; B did not exist before" (`⇒`, production, ordered).
- Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."

The cause leg is `b → a ⇒ o'`: the belief precedes the action, and the action produces the outturn. The response leg is `o' → b`: the outturn re-enters as input to the next belief. Composed, they form a cycle. Fig 12 :121 distinguishes a chain from a cycle by construction, so the two readings cannot be combined by simply concatenating them as a longer chain; the return edge changes the kind of object.

- **Falsifier (pre-registered as R1 and R2 in `01` §4):** show that either edge is absent at every horizon. Then the object is a chain or nothing, not a cycle.

### Q2: Are the two readings isomers?

- Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Fig 12 :124: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

Write the two readings over the same three atoms:

| reading | arrangement | atoms |
|---|---|---|
| Cause reading | `b → a ⇒ o'` | b, a, o' |
| Response reading | `o' → b → a` | b, a, o' |

They share all three atoms and differ only in the bond arrangement. By Fig 12 :117 they are **isomers**: same atoms, different arrangement, different substance. The difference is invisible in a flat ingredient list ("expectations, prices") and decisive in behaviour: one predicts that shifting beliefs moves prices, the other predicts that shifting prices moves beliefs. This is why a regression containing both variables cannot tell them apart by inspection, the bond is not recoverable from the operands (Fig 12 :94: "The arrangement is the substance").

The stronger claim fails on the record as currently written. If the "cause" reading additionally requires a real variable that cannot appear in the "response" reading (for example an exogenous expectations shock treated as a different atom rather than a different bond), the two readings share only some atoms and are not isomers; they are members of the same **functional group** (Fig 12 :124) at best.

- **Falsifier, written before the run:** if either reading requires an atom the other does not, the isomer claim falls and the functional-group reading stands. If a single arrangement over shared atoms can generate both behaviours under different parameter values, the isomer claim also falls, because the difference was in parameters, not bonds.

### Q3: What is the sign of the loop?

Fig 12 :121: "The sign of the loop decides whether it closes." There are two cases:

- **Reinforcing sign.** Higher outturns raise expectations; higher expectations raise price setting; higher price setting raises outturns. The loop closes and can amplify. This is the wage-price-spiral shape.
- **Damping sign.** Expectations are anchored, so an outturn surprise produces a small belief update. The loop closes weakly and the system returns toward the target.

The figures do not select the sign; the sign is a ground question. The world literature supplies a per-slot hint, not a verdict: Moessner (2025) found "inflation expectations have a significantly positive effect on inflation" and that the effect is "significantly larger when inflation is higher", which is consistent with a reinforcing sign in high-inflation slots. Fair (2024) found household expectations "mostly affected by current and past inflation", which is consistent with a response leg whose strength depends on recent history. Both are secondary corroboration.

- **Falsifier:** an exogenous expectations shift that produces an inflation response whose sign flips by regime, while the belief update stays fixed. That would break the single-sign model and require per-regime slots (F5).

### Q4: What order do the domains settle in?

- Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."
- Fig 9 :53: "Nobody chooses. The gap does, and the gap is only as good as its description."

Dependency order:

1. **D1 distinctness:** is `b` a separate reading from `o'`? Settled by the Symbols table and by an instrument that discriminates survey expectations from market breakevens. Without this, `R` is undefined.
2. **Per-slot residual:** where does `R_s` have live mass? Fig 1 :19: "The residual is indexed by object slot, not aggregated." This decides which slots need an instrument.
3. **Bond and sign:** cause leg, response leg, reinforcing or damping. This is the shape claim.
4. **Magnitude:** how much of inflation is attributable to expectations? This needs D3's exogenous instrument and is `gap` here.

A magnitude estimated before step 2 lands on an average that has already discarded the signal. A magnitude estimated before step 3 attributes to a cause leg what may be a response leg.

### Q5: Why the fourth operator matters here

Fig 5 :53-55 names a fifth gap kind: "refuted: a term we hold is wrong; a term is owed that says so" and "What it removes is not a term but a term's standing to be composed over. Nothing leaves the library. What falls is the reach." Operators table :55: "this does not hold" (negation `¬`, not a bond).

The forced A-or-B is not a missing term; it is a wrong claim about the bond. Refusing it adds a refusal to the record and removes the standing of "either A or B alone" as an answer. Nothing is deleted, and the reach falls because something was added. This is why `01` records the refusal rather than quietly replacing the question with a different one.

## CONCLUSION

The three atoms `b`, `a` and `o'` are joined by an ordered production chain in the cause direction and an ordered sequence in the response direction. Composed, these form a **cycle** (Fig 12 :121), not a chain. The two directional readings are **isomers** over the shared atom set, differing in bond arrangement only; if a reading needs a different atom, the weaker functional-group claim applies. The order of settlement is distinctness, per-slot residual, bond and sign, then magnitude. The sign and the magnitude are ground questions, and both remain open here. This rescues what is defensible in both camps without importing a new theory or asserting a number.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` extracted this session; the Operators and Symbols tables; no measurement was used. World hints from Moessner (2025) and Fair (2024) are secondary and are recorded in `10_source_ledger.csv`.

## FIGURE CENSUS

Fig 1 :19 (per-slot residual), Fig 3 :19 (dependency order), Fig 5 :53-55 (refutation fifth bin), Fig 6 :24 (wrong atom cost), Fig 9 :53 (gap selects), Fig 12 :94, :117, :121, :124 (arrangement, isomer, cycle, functional group), Operators table :30, :36, :55, Symbols table. Strained after re-census: the sign of the loop is unmeasured, not smoothed.
