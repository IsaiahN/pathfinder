# Public links and distribution

All public URLs in this file and in `03_public_contact_points.csv` were fetched and read on 2026-11-23. Local framework files are cited by their repository paths.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Calibration of modern neural networks | https://proceedings.mlr.press/v70/guo17a.html | Guo, Pleiss, Sun and Weinberger, ICML 2017, PMLR 70:1321-1330. Abstract: "modern neural networks, unlike those from a decade ago, are poorly calibrated." Defines expected calibration error as the gap between confidence and measured accuracy. |
| Conformal prediction tutorial | https://journals.sagepub.com/doi/full/10.1177/25152459251380452 | Kaiser and Herzog, 2025. Conformal prediction gives a finite-sample marginal coverage guarantee under exchangeability, and under distribution shift "conformal PIs may no longer achieve valid marginal coverage." |
| ZKProof Community Reference | https://docs.zkproof.org/reference.pdf | ZKProof, 2022. "Soundness requires that not even a malicious prover can convince the verifier of a false statement" and a malicious verifier learns nothing beyond the truth of the statement. |
| Reliabilist Epistemology, Stanford Encyclopedia of Philosophy | https://plato.stanford.edu/ENTRIES/reliabilism/ | Goldman, first published 2008. "a belief earns the status of 'justified' if it is produced by a process (or series of processes) that has a high truth-ratio" and "a belief can be justified but false." |
| A Survey on Hallucination in Large Language Models | https://dl.acm.org/doi/fullHtml/10.1145/3703155 | Huang et al., ACM Transactions on Information Systems, 2025. "LLMs are prone to hallucination, generating plausible yet nonfactual content." Fact-checking is defined as verification against trusted knowledge sources, distinct from internal uncertainty signals. |
| Confidence judgments and metacognition | https://link.springer.com/article/10.3758/s13421-026-01874-6 | Koriat, Memory and Cognition, 2026. Under the self-consistency model, "their confidence in the selected option derives from the internal consistency among cues that are sampled randomly from a shared pool." |
| Verbatim figures, line numbers | local: `FRAMEWORK/reference/03-FIGURES_TEXT.md` | All `Fig N :line` citations in this folder derive from this extract. |
| Canonical usage rule | local: `FRAMEWORK/reference/FIGURES_README_canonical.md` | "They outrank everything else in the repo... the quotes are the authority, not this summary." The framework returns a shape, not a name. |
| Metalaw reading | local: `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` | The figures are metalaws; design questions are settled by derivation from them, not by escalating to the anchor's maintainer. |

## What the wider literature bears on this question

Four points, kept as secondary corroboration only. The verdict comes from the figures.

1. **A confidence number is not a ground metric.** Guo et al. (2017) show modern networks are "poorly calibrated" and introduced ECE as a measured gap between confidence and accuracy. Koriat (2026) shows human confidence can be a by-product of internal cue consistency. Both predict that a high score is compatible with being wrong, which is what Fig 1 :27 forbids using as a verdict. Fields: machine learning and human cognition, low overlap with each other.
2. **A ground-anchored guarantee has a different structure.** Conformal prediction obtains finite-sample marginal coverage against held-out data, and the SAGE tutorial notes the guarantee can fail under distribution shift. This corroborates Fig 2 :29 (an anchor that settles) and Fig 10 :24 (the channel decays). It is also a **binding** from the statistics frame onto the held atom "settlement against the ground", not a derivation by the framework. Recorded as provenance, not asserted as the answer.
3. **Verifier non-access is a soundness condition.** The ZKProof reference makes soundness and zero-knowledge explicit: a malicious prover cannot convince a verifier of a false statement, and the verifier learns nothing beyond the truth. This corroborates Fig 10 :42, "A verifier that can reconstruct the claim cannot verify it." Field: cryptography and mathematical foundations, no overlap with the ML sources.
4. **Justification is a property of process and history, not of the output's confidence.** Goldman's reliabilism, as recorded in SEP, makes justification depend on a reliable belief-forming process and allows "a belief can be justified but false." This corroborates the lineage and settlement requirements (Fig 13 :130, Fig 10 :65), though it lacks the framework's stronger condition that the anchor must not update on the frame. Field: philosophy and epistemology, distinct pool.

No world source conflicts with the figure verdict. The conflict rule was not triggered. Six sources in six fields were read; overlap between them is low, but none outranks a figure line.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22**, "Only methods cross up. Only head starts come down." Leading with the framework before anyone has described a residual sends a recording, not a generator. Lead with the shape claim and the refuter; offer links after.
- **Fig 10 :42**, "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the whole architecture before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27**, "describe it before you go looking", so ask what they would expect to see if the shape claim were true before giving them the article.
- **Fig 2 :40**, "agreement about the world is worthless when the agreeing frames share an evidence pool." A mass send selected for people likely to agree produces a convention, not corroboration.
- **Seat Map :163**, "High correlation is disqualifying for a verdict and efficient for a convention."

**Recommended order in a reply:** (1) the shape claim and its four refuters; (2) ask what they would count as a failure; (3) record their verdict before showing any theory; (4) only then the three links, with the note that the figures, not this summary, are the authority; (5) offer the formula as a method for them to reuse on a problem they can check themselves.

## The two-stage offer, and the third stage

- **Stage 1 before stage 2.** Fig 10 :52, "Bring a characterised residual, never the source", and Fig 2 :45, "Frames range against the ground. They do not negotiate with it." The recipient checks the claim without holding the framework's interior.
- **Stage 2 is opt-in by construction.** Once a recipient has absorbed the theory, their agreement stops being evidence. Their stage-1 verdict must be recorded before any theory is shown, and later agreement is never pooled as corroboration (Fig 2 :40).
- **Stage 3 sends a method, which is permitted.** Fig 4 :22. The formula is a generator, so giving it away does not give away an answer.
- **Stage 3 still needs a ground per problem.** The formula's "Direction": a frame "cannot check the direction of its own question". Each user writes down what would refute their result before running it, and states the mode of the output.

**Hard precondition:** stages 1 to 3 only work if the stage-1 claim survives. Section 4 of `01_figure_grounded_audit.md` holds the refuter that decides this. Nothing is sent by this agent; hosting and sending are the owner's actions.
