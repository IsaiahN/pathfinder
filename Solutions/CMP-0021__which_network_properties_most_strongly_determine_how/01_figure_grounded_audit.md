# Figure-grounded audit: CMP-0021, which network properties govern spreading?

**Mode of this document: `specified` for the shape, `general` for the substrate rule, `gap` for the specific ranking.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* No measurement was taken here, so nothing is `grounded`.

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, 2026) says LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, cited as `Fig N :line`), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, plus the sources in `10_source_ledger.csv`. Every figure quote below was read from the verbatim extract this session, not from a summary.

---

## 0. The residual in effect terms

The question, quoted from `Questions/complexity science.txt` line 28:

> Which network properties most strongly determine how fast or widely a process spreads: degree distribution, clustering, community structure, or something else?

Restated as an effect:

`R_s = |Γ(b, a)_s − o'_s|`

- `s` is one network/process/seed instance, a slot. The residual is **per slot**, not a global average. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
- `Γ(b, a)_s` is the predicted spread (speed of arrival, or total reach) given the structure the predictor holds and the action (seed placement, intervention).
- `o'_s` is the observed spread, the trace of who infected whom, who told whom, which nodes adopted. Fig 1 :23: "The ground enters as the only metric." Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
- The candidate terms (degree distribution P, clustering C, community structure Q, "something else") are properties the frame holds as candidate explanations. An answer binds one that reduces `R_s` across many slots without fitting one occasion only. Fig 5 :43: a term that "explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."

**Effect description of the missing thing, before choosing any frame:** what is owed is a property (or set of properties) whose presence, at fixed process and fixed seed policy, predicts the *shape* of the spread curve across networks. We state this before reading any literature, per Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit."

---

## 1. Domain census (before choosing a figure line)

### 1.1 R by arity, symmetry, scale

- **Arity.** At least three-place: `R = f(network N, process D, seed S)`. Spreading is itself binary at minimum, because influence travels from one entity to another. Fig 13 :24: "that entities relate, and influence travels." Symbols table :101: "That entities relate at all, and that influence travels between them." So the residual is not a property of N alone.
- **Symmetry.** The network's edges may be symmetric, but the process is ordered in time: influence travels outward from a seed (the `→` sequence bond, Fig 12 :72: "A then B; B needs A to have happened"). The question "which property *most strongly*" is a comparison (⋛), ordered rather than symmetric: Fig 12 :88 "is it about which is larger, rather than both being present? Yes." So answer-shaped claims carry an ordered bond between quantities, not a symmetric join.
- **Scale.** Micro (one edge, one adoption), meso (a cluster or community), macro (whole-network reach). The membrane between scales is lossy. Fig 4 :20: "Only the actors, the currency and the anchor change."

### 1.2 One line per domain: actors, currency, anchor

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Structure | nodes/entities, edges/relations | influence traversal, paths, adjacency | the observed contact trace (who contacted whom) | admitted |
| D2 Process dynamics | node states, transmission/recovery or threshold rules | a spendable difference, a finite resource | the measured spread curve and time series | admitted |
| D3 Habitat of candidate properties | degree distribution, clustering, community structure, path length, seed placement | contact with the residual (predictive power, correlation) | the ground: controlled spread measurement | admitted |
| D4 Verdict and aggregation | per-slot residuals, the selector | per-slot residual, comparison ⋛ | the ground, never agreement | admitted |
| X1 "The single dominant property" as a free-floating cause | none nameable | none | none | not a domain yet; absorbed into D3 as a valence-relative habitat item |
| X2 "Structure alone determines spread" | nodes and edges only | traversal | absent without D2 | absorbed into D1+D2 as a union compound |

No domain is admitted without a nameable anchor. X1 fails the anchor test and is not promoted.

### 1.3 Partition or union

**Union, not partition.** D1 and D2 form a union compound: a spread needs both a structure to travel over and a process that travels. D3's candidates are overlapping conditions of the same network. A real network has a degree distribution *and* clustering *and* community structure simultaneously. Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :56: "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." Therefore the question as posed ("which ONE most strongly") is itself a bundled question that must be unbundled before it is searched. Fig 9 :54: "when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :57: "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."

### 1.4 Dependency order (Fig 3)

Perception of the contact trace, then vocabulary for what the network affords (Fig 3 :7: "it has terms for what things afford: what can be moved, opened, joined, blocked"), then the objective (speed or reach, a comparison), then planning an intervention, then learning and carrying. Fig 3 :20: "The chain is ordered by dependency, not by importance." The "which property" question sits at the vocabulary/objective link, the middle link that Fig 3 :27 warns has no instrument: "A link with no instrument is not a link that works. It is a link nobody has looked at." The world literature supplies instruments for D1 and D2 but the cross-slot comparison of "most strongly" remains the weak link.

### 1.5 Strain test applied before concluding

- Fig 13 :24 governs *influence travelling over a network*, which is exactly spreading. Direct fit, no strain.
- Fig 13 :22 ("a difference that can be spent") and Fig 13 :76 ("Energy and a gradient compose a flow.") govern the process, not the topology. Direct fit after re-census: they belong to D2, not D1.
- Fig 1 :19 governs the *method* of comparison (per slot), not the identity of the winning property. Direct fit.
- Fig 9 :55-57 governs the *form of the question* (union), not a property. Direct fit.
- Attempted reading that strains: Fig 13 :23 "network" as if it enumerated degree distribution, clustering and community structure. It does not. The six-term set names network as one structure, not a list of metrics. Re-census moved the metrics to D3, the enumerated habitat. Recorded in the retraction log below.

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual per object slot, ground as only metric | governs the comparison method; no ground reading here |
| 2 The Ground | anchor must not update; independence between frames | governs the measured spread as anchor |
| 3 Dependency Chain | vocabulary/objective link has no instrument | governs the "which most strongly" link |
| 4 The Membrane | actors/currency/anchor change across scales | governs micro to macro transfer, lossy |
| 5 Mint Pipeline | acceptance is a bargain, not a threshold | a single property must beat the residual across slots, not one occasion |
| 6 Closure / Reachability | import is the only operator that moves the wall | the properties are held in Γ, so no import is owed to state them |
| 7 Room Chain | agreement compounds, evidence does not | a list of agreeing papers cannot settle the ranking |
| 8 Union Surplus | independence decides whether agreement means anything | the four world sources share a field pool, so they are one witness pool |
| 9 Leave / Arrive | union vs partition; describe before looking; filters vs witnesses | governs the unbundling and the gap verdict |
| 10 Ground Maintainer | bring a characterised residual, never the source | governs the outreach order |
| 11 The Habitat | habitat enumerated, valence relative to residual | governs D3 candidate enumeration |
| 12 The Bond | arrangement is the substance; isomer; comparison is ordered | governs the supporting derivation in `06` |
| 13 Minimum Viable Set | network = entities relate and influence travels; gradient = spendable difference | governs D1 and D2; does **not** rank the metrics |
| Operators table | ⋛ is a threshold relation between two quantities | "most strongly" is a comparison, not a conjunction |
| Symbols table | R is per slot; ground is the anchor | consistent with Fig 1 and Fig 2 |
| THE_FORMULA.md | mode rule; step 7 three questions; Direction | governs gap declaration and pre-registration |

---

## 3. Findings F1 to F7

### F1 - Spreading is influence travelling over a network structure (decisive for the shape)

Fig 13 :23-24:

> **"network"**
> **"that entities relate, and influence travels"**

Symbols table :99-101:

> **"network" / "a structure" / "That entities relate at all, and that influence travels between them."**

Fig 13 :25-26:

> **"WHAT DECIDES IT"**
> **"it decides what the measurement would mean"**

A spread is not a property *of* a network in the way a colour is a property of a surface. In the substrate, network is the structure whose defining content is that influence travels. So the question is well posed only when "spread" is read as influence travel, and the network is the substrate in which it occurs, not one candidate among three. Degree distribution, clustering and community structure are *descriptions of the arrangement* of that structure, not rival structures.

**Mode:** `general` for the substrate reading, `specified` for applying it to this question.
**Status:** triangulated across Fig 13 :23-24 and the Symbols table :99-101, two passages with low textual overlap inside the framework but shared authorship, so internal triangulation only.
**Refuter:** show that influence travel is not the defining content of the network term in the substrate, or derive "network" from the other five terms (Fig 13 indivisibility).

### F2 - A spread is a flow and requires a spendable difference (the "something else")

Fig 13 :21-22:

> **"gradient"**
> **"a difference that can be spent"**

Fig 13 :14:

> **"conserved, finite, directionless alone"**

Fig 13 :76:

> **"Energy and a gradient compose a flow."**

A process cannot spread where every node is already in the same state. There must be a difference that can be spent (susceptible versus infected, unaware versus aware) and a finite quantity to spend (the remaining susceptibles, the remaining un-informed). This puts the **process type** on the same footing as topology: SIS, SIR, threshold cascade and percolation are different ways of spending the difference, and they answer "which property matters" differently. The "something else" in the question is therefore not a vague remainder: at minimum it is the process dynamics and the seed policy, which are held in D2.

**Mode:** `specified`. The binding of "energy" to a finite susceptible pool is a binding from the network-science frame, not a figure derivation.
**Status:** triangulated across Fig 13 :14, :22 and :76 (conservation, spendability and flow are three distinct statements).
**Refuter:** a documented process that spreads with no spendable difference and no finite resource, with the spread measured at the ground.

### F3 - The three named properties form a union, not a partition

Fig 9 :54-56:

> **"And when the split lands on a union rather than a partition, unbundle before you search again."**
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
> **"A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."**

Fig 9 :57:

> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."**

A network that is scale-free and clustered and modular is not three easier versions of one question. It is a compound, and the region where two or three conditions hold is exactly where a single-property answer fails. So "which ONE most strongly" is a malformed question in the figure's sense: it asks for a partition where the habitat is a union.

**Mode:** `general` for the union rule, `specified` for this domain.
**Status:** triangulated across Fig 9 :54-57 and Fig 2 :31 ("Independence, between two frames, is how little they draw on the same evidence"), since the metrics are not independent frames.
**Refuter:** a controlled decomposition showing the three properties are disjoint (tuning one never alters the others) and that one of them clears the residual in all intersections.

### F4 - The ranking must be per slot, never averaged

Fig 1 :19 and Fig 1 :22:

> **"The residual is indexed by object slot, not aggregated."**
> **"Aggregating across slots is how a live signal disappears into an average."**

Averaging "strength of property P" over all processes and all networks throws away the only signal that says where the property works. If P dominates early speed but not final reach, or dominates SIS but not threshold cascades, or dominates in scale-free but not spatially embedded networks, a single averaged winner is a frame-internal score, not a ground verdict. Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

**Mode:** `general`.
**Status:** triangulated across Fig 1 :19, :22 and Fig 9 :60.
**Refuter:** a property whose ranking is stable across process type, seed policy and network size, with a per-slot residual that trends down under that property and nowhere else. That would show aggregation loses nothing and F4 is false for this domain.

### F5 - The properties are an enumerated habitat with relative valence

Fig 11 :43-44:

> **"The habitat is enumerated, never composed."**
> **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."**

Fig 11 :49 and :51:

> **"An actor's valence is relative to the residual, not a property it carries."**
> **"No standing list of good actors survives a change of residual."**

Degree is a benefactor for early spread in one residual and a malfactor for robustness under targeted attack in another (the adjacent question CMP-0022 asks exactly that). Clustering helps one residual and hinders another. So there is no standing list of "spread-promoting properties" independent of the residual. The habitat must be enumerated (degree, clustering, community, path length, seed placement, transmission rate, spatial embedding, temporal links) and then ranked *per residual*.

**Mode:** `general` for the habitat rule, `specified` for the field application.
**Status:** triangulated across Fig 11 :43-44, :49, :51 and Fig 9 :26 ("R's own predicates name the habitat that holds φ*").
**Refuter:** an invariant ranking of the same properties across a documented change of residual, measured at the ground.

### F6 - The specific ranking is a `gap`, not a hidden answer

No figure line ranks degree distribution against clustering against community structure. Fig 13 names "network" as a structure and "gradient" as a spendable difference, but does not decompose topology into metrics. Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 13 :134: "Unreachable is a verdict here, not a silence". Fig 8 :39: "So a search that finds nothing is never a proof of absence."

The figures can therefore say what any acceptable answer must look like (a union of structure and process, per slot, with relative valence) but cannot say which named property wins. That ranking is owed from the ground: a controlled study that fixes process, quantity (speed versus reach) and seed policy, varies one property at a time, and reports per-slot residuals.

**Mode:** `gap`. This is a verdict, not a silence, and not an invitation to fill the slot with the most familiar property.
**Status:** `gap` after genuine re-census of all 13 figures, the Operators and Symbols tables and `THE_FORMULA.md`.
**Refuter:** a figure line, previously overlooked, that ranks these three properties; or a ground measurement that closes the per-slot residual under a single property across all process types.

### F7 - What actually survives, with mode attached

| claim | mode | figure |
|---|---|---|
| Spreading is influence travelling over a network structure | `general` | Fig 13 :23-24 |
| A spread is a flow requiring a spendable difference and a finite resource | `specified` | Fig 13 :14, :22, :76 |
| The named properties are a union of overlapping conditions | `general` | Fig 9 :54-57 |
| The ranking is per network/process/seed slot, never averaged | `general` | Fig 1 :19, :22 |
| Property valence is relative to the residual | `general` | Fig 11 :49, :51 |
| Degree distribution wins for all processes and all reach measures | **refused; no figure line, contradicted by world sources** | F6 |

---

## 4. Pre-registered refuter (written before the conclusion)

Required before outreach, per the seat material's rule that a falsifier written before the run is a design instrument, and per formula step "Direction" (make the sought-for shape an ordinary term so it can accrue a residual).

The shape claim (union of structure and process, per slot, relative valence, ranking is a gap) is **refuted** if any of the following holds:

1. A controlled study shows one property P dominates both speed and reach across all process types, seed policies, network sizes and spatial embeddings, with a per-slot residual that does not trend down under the other properties. This breaks F3 and F4.
2. A documented process spreads with no spendable difference and no finite resource, measured at the ground. This breaks F2.
3. "Network" is derived from the other five substrate terms, or influence travel is shown not to be the defining content of the network term. This breaks F1.
4. A figure re-census finds a line that ranks the three properties. This moves F6 from `gap` to figure-grounded.
5. The three properties are shown to be a disjoint partition, so that a single lever clears the intersections. This breaks F3.

If any fires, the shape is withdrawn or revised and the retraction is recorded here, not silently erased. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with the shape and its refuter, not with a winner. The framework returns a kind of thing, never the answer itself (Fig 9 :32).
2. Ask a network scientist to check F1 to F5 in twenty minutes, and to name what they would count as a failure (Fig 10 :52: "Bring a characterised residual, never the source.").
3. Do **not** answer the question as posed with a single property. Unbundle the union first (Fig 9 :54).
4. Treat the world literature as one evidence pool, not four independent witnesses: the four network-science sources share methods, venues and an author cluster. Fig 8 :48: independence decides whether agreement means anything.
5. Send the generator (the residual, the census and the refuter), not the conclusion. Fig 4 :23: "upward: a method that can be reapplied. Never the recording of a particular success."

---

## 6. Canonical usage check and retraction/confirmation log

Two usage sources were read after sections 0 to 5 and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* The canonical limit is a shape, not a name.
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` (2026-11-22): the figures are metalaws and decide design questions; the seat reads the ground and does not ask for rulings the figures already settle. Fig 9 :60: filters for the budget, witnesses for the verdict.

### Retractions and confirmations

| earlier reading in this derivation | status after canonical check |
|---|---|
| Initially considered citing Fig 13 :23 "network" to rank degree versus clustering versus community | **Retracted.** Fig 13 governs the substrate structure, not its derived metrics. Re-census moved the metrics to D3 (enumerated habitat). Strain was the signal, per the README re-census rule. |
| Initially framed the question as a partition of three rival properties | **Retracted.** Fig 9 :54-57 makes it a union of overlapping conditions. The compound has its own loop. |
| Initially read "shape, not a name" as forbidding any statement about which property matters | **Narrowed.** The README's phrase governs a *missing* primitive. We do state a shape (union, per slot, relative valence) and declare the specific ranking as `gap`. No ban is claimed where none exists. |
| Initially treated the four network-science papers as four independent witnesses | **Retracted.** They share a field, methods and an author cluster (two share an author). One pool, per Fig 2 :40. |
| F1 substrate reading | **Canonically confirmed.** The Symbols table independently defines network as influence travel. |
| F6 gap verdict | **Canonically confirmed.** Fig 13 :134: "Unreachable is a verdict here, not a silence"; Fig 9 :32: "you get a kind of thing, never the answer itself." |
| Attempted Fig 13 / process-dynamics strain | **Not strained after re-census.** Fig 13 :24 governs structure; Fig 13 :22 and :76 govern the flow that runs over it. Different objects, same set. |

After re-census: no hidden strain. One declared gap (F6), one declared binding from the world frame (energy to finite susceptible pool in F2), both recorded above.

---

## 7. Verdict of this audit

The defensible residue is a shape: spreading is influence travel over a network structure, driven by a spendable difference, compared per slot across a union of overlapping conditions with property valence relative to the residual. The specific ranking asked for in CMP-0021 is a `gap`. Nothing here is `grounded`, and this audit is internal consistency only, not a second witness. The strongest artifact derived from it is `08_expert_verification_packet.md`, which states the mode, three checkable sub-claims, verbatim lines and refuters before the conclusion.
