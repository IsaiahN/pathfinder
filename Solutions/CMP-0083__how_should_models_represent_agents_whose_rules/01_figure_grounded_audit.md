# Figure-grounded audit: representing changing, heterogeneous agents

**Mode of this document: `specified`, not `grounded`.** It states what a model would have to satisfy and what an instrument would have to measure. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §7.

**Sources.** The canonical figure text in `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical figures README, `THE_FORMULA.md`, the seat map, the eight essays, and the world sources opened and recorded in `10_source_ledger.csv`.

---

## 0. The residual, in effect terms

When a model gives every agent one fixed rule, one fixed goal and one fixed information set, or folds the agents into one representative type, what fails is not accuracy in the aggregate. What fails is the **per-agent, per-step signal**. If agent 7 changes its rule at step 40 because its context changed, a pooled representation has no slot on which that change can register. The residual is indexed by object slot, and a global average near zero with one live slot is a legal state (Fig 1 :13, :19). The model reports success while the live slot goes unread.

The opposite failure is equally real. If every difference is stored as a new opaque type, the vocabulary grows while the reach does not. Composition inside a closure never adds an atom (Fig 6 :21), so a model that enumerates types without a binding discipline produces a bigger space, not a better one (Fig 12 :27). It still cannot say which rule actually governs at a step, because a type label is not a measurement.

**R stated as an effect:** the model's representation loses contact with the slot-level changes that the target system keeps producing, and no term inside the model can decide which rule, goal or information set is live at a slot and a step. The first loss is an aggregation failure. The second is a source-discrimination failure: several different rule histories can produce the same observed behavior, so behavior is a projection with lossy information (*The Hard Problem is About Source*).

**What an answer would look like (bound before the run).** An answer is a package with four parts: (i) a per-slot, per-step indexing discipline that keeps live residuals visible; (ii) a typed encoding of rule, goal and information over a shared library; (iii) a re-grounding rule when the context or question changes; and (iv) an explicit report that the identity of the governing rule is `gap` until an instrument discriminates it. This is the ordinary term the refuter tests. It is a shape, not a named modeling language.

---

## 1. Domain census, before any figure line is chosen

### 1a. R by arity, symmetry and scale (Fig 9 :22 "arity · symmetry · scale")

- **Arity.** At least three operands: an agent, its rule/goal/information, and a context or step. This is not one field with two readers (a seam); it is one field with many readers across many steps, so the residual must be indexed twice, by slot and by step (Fig 1 :11, :19; Symbols :42 "One object, region or entity being tracked. R is measured per slot, never as a single global number.").
- **Symmetry.** Agents are **not** interchangeable. Swapping a rule-follower and a goal-switcher changes the outcome, so the bond relating them is ordered, not symmetric (Fig 12 :46 "A bond is the typed relation between two operands."). Two readings of the same event at the same slot and step, however, are one report, not two witnesses (Fig 2 :18-21 "one evidence pool", "they never talk, and still agree", "so the agreement is the pool talking, not two frames confirming each other").
- **Scale.** Three scales are in play: the single agent's step loop (Fig 1 :8 "per-step loop (POMDP)"); the population with a shared library (Fig 4 :5 "many agents, a shared library, and something that ranks what they produce"); and the lineage across contexts, where the room changes when the question changes (Fig 10 :71 "The room composition is a function of the question."). The membrane between the first two is a filter with a direction, not a wall (Fig 4 :21).

### 1b. One line per domain: actors / currency / anchor

No nameable anchor means it is not a domain yet. Each domain below has one.

- **D1, the per-agent per-step loop.** Actors: one agent, its belief `b`, weighting `w`, action `a`, observation `o'`, and residual `R` per slot. Currency: the residual per slot; the belief leans on private history versus inherited prior, and "w is learnable from the outcomes of past weightings" (Symbols :24). Anchor: the ground, Fig 1 :23 "The ground enters as the only metric."
- **D2, the population and between-agent difference.** Actors: many agents, a shared library, and something that ranks what they produce (Fig 4 :5). A frame is "any bounded system with a library: an agent, a person, a discipline, a model" and frames differ in signature, not merely in labels (Symbols :111). Currency: methods carried up, head starts sent down (Fig 4 :22 "Only methods cross up. Only head starts come down."). Anchor: the ground, which ranks outputs without updating on them.
- **D3, time and context.** Actors: the sequence of rooms or contexts and the residual each surfaces. Currency: variation inside a room, selection between rooms, "Progress per handoff has two factors" (Fig 7 :37). Anchor: the ground, Fig 7 :35 "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."
- **D4, the representation itself.** Actors: atoms and typed bonds, plus the unary negation operator. Currency: two incommensurable prices, Fig 12 :126 "Bits price the description. Actions price finding out whether it holds." Anchor: the ground settling a term, Fig 12 formula step 5 "the ground settles it. Verified only by what pays."

### 1c. Partition or union (Fig 9 :54-58)

This is a **union**, not a partition. D1 (change inside one agent over steps), D2 (difference between agents at one step), and D3 (change of context across rooms) overlap. An agent whose information access changes is simultaneously a within-agent time change (D1) and a difference from its peers (D2) and possibly a response to a new room (D3). Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound." Each overlap is a compound with its own loop. One lever, for example "add a time index", leaves the between-agent and between-context intersections standing. Unbundle before searching again (Fig 9 :54).

### 1d. Order by dependency (Fig 3)

- **First, perception and indexing.** The residual must be indexed per agent-slot before anything else. Fig 1 :19 "The residual is indexed by object slot, not aggregated." Without it, every downstream reading is of nothing (Fig 3 :22 "a reading taken below the break is not a weak reading. It is a reading of nothing.").
- **Second, vocabulary.** The model needs terms for what a situation affords and for the relations between its parts. This is the middle link, "having terms for what a situation offers and being able to say what would count as progress" (Fig 3 :25), and it has the fewest instruments (Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at.").
- **Third, objective.** Each agent's goal is stated as a comparison. Fig 12 :112 "A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."
- **Fourth, ground.** An anchor that does not update on the model's own report (Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks.").

Fig 3 :20 "The chain is ordered by dependency, not by importance." Effort spent above the break, for example tuning a solver, arrives at a step that cannot use a missing slot index.

---

## 2. Figure census: verbatim lines quoted before concluding

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | residual per slot, aggregation destroys the signal, ground is the only metric | D1 governed; pooled agent types disqualified |
| **2 The Ground** | anchor must not update; one pool is one witness | governs "which rule is live" as a ground question, not an agreement question |
| **3 Dependency Chain** | order by dependency; middle link has no instrument | governs the order of the representation requirements |
| **4 The Membrane** | methods cross up, head starts down; round trip gap | governs what may be carried across scales and contexts |
| **5 Mint Pipeline** | guards as a product; make the sought shape an ordinary term | governs the binding of the answer-shape before the run |
| **6 Closure / Reachability** | mint adds no atom; import only on contact with a differing closure | governs the failure of opaque type proliferation |
| **7 Room Chain** | selection between rooms; agreement is variation | governs D3 across contexts |
| **8 Union Surplus** | residual first, frame second; provenance separates convergence from import | governs the union reading and the world search |
| **9 Leave / Arrive** | describe the residual before looking; filters are not witnesses; unbundle unions | governs the census and the `gap` verdict |
| **10 Ground Maintainer** | declare the stake; room follows the question; separate frames | governs D3 and the expert-checking arrangement |
| **11 The Habitat** | capability is agent-and-habitat; valence relative to the residual | governs "no standing list of important agents" |
| **12 The Bond** | bonds carry arrangement; goals are comparisons; two currencies | governs D4 encoding |
| **13 Minimum Viable Set** | set closed, arrangements open; unreachable is a verdict | governs the honest stop on rule identity |
| **Operators table** | seven bonds, negation unary and open-priced | governs the symbol mapping and a live strain |
| **Symbols table** | `R` per slot; `w` learnable; frame defined by signature | governs D1 and D2 |

Strained readings are named in §5, not smoothed over.

---

## 3. Findings

### F1 : A pooled or representative-agent representation destroys the live signal (decisive for D1)

Fig 1 :19 "The residual is indexed by object slot, not aggregated."
Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."
Fig 1 :28 "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."

Symbols :42 "One object, region or entity being tracked. R is measured per slot, never as a single global number."

A representative agent or a pooled type treats the population as one slot. Under these lines it is not a coarser but acceptable approximation; it is the named operation that throws away the signal. When one agent's rule changes, the population average can stay near zero while the live slot carries all the mass (Fig 1 :13 "a global R near zero with one live slot residual is a legal state"). The model then has no instrument aimed at the change.

The world agrees, and with low overlap. The agent-based modeling literature defines its contribution precisely as replacing the representative agent: Wikipedia "Agent-based model" states "representative agents are replaced by agents with diverse, dynamic, and interdependent behavior". The same page records the failure mode of pretending otherwise: "the ABM approach has been criticized for its lack of robustness between models, where similar models can yield very different results." Corroboration, not authority.

**Mode:** `specified`. **Status:** triangulated (Fig 1 per-slot rule plus Symbols table slot definition plus the ODD protocol's requirement that state variables "may vary among entities of the same type or vary over time", low overlap between the figure text and the ABM documentation).

**Refuter:** show a pooled representation that preserves every per-slot residual trajectory without loss, and whose aggregate still pays at the ground across an independent agent-level intervention. If it does, the per-slot requirement is a preference, not a law.

### F2 : Heterogeneity is a difference of closures and bonds, not a list of opaque types (D2)

Fig 4 :20 "Only the actors, the currency and the anchor change."
Fig 12 :46 "A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."
Symbols :111 "A frame is any bounded system with a library: an agent, a person, a discipline, a model. It is a theory with a signature rather than a coordinate system, so frames differ in what they can express and not in how they label it."

A model that stores an agent as `type_17` has recorded a label, not a signature. Two agents with the same label and different information access are one name for two frames (Fig 8 :15 "two names for one frame"). What must be represented is the typed relation: which rule follows which observation, which goal is compared against which threshold, which information is absent. Under Fig 12 :5 "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording.", a feature vector of ingredients is half a description.

Fig 6 :21 "MINT composes inside the closure and can never add an atom." Proliferating types is mint without novelty; it enlarges the space without moving the wall (Fig 12 :27 "→ a bigger space, not a bigger vocabulary").

The world corroborates from engineering and cognition. Wikipedia "Partially observable Markov decision process": "the agent cannot directly observe the underlying state. Instead, it must maintain a sensor model" and a policy is "a mapping from the history of observations (or belief states) to the actions". That is a signature with typed parts, not a type ID. Wikipedia "Bounded rationality" records Simon's aim "to replace the global rationality of economic man with a kind of rational behavior that is compatible with the access to information and the computational capacities that are actually possessed by organisms", and notes that ABMs "often implement that agents follow a sequence of simple rule-of-thumb behavior instead of an optimization procedure". These are two low-overlap fields (AI/operations research and cognitive economics) agreeing on the structure the figures require.

**Mode:** `specified`. **Status:** triangulated (Fig 4 plus Fig 12 plus Symbols, with world corroboration from two distinct fields).

**Refuter:** a model that stores agents as opaque identifiers and still reproduces every per-slot residual trajectory and survives a ground test that swaps two agents with different information access. Then the bond vocabulary is bookkeeping, not structure.

### F3 : Across time and context, a rule is a recording unless it is carried as a reapplicable method (D3)

Fig 4 :22 "Only methods cross up. Only head starts come down."
Fig 4 :25 "A recording carried upward looks like knowledge and is a description of one occasion."
Fig 10 :71 "The room composition is a function of the question."
Fig 10 :72 "When the question changes, the room should change. A room that stays fixed while the question moves is the failure; the correlation is only its symptom."

A rule that paid at step 20 is a description of one occasion. When the context moves, replaying it produces "a system that repeats a past success and cannot produce a new one" (Fig 4 :26). What may cross is a method that can be reapplied (Fig 4 :23 "upward: a method that can be reapplied. Never the recording of a particular success."). The model must therefore store the *generator* of the rule, including the conditions under which it was purchased, and re-range it against the ground in the new room.

The lossy transform matters: going up throws away detail and the trip is not reversible (Fig 4 :28 "it means the trip is not reversible, and something carried up and brought back down will not match what was sent."). So the model must measure the round-trip gap rather than assume the compression preserved the rule (Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked.").

The world corroborates independently. Wikipedia "Concept drift": "concept drift or drift is an evolution of data that invalidates the data model. It happens when the statistical properties of the target variable, which the model is trying to predict, change over time in unforeseen ways." The same page states "Concept drift cannot be avoided for complex phenomena that are not governed by fixed laws of nature." The animal-behaviour literature reaches the same shape from a different direction: "Behavioural reaction norms measure the behaviour of an individual over an environmental gradient", so the rule is a function of context, not a constant.

**Mode:** `specified`. **Status:** triangulated (Fig 4 membrane plus Fig 10 room rule; world corroboration from ML/engineering and animal behaviour, two genuinely low-overlap fields).

**Refuter:** a fixed rule set whose predictions continue to pay at the ground across an independent, pre-registered context shift, with no re-grounding. If it does, the method-versus-recording requirement is not forced.

### F4 : No standing list of which agents matter; valence is relative to the residual (D3)

Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries."
Fig 11 :51 "No standing list of good actors survives a change of residual."
Fig 11 :40 "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."

In a changing model, a fixed importance ranking over agents is a standing list. When the residual moves, the same agent can become a benefactor or a malfactor (Fig 11 :50 "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."). What the model owes is a re-enumeration of the habitat per residual: everything in contact with it, then what contacts those, outward until the cascade stops mattering (Fig 11 :44). A test harness is a substituted habitat and "a synthetic solve proves wiring and never capability" (Fig 11 :70). So a model that only validates on its own synthetic agents has proved its wiring, not its representational adequacy.

**Mode:** `specified`. **Status:** triangulated (Fig 11 valence and capability lines plus Fig 10 :72 room rule; the ODD protocol's "patterns" requirement gives weak world corroboration because patterns are chosen relative to model purpose).

**Refuter:** a fixed agent-importance list that survives a residual change and still pays at an independent ground. Then valence is carried, not relative, and Fig 11 is narrowed.

### F5 : The encoding must carry bonds; rule, goal, information and rule-change are different operator kinds (D4)

Fig 12 :5 "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."
Fig 12 :94 "The arrangement is the substance."
Fig 12 :111 "A vocabulary without bonds can name a state and cannot name a route to one."
Fig 12 :112 "A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."
Operators :51 "a goal is a comparison, which is why a vocabulary without it cannot state one"

Mapping the three requested kinds onto the operator set:

| model quantity | operator | figure warrant |
|---|---|---|
| a rule (what follows what) | `→` sequence, ordered | Fig 12 :71 "A then B; B needs A to have happened"; Operators :34 "the only bond a flat chain can express, so every term today is a sequence whether or not it should be" |
| a goal | `⋛` comparison, ordered | Fig 12 :112; Operators :51 |
| information access | `−` subtraction, ordered, the absence of an operand | Fig 12 :81 "A with B removed or absent"; Operators :45 "is the second operand's absence the point? Yes." |
| progress of an agent | `−` subtraction | Fig 12 :112; Operators :46 "progress is a subtraction, which is why a vocabulary without it cannot say how far along it is" |
| a rule being false or replaced | `¬` negation, unary, not a bond | Operators :57 "is the point that it is false, rather than absent? Yes."; Fig 12 amendment :135 "Negation is not one: it takes a term and yields a term, and joins nothing." |

The practical consequence: a representation that can only list ingredients can say what an agent *contains* and cannot say what route it is on, what threshold it is aiming at, what information it lacks, or that its old rule is now false. It can accumulate and cannot refuse (Operators :58 "a refutation is a negation, which is why a vocabulary without it can only accumulate"). A vocabulary holding only `+` records the ingredients and charges nothing for the arrangement, which is the flat-form collapse (Fig 12 :6-17).

**Live strain, named not hidden:** negation is unary and "what a unary operator costs is open" (Operators :77-78). The figures price bonds but not negation. A model that must represent rule replacement needs the operator; the figures cannot price it. This is a genuine open item in the framework, not a defect in this derivation.

**Mode:** `specified` for the bond mapping, `general` for the structural claim. **Status:** single-source on the figure side (Fig 12 and Operators are one evidence pool), with weak world corroboration from the POMDP and concept-drift sources, which describe typed state, observation and policy structure but do not use the bond vocabulary.

**Refuter:** a flat, bond-free representation that can write a route, a threshold, an absence and a refusal, pays at the ground, and costs less in bits than the typed encoding. Then the bond requirement is an inefficiency, not a necessity.

### F6 : Description cost and ground-check cost do not add (D4)

Fig 12 :125 "A composition costs in two currencies, and they do not add."
Fig 12 :126 "Bits price the description. Actions price finding out whether it holds."
Fig 12 :127 "They are in different units, so a system holding one accounting cannot compare them and will not notice the shortfall. It proposes arrangements it cannot afford to test, and the budget is what decides how much of the space is reached at all."

A compact agent schema is cheap in bits and can still be impossible to check against the target system, because check cost is a separate quantity. A model can therefore be elegant and ungrounded at once. Conversely, a long schema over a single cheap operand can be expensive to state and cheap to refute (Fig 12 :128 "A long chain of cheap parts is expensive to describe and may cost one action to refute."). Reporting one number, for example a parameter count or a compactness score, as if it settled representational quality is the named error (Fig 12 :130 "Summing them into one figure is the error this names, not the fix for it.").

This is also a **filter versus witness** rule. Complexity and tractability scores are filters for what gets tried (Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."). They are not evidence that the representation is right.

**Mode:** `general`. **Status:** single-source (Fig 12), structurally stated.

**Refuter:** a single scalar objective that trades description bits against ground-check actions, is dimensionally well defined, and predicts both quantities across independent model families. Then the two-currency claim is a notation preference.

### F7 : Which rule actually governs a slot at a step is a `gap`, owed to a discriminator

Fig 9 :32 "you get a kind of thing, never the answer itself"
Fig 13 :134 "So the system can report that it lacks something rather than producing an answer anyway. Unreachable is a verdict here, not a silence,"
Fig 13 :135 "It cannot say which primitive is missing, because naming it would mean already holding it."
Fig 8 :39 "So a search that finds nothing is never a proof of absence."

Several distinct rule histories can produce the same observed behavior. *The Hard Problem is About Source*: "If several paths create the same behavior, then behavior is a projection with lossy information" and "An instrument that can't distinguish these cases demonstrates its own inadequacy". A model observing its agents' outputs cannot determine, from the outputs alone, which internal rule produced them. No figure line supplies a rule-identification operator. The honest report is a shape plus a discriminator owed: the model can say what a rule representation must look like (typed, per-slot, re-grounded) and that rule identity is unreachable with its present instruments. It cannot name the rule without a source-discriminating measurement.

This is a `gap` of the **unreachable-at-this-budget** kind, not a proof of underivability in principle. Fig 6 distinguishes them: "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same." Importing a rule taxonomy against a mere budget limit would add an atom that was not needed (Fig 6 :52 "importing against a budget limit adds an atom that was not needed").

The POMDP literature corroborates the necessity of an instrument from a low-overlap field: "the optimal behavior may often include (information gathering) actions that are taken purely because they improve the agent's estimate of the current state". Information gathering is a distinct action class, which is what the figures call an instrument.

**Mode:** `general` on the limit, `gap` on the specific rule. **Status:** triangulated (Fig 9 plus Fig 13 plus the source essay; three distinct routes within one evidence pool, with world corroboration from AI).

**Refuter:** a figure line that names a specific rule-selection primitive (a mechanism that identifies which rule is live from behavior alone, with no instrument). That would collapse the gap and show the shape was too timid.

### F8 : The broken link is the instrument for slot-level rule binding (dependency re-check)

Fig 3 :25 "having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."
Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at."
Fig 3 :29 "Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."

Most modeling effort goes into solver tuning and parameter fitting, which sit above the break. The link that has no instrument here is the binding of a rule to a slot and a step: the model can name its ingredients (agents, rules, goals, observations) but has no way to verify which bond actually held. The ODD protocol addresses the neighboring documentation failure directly: "Describe what the program does, not what you think the model does." That is an instrument-shaped requirement, and its authors list "lack of sufficient details of many ODDs to enable reimplementation without access to the model code" as a live problem. Corroboration, at low overlap with the figure text.

**Mode:** `specified`. **Status:** triangulated (Fig 3 dependency rule plus Fig 11 harness limit plus ODD).

**Refuter:** a model with a validated, published instrument for slot-level rule binding that pays at the ground. Then the link is not broken; this finding is narrowed to models that lack it.

---

## 4. Pre-registered refuter

Written before the conclusion, per the seat map: "a falsifier written before the run is a design instrument, not only an honesty device." The shape claim is refuted if any of the following holds:

1. A pooled or representative-agent representation preserves every per-slot residual trajectory without loss and its aggregate pays at the ground across an independent agent-level intervention (breaks F1).
2. Opaque type identifiers reproduce the signature-level effects of typed bonds and survive an agent-swap ground test (breaks F2).
3. A fixed rule set keeps paying at the ground across an independent, pre-registered context shift with no re-grounding (breaks F3).
4. A fixed agent-importance list survives a residual change and still pays at an independent ground (breaks F4).
5. A flat, bond-free representation writes a route, a threshold, an absence and a refusal, pays at the ground, and costs less in bits than the typed encoding (breaks F5).
6. A single scalar objective trades bits against ground-check actions in a dimensionally well-defined way and predicts both across independent model families (breaks F6).
7. A figure line names a specific rule-identification primitive, or an instrument is demonstrated that identifies the live rule from behavior alone without a source-discriminating measurement (breaks F7, collapse of the gap).

If any fires, the corresponding finding is withdrawn and the shape is rewritten. Until one is run, no part of this may be labelled `grounded`. A failure is more useful than an endorsement.

---

## 5. Strains, re-census and corrections

### S1 : Fig 13's six-term substrate forced onto agent types (RETRACTED, preserved)

First pass tried to read the six terms (space, time, energy; spectrum, gradient, network) as a taxonomy of agent kinds. That strains the line: the six are the substrate the loop assumes, and "remove one and something stops" (Fig 13 :48), which is a claim about compositional roles, not about agent software. **Re-census:** Fig 13 governs what composes in any system; in this question it governs the structural roles available to the encoding, not a list of agent types. Fig 12 governs the bonds. Different objects, no strain after re-census. The first reading is kept here as evidence, not silently erased. Matches the canonical rule that a reading which makes figures contradict one another has misidentified its domain.

### S2 : "Shape, not a name" overextended (NARROWED, preserved)

First pass used the figures README phrase "what a missing thing would have to look like (a shape, not a name)" to forbid naming any rule or goal. **Narrowed:** the phrase governs a primitive not held in the library. "It cannot say which primitive is missing, because naming it would mean already holding it" (Fig 13 :135). Naming an already-available binding, for example "a goal is a comparison" (Operators :51), is provenance from the operator table, not the invention of a new primitive. What remains forbidden is naming the *specific live rule* from a behavior reading, because that is a missing source, not a held atom. Both readings are recorded so neither is lost.

### S3 : Fig 2 versus Fig 11 apparent conflict (DISSOLVED by re-census)

Fig 2 says the anchor must not update; Fig 11 says the habitat updates and valence is relative to the residual. Are these contradictory? **Re-census:** Fig 2 governs what settles a verdict (the ground, which does not update), while Fig 11 governs where actors come from and how their value changes (the habitat, which does update). "The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not" (Fig 11 :73). Different objects. No strain.

### S4 : Negation's price is open (LIVE)

The operators divide by arity: seven binary bonds are priced, negation is unary and "what a unary operator costs is open" (Operators :77-78). Representing "the old rule is false" requires it. A vocabulary without it "can only accumulate" (Operators :58). This is recorded as a live open item in the framework, with a falsifier in F5. It is not treated as a contradiction.

### S5 : The ground for a model is not agreement among modelers (CONFIRMED, not a strain)

It is tempting to treat peer review or replication by the same community as the anchor. Fig 2 :35 and :40 forbid it. The anchor here is the target system's measurement, which does not change because a modeling frame thinks something. Two teams reading the same dataset are one evidence pool (Fig 2 :18-21). The expert-verification arrangement in `08` keeps the checker outside the model's interiors for this reason.

**After re-census: one live open item (S4), three dissolved or narrowed strains (S1 to S3), one confirmed boundary (S5), none hidden.**

---

## 6. Recommendation

1. **Index per agent-slot and per step.** Never report a single population residual as the model's score (F1). Keep the live slot visible with a boundary diff (Fig 1 :14 "boundary diff", :15 "where to look: broken vs novel").
2. **Encode heterogeneity as typed bonds over a shared library, not as opaque types.** Rule is sequence, goal is comparison, information access is subtraction, rule replacement is negation (F2, F5). Store the signature, not the label.
3. **Re-ground at every context shift.** Carry the method and its purchase conditions, not the recording; measure the round-trip gap when compressing a rule into a summary (F3, Fig 4 :30).
4. **Re-enumerate the habitat per residual.** Do not ship a fixed importance list over agents (F4).
5. **Report bits and actions in two columns.** A compact schema and a checkable schema are different claims (F6). Use complexity as a budget filter, never as a witness.
6. **Declare the gap on rule identity.** Report that the representation returns a shape, and that a source-discriminating instrument is owed before any specific rule is named (F7).
7. **Build the missing instrument first.** The binding of rule to slot is the link with no instrument; effort spent above it is effort that cannot arrive (F8, Fig 3 :20).
8. **Send the generator, not the conclusion.** Fig 4 :25 "A recording carried upward looks like knowledge and is a description of one occasion." Lead with the refuter and the shape; offer the links after a verdict is recorded.

---

## 7. Canonical usage check

Two local canonical sources were read after the first four sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw", and the canonical limit, the framework says "what a missing thing would have to look like (a shape, not a name)", then "stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest." "Indiscernibility is not identity."
- `THE_FORMULA.md`: the eight-step loop and the mode rule. Step 7 separates SEARCHED, INWARD and OUTWARD; step 5 states "the ground settles it. Verified only by what pays. A gate is not the ground." The Direction section requires the sought-for shape to be bound as an ordinary term, which §0 does.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| F1 "pooling is an approximation" | **Narrowed to a disqualification.** Fig 1 :19/:22/:28 and the Symbols slot definition leave no coarser reading. Figure-grounded, not a preference. |
| F2 "type IDs are wrong" | **Confirmed and sharpened.** The defect is the missing bond, not the missing label; two names for one frame (Fig 8 :15). |
| S1 six terms as agent types | **Retracted and preserved.** Re-census assigns Fig 13 to structural roles, Fig 12 to bonds. |
| S2 shape-not-a-name forbids all naming | **Narrowed and preserved.** It governs missing primitives; naming held bindings is provenance. |
| F7 treated as "unknowable" | **Corrected to unreachable-at-this-budget.** Fig 6 separates depth from genuine absence; underivable in principle is not claimed. |
| "more modelers would settle it" | **Refused canonically.** Fig 2 :35/:40, Fig 7 :35, Fig 10 :42. |
| S3 Fig 2 versus Fig 11 | **Not strained.** Ground versus habitat, different objects (Fig 11 :73). |

### Search discipline, kept distinct

- **SEARCHED:** is a rule-identification primitive already inside the modeling framework? The operator set has no such operator. The nearest thing, `¬`, refuses a rule but does not identify its source. Answer: not found; closure unchanged.
- **INWARD:** refine the instrument from one already returning something. The live slot residual (Fig 1 :19) and the boundary diff (Fig 1 :14-15) are already returning a signal. Sharpen those into a per-slot rule-binding probe rather than inventing a new sensor.
- **OUTWARD:** find a frame whose closure predicts the shape of "rule differs by slot and context". Read: POMDP belief-state policies, ODD protocol design concepts, animal behavioural reaction norms, concept-drift detection. These are imports with provenance and a shadow test; they explain the shape but add no new primitive to the framework (Fig 6 :25 "An import adds no atom to the world.").

The three answers are not read against one another (Fig 6 :31 "Neither answer tells you much about the other. Run them as two tracks, and never read one against the other.").

### Updated verdict

The shape survives: per-slot indexing; typed bonds for rule, goal, information and refusal; method-not-recording across context shifts; re-enumerated habitat; two currencies held apart; and an honest `gap` on the identity of the live rule. What does not survive is any claim that the figures return a specific modeling language, a fixed agent taxonomy, a rule-identification operator, or a pooled score. Strains after re-census: one live (S4, the open price of negation), none hidden.
