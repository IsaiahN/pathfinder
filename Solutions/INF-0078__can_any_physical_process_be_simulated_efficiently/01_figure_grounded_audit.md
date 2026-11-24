# Figure-grounded audit: can any physical process be simulated efficiently?

**Mode of this document: `specified` on the per-domain claims, `general` on the structural shape, `gap` on the universal yes/no. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." An unmeasured quantity is a specification of what to measure and is worth having, it is not a verdict.

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, 2026-11-19, opened this session): "The catch is that the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself. An external validator, or ground, is always needed to tether the veracity of the output to reality. Anything else is drift." And: "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. ... However, the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No numerical experiment, simulation run or measurement was performed in producing it.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text with line numbers), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the eight essays, and the public web sources recorded in `10_source_ledger.csv`. Every quoted figure string below is an exact substring of the local figure-text extract, case-insensitively and ignoring trailing punctuation.

---

## 0. The question as an effect

> Can any physical process be simulated efficiently, or do some systems resist useful simulation even when they are computable in principle?

Stated as an effect, `R = |Γ(b,a) - o′|` per slot s. The simulator is a frame Γ with a library of primitives and bonds. The physical process is the ground, whatever settles the question and does not change its answer because of what any frame thinks (Fig 2 :29). An efficient simulation is one whose prediction continues to pay at that ground within a stated budget, per slot. Two options:

- **Option A (universal yes):** efficiency is a property an algorithm can have for any physical process given enough cleverness, so the right answer is one universal technique or complexity class. This leads to searching inside one closure for a single winner and to treating a runtime figure as a verdict.
- **Option B (union of conditions):** "efficiently" and "computable in principle" are different quantities with different anchors. The universal yes/no is a `gap`, and what survives is a per-slot, per-currency shape with five distinct stopping conditions. This leads to an instrument and a set of refuters, one per condition.

The question is therefore **not** a two-list partition. It is a bundling of reachability, budget, contact, scale and underivability. Fig 9 :54 says "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55 says "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."

**Binding the sought-for shape as an ordinary term** (`THE_FORMULA.md`, "Direction"): the shape we are looking for is written down now, before the derivation, so it can accrue a residual and be refused. The shape is: a per-slot relation between a simulator and a non-updating ground, composed inside a closed set, bounded by two currencies, lossy across scales, and stoppable by one of five named conditions. A universal efficiency guarantee is NOT that shape. If the derivation below returns a universal yes or a universal no, that is a failure of this binding, not an answer.

---

## 1. Domain census (before choosing any figure line)

### R by arity, symmetry and scale

- **Arity:** four-place, `S(simulator Γ_S, process P, slot s, budget B) -> prediction that pays or fails`. Not a two-place "algorithm can/cannot simulate P" relation, because the slot and the budget are load-bearing. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Symbols :38-40 define R as "It is the aim, not only the error signal, and it is always a slice: what cannot be perceived yet is residual and simply cannot be read."
- **Symmetry:** ordered, not symmetric. Simulation runs from simulator to process, and the reverse does not hold. The round trip across scales is explicitly lossy (Fig 4 :27-30), so a symmetric "equivalence" reading would be a strain.
- **Scale:** at least four, the quantum state space, the chaotic trajectory, the climate or many-agent system, and the meta-level where the simulator itself is checked. The membrane between scales is a filter with a direction (Fig 4 :21-22).

### One line per candidate domain: actors, currency, anchor

| domain | actors | currency | anchor | admitted? |
|---|---|---|---|---|
| **D1 Reachability / computability in principle** | primitives of Γ, bonds, candidate terms φ, closure(Γ) | derivations inside the closure | the mathematical proof of reachability, not the physical process | yes |
| **D2 State-space blowup (quantum and many-body)** | particles, amplitudes, Hilbert-space dimension, simulator substrate | bits to describe plus actions to settle | experiment: interference, Bell tests, ground-state properties | yes |
| **D3 Chaos and precision** | trajectory, perturbation ε, Lyapunov exponent λ, digits of precision, reference orbit | digits of precision spent as actions | the reference orbit and the robust statistics of the attractor | yes |
| **D4 Ground contact and verification** | simulator, instrument, checking seat | whether the prediction pays at a ground that does not update | the physical process itself, never the simulator's self-report | yes |
| **D5 Underivability in principle** | Hamiltonian, tiling, universal Turing machine, axioms | proofs, not resources | mathematics (consistency, halting), not experiment | yes |
| **X1 "Efficiency" as a property of the algorithm alone** | algorithm | runtime | none independent of the frame that names the algorithm | **not a domain yet**, no anchor outside the frame (Fig 2 :29) |
| **X2 "Any physical process" as one sealed class** | all processes | one universal verdict | none, the class is unsealed (Fig 9 :44) | **not a domain yet** |
| **X3 The simulator as a seventh primitive of nature** | simulator | atoms | none, would have to be derived from the six | **refused**, see F9 |

### Partition or union

Union, not partition. D1 and D2 overlap (a state may be reachable in principle and still cost exponentially to describe). D2 and D3 overlap (quantum chaos combines both). D4 touches every other domain because none of them settles anything without a ground. D5 is different in kind: its anchor is mathematics, so it cannot be averaged with a budget result. Verdicts are kept per domain and never averaged into a single "yes, but only sometimes" percentage.

### Dependency order (Fig 3)

Fig 3 :20: "The chain is ordered by dependency, not by importance." Order: describe the residual and its slot (D4) -> decide reachability in the closure (D1) -> price the description and the settling actions (D2, D3) -> check whether the property is underivable at all (D5) -> let the ground settle (D4). Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." A faster algorithm cannot rescue a missing anchor or an underivable property.

### Strain test before quoting

An early pass tried to map the six-term substrate onto the simulator itself, calling the computer "space", the program "gradient" and the output "spectrum". That only fit by forcing, so it is a strain, and the figures say a strained line governs another quantity. Re-census: Fig 13 governs the minimum set any substrate must contain to compose; here its literal bearing is (a) the amplifying remainder, chaos, at Fig 13 :32, and (b) the closed set and unbounded arrangements at Fig 13 :115-118. Fig 4 governs the scale membrane. No figure line is forced. The retracted mapping is preserved in the log at section 8.

A second early pass treated "efficient" as one runtime threshold. Fig 12 :125 says "A composition costs in two currencies, and they do not add." That is a strain on a single-threshold reading, so the quantity was re-censused into two currencies. The correction is preserved at section 8.

---

## 2. Figure census and findings

Quotes are verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Each finding states its mode, its triangulation status and a refuter.

### F1: "Computable in principle" and "efficiently" are different quantities, and the difference is the wall, not the algorithm

**Mode: `general` for the rule, `specified` for this question. Status: triangulated** (Fig 6, Fig 8 and Fig 13, low overlap: the wall operator, the idempotence theorem and the finite-reach argument are three different routes).

- Fig 6 :21: "MINT composes inside the closure and can never add an atom."
- Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."
- Fig 13 :115: "The set is closed. The arrangements are not. That gap is why import exists."
- Fig 13 :117-118: "So a frame can search without end and still not arrive: infinite effort inside a finite reach."

**Reading.** Reachability answers whether φ is in closure(Γ) at all. Efficiency answers what it costs, in actions, to settle φ against the ground. A frame can be in-principle reachable and still sit behind a wall that only an import moves. Searching harder inside the same primitive set changes neither the atoms nor the wall, only how much of the space is visited (Fig 6 :49: "more search at the same reach: is it in here and unfound? The closure does not change. Same atoms, same wall, more of the space actually visited.").

**Refuter.** Show a composition inside a fixed primitive set producing a genuinely new primitive, with the lineage recorded so the addition is checkable. That breaks Fig 6 :21 and Fig 8 :32 and collapses the distinction.

### F2: The two currencies of efficiency do not add, so there is no single efficiency number

**Mode: `general`. Status: triangulated** (Fig 12 and the numerical-analysis source of D3, low overlap: a metalaw about notation and a measured precision-time relation).

- Fig 12 :125: "A composition costs in two currencies, and they do not add."
- Fig 12 :126: "Bits price the description. Actions price finding out whether it holds."
- Fig 12 :127: "They are in different units, so a system holding one accounting cannot compare them" (the line continues: "and will not notice the shortfall. It proposes arrangements it cannot afford to test, and the budget is what decides how much of the space is reached at all.").
- Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

**Reading.** A compact simulator can still be expensive to settle. A detailed simulator can be cheap to settle and impossible to state. A single "runtime" figure silently adds the two currencies and therefore cannot be the verdict. This is why the universal question is malformed as posed: it asks for one number over two incommensurable accounts.

**Refuter.** Exhibit one currency in which both the size of the description and the cost of settling it are fully measured, with a unit conversion that survives a change of ground. Until then, "efficient" is a label applied after a budget has been declared, not a property of the simulator.

### F3: Chaos is the figure-native case of computable but not efficiently trackable

**Mode: `specified`. Status: triangulated** (Fig 13 :32 and Fig 4 :27-32, plus the Corless source from numerical analysis, genuinely low overlap).

- Fig 13 :32: "comes from: a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise."
- Fig 4 :27: "The transform between scales loses information, and that is the point."
- Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

**Reading.** The residual re-enters the next turn. When the chain amplifies, the detail discarded at a crossing reappears as noise, so tracking an exact trajectory for long horizons requires precision that grows with the horizon. The simulator is computable (the rule can be run at any finite precision) while the useful simulation of the trajectory is budget-limited. The honest form distinguishes trajectory accuracy from the statistics of the attractor: a trajectory can be untracked while a statistic stays well-conditioned. This matters because "resists useful simulation" must name the object that fails; resisting exact tracking is not the same as resisting all useful prediction.

**World corroboration (secondary).** Corless 2025, "Numerical Methods for Chaotic ODE": "For chaotic problems, though, convergence to the reference solution does not happen, except on algebraically short time intervals. Trajectories of chaotic problems diverge exponentially (initially) from the reference trajectories, because their Lyapunov exponents are on average positive." And: "Given the chaotic nature of many Hamiltonian systems, of course, there is no hope of ensuring small global forward error in trajectories and so accurate statistics are all that can be computed." This is a genuine low-overlap witness from numerical analysis, not from the framework's pool.

**Refuter.** Exhibit a bounded-precision scheme that tracks the exact reference trajectory of a positive-Lyapunov system over unbounded time, with the error verified against the reference and not against a nearby shadow orbit. Shadowing is not a refutation: Corless notes that for the Gauss map "Every computed orbit is shadowed by a true reference orbit, for all time" while "every single one of those computed orbits is periodic because the set of floating-point numbers is finite." The discriminator is exact-trajectory contact, not visual similarity.

### F4: A simulator is a substituted habitat; a successful run proves wiring and never capability

**Mode: `specified`. Status: triangulated** (Fig 11, Fig 1 and Fig 10, three different checks: capability, self-scoring, verifier non-access).

- Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."
- Fig 11 :40: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."
- Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces."
- Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it."

**Reading.** A simulation that agrees with itself is a mirror, and a mirror cannot correct you (Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."). Useful simulation requires a channel to a ground the simulator did not author, and a checking seat that cannot reconstruct the prediction from the simulator's own record. The many "digital twin" successes in the literature are wiring results until the twin's output is checked against an independent instrument.

**World corroboration (secondary).** Conant and Ashby 1970, "Every good regulator of a system must be a model of that system": "any regulator that is maximally both successful and simple must be isomorphic with the system being regulated." The theorem is a constraint on the model's structure, not a licence for the model to certify itself. Box 1976: "Since all models are wrong the scientist cannot obtain a 'correct' one by excessive elaboration." These are low-overlap witnesses (cybernetics, statistics) for the same shape.

**Refuter.** Show a simulator that sets its own ground, returns a verdict on its own correctness from the same record that produced the prediction, and has that verdict accepted by an outside seat as settling the question. That breaks Fig 1 :27 and Fig 10 :42.

### F5: Underivable in principle and unreachable at this budget are different facts with different instructions

**Mode: `specified`. Status: triangulated** (Fig 8, Fig 9 and the Cubitt et al. source, low overlap: metalaw plus a mathematical result).

- Fig 8 :40-41: "Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."
- Fig 8 :41-42: "Unreachable-at-budget: the term is already in the closure and was not found, so the remedy is more search, not another atom."
- Fig 8 :42-43: "Importing against a budget limit adds an atom that was not needed, and Figure 6 prices a wrong atom above starting from primitives."
- Fig 9 :44: "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."

**Reading.** For a budget-limited problem the remedy is more search or a better instrument built from one already returning something (Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something."). For an underivable problem, more search cannot help and importing another simulator atom will not move the right wall. Confusing the two buys the wrong thing: a bigger computer for an undecidable question, or a new physical postulate for a precision problem.

**World corroboration (secondary).** Cubitt, Perez-Garcia and Wolf 2015, "Undecidability of the spectral gap", Nature 528:207-211: "This result implies that there exists no algorithm to determine whether an arbitrary model is gapped or gapless, and that there exist models for which the presence or absence of a spectral gap is independent of the axioms of mathematics." This is the underivable case. It does not say every particular instance is undecidable; the witness itself notes that particular cases can be solvable, so the claim is correctly scoped to the general problem.

**Refuter.** Exhibit a uniform algorithm that decides the general spectral gap problem from a finite description of the Hamiltonian, with a proof that terminates on every instance. That breaks the mathematical result and the figure distinction together. A solution of one famous instance is not a refutation.

### F6: A change of simulator substrate is an import, not a faster arrangement of the same atoms

**Mode: `specified`. Status: single-source for the figure rule, corroborated by physics sources.**

- Fig 6 :22: "NOVEL means novel relative to atoms, not to the world. IMPORT adds an atom, and the added atom is what expands the closure."
- Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."
- Fig 8 :51: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"
- Fig 4 :22: "Only methods cross up. Only head starts come down."

**Reading.** A classical simulator and a quantum simulator over the same physical process are not two runtimes of one program. They are two closures with different atoms (classical bits versus qubits and entanglement). Feynman's proposal and Lloyd's proof are exactly this move: import a different substrate rather than rearrange the classical one. The provenance matters. Calling the gain "just optimisation" hides the import and would make the record unfalsifiable (Fig 8 :50: "But shared atoms are not the signature. Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence.").

**World corroboration (secondary).** Preskill 2021/2023 quotes Feynman: "The rule of simulation that I would like to have is that the number of computer elements required to simulate a large physical system is only to be proportional to the space-time volume of the physical system." And Feynman: "the full description of quantum mechanics for a large system with R particles is given by a function which we call the amplitude to find the particles at x1,x2,...xR, and therefore because it has too many variables, it cannot be simulated with a normal computer." Lloyd 1996: "Feynman's 1982 conjecture, that quantum computers can be programmed to simulate any local quantum system, is shown to be correct." These are three records of one physics pool, not three independent witnesses.

**Refuter.** Show the same primitive set generating both the classical and the quantum simulation with only a different bond arrangement and no new atom, with the lineage demonstrating that no substrate was imported. That breaks Fig 6 :22.

### F7: The loss/noise boundary flips with the residual, so no simulator is universally hard or easy

**Mode: `specified`. Status: single-source for the figure side, corroborated by a physics result.**

- Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries."
- Fig 11 :51: "No standing list of good actors survives a change of residual."
- Fig 6 :27: "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."

**Reading.** Boson sampling was taken as a case requiring exponentially many classical steps. Rahimi-Keshari, Ralph and Caves showed classically efficient simulation when loss and noise are large enough that the Wigner function becomes positive. The simulator did not change; the residual (which feature must be reproduced) and the habitat (loss and noise) did. "Hard to simulate" is a relation, not a standing property of a physical process. This is why the universal question must be refused even in the direction that says some systems always resist.

**World corroboration (secondary).** Alsing, Cafaro and Mancini 2024: "Then, thanks to this achieved positivity, an ordinary classical simulation of the quantum process can be performed efficiently without the need of an exponentially large number of computational steps." The APS Physics summary (2016, returned 403 to direct fetch and retrieved via search extraction, reduced weight) reports the same result: "could in fact be simulated in an efficient way if the system in which the process occurs has sufficiently large loss and noise."

**Refuter.** Exhibit a physical process whose simulation difficulty is invariant across every change of habitat and every change of the observable slot, measured with the same instrument. That breaks Fig 11 :49.

### F8: There is no last simulator, so no universal efficiency theorem can close the question

**Mode: `general`. Status: triangulated** (Fig 7, Fig 4 and the canonical README, low overlap between the room chain and the scale membrane).

- Fig 7 :6: "the limit: no last room"
- Fig 7 :12-13: "same closure, handed along; agreement compounds, evidence does not"
- Fig 4 :33: "Which is why there is no top and no infinite regress."
- Fig 13 :90: "One chain is one route through a space that has no last route."

**Reading.** A universal "any process can be simulated efficiently" would be a final room: a frame with no outside left from which a different atom could be imported. The figures rule that room out definitionally (no top, no bottom). A universal "some processes always resist" fails for the same reason on the other side: it would freeze a habitat and forbid a future import. The canonical figures README has a section titled "This is not a Theory of Everything - and that is the point."

**Refuter.** Exhibit a simulator that is final in the sense that no question about any physical process can require an atom it does not hold, together with a proof that no outside frame can add one. That breaks Fig 7 :6 and Fig 4 :33.

### F9: "Shape, not a name" governs missing primitives, not the choice of a held substrate

**Mode: `general`/`specified`. Status: triangulated** (canonical README plus Fig 13, corroborated by the essays).

- Fig 13 :135: "It cannot say which primitive is missing, because naming it would mean already holding it."
- Fig 9 :32: "you get a kind of thing, never the answer itself"
- Fig 13 :134: "Unreachable is a verdict here, not a silence,"

**Reading.** The framework returns the shape of an efficient simulation: per-slot contact with a non-updating ground, composition inside a declared closure, a priced import when the wall must move, two currencies kept apart, a measured round-trip gap, and a refusal where the property is underivable. It does not return a named algorithm as the winner. Naming classical or quantum as the substrate for a given slot is a binding from the physics frame onto an already-available option, provenance-bearing and refutable, not the invention of a seventh primitive. I initially overstated this rule and corrected it; see section 8.

**Refuter.** Show the figures returning a unique named algorithm with no ground settlement and no provenance-bearing import. That breaks Fig 9 :32 and Fig 13 :135.

### F10: The figure's own stopping rule is "unreached", not "unreachable"

**Mode: `specified`. Status: triangulated** (Fig 8 and Fig 13).

- Fig 8 :39: "So a search that finds nothing is never a proof of absence."
- Fig 13 :134: "So the system can report that it lacks something rather than producing an answer anyway. Unreachable is a verdict here, not a silence,"

**Reading.** This audit does not claim that no efficient simulator can ever be found for a given process. It claims that no figure line settles the universal question, so the universal question is a `gap`, reported as a verdict and not as silence. For any named process, the honest status after this derivation is `candidate`, to be settled by an instrument, not by an argument. The pre-registered refuter below is what would move it.

---

## 3. Pre-registered refuter (written before the conclusion)

Per the figure discipline, "a falsifier written before the run is a design instrument, not only an honesty device." The shape claim is refused if any of the following fires:

1. **Contact.** A simulator is shown to keep a prediction paying at a non-updating ground at a named slot while having no channel to that ground (breaks Fig 2 :29 and Fig 10 :24).
2. **Self-verification.** The same record that produces a prediction is accepted as settling that prediction's correctness, from inside the simulator frame (breaks Fig 1 :27 and Fig 10 :42).
3. **Closed set.** A composition inside a fixed primitive set is shown to add a new primitive with a checkable lineage (breaks Fig 6 :21, Fig 8 :32 and Fig 13 :115).
4. **Chaos discriminator.** A bounded-precision scheme is shown to track the exact reference trajectory of a positive-Lyapunov system over unbounded time, with exact-trajectory error verified against the reference rather than a shadow orbit (breaks Fig 13 :32).
5. **Underivability.** A uniform terminating algorithm is shown to decide the general spectral gap problem from a finite Hamiltonian description (breaks Fig 8 :40-43 and the Cubitt et al. result).
6. **Isomer test.** Two simulation strategies over the same atoms and bonds are shown to be one term in both currencies, description bits and settling actions (breaks Fig 12 :117 and Fig 12 :125).
7. **Round trip.** A transform between scales is shown to be exactly reversible, so the round-trip gap `R_T` is zero (breaks Fig 4 :30 and the Symbols definition of `R_T`).

If any fires, the affected domain verdict is withdrawn and the census is redone. Until one is run, nothing in this folder is labelled `grounded`.

---

## 4. Recommendation

1. Refuse the either/or as a union. Ask which condition is actually doing the work in a claimed simulation failure: reachability, budget in one of two currencies, channel decay, scale loss, or underivability (F1, F2, F5).
2. State efficiency per slot and per currency. Never quote one runtime as a verdict; it is a filter for the budget (Fig 9 :60).
3. Require a ground-independent check for every claimed simulation success. A wiring result is not a capability result (Fig 11 :70).
4. Record the provenance of a substrate change as an import with source and shadow test (Fig 8 :51). Do not present a quantum advantage as an optimisation of the same program.
5. Bind the impossible sides separately: track a trajectory, a statistic, a ground-state property, or a decision problem. "The system resists simulation" is under-specified until the object is named.
6. Use the public opt-in venues in `03_public_contact_points.csv`, ask for a refutation rather than agreement, and record the verdict before offering the framework (Fig 10 :52: "Bring a characterised residual, never the source.").

---

## 5. Canonical usage check (figures README and formula, read this session)

Two framework sources govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." It states the re-census rule: "a reading that makes one contradict another has misidentified its domain, not found a flaw." It gives the canonical limit: the framework says what a missing thing would have to look like, "a shape, not a name", then stops at the limit of what the instruments can distinguish and records the lineage. "Indiscernibility is not identity." It also forbids a final room: "This is not a Theory of Everything - and that is the point."
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule, step 7's three distinct questions (SEARCHED, INWARD, OUTWARD), step 5's "A gate is not the ground", and the "Direction" discipline of binding the sought-for shape as an ordinary term. Step 7 distinguishes "underivable-in-principle and unreachable-at-this-budget" as "DIFFERENT FACTS with different instructions".

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| Simulator as "space", program as "gradient", output as "spectrum" | **Retracted (R1).** A strain. Re-census: Fig 13 governs the minimum set a substrate needs; here only its chaos and closed-set lines bear, literally. Fig 4 governs the scale membrane. No figure was made to fit. |
| "Efficient" as one runtime threshold | **Retracted (R2).** Fig 12 :125-127 gives two currencies that do not add. Efficiency is now stated per slot and per currency. |
| "Chaos makes simulation impossible" | **Retracted (R3).** Corless shows statistics of chaotic attractors can be well-conditioned even when trajectories are not. The claim is narrowed to exact-trajectory tracking under a budget. |
| "Undecidable means no instance can ever be settled" | **Retracted (R4).** The Cubitt et al. result is about the general problem. Particular instances may be decidable. The claim is scoped accordingly. |
| "Shape, not a name" forbids choosing a simulator substrate | **Retracted (R5).** The rule governs a primitive not held in Γ. Choosing between classical and quantum substrates is a binding from the physics frame, with provenance, not an invented primitive. |
| "Unreachable" as a claim that no simulator can exist | **Retracted (R6).** Fig 8 :39, a search that finds nothing is never a proof of absence. The universal question is a declared `gap`; per-process status is `candidate`. |
| The union reading (F0) | **Confirmed.** Fig 9 :54-57 plus Fig 12 :125-127: the question bundles conditions with different anchors. |
| The wall/import reading (F1, F6) | **Confirmed.** Fig 6 :21-23, Fig 8 :32, Fig 13 :115-118. |
| The no-last-room reading (F8) | **Confirmed.** Canonical README section plus Fig 7 :6 and Fig 4 :33. |
| The simulated-status label | **Confirmed.** The Recursive Self-Improvement Trap: the output is only as good as the validator and cannot validate itself; LLM output is an approximate simulation, not the testable derivation. |

### Three questions when no line closes the residual

Asked in the required order, kept distinct:

- **SEARCHED.** Is the answer already in this closure and merely unfound? Fig 6 :49 says more search at the same reach does not change the wall. For a named process, the first question is whether a simulator already exists in the library and has not been tried. This is cheapest and is asked first.
- **INWARD.** Can the instrument be extended from one already returning something? Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something." For chaos, this means more precision from a scheme already producing a trajectory; for quantum simulation, a better controlled simulator from one already returning statistics. It never answers underivability.
- **OUTWARD.** Which frame already predicts the shape of the residual? Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit." For the spectral gap case the outside frame is mathematical logic, imported with a source gate and a shadow test. Importing against a budget limit is the error Fig 8 :42 prices.

### Updated verdict

The shape survives: efficient simulation is a per-slot relation to a ground that does not update, composed inside a declared closure, priced in two currencies, lossy across scales, and stopped by one of five conditions. The universal "any process" question does not survive: it is a `gap`, reported as a verdict rather than a silence. Verdicts per domain are kept separate and never averaged. Strains after re-census: none hidden, one live type question retained (whether a substrate change counts as an import or as a different bonding of held atoms, recorded in `06_isomers_and_order.md` and `11_audit.md`). Mode `specified` on the domain claims, `general` on the shape, `gap` on the universal, not `grounded`.
