# Figure-grounded audit: BUS-0025, autonomy versus monitoring and control

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, opened 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the management question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md` and `FRAMEWORK/reference/FIGURES_README_canonical.md` are the usage and mode authorities. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). Applied here:

- **b** is management's belief about what an employee will do, formed from private history and inherited practice.
- **a** is the arrangement management installs: autonomy granted, monitoring density, standardization of routine, approval and direction.
- **Γ(b,a)** is what the firm's library predicts that arrangement will produce.
- **o′** is what the work actually returns: a customer outcome, an artifact, a patient outcome, a quality or safety result.
- **s** is the employee-task slot. R is indexed by slot, not averaged across employees or teams (Fig 1 :19, Fig 1 :22).

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is why some slots keep R small under a given arrangement while others see R grow, and why an arrangement that worked in one slot or one period fails in another. State the residual as: *what shape must an autonomy/monitoring/standardization/control arrangement have so that the gap between what management's library predicts a work slot will return and what the work actually pays stays small per slot as the slot and its habitat change?* This is an effect description. It names no theory, no "empowerment", no "trust", no "culture", no "algorithmic management". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a conjunction of conditions whose failure modes can be told apart by different instruments, plus a rule for when a condition changes valence. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* The same line names the paying outcome directly. Fig 2 :30: *"you push on it, it is not an anchor."* Employee sentiment, engagement scores, manager opinion and internal dashboards move when pushed; they are instruments at best (Fig 1 :27).

A genuine complication is named here rather than smoothed over. The question silently asks two things: whether an arrangement produces what pays, and whether the arrangement is good for the person doing the work. The figures give these different anchors:

> **"An anchor is legitimate when the question is constitutively about it."** (Fig 2 :36)
> **"Human judgment is the right anchor for is this a good answer for a person, because the question is about people. It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."** (Fig 2 :37-38)

So the paying outcome (customer, artifact, patient) anchors the production question and human judgment anchors the person question. They are not one anchor with two readings; they are two questions with two anchors. Fig 9 :4-5 applies: *"are not one hard question but several well-formed ones. Split it rather than search."* The union is declared in section 1.3 and the two verdicts are never averaged.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a three-place relation among management's library Γ, the arrangement a and the paid outcome o′, indexed by employee-task slot s and ordered by time. It carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) because an installed arrangement precedes the observed return, and a **comparison** bond for "better" (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87). It is not symmetric: the paying ground and the employee are not interchangeable operands.
- **Symmetry.** "Good balance" is a threshold relative to a slot's own ground and to alternatives, not an absolute quantity (Fig 12 :87-89; Operators table :46-51). Persistence of a good arrangement is asymmetric in time: a lost contact is not recovered by reversing the monitoring setting.
- **Scale.** Three scales are in view: the single employee's step loop (Fig 4 one-agent panel), the team or firm population with *"something that ranks what they produce"* (Fig 4 :5), and the time channel across a person's tenure or a role's life. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The employee loop** (one agent, one scale) | the employee, their Γ (skills, tacit know-how), their b | actions and residual reduction | yes: the task outcome, what the work returns | admitted |
| **D2 The control channel** (monitoring) | managers, metrics, monitoring instruments | contact, readings, bracket fidelity | yes: the paying ground, *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **D3 The method library** (standardization) | atoms (routines, recipes, standards) and the bonds between them | reach, cost of a new term \|φ\| | yes: settlement, *"then check it against the ground, then carry it up"* (Fig 5 :32) | admitted |
| **D4 The work habitat** (population and seat) | colleagues, customers, entrants, regulators, tools, the manager as seat | survival, quality, safety, share | yes: customer choice and the paying outcome (Fig 2 :29); the seat acts on the habitat (Fig 11 :37) | admitted |
| **D5 The person ground** (is the arrangement good for the worker) | the employee as a person | experienced fairness, autonomy, satisfaction | yes: human judgment, because the question is about people (Fig 2 :36-37) | admitted, separate anchor |
| **X1 Managerial control as a free-floating good** | the manager | authority | **no** anchor independent of what pays | not a domain yet |
| **X2 Autonomy as an intrinsic right with no contact** | the isolated agent | choice | already inside D1 and D5; *"An improvement that does not change contact changes nothing"* (Fig 11 :40) | absorbed, not separate |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that managers never matter: the manager is a seat in D4 and a maker of readings in D2.

### 1.3 Partition or union

D1 and D3 overlap: the employee's Γ and the firm's method library share atoms, so their overlap is a compound with its own loop. D2 and D4 overlap: control is exercised inside the habitat, so that overlap is a second compound. D5 cuts across all four because the same arrangement is being judged against a different anchor. The whole question is a **union**, not a partition (Fig 9 :54-57).

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are:

- **C1, the channel condition (monitoring):** the route from the slot to what pays stays reachable. Failure is stale percepts, saturated metrics and pooled readings (Fig 10 :25-26), not a market that stopped paying.
- **C2, the method condition (standardization):** what crosses to the employee is a re-applicable method or a head start that makes the next search cheaper, not a recording of one success or a fixed value (Fig 4 :22-25; Fig 10 :47).
- **C3, the independence condition (autonomy):** the checking arrangement holds frames that differ at the evidence level, so selection between them is possible (Fig 2 :31; Fig 7 :36; Fig 8 :47-50). A single standardized closure is one long room.
- **C4, the person condition:** whether the arrangement is good for the worker is settled by human judgment, not by the output reading (Fig 2 :36-38).

A firm failing only C1 needs an instrument; a firm failing only C2 needs a method; a firm failing only C3 needs a differing frame; a firm failing only C4 needs a person-ground reading. These are different compounds. The essay *The Library of Babel* states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."** (Fig 3 :25-26)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for a work slot under a changed situation: 1 perception (can the firm read the slot's return at all?) → 2 vocabulary (does its Γ have terms for what the changed work affords, and can it say what progress would count as?) → 3 objective (can it state a comparison that would count as getting somewhere?) → 4 planning → 5 learn and carry. The middle link, vocabulary and objective, is the one with no instrument. Fig 12 :111-115 says a vocabulary holding only ingredients can say what a situation contains and cannot say what would count as getting somewhere from it, and that *"having terms for what a situation affords was taken for a dictionary and it is a grammar."* Monitoring budget naturally lands at links 1 and 4 because those have metrics (keystrokes, cycle time, completion rates), while the break sits at 2 and 5 (Fig 3 :29-30).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not which arrangement wins |
| 2 The Ground | two anchors (paying outcome, human judgment); independence vs common pool | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs standardization and scale transfer |
| 5 Mint Pipeline | three guards as product; settlement | governs when a routine can be admitted at all |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs autonomy as differing closure (C3) |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs a single standard as a mirror chain |
| 8 Union Surplus | closure idempotent; blend adds no atom; provenance | governs the refusal of "balance as compromise" |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; convention vs verdict | governs monitoring and fixed standards |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | decisive for the manager-as-seat and valence flip |
| 12 The Bond | isomer, functional group, catalyst, two currencies | governs arrangement over ingredient list |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | honest-stop role only (strain S1) |
| Operators table | ⋛ comparison, ¬ refusal | governs "better" and the need for a refusal term |
| Symbols table | R is the aim, per slot; the ground is the anchor | governs the residual statement |

Strain test applied during this census: an early attempt to apply Fig 13's six-term physical substrate directly to work design only fit by calling autonomy a kind of spectrum, monitoring a kind of network and a standard a kind of energy. That is a strain, so Fig 13 does **not** govern the design variables. Re-census sent Fig 13 to the honest-stop role only (section 6, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about work arrangements, `grounded` only if settled by a measurement. None is `grounded`.

### F1: "Balance" is a union of conditions, and a blend adds no atom

**Mode: `general` with a `specified` consequence for method. Status: triangulated (Fig 9 and Fig 8, low topical overlap: unbundling vs union surplus).**

> **"are not one hard question but several well-formed ones. Split it rather than search."** (Fig 9 :5)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"a case in two conditions is not a harder case of either."** (Fig 9 :57)
> **"vocabulary, never an atom"** (Fig 8 :5)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

Fig 8 names "the blend" as a collapse whose product is *"vocabulary, never an atom"*. A compromise score on an autonomy-control dial is exactly that blend: it renames the conditions and adds no arrangement. The four conditions C1 to C4 have different anchors and different instruments (section 1.3), so one lever clears the region where only one condition holds and leaves the intersections standing (Fig 9 :56). The specified consequence: any answer to BUS-0025 that returns a single percentage, a single index, or a standing rule ("always give more autonomy") has already thrown away the structure the question needs.

**Refuter:** one intervention that restores all four conditions in all failure types and leaves no categorically different residue. That would collapse the union into a partition.

**World bearing (secondary only):** the opened literature supports the union at the measurement level, not as a verdict. Glavin, Bierman and Schieman (2024) find that surveillance's negative associations run through *"job pressures, reduced autonomy, and privacy violations"* and that a positive direct effect on satisfaction is cancelled by indirect effects. Hagger and Star (2026) find that leader need support works through need satisfaction and autonomous motivation with moderation by work type, employee type and country. Two mechanisms, two outcome families, one arrangement cannot be scored by one number. Both are correlational literatures, so they corroborate the shape, not the ground.

### F2: The paying outcome is the anchor for production; human judgment is the anchor for the person question

**Mode: `general` for the anchor rule, `specified` for the split. Status: triangulated (Fig 2 and Fig 1, low overlap: anchor definition vs per-slot metric).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."** (Fig 2 :29)
> **"pinned: it does not update on A or B"** (Fig 2 :25)
> **"An anchor is legitimate when the question is constitutively about it."** (Fig 2 :36)
> **"Human judgment is the right anchor for is this a good answer for a person, because the question is about people."** (Fig 2 :37)
> **"The ground enters as the only metric."** (Fig 1 :23)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)

Engagement scores, sentiment surveys, manager ratings and compliance dashboards are instruments. They can be wrong on axes they do not measure (Fig 2 :37-38), and a firm that scores its arrangement with the quantity the arrangement produces is scoring itself (Fig 1 :27). The patient outcome, the delivered artifact and the paying customer do not update because management likes the dashboard. For "is this good for the person", the person's own judgment is legitimate ground, and it must not be replaced by the output reading.

**Refuter:** a monitoring metric shown to be a sufficient statistic for the paid outcome across habitat changes, so ranging against the metric and ranging against the ground give identical verdicts with no residual; or a demonstration that the person question is fully settled by the output reading.

**World bearing:** Brinson, Amini, Lemon and Bawole (2024) report that *"employer trust was strongly correlated with employees’ positive attitude toward monitoring, which exceeded the level of negative response associated with their reactance"*. That is a person-ground reading, not an output reading, and it is exactly the kind of quantity that cannot settle whether the work paid. It corroborates the split, not a verdict about productivity.

### F3: Monitoring is legitimate as a channel and fails as channel decay, not ground decay

**Mode: `specified`. Domain D2. Status: triangulated (Fig 10 and Fig 1, low overlap: ground maintainer vs agent).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"saturated metrics, pooled readings"** (Fig 10 :26)
> **"you have lost touch"** (Fig 10 :28)
> **"keep the anchor reachable"** (Fig 10 :29)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

A work slot loses its reading of what pays when its percepts go stale, its metrics saturate (everyone is green), or its readings get pooled into a team average. The market keeps paying someone; the firm stops hearing who. "Pooled readings" is the firm-level form of aggregating across slots (Fig 1 :22). Monitoring is not the enemy of autonomy in the figures. The refusal is of saturated and pooled readings, not of contact. Fig 7 :38 supplies the two-factor form: *"the bracket’s fidelity across the handoff"* times *"the ground’s pressure on the room"* (Fig 7 :39), with *"Zero either and the chain runs in place:"* (Fig 7 :37).

**Refuter:** a documented case in which a slot's output declines while its readings are current, unsaturated and unpooled, and the ground keeps paying comparable slots. If both factors measure high, F3's mechanism is not the cause.

**World bearing:** Glavin et al. (2024) find surveillance associated with *"reduced autonomy"* and increased pressures, but also a positive direct association with satisfaction that the indirect effects cancel. That is a valence split, not a simple "monitoring harms" result. It corroborates F3 plus F8 together, from a single sociology evidence pool.

### F4: Autonomy supplies differing frames; one standardized closure is a mirror chain

**Mode: `specified`. Domains D3, D4. Status: triangulated (Fig 7 and Fig 2/Fig 8, low overlap: room selection vs independence definition).**

> **"same closure, handed along;"** (Fig 7 :12)
> **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"A room’s agreement is variation, not a verdict. Selection between rooms is where the ground votes."** (Fig 7 :35)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)
> **"Independence, between two frames, is how little they draw on the same evidence."** (Fig 2 :31)
> **"How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus."** (Fig 8 :48-49)

When every employee is handed the same routine, the same review and the same evidence, the population is one long room. Internal agreement compounds while evidence does not. Autonomy is the structural condition that gives employees closures that differ at the evidence level, making selection between rooms possible. Full standardization without differing closures is the mirror chain; full autonomy with no shared ground loses the anchor entirely (Fig 2 :35). This is the figure-grounded reading of why a single best-practice script stops paying, and it is stronger than an opinion about morale because it is a statement about the checking arrangement.

**Refuter:** a team in which all members hold identical closures and draw on identical evidence and yet keeps producing new ground-verified readings of the work across habitat changes. Under Fig 7 :36 that should be impossible; if observed, F4 is wrong.

**World bearing:** Hagger and Star (2026) find that autonomy support correlates with adaptive outcomes through need satisfaction and autonomous motivation, but with *"substantive between-study variability"* and moderation by work type, employee type and country. That is corroboration for the mechanism shape at the person scale, not a firm-level measurement. Fig 4 :20 requires the anchor to be re-named at the new scale.

### F5: Standardization is a head start, not a replay or a fixed verdict

**Mode: `specified`. Domain D3. Status: triangulated (Fig 4, Fig 10 and Fig 11, three distinct figures).**

> **"Only methods cross up. Only head starts come down."** (Fig 4 :22)
> **"upward: a method that can be reapplied. Never the recording of a particular success."** (Fig 4 :23)
> **"downward: something that makes the next search cheaper. Never a replay of what worked once."** (Fig 4 :24)
> **"A recording carried upward looks like knowledge and is a description of one occasion."** (Fig 4 :25)
> **"a convention that decides an outcome has stopped being one"** (Fig 10 :47)
> **"Isolation is not removal of the habitat. It is substitution of one habitat for another."** (Fig 11 :66)

A standard sent down is legitimate when it is a re-applicable method that makes the next search cheaper. It fails when it is a recording of one occasion replayed downward, or when a convention is promoted into an outcome-fixing verdict (Fig 10 :47-49). A fully scripted role is a substituted habitat: *"what you failed to reproduce is invisible until the goal fails"* and *"what you unintentionally introduced is invisible until it acts"* (Fig 11 :68-69). A test harness of the script proves wiring, not capability (Fig 11 :70).

**Refuter:** a standard that is demonstrably a replay of one past success, with no re-application, that nevertheless keeps producing new ground-verified readings across habitat changes. That breaks Fig 4 :24 and F5 with it.

**World bearing:** Steyn and Vawda (2014) find job characteristics explain 26% of variance in job satisfaction but only about 7% in stress and depression, and conclude job characteristics are *"not reliable or comprehensive indicators of stress and depression"*. That is a warning against promoting a job-design convention into a general verdict, the same failure class as Fig 10 :47, at a different scale. One management evidence pool.

### F6: Managerial control is a seat acting on the habitat, not a source of atoms

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 11 and Fig 4, low overlap: habitat/seat vs membrane).**

> **"Where a seat exists, something is doing work, and it is exactly what the seat does: enumerate the habitat, rank by cascade, introduce actors, build instruments, read the ground."** (Fig 11 :37)
> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)
> **"The seat’s power is asymmetric. Introduction is available; exclusion is not."** (Fig 11 :61)

Adding authority, approval layers or monitoring capacity is an improvement to the controller in isolation. It changes capability only if it changes contact with what pays. The manager's legitimate work is the seat's work: enumerate the habitat, build instruments, introduce actors and read the ground (Fig 11 :37). The seat cannot subtract the habitat, so a managed work system is permanent work rather than a solved state (Fig 11 :63-64). Managerial control is not excluded as a free-floating good (X1) because it has no anchor; it is re-grounded as a seat inside D4 whose output is judged by the ground.

**Refuter:** an increase in control authority with demonstrably unchanged contact that nevertheless moves the paid outcome per slot. If that is observed, F6 as written is false.

**World bearing:** the opened EPM literature points the same way without sharing the framework's pool. Siegel et al. (2022), as reported by Glavin et al., found no evidence that electronic performance monitoring enhances performance; Brinson et al. (2024) find the effect of monitoring depends on trust and reactance. More controller, no guaranteed ground payment.

### F7: Renewal of reach needs a differing closure; standardization inside a closure adds no atom

**Mode: `general` for idempotence, `specified` for the firm application. Domain D3. Status: triangulated (Fig 6, Fig 8 and Fig 13, distinct roles).**

> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** (Fig 8 :32)
> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)

A team can keep recombining its own standards forever and never acquire a new atom. Sustained payment through a change of habitat requires contact with a closure that differs: customers, adjacent practices, other teams, new tools, science. Autonomy is not a mood; it is the structural channel through which a differing closure reaches the slot. Fig 8 :45: *"Two frames together reach what neither reaches alone."*

**Refuter:** a slot that renews its reach purely by composing inside its own closure, with no atom entering from a differing closure, and still passes the ground test across a change of habitat. That breaks idempotence and F7 with it.

### F8: The good practice changes valence when the residual changes

**Mode: `specified`. Domains D2, D3, D4. Status: triangulated (Fig 11 and Fig 12, low overlap: habitat relations vs composition structures).**

> **"An actor’s valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)
> **"a refutation is a negation, which is why a vocabulary without it can only accumulate"** (Operators table :58)

A monitoring practice is a catalyst if it regenerates across uses and a spent part if it does not, and nothing in the practice's description records which. When the work changes, a former benefactor becomes a malfactor without anything about the practice changing. A control vocabulary that can only accumulate standards cannot carry the correction, because negation is not one of the seven bonds (Operators table :70-74). This is the mechanism behind "what worked before now blocks us", stated in effect terms, and it is why a standing list of good management practices is refused.

**Refuter:** a control practice whose measured valence is invariant across a documented change of the slot's residual. If no such change of valence can be found anywhere, F8 weakens to `general`.

**World bearing:** Glavin et al. (2024) report a negative indirect association of surveillance with job satisfaction through reduced autonomy, pressure and privacy violations, alongside a positive direct association. The same practice carries opposite signs on different paths. That is a low-overlap (sociology) instance of the valence split, at the person scale.

### F9: The break is usually at the middle link

**Mode: `specified`. Domain D1. Status: single-source (Fig 3, with Fig 12 :111-115 as a corroborating line from a different figure but the same framework, so one witness).**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)
> **"A vocabulary without bonds can name a state and cannot name a route to one."** (Fig 12 :111)
> **"A plan is a sequence. A goal is a comparison. Progress is a subtraction."** (Fig 12 :112)

The usual failure is not that the firm cannot plan or cannot count keystrokes. It is that it has no terms for what the changed work affords and cannot say what would count as progress there. So the highest-value diagnostic question is not "how autonomous is this team?" but "at which link does its chain currently stop, and was that measured?" (Fig 3 :29-30). More monitoring budget lands above the break because those measurements already exist.

**Refuter:** a work slot whose perception, vocabulary and objective links all measure as working and whose failure is located at planning. That would falsify the "usually at the middle" claim, though not the dependency ordering.

### F10: Which specific allocation wins is a gap, not a hidden number

**Mode: `general`. Status: `gap` after re-census.**

> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)
> **"Unreachable is a verdict here, not a silence,"** (Fig 13 :134)
> **"So a search that finds nothing is never a proof of absence."** (Fig 8 :39)
> **"instruments can be wrong on axes they do not measure"** (Fig 2 :38)

No figure line returns an autonomy percentage, a monitoring ratio, a standard count, or a list of tasks to standardize. The missing thing is a **source-discriminating instrument**: when a slot's output falls, it must separate a loss of ground contact, channel decay, closure exhaustion, habitat change and a genuine person-ground failure that all produce the same reading. From the source essay: an instrument that reads green *"cannot comment on the source"*, and *"the answer is unreached until a better instrument exists"*. What is owed is that discriminator, not a number. Unreachable is recorded as a verdict (Fig 13 :134), not as silence and not as an invitation to invent a best practice.

| claim | mode | figure | status |
|---|---|---|---|
| R is per employee-task slot, never a pooled average | general | Fig 1 :19, :22 | figure-derived |
| Two anchors: paying outcome for production, human judgment for the person question | general | Fig 2 :29, :36-37 | figure-derived, split |
| The question is a union of four conditions, not a dial | general | Fig 9 :54, :55, :57; Fig 8 :5 | triangulated F1 |
| Monitoring is contact; its failure is channel decay | specified | Fig 10 :24, :26, :29; Fig 7 :37-39 | triangulated F3 |
| Autonomy supplies differing closures; one standard is a mirror chain | specified | Fig 7 :35-36; Fig 2 :31; Fig 8 :48-49 | triangulated F4 |
| Standardization is a head start, not a replay or fixed verdict | specified | Fig 4 :22-25; Fig 10 :47; Fig 11 :66 | triangulated F5 |
| Control is a seat acting on habitat; isolation changes nothing | specified | Fig 11 :37, :39-40, :61 | triangulated F6 |
| Reach renewal needs a differing closure | general / specified | Fig 6 :21, :23; Fig 8 :32; Fig 13 :115 | triangulated F7 |
| A good practice changes valence with the residual | specified | Fig 11 :49-51; Fig 12 :119; Operators :58 | triangulated F8 |
| The break is usually at vocabulary and objective | specified | Fig 3 :19, :25-27, :29 | single-source F9 |
| Which percentage or practice wins | gap | Fig 9 :32; Fig 13 :134 | no figure line governs |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. One intervention restores all four conditions (C1 to C4) in all failure types and leaves no categorically different residue (breaks F1, Fig 9 :57).
2. A monitoring metric is shown to be a sufficient statistic for the paid outcome across habitat changes, so the metric and the ground never diverge (breaks F2 and F3, Fig 2 :29, Fig 10 :24).
3. A slot's output declines while its readings are current, unsaturated and unpooled, and the ground keeps paying comparable slots (breaks F3, Fig 7 :37-39).
4. A team in which every member shares one closure and one evidence base keeps producing new ground-verified readings across habitat changes (breaks F4, Fig 7 :36, Fig 2 :31).
5. A replay of one past success, with no re-application, keeps producing new ground-verified readings across habitat changes (breaks F5, Fig 4 :24).
6. Control authority increases with demonstrably unchanged contact and nevertheless moves the paid outcome per slot (breaks F6, Fig 11 :40).
7. A control practice's measured valence is invariant across a documented change of residual (breaks F8, Fig 11 :49-51).
8. Fig 13's six terms are derived from five of them, or Fig 6's idempotence fails inside a closed set (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a source-discriminating instrument has paid for the shape at the slot.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of management (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep the four conditions separate in every report. A blended "empowerment score" or "control index" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Name the anchor for each question. Do not let an engagement score settle whether the work paid (Fig 2 :29, :37).
4. Ask, at each handoff, which link the chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
5. Treat any list of practices as Γ, a candidate library whose reach must be tested against the ground, never as the answer (Fig 1 :27, Fig 11 :51).
6. Send standards down as methods and head starts, never as recordings of one occasion or as outcome-fixing conventions (Fig 4 :22-25, Fig 10 :47).
7. Use the work-design literature as one corroborating witness and as a budget filter, not as the verdict. The SDT, job-characteristics and EPM streams partly share an evidence pool (Fig 2 :31, :40).
8. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
9. Stop at the shape. Do not name the percentage or the winning practice; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and the essays *The Library of Babel*, *The Recursive Self-Improvement Trap* and *The Hard Problem is About Source* (all opened 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish and records the lineage. This governs section 5's stop.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Framed "balance" as a compromise dial | **Retracted** | Fig 9 :54-57 plus Fig 8 :5: it is a union, and a blend adds vocabulary, not an atom |
| Applied Fig 13 six-term physical substrate to autonomy, monitoring and standards | **Retracted, strain S1** | Only fit by renaming work-design variables as physical kinds. Re-census: Fig 13 governs the honest stop only |
| Treated the paying market as the only anchor | **Narrowed** | Fig 2 :36-37 makes human judgment the legitimate anchor for the person question; two anchors, two questions |
| Read "autonomy is intrinsically good" | **Retracted** | Fig 11 :51 refuses a standing list; valence is relative to the residual (Fig 11 :49) |
| Read "monitoring is the enemy of autonomy" | **Retracted** | Fig 10 :29 says keep the anchor reachable; the refusal is of saturated and pooled readings, not contact |
| Read "shape, not a name" as forbidding any named standard | **Narrowed** | The canonical phrase governs a missing primitive. Naming a held atom is a binding, provenance owed, not an invented primitive |
| Cited the functional-group definition as Fig 12 :124 | **Corrected to Fig 12 :123** | The verbatim line is at :123; :124 is the numbered item marker. Both readings are preserved so the correction is visible |
| Called "control is a seventh primitive" | **Refused** | Fig 13 :41-44: the set is minimal; a new member would have to be a new kind |
| Called the SDT and EPM literatures independent corroboration | **Narrowed to one pool with one low-overlap witness** | They share surveys and organizational samples; the cybernetics and animal-behaviour sources are the low-overlap witnesses |
| F1 called "decisive" in an early draft | **Downgraded to triangulated** | Fig 9 and Fig 8 are two figures but one framework; triangulation here means low topical overlap, not independent evidence pools |

**Strains sent to the log:**

- **S1**, Fig 13 physical substrate versus work-design variables, resolved by re-census to the honest-stop role.
- **S2**, the paying-outcome anchor versus human judgment, resolved by splitting the question into two anchored questions (Fig 2 :36-37, Fig 9 :4-5) and keeping both verdicts separate.
- **S3**, standardization as one closed room versus Fig 12 :104, *"A settled molecule becomes an atom for whatever composes over it."* Re-census: a standard sent down as a method is legitimate; only a replay that fixes an outcome is refused (Fig 4 :24, Fig 10 :47). Different objects, no contradiction.
- **S4**, requisite variety (controller variety must match the disturbed system) versus Fig 6 :21 (minting cannot add an atom). Re-census: the cybernetic law describes how much variety a controller must hold, Fig 6 describes how a frame gains an atom. They govern different quantities and both are kept; the world source corroborates Fig 1 :22 and Fig 7 :36, it does not amend Fig 6.

No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :5, :54-57 and the Library of Babel bundle passage: it is a union of a channel condition, a method condition, an independence condition and a person-ground condition.
2. **What is the anchor?** Two, one per question: the paying outcome for production (Fig 2 :29), human judgment for the person question (Fig 2 :36-37). Not consensus, not internal metrics (Fig 1 :27).
3. **Is the answer in the manager alone?** No. Fig 11 :39-40. Control is a seat acting on a habitat; authority that does not change contact changes nothing.
4. **How does monitoring fail?** Channel decay: stale percepts, saturated metrics, pooled readings (Fig 10 :24-29); either factor of Fig 7 :37-39 going to zero.
5. **How does standardization fail?** A recording, a replay or an outcome-fixing convention crosses where a method or head start should (Fig 4 :22-25, Fig 10 :47, Fig 11 :66-70).
6. **Why does autonomy matter structurally?** It supplies differing closures so selection between rooms is possible (Fig 2 :31, Fig 7 :36, Fig 8 :47-50), and it is a channel for imports that move reach (Fig 6 :23).
7. **Why does the good practice turn bad?** Valence is relative to the residual (Fig 11 :49-51); a catalyst may become a spent part (Fig 12 :119), and a vocabulary without negation cannot carry the correction (Operators :58).
8. **What can be said at the stop?** Four conditions, their instruments and their falsifiers. Not a percentage, not a practice list, not a `grounded` answer. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **a work arrangement pays while the slot's channel to what pays stays reachable, what crosses to the employee is a re-applicable method or head start rather than a replay or a fixed verdict, the checking arrangement holds frames that differ at the evidence level so selection between them is possible, and the person question is ranged against human judgment rather than the output reading.** It fails quickly when any condition fails, and a practice that helped can change sign when the residual changes. The four verdicts are kept separate per domain and never averaged. Which percentage or practice wins is a `gap` at the instrument boundary: the missing thing is a source-discriminating instrument, characterized in effect terms but not held here. Mode `specified`, ungrounded, candidate. No world source was allowed to flip a verdict; the two apparent conflicts were returned to the census and dissolved as two-anchor and two-quantity cases. No unresolved strain remains after re-census.
