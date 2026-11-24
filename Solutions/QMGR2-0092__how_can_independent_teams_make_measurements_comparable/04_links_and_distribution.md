# Public links, wider literature and distribution

All links in the table below were fetched and read on 2026-11-23. Provenance for each, including author, venue, year, accessed date and a verbatim quote, is in `10_source_ledger.csv`.

## 1. Verified links actually fetched

| what | URL | verified content |
|---|---|---|
| SI defining constants | https://www.nist.gov/si-redefinition/definitions-si-base-units | "the units in the revised SI are based completely on seven unchanging quantities or 'universal constants'". The kilogram is defined by fixing the Planck constant, the metre by the speed of light, the second by the caesium frequency. A worked instance of a pinned anchor that no team can move. |
| Kilogram and Planck's constant | https://www.nist.gov/si-redefinition/kilogram/kilogram-mass-and-plancks-constant | Describes two different realisations, Kibble balances and silicon spheres, and that "All these values must agree within a statistical confidence level of 95 percent." Different instruments, one fixed reference, agreement registered against it. |
| NIST calibration services | https://www.nist.gov/calibrations | Public institutional calibration route; the page uses role-based contacts, not personal addresses. Relevant to the round trip between teams. |
| CIPM MRA toolbox | https://www.bipm.org/en/toolbox-cipm-mra | "an institutional and technical framework for National Metrology Institutes (NMIs) around the world to recognize each other's measurement standards and calibration certificates." Its three elements are reviewed scientific comparisons, a quality system and international peer review. |
| CIPM MRA documents | https://www.bipm.org/en/cipm-mra/cipm-mra-documents | Public policy and guidance documents, including CIPM MRA-G-11 on measurement comparisons and the public KCDB. Site tagline: "Coordinating the world-wide measurement system to ensure comparable and internationally accepted measurement results". |
| JCGM, GUM and VIM | https://www.bipm.org/en/committees/jc/jcgm | "The tasks of the JCGM are to maintain and promote the use of the Guide to the Expression of Uncertainty in Measurement... and the International Vocabulary of Metrology". The institutional home of the convention that makes cross-team disagreement statable. |
| BIPM contact | https://www.bipm.org/en/contact | Public, role-based contact routing. No personal email is recorded in this solution. |
| Commensurate measures across independent studies | https://pmc.ncbi.nlm.nih.gov/articles/PMC2780030/ | Bauer and Hussong, Psychological Methods, 2009. "without common measures, IDA is a nonstarter" and "Harmonization may be a useful first step... but it is not sufficient." Includes common-item and chained-item designs, a low-overlap analogue of the round trip. |
| Correlated meta-analysis of OMIC scans | https://pmc.ncbi.nlm.nih.gov/articles/PMC3773990/ | Province and Borecki, Pac Symp Biocomput, 2013. "hidden dependencies between putatively 'independent' studies can cause inflation of type I error". A statistics corroboration of the independence finding. |
| Measurement invariance conventions | https://pmc.ncbi.nlm.nih.gov/articles/PMC5145197/ | Putnick and Bornstein, Developmental Review, 2016. "Measurement noninvariance suggests that a construct has a different structure or meaning to different groups or on different measurement occasions... and so the construct cannot be meaningfully tested or construed across groups or across time." A human-cognition corroboration of same-label-different-meaning. |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Isaiah N, 2026-08-28. Metamerism: "If several paths create the same behavior, then behavior is a projection with lossy information." The spectrometer, not an argument, resolved the source question. |
| Decoding Tacit Knowledge | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | Isaiah N, 2026-11-10. "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." Also the two-navigator example: each takes a bearing on the same fixed landmark and nobody can talk the landmark into moving. |
| The Library of Babel: Locating The Book of Books | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Isaiah N, 2026-10-02. "This means that you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, 2026-11-19. "The output is only as good as the validator... cannot validate itself." Also "Prestige can fund an action... But it cannot settle an action. Only the ground can settle it." |

## 2. Links found but not used as witnesses

Two documents were located in search results but the fetch failed, so they are **not** cited as read in `09_watson_answer.md` and no quote from them is used as evidence:

- CIPM MRA-G-11, Measurement comparisons in the CIPM MRA (BIPM PDF): the fetch tool returned "Unsupported fetched file content type: application/pdf". The document's existence and current version are confirmed on the public CIPM MRA documents page (fetched), but its text was not opened here.
- "The Critical Role of International Comparisons in Global Metrology System" (MDPI, 2025): the fetch returned HTTP 403. Not used.

A generalized-weights meta-analysis paper on sample overlap was found in search results with a substantial preview but was not opened directly; it is not used as a witness. The already-fetched Province and Borecki article covers the same point and is used instead. This is recorded so a reader can see where a search hit was deliberately discarded.

## 3. What the wider literature does, and does not, establish

World sources are secondary corroboration only. The figures decide.

- **Metrology (NIST, BIPM).** The real system of comparability fixes invariants and ranges instruments against them, and publishes degrees of equivalence rather than declaring two labs identical. This corroborates Fig 2's anchor and Fig 4's measured gap. It does not prove the figure rule; it is an instance the rule describes.
- **Psychometrics and social science (Bauer and Hussong; Putnick and Bornstein).** Independent studies are put on a common metric with common items, and "same label, different meaning" blocks comparison. This corroborates Fig 13's measured-versus-meant split and Fig 12's isomorphism finding in a field with no contact with the framework author.
- **Statistics (Province and Borecki).** Hidden dependence among putatively independent studies inflates false positives. This corroborates Fig 2 :44, whose own text points to the effective-sample-size correction in survey statistics and meta-analysis.
- **Framework essays (high overlap, all by the framework author).** They supply the canonical reading of "shape", the metamerism point, and the prestige rule. Their agreement with the figures is expected and carries little independent weight. `09_watson_answer.md` declares this.

No world source conflicts with the figure verdict. The conflict rule was not triggered. Agreement between the framework essays and the figures is one evidence pool talking, not corroboration (Fig 2 :40).

## 4. Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 10 :52**, "Bring a characterised residual, never the source." Sending the whole framework before a recipient has described a residual sends a source, not a checkable claim.
- **Fig 10 :42**, "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the interiors before giving a stage-1 verdict has joined the frame being checked.
- **Fig 2 :35**, "Alignment is triangulation, not negotiation. A mirror cannot correct you." Do not ask for agreement.
- **Fig 7 :35**, "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." One-to-one contact, no bulk list, no receptiveness ranking.
- **Seat Map :163**, "High correlation is disqualifying for a verdict and efficient for a convention." Selecting people likely to nod produces a convention, not a check.

**Recommended order in a reply:** (1) the residual in effect terms and the shape claim; (2) the pre-registered refuter and the question "what would you expect to see if this were true?"; (3) record their verdict; (4) only then, if they are curious, the links, with the note that the figures, not the summary, are the authority.

## 5. The two-stage offer

- **Stage 1 before stage 2.** Fig 10 :52 and Fig 2 :45: frames range against the ground separately. The recipient checks the output without holding the framework interior. Their verdict is recorded first.
- **Stage 2 is opt-in by construction.** Once a recipient has absorbed the theory, their agreement stops being evidence. Later agreement is never pooled as corroboration (Fig 2 :40).
- **Stage 3 sends a method, which is permitted.** Fig 4 :22: "Only methods cross up. Only head starts come down." The formula is a generator, so giving it away does not give away a verdict.
- **Stage 3 still needs a ground per problem.** `THE_FORMULA.md` "Direction": a frame cannot check the direction of its own question. Each user writes down what would refute their result before running it and states the mode of what they get.

## 6. Hosting

This folder contains no archive and no upload. Hosting and sending are yours to do. Prefer a link that lets a recipient decline contact, an opt-in download page rather than an attachment pushed to a list. No material here should be sent to a personal address discovered in a page that did not publish it for that purpose.
