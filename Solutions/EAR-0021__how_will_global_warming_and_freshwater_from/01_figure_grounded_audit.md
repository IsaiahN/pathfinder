# Figure-grounded audit: warming, meltwater and major ocean circulation

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap* (Isaiah N, 2026-11-19): LLMs *"can quickly simulate an approximate answer/output with the formula found in the architecture post... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Figures quoted verbatim and only from `FRAMEWORK/reference/03-FIGURES_TEXT.md` (canonical extract, opened this session). Usage rule from `FRAMEWORK/reference/FIGURES_README_canonical.md`. Loop from `FRAMEWORK/figures/THE_FORMULA.md`. World sources opened this session are listed in `10_source_ledger.csv`.

---

## 0. The residual, stated in effect terms before any figure is chosen

The source question is: *How will global warming and freshwater from melting ice affect major ocean circulation systems?*

Stated as an effect, not as a topic:

> R = |Γ(b,a) − o′| per slot s. For each major circulation system s (subtropical Atlantic overturning, subpolar Atlantic overturning, Southern Ocean overturning and deep-water formation, wind-driven gyres), the library Γ predicts a circulation state from the belief b (warming trend, ice-mass loss, freshwater flux) under the action a (the forcing trajectory). The observation o′ returns transport, heat and freshwater transport, convection site, and mixed-layer depth. R is the gap between prediction and return, indexed by s. The question asks which regime closes that gap: a monotone weakening trend, a crossing into a different stable state whose return path is not the same, or a spatial redistribution that a single global index cannot see.

Nothing in that line says "AMOC collapse", "conveyor belt", "tipping point" or "2,050". Those are candidate answers, and by Fig 9 :27 *"describe it before you go looking, or any frame you pick will seem to fit"* they must not lead.

**Anchor check, before census.** A nameable anchor exists: the measured circulation state (transport and convection observations). Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." A model that decides a circulation is weakening does not change what the mooring returns. So this is a well-formed question and not yet a `gap`. Note the distinction that matters here: "does not update on any frame" is not "does not change in time". The circulation changes; it does not change because we believe a model. That distinction is tested in §6 (strain S1).

**Arity, symmetry, scale** (the three descriptors Fig 9 :22 asks for):

- **Arity:** at least three operands. Two forcing channels (thermal warming T, freshwater flux F) and a circulation state C, indexed by slot s and ordered in time t. A two-place reading (warming, circulation) loses the independent freshwater channel and is rejected before it can be fitted.
- **Symmetry:** not symmetric. The channels drive the response; the response does not drive the forcing. The comparison "weaker / stronger" is a threshold relation (Fig 12 :87) against a measured baseline, not a symmetric join.
- **Scale:** the residual is intrinsically cross-scale. Deep convection is a local event; the overturning is a basin transport; heat redistribution is planetary. The time index runs from days at a mooring to millennia in the proxy record. Fig 4 :19 "The kernel is the part that does not change with size: the same loop and the same rule for naming what worked, whether one agent is running it or a thousand." The same buoyancy-to-flow rule must hold at all three sizes; only the actors, currency and anchor change.

---

## 1. Domain census (completed before choosing any governing figure line)

One line per candidate domain: actors, currency, anchor. No nameable anchor means it is not a domain yet (Fig 2 :29, Fig 11 :48).

| id | candidate | actors | currency | anchor | admitted? |
|---|---|---|---|---|---|
| D1 | surface buoyancy and convection | temperature, salinity, freshwater flux, sea ice, wind | surface buoyancy flux / density; mixed-layer depth | measured density profiles, convection site, mixed-layer depth | **yes** |
| D2 | basin overturning and gyres | water masses, currents, mooring and float arrays | volume transport (Sv), heat and freshwater transport | RAPID 26.5 N array, OSNAP subpolar array, Argo | **yes** |
| D3 | the observation channel | moorings, floats, reanalyses, paleo proxies | contact with the circulation state; round-trip gap R_T | the circulation itself, which persists while the channel decays | **yes** |
| D4 | paleo regime history | ice cores, sediments, DO events | reconstructed overturning state over millennia | physical proxy archives | **yes** |
| D5 | "the global conveyor belt" as one object | one belt | one scalar strength number | none: it is a metaphor, not a measured thing | **no. Not a domain.** Fig 11 :48 "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual." |
| D6 | "collapse by year X" as a domain | a date | a binary event | none independent of D2 and D3 | **no. A candidate claim inside D2 and D3**, not a domain |

**D5 is refused explicitly because the world source itself refuses it.** The RAPID array page states that the schematic "great ocean conveyor" expectation (that speeding up at one location means speeding up by the same amount everywhere) is one of the discoveries that was overturned: "wind-forcing plays a dominant role in MOC variability, where previously it was believed to primarily respond to buoyancy forcing at high latitudes", and "meridional coherence of the MOC appears much more complicated than previously expected". A scalar belt has no anchor because no instrument returns it. It is a frame to be refused, not a slot in the census.

**Partition or union.** This is a **union**, not a partition. Thermal warming and freshwater input are two conditions on the same water mass, and they overlap: warm fresh surface water is buoyant for both reasons at once, so the combined effect is more than either channel alone. Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again"; Fig 9 :57 "a case in two conditions is not a harder case of either". It becomes a specific compound with its own loop. One lever aimed at temperature alone leaves the freshwater condition binding, and vice versa. Verdicts for D1 to D4 are kept separate and never averaged.

**Dependency order (Fig 3).** Perception → vocabulary → objective → planning → learn and carry. Fig 3 :20 "The chain is ordered by dependency, not by importance." The residual supports the first three links: we can perceive transport changes, we have density/buoyancy terms for what the water affords, and we can say what counts as progress (a change in transport and convection state). The historic break is between link 3 and link 4 (Fig 3 :24 "Why the middle link is where chains usually break."): for decades there was no instrument returning the basin transport continuously, so "what counts as a change" could only be argued about. Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." RAPID (since 2004) and OSNAP (since 2014) mend that link. The answer is therefore reachable at this budget in a way it was not twenty years ago. This is not a `gap`.

---

## 2. Figure census: verbatim lines quoted before concluding

Each line below was re-opened in `03-FIGURES_TEXT.md` this session and checked as an exact substring (case-insensitive, trailing punctuation removed).

| figure | verbatim line | governs |
|---|---|---|
| Fig 1 :19 | "The residual is indexed by object slot, not aggregated." | per-system indexing; the search unit |
| Fig 2 :29 | "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." | the measured circulation is the anchor |
| Fig 2 :31 | "Independence, between two frames, is how little they draw on the same evidence." | proxies vs direct arrays (D4 vs D2) |
| Fig 2 :40 | "agreement about the world is worthless when the agreeing frames share an evidence pool" | many models agreeing is not a witness |
| Fig 4 :19 | "The kernel is the part that does not change with size: the same loop and the same rule for naming what worked, whether one agent is running it or a thousand." | convection, basin, planet are one rule |
| Fig 4 :30 | "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." | proxy vs array round trip R_T |
| Fig 6 :32 | "inward: is our representation adequate to hold it? The instrument extends access. Fails by refining forever on an axis that cannot carry it. Sharpen in our own terms." | instrument refinement as INWARD |
| Fig 6 :40 | "What is unavailable is a sensor for something that has never registered anywhere, at any resolution." | marks this question as reachable, not unreachable |
| Fig 7 :13 | "same closure, handed along; agreement compounds, evidence does not" | model ensembles are not corroboration |
| Fig 9 :27 | "describe it before you go looking, or any frame you pick will seem to fit" | residual before frame |
| Fig 9 :54 | "And when the split lands on a union rather than a partition, unbundle before you search again." | two forcing channels as compound |
| Fig 10 :24 | "the ground does not decay, the channel does" | the observation channel must be maintained |
| Fig 11 :48 | "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual." | habitat enumerated, D5 refused |
| Fig 12 :121 | "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." | overturning as loop, feedback sign |
| Fig 13 :22 | "a difference that can be spent" | density gradient as directedness |
| Fig 13 :76 | "Energy and a gradient compose a flow." | heat/freshwater and density gradient compose circulation |
| Fig 13 :76 | "A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is." | spatial vs temporal gradient slots |

---

## 3. Findings, one loop per domain, verdicts kept separate

### F1 - D1: the circulation is a gradient-driven flow, and both channels erode the gradient (`triangulated`)

Fig 13 :22 "a difference that can be spent".

Fig 13 :45 "What makes a gradient a gradient is that it can be spent".

Fig 13 :76 "Energy and a gradient compose a flow."

Fig 13 :76 "A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is."

The circulation is a flow composed from energy (heat content and the potential energy of freshwater distribution) and a density gradient. This is the figure's own cross-kind composition, not an analogy imported from fluid mechanics: energy is a state, gradient is a structure, flow is what their bond yields (Fig 13 :74 "Everything else is a composition across the two kinds, never within one."). Surface warming lowers density; added freshwater lowers salinity and therefore density. Both reduce the surface-to-deep density contrast that makes deep convection possible. Because there are two distinct gradients (over space, between low and high latitudes; over time, as the seasonal cycle), the figure itself licenses treating them as different terms, which is exactly why the two forcing channels cannot be averaged into one scalar.

This is corroborated at the ground by the IPCC assessment: "The upper ocean has become more stably stratified since at least 1970 over the vast majority of the globe (virtually certain), primarily due to surface-intensified warming and high-latitude surface freshening (very high confidence)." The assessed mechanism is the figure's claim in world vocabulary. The paleoclimate modelling source sharpens it: the buoyancy flux "depends on the surface freshwater and heat fluxes and on sea surface temperature through the temperature dependence of the thermal expansion coefficient of seawater."

Triangulation status: **triangulated**. Low overlap between the six-term substrate composition (Fig 13) and the cycle/feedback structure (Fig 12, F2). The world sources are secondary and share a physical-oceanography evidence pool with each other, so they are one witness, not three.

**Refuter for F1:** a sustained direct measurement showing the density gradient increasing or holding steady in a deep-convection region while both surface warming and local freshwater flux increase there, with no compensating wind or heat-flux change. That would break the gradient-to-flow prediction in D1.

### F2 - D2: the overturning is a loop, not a chain; the sign of its feedback decides whether it closes (`triangulated`)

Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."

Fig 12 :119 "catalyst. A part that survives its own use."

The overturning is literally a meridional loop: warm surface water flows north, cools, sinks, and returns south at depth. Because the output re-enters as input, the relevant question is not "how much weaker is the belt" but "what is the sign of the loop". A negative (damping) feedback returns the system toward its prior state after a freshwater pulse; a positive (reinforcing) feedback can carry it to a different state, and once there the return path differs. The RAPID observations give ground to this: the array "revealed a major downturn of the MOC in 2010-11 that marked the beginning of a sustained decline since that time", and the same source notes "The MOC varies on timescales of days to a decade, where previously the expectation was for variability on timescales of decades to centuries." A chain metaphor cannot represent that, which is why the conveyor-belt picture fails.

Fig 12 :119 names the catalyst distinction: a part that survives its own use behaves differently across uses from a spent part. Applied to the overturning, the salt carried northward is part of what maintains the density that makes the northward flow sink. Whether that transport is regenerating or spent across a use is a structural question, and nothing in a scalar transport number records which it is.

Fig 13 :31 "a remainder compounding through a chain that amplifies is chaos" licenses the claim that variability can amplify a small forcing into a large response, so a gradual forcing can produce a non-gradual-looking record. This is a structural permission, not a dated prediction.

Triangulation status: **triangulated**. Fig 12 (cycle sign, catalyst) and Fig 13 (chaos remainder) have low conceptual overlap: one is about closure of a loop, the other about amplification through a chain. The paleoclimate modelling source corroborates at the ground with "transitions between different convection patterns associated with strong and weak AMOC states", but shares a pool with the other world sources and adds no independent figure weight.

**Refuter for F2:** a well-observed basin in which a freshwater anomaly produces a response of the opposite sign to the one predicted from its feedback structure, or in which two consecutive anomalies of the same sign produce responses of opposite sign with no change in background state. That would break the cycle-sign claim.

### F3 - D2/D3: the residual is indexed per system; a global average is a frame-internal quantity, not a witness (`triangulated`)

Fig 1 :19 "The residual is indexed by object slot, not aggregated."

Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."

The slots are the subtropical array, the subpolar array, the Southern Ocean, and the gyres. The world sources show why the index matters: OSNAP reports "The monthly MOC from 2014 to 2020 is derived for the full array (16.51 ± 3.3 Sv, mean±standard deviation), the OSNAP West (2.72 ± 1.34 Sv) and OSNAP East (16.35 ± 2.91 Sv) subsections." The subpolar signal lives almost entirely in the eastern leg. A global or even basin-wide scalar would average the live East slot into a quiet West slot. RAPID independently reports that "wind-forcing plays a dominant role in MOC variability" and that "meridional coherence of the MOC appears much more complicated than previously expected", so subtropical and subpolar indices need not move together. This is a fact about the observation channel, not an inconvenience to be smoothed.

Triangulation status: **triangulated** for the framework rule (Fig 1, independent of the figure lines in F1 and F2); **single-source in the world** for the specific East/West numbers, which come from one observing programme and should not be counted twice.

**Refuter for F3:** a demonstration, after removing measurement noise, that the subpolar and subtropical indices move together with high correlation across multiple independent observing systems, so that one global scalar predicts both. That would break the per-slot claim.

### F4 - D3: the ground persists; the channel is what fails (`triangulated`)

Fig 10 :24 "the ground does not decay, the channel does"

Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."

The circulation is the ground. Moorings, floats, reanalyses and proxies are the channel. The failure mode in this question is not that the circulation stops existing but that the reading goes stale: "stale percepts, dropped transients, saturated metrics, pooled readings" (Fig 10 :25-26). The observing programmes are therefore seat work, not loop work: keep the anchor reachable. This also explains why a 20-year array is decisive and a hundred agreeing models are not (Fig 7 :13 "same closure, handed along; agreement compounds, evidence does not").

The recent reanalysis evaluation source returns the same shape at the ground: five reanalyses compared against three monitoring arrays "agree better with observations in the upper overturning, but the deep flow and the South Atlantic remain uncertain." That is a channel diagnosis, not a claim about the circulation itself, and the distinction is the point.

Triangulation status: **triangulated** (Fig 10 ground/channel + Fig 2 anchor rule). The world source is a single preprint under review and carries no verdict weight.

**Refuter for F4:** showing that an apparent circulation change in the observational record is reproducible across independent instruments and also present in the paleo proxies, so that the channel is not the limiting term. That would narrow the honest stop rather than reverse the verdict.

### F5 - D4: the past gives regimes, not a schedule (`triangulated`)

Fig 8 :39 "So a search that finds nothing is never a proof of absence."

Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence."

The paleo record supplies examples of rapid, large overturning changes. Willeit et al. (2024) write: "The geologic record provides examples of rapid and large AMOC variations, with phases of AMOC weakening, preceding an AMOC shutdown." Caesar et al. (2021) reconstruct "the weakest state of the AMOC occurring in recent decades". What the record does not supply is a schedule: the absence of an observed collapse in the last century is not evidence that none is possible, and the presence of past collapses is not evidence that one is imminent (Fig 8 :39). Proxies and direct arrays are two frames with low evidence overlap (Fig 2 :31), so an agreement between them is triangulation; two reanalyses built from the same observations are one frame wearing two names.

Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." The round trip here is proxy reconstruction → abstraction ("the overturning was weak") → direct array. The gap R_T is what the proxy cannot hold about seasonal and interannual variability, and it must be reported, not assumed zero.

Triangulation status: **triangulated** across Fig 8, Fig 2 and Fig 4, with low overlap. World sources share a paleo-modelling pool and are counted once.

**Refuter for F5:** a proxy record with a demonstrated chronology and an independent archive showing no abrupt overturning variation across several large freshwater perturbations. That would break the regime claim.

### F6 - The union is not one lever (`triangulated`)

Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."

Fig 9 :57 "a case in two conditions is not a harder case of either"

Fig 11 :46 "conditions: light, water, temperature, season, terrain"

The habitat enumeration names temperature and water as separate conditions, but Fig 11 :49-51 adds that an actor's valence is relative to the residual: the same freshwater is a malfactor to deep convection and a benefactor to stratification and sea-ice retention. There is no standing list of good and bad forcings. A lever that clears the thermal condition (cool the surface) leaves the freshwater condition binding, and the residue is not a smaller version of the same problem; it is a specific compound.

Triangulation status: **triangulated** (Fig 9 union rule + Fig 11 habitat and valence). Corroborated at the ground by the IPCC phrase "surface-intensified warming and high-latitude surface freshening", which names both conditions in one sentence.

**Refuter for F6:** a controlled experiment showing the two channels combine additively with no interaction term across the observed range, so the compound reduces to a partition. That would retire the union claim.

### F7 - What survives, and what is refused

| claim | mode | figure | status |
|---|---|---|---|
| The circulation is a flow composed from an energy state and a density gradient | `general` | Fig 13 :22, :76 | retained, triangulated |
| Both warming and meltwater erode the density gradient that drives convection | `specified` | Fig 13 :45, :76 | retained, triangulated |
| The overturning is a loop whose feedback sign decides closure | `general` | Fig 12 :121 | retained, triangulated |
| The residual must be indexed per circulation system, never as one global scalar | `general` | Fig 1 :19, :22 | retained, triangulated |
| The observing channel, not the circulation, is what can fail | `general` | Fig 10 :24 | retained, triangulated |
| The past supplies regimes, not a collapse date | `general` | Fig 8 :39 | retained, triangulated |
| The two forcing channels form a compound, not a partition | `specified` | Fig 9 :54, :57 | retained, triangulated |
| "The global conveyor belt is weakening" as a single claim | refused | Fig 1 :22, RAPID source | **refused**: no anchor, averages the slots |
| "The AMOC will collapse in year X" | refused | Fig 8 :39, Fig 9 :32 | **refused**: a schedule, not a shape |
| A single number for "the" circulation response | refused | Fig 9 :32 "you get a kind of thing, never the answer itself" | **refused** |

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach; the essays call a pre-registered falsifier a design instrument rather than an honesty device. The shape claim is refuted if any of the following holds:

1. **F1 fires:** sustained direct measurement shows the density gradient increasing or holding in a deep-convection region while warming and freshwater flux both increase there, with no compensating wind or heat-flux change.
2. **F2 fires:** a well-observed basin shows a freshwater anomaly producing the opposite sign of response to its feedback structure, or repeated same-sign anomalies producing opposite responses with unchanged background state.
3. **F3 fires:** after noise removal, independent subtropical and subpolar observing systems show high correlation so one global scalar predicts both.
4. **F5 fires:** an independently dated multi-archive paleo record shows no abrupt overturning variation across several large freshwater perturbations.
5. **F6 fires:** controlled experiments show the thermal and freshwater channels combining additively with no interaction across the observed range.
6. **Census fires:** any admitted domain D1 to D4 loses its nameable anchor on re-census.

If any fires, the affected finding is withdrawn and the shape is re-censused. Until one is run, nothing is labelled `grounded`.

---

## 5. Recommendation

1. Lead with the shape and the refuter, not with "collapse". The grounded world statement is that a decline is very likely this century with medium confidence that it will not be abrupt before 2100, and low confidence in quantitative projections (IPCC AR6). Our structural claim is compatible with that and adds a per-slot instruction, not a date.
2. State mode on every sentence. "The circulation will weaken" is a prediction; "the circulation is a gradient-driven loop" is structural; neither is a measurement.
3. Unbundle the two channels in any test. A test that varies only temperature cannot clear the freshwater condition, and one that varies only freshwater cannot clear the thermal one (Fig 9 :54).
4. Report the observation channel separately from the circulation. A disagreement between reanalyses is a channel problem until the ground settles it (Fig 10 :24).
5. Send the generator, not the conclusion. Fig 4 :25 "A recording carried upward looks like knowledge and is a description of one occasion."

---

## 6. Canonical usage check and strains

Two usage sources were read after the first sections: the canonical figures README and `THE_FORMULA.md`. The README's rule is that the figures "outrank everything else in the repo" and that "the quotes are the authority, not this summary"; it also says a reading that makes one figure contradict another has misidentified its domain, and that the framework returns "a shape, not a name".

| id | apparent strain | handling | status |
|---|---|---|---|
| S1 | Calling the circulation "the anchor" while the circulation plainly changes in time | Re-census: Fig 2 :29 says the anchor does not change its answer *because of what any frame thinks*, not that it is static. A changing physical system is still the ground. The observing channel is what decays (Fig 10 :24). | resolved, no smoothing |
| S2 | Fig 13 is a physical substrate of six terms; applying it to ocean flow might seem to rename salinity as a seventh term | Re-census: no new primitive is minted. Heat/freshwater play the energy slot, density contrast plays the gradient slot, circulation is the derived flow. The six-term set governs the composition rule, not a new ocean vocabulary. | resolved |
| S3 | Chaos (Fig 13 :31) seems to imply no prediction is possible | Re-census: chaos licenses amplification of a residual, not the absence of structure. The world assessment's "very likely decline" and "medium confidence no abrupt collapse before 2100" are compatible with a noisy trajectory. The figure governs the shape of the response, not a probability. | resolved |
| S4 | Fig 12 :121 cycle sign seems to require a binary "collapse / no collapse" | Re-census: the figure says the sign decides whether the loop *closes*, not what the state is called. A damped loop and a reinforcing loop are both legal; the instrument must decide which is present. No binary is minted. | resolved |
| S5 | A scalar "conveyor strength" is useful in many papers, so refusing it looks like a preference | Re-census: the refusal is figure-driven (Fig 1 :22) and ground-driven (OSNAP East 16.35 Sv vs West 2.72 Sv, RAPID wind dominance). It is not a taste. | resolved |

No unresolved strain after re-census. Every strain was sent back to the census rather than smoothed into a softer reading.

---

## 7. Retraction and confirmation log

Corrections are kept visible. Nothing earlier is silently erased.

| earlier reading | status after canonical check |
|---|---|
| First draft opened with "the AMOC is collapsing" | **Retracted.** That is a dated binary, not an effect-term residual. The residual is now the per-slot prediction-to-observation gap, and the question of regime is left open until the ground settles it. |
| First draft treated warming and meltwater as two separate questions | **Retracted as a partition.** Re-census found a shared water mass and overlapping buoyancy effect; Fig 9 :54 governs a union compound. |
| First draft cited "unreachable" because collapse timing is unknown | **Retracted.** Fig 6 :40 governs a sensor for something that has never registered. Here sensors exist (RAPID, OSNAP, Argo), so the case is reachable with instrument limits, not unreachable. What is unknown is the schedule, not whether anything registers. |
| First draft counted four world ocean papers as four witnesses | **Retracted.** They share a physical-oceanography evidence pool. They are one witness with several views (Fig 2 :40). |
| Fig 2 "anchor" applied to a changing circulation | **Confirmed after re-census** with the meaning fixed in S1. |
| Fig 1 per-slot indexing | **Canonically confirmed** and elevated to a decisive finding after the OSNAP East/West numbers were read. |
| The refusal of the "conveyor belt" scalar | **Confirmed** by both the figures (Fig 1 :22) and the RAPID source's own account of the overturned expectation. |

### Round trip

T_A (going up): carry the per-slot shape to one sentence: *a warming, freshening ocean loses the density contrast that drives its overturning, and the response must be watched per system because a global average hides where it is happening.*

T_E (coming back): put that into a specific observing decision: *keep the subpolar and subtropical arrays running, report wind and buoyancy contributions separately, and treat a scalar index as a summary with a stated loss.*

R_T = gap(x, (T_E ∘ T_A)(x)). The gap is what the one sentence cannot hold: the sign of the feedback loop, the distinction between a channel failure and a circulation change, the non-additivity of the two forcing channels, and the refusal of a collapse date. This gap is not an error to eliminate; it is the measurement of what the coarser description cannot hold (Fig 4 :31).

### Final audit line

The shape survives the canonical check; the dated and scalar claims do not. Mode `specified`, ungrounded. Verdicts are kept separate by domain and never averaged. No figure quote in this audit came from a summary, and every quote was checked as an exact substring of `03-FIGURES_TEXT.md`.
