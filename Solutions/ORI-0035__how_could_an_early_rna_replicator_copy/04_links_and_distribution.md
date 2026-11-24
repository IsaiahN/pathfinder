# Public links and distribution

All links below were fetched on 2026-11-23 unless stated otherwise. Failed fetches are recorded as failures, not silently replaced.

## Verified sources actually opened

| what | URL | verified content |
|---|---|---|
| Error thresholds for self- and cross-specific enzymatic replication | https://arxiv.org/html/1003.1304v2 | Obermayer and Frey, J Theor Biol, arXiv:1003.1304v2. Abstract: *"The information content of a non-enzymatic self-replicator is limited by Eigen's error threshold."* Introduction: *"the currently known systems are not yet capable of Darwinian evolution, lacking either the ability to replicate molecules as long and complex as themselves or to introduce heritable variation."* |
| Quasispecies theory in the context of population genetics | https://link.springer.com/article/10.1186/1471-2148-5-44 | Wilke, BMC Evolutionary Biology 5:44, 2005. *"Eigen described the error threshold in his 1971 paper as a limit to the amount of information a genome can store at a given mutation rate."* Also the landscape conditionality: *"the condition for the existence of an error threshold is precisely the complete absense of lethal genotypes"* [spelling as published]. |
| Noisy-channel coding theorem | https://en.wikipedia.org/wiki/Noisy-channel_coding_theorem | Shannon 1948, described here: *"if R<C there exist codes that allow the probability of error at the receiver to be made arbitrarily small"*; *"If R>C, an arbitrarily small probability of error is not achievable."* A sharp capacity threshold from a different field. |
| Exploration and Exploitation in Organizational Learning | https://doi.org/10.1287/orsc.2.1.71 | March, Organization Science 2(1):71-87, 1991. Abstract: *"adaptive processes, by refining exploitation more rapidly than exploration, are likely to become effective in the short run but self-destructive in the long run."* |
| Iterated Learning (Open Encyclopedia of Cognitive Science) | https://oecs.mit.edu/pub/boh416wu | Smith, MIT Press, 2025. *"Iterated learning describes a process in which individuals acquire a system of knowledge or behavior by observing other individuals who acquired it in the same way."* Includes human transmission chains and songbird song culture (Fehér et al. 2009). |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Isaiah N, 2026-08-28. *"If several paths create the same behavior, then behavior is a projection with lossy information"*; *"An instrument that can't distinguish these cases demonstrates its own inadequacy"*. |
| The Library of Babel: Locating The Book of Books | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Isaiah N, 2026-10-02. *"You can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, 2026-11-19. *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* Also the simulated-output rule quoted in `README.md` and `01`. |
| Decoding Tacit Knowledge | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | Isaiah N, 2026-11-10. *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."* |
| ISSOL contact and meetings | https://www.issol.org/contact-us/ ; https://www.issol.org/ | Public institutional contact page and meetings calendar, verified 2026-11-23. |
| Discover Life submission guidelines | https://link.springer.com/journal/11084/submission-guidelines | Submission via Snapp; open access; single-anonymous review; verified 2026-11-23. |
| Journal of Molecular Evolution | https://link.springer.com/journal/239 | Hybrid journal; "A Road to LUCA" collection; verified 2026-11-23. |
| bioRxiv | https://www.biorxiv.org/ | Public preprint submission; Evolutionary Biology and Synthetic Biology areas; verified 2026-11-23. |
| NASA Astrobiology | https://astrobiology.nasa.gov/ | Public contact, mailing list and research opportunities; site being migrated to science.nasa.gov/astrobiology; verified 2026-11-23. |
| GRC Origins of Life conference | https://www.grc.org/origins-of-life-conference/ | Conference history, 1982 to 2020; currently listed inactive; verified 2026-11-23. |

### Fetch failures (recorded, not hidden)

- Royal Society Publishing article on cultural transmission and trial-and-error copying (rstb.2017.0050) returned HTTP 403 on direct fetch. Its abstract appeared in search results, but it is **not** used as a quoted source in this package.
- INFORMS article abstract page returned HTTP 403 on direct fetch. The March 1991 abstract text was read from the publisher abstract in search results and the DOI record; this is recorded in `10_source_ledger.csv` as a search-index read, not a direct fetch.
- MDPI Life journal and Frontiers in Astrobiology returned HTTP 403 and 404 respectively. They are not listed as contact points.

## What in the wider literature bears on this question

1. **Obermayer and Frey (2010)** name the residual almost exactly as the question does: known systems lack either the ability to *"replicate molecules as long and complex as themselves"* or to *"introduce heritable variation"*. Their model shows that a quasispecies stays localised about a master sequence below a critical mutation rate and delocalises above it, with the critical rate usually scaling inversely with sequence length. This corroborates the figure-derived band from a frame whose closure differs (Fig 8 :45, *"Two frames together reach what neither reaches alone"*). Overlap with the figures: moderate, since the framework's own derivation was influenced by information theory; declared in the ledger.
2. **Wilke (2005)** qualifies the binding: the sharp error threshold requires a fitness landscape without lethal genotypes. This is not a conflict with the figure verdict, because the figure verdict is about handoff progress, not about localisation in one family of models. It is recorded in `01` F9 and in the WATSON answer as a qualification.
3. **Shannon's noisy-channel theorem** supplies a low-overlap analogue: below channel capacity, error can be made arbitrarily small; above it, it cannot. It predicts a threshold between reliable and unreliable transmission rather than a smooth optimum. It corroborates the band's shape. Overlap with the biology sources is high, however, because quasispecies theory was explicitly built with Shannon entropy; Shannon and the quasispecies papers are one pool on this point, not two independent witnesses.
4. **March (1991)** supplies a business analogue: adaptive processes that refine exploitation faster than exploration are *"effective in the short run but self-destructive in the long run"*. Perfect copying is exploitation; a heritable remainder is exploration. Low overlap with both the figures and the molecular biology sources.
5. **Smith (2025)** supplies human cognition and animal behaviour: iterated learning transmits behaviour through transmission chains and the transmitted system adapts to the bottleneck, since *"systems that are easy to learn tend to proliferate"*. Imperfect transmission is not only loss; it is a shaping force. Low overlap.

No world source reverses the figure verdict. The one genuine qualification (Wilke) is kept visible.

## Distribution: offer, do not push

Figure-grounded rules:

- **Fig 10 :52**, *"Bring a characterised residual, never the source."* Lead with the shape claim and the refuter. The recipient's verdict on stage 1 is recorded before any theory is shown.
- **Fig 2 :35**, *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Do not ask for agreement. Ask what they would count as a failure.
- **Fig 9 :27-28**, *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they expect to see if the band claim were true before giving them the article.
- **Fig 8 :50-52**, convergent derivation and adopted import look identical in the contents; only the record separates them. Present the numeric threshold with its provenance or not at all.
- **Fig 2 :40**, agreement from a shared evidence pool is disqualifying for a verdict. No list ranked by receptiveness, no bulk send, no pooled endorsement.
- **Fig 4 :22**, *"Only methods cross up. Only head starts come down."* Stage 3 sends the formula, a generator, not an answer.

**Recommended reply order:** (1) the shape claim with the two failure edges; (2) ask what they would count as a refutation; (3) record their verdict; (4) only then, the three links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

1. **Stage 1:** residual, shape claim, pre-registered refuter, mode. Ask for a failure. No theory.
2. **Stage 2, opt-in only:** if they are curious, offer the figures README, the verbatim figure text and the architecture article. Their stage-1 verdict stays separate from any later agreement.
3. **Stage 3:** offer the formula as a method to reuse, with the instruction that each user writes their own refuter and states their own mode before running it.

**Hard precondition:** stages 1 to 3 work only if stage 1 survives. The shape claim here is internally consistent with the figures, but it is a simulated derivation and has no ground reading. That is stated in every substantive file, not only here.

**Hosting and sending.** This agent cannot host or send. Hosting the packet on an opt-in download page is closer to the figures' rule than pushing an attachment to a list. No archive is created here; the deliverable is this folder.
