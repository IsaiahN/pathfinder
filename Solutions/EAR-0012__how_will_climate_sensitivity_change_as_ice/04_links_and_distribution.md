# Public links and distribution

All links below were fetched and checked on 2026-11-22 unless a note says otherwise. Failed fetches are recorded rather than hidden.

## Verified public links

| what | URL | verified content |
|---|---|---|
| IPCC AR6 WG1 Chapter 7 | https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/ | "The Earth's Energy Budget, Climate Feedbacks, and Climate Sensitivity", Forster, Storelvmo, Armour et al. 2021. States the net cloud feedback is positive (high confidence), that feedbacks vary over time scales and with climate state, that the net feedback parameter will increase as global temperature increases, and that there is insufficient evidence to quantify a likely range of future feedback changes. Assessed ECS best estimate 3°C, likely 2.5 to 4°C, very likely 2 to 5°C. |
| IPCC AR6 WG1 Chapter 5 | https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-5/ | "Global Carbon and other Biogeochemical Cycles and Feedbacks", Canadell, Monteiro, Costa et al. 2021. States that ocean and land sinks are expected to take up a declining fraction of emissions as CO2 rises, that permafrost thaw releases carbon with low confidence in timing and magnitude, and that regional biogeochemical responses can be abrupt and irreversible on decadal to century time scales. |
| Tipping elements, Lenton et al. 2008 | https://pmc.ncbi.nlm.nih.gov/articles/PMC2538841/ | PNAS 105(6):1786-1793. Defines tipping element and tipping point, lists Arctic sea ice, Greenland and West Antarctic ice sheets, Atlantic THC, ENSO, monsoons, Amazon and boreal forest as candidates, and states that many systems do not yet have convincingly established tipping points. Includes a section warning that expert beliefs carry subjective biases. |
| Fourteen propositions for resilience | https://ecologyandsociety.org/vol27/iss3/art8 | MathisonSlee, Lade, Barnes et al. 2022, Ecology and Society 27(3):8. Low-overlap ecology witness. Reports cross-scale interactions, a "rigidity trap" in which a system becomes "highly connected, rigid, and inflexible", the fast and slow variables proposition, and multiple interacting thresholds. |
| EGUsphere preprint listing | https://egusphere.copernicus.org/ | Open preprint and discussion server. The recently posted list included "Compensating biases in CMIP6 TOA radiative-flux trends and their implications for EEI-based constraints on equilibrium climate sensitivity" (models may match observations for the wrong reasons) and "Loss, recovery and hysteresis of polar sea ice in TIPMIP multi-model simulations" (the same global temperature can correspond to different sea-ice states). Only the listing short summaries were read, not the full preprints. |
| AGU homepage | https://www.agu.org/ | Public association site: 24 journals, Sections, Authors resources, ESS Open Archive, AGU26 meeting. |
| AMS homepage | https://www.ametsoc.org/ | Public association site: advances atmospheric and related sciences, Publish Your Work, Finding an Expert, 2027 Annual Meeting 10-14 January 2027. |
| AMS Information for Authors | https://www.ametsoc.org/ams/publications/authors/ | Editorial Manager submission, author disclosure, data policy, reviewer guidelines. |
| EGU homepage | https://www.egu.eu/ | 22 scientific divisions including Climate: Past, Present and Future and Cryospheric Sciences; EGU27 abstract call open, 4-9 April 2027; EGUsphere preprint route. |
| IPCC homepage | https://www.ipcc.ch/ | Public reports, contact and expert-reviewer registration. States that the IPCC does not conduct its own research and that reports are neutral, policy-relevant but not policy-prescriptive. |
| Framework architecture post | https://medium.com/@IsaiahNwukor/arrival-of-the-fittest-the-tether-architecture-1de7edf641ec | Full architecture, 13 figures, formula, symbols and operators tables, provenance tag list. |
| Framework narrative | https://adventuresinml.substack.com/p/how-intelligence-actually-works | Six-term derivation, Rules 1 to 5, the SPACE(???)TIME conjecture with its stated ignorance, and the union horizon. |
| Eight essays | see `05_what_shape_means.md` and `10_source_ledger.csv` | All eight framework essays were fetched 2026-11-22 and carry maximal overlap with the figures. |

**Failed fetch, recorded honestly.** `https://essopenarchive.org/` (the endpoint behind the AGU ESS Open Archive link) returned 403 on direct fetch. It is not used as an opened source. The AGU-hosted link on the fetched AGU homepage is listed in `03_public_contact_points.csv` with a note to re-check before submitting.

## What the wider literature bears on the question

1. **The sign is known; the magnitude of the future change is not.** IPCC Ch7 reports both *"the net cloud feedback is positive (high confidence)"* and *"there is currently insufficient evidence to quantify a likely range of the magnitude of future changes to current climate feedbacks."* These are not a contradiction once the residual is indexed per slot: a sign is a comparison at a measured state, a magnitude trajectory is a different quantity. This is the central reason the solution reports a shape and leaves the number as an import.
2. **State-dependence is an established result, not a speculation.** IPCC Ch7: *"Due to the state-dependence of feedbacks, as evidenced from paleoclimate observations and from models, the net feedback parameter will increase (become less negative) as global temperature increases."* A per-slot, state-indexed report is therefore closer to the measured structure than a single constant.
3. **Coupling across slots is the hard part.** Lenton et al. enumerate ice, ocean circulation, monsoon, forest and permafrost couplings, and the resilience literature supplies cross-scale interaction and multiple-threshold results from a different evidence pool. A direct-effects-only scoping of "ice, clouds, forests and oceans" will miss the second- and third-order residual.
4. **Model agreement is a filter.** IPCC Ch7 notes that some high-ECS CMIP6 models are less consistent with observations and paleo data than models inside the very likely range. The EGUsphere short summary on compensating TOA-flux biases makes the mechanism explicit: a model can match a net reading for the wrong reasons. That is the figure rule that a projection is not a source.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22 and :25** - *"Only methods cross up. Only head starts come down."* and *"A recording carried upward looks like knowledge and is a description of one occasion."* Sending the full framework before anyone has described a residual sends a recording, not a generator. Lead with the per-slot shape claim and its refuter; offer the links after.
- **Fig 10 :42** - *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28** - *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what the recipient would expect to see if the per-slot shape were true, before giving them the architecture.
- **Fig 2 :40** - *"agreement about the world is worthless when the agreeing frames share an evidence pool."* A mass send selected for people already sympathetic to the method produces a convention, not corroboration.
- **Fig 9 :60** - *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* Conference and journal venues are filters that buy a check; they do not certify the result.

**Recommended order in a reply:** (1) the shape claim and its refuter; (2) ask what the recipient would count as a failure and what instrument would discriminate an averaging artifact from a state-dependence; (3) only then the links, with the note that the figures and the measurements, not this summary, are the authority.

## The two-stage offer

1. **Stage 1:** validate the per-slot output against the ground. Fig 10 :52, *"Bring a characterised residual, never the source."*
2. **Stage 2, opt-in only:** if curious, read the theory that produced it. The recipient's stage-1 verdict must be recorded before any theory is shown; later agreement is never pooled as corroboration (Fig 2 :40).
3. **Stage 3:** offer the formula as a method to reuse (Fig 4 :22). Each user writes their own refuter and states their mode, because `THE_FORMULA.md` "Direction" says a frame cannot check the direction of its own question.

**Hard precondition:** stages 1 to 3 only work if the stage-1 output survives. The output as drafted is a shape, not a number, and its four refuters are written in section 4 of `01_figure_grounded_audit.md`. Do not upgrade it to a numeric claim before an instrument pays for it.

## AI-policy caveat

Some climate journals and unions restrict AI-assisted submissions. The fetched AMS author page lists author disclosure and obligations and ethical guidelines; it does not state a blanket AI prohibition, but a human author must own and write anything submitted. The IPCC does not accept unsolicited claims as assessment input; its open expert-review registration is the legitimate route. Check each venue's current policy before submitting any LLM-assisted material. This is a practical constraint on submission, not evidence about the Earth system.

## Zip

`Solutions/EAR-0012__how_will_climate_sensitivity_change_as_ice/` contains the twelve working files. I can create an archive locally; **I cannot upload it or send it to anyone.** Hosting it (Drive, Dropbox, a repo release) and sending the link is yours to do. If you host it, prefer a link that lets a recipient decline contact, an opt-in download page is closer to the figure's rule than an attachment pushed to a list.
