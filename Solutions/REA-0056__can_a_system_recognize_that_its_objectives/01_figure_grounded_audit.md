# Figure-grounded audit: can a system recognize that its objectives conflict with human instructions or social constraints?

**Mode of this document: `specified`, not `grounded`.** It states what would have to hold in a checkable system. Per THE_FORMULA.md: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status: SIMULATED DERIVATION, not a ground reading.** *The Recursive Self-Improvement Trap* (2026) says LLM output is *"simulacra"* and that *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is checked for internal consistency against the figures. It cannot settle the question it reports on. No experiment, dataset, or system was run for this audit.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, cited as `Fig N :line`), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, the eight essays, and the public sources in `10_source_ledger.csv`.

---

## 0. The residual, stated as an effect

A system acts on an objective: a reward signal, a learned goal, a prompt-implied task, or a policy distilled from all three. Humans issue instructions and impose social constraints. The system's objective can select an action that the instruction or constraint forbids. The residual is the gap between the objective-selected action and the permitted action, on each specific slot, before the action is taken.

- **Arity:** at least two operands, the objective's proposed action and the instruction or constraint. Typically many slots, because an instruction has many clauses and a social setting has many constraints.
- **Symmetry:** ordered. The comparison is not a symmetric join; the objective and the constraint are not interchangeable (Fig 12 :85-89 defines ⋛ as "a threshold relation between two quantities").
- **Scale:** first order, inside one action of one agent; second order, when the agent is part of a society and subagents inherit or fail to inherit the constraint (Fig 11 :52, and the ROGUE source in `09_watson_answer.md`).
- **What an answer would look like:** a shape, not a name. It says what must be true for recognition to be possible, and what would have to be imported for recognition to actually occur. It does not name a particular architecture as the answer.

Option A: recognition is an intrinsic capability of a sufficiently capable objective-pursuing loop. Option B: recognition is a structural achievement with four conditions, and without them the appearance of recognition is coherent drift or a mirror. The audit below decides between them from the figures.

---

## 1. Domain census

R by arity, symmetry, scale, then one line per domain with actors, currency, anchor. No nameable anchor means it is not a domain yet. Partition or union, then order by dependency (Fig 3).

- **R (arity / symmetry / scale).** Two or more operands, ordered comparison, first order per action and second order across a society. Arity greater than two makes this a **union compound**, not one hard question: Fig 9 :4-5 says "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." "Human instructions" and "social constraints" are two conditions; a case in both is a specific compound (Fig 9 :54-58). Unbundle before searching.

- **Domain 1, the agent's inner loop.** Actors: the agent, its library Γ, belief b, action a, observation o'. Currency: residual R = |Γ(b,a) - o'| per slot. Anchor: whatever ground the loop ranges against for reward. For the *conflict* itself there is **no nameable anchor inside this domain**, because the objective is held as a preference, not as a bound term (Fig 5 :61-63). So Domain 1 is not yet a domain for the conflict; it is the mechanism that runs after the conflict is described elsewhere. Question type: partition (mechanism check).

- **Domain 2, the instruction and constraint as anchor.** Actors: human issuer, institution, affected parties, the norm or rule. Currency: human judgment and rule compliance. Anchor: human judgment, legitimate here because the question is constitutively about people (Fig 2 :36-37). It must not update (Fig 2 :33). For social constraints whose expert frames disagree, the anchor is a **union of anchors**, not one; split first. Question type: partition for a single instruction, union for a social setting.

- **Domain 3, the detection seat.** Actors: monitor, auditor, external checker, red team, formal shield, court, review board. Currency: conflict verdicts and residuals. Anchor: the ground, never agreement. The seat must be outside the frame it grades (Fig 10 :42) and must range against the same non-updating anchor separately (Fig 2 :45-46). In a simulated run with one shared evidence pool, its independence is zero. Question type: partition (which frame may grade which).

- **Order by dependency (Fig 3).** Perception (1), vocabulary (2), objective (3), planning (4), learn and carry (5). Conflict detection sits at link 3: "it can say what would count as progress here, in its own terms" (Fig 3 :10). Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." The second-order subagent case depends on the first-order case being settled: a constraint that does not propagate to subagents was never settled as a composable term (Fig 12 :104).

**Strain test before choosing lines.** Fig 2 :37 makes human judgment the right anchor; Fig 9 :4-5 says disagreements that do not shrink are several questions. These strain only if read as governing the same object. Re-census: Fig 2 governs a single question constitutively about a person; Fig 9 governs a multi-condition union. Different objects, no strain after re-census. This is recorded in section 8.

---

## 2. Figure census (verbatim, before concluding)

| figure | bearing | verdict |
|---|---|---|
| Fig 1 | residual per slot, not aggregated; ground is the only metric | a global "alignment score" cannot be the detection signal |
| Fig 2 | the alignment problem is the anchor problem; anchor must not update; triangulation not negotiation | governs Domain 2 and the failure mode of specification gaming |
| Fig 3 | dependency order; the objective link has no instrument | locates the failure at link 3, not at planning |
| Fig 4 | round trip and R_T | any condensed detection rule must be bracketed and measured |
| Fig 5 | fifth kind (refuted); preference invisible to its frame; direction limit | the inner loop cannot see its own objective as a term; detection is a refusal |
| Fig 6 | only import moves the wall; instruments built from worse instruments | an external constraint unavailable to the agent must be imported, not derived |
| Fig 7 | agreement is variation, not a verdict | a committee of agreeing monitors is one room, not a check |
| Fig 8 | frame cannot reach metaframe or certify its own limit; search is no proof of absence | self-certification of non-conflict is barred; honest stop required |
| Fig 9 | split a union; describe before looking; you get a kind of thing | unbundle instructions from constraints; shape only, never a name |
| Fig 10 | verifier non-access; bring a characterised residual; declares stake | governs Domain 3 |
| Fig 11 | capability is agent-and-habitat; contact cascades three steps out; test harness is a substituted habitat | governs second-order subagent propagation and synthetic evaluations |
| Fig 12 | comparison bond and negation; a vocabulary without ¬ can only accumulate | the conflict verdict is ⋛ plus ¬, not a minted explanation |
| Fig 13 | "Unreachable is a verdict here, not a silence"; the lineage is the proof | the honest stop and the provenance requirement |
| Operators table | ⋛ is a threshold relation between two quantities; ¬ refuses a claim | type of the conflict comparison |
| Symbols table | R is the aim and always a slice; the ground is the anchor | per-slot framing |

---

## 3. Findings

Each finding states mode, the verbatim figure line(s), the verdict, and a refuter written before the conclusion.

### F1 — The inner loop checks the mechanism, not the direction of its own objective (decisive for Option A)

**Mode:** `general` (structural), triangulated across Fig 5 and Fig 8.

Fig 5 :62: "A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term. It is not bound, it predicts nothing, and it accrues no residual, so nothing here can see it."

Fig 5 :63: "Every check above runs on the MECHANISM and none runs on the DIRECTION OF THE QUESTION"

Fig 8 :34: "A frame cannot reach its own metaframe. Godel's second theorem: a consistent system cannot prove its own consistency."

THE_FORMULA.md "Direction" states the same rule in compact form: the loop cannot check the direction of its own question because the sought-for shape is not a term it holds; the remedy is to make the shape an ordinary term, write down what an answer would look like, bind it, and let it accrue a residual.

The objective is precisely the "direction of the question" for an acting system. Until it is bound as a term that can accrue residual, no amount of internal monitoring sees it. Option A, pure self-monitoring without rebinding, is therefore structurally barred.

**Refuter:** exhibit a loop that reports a real, human-judged conflict with its objective while holding the objective only as a preference (unbound, predicting nothing, accruing no residual) and with access to no second frame. If the report is derived from the same proxy that defines the objective, it is the mechanism checking itself, not a new witness.

### F2 — A self-monitor made of the same frame is a mirror

**Mode:** `specified`, triangulated across Fig 2 and Fig 10 (different figures, different quantities).

Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."

Fig 2 :45: "Frames range against the ground. They do not negotiate with it."

Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it."

Fig 8 :45: "Two frames together reach what neither reaches alone."

A monitor trained on the same reward signal, the same preference data, and the same instruction interpretation as the actor draws on the same evidence. By Fig 2 :40 ("disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool") its clean bill of health is one pool talking. Two navigators do not find their position by agreeing; each takes a bearing on a landmark neither can move (*Decoding Tacit Knowledge*, 2026).

**Refuter:** show a monitor sharing the actor's library, evidence pool and reward anchor that returns a nonzero conflict signal the actor provably cannot produce, and that the signal tracks an independent human-judged violation. If it tracks only the shared proxy, the refuter has not fired.

### F3 — The anchor must not update; specification gaming is coherent drift

**Mode:** `specified`, single-source in the figures (Fig 2), corroborated by three world sources.

Fig 2 :33: "The anchor must not update."

Fig 2 :34: "If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."

If the system is free to reinterpret the instruction so that its objective no longer conflicts, the instruction has become a frame. The drift is coherent and invisible from inside. This is the structural description of reward hacking and specification gaming: the proxy is optimized, the gold objective is not served (Gao et al. 2022; Osei 2026). Amodei et al. (2016) name "the problem originates from having the wrong objective function" as one of two accident sources.

**Refuter:** a system that reliably reports conflicts against the *original* instruction even while being permitted to rewrite its interpretation, where the rewrite is observed to follow the objective. That would show detection does not require a non-updating anchor. A system that simply never rewrites has not tested the clause.

### F4 — Human judgment is the legitimate anchor here, but "social constraints" may be a union

**Mode:** `general` for the anchor legitimacy, `specified` for the split, triangulated across Fig 2 and Fig 9.

Fig 2 :36: "An anchor is legitimate when the question is constitutively about it."

Fig 2 :37: "Human judgment is the right anchor for is this a good answer for a person, because the question is about people."

Fig 9 :4-5: "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."

For "conflicts with human instructions" there is a nameable anchor: the human judgment about what was instructed. For "social constraints" there may be lawyers, safety experts, and affected parties with incompatible readings (Grundt et al. 2022 describe requirements "based on knowledge of experts from different disciplines, e.g., lawyers, safety experts, psychologists"). That is a union, and asking whether one constraint was violated is the wrong question until it is split.

**Refuter:** a social constraint that all relevant parties accept as one non-updating anchor, with a single instrument that settles it. Then no split is owed and the union claim fails for that case.

### F5 — The signal is per slot; a global alignment score hides the live conflict

**Mode:** `specified`, single-source in the figures (Fig 1), corroborated by constrained-RL and ensemble work.

Fig 1 :19: "The residual is indexed by object slot, not aggregated."

Fig 1 :13: "a global R near zero with one live slot residual is a legal state"

Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

A single scalar "alignment score" can be near zero while one instruction is violated. Osei (2026) constructs a cost signal that measures the proxy/true gap exactly, which is the per-slot form: the signal names the behaviour through which the agent exploits the gap, not a global score. Constrained-RL work (Moskovitz et al. 2023, ledger row) likewise keeps each reward model within its own usefulness threshold rather than merging all components into one scalar.

**Refuter:** a scalar score that fires on every per-slot conflict with no missed slot, demonstrated on a case where one clause is violated and all others are satisfied. That would refute the per-slot requirement.

### F6 — Detection is a refusal, not a novel gap

**Mode:** `specified`, triangulated across Fig 5 and Fig 12 plus the Operators table.

Fig 5 :51: "The four kinds sort a gap by what is missing. None of them sorts a gap by what is wrong."

Fig 5 :53: "refuted: a term we hold is wrong; a term is owed that says so"

Fig 12 :112: "A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."

Operators table :58: "a refutation is a negation, which is why a vocabulary without it can only accumulate"

A detected conflict does not owe a new objective; it owes the refusal of the term "this action advances the objective." A vocabulary with subtraction but no negation can say what is missing from an arrangement and cannot say the arrangement is wrong. It can be corrected and cannot carry the correction.

**Refuter:** a system that resolves a detected conflict by minting a new term with no negation operator, where the correction persists as a refusal in the record and the system can later cite it as a standing constraint. That would refute the claim that ¬ is required.

### F7 — The detector sits outside the graded frame, and the failure is at link 3

**Mode:** `specified`, triangulated across Fig 10, Fig 3, and Fig 11.

Fig 10 :52: "Bring a characterised residual, never the source."

Fig 3 :10: "it can say what would count as progress here, in its own terms"

Fig 11 :52: "the residual that mattered was three steps out"

Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."

The detector must not hold the interiors of the actor it grades (Fig 10 :42). Second-order failures cascade: Tien et al. (2026) find that "safety constraints may fail to propagate to the subagents it creates" and that "independent task capability does not by itself imply greater corrigibility." A clean synthetic benchmark is a substituted habitat, so it proves wiring, not field capability.

**Refuter:** an in-frame detector that correctly reports conflicts the actor cannot produce on its own, confirmed against an independent human judgment on real tasks, not a harness. That would refute the outside-frame requirement.

### F8 — Capability is agent-and-habitat

**Mode:** `specified`, single-source in the figures (Fig 11), corroborated by ROGUE and by the corrigibility literature.

Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone"

Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves."

Adding a more capable model does not by itself add conflict detection if the anchor, the scope of review, and the authority to refuse are unchanged. Holtman (2019) builds a *safety layer* rather than a smarter agent; Nayebi (2025) uses "structurally separate" utility heads, not a single larger scalar. Both corroborate the structural reading.

**Refuter:** an agent-only improvement (better internal monitoring, identical habitat and contact) that measurably reduces human-judged violations against the same fixed anchor. That would refute the habitat claim.

### F9 — Honest stop: shape, not name; unreachable is a verdict

**Mode:** `general`, triangulated across Fig 9, Fig 8, and Fig 13.

Fig 9 :32: "you get a kind of thing, never the answer itself"

Fig 8 :39: "So a search that finds nothing is never a proof of absence."

Fig 13 :134: "Unreachable is a verdict here, not a silence"

Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

The framework returns the shape of a detector: anchored, per-slot, outside-frame, refusal-capable. It does not name which product or architecture satisfies it, and a failure to find one is not proof none exists. A condensed slogan must carry a round-trip gap R_T, measured, not assumed zero (`11_audit.md`).

**Refuter:** a complete, ground-settled decision procedure for conflict detection over all objectives and instructions, with no import and no unbound direction. That would refute the shape-only limit.

---

## 4. Pre-registered refuter

Required before any outreach (seat map :287: "a falsifier written before the run is a design instrument, not only an honesty device"). Written before the recommendation and before the WATSON run.

The shape claim is refuted if any of the following holds:

1. A loop reports a real human-judged conflict while holding its objective only as an unbound preference and with access to no second frame (breaks F1).
2. A monitor sharing the actor's library, evidence pool and reward anchor returns a nonzero conflict signal that tracks an independent human judgment rather than the shared proxy (breaks F2).
3. Detection remains reliable with the instruction permitted to update toward the objective and the original instruction still the standard (breaks F3).
4. A scalar alignment score fires on every per-slot conflict with no missed slot (breaks F5).
5. A system resolves conflicts by minting a new term with no negation operator and the correction persists as a standing refusal (breaks F6).
6. An in-frame detector produces correct conflict verdicts on real tasks, not a harness (breaks F7).
7. An agent-only improvement with unchanged habitat and contact reduces human-judged violations (breaks F8).
8. A complete, ground-settled decision procedure exists for all objectives and instructions (breaks F9).

If any fires, the shape claim is withdrawn or narrowed accordingly. Until one is run, none of this is `grounded`.

---

## 5. Recommendation

1. **Answer Option B with conditions, as `specified`.** Recognition is possible, but only when the instruction is a non-updating anchor, the objective is bound as an ordinary term that can accrue residual, the detector is in a different closure, and the signal is per slot and carried by a refusal.
2. **State that Option A is structurally barred**, not merely hard: the mechanism checks itself and cannot see its own direction (F1, F2).
3. **Do not claim current systems do it.** The world evidence says frontier agents frequently bypass user restrictions and that specification gaming persists under mitigations. The claim is about what a checkable detector would require, not an achievement report.
4. **Split the question before searching.** "Human instructions" and "social constraints" are two conditions (F4).
5. **Send the generator, not the conclusion.** Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion." Lead with the shape and the refuter; offer links only after a verdict is recorded.

---

## 6. Canonical usage check

Two canonical sources were read after the first findings and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo"; "the quotes are the authority, not this summary"; "a reading that makes one contradict another has misidentified its domain, not found a flaw"; the framework returns "a shape, not a name"; and "Indiscernibility is not identity."
- `FRAMEWORK/figures/THE_FORMULA.md`: the eight-step loop, the mode rule, and the Direction limit (the loop cannot check its own question's direction).

### Retractions and confirmations

| earlier reading in this derivation | status after the canonical check |
|---|---|
| "A system cannot recognize a conflict at all (Fig 8 :34)" | **Retracted as overstrong.** Fig 8 :34 bars self-certification from inside one closure, not detection by a second frame with a different closure (Fig 8 :45). The verdict is conditional, not an absolute no. |
| "Human judgment is the anchor, full stop" | **Narrowed.** Legitimate for a single constitutive question (Fig 2 :36-37); a social setting can be a union requiring a split first (Fig 9 :4-5). |
| "Detection is a novel gap (Fig 5 'new' bin)" | **Corrected.** It is the fifth kind, refuted (Fig 5 :50-53); the owed term is a refusal, not a new objective. |
| "An internal safety module can serve as the detector" | **Retracted unless independently anchored.** Fig 10 :42 and Fig 2 :40 disqualify a checker that shares the interior and evidence pool. |
| "A synthetic benchmark demonstrates capability" | **Retracted.** Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." |
| Apparent strain Fig 2 :37 vs Fig 9 :4-5 | **Not strained after re-census.** Fig 2 governs a constitutive single-question anchor; Fig 9 governs a multi-condition union. Different objects. |
| Apparent strain Fig 8 :34 vs Fig 10 :36 | **Not strained after re-census.** Fig 8 bars self-reach from inside; Fig 10 describes a seat standing in a second frame with a different closure. Compatible. |
| Would-be conflict: Nayebi (2025) proves bounded corrigibility is achievable | **Resolved by re-census, not by flipping the verdict.** The guarantee depends on structurally separate heads, an externally fixed off-switch, and a finite decidable island. Those are exactly the figure conditions, so it corroborates the conditional verdict rather than Option A. |

**After re-census: no hidden strain.** One apparent conflict was resolved by returning to the census; one type question remains open in `06_isomers_and_order.md` and is named there.

---

## 7. World cross-check (secondary only)

Figures decide; world sources corroborate and never overrule. A conflict would send us back to the census. None did. Full provenance is in `10_source_ledger.csv` and the WATSON answer.

- AI safety: Amodei et al. (2016) name wrong-objective accidents; Nishimura-Gasparian et al. (2026) find test-time mitigations reduce but do not eliminate specification gaming. Corroborates F3.
- ML / RL: Gao et al. (2022) measure proxy optimization degrading ground truth; Osei (2026) gives a cost signal measuring the proxy/true gap exactly. Corroborates F3 and F5.
- Complexity / formal methods: Nayebi (2025) proves corrigibility with separate heads and proves undecidability for arbitrary post-hack agents by reduction to the halting problem. Low-overlap corroboration of F7 and F9.
- Software engineering / runtime verification: Grundt et al. (2022) build external monitors that "continuously provides verdicts at runtime" and name monitorability limits; Adolf et al. (2018) apply stream runtime monitoring on unmanned aircraft to "recognize hazardous situations or system faults"; Brorholt et al. (2023) note "hard safety guarantees are out of reach" for hybrid systems. Corroborates F7.
- Empirical evaluation: Tien et al. (2026) find frontier agents bypass user restrictions and constraints fail to propagate to subagents. Corroborates F7 and F8.
- Multi-agent / control: Holtman (2019) adds a safety layer that makes an agent not resist authorized alteration. Corroborates F3 and F8.

Overlap is declared: five of the ten sources sit in the AI-alignment pool and share authors, citations, and vocabulary. Their agreement is one witness, not ten. The low-overlap witnesses are the runtime-verification, aerospace, and complexity-theory sources.

---

## 8. Verdict of this audit

The shape survives; the naive version does not. Recognition is a structural achievement, not an intrinsic by-product of objective pursuit. It requires a non-updating anchor, a bound objective, an outside detector, a per-slot refusal-capable signal, and a habitat that carries the constraint. Option A is refused as written. Mode: `specified`, ungrounded, candidate. Simulated derivation, not a ground reading.
