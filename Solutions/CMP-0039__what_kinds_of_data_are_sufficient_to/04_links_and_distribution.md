# Public links and distribution

Every link below was fetched and read on 2026-11-22. Where a fetch failed, the row says so rather than presenting an unverified page as verified.

## Verified framework sources

| what | URL | verified content |
|---|---|---|
| Verbatim figure text | `FRAMEWORK/reference/03-FIGURES_TEXT.md` (local extract) | One line per SVG text element with line numbers, Figures 1 to 13, Operators and Symbols tables. All `Fig N :line` citations in this folder are checked against it. |
| Canonical usage rule | `FRAMEWORK/reference/FIGURES_README_canonical.md` (local copy) | "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also "a shape, not a name" and "Indiscernibility is not identity." |
| The loop and mode rule | `FRAMEWORK/figures/THE_FORMULA.md` (local) | Eight steps, the three modes general / specified / grounded, and the inward/outward split when nothing in `closure(Γ)` closes R. |

## Verified world sources actually opened

| what | URL | why it bears on CMP-0039 |
|---|---|---|
| Causal inference (reference overview) | https://en.wikipedia.org/wiki/Causal_inference | "The main difference between causal inference and inference of association is that causal inference analyzes the response of an effect variable when a cause of the effect variable is changed." Also: "there is no inherent causality in phenomena that correlate." |
| Convergent cross mapping | https://en.wikipedia.org/wiki/Convergent_cross_mapping | "Cross mapping is generally asymmetric. If X forces Y unidirectionally, variable Y will contain information about X, but not vice versa." CCM is aimed at systems with synergistic effects where variables can appear uncorrelated. The underlying paper is Sugihara et al., Science 2012, read through this page, not directly. |
| Abduction-Deduction Entanglement | https://arxiv.org/abs/2605.25156 | "these structural invariances are non-identifiable from the source data alone." The clearest modern statement that observational data do not pin the causal mechanism. |
| Causality as the Statistical Conscience of AI | https://arxiv.org/abs/2605.24076 | "identifying mechanisms invariant under intervention" is named as the causal quantity; prediction `P(Y|X)` is contrasted with `P(Y|do(X))`. |
| Self-Attention as Transport | https://arxiv.org/abs/2605.04893 | "every transpose-invariant spectral diagnostic is orientation-blind". A different field proving that a symmetric reading cannot see direction. |
| The Objective Decides | https://arxiv.org/abs/2607.03728 | A quantity can be "causally inert on next-state prediction" even when a probe decodes it at `R² ≈ 1`; overwriting it leaves the forward pass unchanged. Decodability is not causal deployment. |
| Time-Aware Synthetic Control | https://arxiv.org/abs/2601.03099 | Synthetic control is "widely used for observational causal inference with time-series panel data" and must be repaired when temporal ordering is ignored. |
| Distributed Dynamic Invariant Causal Prediction in Environmental Time Series | https://arxiv.org/abs/2603.02902 | Learns causal predictors over time while "mitigating spatial confounding variables" by using environmental context and multiple environments. |
| How Intelligence Actually Works | https://adventuresinml.substack.com/p/how-intelligence-actually-works | "The projection of green can't tell you whether it was RGB, CMYK or something else that composed it." Also the ground "doesn't update on anything that the frames do". |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | "An instrument that can't distinguish these cases demonstrates its own inadequacy, it cannot claim anything substantial about what is being measured or what causes it." |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | "the output is only as good as the validator" and "Prestige can fund an action... but it cannot settle an action." |

## What in the wider literature bears on the question

1. **The asymmetry result.** The convergent cross mapping page states that cross mapping is generally asymmetric, so the affected variable carries a signature of the cause and not conversely. This is the figure's ordered bond (Fig 12 :74, "swap them. Does it become a different thing? Yes.") appearing in a complex-systems instrument. It is a world corroboration, not the source of the verdict.
2. **The non-identifiability result.** The domain-generalization paper (2605.25156) says the invariances are "non-identifiable from the source data alone". This is Fig 6 :21 ("MINT composes inside the closure and can never add an atom") stated in another field. The 2026 causal-AI paper (2605.24076) makes the same point as `P(Y|X)` versus `P(Y|do(X))`.
3. **The symmetric-reading limit.** The spectral-diagnostics paper (2605.04893) proves transpose-invariant diagnostics are orientation-blind. This is Fig 12 :5 and :92 in a different vocabulary: an ingredient-only description cannot carry the bond.
4. **Decodability is not deployment.** The conserved-quantity paper (2607.03728) shows a probe can decode a quantity at near-perfect accuracy while that quantity is causally inert under intervention. This is why a good fit is a filter, not a witness (Fig 9 :60).
5. **Confounding and time.** The synthetic-control and environmental-time-series papers (2601.03099, 2603.02902) are the engineering form of "an anchor that does not update" and "independence across environments": randomization-like design for panels, and mechanism invariance across environments.

No world source conflicts with the figure verdict, so the conflict rule was not triggered. The three framework essays share an author with the figures and are declared as one evidence pool in `09_watson_answer.md` and `10_source_ledger.csv`.

## Distribution: offer, do not push

- Fig 4 :22 "Only methods cross up. Only head starts come down." Sending the full architecture before anyone has described a residual sends a recording, not a generator. Lead with the question and the refuter.
- Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the whole framework before being asked for a verdict has joined the frame being checked.
- Fig 9 :27-28 "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would count as sufficient data before giving them the derivation.
- Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool." A send selected for people who already agree produces a convention, not corroboration (Fig 2 :31).

**Recommended reply order:** (1) the four-part sufficient set and its refuter; (2) ask what they would count as a failure and what anchor they would require; (3) only then the three links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

**Stage 1.** Send the residual, the shape of sufficient data, and the pre-registered refuter. Record the recipient's verdict before any framework material is shown. This is Fig 10 :52 ("Bring a characterised residual, never the source") and Fig 2 :45 ("Frames range against the ground. They do not negotiate with it.").

**Stage 2, opt-in.** If they are curious, offer the three framework links. Their later agreement is never pooled as corroboration, because they now hold the interior.

**Stage 3, only on request.** Offer the formula as a method to reuse. It is a generator, so giving it away does not give away an answer (Fig 4 :22). Each user must still state their own ground and write their own refuter, because a frame cannot check the direction of its own question (`THE_FORMULA.md`, "Direction").

**Hard precondition:** stages 1 to 3 only work if the stage-1 output survives. If the four-part set is presented as a guarantee rather than a shape with a refuter, do not send it.

## Hosting and sending

This agent cannot upload or email anything. If the material is hosted, prefer an opt-in download page that lets a recipient decline contact over an attachment pushed to a list. The venue list in `03_public_contact_points.csv` is public and opt-in by construction; no personal addresses appear anywhere in this folder.
