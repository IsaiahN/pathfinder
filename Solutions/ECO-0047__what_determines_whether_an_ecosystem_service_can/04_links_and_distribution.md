# Public links and distribution

Every URL below was fetched this session (2026-11-23) unless marked otherwise. Fetch failures are recorded honestly and nothing is cited from a page that was not opened or returned by a public API.

## Verified sources

| what | URL | verified content |
|---|---|---|
| Canonical figure text with line numbers | local: `FRAMEWORK/reference/03-FIGURES_TEXT.md` | Figures 1-13 plus Operators and Symbols tables, one SVG text element per line; every `Fig N :line` citation in this folder is checked against it. |
| Canonical usage rule | local: `FRAMEWORK/reference/FIGURES_README_canonical.md` | *"They outrank everything else in the repo... the quotes are the authority, not this summary."* Section "This is not a Theory of Everything - and that is the point". |
| Figures as metalaws | local: `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` | *"the figures are the ground for design questions; Isaiah is the anchor for what the figures genuinely cannot settle."* Fig 11 is cited there as the habitat/capability governing line. |
| Eppinga et al. 2025, open access full text | https://pmc.ncbi.nlm.nih.gov/articles/PMC12380482/ | Proc R Soc B 292(2053):20251744. Full text read. Dynamical model of biodiversity-dependent ecosystem service debts; tipping points, long transients of apparent stability, and initial recovery followed by collapse. |
| Bahlai and Landis 2026, open access full text | https://pmc.ncbi.nlm.nih.gov/articles/PMC13001591/ | PNAS Nexus 5(3):pgag063. 31-year lady-beetle record; habitat perenniality moderates trajectories; pest suppression potential declined 42%; asynchronous native and exotic declines; functional redundancy warning. |
| Yachi and Loreau 1999 abstract | https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=9990046&rettype=abstract&retmode=text | PNAS 96(4):1463-1468. Insurance hypothesis: buffering and performance-enhancing effects; strength set by asynchronicity and response variance. Abstract only, recorded as such. |
| Mori, Furukawa and Sasaki 2013 abstract | https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=TITLE%3A%22Response%20diversity%20determines%20the%20resilience%20of%20ecosystems%20to%20environmental%20change%22&format=json&resultType=core | Biological Reviews 88(2):349-364. *"Traditional diversity measures (e.g. 'species richness') may not adequately capture the aspects of biodiversity most relevant to ecosystem stability and functionality."* Abstract only. |
| Cardinale et al. 2012 abstract | https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=TITLE%3A%22Biodiversity%20loss%20and%20its%20impact%20on%20humanity%22&format=json&resultType=core | Nature 486:59-67. Frames the question of how diversity loss alters ecosystem functioning and the supply of goods and services. Abstract only. |
| Ecological resilience | https://en.wikipedia.org/wiki/Ecological_resilience | Defines resilience as retaining function, structure, identity and feedbacks; latitude is the amount of change before recovery is lost; regime shifts and alternative stable states. Secondary, tertiary source. |
| Ecosystem service | https://en.wikipedia.org/wiki/Ecosystem_service | Catskill watershed recovery example: reducing sewage and pesticide input let soil absorption, filtration and biotic recycling restore water quality to standards at far lower cost than a filtration plant. Secondary, tertiary source. |
| IPBES Global Assessment | https://www.ipbes.net/global-assessment | Assessment scope, 2019 Summary for Policymakers and six chapters. Also a public venue. |
| ESP Trade-off Working Group (TWG 10) | https://www.es-partnership.org/community/workings-groups/thematic-working-groups/twg-10-trade-off-analysis-project-evaluation/ | *"trade-offs occur when one ecosystem service is enhanced at the expense of another"*; conference sessions and a planned special issue in Ecosystem Services journal. |
| ESP Restoration Working Group (TWG 13) | URL listed on https://www.es-partnership.org/ | Named on the fetched ESP home page as "Role of ES in Ecosystem restoration"; subpage not separately opened. |
| Ecology and Society submissions | https://ecologyandsociety.org/submissions/ | Open-access journal of integrative science for resilience and sustainability; blind review; data and code availability statement; opt-in updates form. |
| ESA manuscripts | https://esa.org/publications/be-an-author/submit-a-manuscript/ | Per-journal ScholarOne portals; Earth Stewardship via Research Exchange. |
| ESA journals | https://esa.org/publications/read-our-journals/ | Ecological Applications (decision support), Ecosphere (open access, socio-ecological systems), Earth Stewardship (transdisciplinary), seven journals total. |
| ESA home | https://esa.org/ | 2027 meeting calls for proposals, ECOLOG-L opt-in listserv, public contact page. |
| IPBES contact | https://www.ipbes.net/contact | Institutional general and media enquiry routes. |

### Fetch failures, recorded honestly

- https://www.pnas.org/doi/10.1073/pnas.2334352100 returned HTTP 403. The Elmqvist et al. 2003 response-diversity paper was not read at source and is **not** cited as a world source in this folder.
- https://www.ebi.ac.uk/europepmc/webservices/rest/PMC15485/fullTextXML and the equivalent for PMC11268176 returned HTTP 500. Yachi and Loreau 1999 was obtained instead through the NCBI eutils abstract endpoint; that is the version recorded in the ledger.
- https://europepmc.org/articles/PMC12380482 returned HTTP 403, but the same article was opened in full at the PMC URL above.
- https://www.sciencedirect.com/journal/ecosystem-services/publish/guide-for-authors returned HTTP 400 through a publisher error redirect. The journal is listed in the contacts CSV as a mapping aid with that limitation stated, not as a read source.
- `websearch` returned no results for several ecology queries on 2026-11-23. Sources were therefore found by direct URL and open API fetches, which are recorded with their exact URLs. No citation in this folder comes from an unread search snippet.

## Four things in the literature that bear directly on the question

1. **Eppinga et al. 2025 separates apparent from real recovery.** *"biodiversity-dependent ecosystem service debts may drive initial phases of apparent recovery after disturbance, still followed by system collapse"* and *"social-ecological systems' safe operating spaces cannot be reliably inferred from recent observations of apparent system stability."* This is the world-side instance of the Fig 10 :24 ground/channel split and the Fig 1 :19 per-slot rule. It **corroborates** the figure verdict. Overlap with the framework: none, different authors and evidence pool.
2. **Bahlai and Landis 2026 show habitat and valence in one longitudinal record.** *"Habitat perenniality moderates these patterns"* and *"even among a group of closely related species with similar ecological functions, rates of change and apparent drivers differ between species, in different parts of the landscape, and with time."* The paper also says the service's *"resilience ... is imperiled when it is not delivered by a diverse community with functional redundancy."* Corroborates Fig 11 :39-40 (agent-and-habitat) and Fig 11 :49-51 (valence relative to residual). Genuinely different evidence pool from the figures.
3. **Mori et al. 2013 and Yachi and Loreau 1999 separate richness from response diversity.** Mori: richness "may not adequately capture the aspects of biodiversity most relevant to ecosystem stability and functionality." Yachi and Loreau: biodiversity insures systems because *"many species provide greater guarantees that some will maintain functioning even if others fail."* Both corroborate the refusal of richness as a stand-alone determinant while leaving open which actor fills a slot, exactly as Fig 9 :32 requires. The two are separate papers but share the biodiversity-and-functioning literature, so they count as one broad witness, not two.
4. **Cardinale et al. 2012 frames the question the figure set answers structurally.** It asks *"how such loss of biological diversity will alter the functioning of ecosystems and their ability to provide society with the goods and services needed to prosper."* Corroborates that the residual is the service flow, not the species count. Abstract only; reduced weight.

No world source conflicts with the figure verdict, so the conflict rule (return to the census, never flip the verdict) was not triggered. Note that Fig 11 itself discusses DDT, Carson, ecosystem engineering and managed ecosystems, so ecology is not a fully foreign field to the framework; these sources are still independent publications and are weighted accordingly.

## Distribution: offer, do not push

- **Fig 4 :22-23** - *"Only methods cross up. Only head starts come down. A recording carried upward looks like knowledge and is a description of one occasion."* Sending a restored-site success story before anyone has described a residual sends a recording, not a generator. Lead with the separator and its refuter; offer links after.
- **Fig 10 :42** - *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the whole framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28** - *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see in their service if the separator were true before giving them the figure text.
- **Fig 2 :40** - *"agreement about the world is worthless when the agreeing frames share an evidence pool"*; Fig 7 :35 - a room's agreement is variation, not a verdict. Do not select recipients by likely agreement.
- **Seat Map :163** - *"High correlation is disqualifying for a verdict and efficient for a convention."* A mass send to sympathetic ecologists produces a convention, not corroboration.

**Recommended order in a reply:** (1) the separator and its refuter; (2) ask what they would count as a failure in their service; (3) record that verdict; (4) only then the sources, with the note that the figures, not the summary, are the authority.

## The two-stage offer

- **Stage 1 before stage 2** is Fig 10 :52 - *"Bring a characterised residual, never the source"* - and Fig 2 :45 - *"Frames range against the ground. They do not negotiate with it."* The recipient checks the separator without holding the framework's interior.
- **Stage 2 is opt-in by construction.** Seat 4 must not hold the interiors; once a recipient has absorbed the theory, their agreement stops being evidence. Their stage-1 verdict must be recorded first and never pooled as corroboration (Fig 2 :40).
- **Stage 3 sends a method, which is permitted.** Fig 4 :22: the formula is a generator, so giving it away does not give away an answer. Each user still needs a ground per problem and writes down what would refute their own result (Formula, "Direction").
- **Hard precondition:** stages 1-3 only work if the stage-1 output survives. If any refuter in `02_outreach_email.md` fires in the recipient's system, record it and stop; do not advance to stage 2 with that recipient.

## Hosting and sending

Nothing in this folder is sent by this agent. Hosting the packet (a public repository release, an institutional page, or an opt-in download) and sending the link is yours to do. Prefer a link that lets a recipient decline contact. No personal emails appear in `03_public_contact_points.csv`; institutional role addresses published on the venue pages are deliberately not copied there.
