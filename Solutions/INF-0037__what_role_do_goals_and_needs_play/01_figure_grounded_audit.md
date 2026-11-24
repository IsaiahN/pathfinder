# Figure-grounded audit: the role of goals and needs in determining which information is useful

**Mode of this document: `general` on the structural claim, `specified` on the per-slot predictions, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Local: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figures, cited as `Fig N :line`), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`. World sources were opened on 2026-11-23 and are recorded in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

**Question as given.** What role do goals and needs play in determining which information is useful?

**Effect restatement.** A system is immersed in a stream of candidate items. Some it treats as worth attending to, retaining, or acting on (useful); most it treats as noise. The question asks what assigns that valence. Two options:

- **Option A.** Usefulness is carried by the item: its entropy, its length, its truth, its rarity. What follows: the same item must be equally useful to every recipient, and the system can score itself with a quantity it also produces.
- **Option B.** Usefulness is a relation between an item and a live residual. Goals and needs set what the residual is a residual *of*, so they decide which slot is live and which items can reduce it. What follows: the same item is useful to one residual and noise to another, and valence changes when the residual changes.

**The sought-for shape, bound before the run (Formula, Direction).** Write down what an answer would look like and let it accrue a residual like anything else:

> `USEFUL(i | R, goal)` holds to the degree that item `i` reduces the positive residual `R⁺_s` on a slot `s` that is live under the comparison the goal states and the subtraction progress measures.

This is an ordinary term, so it is refusable by the same test as everything else. Fig 5 :66: *"Then the preference is refusable by the same test as everything else. Committing a prediction before a run is this, already working."*

**Why this is a union, not one hard question.** There are two loops here: (1) what sets salience, and (2) how a held goal can misdirect the check. Fig 9 :5: *"Split it rather than search."* They are kept separate below and their verdicts are never averaged.

---

## 1. R by arity, symmetry and scale, then the domain census

**R (the residual).** Symbols table :38-40: *"It is the aim, not only the error signal, and it is always a slice: what cannot be perceived yet is residual and simply cannot be read."*

- **Arity:** one object slot at a time. Fig 1 :11 *"residual R indexed by object slot"*; Fig 1 :19 *"The residual is indexed by object slot, not aggregated."*
- **Symmetry:** broken per slot. Which slot is live is not interchangeable with the others, so an item's valence is not invariant under a swap of slots. Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*
- **Scale:** per object, not per step and not global. Fig 1 :13: *"a global R near zero with one live slot residual is a legal state"*.
- **Direction:** R decides where to look. Fig 1 :15: *"where to look: broken vs novel"*.

**Domain census.** One line per domain with actors, currency and anchor. A line with no nameable anchor is not a domain yet.

| # | domain | actors | currency | anchor | question type |
|---|---|---|---|---|---|
| 1 | Agent perception loop (Fig 1) | object slots, agent, ground | per-slot residual `R`, priced in description and actions | Fig 1 :23 *"The ground enters as the only metric."* | partition: which slot is live |
| 2 | Composition grammar (Fig 12, Operators) | atoms and the eight operators | bits, under minimum description length | the bond set and its six separating tests; the ground for settlement | partition boundary: what can be stated at all |
| 3 | Habitat and valence (Fig 11) | candidate items as habitat actors, conditions, relations | contact and cascade | the ground; Fig 11 :49 fixes valence to R | compound with its own loop (contact cascades) |
| 4 | Search and frame selection (Fig 7, 8, 9) | frames A and B, the question | overlap and independence | the ground, never agreement | union: residual first, frame second |
| 5 | Direction and preference (Fig 5 amendment, Formula Direction) | frame plus the sought shape | residual accrual, or its absence | the ground, reached only by binding the shape as a term | second-order loop over domains 1 to 4 |

**Partition or union.** Domains 1 to 4 form a dependency chain, not a flat list. Domain 5 is a second-order compound because it is about the checking discipline rather than about the content of R, and the mechanism checks cannot see it. Fig 3 :20: *"The chain is ordered by dependency, not by importance."*

**Order by dependency (Fig 3).** Domain 2 first: without the comparison and subtraction bonds a goal and its progress cannot be stated. Then domain 1: the loop measures R per slot against the ground. Then domain 3: valence is assigned relative to that R. Then domain 4: the residual selects the frame and habitat. Domain 5 last: the direction of the question is checked separately, because the mechanism cannot check it. A step whose input never arrives cannot be diagnosed, only its predecessor can (Fig 3 :22).

---

## 2. Findings

### F1. Usefulness is valence relative to the residual, not a property of the item (decisive, triangulated)

Fig 11 :49:

> **"An actor's valence is relative to the residual, not a property it carries."**

Fig 11 :50-51:

> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds. No standing list of good actors survives a change of residual."**

Fig 1 :15 supplies the mechanism: *"where to look: broken vs novel"*. Symbols table :38-40 adds that R is *"the aim, not only the error signal"*, so R selects the target as well as reporting the error.

An item of information is a habitat actor. Calling it useful is assigning it a valence, and valence is a relation to a residual. The goal or need is what the residual is a residual *of*, so it is in the selecting role. This is **triangulated**: the habitat figure and the agent figure have different actors, currencies and anchors, and their agreement is low-overlap. It directly refuses Option A.

- **Refuter (written now, before the conclusion):** exhibit one item whose usefulness is invariant across two residuals with different live slots, where the framework itself must assign the same valence in both, or exhibit a standing list of useful items that survives a change of residual. Either result breaks F1.

### F2. Goals and needs are bonds, not primitives: a goal is a comparison, progress is a subtraction (triangulated)

Fig 12 :112:

> **"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond. A system holding only ingredients can say what a situation contains and cannot say what would count as getting somewhere from it."**

Fig 12 :111: *"A vocabulary without bonds can name a state and cannot name a route to one."*

Operators table :52: *"a goal is a comparison, which is why a vocabulary without it cannot state one"*

Operators table :46: *"progress is a subtraction, which is why a vocabulary without it cannot say how far along it is"*

Fig 3 :10-11 names the same link from the dependency side: *"it can say what would count as progress here, in its own terms"* and *"what the search is for"*. Fig 12 :115: *"having terms for what a situation affords was taken for a dictionary and it is a grammar."*

So a need is not a seventh primitive. It is a molecule built from the operator set: a comparison `⋛` against a target state, a subtraction `−` for the distance still to go, and where a route is needed a sequence `→`. The six-term substrate stays closed (Fig 13 :41: *"Each is indivisible: no arrangement of the other five yields it."*). This is **triangulated** across the bond grammar (Fig 12 and Operators, one evidence pool) and the dependency chain (Fig 3, a distinct figure with a distinct anchor).

**Strain test.** The Operators table defines `⋛` as *"a threshold relation between two quantities"*. Reading a goal as a comparison of a current state against a target state is the table's own stated use (*"a goal is a comparison"*), so no strain. A strain would appear only if the goal were instead treated as a new atom, which is the reading retracted in §6.

- **Refuter:** show a term in `closure(Γ)` that states *"getting somewhere"* using only symmetric bonds and no ordered operator, or derive a goal from the six primitives with no comparison bond. Either result breaks F2.

### F3. Goals set which slot is live; aggregation destroys the routing signal (triangulated)

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*

Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

Fig 1 :23: *"The ground enters as the only metric."*

Fig 1 :27: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*

The route from goal to usefulness is therefore: goal states a comparison, which fixes a target; miss against that target puts positive mass on a slot (`|R⁺_s| > 0`); the live slot decides where to look; information that reduces that slot's residual is useful. A global average cannot do this routing, and a frame-internal score such as coverage or compression cannot do it either, because the frame both produces and scores that quantity. This is **triangulated** between Fig 1 (agent loop, ground = RLVR) and Fig 9 :26 *"R's own predicates name the habitat that holds φ*" (search, ground = settlement).

- **Refuter:** show a case in which a global average residual routes attention to the live slot more reliably than the per-slot signal, or show the framework admitting a frame-internal quantity as the metric that settles usefulness. Either result breaks F3.

### F4. The residual selects the frame and the habitat, not the reverse (triangulated)

Fig 9 :26: *"R's own predicates name the habitat that holds φ"*

Fig 9 :27-28: *"describe it before you go looking, or any frame you pick will seem to fit"*

Fig 7 :40: *"The room is summoned by the residual rather than composed."*

Fig 8 :53: *"Residual first, frame second."*

A goal or need is the residual's own predicate set. If you pick a field or a frame first and then describe the need in that field's vocabulary, any frame will seem to fit, and the resulting "usefulness" judgment is an echo of the vocabulary you chose. This is **triangulated** across Fig 9 (leave/arrive) and Fig 7 (room chain), two figures with different casts, currencies and anchors.

- **Refuter:** show a case where choosing the frame first and describing R afterwards yields a strictly better ground prediction than residual-first lookup, across two low-overlap frames. That would break F4.

### F5. Frame-internal quantities cannot decide usefulness (single-source in the figures, externally corroborated)

Fig 1 :24-27 disqualifies the obvious candidates: *"coverage, and compression achieved"* and *"predicates minted, and credibility accrued"* are *"frame-internal"*, and *"A frame cannot score itself with a quantity it also produces."*

This is why Shannon entropy alone cannot answer this question. The Stanford Encyclopedia entry on Information (read 2026-11-23) says: *"Shannon information is the best known quantitative definition of information but it is a rather weak concept that does not capture the notion of disorder that intuitively is essential for the thermodynamic concept of entropy"*, and separately that semantic information *"adds the dimensions of meaning and truthfulness"*. That is a world source, so it corroborates but never decides. The verdict comes from Fig 1.

- **Refuter:** show a frame scoring its own usefulness with a quantity it also produces, and have that score settle a decision at the ground rather than merely describe the frame.

### F6. A goal held as an unbound preference is invisible to the check and can misdirect it (triangulated, with a limit)

Fig 5 :62 (verbatim substring): *"holds that shape as a PREFERENCE rather than as a term"*. Fig 5 :66: *"Then the preference is refusable by the same test as everything else. Committing a prediction before a run is this, already working."*

Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

A need can operate in two modes. Bound as `USEFUL(i | R, goal)`, it accrues a residual and is testable. Held as an unbound preference for a particular answer shape, it predicts nothing, accrues no residual, and steers the search without being checkable. Every check in the mechanism runs on the mechanism and none on the direction of the question. So the figures do not say goals are always good selectors; they say goals select *when bound*, and a preference that is never written down selects without a receipt. This is **triangulated** between Fig 5 (mint pipeline amendment) and Fig 9 (filter/witness rule).

- **Refuter:** show a frame certifying the direction of its own question from its mechanism alone, with no bound shape and no pre-registered prediction, and have that certification survive contact with the ground. That would break F6.

### F7. What the figures do not say

- They do not give a numerical utility function. `USEFUL` is a structural relation, not a number. No measurement in this derivation prices it.
- They do not say goals are the *only* determinant. The habitat acts too: Fig 11 :40 *"An improvement that does not change contact changes nothing, however much it improves."* A goal that does not change which items contact the loop changes nothing.
- They do not say needs are among the six primitives. F2 retracted that reading.
- They do not say the framework returns the name of a useful item. Fig 9 :32 *"you get a kind of thing, never the answer itself"* is the standing limit.
- No claim here is `grounded`. Anchoring a specific usefulness judgment requires a decision outcome, which is not present.

---

## 3. Pre-registered refuter

Required before outreach: a falsifier written before the run is a design instrument. The shape claim in `USEFUL(i | R, goal)` is refuted if any of the following holds:

1. An item's valence is invariant across two residuals with different live slots, where the framework must assign the same valence in both (breaks F1).
2. A goal or progress is expressible in `closure(Γ)` with no ordered bond, or a goal is derived as one of the six primitives (breaks F2, and restores the retracted reading).
3. A global average residual routes to the live slot better than the per-slot signal, or a frame-internal quantity is admitted as the ground metric (breaks F3).
4. Choosing a frame first and describing R afterwards beats residual-first lookup at the ground across two low-overlap frames (breaks F4).
5. A frame certifies its own question's direction without a bound shape, and survives the ground (breaks F6).

If any fires, the corresponding finding is withdrawn. Until one is run, nothing here is labelled `grounded`.

---

## 4. Recommendation

1. Lead with F1 and F3. The claim that usefulness is a relation to a live residual is the strongest figure-derived content and the one an outside checker can test in twenty minutes.
2. State modes explicitly: `general` for the structural role, `specified` for the per-slot routing prediction. Never present the structural claim as a measurement.
3. Bind the sought-for shape before any run (F6). A recipient should see the refuter before the theory.
4. Use public, opt-in venues in `03_public_contact_points.csv`. Ask what a failure would look like, not whether the claim is believable (Fig 2 :35, Fig 10 :42).
5. Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* Send the derivation and the refuter, not a conclusion.

---

## 5. Canonical usage check

Two local sources were read after the first four sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also says a reading that makes figures contradict one another has misidentified its domain, and the framework returns *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of the instruments and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are metalaws, so design questions are decided by derivation, not by escalating to the anchor. *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* The seat reads the ground; it does not ask the ground's maintainer to decide design.

**No em dashes** are used in any file in this folder; commas, colons, parentheses and hyphens carry the breaks instead.

### Retractions and confirmations

| earlier reading | status after the canonical check and re-census |
|---|---|
| "A need is a primitive or a seventh member of the six-term set" | **Retracted.** Fig 13 :41 (*"Each is indivisible: no arrangement of the other five yields it."*) plus Fig 12 :112 make goals and needs compositions over the operator set, not atoms. The retracted reading was a category error, not a strain. |
| "Usefulness is high Shannon information" | **Retracted at the figure level.** Fig 1 :27 disqualifies frame-internal scores, and SEP Information (world source) confirms Shannon information is deliberately weak on meaning. Option A fails. |
| "Fig 1's 'R is the aim' conflicts with Fig 5's 'preference is invisible'" | **Not strained after re-census.** Fig 1 governs the bound per-slot residual inside the loop. Fig 5's amendment governs the unbound direction of the question, which the mechanism cannot see. Different objects, so no re-census debt remains. |
| "The residual selects the frame" as a single-source claim | **Confirmed and triangulated.** Fig 8 :53 and Fig 7 :40 are distinct figures with distinct casts. |
| "Goals always improve relevance" | **Narrowed, not confirmed.** F6 binds the claim: goals select when written down as terms; unbound preferences select without a receipt and can misdirect. |
| "This derivation settles the question" | **Refused.** It is a simulation checked for internal consistency against the figures. Only a decision outcome at the ground could settle a specific usefulness judgment. |

### Canonical limit applied to this question

The framework returns a shape, not an item list. So the honest output is the *form* any useful item must have: it must reduce a live per-slot residual under a stated comparison and subtraction. Which specific item that is, in a given decision, is the recipient's work against their own ground. Naming an item from inside the frame is the apophenia Fig 9 :27-28 warns about.

---

## 6. Figure census used

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | per-slot R, ground as only metric, frame-internal scores disqualified | governs salience routing |
| 2 The Ground | anchor, independence, mirror chain | governs the outreach rule, not the answer |
| 3 Dependency Chain | objective link, order by dependency | governs F2's placement |
| 4 The Membrane | round trip and gap | governs what may be sent |
| 5 Mint Pipeline | preference as unbound shape, bind it as a term | governs F6 |
| 6 Closure and Reachability | cast effects in effect terms | governs vocabulary discipline |
| 7 Room Chain | room summoned by residual | governs F4 |
| 8 Union Surplus | residual first, frame second | governs F4 |
| 9 Leave / Arrive | R names habitat, describe before looking, filter versus witness | governs F4 and F6 |
| 10 Ground Maintainer | bring the residual, not the source | governs the packet |
| 11 The Habitat | valence relative to residual, contact cascades | governs F1 |
| 12 The Bond | goal is a comparison, progress is a subtraction, grammar not dictionary | governs F2 |
| 13 Minimum Viable Set | primitives indivisible, set closed | refuses the seventh-primitive reading |
| Operators table | `⋛` comparison, `−` subtraction, `→` sequence | governs F2's bond assignment |
| Symbols table | R is the aim, per slot | governs F1 and F3 |

**Strains after re-census: none hidden.** One apparent strain (Fig 1 versus Fig 5) was dissolved by re-census in §5. No figure line was smoothed to force a fit.
