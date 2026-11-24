# Public links and distribution

Every URL below was fetched and read on 2026-11-22. Each is also in `10_source_ledger.csv` with author, venue, year and a quote.

## Verified public links

| what | URL | verified content |
|---|---|---|
| Invariant Risk Minimization | https://arxiv.org/abs/1907.02893 | Arjovsky, Bottou, Gulrajani, Lopez-Paz, submitted 2019, revised 2020. Abstract: the method learns a representation whose optimal classifier "matches for all training distributions" and the invariances "enable out-of-distribution generalization". |
| Underspecification | https://arxiv.org/abs/2011.03395 | D'Amour et al., 2020, later JMLR. Abstract defines underspecification as returning "many predictors with equivalently strong held-out performance in the training domain" that "can behave very differently in deployment domains". |
| WILDS | https://arxiv.org/abs/2012.07421 | Koh et al., 2020, ICML 2021. Abstract: "standard training yields substantially lower out-of-distribution than in-distribution performance" across ten real-world datasets. |
| Shortcut learning | https://www.nature.com/articles/s42256-020-00257-z | Geirhos et al., Nature Machine Intelligence 2, 665 to 673, 2020. Abstract: shortcuts "perform well on standard benchmarks but fail to transfer to more challenging testing conditions". |
| TRIPOD statement | https://www.bmj.com/content/350/bmj.g7594 | Collins, Reitsma, Altman, Moons, BMJ 2015;350:g7594. The article says apparent performance "will tend to give an optimistic estimate of performance, owing to overfitting" and defines external validation as applying "the original model (that is, the published regression formula)" in new participant data and comparing with observed outcomes. |
| TRIPOD community site | https://www.tripod-statement.org/ | Reports TRIPOD+AI and TRIPOD-LLM as current, with public key documents and a CONTACT menu. |
| Figures as metalaws, canonical README | local: `FRAMEWORK/reference/FIGURES_README_canonical.md` | Figures outrank everything else in the repo; quotes are authoritative; the framework returns a shape, not a name. |
| Verbatim figure text | local: `FRAMEWORK/reference/03-FIGURES_TEXT.md` | Source of every `Fig N :line` citation in this folder. |

## Wider literature that bears on the question

These are corroboration only. The verdict in `09_watson_answer.md` comes from the figures.

1. **Different fields, different failures.** The four machine-learning sources and the medical-statistics source do not share an evidence pool: distribution-shift representation learning (Arjovsky et al.), pipeline underspecification (D'Amour et al.), benchmark design (Koh et al.), cognitive-science perspective on shortcut learning (Geirhos et al.), and clinical prediction-model reporting (Collins et al.). They converge on the same shape: within-pool performance is not transport performance. Convergence across low-overlap frames is one form of triangulation, but agreement from a shared pool would be worth nothing here (Fig 2 :40).
2. **What each predicts here.** Arjovsky et al. predict that a model selected only for average in-distribution risk will fail when the environment changes, which matches the low-overlap condition requirement. D'Amour et al. predict that even good held-out performance leaves deployment behaviour undetermined, which matches the claim that a fit score is produced by the frame being scored. Koh et al. predict a measurable gap between in-distribution and out-of-distribution performance, which is the round-trip gap R_T. Geirhos et al. predict that benchmark success can come from decision rules that do not transfer, which is the "explains one occasion perfectly" failure. Collins et al. predict that apparent performance is optimistic and that external validation requires the frozen original model applied to new data, which is the sealed-anchor condition.
3. **No conflict was triggered.** No source read contradicted the figure verdict. Had one done so, the rule is to return to the domain census, not to flip the verdict.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22** "Only methods cross up. Only head starts come down." Sending the full framework before a checker has described a residual sends a recording, not a generator. Lead with the shape claim and its refuter.
- **Fig 10 :42** "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the framework before giving a verdict has joined the frame being checked.
- **Fig 9 :51** "evidence bearing on the residual is admissible; evidence bearing only on its maker is a stake-inducing channel, and the verifier is denied it." Send the condition, the sealed prediction and the observed residual. Send the model's pedigree only after the verdict is recorded, if at all.
- **Fig 2 :35** "Alignment is triangulation, not negotiation. A mirror cannot correct you." Do not select recipients for likely agreement.
- **Fig 2 :42** "Buy independence in proportion to the cost of being wrong." For a high-stakes model, add low-overlap conditions rather than more recipients from the same pool.

**Recommended order in a reply:** (1) the residual and the three-part shape claim; (2) the five refuters, with the request "what would you count as a failure?"; (3) record their verdict; (4) only then, if they opt in, the verified links above, with the note that the figures and the papers, not this summary, are the authority.

## The two-stage offer

1. **Stage 1, before theory.** Residual, shape claim, refuter. Checker's verdict is recorded first. Fig 10 :52 "Bring a characterised residual, never the source."
2. **Stage 2, opt-in.** Source links and the verification packet. Later agreement is never pooled as corroboration (Fig 2 :40).
3. **Stage 3, opt-in.** The formula as a reusable method, with the instruction that each user state a ground and write a refuter before running it. `THE_FORMULA.md` "Direction": a frame cannot check the direction of its own question.

**Honest limit.** This package cannot host or send anything. It produces artifacts only. Distribution is yours to do, and an opt-in download page is closer to the figures' rule than an attachment pushed to a list.
