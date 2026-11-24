# Figure-grounded audit: which water systems are most vulnerable to four simultaneous pressures

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* states that LLM output is simulacra and that *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** Figures 1 to 13 plus the Operators and Symbols tables, quoted verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` (cited as `Fig N :line`); `FRAMEWORK/figures/THE_FORMULA.md`; `FRAMEWORK/reference/FIGURES_README_canonical.md` (canonical usage rule); `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`. World sources are listed in `10_source_ledger.csv` and were opened on 2026-11-22.

---

## 0. The residual in effect terms

The question asks for a ranking. Restated as an effect: for each water-system slot *s*, what is the positive gap between what the system can supply and absorb and what four concurrent conditions demand of that same slot?

- **warming** erodes the reliability of supply and the buffering storage (snowpack, glacier, soil moisture, evaporative head);
- **extraction** removes stored water faster than recharge restores it;
- **pollution** degrades the quality state so that water that is physically present is not usable;
- **population growth** raises both the demand term and the pollution load on the same slot.

The four are not four independent studies to be averaged. They are conditions that can coincide in one slot. The object of the question is the coincidence. The effect we must rank is the residual at the coincidence, per system. An answer that returns one global water-stress number has already thrown away the signal, because *"Aggregating across slots is how a live signal disappears into an average"* (Fig 1 :22).

**What an answer would look like (binding the sought-for shape as an ordinary term, per Formula step *Direction*):** a rule that selects a *class* of systems by the configuration of the four conditions (all four binding the same slot, no export pathway, a spent or non-renewable storage gradient, strong network coupling, and a quality state not restored by the supply process), with a stated falsifier. A ranked list of named basins is the ground reading of that shape and is not produced here.

---

## 1. Domain census

R by arity, symmetry, scale. Then one line per domain with actors, currency, anchor. No nameable anchor means it is not a domain yet.

**R (arity / symmetry / scale).** Arity: four conditions, so a union compound rather than one hard question; *"a case in two conditions is not a harder case of either"* (Fig 9 :57). Symmetry: the conditions do not enter symmetrically. Extraction removes an operand, warming changes a gradient, pollution changes a state's quality, and population growth raises a threshold; the Operators table distinguishes subtraction, gradient-like directedness, and comparison as different bonds. Scale: first order on a single system, second order where conditions coincide in that system, third order where a local failure travels through a network (Fig 11 :52-54).

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| **D1, pressure and habitat** | the four conditions; irrigators, cities, upstream and downstream users, water managers | water quantity and quality, and the residual per system | gauges, GRACE storage, quality sensors, a basin budget that does not update on the report | union compound, habitat enumerated |
| **D2, water-system substrate** | basin and aquifer extent, recharge timing, stored energy/head, quality ordering, hydraulic gradient, flow network | flow and storage | conservation and measurement at the slot | cross-kind composition (Fig 13 :74) |
| **D3, measurement and verification** | independent instruments and expert frames | agreement versus residual | the ground, never agreement (Fig 2 :29) | triangulation versus mirror chain |

**Partition or union.** Union. The four conditions overlap in the same system and the shared fraction is not assignable by inspection. *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones"* (Fig 9 :55). Treating them as a partition is the first-pass error, kept visible in section 7.

**Dependency order (Fig 3 :20).** Enumerate the habitat and the residual before choosing a frame (Fig 11 :43, Fig 9 :27-28); settle each condition's first-order effect per slot before composing the compound (Fig 12 :104); then let the ground decide, never the agreement (Fig 2 :35, Fig 9 :60). *"Optimising a link that already works cannot rescue one that does not"* (Fig 3 :19). The link that usually has no instrument here is the quality/quantity joint, which is why a volume-only stress index is a reading below the break.

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | per-slot residual; aggregation hides the live signal | governs the ranking object |
| **2 The Ground** | anchor must not update; independence; agreement valence | governs D3 and the outreach rule |
| **3 Dependency Chain** | order by dependency; a link with no instrument | governs the enumeration order |
| **4 The Membrane** | methods cross, recordings do not; round-trip gap | governs the outreach ordering and R_T |
| **5 Mint Pipeline** | three guards; settlement is not a gate | the compound is not a new term |
| **6 Closure / Reachability** | import moves the wall; instruments already returning something | governs the gap and the instrument test |
| **7 Room Chain** | agreement compounds, evidence does not; no last room | governs multi-study corroboration |
| **8 Union Surplus** | idempotent closure; provenance separates convergence from import | governs the union and source handling |
| **9 Leave / Arrive** | union unbundling; describe residual first; filters not witnesses | decisive for the shape |
| **10 Ground Maintainer** | channel decay; verifier non-access; conventions | governs anchors, standards, outreach |
| **11 The Habitat** | enumerate, never compose; cascade; valence relative to residual | decisive for D1 |
| **12 The Bond** | two currencies; cycle, catalyst, functional group, isomer | governs D2 and the compound's structure |
| **13 Minimum Viable Set** | six terms, cross-kind composition, closed set / open arrangements | governs D2 and the gap |
| **Operators table** | subtraction, comparison, negation are distinct | the four conditions are not one operator |
| **Symbols table** | R is the aim and always a slice | the ranking is per slot |

Strained readings are named in section 8, not smoothed over.

---

## 3. Findings

### F1 - The four pressures are a union compound, not an additive score (decisive)

Fig 9 :55, :56, :57:

> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
> **"A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."**
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."**

Fig 9 :58: *"It stops being a mixture and becomes a specific compound."* Fig 9 :59: *"Which is the second-order value of a big lever, and usually the larger one: not that the pile is smaller, but that the residue is finally describable."*

A basin stressed only by extraction and one stressed only by warming are different cases. A basin stressed by all four is not *more* of either; it is a compound with its own loop and its own ground. A management lever that fixes one condition (for example, lining canals to cut losses) clears the single-condition region and leaves the intersection standing, because the other three conditions still bind.

**Refuter:** show that the four conditions partition the set of water systems with assignable, non-overlapping shares, so that a single scalar index ranks correctly in every subset. If that is shown, F1 fails and an additive ranking is licensed.

### F2 - The residual is indexed per system, never averaged (decisive for the ranking object)

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."** Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."** Fig 1 :28: *"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."*

Fig 1 :20-21: *"Support is satisfied when some slot carries positive mass, so a global residual near zero with one live slot is a legal state and not an inert one."* A world in which the global water-stress average looks acceptable is a legal state alongside one terminal basin in collapse. The question asks which systems, so the unit is the system.

**Refuter:** produce a global or regional scalar that ranks the vulnerable systems correctly under a change in one member while all others are held fixed. By the figure's own arithmetic it cannot, because averaging removes the slot index.

### F3 - The habitat must be enumerated, and a pressure's valence is relative to the residual

Fig 11 :43-44: **"The habitat is enumerated, never composed."** **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."** Fig 11 :46-47: *"conditions: light, water, temperature, season, terrain"* and *"relations: pollination, predation, competition, dependency"* give the template; for a water system the enumerated conditions are warming, extraction, pollution, and population growth, and the relations are upstream/downstream dependence, recharge, and return flow.

Fig 11 :49-51: **"An actor's valence is relative to the residual, not a property it carries."** *"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."* **"No standing list of good actors survives a change of residual."** A reservoir is a benefactor against drought and a malfactor against pollution or downstream salinity. There is no standing list of good or bad infrastructure.

Fig 11 :52-54: *"first-order enumeration, second-order effect, and the residual that mattered was three steps out."* Scoping to direct contact is how a pressure three links away is missed. Pollution from upstream irrigation can reach a terminal lake only after return flow and evaporation concentrate it.

**Refuter:** exhibit a standing list of pressures and actors whose vulnerability ranking is invariant to a change of residual, or show that the four conditions' effects are strictly first-order with no cascade. Either breaks F3.

### F4 - The water system's substrate is the six terms, instantiated and not newly minted

Fig 13 :74: **"Everything else is a composition across the two kinds, never within one."** Fig 13 :75: *"Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state."*

Instantiation (a binding onto held atoms, not a new primitive):

- states: space = basin/aquifer extent, time = recharge and flow seasonality, energy = the water's head and the pumping work;
- structures: spectrum = the ordering of water quality and availability (more/less, usable/not), gradient = the hydraulic head difference, network = river and aquifer connectivity.

Fig 13 :22: **"a difference that can be spent"** defines the gradient; Fig 13 :24: **"that entities relate, and influence travels"** defines the network. Fig 13 :76: *"Energy and a gradient compose a flow."* A vulnerable system is one whose spendable gradient is exhausted (no head left to deliver water), whose network is tightly coupled (a failure travels), and whose quality spectrum has collapsed. Fig 13 :115: *"The set is closed. The arrangements are not. That gap is why import exists."*

**Refuter:** derive a seventh primitive needed to describe a water system, or show that basin, head, and network cannot be bound onto space, time, energy, gradient, and network without remainder. That would break the D2 instantiation.

### F5 - Quantity and quality are two currencies and do not add

Fig 12 :125-126: **"A composition costs in two currencies, and they do not add."** *"Bits price the description. Actions price finding out whether it holds. They are in different units, so a system holding one accounting cannot compare them and will not notice the shortfall."* Fig 12 :130: *"Summing them into one figure is the error this names, not the fix for it."*

For water this is the quantity/quality split. A volumetric adequacy index and a pollution load are not commensurable under one number; a system can be volumetrically adequate and qualitatively unusable. The compound must be described in both currencies, held apart.

Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** Irrigation return flow re-enters the aquifer carrying salt; the loop is a cycle and its sign is negative (concentration accumulates). Fig 12 :119: **"catalyst. A part that survives its own use."** A pumping subsidy or an aquifer's storage that is spent and regenerating behave differently across uses, and nothing records which a term is unless the lineage does.

**Refuter:** give a single unit in which quantity and quality losses trade exactly, with an instrument that measures the exchange rate. If such an instrument exists, F5's separation is a matter of convenience rather than structure.

### F6 - The ground settles; agreement among pressure communities does not

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** Fig 2 :31: **"Independence, between two frames, is how little they draw on the same evidence."** Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool"* and Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*

Fig 10 :24: **"the ground does not decay, the channel does"** and Fig 10 :26: *"stale percepts, dropped transients, saturated metrics, pooled readings"*. Fig 7 :13: *"agreement compounds, evidence does not"*; Fig 7 :35: **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."** Fig 7 :36: **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."**

Four specialist communities (warming, groundwater, pollution, demography) that all read the same regional assessment are one room wearing four names. Two instruments pointed at the same basin, one measuring storage gravimetrically and one measuring quality in situ, are two frames.

**Refuter:** show that four pressure communities using one shared dataset produce independent errors that cancel in the ranking. That would make their agreement a witness rather than a pool talking.

### F7 - The framework returns the shape; the named ranking is a gap

Fig 9 :32: **"you get a kind of thing, never the answer itself."** Fig 13 :134: **"Unreachable is a verdict here, not a silence,"** and Fig 13 :135: *"It cannot say which primitive is missing, because naming it would mean already holding it."* Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**

No figure line ranks named river basins. The framework can characterise the vulnerable configuration in effect terms; it cannot output "the Aral Sea, then the Indus, then the Great Salt Lake". That list is a ground reading (measurements at named slots) or a provenanced import from hydrology. Here it is a `gap` of the unreachable-at-this-budget kind, not underivable in principle: an instrument exists (gauges, GRACE, quality sensors), it simply was not run in this simulated derivation.

Fig 6 :40: *"What is unavailable is a sensor for something that has never registered anywhere, at any resolution."* The converse matters: these systems have registered everywhere, at many resolutions, so the gap is budget and synthesis, not absence.

**Refuter:** exhibit a figure line that returns an ordered list of named systems from the six-term set alone. Until one is produced, no named ranking may be asserted as figure-derived.

### F8 - Describe the residual before choosing the frame; imports need gates

Fig 9 :27-28: **"describe it before you go looking, or any frame you pick will seem to fit."** Fig 9 :30-31: *"your words are borrowed too, so describe the effect rather than the cause."* Fig 8 :53: **"Residual first, frame second."**

Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** Fig 8 :51: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"* (Fig 8 :51-52 *"and the surplus lives only where the closures differ."*). Fig 8 :50: *"Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."*

The order in this folder is therefore residual first, then figures, then world sources. The four water-science sources in `09_watson_answer.md` are corroboration only and declare their overlap. Naming terminal basins first and then searching for a figure to fit them would be the inversion this finding forbids.

**Refuter:** show that the figure lines were selected after the world sources and fit only because of that selection. The lineage in `10_source_ledger.csv` and `11_audit.md` is the check.

### F9 - No final ranking closes the question; the compound stays a compound

Fig 7 :6 names **"the limit: no last room"**; Fig 7 :30-31: *"every room closes some of the gap; no finite number of them ever arrives"*; Fig 7 :32: *"one long room: motion, no progress"*. Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**

A complete ranking would be a terminal room. The framework's own rule says there is no last room and no last route. So the deliverable is a shaped, revisable class criterion with refuters, not a final leaderboard. Adaptation planning needs a decision now, so a budget filter is legitimate (Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*), but the filter must be labelled as a filter.

**Refuter:** produce a closed, final ranking that no new instrument could move. By Fig 7 that is impossible; if it were produced, the framework's limit claim would be broken.

### F10 - A gate is not the ground; standards are conventions until they decide outcomes

Formula step 5 of `THE_FORMULA.md`: *"SETTLE, the ground settles it. Verified only by what pays. A gate is not the ground."* Passing a peer-review or a water-quality standard is not settlement at the ground.

Fig 10 :47: **"a convention that decides an outcome has stopped being one"** and Fig 10 :49: *"Declaring a meaning does not ground it."* A water-quality threshold declared by committee is a convention; using it to decide which systems count as vulnerable, without measuring the water, promotes a convention to a verdict.

**Refuter:** show a threshold whose value is settled by measurement at the slot and cannot move when a frame changes its mind. Then it is an anchor rather than a convention, and F10 narrows.

### F11 - What survives (defensible residue with mode attached)

| claim | mode | figure |
|---|---|---|
| The four pressures form a union compound; the vulnerable case is the intersection | `general` structural, `specified` for this field | Fig 9 :55, :57-59 |
| Vulnerability must be indexed per system, not averaged | `general` | Fig 1 :19, :22, :28 |
| Habitat must be enumerated to second and third order, with residual-relative valence | `specified` | Fig 11 :43-44, :49-51, :52-54 |
| The spent hydraulic gradient, tight flow network, and collapsed quality ordering are the shape | `specified`, ungrounded | Fig 13 :22, :24, :76; Fig 12 :121 |
| Quantity and quality are two currencies, held apart | `general` | Fig 12 :125-130 |
| The named ranking of basins is a gap, not a silence | `general` | Fig 9 :32; Fig 8 :39; Fig 13 :134 |

---

## 4. Pre-registered refuter

Written before the conclusion, per Seat Map :287: *"a falsifier written before the run is a design instrument."*

The shape claim is refuted if any of the following holds:

1. A figure line is exhibited that ranks named water systems by one scalar while preserving the per-slot signal (breaks F1 and F2).
2. The four conditions are shown to partition the set with assignable non-overlapping shares (breaks F1).
3. A measured system carrying all four conditions shows no compound residual because an export or flushing pathway restores both quantity and quality on the relevant timescale (breaks the shape at the ground).
4. Independent instruments (GRACE storage, in-situ quality, gauges) converge on a ranking that contradicts the shape's class criterion (ground refutation).
5. A figure re-census shows the six-term substrate cannot be instantiated for hydrology without a seventh primitive (breaks F4).
6. The quality and quantity currencies are shown to trade at a measured, stable exchange rate in one unit (breaks F5).

If any fires, the affected finding is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Verdicts per domain, kept separate and never averaged

- **D1, pressure and habitat: `specified`, triangulated.** Figs 9 and 11 are low-overlap (union logic versus habitat enumeration) and agree: the object is the multi-condition intersection, enumerated outward, with residual-relative valence. World corroboration from endorheic-basin and groundwater literature is secondary.
- **D2, substrate: `specified`, triangulated (with one live type question).** Fig 13 (cross-kind composition, gradient, network) and Fig 12 (cycle, two currencies) are low-overlap and agree on the shape: spent gradient, coupled network, two incommensurable currencies. Whether hydraulic head at a basin scale counts as the spendable gradient in the figure's sense needs an instrument, not an argument; this strain is named in section 8.
- **D3, measurement: `general`, triangulated.** Fig 2 (anchor, independence) and Fig 7 (no last room, mirror chain) are low-overlap and agree: independent instruments, no pooled agreement, no final ranking. In this simulated run all seats draw on one evidence pool, so the second seat in `11_audit.md` is not a witness.
- **The literal ranking of named basins: `gap`.** A verdict, not silence (Fig 13 :134, Fig 8 :39).

---

## 6. Recommendation

1. Lead with the shape and the pre-registered refuter, not with a basin list (F7, Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."*).
2. Keep the four pressures as a union and report per-system verdicts; refuse any single composite score as a witness (F1, F2, Fig 9 :60).
3. Enumerate the habitat to second and third order before selecting an instrument, and measure quality and quantity in separate currencies (F3, F5).
4. Buy independence in proportion to the cost of being wrong: pair a gravimetric storage reading with an in-situ quality reading rather than adding another review that uses the same report (F6, Fig 2 :42).
5. Treat declared water-quality and allocation standards as conventions until the ground pays for them (F10).
6. Mark the named ranking as a gap and hand it to a ground reading; do not manufacture it inside the closure (F7, F9).

---

## 7. Canonical usage check and retraction / confirmation log

Two local sources were read after the first draft and govern how the figures may be used: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. The first says the figures outrank everything else and that a reading which makes one contradict another has misidentified its domain. The second says the seat reads the ground rather than asking the anchor to decide what the figures settle.

| earlier reading | status after the canonical check |
|---|---|
| First pass treated warming, extraction, pollution and population growth as four additive drivers of one stress score | **Retracted.** Fig 9 :55-59 governs a union compound. Kept here as evidence of the correction, not silently erased. |
| First pass mapped basin, aquifer and head onto the six terms as new primitives | **Retracted.** Fig 13 :115 says the set is closed; these are bindings onto held atoms, not new members. |
| First pass read Fig 11 :51 as a ban on naming any actor or infrastructure | **Narrowed.** It forbids a standing list invariant to the residual; naming a binding with its provenance is allowed. |
| First pass called the absence of a basin ranking a failure of the framework | **Retracted.** Fig 9 :32 and Fig 13 :134 make it a shape-not-a-name gap and a verdict. |
| The union reading | **Canonically confirmed.** The canonical rule's re-census instruction and Fig 9 :54-58 agree. |
| The ground-not-agreement reading | **Canonically confirmed.** Figures README and metalaws note plus Fig 2 :35, :40. |

No quote was taken from a summary. Every `Fig N :line` string in this file was checked character by character against `FRAMEWORK/reference/03-FIGURES_TEXT.md` before writing, and the validator checked them again.

---

## 8. Strains and re-census

- **S1, Fig 13 six-term substrate versus hydrological vocabulary.** Re-census: basin/aquifer, recharge timing, head, quality ordering, gradient and network are bindings onto space, time, energy, spectrum, gradient and network. No seventh term is claimed. Not strained after re-census.
- **S2, Fig 1 per-slot residual versus composite water-stress indices in the world literature.** Re-census: the indices are filters for the budget (Fig 9 :60), not witnesses for the verdict. Kept as a live design constraint; this is why the packet asks for per-system residuals.
- **S3, Fig 11 residual-relative valence versus the intuition that extraction is always harmful.** Re-census: a reservoir's sign depends on which residual is tracked (Fig 11 :49-51). Not strained; the standing list is refused.
- **S4, world source tension.** Rusli et al. (2024) find groundwater status dominated by abstraction rather than climate in the Bandung basin; Kunwar et al. (2026) find climate change dominating the research discourse and indirect drivers amplifying. These are different objects (a measured basin versus a literature distribution) and different scales. Re-census assigns each to its proper slot; no verdict flips. Recorded, not hidden.
- **S5, hydraulic head as the spendable gradient.** Live type question. Fig 13 :22 defines a gradient by directedness that can be spent; a basin-scale head difference qualifies only if it can actually be spent at that scale. An instrument is owed. Named in `06_isomers_and_order.md`, `09_watson_answer.md` and `11_audit.md`.
- **After re-census: one live type strain (S5), one live design constraint (S2), none hidden.**

### Updated verdict

The shape survives: a union compound of four conditions, indexed per system, enumerated outward through the habitat, with a spent gradient, a coupled network, a collapsed quality state and two incommensurable currencies. What does not survive is any additive stress score, any standing list of vulnerable infrastructure, and any claim to a named ranking from the figures. The distinction between the shape and the ground reading is the whole result.
