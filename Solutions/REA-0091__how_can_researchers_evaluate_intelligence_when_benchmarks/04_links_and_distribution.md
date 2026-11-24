# Public links and distribution

All links below were opened on 2026-11-24. World sources are corroboration only. The figures decide.

## 1. Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Figure text, canonical extract | local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md | Verbatim text of Figures 1 to 13 plus Operators and Symbols tables, with line numbers. All Fig N :line citations in this folder come from this file. |
| Figures README, canonical local copy | local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md | "They outrank everything else in the repo"; the framework returns "a shape, not a name" and stops where instruments cannot distinguish; "Indiscernibility is not identity." |
| The Formula | local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md | Eight-step loop, `R_T` round trip, mode rule "general · specified · grounded", and the "Direction" discipline. |
| Defining and Characterizing Reward Hacking | https://arxiv.org/abs/2209.13085 | Skalse, Howe, Krasheninnikov, Krueger, NeurIPS 2022. Formal definition: "optimizing an imperfect proxy reward function leads to poor performance according to the true reward function." For all stochastic policies, unhackable pairs exist only if one reward is constant. |
| LiveBench: A Challenging, Contamination-Limited LLM Benchmark | https://arxiv.org/abs/2406.19314 | White et al., ICLR 2025 Spotlight. "Test set contamination ... can quickly render benchmarks obsolete." Questions released monthly, objective ground-truth answers, generation code withheld, new questions delayed one month. |
| The Leaderboard Illusion | https://arxiv.org/abs/2504.20879 | Singh et al., NeurIPS 2025 Datasets and Benchmarks Track. Up to 27 private variants tested before one public release; selective disclosure biases scores; "overfitting to Arena-specific dynamics rather than general model quality." |
| Holistic Evaluation of Language Models | https://arxiv.org/abs/2211.09110 | Liang et al., TMLR 2023. Multi-metric measurement over 16 core scenarios and 7 metrics, so "metrics beyond accuracy don't fall to the wayside"; a living benchmark, continuously updated. |
| Beyond Accuracy: Behavioral Testing of NLP Models with CheckList | https://aclanthology.org/2020.acl-main.442 | Ribeiro, Wu, Guestrin, Singh, ACL 2020 Best Overall Paper. Held-out accuracy "often overestimates the performance of NLP models"; users made twice as many tests and found almost three times as many bugs. |
| Humanity's Last Exam | https://arxiv.org/abs/2501.14249 | Phan et al., 2025, published in Nature 2026. 2,500 questions; "maintaining a private test set of held out questions to assess model overfitting"; canary string in the public dataset. |
| The Flynn Effect: A Meta-Analysis | https://pmc.ncbi.nlm.nih.gov/articles/PMC4152423 | Trahan, Stuebing, Fletcher, Hiscock, Psychological Bulletin 2014. "the observed rise in IQ scores over time, which results in norms obsolescence"; mean 2.31 points per decade across 285 studies. |
| Eight essays by Isaiah N | https://adventuresinml.substack.com/p/how-intelligence-actually-works and the seven linked in `05_what_shape_means.md` | All eight opened 2026-11-24. Key lines recorded with each citation in `05_what_shape_means.md` and `10_source_ledger.csv`. |

## 2. Wider literature that bears on the question, grouped by field

- **Machine learning theory (gaming).** Skalse et al. give the formal version of the anchor rule: if raising the proxy can lower the true reward, the proxy is hackable, and for all stochastic policies only a constant reward is unhackable. Predicts F2. Corroborates.
- **Benchmark engineering (memorization and obsolescence).** LiveBench and HLE both treat the item set as something that must be hidden, canaried and refreshed. LiveBench: "we do not publicly release the code used to generate LiveBench questions"; HLE: a private held-out set "to assess model overfitting." Both predict F6 and the refresh half of F4. Corroborate.
- **Institutional audit (gaming by selective disclosure).** The Leaderboard Illusion finds that private testing and score retraction bias the ranking, and that Arena-specific gains do not transfer to broader benchmarks. Predicts F2 and F5. Corroborates, with the note that it studies one platform, not evaluation in general.
- **Evaluation methodology (aggregation).** HELM and CheckList both argue against a single accuracy number: HELM by measuring seven metrics, CheckList by testing capabilities and test types explicitly. Predict F3. Corroborate.
- **Human psychometrics (obsolescence).** The Flynn Effect meta-analysis shows that test norms, not only test takers, go stale, with a measured rate. Predicts F4 from a field with no stake in LLM benchmarking. Corroborates at low overlap.
- **Capability and habitat (what is being measured).** The HLE leaderboard notes that high accuracy "would not alone suggest autonomous research capabilities." *They're Scanning Books* gives the generator/output distinction. Predicts F5. The essay shares an author with the figures, so it is weak corroboration; the HLE note is host-independent.

No source conflicts with the figure verdict, so the conflict rule (return to the census) was not triggered. Three of the sources come from the same applied-ML evaluation pool (LiveBench, HELM, CheckList, Leaderboard Illusion, HLE all cite or respond to mainstream LLM benchmarking), so their agreement is partly one pool talking, not five independent witnesses (Fig 2 :40). The Flynn Effect source and the reward-hacking theory paper are the low-overlap ones.

## 3. Distribution: offer, do not push

- **Fig 4 :22**, "Only methods cross up. Only head starts come down." Sending the full architecture before anyone has described a residual sends a recording, not a generator. Lead with the shape claim and its refuter; offer links after.
- **Fig 10 :42**, "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28**, "describe it before you go looking, or any frame you pick will seem to fit." Ask what the researcher would expect to see if the claim were true before giving them the sources.
- **Fig 2 :40**, "agreement about the world is worthless when the agreeing frames share an evidence pool." A mass send selected for agreement produces a convention, not corroboration.
- **Fig 9 :60**, "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." A venue's prestige is a budget filter, never a witness.

**Recommended order in a reply:** (1) the shape claim and the pre-registered refuter; (2) ask what the recipient would count as a failure; (3) record the verdict; (4) only if curious, the three links, with the note that the figures and the papers, not this summary, are the authority.

## 4. The two-stage offer (and a third stage)

1. **Stage 1, before theory.** Send `08_expert_verification_packet.md`, which carries the residual, three checkable sub-claims, verbatim figure lines and refuters. The recipient rules on the claim without holding the framework's interior. Fig 10 :52, "Bring a characterised residual, never the source."
2. **Stage 2, opt-in only.** If the recipient is curious, offer LiveBench, reward hacking and the Leaderboard Illusion links. Their stage-1 verdict is already recorded, so later agreement is never pooled as corroboration (Fig 2 :40).
3. **Stage 3, method reuse.** Offer `THE_FORMULA.md` as a generator, with the instruction that each user writes their own refuter and states their own mode before running it. Fig 4 :22 permits methods to cross. The framework's own article warns that outputs "could never be verified if the solutions presented were not contrived to fit the formula", so a user who cannot name a ground should not claim a result.

**Hard precondition:** the stages only work if the stage-1 claim survives. Recheck the five refuters in `01_figure_grounded_audit.md` §4 before sending. If one has fired, send the retraction instead of the packet.

## 5. Hosting

No archive is created and nothing is sent by this agent. Hosting the packet on an opt-in page and sending the link is yours to do. Prefer a page that lets a recipient decline contact (an opt-in download or a public issue thread) over an attachment pushed to a list. That is the structural reason the venues in `03` are submission forms, issue trackers and public dashboards rather than personal mailboxes.
