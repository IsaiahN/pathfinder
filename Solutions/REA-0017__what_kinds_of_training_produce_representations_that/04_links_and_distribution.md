# Public links and distribution

Every URL in the "fetched" column was opened on 2026-11-23. Where a direct fetch failed, that is stated and the source is either rerouted to a page that did open or marked as reduced weight. Nothing in `10_source_ledger.csv` is cited from a page that was not opened or returned in full by the search integration.

## Verified sources fetched

| what | URL | verified content |
|---|---|---|
| Invariant Risk Minimization, full text | https://arxiv.org/html/1907.02893 | v3, 27 Mar 2020. Arjovsky, Bottou, Gulrajani, Lopez-Paz. Section 1: *"minimizing training error leads machines into recklessly absorbing all the correlations found in training data."* Section 1: *"Shuffling brings the training and testing distributions closer together, but discards what information is stable across writers."* Section 3: invariance requires *"a data representation such that the optimal classifier on top of that representation matches for all environments."* Section 4.1 requires *"some degree of diversity across training environments."* |
| Shortcut learning in deep neural networks | https://www.nature.com/articles/s42256-020-00257-z | Nature Machine Intelligence 2, 665 to 673, 2020. Geirhos, Jacobsen, Michaelis, Zemel, Brendel, Bethge, Wichmann. Abstract: *"Shortcuts are decision rules that perform well on standard benchmarks but fail to transfer to more challenging testing conditions"*; *"Related issues are known in comparative psychology, education and linguistics"*. Full text is subscription; abstract and reference list were opened, and the fuller abstract was cross-checked on the arXiv record below. |
| Shortcut learning, arXiv record | https://arxiv.org/abs/2004.07780 | Abstract re-verified, including the comparative psychology / education / linguistics sentence and the benchmarking recommendations. |
| Representation Learning: A Review and New Perspectives | https://arxiv.org/abs/1206.5538 | Bengio, Courville, Vincent, IEEE TPAMI 35(8), 2013. Abstract: *"different representations can entangle and hide more or less the different explanatory factors of variation behind the data."* Section III-E: *"for the most part what one learns about one factor generalizes in many configurations of the other factors."* Section III-F: *"the difficulty in establishing a clear objective, or target for training."* Full text was read via the search integration from the Columbia PDF mirror; a direct PDF fetch at https://www.cs.columbia.edu/~blei/fogm/readings/BengioCourvilleVincent2013.pdf returned an unsupported-content-type error, so this source carries reduced weight. |
| Does Invariant Risk Minimization Capture Invariance? | https://proceedings.mlr.press/v130/kamath21a.html | Kamath, Tangella, Sutherland, Srebro, AISTATS, PMLR 130:4069 to 4077, 2021. Abstract: IRM *"can fail to capture 'natural' invariances"* and *"can lead to worse generalization on new environments, even when compared to unconstrained ERM."* |
| Causal inference by using invariant prediction | https://academic.oup.com/jrsssb/article/78/5/947/7040653 | Peters, Bühlmann, Meinshausen, JRSS-B 78(5), 2016, pp 947 to 1012. Summary: *"The predictions from a causal model will in general work as well under interventions as for observational data. In contrast, predictions from a non-causal model can potentially be very wrong if we actively intervene on variables."* Opened via the journal record and the ETH manuscript mirror. |
| Invariance, Causality and Robustness | https://stat.ethz.ch/Manuscripts/buhlmann/STS721.pdf | Bühlmann, 2020. Section 2.2: *"data from different observed (known) environments"*; conclusion: *"heterogeneity is important and informative for inferring invariances."* Same research pool as Peters et al. 2016, counted as one witness. |
| Abstract-Concept Learning Carryover Effects from the Initial Training Set | https://pmc.ncbi.nlm.nih.gov/articles/PMC4259154/ | Nakamura, Wright, Katz, Bodily, Sturz, Journal of Comparative Psychology 123(1), 2009, pp 79 to 89. Full text opened. Abstract: *"Three groups of pigeons were trained in a same/different task with 32, 64, or 1024 color-picture stimuli. They were tested with novel transfer pictures."* General Discussion: *"Learning a general abstract rule of S/D is the only way that such acquisition functions could have been produced by subjects with these large numbers of training stimuli."* |
| Same/different abstract-concept learning by pigeons | https://doi.org/10.1037/0097-7403.32.1.80 | Wright et al., Journal of Experimental Psychology: Animal Behavior Processes 32(1), 2006. Abstract read via the indexed record: *"Increases in the training set size from 8 to 1,024 items produced improved transfer from 51.3% to 84.6%."* Same laboratory and pool as Nakamura et al., one witness. |
| Abstraction and Transfer in Collaborative Learning | https://repository.isls.org/bitstream/1/3967/1/358-363.pdf | Mondoux, Auderset, Dillenbourg, ISLS proceedings, 2020. Abstract: *"the students who were trained with examples taken from varied contexts got higher scores in a transfer task than those working with examples from the same context."* Section on context diversity: examples from multiple contexts *"provide opportunities to dissociate superficial features – bound to a context – from the deeper context-independent features."* |
| Effects of rule variant reasoning in far transfer problem solving | https://journal.psych.ac.cn/acps/EN/10.3724/SP.J.1041.2023.00117 | Zhang, Zhang, Zhang, Gao, Acta Psychologica Sinica 55(1), 2023, pp 117 to 128. Abstract: *"worked-example learning can promote the solution of near, but not far, transfer problems"*; *"rule variant reasoning after learning prototype worked-example significantly promotes far transfer problem solving."* |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, 2026-11-19. Full text opened. *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* |
| ICLR home and call | https://iclr.cc/ | Fetched 2026-11-23. Public Call for Papers, Author Guide, AI Policy for Authors, Call For Blog Posts. |
| NeurIPS home and calls | https://neurips.cc/ | Fetched 2026-11-23. Call for Papers, Call for Evaluations and Datasets, Call for Reproducibility. |
| JMLR home | https://jmlr.org/ | Fetched 2026-11-23. Public submissions, freely available papers. |
| TMLR home | https://jmlr.org/tmlr/ | Fetched 2026-11-23. Rolling submission, double blind, OpenReview hosting. |

## Wider literature that bears on the question, grouped by evidence pool

**Pool A: machine learning and representation learning (one witness, not six).** Bengio et al. 2013 supplies the field's own vocabulary, disentangling explanatory factors. IRM supplies the invariance-across-environments proposal and its own diversity requirement. Geirhos et al. names the failure mode (shortcut rules that work on benchmarks and fail elsewhere). Kamath et al. is the internal caveat. These papers cite one another and share a community, so their agreement is one pool talking. No verdict is handed to us by that agreement (Fig 2 :40).

**Pool B: causal inference and statistics (one witness, adjacent to A).** Peters et al. 2016 and Bühlmann 2020 derive the invariance condition from interventions and heterogeneity, not from deep learning. Lower overlap with A than A's own internal citations, but still a statistics-adjacent pool. Corroborates D2 at the mechanism level.

**Pool C: animal cognition (genuinely low overlap).** Wright et al. 2006 and Nakamura et al. 2009, one laboratory. Broader and more varied training sets produce transfer to novel stimuli; small initial sets produce carryover effects that block later transfer. Corroborates the habitat condition with a non-human, non-silicon learner.

**Pool D: human learning and education (genuinely low overlap).** Mondoux et al. 2020 (varied contexts beat same-context examples for transfer; dissociation of superficial from context-independent features) and Zhang et al. 2023 (rule-variant reasoning promotes far transfer where worked examples do not). The rule-variant result is the closest world analogue of "carry a generator, not a recording."

**Framework essays (maximal overlap with the figures, no independent witness weight).** The Recursive Self-Improvement Trap is used only for the simulated-derivation label and the prestige/action rule. Its agreement with the figures is expected and carries no corroboration weight.

A conflict rule was triggered once and resolved by re-census, not by a verdict flip: Kamath et al. 2021 conflicts with a naive reading of IRM as a sufficient recipe. Re-census assigns diversity to the habitat condition D2 and keeps the union verdict. See `01` F10.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22-23** - *"Only methods cross up. Only head starts come down."* and *"upward: a method that can be reapplied. Never the recording of a particular success."* Send the shape claim and its refuter (a generator), not the full architecture (a recording of one occasion).
- **Fig 10 :42** - *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28** - *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see if the shape claim were true before giving them the figure links.
- **Fig 2 :40** - *"agreement about the world is worthless when the agreeing frames share an evidence pool."* A list selected for people who already agree produces a convention, not corroboration.

**Recommended order in a reply:** (1) the shape claim with its mode and refuter; (2) ask what they would count as a failure; (3) record their verdict; (4) only then the links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

1. **Stage 1:** send the residual, the three-condition shape and the four refuters. Ask what they would count as a failure. Do not send any figure link yet.
2. **Stage 2, opt-in only:** if they are curious, offer the three source links. Their stage-1 verdict is already recorded; later agreement is never pooled as corroboration.
3. **Stage 3:** offer the formula as a method to reuse, with the instruction that each user writes their own refuter and states their own mode.

**Hard precondition:** stages 1 to 3 only work if the stage-1 output survives contact with an expert. The live type question (the threshold defining "beyond familiar") must be stated openly, not buried. Fig 5 :48: *"Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."*
