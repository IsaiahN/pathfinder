# Figure-grounded audit: BUS-0076, when outsourcing improves performance and when it weakens control, learning, and accountability

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, opened 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the business question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o'| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the firm's belief about what the activity should return, formed from its own history and inherited priors about cost, quality, speed, and governance.
- **a** is the action: make in-house (a_make) or outsource (a_out).
- **Γ(b,a)** is what the firm's library of routines, instruments, and people predicts will happen under that action.
- **o'** is what actually happens: delivered cost and quality, plus the state of the firm's own capability and verifiability afterwards.
- **s** is the activity, indexed per process and per time. R is never averaged across activities.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The question's own words already name four slots. Performance is one. Control, learning, and accountability are three others. The phenomenon to explain is not the level of performance under outsourcing but the **vector of four residuals after the handoff**. Observed: cost can fall while internal know-how and independent verification also fall. A frame that predicts "outsourcing lowers cost, therefore closes the question" has a residual in the other three slots.

State the residual as: *under which conditions does the action a_out shrink the performance-slot residual without growing the control, learning, and accountability slot residuals, and under which conditions does it grow them while the performance slot shrinks?* This is an effect description. It names no theory, no "core competence", no "transaction cost", no "governance", no "vendor lock-in". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a conjunction of conditions stated per slot, plus an instrument that discriminates a real import of a method from a lost habitat and a degraded channel. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names candidates directly: *"A measurement, an experiment, a counter, a market, a patient outcome."* For an internal activity the anchor is the realized outcome measured independently of the performer: a counter, an audit, a customer, a market. A vendor's own KPI moves when the vendor is pushed, so it is an instrument, not an anchor. Fig 2 :30: *"If it moves when you push on it, it is not an anchor."*

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a relation among firm-library Γ, action a, realized outcome o', indexed by activity s and ordered by time t. It carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) because a make-to-outsource handoff is a transition, and a **comparison** bond for "improved" (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87). It is a four-slot vector, not a single number.
- **Symmetry.** "Improved" is a threshold relative to a baseline, not an absolute quantity (Fig 12 :85-89; Operators table :46-51). Outsourcing is not symmetric with insourcing: reversing the action does not restore what was learned or the contact that was lost (Fig 11 :66).
- **Scale.** Four scales are in view: the single activity loop, the firm's internal capability library, the inter-firm boundary to the vendor's closure, and the time channel across contracts and handoffs. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The activity loop** (one agent, one scale) | the firm and the vendor as performers, routines and instruments | delivered performance: cost, quality, time | yes: realized output against an independent measure | admitted |
| **D2 The capability library** (composition inside the firm) | atoms (tacit know-how, routines, instruments) and bonds between them | reach (what can be composed next) and cost `\|φ\|` | yes: settlement, *"then check it against the ground, then carry it up"* (Fig 5 :32) | admitted |
| **D3 The channel and habitat** (control and accountability) | the firm's instruments, metrics, percepts, the vendor, the ground | contact with the ground | yes: the ground, *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **D4 The inter-firm closure boundary** (the vendor as a differing frame) | firm closure and vendor closure | imported atoms and methods across the wall | yes: whether the import pays at the ground with a source gate and shadow test (Fig 6 :23; Fig 8 :50-52) | admitted |
| **X1 Vendor reputation as a free-floating property** | the vendor's name | prestige | **no** anchor independent of delivered outcome | not a domain yet |
| **X2 Cost saving as the whole answer** | the finance function | price difference | already inside D1's currency | absorbed into D1 |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that reputation never correlates with quality. The essay *The Recursive Self-Improvement Trap*: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."*

### 1.3 Partition or union

D1 and D2 overlap: the activity changes the library, so the overlap is a compound with its own loop. D2 and D3 overlap: learning requires contact with the ground, so that is a second compound. D3 and D4 overlap: the vendor sits on both the channel and the closure boundary. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: (C1) the performance import actually pays at the ground with a differing closure; (C2) the firm keeps the method, the channel, and the ground-maintaining seat. A firm failing only C1 and a firm failing only C2 are not different degrees of one failure; they are different compounds and need different instruments. The essay *The Library of Babel* states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

The interesting case in the question is the intersection: performance improves **and** control, learning, accountability weaken at the same time. That is exactly the compound Fig 9 :57 describes. A single lever (cut the contract price) clears the region where only performance holds and leaves the intersection standing.

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for an activity facing an outsourcing decision: 1 perception (can the firm still read the outcome?) → 2 vocabulary (does its Γ have terms for what the activity affords and what would count as progress?) → 3 objective (can it state a threshold for "better" in each slot?) → 4 planning (which vendor, which contract?) → 5 learn and carry (name what worked, verify it, carry it to the next activity). Outsourcing effort typically lands at link 4, where the measurements already exist, while the break sits at links 2 and 5 (Fig 3 :29-30). *"Optimising a link that already works cannot rescue one that does not."* (Fig 3 :19)

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not the answer |
| 2 The Ground | anchor test; ground listed as a party becomes a frame; independence | governs accountability and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order and learning |
| 4 The Membrane | methods up, head starts down, recording versus method, R_T | governs the learning slot decisively |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs when a capability can be admitted at all |
| 6 Closure / Reachability | import is the only operator that moves the wall; debit against independence | governs the performance import (C1) |
| 7 Room Chain | same closure handed along; agreement compounds, evidence does not | governs repeated vendor handoffs |
| 8 Union Surplus | idempotent closure; surplus only where closures differ; provenance | governs C1's source gate and shadow test |
| 9 Leave / Arrive | union vs partition; describe the residual first; filters not witnesses | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; verifier non-access | governs control and accountability |
| 11 The Habitat | capability agent-and-habitat; habitat substitution; intro, never subtract | decisive for D3 and the whole action |
| 12 The Bond | two currencies; arrangement is substance; catalyst; re-derivation cost | governs why performance and learning come apart |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | honest stop only (see strain S1) |

Strain test applied during this census: an early attempt to apply Fig 13's six-term physical substrate directly to "business functions" (calling a budget energy and a cost advantage a gradient) only fit by renaming the terms. That is a strain, so Fig 13 does **not** govern outsourcing capability. Re-census sent Fig 13 to the honest-stop role only (section 6, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about firms, `grounded` only if settled by a measurement. None is `grounded`.

### F1: Outsourcing is a habitat substitution, not an agent swap

**Mode: `specified`. Domains D1, D3. Status: triangulated (Fig 11 and Fig 4, low overlap: habitat versus membrane).**

> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)
> **"Isolation is not removal of the habitat. It is substitution of one habitat for another."** (Fig 11 :66)
> **"Move the residual and you must reproduce everything its goal required, and you inherit the new habitat's actors, which you did not choose."** (Fig 11 :67)
> **"what you failed to reproduce is invisible until the goal fails"** (Fig 11 :68)
> **"what you unintentionally introduced is invisible until it acts"** (Fig 11 :69)

Swapping in a cheaper or more efficient external performer is an agent-only improvement. If contact and habitat are unchanged, capability does not change, however much the unit cost falls. When the activity is moved out, two things become invisible: what the firm failed to reproduce (the internal routine, the instrument, the person who knew why) shows up only when the goal fails; what the firm unintentionally introduced (the vendor's own interests and its closure) shows up only when it acts. Fig 4 :20 triangulates at a different scale: *"it or a thousand. Only the actors, the currency and the anchor change."*

**Refuter:** a documented case in which the performer is swapped while habitat and contact are held constant, and both first-order performance and the firm's measured capability to do the activity next time improve. If it survives, F1 is false.

**World bearing (secondary only):** Kjellström 2019 (Lund thesis) writes that outsourced routines leave the firm with *"phantom limbs pain"* and that *"Routines that are no longer in use result in reduced control and a weakened organizational memory, no longer updated for learning."* This is the same effect at the organizational level and **corroborates** F1. Prahalad and Hamel 1990 define core competence as the *"collective learning across the corporation"*, which is a habitat-level, not an agent-level, object. Both are in the management pool, so they are one witness, not two (Fig 2 :31).

### F2: What crosses the boundary decides whether learning happens

**Mode: `specified`. Domain D2. Status: triangulated (Fig 4 and Fig 12, low overlap: membrane versus bond pricing).**

> **"Only methods cross up. Only head starts come down."** (Fig 4 :22)
> **"upward: a method that can be reapplied. Never the recording of a particular success."** (Fig 4 :23)
> **"A recording carried upward looks like knowledge and is a description of one occasion. Replayed downward, it produces a system that repeats a past success and cannot produce a new one."** (Fig 4 :25)
> **"re-deriving it is a lookup and the actions were spent once"** (Fig 12 :107-108)
> **"the result carries forward and the deriving does not, so every lineage pays again."** (Fig 12 :108-109)

If the vendor returns a deliverable, a report, or a metric, the firm receives a head start, not a method. A head start makes the next search cheaper; a recording is a description of one occasion. The learning slot fails when the arrangement is not recorded on the firm's side of the boundary: where the arrangement is recorded, re-deriving it is a lookup and the actions were spent once; where it is not, the result carries forward while the deriving does not, so every lineage pays again. Fig 12 :130: *"Summing them into one figure is the error this names, not the fix for it."* Performance and learning are in different currencies.

**Refuter:** a firm that receives only deliverables, with no method, no training, and no recorded arrangement, and yet re-derives the capability at zero additional action cost on the next activity. That breaks F2.

**World bearing:** Kjellström 2019 adds the condition that prevents the failure: *"Knowledge does not necessarily erode when routines are outsourced if knowledgeable employees intervene and can regain knowledge."* That is the boundary-spanning method crossing back, and it **corroborates** F2 with a named mechanism. Schlosser, Templer and Ghanam 2006 report that *"HR outsourcing and the growth in contingent work can result in a significant loss in learning capital through a breakdown in the psychological contract"* and that *"The problem is compounded if outsourcing is introduced for cost control rather than strategic refocusing reasons."* Corroborates, same pool.

### F3: Accountability fails when the vendor becomes its own anchor

**Mode: `specified`. Domain D3. Status: triangulated (Fig 2 and Fig 10, low overlap: anchor rule versus verifier non-access).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** (Fig 2 :29)
> **"A measurement, an experiment, a counter, a market, a patient outcome."** (Fig 2 :29)
> **"A ground listed as one of the parties has already become a frame."** (Fig 2 :47)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"Soundness requires the checker to be unable to produce what it is checking. Never a player, never a proxy, never the author of a verdict or an atom. It transmits verdicts and issues none."** (Fig 10 :43-44)

If the outsourced function also measures, reports, and certifies its own performance, the anchor updates: it becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices (Fig 2 :34). Accountability erosion is structurally the loss of a ground-maintaining seat that cannot author the verdict it checks. The firm keeps an audit, a counter, or a customer only if that seat is explicitly retained.

**Refuter:** an arrangement in which the vendor authors its own performance verdict and the firm's independently measured outcome still tracks the vendor's claim through a documented perturbation, with no third frame and no retained instrument. Either that breaks F3, or the "independent" measure was never independent.

**World bearing:** Wikipedia's Outsourcing page records the structural fact: *"outsourcing usually presupposes the integration of business processes under a different ownership, over which the client business has minimal or no control."* It also records step-in rights as a contractual attempt to regain intervention. Tertiary source, used as a field map, not as a witness.

### F4: Control failure is channel decay, not ground decay

**Mode: `specified`. Domain D3. Status: single-source (Fig 10; Fig 1 :22 is a corroborating line from the same framework, so one witness).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"stale percepts, dropped transients, saturated metrics, pooled readings"** (Fig 10 :26)
> **"you have lost touch"** (Fig 10 :28)
> **"→ keep the anchor reachable"** (Fig 10 :29)

Outsourcing inserts a channel between the firm and the reality the activity serves. If the firm's readings of the real outcome go stale, dropped, saturated into vendor KPIs, or pooled into an average, the output of the seat is not a verdict but *"you have lost touch"*. The market or customer keeps paying someone; the firm stops hearing who. Fig 1 :22 explains why pooling is the default: the signal that says where to look disappears into an average.

**Refuter:** a firm whose direct contact with the ground is demonstrably removed and whose readings are stale and pooled, yet whose verdicts remain ground-verified prospectively across a perturbation. F4's mechanism is not the cause in that case.

**World bearing:** Kjellström 2019 names *"loss of predictability over the business process"* as one of the three explicated losses. That is channel decay stated in organizational terms, low overlap with the framework, **corroborates** F4.

### F5: The performance gain is a real union surplus only when the closures differ

**Mode: `specified`. Domain D4. Status: triangulated (Fig 6 and Fig 8, low overlap: wall mover versus surplus).**

> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Import from a live peer is debited against that frame's independence. A wrong atom costs more than starting from primitives."** (Fig 6 :24)
> **"Two frames together reach what neither reaches alone."** (Fig 8 :45)
> **"Two frames that overlap almost completely are one frame wearing two names."** (Fig 8 :49)

Outsourcing improves performance when the vendor's closure genuinely differs and holds a method or atom the firm lacks. Then the union has a surplus: two frames reach what neither reaches alone, and what crosses back is a head start the firm could not have minted inside its own closure. If the vendor does the same thing with the same atoms under a different name, the union adds nothing, whatever the price difference. But the import is debited against independence, and a wrong atom costs more than starting from primitives. Fig 8 :32: *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."*

**Refuter:** a documented case where an external vendor whose closure is shown to overlap almost completely with the firm's nevertheless adds a durable, ground-verified atom to the firm's reach. That breaks F5.

**World bearing:** the transaction-cost literature's make-or-buy boundary is the business-pool name for C1. The opened Wikipedia page states: *"If the internal transaction costs are higher than the external transaction costs the company will be downsized by outsourcing, for example."* It also lists asset specificity, uncertainty, and opportunism as determinants, which are the conditions under which the vendor's closure is likely to become a lock rather than a surplus. This corroborates the shape from a different discipline but is a tertiary summary, so one witness at low weight.

### F6: The four slots are different quantities, so one score cannot close the residual

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 1 and Fig 12, low overlap: per-slot residual versus two currencies).**

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"A composition costs in two currencies, and they do not add."** (Fig 12 :125)
> **"Bits price the description. Actions price finding out whether it holds."** (Fig 12 :126)
> **"They are in different units, so a system holding one accounting cannot compare them and will not notice the shortfall."** (Fig 12 :127)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

A blended "outsourcing ROI" is a frame-internal quantity: the performer reports the number that the performer also produces. Cost saving is a legitimate filter for where to spend the next analysis, but it cannot be a witness for whether control, learning, and accountability survived. The two currencies in Fig 12 (bits for the description, actions for finding out whether it holds) do not add, so a single figure cannot even display the shortfall. This is the structural reason the question's two halves can both be true at once.

**Refuter:** a single scalar metric that prospectively predicts, per activity, all four slot outcomes with no residual left in the other three. If one exists, F6's methodological consequence is false.

**World bearing:** Schlosser et al. 2006 observe that the loss is *"compounded if outsourcing is introduced for cost control rather than strategic refocusing reasons"*, which is the business-pool version of treating a filter as a witness. Corroborates at the practitioner level.

### F7: The chain usually breaks at learn-and-carry and at the middle link

**Mode: `specified`. Domain D1. Status: single-source (Fig 3, with Fig 12 :111 as a corroborating line from the same framework, so one witness).**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)
> **"A vocabulary without bonds can name a state and cannot name a route to one."** (Fig 12 :111)

Vendor selection is a planning act (link 4). Contract management has instruments, dashboards, and service levels. The two links with almost no instrument are vocabulary (what does this activity afford, and what would count as progress here?) and learn-and-carry (name what worked, verify it, carry it to the next activity). Both are typically handed to the vendor. The firm can name the deliverable (a state) and cannot name the route to it (the method), because the bond was never recorded on its side. More contract-governance budget lands above the break.

**Refuter:** a documented outsourcing engagement whose vocabulary and carry links both measure as working and whose failure is located at planning in a documented case. That falsifies the "usually middle" claim, though not the dependency ordering.

### F8: Repeated similar vendors are a chain of mirrors, not progress

**Mode: `specified`. Domain D4. Status: triangulated (Fig 7 and Fig 2, low overlap: selection between rooms versus anchor triangulation).**

> **"same closure, handed along;"** (Fig 7 :12)
> **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)
> **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."** (Fig 7 :35)

When an activity fails under one vendor, the common response is to re-tender to a similar vendor with a similar closure. The chain hands along the same room, agreement about the new SLA compounds, and evidence does not. The next room must differ from the last and match the residual the last one surfaced. Fig 7 :37-39 adds the two-factor form: *"Progress per handoff has two factors. Zero either and the chain runs in place:"* the bracket's fidelity across the handoff and the ground's pressure on the room. Zero either and re-tendering is motion, not learning.

**Refuter:** a chain of vendors with demonstrably the same closure that nevertheless keeps producing new, ground-verified readings of the activity with no import from a differing closure. Under Fig 7 :36 that should be impossible; if observed, F8 is wrong.

### F9: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per activity, never a single outsourcing ROI | general | Fig 1 :19, :22 | figure-derived |
| The ground is the realized outcome, not the vendor's KPI | general | Fig 2 :29, :30, :47 | figure-derived |
| Outsourcing is habitat substitution, not an agent swap | specified | Fig 11 :39, :40, :66-69 | triangulated F1 |
| Learning depends on a method crossing back, not a recording | specified | Fig 4 :22, :23, :25; Fig 12 :107-109 | triangulated F2 |
| Accountability fails when the vendor becomes its own anchor | specified | Fig 2 :29, :47; Fig 10 :43-44 | triangulated F3 |
| Control fails by channel decay, not ground decay | specified | Fig 10 :24, :26, :28 | single-source F4 |
| Performance gain needs a differing closure and a paid import | specified | Fig 6 :23, :24; Fig 8 :45, :49 | triangulated F5 |
| Four slots in two currencies cannot be averaged | general / specified method | Fig 1 :27; Fig 12 :125-127; Fig 9 :60 | triangulated F6 |
| The chain breaks at vocabulary and carry | specified | Fig 3 :19, :24, :27 | single-source F7 |
| Re-tendering to a similar vendor is motion, not progress | specified | Fig 7 :12, :13, :36 | triangulated F8 |
| Which specific activities to outsource and to whom | not stated | none | gap: framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A performer swap with habitat and contact held constant improves both first-order performance and the firm's next-activity capability (breaks F1, Fig 11 :39-40, :66).
2. Only deliverables cross the boundary, with no method or recorded arrangement, and the firm re-derives the capability at zero further action cost next time (breaks F2, Fig 4 :22-25).
3. The vendor authors its own verdict and the firm's independently measured outcome tracks it through a perturbation with no third frame (breaks F3, Fig 2 :47, Fig 10 :43-44).
4. Direct ground contact is removed and readings are stale or pooled, yet verdicts remain ground-verified prospectively (breaks F4, Fig 10 :24-28).
5. A vendor whose closure overlaps almost completely with the firm's nevertheless adds a durable, ground-verified atom to the firm's reach (breaks F5, Fig 8 :49).
6. A single scalar metric prospectively predicts all four per-slot outcomes with no leftover residual, or one lever restores both conditions leaving no categorically different residue (breaks F6, Fig 12 :125-127, and Fig 9 :57).
7. A vocabulary and carry pair that measure as working while the failure is at planning, across documented cases (breaks F7, Fig 3 :24).
8. Fig 8's idempotence fails inside a closed set, or Fig 4's filter direction is reversed (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until an independent measurement has paid for the shape per slot.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of operations strategy (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep the four slots separate in every report. A blended outsourcing score is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Describe what would count as progress in each slot before choosing a vendor (Fig 9 :27-28, *"describe it before you go looking, or any frame you pick will seem to fit"*).
4. Require an independent ground-maintaining seat that the vendor cannot author, with a counter, an audit, or a customer that does not move when pushed (Fig 10 :43-44).
5. Buy a method, not a recording: require that know-how, instruments, and the arrangement be carried back and recorded inside the firm (Fig 4 :22-25, Fig 12 :107-109).
6. Treat cost savings as a filter for the budget and never as a witness for the verdict (Fig 9 :60).
7. Buy independence in proportion to the cost of being wrong (Fig 2 :42), and debit any import against the firm's independence (Fig 6 :24).
8. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
9. Stop at the shape. Do not name which activity or which vendor wins universally; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, `60_FIGURES_AS_METALAWS.md`, and the essays *The Library of Babel*, *The Recursive Self-Improvement Trap*, *The Hard Problem is About Source* (all fetched 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments no longer distinguish, and records the lineage. This governs section 5's stop.
- WATSON 60 confirms that figures are metalaws and decide design questions: the seat reads the ground and does not ask the anchor for rulings the figures already decide. No external ruling was requested in this derivation.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13's six physical terms to business functions | **Retracted, strain S1** | Only fit by renaming routines as kinds of energy. Re-census: Fig 13 governs the physical substrate, not a firm's Γ |
| Treated "vendor reputation" as evidence for performance | **Retracted as a witness, kept as a contact-cost filter** | *"Prestige can fund an action... but it cannot settle an action"*; also Fig 9 :60 |
| Read Fig 4 :22 as forbidding the purchase of a service | **Narrowed** | It governs what counts as learning, not whether outsourcing is permitted. A head start coming down is allowed; treating the head start as a method is the failure |
| Applied Fig 2 :29's "a market" directly as the anchor for an internal activity | **Narrowed** | For an internal activity the ground is the realized independent outcome, which may be a counter, an audit, or a customer, not necessarily a market; a vendor KPI moves when pushed |
| Wanted to call F1 a `general` law about all outsourcing | **Narrowed to `specified`** | Structural claim; no prospective per-slot measurement pays for the firm-level version here |
| Used Wikipedia's Outsourcing page as a substantive witness | **Narrowed to a field map** | Tertiary source; its quotes establish the practice's vocabulary, not the verdict |
| F9 row "which activities to outsource" | **Marked `gap`** | The source essay's metamerism rule: an instrument that reads a result *"cannot comment on the source"*, and *"the answer is unreached until a better instrument exists"* |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Fig 11 and Fig 4 are two figures but one framework; triangulation here means low topical overlap, not independent evidence pools |

**Strains sent to the log:** S1 (Fig 13 applied to business functions), resolved by re-census; S2 (calling the market "the ground" for an internal activity), resolved by Fig 2 :29-30 and Fig 11 :73: the habitat updates, the ground settles; S3 (reading Fig 7 :26, *"progress per handoff: R = h² × S"*, as a calibrated equation), resolved by treating it as a product structure with no numbers supplied; S4 (mapping "control" to both Fig 3's planning link and Fig 10's channel), resolved by re-census: control is the channel and verifiability anchor (Fig 10), planning is a separate link (Fig 3); S5 (learning as a head start, Fig 4, versus learning as minting a new atom, Fig 6), resolved as two quantities, both kept, never summed. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of an import condition and a retention condition, each with its own instrument.
2. **What is the anchor?** The realized independent outcome per activity, not internal agreement or a vendor KPI (Fig 2 :29, :30, :47).
3. **Is the answer in the performer alone?** No. Fig 11 :39-40. Capability is agent-and-habitat, and outsourcing is a habitat substitution.
4. **How does performance improve?** A real import from a differing closure that pays at the ground (Fig 6 :23, Fig 8 :45); a head start, not a recording (Fig 4 :22).
5. **How does learning fail?** What crosses back is a recording and the arrangement is not recorded inside the firm, so every lineage pays again (Fig 12 :107-109).
6. **How do control and accountability fail?** The channel degrades (Fig 10 :24-28) and the vendor becomes its own anchor (Fig 2 :47).
7. **Why can both halves of the question be true at once?** Four slots, two currencies, no addition (Fig 1 :19, Fig 12 :125-127, Fig 9 :60).
8. **What can be said at the stop?** A shape, two conditions, four slot instruments, and eight falsifiers. Not which activity to outsource, not which vendor. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **outsourcing improves performance when the vendor's closure genuinely differs and the imported method pays at an independently measured ground, and when the firm keeps a method, a channel, and a ground-maintaining seat on its own side of the boundary. It weakens control, learning, and accountability when what crosses is a recording rather than a method, when the habitat substitution removes the routines that were not reproduced, when the channel to the ground degrades, or when the vendor is allowed to author its own verdict. The four slots are different quantities and are never averaged.**

Which specific activities to outsource and to whom is a `gap` at the instrument boundary, not a hidden answer. Mode `specified`. No world source was allowed to flip a verdict; the management-pool sources were recorded as one witness at low weight, and the low-overlap cognition source corroborates the mechanism shape, not the firm-level fact. All five strains were re-censed and none remains unresolved. This document is a simulation and cannot settle BUS-0076.
