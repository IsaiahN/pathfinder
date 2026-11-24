# Expert verification packet: the Tether on recessions

**What this is:** a claim in a form a macroeconomist or price-rigidity researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the shape, `general` on the split. Not `grounded`.** No dataset was opened for this derivation. It is a simulated derivation checked for internal consistency against the figures, not a test of the economic claim.

## 1. The claim, in one paragraph

The question "do recessions occur because wages and prices adjust too slowly, or because the economy is prone to deeper instability?" is not one hard question. The two mechanisms work on different subsets of episodes, they overlap through coordination failure and staggering, and the dispute does not shrink with effort. The framework therefore says split it rather than search it, and treat the result as a union compound with an intersection that has its own loop and its own ground. The shape that follows is checkable: date the recession on an independent counter; measure the adjustment speed per sector and per episode slot; measure the sign of the credit and demand feedback separately; measure the round-trip gap between the micro price statistic and the aggregate output response; and refuse the classical restoration regularity where the data falsifies it. The framework does not say which mechanism dominated in any actual recession. That is `gap` and is owed to measurement.

## 2. Three checkable sub-claims

### C1 — The A-or-B question must be split, and the split is a union compound

- **Statement (framework-internal, checkable by reading Figure 9):** a disagreement that does not shrink with effort and where each rule works on a different subset is several well-formed questions, not one hard one. When the split lands on a union, unbundle before searching again. The two conditions overlap, so a single lever clears single-condition regions and leaves the intersection standing.
- **Source, verbatim:** Fig 9 :4-5, *"are not one hard question but several well-formed ones. Split it rather than search."* Fig 9 :55, *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :56, *"A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."*
- **What to check:** is the overlap real in the literature? Yes, and checkable: Greenwald and Stiglitz (JEP 1993) argue that flexibility can amplify shocks while also calling rigidity a symptom of deeper failures; Tobin (JEP 1993) argues that Keynesian economics requires only that markets are not instantaneously cleared; the OpenStax textbook uses the coordination argument for sticky wages, and coordination failure is also a canonical amplification mechanism.
- **Refuter:** show that the two conditions are disjoint in the data, with no episode and no sector where slow adjustment and amplification both bind; or show that one mechanism alone predicts the cross-episode pattern with a residual trending to zero and no interaction term.

### C2 — The residual must be measured per slot, not aggregated

- **Statement (framework-internal plus empirical):** a single global "rigidity" or "instability" score throws away the per-object signal that says where to look. The price channel and the wage channel are different slots.
- **Source, verbatim:** Fig 1 :19, *"The residual is indexed by object slot, not aggregated."* Fig 1 :22, *"Aggregating across slots is how a live signal disappears into an average."*
- **What to check:** Ho (Economics Letters, 2025) reports that relative to sectors without nominal stickiness, output in the sticky-price sector falls by about two percent at the trough after a one-standard-deviation contractionary monetary shock, while the effect for the sticky-wage sector is smaller and statistically insignificant. Ask whether this result survives the reviewer's own specification and whether an aggregate index reproduces it.
- **Refuter:** build one aggregate rigidity index from published price and wage statistics and show that it predicts the cross-sector output response at least as well as the separate measures, with no loss of residual signal.

### C3 — The micro-to-macro transform is lossy, so the round-trip gap must be measured

- **Statement (framework-internal plus empirical):** a micro price-change frequency is not the same quantity as aggregate price flexibility. The transform between scales loses information; the gap `R_T = gap(x, (T_E ∘ T_A)(x))` is the measurement of what the coarser description cannot hold.
- **Source, verbatim:** Fig 4 :27, *"The transform between scales loses information, and that is the point."* Fig 4 :30, *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*
- **What to check:** Nakamura and Steinsson (NBER WP 18705, 2013) write that *"Simple statistics such as the frequency of price change may be misleading guides to the flexibility of the aggregate price level in a setting where temporary sales, product-churning, cross-sectional heterogeneity, and large idiosyncratic price movements play an important role."* Ask whether a proposed micro statistic predicts the aggregate response with a gap distinguishable from zero across two distinct regimes.
- **Refuter:** exhibit a micro statistic that predicts the aggregate output response with a measured round-trip gap statistically indistinguishable from zero across at least two distinct regimes. That collapses the membrane for this quantity.

## 3. What is explicitly not claimed

- Not that sticky prices are the cause, and not that financial instability is the cause.
- Not that the framework can name which mechanism dominated in the 1981 recession or in 2008. That is `gap` here.
- Not that an aggregate rigidity or instability index is adequate.
- Not that the classical restoration regularity is false in all regimes. The refusal is conditional and refutable.
- Not `grounded`. Nothing here was settled by a dataset in this run.
- Not a claim that a large panel of agreeing economists would corroborate the shape. Fig 7 :35, *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*

## 4. Provenance

- Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, verbatim extract, reopened and checked character by character on 2026-11-22. Cite as `Fig N :line`.
- Eight-step loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`, local copy.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`, local copy.
- Eight essays by Isaiah N, opened 2026-11-22, quoted in `05_what_shape_means.md`.
- World sources opened 2026-11-22 with author, venue, year and quote in `10_source_ledger.csv`: Romer (Econlib), Nakamura and Steinsson (NBER 2013), Ho (Economics Letters 2025), Greenwald and Stiglitz (JEP 1993), Tobin (JEP 1993), Minsky (Levy 1992), Scheffer et al. (Nature 2009), Kéfi et al. (Oikos 2013), OpenStax (2022).
- This packet compiled 2026-11-22. Derivation status: simulated, internally consistent with the figures.

## 5. What would settle it

A source-discriminating instrument, not a further argument.

1. **Speed Test:** measured hazard rate of price and wage adjustment after a shock, per sector and episode.
2. **Sign Test:** measured sign of the output to credit to demand feedback loop.
3. **Round-Trip Test:** measured `R_T` between the micro statistic and the aggregate response.
4. **Intersection Test:** whether the joint effect in overlapping episodes is exactly additive.
5. **Standing falsifiers:** one mechanism with a residual trending to zero; per-slot differences vanishing under aggregation; zero round-trip gap across regimes; amplification expressible as a shorter lag with equal power.

## 6. What an expert can check in twenty minutes

1. Read Fig 9 :4-5 and :55-56 and Fig 1 :19 and :22 (five short passages).
2. Check C2 against Ho 2025: is the price versus wage asymmetry robust to a specification the reviewer would choose?
3. Check C3 against Nakamura and Steinsson 2013: does the paper actually warn about micro to aggregate inference, and is the gap measurable with existing data?
4. Name one instrument that would separate adjustment speed from feedback sign in a given episode, or say why none is possible.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** simulated derivation, `specified`, `candidate`. It cannot settle the claim it reports on.
