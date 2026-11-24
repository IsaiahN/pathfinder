# Public links and distribution

Every URL below was opened on 2026-11-22. Failed fetches are recorded as failures at the end rather than quietly dropped.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Epidemic processes in complex networks | https://arxiv.org/abs/1408.2701 | Pastor-Satorras, Castellano, Van Mieghem and Vespignani; Rev. Mod. Phys. 87, 925 (2015). Abstract states that researchers "share a common interest in studying epidemic spreading and rely on similar models for the description of the diffusion of pathogens, knowledge, and innovation" and that "the major results concerning generalized social contagion processes are also presented." |
| Modularity and community structure in networks | https://arxiv.org/abs/physics/0602124 | M. E. J. Newman; Proc. Natl. Acad. Sci. USA 103, 8577 to 8582 (2006). Abstract: "Many networks of interest in the sciences, including a variety of social and biological networks, are found to divide naturally into communities or modules." |
| Mesoscale community organization governs epidemic onset and spread in metapopulations | https://arxiv.org/abs/2504.05653 | Haoyang Qian and Malbor Asllani; arXiv:2504.05653, v3 2025. Abstract: "highly connected groups accelerate and amplify outbreaks, while less connected ones dampen spread." Also: "community structure fundamentally governs the shape of epidemics in complex, networked populations." |
| Household size can explain 40% of the variance in cumulative COVID-19 incidence across Europe | https://arxiv.org/abs/2602.15447 | Contreras, Donges, Filinski et al.; arXiv:2602.15447, 2026. Abstract: larger households "boost transmission by acquiring external infections more frequently and subsequently transmitting them back into the community" and "mandatory interventions primarily modulate contagion between households rather than within them." |
| arXiv search listing | https://arxiv.org/search/?query=community+structure+epidemic+spreading&searchtype=all&abstracts=show&order=-announced_date_first&size=50 | "Showing 1 to 50 of 92 results for all: community structure epidemic spreading." Used to discover the mesoscale and overlapping-node papers, not as a witness. |
| Complex contagion | https://en.wikipedia.org/wiki/Complex_contagion | States that multiple exposures are required, attributes the weak-ties result to Centola and Macy (2007), and gives the Easley and Kleinberg threshold framing. Article carries original-research and citation maintenance tags; used as a mapping aid only. |
| Modularity (networks) | https://en.wikipedia.org/wiki/Modularity_(networks) | "Networks with high modularity have dense connections between the nodes within modules but sparse connections between nodes in different modules." Also records overfitting and resolution-limit failures of modularity maximisation. |
| Community structure | https://en.wikipedia.org/wiki/Community_structure | Defines non-overlapping and overlapping communities and states: "Existence of communities also generally affects various processes like rumour spreading or epidemic spreading happening on a network." Records the detectability transition. |
| Network Science Society | https://netscisociety.net/ | Public society site with a contact page, a Call for Papers NetSci 2027, the NetPlace community platform and a public contact address. |
| arXiv submission help | https://info.arxiv.org/help/submit/index.html | Public submission overview for TeX and PDF, category cross-listing and ancillary files. |
| Journal of Physics: Complexity | https://iopscience.iop.org/journal/2632-072X | Fully open access, scope "across all areas of complex systems and networks", public "Submit an article" route. Its listing includes Chowdhary et al., "Simplicial contagion in temporal higher-order networks" (2021), whose abstract states that critical mass effects can emerge below the pairwise epidemic threshold and that the outcome depends on the size of the initial seed. |
| Figures repository | https://github.com/IsaiahN/tether/tree/general-agent/figures | Public branch `general-agent`, figures folder. |
| Figures README | https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md | Canonical usage rule; the local copy is `FRAMEWORK/reference/FIGURES_README_canonical.md`. |

## Wider literature that bears on the two regimes

1. **Structure alone is not the sign.** Qian and Asllani (2025) report that highly connected groups amplify while less connected groups dampen. That is the reduce side, and it is a statement about internal connectivity at the mesoscale, not about bridge counts alone. It corroborates F3 and the structure/process split in F2.
2. **The boundary can pump.** Contreras et al. (2026) decompose within-household from out-household transmission and find interventions act mainly between households while households acquire and re-export infection. That is the sustain side in F4, and it is the same cut doing both jobs at different orders.
3. **Contagion order changes the sign.** The Wikipedia complex contagion page, attributing to Centola and Macy (2007), states that weak ties and small worlds are good for simple contagions but "for complex contagions, weak ties and small worlds can slow diffusion." This is the union split in F6, not a contradiction with item 2.
4. **The threshold is not always pairwise.** The Chowdhary et al. abstract on the journal listing page reports critical-mass effects below the pairwise threshold and seed-size dependence. That is the cycle and catalyst case in F4.
5. **The boundary must be detectable.** The Wikipedia community structure page records an information-theoretic detectability transition. An undetectable boundary cannot be the subject of a measured crossover. This supports the instrument limit in F8.

Agreement among these sources is not independent corroboration of the framework. Several draw on the same network-science evidence pool, and the essays are all by the framework author. Overlap is recorded per row in `10_source_ledger.csv`.

## Distribution: offer, do not push

Figure-grounded rules:

- **Fig 10 :52** — "Bring a characterised residual, never the source." Send F1 and the five refuters first. Do not attach the whole architecture to a first message.
- **Fig 2 :35** — "Alignment is triangulation, not negotiation. A mirror cannot correct you." A recipient selected for likely agreement cannot check anything.
- **Fig 9 :27-28** — "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the shape claim were true before giving them the article.
- **Fig 1 :19** — "The residual is indexed by object slot, not aggregated." Ask about a specific community or a specific cross-boundary event, not about "community structure in general."
- **Fig 9 :60** — "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." A journal's impact factor or a researcher's fame is a contact-cost estimate, never an evidence score.

**Recommended order in a reply:** (1) the shape claim and its refuter, (2) ask what they would count as a failure, (3) record that verdict, (4) only then the links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

1. **Stage 1:** validate the output against the ground. The recipient checks the four-cell regime table and the five refuters without holding the framework's interior. If it fails, stop.
2. **Stage 2, opt-in only:** if curious, offer the figure links. Their agreement with the theory after this point is never pooled as corroboration, because the source was shown after the verdict was recorded (Fig 2 :40).
3. **Stage 3:** offer the formula as a method to reuse. A generator may cross; a recording may not (Fig 4 :22). Each user must write their own refuter and state their own mode.

## Failed fetches, recorded honestly

- `https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2995042/` was fetched and is **not** the Centola 2010 paper; it is a 2010 Nucleic Acids Research paper on SIRT1 and senescence. Not cited.
- `https://pubmed.ncbi.nlm.nih.gov/20813952/` returned a cookie-enable wall. Not cited. The Centola 2010 reference was therefore used only as it appears in the Wikipedia complex contagion reference list, and the substantive quotes come from that article page and the underlying Centola and Macy claim as reported there.
- `https://arxiv.org/abs/cond-mat/0602117` was fetched and is a ZnO quantum-well paper, not Newman's modularity paper. Not cited. The correct Newman identifier is `physics/0602124`, which was fetched and is cited.
- `https://academic.oup.com/comnet/pages/how-to-submit` returned HTTP 403. The Journal of Complex Networks is therefore **not** listed in `03_public_contact_points.csv`, since its submission route could not be verified this session.

## Hosting

No archive was created and nothing was sent by this agent. Hosting the packet and contacting anyone is yours to do. If you host it, prefer an opt-in download page over an attachment pushed to a list, so a recipient can decline contact without replying.
