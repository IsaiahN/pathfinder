# Figure-grounded audit: how much carbon can the ocean continue to absorb?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap* (read 2026-11-22): an LLM "can quickly simulate an approximate answer/output" but "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, cited as `Fig N :line`), `FIGURES_README_canonical.md`, `THE_FORMULA.md`, `60_FIGURES_AS_METALAWS.md`, the exemplar solution `QMGR-0037`, and the public URLs in `10_source_ledger.csv`, all opened 2026-11-22.

---

## 0. The claim under audit

> The ocean has taken up roughly a quarter of anthropogenic CO2 and is the largest natural sink. As it warms and its chemistry changes, that uptake is expected to weaken. How much carbon can it still absorb?

The question is stated as a request for one number. The audit tests whether the figures license a number or only a shape. The bound written before the run (Formula step "Direction") is: a per-slot, pathway-conditional residual against measurements, with an operationalized threshold and a named instrument. Everything below tests that bound.

---

## 1. Residual in effect terms

**R = |Γ(b,a) - o'| per slot s.** Here Γ is the projection frame (models and mapped fCO2 products), o' is what the ocean actually does (measured air-sea flux and interior inventory), and the slots are ocean basins, biomes, and the separate pumps. The residual is not one global scalar.

- **Arity:** several conditions. Solubility (temperature dependent), carbonate buffering (Revelle factor, alkalinity), circulation and ventilation (overturning, stratification, winds), and the biological pump each work on a different subset. This is a union compound (Fig 9), not one hard question.
- **Symmetry:** asymmetric. Drivers carry opposing valences. Warming lowers solubility and pushes CO2 out; DIC depletion in the surface layer can pull it back in; weaker upwelling reduces natural outgassing in the tropics while stronger stratification reduces ventilation in the extratropics. A symmetric join would be the wrong operator.
- **Scale:** seasonal to millennial, from a biome to the globe. Slot indexing is load bearing because the live signal is regional.

---

## 2. Domain census (before choosing any figure line)

One line per domain: actors, currency, anchor. A domain without a nameable anchor is not a domain yet.

| # | domain | actors | currency | anchor | type |
|---|---|---|---|---|---|
| 1 | the ocean carbon system (ground) | carbonate system, heat, circulation, winds, biology | air-sea CO2 flux, DIC, alkalinity, pH, omega | measurements: fCO2 observations, interior inventories, autonomous floats | union compound of pumps |
| 2 | the projection frame | global ocean biogeochemistry models, fCO2 mapping products, Earth system models, neural-net maps | projected uptake and uncertainty | the ground in domain 1, which the frame must range against | a frame, not an anchor |
| 3 | the verification and outreach frame | expert readers | agreement and residual | the ground, never agreement | checking arrangement |

**Partition or union:** union. The pumps overlap and compound; a single lever that clears the solubility slot leaves the circulation and chemistry slots bound. Fig 9 :54-58 governs: "And when the split lands on a union rather than a partition, unbundle before you search again" and "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."

**Dependency order (Fig 3):** perceive the per-slot residual first (domain 1); acquire vocabulary for what each pump affords; state the objective (what counts as capacity); then plan and carry. The chain most likely breaks at link 3, the objective, because "how much" has no meaning until a pathway, a timescale and a threshold are fixed. Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."

**Strain test applied during the census:** Fig 13 :76 gives "A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is." The solubility gradient across the air-sea interface and the multi-decadal trend in that gradient are two terms, not one. This is not a strain; it is the census result. A candidate capacity is a comparison at a threshold (a ⋛ relation), not a seventh primitive, so Fig 13 :115 ("The set is closed. The arrangements are not.") holds.

---

## 3. Figure census (verbatim, before concluding)

| figure | verbatim line | bearing | verdict |
|---|---|---|---|
| 1 The Agent | Fig 1 :19 "The residual is indexed by object slot, not aggregated." | a global number is the wrong slot | governs F1 |
| 1 The Agent | Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." | averaging hides exactly the regional weakening | governs F1 |
| 2 The Ground | Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." | measurement is the anchor | governs F4 |
| 2 The Ground | Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." | agreeing models are not corroboration | governs F4, F7 |
| 2 The Ground | Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool" | CMIP6 / shared-forcing agreement is one witness | governs F4 |
| 3 Dependency | Fig 3 :19 "Optimising a link that already works cannot rescue one that does not." | undefined objective is the break | governs F5 |
| 3 Dependency | Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." | capacity without a metric is unassessed | governs F5, F6 |
| 4 Membrane | Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." | projection and observation gap must be measured | governs F8 |
| 5 Mint | Fig 5 :21 "the gap has real mass somewhere" | support guard before any capacity term | governs F5 |
| 6 Closure | Fig 6 :32 "An instrument is not built from a description. It is improved from a worse instrument already returning something." | extend the observing network, do not imagine a sensor | governs F6 |
| 7 Room Chain | Fig 7 :13 "same closure, handed along; agreement compounds, evidence does not" | handed-along model generations add no evidence | governs F7 |
| 8 Union | Fig 8 :39 "So a search that finds nothing is never a proof of absence." | an unfound capacity is not proven absent | governs F11 |
| 9 Leave / Arrive | Fig 9 :4-5 "are not one hard question but several well-formed ones. Split it rather than search." | union compound, split first | governs F2 |
| 9 Leave / Arrive | Fig 9 :27-28 "describe it before you go looking, or any frame you pick will seem to fit" | residual before frame | governs F2, F4 |
| 9 Leave / Arrive | Fig 9 :32 "you get a kind of thing, never the answer itself" | shape, not number | governs F11 |
| 9 Leave / Arrive | Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." | tiers and ensemble means are filters | governs F9 |
| 10 Ground Maintainer | Fig 10 :24 "the ground does not decay, the channel does" | observing channel drifts, ocean does not | governs F6 |
| 10 Ground Maintainer | Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." | send the residual, not the framework | governs outreach |
| 11 Habitat | Fig 11 :43 "The habitat is enumerated, never composed." | list the contact web of uptake | governs F10 |
| 11 Habitat | Fig 11 :52-53 "first-order enumeration, second-order effect, and the residual that mattered was three steps out." | a cascade can reverse the sign | governs F10 |
| 12 Bond | Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." | same atoms, different arrangement | governs `06_isomers_and_order.md` |
| 13 Minimum Set | Fig 13 :75 "Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state." | composition crosses kinds | governs F3 |
| 13 Minimum Set | Fig 13 :76 "Energy and a gradient compose a flow. A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is." | the air-sea flux is a flow from a gradient | governs F3 |

Every quotation above was reopened character by character in `03-FIGURES_TEXT.md` before use. None came from a summary.

---

## 4. Findings F1 to F11

Each finding carries a mode and a refuter. Verdicts stay per domain; they are never averaged.

### F1 - The single global number is the wrong slot (decisive for the question's form)

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

A single "how much can the ocean absorb" collapses the per-basin and per-pump residuals. The live signal in the literature is regional: the 2023 non-polar sink fell about 10% below expectation while the tropical Pacific took up *more* than expected (world source, Müller et al. 2025, read 2026-11-22). A global scalar cannot carry a sign reversal between slots. Triangulated across Fig 1 and the Symbols table ("R is measured per slot, never as a single global number").

**Mode:** `general` (structural). **Refuter:** show a single global capacity scalar that predicts per-basin, per-pump residual trends without loss of sign or rank. **Domain:** 1.

### F2 - It is a union compound, not one hard question

Fig 9 :4-5: "are not one hard question but several well-formed ones. Split it rather than search." Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."

Solubility, buffering, ventilation and biology are overlapping conditions. The IPCC assessment names converging trends with different signs: reduced atmospheric CO2 growth, reduced storage capacity from acidification, enhanced natural outgassing from warming and circulation change (IPCC AR6 WG1 Ch5, read 2026-11-22). One lever does not clear a compound.

**Mode:** `general`. **Refuter:** show the four mechanisms reduce to one variable under one monotonic law that holds across pathways. **Domain:** 1.

### F3 - The uptake is a gradient-driven flow, and gradients over space and time are different terms

Fig 13 :76: "Energy and a gradient compose a flow. A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is." Fig 13 :75: "Two states never bond directly."

The air-sea CO2 flux is a flow composed from the pCO2/fugacity gradient and the air-sea exchange energy (wind), not a bare state-to-state bond. The observed flux formula itself is ΔfCO2 times gas transfer velocity times solubility (Müller et al. 2025, Methods), a gradient and a transfer coefficient. Warming changes the gradient term; stratification changes the pathway term; these are distinct terms, so they must be reported separately. Single-source for the figure definition; the physics is world corroboration, not a figure line.

**Mode:** `specified`. **Refuter:** show the flux is not composable as a flow from a gradient, or that spatial and temporal gradients are one term under the six-term set. **Domain:** 1.

### F4 - The anchor is measurement, not model agreement

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool"

Global ocean biogeochemistry models and fCO2 mapping products differ on the mean sink (about 2.6 versus 3.1 GtC per year over 2014 to 2023 in the consolidated budget; roughly 10% model underestimate against interior constraints, Friedlingstein et al. 2025, read 2026-11-22). CMIP6 models share forcing and model ancestry, so their agreement is one pool talking. The ground is the observation, not the ensemble mean. Triangulated across three Fig 2 lines and the world source.

**Mode:** `specified`. **Refuter:** exhibit a model ensemble whose mean has been moved by an independent interior inventory and that thereby moves the measurement, rather than ranging against it. **Domain:** 2 and 3.

### F5 - Capacity is an objective, and the chain breaks if it is undefined

Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." Fig 5 :21: "the gap has real mass somewhere"

"How much can it continue to absorb" has no answer until "continue" is given a pathway, a time horizon and a threshold. A model result becomes a capacity only when an objective is bound. Terhaar (2024, read 2026-11-22) operationalizes exactly such an objective: the proportional relationship holds only while the sink stays below 4.5 PgC per year and breaks in high-emission pathways. That is a threshold, not a universal constant.

**Mode:** `specified`. **Refuter:** produce a pathway-independent capacity number with a stated objective and a stated instrument that would move it. **Domain:** 2.

### F6 - The observing channel is the instrument and it already returns something

Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something." Fig 10 :24: "the ground does not decay, the channel does"

The capacity question is answered by extending existing instruments, not by imagining a perfect sensor. SOCAT (read 2026-11-22) holds 44 million quality-controlled fCO2 observations from 1957 to 2025 and invites new submissions; BGC-Argo floats and repeat hydrography extend the interior constraint. Instrument drift, sparse sampling and seasonal bias are channel failures, not changes in the ocean. Triangulated across Fig 6, Fig 10 and the world source.

**Mode:** `specified`. **Refuter:** specify from a description alone a proto-instrument that has never registered anything anywhere and show it constrains capacity. **Domain:** 3.

### F7 - No last room: handing a projection along adds no evidence

Fig 7 :13: "same closure, handed along; agreement compounds, evidence does not." Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."

An assessment that is passed from model generation to model generation without a new observation is one long room. The 2025 consolidated budget is valuable not because it agrees with earlier budgets but because it adds corrections from independent interior and oxygen constraints (world source, read 2026-11-22). Room agreement is variation; selection against the residual is where the ground votes.

**Mode:** `general`. **Refuter:** exhibit a terminal model generation after which no further measurement could change the capacity estimate. **Domain:** 2 and 3.

### F8 - The round-trip gap must be measured, not assumed zero

Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

Projecting sparse observations to a global sink and back to a regional prediction is a lossy transform with a nonzero R_T. The gap between fCO2 products and GOBMs, and the 2023 unexpected decline, are measured gaps that must be reported rather than averaged away. Treating a condensed "the ocean will absorb about a quarter" as identical to the assessments that produce it sets R_T to zero, which is the dead-reckoning error this line names.

**Mode:** `general`. **Refuter:** show a condensation of the assessments into one scalar from which every regional residual can be recovered exactly. **Domain:** 2.

### F9 - Filters are not witnesses

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

A tier label, an ensemble mean, a confidence class or a "25% of emissions" headline allocates attention and budget. None of them settles the quantity. Buying a larger model ensemble is a budget decision, not a second witness, unless the new models draw on different evidence.

**Mode:** `general`. **Refuter:** show a budget filter that changes the ground reading without changing contact with measurements. **Domain:** 3.

### F10 - Enumerate the habitat; second-order effects can reverse the sign

Fig 11 :43: "The habitat is enumerated, never composed." Fig 11 :52-53: "first-order enumeration, second-order effect, and the residual that mattered was three steps out."

The contact web of uptake includes temperature, DIC, alkalinity, Revelle factor, stratification, wind, upwelling, nutrients, biology and sea ice. It is read off the world, not composed from the six terms. The 2023 event is the cautionary case: warming (first order) drove stratification and DIC depletion (second order), and the non-thermal compensation overpowered the thermal effect in the tropics while failing in the North Atlantic (Müller et al. 2025, read 2026-11-22). A first-order-only enumeration predicted the wrong sign for the sink anomaly.

**Mode:** `specified`. **Refuter:** show a direct-contact-only habitat that predicts the 2023 regional sign reversal. **Domain:** 1.

### F11 - The framework returns a shape, not the number

Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 8 :39: "So a search that finds nothing is never a proof of absence."

No figure line yields a GtC per year value. What survives is the form of any admissible answer: per-slot, pathway-conditional, with an operationalized threshold, a measured round-trip gap, and an instrument that could move it. "Unreachable is a verdict here, not a silence" (Fig 13 :134) applies to the number: the derivation stops at the limit of the instruments and records the lineage.

**Mode:** `general`. **Refuter:** derive a numeric capacity from a figure line with no imported measurement. **Domain:** all.

---

## 5. Pre-registered refuter (written before the conclusion)

Per the exemplar's discipline, a falsifier written before the run is a design instrument. The shape claim is refuted if **any** of the following holds:

1. A single global capacity scalar predicts per-basin and per-pump residual trends with no loss of sign or rank (breaks F1).
2. Solubility, buffering, ventilation and biology reduce to one variable under one monotonic law across all pathways (breaks F2).
3. A measurement shows the air-sea flux is not a gradient-driven flow, or that spatial and temporal gradients are the same term under the six-term set (breaks F3).
4. A model ensemble moves the measurement rather than ranging against it, so the anchor updates (breaks F4).
5. A pathway-independent capacity number is produced with a stated objective and instrument that would move it (breaks F5).
6. A first-order-only contact list predicts the 2023 regional sign reversal (breaks F10).

If any fires, the shape is wrong and the answer is withdrawn. Until one is run, nothing here may be labelled `grounded`.

---

## 6. Recommendation

1. Refuse the question's form as written. Report a per-slot, pathway-conditional residual, not one number (F1, F2).
2. Name the objective before the capacity: pathway, horizon, threshold, instrument (F5).
3. Treat measurement as anchor and model agreement as a filter (F4, F7, F9).
4. Enumerate the contact web and report second-order cascades (F10).
5. Measure the round-trip gap between projection and observation (F8).
6. State the mode on every claim and send the refuter before the links (Fig 10 :52 "Bring a characterised residual, never the source.").

---

## 7. Canonical usage check

Two local sources govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw"; and the limit: the framework says "what a missing thing would have to look like (a shape, not a name)", then stops at the limit of the instruments and records the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the seat reads the ground; it does not ask the anchor to decide what the figures already settle. Design questions are answered by derivation, not escalation.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| Draft question read as requesting a single GtC number | **Retracted at form level.** Fig 1 :19 and :22 make the scalar the wrong slot. The answer is a per-slot structure. |
| Draft mapped the four pumps onto the seven bonds one to one | **Narrowed, not kept.** Fig 11 :43 says the habitat is enumerated, never composed. Pumps are contact actors, not bonds. The bond reading survives only for the flux as a flow (F3). |
| Draft called 4.5 PgC per year a universal ceiling | **Corrected.** It is one model-study threshold under specific pathways (Terhaar 2024), a `specified` objective, not a figure constant. |
| Draft treated fCO2 product versus GOBM spread as noise to be averaged | **Retracted.** Fig 4 :30 and Fig 2 :40 make it the measured gap and one-pool warning. It is the live signal. |
| Draft said the framework "cannot name the structure" by analogy to the exemplar | **Narrowed.** The figures README's "shape, not a name" governs a *missing* primitive. Here the capacity is a derived comparison, not a primitive; what is refused is the number, not every name. |
| F7 (no last room) | **Canonically confirmed.** The README has a section titled "This is not a Theory of Everything - and that is the point"; Fig 7 names "the limit: no last room". |
| F11 (shape not number) | **Canonically confirmed.** "a shape, not a name" and "you get a kind of thing, never the answer itself" (Fig 9 :32). |
| Apparent strain Fig 13 vs pathway thresholds | **Not strained.** Fig 13 governs the six primitives; a threshold is a ⋛ comparison over derived quantities. Different objects, re-census. |

### Round trip note

The condensation used in this folder is: per-slot residual, union compound, gradient flow, measurement anchor, objective before capacity, measured gap. Carried up and brought down to the concrete literature, three constraints drop out in a naive retelling: the sign reversal between slots, the second-order cascade, and the pathway dependence of the threshold. They are recorded here rather than smoothed over. `11_audit.md` measures this gap in detail.

### Updated verdict

The shape survives. The number does not come from the figures. Every finding is `general` or `specified`, none `grounded`. Strains after re-census: **one named and live**, the operand type of the threshold comparison when applied to an uptake capacity (a rate) rather than two bare quantities. The Operators table defines ⋛ as "a threshold relation between two quantities"; whether a capacity rate counts as a quantity at that level needs an instrument, not an argument. It is recorded, not hidden.
