# Figure-grounded audit: what computational resources are necessary for intelligence?

**Mode of this document: `specified` on the substantive claims, `general` on the structural shape. It is not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: simulated, not a ground reading.** *The Recursive Self-Improvement Trap* says LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` (local), plus the ten public sources opened on 2026-11-24 and listed in `10_source_ledger.csv`.

---

## 0. The question under audit

> What computational resources are necessary for intelligence, and are there fundamental limits to how efficiently it can be achieved?
>
> Source: reasoning.txt line 103, section 9 (Limits, scaling, and architecture).

Two readings are in play, and they are not the same question.

- **Reading A (the one the question appears to ask):** a system has an amount of intelligence that is a function of an input budget (compute, data, parameters, memory, time, energy). The research task is to find the function and the efficiency frontier.
- **Reading B (the one the figure census forces):** capability is a property of an agent and its habitat, and the word "intelligence" does no work in the unmaintained case. The research task is to describe the residual and the habitat, then to identify which of two categorically different limits is in play.

The pre-registered shape (written before the figure search, per the formula's "Direction" step) is: *any sufficient answer must state (i) the unit in which capability is measured, (ii) the currencies in which the cost is paid, (iii) the difference between a budget ceiling and underivability, and (iv) the ground that would settle the claim.* This lets the sought-for shape accrue a residual like any other term.

---

## 1. The residual in effect terms

R is the gap between what a resource-budget answer predicts and what the figure-governed domains can support. Stated as an effect: if we add a unit of compute to a system, what observable changes, and in which domain?

- **Arity.** At least two cost quantities plus a habitat term. "Computational resources" is a bundle: description cost (bits), settlement cost (actions), and the contact conditions in the habitat. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* This is a **union**, not one scalar.
- **Symmetry.** "Efficiency" is a threshold comparison between a price and a capability. It is ordered, not symmetric: swapping the price and the capability changes the question. Operators table :48: *"a threshold relation between two quantities"*; Fig 12 :85: *"a threshold relation between two quantities"*.
- **Scale.** The loop runs within one scale for a single system's budget (formula steps 1 to 5) and across scales for a head start handed to another agent (Fig 4 :19: *"The kernel is the part that does not change with size: the same loop and the same rule for naming what worked, whether one agent is running"*). A resource answer that treats a head start as an agent-internal gain mixes the two scales.

The residual is **not** indexed by a single global number. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* An "intelligence score" divided by a "compute score" is exactly that average.

---

## 2. Domain census

One line per domain: actors, currency, anchor. No nameable anchor means it is not yet a domain.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| **D1, framework-internal composition and settlement** | the six terms, seven bonds, negation, closure(Γ), atoms(Γ) | composition inside the closure, then settlement against the ground; prices in bits and in actions | the figures as metalaws, and the ground for any measurement | triangulated (Fig 6 + Fig 8 + Fig 12, plus Fig 1 for the metric rule) |
| **D2, agent and habitat (capability)** | agent, habitat actors (conditions, relations), the ground | contact; capability belongs to the pair, never the agent alone | the ground: what survives, not what the agent contains | triangulated (Fig 11 :39-40 + Clark and Chalmers 1998 + the octopus literature, low overlap between the framework and the biology) |
| **D3, computational-limits research as a field** | researchers, benchmarks, hardware roadmaps, funders, expert readers | agreement, citations, FLOPs, parameter counts, watt-hours | the ground, never agreement or a metric the field also produces | single-source for the figure diagnosis (Fig 1 :27, Fig 2 :40, Fig 9 :60); world sources on physical limits corroborate the existence of real ceilings but not this diagnosis |

**Partition or union.** D1 and D2 form a **compound with its own loop**: capability is derived from composition *and* contact, and a change in one is not a scaled version of a change in the other (Fig 11 :39, Fig 12 :125). D3 is the observation frame over both and overlaps neither in anchor. The bundle of "resources" inside D1 is itself a union of two incommensurable currencies (Fig 12 :125-130). So the whole question is a union of unions, and a single efficiency number is a category error before it is a measurement.

**Order by dependency (Fig 3).** The chain is perception, vocabulary, objective, planning, learn and carry. Fig 3 :20: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step"* that cannot use it. The middle link has no instrument: Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* Applying compute (planning/execution) before saying what counts as progress (objective) is effort above the break.

---

## 3. Figure census

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | the ground is the only metric; frame-internal quantities disqualified; residual per slot | no ground reading here; a compute metric is frame-internal |
| **2 The Ground** | anchor must not update; independence; agreement from one pool is one witness | efficiency frontiers agreed inside one field are one pool talking |
| **3 Dependency Chain** | optimising a working link cannot rescue a broken one; the middle link lacks an instrument | scaling lands above the break |
| **4 The Membrane** | only methods cross up, head starts come down; round trip gap R_T | pool size and pretraining are head starts, not capability gains |
| **5 Mint Pipeline** | MDL bargain; three guards as product; settling necessary not sufficient | a larger library is not a larger reach |
| **6 Closure / Reachability** | mint cannot add an atom; import moves the wall; inward and outward opposed; depth vs absence look the same from inside | two kinds of limit, different instructions |
| **7 Room Chain** | no last room; agreement compounds, evidence does not | more rooms at the same closure produce motion, not progress |
| **8 Union Surplus** | closure idempotent; no search adds an atom; underivable vs unreachable-at-budget | the hard ceiling on what extra compute can do |
| **9 Leave / Arrive** | describe the residual before choosing a frame; filters for budget, witnesses for verdict | compute is a budget, not a witness |
| **10 Ground Maintainer** | verifier non-access; declare stakes; ground does not decay, channel does | the field's stake in an efficiency claim must be declared |
| **11 The Habitat** | "what is intelligence?" is the wrong question; capability is agent-and-habitat | decisive re-census of the question itself |
| **12 The Bond** | two currencies that do not add; goal is a comparison; progress is a subtraction | a single efficiency figure is the named error |
| **13 Minimum Viable Set** | energy and gradient are load-bearing; closed set, unbounded arrangements; infinite effort inside a finite reach | substrate-level statement of the efficiency limit |
| **Operators table** | ⋛ is a threshold relation between two quantities | efficiency is ordered and threshold-shaped |
| **Symbols table** | R is the aim; the ground is the anchor | no ground is named by the resource answer as posed |

Strained readings are named in §8, not smoothed over.

---

## 4. Findings

### F1 - The question, as posed, is the wrong question (decisive re-census)

Fig 11 :34-35:

> **"What is intelligence?"**
> **"The wrong question, and this figure is the replacement for it."**

Fig 11 :36:

> **"Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran. The word does no work there."**

Fig 11 :39-40:

> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."**
> **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."**

The effect: a budget asked about "intelligence" is a budget aimed at a label applied afterwards. The replacement question, "what makes a system capable," has a different denominator: the agent-and-habitat pair. Fig 11 :41 adds the analogy: *"Which is the same move as asking what generates lift rather than whether a thing is a bird. The substrate question dissolves; the contact question does not."*

- **Mode:** `general` for the re-census (it is structural), `specified` for the prediction that agent-only scaling does not move contact.
- **Verdict:** triangulated (Fig 11 plus the extended-mind and cephalopod sources in §9, which come from a different evidence pool).
- **Refuter:** *"an agent-only improvement that moved the ground would refute the capability claim"* (Fig 11 :72). A controlled experiment in which extra compute inside a fixed agent, with no change in habitat or contact, moves the ground would break this finding.

### F2 - "Computational resources" are two currencies, and summing them is the named error

Fig 12 :125-126:

> **"A composition costs in two currencies, and they do not add."**
> **"Bits price the description. Actions price finding out whether it holds. They are in different units, so a system holding one accounting cannot compare them"**

Fig 12 :129:

> **"Summing them into one figure is the error this names, not the fix for it. A price in bits and a price in actions are two readings, held apart."**

Fig 12 :127 adds the consequence: *"and will not notice the shortfall. It proposes arrangements it cannot afford to test, and the budget is what decides how much of the space is reached at all."*

A single "compute budget" in FLOPs prices the description side only. What it omits is the action price of finding out whether a candidate holds against the ground. Fig 5 :26 states the bargain: *"and then: does the new term cost less to state than the confusion it removes?"* This is minimum description length, and it is a comparison of a description length with a residual, not a single resource total.

- **Mode:** `general` (structural), with `specified` predictions about which systems will be mispriced.
- **Verdict:** triangulated (Fig 12 :125-129 and Fig 1 :23-27, low wording overlap).
- **Refuter:** exhibit a system that prices bits and actions in one accounting and does not suffer the named shortfall; or show that the action price is reducible to the bit price without loss. The Landauer and Markov sources in §9 set real physical prices, but they price energy and space, not the action price of settlement, so they do not by themselves close this.

### F3 - An efficiency metric produced by the frame is disqualified as a metric

Fig 1 :23: **"The ground enters as the only metric."**

Fig 1 :24-27:

> **"Everything else either produces a residual or consumes the library. These do not count:"**
> **"coverage, and compression achieved"**
> **"predicates minted, and credibility accrued"**
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."**

Fig 2 :45: **"Frames range against the ground. They do not negotiate with it."**
Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

Parameter count, training FLOPs, benchmark coverage, and compression achieved are quantities the frame both produces and uses to score itself. They are usable as **filters for the budget** (which systems to try first, what hardware to buy) and forbidden as **witnesses for the verdict** (whether capability moved). Fig 10 :59: *"The condition is that nothing about which value the ground returns today serves the occupant: an interest in the outcome is unavoidable, an interest in the reading is disqualifying."* Builders of large systems have a declared stake in efficiency-frontier claims.

- **Mode:** `general`.
- **Verdict:** triangulated (Fig 1 + Fig 2 + Fig 9 + Fig 10).
- **Refuter:** produce a ground that settles an efficiency claim without the measured frame producing the measuring quantity. This is exactly what an external instrument would do; until one exists, the claim stays `candidate`.

### F4 - More search inside a closure cannot supply a missing atom

Fig 6 :21: **"MINT composes inside the closure and can never add an atom."**
Fig 8 :32: **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."**
Fig 13 :115: **"The set is closed. The arrangements are not. That gap is why import exists."**
Fig 13 :118: **"So a frame can search without end and still not arrive: infinite effort inside a finite reach."**

The effect on scaling: more compute is more search at the same reach (Fig 6 :49: *"more search at the same reach: is it in here and unfound? The closure does not change. Same atoms, same wall, more of the space actually visited."*). If the missing thing is a term already in the closure, more search is the right remedy. If it is an atom that requires a different closure, more search is spent in vain. Fig 6 :27: **"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."**

- **Mode:** `general` (definitional) for the idempotence claim; `specified` for any statement about a particular system's closure.
- **Verdict:** triangulated (Fig 6 + Fig 8 + Fig 13). The world no-free-lunch result corroborates in a different field but is not used as the verdict.
- **Refuter:** demonstrate a computation that, by searching longer inside a fixed set of primitives, adds a primitive to that set. By the definition quoted this cannot happen; if it did, the closure was misdescribed and the re-census starts at D1.

### F5 - The two limits have different names and different instructions

Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**
Fig 9 :44: **"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."**

Fig 8 :40-43:

> **"Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."**

Fig 8 :41-43 continues: *"Underivable: go outside. Unreachable-at-budget: the term is already in the closure and was not found, so the remedy is more search, not another atom. Importing against a budget limit adds an atom that was not needed, and Figure 6 prices a wrong atom above starting from primitives."*

The question's second half ("are there fundamental limits to how efficiently it can be achieved?") has two honest answers and must not average them:

1. **Budget limit:** the term is in the closure and was not found. More search is the correct remedy. Importing a new primitive here is the error Fig 8 prices.
2. **Underivability (barrier):** the term is outside the closure. No amount of extra compute supplies it. The remedy is an import from a frame whose closure differs, with a source gate and a shadow test (Fig 6 :23, Fig 8 :26-28).

Fig 13 :134: **"Unreachable is a verdict here, not a silence"**; the framework *"can report that it lacks something rather than producing an answer anyway."*

- **Mode:** `general`.
- **Verdict:** triangulated (Fig 8 + Fig 9 + Fig 13).
- **Refuter:** show a case in which underivable-in-principle and unreachable-at-budget issue the same instruction, or a case in which the distinction is decidable from inside the frame without an import. Fig 6 :27 says from inside they look the same, so a claimed internal decision procedure is already a strain.

### F6 - Fundamentality is asymptotic, not a single efficiency number

Fig 7 :6 names **"the limit: no last room"**; Fig 7 :30-31: *"every room closes some of the gap; no finite number of them ever arrives"*; Fig 7 :42: **"The chain approaches the truth only as the world runs out of ways to refuse it."** Fig 13 :90: *"One chain is one route through a space that has no last route."*

So there is a genuine fundamental limit: no finite budget arrives, because there is no last room and no last route. But it is a limit on **arrival**, not a number on an efficiency curve. Fig 7 :35: **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."** Adding more compute to a room that agrees with the last one is motion, not progress (Fig 7 :36: *"A chain of mirrors is one long room."*).

- **Mode:** `general` for the no-last-room structure, `specified` for a claim that a particular scaling regime is such a chain.
- **Verdict:** triangulated (Fig 7 + Fig 13 + Fig 4 :33, since there is no top and no infinite regress).
- **Refuter:** exhibit a finite room after which nothing further can be asked. The framework forbids it definitionally; a candidate would have to show a question with no possible further residual, which is a ground claim, not an argument.

### F7 - Compute lands above the dependency break

Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."**
Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."**

The middle link of Fig 3's chain is vocabulary and objective: Fig 3 :7 *"it has terms for what things afford: what can be moved, opened, joined, blocked"* and Fig 3 :10 *"it can say what would count as progress here, in its own terms"*. It attracts the least attention because it has neither obvious failures nor obvious tests. Effort spent on compute (planning and execution) arrives at a step that cannot use it if the objective link is missing.

- **Mode:** `specified`.
- **Verdict:** single-source within the framework (Fig 3), corroborated in a different field by the Levinthal case (§9): extra search does not rescue an un-biased landscape.
- **Refuter:** show a case in which a missing objective was supplied by additional compute alone, with no change in contact or instrument.

### F8 - A test harness is a substituted habitat

Fig 11 :70: **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."**
Fig 11 :61: **"The seat's power is asymmetric. Introduction is available; exclusion is not. You can add an actor and you cannot subtract the habitat, because contact is a fact about the world and does not consult you."**

An efficiency benchmark is a substituted habitat. It shows that the wiring works. It does not show that capability moved in the original habitat. Fig 11 :67-69 names the two invisible failure modes: *"what you failed to reproduce is invisible until the goal fails"* and *"what you unintentionally introduced is invisible until it acts."*

- **Mode:** `specified`.
- **Verdict:** single-source (Fig 11), with the embodied-intelligence literature in §9 as low-overlap corroboration.
- **Refuter:** a benchmark whose score transfers to an unmodified habitat without any re-contact work, demonstrated rather than assumed.

### F9 - The framework returns a shape, not a resource number

Fig 9 :32: **"you get a kind of thing, never the answer itself."**
Fig 13 :134-135: **"Unreachable is a verdict here, not a silence"**, and *"It cannot say which primitive is missing, because naming it would mean already holding it."*

The framework can say that the question must be split, that the cost has two currencies, that one limit is a barrier and one is a budget, and that capability is agent-and-habitat. It cannot return a number of FLOPs, a parameter count, or an efficiency constant. Naming one would mean already holding it, and would be a binding from the world, provenanced as such, not a derivation.

- **Mode:** `general`.
- **Verdict:** triangulated (Fig 9 + Fig 13 + the canonical figures README).
- **Refuter:** a figure line that returns a numeric resource threshold. None exists in the verbatim text; a new figure would be required, not a new reading of these.

---

## 5. Pre-registered refuter

Required before any outreach: *"a falsifier written before the run is a design instrument, not only an honesty device"* (Seat Map, cited in the exemplar). The shape claim is refuted if any of the following holds:

1. A ground measurement shows that a purely agent-internal increase in compute, with contact held fixed, moves the ground (breaks F1 and Fig 11 :40).
2. A single accounting is exhibited that prices description cost and settlement cost in the same units without loss, so Fig 12 :125-129 does not apply (breaks F2).
3. A system is shown that searches inside a fixed closure and thereby adds a primitive to that closure (breaks F4 and Fig 8 :32).
4. Underivable-in-principle and unreachable-at-this-budget are shown to issue the same instruction (breaks F5).
5. A finite last room is exhibited after which no further residual can be asked (breaks F6).

If any fires, the shape is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 6. Recommendation

1. Restate the question as capability and contact before answering it (F1).
2. Split "resources" into two currencies and refuse a single efficiency figure (F2).
3. Demote FLOPs, parameters, and benchmark scores to budget filters, never verdicts (F3 and Fig 9 :60).
4. Ask which limit is in play before prescribing more compute or a new primitive (F5).
5. Describe the habitat and the objective before scaling (F7, F8).
6. Send the shape and its refuter, not the framework (Fig 10 :52: *"Bring a characterised residual, never the source."*).

---

## 7. Canonical usage check and retraction log

Two local sources were read after the first six sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo"*; *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; and the limit is *"what a missing thing would have to look like (a shape, not a name)"*, then a stop at the limit of the instruments, with the lineage recorded so the stop is honest.
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: design questions are settled by derivation from the figures; the seat reads the ground and does not ask the anchor to decide what the figures already settle.

| earlier reading | status after the canonical check |
|---|---|
| "intelligence is a resource budget" | **Retracted.** Fig 11 :34-36 calls it the wrong question. Re-census to capability and contact. |
| "efficiency is one number" | **Retracted.** Fig 12 :125-129 names the summing of two currencies as the error. |
| "F4 makes all scaling futile" | **Retracted as overreach.** Fig 8 :41-43 says budget-limited terms are found by more search. The verdict is conditional on which limit is in play. |
| "F6 forbids efficiency improvements" | **Retracted as overreach.** Rooms close some of the gap; no finite number arrives. Improvement is real; arrival is not. |
| "F1 conflicts with the world literature on physical limits" | **Not strained.** Landauer, Lloyd, and Markov price physical resources; Fig 11 prices capability. Different objects, same as the exemplar's Fig 13 versus Rule 2 re-census. |
| "the framework can name the missing resource" | **Forbidden, not merely unsupported.** Fig 13 :135 and the canonical README both refuse a name. |
| "the world sources corroborate the verdict" | **Narrowed.** They corroborate that real ceilings exist and that coupling matters, but they share no author with the figures. Their agreement is weak corroboration of the shape, not a second witness for the figure reading (Fig 2 :40). |

---

## 8. Strains, re-census, and round trip

- **Fig 11 versus the resource question.** Initial reading treated the question as a budget question. Re-census: Fig 11 governs what capability is; the hardware literature governs what a budget can buy. Different objects, no strain after the re-census.
- **Fig 8 underivability versus Fig 7 no-last-room.** Both are ceilings, but one is a barrier theorem and one is asymptotic non-arrival. Kept distinct, as Fig 8 :40 instructs. This is a named distinction, not a hidden contradiction.
- **Fig 12 action price versus the Landauer bound.** The Landauer bound prices erasure in energy; the action price in Fig 12 prices settling against a ground. They are not the same quantity. Recorded as a strain between frameworks, not resolved by fiat. The world sources are secondary and cannot overrule the figure.
- **Round trip gap R_T.** Sent up (x): the verbatim figure set, chiefly Fig 11 :39-40, Fig 12 :125-129, Fig 8 :32 and :40-43. Abstraction (T_A): "capability is contact; two currencies; two limits". Concretisation (T_E): "buy more compute to get more intelligence". **R_T is nonzero.** The shorthand drops the habitat, the action price, and the underivable/budget distinction. It is not measured numerically, because no ground reading exists; it is recorded qualitatively as the set of dropped constraints. Treating the shorthand as identical to the figures would set R_T to zero and would be the dead-reckoning error in Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

**After re-census: two strains named (action price versus physical energy price, barrier versus asymptotic limit), none hidden.**

---

## 9. Verdict summary

| domain | verdict | mode |
|---|---|---|
| D1 composition and settlement | two currencies; closure idempotent; two distinct limits | `general` structural, `specified` for any system |
| D2 agent and habitat | capability is agent-and-habitat; resource answers aimed at the agent alone answer the wrong question | `general` re-census, `specified` prediction |
| D3 research field | budget metrics are filters, not witnesses; field agreement is one evidence pool | `general` |

**Overall:** the question as posed is answered in the wrong domain. The figure-governed answer is a shape, not a number: capability belongs to agent-and-habitat; cost has two incommensurable currencies; there is a budget limit that more search can close and an underivability barrier that only an import can cross; and no finite budget arrives at the last room. Mode `specified`, ungrounded, candidate. The pre-registered refuter in §5 is the thing to send to a checker, not this conclusion.
