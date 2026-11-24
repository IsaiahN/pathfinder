# Public links and distribution

All links below were fetched on 2026-11-23 unless marked otherwise. Failed fetches are recorded rather than hidden, and no source that failed to open is used as a quoted world source.

## Verified framework sources (local)

| what | path | verified content |
|---|---|---|
| Verbatim figure text | `FRAMEWORK/reference/03-FIGURES_TEXT.md` | Figures 1 to 13 plus the Operators and Symbols tables, one SVG text element per line with line numbers. Every `Fig N :line` citation in this folder was checked against this file. |
| Canonical usage rule | `FRAMEWORK/reference/FIGURES_README_canonical.md` | *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also the shape-not-a-name limit and *"Indiscernibility is not identity."* |
| Figures as metalaws | `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` | WATSON 60, 2026-11-22. The figures are the ground for design questions; the anchor is not an oracle for questions the figures decide. Records the author's correction about treating rediscoveries as new. |
| The eight-step loop | `FRAMEWORK/figures/THE_FORMULA.md` | PERCEIVE, ROUTE, MINT, ACCEPT, SETTLE, PROMOTE, the three questions of step 7, and the mode rule. |

## Verified world sources actually fetched

| what | URL | verified content | overlap |
|---|---|---|---|
| Information (Stanford Encyclopedia of Philosophy) | https://plato.stanford.edu/entries/information/ | First published 2012, substantive revision 2023. Defines information as extensive and as reducing uncertainty. Notes that *"Shannon information is the best known quantitative definition of information but it is a rather weak concept"*, giving the `0000011111` versus `1001011100` example where arrangement is invisible to the measure. Reports Floridi's truthfulness demarcation and Adriaans's Differential Information Theory. | independent of the framework; high relevance, low overlap |
| Semantic Conceptions of Information (SEP) | https://plato.stanford.edu/entries/information-semantic/ | First published 2005, revision 2022. *"information is a non-random distinction with a difference. Information supervenes on patterned deviations."* States that smoke carries distal information about fire *"for us to access the distal information that there is fire from the proximal information that there is smoke, we must be aware of the correlation between smoke and fire."* Records Barwise's information channel as *"one of these relations between situations, since it is these relations which allow information about one situation to be gleaned from another situation."* Quotes Shannon's informational pluralism: *"It is hardly to be expected that a single concept of information would satisfactorily account for the numerous possible applications of the general field."* | independent; low overlap |
| Causal Models (SEP) | https://plato.stanford.edu/entries/causal-models/ | First published 2018. Defines probabilistic dependence explicitly: *"A and B are probabilistically dependent or correlated otherwise."* Introduces Reichenbach's screening off and latent common causes (double-headed arrows), interventions that break incoming arrows, and the limits of inferring causal structure from a distribution. | independent; low overlap |
| Nonnegative Decomposition of Multivariate Information | https://arxiv.org/abs/1004.2515 | Paul L. Williams and Randall D. Beer, 2010, arXiv:1004.2515, cs.IT. Interaction information is sometimes negative because it *"confounds redundancy and synergy"*; their partial information decomposition gives atoms that are *"never negative"* and support a clear informational interpretation. | independent information theory; low overlap |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Isaiah N, 2026-08-28. *"If several paths create the same behavior, then behavior is a projection with lossy information."* A color instrument reads green but *"cannot comment on the source"*; several producing schemes give the same reading. *"The answer is unreached until a better instrument exists."* | high overlap, same author as the figures; corroboration only |
| arXiv recent cs.IT listing | https://arxiv.org/list/cs.IT/recent | Fetched 2026-11-23, showing current Information Theory submissions and their declared subjects; used to confirm the field is active and to identify the submission venue, not as a quoted source. | venue verification |
| arXiv submission guidelines | https://info.arxiv.org/help/submit/index.html | Fetched 2026-11-23: submissions must be *"topical and refereeable scientific contributions"*, are moderated, and authors self-submit. | venue verification |
| IEEE ISIT 2026 | https://www.ieee-isit.org/ | Fetched 2026-11-23: flagship meeting of the IEEE Information Theory Society; scope includes classical information theory and cross-disciplinary work; public Call for Papers and Information for Authors pages. | venue verification |
| Allerton Conference | https://allerton.csl.illinois.edu/ | Fetched 2026-11-23: 62nd edition, UIUC, topics include information theory and statistical signal processing; public EasyChair submission route. | venue verification |
| Wikipedia ISIT entry | https://en.wikipedia.org/wiki/International_Symposium_on_Information_Theory | Fetched 2026-11-23: conference history, society, Shannon Lecture, official links. Flagged as needing more citations, so used only for orientation. | mapping aid |

**Fetches that failed, recorded honestly.** A mirrored PDF of Shannon's 1948 paper at `https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf` returned an unsupported content type to this fetcher, so it is not quoted. `https://www.itsoc.org/` and `https://www.mdpi.com/journal/entropy` returned HTTP 403; the society's existence and role were verified indirectly from the ISIT site and Wikipedia, and Entropy is not used in this solution. No claim in the ledger rests on an unopened page.

## Three things in the wider literature that bear directly on this question

1. **Shannon's measure is deliberately silent on arrangement.** The SEP Information entry gives the example of two binary strings with the same number of ones and zeros carrying the same Shannon information. This is the world-level twin of Fig 12 :117, *"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* Cite it when explaining why the identification of information with a scalar is a choice of code, not a discovery about the world.
2. **Correlation and source are different variables.** The SEP Causal Models entry defines correlation as probabilistic dependence and immediately introduces latent common causes and screening off. The metamerism essay gives the perceptual version. Together they corroborate F3 and F4: the same co-variation survives several causal arrangements, so the co-variation alone cannot choose among them.
3. **One scalar cannot hold the multivariate structure.** Williams and Beer's partial information decomposition separates redundancy from synergy and shows why a single interaction-information number can be negative. This corroborates F6 without sharing the framework's evidence pool. It is a genuinely independent witness, so it carries more weight here than the framework author's own essays.

## A conflict check

No world source conflicts with the figure-derived verdict. The SEP entries and the Williams and Beer paper are independent and land in the same place: correlation is a real and useful quantity, but it does not by itself determine arrangement, direction, source, or meaning. Shannon's pluralism quote is the strongest single corroboration that no one definition covers every domain. Because the framework author's essay shares the evidence pool, its agreement is recorded as internal corroboration only and is not counted as a second independent witness (Fig 2 :40).

## Distribution: offer, do not push

- **Fig 4 :22 to :25:** only methods cross up, only head starts come down. A recording sent before anyone has described the residual is a description of one occasion, not a generator.
- **Fig 10 :42:** *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the whole framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27 to :28:** *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see if the shape claim were true before giving them the article.
- **Fig 2 :39 to :41:** *"Correlation has valence."* Selecting recipients for receptiveness manufactures a convention, not corroboration.

**Recommended order in a reply:** (1) the residual and the four domain verdicts; (2) ask what they would count as a failure, and record that answer; (3) only then the local figure links, with the note that the figure text, not this summary, is the authority; (4) if they are curious, the formula as a method to reuse with their own refuter and mode.

## Zip

This folder can be archived locally. Hosting it and sending the link is yours to do. Prefer an opt-in download page that lets a recipient decline contact over an attachment pushed to a list.
