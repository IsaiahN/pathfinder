# Public links, wider literature and distribution

All links marked verified below were fetched and opened on 2026-11-22. Where a fetch failed or returned only an abstract, that is recorded rather than hidden. The field for public contact points is network inference research; the venues themselves are in `03_public_contact_points.csv`.

## 1. Local framework primaries actually read

| what | path | verified content |
|---|---|---|
| Verbatim figure text with line numbers | `FRAMEWORK/reference/03-FIGURES_TEXT.md` | Every `Fig N :line` quote in this folder was taken from here. Contains Figures 1 to 13, the Operators table, the Symbols table. |
| Canonical usage rule | `FRAMEWORK/reference/FIGURES_README_canonical.md` | *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also the shape-not-a-name limit and *"Indiscernibility is not identity."* |
| The eight-step loop | `FRAMEWORK/figures/THE_FORMULA.md` | Steps 1 to 8, the mode rule (`general · specified · grounded`), habitat, closure, direction, composition, substrate. |
| Project master plan | `PLANS/00_MASTER_PLAN.md` | Sections 2, 8, 9 read for method and outreach rules. |

## 2. World sources actually fetched

| what | URL | verified content and bearing |
|---|---|---|
| Guimerà and Sales-Pardo, PNAS 2009 (PMC full text) | https://pmc.ncbi.nlm.nih.gov/articles/PMC2799723 | *"we are able to reliably identify both missing and spurious interactions in noisy network observations"*; reconstructions gave property estimates *"more accurate than those provided by the observations themselves"*. Below about 10 percent observation error the observed network was sometimes better. Corroborates F7 with a stated boundary. |
| Smith and Moody, Social Networks 2013 (PMC full text) | https://pmc.ncbi.nlm.nih.gov/articles/PMC3846431 | *"missing data may have quite large or quite small effects on network measurement, depending on the type of network and the question being posed."* Betweenness and Bonacich centralization sensitive; closeness and in-degree robust. Corroborates F2. |
| Kossinets, Social Networks 2006 (ScienceDirect abstract and arXiv full record) | https://www.sciencedirect.com/science/article/abs/pii/S0378873305000511 ; https://arxiv.org/abs/cond-mat/0306335 | *"network boundary specification and fixed choice designs can dramatically alter estimates of network-level statistics."* Clustering and assortativity overestimated under truncation, underestimated under non-response. Corroborates F4 and F6. |
| Huang, J. Phys. A 2015 (arXiv record and PDF) | https://arxiv.org/abs/1506.00358 | *"the correlation observed between two neurons may arise from a hidden common input outside the measured population"*; *"the inference quality deteriorates as the number of hidden nodes increases."* Low-overlap corroboration for F3. |
| Brugere, Gallagher and Berger-Wolf, ACM Computing Surveys (arXiv record and HTML) | https://arxiv.org/abs/1610.00782 | *"there are many possible clusterings which are only as valuable as the accuracy improvement they provide of a downstream task"*. Supports per-task verdicts and the shape-not-a-name limit in F2 and F12. |
| Wang, Shi, McFarland and Leskovec, Social Networks 2012 | https://www.sciencedirect.com/science/article/abs/pii/S0378873312000056 | *"false negative nodes and edges"*, *"false positive nodes and edges"*, false aggregation and disaggregation. Corroborates F8. |
| Lü and Zhou, Physica A 2011, link prediction survey | https://piccardi.faculty.polimi.it/VarieCsr/Papers/Lu2011.pdf | *"some 'unexpected' links may be incorrectly identified as spurious links and thus the removal of these links may lead to biased understanding of the system's structure and function."* Corroborates F8 and the refusal cost. |
| Ching and Tam, arXiv:1901.04132 | https://arxiv.org/html/1901.04132v1 | *"it is common that either some nodes of a network of interest are unknown or the measurements of some nodes are unavailable."* Corroborates the hidden-node condition in F6. |
| Joint Network Topology Inference in the Presence of Hidden Nodes, arXiv:2306.17364 | https://arxiv.org/html/2306.17364v2 | *"Ignoring the presence of the hidden nodes can drastically hinder the performance of the graph learning algorithms. Nevertheless, accounting for their influence is not a trivial endeavor since the inference task becomes ill-posed."* Corroborates the unreachable verdict in F5. |
| Simulating systematic bias in attributed social networks, Applied Network Science 2021 | https://link.springer.com/article/10.1007/s41109-021-00425-z | *"systematic inaccuracies distort conclusions drawn from network analyses on the task of minority representations in degree-based rankings."* Low-overlap witness that edge errors are not random, so bias has direction. |
| Huisman, imputation of missing network data, Journal of Official Statistics 2009 | https://www.cmu.edu/joss/content/articles/volume10/huisman.pdf | *"item non-response resulting in slightly more bias"* than unit non-response; degree-related missingness leads to large bias. Corroborates F2 and F6. |

## 3. Essays actually fetched for the canonical shape reading

| essay | URL | bearing |
|---|---|---|
| The Library of Babel: Locating the Book of Books | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question"*; the bundle passage supports F6. |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* Grounds the simulated-derivation label and the prestige-is-not-action rule. |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Metamerism: *"If several paths create the same behavior, then behavior is a projection with lossy information."* Two networks with the same observable summary can have different sources; the spectrometer, not an argument, settled the color case. |
| Decoding Tacit Knowledge | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."* Grounds the describe-the-effect outreach order. |

All four essays share an author with the figures, so their agreement with the figure verdict is expected and carries no independent witness weight. They are recorded with maximal overlap in `10_source_ledger.csv`.

## 4. Venue pages actually fetched

- Network Science Society: https://netscisociety.net/ (society site, current NetSci 2027 and NetSciX 2027 calls, generic institutional contact).
- Network Science author instructions: https://www.cambridge.org/core/journals/network-science/information/instructions-contributors (double-blind review, ScholarOne submission).
- arXiv submission overview: https://arxiv.org/help/submit.
- Applied Network Science: https://appliednetsci.springeropen.com/ (submission link, open calls).
- Nature complex networks subject hub: https://www.nature.com/subjects/complex-networks.
- Santa Fe Institute: https://www.santafe.edu/.

## 5. Fetch failures and limits, recorded honestly

- `http://www.netsci.org/` no longer resolves to the Network Science Society. It returned an unrelated DIRECTV sales page. It is excluded from `03` and from all citations. Use `netscisociety.net` instead.
- The PNAS article page returned its abstract and metadata; the full argument and figures were read from the PMC copy, which is the URL recorded in the ledger.
- Kossinets 2006 at ScienceDirect returned the abstract and article preview only; the full text was not opened. The arXiv record was opened as a second route to the same paper. Claims from it are restricted to the abstract.
- Journal of Complex Networks (Oxford Academic) returned 403 in the sibling solution CMP-0024 and was not independently re-fetched here. It is marked venue-only and verify-before-use in `03`.
- The generic Chaos journal submission page was not independently fetched; the 2022 hidden-node article page was opened through search and is the URL recorded.
- `10_source_ledger.csv` records one row per source actually opened. Nothing cited in the answer files comes from a page that was not opened at least in the form described above.

## 6. Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22**: *"Only methods cross up. Only head starts come down."* Sending the full architecture before anyone has described a residual sends a recording, not a generator. Lead with the shape, the per-slot claim and the refuter.
- **Fig 10 :42**: *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before giving a verdict has joined the frame being checked.
- **Fig 9 :27**: "describe it before you go looking"; :28: "any frame you pick will seem to fit". Ask what they would expect to see if the shape claim were true before giving them the essay links.
- **Fig 2 :31**: *"Independence, between two frames, is how little they draw on the same evidence."* A list selected for likely agreement is one pool wearing many names.
- **Fig 2 :42**: "Buy independence in proportion to the cost of being wrong." A wrong conclusion about a hidden edge can change an epidemic threshold or a robustness assessment, so the cost is real and independence is worth paying for.

**Recommended order in a reply:** (1) the residual in effect terms; (2) the three-part shape claim and the six refuters; (3) ask what they would count as a failure and record the verdict; (4) only then the links, with the note that the figures, not the summary, are the authority.

## 7. The two-stage offer

1. **Stage 1.** Validate the output against a ground. The recipient checks the shape claim and the refuters without holding the framework interior. This is Fig 10 :52 (*"Bring a characterised residual, never the source"*) and Fig 2 :45 (*"Frames range against the ground. They do not negotiate with it."*).
2. **Stage 2, opt-in only.** If curious, read the figures and the survey. The stage-1 verdict is recorded before any theory is shown, and later agreement is never pooled as corroboration (Fig 2 :40).
3. **Stage 3, opt-in only.** Offer the formula as a method to reuse. This is a generator, so giving it away gives away no answer (Fig 4 :22). Each user must write their own refuter and state their own mode, because a frame cannot check the direction of its own question (Formula, "Direction") and outputs can be *"contrived to fit the formula"* unless a prediction is committed in advance.

**Hard precondition:** stages 1 to 3 work only if the stage-1 output survives. That is why the six refuters come before the links.

## 8. Zip and hosting

The twelve files in this folder are the package. **I can prepare the files locally; I cannot upload them or send them to anyone.** Hosting (Drive, Dropbox, a repo release, a journal submission system) and sending are yours to do. If you host it, prefer a link that lets a recipient decline contact. An opt-in submission route is closer to the figures' rule than an attachment pushed to a list.
