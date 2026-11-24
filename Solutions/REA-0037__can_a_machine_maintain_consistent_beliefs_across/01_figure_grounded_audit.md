# Figure-grounded audit: can a machine maintain consistent beliefs across long conversations and changing evidence?

**Mode of this document: `specified` on the per-domain findings, `general` on the structural split, `gap` on a numerical threshold. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** Figure quotes are from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the verbatim extract with line numbers, cited as `Fig N :line`. Loop and mode language is from `FRAMEWORK/figures/THE_FORMULA.md`. Canonical usage is from `FRAMEWORK/reference/FIGURES_README_canonical.md`. World sources are listed in `10_source_ledger.csv`.

---

## 0. The residual, stated in effect terms

The ordinary term is "consistent beliefs." It does not name one quantity. It names two, and the two come apart.

- **C1, internal coherence.** No contradiction among the terms the machine currently holds. This is a symmetric relation among a set of held terms. It is cheap: a machine can report its own coherence from its own library, which is exactly why it is disqualified as evidence. Fig 1 :24-27: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*
- **C2, stable contact with a ground that does not move because the machine thinks so.** This is an ordered relation, a frame ranging against an anchor, indexed per belief. Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*

The stresses in the question act on these two differently. A long conversation degrades the channel (stale percepts, dropped transients, saturated context, pooled readings), not the ground: Fig 10 :24 *"the ground does not decay, the channel does."* Changing evidence moves the world, so a term that was settled can become false, which needs a refusal, not another addition: Fig 5 :53 *"refuted: a term we hold is wrong; a term is owed that says so."*

**Restated residual R.** Can the machine keep C2 reachable, per slot, while it (a) carries a term across many handoffs without turning the chain into a mirror, and (b) refuses a held term when the ground moves, without confusing two scopes, a ground error, or a changed world? What an answer would look like is a shape: an anchor that does not update, a residual indexed per slot, a channel that can be checked for decay, a refusal operator, and a lineage. Bind that shape as an ordinary term now, per `THE_FORMULA.md` "Direction," so it can accrue a residual like anything else. The question does not ask for an architecture name. A `general` answer fixes the shape; a `specified` answer says which conditions break it; a `grounded` answer would need a machine measurement, which this folder does not have.

---

## 1. Domain census

Order: R by arity, symmetry and scale (Fig 9 :22), then one line per domain with actors, currency and anchor, then partition or union, then dependency order (Fig 3). No nameable anchor means it is not a domain yet.

**R, the residual.**

- **Arity:** at least three overlapping conditions, conversation length, evidence change, and the machine's own report of coherence. This is a **union compound**, not one dial. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :55-56: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."* A longer context window clears the length region and leaves the changing-evidence intersection standing.
- **Symmetry:** C1 is symmetric (+, *"both hold at once"*, Operators table), C2 is ordered (a frame ranges against an anchor, Fig 2 :45). A pooled number cannot choose the arrow. Treating them as one symmetric quantity is a type error, not a hard question.
- **Scale:** per slot, and across scales. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Across turns, each exchange is a room in a chain (Fig 7), so the same loop runs at one scale per turn and a second loop runs across turns with `R_T` as its error signal (`THE_FORMULA.md` step 6).

**Domain 1, the belief frame (one machine's library Γ).**

- **Actors:** held terms, a candidate φ, the refusal operator ¬, the bond set.
- **Currency:** composition inside `closure(Γ)` and settlement against the ground; cost in bits and actions (Fig 12 :125-127).
- **Anchor:** none of its own. The belief frame alone is **not yet a domain**, because it has no nameable anchor. It becomes one only when paired with Domain 2.
- **Question type:** partition boundary, which compositions cross from held term to refused term.

**Domain 2, the ground and evidence frame.**

- **Actors:** observations `o'`, instruments, the world that changes.
- **Currency:** `R = |Γ(b,a) − o'|` per slot (Symbols table; `THE_FORMULA.md` step 1).
- **Anchor:** whatever settles the slot and does not change because any frame thinks so (Fig 2 :29). This is a real anchor, so Domain 2 is a domain.
- **Question type:** this is where "changing evidence" lives. When the world moves, a settled term and its refusal can both have ground support. Fig 6 :47: *"If a term and its refusal are both settled, the record holds a contradiction. Whether that is two scopes, an error in the ground, or a world that changed is not yet decidable here."* The figures name the undecidability; they do not resolve it.

**Domain 3, the channel across time (memory, context, turns as rooms).**

- **Actors:** successive states of the machine, the transcript or record, the maintainer of the channel.
- **Currency:** fidelity of the bracket across the handoff, measured by the round trip gap `R_T` (Fig 4 :30; Symbols table).
- **Anchor:** the ground must remain reachable. The channel is the thing that decays, not the ground (Fig 10 :24). Real anchor, so this is a domain.
- **Question type:** a room-chain question (Fig 7). Agreement between consecutive turns is cheap and is not progress.

**Domain 4, the verification frame (outside checker).**

- **Actors:** an expert or instrument outside the machine's closure.
- **Currency:** agreement and residual, with independence as the parameter (Fig 2 :31).
- **Anchor:** the ground, never agreement. Real anchor, so this is a domain.
- **Question type:** triangulation. A second reading from the same evidence pool is one witness wearing two names (Fig 6 :53).

**Partition or union.** Union, with overlap. The four domains share the same residual but have different anchors in Domains 2 to 4 and no anchor at all in Domain 1 alone. Merging them into one "consistency score" would aggregate away the only signal that says where to look (Fig 1 :22).

**Order by dependency (Fig 3).** Perception first: can the machine register `o'` at all through a channel that has not decayed (Fig 10 :25-28)? Vocabulary second: does it have terms for what the evidence affords, including a refusal term (Fig 12 :112-113)? Objective third: can it say what counts as progress per slot, that is, a shrinking residual, rather than "consistency"? Planning fourth: can it choose a revision under incomplete information? Learn and carry fifth: can it name what worked, verify it and carry a method rather than a recording (Fig 4 :22-25)? Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* Adding context to a machine with no refusal term optimises the first link and cannot rescue the third.

**Strain test applied before choosing figure lines.** An early reading wanted Fig 7 (room chain) to govern a single turn's internal consistency. That strains: Fig 7 governs handoffs between rooms, not the within-room loop. Re-census assigns Fig 7 to Domain 3 and the per-slot residual to Domain 2. No strain remains after that split. This re-census is recorded in section 6 and kept visible.

---

## 2. Figure census

| figure | bearing on R | verdict after census |
|---|---|---|
| **1 The Agent** | residual indexed per slot; frame-internal quantities disqualified | governs "consistency" as a forbidden self-score and fixes per-slot indexing |
| **2 The Ground** | anchor must not update; coherent drift; agreement worthlessness | governs C1 versus C2 and the verification frame |
| **3 Dependency Chain** | order by dependency; link with no instrument | governs where a long-conversation system breaks |
| **4 The Membrane** | methods cross, recordings do not; round trip gap | governs what a carried belief is and how decay is measured |
| **5 Mint Pipeline** | fifth kind, refuted; make the sought shape an ordinary term | governs changing evidence and the pre-binding discipline |
| **6 Closure / Reachability** | closure idempotent; record grows, reach can fall; both-settled open item | governs new evidence that cannot add an atom, and the world-changed case |
| **7 Room Chain** | agreement compounds, evidence does not; mirrors | governs the long-conversation chain |
| **8 Union Surplus** | no search adds an atom; independence | governs the union and the single-witness rule |
| **9 Leave / Arrive** | unbundle a union; describe before looking; filters not witnesses | governs the census order and the budget rule |
| **10 Ground Maintainer** | ground does not decay, channel does; verifier non-access; room follows question | governs Domain 3 and the outreach rule |
| **11 The Habitat** | capability is agent-and-habitat; isolation is substitution; harness proves wiring | governs why a longer context is not by itself more capability |
| **12 The Bond** | symmetric versus ordered bonds; negation is not a bond; ingredients are not the molecule | governs the C1/C2 type split and the refusal operator |
| **13 Minimum Viable Set** | no direct bond within a kind; lineage is the proof; unreachable is a verdict | governs the structural limit and the honest stop |
| **Operators table** | `+` symmetric, `→`, `⇒`, `−`, `⋛` ordered, `¬` unary | seven bonds plus one unary refusal |
| **Symbols table** | `R` is the aim and a slice; `R_T` is the round trip | fixes the measured quantities |

Every quoted string in the findings below was re-opened in `03-FIGURES_TEXT.md` before use. Strained readings are named, not smoothed.

---

## 3. Findings

### F1 - "Consistent" splits into two quantities, and one of them is a named collapse (decisive for the framing)

Fig 2 :13-15 describes mutual update: *"no anchor; each updates on the others they converge, and what they converge on is whoever had the most influence"*. Fig 2 :34: *"If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."* Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*

A machine that keeps its own beliefs mutually consistent, with no anchor outside the conversation, is in panel 1. The drift is coherent and therefore invisible from inside. Fig 1 :24-27 disqualifies the self-score: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*

So the question cannot be answered as posed with one verdict. Coherence with respect to a set of held terms is cheap and evidentially empty. Contact with a non-updating anchor per slot is the quantity worth asking about. Mode `general` for the split, `specified` for the prediction that a self-reported consistency number will be high exactly where the channel has drifted.

**Refuter:** show a frame that certifies its own contact with the ground using only quantities it produces, where the certification changes the ground's answer. That would collapse C2 into C1 and break Fig 2 :29. Triangulated: Fig 2 plus Fig 1, low overlap (anchor geometry versus metric disqualification).

### F2 - A machine cannot certify its own consistency from inside (mathematics-grade corroboration)

Fig 8 :34: *"A frame cannot reach its own metaframe. Godel's second theorem: a consistent system cannot prove its own consistency. Tarski: truth for a language is not definable"*. This is one of the figure's three proved-underivable rules, not an analogy the folder invented. The Stanford Encyclopedia entry on Gödel's incompleteness theorems states the second theorem as *"For any consistent system F within which a certain amount of elementary arithmetic can be carried out, the consistency of F cannot be proved in F itself"* (Raatikainen, SEP, 2025 revision; read 2026-11-23).

The scope is narrow and must be kept narrow. Gödel's theorem is about formal provability in a sufficiently strong theory, not about an LLM's conversational self-report. What carries over is the **shape**: a consistency claim issued from inside the frame under test does not settle the claim. An outside anchor is owed. The world source corroborates the shape; it does not derive the figure line, and the figure line does not licence a claim about any particular model architecture.

**Refuter:** produce a machine that proves its own freedom from false statements in a system that meets the theorem's conditions, or show the figure's use here fails because an LLM self-report is not a consistency proof at all. The second is a real limitation and is recorded as a strain in section 6. Triangulated: Fig 8 :34 (figure) plus SEP (independent mathematics), but the application to machines remains single-source on the figure side.

### F3 - An averaged consistency score hides the live slot

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :13: *"a global R near zero with one live slot residual is a legal state"*. Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

A machine can have a high overall agreement score across a long conversation while one belief, in one slot, is badly out of contact with the ground. That is a legal state under the figures, not a paradox. Asking "is the machine consistent overall?" asks the wrong question. The checkable question is "which slot has a residual that persists and does not trend down?" (`THE_FORMULA.md` step 2, which ranks terms by a residual that persists and does not trend down).

**Refuter:** show that the residual for a maintained belief is genuinely global, that is, one number whose change is identical across all slots and all grounds, with no slot-specific divergence under any instrument. Until such a measurement exists, the per-slot reading stands as `specified`, unmeasured. Triangulated: Fig 1 plus the formula's shrinking-test rule, low overlap.

### F4 - Long conversations decay the channel, not the ground

Fig 10 :24: *"the ground does not decay, the channel does"*. Fig 10 :25-28 names the failure forms: *"stale percepts, dropped transients, saturated metrics, pooled readings the output is not a verdict, it is you have lost touch"*. In a long conversation these are familiar: the early premise drops out of the working context, a transient becomes treated as settled, the context window saturates, and readings from different moments get pooled into one apparent position. The output of that state is not a false verdict. It is *"you have lost touch"*, a different failure genus.

Fig 7 :12-13: *"same closure, handed along; agreement compounds, evidence does not"*. Fig 7 :36: *"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."* A conversation in which every turn agrees with the previous one is one long room: motion without progress (Fig 7 :32). Progress per handoff needs two factors, *"the bracket's fidelity across the handoff the ground's pressure on the room"* (Fig 7 :37-39); zero either and the chain runs in place.

The knowledge-conflicts survey reports that in multiple rounds of dialogue, as counter-memory context increases, the cumulative proportion of belief alteration in the tested LLMs spans 20.7% to 78.2% (Xu et al., EMNLP 2024, appendix table; read 2026-11-23). That is a measurement of drift under accumulated context, not of truth. It corroborates the channel-decay shape at low overlap with the framework.

**Refuter:** a long conversation in which the bracket's fidelity is measured and held constant, and the ground's pressure is independently present, yet no belief can be revised. That would break Fig 7 :37-39. Triangulated for the channel shape: Fig 10 plus Fig 7 plus the AI source, different fields.

### F5 - Changing evidence needs a refusal, and accumulation cannot provide one

Fig 5 :53: *"refuted: a term we hold is wrong; a term is owed that says so"*. Fig 5 :55: *"Nothing leaves the library. What falls is the reach."* Operators table :58: *"a refutation is a negation, which is why a vocabulary without it can only accumulate"*. Fig 12 :112-113: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."*

A system that handles new evidence only by adding new terms will accumulate a held term alongside its contradiction. It cannot carry the correction, only the addition. Fig 6 :42-43: *"What is recorded only grows. What is reachable is derived, and it can fall."* A refusal adds a term and removes the refused term's standing to be composed over; the reach falls because something was added, not because anything was struck out.

This is the part of "changing evidence" that a longer memory makes worse rather than better. More stored context gives more material to accumulate and no operator to refuse.

**Refuter:** exhibit a machine vocabulary with no unary refusal operator that nevertheless removes a held belief's standing to be composed over when the ground moves, where the removal is not just a new addition that competes in a scoring function. If "refusal" is only a weighting change, the figure's distinction is not met. Triangulated: Fig 5 plus Fig 12 plus the Operators table, different figures with different roles.

### F6 - When the world changes, both a term and its refusal can be settled

Fig 6 :47, quoted in section 1, is the governing line for "changing evidence" in the strong sense. The record can hold a contradiction, and the framework says it is *"not yet decidable here"* whether that is two scopes, an error in the ground, or a world that changed. This is an **open item in the figures themselves**, not a gap in this derivation.

The honest consequence: a machine cannot settle, from the record alone, whether its old belief and the new evidence are a scope confusion, a bad instrument, or a world that moved. What it can do is narrow: keep the provenance of each ruling, keep the date, and keep the residual that fired (Fig 10 :62-64). Fig 10 :65-66: *"Provenance shows a ruling was reached legitimately. It never shows it was right: the ground does that, and a wrong ruling stays wrong however clean its record."*

**Refuter:** a decision procedure inside the record that discriminates two scopes from a changed world without a new ground reading. If one exists, the figure's open item closes and this finding is withdrawn. Single-source on the figure side, corroborated in shape by the philosophical literature on coherence versus correspondence (SEP, *The Coherence Theory of Truth*), which gives no internal test for truth either. Marked `single-source`, not upgraded.

### F7 - New evidence inside the same closure cannot move the wall

Fig 6 :21: *"MINT composes inside the closure and can never add an atom."* Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* Fig 8 :32: *"no search, however long, adds an atom"*. Fig 13 :115: *"The set is closed. The arrangements are not. That gap is why import exists."*

A long conversation that keeps feeding the machine evidence of the same kind re-arranges what it already holds. It does not add a primitive. Genuinely novel evidence arrives as an import from a frame whose closure differs, and an import needs a source gate (provenance) and a shadow test (explains a gap), Fig 8 :9-13 and Fig 6 :12-14. Fig 6 :24: *"Import from a live peer is debited against that frame's independence."*

**Refuter:** show a machine that acquires a new atom by re-arranging its existing vocabulary alone, where the atom is not derivable from what it held before and no external source was contacted. That would refute closure idempotence as applied here. Triangulated: Fig 6 plus Fig 8 plus Fig 13, low overlap between the wall, the surplus and the substrate.

### F8 - Agreement is useful only when the frames are independent

Fig 2 :31-32: *"Independence, between two frames, is how little they draw on the same evidence."* Fig 2 :40, quoted in F1. Fig 8 :47-48: *"Independence is one quantity read twice. How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus."*

Two conversations with the same model, the same prompt history and the same documents are one frame wearing two names. Their agreement is a pool talking. Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."* In the verification frame, a checker who has read the whole conversation and the machine's own account of itself has joined the frame being checked (Fig 10 :42).

**Refuter:** show that agreement between two readings that draw on identical evidence carries the same evidential weight as agreement between two frames that reach it separately. That would break Fig 2 :40 and the effective-sample-size arithmetic it names. Triangulated: Fig 2 plus Fig 8 plus Fig 10.

### F9 - The sought-for shape must be bound as an ordinary term before the run

Fig 5 :61-66 identifies a limit: *"A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term. It is not bound, it predicts nothing, and it accrues no residual, so nothing here can see it."* The remedy, Fig 5 :65: *"make the sought-for shape an ORDINARY TERM."* `THE_FORMULA.md` "Direction" says the same thing as a discipline: write down what an answer would look like, bind it, let it accrue a residual.

For this question the bound shape is the four-part list in section 0. Writing it down before the search is what makes the pre-registered refuter in section 4 possible. Without it, a search for "consistency" will find whatever it is looking for, because the direction of the question is not a term the loop can check.

**Refuter:** show that this shape, once bound, accrues no residual under any instrument while an unbound preference does. That would invert the Direction rule. Triangulated: Fig 5 plus the formula's Direction section, same framework but different textual source. Low overlap with the world literature except for the general pre-registration practice in science, which is recorded in `04_links_and_distribution.md`.

### F10 - The break is at vocabulary and objective, not at memory size

Fig 3 :24-27: *"Why the middle link is where chains usually break. Perception has obvious failures and obvious tests. Planning has obvious failures and obvious tests. The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."* Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

Fig 12 :115: *"having terms for what a situation affords was taken for a dictionary and it is a grammar."* A machine can hold a dictionary of facts and still have no grammar for revision: no term for "this held belief has stopped predicting," no term for "this is a different scope," no ordered bond from evidence to refusal. Adding tokens to the context grows the dictionary and does not write the grammar.

**Refuter:** show a system whose revision instrument exists and is used, with a measured per-slot residual and a refusal that fires, yet whose vocabulary has no terms for what the evidence affords. That would break the dependency order at Fig 3's middle link. Triangulated: Fig 3 plus Fig 12, low overlap (chain position versus bond vocabulary).

### F11 - Consistency is a property of the machine-and-channel, not of the machine alone

Fig 11 :39: *"And capability is a property of agent-and-habitat, never of the agent alone."* Fig 11 :40: *"An improvement that does not change contact changes nothing, however much it improves."* Fig 11 :66: *"Isolation is not removal of the habitat. It is substitution of one habitat for another."* Fig 11 :70: *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."*

A long conversation is a substituted habitat. It inherits actors the machine did not choose, and two failures are silent: what it failed to reproduce and what it unintentionally introduced (Fig 11 :68-69). A benchmark that scores consistency inside one cleaned transcript proves wiring. It does not show that the machine keeps contact with a ground outside the transcript.

**Refuter:** an agent-only improvement that moves the ground, measured as a change in the anchor's answer under the same habitat. The figure names this as the refutation of the capability claim (Fig 11 :72). Triangulated: Fig 11 plus Fig 7 (the room is the habitat at the conversation scale), low overlap.

### F12 - No figure line returns a machine-specific threshold, so the threshold is a declared gap

After re-census across all thirteen figures, the Operators and Symbols tables and the formula, no line gives a number of turns, a context length, a drift rate, a confidence threshold or a maximum number of simultaneous beliefs under which consistency is preserved. Fig 9 :32: *"you get a kind of thing, never the answer itself"*. Fig 13 :134: *"Unreachable is a verdict here, not a silence"*. Fig 8 :39: *"a search that finds nothing is never a proof of absence."*

This is a `gap` of the shape-not-a-name kind. More precisely, it is unreached rather than unreachable in principle: a real machine measurement could set a threshold, but this folder has taken no measurement, so none is asserted. "Unreachable is a verdict, not a silence." The verdict is that the threshold is owed to a ground, not that no threshold exists.

**Refuter:** a figure line, found by re-census, that does fix such a number, or a machine measurement that sets it. Until one fires, no threshold is smuggled in. Single-source on the gap claim (absence of a line), checked by re-census.

---

## 4. Pre-registered refuter

Required before the conclusion, per the exemplar's seat rule and `THE_FORMULA.md` "Direction": a falsifier written before the run is a design instrument. Written here before section 5 and before `07_the_tether_answer.md` was drafted.

The shape claim is refuted if any of the following holds:

1. **Anchor test fails.** A machine's consistency report changes the anchor's answer, so the anchor updates on the frame and Fig 2 :29 is broken.
2. **Refusal test fails.** A vocabulary with no unary refusal operator removes a held belief's standing to be composed over when the ground moves, with the removal not reducible to a new addition competing in a score (Fig 5 :53, Operators :58).
3. **Per-slot test fails.** A machine's residual is genuinely global with no slot showing divergent, non-trending mass under any instrument (Fig 1 :19, :22).
4. **Handoff test fails.** A chain of rooms with measured bracket fidelity and independently applied ground pressure still cannot revise any belief (Fig 7 :37-39).
5. **Space-discriminating test fires.** A measurement at the machine level shows whether a held belief survives because of its source or merely because of its reading, and the answer contradicts the contact account (Fig 9 :32; the instrument requirement from the exemplar's source-discrimination reading).
6. **Re-census produces the missing line.** A figure line is found that fixes a numerical consistency threshold, which would close the declared gap in F12.

If any fires, the corresponding finding is withdrawn and the audit is re-run from section 1. Until one is run, no part of this folder is `grounded`.

---

## 5. Findings summary with per-domain verdicts

Verdicts are kept separate and never averaged.

| domain | verdict | mode | status |
|---|---|---|---|
| D1 belief frame | needs a refusal operator; accumulation alone cannot revise | `specified`, structural | triangulated (Fig 5, Fig 12, Operators) |
| D2 ground and evidence | stable contact per slot is the target; both-settled contradiction is undecidable in-record | `specified` on the target, `general` on the open item | triangulated for contact, single-source for the open item |
| D3 channel across time | ground does not decay, channel does; agreement across turns is not progress | `specified`, unmeasured | triangulated (Fig 10, Fig 7, AI source) |
| D4 verification frame | independence decides whether agreement counts; verifier must not hold interiors | `general` structural | triangulated (Fig 2, Fig 8, Fig 10) |
| threshold | no line governs; unreached, not silence | `gap` | re-census checked |

---

## 6. Canonical usage check, retraction and confirmation log

Two local sources were read after the first findings and govern how the figures may be used: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `THE_FORMULA.md`. The canonical README says the figures *"outrank everything else in the repo"* and that *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* Its canonical limit is that the framework says what a missing thing would have to look like, *"a shape, not a name,"* and stops at the limit of the instruments.

| earlier reading | status after canonical check |
|---|---|
| Initial draft treated "consistent beliefs" as one quantity and looked for a single yes/no line | **Retracted and split.** C1 and C2 are different quantities with different symmetries and different anchors (Fig 2 :29 versus Fig 1 :24-27). Both readings are kept so the split is visible. |
| Fig 7 initially read as governing within-turn consistency | **Retracted by re-census.** Fig 7 governs handoffs between rooms, not the within-room loop. Reassigned to Domain 3. Matches the README's re-census rule. |
| "Gödel proves a machine cannot be consistent" | **Narrowed, not retracted.** The theorem is about formal provability in sufficiently strong theories. What carries over is the shape that a consistency claim from inside the frame does not settle itself. The stronger claim is refused. Recorded as a live strain below. |
| "shape, not a name" forbids naming a mechanism | **Narrowed and kept visible.** The README's phrase governs a *missing* primitive. Naming an already-available binding (a refusal operator, a retrieval step, a provenance record) is a binding from the engineering frame, provenance, not an invented primitive. See `05_what_shape_means.md` section 5b. |
| "changing evidence" initially treated as more data in the same frame | **Corrected.** Fig 6 :21 and Fig 8 :32 forbid new atoms by re-arrangement, and Fig 5 :53 requires a refusal. New evidence of a new kind is an import with a source gate. |
| F12 threshold read as unreachable in principle | **Narrowed to unreached at this budget.** A real machine measurement could set it; no measurement was taken. Fig 8 :40-43 distinguishes the two. |
| F2 self-certification | **Canonically confirmed.** Fig 8 :34 names the metaframe barrier directly; SEP is independent corroboration, not the source of the verdict. |
| F9 pre-binding the shape | **Canonically confirmed.** Both Fig 5 :65 and the formula's Direction section impose the discipline. |

### Strains recorded, not hidden

- **S1, live and narrowed.** Fig 8 :34 uses Gödel's theorem, a result about formal systems, to govern a machine's self-report. The application is a shape analogue, not a derivation. Kept as `single-source` on the machine side.
- **S2, dissolved by re-census.** Fig 2's non-updating anchor versus Fig 11's changing habitat. Different objects: the anchor settles, the habitat updates and is where actors come from (Fig 11 :73). No contradiction.
- **S3, dissolved by re-census.** Fig 7's mirror chain versus Fig 10's decaying channel. Different scales: one governs selection between rooms, one governs the link to the ground within and across them. Both apply to a long conversation.
- **S4, live open item.** Fig 6 :47 leaves two scopes, a ground error and a changed world undecidable in the record. This is the framework's own open item, not a defect in this folder. Carried into `07` and `09`.
- **After re-census: two live narrow strains (S1, S4), none hidden, none smoothed.**

---

## 7. Conclusion pointer

The shape survives; the ordinary term does not. A machine cannot maintain "consistent beliefs" in the C1 sense and have that mean anything about the world. It can maintain C2-like contact under conditions the figures state and the refuter tests: a non-updating anchor per slot, a channel whose decay can be measured, a refusal operator, independent checkers and a lineage. Whether any actual machine does so is a ground question this folder cannot settle. See `07_the_tether_answer.md` for the synthesized answer and `09_watson_answer.md` for the canonical WATSON shape.
