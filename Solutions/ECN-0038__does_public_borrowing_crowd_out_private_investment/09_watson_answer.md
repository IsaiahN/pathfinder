# WATSON answer: does public borrowing crowd out private investment, or support it through demand?

**Mode: `specified` on the shape, `general` on the structural rule. Not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This run synthesizes `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule ("the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the question it reports on. No dataset was opened and no estimate was recomputed.

## QUESTION

Decide, in effect terms, what the Tether says about the effect of deficit-financed public borrowing on private investment. Option A: a single sign governs, crowding out or crowding in. Option B: the effect is a regime-indexed sign and magnitude over two distinct routes. What each leads to: A averages over slots and discards the live signal, then asks a school to certify the result; B states the slots, keeps the routes separate, supplies refuters in advance and leaves the magnitude open until a ground settles it. The sought-for shape was bound as an ordinary term before the search (formula step "Direction").

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors, currency and anchor; partition or union; order by dependency.

- **R (the residual).** The sign and magnitude of `dI/dG`. Arity: two named conditions plus an expectations modifier. Symmetry: asymmetric, since the channels run in different currencies and directions and stand in a threshold relation, not a symmetric join. Scale: micro (firm and household), meso (loanable funds and aggregate demand), macro (general equilibrium and the cycle), intertemporal (expectations and policy rules). Fig 9 calls this a union compound, not one hard question.
- **D1 Credit / resource channel.** Actors: government issuer, savers, firms, bond market, central bank. Currency: interest rate, saving, cost of capital. Anchor: observed rate and private fixed investment. Union condition, overlapping with D2.
- **D2 Demand / income channel.** Actors: government spender, households, firms with idle capacity. Currency: aggregate demand, income, multiplier, accelerator. Anchor: observed income and investment after an identified spending shock. Union condition, overlapping with D1.
- **D3 Expectations / regime channel.** Actors: forward-looking households and firms, fiscal authority. Currency: expected future taxes, saving now, policy rule. Anchor: observed consumption and saving responses to identified deficit changes. Modifier of D1 and D2.
- **D4 Regime index (the slot).** Actors: central bank at or off the bound policy rate, labour slack, exchange-rate regime, debt level, openness, financial frictions. Currency: regime state. Anchor: measured state-dependent response per slot. This is the index, not a separate object.
- **D5 Measurement / verification frame.** Actors: econometricians, datasets, natural experiments. Currency: identification and estimates. Anchor: the data and the outcome, which do not update on a school's prior.
- **Order by dependency.** Describe R and enumerate slots first; establish identification second; decide the live route per slot third; estimate the magnitude last (Fig 3 :20). Describe before choosing a frame (Fig 9 :27). Refuse the single-sign question before minting a state-contingent term (formula step 2).

Strain test: a figure line that requires calling a price a structure, or a regime an object, was sent back to the census. The Fig 13 substrate mapping is recorded as an analogue and is strained, not used as a witness.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the figure text.

- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> per-domain verdict for D4: the residual must be read per regime; `triangulated` with Fig 9 union unbundling (low overlap between slot indexing and compound splitting).
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." -> a single "net effect" is not an answer; `triangulated`.
- Fig 1 :13 "a global R near zero with one live slot residual is a legal state." -> an average near zero is compatible with a strong per-slot effect; `single-source` for this specific reading.
- Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." -> D1, D2 and D3 overlap; `triangulated` with Fig 1.
- Fig 9 :57 "a case in two conditions is not a harder case of either." -> the intersection is a specific compound, not a harder case of one channel; `triangulated`.
- Fig 12 :111 "A vocabulary without bonds can name a state and cannot name a route to one." -> D1 and D2 are distinct routes over shared ingredients; `triangulated` with Fig 11 valence.
- Fig 11 :50 "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds." -> borrowing changes sign with the regime; `triangulated` with Fig 12 route distinction.
- Fig 11 :51 "No standing list of good actors survives a change of residual." -> no universal sign; `triangulated`.
- Operators table: "a threshold relation between two quantities" -> D4 is a threshold comparison, ordered; `single-source` for the figure definition, with the operand type at macro scale named as a strain.
- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." -> D5 verdicts come from an identified reading, not a school; `triangulated` with Fig 9 :60.
- Fig 2 :42 "Buy independence in proportion to the cost of being wrong." -> fiscal errors are costly, so independence must be bought; `triangulated` with Fig 2 :40.
- Fig 8 :45 "Two frames together reach what neither reaches alone." -> the credit frame and the demand frame have differing closures and a low-overlap union has a surplus; `single-source` for the framework claim, corroborated by world sources below.
- Fig 8 :53 "Residual first, frame second." -> describe the slots before picking a school; `triangulated` with Fig 9 :27.
- Fig 5 :44 "A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly." -> a universal sign fails the MDL bargain; `single-source`.
- **Gap:** a single universal sign governing all slots. After a genuine re-census no figure line licenses it, and the world evidence is regime-conditional. `gap`, reported as a verdict, not a silence.

## WORLD (secondary sources read 2026-11-23)

World sources corroborate but never overrule the figures. Each was opened; overlap is declared.

- **Public economics, Wikipedia "Crowding out (economics)" (2026).** Quote from Laura D'Andrea Tyson (2012): "When there is considerable excess capacity within the economy, an increase in government deficit does not crowd out private real capital formation." Predicts: crowding in in slack, crowding out at capacity. Verdict: corroborates Fig 11 valence. Overlap: low with the figures, secondary encyclopedic synthesis quoting a named economist.
- **Macroeconomics, Wikipedia "Fiscal multiplier" (2026), quoting IMF (2012).** Quote: "Our results indicate that multipliers have actually been in the 0.9 to 1.7 range since the Great Recession." Predicts: a state-dependent magnitude, not a universal coefficient. Corroborates Fig 1 :19. Overlap: low with the figures; the page also cites Ilzetzki, Mendoza and Vegh (2013), not opened directly, so that citation is not treated as read.
- **Economic methodology, Wikipedia "Lucas critique" (2026), quoting Lucas (1976).** Quote: "any change in policy will systematically alter the structure of econometric models." Predicts: an estimate conditional on a policy rule, not invariant across regimes. Corroborates D3 and the regime index. Overlap: low.
- **Public finance, Wikipedia "Ricardian equivalence" (2026), quoting Barro (1979).** Quote: "shifts between debt and tax finance for a given amount of public expenditure would have no first-order effect on the real interest rate, volume of private investment, etc." Predicts: no effect under its strict assumptions; the same page reports the assumptions are challenged and that spending shocks increase consumption. Verdict: conflicts with a universal crowding-out claim, corroborates the per-slot reading by showing the result is conditional. Overlap: low. This conflict was sent back to the census and resolved there as a regime condition, not used to flip a figure verdict.
- **Statistics, Wikipedia "Simpson's paradox" (2026).** Quote: "a trend appears in several groups of data but disappears or reverses when the groups are combined." Predicts: reversal under aggregation. Corroborates Fig 1 :22 from a low-overlap field. Overlap: very low.
- **Ecology, Wikipedia "Mutualism (biology)" (2026).** Quote: "Under certain conditions species of fungi previously in a state of mutualism can turn parasitic on weak or dying plants." Predicts: valence flip with conditions. Corroborates Fig 11 :50 from a low-overlap field. Overlap: very low.
- **Health economics, NBER working paper 18087, Wehby and Courtemanche (2012), Journal of Health Economics.** Quote: "This literature, however, ignores the possibility that the effect could vary throughout the BMI distribution or across socioeconomic and demographic groups." Predicts: an average hides heterogeneity. Corroborates the per-slot rule methodologically only. Overlap: very low, and the subject is cigarette prices, not fiscal policy, so it is not evidence for any economic magnitude.
- **Search / shape, Isaiah N, "The Library of Babel: Locating The Book of Books" (Substack, 2026).** Quote: "Perhaps your problem was a bundle or conflation of several problems masquerading as one?" Predicts: split the either/or before searching. Corroborates Fig 9 :54. Overlap: high (framework author), so weak corroboration.
- **Instrument discrimination, Isaiah N, "The Hard Problem is About Source" (Substack, 2026).** Quote: "If several paths create the same behavior, then behavior is a projection with lossy information." Predicts: a single coefficient cannot name its source. Corroborates the demand for route discrimination. Overlap: high (framework author).
- **Validation, Isaiah N, "The Recursive Self-Improvement Trap" (Substack, 2026).** Quote: "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." Predicts: this run cannot certify itself. Corroborates the simulated status. Overlap: high (framework author).

Agreement among the three essays is expected because they share an author and an evidence pool; it is one witness, not three. The two low-overlap field sources (statistics and ecology) and the public-economics sources are independent enough to count as convergent shape corroboration, but none supplies a magnitude for this question.

## VERDICT (from the figures)

The shape survives; the either/or does not. The response of private investment to public borrowing is a regime-indexed sign and magnitude over two distinct routes. Per slot, the credit route dominates at capacity or when monetary policy offsets the impulse, and the income route dominates with slack and a bound or accommodative policy rate. The channels are isomers over a nearly shared atom set, invisible in an ingredient-only regression. The regime crossing is a threshold comparison, not a smooth average. A universal sign is a `gap` after re-census, and the magnitude in any slot is `candidate`, unreached here because no identified reading was taken. The ⋛ operand type at macro scale is a named strain, not a hidden correction.

- **cost if wrong:** high and real. Fig 2 :42 "Buy independence in proportion to the cost of being wrong." A wrong universal sign means austerity in a slump or overstimulus at capacity, both of which move employment and capital formation. The cost is bounded by the fact that the shape states its slots and refuters up front, so an error is locatable rather than invisible; the avoidable extra cost is spending the independence of outside readers by sending a conclusion instead of a residual.
- **undoable:** yes. The regime index and the route distinction are removable or revisable without withdrawing the per-slot rule. A per-slot estimate can be re-run when a better instrument arrives, and a superseding packet can replace this one. No primitive has to be withdrawn, and nothing here has been deleted.
- **reversed by:** a ground reading, not agreement. An identified estimate returning the same sign and indistinguishable magnitude in every slot; a derivation showing that slot aggregation preserves the signal Fig 1 :22 says is lost; a reading showing the two routes are one bond; a policy-regime change that breaks the conditional relation Lucas described; or a figure re-census that certifies ⋛'s operands at macro scale. Until one fires, the verdict stands as `candidate`.

## Sources

- [The figures, as text (local framework extract)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [figures README (canonical local copy)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA, eight-step loop and mode rule](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [Crowding out (economics)](https://en.wikipedia.org/wiki/Crowding_out_(economics))
- [Fiscal multiplier](https://en.wikipedia.org/wiki/Fiscal_multiplier)
- [Lucas critique](https://en.wikipedia.org/wiki/Lucas_critique)
- [Ricardian equivalence](https://en.wikipedia.org/wiki/Ricardian_equivalence)
- [Simpson's paradox](https://en.wikipedia.org/wiki/Simpson%27s_paradox)
- [Mutualism (biology)](https://en.wikipedia.org/wiki/Mutualism_(biology))
- [NBER Working Paper 18087, Wehby and Courtemanche (2012)](https://www.nber.org/papers/w18087)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
