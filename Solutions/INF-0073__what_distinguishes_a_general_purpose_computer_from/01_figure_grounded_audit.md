# Figure-grounded audit: what distinguishes a general-purpose computer from interpretation-only imitation

**Mode of this document: `specified` on the substantive findings, `general` on the structural separator, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." This document states what would have to be measured.

**Status of this derivation: a simulation, not a ground reading.** Recursive Self-Improvement Trap: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text with line numbers, read fresh this session), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, and the eight essays. World sources are listed in `10_source_ledger.csv`.

Citations use the form `Fig N :line` against the local extract. A quote is used only when it is an exact substring of that extract.

---

## 0. The residual in effect terms

The question asks for a **separator**. Given a physical system S and a claim "S computes f," what would have to be true of S for the claim to hold in virtue of S rather than in virtue of a mapping an observer chooses?

State the two options by their consequences, not by their names.

- **Option A, interpretation suffices.** If computation is a mapping from physical states to formal states such that formal transitions mirror physical transitions, then an open noncyclical system implements every finite automaton. Chalmers 1996 reconstructs exactly this result from Putnam and shows why the mapping alone is too cheap. Consequence: "general-purpose computer" has the same extension as "physical system under some description." The predicate cannot fail, so it cannot be used to pick out a machine, allocate trust, or design an instrument.
- **Option B, generated and ground-settled.** A general-purpose computer has a fixed kernel and a variable program; the program is data the machine can read, so the same hardware generates many functions; and whatever it generates is checkable against a ground that does not move when an observer changes the description. Consequence: the predicate has bite. It excludes a lookup table that merely lists outputs, a wind-up toy that follows one path, and a rock under an imposed mapping.

The residual R is the unassigned difference between these consequences, indexed per system-slot (Fig 1 :19: "The residual is indexed by object slot, not aggregated."). It is not a single global number. A device can be programmable and ungrounded, or ground-settled and fixed-function; those are different slots with different verdicts, and averaging them is how the signal disappears (Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average.").

What an answer would look like is bound now, before the derivation, as an ordinary term so that it can be refused like anything else (Formula step "Direction"). The sought-for shape is: **a conjunction of conditions that a generator satisfies and an interpretation-only imitation fails, each tied to a figure line and a refuter, with no claim to a universal classifier.** If the derivation cannot produce that, the shape claim is refused rather than softened.

---

## 1. Domain census, before choosing any figure line

Describe R by arity, symmetry and scale, then one line per domain with actors, currency and anchor. A domain with no nameable anchor is not a domain that can settle anything; it is a frame.

**R by arity, symmetry, scale.**

- Arity: two conditions. Universality (a closed primitive set with unbounded arrangements) and ground settlement (outputs fixed by something that does not update on the observer). Two conditions make a **union compound**, not a partition with one crisp boundary (Fig 9 :54-58).
- Symmetry: "general-purpose" is ordered. A program is a sequence and a machine table is a route (Fig 12 :111: "A vocabulary without bonds can name a state and cannot name a route to one."). The interpretation imposed by an observer is symmetric, an identity claim, two names for one referent (Operators :24: "identity" and :25: "two names, one referent"). The two are not the same kind of relation.
- Scale: the computation runs inside the system's loop at its own scale; the interpretation is imported from the observer's frame across a scale membrane (Fig 4 :19-20). A verdict about the former cannot be handed to the latter without measuring the round-trip gap (Fig 4 :30).

**Domain 1, the system's internal loop.** Actors: states, transition rules, instruction set, program stored as data. Currency: generated outputs, measured as a residual against the function the program claims to compute. Anchor: the actual output on a run and under counterfactual inputs, which can be checked. One line verdict: this domain can bear a ground because it produces something that can fail independently of what an observer says.

**Domain 2, the observer's frame.** Actors: the interpreter and the state-to-formal-state mapping. Currency: an interpretation, an identity claim. Anchor: **none nameable.** The mapping updates on what the observer chooses; if a map is changed to fit, nothing in the frame resists (Fig 2 :13-15: "no anchor; each updates on the others" and "they converge, and what they converge on is whoever had the most influence"). Under Fig 2 :29, an anchor is "whatever settles the question and does not change its answer because of what any frame thinks." A chosen interpretation fails that test by definition. One line verdict: this is a frame, not a ground-bearing domain. It cannot settle the question.

**Domain 3, the verification seat.** Actors: tasks, a task battery, counterfactual inputs, measurement instruments. Currency: checkable outputs across many programs. Anchor: the ground, which does not decay and does not update (Fig 10 :24: "the ground does not decay, the channel does"). One line verdict: this is where "is it computing" is settled, and it is settled per system-slot, not by agreement among interpreters.

**Partition or union.** Union, not partition. The two conditions overlap: a universal machine that is never checked against anything is a generator with no settled outputs, and a fixed-function circuit whose outputs are perfectly reproducible is ground-settled but not programmable. One lever clears the region where only one condition holds and leaves the intersection standing (Fig 9 :55-57). Verdicts are kept per domain and never averaged.

**Order by dependency (Fig 3 :20).** Perception: can the system's states be read at all? Vocabulary: does it have terms for routes and programs, or only for states (Fig 12 :111)? Objective: can it say what would count as computing in its own terms? Planning: can it choose a route? The middle link, vocabulary plus objective, is the one with no instrument and the one where interpretation-only systems break (Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."). A verdict taken below that break is not a weak verdict. "It is a reading of nothing" (Fig 3 :23).

---

## 2. Figure census before concluding

| figure | bearing on the residual | verdict after strain test |
|---|---|---|
| Fig 1 | residual indexed per slot; ground is the only metric | governs how verdicts are divided, not which system wins |
| Fig 2 | anchor must not update on what a frame thinks | governs the interpretation domain: no nameable anchor, so no verdict there |
| Fig 3 | dependency order, broken middle link | governs where an interpreted system fails: vocabulary and objective |
| Fig 4 | kernel invariant across size; methods cross, recordings do not | governs the generator versus recording distinction |
| Fig 5 | MDL bargain; one-occasion explanation fails | governs the program versus lookup-table contrast |
| Fig 6 | import moves the wall; source gate and shadow test | governs the observer's mapping as an unsourced import |
| Fig 7 | agreement compounds, evidence does not | governs why many interpreters cannot corroborate |
| Fig 8 | convergent derivation versus adopted import; residual first | governs provenance as the whole difference between trace and structure |
| Fig 9 | union versus partition; describe before looking; shape not name | governs the two-condition union and the withheld classifier |
| Fig 10 | ground maintainer; verifier non-access; declare stakes | governs the verification seat and the two-stage offer |
| Fig 11 | capability is agent-and-habitat; harness proves wiring | governs the substituted habitat of an interpreted system |
| Fig 12 | bonds carry the route; isomers; two currencies | governs program as route, lookup table as flat formula |
| Fig 13 | closed set, unbounded arrangements; unreachable is a verdict | governs universality and the declared gap on classification |
| Operators table | identity is symmetric; negation is unary and refuses | governs interpretation as identity and the refusal of "everything computes" |
| Symbols table | R is the aim and always a slice; ground is the anchor | governs what is owed when a state cannot be perceived |

Strain test applied throughout: a line that only fits with a force is reassigned to another quantity and the census is redone. The physical six-term set of Fig 13 is not an instruction set; Fig 13 is used only for the substrate-agnostic claim that a set is closed while its arrangements are unbounded. Recorded as strain S1 in section 7.

---

## 3. Findings

Each finding quotes the figure line verbatim before it concludes, states its mode, and carries its own refuter and triangulation status.

### F1 — The residual is a union of two conditions, one of which has no ground (decisive for the shape)

Fig 9 :54: "When the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :57: "A case in two conditions is not a harder case of either." Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."

The question bundles universality with ground settlement. A chosen interpretation belongs to Domain 2 and has no anchor (Fig 2 :13-15). A generated output belongs to Domains 1 and 3 and has an anchor. Collapsing them into one property lets the unanchored condition borrow the standing of the anchored one, which is exactly the move that makes "every system computes" look like a result.

- Refuter: show that universality and ground settlement are one condition, so that a single instrument decides both and the union collapses to a partition.
- Mode: `general` (structural). Triangulated: Fig 9 (union split) plus Fig 2 (anchor test), low overlap.

### F2 — Universality is a closed primitive set with unbounded arrangements

Fig 13 :115: "The set is closed. The arrangements are not. That gap is why import exists." Fig 13 :116: "Six members, and no amount of arranging produces a seventh: a new member would have to be a new kind, and composition only ever rearranges the kinds already held." Fig 13 :118: "So a frame can search without end and still not arrive: infinite effort inside a finite reach."

A general-purpose computer has a fixed, finite instruction set (the closed set) and an unbounded space of programs over it (the arrangements). This is exactly what Turing universality gives: a universal machine interprets the description of any other machine, and program and behavior are interchangeable on one tape. The system that imitates a computation only under a chosen interpretation has a fixed arrangement. Its variety lives in the observer's description, not in the system's reach, so it is in the position of Fig 13 :118: infinite descriptions, finite reach.

Fig 12 :111 supplies the mechanism: "A vocabulary without bonds can name a state and cannot name a route to one." A lookup table names states; a program names a route. The bond is the difference.

- Refuter: exhibit a system with a fixed, non-programmable arrangement that nonetheless generates the full range of a universal machine's outputs across arbitrary inputs without any interpreter importing the mapping.
- Mode: `specified`, triangulated (Fig 13 plus Fig 12 plus SEP Turing Machines and Wikipedia UTM, mathematics pool).

### F3 — A general-purpose computer is a generator; an interpretation-only imitation is a recording of one occasion

Fig 4 :19-20: "The kernel is the part that does not change with size: the same loop and the same rule for naming what worked, whether one agent is running it or a thousand. Only the actors, the currency and the anchor change." Fig 4 :22: "Only methods cross up. Only head starts come down." Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion."

Formula step 6 puts the same distinction compactly: "generators cross up, playback never does." A general-purpose computer keeps the kernel and varies the program; the method is reapplicable, so the same hardware yields a new computation. An interpretation-only imitation is a playback of one trace under one description. Chalmers 1996 names the defect precisely: Putnam's construction ensures only that "a particular trace of the FSA" is reflected in the system's behavior, not the structure of the automaton. Fig 5 :43-44 closes the bargain: "A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."

- Refuter: show that a single fixed trace, with no program and no counterfactual variation, streams a new correct output for every new input without an imported mapping.
- Mode: `specified`, triangulated (Fig 4 plus Formula step 6 plus Fig 5, with Chalmers 1996 as a low-overlap world corroborator).

### F4 — The anchor for "is it computing" must not move when the interpretation changes

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 1 :23: "The ground enters as the only metric." Symbols :104: "Whatever settles the question and does not change its answer because of what any frame thinks. It is not a frame and has no vantage to update from."

If the answer to "is S computing f" flips when the observer changes the mapping, the observer's mapping is doing the settling. It is therefore a frame, not the ground. A general-purpose computer's outputs settle across many programs against an instrument that does not consult the observer's description. Chalmers's "strong conditionals" are the same requirement in the philosophy of computation: if the system were in state p it would transition to q however it came to be in p, not just on this one run.

- Refuter: produce an observer-independent instrument that returns a stable compute or not-compute verdict for the same system and function under two different interpretations. That would supply the missing anchor and would reverse the current verdict.
- Mode: `specified`, triangulated (Fig 2 plus Fig 1 plus Symbols table, low overlap between anchor test and metric rule).

### F5 — A chosen interpretation is an adopted import with no source gate or shadow test

Fig 6 :12: "source gate: provenance." Fig 6 :13: "shadow test: explains a gap." Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Fig 8 :51: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."

A rock mapped onto a finite automaton and a CPU running the same automaton look identical at the level of the trace. What separates them is the record: did the structure arise by convergent derivation inside the system, or was it imported by adopting the observer's frame? Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit." Start from the interpretation and every system computes. Start from the effect, the generated output under counterfactual input, and most systems do not.

This finding is also the reason a general-purpose computer can be said to implement a program without the observer's mapping being arbitrary: the mapping is fixed by the machine table and the program-as-data, which are internal, not chosen ad hoc per run.

- Refuter: show that the observer's mapping has a source gate and a shadow test in the same sense as a legitimate import from a differing frame, that is, that it explains a gap in the system's own behavior and carries provenance inside the system.
- Mode: `specified`, single-source on the figure side for the import mechanism (Fig 8), triangulated with Fig 6 and with Chalmers 1996 and Rescorla 2016 on the description-relative character of the mapping.

### F6 — Capability belongs to the machine and its habitat; a substituted habitat proves wiring only

Fig 11 :39: "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone." Fig 11 :40: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves." Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."

A general-purpose computer's capability includes its habitat: memory, a program channel, input and output, a clock. An interpreted rock has no such habitat in itself; the interpreter supplies the clock and the state partition from outside. That is habitat substitution, not removal (Fig 11 :66: "Isolation is not removal of the habitat. It is substitution of one habitat for another."). The apparent computation proves that the observer's harness is wired correctly, not that the system has the capability. A useful engineering version of the same point is the application-specific integrated circuit: customized for one use and not reprogrammable, versus a field-programmable gate array whose programmable logic blocks let the same device serve many applications. The general-purpose machine carries its reconfigurability in its habitat.

- Refuter: move the ground by changing only the observer's description and show the system's capability changes with it. That would refute the agent-and-habitat claim for this case.
- Mode: `specified`, triangulated (Fig 11 plus Fig 4 kernel plus the engineering source on ASIC and FPGA, a genuinely low-overlap field).

### F7 — The two currencies of a computation do not add

Fig 12 :125: "A composition costs in two currencies, and they do not add." Fig 12 :126: "Bits price the description. Actions price finding out whether it holds. They are in different units, so a system holding one accounting cannot compare them and will not notice the shortfall." Fig 12 :129: "A long chain of cheap parts is expensive to describe and may cost one action to refute. A short arrangement over a costly operand is cheap to state and may take a whole budget to settle."

A universal program is cheap to state and expensive to settle: the program is a short string, but proving what it does on all inputs can consume a whole budget. A giant lookup table is expensive to state and cheap to settle: each case is read off directly. Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." A runtime or a description length is a budget filter, not the separator. Both readings are kept apart.

- Refuter: exhibit a case where a single scalar (bits or actions alone) decides the separator in both directions, so the two-currency rule is not needed.
- Mode: `general`, triangulated (Fig 12 plus Fig 9).

### F8 — No figure line returns a universal classifier: this is a gap, not a silence

Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 13 :133: "A system with a closure can answer that before it searches, and what it returns is a shape rather than a name." Fig 13 :134: "Unreachable is a verdict here, not a silence." Fig 13 :135: "It cannot say which primitive is missing, because naming it would mean already holding it." Fig 8 :39: "So a search that finds nothing is never a proof of absence."

The figures return the shape of the separator: a generator kernel, a closed set with unbounded arrangements, a non-updating ground, a method rather than a recording. They do not return a decision procedure that, for an arbitrary physical system, prints general-purpose computer or not. That requires a source-discriminating instrument for the implementation relation, which is owed and not in hand. Report this as a declared `gap` of the shape-not-a-name kind, not as an omission and not as an invitation to invent a checklist.

Correction kept visible: the canonical phrase "a shape, not a name" governs a **missing** primitive (see `05` section 5b). Here no primitive is missing from the six-term set; the separator is made of loop and ground properties already held. Naming the *properties* is therefore a binding, not a forbidden invention. What cannot be named is *which physical systems* compute, because that needs the ground.

- Refuter: supply an observer-independent instrument that classifies arbitrary systems across interpretations. The gap would close and this finding would be withdrawn.
- Mode: `general` on the limit, `specified` on the claim that no figure line governs classification. Single-source on the figure side (Fig 9 and Fig 13), corroborated by Rescorla 2016 on the absence of a reductive definition.

### F9 — "Everything computes" is a REFUTED term, not a novel one

Formula step 2: "REFUTED a term held is false; what is owed is a refusal, not an explanation." Operators :58: "a refutation is a negation, which is why a vocabulary without it can only accumulate."

The ordinary term "computation" is held by the interpreter and generating a prediction: given this mapping, the system computes f. The persistent, non-trending residual is that the same mapping fits every system equally well, so the term predicts nothing discriminating. Formula step 2 routes that to REFUTED. The correct move is to add a refusal (the interpretation-only case is refused the standing to count as computation) rather than to mint a new theory of computation. A refusal adds to the record and lowers the reach (Fig 6 :42-43: "What is recorded only grows. What is reachable is derived, and it can fall. A refutation adds a term that refuses; it removes nothing, and the reach falls because something was added rather than because anything was deleted.").

- Refuter: show that the mapping does discriminate, by predicting which systems will fail a task before the task is run.
- Mode: `specified`, single-source on the formula step, triangulated with Operators :58.

### F10 — Provenance is the whole difference between a derived machine and an imposed one

Fig 8 :45: "Two frames together reach what neither reaches alone." Fig 8 :50: "But shared atoms are not the signature. Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence." Fig 10 :62: "A ruling carries provenance like an atom."

Two systems that produce the same input-output table can be one frame wearing two names or two frames reaching the same atom by convergence. The record decides which. For the question at hand, the CPU and the rock-with-a-mapping have the same trace but not the same lineage: one has a machine table and program-as-data inside the closure, the other has an interpretation imported from outside. Naming the trace as the computation is the metamerism error catalogued in "The Hard Problem is About Source": an instrument that reads green cannot comment on the source.

- Refuter: show two systems with the same trace and the same independently checkable causal lineage but different compute verdicts.
- Mode: `specified`, triangulated (Fig 8 plus Fig 10 plus the essay on source).

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach, Fig 10 :59: "an interest in the outcome is unavoidable, an interest in the reading is disqualifying." A falsifier written before the run is a design instrument. The shape claim is refused if any of the following holds.

1. A fixed-arrangement system with no program-as-data kernel generates the full range of a universal machine's outputs across arbitrary inputs, without an interpreter importing the state mapping. This breaks F2 and F3.
2. A system whose causal structure does not mirror the automaton's formal structure still settles every output against an independent ground across counterfactual inputs. This breaks F4 and F5.
3. An observer-independent instrument returns the same compute or not-compute verdict for one system and function under two different interpretations, and the verdict tracks the system rather than the mapping. This closes the F8 gap and replaces the declared unreachable with a ground.
4. Universality and ground settlement turn out to be one condition measured by one instrument, so the union of F1 collapses to a partition.
5. A single scalar (bits alone or actions alone) decides the separator in both directions, breaking the two-currency rule of F7.

Until one of these is run, no claim in this folder is labelled `grounded`. A failure is more useful than an endorsement.

---

## 5. Recommendation

1. Lead with the union separator, not with a name. Say what a generator has and what an interpretation-only imitation lacks (F1 to F3).
2. State the anchor test explicitly. If the verdict moves with the description, the description is the frame, not the ground (F4).
3. Demand provenance for any claimed implementation: where did the mapping come from, and what gap does it explain (F5, F10).
4. Keep capability at the level of machine and habitat, not machine alone (F6).
5. Keep description cost and settlement cost in separate columns (F7).
6. Say plainly that no universal classifier is returned and that the missing thing is an instrument, not another checklist (F8).
7. Refuse "everything computes" as a refuted term, not as a novel hypothesis (F9).
8. Send the generator, the derivation and the refuter, not the conclusion (Fig 4 :25).

---

## 6. Canonical usage check

Two local canonical files were read after the first five sections and they govern how the figures may be used.

`FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also, a reading that makes one figure contradict another has misidentified its domain, and the framework returns "a shape, not a name," then stops at the limit of the available instruments and records the lineage so the stop is honest. Indiscernibility is not identity.

`FRAMEWORK/figures/THE_FORMULA.md`: mode rule, seven-step route, and the limit that a frame searching for an answer of a given shape holds that shape as a preference, not a term. Hence the binding of the sought-for shape in section 0.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| Treat "general-purpose" as a single property | **Retracted.** It is a union of universality and ground settlement (F1), with different anchors. |
| Treat the observer's mapping as a legitimate import | **Retracted.** It has no source gate or shadow test (F5); a mapping chosen ad hoc is an adopted frame. |
| "Shape, not a name" forbids naming the separating properties | **Retracted and narrowed.** The phrase governs missing primitives. The properties are held loop and ground properties, so naming them is a binding. What stays unnamed is which physical systems compute (F8). |
| Treat Fig 13's six terms as an instruction set | **Retracted.** Fig 13 is a physical substrate. Only the substrate-agnostic closed-set/unbounded-arrangements claim is used (strain S1). |
| Treat a runtime as the separator | **Retracted.** It is a budget filter, not a witness (F7, Fig 9 :60). |
| "Everything computes" as an open hypothesis | **Refused.** It is a REFUTED term; what is owed is a refusal (F9). |
| The declared gap on classification | **Confirmed.** Fig 9 :32 and Fig 13 :134-135 govern; the missing thing is a source-discriminating instrument. |

---

## 7. Strain ledger and re-census

- **S1, Fig 13 physical six-term set versus instruction sets.** A first pass mapped the six terms onto registers, clock and memory. Re-census: Fig 13 governs the physical substrate; the computing separator governs loop and ground properties at a higher level. Only the structural claim (a set is closed, its arrangements are not) transfers. Resolved by re-census, kept visible.
- **S2, "programmable" versus "computes".** SEP Computational Theory of Mind notes that describing a system as a computer strongly suggests programmability, and that most Turing machines are not programmable. A strain if "computer" means any automaton. Re-census: the question asks specifically about a general-purpose computer, so programmability is in scope by the question's own term, not imported from the framework. Resolved, kept visible.
- **S3, implementation necessary but not sufficient.** The Oxford 2022 chapter "Computation as Implementation" argues that Chalmersian implementation is necessary but not sufficient for computation. This is a world-side conflict with a purely structural separator. Re-census sends it back to F4: an additional ground condition is already part of the union, so the conflict corroborates the two-condition shape and does not flip the verdict. Kept as a live subtlety, not smoothed.
- **S4, trace versus structure.** Chalmers 1996 says the rock implements an inputless automaton only in the trivialized sense once a clock and dial are added, and that a particular trace is not the structure. No strain with the figures; it is the world-side corroborator of F3 and F5.
- **After re-census: zero hidden strains.** S1 and S2 are dissolved by re-census, S3 is absorbed as corroboration of an already stated condition, S4 is agreement from a low-overlap field.

---

## 8. Round-trip note

Formula step 6 requires the lossy transform between scales to be bracketed and measured: R_T = gap(x, (T_E composed with T_A)(x)) (Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."). The condensation used in `07` and `09` is: generator kernel, closed set with unbounded arrangements, non-updating ground, method not recording. Concretising that back onto a real device drops at least three things: the counterfactual-input test, the provenance of the mapping, and the two-currency accounting. `11_audit.md` enumerates them qualitatively. R_T is nonzero and is not measured numerically, because no ground reading exists.
