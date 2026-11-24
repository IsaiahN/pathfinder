# Figure-grounded audit: BUS-0084, recommendation versus autonomous decision

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, opened 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the business question it reports on. See `05_what_shape_means.md` §8.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`, and the Seat Map field guide were also read. World sources are secondary, opened 2026-11-22, and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o'| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the company's belief about the decision situation, formed from its own history and inherited priors (Symbols table, `b`, `w`).
- **a** is the action the decision selects. In the two options offered, either the AI's Γ produces a candidate that a person acts on, or Γ selects `a` directly and the actuation follows without a human step.
- **Γ(b,a)** is what the AI system's library of data, model and rules predicts will happen.
- **o'** is what actually happens where the decision lands: a customer response, an employee outcome, a clinical outcome, a cash flow, a safety incident, a regulatory finding.
- **s** is the **decision slot**: a recurring decision at a specific point in the company's operation. R is indexed by slot, then by time, never by department and never averaged into a company-wide "AI maturity" score.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"The ground enters as the only metric."** (Fig 1 :23)

The phenomenon to explain is not whether a model is accurate in the abstract. It is **for which slots can Γ select `a` directly and still have R stay small, and for which slots must Γ hand a candidate to a person.** That is a question about the contact between a frame and a ground, indexed per slot. The unit is not "the marketing department" or "HR". A department is a label over a bundle of decision slots with different grounds, so the offered partition is a union, not a partition (Fig 9 :54-57). This is the first substantive finding and it is derived in §3 F1.

State the residual as: *why does the gap between what an AI system predicts a decision will return and what the world actually returns remain small when the system selects the action itself in some slots, and grow when it does so in others?* This is an effect description. It names no department, no "high-risk domain", no "human-in-the-loop" prescription. Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a conjunction of conditions on a slot, each with a nameable anchor, plus an instrument that discriminates a failure of one condition from a failure of another. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in §4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names candidates directly: *"A measurement, an experiment, a counter, a market, a patient outcome."* Fig 2 :30 adds *"you push on it, it is not an anchor."* Model accuracy, user trust, adoption rate and stakeholder satisfaction all move when pushed, so they are instruments at best. Viable anchors are realized outcomes per slot: the payment, the clinical result, the safety record, the regulatory finding. Fig 2 :36 sharpens this: *"An anchor is legitimate when the question is constitutively about it."* This line carries the whole allocation rule and is examined in F2.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a three-place relation: AI library Γ, action a, realized outcome o', indexed by slot s and ordered by time t. It is a sequence rather than a set, so it carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) and a **comparison** bond for "should this be autonomous" (`⋛`, *"a threshold relation between two quantities"*, Operators table :48-51). It is not symmetric: the model and the world are not interchangeable.
- **Symmetry.** "Autonomous" is a threshold on a decision-rights variable, not an absolute property (Fig 12 :87; Fig 2 :39). Reversing the loop, so that the human decides and the AI merely observes, is a different thing, not the same thing renamed.
- **Scale.** Four scales are in view: the single decision slot's step-by-step loop (Fig 4, one-agent panel); the population of slots in a company sharing a model library and *"something that ranks what they produce"* (Fig 4 :5); the time channel across repeated decisions; and the regulatory and social habitat in which the company operates. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21) and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The decision slot loop** (one agent, one scale) | the AI system Γ, the human operator where present, the action | actions and residual reduction | yes: the realized outcome o' on that slot | admitted |
| **D2 The organisational habitat** (population of slots) | managers, workers, processes, incentives, compliance functions | survival, cost, risk, throughput | yes: realized performance and loss, measured per slot | admitted |
| **D3 The ground of each decision** (what settles it) | the external referent: customer, patient, market, machine, regulator | the outcome it returns | yes where a non-updating referent exists: Fig 2 :29-30 | admitted; **conditional on the anchor test passing** |
| **D4 The oversight seat** (across the loop) | the human reviewer, the audit, the regulator | independent check, refusal | yes: the ground, never agreement; *"A verifier that can reconstruct the claim cannot verify it."* (Fig 10 :42) | admitted |
| **X1 "The part of the company" as the unit of analysis** | the org chart, departments | headcount, budget | **no** anchor independent of the slots the department contains; a department is a bundle | not a domain yet; absorbed into D2 as a habitat label |
| **X2 "Trust in AI" as the ground** | users, adopters | stated confidence | **no** anchor independent of realized outcome; trust moves when pushed | not a domain; absorbed into D4 as an instrument at best |
| **X3 "Model accuracy" as the ground** | the model, the benchmark | benchmark score | **no**: frame-internal, *"A frame cannot score itself with a quantity it also produces."* (Fig 1 :27) | not a domain; absorbed into D1 as Γ |

X1, X2 and X3 fail the anchor test and are excluded before any figure line is applied to them. These are structural exclusions, not claims that departments, trust or accuracy are irrelevant. X1 is a habitat label; X2 is a channel reading; X3 is a property of Γ. None can settle a verdict.

### 1.3 Partition or union

D1 and D3 overlap: the ground is contacted inside the decision loop, so their overlap is a compound with its own loop. D2 and D4 overlap: oversight is exercised inside the habitat, so that overlap is a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are:

- **C1 (anchor condition):** the slot has a nameable ground that does not update when the AI's belief pushes on it. If not, autonomy has nothing to range against and the "ground" is internal agreement.
- **C2 (constitution condition):** the question is constitutively about the anchor. For a decision about a person, human judgment is the right anchor; for a checkable computation, an instrument is (Fig 2 :36-38).
- **C3 (valence condition):** the decision is a **verdict** about the world (independence required, correlation disqualifying) or a **convention** coordinating meaning and action (correlation efficient, agreement is the product) (Fig 2 :39-41).
- **C4 (seat condition):** a verifier exists that did not author the decision and cannot reconstruct it (Fig 10 :42).

A slot failing only C1 and a slot failing only C3 are not different degrees of one failure. They are different compounds and need different instruments. The Library of Babel essay states the same stop: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for a decision slot: 1 perception (can Γ read the outcome at all?) -> 2 vocabulary (does Γ have terms for what the situation affords, and can it say what progress would count as?) -> 3 objective (can it state a comparison that counts as getting somewhere?) -> 4 planning (a route under incomplete information) -> 5 learn and carry (name what worked, verify, carry to the next slot).

This order matters for the allocation. A **recommendation** can be useful when the chain breaks at link 3, because the human supplies the objective the model cannot state. **Autonomy** requires links 1 through 4 to be intact and settled, because with no objective link the system selects an action it cannot say counts as progress. Fig 12 :112: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."* A vocabulary holding only ingredients cannot state a goal. Most governance effort lands above the break, where instruments already exist (Fig 3 :29-30), so oversight tends to measure model accuracy (link 1) while the break sits at vocabulary and objective (links 2 and 3).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs the unit of analysis and the disqualification of accuracy scores |
| 2 The Ground | anchor test, constitution rule, verdict/convention valence, independence | **decisive** for the allocation; governs C1, C2, C3 |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs why recommendation tolerates a break autonomy cannot |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs transfer from one slot to a population of slots |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs whether adding AI to a slot mints anything at all |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs what autonomy can add to a slot's reach |
| 7 Room Chain | same closure handed along; fidelity times ground pressure | governs repeated decisions and rubber-stamp oversight |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs independence between the AI and its checker |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; verifier non-access | **decisive** for C4 and for oversight design |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | governs why the model alone cannot settle a slot |
| 12 The Bond | catalyst, cycle, isomer, two currencies that do not add | governs recommendation versus autonomy as different bonds and the cost comparison |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | honest-stop role only; see strain S1 |
| Operators table | ⋛ comparison is a threshold relation; ¬ is a refusal | governs the threshold nature of "autonomous" and the need for a refusal |
| Symbols table | `R` is the aim; the ground is the anchor | governs the residual and anchor definitions |

**Strain test applied during this census.** An early attempt to apply Fig 13's six-term physical substrate directly to "company parts" only fit by calling a department a kind of space and a decision right a kind of energy. That is a strain, so Fig 13 does **not** govern the allocation. Re-census sent Fig 13 to the honest-stop role only (section 6, strain S1). A second early attempt used Fig 2's "anchor" to mean "the AI model", which made :36 contradict :37. Re-census showed the model is a frame, not the anchor (strain S2). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about companies, `grounded` only if settled by a measurement. None is `grounded`.

### F1: The offered partition is a union compound, not a division of the org chart (decisive against the question as asked)

**Mode: `general` with a `specified` consequence for how to answer. Domains all. Status: triangulated (Fig 9 and the Library of Babel essay; the essay is framework-internal so the external witness count is one).**

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

A department contains slot types with different grounds. A single customer-service department may contain a slot where an instrument settles the answer (did the refund post?) and a slot where the question is constitutively about a person (is this complaint resolved fairly?). Those two slots are not two degrees of one "AI readiness" variable. They are different compounds. A single department-wide rule, "this department uses AI for recommendations only" or "this department allows autonomous decisions", clears the region where only one condition holds and leaves the intersections standing.

The Library of Babel essay names the same failure: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually to find their answers and then combine them in a satisfactory way."* Fig 9 :32: *"you get a kind of thing, never the answer itself."*

**Refuter:** a department-wide rule for all its decision slots that survives a documented change of habitat and keeps R small on every slot, with no categorically different residue. If one exists, the union reading is false for that department.

**World bearing (secondary only):** Acemoglu and Restrepo 2019 centre their framework on *"the allocation of tasks to capital and labor, the task content of production"*, not on occupations or departments. That corroborates the per-slot unit, but the paper is in labour economics and carries no information about corporate decision rights, so it is a mechanism analogue, not this ground.

### F2: Autonomy is licensed by the anchor, not by model accuracy (decisive)

**Mode: `specified`. Domains D3, D1. Status: triangulated (Fig 2 :29-30 anchor rule, Fig 2 :36-38 constitution rule, Fig 1 :23 ground as only metric; three distinct clauses with low topical overlap).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."** (Fig 2 :29)
> **"you push on it, it is not an anchor."** (Fig 2 :30)
> **"An anchor is legitimate when the question is constitutively about it."** (Fig 2 :36)
> **"Human judgment is the right anchor for is this a good answer for a person, because the question is about people."** (Fig 2 :37)
> **"It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."** (Fig 2 :37-38)

This is the allocation rule the question is looking for, and it is not a department list. Fig 2 :36-38 draws the line by what the question is **about**. For a decision whose answer is constitutively about a person, that is, where "good" means good for a person, human judgment is the right anchor and the AI is an instrument. Instruments can be wrong on axes they do not measure, so letting the instrument select the action swaps the anchor for a reading. For a decision whose answer is constitutively about something an instrument can settle, a measurement is the legitimate anchor and autonomy is a candidate. The question itself supplies the example: *"is this code correct"*.

Applied as `specified` predictions:

| slot question is constitutively about | legitimate anchor | figure clause | allocation candidate |
|---|---|---|---|
| a person (hiring, discharge, discipline, clinical judgement, complaint fairness) | human judgment | Fig 2 :37 | recommendation; human decides |
| a checkable state of the world (is this invoice arithmetically right, is this route shortest, did the payment post) | a measurement or counter | Fig 2 :29, :38 | autonomy candidate, subject to C3 and C4 |
| a convention (what we shall call this, which template we use, how we coordinate) | agreement itself | Fig 2 :41 | autonomy is cheap, subject to F4 |
| nothing nameable (the "ground" is stakeholder approval) | none | Fig 2 :30 | not a domain yet; `gap`, do not automate |

Accuracy, adoption and trust are explicitly disqualified as the deciding quantity. Fig 1 :26-27: *"coverage, and compression achieved"* and *"predicates minted, and credibility accrued"* are *"frame-internal. A frame cannot score itself with a quantity it also produces."* A benchmark score is a property of Γ, not of Γ's contact with the ground.

**Refuter:** a slot where the "ground" used to justify autonomy moves when the AI's prediction pushes on it (for example, the ground is user satisfaction measured from the same interaction the AI shaped), or a documented case where an instrument was the legitimate anchor for a question constitutively about a person and no human judgment was required. Either fires against F2.

**World bearing:** EU AI Act Article 14 :3 requires oversight measures *"commensurate with the risks, level of autonomy and context of use of the high-risk AI system"*, and :4(b) requires awareness of *"the possible tendency of automatically relying or over-relying on the output produced by a high-risk AI system (automation bias), in particular for high-risk AI systems used to provide information or recommendations for decisions to be taken by natural persons"*. That is a regulatory corroboration of the per-slot, context-dependent allocation, from a completely different evidence pool. It does not decide the figure verdict. Kellogg, Valentine and Christin 2020 classify algorithmic control by six mechanisms, *"restricting and recommending"*, *"recording and rating"*, *"replacing and rewarding"*. Their distinction between recommending and replacing is the organizational-design name for the same split, and it treats the split as a control relation rather than a department property.

### F3: Verdict versus convention decides when correlation disqualifies (decisive for the boundary)

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 2 :39-43 valence rules and Fig 10 :47 convention-seat rule; distinct clauses).**

> **"Correlation has valence."** (Fig 2 :39)
> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)
> **"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"** (Fig 2 :41)
> **"Buy independence in proportion to the cost of being wrong."** (Fig 2 :42)
> **"Guard, from Figure 10: a convention that decides an outcome has stopped being one."** (Fig 2 :43)
> **"a convention that decides an outcome has stopped being one"** (Fig 10 :47)

In a **verdict** slot, the question is whether something is true of the world. Two frames that share an evidence pool are one witness, so their agreement carries no verdict weight. If the AI decides `a` and a human "reviews" by accepting the same output from the same data, the two are one frame wearing two names (Fig 8 :48-49), and the appearance of oversight is a pooled reading. Independence must be bought in proportion to the cost of being wrong (Fig 2 :42): the more consequential the slot, the more the checker must range against the ground separately.

In a **convention** slot, agreement is the product. Choosing a label, a template, a meeting slot or a routing convention does not discover a fact about the world; it coordinates meaning. Here correlation is efficient, not corrupt, and autonomous AI is cheap and legitimate. Fig 2 :43 and Fig 10 :47 are the guard: once a convention decides an outcome, it has stopped being a convention. A formatting convention that silently determines who gets paid has become a verdict stated in convention clothing, and the guard fires.

Explanations that confuse the two are common. A model that predicts "this employee is likely to leave" is making a verdict-like claim about the world. A model that drafts the retention email is executing a convention. The first needs an independent check against an outcome; the second does not, provided the draft does not itself decide whom the company contacts.

**Refuter:** a verdict slot where agreement from a shared pool is demonstrably sufficient to settle the verdict, or a convention that continues to count as a convention after it has decided a consequential outcome for a named person. Either would falsify the valence rule as applied here.

**World bearing:** the algorithm aversion and algorithm appreciation literatures corroborate the mechanism that trust is not a ground. Dietvorst, Simmons and Massey 2015 find that *"people are especially averse to algorithmic forecasters after seeing them perform, even when they see them outperform a human forecaster"*; Logg, Minson and Moore 2019 find that *"lay people adhere more to advice when they think it comes from an algorithm than from a person"* and that *"experienced professionals... relied less on algorithmic advice than lay people did, which hurt their accuracy"*. These two results point in opposite behavioural directions, which is exactly why neither can serve as the anchor. Trust is a channel variable that moves with experience and framing (Fig 2 :30). They are different labs and different tasks, so they are two low-overlap witnesses to instability, not a single pool.

### F4: Capability is a property of the AI-and-slot, so granting autonomy does not make a decision more correct

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 11 and Fig 4, habitat versus membrane, low overlap).**

> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)
> **"it or a thousand. Only the actors, the currency and the anchor change."** (Fig 4 :20)

Granting a model decision rights changes the model's authority, not its contact with the ground. A better model in the same slot, with the same data and the same outcome feedback, may improve accuracy (a property of Γ) without moving R on the slot (a property of Γ-and-ground). The habit of answering "which department is ready for autonomous AI?" by listing model capabilities is an agent-only improvement in Fig 11 :40's sense. The right question is what in the slot's habitat carries the contact: who reads the outcome, how fast it returns, whether it is pooled, what happens when the model is wrong.

Fig 11 :52 warns that contact cascades: *"Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."* In an HR slot, the direct outcome might be an accepted offer; the residual that matters could be three steps out in retention, morale or litigation. Enumerating only the direct contact is how a department-wide rule looks safe and fails later.

**Refuter:** a documented case where an agent-only autonomy grant (same habitat, same outcome channel, no new contact) moved the ground-verified residual on a slot and kept it down across a habitat change. Under Fig 11 :40 that should be impossible; if observed, F4 is false.

### F5: A checker that can reconstruct the decision cannot verify it

**Mode: `specified`. Domain D4. Status: triangulated (Fig 10 and Fig 8, verifier non-access versus provenance; distinct roles).**

> **"A verifier that can reconstruct the claim cannot verify it."** (Fig 10 :42)
> **"Bring a characterised residual, never the source."** (Fig 10 :52)
> **"Frames range against the ground. They do not negotiate with it."** (Fig 2 :45)
> **"Two frames together reach what neither reaches alone."** (Fig 8 :45)

The oversight seat is defined by what it cannot see, not by its title. If the human approver receives the same features, the same model output and the same recommendation, and can reproduce it, the human is not a second frame; the human is a playback of the first. Soundness requires the checker to be unable to produce what it is checking (Fig 10 :42-44). For an autonomy decision this is a design constraint: the checker needs access to the outcome channel and the refusal power, not to a second copy of the model's reasoning. Conversely, giving the checker the full model architecture before asking for a verdict spends the independence that made the check worth having (Fig 10 :52).

Fig 10 :59 makes the stake explicit: *"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."* A manager who wants the cost saving from autonomy has an interest in the outcome; that is unavoidable and must be declared. A manager who wants the auditor to read the model favourably has an interest in the reading; that is disqualifying. Where the stake cannot be removed, declare it.

**Refuter:** an oversight arrangement in which the checker can fully reconstruct the AI's decision and still delivers a ground-verified refutation at a rate statistically indistinguishable from an independent checker. If so, the non-access condition is not needed for this domain.

### F6: Fast failure is channel decay, not a change in what the world pays

**Mode: `specified`. Domain D4. Status: triangulated (Fig 10 channel rule, Fig 7 two-factor rule, Parasuraman and Riley 1997 from human factors; the last is a genuinely low-overlap witness to mechanism shape only).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"stale percepts, dropped transients, saturated metrics, pooled readings"** (Fig 10 :26)
> **"you have lost touch"** (Fig 10 :28)
> **"→ keep the anchor reachable"** (Fig 10 :29)

When an autonomous slot starts failing, the default diagnosis is that the model degraded. Fig 10 names a different failure: the channel to the outcome degraded while the world kept paying someone else. The named modes are stale percepts, dropped transients, saturated metrics and pooled readings. "Pooled readings" is the slot-level version of aggregating across slots, per Fig 1 :22. A single blended decision-quality score hides the slot that is losing contact.

Fig 7 adds the two-factor test:

> **"Progress per handoff has two factors. Zero either and the chain runs in place:"** (Fig 7 :37)
> **"the bracket's fidelity across the handoff"** (Fig 7 :38)
> **"the ground's pressure on the room"** (Fig 7 :39)

A sequence of autonomous decisions is a chain of handoffs. If either the fidelity with which the outcome is carried back or the ground's pressure on the decision goes to zero, the chain runs in place, and it looks like a working system because agreement inside it compounds while evidence does not (Fig 7 :12-13).

Parasuraman and Riley 1997, in *Human Factors*, distinguish misuse (over-reliance leading to failures of monitoring and automation bias), disuse (underutilisation, often from false alarms) and *"automation abuse, or the automation of functions by designers and implementation by managers without due regard for the consequences for human performance"*. That last category is exactly a slot granted autonomy without a channel analysis. It is a low-overlap witness from human factors engineering and corroborates the mechanism, not the corporate fact.

**Refuter:** a slot whose autonomy is withdrawn after outcome fidelity and ground pressure are independently measured as high and non-declining, with no pooled metric in the chain. If both stay high, F6's mechanism is not the cause.

### F7: Never average over slots, departments or business units

**Mode: `general` with a `specified` consequence for governance. Domains all. Status: triangulated (Fig 1 and Fig 9, low overlap).**

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"coverage, and compression achieved"** (Fig 1 :25)
> **"predicates minted, and credibility accrued"** (Fig 1 :26)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

An "AI adoption score" by department is a frame-internal quantity: the company scores itself with a measure the company also produces. It is a legitimate budget filter, since it says where to look first, and it is not a witness for the allocation. The specified consequence: any answer to BUS-0084 that is an average across departments has already thrown away the signal that says which slot is losing contact and where.

**Refuter:** an average department-level statistic that predicts prospectively and per slot which named decision will fail first after an autonomy grant. If one exists, F7's methodological consequence is false.

### F8: Recommendation and autonomy are different bonds, not different amounts of AI

**Mode: `specified`. Domains D1, D3. Status: triangulated (Fig 12 bond definition and Operators table symmetry tests).**

> **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** (Fig 12 :5)
> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** (Fig 12 :117)
> **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."** (Fig 12 :124)

Two slots can use the same model, the same data and the same atoms, and differ only in who selects `a`. Under Fig 12 that is a bond difference, and bond differences are substances, not spellings. A recommendation loop is `model -> candidate -> human -> action -> outcome`; an autonomy loop is `model -> action -> outcome` with the outcome fed back. Same atoms, different arrangement, different behaviour under error. The resource inventory, the model card and the data catalogue record the ingredients, not the bond, so an audit based on them cannot tell the two apart. Fig 12 :94: *"The arrangement is the substance."*

Where the two loops share only a pattern (`perception -> model -> decision`) while differing in which actors occupy the slots, the weaker **functional group** claim holds (Fig 12 :124): the pattern fixes the kind, not the outcome.

**Refuter:** two slots with identical atoms and identical bonds whose ground-verified residuals diverge across a habitat change with no difference in contact or imported atoms. That moves the explanation out of D3 and into habitat alone, and kills the bond reading.

### F9: Description cost and settlement cost are two currencies and do not add

**Mode: `general` with a `specified` governance consequence. Domains D1, D4. Status: triangulated (Fig 12 :125-130, two readings; Fig 9 :60, filter versus witness).**

> **"A composition costs in two currencies, and they do not add."** (Fig 12 :125)
> **"Bits price the description. Actions price finding out whether it holds."** (Fig 12 :126)
> **"They are in different units, so a system holding one accounting cannot compare them and will not notice the shortfall."** (Fig 12 :126-127)
> **"Summing them into one figure is the error this names, not the fix for it."** (Fig 12 :130)

The cost of specifying a slot's decision rule (bits) and the cost of finding out whether autonomy actually keeps R small on that slot (actions, that is, trials, audits, errors, appeals) are in different units. A governance framework that reports a single "AI risk score" is summing two incommensurable readings. The specified consequence: budget can be allocated by the description cost, but the decision to grant autonomy must be paid for by settlement actions against the ground. A beautifully documented autonomy proposal that has never been tried against an outcome has paid in bits and defaulted in actions.

**Refuter:** a single scalar measure that predicts both the specification effort and the ground settlement cost across slot types, with no unit conversion, validated prospectively. If it exists, F9's keep-apart instruction is wrong for this domain.

### F10: The union must be unbundled before a lever is chosen

**Mode: `specified`. Domains all. Status: figure-governed (Fig 9, quoted in F1).**

The four conditions C1 to C4 have different instruments:

- **C1 failure** shows up as an unpinned ground: the "outcome" changes when the AI shapes the input, or no outcome is recorded at all (Fig 2 :30).
- **C2 failure** shows up as an instrument being used as an anchor for a question about a person (Fig 2 :36-38).
- **C3 failure** shows up as pooled agreement in a verdict slot, or as a convention that has silently started deciding outcomes (Fig 2 :39-43).
- **C4 failure** shows up as a checker who can reproduce the decision, a rubber stamp, or an audit fed only the model's own output (Fig 10 :42).

A single lever, for example "put a human in the loop everywhere", clears the region where only C4 holds and leaves the other intersections standing. In a C2 slot the human is genuinely the anchor; in a C1 slot no human can supply a missing ground; in a C3 convention slot the extra human adds cost and manufactures a correlation that was the product. This is why the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

**Refuter:** one intervention that restores all four conditions in all four failure types and leaves no categorically different residue. That would collapse the union into a partition.

### F11: The specific named allocation is a gap, not a hidden answer

**Mode: `general` at the stop. Status: figure-governed, triangulated across Fig 9, Fig 13 and Fig 8.**

> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)
> **"Unreachable is a verdict here, not a silence,"** (Fig 13 :134)
> **"So a search that finds nothing is never a proof of absence."** (Fig 8 :39)
> **"It cannot say which primitive is missing, because naming it would mean already holding it."** (Fig 13 :135)

No figure line names a department, a role or a decision that should be autonomous. After a full census of the thirteen figures, the Operators and Symbols tables and the eight essays, the framework gives the **conditions** a slot must satisfy and refuses to name the slot. The missing thing is a per-slot, source-discriminating instrument: a measurement that distinguishes a protected outcome from a pooled reading from simple luck when all three produce the same dashboard number. The Hard Problem is About Source essay gives the reason: an instrument reading green *"cannot comment on the source"*, and *"The answer is unreached until a better instrument exists."*

This is a `gap` of the shape-not-a-name kind and is reported as a verdict. It is not an invitation to fill the slot with the author's favourite example. Any list of "safe to automate" roles would be a binding from the management frame, provenance owed, and would carry zero evidentiary weight until a source gate and shadow test are supplied (Fig 6 :23, Fig 8 :50-52).

### F12: World evidence, one pool versus several, and the conflict rule

**Mode: `general`. Status: figure-governed.**

The world sources divide into three groups.

1. **Organizational design and AI at work (one pool).** Kellogg, Valentine and Christin 2020 is the substantive source here. It names the recommendation/replacement distinction and treats it as a mechanism of control. It corroborates F1 and F2 at the level of organizational form, but shares the management evidence pool with any strategy answer, so it is one witness.
2. **Human factors and judgement (low overlap).** Parasuraman and Riley 1997 (automation misuse, disuse, abuse), Dietvorst et al. 2015 (algorithm aversion) and Logg et al. 2019 (algorithm appreciation) corroborate F3 and F6: trust and reliance are channel variables, not grounds. The aversion and appreciation findings point in opposite directions, which strengthens the conclusion that neither can anchor a verdict. They are different labs and tasks, so they are not one pool, but they are all psychological mechanisms, so they corroborate mechanism shape rather than corporate fact.
3. **Regulation and labour economics (low overlap).** EU AI Act Article 14 corroborates context-dependent oversight; Acemoglu and Restrepo 2019 corroborates the per-task rather than per-occupation unit. Neither is a figure source and neither flips a verdict.

No world source conflicts with a figure verdict, so the conflict rule was not triggered. The two apparently contradictory trust findings were returned to the census and resolved as two readings of the same channel variable rather than as a conflict about the ground (see section 6, strain S3).

### F13: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per decision slot, never a department average | general | Fig 1 :19, :22 | figure-derived |
| The question is a union of four conditions, not a partition | general | Fig 9 :54, :55, :57 | figure-derived |
| Legitimate autonomy is decided by the anchor and what the question is about, not by model accuracy | specified | Fig 2 :29, :30, :36, :37, :38 | triangulated F2 |
| Verdict slots require independence; convention slots allow correlated agreement | specified | Fig 2 :39, :40, :41, :42, :43 | triangulated F3 |
| Capability is a property of the AI-and-slot, not the AI alone | specified | Fig 11 :39, :40 | triangulated F4 |
| The oversight seat must not be able to reconstruct the decision | specified | Fig 10 :42, :52, :59 | triangulated F5 |
| Fast failure is channel decay, not ground decay | specified | Fig 10 :24, :26, :28; Fig 7 :37-39 | triangulated F6 |
| Never average across slots | general with specified consequence | Fig 1 :23, :27; Fig 9 :60 | figure-derived F7 |
| Recommendation and autonomy are different bonds | specified | Fig 12 :5, :94, :117, :124 | triangulated F8 |
| Description cost and settlement cost do not add | general with specified consequence | Fig 12 :125, :126, :130 | figure-derived F9 |
| Which named slot to automate | not stated | none | gap: framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule from the Seat Map field guide: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A slot's "ground" moves when the AI's prediction pushes on it, yet autonomy on that slot is still justified by that ground (breaks F2, Fig 2 :29-30).
2. A documented case where an instrument is the legitimate anchor for a question constitutively about a person, with no human judgment required (breaks F2, Fig 2 :36-38).
3. A verdict slot where agreement from a shared evidence pool is demonstrably sufficient to settle the verdict (breaks F3, Fig 2 :40).
4. A convention that continues to count as a convention after it has decided a consequential outcome for a named person (breaks F3, Fig 2 :43, Fig 10 :47).
5. An agent-only autonomy grant that moves the ground-verified residual down and keeps it down across a habitat change (breaks F4, Fig 11 :40).
6. A checker that can fully reconstruct the decision and still refutes at the same rate as an independent checker (breaks F5, Fig 10 :42).
7. A single scalar governance score that validly predicts both specification cost and ground settlement cost across slot types, with no unit conversion (breaks F9, Fig 12 :125-130).
8. A single intervention that restores all four conditions in all four failure types and leaves no categorically different residue (breaks F10, Fig 9 :57).
9. Fig 13's six terms are derived from five of them, or Fig 8's idempotence fails inside a closed set (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a per-slot ground measurement has paid for the shape.

---

## 5. Recommendation

1. Stop answering by department. Enumerate decision slots and range each against the four conditions C1 to C4 (F1, F10). A department is a habitat label, not a unit of analysis.
2. Ask what the slot's question is constitutively about before asking how accurate the model is (F2). For questions about people, human judgment is the anchor and the AI is an instrument. For checkable states, a measurement is the anchor and autonomy is a candidate.
3. Classify each slot as verdict or convention before deciding how much independence to buy (F3). Buy independence in proportion to the cost of being wrong, not uniformly.
4. Design the oversight seat by what it cannot see (F5). Give the checker the outcome channel and the refusal power, not a second copy of the model's reasoning. Declare unavoidable stakes.
5. Instrument the channel before diagnosing the model (F6). Check for stale percepts, saturated metrics and pooled readings first.
6. Keep description cost and settlement cost in separate accounts (F9). A documented proposal is not a settled one.
7. Do not name which roles to automate. Report the gap and the missing instrument instead (F11). Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."* Send the generator, the conditions and the refuter, not a department list.
8. Use the world literature as one or two corroborating witnesses and as a budget filter, never as the verdict (F12, Fig 9 :60).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, the Seat Map field guide, and all eight essays opened directly on 2026-11-22.

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish and records the lineage. This governs F11.
- The Recursive Self-Improvement Trap essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*
- They're Scanning Books sharpens F11: *"The real import is not a new term in the existing space. It is a new dimension of the space."* The missing thing here is a source-discriminating instrument, that is, a new axis of measurement, not a new policy sentence.

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Treated "part of the company" as a candidate domain | **Retracted, strain S1** | No anchor independent of the slots it bundles. Re-censed to a habitat label inside D2 (Fig 11 :46 names conditions as habitat elements) |
| Wanted to use model accuracy as the anchor | **Retracted, strain S2** | Accuracy is frame-internal (Fig 1 :25-27). Re-censed to a property of Γ; the anchor is the realized outcome (Fig 2 :29) |
| Read the aversion and appreciation findings as a conflict | **Resolved, strain S3** | Two readings of the same channel variable, not a dispute about the ground. Neither is the anchor. Conflict rule not triggered |
| Attempted to apply Fig 13's six physical terms to decision rights | **Retracted, strain S4** | Only fit by renaming decision rights as kinds of energy. Fig 13 retained for the honest-stop role only |
| Wanted to name "high-risk domain" as the framework's answer | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer. "High-risk" is a regulatory binding from the EU AI Act frame, provenance owed |
| Used EU AI Act Article 14 as a figure line | **Narrowed to corroboration** | It is a world source with a different evidence pool; the figures decide (Fig 2 :45) |
| Read "shape, not a name" as banning all concrete examples | **Narrowed, correction kept visible in `05` §7** | The phrase governs a missing primitive. Naming a slot that is already in Γ is a binding, not the invention of a new primitive; the specific allocation remains a gap at the instrument boundary |
| F1 "decisive" in an early draft | **Kept as decisive against the question as asked, not against the company** | The union finding refuses the partition, not the existence of departments |

**Strains sent to the log:** S1 (department as domain), S2 (accuracy as anchor), S3 (two trust literatures as conflict), S4 (Fig 13 applied to organizational terms). All resolved by re-census. One live strain remains named rather than hidden: the operand type of `⋛` when the comparison is between two decision arrangements now serving as atoms at a second order (the Operators table calls it *"a threshold relation between two quantities"*). Fig 12 :104 permits a settled molecule to become an atom, but whether such an atom counts as a quantity at that level needs an instrument, not an argument. See `06_isomers_and_order.md` Q3. No strain was smoothed over.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54-57 plus the Library of Babel bundle passage: it is a union of four conditions, each with its own instrument.
2. **What is the unit?** The decision slot, indexed by R per slot (Fig 1 :19), not the department (F1).
3. **What is the anchor?** The realized outcome that does not move when the AI's belief pushes on it (Fig 2 :29-30), not accuracy, adoption or trust (F2, F7).
4. **What does the question being about decide?** For a question about a person, human judgment is the anchor and the AI is an instrument; for a checkable state, a measurement is the anchor (Fig 2 :36-38).
5. **When does correlation disqualify?** In verdicts, not in conventions; buy independence in proportion to the cost of being wrong (Fig 2 :39-42). A convention that decides an outcome has stopped being one (Fig 2 :43).
6. **Does granting autonomy change contact?** No. Capability is agent-and-habitat (Fig 11 :39-40); an improvement that does not change contact changes nothing.
7. **What does the checker need?** Non-access to the claim, the outcome channel and the refusal power (Fig 10 :42, :52). Declare unavoidable stakes (Fig 10 :59).
8. **Why does fast failure happen?** Channel decay, not ground decay (Fig 10 :24-28); zero bracket fidelity or ground pressure stops the chain (Fig 7 :37-39).
9. **What is the bond difference?** Same atoms, different arrangement, different substance (Fig 12 :5, :117). Two currencies do not add (Fig 12 :125-130).
10. **What can be said at the stop?** A shape with four conditions, nine refuters and the names of the missing instruments. Not which named slot to automate. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives. **Autonomy is not a property of a department. It is licensed per decision slot by four conditions: a nameable ground that does not update, a question whose anchor is legitimate (human judgment for questions about people, a measurement for checkable states), a verdict-or-convention classification that sets how much independence must be bought, and a checker that cannot reconstruct the decision. Capability lives in the AI-and-slot, so granting decision rights changes authority and not contact. Failure is usually channel decay, not ground decay. Recommendation and autonomy are different bonds over the same atoms, and their description and settlement costs are two currencies that do not add.** The four conditions are kept separate, never averaged. Which named roles to automate is a `gap`, a verdict and not a silence: the missing thing is a per-slot source-discriminating instrument. Mode `specified` throughout, with the structural shape at `general`. No world source flipped a figure verdict; the one apparent conflict between trust literatures was returned to the census and re-mapped to a channel variable. One live strain remains named. The pre-registered refuter has nine failure conditions.
