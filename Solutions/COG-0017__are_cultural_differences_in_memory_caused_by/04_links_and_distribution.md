# Public links and distribution

All links below were fetched and verified on 2026-11-22 unless a note says otherwise. Fetch failures are recorded honestly at the end; nothing cited there was used as a read source.

## Verified sources

| what | URL | verified content |
|---|---|---|
| Cross-cultural social and self-referential memory (Dujmic, Cho, Gutchess and Chang, 2026) | https://pmc.ncbi.nlm.nih.gov/articles/PMC13333165 | Open author manuscript, *Neuropsychology, Development and Cognition. Section B*, 33(4), 382 to 399. Taiwanese older adults benefited from other-referencing for high-social information, Americans did not. The authors write that *"culture may influence the effectiveness of strategies to reduce age-related associative memory impairments"* and explicitly flag the education confound. |
| Cross-cultural differences in memory specificity (Millar, Serbun, Vadalia and Gutchess, 2013) | https://link.springer.com/article/10.1007/s40167-013-0011-3 | *Culture and Brain* 1, 138 to 157. Americans showed greater specific but not general memory than East Asians: *"The two cultural groups did not differ in general (item-level) memory."* A familiarity confound was tested and reported. |
| The weirdest people in the world? (Henrich, Heine and Norenzayan, 2010) | https://www.cambridge.org/core/journals/behavioral-and-brain-sciences/article/abs/weirdest-people-in-the-world/BF84F7517D56AFF7B7EB58411A554C17 | *Behavioral and Brain Sciences* 33(2-3), 61 to 83, published 15 June 2010. Abstract reports *"substantial variability in experimental results across populations"* and that *"there are no obvious a priori grounds for claiming that a particular behavioral phenomenon is universal based on sampling from a single subpopulation."* |
| Autobiographical memory, cultural effects | https://en.wikipedia.org/wiki/Autobiographical_memory | Cultural-effects section: *"People living in Eastern cultures are more likely to recall memories through an observer point of view than those living in Western cultures."* Also states the directive, social and self-representative functions of autobiographical memory. |
| The Hard Problem is About Source (Isaiah N, 2026-08-28) | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Metamerism argument: *"If several paths create the same behavior, then behavior is a projection with lossy information"*; the spectrometer case shows the answer is *"unreached until a better instrument exists."* |
| Environmental Influences on Spatial Memory and the Hippocampus in Food-Caching Chickadees (Pravosudov, Roth, LaDage and Freas, 2015) | https://comparative-cognition-and-behavior-reviews.org/vol10_pravosudov_roth_ladage_freas | *Comparative Cognition & Behavior Reviews* 10, 25 to 43. Environment-induced plasticity versus natural selection as sources of memory variation is treated as an open question resolved by common-garden experiments, not by correlation. |
| Neural representations of space in the hippocampus of a food-caching bird (Payne, Lynch and Aronov, 2021) | https://pmc.ncbi.nlm.nih.gov/articles/PMC8503942/ | *Science* 373(6552), 343 to 348. *"hippocampal circuit mechanisms are similar between birds and mammals, but that the resulting patterns of activity may vary quantitatively with species-specific ethological needs."* |
| IACCP public pages | https://www.iaccp.org/ | Society founded 1972, public contact, JCCP journal, conferences and the Online Readings in Psychology and Culture resource. |
| SARMAC public pages | https://www.sarmac.org/ | Society for Applied Research in Memory and Cognition, public contact page, JARMAC journal link, 2027 conference route. |
| Canonical figures (branch `general-agent`) | https://github.com/IsaiahN/tether/tree/general-agent/figures | Figures 1 to 13, Operators and Symbols tables, README and THE_FORMULA. The README says the figures *"outrank everything else in the repo"* and gives the citation form `Fig N :line`. |

## What the wider literature bears on this question

1. **The source question is live in the field, not an artifact of the framework.** Dujmic et al. 2026 show that a strategy (self versus other referencing) changes memory differently by culture and age. Millar et al. 2013 show a specificity difference with no general-memory difference. Both are exactly the per-slot, union-shaped result the figures predict: the effect appears at one level of the memory construct and not another. Neither names a unique source from a single reading; Dujmic et al. list multiple candidate mechanisms and call for further work.
2. **Confounds act like failed anchors.** The education difference in Dujmic et al. and the item-familiarity check in Millar et al. are examples of an instrument that might move when the group changes. Fig 2 :33: *"The anchor must not update."* This is why D4 is upstream of the causal domains.
3. **Population variability blocks the pooled shortcut.** Henrich et al. 2010 make the per-population caution that Fig 1 :22 makes structurally. Their review and the figure rule are low-overlap witnesses for the same shape, so the agreement carries more weight than two papers from one pool.
4. **Animal memory corroborates agent-and-habitat without supplying the answer.** Pravosudov et al. 2015 and Payne et al. 2021 are from a genuinely different evidence pool. They show that memory machinery can be shared while the filling member varies with ecological need, which is the functional-group shape of F7, and that separating plasticity from selection requires a common-garden instrument, which is the source-discrimination shape of F1 and F8.

Overlap is recorded per row in `10_source_ledger.csv`. The two cultural-memory papers share the same senior author and partly the same literature, so they are one witness, not two. The two animal-memory papers are a second, low-overlap witness. The framework essays share the framework author's pool completely and carry no independent witness weight.

## Distribution: offer, do not push

- Fig 4 :22: *"Only methods cross up. Only head starts come down."* Sending the full architecture before anyone has described a residual sends a recording, not a generator. Lead with the claim and its refuter; offer the links after.
- Fig 10 :42: *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the whole framework before giving a verdict has joined the frame being checked.
- Fig 9 :30-31: *"your words are borrowed too, so describe the effect rather than the cause"*: describe the residual in effect terms before giving the theory.
- Fig 7 :35: *"A room’s agreement is variation, not a verdict. Selection between rooms is where the ground votes."* A list selected for likely agreement is a room, not a witness.

**Recommended order in a reply:** (1) the shape claim and its four refuters; (2) ask what the recipient would count as a failure, and what instrument would discriminate among the three sources; (3) only then the three links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

**Stage 1.** Send the claim, the per-slot separator and the pre-registered refuter. Ask for a verdict on that alone. Record it before any theory is shown.

**Stage 2, opt-in only.** If the recipient is curious, offer the figure text, the canonical README and the public cross-cultural psychology page. Their later agreement is never pooled as corroboration: Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool"*.

**Stage 3.** Offer the formula as a method to reuse. Fig 4 :22 permits sending a generator. Each user must write their own refuter and state their own mode, because a frame cannot check the direction of its own question.

**Hard precondition:** stages 1 to 3 only work if the stage-1 claim survives. Withdraw or narrow it if any refuter fires.

## Fetch failures and cautions

- `https://academic.oup.com/edited-volume/38549/chapter/333836902` returned 403. The Oxford Handbook chapter's snippet about *"different strategies are adopted by people across cultures"* was seen in a search index but the page was not opened, so it is not cited as a read source anywhere in this folder.
- `https://psychologyrocks.org/wp-content/uploads/2016/11/cross_cultural_memory.pdf` returned an unsupported file type to the fetcher. Not cited as read.
- `https://journals.sagepub.com/home/jcc` and `https://www.tandfonline.com/journals/pmem20` returned 403. Their journals are listed in the contact CSV on the strength of the society pages that were opened, with that limitation stated in the notes column.
- `https://www.psychonomic.org/` returned 403. Not used as a contact point.
- `https://elifesciences.org/articles/70600` failed to load through the fetcher. Not cited. The comparable Pravosudov et al. and Payne et al. sources were opened instead.
- `https://www.nature.com/nathumbehav/` is listed as a public venue but was not opened directly this session; verify scope and AI-submission policy before use.
- *Culture and Brain* is archived at Springer and is no longer receiving submissions. This is recorded in the contact CSV rather than hidden.
