# Figure-grounded audit: warming, acidification and declining oxygen by ocean region

**Mode of this document: `specified`, not `grounded`.** The figure lines constrain the shape of a regional answer. They do not produce regional numbers. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status: simulated derivation, not a ground reading.** This is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §7.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, cited as `Fig N :line`), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the eight essays, and the public sources in `10_source_ledger.csv`.

---

## 0. The residual

The question asks how three simultaneously changing drivers interact across different ocean regions. Stated as an effect:

- **Arity.** Three conditions (warming, acidification, deoxygenation), indexed by region and depth, observed over time.
- **Symmetry.** The three are not interchangeable. Warming lowers oxygen solubility and strengthens stratification, which reduces ventilation; respiration consumes oxygen and produces CO2, so deoxygenation feeds acidification; acidification can alter organic matter export and hence oxygen demand. The interaction type is region-dependent (synergistic, additive or antagonistic in the biological literature), so the compound is asymmetric and its couplings are directional.
- **Scale.** Slot (a region, a depth layer) versus global aggregate; first order (single-driver effect) versus second and third order (two- and three-way interactions and their cascades); a spatial gradient versus a temporal trend.

The live failure is at the intersections and at the slot scale. A global mean pH or oxygen inventory can be near zero residual while one region carries a live signal. What is owed is a region-indexed compound shape and the independent anchors that would settle it.

---

## 1. Domain census (done before choosing any figure line)

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor (nameable?) |
|---|---|---|---|
| D1 Physical ocean and circulation | temperature, stratification, mixed-layer depth, currents, ventilation, upwelling, subduction | heat, momentum, transport of properties | yes: Argo profiles, moorings, satellite SST, IAP temperature product |
| D2 Carbonate chemistry | atmospheric CO2, dissolved CO2, pH, carbonate ion, alkalinity, aragonite saturation | protons, carbonate saturation state | yes: measured pH, alkalinity and pCO2, surface carbon products, time series |
| D3 Oxygen and biogeochemistry | dissolved O2, apparent oxygen utilisation, respiration, remineralization, photosynthesis, nutrients, microbes, oxygen minimum zones, N/S/C cycles | O2 concentration and fluxes | yes: CTD, bottle and Argo oxygen profiles, IAP oxygen product |
| D4 Biological and ecosystem response | plankton, calcifiers, fish, trophic levels, habitat volume | abundance, biomass, survival, habitat | yes: controlled experiments, time series, published meta-analyses |
| D5 Modelling and verification frame | Earth system models, CMIP ensembles, scenarios, observational products, expert readers | predictions versus residuals, agreement versus independence | yes: observational datasets, the ground, never model agreement |

**Partition or union.** Two different answers at two different cuts, and conflating them is the main trap:

- The three stressors form a **union compound** (Fig 9 :54-58). They overlap and the intersections are categorically different, not worse versions of one condition.
- Regions are **slots** for indexing the residual (Fig 1), but they are not independent partitions, because the circulation network couples them (Fig 13 network; Fig 11 contact cascades). The slot index is a measurement index, not an independence claim.
- Overall: a union of overlapping conditions evaluated per slot, with cross-slot transport.

**Order by dependency (Fig 3).** Physical forcing (warming, stratification, circulation) sets the conditions for carbonate chemistry and for oxygen supply and solubility. Oxygen and carbonate chemistry together set the biological response. Verification runs last and ranges all four earlier domains against the ground. Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* Fig 3 :20-21: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."*

**Strain test applied.** An early reading wanted Fig 13's cross-kind composition rule to govern the three stressors directly. It does not: that rule governs the six primitives, not three Earth-system drivers. Re-census sends the three-driver interaction to Fig 9's union rule. No strain remains after the re-census.

---

## 2. Figure census and findings

Quotes below are verbatim substrings of `FRAMEWORK/reference/03-FIGURES_TEXT.md`.

### F1 — The three stressors are a union compound, not three trends

Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*

Fig 9 :55-56: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."*

Fig 9 :57-58: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."*

Employment. Cutting CO2 removes the condition where only acidification holds, but it does not by itself clear a region where low oxygen and warming still bind: the second and third conditions remain. Two- and three-condition regions are specific compounds with their own loop, not harder single-stressor cases. World corroboration: Gruber (2011) calls eastern boundary upwelling systems hotspots affected by all three stressors; Tan et al. (2025/2026) report observed double and triple emergence with distinct regional patterns; the multimorbidity literature reaches the same structural conclusion in a different field.

Verdict: **triangulated** across Fig 9 (union rule) and Fig 13 :35 (non-interchangeable quantities) with low overlap. Mark `specified`.

**Refuter:** show that the three conditions decompose into a partition such that one lever clears all intersections, or that the two-condition regions are well described as amplified one-condition regions.

### F2 — The residual must be indexed by slot, never aggregated away

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*

Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

Fig 1 :13: *"a global R near zero with one live slot residual is a legal state"*

Employment. Regions and depth layers are the slots. A near-zero global mean oxygen trend together with one live oxygen-minimum-zone signal is a legal state, not an inert one. A global answer to this question is structurally blind to where to look. World corroboration: Oschlies et al. (2018) report that models do not reproduce observed thermocline oxygen patterns and underestimate variability; Tan et al. report regional emergence percentages that range from about 7 percent at the surface to about 32 percent at the bottom of the mesopelagic zone for double emergence.

Verdict: **triangulated** across Fig 1 (per-slot residual) and Fig 11 :43-44 (habitat enumerated) with low overlap. Mark `specified`.

**Refuter:** demonstrate that a global aggregate preserves every live regional signal and supports the same regional decisions.

### F3 — The habitat must be enumerated, and cascades reach three steps out

Fig 11 :43: *"The habitat is enumerated, never composed."*

Fig 11 :44: *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."*

Fig 11 :46: *"conditions: light, water, temperature, season, terrain"*

Fig 11 :47: *"relations: pollination, predation, competition, dependency"*

Fig 11 :52-53: *"Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."*

Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."*

Fig 11 :50: *"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."*

Employment. The enumeration for this question contains conditions (temperature, light, water movement, season, basin geometry, depth terrain) and relations (solubility, stratification, ventilation, respiration, remineralization, predation, competition, dependency). Cascades: warming reduces solubility (first order), suppresses ventilation and expands oxygen minimum zones (second order), and changes nitrogen cycling, nitrous oxide emission and habitat volume (third order). Valence is residual-relative: stratification can favour some surface productivity in high latitudes while reducing oxygen supply at depth; the same actor is not globally good or bad. World corroboration: the IUCN deoxygenation report chapter 6 notes regional differences among OMZs reflect hydrography and lead to differing multi-stressor combinations; the Hu et al. meta-analysis finds interaction type changes by climate region and trophic level.

Verdict: **triangulated** across Fig 11 (enumeration and valence) and Fig 3 (dependency chain) with low overlap. Mark `specified`.

**Refuter:** show the habitat can be composed from a fixed actor list independent of the residual, or that an actor's valence is intrinsic rather than residual-relative.

### F4 — A spatial gradient and a temporal trend are different terms

Fig 13 :35: *"Space, time and energy are not three readings of one quantity."*

Fig 13 :76: *"A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is."*

Employment. "Deoxygenation" must be resolved into a spatial redistribution (a gradient over space, including depth) and a temporal decline (a gradient over time). They are bonded to different states and are not interchangeable. The same applies to warming. A single trend line cannot carry a latitudinal or vertical gradient. World corroboration: the time-of-emergence study explicitly separates Where and When from How, and reports different regional spatial patterns with depth.

Verdict: **single-source** for the figure line (Fig 13), with world corroboration. Mark `specified`.

**Refuter:** exhibit a single term that carries both the spatial gradient and the temporal trend without loss, and show the ground pays for it.

### F5 — Frames range against an unmoving ground; model agreement is not settlement

Fig 2 :29-30: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."*

Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*

Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool"*

Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*

Fig 7 :13: *"agreement compounds, evidence does not"*

Fig 7 :35: *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*

Employment. Observational products and models are frames. An ensemble mean of CMIP models that share generation, forcing and parameter heritage is one pool wearing many names. Tan et al. warn that using the model ensemble mean may not be effective for compound impact-driver studies because of large spreads in salinity and oxygen. Oschlies et al. report models simulate only about half the observed oxygen loss. The ground is the measured profile, the mooring, the time series, the experiment. World corroboration is direct and from the primary field.

Verdict: **triangulated** across Fig 2 (anchor and independence) and Fig 7 (room chain and ground vote) with low overlap. Mark `specified`.

**Refuter:** show two frames with genuinely low overlap converging on one regional interaction map and the ground paying for it. That would not refute the shape, it would move the quantity toward `grounded`.

### F6 — The framework returns a shape, not a name or a number

Fig 9 :32: *"you get a kind of thing, never the answer itself"*

Fig 13 :134: *"Unreachable is a verdict here, not a silence"*

Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

Employment. This derivation cannot output regional pH or oxygen numbers. It can state what any such answer must look like and what would make it fail. A tier or a priority score is a filter for effort, never a witness for the verdict.

Verdict: **triangulated** across Fig 9 (limit of the lookup) and Fig 13 (unreachable as a verdict) with low overlap, plus the canonical figures README. Mark `specified` for the shape, `general` for the limit statement.

**Refuter:** produce the regional numbers from the figure set alone with the ground paying for them. Until that happens, any number here would be fabricated.

### F7 — Settling needs an instrument already returning something

Fig 6 :32: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."*

Fig 6 :34-35: *"The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."*

Fig 11 :40: *"An improvement that does not change contact changes nothing, however much it improves."*

Employment. The instruments exist and are already returning unresolved readings: oxygen profiles, pH products, time-series and mesocosms. The task is to sharpen them and to keep them independent, not to imagine a perfect sensor. World corroboration: Oschlies et al. call for dedicated observational programmes; Tan et al. call for broader observing systems and more CIDs.

Verdict: **single-source** for the figure line (Fig 6), corroborated by the source-discrimination essay and by field reviews. Mark `specified`.

**Refuter:** show an instrument for a quantity that has never registered at any resolution, and show it can be specified from a description alone.

---

## 3. Pre-registered refuter (written before the conclusion)

Per Fig 10 :60: *"Where a stake cannot be removed, declare it."* The author of this package has a stake in the framework being useful; that is declared and excluded from the verdict.

The shape claim is **refuted** if any of the following holds:

1. A global aggregate is shown to preserve every live regional and depth signal and to support the same regional decisions (breaks F2, Fig 1).
2. The three stressors are shown to form a partition, so a single lever clears the intersections (breaks F1, Fig 9 :55-56).
3. An actor's valence is shown to be intrinsic to the actor rather than relative to the residual and region (breaks F3, Fig 11 :49-50).
4. A spatial gradient and the corresponding temporal trend are shown to be one term with no loss (breaks F4, Fig 13 :76).
5. A source-discriminating measurement of a two- or three-condition region returns a compound structure different from the one predicted here (breaks the shape at the ground).

Separately, the quantity moves from `candidate` to `grounded` only if low-overlap observational frames converge and the ground pays. Agreement alone never does it (F5).

---

## 4. Recommendation

1. Write the answer as a union compound evaluated per region and depth slot, not as three global trends (F1, F2).
2. Enumerate the habitat and follow cascades to at least the third order; declare valence as residual-relative (F3).
3. Keep space gradients and time trends as separate bonded terms (F4).
4. Use independent observational anchors; do not treat CMIP ensemble agreement as corroboration (F5).
5. Return the shape and the instruments, state the mode, and refuse to invent numbers (F6, F7).
6. Send the verification packet, ask for a refutation, and record the stage-1 verdict before showing framework material.

---

## 5. Canonical usage check

Two local sources govern use after the findings were drafted:

- `FRAMEWORK/reference/FIGURES_README_canonical.md` — the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It requires re-census when two readings strain: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* It also states the framework returns *"what a missing thing would have to look like (a shape, not a name)"* and stops *"at the limit of what the available instruments can distinguish."* No figure quote in this folder was taken from a summary.
- `FRAMEWORK/figures/THE_FORMULA.md` — mode rule stated above; step 7 separates SEARCHED, INWARD and OUTWARD. SEARCHED was asked first: the figure set does contain a union rule and a slot rule, so this is not a gap. The unreachable part is the regional numbers, and Fig 13 :134 permits saying so.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "Regions are a partition of slots" | **Retracted.** Fig 1 indexes the residual by slot, but the circulation network (Fig 13) and contact cascades (Fig 11) couple the slots. They are measurement indices, not independent frames. Recorded in §1. |
| "Shape, not a name forbids all regional quantities" | **Narrowed.** The limit governs what the framework can derive, not what a ground instrument can report. Measured regional pH or O2 values are admissible once the ground pays; this folder reports none. |
| "Fig 13 governs the three-stressor interaction" | **Retracted.** Fig 13 governs the six primitives. The three-driver interaction is governed by Fig 9's union rule. Re-census performed; no strain remains. |
| "Model agreement corroborates the regional map" | **Refused.** Fig 2 :40 and Fig 7 :13 apply. Shared-generation ensembles are one pool. |
| F1 union compound | **Confirmed.** Fig 9 :55-58 plus three independent world literatures, including a low-overlap clinical analogue. |
| F2 per-slot residual | **Confirmed.** Fig 1 :19, :22, :13. |
| F5 ground over agreement | **Confirmed.** Fig 2 and Fig 7, corroborated by field reviews that report model underestimate of oxygen loss. |

---

## 6. Retraction log

Nothing was silently erased. The three retracted readings above are preserved with their replacements. No figure quote was found to have drifted on re-checking against the extract.

## 7. Status

Mode `specified`, ungrounded, candidate. Verdicts are kept separate by domain and never averaged. Gaps: the regional numbers are unreachable from the figure set; that is a verdict, not a silence. Strains after re-census: none hidden; the one live boundary is the distinction between what the framework derives (shape) and what an instrument must report (quantity).
