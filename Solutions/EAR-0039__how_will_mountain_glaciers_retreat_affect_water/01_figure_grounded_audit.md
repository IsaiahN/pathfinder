# Figure-grounded audit: EAR-0039, glacier retreat and water supply

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every finding below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, read 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the earth-systems question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the belief of water managers, irrigators and downstream communities about what a basin will deliver, formed from a historical gauging record and the implicit assumption of stationarity.
- **a** is what they do: reservoir rule curves, diversion and irrigation scheduling, crop choice, infrastructure investment, land-use and settlement planning.
- **Γ(b,a)** is what the planning model predicts: a dependable yield, a design flood, a seasonal hydrograph.
- **o′** is what the glacier-fed basin actually returns after mass loss: a different magnitude, a different seasonal distribution, a different interannual variance.
- **s** is the basin or agricultural district. R is indexed per basin and per season, never averaged into a global "water supply" (Fig 1 :19, Fig 1 :22).

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)

The phenomenon to explain is the **growth of R in glacier-dependent slots** while many other slots keep R near zero. Observed in the world: roughly half of 56 large glacierized basins have not yet reached peak water, the rest have passed it; typical response is more runoff in early summer and less in late summer; magnitudes vary greatly among basins (Huss and Hock 2018, abstract, opened 2026-11-22). A frame that predicts uniform decline, or uniform increase, has a residual here.

State the residual as: *why does the gap between what a water system expects from a glacier-fed basin and what that basin actually delivers change sign and season in different places at different times?* This is an effect description. It names no theory, no "water tower", no "peak water", no "buffer". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be (i) a decomposition of R into conditions that dominate in different basins at different times, and (ii) an instrument that discriminates which condition governs a given basin. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* The anchor for this question is measured glacier mass balance (stake measurements, satellite altimetry, gravimetry) and measured basin streamflow, reviewed and archived by a public service such as the World Glacier Monitoring Service. These do not move when a planner changes a model. A model projection, an expert consensus, or a media claim about "water towers" is an instrument or an opinion, not an anchor (Fig 2 :30: *"you push on it, it is not an anchor."*).

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a relation among glacier state (mass, extent, geometry), climatic forcing (temperature, precipitation phase), hydrological routing (snow, ice, groundwater, reservoirs) and human water use (demand, allocation, crop), indexed by basin and ordered by time. It carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) because accumulation precedes peak water and peak water precedes decline. It carries a **comparison** bond (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87) because the comparison of supply against demand is a threshold, not an absolute quantity. It is not symmetric: glacier and community are not interchangeable.
- **Symmetry.** The response is asymmetric in time. A basin does not return to its pre-retreat hydrograph by reversing the forcing on human timescales; committed mass loss continues for decades even if temperature stabilises (Huss and Hock 2018; IPCC SROCC 2019, opened 2026-11-22). "Adequate supply" is a threshold relative to demand, not a fixed number.
- **Scale.** Four scales are in view: (i) the individual glacier's mass balance, (ii) the glacierized basin and its streamflow, (iii) the managed water system of reservoirs, canals and farms, (iv) the time channel across decades and the downstream cascade to food prices and migration. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21) and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 Glacier mass-balance loop** | accumulation, ablation, ice, snow, firn, geothermal and frontal ablation | mass balance, energy imbalance | yes: measured mass balance (WGMS, altimetry, gravimetry) | admitted |
| **D2 Basin hydrological system** | glaciers, snowpack, rain, groundwater, rivers, reservoirs | discharge, seasonal timing, variance | yes: gauged streamflow per basin | admitted |
| **D3 Water-management and agricultural frame** | managers, irrigators, reservoirs, allocation rules, crop choice, communities | reliability, delivered water, yield, cost | yes: delivered water and harvested crop, the outcome the system pays for | admitted |
| **D4 The temporal and monitoring channel** | gauges, remote sensing, records, models, percepts | contact with the ground | yes: the ground, *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **X1 "Global water supply" as one number** | the planet | total volume | **no** anchor independent of per-basin sums; aggregating across slots is Fig 1 :22 disqualified | not a domain / excluded |
| **X2 "Climate change is the sole cause"** | temperature forcing | energy | already the gradient inside D1; absorbed, not a separate domain | absorbed into D1 |
| **X3 "Water wars are inevitable" as a standing property** | states, communities | conflict | no anchor independent of the basin outcomes in D2 and D3; a cascade to be enumerated (Fig 11 :52), not a domain on its own | absorbed into the cascade |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that total water is unimportant. X2 and X3 are absorbed for the same reason the BUS pilot absorbed "industry attractiveness": their measurable content lives inside an admitted domain.

### 1.3 Partition or union

D1 and D2 overlap: the glacier is part of the basin's water source, so their overlap is a compound with its own loop (the glacier-to-streamflow transform). D2 and D3 overlap: water is delivered through managed infrastructure, so that overlap is a second compound (the reservoir-to-field transform). D4 cuts across all three: the monitoring channel is how every domain keeps contact. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are:

- **C1 magnitude and phase.** Where is the basin relative to peak water? Before it, more meltwater; after it, less. This is a sequence, not a trend.
- **C2 seasonal timing.** Earlier snowmelt and a shift of glacier melt toward early summer, with reduced late-season baseflow in many basins. The same annual total can produce opposite agricultural outcomes depending on when it arrives.
- **C3 variability and extremes.** Drought buffering can be lost; GLOF and flood hazards can rise. The same glacier is a buffer in one frame and a hazard in another.

A basin failing only C1 and a basin failing only C2 are not different degrees of one failure; they need different instruments. The essay *The Library of Babel* states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the basin read mass balance and streamflow?) → 2 vocabulary (does the planning model have terms for non-stationarity, peak water and timing shift?) → 3 objective (can it say what would count as a dependable supply under change?) → 4 planning (rule curves, crop choice, storage, allocation) → 5 learn and carry. The middle link is where it breaks: traditional water-resource engineering was built on stationarity, and *"stationarity is dead and should no longer serve as a central, default assumption in water-resource risk assessment and planning"* (Milly et al. 2008, Science, opened 2026-11-22). Most adaptation money lands above the break, on infrastructure whose design still assumes the old hydrograph (Fig 3 :29-30).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not the physical mechanism |
| 2 The Ground | measured mass balance and streamflow as anchor; independence vs common pool | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs glacier-to-basin-to-community transfer |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs whether a non-stationary planning term can be admitted at all |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs why a stationarity-based model cannot derive glacier change from inside |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs persistence of a failing planning frame |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and source rules |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; keep anchor reachable | governs monitoring failure and stale records |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual; cascade | decisive for D2 and D3 and for the downstream cascade |
| 12 The Bond | sequence, comparison, catalyst, cycle; arrangement is the substance | governs peak-water order and the buffer/hazard duality |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop |
| Operators table | → sequence and ⋛ comparison | types the peak-water claim |
| Symbols table | `R` is the aim; the ground is the anchor; `R_T` is the round-trip gap | governs method |

**Strain test applied during this census.** An early attempt to apply Fig 13's six-term physical substrate directly to "glacier water supply" only fit by calling glacier ice a kind of energy and meltwater a kind of gradient. That is a strain: the six terms govern the physical substrate level, whereas this question's operative objects are basins, seasons and planning frames. Fig 13 is therefore sent to the honest-stop role only (section 7, strain S1), in the same way the BUS pilot sent it to the honest stop for firm capabilities. The ordered and comparison bonds of Fig 12 are used at the structural level, where they fit without strain. No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about glacier-fed water systems, `grounded` only if settled by a measurement. None is `grounded`.

### F1: The residual is per basin, never a global average

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 1 and Fig 9, low overlap: per-slot indexing vs union split).**

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"The ground enters as the only metric."** (Fig 1 :23)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

Huss and Hock report that the magnitudes *"vary greatly among basins and throughout the melt season"* and that the largest reductions are in central Asia and the Andes. A single "global glacier water supply" number is a frame-internal aggregate that has thrown away the only signal that says where to look. The IPCC AR6 Mountains paper corroborates at the assessment level: *"about 2 billion people"* depend on mountain water and *"globally two-thirds of irrigated agriculture depends on essential runoff contributions from mountains"* (Adler et al. 2022). Those are scope numbers, a **filter for the budget**, not a witness for which basin fails.

**Refuter:** an averaged global or continental statistic that predicts, prospectively and per named basin, which basin crosses peak water first and by how much, with no basin-level inputs. If one exists, F1's methodological consequence is false.

### F2: The anchor is measured mass balance and streamflow, not model agreement

**Mode: `general`. Domains D1, D2, D4. Status: triangulated (Fig 2 and Fig 10, low overlap: anchor rule vs ground maintainer).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."** (Fig 2 :29)
> **"you push on it, it is not an anchor."** (Fig 2 :30)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)

The public anchor is the standardized measured record. The World Glacier Monitoring Service describes itself as collecting *"standardized observations on changes in mass, volume, area and length of glaciers with time"* which *"form a basis for hydrological modelling"* (WGMS about page, opened 2026-11-22). Huss and Hock's projections are instruments, not anchors: they are model outputs and depend on the glacier model and the climate scenario. Agreement among three reviews that quote the same study is one witness wearing three names (Fig 2 :40).

**Refuter:** a result that changes the physical mass balance when a planner changes its model, or a "measurement" that cannot be re-read by an independent service. Either breaks the anchor rule.

### F3: The question is a union of three conditions, not one trend

**Mode: `specified`. Domains all. Status: triangulated (Fig 9 and the Library of Babel essay; the essay is framework-internal so the external witness count is one).**

Fig 9 :54, :55 and :57 (quoted in section 1.3) are the governing lines. The three conditions C1 magnitude/phase, C2 timing and C3 variability/hazard have different instruments:

- C1 is read from measured mass balance and cumulative runoff, and from whether a basin is before or after peak water. Huss and Hock: *"In roughly half of the investigated basins, the modelled annual glacier runoff continues to rise until a maximum ('peak water') is reached, beyond which runoff steadily declines. In the remaining basins, this tipping point has already been passed."*
- C2 is read from the seasonal hydrograph. The same study: *"Typically, future glacier runoff increases in early summer but decreases in late summer."* UNESCO WWDR 2025 adds: *"a shift in timing towards an earlier spring snow-melt peak has been observed. This poses challenges to farmers to accurately predict the timing of water intake for irrigation systems and to manage spring crop planting schedules."*
- C3 is read from drought-buffering records and hazard inventories. UNESCO: *"In regions where the dry season coincides with the growing season, glacier melt drought buffering can be crucial for sustaining agricultural production"*, while the IPCC notes glacier lakes are increasing and GLOF risk is a concern.

A single lever, for example "build more storage", clears the region where only C1 holds and leaves the intersections standing (Fig 9 :55). F3 is the reason the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

**Refuter:** a single intervention that restores all three conditions in all failure types with no categorically different residue left over. That would collapse the union into a partition.

### F4: A stationarity-based planning frame cannot derive glacier change from inside its own closure

**Mode: `specified`. Domain D3. Status: triangulated (Fig 6, Fig 8 and Fig 13, three figures with distinct roles).**

> **"the only operator that moves the wall"** (Fig 6 :14)
> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** (Fig 8 :32)
> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)
> **"Two frames together reach what neither reaches alone."** (Fig 8 :45)

A water utility can refine its historical hydrograph for ever and never derive the timing of peak water from it. The needed atom, glacier mass-balance physics and its coupling to runoff, comes from a frame whose closure differs. Milly et al. 2008 state the water-engineering version directly: *"we assert that stationarity is dead and should no longer serve as a central, default assumption in water-resource risk assessment and planning. Finding a suitable successor is crucial for human adaptation to changing climate."* That is Fig 6 :23 in the language of the field, and it is a corroboration from a low-overlap discipline (water-resource policy rather than glaciology).

**Refuter:** a planning model that predicts the timing and magnitude of peak water for a named basin using only its own historical streamflow record, with no glacier mass-balance or climate-physics atom imported, and that passes the ground test prospectively. That breaks idempotence and F4 with it.

### F5: The channel degrades, and the ground does not

**Mode: `specified`. Domain D4. Status: triangulated (Fig 10 and Fig 7, low overlap: ground maintainer vs room chain).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"stale percepts, dropped transients, saturated metrics, pooled readings"** (Fig 10 :26)
> **"you have lost touch"** (Fig 10 :28)
> **"→ keep the anchor reachable"** (Fig 10 :29)
> **"same closure, handed along;"** (Fig 7 :12) **"agreement compounds, evidence does not"** (Fig 7 :13)

A water system loses contact when its planning record becomes stale, its gauges are dropped, its design metrics saturate, or its basin signal is pooled into a regional average. The glacier keeps losing mass regardless of whether anyone measures it. The IPCC SROCC notes that *"mountain observation networks do not always follow standard measurement procedures and are often insufficiently dense to capture fine-scale changes"* and that *"Long-term in situ records are scarce in some regions of the world, particularly in High Mountain Asia, Northern Asia and South America."* That is the channel failure named in Fig 10 :26.

Fig 7 adds the two-factor test: *"Progress per handoff has two factors. Zero either and the chain runs in place:"* (Fig 7 :37), *"the bracket's fidelity across the handoff"* (Fig 7 :38), *"the ground's pressure on the room"* (Fig 7 :39). A decade of successful allocation is a chain of handoffs. If the rule curve no longer matches the residual, or the ground stops paying for what the infrastructure was built to do, the system runs in place.

**Refuter:** a documented basin where the planning model still tracks measured mass balance and streamflow with no degradation of the channel, yet delivered supply fails for reasons internal to the model's own terms. If both factors measure high and non-declining, F5's mechanism is not the cause.

### F6: The response has an order: accumulation, peak, decline

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 12 ordered bond and the Operators table, with Huss and Hock 2018 as a low-overlap world witness).**

> **"A then B; B needs A to have happened"** (Fig 12 :72, the sequence bond)
> **"is it about which is larger, rather than both being present? Yes."** (Fig 12 :89, the comparison bond)

Peak water is a sequence, not a monotone trend. The operative chain is: glacier stores water as ice; warming releases it; annual runoff rises to a maximum; the shrinking mass can no longer sustain the release; runoff declines. UNESCO WWDR 2025: *"Over time as glacier mass reduces, annual runoff initially increases within glacier-fed basins and rivers. After some years or decades, a certain point is reached – referred to as peak water – after which runoff from glacial meltwater declines as glacial mass decreases, which can lead to decreased water availability for irrigation and agriculture."* The IPCC SROCC FAQ is blunter: *"Peak water runoff from glaciers can exceed the amount of initial yearly runoff by 50% or more."*

The comparison bond ⋛ governs the comparison of supply against demand as a threshold (Fig 12 :87, Operators table :48-51). A basin is not water secure in the abstract; it meets or fails a threshold against a demand that itself changes. **Strain noted, not smoothed:** the bond types fit the *order* and the *threshold*, but they do not predict the numeric timing of peak water for any basin. That remains a measurement question.

**Refuter:** a documented glacier-fed basin whose annual runoff declines monotonically from the onset of warming with no intervening increase, or one whose increase never peaks before the glacier disappears. Either would break the sequence reading as a general shape. (Individual basins may deviate; the claim is about the general shape across basins.)

### F7: The same glacier changes valence when the residual changes

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 11 and Fig 12, low overlap: habitat relations vs composition structures).**

> **"An actor's valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)

Glacier melt is a benefactor to the residual "dry-season water availability" in the Tropical Andes, where UNESCO reports that *"the monthly maximum area of irrigated land sourcing at least 25% of water from glacier melt doubled during drought years"* (Buytaert et al. 2017 as quoted in WWDR 2025). The same glacier is a malfactor to the residual "flood and GLOF risk": UNESCO records that a 1941 GLOF from Lake Palcacocha *"killed an estimated 1,600 people"*, and that the IPCC finds *"resulting landslides and floods, and cascading events, will also emerge where there is no record of previous events"*. Nothing about the glacier changed to flip its valence; the residual did.

**Refuter:** a glacier whose measured effect on water supply and on hazard risk keeps the same sign across a documented change of the governing residual. If no such case can be found anywhere, F7 weakens to `general`.

### F8: The habitat must be enumerated outward, because the residual that matters is three steps out

**Mode: `general` with a `specified` consequence for assessment. Domains D2, D3, D4. Status: triangulated (Fig 11 and Fig 4, low overlap: contact cascade vs scale membrane).**

> **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."** (Fig 11 :44)
> **"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three"** (Fig 11 :52)
> **"it or a thousand. Only the actors, the currency and the anchor change."** (Fig 4 :20)

The cascade for this question: glacier mass loss → streamflow timing and magnitude → reservoir rule curves and irrigation scheduling → crop choice and planted area → household income, food price and migration → tension or conflict over water. The IPCC AR6 Mountains paper supports the chain at the assessment level: *"These changes have variable impacts on water availability for people and economies, contributing to increasing tensions or conflicts over water resources, especially in seasonally dry regions"*, and it reports that the number of people dependent on mountain water rose from about 0.6 billion in the 1960s to about 2 billion in the past decade. Scoping to first-order contact (glacier to river) is how the agricultural and community consequence is missed.

**Refuter:** a documented basin where the cascade demonstrably stops at first order, with no measurable second- or third-order effect on allocation, crop or livelihood despite a large change in glacier-driven streamflow. That would falsify the "cascade matters" consequence, though not the enumeration rule itself.

### F9: A strength becomes a rigidity when the residual changes

**Mode: `specified`. Domain D3. Status: single-source for the figure mechanism (Fig 12 and Fig 7 are one framework), corroborated by a low-overlap water-policy source for the general shape.**

> **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** (Fig 12 :121)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)
> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)

A reservoir system tuned to a stable glacial hydrograph is a catalyst while the hydrograph is stable and a spent part once it is not. Milly et al. put the institutional version: *"The world spends over a half trillion $US per year on water infrastructure, but the reigning paradigm for planning these multi-decade investments, the assumption of climatic and hydrologic stationarity, is out of sync with scientific knowledge about climate change."* The figure reading is that continuing to optimise inside the old closure is motion, not progress (Fig 7 :32).

**Refuter:** a water system whose rule curves, unchanged across a documented regime shift, keep producing ground-verified reliable supply with no new atom imported. Under Fig 7 :36 that should be impossible; if observed, F9 is wrong.

### F10: Conflict between a world source and the figures, and how it was resolved

**Mode: `general`. Status: figure-governed.**

The UNESCO WWDR 2025 Box 2.2 is titled *"Caution against applying the 'peak water' concept in water resources policy"* and warns that *"the idealized peak water trend weakens as the size of the basin increases where the basin outflow is further downstream from the glaciers"* and that *"reliance of downstream communities on glaciers for their water resources is often mischaracterized."* This **conflicts** with the naive reading of the Huss and Hock abstract as "glacier retreat means less water for everyone." A conflict between world and figures sends the derivation back to the census; it never flips the verdict.

Re-census R2 (section 6) resolves it: the naive reading aggregates across slots (banned by Fig 1 :22) and ignores the distance-from-glacier condition that the IPCC SROCC FAQ states explicitly: *"Close to the glaciers ... initial increases in yearly glacier runoff until peak water followed by decreases can affect water supply considerably ... Further away from the glaciers the impact of glacier shrinkage on total river runoff tends to become small or negligible."* After re-census the UNESCO caution corroborates F1 and F3 rather than conflicting: it refuses a single aggregate and demands basin- and distance-specified verdicts. The verdict is unchanged. The source is recorded as a genuine conflict that was returned to the census, not as agreement.

### F11: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per basin and per season, never a global average | general | Fig 1 :19, :22 | figure-derived |
| The anchor is measured mass balance and streamflow, not model agreement | general | Fig 2 :29, :35 | figure-derived |
| The question is a union of magnitude, timing and variability/hazard | general | Fig 9 :54, :55, :57 | figure-derived |
| Peak water is an ordered sequence and supply is a threshold | specified | Fig 12 :72, :87; Operators :48-51 | triangulated F6 |
| A stationarity frame needs an import to represent glacier change | specified | Fig 6 :14, :21, :23; Fig 8 :32 | triangulated F4 |
| Channel degradation, not ground decay, explains stale planning | specified | Fig 10 :24, :26; Fig 7 :37-39 | triangulated F5 |
| Glacier melt changes valence when the residual changes | specified | Fig 11 :49-51; Fig 12 :119 | triangulated F7 |
| The habitat cascade reaches agriculture and communities several steps out | general/specified | Fig 11 :44, :52 | triangulated F8 |
| Adaptation inside a fixed closure is motion, not progress | specified | Fig 7 :36; Fig 3 :19 | single-source F9 |
| Which named basin peaks in which year, and which crop fails where | not stated | none | gap: framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A glacier-fed basin's delivered supply reliability is unchanged across a habitat substitution that demonstrably removes or reverses the glacier contribution (breaks F4, Fig 6 :23).
2. A planning model predicts the timing and magnitude of peak water for a named basin from its own historical streamflow alone, with no glacier-physics import, and passes the ground test prospectively (breaks F4 and Fig 8 :32).
3. Measured mass balance and streamflow both remain stable while delivered supply changes for reasons internal to the model's own terms (breaks the anchor, F2, Fig 2 :29).
4. A basin's planning channel measures high fidelity and high ground pressure, with no degradation, yet supply fails (breaks F5, Fig 7 :37-39).
5. A single intervention restores magnitude, timing and variability conditions in all failure types and leaves no categorically different residue (breaks F3, Fig 9 :57).
6. A glacier-fed basin shows no intervening increase in annual runoff before decline, or shows an increase that never peaks before disappearance (breaks F6).
7. Fig 13's six terms are derived from five of them, or Fig 6's idempotence fails inside a closed set (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a per-basin ground measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of water towers (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep the three conditions separate in every report. A blended "water security score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Ask, at each handoff, which link the chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
4. Treat the peak-water concept as a **shape and a warning**, not as a date. Fig 9 :32: *"you get a kind of thing, never the answer itself."* The UNESCO caution (F10) is a live constraint on how the concept may be used in policy.
5. Use the published literature as a budget filter and as corroborating witnesses, not as the verdict. Huss and Hock, the IPCC assessments and the WWDR overlap heavily through the same studies, so they count as one evidence pool on the core numbers (Fig 2 :31, :40).
6. Build the public record before the claim: measured mass balance and gauged streamflow per basin, with provenance (Fig 10 :62-64). The WGMS and GTN-G are the named public services for this anchor.
7. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
8. Stop at the shape. Do not name which basin will peak when, or which crop will fail where, without a basin-level ground reading (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and the three essays *The Library of Babel*, *The Recursive Self-Improvement Trap* and *The Hard Problem is About Source* (all fetched 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13 six-term set directly to glacier water supply | **Retracted, strain S1** | Only fit by renaming ice as energy and melt as gradient. Re-census: Fig 13 governs the physical substrate, not basin or planning frames |
| Read "peak water" as a general date for all glaciers | **Retracted at record level** | Huss and Hock explicitly say half the basins have passed it and half have not; UNESCO Box 2.2 warns against the idealized trend. Kept as a shape only |
| Treated the IPCC, WWDR and Huss and Hock as three independent witnesses | **Retracted as independent, kept as one pool** | They cite the same underlying studies (Fig 2 :31, :40). One pool, not three corroborations |
| Planned to name the Indus or the Alps as "the answer" | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer. Basin names are bindings from the hydrology frame, provenance owed |
| Wanted to call Fig 11 :40 a `general` law about all water systems | **Narrowed to `specified`** | No per-basin measurement pays for the water-system version here |
| Used the GLOF death toll as evidence about supply | **Narrowed to a valence illustration** | It is a hazard residual, not a supply residual; F7 is about sign change, not magnitude |
| F10 (UNESCO caution) initially read as a conflict | **Conflict resolved by re-census R2, verdict unchanged** | After unbundling, the caution corroborates F1 and F3. The conflict is kept visible, not erased |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Fig 1 and Fig 9 are two figures but one framework; triangulation here means low topical overlap, not independent evidence pools |
| Fig 12 ordered bond as predictor of peak timing | **Narrowed to shape only** | The bond types the order and the threshold, not the year. Marked `specified`, unmeasured |

**Strains sent to the log:** S1 (Fig 13 applied to glacier water supply), resolved by re-census; S2 (treating "the ground" as measured streamflow while streamflow obviously responds to climate), resolved by Fig 11 :73: the habitat updates, the ground is what settles and does not; the gauge reading is the anchor only when it is maintained and re-read (Fig 10 :24). No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of magnitude/phase, timing, and variability/hazard, each with its own loop and instrument.
2. **What is the anchor?** Measured glacier mass balance and gauged streamflow, named in Fig 2 :29 and maintained by public services. Not model consensus, not a "water tower" headline (Fig 1 :27).
3. **Is the answer a global total?** No. Fig 1 :19, :22. The signal is per basin and per season.
4. **Why do old plans fail?** The stationarity closure cannot derive glacier change from inside (Fig 6 :23, Fig 8 :32); the channel degrades while the ground does not (Fig 10 :24).
5. **What is the general shape of the response?** Accumulation → peak → decline (Fig 12 sequence), with a threshold relation between supply and demand (Fig 12 comparison), and a seasonal shift that can invert the agricultural outcome at constant annual total.
6. **Why does the same glacier help and harm?** Valence is relative to the residual (Fig 11 :49-51); drought buffering and GLOF hazard are two relations, not two kinds of glacier.
7. **What can be said at the stop?** A shape, three conditions, two distinct failure modes and falsifiers. Not which basin peaks when, not which crop fails where, not a `grounded` answer. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **glacier retreat does not deliver one water outcome but a union of three basin-specified conditions, governed by where a basin sits in the accumulation → peak → decline sequence; the planning residual grows where a stationarity-based frame has no atom for that sequence and where its channel to measured mass balance and streamflow has degraded; the same meltwater changes sign from drought buffer to hazard as the residual changes. The downstream consequence reaches agriculture and communities several steps out, by enumeration rather than assumption.** The three conditions are kept separate, never averaged. Which named basin peaks in which year is a `gap`, not a hidden answer: the framework returns a shape, and the basin-level instrument that would name the timing is not held here. Mode `specified`. No world source was allowed to flip a verdict; the one genuine conflict (UNESCO Box 2.2) was returned to the census and re-mapped. No unresolved strain remains after re-census.
