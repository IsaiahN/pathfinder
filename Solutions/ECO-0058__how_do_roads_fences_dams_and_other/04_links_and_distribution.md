# Public links and distribution

Every URL in the tables below was fetched with an HTTP client on 2026-11-23 and read. Four attempted fetches failed and are listed separately; none is cited as a source. Local framework files are named with `local:` in `10_source_ledger.csv`.

## Verified sources actually fetched: field literature

| what | URL | verified content |
|---|---|---|
| Wildlife crossing | https://en.wikipedia.org/wiki/Wildlife_crossing | Four ways roads affect wildlife (habitat loss, collision mortality, resource isolation, fragmentation); effectiveness *"highly site-specific (due to differences in location, structure, species, habitat, etc.)"*; Banff: crossings plus fencing cut ungulate mortality by more than 80 percent while bear mortality rose about 116 percent in parallel with traffic. |
| Habitat fragmentation | https://en.wikipedia.org/wiki/Habitat_fragmentation | Five phenomena of fragmentation; linear features such as roads and pipelines let wolves and bears reach caribou refuges; habitat loss and fragmentation per se distinguished; *"Extinction debts are likely to come due"*. |
| Road ecology | https://en.wikipedia.org/wiki/Road_ecology | *"Roads are a permeable barrier to some organisms and impermeable to others"*; roads, railroads, power lines and canals grouped as linear infrastructure intrusions; de-icing salts and nutrients *"can trigger trophic cascades in adjacent waterways"*. |
| Fish ladder | https://en.wikipedia.org/wiki/Fish_ladder | *"A fish passage that is designed to allow fish to pass upstream may not allow passage downstream"*; *"Fish ladders have a mixed record of effectiveness"*; only about three percent of American Shad make it through all ladders in one cited study. |
| Dam removal | https://en.wikipedia.org/wiki/Dam_removal | Fish ladders *"ineffective in mitigating the negative effects on salmon populations"* in one cited account; released sediment can harm fish, scour terrain and bury infrastructure; EU target of 25,000 km of rivers restored through barrier removal by 2030. |
| NOAA Fisheries feature | https://www.fisheries.noaa.gov/feature-story/reopening-cape-fear-river-migration-benefits-both-fish-and-people | Dams and barriers block migratory fish; the new structure at Lock and Dam No. 1 *"mimics natural rapids"*; the plan includes monitoring, surveys and population analysis. |

## Verified sources actually fetched: venues and practitioner bodies

| what | URL | verified content |
|---|---|---|
| IENE | https://www.iene.info/ | *"IENE is a network of experts working with various aspects of transportation, infrastructure and ecology"*, initiated 1996, independent and interdisciplinary. |
| IENE contact | https://www.iene.info/contact/ | Public contact form and generic institutional inbox; privacy policy link. |
| Biodiversity and Infrastructure Handbook | https://www.biodiversityinfrastructure.org | Collaborative online hub; sections on infrastructure effects, mitigation hierarchy, solutions, evaluation and monitoring, and maintenance; *"We welcome your feedback and collaboration"*. |
| Handbook contact | https://www.biodiversityinfrastructure.org/contact/ | Public form for feedback, case studies, new references and collaboration; captcha present. |
| ICOET | https://www.icoet.net/ | *"the foremost interdisciplinary, interagency supported conference & training"* on ecological issues related to transportation systems. |
| ICOET 2027 abstracts | https://www.icoet.net/2027/abstracts | Public call for abstracts with downloadable PDF; topic list includes transportation, linear infrastructure, communities, aquatic and terrestrial ecosystems. |
| Landscape Ecology journal | https://link.springer.com/journal/10980 | Flagship IALE journal, open access; scope includes *"Flows and redistributions of organisms, materials, and energy in landscape mosaics"* and *"Landscape connectivity and fragmentation"*; open calls for papers. |
| IALE | https://www.landscape-ecology.org/ | Worldwide organization for landscape ecologists, working groups, World Congress, public contact and membership routes. |
| Dam Removal Europe | https://damremoval.eu/ | Coalition site with toolbox, case studies, guidelines, barrier map and opt-in newsletter; reports 9,680 barriers removed. |

## Canonical framework links actually fetched

| what | URL or path | verified content |
|---|---|---|
| Figures, formula, tables | https://github.com/IsaiahN/tether/tree/general-agent/figures (local canonical copy: `local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md`) | Figures 1-13 plus Operators and Symbols; Fig 11 is the habitat figure. |
| Architecture essay | https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether | Includes "Three mappings offered and declined"; explicitly declines the habitat-as-ecological-niche mapping; citation list marks Carson 1962 and Jones, Lawton and Shachak 1994 as *an instance*. |
| Eight essays | URLs in `05_what_shape_means.md` §1 and rows in `10_source_ledger.csv` | All eight fetched this session. |

## Failed fetches, recorded honestly

These were attempted and returned non-2xx or a non-article page. They are **not** cited in any solution file:

- `https://pubmed.ncbi.nlm.nih.gov/19748151/`: returned an HHS vulnerability-disclosure stub, not the abstract.
- `https://www.sciencedaily.com/releases/2015/03/150319112932.htm`: HTTP 404.
- `https://onlinelibrary.wiley.com/journal/13652664`: HTTP 403.
- `https://pmc.ncbi.nlm.nih.gov/articles/PMC4387188/`: HTTP 410.

The figures and independent pages actually read are sufficient for a shape claim. No missing source was silently substituted.

## What in the wider literature bears on the question

1. **Site-specificity is the empirical form of valence-relative-to-residual.** The wildlife crossing source reports opposite sign effects for ungulates and bears at Banff, and the road ecology source says permeability varies by organism. That is F2, and it is also the reason no averaged verdict is licensed.
2. **Directionality is real in fish passage.** Upstream-only passage (fish ladder source) and the substitution wording of the NOAA feature both support F4 and F5.
3. **Cascades are second and third order.** Road networks enabling predator access to caribou refuges (habitat fragmentation source) and de-icing salts triggering trophic cascades (road ecology source) are independent instances of F3.
4. **Mitigation is maintenance.** The handbook's separate sections on "Evaluation & monitoring" and "Maintenance", and the fish ladder source's debris-blocked passage, are independent support for F6.
5. **Removal is substitution too.** Dam removal's sediment warning and Dam Removal Europe's toolbox show that even deleting a barrier introduces new actors and fluxes (F5).

All five are **secondary corroboration only**. The figure verdict comes from Fig 11, Fig 4, Fig 1 and Fig 9, not from these pages. Where a page conflicts with a figure, the derivation returns to the domain census; it does not flip the verdict.

## Distribution: offer, do not push

Figure-grounded rules:

- **Fig 4 :22** — *"Only methods cross up. Only head starts come down."* Sending the full architecture before a reader has described a residual sends a recording, not a generator. Lead with the shape claim and the refuter.
- **Fig 10 :42** — *"A verifier that can reconstruct the claim cannot verify it."* A reader who has absorbed the framework before giving a verdict has joined the frame being checked.
- **Fig 9 :27-28** — *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what the reader would expect to see if the claim were true before giving them any theory.
- **Seat Map :163** — *"High correlation is disqualifying for a verdict and efficient for a convention."* A send list ranked by likely agreement produces a convention, not corroboration.
- **Fig 2 :42** — *"Buy independence in proportion to the cost of being wrong."* Buy one careful outside reader rather than a hundred agreeable ones.

**Recommended order in a reply:** (1) the shape claim and the five refuters; (2) ask what the reader would count as a failure; (3) record that answer; (4) only then, if they are curious, the three links, with the note that the figures, not the summary, are the authority.

## The two-stage offer (and an optional third)

- **Stage 1 before stage 2:** Fig 10 :52 — *"Bring a characterised residual, never the source."* The reader checks the claim without holding the framework's interior.
- **Stage 2 is opt-in by construction:** the outside frame must not hold the interiors, so later agreement is never pooled as corroboration (Fig 2 :40).
- **Stage 3 sends a method:** Fig 4 :22 again. The formula is a generator, so giving it away does not give away an answer. Each user writes a refuter and states a mode before running it.
- **No bulk send:** all venues in `03` are public submission or contact routes. No personal emails were collected, and no receptiveness ranking was produced.

## Hosting note

`08_expert_verification_packet.md` is the artifact to send. Nothing here is uploaded or sent by this agent. If you host the packet, prefer an opt-in download page over an attachment pushed to a list, so a recipient can decline contact.
