# Public links and distribution

All links in the table were fetched on 2026-11-22 unless marked "listed", which means the link appeared on a page that was fetched but was not opened directly. Listed links are recorded that way in `03_public_contact_points.csv` and `10_source_ledger.csv`. Failed fetches are listed separately at the end and were used as evidence for nothing.

## 1. Sources actually opened this session

| what | URL | what the page actually contained |
|---|---|---|
| Figure text, line numbered | local `FRAMEWORK/reference/03-FIGURES_TEXT.md` | verbatim text of Figures 1 to 13 plus Operators and Symbols tables; every figure quote in this folder came from here |
| Canonical usage rule | local `FRAMEWORK/reference/FIGURES_README_canonical.md` | "the quotes are the authority, not this summary"; re-census rule; "a shape, not a name" |
| Formula | local `FRAMEWORK/figures/THE_FORMULA.md` | eight steps, mode rule, habitat, closure, composition, round trip `R_T`, Direction paragraph |
| Figures as metalaws | local `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` | design questions are decided from the figures; no human ruling is owed for what the figures already settle |
| Power-law fitting, 2009 | https://arxiv.org/abs/0706.1062 | Clauset, Shalizi and Newman; abstract states that least-squares fitting can give substantially inaccurate estimates and "give no indication of whether the data obey a power law at all" |
| Clinical measurement review, 2019 | https://pmc.ncbi.nlm.nih.gov/articles/PMC6525229/ | Formenti et al., Annals of Intensive Care; artifacts from probe adjustment and patient physiology, observer-dependent grayscale measures, lack of standardisation |
| Network benchmark generators, 2026 | https://arxiv.org/abs/2609.31598 | Messias et al., SynCo; generators rely on power-law degree distributions "despite recent evidence indicating that scale-free networks are rare", and algorithms rely on the same benchmark datasets |
| arXiv search result page | https://arxiv.org/search/?query=scale-free+networks+are+rare&searchtype=all | discovery aid used to locate the SynCo paper; not itself cited as evidence |
| The Library of Babel, 2026 | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | shape as a narrowed set; bundle of problems; the question as anchor; bootstrapping vocabulary by proximity |
| The Recursive Self-Improvement Trap, 2026 | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | LLM simulation is not a testable output; output only as good as validator; prestige is not action |
| The Hard Problem is About Source, 2026 | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | metamerism; a reading "cannot comment on the source"; "the answer is unreached until a better instrument exists" |
| Complex Systems Society | https://cssociety.org/ | public society website; purpose is to promote all aspects of complex systems science; public contact and calls routes |
| TOCSS journal | https://tocss.cssociety.org/index.php | Transactions of the Complex Systems Society; diamond open access, started 2026, submissions and contact pages |
| Complexity Explorer | https://www.complexityexplorer.org/ | Santa Fe Institute educational project; courses in complex systems, nonlinearity and scaling; public contact page |
| Network Science Society | https://netscisociety.net/ | public society website; conferences, calls, contact and community pages |

## 2. What the wider literature bears on the question

**Three fields, three low-overlap witnesses.** These sources do not share an evidence pool with the figures or with each other. They are corroboration of the shape, not witnesses for a figure verdict.

1. **Statistical data analysis.** Clauset, Shalizi and Newman 2009 write that "Commonly used methods for analyzing power-law data, such as least-squares fitting, can produce substantially inaccurate estimates of parameters for power-law distributions, and even in cases where such methods return accurate answers they are still unsatisfactory because they give no indication of whether the data obey a power law at all." A fitting routine that always returns a slope cannot tell you whether there is a power law. This is F3 in another field: the output of the method is not a test of the method's premise.
2. **Clinical measurement.** Formenti et al. 2019 report that "Commonly encountered physiologic changes in the ICU, such as anasarca and hypothermia, introduce artifacts by altering amplitude and velocity recordings for nerve conduction studies" and that "echogenicity measurements are highly influenced by observer-dependent factors, such as the adjustment of the ultrasound probe." Their review closes by noting that interpretation is difficult because of "lack of standardization of the ultrasound methodology." A real state (muscle wasting) is separated from a reading that moves with the probe and the patient's fluid balance. This is F1 and F7 in a field with no stake in the framework: vary the instrument, and the artifact moves.
3. **Network science and benchmarking.** Messias et al. 2026 observe that "most existing generators rely heavily on power-law degree distributions, despite recent evidence indicating that scale-free networks are rare, particularly in social network contexts", and that "ground-truth community labels are often unavailable and most algorithms proposed in recent literature rely on the same benchmark datasets for model training and evaluation." The first clause is F6: a pattern built into the synthetic habitat is rediscovered in its output. The second is F2: a field whose methods share one benchmark pool cannot count agreement as independent confirmation.

**Framework-internal essays** are used for the canonical reading of "shape" in `05_what_shape_means.md` and for the simulation-status and prestige rules. They are not independent world witnesses, because their author wrote the figures. That overlap is recorded in the ledger. The five essays not opened directly this session are identified through the exemplar's mapping and are marked as such in `05`.

## 3. Distribution rules

Figure-grounded reasons for how material is offered:

- **Fig 4 :22:** "Only methods cross up. Only head starts come down." Send the generator, the residual and the refuter, not the conclusion. "A recording carried upward looks like knowledge and is a description of one occasion." (Fig 4 :25).
- **Fig 10 :42:** "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28:** "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the protocol were true before showing the source.
- **Fig 2 :31, :40:** agreement from a shared evidence pool is one witness. Later agreement about the framework is never pooled as corroboration.
- **Fig 10 :59-60:** "an interest in the outcome is unavoidable, an interest in the reading is disqualifying." "Where a stake cannot be removed, declare it." This packet is LLM-assisted and is declared as such in the README and the packet.

**Order in any reply:** (1) the shape claim and the pre-registered refuter; (2) the question "what would you count as a failure here?"; (3) only after a verdict is recorded, the source links, with the note that the figures, not the summary, are the authority; (4) the formula as a reusable method, with the instruction that each user writes their own refuter and states their own mode.

## 4. The two-stage offer, compressed

**Stage 1.** Send `08_expert_verification_packet.md` sections 1 to 3 only: the one-paragraph claim, the three checkable sub-claims with their verbatim figure lines and refuters, and the non-claims. No provenance bundle, no essay links.

**Stage 2, opt-in only.** If the recipient is curious and has already recorded a verdict on stage 1, offer the source links. Their later agreement is a conversation, not corroboration (Fig 2 :40).

**Stage 3.** Offer the formula as a method, never as an answer (Fig 4 :22). Each user writes a refuter before running it and states the mode of what they get.

**Stop rule.** If stage 1 fails, the theory is not offered. A failure is more useful than an endorsement.

**Hosting.** Nothing here is hosted or sent by this agent. The human operator hosts the packet on an opt-in page and sends one to one. Prefer a download page that lets a recipient decline contact over an attachment pushed to a list.

## 5. Submission and AI-policy caveat

No venue's current artificial-intelligence policy was fetched for this solution, so none is quoted here. Check the policy of the specific journal or conference before submitting anything. This packet is an LLM-assisted simulated derivation and is labelled as such everywhere. Do not submit it as authored work. The legitimate use is as a private checking instrument: post the residual and the refuter, invite a human to run the check, and let that human author and own whatever they conclude, with disclosure as the venue requires.

## 6. Failed fetches, recorded for honesty

These were attempted on 2026-11-22 and returned errors or the wrong document. None was read for evidence and none appears in the ledger as a source.

| attempted URL | result |
|---|---|
| `https://www.nature.com/articles/s41467-019-08746-4` | 404, cookies-not-supported redirect; abandoned |
| `https://www.pnas.org/doi/10.1073/pnas.0605965104` | 403; abandoned |
| `https://arxiv.org/abs/physics/0607105` | fetched, but it is "Origin of the pearl necklace of SN1987A", not the intended network paper; not used |
| `https://arxiv.org/abs/1806.00564` | fetched, but it is a stochastic PDE paper, not the intended network paper; not used |
| `https://pmc.ncbi.nlm.nih.gov/articles/PMC6525229/` | fetched successfully, but it is the Formenti clinical measurement review, not the intended network paper; retained as the clinical witness it turned out to be |
| `https://pmc.ncbi.nlm.nih.gov/articles/PMC1765461/` | 404; abandoned |
| `https://complex-systems.com/` | 500; abandoned |
| `https://academic.oup.com/comnet` | 403; abandoned |

The intended community-detection resolution-limit paper was therefore not opened, and no claim from it is used anywhere in this folder.
