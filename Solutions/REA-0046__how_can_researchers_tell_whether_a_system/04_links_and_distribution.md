# Public links and distribution

All URLs below were fetched and read on 2026-11-23. Each is recorded with a quote, author, venue and year in `10_source_ledger.csv`. Nothing was cited that was not opened.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Probes with control tasks | https://arxiv.org/abs/1909.03368 | Hewitt and Liang, "Designing and Interpreting Probes with Control Tasks", EMNLP 2019. Asks whether high probe accuracy means the representation encodes structure or the probe learned the task; introduces control tasks and reports popular ELMo probes are not selective. |
| Causal representation learning | https://arxiv.org/abs/2102.11107 | Schölkopf, Locatello, Bauer, Ke, Kalchbrenner, Goyal, Bengio, "Towards Causal Representation Learning", Proceedings of the IEEE 2021. Names the discovery of high-level causal variables from low-level observations as a central problem and notes most causality work assumes the causal variables are given. |
| Superposition | https://arxiv.org/abs/2209.10652 | Elhage et al., "Toy Models of Superposition", arXiv 2022. Reports that networks pack many unrelated concepts into one neuron (polysemanticity) and models store sparse features in superposition. |
| Causal intervention on factual associations | https://arxiv.org/abs/2202.05262 | Meng, Bau, Andonian, Belinkov, "Locating and Editing Factual Associations in GPT", NeurIPS 2022. Develops a causal intervention for identifying activations decisive in factual predictions and edits them with specificity and generalization. |
| Symbol grounding | https://en.wikipedia.org/wiki/Symbol_grounding_problem | The symbol grounding problem, accessed 2026-11-23. Records Harnad 1990: the problem of making semantic interpretation intrinsic rather than parasitic on meanings in our heads; grounding requires sensorimotor capacity to pick out referents. |
| Place cells and grid cells | https://www.nobelprize.org/prizes/medicine/2014/press-release/ | Nobel Assembly press release, 2014. Reports that O'Keefe could demonstrate place cells were "not merely registering visual input, but were building up an inner map of the environment"; Moser and Moser found grid cells forming a coordinate system. |
| Library of Babel essay | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Isaiah N, 2026-10-02. Gives the canonical "shape" vocabulary: cut the search short when the returned set is "small and descriptive enough that it provides a general shape of the answer"; the anchor is the question itself. |
| Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Isaiah N, 2026-08-28. Metamerism: a colour instrument "cannot comment on the source"; several paths can create the same reading. The spectrometer, not an argument, resolved it. |
| Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, 2026-11-19. "Prestige can fund an action... But it cannot settle an action. Only the ground can settle it." Also: "the output is only as good as the validator" and LLM output is simulated. |
| Figures folder | https://github.com/IsaiahN/tether/tree/general-agent/figures | Public repo, branch `general-agent`: Figures 1 to 13, Operators and Symbols tables, README and THE_FORMULA. The README says the figures "outrank everything else in the repo". |
| Canonical figures README (local) | `FRAMEWORK/reference/FIGURES_README_canonical.md` | Local copy of the usage rule: quotes are the authority; returns "a shape, not a name"; "Indiscernibility is not identity." |
| Verbatim figure text (local) | `FRAMEWORK/reference/03-FIGURES_TEXT.md` | The file all `Fig N :line` citations in this folder refer to. |

## What the wider literature adds, and how it bears

1. **A decodable signal is not the same as a represented structure.** Hewitt and Liang (2019) show a probe can achieve high accuracy by memorizing the task; their control tasks separate selectivity from capacity. This bears on the information condition, not on causal role, and it is the reason F4 unbundles rather than dismisses probes. A probe is a worse instrument that already returns a reading, exactly what Fig 6 :32 requires for refinement.
2. **Intervention is the anchor operation.** Meng et al. (2022) identify activations by causal intervention and then edit them, checking specificity and generalization. This is the operational content of Fig 2 :29's anchor test: push on the world (or the representation) and see whether the answer changes as predicted.
3. **Intervened-upon variables are not handed to you.** Schölkopf et al. (2021) name the discovery of high-level causal variables from low-level observations as a central problem. That is the vocabulary-to-objective link of Fig 3 :26-27: the link with neither obvious failures nor obvious tests is the one this question lives at.
4. **Granularity warning.** Elhage et al. (2022) show one unit can carry several features. So "a unit for W" is often the wrong object of study, and the bond (Fig 12 :5) is the missing half of the description.
5. **Low-overlap corroboration.** The symbol-grounding entry and the Nobel press release come from philosophy/cognitive science and neuroscience, fields that do not draw on the framework's evidence pool. They corroborate the structural claim (meaning needs contact with referents; an internal map is established by tracking the environment) without sharing the framework's author or vocabulary. This is genuine but limited corroboration: it supports the shape, not any specific figure line.
6. **No conflicts triggered.** None of the world sources says that decodability alone is sufficient for correspondence. If one did, the conflict would send us back to the domain census, not flip the verdict.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 10 :52 "Bring a characterised residual, never the source."** Send the three-condition shape and its refuter first. Sending the full architecture before anyone has described what would fail sends a recording, not a generator (Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion.").
- **Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it."** A recipient who has absorbed the entire framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28 "describe it before you go looking, or any frame you pick will seem to fit."** Ask what they would expect to see if the shape claim were true before giving them the links.
- **Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool."** A mass send selected for people who already agree produces a convention, not corroboration. One-to-one only.
- **Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** A venue's prestige is a contact-cost filter, never evidence for the claim.

**Recommended order in a reply:** (1) the shape claim and its three refuters; (2) ask which condition their own work would treat as settled and what would count as a failure of the others; (3) record that verdict; (4) only then the links, with the note that the figures, not the summary, are the authority.

## Two-stage offer

1. **Stage 1:** the residual, the three-condition shape and the pre-registered refuter. Ask what they would count as a failure. Record the verdict before any theory is shown.
2. **Stage 2, opt-in only:** if they are curious, the figure links and the formula as a method to reuse. Each user writes their own refuter and states their own mode. Their later agreement is never pooled as corroboration (Fig 2 :40).

There is no zip to host for this question and nothing is sent by this agent. The author hosts and sends. Prefer an opt-in download or submission page over an attachment pushed to a list.
