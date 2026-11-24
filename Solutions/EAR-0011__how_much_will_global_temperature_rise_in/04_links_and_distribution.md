# Public links and distribution

All links below were fetched on 2026-11-22 unless a failure is recorded. Where a fetch failed, an accessible source for the same claim was used instead, and the failure is kept visible.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| IPCC AR6 WG1 Summary for Policymakers | https://www.ipcc.ch/report/ar6/wg1/chapter/summary-for-policymakers | A.4 and A.4.4: best estimate of equilibrium climate sensitivity 3 °C, likely range 2.5 °C to 4 °C, very likely 2 °C to 5 °C, from multiple lines of evidence. A.4.1 gives human-caused radiative forcing 2.72 [1.96 to 3.48] W m-2 in 2019 relative to 1750. Box SPM.1.2 to 1.4 document CMIP6 spread and the first use of observational constraints on projections. |
| Sherwood et al. 2020, full text on PMC | https://pmc.ncbi.nlm.nih.gov/articles/PMC7524012/ | Abstract and methods: three lines of evidence (feedback process understanding, historical record, paleoclimate); 66 percent range 2.6 K to 3.9 K, robust within 2.3 K to 4.5 K; lines *"judged to be largely independent"*; full forcing-feedback equations ΔN = ΔF + λΔT + V and λ = Σλi. |
| Abramowitz et al. 2019, Earth System Dynamics | https://esd.copernicus.org/articles/10/91/2019/esd-10-91-2019.html | Review of model dependence: models *"share literature, ideas for representations of processes, parameterisations, evaluation data sets and even sections of model code"*; CMIP ensembles are *"ensembles of opportunity"*; agreement within an ensemble might not imply robustness. |
| Hansen et al. 2005 abstract, NASA GISS | https://www.giss.nasa.gov/pubs/abs/ha01110v.html | Definition of efficacy as global temperature response per unit forcing relative to CO2; CH4 about 110 percent (145 percent with indirect effects), biomass black carbon about 58 percent, fossil-fuel black carbon about 78 percent. |
| Tierney et al. 2020 record, NSF PAR | https://par.nsf.gov/biblio/10262156-past-climates-inform-our-future | *"Past climates provide the only opportunity to observe how the Earth system responds to high carbon dioxide"*; Science 370, eaay3701, 2020-11-05; authors and abstract verified. |
| Faes et al. 2009, LSHTM Research Online | https://researchonline.lshtm.ac.uk/id/eprint/4483 | Effective sample size defined as *"the sample size one would need in an independent sample to equal the amount of information in the actual correlated sample"*; applies to repeated measures and meta-analysis. This is the statistics behind Fig 2 :44. |
| Knutti et al. 2013, GRL record | https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/grl.50256 | Abstract and body returned by the search integration: CMIP5 models *"are neither independent of each other nor independent of the earlier generation"*; shared code and data sets *"reduce the effective degrees of freedom in a multimodel ensemble."* Direct full-text fetch returned HTTP 403 on 2026-11-22, so the accessible Abramowitz review above is the primary verified source for this claim. |
| Eight essays by Isaiah N | `05_what_shape_means.md` lists all eight URLs | Each essay was fetched and quoted in `05_what_shape_means.md` and the source ledger. |

## Verified public contact and submission venues

See `03_public_contact_points.csv`. Fetched and verified on 2026-11-22: AMS author information and submission pages, Climate Dynamics (Springer), Earth System Dynamics and Atmospheric Chemistry and Physics (Copernicus/EGU), WCRP, IPCC contact, AGU home, NASA GISS publications. Three deeper paths failed (AGU `/Publish-with-AGU/Publications` 404, GISS `/about/contact/` 404, Nature Climate Change `/authors` redirect loop); the verified home pages are listed instead, and the failures are recorded in the CSV notes so nobody mistakes a dead link for a live one.

## Fetch failures kept on record

- IPCC AR6 WG1 FAQ Chapter 7 PDF (`https://www.ipcc.ch/report/ar6/wg1/downloads/faqs/IPCC_AR6_WGI_FAQ_Chapter_07.pdf`): the fetch tool could not parse `application/pdf`. Its FAQ 7.3 text was seen in search results, but the SPM page above is the source actually cited for the sensitivity range.
- Wiley full text for Hansen 2005 and Knutti 2013: HTTP 403. NASA GISS and the Copernicus review were used instead.

## Wider literature that bears on this question

The following were read for the audit and are in `10_source_ledger.csv`:

- **Climate projection / assessment:** IPCC AR6 WG1 SPM; Sherwood et al. 2020 (Reviews of Geophysics); Tierney et al. 2020 (Science).
- **Model independence (a statistics-like field, low overlap with the framework):** Abramowitz et al. 2019 (Earth System Dynamics); Knutti et al. 2013 (GRL); Faes et al. 2009 (The American Statistician). These corroborate Fig 2 :31-44 and Fig 7 :13 from outside the framework's evidence pool.
- **Forcing identity:** Hansen et al. 2005 (JGR). Corroborates the Fig 12 isomer reading from a climate-physics field.
- **Canonical framework:** the eight essays and the local figures README and formula. These share the framework's evidence pool with the figures, so their agreement is expected and carries little independent weight (Fig 2 :40).

No world source was found that conflicts with the figure-derived shape. The three figure lines that most matter to a checker are Fig 1 :19, Fig 2 :35 and Fig 9 :32, all quoted verbatim in `08_expert_verification_packet.md`.

## Distribution rules: offer, do not push

Figure-grounded reasons:

- **Fig 10 :52**, *"Bring a characterised residual, never the source."* Send the residual and its refuter first. The full framework is stage 2 and opt-in.
- **Fig 10 :42**, *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27**, *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see if the shape claim were true before giving them the essay links.
- **Fig 2 :40**, *"agreement about the world is worthless when the agreeing frames share an evidence pool."* No mass send selected for people likely to agree. No receptiveness rank.

**Recommended order in a reply:** (1) the shape claim and its five refuters; (2) ask what they would count as a failure and record the answer; (3) only then the links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

1. **Stage 1.** Send the residual, the shape claim and the pre-registered refuter. Do not send a theory. Record the verdict before any framework material is shown.
2. **Stage 2, opt-in only.** If they are curious, offer the figure text, the canonical README and the IPCC and Sherwood sources. The number is world-sourced; say so explicitly.
3. **Stage 3.** Offer the formula as a method to reuse, with the instruction that each user writes their own refuter and states their own mode. Fig 4 :22, *"Only methods cross up. Only head starts come down."*

**Hard precondition:** stages 1 to 3 work only if the stage-1 claim survives. The claim here is deliberately narrow: it is a statement about the shape and the admissibility of witnesses, not a new climate result. If a checker shows that the figures do settle a number, or that the evidence lines share one hidden source, the claim is withdrawn in `01_figure_grounded_audit.md` §6.

## Zipping and hosting

There is no archive to upload from this folder. Nothing here is sent by this agent. Hosting and sending are yours to do. Prefer a link that lets a recipient decline contact; an opt-in download page is closer to the figure's rule than an attachment pushed to a list.
