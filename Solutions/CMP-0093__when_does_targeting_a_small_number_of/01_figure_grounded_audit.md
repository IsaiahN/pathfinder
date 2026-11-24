# Figure-grounded audit: CMP-0093, targeted versus distributed intervention

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, read 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the intervention question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`, `THE_SEAT_MAP_Field_Guide_amended.md` (local, 2026-11-22). World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) − o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the intervener's belief about the network: who is connected to whom, what propagates, where the threshold lies.
- **a** is the intervention. `a_T` acts on a small chosen set of nodes. `a_D` spreads the same budget across many nodes.
- **Γ(b,a)** is what the model predicts will happen: infections averted, cascade size, load shed, species retained.
- **o′** is what the system returns after the intervention, measured on the ground.
- **s** is the system and the moment. R is indexed per system and per node, never aggregated into a global average.

> Fig 1 :19: "The residual is indexed by object slot, not aggregated."
> Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
> Fig 1 :23: "The ground enters as the only metric."
> Symbols table :43: "One object, region or entity being tracked. R is measured per slot, never as a single global number."

The phenomenon to explain is the sign of the comparison `R_T − R_D` across systems. A frame that predicts one strategy always wins has a residual here, because the sign changes with the task and the topology.

State the residual as: *under what conditions does the gap between what an intervention predicts it will achieve and what the system actually returns stay smaller when action is concentrated on a few nodes than when it is distributed across many?* This is an effect description. It names no theory, no "hub", no "centrality", no "contagion threshold". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a conjunction of conditions whose holding makes `R_T < R_D`, plus an instrument that discriminates a failure of one condition from a failure of another. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome." The post-intervention outcome is the anchor, a measurement or counter. Centrality scores, model fit and expert opinion move when pushed, so they are instruments at best. Fig 2 :30: "If it moves when you push on it, it is not an anchor." Viable anchor: the measured outcome per system, for example cases averted, cascade size, surviving nodes, species retained.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a three-place relation among the model Γ, the action a and the outcome o′, indexed by slot s and ordered by time t: the intervention is applied, then the outcome is read. It therefore carries an **ordered** bond (`→`, sequence: Fig 12 :72, "A then B; B needs A to have happened") and a **comparison** bond for "outperform" (`⋛`, Fig 12 :87, "a threshold relation between two quantities"). It is not symmetric: swapping the two policies reverses the comparison.
- **Symmetry.** "Influential" is a threshold relative to a residual, not an absolute quantity. Fig 11 :49: "An actor’s valence is relative to the residual, not a property it carries." Persistence of an advantage is asymmetric in time: a contained cascade does not un-contain by reversing the action.
- **Scale.** Three scales are in view: the single node, the network topology that relates nodes, and the habitat in which the network is embedded. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and Fig 4 :22: "Only methods cross up. Only head starts come down." The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 Network topology** | nodes, edges, hubs, degree and betweenness | connectivity, concentration of degree | yes: the measured adjacency and degree sequence | admitted |
| **D2 Cascade dynamics** | contagion, failure, information, flow, thresholds | propagation, cascade size, cases averted | yes: the observed post-intervention outcome (Fig 2 :29) | admitted |
| **D3 Intervention seat** | the intervener, the lever, the chosen node set | cost of action, reach, control | yes: settlement, "then check it against the ground, then carry it up" (Fig 5 :32) | admitted |
| **D4 Habitat / embedding context** | conditions, other networks, environment, other actors | stability of the ground, relevance of the network | yes: the ground that settles and does not decay (Fig 11 :73, Fig 10 :24) | admitted |
| **X1 "Influence" as a free-floating property of a node** | a node considered alone | centrality | **no** anchor independent of the residual and the goal (Fig 11 :49-51) | not a domain yet |
| **X2 "Cost-effectiveness" as the verdict itself** | a budget, a cost ratio | money or effort | cost is measurable, but it is a frame-internal budget quantity, not what settles whether the outcome improved (Fig 9 :60; Fig 1 :25-27) | absorbed as a filter, not an anchor |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that nodes never differ. X2 is real but demoted to a filter. Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

### 1.3 Partition or union

D1 and D2 overlap: topology and dynamics together produce the cascade, so their overlap is a compound with its own loop. D3 and D4 overlap: the intervention is exercised inside a habitat, so that overlap is a second compound. The whole question is a **union**, not a partition.

> Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
> Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
> Fig 9 :55-56: "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."
> Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

The unbundled conditions are: (C1) live residual mass is concentrated, not diffuse (D1); (C2) the bracket from the chosen node to the outcome is faithful (D2, D4); (C3) the habitat is stable enough that the identified influence persists through the cascade (D4); (C4) the intervener can identify the influential nodes at all, that is, the target is reachable from the frame's closure (D3). A system failing only C1 and a system failing only C2 are not different degrees of one failure; they need different instruments. The essay *The Library of Babel* states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> Fig 3 :20: "The chain is ordered by dependency, not by importance."
> Fig 3 :24: "Why the middle link is where chains usually break."
> Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

Order for this question: 1 perception (can the intervener read the network and the outcome?) → 2 vocabulary (does the frame have terms for what the nodes afford, and can it identify influence?) → 3 objective (what counts as "outperform"?) → 4 planning (choose the intervention) → 5 learn and carry. The middle link, having terms for what a situation affords and saying what would count as progress, is the one with no instrument. Most effort lands above the break because that is where the measurements already exist (Fig 3 :29-30).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed and where support lives |
| 2 The Ground | outcome as anchor; independence vs common pool | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs cross-scale transfer from node to network to habitat |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs whether a target can be admitted as a term at all |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs C4, can the target be identified from the held closure |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs success as a chain of handoffs, not a one-shot lever |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs why agreeing centrality measures are one witness |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; pooled readings | governs C2 failure: stale influence maps |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual; contact cascades | decisive for D1, D2, D3, D4 |
| 12 The Bond | catalyst, cycle, functional group, isomer; arrangement is substance | governs targeted vs distributed as arrangements, and task flips |
| 13 Minimum Viable Set | network is the structure for influence travel; set closed, arrangements not | governs the honest stop and the narrow use of :24 |

Strain test applied during this census: an early attempt to apply Fig 13's six-term physical substrate to intervention targets only fit by calling a hub a "gradient", a spendable difference. That is a strain, because Fig 13 :24 itself names **network** as the structure where influence travels, and gradient is a different structure (directedness). Re-census sent Fig 13 to a narrow role: :24 licenses the statement that influence travels on relations, while the six-term set does not dictate which nodes to target. Logged as strain S1 in section 6. No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about interventions, `grounded` only if settled by a measurement. None is `grounded`.

### F1: An influential node is not an intrinsic thing; influence is relative to the residual

**Mode: `specified`. Domains D1, D2, D4. Status: triangulated (Fig 11 habitat valence and Fig 9 describe-first, low topical overlap).**

> Fig 11 :49: "An actor’s valence is relative to the residual, not a property it carries."
> Fig 11 :50: "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."
> Fig 11 :51: "No standing list of good actors survives a change of residual."
> Fig 9 :28: "any frame you pick will seem to fit"

A node called influential for containing an infection may be a node to protect when the goal is preserving a keystone species. "Influential" is a role in a relation, not a label carried by the node. So the question "does targeting influential nodes win" is under-specified until the residual and the goal are named. World corroboration: Liu, Slotine and Barabási 2011 find that for controllability *"the driver nodes tend to avoid the high-degree nodes"*, which is the same node ranked differently under a different task. Their result **conflicts** with a universal hub-targeting reading of Albert, Jeong and Barabási 2000; the conflict is returned to the census and resolved in section 6 R1, not used to flip the verdict.

**Refuter:** a node whose influence rank is invariant across a documented change of residual or goal on the same network, with the rank measured against the outcome in both cases. If found, F1 is false.

### F2: Targeting has an object only where live residual mass is concentrated

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 1 per-slot residual and Formula step 3 support guard, low topical overlap).**

> Fig 1 :19: "The residual is indexed by object slot, not aggregated."
> Fig 1 :20: "Support is satisfied when some slot carries positive mass, so a global residual near zero with one live slot is a legal state and not an inert"
> Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
> Symbols table :47: "The part of the residual on slot s that is positive: something happened there the prediction missed."

The Formula step 3 support guard is `|R⁺_s| > 0 for some s`. If the live mass is spread thinly across many slots, there is no small set to aim at, and a "targeted" intervention is a label on an arbitrary subset. If one slot carries the live mass while the global residual looks near zero, a distributed policy will average that signal away. World bearing: Albert, Jeong and Barabási 2000 report that scale-free networks are *"extremely vulnerable to attacks"* on a few nodes, which is the concentrated case. Broido and Clauset 2019 find that *"strongly scale-free structure is empirically rare"*, so the concentrated case is conditional, not universal. The two are different evidence pools on the same question (model result versus empirical census of 928 networks), but both bear on topology, so they count as related witnesses, not two independent corroborations of a verdict.

**Refuter:** a targeted intervention that wins, at the ground, in a system where live residual mass is demonstrably diffuse across many slots and no slot carries positive mass above the measurement floor, with a faithful bracket. If found, F2 is false.

### F3: The bracket must be faithful and the ground must pressure the room

**Mode: `specified`. Domains D2, D4. Status: triangulated (Fig 7 room chain and Fig 10 channel decay, low overlap).**

> Fig 7 :37: "Progress per handoff has two factors. Zero either and the chain runs in place:"
> Fig 7 :38: "the bracket’s fidelity across the handoff"
> Fig 7 :39: "the ground’s pressure on the room"
> Fig 10 :24: "the ground does not decay, the channel does"
> Fig 10 :26: "stale percepts, dropped transients, saturated metrics, pooled readings"

Targeting a node works only if the measured centrality actually tracks the causal path to the outcome (bracket fidelity) and the outcome genuinely depends on the cascade (ground pressure). If the influence map is stale, targeting acts on a phantom. "Pooled readings" is the network-level version of aggregating across slots: the signal that says which node matters disappears into a global average. World corroboration: Sanhedrai et al. 2022 identify a *"recoverable phase of a complex system, a state in which the system can be reignited by microscopic interventions, for instance, controlling just a single node"*, and note that reversing topological damage does not guarantee recovery. A single-node intervention is condition-bound, not universal.

**Refuter:** a targeted intervention that wins while bracket fidelity is independently measured as low or stale and the ground pressure is measured as near zero. Under Fig 7 :37-39 that should be impossible. If observed, F3 is wrong.

### F4: Contact cascades, and first-order enumeration misses what is three steps out

**Mode: `specified`. Domains D2, D4. Status: triangulated (Fig 11 cascade and Fig 9 effect-description rule, different figures).**

> Fig 11 :43: "The habitat is enumerated, never composed."
> Fig 11 :44: "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."
> Fig 11 :52: "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."
> Fig 9 :31: "rather than the cause"

A centrality computed on direct edges is a first-order enumeration. When the residual that matters is second or third order, a target chosen that way can fail while a distributed policy, which touches more of the cascade, succeeds. This is a concrete condition where broad intervention can outperform naive targeting. The essay *How Intelligence Actually Works* records the same structure: *"when altering a habitat by unintentionally introducing a predatory threat into the ecosystem, or disturbing the balance by adding or removing vital resource points, you can inadvertently create major unpredictable consequences downstream."*

**Refuter:** a documented case where the decisive residual is demonstrated to be three or more steps out, yet a target chosen from direct-contact centrality still wins at the ground with a faithful bracket. That would show the cascade warning does not dominate. If none can be constructed, Fig 11 :52 remains a `general` structural warning, not a calibrated predictor.

### F5: The seat acts on a habitat it did not author, and the power is asymmetric

**Mode: `specified`. Domains D3, D4. Status: triangulated (Fig 11 capability and Fig 6 import/reach, low overlap).**

> Fig 11 :39: "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."
> Fig 11 :40: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."
> Fig 11 :61: "The seat’s power is asymmetric. Introduction is available; exclusion is not. You can add an actor and you cannot subtract the habitat, because contact is a fact about"
> Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."

An intervention is not an action on a node considered alone; it is an action on agent-and-habitat. "Targeted removal" is still an **introduction** of a change into the habitat, not a subtraction of the habitat itself. If the goal requires preserving a hub, the targeting operator is protection, not deletion: the same node flips valence with the residual (Fig 11 :50). This is the named structural reason a universal "remove the top nodes" rule cannot be right.

**Refuter:** a case where a hub's removal leaves the habitat demonstrably unaltered and still improves the outcome across a substitution of habitat. If found, the agent-and-habitat claim does not govern this domain.

### F6: Renewal of reach requires contact with a closure that differs

**Mode: `specified`. Domain D3. Status: triangulated (Fig 6, Fig 8, Fig 13, three distinct roles).**

> Fig 6 :14: "the only operator that moves the wall"
> Fig 6 :21: "MINT composes inside the closure and can never add an atom."
> Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."
> Fig 13 :115: "The set is closed. The arrangements are not. That gap is why import exists."

A frame cannot identify a target its closure does not contain. More search inside the same adjacency data will not add the missing structural fact; that requires contact with a differing frame, for example another domain's measurement or an instrument that resolves a latent tie. The two instruments are opposed (Fig 6 :29-30) and must be run as separate tracks. World corroboration: Albert et al. 2000 and Liu et al. 2011 reach opposite target sets because they range different dynamics on the same sort of network; Sanhedrai et al. 2022 require topological reconstruction before microscopic intervention can reignite a system.

**Refuter:** a case where target identification succeeds purely by composing inside the held closure, with no new atom entering from a differing closure, and the choice passes the ground test across a change of habitat. That breaks idempotence and F6 with it.

### F7: The question is a union and must be unbundled before a lever is chosen

**Mode: `general` with a `specified` consequence for method. Domains all. Status: figure-derived (Fig 9, with *The Library of Babel* as an internal corroboration).**

Fig 9 :55, :56 and :57 (quoted in section 1.3) are the governing lines. The four conditions C1 to C4 have different instruments:

- A C1 failure shows up as diffuse live mass and no slot carrying positive support (Fig 1 :20, Symbols :47).
- A C2 failure shows up as a stale or pooled influence map, a bracket that no longer matches the outcome (Fig 10 :26, Fig 7 :38).
- A C3 failure shows up as a habitat substitution that removes what the goal required (Fig 11 :66-68).
- A C4 failure shows up as a closure that keeps searching the same adjacency and never imports the missing structure (Fig 6 :21, Fig 8 :32).

A single lever, for example "target the top five percent by degree", clears the region where only one condition holds and leaves the intersections standing (Fig 9 :56). F7 is the reason the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

**Refuter:** a single intervention that restores all four conditions in all failure types with no categorically different residue left over. That would collapse the union into a partition.

### F8: Centrality measures that agree are one evidence pool, not corroboration

**Mode: `general` with a `specified` consequence for practice. Domains D1, D2. Status: triangulated (Fig 2 independence and Fig 8 convergence, low overlap).**

> Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are."
> Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."
> Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"
> Fig 8 :50: "Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."

Degree, betweenness, eigenvector centrality and PageRank are different functions of the same adjacency. When they rank the same node first, that is one witness stated four ways, not four confirmations. Which measure predicts the outcome must be settled by the outcome (Fig 2 :29). World corroboration: Broido and Clauset 2019 conclude that *"no single universal mechanism explains the wide diversity of degree structures found in real-world networks"* across 928 real networks. Their result is from a statistical-inference subfield, lower overlap with the modelling studies above.

**Refuter:** two centrality families derived from genuinely different evidence, not merely different functions of the same adjacency, that agree on the target and prospectively predict the outcome. If none exists, treat agreement among centralities as one pool.

### F9: Cost is a filter for the budget, not a witness for the verdict

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 9 filter rule and Fig 1 frame-internal rule).**

> Fig 1 :25: "coverage, and compression achieved"
> Fig 1 :26: "predicates minted, and credibility accrued"
> Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces."
> Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

"Outperform" cannot be settled by cost alone. Cost decides how much of the intervention space is searched; the ground decides which strategy paid. A claim that targeting wins because it is cheaper measures a quantity the interveners themselves produce.

**Refuter:** an averaged cost statistic that prospectively predicts, per system, which strategy will produce the better measured outcome. If one exists, F9's methodological consequence is false.

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per system and per node, never an average | general | Fig 1 :19, :22; Symbols :43 | figure-derived |
| The outcome, not agreement, is the anchor | general | Fig 2 :29, :35 | figure-derived |
| Influence is relative to the residual, not intrinsic | specified | Fig 11 :49-51 | triangulated F1 |
| Targeting needs concentrated live mass | specified | Fig 1 :19-22; Symbols :47 | triangulated F2 |
| The bracket and ground pressure must both hold | specified | Fig 7 :37-39; Fig 10 :24-26 | triangulated F3 |
| Direct-contact targeting can miss third-order effects | general warning | Fig 11 :43-44, :52 | triangulated F4 |
| Intervention is agent-and-habitat; introduction, not subtraction | specified | Fig 11 :39-40, :61-62 | triangulated F5 |
| Reach must be renewed by a differing closure | specified | Fig 6 :21, :23; Fig 8 :32 | triangulated F6 |
| The question is a union of four conditions | general | Fig 9 :54-57 | figure-derived |
| Agreeing centralities are one witness | general | Fig 2 :31, :40; Fig 8 :50 | triangulated F8 |
| Which specific nodes to target in a given system | not stated | none | gap: framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule, Seat Map :287: *"And a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A node's influence rank is invariant across a documented change of residual or goal on the same network, measured against the outcome in both cases (breaks F1, Fig 11 :49-51).
2. Targeted intervention wins at the ground where live residual mass is demonstrably diffuse, with a faithful bracket (breaks F2, Fig 1 :19-22).
3. Targeted intervention wins while bracket fidelity is measured low or stale and ground pressure is near zero (breaks F3, Fig 7 :37-39).
4. A target chosen from direct-contact centrality still wins where the decisive residual is demonstrated to be three or more steps out (breaks F4, Fig 11 :52).
5. A hub's removal leaves the habitat demonstrably unaltered and improves the outcome across habitat substitution (breaks F5, Fig 11 :39-40, :61-62).
6. Target identification succeeds purely inside a closure with no import and passes the ground test across a change of habitat (breaks F6, Fig 6 :21, :23).
7. A single lever restores all four conditions in all failure types and leaves no categorically different residue (breaks F7, Fig 9 :57).
8. Fig 13 :24 does not describe influence travelling on relations, or Fig 11 :49 valence-relative fails at the figures themselves.

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a ground outcome has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of networks (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Name the goal and the residual before naming any node. Without that, "influential" is a preference the frame cannot check (Fig 11 :49, Fig 5 :62-63).
3. Keep the four conditions separate in every report. A blended "intervention score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
4. Ask, at each handoff, which link the chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
5. Treat any centrality ranking as a candidate library whose reach must be tested against the ground, never as the answer (Fig 1 :27).
6. Enumerate the habitat outward, past direct contact, before choosing the target set (Fig 11 :43-44, :52).
7. Use the literature as one corroborating witness per evidence pool and as a budget filter, not as the verdict (Fig 2 :31, Fig 9 :60).
8. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
9. Stop at the shape. Do not name the specific nodes; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, and all eight essays by Isaiah N, fetched 2026-11-22.

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Mapped "influential node" to Fig 13 gradient, a spendable difference | **Retracted, strain S1** | Fig 13 :24 already names network as the structure where influence travels. Gradient is directedness, a different structure. Re-census: :24 used narrowly, six-term set not used to pick targets |
| Treated "hub" as an intrinsic property of a node | **Retracted, strain S2** | Fig 11 :49-51 makes valence relative to the residual. Corrected into F1 |
| Treated cost-effectiveness as the verdict | **Retracted, strain S3** | Fig 9 :60 separates filters from witnesses. Demoted to X2 and F9 |
| Applied Fig 13's six physical terms to intervention targets wholesale | **Retracted, strain S4** | Only fit by renaming nodes as states. Fig 13 governs the physical substrate, not a target list. :24 retained for the influence-travels claim only |
| Read Albert et al. 2000 as a universal rule to target hubs | **Conflict, re-census R1** | Liu et al. 2011 find driver nodes avoid high-degree nodes. Resolved as task-dependence: the two papers range different residuals, which Fig 11 :49-50 predicts. Verdict unchanged |
| Read Broido and Clauset 2019 as refuting targeted intervention | **Narrowed** | It refutes the universality of scale-free structure, not the possibility of concentration. Supports conditionality, not a rival verdict |
| Read MathisonSlee et al. 2022 "rule of hand" as a direct derivation of targeting | **Narrowed, low-overlap corroboration only** | The paper reports the proposition is under-tested and was critiqued as reductionist. It corroborates the shape and the instrument gap, not a target list |
| Planned to name a best centrality measure | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer. Fig 2 :31-40 makes pooled agreement worthless. Centrality is a binding, recorded as such |
| Wanted to call F1 a `general` law of all networks | **Narrowed to `specified`** | It is a structural claim; no ground measurement pays for the intervention-level version here |
| F7 "union" row | **Marked figure-derived and kept separate** | Fig 9 :54-57; no averaging across conditions |

**Strains sent to the log:** S1 (gradient for influence), S2 (intrinsic hub), S3 (cost as verdict), S4 (six-term substrate on targets), all resolved by re-census; R1 (Albert versus Liu) resolved as task-dependence. No unresolved strain after re-census. Per the canonical rule, a reading that makes one figure contradict another has misidentified its domain, not found a flaw; each strain was returned to the census rather than smoothed over.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54-57 plus the *Library of Babel* bundle passage: it is a union of concentration, bracket fidelity, habitat stability and reach, each with its own loop and instrument.
2. **What is the anchor?** The measured post-intervention outcome, named in Fig 2 :29. Not centrality agreement, not cost.
3. **Is "influential" in the node alone?** No. Fig 11 :49-51. Valence is relative to the residual.
4. **When can targeting have an object?** When live residual mass is concentrated (Fig 1 :19-22, Symbols :47) and the support guard is satisfied (Formula step 3).
5. **How does targeting fail?** Stale or pooled influence map (Fig 10 :26), bracket or ground pressure at zero (Fig 7 :37-39), or a decisive residual three steps out (Fig 11 :52).
6. **Why does the same node rank differently across tasks?** Because the residual changes and the seat's power is asymmetric (Fig 11 :50, :61-62); Albert et al. and Liu et al. are two instances.
7. **What can be said at the stop?** A conjunction of conditions with falsifiers and instruments. Not which nodes, not a `grounded` answer. Fig 13 :134: "Unreachable is a verdict here, not a silence," and Fig 8 :39: "So a search that finds nothing is never a proof of absence."

---

## 8. Updated verdict

The shape survives: **targeted intervention outperforms distributed intervention when four conditions jointly hold, namely concentrated live residual mass, a faithful bracket from the chosen nodes to the measured outcome, a habitat stable enough that the identified influence persists through the cascade, and a target reachable from the intervener's closure. It loses when the mass is diffuse, the bracket is stale, the decisive effect is several steps out, or the goal flips the node's valence. The conditions are kept separate, never averaged. Which specific nodes to target is a `gap`, not a hidden answer.** Mode `specified`. No world source was allowed to flip a verdict; the one genuine conflict (Albert versus Liu) was returned to the census and re-mapped as task-dependence. No unresolved strain remains after re-census.
