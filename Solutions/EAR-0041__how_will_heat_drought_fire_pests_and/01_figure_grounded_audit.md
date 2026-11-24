# Figure-grounded audit: heat, drought, fire, pests and land conversion on forest survival

**Mode of this document: `specified`, with `general` on the structural shape. Not `grounded`.** It states what would have to be measured at a stand. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (opened 2026-11-22) says LLM output can *"simulate an approximate answer/output with the formula"* but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** Figure lines are quoted verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`, and were re-opened this session. World sources were opened on 2026-11-22 and are listed in `10_source_ledger.csv`. The canonical usage rule is in `FRAMEWORK/reference/FIGURES_README_canonical.md` and the metalaw reading in `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. The eight-step loop is `FRAMEWORK/figures/THE_FORMULA.md`; the office rules are `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`.

---

## 0. The residual in effect terms

The source question (earth systems.txt line 57) asks: *"How will heat, drought, fire, pests, and land conversion interact to affect forest survival?"*

Stated as an effect, not as a list of causes:

- For a stand `s`, prediction `Γ(b,a)` from the stand's current terms says the forest will persist. Observation `o'` from the ground says what actually happened (live basal area, canopy cover, regeneration, composition). The gap `R_s = |Γ(b,a) − o'|` is indexed per stand (Fig 1 :11, Symbols :38-40). A global forest-cover percentage can be near zero while one stand carries a live residual (Fig 1 :13).
- Each of the five named items is a candidate term offered to close that gap. Heat and drought are physiological conditions; fire and pests are disturbance processes; land conversion is a change of habitat. The question asks for their composition, not their individual magnitudes.
- The sought-for shape is written down before the run and bound as an ordinary term, per `THE_FORMULA.md` "Direction" and Fig 5 :65: *"The remedy is a discipline rather than a branch: make the sought-for shape an ORDINARY TERM."* The bound shape is: **a per-stand union of overlapping conditions with typed bonds, a comparison threshold on survival, a contact cascade across scales, and a habitat-substitution branch at the tail.** A universal interaction coefficient, or a survival verdict for a named stand, is not held and therefore cannot be derived. That is declared as a `gap` in section 6, not smuggled in.

**What an answer would look like.** Five conditions, each with actors, currency and an anchor; a union structure with compounds at the intersections; per-domain verdicts that are never averaged; a refuter written before the run; an instrument that would discriminate sources of one dieback reading. This is the shape that the findings below either fill or refuse.

---

## 1. Domain census (before any figure line is chosen)

**R by arity, symmetry and scale.** Arity: five named conditions plus a survival outcome, with unenumerated others in the habitat, so a **union** rather than a partition (Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*). Symmetry: the interactions are ordered (drought weakens a tree before beetles colonise it; beetles and drought precede fuel change; land conversion precedes edge microclimate), so the symmetric `+` bond cannot express them; ordered `→` and `⇒` are required (Fig 12 :70-79). Scale: leaf and xylem at hours, stand at seasons, landscape at decades, so a cross-scale transform with a round-trip gap is owed (Fig 4 :30). Residuals stay per stand (Fig 1 :19).

**One line per domain: actors, currency, anchor.** A row is not admitted as a domain unless a nameable anchor exists.

| domain | actors | currency | anchor (nameable?) | status |
|---|---|---|---|---|
| D1 stand physiology | trees, water column, carbon stores, stomata, xylem | hydraulic status and carbon balance | measured tree state at the stand (live basal area, crown condition, regeneration), which does not move when a model changes its mind | yes |
| D2 disturbance propagation | fire, bark beetles, pathogens, host trees, fuel | mortality and spread per stand, ignition and colonization events | observed mortality and burned area, separately from D1 | yes |
| D3 habitat and land conversion | edges, fragment area, microclimate, seed sources, corridors, surrounding land use | contact and connectivity | forest cover and edge microclimate measured over time | yes |
| D4 verification and monitoring | plots, remote sensing, vegetation models, managers | per-stand residual, bracket fidelity | the ground, which does not update (Fig 2 :29-30); the monitoring channel does | yes |
| D5 regime and substitution | feedback loops (fire-beetle-fuel, moisture-recirculation), alternative states | persistence, hysteresis, recovery path | long-term forest state versus the state that replaced it | yes |

**Partition or union.** The five conditions are a union of overlapping conditions, not five independent slots. Overlaps are compounds with their own loops: heat plus drought is one compound (hydraulic failure and carbon starvation share a tree), drought plus pests another (weakened host), pests plus fire a third (fuel and snag), land conversion plus each of the others a fourth (edge microclimate changes all three). Fig 9 :57: *"a case in two conditions is not a harder case of either"*; it is a specific compound. One lever therefore clears a single-condition region and leaves the intersections standing (Fig 9 :55-56). Verdicts are kept per domain and never averaged (Fig 1 :22). An overall forest survival percentage is a filter for the budget, not a witness for the verdict (Fig 9 :60).

**Order by dependency (Fig 3 :20: *"The chain is ordered by dependency, not by importance."*).** First, a reachable reading of the stand (D4 perception). Second, vocabulary for what a condition affords (fuel, host susceptibility, edge, moisture). Third, an objective: what counts as survival at this stand and horizon. Fourth, a route (intervention). Fifth, learning and carrying. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* In this literature the link most likely to be missing is the objective: a stand can be monitored for crown condition and still have no agreed term for what would count as survival under a changed climate. Dependency order D4 -> D1 -> D2 -> D3 -> D5 follows from this.

**Strain test applied before choosing lines.** An early reading wanted Fig 13's six physical terms (space, time, energy, spectrum, gradient, network) to stand for the five stressors. That forces a strain: a stand's heat is not a state of the six-term set in any direct sense. By Fig 13 :74 and the canonical re-census rule, Fig 13 governs the cross-kind composition rule and the closed-set limit, not the identity of ecological drivers. It is retained in the honest-stop role only. The strain is recorded in section 7 and in `11_audit.md`, not smoothed over.

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | per-slot residual; aggregation hides the live signal; self-scored quantities disqualified | five conditions must be read per stand, not as one global forest metric |
| **2 The Ground** | anchor must not update; independence; two collapse modes | dieback readings from one instrument pool are one witness; agreement is not correction |
| **3 Dependency Chain** | ordered by dependency; break at vocabulary/objective | monitoring a stand does not supply the objective that would count as survival |
| **4 The Membrane** | lossy cross-scale transform; methods up, head starts down | stand to landscape extrapolation carries R_T; a recording of one stand does not transfer |
| **5 Mint Pipeline** | guards as a product; settled not sufficient; shape as an ordinary term | no universal coefficient is minted; the shape is bound and refusable |
| **6 Closure / Reachability** | import is the only wall-moving operator; instruments grow from worse instruments | new stand conditions need an import or a better instrument, not more of the same plots |
| **7 Room Chain** | agreement compounds, evidence does not; two-factor progress | many models agreeing on a forest outlook is one long room unless rooms differ and match the residual |
| **8 Union Surplus** | closure idempotent; residual first; provenance separates convergence from import | low-overlap frames required; the cross-field literature is the surplus, not more of the same pool |
| **9 Leave / Arrive** | union versus partition; describe before looking; ground decides | the five items are a union; naming a cause before describing the residual is apophenia |
| **10 Ground Maintainer** | ground does not decay, channel does; bring a characterised residual; declare stakes | monitoring failure is a channel failure; outside checker must not hold the derivation |
| **11 The Habitat** | enumerated not composed; valence relative to residual; contact cascades; introduction not exclusion; substitution not removal | the governing domain for forests; fire and pests have no fixed sign; restoration is permanent work |
| **12 The Bond** | typed bonds; isomer, catalyst, cycle, functional group; two currencies | interactions are bonds, not an ingredient list; feedback is a cycle; no single score sums bits and actions |
| **13 Minimum Viable Set** | set closed, arrangements not; unreachable is a verdict | honest-stop role only: no new ecological primitive is minted by arranging the five |
| **Operators table** | `→` sequence, `⇒` production, `−` subtraction, `⋛` comparison, `¬` negation | survival is a threshold comparison; a refusal is a negation, not a missing stressor |
| **Symbols table** | `R` is a slice per slot; `R_T` is the gap across scales | residuals per stand; round trip must be measured |

No line was forced. Fig 13 was re-censed out of the driver role before use, so no strain remains there at the point of conclusion.

---

## 3. Findings

### F1 - The question is a union, not a list of five doses (decisive)

Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** Fig 9 :57: **"a case in two conditions is not a harder case of either"**. Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**

World source read: *Forest dieback* (Wikipedia, 2026) states **"Forest dieback refers to the phenomenon of a stand of trees losing health and dying without an obvious cause"** and lists bark beetles, groundwater, drought and heat stress, pathogens and pollution under **"Potential causes of forest dieback"**. The article's own phrasing matches a compound with ambiguous source: several candidate terms produce one reading.

The same page reports the mechanism coupling: **"The first one, hydraulic failure, results in transportation failure of water from the roots to the shoots of a tree"** and **"The second, carbon starvation, occurs as a plant's response to heat is to close its stomata."** Heat and drought therefore share a stand-level mechanism rather than acting as two independent additive doses. A single lever that reduces heat exposure does not clear the drought-plus-beetle intersection.

**Verdict: `specified`, triangulated** across the figure union rule and the world source's multi-cause structure (low overlap between a formal composition rule and a forest-pathology summary). **Refuter:** a factorial experiment in which one intervention removes heat effects while the drought-plus-pest intersection persists unchanged would confirm the union; a single intervention that clears all five conditions including their intersections would refute it.

### F2 - Survival is a property of forest-and-habitat, not of the trees alone

Fig 11 :39: **"And capability is a property of agent-and-habitat, never of the agent alone."** Fig 11 :40: **"An improvement that does not change contact changes nothing, however much it improves."** Fig 11 :43: **"The habitat is enumerated, never composed."** Fig 11 :44: **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."** Fig 11 :46: **"conditions: light, water, temperature, season, terrain"** and Fig 11 :47: **"relations: pollination, predation, competition, dependency"**.

World source: *Habitat fragmentation* (Wikipedia, 2026) reports **"Habitat fragmentation consistently reduces biodiversity by 13 to 75% and impairs key ecosystem functions by decreasing biomass and altering nutrient cycles"**, and **"habitat fragmentation leads to edge effects. Microclimatic changes in light, temperature, and wind can alter the ecology around the fragment, and in the interior and exterior portions of the fragment."** Land conversion changes the habitat around a stand, so a tree-only model has no term for the changed contact.

**Verdict: `specified`, triangulated** (Fig 11 habitat rules plus two independent world domains: fragmentation microclimate and forest-pathology host condition). **Refuter:** demonstrate a stand outcome fully predicted by tree physiology with no habitat term and no loss of prediction on a converted edge.

### F3 - The residual is per stand; a global survival percentage destroys the signal

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."** Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."** Fig 1 :27: **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** Fig 10 :26: **"stale percepts, dropped transients, saturated metrics, pooled readings"**. Symbols :43-44: **"R is measured per slot, never as a single global number."**

World source: WRI, *World's Forest Carbon Sink Shrank to its Lowest Point in at Least 2 Decades* (Harris and Rose, 2025), reports **"Some forest regions - including parts of China and the eastern United States - have remained relatively strong net carbon sinks. Others, like the tropical forests of Bolivia and boreal forests in Canada, have turned from net sinks into net sources."** The same page says **"Net Sink or Net Source? It Depends on Where and When You Look."** A global average hides the stands that flipped.

**Verdict: `specified`, triangulated** (Fig 1/Symbols measurement rule plus a same-source-at-different-scales empirical demonstration). **Refuter:** show that a global forest survival index predicts which stand flips and when, with the same accuracy as per-stand readings. Until then the per-stand rule stands.

### F4 - The five items have residual-relative valence, no standing sign

Fig 11 :49: **"An actor's valence is relative to the residual, not a property it carries."** Fig 11 :50: **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** Fig 11 :51: **"No standing list of good actors survives a change of residual."**

World source: *Fire ecology* (Wikipedia, 2026) says **"Many ecosystems, particularly prairie, savanna, chaparral and coniferous forests, have evolved with fire as an essential contributor to habitat vitality and renewal"** and **"fire is now regarded as a 'natural disturbance', similar to flooding, windstorms, and landslides, that has driven the evolution of species and controls the characteristics of ecosystems."** The same page records the opposite sign: **"Fire-intolerant plant species tend to be highly flammable and are destroyed completely by fire."** It also records that **"short intervals between fires often eliminate tree species due to the time required to rebuild a seed bank, resulting in replacement by lighter seeded species like grasses and forbs."**

World source: *Bark beetle* (Wikipedia, 2026) says **"In undisturbed forests, bark beetles serve the purpose of hastening the recycling and decomposition of dead and dying wood and renewing the forest. However, a few species are aggressive and can develop large populations that invade and kill healthy trees and are therefore known as pests."** Beetles are a decomposer at one residual and a mortality agent at another.

**Verdict: `specified`, triangulated** (Fig 11 valence rule plus two independent ecological domains, fire and entomology). **Refuter:** exhibit a context-free sign for fire or pests that holds across fire-adapted and fire-intolerant stands and across endemic and outbreak beetle populations. The world sources already supply two counter-cases, so the sign is not a standing property.

### F5 - Interactions are higher-order contact cascades

Fig 11 :52: **"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."** Fig 11 :67: **"Move the residual and you must reproduce everything its goal required, and you inherit the new habitat's actors, which you did not choose."**

World source: *Forest dieback* reports **"Trees can be resilient. However, that can be changed when the ecosystem is hit with a drought episode. This results in trees becoming more susceptible to insect infestations, thereby triggering a dieback event."** That is a three-step chain: drought, host susceptibility, beetle outbreak, dieback. The same page reports a fungal cascade: **"Following a bark beetle outbreak, dieback can occur. This process can decrease photosynthesis, nutrient availability and decomposition rates and processes. Once this occurs, the symbiotic relationship, previously mentioned, gets negatively affected: the ectomycorrhizal fungi community decreases and then the relationship disappears altogether."**

World source: *Bark beetle* reports **"Bark beetles often attack trees that are already weakened by disease, overcrowding, conspecific beetles, or physical damage"** and **"Bark beetle infestations are also predicted to increase with global warming"**. It also supplies a genuine conflict to log, not to smooth: **"most studies of wildfire after beetle outbreaks have found no effect of beetle-caused tree mortality on wildfire size or severity."** The naive chain "beetles cause bigger fires" is therefore not established; it is returned to the census in section 7 as a strained causal claim.

**Verdict: `specified`, triangulated** for the existence of cascades (Fig 11 plus forest-pathology plus entomology), **single-source and conflicted** for the specific beetle-to-fire link. **Refuter:** a factorial design in which the third-order cascade is removed while the direct effect stays would leave the stand residual unchanged if cascades were not load-bearing.

### F6 - The ground does not decay; the channel to it does

Fig 10 :24: **"the ground does not decay, the channel does"**. Fig 10 :25-26: **"stale percepts, dropped transients, saturated metrics, pooled readings"**. Fig 2 :29-30: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks"** / **"If it moves when you push on it, it is not an anchor."** Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**

The object of the question is a forest state. That state is the ground for a survival claim. A plot network, a satellite index or a vegetation model is an instrument, not the ground: each can be wrong on axes it does not measure (Fig 2 :37-38). When forest cover is pooled across a continent, a live stand-level residual is replaced by a saturated metric and the channel fails silently (Fig 10 :24-26).

World source: WRI reports **"Because average carbon removals estimates don't account for short-term drops in sequestration, like those caused by climate variations and extreme drought or heat stress, the net carbon sink may be overstated in years of major disturbance."** That is an explicit channel failure in the published measurement, with the ground still paying.

**Verdict: `general` on the anchor rule, `specified` on the monitoring failure, triangulated** (Fig 2, Fig 10 and a world measurement caveat). **Refuter:** an instrument whose reading moves with the analyst's choice of pool and which is nonetheless used as the anchor for a stand survival verdict; that is panel 1 of Fig 2 reached by a different route.

### F7 - "Survival" is a threshold comparison, not a stock

Fig 12 :87: **"a threshold relation between two quantities"**. Operators :51: **"a goal is a comparison, which is why a vocabulary without it cannot state one"**. Fig 12 :112: **"A plan is a sequence. A goal is a comparison. Progress is a subtraction."** Symbols :38-40: **"It is the aim, not only the error signal"**.

World source: *Ecological threshold* (Wikipedia, 2026) defines **"Ecological threshold is the point at which a relatively small change or disturbance in external conditions causes a rapid change in an ecosystem"**, and notes **"When an ecological threshold has been passed, the ecosystem may no longer be able to return to its state by means of its inherent resilience."** *Alternative stable state* adds **"Multiple states may persist under equal environmental conditions, a phenomenon known as hysteresis."**

"Forest survives" therefore compares delivered conditions against a demand at a stand and horizon. It is a `⋛` bond, not an accumulated quantity of biomass. The operand type is a live question: the comparison bond is defined for two quantities, and at stand level the operands are composed stand states (Fig 12 :104). This strain is named in section 7 and in `11_audit.md`, not hidden.

**Verdict: `general` for the comparison structure, `specified` for stand thresholds, triangulated** (Fig 12/Operators plus two independent ecology sources). **Refuter:** a stand outcome determined by a monotonic stock with no threshold and no comparison, across both a gradual and an abrupt pressure regime.

### F8 - Crossing a threshold substitutes a habitat; restoration is introduction, not subtraction

Fig 11 :66: **"Isolation is not removal of the habitat. It is substitution of one habitat for another."** Fig 11 :61: **"The seat's power is asymmetric. Introduction is available; exclusion is not."** Fig 11 :63: **"Which is why a managed ecosystem is permanent work rather than a solved state."** Fig 11 :68: **"what you failed to reproduce is invisible until the goal fails"** and Fig 11 :69: **"what you unintentionally introduced is invisible until it acts"**.

World source: *Alternative stable state* (Wikipedia, 2026) reports the cloud-forest case: **"When deforested, moisture delivery ceases. Therefore, reforestation is often unsuccessful because conditions are too dry to allow the trees to grow."** It also gives the governing state-shift sentences: **"Ecosystems may transition from one stable state to another, in what is known as a state shift"** and **"Due to ecological feedbacks, ecosystems display resistance to state shifts and therefore tend to remain in one state unless perturbations are large enough."**

World source: *Fire ecology* reports **"Different frequencies of fire also result in different successional pathways; short intervals between fires often eliminate tree species due to the time required to rebuild a seed bank, resulting in replacement by lighter seeded species like grasses and forbs."** A forest-to-grass state is a substituted habitat, not a depleted forest.

**Verdict: `specified`, triangulated** (Fig 11 substitution/asymmetry plus two world ecology domains). **Refuter:** restore a crossed stand to its former composition by removing the single stressor alone, with no new actors, no reintroduced seed source and no changed microclimate, and show the former feedbacks return.

### F9 - Over a shared atom set the five conditions are isomers; as usually listed they are a functional group

Fig 12 :117: **"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** Fig 12 :123: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."** Fig 12 :94: **"The arrangement is the substance."**

Over a shared stand-atom set (trees, water, carbon, fuel, host, edge, seed source, microclimate), heat is a gradient over water and carbon, drought is a removal of water, fire is a cycle whose output re-enters as input (Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."**), pests are a network relation that changes host state, and land conversion changes the habitat atom itself. As the question lists them, they share the substructure "condition acting on a stand" but differ in their atom lists, so the honest weaker claim is a **functional group**. The stronger isomer claim requires a fixed atom set and a changed bond; it is a `specified` binding with a stated falsifier in `06_isomers_and_order.md`.

**Verdict: `specified`, single-source for the figure definition (Fig 12), with world corroboration for the behavioural difference only.** **Refuter:** write two conditions over the identical atom set and show the same behaviour under two different bonds; the isomer claim fails and the functional-group reading stands.

### F10 - No new primitive is minted by rearranging the five

Fig 13 :115: **"The set is closed. The arrangements are not. That gap is why import exists."** Fig 6 :21: **"MINT composes inside the closure and can never add an atom."** Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** Fig 8 :32: **"no search, however long, adds an atom"**.

A sixth stressor, or a genuinely novel regime, is not produced by recombining heat, drought, fire, pests and conversion. It enters only as an import from a differing frame with provenance and a shadow test (Fig 6 :14). More plots inside the same monitoring closure are a SEARCHED answer, not an import. The distinction matters for budget: the cheapest question first is *"is it in here and unfound?"* (Fig 6 :49-50).

**Verdict: `general`, triangulated** across Fig 6, Fig 8 and Fig 13. **Refuter:** produce a new stand primitive by composition alone from the held set, with no import and no new instrument.

### F11 - The coefficient the question seems to ask for is a bound preference, not a held term

Fig 5 :62: **"A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term."** Fig 5 :65: **"The remedy is a discipline rather than a branch: make the sought-for shape an ORDINARY TERM."** Fig 9 :32: **"you get a kind of thing, never the answer itself"**.

A universal "how much will forest survival fall per unit of interaction" is not in the figure set. It is the sought-for shape held as a preference, and Fig 5 says no internal check sees it. Binding it before the run makes it refusable, but does not make it derivable. The honest output is the shape and the refuter, not the coefficient.

**Verdict: `general` on the limit, `gap` at the coefficient level, triangulated** (Fig 5 and Fig 9 plus the canonical figures README). **Refuter:** derive the coefficient from the figure lines alone, with no world import and no instrument. None was found after the census; that is reported as unreached, not silence (Fig 13 :134).

### F12 - Description cost and verification cost do not add

Fig 12 :125: **"A composition costs in two currencies, and they do not add."** Fig 12 :126: **"Bits price the description. Actions price finding out whether it holds."** Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

A model that describes five interactions cheaply may take a whole field season to refute; a two-parameter model over a costly operand may be cheap to state and expensive to test. A single "resilience score" that sums them is the error the figure names, not a fix. This is why the solution returns per-domain verdicts and a refuter rather than one number.

**Verdict: `general`, triangulated** (Fig 12 and Fig 9). **Refuter:** a decision in which a summed score correctly orders both the description cost and the verification cost of every candidate intervention at a stand.

### F13 - Agreement among models is variation, not a verdict

Fig 7 :35: **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."** Fig 7 :36: **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** Fig 2 :40: **"agreement about the world is worthless when the agreeing frames share an evidence pool"**. Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."**

World source: WRI reports the same data source giving opposite verdicts in different places, so a pooled model ensemble trained on one pool would not discriminate the flip. Fig 8 :47: **"Independence is one quantity read twice."**

**Verdict: `general`, triangulated** (Fig 7, Fig 2, Fig 8). **Refuter:** an ensemble whose members draw on genuinely low-overlap instruments and whose agreement predicts the stand flip before it occurs, with provenance for each member. That would be corroboration at maximum independence, not a mirror chain (Fig 8 :50-52).

---

## 4. Pre-registered refuter

Written before the conclusion, per Fig 10's office rule and the seat-map failure genus: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following holds:

1. **Union refuter.** One intervention clears all five conditions and all their intersections at a stand, with no residual left in the shared regions.
2. **Habitat refuter.** A stand outcome is predicted without loss by tree physiology alone, with no habitat or contact term, including on a converted edge.
3. **Per-slot refuter.** A single global forest metric predicts which stand flips and when, at the accuracy of per-stand readings.
4. **Valence refuter.** A context-free sign for fire or pests holds across fire-adapted and fire-intolerant stands and across endemic and outbreak populations.
5. **Cascade refuter.** Removing the third-order cascade leaves the stand residual unchanged while the direct effect stays.
6. **Threshold refuter.** A monotonic stock, with no comparison and no threshold, orders survival outcomes across both gradual and abrupt pressure regimes.
7. **Substitution refuter.** A crossed stand is restored to its former composition by removing one stressor alone, with no reintroduction and no changed microclimate.
8. **Instrument refuter.** An instrument whose reading moves with the analyst's pool choice is used successfully as the non-updating anchor for a stand survival verdict.

If any fires, the corresponding finding is withdrawn. Until one is run, nothing here is labelled `grounded`.

---

## 5. Recommendation

1. Read the residual per stand. Refuse a global forest survival percentage as a verdict (F3). Use it only as a budget filter (Fig 9 :60).
2. Unbundle the union before choosing an instrument (F1). A single lever leaves the intersections standing.
3. Enumerate the habitat outward until the cascade stops mattering (F2, F5). Scoping to direct drought or direct fire is how the third-order effect is missed.
4. Treat fire and pests as relations, not as a standing list of harms (F4). State the residual relative to which each has a sign.
5. Keep the ground and the channel separate (F6). A flat or saturated index is a dead channel while the forest ground keeps paying.
6. Bind "survival" as a threshold comparison and name the operand type strain (F7). Do not convert it into a stock.
7. Expect substitution at the tail, and say that restoration is introduction and permanent work, not subtraction (F8).
8. Offer the shape and the refuter, not the coefficient (F11). Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."*

---

## 6. Canonical usage check

Two local sources were read after the first five sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also says *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and that the framework returns *"a shape, not a name"* then stops at the limit of what instruments distinguish and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are metalaws for design questions; the seat reads the ground and does not ask the anchor to decide what the figures already settle.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "five independent stressors, one per dose" | **Retracted.** Union with compounds at intersections (Fig 9 :55-57); F1. |
| "fire and pests are harms" | **Retracted as a standing claim.** Valence is relative to the residual (Fig 11 :49-51); F4. The fire-ecology and bark-beetle pages supply counter-cases. |
| "one global forest survival score answers the question" | **Retracted.** Residuals are per slot (Fig 1 :19, :22); F3. |
| "beetles cause bigger fires" | **Declined and kept visible.** The bark-beetle page reports most post-outbreak studies found no effect on fire size or severity; the causal bond is strained, not asserted. |
| "Fig 13's six terms are the five stressors" | **Retracted and re-censed.** Fig 13 governs the cross-kind rule and closure limit only; drivers are world terms bound with provenance. |
| "shape, not a name, forbids naming heat or drought" | **Narrowed.** The canonical phrase governs a *missing* primitive. Heat, water, fuel and host are bindings from the forest-science frame onto held terms, with provenance owed, not invented primitives. The metamerism point is not retracted: several causes yield one dieback reading (see `05_what_shape_means.md`). |
| "more monitoring will find the interaction coefficient" | **Retracted.** More search in one closure adds no atom (Fig 8 :32); the coefficient is a boundary gap, not a search target. |
| "agreement among vegetation models corroborates" | **Retracted.** Shared pool, one witness (Fig 2 :40, Fig 7 :35). |
| "crossing a threshold is removal of the forest" | **Retracted.** It is substitution of a habitat (Fig 11 :66), with asymmetric introduction and permanent work. |

**Typographic substitution note.** The no-em-dash rule applies to every file in this folder. One world-source quotation that contains em dashes in the original page (the WRI regional sink-and-source sentence in F3) is reproduced here with hyphens in place of those em dashes. No word was changed and no figure quote was altered; the figure extract itself contains no em dashes. All figure quotations are exact substrings of `FRAMEWORK/reference/03-FIGURES_TEXT.md`.

### Seven-question recursive derivation (summary)

1. **Is this one hard question?** No. Fig 9 :55-57 splits it into a union of overlapping conditions with compounds; F1.
2. **What is the object that survives?** Forest-and-habitat, per stand (Fig 11 :39, :40); F2.
3. **What is the currency?** A per-slot residual, never an aggregate (Fig 1 :19, :22); F3.
4. **Do the drivers have fixed signs?** No (Fig 11 :49-51); the world sources supply two counter-cases; F4.
5. **How do they compose?** By typed bonds, ordered sequence, production and cycle; not by `+` (Fig 12 :70-79, :121); F5, F9.
6. **What crosses a scale?** A method or head start with a measured R_T; a recording of one stand does not transfer (Fig 4 :22, :25, :30); F12.
7. **Is the coefficient reachable?** No from the held closure. Fig 9 :32 returns a kind of thing; the coefficient is an import owed with provenance and a shadow test; F11, F10.

### Updated verdict

The shape survives: a per-stand union of overlapping conditions, with residual-relative valence, higher-order cascades, a threshold comparison on survival, a lossy cross-scale transform, and a substitution branch at the tail. What does not survive is the request for a single interaction coefficient, a global forest verdict, a standing list of harmful drivers, or a causal beetle-to-fire link asserted without a source gate. No figure line was strained after the re-census; two live type questions remain named rather than hidden: the comparison bond's operand type at stand level (F7) and the fixed-atom condition on the isomer claim (F9). Triangulated findings: F1, F2, F3, F4, F5, F6, F7, F8, F10, F12, F13. Single-source at the figure level: F9 (with world corroboration of behavioural difference only). Gap: the universal coefficient, which is unreached at this budget, not silence (Fig 13 :134, Fig 8 :39).
