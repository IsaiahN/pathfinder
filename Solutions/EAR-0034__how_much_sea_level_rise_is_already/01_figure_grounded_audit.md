# Figure-grounded audit: how much sea-level rise is already committed?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap* (opened 2026-11-22): "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post" but "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, cited as `Fig N :line`), `FIGURES_README_canonical.md`, `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, `60_FIGURES_AS_METALAWS.md`, the exemplar `QMGR-0037`, the completed sibling `EAR-0027`, and the public URLs in `10_source_ledger.csv`, all opened 2026-11-22.

---

## 0. The claim under audit

> How much sea-level rise is already committed because ice sheets respond slowly?

The question is stated as a request for one number. The audit tests whether the figures license a number or only a shape. The bound written before the run (Formula step "Direction") is: a per-slot, definition-conditioned residual against measurements, with a named horizon, a named forcing definition and a named instrument. Everything below tests that bound. The question is a real one about a real physical delay, but "how much" is not yet an object the loop can measure until its horizon and forcing definition are bound as ordinary terms.

---

## 1. Residual in effect terms

**R = |Γ(b,a) - o'| per slot s.** Γ is the projection frame (ice-sheet models, emulators, IPCC assessments and paleo-constrained commitment studies). o' is what the instruments and the paleo archive actually return (satellite altimetry, GRACE and GRACE-FO mass, tide gauges, raised shorelines and sediment cores). The slots are the individual contributors (thermal expansion, glaciers, Greenland surface mass balance and dynamic loss, Antarctic marine sectors, land-water storage) and the coastal regions that receive the regional fingerprint. The residual is not one global scalar.

- **Arity:** several conditions. Slow deep-ocean thermal uptake, Greenland surface-mass-balance loss, Antarctic marine ice-sheet dynamics, glacier response time and land-water storage each work on a different subset and on a different timescale. This is a **union compound** (Fig 9), not one hard question.
- **Symmetry:** strongly asymmetric. Ice-sheet loss has hysteresis: the world-source record reports a threshold of irreversibility linked to ice-sheet size, with about 3 to 3.5 m of Greenland sea-level loss beyond which the ice sheet does not regrow (IPCC AR6 WG1 Ch9, opened 2026-11-22). A symmetric join would misrepresent a one-way commitment.
- **Scale:** years to tens of millennia, from one grounding line to the global mean. Slot indexing is load bearing because the regional signal differs in sign from the global mean in places, and because the future coast, not the global mean, is what a decision touches.

Fig 1 :23: "The ground enters as the only metric." The ground here is the future observed sea level and the paleo record, not the model ensemble.

---

## 2. Domain census (before choosing any figure line)

One line per domain: actors, currency, anchor. A domain without a nameable anchor is not a domain yet.

| # | domain | actors | currency | anchor | type |
|---|---|---|---|---|---|
| 1 | the ice-and-ocean ground | Greenland and Antarctic ice sheets, marine-based sectors, ice shelves, grounding lines, ocean heat, bedrock, gravity/rotation/deformation, isostasy | ice mass (Gt), sea-level equivalent (m SLE), response time (years), irreversible threshold | observations (altimetry, GRACE, tide gauges) and paleo sea-level reconstructions; physics of ice flow and ocean heat uptake | union compound of slow responses |
| 2 | the projection and assessment frame | ice-sheet models (ISMIP6 lineage), emulators, IPCC AR6 WG1 Ch9, paleo-constrained commitment studies | committed GMSL per degree of warming, conditional ranges, supplied horizon | the ground in domain 1, which this frame must range against | a frame, not an anchor |
| 3 | the definition and convention frame | "commitment", "zero emissions commitment", "constant warming commitment", "irreversible", "threshold", horizon, reference period | the meaning of the quantity | an operational definition, which is a convention and has no truth value | convention, not a ground |
| 4 | the verification and outreach frame | expert readers, venue editors, reviewers | agreement and residual | the ground, never agreement | checking arrangement |

**Partition or union:** union. The slow contributors overlap and compound: cutting emissions now clears much of the future thermal and glacier slot but leaves the marine Antarctic dynamic slot bound, and a threshold in one slot changes the meaning of the others. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57-58: "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."

**Dependency order (Fig 3):** bind the objective first (domain 3: horizon, forcing definition, contributor), then perceive the per-slot residual (domain 1), then acquire vocabulary for what each slot affords, then plan and carry (domain 2 and 4). The chain most likely breaks at link 3, the objective, because "how much" has no meaning until a horizon and a forcing definition are fixed. Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."

**Strain test applied during the census:** Fig 13 :76 gives "A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is." The regional sea-level fingerprint (a gradient over space) and the committed multidecadal-to-millennial trend (a gradient over time) are two terms, not one. This is not a strain; it is the census result. A committed amount is a comparison at a threshold over derived quantities, not a seventh primitive, so Fig 13 :115 holds: "The set is closed. The arrangements are not. That gap is why import exists."

---

## 3. Figure census (verbatim, before concluding)

| figure | verbatim line | bearing | verdict |
|---|---|---|---|
| 1 The Agent | Fig 1 :19 "The residual is indexed by object slot, not aggregated." | a global number is the wrong slot | governs F1 |
| 1 The Agent | Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." | averaging hides which contributor and which coast carry the live signal | governs F1 |
| 1 The Agent | Fig 1 :23 "The ground enters as the only metric." | observations and paleo, not ensembles, are the metric | governs F4 |
| 2 The Ground | Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." | the future observed sea level is the anchor | governs F4 |
| 2 The Ground | Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." | agreeing models are not corroboration | governs F4, F7 |
| 2 The Ground | Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool" | shared CMIP and ISMIP ancestry is one witness | governs F4 |
| 2 The Ground | Fig 2 :45 "Frames range against the ground. They do not negotiate with it." | assessments range against observation | governs F4 |
| 3 Dependency | Fig 3 :19 "Optimising a link that already works cannot rescue one that does not." | undefined horizon and forcing is the break | governs F3 |
| 3 Dependency | Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." | a commitment without a metric is unassessed | governs F3, F6 |
| 4 Membrane | Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." | projection-to-observation gap must be measured | governs F8 |
| 5 Mint | Fig 5 :21 "the gap has real mass somewhere" | support guard before any commitment term | governs F3 |
| 6 Closure | Fig 6 :32 "An instrument is not built from a description. It is improved from a worse instrument already returning something." | extend the observing network, do not imagine a perfect sensor | governs F6 |
| 7 Room Chain | Fig 7 :13 "same closure, handed along; agreement compounds, evidence does not" | handed-along model generations add no evidence | governs F7 |
| 8 Union | Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." | more ensembles do not move the wall | governs F7 |
| 8 Union | Fig 8 :39 "So a search that finds nothing is never a proof of absence." | an unfound mechanism is not proven absent | governs F11 |
| 8 Union | Fig 8 :50-52 "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them" | imported magnitudes need provenance | governs F9, F11 |
| 9 Leave / Arrive | Fig 9 :4-5 "are not one hard question but several well-formed ones. Split it rather than search." | union compound, split first | governs F2 |
| 9 Leave / Arrive | Fig 9 :27-28 "describe it before you go looking, or any frame you pick will seem to fit" | residual before frame | governs F2, F4 |
| 9 Leave / Arrive | Fig 9 :32 "you get a kind of thing, never the answer itself" | shape, not number | governs F11 |
| 9 Leave / Arrive | Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." | unbundle the contributors | governs F2 |
| 9 Leave / Arrive | Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." | confidence classes and scenario labels are filters | governs F10 |
| 10 Ground Maintainer | Fig 10 :24 "the ground does not decay, the channel does" | observing-channel drift is not ocean change | governs F6 |
| 10 Ground Maintainer | Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." | send the residual, not the framework | governs outreach |
| 10 Ground Maintainer | Fig 10 :52 "Bring a characterised residual, never the source." | stage 1 before stage 2 | governs outreach |
| 11 Habitat | Fig 11 :43 "The habitat is enumerated, never composed." | list the contact web of ice loss | governs F8 |
| 11 Habitat | Fig 11 :52-53 "first-order enumeration, second-order effect, and the residual that mattered was three steps out." | cascades can reverse a first-order reading | governs F8 |
| 12 Bond | Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it." | a settled contributor becomes an operand at the next level | governs `06_isomers_and_order.md` |
| 12 Bond | Fig 12 :119 "catalyst. A part that survives its own use." | the ice sheets are persisting parts, not one-off melt | governs F5 |
| 12 Bond | Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." | irreversibility is a loop sign, not a new primitive | governs F5 |
| 12 Bond | Fig 12 :123 "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." | the slow contributors share a functional group, not identity | governs `06` |
| 13 Minimum Set | Fig 13 :74 "Everything else is a composition across the two kinds, never within one." | composition crosses kinds | governs F5 |
| 13 Minimum Set | Fig 13 :75 "Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state." | a regional height is not a direct state-state bond | governs F5 |
| 13 Minimum Set | Fig 13 :76 "A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is." | spatial fingerprint and temporal commitment are distinct | governs F5 |
| 13 Minimum Set | Fig 13 :115 "The set is closed. The arrangements are not. That gap is why import exists." | a commitment is an arrangement, not a seventh primitive | governs F5, F11 |
| 13 Minimum Set | Fig 13 :134 "Unreachable is a verdict here, not a silence" | the number is a verdict of unreachability | governs F11 |

Every quotation above was reopened character by character in `03-FIGURES_TEXT.md` before use. None came from a summary. Supporting non-figure primaries: the Operators table defines ⋛ as "a threshold relation between two quantities" (Operators table :49) and gives the test "is it about which is larger, rather than both being present? Yes." (:51); the Symbols table states "R is measured per slot, never as a single global number." (Symbols table :43).

---

## 4. Findings F1 to F11

Each finding carries a mode and a refuter. Verdicts stay per domain; they are never averaged.

### F1 : The single global number is the wrong slot (decisive for the question's form)

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

A single "how much is already committed" collapses the per-contributor and per-region residuals. The live signal in the assessment is per slot: Greenland lost 4890 Gt over 1992 to 2020 (13.5 mm SLE) while Antarctica lost 2670 Gt (7.4 mm SLE), with the ice-sheet contribution four times larger in 2010 to 2019 than in 1992 to 1999 (IPCC AR6 WG1 Ch9, opened 2026-11-22). The historical emissions commitment of 0.7 to 1.1 m by 2300 is a sum over slots with different response times (Ch9, section 9.6.3.5). A scalar cannot carry which slot is live, which is near a threshold, or which coast receives the fingerprint. Triangulated across Fig 1 and the Symbols table.

**Mode:** `general` (structural). **Refuter:** show a single global committed-SLR scalar that predicts per-contributor and per-region residual trends with no loss of sign or rank. **Domain:** 1.

### F2 : It is a union compound, not one hard question

Fig 9 :4-5: "are not one hard question but several well-formed ones. Split it rather than search." Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."

Thermal expansion, glaciers, Greenland, Antarctic dynamics and land water are overlapping conditions with different currencies and time constants. Levermann et al. (2013, PNAS, opened 2026-11-22) combine four components precisely because combining paleo-evidence with process models is needed to constrain the total; the components do not reduce to one variable. One lever does not clear a compound: a zero-emissions pathway still leaves the deep-ocean and marine-ice slots bound.

**Mode:** `general`. **Refuter:** show the slow contributors reduce to one variable under one monotonic law across all horizons and all forcing definitions. **Domain:** 1.

### F3 : "How much" is an objective, and the chain breaks if it is undefined

Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." Fig 5 :21: "the gap has real mass somewhere"

"Already committed" has no answer until "committed" is given a forcing definition (zero emissions? constant present warming? pledged emissions?), a horizon (2100, 2300, 2000 years, 10,000 years) and a contributor. These are different terms. IPCC AR6 Ch9 reports a historical-emissions commitment of 0.7 to 1.1 m up to 2300 (Nauels et al. 2019, cited in Ch9) and separately a 2000-year commitment of 2 to 6 m at 2 °C peak warming, and about 19 to 22 m at 5 °C (SPM B.5.4). These are not competing answers to one question; they are answers to different questions. A model result becomes a commitment only when the objective is bound.

**Mode:** `specified`. **Refuter:** produce a committed amount that is invariant to horizon and forcing definition, with a stated instrument that would move it. **Domain:** 3 and 2.

### F4 : The anchor is measurement and paleo, not model agreement

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool" Fig 2 :45: "Frames range against the ground. They do not negotiate with it."

Ice-sheet models in ISMIP6, emulators and assessment ranges share boundary conditions, forcing products and calibration data. Their agreement is one pool talking. The ground is the observed mass loss, the observed regional sea level and the paleo sea-level highstands that constrain sensitivity. Levermann et al. (2013) explicitly combine physical models with paleo-evidence and call the paleo agreement "an independent validation"; that independence is the point, not the model count. Triangulated across four Fig 2 lines and the world source.

**Mode:** `specified`. **Refuter:** exhibit an ensemble whose mean has been moved by an independent paleo or altimetry constraint and that thereby moves the measurement, rather than ranging against it. **Domain:** 2 and 4.

### F5 : Slowness is a cross-kind composition, and spatial and temporal gradients are different terms

Fig 13 :75: "Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state." Fig 13 :76: "A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is." Fig 13 :74: "Everything else is a composition across the two kinds, never within one."

A regional sea-level height is not a bare state-to-state bond. It is a composition: ocean mass and density (states) arranged by gradients over space (fingerprint, ocean dynamics) and over time (the committed trend), with a structure mediating. Gravity, rotation and deformation shift the pattern: IPCC AR6 Ch9 Box 9.1 reports a nearby relative sea-level fall within about 2000 km of a mass source and a rise above the global average beyond about 7000 km, plus second-order rotational effects. Treating the fingerprint and the time trend as one term loses exactly the information a coastal decision needs. Irreversibility is a loop sign (Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction.") and a persisting part (Fig 12 :119: "catalyst. A part that survives its own use."), not a new primitive (Fig 13 :115).

**Mode:** `specified`. **Refuter:** show a regional sea-level pattern is a direct state-state bond, or that the spatial fingerprint and the temporal commitment are one term under the six-term set. **Domain:** 1.

### F6 : The observing channel is the instrument and it already returns something

Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something." Fig 10 :24: "the ground does not decay, the channel does"

The commitment question is answered by extending instruments that already register: satellite altimetry, GRACE and GRACE-FO mass, the tide-gauge network, raised-shoreline and sediment-core paleo records. NASA's Sea Level Change Portal (opened 2026-11-22) lists "Global Mean Sea Level", "Ocean Mass", "Steric Height", "Antarctica" and "Greenland" as live vital signs and an IPCC AR6 Sea Level Projection Tool, so the components are already separately observed. Drift, sparse sampling, datum choices and short records are channel failures, not changes in the ice sheets. Triangulated across Fig 6, Fig 10 and the world source.

**Mode:** `specified`. **Refuter:** specify from a description alone a proto-instrument that has never registered anything anywhere and show it constrains the commitment. **Domain:** 3.

### F7 : No last room: handing a projection along adds no evidence

Fig 7 :13: "same closure, handed along; agreement compounds, evidence does not" Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."

An assessment passed from model generation to model generation without a new observation is one long room. The 2013 commitment literature became informative because it brought paleo archives into contact with process models, not because one paper agreed with the next. Palmer (2024, Earth's Future, read via the public search index) notes that "limited understanding of ice instability processes remains a key scientific challenge and improved observational and modeling capability are critical to reducing uncertainties", which is the same selection-against-residual instruction. Room agreement is variation; selection against the residual is where the ground votes.

**Mode:** `general`. **Refuter:** exhibit a terminal assessment generation after which no further measurement could change the committed amount. **Domain:** 2 and 4.

### F8 : Enumerate the habitat; second-order effects can move the answer

Fig 11 :43: "The habitat is enumerated, never composed." Fig 11 :44: "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering." Fig 11 :52-53: "first-order enumeration, second-order effect, and the residual that mattered was three steps out."

The contact web of committed ice loss includes ocean heat in shelf cavities, grounding-line retreat, ice-shelf buttressing, bedrock rebound, gravitational fingerprint, Earth rotation, isostatic adjustment, tides, storm surge, wave setup, extreme-water-level frequency and the exposure of coastal infrastructure. It is read off the world, not composed from the six terms. First-order reading (ice mass loss raises the global mean) misses the second-order result (near-field relative sea level can fall while far-field rises, and a 100-year extreme becomes an annual event at more than half of tide gauges by 2100, IPCC AR6 SPM C.2.5). An actor's valence is relative to the residual: Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries."

**Mode:** `specified`. **Refuter:** show a direct-contact-only habitat predicts the observed regional relative sea-level and extreme-flooding pattern. **Domain:** 1.

### F9 : Imported magnitudes need provenance, convergent derivation needs a record

Fig 8 :50-52: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"

The numbers a reader wants (about 2.3 m per °C over 2000 years, Levermann et al. 2013; 0.7 to 1.1 m from historical emissions to 2300, Nauels et al. 2019; 2 to 6 m at 2 °C over 2000 years, IPCC AR6) are world imports into the framework's shape. They are not figure derivations. Report them with author, venue, year, horizon and forcing definition, or not at all. The figure side supplies the container; the world side supplies the magnitude. Treating the two as one derivation is the flat-form error.

**Mode:** `general`. **Refuter:** derive a numeric committed amount from a figure line with no imported measurement. **Domain:** all.

### F10 : Filters are not witnesses

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

A confidence class (high, medium, low), an emissions scenario label, a tier, an ensemble mean or a "2.3 m per °C" headline allocates attention and budget. None of them settles the quantity. The paleo constraints in Levermann et al. (2013) are a witness because they are a different evidence source; a larger CMIP ensemble is a budget decision unless the new models draw on different evidence. Strauss (2013, PNAS commentary, opened 2026-11-22) turns the commitment into a rate: "we have already committed to a long-term future sea level >1.3 or 1.9 m higher than today and are adding about 0.32 m/decade to the total: 10 times the rate of observed contemporary sea-level rise". That is a filter-derived number from a TCRE assumption, not an independent anchor, and it is labelled as such.

**Mode:** `general`. **Refuter:** show a budget filter that changes the ground reading without changing contact with measurements. **Domain:** 4.

### F11 : The framework returns a shape, not the number

Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 8 :39: "So a search that finds nothing is never a proof of absence." Fig 13 :134: "Unreachable is a verdict here, not a silence"

No figure line yields a committed-SLR value in metres. What survives is the form of any admissible answer: per contributor and per coast, unbundled from a union, with a horizon and forcing definition bound, a measured projection-to-observation gap, an enumerated contact web and an instrument that could move it. Fig 13 :138-139: "narrowing gets you close while the ground decides". The honest stop is `gap` on the number, reported as a verdict rather than as silence.

**Mode:** `general`. **Refuter:** derive a committed amount in metres from a figure line with no imported measurement. **Domain:** all.

---

## 5. Pre-registered refuter (written before the conclusion)

Per the seat-reasoning discipline, a falsifier written before the run is a design instrument. The shape claim is refuted if **any** of the following holds:

1. A single global committed-SLR scalar predicts per-contributor and per-region residual trends with no loss of sign or rank (breaks F1).
2. Thermal expansion, glaciers, Greenland and Antarctic dynamic response reduce to one variable under one monotonic law across all horizons and forcing definitions (breaks F2).
3. A committed amount is produced that is invariant to horizon and forcing definition, with a stated instrument that would move it (breaks F3).
4. A model ensemble moves the measurement rather than ranging against it, so the anchor updates (breaks F4).
5. A measurement shows the regional fingerprint is a direct state-state bond, or that spatial and temporal gradients are the same term under the six-term set (breaks F5).
6. A first-order-only contact list predicts the observed regional relative sea-level and extreme-flooding pattern (breaks F8).
7. A numeric committed amount is derived from a figure line with no imported measurement (breaks F9 and F11).

If any fires, the shape is wrong and the answer is withdrawn. Until one is run, nothing here may be labelled `grounded`.

---

## 6. Recommendation

1. Refuse the question's form as written. Report a per-slot, definition-conditioned structure, not one number (F1, F2).
2. Bind the objective before the amount: horizon, forcing definition, contributor, instrument (F3).
3. Treat observation and paleo as anchor and model agreement as a filter (F4, F7, F10).
4. Keep the spatial fingerprint and the temporal commitment as separate terms (F5).
5. Enumerate the contact web and report second-order cascades (F8).
6. Report imported magnitudes with provenance and never as figure derivations (F9).
7. Measure the round-trip gap between projection and observation (worked in `11_audit.md`).
8. State the mode on every claim and send the refuter before the links (Fig 10 :52 "Bring a characterised residual, never the source.").

---

## 7. Canonical usage check

Two local sources govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw"; and the limit: the framework says "what a missing thing would have to look like (a shape, not a name)", then stops at the limit of the instruments and records the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the seat reads the ground; it does not ask the anchor to decide what the figures already settle. Design questions are answered by derivation, not escalation.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| Draft read "how much" as requesting one global number | **Retracted at form level.** Fig 1 :19 and :22 make the scalar the wrong slot. The answer is a per-slot structure. |
| Draft mapped ice sheets and ocean onto Gradient and Spectrum one to one | **Narrowed, not kept.** Fig 11 :43 says the habitat is enumerated, never composed. Ice shelves, grounding lines and GRD are contact actors, not bonds. The bond reading survives only for the gradient-driven flow (F5). |
| Draft treated 2.3 m per °C as a universal constant | **Corrected.** It is one paleo-and-model conditional slope under a 2000-year horizon (Levermann et al. 2013), a `specified`, provenance-bearing world import, not a figure constant. |
| Draft treated CMIP and ISMIP agreement as corroboration | **Retracted.** Fig 2 :40 makes shared-pool agreement one witness, not several. |
| Draft said the framework "cannot name" the slow mechanisms by analogy to the exemplar | **Narrowed.** The README's "shape, not a name" governs a *missing* primitive. The mechanisms are provenanced world bindings onto held atoms; what is refused is the derived number, not every name. |
| Apparent strain Fig 13 versus treating a committed rise as a quantity | **Not strained.** Fig 13 governs the six primitives; a commitment is a ⋛ comparison over derived quantities. Different objects, re-census. |
| Apparent strain Fig 1 :13 "global R near zero" versus rising GMSL | **Not strained.** R is the error signal (Fig 1 :23), not physical height. Observed GMSL rise is o'; the live residual is the per-slot projection-to-observation gap. |
| F11 (shape not number) | **Canonically confirmed.** "a shape, not a name" and "you get a kind of thing, never the answer itself" (Fig 9 :32). |

### Round trip note

The condensation used in this folder is: per-slot residual, union compound, objective before amount, gradient separation, measurement anchor, enumerated habitat, provenanced imports. Carried up and brought down to the concrete literature, four constraints drop out in a naive retelling: the regional sign structure (near-field fall versus far-field rise), the horizon dependence (2300 versus 2000 versus 10,000 years), the forcing-definition dependence (zero emissions versus constant warming), and the provenance of the magnitudes. They are recorded here rather than smoothed over. `11_audit.md` measures this gap in detail.

### Updated verdict

The shape survives. The number does not come from the figures. Every finding is `general` or `specified`, none `grounded`, and the numeric field is an explicit `gap`. Strains after re-census: **one named and live**, the operand type of the comparison bond when applied to a committed amount over derived quantities, since the Operators table defines ⋛ as "a threshold relation between two quantities" and whether a committed volume counts as a quantity at that level needs an instrument, not an argument. It is recorded, not hidden.
