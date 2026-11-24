# Public links and distribution

All links below were opened on 2026-11-23 through the session's web fetch/search tools. Quotes are copied from the pages actually read. `local:` entries are framework files read from disk.

## Verified links actually fetched

| what | URL | verified content and quote |
|---|---|---|
| Kinetic proofreading, Hopfield 1974 | https://pmc.ncbi.nlm.nih.gov/articles/PMC434344 | PNAS 71(10):4135 to 4139, opened in PMC. Abstract: *"The specificity with which the genetic code is read in protein synthesis, and with which other highly specific biosynthetic reactions take place, can be increased above the level available from free energy differences in intermediates or kinetic barriers by a process defined here as kinetic proofreading."* Also: *"known reactions which otherwise appear to be useless or deleterious complications are seen to be essential to the proofreading function."* |
| Intrinsic noise in gene regulatory networks, Thattai and van Oudenaarden 2001 | https://pmc.ncbi.nlm.nih.gov/articles/PMC37484 | PNAS 98(15):8614 to 8619, opened in PMC. *"Cells are intrinsically noisy biochemical reactors: low reactant numbers can lead to significant statistical fluctuations in molecule numbers and reaction rates."* Also: *"During evolutionary adaptation, living systems have made tradeoffs between energy efficiency and noise reduction in choosing between these two alternatives."* |
| Feed-forward loop motif, Mangan and Alon 2003 | https://pmc.ncbi.nlm.nih.gov/articles/PMC218699 | PNAS 100(21):11980 to 11985, opened via search results. *"four of the FFL types, termed incoherent FFLs, act as sign-sensitive accelerators: they speed up the response time of the target gene expression following stimulus steps in one direction (e.g., off to on) but not in the other direction (on to off). The other four types, coherent FFLs, act as sign-sensitive delays."* |
| Physics of chemoreception, Berg and Purcell 1977 | https://www.cell.com/fulltext/S0006-3495(77)85544-6 | Biophysical Journal 20(2):193 to 219, opened via Cell Press. *"Statistical fluctuations limit the precision with which a microorganism can, in a given time T, determine the concentration of a chemoattractant in the surrounding medium. The best a cell can do is to monitor continually the state of occupation of receptors distributed over its surface."* Also: *"There is ample room for many independent systems of specific receptors."* |
| Mutual information in time-varying biochemical systems, Tostevin and ten Wolde 2010 | https://pubmed.ncbi.nlm.nih.gov/20866450 | Phys Rev E 81:061917, opened via PubMed. *"Cells must continuously sense and respond to time-varying environmental stimuli. These signals are transmitted and processed by biochemical signaling networks. However, the biochemical reactions making up these networks are intrinsically noisy, which limits the reliability of intracellular signaling."* Also: *"optimizing signal transmission at a single level of a signaling cascade can reduce signaling performance for the cascade as a whole."* |
| Stochastic gene expression in a single cell, Elowitz et al. 2002 | https://www.science.org/doi/10.1126/science.1070919 | Science 297(5584):1183 to 1186, opened via Science and PubMed. *"Both stochasticity inherent in the biochemical process of gene expression (intrinsic noise) and fluctuations in other cellular components (extrinsic noise) contribute substantially to overall variation."* Also: *"low intracellular copy numbers of molecules can fundamentally limit the precision of gene regulation."* |
| Intrinsic and extrinsic contributions, Swain et al. 2002 | https://pmc.ncbi.nlm.nih.gov/articles/PMC130539 | PNAS 99(20):12795 to 12800, opened via search results. *"we show how the total variation in the level of expression of a given gene can be decomposed into its intrinsic and extrinsic components. We demonstrate theoretically that simultaneous measurement of two identical genes per cell enables discrimination of these two types of noise."* |
| Kinetic Proofreading, Boeger 2022 | https://par.nsf.gov/servlets/purl/10414676 | Annual Review of Biochemistry 91:423 to 447, opened via NSF PAR. *"the insertion of a free energy–transmitting delay step between the initial recognition event and its downstream effect (e.g.,enzymatic catalysis)."* |
| Network motifs: theory and experimental approaches, Alon 2007 | https://www.nature.com/articles/nrg2102 | Nature Reviews Genetics 8:450 to 461, opened via search results. Key Points: *"Coherent feedforward loops can show persistence detection, whereas incoherent feedforward loops show pulse generation and response acceleration."* Also: *"Negative autoregulation can speed up responses and reduce fluctuations."* |
| The Hard Problem is About Source, Isaiah N 2026 | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Opened in full. *"If several paths create the same behavior, then behavior is a projection with lossy information"* and *"it cannot comment on the source."* |
| They're Scanning Books When They Should Be Studying Nature, Isaiah N 2026 | https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should | Opened in full. *"A minimum viable set of six terms is a human's careful guess at reality's compression axes; another sensorium's minimum set need not be those six."* |
| Figure text with line numbers | local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md | Primary source of every `Fig N :line` citation in the folder. |
| Canonical usage rule | local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md | *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* |
| The formula | local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md | Eight-step loop, mode rule, direction discipline. |

## Wider literature, by field, and what each bears

The fields are deliberately different, so agreement across them is not one pool speaking with several names. Overlap is recorded per row in `10_source_ledger.csv`.

1. **Biophysics, physical limits of sensing.** Berg and Purcell 1977 sets a precision bound that depends on time T and receptor number; it predicts that precision must be bought, and that many independent receptor systems fit on a cell surface. It corroborates F1, F4, and F5.
2. **Biochemistry, discrimination chemistry.** Hopfield 1974 and Boeger 2022 predict that high specificity needs a delay step and dissipation, not a single equilibrium read. They corroborate F2 and F5. They do not say which cell uses the mechanism.
3. **Systems biology, noise sources.** Thattai and van Oudenaarden 2001, Elowitz et al. 2002, and Swain et al. 2002 split noise into intrinsic and extrinsic and give an instrument (two identical genes in one cell) that separates them by sharing extrinsic state. They corroborate F4 and F7. They share a community, so they are counted as two pools at most, not six witnesses.
4. **Systems biology, circuit motifs.** Mangan and Alon 2003 and Alon 2007 show that coherent loops detect persistence and incoherent loops accelerate responses and generate pulses. They corroborate F7, the claim that "signal versus noise" splits into distinct temporal conditions.
5. **Information theory of time-varying signals.** Tostevin and ten Wolde 2010 show that instantaneous and trajectory transmission can rank the same network differently, and that optimising one level can degrade the cascade. They corroborate F1 (per object, not per step) and F7.
6. **Metatheory and source discrimination (framework author).** The two essays corroborate the shape-not-a-name limit and the point that a reading cannot name its source. Overlap with the figures is high (same author), so this is weak corroboration, recorded honestly.

No world source conflicts with the figure verdict. The conflict rule was not triggered. None of these sources is `grounded` evidence for the shape claim, because the shape claim is derived from the figures; the sources are secondary corroboration only.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 10 :52** *"Bring a characterised residual, never the source."* Sending the full framework before a reader has described a residual sends a recording, not a generator.
- **Fig 10 :42** *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before giving a verdict has joined the frame being checked.
- **Fig 9 :27-28** *"describe it before you go looking, or any frame you pick will seem to fit"* Ask what they would expect to see if the shape claim were true before giving them the article.
- **Fig 2 :40** *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* Do not select recipients for receptiveness and do not pool their later agreement.
- **Fig 7 :35** *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* One-to-one contact, public institutional venues, no bulk send.

**Recommended order in a reply:** (1) the residual and the four-part shape claim; (2) the four refuters; (3) ask what they would count as a failure, and record the answer; (4) only then the links, with the note that the figures, not the summary, are the authority; (5) only on request, the formula as a method to reuse, with the instruction that each user write their own refuter and state their own mode.

## The two-stage offer

- **Stage 1 before stage 2.** Fig 10 :52 and Fig 2 :45 *"Frames range against the ground. They do not negotiate with it."* The reader checks the shape without holding the framework's interior.
- **Stage 2 is opt-in by construction.** Once a reader has absorbed the theory, their agreement stops being evidence. The stage-1 verdict is recorded before any theory is shown and is never pooled as corroboration.
- **Stage 3 sends a method, not an answer.** Fig 4 :22 *"Only methods cross up. Only head starts come down."* The formula is a generator, so giving it away does not give away a result.
- **Stage 3 still needs a ground per problem.** `THE_FORMULA.md` "Direction": a frame cannot check what it is looking for, because the shape is not a term it holds. Each user writes a refuter before the run.

**Hard precondition:** stages 1 to 3 only work if the stage-1 shape survives. `08_expert_verification_packet.md` is built for exactly that check.
