# Figure-grounded audit: what makes a multi-step inference reliable

**Mode of this document: `specified`, not `grounded`.** It states conditions that would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status: simulated derivation, not a ground reading.** The Recursive Self-Improvement Trap records that LLM output is simulacra and that *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources for figure lines:** `FRAMEWORK\reference\03-FIGURES_TEXT.md`, the verbatim extract with line numbers, plus `FRAMEWORK\figures\THE_FORMULA.md`, `FRAMEWORK\reference\FIGURES_README_canonical.md` and `FRAMEWORK\reference\60_FIGURES_AS_METALAWS.md`. Every figure quote below was reopened in the extract this session. World sources are secondary and are not used to choose a verdict.

---

## 0. Proposal header (seat reasoning, five lines)

```
DECIDES:    Reliability is not a property of one step or of the number of steps. It is a
            property of the chain as a composition with contact: per-slot residual kept
            unaggregated, each link's input actually arrived and was measured, each step
            settled before it becomes an atom the next composes over, bracket fidelity
            times ground pressure, and an outside verifier that cannot reconstruct what
            it checks (Fig 1 :19, Fig 3 :27, Fig 12 :104, Fig 7 :26, Fig 10 :42).
            A = B? No. "More compute" and "more reliable" answer different questions:
            one spends a budget, the other changes contact.
HOURS:      Audit 2-3, supporting derivations 2, world search and ledger 2, packet and
            second seat 2. Simulated, so these are agent-hours, not ground readings.
PRIOR CASE: QMGR-0037, the GR/QM composition. It supplied the retraction discipline,
            the shape-not-a-name limit and the round-trip gap R_T used in §5 and `11_audit.md`.
ANALOGUE:   Library of Babel searcher: describe the residual in effect terms, bootstrap
            terms by proximity, stop at a shape. Society of agents: one room per problem,
            commons of methods only, ground under all. Here: one room per link.
LIMIT:      The loop cannot tell convergence from a closed channel from inside
            (THE_FORMULA: "the loop stops only when R stops arriving, which is either a
            perfect prediction or a closed channel, and from inside those look the same").
            A chain cannot certify its own reliability. The verdict stays `specified`.
```

---

## 1. The residual, stated in effect terms

A multi-step inference is a chain of k steps. Step i consumes the output of step i-1, holds a belief b_i and an action a_i, predicts Γ(b_i, a_i), observes o'_i, and carries a residual R_i = |Γ(b_i, a_i) − o'_i| into step i+1 (formula step 1; Symbols table :38: *"It is the aim, not only the error signal"*). The question asks what makes the final claim reliable when every R_i may be nonzero.

Two readings are possible and they are not the same question:

- **Budget reading (filter):** how do we make each R_i smaller, or mask it by sampling many chains? This is spend, not verdict. Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*
- **Verdict reading (the actual residual):** what conditions let a downstream consumer distinguish "the chain reached the ground" from "the chain drifted coherently" when its only local readings are per-step residuals and a final answer? Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*

The residual is the verdict reading. An answer would look like a set of separately checkable conditions on the chain, each with a refuter, such that violating any one removes the claim to reliability. This binds the sought-for shape as an ordinary term before the run, which is the formula's "Direction" remedy.

---

## 2. Domain census (before choosing any figure line)

R by arity, symmetry, scale. Arity: a chain is k ordered operands joined by sequence (→) and production (⇒), which are ordered bonds (Fig 12 :73, *"no"* for → symmetry). Symmetry: reordering steps changes the term, so the chain is not commutative; Operators table :34: *"the only bond a flat chain can express, so every term today is a sequence whether or not it should be"*. Scale: each settled step becomes an atom for the next (Fig 12 :104), so the chain is multilevel and reliability must be checked at each handoff, not only at the end.

| domain | actors | currency | anchor | no anchor? |
|---|---|---|---|---|
| A: the single step | b, a, Γ(b,a), o', R on slot s | residual per slot, never a global scalar | the ground as the only metric (Fig 1 :23) | anchored |
| B: the chain composition | steps as molecules; →, ⇒, ⋛, −, ¬; carried residual | bracket fidelity h² and ground pressure S; progress R = h² × S (Fig 7 :26) | the ground at each link, not agreement between links | anchored |
| C: the verifier / seat | a pinned anchor, the outside frame, convention installers | independence: how little the checker draws on the generator's evidence | an anchor that does not update (Fig 2 :29) | anchored |
| D: the habitat / contact | instruments, data, peer frames, conditions, relations | contact with the residual, not internal coherence | the ground, enumerated not composed (Fig 11 :48) | anchored |

**Partition or union.** Reliability is a **union of conditions**, not a single quantity. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."* A single lever (more steps, more samples, higher confidence) clears regions where only one condition holds and leaves the intersections standing. The four domains are therefore unbundled before any figure line is chosen.

**Order by dependency (Fig 3).** Perception -> vocabulary -> objective -> planning -> learn and carry. Fig 3 :20: *"The chain is ordered by dependency, not by importance."* Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* Domain A precedes B, B precedes C in the sense that a verifier needs a lineage to read, and D sits under all three because each link ranges against a ground.

---

## 3. Figure census (verbatim, quoted before concluding)

| figure / table | bearing on the residual | verdict |
|---|---|---|
| 1 The Agent | per-slot residual; ground is the only metric; frame-internal quantities disqualified | no global confidence reading |
| 2 The Ground | anchor must not update; triangulation not negotiation; independence is a quantity | agreement between steps cannot corroborate |
| 3 Dependency Chain | status per link; break in middle; reading below the break reads nothing | reliability is a per-link property |
| 4 The Membrane | methods cross up; round trip and measured gap R_T | any condensation loses constraints |
| 5 Mint Pipeline | three guards as a product; settle then carry | a step must be settled before composition |
| 6 Closure / Reachability | import is the only operator that moves the wall; more search adds no atom | sampling is not an import |
| 7 Room Chain | R = h² × S; mirror chain is one long room; selection between rooms | chain reliability = fidelity × pressure |
| 8 Union Surplus | independence read twice; convergent derivation vs adopted import | paths must differ in closure, not just in name |
| 9 Leave / Arrive | describe residual before choosing a frame; union needs unbundling; filters vs witnesses | unbundle the four conditions |
| 10 Ground Maintainer | verifier non-access; anchor reachable; provenance is not truth | checker must not reconstruct the claim |
| 11 The Habitat | capability is agent-and-habitat; contact cascades | contact, not agent size, is the lever |
| 12 The Bond | sequence is ordered; settled molecule becomes atom; two currencies | chain is a bonded arrangement, priced in bits and actions |
| 13 Minimum Viable Set | remainder re-enters next turn; amplifying chain gives chaos | residual compounds multiplicatively |
| Operators table | → sequence; ¬ negation; a vocabulary without ¬ can only accumulate | a chain needs a refusal operator |
| Symbols table | R is the aim; per slot; R_T is the round-trip gap | definition of the measured quantity |
| THE_FORMULA | R as the per-slot gap between prediction and observation; settle; three questions at step 7 | loop structure and mode rule |

---

## 4. Findings F1 to F9

### F1 - Reliability is per slot and per link, never a global confidence (decisive)

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* Fig 1 :23: *"The ground enters as the only metric."* Symbols table :43: *"R is measured per slot, never as a single global number."*

A multi-step inference reported as one confidence number aggregates across slots and links. That is exactly how a live failure signal disappears into an average. The first condition is therefore: keep R indexed per slot and per link, and let the ground score each separately.

**Refuter:** a chain whose final reliability is tracked by a single scalar confidence that still detects every per-slot failure on a labelled test set; or a measurement in which aggregate confidence tracks per-slot residuals one-to-one. If either holds, this finding is withdrawn.

### F2 - The chain is ordered by dependency and breaks in the middle

Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* Fig 3 :20: *"The chain is ordered by dependency, not by importance."* Fig 3 :22: *"A step whose input never arrives cannot be diagnosed, only its predecessor can."* Fig 3 :23: *"It is a reading of nothing."* Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* Fig 3 :29: *"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."*

Reliability is not "more steps" or "more confident steps". It is that each link's input actually arrived and was measured. Fig 3 :25-26 says the middle link (having terms for what a situation affords, and saying what would count as progress) has neither obvious failures nor obvious tests, so it attracts the least attention and the fewest instruments. A reading taken below the break is a reading of nothing.

**Refuter:** a chain whose middle link is uninstrumented yet whose final correctness is reliably restored by adding compute above the break; or a demonstrated test that measures the middle link's status and finds it sound where the chain later fails.

### F3 - Each settled step becomes an atom; residual compounds through the chain

Fig 12 :103: *"Composition is recursive, and the level decides what is irreducible."* Fig 12 :104: *"A settled molecule becomes an atom for whatever composes over it."* Fig 12 :106: *"Nothing composes over what was never admitted as a part."* Fig 13 :28: *"They alternate, and the alternation is where both the recursion and the randomness come from."* Fig 13 :31-32: *"a remainder compounding through a chain that amplifies is chaos"* Fig 13 :88: *"The residual of the turn just closed is what the next turn composes against"*

An uncertain step is not an operand that can be safely composed over. It carries a remainder into the next turn, and a remainder compounding through an amplifying chain is chaos. Reliability therefore requires each step to be settled against the ground before the next composes over it. Nothing composes over what was never admitted as a part.

**Refuter:** demonstrate, across many runs, that an explicitly unsettled intermediate step can be composed over with no degradation of final reliability and no later ground reading; or derive a member of the six-term set from the other five, which would break the recursion claim at its base.

### F4 - Progress per handoff is fidelity times pressure

Fig 7 :26: *"Progress per handoff: R = h² × S"* Fig 7 :37: *"Progress per handoff has two factors. Zero either and the chain runs in place:"* Fig 7 :38: *"the bracket's fidelity across the handoff"* Fig 7 :39: *"the ground's pressure on the room"*

A chain advances only if the bracket survives the handoff and the ground presses on the receiving room. Zero either factor and the chain runs in place. This is the quantitative form of F3: the residual carried forward is useful only when the bracket that names it is preserved and the next link is ranged against a ground.

**Refuter:** a measured chain in which final error falls while either bracket fidelity is zero or ground pressure is zero. That would break the product form and require a re-census of the chain domain.

### F5 - Agreement between steps is not evidence; independence and a pinned anchor are

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."* Fig 7 :12-13: *"agreement compounds, evidence does not"* Fig 7 :36: *"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."* Fig 8 :47: *"Independence is one quantity read twice."*

Sampling many chains and voting helps only if the paths differ in closure, not merely in name. A chain of mirrors is one long room: handing a question along frames that agree adds vocabulary, not evidence. The anchor must not update on the frames it corrects (Fig 2 :33).

**Refuter:** a single-model majority vote that reliably beats a genuinely independent pinned anchor on cases where the model has a shared systematic error. If it does, the independence requirement is too strong and must be narrowed.

### F6 - The verifier must not be able to reconstruct what it checks

Fig 10 :42: *"A verifier that can reconstruct the claim cannot verify it."* Fig 10 :43: *"Soundness requires the checker to be unable to produce what it is checking."* Fig 10 :52: *"Bring a characterised residual, never the source."* Fig 10 :62: *"A ruling carries provenance like an atom."* Fig 8 :51: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"*

A checker given the generator's full interior has joined the frame being checked. It can grade the report against its own picture rather than against the ground (Fig 10 :51). What the checker may read is the lineage: the residual, the step provenance and the refuters, not the interiors. Provenance shows a ruling was reached legitimately, not that it was right.

**Refuter:** a checker given the generator's full interior that still independently detects a propagated error at the same rate as one denied that interior, across a held-out set. Then non-access is not the load-bearing condition it is claimed to be.

### F7 - Contact, not agent size, is the lever

Fig 11 :39: *"capability is a property of agent-and-habitat, never of the agent alone"* Fig 11 :40: *"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."* Fig 11 :48: *"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."* Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."*

A reliable chain is a property of the chain together with the habitat it contacts. Adding steps, samples or parameter count without changing what the chain can register is an agent-only improvement and changes nothing. The habitat is enumerated from the residual, never composed.

**Refuter:** an agent-only improvement that moves the ground, that is, changes what the chain can register without any change in instruments, data or peer frames. This is the refuter the figures themselves name for the capability claim (Fig 11 :72).

### F8 - Two currencies, and a budget is not a verdict

Fig 12 :125: *"A composition costs in two currencies, and they do not add."* Fig 12 :126: *"Bits price the description. Actions price finding out whether it holds."* Fig 12 :129: *"Neither figure predicts the other, so both are read or the choice is made blind."* Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* Fig 8 :45: *"Two frames together reach what neither reaches alone."*

A long chain of cheap steps is expensive to describe and may take one action to refute; a short chain over a costly operand is cheap to state and may take a whole budget to settle. Sampling more paths is a budget filter. It cannot manufacture an atom the frame lacks (Fig 6 :21: *"MINT composes inside the closure and can never add an atom."*).

**Refuter:** sample count alone moving a verdict from unreachable to reachable without importing a new atom and without changing contact. That would collapse the filter/verdict distinction.

### F9 - The residual is a union compound, and the loop cannot certify its own stop

Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."* Fig 9 :44: *"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."* Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* Fig 13 :134: *"Unreachable is a verdict here, not a silence"*

Reliability is a union of the conditions in F1 to F8, not one number. Each condition has its own loop and its own ground. The honest stop is `unreachable` or `candidate`, never a silence. And from inside, a chain cannot distinguish "R stopped because prediction is perfect" from "R stopped because the channel closed" (THE_FORMULA). That is a limit, named rather than smoothed.

**Refuter:** a single intervention that clears all four domains simultaneously with no residue in any one; or a chain that certifies from inside that its residual stopped for the right reason. Either would break the union reading.

---

## 5. Pre-registered refuter (written 2026-11-23, before the WATSON world search)

Required before any outreach: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following holds:

1. A single scalar confidence preserves every per-slot failure signal (breaks F1).
2. An uninstrumented middle link is reliably rescued by compute applied above the break (breaks F2).
3. An unsettled intermediate composes over many runs with no final degradation (breaks F3).
4. Final error falls while bracket fidelity or ground pressure is zero (breaks F4).
5. A single-model majority vote beats an independent pinned anchor on shared systematic error (breaks F5).
6. A checker holding the full generator interior detects propagated errors as well as one denied it (breaks F6).
7. An agent-only improvement moves the ground, or sample count alone converts unreachable to reachable (breaks F7 and F8).
8. One intervention clears all four domains with no residue, or a chain certifies its own stop from inside (breaks F9).

If any fires, the corresponding condition is removed from the answer and the shape is re-censused. Until one is run, no part of this may be labelled `grounded`.

---

## 6. Recommendation

1. Report reliability per slot and per link, never as a single confidence (F1).
2. Instrument the middle link before adding compute anywhere else (F2). This is where the measurements do not already exist.
3. Settle each step against a ground before composing over it (F3); the settled molecule becomes the next atom.
4. Measure bracket fidelity and ground pressure at each handoff rather than assuming either (F4).
5. Buy independence in proportion to the cost of being wrong, with an anchor that does not update (F5).
6. Give the checker the lineage, not the interior (F6).
7. Treat sample count as a filter, never as a witness, and read both currencies (F7, F8).
8. Say `unreachable` or `candidate` plainly when a condition is not met (F9). Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

---

## 7. Canonical usage check (figures README + WATSON 60, 2026-11-22)

Two local sources were read after §§1 to 6 and govern how the figures may be used:

- `FRAMEWORK\reference\FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo"* and *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*. The framework returns *"a shape, not a name"* and stops at the limit of the available instruments. *"Indiscernibility is not identity."*
- `FRAMEWORK\reference\60_FIGURES_AS_METALAWS.md`: the figures are metalaws and decide design questions by derivation, not by escalation to a human ruling. The seat reads the ground; it does not ask the anchor's maintainer to decide what the figures already settle. *"Use filters for the budget and witnesses for the verdict"* is recorded there as Fig 9.

### Retractions and confirmations after the canonical check

| earlier reading | status after check |
|---|---|
| F1 called "decisive" | **Narrowed.** The per-slot rule governs how R is indexed; it does not forbid a summary score for a different purpose (reporting, not settling). Fig 1 :22 still forbids using the summary as the settling signal. |
| "middle link has no instrument" (F2) | **Confirmed, with source.** Fig 3 :25-26 states it directly; no retraction. The observation that most effort lands above the break is the figure's own. |
| "sampling cannot help" (implied in F5 and F8) | **Retracted as stated.** Sampling can help when paths are independent; what is refused is treating a shared-pool vote as a verdict. Split into F5 (independence) and F8 (filter versus witness). |
| "verifier must never see any interior" (F6) | **Narrowed.** Fig 10 :50 forbids *looking inside the frame it grades*. It does not forbid reading provenance, lineage or a characterised residual. Wording corrected to "lineage, not interiors". |
| "contact is the only lever" (F7) | **Narrowed.** Fig 11 :40 refuses agent-only improvement; it does not deny that agent changes which also change contact. The test is whether contact moved. |
| Apparent strain Fig 7 (mirror chain, ρ ≈ 1) vs Fig 2 :40 (shared evidence pool) | **Not strained.** Re-census: Fig 7 governs fidelity across a handoff between rooms; Fig 2 governs independence between frames at one comparison. Fig 8 :47 says independence is one quantity read twice. Same quantity, two readings, no contradiction. |
| The loop's stop (F9) | **Confirmed as a limit, not a gap.** THE_FORMULA says a closed channel and a perfect prediction look the same from inside. This is recorded, not repaired. |

### Seven-question recursive derivation (summary)

1. **Per-slot or global?** Per slot. Fig 1 :19 and Symbols table :43. Legality of the signal, not a convenience.
2. **Which link matters first?** The first uninstrumented link, usually the middle. Fig 3 :27, :29.
3. **How does an uncertain step enter the next?** As a remainder, and an amplifying chain makes it chaos. Fig 13 :31-32.
4. **What licenses composing over it?** Settlement: the ground pays, then it becomes an atom. Fig 12 :104, :106. A gate is not the ground (formula step 5).
5. **Does agreement between steps help?** Only with independence and a pinned anchor. Fig 2 :35, :40; Fig 7 :36.
6. **Where does the checking frame stand?** Outside the interior, reading the lineage, with a non-reconstructible claim. Fig 10 :42, :52.
7. **What is the honest stop?** `candidate` or `unreachable`, with R_T recorded. Fig 8 :39, Fig 13 :134, Fig 4 :30.

### Updated verdict

The shape survives: reliability is a union of per-link conditions under an unmoved ground, with each settled step becoming the next operand, bracket fidelity multiplied by ground pressure, independent frames and a checker that cannot reconstruct the claim. What does not survive is any single-number, more-compute, or shared-vote story. Strained after re-census: **none hidden**. One open limit is recorded: the loop cannot certify its own stop from inside. Mode `specified`, ungrounded, candidate.
