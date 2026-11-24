# Public links and distribution

All links in the first table were fetched and read on 2026-11-22. Where a fetch failed, the failure is recorded in the third table and the source was either rerouted to a page that did open or left uncited.

## 1. Verified sources actually opened

| what | URL | verified content |
|---|---|---|
| Ensemble forecasting (field baseline) | https://en.wikipedia.org/wiki/Ensemble_forecasting | Defines the two usual sources of uncertainty (initial conditions and model formulation); states that *"It is common for the ensemble spread to be too small, such that the observed atmospheric state falls outside of the ensemble forecast. This can lead the forecaster to be overconfident in their forecast."* Gives the reliability criterion: *"If the forecast is reliable, the observed state will behave as if it is drawn from the forecast probability distribution."* States the practitioner maxim *"The key aim of a forecaster should be to maximise sharpness, while maintaining reliability."* Distinguishes initial-condition perturbation, perturbed-parameter schemes, stochastic parametrisations, multi-model ensembles and superensembles. |
| The use of Ensembles (AR6-based practitioner guidance) | https://help.climsystems.com/docs/simclim-ar6/TheuseofEnsembles.html | ClimSystems Ltd, 2024. Calls CMIP collections *"ensembles of opportunity"* and says *"The spread of a multiple model ensemble is therefore rarely a direct measure of uncertainty, particularly given that models are unlikely to be independent, but the spread can help to characterise uncertainty."* Adds: *"Ensemble members may not represent estimates of the climate system behaviour (trajectory) entirely independent of one another... even different models may share components and choices of parameterixations of processes and may have been calibrated using the same data sets."* |
| Design effect / effective sample size (survey statistics) | https://en.wikipedia.org/wiki/Design_effect | Kish's design effect and intraclass correlation; *"cluster sampling (such as when there is correlation between observations)"* inflates variance; effective sample size `n_eff = n / Deff` and the cluster formula `Deff = 1 + (n* - 1) rho`. This is the arithmetic behind Fig 2 :44. |
| Wisdom of the crowd (human cognition) | https://en.wikipedia.org/wiki/Wisdom_of_the_crowd | *"the collective opinion of a diverse and independent group of individuals... yields the best judgement."* *"Averaging can eliminate random errors that affect each person's answer in a different way, but not systematic errors that affect the opinions of the entire crowd in the same way."* Scott E. Page's diversity prediction theorem: *"The squared error of the collective prediction equals the average squared error minus the predictive diversity."* Also records that dependence via communication can change the result and that consensus can reduce accuracy. |
| Modelling of common cause failure (reliability engineering) | https://handbook.reliability.space/en/latest/system/handbook/reliability_prediction/modelling_common_cause_failure.html | ECSS-Q-HB-30-02A digital handbook, v0.4.5 draft. Defines beta as *"the ratio of the failure rate due to common cause to the total failure rate"*, gives `Q_S = Q_I^2 + Q_C`, and states that *"The use of different design principles, diverse hardware, diverse software or distinctly different design groups during the development reduces the susceptibility of a system to CCF resulting from a lack of diversity."* |
| Common-cause failure and the beta-factor model (engineering practice) | https://www.reliafy.com/learn/common-cause-failure | *"A common-cause failure is a single event that fails several components at once... the reason real redundant systems are less reliable than the textbook parallel formula promises."* *"Any shared cause puts a floor under the system's failure probability that redundancy can't lower."* *"the closer β gets to 1, the more the redundant units behave like one."* A commercial reliability-software guide, marked as such in the ledger. |
| ECMWF contact and support | https://www.ecmwf.int/en/about/contact-us | Institutional contact page; explicitly says it *"cannot answer general meteorological questions"* and points to a support portal and publications. |
| Monthly Weather Review (AMS) | https://www.ametsoc.org/index.cfm/ams/publications/journals/monthly-weather-review/ | Scope includes *"model development and evaluation"* and *"innovations in analytic and numerical techniques, data assimilation"*; public submission and editorial contact routes. |
| RMetS contact page | https://www.rmets.org/contact-rmets | Institutional general-enquiries channel with a stated 3 to 5 working day response aim. |
| Geoscientific Model Development submission | https://www.geoscientific-model-development.net/submission.html | Public submission route; requires code or a repository DOI for most manuscript types and requires AI tool use to be described in Methods or Acknowledgements. |
| EGU home and meetings listing | https://www.egu.eu/ | Lists the General Assembly overview, the meetings calendar, the EGU27 call for abstracts and the Atmospheric Sciences and Climate divisions. |
| climateprediction.net home | https://www.climateprediction.net/ | Volunteer computing climate modelling project; public study and contact routes, opt-in volunteer participation. |

## 2. How the wider literature bears on the question

Four of the opened sources are genuinely low-overlap witnesses and are worth stating separately from the forecasting literature, which shares an evidence pool with itself.

1. **Survey statistics (design effect).** The claim that correlated observations are not independent witnesses is not a metaphor here; it is the definition of the design effect. `n_eff = n / Deff` and `Deff = 1 + (n* - 1) rho` say that as intraclass correlation rises, adding observations buys less information. This is the exact arithmetic Fig 2 :44 calls *"the same arithmetic read as a warning."* It corroborates the independence condition at the mechanism level, not by agreement with the figures but by a separate derivation.
2. **Reliability engineering (common-cause failure).** A redundant system with a shared cause has a floor under its failure probability that no amount of parallelism removes. The beta factor partitions each component's failure into an independent share and a shared share. That is a structure, not a statistic: the members are the same, the bond is different. It corroborates Fig 12 :5 and Fig 8 :49 from a field that never read these figures.
3. **Human cognition (wisdom of the crowd).** Averaging removes errors that differ across judges and leaves errors shared by all of them. Page's theorem makes diversity a term in the error decomposition. This is the same separator as the forecast question, in a different substrate. It also records the failure mode where communication makes judgments dependent, which corroborates the warning against selecting an ensemble for mutual agreement.
4. **Climate modelling practice (ensembles of opportunity).** The AR6-based guidance says directly that spread is *"rarely a direct measure of uncertainty"* because models are unlikely to be independent. This is the field's own statement of Fig 1 :27 in domain terms: a quantity produced by the generator cannot certify the generator.

The forecasting baseline source and the AR6 guidance share a climate-prediction evidence pool with each other and with the model-genealogy literature, so they count as one witness pool, not several. The three low-overlap sources above are counted separately. No world source conflicts with the figure verdict; the conflict rule was not triggered.

## 3. Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 10 :52** — *"Bring a characterised residual, never the source."* The first contact carries the separator and its refuter. The framework is not attached.
- **Fig 10 :42** — *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the architecture before giving a verdict has joined the frame being checked.
- **Fig 2 :35** — *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Do not ask whether they agree. Ask what they would count as a failure.
- **Fig 9 :27-28** — *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see if genuine uncertainty were present before giving them the links.
- **Fig 2 :40** — *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."* No list selected for receptiveness, no forwarding chain, no pooled later agreement.
- **Fig 4 :22** — *"Only methods cross up. Only head starts come down."* Stage 3 offers a reusable method, not an answer.

**Recommended order in a reply:** (1) the four-condition separator and its refuter; (2) ask what they would count as a failure and record the answer; (3) only then the four public links, with the note that the figures, not the summary, are the authority; (4) only on request, the formula as a method with the instruction to write a fresh refuter and state a mode.

## 4. The two-stage offer

- **Stage 1 before stage 2.** The recipient checks the separator without holding the framework's interior. Their verdict is recorded before any source is shown.
- **Stage 2 is opt-in.** If they are curious, offer the links. Their later agreement is never pooled as corroboration (Fig 2 :40).
- **Stage 3 sends a method.** The formula is a generator, so giving it away does not give away an answer (Fig 4 :22). Each user must name a ground and write a refuter before running it; `THE_FORMULA.md` "Direction" says a frame *"cannot check the direction of its own question, because the shape a frame is searching for is not a term it holds."*
- **Hard precondition.** Stages 1 to 3 work only if stage 1 survives. The current stage-1 claim is a separator with a refuter, not a number, so it can be checked without accepting the source.

## 5. Submission constraints worth recording

- **GMD/Copernicus:** the submission page requires disclosure of AI tool use in Methods or Acknowledgements, and requires model code or a repository DOI for most manuscript types. A simulated derivation such as this folder must be declared as such; it is not a substitute for a ground-verified study.
- **AMS MWR:** journal scope covers model development and evaluation. The journal page publishes editorial contacts; those are for submission correspondence, not for bulk outreach.
- **ECMWF:** the contact page explicitly declines general meteorological questions, so the switchboard is not a venue for this claim. Use publications or the support portal.

## 6. Fetch failures and honest rerouting

| attempted URL | result | action |
|---|---|---|
| AGU full text, `agupubs.onlinelibrary.wiley.com/doi/full/10.1002/grl.50256` | HTTP 403 | Not cited as read. The AR6-based SimClim page, which was opened, carries the relevant claim about non-independence. |
| Cell Press full text of Simons 2004, `cell.com/trends/ecology-evolution/fulltext/...` | HTTP 403 | Not cited as read. The many-wrongs analogue is left out rather than quoted from a search snippet. |
| Europe PMC, `europepmc.org/article/MED/16701304` | HTTP 403 | Not cited as read. |
| ETH research collection record for Masson and Knutti 2011 | HTTP 500 | Not cited as read. |
| ETH PDFs (`masson11grl.pdf`, `sanderson15jc_a.pdf`) | PDF content type unsupported by the fetch tool | Not cited as read. Their content is not used. |
| OpenSky UCAR record for Knutti et al. 2013 | human-verification challenge page | Not cited as read. |
| `oa.mg/work/10.1029/2011gl046864` | page loaded but metadata were JavaScript-only, no abstract text | Not cited as read. |
| `egu.eu/meetings/conferences/general-assembly/` | HTTP 404 | Rerouted to the EGU home page and its linked `/meetings/general-assembly/` overview, which were opened. |
| `wcrp.wmo.int` | transport error | Not verified, not listed in the contact CSV. |
| DuckDuckGo HTML search via `websearch` integration | no results returned | Rerouted to DuckDuckGo HTML through the fetch tool, which returned usable results. Search snippets are treated as discovery only, never as read sources. |

Nothing in this folder is cited from a page that was not opened.
