# Public links and distribution

All links below were fetched and read on 2026-11-23. The venue pages in `03_public_contact_points.csv` were fetched the same day.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Self-Consistency (arxiv abstract) | https://arxiv.org/abs/2203.11171 | Wang, Wei et al. ICLR 2023. Abstract states it samples a diverse set of reasoning paths and selects the most consistent answer by marginalizing out the paths. Submitted 2022-03-21, revised 2023-03-07. |
| Probabilistic Soundness Guarantees in LLM Reasoning Chains (arxiv abstract) | https://arxiv.org/abs/2507.12948 | You, Xue, Havaldar et al., EMNLP 2025 camera ready. Abstract states initial errors propagate and that ARES evaluates each step based solely on previously-verified premises. |
| Let us Verify Step by Step (OpenAI PDF, ICLR 2024) | https://proceedings.iclr.cc/paper_files/paper/2024/file/aca97732e30bcf1303bc22ac3924fd16-Paper-Conference.pdf | Lightman et al. Abstract and sections 2.5 to 2.6 read: process supervision significantly outperforms outcome supervision; the PRM score is the product of per-step correctness probabilities. |
| Venue portal | https://openreview.net/ | Public open peer review platform; ICLR, TMLR, NeurIPS and many reasoning workshops listed as active venues. |
| Reviewing service | https://aclrollingreview.org/ | Public institutional support channel and author guidelines; one review process with continuity across cycles. |
| Journal | https://jmlr.org/ | States all published papers are freely available online; public submissions page. |
| Society | https://cognitivesciencesociety.org/ | Public contact form, submissions section and journals; mission spans AI, psychology, linguistics, philosophy and education. |
| Proof assistant | https://leanprover.github.io/theorem_proving_in_lean/theorem_proving_in_lean.pdf | States that every rule of inference and every step of a calculation has to be justified down to axioms, and that proof objects can be checked independently. |

The full set with author, venue, year, quote and overlap is in `10_source_ledger.csv`.

## Wider literature that bears on the question

These were read through the search results and the arxiv and proceedings pages above. They are secondary corroboration only.

1. **Chain-of-thought as a step factory.** Wei et al., NeurIPS 2022 (https://proceedings.neurips.cc/paper_files/paper/2022/file/9d5609613524ecf4f15af0f7b31abca4-Paper-Conference.pdf): *"there is no guarantee of correct reasoning paths, which can lead to both correct and incorrect answers"*. Longer chains allocate more computation but do not by themselves make the chain reliable. This is the budget/verdict split in F8.
2. **Voting and its limit.** Wang et al., ICLR 2023: sampling and majority vote improve accuracy, but the paper notes *"the model is not well calibrated and thus cannot distinguish well between correct solutions and wrong solutions"*. Independent reviews add the sharper limit: if a wrong answer is the most probable one, more samples converge on the wrong answer. This is F5 and F8, not a refutation of the figure verdict.
3. **Per-step supervision beats final-only supervision.** Lightman et al., ICLR 2024: *"process supervision significantly outperforms outcome supervision"* and the score is *"the product of the correctness probabilities for each step"*. This is F1 and F3 read in a different field.
4. **Errors corrupt downstream judgments.** You et al., EMNLP 2025: *"earlier errors can corrupt judgments of downstream reasoning"*; ARES *"evaluates each reasoning step based solely on previously-verified premises"*. This is F6, verifier non-access, arrived at independently.
5. **Step-wise diagnosis.** Omanic, Findings of EMNLP 2026 (https://aclanthology.org/2026.findings-emnlp.1714.pdf): *"step-wise analysis reveals a later-hop bottleneck, factual knowledge floor, and error propagation along reasoning chains"*; under chain evaluation errors compound. This is F2 and F3.
6. **Aging hazard.** "When Does Reasoning Age?", EMNLP 2026 (https://aclanthology.org/2026.emnlp-main.1976.pdf): *"the conditional probability of reasoning error increasing with step depth"*, with increasing hazard in 34 of 35 dataset-model cells. This is Fig 13's amplifying chain measured in a different currency.
7. **Error amplification bound.** "Quantifying the Stability of Multi-Step Reasoning via Error Amplification", 2026 (https://arxiv.org/abs/2610.06404): *"an inference error bound governed by the product of spectral norms of the Jacobians taken through the input space across generation steps"*, a factor that can scale exponentially with steps. This is the strongest quantitative corroboration of F3.
8. **Human cognition, low overlap.** Copeland and Radvansky, 2004, Quarterly Journal of Experimental Psychology (https://memorylab.nd.edu/assets/257933/copeland_radvansky_2004_quarterly_journal_of_experimental_psychology_.pdf): *"participants performing better, faster, and more confidently for syllogisms requiring the use of one model than for multiple model syllogisms"*. More models to hold in working memory is the human analogue of more residual slots to carry. Gilhooly et al., 1993, Memory and Cognition (https://pubmed.ncbi.nlm.nih.gov/8433642): *"A significant effect of memory load was obtained."*
9. **Formal verification, low overlap.** "Theorem Proving in Lean" (https://leanprover.github.io/theorem_proving_in_lean/theorem_proving_in_lean.pdf): *"every rule of inference and every step of a calculation has to be justified by appealing to prior definitions and theorems, all the way down to basic axioms and rules"*, with proof objects that can be *"checked independently"*. This is the strongest instance of F3 plus F6: each step settled and independently checkable before the next composes over it.

**Overlap warning.** Sources 1 to 7 are all in the machine-learning and NLP reasoning pool; their agreement is one evidence pool speaking, not seven witnesses (Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*). Sources 8 and 9 are genuinely lower-overlap frames. The figure verdict does not depend on any of them.

## Distribution: offer, do not push

- **Fig 4 :22:** *"Only methods cross up. Only head starts come down."* Sending the full architecture before anyone has described a residual sends a recording, not a generator. Lead with the shape claim and its refuter; offer links after.
- **Fig 10 :42:** *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before giving a verdict has joined the frame being checked.
- **Fig 9 :27-28:** *"describe it before you go looking, or any frame you pick will seem to fit"*. Ask what they would count as a failure before giving them the article.
- **Fig 2 :42:** *"Buy independence in proportion to the cost of being wrong."* Select venues by independence from the claim, never by likelihood of agreement.
- **Fig 2 :40:** agreement selected for recept manufactures the correlation that disqualifies a verdict.

**Recommended order in a reply:** (1) the shape claim and its refuter; (2) ask what they would count as a failure and record the answer; (3) only then the links, with the note that the figures, not the summary, are the authority.

## The two-stage offer (and the optional third)

1. **Stage 1:** validate the output against the ground, without the framework's interiors. Fig 10 :52, *"Bring a characterised residual, never the source."*
2. **Stage 2, opt-in only:** if curious, read the theory that produced it. The stage-1 verdict must be recorded before any theory is shown, and later agreement is never pooled as corroboration.
3. **Stage 3:** offer the formula as a method to reuse. Fig 4 :22 permits sending a generator. Each user still needs their own ground and their own pre-written refuter, because a frame cannot check the direction of its own question.

**Hard precondition:** stages 1 to 3 only work if the stage-1 output survives. The refuters in §5 of `01_figure_grounded_audit.md` are the test. Nothing is sent by this agent; hosting and sending are the user's action.
