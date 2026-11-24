# The Tether's answer: what makes a multi-step inference reliable

**Mode: `specified` on the conditions, `general` on the shape. Not `grounded`.** This is a shape and a route, not a result. Simulated derivation checked for internal consistency against the figures (`05_what_shape_means.md` §6), not a ground reading.

## 1. The residual it answers

A chain of k steps, each emitting a claim and an uncertainty, must end at a conclusion that is answerable to the ground. The contact failure is not "steps have error"; it is that a downstream consumer cannot tell a chain that reached the ground from a chain that drifted coherently when every local reading is a per-step residual and a final answer. Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."* Reliability is a union compound, not one hard number.

## 2. The answer, in six conditions

1. **Keep the residual per slot and per link.** Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* A single final confidence is a reporting convenience, never the settling signal. Verdict: `triangulated` across Fig 1 and the Symbols table.

2. **Instrument the dependency break, especially the middle link.** Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* Fig 3 :25-26 names the middle link (having terms for what a situation affords and saying what counts as progress) as the one with neither obvious failures nor obvious tests. Verdict: `triangulated` across Fig 3 and Fig 13's carried remainder.

3. **Settle each step before composing over it.** Fig 12 :104: *"A settled molecule becomes an atom for whatever composes over it."* Fig 12 :106: *"Nothing composes over what was never admitted as a part."* Fig 13 :31-32: *"a remainder compounding through a chain that amplifies is chaos"*. An unsettled step is not a safe operand. Verdict: `triangulated` across Fig 12, Fig 13 and the three guards in Fig 5.

4. **Measure both factors of the handoff.** Fig 7 :26: *"Progress per handoff: R = h² × S"*; Fig 7 :37: *"Progress per handoff has two factors. Zero either and the chain runs in place:"*; :38 *"the bracket's fidelity across the handoff"*; :39 *"the ground's pressure on the room"*. Verdict: `single-source` for the explicit product (Fig 7), corroborated structurally by Fig 3's dependency order.

5. **Buy independence and pin the anchor.** Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."* Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 7 :36: *"A chain of mirrors is one long room."* Verdict: `triangulated` across Fig 2, Fig 7 and Fig 8.

6. **Keep the checker outside the interior and read the lineage.** Fig 10 :42: *"A verifier that can reconstruct the claim cannot verify it."* Fig 10 :52: *"Bring a characterised residual, never the source."* Fig 11 :40: *"An improvement that does not change contact changes nothing, however much it improves."* Verdict: `triangulated` across Fig 10 and Fig 11.

**What this adds up to:** reliability is a property of the chain **together with** the habitat and ground it contacts, carried per slot, settled step by step, handed off with bracket fidelity times ground pressure, and checked from outside against an anchor that does not move. Fig 11 :39: *"capability is a property of agent-and-habitat, never of the agent alone"*.

## 3. What it explicitly does not say

- Not that more steps make a chain reliable. More steps allocate more computation; Fig 12 :125: *"A composition costs in two currencies, and they do not add."*
- Not that sampling many chains and voting settles the question. Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*
- Not that a single confidence number is forbidden for reporting. It is forbidden as the settling signal (Fig 1 :22).
- Not that a chain can certify its own stop. THE_FORMULA: *"the loop stops only when R stops arriving, which is either a perfect prediction or a closed channel, and from inside those look the same."*
- Not `grounded`. No measurement was taken in this derivation.
- Not a claim that the world literature is wrong. It is secondary corroboration: process supervision, per-step verification and step-wise diagnosis are instances of conditions 1, 3 and 6, arrived at in a different closure.

## 4. What would settle it - the ground

A source-discriminating instrument, not a further argument. *The Hard Problem is About Source*: a colour instrument *"cannot comment on the source"*, and the case was settled *"not by argument, but by the arrival of a better instrument."* The corresponding tests here are:

1. Does a per-slot residual report detect failures that a final confidence misses on a labelled set? If not, condition 1 falls.
2. Does instrumenting the middle link change final reliability where adding compute above it does not? If not, condition 2 falls.
3. Does an unsettled intermediate degrade the final claim across runs, and does settling it recover the claim? If not, condition 3 falls.
4. Are bracket fidelity and ground pressure separately measurable, and does zeroing either stop progress? If not, condition 4 falls.
5. Does an independent pinned anchor disagree with a single-model majority vote on a shared systematic error, and is the anchor right? If not, condition 5 falls.
6. Does denying the checker the generator's interior change its error-detection rate? If not, condition 6 falls.

Plus the eight pre-registered refuters in `01_figure_grounded_audit.md` §5, written before the world search.

## 5. The honest stop

**Unreached, not unreachable.** Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* Fig 13 :134: *"Unreachable is a verdict here, not a silence"*. The answer stops at the limit of what the available instruments distinguish and records the lineage so the stop is checkable. *"Indiscernibility is not identity."* One limit is live and named: from inside, a chain cannot tell a perfect prediction from a closed channel. No amount of internal checking removes it; only a ground outside the loop can.

## 6. One-paragraph version for outreach

> A multi-step inference is reliable for a structural reason, not a numerical one. Its residual must be kept per slot and per link, because averaging across slots is how a live failure signal disappears. The link that matters first is the uninstrumented middle one, where a system decides what counts as progress, because optimising a link that already works cannot rescue one that does not. Each step must be settled against a ground before the next composes over it, since a remainder compounding through an amplifying chain is chaos. Progress per handoff is the bracket's fidelity times the ground's pressure, and zero either and the chain runs in place. Finally, the checker must range against an anchor that does not move and must not be able to reconstruct the claim it checks. Sampling more chains or reporting higher confidence is a budget filter, not a witness for the verdict. What remains open is the one thing a chain cannot see from inside: whether its residual stopped because the prediction was perfect or because the channel closed. That is why the answer is a shape with refuters, not a certificate.
