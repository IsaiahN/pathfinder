# Figure-grounded audit: BUS-0073, just-in-time and vulnerability

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md` line 107: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Verbatim figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md` (every `Fig N :line` quote below is from there); `FRAMEWORK/figures/THE_FORMULA.md`; canonical figures README; the essays opened 2026-11-22 and the world sources in `10_source_ledger.csv`.

---

## 0. The residual, in effect terms

The question is posed as an "or": either JIT creates excessive vulnerability, or it can be resilient when suppliers and logistics are managed well. Restated as an effect:

> For supply slot s, R_s = |Γ(b,a) - o′|, where the prediction Γ(b,a) is that an input arrives just in time and the observation o′ is what actually arrived. "Excessive vulnerability" is the claim that R_s goes large and stays large under disruption. "Resilient" is the claim that R_s falls back toward zero and does not propagate to other slots.

Three things follow before any figure is chosen.

1. **R is indexed by slot.** Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* A firm-wide average of on-time delivery can be near zero while one sole-source part is live. Fig 1 :13: *"a global R near zero with one live slot residual is a legal state"* and Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* So "does JIT create excessive vulnerability?" cannot be answered at the level of a firm average.
2. **The anchor is the disruption, not the literature.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* "Managed well" is a frame's predicate. Fig 2 :30: *"If it moves when you push on it, it is not an anchor."* Whoever defines "well" moves it. The anchor is continuity of supply through a disruption event, which does not consult the lean literature.
3. **The sought-for shape is bound as an ordinary term before the run.** Per formula step "Direction", a frame cannot check the direction of its own question. So write it down: the answer we are looking for has the form *"resilience is a property of the JIT-and-habitat-and-channel compound, measured per slot, with a named class of interventions and an open parameter for which intervention fits which residual."* Binding it now makes it refusable later rather than an invisible preference.

---

## 1. Domain census (before choosing any figure line)

**R by arity, symmetry, scale.** Arity: at least two conditions, (1) maintained contact with the supply habitat and (2) a channel that carries disruption signals to the decision maker. Symmetry: "excessive" is a threshold comparison, not a symmetric join; "vulnerable" and "resilient" are not inverses under a symmetric bond. Scale: the firm slot, the multi-tier network, and the time channel between them; the membrane between scales is lossy (Fig 4 :30).

One line per domain, with actors, currency and anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 JIT production loop | focal firm, pull/kanban signals, workers, buffers | flow, lead time, waste removal | the delivery that actually arrived (production continuity) | admitted |
| D2 Supply habitat | tier-1/2/3 suppliers, logistics, geographic concentration, substitution options | material flow and dependency | the disruption event and continuity of supply | admitted, enumerated not composed |
| D3 Visibility channel | metrics, early warnings, percepts, dashboards | signal contact with the ground | the ground, which does not decay (Fig 10 :24) | admitted |
| D4 Management seat | managers, sourcing and redundancy decisions | actions on the habitat | whether the ground pays for the action | admitted as a seat, not an anchor |
| X1 "JIT in isolation" as a bearer of vulnerability | the scheduling rule alone | none nameable | none, once habitat and channel are held fixed | not a domain yet; absorbed into D1∩D2 |

**Partition or union.** Union, not partition. D1 and D3 are conditions that must both hold; D2 is the habitat both act into; D4 is the seat that acts. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."* A single lever that clears the scheduling-condition leaves the channel-condition intersection standing. The question's "or" is therefore a false partition, and that is finding F1 below.

**Dependency order (Fig 3).** Perception (is a disruption registered?) → vocabulary (terms for what a supplier affords: can it be substituted, dual-sourced, ramped?) → objective (what counts as resilient here, in the system's own terms) → planning (a route under incomplete information) → learn and carry. The middle link is where chains usually break: Fig 3 :27 : *"A link with no instrument is not a link that works. It is a link nobody has looked at."* Most operational effort lands above the break, where the measurements already exist.

---

## 2. Figure census (quoted BEFORE concluding)

| figure | bearing | verdict |
|---|---|---|
| Fig 1 | residual per slot; a live slot in a global near-zero average | no firm-average verdict is admissible |
| Fig 2 | anchor must not update; correlation disqualifies | "managed well" is not an anchor |
| Fig 3 | dependency order; middle link has no instrument | unmeasured vocabulary link, not a working one |
| Fig 4 | only actors, currency and anchor change with scale | the kernel is invariant, so cross-industry transfer is a shape |
| Fig 5 | three guards as a product; nothing new here | no minted term is owed by this question |
| Fig 6 | import is the only operator that moves the wall; proto-instrument must already exist | the missing thing is an instrument, not a slogan |
| Fig 7 | agreement compounds, evidence does not | literature consensus cannot corroborate |
| Fig 8 | residual first, frame second; low-overlap frames | ecology and safety science are the low-overlap frames |
| Fig 9 | union versus partition; describe before looking; filters are not witnesses | the question's "or" is a union |
| Fig 10 | ground does not decay, channel does; bring a characterised residual | visibility failure is channel failure |
| Fig 11 | capability is agent-and-habitat; habitat enumerated; contact cascades; asymmetry | governs D2 and D4 |
| Fig 12 | isomer, functional group, catalyst, cycle, priced bond | governs the supporting derivation in `06` |
| Fig 13 | six-term substrate; network is a structure; closed set, open arrangements | supply network is an instance, not a seventh primitive |
| Operators | → sequence, ∥ disjunction, ⋛ comparison | lean's chain vocabulary cannot write an alternative |
| Symbols | R is the aim and always a slice | reinforces Fig 1 |

---

## 3. Findings

### F1 : The question's "or" is a union, not a partition (decisive for the framing)

Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*
Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*

"Excessive vulnerability" and "resilient when managed well" are not two ends of one scale. They differ in what is held fixed. The first holds the habitat and channel fixed and varies the schedule; the second varies the habitat and channel and keeps the schedule. answering one does not answer the other. The union has its own loop and its own ground.

**Refuter:** one intervention that clears both conditions in a controlled disruption, with no categorically different residue left over. If that exists, the union reading fails.

### F2 : The schedule alone cannot carry resilience (governs D1)

Fig 11 :39: *"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."*
Fig 11 :40: *"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."*
Fig 4 :20: *"Only the actors, the currency and the anchor change."*

The JIT scheduling rule is the agent. Its resilience is a property of the rule together with its habitat (suppliers, logistics, substitution options) and its channel (visibility). "Managed well" names work on the habitat and channel, not a new property of the rule. A firm that merely tightens the pull signal while holding the habitat fixed has improved the agent in isolation.

**Status: triangulated** across Fig 11 (capability is agent-and-habitat) and Fig 4 (kernel invariant across scale), two figures with different subjects and low conceptual overlap.
**Mode:** `general` for the structural claim, `specified` for the supply application.
**Refuter:** the same schedule, with habitat and channel held fixed, yields materially different resilience across repeated disruptions. If so, something inside the schedule carries a resilience property and F2 fails.

### F3 : The habitat must be enumerated, and the residual can be three steps out (governs D2)

Fig 11 :43: *"The habitat is enumerated, never composed."*
Fig 11 :52: *"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."*
Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."*
Fig 11 :51: *"No standing list of good actors survives a change of residual."*
Fig 13 :24: *"that entities relate, and influence travels"* (the network structure among the six).

A supplier is not good or bad in itself. A sole-source supplier is a benefactor for the cost residual and a malfactor for the continuity residual. The relevant habitat is not the tier-1 vendor list; it is the enumerated cascade out to tier-2 and tier-3, the shared logistics node, the single port. Scoping to direct contact is exactly the error the DDT example names.

**Status: triangulated** across Fig 11 (enumeration, cascade, valence) and Fig 1 (per-slot residual), with Fig 13 as substrate support for "network".
**Mode:** `specified`.
**Refuter:** a disruption that reaches the focal firm from three or more tiers out with no positive live-slot residual anywhere in the enumerated chain. That would break the cascade claim. Also: a standing list of "good suppliers" that keeps its valence across a documented change of residual.

### F4 : Invisibility is channel failure, not ground failure (governs D3)

Fig 10 :24: *"the ground does not decay, the channel does"*
Fig 10 :26: *"stale percepts, dropped transients, saturated metrics, pooled readings"*
Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

A JIT operation can show healthy aggregated metrics while a single slot is live, because the channel has saturated or pooled the reading. The disruption did not become less real; the measurement lost contact. This is distinct from F2: a firm can have an excellent habitat and still be blind to a disruption until the line stops.

**Status: triangulated** across Fig 10 (channel decay) and Fig 1 (aggregation hides the live slot), two different figures.
**Mode:** `specified`.
**Refuter:** an aggregated metric that remains diagnostic, with a stated threshold that fires, when one component slot goes live. If it fires, the channel did not lose the signal in the way claimed.

### F5 : "Managed well" is permanent work, and the seat is asymmetric (governs D4)

Fig 11 :61: *"The seat's power is asymmetric. Introduction is available; exclusion is not."*
Fig 11 :63: *"Which is why a managed ecosystem is permanent work rather than a solved state."*
Fig 11 :66: *"Isolation is not removal of the habitat. It is substitution of one habitat for another."*
Fig 11 :68: *"what you failed to reproduce is invisible until the goal fails"*
Fig 10 :59: *"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."*

Management can add a second supplier, a buffer, a nearshore route. It cannot subtract the fact of contact with the habitat. Nearshoring or reshoring is habitat substitution, not removal, and it silently drops whatever the old habitat supplied while importing actors nobody chose. So "resilient when managed well" cannot be a terminal state. It is work that has to be redone as the habitat changes. The seat's interest in continuity is unavoidable; its interest in the reading (in declaring the arrangement resilient) is disqualifying and must be declared.

**Status: triangulated** across Fig 11 (asymmetry, substitution) and Fig 10 (seat stake).
**Mode:** `specified`.
**Refuter:** a supply arrangement that remains resilient after the management seat stops acting, across several habitat changes, with no re-enumeration. Also a manager with no stake in the reading, if such a seat can be shown.

### F6 : What would close it is an instrument, more agreement or more search (method)

Fig 6 :34: *"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."*
Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*
Fig 7 :13: *"agreement compounds, evidence does not"*
Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*
Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

A survey finding "most firms now dual-source" is a filter for budget and a report of agreement, not a witness for the verdict. What closes the residual is a source-discriminating instrument: a controlled disruption, a per-slot continuity counter, a tier-3 tracing method. More papers inside the lean pool add vocabulary, not evidence. The low-overlap frames that can actually contribute are ecology (resilience, adaptive capacity, cross-scale effects) and safety science / resilience engineering (graceful extensibility, fundamental surprise), both of which are read in `09`.

**Status: triangulated** across Fig 6, Fig 7, Fig 8 and Fig 9.
**Mode:** `general` for the method rule.

### F7 : Which lever wins is a declared gap

Fig 9 :32: *"you get a kind of thing, never the answer itself"*
Fig 13 :134: *"Unreachable is a verdict here, not a silence"*
Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

No figure line governs whether buffers, dual sourcing, nearshoring, flexibility, or information sharing is the right intervention for a given firm and a given disruption. After a genuine re-census (candidate figures: 6, 9, 11, 12, 13; all checked above) the figures give the shape of a checkable answer, not the answer. The levers are a kind of thing; the selection among them is owed to the ground.

**Status: `gap`.** Marked plainly. Unreachable is a verdict, not a silence. The missing thing is a source-discriminating instrument, characterized in effect terms but not held.

---

## 4. Pre-registered refuter (written BEFORE the conclusion)

Per the seat rule that a falsifier written before the run is a design instrument, the shape claim is refuted if any of the following holds:

1. **F2 refuter fires:** the same schedule, with habitat and channel held fixed, yields materially different resilience across repeated disruptions.
2. **F3 refuter fires:** a disruption reaches the focal firm from three or more tiers out with no positive live-slot residual anywhere in the chain, or a standing list of good actors keeps its valence across a change of residual.
3. **F4 refuter fires:** an aggregated metric with a stated firing threshold stays diagnostic when one component slot goes live, so no live slot is hidden by an average.
4. **F5 refuter fires:** an arrangement stays resilient after the management seat stops acting across several habitat changes and no re-enumeration.
5. **F1 refuter fires:** one intervention clears both conditions with no categorically different residue.
6. **F7 is closed:** a source-discriminating instrument is shown to select the winning lever for a given residual, which moves that part from `gap` to `grounded`.

If any fires, the affected finding is withdrawn or revised. Until one is run, nothing here is `grounded`.

---

## 5. Recommendation

1. Refuse the question's partition. Answer the union: maintain contact with an enumerated habitat and keep a channel that resolves per-slot residuals (F1, F3, F4).
2. State the mode on every claim (F2 to F5 are `specified`; the kernel claims are `general`).
3. Stop asking "is JIT vulnerable?" at the level of a firm average. Ask which slot is live, how far out the responsible actor sits, and whether the metric can see it (F3, F4).
4. Treat "managed well" as permanent work with an asymmetric seat, not a solved state (F5). Declare the stake.
5. Name F7 as `gap` and stop there. Do not smuggle in a favourite lever. Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*
6. Send the generator, meaning the residual, the shape and the refuter, not a conclusion. Fig 10 :52: *"Bring a characterised residual, never the source."*

---

## 6. Canonical usage check (figures README + WATSON metalaws, 2026-11-22)

Two sources were read after sections 0 to 5 and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md` : *"they outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the limit: the framework says what a missing thing would have to look like, *"a shape, not a name"*, then stops at the limit of the available instruments and records the lineage. *"Indiscernibility is not identity."*
- WATSON 60, *The Figures as Metalaws* : the figures are the ground for design questions; the seat reads the ground and does not ask the anchor to decide what the figures already settle.

### Retractions and confirmations

| earlier reading in this audit | status after the canonical check |
|---|---|
| F1 "question is a union" | **Canonically confirmed.** Fig 9 :54-57 plus the README's re-census rule. A bundled problem must be unbundled before search. |
| F2 "schedule alone cannot carry resilience" | **Canonically confirmed and narrowed.** The README's *"capability is a property of agent-and-habitat"* is the figure line; this is not a claim that lean practice is useless, only that it is not sufficient. |
| F3 "enumerate the habitat" | **Confirmed.** Fig 11 :43 and :52 are direct. The DDT example is an analogy in the figure itself, so it carries no separate world-evidence weight. |
| F4 "channel failure" | **Confirmed.** Fig 10 :24-26. Note that the figure's "saturated metrics, pooled readings" is a named failure class, not a measurement of any particular firm. |
| F5 "permanent work" | **Confirmed.** Fig 11 :63. The seat's stake is declared per Fig 10 :59. |
| F7 as `gap` | **Canonically confirmed.** The README: the framework returns a shape, not a name; Fig 13 :134: unreachable is a verdict. |
| "gap means the question is unanswerable" | **Retracted.** Fig 8 :39: a search that finds nothing is never a proof of absence, and Fig 6 distinguishes underivable-in-principle from unreachable-at-this-budget. This is a gap at this budget, with a named instrument class. |
| Apparent strain Fig 11 (enumeration) vs Fig 8 (union surplus) | **Not strained after re-census.** Fig 11 governs how actors enter the habitat; Fig 8 governs where a new atom comes from. Different objects. |

### Seven-question recursive derivation (summary)

1. **Is a firm average admissible?** No. Fig 1 :19 and :22. R is per slot; aggregation erases the signal.
2. **What settles "resilient"?** The disruption event and continuity of supply, not agreement. Fig 2 :29-30.
3. **Does the schedule alone carry it?** No. Fig 11 :39-40. Capability is agent-and-habitat.
4. **What is the habitat?** Enumerated actors out to the third tier, including logistics and concentration. Fig 11 :43, :52; Fig 13 :24.
5. **How does the signal reach the decision?** Through a channel that decays. Fig 10 :24-26; Fig 1 :22.
6. **What does management add?** Introductions, never subtractions; habitat substitution; permanent work. Fig 11 :61-68.
7. **What closes the remaining question?** An instrument, not more agreement. Fig 6 :34, Fig 8 :39. F7 stays `gap`.

### Updated verdict

The shape survives: resilience is a property of the JIT-and-habitat-and-channel compound, indexed per slot, with the habitat enumerated past direct suppliers and the channel kept readable; "managed well" is permanent and asymmetric work rather than a state. The question's "or" fails as a partition. Which specific lever wins is a declared `gap`. After re-census: **one gap named, no strains hidden, nothing labelled `grounded`.**
