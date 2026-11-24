# Figure-grounded audit: BUS-0082, automation, expansion, new work

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every finding carries its mode. Nothing is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From *The Recursive Self-Improvement Trap*, opened 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This audit is checked for internal consistency against the figures. It cannot settle BUS-0082.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session; cite as `Fig N :line`. Also `THE_FORMULA.md`, `FIGURES_README_canonical.md` and `THE_SEAT_MAP_Field_Guide_amended.md`. World sources are secondary, opened 2026-11-22, and recorded in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o'| per slot s (Formula step 1; Symbols table, `R`: *"R is measured per slot, never as a single global number."*). Here:

- **b** is the worker's belief about what the task affords, formed from the worker's history and inherited priors.
- **a** is the action on the task: write, decide, check, operate, communicate.
- **Γ(b,a)** is what the worker's library of routines predicts will happen.
- **o'** is what the task actually returns: time taken, quality, output, pay, continued employment.
- **s** is the occupation-task pair. R is indexed per occupation-task and never averaged into an economy-wide number.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is not whether AI is good or bad for work in general. It is why, in some occupation-slots, AI drives R toward zero with the human operand removed; in others it lowers R while the human stays and does more; and in others it brings into being a slot that was not in the worker's library at all. Observed: the three outcomes coexist and the balance differs by occupation (Brynjolfsson, Li and Raymond 2023: 34% improvement for novices, minimal for experienced workers; Felten, Raj and Seamans 2023: exposure concentrated in telemarketers and post-secondary teachers; ILO 2025: clerical occupations highest exposure).

State the residual as: *why does inserting the same general-purpose tool close the gap between predicted and actual task outcome by removing the worker in some slots, by extending the worker's reach in others, and by adding a slot that was not there before in still others, and why does the mix shift with occupation?* This is an effect description. It names no economic theory, no "complementarity", no "displacement", no "task-based model". Those are candidate names, withheld until after the census.

**Bind the sought-for shape as an ordinary term before the run** (Formula, "Direction"): an answer would be an operator assignment per occupation, subtraction or production or import, plus an instrument that discriminates the three at the ground. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names candidates: *"A measurement, an experiment, a counter, a market, a patient outcome."* For BUS-0082 the anchor is realized task outcome and employment, measured per occupation: time per task, independently scored quality, retained employment and wage. These do not move because a labor economist changes their mind. Exposure indices (AIOE, the ILO Global Index) estimate potential from task descriptions and expert scores; they are instruments, and instruments can be wrong on axes they do not measure (Fig 2 :37-38). This distinction governs finding F4.

---

## 1. Domain census, before choosing any figure line

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a three-place relation among worker library Γ, action a and task outcome o', indexed by occupation-task slot s and ordered by time. It carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) because learning on one task precedes the next, and a **comparison** bond for "primarily" (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87), because deciding which option dominates is a threshold over per-slot counts, not an absolute quantity. It is not symmetric: worker and task are not interchangeable.
- **Symmetry.** The tool's valence is not symmetric. Fig 11 :49: *"An actor’s valence is relative to the residual, not a property it carries."* The same AI assistant is a substitute in one slot and a complement in another. Fig 12 :92: *"Symmetry is what decides whether an arrangement is a new thing."* Automation and expansion are different arrangements over overlapping atoms, not spellings of one thing.
- **Scale.** Three scales are in view: the single worker's step loop (Fig 4, one-agent panel), the population of workers with a shared library and *"something that ranks what they produce"* (Fig 4 :5), and the occupation structure across economies. The membrane is *"Not a wall: a filter with a direction"* (Fig 4 :21) and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 Worker loop** (one agent, one slot) | worker, Γ, the AI tool, the task | actions and residual reduction | yes: realized task outcome (time, quality) | admitted |
| **D2 Occupational habitat** (population) | workers, occupations, firms, customers, regulators | employment, wage, task mix | yes: realized employment and pay per occupation, the market as ground (Fig 2 :29) | admitted |
| **D3 Task-composition library** (inside the worker and the firm) | atoms (task elements, routines) and bonds | reach, |φ| cost | yes: settlement, *"then check it against the ground, then carry it up"* (Fig 5 :32) | admitted |
| **D4 Measurement channel** (exposure indices, surveys, case studies) | instruments, indices, expert panels | contact with the ground | yes: the ground that persists while the channel does (Fig 10 :24) | admitted |
| **X1 "AI productivity" as a free-floating property of the tool** | the model | capability | **no** anchor independent of task outcomes | not a domain yet |
| **X2 "Automation level of an economy" as a single cause** | an economy | aggregate productivity | measurable, but this is the pooled result of D1 and D2, and pooling is barred by Fig 1 :22 | absorbed, not separate |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that models never matter. Models are Γ operands; their effect must be read at the ground.

### 1.3 Partition or union

D1 and D3 overlap: Γ is inside the worker loop, so their overlap is a compound with its own loop. D2 and D4 overlap: contact with the ground is exercised inside the habitat, so that overlap is a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: (C1) the task outcome stays reachable as a reading, so the slot can be graded at all; (C2) the worker's reach is composed inside the closure already held, which covers subtraction and production; (C3) a new atom enters from a closure that differs, which covers new forms of work. A slot failing only C2 and a slot failing only C3 are not different degrees of one failure. They need different instruments. *The Library of Babel*, opened 2026-11-22, states the same stop: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for a worker facing AI: 1 perception (can the worker read the task outcome?) → 2 vocabulary (does Γ have terms for what the changed task affords and what would count as progress?) → 3 objective (can the worker state a comparison that would count as getting somewhere?) → 4 planning → 5 learn and carry. The middle link is the one with no instrument. Fig 3 :26: *"The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."* Most measurement effort lands above the break because that is where the existing exposure indices are (Fig 3 :29-30). This governs finding F7.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not which option wins |
| 2 The Ground | realized outcome as anchor; independence vs common pool | governs F4 and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs F7 |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs occupation-to-economy transfer |
| 5 Mint Pipeline | three guards as product; settlement | governs C2, and the refusal of C3 as a mint |
| 6 Closure / Reachability | import is the only operator that moves the wall | decisive for the third option |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs why exposure indices compound without evidence |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | decisive with Fig 6 |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does | governs exposure indices as instruments (F4) |
| 11 The Habitat | capability is worker-and-habitat; valence relative to residual | decisive for D1 and D2 |
| 12 The Bond | subtraction, production, symmetry, isomer, functional group | governs the operator identities (F1, F8) |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs C3 and the honest stop |
| Operators table | − subtraction, ⇒ production, ⋛ comparison | identifies the three operators |
| Symbols table | `R` is the aim; the ground is the anchor | no ground reading is held here |

**Strain test during the census.** An early attempt to read "new forms of work" as a mint (Fig 5) only fit by calling a new occupation a novel arrangement of existing tasks. That is a strain: Fig 5 :21 says mint composes inside the closure, so a mint cannot produce a genuinely new atom. Re-census sends the third option to import (Fig 6), and the mint reading is retracted. Logged as S1 in section 7. No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about occupations, `grounded` only if settled by a measurement. None is `grounded`.

### F1: The three options are three operators, not three degrees of one effect

**Mode: `general` for the operator identities, `specified` for the labor application. Domains D1, D3. Status: triangulated (Fig 6, Fig 8, Fig 13, Operators table, four distinct roles).**

> **"A with B removed or absent"** (Operators table, subtraction `−`; also Fig 12 :82)
> **"Progress is a subtraction."** (Fig 12 :112)
> **"A produces B; B did not exist before"** (Operators table, production `⇒`)
> **"the only operator that moves the wall"** (Fig 6 :14)
> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."** (Fig 8 :32)
> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)

Automation removes the human operand from the arrangement, so it is subtraction. Expansion adds a term that was not present before *inside* the worker's reach, so it is production and composition. New forms of work require an atom that was not in the library, and no amount of composing inside the closure supplies one, so they are imports from a differing closure: a new tool, a new market, a new institution, a new client, a new regulation. The third option is therefore **not** an extreme version of the second. It is categorically different, exactly as Fig 9 :57 requires of a union compound.

This matters for the question as asked. "Primarily" is a threshold over three different kinds of change. Asking which one dominates without first separating them is the blend failure named in Fig 8 :4-5, where the blend adds vocabulary and never an atom. The world literature mostly agrees: Acemoglu and Restrepo 2018 distinguish *"the displacement effect"*, a *"productivity effect"*, and *"the creation of new labor-intensive tasks"*; Autor 2015 says automation *"does indeed substitute for labor"* but also *"complements labor"*. Both are corroboration from one labor-economics pool, so they are one witness, not two.

**Refuter:** show a genuinely new form of work generated entirely by composition inside an unchanged worker closure, with no atom entering from a differing closure; or show that subtraction and production are the same bond, so that automation and expansion cannot be told apart even at the ground.

### F2: The operator that fires depends on the slot, not on the tool

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 11 habitat valence and Fig 4 scale invariance, low overlap).**

> **"An actor’s valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"Only the actors, the currency and the anchor change."** (Fig 4 :20)

AI is not intrinsically an automator or an augmenter. Its sign is a property of the worker-and-task relation at that slot. This is the figure-grounded form of Autor's finding that computers substitute for *"routine, codifiable tasks"* while *"amplifying the comparative advantage of workers in supplying problem-solving skills, adaptability, and creativity"* (Autor 2015), and of Brynjolfsson, Li and Raymond's *"34% improvement for novice and low-skilled workers but with minimal impact on experienced and highly skilled workers"* (2023). Two occupations can receive the identical tool and get opposite operators. That is why the question's last clause, how the balance varies by occupation, is not an afterthought: it is the only place where the answer can be stated.

Note the same figure supplies the world check. Brynjolfsson et al. report that the tool *"disseminates the best practices of more able workers"*, which is Fig 6 :23 (*"The bound moves only on contact with a frame whose closure differs"*) operating between colleagues, not a generic "productivity effect".

**Refuter:** a task in which the tool's valence is invariant across a documented change of residual and across worker skill, that is, always substitution or always complementarity regardless of what the slot needs. Under Fig 11 :49 that cannot happen; if observed, F2 is false.

### F3: Capability is worker-and-habitat, not AI alone

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 11 and Fig 4).**

> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)

A claim of the form "AI raises productivity by X percent" is an agent-only reading when it omits the habitat: which tasks, which colleagues, which customers, which measurement. The ILO 2025 report makes the same point from the institutional side: *"As most occupations consist of tasks that require human input, transformation of jobs is the most likely impact of GenAI."* The tool changes contact; it does not settle the outcome alone. Dell'Acqua et al. 2025 report that *"individuals with AI matched the performance of teams without AI"*, which is the same shape at the team stratum: the AI supplied part of what the human habitat had been supplying.

**Refuter:** an AI-only improvement that moves the ground with no change in contact, for example a measured task improvement that survives removing the tool from the habitat and from every colleague's workflow. If that exists, Fig 11 :40 is false as applied here.

### F4: Exposure indices are instruments, not the ground

**Mode: `general` for the instrument rule, `specified` for the labor application. Domain D4. Status: triangulated (Fig 10 and Fig 1, low overlap).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"stale percepts, dropped transients, saturated metrics, pooled readings"** (Fig 10 :26)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"An anchor is legitimate when the question is constitutively about it."** (Fig 2 :36)

AIOE (Felten, Raj and Seamans 2021/2023) and the ILO Global Index of Occupational Exposure (Gmyrek et al. 2023, refined 2025) score the *potential* for automation from task descriptions and expert judgment. They are instruments built to point at a possibility, not measurements of the realized operator. Their own builders say so: the ILO 2025 paper speaks of *"perceive potential of automation"* and of *"revised global employment estimates"*, not of observed substitution. Treating an exposure score as an outcome is the observer's defect named in the Seat Map: a new instrument's first output is a claim about the instrument.

The same figure explains why several exposure papers do not make several witnesses. Two pages quoting the same AIOE dataset are one pool. Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence."*

**Refuter:** an exposure index that predicts prospectively and per occupation which of the three operators will actually fire, with no ground measurement of time, quality or employment, and with no shared task taxonomy with the studies it is compared against. If one exists, F4's instrument reading is false.

### F5: The balance must not be averaged across occupations

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 1 and Fig 9).**

> **"A global R near zero with one live slot residual is a legal state"** (Fig 1 :13)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)
> **"The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does."** (Fig 11 :73)

An economy-wide headline such as "AI automates 30% of tasks" is a pooled reading. It is useful as a budget filter, and useless as a verdict on any named occupation. Acemoglu's *"no more than a 0.66% increase in total factor productivity (TFP) over 10 years"* (2024) is exactly this kind of aggregate: a filter on how much to spend on measurement, not an answer to what happens in a given slot. The specified consequence is that any answer to BUS-0082 expressed as a single economy-wide share has already thrown away the only signal that says where to look.

**Refuter:** an averaged statistic that predicts prospectively and per occupation which named slot gets which operator, and that survives a habitat substitution in that slot. If one exists, F5's methodological consequence is false.

### F6: The union must be unbundled before a lever is chosen

**Mode: `specified`. Domains all. Status: triangulated (Fig 9 and *The Library of Babel*, framework-internal).**

Fig 9 :54, :55 and :57 are the governing lines (quoted in section 1.3). The three conditions have different instruments:

- A **C1** failure shows up as an unreadable task outcome: stale percepts, saturated metrics, pooled readings (Fig 10 :25-26).
- A **C2** failure shows up as a reach that stops moving while the library keeps growing, because composition inside the closure cannot add an atom (Fig 6 :21, Fig 8 :32).
- A **C3** failure shows up as a new form of work arriving with no source gate, no provenance and no shadow test (Fig 8 :9-13).

A single lever, for example "train everyone to use the tool", clears the region where only C2 holds and leaves the intersections standing (Fig 9 :55). This is why the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

**Refuter:** one intervention that produces automation, expansion and new work in all three failure types, with no categorically different residue left over. That would collapse the union into a partition.

### F7: The break is usually at the middle link

**Mode: `specified`. Domain D1. Status: single-source (Fig 3, with Fig 12 :111-115 as a corroborating line from a different figure but the same framework).**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)
> **"A vocabulary without bonds can name a state and cannot name a route to one."** (Fig 12 :111)

For a worker facing AI, the usual failure is not that the tool cannot act; it is that the worker's Γ has no terms for what the changed task affords and cannot say what would count as progress there. The exposure literature measures links 1 and 4 (what tasks exist, what tools are adopted) heavily and link 2 almost not at all. That is budget landing above the break.

**Refuter:** a documented occupation whose perception, vocabulary and objective links all measure as working and whose failure is located at planning. That would falsify the "usually middle" claim, though not the dependency ordering.

### F8: Two occupations with the same task atoms can still differ

**Mode: `specified`. Domains D2, D3. Status: triangulated for the legality of the reading (Fig 12 and Fig 11 :50), single-source for the occupation application.**

> **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** (Fig 12 :5)
> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** (Fig 12 :117)
> **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."** (Fig 12 :124)

Two occupations with the same list of task elements but different arrangements, one composing them as a repeated sequence and the other as a reconfigurable network, are isomers under Fig 12 :117: same atoms, different bond, different behavior, with the difference invisible in a task inventory. If they share only the pattern *worker → tool → outcome* while differing in which atoms fill the slots, the weaker claim holds: they are members of one functional group (Fig 12 :124). Felten, Raj and Seamans find *"a positive correlation between wages and exposure to AI language modeling"*, which is exactly why a task list alone cannot tell you the outcome: the bond and the habitat are doing work the atom list does not record. This correlation **conflicts** with the naive story that AI exposure simply tracks low skill; the conflict is returned to the census in section 7 (R1), not used to flip a verdict.

**Refuter:** two occupations with identical atoms and identical bonds whose AI balance diverges with no difference in ground contact or imported atoms. That would move the explanation out of composition and into habitat alone.

### F9: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per occupation-task, never an economy-wide average | general | Fig 1 :19, :22 | figure-derived |
| Realized task outcome is the anchor; exposure indices are instruments | general | Fig 2 :29, :36; Fig 10 :24 | triangulated F4 |
| Automation is subtraction, expansion is production, new work is import | general | Operators; Fig 6 :14, :21; Fig 8 :32 | triangulated F1 |
| Which operator fires depends on the slot's residual | specified | Fig 11 :49, :50; Fig 4 :20 | triangulated F2 |
| Capability is worker-and-habitat, not AI alone | specified | Fig 11 :39, :40 | triangulated F3 |
| The question is a union of three conditions | general | Fig 9 :54, :55, :57 | figure-derived |
| The break is usually at vocabulary and objective | specified | Fig 3 :19, :26, :27, :29 | single-source F7 |
| Same task atoms, different bonds, different outcome | specified | Fig 12 :5, :117, :124 | triangulated F8 |
| Which named occupation gets which operator next | not stated | none | gap: framework returns a shape, not a name |

---

## 4. Pre-registered refuter

Per the Seat Map design-instrument rule: *"And a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A genuinely new form of work is generated entirely by composition inside an unchanged worker closure, with no atom entering from a closure that differs (breaks F1, Fig 6 :21, Fig 8 :32).
2. A task's tool valence is invariant across a documented change of residual and across worker skill (breaks F2, Fig 11 :49-50).
3. An AI-only improvement moves the ground with no change in the worker's contact (breaks F3, Fig 11 :40).
4. An exposure index predicts the realized operator prospectively per occupation with no ground measurement and no shared evidence pool (breaks F4, Fig 10 :24).
5. An averaged statistic predicts per-slot which operator fires next and survives a habitat substitution (breaks F5, Fig 1 :22).
6. One intervention produces all three operators in all three failure types with no categorically different residue (breaks F6, Fig 9 :57).
7. Fig 13's six terms are derived from five of them, or closure is shown to be non-idempotent (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a task-level ground measurement has paid for the operator assignment.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of labor markets (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Separate the three operators in every report. A blended "AI impact score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Ask, at each occupation, which link the chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
4. Treat exposure indices as Γ, as candidate libraries whose reach must be tested against realized outcomes, never as the answer (Fig 1 :27).
5. Use the labor literature as a budget filter and as one corroborating witness. Brynjolfsson et al., Acemoglu and Restrepo, Felten et al. and the ILO report draw on overlapping task taxonomies and citation chains; per Fig 2 :31 their agreement is one pool, not four (Fig 2 :40).
6. Verify imports. Any claim that a "new form of work" has appeared owes a source gate and a shadow test (Fig 6 :12-13, Fig 8 :9-13).
7. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
8. Stop at the shape. Do not name which occupation wins next. Fig 9 :32: *"you get a kind of thing, never the answer itself."*

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, and three essays opened this session (*The Library of Babel*, *The Recursive Self-Improvement Trap*, *The Hard Problem is About Source*).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish.
- *The Library of Babel* confirms the method: *"you will have to use the existing vocabulary you do know that is closest to the words that you wish to describe and grasp the shape of."* The closest available words were automate, augment, exposure, complementarity and task creation. None was used as the answer before the census.
- *The Hard Problem is About Source* confirms the instrument limit: *"If several paths create the same behavior, then behavior is a projection with lossy information"*, and *"The answer is unreached until a better instrument exists."* A task-outcome reading does not identify which operator produced it; this is why F1 needs an instrument, not an argument.

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Read "new forms of work" as a mint under Fig 5 | **Retracted, strain S1** | Fig 5 mints inside closure; a mint cannot add an atom. Re-census sends the third option to import (Fig 6 :14, :21) |
| Treated AIOE and ILO exposure scores as corroborating world evidence | **Retracted as witnesses, kept as instruments** | They measure potential from task descriptions; Fig 10 :24, Fig 1 :27 |
| Applied Fig 13's six physical terms to occupations | **Retracted, strain S3** | Only fit by renaming tasks as kinds of energy. Fig 13 governs the honest stop, not occupational taxonomy |
| Planned to name the occupations where expansion dominates | **Marked `gap`** | Fig 9 :32 returns a kind of thing; *The Hard Problem* requires a source-discriminating instrument |
| Read Felten et al.'s positive wage-exposure correlation as a verdict flip | **Conflict, re-census R1** | Exposure is an instrument, not an outcome. After re-mapping it corroborates F8 (a task list does not fix the bond). Verdict unchanged |
| Called Fig 11 :39 a `general` law about all occupations | **Narrowed to `specified`** | Structural claim; no task-level measurement pays for the occupation version here |
| Used three NBER papers as three independent witnesses | **Narrowed to one evidence pool** | Shared task taxonomies and citation chains; Fig 2 :31, :40 |
| F1 called "decisive" in an early draft | **Kept as triangulated, not decisive** | Four figures with distinct roles, all from one framework; triangulation here means low topical overlap, not independent evidence pools |

**Strains sent to the log:** S1 (new work as mint), resolved by re-census to import; S2 (AI as a property of the tool), resolved by Fig 11 :49 to valence relative to the residual; S3 (Fig 13 applied to occupations), resolved to honest-stop role only; S4 (⋛ used to decide "primarily" as if it were an absolute quantity), resolved by Fig 12 :87 to a threshold over per-slot counts. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54-57 plus the Library of Babel bundle passage: a union of three operators with different instruments, not one hard question.
2. **What is the anchor?** Realized task outcome and employment, named in Fig 2 :29. Not exposure scores, not consensus (Fig 1 :27).
3. **Are the three options one effect?** No. Subtraction, production and import are different operators (Operators table; Fig 6 :14, :21).
4. **Where is the answer located?** In the slot, not the tool. Fig 11 :49: valence is relative to the residual.
5. **How does quick substitution happen?** The human operand is removed from a composition that already closes R; no new atom is needed (Fig 12 :112, Fig 6 :21).
6. **How does new work happen?** An atom enters from a closure that differs, with a source gate and a shadow test (Fig 6 :23, Fig 8 :9-13).
7. **What can be said at the stop?** An operator assignment shape, three conditions, their instruments and falsifiers. Not which named occupation gets which operator next. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **AI changes work by three different operators. Automation removes the human operand from an existing composition; expansion produces a new term inside the worker's reach; genuinely new forms of work require an atom imported from a closure that differs. Which operator fires is a property of the occupation-task slot, not of the tool, and the balance must be read per occupation against realized task outcomes, never from an exposure index or an economy-wide average.** Mode `specified`. No world source flipped a verdict: the one genuine conflict (Felten et al.'s positive wage-exposure correlation) was returned to the census and re-mapped to the bond/instrument distinction. Four strains were logged and resolved by re-census. Which named occupation gets which operator is a `gap`, not a hidden answer. The instrument that would close it, a prospectively measured per-occupation operator assignment with a source gate on imports, is characterized but not held here.
