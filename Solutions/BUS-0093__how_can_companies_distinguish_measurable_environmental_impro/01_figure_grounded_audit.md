# Figure-grounded audit: distinguishing real improvement from shifted harm

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status: SIMULATED DERIVATION, not a ground reading.** From *The Recursive Self-Improvement Trap*: *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* LLM output is a simulacrum of a derivation. This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No emissions inventory, supplier audit or atmospheric measurement was performed here.

**Sources.** Figure text: `local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md`. Canonical usage: the local `FIGURES_README_canonical.md` and `THE_FORMULA.md`. World sources actually opened on 2026-11-22 are listed in `10_source_ledger.csv`.

---

## 0. The residual, in effect terms

A company reports a measurable environmental improvement: fewer tonnes of CO2 equivalent, less water withdrawn, less waste sent to landfill, within a boundary it has drawn. Call the reading `m(b)`, where `b` is the reporting boundary (own operations, plus purchased energy, plus selected supplier categories, and so on).

Two different worlds give the same `m(b)`:

- **World A (genuine):** total harm to the ground fell. The improvement survives when the boundary is redrawn outward.
- **World B (displaced):** harm moved to a supplier, another region, another lifecycle stage or another impact category. The boundary `b` shrank around the harm, so `m(b)` fell while total harm did not.

**R = the inability of `m(b)` to discriminate A from B.** This is a residual about a *reading across a boundary*, not about whether the company's arithmetic is correct. The arithmetic can be flawless and the reading still cannot see what left the frame.

Shape of R:

- **Arity:** two quantities under one number, the local reading and the total-system harm. Plus a boundary variable that is free to move.
- **Symmetry:** asymmetric. Moving harm across a boundary is directed (supplier to firm, region A to region B, use phase to manufacture). A symmetric join cannot represent it. The relevant bonds are `→` sequence, `⇒` production, `−` subtraction and `⋛` comparison, all ordered (Fig 12, Operators table).
- **Scale:** first order inside the firm's own operations, second order at direct suppliers, third order at regions and lifecycle chains. The DDT case in Fig 11 puts the residual that mattered three steps out.
- **Slots:** region, supplier, gas, impact category, lifecycle stage, time. R is a slice over these, never one global number. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*

What an answer would look like, bound as an ordinary term before the search (formula step "Direction"): **a discrimination procedure that returns two verdicts, "improvement survives an outward redraw of the boundary" or "improvement is cancelled by a per-slot residual elsewhere", where the procedure names the anchor, enumerates the slots and records which instruments ranged against which ground.** That is the sought-for shape. It is written down here so it can accrue a residual and be refused like anything else.

---

## 1. Domain census

One line per domain: actors, currency, anchor. No nameable anchor means it is not yet a domain we can settle anything in.

| domain | actors | currency | anchor | partition or union | verdict status |
|---|---|---|---|---|---|
| **D1 Corporate reporting frame** | firm, reporting boundary, Scope 1/2/3 categories, metrics, disclosure standard | reported units (tCO2e, m3, tonnes) | **none of its own.** A number that moves when the boundary is redrawn is not an anchor | partition boundary: which emissions fall inside `b` | frame, not ground. `single-source` for the structural claim (Fig 2), corroborated by GHG Protocol sources |
| **D2 Physical and ecological ground** | atmospheric concentration, mass balance, physical flows, ecosystem state | physical units that do not consult any reporting boundary | **yes.** The ground settles whether total harm fell | the anchor itself | `triangulated` (Fig 2 anchor definition + Fig 10 ground/channel + OWID territorial-versus-consumption test) |
| **D3 Supply-chain habitat** | suppliers, sub-suppliers, regions, lifecycle stages, impact categories | harm across every enumerated slot | **yes, but only as per-slot physical measurement.** The habitat itself updates and is not the ground | enumerated, never composed (Fig 11), and a contact cascade | `triangulated` (Fig 11 enumeration and DDT cascade + GHG Protocol Scope 3 page) |
| **D4 Verification and assurance frame** | auditors, standards bodies, regulators, independent instruments | independence between frames | **the ground, never agreement** | the checking arrangement | `triangulated` (Fig 2 independence + Fig 10 verifier non-access + Fig 1 per-slot rule) |

**Partition or union.** The question looks like one hard problem, "is the improvement real?". Fig 9 :54 says: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :57 says: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."* Here the two conditions are (i) reduction inside the boundary and (ii) stability of harm outside it. Satisfying (i) does not imply (ii). This is a **union compound**, not a partition of one quantity. It has its own loop and its own ground. A single corporate footprint number that merges the two conditions is the "bundle" Fig 9 warns about.

**Order by dependency (Fig 3).** Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* The links must be visited in this order:

1. Fix the anchor (D2): what settles the question and does not move when pushed.
2. Enumerate the habitat outward per slot (D3): direct operations, then suppliers, then regions and lifecycle stages.
3. Measure the per-slot residual (D1 over D3): never aggregate it away.
4. Triangulate with low-overlap instruments (D4): two instruments, not two readers of the same report.
5. Settle against the ground and record the lineage.

Corporate practice usually starts and stops at step 1 of the measurement chain, measuring own operations, because that is where the instruments already exist. Fig 3 :30: *"Most improvement effort in practice lands above the break, because that is where the measurements already exist."* The break in this question is between steps 3 and 4, not in the arithmetic of own-operations accounting.

**Strain test.** An apparent strain: Fig 11 :91 says *"The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."* D3 above calls the habitat a place with an anchor. Re-census resolves it: the anchor in D3 is the **per-slot physical measurement**, not the habitat. The habitat is the enumeration of where harm can move; the ground is what settles whether it did. Different objects, no strain after re-census. This is the README's rule that a reading which makes figures contradict one another has misidentified its domain.

---

## 2. Findings

### F1 - A self-reported metric that moves with the boundary is not an anchor (decisive for D1)

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :30: *"If it moves when you push on it, it is not an anchor."*

`m(b)` is exactly a quantity that moves when you push on `b`. Redraw the boundary to include a supplier and the number changes. That does not make the metric dishonest; it makes it a **frame**, not the ground. The question "is the improvement real?" cannot be settled by the frame that produced the improvement. Fig 1 :27: *"A frame cannot score itself with a quantity it also produces."*

Fig 10 :18: *"a declared meaning is not a grounded one."* A company declaring "carbon neutral" or "net zero" declares a meaning. What can be installed instead is what can be violated: a boundary-invariant physical inventory that can come back non-zero.

- **Verdict for D1:** the reported number is necessary as an instrument and insufficient as a verdict. `general` on the structural claim, `single-source` for the figure line, corroborated by the GHG Protocol Corporate Standard's own stated objective of *"a true and fair account of their emissions through the use of standardized approaches and principles."*
- **Refuter:** exhibit a company-reported metric that is invariant under a redrawing of the reporting boundary and that matches a boundary-independent physical inventory across all enumerated slots. If one exists, D1 has an anchor after all and this finding is withdrawn.

### F2 - Per-slot residuals, never an aggregate (decisive for D1 to D3)

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* Fig 1 :28: *"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."*

A single total of tCO2e across Scope 1, 2 and 3 is a reading, not a discrimination. If a supplier's emissions rise by 10 kt while own operations fall by 10 kt, the aggregated total is flat and the per-slot residual is large. The aggregate has thrown away the only signal that says where the harm went.

Fig 10 :26 names the channel failure that produces this: *"stale percepts, dropped transients, saturated metrics, pooled readings."* "Pooled readings" is the aggregate-with-slots-erased.

- **Verdict for D1 and D3:** the discrimination must be computed per slot (region, supplier, gas, category, stage) and the slots kept separate in the report. `triangulated` across Fig 1 and Fig 10 (low overlap: one is the agent's residual index, the other is the ground maintainer's channel failure).
- **Refuter:** show that a single aggregated global number preserves the per-slot signal under a redrawing of the boundary, with no slot-level data. That breaks Fig 1 :19/:22/:28 and the finding fails.

### F3 - Enumerate the habitat outward; direct contact is the failure mode (decisive for D3)

Fig 11 :43: *"The habitat is enumerated, never composed."* Fig 11 :44: *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."*

Fig 11 :52: *"Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."*

This is the question's own mechanism. A firm that measures only its own fence line has performed a first-order enumeration. The harm it reports as reduced has moved to a second-order actor (a supplier) and the residual that matters is three steps out (a region, a community, an ecosystem). Fig 11 :40: *"An improvement that does not change contact changes nothing, however much it improves."* A reduction that leaves the firm's total contact with harm unchanged is not an improvement in the sense this question asks about.

The world corroborates from a different field. The GHG Protocol Scope 3 page says: *"Until recently, most companies have focused on measuring emissions from their own operations and electricity consumption. But what about all of the emissions a company is responsible for outside of its own walls"*, and adds that *"the majority of total corporate emissions come from Scope 3 sources."* Our World in Data gives the country-level version of the same test: *"If only territorial emissions were falling whilst consumption-based emissions were rising, this would suggest it was 'offshoring' emissions elsewhere."*

- **Verdict for D3:** the habitat must be enumerated, not derived from a category list, and enumeration must run outward until the cascade stops mattering. `triangulated` (Fig 11 + GHG Protocol Scope 3 + OWID; the figure and the standards body share no evidence pool).
- **Refuter:** show that a first-order (direct-operations) measurement captures a third-order harm without enumerating the intervening actors. That breaks the DDT cascade claim and the finding fails.

### F4 - Two instruments, not two readers of the same report (decisive for D4)

Fig 2 :31: *"Two people reading the same report are not two frames; two instruments pointed at the same thing are."* Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*

An assurance process in which three auditors read the same corporate inventory is one frame with three names. It cannot corroborate the inventory. Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool."* What is needed is a second instrument drawing on different evidence: a supplier's own metered data, a consumption-based input-output inventory, atmospheric or remote measurements. Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*

Fig 10 :42: *"A verifier that can reconstruct the claim cannot verify it."* If the verifier is given the company's full model before being asked for a verdict, the verifier has joined the frame being checked. Fig 10 :52: *"Bring a characterised residual, never the source."*

- **Verdict for D4:** independence is a property of evidence sources, not of the number of reviewers. `triangulated` (Fig 2, Fig 10, Fig 1 on slots).
- **Refuter:** show that two readers of the same report constitute two independent frames under the figures' definition, or that agreement within one evidence pool carries verdict weight. Both break Fig 2 :31/:40 and the finding fails.

### F5 - The flat formula: same total, different arrangement, different substance (supporting, D1)

Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."* Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*

A headline "we cut 100 kt CO2e" is a flat formula. It records the ingredients (tonnes by gas) and not the arrangement (where, when, at which stage, in which category, under whose control). Two firms with the same total can stand to each other as isomers: same atoms, different bond, different substance. The difference is invisible in the headline number and decisive in whether harm was reduced.

Fig 8 :32: *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."* Searching harder inside the corporate inventory cannot find the supplier that left the frame. The atom has to come from a frame whose closure differs, and that import must be provenanced (Fig 6, Fig 8).

- **Verdict for D1:** the total is needed for accounting and insufficient for the discrimination. `triangulated` (Fig 12 isomer definition + Fig 8 closure).
- **Refuter:** exhibit two arrangements with identical atoms and identical arrangement that nonetheless differ in total system harm. That collapses the isomer reading.

### F6 - A goal is a comparison: the discrimination is a threshold relation, not a number (supporting, all domains)

Operators table entry for `⋛`: *"a threshold relation between two quantities"*, identified by *"is it about which is larger, rather than both being present?"* Fig 12's Operators note: *"a goal is a comparison, which is why a vocabulary without it cannot state one."*

The answer to "is the improvement real?" is a comparison of two quantities: the reduction inside the boundary and the residual outside it. It is not a third number. The verdict is "residual outside cancels reduction inside" or "it does not", which is `⋛`. This is why a single footprint number cannot carry the answer: a comparison bond is not recoverable from its operands.

- **Verdict:** the output of the procedure is an ordered comparison with a stated threshold, and the threshold must be declared as a convention, not smuggled in as a fact. Fig 10 :18 applies. `general` on the structural claim.
- **Refuter:** show that the discrimination can be stated as a bare quantity with no threshold relation. That removes `⋛` from the answer and breaks this finding.

### F7 - The framework returns a shape, not a standard (limit)

The canonical usage rule says the framework reports *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of what the instruments can distinguish and records the lineage. Fig 9 :32: *"you get a kind of thing, never the answer itself."*

So the figures derive the **shape** of a valid discrimination procedure: boundary-invariant anchor, outward enumeration, per-slot residuals, low-overlap instruments, declared threshold, recorded lineage. They do **not** derive that a company should adopt GHG Protocol Scope 3, ISO 14064, the SBTi Corporate Net-Zero Standard or any particular assurance regime. Naming one of those is a **binding from the accounting frame** onto a held procedure shape, provenanced as such. It is not a new atom and it does not move the wall (Fig 6: *"IMPORT adds an atom"*, this one adds none).

This is a limit on the answer, not a retreat from it. Fig 9 :30: *"your words are borrowed too, so describe the effect rather than the cause."* The effect is described above; the name is left to the accounting frame.

- **Verdict:** `general` on the shape, no verdict on any named standard. `triangulated` across Fig 9 and the canonical README.
- **Refuter:** derive a specific standard from the six-term figure set with no import from the accounting frame. If that is possible, the limit is too strict.

### F8 - Filters are for the budget, not the verdict (method discipline)

Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

Tier, cost, data availability and reporting burden decide what gets measured first. They do not decide whether an improvement is real. A cheap metric is a filter for the budget. A boundary-invariant per-slot inventory that fires no off-slot residual is a witness. From the RSI Trap: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."*

- **Verdict:** method rule, no empirical claim. `general`.
- **Refuter:** show a case where a reporting-burden filter changes the truth value of "improvement survived the boundary redraw". That would make the filter a witness and break this rule.

### F9 - Cost if wrong is locatable, and the cheap error is the expensive one

Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."* Two errors are possible:

- **False improvement (type A):** accepting a displaced reduction as real. Cost: capital and reputation allocated to a change that did not reduce harm; later discovery by a regulator or a supply-chain investigation. This is the error the figures price highest because it is invisible from inside the frame.
- **False leakage (type B):** branding a genuine improvement as displacement. Cost: unnecessary supplier auditing and reporting burden. This error is visible and undoable.

The boundary-invariant per-slot procedure raises the up-front cost of measurement but makes both errors findable. The single aggregated number lowers the up-front cost and hides type A. Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

### F10 - What actually survives, with mode attached

| claim | mode | status | figure or source |
|---|---|---|---|
| A reported metric that moves with the boundary is not an anchor | `specified`, falsifiable | survives | Fig 2 :29-30 |
| The residual must be measured per slot, not aggregated | `specified`, falsifiable | survives | Fig 1 :19, :22, :28; Fig 10 :26 |
| The habitat must be enumerated outward along contact cascades | `specified`, falsifiable | survives | Fig 11 :43-44, :52 |
| Independence is two instruments, not two readers | `specified`, falsifiable | survives | Fig 2 :31, :40 |
| The output is a comparison with a declared threshold | `general` on structure | survives | Operators table `⋛` |
| The framework returns a shape, not a named standard | `general` on limit | survives | Fig 9 :32; canonical README |
| Any particular disclosure standard is the required answer | `specified` | **refused as a derivation** | F7; binding from the accounting frame, not a figure result |
| The company's improvement is false | `specified` | **not claimed** | no ground reading was performed |

---

## 3. Pre-registered refuter

Written before any outreach, per the rule that a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. A corporate-reported metric is shown to be invariant under an outward redraw of the reporting boundary **and** to match a boundary-independent physical inventory across all enumerated slots. Then D1 has an anchor and F1 falls.
2. A single aggregated global number is shown to preserve the per-slot signal under boundary redraw with no slot-level data. Then F2 falls.
3. A first-order (direct-operations) measurement is shown to capture a third-order harm without enumerating the intervening actors. Then the DDT cascade reading in F3 falls.
4. Two readers of the same report are shown to count as two independent frames under Fig 2's definition, or agreement within one evidence pool is shown to carry verdict weight. Then F4 falls.
5. A specific reporting standard is derived from the six-term figure set with no import from the accounting frame. Then F7's limit is too strict.

Until one of these is run, no part of this may be labelled `grounded`.

---

## 4. Recommendation

1. Lead with the residual and the refuter, not with the framework. Fig 10 :52: *"Bring a characterised residual, never the source."*
2. Ask the recipient what they would count as a failure of the discrimination procedure, and record the answer before showing the figures. Fig 9 :27: *"describe it before you go looking, or any frame you pick will seem to fit."*
3. Do not present a named standard as the answer. Present the shape a valid procedure must have and let the accounting frame supply the name with provenance (F7).
4. Use the public opt-in venues in `03_public_contact_points.csv`, one-to-one, and ask for a refutation rather than agreement (F8).
5. Send the generator, not the conclusion. Fig 4 :22: *"Only methods cross up. Only head starts come down."*

---

## 5. Canonical usage check

Two local sources govern how the figures may be used, both read this session:

- `FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* And the canonical limit: the framework says what a missing thing would look like, *"a shape, not a name"*, then stops at the limit of the instruments and records the lineage. *"Indiscernibility is not identity."*
- `THE_FORMULA.md`: the mode rule above, and step 7's three distinct questions. For this question the live one is **SEARCHED first** (is the off-slot harm already in the corporate closure and simply unfound? Distribute the search and keep the searchers independent, Fig 6 :49-50), then **INWARD** (sharpen the per-slot instrument, Fig 6 :29), then **OUTWARD** (import the consumption-based frame, characterized in effect terms, Fig 6 :30). They are not interchangeable. Importing against a budget limit adds an atom that was not needed.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "Adopt Scope 3 accounting and the problem is solved" | **Retracted as a derivation.** Scope 3 is a binding from the accounting frame onto the procedure shape. It supplies categories, which are an enumeration, but the figure verdict is about anchors, per-slot residuals and independence, not about a named standard. Kept as a provenanced binding. |
| "Corporate reporting is worthless" | **Narrowed, not dropped.** It is a frame, not an anchor (F1). Frames are necessary instruments; only their promotion to verdict is refused. |
| "The habitat is called an anchor in D3" | **Re-census resolved, no strain.** The anchor is per-slot physical measurement. The habitat is the enumeration where harm may move. Fig 11 :91 governs. |
| "Leakage cancels at most the local reduction" | **Not assumed.** The carbon-leakage source reports that the leakage ratio *"can be greater or less than 100%"*, so displacement can more than cancel. This strengthens F2 and is recorded as a confirmation, not a strain. |
| DDT example treated as a world corroboration | **Downgraded.** Fig 11 already names DDT, biomagnification and Carson, Silent Spring, 1962. The ecology source is a retrodiction of the figure's own example, not an independent witness. It is listed in the ledger with high overlap. |
| "A room of auditors corroborates" | **Refused.** Fig 2 :31 and :40. Same evidence pool, one frame. |
| Cost if wrong framed as symmetric | **Rejected.** Fig 2 :42 prices independence by the cost of being wrong; the two error types differ in visibility and undoability (F9). |

### Seven-question recursive derivation (summary)

1. **What is the residual?** The failure of `m(b)` to discriminate reduction from displacement. Arity two, directed, multi-slot, first to third order.
2. **Is the reported number an anchor?** No. Fig 2 :29-30. It moves when the boundary is pushed.
3. **What does not move?** Physical mass balance and boundary-independent inventory. Fig 10 :24: *"the ground does not decay, the channel does."*
4. **Where can harm hide?** In the habitat, enumerated outward. Fig 11 :43-44, :52.
5. **What must not be done to the signal?** Aggregated away. Fig 1 :19, :22, :28; Fig 10 :26.
6. **How many frames?** At least two low-overlap instruments, not two readers. Fig 2 :31, :40.
7. **What is the output?** A threshold comparison with a declared convention and a recorded lineage. Operators table `⋛`; Fig 10 :18.

### Updated verdict

The shape survives: a boundary-invariant anchor, an outward enumeration of the habitat, per-slot residuals kept separate, low-overlap instruments ranged against the ground, a declared threshold and a recorded lineage. Everything named beyond that is a binding from the accounting frame, not a derivation. No measurement was taken, so the verdict is `specified`, ungrounded, candidate. Strains after re-census: **none hidden**; the one apparent strain (habitat versus ground) was resolved by separating the enumeration from the anchor.
