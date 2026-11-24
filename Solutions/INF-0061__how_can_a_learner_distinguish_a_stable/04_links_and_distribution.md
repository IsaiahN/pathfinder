# Public links and distribution

Links were opened on 2026-11-23 unless a fetch failure is recorded below. A fetch failure is never cited as if the page had been read.

## Verified sources actually opened

| what | URL | verified content |
|---|---|---|
| Verbatim figure text (local) | `FRAMEWORK/reference/03-FIGURES_TEXT.md` | Read this session. Figures 1 to 13 plus Operators and Symbols tables, one SVG text element per numbered line. Every `Fig N :line` citation in this folder is taken from here. |
| Canonical figures README (local) | `FRAMEWORK/reference/FIGURES_README_canonical.md` | Read this session. *"They outrank everything else in the repo: the code, the rulings and the docs answer to them"* and *"the quotes are the authority, not this summary."* |
| THE FORMULA (local) | `FRAMEWORK/figures/THE_FORMULA.md` | Read this session. Eight steps, mode rule, habitat, closure, direction, round trip. |
| JMLR home | https://www.jmlr.org/ | Fetched. *"The Journal of Machine Learning Research (JMLR), established in 2000, provides an international forum... All published papers are freely available online."* Public submission and free archive. |
| arXiv stat.ML listing | https://arxiv.org/list/stat.ML/recent | Fetched. Live public preprint listing in statistical machine learning, including conformal selection, false-discovery-rate control, and distribution-shift papers. |
| Minimum description length, Scholarpedia | http://www.scholarpedia.org/article/Minimum_description_length | Fetched in full. Rissanen 2008. *"the best model is the one which permits the shortest encoding of the data and the model itself."* Also: *"The MDL Principle originated with the publication of Rissanen (1978)."* |
| Statistical learning: from items to rules (PMC) | https://pmc.ncbi.nlm.nih.gov/articles/PMC3758750/ | Fetched in full. Aslin and Newport, Current Directions in Psychological Science, 2012. *"the learner must select the correct structure from an infinite number of potential structures present in any set of data, without waiting forever"*. Reports Saffran et al. 1996 transitional probabilities of 1.0 within words and 0.33 at boundaries. |
| Sampling and tracking a changing environment (PMC) | https://pmc.ncbi.nlm.nih.gov/articles/PMC5413896/ | Fetched in full. Dunlap, Papaj and Dornhaus, Interface Focus, 2017. *"Bees sampled the fluctuating resource more frequently when it changed quality more frequently, indicating that they measured environmental persistence and reacted to it as predicted by theory."* Also *"Bees showed surprisingly suboptimal tracking"* except at high persistence and reward. |
| CogSci 2026 program and submissions FAQ | https://cognitivesciencesociety.org/cogsci-2026 and https://cognitivesciencesociety.org/submissions-faq | Retrieved via public web index. The FAQ states AI tools cannot be listed as authors and must be disclosed in Methods or Acknowledgements; submissions are double-blind. |
| SLDS 2026 program | https://asa-slds.github.io/slds2026/doc/program.pdf | Retrieved via public web index. Biennial ASA Statistical Learning and Data Science conference, 1 to 3 November 2026, Brooklyn; public poster session. |

## Fetch failures, recorded honestly

- `https://www.science.org/doi/10.1126/science.274.5294.1926` (Saffran, Aslin and Newport 1996) returned 403 to direct fetch. The content used here was read through the Aslin and Newport 2012 PMC review and the search-indexed PDF text at `https://infantlearning.wiscweb.wisc.edu/wp-content/uploads/sites/70/2017/02/SaffranAslinNewport1996.pdf`, and is marked as partial-read with reduced weight in the ledger.
- `https://sites.stat.columbia.edu/gelman/research/unpublished/p_hacking.pdf` (Gelman and Loken) returned an unsupported content type to direct fetch. The content used here was read from the search-indexed full text and the FORRT glossary entry at `https://forrt.org/glossary/english/garden_of_forking_paths`, and is marked as partial-read.
- `https://eprints.bournemouth.ac.uk/22491/1/ACM%20computing%20surveys.pdf` (Gama et al., survey on concept drift adaptation) returned an unsupported content type to direct fetch. The passages used were read from the search-indexed PDF text and the ACM abstract page at `https://dl.acm.org/doi/10.1145/2523813`, and are marked as partial-read.
- `https://www.jneurosci.org/content/32/11/3665` (Wacongne, Changeux and Dehaene 2012) returned 403. The abstract and discussion passages used were read from the search-indexed record and the PMC review at `https://pmc.ncbi.nlm.nih.gov/articles/PMC2671031`, and are marked as partial-read.
- `https://www.amstat.org/asa/sections/slds/about` returned 404. The ASA SLDS venue is listed using its conference site and program PDF instead.
- `https://escholarship.org/uc/cognitivesciencesociety` returned no body to direct fetch. It is listed as a reading venue only, linked from the verified CogSci 2026 program page.

## Findings in the wider literature that bear directly on this question

1. **MDL is a real acceptance test, not a framework metaphor.** Rissanen 1978, as summarised by Rissanen himself in Scholarpedia 2008, makes description length the criterion that chooses a model without assuming a true distribution: *"the best model is the one which permits the shortest encoding of the data and the model itself."* This corroborates the figure's own line *"This is minimum description length, Rissanen 1978"* (`Fig 5 :45`) at genuinely low overlap, because it is the source field, not the framework. It does not supply a threshold for a given learner.
2. **Human statistical learning separates coherent from accidental sequences by transitional probability.** Aslin and Newport 2012 reports Saffran et al. 1996: *"the transitional probability from one syllable to another within a word was 1.0, whereas the transitional probability of syllable pairs at word boundaries was 0.33"*, and the review's governing sentence is *"the learner must select the correct structure from an infinite number of potential structures present in any set of data, without waiting forever"*. This is the same shape as `Fig 9 :32` (*"you get a kind of thing, never the answer itself"*): the learner narrows to a structure without an instructor, but the figure set does not name the number.
3. **Concept drift is handled with two models and a threshold, not one score.** Gama et al. 2014 survey describes the stable/reactive pair: *"The stable model predicts based on a long history, whereas the reactive model predicts based on a short recent time window."* Bifet and Gavaldà 2007 (ADWIN) claim *"bounds on the rates of false positives and false negatives."* These are candidate instruments that could be imported under `Fig 8`'s source gate and shadow test, not verdicts about the framework.
4. **Metascience names the coincidence that looks stable.** Gelman and Loken's garden of forking paths: *"Researcher degrees of freedom can lead to a multiple comparisons problem, even in settings where researchers perform only a single analysis on their data."* This is the world analogue of `Fig 5 :62` (*"A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term"*), and it is why the refuter is written before the run.
5. **Animal behaviour supplies a low-overlap test of the persistence condition.** Dunlap et al. 2017: bees measure persistence and sample accordingly, but *"Bees showed surprisingly suboptimal tracking"* except when persistence and reward were high. The mechanism is reported as more than a single win-stay/lose-shift rule, with past and present experience weighted. This corroborates the shape that contact, not an internal score, governs what counts as stable, and it warns that the channel can be informative without the learner tracking well.
6. **Generalization work separates signal from noise by relative fitting rate.** Teng et al. 2023 (ICML) propose REF Complexity with the intuition that a model *"may generalize well if it fits signal (e.g., true labels) fast while fitting noise (e.g., random labels) slowly."* This is an import candidate for the opposite-signed shrink test in `Fig 5 :60`.
7. **Predictive coding supplies an instrument that detects deviation from a learned regularity.** Wacongne, Changeux and Dehaene 2012 report that mismatch negativity *"is thought to index the activation of specialized neural networks for active prediction and deviance detection"*, and note a limit: the model *"fails to detect deviance from a rule that cannot be described at the level of transition probabilities."* That limit is a real boundary on any instrument imported for this question.

Overlap is declared: the Saffran 1996 and Aslin and Newport 2012 sources share an author and an evidence pool, as do the Gelman and Loken PDF and the FORRT glossary entry; each pair counts as one witness. The three machine-learning sources are in different subfields (drift survey, data streams, generalization theory) but share a broad field and are not treated as three independent witnesses. The Rissanen, bee-foraging and predictive-coding sources are genuinely lower overlap.

## Distribution: offer, do not push

Figure-grounded reasons:

- `Fig 4 :22`: *"Only methods cross up. Only head starts come down."* Sending the full architecture before anyone has described a residual sends a recording, not a generator. Lead with the separator and its refuter; offer links after.
- `Fig 10 :42`: *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the whole framework before being asked for a verdict has joined the frame being checked.
- `Fig 9 :27`: *"describe it before you go looking, or any frame you pick will seem to fit"* - ask what they would count as a failure before giving them the article.
- `Fig 2 :40`: agreement is *"disqualifying for a verdict"* when frames share an evidence pool. No list ranked by likely agreement, no bulk send.

**Recommended order in a reply:** (1) the separator and its seven refuters; (2) ask what they would count as a failure; (3) record that verdict before showing any theory; (4) only then the three links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

1. **Stage 1 before stage 2.** `Fig 10 :52`: *"Bring a characterised residual, never the source."* The reader checks the separator without holding the framework's interior.
2. **Stage 2 is opt-in.** Once a reader has absorbed the theory, their agreement stops being evidence (`Fig 2 :39`: *"Correlation has valence"*). The stage-1 verdict is recorded first and later agreement is never pooled as corroboration.
3. **Stage 3 sends a method, which is permitted.** `Fig 4 :22` again. The formula is a generator, so giving it away does not give away an answer.
4. **Stage 3 still needs a ground per problem.** `THE_FORMULA.md` "Direction": a frame *"cannot check the direction of its own question, because the shape a frame is searching for is not a term it holds."* Each user writes down what would refute their result before running it and states the mode.

**Hard precondition:** stages 1 to 3 only work if stage 1 survives. As written, the stage-1 output is a shape with a declared `gap`, not a number; if a number is substituted, the output fails its own F12 refuter.

## Hosting

Nothing is sent by this agent. Hosting and sending is the user's action. Prefer an opt-in download page over an attachment pushed to a list, so a recipient can decline contact; that is closer to the figures' rule about opt-in channels than an unsolicited bulk attachment.
