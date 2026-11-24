# Public links and distribution

All links below were fetched and verified on 2026-11-23, except the one failed fetch recorded at the end.

## Verified sources

| what | URL | verified content |
|---|---|---|
| Real Potential Gross Domestic Product (FRED) | https://fred.stlouisfed.org/series/GDPPOT | CBO series, quarterly, billions of chained 2017 dollars. Notes: *"Real potential GDP is the CBO's estimate of the output the economy would produce with a high rate of use of its capital and labor resources."* Related series include Noncyclical Rate of Unemployment and the ALFRED vintage archive. |
| Output gaps in practice: Proceed with caution (VoxEU/CEPR) | https://cepr.org/voxeu/columns/output-gaps-practice-proceed-caution | Barkema, Gudmundsson and Mrkaic, 2020. Finds output gap measures *"skewed to the downside, often revised, and only slightly correlated with other indicators of slack"*; roughly two-thirds of revisions come from re-estimating potential growth; concludes *"There are no obvious silver bullets that address the shortcomings."* |
| Output gap (Wikipedia) | https://en.wikipedia.org/wiki/Output_gap | *"the potential GDP is not an observable variable, it is instead often derived from past GDP data, which could lead to systemic downward biases."* Also cites Orphanides and van Norden (2002), *"The unreliability of output gap estimates in real time"*, and the ECB speech below. |
| Potential output (Wikipedia) | https://en.wikipedia.org/wiki/Potential_output | Defines potential output as the sustainable level of real GDP; records that *"There is great disagreement among economists as to what these rates actually are"* for NAIRU. |
| NAIRU (Wikipedia) | https://en.wikipedia.org/wiki/NAIRU | Ball and Mankiw (2002) reported via the page: *"any estimates of the NAIRU at any point in time have a relatively wide margin for error, which limits its practical value as a policymaking tool."* |
| Monetary policy: lifting the veil of effectiveness (ECB speech) | https://www.ecb.europa.eu/press/key/date/2019/html/ecb.sp191218~12a0385d3b.en.html | Benoit Cœuré, 18 December 2019. *"True, the output gap is an elusive concept that should never have become a gauge for conducting public policy, and it may be larger than thought."* |
| Signals of continued economic resilience from the output gap (FRED Blog) | https://fred.stlouisfed.org/blog/2024/08/signals-of-continued-economic-resilience-from-the-output-gap/ | 15 August 2024. *"Potential output cannot be observed, so policymakers contend with considerable uncertainty here, including frequent and unpredictable revisions to the estimate of potential output."* |
| Economic Research (Federal Reserve Board) | https://www.federalreserve.gov/econres.htm | Working papers, FEDS Notes, FRB/US model, G.17 capacity utilisation navigation. Disclaimer: research *"is often preliminary and is circulated to stimulate discussion and critical comment."* |
| Working Papers (NBER) | https://www.nber.org/papers | *"New research by NBER affiliates, circulated prior to peer review for discussion and comment."* Public opt-in circulation, not a personal contact list. |
| AER Submission Guidelines | https://www.aeaweb.org/journals/aer/submissions | *"Artificial intelligence (AI) software, such as chatbots or other large language models, may not be listed as an author."* AI use must be briefly described; authors are accountable for fact-checking AI-assisted output. |
| Research at the IMF | https://www.imf.org/en/Research | *"The International Monetary Fund's Research Department conducts studies on global economic issues pertinent to the IMF's mission."* Public researcher directory and annual research conference. |
| Identifiability (Wikipedia, statistics) | https://en.wikipedia.org/wiki/Identifiability | *"two or more parametrizations are observationally equivalent."* Low-overlap analogue: a latent parameter may not be learnable even with infinite observations. |
| Kalman filter (Wikipedia, control theory) | https://en.wikipedia.org/wiki/Kalman_filter | *"estimates unknown variables that tend to be more accurate than those based on a single measurement"*; optimality assumes *"the model matches the real system perfectly"* and known noise covariances. |
| Data assimilation (Wikipedia, meteorology) | https://en.wikipedia.org/wiki/Data_assimilation | *"When these models are used for forecasting the model output quickly deviates from the real atmosphere. Hence, we use observations of the atmosphere to keep the model on track."* Low-overlap analogue for a model corrected by observations. |
| The Recursive Self-Improvement Trap (Substack) | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* Source of the simulated-derivation disclaimer. |
| The Hard Problem is About Source (Substack) | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | *"If several paths create the same behavior, then behavior is a projection with lossy information."* Source-discrimination analogue used in F3. |

## Failed fetch, recorded rather than hidden

- **CBO recurring reports**, https://www.cbo.gov/taxonomy/term/26/recurring-reports, returned a 403 on 2026-11-23. It is not cited as read. The FRED GDPPOT page was used instead because it states the CBO as its source and exposes the series and its vintages publicly. No claim about the CBO page's content is made here.

## Two things in the wider literature that bear directly on this question

1. **Revision asymmetry is the central finding, not a footnote.** The VoxEU study reports a median real-time output gap of -0.7 percent falling to -0.1 percent finally, with about two-thirds of the revision coming from re-estimating potential growth. The FRED blog calls the revisions *"frequent and unpredictable"*. Both are corroboration only: they do not decide the figure verdict, which follows from Fig 2 :29-34 and Fig 4 :27-30.
2. **The low-overlap fields agree on the shape but not on a name.** Statistics says a latent parameter can be observationally equivalent across parameter values. Control theory says an unobserved state can be estimated from noisy measurements only when the model and its noise covariances are right. Meteorology says a dynamical model must be corrected by observations because it drifts. None of these fields can settle whether a particular capacity estimate is correct; each corroborates the shape of a bounded, revisable, observation-corrected estimate. They share no author with the framework, so their agreement is the strongest independent corroboration here, but it is still corroboration only.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22-25** — *"Only methods cross up. Only head starts come down."* Sending the full architecture before anyone has described a residual sends a recording, not a generator. Lead with the refuter and the shape claim; offer the links after.
- **Fig 10 :42** — *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the entire framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28** — *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see if the shape claim were true before giving them the article.
- **Seat Map :163** — *"High correlation is disqualifying for a verdict and efficient for a convention."* A mass send selected for people who already agree produces a convention, not corroboration.

**Recommended order in a reply:** (1) the shape claim and its refuter; (2) ask what they would count as a failure and which independent slack reading they would use; (3) then the links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

1. **Stage 1:** send the residual and its pre-registered refuter, never the framework interior. Record the recipient's verdict before showing any theory (Fig 10 :52, Fig 2 :45).
2. **Stage 2, opt-in only:** if they are curious, offer the three links above. Their later agreement is never pooled as corroboration (Fig 2 :40).
3. **Stage 3:** offer the formula as a method to reuse, with the instruction that each user writes their own refuter and states their own mode (Fig 4 :22, `THE_FORMULA.md` "Direction").

**Hard precondition:** stages 1 to 3 only work if the stage-1 output survives. The two strains in `01_figure_grounded_audit.md` §4 are named, not hidden, and the shape claim is stated without asserting any particular capacity value. Do not strengthen it into a verdict before sending.

## Hosting

Nothing is sent by this agent. Hosting the packet and sending the link is yours to do. Prefer a link that lets a recipient decline contact, an opt-in download page rather than an attachment pushed to a list.
