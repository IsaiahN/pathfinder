# Figure-grounded audit: spatial constraints and physical costs versus abstract network models

**Mode of this document: `general` on the structural claims, `specified` on the behavioral consequences. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status: simulated derivation, not a ground reading.** *The Recursive Self-Improvement Trap* says LLM output can "simulate an approximate answer/output" but "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is checked for internal consistency against the verbatim figures. It cannot settle the question it reports on (see `05_what_shape_means.md` §6).

**Sources.** Figure lines quoted verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` and cited `Fig N :line`. Canonical usage from `FRAMEWORK/reference/FIGURES_README_canonical.md`. Loop and mode from `FRAMEWORK/figures/THE_FORMULA.md`. World sources listed and opened as recorded in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

An abstract network model predicts B: short mean path length, robust hubs, low spreading thresholds, scale-free spread. Its library Γ_A contains nodes, links, degree, hops, centrality. A real transportation, power, or communication system has positions, distances, capacities and budgets. Comparing Γ_A's prediction with the observation o' of the real system leaves a residual R.

R is not a single global number. It is live in particular links and regions: the long detour across a river, the overloaded regional hub, the line that would be efficient topologically but cannot be built. Fig 1 :13 names this state: "a global R near zero with one live slot residual is a legal state". Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." So the residual of this question is **slot-indexed by link and region**, and any answer that reports only a change in the global mean has thrown away the signal.

R has two conditions, stated in the question as "spatial constraints AND physical costs". That is a union compound, not one hard problem (Fig 9 :57: "a case in two conditions is not a harder case of either"). The two must be unbundled before a frame is chosen (Fig 9 :54: "when the split lands on a union rather than a partition, unbundle before you search again"). In effect terms, then:

> R = (predicted behavior from topology only) minus (observed behavior of a system whose links occupy space and cost something), reported per link and per region, with geometry and cost held as two conditions that can bind at once.

Binding an ordinary term before the run (formula "Direction"): an answer is a specification of which atoms are missing from Γ_A, the legal composition rule they impose on links, the pattern of slot-indexed failure that follows, and the instrument that would name the numeric result. That term accrues a residual and is refutable in §4.

---

## 1. Domain census (before any figure line is chosen)

**R by arity, symmetry, scale.** Arity: two conditions (space, cost), so a union compound. Symmetry: distance and cost are threshold relations of the "larger than" kind, not symmetric conjunctions; the question's own phrasing warns against treating a link as a free symmetric relation. Scale: topology is one description, geometry and energy another, with a lossy transform between them. Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

**One line per domain: actors, currency, anchor.**

- **Domain 1, the abstract network frame.** Actors: nodes, edges, degree, path length in hops, centrality. Currency: topological counts. Anchor: none nameable. Its measure of success is internal consistency, and Fig 1 :27 says "A frame cannot score itself with a quantity it also produces." This is a frame inside a closure, not yet a domain with a ground.
- **Domain 2, the physical and infrastructure frame.** Actors: geographic positions, Euclidean distances, link lengths, capacities, energy and monetary budgets. Currency: distance, energy, money, material. Anchor: the measured built system and physical law (a bridge cannot cross a continent for free). Nameable, so this is a genuine domain.
- **Domain 3, the verification and outreach frame.** Actors: network scientists, infrastructure engineers, modelers. Currency: agreement and residual. Anchor: the ground of Domain 2, never agreement. Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."

**Partition or union.** Union. Space alone leaves cost-bound intersections standing; cost alone leaves geometry-bound intersections standing. Fig 9 :57: "a case in two conditions is not a harder case of either." Fig 9 :54 requires unbundling before searching. Each condition gets its own loop, then the compound gets its own loop.

**Order by dependency (Fig 3).** Perception of which links actually exist (Fig 3 :4-5) -> vocabulary for what a link affords, including distance and cost (Fig 3 :6-7) -> objective: what counts as predicting the observed structure (Fig 3 :9-11) -> planning -> learn and carry. The chain is ordered by dependency, not importance; Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." Most modeling effort lands above the break (better topology estimators) while the missing link is at vocabulary (no term for cost). A link with no instrument is not a link that works (Fig 3 :27).

No anchor is nameable for Domain 1, so it is treated as a frame to be ranged against Domain 2, not as a domain in its own right. That is the first structural result, not a side note.

---

## 2. Figure census (bearing and verdict, read before concluding)

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual per slot; frame cannot self-score | global-average answers are disqualified; abstract frame has no ground |
| 2 The Ground | anchor must not update; frames range against it; correlation disqualifies | ground is measurement of real systems; agreement among models is not corroboration |
| 3 Dependency Chain | vocabulary link before objective; effort above the break is wasted | the absent term is cost/distance, not a better topology estimator |
| 4 The Membrane | cross-scale transform loses information; measure the round trip | topology-to-geometry mapping has a nonzero R_T |
| 5 Mint Pipeline | three guards as product; nothing new here if machinery works | adding cost is not a mint inside Γ_A; it needs an import |
| 6 Closure / Reachability | mint cannot add an atom; only import moves the wall | space and cost are imported atoms; decisive |
| 7 Room Chain | agreement compounds, evidence does not | many agreeing network models are one long room |
| 8 Union Surplus | low overlap between closures; residual first, frame second | the physical frame supplies what Γ_A lacks; describe R first |
| 9 Leave / Arrive | union vs partition; describe before looking; shape, not a name | two conditions, unbundled; returns a shape, not a numeric law |
| 10 Ground Maintainer | bring a characterised residual, never the source; verifier non-access | outreach leads with residual and refuter |
| 11 The Habitat | capability is agent-and-habitat; contact cascades | a model changed in isolation does not change contact with the ground |
| 12 The Bond | two currencies that do not add; isomer; flat formula loses arrangement | topology is a flat formula; metric and cost are the missing bond information |
| 13 Minimum Viable Set | cross-kind composition; space, energy states; gradient, network structures | links must compose across kinds; free long-range links are not composable |
| Operators / Symbols tables | network is "that entities relate at all, and that influence travels between them"; ⋛ is a threshold relation | network is a structure, not a geometry; distance and cost are threshold quantities |

Strained readings are named as such in §6, not smoothed over.

---

## 3. Findings

### F1  -  Space and cost are atoms absent from the abstract closure; embedding is an import (decisive)

Fig 6 :21: "MINT composes inside the closure and can never add an atom." Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."

Γ_A has topological atoms. Distance, capacity and budget are not derivable from degree and hops. A model that "adds a cost term" is not refining Γ_A; it is importing from the physical frame and thereby moving the wall. Fig 8 describes the source side: the import needs provenance and a shadow test, and Fig 6 :24 warns "A wrong atom costs more than starting from primitives."

This is not a claim that spatial network science is wrong. It is a claim about what the operation *is*: a closure change, not a parameter fit. Mode `general` for the closure rule, `specified` for the identification of space and cost as the imported atoms.

**Refuter:** derive a spatial or cost quantity inside Γ_A from topological primitives alone, with no contact with a frame whose closure differs. If that succeeds, F1 fails.

### F2  -  A link must compose across kinds; free long-range links are not composable

Fig 13 :74: "Everything else is a composition across the two kinds, never within one." Fig 13 :75: "Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state."

A network is a structure: "That entities relate at all, and that influence travels between them" (Symbols table :101). Space is a state, "near, far, between, contained" (Fig 13 :9-10). Energy is a state, "conserved, finite, directionless alone" (Fig 13 :13-14). Gradient is a structure, "a difference that can be spent" (Fig 13 :22). Once space and energy enter the closure, a link can no longer be a free relation between any two nodes. It must compose a state with a structure and a state, so which nodes can be joined becomes constrained by nearness and by what can be spent. The abstract model's assumption that any pair may connect at equal cost is exactly the composition the figure forbids.

**Refuter:** exhibit a model whose links remain free and unpriced at any separation and that still matches the measured structure of the real system. If it matches, F2 fails.

### F3  -  The residual is slot-indexed; global statistics hide where cost bites

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." Fig 1 :13: "a global R near zero with one live slot residual is a legal state."

Abstract models report global means: mean path length, mean degree, global efficiency. Spatial cost acts on particular links (a river crossing, a mountain pass, a congested corridor), so the failure is concentrated in slots. A small change in the global mean can coexist with a large live residual on one corridor. Reporting only the mean is the named failure: throwing away the only signal that says where to look.

**Refuter:** show that the cost-induced residual is uniform across links and regions, so that the slot-indexed description adds nothing over the mean. If uniform, F3 fails.

### F4  -  Two currencies do not add; the topology-to-geometry map has a round-trip gap

Fig 12 :125: "A composition costs in two currencies, and they do not add." Fig 12 :126: "Bits price the description. Actions price finding out whether it holds." Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

A topological path is priced in hops (description). A physical path is priced in distance and energy (actions and material). Holding only one accounting, the model "will not notice the shortfall" and proposes arrangements it cannot afford to test (Fig 12 :127). The detour index of spatial network literature is exactly the empirical residue of this gap: route distance is not Euclidean distance, and no single scalar removes the difference. So the right output is a shape with a measured round-trip gap R_T, not a single corrected number.

**Refuter:** provide one scalar that predicts both the topological and the metric behavior of the observed system with no residual left over. If it closes R_T to zero, F4 fails.

### F5  -  The residual is a union compound, not one question

Fig 9 :54: "when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :57: "a case in two conditions is not a harder case of either."

Space and cost are two overlapping conditions. A fix that changes only geometry leaves cost-bound cases standing; a fix that changes only budget leaves geometry-bound cases standing. In the intersection, "the second condition still binds" (Fig 9 :55). The correct procedure is one loop for geometry, one loop for cost, and a third loop for the compound, rather than one blended "spatial cost" parameter.

**Refuter:** exhibit a single lever that clears the geometry-only cases, the cost-only cases, and the intersection with equal success. If one lever clears all three, the union reading fails.

### F6  -  The ground is measurement; an abstract model cannot score itself

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :45: "Frames range against the ground. They do not negotiate with it." Fig 1 :27: "A frame cannot score itself with a quantity it also produces."

For this question the anchor is the measured infrastructure: actual link lengths, actual capacities, actual failures and flows. The abstract model's own efficiency score is frame-internal. Prediction quality must be assessed by ranging the model against the measured system separately, not by comparing two models that share the same topological assumptions.

**Refuter:** identify an anchor for topology-only prediction that is produced inside the model and does not move when the model changes. By Fig 2 :30, if it moves when pushed it is not an anchor.

### F7  -  Agreement among topology-committed models is one evidence pool

Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool." Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

Two network models built from the same random-graph or scale-free assumptions are one frame wearing two names. Their agreement says nothing about spatial behavior. Independence must be bought from frames whose closures differ (empirical infrastructure data, geographic information, engineering cost records) and in proportion to the cost of being wrong.

**Refuter:** show two predictions that agree on spatial behavior while drawing on disjoint evidence pools, with each measured against the ground separately. That would be real triangulation.

### F8  -  The framework returns a shape, not a numeric law

Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit."

The figure-derived output is the *kind* of thing that must change (the atoms imported, the cross-kind rule, the slot-indexed residual, the two currencies), not a new universal constant or a single revised value of the mean path length. Naming a numeric law before the ground settles it is the mode error of stating a verdict where only a specification has been earned.

**Refuter:** derive a numeric prediction for a named spatial network directly from the figure set, with no empirical input. If that is possible, F8 fails.

### F9  -  What survives and what is refused

| claim | mode | figure basis |
|---|---|---|
| Abstract topology is a closure without space or cost; embedding is an import | `general`, structural | Fig 6 :21, :23 |
| Spatial and cost atoms constrain which links are composable | `specified`, ungrounded | Fig 13 :74, :75 |
| The cost residual is indexed per link and region, not per network average | `specified`, ungrounded | Fig 1 :19, :22 |
| Topological and metric path measures are two currencies with a nonzero gap | `specified`, ungrounded | Fig 12 :125, :126; Fig 4 :30 |
| Space and cost form a union compound requiring separate loops | `general`, structural | Fig 9 :54, :57 |
| A numeric law for the change in mean path length | **refused** | Fig 9 :32 |

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach. The shape claim is refuted if any of the following holds:

1. A spatial or cost quantity is derived inside the topological closure with no import from a differing frame (breaks F1).
2. A model with free, unpriced long-range links matches the measured structure and behavior of a real spatial system (breaks F2, and with it the need for the import).
3. The cost-induced residual is uniform across links and regions, so slot indexing adds nothing (breaks F3).
4. A single scalar predicts both topological and metric behavior with no remaining round-trip gap (breaks F4).

If any fires, the shape as stated is withdrawn. Until one is run, nothing in this folder is labelled `grounded`.

---

## 5. Recommendation

1. Lead with F1 and F2: the operation is an import that changes what may compose, not a calibration of the same model.
2. Report residuals per link and region (F3). Retire global mean path length as a sufficient summary.
3. Keep the detour index or an equivalent two-distance measure as the standing empirical form of R_T (F4).
4. Unbundle geometry and cost into two loops plus a compound loop (F5).
5. Range each model against measured infrastructure, and buy independence from empirical frames rather than from more topology models (F6, F7).
6. Send the shape and the refuter, not the theory (Fig 10 :52, "Bring a characterised residual, never the source").

---

## 6. Canonical usage check and retraction log

Two local sources were read after the first five sections and govern how the figures may be used: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. The README states: "They outrank everything else in the repo: the code, the rulings and the docs answer to them" and "the quotes are the authority, not this summary." It also warns that "a reading that makes one contradict another has misidentified its domain, not found a flaw," and gives the canonical limit: the framework says what a missing thing would have to look like, "a shape, not a name". The metalaws note says the seat reads the ground and does not ask the anchor to decide what the figures already settle.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "physical cost is the Gradient structure" | **Retracted.** Fig 13 :22 defines gradient as "a difference that can be spent". Cost is the budget or constraint that such a difference imposes; the figure does not name which atom carries it. Both readings are kept visible: gradient is the spendable difference, energy is the finite state, and the binding of cost to either is a provenanced mapping, not a figure verdict. |
| "space and cost are two independent partitions with separate loops" | **Retracted.** Fig 9 :57 makes them a union compound. Unbundle first, then give the intersection its own loop. The two loops plus compound loop in F5 replace the earlier partition reading. |
| "bounded average degree under planarity follows from Fig 13" | **Retracted as a figure claim.** The bound is a result reported in the spatial-networks literature (Barthélemy 2011), not a line in the figure set. It is retained as world corroboration only, with provenance in `10_source_ledger.csv`. |
| "space and cost are atoms absent from Γ_A" | **Canonically confirmed.** Fig 6 :21 and :23 survive the check; the figures README's barrier-theorem reading ("what cannot be composed from what you hold") supports it. |
| "shape, not a name" applied to the numeric result | **Canonically confirmed and narrowed.** The phrase governs a missing thing. Here it bars a figure-derived numeric law (F8); it does not bar naming held atoms such as network, space, or energy. |
| Apparent strain Fig 12 two currencies versus cost | **Not strained after re-census.** Fig 12 :125 concerns bits and actions as two accounting currencies; the mapping to topology versus metric cost is an analogy used at `specified` mode, not a figure identity. Recorded as an analogue, with the strain noted in `11_audit.md`. |

### Round trip, qualitative

Sent up: the verbatim figure set (Fig 6 closure, Fig 13 composition, Fig 1 slot indexing, Fig 12 two currencies). Abstracted: "space and cost are imported atoms that constrain links and split the residual by slot." Brought back down: the concrete empirical claims about degree cutoffs, detour index and centrality shifts. Three things do not survive the trip back: the numeric path length, the identity of the atom that carries cost, and the partition independence that was retracted above. R_T is therefore nonzero and is recorded as that enumerated set, not as a measured number; no ground reading was taken. Treating the formula as identical to the figures would set R_T to zero and commit the dead-reckoning error named in Fig 4 :30.

**Verdict after re-census:** structural shape survives (import, cross-kind constraint, slot-indexed residual, union compound, two currencies); every numeric consequence is `specified` and ungrounded. Strains after re-census: one analogy-level strain (Fig 12 currencies), named and not hidden.
