# Figure-grounded audit: identifying essential interactions under partial observation

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured and what would have to be imported. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* calls LLM output *"simulacra"* and says *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** The figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical figures README, `THE_FORMULA.md`, the amended Seat Map, and the eight essays (one fetch failed, recorded in `05`). Every figure quote below is an exact substring of the figure text.

---

## 0. The claim under audit

> How can researchers identify which interactions are essential when many species and relationships remain poorly observed?

This is not asking for a list of species. It is asking for a **method of identification** under a degraded channel. The candidate answer derived below is:

> Essentiality is a **per-interaction-slot residual against a declared focal function and a declared intervention**, settled by a ground that does not update on researcher agreement, found by enumerating the habitat outward from the residual, and corroborated only across frames with low evidence overlap. Where no instrument at any resolution is returning a reading for a slot, the honest report is `unreachable at this budget` or `underivable in principle`, with the missing thing characterised in effect terms. The framework returns a **shape and a route, not a name and not a list**.

**Direction discipline (what an answer would look like, bound as an ordinary term).** The sought-for shape is bound now: (i) per-slot, (ii) relative to a focal function and intervention, (iii) anchored to a non-updating counterfactual outcome, (iv) habitat-enumerated to cascading order, (v) triangulated across low-overlap frames, (vi) with an explicit stop. It is refusable by the same test as any other term, see section 3.

### 0.1 R by arity, symmetry and scale

- **Arity:** at least four operands (interaction i, focal function F, intervention a, outcome o′), indexed by slot s. A two-place reading (species, "important") drops the function and the perturbation, so it is rejected.
- **Symmetry:** not symmetric. Essentiality is a threshold comparison, ⋛, between the outcome with the interaction and the outcome without it (Operators table :48 *"a threshold relation between two quantities"*). Removal is − (absence of an operand), not ¬ (refusal of a claim), and not a symmetric join. Direction matters.
- **Scale:** pairwise interaction to network to ecosystem function. This crosses the membrane (Fig 4), so a method that works at one scale cannot be replayed at the other without measuring the round-trip gap `R_T`.

### 0.2 Domain census (before any figure line is chosen for a verdict)

One line per domain: actors / currency / anchor. A candidate with no nameable anchor is not yet a domain.

| domain | actors | currency | anchor | admitted? |
|---|---|---|---|---|
| D1 The interaction habitat | species, interaction types, conditions (season, temperature, habitat structure) | contact | the actual contact structure in the world, read off and updated | yes |
| D2 The observation channel | sampling methods, detection probabilities, instruments already returning something, inference frames | readings and residual | whatever at some resolution is already returning a reading; the ground persists while the channel decays | yes |
| D3 The essentiality verdict | interaction slots, focal functions, removals/additions, checking frames | per-slot residual mass; independence between frames | the counterfactual outcome of the intervention, which does not move when researchers disagree | yes |
| D4 The cross-scale composition | local interactions, networks, functions, bonds | cost in bits and cost in actions (two currencies) | the function at the upper scale | yes |
| E1 "the most connected species is essential" | a centrality score | one number | no anchor independent of the focal function | no, not a domain |
| E2 "expert consensus settles it" | expert readers | agreement | no anchor outside the agreeing pool | no, not a domain |
| E3 "absence in the matrix means no interaction" | an empty cell | a binary zero | the detection channel, which moves | no, absorbed into D2 |

**Partition or union:** union. The overlaps D1 with D2 (enumerated versus detected), D2 with D3 (observed versus live slots), and D3 with D4 (local versus function-level essentiality) are compounds with their own loops. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*

**Dependency order (Fig 3):** perception, vocabulary, objective, planning, learn and carry. Under poor observation the chain breaks at perception and vocabulary, so a study that begins at "which interactions are essential" (objective and planning) is spending effort above the break. Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*

---

## 1. Figure census

| figure | bearing on this residual | verdict |
|---|---|---|
| 1 The Agent | residual per slot; global near zero with one live slot is legal | governs D3 |
| 2 The Ground | anchor must not update; independence; shared pool disqualifies | governs D3, D2 |
| 3 Dependency Chain | a link with no instrument is not a link that works | governs D2, order of all loops |
| 4 The Membrane | cross-scale round trip and `R_T`; methods cross up | governs D4 |
| 5 Mint Pipeline | three guards as a product; MDL bargain; settling is not sufficiency | governs D2, D3 |
| 6 Closure / Reachability | inward instrument must already return something; outward import with source gate | governs D2 |
| 7 Room Chain | agreement compounds, evidence does not; select rooms by surfaced residual | governs D3 |
| 8 Union Surplus | residual first, frame second; low-overlap triangulation | governs D2, D3 |
| 9 Leave / Arrive | describe the residual before choosing a frame; search proves nothing | governs the whole order |
| 10 Ground Maintainer | ground does not decay, channel does; bring a characterised residual | governs D2 and all outreach |
| 11 The Habitat | enumerate, never compose; valence relative to residual; cascades | governs D1, strongest ecological line |
| 12 The Bond | the typed relation is the substance; isomer, functional group, two currencies | governs D1, D4 |
| 13 Minimum Viable Set | network is one of six structures; closed set, unbounded arrangements | governs D1, D4, honest stop |
| Operators table | ⋛ comparison, − absence, ¬ refusal; ordered bonds | governs arity and symmetry |
| Symbols table | R is always a slice; the anchor is what settles | governs D3 |

Strained readings are named in section 2, not smoothed over.

---

## 2. Findings

### F1: Essentiality is a per-slot residual, not a network average (governs D3)

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**
Fig 1 :13: **"a global R near zero with one live slot residual is a legal state"**

A network-wide statistic (connectance, mean degree, modularity) is an aggregate over slots. Under partial observation it can look healthy while one interaction slot is carrying the entire response to a perturbation. The method must index R to the (species pair, interaction type, focal function) slot. **Refuter:** show that a single network-level aggregate preserves the ordering of per-slot intervention effects on the focal function at the same cost. Triangulated with Fig 3 :19 (effort above the break cannot rescue the broken link), low overlap between a per-object indexing rule and a dependency-order rule. **Mode: `specified`.**

### F2: "Essential" has no anchor unless a function and an intervention are declared (governs D3, D1)

Fig 11 :49: **"An actor's valence is relative to the residual, not a property it carries."**
Fig 11 :50: **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."**
Fig 11 :51: **"No standing list of good actors survives a change of residual."**

The phrase "which interactions are essential" is elliptical: essential *for what*, and *against which perturbation*? Without those bindings there is no anchor (Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**). The ground is a counterfactual outcome (removal, exclusion, addition), not a centrality score and not a vote. **Refuter:** exhibit an interaction whose essentiality ranking is invariant across focal functions and interventions under the same observer. **Mode: `specified`.** Triangulated across Fig 11 (valence) and Fig 2 (anchor), different quantities.

### F3: Enumerate the habitat outward; do not compose it from a species list (governs D1)

Fig 11 :43: **"The habitat is enumerated, never composed."**
Fig 11 :44: **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."**
Fig 11 :48: **"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."**
Fig 11 :52: **"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."**

A direct-contact-only interaction matrix is a first-order enumeration. The effects that decide essentiality can be second or third order (the figure's own DDT case). The habitat includes conditions as well as actors: Fig 11 :46 *"conditions: light, water, temperature, season, terrain"* and :47 *"relations: pollination, predation, competition, dependency"*. **Refuter:** show that essentiality for a declared function is unchanged when second- and third-order contacts are added to a direct-only enumeration across a representative set of systems. **Mode: `general` on the enumeration rule, `specified` on the cascade claim.** Triangulated with `THE_FORMULA.md` Habitat section.

### F4: Poor observation is a channel failure, not proof of absence (governs D2)

Fig 10 :24: **"the ground does not decay, the channel does"**
Fig 10 :25: **"stale percepts, dropped transients, saturated metrics, pooled readings"**
Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**
Fig 9 :44: **"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."**

An empty interaction cell is a reading of the channel, not a verdict about the world. Fig 10 :27-28 names the correct output when the channel dies: *"the output is not a verdict, it is you have lost touch"*, with the remedy *"keep the anchor reachable"*. **Refuter:** exhibit a case where an empty cell, with no independent detection check, is shown to be a true non-interaction and the distinction changes the essentiality ranking. **Mode: `specified`.** Triangulated across Fig 10 (channel decay) and Fig 8/Fig 9 (search is not proof), low overlap.

### F5: Ask SEARCHED first, then INWARD, then OUTWARD (governs D2, the method's spine)

Formula step 7 asks *"SEARCHED is it in here and unfound?"* first, because it is cheapest and the other two assume its answer. Then:
Fig 6 :32: **"An instrument is not built from a description. It is improved from a worse instrument already returning something."**
Fig 6 :34: **"The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."**
Fig 6 :35: **"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."**
Fig 6 :30: **"outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."**

For an unobserved interaction, the order is: (1) has the existing data been searched, with independent searchers? (2) INWARD: is any current method already returning a weak or ambiguous reading for that slot (camera, gut content, isotope, interaction-likelihood score) that can be sharpened? (3) OUTWARD: find a frame whose closure predicts the shape of the missing interaction, import it with a source gate and a shadow test, and debit it against that frame's independence. INWARD and OUTWARD are opposed and must never be read against each other. **Refuter:** build and validate an instrument from a description alone, with no prior reading at any resolution, that resolves a slot no existing method registered. **Mode: `specified`.** Triangulated with Fig 6 :27: *"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."*

### F6: Corroboration requires low overlap, and agreement is not a verdict (governs D3)

Fig 2 :31: **"Independence, between two frames, is how little they draw on the same evidence."**
Fig 2 :40: **"agreement about the world is worthless when the agreeing frames share an evidence pool"**
Fig 8 :45: **"Two frames together reach what neither reaches alone."**
Fig 7 :13: **"agreement compounds, evidence does not"**
Fig 2 :44: **"The effective-sample-size correction for correlated observations is standard in survey statistics and meta-analysis; the collapse is the same arithmetic read as a warning."**

Two observational datasets drawn from the same sampling campaign are one witness wearing two names. Two methods that share a detection bias are correlated observations. Triangulation means two frames with different closure and different evidence, each ranged separately against the same ground (removal outcome), then compared. Fig 7 :35: *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* **Refuter:** show that two frames drawing on one evidence pool give the same effective corroboration as two frames with independent evidence, under the same cost of being wrong. **Mode: `general`.** Triangulated across Fig 2 and Fig 8; the effective-sample-size arithmetic is a separate low-overlap corroboration.

### F7: The interaction type is a bond, not an ingredient (governs D1, D4)

Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**
Fig 12 :46: **"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."**
Fig 11 :47: **"relations: pollination, predation, competition, dependency"**

A species list with an adjacency matrix that records only "interaction present" has recorded half of itself. Mutualism (+, symmetric) and predation or production (ordered) are different bonds over the same two species; under Fig 12 :117 they are different substances. Detailed derivation in `06_isomers_and_order.md`, including the falsifier. **Refuter:** show that two networks with the same species set but different typed interaction relations behave identically under every intervention on the focal function. **Mode: `specified`.** Triangulated with Fig 11 :50 (mutualism and parasitism are relations, not kinds).

### F8: Cross-scale claims carry a measured round-trip gap, and two currencies do not add (governs D4)

Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**
Fig 12 :125: **"A composition costs in two currencies, and they do not add."**
Fig 12 :126: **"Bits price the description. Actions price finding out whether it holds."**

Carrying a local interaction rule up to a network claim throws away detail (that is what makes it reusable). Bringing it back down will not match what was sent. The gap `R_T` must be measured, not assumed zero. Separately, a proposed interaction rule has a cost in description length and a cost in field actions to test it; these are different units. A ranking that sums them is blind to the shortfall. **Refuter:** show that an interaction rule transferred from local to network scale has `R_T = 0` under the stated transform, or that description cost and action cost are the same unit. **Mode: `specified`.**

### F9: What survives: a shape and a route, not a list (governs all domains)

Fig 9 :32: **"you get a kind of thing, never the answer itself"**
Fig 13 :134: **"Unreachable is a verdict here, not a silence,"**
Fig 13 :138: **"you get a kind of thing, never the answer itself"** (restated in the substrate section)

The figures license the *form* of an identification procedure, not a ranking of the interactions in any particular ecosystem. Naming "the essential interaction" for a real habitat requires a ground reading (a removal outcome) or a provenanced import with a shadow test. Until then the slot stays open. This is the honest stop. **Mode: `general` on the shape, `specified` on each per-system application.**

---

## 3. Pre-registered refuter

Required before any outreach: Seat Map :287 *"a falsifier written before the run is a design instrument, not only an honesty device."*

The shape claim is refuted if any of the following holds:

1. A single network-wide aggregate preserves the ordering of per-slot intervention effects on the focal function at equal cost (breaks Fig 1 :19, :22).
2. An interaction is shown to carry essentiality as an intrinsic property, invariant across focal functions and interventions (breaks Fig 11 :49-51 and the anchor requirement of Fig 2 :29).
3. Researcher agreement with no independent intervention outcome is demonstrated to settle an essentiality verdict in this framework (breaks Fig 2 :35 and Seat Map :283).
4. An instrument with no prior reading at any resolution is built from a description alone and returns a valid observation of the previously unregistered slot (breaks Fig 6 :32-35).
5. Two frames drawing on one evidence pool are shown to provide the same corroboration as two low-overlap frames at the same cost of being wrong (breaks Fig 2 :31, :40).
6. Two networks with identical species sets but different interaction-type bonds are shown to be behaviourally identical under every intervention on the focal function (breaks Fig 12 :5, :46 and the isomer claim in `06`).

If any fires, the corresponding finding is withdrawn and the affected domain is re-censused. Until one is run, no part of this may be labelled `grounded`.

---

## 4. Recommendation

1. State the focal function and intervention before any ranking; otherwise there is no anchor (F2).
2. Index every residual to the interaction slot and keep the per-slot table visible; never report only a network average (F1).
3. Enumerate the habitat to at least second-order contact before naming candidates; conditions count as actors (F3).
4. Treat empty cells as channel readings. Run SEARCHED, then INWARD, then OUTWARD in that order, and never read the last two against each other (F4, F5).
5. Buy two low-overlap checking frames in proportion to the cost of being wrong, and keep their verdicts separate (F6).
6. Record the interaction type as a typed bond and price the action cost separately from the description cost (F7, F8).
7. Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."* Send the generator (the residual, the enumeration rule, the refuter), not a finished species list.

---

## 5. Canonical usage check

Two usage rules were read after the first four sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* And the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* The framework returns *"what a missing thing would have to look like (a shape, not a name)"* and stops where instruments cannot distinguish, recording the lineage. *"Indiscernibility is not identity."*
- `docs/05-RESEARCH/60-WATSON_2026-11-22_FIGURES_AS_METALAWS.md` (the metalaw reading in the framework reference): the seat reads the ground; it does not ask the anchor to decide what the figures already settle. Design questions are answered by derivation, not escalation.

### Strains sent to the log

| id | apparent strain | handling |
|---|---|---|
| S1 | Fig 11 gives an ecological habitat; ecology.txt asks an ecological question, so Fig 11 seems to *be* the answer | Re-census: Fig 11 governs contact enumeration, not the specific essentiality verdict. It does not name any interaction. Resolved. |
| S2 | Fig 6 :34-35 seems to say no instrument can ever be built | Re-census: the scope note immediately says theory routinely precedes its instrument and resolution jumps are fine (Fig 6 :36-39). The rule excludes a sensor for something that has *never registered anywhere*. Resolved. |
| S3 | Fig 2 calls the market or experiment an anchor; ecological ground moves (conditions, seasons) | Re-census: habitat updates, ground settles (Fig 11 :73: *"The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."*). The anchor is the intervention outcome, not the species list. Resolved. |
| S4 | Treating "keystone species" as the framework's name for the essential interaction | Re-census: keystone is a binding from the ecology frame with no source gate (Fig 8 :50-52). It is a candidate reading, not a figure-derived name. Recorded as an import with zero verdict weight. Resolved. |

---

## 6. Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| F1 called "a network average is useless" | **Narrowed.** The figures disqualify aggregate R as the *aim*. An aggregate can still be a budget filter (Fig 9 :60). Mode and role must be stated. |
| F4 initially written as "absence proves nothing about the world" | **Narrowed.** The figures say search cannot prove absence; they do not say absence is presence. The cell stays a channel reading until checked. |
| F5 initially merged INWARD and OUTWARD into one "find a new method" step | **Retracted.** Fig 6 :31: *"Neither answer tells you much about the other. Run them as two tracks, and never read one against the other."* |
| F3's DDT line treated as a derivation of cascade depth | **Retracted.** The figure labels Carson and biomagnification an *instance*. It illustrates the enumeration rule; it does not derive a depth number. |
| "keystone species = essential interaction" | **Refused.** A name where the framework returns a shape. Zero verdict weight until a source gate and a shadow test are shown. |
| F9's honest stop | **Canonically confirmed.** *"what a missing thing would have to look like (a shape, not a name)"* and *"Unreachable is a verdict here, not a silence."* |
| Second seat in `11` | **Declared simulated and sharing one evidence pool.** Its agreement is internal consistency, not corroboration (Fig 2 :40). |

**Final audit verdict.** The shape survives; no specific interaction is named. Four domains are admitted, kept separate, never averaged. Strains after re-census: none outstanding. Status `specified`, ungrounded, honest stop recorded. An open item remains: the operand type of ⋛ at cross-scale comparison and the exact cost of the unary refusal operator are framework-internal open items, not defects in this application.
