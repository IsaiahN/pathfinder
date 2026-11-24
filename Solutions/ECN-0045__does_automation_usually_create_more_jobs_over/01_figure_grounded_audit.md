# Figure-grounded audit: ECN-0045, automation and net employment

**Mode of this document: `general` on the structural shape, `specified` on the per-domain predictions, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every finding below carries a mode. Nothing is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, opened 2026-11-23: *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* LLM output is *simulacra*. This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the economics question it reports on. See `05_what_shape_means.md` section 6.

**Figure source.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. The formula is `FRAMEWORK/figures/THE_FORMULA.md`; the usage rule is `FRAMEWORK/reference/FIGURES_README_canonical.md`. World sources are secondary and are recorded in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) − o′| per slot s (Formula step 1; Symbols table, `R`; the Symbols table adds that R *"is the aim, not only the error signal, and it is always a slice"*). For this question:

- **b** is what an occupational slot takes to be the case before it acts: the belief that a given bundle of tasks will keep being demanded and paid for.
- **a** is the action: a firm adopts a technology, a worker retrains, a regulator changes an incentive, a task is redesigned.
- **Γ(b,a)** is what the frame predicts. Two rival frames share the slot. One predicts substitution: automate task t, remove the labor that performed t. The other predicts compensation: automate task t, lower cost, raise output, raise demand for labor in the remaining tasks.
- **o′** is what the labor market actually returns, per occupation and per local labor market: employment, wages, hours, and the task content of the work.
- **s** is the occupational slot. R is indexed by occupation and by time, never by a single national net jobs figure.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"The ground enters as the only metric."** (Fig 1 :23)

The question as posed asks for one aggregate sign, *"usually create more jobs over time than it eliminates"*, and then for a variation across occupations. That is a contradiction in object: a single net count and a per-slot variation are different quantities (Fig 12 :125, *"A composition costs in two currencies, and they do not add"*. See F1). Restate the residual without naming a theory: *why does the gap between what an occupational slot predicts will be demanded and what the market actually returns stay small in some slots for decades and grow quickly in others, while a compensating new task appears in some of those same slots?* This names no "Luddite fallacy", no "compensation effect", no "skill bias". Those are candidate bindings and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run. An answer would be: (i) a separator between two conditions with different anchors, displacement at a slot and creation at a slot; (ii) an instrument that discriminates a loss of tasks from a transformation of tasks from an import of new tasks; and (iii) the statement that no universal net sign is returned. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names the candidate: *"A measurement, an experiment, a counter, a market, a patient outcome."* Fig 2 :30: *"If it moves when you push on it, it is not an anchor."* The labor market, read as realized employment and wages per occupation, is the named anchor. Economist consensus, a forecast, a poll of technology professionals, a vendor's estimate of tasks automatable, and a ministry's projected job creation all move when pushed, so they are instruments at best. Note the distinction that matters here: the habitat (firms, workers, occupations, regulations) updates; the ground (what the market actually pays) does not update on what a frame thinks (Fig 11 :73, *"The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."*).

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a three-place relation: occupational Γ, technology action, market return, indexed by slot s and ordered by time t. It is a sequence, not a set, so it carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72). The phrase more jobs than it eliminates adds a **comparison** bond (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87; Operators table :48). It is not symmetric: the occupation and the market are not interchangeable, and a lost job is not recovered by reversing the adoption.
- **Symmetry.** "More jobs" is a threshold relative to a baseline, not an absolute quantity. Displacement and creation have different signs and different instruments, so summing them into a net count is the flat-formula error: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."* (Fig 12 :5). An actor's valence is residual-relative (Fig 11 :49), so the same automation is a benefactor to one residual and a malfactor to another.
- **Scale.** Three scales are in view: the single occupational slot's step-by-step loop; the population of occupations with *"something that ranks what they produce"* (Fig 4 :5); and the time channel across decades, where the memory is BLS OEWS, O*NET and the Employment Projections. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and the transform is lossy, so the round-trip gap R_T must be measured, not assumed (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where no anchor can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The occupational task slot** (one agent, one scale) | workers, tasks, tools, the slot's Γ | task performance and residual reduction | yes: realized employment and wage the market pays for that slot | admitted |
| **D2 The labor-market habitat** (population) | firms, workers, entrants, regulators, customers | hiring, survival, wages | yes: the market, named in Fig 2 :29 | admitted |
| **D3 The task library** (composition inside a slot) | task atoms and the bonds between them | reach (what tasks can be composed and done), \|φ\| cost | yes: settlement, *"then check it against the ground, then carry it up"* (Fig 5 :32) | admitted |
| **D4 The time and measurement channel** (across decades) | BLS OEWS, Employment Projections, O*NET, metrics, percepts | contact with the ground | yes: the ground, *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **X1 Automation as a free-floating agent with a fixed job count** | the technology | jobs created or destroyed | **no** anchor independent of the market's verdict | not a domain yet |
| **X2 Technology as a single cause of net employment** | the aggregate technology shock | net jobs | already inside D2 and D3, plus Fig 11 :46 names conditions as habitat elements | absorbed |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that technology never matters.

### 1.3 Partition or union

D1 and D3 overlap: Γ is inside the occupational slot, so the task library is a compound with its own loop. D2 and D4 overlap: contact with the ground is exercised inside the habitat, so that overlap is a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: **C1**, a maintained channel from a slot to a ground that still pays for its tasks (the displacement condition); and **C2**, renewal of a slot's reach through contact with a closure that differs (the creation condition). A slot failing only C1 and a slot failing only C2 are not different degrees of one failure; they need different instruments. The essay *The Library of Babel* states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order: 1 perception (can the slot read the market response?) → 2 vocabulary (does Γ have terms for what the new tasks afford?) → 3 objective (can it say what progress would count as?) → 4 planning → 5 learn and carry. The middle link, having terms for what the changed task set affords and saying what would count as progress, is the one with no instrument in most of the literature. Fig 12 :111-113 says a vocabulary holding only ingredients can name a state and cannot name a route to one. Most measurement effort lands above the break, where the counts already exist (Fig 3 :29).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not its sign |
| 2 The Ground | market is a named anchor; independence vs common pool | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs scale transfer and the occupation/population analogue |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs when a new task can be admitted at all |
| 6 Closure / Reachability | import is the only operator that moves the wall | decisive for the creation condition (C2) |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs persistence and quick loss |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and source rules |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; keep anchor reachable | decisive for the displacement condition (C1) |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | decisive for D1 and D2, and for "varies by occupation" |
| 12 The Bond | isomer, catalyst, functional group, two currencies | governs task recombination and why a skill becomes a rigidity |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop |
| Operators table | ⋛ comparison; ¬ refusal | governs "more than" and the refusal of a net-sign verdict |
| Symbols table | R is the aim and always a slice | governs per-slot indexing |

**Strain test applied during this census.** An early attempt to apply Fig 13's six-term physical substrate directly to "tasks" only fit by calling a routine a kind of energy and a task bundle a kind of gradient. That is a strain, so Fig 13 does **not** govern the task library. Re-census sends Fig 13 to the honest-stop role only (section 6, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about occupations, `grounded` only if settled by a labor-market measurement. None is `grounded`.

### F1: The net count is the wrong object

**Mode: `general`, with a `specified` consequence for method. Domains all. Status: triangulated (Fig 1 and Fig 9, low overlap: per-slot residual vs budget/witness rule).**

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"predicates minted, and credibility accrued"** (Fig 1 :26)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

A national net figure, an employment-to-population ratio, and a percentage of jobs "at high risk" all aggregate across slots. They are useful for deciding where to spend a research budget; they cannot say which slot is losing contact and where. The *Luddite fallacy* framing, as recorded on the Luddites page, states the compensation mechanism in the aggregate: *"If a technological innovation reduces necessary labour inputs in a given sector, then the industry-wide cost of production falls, which lowers the competitive price and increases the equilibrium supply point that, theoretically, will require an increase in aggregate labour inputs."* That is a claim about an aggregate, marked *theoretically* by the source itself. Under Fig 1 :19 it is a filter, not a witness. The World Bank claim, quoted on the *Technological unemployment* page, that *"while automation displaces workers, technological innovation creates more new industries and jobs on balance"* is the same object: an aggregate sign with no slot.

**Refuter:** a prospective, per-occupation statistic that predicts, before the fact, which named slot gains and which named slot loses next, and that survives a habitat substitution that changes who pays for the tasks. If such a statistic exists, F1's methodological consequence is false.

### F2: The question is a union of two conditions, not one number

**Mode: `specified`. Domains D1, D2, D3. Status: triangulated (Fig 9 and Fig 6/Fig 10, low overlap: union split vs wall/channel mechanics).**

Fig 9 :54, :55 and :57 are the governing lines (quoted in section 1.3). The two conditions have different instruments:

- **C1 failure (displacement)** shows up as stale percepts, saturated metrics and pooled readings at a slot (Fig 10 :24, :26), and as either factor of Fig 7 :37-39 going to zero.
- **C2 failure (no new work)** shows up as a closure handing itself the same room, no import, and a reach that stops moving while the task library keeps growing (Fig 6 :21, Fig 7 :12).

A single lever, for example "retrain everyone" or "tax robots", clears the region where only one condition holds and leaves the intersection standing (Fig 9 :55). This is why the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged into a net sign.

**Refuter:** a single intervention that restores both conditions in both failure types and leaves no categorically different residue. That would collapse the union into a partition.

### F3: The labor market is the anchor, not consensus or projection

**Mode: `general` with a `specified` consequence for this field. Domains D2, D4. Status: triangulated (Fig 2 and Fig 11, low overlap: anchor rule vs habitat update).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** (Fig 2 :29)
> **"A measurement, an experiment, a counter, a market, a patient outcome."** (Fig 2 :29)
> **"If it moves when you push on it, it is not an anchor."** (Fig 2 :30)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."** (Fig 11 :73)

The *Technological unemployment* page records a Pew survey in which *"48% of respondents believed that new technologies would displace more jobs than they would create by the year 2025, while 52% maintained that they would not."* That is an agreement between frames, a 48/52 split, not an anchor. It is exactly the quantity Fig 2 :40 disqualifies as a verdict. The BLS OEWS program is different in kind: *"produces employment and wage estimates annually for approximately 830 occupations"*, and the Employment Projections program *"develops information about the labor market for the Nation as a whole for 10 years in the future."* The first is a reading of the ground; the second is an instrument, and a projection can be wrong on axes it does not measure (Fig 2 :37-38).

**Refuter:** a documented case where a consensus, forecast or poll changed its answer when pushed by a commentator, yet still settled a per-slot employment question. Under Fig 2 :30 it cannot.

### F4: Quick displacement is a channel failure, not the decay of the ground

**Mode: `specified`. Domain D4. Status: triangulated (Fig 10 and Fig 7, low overlap: ground maintainer vs room chain).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"saturated metrics, pooled readings"** (Fig 10 :26)
> **"you have lost touch"** (Fig 10 :28)
> **"Progress per handoff has two factors. Zero either and the chain runs in place:"** (Fig 7 :37)
> **"the bracket's fidelity across the handoff"** (Fig 7 :38)
> **"the ground's pressure on the room"** (Fig 7 :39)

An occupation loses its slot quickly when its contact with what pays degrades while the market keeps paying someone else. The named decay modes are stale percepts, dropped transients, saturated metrics and pooled readings. "Pooled readings" is the occupational version of aggregating across slots (Fig 1 :22): the signal that says where to look disappears into an average such as "middle-skill jobs are declining". A decade of employment is a chain of handoffs; if either the bracket's fidelity or the ground's pressure goes to zero, the slot runs in place.

The Acemoglu and Restrepo result is a per-slot reading of this condition: *"we estimate large and robust negative effects of robots on employment and wages across commuting zones"*, and *"one more robot per thousand workers reduces the employment to population ratio by about 0.18-0.34 percentage points and wages by 0.25-0.5 percent."* That is a measured local-market loss, not an aggregate law. It corroborates C1 at the ground.

**Refuter:** a documented occupation that loses employment while bracket fidelity and ground pressure both measure high and are not declining. If both stay high, F4's mechanism is not the cause.

### F5: New work is an import from a differing closure

**Mode: `specified`. Domain D3. Status: triangulated (Fig 6, Fig 8 and Fig 13, three figures with distinct roles).**

> **"the only operator that moves the wall"** (Fig 6 :14)
> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** (Fig 8 :32)
> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)

A slot can keep recombining its existing tasks forever and never add a task atom. New work enters only on contact with closures that differ: entrants, adjacent technologies, other industries, customers, science, regulation. Such an import is not free. It needs a **source gate: provenance** and a **shadow test: explains a gap** (Fig 8 :10-13), and import from a live peer is debited against that peer's independence (Fig 6 :24).

Autor's 2015 abstract is the world-side statement of this condition: *"automation also complements labor, raises output in ways that leads to higher demand for labor, and interacts with adjustments in labor supply"*, and it warns that *"Journalists and even expert commentators tend to overstate the extent of machine substitution for human labor"*. Note that this is an abstract-level claim about a mechanism, not a per-slot measurement; it corroborates the shape of C2 but does not pay for it at the ground.

**Refuter:** a slot that renews its task set solely by composing inside its own closure, with no atom entering from a differing closure, and that still passes the ground test across a change of habitat. That breaks idempotence and F5 with it.

### F6: A surviving occupation is an isomer, and its valence flips with the residual

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 11 and Fig 12, low overlap: habitat relations vs composition structures).**

> **"An actor's valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** (Fig 12 :117)
> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)

This is the figure-grounded reading of "how does the answer vary by occupation." It does not vary with a fixed list of safe and unsafe occupations. It varies with the residual at the slot. Over a fixed task atom set, an occupation before and after automation is an isomer: same atoms, different bond, different substance. The bond carries the information the atom list does not (Fig 12 :46). A skill that was a catalyst can become a spent part when the residual changes, and nothing in the skill's description records which.

The ALM result is the closest world measurement: *"Changes in task content within nominally identical occupations explain more than half of the overall demand shift induced by computerization."* A nominally unchanged occupation with changed task content is precisely an isomer reading: the label stayed, the bond changed. Their companion line, *"Shifts are evident within detailed industries, within detailed occupations, and within education groups within industries."*, says the same at three resolutions, all per slot. Moravec's paradox, a genuinely low-overlap cognition source, supplies the mechanism shape: *"the hard problems are easy and the easy problems are hard"* means a task's automability is not a fixed ranking of difficulty by human intuition but a property of which atoms are codifiable and which are embedded in a long evolutionary lineage.

**Refuter:** a standing list of automation-safe occupations whose measured valence is invariant across a documented change of residual, or two occupations with identical task atoms, identical bonds and identical residual but systematically different employment outcomes. Either breaks F6.

### F7: Internal agreement is not evidence for a net sign

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 7 and Fig 2, low overlap: selection between rooms vs anchor triangulation).**

> **"same closure, handed along;"** (Fig 7 :12)
> **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)
> **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."** (Fig 7 :35)
> **"Correlation has valence."** (Fig 2 :39)
> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)

A literature that keeps citing the same compensation mechanism, the same "jobs at risk" study and the same forecast is handing itself the same room. Its agreement compounds while evidence does not. The 48/52 Pew split is two rooms, but both are rooms of opinion; they share an evidence pool with each other and with the commentary that cites them, so they are one witness wearing many names (Fig 8 :48). The World Bank "on balance" claim and the Luddite-fallacy claim share the economic tradition, so they are one pool, not two confirmations.

**Refuter:** a prospective, per-slot measurement that independently returns the same net sign from two frames with genuinely different evidence pools, each ranged separately against the market anchor. Under Fig 2 :31-32 that would be triangulation; a poll agreement would not.

### F8: The break is usually at the vocabulary/objective link

**Mode: `specified`. Domain D1. Status: single-source (Fig 3, with Fig 12 :111-113 as a corroborating line from a different figure but the same framework, so one witness).**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)

For occupations, the missing instrument is a task-level discriminator that separates three cases at a slot: a task removed, a task transformed, and a new task imported. Without it, an employment count cannot tell C1 failure from C2 failure. Autor, Levy and Murnane report *"Shifts are evident within detailed industries, within detailed occupations, and within education groups within industries."*, which is evidence that the resolution has to be task-level and within-occupation; a top-line occupation count hides the shift.

**Refuter:** a documented slot whose perception, vocabulary and objective links all measure as working and whose employment failure is located at planning. That would falsify the "usually at the middle" claim, though not the dependency ordering.

### F9: The universal net sign is a `gap`, not a hidden number

**Mode: `general`. Status: figure-governed.**

> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)
> **"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."** (Fig 9 :44)
> **"Unreachable is a verdict here, not a silence,"** (Fig 13 :134)
> **"So a search that finds nothing is never a proof of absence."** (Fig 8 :39)

No figure line returns a universal sign for "usually more jobs than eliminated", and no figure line names which occupations will win. The instruments that would settle it, per-occupation employment and task readings, exist in the world (BLS OEWS, O*NET, Employment Projections), but this simulated run did not take a measurement. So the gap is **unreached and unreachable at this budget**, not underivable in principle. This matters for the instruction that follows: Fig 8 :40-43 distinguishes underivable-in-principle from unreachable-at-this-budget and issues different instructions. Importing an atom against a budget limit adds one that was not needed (Fig 6 :51-52). The honest report is a shape plus a discriminator owed, not an invented sign.

### F10: Conflict between the world claims and the figures, and how it was resolved

**Mode: `general`. Status: figure-governed.**

Three world claims read as verdicts conflict with figure rules, and each returns to the census rather than flipping the verdict.

1. The World Bank "on balance creates more new industries and jobs" claim (as reported on the *Technological unemployment* page) is a `general`-mode sign with no slot. Re-census R1: map it to a filter on where to look (Fig 9 :60), not a witness. Verdict unchanged.
2. Acemoglu and Restrepo's *"large and robust negative effects of robots on employment and wages across commuting zones"* is a local-market negative reading. It **does not conflict** with F5's complementarity: the two are C1 and C2, two conditions of a union. The apparent conflict came from reading them as opposite answers to one question. Re-census R2: union split (Fig 9 :57). Verdict unchanged.
3. Keynes's characterization of technological unemployment as *"only a temporary phase of maladjustment"*, recorded on the same page, is a verdict with no instrument. Re-census R3: re-ground it as a channel-restoration claim (Fig 10 :24, :28). "Temporary" is a statement about the channel returning to contact, not about the ground.

### F11: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per occupation, never a national net average | general | Fig 1 :19, :22 | figure-derived |
| The labor market is the anchor, not consensus or forecast | general | Fig 2 :29, :30, :35 | figure-derived |
| The question is a union of displacement and creation | general | Fig 9 :54, :55, :57 | figure-derived |
| Quick loss is channel failure, not ground decay | specified | Fig 10 :24, :26; Fig 7 :37-39 | triangulated F4 |
| New work requires an import from a differing closure | specified | Fig 6 :14, :21, :23; Fig 8 :32 | triangulated F5 |
| A surviving occupation is an isomer over held task atoms | specified | Fig 12 :117, :119; Fig 11 :49-51 | triangulated F6 |
| No standing list of safe occupations survives a residual change | specified | Fig 11 :51 | triangulated F6 |
| Internal agreement is not a net-sign witness | specified | Fig 7 :12, :13, :35; Fig 2 :40 | triangulated F7 |
| The break is usually at vocabulary/objective | specified | Fig 3 :19, :24, :29 | single-source F8 |
| The universal net sign and the winning-occupation list | not stated | none | gap: F9 |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A prospective, per-occupation measurement predicts which named slots gain and lose next, and survives a habitat substitution that changes who pays for their tasks (breaks F1, Fig 1 :19).
2. An occupation loses employment while bracket fidelity and ground pressure both measure high and non-declining (breaks F4, Fig 7 :37-39).
3. An occupation renews its task set for two decades purely by internal composition, with no atom imported from a differing closure, and still passes the ground test (breaks F5, Fig 8 :32).
4. A standing list of automation-safe occupations holds its valence invariant across a documented change of residual, or two slots share atoms, bonds and residual yet diverge systematically (breaks F6, Fig 11 :51, Fig 12 :117).
5. A single lever restores both conditions in both failure types with no categorically different residue (breaks F2, Fig 9 :57).
6. Two genuinely independent frames, with different evidence pools, each range against the market anchor and return the same per-slot net sign prospectively (breaks F7's agreement-is-not-evidence consequence, Fig 2 :31-32).
7. Fig 6's idempotence fails inside a closed set, or one of the six physical terms is derived from the other five (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a per-occupation labor-market measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a position on the Luddite fallacy (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep displacement and creation separate in every report. A blended "net jobs" number is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Ask, at each occupation, which link the chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
4. Treat any "percent of jobs at risk" figure as Γ, that is, as a candidate library whose reach must be tested against the ground, never as the answer (Fig 1 :27).
5. Attribute new tasks with provenance and a shadow test; do not call a task "created by automation" until the import is visible (Fig 8 :50-52).
6. Use the economics literature as a budget filter and as one corroborating witness, not as the verdict. Autor, Autor-Levy-Murnane and Acemoglu-Restrepo share a broad labor-economics evidence pool (Fig 2 :31, :40). Moravec's paradox is the genuinely low-overlap corroborator for the task-atom shape.
7. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
8. Stop at the shape. Do not return a universal net sign or a safe-occupation list; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and the essays *The Library of Babel*, *The Recursive Self-Improvement Trap* and *The Hard Problem is About Source*, all opened 2026-11-23.

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also gives the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs F9's stop.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*
- *The Hard Problem is About Source* supplies the instrument argument: *"If several paths create the same behavior, then behavior is a projection with lossy information (it cannot define consciousness in full)."* In this question, an employment count is a projection: substitution, task transformation and import can produce the same reading, so what is owed is a discriminator, not a net sign.

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13's six-term physical set to task atoms | **Retracted, strain S1** | Only fit by renaming tasks as kinds of energy. Re-census: Fig 13 governs the physical substrate, not a slot's Γ |
| Treated the 48/52 Pew split as two witnessing frames | **Retracted as a witness, kept as a filter** | Fig 2 :40 and Fig 8 :48: one evidence pool, not two witnesses |
| Treated "on balance creates more jobs" as a candidate answer | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer; the claim is a `general` aggregate sign |
| Planned to name "dynamic capabilities" or "reskilling" as the answer | **Retracted at record level** | Fig 9 :32; any named binding is a candidate with a provenance record, not a figure output |
| Read Acemoglu-Restrepo as conflicting with Autor | **Dissolved by re-census R2** | Different conditions of a union (Fig 9 :57), not opposite answers |
| Read Keynes's "temporary phase" as a ground verdict | **Narrowed to a channel claim** | Fig 10 :24, :28; no instrument in the quote |
| Wanted to call F6 a `general` law about all occupations | **Narrowed to `specified`** | It is a structural claim; no per-occupation measurement pays for the labor version here |
| "Shape, not a name" used to forbid naming task bindings | **Narrowed and kept visible** | The README's phrase governs a **missing** primitive. Naming task atoms already held is a binding with provenance, not an invented primitive. See `05` section 5 and `06` Q1 |
| F1 "wrong object" in an early draft said "meaningless" | **Downgraded to methodological** | The net count is a legitimate budget filter; it is disqualified only as a witness (Fig 9 :60) |

**Strains sent to the log:** S1 (Fig 13 physical substrate vs task terms), resolved by re-census; S2 (calling the labor market "the ground" while also treating customer preference as moving), resolved by Fig 2 :29-30 and Fig 11 :73: the habitat updates, the ground is what settles and does not. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the *Library of Babel* bundle passage: a union of contact maintenance (C1) and reach renewal (C2), each with its own loop and instrument.
2. **What is the anchor?** The labor market, named in Fig 2 :29. Not consensus, not a forecast, not a poll (Fig 2 :30, :40).
3. **Is the answer in the technology alone?** No. Fig 11 :39-40. Capability is agent-and-habitat; an improvement that does not change contact changes nothing.
4. **How does quick displacement happen?** Channel decay: stale percepts, pooled readings, lost touch (Fig 10 :24-28); either factor of Fig 7 :37-39 going to zero.
5. **How does long employment persistence happen?** A chain of differing rooms selected against the surfaced residual (Fig 7 :36), with imports from differing closures moving the wall outward (Fig 6 :23).
6. **Why does "how it varies by occupation" have no standing list?** Valence is residual-relative (Fig 11 :49-51); before and after are isomers over held task atoms (Fig 12 :117).
7. **What can be said at the stop?** A shape, two conditions, and falsifiers. Not a universal net sign, not a safe-occupation list, not a `grounded` answer. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **automation does not have a universal net sign at the object level asked. Per occupational slot, displacement is a failure of the channel to a ground that still pays, and creation is an import of new task atoms from a closure that differs. A slot that survives is an isomer over a held task set, and its valence flips when the residual changes, so no standing list of safe occupations survives a change of residual.** The two conditions are kept separate, never averaged. Which particular tasks occupy the slots and what the net sign would be after a real measurement are a `gap`, not silence: the framework returns a shape, and the discriminator that would name the source is not held in this run. Mode `specified` on the per-domain claims, `general` on the structural shape, not `grounded`. No world source flipped a verdict; the two genuine conflicts were returned to the census and re-mapped. No unresolved strain remains after re-census.
