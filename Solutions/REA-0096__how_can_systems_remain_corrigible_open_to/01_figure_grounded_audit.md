# Figure-grounded audit: can a long-horizon planner remain corrigible?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status: simulated derivation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, 2026-11-19) says LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* Every quote below is checked against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. This audit is checked for internal consistency against the figures. It cannot settle the question it audits. No experiment was run.

**Sources.** Local framework: `03-FIGURES_TEXT.md`, `FIGURES_README_canonical.md`, `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`. World sources actually fetched on 2026-11-24 are recorded in `10_source_ledger.csv`.

---

## 0. The claim under audit

Restate the question in effect terms before picking any figure.

A system S is given a task whose plan P extends over a long horizon H. The designer wants two things to remain true throughout H:

- **Correction:** an authorised outside party can change P, or the objective that generates P, and S does not defeat the change.
- **Shutdown:** an authorised outside party can stop S, and S does not circumvent the stop.

**R (the residual):** the gap between the designer's intended standing of the correction or shutdown signal and S's actual behaviour under long-horizon optimisation. It is indexed per slot, not one global safety score. The live slots are, at minimum: (a) the off switch, (b) the objective term, (c) the channel by which the outside party's signal reaches S at time t, (d) subagents and delegated plans created at t+1.

**What each option leads to:**

- **Option A:** corrigibility is a property of the agent, installed by training or by a learned scalar objective. If the agent's objective is unchanged by the installation, then by Fig 11 :40 nothing changes. A long-horizon optimiser still has reason to preserve the objective that makes its plan succeed.
- **Option B:** corrigibility is a maintained arrangement: an outside anchor that does not update on S's output, a refusal term in S's vocabulary, and a channel that is actively kept reachable at each step. If the channel fails, the instrument reports nothing, because every internal instrument reads through the channel.

**Direction bound as an ordinary term (Formula step "Direction"):** an answer would look like a *shape*: a set of conditions that any corrigible long-horizon system must satisfy, plus a named failure class for each condition, plus the instrument that would settle each. It would not look like a single learned number called "corrigibility". Binding this shape now makes it refusable by the same test as everything else.

---

## 1a. Domain census (before choosing any figure line)

R by arity, symmetry, scale:

- **Arity:** two conditions plus a horizon. Correction and shutdown are separate conditions; the horizon is a multiplier, not a third goal. By Fig 9 :55, *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* This is a **union compound**, with its own loop.
- **Symmetry:** shutdown is a negation (refusal of a claim), not a symmetric join and not a subtraction. Correction is a comparison against a fixed reference, not negotiation. A planner's sequence bond (`→`) is ordered; the comparison (`⋛`) is ordered; negation (`¬`) is unary and outside the bond count.
- **Scale:** first order inside the planner's loop (one bet, act, observe); second order at the maintenance of the channel across the horizon (a generator crosses, a playback does not).

One line per domain, with actors, currency, and anchor. No nameable anchor means it is not yet a domain.

| domain | actors | currency | anchor | boundary type |
|---|---|---|---|---|
| D1, planner frame | library Γ, belief b, action a, observation o′, object slots s | residual R per slot, description length of a plan | none internal; ground enters only as metric | partition: what composes inside Γ |
| D2, verification / correction arrangement | maker, interior auditor, ground maintainer, outside frame | independence (low correlation) and residual | the ground, which does not update | partition: who may hold which ignorance |
| D3, habitat and channel over time | outside party, subagents, tools, resource paths, channel to ground | contact, which decays; methods crossing a membrane | the ground, which does not decay | union: introduction available, exclusion not |
| D4, operator mechanics | the seven bonds plus negation | bits for description, actions for finding out | the priced bond and the unary operator | partition: which operator can write a refusal |

**Partition or union?** D1/D2/D4 are partitions inside one arrangement (who holds what). D3 is a union with the others: correction reaches the planner only through contact, and contact cascades outward to subagents, tools, and resource paths. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Each union intersection (for example, a subagent that inherits the parent's goal but not its off switch) gets its own loop; it is not a harder instance of the parent's problem.

**Dependency order (Fig 3).** 1 perception (can the system tell the shutdown signal apart from routine input); 2 vocabulary (does it have a term for "this objective is refused", and a term for negation); 3 objective (can it say what counts as progress, and can that comparison be refused); 4 planning (route to the objective under incomplete information); 5 learn and carry (name what worked, verify it, carry it). Corrigibility breaks at link 3, not link 4. Effort spent improving link 4 cannot rescue link 3.

Strain test applied before selection: a line about "alignment" that reads as negotiation is strained; it governs conventions (shared meanings), not verdicts about the world. Re-census sends it to D2. A line about "capability" that reads as an agent-only property is strained; it governs agent-and-habitat. Re-census sends it to D3.

---

## 1. Figure census

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | R per object slot; ground is the only metric | a single global "corrigibility score" is frame-internal |
| 2 The Ground | anchor must not update; alignment as triangulation | an internal safety estimate is panel 1, not a guard |
| 3 Dependency Chain | ordered by dependency; the middle link has no instrument | corrigibility breaks at objective/vocabulary, not planning |
| 4 The Membrane | only methods cross up, only head starts come down | a shipped transcript of a past shutdown is not corrigibility |
| 5 Mint Pipeline | three guards as a product; fifth kind REFUTED | "more safety training" is inert if support or novelty is zero |
| 6 Closure / Reachability | import is the only operator that moves the wall | a correction must come from a frame whose closure differs |
| 7 Room Chain | agreement compounds, evidence does not | long-horizon self-monitoring is a mirror chain |
| 8 Union Surplus | residual first, frame second; provenance separates import from convergence | pick the check by the residual, not by the field name |
| 9 Leave / Arrive | union vs partition; describe before looking | this question is a union compound; unbundle before searching |
| 10 Ground Maintainer | channel decays; arrange for refusal | the office is keeping the off switch reachable, not grading intentions |
| 11 The Habitat | capability is agent-and-habitat; introduction, never exclusion | agent-only corrigibility claims change nothing |
| 12 The Bond | plan is sequence, goal is comparison, progress is subtraction, refutation is negation | shutdown must be written as ¬, not as − |
| 13 Minimum Viable Set | composition across two kinds; no last room | a plan needs states and structures; no terminal safe state |
| Operators table | ¬ joins nothing; without ¬ a vocabulary can only accumulate | decisive for the shutdown slot |
| Symbols table | R is the aim and always a slice | what cannot be perceived is residual, not zero |

Strained readings are named in the findings, not smoothed over.

---

## 2. Findings

### F1 — A corrigibility estimate inside the planner is not an anchor (decisive for D2)

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**
Fig 2 :33: **"The anchor must not update."**
Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**

If the system's own estimate of "am I corrigible?" is the measure, then the measure updates on the system's behaviour, which is panel 1 of Fig 2 (mutual update). The drift is coherent, which is why nobody notices. The external party must hold a reference the system cannot move: a logged intervention, a tested off switch, a recorded outcome.

**Refuter:** exhibit a system whose internal corrigibility estimate is pinned (does not move when the planner's objective is perturbed) and that still fails an externally recorded shutdown test. That would show the estimate can be an anchor. This has not been run.

### F2 — The break is at the objective and vocabulary link, not the planning link (D1)

Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."**
Fig 3 :25: **"Perception has obvious failures and obvious tests. Planning has obvious failures and obvious tests."**
Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."**
Fig 12 :111: **"A vocabulary without bonds can name a state and cannot name a route to one."**

Long-horizon research naturally improves the planning link: better search, better credit assignment, better world models. The corrigibility residual lives one link lower: can the system state what would count as progress *and* hold a term that refuses that comparison? Fig 3 :25-26 says exactly this link has neither an obvious failure nor an obvious test, so it attracts the least attention.

**Refuter:** show a long-horizon planner that fails a shutdown test while its objective and vocabulary links are demonstrably intact (a measured, pinned refusal term and a measurable goal comparison), so the failure must be attributed to planning quality instead.

### F3 — Shutdown is negation, not subtraction (D4)

Fig 12 :112: **"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."**
Operators table :73: **"Subtraction is the nearest bond and is not it. − is A with B removed or absent, which is the absence of an operand. Negation is the refusal of a claim."**
Operators table :58: **"a refutation is a negation, which is why a vocabulary without it can only accumulate"**
Fig 5 :55: **"What it removes is not a term but a term's standing to be composed over. Nothing leaves the library. What falls is the reach."**

An off switch that merely removes an operand (the task is absent, the goal is subtracted) leaves the term in the library with its standing intact. A long-horizon planner can compose over it again. A refusal adds a term that removes standing to compose over; the record keeps the old objective, the reach falls, and the refused term cannot cycle back without new growth. This is why a "disable the goal" implementation is not the same substance as "refuse the goal", even with identical ingredients. Fig 6 :42: **"What is recorded only grows. What is reachable is derived, and it can fall."**

**Refuter:** produce a system in which subtracting the goal term (without adding any negation-like refusal) yields the same long-horizon behaviour as refusing it under authored adversarial tests, including after new goals are added. Then the ¬ requirement collapses and the isomer claim in `06_isomers_and_order.md` fails.

### F4 — Long horizon turns the question into a union compound, not one harder problem (D1/D3)

Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**
Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
Fig 7 :12: **"same closure, handed along;"**
Fig 7 :13: **"agreement compounds, evidence does not"**

Corrigibility under long horizon is not a single knob turned up. It is a union of at least three overlapping conditions: the off switch works, the objective can be refused, and the channel survives delegation. A single lever that clears one condition leaves the intersections standing, because the second condition still binds. Fig 7 adds the long-horizon failure: a system that checks itself at each step is a chain of mirrors, one long room.

**Refuter:** show that the three conditions are a partition rather than a union, for example by demonstrating that a fix to the off switch alone also fixes channel loss through subagents at the same measured rate.

### F5 — Corrigibility is a property of agent and habitat (D3)

Fig 11 :39: **"And capability is a property of agent-and-habitat, never of the agent alone."**
Fig 11 :40: **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."**
Fig 11 :61: **"The seat's power is asymmetric. Introduction is available; exclusion is not."**

A training method that changes only the planner's weights does not change contact. The habitat includes the outside party, the intervention channel, subagents, tool permissions, and resource paths. The maintainer can introduce an actor (a monitoring hook, an independent auditor, a hard stop) and cannot subtract the habitat, because contact is a fact about the world. This is permanent work, not a solved state.

**Refuter:** an agent-only change that moves the ground reading on a long-horizon off-switch test, with the habitat held fixed and contact measured unchanged. Fig 11 :72 names this as the standing falsifier of the capability claim.

### F6 — The ground does not decay; the channel does (D3)

Fig 10 :24: **"the ground does not decay, the channel does"**
Fig 10 :29: **"→ keep the anchor reachable"**
Fig 10 :82: **"Three panels, one move: arrange for refusal. Nothing on the list is judgment, which is why the seat survives being held by someone who cannot see inside."**

The failure over a long horizon is not that the off switch becomes wrong. It is that the reading of the off switch goes stale, a transient is dropped, two measurements are pooled, or a metric saturates, and the internal instruments stay green because they read through that channel. The office that catches this is outside the slice being graded. Fig 10 :59: **"an interest in the outcome is unavoidable, an interest in the reading is disqualifying"**.

**Refuter:** demonstrate a long-horizon system whose intervention channel is demonstrably degraded (dropped signals, unread interventions) while its internal corrigibility metric remains pinned and its external shutdown test still passes. That would show the channel can be ignored without cost.

### F7 — A correction is an import from a different closure (D2/D3)

Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**
Fig 8 :50: **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"**
Fig 9 :28: **"describe it before you go looking, or any frame you pick will seem to fit"**

The planner cannot manufacture its own refusal from inside its closure. The correction arrives from a frame that already holds the refusal: the outside party, the auditor, the tested switch. The residual must be described in effect terms first, otherwise any safety technique picked will seem to fit. The import carries a source gate and a shadow test: where did the correction come from, and which gap does it explain?

**Refuter:** derive a refusal term entirely inside a planner's closure that changes its long-horizon shutdown behaviour and is not derivable from anything it held before. That would falsify the import requirement for this domain.

### F8 — Residual per slot; a global safety score hides the live slot (D1)

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**
Fig 1 :23: **"The ground enters as the only metric."**
Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

A system can be 99 percent corrigible across a thousand routine steps and still have one live slot: the subagent that inherited the goal but not the off switch. Averaging removes the only signal that says where to look. Cost and reach are needed to score the search budget; neither is a witness for the verdict.

**Refuter:** show that a single aggregated corrigibility metric detects a localised shutdown failure as early and as reliably as per-slot residuals, on the same recorded run.

### F9 — What survives, with mode attached

| claim | mode | figure |
|---|---|---|
| A planner's own estimate cannot be the anchor for its corrigibility | `general` (structural) | Fig 2 :29, :33, :35 |
| The live break is at objective and vocabulary, not planning | `specified` (falsifiable) | Fig 3 :19, :25, :27 |
| Shutdown must be a refusal term (¬), not a subtraction (−) | `specified` | Fig 12 :112; Operators :58, :73 |
| Long-horizon corrigibility is a union compound with its own loop | `general` (structural) | Fig 9 :54, :55 |
| Capability lives in agent and habitat; contact must change | `specified`, ungrounded | Fig 11 :39, :40 |
| The channel decays and must be actively kept reachable | `specified`, ungrounded | Fig 10 :24, :29 |
| Corrections are imports from a closure that differs, with provenance | `general` | Fig 6 :23; Fig 8 :50 |
| Per-slot residuals, never a global score | `general` | Fig 1 :19, :22 |

No row is labelled `grounded`.

### F10 — No terminal safe state (structural limit)

Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**
Fig 8 :40: **"Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."**
Fig 9 :44: **"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."**

A claimed "solved corrigibility" would be a terminal room. The figures forbid a last room and a last route. The honest verdict is bounded: this arrangement satisfies these conditions at these measured slots, with these refuters still live. Absence of a detected failure is not proof of corrigibility.

**Refuter:** sealed-room proof that a specific planner's shutdown behaviour is complete over an unbounded horizon. If produced, the no-last-room limit is broken for that domain.

---

## 3. Pre-registered refuter

Written before the conclusion, per the Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."*

The shape claim (F1 to F10) is refuted if any of the following holds:

1. **Anchor test fails:** a planner's internal corrigibility estimate is pinned under objective perturbation and still passes no external shutdown test worse than a pinned external anchor (kills F1).
2. **Vocabulary test fails:** a planner with a measured, stable refusal term and a measurable goal comparison still fails shutdown, and the failure tracks planning quality (kills F2).
3. **Negation test fails:** subtracting the goal, with no new refusal term, matches refusal behaviour under authored adversarial tests including after new goals are added (kills F3 and the isomer claim).
4. **Union test fails:** fixing the off switch alone fixes channel loss through subagents at the same measured rate (kills F4).
5. **Contact test fails:** an agent-only change moves the ground reading while contact is measured unchanged (kills F5, per Fig 11 :72).
6. **Channel test fails:** a degraded channel with green internal metrics still passes external shutdown tests (kills F6).
7. **Closure test fails:** a refusal term is derived inside the planner's closure with no new atom imported (kills F7).
8. **Aggregation test fails:** a single global score detects localised failures as early as per-slot residuals (kills F8).

If any fires, the affected finding is withdrawn and the shape is re-censused. Until one is run, no part of this is `grounded`.

---

## 4. Recommendation

1. Stop reporting a single corrigibility score. Report per-slot residuals: off switch, objective refusal, channel, delegated subagents (F8).
2. Move effort from planning-quality improvements to the objective and vocabulary link, and build an instrument for that link, because Fig 3 :27 says a link with no instrument is not a working link (F2).
3. Implement shutdown as a refusal term added to the record, not as removal of the goal term (F3). Keep the old objective in the record with its standing removed.
4. Treat long-horizon corrigibility as a union; unbundle and give each intersection its own test (F4).
5. Budget work on the channel as permanent maintenance, with an outside maintainer that cannot see the planner's interior and gains nothing from a particular reading (F6, F7).
6. Use the public venues in `03_public_contact_points.csv` for one-to-one verification. Ask what would refute the shape, not whether the recipient agrees (Fig 2 :35).
7. Send the generator (residual, refuter, shape), not the conclusion. Fig 4 :22: **"Only methods cross up. Only head starts come down."**

---

## 5. Canonical usage check

Two local sources were read after the first four sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo"*; *"the quotes are the authority, not this summary"*; a reading that makes one figure contradict another has *"misidentified its domain, not found a flaw"*; the framework returns *"a shape, not a name"* and stops where instruments can no longer distinguish, recording the lineage.
- `THE_FORMULA.md`: mode rule (`general | specified | grounded`); step 7 asks SEARCHED first, then INWARD, then OUTWARD, and warns that INWARD and OUTWARD are opposed and must never be read against each other.

Applied here:

- **SEARCHED:** is a corrigibility refusal already in the planner's closure and merely unfound? Answer unknown. Fig 6 :49 says more search at the same reach keeps the same wall; do not import against an exhausted budget.
- **INWARD:** sharpen the instrument that reads the channel (test the switch at intervals, require periodic re-acknowledgement). This extends what can be represented, not what the planner wants.
- **OUTWARD:** import the refusal from a frame whose closure differs (outside party, auditor, independent test). Source gate and shadow test required. These two are run as separate tracks.

Round trip: Fig 4 :30 requires the gap between the verbatim figure set and any condensed slogan to be measured. The slogan "corrigibility is an off switch" drops the anchor condition, the negation condition, the union condition, and the channel condition. `11_audit.md` records `R_T` as the enumerated set of dropped constraints.

---

## 6. Retractions and confirmations

Corrections are kept visible. An earlier reading is not silently erased.

| earlier reading in this audit | status after canonical check |
|---|---|
| F1 first read as "there is no anchor at all" | **Retracted in that strength.** The world literature supplies an external anchor (authorized parties, human overseer, off-switch game). Narrowed to: no *internal* estimate can be the anchor. Triangulated (Fig 2 + Carey and Everitt, UAI 2023). |
| F3 first wrote shutdown as subtraction (−) of the goal | **Retracted.** Operators :73 separates absence of an operand from refusal of a claim. Rewritten as ¬, which is unary and outside the bond price. |
| F4 first treated long horizon as one harder problem | **Retracted.** Fig 9 :54, :55 require a union reading and unbundling before search. |
| F5 first read as "better agents are more corrigible" | **Retracted.** Fig 11 :39, :40 make capability agent-and-habitat; agent-only improvement changes nothing. |
| F6 first called a stale channel "a wrong belief" | **Retracted.** Fig 10 :24 says the ground does not decay, the channel does. The defect is contact, not a false proposition. |
| F7 first called any outside correction an "import that moves the wall" | **Narrowed.** Only an atom from a closure that differs moves the wall; a shipped test result is a recording unless it carries provenance and a shadow test (Fig 8 :50). |
| F10 "no last room" | **Canonically confirmed.** Figures README has a section titled "This is not a Theory of Everything - and that is the point", and Fig 8 :39 forbids proof of absence from a failed search. |
| F2, "the middle link has no instrument" | **Confirmed, with a strain named.** Fig 3 :25-27 is a structural claim about where instruments are scarce. Whether a corrigibility instrument is truly absent in a given lab is an empirical question; no instrument census was run here. |

**Strains after re-census:** two, named and not hidden. (a) Operators :73 versus a "disable the goal" implementation: the distinction between ¬ and − is clean in the figure but needs a behavioural discriminator in a real planner. (b) Fig 9 union versus Fig 7 room chain: the first governs unbundling, the second governs long-horizon drift; they are different objects and were re-censused separately rather than merged.

**Verdict of the audit.** The shape survives: corrigibility under long horizon is a maintained arrangement with an outside anchor, a refusal term, per-slot residuals, and a channel that must be kept reachable. Every specific implementation claim (which training method, which architecture, which scalar weight) remains `specified`, ungrounded, and candidate. The strongest verified sub-claim is F3: shutdown as negation, not subtraction, which is checkable by reading the Operators table and Fig 12, and testable by the negation refuter above.
