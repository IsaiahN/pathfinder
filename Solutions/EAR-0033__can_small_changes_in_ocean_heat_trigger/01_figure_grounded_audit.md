# Figure-grounded audit: can small changes in ocean heat trigger large or persistent ice-sheet flow?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured.
Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground
settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement
Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the
real architecture or working the formula yourself."* This document is a simulated derivation checked
for internal consistency against the figures. It cannot settle the question it reports on. See
`05_what_shape_means.md` section 7.

**Sources.** The figure text extract `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical usage
rule `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, and the
world sources actually opened and recorded in `10_source_ledger.csv`. Every figure quote below was
read from the extract this session.

---

## 0. The residual, in effect terms

R = |Γ(b,a) - o'| per object slot s (Fig 1 :8, Fig 1 :11). Here:

- Γ is the ice-sheet/ocean model library: its terms for basal melt, buttressing, grounding-line flux and ice velocity.
- b is the believed ocean state (cavity temperature, water-mass access), a is the action (a change in ocean heat delivered at the ice-ocean interface).
- o' is the ground reading: satellite ice velocity, surface elevation change, grounding-line migration, borehole melt rate.
- s is one glacier, one ice stream, one grounding-line sector. It is never the global mean.

The question asks about the *shape of the map* from a small a to o'. Two readings are in play:

1. **Proportional / recoverable.** A small heat increment gives a small flow increment, and removing the heat restores the old flow. The residual stays small and trends down.
2. **Threshold / persistent.** A small heat increment, applied when the ice is configured a certain way, gives a large flow increment that continues after the forcing is removed. The residual becomes large and does not trend down.

The sought-for shape, bound as an ordinary term before the run (Formula, "Direction"): the map has the second form only when (i) the forcing reaches the contact and (ii) the contacted ice is configured so that the response re-enters as input with a positive sign. These are the two conditions C1 and C2. Until this shape is bound it predicts nothing and no step in the loop can check it.

---

## 1. Domain census (before choosing any figure line)

**R by arity, symmetry, scale.** Arity: at least three place (forcing, contacted ice configuration, flow response), indexed by slot s. It carries an ordered bond (forcing then response) and a comparison bond for "large", not a symmetric join. Symmetry: "large" and "persistent" are NOT the same predicate. "Large" is a threshold relation between two quantities (Fig 12 :87, Operators :49). "Persistent" is a property of a loop, not of a magnitude (Fig 12 :121). Scale: ocean-basin heat transport, ice-shelf cavity circulation, grounding-line migration, ice-stream flow, decadal to millennial response; the membrane between scales is lossy (Fig 4).

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Ocean heat transport | currents, water masses, heat content | heat (energy), temperature | Argo/ENSO-independent temperature and heat-content measurements | admitted |
| D2 Ice shelf cavity / grounding zone | warm-water intrusion, basal melt, buttressing, grounding line | melt rate, resistive stress | borehole melt rates, radar/altimetry grounding-line position | admitted |
| D3 Ice-sheet flow dynamics | ice streams, bed topography, sliding law | ice velocity, flux across the grounding line | satellite interferometry and altimetry | admitted |
| D4 Threshold / detection frame | variance, lag-1 autocorrelation, hysteresis, reversibility experiments | persistence of R, recovery time | the ground, tested by reversing the forcing | admitted |
| X1 Ocean heat as sole sufficient cause | the forcing alone | temperature | none nameable without the ice configuration | not a domain yet; absorbed into C1 |
| X2 One global ice-sheet tipping point | "the ice sheet" | global mean sea level | already inside D2/D3, and aggregation destroys the signal (Fig 1 :22) | absorbed |

**Partition or union.** D1, D2 and D3 form a coupled chain. D4 is a union condition over them: the large response requires C1 (forcing reaches the grounding line) AND C2 (the contacted ice sits near a threshold with a positive feedback). A single lever clears the region where only one holds and leaves the intersection standing (Fig 9 :55). This is a union, not a partition, so it must be unbundled before it is searched (Fig 9 :54).

**Order by dependency (Fig 3).** 1 perception: measure heat at the cavity and flow at the slot; 2 vocabulary: have terms for buttressing, grounding-line flux and hysteresis; 3 objective: say what counts as large and persistent; 4 planning: design the reversal experiment; 5 learn and carry: record the threshold against the ground. The chain usually breaks at link 2, which has neither an obvious failure nor an obvious test (Fig 3 :24-27), so no instrument there means no working link (Fig 3 :27).

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual per slot; support with one live slot | no ground reading here; forces per-glacier assessment |
| 2 The Ground | triangulation vs mirror; anchor must not update | models sharing a forcing product are one witness |
| 3 Dependency Chain | a reading below the break is a reading of nothing | the vocabulary link (what counts as tipping) is the likely break |
| 4 The Membrane | *"Only methods cross up. Only head starts come down."* | cross-scale claim is a recording, not a generator |
| 5 Mint Pipeline | three guards as a product; MDL bargain | no new primitive is owed; the shape is a composition of held terms |
| 6 Closure / Reachability | import moves the wall; instruments improved from worse ones | the threshold value is unnameable until an instrument returns it |
| 7 Room Chain | *"agreement compounds, evidence does not"* | model agreement cannot settle the threshold |
| 8 Union Surplus | import has source gate and shadow test | provenance separates convergence from adoption |
| 9 Leave / Arrive | union not partition; describe before looking | unbundle C1 and C2; return a shape, not a name |
| 10 Ground Maintainer | *"Bring a characterised residual, never the source"* | first contact carries residual and refuter |
| 11 The Habitat | capability is agent-and-habitat; contact cascades | heat in isolation cannot trigger flow; enumerate the contact cascade |
| 12 The Bond | ⋛ comparison, cycle, two currencies | "large" = ⋛, "persistent" = cycle; do not conflate them |
| 13 Minimum Viable Set | gradient spendable; energy + gradient = flow; remainder compounding | ice flow is a flow composed from energy and a spendable gradient |
| Operators table | ⋛ is a threshold relation between two quantities | the comparison predicate is typed |
| Symbols table | R is the aim; ground is the anchor | no ground reading of a specific threshold exists in this folder |

Strained readings are named as such below, not smoothed over.

---

## 3. Findings

### F1 — The signal is per slot; a global average throws it away (decisive for how the question is asked)

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**
Fig 1 :20: **"Support is satisfied when some slot carries positive mass, so a global residual near zero with one live slot is a legal state and not an inert"**

The question must be answered per glacier or grounding-line sector. "Small ocean heat changes the ice sheet" is not a well-formed residual; it is an average over slots that can hide one live slot in rapid retreat. World corroboration: Winkelmann et al. 2026 find that the Antarctic Ice Sheet *"does not act as one single tipping element, but rather as several tipping systems interacting across drainage basins."* Refuter: a documented case where a single slot enters sustained retreat while the basin-mean residual stays near zero and is reported as stable. If that cannot happen, per-slot indexing is unnecessary. It can (Thwaites/Pine Island versus the mean), so the indexing stands.

### F2 — "Large" and "persistent" are different predicates, and only one is a threshold (strain resolved by re-census)

Fig 12 :87: **"a threshold relation between two quantities"** (Operators :49, same line).
Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

A large response to a small forcing can be linear and recoverable; it need not be a tipping event. Rosier et al. 2021 state exactly this: *"A large change in response to a small forcing is not necessarily indicative of hysteresis."* Their Figure 1 separates a *"large response to a small perturbation that is still directly recoverable"* from one that is *"irreversible (hysteresis behaviour)."*

**Strain noted and sent back to census:** an initial reading tried to make ⋛ govern both "large" and "persistent". That strained the comparison bond, which relates magnitudes and does not by itself close a loop. Re-census: ⋛ governs *large*; persistence is governed by the cycle (F3). Different quantities, so no figure contradiction. This matches the canonical rule that a reading making figures contradict one another has misidentified its domain.

Refuter: a response curve that is large but fully recovered on reversal, presented as a tipping point. Under F2 it is not one; the claim is withdrawn as stated.

### F3 — Persistence requires a cycle; a chain cannot close

Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."**
Fig 13 :32: **"comes from: a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise."**

Ice-sheet "tipping" is not a steep step in an input-output curve; it is a feedback that keeps running after the forcing is withdrawn. The marine ice-sheet instability is exactly this: grounding-line retreat increases flux across the grounding line, which thins the ice, which drives further retreat. Rosier et al. 2021: *"once a critical threshold, or tipping point, is crossed, ice internal dynamics can drive a self-sustaining retreat committing a glacier to irreversible, rapid and substantial ice loss."* Hill et al. 2024 report that after a cold-to-warm cavity shift, *"reverting to current melt rate conditions is not sufficient for ice loss to be recovered."*

Mode `general` for the structural claim (a chain cannot close), `specified` for the ice application. Refuter: a "persistent" flow change that stops as soon as the heat anomaly is removed across all tested slots, with no self-sustaining retreat.

### F4 — The heat must reach the contact; heat in isolation is not a cause

Fig 11 :39: **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."**
Fig 11 :40: **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."**
Fig 11 :44: **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."**
Fig 11 :52: **"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three"**
Fig 13 :46: **"distribution is a fact that stays put. What makes a gradient a gradient is that it can be spent, and neither an ordering nor a span of"**
Fig 13 :76: **"Energy and a gradient compose a flow. A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is."**

Ocean heat (an energy state) is not itself a flow. It becomes spendable only when bonded to a gradient at the ice-ocean contact: the temperature difference across the cavity, the surface slope of the ice, the bed slope at the grounding line. The flow is a property of the whole arrangement, not of the heat (Fig 13 :46). The contact cascade runs: open-ocean heat, slope-front access, cavity intrusion, basal melt, thinning, buttressing loss, grounding-line retreat, increased flux. The residual that matters is several steps out, the DDT/eagles case in Fig 11 :52.

World corroboration: Zhou et al. 2026 show that *"even modest CDW intrusions could have important implications for the stability of cold Antarctic ice shelves"* because channelised topography amplifies melt by an order of magnitude. Hill et al. 2024: warm water *"increase[s] sub-shelf melt rates from a few metres to tens of metres per year, thereby causing ice shelf thinning, an associated loss of ice shelf buttressing and an increase in ice flow across the grounding lines."* Refuter: warm water introduced at the cavity with no measurable change in grounding-line flux across multiple near-threshold slots.

### F5 — It is a union: forcing and configuration are jointly required

Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**
Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
Fig 9 :57: **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific"**

C1 (heat reaches the grounding zone) and C2 (the contacted ice is configured so the feedback closes) are independent conditions. Heat delivered to a stable, prograde, well-buttressed shelf gives a small recoverable response. A retrograde, weakly buttressed bed sitting at its threshold with no additional heat gives no trigger. Only the intersection gives the named phenomenon. Rosier et al. 2021 find *"three distinct tipping points in response to increases in ocean-induced melt"*, the last at *"an ocean warming of approximately 1.2 °C"*, and stress that *"Our results reveal the existence of multiple tipping points leading to the collapse of PIG, rather than one single event."* Winkelmann et al. 2026 separate *"gradual decline versus tipping dynamics"* by basin. Refuter: one intervention that restores a small recoverable response in both a C1-only and a C2-only case with no categorically different residue (Fig 9 :57).

### F6 — The threshold value is a `gap`; an instrument is owed, not a name

Fig 6 :34: **"The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve. Where nothing is, there is no edge to"**
Fig 6 :29: **"inward: is our representation adequate to hold it? The instrument extends access. Fails by refining forever on an axis that cannot carry it. Sharpen in our own terms."**
Fig 9 :32: **"you get a kind of thing, never the answer itself"**
Fig 13 :134: **"So the system can report that it lacks something rather than producing an answer anyway. Unreachable is a verdict here, not a silence,"**
Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**

No figure line governs the number "0.5 °C causes collapse" for a named glacier. That quantity is ground-only. What the figures permit is a *shape* (C1 and C2) and an instrument specification (a reversal experiment plus early-warning indicators). World corroboration that such instruments exist and are fallible: Rosier et al. 2021 show early warning indicators *"robustly detect the onset of the marine ice sheet instability"* in model simulations; Clarke et al. 2026 show spatial early-warning signals can work under rapid forcing but *"spatial early warning signals are not skilful"* under strong spatial coupling, and that *"Some studies have demonstrated how EWSs can still give an indication of an approaching tipping point even in cases where no such tipping point exists"* (false positives). So the detector is an edge that already returns something, and it is lossy. Refuter: a deployed, ground-checked instrument that resolves the threshold for a slot and returns a value; that moves this finding from `gap` to `grounded` for that slot.

### F7 — The ground settles it; agreement among models does not

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when"**
Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**
Fig 2 :40: **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"**
Fig 10 :24: **"the ground does not decay, the channel does"**
Fig 10 :26: **"stale percepts, dropped transients,"**

The anchor is the observation: velocity, thinning, grounding-line migration, and above all the reversal experiment. Three ice-sheet models forced with the same ocean melt product and the same bed topography are one evidence pool, not three witnesses (Hill 2024, Rosier 2021 and Winkelmann 2026 all draw on BedMachine/Bedmap and related ocean products). Hill et al. 2024 explicitly record that *"irreversible retreat of the grounding lines over centennial timescales is a robust numerical aspect of our simulations"* while also noting that *"coupled ice–ocean models that capture all melt-geometry feedbacks will help to further narrow down the timeframes"*, which is a statement about remaining uncertainty, not a ground reading. Refuter: a reversal experiment at a named slot that re-stabilises after the forcing is removed, against a model prediction of irreversibility.

### F8 — A second union: the framework returns conditions, not a threshold name

Fig 9 :27: **"describe it before you go looking, or"**
Fig 8 :51: **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures"**

The 1.2 °C figure from Rosier et al. is a result from the ice-sheet frame, imported into the derivation. It is not produced by the six-term substrate. Fig 8 :51 requires the record to say which. The canonical figures README adds that the framework returns *"a shape, not a name"*; Fig 9 :32 says *"you get a kind of thing, never the answer itself."* So the deliverable is "C1 and C2, with a reversal test", not "ocean heat X tips glacier Y". Refuter: a claim that the framework itself yields the threshold number. That claim is refused, not supported.

### F9 — Two currencies, and filters are not witnesses

Fig 12 :125: **"A composition costs in two currencies, and they do not add."**
Fig 12 :126: **"Bits price the description. Actions price finding out whether it holds. They are in different units, so a system holding one accounting cannot compare them"**
Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

Describing the shape is cheap (bits). Resolving the threshold at a slot requires a reversal experiment and long observation (actions). A priority score, a model ensemble size, or a journal's impact factor is a filter for the budget. None of them is a witness for the verdict. Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."** The condensation of the figures into "C1 and C2" carries a round-trip gap R_T (see `11_audit.md`); it is not identity.

### F10 — What survives, with mode attached

| claim | mode | figure |
|---|---|---|
| R must be assessed per ice-stream or grounding-line slot | `general` (structural) | Fig 1 :19, :22 |
| A large response is a threshold predicate, a persistent response is a cycle | `general` (structural) | Fig 12 :87, :121 |
| Ocean heat becomes a flow only through a spendable gradient at the contact | `general` | Fig 13 :46, :76 |
| Capability and response are properties of ice-and-habitat, not heat alone | `general` | Fig 11 :39, :40 |
| A large/persistent flow response requires C1 and C2 jointly (a union) | `specified` (falsifiable) | Fig 9 :54-57; world: Hill 2024, Rosier 2021 |
| The threshold value for any named glacier is unnameable here | `gap`, declared | Fig 9 :32; Fig 13 :134; Fig 6 :34 |

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach, per the seat rule that a falsifier written before the run is a design instrument, not only an honesty device. The shape claim is refuted if any of the following holds:

1. **No cycle.** A per-slot forcing-response curve is large but fully recoverable across the claimed range, with no self-sustaining retreat after the anomaly is removed (breaks F3 and the "persistent" half).
2. **Contact failure.** Introducing warm water at the cavity produces no change in grounding-line flux across several slots independently configured near a retrograde bed (breaks F4).
3. **Union failure.** A single lever restores small recoverable responses in both a forcing-only case and a configuration-only case with no categorically different residue (breaks F5).
4. **Ground reversal.** A reversal experiment at a named slot re-stabilises the grounding line where a threshold was claimed (breaks the `specified` application at the ground).
5. **Per-slot failure.** A documented case where a single slot sustains rapid retreat while the basin-mean residual is reported stable and the mean is used as the verdict (breaks F1).

If any fires, the shape as stated is withdrawn or narrowed. Until one is run, no part of the ice-specific claim may be labelled `grounded`.

---

## 5. Recommendation

1. Ask the effect question first: per slot, is the response proportional, threshold-like, or self-sustaining? Do not start from "tipping point" as a label (Fig 9 :27).
2. Unbundle the union before searching: C1 (delivery of heat to the grounding zone) and C2 (threshold configuration with positive feedback) are separate loops with separate instruments (Fig 9 :54).
3. Treat "large" and "persistent" as two different predicates with two different tests (Fig 12 :87 versus Fig 12 :121).
4. State mode on every claim. The number is imported, not derived (Fig 8 :51).
5. Use public opt-in venues (file 03) and ask for a refutation of the shape rather than belief in the framework (Fig 10 :52).
6. Record the threshold as a `gap` until a ground reading closes it. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 6. Canonical usage check and retraction log

Two sources were read after sections 0 to 5 and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the limit that the framework says what a missing thing would have to look like *"a shape, not a name"*, then stops where instruments stop and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: step 5, *"the ground settles it. Verified only by what pays. A gate is not the ground."* and step 7 separates SEARCHED, INWARD and OUTWARD.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "Small ocean heat triggers ice-sheet tipping" as one claim | **Retracted as written.** It bundles C1 and C2. Fig 9 :55: a single lever clears the region where only one condition holds and leaves the intersection standing. Split before searching. |
| "Large response means a tipping point" | **Retracted.** Rosier et al. 2021 distinguish a large recoverable response from hysteresis. Re-census put "large" under ⋛ (Fig 12 :87) and "persistence" under the cycle (Fig 12 :121). |
| "Ocean heat is the sole cause of flow change" | **Retracted to a contact claim.** Fig 11 :40: *"An improvement that does not change contact changes nothing, however much it improves."* Heat is an operand, not a generator of the response. |
| "The framework gives the threshold temperature" | **Canonically refused.** Fig 9 :32 and the README's *"a shape, not a name"*. The 1.2 °C value is an import from Rosier et al. 2021 and is provenanced as such. |
| "Multiple models agreeing settles the threshold" | **Refused.** Fig 2 :40. Hill 2024, Rosier 2021 and Winkelmann 2026 share bathymetry and ocean products; they are one evidence pool. |
| "No early warning means no tipping risk" | **Refused.** Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* Clarke et al. 2026 show detector skill is conditional. |
| F2 strain (⋛ governing both magnitude and persistence) | **Not strained after re-census.** ⋛ governs "large"; the cycle governs "persistent". Different quantities, matching the README's re-census rule. |
| F1 per-slot indexing | **Canonically confirmed.** Winkelmann et al. 2026 independently report basin-specific tipping rather than one monolithic element. |

### SEARCHED / INWARD / OUTWARD, kept distinct

- **SEARCHED:** is the threshold in the held closure but unfound? Within this folder, no. No measurement of a named slot is held, so more searching of these files cannot produce one (Fig 8 :32).
- **INWARD:** sharpen in our own terms. The held instrument is the reversal experiment plus variance and lag-1 autocorrelation, already returning something in Rosier et al. 2021. Refine it, do not invent a sensor from a description (Fig 6 :34).
- **OUTWARD:** import a ground reading from a frame whose closure differs: an observational glacier record, an Argo/cavity mooring, a borehole melt-rate series, with a source gate and a shadow test (Fig 6 :23, Fig 8 :51).

### Updated verdict

The shape survives: a large or persistent flow response requires delivery of heat to the contact and a threshold configuration whose feedback closes, measured per slot, with "large" and "persistent" tested separately. Every specific number, and the empirical claim for any named glacier, is ungrounded here. Strains after re-census: none hidden; one resolved (F2).
