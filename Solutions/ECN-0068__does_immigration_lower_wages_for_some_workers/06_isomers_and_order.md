# Union, estimands and order

**Mode: `specified` on the structural claims, `general` on the composition rule. This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 5).**

## RESIDUAL

The headline question asks for one answer to three alternatives. The working residual is whether "lower wages for some", "raise overall productivity" and "different effects across skill groups and horizons" are three spellings of one quantity, two different estimands over the same atoms, or a union of overlapping conditions. Two questions are owed:

1. Under Fig 12's definitions, are the relative wage effect and the total wage effect **isomers** (same atoms, different bond), merely members of a **functional group**, or different molecules altogether?
2. In what order should the search run, so that a headline is not computed before its slots exist?

## DOMAIN CENSUS (supporting derivation only)

Atoms held for this derivation: the worker cell `S`, the inflow `I`, the complementarity relation `C`, the competition relation `K`, capital adjustment `A`, the region `R`, the horizon `H`, and the measured readings `w` (wage) and `q` (output). Bonds held: sequence `->`, comparison `><`-style threshold (written `⋛` in the figures), conjunction `+`, subtraction `-`, negation `¬`. No new primitive is available without import.

- Relative wage effect: `w(S) - w(S without I)`, holding the rest of the wage structure fixed.
- Total wage effect: `w(S with I and A) - w(S without I and A)`, allowing the rest of the structure to move.
- Productivity effect: `q(I) - q(no I)`, with task allocation and technology as the intervening structures.

## DERIVATION

### Q1 - Are relative and total wage effects isomers?

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

Fig 12 :124: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

As written above, the two estimands share the same cell `S` and the same inflow `I`, but they do not share the same full atom set: the total effect has capital adjustment `A` in the composition, the relative effect explicitly holds it out. By Fig 12's definition they are **not isomers**. They are better read as two members of a **functional group**, the `w(.) - w(.)` subtraction form, with different qualifiers on what is allowed to move. That is precisely the distinction Dustmann, Schonberg and Stuhler (JEP 2016) draw when they say the three classes of estimates "are not comparable".

The stronger isomer claim would require both estimands to be written over the full shared atom set `{S, I, C, K, A, R, H, w, q}` and to differ *only* in the bond between the inflow and the cell (competition `K` versus complementarity `C`). Under that writing they would be genuine isomers: same atoms, different arrangement, different measured substance. This is a checkable structural claim, and it is the one worth offering to an expert.

- **Falsifier, written before the run:** if either estimand can be written without an atom the other requires, even after the full-set restatement, the isomer claim fails and the functional-group reading stands. JEP 2016 already gives prima facie evidence for failure, because relative-effect studies do not hold the same adjustment set as total-effect studies.
- **Status:** `single-source` for the figure definition (Fig 12), with the economics restatement `specified` and unmeasured.

### Q2 - Is the union a partition that can be searched item by item?

Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."

Fig 9 :57: "a case in two conditions is not a harder case of either."

The skill condition and the horizon condition overlap: the low-skill, short-run, high-inflow city cell is a compound, not the sum of a skill problem and a time problem. A lever that clears the skill condition alone leaves the horizon condition binding. Foged, Hasager and Yasenov (2022) report that the mean relative wage effect is negative while the mean average wage effect is small and positive, which is what an overlapping-conditions compound leaves behind when one lever is applied to only one condition.

- **Falsifier:** if the sign and magnitude in the intersection are always exactly the sum of the single-condition effects, the union reading fails and a partition reading is sufficient.
- **Status:** `triangulated` (Fig 9 and the independent estimand split in JEP 2016).

### Q3 - What is the order of the search?

Fig 3 :20: "The chain is ordered by dependency, not by importance."

Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."

Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit."

The dependency order for this question is:

1. **Describe the residual in effect terms.** Sign by slot, by estimand, by horizon. Fig 9 :22 names the three descriptors: arity, symmetry, scale.
2. **Fix the anchor.** What measurement would move a slot's reading? Fig 2 :29 defines the anchor as something that "does not change its answer because of what any frame thinks".
3. **Settle the estimand before the sign.** A relative wage effect and a total wage effect are different links in Fig 3's chain; reading a sign at step 2 is a reading below the break.
4. **Read slots before aggregates.** Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
5. **Measure the round trip gap.** Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." Any compression from cell-level results to a headline carries `R_T`, and the headline is not the cell results returned unchanged.
6. **Choose the frame last.** Fig 8 :53: "Residual first, frame second."

- **Falsifier:** if a defensible sign can be produced before steps 2 and 3 without any loss of meaning, the dependency order is decorative rather than load-bearing.
- **Status:** `triangulated` (Fig 3 and Fig 9, two figures with low overlap).

### Q4 - Two currencies, not one number

Fig 12 :125: "A composition costs in two currencies, and they do not add."

Fig 12 :126: "Bits price the description. Actions price finding out whether it holds."

Fig 12 :130: "Summing them into one figure is the error this names, not the fix for it."

For this question the two currencies are: the cost of stating a slot-indexed answer (it is long, needs cells and horizons), and the cost of settling it (a natural experiment, a dataset, an instrument). Turning the two into one "confidence score" is the named error. Peri's 2009 productivity result is a cheap description backed by an expensive instrument (border distance, pre-1960 communities). A cheap verbal claim about "wages" is not made costly by repeating it.

- **Falsifier:** a demonstration that the description cost and the settlement cost are the same quantity in a common unit, with no loss.
- **Status:** `single-source` (Fig 12), structural.

## CONCLUSION

Relative and total wage effects are not isomers as currently written; they are members of a functional group that becomes a real isomer claim only under a full shared-atom restatement. The headline question is a union of overlapping conditions, so the search must be unbundled before it is run. The dependency order is describe, anchor, estimand, slots, round trip gap, frame. Two costs are held apart. What this derivation does **not** supply is the sign of any effect; that is the `gap` recorded in `01_figure_grounded_audit.md` F5.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read this session. JEP 2016, JES 2019 and SJE 2022 were opened and quoted for the estimand distinction; the work cited is secondary and never overrules a figure. No measurement was taken here.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 2 (anchor), Fig 3 (dependency order), Fig 4 (round trip gap), Fig 8 (residual first), Fig 9 (union versus partition, describe before looking), Fig 12 (isomer, functional group, two currencies). Strains after re-census: none. The Fig 13 gradient-over-time line was initially tempted toward the horizon question and was re-assigned to the substrate in `01` section 5.
