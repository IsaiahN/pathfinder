# Figure-grounded audit: BUS-0083, measuring AI impact under work re-absorption

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, opened 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too (intelligence is essentially arrangement). However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the business question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`. World sources are secondary and every one was opened; they are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines `R = |Γ(b,a) - o′|` per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is what the business believes the AI will do, formed from vendor claims, pilots and inherited priors about automation.
- **a** is the deployment: give the tool to a team, retire a step, change a workflow.
- **Γ(b,a)** is the local prediction: minutes saved on the instrumented task, tickets closed per hour, the before/after number the dashboard prints.
- **o′** is what the whole system returns: total work in the system, new review and coordination load, quality, customer outcome, realized value.
- **s** is a task, a role, a downstream station, a reviewer queue, a customer. R is indexed by slot and by time, never aggregated into one firm-wide "AI impact" number.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."** (Fig 1 :28)

The phenomenon to explain is not the size of the local time saving but **where the residual goes after the saving is booked**. Call the local saving `Δt_s` on slot s and call the changed load on every other slot `Δw_j`. The observed fact the question reports is that `Δw_j` can grow while `Δt_s` is positive and while a single netted number `Δt_s - ΣΔw_j` looks small, flat, or even favourable. In figure terms that is a legal state, not an anomaly:

> **"a global R near zero with one live slot residual is a legal state"** (Fig 1 :13)
> **"Support is satisfied when some slot carries positive mass, so a global residual near zero with one live slot is a legal state and not an inert"** (Fig 1 :20)

State the residual as: *why does the gap between the local prediction 'time saved here' and the whole-system return 'what work now exists' stay invisible to the metric that booked the saving?* This is an effect description. It names no theory, no "rebound effect", no "Jevons", no "work expands". Those are candidate names from other frames and are withheld until after the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a measurement protocol with four properties, (i) residual indexed per slot, never reduced to a net headline, (ii) the habitat enumerated outward until the cascade stops mattering, (iii) the ground as the only metric, with the local time saving kept as an instrument and disqualified as a verdict, and (iv) an explicit round-trip gap and a stated mode. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so section 4's refuter can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* A market is named directly. For this question the candidate anchors are realized customer outcome, quality-adjusted throughput, revenue and survival. Fig 2 :30: *"you push on it, it is not an anchor."* "Hours saved" moves when the vendor, the dashboard designer or the incentive scheme pushes on it, so it is an instrument at best. Fig 1 :23: *"The ground enters as the only metric."*

**Initial anchor error, recorded and corrected.** An early pass named "total system hours" as the anchor. That is still a count the measurement frame produces, and a count that moves when the definition of "work" moves. Re-census: the anchor is the realized business outcome (the market, the customer), and total hours are one instrument ranged against it, not the ground. The correction is kept visible here rather than silently applied.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a four-place relation: business Γ, action a, system return o′, indexed by slot s and ordered by time t. It carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72), because the saving precedes the re-absorption, and a **comparison** bond (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87), because "impact" is judged against a threshold of what counts as a gain. It is not symmetric: the tool and the workflow are not interchangeable.
- **Symmetry.** "Saved" is relative to a baseline and to a quality floor, not an absolute quantity (Fig 12 :85-89; Operators table :46-51). Re-absorption is asymmetric in time: work that has appeared is not removed by reversing the deployment.
- **Scale.** Three scales are in view: the single worker's step-by-step loop (Fig 1, one agent), the team and its queue of tasks (Fig 4, population with *"something that ranks what they produce"*, Fig 4 :5), and the firm's market return across quarters. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21) and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The instrumented task** (one agent, one slot) | worker, AI tool, the task X | minutes per task, local throughput | yes: observable task output at a stated quality floor | admitted |
| **D2 The workflow habitat** (population of slots, the "elsewhere") | downstream tasks, reviewers, coordinators, new demand, quality checks | work volume and load per slot | yes: per-slot work counts and queue states, measured against realized output (D3) | admitted |
| **D3 The business ground** (market) | customers, revenue, competitors | realized value | yes: customer outcome and market return (Fig 2 :29 names "a market") | admitted |
| **D4 The measurement channel** (instruments and metrics) | dashboards, time tracking, KPIs, review protocols | readings | yes: the ground it is supposed to track; contact is testable at the ground | admitted |
| X1 "AI productivity" as a free-floating property of the tool | the tool | benchmark score | **no** anchor independent of a habitat and a ground; a benchmark is frame-internal | not a domain yet |
| X2 "Time saved" as a standalone outcome | the task slot | minutes | measurable, but it is D1's slot-local instrument, not a ground; absorbed into D1 | absorbed |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that benchmark performance is useless. X2 is real but is a quantity, not a domain: it is the reading on one slot.

### 1.3 Partition or union

D1 and D2 overlap: the time saved on the instrumented task re-enters the workflow as new work, so their overlap is a compound with its own loop. D2 and D3 overlap: workflow output meets the market, so that overlap is a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: (C1) the local saving registers on its own slot, and (C2) the re-absorbed work registers on other slots at a distance. A business failing only C1 and a business failing only C2 are not different degrees of one failure; they need different instruments. The essay *The Library of Babel*, opened this session, states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the firm see the new work on other slots at all?) → 2 vocabulary (does the measurement system have terms for downstream load, review burden, quality and rework, or only for minutes?) → 3 objective (what counts as progress: a ground-level outcome, not a local time saving) → 4 planning (where to aim the next probe) → 5 learn and carry (methods, not recordings of one quarter's number). The middle link is the one with no instrument:

> **"situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."** (Fig 3 :26)
> **"Most improvement effort in practice lands above the break, because that is where the measurements already exist."** (Fig 3 :28-29)

Fig 12 :111-113 says a vocabulary holding only ingredients can name a state and cannot name a route to one: *"A vocabulary without bonds can name a state and cannot name a route to one."* A dashboard that records minutes and headcount but not the re-absorption route is holding ingredients only.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified; global near-zero is legal | governs how R is indexed and what may count as a metric |
| 2 The Ground | market is a named anchor; independence vs common pool; correlation valence | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs scale transfer and the reporting gap |
| 5 Mint Pipeline | three guards as a product; settlement; frame-internal success | governs when a new metric can be admitted at all |
| 6 Closure / Reachability | import is the only operator that moves the wall; instruments improved from worse ones | governs what a new instrument is and is not |
| 7 Room Chain | same closure handed along; fidelity times ground pressure | governs the "everyone feels faster" trap |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and source rules |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; saturated metrics, pooled readings | governs metric degradation and anchor reachability |
| 11 The Habitat | capability is agent-and-habitat; contact cascades; enumerate, never compose | decisive for D1 and D2 |
| 12 The Bond | flat formula vs arrangement; cycle, catalyst, two currencies | governs why an identical local saving can have different whole-system outcomes |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop |

Strain test applied during this census: an early pass applied Fig 13's six physical terms directly to "work", calling a task a kind of energy and a queue a kind of gradient. That is a strain, so Fig 13 does **not** govern business work. Re-census sent it to the honest-stop role only (section 6, strain S1). A second strain arose from applying Fig 12 :125's "two currencies" to hours versus new work; see section 6, strain S2, where it is demoted from governing line to analogue. No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about business measurement, `grounded` only if settled by a measurement. None is `grounded`.

### F1 - Index the residual per slot; never net the saving against the new work into one headline

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 1 per-slot rule and Fig 12 two-currency rule, low overlap: agent indexing versus composition pricing).**

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"A composition costs in two currencies, and they do not add."** (Fig 12 :125)
> **"Summing them into one figure is the error this names, not the fix for it. A price in bits and a price in actions are two readings, held apart."** (Fig 12 :130)

`Δt_s` is measured in hours; the new work `Δw_j` is measured in tasks, reviews, coordination acts and quality repairs. They are different units. A single "net productivity" figure adds quantities that cannot be added, and the addition is the named error rather than a harmless simplification. The per-slot reading keeps the signal that says where to look.

**Refuter:** a controlled case in which one aggregate number correctly predicts where new work appears, with no slot carrying a live residual when the aggregate is near zero. Under Fig 1 :13 that should be impossible; if observed, F1 is false.

**World bearing (secondary only):** Jevons, quoted in the Wikipedia entry opened this session, *"It is a confusion of ideas to suppose that the economical use of fuel is equivalent to diminished consumption. The very contrary is the truth."* That is the same shape at a different stratum: an efficiency gain that does not show up as a saving in the resource accounts. Brynjolfsson, Li and Raymond, *Generative AI at Work* (NBER WP 31161, 2023; QJE 2025), report *"Access to the tool increases productivity, as measured by issues resolved per hour, by 14% on average"*, a per-hour, per-worker slot reading, not a netted firm-wide figure. Both corroborate the per-slot shape; neither supplies a business ground reading here.

### F2 - A flat aggregate is a legal state, not evidence of zero impact

**Mode: `specified`. Domain D1. Status: triangulated (Fig 1 :13/:20 and Fig 10 :26, low overlap: agent state rule versus channel decay rule).**

> **"a global R near zero with one live slot residual is a legal state"** (Fig 1 :13)
> **"saturated metrics, pooled readings"** (Fig 10 :26)
> **"the output is not a verdict, it is you have lost touch"** (Fig 10 :27-28)

When the firm-wide number does not move while a reviewer queue grows, the correct report is not "AI had no effect". It is "the aggregate cannot hold what the slots carry". Pooled readings and saturated metrics are the two named ways the channel loses the ground while the ground keeps paying someone else.

**Refuter:** a documented case in which the aggregate is near zero and, on independent per-slot instrumentation, no slot carries positive residual. If no slot is live, F2's reading is not needed.

**World bearing:** the *Productivity paradox* entry opened this session records Solow's quip, *"You can see the computer age everywhere but in the productivity statistics."* It corroborates the possibility of a near-zero aggregate with live local change, but it is an economics-pool source, one witness (Fig 2 :31).

### F3 - New work is a contact cascade; enumerate the habitat outward, not just the instrumented task

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 11 habitat cascade and Fig 3 dependency order, low overlap: ecology versus chain diagnosis).**

> **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."** (Fig 11 :44)
> **"actors: what acts on it, and what it acts on"** (Fig 11 :45)
> **"conditions: light, water, temperature, season, terrain"** (Fig 11 :46)
> **"relations: pollination, predation, competition, dependency"** (Fig 11 :47)
> **"Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."** (Fig 11 :52-53)

The direct saving is first-order contact. The new review load, the raised expectation of turnaround, the rework and the changed customer demand are second and third order. Scoping the measurement to the AI-augmented task is exactly the scoping that missed the eagles. The habitat is enumerated, never composed: list what touches the residual, then what touches those.

**Refuter:** a documented deployment in which every material change in work is confined to first-order direct contact and no second or third-order effect registers on any instrument after the cascade window has elapsed. That breaks the enumeration rule's usefulness here, if not the figure.

**World bearing:** Parkinson's Law, opened this session, *"Work expands so as to fill the time available for its completion."* That is the same sign of loop at the individual stratum. It corroborates the direction of the cascade, not its magnitude in any particular firm.

### F4 - AI's impact is a property of the AI-and-workflow, not of the tool

**Mode: `specified`. Domains D1, D2. Status: single-source on the capability claim (Fig 11), which supplies its own stated falsifier.**

> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)

A tool benchmark, a model score, and a local time saving are agent-only readings. They become impact only when contact with the workflow and the ground changes. Fig 11 :72 gives the standing falsifier in the figure's own words: *"an agent-only improvement that moved the ground would refute the capability claim."*

**Refuter:** an agent-only AI improvement, with habitat and contact demonstrably unchanged, that moves the ground (realized customer outcome or revenue). If it does, F4 is false.

**World bearing:** METR, *Measuring AI Ability to Complete Long Software Tasks* (2025), opened this session: *"It is clear that capabilities are increasing very rapidly in some sense, but it is unclear how this corresponds to real-world impact."* That is a direct corroboration of the capability/impact distinction from the AI-evaluation field, low overlap with the management and economics pool.

### F5 - Time saved is a frame-internal quantity; the ground is the only metric

**Mode: `specified`. Domains D1, D3. Status: triangulated (Fig 1 metric rule and Fig 2 anchor rule, low overlap: agent accounting versus ground triangulation).**

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."** (Fig 2 :29)
> **"Frames range against the ground. They do not negotiate with it."** (Fig 2 :45)

The time-saving dashboard belongs to the frame that deployed the tool and reports what that frame also produces. A frame scoring itself with its own output is the named disqualification. Time saved is still useful as a slot-local instrument, ranged against an external outcome; it is not the verdict.

**Refuter:** a measurement system that settles business impact using only its own time-saved metric, where the anchor demonstrably does not move when the metric's designers push on it. By Fig 2 :30 such an anchor does not exist; if one is produced, F5 is false.

**World bearing:** Goodhart's law, opened this session: *"When a measure becomes a target, it ceases to be a good measure."* The architecture's own citation list (opened at the Substack *Arrival of the Fittest* article) tags Goodhart 1975 as an instance for exactly the instrument clause in Fig 2 and the convention warning in Fig 10. Agreement here is expected and is one pool, not two witnesses.

### F6 - Keep the measurement channel reachable: watch for saturated metrics, pooled readings and a metric that has become a convention

**Mode: `specified`. Domain D4. Status: single-source (Fig 10); the Goodhart source corroborates at a different stratum.**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"stale percepts, dropped transients,"** (Fig 10 :25)
> **"saturated metrics, pooled readings"** (Fig 10 :26)
> **"→ keep the anchor reachable"** (Fig 10 :29)
> **"a convention that decides an outcome has stopped being one"** (Fig 10 :47)

The business ground keeps paying; the channel is what fails. A time-saved KPI saturates once every task is already fast, and pooling readings across teams hides the live slot. When the KPI starts deciding bonuses and headcount, it has crossed from convention into verdict and stopped being a convention.

**Refuter:** a measurement channel whose readings remain faithful to the ground after its headline metric has saturated, its readings have been pooled, and the metric has been used to decide outcomes, with fidelity checked against an independent instrument. If it stays faithful, F6's named failure modes are not operative here.

### F7 - Independence: agree with an anchor, not with each other

**Mode: `specified`. Domain D4. Status: triangulated (Fig 2 independence and Fig 7 room chain, low overlap: triangulation versus selection between rooms).**

> **"Two people reading the same report are not two frames; two instruments pointed at the same thing are."** (Fig 2 :31)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"same closure, handed along;"** (Fig 7 :12)
> **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)

"Everyone reports feeling faster" is one pool talking. "The vendor survey and the queue telemetry agree" is still one pool if the survey was designed from the telemetry. Two instruments count only to the degree they draw on different evidence. Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*

**Refuter:** a case in which two genuinely low-overlap instruments (different evidence, different operators) disagree with the ground in the same way and for the same unrecorded reason. That would show independence was not enough; F7 would need amendment.

### F8 - Unbundle: "time saved" and "new work" are two conditions, not one quantity to subtract

**Mode: `specified`. Domains D1, D2. Status: single-source (Fig 9); the union reading is the figure's own.**

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

A business that books `saved - created` as one net number has treated a union as an arithmetic difference. The two conditions have different instruments and different grounds: the saving is checked against task output at a quality floor, the new work against per-slot load and realized outcome. Measuring them separately is not pedantry; it is the difference between a compound that can be diagnosed and a mixture that cannot.

**Refuter:** a case where a single netting operation correctly identifies the responsible condition in every instance and leaves no categorically different residue. Under Fig 9 :57 that would make the union reading unnecessary here.

### F9 - The middle link has no instrument: terms for what the workflow affords, and what counts as progress

**Mode: `specified`. Domains D2, D4. Status: triangulated (Fig 3 missing instrument and Fig 12 bond grammar, low overlap: dependency chain versus composition notation).**

> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)
> **"A vocabulary without bonds can name a state and cannot name a route to one."** (Fig 12 :111)
> **"A plan is a sequence. A goal is a comparison. Progress is a subtraction."** (Fig 12 :112)

Most measurement effort lands above the break, where the measurements already exist (Fig 3 :28-29): task time, tickets per hour, adoption rate. The link that decides whether the system is getting somewhere, a vocabulary for re-absorbed work and a ground-level definition of progress, has no instrument and so attracts the least attention. A dashboard with minutes and headcount but no term for downstream load is holding ingredients, not a grammar.

**Refuter:** an organization with a working, ground-checked instrument that states what counts as whole-system progress per slot and has used it to detect a re-absorption failure before the local metric moved. If such an instrument is routine, F9's missing-link diagnosis does not apply.

### F10 - Describe the residual in effect terms before choosing the metric

**Mode: `general` at the structural level, `specified` when applied to a reporting system. Domain D4. Status: triangulated (Fig 9 and the tacit-knowledge essay, low overlap: figure lookup versus human communication).**

> **"describe it before you go looking, or any frame you pick will seem to fit"** (Fig 9 :27-28)
> **"your words are borrowed too, so describe the effect rather than the cause"** (Fig 9 :30-31)
> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)

If the firm starts with "we will measure time saved", any dashboard will seem to fit; the metric was chosen before the residual was described. The remedy from *Decoding Tacit Knowledge*, opened this session, is checkable by anyone: *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."*

**Refuter:** a case where a metric was chosen first and still surfaced the residual it was not designed to see, with the discovery recorded before the description was written. If that is reproducible, F10's ordering is a preference, not a constraint.

### F11 - Report the round-trip gap and the mode; say unreachable rather than zero

**Mode: `general`. Domains D3, D4. Status: triangulated (Fig 4 round trip and Fig 8/Fig 13 honest stop, low overlap: scale transform versus closure limit).**

> **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."** (Fig 4 :30)
> **"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."** (Fig 4 :31-32)
> **"So a search that finds nothing is never a proof of absence."** (Fig 8 :39)
> **"Unreachable is a verdict here, not a silence"** (Fig 13 :134)

Any dashboard is a coarser description of the workflow. Carrying its numbers back down to a decision without measuring what was dropped is dead reckoning. Where no instrument registers the new work, the honest line is `unreachable at this budget` or `no instrument registers it`, not `impact = 0`. Fig 8 :39 forbids reading a null result as absence.

**Refuter:** a reporting scheme in which abstraction to a headline and concretisation back to slots is lossless against the ground, with the round-trip gap measured at zero. Then R_T need not be reported.

---

## 4. Pre-registered refuter

Required before any outreach. The shape claim in section 0 is bound, so the following can fire on it. Written before the conclusion and before any world source was used to settle it.

The shape claim is refuted if any of the following holds:

1. A controlled whole-system measurement shows that a positive local `Δt_s` is not followed by any `Δw_j` on any other slot, and that quality-adjusted output at the ground rises correspondingly with no compensating coordination, review or rework load.
2. A single aggregate metric is demonstrated to locate where new work appears, with no slot carrying a positive residual while the aggregate is near zero (breaks F1 and Fig 1 :13/:19).
3. An agent-only AI improvement, with habitat and contact demonstrably unchanged, moves the ground (breaks F4 and Fig 11 :40).
4. Two genuinely low-overlap instruments, drawing on different evidence, agree with each other while both diverge from the ground in the same way for an unrecorded shared reason (breaks F7's independence requirement).
5. A reporting scheme shows a measured round-trip gap of zero between its headline and its per-slot readings (breaks F11).

If any fires, the protocol is wrong in that respect and the affected finding is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation: what to actually measure

This is the figure-derived answer, expressed as a protocol rather than a single KPI. Mode `specified`, ungrounded.

1. **Index by slot, never by headline.** Report `Δt` and `Δw` per task, per role, per downstream station, per reviewer queue (F1, Fig 1 :19/:22).
2. **Enumerate the habitat outward.** List actors, conditions and relations in contact with the saved time, then what contacts those, until adding another step changes nothing (F3, Fig 11 :44-47). Write the cascade distance into the report.
3. **Pin the verdict to an external ground.** Customer outcome, quality-adjusted throughput, realized value. Keep local time saved as an instrument and state explicitly that it is not the verdict (F5, Fig 1 :23/:27, Fig 2 :29).
4. **Hold the two currencies apart.** Report hours and new work in separate columns with separate units. Do not print a net "productivity gain" computed by subtraction (F1, Fig 12 :125/:130; with the analogue caveat in section 6, strain S2).
5. **Keep the channel reachable.** Watch for a saturating metric, pooled readings and a KPI that has started deciding outcomes. When that happens, say the channel has lost touch rather than the ground has changed (F6, Fig 10 :24-29, :47).
6. **Buy independence deliberately.** Pair the internal dashboard with an instrument that does not draw on the same evidence, for example queue telemetry against a customer-outcome measure rather than another survey of the same team (F7, Fig 2 :31,:42).
7. **Describe the residual before choosing the metric.** Write the expected effect in plain terms, what one would expect to see if new work were being created, before the dashboard is specified (F10, Fig 9 :27-28).
8. **Report R_T and the mode.** State what the headline drops, state `specified` or `grounded`, and report `unreachable` rather than zero when nothing registers (F11, Fig 4 :30-32, Fig 8 :39).
9. **Send a generator, not a recording.** Fig 4 :22: *"Only methods cross up. Only head starts come down."* The artefact worth circulating is the measurement protocol and its refuter, not one quarter's number.

---

## 6. Canonical usage check, retractions and strains

Two sources were read after the first five sections and they govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md` (2026-11-22): *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the limit: the framework reports *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments cannot distinguish and records the lineage. *"Indiscernibility is not identity."*
- `THE_FORMULA.md`, steps 5 and 7: *"SETTLE the ground settles it. Verified only by what pays. A gate is not the ground."* The distinction between `SEARCHED`, `INWARD` and `OUTWARD` is kept: within this budget, the missing instrument question is `INWARD` (extend an instrument already returning something), and the question of which measurement frame already predicts work re-absorption is `OUTWARD` (effect description first). They are run as two tracks and never read against each other.

### Retraction and confirmation log

| earlier reading | status after the canonical check |
|---|---|
| "Total system hours" named as the anchor | **Retracted.** It is a count the measurement frame produces. The anchor is the realized business outcome (market or customer), with hours as one instrument. Section 0 now records both. |
| "Time saved must be discarded as frame-internal" | **Narrowed, not kept in that form.** Fig 1 :27 disqualifies a frame scoring itself with what it produces, so time saved cannot be the verdict. It remains a legitimate slot-local instrument when ranged against the ground. F5 now says demoted, not discarded. |
| Fig 12 :125 read as directly governing hours versus new work | **Demoted to analogue.** See strain S2. It no longer carries a finding; F1 stands on Fig 1 alone and the Fig 12 reading is corroboration at a different stratum. |
| "The local time saving is an error signal R" | **Confirmed and refined.** Γ(b,a) is the local prediction, o′ is the whole-system return, so R is the gap between them, indexed per slot. That is the mis-indexing the question reports. |
| Union reading of saving and new work | **Confirmed** from Fig 9 :54-57 and the *Library of Babel* essay's bundling stop condition. Two different sources, low overlap. |
| "No instrument registers the new work" treated as impact zero | **Refused and confirmed as a refusal.** Fig 8 :39 and Fig 13 :134 make a null reading a verdict of unreachability, not a measurement of zero. |
| STRAIN S1, applying Fig 13's six physical terms to work tasks | **Resolved by re-census.** Fig 13 governs the physical substrate, not business work. It is used only for the honest-stop role (F11), where its claim is structural: a set is closed while its arrangements are not. |
| STRAIN S2, Fig 12's two currencies applied to business units | **Named, not hidden.** Fig 12 :125 prices bits and actions in composition. Hours and tasks are different business units, so the transfer is an analogue from composition cost to measurement, not a governing line. F1 was re-censused and now stands on Fig 1 :19/:22; the Fig 12 quote is retained as corroboration from a different domain, marked single-analogue. |
| STRAIN S3, Goodhart and the figures share an evidence pool | **Recorded.** The architecture's own citation list tags Goodhart 1975 as an instance for Fig 2's instrument clause, so the essay and the figure are not independent witnesses. F5's triangulation is Fig 1 plus Fig 2, not Fig 1 plus Goodhart. |

### Round trip note

The condensation from the figures to "measure per slot, enumerate the habitat, pin to ground" is lossy. What drops out: the distinction between breadth of the habitat and depth of any one reading (Fig 11 :44 versus :45-47), the requirement that independence be bought in proportion to the cost of being wrong (Fig 2 :42), and the fact that a convention which decides an outcome has stopped being one (Fig 10 :47). `11_audit.md` measures R_T qualitatively against these dropped constraints.

### Updated verdict

The shape survives. The protocol is per slot, habitat-enumerated, ground-pinned, dual-currency, independence-aware, mode-labelled and honest about its round-trip gap. What does not survive: any single net headline number, any claim that a local time saving settles impact, any treatment of a null reading as zero, and any direct governance of business units by the physical substrate. Strains after re-census: two analogues named (S1, S2) and one shared-pool warning (S3), none hidden. Verdict: `specified`, ungrounded, candidate.
