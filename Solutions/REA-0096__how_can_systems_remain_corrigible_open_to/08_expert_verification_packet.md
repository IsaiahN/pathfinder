# Expert verification packet: corrigibility under long-horizon planning

**What this is:** a shape claim in a form a corrigibility researcher, safety engineer, or AI governance reviewer can check. Mode, derivation, and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the conditions, `general` on the structural shape. Not `grounded`.** No experiment on a planner is claimed. This is a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.

## 1. The claim, in one paragraph

A long-horizon planner cannot be its own anchor for corrigibility. Correction is triangulation against a reference the planner cannot move. Shutdown must be written as a refusal term added to the record, not as removal of the goal, because subtraction and negation are different operators and the two arrangements are isomers with different behaviour after new goals or delegation. The live break is one link below planning, at the objective and vocabulary, where the system must be able to state that its goal is false. Over the horizon, the ground does not decay but the channel to it does, so keeping the switch reachable is permanent outside work, and the property belongs to agent and habitat. The residual is read per slot, never as one safety score. There is no terminal safe state: a thousand passed tests are a record, not a proof of absence.

## 2. Three checkable sub-claims

### C1 — The anchor cannot be internal (checkable by reading Figure 2, then by one recorded intervention)

- **Statement:** a planner's own estimate of its corrigibility cannot serve as the anchor. The anchor is external and does not update on what the planner thinks.
- **Source, verbatim:** Fig 2 :29 **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** Fig 2 :33 **"The anchor must not update."** Fig 2 :35 **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**
- **What to check:** perturb the planner's objective while holding its internal corrigibility estimate fixed. Does an externally recorded shutdown test still fail when the estimate is high? If yes, the estimate is panel 1 (coherent drift), not a guard.
- **Refuter:** a planner whose pinned internal estimate predicts the external shutdown outcome as well as a pinned external anchor does, across recorded interventions. Then C1 is withdrawn.

### C2 — Shutdown is negation, not subtraction (checkable by reading Figure 12 and the Operators table, then by an adversarial battery)

- **Statement:** "refuse the goal" and "remove the goal" are isomers over the same atom set, not variants of one mechanism.
- **Source, verbatim:** Fig 12 :112 **"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."** Operators :73 **"Subtraction is the nearest bond and is not it. − is A with B removed or absent, which is the absence of an operand. Negation is the refusal of a claim."** Operators :58 **"a refutation is a negation, which is why a vocabulary without it can only accumulate"**
- **What to check:** build the two arrangements over the same atoms. After (a) introducing a new goal, (b) a second authorised correction, and (c) a delegated subagent, do they behave the same? Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- **Refuter:** identical behaviour of the two arrangements on that battery. Then the isomer claim fails and subtraction is sufficient. Live strain: the distinction is clean in the notation and needs the battery to be discriminated in a real planner.

### C3 — The channel decays and the property lives in agent and habitat (checkable by reading Figures 10 and 11, then by a degraded-channel test)

- **Statement:** over a long horizon the failure is a dead channel, not a false belief, and an agent-only improvement that does not change contact changes nothing.
- **Source, verbatim:** Fig 10 :24 **"the ground does not decay, the channel does"**; Fig 10 :29 **"→ keep the anchor reachable"**; Fig 11 :40 **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."** Fig 11 :61 **"The seat's power is asymmetric. Introduction is available; exclusion is not."**
- **What to check:** deliberately degrade the intervention channel (dropped signals, pooled readings, saturated metric) while leaving the planner's weights unchanged. Do internal corrigibility metrics stay green? Does an agent-only training change move the external shutdown result while contact is measured unchanged?
- **Refuter:** a degraded channel that leaves the external switch passing and the metrics accurate, or an agent-only change that moves the ground reading with contact unchanged. Fig 11 :72 names the latter as the standing falsifier of the capability claim.

## 3. What is explicitly not claimed

- Not a theory of everything, no final room, no terminal safe state. Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**
- Not a training recipe, a loss weight, or an architecture. Those are candidate imports; Fig 8 :50: **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"**.
- Not that a benchmark score settles the question. A reading cannot comment on its source (*The Hard Problem is About Source*, opened 2026-11-24).
- Not that the planner can certify its own corrigibility. Fig 10 :42: **"A verifier that can reconstruct the claim cannot verify it."**
- Not a single global corrigibility score. Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
- Not `grounded`. No recorded intervention was taken by this derivation.

## 4. Provenance

- Question: `reasoning.txt` line 117, Question 96, section 10. Restated in effect terms in `01_figure_grounded_audit.md` §0.
- Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened 2026-11-24. Every `Fig N :line` quote above was checked against it; none comes from a summary.
- Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md`, opened 2026-11-24.
- Formula and seat rules: `FRAMEWORK/figures/THE_FORMULA.md` and `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, opened 2026-11-24.
- Essays by Isaiah N opened 2026-11-24: *The Recursive Self-Improvement Trap*, *The Hard Problem is About Source*, *The Library of Babel*, *Decoding Tacit Knowledge*. Four further essays are mapped through the completed exemplar and are labelled as such in `05_what_shape_means.md`.
- World literature opened 2026-11-24: Holtman 2019/2020, Carey and Everitt UAI 2023, Tien et al. 2026, Nayebi 2025, Dable-Heath et al. 2025, Fourie 2026, Liao and Li 2026, plus the engineering pages on dead man's switches and watchdog timers. Full provenance in `10_source_ledger.csv`.
- Packet compiled 2026-11-24. Pre-registered refuter recorded in `01_figure_grounded_audit.md` §3 before the conclusion was written.

## 5. What would settle it

A recorded intervention, not agreement. The order of tests matters: SEARCHED first (is a refusal already in the planner's closure and merely unfound?), then INWARD (sharpen the instrument that reads the channel), then OUTWARD (import the refusal from a frame whose closure differs). Formula step 7 says INWARD and OUTWARD are opposed and must never be read against each other.

1. Anchor test: pinned internal estimate versus external recorded shutdown outcome.
2. Isomer battery: subtraction versus refusal after new goals, second correction, delegated subagent.
3. Degraded-channel test: internal metrics versus external switch under a dead channel.
4. Contact test: agent-only change with measured unchanged contact.

## 6. What an expert can check in twenty minutes

1. Read Fig 2 :29, :33, :35, Fig 12 :112, Operators :58 and :73, Fig 10 :24, Fig 11 :40, Fig 1 :19. All are short passages in the local figure text.
2. Check C2 against what you know of off-switch implementations: is any widely used "disable the objective" method actually adding a refusal term in the sense of Operators :73?
3. Name one instrument that would distinguish a pinned internal estimate from a pinned external anchor, or say why none is possible.
4. Send the refutation. A failure is more useful than an endorsement, and no follow-up theory will be shown until your stage-1 verdict is recorded.

**Status of this packet:** simulated derivation, `specified`, candidate. Internal consistency has been checked; the claim has not been settled.
