# Figure-grounded audit: EAR-0016 regional rainfall and decision-scale confidence

**Mode of this document: `specified` on the structural shape, `general` on the scope of the limit, `gap` on the physical direction. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* says LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No climate observation was taken and no climate model was run.

**Sources.** Verbatim figure text with line numbers: `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. Formula and seat rules: `FRAMEWORK/figures/THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`. World sources were fetched 2026-11-22; see `10_source_ledger.csv`.

---

## 0. The residual, stated in effect terms

The question carries two effects that are routinely answered as if they were one.

**E1, direction effect.** A statement of the form "rainfall in region X over period Y will shift in direction d by magnitude m" commits to a signed prediction. Options: assert a determinate shift, or return the shape any such assertion must have and name what would settle it. What each leads to: asserting a shift risks a false-precision adaptation decision; returning the shape plus a refuter keeps the claim checkable but does not give a town a number.

**E2, confidence effect.** A statement of the form "we are c percent confident at the scale community Z needs" commits to how evidence is pooled across regions and across scales. Options: a single aggregate confidence for a continent, or a confidence indexed per region and per decision scale. What each leads to: the aggregate is cheap and can hide a live local signal; the indexed version is expensive and cannot be manufactured by averaging.

**R (the working residual).** The gap between what a community needs, namely a decision-relevant local rainfall statement with an honest confidence, and what global and regional climate projections deliver, namely coarse, model-dependent, often low-signal statements whose confidence is usually reported at sub-continental scale. R is not one gap: it is a union of a physical-content gap (what actually happens to rainfall) and an inference-shape gap (how confidence may legitimately be stated). Fig 9 :5 puts the diagnostic first: *"are not one hard question but several well-formed ones. Split it rather than search."*

**Binding the sought-for shape as an ordinary term** (Formula, "Direction"): an acceptable answer must (a) be region-indexed, (b) carry a measured cross-scale loss, (c) discount correlated witnesses, (d) separate budget limits from principle limits, and (e) wait for the ground for settlement. If those five are present, the answer has the right shape even where it names no wetter/drier direction.

---

## 1. Domain census before choosing any figure line

### R by arity, symmetry and scale

- **Arity:** two conditions (physical shift, decision-scale confidence), so a **union compound**, not one hard problem. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*
- **Symmetry:** asymmetric under scale change. Global to local is lossy; local to global is a reconstruction, not an inverse. Fig 4 :27: *"The transform between scales loses information, and that is the point."*
- **Scale:** global, sub-continental (the AR6 reference regions), local (kilometres), decision scale (a town, a watershed, a season). The loop runs at each scale; the membrane between them is the object of study.

### One line per domain: actors, currency, anchor

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| **A. Physical climate system** | atmosphere, ocean, land surface, aerosols, convection, circulation modes, gauges and satellites as instruments | water flux, energy, accumulated observation; per-region residual `R_s` | the ground: realised rainfall and its measurement | physical direction; **no figure line names a direction** |
| **B. Modelling and inference frame** | GCMs, RCMs, downscaling, multi-model ensembles, single-model initial-condition large ensembles (SMILEs) | prediction minus observation; ensemble spread; effective number of independent models; budget in bits and actions | the ground (observations) plus instruments; agreement is not an anchor | partition of uncertainty; per-slot residual; independence; scale loss |
| **C. Decision and community frame** | communities, water and agriculture planners, climate services, indigenous and local knowledge | usable information, decisions, values, trust | the ground of the decision: what rainfall actually arrived and what the decision paid | distillation; describe the effect before choosing a frame |
| **D. Verification frame** | expert readers, public institutional venues | residuals and refutations, not agreement | the ground, never agreement | verifier must not hold the interiors |

**Partition or union.** A union of A with B, C and D. A (what the physical system does) needs a separate loop from B/C/D (how a claim may be stated and checked). The overlap, "what a community can legitimately believe", is a compound with its own loop. Fig 9 :57: *"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."*

**No nameable anchor means it is not a domain yet.** A has an anchor (rain gauges, satellite products, reanalyses, the realised season). B has an anchor. C has an anchor in the decision's outcome. D has an anchor. All four are domains. A "global confidence number" is not a domain: it has no anchor of its own, only an average of other domains' readings.

**Dependency order (Fig 3).** Describe R in effect terms -> establish per-slot structure -> check independence of frames -> measure the cross-scale round trip -> distinguish budget from principle -> wait for the ground. Effort spent refining a global mean before this order arrives at a step that cannot use it: *"Optimising a link that already works cannot rescue one that does not."* (Fig 3 :19).

**Strain test applied while censusing.** An early reading tried to use Fig 8 :32 (*"no search, however long, adds an atom"*) to conclude that more climate models can never help. That strains the line: a larger *initial-condition* ensemble is an instrument that returns something new about internal variability, not a re-search of the same closure. Re-census: Fig 6 :32 governs instruments, Fig 8 :32 governs composition inside a fixed closure. Different quantities; strain dissolved, and the earlier reading is retracted in section 6.

---

## 2. Figure census: verbatim lines before conclusion

Quoted from `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Every string below is checked against that file.

| figure | verbatim line | governs |
|---|---|---|
| Fig 1 :19 | *"The residual is indexed by object slot, not aggregated."* | confidence must be per region, not a global mean |
| Fig 1 :22 | *"Aggregating across slots is how a live signal disappears into an average."* | the failure mode of continental-scale confidence reports |
| Fig 1 :28 | *"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."* | object = region/community, not model timestep |
| Symbols :43-44 | *"R is measured per slot, never as a single global number."* | definition-level support for the same claim |
| Fig 4 :27 | *"The transform between scales loses information, and that is the point."* | global to community is lossy |
| Fig 4 :30 | *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* | `R_T` must be measured |
| Fig 2 :31-32 | *"Independence, between two frames, is how little they draw on the same evidence."* | model genealogy and shared code |
| Fig 2 :44 | *"The effective-sample-size correction for correlated observations is standard in survey statistics and meta-analysis; the collapse is the same arithmetic read as a warning."* | 57 correlated models are not 57 witnesses |
| Fig 8 :49 | *"Two frames that overlap almost completely are one frame wearing two names."* | model families |
| Fig 2 :29 | *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* | realised rainfall is the anchor; ensemble agreement is not |
| Fig 2 :35 | *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* | no vote among models |
| Fig 8 :40 | *"underivable-in-principle and unreachable-at-this-budget are different facts"* | chaos versus resolution/observation limits |
| Fig 6 :32 | *"An instrument is not built from a description. It is improved from a worse instrument already returning something."* | downscaling improves from a coarser model already returning something |
| Fig 8 :32 | *"no search, however long, adds an atom"* | closure is idempotent; distinguishes search from instrument change |
| Fig 9 :26-28 | *"describe it before you go looking, or any frame you pick will seem to fit"* | residual before choosing downscaling method |
| Fig 8 :53 | *"Residual first, frame second."* | same, compressed |
| Fig 11 :43 | *"The habitat is enumerated, never composed."* | list every actor in contact with the regional residual |
| Fig 9 :60 | *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* | resolution, ensemble size, confidence class are budget filters |
| Fig 9 :44 | *"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."* | absence of a detected trend is not proof of no trend |
| Fig 13 :134 | *"Unreachable is a verdict here, not a silence"* | say "unresolved at this scale" explicitly |
| Fig 12 :126 | *"Bits price the description. Actions price finding out whether it holds."* | two currencies of a projection: resolution and observation cost |
| Fig 10 :52 | *"Bring a characterised residual, never the source."* | outreach order |
| Fig 7 :35 | *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* | many agreeing readers cannot settle the residual |

### Lines deliberately NOT used as figure verdicts

- No figure line states a wetter or drier direction for any region. The figures are domain-agnostic; they do not contain hydrology or radiative transfer. Any attempt to extract "the monsoon will weaken" from them is strain, not derivation.
- Fig 13 :75 (*"Two states never bond directly"*) belongs to the six-term substrate, not to precipitation. Strained readings were declined and the line is excluded from this census.
- `THE_FORMULA.md` step 5 (*"the ground settles it. Verified only by what pays. A gate is not the ground."*) is a framework primary but is not in `03-FIGURES_TEXT.md`; it is cited as Formula step 5, never as `Fig N :line`.

---

## 3. Findings F1 to F9, each with a refuter

### F1 — Physical direction is `gap` at the figures (decisive for E1)

After a genuine census of all thirteen figures plus both tables, no line governs the sign or magnitude of a regional rainfall change. The physical content lives in domain A, whose actors are convection, circulation, aerosols and land surface, none of which is a term in the framework. The six-term substrate (space, time, energy, spectrum, gradient, network) is a grammar, not a hydrology.

What the figures *do* govern is the shape of the claim: a direction must be stated per region and per period, it must not be smuggled in as a global mean, and it remains a `candidate` until the ground pays (Formula step 5: *"the ground settles it. Verified only by what pays. A gate is not the ground."*). The gap is then stated plainly: *"Unreachable is a verdict here, not a silence"* (Fig 13 :134).

A directional statement about rainfall can enter this package only as a **provenanced import** from climate science, with a source gate and a shadow test (Fig 6 :14, *"the only operator that moves the wall"*), and it is then secondary corroboration, never a figure verdict. The world sources in `09_watson_answer.md` are used exactly that way.

**Refuter F1:** produce a verbatim figure line that names a wetter/drier direction, or a derivation from the six-term set that yields a signed precipitation change for a named region. If either exists, domain A moves from `gap` to governed and this finding is withdrawn.

### F2 — Confidence must be per slot, never an aggregate (E2, triangulated)

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* Symbols :43-44: *"R is measured per slot, never as a single global number."*

Here a slot is a region or community, and an object is a place-timescale pair. A statement such as "confidence is medium for South Asia" aggregates over mountain, coast and delta, and is exactly the averaging the figures forbid. Fig 1 :28 adds that *"The gap is measured per object, not per step"*, so the relevant indexing is by place and decision horizon, not by model timestep.

The world literature corroborates the shape, as secondary evidence only: the IPCC AR6 WGI Chapter 11 notes that *"Low confidence is assessed when there is limited evidence ... or a lack of agreement on the evidence of a change, which may be due to large variability or inconsistent changes depending on the considered sub-regions, time frame, models, assessed metrics, or studies."* That is a per-slot rule stated in assessment language.

**Triangulation:** Fig 1 (agent loop) and Symbols table (definitions) are two low-overlap figure sources. **Mode: `specified`** on "must be per slot", not `grounded`.

**Refuter F2:** show that a single aggregate confidence figure can decide a community-scale question without loss, for example by proving that the round trip of F3 has zero gap for precipitation at decision scale. Then per-slot indexing is unnecessary and this finding falls.

### F3 — The global-to-community loss is a round trip that must be measured (E2, triangulated)

Fig 4 :27: *"The transform between scales loses information, and that is the point."* Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* The Symbols table defines `R_T` as *"The gap between what was sent up and what came back down"*, the round-trip quantity. Formula step 6 writes `R_T = gap(x, (T_E ∘ T_A)(x))`.

Applied here: send up a global precipitation projection (abstraction), bring it back down as a local decision-relevant rainfall statement (concretisation), and measure what the coarser description could not hold. The world source that most directly bears is Kendon et al. 2023, who found that a 2.2 km convection-permitting model gives a roughly fourfold increase in UK events above 20 mm/h by the 2070s where a coarser 12 km regional model gives only 2.6x, and that *"these changes are not realised as a smooth trend"*. That difference is a measured `R_T`, not an argument.

Fig 4 :31: *"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold"*. So the honest output is a projection plus its measured scale gap, not a projection presented as if the gap were zero.

**Triangulation:** Fig 4 (membrane) and Formula step 6 / Symbols table (`R_T`) are independent figure locations. **Mode: `specified`.**

**Refuter F3:** exhibit a lossless downscaling transform for precipitation at decision scale, with a measured round-trip gap of zero across multiple regions. Then `R_T` need not be reported and this finding is withdrawn.

### F4 — Ensemble agreement from a shared evidence pool is one witness (E2, triangulated)

Fig 2 :31-32: *"Independence, between two frames, is how little they draw on the same evidence."* Fig 2 :44: *"The effective-sample-size correction for correlated observations is standard in survey statistics and meta-analysis; the collapse is the same arithmetic read as a warning."* Fig 8 :49: *"Two frames that overlap almost completely are one frame wearing two names."*

A 57-member CMIP6 ensemble is not 57 independent checks of a regional rainfall projection. The world literature is unusually direct here. Pathak et al. 2023 report that *"After accounting for similarity, the information from 57 CMIP6, 47 CMIP5, and 24 CMIP3 models can be explained by just 11 independent models"*, and that the effective number stayed near 11 across all three generations. Abramowitz et al. 2019 add that *"nominally different models might have similar biases because of similarities in the way they represent a subset of processes, or even be near-duplicates of others, weakening the assumption that they constitute independent estimates."*

This is a figure verdict, not a climate verdict: the figures say correlated agreement is disqualifying for a verdict (Fig 2 :40). The climate sources merely show that the correlation is real in this particular field. Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."* Adaptation decisions are expensive, so independence must be bought with genuinely distinct evidence: observations, process understanding, indigenous knowledge, and single-model initial-condition ensembles used for a different purpose (sampling `R_s` rather than giving extra votes).

**Triangulation:** Fig 2 (ground) and Fig 8 (union surplus) are low-overlap. **Mode: `specified`.**

**Refuter F4:** demonstrate that two GCMs sharing a predecessor code and parameterisation suite contribute fully independent information about the same regional residual. Then the effective-sample-size correction is inapplicable here and this finding falls.

### F5 — "Unreachable at this budget" is not "underivable in principle" (E2, triangulated)

Fig 8 :40: *"underivable-in-principle and unreachable-at-this-budget are different facts"*; :41 *"Underivable: go outside."* Fig 6 :32: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."* Fig 6 :34-35: *"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."*

For a community-scale rainfall question these are different diagnoses with different instructions:

- **Unreachable at this budget:** the signal exists but the current grid, observation network or ensemble size cannot resolve it. Remedy: a better instrument, coarse model to convection-permitting model, longer record, more independent realisations. Kendon et al. show this is real: 25 years of observations are *"not sufficient, and only a large ensemble as used here allows us to robustly determine the regional signal in extreme hourly precipitation."*
- **Underivable in principle:** the quantity is not a stable target at that scale and lead time. Krishnamurthy 2019, from nonlinear dynamical systems, reports that *"chaos imposes limitation on the accuracy of the prediction of instantaneous state of the weather system, which is less than about 10 days"*, and that predictability of climate variability is not well understood beyond that.

Conflating them is the error Fig 8 names: importing against a budget limit adds an atom that was not needed, while treating a principle limit as a budget limit spends money on resolution that cannot help. Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

**Live strain, named:** the figures do not supply an instrument that decides which of the two applies to a given town's question. Fig 8 tells us to keep them apart; it does not tell us how to classify a particular case. The figure-grounded answer stops there and says so.

**Triangulation:** Fig 8 (scope) and Fig 6 (instruments) are distinct figure locations. **Mode: `specified`**, with the classification itself `gap`.

**Refuter F5:** show a single observation or derivation that classifies a named community's rainfall question as underivable rather than merely budget-limited, using only figure terms. Then the strain is closed and the verdict may move to `grounded` for that case.

### F6 — Settlement waits for the ground, not for agreement (E1 and E2)

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Fig 10 :24: *"the ground does not decay, the channel does"*. Formula step 5: *"the ground settles it. Verified only by what pays. A gate is not the ground."*

A projection is a `candidate` until realised rainfall arrives and the decision pays or does not. Model agreement, peer endorsement and a confidence label are gates or filters, not the ground. Fig 9 :44: *"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."* Hence a decade with no detected local trend is not evidence of no trend; Kendon et al. show that *"a lack of record rainfall values, even after many decades of observations, is not evidence of an absence of an underlying increasing trend in extreme rainfall."*

**Mode: `general`** on the structural claim that agreement cannot settle; **`specified`** on its application to rainfall.

**Refuter F6:** produce a case where model agreement alone settles a community's rainfall question without any ground reading, and where the decision's outcome would have been the same under the rival projection. Then agreement is functioning as an anchor here and this finding needs re-census.

### F7 — Describe the residual before choosing the frame (method)

Fig 9 :26-28: *"describe it before you go looking, or any frame you pick will seem to fit"*. Fig 8 :53: *"Residual first, frame second."* Fig 6 :30: *"Cast it in effect terms."*

The operational order for this question is: describe the community's residual in effect terms first (what rainfall-related decision is failing, at what place and horizon), and only then select dynamical downscaling, statistical downscaling, a SMILE, a storyline, or a co-production process. Selecting the method first and fitting the residual to it is the inversion Fig 9 forbids. IPCC AR6 WGI Chapter 10 corroborates the order in assessment language: *"Distilling regional climate information from multiple lines of evidence and taking the user context into account will increase the fitness, usefulness and relevance for decision-making and enhances the trust users will have in applying it (high confidence)."*

**Mode: `general`** (a method rule from the figures).

**Refuter F7:** show a case where choosing the downscaling frame first yields a residual description that is invariant across frames. Then the ordering constraint is not load-bearing.

### F8 — The habitat of a regional residual must be enumerated (method)

Fig 11 :43: *"The habitat is enumerated, never composed."* Fig 11 :44: *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."*

For a rainfall residual the habitat includes: observations and their density, topography, land use and irrigation, aerosols, large-scale modes of variability (ENSO, AMV, NAO, SAM), catchment and drainage, and the decision's own exposure and vulnerability. This is a list read off the world, not derived from the six-term set. Fig 11 :40: *"An improvement that does not change contact changes nothing, however much it improves."* A finer grid that does not change contact with the actual decision is not an improvement in capability.

IPCC AR6 WGI Chapter 10 corroborates second-order contact: *"Regional climate change is the result of the interplay between regional responses to both natural forcings and human influence ... responses to large-scale climate phenomena characterizing internal variability ... and processes and feedbacks of a regional nature."*

**Mode: `general`.**

**Refuter F8:** exhibit a regional rainfall residual whose habitat is closed under direct contact alone, with no second-order cascade. Then enumeration may stop early and this finding is narrowed.

### F9 — Verdicts stay separate: what survives and what does not

| finding | domain | status | mode | triangulation |
|---|---|---|---|---|
| F1 physical direction is `gap` | A | gap after full census | general | no figure line; world sources secondary only |
| F2 confidence per slot | B, C | survives | specified | triangulated (Fig 1, Symbols) |
| F3 measure cross-scale `R_T` | B, C | survives | specified | triangulated (Fig 4, Formula/Symbols) |
| F4 discount correlated ensembles | B, D | survives | specified | triangulated (Fig 2, Fig 8) |
| F5 budget vs principle distinct | B | survives; classification unresolved | specified / gap on classification | triangulated (Fig 8, Fig 6) |
| F6 ground not agreement | A, B, D | survives | general + specified | triangulated (Fig 2, Fig 10, Formula) |
| F7 residual before frame | C | survives | general | single-source within figure set (Fig 8 :53), corroborated by Fig 9 :26-28 |
| F8 habitat enumerated | A, C | survives | general | single-source (Fig 11) |

Never averaged: a triangulated verdict on the *shape* of confidence does not make the *direction* verdict less of a gap.

---

## 4. Pre-registered refuter (written before the conclusion)

Per the standing rule that a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. A global or continental-mean confidence statement is shown to decide a community-scale rainfall question with a measured round-trip gap of zero (breaks F2 and F3).
2. Two climate models known to share predecessor code and parameterisations are shown to be independent witnesses for the same regional residual (breaks F4 and Fig 2 :31-32).
3. All community-scale disagreement is shown to be removable by more search at fixed instrument and fixed observations (breaks F5, Fig 8 :32, Fig 6 :32).
4. A verbatim figure line, or a derivation from the six-term set, yields a signed precipitation direction for a named region (breaks F1 and moves domain A out of `gap`).
5. A ground reading arrives that pays for one specific regional projection and also pays for its rival (breaks F6; if both pay, the residual was misdescribed and needs re-census).

If any fires, the corresponding finding is withdrawn visibly in section 6, not silently edited.

---

## 5. Recommendation

1. Answer E1 with a `gap` plus a provenanced import: state what climate science currently supports (heavy precipitation intensifies with warming; mean precipitation direction is region-dependent and often low confidence), label it secondary, and do not present it as a Tether derivation.
2. Answer E2 with the five-part shape of F2 to F6, stated per region and per decision horizon.
3. Report the round-trip gap explicitly: coarse global projection, downscaled local statement, measured loss. Do not present a downscaled map as if the loss were zero.
4. Count independent witnesses, not model rows. Record genealogy and shared components in the provenance of any ensemble claim.
5. Keep budget filters out of the verdict. Resolution, ensemble size and confidence class select what gets tried; they do not decide what is true.
6. Use the public institutional venues in `03_public_contact_points.csv` for a one-to-one verification offer, residual and refuter first (Fig 10 :52).

---

## 6. Canonical usage check, corrections and retractions

Two framework sources were read after the first five sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the canonical limit: the framework reports *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments stop distinguishing and records the lineage.
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are the ground for design questions; *"the seat reads the ground, it does not ask the anchor to decide"*. So no question here is escalated for a ruling that the figures already settle.

| earlier reading | status after canonical check |
|---|---|
| "Fig 8 :32 means more models can never help" | **Retracted.** Re-census: Fig 6 :32 (*"An instrument is not built from a description"*) governs instruments; Fig 8 :32 governs composition inside a fixed closure. More independent realisations are a new instrument returning something about internal variability, not re-search of the same set. Kendon et al. 2023 is the world-side demonstration. |
| "a global confidence label is a verdict" | **Refused.** Fig 9 :60 (*"Never let a filter hand you a verdict"*) and Formula step 5 make it a budget/filter report, not settlement. |
| "IPCC medium/high confidence is the framework's verdict" | **Narrowed.** IPCC confidence is a secondary assessment product from a different closure. It is recorded as corroboration with declared overlap, never substituted for the figure verdict. |
| "F1 is a silence" | **Refused.** Fig 13 :134 (*"Unreachable is a verdict here, not a silence"*). The gap is stated, with what would close it. |
| "physical direction could be read from the six-term substrate" | **Refused as strain.** The substrate is a grammar over states and structures; it contains no precipitation variable. Re-census sends it to domain A. |
| F7 relied on Fig 8 :53 alone | **Confirmed and strengthened.** Fig 9 :26-28 gives the same rule from a different figure. Marked single-source-to-triangulated in the table above, with the upgrade recorded rather than hidden. |

---

## 7. Strains and honest stop

- **Fig 6 :32 versus Fig 8 :32.** Dissolved by re-census (instruments versus closure composition). No strain remains.
- **Budget versus principle at a named community.** Live. Fig 8 distinguishes them; no figure classifies a particular case. Recorded as a `gap` inside F5, not smoothed over.
- **Cross-closure comparison.** The IPCC confidence vocabulary and the Tether mode vocabulary are different closures. Agreement between them is one evidence pool read twice, not two witnesses.
- **Round trip not measured numerically.** `R_T` is reported as the enumerated set of constraints the coarse description drops (region indexing, independence, scale loss, internal variability), not as a number, because no ground reading was taken. Treating the formula as identical to the figures would set `R_T` to zero, which is the dead-reckoning error Fig 4 :30 names.

**Honest stop.** The shape survives; the direction is owed. The figures decide how confidence may be stated and what would settle it. They do not decide whether a given town gets wetter or drier. That is a ground question, and the answer stops here with the lineage recorded.
