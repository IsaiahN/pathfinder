# Public links and distribution

Every link in the tables below was fetched on 2026-11-23 unless marked otherwise. Failed fetches are recorded rather than hidden, and pages that returned an error are not relied on as read sources in `10_source_ledger.csv` except where the article content was genuinely obtained through an open mirror and that mirror is named.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Nature: Getting the measure of biodiversity | https://www.nature.com/articles/35012221 | Purvis and Hector 2000, Nature 405:212-219, published 2000-05-11. Abstract read directly: *"although biodiversity can never be fully captured by a single number"*. Public figure captions on richness and evenness. |
| PMC: Choosing and using diversity indices | https://pmc.ncbi.nlm.nih.gov/articles/PMC4224527/ | Morris et al. 2014, Ecology and Evolution 4(18):3514-3524, open access, full text read. *"there is no single index that adequately summarizes the concept"*; *"when considering complex interactions, the choice of index can profoundly alter the interpretation of results"*; Hill's series and the order-q continuum. |
| Oikos: Entropy and diversity | https://nsojournals.onlinelibrary.wiley.com/doi/full/10.1111/j.2006.0030-1299.14714.x | Jost 2006, Oikos 113(2):363-375. Full text read. *"A diversity index thus creates equivalence classes among communities."* *"The order of a diversity indicates its sensitivity to common and rare species."* Open PDF at http://www.loujost.com/Statistics%20and%20Physics/Diversity%20and%20Similarity/JostEntropy%20AndDiversity.pdf was also read for the Hill-number derivation. |
| PubMed: Le Bagousse-Pinguet et al. 2019 | https://pubmed.ncbi.nlm.nih.gov/30948639 | PNAS 116(17):8419-8424, abstract read. *"These biodiversity attributes do not necessarily relate to each other and may have contrasting effects on ecosystem functioning."* Detailed methods, including exclusion of evenness for strong correlation with functional dispersion, were read from the search excerpt of the PNAS page. |
| Biological Conservation: Santini et al. 2017 | https://www.sciencedirect.com/science/article/abs/pii/S0006320716303305 | Abstract and highlights obtained via search result and three institutional repository mirrors (Tel Aviv University, Ben-Gurion University, University of Auckland). *"separate metrics of species composition, richness, and abundance should be reported instead of (or in addition to) composite metrics like the Shannon index."* Direct page fetch returned HTTP 400 once; not relied on as a direct fetch. |
| Ecological Indicators: Lyashevska and Farnsworth 2012 | https://www.sciencedirect.com/science/article/abs/pii/S1470160X11004183 | Abstract and highlights obtained via search result. *"Biodiversity seems irreducibly three-dimensional."* *"Species richness captured only 21% of diversity among communities."* Direct fetch returned HTTP 400; recorded as search-result-only with the publisher URL for provenance. |
| Functional Ecology: Mouchet et al. 2010 | https://besjournals.onlinelibrary.wiley.com/doi/10.1111/j.1365-2435.2010.01695.x | Abstract obtained via search result. *"Most published indices are highly correlated"* while FEve and FDiv were *"rather independent to all the others."* Direct fetch returned HTTP 403; search-result content used and flagged as such. |
| Ecological Society of America publications | https://www.esa.org/publications/ | Opened. Public author routes, 'Submit a manuscript', data papers, open access and policy pages. General institutional address only. |
| British Ecological Society journals | https://www.britishecologicalsociety.org/publications/journals/ | Opened. Seven society journals including Methods in Ecology and Evolution and Functional Ecology; double-anonymised review on most of the portfolio. |
| IPBES home | https://www.ipbes.net/ | Opened. Assessments, public stakeholder meetings and an About/Contact information route. |
| Convention on Biological Diversity home | https://www.cbd.int/ | Opened. Public contact, decisions and COP processes; monitoring and reporting framework. |
| iDiv home | https://www.idiv.de/en.html | Opened. Public synthesis centre, events and contact routes; the site states it measures and monitors biodiversity change. |
| Framework verbatim figure text (local) | `local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md` | Opened and grepped; all `Fig N :line` quotes checked against it. |
| Canonical figures README (local) | `local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md` | Opened; *"the quotes are the authority, not this summary"* and the shape-not-a-name limit. |
| The formula (local) | `local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md` | Opened; eight steps, mode rule, Direction. |
| Library of Babel essay | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Opened. *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* Also the bundle warning that a problem may be *"a bundle or conflation of several problems masquerading as one."* |
| Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Opened. *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* Prestige section read. |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Opened. Metamerism case: an instrument reading green *"cannot comment on the source"*; *"If several paths create the same behavior, then behavior is a projection with lossy information."* |
| Decoding Tacit Knowledge | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | Opened. *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."* |

Four other essays in the canonical eight (How Intelligence Actually Works, How a Society of Agents Would Work, They are Scanning Books When They Should, Arrival of the Fittest: The Tether) were not re-opened this session. They are mapped in `05_what_shape_means.md` through the exemplar's canonical mapping and are not used as independent witnesses. Fetch failures: Wiley Functional Ecology journal page 403, MDPI Diversity journal page 403, one ScienceDirect direct fetch 400. None of those failed pages is treated as a read source.

## What the wider literature adds

1. **The question really is a union, and the facets do not move together.** Purvis and Hector 2000 makes the multidimensional case; Le Bagousse-Pinguet et al. 2019 shows taxonomic, phylogenetic and functional richness can have contrasting effects; Santini et al. 2017 shows different metrics respond inconsistently to the same change. Together these are the world-side reason to split before choosing an instrument. They share broad ecology pools and cite one another, so they are one witness family, not three.
2. **The overlap test is decidable.** Mouchet et al. 2010 and Lyashevska and Farnsworth 2012 both report near-redundancy among widely used indices. That is exactly Fig 2 :31's independence quantity measured in ecology terms, and it makes the figure rule operational.
3. **Per-slot reporting is already a recommendation in the field.** Santini et al. 2017 advise reporting composition, richness and abundance separately rather than a composite Shannon index. This corroborates Fig 1 :19 and :22 from a separate evidence pool.
4. **A spectrum is an instrument improvement, not a new atom.** Jost 2006 and Hill's series turn a single index into a family parameterised by order q, with sensitivity to rare versus common species set by q. This is the nearest thing in the literature to Fig 6 :32's "worse instrument already returning something," and it comes from mathematics and information theory, a low-overlap field relative to the monitoring literature.

No world source conflicts with the figure-derived verdict. The conflict rule was therefore not triggered. Where the figure verdict and the literature agree, they are treated as two instruments pointed at the same thing only when their evidence pools differ; the essays share the framework author's pool completely and carry no independent witness weight.

## Distribution rules

Figure-grounded reasons for the order of contact:

- **Fig 4 :22-25**: *"Only methods cross up. Only head starts come down. A recording carried upward looks like knowledge and is a description of one occasion."* Sending the full framework before anyone has described a residual sends a recording, not a generator. Lead with the shape claim and the refuter; offer the links after.
- **Fig 10 :42**: *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the entire framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28**: *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see if the shape claim were true before giving them the article.
- **Fig 2 :35 and :40**: alignment is triangulation, not negotiation; agreement from a shared evidence pool is disqualifying for a verdict. Do not select recipients for likely agreement and do not pool later agreement as corroboration.

**Recommended order in a reply:** (1) the shape claim and its four refuters; (2) ask what they would count as a failure; (3) only then the links, with the note that the figures, not the summary, are the authority; (4) offer the formula as a method to reuse, with the instruction that each user names their own ground and writes their own refuter.

## The two-stage offer

1. **Stage 1:** send the residual, the shape claim and the pre-registered refuter. Ask what they would count as a failure. Record their verdict *before* showing any theory.
2. **Stage 2, opt-in only:** if curious, offer the three primary source links. The figures are the authority.
3. **Stage 3:** offer the formula as a method, with the rule that each user writes a fresh refuter and states a mode.

Stage 1 before stage 2 is Fig 10 :52 and Fig 2 :45: frames range against the ground, they do not negotiate with it. Stage 2 is opt-in by construction: once a recipient has absorbed the theory, their agreement stops being evidence. Stage 3 sends a method, which is permitted by Fig 4 :22, but it still needs a ground per problem; Formula "Direction" says a frame cannot check the direction of its own question.

**Zip.** No archive is created or hosted by this agent. If the author hosts the packet, prefer an opt-in download page that lets a recipient decline contact over an attachment pushed to a list. Hosting and sending are the author's to do.
