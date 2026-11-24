# Figure-grounded audit: REA-0022

**Question:** What kinds of reasoning are difficult for current systems because of algorithmic limits rather than insufficient data or computing power?

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* The taxonomy below is a specification of what the figures license; it is not a measured inventory of failures in deployed systems.

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim extract), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, the eight essays, and the world sources in `10_source_ledger.csv`. All figure quotes below were checked against the local extract this session.

---

## 0. The residual, stated in effect terms

A system S with library Γ attempts a reasoning task and fails. The failure has three candidate causes:

| cause | what is missing | what fixes it | figure name |
|---|---|---|---|
| A. algorithmic closure limit | a term not reachable from `atoms(Γ)` without an import, or an operator the library does not hold | import, or a new operator / discipline | underivable in principle |
| B. computing-power limit | nothing; the term is already in `closure(Γ)` but was not found at this budget | more search, more time, more parallel independent searchers | unreachable at this budget |
| C. data / instrument limit | nothing is returning a signal at any resolution; no edge to extend from | an instrument already returning something, or a peer frame that holds the atom | genuine absence / depth |

The question asks for the kinds of reasoning of cause A, not B or C. The first move is therefore a **union, not a partition**. Fig 9 :54 says: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :55 adds that a single lever *"clears the region where only one condition holds and leaves the intersections standing."* Treating "hard reasoning" as one pile and looking for one lever is the named error.

The residual R is not "the system got the wrong answer." It is: **which cause is active here, and is it A?** Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* A tier label, a benchmark score or a parameter count is a filter for the budget, never a verdict on the cause.

---

## 1. Domain census (before choosing any figure line)

R by arity, symmetry and scale:

- **Arity:** three causes, so a union compound of three conditions, not one hard question (Fig 9 :54-58).
- **Symmetry:** asymmetric. The three causes issue different instructions and are not interchangeable (Fig 8 :40-43). More compute fixes B and is priced as a wrong import against A (Fig 8 :42).
- **Scale:** intra-frame (what closes inside Γ), cross-frame (what can be imported from a frame whose closure differs), and cross-scale (what survives the abstraction/concretisation transform).

One line per domain. Actors, currency, anchor. A domain with no nameable anchor is not a domain yet.

| domain | actors | currency | anchor | partition or union | dependency order |
|---|---|---|---|---|---|
| **D1 Formal self-reference** | a formal system F, its proofs, an external checker | derivability, provability | an external metaframe or proof checker (nameable, outside F) | partition: what F can prove about itself versus what needs a stronger system | first: you cannot use a system's self-report to diagnose its own limit |
| **D2 Intra-frame composition** | `atoms(Γ)`, the seven bonds, negation ¬ | reachability (derivations inside `closure(Γ)`) | `closure(Γ)` for reachability; the ground for settlement (both nameable) | union: several kinds share this frame but bind different operators | second: depends on D1 (the frame cannot certify its own completeness) |
| **D3 Cross-scale transform** | the one-agent loop and the population; abstraction T_A, concretisation T_E | methods going up, head starts coming down | the round-trip gap `R_T` and the ground (nameable) | partition: what crosses the membrane and in which direction | third: depends on D2 (only a settled molecule crosses as an atom) |
| **D4 Diagnosis of the cause** | the searcher, instruments, peer frames | search budget and imported atoms | the ground (nameable; agreement is not an anchor) | union: searched / inward / outward are three tracks, not one | runs first in time (Formula step 7 asks SEARCHED first), but logically assumes D1 to D3 |

**Strain test applied at census.** D1's anchor is outside F. That is not a missing anchor: it is the whole point of the finding, and Fig 8 :34 supplies it. D2 has two anchors (reachability and settlement) because Fig 5 :69-72 separates "settled" from "composable"; they are not the same quantity. No domain was admitted on a metaphor.

---

## 2. Figure census (quoted before concluding)

| figure | bearing on algorithmic versus budget/data limits | verdict |
|---|---|---|
| Fig 1 | per-slot residual; frame-internal quantities disqualified | a global score cannot tell you which slot is live |
| Fig 2 | anchor must not update; correlation disqualifies a verdict | a system's own self-assessment is not an anchor |
| Fig 3 | dependency chain; a link with no instrument is not a link that works | diagnosis must start above the break |
| Fig 4 | lossy cross-scale transform, round trip `R_T` | grounds the cross-scale kind |
| Fig 5 | mint pipeline; refuted kind; negation not among the bonds; direction of question invisible | grounds refusal and direction kinds |
| Fig 6 | closure, import, inward and outward instruments, no proto-instrument where nothing registers | the central algorithmic/budget/data separator |
| Fig 7 | no last room; agreement is variation, not a verdict | no terminal taxonomy; keep the union open |
| Fig 8 | idempotent closure; metaframe underivability; budget distinction | decisive for the question as asked |
| Fig 9 | verdict / lookup / narrowing; union unbundling; filters never verdicts | supplies the diagnostic order |
| Fig 10 | verifier must not hold interiors; provenance | governs how the answer may be offered |
| Fig 11 | capability is agent-and-habitat; an agent-only improvement may change nothing | warns against "just scale the agent" as a remedy |
| Fig 12 | bond not recoverable from operands; negation unary; isomers | grounds arrangement and refusal kinds |
| Fig 13 | infinite effort inside a finite reach; unreachable is a verdict | the compact statement of the algorithmic limit |
| Operators table | seven bonds plus negation; a vocabulary without ¬ only accumulates | grounds K2 and K4 |
| Symbols table | `R`, `closure(Γ)`, `R_T`, the ground | notation used throughout |

---

## 3. Findings, one per kind of reasoning

Verdicts are kept per domain and never averaged. Mode is stated on each.

### F1 — Reasoning about your own consistency, your own limit, your own complexity (D1)

**Mode: `specified`, triangulated.** Fig 8 :34:

> **"A frame cannot reach its own metaframe. Godel’s second theorem: a consistent system cannot prove its own consistency. Tarski: truth for a language is not definable within that language."**

Fig 8 :37:

> **"A frame cannot certify its own limit. Chaitin: beyond a fixed constant, no system proves that any object exceeds its own complexity."**

Fig 8 :44: *"Godel 1931; Tarski 1936; Chaitin 1974."* Fig 8 :56: *"Rules 1 to 3 are proved theorems."*

These are not empirical observations about today's hardware or training runs. They are proved barriers on what any consistent formal system can derive about itself. Adding data or compute to F does not change the theorem, because the limit is in the closure, not in the search. The world sources corroborate: the SEP entry on Gödel states *"the consistency of F cannot be proved in F itself"* (Raatikainen 2025), and the Kolmogorov complexity article states that *"the fact that a specific string is complex cannot be formally proven, if the complexity of the string is above a certain threshold."*

**Strain declared, not hidden:** the three results share a diagonal method, so by Fig 2 :40 (*"agreement about the world is worthless when the agreeing frames share an evidence pool"*) they are one mathematical pool with three faces, not three independent witnesses. The verdict is triangulated across the figure statement and the two distinct world statements (consistency and complexity are different quantities), not across three "independent proofs."

**Refuter:** show a consistent system deriving its own consistency or certifying a complexity above the Chaitin bound in its own terms. Until then, F1 stands.

### F2 — Refusing a held claim (negation, correction, retraction) (D2)

**Mode: `specified`, triangulated.** Fig 12 :140:

> **"A vocabulary that cannot refuse can only accumulate."**

Operators table :58: *"a refutation is a negation, which is why a vocabulary without it can only accumulate"*. Operators table :73-74: *"A vocabulary with − and without ¬ can say what is missing from an arrangement and cannot say that an arrangement is wrong, so it can only ever accumulate."* Fig 5 :56: *"Requires an operator for negation, which the seven bonds do not contain."*

Subtraction is absence of an operand; negation is refusal of a claim. A system can hold all the data in the world and still be unable to say "this thing I hold is false" if the unary operator is absent. Fig 5 :50-53 names the fifth gap: *"refuted: a term we hold is wrong; a term is owed that says so."* More of the same data increases the accumulation; it does not add the operator.

World corroboration: the SEP entry on Negation (Horn and Wansing 2025) treats negation as *"a unary connective"* and notes it is *"in the first place a phenomenon of semantic opposition"*, a capability distinct from merely adding content. Fig 2 :40 applies: this is a corroboration from a different field (linguistics and philosophical logic), low overlap with the framework's authors.

**Refuter:** exhibit a system with no negation operator that, given only more data and more compute of the same kind, refuses a held term rather than merely accumulating another term that coexists with it.

### F3 — Reaching outside your own closure (import-requiring reasoning) (D2)

**Mode: `specified`, triangulated.** Fig 8 :32:

> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."**

Fig 6 :21: *"MINT composes inside the closure and can never add an atom."* Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* Fig 13 :117-118: *"a frame can search without end and still not arrive: infinite effort inside a finite reach."*

The phrase **"no search, however long"** is the exact sense of "algorithmic, not computing power." The missing thing is an atom, and only import moves the wall. The remedy is to characterise the residual in effect terms and find a frame whose closure predicts its shape (Fig 9 :27-28: *"describe it before you go looking, or any frame you pick will seem to fit"*).

**The boundary that matters here.** Fig 8 :40-43:

> **"Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions. Underivable: go outside."**
> **"Unreachable-at-budget: the term is already in the closure and was not found, so the remedy is more search, not another atom."**

Importing against a budget limit *"adds an atom that was not needed"* (Fig 8 :42) and Fig 6 prices a wrong atom above starting from primitives. So the taxonomy has a cost if you confuse its kinds: you pay for an unnecessary import and degrade independence.

World corroboration: the no-free-lunch result (Wolpert and Macready 1997, as summarised on Wikipedia) states that *"any two optimization algorithms are equivalent when their performance is averaged across all possible problems"* and that an algorithm that performs well on one class *"necessarily pays for that with degraded performance on the set of all remaining problems."* That is the same structural point in the optimization field: no amount of running an algorithm adds a universal prior where none was assumed.

**Refuter:** show composition inside a closed set adding a new atom without import, or show an import-free speedup fixing a case the figures classify as underivable. The former would refute closure's definition; the latter would collapse A into B.

### F4 — Recovering arrangement from ingredients (structural, isomer reasoning) (D2)

**Mode: `specified`, triangulated.** Fig 12 :5:

> **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**

Fig 12 :94: *"The arrangement is the substance."* Fig 12 :111: *"A vocabulary without bonds can name a state and cannot name a route to one."* Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* Operators table :4-5: *"The bond carries information the operands do not, so a term that names only its ingredients has recorded half of itself. Which one holds is not recoverable from the operands."*

If the recording kept ingredients and dropped the bond, no amount of computation over the recording recovers which substance was meant. The information is not in the data; it was never recorded. This is an algorithmic limit of the representation, not a data volume or compute limit. It is why a plan, a goal, progress and a refutation need four different operators (sequence, comparison, subtraction, negation) rather than a bag of nouns.

World corroboration: chemistry's isomerism (Wikipedia, "Isomer") states that *"Structural isomers have the same number of atoms of each element (hence the same molecular formula), but the atoms are connected in distinct ways."* The article records that Wöhler's silver cyanate had an elemental composition *"identical to silver fulminate"* with distinct properties, which is the historical case the figure itself cites (Fig 12 :97-98). Low overlap: chemistry, not AI or the framework's essays.

**Refuter:** show the bond fully recoverable from the operand set alone, so that two different arrangements with identical ingredients predict identical behaviour in every test.

### F5 — Inverting a lossy cross-scale transform, and checking your own question's direction (D3)

**Mode: `specified`, single-source for the framework mechanism, corroborated externally.** Fig 4 :27:

> **"The transform between scales loses information, and that is the point."**

Fig 4 :28-29: *"Going up throws away detail; that is what makes the result reapplicable. But it means the trip is not reversible, and something carried up and brought back down will not match what was sent."* Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

Reasoning from a compressed abstraction back to a specific instance is not invertible. The missing detail is not "more data": it was deliberately discarded to make the abstraction reusable. The honest response is to measure `R_T` rather than assume it zero. The same structural blindness appears inside the loop: Fig 5 :63 says *"Every check above runs on the MECHANISM and none runs on the DIRECTION OF THE QUESTION"*, and Fig 5 :65-66 prescribes the remedy: *"make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else."*

World corroboration: abstract interpretation (Cousot and Cousot 1977, as summarised on Wikipedia) defines an abstraction function α and concretisation function γ and states that *"In general, there is a compromise to be made between the precision of the analysis and its decidability (computability), or tractability (computational cost)."* This is the same lossy round trip in program analysis. Field: computer science, distinct from the framework's essays.

**Refuter:** exhibit a transform for which `R_T = 0` for every input, or show a loop that checks the direction of its own question without first binding the sought-for shape as an ordinary term.

### F6 — What is NOT an algorithmic limit (the boundary findings) (D4)

**Mode: `specified`, triangulated.** These are the exclusions that keep the taxonomy honest.

- **Compute, not algorithm:** unreachable-at-budget. Fig 8 :42: *"Unreachable-at-budget: the term is already in the closure and was not found, so the remedy is more search, not another atom."* Fig 6 :49-50 names the third question: *"more search at the same reach: is it in here and unfound?"*
- **Data/instrument, not algorithm:** Fig 6 :34: *"The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."* Fig 6 :40: *"What is unavailable is a sensor for something that has never registered anywhere, at any resolution. That is the whole of it."* Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*
- **You cannot always tell from inside:** Fig 6 :27: *"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."* So F6 is a verdict about method, not a claim that diagnosis is easy. Fig 13 :134: *"Unreachable is a verdict here, not a silence"* applies to each cause separately.

**Refuter:** show that a case the figures call underivable is fixed by budget alone, or that a case where nothing registers is fixed by more composition alone. Either would collapse the three-way split.

---

## 4. Pre-registered refuter (written before the conclusion)

Required by the discipline quoted in the exemplar: *"a falsifier written before the run is a design instrument, not only an honesty device."*

The answer (five kinds, three causes) is refuted if any of the following holds:

1. A consistent system proves its own consistency, or certifies its own complexity beyond the fixed bound, in its own terms (kills F1).
2. A system with no unary negation operator refuses a held claim using only more data and compute of the same kind (kills F2).
3. Composition inside `closure(Γ)` adds an atom without import, or an import-free speedup fixes a case marked underivable (kills F3).
4. Bond and arrangement are fully recoverable from operand sets alone, with identical behaviour for every rearrangement (kills F4).
5. A cross-scale transform has `R_T = 0` for all x, or a loop checks its own question's direction without binding the shape (kills F5).
6. **Ground-facing:** a concrete failure in a named current system, diagnosed as algorithmic by this taxonomy, is removed by more data or more compute alone with no change of frame, operator or instrument (kills the whole application to current systems).

Items 1 to 5 mostly test the figures themselves. Item 6 is the one that needs a real system and a ground. Until it is run, no claim about a named product is `grounded`.

---

## 5. Recommendation

1. Present the answer as a taxonomy of **causes**, not a leaderboard of hard tasks. Lead with Fig 8 :40-43.
2. Keep verdicts per domain. Do not average D1 to D4 or average F1 to F6.
3. Run the diagnostic in the order the formula fixes: SEARCHED first, then INWARD, then OUTWARD. `THE_FORMULA.md` step 7 says SEARCHED is *"Asked FIRST — it is cheapest and the other two assume its answer."*
4. Refuse to spend a compute budget on a case that may be underivable; refuse to import against a budget limit. Fig 9 :60: filters are for the budget, witnesses for the verdict.
5. Lead outreach with the residual and the refuter, not with the taxonomy as a finished theory. Fig 10 :52: *"Bring a characterised residual, never the source."*

---

## 6. Canonical usage check

Two sources read after sections 0 to 5 govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments cannot distinguish and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` (WATSON 60): the figures are metalaws for design questions; the seat reads the ground and does not ask the anchor to decide what the figures already settle.

### Retractions and confirmations

| earlier reading in this run | status after the canonical check |
|---|---|
| "current systems are limited because they are small or undertrained" | **Retracted.** That is cause B or C, which Fig 8 :40-43 and Fig 6 :34 separate from A. It cannot answer the question as asked. |
| "algorithmic limit = any hard reasoning problem" | **Narrowed.** Hardness in general is not an algorithmic limit. Only closure, missing operators, missing bonds and lossy transforms qualify. |
| "Gödel, Tarski and Chaitin are three independent witnesses" | **Narrowed.** They share a diagonal method, so by Fig 2 :40 they are one pool with three faces. The world statements about consistency and complexity are different quantities, which is what makes the corroboration weak but real. |
| "the answer can name which current system fails for which reason" | **Refused.** That needs a ground reading of that system. The figures return a shape, not a name. |
| "import is the remedy for all algorithmic limits" | **Narrowed.** Import moves the wall (Fig 6 :14), but F2 needs an operator, F4 needs a bond recording, F5 needs a measured `R_T`, and F1 needs an external metaframe. Import is not a universal repair. |
| "the three causes can be told apart from inside the frame" | **Refused.** Fig 6 :27 says depth and absence look the same from inside. The diagnostic is a procedure, not an oracle. |
| Fig 6 inward/outward versus Fig 9 searched/inward/outward | **Not strained.** Re-census: Fig 6 treats two instruments; Fig 6 :48-54 and Formula step 7 add the third question (more search at the same reach). Different questions, same closure. |

### Strain after re-census

One live strain, named: applying the word **import** to a failure that is actually a budget failure adds an atom that was not needed (Fig 8 :42). This is not a contradiction between figures; it is a cost warning. A second, softer strain: the figures call the metaframe results *"proved theorems"* (Fig 8 :56) while the triangulation claim is explicitly *"not tested forward"* (Fig 8 :56). The F1 verdict is therefore proof-grounded, not prediction-grounded, and is labelled as such.

---

## 7. Updated verdict

The question has an answer at the level of **kinds**, not at the level of named systems. Five kinds of reasoning are limited by the frame's structure rather than by data or compute: reasoning about your own consistency, limit and complexity (F1); refusing a held claim (F2); reaching outside your closure (F3); recovering arrangement from ingredients (F4); and inverting a lossy cross-scale transform or checking your own question's direction (F5). A sixth finding (F6) marks what is explicitly not algorithmic: unreachable-at-budget and never-registered. The three causes are a union compound, not a single hard problem, and from inside a frame they can look alike. The diagnostic order searched, inward, outward is the only honest way to tell them apart, and `R_T` must be measured rather than assumed.

Mode: `specified`, ungrounded, candidate. Nothing here is settled by an instrument, and no current system has been diagnosed.
