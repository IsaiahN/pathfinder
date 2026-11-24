# Figure-grounded audit: EAR-0085, who bears climate impacts

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every finding below carries its mode. Nothing is labelled accepted.

**Status: a simulated derivation, not a ground reading.** The essay *The Recursive Self-Improvement Trap*, read this session, says an LLM can *"simulate an approximate answer/output with the formula found in the architecture post"* but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* It calls such output *"simulacra."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the real distributional question. See `05_what_shape_means.md` §7.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. Also `THE_FORMULA.md` and `FIGURES_README_canonical.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines `R = |Γ(b,a) - o′|` per slot `s` (Formula step 1; Symbols table). Here:

- **b** is what a household, group or planner believes about the climate hazard it faces and what that hazard affords, formed from its own history and inherited priors.
- **a** is what it does: where to live, whether to retrofit, insure, evacuate, seek care, migrate, plant, or organise.
- **Γ(b,a)** is what the household's, group's or planner's library predicts will happen.
- **o′** is what actually happens: measured death, illness, displacement, property loss, income loss, service interruption, lost access.
- **s** is the bearer: a household, a group, a place. R is indexed per bearer, never aggregated into a regional mean.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."** (Fig 1 :28)

The phenomenon to explain is not total damage but **which slots carry positive mass after a shock, and why those slots**. Call the distribution `D_s`. A frame that predicts all slots bear equally, or that a single vulnerability score ranks them, has a residual here. State it as: *why, after the same hazard, does the gap between what a household's routines predict and what actually happens stay small in some slots and grow large in others, and how do housing, income, health and service access bear on that difference?* This names no theory and no index. Those are candidate names, withheld until the census.

**Bind the sought-for shape as an ordinary term** before the run (Formula, "Direction"): the answer would be (i) an enumerated habitat of conditions and relations in contact with the residual, indexed per slot, (ii) a separation of overlapping conditions each with its own failure, (iii) a named anchor that settles a harm claim, and (iv) an instrument that discriminates which condition binds in a given case. Until bound, this shape predicts nothing and no loop check can see it. It is now bound, so the refuter in §4 can fire on it.

**Anchor test.** Fig 2 :29 names the anchor directly: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* Fig 2 :30 adds *"you push on it, it is not an anchor."* Because the question is constitutively about people bearing harm, human outcomes are the legitimate anchor, not merely an instrument:

> **"An anchor is legitimate when the question is constitutively about it."** (Fig 2 :36)
> **"Human judgment is the right anchor for is this a good answer for a person, because the question is about people."** (Fig 2 :37)

Viable anchor: measured per-slot outcomes, mortality, illness, displacement, property and income loss, service interruption, recorded by administrative counts, surveys and registries. Model vulnerability scores, expert consensus and self-reported indices move when pushed; they are instruments at best (Fig 2 :37-38, *"instruments can be wrong on axes they do not measure"*).

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a multi-place relation: bearer slot `s`, hazard `h`, action `a`, outcome `o′`, indexed by time `t` (shock, response, recovery). It carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) and a **comparison** bond for "who bears more" (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87). It is not symmetric: hazard and bearer are not interchangeable.
- **Symmetry.** "Bears the impact" is a threshold relative to a baseline and to other slots, not an absolute quantity (Fig 12 :85-89). Harm accumulates asymmetrically in time: a lost home or lost income is not undone by reversing the action.
- **Scale.** Three scales are in view: the household loop, the community and city habitat, and the time channel across response and recovery. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21) and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The household capability loop** | household members, their Γ, their actions | actions and residual reduction | yes: realised outcome per household | admitted |
| **D2 The habitat of vulnerability** (housing, income, health, services) | housing stock and tenure, income and assets, health status, service access | contact and valence relative to the residual | yes: the measured harm distribution; the habitat updates, the ground settles (Fig 11 :73) | admitted |
| **D3 The measurement frame** | surveys, sensors, indices, administrative records, analysts | contact versus pooled or saturated readings | yes: the ground, *"keep the anchor reachable"* (Fig 10 :29) | admitted |
| **D4 The union compound** (four overlapping conditions) | intersections of housing, income, health and service conditions | which condition binds at the intersection | yes: per-slot outcome at the intersection | admitted as a compound with its own loop |
| **X1 "Climate vulnerability" as a free-floating property of a place** | the index | a score | **no** anchor independent of measured outcomes; a frame-internal quantity (Fig 1 :24-27) | not a domain yet |
| **X2 "Adaptive capacity" as one stock** | the household | a reserve | measurable only as a re-description of D1 and D2 | absorbed |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that vulnerability indices are useless; they are filters for the budget (Fig 9 :60), not witnesses for the verdict.

### 1.3 Partition or union

D1 and D2 overlap: the household Γ is inside the habitat, so their overlap is a compound with its own loop. D2 and D4 overlap: service access is both a habitat condition and an intersection with health and income. D3 overlaps all three, since every per-slot claim is made through a measurement. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: C1 a maintained channel to a reachable, paying ground (measured outcomes remain visible), C2 a habitat enumerated rather than composed, C3 cascades scoped beyond first-order contact, C4 reach renewed by contact with a differing closure (new information about who is bearing harm). A slot failing only C1 and a slot failing only C4 are not different degrees of one failure; they need different instruments. The essay *The Library of Babel* states the same stop: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)

Order for this question: 1 perception (can the analyst read per-slot harm?) → 2 vocabulary (are there terms for what housing, income, health and service access afford a household in this hazard?) → 3 objective (can we say what would count as reducing unequal bearing?) → 4 planning → 5 learn and carry. The middle link, having terms for what the situation affords and saying what would count as progress, is the one with no instrument. Fig 12 :113-115 says a vocabulary holding only ingredients can say what a situation contains and cannot say what would count as getting somewhere from it. Most effort lands above the break because that is where the measurements already exist (Fig 3 :29-30).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not the cause of the distribution |
| 2 The Ground | human outcome is a legitimate anchor; independence and common pool | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; cascades propagate | governs diagnosis order and contact cascades |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs household to city transfer |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs when any named condition can be admitted |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs renewal of reach (C4) |
| 7 Room Chain | same closure handed along; fidelity times ground pressure | governs duration of harm through recovery |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and source rules |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs unbundling and the honest stop |
| 10 Ground Maintainer | ground does not decay, channel does; keep anchor reachable | governs loss of the per-slot signal (C1) |
| 11 The Habitat | capability is agent-and-habitat; enumerate, never compose; valence relative to residual | decisive for D1 and D2 |
| 12 The Bond | isomer, functional group, catalyst, arrangement is the substance | governs why the four conditions are a union and why a flat index fails |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | honest-stop role only (see strain S1) |

**Strain test applied during this census.** An early attempt to apply Fig 13's six physical terms directly to the four factors only fit by renaming housing as "space", income as "energy", health as "gradient" and service access as "network". That is a strain, so Fig 13 does **not** govern the social habitat. Re-census sends Fig 13 to the honest-stop role only (§6, strain S1). This matches the pilot BUS-0001 retraction of the same move for firm resources. No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about climate harm distribution, `grounded` only if settled by a per-slot measurement. None is `grounded`.

### F1 - Who bears is a per-slot signal, never an average

**Mode: `general` with a `specified` methodological consequence. Domains all. Status: triangulated (Fig 1 and Fig 10, low topical overlap: residual indexing vs channel decay).**

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"saturated metrics, pooled readings"** (Fig 10 :26)

A regional mean damage figure answers a different question from "who bears". It is a filter for where to look, not a witness for the distribution. The specified consequence: any claimed answer that is an average across households has already thrown away the only signal that says which slot is losing contact and where. The IPCC WGII Summary for Policymakers states the ground fact: *"Across sectors and regions the most vulnerable people and systems are observed to be disproportionately affected."* That is a world description of per-slot asymmetry, not a figure line, and it carries no verdict weight here.

**Refuter:** an aggregate statistic that predicts prospectively and per named household which slot will bear the next shock, with no per-slot reading. If one exists, F1's methodological consequence is false.

### F2 - Housing, income, health and service access are habitat enumerated, never composed; their valence is relative to the residual

**Mode: `specified`. Domain D2. Status: triangulated (Fig 11 and Fig 12, low overlap: habitat relations vs composition notation).**

> **"The habitat is enumerated, never composed."** (Fig 11 :43)
> **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."** (Fig 11 :44)
> **"conditions: light, water, temperature, season, terrain"** (Fig 11 :46)
> **"relations: pollination, predation, competition, dependency"** (Fig 11 :47)
> **"An actor’s valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** (Fig 12 :5)

Housing, income, health and service access are conditions and relations in contact with the residual. They cannot be assigned fixed "protects" or "vulnerable" labels independent of the hazard and the outcome. A renter and a homeowner with the same flood in the basement do not bear alike; the world source puts it plainly: *"Flooding, for example, will affect a homeowner whose basement has flooded differently from a renter whose basement apartment has also flooded."* A vulnerability index that sums the four into one number is Fig 12's flat formula: it records ingredients and not arrangement (Fig 12 :14-17). Mah et al. 2023 give the per-slot case: two households below the poverty line, one a recently graduated working couple with strong social ties, the other an older adult on assistance with no help available, are *"two distinct tiers of social vulnerability not captured by examining household income alone."*

**Refuter:** a factor whose measured valence (protects versus harms) is invariant across different hazards and different outcomes. If no such invariance exists anywhere, F2 stands; if one is found, the "no standing list" claim weakens to `general`.

### F3 - Contact cascades; scope the habitat beyond first-order contact

**Mode: `specified`. Domains D2, D4. Status: triangulated (Fig 11 and Fig 3, low overlap: habitat cascade vs dependency chain).**

> **"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three"** (Fig 11 :52)
> **"steps out."** (Fig 11 :53)
> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)

"Access to services" is often a second- or third-order effect, not direct contact with the hazard. The IPCC WGII Chapter 6 gives the exact structure: *"Cascading impacts are observed when damages in one place or system reduce resilience and generate impacts elsewhere (e.g., when flood waters damage energy infrastructure causing blackouts and knock on financial and human impacts)."* The Summary adds that risks result *"in risks transmitting through interconnected systems and across regions."* A habitat scoped to the household's immediate exposure misses the slot that lost dialysis because the clinic lost power.

**Refuter:** a documented set of events in which all material harm was first-order contact with the hazard and no second-order cascade mattered to the per-slot distribution. If such events are the rule rather than the exception, F3's cascade requirement is false.

### F4 - Bearing is a property of household-and-habitat, not of the household alone or the place alone

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 11 and Fig 4, low overlap: habitat vs membrane).**

> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)
> **"it or a thousand. Only the actors, the currency and the anchor change."** (Fig 4 :20)

An intervention that "strengthens households" (cash, education, awareness) without changing contact (exposure, tenure, accessibility, service reach) may leave the distribution unchanged. The world agrees at a different stratum: IPCC WGII B.2.5 says *"Future human vulnerability will continue to concentrate where the capacities of local, municipal and national governments, communities and the private sector are least able to provide infrastructures and basic services."* That is habitat, not household alone. Cutter's Hazards of Place model, as summarised in the opened source, holds that *"Physical characteristics of a landscape can determine the level of exposure to hazards (i.e., elevation, proximity) while social vulnerability depends upon several social determinants of well-being (i.e., socio-economic status, governance)."*

**Refuter:** a controlled case in which the per-slot harm distribution moves materially after an agent-only intervention that demonstrably changes no contact variable. If it survives, F4 is false.

### F5 - The question is a union of overlapping conditions; unbundle before choosing a lever

**Mode: `specified`. Domain D4. Status: triangulated (Fig 9 and *The Library of Babel*, but the essay is framework-internal, so the external witness count is one).**

> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."** (Fig 9 :56)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

Housing intersects income, health intersects service access, and the intersections are where bearing concentrates. IPCC WGII Chapter 6: *"Intersections between these drivers shape unique experiences of vulnerability and risk and the adaptive capacities of groups and individuals."* Mah et al. note that *"fails to recognize the intersectionality whereby sexual minorities are often part of multiple vulnerable groups."* A single lever (raise incomes, build a seawall, open a clinic) clears the region where only one condition holds and leaves the compound standing (Fig 9 :56). This is why the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

**Refuter:** a single intervention that reduces harm equally in all four-factor intersections and leaves no categorically different residue. That would collapse the union into a partition.

### F6 - The measurement channel decays; pooled and saturated readings lose "who"

**Mode: `specified`. Domain D3. Status: triangulated (Fig 10 and Fig 1, low overlap: ground maintainer vs residual indexing).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"stale percepts, dropped transients, saturated metrics, pooled readings"** (Fig 10 :26)
> **"you have lost touch"** (Fig 10 :28)
> **"→ keep the anchor reachable"** (Fig 10 :29)

A loss database that pools by region, or counts only insured and officially reported losses, is channel decay. The harm itself does not decay; the reading of who bore it does. IPCC WGII Chapter 6 names the same failure: *"A lack of agreement on metrics and indices to measure urban adaptation investment, impacts and outcomes, reduces the scope for sharing lessons and joined-up action across interconnected sectors and places in the face of compound and systemic risks."* Mah et al. conclude *"there is no gold standard"* for index construction, and the opened synthesis of social vulnerability records that *"Difficulties of standardization, weighting, and aggregation of indicators can affect the quality of an index's results."*

**Refuter:** a measurement system that captures the full per-slot harm distribution with no pooling and no saturation across a major event, and whose verdict stands when checked against the ground. If one is demonstrated, F6's channel-decay claim is weakened for that domain.

### F7 - Duration of harm is a chain of handoffs, and it fails at the middle link

**Mode: `specified`. Domains D1, D3. Status: single-source (Fig 7, with Fig 3 as a corroborating line from the same framework, so one witness).**

> **"same closure, handed along;"** (Fig 7 :12) **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"Progress per handoff has two factors. Zero either and the chain runs in place:"** (Fig 7 :37)
> **"the bracket’s fidelity across the handoff"** (Fig 7 :38)
> **"the ground’s pressure on the room"** (Fig 7 :39)

"Who bears" includes for how long. Response to recovery is a chain of handoffs (emergency, shelter, income, health, services). If either bracket fidelity or ground pressure goes to zero, the household runs in place while the hazard passes. IPCC WGII Chapter 6 names the policy-side version: *"The greatest gaps between policy and action are in failures to manage adaptation of social infrastructure (community facilities, services and networks)"*. Mode is `specified` and single-source: no per-slot duration measurement was taken here.

**Refuter:** a documented case in which harm duration stays high while both bracket fidelity and ground pressure are independently measured as high and non-declining. If both stay high, F7's mechanism is not the cause.

### F8 - Equity verdicts cannot be settled by agreement, prestige, or a shared evidence pool

**Mode: `general` with a `specified` verification consequence. Domains all. Status: triangulated (Fig 2 and Fig 10, low overlap: alignment rule vs seat rule).**

> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)
> **"Buy independence in proportion to the cost of being wrong."** (Fig 2 :42)
> **"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."** (Fig 10 :59)

The cost of being wrong here is high (misallocated adaptation finance, lives), so Fig 2 :42 says to buy independence. That means low-overlap witnesses: epidemiology, engineering, ecology, local and Indigenous knowledge, each ranged separately against per-slot outcomes. It does **not** mean selecting people likely to agree with the shape claim. The essay *The Recursive Self-Improvement Trap* states the prestige rule: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* In this simulated run all seats share one evidence pool, so their agreement is one pool talking (Fig 2 :40), not corroboration.

**Refuter:** a check in which two frames selected for likely agreement, and drawing on one evidence pool, settle a distributional claim. Under Fig 2 :40 that is a convention, not a verdict.

### F9 - What survives, and what is owed: a `gap` for the binding factor

**Mode: `general` at the stop. Status: figure-governed.**

| claim | mode | figure | status |
|---|---|---|---|
| Harm must be read per slot, never as a regional average | general | Fig 1 :19, :22, :28 | figure-derived, F1 |
| The four factors are habitat enumerated, not an index | specified | Fig 11 :43, :44, :49-51 | triangulated, F2 |
| Cascades must be scoped beyond first-order contact | specified | Fig 11 :52-53; Fig 3 :20 | triangulated, F3 |
| Bearing is household-and-habitat | specified | Fig 11 :39-40; Fig 4 :20 | triangulated, F4 |
| The question is a union of overlapping conditions | general | Fig 9 :54-57 | figure-derived, F5 |
| Pooled readings lose the per-slot signal | specified | Fig 10 :24, :26, :29 | triangulated, F6 |
| Duration is a two-factor chain of handoffs | specified | Fig 7 :37-39 | single-source, F7 |
| Agreement cannot settle an equity verdict | general | Fig 2 :35, :40, :42 | triangulated, F8 |
| Which specific factor binds, with what weight, in a given place | not stated | none after re-census | **gap**: a source-discriminating instrument is owed |

The gap is declared, not hidden:

> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)
> **"Unreachable is a verdict here, not a silence,"** (Fig 13 :134)
> **"So a search that finds nothing is never a proof of absence."** (Fig 8 :39)

The essay *The Hard Problem is About Source* gives the shape of what is owed: an instrument that reads the outcome *"cannot comment on the source"*, and *"The answer is unreached until a better instrument exists."* Here the source is which condition (housing, income, health, service access, or an intersection) actually produced the positive residual in a named slot. An index that reads the outcome cannot say which. What is owed is a discriminator, not another name.

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A regional aggregate prospectively predicts which named household will bear the next shock, with no per-slot reading (breaks F1, Fig 1 :19-22).
2. A factor's valence (protects versus harms) is invariant across different hazards and outcomes (breaks F2, Fig 11 :49-51).
3. All material harm in a set of events is first-order contact with no second-order cascade (breaks F3, Fig 11 :52-53).
4. An agent-only intervention moves the per-slot harm distribution without changing any contact variable (breaks F4, Fig 11 :39-40).
5. A single lever reduces harm equally in all intersections with no categorically different residue (breaks F5, Fig 9 :57).
6. A full-distribution measurement with no pooling or saturation is demonstrated across a major event (breaks F6, Fig 10 :24-29).
7. Harm duration stays high while bracket fidelity and ground pressure both measure high and non-declining (breaks F7, Fig 7 :37-39).
8. Two frames selected for likely agreement, sharing one evidence pool, settle a distributional claim (breaks F8, Fig 2 :35, :40).
9. Fig 13's six terms are derived from five of them, or Fig 6's idempotence fails inside a closed set (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a per-slot outcome measurement pays for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of vulnerability (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep the domains and their verdicts separate in every report. A blended "vulnerability score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Enumerate the habitat; do not compose it into an index (Fig 11 :43). If an index is used, record it as a budget filter with no verdict weight (Fig 9 :60).
4. Ask, at each handoff, which link the chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
5. Treat the four factors as candidate conditions whose valence must be tested against the specific residual, never as a standing list of good and bad attributes (Fig 11 :51).
6. Use the climate-vulnerability literature as one corroborating witness and as a budget filter. The IPCC sources share an assessment pool; Mah et al. and the opened synthesis of social vulnerability are a different pool but still one witness each (Fig 2 :31, :40).
7. Offer the formula as a method only after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
8. Stop at the shape. Do not name which factor binds in a named place; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and all eight essays, fetched this session.

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs §4's stop.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to map Fig 13 six physical terms onto housing, income, health, services | **Retracted, strain S1** | Only fit by renaming a renter's tenure as "space" and illness as "gradient". Re-census: Fig 13 governs the physical substrate, not a social habitat. Kept for the honest-stop role only |
| Treated IPCC SPM and IPCC Chapter 6 as two independent witnesses | **Collapsed to one witness** | Same assessment, same evidence pool (Fig 2 :40) |
| Read a social vulnerability index as evidence for the answer | **Retracted as a witness, kept as a filter** | Fig 9 :60; an index is a frame-internal aggregated quantity (Fig 1 :27) |
| Planned to name "housing" as the binding condition | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer. The discriminator is not held |
| Wanted to call F2 a `general` law about all disasters | **Narrowed to `specified`** | Structural claim; no per-slot measurement pays for the application here |
| Used Mah et al. 2023 as a climate-specific measurement | **Narrowed to mechanism-shape corroboration** | The study is about social vulnerability indices across health and climate fields; it does not measure who bore a specific climate shock |
| F7 "duration is a two-factor chain" | **Marked single-source** | Fig 7 with Fig 3 as same-family corroboration; no independent pool |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Fig 1 and Fig 10 are two figures but one framework; low topical overlap, not independent evidence pools |

**Strains sent to the log:** S1 (Fig 13 applied to the social habitat), resolved by re-census; S2 (calling measured human outcomes "the ground" while also treating human judgment as an instrument), resolved by Fig 2 :36-38: the question is constitutively about people, so human outcomes are the legitimate anchor, while any single survey or index is only an instrument that can be wrong on axes it does not measure. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54-57 plus the Library of Babel bundle passage: it is a union of contact maintenance, habitat enumeration, cascade scope and reach renewal, each with its own instrument.
2. **What is the anchor?** Measured per-slot human outcomes, legitimate because the question is constitutively about people (Fig 2 :29, :36-37). Not consensus, not an index (Fig 1 :27).
3. **Is the answer in the household alone?** No. Fig 11 :39-40. Bearing is household-and-habitat.
4. **Are the four factors a list or a habitat?** A habitat, enumerated (Fig 11 :43-47). Their valence is relative to the residual (Fig 11 :49-51). A composed index is the flat formula failure (Fig 12 :5, :14-17).
5. **How does the signal get lost?** Channel decay: pooled readings, saturated metrics, lost touch (Fig 10 :24-29).
6. **How does harm last?** A chain of handoffs, with two factors that can each go to zero (Fig 7 :37-39).
7. **What can be said at the stop?** A shape, the unbundled conditions, the anchor rule and the falsifiers. Not which factor binds in a named place. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **who bears climate impacts is a per-slot distribution, produced by a household-in-habitat relation over an enumerated set of housing, income, health and service conditions, read through a channel that must stay anchored to measured outcomes; the conditions overlap as a union whose intersections carry their own loops, their valence is relative to the specific residual, and material harm often arrives through cascades several steps out from direct contact.** Which condition binds in a named place, with what weight, is a `gap`, not a hidden answer: the source-discriminating instrument is not held here. Mode `specified`. No world source flipped a verdict; the one genuine redundancy (two IPCC sources) was collapsed to one witness, and the one genuine strain (Fig 13 applied to the social habitat) was sent back to census. No unresolved strain remains after re-census.
