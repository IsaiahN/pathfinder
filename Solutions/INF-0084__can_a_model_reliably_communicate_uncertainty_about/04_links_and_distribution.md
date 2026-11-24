# Public links and distribution

Every external link below was fetched and read on 2026-11-23. Local framework files were read from the workspace. Provenance for each is in `10_source_ledger.csv`.

## Verified sources actually opened

| what | URL | verified content |
|---|---|---|
| Calibration of modern neural networks | https://arxiv.org/abs/1706.04599 | Guo, Pleiss, Sun and Weinberger, ICML 2017. Abstract: "modern neural networks, unlike those from a decade ago, are poorly calibrated." Depth, width, weight decay and Batch Normalization are named as factors; temperature scaling is effective. |
| Aleatoric versus epistemic uncertainty | https://arxiv.org/abs/1703.04977 | Kendall and Gal, NIPS 2017. Abstract: "Aleatoric uncertainty captures noise inherent in the observations. On the other hand, epistemic uncertainty accounts for uncertainty in the model -- uncertainty which can be explained away given enough data." |
| Predictive uncertainty under dataset shift | https://arxiv.org/abs/1906.02530 | Ovadia, Fertig, Ren, Nado, Sculley, Nowozin, Dillon, Lakshminarayanan and Snoek, NeurIPS 2019. Abstract: "We find that traditional post-hoc calibration does indeed fall short, as do several other previous methods." |
| OOD and misclassification detection baseline | https://arxiv.org/abs/1610.02136 | Hendrycks and Gimpel, ICLR 2017. Abstract: "Correctly classified examples tend to have greater maximum softmax probabilities than erroneously classified and out-of-distribution examples, allowing for their detection." |
| Human metacognition review | https://www.annualreviews.org/content/journals/10.1146/annurev-psych-022423-032425 | Fleming, Annual Review of Psychology 75:241-268, 2024. Abstract: "metacognitive judgments are inferential and sometimes diverge from task performance." |
| Confidence-accuracy meta-analysis | https://link.springer.com/article/10.3758/s13423-022-02063-7 | Jin, Verhaeghen and Rahnev, Psychonomic Bulletin and Review 29:1405-1413, 2022. Across 213 datasets, average accuracy and average confidence correlate at R = .22; the correlation "is largely unrelated to the metacognitive ability of the individual participants." |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Isaiah N, Aug 28 2026. "If several paths create the same behavior, then behavior is a projection with lossy information." And: the instrument "cannot comment on the source." |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, Nov 19 2026. "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." |
| The Library of Babel | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Isaiah N, Oct 2 2026. "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." |
| Decoding Tacit Knowledge | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | Isaiah N, Nov 10 2026. "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." |
| Verbatim figure text (local) | local: FRAMEWORK/reference/03-FIGURES_TEXT.md | Source of every Fig N :line quote in this folder. |
| Canonical usage rule (local) | local: FRAMEWORK/reference/FIGURES_README_canonical.md | "They outrank everything else in the repo... the quotes are the authority, not this summary." |

## Three findings in the wider literature that bear directly on the question

1. **A confidence number is a projection, not a source reading.** Guo et al. (2017) establish that modern networks are poorly calibrated, and Ovadia et al. (2019) establish that post-hoc calibration falls short under dataset shift. Both are exactly the limits horn. The framework's version is sharper: a reading cannot comment on its source (The Hard Problem is About Source), so a confidence scalar cannot tell whether the input is unfamiliar because of depth or because of genuine absence (Fig 6 :27).

2. **The uncertainty signal is not one thing.** Kendall and Gal (2017) separate aleatoric noise in the observations from epistemic uncertainty in the model, which "can be explained away given enough data." This supports the union finding: the two conditions in the question have different remedies and must not be averaged.

3. **The human analogue is suggestive but not a second witness.** Fleming (2024) finds that metacognitive judgments are inferential and can diverge from task performance. Jin et al. (2022) find a modest across-subject confidence-accuracy correlation that is "largely unrelated to the metacognitive ability of the individual participants." These corroborate the shape, but they are world sources only and share the question's framing with this derivation, so their agreement is one pool talking (Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool").

## Distribution: offer, do not push

- Fig 4 :22 "Only methods cross up. Only head starts come down." Sending the full framework before anyone has described a residual sends a recording, not a generator. Lead with the residual, the shape claim and the refuter.
- Fig 10 :52 "Bring a characterised residual, never the source." Seat 4 must not hold the interiors. A recipient who has absorbed the whole framework before judging has joined the frame being checked.
- Fig 9 :27 "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the shape claim were true before giving them the links.
- Fig 2 :42 "Buy independence in proportion to the cost of being wrong." A mass send selected for people likely to agree spends independence in advance.

**Recommended order in a reply:** (1) the shape claim and its refuter; (2) ask what they would count as a failure; (3) record that answer; (4) only then the links, with the note that the figures, not this summary, are the authority.

## The two-stage offer

1. **Stage 1:** validate the output against a ground. The recipient checks the shape claim without holding the framework's interior. Their verdict is recorded before any theory is shown.
2. **Stage 2, opt-in only:** if curious, read the framework that produced it. Later agreement is never pooled as corroboration.
3. **Stage 3:** offer the eight-step loop as a method to reuse. Each user writes their own refuter and states their own mode before running it.

**Hard precondition:** stages 1 to 3 work only if the stage-1 output survives. That requires a real anchor drawn from outside the training and evaluation pools. The three sub-claims in `08_expert_verification_packet.md` are the ones to check. No such anchor was run in this derivation, so the packet is offered as a candidate with a stated refuter, not as a settled result.

## Hosting

This agent cannot upload, host or send anything. A local folder exists in the Solution directory. Hosting it (Drive, Dropbox, a repo release) and sending the link is yours to do. Prefer an opt-in download page that lets a recipient decline contact over an attachment pushed to a list.
