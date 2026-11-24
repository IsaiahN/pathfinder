# Figure-grounded audit: early warning of a major change in a glacier or ice sheet

**Mode of this document: `specified`, not `grounded`.** It states what would have to be observed and what would count as a failure. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, Adventures in Machine Learning, 2026-11-19): "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle which observation warns of a change, or whether any given ice body is about to change. See `05_what_shape_means.md` section 6.

**Sources.** Local: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`. World sources actually opened are listed in `10_source_ledger.csv` and cited by name in section 7.

---

## 0. The residual under audit, stated in effect terms

`THE_FORMULA.md` step 1 defines `R = |Γ(b,a) − o′|` per slot `s`. Write the ice body's prediction `Γ` as the response expected after a perturbation `a` (a warm summer, a snowfall anomaly, an ocean-heat pulse, a meltwater pulse to the bed). Write `o′` as the measured response (surface elevation, mass, velocity, terminus position, fracture state).

- In a stable state, `R` decays after each perturbation. The ice returns.
- Approaching a major change, `R` stops decaying. Recovery slows. The same perturbation produces a larger and longer-lived deviation. Variance and lag-1 autocorrelation of the residual rise; skewness and flickering may appear; neighbouring slots begin to co-vary.

**The question in effect terms.** Which observations constitute an early warning?

- **Option A:** any single abnormal state reading (a record melt summer, a record low mass year, a fast retreat season) is an early warning.
- **Option B:** only a residual at a named slot that persists and does not trend down across repeated perturbations, measured before the change, is an early warning. A single state reading is not enough, because changes in the normal state of a nonlinear system are often not informative about its stability (Planetary Security Initiative summary of Boers et al., Nature Geoscience, 2025).

**Expected shape of an answer (bound as an ordinary term, Formula "Direction").** An answer is a short list of observables, each with: (i) the slot it is measured on, (ii) the statistic computed from its residual over time, (iii) the instrument already returning it, (iv) the test that would refute it, and (v) the independent frame it must be ranged against. It is a **shape**, not a named sensor to be invented.

---

## 1. Figure census

| figure | bearing on this residual | verdict |
|---|---|---|
| **1 The Agent** | residual indexed per object slot; frame-internal quantities disqualified | governs the unit of warning: per basin or per glacier, never a global average |
| **2 The Ground** | anchor must not update; independence between frames; correlation disqualifies a verdict | governs corroboration: independent instruments, not agreeing reports |
| **3 Dependency Chain** | a link with no instrument is not a link that works | governs which observables may be named |
| **4 The Membrane** | round trip carries a lossy gap R_T | governs the condensation from figures to a monitoring recipe |
| **5 Mint Pipeline** | residual that persists and does not trend down; shrinking test read with opposite sign | governs the signature itself, at `specified` mode |
| **6 Closure / Reachability** | instrument improved from a worse one already returning something | governs the instrument rule and the inward/outward split |
| **7 Room Chain** | room agreement is variation, not a verdict | forbids consensus as corroboration |
| **8 Union Surplus** | search that finds nothing is never proof of absence; residual before frame; low-overlap union | governs a null result and the choice of diagnostic frame |
| **9 Leave / Arrive** | describe the residual before choosing a frame; you get a kind of thing, never the answer; unbundle a union | governs the order of the derivation and the stop |
| **10 Ground Maintainer** | verifier non-access; bring a characterised residual, never the source | governs the outreach packet |
| **11 The Habitat** | contact cascades; first-order enumeration, second-order effect | governs the spatial cascade and the per-slot habitat |
| **12 The Bond** | gradient is directedness; network is influence travel; states and structures alternate | governs why CSD couples a state to a structure and why cascades are second order |
| **13 Minimum Viable Set** | spectrum, gradient, network as distinct structures; cross-kind composition | governs the census of observables by kind |
| **Operators table** | comparison is a threshold relation; negation refuses a claim | governs false-warning refusal and threshold statements |
| **Symbols table** | R is per slot; anchor is what settles and does not update; instrument extends representation | governs notation |

Strained readings are named in section 6 and section 8, not smoothed over.

---

## 2. Domain census before choosing any figure line

### R by arity, symmetry and scale

- **Arity:** one residual per slot. A slot is a drainage basin, a glacier, an ice shelf or a reach of an ice stream. There is no single global residual for "the ice sheet".
- **Symmetry:** the CSD statistics (variance, lag-1 autocorrelation, recovery time, spectral reddening) are insensitive to the sign of the perturbation. Skewness and flickering carry direction (toward a smaller or larger state). This matters: a warning can be detected without knowing which way the system will tip.
- **Scale:** fast forcing (seasonal to decadal) against slow recovery (decades to centuries). First order is the local basin response. Second order is the cascade into neighbouring basins or a connected ice stream.

### One line per domain: actors, currency, anchor

| domain | actors | currency | anchor | partition or union |
|---|---|---|---|---|
| **D1 Ice-body dynamics** | ice, meltwater, basal water, ice shelf, grounding line, ocean heat, snowfall | mass balance, surface elevation, velocity, flux, strain rate | measured elevation, mass and velocity (the ice itself) | partition: one slot per basin |
| **D2 Critical-transition theory** | state variable, control parameter, noise, negative and positive feedbacks | recovery rate λ, AC1, variance, skewness, detrended fluctuation exponent | bifurcation theory checked in simulations and model runs | union with D1: warning is a property of the coupled system |
| **D3 Observation and instruments** | satellite altimetry, gravimetry, InSAR coherence, feature-tracked velocity, GPS, ice cores, SAR backscatter | measurements with error, coverage and sampling interval | the ground, which does not update when a frame changes | partition by instrument, union by site |
| **D4 Verification and outreach** | expert readers, reviewers, journals, monitoring networks | residuals and agreement | the ground, never agreement | union at the check only |

**No nameable anchor means it is not a domain yet.** D1 has the ice; D2 has the bifurcation check; D3 has the measurement; D4 has the ground. All four qualify.

**Dependency order (Fig 3).** An instrument must already be returning something (D3, Fig 6 :32) before a residual can be described at a slot (D1, Fig 1 :19); the residual must be described before a diagnostic frame is chosen (D2, Fig 9 :27-28); each first-order response must be settled before a second-order cascade is asserted (Fig 12 :104); the verdict is ranged against the ground separately by each frame (D4, Fig 2 :45-46). Effort spent above a broken link cannot rescue it (Fig 3 :19).

---

## 3. Findings

### F1 - The warning signature is a residual that persists and does not trend down (decisive for the shape)

Fig 5 :59, verbatim:

> "a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at"

`THE_FORMULA.md` step 2 says the same thing in the selector's language: "the residual that PERSISTS AND DOES NOT TREND DOWN. Same shrinking test the selector runs, opposite sign." The selector asks which residual is improving; the warning detector asks which one keeps being wrong and is not. Critical slowing down is exactly that quantity: after a perturbation the state fails to return, so the discrepancy between prediction and observation stops shrinking.

**Refuter:** a major ice change occurs with no persistent, non-shrinking residual at any observed slot and at any resolution of an already-returning instrument. This is a refutation of necessity, not a proof of absence (Fig 8 :39); it must be recorded as such.

**Mode:** `specified`. The figures give the signature in effect terms; they do not mention glaciers, ice, or critical slowing down.

### F2 - The warning is indexed per slot; a global average can hide a live signal

Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
Fig 1 :20: "a global residual near zero with one live slot is a legal state".

Boers (University of Copenhagen release, 2021) says of the Greenland result: "So far, the signals we see are only regional, but that might simply be due to the scarcity of accurate and long-term data for other parts of the ice sheet." Chapman et al. (2026) find the significant increase in variance and autocorrelation in the North West basin adjacent to the Baffin Bay ice shelf, not in every basin. A whole-ice-sheet mean would dilute exactly the live slot.

**Refuter:** demonstrate that warnings appear only in global aggregates and never in per-basin series, in a case where the per-basin series have comparable length, coverage and noise. That would break Fig 1's slot rule for this domain.

**Triangulation:** Fig 1 and Fig 11 (the cascade is enumerated per actor) are low-overlap figure routes to the same slot rule. World sources are secondary corroboration.

### F3 - The instrument must already be returning something

Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something."
Fig 6 :35: "the search for a proto-instrument is a search for one that is already there."
Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

Therefore the answer may name observables that existing instruments already return: elevation residuals (altimetry), mass residuals (gravimetry), velocity and coherence residuals (InSAR and feature tracking), fracture depth (laser altimetry), terminus position (optical and SAR imagery), ice-core-derived height and melt reconstructions. It may not name a sensor that has never registered anything. Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." An inward request for a better sensor is legitimate only if a worse one is already returning a signal.

**Refuter:** show an ice quantity for which no instrument at any resolution has ever returned a distinguishable value and for which a warning is nevertheless claimed. That claim is an import with no source gate, not an observation.

### F4 - State anomalies are not warnings; the residual is

The Planetary Security Initiative summary (2025) of Boers et al., Nature Geoscience, states: "Because changes in the normal state of nonlinear systems are often not informative about their stability, Early-Warning Signals (EWS) based on Critical Slowing Down (CSD) have emerged as a central method to detect approaching critical thresholds." Dakos et al. (2012) show that lag-1 autocorrelation, standard deviation, skewness, detrended fluctuation analysis and drift-diffusion-jump metrics are computed on the **residuals** after detrending, not on the raw level.

So a record melt summer is a state reading, not an early warning. The warning is that, after detrending, the spread and memory of the remaining residual rise across successive windows. Fig 9 :32: "you get a kind of thing, never the answer itself." The reading gives a shape of risk, not the date or the magnitude of the change.

**Refuter:** a validated case in which a raw state extreme predicts a major change with better discrimination than the trend in its detrended residual, across more than one glacier. That would demote the residual claim.

### F5 - The warning couples a state to a structure, and cascades at second order

Fig 13 :75: "Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state."
Symbols table: spectrum is "ordering, so more and less can be said"; gradient is "a difference that can be spent"; network is "that entities relate, and influence travels".

The monitored quantity (surface elevation, mass) is a state. The statistic (a declining recovery rate, a direction to the deviation) is a structure, specifically a gradient made spendable by the melt-elevation feedback. The cascade to a neighbouring basin is a network relation, second order. Fig 11 :52-53: "first-order enumeration, second-order effect, and the residual that mattered was three steps out." This is why a warning must be enumerated outward from the residual, not restricted to the glacier that will change.

**Refuter:** a cascade warning that appears only in a global network statistic and in no per-slot residual would break the enumeration rule; or a case where the second-order cascade carries a warning that no first-order slot carries, which would require a new primitive rather than a composition.

### F6 - A warning must be rejected when it is inherited forcing, not resilience loss

Chapman et al. (2026) test the null hypothesis that CSD indicators reflect inherited forcing variability rather than genuine resilience loss, and reject it for the North West basin; they also stress assumption testing, parameter sensitivity and statistical rigour. Fang et al. (2025) report that CSD methods are grounded in linearisation near an equilibrium and hold primarily for bifurcation tipping, and that skewness and flickering are needed where they fail. The Planetary Security Initiative summary (2025) notes that CSD from a leading element can be transmitted into a linked element, causing false warnings in the coupled element.

Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves." A statistic that tracks the forcing, not the ice's recovery, does not change contact with the ice. Operators table: "a refutation is a negation, which is why a vocabulary without it can only accumulate." The monitoring recipe therefore needs a standing refusal: when the null of inherited forcing is not rejected, the warning is withdrawn.

**Refuter:** a case where the null of inherited forcing is not rejected and the indicator still has predictive power after independent validation. That would show the refusal is over-strict.

### F7 - Independent instruments, not agreeing reports

Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence."
Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."
Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

Two groups reading the same altimetry product are one frame wearing two names. Two instruments pointed at the same ice (altimetry and gravimetry, or InSAR velocity and ice-core-derived height) are two frames. Each ranges against the ground separately; the anchor does not update (Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."). Two low-overlap instruments agreeing on a rising residual is evidence; a hundred emails agreeing is not.

**Refuter:** show that the apparent independence is an artefact of a shared processing chain or a common reanalysis, so the agreement reduces to one evidence pool. Independence is a quantity to be audited, not asserted.

### F8 - No date, no threshold name

Mannerfelt et al. (2025) derive a forecast of surge arrival from low-coherence front propagation, but report that predictions "always occur after the true onset, ranging in differences from 4 months at best to 9 years at worst." Fig 9 :32 again: "you get a kind of thing, never the answer itself." Fig 9 :44: "Only a sealed room can be searched to the end, and no frame is a sealed room." A warning is a shape of elevated risk, not a scheduled event. The figures forbid treating a preference for a date as a held term (Fig 5 :62-63: a preference "is not bound, it predicts nothing, and it accrues no residual").

**Refuter:** a calibrated method that returns tipping-time intervals with demonstrated coverage on held-out glaciers would move this finding from a shape to a named quantity. It would not, by itself, settle the physical case.

### F9 - A null result is a verdict, not silence

Fig 8 :39: "So a search that finds nothing is never a proof of absence."
Fig 9 :44: "Only a sealed room can be searched to the end, and no frame is a sealed room."

If no CSD signal is found in a basin, report `no warning detected at this instrument and resolution`, not `the ice is stable`. The difference between underivable in principle and unreachable at this budget is a real one (Formula step 7): a short record is a budget limit, not an absence of warning. Fig 5 :48: "Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."

**Refuter:** a proof that the basin is closed to the diagnostic in principle (for example, no accessible observable couples to the recovery rate). That would convert a budget verdict into an underivability verdict and change the recommendation.

### F10 - What actually survives the figure check

| claim | mode | figure or world support |
|---|---|---|
| A warning is a residual that persists and does not trend down at a named slot | `specified` | Fig 5 :59, Fig 1 :19 |
| Single state extremes are not warnings | `specified` | Planetary Security Initiative 2025; Dakos et al. 2012 |
| Existing instruments that already return elevation, mass, velocity, coherence and fracture data can carry the warning | `specified` | Fig 6 :32, Fig 3 :27; Mannerfelt et al. 2025, Chapman et al. 2026 |
| Cascade to neighbouring basins is second order and must be enumerated | `general` (structural) | Fig 11 :52-53, Fig 13 :75 |
| A warning must survive a null of inherited forcing and be corroborated by a low-overlap instrument | `specified` | Fig 2 :31, Fig 11 :40; Chapman et al. 2026 |
| A specific glacier, date or threshold value | **not claimed** | Fig 9 :32; Mannerfelt et al. 2025 |

---

## 4. Pre-registered refuter

Written before the conclusion, per the standing instruction: a falsifier written before the run is a design instrument, not only an honesty device.

The shape claim is: **early warning of a major ice change is a residual at a named slot that persists and does not trend down across repeated perturbations, observed before the change, surviving a null of inherited forcing, with second-order cascades enumerated outward.**

It is refuted if any of the following holds:

1. **Necessity fails.** A documented major change occurs with no persistent non-shrinking residual in any already-returning instrument at any resolution at any enumerated slot.
2. **Discrimination fails.** Persistent rising residuals occur repeatedly in slots that do not change, with no better discrimination than raw state extremes, after independent validation.
3. **Source fails.** In multiple validated cases the rising statistic is not rejected as inherited forcing variability, yet the change follows the forcing with no change in recovery rate.
4. **Slot rule fails.** Warnings are found only in global aggregates and never in per-slot residuals, with comparable data quality.
5. **Instrument rule fails.** The only successful warning comes from a sensor that had never registered anything before the change, which would mean the claim was an import with no source gate rather than an observation.

If any fires, the shape claim is withdrawn or narrowed and the retraction is recorded here, not silently erased. Until one is run, nothing above is `grounded`.

---

## 5. Recommendation

1. Monitor **residuals at named slots**, not global means: per basin or per glacier, after a declared detrending model, with the window and bandwidth stated (F2, F4).
2. Compute a small, pre-declared set of statistics: lag-1 autocorrelation, variance or standard deviation, skewness, detrended fluctuation exponent, and cross-slot correlation. Do not fish among indicators after seeing the result (F1, F4).
3. Use only instruments already returning data, and record which worse instrument each improved from (F3).
4. Require two low-overlap instruments (for example altimetry plus gravimetry, or InSAR plus ice core reconstruction) and range each against the ground separately (F7).
5. Test the null that the signal is inherited forcing; if it is not rejected, refuse the warning (F6).
6. Enumerate outward one cascade step and report second-order signals separately, never averaged with first-order ones (F5).
7. Report a stop as `no warning detected at this instrument, resolution and record length`, never as `stable` (F9).
8. Give no date and no threshold value from this derivation (F8).
9. Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." The recipe in this section is a lossy condensation of the figures, with a round-trip gap R_T measured in `11_audit.md`; it is not identical to the figures.

---

## 6. Canonical usage check and retraction or confirmation log

Two local sources govern how the figures may be used, read after sections 0 through 5.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw." And the limit: the framework says what a missing thing would have to look like, "a shape, not a name", then stops at the limit of what instruments can distinguish and records the lineage.
- `FRAMEWORK/figures/THE_FORMULA.md`: the mode rule and step 7's separation of underivable in principle from unreachable at this budget.

| earlier reading | status after the canonical check |
|---|---|
| F1 "Fig 5 governs early warning" | **Narrowed.** Fig 5 :59 governs which term to refuse. Its own text licenses the reuse: it is "the same shrinking test the selector runs, read with the opposite sign." So applying the persistence test to a warning is legitimate cross-domain reuse, but it remains `specified`, never `grounded`. |
| "CSD is named by the framework" | **Retracted.** The figures name no glaciological observable and no CSD statistic. The observables come from world sources and are bound from those frames as provenanced imports. |
| "Boers and Rypdal 2021 confirms a tipping point has occurred" | **Retracted at source level.** The quoted release says "We might be seeing the beginning of a large-scale destabilization, but at the moment, we cannot tell, unfortunately." It reports significant EWS, not a settled transition. |
| "A global mean is the cleanest warning" | **Retracted.** Fig 1 :22 and the regional character of both Greenland studies put the signal at the slot. |
| "Any persistent residual is a warning" | **Narrowed.** F6 adds the inherited-forcing refusal and F7 the independence requirement. A residual that merely tracks the driver is not a warning. |
| "A tipping date can be reported" | **Confirmed as forbidden here.** Fig 9 :32 and the Mannerfelt forecast interval support a shape of risk only. |
| "Null result means stable" | **Confirmed as wrong.** Fig 8 :39 and Formula step 7 make it a budget verdict. |
| Apparent strain: CSD assumes slow, near-equilibrium forcing, but rate-driven change exists | **Not a contradiction after re-census.** Fig 5's persistence test governs the residual; the world CSD method governs one estimator of it, valid for bifurcation tipping. Rate driven change is a different domain with its own loop. Recorded below as a strain at the method boundary, not smoothed. |

---

## 7. Provenance of the world claims used above

Every source below was opened on 2026-11-22 (Chapman et al. and Mannerfelt et al. on 2026-11-23 where the page timestamp required it), with author, venue, year, a quote and an overlap assessment in `10_source_ledger.csv`. No source was cited that was not read.

- Boers and Rypdal 2021, PNAS, reported through the University of Copenhagen release on phys.org (2021-05-17).
- Dakos et al. 2012, PLoS ONE 7(7):e41010, "Methods for Detecting Early Warnings of Critical Transitions in Time Series Illustrated Using Simulated Ecological Data."
- Fang, Wang, Kurths and Fan 2025, arXiv:2511.01168, "Tipping Points and Cascading Transitions: Methods, Principles, and Evidences."
- Planetary Security Initiative 2025, summary of Boers et al., Nature Geoscience review s41561-025-01787-0.
- Chapman, van der Laan and Lauritzen 2026, Journal of Physics: Complexity 7 03LT01, DOI 10.1088/2632-072X/ae8d6e.
- Mannerfelt, Schellenberger and Kääb 2025, Journal of Glaciology 71 e43, DOI 10.1017/jog.2025.27.

Overlap declaration: Boers is an author or subject of the 2021 release, the 2025 Nature Geoscience review summary and a cited reference in the 2026 modelling paper. Those three therefore draw on a related pool and are counted as one witness for the central CSD claim, not three. Dakos (ecological methods), Fang (complex systems theory) and Mannerfelt (glacier remote sensing) are lower-overlap witnesses. Figure lines are primary and decide; world sources corroborate only.

---

## 8. Strains and re-census

- **Fig 5 persistence test versus world CSD estimation.** The figure's test is domain-agnostic; the world estimator assumes linearisation near equilibrium, slow forcing, stationary noise and a fold-like bifurcation (Chapman et al. 2026). Re-census: the figure governs the residual; the estimator governs one way of reading it, valid for bifurcation tipping. Different objects. No contradiction. The method boundary stays visible: for rate-driven or noise-driven change the persistence signature may still exist while the AC1 and variance estimators mislead.
- **Fig 6 instrument rule versus the desire for a dedicated tipping observatory.** Wanting a new instrument is an outward move. Fig 6 :32 forbids specifying it from a description; Fig 6 :34-35 requires an edge in something already returning. A monitoring programme is legitimate only as an extension of an existing series. Recorded, not hidden.
- **Fig 1 slot rule versus regional data scarcity.** The 2021 release explicitly attributes regional-only signals to sparse long records. That is a budget limit under Formula step 7, not a failure of the slot rule. Re-census confirms the rule; the limit is reported with the verdict.
- **After re-census: one method-boundary strain named, zero figure contradictions.**
