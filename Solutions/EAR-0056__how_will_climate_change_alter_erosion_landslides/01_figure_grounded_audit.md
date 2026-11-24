# Figure-grounded audit: How will climate change alter erosion, landslides, and sediment flows?

**Mode: `specified` on the shape, `general` on the frame, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* No measurement was taken here, so every substantive claim is a candidate.

**Status: simulated derivation, not a ground reading.** The Recursive Self-Improvement Trap says LLM output is a simulacrum and that *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Sources.** Figure text read from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; `THE_FORMULA.md`; the canonical figures README local copy; the eight essays and the public earth-science pages listed in `10_source_ledger.csv`.

---

## 0. The claim under audit, stated in effect terms

The residual `R` is the gap between what a frame predicts for erosion, landslide occurrence and sediment flux, and what the ground (river gauges, repeat topography, landslide inventories, sediment budgets, cosmogenic erosion rates) returns under a changed climate.

- **Option A (global trend).** Answer with one number per process: mean erosion rate changes by X percent, landslide frequency by Y, sediment flux by Z. This binds the sought-for shape as a single scalar.
- **Option B (slot-indexed compound).** Answer with a distribution of per-slot residuals in a union of overlapping conditions, with directed flows, threshold crossings and feedback loops. This binds the shape as a structured object.

What each leads to: A makes the answer easy to report and vulnerable to the exact failure Fig 1 names, that a live local signal disappears into an average. B is harder to state but survives contact with the ground, because each slot can be checked separately and each threshold can be located.

### Residual by arity, symmetry and scale

- **Arity:** at least three coupled conditions (erosion, landslides, sediment flows) plus the climate drivers that act on them. More than one condition, so a union candidate before any figure line is chosen.
- **Symmetry:** not symmetric. Sediment transport is a directed flow; landslide failure is a threshold comparison; a sequence of storm, failure, delivery and storage is ordered. The comparison bond is *"a threshold relation between two quantities"* (Operators table :49).
- **Scale:** first order at the event and hillslope (rainfall, pore pressure, failure, transport); second order at the catchment and decadal scale (storage, channel adjustment, vegetation response, legacy of earlier events). Not one scale, so an answer at one scale cannot be read at the other.

### Domain census (before choosing any figure line)

| domain | actors | currency | anchor | nameable anchor? |
|---|---|---|---|---|
| 1. Climate forcing | precipitation intensity and frequency, temperature, freeze-thaw, drought, snowmelt, vegetation and land use, aerosols | water and energy flux | instrumental record, reanalyses, paleo proxies, gauges | yes |
| 2. Earth-surface response | water, sediment, rock strength, roots, terrain, channel conditions | sediment flux, pore pressure, shear stress | field measurement, repeat topography, inventories, sediment budgets | yes |
| 3. Verification and contact | monitoring networks, models, expert readers | residuals and agreement | the ground; agreement explicitly disqualified | yes |

**Partition or union?** Union. Erosion, landslides and sediment flows overlap: a landslide delivers sediment to a channel; sediment cover modulates bedrock erosion; channel storage decouples flux from forcing. The overlap is a compound with its own loop, so it needs its own census rather than three separate answers added together.

**Dependency order (Fig 3 :20):** *"The chain is ordered by dependency, not by importance."* Perception (can we measure the slot?) comes before vocabulary (what does this slope or channel afford: what can be moved, blocked, stored?), which comes before objective (what counts as a change here?), which comes before planning. The middle link is the one that usually breaks, because it has neither obvious failure nor obvious test: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* (Fig 3 :27). A regional climate projection that has no vocabulary for what a specific hillslope affords is effort spent above the break.

---

## 1. Figure census

| figure | bearing on this residual | verdict from this line |
|---|---|---|
| 1 The Agent | residual per slot; global average destroys the signal | no global trend can settle the slot residuals |
| 2 The Ground | anchor settles; independence between frames; correlation disqualifies | model agreement is not the ground; selecting for agreement is fatal |
| 3 Dependency Chain | ordered by dependency; middle link is the break | measure the slot and name its affordances before choosing a response metric |
| 4 The Membrane | methods cross up, recordings do not; round-trip gap | a single global number is a recording, not a method |
| 5 Mint Pipeline | three guards as a product; MDL bargain | no new primitive is licensed by a warming trend alone |
| 6 Closure / Reachability | import moves the wall; instruments improved from worse ones | climate conditions are already in the habitat, so no import is owed |
| 7 Room Chain | agreement is variation, not a verdict | more models agreeing does not move the ground |
| 8 Union Surplus | residual first, frame second; convergence vs import | describe the union before picking a process model |
| 9 Leave / Arrive | union unbundling; describe before looking; shape not name | the three processes are a compound, not a list; sign and magnitude are a gap |
| 10 Ground Maintainer | the ground does not decay, the channel does | monitoring network degradation can manufacture a trend |
| 11 The Habitat | conditions, contact cascade, valence relative to residual | climate acts through conditions and second-order contact |
| 12 The Bond | cycle, functional group, threshold, two currencies | feedback and threshold are structure, not extra drivers |
| 13 Minimum Viable Set | energy and gradient compose a flow; chaos from remainder | flows are directed and nonlinear; magnitude is not given |
| Operators table | comparison is a threshold relation | landslide failure is a comparison, not a conjunction |
| Symbols table | ground is the anchor; habitat enumerated never composed | restates the two rules above |

Strained readings are named in section 6, not smoothed over.

---

## 2. Findings

### F1 - This is a union compound; unbundle before searching (framework-internal, triangulated)

Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*
Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*
Fig 9 :57: *"a case in two conditions is not a harder case of either"*

Erosion, landslides and sediment flows are overlapping conditions. A single lever that clears the "more intense rain" region leaves the intersections standing, because sediment availability and antecedent channel conditions still bind. The Library of Babel essay gives the same instruction from a different field: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually"* (Isaiah N, 2026-10-02, high overlap with the framework author).

**Mode:** `general` (structural). **Refuter:** show that the three processes form a partition, that is, each can be expressed without the others' actors and the whole response is their arithmetic sum. Then a single lever per process recombines cleanly and the union loop is unnecessary.

### F2 - The residual is indexed by slot, not aggregated (framework-internal, triangulated across Fig 1 and Fig 11)

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*
Fig 1 :28: *"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."*

A slope that crosses a failure threshold while the regional mean barely moves is the live slot. The question as normally posed (one global erosion number) is the averaging failure this line names. The IPCC water-cycle assessment independently reports *"widespread, non-uniform human-caused alterations of the water cycle"* and *"low confidence in the sign and magnitude of projected changes in global land runoff"* (Douville et al., 2021), which is what a hidden heterogeneity looks like from the climate side.

**Mode:** `specified` (falsifiable). **Refuter:** demonstrate, on paired monitored slopes and channels, that every live slot residual trends the same way and no threshold crossing is masked, so that a global mean preserves all the information. That would collapse the slot census into one.

### F3 - Climate acts through conditions and a contact cascade (framework-internal + ground frame, triangulated across Fig 11 and Fig 13)

Fig 11 :43: *"The habitat is enumerated, never composed."*
Fig 11 :44: *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."*
Fig 11 :46: *"conditions: light, water, temperature, season, terrain"*
Fig 11 :52: *"Scoping the habitat to direct contact is how DDT reached the eagles"*

Climate is not a new primitive to add to the frame. Water, temperature, season and terrain are already on the habitat list. The figure requires enumeration outward: a change in rainfall intensity reaches soil pore pressure (first order), then slope failure, then sediment delivery, then channel aggradation and changed flood response (second and third order), exactly the DDT-to-eagles shape. Fig 11 :49 adds *"An actor's valence is relative to the residual, not a property it carries"*: fire, drought or vegetation are not uniformly good or bad for a given residual.

Ground corroboration: USGS reports *"An increase in soil pore water pressure is the typical trigger for the majority of landslides caused by rainfall"* and models *"quantitative rainfall thresholds for debris flows after wildfire"* (USGS Landslide Hazards Program, 2026). Sheikh et al. (2026) find that *"geomorphic effectiveness emerges from the interaction between hydraulic forcing, sediment availability and evolving channel conditions, and depends on the temporal scale of assessment."*

**Mode:** `specified` on the cascade structure, `general` on valence being relative. **Refuter:** a reliably measured case in which the response is demonstrably first-order only, with no cascade through vegetation, land use, sediment storage or antecedent conditions, at the scale in question.

### F4 - Flows are directed energy-and-gradient compositions with thresholds and chaos (framework-internal, triangulated across Fig 13 and the Operators table)

Fig 13 :76: *"Energy and a gradient compose a flow."*
Fig 13 :46: *"What makes a gradient a gradient is that it can be spent, and neither an ordering nor a span of space has directedness."*
Fig 13 :31-32: *"a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise"*
Operators table :49: *"a threshold relation between two quantities"*

Sediment flow is a spent gradient over a state, not a symmetric mixture. Failure is a threshold comparison (driving stress against resisting strength), not a conjunction of conditions. The remainder left at each turn compounds, so a small forcing change can produce a large or a delayed response; nonlinearity is structural here, not an empirical surprise. Ground corroboration: IPCC *"Non-linear water cycle responses are explained by the interaction of multiple drivers, feedbacks and time scales"* (Douville et al., 2021); USGS post-fire debris-flow rainfall thresholds.

**Mode:** `general` on the directed/nonlinear shape, `specified` on the threshold identification. **Refuter:** show that sediment transport and slope failure at the relevant scale are linear, reversible and threshold-free, with no hysteresis and no amplification of the remainder. That would break the flow/threshold reading against the ground.

### F5 - Feedback cycles are licensed and load-bearing (framework-internal, single-source for the figure definition)

Fig 12 :121: *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."*
Fig 12 :126: *"Bits price the description. Actions price finding out whether it holds."*

Erosion changes vegetation and channel conditions, which change the next erosion event. The sign decides whether the loop amplifies or damps; a chain of forcing-to-response with no re-entry cannot close at all. The second line warns that a cheap narrative (bits) and a costly field campaign (actions) are different currencies: a model can state an arrangement it cannot afford to test.

**Mode:** `general`. **Refuter:** demonstrate an open-loop response in which the output never re-enters as input and no state carries a legacy of earlier events. Sheikh et al. (2026) report the opposite (*"the legacy of earlier events"*), so this refuter is live and checkable.

### F6 - The ground settles it; agreement is not an anchor (framework-internal, triangulated across Fig 2 and Fig 7)

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*
Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*
Fig 7 :35: *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*

An ensemble of models sharing the same rainfall product and the same calibration data is one evidence pool, not independent witnesses. The anchor is the gauge, the inventory, the repeat survey. Where the cost of being wrong is high (a failed early warning, a mis-sized culvert), independence should be bought deliberately by using different instruments and different closures.

**Mode:** `general`. **Refuter:** produce an "anchor" whose answer changes when the frames are changed, for example a trend that disappears when the monitoring network is replaced. That is the coherent-drift collapse, not an anchor.

### F7 - The channel decays, not the ground (framework-internal, single-source)

Fig 10 :24: *"the ground does not decay, the channel does"*
Fig 10 :25-26: *"stale percepts, dropped transients, saturated metrics, pooled readings"*

A reported change in landslide frequency can be a change in the reporting network: station outages, satellite revisit changes, inventory completeness, pooled categories. Fig 10 :28 names the output of that state: *"you have lost touch."* This is a standing check on every erosion or landslide time series, and it is independent of whether the climate signal is real.

**Mode:** `general`. **Refuter:** a monitoring record for which degradation of the instrument, category or network cannot in principle change the reading. No such record was found in the sources read.

### F8 - The figures give the shape, not the sign or magnitude: honest `gap` for the quantitative question (framework-internal, triangulated across Fig 9 and Fig 13)

Fig 9 :32: *"you get a kind of thing, never the answer itself"*
Fig 13 :134: *"Unreachable is a verdict here, not a silence"*
Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

After a genuine census, no figure line predicts whether a particular slope's erosion rate will rise or fall, by how much, or by when. The figures constrain the kind of answer (union, per-slot, conditions, directed flows, thresholds, cycles, ground-anchored) and refuse the number. This is a `gap` verdict for the quantitative, slope-specific question, not silence and not a failed search. The honest report is a shape plus the instruments that would close it. The figures README phrasing, *"a shape, not a name"*, governs here: the missing quantity is not held in the library, so naming it would mean already having it.

**Mode:** `general` on the limit. **Refuter:** produce a figure line that directly yields the sign and magnitude of climate-driven change for a named erosion process without an instrument or an import. If one is found, this `gap` closes.

### F9 - What survives, with mode attached

| claim | mode | figure / source |
|---|---|---|
| Erosion, landslides and sediment flows form a union compound; unbundle before searching | `general` | Fig 9 :54-57 |
| Residuals are per slot; a global mean can hide the live one | `specified` | Fig 1 :19, :22, :28 |
| Climate acts as conditions in a contact cascade; valence is relative | `specified` | Fig 11 :43-46, :49, :52 |
| Flows are directed energy-and-gradient compositions with thresholds and chaos | `specified` | Fig 13 :76, :46, :31-32; Operators :49 |
| Feedback cycles are licensed; sign decides amplification | `general` | Fig 12 :121 |
| The ground settles each slot; agreement is not an anchor | `general` | Fig 2 :29, :35, :42; Fig 7 :35 |
| Monitoring channel decay can manufacture a trend | `general` | Fig 10 :24-28 |
| Sign and magnitude for a given slope | `gap` | Fig 9 :32; Fig 13 :134 |

---

## 3. Pre-registered refuter

Written before the conclusion, per the seat rule that *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following holds:

1. The three processes form a partition and the whole response is the arithmetic sum of three independent levers (breaks F1).
2. A monitored set shows homogeneous, threshold-free, linear response across all slots, so a global mean preserves every live residual (breaks F2 and F4).
3. A response is measured that is demonstrably first-order only, with no cascade through vegetation, land use, sediment storage or antecedent conditions (breaks F3).
4. A monitoring record is shown whose degradation cannot alter the reading (breaks F7).
5. A figure line is produced that yields the sign and magnitude for a named process without instrument or import (closes F8 in favour of a name).

If any fires, withdraw the corresponding finding. Until one is run, no part of this may be labelled `grounded`.

---

## 4. Recommendation

1. Do not answer with a single global number. Enumerate the habitat per slot: conditions, actors, relations, and the cascade outward (Fig 11 :43-44).
2. Keep the three processes as a union compound with its own loop, not a list (Fig 9 :55-57).
3. State mode on every claim. The structural claims are `general` or `specified`; the quantitative claim is a declared `gap`.
4. Buy independence where the cost of being wrong is high: different instruments, different inventories, different closures, not a larger agreement pool (Fig 2 :42).
5. Check the monitoring channel before interpreting the trend (Fig 10 :24-26).
6. Send the generator (the shape, the slot census and the refuters), not a recording of a model result (Fig 4 :22: *"Only methods cross up. Only head starts come down."*).

---

## 5. Canonical usage check

Two local canonical sources were read after the first four sections and govern how the figures may be used. The figures README says *"They outrank everything else in the repo"* and *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; it also states the limit *"a shape, not a name"* and *"Indiscernibility is not identity."* `THE_FORMULA.md` step 7 separates SEARCHED, INWARD and OUTWARD and says underivable-in-principle and unreachable-at-this-budget are different facts with different instructions. `THE_FORMULA.md` step 4 says *"SETTLE the ground settles it. Verified only by what pays. A gate is not the ground."*

Applying that check here: the world sources are corroboration only. They are largely independent of the framework author (IPCC, USGS, EGU/Copernicus), which makes them useful witnesses, but they are not the authority. The three essays by the framework author share its evidence pool and carry little independent weight. No world source was allowed to flip a verdict; the conflict rule was not triggered.

### Strains and re-census

- **Climate as a driver versus climate as a condition.** First reading: climate change is an external import that moves the wall. Re-census: Fig 11 :46 already lists water, temperature, season and terrain as conditions in the habitat. No new atom is owed, so this is not an import (Fig 6 :21: *"MINT composes inside the closure and can never add an atom."*). Strain dissolved.
- **"Nonlinear" as an empirical add-on versus as structure.** First reading: nonlinearity is a finding from climate science. Re-census: Fig 13 :31-32 makes the compounding remainder structural, so the IPCC statement corroborates rather than supplies the claim. Strain dissolved.
- **Threshold as a comparison of two quantities.** Operators table :49 restricts ⋛ to two quantities; slope failure compares driving stress with resisting strength, which are two quantities at the same level. No strain here. A strain would arise only if one tried to compare two settled catchment-scale molecules as quantities; that move is not made in this solution.

### Retractions and confirmations

| earlier reading | status after canonical check |
|---|---|
| "Climate change is an import that adds an atom" | **Retracted.** Fig 11 :46 lists the conditions already; no new primitive is owed (Fig 6 :21). |
| "The figures predict more erosion under warming" | **Retracted.** Fig 11 :49 makes valence relative to the residual; the figures list conditions and do not sign them. |
| "Nonlinearity is imported from IPCC" | **Retracted as an import.** Fig 13 :31-32 makes it structural; IPCC corroborates. |
| "A global erosion trend answers the question" | **Refused.** Fig 1 :22 names the averaging failure explicitly. |
| "F2/F3 per-slot and cascade reading" | **Confirmed** by re-census through Fig 1 and Fig 11 (two figures, low overlap). |
| "F8 gap" | **Confirmed.** Fig 9 :32 and Fig 13 :134 license a declared gap; the README's *"shape, not a name"* governs it. |
| "F7 channel decay" | **Confirmed and kept visible** even though no ground measurement was taken; it is a standing check, not a result. |

### Which SEARCHED / INWARD / OUTWARD applies

`THE_FORMULA.md` step 7 asks three distinct questions when no term closes `R`. Here: SEARCHED is answered first and negatively for a sign/magnitude term (a census of Figures 1 to 13, the Operators and Symbols tables found no line that names a magnitude). INWARD is the live track: sharpen the instruments already returning something (gauges, repeat topography, inventories, sediment budgets, pore-pressure loggers); Fig 6 :32 says *"An instrument is not built from a description. It is improved from a worse instrument already returning something."* OUTWARD is conditional: only if a slot remains unreachable after INWARD, describe the residual in effect terms and find a frame whose closure predicts its shape; Fig 6 :30 says *"Cast it in effect terms."* INWARD and OUTWARD are not read against each other. Importing a magnitude against a budget limit would add an unneeded atom, which Fig 8 warns is priced above starting from primitives.

---

## 6. Updated verdict

The shape survives after re-census: a union compound of overlapping conditions; per-slot residuals; climate acting through conditions and a contact cascade; directed flows with thresholds and a compounding remainder; feedback cycles whose sign decides amplification; a ground that must settle each slot; and a monitoring channel that can itself fail. What does not survive is any single global trend presented as the answer, any claim that the figures sign the response, and any quantitative magnitude asserted without an instrument. Strains after re-census: none live; three were dissolved and are recorded above. The quantitative slope-specific question remains an honest `gap`, reachable only through INWARD instrument work, and this document cannot settle it.
