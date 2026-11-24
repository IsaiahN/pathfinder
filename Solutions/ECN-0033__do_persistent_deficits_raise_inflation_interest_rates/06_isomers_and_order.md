# Structure, order and analogues: inflation, interest rates and the flow-to-stock crossing

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).

## RESIDUAL

Two questions are owed after `01_figure_grounded_audit.md`: (1) under Fig 12, are inflation and the interest rate isomers, or something weaker, and (2) what order does the financing chain have, from deficit flow to debt stock to the two effects? A third question is forced by a strain: the Fisher relation appears to bond a nominal interest rate directly to expected inflation.

## DOMAIN CENSUS

Atoms held in the structural reading: inflation treated as ordering (spectrum), interest rate treated as a difference that can be spent (gradient), government financing act, time as a state, output as a state. Bonds held: sequence `→`, subtraction `−`, comparison `⋛`, conjunction `+`. No new primitive is available without import. Currency: price levels, yields, flows and stocks. Anchor: measured inflation and measured yields.

## DERIVATION

### Q1 : Are the two effects isomers?

Fig 12 :117: `isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour.` Fig 12 :124: `functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member.`

As the question poses them, inflation and interest rates share only the financing act. They have different units, different instruments and different atoms. By Fig 12's definition they are **not isomers**; they are two members of the same **functional group**, "a financing consequence of a deficit," with different qualifiers (ordering of prices versus directed price of borrowing).

The stronger version: if both are written over a full shared atom set `{financing act, money, bonds, time, expected future taxes}`, differing only in which bond mediates which state, then they **are** isomers: same atoms, different arrangement, different substance. That is the claim worth testing, because it predicts that the same financing shock can move both without one causing the other.

**Falsifier, written before the run:** if either effect requires an atom the other does not (inflation needs money creation but the rate needs only bond supply, with no shared atom), the isomer claim fails and the functional-group reading stands. The Friedman (1978) result that the direction of crowding depends on the substitutability among money, bonds and real capital is the first check on this: it suggests a shared atom set, but it does not settle it.

### Q2 : What order does the financing chain have?

Fig 12 :104: `A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world.` Fig 4 :30: `So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked.`

The order is:

```
deficit (flow, per period)
   → debt stock (accumulation across periods)          [lossy crossing]
      → financing mix (money / bonds / taxes)          [branch]
         → inflation slot  (ordering of prices)
         → interest-rate slot (directed price of borrowing)
```

The deficit is not the debt. "Persistent" names the integration from flow to stock. The crossing drops denomination, maturity, holder and the monetary response, so the round-trip gap `R_T` is nonzero. Treating a one-year deficit as if it were the debt stock is dead reckoning. The empirical sources enforce the point: Bordo and Levy's wartime cases are about *financing* the deficit, and Angeletos, Lian and Wolf's conditions are about what *accompanies* the deficit (rate or tax hikes), not about its size alone.

**Falsifier:** if a deficit with no accumulated debt produces the same two effects as one with a large accumulated stock, the flow-to-stock dependency fails and `R_T` for this crossing is zero.

### Q3 : Strain: does the Fisher relation bond two structures directly?

Fig 13 :74: `Everything else is a composition across the two kinds, never within one.` Fig 13 :75: `Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state.`

The Fisher decomposition writes the nominal rate as the real rate plus expected inflation. Read naively, that bonds a gradient-like quantity to a spectrum-like quantity directly, which would break Fig 13 :75 (two structures join only through a state). This is a genuine strain, not a footnote.

**Re-census:** the figure forbids a direct *same-kind* bond at the level of the six primitives. The Fisher relation is a relation between two **derivatives**, both of which are indexed to the state `time` (a real rate per unit time, an inflation rate per unit time). So the legal parse is `structure → state(Time) → structure`, which Fig 13 :75 explicitly permits: two structures join through a state. The strain dissolves after re-census; it does not require softening the figure. This matches the exemplar's re-census rule: a reading that makes figures contradict each other has misidentified its domain.

**Remaining strain, named not hidden:** whether the Fisher relation is a `+` conjunction or a `⋛` comparison is not decided by the figure. The Operators table calls ⋛ `a threshold relation between two quantities`; the identity is better read as `+`. That is a notation choice, and I record it rather than pretending the figure settled it.

### Q4 : What is the union order among the conditions?

Fig 9 :56: `A bundled problem is usually a union of overlapping conditions, not a list of separate ones.` Fig 9 :58: `What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either.`

The conditions do not form a chain; they overlap. Monetary accommodation, currency denomination, expectations regime and economic slack can each bind at once. A single lever that clears the region where only one condition holds leaves the intersections standing. So the union must be unbundled into per-condition loops, and the remaining compound (a case in two or more conditions) keeps its own ground. This is why the answer in `07_the_tether_answer.md` is a table and not a sentence.

## CONCLUSION

The two effects are a **functional group** as posed, with a real but conditional **isomer** claim available if both are written over a full shared atom set. The financing order runs deficit flow to debt stock to financing mix to the two effect slots, with a lossy first crossing. The Fisher relation is legal only when parsed as two structures joined through the state Time; that re-census dissolves the only strain found. `R_T` is nonzero at the flow-to-stock crossing and has not been measured numerically.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the Operators table, `THE_FORMULA.md`, and the eight sources in `10_source_ledger.csv`. No measurement was taken by this derivation.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 4 (lossy crossing, round trip), Fig 9 (union rather than partition), Fig 12 (isomer, functional group, settled molecule becomes atom, bond price), Fig 13 (two kinds, cross-kind composition, spectrum versus gradient), Operators (conjunction versus comparison), Formula (steps 3, 5, 7). Strains after re-census: one notation choice (`+` versus `⋛` in the Fisher identity), recorded in Q3 and not hidden.
