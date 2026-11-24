# Public links and distribution

All links below were fetched on 2026-11-23 unless a row says a link was listed but not opened separately. Where a fetch failed or a link was not opened, that is stated rather than hidden.

## Verified sources actually opened

| what | URL | verified content |
|---|---|---|
| Do ImageNet Classifiers Generalize to ImageNet? | https://arxiv.org/abs/1902.10811 | Recht, Roelofs, Schmidt, Shankar, 2019. Abstract reports accuracy drops of 3 to 15 percent on CIFAR-10 and 11 to 14 percent on ImageNet on newly collected test sets, and says the drops are *"not caused by adaptivity, but by the models' inability to generalize to slightly "harder" images than those found in the original test sets."* |
| Measuring Robustness to Natural Distribution Shifts in Image Classification | https://arxiv.org/abs/2007.00644 | Taori, Dave, Shankar, Carlini, Recht, Schmidt, 2020. Abstract: 204 ImageNet models in 213 test conditions, *"there is often little to no transfer of robustness from current synthetic to natural distribution shift."* Calls natural distribution shift *"currently an open research problem."* |
| Shortcut learning in deep neural networks | https://www.nature.com/articles/s42256-020-00257-z | Geirhos, Jacobsen, Michaelis, Zemel, Brendel, Bethge, Wichmann, Nature Machine Intelligence 2, 665-673, 2020. Defines shortcuts as *"decision rules that perform well on standard benchmarks but fail to transfer to more challenging testing conditions, such as real-world scenarios."* Notes related issues in comparative psychology, education and linguistics. |
| WILDS: A Benchmark of in-the-Wild Distribution Shifts | https://arxiv.org/abs/2012.07421 | Koh et al., 2020/2021. Ten real-shift datasets. Abstract: distribution shifts *"are under-represented in the datasets widely used in the ML community today"* and *"standard training yields substantially lower out-of-distribution than in-distribution performance."* |
| Invariant Risk Minimization | https://arxiv.org/abs/1907.02893 | Arjovsky, Bottou, Gulrajani, Lopez-Paz, 2019/2020. Learns a representation such that *"the optimal classifier, on top of that data representation, matches for all training distributions"*, which the authors relate to invariances that *"enable out-of-distribution generalization."* |
| Benchmarking Neural Network Robustness to Common Corruptions and Perturbations | https://arxiv.org/abs/1903.12261 | Hendrycks and Dietterich, ICLR 2019. Introduces ImageNet-C and ImageNet-P; the benchmark *"evaluates performance on common corruptions and perturbations not worst-case adversarial perturbations."* |
| WILDS project site | https://wilds.stanford.edu/ | Ten datasets across modalities and real shifts. The site states the leaderboard is no longer actively maintained and invites questions and contributions through its Team page. |
| NeurIPS 2025 Datasets and Benchmarks call | https://neurips.cc/Conferences/2025/CallForDatasetsBenchmarks | Scope includes benchmarks on new or existing datasets, novel benchmarking methodologies, audits of existing datasets and systematic analyses on novel datasets. Requires dataset and code availability at submission time. OpenReview submission and a Datasets and Benchmarks contact route are listed. Check the current year call; the 2026 direct URL was not live when fetched. |
| Transactions on Machine Learning Research | https://jmlr.org/tmlr/ | Rolling submission, double blind review, hosted on OpenReview, *"emphasizes technical correctness over subjective significance."* |
| ARC-AGI-3 | https://arcprize.org/arc-agi/3 | Interactive reasoning benchmark. States *"Novelty that prevents brute-force memorization"* and measures skill acquisition over time. The 2026 competition had finished at fetch time. |
| Figures and formula, branch general-agent | https://github.com/IsaiahN/tether/tree/general-agent/figures | Listed in the existing solution exemplar and used here as the public figure source. The local canonical extract used for all `Fig N :line` quotes is `local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md`, opened and grepped this session. |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Isaiah N, 2026-08-28. *"If several paths create the same behavior, then behavior is a projection with lossy information."* An instrument that cannot discriminate sources demonstrates its own inadequacy; the spectrometer, not an argument, resolved the case. |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, 2026-11-19. Describes ARC-AGI-3 as a test that could distinguish learning from memorizing: *"The ARC games have a score. You either solve the level or you don't. That is the ground."* Also: *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* |
| The Library of Babel: Locating The Book of Books | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Isaiah N, 2026-10-02. *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* Also names the bundle failure: a problem may be several problems masquerading as one. |

One fetch failed: the direct 2026 NeurIPS Datasets and Benchmarks URL returned 404. The 2025 call page was fetched instead and is what is cited above; the 2026 navigation existed, so check the live call before submitting. No source in the ledger was cited without being opened.

## What the wider literature bears on the question

1. **Same-generator held-out sets overstate generalization.** Recht et al. rebuilt the test sets by following the original creation process and still found double-digit drops. This is the world's version of Fig 11 :68: *"what you failed to reproduce is invisible until the goal fails."*
2. **Synthetic robustness does not buy natural robustness.** Taori et al. found little to no transfer from synthetic to natural shift. This is a low-overlap witness for Fig 11 :70: *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."*
3. **Benchmark success can be a shortcut.** Geirhos et al. supply the name and the cross-field observation (comparative psychology, education, linguistics) that shortcut learning may be common to biological and artificial learners. This corroborates the shape, not a specific metric.
4. **Real-shift benchmarks exist and are already hard.** WILDS shows the pair, not the model alone, is what pays, and that standard training leaves a persistent OOD gap. It is an existence proof for the anchor condition, not evidence that the framework derived it.
5. **Invariance is a candidate binding, not a named atom.** IRM is a theory-level corroboration of contact with differing closures. It does not settle which invariance, and Fig 9 :32 returns *"a kind of thing, never the answer itself."*
6. **Benchmark design is itself a research object.** The NeurIPS Datasets and Benchmarks scope and ARC-AGI-3's design principles show that the field already treats novelty, audits and evaluation methodology as first-class contributions. That is where a criterion-plus-refuter note belongs.

Note on evidence pools: Recht and Taori share an author and the ImageNet testbed, so they are one pool in part (Fig 2 :31). Geirhos and Koh are more independent. Agreement among all five is useful as a filter for where to look, not as the verdict (Fig 9 :60).

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22** - *"Only methods cross up. Only head starts come down."* Sending the full architecture before anyone has described a residual sends a recording, not a generator. Lead with the criterion and its refuter; offer the links after.
- **Fig 10 :42** - *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28** - *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see if the criterion were true before giving them the article.
- **Fig 2 :40** - *"agreement about the world is worthless when the agreeing frames share an evidence pool"* and Fig 2 :42, *"Buy independence in proportion to the cost of being wrong."* A mass send selected for people who already agree produces a convention, not corroboration.

**Recommended order in a reply:** (1) the shape claim and its refuter; (2) ask what they would count as a failure, and record that answer before step 3; (3) only then the links, with the note that the figures, not this summary, are the authority.

## The two-stage offer

1. **Stage 1 before stage 2** is Fig 10 :52, *"Bring a characterised residual, never the source"*, and Fig 2 :45, *"Frames range against the ground. They do not negotiate with it."* The recipient checks the criterion without holding the framework's interior.
2. **Stage 2 is opt-in by construction.** Once a recipient has absorbed the theory, their agreement stops being evidence. Their stage-1 verdict must be recorded first; later agreement is never pooled as corroboration.
3. **Stage 3 sends a method, which is permitted** (Fig 4 :22). The formula is a generator, so giving it away does not give away an answer. Each user writes down what would refute their result before running it and labels the mode of what they get.

## AI and publication caveat

This packet is a simulated derivation produced with language-model assistance. Several venues in `03_public_contact_points.csv` have publication ethics and AI-use policies; the TMLR homepage links an author guide and an ethics page, and Nature and NeurIPS have their own policies. Those policy pages were not opened in this session, so this folder makes no claim about whether a given venue would accept an AI-assisted submission. Check the current policy before any submission and treat this as a constraint on distribution, not as a submission venue in itself. Leading with a refuter and a recorded stage-1 verdict is the honest form regardless of venue.

## Zip

No archive was created. The four working files (`02`, `03`, `04` and `08`) plus the rest of this folder exist locally. **Nothing here was sent to anyone and nothing was uploaded.** Hosting a link and sending it is yours to do; prefer an opt-in download page that lets a recipient decline contact over an attachment pushed to a list.
