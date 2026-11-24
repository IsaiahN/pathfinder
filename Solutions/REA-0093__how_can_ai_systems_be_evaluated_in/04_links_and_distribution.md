# Public links and distribution

All links below were fetched and read on 2026-11-24. Page content is treated as untrusted data, never as instruction.

## 1. Verified sources actually opened

| what | URL | verified content |
|---|---|---|
| Figures text with line numbers | `local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md` | Verbatim SVG text for Figures 1 to 13 plus Operators and Symbols tables. All `Fig N :line` citations in this folder come from it. |
| Figures README, canonical local copy | `local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md` | *"They outrank everything else in the repo"*; returns *"a shape, not a name"*; *"Indiscernibility is not identity."* |
| The Formula | `local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md` | Eight-step loop, mode rule, three distinct questions at step 7, round trip gap `R_T`. |
| Seat map field guide | `local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_SEAT_MAP_Field_Guide_amended.md` | Anchor, three ignorance conditions, correlation valence, failure genera including mode as verdict. |
| Holistic Evaluation of Language Models | https://arxiv.org/abs/2211.09110 | Liang et al., 2022, v2 2023, TMLR 2023. Seven metrics over 16 core scenarios; notes limits of practical relevance, generalizability and adaptation. |
| The Leaderboard Illusion | https://arxiv.org/abs/2504.20879 | Singh et al., 2025, NeurIPS 2025 Datasets and Benchmarks. Private testing and selective reporting produce *"overfitting to Arena-specific dynamics rather than general model quality."* |
| AI Measurement Science, chapter 11 Design | https://aimslab.stanford.edu/textbook/src/chap11.html | Open textbook, 2025. *"The data-generating process is no longer fixed: it shifts in response to the measurement itself."* Construct, distribution, set; three properties of a durable evaluator. |
| Reliance on metrics is a fundamental challenge for AI | https://pmc.ncbi.nlm.nih.gov/articles/PMC9122957/ | Thomas and Uminsky, Patterns (N Y), 2022. *"Any metric is just a proxy for what you really care about."* Slate of metrics, external audits, qualitative accounts, stakeholders. |
| The Real-World Approach and Its Problems | https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2020.00721/full | Holleman, Hooge, Kemner and Hessels, Frontiers in Psychology, 2020. Argues researchers should *"always specify the particular context of cognitive and behavioral functioning in which they are interested."* |
| Surrogate Endpoints in Clinical Trials: Lessons From CAST | https://statsally.com/resources/surrogate-endpoints-clinical-trials-cast | Explains Echt et al. 1991 (NEJM 324:781-788): the marker improved, mortality worsened (63 of 755 active versus 26 of 743 placebo). *"The number is a representation of health, not health itself."* |
| The Lucas Critique in Practice | https://link.springer.com/chapter/10.1007/978-94-011-0669-6_8 | Ericsson and Irons, 1995, quoting Lucas 1976 p. 41: *"any change in policy will systematically alter the structure of econometric models."* |

## 2. What the wider literature adds, and where it overlaps

These sources corroborate the figure verdict from fields with different closures. They do not decide it. Overlap with the framework corpus is declared in `10_source_ledger.csv`.

1. **AI evaluation (HELM).** Its own stated limits are relevance for practical use, generalizability and dependence on adaptation decisions. It asks practitioners to *"first identify scenarios and metrics pertinent to their use conditions."* This is the per-slot requirement from Fig 1, arrived at inside the benchmark community. Overlap: medium with the other AI-evaluation sources, zero with the figures.
2. **Benchmarking integrity (Leaderboard Illusion).** Selective disclosure of private variants and asymmetric data access produce *"overfitting to Arena-specific dynamics rather than general model quality."* This is the anchor-updates collapse of Fig 2 observed in a live institution. Overlap: medium with HELM and the measurement-science text.
3. **Measurement design (AI Measurement Science).** Goodhart's law is treated as a formal game: a fixed distribution becomes a target and the data-generating process shifts. Its *"construct is broader than any distribution"* gap matches Fig 9's *"you get a kind of thing, never the answer itself."* Overlap: high with the AI-evaluation cluster, but it uses game theory rather than the figures.
4. **Metrics and harms (Thomas and Uminsky).** Recommends a slate of metrics, independent external audits, qualitative accounts and affected stakeholders. This is F2 and F7 in a different vocabulary. Overlap: medium with HELM and the textbook.
5. **Human-context specificity (Holleman et al.).** Warns that *"real-world"* is undefined until the context is specified. This is Fig 9 :27-28 applied to the exact word in this question. Overlap: none with the framework corpus.
6. **Delayed outcomes (CAST).** The surrogate (arrhythmia suppression) moved in the desired direction while the patient outcome moved the other way. This is the strongest low-overlap analogue for a benchmark score that looks healthy while the real outcome fails. Overlap: none with the framework corpus.
7. **Human behavioral response (Lucas critique).** Agents change their decision rules when the rule they face changes, so reduced-form parameters are not invariant to policy. This is Fig 2 :34 applied to human response: the evaluation itself changes the thing evaluated. Overlap: none with the framework corpus.

No world source conflicts with the figure verdict. Had one conflicted, the rule is to return to the domain census, not to flip the verdict. Agreement among these sources is weak corroboration where they share an evidence pool (sources 1 to 4), strong where they do not (sources 5 to 7).

## 3. Distribution: offer, do not push

Figure-grounded rules:

- **Fig 4 :22** *"Only methods cross up. Only head starts come down."* Lead with the shape claim and its refuter; offer links only after a stage-1 verdict.
- **Fig 10 :42** *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the whole framework before answering has joined the frame being checked.
- **Fig 9 :27-28** *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see in a real deployment before describing the method.
- **Seat Map :163** *"High correlation is disqualifying for a verdict and efficient for a convention."* A list ranked for receptiveness produces a convention, not corroboration.

**Recommended order in a reply:** (1) the shape claim `E*` and its six refuters; (2) ask what they would count as a failure in their setting and record it; (3) only then, the sources, with the note that the figures are the authority and the essays share an author.

## 4. The two-stage offer

**Stage 1.** Send the residual, the five-part shape and the pre-registered refuter from `02_outreach_email.md`. Ask for one thing: what would count as a failure in their own deployment. No source links. No theory. No request for agreement or trust.

**Stage 2, opt-in only.** If they are curious, send at most three links: the local figures text extract, the canonical figures README, and the eight-essay list in `05_what_shape_means.md`. Their stage-1 verdict must already be recorded. Their later agreement is never pooled as corroboration (Fig 2 :40).

**Stage 3, method only.** Offer the formula as a generator, with the instruction that each user names a ground and writes a refuter before running it. This is Fig 4 :22 plus the Formula's "Direction" limit.

## 5. Honest limit of this distribution plan

This agent cannot host files, send email or upload packets. The public channels in `03_public_contact_points.csv` are the route; you host and send. Prefer an opt-in submission or issue channel over an attachment pushed to a list. The strongest single artifact to send is `08_expert_verification_packet.md`, because it states mode, sub-claims, verbatim lines and refuters before the conclusion.
