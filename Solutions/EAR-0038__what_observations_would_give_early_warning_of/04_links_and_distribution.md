# Public links and distribution

All links below were fetched and read on 2026-11-22 or 2026-11-23. They are the sources actually used in the ledger, not a reading list assembled from memory.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Greenland tipping release (University of Copenhagen via phys.org) | https://phys.org/news/2021-05-greenland-ice-sheet.html | 2021-05-17. Boers and Rypdal, PNAS DOI 10.1073/pnas.2024192118. Quotes: "So far, the signals we see are only regional, but that might simply be due to the scarcity of accurate and long-term data for other parts of the ice sheet" and the melt-elevation feedback description. |
| Methods for Detecting Early Warnings, Dakos et al. 2012 | https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0041010 | PLoS ONE 7(7):e41010, published 2012-07-17. Defines early warning signals, metric-based and model-based indicators, AR(1), variance, skewness, kurtosis, DFA, conditional heteroskedasticity and drift-diffusion-jump models. Quote: "Both slowing down and flickering will cause variance to increase prior to a complete transition." |
| Tipping Points and Cascading Transitions, Fang et al. 2025 | https://arxiv.org/html/2511.01168v1 | arXiv:2511.01168v1, 2025-11-03. Quote: "many complex systems exhibit universal signatures, such as rising variance, autocorrelation, and skewness, as they approach critical transitions." Also documents false EWS transmitted from a leading element to a linked element. |
| Planetary Security Initiative summary, 2025 | https://www.planetarysecurityinitiative.org/news/destabilization-earth-system-tipping-elements | 2025-10-21, summary of Boers et al., Nature Geoscience s41561-025-01787-0. Quote: "Because changes in the normal state of nonlinear systems are often not informative about their stability, Early-Warning Signals (EWS) based on Critical Slowing Down (CSD) have emerged as a central method to detect approaching critical thresholds." |
| Chapman et al. 2026, non-idealised Greenland CSD | https://iopscience.iop.org/article/10.1088/2632-072X/ae8d6e | Journal of Physics: Complexity 7 03LT01, published 2026-08-04. Quote: "meaningful early warning signals can be recovered from non-idealised model output, even when assumptions are not perfectly met." Tests the null of inherited forcing variability. |
| Mannerfelt et al. 2025, Svalbard InSAR surge detection | https://www.cambridge.org/core/journals/journal-of-glaciology/article/tracking-glacier-surge-evolution-using-interferometric-sar-coherenceexamples-from-svalbard/976F11F4D38EB7A4AEDB9ACC653E622A | Journal of Glaciology 71 e43, 2025-04-16. Quote: "InSAR coherence maps allow the detection of surge-related instability on Svalbard many years before being detectable by, for instance, feature tracking or crevasse detection." Also: predictions "always occur after the true onset, ranging in differences from 4 months at best to 9 years at worst." |

## Four findings that bear directly on the answer

1. **The warning is a residual, not a level.** Dakos et al. compute the indicators on detrended residuals; the Planetary Security Initiative summary says the normal state is often not informative about stability. This is the world-side counterpart of Fig 5 :59 and Fig 1 :19.
2. **The signal is regional.** Boers' 2021 quote and Chapman et al.'s basin-specific result both put the warning at a named slot. This is the counterpart of Fig 1 :22 about aggregation.
3. **A warning can be false or borrowed.** Fang et al. and the Planetary Security Initiative summary both describe CSD transmitted from a leading tipping element into a linked one, producing apparent warnings where the follower is not near its own threshold. This is the counterpart of Fig 11 :40 and the Operators table's negation: the warning must be refusable.
4. **Detection can precede established methods.** Mannerfelt et al. detect surge-related instability years before feature tracking or crevasse detection. This is the counterpart of Fig 6 :32, an instrument improved from a worse one already returning something, not invented from a description.

## Distribution: offer, do not push

- **Fig 4 :22** "Only methods cross up. Only head starts come down." Sending the full architecture before anyone has described a residual sends a recording rather than a generator. Lead with the per-slot shape and its refuter; offer links after.
- **Fig 10 :42** "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the whole framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28** "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see in a detrended residual before giving them the article.
- **Fig 2 :40** "agreement about the world is worthless when the agreeing frames share an evidence pool". A list selected for people already sympathetic produces a convention, not corroboration.
- **Fig 2 :42** "Buy independence in proportion to the cost of being wrong." Two low-overlap instruments are worth more than ten agreeing reports.

**Recommended order in a reply:** (1) the shape claim and the four refuters; (2) ask what they would count as a failure, including a source that would make them reject a CSD signal; (3) only then the local figure text and the two-stage offer, with the note that the figures, not the summary, are the authority.

## The two-stage offer

1. **Stage 1:** the recipient checks the shape claim against data they already know, without holding the framework's interior. Their verdict is recorded before any theory is shown (Fig 10 :52).
2. **Stage 2, opt-in only:** if curious, they read the figure text and the formula. Later agreement is never pooled as corroboration (Fig 2 :40).
3. **Stage 3:** offer the formula as a method to reuse. This is permitted by Fig 4 :22, because a generator can be given away without giving away an answer. Each user must write their own refuter and state their own mode, because a frame cannot check the direction of its own question (`THE_FORMULA.md` "Direction").

**Hard precondition:** stages 1 through 3 only work if the stage-1 output survives. The four refuters in `02_outreach_email.md` are written down in advance for exactly that reason. If a recipient supplies a refutation, copy it into `11_audit.md` with provenance and have the auditor seat re-evaluate it as if it came from any other source.

## Hosting

Nothing is sent by this agent. The four outreach artifacts are local files. Hosting them on an opt-in download page is closer to the figure's rule than pushing an attachment to a list.
