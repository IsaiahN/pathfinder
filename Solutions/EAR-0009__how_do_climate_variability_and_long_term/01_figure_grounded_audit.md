# Figure-grounded audit: how variability and forced change combine

**Mode of this document: `specified` on the substantive claims, `general` on the structural shape. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status: simulated derivation, not a ground reading.** *The Recursive Self-Improvement Trap* (2026-11-19) says LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This audit was checked for internal consistency against the figures only. It cannot settle the question it reports on. No measurement was taken here; every measurement quoted is from a world source actually opened and logged in `10_source_ledger.csv`.

**Figure source.** All `Fig N :line` quotes are verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read this session. Quotes from `THE_FORMULA.md` are from `FRAMEWORK/figures/THE_FORMULA.md`. Essay quotes are from the eight essays listed in `05_what_shape_means.md`. No figure quote was taken from a summary.

---

## 0. The residual, in effect terms

Observed climate trends `O(t)` (for example global mean surface temperature, ocean heat content, or a regional seasonal trend) are claimed to be produced by two generators:

- **V**, internal climate variability: the chaotic and oscillatory dynamics of the coupled atmosphere, ocean, land and cryosphere with no change in external forcing (ENSO, PDO/IPO, AMO/AMV, annular modes, atmospheric "weather noise").
- **F**, long-term human-driven change: the forced response to anthropogenic radiative forcing (greenhouse gases, aerosols, plus smaller natural forcings), with the energy imbalance and ocean heat uptake that accompany it.

Each generator alone leaves a residual. `V` alone does not carry a sustained centennial-scale rise: IPCC AR6 WG1 Ch3 states it is "virtually certain that internal variability alone could not account for the observed global warming since 1951". `F` alone is a smooth ensemble-mean response; it does not produce the observed year-to-year and decadal structure, and the ensemble mean "will, by definition, average out the internal variability leaving only the externally forced response" (Gou, Liu and Wang, Tellus A, 2022). The 1998-2012 episode, where the observed surface trend departed from the forced trend while ocean heat content kept rising, is the clearest case.

**The owed object** is a composition rule `C(V, F)` plus a scale plus a discriminating instrument:

- Arity: two inputs. What bond joins them?
- Symmetry: is the join symmetric (both present, order irrelevant) or ordered (one modulates or gates the other)?
- Scale: `V` dominates interannual to multidecadal; `F` dominates multidecadal to centennial. The observed trend spans them.
- What each option leads to: if the join is a plain symmetric conjunction, the answer is `O = F + residual` and the residual is noise to be filtered; if it is an ordered compound with interaction, the forced trend also changes the variability, and the residual is partly signal. Settling this changes how we read a hiatus, a regional trend, and the confidence we place in a single global number.

**Binding the sought-for shape as an ordinary term** (`THE_FORMULA.md`, "Direction"): the answer we are looking for is *a cross-scale union compound with a named bond type, a scale at which the bond simplifies, and a ground instrument that fixes the weights*. Writing that down lets it accrue a residual like any other term and makes it refusable in section 4.

---

## 1. Domain census (before choosing any figure line)

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor. No nameable anchor means it is not a domain yet.

- **R (the residual).** Arity two (`V` and `F`). Symmetry: the candidate bonds are the symmetric conjunction (`+`, both hold at once) and the ordered production / cycle (`⇒`, `cycle`), with a comparison (⋛) as a possible threshold operator between them. Scale: interannual to centennial, and cross-scale by construction. Fig 9 names this a **union compound**: *"a case in two conditions is not a harder case of either."* It has its own loop and its own ground.

- **Domain 1, the observational ground.** Actors: thermometers, satellites, Argo floats, ocean heat content series, paleo proxies, reanalyses. Currency: temperature anomaly, heat content, sea level, mass loss. Anchor: the ground itself, Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* This domain is the anchor for the whole question, but it has a channel-maintenance problem (observational bias, coverage, depth). Question type: partition (real change versus artifact) inside a compound answer.

- **Domain 2, the forced-response frame.** Actors: greenhouse gases, aerosols, solar and volcanic forcing, CMIP models, radiative forcing, energy imbalance. Currency: W/m² and the ensemble-mean response. Anchor: the top-of-atmosphere energy budget and ocean heat uptake (a measurement that does not consult our attribution). Question type: derivation of a structured, sustained ordering over time.

- **Domain 3, the internal-variability frame.** Actors: ENSO, PDO/IPO, AMO/AMV, NAM/SAM, weather noise. Currency: variance, covariance, control-run spread. Anchor: unforced control integrations and the residual after the forced signal is removed. Question type: a remainder and a chaos source, not a second trend generator at centennial scale.

- **Domain 4, the detection-and-attribution frame (the composition instrument).** Actors: optimal fingerprinting (Hasselmann 1997), signal-to-noise-maximising pattern filtering (Wills et al. 2020), large single-model ensembles (Deser et al. 2012). Currency: signal-to-noise ratio, scaling factors, residual consistency. Anchor: the ground, through tests that a frame cannot grade itself. Question type: triangulation between domains 2 and 3 and the bond `C` itself.

- **Dependency order (Fig 3).** First make the ground record reachable (domain 1, perception link); then estimate `F` and `V` separately (domains 2 and 3, vocabulary link); then compose them with a stated objective (domain 4, "what counts as progress" link); then attribute and project (planning link). Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* More models, more ensemble members and longer records all land above the middle link if the bond itself is never stated.

**Partition or union:** this is a **union**, not a partition. The two conditions overlap (forcing can project onto variability patterns; variability modulates the expression of forcing), so a single lever that clears the region where only one condition holds leaves the intersection standing (Fig 9 :54). There is a genuine partition sub-question inside domain 1 (real change versus observational artifact), and it must be kept separate from the union of domains 2 and 3. Mixing them is the failure Fig 9 :4-5 names: *"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."*

---

## 2. Figure census

| figure | bearing on this residual | verdict |
|---|---|---|
| **1 The Agent** | residual per slot; aggregation hides a live signal | aggregation into a global mean hides the live residuals that decide the question |
| **2 The Ground** | anchor must not update; independence; triangulation not negotiation | the observational record is the anchor; CMIP ensembles are a shared pool, not independent witnesses |
| **3 Dependency Chain** | middle link (what counts as progress) has no instrument | the bond `C` is the unmeasured middle link |
| **4 The Membrane** | cross-scale transform is lossy; measure the round trip `R_T` | global to regional is a lossy transform; the gap must be measured |
| **5 Mint Pipeline** | MDL bargain; settling necessary not sufficient | a composite term must cost less than the confusion it removes; a gate is not the ground |
| **6 Closure / Reachability** | import moves the wall; instruments improved from worse ones | pattern filtering is an instrument improved from simple trend analysis, not a new atom |
| **7 Room Chain** | agreement compounds, evidence does not | a large multi-model ensemble that agrees is motion unless selected against the residual |
| **8 Union Surplus** | two low-overlap frames reach what neither does; residual first | D&A is the union of the forced and variability frames; independence decides surplus |
| **9 Leave / Arrive** | split a union; describe before looking; filters not witnesses | the question is a union compound; confidence labels are budget filters, not verdicts |
| **10 Ground Maintainer** | ground does not decay, channel does; pooled readings | observational channel maintenance and the danger of treating a tuned model as ground |
| **11 The Habitat** | enumerate contact; cascades reach three steps out; introduce not subtract | the heat goes into the deep ocean and between basins; geoengineering is introduction without exclusion |
| **12 The Bond** | conjunction vs ordered bonds; cycle; two currencies | at global scale the join is a conjunction with a residual; at regional scale it is ordered |
| **13 Minimum Viable Set** | chaos/noise from the residual; gradient-over-time; cross-kind composition | internal variability is chaos; the forced trend is a gradient over time, not a bare state |
| **Operators table** | `+` symmetric; `→`, `⇒`, `⋛` ordered; swap test | the swap test decides the bond type empirically |
| **Symbols table** | `R` is the aim and an error signal; ground is the anchor | the residual is the aim of the derivation, not noise to be deleted |
| **THE_FORMULA.md** | steps 2, 3, 5, 7; SEARCHED / INWARD / OUTWARD; mode | refuse before mint; settle by ground; keep the three leave questions distinct |

Strained readings are named in section 6, not smoothed over.

---

## 3. Findings F1 to F10

### F1: The combination is a union compound, not one additive term (structural, `general`)

Fig 9 :54-55: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :57: *"a case in two conditions is not a harder case of either."*

World corroboration (secondary, independently authored): IPCC AR6 WG1 Ch3 says regression-based fingerprinting assumes *"the observed change consists of a linear combination of externally forced signals plus internal variability, which generally holds for large-scale variables"* and that *"the residuals represent internal variability"*. Gou, Liu and Wang (Tellus A, 2022) write that at the intermediate timescale *"the trend ... is primarily the result of the interaction between the external forcing and internal climate variabilities."*

So the large-scale case degenerates toward a symmetric conjunction (`F + residual`), while the intermediate-scale case remains a compound with interaction. This is a **scale-dependent reading**, not a contradiction: the same object is simple at one range and compound at another. Re-census by scale dissolves the apparent strain.

**Refuter:** demonstrate that the interaction term is exactly zero at all scales and that a single linear model with independent errors closes every observed trend and every regime. IPCC AR6's caveat that linearity "generally holds for large-scale variables" is the live boundary; if it held at all scales, the union claim collapses to a partition.

### F2: Internal variability is the chaotic remainder, not a second trend generator (`general`, triangulated)

Fig 13 :32: **"a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise."**

That is the figure's own statement of where randomness comes from: the residual re-enters the next turn, a chain amplifies it, and what a crossing discards shows up as noise. It maps directly onto weather noise, ENSO and the annular modes.

World corroboration: Deser et al. (Climate Dynamics, 2012) found *"Internal variability is estimated to account for at least half of the inter-model spread in projected climate trends"* and that internal atmospheric variability is "climate noise" arising from nonlinear dynamics intrinsic to the atmosphere. Hasselmann (Climate Dynamics, 1997) framed detection as finding a forced signal *"in the presence of natural internal variability"*. Gou et al. (2022) state that internal modes "would reverse phase" and so "the hiatus would have ceased to exist eventually".

**Refuter:** an unforced control integration that produces a persistent multidecadal to centennial global trend of the observed magnitude and sign, reproducibly across independent models. That would promote variability to a trend generator and break this finding.

### F3: The forced trend is a gradient over time, a composition, not a bare state (`specified`, single-source for the figure mapping)

Fig 13 :12: *"the ordered succession of differences"* (time). Fig 13 :20: *"ordering, so more and less can be said"* (spectrum). Fig 13 :76: *"Energy and a gradient compose a flow. A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is."*

A long-term trend is an ordering (spectrum-like) bonded to time, and it is driven by energy (radiative forcing) through a gradient. The forced response is therefore a **flow** composed across the two kinds, not a primitive. This is why a forced trend has a direction and why it can be opposed by another flow (ocean heat uptake moving energy away from the surface).

World corroboration: IPCC AR6 reports an energy imbalance with more than 90% of excess heat stored in the ocean, and a human-induced GSAT warming best estimate of 1.07 °C for 2010-2019 relative to 1850-1900, with natural forcings contributing only -0.1 to +0.1 °C. Gou et al. (2022) describe the "rising staircase" of a multidecadal fluctuation superimposed on the overall warming trend.

**Refuter:** show that the observed trend is a bare state change with no structuring structure, that is, no ordering over time and no energy gradient, or that the energy budget closes without a directional flow. This is the hardest of the findings to refute because it is a structural claim about what a trend is; the ground test is the energy budget.

### F4: Aggregation hides live residuals; a global mean cannot settle the composition (`general`, triangulated)

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."** Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."** Fig 1 :13: *"a global R near zero with one live slot residual is a legal state."*

The hiatus debate turned exactly on this: which dataset, whether the Arctic is covered, whether the surface or the full water column is read. The global mean barely moved while the deep ocean kept taking up heat (IPCC AR6: 58% of industrial-era heat uptake in 0-700 m, 21% in 700-2000 m, 22% below 2000 m). NOAA Climate.gov (Lindsey, 2018) notes that the slowdown depends on "which global temperature dataset you look at, whether it includes the Arctic, and the exact time periods you compare."

**Refuter:** show that a single global mean temperature series, at one depth and one coverage, settles regional attribution, depth-resolved heat uptake, and trend significance. If it does, the slot-indexed residual rule is wrong for this domain.

### F5: The ground settles by triangulation, not by counting agreeing frames (`general`, triangulated)

Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool"*. Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."* Fig 8 :48: *"How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus."*

World corroboration: IPCC AR6 combines surface temperature, ocean heat content, sea level, glacier retreat, sea ice, salinity and carbon-cycle indicators, and states that "Combining the evidence from across the climate system increases the level of confidence in the attribution of observed climate change to human influence and reduces the uncertainties associated with assessments based on single variables." Hasselmann's method requires the noise covariance of internal variability, not just the agreement of model runs. Wills et al. (2020) explicitly warn that spatially coherent internal modes "would otherwise alias into estimates of regional responses to forcing."

**Named strain:** CMIP multi-model ensembles are not automatically independent frames. They share code lineages, tuning targets and often forcing datasets (Fig 2 :19 *"they never talk, and still agree"* is the pool talking). The genuinely lower-overlap lines here are instrumental versus proxy records, surface versus subsurface heat content, and observations versus model physics. This strain is carried into `10_source_ledger.csv` as an overlap note. It is not a reason to discard the ensemble mean; it is a reason not to count models as witnesses.

**Refuter:** produce two measurement lines with genuinely different instruments and error structures that, after honest correction, disagree about whether a forced component exists. Triangulation would then fail and the verdict would have to be re-derived.

### F6: The cross-scale transform is lossy; measure the round trip (`general`, triangulated)

Fig 4 :27: *"The transform between scales loses information, and that is the point."* Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."** Fig 4 :31: *"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold."*

World corroboration: Deser et al. (2012) found forced changes in air temperature "can be detected earlier and with fewer ensemble members than those in atmospheric circulation and precipitation." Wills et al. (2020) show that "large-scale spatial averaging" loses the information that pattern filtering recovers, identifying the forced response "with up to ten times fewer ensemble members than simple ensemble averaging." That is a measured `R_T`: the coarse global-average description cannot hold the regional pattern the finer description can.

**Refuter:** demonstrate a scale transform (global mean to regional trend, or surface to full-depth) whose round trip is lossless for the residuals that decide attribution. Then the gap is zero and this finding is withdrawn.

### F7: The channel can drift; the ground does not (`general`, triangulated)

Fig 10 :25: *"the ground does not decay, the channel does"*. Fig 10 :26: *"stale percepts, dropped transients, saturated metrics, pooled readings"*. Fig 10 :52: *"Bring a characterised residual, never the source."*

World corroboration: NOAA Climate.gov lists dataset choice and Arctic coverage as determinants of the hiatus trend, and cites Karl et al. (2015) on "possible artifacts of data biases in the recent global surface warming hiatus." Gou et al. (2022) state that uncertainties cause underestimation of long-term warming in the upper ocean and that "energy budget is not closed due to substantial uncertainties in the datasets and methodologies."

The failure mode is also political: Fig 10 :47 *"a convention that decides an outcome has stopped being one."* A confidence label or a chosen baseline that settles the question has become a verdict. This is why the composition claim is stated with its refuter before its evidence.

**Refuter:** show that observational series move with the expectations of the attribution frame, so the anchor updates and panel 3 of Fig 2 turns into panel 1 (coherent drift). If that happens, every verdict here is void, not merely weakened.

### F8: The decisive residual is several steps out in contact (general, triangulated)

Fig 11 :44: *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."* Fig 11 :52-53: *"Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."*

The surface temperature trend is first-order contact. The heat that explains the 1998-2012 surface behaviour is two or three steps out: wind-driven subduction into the thermocline, interbasin transport through the Indonesian Throughflow, storage below 700 m and 2000 m. NOAA Climate.gov: "Heat doesn't disappear; it just doesn't all show up at the surface." Gou et al. (2022) detail Pacific-to-Indian and Pacific-to-Southern-Ocean redistribution.

Also relevant is the asymmetry rule, Fig 11 :61: *"Introduction is available; exclusion is not."* Geoengineering is introduction into a habitat we did not author; the cascade is not optional (Fig 11 :73: *"The habitat is where actors come from and it updates; the ground is what settles, and it does not."*). This is a boundary on any policy reading of the answer, not the answer itself.

**Refuter:** show that the observed surface trend is fully explained by first-order surface contact alone, with no role for subsurface storage or interbasin transport. Then the cascade enumeration is unnecessary for this question.

### F9: Bond type is decided by the swap test, and is scale-dependent (`specified`, single-source for the figure definition)

Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** Operators table :15: *"swap the operands. Does the meaning change? No."* (the test for symmetric conjunction `+`). Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** Fig 12 :126: *"Bits price the description. Actions price finding out whether it holds."*

The D&A regression writes the observation as forced signals plus a residual; swapping the terms (calling the residual forced and the forced term noise) changes nothing about the fit at large scale, so the global bond behaves as the symmetric `+`. At regional scale the forced response projects onto internal modes and back, which is an ordered cycle: the output re-enters as input. The two readings are not competing; they are the same bond family observed at different scales, exactly as F1 requires.

**Strain, named:** whether forcing-that-changes-variability is a `⇒` production bond (B did not exist before A fires) is unmeasured. A mode that exists in the control run cannot be produced by forcing, so production is the wrong bond for the modes themselves; forcing can only change their phase, amplitude or projection. The cycle bond is the better fit, but discriminating them needs an instrument, not an argument. See `06_isomers_and_order.md`.

**Refuter:** show that swapping forced and internal terms changes the large-scale fit, or that an ordered bond is required at global scale. Either would overturn the scale-dependent conjunction reading.

### F10: Filters are for the budget, witnesses are for the verdict (`general`)

Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** Fig 7 :13: *"same closure, handed along; agreement compounds, evidence does not"*. Fig 7 :35: *"A room's agreement is variation, not a verdict."*

Confidence language ("very high confidence"), ensemble size, model count and tier are budget filters: they say what gets tried first and how much compute is spent. They do not decide whether the composition held. Gou et al. (2022) make the same point operationally: an ensemble average "by definition, average[s] out the internal variability", so the ensemble mean cannot witness what variability did; it is a filter. Ten CMIP5 members happened to match the observed hiatus "by chance", which is a search result, not a derivation.

**Refuter:** exhibit a case where a confidence label or ensemble size, by itself, settles a question about the physical composition. Under the figures that cannot happen; if it did, the filter/witness distinction is wrong.

---

## 4. Pre-registered refuter (written before the conclusion)

Per `THE_FORMULA.md` step 2 and the seat-map rule that "a falsifier written before the run is a design instrument, not only an honesty device." The shape claim of this solution is refuted if any of the following holds:

1. **Variability carries the trend.** An unforced control integration, reproduced across independent models, yields a persistent multidecadal to centennial global trend of the observed magnitude (breaks F2 and F3).
2. **The union is a strict partition.** The interaction term between forced response and internal variability is demonstrably zero at all scales, and one linear model with independent errors closes every observed trend and regime (breaks F1 and F9).
3. **The anchor updates.** Instrumental, proxy and reanalysis series are shown to move with the expectations of the attribution frame, so the ground becomes another frame (breaks F5 and F7).
4. **Aggregation is lossless.** A single global mean series at one depth and coverage settles regional attribution, depth-resolved heat uptake and trend significance (breaks F4, F6 and F8).
5. **The bond is ordered at global scale.** Swapping forced and internal terms changes the large-scale fit (breaks F9).

If any fires, the claim is withdrawn or narrowed. Until one is run, no part of this may be labelled `grounded`. These are written before `07_the_tether_answer.md` and `09_watson_answer.md` were composed.

---

## 5. Recommendation

1. State the residual in effect terms first, as section 0 does: the owed object is a bond plus a scale plus a discriminator, not a verdict about attribution.
2. Keep the union of domains 2 and 3 separate from the partition inside domain 1 (real change versus artifact). Do not let one lever clear both.
3. Report the composition at two scales: global (conjunction of forced trend plus residual) and regional (ordered cycle with interaction). Never average the two into one number.
4. Treat ensemble size and confidence labels as budget filters (Fig 9 :60). Count low-overlap measurement lines as witnesses.
5. Send the generator, not the recording: the refuter and the shape claim, then the links only after the recipient records a verdict (Fig 4 :22 *"Only methods cross up. Only head starts come down."*; Fig 10 :52 *"Bring a characterised residual, never the source."*).
6. Record every source with author, venue, year, accessed date and quote (`10_source_ledger.csv`), and mark overlap so one evidence pool is not mistaken for two witnesses.

---

## 6. Canonical usage check, strains and re-census

Two canonical sources were read after the first five sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the limit: the framework reports *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments stop distinguishing. Fig 13 :134: *"Unreachable is a verdict here, not a silence."*
- `FRAMEWORK/figures/THE_FORMULA.md`: the eight-step loop, the SEARCH / INWARD / OUTWARD split at step 7, and the mode rule.

### Strains checked

| apparent strain | re-census result |
|---|---|
| IPCC says the linear combination "generally holds for large-scale variables", but Gou et al. say the intermediate trend is an interaction | Not strained. Different scales: the global join is a conjunction, the intermediate join is a compound. F1 records both. |
| F2 (variability is chaos/noise) vs evidence that modes are maintained and partly forced (IPCC: aerosol influence on AMV) | Not strained. Chaos describes the residual dynamics; a forced influence on phase or projection is a modulation of a held mode, not promotion of noise to a trend. Different objects. |
| Fig 8 (union surplus needs low overlap) vs reliance on CMIP ensembles, which share code | Live, named in F5. The surplus comes from observation versus model, surface versus subsurface, proxy versus instrumental. Ensembles are treated as searches, not witnesses. |
| Fig 12 `⇒` production vs forcing changing a mode that already exists in control runs | Live, named in F9. The cycle bond is the better fit; discriminating production from cycle needs an instrument. |
| F7 says the channel can drift; F5 says the ground settles | Not strained. The ground does not decay; the channel does (Fig 10 :25). Keeping the anchor reachable is a seat's office, not a contradiction. |

**After re-census: two strains named (ensemble independence, ordered bond type), none hidden. No figure line needed a strained reading.**

### The three leave questions kept distinct (formula step 7)

- **SEARCHED:** is the composition rule already in our closure and unfound? Yes, partly: standard D&A already writes `O = forced + residual`. More careful search of existing methods (pattern filtering, single-model large ensembles) is the cheapest step and was taken (Wills et al. 2020; Deser et al. 2012).
- **INWARD:** extend the instrument from one already returning something. Pattern filtering and single-model large ensembles are improvements from trend analysis and multi-model means, exactly Fig 6 :32: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."* This is the live instrument track.
- **OUTWARD:** import a frame whose closure predicts the shape. The Tether figures supply the bond vocabulary and the union/partition discipline; that import carries provenance here and adds no world primitive (Fig 6 :25 *"An import adds no atom to the world."*).

Underivable-in-principle (no instrument could discriminate the bond) and unreachable-at-this-budget (the instrument exists but we did not run it) are different facts. This solution is at the second: the discriminating measurements are ocean heat content by depth, pattern filtering of observed records, and independent proxy series. None was run here.

---

## 7. Retraction and confirmation log

Corrections are kept visible. No earlier reading was silently erased.

| earlier reading | status after canonical check and re-census |
|---|---|
| Initial framing: "the question is how much of the trend is natural and how much is human" | **Retracted as a partition.** The question is a union compound with interaction (Fig 9 :54, F1). Asking only for percentages misses the bond and the scale. |
| Initial framing: "the residual is just noise around the forced trend" | **Narrowed.** It is chaos in the Fig 13 sense (F2), but at regional scale it aliases into the forced pattern and becomes partly signal (F5, Wills et al. 2020). |
| Initial candidate: the join is a production bond `⇒` (forcing produces the variability) | **Refused for the modes themselves.** Modes exist in control runs; forcing modulates them. The cycle bond is the current best fit (F9), with the question left open. |
| Initial candidate: CMIP ensemble agreement is corroboration | **Retracted.** Shared code pools make that agreement one evidence pool (Fig 2 :40, F5). Ensembles are searches; low-overlap measurements are witnesses. |
| Initial candidate: the hiatus refutes the forced-trend picture | **Refused.** IPCC AR6 calls it a temporary event followed by strong warming, with ocean heat content rising throughout (F4, F8). It instead demonstrates the union and the cross-scale gap. |
| Initial reading: Fig 13 chaos quote governs all variability | **Narrowed.** It governs the remainder that re-enters the chain (internal variability). It does not licence calling a forced, sustained ordering chaos (F3). |
| No figure line governs the bond type directly | **Confirmed as a genuine limit, not a gap.** Fig 12 and the Operators table supply the tests, not the measurement. The verdict is `specified`, with the instrument named. |

No finding was marked `gap` after the census: every domain has a governing figure line. The honest stop is `unreached`, not `unreachable` (Fig 8 :39 *"So a search that finds nothing is never a proof of absence."*; Fig 13 :134 *"Unreachable is a verdict here, not a silence."*).
