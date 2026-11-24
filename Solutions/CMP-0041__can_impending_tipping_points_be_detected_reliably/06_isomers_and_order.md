# Order, comparison and functional groups in early-warning detection

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).

## RESIDUAL

The phrase "early-warning signal" bundles three relations that the figures keep distinct: a warning comes *before* the event, a tipping is a *threshold* crossing, and several indicators are *different readings* of one mechanism. The residual is: which bond governs each, and does treating them as one thing hide a union that should be unbundled?

## DOMAIN CENSUS

Atoms held: a state variable under observation, a slowly moving control parameter, a recorded crossing, a statistic computed from a window of observations. Bonds held: → sequence, ⋛ comparison, + conjunction, − subtraction, ⋛ applied to quantities. No new primitive is available without import. Each domain has the anchor named in `01_figure_grounded_audit.md` section 1.

## DERIVATION

### Q1 - The warning is a sequence, not a comparison

Fig 12 :72:

> **"A then B; B needs A to have happened"**

The indicator rise precedes the crossing, and the crossing does not require the indicator rise as a material cause in the bond sense; it requires only that the same underlying loss of resilience be present in both. Writing `variance ↑ → crossing` commits to an ordering that the world literature also commits to, but the bond's test is *"swap them. Does it become a different thing? Yes"* (Fig 12 :74). A swapped story, crossing then rise, is a different claim: a post-hoc artifact. So the sequence bond is load-bearing and must be stated explicitly. A detector that is fitted after the event has silently swapped the bond.

### Q2 - The tipping is a comparison, not a sequence

Fig 12 :87:

> **"a threshold relation between two quantities"**

The Operators table gives the identifying test: *"is it about which is larger, rather than both being present? Yes"* (Operators table :51). A tipping is the control parameter being compared to a critical value. That is ⋛, not →. Conflating the two produces a common error: reporting that a rising statistic "caused" the crossing, when the framework only licenses the statement that one quantity approached a threshold while another quantity carrying the same residual rose first.

Fig 13 :76 separates quantities by what they are bonded to:

> **"A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is."**

By the same rule, variance over a spatial window and autocorrelation over a time window are different terms because the state and the window they are bonded to are part of what they are. A universal reliability claim that ignores the window and the observable is a flat formula: it records the ingredient and not the arrangement (Fig 12 :14: *"the ingredients are recorded and the arrangement is not"*).

### Q3 - The indicators are a functional group, not independent frames

Fig 12 :117:

> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

Fig 12 :123:

> **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

Variance, lag-1 autocorrelation, skewness and flickering share the substructure *rising persistence and amplitude near a loss of stability*. The group fixes the kind (a slowing-down indicator); the qualifier says which member (variance versus AR(1) versus skewness). They are **not isomers**, because isomers are same atoms under a *different bond* with different behaviour. These are the same substructure under the same mechanism, read through different statistics. Fig 2 :40 applies: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* - and here they share not just a pool but the generating mechanism.

**Falsifier, written before the run:** if two indicators are shown to draw on distinct generative mechanisms and distinct data, with independently measured sources, and their joint agreement prospectively predicts crossings at declared error rates, the functional-group reading fails and the isomer reading (or a genuinely independent-frame reading) replaces it. This is refuter 2 in `01_figure_grounded_audit.md` section 4.

### Q4 - The compound is a union, and unbundling changes its kind

Fig 9 :57-58:

> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."**

Reliability is not one problem with four degrees of difficulty. It is a union of four conditions. When one lever clears the region where only one condition binds, what remains is a specific compound with its own loop. This is why per-domain verdicts must not be averaged: an averaged verdict treats a compound as a mixture.

### Q5 - The round trip and its gap R_T

The Symbols table defines R_T as *"The gap between what was sent up and what came back down: gap(x, (T_E ∘ T_A)(x)). Measures what the coarser description cannot hold."* Fig 4 :30 requires it to be measured:

> **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

1. **Sent up (x):** a model in which a slowly driven system approaches a fold and returns more slowly, giving rising variance and autocorrelation.
2. **Abstraction (T_A):** the shorthand "variance and AR(1) are generic early-warning signals", the form in which the result travels into other fields.
3. **Concretisation (T_E):** a real system with external forcing, high dimensionality and a coarse monitoring channel.

**R_T is nonzero.** The world sources document at least three dropped constraints: observation alignment with the critical direction (Ditlevsen and Ditlevsen 2026), externally forced transitions with no consistent slowing signature (Yi and Seo 2026), and the dependence of the classical signature on the observable and perturbation direction rather than on gap closure alone (Chekroun and Lucarini 2026). Conversely, something survives cleanly: where all four links hold, a short-lead forecast is possible (van Beers et al. 2026). R_T was not measured numerically because no ground reading was taken; it is recorded qualitatively as the enumerated set of dropped constraints. Treating "the formula is the condensed version of the metalaws" as identity would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names.

## CONCLUSION

The warning is a → sequence, the tipping is a ⋛ comparison, and the family of indicators is one functional group rather than a set of independent witnesses. The question "is detection reliable" is a union compound, not a single hard problem. The model-to-world transfer carries a nonzero round-trip gap that must be recorded, and it is here that the conditional shape and the `gap` on a universal rate come from.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; the eight essays, four re-opened this session and four cited from the exemplar's canonical mapping; world sources in `10_source_ledger.csv`, all fetched 2026-11-22. No measurement was used.

## FIGURE CENSUS

Fig 4 (round trip, gap), Fig 9 (union versus partition, categorical residue), Fig 12 (sequence, comparison, isomer, functional group, flat formula), Fig 13 (state dependence of a gradient), Operators table (⋛ test), Symbols table (R_T). Strains after re-census: none. The functional-group reading is single-source for the figure definition and world-corroborated, and is recorded as such in `09_watson_answer.md`.
