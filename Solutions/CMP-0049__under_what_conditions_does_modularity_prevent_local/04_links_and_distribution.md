# Public links, wider literature and distribution

All links below were opened on 2026-11-22. Where a publisher page was paywalled, the abstract was read through Europe PMC and that is stated. The web search integration returned no results for four separate queries, so sources were located by direct fetch of known URLs and by the Europe PMC REST endpoint. No URL was cited without being opened.

## 1. Verified links actually fetched

| what | URL | verified content and verbatim quote |
|---|---|---|
| Catastrophic cascade of failures in interdependent networks, Buldyrev et al., Nature 464, 1025-1028 (2010) | https://www.nature.com/articles/nature08932 | Abstract read. "failure of nodes in one network may lead to failure of dependent nodes in other networks. This may happen recursively and can lead to a cascade of failures." Also "a broader degree distribution increases the vulnerability of interdependent networks to random failure, which is opposite to how a single network behaves." |
| Error and attack tolerance of complex networks, Albert, Jeong and Barabási, Nature 406, 378-382 (2000) | https://www.nature.com/articles/35019019 | Abstract read. "although key components regularly malfunction, local failures rarely lead to the loss of the global information-carrying ability of the network." Also "error tolerance is not shared by all redundant systems" and "error tolerance comes at a high price in that these networks are extremely vulnerable to attacks". |
| Modularity and community structure in networks, Newman, PNAS 103, 8577-8582 (2006) | https://pmc.ncbi.nlm.nih.gov/articles/PMC1482622/ | Full text read. "the appearance of densely connected groups of vertices, with only sparser connections between groups". Also "it could provide evidence for a modular view of the network's dynamics, with different groups of nodes performing different functions with some degree of independence". |
| Modularity (networks), Wikipedia, accessed 2026-11-22 | https://en.wikipedia.org/wiki/Modularity_(networks) | Full page read. "Networks with high modularity have dense connections between the nodes within modules but sparse connections between nodes in different modules." Also "modularity suffers a resolution limit and, therefore, it is unable to detect small communities." |
| Cascading failure, Wikipedia, accessed 2026-11-22 | https://en.wikipedia.org/wiki/Cascading_failure | Full page read. "a failure in a system of interconnected parts in which the failure of one or few parts leads to the failure of other parts, growing progressively as a result of positive feedback." Also "Monitoring the operation of a system, in real-time, and judicious disconnection of parts can help stop a cascade." And "systemic risk is not due to individual institutions per se, but due to the interconnections." |
| Stability of ecological communities and the architecture of mutualistic and trophic networks, Thébault and Fontaine, Science 329, 853-856 (2010) | https://doi.org/10.1126/science.1188321 | Paywalled; abstract read via Europe PMC REST (`EXT_ID:20705861`). "the stability of trophic networks is enhanced in compartmented and weakly connected architectures" while "a highly connected and nested architecture promotes community stability in mutualistic networks." |
| Vulnerable connectivity caused by local communities in spatial networks, Mou and Hayashi, PLoS One 20(7), e0327203 (2025) | https://pmc.ncbi.nlm.nih.gov/articles/PMC12221043/ | Full text read. "the robustness is weakened by strong local communities in spatial networks." Also "networks with stronger communities (higher Q) tend to have lower robustness index RRB." And "These results highlight the potential of long-distance links in mitigating the negative effects of local community on the robustness." |
| Systemic risk mitigation in supply chains through network rewiring, Zelbi, Ialongo and Thurner, Scientific Reports 16, 12334 (2026) | https://pmc.ncbi.nlm.nih.gov/articles/PMC13079837/ | Full text read. "local firm failures can propagate through interdependencies and lead to cascading supply chain disruptions." Also "systemic risk can be considerably mitigated by 16-50% without reducing the production output of firms" and "We find no particular topological measure that explains systemic risk mitigation." |
| The Recursive Self-Improvement Trap, Isaiah N, adventuresinml (Substack), 2026-11-19 | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Full text read. "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." Also "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." |
| The Hard Problem is About Source, Isaiah N, adventuresinml (Substack), 2026-08-28 | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Full text read. "If several paths create the same behavior, then behavior is a projection with lossy information". Also "It was proven wrong not by argument, but by the arrival of a better instrument." |
| The Library of Babel: Locating The Book of Books, Isaiah N, adventuresinml (Substack), 2026-10-02 | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Full text read. "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." Also "Perhaps your problem was a bundle or conflation of several problems masquerading as one?" |
| Decoding Tacit Knowledge, Isaiah N, adventuresinml (Substack), 2026-11-10 | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | Full text read. "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." Also "Two frames that overlap almost completely are 'one frame wearing two names'." |

Local canonical files used for every `Fig N :line` citation:

- `FRAMEWORK/reference/03-FIGURES_TEXT.md`
- `FRAMEWORK/reference/FIGURES_README_canonical.md`
- `FRAMEWORK/figures/THE_FORMULA.md`

## 2. The genuine conflict in the wider literature, and what it does

Three opened results do not line up as a single lever:

1. Thébault and Fontaine (2010): compartmented and weakly connected architectures enhance stability in **trophic** networks, but nested and highly connected ones enhance stability in **mutualistic** networks. The same measured outcome, "stability", responds oppositely to connection depending on interaction type.
2. Mou and Hayashi (2025): strong local communities (high Q) **weaken** connectivity robustness in spatial infrastructure networks; long-distance links mitigate the damage. Here more modularity is worse for the measured outcome.
3. Albert, Jeong and Barabási (2000) and Buldyrev et al. (2010): local failures are often contained in single networks, but coupling across networks creates recursive cascades; error tolerance and attack vulnerability are opposite faces of the same wiring.

Under the framework's conflict rule this does **not** flip the figure verdict. It sends the search back to the census. The re-census (audit F6) is that the question is a union of structure and dynamics. Fig 4 :21 supplies the reason the results differ: "The membrane is the boundary between the sizes, and the rule about what may cross it. Not a wall: a filter with a direction." A boundary that filters overload may fail against a targeted bridge attack; a compartment that contains a trophic cascade may be the wrong architecture for a mutualistic one.

Note on evidence pools: the four Isaiah N essays and the figures share an author and an evidence pool, so their agreement is expected and carries little independent weight. The network-science sources are from different fields and different authors, but several of them cite the same lineage (Newman, Barabási, Motter and Lai), so overlap is recorded per row in `10_source_ledger.csv`. Agreement from a shared pool is one witness, not two (Fig 2 :40).

## 3. Distribution rules: offer, do not push

- **Fig 4 :22:** "Only methods cross up. Only head starts come down." Send the derivation and the refuter, not a conclusion dressed as knowledge.
- **Fig 10 :42:** "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the whole framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28:** "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the containment-shape were true before giving them any theory.
- **Fig 2 :40:** "agreement about the world is worthless when the agreeing frames share an evidence pool." Later agreement is never pooled as corroboration.
- **Fig 2 :35:** "Alignment is triangulation, not negotiation. A mirror cannot correct you." Do not ask for trust or endorsement.
- **Seat Map :163:** "High correlation is disqualifying for a verdict and efficient for a convention." A list selected for receptiveness manufactures the disqualifying correlation.

**Recommended order in a reply:** (1) the union claim and the four refuters; (2) ask what they would count as a failure; (3) record their verdict; (4) only then the links, with the note that the figures, not the summary, are the authority.

## 4. The two-stage offer

**Stage 1.** Send the residual, the containment-shape and the pre-registered refuter. The recipient checks it against their own ground without holding the framework's interior (Fig 10 :52; Fig 2 :45).

**Stage 2, opt-in only.** If they are curious, offer the three framework links above. A stage-2 verdict is a conversation, not corroboration, and the stage-1 verdict is the one that counts.

**Stage 3, opt-in only.** Offer the formula as a method to reuse. It is a generator, so giving it away does not give away an answer. Each user writes their own refuter and states their own mode, because "a frame cannot check the direction of its own question" (Formula "Direction").

**Hard precondition:** stages 1 to 3 only work if the stage-1 output survives. Send `08_expert_verification_packet.md`, ask what would refute it, and do not pool later agreement as evidence.

## 5. What this agent cannot do

I cannot host or send anything, and I did not contact any venue. The files in `03_public_contact_points.csv` are public institutional contact and submission points for you to use. Prefer an opt-in submission route over an attachment pushed to a list.
