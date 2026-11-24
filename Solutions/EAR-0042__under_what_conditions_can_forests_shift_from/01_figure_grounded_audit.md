# Figure-grounded audit: when does a forest switch from sink to source?

**Mode of this document: `general` for the shape, `specified` for the per-domain verdicts, `gap` for exact thresholds.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status: a simulated derivation, not a ground reading.** *The Recursive Self-Improvement Trap* says LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself" (see `05_what_shape_means.md` section 6). This folder was derived by simulation and checked for internal consistency against the figures. It cannot settle the question it reports on. No eddy-covariance tower was read, no plot was remeasured, no inversion was run.

**Primary source.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, quoted verbatim and cited as `Fig N :line`. The formula and canonical README are framework primaries. World sources are secondary corroboration only and are listed in `10_source_ledger.csv`.

---

## 0. The residual, stated as an effect

A forest's net carbon balance is a signed flux: uptake by photosynthesis minus release by autotrophic respiration, heterotrophic respiration and decomposition, fire and lateral export. Call it `F`. `F < 0` is a sink (net uptake), `F > 0` is a source (net release). The question asks for the conditions under which `F` changes sign from sink to source, and for what would make that change a **shift** rather than a season or a bad year.

Bind the sought-for shape as an ordinary term before deriving, per the formula's "Direction":

> `SHIFT = (signed net flux crosses zero) AND (the crossing persists beyond a stated window) AND (the stocks and return paths that produced it are altered)`.

This binding is the thing to be refuted, not a conclusion. Without the third clause, every deciduous forest is a "source" each winter and the question dissolves into calendar arithmetic. Without the second clause, one El Niño year is a permanent transition. The window and the stock condition are owed to an instrument, not to an argument.

**R by arity, symmetry and scale.**

- **Arity.** More than one condition is in play. Drought, heat, fire, pests, land conversion, stand age and soil carbon each contribute. The question is a **union** of overlapping conditions, not a list of independent ones (Fig 9 :54).
- **Symmetry.** The relevant object is a signed loop, not a one-way chain. Uptake and return are opposing flows and their comparison decides the sign (Fig 12 :121; Fig 12 :87 "a threshold relation between two quantities").
- **Scale.** The flux is indexed by stand, region and interval. A global or basin mean can be near zero while one live slot is already a source (Fig 1 :19, :22, :13). Time scale matters independently: diurnal, seasonal, interannual and multi-decadal crossings are different residuals wearing the word "shift".

---

## 1. Domain census (before any figure line is chosen)

One line per domain: actors, currency, anchor. A domain with no nameable anchor is not yet a ground domain.

| domain | actors | currency | anchor (nameable, and what it is) | partition or union |
|---|---|---|---|---|
| D1 Forest carbon flux | canopy GPP, autotrophic respiration, heterotrophic respiration, deadwood, soil, fire emissions, harvest export | carbon mass per area per time | eddy-covariance towers, repeated biometric inventories, atmospheric inversions (Fig 2 :29 defines an anchor as a measurement that does not move when frames push on it) | union with D2 and D3 |
| D2 Forest demography | trees by size and age, mortality, recruitment, competition, species | biomass, stems, canopy area | permanent plots (ForestPlots.net, ForestGEO) | union with D1 |
| D3 Disturbance and hazard | fire, ignition, vapour pressure deficit, drought, bark beetles, windstorm, edge effects | area burned, mortality count, emission mass | satellite burned-area products, climate reanalysis, fire records | union with D1 and D2; intersections are compounds |
| D4 Climate forcing | atmospheric CO2, temperature, precipitation, VPD, ENSO | concentration, moisture demand, radiative forcing | atmospheric CO2 records, reanalysis | upstream of D1 to D3, not a separate sink/source claim |
| D5 Measurement and accounting frame | satellites, DGVMs, flux upscaling, carbon credits | proxy indices, modeled flux, credits | **no independent anchor of its own**; it borrows the flux anchor from D1. A credit price moves when pushed, so it is not an anchor (Fig 2 :29). Greenness is an instrument that can be wrong on the axis it does not measure (Fig 2 :37-38). | a frame, not a ground domain |
| D6 Management seat | foresters, suppression crews, planting, grazing, restoration | interventions and their cost | the forest's actual response, read through D1 to D3. The seat introduces actors and cannot subtract the habitat (Fig 11 :61-62). | a maintainer acting on D1 to D3, not a separate ground |

**Partition or union.** Union. Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." The intersection of drought and fire and deforested edge is a compound with its own loop; Fig 9 :57 calls it "a case in two conditions" that "is not a harder case of either".

**Dependency order (Fig 3).** Perception (can we measure the signed flux?) precedes vocabulary (do we have terms for what affords a flip?) precedes objective (what counts as a persistent shift?) precedes planning (which lever?) precedes learn and carry. Fig 3 :20: "The chain is ordered by dependency, not by importance." The break here is between vocabulary and objective: flux measurement exists, but a network-wide convention for "persistent shift" is not settled. Fig 3 :25-27 names the middle link as the one with "neither" obvious failures nor obvious tests, and Fig 3 :27 adds: "A link with no instrument is not a link that works. It is a link nobody has looked at."

---

## 2. Figure census (verbatim, read before concluding)

| figure | bearing on this residual | preliminary verdict |
|---|---|---|
| Fig 1 The Agent | residual indexed by object slot, not averaged | per-stand flips are the unit of analysis |
| Fig 2 The Ground | anchor must not update; instruments can be wrong on unmeasured axes | measured flux is the anchor, greenness and credits are proxies |
| Fig 3 Dependency Chain | middle link is where chains break | "shift" lacks an objective definition, so the chain breaks there |
| Fig 4 The Membrane | round trip must be measured | condensing forest ecology into a single threshold loses information |
| Fig 5 Mint Pipeline | three guards as a product; a new term is owed when mechanism breaks | a single scalar threshold is a term that does not pay |
| Fig 6 Closure / Reachability | instruments are improved from worse instruments already returning something | flux towers and plots are the proto-instruments, not satellite greenness alone |
| Fig 7 Room Chain | agreement is variation, not a verdict | many models agreeing do not settle the sign |
| Fig 8 Union Surplus | residual first, frame second; search that finds nothing is not proof of absence | name the union before picking a tipping framework |
| Fig 9 Leave / Arrive | union versus partition; unbundle before searching | this is a union; split before searching for one number |
| Fig 10 Ground Maintainer | ground does not decay, channel does; bring a characterised residual | keep the anchor reachable; do not send the theory first |
| Fig 11 The Habitat | habitat enumerated, actors, conditions, relations; introduce never subtract | governs the content of "under what conditions" |
| Fig 12 The Bond | cycle sign decides; catalyst, functional group, isomer | governs the signed loop and the types of forest state |
| Fig 13 Minimum Viable Set | gradient, flow, lockstep, remainder compounding | a spendable difference and a flow, not a moisture gradient named as a primitive |

Strains are named in section 4 and not smoothed over.

---

## 3. Findings, each with a verbatim quote, a mode and a refuter

### F1: the conditions are habitat items, enumerated, not composed (decisive for content)

Fig 11 :43: "The habitat is enumerated, never composed."
Fig 11 :44: "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."
Fig 11 :45-47: "actors: what acts on it, and what it acts on"; "conditions: light, water, temperature, season, terrain"; "relations: pollination, predation, competition, dependency".
Fig 11 :48: "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."

**Reading.** An answer to "under what conditions" is the habitat of the residual `F`, read off the world. Direct contacts: water and temperature (drought, heat, VPD), fire, pests, stand age and soil stocks. Second-order contacts: deforested edges drying adjacent forest, mortality adding fuel, canopy opening raising temperature and wind. Fig 11 :52 names the DDT-to-eagles case: "first-order enumeration, second-order effect, and the residual that mattered was three steps out". A "condition" that is three steps out still governs the flip.

**Mode:** `general` for the enumeration rule, `specified` for the particular list. **Status: triangulated** (Fig 11 for the rule, Fig 9 for union, and Brando 2019 plus Clarke 2022 for the world list; low overlap between a habitat rule and a fire-threshold study).
**Refuter:** show a flip caused by nothing in contact with the forest or with anything that contacts it, or produce a standing list of conditions that keeps its valence across a change of residual (Fig 11 :51).

### F2: a signed loop, not a one-way chain (decisive for the flip itself)

Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."
Fig 13 :76: "Energy and a gradient compose a flow. A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is."

**Reading.** A forest that only "stores carbon" is described as a chain: tree grows, carbon is banked, end. A chain cannot close by construction, so it cannot represent a source state. The forest must be described as a loop: uptake becomes biomass, biomass becomes litter and deadwood, deadwood and soil respire back to CO2, and fire can short-circuit the return. The sign of that loop decides sink versus source. Campioli 2016 gives the world-side decomposition: NEP = GPP minus ecosystem respiration, and in boreal sites the two methods disagree on the sign because the net flux is a small difference of large opposed flows.

Fig 12 :119 adds the **catalyst** structure: "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is." Old soil carbon and coarse deadwood are the part that survives its own use; a forest that has burned and regenerated is not the same term as one that has not, even with the same standing list of species.

**Mode:** `specified`. **Status: triangulated** (Fig 12 cycle plus Fig 13 flow plus a flux-partitioning study).
**Refuter:** demonstrate a forest that is persistently a net source while its biological return loop has a net uptake sign and there is no lateral export or external emission term to carry the difference. That would force a re-census toward an open-system flow reading.

### F3: the union, not a single threshold (decisive for the form of the answer)

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."
Fig 9 :57-58: "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."

**Reading.** There is no single "conditions can forests shift" number. Drought-only, fire-only and drought-plus-edge are different objects. The compound has its own loop: drought kills trees, mortality adds fuel, fuel plus ignition produces fire, fire opens the canopy, opening dries the forest further. Suppressing fire clears the fire-only region and leaves the drought-and-edge compound standing.

**Mode:** `general` for the union, `specified` for any named compound. **Status: triangulated** (Fig 9 plus Brando 2019 and Gatti 2021 plus the Clarke/Eos disagreement noted in F8).
**Refuter:** show that one condition's threshold partitions all stands and intervals with no interaction terms and no compound residue. Then the union claim fails and the answer collapses to a single number.

### F4: per-slot residual, never the basin average

Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
Fig 1 :13: "a global R near zero with one live slot residual is a legal state"

**Reading.** A basin that is near neutral can contain a southeastern subregion that is a clear source. Gatti 2021 finds southeastern Amazonia acting as a net source while the wider basin is closer to balance; Hubau 2020 finds asynchronous saturation, with Africa's sink stable while Amazonia's declines; the 2024 synthesis finds bottom-up and top-down estimates of the whole region differing in sign while agreeing that the southeast was a source. A "shift" is therefore a per-slot event. Reporting only a continental mean is the named error of averaging away the live slot.

**Mode:** `specified`. **Status: triangulated** (Fig 1 plus three independent measurement networks with different instruments).
**Refuter:** demonstrate that flips are always spatially synchronous at the resolution considered, so no slot crosses before the mean. Until then, the mean is a budget filter, not a witness (Fig 9 :60).

### F5: valence is relative to the residual, not a property of the actor

Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries."
Fig 11 :50: "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."
Fig 11 :51: "No standing list of good actors survives a change of residual."

**Reading.** Fire is not intrinsically a source condition. In a fire-adapted forest, fire can be part of regeneration; in a humid forest that has never carried fire, the same ignition is a flip trigger. Clarke 2022 finds the VPD threshold above which fire probability exceeds 50 percent is about 2.7 kPa in tropical and subtropical biomes but about 1.3 kPa in temperate and boreal biomes. The same driver, a different threshold, because the habitat differs. So "fire causes the shift" is a `specified` claim conditioned on the stand, not a `general` law.

**Mode:** `general` for the valence rule, `specified` for any actor-to-residual assignment. **Status: triangulated** (Fig 11 plus a cross-biome threshold study).
**Refuter:** exhibit an actor whose sign relative to net carbon flux is invariant across all residuals. That would break the relativity claim.

### F6: the anchor is measured flux, not greenness, not a model, not a credit

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."
Fig 2 :37-38: "instruments can be wrong on axes they do not measure."
Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"

**Reading.** The thing that settles a sink/source claim is a measurement of signed flux: eddy covariance, repeated biometric stocks, or an atmospheric inversion. Satellite greenness measures structure and productivity proxies; a forest can be green and still be a net source because respiration and fire emissions are not in the greenness reading. This is the metamerism error from *The Hard Problem is About Source*: an instrument that reads green "cannot comment on the source". Campioli 2016 is the strongest world-side witness: at boreal sites the biometric method gave a mean NEP of about minus 60 gC m-2 yr-1 (source) while eddy covariance gave about plus 110 gC m-2 yr-1 (sink). The sign, the very thing asked about, is method-sensitive where the flux is small. Agreement among DGVMs sharing a forcing pool is one witness, not two (Fig 2 :40).

**Mode:** `general` for the anchor rule, `specified` for the proxy warning. **Status: triangulated** (Fig 2 plus a two-method flux comparison, which is genuinely low overlap: micrometeorology versus stock inventories).
**Refuter:** a proxy with a demonstrated invariant mapping to net signed flux across all biomes, disturbances and intervals would dissolve the anchor requirement. No such mapping is established in the sources read.

### F7: the maintainer can introduce, cannot subtract

Fig 11 :58: "Maintained. A seat exists and can act: choose the instruments, distil the impactful actors, introduce what was not there. That is the garden, and it is how arrival is worked on rather than waited for."
Fig 11 :61-62: "The seat's power is asymmetric. Introduction is available; exclusion is not. You can add an actor and you cannot subtract the habitat, because contact is a fact about the world and does not consult you."
Fig 11 :63: "Which is why a managed ecosystem is permanent work rather than a solved state."
Fig 11 :40: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."

**Reading.** Management is a seat acting on the habitat, not a new ground. It can add drought-tolerant species, alter fuel loads, restore fire or change grazing, but it cannot remove drought, remove decomposition, or remove the fact that carbon leaves the system. Therefore a managed forest that is a sink today is a maintained state requiring continued work, not a solved state; and a management change that does not alter contact with the flux cannot change the answer.

**Mode:** `general`. **Status: single-source** for the asymmetry rule (Fig 11), with management literature as illustration rather than proof.
**Refuter:** exhibit a management action that removes a condition from the habitat rather than substituting a new habitat for it, or that changes the sign of `F` without changing any contact. Either would break the asymmetry claim.

### F8: "shift" is the broken middle link; exact thresholds are a gap at this budget

Fig 3 :25-27: "having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."
Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."
Fig 8 :39: "So a search that finds nothing is never a proof of absence."

**Reading.** We can perceive the flux (D1 instruments exist) and we have terms for the components (GPP, Reco, NEP, NBP). What we do not have is a settled objective definition of "persistent shift": how many years, how large a crossing, how much stock change. Brando 2019 says it directly: "specific threshold conditions beyond which ecosystem properties could lead to alternative stable states are largely unknown". Campioli 2016 shows the sign itself can depend on the measurement method. So the exact numerical conditions are `gap`, not `unreachable` in principle: the instruments exist, a convention is missing. The honest move is SEARCHED first (is the threshold already in the literature and unfound?), then INWARD (sharpen flux instrumentation and gap-filling), then OUTWARD (import an operational threshold definition from resilience science), keeping the three distinct per formula step 7.

**Mode:** `general` for where the chain breaks, `gap` for exact thresholds. **Status: triangulated** (Fig 3 plus Brando 2019 plus Campioli 2016).
**Refuter:** an agreed, cross-network operational definition of persistent shift, with a stated window and stock criterion, adopted by the flux and plot communities. That would close this part of the gap.

### F9: what actually survives, with mode attached

| claim | mode | figure / witness |
|---|---|---|
| A forest flip is the sign of a return loop, not a stock statement | `specified`, falsifiable | Fig 12 :121; Campioli 2016 |
| The conditions are habitat items read off the world, out to second order | `general` | Fig 11 :43-48, :52 |
| The conditions form a union with compounds, not a partition | `general` | Fig 9 :54-58 |
| A flip is per slot, hidden by basin means | `specified` | Fig 1 :19, :22; Gatti 2021 |
| Actor valence is relative to the residual | `general` | Fig 11 :49-51 |
| The anchor is measured signed flux, not greenness or credits | `general` | Fig 2 :29, :37-38 |
| Management introduces and steers, cannot subtract | `general`, single-source | Fig 11 :61-63 |
| Exact numerical thresholds for a persistent shift | `gap` at this budget | Fig 3 :27; Brando 2019 |

---

## 4. Strains, and the re-census they forced

Recorded visibly; nothing was silently erased.

1. **Initial reading retracted: "drought is the gradient."** I first tried to map drought onto Fig 13 :22 "a difference that can be spent". Strain: a soil-moisture deficit is not the substrate's Gradient primitive, and the mapping only worked by stretching both terms. Re-census: drought belongs in Fig 11 :46 "conditions: light, water, temperature, season, terrain", and the spendable difference that composes a flow is the CO2 concentration difference across the canopy-atmosphere interface (Fig 13 :76). The strained reading governed a different quantity and was dropped.
2. **Initial reading narrowed: "the forest carbon cycle is a Fig 12 cycle."** A forest is an open system with fire emissions, harvest export and atmospheric subsidy. The cycle claim survives only as "the biological return loop's sign, together with lateral terms, decides `F`". The unqualified closed-cycle claim is retracted (F2 refuter).
3. **Initial reading corrected: "fire is one condition."** The 2023 Amazon flip was attributed to reduced uptake rather than fire in one source (Reinsel 2026, reporting Botia et al.), while another source says increased fire may have tipped the basin (Clarke 2022), and a 2026 Nature paper finds fire as the dominant source over 15 years. These are not a clean conflict: they use different intervals, regions and instruments. Per the method, a conflict sends the census back to work rather than flipping a verdict. Result: fire moved from "one condition" to "a compound whose role is conditional on interval and region" (F3, F5). Agreement from this shared evidence pool is one witness, not three.
4. **Fig 13 versus Fig 11 not strained after re-census.** Fig 13 governs the spendable difference and the flow; Fig 11 governs the habitat list. Different quantities.

---

## 5. Pre-registered refuter (written before the conclusion)

Required before any outreach. If any of the following holds, the shape claim is refuted and will be withdrawn, not softened:

1. A flip occurs with no change in any actor, condition or relation in the habitat of `F`, or a standing list of conditions keeps its valence across a change of residual. (Breaks F1, F5.)
2. A forest is persistently a net source while its biological return loop has a net uptake sign and there is no lateral export or external emission term to account for the difference. (Breaks F2.)
3. One condition's threshold partitions all stands and intervals with no interaction terms and no compound residue. (Breaks F3.)
4. Flips are always spatially synchronous, so no slot crosses before the mean. (Breaks F4.)
5. A proxy is shown to map invariantly to net signed flux across biomes, disturbances and intervals, so the measured-flux anchor requirement is unnecessary. (Breaks F6.)

A one-line failure from a checker is more useful than an endorsement.

---

## 6. Recommendation

1. Lead with the shape and the pre-registered refuter, not with a tipping number.
2. Keep per-domain verdicts separate. Do not average a habitat shape with a measurement-anatomy result.
3. Ask a checker what they would count as a failure of F1 or F2 before showing any framework material.
4. Use the public, opt-in venues in `03_public_contact_points.csv`; no personal emails, no receptiveness ranking, no bulk send.
5. Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." Offer the method with its gap, not a condensed threshold as if it were the ground.

---

## 7. Canonical usage check (figures README and formula)

The canonical README was read after the first findings: the figures "outrank everything else in the repo" and "the quotes are the authority, not this summary"; a reading that makes one figure contradict another "has misidentified its domain, not found a flaw"; and the framework returns "what a missing thing would have to look like (a shape, not a name)" then stops "at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest". This governs section 4: the strains are domain errors, not flaws in the figures, and the missing thing here is an operational threshold definition (a shape: a signed crossing plus a duration plus a stock change), not a number.

### Retraction and confirmation log

| earlier reading | status after canonical check |
|---|---|
| "drought is the Fig 13 gradient" | **Retracted.** Re-census to Fig 11 conditions and Fig 13 flow. Strain was real, name preserved above. |
| "forest carbon is a closed Fig 12 cycle" | **Narrowed.** Open-system lateral terms are required; refuter F2 carries the correction. |
| "fire is a single condition" | **Corrected to compound.** Interval and region decide its role; three world sources disagree honestly. |
| "a tipping number can be stated" | **Refused.** Canonical "shape, not a name"; exact thresholds are `gap` (F8). |
| F1 habitat enumeration | **Canonically confirmed.** Fig 11 is the forest/ecology figure and its list is read off the world. |
| F6 anchor is measured flux | **Canonically confirmed.** Fig 2 :29 and the README's "the ground, not agreement, decides". |
| F8 middle link broken | **Canonically confirmed.** Formula step 7 separates SEARCHED, INWARD and OUTWARD; they are not merged. |
| Simulated status | **Canonically confirmed.** "An improvement that does not change contact changes nothing"; this derivation changes no contact and settles nothing. |

### Final status of this audit

Shape survives, exact thresholds do not. After re-census, one live strain remains and is named (fire's role varies with interval and region), none hidden. Mode: `general` / `specified`, with `gap` on numbers. Nothing is `grounded`.
