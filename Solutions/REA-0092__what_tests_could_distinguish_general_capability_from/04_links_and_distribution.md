# Public links and distribution

Every URL below was fetched and read on 2026-11-24. Venue pages establish opt-in routes only; they carry no verdict weight. Papers cited here were opened, and their author, venue, year and a verbatim quote are in `10_source_ledger.csv`.

## 1. Verified source links

| what | URL | what was actually on the page |
|---|---|---|
| On the Measure of Intelligence | https://arxiv.org/abs/1911.01547 | Chollet 2019 (revised 2019). Abstract argues that measuring skill at a task falls short of measuring intelligence because skill is modulated by prior knowledge, and that unlimited priors or training data let experimenters *"buy" arbitrary levels of skills* while masking generalisation power. Proposes skill-acquisition efficiency and the ARC benchmark. |
| ARC Prize 2024 Technical Report | https://arxiv.org/abs/2412.04604 | Chollet, Knoop, Kamradt and Landers, 2024 (revised 2025). Abstract: the benchmark *"seeks to measure generalization on novel tasks -- the essence of intelligence -- as opposed to skill at tasks that can be prepared for in advance."* SOTA rose from 33% to 55.5% on a private set; the 85% grand prize was not claimed. |
| Are We Done with MMLU? | https://arxiv.org/html/2406.04127 | Gema et al., NAACL 2025 (arXiv v3 2025). 14 experts re-annotated 5,700 questions; an estimated 6.49% of MMLU questions contain errors, and re-evaluation *"demonstrates significant discrepancies with the model performance metrics that were originally reported."* |
| Benchmarking LLMs Under Data Contamination | https://arxiv.org/html/2502.17521v2 | Chen et al., arXiv 2025 (v2 September 2025). Survey of static to dynamic evaluation; states plainly that *"potential data contamination is unavoidable"* when benchmarks are public and training corpora are web-scale, and proposes correctness, collision, diversity and interpretability criteria for dynamic benchmarks. |
| Beyond the Imitation Game (BIG-bench) | https://arxiv.org/abs/2206.04615 | Srivastava et al., TMLR 2022/2023. 204 tasks from 450 authors across 132 institutions. Reports that tasks improving gradually commonly involve a large knowledge or memorisation component, whereas breakthrough tasks often involve multiple steps or brittle metrics. |
| No free lunch in search and optimization | https://en.wikipedia.org/wiki/No_free_lunch_in_search_and_optimization | Wikipedia article on Wolpert and Macready's theorems, accessed 2026-11-24. Quote used: *"any two algorithms are equivalent when their performance is averaged across all possible problems."* Mathematical frame for why a fixed test suite cannot rank general capability over all tasks. |
| Goodhart's law | https://en.wikipedia.org/wiki/Goodhart%27s_law | Wikipedia article, accessed 2026-11-24. *"When a measure becomes a target, it ceases to be a good measure"*, with the 1975 original: *"Any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes."* |
| Lucas critique | https://en.wikipedia.org/wiki/Lucas_critique | Wikipedia article, accessed 2026-11-24. *"it is naive to try to predict the effects of a change in economic policy entirely on the basis of relationships observed in historical data"*. An economics analogue of benchmark adaptation. |
| Fluid and crystallized intelligence | https://en.wikipedia.org/wiki/Fluid_and_crystallized_intelligence | Wikipedia article, accessed 2026-11-24. Cattell and Horn's distinction: fluid intelligence is *"the ability to solve novel reasoning problems"*, crystallized is *"the application of learned procedures and knowledge"*. The psychometric ancestor of the question's own distinction. |
| Construct validity | https://en.wikipedia.org/wiki/Construct_validity | Wikipedia article, accessed 2026-11-24. *"Does the measure behave like the theory says a measure of that construct should behave?"* Includes convergent and discriminant validity and Messick's six aspects, among them generalizability across groups, settings and tasks. |
| Animal cognition | https://en.wikipedia.org/wiki/Animal_cognition | Wikipedia article, accessed 2026-11-24. Describes transfer tests where *"successful sorting of these items shows that the animal has not simply learned many specific stimulus-response associations"*, and novel object recognition. A low-overlap field with its own transfer-test tradition. |

## 2. Verified venue links

The following were opened for the contact list in `03_public_contact_points.csv`:

- ARC Prize technical guide: https://arcprize.org/guide
- OpenReview venue directory: https://openreview.net/ (the active list included NeurIPS 2026 Evaluations and Datasets Track, KDD 2027 Datasets and Benchmarks Track, and CogSci 2027 symposia when read)
- arXiv submission overview: https://arxiv.org/help/submit
- Cognitive Science Society: https://cognitivesciencesociety.org/
- Behavioral and Brain Sciences: https://www.cambridge.org/core/journals/behavioral-and-brain-sciences
- METR: https://metr.org/
- NIST AI Risk Management Framework: https://www.nist.gov/itl/ai-risk-management-framework

One attempted URL failed: the NeurIPS 2026 Datasets and Benchmarks call page at `https://neurips.cc/Conferences/2026/CallForDatasetsBenchmarks` returned 404. It is not cited. The OpenReview venue directory is used instead, because that listing was actually read.

## 3. Two findings in the wider literature that bear directly on this question

1. **The distinction already has a psychometric name, but it is not the same claim.** Fluid versus crystallized intelligence separates novel reasoning from learned procedures at the level of a person. Fig 11 :39 relocates capability to agent-and-habitat. These are neighbouring quantities, not the same one. The framework's own architecture essay tags Chollet 2019 as a *parallel*, not an instance. Use the psychometric literature to sharpen the vocabulary, not to settle the figure verdict.
2. **Benchmark validity is a moving target, not a fixed property.** The MMLU re-annotation changed model rankings; the contamination survey says exposure is unavoidable for public static benchmarks; Goodhart's law and the Lucas critique predict that a measure used as a target stops behaving like the construct. Together they corroborate the figure-grounded requirement for a dated provenance record and a ground that does not move. They do not replace it: agreement from one shared evidence pool is one witness (Fig 2 :40).

## 4. Distribution rules

Why the material is offered and not pushed:

- **Fig 11 :70:** *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."* Sending the full framework before anyone has described a residual substitutes a habitat for the recipient and proves they can read it, nothing more.
- **Fig 10 :42:** *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the derivation before giving a verdict has joined the frame being checked.
- **Fig 9 :27-28:** *"describe it before you go looking, or any frame you pick will seem to fit"* . Ask what they would expect to see if the differential-instrument claim were true before giving them the source links.
- **Fig 2 :40:** *"agreement about the world is worthless when the agreeing frames share an evidence pool"*. A list selected for likely agreement produces a convention, not corroboration.
- **Fig 9 :60:** *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* Venue prestige is a filter for where to spend the reading time.

**Recommended order in any reply:** (1) the residual and the six refuters; (2) ask what the recipient would count as a failure; (3) record that answer; (4) only then the source links, with the note that the figure extract, not the summary, is the authority.

## 5. What is not done here

Nothing in this folder sends anything, hosts a download, or contacts a person. Hosting the packet and sending it is yours to do. Prefer a public submission route or an opt-in download page over an attachment pushed to a list, so a recipient can decline without cost.
