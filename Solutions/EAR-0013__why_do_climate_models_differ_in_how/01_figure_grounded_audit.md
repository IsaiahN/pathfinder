# Figure-grounded audit: why climate models differ in representing clouds and their effects on warming

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, cited as `Fig N :line`), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, plus the world sources actually opened and recorded in `10_source_ledger.csv`.

---

## 0. The residual, in effect terms

The question is not "which model is right?" It is: **given a family of model frames that all reproduce the present climate reasonably well, what makes their predictions of warming diverge, and why does the divergence concentrate in the cloud slot?**

State R as a gap between a prediction and an observation per slot:

```
R_s = | Gamma_m(b, a) - o' |     for model m, cloud-regime slot s
```

- A **slot** s is a cloud regime, not a whole model: low marine stratocumulus, midlatitude mixed-phase cloud, high ice cloud, ascent versus subsidence, land versus ocean. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* The multimodel mean can look settled while one slot carries the whole live signal.
- The **effect to be explained** is the spread across models of cloud radiative effect (CRE) and especially its change per degree of warming (cloud feedback). Zelinka et al. 2020 (opened): *"the cloud feedback exhibits the largest intermodel spread of all feedbacks and is highly correlated with ECS in both collections."* That is a world finding, secondary to the figures; it tells us where to point the census, not what the verdict is.
- What an answer would look like, bound as an ordinary term before the run (Formula "Direction"): **a separator** that says which conditions produce the spread, which are separate domains with separate anchors, and what instrument would close each one. It is not a number, not a parameter value, and not a winning model. Writing this down makes the sought-for shape refusable (Fig 5 :65-66).

**First filter, not witness:** my tier or an author's reputation decides what gets read first, never what is true (Fig 9 :60, *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*).

---

## 1. Domain census, before any figure line is chosen

### 1.1 R by arity, symmetry and scale

- **Arity:** many model frames crossed with many cloud-regime slots. This is not a two-option question and not a scalar. It is a family of residuals indexed per model and per regime (Fig 1 :11, :19).
- **Symmetry:** the shortwave component (reflection, cooling) and the longwave component (trapping, warming) are opposite-signed and partly cancel. Zhao et al. 2022 found exactly this: *"CF is the most relevant factor in determining CRE in observations, while the modeled CRE is too sensitive to LWP and COD."* A quantity whose content is "which effect wins, and by how much" is a **comparison**, ⋛, whose test is *"is it about which is larger, rather than both being present? Yes"* (Fig 12 :86-88). It is not a symmetric conjunction of two ingredients. Treating "clouds warm" or "clouds cool" as a symmetric sum is the flat-formula error (Fig 12 :5).
- **Scale:** cloud droplets are microns; cloud systems are hundreds of metres to tens of kilometres; a GCM grid box is tens to hundreds of kilometres; the response is global and decadal. There is a **membrane between scales** (Fig 4, title: *"The Membrane Between Scales"*), with a lossy transform in both directions (Fig 4 :27, :30).

### 1.2 One line per domain: actors, currency, anchor

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| **D1 Model frame** (closure Gamma_m of one GCM) | dynamics core, radiation transfer, convection scheme, cloud microphysics (liquid/ice fraction, autoconversion, effective radius), boundary layer turbulence, aerosol scheme, land surface | W m^-2 fluxes, cloud fraction, optical depth, liquid and ice water path, effective radius | **none internal** | A frame with no nameable anchor is not yet a ground domain. It can only range against D2. Fig 1 :27: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* |
| **D2 Instrument / observation frame** | CERES broadband flux, CloudSat radar, CALIPSO lidar, MODIS, EarthCARE, field campaigns (SOCRATES), reanalyses, radiative kernels | measured TOA clear-sky and all-sky flux, vertical cloud profile, joint cloud histograms | **measured radiative imbalance and CRE**, which does not move when a model changes | Legitimate anchor for flux and profile. Reanalyses and kernels are *not* pure ground: they contain parameterizations from D1, so their independence must be discounted. |
| **D3 Tuning and verification frame (the seat)** | model developers, tuning targets, emergent constraints, CMIP protocols, satellite simulators (COSP, ISCCP simulator), expert synthesis | agreement and residual against observations | the ground only, never agreement | Prone to mutual update (Fig 2 :13-15) and to promoting a convention into a verdict (Fig 10 :47). A simulator that lets a model and a satellite be compared on the same footing is a convention that makes the bug statable (Fig 10 :17). |
| **D4 Cloud-process habitat** | aerosols, SST patterns, inversion strength, updrafts, phase (supercooled liquid versus ice), circulation regime, sea ice | physical contact: condensation, freezing, sedimentation, entrainment | physical measurement of those processes | Enumerated, never composed (Fig 11 :43-44). Valence is relative to the residual: the same aerosol cools in one regime and warms in another (Fig 11 :49). |

### 1.3 Partition or union

**Union, not partition.** The four conditions overlap. A model can differ in closure (D1) *and* in instrument reach (D2 through the scale membrane) *and* in tuning target (D3) *and* in the habitat it is asked to represent (D4). No single lever clears the intersections. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :4-5: *"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones."*

This is the first load-bearing verdict: **"why models differ" is not one hard question with one answer.** It is a union of at least four conditions, so one verdict per domain, never averaged.

### 1.4 Order by dependency (Fig 3)

1. **Perception:** can we observe CRE and the vertical profile? CERES plus CloudSat/CALIPSO answer yes for flux and profile. Fig 3 :5 describes this link.
2. **Vocabulary:** do the model and the satellite have terms for the *same* cloud regime? Without a satellite simulator, no. COSP exists because "the lack of a consistent definition of clouds and cloud types in models and observations" made comparison hard (NCAR Climate Data Guide, opened). Fig 10 :17: *"it makes the bug statable."*
3. **Objective:** what counts as progress, matching present-day TOA flux, or matching the *change* of flux per K? These are different quantities. Zelinka et al. 2022 (via Eos, opened): *"more skillful simulation of mean-state cloud properties does not guarantee more skillful simulation of cloud feedbacks."*
4. **Planning:** parameterization choice, resolution, tuning targets.
5. **Learn and carry:** CMIP protocols, CFMIP diagnostics, model intercomparison.

Fig 3 :20: *"The chain is ordered by dependency, not by importance."* The chain usually breaks at link 3, the middle: having terms for what a regime affords and being able to say what would count as progress. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* Fig 3 :29: *"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."*

**Census result:** four domains, union, dependency order set. No figure line has been strained to fit; each line below is assigned to the domain it actually governs.

---

## 2. Figure census (bearing and verdict, before findings)

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | spread must be indexed per model and per cloud regime, never averaged |
| 2 The Ground | anchor must not update; agreement from one pool is worthless | satellite flux is the anchor; reanalyses and pooled tuning targets are not |
| 3 Dependency Chain | break at vocabulary/objective; no instrument means no working link | mean-state match and feedback match are different objectives |
| 4 The Membrane | lossy transform between scales; methods cross up, head starts down | resolution is an inward instrument extension, not an import |
| 5 Mint Pipeline | support, reach, novelty; settling necessary not sufficient | a matching TOA flux does not make a cloud scheme composable |
| 6 Closure / Reachability | composition cannot add an atom; instrument improved from worse one | differing parameterizations are differing bonds, not just numbers |
| 7 Room Chain | agreement is variation, not a verdict | ensembles of agreeing models do not corroborate |
| 8 Union Surplus | residual first, frame second; low overlap for surplus | describe the spread before choosing which field explains it |
| 9 Leave / Arrive | union unbundling; filters not witnesses; splitting | the question is a union; no figure returns a tuning value |
| 10 Ground Maintainer | conventions make bugs statable; ground does not decay, channel does; stake declared | simulators are conventions; channel decay and declared interest matter |
| 11 The Habitat | actors from contact; valence relative to residual | aerosol effect flips with regime; enumerate, do not compose |
| 12 The Bond | bond is the missing half; same atoms, different bond, different substance; two currencies | two models with the same ingredients can be isomers, not variants |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | no figure line names the correct parameterization |

---

## 3. Findings F1 to F11

Each finding states the figure line verbatim **before** the conclusion. A refuter is attached to each. Verdicts stay per domain and are never averaged.

### F1 — The spread is a per-slot residual, not a global average (D1, `general` structure, corroborated)

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."** Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**

Reading: a multimodel mean, or a single global-mean CRE, hides the very quantity the question asks about. The live residual sits in particular regimes. World corroboration (not authority): Zelinka et al. 2020 found the spread lives in low-cloud amount and scattering feedbacks, strongest in the extratropics; Bock and Lauer 2024 found differences "driven by changes in a range of cloud regimes rather than individual regions." Both are the same evidence pool (CMIP analysis), counted as one witness.

**Refuter:** show a model-intercomparison statistic in which the multimodel mean locates the cloud-regime responsible for the ECS spread as well as the per-regime decomposition does. If it does, per-slot indexing is not doing work here.

**Status:** triangulated across Fig 1 and the two CMIP analyses, but the two analyses share a pool, so the world side is weak. The figure verdict itself is `general`.

### F2 — A model cannot score itself; the anchor must not update (D1/D2, decisive)

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** Fig 2 :33: **"The anchor must not update."** Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** Fig 2 :45: **"Frames range against the ground. They do not negotiate with it."** Fig 1 :27: **"They are frame-internal. A frame cannot score itself with a quantity it also produces."**

Reading: the only legitimate anchor for "how much sunlight and heat do clouds move" is a measurement that does not change when a model changes: CERES top-of-atmosphere flux, CloudSat/CALIPSO profiles. Reanalyses and model-derived radiative kernels are frames, not anchors, even when they are called "observational constraints"; they inherit the parameterizations of the models that produced them. Where a "constraint" is built from the same reanalysis pool it is correcting, the agreement is the pool talking (Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool"*). Independence is a quantity, not a courtesy: Fig 2 :31, *"Independence, between two frames, is how little they draw on the same evidence."* Fig 2 :42, *"Buy independence in proportion to the cost of being wrong."*

**Refuter:** exhibit a tuning or constraint target that is not a function of any model's own output or of a reanalysis generated with a model parameterization, and show that models range against it separately. If none exists for a quantity, that domain has no anchor and must be reported as such, not filled with a proxy.

**Status:** triangulated across Fig 1, Fig 2 and Fig 10 (low overlap between the per-slot rule and the anchor rule).

### F3 — Closures differ at the bond level, not only in degree (D1, `specified`)

Fig 6 :21: **"MINT composes inside the closure and can never add an atom."** Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** Fig 12 :46: **"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."** Fig 12 :94: **"The arrangement is the substance."**

Reading: a parameterization is a typed relation between a sub-grid process and a resolved state. Two GCMs can hold the same ingredient list, cloud fraction, liquid water path, optical depth, ice fraction, and still be different substances because the bond differs (which quantity mediates which). Fig 12 :95-96: *"Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."* World corroboration: Zelinka et al. 2020 attribute the CMIP5 to CMIP6 change to increased mean-state supercooled liquid water in mixed-phase clouds (liquid condensate fraction), a change in the *state held* and therefore in the bonds available, not a single global tuning slider. Bock and Lauer 2024: *"Studies using single models concluded that the increased climate sensitivity found in these models is largely determined by cloud microphysical processes."*

**Refuter:** show that the intermodel spread is fully explained by a single scalar parameter varied continuously within one fixed scheme, with no change in which quantity mediates which. Then the bond claim is false and the difference is genuinely one of degree.

**Status:** triangulated (Fig 6 closure rule plus Fig 12 bond rule), world side single-pool.

### F4 — The scale membrane: resolution is an inward instrument extension (D1/D2, `specified`)

Fig 4 :20: **"Only the actors, the currency and the anchor change."** Fig 6 :26: **"instruments extend what can be represented at all."** Fig 6 :32: **"An instrument is not built from a description. It is improved from a worse instrument already returning something."** Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

Reading: clouds sit below the grid scale, so coarse models cannot represent their arrangement; the grid box holds a state, not the structure that produced it. Increasing resolution, or adding a superparameterization or a large-eddy simulation within a column, extends an instrument that is already returning something (coarse cloud fraction, a cloud-resolving model). It is an **INWARD** move in Formula step 7, sharpening in our own terms, not an **OUTWARD** import. The two must not be read against each other. Because the transform across the membrane is lossy, any condensation of cloud physics into a grid-box formula carries a round trip gap R_T that must be measured, not assumed zero (Fig 4 :30). World corroboration: CFMIP supports kilometer-scale modeling and coarsened +4K output alongside CMIP data (CFMIP community initiatives page, opened), and Zhao et al. 2022 concluded: *"Our study calls for more rigorous calibration of detailed cloud physical properties for future climate model development and climate projection."*

**Refuter:** demonstrate a cloud-resolving instrument built from a description alone, with no prior coarse instrument returning a residual to extend from. Fig 6 :32 says that cannot happen; a single counterexample would break the instrument rule. Separately, show a cross-scale round trip measured to be exactly lossless; that would set R_T to zero.

**Status:** triangulated across Fig 4 and Fig 6.

### F5 — The question is a union of overlapping conditions (D1 to D4, `specified`)

Fig 9 :4-5: **"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones."** Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."** Fig 9 :57: **"a case in two conditions is not a harder case of either"** Fig 9 :32: **"you get a kind of thing, never the answer itself"**

Reading: the four conditions identified in the census are not four slices of one percentage. They overlap. (i) different closures (D1), (ii) different instrument reach across the scale membrane (D1/D2), (iii) different conventions about what counts as a match (D3), (iv) observational underdetermination of the SST pattern effect and aerosol forcing (D4). A "better cloud scheme" clears where only (i) holds and leaves the intersections standing. World corroboration: Ma et al. 2026 (opened) identify three key factors: *"percentage cloud sensitivity to SST, climatological cloud cover, and SST warming patterns relative to the tropical mean"*, which are separate conditions, not degrees of one dial.

**Refuter:** show a single intervention that removes the whole intermodel spread of cloud feedback across CMIP6 and CMIP5, with no residual in any regime. That would reconstitute the question as one hard problem and dissolve the union reading.

**Status:** triangulated across Fig 9's union rule and Fig 8's surplus rule; world side corroborates conditions but shares the climate pool.

### F6 — Compensating errors are invisible in a flat scalar (D3, decisive against one-number verdicts)

Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** Fig 12 :94: **"The arrangement is the substance."** Fig 12 :111: **"A vocabulary without bonds can name a state and cannot name a route to one."** Fig 5 :70: **"A term is settled when the ground pays for it. A term is usable when something can compose over it."**

Reading: a model can match the measured top-of-atmosphere CRE while being badly wrong about cloud fraction, liquid water path and droplet effective radius in opposite-signed ways that cancel in the flux. That is settling at one slot without composability at the level below. Zhao et al. 2022 (opened) is the direct measurement: *"the large underestimation of both LWP and cloud effective radius (regional means ∼20% and 11%, respectively) results in relatively smaller bias in COD, and the impacts of the biases in COD and LCF also cancel out with each other, leaving CRE and ASR reasonably predicted in CMIP6."* So "which model best matches clouds?" cannot be answered from net CRE. The anchor pays for the flux term; it does not pay for the arrangement underneath.

**Refuter:** exhibit a case where matching the net CRE across all regimes entails matching the joint distribution of cloud fraction, optical depth and phase. Then the flat scalar is sufficient and F6 is withdrawn.

**Status:** triangulated across Fig 12 (bond invisibility) and Fig 5 (settling not sufficient), with one direct world measurement. This is the strongest single finding in the audit.

### F7 — The chain breaks at the objective, not at the physics (D3, `specified`)

Fig 3 :20: **"The chain is ordered by dependency, not by importance."** Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."** Fig 3 :29: **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."**

Reading: models have abundant vocabulary for clouds (link 2 works). What they lack is a discriminating objective (link 3). "Match today's CRE" and "match dCRE/dT" are different quantities; a model can do the first and fail the second. Zelinka et al. 2022, via Eos (opened): *"more skillful simulation of mean-state cloud properties does not guarantee more skillful simulation of cloud feedbacks."* The same source adds that large cloud feedback is usually achieved by *"several cloud feedback components that are systematically biased high rather than by having a single anomalously large component"*, which is F6 again at the feedback level. Effort aimed above the break (more physics, more resolution) cannot rescue a missing objective: Fig 3 :19, *"Optimising a link that already works cannot rescue one that does not."*

**Refuter:** show a deployed objective that reliably selects models with realistic cloud feedback using only present-day mean-state metrics. Then link 3 works and the break is elsewhere.

**Status:** triangulated across Fig 3 and the Eos/Zelinka 2022 finding; one world source, so `single-source` on the world side.

### F8 — Model agreement cannot corroborate a cloud description (D3, `general`)

Fig 7 :35: **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."** Fig 2 :40: **"agreement about the world is worthless when the agreeing frames share an evidence pool"** Seat Map :163: *"High correlation is disqualifying for a verdict and efficient for a convention."*

Reading: CMIP models are not independent witnesses. They share code ancestry, shared forcing datasets, shared reanalyses for evaluation and shared tuning targets. Zelinka et al. 2020 explicitly averaged multiple models from single centers to avoid overstating significance and noted that *"accurately defining model independence is still an area of ongoing research."* An ensemble of models that agree on a cloud scheme is one evidence pool wearing many names. The legitimate comparison is between frames whose closures differ and whose evidence is independently gathered: satellite active sensors versus in situ campaigns versus high-resolution process models.

**Refuter:** exhibit two model centers whose cloud parameterizations, evaluation data and tuning targets have demonstrably zero overlap, and show their agreement surviving a non-updating anchor test. Independence is a quantity to measure, not an assertion.

**Status:** triangulated across Fig 2, Fig 7 and Seat Map.

### F9 — The habitat gives the residual its valence (D4, `specified`)

Fig 11 :49: **"An actor's valence is relative to the residual, not a property it carries."** Fig 11 :39: **"capability is a property of agent-and-habitat, never of the agent alone"** Fig 11 :40: **"An improvement that does not change contact changes nothing, however much it improves."** Fig 11 :51: **"No standing list of good actors survives a change of residual."**

Reading: aerosols, inversion strength and SST patterns are not uniformly warming or cooling. The same aerosol is a strong coolant in one cloud regime and nearly inert in another. So a model can differ from another because it reproduces the present-day habitat differently, not because its cloud scheme is intrinsically better. Spectral decomposition by circulation regime (ascent versus subsidence) is a way of enumerating the habitat rather than composing it. Hill et al. 2025 (search-indexed abstract, opened) found that models agree on the shift toward ascent-regime warming but *"diverge in terms of the radiative impact due to differences in cloud characteristics in ascent and subsidence regimes"*, which is F9 in observational language.

**Refuter:** show an aerosol or circulation actor whose sign and magnitude for CRE are invariant across all cloud regimes and all models. Then valence is carried, not relative, and F9 is false.

**Status:** triangulated across Fig 11 and the regime decomposition literature; world side `single-source` (one paper, search index).

### F10 — No figure line selects the correct parameterization (gap, `general`)

Fig 13 :115: **"The set is closed. The arrangements are not. That gap is why import exists."** Fig 13 :134: **"Unreachable is a verdict here, not a silence"** Fig 13 :135: **"It cannot say which primitive is missing, because naming it would mean already holding it."** Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**

Reading: after a genuine census, no figure line governs which microphysics scheme, which iceFraction, which autoconversion threshold or which resolution wins. The figures fix the shape of the explanation (union, per-slot, anchored, bond-sensitive) and stop. Reporting a winner would be a name where only a shape is available. This is a **`gap` of the shape-not-a-name kind, not underivable in principle**: an instrument exists in outline (active space sensors plus process models plus source-discriminating field campaigns) that could narrow it, so it is unreached at this budget rather than foreclosed. Fig 13 :134-135 and :137-138: *"the answer is out of reach with the library as it stands."*

**Refuter:** quote a figure line that does select a cloud parameterization or a numerical value, with a verbatim citation. Until that happens the gap stands.

**Status:** `gap`, declared. This is a verdict, not silence.

### F11 — Declared stake and method, not prestige (D3, `general`)

Fig 10 :59: **"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."** Fig 10 :52: **"Bring a characterised residual, never the source."** Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."*

Reading: model developers have a legitimate interest in whether their model is judged plausible, and constraint authors in whether their constraint narrows the range. That interest is structural and is declared, not denied. The remedy is a pre-registered failure condition and a one-to-one check that sees the residual, not the framework's interiors.

**Refuter:** identify an undeclared interest that changed which figure line was chosen. If found, the derivation must be re-run with that interest named.

**Status:** triangulated across Fig 10 and Seat Map.

---

## 4. Pre-registered refuter (written before the conclusion)

The union-and-anchor shape claim is refuted if any of the following holds:

1. A single intervention removes the entire intermodel spread of cloud radiative feedback across CMIP generations, with no residual regime (breaks F5, union).
2. A model-intercomparison statistic that uses only multimodel means locates the responsible cloud regime as well as a per-regime decomposition does (breaks F1, per-slot indexing).
3. A tuning target is shown to be independent of all model output and all reanalyses built with model parameterizations, and models still fail to range against it separately (breaks F2, anchor).
4. Matching net top-of-atmosphere CRE across all regimes entails matching cloud fraction, optical depth and phase jointly (breaks F6, bond invisibility).
5. A verification study shows that present-day mean-state cloud skill reliably selects realistic cloud feedback (breaks F7, the broken objective link).
6. A figure line is quoted that selects a specific cloud parameterization, with a verbatim citation (breaks F10, gap).

If any fires, the shape claim is withdrawn or narrowed accordingly and the retraction is recorded here, not silently erased. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. **Lead with the union, not with a "best model"** (F5). Ask which condition is live in the case at hand before choosing an intervention.
2. **Index the residual per cloud regime and per model** (F1). Stop reporting only the multimodel mean CRE.
3. **Name the anchor and discount the pool** (F2, F8). Distinguish measured flux and profile from reanalysis-derived "observational constraints"; declare overlap.
4. **Compare bonds, not ingredient lists** (F3, F6). Two schemes with the same variables and a different mediating relation are isomers, not variants (see `06_isomers_and_order.md`).
5. **Fix the objective before the parameterization** (F7). Decide whether the target is present-day flux or dCRE/dT; do not let one stand in for the other.
6. **Extend instruments inward rather than importing a magic atom** (F4). Use satellite simulators, active sensors and process models to sharpen what is already returning a residual.
7. **Report the gap as a gap** (F10). No figure returns a winning cloud scheme. What would settle it is an instrument and a measurement, not more agreement.

---

## 6. Canonical usage check and retraction / confirmation log

Two usage rules were read after the first sections and govern how figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* And the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* And the limit: the framework gives *"what a missing thing would have to look like (a shape, not a name)"*, then *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."*
- `FRAMEWORK/figures/THE_FORMULA.md` step 7: SEARCHED, INWARD, OUTWARD kept distinct; *"underivable-in-principle and unreachable-at-this-budget are DIFFERENT FACTS with different instructions."*

| earlier reading | status after the canonical check |
|---|---|
| "spread is one hard problem" (first-pass framing) | **Retracted.** Fig 9 :4-5 and :54 force the union reading. Retraction kept visible here rather than erased. |
| "satellite and reanalysis constraints are independent anchors" | **Retracted and narrowed.** Fig 2 :31 plus the shared CMIP/reanalysis pool make reanalyses frames, not anchors. Only direct flux and profile measurements anchor. |
| "F2 anchor verdict is decisive" | **Confirmed.** Fig 1 :27 and Fig 2 :29/:33 are low-overlap routes to the same rule. |
| "resolution is an import that moves the wall" | **Retracted on re-census.** Fig 6 :32 and Formula step 7 assign resolution to INWARD, instrument extension. Import would add an atom that is not owed here. |
| "F6 compensating errors are a world-only finding" | **Corrected.** Fig 12 :5/:94 govern the invisibility structurally; Zhao et al. 2022 is corroboration, not the source of the verdict. |
| "F10 might be underivable" | **Narrowed.** It is unreached at this budget, not underivable in principle: active sensors and process models are instruments already returning something. |
| Apparent strain Fig 2 :40 versus the value of multi-model ensembles | **Not strained after re-census.** Fig 2 governs verdict weight; ensembles are filters for the budget and generators of candidates (Fig 9 :60). Different quantities. |
| Apparent strain Fig 11 :49 (valence relative) versus Fig 2 :29 (anchor fixed) | **Not strained.** Valence governs the actor's effect on the residual; the anchor governs what settles the verdict. Different objects. |

**Strains after re-census:** none hidden. One live type question is recorded in `06_isomers_and_order.md` and `09_watson_answer.md`: Fig 12's isomer definition requires a fixed atom set, and a given GCM's atom set (which fields it carries) changes with resolution and scheme. That condition is named, not smoothed over.

---

## 7. Seven-question recursive derivation (summary)

1. **Is the spread one problem?** No. Fig 9 :4-5/:54: union of four conditions. Split before searching.
2. **Where is the residual?** Per model and per cloud regime (Fig 1 :19/:22). Per-slot, never averaged.
3. **What settles it?** A non-updating anchor (Fig 2 :29/:33): measured TOA flux and vertical profile. Reanalyses are frames.
4. **Why do schemes with the same variables differ?** The bond carries the missing information (Fig 12 :5/:46/:94). Same ingredients, different arrangement, different substance.
5. **Can net CRE decide?** No. Compensating errors are invisible in a flat scalar (Fig 12 :5, Fig 5 :70). Settling is necessary, not sufficient.
6. **Does more resolution import a new kind of cloud?** No. It extends an existing instrument inward (Fig 6 :32); the cross-scale round trip has a measured gap R_T (Fig 4 :30).
7. **What is owed, then?** Per-domain verdicts, independent anchors, a fixed objective, a declared stake, and a gap reported as a gap (Fig 13 :134-135). No figure names the winning parameterization.

---

## 8. Updated verdict

The shape survives: the spread is a union of overlapping conditions, indexed per model and per cloud regime, governed by a non-updating measured anchor, carried by differences in bond arrangement rather than in ingredient lists, and bounded by a lossy scale membrane. No figure line selects a winning cloud parameterization, so that part is reported as `gap`, unreached at this budget. The single most checkable claim is F6: a model can match net cloud radiative effect while its cloud fraction, water path and effective radius are wrong in cancelling ways. A checker who confirms this has confirmed the structural finding without needing to accept any other part of the framework. Mode: `specified` on F1 to F9 and F11, `general` on the structural shape and the gap. Not `grounded`. Simulated derivation, internally consistent with the verbatim figure text, not a ground reading.
