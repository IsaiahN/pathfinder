# Figure-grounded audit: fast processes and slow processes in the Earth system

**Mode of this document: `specified` on the per-domain findings, `general` on the structural shape, `gap` on the numerical coupling strength. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** The framework's own validation essay (*The Recursive Self-Improvement Trap*) says LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** The figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical usage rule at `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. All quotes below are verbatim from the figure text and cited as `Fig N :line`. World sources were opened on 2026-11-22 and are recorded in `10_source_ledger.csv`.

---

## 0. The residual, in effect terms

Storms, fires and seasonal cycles are fast: many short events at an observable scale. Soil formation, ice-sheet change and ocean circulation are slow: an accumulated state that changes over decades to millennia. The question asks how the two interact. Stated as an error signal:

- **R slot s:** the gap between a prediction made from the fast-event frame and the slow-state observation it leaves behind, and the reverse gap when a changed slow baseline makes the fast event's effect mispredicted. Example slots: a hillslope after fires, a basin after a wet season, a sector of an ice sheet after a melt summer, a region of the ocean after a storm-driven mixing event.
- **R is indexed per slot, not aggregated:** Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." A global mean "interaction strength" is exactly the averaging the figure disqualifies.
- **Ground:** Fig 1 :23 "The ground enters as the only metric." Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Here the anchor is the instrument or long record, not the agreement of models.

**The sought-for shape, bound as an ordinary term before the run** (formula step "Direction"): the answer is a *typed, ordered cross-scale bond plus a loop sign plus a threshold relation, with a measured round-trip gap between scales*. Write that down and let it accrue a residual, so it can be refused by the same test as everything else.

---

## 1. Domain census, before choosing any figure line

### R by arity, symmetry and scale

- **Arity:** at least four conditions, fast forcing, slow state, the habitat of conditions and relations through which the effect travels, and the measuring ground. This is a **union compound**, not a partition (Fig 9 :54 "when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."). One lever, for example higher model resolution, clears the region where only one condition holds and leaves the intersections standing (Fig 9 :57-58 "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound.").
- **Symmetry:** asymmetric. Fast to slow is **production** (an increment that did not exist before); slow to fast is a **head start** or boundary condition (the baseline the fast event acts into). Swapping the operands gives a different thing, so the bond is ordered, not a symmetric conjunction (Fig 12 :46 "A bond is the typed relation between two operands." Operators table :30 "A then B; B needs A to have happened"; :37 "A produces B; B did not exist before").
- **Scale:** two scales joined by a lossy transform with a round-trip gap `R_T` (Fig 4 :27 "The transform between scales loses information, and that is the point."; Fig 10 :68 "Different actors, a different currency, a different ground, and a lossy transform between."). The fast/slow axis is a **gradient over time**, a distinct term from a gradient over space (Fig 13 :76 "Energy and a gradient compose a flow. A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is.").

### One line per domain: actors, currency, anchor

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D1 Fast-event frame | individual storms, fires, seasonal cycles | event frequency and intensity; per-event residual | the instrument reading of the event | many slots, registered per slot |
| D2 Slow-state frame | soil horizon, ice sheet, ocean basin | accumulated state; long-term trend and hysteresis | the long observational or palaeo record; the ground does not update (Fig 10 :24 "the ground does not decay, the channel does") | accumulated remainder; anchor is not negotiable |
| D3 Coupling and membrane (the question itself) | the processes in contact, plus conditions and relations outward through the cascade | what crosses the scale boundary: a reapplicable method or head start, never a recording of one occasion (Fig 4 :22 "Only methods cross up. Only head starts come down.") | ground settlement of a cross-scale prediction | **union compound**, with its own loop |
| D4 Research and verification frame | researchers, models, instruments | agreement and residual, kept separate | the ground, never agreement (Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you.") | in this simulated run all seats draw on one evidence pool, so independence is zero |

No nameable anchor means it is not a domain yet. D1 and D2 each have an instrument that does not move because a model thinks so. D3's anchor is the same ground, applied to the cross-scale prediction. D4's anchor is the ground, not the literature's agreement. All four are domains.

### Partition or union

Union (Fig 9 :54-58). The fast/slow interaction is a bundle of overlapping conditions: direct forcing, cumulative integration, threshold crossing, feedback through the habitat, and the state-dependence of the response. It is not a list of separate mechanisms and not one dial.

### Order by dependency (Fig 3)

Fig 3 :20 "The chain is ordered by dependency, not by importance." The links are: (1) perceive the fast event and tell it apart from what was there before; (2) have terms for what the slow state affords; (3) say what would count as progress, that is, a cross-scale effect; (4) route a probe to that effect; (5) name what worked and carry it. The chain usually breaks between (2) and (3): we can measure a storm and measure ice loss, but have no term for what the storm affords the ice-sheet state, so that link has no instrument (Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at."). A reading taken below that break is not a weak reading: Fig 3 :22-23 "a reading taken below the break is not a weak reading. It is a reading of nothing." Fig 3 :19 "Optimising a link that already works cannot rescue one that does not." More resolution upstream of the broken link cannot rescue it.

---

## 2. Figure census, quoted before concluding

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual per slot; ground is the only metric | no ground reading here; global averaging disqualified |
| 2 The Ground | anchor must not update; agreement is not triangulation | the anchor is the record, not model consensus |
| 3 Dependency Chain | ordered links; break between vocabulary and objective | the cross-scale vocabulary link is the likely break |
| 4 The Membrane | methods cross up, head starts down, lossy transform, round trip | fast to slow is the scale crossing, with an `R_T` owed |
| 5 Mint Pipeline | guards as a product; MDL bargain | no new primitive is owed for the coupling |
| 6 Closure / Reachability | import moves the wall; inward and outward are opposed | refine the instrument or import a frame, never read one against the other |
| 7 Room Chain | variation is not a verdict; next room must differ | multi-model agreement is variation, not settlement |
| 8 Union Surplus | two frames reach what neither reaches alone; residual first | the coupling is found from contact, not from a frame picked first |
| 9 Leave / Arrive | split a union; describe before looking; filters not witnesses | this is a union compound; no single lever closes it |
| 10 Ground Maintainer | ground does not decay, channel does; verifier non-access | keep the record reachable; bring a characterised residual |
| 11 The Habitat | enumerate contact and cascade; valence is residual-relative | fast is not "disturbance" by definition; cascade goes three steps out |
| 12 The Bond | typed ordered bonds; cycle sign; two currencies | the interaction is a set of bonds and a loop sign, not a strength |
| 13 Minimum Viable Set | gradient over time; chaos from a compounding remainder | fast/slow is a temporal gradient; amplification is chaos, not a new member |
| Operators table | sequence, production, comparison, negation | the direction is ordered; threshold is a comparison |
| Symbols table | `R` is the aim; habitat is enumerated | the residual drives the search, indexed per slot |

Strained readings are named as such below, not smoothed over.

---

## 3. Findings F1 to F10

### F1 - The residual is per place and process, never a global interaction strength (decisive against the framing)

Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." Fig 2 :42 "Buy independence in proportion to the cost of being wrong."

Applied here, the slot is a region/process pair. A global number for "how fast and slow processes interact" would throw away the only signal that says where to look. The world source corroborates at low overlap: Zoller et al. 2026 in *Earth System Dynamics* report that indirect effects have high spatial heterogeneity and "any type of aggregation comes at the cost of information loss". That is one witness from global vegetation modelling, independent of the framework's agent-slot figure.

**Mode:** `specified` on the per-slot requirement, `general` on the disqualification of aggregation. **Status:** triangulated (Fig 1 and the ESD spatial study, low overlap). **Refuter:** an instrument that shows one global scalar predicts the per-slot residuals without losing a live slot signal.

### F2 - Fast/slow is a gradient over time, and amplification is a compounding remainder

Fig 13 :22 "a difference that can be spent." Fig 13 :76 "Energy and a gradient compose a flow. A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is." Fig 13 :30-32 "each step acts on one kind and yields the other, and every link in the chain is changed by the link before it. That alternation is the recursion. And because each turn leaves a remainder (the residual) that re-enters the next, it is also where the randomness comes from: a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise." Fig 13 :124-125 "Smoothness, symmetry, chaos and discreteness are each what a particular composition leaves behind, and none is a seventh member."

So a fast period and a slow period are not two kinds of thing; they are different terms of the same temporal gradient, bonded to different states. The consequence widely called "amplification" or "chaos" is what a remainder does when it re-enters an amplifying chain, not an extra mechanism and not a seventh primitive.

**Mode:** `general` on the substrate reading, `specified` on the fast/slow mapping. **Status:** single-source on the figure side for the temporal-gradient claim (Fig 13); triangulated with the membrane figure for the lossy crossing. **Refuter:** a demonstration that the disturbance response is linear and memoryless under a changed slow state, with no compounding remainder.

### F3 - The scale crossing is lossy, and the round-trip gap must be measured

Fig 4 :20 "Only the actors, the currency and the anchor change." Fig 4 :22 "Only methods cross up. Only head starts come down." Fig 4 :24 "downward: something that makes the next search cheaper. Never a replay of what worked once." Fig 4 :25 "A recording carried upward looks like knowledge and is a description of one occasion." Fig 4 :27 "The transform between scales loses information, and that is the point." Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." Fig 4 :34-35 "The level a method lands on remakes it. A seed carries no small tree: it carries what will grow one, and the conditions it lands in decide what it becomes."

Reading: what a fast event contributes to the slow state is a reapplicable forcing (a method/currency that accumulates), not a recording of one storm. What the slow state contributes back to the fast event is a head start (a baseline, a boundary condition), not a replay of a past state. The transform discards information, so a fast-only model and a slow-only model will not agree when carried up and brought down; the gap `R_T` is the honest report of what the coarser description cannot hold.

**Strain, named:** Fig 4's membrane is drawn between sizes (one agent and a population), so applying it to timescale is an analogue. Re-census: Fig 13 :76 licenses a gradient over time as a distinct term, and Fig 10 :68 says levels differ in actors, currency and ground with a lossy transform between. The membrane's *rule* carries over; the *axis* is the temporal gradient. This is recorded as S1 in `11_audit.md`, not hidden.

**Mode:** `specified`. **Status:** triangulated after re-census (Fig 4 plus Fig 13 plus Fig 10, low overlap between the size membrane and the substrate chain). **Refuter:** a two-scale coupling with no information loss in either direction, verified by an instrument.

### F4 - The cross-scale relations are typed and ordered, not one symmetric strength

Fig 12 :46 "A bond is the typed relation between two operands." Fig 12 :111 "A vocabulary without bonds can name a state and cannot name a route to one." Operators table :30 "A then B; B needs A to have happened"; :37 "A produces B; B did not exist before"; :48 "a threshold relation between two quantities."

Reading the three relations the question needs:

1. **Fast to slow is production (⇒).** A storm, fire or season produces a soil-loss increment, a carbon pulse or a mixed-layer change that did not exist before. The test: "is there a B before A fires?" No.
2. **Slow to fast is sequence (→) and head start.** The ice-sheet state or ocean stratification had to reach its present condition before the next fast event acts on it in the way it does. Swap them and you get a different thing (Fig 12 :72 "swap them. Does it become a different thing? Yes.").
3. **A crossing is comparison (⋛).** Whether a cumulative forcing crosses a threshold in the slow state is a threshold relation between two quantities. The framework returns that shape, not the number.

Conflating these into a symmetric "interaction strength" is the flat-formula error: Fig 12 :5 "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." World corroboration: Salwey et al. 2026 show a meteorological drought propagates into a multi-year groundwater drought, with the subsurface extending the signal in 83 percent of affected cells, an ordered production chain rather than a symmetric correlation.

**Mode:** `specified`. **Status:** triangulated (Fig 12 plus the Operators table plus the Salwey propagation result, low overlap between operator definition and hydrological measurement). **Refuter:** an observed fast/slow coupling that is symmetric under operand swap and carries no threshold structure.

### F5 - Stabilizing versus amplifying is the sign of the cycle, not a property of either process

Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."

Whether soil formation damps a fire's effect or a fire reverses soil formation is the sign of the loop, not a standing property of fire or soil. Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries." Fig 11 :51 "No standing list of good actors survives a change of residual." World corroboration at low overlap: Börner and Dijkstra 2026 define a tipping event as "a persistent nonlinear transition driven by a self-amplifying feedback process", and Levermann 2026 reports that "two numbers per loop, its feedback strength and its timescale, suffice to locate tipping points and to estimate how fast they unfold". Levermann's two numbers are the two currencies of Fig 12 :125, applied to a loop. Note that these two world sources share the Earth-system modelling pool, so they are one witness for the field claim; the figure line is the primary authority.

**Mode:** `specified`. **Status:** triangulated on the figure side (Fig 12 cycle plus Fig 11 valence), with world corroboration from one pool. **Refuter:** a coupled pair whose loop sign cannot be defined, yet whose behaviour is stably classified as stabilizing or amplifying.

### F6 - The question is a union compound, so verdicts stay separate

Fig 9 :4-5 "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." Fig 9 :54 "when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 8 :32 "no search, however long, adds an atom." Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

The four domains of §1 are not averaged. More computational resolution is a filter for the budget, not a witness for which bond holds. Corroboration from cybernetics at genuinely low overlap: Ashby, quoted on the Wikipedia Feedback page, notes that with four mutually affecting parts "twenty circuits can be traced through them; and knowing the properties of all the twenty circuits does not give complete information about the system."

**Mode:** `general` on the union structure, `specified` on the four domains. **Status:** triangulated (Fig 9 plus Fig 8 plus the cybernetics source). **Refuter:** a single condition that predicts all four domains without leaving an intersection standing.

### F7 - Enumerate the habitat and follow the cascade outward

Fig 11 :43 "the habitat is enumerated, never composed." Fig 11 :44 "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering." Fig 11 :46 "conditions: light, water, temperature, season, terrain." Fig 11 :47 "relations: pollination, predation, competition, dependency." Fig 11 :52-53 "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out." Fig 11 :61 "Introduction is available; exclusion is not."

A storm's residual is not exhausted by the wind field. It contacts soil moisture, vegetation, runoff, sediment, coastal water, and outward until the cascade stops. The figure's own DDT case is corroborated at low overlap by the ecology source *Biomagnification*: "DDT is a pesticide known to biomagnify" and is linked to "the significant decline in North American populations of predatory birds such as bald eagles and peregrine falcons due to DDT causing eggshell thinning in the 1950s." That is a second-order effect three steps out from the direct application, the same shape as the figure's warning.

**Mode:** `specified`. **Status:** triangulated (Fig 11 plus the ecology source, low overlap). **Refuter:** an instrument that shows the fast-event residual is fully captured within first-order contact, with no cascade.

### F8 - The ground does not move with model agreement

Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool." Fig 7 :35 "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." Fig 10 :24 "the ground does not decay, the channel does." Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it."

A multi-model ensemble whose members share forcing, parameterizations and calibration data is one evidence pool wearing many names (Fig 8 :48-49 "Two frames that overlap almost completely are one frame wearing two names."). The palaeo and instrumental record is the anchor. World corroboration: Cox et al. 2026 report a "calibration deficit", that newer Earth system models reproduce the current climate better but "do not reproduce the historical record of global warming with as much fidelity as the previous generation." A better-looking present-day fit did not move the historical ground.

**Mode:** `general` on the anchor rule, `specified` on its application to this field. **Status:** triangulated (Fig 2 and Fig 7 plus the Cox preprint, low overlap). **Refuter:** a case where model consensus, with no new measurement, settles a cross-scale dispute.

### F9 - No figure line returns the coupling coefficient: a declared gap

Fig 9 :32 "you get a kind of thing, never the answer itself." Fig 13 :134 "unreachable is a verdict here, not a silence." Fig 8 :39 "a search that finds nothing is never a proof of absence." Fig 13 :137-138 "It can say the answer is out of reach with the library as it stands, so something has to be imported before it is asked again."

After the census, no figure line gives the numerical strength of a fast-to-slow coupling, the timescale ratio at which a fast forcing becomes a slow-state driver, or which process wins in a given basin. The framework returns the shape (a temporal gradient, typed ordered bonds, a loop sign, a comparison threshold, a measured round-trip gap), not the name or the number. This is a `gap` of the shape-not-a-name kind, reported as unreachable, not as silence and not as an invitation to invent a number. Börner and Dijkstra 2026 corroborate the difficulty: they note that in most situations of interest "the system and forcing timescales are not cleanly separated", so tipping can be delayed, avoided under overshoot, or occur without a threshold crossing.

**Mode:** `gap`. **Status:** declared after re-census. **Refuter:** a figure line that does in fact govern the coefficient, found by re-census, or a measurement that settles it at the ground.

### F10 - Description cost and settlement cost are two currencies

Fig 12 :125 "A composition costs in two currencies, and they do not add." Fig 12 :126 "Bits price the description. Actions price finding out whether it holds."

A finer model description of a coupling (more bits) does not pay the cost of the long observation needed to settle it (more actions). Spiegl et al. 2026 show the consequence in the solar case: doubling the solar amplitude in a model increased the initial stratospheric signal but "the dynamical response does not become more distinct", because the response depends on the background state. Larger forcing description did not buy settlement.

**Mode:** `specified`. **Status:** triangulated (Fig 12 plus the Spiegl result). **Refuter:** a case where additional descriptive resolution settles a slow-state dispute at no additional measurement cost.

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach, per Fig 10 :59 "an interest in the outcome is unavoidable, an interest in the reading is disqualifying." A falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. A two-timescale interaction is demonstrated with **no lossy transform** between scales, that is, the round trip is exact (breaks Fig 4 :27, :30).
2. A fast-to-slow coupling is shown to be a **symmetric conjunction** rather than an ordered production or sequence (breaks Fig 12 :46 and Operators :30, :37).
3. A coupled pair's feedback **loop sign cannot be defined**, yet the pair is stably classed as stabilizing or amplifying (breaks Fig 12 :121).
4. The residual of the coupling is shown to be **aggregable into one global scalar** without losing a live slot signal (breaks Fig 1 :19, :22).
5. An instrument shows that a **standing list** of "fast equals disturbance, slow equals stable background" survives a change of residual (breaks Fig 11 :49, :51).

If any fires, the shape is wrong and it is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with the shape and its refuter (F1 to F5), not with a claimed interaction strength (F9).
2. State the mode on every sentence. Do not deliver a `specified` structural claim as a measurement.
3. Keep the three cross-scale bonds separate (production, sequence, comparison) and keep their verdicts separate (F4).
4. Register the round-trip gap `R_T` between the fast-only and slow-only descriptions before claiming that either model captures the coupling (F3).
5. Enumerate the habitat outward through the cascade before selecting a mechanism (F7).
6. Ask outside readers what would refute the shape, and record their verdict before offering any framework material (F8).
7. Fig 4 :25 "A recording carried upward looks like knowledge and is a description of one occasion." Send the generator, the derivation and the refuter, not the conclusion.

---

## 6. Canonical usage check (figures README + WATSON 60, 2026-11-22)

Two sources were read after the first sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw." The canonical limit: the framework says "what a missing thing would have to look like (a shape, not a name)", then stops at the limit of the instruments and records the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are the ground for design questions; the seat reads the ground, it does not ask the anchor to decide what the figures already settle. No human ruling is owed for anything derived above.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "Fast/slow is the Fig 4 size membrane" | **Narrowed and preserved.** Fig 4 governs size; fast/slow is a temporal gradient (Fig 13 :76). The membrane rule applies as an analogue with a named strain S1, not as a direct figure verdict. |
| "Tipping point maps straight onto ⋛, so the framework names it" | **Narrowed and preserved.** The framework returns a threshold relation (Operators :48), not the number; Börner and Dijkstra confirm the concept is contested. |
| "Fast processes are disturbances, slow processes are stable background" | **Retracted.** Valence is relative to the residual (Fig 11 :49, :51); the same storm can be a benefactor to one residual and a malfactor to another. |
| "This is one interaction to be measured" | **Retracted to a union compound** (Fig 9 :54-58), with verdicts kept per domain. |
| "Shape, not a name" applied to seasons or gradients | **Narrowed and preserved**, consistent with the exemplar's correction. The phrase governs a *missing* primitive. Season and temporal gradient are already in the held set (Fig 11 :46, Fig 13 :76), so naming them is a provenanced binding, not the invention of a new primitive and not an import that moves the wall (Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."). |
| F1 aggregation finding | **Canonically confirmed.** The figures README forbids naming what the framework cannot hold; a global scalar hides the slot. |
| F9 gap | **Canonically confirmed.** "Unreachable is a verdict here, not a silence" (Fig 13 :134); "a search that finds nothing is never a proof of absence" (Fig 8 :39). |

### Strain and re-census summary

S1 (size membrane versus temporal gradient) is resolved by re-census as a licensed analogy, not a contradiction. S2 (crisp ⋛ threshold versus contested "tipping" concept) is resolved by shape-not-a-name. S3 (fast as disturbance) is retracted by Fig 11 valence. S4 (global interaction strength) is retracted by Fig 1 per-slot rule. No figure-to-figure contradiction remains. One live limit stays visible: the gap F9.

### Updated verdict

The shape survives: fast and slow are a temporal gradient, the coupling is a set of typed ordered bonds with a loop sign and a threshold comparison, the scale crossing is lossy and its round-trip gap is owed, the habitat must be enumerated through the cascade, and the anchor is the record, not agreement. What does not survive is any claimed coefficient, any named winner, any symmetric strength, and any global average. Mode `specified` on the domains, `general` on the shape, `gap` on the coefficient. Nothing is `grounded`. This is a simulated derivation, internally consistent with the figures, not a ground reading.
