# Public links and distribution

Every link in the "Verified sources" table was fetched and read on 2026-11-23 unless marked otherwise. Links that returned 403 or an unsupported content type are recorded in the fetch-failures table and are either retrieved through a public search index at reduced weight or not cited at all.

## Verified sources

| what | URL | verified content |
|---|---|---|
| Feynman's "Simulating Physics with Computers", open review | https://arxiv.org/html/2405.03366v1 | Alsing, Cafaro and Mancini 2024, invited essay on the 1982 IJTP paper. Full HTML read. Contains the counting argument, the sign problem being NP-hard, the loss/noise escape via a positive Wigner function, and the statement that on local Hamiltonians classical runtime scales exponentially while quantum runtime scales polynomially in the qubit count. |
| Preskill, "Quantum computing 40 years later" | https://arxiv.org/html/2106.10522 | Full HTML read. Quotes Feynman's rule of simulation verbatim, the "no succinct classical description" argument, the 2^300 state-space example, the extended Church-Turing thesis and its revision, the quantum-chaos/weather analogy, and the point that NP-hard optimisation is not expected to be solved efficiently by a quantum computer. |
| Undecidability of the spectral gap, ICMAT record | https://www.icmat.es/news/highlighted-papers/paper-04-15 | Full page read. Gives authors, venue (Nature 528, 207-211, 2015), the abstract, and the explicit statement that no algorithm decides gapped versus gapless and that some instances are independent of the axioms of mathematics. |
| Corless, "Numerical Methods for Chaotic ODE" | https://arxiv.org/html/2501.06123v1 | Full HTML read. Backward error analysis for chaotic ODEs: separation time proportional to log(1/epsilon), exponential trajectory divergence from positive Lyapunov exponents, robust statistics, shadowing, and the honest open problem that short-term accuracy giving good long-term statistics is not fully explained. |
| Conant and Ashby, "Every good regulator of a system must be a model of that system" | https://www.tandfonline.com/doi/abs/10.1080/00207727008920220 | Publisher abstract read. International Journal of Systems Science 1(2), 89-97, 1970. The theorem that a maximally successful and simple regulator must be isomorphic with the system regulated. Cybernetics, a genuinely low-overlap field. |
| Box quote provenance, The DO Loop | https://blogs.sas.com/content/iml/2025/04/02/all-models-are-wrong.html | Full page read. Traces "all models are wrong, but some are useful" to Box and Draper 1987 p. 424 and Box 1979, and quotes the 1976 JASA line "Since all models are wrong the scientist cannot obtain a 'correct' one by excessive elaboration." Statistics, a low-overlap field. |
| The Library of Babel, Isaiah N | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Full essay read. Source of "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question", the proximity/vocabulary method, the tether analogy, and the observation that an unanswerable result often means the question was a bundle of several. |
| The Recursive Self-Improvement Trap, Isaiah N | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Full essay read. Source of "The catch is that the output is only as good as the validator", the direct statement that the exact lineage cannot be recreated even with the rules and a computer, "world models will not work" on recomputation of reality, and the prestige/not-action rule. This is the framework essay most directly on the present question. |
| Canonical figures and formula | https://github.com/IsaiahN/tether/tree/general-agent/figures | Verified in the exemplar on 2026-11-22 and carried here; not re-fetched this session. The canonical usage rule and the `Fig N :line` citation form. |
| Santa Fe Institute | https://www.santafe.edu/ and https://www.santafe.edu/contact | Both fetched 2026-11-23. Public contact and opt-in research-news routes in complexity research. |
| arXiv submission overview and nlin.CD listing | https://arxiv.org/help/submit and https://arxiv.org/list/nlin.CD/recent | Both fetched 2026-11-23. Opt-in submission route and an active chaotic-dynamics subject class. |
| Nature Computational Science | https://www.nature.com/natcomputsci/ | Fetched 2026-11-23. Publish-with-us route and an open digital-twins collection. |

## Fetch failures and reduced-weight sources

| URL | result | how handled |
|---|---|---|
| https://cms.simula.no/sites/default/files/publications/Simula.acdc.22.pdf | PDF content type unsupported by the fetch tool | Only the public search-indexed excerpt was used: "With 16 digits of precision, this limit occurs at T ≈50. With 420 digits, the limit occurs at T ≈1050." Marked partial-read with reduced weight in `10_source_ledger.csv`. The Corless paper covers the same relation from a fully opened source, so no substantive claim depends on this. |
| https://fab.cba.mit.edu/classes/862.22/notes/computation/Lloyd-1996.pdf | PDF content type unsupported | Lloyd's result is cited from the fully opened Alsing review, which quotes the conjecture and its proof status. The bibliographic citation (Science 273, 1073, 1996) is recorded. |
| https://physics.aps.org/articles/v9/66 | HTTP 403 | The Rahimi-Keshari result is cited from the fully opened Alsing review and the ICMAT-style abstract wording is not attributed to this page. Marked partial-read, reduced weight. |
| https://pubs.aip.org/chaos/home | HTTP 403 | Not cited. The journal is not listed in `03_public_contact_points.csv`. |
| https://arxiv.org/pdf/2405.03366 | PDF content type unsupported | The HTML version of the same paper was opened in full and is the cited form. |

## Wider literature that bears on the question

- **Physics and quantum information.** Feynman 1982 framed the efficiency requirement as proportionality to spacetime volume; Lloyd 1996 proved a universal quantum simulator for local Hamiltonians; Preskill 2021/2023 records where that program stands, including the NISQ limits and the fact that quantum computers are not expected to solve NP-hard optimisation efficiently. Together these establish that the substrate change is an import that moves a wall, not a faster arrangement of one program (F6).
- **Mathematics and complexity.** Cubitt, Perez-Garcia and Wolf 2015 put the general spectral gap question outside all algorithms, so a subclass of "resists simulation" is underivable rather than expensive (F5). The ICMAT page makes the distinction between the general problem and particular instances explicit.
- **Numerical analysis.** Corless 2025 separates exact-trajectory tracking from robust statistics and gives the log(1/epsilon) separation time. This is the source that forced the retraction of "chaos makes simulation impossible" (R3).
- **Cybernetics and statistics.** Conant and Ashby 1970 require a regulator to model what it regulates; Box 1976/1987 requires that the model's difference from the world be borne in mind. Both corroborate the ground-contact shape from fields with no overlap with the framework (F4).
- **Framework essays.** *The Recursive Self-Improvement Trap* is the closest framework text to this question: even with the rules and a computer, the exact lineage cannot be recreated, so one gets a facsimile, and the output cannot validate itself. *The Library of Babel* supplies the bundle/unanswerable distinction and the shape-not-a-filler reading. These share the figure author's evidence pool and carry no independent witness weight. The remaining six essays were not re-opened this session; their quotes in `05_what_shape_means.md` are carried from the completed exemplar with that provenance stated.

## Distribution: offer, do not push

- **Fig 4 :22** - "Only methods cross up. Only head starts come down." Sending the full architecture before anyone has described a residual sends a recording, not a generator. Lead with the five conditions and the seven refuters; offer the links after.
- **Fig 10 :42** - "A verifier that can reconstruct the claim cannot verify it." A reader who has absorbed the framework before giving a verdict has joined the frame being checked.
- **Fig 9 :27-28** - "describe it before you go looking, or any frame you pick will seem to fit." Ask what the reader would expect to see if the shape claim were true before giving them the article.
- **Fig 2 :40** - "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Do not pool later agreement as corroboration.
- **Fig 7 :12-13** - "same closure, handed along; agreement compounds, evidence does not." A chain of readers who all agree is one long room, not a check.

**Recommended order in a reply:** (1) the shape claim and its seven refuters; (2) ask what the reader would count as a failure and which of the five conditions they work on; (3) record their stage-1 verdict; (4) only then the three links, with the note that the figures, not the summary, are the authority; (5) offer the formula as a method to reuse, with the instruction that each user write their own refuter and state their own mode.

## Two-stage offer

1. **Stage 1.** Send the residual, the union of five conditions and the pre-registered refuter. Ask for a failure, not agreement.
2. **Stage 2, opt-in only.** If curious, send the canonical figure link, the Feynman review and the spectral-gap record. The verdict from stage 1 is already recorded and is never revised by later agreement.
3. **Stage 3, also opt-in.** Offer the formula as a reusable method. `THE_FORMULA.md` "Direction" says a frame cannot check the direction of its own question because the shape it seeks is not a term it holds; each user must bind their own answer shape and write down what would refute it before running.

**Hard precondition:** stages 1 to 3 work only if the stage-1 output survives. The output in this folder is a simulated derivation, not a ground reading. That label must travel with it.

## Hosting

This agent cannot upload, host or send anything. Hosting and sending are for the person running the project. Prefer a link that lets a recipient decline contact, an opt-in download page rather than an attachment pushed to a list. Where a journal or repository has an AI-disclosure or authorship policy, declare the simulated derivation rather than presenting it as an empirical result.
