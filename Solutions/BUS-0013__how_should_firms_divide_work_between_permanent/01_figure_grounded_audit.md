# Figure-grounded audit: BUS-0013, dividing work between four governance modes

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every finding carries a mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From *The Recursive Self-Improvement Trap*, opened 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the business question it reports on.

**Sources.** Figures quoted verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line` against the figure's own line numbers. Also `FRAMEWORK/figures/THE_FORMULA.md` and `FRAMEWORK/reference/FIGURES_README_canonical.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

R = |Γ(b,a) − o′| per slot s (Formula step 1; Symbols table, `R`). The slot is a **unit of work**, not a person and not a department:

- **b**: the firm's belief about what the market will pay for, formed from its own history and inherited priors.
- **a**: the allocation act: assign this work slot to a mode (inside the closure, imported from a differing closure, composed by a non-person generator, or left unfilled).
- **Γ(b,a)**: what the firm's staffing library predicts it can deliver, at what cost, quality and lead time.
- **o′**: what the market actually returns: delivered work, defects, rework, lead time, and the survival of the capability that produced it.
- **s**: the work slot. R is indexed per slot and per time, never as a single firm-wide labour ratio.

> Fig 1 :19 "The residual is indexed by object slot, not aggregated."
> Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."

The phenomenon to explain is not which of the four modes is cheapest. It is **which mode keeps R small for which kind of work slot, while the firm's reach keeps moving and its channel to the ground stays reachable**. A frame that answers with a fixed percentage mix has already aggregated across slots and thrown away the only signal that says where to look.

State the residual as: *why does the gap between what a firm's staffing predicts it can deliver and what its market actually pays for stay small for some work slots under one governance mode and grow quickly for others under the same or another mode?* This is an effect description. It names no theory, no "core", no "flexibility", no "strategic workforce". Those are candidate names withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction") before the run: a per-slot rule with (i) a nameable ground for each mode, (ii) a distinct failure mode for each, and (iii) an instrument that discriminates a failure of one condition from a failure of another. Until bound, the shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." The same line names candidates: a measurement, an experiment, a counter, a market, a patient outcome. Fig 2 :30 "If it moves when you push on it, it is not an anchor." A vendor's quoted rate, an internal utilisation metric and an analyst's staffing benchmark all move when pushed; they are instruments at best. Viable anchor: the market's realized payment for the delivered work, measured per work slot.

**Status of the four names.** Employee, contractor, supplier and automation are not domains. They are bindings from the management frame onto structural conditions the figures already provide: inside-closure composition (Fig 6 :21), import from a differing closure (Fig 6 :23), a settled molecule used as an atom (Fig 12 :104), and generator versus recording (Fig 4 :22, :25). Treating them as four primitive kinds would be a premature name, exactly the error Fig 9 :32 warns against: "you get a kind of thing, never the answer itself".

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry and scale of R

- **Arity.** R is a four-place relation: work slot s, firm Γ, allocation act a, market return o′, ordered by time t. Allocation is a mapping from slots to governance modes, so it carries an **ordered** bond (`→`, sequence: "A then B; B needs A to have happened", Fig 12 table) and a **comparison** bond for "should" (`⋛`, "a threshold relation between two quantities", Fig 12 table, Operators table :48). It is not symmetric: the firm and the market are not interchangeable, and neither are the four modes.
- **Symmetry.** "Keep R small" is a threshold relative to what the market pays, not an absolute quantity (Fig 12 :86-89; Operators table :48-51). Allocation is asymmetric in time: a capability outsourced and then lost is not recovered by reversing the contract (Fig 11 :61-62, introduction available, exclusion not).
- **Scale.** Four scales are in view: the single worker's step loop; the firm as a population with *"many agents, a shared library, and something that ranks what they produce"* (Fig 4 :5); the inter-firm habitat of suppliers and contractors (Fig 11 :43-48); and the time channel across contract renewals and skill decay. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The internal work loop** (employee) | employees, routines, the firm's Γ | actions and residual reduction | yes: realized market payment for the delivered work (Fig 2 :29) | admitted |
| **D2 The external closure** (contractor, supplier) | contractors, suppliers, their own Γ and library | contracted deliverables, cost, imported atoms | yes: delivered work measured against the ground, with source gate and shadow test (Fig 6 :12-13; Fig 8 import panel) | admitted |
| **D3 The composition of work** (bonds and arrangement) | atoms (tasks) and the bonds between them | reach, |φ| cost, bits versus actions | yes: settlement, *"then check it against the ground, then carry it up"* (Fig 5 :32) | admitted |
| **D4 The channel and the generator** (automation) | instruments, metrics, percepts, non-person generators | contact and fidelity | yes: *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **X1 A fixed optimal percentage of each mode** | none; a number | cost efficiency | **no** ground independent of the particular work slot's market | not a domain yet |
| **X2 "Cheapest labour source" as sole criterion** | the vendor | price | price is a frame-internal quantity that can be pushed (Fig 1 :27) | excluded as a verdict; retained as a filter |

X1 and X2 fail the anchor test and are excluded before any figure line is applied. This is a structural exclusion, not a claim that cost never matters. Cost is a budget filter (Fig 9 :60), never a witness.

### 1.3 Partition or union

D1 and D3 overlap: Γ is inside the firm loop, so their overlap is a compound with its own loop. D2 and D4 overlap: the coordination channel crosses the seam between firm and supplier, so that overlap is a second compound. The whole question is a **union**, not a partition.

> Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."
> Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
> Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

The unbundled conditions are:

- **C1 contact maintained**: the work still gets paid for, and the firm's bracket still matches the residual (Fig 10 :24-29).
- **C2 reach renewed**: the firm meets closures that differ from its own, so the wall moves (Fig 6 :23).
- **C3 channel faithful**: coordination does not degrade into pooled readings (Fig 10 :26).
- **C4 generator, not recording**: delegated work can produce a new result rather than replay one (Fig 4 :22-25).

A firm failing only C1 and a firm failing only C4 are not different degrees of one failure; they are different compounds and need different instruments. *The Library of Babel* states the same stop: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> Fig 3 :20 "The chain is ordered by dependency, not by importance."
> Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at."
> Fig 3 :29 "Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."

Order: 1 perception (can the firm read which work the market pays for?) → 2 vocabulary (does Γ have terms for what each work slot affords and what would count as done?) → 3 objective (can it state the comparison that counts as progress per slot?) → 4 planning (allocate the slot) → 5 learn and carry (name what worked, verify, import what it did not have). The middle link is the one with no instrument. Fig 12 :111 says a vocabulary holding only ingredients can name a state and cannot name a route to one. Most staffing-analysis effort lands above the break because that is where the measurements already exist (Fig 3 :29-30). The choice of governance mode is step 4, but the failure is usually at steps 2 and 3.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not which mode wins |
| 2 The Ground | market is a named anchor; independence and correlation valence | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across size; methods up, recordings down; R_T | governs scale transfer and the generator/recording distinction |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs whether a new staffing capability can be admitted |
| 6 Closure / Reachability | import is the only operator that moves the wall | decisive for contractor/supplier as a function, not a label |
| 7 Room Chain | same closure handed along; fidelity times ground pressure | governs repeated vendor reviews and internal agreement |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and the source gate |
| 9 Leave / Arrive | union versus partition; describe residual first; filters not witnesses | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; keep anchor reachable | governs quick loss and automation oversight |
| 11 The Habitat | capability agent-and-habitat; valence relative to residual; introduce not subtract | decisive for D1 and D2 |
| 12 The Bond | bonds, isomer, catalyst, functional group, two currencies | governs why a governance mode flip changes value |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop |

**Strain test applied.** An early attempt to apply Fig 13's six physical terms to "workforce types" only fit by calling an employee energy and a contractor a gradient. That is a strain, so Fig 13 does **not** govern staffing composition. Re-census sends Fig 13 to the honest-stop role only (section 7, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about firms, `grounded` only if settled by a measurement. None is `grounded`.

### F1: Allocate per work slot, never by a firm-wide mix ratio

**Mode: `general` with a `specified` consequence for method. All domains. Status: figure-derived (Fig 1, Fig 9).**

Fig 1 :19 and :22 (quoted in section 0) are decisive. A headline such as "70 percent permanent, 20 percent contractor, 10 percent automated" is an aggregate. It reports the denominator, not the live slot. Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces." A staffing ratio is produced by the staffing process and cannot score that process. Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

**Refuter:** an aggregate mix ratio that predicts, prospectively and per named work slot, which slot will lose contact with the ground next. If one exists, F1's methodological consequence is false.

### F2: The market is the anchor, not internal efficiency or vendor price

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 2 and Fig 1, low overlap: anchor rule versus frame-internal rule).**

Fig 2 :29 names the anchor; Fig 2 :30 disqualifies anything that moves when pushed. Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." Coase 1937 supplies an independent, low-overlap corroboration at the boundary question: *"The main reason why it is profitable to establish a firm would seem to be that there is a cost of using the price mechanism."* That is a real cost at the make-or-buy seam, but it is a **margin**, not a fixed answer, and it must be measured at the ground rather than assumed from a rate card.

**Refuter:** a documented reallocation that lowers internal cost while the market's payment for the output is unchanged or falling, and that the firm still records as an improvement. That is channel decay with the anchor unmoved (Fig 10 :24), and it falsifies any claim that internal efficiency settled the allocation.

### F3: Internal and external work do different work

**Mode: `specified`. Domains D1, D2, D3. Status: triangulated (Fig 6, Fig 8 and Fig 13, three distinct roles).**

> Fig 6 :21 "MINT composes inside the closure and can never add an atom."
> Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."
> Fig 6 :14 "the only operator that moves the wall"
> Fig 8 :45 "Two frames together reach what neither reaches alone."
> Fig 13 :115 "The set is closed. The arrangements are not. That gap is why import exists."

Permanent work composes inside the closure. It keeps the kernel, the tacit knowledge that does not travel in a specification (Fig 4 :20). But closure is idempotent: Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." Contractors and suppliers are the **import** path: the only operator that moves the wall. This is the figure-grounded reason to use external work at all; it is not cheapness. It is access to an atom the firm does not hold. Imports carry a source gate and a shadow test (Fig 6 :12-13), and a wrong atom costs more than starting from primitives (Fig 6 :24). Fig 8 :52: "Only the record of where each came from separates them, and the surplus lives only where the closures differ."

The two external modes differ by bond. A contractor supplies a **head start** that composes inside the firm's closure (Fig 4 :22, only head starts come down). A supplier supplies a **settled molecule** that becomes an atom for whatever the firm composes over it (Fig 12 :104). Confusing the two is a bond error, not a price error: the same deliverable under a different bond is a different substance (Fig 12 :5).

**Refuter:** a firm that renews its reach across a habitat change solely by composing inside its own closure, with no atom entering from a differing closure, and that still passes the ground test. That breaks idempotence and F3 with it. A second refuter: two external arrangements with identical deliverables and identical bonds that nonetheless behave differently, with no difference in ground contact.

### F4: Automation is a generator or a recording, and a harness proves wiring, not capability

**Mode: `specified`. Domain D4. Status: triangulated (Fig 4, Fig 11 and Fig 10, low overlap).**

> Fig 4 :22 "Only methods cross up. Only head starts come down."
> Fig 4 :25 "A recording carried upward looks like knowledge and is a description of one occasion."
> Fig 11 :40 "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."
> Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."

An automated system is admissible as a **method that can be reapplied** (a generator), or it is a replay of one success, which Fig 4 :25 calls a recording. The test is not whether it looks intelligent: Fig 11 :36 "Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground." The test is whether it changes contact.

Human-factors work corroborates at low overlap. Bainbridge 1983 writes: *"The second irony is that the designer who tries to eliminate the operator still leaves the operator to do the tasks which the designer cannot think how to automate."* And: *"By taking away the easy parts of his task, automation can make the difficult parts of the human operator's task more difficult."* That is Fig 10 :26 at a different stratum: the residual is not removed, it is moved into the channel and into the human who must take over. Dekker and Woods 2002 put the allocation question itself in doubt: *"Quantitative 'who does what' allocation does not work because the real effects of automation are qualitative: it transforms human practice and forces people to adapt their skills and routines."* That corroborates the refusal to treat "automated systems" as one slot in a fixed allocation list. Woods 2002 adds the stretched-systems warning: *"every system is stretched to operate at its capacity; as soon as there is some improvement, for example in the form of new technology, it will be exploited to achieve a new intensity and tempo of activity."* A productivity gain from automation is consumed unless the ground moves.

**Refuter:** an automated system whose improvement moves the ground (a market test it previously failed now passes), which would show capability, or a system that passes only inside a harness, which would confirm the recording reading. A firm that automates a slot and whose bracket fidelity and ground pressure both stay high while performance collapses would break F4.

### F5: Quick loss is channel failure, not ground decay

**Mode: `specified`. Domain D4. Status: triangulated (Fig 10 and Fig 7, low overlap: ground maintainer versus room chain).**

> Fig 10 :24 "the ground does not decay, the channel does"
> Fig 10 :26 "stale percepts, dropped transients, saturated metrics, pooled readings"
> Fig 10 :28 "you have lost touch"
> Fig 7 :37 "Progress per handoff has two factors. Zero either and the chain runs in place:"

A work division loses its value when contact with what pays degrades while the market keeps paying someone else. The named decay modes are stale percepts, dropped transients, saturated metrics and pooled readings. "Pooled readings" is the firm-level version of Fig 1 :22: the signal that says which work slot is failing disappears into an average. Foote and Folta 2002 corroborate from HR finance at low overlap: *"the decision whether to take on temporary workers in lieu of hiring permanent employees is a decision that involves significant risk"* and *"real options theory offers managers the ability to consider irreversibility and to make workforce investment decisions under conditions of minimum uncertainty and maximum flexibility."* Reversibility matters because the channel decays: a committed allocation that cannot be undone cannot be corrected when the percept goes stale.

Fig 7 supplies the two-factor test: bracket fidelity across the handoff and the ground's pressure on the room. A long outsourcing relationship is a chain of handoffs. If either factor goes to zero, the firm runs in place.

**Refuter:** a documented work division that loses its value while bracket fidelity and ground pressure both measure high and non-declining. If both stay high, F5's mechanism is not the cause.

### F6: Internal agreement is not evidence, and a repeated room is not progress

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 7 and Fig 2).**

> Fig 7 :12 "same closure, handed along;"
> Fig 7 :13 "agreement compounds, evidence does not"
> Fig 7 :36 "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."
> Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you."

The same quarterly vendor review, the same staffing committee, the same benchmark consulted year after year is a room handed along. Agreement inside it compounds while evidence does not. Fig 7 :35: "A room’s agreement is variation, not a verdict. Selection between rooms is where the ground votes." Fig 2 :40 disqualifies the common "ask three managers who agree" check when all three read the same report. Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

**Refuter:** a firm that keeps the same closure across two decades and keeps producing new, ground-verified readings of which work pays, with no import from a differing closure. Under Fig 7 :36 that should be impossible.

### F7: The valence of a governance mode flips when the residual changes

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 11 and Fig 12, low overlap: habitat relations versus composition structures).**

> Fig 11 :49 "An actor’s valence is relative to the residual, not a property it carries."
> Fig 11 :50 "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."
> Fig 11 :51 "No standing list of good actors survives a change of residual."
> Fig 12 :119 "catalyst. A part that survives its own use."

A contractor who is a benefactor when the residual is "need an atom we lack" becomes a malfactor when the residual is "protect the channel we depend on". Nothing about the contractor changed. Gordon 2015 supplies a low-overlap witness from animal behaviour: *"'Division of labor' is a misleading way to describe the organization of tasks in social insect colonies, because there is little evidence for persistent individual specialization in task. Instead, task allocation in social insects occurs through distributed processes whose advantages, such as resilience, differ from those of division of labor"* and *"Distributed processes are robust to failure precisely because the system does not use division of labor."* Allocation is a live response to current conditions, not a fixed assignment of kinds to roles. That is Fig 11 :49 at a different stratum and corroborates the refusal to fix four permanent categories.

**Refuter:** a governance mode whose measured valence is invariant across a documented change of the firm's residual. If none can be found anywhere, F7 weakens to `general`.

### F8: The union must be unbundled before a lever is chosen

**Mode: `specified`. Domains all. Status: figure-derived (Fig 9 :54-57).**

The four conditions C1 to C4 have different instruments. A C1 failure shows up as stale percepts and a bracket that no longer matches the residual (Fig 10 :26, Fig 7 :37-39). A C2 failure shows up as same-room handoffs and a reach that stops moving while the library keeps growing (Fig 6 :21, Fig 7 :12). A C3 failure shows up as pooled readings across work slots (Fig 1 :22). A C4 failure shows up as a harness-only success (Fig 11 :70). A single lever such as "convert 20 percent of contractors to employees" clears the region where only one condition holds and leaves the intersections standing (Fig 9 :55). This is why the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

**Refuter:** a single intervention that restores all four conditions in all failure types and leaves no categorically different residue. That would collapse the union into a partition.

### F9: Two currencies, and they do not add

**Mode: `general`. Domain D3. Status: figure-derived (Fig 12 :125-128), with an operations-research corroboration.**

> Fig 12 :125 "A composition costs in two currencies, and they do not add."
> Fig 12 :126 "Bits price the description. Actions price finding out whether it holds."

A work division has a description cost (how much structure, contracting and specification it takes to state) and an action cost (how much it costs to find out whether this particular arrangement actually holds against the ground). A planning model that prices only money conflates them and will propose arrangements it cannot afford to test. Fig 12 :127: *"They are in different units, so a system holding one accounting cannot compare them and will not notice the shortfall."*

The operations-research literature corroborates the structure without the framework. A queueing model of train-versus-recruit (*Optimal Strategies for a Knowledge Workers Acquisition Problem*, CONFIRM 2009) concludes that *"if future demands are volatile, managers would prefer recruiting experienced workers to apprentices, and if the firm has to pay a higher cost for hiring experienced workers, managers would prefer training apprentices to experienced workers."* The optimal mix is a function of volatility and deterioration, not a constant. That is Fig 12 :126 read in management terms: the price of finding out whether the arrangement holds (volatility) is distinct from the price of stating and holding it.

**Refuter:** a single metric that correctly prices both the description and the testing of an arrangement, in the same units, without loss. If one exists, F9's "do not add" is false.

### F10: Conflict between the management literature and the figures, and how it was resolved

**Mode: `general`. Status: figure-governed.**

Coase 1937's boundary condition reads, in a secondary rendering I checked on the fetched record: *"a firm will tend to expand until the costs of organising an extra transaction within the firm become equal to the costs of carrying out the same transaction by means of an exchange on the open market or the costs of organising in another firm."* Read naively this conflicts with Fig 11 :40: an improvement in the agent in isolation changes nothing unless it changes contact. The conflict sends us back to the census, never to a softer reading. Re-census R2 (section 7) resolves it: Coase's "cost of organising" is the **currency of the seam**, the price of composing inside the closure, while Fig 11 :40 is about the **anchor**, what the market pays. They are different quantities. Under that mapping Coase corroborates the existence of the boundary (D1/D2) and does not conflict with the capability claim. A transaction-cost figure is a filter for the budget (Fig 9 :60), not a witness for which mode keeps R small.

### F11: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per work slot, never a firm-wide mix ratio | general | Fig 1 :19, :22 | figure-derived |
| The market is the anchor, not internal efficiency | general | Fig 2 :29, :30 | figure-derived |
| Internal work composes inside the closure | specified | Fig 6 :21 | figure-derived |
| External work is the import that moves the wall | specified | Fig 6 :14, :23; Fig 8 :45 | triangulated F3 |
| Contractor and supplier differ by bond, not by price | specified | Fig 4 :22; Fig 12 :104 | single-source for the figure distinction |
| Automation is a generator or a recording, never a label | specified | Fig 4 :22, :25; Fig 11 :40, :70 | triangulated F4 |
| Quick loss is channel failure | specified | Fig 10 :24, :26; Fig 7 :37 | triangulated F5 |
| Agreement in a repeated room is not evidence | specified | Fig 7 :12, :13, :36 | triangulated F6 |
| Valence flips when the residual changes | specified | Fig 11 :49-51; Fig 12 :119 | triangulated F7 |
| Description cost and action cost do not add | general | Fig 12 :125-128 | figure-derived |
| The question is a union of four conditions | general | Fig 9 :54, :55, :57 | figure-derived |
| Which specific vendor or tool to use for a named slot | not stated | none | gap: framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A firm's sustained per-slot performance is unchanged across a habitat substitution that removes the market's payment for what that slot does (breaks F2 and F5, Fig 2 :29, Fig 11 :39-40).
2. A firm renews its reach solely by composing inside its own closure with no import from a differing closure, across a documented habitat change (breaks F3, Fig 6 :21, :23, Fig 8 :32).
3. An automated system passes a source-discriminating ground test that the same slot failed before automation, with the channel independently measured as unchanged (shows capability, breaks the recording half of F4).
4. A firm loses a work division's value while bracket fidelity and ground pressure both measure high and non-declining (breaks F5, Fig 7 :37-39).
5. A governance mode's valence is invariant across a documented change of residual (breaks F7, Fig 11 :49-51).
6. A single lever restores all four conditions with no categorically different residue (breaks F8, Fig 9 :57).
7. Fig 13's six terms are derived from five, or Fig 8's idempotence fails inside a closed set (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a market-ground measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a staffing theory (Fig 10 :52, "Bring a characterised residual, never the source").
2. Keep the four conditions separate in every report. A blended "workforce health score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Ask, at each handoff, which link the chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
4. Treat every list of governance modes as Γ, that is, as a candidate library whose reach must be tested against the ground, never as the answer (Fig 1 :27).
5. Name the import and show its provenance whenever a contractor or supplier is credited with a new capability (Fig 8 :52). Convergent derivation and adopted import look identical in the contents; only the record separates them.
6. Test automated work against a ground, not a harness (Fig 11 :70), and price the human skill that must remain for takeover (Bainbridge 1983).
7. Use the management and OR literature as budget filters and as one corroborating witness, never as the verdict. Coase, Foote and Folta, and the queueing papers share a broad management evidence pool (Fig 2 :31).
8. Stop at the shape. Do not name which vendor or tool a firm should use; the framework returns "a kind of thing, never the answer itself" (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and the essays *The Library of Babel*, *The Recursive Self-Improvement Trap*, *The Hard Problem is About Source* and *Decoding Tacit Knowledge* (all opened 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish and records the lineage. This governs section 5's stop.
- *The Hard Problem is About Source* confirms the specific error here: an instrument that reads a result *"cannot comment on the source"*, and *"the answer is unreached until a better instrument exists."* Reading "high performance" and naming its governance source is metamerism, and agreement among readers does not fix it.
- *Decoding Tacit Knowledge* confirms why a contractor's specification cannot carry the firm's pretext: *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13 six-term physical set to workforce types | **Retracted, strain S1** | Only fit by renaming employees as energy and contractors as gradients. Re-census: Fig 13 governs the physical substrate, not a firm's Γ |
| Treated Coase's transaction-cost boundary as a direct answer | **Conflict, re-census R2** | Cost of organising is a seam currency, not the ground. Re-mapped as a filter; verdict unchanged |
| Planned to name "the right mix" as the answer | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer. A number is not a nameable domain (X1) |
| Read a staffing-cost variance as evidence for the answer | **Retracted as a witness, kept as a filter** | Fig 9 :60; averaged quantities are frame-internal (Fig 1 :27) |
| Wanted to call Fig 11 :40 a `general` law about all firms | **Narrowed to `specified`** | Structural claim; no market measurement pays for the firm-level version here |
| Used Gordon 2015 as firm-level corroboration | **Narrowed to mechanism-shape corroboration** | The study is about ant colonies; Fig 4 :20 requires the anchor to be re-named at the firm scale |
| F11 row "which vendor or tool" | **Marked `gap`** | Metamerism: a result reading cannot name its source; what is owed is a discriminator |
| F3 "decisive" in an early draft | **Downgraded to triangulated** | Fig 6 and Fig 8 are two figures, but one framework. Triangulation means low topical overlap, not independent evidence pools |

**Strains sent to the log:** S1 (Fig 13 applied to workforce types), resolved by re-census; S2 (calling the customer "the ground" while also treating customer preference as moving), resolved by Fig 2 :29-30 and Fig 11 :73: the habitat updates, the ground is what settles and does not. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: a union of contact maintenance, reach renewal, channel fidelity and generator status, each with its own loop and instrument.
2. **What is the anchor?** The market, named in Fig 2 :29. Not utilisation, not rate cards (Fig 1 :27).
3. **What is internal work for?** Composing inside the closure (Fig 6 :21), keeping the tacit kernel that does not travel in a specification (Fig 4 :20).
4. **What is external work for?** Importing an atom from a closure that differs (Fig 6 :23), with provenance and a shadow test (Fig 8 :52). Contractor and supplier differ by bond (Fig 4 :22 versus Fig 12 :104).
5. **What is automation?** A method or a recording (Fig 4 :22, :25). Judged by whether it changes contact (Fig 11 :40), not by a harness solve (Fig 11 :70).
6. **How does value get lost?** Channel decay (Fig 10 :24-29), either factor of Fig 7 :37-39 going to zero, and a valence flip when the residual changes (Fig 11 :49-51).
7. **What can be said at the stop?** A per-slot shape with four conditions, two currencies, falsifiers and an honest naming gap. Not a fixed mix, not a vendor, not a `grounded` answer. Fig 13 :134: "Unreachable is a verdict here, not a silence," and Fig 8 :39: "So a search that finds nothing is never a proof of absence."

---

## 8. Updated verdict

The shape survives: **divide work per unit, not by a global ratio; keep the work whose value comes from composing inside the firm's closure inside it; import from a differing closure when the needed atom is not held, with provenance and a shadow test; treat contractor and supplier as different bonds rather than different prices; admit automated work only as a generator that changes contact, never on a harness solve; and keep the channel, not the headcount mix, as the thing that decays.** The four conditions are kept separate, never averaged. Which specific vendor or tool occupies a slot is a `gap`, not a silence: the framework returns a shape, and the instrument that would name the source is not held here. Mode `specified`. No world source flipped a verdict; the one genuine conflict (Coase) was returned to the census and re-mapped as a filter. No unresolved strain remains after re-census.
