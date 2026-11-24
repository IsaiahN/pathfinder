# Public links and distribution

All links below were fetched on 2026-11-22 unless a note says otherwise. Where a fetch failed, the failure is recorded and nothing is cited from that page as read.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Verbatim figure text, local | `FRAMEWORK/reference/03-FIGURES_TEXT.md` | Figures 1 to 13 plus Operators and Symbols tables, one SVG text element per line, with the line numbering used by every `Fig N :line` citation in this folder. |
| Canonical usage rule, local | `FRAMEWORK/reference/FIGURES_README_canonical.md` | Includes "They outrank everything else in the repo", the re-census rule, and the limit "a shape, not a name". |
| The eight-step loop, local | `FRAMEWORK/figures/THE_FORMULA.md` | The five route bins, the mint guards, the mode rule "general · specified · grounded", and the direction discipline. |
| Question source file, local | `Questions/cognitive science.txt` | Line 19 is COG-0014; section heading at line 15 is "2. Perception, attention, and learning". |
| Müller-Lyer illusion, Wikipedia | https://en.wikipedia.org/wiki/M%C3%BCller-Lyer_illusion | Full article read. Contains the classical cross-cultural results (Rivers 1901, Berry 1968, Segall, Campbell and Herskovits 1963 and 1966, Jahoda 1971, Ahluwalia 1978), the claim that "Research suggests all humans are susceptible to the illusion across cultures", the citation of Amir and Firestone 2025, and the animal studies (Nakamura et al. 2006, Pepperberg et al. 2008). |
| Cross-cultural psychology, Wikipedia | https://en.wikipedia.org/wiki/Cross-cultural_psychology | Full article read. Etic/emic distinction, pseudoetic critique, WEIRD bias, cultural priming, methodological criticisms. |
| Cultural psychology, Wikipedia | https://en.wikipedia.org/wiki/Cultural_psychology | Full article read. Shweder on failed replication outside the West, mutual constitution, cited work on cultural differences in attention and perception. |
| Amir and Firestone, bibliographic and abstract record | https://api.semanticscholar.org/graph/v1/paper/DOI:10.1037/rev0000549?fields=title,abstract,authors,year,venue,externalIds | Full abstract returned. "Yet, here we argue that it is almost certainly false." Reports five lines of evidence including nonhuman animals, natural scene statistics, nonvisual modalities and congenitally blind subjects, plus the reanalysis of the historical data. |
| Amir and Firestone, DOI record | https://doi.org/10.1037/rev0000549 | Resolved to Psychological Review, volume 133, issue 5, pages 1082 to 1108. Crossref record at https://api.crossref.org/works/10.1037/rev0000549 confirms authors, venue and issue. |
| Howe and Purves 2005, PNAS, full text | https://www.ncbi.nlm.nih.gov/pmc/articles/PMC544622/ | Open access full text read. "the perceptual effects elicited by the Müller-Lyer stimulus and its major variants are correctly predicted by the probability distributions of the possible physical sources underlying the relevant retinal images." Also reports no obvious difference between fully natural scenes and scenes containing human constructions. |
| Segall, Campbell and Herskovits 1963, bibliographic record | https://api.semanticscholar.org/graph/v1/paper/DOI:10.1126/science.139.3556.769?fields=title,abstract,authors,year,venue,externalIds | Record opened; abstract withheld by publisher. Counted as bibliographic verification only. Effect sizes (1.4% to 20.3%) were read on the Wikipedia Müller-Lyer page, not here. |
| Berry 1968, bibliographic record | https://api.semanticscholar.org/graph/v1/paper/DOI:10.1111/j.2044-8295.1968.tb01134.x?fields=title,abstract,authors,year,venue,externalIds | Record opened; abstract withheld by publisher. Title "Ecology, perceptual development and the Müller-Lyer illusion" is the recorded quote. |
| Cole and Means 1981, Google Books page | https://books.google.com/books?id=thLR-f10WoMC&pg=PA42 | Page opened. The chapter title "What Happens When All Other Things are Not Equal?" was visible in the Wikipedia reference list and on the book page; the preview text for page 42 was not exposed to the fetch. Recorded with reduced weight. |
| IACCP home and contact pages | https://www.iaccp.org/ and https://www.iaccp.org/contact-information | Opened. Founded 1972; JCCP, Online Readings in Psychology and Culture, conferences, opt-in reviewing and posting forms, role-based institutional contacts. |
| IACCP journal page | https://www.iaccp.org/journal | Opened. "For 50 years the Journal of Cross-Cultural Psychology has provided a leading interdisciplinary forum..." Scope includes cognitive and cross-cultural topics. |
| Vision Sciences Society home | https://www.visionsciences.org/ | Opened. Nonprofit membership organization for vision science; abstract submissions open with a published deadline; abstract review committee listed. |
| APS Registered Replication Reports | https://www.psychologicalscience.org/publications/replication | Opened. "Direct replications are necessary to estimate the true size of an effect." Shared protocol, preregistration, publication regardless of outcome, data on OSF. |

## Fetch failures and limits, recorded honestly

- `https://pubmed.ncbi.nlm.nih.gov/40388159/` returned a vulnerability-disclosure page rather than the abstract. The abstract was obtained from the Semantic Scholar API record above, which is the source recorded in the ledger.
- `https://journals.sagepub.com/home/jcc` returned 403. JCCP submission information was taken from the opened IACCP journal page instead.
- `https://www.sccrweb.org/` returned a transport error. The Society for Cross-Cultural Research is therefore **not** listed as a verified contact point.
- `https://osf.io/` returned no content to the fetch. It is referenced only as the data host named by the opened APS replication page, not as an independently verified venue.
- `https://www.apa.org/pubs/journals/rev` returned no content. The venue details for the Amir and Firestone paper come from the DOI and Crossref records that did return content.
- The full text of the Amir and Firestone paper is openly available at https://osf.io/y7mtf/download (marked GREEN, CCBY by the Semantic Scholar record), but the PDF itself was not fetched. Only the abstract, DOI and Crossref metadata are cited.

## Wider literature that bears on the question

1. **The universality case.** Amir and Firestone 2025 argue the flagship cultural-byproduct case is "almost certainly false", combining animal behaviour, natural scene statistics, nonvisual modalities and congenital blindness. This bears on the conditions-and-measurement part of the union: if the effect is in the stimulus statistics, same conditions should not produce a group difference once methodology is cleaned up.
2. **The historical difference case.** Segall, Campbell and Herskovits 1963 and 1966 reported large between-population differences in illusion magnitude under the same printed task. Berry 1968 and Ahluwalia 1978 reported ecological and urban/rural differences. Cole and Means 1981 supply the methodological title "What Happens When All Other Things are Not Equal?". These bear on the history-and-prior part of the union.
3. **The mechanism case.** Howe and Purves 2005 show that natural scene statistics alone predict the illusion and that fully natural and human-constructed scenes give no obvious difference. This is why "the stimulus carries one culture's habitat" is a testable claim rather than a slogan.
4. **The cross-cultural method literature.** The opened Wikipedia pages document the emic/etic and pseudoetic problems, the WEIRD sampling bias, and repeated failures to replicate Western laboratory findings outside the West. These support the finding that "same task" and "same conditions" are measurements that most studies do not make.
5. **Metascience.** APS Registered Replication Reports provide the protocol shape that would settle the collapse refuter: shared, preregistered, multi-site, published regardless of outcome.

Overlap declaration: Howe and Purves is cited inside Amir and Firestone, so those two are one evidence pool, not two independent witnesses. The Wikipedia pages partly draw on the same cited literature as the primary papers. All three Wikipedia pages are tertiary. The framework essays share the framework author's evidence pool completely and carry no independent witness weight.

## Distribution: offer, do not push

Figure-grounded reasons:

- Fig 4 :22, "Only methods cross up. Only head starts come down." A recording sent before a residual is described is one occasion, not a generator. Lead with the per-slot split and the refuter.
- Fig 10 :42, "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the framework before giving a verdict has joined the frame being checked.
- Fig 9 :27-28, "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the shape claim were true before giving them the figure text.
- Fig 2 :40, "agreement about the world is worthless when the agreeing frames share an evidence pool." A list selected for people already inclined to agree produces a convention, not corroboration.
- Fig 7 :35, "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." Many agreeing replies are not a result.

**Recommended order in a reply:** (1) the per-slot residual split and the four refuters; (2) ask what they would count as a failure and record the answer; (3) then the figure links and the published debate, with the note that the figures, not this summary, are the authority.

## Hosting

The figure text and formula are already local framework files inside this project. I cannot host them, upload them, or send them to anyone. If they are shared, prefer an opt-in download page that lets a recipient decline contact over an attachment pushed to a list. Nothing in this folder is sent by this agent.
