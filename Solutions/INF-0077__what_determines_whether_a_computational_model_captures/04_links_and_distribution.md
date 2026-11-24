# Public links, wider literature and distribution

All links below were fetched on 2026-11-23 unless marked otherwise. Failed fetches are recorded rather than hidden.

## 1. Verified public links actually fetched

| what | URL | verified content |
|---|---|---|
| Causal inference (reference article) | https://en.wikipedia.org/wiki/Causal_inference | Defines the field: *"The main difference between causal inference and inference of association is that causal inference analyzes the response of an effect variable when a cause of the effect variable is changed."* Also *"one cannot determine the direction of a causal relation based on correlations only."* |
| Causal model (reference article) | https://en.wikipedia.org/wiki/Causal_model | States the Markov-equivalence point verbatim: *"Conversely, data cannot show which of these two models are correct, because they have the same independence conditions."* Describes `do` as *"an operator that signals the experimental intervention"* and a *"mini-surgery."* |
| Causal graph (reference article) | https://en.wikipedia.org/wiki/Causal_graph | Defines an arrow by response under held-constant change: *"an arrow is drawn from a variable X to a variable Y whenever Y is judged to respond to changes in X when all other variables are being held constant."* Also the identifiability criterion and *"these conditional independences represent all of the model's testable implications."* |
| Surrogate endpoint (reference article) | https://en.wikipedia.org/wiki/Surrogate_endpoint | *"A correlate does not make a surrogate."* Justification *"requires that the effect of the intervention on the surrogate endpoint predicts the effect on the clinical outcome: a much stronger condition than correlation."* Gives statin and Avastin cases. |
| System identification (reference article) | https://en.wikipedia.org/wiki/System_identification | Engineering version: *"The quality of system identification depends on the quality of the inputs, which are under the control of the systems engineer."* And *"what really matters is not to obtain the best possible model that fits the data... but to obtain a model satisfying enough for the closed-loop performance."* |
| Causal reasoning (reference article) | https://en.wikipedia.org/wiki/Causal_reasoning | Cognitive and animal behaviour version: *"ascertaining cause and effect relations is quite hard and arguably impossible through statistical observation alone."* Also the New Caledonian crow hidden-agent experiment and *"In a scientific experiment, the experimenters vary an independent variable and observe the changes in the dependent variable."* |
| PLOS Computational Biology | https://journals.plos.org/ploscompbiol/ | Journal page fetched; public submission route, open access, data and code availability policy. See `03_public_contact_points.csv`. |
| JMLR | https://jmlr.org/ | Journal page fetched; free online publication, public submission, recent causal-discovery and identifiability papers listed. |
| Philosophy of Science submissions | https://philsci.org/submissions.php | *"All submissions must be made through the Philosophy of Science Editorial Manager website."* Anonymous review, 9500-word limit. |
| arXiv stat.ME recent listings | https://arxiv.org/list/stat.ME/recent | Public preprint listing fetched; titles seen include *"Causal Effect Estimation Under Uncertain Statistical Surrogacy"* and *"What Does Matching a Human Intervention Effect Establish? Benchmark Checks for LLM Simulations."* **Listing only: full texts were not opened, so these titles are pointers, not cited sources.** |

## 2. Fetches that failed or were not usable

| URL | result | handling |
|---|---|---|
| https://ftp.cs.ucla.edu/pub/stat_ser/r350.pdf | PDF content type unsupported by the fetcher | Not used as a read source. Pearl's 2009 overview is cited only through the reference list of the Wikipedia articles that were actually opened. |
| https://plato.stanford.edu/entries/causation/ | 404 on two attempts | Not used. No quote from SEP appears in this folder except the one reproduced inside the "Causal model" article, which was opened. |
| https://www.causality.ucla.edu/ | transport error | Not used as a verified contact point. |
| https://www.degruyter.com/journal/key/jci/html and its degruyterbrill redirect | 405 | Journal of Causal Inference is therefore **not** in the verified contact list. No claim is made about it. |

A failed fetch is not a reason to lower the verdict. It is a reason to leave the row out (Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*).

## 3. Relevant wider literature, by field

The fields were chosen for low overlap with the framework's own essays. Each item below was opened; the exact quote used is in `10_source_ledger.csv`.

- **Statistics and methodology (Causal inference).** The response-of-an-effect-variable definition and the explicit statement that direction cannot be determined from correlations. Predicts F1 and F3 here. Corroborates.
- **Computer science (Causal model).** Observationally equivalent graphs sharing independence conditions, the `do` operator as mini-surgery, and a polynomial-time decidability algorithm for identification. Predicts F2, F4 and F7. Corroborates.
- **Statistics, econometrics and genetics (Causal graph).** Arrows defined by response under held-constant change; the single-door criterion as a necessary and sufficient identification condition. Predicts F3 and F7. Corroborates.
- **Medicine and epidemiology (Surrogate endpoint).** A correlate does not make a surrogate; real cases where a surrogate-benefit finding later failed or reversed in the hard endpoint. Predicts F4 and F8. Corroborates, with the strongest empirical weight of the six.
- **Engineering and control (System identification).** Input quality is under the engineer's control; a model good enough for closed-loop performance can beat a better-fitting model; black-box identification records input-output relations without internal detail. Predicts F1 and F8. Corroborates.
- **Human cognition and animal behaviour (Causal reasoning).** Cause and effect are hard to ascertain from statistical observation alone; experimenters vary an independent variable; New Caledonian crows distinguish the presence of a hidden causal agent. Predicts F4 and the contact requirement. Corroborates, and is the lowest-overlap witness.

**Overlap honesty.** All six are tertiary encyclopedic articles. They share a general scientific evidence pool and several cite the same underlying literature (Pearl, Prentice, Sloman). Agreement among them is therefore closer to one witness with several faces than to six independent witnesses. They corroborate the figure-derived shape; they do not decide it. No world source conflicts with the figure verdict, so the conflict rule was not triggered.

## 4. Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22** *"Only methods cross up. Only head starts come down."* Sending the full framework before a recipient has described the residual sends a recording, not a generator. Lead with the shape claim and its refuter; offer the links after.
- **Fig 10 :42** *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before giving a verdict has joined the frame being checked.
- **Fig 9 :27-28** *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see if the shape claim were true before showing any source.
- **Fig 2 :40** *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."* A bulk send selected for people who already agree produces a convention, not corroboration.

Recommended order in any reply: (1) the residual, shape claim and refuter; (2) ask what they would count as a failure and record the verdict; (3) only then the source paths, with the note that the figures, not the summary, are the authority.

## 5. The two-stage offer, restated

1. **Stage 1:** validate the output against the ground. No theory is shown. This is Fig 10 :52 and Fig 2 :45.
2. **Stage 2, opt-in:** if curious, read the sources that produced the shape. Their stage-1 verdict is already recorded and is never pooled as corroboration.
3. **Stage 3:** use the formula recursively on other problems, each with its own ground, mode and self-written refuter. Fig 4 :22 permits sending a method, because a generator can be given away without giving away an answer.

**Hard precondition:** stages 1 to 3 work only if the stage-1 output survives on contact. The four refuters in `02_outreach_email.md` are the test. Nothing is sent by this agent; hosting and sending are the user's to do. If a link is hosted, prefer a page that lets a recipient decline contact. An opt-in download is closer to the figure's rule than an attachment pushed to a list.
