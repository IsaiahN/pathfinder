# Figure-grounded audit: EAR-0029 regional sea-level rise

**Mode of this document: `general` for the shape findings, `specified` for the binding of the three named drivers, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (read 2026-11-22): "the truly testable output would need to be derived from the real architecture or working the formula yourself"; LLM output is a simulation of an answer. This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Figures quoted verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`. Framework rules from `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. World sources were fetched on 2026-11-22 and are listed in `10_source_ledger.csv`.

---

## 0. The residual, in effect terms

Let `R_s` be the gap between observed and predicted sea level at coastal slot `s` (a gauge, a coastline segment, an island). The question asks for the shape of `R_s` across slots and how that shape moves as circulation, gravity, and land motion change. Symbols table: "The gap between prediction and observation. The central quantity: everything the system does is driven by it."

- **Option A (aggregate).** Report one global mean, treat regional departures as noise. Leads to: a live coastal signal disappears into an average (Fig 1 :22); a coast can be in a live-residual state while the global number looks settled (Fig 1 :13, :20); adaptation is planned at the wrong scale.
- **Option B (per-slot union).** Report a per-slot vector, unbundle the overlapping drivers, keep each sign relative to the slot, and let instruments settle each slot. Leads to: a checkable shape, a stated refuter, and an honest stop before the numbers.

**What an answer would look like, written before the search:** a per-coast vector rather than a scalar; a union rather than a partition; a sign that reverses with distance from an ice source; and a discriminator instrument capable of separating drivers at one slot. Bound now so it can accrue a residual like any other term (formula step "Direction"; Fig 5 :65-66).

---

## 1. Domain census, before any figure line is chosen

**R by arity, symmetry, scale.** Arity: an index over `N` coastal slots, not one number. Symmetry: not symmetric; the relevant bond is a threshold comparison, "is it about which is larger, rather than both being present?" (Fig 12 :87); the same driver carries opposite sign at different slots. Scale: local (centimetres at a coast) composed over basin circulation, planetary mass redistribution, and distant gravitational fingerprints; several strata with lossy transforms between them.

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D1 physical ocean / ice / solid Earth | circulation and density, ice mass, gravity + rotation + deformation, GIA, subsidence, tectonics, land water | sea-surface height, mass, geoid, vertical land motion | measurements, not model agreement | **union** of overlapping conditions |
| D2 measurement and verification | tide gauges, satellite altimeters, GNSS, GRACE / GRACE-FO, Argo floats | independent observations | the ground, never agreement | triangulation between low-overlap instruments |
| D3 coastal impact habitat | coastlines, deltas, communities, infrastructure, tides and storms | exposure, extreme still water level | local outcomes | habitat, enumerated not composed |

**No nameable anchor means it is not a domain yet.** D1 has gauges, altimeters, gravimeters and GNSS. D2 has those instruments as its own currency and the ground as its anchor. D3 has local outcomes. All three qualify.

**Partition or union.** D1 is a union, not a partition: the named drivers overlap. Earth gravity, rotation and deformation (GRD) contains a deformation term that also appears under land motion; sterodynamic change contains both a steric and a dynamic part; the gravitational fingerprint of ice loss is itself a land-motion-adjacent solid-Earth response. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." A single lever would clear the region where only one condition holds and leave the intersections standing (Fig 9 :55-58).

**Order by dependency (Fig 3).** Perceive the slot first (link 1), acquire terms for what a slot affords (link 2), state what counts as progress at that slot (link 3), then plan (link 4). Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." A global mean is a reading taken below a broken per-slot perception link; it is not a weak per-slot reading, it is a reading of nothing (Fig 3 :22-23). Unbundle the union before searching; describe the residual before choosing a frame (Fig 9 :27-28).

---

## 2. Figure census and findings

| figure | bearing here | verdict |
|---|---|---|
| 1 The Agent | residual indexed by slot; global near-zero with live slot is legal | shape decided, triangulated with world sources |
| 2 The Ground | anchor cannot update; independence between instruments | measurement domain decided |
| 3 Dependency Chain | per-slot perception before planning; union unbundled | order decided |
| 4 The Membrane | domain-agnostic kernel; lossy round trip `R_T` | mode and honesty condition |
| 5 Mint Pipeline | support, reachability, novelty; shape as a preference | no mint claimed; shape bound as ordinary term |
| 6 Closure / Reachability | instruments improved from worse instruments already returning | numerical field is INWARD work, not import |
| 7 Room Chain | agreement compounds, evidence does not | no consensus as verdict |
| 8 Union Surplus | two low-overlap instruments reach what neither reaches | triangulation rule |
| 9 Leave / Arrive | union unbundled; describe before looking; filters not witnesses | decisive for method |
| 10 Ground Maintainer | bring a characterised residual, never the source | outreach ordering |
| 11 The Habitat | enumerate habitat; valence relative to residual; contact cascades | decisive for the three drivers |
| 12 The Bond | space gradient versus time gradient; functional group / isomer | supporting derivation |
| 13 Minimum Viable Set | states and structures; cross-kind composition only | no strain after re-census |
| Operators / Symbols | comparison is ordered; `R` is per slot | consistent |

### F1 : The live signal is per slot; the global mean is an aggregate, not an answer

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**
Fig 1 :28: **"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."**
Fig 1 :13: **"a global R near zero with one live slot residual is a legal state"**
Fig 1 :20: **"a global residual near zero with one live slot is a legal state and not an inert"**

This governs the question directly. The object slots are coastal locations. A well predicted global mean and a badly predicted coast are simultaneously legal states. The correct object of study is the vector `R_s`, with the global mean retained only as one summary statistic among many, never as the residual that drives the loop.

**Strain test and re-census.** An initial reading said Fig 1 contradicts the assessed fact that global mean sea level is rising. Re-census resolves it: Fig 1's "global R" is the prediction minus observation error signal, not the physical height of the ocean. A correctly predicted rising mean is exactly a low global residual. Different quantity, so no strain. This correction is kept visible.

**World corroboration (secondary).** NASA, *What Causes Local Sea Level Change?*: "In some places, local sea level rise can differ from the global rise by 100% or more." NOAA Ocean Service, *Is sea level rising?*: "the sea surface is not changing at the same rate globally". IPCC AR6 WG1 Ch9: "At the basin scale, sea levels rose fastest in the Western Pacific and slowest in the Eastern Pacific over the period 1993–2018".

**Refuter:** if a single global mean plus fixed local offsets predicts observed per-slot sea level within instrument error at every coastal slot, this finding fails.

### F2 : The three drivers form a union compound, not one hard problem or a partition

Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**
Fig 9 :57: **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."**
*The Library of Babel* (essay, read 2026-11-22): "Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually".

The question already names three conditions, but they are not separable. The overlap is itself a compound with its own loop, so each condition needs its own slot-level treatment before the intersections are handled.

**World corroboration.** IPCC AR6 WG1 Ch9, Executive Summary: "Regional differences in sea level arise from: ocean dynamics; changes in Earth gravity, rotation and deformation due to land ice and land-water changes; and vertical land motion." Box 9.1: "Ocean dynamic sea level change varies regionally but by definition has a zero global mean." The zero global mean of the dynamic part is the figure's per-slot point in physical clothing: one driver can sum to nothing globally while carrying all the regional structure.

**Refuter:** if the three drivers act on disjoint sets of slots (a genuine partition, empty intersections), the union-compound finding fails and three independent problems replace it.

### F3 : Actor valence is relative to the slot; the same forcing changes sign

Fig 11 :49: **"An actor's valence is relative to the residual, not a property it carries."**
Fig 11 :50: **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."**
Fig 11 :51: **"No standing list of good actors survives a change of residual."**
Fig 12 :89: **"is it about which is larger, rather than both being present? Yes."**

Ice loss is not a "sea-level-raising actor" at every slot. Near a melting sheet it can lower relative sea level; far away it can raise it above the global average. There is no standing list of mechanisms that raise sea level at all coasts; the sign is a relation between a driver and a slot, which is the comparison bond at work.

**World corroboration.** NASA *Local Sea Level Change, Dive Deeper*: "This causes sea levels to lower near the ice sheet and rise in more distant locations." Harvard Gazette (Siliezar, 2022): "Logic might suggest that nearby levels would rise, but instead they fall. Thousands of miles away, however, they do go up in a kind of seesaw effect." IPCC Box 9.1: "Contemporary terrestrial mass loss leads to elastic solid Earth uplift and a nearby RSL fall." and "Farther away (around more than 7000 km for a single source of terrestrial mass loss), RSL rises more than the global average, due to first-order gravitational effects."

**Refuter:** if an ice-loss event raises sea level by the same amount at every coast, with no near-field reversal and no far-field excess, the valence-relative finding fails.

### F4 : Contact cascades: the residual that matters is several steps out

Fig 11 :52: **"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."**
Fig 11 :44: **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."**

The chain here is: ice mass loss (first order) changes gravity, rotation and deformation; that redistributes water into a distinct fingerprint (second order); that shifts regional mean sea level; that shifts extreme still water levels and flood frequency at a coast (third order). Scoping the question to the coastline alone misses the driver; scoping it to the ice sheet alone misses the impact.

**World corroboration.** IPCC AR6 WG1 Ch9: "Regional sea level change has been the main driver of changes in extreme still water levels across the quasi-global tide gauge network over the 20th century". NASA *How Do We Measure*: "Where the land is moving, we can see big differences in the measurements from satellite altimeters and tide gauges."

**Refuter:** if a direct-contact model (coast and local water only) predicts observed changes in extreme still water levels as well as the full cascade, the cascade finding fails.

### F5 : A gradient over space and a gradient over time are different terms

Fig 13 :76: **"A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is."**
Fig 13 :75: **"Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state."**
Fig 13 :74: **"Everything else is a composition across the two kinds, never within one."**

"Regional variation" is a gradient over space; "rise" is a gradient over time. They are different molecules and must not be collapsed into one number or one map. Ocean circulation is a flow: "Energy and a gradient compose a flow." (Fig 13 :75-76, spanning the line break). The time gradient is bonded to a different state than the space gradient, so their rates and patterns need not line up.

**World corroboration.** IPCC AR6 WG1 Ch9: "Temporal variability in ocean dynamics dominates regional patterns on annual to decadal time scales (high confidence)." NASA *Dive Deeper*: "These processes contribute significantly to regional variations in sea level." The assessed science separates a pattern from a rate exactly as the figure does.

**Refuter:** if a single field is sufficient for both the spatial pattern and the temporal rate, with no loss in either, the two-gradient finding fails.

### F6 : Instrument triangulation, not agreement, is the ground in D2

Fig 2 :31: **"Independence, between two frames, is how little they draw on the same evidence."**
Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**
Fig 8 :45: **"Two frames together reach what neither reaches alone."**
Fig 8 :50: **"Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."**
Fig 4 :20: **"Only the actors, the currency and the anchor change."**

Tide gauges measure water relative to land; satellite altimeters measure water relative to a terrestrial reference frame. Their disagreement is informative rather than embarrassing: it locates vertical land motion. That is triangulation with low overlap, not two versions of one measurement.

**World corroboration.** NASA *How Do We Measure*: "Tide gauges measure relative sea level, while satellites provide a measurement of absolute or geocentric sea level. By comparing the two, we can get a better understanding of where coastal subsidence or upflift is playing a big role." NOAA: "Tide stations around the globe tell us what is happening at a local level ... Satellite measurements provide us with the average height of the entire ocean. Taken together, these tools tell us how our ocean sea levels are changing over time."

**Refuter:** if the two instruments are shown to draw on the same evidence pool, so their agreement is the pool talking, the triangulation finding fails (Fig 2 :40).

### F7 : Where the framework stops: shape, not a numerical map

Formula step 7 asks three distinct questions. **SEARCHED** first: is the regional field already in the figure closure and unfound? No. The figures are domain-agnostic and contain no bathymetry, ice geometry or ocean state. **INWARD** second: extend an instrument already returning something. Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something." Altimetry, tide gauges, GNSS and GRACE are already returning resolving signals; the owed instrument is a source discriminator that separates circulation from GRD from land motion at one slot. *The Hard Problem is About Source*: "If several paths create the same behavior, then behavior is a projection with lossy information" and "The answer is unreached until a better instrument exists." **OUTWARD** third: import an assessed projection from the climate-science frame, with a source gate and a shadow test, debited against independence. INWARD and OUTWARD are opposed and are never read against each other (Fig 6 :31).

Fig 9 :32: **"you get a kind of thing, never the answer itself"**
Fig 13 :134: **"Unreachable is a verdict here, not a silence"**
Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**
Fig 12 :127: **"It proposes arrangements it cannot afford to test, and the budget is what decides how much of the space is reached at all."**

**Verdict for F7:** `gap` for the figure closure on the numerical field. This is a verdict, not an omission. The framework supplies the shape any regional answer must have and the measurement plan that would settle it; it does not supply the field.

**Refuter:** if a per-slot numerical field can be derived from the six-term set alone, with no imported Earth state and no instrument, F7 is withdrawn.

### F8 : Agreement does not anchor the shape

Fig 7 :13: **"agreement compounds, evidence does not"**
Fig 7 :35: **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."**
Fig 2 :40: **"agreement about the world is worthless when the agreeing frames share an evidence pool"**
*The Recursive Self-Improvement Trap*: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."

A consensus of sea-level scientists who share the same assessments is one evidence pool. It can fund the work of checking the shape; it cannot settle the shape. The anchor is a measurement that does not update when a frame changes its mind (Fig 2 :29).

**Refuter:** if a consensus were shown to add evidence beyond the sum of its independent instruments, this finding fails.

### F9 : What survives, with mode attached

| claim | mode | source of authority |
|---|---|---|
| The residual is indexed by coastal slot, not aggregated | `general` | Fig 1 :19, :22, :28; triangulated with NASA and IPCC |
| The drivers form a union compound with overlapping intersections | `general` | Fig 9 :54, :57; IPCC mechanism list |
| Actor valence is relative to the slot and can reverse sign | `general` | Fig 11 :49 to :51; NASA, Harvard, IPCC |
| The causal chain cascades at least three steps out | `general` | Fig 11 :52; IPCC extreme-water-level finding |
| Space gradient and time gradient are distinct terms | `general` | Fig 13 :76; IPCC timescale finding |
| Two low-overlap instruments triangulate the slot | `general` | Fig 2 :31, :35; Fig 8 :45, :50; NASA, NOAA |
| The numerical regional field is not in the figure closure | `general`, stated as `gap` | formula step 7; Fig 9 :32; Fig 8 :39 |
| The three named mechanisms are the assessed drivers of regional difference | `specified`, world-sourced | IPCC AR6 WG1 Ch9, not a figure line |

---

## 3. Pre-registered refuter (written before the conclusion)

Required before any outreach: the seat map's failure genera state "And a falsifier written before the run is a design instrument, not only an honesty device." These were written before the world search and before the verdict.

1. **Per-slot refuter.** A global mean plus fixed local offsets predicts observed `R_s` within instrument error at every coastal slot. Breaks F1.
2. **Union refuter.** Circulation, GRD and vertical land motion act on disjoint slot sets with empty intersections, so each is independently soluble. Breaks F2.
3. **Valence refuter.** One ice-loss event raises relative sea level by the same amount at all coasts, with no near-field fall and no far-field excess. Breaks F3.
4. **Independence refuter.** Tide gauges and altimeters are shown to share an evidence pool, so their agreement is one pool talking. Breaks F6.
5. **Reach refuter.** A per-slot numerical field is derived from the six-term set with no imported Earth state and no instrument. Breaks F7.

If any fires, the corresponding finding is withdrawn and the recommendation in §4 is re-run from the census. Until one is run, no claim here is labelled `grounded`.

---

## 4. Recommendation

1. Lead with the per-slot shape and its refuter, never with a global mean (F1).
2. Unbundle the three drivers and handle their intersections as compounds with their own loops (F2).
3. Carry the sign of each driver relative to each slot; never publish a standing list of sea-level-raising mechanisms (F3).
4. Enumerate the habitat outward to the impact, including tides and storms, before choosing a model frame (F4, Fig 11 :43).
5. Keep the space gradient and the time gradient separate in any presentation (F5).
6. Triangulate tide gauges with altimeters, GNSS and GRACE; treat their disagreement as information about land motion (F6).
7. State the `gap` plainly for the numerical field and name the discriminator instrument that would close it (F7). "Unreachable is a verdict, not a silence."
8. Do not ask for agreement, do not pool consensus as corroboration, and use the public venues in `03_public_contact_points.csv` (F8, Fig 10 :52 "Bring a characterised residual, never the source.").

---

## 5. Canonical usage check

Three usage sources were read after the findings and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw." The framework returns "a shape, not a name", then stops at the limit of the instruments and records the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are metalaws, so design questions are answered by derivation rather than by escalation to an anchor. Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."
- `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`: "Correlation has valence. High correlation is disqualifying for a verdict and efficient for a convention." and "an interest in the reading is disqualifying". Where a stake cannot be removed, declare it.

### Retraction and confirmation log

| earlier reading | status after the canonical check |
|---|---|
| "Fig 1 contradicts a rising global mean" | **Retracted by re-census.** Fig 1's global R is the error signal, not physical sea level. Kept visible in F1. |
| "The three IPCC mechanisms are figure-derived" | **Retracted.** They are world-sourced (`specified`). The figures decide only the shape (per slot, union, valence-relative, cascade). Kept separate in F9. |
| "The global mean is wrong" | **Narrowed.** It is a legitimate aggregate indicator and a useful input; it cannot carry the per-slot live signal. |
| "The framework should output a regional map" | **Refused as a category error.** The framework returns a shape and a measurement plan, not a numerical field. F7 records `gap`. |
| Fig 13 versus treating sea level as composed | **Not strained.** Re-census: sea-surface height is a state; the spatial pattern and the temporal rate are two different gradients over two states (Fig 13 :76). |
| "Two instruments agreeing = corroboration" | **Conditional, not automatic.** Maximum independence only if they draw on different evidence (Fig 2 :31, :40). NASA and NOAA describe genuinely different reference frames, so the corroboration stands, weakly, pending the independence check. |
| F8 consensus claim | **Canonically confirmed.** The figures README forbids a terminal frame; Fig 7 forbids a last room; the seat map forbids correlation as a verdict. |

### Round-trip note

The condensation of the figure set into the phrase "per-slot union with valence-relative drivers" is lossy. Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." The dropped constraints are enumerated in `11_audit.md` as a qualitative `R_T`. Treating the phrase as identical to the law set would set `R_T` to zero and would be the dead-reckoning error.

### Status

The shape survives; the numerical field does not. Four of the five refuters are cheap to run against existing observations; the independence refuter needs an overlap audit of the two instrument records. No `grounded` claim is made.
