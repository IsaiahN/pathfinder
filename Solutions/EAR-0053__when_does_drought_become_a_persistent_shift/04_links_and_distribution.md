# Public links and distribution

## What was actually opened on 2026-11-22

| what | URL | what it returned |
|---|---|---|
| Drought overview (tertiary, definitions and categories) | https://en.wikipedia.org/wiki/Drought | IPCC definition "drier than normal conditions"; meteorological, hydrological, agricultural/ecological and socioeconomic categories; over 150 definitions by the early 1980s; vegetation and dust feedbacks; Amazon "tipping point" reporting. |
| Drought in a human-modified world | https://hess.copernicus.org/articles/20/3631/2016/ | Van Loon et al. 2016, HESS 20:3631-3650, open access. Full abstract read, including the multi-driver definition and the five research gaps. |
| IPCC AR6 WG1 Chapter 8 | https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-8/ | Douville et al. 2021, Water Cycle Changes. Executive summary read, including non-linear responses and the low-confidence abrupt-aridity statement. |
| Europe PMC record API (correct DOI and abstract checks) | https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=TITLE%3A%22Catastrophic%20shifts%20in%20ecosystems%22&format=json&resultType=core | Scheffer et al. 2001, correct DOI 10.1038/35098000, with abstract and quote. |
| Europe PMC record API | https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=TITLE%3A%22Regional%20vegetation%20die-off%20in%20response%20to%20global-change-type%20drought%22&format=json&resultType=core | Breshears et al. 2005, PNAS, PMC1250231, with abstract and the 15-month / >90 percent result. |
| Europe PMC record API | https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=TITLE%3A%22Slow%20recovery%20from%20perturbations%20as%20a%20generic%20indicator%20of%20a%20nearby%20catastrophic%20shift%22&format=json&resultType=core | van Nes and Scheffer 2007, American Naturalist 169:738-747, with abstract and critical slowing down. |
| Europe PMC record API | https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=TITLE%3A%22Old%20World%20megadroughts%20and%20pluvials%20during%20the%20Common%20Era%22&format=json&resultType=core | Cook et al. 2015, Science Advances 1:e1500561, PMC4640589, with abstract and the megadrought result. |
| Europe PMC record API | https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=TITLE%3A%22Early-warning%20signals%20for%20critical%20transitions%22&format=json&resultType=core | Hirsch and Koren 2026, iScience 29:117964, PMC13697806, and Deb et al. 2024, Royal Society Open Science 11:231767, PMC11296079, both with abstracts. |
| NDMC contact page | https://drought.unl.edu/AboutUs/ContactUs.aspx | Institutional contact channel and the institutional address published there. |
| U.S. Drought Portal | https://www.drought.gov/ | NIDIS description, drought categories, soil-moisture and short-term versus long-term resources, opt-in sign-up. |
| UNCCD home | https://www.unccd.int/ | Open calls for independent experts, Global Land Outlook 3 announcement on land degradation, water scarcity and drought resilience. |

Two framework links are listed in the outreach email but were **not** fetched in this session: the GitHub figures folder and README. They are present in the exemplar solution and the local copies `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/reference/03-FIGURES_TEXT.md` were read directly here. That distinction is recorded so no link is claimed as verified without a fetch.

## Relevant wider literature, read for this solution

| source | field, overlap | what it predicts here |
|---|---|---|
| Scheffer et al. 2001, Nature 413:591-596, "Catastrophic shifts in ecosystems" | ecology and complexity, moderate overlap with van Nes 2007 (shared author) | smooth change can be interrupted by sudden switches to a contrasting state; loss of resilience paves the way. Corroborates the cycle finding. |
| Rietkerk et al. 2004, Science 305:1926-1929, "Self-organized patchiness and catastrophic shifts in ecosystems" | spatial ecology, lower overlap | shifts attributed to positive feedback and bistability. Corroborates the closed-loop finding at landscape scale. |
| van Nes and Scheffer 2007, American Naturalist 169:738-747 | ecology and physics, high overlap with Scheffer 2001 | recovery rate from small perturbations declines as a regime shift is approached (critical slowing down). Corroborates the recovery-time test. |
| Breshears et al. 2005, PNAS 102:15144-15148, PMC1250231 | ecohydrology, lower overlap | 15 months of depleted soil water produced >90 percent overstory mortality and a land-surface change lasting decades. Supplies a concrete ground case. |
| Van Loon et al. 2016, HESS 20:3631-3650 | hydrology, low overlap with the tipping-point pool | drought is a multi-driver, multi-directional phenomenon in a human-modified world; the baseline itself changes. Corroborates the union split and the moving-baseline finding. |
| IPCC AR6 WG1 Ch8 2021, Douville et al. | climate assessment, broad overlap (it cites much of the above) | non-linear responses from multiple drivers, feedbacks and time scales; only low confidence that abrupt aridity changes occur this century. Corroborates the mechanism and caps the confidence. |
| Cook et al. 2015, Science Advances 1:e1500561, PMC4640589 | paleo-dendrochronology, low overlap | tree-ring megadroughts more severe, extensive and prolonged before the 20th century. Supplies the paleo anchor. |
| Hirsch and Koren 2026, iScience 29:117964, PMC13697806 | remote sensing, low overlap | about one quarter of ecoregions show declining resilience and slower recovery from perturbation. Shows the shape is detectable in current data. |
| Deb et al. 2024, Royal Society Open Science 11:231767, PMC11296079 | mathematics and complex systems, low overlap | forecasting whether a transition will be sudden or smooth "remains an open challenge." Source of the recorded strain. |

The two Europe PMC abstracts for Scheffer, van Nes and Rietkerk were read through the REST API because the publisher full texts are subscription-only. The URLs in `10_source_ledger.csv` are the API query URLs actually opened, not guessed article URLs. Several guessed DOIs were opened first and returned unrelated papers (a MAP-kinase paper and an HIV paper). Those were discarded and are not cited anywhere in this folder. That failure is recorded here rather than hidden.

## Distribution: offer, do not push

- **Fig 4 :22:** *"Only methods cross up. Only head starts come down."* Sending the full architecture before anyone has described a residual sends a recording, not a generator. Lead with the three tests and the refuter.
- **Fig 10 :42:** *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28:** *"describe it before you go looking, or any frame you pick will seem to fit"* Ask what they would expect to see if the shape claim were true before giving them links.
- **Fig 2 :40:** *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* Never pool later agreement as corroboration.
- **Fig 9 :60:** *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* A journal's scope or a venue's prestige is a budget filter, never a reason the claim is right.

**Order in a reply:** (1) the residual and the three-test shape; (2) the pre-registered refuter and the request "what would you count as a failure?"; (3) record their verdict; (4) only then the links, with the note that the figures, not this summary, are the authority.

## The two-stage offer, and the third stage

**Stage 1.** Validate the shape against the ground. No theory is shown. The recipient's verdict is recorded before anything else.

**Stage 2, opt-in only.** If curious, offer the three links. Later agreement is a conversation, never corroboration. Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*

**Stage 3.** Offer the formula as a method to reuse, with the instruction that each user writes their own refuter and states their own mode. Fig 4 :22 permits sending a generator. `THE_FORMULA.md` "Direction" forbids a frame from checking its own question direction, so the user must bind their own sought-for shape.

**Hard precondition:** stages 1 to 3 only work if the stage-1 claim survives. The refuter in `02_outreach_email.md` is the test. If it fires, the shape is retracted before any theory is offered.
