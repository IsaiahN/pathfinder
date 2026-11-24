# Public links and distribution

All links below were fetched or read via the public search index on 2026-11-22. Where a direct fetch failed, that is stated rather than hidden.

## Verified sources actually opened

| what | URL | verified content |
|---|---|---|
| Nadini, Sun, Ubaldi, Starnini, Rizzo and Perra 2018, *Scientific Reports* | https://www.nature.com/articles/s41598-018-20908-x | Abstract and full Results/Discussion. "while the presence of tightly connected clusters inhibits SIR processes, it speeds up SIS phenomena." "communities act as a reservoir for the disease and favour the contagion process pushing the epidemic threshold to smaller values." |
| Rolls, Wang, McBryde, Pattison and Robins 2015, *PLOS ONE* | https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0142181 | Full article. "The global clustering coefficient is not sufficient to determine the full epidemiological impact of clustering." Also: "the specific nature of the clustering appears relevant for epidemic dynamics." |
| Volz, Miller, Galvani and Meyers 2011, *PLOS Computational Biology* | https://journals.plos.org/ploscompbiol/article?id=10.1371%2Fjournal.pcbi.1002042 | Full article. "Clustering always slows an epidemic, but simultaneously increasing clustering and the variance of the degree distribution can increase final epidemic size." Also: "the clustering coefficient (a single value for the entire network) alone is not always sufficient to determine the full epidemiological impact of clustering." |
| Welch 2011, *Viruses* (PMC) | https://pmc.ncbi.nlm.nih.gov/articles/PMC3127449 | Full article. "in a graph with no cycles, if an infection is introduced to a population at node i and there is a path leading to j then k, k can only become infected if j does first. However, where cycles are present, there may be multiple paths leading from i to k that do not include j." Also: "the complete transmission tree from an epidemic provides little information about clustering that is not present in the epidemic curve." |
| House and Keeling 2010, *PLOS Computational Biology* (PMC) | https://pmc.ncbi.nlm.nih.gov/articles/PMC2845652 | Full article. "Clustering increases the number of II pairs present at a given endemic state, and contact tracing can be viewed as hyper-parasitism on the network of infected individuals." |
| Abubakar, Aremu and Aphane 2025, *Applied Network Science* | https://link.springer.com/article/10.1007/s41109-025-00763-2 | Full article. "random contacts increase the effective reproduction number, while regular contacts reduce transmission due to local depletion of susceptibles." Also: high clustering "may result in localized outbreaks before propagation through the broader network." |
| Pastor-Satorras, Castellano, Van Mieghem and Vespignani 2015, *Reviews of Modern Physics* (arXiv HTML) | https://arxiv.org/html/1408.2701v2 | Opened; full text saved by the harness (8,688 lines). Review of clustering effects: Keeling 1999 and Newman 2003 reported decreasing outbreak size with clustering; the Newman result that "in clustered networks epidemics will reach most of the people who are reachable even for transmissibilities that are only slightly above the epidemic threshold" was read in the public search index extract of this same URL, not in the truncated direct-fetch preview. Reduced weight recorded in the ledger. |
| Danon, Ford, House, Jewell, Keeling, Roberts, Ross and Vernon 2011, *Interdisciplinary Perspectives on Infectious Diseases* (PMC) | https://pmc.ncbi.nlm.nih.gov/articles/PMC3062985 | Opened; full article (sections 1 to 2 and references in the direct fetch). Used for the contact-tracing and measurement framing, not for a quote from a section not read. |
| Keeling 1999, *Proceedings of the Royal Society B* (PMC) | https://pmc.ncbi.nlm.nih.gov/articles/PMC1689913 | Abstract and bibliographic record. "Whether an organism can successfully invade and persist in the short-term is highly dependent on the spatial correlations that develop in the early stages of invasion." Full text is PDF only; not used for any quote beyond the abstract. |
| Benton et al. 2016, *Proceedings of the Royal Society B* (PMC) | https://pmc.ncbi.nlm.nih.gov/articles/PMC4971205 | Abstract read via public search index. "The European badger (Meles meles) is the key wildlife reservoir of bovine TB" and social structure "can have a marked impact on the persistence and transmission of TB." Lower-overlap ecology witness. |
| Marescot et al. 2021, *Journal of Animal Ecology* | https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/1365-2656.13555 | Abstract read via public search index. "the probability of epidemic fade-out was consistently higher in populations with communal nurseries." Direct journal fetch 403; recorded. |
| Sah et al. 2018, *Journal of Animal Ecology* | https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/1365-2656.12786 | Abstract read via public search index. "infectious disease spread is driven primarily by the social organization of interactions in a group and not its size." |
| Silk et al. 2017, *BioScience* (PMC) | https://pmc.ncbi.nlm.nih.gov/articles/PMC5384163 | Abstract read via public search index. "Contact networks, behavioral interactions, and shared use of space can all have important implications for the spread of disease in animals." |
| Figures and formula, branch `general-agent` | https://github.com/IsaiahN/tether/tree/general-agent/figures | Listed as a public venue from the canonical figures README; not re-fetched this session (local canonical copies used instead). |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Opened directly. Simulation disclaimer and prestige rule quoted in `01` and `05`. |
| The Library of Babel: Locating the Book of Books | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Opened directly. Shape and bundle passages quoted in `01` and `05`. |

## Fetch failures, recorded honestly

- Warwick and LSHTM PDF copies of Danon et al., *Eight challenges for network epidemic models*: direct fetch returned "Unsupported fetched file content type: application/pdf". Full text was read via the public search index extract of the same paper, and the paper is used only for the claim that "epidemics on distinct network models having common degree distribution, clustering coefficient and degree correlation may have different properties (Ball et al., 2013)", which is the same point made by the Rolls and Volz sources that were opened directly.
- PubMed record for Newman 2003, *Physical Review E*: cookie gate on direct fetch. The abstract quote ("clustering decreases the size of epidemics, but also decreases the epidemic threshold") was read via the public search index and is marked reduced weight in the ledger.
- Cambridge `submission-guidelines` subpage 404; CDC EID author page 404; Royal Society Interface author page 403; Wiley journal home 403; PLOS `/submissions` 404; NetSci direct fetch transport error. Corresponding venue pages were reached via the public search index or the article pages opened above. No claim is made from a page that was not read.

## Wider literature that bears on the residual

1. **Two regimes, one structure.** Nadini et al. 2018 is the decisive low-overlap-without-the-framework result: the same modular structure inhibits SIR and favours SIS. This is the empirical anchor for reading Fig 12 :121 (cycle) through Fig 11 :49 (valence relative to residual).
2. **Flat formula.** Rolls et al. 2015 and Volz et al. 2011 both say the global clustering coefficient is not enough. That is Fig 12 :5 and :94 in the language of the field.
3. **Instrument.** Welch 2011 says the transmission tree does not recover clustering independently of degree sequence. That is the `gap` in `01` F7, reported as unreached rather than silence (Fig 8 :39).
4. **Reservoir in another closure.** The badger and communal-nursery studies give a disease-ecology witness that does not share the network-epidemiology modelling pool. They corroborate the mechanism shape, not the numerical claim.

## Distribution: offer, do not push

- **Fig 10 :42** — "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the whole framework before being asked for a verdict has joined the frame being checked. Send the residual and the refuter first.
- **Fig 9 :27-28** — "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see under permanent removal versus reinfection before giving them the article.
- **Fig 2 :35** — "Alignment is triangulation, not negotiation. A mirror cannot correct you." Do not ask for agreement.
- **Fig 2 :40** — "agreement about the world is worthless when the agreeing frames share an evidence pool." A list selected for receptiveness manufactures the disqualifying correlation.
- **Fig 4 :22** — "Only methods cross up. Only head starts come down." The formula is a generator, so offering it as a method after a verdict is recorded is permitted; sending a recording of one result is not.

**Recommended order in a reply:** (1) the separator and its four refuters; (2) ask what they would count as a failure, and which regime they work in; (3) record the verdict; (4) only then the three links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

**Stage 1.** Send the residual, the shape claim and the pre-registered refuter. Ask which quantity they are testing (speed or persistence) and what they would count as a failure. Record the answer before any theory is shown.

**Stage 2, opt-in only.** If they are curious, offer the figures link, the local verbatim figure text and the architecture essay. Their later agreement is never pooled as corroboration (Fig 2 :40).

**Stage 3.** Offer the formula as a method. Each user writes their own refuter, holds the degree sequence fixed, states the immunity regime, and labels the mode of what they get.

**Hard precondition:** stages 1 to 3 only work if the stage-1 output survives. The live strain S2 must be disclosed, and the two outcomes must not be blended into one "clustering effect". If they are blended, the output fails on contact.

## Host and send

Nothing is sent by this agent. Hosting the packet and sending the link is yours. Prefer an opt-in download page that lets a recipient decline contact over an attachment pushed to a list.
