# Public links and distribution

All links below were fetched and verified on 2026-11-22. They are public pages, not personal addresses.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Domingos, A Few Useful Things to Know About Machine Learning (CACM 2012) | https://cacm.acm.org/research/a-few-useful-things-to-know-about-machine-learning | Twelve lessons. "Even though learners of the kind we have been discussing can only learn correlations, their results are often treated as representing causal relations." Also "The most common mistake among machine learning beginners is to test on the training data and have the illusion of success" and a multiple-testing section on false discovery rate. Author: Pedro Domingos, University of Washington. DOI 10.1145/2347736.2347755. |
| Reichstein et al. 2019, reported by MPI-M | https://mpimet.mpg.de/en/communication/news/artificial-intelligence-for-the-earth-system | "All data-driven and statistical approaches do not guarantee physical consistency per se, are highly dependent on data quality, and have difficulty extrapolating." Lead author Markus Reichstein. Underlying paper: Nature 566, 195-204, 2019, doi 10.1038/s41586-019-0912-1. |
| Nature paper abstract (Reichstein et al. 2019) | https://www.nature.com/articles/s41586-019-0912-1 | "Machine learning approaches are increasingly used to extract patterns and insights from the ever-increasing stream of geospatial data, but current approaches may not be optimal when system behaviour is dominated by spatial or temporal context." Proposes hybrid physical plus data-driven models. |
| Runge et al. 2023, Causal inference for time series | https://www.nature.com/articles/s43017-023-00431-y | Nature Reviews Earth and Environment 4, 487-505. "Examples from climate and biogeosciences illustrate typical challenges, such as contemporaneous causation, hidden confounding and non-stationarity." Authors: Jakob Runge, Andreas Gerhardus, Gherardo Varando, Veronika Eyring, Gustau Camps-Valls. |
| Spurious Correlations (Tyler Vigen) | https://www.tylervigen.com/spurious-correlations | Public gallery of absurd correlations. "Any sufficiently large dataset will yield strong correlations completely at random" from 636,906,169 pairwise comparisons over 25,237 variables. Explains data dredging, non-independent observations, confounding variables, outliers and low n. |
| Climate Change AI | https://www.climatechange.ai/ | Nonprofit at the climate and ML intersection. Open NeurIPS 2026 workshop paper submissions, opt-in newsletter, community directory, resource wiki. |
| Geoscientific Model Development | https://www.geoscientific-model-development.net/ | Open-access journal with public interactive discussion. Scope includes "new methods for assessment of models, including work on developing new metrics for assessing model performance and novel ways of comparing model results with observational data." |
| European Geosciences Union | https://www.egu.eu/ | EGU27 abstract call open; divisions spanning atmospheric, climate, ocean, hydrological and informatics sciences. |
| Artificial Intelligence for the Earth Systems (AMS) | https://journals.ametsoc.org/view/journals/aies/aies-overview.xml | Dedicated AMS journal for AI and ML in Earth systems; public submission and author routes. |
| American Geophysical Union | https://www.agu.org/ | Public meetings, ESS Open Archive, 24 journals, sections and member channels. |
| Framework essays used for the "shape" reading | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the ; https://adventuresinml.substack.com/p/the-hard-problem-is-about-source ; https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap ; https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | By Isaiah N, 2026. High overlap with the figures (same author); used for the canonical reading of "shape" and the simulation disclaimer, never as independent corroboration. |

## Wider literature that bears on the two halves of the question

1. **Capability half.** Reichstein et al. 2019 confirms that ML is already used to extract patterns from geospatial data, but says current approaches may not be optimal when behaviour is dominated by spatial or temporal context and that data-driven methods do not guarantee physical consistency. This corroborates the figure-grounded reading of ML as a shape generator that must be ranged against a physical ground. It does not by itself settle the question.
2. **Guard half, ML.** Domingos 2012 gives the independent ML-side guards: keep training and test data separate, expect overfitting in many forms, correct for multiple testing, and remember that learners only find correlations. Each maps onto a figure line in `01_figure_grounded_audit.md` (F2, F4, F5, F6).
3. **Guard half, causal inference.** Runge et al. 2023 gives the Earth-system-side guards: hidden confounding, contemporaneous causation and non-stationarity require causal methods, not more correlation. This maps onto F8.
4. **Guard half, mechanical demonstration.** Vigen shows that data dredging over a large variable set produces strong correlations at random, and that autocorrelation and unindependent observations inflate significance. This maps onto F6 and F11.
5. **Overlap note.** Domingos (ML), Reichstein (Earth-system modelling), Runge (causal inference) and Vigen (statistics education) are independent of the Tether framework and of one another to a useful degree. The four essays are all by the framework author and are treated as one evidence pool. No conclusion in this folder rests on their agreement alone.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22-25** — *"Only methods cross up. Only head starts come down. A recording carried upward looks like knowledge and is a description of one occasion."* Sending the full framework before anyone has described a residual sends a recording. Lead with the claim and its refuter; offer links after.
- **Fig 10 :42** — *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28** — *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see if the claim were true before giving them the literature.
- **Fig 2 :40** — *"agreement about the world is worthless when the agreeing frames share an evidence pool."* A mass send selected for people who already agree produces a convention, not corroboration.
- **Fig 9 :60** — *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* The contact venues in `03` are filters for where to try, not witnesses for what is true.

**Recommended order in a reply:** (1) the shape claim and its refuter; (2) ask what they would count as a failure; (3) record their verdict; (4) only then the links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

- **Stage 1 before stage 2.** Fig 10 :52, *"Bring a characterised residual, never the source."* Fig 2 :45, *"Frames range against the ground. They do not negotiate with it."* The recipient checks the claim without holding the framework's interior.
- **Stage 2 is opt-in by construction.** Once a recipient has absorbed the theory, their agreement stops being evidence (Fig 2 :40). Their stage-1 verdict must be recorded before any theory is shown, and later agreement is never pooled as corroboration.
- **Stage 3 sends a method.** Fig 4 :22, *"Only methods cross up. Only head starts come down."* The formula is a generator, so giving it away does not give away an answer. Each user writes their own refuter and states their own mode.

**Hard precondition:** stages 1 to 3 work only if the stage-1 claim survives. This packet makes no claim about a named pattern, so stage 1 is the guard itself. If the four independent sources above are read by the recipient as already settling the question, stop: that is the drift Fig 2 :34 names, and the claim must be re-ranged against a ground the recipient can move neither by argument nor by agreement.
