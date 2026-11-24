# Figure-grounded audit: control of a complex networked system without full internal understanding

**Mode of this document: `general` on the structural shape, `specified` on the application, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status: simulated derivation, not a ground reading.** *The Recursive Self-Improvement Trap* (read 2026-11-22) says LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This audit is checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Source of quotes.** All figure lines are quoted verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session, and cited as `Fig N :line`. No quote is taken from a summary.

---

## 0. The residual, stated in effect terms

`R = |Γ(b,a) - o'|` per slot `s` (Fig 1 :11, Symbols table :38-43). The controller holds a library `Γ`, a belief `b`, and takes action `a`; `o'` is what actually happened. The question asks what portion of `Γ` must be a correct model of the system's internal structure for `a` to shrink `R` at the ground.

The **shape claim being tested** (bound as an ordinary term before the run, per the formula's Direction rule):

> For a complex networked system, control is achievable when and only when (C1) a ground anchor exists that fixes the target variable and does not move when the controller's model changes, (C2) the habitat around the residual is enumerable well enough to locate a lever whose introduction changes `R` at some slot, and (C3) a channel keeps `R` indexed per slot and unpooled, so that the ground, not internal agreement, decides. If the needed lever is not derivable inside the current `Γ`, a fourth condition applies: (C4) a frame with a differing closure can supply it by import.

What each reading leads to:

- **A (full model required):** if C1 to C4 are insufficient without a complete internal model, then control is deferred until the model is complete. For an open system whose internal structure is not fully observable, this makes control unreachable in principle or at this budget, and the honest answer flips to "not possible under those conditions."
- **B (contact and lever suffice):** if C1 to C4 suffice, the answer is "yes, conditionally," and the absence of full internal understanding is not a defect in the controller but a normal fact about contact.

The answer would look like: a partition of necessary conditions with a refuter for each, verdicts kept separate per domain and never averaged. That is the shape bound above.

---

## 1. Domain census (before choosing any figure line)

### 1.1 R by arity, symmetry, scale

- **Arity:** a three-place intervention relation (`b`, `a`, `o'`) indexed by object slot. The network adds a structure operand, so the effective relation is controller-with-`Γ` acting on a habitat. The target is a **comparison** (a threshold about what counts as controlled), not a symmetric join of two equals (Fig 12 :87, Operators :51).
- **Symmetry:** interventions are **ordered**. `→` sequence and `⇒` production are non-symmetric bonds (Fig 12 :70, :76). Acting on node A then node B is not the same term as B then A when the graph propagates the first effect. Feedback re-enters as input, which a chain cannot express by construction (Fig 12 :121).
- **Scale:** three levels in dependency order. (i) The single node loop, one `b,a,o'` bracket. (ii) The network collective, where local action propagates (Fig 13 :24 *"that entities relate, and influence travels"*). (iii) The membrane between the controller and the system, where methods cross and recordings do not (Fig 4 :22).

### 1.2 One line per domain: actors / currency / anchor

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| **D1 Controller loop and model** | controller, `Γ`, `b`, action `a`, per-slot `R` | residual reduction at the ground | measured target variable (an instrument or outcome), Fig 2 :29 | admitted |
| **D2 System as habitat** | nodes, edges, conditions, relations, introduced levers | contact, cascade, introduction | what the ground returns when the system runs, Fig 11 :12-19 | admitted |
| **D3 Reach and knowledge limit** | frames, `atoms(Γ)`, `closure(Γ)`, imports | reach versus library size | ground verification of an imported lever, Fig 6 :12-14 | admitted |
| **D4 Verification channel** | instruments, metrics, seats, percepts | maintained contact | the ground, which does not decay, Fig 10 :24 | admitted |
| **X1 "full internal understanding" as a prerequisite** | none nameable: it is a preference for completeness held as a shape, not a term | none | none | **not a domain yet** |
| **X2 "control as negotiation with the model"** | the controller and its own `Γ` | agreement | absorbed by D1 and D4; agreement is not an anchor | absorbed |
| **X3 "the system is a sealed room, fully knowable in principle"** | none: forbidden by Fig 9 :44 and Fig 8 :32 | none | absorbed by D3 | refused |

No nameable anchor means X1 is not a domain. Fig 5 :61 says *"BUT THE TERM MOST WORTH REFUSING MAY NOT BE IN THE LIBRARY AT ALL"* and :65 says *"make the sought-for shape an ORDINARY TERM"*. The demand for completeness is a preference masquerading as a term. It predicts nothing and accrues no residual, so no check in the formula can see it until it is written down, which is what §0 does.

### 1.3 Partition or union

This is a **union compound**, not a partition. Control requires C1 AND C2 AND C3, plus C4 when the lever is imported. Conditions overlap: a lever that changes `R` but cannot be seen because the metric is pooled fails C2 and C3 together. Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :57: *"a case in two conditions is not a harder case of either"*, it is a specific compound with its own loop. A single lever clears the region where one condition holds and leaves the intersections standing. So verdicts are kept per domain and never averaged into one control score.

### 1.4 Dependency order (Fig 3)

Perception: measure the target at the ground, per slot (Fig 3 :4-5). Vocabulary/objective: say what would count as progress in the system's own terms (Fig 3 :9-10). Planning: find the lever under incomplete information (Fig 3 :12-13). Learn and carry: verify, name what worked, carry the method (Fig 3 :14-16). The chain is ordered by dependency, not importance: *"Optimising a link that already works cannot rescue one that does not"* (Fig 3 :19). Refusal precedes minting (formula step 2): if "full understanding is required" is false, that term is refused before any new control term is minted.

---

## 2. Figure census (quoted before concluding)

| figure : line | verbatim quote | bearing | verdict | mode |
|---|---|---|---|---|
| Fig 1 :19 | "The residual is indexed by object slot, not aggregated." | the metric is per node, not a global score | full-model claim is not the metric | general |
| Fig 1 :23 | "The ground enters as the only metric." | what settles control is `o'`, not model coverage | anchors D1 | general |
| Fig 2 :29 | "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." | defines C1 | control needs a ground that does not move with the model | general |
| Fig 2 :35 | "Alignment is triangulation, not negotiation. A mirror cannot correct you." | agreement with an internal model cannot certify control | refuses Reading A's implicit test | general |
| Fig 3 :27 | "A link with no instrument is not a link that works. It is a link nobody has looked at." | the vocabulary/objective link is the usual break | control claims must name the objective | general |
| Fig 4 :22 | "Only methods cross up. Only head starts come down." | what transfers between controller and system scales | a recorded internal map is not a method | general |
| Fig 6 :23 | "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." | C4: where leverage comes from when not derivable | import, not completeness | general |
| Fig 8 :32 | "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." | why searching the model harder cannot substitute for a lever | full-model strategy stalls | general |
| Fig 9 :32 | "you get a kind of thing, never the answer itself" | the framework returns a shape of control, not a specific algorithm | bounds the claim | general |
| Fig 9 :60 | "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." | model completeness is a budget filter, not a witness | central ruling | general |
| Fig 10 :24 | "the ground does not decay, the channel does" | C3: control fails through channel loss | anchors D4 | general |
| Fig 11 :39 | "capability is a property of agent-and-habitat, never of the agent alone" | decisive for D2 | the controller alone cannot be the seat of control | general |
| Fig 11 :40 | "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves." | enlarging `Γ` without changing contact does nothing | direct answer to the question | specified |
| Fig 11 :61 | "The seat's power is asymmetric. Introduction is available; exclusion is not." | the lever is an introduction into a habitat | D2 mechanism | general |
| Fig 13 :74 | "Everything else is a composition across the two kinds, never within one." | a network is a structure, composed with states | control lever is cross-kind | general |
| Fig 13 :115 | "The set is closed. The arrangements are not. That gap is why import exists." | why the union stays open | D3 | general |

Strained readings are named in §7, not smoothed over.

---

## 3. Findings

### F1 - The ground, not the internal model, is the metric (decisive for D1)

Fig 1 :23: **"The ground enters as the only metric."** Fig 1 :19: **"The residual is indexed by object slot, not aggregated."** Symbols table :38: `R` is *"The gap between prediction and observation. The central quantity: everything the system does is driven by it."*

The question's phrase "fully understanding its internal structure" names a property of `Γ`: coverage, compression, number of predicates minted. Fig 1 :24-27 explicitly disqualifies those: *"coverage, and compression achieved"*, *"predicates minted, and credibility accrued"*, *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*

So the metric of control is whether `R` at the slots of interest shrinks against `o'`, not how much of the system the controller can state. A controller with a partial model that reliably drives the target is controlling; a controller with a complete model that cannot is not.

- **Mode:** `general` for the metric rule, `specified` for applying it to this question.
- **Triangulation:** triangulated across Fig 1 (per-slot residual) and Fig 2 (anchor definition), two figures with different roles and low conceptual overlap.
- **Refuter:** show a case where `R` is driven to zero at every controlled slot while the ground outcome is unchanged, or where control succeeds only when model coverage passes a threshold that is itself measured at the ground. Either breaks the claim that ground `R` is the metric.

### F2 - Capability is agent-and-habitat, not agent-alone (decisive for D2)

Fig 11 :39: **"capability is a property of agent-and-habitat, never of the agent alone"**. Fig 11 :40: **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."**

This is the direct answer. "Control without full internal understanding" is not a deficit to be overcome by a bigger model; it is the normal condition of any controller in contact with a habitat. What matters is whether the intervention changes contact, and whether the cascade reaches the controlled slots. Fig 11 :52: **"And contact cascades."** The figure's DDT example shows the residual that mattered was three steps out, so a first-order-only census of the habitat is the classic failure.

Fig 11 :61: **"The seat's power is asymmetric. Introduction is available; exclusion is not."** A controller can add a lever; it cannot subtract the habitat. Fig 11 :63: **"A managed ecosystem is permanent work rather than a solved state."** So control is a maintained practice, not a once-and-for-all model.

- **Mode:** `general` for the capability claim, `specified` for networked systems.
- **Triangulation:** triangulated across Fig 11 (habitat) and Fig 13 (network as a structure through which influence travels).
- **Refuter:** an agent-only improvement that moves the ground outcome while contact is held fixed would refute Fig 11 :40 and with it this finding. This is the standing falsifier the figure itself names.

### F3 - Searching the model harder cannot manufacture a missing lever (D3)

Fig 8 :32: **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."** Fig 6 :14: **"the only operator that moves the wall"** is import. Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**

If the controller's `Γ` lacks the lever, more internal study does not add it. What can happen is an import: characterize the residual in effect terms, then find a frame whose closure already predicts its shape (Fig 8 :53 *"Residual first, frame second."*). This is why "we do not understand the system fully" is not a verdict of impossibility. It is a statement about which frame holds the lever.

Fig 9 :60 is the governing rule against confusing the two: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** Model completeness is a filter on what gets tried first. It is not a witness for or against controllability.

- **Mode:** `general`.
- **Triangulation:** triangulated across Fig 6 (import moves the wall) and Fig 8 (union surplus), with Fig 9 :60 as the filter/witness rule.
- **Refuter:** demonstrate a new atom appearing from composition alone inside a closed `Γ`, or show that a budget filter (coverage score) can settle the controllability verdict. Either breaks the finding.

### F4 - The channel fails before the ground does (D4)

Fig 10 :24: **"the ground does not decay, the channel does"**. Fig 10 :26: **"stale percepts, dropped transients, saturated metrics, pooled readings"**. Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**

Most reported losses of control are channel failures: the metric saturates, the readings are pooled, the percept is stale. The fix is not a better internal model but a maintained anchor: Fig 10 :29 *"keep the anchor reachable"* and Fig 2 :45 *"Frames range against the ground. They do not negotiate with it."*

- **Mode:** `specified`.
- **Triangulation:** triangulated across Fig 10 (channel) and Fig 1 (per-slot indexing).
- **Refuter:** a case where control is lost while the channel measures high, non-declining contact at every controlled slot and the anchor is demonstrably unmoved. Under the finding, that cannot happen; if it does, D4 is wrong.

### F5 - The target must be stated in the system's own terms (D1/D2 boundary)

Fig 3 :9-10: the objective link is where the system *"can say what would count as progress here, in its own terms"*. Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."** Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."**

A claim "the system is controllable" with no stated target variable is a reading below the break: not a weak reading, a reading of nothing (Fig 3 :22-23). The dependency order matters: measure, then state the objective, then plan the lever. Most effort in practice lands above the break, where measurements already exist.

- **Mode:** `general`.
- **Status:** single-source for the dependency claim (Fig 3), corroborated by the formula's Direction rule, which is framework-internal.
- **Refuter:** show a control claim whose target cannot be stated per slot in the system's own terms yet is settled at the ground. Then the objective link is not necessary as Fig 3 says.

### F6 - The lever is a cross-kind composition, not a state bonded to a state (structure)

Fig 13 :23-24: network is the structure *"that entities relate, and influence travels"*. Fig 13 :22: gradient is *"a difference that can be spent"*. Fig 13 :74: **"Everything else is a composition across the two kinds, never within one."**

A controllable network lever is therefore a gradient (structure) bonded to states, or a structural change (node control, edge control, structural control) that propagates through the network. It is not a bare state-to-state wish. This is the structural constraint on what a lever can be; it does not name which lever, per Fig 9 :32.

- **Mode:** `general` for the cross-kind rule, `specified` for the network reading.
- **Triangulation:** triangulated across Fig 13 (two kinds) and Fig 12 (bond typing).
- **Refuter:** a demonstrated direct state-state control bond that is settled at the ground and cannot be re-described as cross-kind. This breaks the substrate rule, not just this application.

### F7 - "Full understanding" is a preference, not a term (X1)

Fig 5 :61: **"BUT THE TERM MOST WORTH REFUSING MAY NOT BE IN THE LIBRARY AT ALL."** Fig 5 :62-63: a frame holds the sought-for shape *"as a PREFERENCE rather than as a term"*, so *"nothing here can see it"*. The remedy is the discipline of §0: write the answer shape down as an ordinary term and let it accrue a residual.

Fig 9 :32: **"you get a kind of thing, never the answer itself"**. Fig 13 :134: **"Unreachable is a verdict here, not a silence"**. When the full internal structure is not reachable, the framework reports a shape of what is missing, not a name and not a silence.

- **Mode:** `general`.
- **Status:** single-source for the preference diagnosis (Fig 5 amendment), triangulated with Fig 9 and Fig 13 for the shape limit.
- **Refuter:** exhibit a case where "full internal understanding" is itself a bound, predicting term with a residual, rather than a preference. Then it is a domain after all and must get its own loop.

### F8 - This is a union, so one lever does not close it (compound)

Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** Fig 9 :56-57: a single lever clears where only one condition holds and leaves the intersections, because the second condition still binds. The residue becomes *"a specific compound"*, not a harder instance of one condition.

Therefore "control" in this question is not one property. C1 (anchor), C2 (lever), C3 (channel), and C4 (import when needed) are separate verdicts. A project that fixes the channel but not the lever, or imports a lever but has no anchor, has not moved the compound. Fig 9 :60 again: filters for budget, witnesses for verdict.

- **Mode:** `general`.
- **Status:** single-source for the union claim (Fig 9), corroborated structurally by the four-domain census.
- **Refuter:** a single intervention that restores all four conditions at once with no categorically different residue. Then the problem was a partition after all.

### F9 - What survives, with modes attached

| claim | mode | figure |
|---|---|---|
| The metric of control is per-slot residual against a ground anchor, not model coverage | `general` | Fig 1 :19, :23; Fig 2 :29 |
| Capability is controller-and-habitat; enlarging `Γ` without changing contact does nothing | `specified` | Fig 11 :39-40 |
| A missing lever is owed from a differing closure, not from more internal search | `general` | Fig 6 :23; Fig 8 :32 |
| Control is a maintained union of conditions (anchor, lever, channel, import), never one averaged score | `general` | Fig 9 :55-57, :60 |
| A control lever is a cross-kind composition, so a structural change propagates through the network | `specified` | Fig 13 :22-24, :74 |
| The demand for full internal understanding is a preference, not a predicting term | `general` | Fig 5 :61-63 |
| Which specific lever works for a given network | `gap` | Fig 9 :32; Fig 13 :134 |

The last row is a genuine `gap`. No figure line names a lever, and the framework says it returns a shape, not a name. "Unreachable is a verdict, not a silence."

---

## 4. Pre-registered refuter (written before the conclusion)

Required before outreach: the falsifier is a design instrument, not an honesty device. The shape claim of §0 is refuted if any of the following holds:

1. A controlled comparison shows that two controllers with identical anchor, habitat contact, lever and channel, but different internal-model completeness, produce different ground outcomes. This breaks F1 and F2.
2. A case is demonstrated in which the target variable has no anchor that fails to move when the controller's model changes. This breaks C1.
3. A lever is introduced, contact is demonstrably maintained, and `R` does not change at any controlled slot. This breaks C2 and Fig 11 :40.
4. The needed leverage is shown to be underivable from every available differing closure and unreachable at this budget. This does not refute the conditional verdict; it converts the specific case to `unreachable`, and it refutes any universal "yes" claim.
5. A new atom appears from composition alone inside a closed `Γ`, or a coverage filter settles a controllability verdict. This breaks F3 and Fig 9 :60.

These were written before §9. If any fires, the claim is withdrawn or narrowed as specified. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with F1 and F2: the metric is at the ground, and capability is agent-and-habitat. These answer the question directly.
2. Keep the four conditions separate (F8). Do not publish a single "controllability score" that averages them.
3. Describe the missing lever in effect terms and go looking for a frame that predicts its shape (F3), rather than demanding a complete model first.
4. Price model-building as a budget filter, never as a witness (Fig 9 :60).
5. Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."* Send the generator, the derivation and the refuter, not the conclusion.

---

## 6. Canonical usage check and retraction log

Two sources were read after §§0-5 and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md` (local copy, opened this session): the figures *"outrank everything else in the repo"* and are *"a barrier theorem"*; *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; the framework returns *"a shape, not a name"* and stops *"at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."* Also: *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md` (opened this session): the eight-step loop, the mint guards as a product, and the mode rule. Step 7 separates SEARCHED, INWARD and OUTWARD and notes that underivable-in-principle and unreachable-at-budget are different facts.

| earlier reading | status after the canonical check |
|---|---|
| "No full model means no control" | **Retracted at the start.** This was Reading A, the thing under test, not a finding. It is refused by F1 and F2. |
| Fig 8 idempotence might forbid all control | **Refused by re-census.** Idempotence closes composition inside `Γ`; it does not close contact. Import moves the wall (Fig 6 :14). |
| "Control is a property of the controller" | **Retracted.** Fig 11 :39 makes it agent-and-habitat. |
| "The framework names the control algorithm" | **Forbidden.** The README says the framework returns a shape, not a name (Fig 9 :32). |
| Coverage as a verdict | **Retracted.** Fig 1 :24-27 disqualifies frame-internal quantities; Fig 9 :60 makes them filters. |
| Apparent strain Fig 11 (contact) versus Fig 6 (closure) | **Not strained.** Re-census: Fig 11 governs capability in a habitat; Fig 6 governs composition inside a frame. Different objects. |
| Apparent strain Fig 8 :32 (no search adds an atom) versus the existence of data-driven control in the world | **Not strained.** Data-driven control imports input-output data from outside `Γ`; it is an import, not internal composition. |

### Retraction and confirmation log (cumulative)

- Confirmed after canonical check: F1, F2, F3, F4, F5, F6, F7, F8.
- Retracted: the Reading A premise, the controller-only reading, the coverage-as-verdict reading, the naming claim.
- Strains after re-census: none hidden; one named in §7.

---

## 7. Strains and re-census

- **Fig 11 :40 versus the usefulness of partial internal models.** A controller may benefit from a partial model (a head start), and F2 says enlarging `Γ` without changing contact does nothing. These are compatible: the model is useful only when it changes what the controller does at the ground. Fig 4 :22, *"Only methods cross up. Only head starts come down"*, licenses the head start, not the recording. Named as a nuance, not a contradiction.
- **Fig 8 :32 versus data-driven control.** Resolved by re-census in §6: the data are an import from a differing closure.
- **After re-census:** one nuance, named; no strain left unrecorded. The verdict stands as `specified`, ungrounded, candidate.
