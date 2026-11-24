# Public links and distribution: specialized AI systems research

All links below were fetched and verified on 2026-11-24. Where a PDF full text could not be rendered, the landing page or abstract that was actually opened is recorded, and the quote is taken from that opening.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Scaling laws (Kaplan et al.) | https://arxiv.org/abs/2001.08361 | Abstract read. Reports power-law loss scaling with model size, dataset size and compute, and states that larger models are significantly more sample-efficient. This is the size frame's own case, not an outside refutation. |
| Specialist break-even (Pecher, Srba, Bielikova) | https://arxiv.org/abs/2402.12819 | Abstract read (v4, accepted EMNLP 2025). Specialised models need on average about 100 labelled samples to be on par or better; result depends strongly on task characteristics; larger models do not consistently give better performance or lower variance. |
| Tele-LLMs (Maatouk et al.) | https://arxiv.org/abs/2409.05314 | Abstract read. Domain-tuned 1B to 8B models outperform general-purpose counterparts on the domain benchmark while retaining previously acquired capabilities, with the authors naming catastrophic forgetting as the thing avoided. |
| Urdu generalists vs specialists (Arif et al.) | https://aclanthology.org/2024.findings-emnlp.426/ | Landing page and bibtex read, plus the paper's abstract and conclusion in the search result. Specialist models won on 12 of 14 tasks; generalist models did better in the human evaluation of generation. That split is the most useful single datum in this folder. |
| MoDEM (Simonds, Kurniawan, Lau) | https://aclanthology.org/2024.alta-1.6/ | Landing page and full abstract read. A router plus domain experts significantly outperforms general models of comparable size; concludes in favour of ecosystems of smaller specialized models with routing. |
| ConStat (Dekoninck, Müller, Vechev) | https://arxiv.org/html/2405.16281 | Full HTML read. Defines contamination as artificially inflated, non-generalizing performance and reports high contamination in several popular models, including top leaderboard models. |
| Data contamination survey (Deng et al.) | https://aclanthology.org/2024.findings-acl.951.pdf | PDF abstract and introduction text retrieved in the search result. States that contamination can obscure true generalization by rewarding memorisation rather than reasoning. |
| Lynx and bobcat niche breadth (Peers et al.) | https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0051488 | Full HTML read. Specialists are favoured in stability and generalists in instability; the classic peak-performance trade-off failed to fit the data on most axes. |
| Arable weed flora (Fried, Petit, Reboud) | https://pmc.ncbi.nlm.nih.gov/articles/PMC2939635 | Full HTML read. Increased disturbance favoured generalist species; monoculture favoured specialists. |
| Invaders and generalists (Morris et al.) | https://www.nature.com/articles/s41598-021-99843-3 | Abstract read in search result. Generalists have an advantage where variability is high; specialists gain through efficiency. |
| Library of Babel essay (Isaiah N) | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Full text read. Provides the shape vocabulary: cut the search short when the returned set is small and descriptive enough to give a general shape. |
| Recursive Self-Improvement Trap (Isaiah N) | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Full text read. Provides the simulated-output warning and the prestige/action separation. |

## What in the wider literature bears on this question

1. **The size frame is real but conditional.** Kaplan et al. report smooth power-law gains and higher sample efficiency for larger models. Read against Fig 8 :32, that is search inside a closure: more scale explores the reach more efficiently but does not add an atom. The scaling result and the closure law are not in conflict; they describe different operations.
2. **Specialist wins are repeatedly reported, but with conditions attached.** Pecher et al. put a break-even point of roughly 100 labelled samples and report that the number depends on the task and that variance changes the comparison by 100 to 200 percent. Arif et al. found specialist wins on 12 of 14 tasks, and also found generalist wins in human evaluation of generation. That last asymmetry is exactly Fig 12 :125: two currencies that do not add. Maatouk et al. and Simonds et al. report domain wins and routing gains. Together these are one pool (specialist-model evaluations), not four independent witnesses, and most share the same benchmark-style instruments.
3. **The anchor is the weak link.** ConStat and the Deng et al. survey both report that benchmark leakage inflates scores and destroys comparability. Fig 2 :29 says an anchor is whatever settles the question and does not change its answer because of what any frame thinks. A contaminated benchmark is a frame, not an anchor. These two papers are one witness because they share the contamination literature.
4. **The low-overlap field agrees on the structure, not the numbers.** Peers et al., Fried et al. and Morris et al., all in ecology, report the same conditional shape: specialists win in stable or homogeneous conditions and on the few axes they specialise in; generalists win under variability and disturbance. Peers et al. add the important correction that the textbook peak-performance trade-off often fails to appear, so the shape is not a law about magnitudes. This is one witness from a field far from ML, which is why it is worth more than a fifth ML paper and less than a direct measurement.

No world source conflicts with the figure verdict. The conflict rule was not triggered. Where a source seemed to conflict (Kaplan versus the specialist-win papers), a re-census resolved it by separating "search inside a closure" from "import from a different frame". No figure was softened.

## Distribution: offer, do not push

- Fig 4 :22 "Only methods cross up. Only head starts come down." Send the residual and the refuter; offer the full derivation later.
- Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." A reader who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- Fig 9 :28 "any frame you pick will seem to fit." Ask what they would expect to see on their own habitat and anchor before giving them the article.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." A public submission venue buys a trial, not an endorsement.
- Fig 2 :42 "Buy independence in proportion to the cost of being wrong." Seek checkers whose evidence comes from a different closure, not people already inclined to agree.

**Recommended order in a reply:** (1) the shape claim and its two axes; (2) the habitat and anchor requirement; (3) the three refuters, with the question of what they would count as failure; (4) only then the links, with the note that the figure text, not the summary, is the authority.

## The two-stage offer

Stage 1 is the residual and refuter. Stage 2 is opt-in theory. Stage 3 is the formula as a reusable method. The verdict on stage 1 must be recorded before any theory is shown; later agreement is never pooled as corroboration (Fig 2 :40). Nothing is sent by this agent. The user hosts and sends.
