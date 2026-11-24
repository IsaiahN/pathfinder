# Figure-grounded audit: what capacities are required for extended autonomous operation?

**Mode of this document: `specified`, not `grounded`.** It states what would have to hold and what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** The 13 figures, Operators table, Symbols table, `THE_FORMULA.md` and `THE_SEAT_MAP_Field_Guide_amended.md`, all read locally this session. Verbatim figure text is `FRAMEWORK/reference/03-FIGURES_TEXT.md`. World sources are listed in `10_source_ledger.csv` and were opened on 2026-11-23.

---

## 0. The residual, in effect terms

The question asks for *capacities required* for an AI system to act autonomously over extended periods. Stated as an effect, not a noun list:

> For each object slot s and each step over a long horizon, the system bets, acts and observes. R = |Gamma(b,a) - o'| is indexed per slot (Fig 1 :19). The question asks what must hold for R to remain small across a long chain of slots and time without an outside seat repairing the system at each step.

Two readings, written down before the run as ordinary terms (Formula, "Direction"):

- **Option A:** autonomy is a stock the model owns. If true, sustained operation can be improved by improving the agent in isolation.
- **Option B:** autonomy is a relation maintained between agent and habitat. If true, sustained operation fails when contact, reach, or the channel to the ground fails, no matter how capable the model considered alone.

What an answer would look like: a **shape** naming the conditions that must all hold for R to stay small over the horizon, plus an instrument that discriminates a failure of one condition from a failure of another. This shape is the sought-for term; as a preference it is not bound, predicts nothing, and no internal check can see it (Fig 5 :62-64). Writing it down binds it so it can accrue a residual like anything else.

**Arity / symmetry / scale of R.** Arity: multiple conditions overlapping, so a union rather than one hard question (Fig 9 :55). Symmetry: the conditions are ordered by dependency and autonomy is a threshold relation, not a symmetric conjunction of independent traits (Fig 3 :20; Operators table :48 for comparison). Scale: the loop closes within one scale (Formula steps 1 to 5) and across scales (step 6); the extended-period aspect adds a third scale, the chain of rooms over time (Fig 7).

---

## 1. Domain census (before choosing any figure line)

One line per domain with actors, currency, anchor. A candidate with no nameable anchor is not admitted as a domain yet.

| domain | actors | currency | anchor | partition / union | status |
|---|---|---|---|---|---|
| D1 The loop and dependency chain | agent, Gamma, object slots, instruments | residual reduction per slot | the ground, as measurement and outcome | boundary question: which link the chain stops at | admitted |
| D2 The temporal channel to the ground | percepts, metrics, readings, seats | contact | the ground, which does not decay | union condition: contact maintained | admitted |
| D3 The habitat | environment actors, conditions, relations | cascade of contact | the ground settles what survives | union condition: agent-and-habitat | admitted |
| D4 The closure and reach | Gamma, atoms, bonds, peer frames | reach, not library size | settlement against the ground | union condition: reach renewed by import | admitted |
| D5 The scale membrane | one agent, population, methods, head starts | methods up, head starts down | round-trip gap R_T | boundary between within-scale and cross-scale loops | admitted |
| D6 The room chain over time | successive rooms or frames, selection | progress per handoff = bracket fidelity x ground pressure | the ground votes through selection between rooms | ordered chain, not a set | admitted |
| X1 "Will" or "desire" as a free-floating property | the leader or the will | none nameable | none | not a domain yet | not admitted |
| X2 "Consciousness" as a prerequisite | the subject | none measurable here | no instrument | not a domain yet | not admitted |
| X3 A fixed checklist of capacities owned by the model | the model | talent or inventory | absorbed into D1 to D3 once re-expressed as relations | absorbed | absorbed |

**Partition or union.** The conditions form a **union of overlapping conditions**, not a partition of independent capacities. A single lever clears only the region where one condition holds and leaves the intersections standing (Fig 9 :55, Fig 9 :57). The whole question is a compound with its own loop.

**Dependency order (Fig 3).** perception -> vocabulary -> objective -> planning -> learn and carry. The chain is ordered by dependency, not by importance, so effort spent above the break arrives at a step that cannot use it (Fig 3 :20). Refusal precedes mint (Formula step 2). The residual is described before a frame is chosen (Fig 8 :53, Fig 9 :27-28). A first-order loop must settle before it becomes an atom for a second-order composition (Fig 12 :104).

---

## 2. Figure census (verbatim, before concluding)

| figure | bearing | verdict |
|---|---|---|
| Fig 1 | R per slot, never aggregated; ground is the only metric | no ground reading exists here |
| Fig 2 | anchor must not update; correlation disqualifies a verdict | autonomy cannot be settled by agreement about it |
| Fig 3 | dependency chain, status per link, break invisible from above | capacity must be assessed at the broken link |
| Fig 4 | methods cross up, head starts down; round trip gap | avoid treating a capacity list as a transferable method |
| Fig 5 | three guards as a product; curiosity drive; output is not success | a curious system can still return nothing |
| Fig 6 | import is the only operator that moves the wall | reach renewal needs a differing closure |
| Fig 7 | no last room; two factors per handoff | extended autonomy is a chain, not one long room |
| Fig 8 | closure is idempotent; residual first, frame second | naming mechanisms before the residual is apophenia |
| Fig 9 | union vs partition; shape not a name; filters are not witnesses | the conditions must be unbundled, not averaged |
| Fig 10 | ground does not decay, channel does; verifier non-access | a capacity to keep the channel reachable is required |
| Fig 11 | capability is agent-and-habitat; habitat enumerated, not composed | the central verdict for this question |
| Fig 12 | bonds vs ingredients; plan, goal, progress, refusal; two currencies | a noun list of capacities cannot state a route |
| Fig 13 | six-term set is closed, arrangements are not; unreachable is a verdict | no final list of capacities; the shape stops at the instrument limit |
| Operators table | comparison is a threshold relation; goal is a comparison | "autonomous" is a threshold, not an ingredient |
| Symbols table | R is the aim; ground is the anchor; habitat is field of contact | no R has been measured for this question |

Strained readings are named as such in section 7, not smoothed over.

---

## 3. Findings F1 to F11

### F1 - Autonomy is a property of agent-and-habitat, not a possession of the agent (decisive for Option A)

Fig 11 :39:

> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."**

Fig 11 :40:

> **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."**

The question asks for "capacities ... for an AI system to act autonomously." Fig 11 says the answerable form is not "what capacities does the system have" but "what makes the system capable," and that capability is a property of agent-and-habitat. So a capacity list that names only internal properties of the model is aimed at the wrong object. The things that must be present include relations to a habitat, and those relations are not stored in the model.

This bears on Option A directly: if sustained operation were a stock inside the agent, improving the agent in isolation would change contact. Fig 11 :40 says it does not. Mode `general` for the structural claim, `specified` for the AI application. **Refuter:** a documented agent-only improvement that changes contact and extends sustained autonomous operation, with the habitat held fixed and the change measured.

### F2 - The requirements form a union, not a list

Fig 9 :55:

> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**

Fig 9 :57:

> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."**

The capacities are not additive parts that can be checked off one by one. A failure of contact, a failure of reach, and a broken link in the dependency chain are different conditions with different instruments. A single lever clears the region where only one holds and leaves the intersections standing. Asking "which capacities?" invites a list; the figure says the correct form is a union of conditions with its own loop and its own ground. Mode `general`. **Refuter:** one intervention that restores all conditions at once and leaves no categorically different residue.

### F3 - The dependency chain must be unbroken, and the break located by measurement, not assumed

Fig 3 :19:

> **"Optimising a link that already works cannot rescue one that does not."**

Fig 3 :20:

> **"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."**

Fig 3 :27:

> **"A link with no instrument is not a link that works. It is a link nobody has looked at."**

The five links are named verbatim: perception (Fig 3 :5, *"the system can tell what is in front of it, and tell it apart from what was there before"*), vocabulary (Fig 3 :7, *"it has terms for what things afford: what can be moved, opened, joined, blocked"*), objective (Fig 3 :10, *"it can say what would count as progress here, in its own terms"*), planning (Fig 3 :13, *"a route to that objective, chosen under incomplete information"*), and learn and carry (Fig 3 :15, *"name what worked, verify it, and carry it to the next problem"*).

For extended autonomy, a system can fail at any link, and the failure is silent from above the break (Fig 3 :22-23: a reading taken below the break is a reading of nothing). So one required capacity is an unbroken, *measured* chain, not merely the presence of modules at each station. The middle links (vocabulary and objective) attract the least attention because they have neither obvious failures nor obvious tests (Fig 3 :25-26). Mode `specified`. **Refuter:** sustained small R over a long horizon while a link is demonstrably broken and the reading was taken below the break.

### F4 - A maintained channel to the ground is required; the ground does not decay, the channel does

Fig 10 :24:

> **"the ground does not decay, the channel does"**

Fig 10 :25-26:

> **"stale percepts, dropped transients, saturated metrics, pooled readings"**

Fig 10 :28-29:

> **"the output is not a verdict, it is you have lost touch"**

The anchor is defined in Fig 2 :29 as *"whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* For an autonomous system, the ground is the world's return o'. The system can keep reporting success while its channel is dead, because internal instruments read through the channel (Fig 10 :26). So one required capacity is keeping the anchor reachable, which Fig 10 :52 names as *"Bring a characterised residual, never the source."* The seat map adds a related failure genus: an instrument is built to point inward unless one is built to point out, so the loss of contact goes unreported by the very instruments that read through the channel. Mode `specified`. **Refuter:** R stays small while the channel is demonstrably stale or saturated and nothing in the system reads the loss of contact.

### F5 - Reach must be renewed by contact with differing closures, or the system searches without end inside a finite reach

Fig 6 :23:

> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**

Fig 8 :32:

> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."**

Fig 13 :115:

> **"The set is closed. The arrangements are not. That gap is why import exists."**

Fig 13 :118:

> **"still not arrive: infinite effort inside a finite reach."**

An extended horizon is exactly the condition under which this bites. A system that only composes inside its current library can keep acting and keep generating output while its reach does not move. The reach, not the library, drives the loop (Formula step 8). Renewal requires an import from a closure that differs, which Fig 8 :45 calls *"Two frames together reach what neither reaches alone."* Fig 5 :46 says *"When nothing is scoring, the drive manufactures a gradient,"* so a curiosity drive can keep a system busy without adding an atom; Fig 5 :48 adds, *"Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."* Mode `general` for idempotence, `specified` for the long-horizon application. **Refuter:** reach demonstrably renews over a long horizon with no import from a differing closure, measured by a new atom that was not in atoms(Gamma).

### F6 - Extended autonomy is a chain of differing rooms, with two factors per handoff

Fig 7 :13:

> **"agreement compounds, evidence does not"**

Fig 7 :35:

> **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."**

Fig 7 :36:

> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."**

Fig 7 :37-39:

> **"Progress per handoff has two factors. Zero either and the chain runs in place:"**
> **"the bracket's fidelity across the handoff"**
> **"the ground's pressure on the room"**

Sustained autonomous operation over time is a sequence of handoffs, not one long run of the same loop. If successive rooms are mirrors (high correlation, same closure), the chain moves without progress. Fig 7 :42 adds, *"And the pool it is drawn from must be unauthored."* So a further condition is that the next frame or instrument differ from the last and be selected against the residual the last one surfaced. Mode `specified`. **Refuter:** a chain of same-closure, high-correlation rooms whose progress per handoff stays positive with ground pressure held constant.

### F7 - A noun list of capacities cannot state a route, a goal, progress, or a refusal

Fig 12 :111:

> **"A vocabulary without bonds can name a state and cannot name a route to one."**

Fig 12 :112:

> **"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."**

Operators table :52:

> **"a goal is a comparison, which is why a vocabulary without it cannot state one"**

Fig 12 :117:

> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

The question's word "capacities" invites an inventory (memory, planning, perception, and so on), which is a list of ingredients. Fig 12 says the arrangement is the substance and the bond carries information the operands do not. Autonomy requires sequence, comparison, subtraction and negation, none of which is an ingredient. Two systems with the same ingredient list can be isomers and behave differently. Fig 12 :126 adds a second point: *"Bits price the description. Actions price finding out whether it holds."* A capacity that is cheap to state can be unaffordable to test, and the two currencies do not add. Mode `general` for the notation claim, `specified` for autonomy. **Refuter:** a vocabulary holding only ingredient nouns that successfully states a goal, a progress measure, and a refusal without ordered bonds or negation.

### F8 - The framework returns a shape, not an implementation

Fig 9 :32:

> **"you get a kind of thing, never the answer itself"**

Fig 13 :134:

> **"Unreachable is a verdict here, not a silence,"**

Fig 13 :138-139:

> **"you get a kind of thing, never the answer itself, and narrowing gets you close while the ground decides."**

The limit applies in full here. The figures can characterise what a set of capacities must look like (a maintained union of contact, reach, dependency and channel conditions) but cannot name a particular architecture as *the* required one. Fig 5 :61-63 says the term most worth refusing may not be in the library at all, because a sought-for shape is held as a preference. The remedy is the discipline of binding the shape as an ordinary term, which section 0 does. Mode `general`. **Refuter:** a verbatim figure line that names a specific implemented capacity (for example, episodic memory or a world model) as required for autonomy.

### F9 - Habitat and ground are different; the one updates, the other does not

Fig 11 :73:

> **"The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."**

Fig 11 :43:

> **"The habitat is enumerated, never composed."**

Fig 11 :44:

> **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."**

For an autonomous system the field of contact includes users, tools, other agents, data sources, interfaces and institutions. These are read off the world, not composed from a model of what autonomy ought to need. Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."* The ground is the world's return, which does not update on what the system thinks (Fig 2 :33). Confusing the two is how a system ends up graded by its own habitat. Mode `general`. **Refuter:** a habitat change that settles the residual without any change in the world's return, that is, a ground that moves when pushed.

### F10 - The capabilities that the AI literature names are bindings, not derivations

Fig 8 :53:

> **"Residual first, frame second."**

Fig 9 :27-28:

> **"describe it before you go looking, or any frame you pick will seem to fit"**

Fig 2 :40:

> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"**

The world sources opened for this question (Voyager's skill library, Reflexion's episodic memory buffer, executive functions, allostasis, autopoiesis, optimal foraging) are frames from different closures. Each predicts part of the shape. But they are **not** derived from the figures, and agreement among them is not corroboration of a figure verdict when they share an evidence pool. They are bindings from those frames onto held conditions in D1 to D4. Their provenance is recorded in `10_source_ledger.csv`. The order matters: residual first, then frame. Mode `specified`. **Refuter:** a demonstration that a named mechanism from the AI frame is entailed by a figure line without an import.

### F11 - What actually survives (defensible residue)

| claim | mode | figure |
|---|---|---|
| Sustained autonomy is a property of agent-and-habitat, not an internal stock | `general` structural, `specified` for AI | Fig 11 :39-40 |
| The requirements form a union of conditions that must be unbundled, not a list | `general` | Fig 9 :55-57 |
| An unbroken, measured dependency chain is required | `specified` | Fig 3 :19-20, :27 |
| A maintained channel to a non-updating ground is required | `specified` | Fig 10 :24, :28-29; Fig 2 :29 |
| Renewal of reach by contact with a differing closure is required | `general` + `specified` | Fig 6 :23; Fig 8 :32; Fig 13 :115 |
| Extended operation is a chain of differing rooms with two nonzero factors | `specified` | Fig 7 :35-39 |
| A noun inventory cannot state a route, goal, progress or refusal | `general` | Fig 12 :111-112; Operators :52 |
| The specific architecture is not named by the framework | `general` | Fig 9 :32; Fig 13 :134 |
| Which named mechanism implements each condition | **gap, returned as a shape** | no figure line governs; needs an instrument |

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach, Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."*

The shape claim is refuted if any of the following holds:

1. Sustained small R over a long horizon is demonstrated with an agent-only improvement that leaves contact unchanged, holding the habitat fixed (breaks F1).
2. One intervention restores all conditions at once and leaves no categorically different residue (breaks F2).
3. A link in the dependency chain is demonstrably broken and operation continues, with the reading taken from above the break rather than below it (breaks F3).
4. R stays small while the channel is demonstrably stale, dropped, or saturated and nothing in the system reads the loss of contact (breaks F4).
5. Reach renews over a long horizon with no import from a differing closure, shown by a new atom not in atoms(Gamma) (breaks F5).
6. A chain of same-closure, high-correlation rooms shows positive progress per handoff with ground pressure held constant (breaks F6).
7. A verbatim figure line is found that names a specific implemented capacity as required for autonomy (breaks F8).

If any fires, the shape is wrong or incomplete and the claim is withdrawn or amended. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. State the mode on every sentence (F1 to F10 are `specified` or `general`, never `grounded`).
2. Lead with the shape and the refuter, not with a capacity checklist. The checklist is the flat formula of Fig 12 :14-17: *"the ingredients are recorded and the arrangement is not."*
3. Put the domain census before any mechanism name (F10, Fig 8 :53).
4. Ask what would count as a failure, record the verdict, and only then offer the links (Fig 10 :52).
5. Use the public submission and contact points in `03_public_contact_points.csv`, one to one, never as a bulk send (Fig 2 :40, Seat Map :163).
6. Name the gap openly: which mechanisms implement each condition is not settled by the figures and needs an instrument that returns something (Fig 6 :34, *"the search for a proto-instrument is a search for one that is already there"*).

---

## 6. Canonical usage check (figures README + WATSON 60, read this session)

Two local sources were read and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md` - *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* And the canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of the instruments and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md` - the eight-step loop and the mode rule; step 7 separates SEARCHED, INWARD and OUTWARD; "Direction" makes the sought-for shape an ordinary term.

### Retractions and confirmations (kept visible, not silently erased)

| earlier reading | status after the canonical check |
|---|---|
| "capacities" as a list of internal parts the model owns | **Retracted.** F1 + Fig 11 :39-40 make capability a property of agent-and-habitat. The question is answerable only in relational form. |
| "autonomy" treated as one hard question | **Retracted.** F2 + Fig 9 :55-57 make it a union compound with overlapping conditions. |
| Initial attempt to map executive functions directly onto Fig 3's five links | **Strained, returned to census.** Executive functions are a biological description from a different closure; the mapping is a binding (F10), not a derivation. Fig 8 :53 governs: residual first, frame second. |
| "curiosity drive" treated as a standalone required capacity | **Narrowed.** Fig 5 :46 manufactures a gradient when nothing scores, but Fig 5 :48 says output is never a measure of success. It is a sub-condition under D4, not a separate requirement. |
| "ground" and "habitat" treated as one field | **Retracted.** F9 + Fig 11 :73 separate them: habitat updates, ground does not. |
| "no figure line governs the mechanism question" | **Confirmed as a genuine `gap`.** Fig 9 :32 and Fig 13 :134 license the stop; unreachability is a verdict here, not a silence. |
| Apparent strain Fig 6 (import moves wall) vs Fig 5 (mint inside closure) | **Not strained.** Re-census: Fig 5 governs minting inside closure; Fig 6 governs what moves the wall. Different objects. Matches the canonical re-census rule. |

### Seven-question recursive derivation (summary)

1. **Agent alone?** No. Fig 11 :39-40. Capability is agent-and-habitat; agent-only improvement that leaves contact changes nothing.
2. **List or union?** Union. Fig 9 :55-57. Unbundle before searching; a case in two conditions is categorically different.
3. **Which link stops the chain?** Measured, not assumed. Fig 3 :20, :27. Perception -> vocabulary -> objective -> planning -> learn and carry.
4. **What keeps R small over time?** A channel to a non-updating ground. Fig 10 :24; Fig 2 :29. The ground does not decay, the channel does.
5. **What prevents infinite effort in a finite reach?** Import from a differing closure. Fig 6 :23; Fig 8 :32; Fig 13 :115.
6. **What is the temporal form?** A chain of differing rooms with two nonzero factors. Fig 7 :35-39.
7. **What is withheld?** The specific architecture. Fig 9 :32; Fig 13 :134. Shape, not a name. The gap is declared, not hidden.

### Updated verdict

The shape survives: sustained autonomous operation requires a maintained union of an unbroken measured dependency chain, a live channel to a non-updating ground, capability located in agent-and-habitat, and a reach renewed by contact with differing closures, iterated as a chain of differing rooms with two nonzero handoff factors. What does not survive is the request's own form, a list of internal capacities: Fig 11 :40 refuses it and Fig 12 :111-112 says an inventory cannot state a route. Strains after re-census: **one live, named** (the executive-function mapping is a binding, not a derivation, F10), none hidden.
