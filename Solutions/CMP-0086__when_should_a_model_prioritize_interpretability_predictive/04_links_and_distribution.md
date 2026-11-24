# Public links, wider literature and distribution

All links below were fetched and read on 2026-11-22, except where a failed fetch is recorded explicitly at the end. A link is listed here only if it was opened. The source ledger (`10_source_ledger.csv`) records the author, venue, year, a verbatim quote and the overlap for each.

## 1. Verified links actually opened

| what | URL | verified content |
|---|---|---|
| Canonical figures README | https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md | The local copy at `FRAMEWORK/reference/FIGURES_README_canonical.md` was read; it states the figures outrank code and docs and that quotes are the authority, with the "shape, not a name" limit. The remote URL is the canonical source recorded in the exemplar; the local copy is what was opened this session. |
| Figures for direct download | https://github.com/IsaiahN/tether/tree/general-agent/figures | Public repo, branch `general-agent`, folder `figures/`, as recorded by the local figure text header and canonical README. |
| Towards a Rigorous Science of Interpretable ML | https://arxiv.org/abs/1702.08608 and full text https://arxiv.org/html/1702.08608v2 | Doshi-Velez and Kim, 2017. Defines interpretability as explaining in understandable terms to a human; argues the need stems from *"an incompleteness in the problem formalization"*; gives application-grounded, human-grounded and functionally-grounded evaluation taxonomy; says *"The claim of the research should match the type of the evaluation."* |
| The Mythos of Model Interpretability | https://arxiv.org/abs/1606.03490 and full text https://arxiv.org/html/1606.03490v3 | Lipton, 2016, revised 2017. *"the demand for interpretability arises when there is a mismatch between the formal objectives of supervised learning (test set predictive performance) and the real world costs in a deployment setting."* Also the pneumonia/asthma deployment case and the warning that *"In some cases, transparency may be at odds with the broader objectives of AI."* |
| Stop Explaining Black Box Models | https://arxiv.org/html/1811.10154 and published abstract https://www.nature.com/articles/s42256-019-0048-x | Rudin, 2019, Nature Machine Intelligence 1, 206-215. *"It is a myth that there is necessarily a trade-off between accuracy and interpretability."* Also *"Interpretability is a domain-specific notion, so there cannot be an all-purpose definition"* and the fidelity argument that explanations must be wrong if they are not the model itself. |
| Mechanisms in Science (Stanford Encyclopedia of Philosophy) | https://plato.stanford.edu/entries/science-mechanisms/ | First published 2015, substantive revision 2024. Woodward's condition that a component's behaviour be described by a generalization invariant under interventions; *"Correlational patterns are not mechanisms"*; purely phenomenal models describe inputs and outputs without internal causal structure. |
| Cognitive map | https://en.wikipedia.org/wiki/Cognitive_map | Wikipedia contributors, accessed 2026-11-22. Tolman's 1948 maze rats: a representation that supports taking a correct route from a new starting point, not a fixed turn response. Also Bennett's critique that simpler alternatives cannot be ruled out, which is a good low-overlap analogue for "a mechanism claim needs a discriminating test." |
| All models are wrong | https://en.wikipedia.org/wiki/All_models_are_wrong | Wikipedia contributors, accessed 2026-11-22. Box 1976/1987: *"all models are wrong, but some are useful"*; models judged on utility rather than absolute correctness. Statistics and engineering maxim, low overlap with the ML-interpretability pool. |
| NIST AI RMF main and Engage pages | https://www.nist.gov/itl/ai-risk-management-framework and https://www.nist.gov/itl/ai-risk-management-framework/ai-risk-management-framework-engage | AI RMF 1.0 released 2023-01-26, revised; consensus-driven process with public comments and workshops; institutional contact and opt-in notifications. Venue and governance context, not evidence for the verdict. |
| ACM FAccT homepage and 2027 CFP | https://facctconference.org/ and https://facctconference.org/2027/cfp.html | Interdisciplinary conference; 2027 focus areas explicitly include *"Evaluations and evaluation practices"* and *"Interpretability/explainability."* |
| JMLR Information for Authors | https://www.jmlr.org/author-info.html | *"All claims should be clearly articulated and supported either by empirical experiments or theoretical analyses"*; experiments should be reproducible; recommends a reproducibility checklist. |
| Nature Machine Intelligence submission guidelines | https://www.nature.com/natmachintell/submission-guidelines | Online submission and presubmission enquiries; double-anonymized peer review option. |
| Framework essays used for the canonical reading only | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the ; https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap ; https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Read 2026-11-22. Shape as a narrowed constraint; prestige is not action and cannot settle; a reading cannot comment on its source (metamerism). Same author as the figures, so maximal overlap and zero independent corroboration weight. |

## 2. What the wider literature bears on the question

1. **Interpretability is question-relative, not a single property.** Doshi-Velez and Kim (2017) say interpretability has little consensus and that evaluation must match the claim, giving three levels: application, human and functional proxies. Rudin (2019) says interpretability is domain-specific and there cannot be an all-purpose definition. This is low-overlap corroboration for F3 (each objective has its own anchor and scope). It is one evidence pool (ML interpretability), so it is one witness, not two.
2. **The accuracy/interpretability tradeoff is not a law.** Rudin (2019) calls the smooth tradeoff curve fictional and reports cases where interpretability improved accuracy through iterative data correcting. Lipton (2016) warns that transparency can conflict with broader objectives. The two were scoped by re-census, not merged: different claims about different model classes and stages. Recorded as Strain B in `01_figure_grounded_audit.md`.
3. **Prediction and mechanism come apart.** The SEP entry distinguishes purely phenomenal models (inputs, modulators, outputs, no internal causal structure) from mechanistic ones, and quotes Woodward's invariance-under-intervention condition. Lipton's pneumonia/asthma example is the deployment form: a correct association becomes a wrong intervention. This corroborates F7 and F8 from a genuinely different field (philosophy of science and epidemiology).
4. **The criterion is usefulness, not absolute correctness.** Box's aphorism, *"all models are wrong, but some are useful,"* from statistics and response-surface methodology, is the older form of the same pragmatic split. It corroborates F3 and F10 at low overlap.
5. **A mechanism claim needs a discriminating test.** Bennett's critique of cognitive-map experiments in rats, as summarized in the Wikipedia entry, says simpler alternatives (familiar landmarks, path integration) cannot be ruled out. This is the animal-behaviour analogue of F8: a reading is not a source until an instrument or design discriminates among sources.
6. **Evaluation is a governance process, not a single number.** FAccT's 2027 call puts evaluation practices and interpretability in the same focus list, and NIST's AI RMF is explicitly consensus-driven and revisable. These are institutional forms of Fig 2 :42 (buy independence in proportion to cost of error) and Fig 9 :60 (filters for budget, witnesses for the verdict). They are venue context, not evidence for the figure verdict.

No world source overrules a figure line. Sources 3 to 5 come from low-overlap fields and are the most useful corroboration; sources 1 and 2 share an evidence pool and carry one witness's weight.

## 3. Failed fetches, recorded honestly

Two intended sources failed to return content on 2026-11-22:

- Leo Breiman, *Statistical Modeling: The Two Cultures*, Statistical Science 16(3), 2001, at Project Euclid. The fetch returned no content, so no quote was taken and the source is **not** cited in the verdict.
- Judea Pearl, *Causal inference in statistics: An overview*, Statistics Surveys 3, 2009, at Project Euclid. Same result, no quote, not cited.

Both were replaced by accessible sources that make the same relevant point from different fields (the SEP mechanisms entry and the Lipton paper's causality section). No uncited source was smuggled in as evidence.

## 4. Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 10 :52** - *"Bring a characterised residual, never the source."* Sending the framework before anyone has described a binding condition sends a recording, not a generator. Lead with the four-row shape and its refuter; offer links after.
- **Fig 10 :42** - *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before giving a verdict has joined the frame being checked.
- **Fig 9 :27-28** - *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would count as a failure before giving them the article.
- **Fig 2 :40** - *"agreement about the world is worthless when the agreeing frames share an evidence pool"* (Fig 2 :40). A list selected for receptiveness is one witness wearing many names.
- **Fig 2 :42** - *"Buy independence in proportion to the cost of being wrong."* High-stakes evaluation warrants several low-overlap readers, not a friendly audience.

**Recommended order in a reply:** (1) the four-row shape and its refuters; (2) ask what the recipient would count as a failure; (3) record the verdict; (4) only then the links, with the note that the figures, not this summary, are the authority.

## 5. The two-stage offer

- **Stage 1 before stage 2.** Fig 10 :52 and Fig 2 :45 (*"Frames range against the ground. They do not negotiate with it."*). The recipient checks the shape without holding the framework's interior.
- **Stage 2 is opt-in by construction.** Once a recipient has absorbed the theory, their agreement stops being evidence. Their stage-1 verdict must be recorded before any theory is shown, and later agreement is never pooled as corroboration.
- **Stage 3 sends a method.** Fig 4 :22-25 says only methods cross up. The formula is a generator, so giving it away does not give away an answer. Each user must still name their own ground and write their own refuter before running it (Formula, "Direction").

**Hard precondition:** stages 1 to 3 only work if the stage-1 shape survives. If any pre-registered falsifier in `01_figure_grounded_audit.md` section 4 fires, the shape is withdrawn before any contact is made.

## 6. What is not sent

No personal emails, no purchased lists, no bulk send, no ranking of recipients by likely agreement, and no request for trust. One-to-one contact through the public institutional routes in `03_public_contact_points.csv`, with an opt-out line in every follow-up.
