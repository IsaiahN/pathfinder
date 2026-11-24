# Figure-grounded audit: BUS-0026, performance-based pay and bonuses

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every finding below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, opened 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the business question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`, `THE_SEAT_MAP_Field_Guide_amended.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o'| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is what the employee believes the pay scheme rewards, formed from personal history and inherited priors. The scheme is part of b: it is the declared mapping from action to money.
- **a** is the allocation of effort across tasks, including the unmeasured ones.
- **Γ(b,a)** is what the employee's library predicts the metric will reward.
- **o'** is what the organization actually gets: durable value, quality, cooperation, customer outcomes, survival.
- **s** is the employee, the team, or the task. R is indexed by slot and by time, never aggregated into an engagement or satisfaction average.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"The ground enters as the only metric."** (Fig 1 :23)

The phenomenon to explain is the behaviour of R when a metric is attached to money. In some slots the gap shrinks: effort moves toward what the organization needs. In others the gap grows: the metric reading rises while the outcome degrades. A frame that predicts all schemes shrink R, or that all schemes corrupt it, has a residual here.

State the residual as: *why does tying pay to a measured result sometimes narrow the gap between predicted reward and realized organizational outcome, and sometimes widen it into gaming, short-termism, and internal competition?* This is an effect description. It names no theory, no "motivation", no "alignment", no "culture." Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: a conjunction of conditions that keeps metric fidelity, effort direction, and ground contact intact, plus an instrument for each failure. Until bound it predicts nothing and no check in the loop can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names candidates directly: *"A measurement, an experiment, a counter, a market, a patient outcome."* Fig 2 :30: *"you push on it, it is not an anchor."*

The viable anchor for BUS-0026 is the realized long-run organizational outcome: survival, customer outcomes, durable value, measured per slot. Employee satisfaction, engagement survey scores, and manager opinion all move when pushed, so they are instruments at best. A pay-for-performance scheme introduces a special danger: the metric becomes a number that people can push, so by the figure's own test it cannot be the anchor. That is the subject of F1.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a relation among employee belief b, action a, metric reading m, and outcome o', indexed by slot s and ordered by time t. It carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72), a **production** bond (`⇒`, *"A produces B; B did not exist before"*, Operators table :36-37), and a **comparison** bond (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87) for "superior" and for tournament ranking. It is not symmetric: employee and organization are not interchangeable, and a pay rule is not reversible by undoing the effort.
- **Symmetry.** "Superior" is a threshold relative to peers, not an absolute quantity (Fig 12 :85-89). A relative-performance scheme changes the bond from a threshold against a standard to a threshold against other employees, which is a different term (Fig 12 :92, *"Symmetry is what decides whether an arrangement is a new thing"*). Ranking is asymmetric by construction.
- **Scale.** Three scales are in view: the single employee's step-by-step loop (Fig 4 one-agent panel), the population of employees with *"something that ranks what they produce"* (Fig 4 :5), and the time channel across quarters and years. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The employee loop** (one agent, one scale) | employee, effort allocation, Γ, beliefs | actions, effort, pay received | yes: realized output on the contracted task, countable | admitted |
| **D2 The metric channel** (instrument) | the KPI, dashboard, rater, scorecard | readings, scores, rankings | yes: the long-run outcome the metric should track and that does not move when employees push it | admitted |
| **D3 The task composition** (multi-task library) | tasks as atoms, effort bonds between them | reach (what can be done well), cost of genuine improvement vs cost of gaming | yes: settlement, *"then check it against the ground, then carry it up"* (Fig 5 :32) | admitted |
| **D4 The habitat** (social frame) | peers, teams, managers, customers, entrants | cooperation, information sharing, rank position | yes: customer choice and organizational survival; the market as ground (Fig 2 :29) | admitted |
| **D5 The temporal channel** (across quarters and years) | review cycles, metrics, percepts, instruments | contact with the ground | yes: the ground, *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **X1 "greed" or "motivation" as a free-floating property of a person** | the person | talent, drive | **no** anchor independent of the market's verdict | not a domain yet |
| **X2 "culture" as sole cause** | the organization | norms | measurable climate surveys, but these are already inside D4's habitat conditions | absorbed into D4 |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that motivation never matters. X2 is absorbed because Fig 11 :46 names conditions (light, water, temperature, season, terrain) as habitat elements; culture is a habitat condition, not a separate ground.

### 1.3 Partition or union

D1 and D3 overlap: the metric enters the employee's loop, so their overlap is a compound with its own loop. D2 and D5 overlap: contact with the ground is exercised through the metric channel over time, so that overlap is a second compound. D4 and D5 overlap: competition is a habitat relation that plays out across review cycles. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are:

- **C1 metric fidelity:** does the measure still track the ground once it decides pay?
- **C2 effort direction:** does effort stay aimed at the unmeasured parts of the task, or drain to the measured atoms?
- **C3 ground contact over time:** does the channel to the long-run outcome stay reachable, or do metrics saturate and short-term readings pool?

A scheme failing only C1 and a scheme failing only C2 are not different degrees of one problem. They are different compounds and need different instruments. C3 is not a slower version of C1: it is a failure of the horizon, not of the reading. The Library of Babel essay states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

This is why the answer to the user's question is not a single "yes" or "no." The verdict is kept per domain and per condition, never averaged.

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the employee read the metric and the outcome?) → 2 vocabulary (does the metric have terms for what the task actually affords?) → 3 objective (can the employee say what progress toward the real outcome would count as?) → 4 planning → 5 learn and carry. The middle link, having terms for what the situation affords and saying what would count as progress, is the one with no instrument. Fig 12 :111: *"A vocabulary without bonds can name a state and cannot name a route to one."* A KPI names a state (units, calls, score). It cannot name the route to the outcome. Most compensation effort lands above the break, where metrics already exist (Fig 3 :29-30).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed and who may score whom |
| 2 The Ground | anchor definition; a convention that decides an outcome stops being one; correlation valence | decisive for D2 |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; lossy transform; R_T | governs individual-to-team-to-organization transfer |
| 5 Mint Pipeline | three guards; settlement; "nothing new here" | governs whether a metric change is a real capability |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs C2, renewal of effort direction |
| 7 Room Chain | repeated closure; agreement compounds, evidence does not | governs short-termism and repeated review cycles |
| 8 Union Surplus | idempotence; provenance separates convergence from import | governs multi-frame checks and source rules |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; keep the anchor reachable | decisive for C3 |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | decisive for D4, internal competition |
| 12 The Bond | two currencies, bits and actions; isomer, catalyst, functional group | decisive for C2; explains cheap description vs expensive verification |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop only |

**Strain test applied during this census.** An early attempt to apply Fig 13's six-term physical substrate directly to "employee motivation" only fit by calling effort a kind of energy and a bonus a kind of gradient. That is a strain, so Fig 13 does **not** govern employee motivation. Re-census sent Fig 13 to the honest-stop role only (section 7, strain S1). A second early attempt applied Fig 12's bond price to the dollar amount of a bonus; the price in the figure is in bits and actions, not currency, so that was also a strain and was dropped (strain S2). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about organizations, `grounded` only if settled by a measurement. None is `grounded`.

### F1: A metric that decides pay stops being a convention and becomes a frame

**Mode: `general` for the rule, `specified` for the pay application. Domain D2. Status: triangulated (Fig 2 and Fig 10, low overlap: anchor rule vs ground maintainer).**

> **"Guard, from Figure 10: a convention that decides an outcome has stopped being one."** (Fig 2 :43)
> **"a convention that decides an outcome has stopped being one"** (Fig 10 :47)
> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** (Fig 2 :29)
> **"you push on it, it is not an anchor."** (Fig 2 :30)
> **"Frames range against the ground. They do not negotiate with it."** (Fig 2 :45)

Before a metric is attached to pay it is a convention: a declared way of reading the organization. Once it decides outcomes, employees can push it. By Fig 2 :30 anything that moves when pushed is not an anchor. So a pay metric cannot serve as the ground it was meant to represent. This is the figure-grounded form of Goodhart's law and of surrogation, both read as secondary corroboration (section 3, F9).

The consequence for the question is not "bonuses are bad." It is: the same metric that improves the reading can corrupt the thing read, and no amount of agreement about the metric repairs it. Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*

**Refuter:** a documented scheme in which a metric that determines a material share of pay is demonstrated to remain an unpushable reading of the ground, with the demonstration measuring whether employees can move it without moving the outcome. If the metric survives that test, F1 is false for that scheme.

### F2: A frame cannot score itself with the quantity it produces

**Mode: `general`. Domains D1, D2. Status: triangulated (Fig 1 and Fig 2, low overlap: agent loop vs anchor).**

> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"predicates minted, and credibility accrued"** (Fig 1 :26)
> **"The ground enters as the only metric."** (Fig 1 :23)

An employee whose effort produces the metric reading, and whose pay is then computed from that reading, is scored with a quantity the same frame produces. This is the named frame-internal failure. It is not cured by making the metric more precise: precision increases the leverage on the same quantity (Fig 12 :125, two currencies). The cure is an independent reading from a frame that does not draw on the same evidence (Fig 8 :50, *"Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence"*).

**Refuter:** a scheme where the scored quantity is demonstrably produced by a frame that does not hold the metric, with the producer and scorer drawing on different evidence and the scorer unable to reconstruct the metric reading. If no such separation is possible in practice, F2 stands as a structural limit rather than a reform proposal.

### F3: Effort drains to the cheap measured atom, because bits and actions do not add

**Mode: `specified`. Domain D3. Status: triangulated (Fig 12 and Fig 6, low overlap: composition price vs closure).**

> **"A composition costs in two currencies, and they do not add."** (Fig 12 :125)
> **"Bits price the description. Actions price finding out whether it holds."** (Fig 12 :126)
> **"They are in different units, so a system holding one accounting cannot compare them"** (Fig 12 :127)
> **"Neither figure predicts the other, so both are read or the choice is made blind."** (Fig 12 :129)

A metric is a cheap description: a number in bits. Whether that number corresponds to the real outcome takes actions to verify. A pay scheme that prices only the description creates a system that cannot notice the shortfall. Fig 12 :128 notes the asymmetry: *"A long chain of cheap parts is expensive to describe and may cost one action to refute."* Here the asymmetry runs the other way: a short metric is cheap to state and expensive to settle against the ground.

When multiple tasks are contracted, the measured one becomes the atom that effort composes over. Inside the closure of the measured task, effort can be optimized forever without adding anything to the unmeasured outcome: *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."* (Fig 8 :32) and *"MINT composes inside the closure and can never add an atom."* (Fig 6 :21)

World bearing (secondary only). The surrogation literature reports that the extra tendency to surrogate under incentives *"is reduced when managers are compensated based on multiple measures of a strategy rather than on a single measure"* (Surrogation page, reporting Choi, Hecht and Tayler 2012). That is one witness for the multiple-measure remedy, in the same broad management-accounting pool, not an independent confirmation. The piece-work literature reports the tradeoff directly: *"Incentivizes productivity: piece rate pay encourages workers to increase their output as they directly benefit from producing more"* and *"Quality concerns: workers may sacrifice quality for quantity to maximize their earnings"* (Piece work page). Both readings come from one tertiary source each; see the ledger.

**Refuter:** a documented scheme where effort allocations under a single measurable proxy remain identical to allocations under a full multi-task ground measurement, with no drift toward the measured atom and no degradation of the unmeasured task. That breaks idempotence as applied here.

### F4: Short-termism is channel decay, not a shrinking ground

**Mode: `specified`. Domain D5. Status: triangulated (Fig 10 and Fig 7, low overlap: ground maintainer vs room chain).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"saturated metrics, pooled readings"** (Fig 10 :26)
> **"you have lost touch"** (Fig 10 :28)
> **"keep the anchor reachable"** (Fig 10 :29)

A firm does not lose long-run results because the market stopped paying; it loses them because its readings go stale, its metrics saturate, and its distinct signals are pooled into an average. A quarterly bonus makes the saturation worse: the metric is refreshed more often, so the channel to the long horizon is the part that atrophies.

Fig 7 gives the two-factor form:

> **"Progress per handoff has two factors. Zero either and the chain runs in place:"** (Fig 7 :37)
> **"the bracket’s fidelity across the handoff"** (Fig 7 :38)
> **"the ground’s pressure on the room"** (Fig 7 :39)

A year of bonus reviews is a chain of handoffs. If either the fidelity of the bracket between the metric and the outcome, or the ground's pressure on the team, goes to zero, the chain runs in place even while every metric is green.

**Refuter:** a documented case in which short-term behaviour appears while metric fidelity and ground pressure are independently measured as high and non-declining, and the long-run outcome still degrades only through channel decay. If both factors stay high, F4's mechanism is not the cause.

### F5: Internal competition is a repeated room, and a rival's valence flips with the residual

**Mode: `specified`. Domains D4, D5. Status: triangulated (Fig 7 and Fig 11, low overlap: selection between rooms vs habitat valence).**

> **"same closure, handed along;"** (Fig 7 :12)
> **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)
> **"An actor’s valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)

A relative-performance scheme makes peers the comparison term. Every review hands the team the same room: rank against the same peers, on the same metric, with the same closure. Agreement about the ranking compounds while evidence about the outcome does not. The colleague who was a collaborator under a shared outcome becomes a rival under a forced ranking without anything about the colleague changing; the valence flipped because the residual changed. Fig 7 :35: *"A room’s agreement is variation, not a verdict. Selection between rooms is where the ground votes."*

World bearing (secondary). The goal-setting literature states the effect in its own vocabulary: *"Goals may also result in overly singleminded competition within organizations if two or more people have goals that encourage competition rather than cooperation. This can include withholding information or ideas, obstructing the goal progress of others"* (Goal setting page, reporting Latham 2007). It also lists *"damage to organizational culture"* among the side effects. This is one witness from the OB pool, not independent of the compensation literature's evidence base.

The animal-behaviour source offers a genuine low-overlap analogue. The Brelands described instinctive drift as *"a clear and utter failure of conditioning theory"*: raccoons trained to deposit coins into a bank began to *"dip the coins in and out of the bank and rub them with their paws rather than depositing them"* (Instinctive drift page). A reinforcement schedule cannot reliably override a habitat-provided behaviour. The analogue corroborates Fig 11 :39 at the level of mechanism shape, not as a claim about employees.

**Refuter:** a documented team that keeps the same ranking closure across two review cycles and keeps producing new, ground-verified readings without withholding information or obstructing peers. Under Fig 7 :36 that should be impossible; if observed, F5 is wrong for that team.

### F6: Ability is agent-and-habitat, so an agent-only incentive change cannot be credited

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 11 and Fig 4, low overlap: habitat vs membrane).**

> **"capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)
> **"it or a thousand. Only the actors, the currency and the anchor change."** (Fig 4 :20)

If a team's results improve after a new bonus scheme, the figures forbid crediting the employee alone. The improvement is in the agent-and-habitat system: the metric, the rater, the peers, the market, and the horizon all changed contact. Attributing the gain to "motivation" is an agent-only improvement story. Fig 11 :72 gives the standing refuter: an agent-only improvement that moved the ground would refute the capability claim.

**Refuter:** a controlled comparison in which a pay change improves long-run results while every habitat condition and every channel to the ground is held demonstrably constant. If it survives, F6 is false.

### F7: The metric is a dictionary, not a grammar of routes

**Mode: `specified`. Domains D1, D3. Status: single-source for the figure (Fig 12, with Fig 3 as corroboration from the same framework, so one witness).**

> **"A vocabulary without bonds can name a state and cannot name a route to one."** (Fig 12 :111)
> **"A plan is a sequence. A goal is a comparison. Progress is a subtraction."** (Fig 12 :112)
> **"The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."** (Fig 3 :26)

A KPI states a goal (a comparison) and a level (a state). It cannot state the route to the outcome, because the route is a bond arrangement over tasks, not an ingredient. This is the middle-link break of Fig 3 applied to compensation: more precise goals do not repair the missing grammar. It corroborates the goal-setting literature's *"tunnel vision"* and *"narrow focus"* findings (Goal setting page), but the governing claim here is the figure's.

**Refuter:** a metric system that demonstrably encodes the route (sequence, production, and comparison bonds over tasks) and still fails to improve outcomes. That would falsify the claim that the missing grammar, not the incentive, is the binding constraint.

### F8: Isomers of incentive design, and the catalyst that becomes spent

**Mode: `specified`. Domain D3. Status: triangulated (Fig 12 and Fig 11, low overlap: bond structure vs habitat valence).**

> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** (Fig 12 :117)
> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)

Two pay schemes with identical ingredients (base pay, bonus pool, metric, review cycle) are isomers if the bonds differ: one composes them as an individual threshold comparison, the other as a shared production chain. A resource-list comparison of the two schemes cannot tell them apart; the arrangement is the substance. A bonus that regenerates cooperation across uses is a catalyst; the same bonus that spends trust is a spent part, and nothing in the scheme's description records which it is. This is Fig 11 :49-51 at the composition level.

**Refuter:** two schemes with identical atoms and identical bonds whose long-run outcomes diverge with no difference in habitat or ground contact. That would move the explanation out of composition and into something not censused here.

### F9: The world literature corroborates the shape, but most of it is one pool

**Mode: `general`. Status: figure-governed; world sources secondary.**

The world sources were opened and are recorded in `10_source_ledger.csv`. Their standing:

- **One broad management pool, one witness.** The Goal setting, Surrogation, Piece work, and Overjustification pages summarize the compensation and motivation literature. They agree that measurement plus incentive can raise measured output and can also narrow focus, corrupt the measure, and damage cooperation. Because they summarize overlapping citation chains, their agreement is one witness (Fig 2 :40). Their value is that they state both halves of the user's question, which the figures alone do not hand us as a measured result.
- **Low-overlap witnesses for the mechanism shape:** Goodhart's law (economics of regulation, *"When a measure becomes a target, it ceases to be a good measure"*) corroborates F1 from a different field; Campbell's law (social science methodology, *"The more any quantitative social indicator is used for social decision-making, the more subject it will be to corruption pressures"*) corroborates F1 from a different field; reward hacking (AI engineering, *"two reward functions are unhackable if and only if one of them is constant"*) corroborates the limits of proxy alignment from a field that does not study employees; instinctive drift (animal behaviour) corroborates Fig 11 :39's contact claim from a field that does not study organizations.
- **Honest limitation of the world search.** The primary papers (Lazear 2000, Deci, Koestner and Ryan 1999, Holmstrom and Milgrom 1991) were not opened: the RePEc page returned 404, PubMed returned a vulnerability-disclosure stub, and the NBER identifier found the wrong paper. The tertiary pages are what was actually read. No claim here rests on a source that was not opened. This is recorded rather than hidden.

**Refuter:** a genuinely independent frame with a different evidence pool showing that pay metrics remain unpushable anchors across settings. Since most accessible sources are tertiary, a single well-run prospective study would outweigh all of them.

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per employee or team, never an averaged engagement score | general | Fig 1 :19, :22 | figure-derived |
| The long-run outcome is the anchor, not the metric | general | Fig 2 :29, :30 | figure-derived |
| A metric that decides pay stops being a convention | general | Fig 2 :43; Fig 10 :47 | triangulated F1 |
| A frame cannot score itself with the quantity it produces | general | Fig 1 :27 | triangulated F2 |
| Effort drains to the measured atom; bits and actions do not add | specified | Fig 12 :125-129; Fig 8 :32 | triangulated F3 |
| Short-termism is channel decay, not ground decay | specified | Fig 10 :24, :26, :28; Fig 7 :37-39 | triangulated F4 |
| Internal competition is a repeated room with flipping valence | specified | Fig 7 :12, :13, :36; Fig 11 :49-51 | triangulated F5 |
| Results are agent-and-habitat, not agent alone | specified | Fig 11 :39, :40 | triangulated F6 |
| A KPI names a state, not a route | specified | Fig 12 :111, :112; Fig 3 :26 | single-source F7 |
| The question is a union of three conditions | general | Fig 9 :54, :55, :57 | figure-derived |
| Which particular scheme pays off in a given firm | not stated | none | gap: framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule in the Seat Map field guide (line 287): *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A metric that determines a material share of pay is demonstrated to remain an unpushable reading of the ground, with employees unable to move the reading without moving the outcome (breaks F1, Fig 2 :43, Fig 10 :47).
2. Effort allocations under a single measurable proxy remain identical to allocations under a full multi-task ground measurement, with no drift to the measured atom (breaks F3 and idempotence, Fig 8 :32).
3. Short-term behaviour appears while bracket fidelity and ground pressure both measure high and non-declining (breaks F4, Fig 7 :37-39).
4. A team keeps the same ranking closure across two review cycles and keeps producing new ground-verified readings with no withholding or obstruction (breaks F5, Fig 7 :36).
5. A pay change improves long-run results while every habitat condition and channel to the ground is held demonstrably constant (breaks F6, Fig 11 :39-40).
6. A metric system that encodes routes rather than states still fails to improve outcomes (breaks F7, Fig 12 :111).
7. Fig 8's idempotence fails inside a closed set, or Fig 12's bit/action prices are shown to be additive after all (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until an organizational-ground measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of motivation (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep the three conditions separate in every report. A blended "incentive effectiveness score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Treat every metric as a convention until it has passed the push test. Once it decides pay, re-range it against an independent ground (Fig 2 :29, :43).
4. Price both currencies. A metric cheap to state is not therefore cheap to verify; if the verification actions are not budgeted, the scheme is blind by construction (Fig 12 :125-129).
5. At each handoff ask which link the chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
6. Treat the long-run outcome as the anchor and the bonus metric as an instrument. Instruments can be wrong on axes they do not measure (Fig 2 :37-38).
7. Use the management literature as a budget filter and as one corroborating witness, not as the verdict. The accessible sources share an evidence pool (Fig 2 :31, :40).
8. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
9. Stop at the shape. Do not name which bonus scheme a firm should adopt; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, and the essays *The Library of Babel*, *The Recursive Self-Improvement Trap*, *The Hard Problem is About Source* (all opened 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself. An external validator, or ground, is always needed to tether the veracity of the output to reality. Anything else is drift."*
- The prestige/action rule from the same essay: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige."* A list of famous compensation consultants who agree with the shape would be a monoculture, not a check.

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13 six-term physical substrate to employee motivation | **Retracted, strain S1** | Only fit by renaming effort as energy. Re-census: Fig 13 governs the honest stop here, not motivation |
| Applied Fig 12 bond price to the dollar value of a bonus | **Retracted, strain S2** | The figure prices in bits and actions, not currency. Re-census: use the two-currency claim at the level of description vs verification |
| Planned to cite Lazear 2000, Deci et al 1999, Holmstrom and Milgrom 1991 as opened primary sources | **Retracted at record level** | RePEc 404, PubMed stub, wrong NBER paper. Only tertiary pages were actually opened; ledger records this |
| Treated Wikipedia pages as independent witnesses from different fields | **Narrowed to mechanism-shape corroboration** | They are tertiary summaries; the fields differ, but several overlap in citation chain (Fig 2 :31) |
| Read Goodhart's law as deciding the verdict | **Demoted to corroboration** | Figures decide; world sources corroborate but never overrule |
| Wanted to call F1 "decisive: bonuses always corrupt metrics" | **Narrowed to a condition** | Fig 2 :43 governs a convention that decides an outcome; it does not say every metric decides one. Per-slot verdict required |
| Wanted to name "intrinsic motivation" as the missing primitive | **Marked `gap`** | The source essay's metamerism rule: several causes can create one reading. What is owed is a discriminator, not a name |
| F1 initially had no refuter that could actually fire | **Repaired** | The push test in section 4 now specifies what to measure. Written before the conclusion |
| "No figure line governs the choice of scheme" | **Confirmed as `gap`** | Fig 9 :32 returns a kind of thing, never the answer; Fig 13 :134 says unreachable is a verdict, not a silence |

**Strains sent to the log:** S1 (Fig 13 applied to motivation), resolved by re-census; S2 (Fig 12 price applied to dollars), resolved by re-census; S3 (calling a bonus metric "the ground" while it plainly moves), resolved by Fig 2 :29-30 and Fig 11 :73: the habitat updates, the ground settles. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of metric fidelity, effort direction, and horizon contact, each with its own loop and instrument.
2. **What is the anchor?** The long-run organizational outcome, per slot. Not the metric, not engagement surveys, not manager opinion (Fig 2 :29, :30).
3. **Does a pay metric remain a meter?** No once it decides pay. Fig 2 :43 and Fig 10 :47.
4. **Can the scored frame score itself?** No. Fig 1 :27. The reading is produced by the same frame that is graded by it.
5. **Why does effort drift to the measured atom?** Because bits and actions are two currencies that do not add, and closure is idempotent (Fig 12 :125-129, Fig 8 :32).
6. **Why short-termism?** Channel decay: saturated metrics and pooled readings while the ground keeps paying elsewhere (Fig 10 :24-29); either factor of Fig 7 :37-39 going to zero.
7. **Why internal competition?** A repeated room with flipping valence: same closure handed along, colleague's sign changes with the residual (Fig 7 :36, Fig 11 :49-51).
8. **What can be said at the stop?** Three conditions with distinct failure modes, refuters, and instruments. Not which scheme wins. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **performance-based pay improves measured results where the metric remains a convention ranged against an independent ground, where the two currencies of description and verification are both budgeted, and where the channel to the long-run outcome stays reachable; it produces gaming, short-termism, and internal competition where the metric becomes its own ground, where the measured atom drains effort from the unmeasured task, or where repeated review cycles hand the team the same room.** The three conditions are kept separate, never averaged. Which specific scheme pays off in a given firm is a `gap`, not a hidden answer: the framework returns a shape, and the instrument that would discriminate sources is not held here. Mode `specified`. No world source was allowed to flip a verdict; the one genuine strain (applying physical substrate terms to motivation) was returned to the census. No unresolved strain remains after re-census.
