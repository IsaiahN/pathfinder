# Figure-grounded audit: when is topology fixed, when is link dynamics owed?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 5.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim extracted figure text, cited as `Fig N :line`), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, plus the world sources actually opened and recorded in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The question is not "does the graph really change." It is: **which term is owed when a network model keeps being wrong?**

A model holds a belief b about adjacency A, takes an action a (an intervention, a measurement, a modelling choice), predicts a process outcome Γ(b,a), and the world returns an observation o'. The residual R = |Γ(b,a) - o'| is indexed per slot. The slots here are of two kinds: node-state trajectories and candidate links. The figures are explicit that this indexing is the only signal that says where to look:

> Fig 1 :19 *"The residual is indexed by object slot, not aggregated."*
> Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."*
> Fig 1 :28 *"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."*

- **Option A, fixed topology.** Treat A as constant over the observation window. Leads to: link-slot residual is *"held: the model was right, nothing owed"* (Fig 5 :11), and any remaining error is process detail (nonlinear rates, heterogeneity, noise) added on the same graph.
- **Option B, link dynamics.** Model formation and removal inside the dynamics. Leads to: the link-slot residual persists and does not trend down while the node-state residual is already small, so the owed term refuses the held assumption that A is constant (Fig 5 :59, Fig 6 :21). The missing item is not another process parameter; it is a link that the fixed graph cannot compose.

**What an answer would look like, bound as an ordinary term before the run** (Formula, "Direction"): a decision shape with three parts, (i) which slot residual is live, (ii) what the round trip across the process/topology membrane costs, (iii) which instrument would settle the choice. The shape is bound here in sections 2 and 3 so it can accrue a residual like anything else, rather than remaining an invisible preference. Fig 5 :65: *"The remedy is a discipline rather than a branch: make the sought-for shape an ORDINARY TERM."*

**Strain test applied throughout:** if a figure line only fits by forcing, it governs a different quantity and the census is redone. Two strains were found and are recorded in section 7 rather than smoothed over.

---

## 1. Figure census

| figure | bearing on this residual | verdict |
|---|---|---|
| **1 The Agent** | residual indexed per object slot, not a global fit | a global "the model fits" is not admissible evidence for fixed topology |
| **2 The Ground** | anchor must not update; agreement needs independence | edge observations settle it, not agreement between reconstructions sharing one time series |
| **3 Dependency Chain** | order by dependency; link with no instrument is not a working link | the vocabulary to objective link is the likely break; more process detail lands above it |
| **4 The Membrane** | cross-scale transform is lossy; measure the round trip | fixed vs dynamic is a membrane question; the gap R_T is the measurement, not a preference |
| **5 Mint Pipeline** | four kinds of gap plus the refusal kind; persistent non-trending residual | the owed term is a refusal of constant adjacency, not a new process parameter |
| **6 Closure / Reachability** | MINT cannot add an atom; inward and outward are two tracks | adding links between held nodes is not an import that moves the wall; edge observation is an inward instrument |
| **7 Room Chain** | agreement is variation, not a verdict | a consensus of fixed-topology papers cannot anchor the decision |
| **8 Union Surplus** | residual first, frame second; convergence vs adoption | the timescale frame was named after the residual; recorded as such |
| **9 Leave / Arrive** | union vs partition, unbundle before searching | the residual is a union compound; one lever clears only one region |
| **10 Ground Maintainer** | bring a characterised residual, never the source; channel decays | send the shape and refuter first; stale edge percepts are a channel failure |
| **11 The Habitat** | habitat enumerated, valence relative to residual | list what touches the link residual; no standing list of good mechanisms |
| **12 The Bond** | two currencies, bits and actions; catalyst and cycle | a time-varying adjacency costs more to state and less to refute if edges are observed |
| **13 Minimum Viable Set** | network is one of six structures; adjacency is not duration | network (adjacency) and time (duration) are distinct frames; composition is cross-kind only |
| **Operators table** | ⇒ production, − subtraction, ¬ refusal | formation and removal are ordered bonds; the refusal is unary |
| **Symbols table** | R is the aim; the ground is the anchor | no ground reading exists in this derivation; mode stays `specified` |

Strained readings are named in section 7, not hidden.

---

## 2. Domain census (written before choosing any figure line)

### 2.1 R by arity, symmetry, scale

- **Arity:** three-place (topology belief, action/intervention, observation), indexed per slot. Two conditions are entangled, so the residual is a **union compound** (Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*).
- **Symmetry:** link formation and removal are ordered. Fig 12, Operators: ⇒ is production (*"A produces B; B did not exist before"*), − is subtraction (*"A with B removed or absent"*), and ¬ is refusal. The link bond itself may be symmetric (+) or ordered (→), but the *change* of a link is not a symmetric relation. A fixed-topology model treats the adjacency as a held term; admitting change introduces an ordered bond the static model does not carry.
- **Scale:** first order is the process on a given graph, second order is the evolution of the graph. The boundary between them is a membrane, not a wall (Fig 4 :21).

### 2.2 One line per domain: actors, currency, anchor

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Process on a fixed graph (quenched) | nodes, held links, the dynamical process | node-state residual | measured node states over the window | admitted |
| D2 Topology evolution | nodes, potential links, formation/removal rules | link residual; new arrangements of held atoms | time-resolved edge observations or an edge-revealing intervention | admitted |
| D3 Observation and inference | observer, partial data, hidden edges | information about adjacency | ground-truth adjacency when obtainable; otherwise an edge-revealing experiment | admitted (the user's named field: network topology inference research) |
| D4 Timescale membrane | process timescale, topology timescale, instruments | what crosses between scales; round-trip gap R_T | measured timescales and the measured gap | admitted |
| X "topology as intrinsic, independent of any observation" | none nameable | none | none once measurement and timescale are removed | not a domain yet; constitutively about the observation (Fig 2 :36), absorbed into D3 |

No nameable anchor means it is not a domain yet. X is not smuggled back in under a different name.

### 2.3 Partition or union

The two regimes form a **partition of cases by observed timescale ratio**, but the *residual* is a **union compound**: C1 process mis-specification, C2 topology mis-specification or change. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* A single lever (more process detail) clears the region where only C1 holds and leaves the intersection standing, because C2 still binds. The intersection is categorically different, not a harder case of either.

### 2.4 Order by dependency (Fig 3)

perception (observe node states and edges) → vocabulary (terms for formation, removal, timescale, membrane) → objective (which slot residual is not trending down) → planning (which lever: sharper process model vs edge instrument) → learn and carry (verify against the ground, carry the method).

Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* Fig 3 :20: *"The chain is ordered by dependency, not by importance."* The chain typically breaks between vocabulary and objective: having terms for what a graph affords and saying what would count as progress in choosing fixed versus dynamic is the least-instrumented link. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

---

## 3. Findings

### F1 — Index the residual per slot, never per graph (anchor for everything else)

> Fig 1 :19 *"The residual is indexed by object slot, not aggregated."*
> Fig 1 :28 *"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."*

A global goodness-of-fit cannot decide fixed versus dynamic. A model can fit the average trajectory while a specific pair of nodes keeps violating the assumed adjacency. That pair is the live slot, the *"something happened there the prediction missed"* of the Symbols table's live mass. The decision is made per link and per node, then reported per domain; it is never an average over the network.

**Refuter:** show a case where every link-slot residual is held, the node residual persists, and no edge-revealing observation changes the verdict. Then the link slot is not the owed term and F1's decision rule mislocates the problem.

### F2 — The persistent non-trending link residual points a refusal, not a new process parameter

> Fig 5 :59 *"a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at"*
> Fig 6 :21 *"MINT composes inside the closure and can never add an atom."*
> Fig 5 :41 *"Any one of them at zero stops the mint entirely. Which is why a system that is minting nothing may have nothing wrong with its minting."*

Adding a nonlinear infection rate, a heterogeneity parameter, or a noise term composes inside the same graph closure. It cannot compose a link that the closure does not contain. The residual that persists and does not trend down is the selector's shrinking test read with the opposite sign: it names the held term to refuse, namely "adjacency is constant over this window." A refusal is ¬, a unary operator, not a seventh bond (Operators table amendment). What falls is not a term but a term's standing to be composed over: *"Nothing leaves the library. What falls is the reach."* (Fig 5 :55).

This is the step most often skipped in practice. A persistent link residual is routinely answered with a more elaborate process model, which is exactly the wrong bin: it is the *"mechanism broken: a new term is owed"* bin being read as the *"new: extend perception, aim the probe here"* bin.

**Refuter:** a process-only term that drives the persistent link residual to held without altering any edge and without an edge-revealing observation. If that happens, the refusal was pointed at the wrong held term.

### F3 — It is a union compound; unbundle before choosing a lever

> Fig 9 :54 *"And when the split lands on a union rather than a partition, unbundle before you search again."*
> Fig 9 :57 *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*
> Fig 9 :44 *"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."*

C1 (process wrong on a good graph) and C2 (graph wrong) overlap. More process detail is a lever that works only where C1 alone holds. Where C2 binds, the residue after the lever is not "a smaller version of the same problem"; it is a compound with its own loop and its own anchor (edge observations). This is why the honest answer to "when fixed, when dynamic" is a conditional decision shape and not a single rule applied to all systems.

**Refuter:** one intervention that reduces both the node residual and the link residual to held, with no categorically different residue left over. That would dissolve the union and collapse the two regimes into one.

### F4 — The membrane between scales is the real decision surface

> Fig 4 :20 *"Only the actors, the currency and the anchor change."*
> Fig 4 :27 *"The transform between scales loses information, and that is the point."*
> Fig 4 :30 *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*
> Fig 13 :36 *"adjacency is not duration, an ordering is not a pathway, a pathway is not a direction."*

Fixed topology and link dynamics are two descriptions at two scales of the same system. The kernel (the loop) is the same; what changes is the currency (node-state residual versus link residual) and the anchor (node trajectories versus edge observations). Network (adjacency) and time (duration) are distinct structures in the six-term set; collapsing them is a category error. The framework does not hand over a number. It requires the round trip: predict with a fixed graph, predict with edge dynamics, compare both against the same held-out observations, and measure the gap. The gap is what the coarser description cannot hold. If the gap is near zero, the extra terms are not owed (Fig 5 :44 bargain). If the gap is large and localised on specific links, those links are the owed term.

**Refuter:** a measured round-trip gap near zero across a window in which time-resolved edge observations show link turnover that demonstrably changes the process outcome. That would break the membrane rule as applied here.

### F5 — The anchor is an edge observation, and agreement is not one

> Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*
> Fig 2 :36 *"An anchor is legitimate when the question is constitutively about it."*
> Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
> Fig 2 :40 *"agreement about the world is worthless when the agreeing frames share an evidence pool"*
> Fig 2 :42 *"Buy independence in proportion to the cost of being wrong."*

The question is constitutively about whether links existed and changed, so an edge-revealing measurement is the right anchor. Two reconstruction algorithms fed the same node time series are two names for one witness; their agreement is the data pool talking. Genuine independence would be two instruments that do not share that pool, for example direct edge observation and a perturbational intervention. *"But shared atoms are not the signature. Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."* (Fig 8 :50). The ledger records where each world source came from so a pool is not mistaken for a witness.

**Refuter:** two reconstructions from demonstrably independent instruments that converge without sharing an evidence pool, and whose agreement is then confirmed by the edge anchor. That is corroboration, not the collapse named here.

### F6 — The framework returns a shape, not a universal threshold

> Fig 9 :32 *"you get a kind of thing, never the answer itself"*
> Fig 13 :134 *"Unreachable is a verdict here, not a silence,"*
> Fig 8 :39 *"So a search that finds nothing is never a proof of absence."*

No figure line states a critical ratio of topology timescale to process timescale. The universal number is a `gap`, not a hidden answer. What the figures license is the procedure: index the residual, refuse the constant-adjacency term when its slot residual persists, measure the round-trip gap, and let the edge anchor settle it. Declaring a number would be naming where the framework returns a shape. The world literature does supply system-specific criteria (recorded in `09_watson_answer.md`), but those are bindings from that frame, not figure-derived constants.

**Refuter:** a figure line that does give a universal fixed/dynamic threshold after a genuine re-census. Until one is shown, the threshold stays a declared gap.

### F7 — The habitat of the link residual must be enumerated

> Fig 11 :43 *"The habitat is enumerated, never composed."*
> Fig 11 :49 *"An actor's valence is relative to the residual, not a property it carries."*

What touches the link residual: node state changes, link activation and deactivation, node turnover, observer sampling windows, missing edges, the intervention itself, and the model's own assumed stationarity. Their valence flips with the residual. Slow node turnover is a benefactor to a fixed-topology model (it leaves the link residual held) and a malfactor to a dynamic model that needs turnover to explain the data. There is no standing list of good mechanisms (Fig 11 :51). Scoping to direct contact is how second-order effects are missed, so the enumeration must reach outward until the cascade stops mattering (Fig 11 :52-53).

**Refuter:** an invariant valence for one mechanism across a documented change of residual. That would make the valence a property of the actor rather than a relation to R.

### F8 — Two currencies, bits and actions, and they do not add

> Fig 12 :125 *"A composition costs in two currencies, and they do not add."*

A time-varying adjacency costs more bits to state (one more index, a transition rule) and may cost fewer actions to refute if edges are directly observed. A fixed adjacency is cheap to state and may take a whole experimental budget to refute. Fig 12 :126: *"Bits price the description. Actions price finding out whether it holds."* Choosing the model by description cost alone (the usual parsimony shortcut) or by measurement cost alone is blind to the other reading. The two columns stay separate; the budget decides how much of the space is reached at all.

**Refuter:** a demonstrated additive exchange rate between description bits and edge-observation actions that predicts the choice in a new system. None is supplied by the figures, so the two readings remain held apart.

### F9 — Residual first, frame second

> Fig 8 :53 *"Residual first, frame second."*
> Fig 9 :27 *"describe it before you go looking, or any frame you pick will seem to fit"*

The network-science frame (temporal networks, adaptive networks, topology inference) was consulted only after the residual was characterised in effect terms in section 0 and 2. Had the frame been chosen first, every system would have seemed to fit. The world sources are therefore recorded as bindings that predict the shape of the residual, not as the source of the verdict. Their field, author, venue, year and quote are in `10_source_ledger.csv`.

**Refuter:** evidence that the timescale frame was selected before the residual was described. The audit would then revert to apophenia and the world corroboration would be discarded.

### F10 — Mode discipline

> Fig 2 :29 *"If it moves when you push on it, it is not an anchor."*

Every substantive claim here is `specified` and ungrounded. No claim is made that a particular network has been measured, that any reconstruction was run, or that the simulated derivation settles the choice for any named system. Fig 2 :35 and the world statements about timescale separation are corroboration only; the verdict comes from the figures.

**Refuter:** any measurement that moves the verdict, for example a direct edge observation showing link turnover with a fixed-graph model still predicting the process to held residual. Then the claim is settled at the ground and the mode changes.

---

## 4. Pre-registered refuter

Written before the conclusion, per Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."* Also Seat Map :171: *"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."* The author's stake in the verdict is structural and is declared here rather than asserted as truth.

The decision shape is refuted if any of the following holds:

1. A fixed-adjacency model drives the per-link residual to zero (or held) across the window while node residuals are nonzero, and no edge-revealing instrument changes that. Then topology is not the owed term and Option B is wrong for that system.
2. Adding edge dynamics does not reduce the measured round-trip gap on held-out observations. Then the persistent link residual is process mis-specification in disguise, and the refusal was pointed at the wrong term.
3. One intervention reduces both residuals to held with no categorically different residue. Then the union compound of F3 dissolves and the two-regime decision shape is unnecessary.
4. No instrument at any resolution returns a time-resolved edge observation (Fig 6 :34-35: *"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."*). Then the question is `unreachable` at this budget for that system, which is a different verdict from "dynamic topology required." *"Unreachable is a verdict here, not a silence,"* (Fig 13 :134).

If any fires, the specific claim is withdrawn and the retraction is recorded here rather than erased. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Index the residual per node and per link before fitting anything; do not report a global fit as the decision variable (F1).
2. When a link residual persists and does not trend down, point a refusal at the constant-adjacency assumption before minting another process parameter (F2).
3. Unbundle process mis-specification from topology change with a separate edge instrument; one lever does not clear a union (F3).
4. Run the round trip: fixed graph versus edge dynamics against the same held-out observations, and report the gap R_T as the measurement (F4).
5. Use public institutional and opt-in venues in `03_public_contact_points.csv`, lead with the shape and its refuter, and never pool later agreement as corroboration (F5, Fig 7 :35).
6. Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."* Send the decision procedure and its refuter, not a conclusion about one network.

---

## 6. Canonical usage check

Two sources govern how the figures may be used and were read after the first five sections:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; and the limit: the framework says what a missing thing would have to look like, a shape not a name, then stops at the limit of the available instruments and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md` step 7: SEARCHED first (cheapest, and the other two assume its answer), then INWARD (extend the instrument from one already returning something), then OUTWARD (import from a frame whose closure differs). These three are kept distinct. Here SEARCHED asks whether the link is already in the held graph but unfound by the reconstruction; INWARD asks whether a sharper edge instrument exists; OUTWARD asks whether a formation rule from another frame predicts the link residual's shape. Importing against a budget limit adds an atom that was not needed.

---

## 7. Retractions and confirmations

| earlier reading in this derivation | status after canonical re-census |
|---|---|
| First pass read Fig 13 :36 (*"adjacency is not duration"*) as forbidding any composition of network and time | **Retracted.** The line separates the six structures as distinct frames. Fig 13 :74 requires composition across kinds: *"Everything else is a composition across the two kinds, never within one."* Network and time can compose through a state or through another structure; they are not the same frame. Strain dissolved by re-census. |
| First pass treated link formation as a MINT, a new atom in Γ | **Retracted at record level.** A link between nodes already in the library is a new arrangement of held atoms, not a new primitive. Fig 6 :21: *"MINT composes inside the closure and can never add an atom."* The owed term is a refusal of constant adjacency, not an import that moves the wall. |
| First pass wanted a universal timescale threshold as the deliverable | **Retracted.** Fig 9 :32: *"you get a kind of thing, never the answer itself."* The threshold is a declared gap, not a hidden figure line. World sources give system-specific criteria and are labelled as bindings. |
| First pass used agreement between two reconstruction methods as corroboration | **Retracted.** Fig 2 :40: same time series means one evidence pool. Only independent instruments converge as two witnesses (Fig 8 :50). |
| Per-slot indexing (F1) | **Confirmed verbatim.** Fig 1 :19, :22, :28 checked against the extract. |
| Union unbundling (F3) | **Confirmed verbatim.** Fig 9 :54, :55, :57 checked against the extract. |
| Membrane round trip (F4) | **Confirmed verbatim.** Fig 4 :27, :30 checked against the extract. |
| Link as arrangement, not atom | **Canonically confirmed** by the substrate rule: the set is closed, the arrangements are not (Fig 13 :115). |

### Strains still live

1. **Two currencies in F8.** Description bits and observation actions are held apart by Fig 12 :125. No figure supplies an exchange rate, so a model-selection rule that sums them would be unsupported. Named, not hidden.
2. **Ground truth of adjacency is often unavailable.** The anchor for D3 is sometimes an intervention rather than a direct listing of edges. Fig 2 :36 permits this when the question is constitutively about the observation, but the quality of that anchor is a measurement question, not a figure question. Recorded as a limit, not a correction.

### After re-census

One dissolved strain (Fig 13 :36 versus cross-kind composition), two live limits named, no silent smoothing. The shape is unchanged: index per slot, refuse constant adjacency when its slot residual persists, unbundle the union, measure the round-trip gap, let the edge anchor decide, and stop at the instrument limit with the lineage recorded.
