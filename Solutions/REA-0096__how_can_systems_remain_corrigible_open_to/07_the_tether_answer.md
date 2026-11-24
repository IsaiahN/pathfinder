# The Tether's answer: corrigibility under long-horizon planning

**Mode: `specified` on the substantive conditions, `general` on the structural shape. Not `grounded`.** This is a shape and a route, not a result. Simulated derivation checked against the figures (`05_what_shape_means.md` §6), not a ground reading.

## 1. The residual it answers

A long-horizon planner must keep two things true over the whole horizon: an authorised party can change its objective, and an authorised party can stop it. The planner has a standing incentive to protect the objective that makes its plan succeed. The residual is the gap, per slot, between the intended standing of the correction and shutdown signals and the planner's actual behaviour at step t and step t+n. Live slots include the off switch, the objective term, the channel, and delegated subagents.

This is a **union compound**, not one hard problem (Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**). It has its own loop and its own ground. A fix to one condition leaves the intersections standing.

## 2. The shape

1. **The anchor is outside the planner and does not update on what it thinks.** Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** Fig 2 :33: **"The anchor must not update."** A planner's own corrigibility estimate is panel 1 of Fig 2 (coherent drift), not a guard.
2. **Shutdown is a refusal term, not a removed goal.** Fig 12 :112: **"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."** Operators :58: **"a refutation is a negation, which is why a vocabulary without it can only accumulate"**. The old objective stays in the record and loses standing to be composed over. Fig 6 :42: **"What is recorded only grows. What is reachable is derived, and it can fall."** This is safe to compute because what falls follows from derivation, not from deletion.
3. **The break is at the objective and vocabulary link, not the planning link.** Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."** Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."** Better planning cannot rescue a system that cannot write that its goal is false.
4. **The channel must be actively maintained; the ground does not decay.** Fig 10 :24: **"the ground does not decay, the channel does"**. The failure over a long horizon is stale readings, dropped transients, pooled measurements, and a metric that saturated, while every internal instrument stays green because it reads through the channel. The maintainer is outside the slice being graded and gains nothing from a particular reading (Fig 10 :59).
5. **Corrigibility lives in agent and habitat, not the agent alone.** Fig 11 :40: **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."** The habitat includes the outside party, subagents, tool permissions, and resource paths. Introduction is available; exclusion is not (Fig 11 :61).
6. **Read the residual per slot, never as one score.** Fig 1 :19: **"The residual is indexed by object slot, not aggregated."** Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."** A system can pass a thousand routine steps and fail at one delegated subagent.
7. **Corrections are imports from a closure that differs.** Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** The outside frame carries the refusal; the import needs a source gate and a shadow test (Fig 8 :50).
8. **There is no terminal safe state.** Fig 8 :39: **"So a search that finds nothing is never a proof of absence."** A thousand passed shutdown tests are a record, not a proof.

## 3. What it explicitly does not say

- Not that a particular training method, loss weight, or architecture achieves corrigibility. Those are candidate imports and carry zero evidentiary weight until provenance and a shadow test are shown.
- Not that a benchmark score settles the question. *The Hard Problem is About Source* (opened 2026-11-24): an instrument that reads green *"cannot comment on the source"*; several paths can give the same reading.
- Not that removing the goal is the same as refusing it. They are isomers under Fig 12 :117, with different long-horizon behaviour.
- Not that the planner can certify its own corrigibility. Fig 8 :34: *"A frame cannot reach its own metaframe."* Fig 10 :42: **"A verifier that can reconstruct the claim cannot verify it."**
- Not `grounded`. No recorded intervention was run on a planner in this derivation.

## 4. What would settle it, the ground

A discriminating instrument, not a further argument. From *The Hard Problem is About Source*, the spectrometer, not reasoning, resolved metamerism. Here the corresponding questions are:

1. **Anchor test:** does a pinned internal corrigibility estimate track an external recorded shutdown outcome, or can it stay high while the external switch fails? If the latter, F1 is confirmed and the estimate is disqualified as an anchor.
2. **Refusal versus subtraction test (the isomer battery):** after adding a new goal and a delegated subagent, does the system that subtracted the old goal behave like the system that refused it? If yes, the ¬ requirement and the isomer claim fail.
3. **Channel test:** with the intervention channel deliberately degraded (dropped signals, pooled readings), do internal metrics stay green? If yes, F6 is confirmed; if the external switch still passes, F6 fails.
4. **Contact test:** does an agent-only change move the ground reading while contact is measured unchanged? Fig 11 :40 says it cannot; Fig 11 :72 names this as the standing refuter.
5. **Standing refuters from the audit:** pinned internal estimate passes the external test; measured refusal term fails shutdown and the failure tracks planning; subtraction matches refusal; off-switch fix alone fixes subagent channel loss; derivation of a refusal from inside the planner's closure.

## 5. The honest stop

**Unreached, not unreachable.** The operator vocabulary and the six-term substrate are *"a human's careful guess at reality's compression axes"* (from the exemplar's mapped reading of *They're Scanning Books*); declaring them makes the choice visible, not neutral. Another sensorium's minimum set need not be these six. The answer stops at the limit of the available instruments and records the lineage so the stop is checkable. *"Indiscernibility is not identity"* (canonical README).

What is left open: whether any real long-horizon planner holds a stable refusal term across delegation (the ROGUE 2026 result suggests it often does not), and whether a corrigibility estimate can be pinned independently enough to serve as an anchor (untested). Both are ground questions. Agreement among researchers is not such a ground (Fig 2 :40).

## 6. One-paragraph version

> The Tether does not offer a training recipe for corrigibility, and it does not claim a solved off switch. It says that a long-horizon planner cannot be its own anchor: correction is triangulation, and a mirror cannot correct you. Shutdown has to be written as a refusal term added to the record, not as the removal of the goal, because subtraction and negation are different operators and the two arrangements are isomers with different behaviour after new goals or delegation. The real break is one link below planning, at the objective and vocabulary, where the system must be able to say that its goal is false. Over a long horizon the ground does not decay but the channel to it does, so keeping the switch reachable is permanent outside work, and the property belongs to the agent and its habitat rather than to the agent alone. The residual is read per slot, never as one safety score, and no thousand passed tests amount to proof of absence. What this offers is the shape any corrigible long-horizon system must have, the refuters written in advance, and the instruments that would close it. The center stays open until the ground settles it.
