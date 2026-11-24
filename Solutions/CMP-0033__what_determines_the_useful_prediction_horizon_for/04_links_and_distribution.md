# Public links and distribution

Every URL below was fetched and read on 2026-11-22. Local framework files were read from disk. Full provenance, including author, venue, year and a verbatim quote, is in `10_source_ledger.csv`.

## Framework sources actually fetched or read locally

| what | URL or local path | verified content |
|---|---|---|
| Verbatim figure text with line numbers | local: `FRAMEWORK/reference/03-FIGURES_TEXT.md` | Figures 1 to 13 plus Operators and Symbols tables. All `Fig N :line` quotes in this folder were checked against it. |
| Canonical usage rule | local: `FRAMEWORK/reference/FIGURES_README_canonical.md` | "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: the framework returns "a shape, not a name" and records the lineage at the stop. |
| The eight-step formula and mode rule | local: `FRAMEWORK/figures/THE_FORMULA.md` | Steps 1 to 8, `R_T = gap(x, (T_E o T_A)(x))`, SEARCHED / INWARD / OUTWARD, and "Mode. general · specified · grounded. State which." |
| WATSON 60, figures as metalaws | local: `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` | The seat reads the ground; it does not ask the anchor to decide design questions the figures settle. Fig 1, 4, 8, 9, 10, 11, 12, 13 census. |

## Wider literature actually fetched

| source | URL | what it contributes to this residual |
|---|---|---|
| Lyapunov exponent (Wikipedia contributors, 2026) | https://en.wikipedia.org/wiki/Lyapunov_exponent | The maximal Lyapunov exponent "determines a notion of predictability"; its inverse is the Lyapunov time or e-folding time. Corroborates F2 (loop sign and gain set a finite horizon). |
| Predictability (Wikipedia contributors, 2026) | https://en.wikipedia.org/wiki/Predictability | "uncertainty in a forecast increases exponentially with elapsed time" and "Limitations on predictability could be caused by factors such as a lack of information or excessive complexity." Corroborates F2 and F5 (different causes, different remedies). The spring predictability barrier is attributed to conditions "more rapidly shifting", which corroborates F3. |
| Structural break (Wikipedia contributors, 2026) | https://en.wikipedia.org/wiki/Structural_break | "an unexpected change over time in the parameters of regression models, which can lead to huge forecasting errors". Corroborates F3 (changing structure invalidates the frame). |
| Bøhn, Gros, Moe and Johansen, 2021, arXiv:2102.11122 | https://arxiv.org/abs/2102.11122 | A longer prediction horizon raises performance "but requires an increasingly powerful computing platform"; "performance sensitivity to the prediction horizon length varies over the state space". Corroborates F8 (budget currency) and F1 (per-state, not global). |
| Wesselkamp, Albrecht, Pinnington, Castillo, Pappenberger and Dormann, 2024/2025, arXiv:2412.00753 | https://arxiv.org/abs/2412.00753 | "We distinguish the model's potential and absolute forecast limit, and show how a benchmark model can help determine its relative forecast limit." Forecast limits require "A verification reference, a scoring function, and a predictive error tolerance." Corroborates F5 (different limit kinds) and F1 (a tolerance is part of the definition). |

These sources are secondary. None overlaps an author with the framework. Their agreement with the figure verdict is corroboration only and never overrules it; the verdict in `09_watson_answer.md` comes from the figures.

## Distribution rules: offer, do not push

- Lead with the per-slot residual and its four limiters, then the refuter. Only after a verdict is recorded offer the framework links (`Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it."`).
- Ask what the recipient would count as a failure before showing them the source (`Fig 9 :27 "describe it before you go looking, or any frame you pick will seem to fit"`).
- Do not rank recipients by likely agreement. `Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"`.
- Do not pool later agreement as corroboration. A reply is a correction on shape, a named failure class, or the question "could this have been anything else?", never an endorsement.
- Send the generator (the derivation and the refuter), not a recording of a conclusion (`Fig 4 :22 "Only methods cross up. Only head starts come down."`).

## The two-stage offer (with an optional third stage)

1. **Stage 1:** send the residual, the four-limiter shape, the budget/absence split and the four refuters. Record the recipient's verdict before any theory is shown. This is `Fig 10 :52 "Bring a characterised residual, never the source"` applied to outreach.
2. **Stage 2, opt-in only:** if they are curious, offer the figure text, the canonical README and the formula. The figures, not the summary, are the authority.
3. **Stage 3, only if asked:** offer the formula as a method to reuse. Each user must write their own refuter and state their own mode, because a frame cannot check the direction of its own question.

**Hard precondition:** stages 2 and 3 only work if the stage-1 output survives. As written, the claim is a shape with a pre-registered refuter, not a result. No system has been measured, so it is `specified`, not `grounded`.

## What this agent cannot do

Hosting, uploading and sending are yours. Prefer an opt-in download page or a public submission venue from `03_public_contact_points.csv` over an attachment pushed to a list, so a recipient can decline contact without friction.
