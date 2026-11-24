# Public links and distribution

All links below were fetched and read on 2026-11-23 unless marked otherwise. Every substantive claim in the folder traces to one of them or to a local framework file recorded in `10_source_ledger.csv`.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Gender Shades | https://proceedings.mlr.press/v81/buolamwini18a.html | Buolamwini and Gebru, PMLR 81:77-91, 2018. Datasets *"overwhelmingly composed of lighter-skinned subjects (79.6% for IJB-A and 86.2% for Adience)"*; darker-skinned females *"the most misclassified group (with error rates of up to 34.7%)"* against *"0.8%"* for lighter-skinned males. |
| Debiasing Word Embeddings | https://proceedings.neurips.cc/paper_files/paper/2016/hash/a486cd07e4ac3d270571622f4f316ec5-Abstract.html | Bolukbasi, Chang, Zou, Saligrama and Kalai, NIPS 2016. *"The blind application of machine learning runs the risk of amplifying biases present in data."* Gender stereotypes in Google News word embeddings, and a debiasing method that keeps wanted associations. |
| Caliskan et al., preprint | https://arxiv.org/abs/1608.07187 | Submitted 2016, revised 2017. *"language itself contains recoverable and accurate imprints of our historic biases"*; introduces WEAT and WEFAT. Science record (2017) fetched separately via the Semantic Scholar API: https://api.semanticscholar.org/graph/v1/paper/DOI:10.1126/science.aal4230?fields=title,authors,year,abstract,venue |
| Stochastic Parrots | https://api.semanticscholar.org/graph/v1/paper/DOI:10.1145/3442188.3445922?fields=title,authors,year,abstract,venue | Bender, Gebru, McMillan-Major and Shmitchell, FAccT 2021. Recommends *"investing resources into curating and carefully documenting datasets rather than ingesting everything on the web"* and pre-development evaluation of fit to stakeholder values. |
| Measurement invariance | https://en.wikipedia.org/wiki/Measurement_invariance | *"the same construct is being measured across some specified groups"*; *"Violations of measurement invariance may preclude meaningful interpretation of measurement data."* Records the live Welzel versus Meuleman disagreement, which is kept visible rather than resolved. |
| Cultural bias | https://en.wikipedia.org/wiki/Cultural_bias | Defines the term as judging others through one's own cultural background and quotes Mercer 1978 on test content peculiar to one group. |
| Machiavellian intelligence / social brain | https://en.wikipedia.org/wiki/Machiavellian_intelligence_hypothesis | Animal-behaviour source: social complexity as a driver of intelligence, plus Strum, Forster and Hutchins: *"We suggest that Machiavellian intelligence may be a misnomer."* |
| Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Aug 28 2026. *"If several paths create the same behavior, then behavior is a projection with lossy information."* The spectrometer case is the model for D4. |
| Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Nov 19 2026. *"Humans in the 1800s had different values, customs, and cultures than humans of today. What does it mean to align an AI to human values when human values are a moving target?"* Also the prestige-is-not-action rule and the simulated-output warning. |
| Decoding Tacit Knowledge | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | Nov 10 2026. Context, subtext and pretext; *"Writing carries the context well and the subtext partly, but it almost never carries the pretext."* Includes Bartlett's retellings drift example. |
| ACM FAccT | https://facctconference.org/ | Homepage fetched. Cross-disciplinary scope, public institutional contact and opt-in announcements. The site's own description says systems *"contain inherent risks, such as codifying and entrenching biases."* |
| Nature Machine Intelligence | https://www.nature.com/natmachintell/ | Homepage fetched. Its own editorial on reasoning LLMs says *"these reasoning tokens are not accurate explanations of LLMs' internal computations"*, which is the reading-versus-source distinction in an AI venue. |
| Data and Society | https://datasociety.net/ | Homepage fetched. *"technology policy must be grounded in research, account for tech's real-world impacts, and serve the public."* |
| AI Now Institute | https://ainowinstitute.org/ | Homepage fetched. *"An independent research institute providing expert analysis on AI in the public interest."* |

**Fetch failures, recorded honestly.** `https://aies-conference.org/` returned a transport error, and `https://www.aclweb.org/portal/content/call-papers` returned 404, on 2026-11-23. Neither is cited or listed as a verified contact point. `https://www.science.org/doi/10.1126/science.aal4230` returned 403, so the Caliskan paper was opened through the arXiv abstract and its Semantic Scholar record instead. The direct Bender PDF at dl.acm.org returned 403, so the paper was read through its Semantic Scholar record; this is declared in `10_source_ledger.csv`.

**Carried, not re-opened this session.** Five of the eight framework essays (How Intelligence Actually Works, The Library of Babel, They're Scanning Books, How a Society of Agents Would Work, Arrival of the Fittest: The Tether) are quoted only through the completed exemplar's canonical mapping in `QMGR-0037/05_what_shape_means.md`, and are marked as carried in `05_what_shape_means.md`. They are not counted as newly read sources.

## Two findings in the wider literature that bear directly on this question

1. **Aggregate performance hides per-slot failure.** Gender Shades shows that the ranking of accuracy changes when the habitat is enumerated by skin type and gender: up to 34.7 percent error for one subgroup against 0.8 percent for another. This is Fig 1 :19, *"The residual is indexed by object slot, not aggregated,"* in an AI setting. It is the strongest world corroborator for D3 and for the per-slot refusal.
2. **A score can track a bias without naming its source.** Caliskan et al. replicate human implicit associations in a purely statistical model trained on web text, and Bolukbasi et al. show those associations are geometric and amplifiable. This is the inherited-prior claim (Symbols `w`) with a measurable instrument for the prior, but not yet for the source of a specific social reading. The two papers share an embeddings evidence pool and count as one witness.

A conflict check was run: no world source contradicts the figure verdict. Measurement invariance has a live internal dispute about whether invariance tests are the right validity criterion; that dispute is recorded as evidence for the union reading, not used to flip a verdict.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 10 :52** — *"Bring a characterised residual, never the source."* A recipient who has absorbed the whole framework before being asked for a verdict has joined the frame being checked.
- **Fig 2 :45** — *"Frames range against the ground. They do not negotiate with it."* Ask what they would expect to see if the shape claim were true before showing the essay links.
- **Fig 9 :27-28** — *"describe it before you go looking, or any frame you pick will seem to fit."* Describe the per-slot effect first; the name of a culture or a benchmark will otherwise seem to fit automatically.
- **Fig 2 :40** — *"agreement about the world is worthless when the agreeing frames share an evidence pool."* A recipient from the same cultural pool as the corpus is not a second witness, however friendly.
- **Fig 9 :60** — *"Use filters for the budget and witnesses for the verdict."* A venue's prestige or a contact's receptiveness decides where to spend the checking budget, never whether the claim holds.

**Recommended order in a reply:** (1) the per-slot shape claim and its four refuters; (2) ask what they would count as a failure and which cultural evidence their evaluation draws on; (3) record that verdict; (4) only then the three links, with the note that the figures, not the summary, are the authority.

## The two-stage offer, restated

1. **Stage 1:** residual, mode and refuter first. No framework material. This is Fig 10 :52 and Fig 2 :45.
2. **Stage 2, opt-in:** if curious, the source links. Their later agreement is never pooled as corroboration (Fig 2 :40).
3. **Stage 3, opt-in:** the formula as a method, with each user writing their own refuter and mode. Fig 4 :22: *"Only methods cross up. Only head starts come down."*

**Hard precondition:** stages 1 to 3 only work if the stage-1 output survives. The four refuters in `01` section 4 are written down before any send, and the packet in `08` is the version to circulate. If one fires, the claim is withdrawn rather than reinterpreted.

## Hosting and sending

Nothing in this folder is sent by this agent. Hosting the packet (Drive, Dropbox, a repo release) and sending it is yours to do. Prefer an opt-in download page to a pushed attachment, so a recipient can decline contact without friction. FAccT and the two research institutes in `03_public_contact_points.csv` publish public institutional channels; use those, one-to-one, not personal addresses and not bulk mail. Check each venue's AI-assisted-submission policy before sending simulated work: Nature Machine Intelligence's editorial policies and FAccT's current call both need a fresh read at submission time.
