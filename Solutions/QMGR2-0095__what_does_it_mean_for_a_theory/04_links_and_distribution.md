# Public links and distribution

Every URL in the table was opened on 2026-11-23 unless marked otherwise. Quotes drawn from these pages are recorded in `10_source_ledger.csv` with author, venue, year, accessed date and the exact string. Nothing is cited from a page that was not opened or returned by the search interface.

## Verified public links actually opened

| what | URL | verified content |
|---|---|---|
| Philosophy of Statistics, SEP | https://plato.stanford.edu/entries/statistics | First published 2014, substantive revision 2025. Defines a statistical hypothesis as a probability distribution over sample space; states that classical statistics is only "in loose association with Popper's falsificationism" and discards hypotheses that render the sample "too improbable", not impossible. Gives the rejection region, alpha = 0.05, p-value and Neyman-Pearson machinery. |
| Karl Popper, SEP | https://plato.stanford.edu/entries/popper | First published 1997, substantive revision 2026. "criteria of refutation have to be laid down beforehand"; testing ends in a convention-based decision; falsifiability as demarcation; the asymmetry of verification and falsification. |
| Degrees of riskiness, falsifiability and truthlikeness | https://arxiv.org/html/2107.03772v1 | Vignero and Wenmackers, KU Leuven, 2021, forthcoming in Synthese. Probabilistic hypotheses may be outright falsifiable relative to a fixed experimental context; "we need to fix a reference class of experiments explicitly"; degrees of falsifiability co-depend on the severity of available experiments; the four classes from deterministic to "anything can happen". |
| The ASA Statement on p-Values | https://amstat.tandfonline.com/doi/full/10.1080/00031305.2016.1154108 | Wasserstein and Lazar, The American Statistician 70(2):129-133, 2016. Six principles, including that a p-value does not measure the probability a hypothesis is true and that conclusions "should not be based only on whether a p-value passes a specific threshold". Conclusion: "No single index should substitute for scientific reasoning." |
| ASA statement press release (PDF) | https://www.amstat.org/asa/files/pdfs/P-ValueStatement.pdf | Opened as text via search extraction; direct PDF fetch returned an unsupported content type. The six principles were confirmed verbatim against the journal article page. Counted as one witness with the article, not two. |
| In the Realm of the Hubble tension | https://iopscience.iop.org/article/10.1088/1361-6382/ac086d | Di Valentino et al., Class. Quantum Grav. 38 153001, 2021. The 4 to 6 sigma H0 disagreement, the demand for a hypothesis with "enough rigor to explain multiple observations", and the observation that several proposals improve the fit "in light of their additional degrees of freedom". |
| The garden of forking paths (working paper) | https://sites.stat.columbia.edu/gelman/research/unpublished/forking.pdf | Gelman and Loken, 2013. Multiple comparisons arise when analysis details are contingent on data even with one analysis and a pre-posited hypothesis; "In neither case were the data inclusion rules and data analysis choices preregistered." |
| The Clever Hans Phenomenon revisited | https://pmc.ncbi.nlm.nih.gov/articles/PMC3921203 | 2013 review in PMC. Hans read "microscopic signals in the face of the questioning person"; the lesson was to avoid face-to-face contact in animal cognition studies, "a fundamental lesson that is still not applied rigorously". Read via search-indexed full text; direct fetch not attempted. |
| Did you ever hear the one about the horse that could count? | https://pmc.ncbi.nlm.nih.gov/articles/PMC3448072 | Beran 2012, Frontiers in Psychology. "if you know the answer, you should not ask the question and score the response"; the Wisconsin General Test Apparatus cut the cue channel. Read via search-indexed full text; one witness with the 2013 review. |
| Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, 2026-11-19. "the output is only as good as the validator"; "LLMs can quickly simulate an approximate answer/output"; "Prestige can fund an action... But it cannot settle an action." |
| The Library of Babel: Locating the Book of Books | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Isaiah N, 2026-10-02. "a general shape of the answer"; a bundle may be "a conflation of several problems masquerading as one". |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Isaiah N, 2026-08-28. An instrument "cannot comment on the source"; "If several paths create the same behavior, then behavior is a projection with lossy information"; "The answer is unreached until a better instrument exists." |
| Decoding Tacit Knowledge | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | Isaiah N, 2026-11-10. "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." |
| PSA submissions | https://philsci.org/submissions.php | Opened. All submissions via Editorial Manager; double-anonymous review; 9,500 word limit. |
| COS Registered Reports | https://www.cos.io/initiatives/registered-reports | Opened. Peer review before results are known; over 300 participating journals; in-principle acceptance independent of outcomes. |
| Synthese submission guidelines | https://link.springer.com/journal/11229/submission-guidelines | Opened. Double-anonymized review. LLM use must be documented in Methods; generative AI cannot satisfy authorship; a human must take accountability. |
| ASA home page | https://www.amstat.org/ | Opened. Organizational contact displayed publicly; Statistical Significance Series visible in the site navigation. |

## Fetch limits, recorded honestly

- The Statistical Science journal page at Project Euclid returned no rendered content to the automated fetch. It is listed in `03` as a venue to verify manually; no content is cited from it.
- The BJPS General Instructions page returned HTTP 403. The main journal URL is listed as a venue only; no content is cited from it.
- The ASA press-release PDF returned an unsupported content type to the direct fetch. Its six principles were obtained via the search interface and confirmed against the Taylor and Francis article page, which was opened in full. One witness, not two.
- The two Clever Hans sources were read from search-indexed full text. Their quotes are marked as such in the ledger. They corroborate the shape of the cue-channel condition, not the cosmological claim.
- No figure quote came from a summary. All `Fig N :line` strings were checked against the local `03-FIGURES_TEXT.md`.

## Wider literature that bears on the question

1. **SEP, Philosophy of Statistics** is the single most useful anchor. It states the core asymmetry directly: classical procedures discard a hypothesis when it renders the observed sample *too improbable*, which is not the same as discarding one that deems the sample *impossible*. That is exactly the distinction the answer turns on. It also prints the actual machinery, rejection region R_q, significance level alpha, p-value as the smallest warranted significance level, and notes that the sufficient statistic, not nature, decides which samples get grouped as surprising.
2. **Popper, SEP** supplies the pre-registration requirement in Popper's own words: criteria of refutation "have to be laid down beforehand". It also supplies the convention point: testing stops at a basic statement the community decides to accept, and that decision is conventional in origin without being a verdict about the world. This is where "threshold as convention" and "anchor as non-updating" meet.
3. **Vignero and Wenmackers** supply the graded, context-relative reading. Falsifiability is not binary: it depends on informativeness and on the severity of available experiments, and the reference class of experiments has to be fixed explicitly. Their Class IV "anything can happen" is the world-source counterpart of the flat formula in Fig 12 :6.
4. **ASA statement** supplies the negative half. A p-value is a statement about data in relation to a specified model, not about the model's truth; no single index substitutes for scientific reasoning. This is the world-source counterpart of "use filters for the budget and witnesses for the verdict".
5. **Gelman and Loken** supply the failure mode. Even a single analysis with a pre-posited hypothesis can have an invalid p-value if the analysis choices were contingent on the data. A prediction that can be re-shaped after the data does not refuse anything; it fits.
6. **Di Valentino et al.** supply the live cosmological instance. The H0 tension is a residual that persists and does not trend down across independent early- and late-universe probes. Several proposed models reduce it "in light of their additional degrees of freedom", which is the MDL failure the figures name as a term that explains everything by saying nothing.
7. **Clever Hans sources** supply the low-overlap analogue. If the questioner knows the answer, the reading can be driven by the questioner's cues rather than by the subject's competence. The fix is a channel cut, not a better argument. That is Fig 10 :26 "stale percepts, dropped transients, saturated metrics, pooled readings" in animal-behaviour clothing.

Overlap declaration: sources 1 to 5 are one broad philosophy-of-statistics and metascience pool, not five independent witnesses. Source 6 (cosmology) and source 7 (animal behaviour) are genuinely lower-overlap corroborators. The four framework essays share the framework author's evidence pool completely and carry no independent witness weight.

## Distribution: offer, do not push

Figure-grounded reasons, repeated from `02` for the sender's benefit:

- **Fig 4 :22** - "Only methods cross up. Only head starts come down." Sending the full architecture before anyone has described a residual sends a recording, not a generator.
- **Fig 10 :42** - "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the entire framework before giving a verdict has joined the frame being checked.
- **Fig 9 :27-28** - "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the separator were true before giving them the essay links.
- **Fig 2 :40** - "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." A send selected for likely agreement produces a convention, not corroboration.

**Recommended order in a reply:** (1) the separator and its four refuters; (2) ask what they would count as a failure and what their field requires before calling a prediction tested; (3) record that verdict; (4) only then the three links, with the note that the figures, not the summary, are the authority.

## Venue constraints on simulated work

- **Synthese** requires LLM use to be documented in Methods and states that an LLM cannot satisfy authorship criteria; there must be human accountability for the final text. This folder is a simulated derivation. It cannot be submitted as-is; a human author would have to re-derive and stand behind the claims.
- **Philosophy of Science** uses double-anonymous review and a 9,500 word limit including references. The packet in `08` is deliberately short enough to fit as an appendix or a note after human expansion.
- **Registered Reports venues** are the natural home for the operational form of the claim, because peer review before results are known is exactly a pre-registered refusal rule. The stage-1 protocol is where the per-slot residual region and the independence of instruments would have to be stated.
- Do not present the cosmology or Clever Hans sources as derivations produced by the framework. They are world corroboration only, and the figures decide.

## Zip and hosting

No archive was created. This agent cannot host or send anything. If the material is hosted, prefer an opt-in download page that lets a recipient decline contact over an attachment pushed to a list.
