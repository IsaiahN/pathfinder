# Figure-grounded audit: EAR-0001, interactions that shape long-term Earth behavior

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." No measurement in this folder ranks the interactions, so nothing here is `grounded`.

**Status: a simulated derivation, not a ground reading.** This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Figure source.** All figure citations are against `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the local verbatim extract with line numbers. Quotes are exact substrings of that file. Read this session, 2026-11-22.

**Question (source line 5, section 1):** Which interactions among atmosphere, oceans, ice, land, and ecosystems most strongly shape Earth's long-term behavior?

---

## 0. The residual, stated in effect terms

The asked-for object is a **ranking of interaction slots by their contribution to the long-term state of the coupled system**. State it as an effect: for each slot `s` (an edge between two of the five named realms, or a higher-order relation over them), what is the residual mass `R_s = |Γ(b,a) - o'|` when the observation `o'` is the long-term behavior of the Earth system?

Two options follow, and each leads somewhere different.

- **Option A:** produce one list, "ice-albedo first, ocean-atmosphere second, ...". This aggregates across slots. Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." It also freezes valence: an interaction that amplifies one residual damps another (Fig 11 :50).
- **Option B:** enumerate the slots and report a verdict per slot, with the feedback cycle each belongs to and the instrument that would settle it. This keeps the live signal. It does not name a single winner, because the figures return a shape. Fig 9 :32: "you get a kind of thing, never the answer itself."

**Binding the sought-for shape as an ordinary term (Formula, "Direction").** A frame cannot check the direction of its own question, because the shape it seeks is a preference rather than a held term (Fig 5 :61 to :66). So write the shape down before deriving: *an adequate answer is a per-slot, enumerated union of interactions, each with its bond type, its feedback cycle and sign, its scale, and its anchor instrument, with the slots kept separate rather than averaged.* That shape is now a term that can accrue a residual like anything else. The pre-registered refuter in §4 points at it.

**What "long-term behavior" means is itself the unmeasured middle link.** Fig 3 :24 names "Why the middle link is where chains usually break" and Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." The objective ("what counts as long-term behavior") is a comparison, and a vocabulary without a comparison cannot state a goal (Operators table :52: "a goal is a comparison, which is why a vocabulary without it cannot state one"). This is declared, not silently assumed: the residual is taken over centennial-to-millennial outcomes, since the source module frames the question that way, and the declaration is itself refusable.

---

## 1. Domain census (before any figure line is chosen)

### 1.1 R by arity, symmetry and scale

- **Arity:** the object is a relation over two or more of five realms, so R is an **edge set**, not a scalar. There are ten unordered pairs and higher-order overlaps among five realms. "R is measured per slot, never as a single global number" (Symbols table :43 to :44).
- **Symmetry:** interactions are **not interchangeable in effect**. The bond carries information the operands do not (Fig 12 :46: "A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."). Feedback sign is relative to the residual being tracked, not a property of the edge (Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries.").
- **Scale:** local to global in space, hours to millennia in time. The transform between scales is lossy (Fig 4 :27: "The transform between scales loses information, and that is the point."). A single time scale would be a filter masquerading as a verdict (Fig 9 :60).

### 1.2 One line per candidate domain: actors / currency / anchor

A nameable anchor is required. Where none can be named, the candidate is not a domain yet.

| id | candidate slot (edge or compound) | actors | currency | anchor | status |
|---|---|---|---|---|---|
| D1 | atmosphere / ocean | winds, currents, SST, heat and carbon flux | heat, momentum, carbon | Argo profiles, ocean heat content, SST record | admitted |
| D2 | ice / ocean / atmosphere | sea ice, ice sheets, albedo, meltwater | reflected radiation, freshwater flux, mass balance | satellite albedo and extent, ice mass balance | admitted |
| D3 | land / atmosphere | soil moisture, vegetation, dust, land use | water, energy and carbon flux | flux towers, satellite land products | admitted |
| D4 | ocean / ecosystems / atmosphere | solubility and biological pumps, phytoplankton | carbon flux and storage | ocean carbon inventory, atmospheric CO2 record | admitted |
| D5 | ecosystems / land / atmosphere | vegetation, fire, permafrost, canopy albedo | carbon, water, albedo | vegetation indices, CO2 and CH4 records | admitted |
| D6 | cross-cutting thresholds and cascades | all of the above, in state transition | regime shift, cascade, hysteresis | paleo records, detected transitions, model intercomparison | admitted as a **compound**, not a sixth realm |
| X1 | "the single strongest interaction" as a free-floating property | none nameable | none | none nameable | **not a domain yet**. It is the sought-for shape held as a preference (Fig 5 :61 to :66). No anchor means it cannot be a domain |
| X2 | "a tipping point" as a separate cause | absorbed into D6 | absorbed | absorbed | absorbed. The source file itself warns that the meaning and application of the term vary. Treating it as a sixth realm would double count D1 to D5 |

### 1.3 Partition or union?

**Union, not partition.** Each realm appears in several edges: ice modifies ocean circulation and albedo at once; ecosystems modify land albedo, the carbon cycle and the water cycle at once. Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." So a single lever that clears the region where one condition holds leaves the intersections standing. Unbundle before searching again (Fig 9 :54). D6 is itself the compound formed by the overlap, with its own loop and its own ground.

### 1.4 Order by dependency (Fig 3)

Perception (observations and reanalysis) → vocabulary (fluxes and bonds) → objective (what "long-term behavior" compares) → planning (Earth system models) → learn and carry (validation and lineage). Fig 3 :20 to :21: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it." The likely break is at the objective, not at the model: more model resolution cannot rescue an unstated comparison.

---

## 2. Figure census

| figure | what it governs here | verdict on this question |
|---|---|---|
| 1 The Agent | residual per slot; frame-internal quantities are disqualified | **decisive against a single ranked list** |
| 2 The Ground | anchor must not update; agreement from one pool is worthless | observations settle, not reader agreement |
| 3 Dependency Chain | order by dependency; a reading below the break reads nothing | objective must be stated before models are compared |
| 4 The Membrane | lossy cross-scale transform; round trip gap | fast and slow slots cannot be merged without an `R_T` |
| 5 Mint Pipeline | a sought-for shape is a preference, not a term | bind the shape as an ordinary term (§0) |
| 6 Closure / Reachability | import is the only operator that moves the wall | no new primitive is needed to answer this question |
| 7 Room Chain | agreement compounds, evidence does not | a larger reviewer pool does not rank the slots |
| 8 Union Surplus | unbundle unions; residual first, frame second | this is a union; describe R before picking a frame |
| 9 Leave / Arrive | split union vs partition; filters vs witnesses | union confirmed; a ranking score is a budget filter only |
| 10 Ground Maintainer | keep the channel to the ground open | instruments, not consensus, settle a slot |
| 11 The Habitat | enumerate actors, conditions and relations; valence relative to R; cascades | **primary governing figure** for the domain census |
| 12 The Bond | typed bond; cycle, catalyst, functional group | feedbacks are cycles; sign decides closure |
| 13 Minimum Viable Set | network, gradient, flow; set closed, arrangements open | network and gradient-over-state name the currency; no seventh realm |
| Operators | ⋛ comparison, → sequence, ⇒ production | "long-term behavior" is a comparison; cascades are productions |
| Symbols | R is per slot and is the aim | the ranking request is an aggregation pressure |

Strained readings are named in §6 and not smoothed over.

---

## 3. Findings

### F1 — A single global ranking is not figure-licensed (decisive against Option A)

Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
Fig 11 :50: "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."

An "interaction most strongly shaping long-term behavior" is a slot-independent superlative. The figures deny that R has a slot-independent form: it is indexed per slot, and valence flips with the residual. Ice-albedo amplification is positive for a warming residual and irrelevant or reversed for a cooling one; the same physical edge, different valence. A single list would average live slot signals and freeze a relative valence into an absolute property.

**Mode:** `specified` (structural, falsifiable). **Status:** triangulated, Fig 1 (agent loop) and Fig 11 (habitat valence), low overlap between an indexing rule and an ecological valence rule.
**Refuter:** show one interaction carrying positive residual mass in every slot under a single fixed residual, with an anchor instrument that returns the same ranking at local, regional and global scale.

### F2 — The answer is obtained by enumeration, not by composition

Fig 11 :43: "The habitat is enumerated, never composed."
Fig 11 :44: "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."
Fig 11 :45 to :47: "actors: what acts on it, and what it acts on", "conditions: light, water, temperature, season, terrain", "relations: pollination, predation, competition, dependency".

The five realms are not assembled out of more primitive realms by this framework; they are read off the world. The census in §1 is the enumeration, extended one step outward (D6, cascades). X1 fails the anchor test and is therefore excluded before any figure is used to rank it. "The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not" (Fig 11 :73, in substance Fig 11 final line).

**Mode:** `general` for the enumeration rule, `specified` for this census. **Status:** triangulated, Fig 11 and Fig 9 :26 ("R's own predicates name the habitat that holds"), low overlap.
**Refuter:** exhibit a realm or interaction that enters the answer by composition rather than by contact with the residual, or a cascade that stops mattering before the enumeration stops.

### F3 — The currency of the slots is flow along a gradient, and network is the governing structure

Fig 13 :24: "that entities relate, and influence travels" (the structure **network**).
Fig 13 :76: "Energy and a gradient compose a flow. A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is."
Fig 12 :46: "A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."

Heat from equator to pole, freshwater density contrasts driving overturning, carbon concentration differences driving uptake: these are gradients bonded to space or time, producing flows. That is why D1 to D5 have a common currency (flux) but different bonds. It is also why a single ranking by magnitude would be a type error: it compares a gradient-over-space flow with a gradient-over-time flow as if the bond were not part of the term.

**Mode:** `specified`. **Status:** triangulated, Fig 13 (substrate) and Fig 12 (bond pricing), low overlap between a structural claim and a pricing claim.
**Refuter:** show two slots with identical bond and operand set but distinguishable behavior, which would break the claim that the bond carries the missing information, or derive network from the other five substrate terms (Fig 13 :41: "Each is indivisible: no arrangement of the other five yields it.").

### F4 — The five realms form a union with a compound residue

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

D6 (thresholds and cascades) is not a sixth realm and not a harder version of D2 or D5. It is the compound where two or more conditions bind at once. This matches the source file's own caution that the meaning and application of "tipping point" vary across systems.

**Mode:** `specified`. **Status:** triangulated, Fig 9 (union rule) and the source question file (independent of the framework), low overlap.
**Refuter:** show that the ten pairs among the five realms form a partition in which each realm occurs in exactly one edge, or that the compound behaves exactly like the sum of its single-condition cases.

### F5 — A feedback is a cycle, and its sign decides whether it closes

Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."
Fig 12 :119: "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."
Fig 12 :123: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

Ice-albedo, water-vapour, carbon-sink and permafrost interactions are cycles, not linear chains. A chain cannot close by construction, so any answer that presents the five realms as a one-way cascade has already lost the thing that decides stabilization versus amplification. Fig 11 :52 adds that "Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."

**Mode:** `specified`. **Status:** triangulated, Fig 12 (cycle) and Fig 11 (cascade), low overlap between a composition form and an ecological contact rule.
**Refuter:** account for the long-term behavior with a linear chain in which no output re-enters as input, under an instrument that would detect a cycle if one were present.

### F6 — Fast and slow slots cannot be merged without measuring the round-trip gap

Fig 4 :19 to :20: "The kernel is the part that does not change with size: the same loop and the same rule for naming what worked, whether one agent is running it or a thousand. Only the actors, the currency and the anchor change."
Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."
Fig 4 :31 to :32: "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."

Atmospheric slots return in hours to weeks; deep ocean and ice-sheet slots return in centuries to millennia. A ranking that puts them on one axis performs an abstraction without a concretisation and reports the result as if it were the same quantity. Record the gap `R_T` instead.

**Mode:** `specified`. **Status:** single-source for the cross-scale rule (Fig 4), with the scale difference itself triangulated by an independent world source (see `09_watson_answer.md`, Climate system).
**Refuter:** show a single instrument that resolves a storm-scale flux and a millennial ice-sheet response on the same axis without loss, and demonstrate the round trip returns the original description.

### F7 — The framework returns a shape, not the name of a winner

Fig 13 :134: "Unreachable is a verdict here, not a silence,"
Fig 13 :138 to :139: "you get a kind of thing, never the answer itself, and narrowing gets you close while the ground decides."
Fig 9 :26: "R's own predicates name the habitat that holds"

Given the census, the reachable shape is: an enumerated union of per-slot flows, each embedded in a signed cycle, with thresholds as comparison relations over two or more slots, and an anchor instrument per slot. The *identity* of a strongest slot is not in that shape. To name it would require a ground reading that ranks slots, which this package does not have. The limit is a verdict (unreachable at this budget), not a silence, and not the same as underivable in principle (Fig 8 :39: "a search that finds nothing is never a proof of absence.").

**Mode:** `general` for the limit, `specified` for this shape. **Status:** triangulated, Fig 9 and Fig 13, low overlap between a search-limit claim and a substrate claim, reinforced by the canonical figures README ("a shape, not a name") read locally this session.
**Refuter:** produce a figure line whose verbatim text names a single strongest interaction among the five realms, or a ground measurement that returns a stable ranking across all named scales and residuals.

### F8 — Observations are the anchor; agreement among models is one evidence pool

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."
Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."
Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"

Argo profiles, satellite albedo, flux towers and carbon records are anchors for their slots. Two Earth system models calibrated on the same reanalysis are not two frames; they are one evidence pool wearing two names. Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

**Mode:** `specified`. **Status:** triangulated, Fig 2 (anchor rule) and Fig 7 ("same closure, handed along; agreement compounds, evidence does not"), low overlap.
**Refuter:** show two model estimates counting as independent evidence while drawing on the same reanalysis and the same parameterisation lineage.

### F9 — Scores and tiers are filters, never witnesses

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

A "most studied" or "best measured" slot gets attention first because it is cheap to check. That is a budget fact. It does not make that slot the most important one. Fig 1 :24 to :27 disqualifies "coverage, and compression achieved" and "predicates minted, and credibility accrued" as frame-internal quantities.

**Mode:** `general`. **Status:** single-source for the explicit rule (Fig 9), corroborated by Fig 1's disqualification list.
**Refuter:** exhibit a case where a budget filter is admitted as evidence for a slot's causal rank, with no separate ground reading.

---

## 4. Pre-registered refuter (written before the conclusion)

Required by Seat Map :287: "And a falsifier written before the run is a design instrument, not only an honesty device." The shape claim and the per-slot verdicts are refuted if any of the following holds. These are written before §5 and before the WATSON run.

1. **Slot invariance fails to hold as required:** one interaction carries positive residual mass in every slot under a single fixed residual, measured by an anchor that returns the same order at local, regional and global scale. (Breaks F1.)
2. **Partition instead of union:** the ten pairs among the five realms partition with each realm in exactly one edge, and the compound D6 behaves as the sum of its single-condition cases. (Breaks F4.)
3. **No cycle:** long-term behavior is fully accounted for by a linear chain with no output re-entering as input, under an instrument that would detect a cycle. (Breaks F5.)
4. **Invariant valence:** an interaction keeps the same sign and magnitude across two different residuals. (Breaks F1 and F5.)
5. **The winner exists:** a figure line verbatim names a single strongest interaction among the five, or a ground measurement returns a stable ranking across all named scales and residuals. (Breaks F7.)

If any fires, the shape claim is withdrawn. Until one is run, no per-slot verdict may be labelled `grounded`.

---

## 5. Recommendation

1. Refuse Option A. Do not publish a single ranked list. The figures permit a per-slot result only (F1, F7).
2. Publish the enumeration in §1.2 with the anchors in place, X1 and X2 excluded or absorbed visibly (F2, F4).
3. For each admitted slot, state the bond, the cycle and the sign relative to a named residual. Keep verdicts separate, never averaged (F3, F5).
4. State the round-trip gap between fast and slow slots instead of merging them on one axis (F6).
5. Send the generator (the residual, the shape claim and this refuter), not the conclusion, and use only the public opt-in venues in `03_public_contact_points.csv` (F8, F9; Fig 10 :52 "Bring a characterised residual, never the source.").

---

## 6. Canonical usage check, retractions and strains

### 6.1 Canonical usage check

Two local canonical documents were read this session after the first five sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo" and "the quotes are the authority, not this summary." A reading that makes two figures contradict "has misidentified its domain, not found a flaw." The framework reports "a shape, not a name" and stops at the limit of what instruments distinguish.
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are the ground for design questions; the seat reads the ground rather than asking the anchor to decide design. Fig 9 :60 is cited there for the rule that thresholds are filters and never the decision. So the tier and ranking machinery of the project cannot be used as a witness here.

Applied consequence: where two findings seemed to strain, I re-censused the domain rather than softening a quote. The strains found are listed in §6.3.

### 6.2 Retraction and confirmation log

| earlier reading in this derivation | status after re-census / canonical check |
|---|---|
| First pass tried to map each of the five realms onto one of the six substrate terms (e.g. ice = space, ocean = energy). | **Retracted.** Fig 13 governs the minimum set of *compositional primitives*, not the named spheres of a planetary habitat. The spheres are enumerated from contact (Fig 11 :43), not composed from the six. Recensus removed the apparent conflict between Fig 13 and Fig 11. |
| First pass named ice-albedo as "the strongest interaction" because it has the clearest measured feedback gain. | **Retracted as a global claim.** A clear instrument is a contact and budget fact, not a causal rank. Fig 1 :19 and Fig 11 :50 forbid the aggregation and freeze the valence. Downgraded to a per-slot verdict with an explicit residual, `specified`, triangulated. |
| First pass treated "tipping points" as a sixth realm alongside the five. | **Retracted.** It is a threshold relation (⋛ comparison) over slots and a compound union (D6), not a realm. The source question file's own caution about the varying meaning of the term supports this. |
| First pass read Fig 6 ("only import moves the wall") as requiring a new primitive to answer this question. | **Retracted.** All slots compose from already-held terms (states, structures, gradients, networks, flows, cycles). No import is owed. Fig 6 is relevant as a definition of what would move the wall, not as an instruction to move it. |
| Union, not partition (F4). | **Confirmed** by Fig 9 :54 to :57 and by the world source on cascading tipping points (independent of the framework). |
| Per-slot residual, no aggregation (F1). | **Confirmed** by Fig 1 :19, :22 and by the world source stating that aggregation approaches lose information, read this session (see `10_source_ledger.csv`). |
| Shape-not-a-name limit (F7). | **Confirmed** by Fig 9 :32, Fig 13 :134 and the canonical figures README. |

### 6.3 Strains, named not hidden

- **Fig 13 (closed six) versus five named realms.** Dissolved by re-census: different objects. Six are compositional primitives; five are habitats read off the world. If they are conflated, the question looks like a search for a seventh primitive, which it is not.
- **Fig 12 (cycle) versus a one-way cascade reading of "shape".** Dissolved by re-census: "shape" here is the form of an answer, not a spatial shape. A shape can contain cycles. The mismatch was between two senses of one word, not between figures.
- **Fig 1 per-slot versus the asked-for single ranking.** This is not a figure strain. It is a conflict between the question as phrased and the figure, and it is reported as such. The question is reformulated rather than the figure softened.
- **After re-census: no unresolved figure-to-figure strain.** One live tension remains between the question's requested form and the figures' permitted form, and it is the subject of F1 and F7.

---

## 7. Answer to the question as asked

The figures do not license a single winner. They license: an enumerated, per-slot answer in which each interaction is a gradient-driven flow (network structure) embedded in a signed cycle, with threshold relations over overlapping slots kept as a compound; observations as anchors; and verdicts kept separate and never averaged. The strongest *claim* available is about the form of the answer, not its content. That is `specified` and ungrounded. Any particular ranking would be the searcher's own contribution, recorded as such, not a finding of the framework.
