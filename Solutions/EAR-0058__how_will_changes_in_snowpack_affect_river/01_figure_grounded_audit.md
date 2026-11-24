# Figure-grounded audit: changes in snowpack, river flow and seasonal water supply

**Mode of this document: `specified`, not `grounded`.** It states the shape a correct answer must have and what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** The Recursive Self-Improvement Trap essay says LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the snow hydrology question it reports on. See `05_what_shape_means.md` §7.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, line numbered), `FIGURES_README_canonical.md`, `THE_FORMULA.md`, `60_FIGURES_AS_METALAWS.md`, the eight essays, and the world sources in `10_source_ledger.csv`. All figure quotes below are exact substrings of the figure text extract and are cited `Fig N :line`.

---

## 0. The residual, stated in effect terms

The question asks: given a change in the cold-season snow store (snow water equivalent, the timing of melt, the rate of melt, and the partition of precipitation between rain and snow), what changes in (a) the timing of river discharge, (b) the volume and reliability of water available in each season, and (c) which slot carries the live signal, and what measurement would settle each proposed answer.

**R by arity, symmetry and scale.**

- **Arity:** multi-condition. At least four conditions bind at once: accumulation, melt timing, melt rate, and precipitation phase. This is not one hard question (Fig 9 :4-5 *"are not one hard question but several well-formed ones. Split it rather than search."*).
- **Symmetry:** asymmetric. Accumulation precedes release; the loop has a sign. A chain of discharge values is not reversible into a chain of snowfall values by inspection (Fig 12 :121 *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."*).
- **Scale:** first order within a basin-by-season slot; second order across the river network and the water-supply system; third order into groundwater, vegetation and demand.

**The sought-for shape is bound here, before the run.** An answer must state, per slot: timing shift, volume/reliability shift, the mediating structure, and the anchor that would settle it. This makes the preference refusable by the same test as everything else (formula, "Direction").

---

## 1. Domain census

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| **D1 Cryosphere store** | snowpack and SWE, air temperature, humidity, elevation, aspect, precipitation phase, melt energy | stored water and stored cold, a difference that can be spent | SNOTEL SWE and snow courses; a measured water equivalent | first-order, inside the slot |
| **D2 Routing and discharge** | channel network, soil, groundwater, reservoirs, vegetation | discharge and travel time; storage and release | stream gauges and reservoir records | first-order across the network |
| **D3 Water supply and demand** | irrigators, cities, hydropower, ecosystems, storage operators | reliably deliverable water against seasonal demand | delivery records, shortages, deliveries that fail | second-order compound |
| **D4 Verification** | hydrologists, gauges, isotope tracers, models | agreement and residual | the ground, never agreement | seat, not loop |

**Partition or union:** union, not partition. D1, D2 and D3 overlap; a change in snow store is simultaneously a routing change and a supply change. Fig 9 :54 *"And when the split lands on a union rather than a partition, unbundle before you search again."* The seasons are slots, not sub-problems to be averaged (Fig 1 :19 *"The residual is indexed by object slot, not aggregated."*).

**Order by dependency (Fig 3).** Perceive SWE (link 1) -> have terms for what the snow affords and what counts as progress in supply (link 2 and 3, the usual break) -> plan forecast and reservoir operations (link 4) -> name what worked and carry it (link 5). Effort spent on forecast methods cannot rescue a missing vocabulary link: Fig 3 :20-21 *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."*

**Habitat enumerated, never composed.** Fig 11 :43 *"The habitat is enumerated, never composed."* Fig 11 :46 *"conditions: light, water, temperature, season, terrain"* names season, water and terrain as conditions of the residual. Fig 11 :44 *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."*

---

## 2. Figure census (bearing and verdict before findings)

| figure | bearing | verdict after census |
|---|---|---|
| 1 The Agent | residual per object slot; frame-internal quantities disqualified | governs slotting; annual totals lose the signal |
| 2 The Ground | anchor must not update; agreement from a shared pool is worthless | governs what may settle the answer |
| 3 Dependency Chain | order by dependency; a reading below a break is a reading of nothing | governs the measure-then-forecast order |
| 4 The Membrane | methods cross up, recordings do not; round trip gap | governs outreach only, not the hydrology |
| 5 Mint Pipeline | three guards as a product | no new hydrological primitive is minted here |
| 6 Closure / Reachability | import moves the wall; instruments improved from worse ones | governs why gauges precede theory |
| 7 Room Chain | agreement compounds, evidence does not | governs why many agreeing models are one witness |
| 8 Union Surplus | residual first, frame second; no proof of absence | governs the union reading and the honest stop |
| 9 Leave / Arrive | split a union; describe the residual before choosing a frame | **decisive for the compound structure** |
| 10 Ground Maintainer | ground does not decay, channel does; bring the residual | governs data-network failure and outreach |
| 11 The Habitat | enumerate contact; conditions include season; cascades | governs the slot conditions and second-order effects |
| 12 The Bond | isomer, functional group, cycle sign, two currencies | governs the regime and order derivation |
| 13 Minimum Viable Set | gradient over space vs time; flow = energy + gradient; no direct state-state bond | **decisive for the shape of the propagation** |
| Operators / Symbols | bond types and `R_T` definitions | govern notation and round-trip report |

Strained readings are named in §8, not smoothed over.

---

## 3. Findings

### F1 : The residual lives in basin-by-season slots, not in an annual mean (decisive for framing)

Fig 1 :19 *"The residual is indexed by object slot, not aggregated."*
Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."*
Fig 11 :46 *"conditions: light, water, temperature, season, terrain"*

A single "annual water supply" number is exactly the aggregation the figures forbid. The live signal is a shift in the timing of the hydrograph in a specific basin, elevation band and season. The world literature agrees on the pattern: Stewart et al. found *"Widespread and regionally coherent trends toward earlier onsets of springtime snowmelt and streamflow have taken place across most of western North America,"* while Clow found the shift in Colorado was *"a median of 2-3 weeks over the 29-yr study period."* Those are slot-specific readings, not a global mean.

**Mode:** `general` (structural), triangulated across Fig 1 and Fig 11, with world corroboration from Clow and Stewart.
**Refuter:** a multi-basin study in which between-basin variance in seasonal timing response is not larger than within-basin noise, so aggregation loses no signal.

### F2 : Snowpack is a spendable gradient; magnitude, timing and phase are different terms (decisive)

Fig 13 :46 *"a difference that can be spent"*
Fig 13 :76 *"Energy and a gradient compose a flow. A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is."*
Fig 13 :71 *"no direction to drive the flow, and no remainder left after each step"*

The winter snowpack is a stored difference (cold, elevation, a water store held against a warmer season) that becomes directed flow when the temperature crosses a threshold. The figure explicitly separates a gradient over space (which basins and elevations hold snow) from a gradient over time (when melt is released). So three changes are not interchangeable:

1. a change in the **size** of the store (peak SWE), which bears on volume;
2. a change in the **date** at which the store is spent, which bears on seasonality;
3. a change in **phase**, snow falling as rain instead, which removes the store rather than resizing it.

Barnett et al. separate the same two quantities empirically: *"In a warmer world, less winter precipitation falls as snow and the melting of winter snow occurs earlier in spring. Even without any changes in precipitation intensity, both of these effects lead to a shift in peak river runoff to winter and early spring, away from summer and autumn when demand is highest."* The full paper adds that precipitation changes affect volume while temperature changes mostly affect timing. That is the world-side reading of the figure's space/time distinction.

**Mode:** `specified`, triangulated across Fig 13 :46 and Fig 13 :76, with world corroboration from Barnett et al. and IPCC AR6.
**Refuter:** evidence that a change in store magnitude reliably produces a proportional change in annual runoff volume across basins, with no decoupling. This refuter is directly testable, and López-Moreno et al. report *"no link was found between the magnitude of changes in the snowpack and changes in annual runoff,"* so as things stand it does not fire.

### F3 : Snowpack and river discharge do not bond directly; a structure sits between (decisive)

Fig 13 :75 *"Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state."*
Fig 13 :76 *"Energy and a gradient compose a flow."*
Fig 11 :45 *"actors: what acts on it, and what it acts on"*

The snow store and the discharge at a gauge are both states. Under the substrate rule they cannot compose directly. The mediating structures are the melt gradient (the directed release) and the channel network (how water travels). This is why "less snow therefore less summer flow" is a shorthand, not a derivation: the chain runs store -> melt gradient -> channel network -> discharge, and either structure can change independently.

The world literature supplies the corroborating surprise. López-Moreno et al. found *"a generalized decoupling of mountain river hydrology from headwater snowpack regimes,"* with *"most river hydrological regimes shifted from reflecting the seasonal snowmelt freshet to responding rapidly to winter and spring precipitation."* Gordon et al. found *"streamflow prediction will be more challenging in regions with multiple interacting mechanisms."* Both are what a mediated composition predicts and a direct bond does not.

**Mode:** `specified`, single-source for the figure rule (Fig 13), triangulated with two low-overlap world frames (López-Moreno, Gordon).
**Refuter:** a demonstrated direct mapping from SWE to discharge that needs no melt-gradient or network term and predicts timing as well as volume.

### F4 : It is a union compound, so split before searching (decisive for method)

Fig 9 :54 *"And when the split lands on a union rather than a partition, unbundle before you search again."*
Fig 9 :58 *"a case in two conditions is not a harder case of either"*
Fig 9 :4-5 *"are not one hard question but several well-formed ones. Split it rather than search."*

"How will changes in snowpack affect river flow and water supply across seasons?" bundles at least three overlapping conditions: the cryosphere response, the routing response, and the supply/demand response. A single lever clears the region where only one condition holds and leaves the intersections standing. The correct procedure is to unbundle, run one loop per domain, and then compose the results. Seasons are slots within each loop, not separate questions to be silently averaged.

Gordon et al. reached the same methodological conclusion from inside snow hydrology: they propose *"three testable, inter-related mechanisms, snow season mass and energy exchanges, the intensity of snow season liquid water inputs, and the synchrony of energy and water availability"* and note that prediction is hardest where mechanisms interact. That is a union, described in effect terms by people who measure it.

**Mode:** `general`, triangulated across Fig 9 and Gordon et al.
**Refuter:** a study showing that one mechanism accounts for the seasonal response across basins with no interaction terms.

### F5 : The loop has a sign; a phase shift changes whether the cycle closes in the same form

Fig 12 :121 *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."*
Fig 12 :117 *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*

Snow accumulates, melts, recharges soil and groundwater, and conditions the next season's vegetation and energy balance. The output re-enters as input. When warming moves precipitation from snow to rain, the storage leg weakens and the cycle may no longer close in the same form: the regime shifts from a snowmelt freshet to rainfall-runoff. IPCC AR6 WGII states: *"Warming increases glacier melt and is expected to decrease snowfall globally and lead to shorter snow seasons with earlier but less rapid snowmelt. It can also lead to local increases in snowfall intensity. These changes affect the seasonality of river flows in glacier-fed or snow-dominated basins."*

**Mode:** `specified`, single-source for the figure (Fig 12), corroborated by IPCC AR6. Checked more fully in `06_isomers_and_order.md`.
**Refuter:** a basin that shifts to rain-dominated runoff while retaining the former seasonal hydrograph and storage cycle, with the loop sign demonstrably unchanged.

### F6 : Contact cascades beyond the direct snow-to-river link

Fig 11 :43 *"The habitat is enumerated, never composed."*
Fig 11 :44 *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."*
Fig 11 :52 *"Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect"*

Scoping to snow -> river is first-order enumeration. Second-order effects run through soil moisture, groundwater recharge and vegetation; third-order effects reach aquatic ecology, irrigation, hydropower and urban supply. The residual that matters to a water manager can be three steps out. IPCC AR6 WGII notes that modified streamflow *"is also projected to affect inflows to urban storage reservoirs and increase the vulnerability of urban water services to hydro-meteorological extremes,"* which is a second-order contact.

**Mode:** `general`, triangulated across Fig 11 and IPCC AR6.
**Refuter:** a case where downstream supply reliability is unchanged despite a large snowmelt-timing shift and no compensating storage, so the cascade does not matter.

### F7 : The anchor is the measurement; the observing channel can decay

Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*
Fig 10 :24 *"the ground does not decay, the channel does"*

The river does not consult a forecast. SWE, discharge and reservoir storage are anchors; models are frames ranged against them. But the channel that carries the reading can degrade: a gauge goes offline, a SNOTEL site returns provisional data, a basin index is flagged as invalid. The NRCS update reports are explicit that data are *"Provisional data, subject to revision"* and that some basin indices *"may not provide a valid measure of conditions."* That is a channel failure, not a change in the ground, and it must be recorded as such.

**Mode:** `general`, triangulated across Fig 2 and Fig 10, with world corroboration from NRCS operational practice.
**Refuter:** a forecast that settles a seasonal supply question without any ground reading, or a demonstration that a degraded gauge changes the river.

### F8 : Two currencies: bits and actions do not add

Fig 12 :125 *"A composition costs in two currencies, and they do not add."*
Fig 12 :126 *"Bits price the description. Actions price finding out whether it holds."*

A more detailed forecast is cheaper to state in bits but may cost a whole monitoring budget to settle. Conversely, a simple index over a costly operand can be cheap to write and expensive to verify. The figures say these prices are held apart, never summed. This is why "run a bigger model" is not a substitute for a gauge, and why the answer to this question must name both the description and the instrument that would pay for it.

**Mode:** `general`, single-source (Fig 12), stated as a constraint on method, not a hydrological result.
**Refuter:** a demonstration that description length and settlement cost are the same quantity in this domain.

### F9 : What survives, and its mode

| claim | mode | figure |
|---|---|---|
| The residual is per basin and per season; annual aggregation destroys the live signal | `general` | Fig 1 :19, :22; Fig 11 :46 |
| Snowpack is a spendable gradient; timing, magnitude and phase are distinct terms | `specified` | Fig 13 :46, :76 |
| Snow store and discharge compose only through a melt gradient and a network | `specified` | Fig 13 :75, :76 |
| The question is a union compound; unbundle before searching | `general` | Fig 9 :54, :58 |
| The seasonal loop has a sign; a rain/snow phase shift can change the regime | `specified` | Fig 12 :121 |
| Contact cascades into soil, groundwater, ecology and supply | `general` | Fig 11 :43, :44, :52 |
| The anchor is the measurement; the channel can fail | `general` | Fig 2 :29; Fig 10 :24 |
| Any number for "how much" is world-sourced, not figure-derived | `grounded` only where a real gauge or isotope partition exists | Fig 8 :39; Fig 13 :134 |

The figures give the shape. The direction and magnitude (earlier peak flow, lower summer flow, decoupled annual runoff) come from the world sources and are labelled as such in `09_watson_answer.md`.

---

## 4. Pre-registered refuter

Written before the conclusion, per Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."*

The shape claim is refuted if any of the following holds:

1. **Slot claim:** in a multi-basin study, between-basin and between-season variance in timing response is not larger than within-slot noise, so aggregation loses nothing.
2. **Gradient claim:** store magnitude and annual runoff volume move proportionally across basins with no decoupling, so the space/time distinction carries no information.
3. **Mediation claim:** a direct SWE-to-discharge mapping predicts both volume and timing without a melt-gradient or channel-network term.
4. **Cycle claim:** a basin shifts from snowmelt to rain-dominated runoff while keeping the same seasonal hydrograph and storage cycle, so the loop sign does not matter.
5. **Cascade claim:** downstream supply reliability is unchanged after a large snowmelt-timing shift with no compensating storage.

If any fires, the corresponding finding is withdrawn. None is claimed to be settled by this simulated derivation. Note that refuter 2 is the one the world literature most directly tests, and the reported result (López-Moreno et al.) is that the link is absent, so the refuter does not fire on present evidence.

---

## 5. Recommendation

1. **Split the question before answering it.** Report one loop per domain (cryosphere store, routing, supply) and keep the verdicts separate; never average them into a single seasonal index (F1, F4).
2. **Report timing and volume in separate columns.** The figure says a gradient over space and one over time are different terms (F2).
3. **Name the mediator.** Any statement of the form "less snow means less water" must state the melt-gradient and network terms it skipped (F3).
4. **Bind the anchor.** State which SWE record, which gauge, and which delivery record would settle each sub-claim, and flag provisional or invalid readings as channel failures (F7).
5. **Price both currencies.** Pair every added modelling detail with the measurement that would pay for it (F8).
6. **Keep the shape and the numbers apart.** The figures license the former; gauges and isotope studies license the latter (F9).

---

## 6. Canonical usage check

Two sources were read after findings F1 to F9 and they govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md` states: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* And the limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"* then stops where instruments stop discriminating.
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are metalaws for design questions; the seat reads the ground and does not ask the anchor to decide what the figures already settle. It also records that agreement from a shared evidence pool is one witness.

### Retraction and confirmation log

| earlier reading | status after the canonical check |
|---|---|
| "The figures directly answer how snowpack affects river flow." | **Retracted.** The figures are domain agnostic. They constrain the shape of the answer, not the discharge numbers. Direction and magnitude are world-sourced. |
| "Fig 11 habitat enumeration means list the physical factors once." | **Narrowed.** The habitat is enumerated relative to R and updated as R changes. Fig 11 :46 does name water, temperature, season and terrain as conditions, but valence is relative to the residual, so no standing list is implied. |
| "Write the propagation as a sequence `snow -> melt -> river`, using Fig 12 sequence." | **Refused.** `->` would add an ordering the figures do not license at the kind level. Use cross-kind composition (Fig 13 :75) plus cycle (Fig 12 :121) instead; the cycle claim is kept, the arrow is dropped. |
| "IPCC and the review papers corroborate the figure verdict, so the verdict is grounded." | **Refused.** World sources are secondary corroboration from a different closure. They do not settle a figure-internal derivation, and several of them share the same underlying observation pool (see overlap column in `10_source_ledger.csv`). |
| Apparent strain Fig 13 :76 (flow = energy + gradient) versus Fig 13 :75 (no direct state-state bond). | **Not strained after re-census.** :76 composes a state (energy) with a structure (gradient), which is cross-kind and legal. Different quantities. |
| Apparent strain Fig 9 :54 (unbundle the union) versus Fig 11 :43 (enumerate the habitat). | **Not strained after re-census.** Fig 9 governs how to split the question; Fig 11 governs how to list contacts within one domain. Different objects. |
| "No link between snowpack magnitude and annual runoff" (López-Moreno et al.) conflicts with the gradient claim. | **No conflict.** The gradient claim distinguishes magnitude from timing; the reported absence of a magnitude link is the predicted shape, not a contradiction. A conflict would send us back to the census, never flip the verdict. |

---

## 7. Verdict of this audit

The shape survives after re-census: the residual is per-slot, the snow store is a spendable gradient whose timing, magnitude and phase are different terms, store and discharge compose through a melt gradient and a network, the question is a union compound, the seasonal loop has a sign, contact cascades beyond the first order, and the anchor is a measurement whose channel can fail. No figure quote required a strain after re-census; two apparent strains were dissolved by re-census. All substantive claims are `specified` or `general`, none `grounded`. The world sources supply direction and magnitude, kept in a separate section of `09_watson_answer.md`. This document is a simulated derivation checked for internal consistency against the figures, not a ground reading, and cannot settle the question it reports on.
