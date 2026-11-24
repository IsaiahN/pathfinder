# Public links and distribution

All links below were fetched and read on 2026-11-23. Direct fetches that failed are named in the last section and were rerouted; nothing is cited from a page that was not opened.

## 1. Verified sources actually opened

| what | URL | verified content |
|---|---|---|
| Canonical figures README | https://github.com/IsaiahN/tether/tree/general-agent/figures | Public repo, branch `general-agent`, folder `figures/`. The figures outrank the code and the docs; the quotes are the authority. Cited through the local canonical copy at `FRAMEWORK/reference/FIGURES_README_canonical.md`. |
| Comprehensive continual learning survey | https://arxiv.org/html/2302.00487 | Wang, Zhang, Su and Zhu, arXiv:2302.00487v3, 2024. "continual learning is explicitly limited by catastrophic forgetting, where learning a new task usually results in a dramatic performance degradation of the old tasks." Also defines AA, FM, BWT as *metrics* and states the classical shared-parameter problem has been proven NP-hard in general. |
| Continual Learning and Catastrophic Forgetting | https://arxiv.org/html/2403.05175 | van de Ven, Soures and Kudithipudi, arXiv:2403.05175v1, 2024. "Artificial neural networks tend to rapidly and drastically forget previously learned information when learning something new, a phenomenon referred to as catastrophic forgetting." Also: "preventing catastrophic forgetting is not enough to solve the continual learning problem." |
| Overcoming catastrophic forgetting in neural networks (EWC) | https://pmc.ncbi.nlm.nih.gov/articles/PMC5380101 | Kirkpatrick et al., PNAS 114(13):3521-3526, 2017, PMC open access. "it has been widely thought that catastrophic forgetting is an inevitable feature of connectionist models. We show that it is possible to overcome this limitation and train networks that can maintain expertise on tasks that they have not experienced for a long time." |
| Memory Consolidation | https://pmc.ncbi.nlm.nih.gov/articles/PMC4526749 | Squire, Genzel, Wixted and Morris, Cold Spring Harbor Perspectives in Biology 7(8):a021766, 2015. "Training of the neocortex by the hippocampus (termed 'interleaved' training) allows new information to be assimilated into neocortical networks with a minimum of interference." |
| Three-stage memory consolidation model | https://www.frontiersin.org/journals/computational-neuroscience/articles/10.3389/fncom.2014.00064/full | Fiebig and Lansner, Frontiers in Computational Neuroscience 8:64, 2014, open access. "CF is a radical manifestation of the so called stability-plasticity dilemma. While the principled division of labor proposed by the CLS model improves the trade-off between stability and plasticity drastically... it still cannot fundamentally solve the problem by itself." |
| Predicting the Susceptibility of Examples to Catastrophic Forgetting | https://proceedings.mlr.press/v267/hacohen25a.html | Hacohen and Tuytelaars, ICML 2025, PMLR 267:21546-21569. "observing a connection between learning speed and forgetting: examples learned more quickly are less prone to forgetting." |
| Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, 2026-11-19. "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." Also: "the truly testable output would need to be derived from the real architecture or working the formula yourself." |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Isaiah N, 2026-08-28. "If several paths create the same behavior, then behavior is a projection with lossy information." Also: "The answer is unreached until a better instrument exists." |

Venue pages opened and verified for `03_public_contact_points.csv`: the 2026 Calls for Papers of NeurIPS, ICLR and ICML; the JMLR papers index; the TMLR home page; the arXiv cs.LG recent listing; the PMLR paper page above.

## 2. What the wider literature bears on this question

The world sources are **corroboration only**. The verdict in `09_watson_answer.md` comes from the figures.

1. **The mainstream machine-learning field establishes the residual and the metric shape.** Wang et al. and van de Ven et al. agree that catastrophic forgetting is adaptation to a new distribution degrading the old, and both separate stability from plasticity. They also agree that an average score hides the per-task pattern: van de Ven et al. state that a model at 0% on the first task and 100% on the second has the same average as a rigid model with the opposite scores. This **corroborates F1 and F3** (union split, per-slot residual). It does not decide the figure verdict; both surveys are inside one evidence pool.
2. **Kirkpatrick et al. is a design result, not a law.** EWC shows that a specific mechanism can slow forgetting on benchmark sequences. Under Fig 6 :42-43 that is a design that slows a fall in reach, not a proof that reach is monotone. Read it as corroboration that reach can be protected, and as evidence **against** the frozen-system reading of Option B. It says nothing about the universal gap F8.
3. **Cognitive science and neuroscience are the genuinely low-overlap field.** Squire et al. and Fiebig and Lansner describe interleaved replay and complementary fast/slow systems as the mechanism by which new information is assimilated with minimum interference. That is the same shape as Fig 4 :22-25 (head starts, not recordings) and Fig 11 :67 (reproduce what the old goal required), reached from lesion studies and memory models rather than from the framework. This is the strongest independent corroboration in the folder, and it is mechanism-shape corroboration only, not an check of the figure text.
4. **Hacohen and Tuytelaars add a per-example discriminator.** Examples learned more quickly are less prone to forgetting, and replay-buffer composition changes forgetting. This corroborates the per-slot claim (F3): forgetting is not uniform, so a single global score is the wrong witness. One ICML paper, one witness, low overlap with the two surveys on method but not on field.
5. **A mathematical limit is reported inside the survey, not independently verified here.** Wang et al. state that the classical continual learning problem has been proven NP-hard in general, citing Knoblauch et al. 2020. I did not open Knoblauch et al. this session, so it is recorded as a claim *within* Wang et al., not as a separate source. It corroborates the `gap` direction of F8 but carries no independent witness weight.
6. **The two essays are framework-internal, maximum overlap.** They establish the canonical reading of "shape", the prestige rule and the simulated-status rule. They share the author's evidence pool with the figures completely and are not independent corroboration of anything.

No world source conflicts with a figure verdict. The conflict rule was not triggered. Agreement between the ML sources is one pool talking (Fig 2 :40), so it is recorded as one witness.

## 3. Distribution: offer, do not push

- **Fig 10 :52** - *"Bring a characterised residual, never the source."* A recipient who has absorbed the whole framework before being asked for a verdict has joined the frame being checked.
- **Fig 2 :35** - *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Do not ask for agreement.
- **Fig 9 :27-28** - *"describe it before you go looking, or any frame you pick will seem to fit"* (quoted in full in `01`). Ask what they would expect to see if the shape claim were true before giving them the article.
- **Fig 2 :40** - *"agreement about the world is worthless when the agreeing frames share an evidence pool"*. Record the stage-1 verdict before any theory is shown; never pool later agreement as corroboration.
- **Fig 4 :22** - *"Only methods cross up. Only head starts come down."* Stage 3 sends a method, which is permitted. Giving away the formula does not give away an answer.

**Recommended order in a reply:** (1) the union split and the four-part shape claim; (2) the three pre-registered refuters; (3) ask what they would count as a failure and record the answer; (4) only then the three links, with the note that the figures, not the summary, are the authority.

## 4. The two-stage offer

**Stage 1.** Send the residual in effect terms, the four-part shape claim, and the three refuters. Ask for a check against their own ground. Record the verdict first.

**Stage 2, opt-in only.** If they are curious, offer the three source links. The canonical figures are the authority.

**Stage 3, opt-in only.** Offer the formula as a method to reuse, with the instruction that each user writes their own refuter, names their own ground, and states their own mode before running it (Formula, "Direction"). A reported failure is more useful than a reported success.

## 5. LLM-submission caveat (recorded, not hidden)

The ICML 2026 Call for Papers states that authors may use generative AI tools but must take full responsibility for all content, that LLMs are not eligible for authorship, and that prompt injection is forbidden. NeurIPS and ICLR have comparable author policies. This packet is explicitly a **simulated derivation** (*"the truly testable output would need to be derived from the real architecture or working the formula yourself"*), so any submission must be re-derived by a human author who can answer for it, with the mode and refuter retained. Do not submit this folder as if it were a ground reading.

## 6. Fetch failures and reroutes

- `concepts.psych.wisc.edu/.../OReillyETAL2014.pdf` returned an unsupported file content type to the fetcher. Rerouted to the Frontiers and PMC memory-consolidation articles, both opened directly, for the complementary-learning-systems material.
- `royalsocietypublishing.org/rstb/.../Integration-of-new-information-in-memory-new` returned 403. Not cited as read. The same CLS/interleaving point is taken from the opened PMC and Frontiers sources instead.
- `onlinelibrary.wiley.com/doi/full/10.1111/j.1551-6709.2011.01214.x` returned 403. Not cited as read.

No claim in this folder rests on an unopened page.
