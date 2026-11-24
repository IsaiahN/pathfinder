# Figure-grounded audit: when does drought become a persistent shift?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** The Recursive Self-Improvement Trap calls LLM output "simulacra" and says "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** The figures as text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical figures README, `THE_FORMULA.md`, the Operators and Symbols tables, and the world sources in `10_source_ledger.csv`. Every figure quote below is checked against the verbatim extract, not a summary.

---

## 0. The residual, in effect terms

**R:** For a given water store at a given place, when does a drying excursion stop being a transient deviation (forcing relaxes, the store returns to its prior range) and become a persistent shift (the store settles into a new, self-maintaining dry regime that does not return on the management timescale)?

R is described before any frame is chosen:

- **Arity:** at least two. A forcing (precipitation, evaporative demand) and a state (water availability in a store), evaluated as a relation across time. A second pair is the comparison of two trajectories: one that returns and one that does not.
- **Symmetry:** broken. Reversing the sign of the forcing does not reverse the state. That is hysteresis. The governing bonds are therefore ordered (sequence, →) and comparative (threshold, ⋛), not symmetric ones.
- **Scale:** cross-scale and cross-kind. Fast states (soil moisture, a season, a storm) couple through structures (gradients, flows, networks) to slow states (groundwater storage, vegetation, soil carbon, land use, climate baseline). The question is about what crosses the membrane between those sizes.

**The two options and what each leads to.** A: define persistence by a fixed index threshold and duration. This is portable and cheap, but the index becomes the anchor, so a change of index or reference period changes the answer without the ground moving. B: define persistence by a change in the system's recovery relation, anchored in independent measurements. This is checkable at a place, but it withholds the portable number until a ground reading supplies it.

**The sought-for shape, bound as an ordinary term (formula "Direction"):** a *persistent shift* is a state of a water system in which (i) the recovery time from a given perturbation exceeds the return interval of the forcing at that slot, (ii) the dry state is maintained by a closed positive feedback across at least one fast and one slow variable, and (iii) independent ground readings (streamflow, storage, vegetation, paleo-context) agree that the new state has held beyond the forcing. This is a shape with three tests, not a universal duration. Binding it here makes the preference refusable by the same test as everything else.

---

## 1. Domain census before choosing any line

One line per domain: actors, currency, anchor. No nameable anchor means it is not yet a domain.

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D1 Detection and measurement | gauges, wells, stream gauges, flux towers, GRACE and SMAP satellites, tree-ring proxies, indices SPI/SPEI/PDSI/USDM | readings of water availability and its variance | the measured record at a place, calibrated by the paleo record | partition: event or shift |
| D2 Land-surface and ecohydrological mechanism | soil, roots, vegetation, groundwater, evapotranspiration, runoff, infiltration, dust, fire and beetles as disturbance | water and energy fluxes and storage | conservation of mass and energy, watershed and field experiments | union compound: interacting conditions |
| D3 Baseline and reference | climate normals, reference periods, paleo reconstructions, "drier than normal" definitions | the reference state against which persistence is measured | the measured record, not the chosen normal period | frame with a differing closure, imported with a shadow test |
| D4 Decision and management | water managers, irrigators, cities, ecosystems | cost, reversibility, available options | actual water availability, plus human judgment where the question is about people | comparison: transform or restore |

**R by arity, symmetry, scale** is set out in §0. **Partition or union:** R overall is a union, not a partition. Meteorological persistence, hydrological or groundwater persistence, ecological or vegetation persistence, and socioeconomic persistence are overlapping conditions. A single lever clears the region where only one condition holds and leaves the intersections standing. D1 therefore splits into D1a meteorological, D1b hydrological and D1c ecological before searching. **Order by dependency (Fig 3):** D3 baseline must be characterised before D1 can say "returned to what"; D1 before D2 can attribute a mechanism; D2 before D4 can choose transformation over restoration. Optimising a link that already works cannot rescue one that does not (Fig 3 :19).

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| Fig 1 The Agent | residual per slot, never aggregated | governs D1; kills a global-index verdict |
| Fig 2 The Ground | anchor definition, independence, triangulation | governs D1 and D3; indices are frames, gauges are anchors |
| Fig 3 Dependency Chain | the under-instrumented middle link; ordered chain | governs the whole question's bottleneck |
| Fig 4 The Membrane | kernel unchanged with size; methods cross, recordings do not | governs scale crossing between event and regime |
| Fig 5 Mint Pipeline | settling is necessary, not sufficient; support before search | governs classification-versus-effect distinction |
| Fig 6 Closure / Reachability | instruments improved from worse ones; refine on an axis that can carry it | governs D1 instrument extension |
| Fig 7 Room Chain | agreement compounds, evidence does not | governs outreach, not the physical verdict |
| Fig 8 Union Surplus | residual first, frame second; a null search is not absence | governs the union split and the honest stop |
| Fig 9 Leave / Arrive | split unions; describe before looking; filters are not witnesses | governs D1 and the union split |
| Fig 10 Ground Maintainer | ground does not decay, channel does; bring the residual | governs monitoring decay and outreach |
| Fig 11 The Habitat | enumerate contacts; cascades; asymmetric introduction | governs D2 and D4 |
| Fig 12 The Bond | names state but not route; goal is comparison; cycle closes | governs the event/shift distinction directly |
| Fig 13 Minimum Viable Set | cross-kind composition; gradients over space and time differ; compounding remainder | governs D2 mechanism |
| Operators table | ⋛ threshold relation between two quantities; → sequence | governs the "when" as a comparison |
| Symbols table | R is the aim, not only the error signal; always a slice | governs the residual statement |

Strained readings are named as such below, not smoothed over.

---

## 3. Findings

### F1: Persistence must be indexed per slot, not aggregated (D1, `specified`, triangulated)

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*

Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

Fig 10 :25-26: *"stale percepts, dropped transients, saturated metrics, pooled readings"*

A continental mean drought index can sit near zero while one aquifer is in a live persistent shift. Fig 1 :13 allows exactly that state: *"a global R near zero with one live slot residual is a legal state"*. The persistence question is therefore answered at the scale of the slot: the catchment, the aquifer, the stand. Pooled readings and saturated indices are named ways of losing the signal before it reaches the anchor.

**Refuter:** exhibit an aggregated index that classifies local persistence perfectly at every slot with no live residual left over. Triangulated across Fig 1 and Fig 10 (low overlap: per-slot indexing versus channel decay).

### F2: The anchor is the measurement, not the index (D1 and D3, `specified`, triangulated)

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."*

Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."*

Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*

Drought indices are frames. SPI, SPEI and PDSI draw heavily on the same precipitation and temperature inputs, so their agreement is one evidence pool talking, not two confirmations (Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*). The anchors are streamflow, groundwater levels, soil moisture flux, vegetation state and paleo reconstruction. **V Loon et al. 2016** (world source, read) put the same point in hydrological terms: droughts result from a complex interaction of meteorological anomalies, land surface processes and human storage changes, and definitions must be revisited.

**Refuter:** show two indices built on disjoint evidence whose agreement tracks the ground and whose disagreement tracks known failures. Triangulated across Fig 2's anchor rule and Fig 2's independence rule; the world source is a different field but shares the multi-driver conclusion.

### F3: A persistent shift is a closed loop, a temporary event is an open chain (D2, `specified`, triangulated)

Fig 12 :121: *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."*

Fig 11 :52-53: *"contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."*

This is the decisive mechanism line. A temporary event is a linear excursion with a negative return. A persistent shift requires a positive feedback whose output re-enters as input across slow variables: low soil moisture reduces evapotranspiration, which reduces local rainfall, which lowers soil moisture; vegetation loss reduces infiltration and recharge, which lowers groundwater access, which kills more vegetation; groundwater depletion removes the buffer that previously carried the system through a dry season. Because a chain cannot close by construction, a linear causal story cannot represent persistence at all. The third-order cascade warning matters: scoping the habitat to precipitation alone misses the variable that is three steps out.

World corroboration: **Rietkerk et al. 2004** report that such shifts "have been theoretically attributed to positive feedback and bistability of ecosystem states." **IPCC AR6 WG1 Ch8 2021** states that "Non-linear water cycle responses are explained by the interaction of multiple drivers, feedbacks and time scales (high confidence)."

**Refuter:** a documented persistent dry state with no closed positive feedback, or a model in which removing the candidate loop leaves persistence unchanged. Triangulated across Fig 12 (cycle) and Fig 11 (cascades) plus two world sources in lower-overlap fields.

### F4: The transition crosses kinds and scales; a precipitation-only axis cannot carry it (D2, `general` composition, triangulated)

Fig 13 :74: *"Everything else is a composition across the two kinds, never within one."*

Fig 13 :76: *"Energy and a gradient compose a flow. A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is."*

Fig 13 :31-32: *"a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise."*

Fig 6 :29: *"inward: is our representation adequate to hold it? The instrument extends access. Fails by refining forever on an axis that cannot carry it. Sharpen in our own terms."*

Persistence is produced by a fast state coupling through a structure to a slow state. A gradient over space (which place is drying) and a gradient over time (multi-year decline) are different terms, so a single precipitation index conflates two different compositions. Refining that index forever refines an axis that cannot carry the slow-state result. Fig 4 :19-20: *"The kernel is the part that does not change with size: the same loop and the same rule for naming what worked, whether one agent is running it or a thousand. Only the actors, the currency and the anchor change."* The loop is the same at the seasonal and the decadal scale; the actors and the anchor change.

**Refuter:** a persistent shift predicted perfectly by precipitation alone at every slot, with no storage or vegetation state entering the prediction. Triangulated across Fig 13 and Fig 6; world corroboration from Van Loon 2016 and IPCC 2021.

### F5: "When" is a comparison and a sequence, not a state name (D3 and D1, `specified`, triangulated)

Fig 12 :111: *"A vocabulary without bonds can name a state and cannot name a route to one."*

Fig 12 :112: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."*

Operators table :51: *"a goal is a comparison, which is why a vocabulary without it cannot state one"*

Fig 9 :27-28: *"describe it before you go looking, or any frame you pick will seem to fit"*

A vocabulary that can only say "water availability is low" cannot say "the system failed to return." The latter needs the comparison bond and the sequence bond: compare recovery time with the return interval of the forcing, and order the states so that the second depends on the first. Describe the failure to recover before choosing SPI, SPEI, a reference period or a paleo baseline, or any of them will seem to fit. The baseline itself is a moving frame in a human-modified world, not the anchor (Van Loon et al. 2016 name "changing the baseline of drought in the Anthropocene" as a research gap).

**Refuter:** state the event/shift transition as a state predicate alone, with no comparative or temporal operator, and still discriminate all known cases. Triangulated across Fig 12, the Operators table and Fig 9.

### F6: The question is a union and must be unbundled before search (D1, `specified`, triangulated)

Fig 9 :4-5: *"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."*

Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*

Fig 3 :25-26: *"having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."*

Meteorological persistence (rainfall deficit), hydrological persistence (storage and streamflow), ecological persistence (vegetation and soil) and socioeconomic persistence (demand exceeding supply) are four conditions with different rules. One lever clears the region where only one holds and leaves the intersections. The chain breaks at the middle link: we can measure rainfall and we can plan water infrastructure, but "what would count as a new state" has neither obvious test nor instrument. Effort spent on better climate models lands above that break (Fig 3 :19).

**Refuter:** one rule that classifies all four condition types and their intersections without splitting. Triangulated across Fig 9 and Fig 3.

### F7: Management follows the ground verdict, and introduction is asymmetric (D4, `specified`, single-source for the management claim)

Fig 11 :61: *"The seat's power is asymmetric. Introduction is available; exclusion is not."*

Fig 11 :63-64: *"a managed ecosystem is permanent work rather than a solved state"*

If the shift is persistent, the correct response is introduction (import water, re-establish vegetation, change land use) and continuing work, not waiting for restoration to a prior state. The habitat, which includes climate and existing land use, cannot be subtracted. Misclassifying a persistent shift as a temporary event is therefore the expensive error: it spends the recovery interval waiting for a return that will not come. Breshears et al. 2005 give the ground case: after 15 months of depleted soil water, over 90 percent of the dominant overstory tree died, and the die-off "rapidly alters ecosystem type, associated ecosystem properties, and land surface conditions for decades."

**Refuter:** a persistent dry state reversed by removing one forcing, with no introduction and no ongoing work. Marked `single-source` for the management-specific claim (Fig 11); the classification dependency itself is triangulated by Fig 12 :112.

### F8: Instruments are improved from worse instruments; the channel decays (D1, `specified`, triangulated)

Fig 6 :32: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."*

Fig 10 :24: *"the ground does not decay, the channel does"*

Detection improved from gauges to wells to flux towers to satellites to tree-ring reconstructions, each built on the residual the last one produced. Nobody specified GRACE from an account of groundwater drought. Conversely, a monitoring network that stops reporting does not change the ground, it loses touch with it. A verdict of "no shift detected" from a decaying network is a channel failure, not a ground result (Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*).

**Refuter:** a sensor specified from the description alone that detects persistence where no prior instrument returned anything. Triangulated across Fig 6 and Fig 10.

### F9: The figures give a shape, not a universal duration (all domains, `general` limit, triangulated)

Fig 9 :32: *"you get a kind of thing, never the answer itself"*

Fig 13 :135: *"It cannot say which primitive is missing, because naming it would mean already holding it."*

Fig 13 :134: *"Unreachable is a verdict here, not a silence"*

No figure line yields "24 months," "SPEI below minus two" or any other universal threshold. Such a number is a name where the framework returns a shape. It is owed from the ground: from the recovery curves, the storage records and the vegetation responses at the slot. This is unreachable **at this budget and without ground readings**, not underivable in principle (Fig 8 :40-43 keeps those facts distinct). Marking a number `grounded` without a measurement would be the output-layer defect the framework forbids.

**Refuter:** a figure-derived universal duration with a stated derivation from the verbatim lines. Triangulated across Fig 9 and the canonical figures README.

---

## 4. Pre-registered refuter

Written before the conclusion, per the seat rule that "a falsifier written before the run is a design instrument, not only an honesty device." The shape claim is refuted if any of the following holds:

1. A persistent dry state is documented with no closed positive feedback, and removing the candidate loop leaves persistence unchanged (breaks F3).
2. An aggregated index classifies local persistence perfectly at every slot, leaving no live residual (breaks F1).
3. A persistent shift is predicted perfectly by precipitation alone at every slot, with no storage or vegetation state (breaks F4).
4. One rule classifies meteorological, hydrological, ecological and socioeconomic persistence and their intersections without splitting (breaks F6).
5. A universal numeric duration is derived from the figure lines themselves (breaks F9, or removes the need for a ground reading).

Until one of these is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Keep verdicts per domain separate. D1 and D2 are triangulated; D4's management claim is single-source and must be labelled so.
2. Answer the "when" as a comparison plus a cycle test at a named slot, never as a global index duration (F1, F3, F5).
3. Split the four drought types before searching (F6).
4. Anchor the verdict in measurements, not in index agreement (F2).
5. Offer the shape and its refuter before any theory, and only then the links (Fig 10 :52).
6. State mode on every substantive sentence. Do not promote a `specified` shape to a `grounded` number.

---

## 6. Canonical usage check

Two sources were read after the first five sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo"; "a reading that makes one contradict another has misidentified its domain, not found a flaw"; the framework returns "a shape, not a name"; "Indiscernibility is not identity."
- `FRAMEWORK/figures/THE_FORMULA.md` step 7: underivable-in-principle and unreachable-at-this-budget are "DIFFERENT FACTS with different instructions." Step 5: "the ground settles it. Verified only by what pays. A gate is not the ground."

### Retraction and confirmation log

| earlier reading | status after the canonical check |
|---|---|
| "a fixed SPEI threshold answers the question" | **Retracted.** That is a name where the framework returns a shape, and it makes the index the anchor (F2, F9). |
| "persistence is abrupt tipping" | **Narrowed, not retracted.** The cycle and threshold rules cover abrupt and smooth transitions. Deb et al. 2024 say forecasting which type occurs "remains an open challenge." The shape does not require abruptness. |
| ⋛ applied to "two states" | **Type error, re-census.** The Operators table defines ⋛ as *"a threshold relation between two quantities."* The comparison is between recovery time and the forcing's return interval, both quantities, not between two states. No strain after re-census. |
| Fig 13 :74 forbids a fast-to-slow transition | **Retracted.** Fig 13 forbids composition within one kind. The drought transition is state-to-structure-to-state, which is exactly the legal direction. Reading it as forbidden was a domain error. |
| "no figure line governs" | **Rejected after census.** Nine findings carry verbatim lines. The gap is the numeric threshold, not the shape. |
| F7 single-source | **Confirmed and labelled.** The management claim rests on Fig 11; it is not averaged with D1 or D2 verdicts. |

### Strain still live

One strain remains, and it is recorded rather than hidden: the world literature splits between sudden catastrophic shifts (Scheffer 2001, Rietkerk 2004) and continuous loss of resilience (van Nes and Scheffer 2007, Hirsch and Koren 2026). The framework's comparison and cycle rules can hold both, but the public answer must not equate "persistent" with "abrupt." This is a boundary strain, not a contradiction between figures.
