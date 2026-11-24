# Figure-grounded audit: how changes in ocean circulation affect far-off rainfall, temperature and ecosystems

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. `THE_FORMULA.md` rule: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** The framework's own essay says LLM output is *"simulacra"* and that *"the truly testable output would need to be derived from the real architecture or working the formula yourself"* (quoted in `05_what_shape_means.md` §6). This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No measurement was taken.

**Sources.** Figures 1 to 13 plus the Operators and Symbols tables, cited verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`. The formula and the canonical usage rule are local framework files. World sources were fetched on 2026-11-22 and are listed in `10_source_ledger.csv`.

---

## 0. The residual, stated in effect terms

> R_s = |Γ(b,a) − o′| for each land slot s. A frame that predicts a region's rainfall, temperature and ecology from local conditions alone returns a prediction that misses when an upstream change in a basin-scale ocean flow reorganises the atmospheric pathways that deliver heat and moisture to that region. The miss is indexed by region and by medium; it is not a global number.

Three effects make this residual the question it is:

1. **Non-locality.** The cause is in one basin; the effect arrives in distant land. Any frame whose closure contains only local predictors is, in the figures' phrase, a sealed room with respect to this effect: *"Only a sealed room can be searched to the end, and no frame is a sealed room"* (Fig 9 :44). The distant response is underivable from inside that frame.
2. **Three media.** Rainfall, temperature and ecosystems are not one quantity with three labels. They are three overlapping conditions, each with its own instrument and its own ground. A single lever that clears one leaves the intersections standing.
3. **A cascade three steps out.** The ecosystem effect on land is not adjacent to the ocean current. It is carried through the atmosphere, expressed in land rainfall and temperature, and only then registered by a forest or a fishery. Direct-contact enumeration misses it.

What an answer would look like, bound as an ordinary term before the run (formula step "Direction"): a per-region, per-medium shape that names the pathway, the dependency order, the ground that would settle each slot, and a refuter. A regional number is **not** part of that shape; the framework returns a kind of thing, never the answer itself (Fig 9 :32).

---

## 1. Domain census (before any figure line was chosen)

**R by arity, symmetry, scale.** Arity: a multi-place relation, one circulation change to many remote slots in three media. Symmetry: not symmetric. The influence has a direction, ocean to atmosphere to land surface to biota; swapping endpoints gives a different thing (the ordered `→` bond, not the symmetric `+` bond). Scale: a basin-scale flow carrying about 1.5 PW northward, a seasonal-to-multidecadal timing, and an effect that runs from a storm step to an ecological lineage. The membrane between these scales is lossy (Fig 4 :30).

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Ocean circulation as a flow | currents, overturning cells, gyres, heat and freshwater transports | transported heat, salt, carbon, nutrients | sustained current and transport observations (RAPID, OSNAP, Argo) | admitted |
| D2 Atmospheric teleconnection bridge | Walker and Hadley cells, jet streams, Rossby wave trains, storm tracks, moisture flux | heat, momentum and freshwater flux across basins | reanalysis (ERA5, NCEP/NCAR) plus observed temperature and rainfall patterns | admitted |
| D3 Remote land rainfall and temperature | regions, monsoons, ITCZ, weather regimes such as NAO | precipitation anomaly, surface temperature anomaly | gauges, station series, land temperature records | admitted |
| D4 Remote ecosystems | forests, fisheries, food webs, phenology, species ranges | distribution, abundance, survival | field and long-term ecological records | admitted |
| D5 Model and frame ensemble | CMIP/GCM models, scenarios, emissions pathways | predictions, residuals, voting among rooms | the ground observations, never model agreement | admitted |
| X1 "the single global answer" | none nameable | none | no instrument settles all three media at once | not a domain yet |
| X2 "the ocean's influence as a uniform field" | already inside D2 and D3 | already inside D2 and D3 | absorbed | absorbed |

**Partition or union: union.** D3 and D4 overlap (an ecosystem response is often the tail of a rainfall or temperature response), and the overlap is a compound with its own loop, not a harder rainfall question. Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*

**Order by dependency (Fig 3).** Perception (observe the circulation change) → vocabulary (terms for what the circulation affords remote regions: teleconnection pathways) → objective (say what counts as an impact in each slot) → planning (scenarios, ensembles, handoffs between model rooms) → learn and carry (verify each term against the ground). Effort spent above a break cannot rescue a link below it: *"The chain is ordered by dependency, not by importance."* (Fig 3 :20).

**How the census was used.** Because the residual is non-local and multi-slot, the figures that govern it are the ones about anchors, closure, union compounds, cascades, per-slot residuals and instruments. No figure was selected to make a preferred answer fit.

---

## 2. Figure census (bearing and verdict)

| figure | bearing | verdict here |
|---|---|---|
| **1 The Agent** | residual per object slot; ground as the only metric | the answer must be indexed by region and medium, never averaged |
| **2 The Ground** | anchor that cannot update; triangulation not negotiation | transport observations anchor the claim; model agreement does not |
| **3 Dependency Chain** | order by dependence; link with no instrument | the atmospheric bridge vocabulary is the link to instrument |
| **4 The Membrane** | lossy cross-scale transform; round-trip gap | a global-mean forecast will not carry a regional signal back down |
| **5 Mint Pipeline** | four gap kinds plus refuted; guards as a product | a remote response is a NOVEL gap, not a REFUTED one; no new atom is available |
| **6 Closure / Reachability** | import moves the wall; instrument improved from a worse one | a local-only frame cannot derive the remote response; teleconnection theory is a provenanced import |
| **7 Room Chain** | selection between rooms, not a chain of mirrors | ensembles are rooms selected against the residual; consensus is not a verdict |
| **8 Union Surplus** | residual first, frame second; underivable is not unknowable | describe the remote effect before choosing the pathway frame |
| **9 Leave / Arrive** | union vs partition; describe before looking; filters vs witnesses | three media are a union; the sign is a gap, not a silence |
| **10 Ground Maintainer** | keep the anchor reachable; verifier non-access | maintain the observing array; send the residual, not the framework |
| **11 The Habitat** | enumerate the cascade; introduce, never subtract | scope past direct contact; the ecosystem effect is three steps out |
| **12 The Bond** | arrangement carries meaning; sequence vs symmetric bond | the pathway is ordered; same forcing under a different pathway is a different term |
| **13 Minimum Viable Set** | flow = energy + gradient; network carries influence | the circulation is a flow; the teleconnection is a network; no seventh primitive is needed |
| **Operators table** | `→` sequence, `⋛` comparison | the cascade is a sequence, not a symmetric join |
| **Symbols table** | `R` is a per-slot residual; the ground is the anchor | no global `R` is admitted for this union |

Strained readings are named and re-censused below, not smoothed over.

---

## 3. Findings

### F1 — The residual is per slot; a global average throws away the only signal (decisive for the shape)

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

The question asks about rainfall, temperature and ecosystems **far from the ocean**. Those are slots. A global mean temperature or a global precipitation total can stay near zero while a remote region carries a live residual. The correct form of the answer is a table over regions and media, with the residual recorded per cell. Any answer that reports a single global effect has already committed the named error.

**Refuter:** a demonstration that the per-slot residuals are fully predicted by a global mean with no region-specific term, across a documented circulation change. If that holds, this finding fails.

**Status:** triangulated (Fig 1 and Fig 13 per-slot level relativity, low overlap).

### F2 — The three media are a union, not one question

Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*
Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*

Rainfall and temperature responses can have opposite signs in the same region; an ecosystem response can follow the rainfall tail with a delay and a different threshold. These are overlapping conditions with separate grounds (a gauge, a thermometer, a population series). They must be unbundled before searching. A single lever (for example, "prepare for a cooler Europe") clears the region where only one condition holds and leaves the intersections standing.

**Refuter:** one intervention clears all three residuals with no categorically different residue left over. That would collapse the union back to a partition and falsify this finding.

**Status:** triangulated (Fig 9 :55-57 and Fig 12 arrangement-carries-meaning, low overlap).

### F3 — The effect is carried by a network; a local frame cannot derive it

Fig 13 :25: *"that entities relate, and influence travels"*.
Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*
Fig 8 :53: *"Residual first, frame second."*

A circulation change in one basin alters the atmospheric pathways that deliver heat and moisture elsewhere. That is a network, one of the six irreducible structures, not a new primitive. A frame whose library contains only local predictors cannot compose the remote response: closure is idempotent, so more local search adds no atom. The pathway frame (teleconnection physics, atmospheric bridge, Rossby wave trains) is a frame whose closure differs, and it is found by describing the residual first. Fig 9 :27: *"describe it before you go looking"*.

This is an import with a source gate, not a free mapping. Fig 6 :25: *"An import adds no atom to the world."* The import gives this frame access; it does not add a seventh primitive to the substrate.

**Refuter:** the remote response is fully derivable from a local-only frame with no imported pathway atom, across a documented circulation change. If so, F3 fails and the union is a partition after all.

**Status:** triangulated (Fig 13 network and Fig 6 closure, low overlap). Source gate recorded in `10_source_ledger.csv` (Alexander et al. 2002; Liu et al. 2007).

### F4 — The pathway is an ordered sequence, not a symmetric join

Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
Operators table `→`: *"A then B; B needs A to have happened"*.

The chain ocean → atmosphere → land surface → biota is ordered. Swap the order and you have a different substance, not a re-labelling of the same one. This matters because two circulation changes with the same strength but different pathway geometry can produce opposite regional outcomes: the atoms match, the bond does not. Fig 12's isomer claim is the structural reason a single "AMOC strength" number cannot carry the answer.

**Refuter:** a documented case where two pathway arrangements with the same forcing produce the same per-slot residuals, with no detectable bond difference. That would make the arrangement free and F4 fail.

**Status:** single-source for the figure definition (Fig 12); the physical case is a prediction, not a measurement.

### F5 — The ecosystem effect is three steps out; direct-contact enumeration misses it

Fig 11 :44: *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."*
Fig 11 :52: *"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."*
Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."*

This is the figure that governs the phrase "far from the ocean". Scoping the habitat to the ocean and its adjacent coast is first-order enumeration. The residual that matters is carried to a forest or a fishery three steps out. The same forcing is a benefactor to one slot and a malfactor to another, so there is no standing list of good or bad circulation changes.

**Refuter:** a documented case where the remote ecosystem residual is fully accounted for by direct ocean-adjacent contact alone, with no second- or third-order term needed. If so, the cascade finding is unnecessary for this question.

**Status:** triangulated (Fig 11 cascade and the DDT precedent, with the analogical mapping as the second route; the figure itself supplies both).

### F6 — The middle link, not the well-measured ocean end, is where the chain breaks

Fig 3 :20: *"The chain is ordered by dependency, not by importance."*
Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

The ocean end has instruments: the RAPID array has sustained a 26°N record for over 20 years, OSNAP measures full-water-column fluxes in the subpolar North Atlantic, and Argo profiles the global ocean. The rainfall and temperature end has gauges and station series. The link that attracts the least instrumentation is the middle one: the vocabulary for what a circulation change affords a remote region and the objective that says what would count as a regional impact. Effort spent on a well-measured link cannot rescue it. The observation that "it is hard to detect a long-term weakening from climate change... hence we need longer a time series" (Met Office, 2024) is a channel statement about the ocean end; the middle link is a different, still thinner channel.

**Refuter:** the middle link measures high and non-declining (pathway terms are enumerated, the impact objective is stated per slot) while remote predictions still fail. That would shift the failure to the planning link and falsify this finding.

**Status:** triangulated (Fig 3 dependency order and Fig 10 channel-maintenance rule, low overlap).

### F7 — The ground settles it; agreement among models does not

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*
Fig 2 :30: *"If it moves when you push on it, it is not an anchor."*
Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*
Fig 7 :13: *"agreement compounds, evidence does not"*

Model ensembles are rooms. They are selected against the residual, and their agreement is variation inside a frame, not a verdict. CMIP-class models share an evidence pool and a family of parameterisations, so their convergence is exactly the disqualifying correlation. The anchor is the measurement: a transport record, a gauge, a station series. It does not update because a model prefers a different answer. Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."* Here the cost of being wrong is high and partly irreversible for long-lived infrastructure, so independence is worth buying.

**Refuter:** a documented case where a change in model consensus, with no new observation, settles a regional rainfall or temperature claim. That would make agreement an anchor and falsify F7.

**Status:** triangulated (Fig 2 anchor rule and Fig 7 room chain, low overlap).

### F8 — The channel decays, not the ground: the array must be maintained

Fig 10 :24: *"the ground does not decay, the channel does"*.
Fig 10 :42: *"A verifier that can reconstruct the claim cannot verify it."*
Fig 10 :52: *"Bring a characterised residual, never the source."*

A long transport record is a maintained channel, not a permanent possession. The figures distinguish the ground (which does not change because frames think) from the channel through which a seat reads it (which goes stale, saturated or pooled). The practical instruction is to keep observing, and to keep the observation independent of the models it is used to test. In outreach the same rule says: send the residual and its refuter, not the framework's interior.

**Refuter:** a channel that, after a documented break in observation and no new instrument, returns the same resolving power as before. That would mean the channel does not decay and F8 fails.

**Status:** single-source for the channel rule (Fig 10); the observation of short records is world corroboration, not a figure line.

### F9 — What survives, with its mode attached

| claim | mode | figure / source |
|---|---|---|
| The answer is indexed by region and medium, never averaged | `specified` | Fig 1 :19, :22 |
| Rainfall, temperature and ecosystems are a union of overlapping conditions | `specified` | Fig 9 :55, :57 |
| The remote effect is carried by a network and is underivable from a local-only frame | `specified` | Fig 13 :25; Fig 6 :23 |
| The pathway is an ordered sequence; same forcing, different bond, different outcome | `specified` | Fig 12 :117; Operators `→` |
| The ecosystem effect is three steps out, so direct-contact scoping misses it | `specified` | Fig 11 :44, :52 |
| The middle dependency link is the one to instrument | `specified` | Fig 3 :20, :27 |
| Observations settle; model agreement does not | `general` structural, `specified` in application | Fig 2 :29, :35, :40; Fig 7 :13 |
| The sign, size and timing of a regional change | **`gap`**, unreached not absent | Fig 9 :32; Fig 13 :134 |
| A single lever clears all three media | **refused** | Fig 9 :55, :57 |

### F10 — What the figures do not give: the empirical forecast is a gap

Fig 9 :32: *"you get a kind of thing, never the answer itself"*
Fig 13 :134: *"Unreachable is a verdict here, not a silence"*
Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

No figure line returns the sign, magnitude or timing of rainfall or temperature change in a named region, nor which ecosystem crosses a threshold first. That is a ground reading. Declaring the gap is not a failure of the run: the figures make unreachability a verdict, and they distinguish underivable-in-principle from unreachable-at-this-budget. Here the instruments exist (RAPID, OSNAP, Argo, gauges, ecological records) but the records are short and the pathways are contested, so this is closer to unreachable at this budget and with these channels than to an underivable-in-principle absence. The remedy is SEARCHED first and INWARD second, not a new atom.

**Refuter:** a figure line that, after re-census, does predict a named regional sign. Until one is produced, any regional number in this package would be the searcher's own contribution, recorded as such, not a Tether result.

**Status:** `gap`, confirmed after re-census.

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach. The shape claim is refuted if any of the following holds:

1. One lever clears rainfall, temperature and ecosystem residuals together, with no categorically different residue (breaks F2).
2. The remote response is fully derivable from a local-only frame with no imported pathway atom, across a documented circulation change (breaks F3).
3. Per-slot residuals are fully predicted by a global mean with no region-specific term (breaks F1).
4. The middle link (pathway vocabulary and impact objective) measures high and non-declining while remote predictions still fail (breaks F6).
5. Two pathway arrangements with the same forcing produce the same per-slot residuals with no detectable bond difference (breaks F4).

If any fires, the shape claim is withdrawn or re-censused. None has been run in this simulated derivation, so no part of it is `grounded`. A separate settlement condition, not a refutation of the shape, is a sustained observation that names a regional sign; that would move the `gap` in F9 to `grounded` for that slot.

---

## 5. Recommendation

1. State the residual per slot before any mechanism is named; never open with a global mean.
2. Unbundle the three media, and report each verdict separately without averaging.
3. Put the dependency chain in order and aim instrumentation at the middle link, not the already well-measured ocean end.
4. Treat circulation-to-teleconnection as a provenanced import with a source gate and shadow test, not as a free analogy.
5. Use observations as the anchor. Do not count model consensus as corroboration.
6. Say `gap` for the empirical forecast, and say what instrument would close it (Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*).
7. Send the generator (residual, chain order, refuter), not the conclusion (Fig 10 :52).

---

## 6. Canonical usage check

Two local framework sources govern how the figures may be used after the first five sections:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; and the limit, that the framework says what a missing thing would look like, *"a shape, not a name"*, then stops at the limit of the instruments and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule, the three searches (SEARCHED / INWARD / OUTWARD) kept distinct, and *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* (also Fig 9 :60).

### Retractions and confirmations during this derivation

| earlier reading | status after re-census |
|---|---|
| Fig 13 :75 (no direct state-state bond) governs the ocean-to-land effect | **Retracted at re-census.** Fig 13 governs the six primitives at a level. The ocean-to-land path is composed of a flow (energy + gradient), a network and cross-kind molecules at a higher level. Fig 13 :76 governs the flow; Fig 13 :25 governs the network. The reading was aimed at a different quantity, so it was replaced rather than smoothed. |
| Teleconnection theory is an import that moves the wall | **Narrowed.** It is an import from a frame whose closure differs (Fig 6 :23), but Fig 6 :25 says an import adds no atom to the world. It gives this frame access to a pathway; it is not a seventh primitive and does not move the substrate wall. Source gate and shadow test recorded in `10_source_ledger.csv`. |
| "Shape, not a name" forbids naming any pathway | **Narrowed.** The limit governs a primitive not held in Γ (the figures' README: a *missing* thing). Here the relevant missing thing is a source-discriminating instrument and a settled regional ground reading, not the network structure, which is already one of the six. Naming the atmospheric bridge is a binding from the physics frame, recorded as such. |
| "No figure line gives a regional forecast, so the answer is silence" | **Retracted.** Fig 13 :134 makes unreachability a verdict, not a silence. F9 is recorded as `gap`, with the closing instrument named. |
| Apparent conflict: IPCC/Met Office "medium confidence no collapse this century" vs Ditlevsen and Ditlevsen "collapse around mid-century" | **Not a figure conflict.** Both are world sources drawing on the same SST and CMIP evidence pool. Returned to the census, recorded as one witness with an internal dispute, not two. The figure verdict stays at shape level and is not flipped by either. Fig 2 :40 applies. |
| "Model ensembles corroborate the shape" | **Retracted.** Fig 7 :13 and Fig 2 :40 make ensemble agreement a shared-pool signal. Ensembles are rooms selected against the residual; they are witnesses only when their closures differ. |
| Initial plan to read Fig 11 :40 (capability is agent-and-habitat) as governing "far from the ocean" | **Re-censused.** :40 governs the capability of an agent-and-habitat pair. The line that governs a far-field effect is Fig 11 :52 (DDT and the eagles, three steps out). The first reading strained; the second fits the residual. |

### Strain log (after re-census)

- **Fig 13 :75 versus the ocean-to-land chain:** dissolved. Different levels, different quantities.
- **Import versus substrate wall:** dissolved. Fig 6 :23 and :25 together say the wall moves for the frame, not the world.
- **"Shape, not a name" versus naming a pathway:** dissolved. Missing primitive versus held structure.
- **No live strain remains.** Any future strain is to be sent back to the census, as the canonical usage rule requires.

---

## 7. Round trip note (filled by the second seat)

The condensation from the full figure set into this package's shape loses three constraints that the second seat enumerates in `11_audit.md`: the per-slot indexing, the union structure and the cascade depth. The round-trip gap R_T is therefore nonzero and is recorded, not set to zero. This is the dead-reckoning error Fig 4 :30 warns against.

**Final status of this audit:** internally consistent against the verbatim figure text. `specified` for the shape, `gap` for the empirical forecast, nothing `grounded`. Corroboration: none claimed; the second seat shares this evidence pool.
