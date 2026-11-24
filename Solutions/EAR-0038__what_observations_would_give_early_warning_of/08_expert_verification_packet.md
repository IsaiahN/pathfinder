# Expert verification packet: early warning of major ice change

**What this is:** a claim in a form a glaciologist, remote-sensing scientist or complex-systems researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the observation set, `general` on the structural shape. Not `grounded`.** No particular glacier, date or threshold is claimed. This is a simulated derivation checked for internal consistency against the figures, not a ground reading.

## 1. The claim, in one paragraph

A major change in a glacier or ice sheet is warned by a residual at a named slot that persists and does not trend down, not by a single abnormal state reading. After a melt, snowfall, ocean-heat or basal-water perturbation, the detrended series of elevation, mass, velocity or fracture state stops recovering: lag-1 autocorrelation and variance rise, return time lengthens, and skewness or flickering may appear. The warning must be confirmed by a second low-overlap instrument, must survive a null of inherited forcing variability, and must be reported per basin or per glacier rather than as a whole-ice-sheet average. Cascades into neighbouring basins are second-order compounds, kept separate from the first-order signal. What is offered is a shape with pre-registered refuters, not a forecast.

## 2. Three checkable sub-claims

### C1 - framework-internal; checkable by reading Figures 1 and 5

- **Statement:** the warning is a persistent, non-shrinking residual indexed per slot. A global average is not a valid warning variable; a single state extreme is not a warning.
- **Source, verbatim:** Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." Fig 5 :59 "a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at".
- **Refuter:** a documented major change with no persistent non-shrinking residual in any already-returning instrument at any resolution at any enumerated slot; or warnings found only in global aggregates and never in per-slot series of comparable quality.

### C2 - physics-facing; checkable by a glaciologist against their own data

- **Statement:** the statistically significant early-warning signal in ice data is a property of the **detrended residual** and its recovery, not of the raw level. In the published Greenland case it is regional (central-western Greenland, and the North West basin of the Baffin Bay model run), and it survives a null of inherited forcing variability (Chapman et al. 2026). In Svalbard, InSAR coherence loss detects surge-related instability years before feature tracking or crevasse detection (Mannerfelt et al. 2025).
- **What to check:** recompute AC1 and variance on detrended residuals for basins of your choice. Do they rise before a documented change? Does the rise survive alternative detrending bandwidths, window lengths and a forcing-only null? Is the coherence signal present in winter acquisitions where melt and rainfall cannot explain it?
- **Refuter:** a validated case where raw state extremes discriminate better than residual statistics; or a case where the rising statistic is not rejected as inherited forcing and the recovery rate did not change; or a coherence signal attributable entirely to melt, rainfall or viewing geometry.

### C3 - framework-internal derivation with a physics-facing edge

- **Statement:** a second, low-overlap instrument must confirm the warning, and a cascaded warning into a neighbouring basin is a second-order compound, not a stronger first-order warning.
- **Source, verbatim:** Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence." Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 11 :52-53 "first-order enumeration, second-order effect, and the residual that mattered was three steps out." Also Fang et al. (2025): CSD transmitted from a leading element can produce apparent warnings in a linked element far from its own threshold.
- **Refuter:** show the two confirming instruments share a processing chain or common reanalysis, so their agreement is one evidence pool; or show the cascade signal is fully explained by each slot's own first-order residual with no cross-slot term.

## 3. What is explicitly not claimed

- Not a forecast for any glacier, basin or ice sheet; no date, no threshold value, no probability of a specific event.
- Not that CSD statistics are valid for noise-driven or rate-driven tipping. Fang et al. (2025) and Chapman et al. (2026) restrict the standard case to bifurcation tipping.
- Not that any instrument should be built. Only instruments already returning distinguishable values are named (Fig 6 :32).
- Not that a null result means stability. Fig 8 :39: "So a search that finds nothing is never a proof of absence."
- Not `grounded`. Nothing here is asserted as settled by measurement for a specific site.
- Not a claim that the figures derive glaciological facts. The five world sources are provenanced imports; the figures supply the shape only.

## 4. Provenance

- Primary figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, extracted verbatim from Isaiah's 13 SVGs plus the Operators and Symbols tables. Read this session.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`. Read this session.
- Loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`. Read this session.
- Dakos V, Carpenter SR, Brock WA, et al. (2012), "Methods for Detecting Early Warnings of Critical Transitions in Time Series Illustrated Using Simulated Ecological Data", PLoS ONE 7(7):e41010. Fetched and read 2026-11-22.
- Fang S, Wang Z, Kurths J, Fan J (2025), "Tipping Points and Cascading Transitions: Methods, Principles, and Evidences", arXiv:2511.01168v1. Fetched and read 2026-11-22.
- Boers N, Rypdal M (2021), "Critical slowing down suggests that the western Greenland Ice Sheet is close to a tipping point", PNAS 118(21):e2024192118, reported by University of Copenhagen on phys.org, 2021-05-17. Fetched and read 2026-11-22.
- Boers N et al. (2025), Nature Geoscience review s41561-025-01787-0, summarised by the Planetary Security Initiative, 2025-10-21. Fetched and read 2026-11-22.
- Chapman RR, van der Laan LN, Lauritzen ML (2026), "Assessing effectiveness of critical slowing down in a non-idealised timeseries of the Greenland ice sheet in a paleo-climate model run", Journal of Physics: Complexity 7 03LT01. Fetched and read 2026-11-23.
- Mannerfelt ES, Schellenberger T, Kääb A (2025), "Tracking glacier surge evolution using interferometric SAR coherence, examples from Svalbard", Journal of Glaciology 71 e43. Fetched and read 2026-11-23.
- Essays by Isaiah N (2026) cited in `05_what_shape_means.md`, each opened 2026-11-22.
- This packet compiled 2026-11-23.

Overlap declaration: Boers is an author or subject of three of the world sources, so they count as one witness for the central CSD claim. Dakos, Fang and Mannerfelt are lower-overlap witnesses. Agreement among them is corroboration only; the figures decide.

## 5. What would settle it

A discriminating observation, not agreement:

1. Does the residual statistic survive a forcing-only null and reasonable choices of detrending bandwidth and window length?
2. Do two low-overlap instruments, each ranged against the ice separately, show the trend at the same named slot?
3. Does the warning precede independently documented change in held-out cases and beat raw state extremes?
4. Does the cascade persist after first-order residuals are removed?

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19, :22 and Fig 5 :59, three short passages.
2. Check C2 against a basin you know: are AC1 and variance computed on detrended residuals, and is the signal regional rather than whole-sheet?
3. Name one confound that would make the rising statistic a false warning (coverage change, inherited forcing, melt-driven coherence loss), and say what observation would rule it out.
4. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
