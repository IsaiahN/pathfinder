# Public links and distribution

**Mode: `general` on the distribution rules, `specified` on the link descriptions. Not `grounded`.** Simulated derivation checked against the figures, not a ground reading.

## Verified sources fetched this session (2026-11-23)

| what | URL | verified content |
|---|---|---|
| Figures text with line numbers | local: `C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md` | Figures 1 to 13, Operators table, Symbols table; every `Fig N :line` citation in this folder was checked against this file. |
| Canonical figures usage rule | local: `C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md` | Says the figures "outrank everything else in the repo" and that the framework reports "a shape, not a name". |
| Eight-step loop and mode rule | local: `C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md` | Steps 1 to 8, habitat and closure notes, "Mode. general · specified · grounded. State which." |
| Understanding deep learning requires rethinking generalization | https://arxiv.org/abs/1611.03530 | Zhang, Bengio, Hardt, Recht, Vinyals, submitted 2016, revised 2017, published ICLR 2017. Abstract fetched: networks "easily fit a random labeling of the training data"; regularization "qualitatively unaffected". |
| Overfitting | https://en.wikipedia.org/wiki/Overfitting | Fetched. Includes "overfitting occurs when a model begins to 'memorize' training data rather than 'learning' to generalize from a trend" and a benign-overfitting section describing models that generalize after fitting noisy training data perfectly. |
| Cross-validation (statistics) | https://en.wikipedia.org/wiki/Cross-validation_(statistics) | Fetched. Includes the same-population condition, twinning/leakage, high variance of the CV estimate, and MAQC-II swap sampling as a check on human bias. |
| No free lunch in search and optimization | https://en.wikipedia.org/wiki/No_free_lunch_in_search_and_optimization | Fetched. Wolpert and Macready: "any two algorithms are equivalent when their performance is averaged across all possible problems". |
| Minimum description length | https://en.wikipedia.org/wiki/Minimum_description_length | Fetched. Grünwald 2004: "any regularity in a given set of data can be used to compress the data, i.e. to describe it using fewer symbols than needed to describe the data literally". |
| Inductive bias | https://en.wikipedia.org/wiki/Inductive_bias | Fetched. Mitchell 1980: the set of assumptions "the learner uses to predict outputs of given inputs that it has not encountered"; "Without any additional assumptions, this problem cannot be solved". |
| Stimulus control / stimulus generalization | https://en.wikipedia.org/wiki/Stimulus_control | Fetched. Hanson 1959 pigeons: response strength declines with dissimilarity, giving a generalization gradient; discrimination training produced a peak shift to an unreinforced wavelength. |
| The Library of Babel | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Fetched. Shape-of-the-answer passage and the recursive vocabulary method. |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Fetched. Simulacra/validation passage, prestige-is-not-action, and the author's provenance note. |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Fetched. Metamerism, "cannot comment on the source", and the spectrometer resolution. |
| NeurIPS 2026 Call for Papers | https://neurips.cc/Conferences/2026/CallForPapers | Fetched. Lists "Generalization and multi-task learning" as a topic and links the submission portal. |
| OpenReview | https://openreview.net/ | Fetched. Public venue directory with JMLR, TMLR, NeurIPS 2026, ICML 2027, CogSci 2027. |
| JMLR home | https://www.jmlr.org/ | Fetched. Public submissions link, PMLR, DMLR and TMLR listed. |
| TMLR | https://jmlr.org/tmlr/ | Fetched. Rolling submission, technical correctness over subjective significance, review on OpenReview. |
| Machine Learning journal submission guidelines | https://link.springer.com/journal/10994/submission-guidelines | Fetched. Contribution information sheet, no submission fee, LLM-use declaration. |
| Cognitive Science Society | https://cognitivesciencesociety.org/ | Fetched. Public submissions route and contact form. |
| Psychonomic Society | https://www.psychonomic.org/ | Fetched. Calls for abstracts and journals including Learning & Behavior. |

## Fetch failures and partial reads, recorded honestly

- Web search returned no results for several queries this session; sources were located by fetching known public URLs directly. Nothing in this folder is cited from a search snippet alone.
- `https://web.mit.edu/cocosci/Papers/LakeEtAlScience2015.pdf` returned 404 and `https://pubmed.ncbi.nlm.nih.gov/26400235/` required cookies. The Lake program-induction paper is therefore **not** cited in this folder. No quote was invented for it.
- `https://www.jmlr.org/submit.html` returned 404. The JMLR home page was fetched and its Submissions link is the route; the CSV notes this.
- `https://neurips.cc/Conferences/2026/CallForDatasetsAndBenchmarks` returned 404. The Evaluations and Datasets track is described only from the fetched main CFP, which states the tracks have different portals and timelines; the venue row in the CSV says so.
- The NeurIPS 2026 CFP states deadlines in May 2026, already past at the time of this run. It is a verified public venue description, not an open window; verify the current cycle before submitting.

## Relevant wider literature, by field

- **Machine learning theory:** Zhang et al. 2017 show the capacity to fit random labels, which breaks any identification of fit with structure. This is the strongest low-overlap corroboration of F2.
- **Statistics and model selection:** the cross-validation page supplies the same-population condition, twinning/leakage, the high variance of the CV estimate, and swap sampling with blinded modelers. These corroborate F6 and F7 from a different evidence pool.
- **Information theory:** MDL corroborates the Fig 5 bargain; the coin example shows that the best-fitting member of a model class can be beaten by a two-part code. Overlap is medium because the framework itself cites Rissanen 1978, so this is one witness, not two independent ones.
- **Mathematics and optimization:** no-free-lunch corroborates Fig 6 and Fig 8 (no universal method across all problems). Low overlap with the framework essays.
- **Animal behaviour:** Hanson's pigeons give a measured generalization gradient and a peak shift, evidence that generalization is a shape over stimuli and not mere similarity to the trained stimulus. Low overlap, and it sharpens the isomer probe in `06`.
- **Human cognition:** inductive bias (Mitchell 1980) states that unseen outputs are arbitrary without assumptions, which is the same point as a closure with atoms. Low overlap.

Overlap declaration: the Wikipedia statistics pages share a common encyclopedic evidence pool, and the three framework essays share the framework author's pool completely. Agreement within either pool is one witness, not several. No world source conflicts with the figure verdict; the benign-overfitting tension was returned to the census and recorded as strain S2 in `01_figure_grounded_audit.md`.

## Distribution: offer, do not push

- **Fig 4 :22:** "Only methods cross up. Only head starts come down." Send the separator and its refuter, not the full architecture. A recording of one occasion presented as knowledge spends the recipient's independence.
- **Fig 10 :42:** "A verifier that can reconstruct the claim cannot verify it." The outside frame must not hold the interiors before giving a stage-1 verdict.
- **Fig 9 :27-28:** "describe it before you go looking, or any frame you pick will seem to fit." Ask what the recipient would expect to see if the separator were true before showing the essays.
- **Fig 2 :40:** "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." A list ranked by likely agreement manufactures the disqualifying correlation.

**Recommended order in a reply:** (1) the seven-part separator and the six refuters; (2) ask what the recipient would count as a failure; (3) record that verdict; (4) only then the three links, with the note that the figures, not the summary, are the authority; (5) offer the formula as a method for the recipient's own problem, with a request that they write their own refuter and state their own mode.

## The two-stage offer

**Stage 1:** the residual, the separator shape and the pre-registered refuters. Fig 10 :52: "Bring a characterised residual, never the source."

**Stage 2, opt-in only:** the three source links after a stage-1 verdict is recorded. Once a recipient has absorbed the theory, later agreement is not pooled as corroboration (Fig 2 :40).

**Stage 3:** the formula as a method to reuse. Fig 4 :22 permits sending a generator. `THE_FORMULA.md` "Direction" requires each user to bind what an answer would look like and write its refuter first, because the loop cannot check the direction of its own question.

**Hard precondition:** stages 1 to 3 only work if stage 1 survives. The two live strains in `01` (S2 on describing the term, S3 on the benchmark as a substituted habitat) are stated in the stage-1 text; they are not hidden until stage 2.

## Hosting

No archive or upload was created by this agent. If you host the folder, prefer an opt-in download page that lets a recipient decline contact over an attachment pushed to a list. All contact points in `03_public_contact_points.csv` are institutional or opt-in; there are no personal emails, no receptiveness rank and no bulk-send plan anywhere in this folder.
