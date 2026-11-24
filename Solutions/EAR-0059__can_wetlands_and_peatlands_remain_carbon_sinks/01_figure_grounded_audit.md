# Figure-grounded audit: EAR-0059, can wetlands and peatlands remain carbon sinks?

**Mode of this document: `specified` on the substantive claims, `general` on the structural rules, not `grounded`.** Per `THE_FORMULA.md`: mode is `general | specified | grounded`; "Accepted means the ground settled it; otherwise candidate." No measurement in this folder settles the question.

**Status of this derivation: a simulation, not a ground reading.** From the framework essay *The Recursive Self-Improvement Trap* (read 2026-11-22): LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle whether any wetland or peatland will remain a carbon sink. See `05_what_shape_means.md` §6.

**Sources for the figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session; cite as `Fig N :line`. `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`. World sources are secondary, were actually opened, and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) − o′| per slot s (THE_FORMULA.md step 1; Symbols table, `R`). Translated to this question:

- **b** is the standing expectation about a site's carbon balance under a given climate, formed from past measurements and inherited priors.
- **a** is the forcing actually applied: temperature rise, a change in rainfall and evapotranspiration, a water-table shift, drainage, rewetting, fire.
- **Γ(b,a)** is what that expectation predicts the site's net carbon exchange will be.
- **o′** is what the ground returns at that site: measured net carbon exchange, ideally a net ecosystem carbon balance that includes CO2, CH4, combustion and lateral losses.
- **s** is the site, and properly the microform within it (hummock, lawn, hollow, pool). R is indexed by site and microform, never by a single global number:

> Fig 1 :19 "The residual is indexed by object slot, not aggregated."
> Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."

The phenomenon to be explained is not the level of carbon uptake but the **persistence of the sign**: why does R stay on the uptake side in some slots across warming and hydrological change, and cross to the release side in others? A frame that predicts all peatlands remain sinks, or all become sources, has a residual here.

**Bind the sought-for shape as an ordinary term before the run** (THE_FORMULA.md, "Direction"). The answer would be a conjunction of conditions that keeps the per-slot balance negative, plus an instrument that discriminates a failure of one condition from a failure of another, indexed per site. Until written down, that shape is a preference rather than a term, predicts nothing and accrues no residual, so no loop check can see it. It is now bound, so the refuter in §6 can fire on it.

**Anchor test.** Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome." The legitimate anchor here is the measured net carbon balance of the site: flux towers and chambers, with stock changes where available. Fig 2 :30 "you push on it, it is not an anchor." Expert consensus, a global model ensemble mean, a remotely sensed greenness index and a national inventory category all move when pushed, so they are instruments at best. Two cautions, stated now rather than discovered later: (i) NEE alone is an instrument and not the full ground, because it omits CH4, combustion and dissolved or lateral carbon; (ii) the ground does not decay, but the channel to it does, so a pooled or stale reading is a failure of contact and not a change in the world (Fig 10 :24).

**What an answer would look like** (binding the shape): a per-slot verdict of the form "this site stays a sink while conditions C1 and C2 hold, measured by instrument I1 and I2, over horizon H," with the falsifier written before the measurement. A global yes or no is not that shape and is refused at the census.

---

## 1. Domain census, before choosing any figure line

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a three-place relation between a site's state (water table, peat depth, vegetation), an applied forcing (temperature, water, fire, land use) and the measured carbon balance, indexed by slot s and ordered by time t. It is a sequence rather than a set, so it carries an **ordered** bond (`→`, "A then B; B needs A to have happened", Fig 12 :72) and a **comparison** bond for "sink versus source" (`⋛`, Fig 12 :87 "a threshold relation between two quantities"). It is not symmetric: site and forcing are not interchangeable, and dropping a water table is not the reverse of raising it in its effect on CO2 and CH4.
- **Symmetry.** The sign of the loop is decisive, not its magnitude alone: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." (Fig 12 :121). A peatland that fixes more than it releases closes an accumulating loop; one that releases more opens it. The two are not variants of one state.
- **Scale.** Four scales are in view: the microform inside a site (hummock, hollow, pool), the site, the landscape (groundwater flow, neighbouring forest, rivers), and the global carbon budget. The membrane between them is a filter with a direction, not a wall: "Only the actors, the currency and the anchor change." (Fig 4 :20). The transform is lossy, so the round-trip gap R_T must be measured, not assumed zero (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 Site carbon loop** (production vs decomposition and combustion) | Sphagnum, vascular plants, microbes, peat, fire | net ecosystem carbon balance, NEE and NECB | yes: measured flux and stock change at the site | admitted |
| **D2 Hydrological habitat / channel** | water table, rainfall, evapotranspiration, groundwater, drainage | water-table depth and contact between peat and the anaerobic zone | yes: water-table measurement, piezometers and loggers; Fig 11 :46 "conditions: light, water, temperature, season, terrain" | admitted |
| **D3 Thermal and combustion regime** | temperature, respiration kinetics, burn severity | CO2 and CH4 release, combustion loss | yes: chamber and tower fluxes, temperature and burn records | admitted |
| **D4 Observation and model frame** | Earth system models, global budgets, remote sensing, meta-analyses | agreement, pooled estimates, category labels | yes in principle (the same ground flux data), but routinely pooled; channel failure is the live risk | admitted with warning |
| **D5 Landscape frame** | neighbouring forest, groundwater flux, rivers, regional vegetation | water flux and ecosystem state shifts | yes: observed state transitions and groundwater records | admitted |
| **X1 "the global peatland sink" as one property** | none independent of the sites | a pooled total | **no** anchor independent of per-site measurement; an average across slots (Fig 1 :22) | not a domain, refused as object |
| **X2 "sink as an intrinsic property of peat"** | the peat alone | storage | **no** anchor that does not move with water and temperature (Fig 11 :39) | absorbed into D1 and D2 |

X1 and X2 fail the anchor test and are excluded before any figure line is applied to them. This is a structural exclusion, not a claim that peatlands never store carbon.

### 1.3 Partition or union

D1 and D2 overlap: water table enters both production and decomposition, so their overlap is a compound with its own loop (the humpbacked relationship between water table and net ecosystem production reported by Harris, Roulet and Moore 2020). D2 and D5 overlap: groundwater is both a site condition and a landscape flux. D1 and D3 overlap through combustion. The whole question is a **union**, not a partition.

> Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."
> Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
> Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

The unbundled conditions are:

- **C1, hydrological contact.** The water table stays near the surface, so the acrotelm remains saturated and decomposition is slow. Instrument: water-table logging plus moisture or tension at the site.
- **C2, loop sign.** Production still exceeds temperature-driven respiration and combustion at that slot, over the declared horizon and with CH4 included. Instrument: per-slot NECB or the best available flux measure with the omitted terms named.
- **C3, landscape support.** Groundwater supply and surrounding state (forest versus peatland) do not push the site across a bistable threshold. Instrument: landscape groundwater flux and observed state transitions.

A site failing only C1 and a site failing only C2 are not different degrees of one failure. They are different compounds and need different levers. A single lever, for example rewetting everywhere, clears the region where only C1 holds and leaves the intersections standing (Fig 9 :55). This is why the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

### 1.4 Dependency order (Fig 3)

> Fig 3 :20 "The chain is ordered by dependency, not by importance."
> Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at."
> Fig 3 :19 "Optimising a link that already works cannot rescue one that does not."

Order for this question: 1 perception (can we read the per-slot balance, including CH4 and combustion?) → 2 vocabulary (do we have terms for what a changed water regime affords: threshold, hysteresis, sign of loop, bistability?) → 3 objective (what counts as "remains a sink": which gases, which horizon, which sign convention?) → 4 planning (which lever, at which site?) → 5 learn and carry. The middle links are the ones with no settled instrument: "sink" is defined differently across NEE studies, and several meta-analyses omit CH4 entirely. Most effort lands above the break, where the measurements already exist.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not whether a site stays a sink |
| 2 The Ground | measurement is a named anchor; independence and pooling | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; lossy transform and R_T | governs microform-to-global transfer |
| 5 Mint Pipeline | three guards as a product; no mint without support | governs whether a new threshold term is licensed |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs renewal of predictive terms (C3) |
| 7 Room Chain | same closure handed along; fidelity times ground pressure | governs persistence as a sequence of handoffs |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and source rules |
| 9 Leave / Arrive | union versus partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; pooled readings | governs quick loss of sink status |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | decisive for D1, D2 and D5 |
| 12 The Bond | sign of the cycle, catalyst, isomer, comparison at zero | governs the sink/source sign and the threshold |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | honest-stop role only (strain S1, §5) |
| Operators table | `⋛` comparison is a threshold relation between two quantities | sink versus source is a comparison, not a substance |
| Symbols table | `R` is the aim; the ground is the anchor | no global `R` is admissible here |

**Strain test applied during this census.** An early attempt to read Figure 13's six physical terms directly onto this question (carbon as energy, water table as gradient) fit only by renaming ecological quantities as physical ones. That is a strain, so Fig 13 does **not** govern the wetland carbon result. It is sent to the honest-stop role only, where "The set is closed. The arrangements are not. That gap is why import exists." (Fig 13 :115) legitimately describes why more arrangement of current concepts cannot name a universal flip point. Recorded as strain S1 in §5. A second candidate strain, applying "An improvement that does not change contact changes nothing, however much it improves." (Fig 11 :40) to restoration, was resolved by re-census: that line governs contact with the ground, not restoration efficacy as such. A rewetting that actually restores the water-table contact does change contact. No strain remains after re-census except S1, which is a scope exclusion rather than a contradiction.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about wetlands and peatlands, `grounded` only if settled by a measurement here. None is `grounded`.

### F1 — Sink status belongs to the peatland and its habitat, not to the peat alone

**Mode: `specified`. Domains D1, D2, D5. Status: triangulated (Fig 11 habitat and Fig 4 membrane, low topical overlap).**

> Fig 11 :39 "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."
> Fig 11 :40 "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."
> Fig 4 :20 "Only the actors, the currency and the anchor change."

The habit of answering this question with a list of peat properties (depth, organic content, accretion rate) is an agent-only improvement. The figure-derived claim is that sink status sits in the relation between peat, water and temperature. The world corroborates from two low-overlap directions: Koch et al. 2023 report that "The emissions of CO2 and methane (CH4) are linked to hydrologic regimes where a deeper water table favors CO2 emissions and a very shallow water table permits CH4 emissions", and van der Velde et al. 2021 conclude that preserving peatlands "requires looking beyond peatland-specific processes and taking into account wider landscape-scale feedbacks with forest ecosystems." The world sources are secondary and share a broad peatland evidence pool, so they are one witness for the shape, not two independent confirmations.

**Refuter:** a peatland whose measured net sink is unchanged across a habitat substitution that demonstrably removes its water-table contact, with per-slot NECB measured before and after. If that is observed, F1 is false.

### F2 — This is a union of conditions, not one hard question, and one lever will not clear it

**Mode: `general` for the union shape, `specified` for the two conditions. Domains all. Status: triangulated (Fig 9 union rule and Fig 12 sign of the loop, low overlap).**

> Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
> Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."
> Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."

The conditions C1 (hydrological contact), C2 (loop sign with CH4 and fire included) and C3 (landscape support) bind different instruments. The world shows why the two-sidedness matters: Zou et al. 2022 find that "total CO2-equivalent emissions from wetlands are kept to a minimum when the water table is near the surface. By contrast, greenhouse gas exchange rates peak in flooded and drained conditions." A single monotone lever ("keep it wetter") cannot clear both the drained and the flooded failure regions. The sign of the loop is the quantity that flips, and a chain of carbon accumulation cannot close by construction once respiration and combustion exceed production.

**Refuter:** one intervention that restores hydrological contact and the temperature/combustion balance at a site with no categorically different residue left over. That would collapse the union into a partition and F2 would fail.

### F3 — The ground is per site and per microform; a global average is a pooled reading

**Mode: `general` with a `specified` methodological consequence. Domains D1, D4. Status: triangulated (Fig 1 per-slot rule and Fig 10 channel rule, low overlap).**

> Fig 1 :19 "The residual is indexed by object slot, not aggregated."
> Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."
> Fig 10 :26 "stale percepts, dropped transients, saturated metrics, pooled readings"

Harris, Roulet and Moore 2020 provide the decisive world instance at a scale the figures can license: in one drained bog, "net ecosystem production (NEP) remained positive (C sink) for these microforms at the drained bog. Dry pools with mostly bare peat at the drained bog had negative NEP (C source to atmosphere)". Sink and source coexisted inside one site. Jayasekara et al. 2026 add that across 120 sites, 19% of sites classed as intact were net CO2 sources and 21% of those classed as degraded were net CO2 sinks, and they note "substantial variability in measurement methods, data processing software, and protocols". A pooled global "peatland sink" is a framed quantity, and a frame cannot score itself with a quantity it also produces (Fig 1 :27).

**Refuter:** a pooled or global average that predicts prospectively and per named site which slot will cross to source next, with the prediction paying against measured NECB. If one exists, F3's methodological consequence is false.

### F4 — The water table's valence is relative to the residual, not a property of water

**Mode: `specified`. Domains D1, D2, D3. Status: triangulated (Fig 11 valence and Fig 12 catalyst/cycle, different figures, one framework).**

> Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries."
> Fig 11 :50 "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."
> Fig 12 :119 "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."

A high water table is a benefactor to a CO2 residual (it suppresses aerobic decomposition) and a malfactor to a CH4 residual (it permits methanogenesis). Which residual is being settled decides the valence; there is no standing list of good water tables. The world corroborates directly: Koch et al. 2023 state that "a deeper water table favors CO2 emissions and a very shallow water table permits CH4 emissions", and Zou et al. 2022 report that "greenhouse gas exchange rates peak in flooded and drained conditions." Sutton et al. 2025 add that the strength of the regulatory feedbacks, and therefore the valence of a given water position, depends on peat storage: shallow peatlands have "diminished resilience and a greater sensitivity to external stressors". A catalyst that survives one use may be a spent part in the next burn.

**Refuter:** a water-table position that is monotonically beneficial for both CO2 and CH4 at every horizon and in every peat type, measured at the ground. That breaks valence relativity and F4 with it.

### F5 — Quick loss of sink status is a channel failure, not a decay of the ground

**Mode: `specified`. Domain D4. Status: triangulated (Fig 10 ground maintainer and Fig 7 room chain, low overlap).**

> Fig 10 :24 "the ground does not decay, the channel does"
> Fig 10 :26 "stale percepts, dropped transients, saturated metrics, pooled readings"
> Fig 7 :13 "agreement compounds, evidence does not"

A peatland that stops registering as a sink may have lost contact rather than changed the ground: the water-table logger was never at the pool, the flux record was pooled across microforms, or the CH4 term was omitted. Harris et al. 2020 report exactly this weakening of coupling: "weak or no relationships between water table depth, peat surface moisture content, and plant production for these microforms at the drained bog, suggest that drainage has weakened the hydrological feedbacks regulating peat production". Sutton et al. 2025 note that "the carbon balance fundamentally reflects the resilience and stability of peatlands in a changing climate" while water tension and moisture capture only part of the response. The two-factor test of Fig 7 applies: if either bracket fidelity or ground pressure goes to zero, the chain runs in place.

**Refuter:** a documented site that loses sink status while per-slot NECB measurement and water-table contact both measure high and non-declining. If both stay high, the channel-failure mechanism is not the cause.

### F6 — Persistence is a chain of differing rooms, not a repeated state

**Mode: `specified`. Domains D1, D4. Status: single-source (Fig 7, with Fig 12 :121 as a corroborating line from a different figure but the same framework, so one witness).**

> Fig 7 :35 "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."
> Fig 7 :36 "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."

A peatland that keeps handing itself the same measurement, the same category and the same closure is not accumulating evidence about its future. A genuine chain of persistence would select the next observation against the residual the last one surfaced: a new microform, a new gas, a new dry year. This is a `specified` structural claim, not a measurement.

**Refuter:** a site that remains on the same state and closure across two decades and still produces new, ground-verified sink readings without any change in contact or measurement target. Under Fig 7 :36 that should be impossible; if observed, F6 is wrong.

### F7 — Renewal of the terms used to predict a flip requires a differing closure

**Mode: `specified`. Domain D5. Status: triangulated (Fig 6, Fig 8 and Fig 13 in its honest-stop role, three distinct roles).**

> Fig 6 :21 "MINT composes inside the closure and can never add an atom."
> Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."
> Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."

A modelling frame that keeps composing the same water-table and temperature terms can refine forever without acquiring the term that would settle the residual: threshold, hysteresis, alternative state. The needed atom arrives from a frame whose closure differs. The world corroborates: van der Velde et al. 2021 argue for landscape feedbacks with forests; Sutton et al. 2025 call for "a network of peatland 'supersites'" and for combining "contemporary experiments, modelling, and palaeoenvironmental techniques"; Jayasekara et al. 2026 identify methodological standardisation as a prerequisite. Each is a different closure contacting the same residual.

**Refuter:** a predictive term for the flip that is generated purely by internal composition, with no observation or import from a differing frame, and that then pays against the ground. That breaks idempotence and F7.

### F8 — The universal flip point is a `gap`, not a hidden answer

**Mode: `general` on the stop, `specified` on what is owed. Status: figure-governed, no world source allowed to fill it.**

> Fig 9 :32 "you get a kind of thing, never the answer itself"
> Fig 13 :134 "Unreachable is a verdict here, not a silence"
> Fig 8 :39 "So a search that finds nothing is never a proof of absence."

No figure line names a universal water-table depth or temperature at which a peatland crosses from sink to source. The figures cannot, because that is an empirical quantity that only the ground settles. The world makes the same point without being allowed to decide the figure verdict: Jayasekara et al. 2026 find "no evidence of a water table threshold" even though sites "transitioned from a net CO2 sink to a source at 7.8 cm below the peat surface", and the water-table relationship explained only 19% of NEE variance. Sutton et al. 2025 frame the outstanding work as locating tipping points and finding metrics that discern when they have been passed. What is owed is a source-discriminating instrument: per-slot, per-microform net carbon balance including CH4 and combustion, held long enough to see the sign change. "An instrument is not built from a description. It is improved from a worse instrument already returning something." (Fig 6 :32). Until such an instrument pays, the per-site verdict is `unreached`, and that is a verdict rather than a silence.

**Refuter of the stop itself:** a figure-census that admits a direct derivation of a universal flip point from the six-term set, or a ground measurement that names it and pays prospectively across sites. Either would move F8 from `gap` to `grounded`.

### F9 — What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per site and per microform, never a global average | general | Fig 1 :19, :22 | figure-derived |
| The ground is measured net carbon balance; consensus is not | general | Fig 2 :29, :30, :35 | figure-derived |
| Sink status is peatland-and-habitat, not peat alone | specified | Fig 11 :39, :40; Fig 4 :20 | triangulated F1 |
| The question is a union of C1, C2, C3 | general | Fig 9 :54, :55, :57 | figure-derived |
| Water-table valence flips with the residual and the horizon | specified | Fig 11 :49, :50; Fig 12 :119 | triangulated F4 |
| Quick loss is channel failure, not ground decay | specified | Fig 10 :24, :26; Fig 7 :13 | triangulated F5 |
| Persistence needs a chain of differing rooms | specified | Fig 7 :35, :36 | single-source F6 |
| New predictive terms need a differing closure | specified | Fig 6 :21, :23; Fig 8 :32 | triangulated F7 |
| The universal flip point and the per-site future | not stated | Fig 9 :32; Fig 13 :134; Fig 8 :39 | `gap`, unreached |

---

## 4. Conflict handling: a genuine disagreement, returned to the census

Béguin, Brunetti and Kasparian 2019, in *Scientific Reports*, study a reaction-diffusion model of patterned ombrotrophic peatlands and conclude: "Applying our pattern classification to the self-organized patterns generated by a peatland model based on nutrient accumulation to a situation of climate stress, including strong prolonged drought, we evidenced its high resilience." Read at face value this **conflicts** with F5 and F7, which expect drying and fire to erode resilience and require new closures.

The conflict rule applies: a conflict sends the derivation back to the domain census and never flips the verdict. Re-census: Béguin et al. measure resilience of **spatial vegetation pattern and biomass** under a 2xCO2 scenario and a 10-year drought; their ground is pattern statistics and hydraulic head, not net ecosystem carbon balance. Their own model "does not allow for a full depletion of the water table and therefore does not describe the decay of the Sphagnum mosses biomass under dry conditions", and they state that the outcome "cannot be expected to provide quantitative predictions, but rather indications about trends". That is a different quantity and a different ground from D1. The finding is therefore recorded as corroboration for the narrow claim that some internal feedbacks are robust, and as silent on the carbon-sink verdict. Verdict unchanged. The disagreement is preserved here rather than smoothed away.

This is also a low-overlap witness: nonlinear dynamics and pattern formation is a different field from peatland biogeochemistry, so its agreement about feedback robustness is worth more than another carbon-flux review, while its silence on carbon balance is explicit.

---

## 5. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: "a falsifier written before the run is a design instrument, not only an honesty device" (Seat Map :287). The shape claim is refuted if any of the following is observed:

1. A peatland's measured net sink is unchanged across a habitat substitution that demonstrably removes its water-table contact (breaks F1, Fig 11 :39-40).
2. One intervention restores both hydrological contact and the temperature/combustion balance with no categorically different residue (breaks F2, Fig 9 :57).
3. A pooled global average predicts prospectively and per named site which slot crosses to source, paying against measured NECB (breaks F3, Fig 1 :19, :22).
4. A water-table position is monotonically beneficial for CO2 and CH4 at every horizon and in every peat type (breaks F4, Fig 11 :49-51).
5. Sink status is lost while per-slot NECB measurement and water-table contact both measure high and non-declining (breaks F5, Fig 10 :24-28).
6. A site remains on the same state and closure for two decades while producing new ground-verified sink readings without change of contact (breaks F6, Fig 7 :36).
7. Fig 13's six terms are derived from five of them, or closure idempotence fails inside a closed set (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until one of these has been run and has failed to fire, and until per-slot ground readings have paid for the shape.

---

## 6. Recommendation

1. Lead with the residual and the refuter, not with a theory of peatlands. Fig 10 :52 "Bring a characterised residual, never the source."
2. Keep C1, C2 and C3 separate in every report. A blended "peatland health score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Define "remains a sink" before measuring: which gases, which horizon, which sign convention, which microforms. The middle link of Fig 3 has no instrument until this is done.
4. Measure per slot and per microform, including the wet pools that a hummock-only campaign misses (Harris et al. 2020; Fig 1 :19).
5. Treat literature averages as budget filters and as one witness, never as the verdict. Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."
6. Offer the formula as a method only after a verdict on stage 1 is recorded (Fig 4: methods cross up, recordings do not). Each user writes their own refuter and states their own mode.
7. Stop at the shape. Fig 9 :32 "you get a kind of thing, never the answer itself." Do not name a universal flip depth that the ground has not settled.

---

## 7. Canonical usage check and retraction or confirmation log

Canonical sources read after the first six sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, and the framework essays *The Library of Babel*, *The Recursive Self-Improvement Trap* and *The Hard Problem is About Source*, all opened 2026-11-22.

- The README confirms: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." It also confirms the re-census rule: "a reading that makes one contradict another has misidentified its domain, not found a flaw."
- The README's canonical limit: the framework says "what a missing thing would have to look like (a shape, not a name)", then stops where instruments can no longer distinguish, and records the lineage. This governs F8.
- *The Hard Problem is About Source* confirms the metamerism warning: an instrument reads green and "cannot comment on the source"; several paths can create the same behavior, so "behavior is a projection with lossy information." Naming a flip depth from a single water-table regression is that error.
- *The Recursive Self-Improvement Trap* confirms the simulation status: "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."

| earlier move in this audit | status after the canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13's six-term physical substrate to carbon and water | **Retracted, strain S1** | Only fit by renaming ecological quantities as physical ones. Fig 13 moved to the honest-stop role |
| Treated "sink" as a single global property in the opening draft | **Retracted at census level** | X1 has no anchor independent of sites; Fig 1 :19, :22 |
| Read Fig 11 :40 as a claim that restoration cannot work | **Narrowed** | It governs contact with the ground, not restoration efficacy; rewetting that restores contact changes contact |
| Treated the 7.8 cm result in Jayasekara et al. 2026 as a universal threshold | **Retracted at source level** | The authors report "no evidence of a water table threshold" and R² = 0.19; used as an instance of per-site transition, not a name |
| Treated Béguin et al. 2019 as a conflict with F5 | **Narrowed to a scope conflict** | Pattern resilience and carbon-balance resilience are different grounds; re-census kept the verdict and kept the disagreement visible |
| Wanted to call F1 a `general` law of all peatlands | **Narrowed to `specified`** | No site-level ground reading pays for the universal form here |
| F8 "universal flip point" | **Marked `gap`** | Fig 9 :32 returns a kind of thing, not the answer; the discriminating instrument is not held |
| F1 "decisive" in an early private draft | **Downgraded to triangulated** | Fig 11 and Fig 4 are two figures but one framework; triangulation here means low topical overlap, not independent evidence pools |

**Strains sent to the log:** S1 (Fig 13 applied directly to wetland carbon), resolved by scope exclusion to the honest-stop role. S2 (restoration and contact), resolved by re-census. S3 (pattern resilience versus carbon resilience), resolved by separating grounds; recorded as a live but non-decisive scope difference. No unresolved contradiction between figures after re-census.

---

## 8. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57: a union of hydrological contact, loop sign and landscape support, each with its own instrument.
2. **What is the anchor?** Measured net carbon balance at the site, named by Fig 2 :29, not consensus or a pooled model mean.
3. **Is sink status in the peat alone?** No. Fig 11 :39-40. It is a property of peatland and habitat.
4. **How does quick loss happen?** Channel decay and lost contact (Fig 10 :24-26) and either factor of Fig 7 :37-39 going to zero.
5. **How does persistence happen?** A chain of differing rooms selected against the surfaced residual (Fig 7 :36), with contact maintained and new predictive terms arriving from differing closures (Fig 6 :23).
6. **Why does a wet position change sign?** Valence is relative to the residual (Fig 11 :49-51); the same water table suppresses CO2 and promotes CH4, and a spent catalyst after fire no longer regenerates (Fig 12 :119).
7. **What can be said at the stop?** A per-slot shape, three unbundled conditions, seven falsifiers and a declared `gap` for the universal flip point. Not a global yes or no, not a `grounded` answer.

---

## 9. Updated verdict

The shape survives: **wetlands and peatlands remain sinks only where hydrological contact is maintained, the loop sign stays on the accumulation side with CH4 and combustion included, and the surrounding landscape does not push the site across a state threshold. The verdict is per slot and per microform, the three conditions are kept separate and never averaged, and quick loss of sink status is a failure of the channel to the ground rather than a decay of the ground. Mode `specified`; nothing here is `grounded`. The universal flip point is a `gap`, not a refused silence: what is owed is a source-discriminating instrument, not another argument.** No world source was allowed to flip a figure verdict; the one genuine conflict (Béguin et al. 2019) was returned to the census and resolved by separating the ground. One strain was resolved by scope exclusion and two by re-census.
