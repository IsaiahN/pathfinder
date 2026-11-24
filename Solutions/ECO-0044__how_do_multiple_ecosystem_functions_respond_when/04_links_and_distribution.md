# Public links and distribution

All links below were fetched and read on 2026-11-23 unless a failure is recorded explicitly. Quotes are verbatim from the opened pages.

## Verified sources actually opened

| what | URL | what was verified in the opened page |
|---|---|---|
| Hector and Bagchi 2007, *Biodiversity and ecosystem multifunctionality* | https://www.nature.com/articles/nature05947 | Nature 448: 188-190, published 12 July 2007. Abstract: *"appreciable differences in the sets of species influencing different ecosystem functions, with average proportional overlap of about 0.2 to 0.5."* Also: *"as more ecosystem processes were included in our analysis, more species were found to affect overall functioning."* Editorial summary: *"different species often influence different ecosystem functions, so studies that look at just one ecosystem process may miss the big picture."* |
| Bradford et al. 2014, *Discontinuity in the responses of ecosystem processes and multifunctionality* | https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1073/pnas.1421203112%20OR%20DOI:10.1073/pnas.1413707111%20OR%20DOI:10.1073/pnas.1419515112&format=json&resultType=core | Europe PMC REST query returned three records with abstracts and full-text links. Bradford abstract: *"only two of the five ecosystem processes also responded positively to increasing complexity, whereas the other three responded neutrally or negatively."* Also: *"a statistical fallacy analogous to Simpson's paradox (where aggregating data obscures causal relationships)"*. Direct PNAS fetches returned 403, so the abstract was read through this API and is marked as such in the ledger. |
| Byrnes et al. 2014 letter and Bradford et al. 2014 reply | same Europe PMC query | Titles only: *"Multifunctionality does not imply that all functions are positively correlated."* and *"Aggregation can obscure understanding of ecosystem multifunctionality."* Open text was not read, so these titles are metadata, not substantive quotes; they are used only as pointers. |
| Soliveres et al. 2016, *Biodiversity at multiple trophic levels is needed for ecosystem multifunctionality* | https://www.nature.com/articles/nature19092 | Nature 536: 456-459. Abstract: *"On average, three trophic groups influenced each ecosystem service, with each trophic group influencing at least one service."* Also: multitrophic richness had stronger positive effects than richness in any individual trophic group. |
| Manning et al. 2018, *Redefining ecosystem multifunctionality* | https://www.nature.com/articles/s41559-017-0461-7 | Nature Ecology & Evolution 2: 427-436, Perspective. Abstract: *"the redefinition of multifunctionality as a property that exists at two levels: ecosystem function multifunctionality and ecosystem service multifunctionality."* Reference list names Byrnes et al. 2014 and Bradford et al. 2014 as the methods debate. |
| Albert et al. 2026, *Multitrophic interaction networks mediate biodiversity effects on ecosystem multifunctionality* | https://www.nature.com/articles/s41467-026-75046-0 | Nature Communications 17: 5787, open access. Abstract: *"These findings emphasize that ecosystem service provisioning does not only rely on biodiversity across trophic levels, but to a similar degree on how species interact."* Results: *"Most indices of network structure had consistently stronger direct effects on ecosystem multifunctionality than tree species richness."* and network structure had significant effects on *"73.8% of all possible combinations of individual network indices and functions"*. |
| Simpson's paradox, Wikipedia | https://en.wikipedia.org/wiki/Simpson%27s_paradox | Definition: *"a trend appears in several groups of data but disappears or reverses when the groups are combined."* Genuinely low overlap with ecology: mathematics and statistics. Includes Pearl's back-door criterion and the warning that right interpretation needs a causal model, not the table alone. |
| The Library of Babel: Locating The Book of Books | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Isaiah N, Oct 02 2026. *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* Also the bundling passage used in `05`. |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, Nov 19 2026. *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* Also the simulacra and validator lines used in `05`. |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Isaiah N, Aug 28 2026. *"If several paths create the same behavior, then behavior is a projection with lossy information"* and *"An instrument that can't distinguish these cases demonstrates its own inadequacy, it cannot claim anything substantial about what is being measured or what causes it."* |
| ESA publications | https://esa.org/publications/ | Public author routes, journals portal, editorial staff and policies. Used for the contact CSV. |
| iDiv | https://www.idiv.de/en.html | *"We measure and monitor how this diversity is changing, and how it affects ecosystem functioning and services."* Synthesis centre, working groups, calls and public contact pages listed. |
| NCEAS | https://www.nceas.ucsb.edu/ | *"NCEAS accelerates discoveries that enhance our understanding of the world and benefit people and nature."* Public calls for proposals and working-group listings linked. |

### Fetch failures and partial reads, recorded honestly

- https://www.pnas.org/doi/10.1073/pnas.1413707111 and https://www.pnas.org/doi/10.1073/pnas.1421203112 returned HTTP 403 to automated fetch. The abstract of Bradford et al. 2014 was read via the Europe PMC REST API instead; the reply and the Byrnes letter are recorded as titles only.
- https://www.nature.com/natecolevol/for-authors hit a redirect loop (more than 10 redirects) and was not read. It is listed in `03` with an explicit verify-before-use note; the verified article page is given as its source_url.
- https://en.wikipedia.org/wiki/Biodiversity_and_ecosystem_functioning returned 404. It was not replaced or cited.
- The ESA calls page and iDiv calls page linked in `03` were not opened directly; the parent pages that link to them were opened. The CSV notes say so.
- Five of the eight essays were not reopened this session. Their mapping is carried from the completed exemplar's `05_what_shape_means.md` and marked as carried in `05` section 6.

## Four findings in the wider literature that bear directly on this question

1. **The species sets differ by function.** Hector and Bagchi 2007 found only about 0.2 to 0.5 proportional overlap among the species affecting different functions. This is Fig 11 :49-51 in field data: valence is relative to the residual.
2. **The index can rise while functions do not.** Bradford et al. 2014 found a consistent positive effect on three common multifunctionality indices while three of five processes were neutral or negative, and described it as a Simpson's-paradox-like aggregation fallacy. This is Fig 1 :22 and Fig 10 :25 in field data.
3. **The number of contributing groups is more than one.** Soliveres et al. 2016 found that on average three trophic groups influenced each service, and that multitrophic richness mattered more than any single group's richness. This is Fig 9 :54-57 and Fig 11 :47 in field data.
4. **The arrangement mediates the richness effect.** Albert et al. 2026 found network structure often had stronger direct effects than tree species richness, and affected 73.8% of network-index/function combinations. This is Fig 12 :5 and :94 in field data.

None of these is a figure quote. All are world corroboration only. The ecology sources share the BEF literature and count as one evidence pool against the statistics source; the essays share the framework author's pool completely. Overlap is recorded in `10_source_ledger.csv`.

## Distribution: offer, do not push

- **Fig 10 :52** - *"Bring a characterised residual, never the source."* Send the shape claim and its refuter first. Sending the full framework before anyone has described a function-level residual sends a recording, not a generator.
- **Fig 10 :42** - *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before giving a verdict has joined the frame being checked.
- **Fig 9 :27-28** - *"describe it before you go looking, or any frame you pick will seem to fit"* Ask what they would expect to see if the per-slot claim were true before giving them the literature list.
- **Fig 2 :35** - *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Do not select recipients for likely agreement.
- **Fig 9 :60** - *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* An index is a screening filter; it is never the witness for a per-function verdict.

**Recommended order in a reply:** (1) the shape claim and the four refuters; (2) ask what they would count as a failure and which function they would check first; (3) record that verdict; (4) only then the source links, with the note that the figures, not the summary, are the authority.

## The two-stage offer, with a third stage

1. **Stage 1, output first.** The recipient checks the per-slot shape claim against a function they know. No framework material is shown. This is Fig 10 :52 and Fig 2 :45 *"Frames range against the ground. They do not negotiate with it."*
2. **Stage 2, opt-in only.** If curious, they read the sources. Their stage-1 verdict is already recorded and is never pooled as corroboration afterwards (Fig 2 :40).
3. **Stage 3, method only.** Offer the figure set and the formula as a generator. Fig 4 :22 *"Only methods cross up. Only head starts come down."* Each user writes their own refuter and states their own mode, because a loop cannot check the direction of its own question.

**Disclosure constraint.** This folder is a simulated derivation, not a ground reading. Any submission to a journal or meeting must disclose that the argument was produced by an LLM process checked against the figures, and must not present it as an empirical result. Several ecology journals require data and code availability statements and have policies on AI-assisted writing; check the current policy of the target venue before submitting. The public contact routes above are opt-in, not a licence to push material.
