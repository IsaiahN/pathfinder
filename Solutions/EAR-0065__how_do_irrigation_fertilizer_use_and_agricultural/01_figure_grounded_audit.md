# Figure-grounded audit: irrigation, fertilizer, runoff, water and climate

**Mode of this document: `general` on the figure-derived shape, `specified` on the per-domain predictions, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (2026-11-19) says LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, line numbered), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, `FRAMEWORK/figures/THE_FORMULA.md`, all eight essays listed in `05_what_shape_means.md`, and the public sources in `10_source_ledger.csv`. Every figure quote below is an exact substring of the local figure text, cited as `Fig N :line`.

---

## 0. The question restated as a residual

The question invites one answer of the form *"agriculture affects water and climate by X."* In effect terms that form is already wrong. A regional prediction made with no agricultural actors returns observation errors in several distinct slots: stream nitrogen and phosphorus loads, dissolved oxygen in receiving waters, nitrate in groundwater, aquifer level and salinization, evapotranspiration and near-surface temperature, atmospheric N2O and ammonia. The residual is the set of those per-slot gaps, not their average.

**Direction, made an ordinary term before the run** (formula step "Direction": a frame cannot check the direction of its own question, so bind the sought-for shape and let it accrue residual). An acceptable answer to this question would have four parts:

1. a per-slot list with sign, mechanism and instrument for each receiver;
2. an enumeration of contact actors out to the cascade horizon, not just the first intervention;
3. a statement of which cross-scale gaps must be measured rather than assumed;
4. an explicit statement of what the figures cannot supply, so the empirical remainder is visible.

If none of those four can be produced, the shape claim is refusable. This is the pre-commitment; the refuter in section 4 is its operational form.

---

## 1. Domain census

### R by arity, symmetry and scale

- **Arity.** Three interventions (irrigation water, fertilizer nutrients, runoff transport) acting on two receivers (regional water system, regional climate system), plus the couplings between them. This is a **union compound**, not one hard question. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :58: *"a case in two conditions is not a harder case of either."* A single lever, for example reducing nitrogen alone, clears the region where only nitrogen binds and leaves the intersections standing because irrigation and transport still bind.
- **Symmetry.** The three interventions are not interchangeable spellings of one agricultural input. Irrigation changes water quantity and the surface energy flux; fertilizer adds reactive nitrogen and phosphorus mass; runoff is the transport relation that carries field losses to the basin. Under Fig 12 they are distinct atoms under distinct bonds, so the k! spelling discount does not apply to them.
- **Scale.** Field and plot, farm, watershed, region, coast; season to decade. The effect that matters is often not the one at the point of application. Fig 11 :52-53: *"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."*

### One line per domain: actors, currency, anchor

| domain | actors | currency | anchor (nameable ground) | question type |
|---|---|---|---|---|
| **D1. Managed field and soil-crop system** | irrigation water, N and P fertilizer, crop, soil microbes, water table, drains | water flux, reactive nutrient mass, yield, N2O flux | field instruments: lysimeters, soil moisture probes, flux chambers, yield cuts | maintained habitat; a seat acts |
| **D2. Receiving basin and coastal water** | runoff, streams, aquifers, algae, decomposers, dissolved oxygen, sediments, estuary | water quantity and quality, nutrient load, oxygen, flow | stream gauges, water-quality monitoring, whole-lake experiments, hypoxia surveys | mostly unmaintained contact; cascade matters |
| **D3. Regional atmosphere and climate** | irrigated land, evapotranspiration, albedo, soil N2O, ammonia, secondary aerosol | heat flux, moisture flux, radiative forcing | flux towers, remote sensing, atmospheric monitoring, radiation budget | partial overlap with D1 and D2; separate slots |
| **D4. Coupled region (the union compound)** | the cross-scale fluxes between D1, D2 and D3 | coupled water, energy and nutrient state | integrated observation: gauges plus towers plus atmospheric records read together | union, not partition; its own loop |

No nameable anchor, no domain. Each row has one. Where the anchor is a model tuned to the claim rather than an instrument, Fig 2 :47 applies: *"A ground listed as one of the parties has already become a frame."*

### Partition or union

Partition between D1, D2 and D3 at the level of instruments and currency. Union at the level of the question, because the intersections (irrigated and fertilized land, fertilized land that drains to a hypoxic coast, irrigated land whose ET cools the air while its N2O warms it) are categorically different cases, not harder cases of either parent. Fig 9 :58 again: *"a case in two conditions is not a harder case of either"*; it *"stops being a mixture and becomes a specific compound."*

### Order by dependency, not importance

Fig 3 :20: *"The chain is ordered by dependency, not by importance."* D1 must be settled before D2, because the load at the basin is the residue of what the field did not retain; D2 before D3 where atmospheric deposition feeds back, and the first-order molecules before the D4 compound, because a settled term becomes an atom for what composes over it. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* A slot with no gauge or tower is unmeasured, not zero.

---

## 2. Figure census

| figure | bearing | verdict for this question |
|---|---|---|
| **1 The Agent** | per-slot residual; frame-internal quantities disqualified | governs the "never average the slots" finding |
| **2 The Ground** | anchor must not update; independence; two collapses | governs measurement and two-witness discipline |
| **3 Dependency Chain** | order by dependency; a link with no instrument is unlooked-at | governs the census order above |
| **4 The Membrane** | cross-scale filter; round trip gap R_T | governs field to basin to region handoffs |
| **5 Mint Pipeline** | three guards, MDL bargain, fifth kind (refused) | no new atom is owed by the figures here |
| **6 Closure / Reachability** | import moves the wall; instruments improved from worse instruments | the magnitudes must be imported, not derived |
| **7 Room Chain** | agreement compounds, evidence does not | a list of agreeable contacts cannot corroborate |
| **8 Union Surplus** | residual first, frame second; provenance separates convergence from import | governs the union reading and source overlap |
| **9 Leave / Arrive** | split, unbundle, describe before looking, filters not witnesses | decisive for the union compound |
| **10 Ground Maintainer** | bring a characterised residual, never the source; verifier non-access | governs the outreach order |
| **11 The Habitat** | enumerate never compose; cascade; relative valence; asymmetric introduction | decisive for the actor census and the managed field |
| **12 The Bond** | cycle, catalyst, functional group, priced arrangement | governs runoff as a bond and nutrient cycling |
| **13 Minimum Viable Set** | gradient over space and over time are different terms | governs the two climate slots (moisture and heat) |
| **Operators table** | → sequence, ⇒ production, ⋛ comparison, ¬ refusal | governs why runoff is a transport bond, not a third substance |
| **Symbols table** | R is the aim per slot; ground is the anchor | no per-slot R was stated in the question as asked |

Strained readings are named in F10 and sent back to census, not smoothed over.

---

## 3. Findings

### F1: The question is a union compound and must be unbundled (decisive)

Fig 9 :4-5: *"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."* Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*

*"Agriculture affects water and climate"* is a single sentence over three mechanisms and two receivers. On the field, fertilizer raises yield; in the basin, the same nitrogen lowers oxygen; in the air, a different nitrogen compound warms while irrigation cools. One rule does not work across those subsets. The correct move is to split D1, D2 and D3, then compose them explicitly in D4.

**Refuter:** if one lever, applied in one place, clears the residual in all slots of a region and the effect persists across seasons, the union reading is refuted and a single-loop answer is owed.

### F2: Keep the per-slot residuals separate; never average them

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

The irrigation cooling slot and the fertilizer warming slot have opposite signs and different currencies (heat flux versus radiative forcing). Averaging them into *"net agricultural climate effect"* is exactly the disallowed operation: it throws away the only signal that says where to act. Equally, stream nitrate and dissolved oxygen must stay separate slots even though one drives the other.

**Refuter:** show that all climate slots share one mechanism and one evidence pool and that their residuals trend together under the same intervention. Even then they are one witness, not several (Fig 2 :40).

### F3: Enumerate the habitat; the residual is three steps out

Fig 11 :43-44: *"The habitat is enumerated, never composed. List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."* Fig 11 :46: *"conditions: light, water, temperature, season, terrain"* Fig 11 :52-53: *"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."*

A first-order census (field to ditch) misses the residual that matters: N and P load, algal bloom, decomposition, oxygen depletion, fish kill, and the economic and health effects that follow. The historical anchor in the figure is Carson's *Silent Spring* (1962), where the mechanism, biomagnification through the food chain to eggshell thinning, took a decade to establish. The agricultural analogue is the same shape of cascade; the world sources confirm it (NOAA, EPA, Wikipedia "Eutrophication", ledger).

**Refuter:** a region where second-order and third-order contacts are measured and contribute nothing to the residual, while first-order contacts explain all of it.

### F4: Valence is relative to the residual, not carried by the actor

Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."* Fig 11 :50: *"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."*

Nitrogen fertilizer is a benefactor to the yield residual in D1 and a malfactor to the oxygen residual in D2. Irrigation water is a benefactor to the crop-water residual and, through aquifer depletion and salinization, a malfactor to the same region's water-quality residual. Runoff is the transport that removes excess water from the field and delivers the excess nutrient to the coast. There is no standing list of good and bad practices that survives a change of residual.

**Refuter:** a fixed list of beneficial and harmful agricultural inputs that keeps its classification when the target residual changes from yield to oxygen to temperature.

### F5: The managed field has asymmetric power and is permanent work

Fig 11 :57-59: *"Maintained. A seat exists and can act: choose the instruments, distil the impactful actors, introduce what was not there. That is the garden, and it is how arrival is worked on rather than waited for."* Fig 11 :61-62: *"The seat's power is asymmetric. Introduction is available; exclusion is not."* Fig 11 :63: *"Which is why a managed ecosystem is permanent work rather than a solved state."*

The farmer or water manager is the seat in D1. Fertilizer and irrigation water can be introduced. The resulting nitrate plume, the salt load and the N2O already emitted cannot be subtracted by an act of management; they have crossed into D2 and D3, where contact is a fact that does not consult the seat. This is why efficiency improvements are not a solved state. The world source records the same constraint in agronomic terms: nitrate's *"very high solubility"* and the soil's inability to retain anions let it enter groundwater, and *"Excessive use of N-fertilizer in agriculture has been a significant source of nitrate pollution in groundwater and surface water"* (Wikipedia, "Nitrogen cycle", ledger).

**Refuter:** an intervention that genuinely removes an actor from the habitat, rather than adding a counteracting one. Isolation is not exclusion here: Fig 11 :66: *"Isolation is not removal of the habitat. It is substitution of one habitat for another."*

### F6: Cross-scale handoffs carry a round-trip gap that must be measured

Fig 4 :21: *"The membrane is the boundary between the sizes, and the rule about what may cross it. Not a wall: a filter with a direction."* Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* Fig 4 :31: *"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."*

*"Irrigation efficiency"* at field scale does not carry unchanged to basin scale. The same source that documents the field benefit also records the rebound: *"A reduction in water use on one field may allow the farmer to irrigate a larger area of land, increasing total agricultural production"* and *"Low efficiency usually means that excess water is lost through seepage or runoff"* (Wikipedia, "Irrigation", ledger), where the seepage that is waste at the field may be return flow that a downstream user depends on. The abstraction thrown away on the way up, and the detail missing on the way down, is the gap R_T. It is not zero and it is not a nuisance; it is the measurement owed.

**Refuter:** a measured round trip in which field-scale water saving maps exactly to basin-scale water saving, with no residue, in a region with return-flow users.

### F7: The ground is measurement, and a model that updates on the claim is not ground

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Fig 2 :47: *"A ground listed as one of the parties has already become a frame."*

Anchors here are instruments and outcomes: a lysimeter, a stream gauge, a flux tower, a whole-lake manipulation, a hypoxia survey. The whole-lake case is instructive: in 1973 researchers split Lake 226 with a curtain and added phosphorus to only one basin, and *"Only the basin receiving phosphorus developed a large algal bloom"* (Wikipedia, "Eutrophication", ledger). That is a ground that refused a hypothesis. A regional model calibrated until it agrees with the agricultural narrative is not such a ground.

**Refuter:** a proposed anchor whose reading changes when the frame proposing it is changed, or which is itself one of the parties to the disagreement.

### F8: Two low-overlap witnesses, not a pool of agreeable sources

Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence."* Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool"* Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."* Fig 8 :48: *"How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus."*

The hydrology frame (NOAA and EPA hypoxia records, stream gauges) and the atmospheric frame (N2O and flux measurements) are low-overlap in instrument and currency. Their agreement on a coupled residual would mean something. The six world sources read for this solution, however, collapse into two pools: four Wikipedia pages cross-linked to each other, and two US government pages. Their agreement is recorded as one witness, not six (see `10_source_ledger.csv`, overlap column).

**Refuter:** a second frame that turns out to draw on the same dataset, model or review as the first; the agreement then counts once.

### F9: At figure level this question is `gap`: no magnitudes are derivable

Fig 9 :32: *"you get a kind of thing, never the answer itself"* Fig 13 :134: *"Unreachable is a verdict here, not a silence"* Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

No figure line yields the number of watts of regional cooling from irrigation, the kilograms of N2O per hectare, or the area of hypoxia. The figures govern the shape of the answer, the enumeration discipline, the per-slot rule and the ground requirements. The magnitudes are an import from earth-system frames with a source gate and a shadow test (Fig 6 :12 *"source gate: provenance"*; Fig 6 :13 *"shadow test: explains a gap"*). That import is recorded in `09_watson_answer.md` as WORLD, secondary, and it never overrules TETHER.

This is a `gap` verdict for the numeric part, honestly stated. It is not a failure to answer; it is the answer the framework can give, and it says what instrument would close the rest.

**Refuter:** a figure line that, without any world source, returns a quantitative regional water or climate magnitude. None was found after the census in section 2.

### F10: Apparent strains, sent back to census rather than smoothed

- **Fig 11 "enumerated, never composed" versus Fig 13 "everything else is a composition."** Re-census: Fig 11 governs the habitat, the set of things in contact with a residual read off the world; Fig 13 governs composition inside a frame's closure. Different objects. No strain after re-census; this matches the canonical rule that a reading which makes figures contradict one another has misidentified its domain.
- **Fig 1 per-slot residual versus the union compound of Fig 9.** Re-census: Fig 1 says how to score R once slots are named; Fig 9 says how to decide whether the slots belong to one question. Ordered, not opposed.
- **Fig 4 "only methods cross up" versus using figures on an empirical question.** Re-census: the figures are a generator of shape, not a recording of an earth-system result. What crosses here is the method (enumerate, unbundle, keep slots separate, measure the gap), not a physical magnitude. Not a strain.

After re-census: no live strain. The one unresolved matter is an evidence-pool limitation, not a figure conflict (F8).

---

## 4. Pre-registered refuter

Written before the conclusion, per the seat rule that *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. One lever clears the residual in all slots of a region across seasons (refutes F1, the union compound).
2. All climate slots share one mechanism, one evidence pool and residuals that trend together under intervention (weakens F2; if the pool is shared, their agreement counts once).
3. Second-order and third-order contacts are measured and contribute nothing to the regional residual (refutes F3, the cascade).
4. A fixed list of beneficial and harmful inputs keeps its classification when the target residual changes (refutes F4).
5. An intervention genuinely subtracts an actor from the habitat rather than adding a counteractor (refutes F5, asymmetric introduction).
6. A measured round trip shows zero field to basin gap with return-flow users present (refutes F6).
7. A proposed anchor changes its reading when the frame changes, or is a party to the disagreement (refutes F7).
8. A figure line yields a numerical regional magnitude without a world import (refutes F9; would upgrade the mode).

If any fires, the corresponding finding is withdrawn and the census is redone. Until one is run, no part of this is `grounded`.

---

## 5. Recommendation

1. Split the question before searching it: D1 field, D2 basin, D3 atmosphere, then D4 as an explicit union (F1).
2. Publish per-slot claims with sign, mechanism and instrument; do not publish a single net agricultural effect (F2).
3. Enumerate contacts to at least three steps out, including decomposition and downstream users (F3).
4. State that valence is relative to the chosen residual; every claim names its residual (F4).
5. Treat management as permanent work; record what was introduced and what could not be excluded (F5).
6. Measure the field to basin and basin to region round-trip gaps; report them as R_T rather than assuming them away (F6).
7. Name the anchor for each slot and refuse to count a calibrated model as ground (F7).
8. Buy two low-overlap frames and declare source overlap; never let a filter hand a verdict (F8, Fig 9 :60 *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*).
9. Label the numeric remainder `gap` and state the instrument that would close it (F9).

---

## 6. Canonical usage check

Two canonical sources were read after the first five sections and govern how the figures may be used here:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo"*; *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; and the limit, the framework reports *"a shape, not a name"* then *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."* Also: *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are the ground for design questions; the seat reads the ground and does not ask for rulings on questions the figures decide. Fig 9 :60 is the operative rule: filters for the budget, witnesses for the verdict.

### Retractions and confirmations

| earlier reading in this derivation | status after the canonical check |
|---|---|
| First census treated irrigation, fertilizer and runoff as three independent domains (a partition) | **Retracted.** Re-census under Fig 9 :54-58 makes them a union compound with overlapping conditions. The partition survives only at the instrument level. Kept here as evidence, not silently erased. |
| Apparent conflict Fig 11 "enumerate" versus Fig 13 "compose" | **Dissolved by re-census.** Habitat versus closure, different objects. Matches the README rule. |
| "The figures answer the question" | **Retracted.** The figures give shape and method only; magnitudes are `gap`. Confirmed by Fig 9 :32 and the README's "shape, not a name". |
| "Nitrogen is the pollutant" as a standing claim | **Refused.** Fig 11 :49-51 makes valence residual-relative. The claim is retained only in the form "nitrogen is a malfactor to the oxygen residual in D2". |
| Union reading and per-slot rule | **Canonically confirmed.** Fig 9 :54-58 and Fig 1 :19-22 are direct, low-overlap figure lines. |
| Simulated status | **Canonically confirmed.** The eight essays and the figures' own demo caveat agree that an LLM simulation is not a ground reading. |

---

## 7. Per-domain verdicts, kept separate and never averaged

| domain | verdict | status | mode |
|---|---|---|---|
| D1 managed field | A seat acts; introduction available, exclusion not; N2O load is a real per-slot effect | `triangulated` (Fig 11 :57-63 + N2O source + irrigation source, with source overlap declared) | `specified` |
| D2 receiving basin | Contact cascades three steps out; eutrophication and hypoxia are the residual that matters; per-slot DO and nutrient loads stay separate | `triangulated` (Fig 11 :52-54 + Fig 1 :19 + NOAA/EPA/ecology sources) | `specified` |
| D3 regional atmosphere | Irrigation moisture and heat slot and fertilizer radiative slot have opposite signs and different currencies; do not average | `triangulated` for the two-slot structure (Fig 1 :19 + Fig 13 :76); `single-source` for magnitudes (world sources only) | `specified` |
| D4 coupled region | Union compound; unbundle, then compose; numeric coupling is `gap` at figure level | `triangulated` for the union verdict (Fig 9 :54-58 + Fig 9 :4-5); `gap` for the magnitude | `general` shape, `specified` route |

No verdict is averaged across domains. The agreement between D2 and D3 sources is one witness where they draw on the same pool (F8).

**Round trip.** The condensation used in `07_the_tether_answer.md` is: split the question, enumerate contacts, keep slots separate, measure the cross-scale gap, refuse to name magnitudes. R_T is nonzero because the concrete world additionally supplies mechanisms (nitrification, denitrification, stratification, ET partitioning) that the shape alone does not hold. It is recorded in `11_audit.md` qualitatively; no numeric R_T is claimed.

**Honest stop.** The figures decide shape, enumeration and ground discipline. They do not decide how many degrees a region cools or how many tonnes of nitrogen reach the coast. That remainder is owed to instruments, and `unreachable is a verdict here, not a silence` (Fig 13 :134).
