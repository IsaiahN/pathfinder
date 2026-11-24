# Public links and distribution

Every link marked "fetched" below was opened on 2026-11-23. Two items are marked "excerpt" because
the fetcher could not open the PDF directly; their text was read from a web-search indexed excerpt
of the hosted file, and that limitation is recorded in `10_source_ledger.csv`. No source was cited
without being read in one of those two ways.

## Verified sources actually opened

| what | URL | status | verified content |
|---|---|---|---|
| On Calibration of Modern Neural Networks | https://arxiv.org/abs/1706.04599 | fetched | Guo, Pleiss, Sun and Weinberger, ICML 2017. Abstract: *"modern neural networks, unlike those from a decade ago, are poorly calibrated."* Also: *"temperature scaling -- a single-parameter variant of Platt Scaling -- is surprisingly effective at calibrating predictions."* |
| Can You Trust Your Model's Uncertainty? | https://arxiv.org/abs/1906.02530 | fetched | Ovadia et al., NeurIPS 2019. Abstract: *"input distributions that are shifted from the training distribution due to a variety of factors including sample bias and non-stationarity"* and *"We find that traditional post-hoc calibration does indeed fall short."* |
| A Baseline for Detecting Misclassified and Out-of-Distribution Examples | https://arxiv.org/abs/1610.02136 | fetched | Hendrycks and Gimpel, ICLR 2017. Abstract: *"Correctly classified examples tend to have greater maximum softmax probabilities than erroneously classified and out-of-distribution examples, allowing for their detection."* |
| A Gentle Introduction to Conformal Prediction | https://arxiv.org/html/2107.07511v6 | fetched | Angelopoulos and Bates, v6 2022, published in Foundations and Trends in ML 16(4), 2023. *"the sets are valid in a distribution-free sense: they possess explicit, non-asymptotic guarantees even without distributional assumptions or model assumptions."* Also: *"The sets become larger when the model is uncertain or the image is intrinsically hard."* |
| "UTILIZING" Signal Detection Theory | https://pmc.ncbi.nlm.nih.gov/articles/PMC4304641 | fetched | Lynn and Barrett, Psychological Science 25(9), 2014. *"SDT's power as an analytic tool comes from separating a perceiver's behavior into two underlying components, sensitivity and bias"* and *"multiple combinations of sensitivity and bias produce the same accuracy."* Also: *"Rare targets or costly false alarms each promote a conservative bias"*, which links base rate to criterion. |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | fetched | Isaiah N, Aug 28 2026. *"the instrument is speaking only about what it measured, it cannot comment on the source"* and *"What the Spectrometer Example Reveals: The answer is unreached until a better instrument exists."* |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | fetched | Isaiah N, Nov 19 2026. *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* and the simulation-status sentence quoted in `01`. |
| Judgment under Uncertainty: Heuristics and Biases | https://www.anderson.ucla.edu/documents/areas/fac/accounting/Class%202%20-%20Kahneman%20and%20Tversky%20-%20Judgment%20Under%20Uncertainty,%20Heuristic%20and%20Biases.pdf | excerpt | Tversky and Kahneman, Science 185(4157), 1974. *"The confidence they have in their prediction depends primarily on the degree of representativeness ... with little or no regard for the factors that limit predictive accuracy."* Direct PDF fetch returned an unsupported content type; text was read from the indexed excerpt of this hosted copy. |
| Interpretation by Physicians of Clinical Laboratory Results | https://www.nejm.org/doi/full/10.1056/nejm197811022991808 | excerpt | Casscells, Schoenberger and Graboys, NEJM 299(18), 1978. Publisher abstract: *"a test to detect a disease whose prevalence is 1/1000 has a false positive rate of"*. Full text is subscriber-only. The result detail (*"only 18% of participants responded 0.02"*) was read in the indexed excerpt of Gigerenzer's 1991 reproduction at http://bear.warrington.ufl.edu/brenner/mar7588/Papers/gigerenzer-1991.pdf, whose PDF fetch was also unsupported. |
| AUAI and UAI 2026 | https://www.auai.org/ | fetched | Association homepage: *"a non-profit organization focused on organizing the annual Conference on Uncertainty in Artificial Intelligence"*; up next, UAI 2026, the 42nd conference. |
| JMLR | https://www.jmlr.org/papers/ | fetched | Public papers and submissions index for the open journal. |
| TMLR | https://jmlr.org/tmlr/ | fetched | *"TMLR emphasizes technical correctness over subjective significance"*; rolling submission on OpenReview. |
| ICLR 2027 | https://iclr.cc/ | fetched | Public call for papers, author guide and AI policy links; abstract and paper deadlines posted. |
| Society for Judgment and Decision Making | https://www.sjdm.org/ | fetched | Public society page, annual meeting and submissions; 2026 featured list includes *"Widely-used measures of overconfidence are confounded with ability."* |
| Judgment and Decision Making journal | https://www.cambridge.org/core/journals/judgment-and-decision-making | fetched | Cambridge journal page with public submission system and author instructions. |

The three links offered at stage 2 are the figures/formula link, one peer-reviewed calibration
paper, and one source-discriminator paper. The full list above is for the ledger and for mapping the
field, not for the email.

## What the wider literature actually bears on

1. **The calibration pool is one witness, not four.** Guo, Ovadia, Hendrycks and Angelopoulos are
   all machine-learning papers and overlap heavily in evidence pool. They agree that a scalar score
   is unreliable or needs a ground, but that agreement is the pool talking (Fig 2 :20, *"so the
   agreement is the pool talking,"*). Their disagreements are more informative: Hendrycks finds
   usable OOD signal in softmax scores, Ovadia finds post-hoc calibration fails under shift, and
   Angelopoulos shows how to turn a heuristic score into a ground-checked set. The synthesis is F5,
   not a vote.
2. **The low-overlap witnesses carry the mechanism.** Signal detection theory (psychophysics),
   Casscells (medical decision making), and Tversky and Kahneman (human judgment) each show the same
   structural fact in a different pool: one scalar conflates two sources, and it takes two readings
   to separate them. Each *predicts* that a confidence-only detector fails, and each corroborates
   F1, F2 and F5 rather than the ML pool's specific numbers.
3. **A useful live signal from the field itself.** SJDM's 2026 featured list includes Spiller's
   *Widely-used measures of overconfidence are confounded with ability*. I read the listing, not the
   paper, so it is recorded as a venue page and used only as a mapping aid. It is a named open
   problem in the same shape as this residual, which is exactly the kind of thing a stage-1 checker
   can confirm or refuse from their own knowledge.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22** — *"Only methods cross up. Only head starts come down."* Sending the whole framework
  before anyone has described the residual sends a recording. Lead with the claim and its refuter.
- **Fig 10 :42** — *"A verifier that can reconstruct the claim cannot verify it."* A recipient who
  has absorbed the framework before the stage-1 verdict has joined the frame being checked.
- **Fig 9 :27-28** — *"describe it before you go looking, or any frame you pick will seem to fit."*
  Ask what they would expect to see if the claim were true before offering a source.
- **Fig 2 :40** — *"disqualifying for a verdict: agreement about the world is worthless when the
  agreeing frames share an evidence pool"* A list selected for receptiveness manufactures the
  correlation that would make its agreement worthless.
- **Fig 9 :60** — *"Use filters for the budget and witnesses for the verdict. Never let a filter hand
  you a verdict."* The public venues in `03` are budget filters. They say where to try, not whether
  the claim is true.

**Recommended order in a reply:** (1) the stage-1 claim and its three refuters; (2) the question
"what would you count as a failure here?"; (3) record the answer; (4) only then, if asked, the three
links, with the note that the figures, not the summary, are the authority.

## Two-stage offer, already stated in `02`

1. **Stage 1 before stage 2:** Fig 10 :52, *"Bring a characterised residual, never the source."*
2. **Stage 2 opt-in:** a later agreement is never pooled as corroboration (Fig 2 :40).
3. **Stage 3 sends a method:** Fig 4 :22. The formula is a generator, so giving it away does not give
   away an answer. Each user writes their own refuter and states their own mode first.

**Hard precondition:** stages 1 to 3 only work if the stage-1 claim is checkable. This solution is
an LLM-assisted simulated derivation. A human owner must check the packet and own any submission.
No material is sent by this agent.
