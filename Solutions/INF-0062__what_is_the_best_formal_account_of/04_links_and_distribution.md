# Public links and distribution

Every URL in the table was opened on 2026-11-23. Local framework files were read from disk the same day.

## Verified world links actually fetched

| what | URL | verified content and usable quote |
|---|---|---|
| Minimum description length | https://en.wikipedia.org/wiki/Minimum_description_length | *"Minimum description length (MDL) is a model selection principle where the shortest description of the data is judged to be the best model."* Also Grünwald's line, quoted on the page: *"any regularity in a given set of data can be used to compress the data, i.e. to describe it using fewer symbols than needed to describe the data literally."* Notes Rissanen 1978 and the two-part code `L(D)=minH in H (L(H)+L(D|H))`. |
| Probably approximately correct learning | https://en.wikipedia.org/wiki/Probably_approximately_correct_learning | *"The model was later extended to treat noise (misclassified samples)."* PAC proposed by Leslie Valiant, 1984; equivalence under regularity conditions to finite VC dimension and compressibility. |
| Sample complexity | https://en.wikipedia.org/wiki/Sample_complexity | *"The No Free Lunch Theorem ... proves that, in general, the strong sample complexity is infinite"* and *"if we are only interested in a particular class of target functions ... then the sample complexity is finite, and it depends linearly on the VC dimension."* |
| Active learning | https://en.wikipedia.org/wiki/Active_learning_(machine_learning) | *"there is a risk that the algorithm is overwhelmed by uninformative examples."* Learner-chosen queries reduce labels, but query strategy itself is a habitat intervention. |
| Bayesian inference | https://en.wikipedia.org/wiki/Bayesian_inference | *"hard convictions are insensitive to counter-evidence"* (Cromwell's rule). Prior, likelihood and posterior with the weighting between inherited prior and incoming evidence. |
| Value of information | https://en.wikipedia.org/wiki/Value_of_information | *"Value of information (VOI or VoI) is the amount a decision maker would be willing to pay for information prior to making a decision."* Used here as the action-price reading that Fig 12 says must stay separate from the bit price. |
| Journal of Machine Learning Research | https://www.jmlr.org/ | Home page verified; open publication forum in all areas of machine learning, with public author and contact pages. |
| Association for Computational Learning | https://learningtheory.org/ | Home page verified; *"the leading conference on the theory of machine learning and artificial intelligence."* |
| Algorithmic Learning Theory / AALT | https://www.algorithmiclearningtheory.org/ | Home page verified; *"Learning theory is the field in computer science and mathematics that studies all theoretical aspects of machine learning."* |
| NeurIPS | https://neurips.cc/ | 2026 site verified; public calls for papers, position papers, datasets and workshops. |
| ICML | https://icml.cc/ | 2027 site verified; public Call for Papers with posted submission dates. |
| arXiv cs.LG | https://arxiv.org/list/cs.LG/recent | Listing fetched; current theory submissions include *"The Optimal Sample Complexity of Agnostic PAC Learning for Partial Concept Classes."* |

## Three essays opened this session

| essay | URL | quote used |
|---|---|---|
| The Library of Babel: Locating The Book of Books | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | *"If several paths create the same behavior, then behavior is a projection with lossy information"*; *"It was proven wrong not by argument, but by the arrival of a better instrument."* |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | *"the truly testable output would need to be derived from the real architecture or working the formula yourself."*; *"Prestige must never be allowed to validate an action directly."* |

The other five essays named in the exemplar were **not** opened in this run and are not cited here. That is recorded as a gap in `10_source_ledger.csv` and `01_figure_grounded_audit.md` section 6.

## Local framework files (the authority)

| file | role |
|---|---|
| `FRAMEWORK/reference/03-FIGURES_TEXT.md` | verbatim figure text with line numbers; every `Fig N :line` citation resolves here |
| `FRAMEWORK/reference/FIGURES_README_canonical.md` | canonical usage rule; figures outrank summaries; returns a shape, not a name |
| `FRAMEWORK/figures/THE_FORMULA.md` | eight-step loop, guards, mode rule, Direction discipline |

## What the wider literature contributes, and what it does not

- **MDL** is the only named formal principle the figures incorporate (Fig 5 :45). The Wikipedia page corroborates the compression-as-model-selection reading, but it is not evidence that MDL beats PAC or Bayesian inference under sparse data.
- **PAC and sample complexity** give the budget side: noise extensions, VC dimension, no-free-lunch. They are filters for what can be tried, not witnesses for what is true (Fig 9 :60). *"Use filters for the budget and witnesses for the verdict."*
- **Active learning** is habitat work. It changes which observations arrive, which changes contact. It does not by itself tell the system what to admit.
- **Bayesian inference** supplies the weighting mechanism (`w` in the Symbols table), and its own Cromwell's rule names the lock-in failure that the figures would treat as a missing refusal operator.
- **Value of information** is a single-scalar action price. Fig 12 forbids adding it to the bit price. This is a genuine point of tension between the world literature and the figures, and the figures decide (Fig 2 :29: the anchor does not update).

No world source was found that **conflicts** with the figure verdict under the domain census. The apparent conflict with value of information was resolved by re-census: it prices actions, not descriptions. The agreement among MDL, PAC, sample complexity and active learning is one shared learning-theory evidence pool, not four witnesses.

## Distribution rules

- **Fig 4 :22** - *"Only methods cross up. Only head starts come down."* Lead with the shape claim and its refuter; offer the links after the recipient has recorded a verdict.
- **Fig 10 :42** - *"A verifier that can reconstruct the claim cannot verify it."* Seat 4 must not hold the interiors. Sending the full framework first converts a checker into a member of the frame.
- **Fig 9 :27** - *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what the recipient would expect to see if the shape claim were true before showing any source.
- **Fig 2 :40** - *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."* No mass send selected for likely agreement. No pooling of later agreement as corroboration.
- **Seat rule, from the example packet's reasoning:** an interest in the outcome is unavoidable, an interest in the reading is disqualifying. Where a stake cannot be removed, declare it.

**Recommended order in a reply:** (1) the shape claim and its four refuters; (2) ask what the recipient would count as a failure; (3) record that verdict; (4) only if curious, the three local links, with the note that the figures, not the summary, are the authority; (5) offer the formula as a reusable method, with the instruction to write a fresh refuter and state a mode.

## Hosting

The artifacts in this folder can be shared as-is. If hosted, prefer an opt-in download page that lets a recipient decline contact over an attachment pushed to a list. Nothing here is sent by this agent.
