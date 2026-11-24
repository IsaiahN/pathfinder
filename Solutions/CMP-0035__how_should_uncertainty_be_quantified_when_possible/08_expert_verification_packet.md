# Expert verification packet: quantifying uncertainty under mechanism ignorance plus random variation

**What this is:** a claim in a form an uncertainty quantification researcher can check. Mode, derivation and refuters are stated before the conclusion.

**Mode: `specified` on the shape, `general` on the structural limits. Not `grounded`.** No forecast comparison, held-out score or experiment was run for this packet. It offers a shape and a route, not a result.

**Status:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the question it reports on.

## 1. The claim, in one paragraph

When outcomes depend on a poorly known mechanism and random variation together, the question is a union of two conditions and must be unbundled before it is searched. An acceptable uncertainty report is indexed per outcome or regime, not a single global width. It separates the spread that more data would reduce from the spread the process will always have. It carries a separate, non-probabilistic marker for the case where the mechanism class itself is wrong or missing, which is a refusal rather than a wider interval. It records how much the evidence behind candidate models overlaps, and it is scored against materialised outcomes, with mode and cost if wrong stated. The components are not summed, because bits of description and actions of measurement are in different units. The framework returns this shape; it does not name an estimator and cannot certify complete coverage.

## 2. Three checkable sub-claims

### C1: framework-internal; checkable by reading Figures 9, 1 and the Symbols table

- **Statement:** the question is a union compound that must be unbundled, and the report must be per slot rather than globally aggregated.
- **Source, verbatim:** Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57 "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound." Fig 1 :19 "The residual is indexed by object slot, not aggregated." Symbols table :43 "R is measured per slot, never as a single global number."
- **Refuter:** a pre-registered decision task in which a single scalar induces the same action and the same expected loss as the per-slot decomposed report across all tested conditions.

### C2: representation claim; checkable by a modeller or statistician against their own practice

- **Statement:** the two currencies must be held apart and the structural case must not be a probability over outcomes. Same-ingredient representations with different bonds are different things (isomers), not spellings of one term.
- **Source, verbatim:** Fig 12 :125 "A composition costs in two currencies, and they do not add." Fig 12 :130 "Summing them into one figure is the error this names, not the fix for it. A price in bits and a price in actions are two readings, held apart." Fig 6 :27 "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same." Fig 12 :117 "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- **What to check:** a distribution family with interval-valued parameters and an interval of distributions over the same family hold the same atoms but bind the bounds at different levels. Do they induce different actions and different ground scores in your problem? Roy and Oberkampf (2011) treat epistemic uncertainty as intervals with no assumed probability distribution, which is one published instance of the distinction (secondary corroboration, not a figure line).
- **Refuter:** show an exchange rate between bits and actions, fixed before the run, under which the summed figure and the held-apart pair always order options the same way on held-out data; or show the two representations are behaviourally identical in every pre-registered cell.

### C3: verification claim; checkable by anyone who has scored probabilistic forecasts

- **Statement:** a model's own reported uncertainty is frame-internal and cannot be the metric of its adequacy; independence of evidence, not ensemble size, decides whether agreement means anything.
- **Source, verbatim:** Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence." Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 7 :12 "same closure, handed along; agreement compounds, evidence does not." Gneiting and Raftery (2007, JASA) provide the world-side instrument: "In prediction problems, proper scoring rules encourage the forecaster to make careful assessments and to be honest."
- **Refuter:** show that the model's self-reported uncertainty is a sufficient statistic for its own calibration error out of sample; or show that frames with high measured evidence overlap still contribute information not available from their shared pool, under a measure fixed before the test.

## 4. What is explicitly not claimed

- Not a unique numerical estimator, a new algorithm or a new scoring rule.
- Not that the aleatoric/epistemic two-way split is exhaustive. It omits chaos versus noise, the structural-absence case and the independence audit.
- Not that a flat residual proves structural absence. Instrument saturation is the named alternative and must be checked first.
- Not that summing the components is always wrong in practice. Fig 12 forbids it where no exchange rate is declared; if one is declared and survives ground scoring, the verdict narrows.
- Not that any frame can certify complete uncertainty coverage.
- Not that a large ensemble is weak evidence. An ensemble with genuinely independent members can be strong evidence; size alone is not the measure.
- Not `grounded`. No held-out test was run.

## 5. Provenance

- Figure text extracted verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` on 2026-11-22. Cited as `Fig N :line`. All quoted strings in this packet are exact substrings of that file.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`. The figures outrank the summaries; they return "a shape, not a name."
- Loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`, especially step 5 ("the ground settles it. Verified only by what pays. A gate is not the ground."), step 7 and the mode rule.
- Eight essays by Isaiah N opened 2026-11-22; see `05_what_shape_means.md` and `10_source_ledger.csv`.
- World sources opened 2026-11-22: Knight 1921, Hüllermeier and Waegeman 2021, Kendall and Gal 2017, Roy and Oberkampf 2011, the Sandia OSTI perspective, Gneiting and Raftery 2007, Wimmer et al. 2023, Bickford Smith et al. 2025, Caraco et al. 1980, Baranski and Petrusic 1994. Each is secondary corroboration; overlap is recorded in `10_source_ledger.csv`.
- This packet compiled 2026-11-22.

## 6. What would settle it

A pre-registered, held-out, properly scored forecast comparison with materialised outcomes. Specifically:

1. Does the five-field report beat the best single predictive distribution fitted on the same data?
2. Does a score separate parameter ignorance from model-class absence, rather than showing a wide interval for both? An instrument that reads green "cannot comment on the source" (*The Hard Problem is About Source*); the spectrometer, not an argument, resolved that case.
3. Is an apparently flat structural residual a saturated sensor? Repair the instrument, then re-measure (Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something.").
4. Do low-overlap candidate models improve the score more than additional same-pool models?

## 7. What an expert can check in twenty minutes

1. Read Fig 9 :55-57, Fig 1 :19, Fig 12 :125 and :130, Fig 6 :27 and Fig 2 :31. Six short passages.
2. Check C2 against your own practice: have you ever summed a description-cost term and a measurement-cost term, or recombined aleatoric and epistemic estimates into one width? What did the consumer do with it?
3. Name one held-out scoring protocol that would separate parameter ignorance from model-class absence in your domain, or say why none is possible.
4. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** simulated derivation, `specified`, ungrounded, candidate. It cannot settle the claim it reports on.
