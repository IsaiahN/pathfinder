# Figure-grounded audit: EAR-0012, how climate sensitivity changes as feedbacks respond

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, read 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too (intelligence is essentially arrangement). However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the Earth-system question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) − o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the climate modelling frame's belief: parameterizations, priors on cloud and aerosol behaviour, tuned historical baselines.
- **a** is the action: an imposed forcing, an emissions pathway, a perturbation experiment (abrupt 2xCO2, 1% per year CO2).
- **Γ(b,a)** is what the model predicts: top-of-atmosphere net flux ΔN, global surface air temperature ΔT, ocean heat uptake, ice extent, carbon sink fractions.
- **o′** is what the world returns: CERES fluxes, Argo ocean heat content, surface temperature records, ice extent, atmospheric CO2 growth rate, paleo proxies.
- **s** is the slot: a feedback process (ice albedo, low cloud, water vapour and lapse rate, ocean heat uptake, land carbon sink, ocean carbon sink, permafrost) at a given state and time scale. R is indexed per slot and per state, never aggregated into one global ECS number.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"a global R near zero with one live slot residual is a legal state"** (Fig 1 :13)

The phenomenon to explain is not the *level* of climate sensitivity but **how the per-slot residual moves as the slots change state**. Call it `ΔR_s(state)`. Observed: the net feedback parameter becomes less negative as temperature rises, cloud feedback is positive and the largest uncertainty, ice-sheet feedback turns positive on millennial scales, land and ocean sinks weaken in high-emissions scenarios. A frame that reports one scalar sensitivity and a single uncertainty band has a residual here.

State the residual as: *why does the gap between what the modelling frame predicts for the top-of-atmosphere energy balance and what the instruments return change as ice, clouds, forests and oceans move into states the frame did not hold before?* This is an effect description. It names no theory, no "tipping point", no "runaway", no "feedback strength" as a measured value. Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a vector of per-slot signed feedback strengths with their state and time-scale spans, an ordered cascade across the slots, a threshold relation on each slot's control parameter, and an instrument that discriminates a genuine state-dependence from an aggregation artifact. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 5 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* The measured top-of-atmosphere energy imbalance, ocean heat content and temperature record are anchors: they do not move because a model ensemble votes a different ECS. Model agreement, expert elicitation and assessed ranges are instruments and conventions. Fig 2 :30: *"you push on it, it is not an anchor."*

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a multi-place relation: model library Γ, forcing action a, observed flux and temperature o′, indexed by slot s and ordered by time and by state. It carries an **ordered** bond (`→`, *"A then B; B needs A to have happened"*, Operators table :31) because the change of state precedes the change of feedback, and a **comparison** bond (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87) because "sensitivity" is a forcing-to-response ratio, not a conjunction. It is not symmetric: forcing and response are not interchangeable, and the response does not move the measured flux by opinion.
- **Symmetry.** "Amplifying" versus "damping" is a threshold relative to the base Planck response, not an absolute quantity (Fig 12 :85-89). The sign of a feedback loop is a comparison of magnitudes, not a symmetric join.
- **Scale.** Four scales are in view: the instantaneous radiative step, the multi-decadal pattern-effect step, the centennial carbon-cycle step, and the millennial ice-sheet step. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30). A per-slot residual at one scale does not transfer as a recording to another (IPCC AR6 WG1 Ch7: *"feedbacks can vary over different time scales and with climate state"*).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 Energy-budget response** | surface, atmosphere, greenhouse gases, radiation | W m-2, K | yes: measured TOA flux and surface temperature | admitted |
| **D2 Physical feedback habitats** | sea ice, ice sheets, low clouds, water vapour, Southern Ocean | albedo, flux, heat uptake | yes: CERES, Argo, ice extent observations | admitted |
| **D3 Biogeochemical feedback habitats** | forests, soil, permafrost, ocean carbon sink, plankton | carbon flux, CO2/CH4 concentration | yes: atmospheric growth rate, flux towers, ocean carbon inventory | admitted |
| **D4 Model and verification frame** | ESMs, parameterizations, ensembles, expert elicitation | ECS/TCR estimates, ensemble spread | yes but external: the measured energy budget and paleo proxies; the frame's own agreement is not the anchor | admitted, anchor outside the frame |
| **X1 Climate sensitivity as a free-floating scalar constant** | a number | K per doubling | no anchor independent of the forcing-response pair; it is a comparison, not an entity | reframed as a metric (⋛), not a domain |
| **X2 "The tipping point" as a standalone property** | a threshold | critical control value | already inside D2/D3 as a comparison on a slot's control parameter; no independent anchor | absorbed into D2/D3 |

X1 fails the anchor test as an entity and is reframed as the comparison bond it actually is. This is a structural exclusion, not a claim that ECS is useless: as a *metric* it is well defined (Formula "Direction": make the sought-for shape an ordinary term). X2 is not assumed: the source question itself notes that tipping points vary across systems, so it is held as a ⋛ relation until a slot's control parameter is named.

### 1.3 Partition or union

D1 and D2 overlap: clouds are both a radiative response and a physical habitat. D2 and D3 overlap: the ocean is both a heat-uptake slot and a carbon slot. D3 and D4 overlap: models carry the carbon cycle inside their libraries. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: (C1) the physical response loop, in which a state change alters albedo, cloud radiative effect or ocean heat uptake and the residual moves; (C2) the biogeochemical response loop, in which a state change alters land and ocean carbon uptake and therefore the forcing itself. A slot failing only C1 (low-cloud regime change) and a slot failing only C2 (permafrost carbon release) are not different degrees of one failure; they are different compounds and need different instruments.

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the slot's flux be observed? CERES, Argo, flux towers) → 2 vocabulary (does the model have terms for what the changed state affords? a low-cloud regime, abrupt thaw, a shifted Southern Ocean) → 3 objective (can we say what counts as progress: a per-slot residual that stops trending down and a threshold that is located?) → 4 planning → 5 learn and carry. IPCC AR6 WG1 Ch7 supplies the world-side reading of the middle link: *"there is currently insufficient evidence to quantify a likely range of the magnitude of future changes to current climate feedbacks."* The link with no instrument is the one that breaks.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not its numeric value |
| 2 The Ground | measurement is a named anchor; independence vs common pool | governs the anchor and the witness rule for ensembles |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across scales; methods up, head starts down; R_T | governs scale transfer across time scales |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs when a new feedback term can be admitted at all |
| 6 Closure / Reachability | import is the only operator that moves the wall; instruments improved from worse ones | governs value binding from the measurement frame |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs ensemble agreement and model diversity |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and source rules |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; keep anchor reachable | governs stale parameterizations and pooled readings |
| 11 The Habitat | contact cascades; enumerate actors, conditions, relations | decisive for D2 and D3 |
| 12 The Bond | cycle, catalyst, functional group, isomer, comparison | governs why a feedback amplifies and why tipping is ⋛ |
| 13 Minimum Viable Set | set closed, arrangements not; remainder compounds to chaos | governs the honest stop and amplification |
| Operators / Symbols | ⋛ threshold relation; R per slot; ground is the anchor | govern the metric reading and the stop |

Strain test applied during this census: an early attempt to apply Fig 13's six-term physical substrate directly to "the carbon sink" only fit by calling a carbon flux a kind of energy and a food web a kind of network. That is a strain, so Fig 13 does **not** govern the carbon-cycle slots as primitives. Re-census sent Fig 13 to the amplification and honest-stop roles only (section 7, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about the Earth system, `grounded` only if settled by a measurement. None is `grounded`.

### F1: The residual is per slot, and the aggregate hides the live signal

**Mode: `general` with a `specified` consequence for reporting. Domains D1, D2, D3. Status: triangulated (Fig 1 and Fig 7, low overlap: per-slot indexing vs room agreement).**

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"a global R near zero with one live slot residual is a legal state"** (Fig 1 :13)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)

A single global sensitivity number is a summary whose residual may be near zero while the cloud slot carries a live, growing residual. The world confirms the shape at low overlap: IPCC AR6 WG1 Ch7 reports *"the cloud feedback remains the largest contribution to overall uncertainty"* and *"Radiative feedbacks, particularly from clouds, are expected to become less negative (more amplifying) on multi-decadal time scales as the spatial pattern of surface warming evolves."* The assessed best estimate *"ECS is 3°C, the likely range is 2.5°C to 4°C"* is a convention-level summary, not a per-slot report.

**Refuter:** an aggregated global metric that predicts, prospectively and per named slot, which slot's residual will move next and by how much, with the prediction settled by CERES or Argo. If one exists, F1's methodological consequence is false.

### F2: A feedback is a cycle whose sign decides whether it closes

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 12 and Fig 13, low overlap: bond structures vs substrate remainder).**

> **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** (Fig 12 :121)
> **"a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise."** (Fig 13 :31-32)
> **"The residual of the turn just closed is what the next turn composes against, so no two passes begin from the same place."** (Fig 13 :87)

Ice: Lenton et al. 2008 report *"As sea-ice melts, it exposes a much darker ocean surface, which absorbs more radiation–amplifying the warming. Energy-balance models suggest that this ice-albedo positive feedback can give rise to multiple stable states of sea-ice"*. Clouds: IPCC AR6 WG1 Ch7: *"The net effect of changes in clouds in response to global warming is to amplify human-induced warming, that is, the net cloud feedback is positive (high confidence)."* Forests: Lenton et al. on the Amazon: *"A large fraction of precipitation in the Amazon basin is recycled"* so simulations *"suggest the system may exhibit bistability"*. Oceans: IPCC AR6 WG1 Ch7 on the ice-sheet term: *"on long time scales the ice-sheet feedback parameter is very likely positive, promoting additional warming on millennial time scales."*

These are four instances of the same structural object: an output re-entering as input with a sign. The figures say what the object is; the world sources say which slots currently realize it. The distinction matters because a positive feedback is not a new primitive and not a "runaway" verdict: it is a cycle whose sign has been measured at a stated state.

**Refuter:** a documented feedback loop whose output re-enters as input and whose measured sign fails to close or amplify as the sign predicts, across a stated state range; or a chain that closes by construction. If found, F2's structural reading is false.

### F3: Contact cascades reach three steps out, so the habitat must be enumerated

**Mode: `general` for the enumeration rule, `specified` for the three-step claim. Domains D2, D3. Status: triangulated (Fig 11 and the resilience literature, low overlap).**

> **"The habitat is enumerated, never composed."** (Fig 11 :43)
> **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."** (Fig 11 :44)
> **"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."** (Fig 11 :52)
> **"An actor's valence is relative to the residual, not a property it carries."** (Fig 11 :49)

A warming-first enumeration stops at direct effects (ice melts, clouds shift). The residual that matters is three steps out: ice loss changes ocean stratification and circulation, which changes regional rainfall and forest stress, which changes the land carbon sink, which changes the forcing that drives sensitivity. Lenton et al. enumerate exactly this coupling across the Atlantic thermohaline circulation, Amazon dieback, Greenland and West Antarctic ice sheets. The resilience literature supplies a low-overlap witness: MathisonSlee et al. 2022 report Proposition 3 as *"Cross-scale interactions critically determine the form of the subsequent adaptive cycle at any one focal scale"* and Proposition 12 as *"Social-ecological systems have multiple interacting thresholds, giving rise to multiple pairs of alternate regimes, only a few of which are feasible."*

Valence flips with the residual: the same forest is a carbon sink under one residual and a carbon source under another. IPCC AR6 WG1 Ch5: *"Beyond 2100, land and ocean may transition from being a carbon sink to a source under either very high emissions or net negative emissions scenarios, but for different reasons."* That is Fig 11 :49 observed in the carbon cycle.

**Refuter:** a measured change in climate sensitivity fully accounted for by first-order direct effects, with no detectable second- or third-order cascade contribution after a habitat enumerated to three steps. If found, F3's cascade claim weakens to `general`.

### F4: The anchor is the measured energy budget, not ensemble agreement

**Mode: `general` for the anchor rule, `specified` for the ensemble bearing. Domain D4. Status: triangulated (Fig 2, IPCC Ch7, and the EGUsphere listing, three distinct frames).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."** (Fig 2 :29)
> **"Independence, between two frames, is how little they draw on the same evidence."** (Fig 2 :31)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)
> **"Buy independence in proportion to the cost of being wrong."** (Fig 2 :42)

CMIP6 models share code, parameterization families, tuning targets and observational constraints. Their agreement is efficiently produced and therefore weak evidence for a verdict. IPCC AR6 WG1 Ch7 reports: *"On average, Coupled Model Intercomparison Project Phase 6 (CMIP6) models have higher mean ECS and TCR values than the Phase 5 (CMIP5) generation of models"* and *"some of the high-sensitivity CMIP6 models are less consistent with observed recent changes in global warming and with paleoclimate proxy data than models with ECS within the very likely range."* An EGUsphere preprint listing read this session states: *"Compensating biases can yield an apparently realistic net energy imbalance trend, meaning models may match observations for the wrong reasons."* That is the named failure: a frame matching a reading without contacting the source.

**Refuter:** a model ensemble whose agreement on a future feedback change is traced to genuinely independent evidence pools and is settled by a measurement that neither model can move. If shown, the downgrade of ensemble agreement to a filter is false for that case.

### F5: "Sensitivity changes" is a comparison changing its operands, not a constant changing value

**Mode: `specified`. Domain D1. Status: triangulated (Fig 12, Operators table, IPCC Ch7).**

> **"⋛ comparison"**, *"a threshold relation between two quantities"* (Fig 12 :87); Operators table :51: **"a goal is a comparison, which is why a vocabulary without it cannot state one"**
> **"Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state."** (Fig 13 :75)

Climate sensitivity is a ratio of forcing to response, hence a ⋛ comparison, not an entity with an anchor of its own (X1 in the census). IPCC AR6 WG1 Ch7 introduces *"an 'effective feedback parameter' that may be different from the equilibrium value of the feedback parameter governing ECS"* and states *"Due to the state-dependence of feedbacks, as evidenced from paleoclimate observations and from models, the net feedback parameter will increase (become less negative) as global temperature increases."* So when the question asks "how will climate sensitivity change", the effect being described is a change in the comparison's operands: forcing, pattern, time scale and response are different quantities at the later state.

**Refuter:** a measured forcing-response relation that is linear and state-invariant across the observed range and across time scales, with no pattern dependence and no scale dependence. That would make the effective/equilibrium distinction empty and F5 false.

### F6: Thresholds are comparisons on a control parameter, and the question is a union compound

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 9, Fig 12, Lenton, IPCC Ch5).**

> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)
> **"a threshold relation between two quantities"** (Fig 12 :87)

Lenton et al. define the object precisely: *"The term 'tipping point' commonly refers to a critical threshold at which a tiny perturbation can qualitatively alter the state or development of a system. Here we introduce the term 'tipping element' to describe large-scale components of the Earth system that may pass a tipping point."* They also record the honest limit: *"Many of the systems we consider do not yet have convincingly established tipping points."* IPCC AR6 WG1 Ch5: *"The response of biogeochemical cycles to the anthropogenic perturbation can be abrupt at regional scales, and irreversible on decadal to century time scales (high confidence). The probability of crossing uncertain regional thresholds (e.g., high severity fires, forest dieback) increases with climate change (high confidence)."*

The four named systems are not four versions of one threshold. Ice, clouds, forests and oceans have different control parameters, different observation times and different anchors, so the union must be unbundled before any lever is chosen (Fig 9 :54-57).

**Refuter:** a single intervention that prevents all four systems' threshold crossings and leaves no categorically different residue, with control parameters measured for each. That would collapse the union into a partition and falsify F6.

### F7: The break is usually at the vocabulary and objective link

**Mode: `specified`. Domain D4. Status: single-source for the "usually" claim (Fig 3), triangulated for the specific gap (Fig 3 and IPCC Ch7).**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

The modelling frame perceives the energy imbalance well (CERES, Argo) and can plan scenarios. What it lacks in several slots is terms for what the changed state affords and a per-slot objective: IPCC Ch7 states *"there is currently insufficient evidence to quantify a likely range of the magnitude of future changes to current climate feedbacks."* The highest-value instrument is therefore not another global-mean fit. It is a state-resolving observation that gives the frame a term for the new regime, for example a low-cloud regime discriminator or an abrupt-thaw detector.

**Refuter:** a documented case in which the modelling chain's failure is located at planning or at learning-and-carrying, with perception, vocabulary and objective links all measured as working. That falsifies "usually at the middle", though not the dependency ordering.

### F8: Keep the two loops separate and never average the verdicts

**Mode: `specified`. Domains all. Status: triangulated (Fig 9 and Fig 1, low overlap).**

The two conditions C1 (physical response maintained) and C2 (biogeochemical response maintained) have different instruments:

- A C1 failure shows up as a changed flux residual at a measured state: an amplified low-cloud feedback, a shifted pattern, a less negative net feedback parameter (Fig 1 :19, Fig 2 :29).
- A C2 failure shows up as a weakening sink and a changed airborne fraction: IPCC AR6 WG1 Ch5: *"Oceanic and terrestrial carbon sinks are projected to continue to grow with increasing atmospheric concentrations of CO2, but the fraction of emissions taken up by land and ocean is expected to decline as the CO2 concentration increases (high confidence)."*

A single lever, for example "reduce uncertainty in ECS", clears the region where only one condition holds and leaves the intersection standing (Fig 9 :55). F8 is the reason the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

**Refuter:** a single measurement programme that restores both conditions in both failure types with no categorically different residue left over. That would collapse the union.

### F9: A conflict from the world frame, and how it was resolved

**Mode: `general`. Status: figure-governed.**

IPCC AR6 WG1 Ch7 reports *"Radiative feedbacks, particularly from clouds, are expected to become less negative (more amplifying) on multi-decadal time scales"* while also reporting *"there is currently insufficient evidence to quantify a likely range of the magnitude of future changes to current climate feedbacks."* Read as a claim about a single scalar, these pull in different directions: the sign is known, the magnitude is not. A conflict between world statements sends the derivation back to the census; it never flips a figure verdict. Re-census R1 in section 7 resolves it: Fig 1 :19 and Fig 12 :87 govern per-slot comparisons and sign, while the magnitude of a future slot change is held as a `gap` until an instrument pays for it. Both statements survive at different scopes.

The Lenton elicitation method also gives a methodological warning that corroborates the witness rule: *"a general criticism is that expert beliefs carry subjective biases and, moreover, do not add to the body of scientific knowledge unless verified by data or theory."* Expert elicitation is a filter for budget, not a witness for the verdict (Fig 9 :60).

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per feedback slot, never a global average | general | Fig 1 :19, :22, :13 | figure-derived |
| The measured energy budget is the anchor, not agreement | general | Fig 2 :29, :35, :40 | figure-derived |
| A feedback is a cycle whose sign decides closure | specified | Fig 12 :121; Fig 13 :31-32 | triangulated F2 |
| Contact cascades reach two or three steps out | specified | Fig 11 :43, :44, :52 | triangulated F3 |
| Sensitivity is a comparison of forcing to response | specified | Fig 12 :87; Operators :51 | triangulated F5 |
| Thresholds are ⋛ relations on control parameters | specified | Fig 12 :87; Fig 9 :57 | triangulated F6 |
| The middle link is where the chain usually breaks | specified | Fig 3 :19, :24, :27, :29 | single-source F7 |
| The question is a union of two loops | general | Fig 9 :54, :55, :57 | figure-derived |
| Ensemble agreement is a filter, not a witness | general | Fig 7 :13, :35; Fig 2 :40 | figure-derived |
| The numeric future trajectory of each slot | not stated | none | gap: framework returns a shape, instruments return the value |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. An aggregated global sensitivity metric predicts, prospectively and per named slot, which slot's residual will move next and by how much (breaks F1, Fig 1 :19-22).
2. A feedback loop whose output re-enters as input is measured with a sign that fails to close or amplify as predicted across a stated state range, or a chain closes by construction (breaks F2, Fig 12 :121).
3. A sensitivity change is fully accounted for by first-order direct effects, with no detectable second- or third-order cascade contribution after a three-step habitat enumeration (breaks F3, Fig 11 :52).
4. A model ensemble agreement on future feedback change is traced to independent evidence pools and settled by a measurement neither model can move (breaks F4, Fig 2 :40).
5. A forcing-response relation is measured as linear and state-invariant across the observed range and all time scales (breaks F5).
6. One intervention clears all four systems' thresholds and leaves no categorically different residue, with control parameters measured (breaks F6, Fig 9 :57).
7. Fig 13's six terms are derived from five, or a new primitive is composed inside the closure without import (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until one of these has been run and has failed to fire, and until a measurement has paid for the per-slot shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of climate sensitivity (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Report climate sensitivity as a vector of per-slot signed feedback strengths with state and time-scale spans, not as one number. A single global ECS is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Enumerate the contact cascade outward from each slot until it stops mattering (Fig 11 :43-44). Do not scope the habitat to direct ice, cloud, forest and ocean effects.
4. Keep the physical loop and the carbon-cycle loop separate in every report. They have different anchors and different instruments (Fig 9 :54-57).
5. Treat model agreement and expert elicitation as budget filters and as one witness each, never as the verdict (Fig 9 :60, Fig 2 :40).
6. Bind numeric values only as provenanced imports from the measurement frame, with source gate and shadow test (Fig 6 :23, Fig 8 :50-52). Do not present an assessed range as a figure derivation.
7. Stop at the shape. Do not name a single future ECS value or a single tipping threshold; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, `THE_FORMULA.md`, and the eight essays listed in `05_what_shape_means.md` (all fetched 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop. The numeric trajectory is exactly such a missing thing relative to the figure set.
- *The Recursive Self-Improvement Trap* confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13 six-term set to carbon-cycle slots | **Retracted, strain S1** | Only fit by renaming a carbon flux as energy and a food web as a network. Re-census: Fig 13 governs the physical substrate and amplification, not the carbon-cycle bindings |
| Treated the assessed ECS range as a figure result | **Retracted at record level** | It is a provenanced import from the measurement frame; the figures return a shape, not a value |
| Read climate sensitivity as an entity (X1) | **Reframed as a metric** | No independent anchor; it is the ⋛ comparison between forcing and response (Fig 12 :87) |
| Treated "tipping point" as a new primitive (X2) | **Absorbed into D2/D3** | A comparison on a control parameter, not a seventh term |
| Planned to call CMIP6 ensemble agreement corroboration | **Retracted as a witness, kept as a filter** | Fig 2 :31, :40; Fig 9 :60. Shared code and constraints are one evidence pool |
| Wanted to call F2 a `general` law of all climate feedbacks | **Narrowed to `specified`** | Structural claim about cycles; no ground measurement pays for the universal version here |
| Used Lenton's expert elicitation as an independent witness | **Narrowed to a method warning** | Elicitation is a filter, and Lenton's own paper records the bias criticism |
| F10 row "numeric future trajectory" | **Marked `gap`** | The essay's metamerism rule: a reading *"cannot comment on the source"*; what is owed is an instrument, not a figure-derived number |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Fig 1 and Fig 7 are two figures, but both come from one framework; triangulation here means low topical overlap, not independent evidence pools |

**Strains sent to the log:** S1 (Fig 13 applied to carbon-cycle slots), resolved by re-census; S2 (calling the IPCC assessed range both a verdict and a convention), resolved by Fig 2 :29-30 and Fig 6 :23: the measurement is the anchor, the assessed range is an instrument carrying provenance. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54-57 plus the Library of Babel bundle passage: it is a union of a physical response loop and a biogeochemical response loop, each with its own loop and instrument.
2. **What is the anchor?** The measured energy imbalance, ocean heat content and temperature record, named by Fig 2 :29. Not ensemble agreement, not an assessed range (Fig 1 :27).
3. **Is sensitivity a thing that changes value, or a comparison?** A comparison (Fig 12 :87). Its operands change with state and time scale, which is what the IPCC effective feedback parameter records.
4. **How do slots change?** Output re-enters as input; the sign of the loop decides whether it closes or amplifies (Fig 12 :121), and the remainder compounds through an amplifying chain into chaos (Fig 13 :31-32).
5. **What is missed by direct enumeration?** Two- and three-step cascades through circulation, rainfall, forest stress and carbon uptake (Fig 11 :43-52).
6. **Why does agreement not settle it?** Shared evidence pools, model families and tuning targets produce coherent drift (Fig 2 :40, Fig 7 :13). The ground votes between rooms, not inside them (Fig 7 :35).
7. **What can be said at the stop?** A shape: per-slot signed feedbacks, a cascade order, thresholds as comparisons, and named instruments. Not the numeric trajectory. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **climate sensitivity changes as a set of per-slot, state-dependent comparisons, not as a single constant acquiring a new value. A feedback slot changes when its loop's sign closes or amplifies, when the spatial pattern of warming moves the ground under it, and when a second- or third-order contact cascade alters the quantity being compared. The physical and carbon-cycle loops are a union and never average to one verdict. The measured energy budget settles the sign; the numeric future trajectory is a `gap` relative to the figures, bound only by instruments with provenance.** Mode `specified`. No world source was allowed to flip a verdict; the one apparent conflict (known sign, unknown magnitude) was returned to the census and split by scope. No unresolved strain remains after re-census.
