# Structure, order and analogues for historical data comparability

**Mode: `specified`, not `grounded`.** Simulated derivation checked against the figures (`05_what_shape_means.md` section 7), not a ground reading.

## RESIDUAL

"Can these two series be compared?" does not name one quantity. It bundles a referent question, a channel question and a record question. This file derives the structure of that bundle, the order in which the checks must run, and the analogues that make the structure legible. It also states the falsifier before the conclusion.

## DOMAIN CENSUS (carried from `01`, not re-derived here)

- A, referent: actors are the population or quantity; currency is its state; anchor is the referent itself, or the convention when the question is constitutively about the convention (Fig 2 :36).
- B, channel: actors are observers, categories, instruments and units; currency is readings; anchor is an overlap or parallel measurement.
- C, record: actors are metadata and crosswalks; currency is the account of derivation; anchor is the record, inspectable and unmoved by agreement.
- D, verdict: actors are analysts; currency is agreement and residual; anchor is the ground, never agreement.

Union, not partition. Dependency order A, then B, then C, then D.

## DERIVATION

### Q1: What is the structure of a comparison?

A comparison has three operands and one bond that is easy to get wrong. The operands are `G` (referent), `C` (channel) and `R` (reading). The tempting bond is `≡` identity: `R1 ≡ R2` because both are written "42,000". Fig 12 :66 defines identity as *"two names, one referent"* with the test *"substitute one for the other. Is anything lost? No."* Here something is lost: the route by which the number was produced. So the bond is not identity.

The correct relation is a comparison `⋛` against an anchor that neither reading can move. Fig 9 :16: *"the edge can only be named from beyond it."* The anchor is outside both readings. If it is inside them (the category itself), the question is about a convention and takes branch 2.

Because the later frame inherits from the earlier one, the epochs are ordered. Fig 12 :71: *"A then B; B needs A to have happened"* (the sequence bond `→`). A shared label in the later epoch is frequently an import from the earlier one, not an independent arrival. Treating the pair as symmetric erases exactly the provenance that matters.

### Q2: Are the two series isomers?

Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
Fig 12 :95: **"Two entries with an identical ingredient set are not variants of one thing."**
Fig 12 :96: **"They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."**

Take two historical series that use the same occupation codes, the same unit names and the same headline totals. Their ingredient sets are identical. The bond is not: in one, the code was assigned by a 1911 census enumerator following an unwritten rule; in the other, it was back-coded in 1998 from a written index. Different bond, different substance. They are isomers in the figure's strict sense, not variants of one series. A comparison that reads only the ingredient set will treat them as one thing, which is the collapse Fig 12 names.

The world source on measurement confirms the structure: *"The diverse magnitudes of units having the same name ... could have arisen from the various commodities traded"* (`History of measurement`, `10_source_ledger.csv`). Same name, different magnitude, different commodity. And the ISCO source supplies a measured case: only 64 percent of job titles retained the same four-digit code across countries. A code is an ingredient; the coding act is the bond.

**Falsifier for Q2:** if a held-out sample shows that the two coding acts are governed by the same written rule, applied by equivalent procedures with the same error rates, then the bond is the same and the isomer claim fails for that pair. The series are one substance and can be compared directly on that axis.

### Q3: What order do the checks run in?

Fig 3 :20: **"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."**
Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."**
Fig 3 :22: **"A step whose input never arrives cannot be diagnosed, only its predecessor can."**

1. **Referent.** Which branch? Is the quantity independent of the rule, or constituted by it? A reading taken before this is a reading of nothing.
2. **Anchor.** Name the thing neither epoch can move. For branch 1, an independent referent; for branch 2, the convention, stated as such.
3. **Bridge.** Find an overlap or parallel measurement already returning something (Fig 6 :32, *"An instrument is not built from a description. It is improved from a worse instrument already returning something."*). If none exists, record `unreached` and describe the missing instrument's shape. Do not proceed to subtraction.
4. **Round trip.** Carry a reading up to the new category and back down; measure `R_T` (Fig 4 :30, *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*).
5. **Record.** Distinguish convergent derivation from adopted import (Fig 8 :51) before treating any agreement as evidence.
6. **Verdict.** Per slot (Fig 1 :19), against the ground, never against consensus.

Re-coding a series more finely is work at step 3. It cannot rescue a broken step 1. This is the most common practical error in historical data work and Fig 3 names it exactly.

**Falsifier for Q3:** show a case where steps 3 and 5 can be run before step 1 without changing the result, so the dependency ordering is merely advisory there. Then the chain for that quantity is a partition, not the ordered union claimed here.

### Q4: What is the analogue for the bridge?

Fig 6 :34: **"The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."**
Fig 6 :35: **"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."**

The analogue is not "build a crosswalk". A crosswalk built from a description is exactly what Fig 6 forbids. The analogue is the **overlap**: a year, a region, a sample or a parallel campaign in which both the old and the new arrangement read the same referent. Climate science calls this parallel measurement and treats it as a guideline; *How Intelligence Actually Works* calls the underlying object a trace: *"if you have a tool that can perceive the trace, you regain distinction. The tool only works because a trace existed, and not because a better tool was created."*

Three outcomes, kept distinct:

| state | what it means | instruction |
|---|---|---|
| overlap found | a proto-instrument already returns something | measure `R_T`, then compare |
| no overlap found after a distributed, independent search | `unreachable at this budget` | more search, not import (Formula step 7, SEARCHED) |
| no overlap could ever have been recorded | genuine absence of the bridging quantity | characterise the missing instrument's shape; do not manufacture an answer |

Fig 6 :27: *"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."* The honesty is in recording which one the evidence supports and why.

**Falsifier for Q4:** produce a bridge that was built from a pure description with no prior returning instrument and that passes a held-out check. That would show Fig 6 :32 does not govern this quantity.

### Q5: What is the analogue for the round trip?

Fig 4 :27: **"The transform between scales loses information, and that is the point."**
Fig 4 :31: **"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."**

`R_T = gap(x, (T_E ∘ T_A)(x))`. Here `x` is a concrete reading under the old rule. `T_A` carries it up to the harmonised category; `T_E` brings it back down to a concrete expectation under the new rule. The difference is the cost of harmonisation. It is not noise to subtract away; it is the answer to "how much did we give up by treating these as the same category?".

*Decoding Tacit Knowledge* names the same instrument in human terms: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked"* (its quotation of Fig 4 :30), and adds that the size of the correction, not the count of corrections, is what should shrink with experience. For a historical series the analogue is: report the discrepancy as a function of category, not just once for the whole dataset.

**Falsifier for Q5:** a round trip returning `x` within the stated measurement tolerance on held-out data. Then `R_T` is negligible for that pair and the harmonisation is licensed.

## CONCLUSION

The comparison is a three-operand structure with an ordered, non-identity bond. The two series are typically isomers: same tokens, different coding act, different substance. The checks run in dependency order (referent, anchor, bridge, round trip, record, verdict), and re-coding cannot rescue a broken referent step. The bridge is an overlap measurement already returning something, not a declared crosswalk. Where none exists the result is a named verdict with a described missing instrument, not a silence and not a trend. All of this is `specified` and ungrounded: no series was opened.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`; `THE_FORMULA.md` steps 3, 5, 6 and 7; six essays by Isaiah N fetched 2026-11-23 and listed in `05_what_shape_means.md`; the public sources in `10_source_ledger.csv`. No measurement was taken.

## FIGURE CENSUS

Fig 1 (per slot), Fig 2 (anchor, correlation, convention), Fig 3 (dependency order), Fig 4 (round trip, lossy transform), Fig 6 (proto-instrument, unreachability), Fig 8 (isomer evidence, convergence versus import, residual first), Fig 9 (union split, describe before looking), Fig 10 (channel decay, declared meaning), Fig 12 (identity, sequence, isomer, same ingredients different bond), Fig 13 (kind of thing, never the answer). Strained after re-census: none. The one earlier apparent conflict, anchor versus convention, was dissolved in `01` section 6 by splitting the domain.
