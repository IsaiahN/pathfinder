# Public links and distribution

All links in the table were opened on 2026-11-22. Links marked "search extraction" appeared in a web search result whose text was read but whose direct PDF fetch was unsupported; those are recorded that way in `10_source_ledger.csv`. Links marked "listed" appeared on a fetched page but were not opened directly, and are recorded that way in `03_public_contact_points.csv`. Two target venues returned HTTP 403 or a transport error and are explicitly marked unverified.

## 1. Verified sources opened this session

| what | URL | what the page actually contained |
|---|---|---|
| Figure text, line numbered | local `FRAMEWORK/reference/03-FIGURES_TEXT.md` | verbatim text of Figures 1 to 13 plus Operators and Symbols tables; all quotes in this folder came from here |
| Canonical usage rule | local `FRAMEWORK/reference/FIGURES_README_canonical.md` | *"the quotes are the authority, not this summary"*; re-census rule; *"a shape, not a name"* |
| Formula | local `FRAMEWORK/figures/THE_FORMULA.md` | eight steps, mode rule, habitat, closure, composition, round trip R_T |
| Porter 1987, full text | https://management.web.uniroma1.it/sites/default/files/optional%20reading%201%20porter_0.pdf | search extraction; *"imagined synergy is much more common than real synergy"*; *"paper synergy"*; transfer of skills and sharing of activities as the two value-chain interrelationships; direct PDF fetch unsupported |
| Porter 1987, HBR page | https://hbr.org/1987/05/from-competitive-advantage-to-corporate-strategy | directly fetched; article metadata and opening paragraph on the darling and stepchild of management practice |
| Berger and Ofek 1995 abstract | https://www.sciencedirect.com/science/article/pii/0304-405X(94)00798-6 | directly fetched via search; *"13% to 15% average value loss from diversification"*; loss smaller within the same two-digit SIC code; overinvestment and cross-subsidization |
| Lamont and Polk 2002 | https://personal.lse.ac.uk/polk/research/diversityjfe.pdf | search extraction; exogenous changes in diversity negatively related to firm value; inefficient internal capital markets hypothesis |
| Iversen 2000 | https://research-api.cbs.dk/ws/portalfiles/portal/59101216/7236.pdf | search extraction; synergy attributed to sharing indivisible assets and to horizontal and vertical complementarities |
| Brooks, The Mythical Man-Month | https://ia801600.us.archive.org/12/items/MythicalManMonth/Brooks%201974%20The%20Mythical%20Man-Month-%20Essays%20on%20Software%20Engineering%2C%20Anniversary%20Edition%20%282nd%20Edition%29.pdf | search extraction; *"Adding manpower to a late software project makes it later"*; communication overhead grows nonlinearly with team size |
| Simon 1962, The Architecture of Complexity | https://public.econ.duke.edu/~kdh9/Source%20Materials/Zurich%20Papers/Simon%20Ch.%208.pdf | search extraction; near decomposability; *"Intra-component linkages are generally stronger than intercomponent linkages"* |
| Angeler et al. 2018 | https://pmc.ncbi.nlm.nih.gov/articles/PMC6223862 | directly fetched; cross-scale resilience, within-scale and cross-scale redundancy, response diversity |
| Mori et al. 2013 | https://onlinelibrary.wiley.com/doi/10.1111/brv.12004 | directly fetched via search; response diversity as variation of responses to environmental change, insurance hypothesis |
| Library of Babel essay | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | directly fetched; shape as a narrowed set of books; bundle of problems; question as tether; *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"* |
| Recursive Self-Improvement Trap essay | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | directly fetched; LLM simulation is not a testable output; prestige is not action; output only as good as validator |
| Hard Problem is About Source essay | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | directly fetched; metamerism; a reading *"cannot comment on the source"*; *"The answer is unreached until a better instrument exists"* |
| AOM 2027 Call for Submissions | https://www.aom.org/events/annual-meeting/submitting/call-for-submissions/ | directly fetched; 12 January 2027 deadline; STR and OMT tracks listed |
| SSRN homepage | https://www.ssrn.com/ | directly fetched; open preprint server, 69 disciplines, submission and contact routes |

---

## 2. What the wider literature bears on the question

**One evidence pool, one witness.** Porter, Berger and Ofek, Lamont and Polk and Iversen all address corporate diversification. They partly agree (relatedness helps, internal capital markets can destroy value) and partly disagree (discount causality), but they draw on the same conferences, the same citation chain and the same Compustat segment-data lineage. Per Fig 2 :31, *"Independence, between two frames, is how little they draw on the same evidence."* Their agreement is one witness, not four. Lamont and Polk's exogenous-shock design buys independence from the endogeneity that plagues the discount literature, but it still reports an average, not a named unit (Fig 1 :22).

- Porter 1987 starts from the observation that *"imagined synergy is much more common than real synergy"* and warns of *"paper synergy"*. He identifies two interrelationships that may create synergy: transfer of skills and sharing of activities. He reports that firms undertake diversification that fails the essential tests and talk *"merely of such vague notions as 'synergy' and 'corporate fit'"*. This is the business-pool description of a mute union with no priced bond (F2).
- Berger and Ofek 1995 report a *"13% to 15% average value loss from diversification"*, that the loss is smaller within the same two-digit SIC code, and that overinvestment and cross-subsidization contribute. The first two facts are the apparent conflict resolved by re-census R1 in `01`; the third is a mechanism-level corroboration of channel failure (F4).
- Lamont and Polk 2002 find that *"exogenous changes in diversity, due to changes in industry investment, are negatively related to firm value"*, consistent with inefficient internal capital markets. This corroborates the cost side, not the per-unit shape.
- Iversen 2000 attributes synergy to *"Sharing of indivisible assets whose acquisition cost are amortized over multiple uses"* and to vertical and horizontal complementarities. That is a business-pool name for a priced bond, not a derivation.

**Low-overlap witnesses**, each from a different field and each read directly:

1. **Software engineering and project management.** Brooks 1975: *"Adding manpower to a late software project makes it later"*, because communication and training overhead grow with the number of people and, in Brooks's words, *"they could not coordinate"* once the teams could not talk with each other. This corroborates F4 (membrane overload) at a different stratum. Fig 4 :20 requires the anchor to be re-named at the new scale, so it corroborates the mechanism shape, not a firm-level measurement.
2. **Complex systems and hierarchy theory.** Simon 1962: *"Intra-component linkages are generally stronger than intercomponent linkages."* A nearly decomposable hierarchy keeps short-run component behaviour approximately independent; diversification that makes intercomponent linkages dominate is exactly the management failure F4 describes. Independent of the strategy evidence pool.
3. **Ecology and social-ecological resilience.** Angeler et al. 2018: *"the higher the redundancy of functional traits within and across scales, the higher the ability of the ecosystem to cope with disturbances"*. Mori et al. 2013 describe *"response diversity, describing the variation of responses to environmental change among species of a particular community"*. These corroborate F1 and F6: the value of difference is relative to the disturbance, and it is response difference, not a count of components, that pays. Different evidence pool from management strategy.

**Framework-internal essays** are used for the canonical reading of "shape" in `05_what_shape_means.md` only. They are not independent world witnesses, because their author wrote the figures. That overlap is recorded in the ledger.

---

## 3. Distribution rules

Figure-grounded reasons for how material is offered:

- **Fig 4 :22:** *"Only methods cross up. Only head starts come down."* Send the generator, the residual and the refuter, not the conclusion. A recording carried upward *"looks like knowledge and is a description of one occasion"* (Fig 4 :25).
- **Fig 10 :42:** *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 8 :53:** *"Residual first, frame second."* Ask what the new unit would have to afford before naming a frame or a target.
- **Fig 2 :40:** agreement from a shared pool is worthless as a verdict. Later agreement about the framework is never pooled as corroboration.
- **Fig 10 :59:** *"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."* Declare the stake; do not ask for belief.

**A hard practical constraint.** The AOM Publishing page states: *"Artificial Intelligence: Work submitted to AOM must be created by the authors and not the product of artificial intelligence tools unless appropriate to the research question and properly cited."* This whole solution is a simulated derivation produced with an LLM and is labelled as such everywhere. It must **not** be submitted as an authored empirical or theoretical article. The legitimate use is as a private checking instrument: post the residual and the refuter, invite a human to run the check, and let that human author whatever they conclude. Any submission must be rewritten and owned by a human author who can defend the derivation, with the AI contribution disclosed under the applicable policy.

**Order in any reply:** (1) the shape claim and the pre-registered refuter; (2) the question "what would you count as a failure here?"; (3) only after a verdict is recorded, the three source links with the note that the figures, not the summary, are the authority; (4) the formula as a reusable method, with the instruction that each user writes their own refuter and states their own mode.

---

## 4. The two-stage offer, compressed

**Stage 1.** Send `08_expert_verification_packet.md` sections 1 to 3 only: the one-paragraph claim, the three checkable sub-claims with their verbatim figure lines and refuters, and the non-claims. No provenance bundle, no essay links.

**Stage 2, opt-in only.** If the recipient is curious and has already recorded a verdict on stage 1, offer the three public links: the figure text, the formula and usage rule, and the essays. Their later agreement is a conversation, not corroboration (Fig 2 :40).

**Stage 3.** Offer the formula as a method, never as an answer (Fig 4 :22). Each user writes a refuter before running it and states the mode of what they get.

**Stop rule.** If stage 1 fails, the theory is not offered. A failure is more useful than an endorsement.

**Hosting.** Nothing here is hosted or sent by this agent. The human operator hosts the packet on an opt-in page and sends one to one. Prefer a download page that lets a recipient decline contact over an attachment pushed to a list.
