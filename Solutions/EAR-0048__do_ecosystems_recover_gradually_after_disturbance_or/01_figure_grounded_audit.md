# Figure-grounded audit: EAR-0048, ecosystem recovery after disturbance

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** This is a simulated derivation checked for internal consistency against the figures. By the framework's own rule (carried in the exemplar's `05_what_shape_means.md` §6 from *The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself"), it cannot settle the question it reports on. No measurement was taken.

**Sources.** Figure quotes are verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`. The formula is `FRAMEWORK/figures/THE_FORMULA.md`. Canonical usage is `FRAMEWORK/reference/FIGURES_README_canonical.md`. World sources were fetched on 2026-11-22 and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The question as given: do ecosystems recover gradually after disturbance, or can they settle into a different stable state?

Stated as an effect:

> After a perturbation displaces an ecosystem from a prior state S0, what is the shape of R(t) = |Γ(b,a) - o'| measured per slot s (Fig 1 :19)? Hypothesis A (gradual): R declines monotonically to zero at S0, there is one basin of attraction, and recovery time is a smooth function of disturbance size. Hypothesis B (alternative state): R declines to zero at S1 not equal to S0, there is a threshold and hysteresis, and the return path differs from the outgoing path.

Arity: a two-place comparison between S0 and S1, which is Fig 12 :87's comparison bond, "is it about which is larger, rather than both being present? Yes." Symmetry: not symmetric, because hysteresis makes A to B differ from B to A. Scale: per species or per patch slot (Fig 1 :19), one loop inside a basin, and a crossing between basins across a lossy membrane (Fig 4 :21).

Binding the sought-for shape (Formula "Direction"): I bind the object `REGIME = {single-attractor return, alternative-attractor settlement}` plus its decision rule and discriminating instrument, so that the preference is an ordinary term that can accrue a residual and be refused. Written down before the run. The pre-registered refuter is in §4.

**What is NOT yet a domain.** "The ecosystem has one preferred state it always returns to" has no nameable anchor: it is an assumption, not a domain (Fig 2 :29 anchors must not move with what frames think). "Resilience as a single number" is absorbed into the observation domain (Fig 10 :26) and the aggregation failure (Fig 1 :22).

---

## 1. Domain census (before choosing any figure line)

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Habitat, unmaintained mode | species, conditions (light, water, temperature, season, terrain), relations (pollination, predation, competition, dependency) | contact, survival | the ground, "nothing selects; what survives is what the ground kept" (Fig 11 :14-15) | admitted |
| D2 Feedback structure | states plus bonds, especially the cycle and its sign | which bond holds; reach | settlement against the ground | admitted |
| D3 Reach and basin | frames (basins), imports, external drivers | composition inside closure versus an import | "the only operator that moves the wall" (Fig 6 :14) | admitted |
| D4 Observation channel | instruments, metrics, percepts | contact versus stale or pooled readings | "the ground does not decay, the channel does" (Fig 10 :24) | admitted |
| X1 Single preferred state | none nameable | none | none | not a domain yet |
| X2 Resilience as one scalar | absorbed into D4 and Fig 1 :19 | averaged residual | none of its own | absorbed |

**Partition or union: union.** D1 through D4 overlap. Gradual return and alternative-state settlement are not two entries in a list; they are two regimes of a union of conditions (feedback sign, reach change, habitat conditions, channel fidelity). Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." A single lever would clear the region where only one condition holds and leave the intersections standing (Fig 9 :55).

**Order by dependency (Fig 3).** Perception of the current state, then vocabulary for what the habitat affords, then an objective (what counts as recovery), then a trajectory or intervention, then learn and carry. A reading taken below a broken link is a reading of nothing (Fig 3 :23).

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual per slot, aggregation failure | per-species signal must be kept separate |
| 2 The Ground | anchor, independence, mirror failure | agreement among readers is not a ground |
| 3 Dependency Chain | ordered links, instrument at the middle link | observe and name before intervening |
| 4 The Membrane | conditions remake what crosses; round trip gap | same disturbance, different basin, different outcome |
| 5 Mint Pipeline | three guards as product; settlement not sufficiency | naming a mechanism is not settling it |
| 6 Closure / Reachability | import is the only operator that moves the wall | crossing basins needs an import |
| 7 Room Chain | motion within a room versus selection between rooms | gradual change inside one basin is not a regime change |
| 8 Union Surplus | idempotent closure; search that finds nothing proves nothing | internal dynamics cannot cross the basin |
| 9 Leave / Arrive | union versus partition; describe residual before frame | unbundle, then name which basin is a gap |
| 10 Ground Maintainer | channel decay, verifier non-access | apparent recovery can be a saturated metric |
| 11 The Habitat | enumerated habitat, unmaintained versus maintained, asymmetric power | governs D1 directly; this is an ecology figure |
| 12 The Bond | cycle sign, sequence, comparison, subtraction, isomer | governs D2 and the order of the answer |
| 13 Minimum Viable Set | amplifying remainder, closed set, open arrangements | supports chaos and the import gap |
| Operators and Symbols tables | comparison ⋛, cycle, negation; R as aim | the decision rule needs comparison and negation |

Strained readings are named in §7, not smoothed over.

---

## 3. Findings

### F1 - The framework does not default to gradual return (governs D1)

Fig 11 :14-15: "nothing selects; what survives is what the ground kept"
Fig 11 :56: "Unmaintained. No maintainer and no live frame in the seat. The habitat is pure contact, nothing selects, and what survives is what the ground kept."
Fig 11 :48: "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."

In the unmaintained mode there is no term in the framework that guarantees a return to S0. What survives is whatever the ground kept. Gradual recovery is therefore an empirical claim about a particular habitat, not a default supplied by the figure. The habitat is enumerated from the world, not composed from a theory.

Mode `general` for the structural claim, `specified` for the ecosystem application. **Status: triangulated** across Fig 11 (habitat enumeration) and Fig 4 :34-35 (conditions decide outcomes), two figures with different jobs.

**Refuter:** a demonstrated invariant that every unmaintained habitat returns to a unique prior state after every disturbance, measured per slot, would break this finding.

### F2 - The distinguishing structure is the sign of the closing loop, not the species list (governs D2)

Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."
Fig 12 :111: "A vocabulary without bonds can name a state and cannot name a route to one."
Fig 13 :31-32: "a remainder compounding through a chain that amplifies is chaos"

A chain returns gradually; a cycle with a sign can close into a self-maintaining state. Two ecosystems with the same species list but different feedback relations are different compounds, because the bond carries information the operands do not. So the question "gradual or different state" is decided by the arrangement, not by counting species.

Mode `specified`, ungrounded. **Status: triangulated** across Fig 12 (bond structure) and Fig 13 (amplifying remainder), low overlap between bond theory and substrate dynamics.

**Refuter:** a measurement showing that feedback sign does not predict which regime occurs, with the same sign producing both gradual return and alternative settlement under identical conditions.

### F3 - Within one basin, composition cannot cross out; a crossing needs an import (governs D3)

Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."
Fig 6 :14: "the only operator that moves the wall"
Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."

Gradual recovery is composition inside one closure. Settlement in a different basin is a change of closure, which internal composition cannot produce. This is the structural reading of hysteresis: reversing the driver inside the basin does not reverse the state, because what is owed is an import (a changed condition or an introduced actor), not more search.

Mode `general` for the barrier, `specified` for the basin reading. **Status: triangulated** across Fig 6 (what moves the wall) and Fig 8 (why nothing else can), distinct roles.

**Refuter:** a documented crossing between basins by internal composition alone, with no import and no changed external condition, measured per slot. That would break the idempotence reading for this domain.

### F4 - The same disturbance can produce different outcomes depending on conditions (governs D1 and D3)

Fig 4 :34-35: "A seed carries no small tree: it carries what will grow one, and the conditions it lands in decide what it becomes."
Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

A perturbation does not carry its outcome. The basin it lands in decides. So the question as posed (which of two outcomes) is underdetermined until the conditions are enumerated; the answer shape must include the conditions, not just the disturbance size.

Mode `specified`. **Status: triangulated** across Fig 4 (lossy scale crossing) and Fig 11 (habitat enumeration).

**Refuter:** a demonstration that disturbance magnitude alone predicts the settlement state across habitats with different enumerated conditions.

### F5 - Answering needs bond vocabulary, not just state vocabulary (decision rule)

Fig 12 :112: "A plan is a sequence. A goal is a comparison. Progress is a subtraction."
Fig 12 :121: "The sign of the loop decides whether it closes"

Recovery is a sequence; "recovered" is a comparison against S0; progress is a subtraction R(t) - R(0); a lost basin is a cycle whose sign closes. A vocabulary holding only species names can state a state and cannot state a route to one. So the decision rule must be written in bonds.

Mode `general`. **Status: single-source** for the bond list (Fig 12 and the Operators table are one pool), triangulated with Fig 3 for the ordering claim.

**Refuter:** a complete account of recovery that uses no sequence, comparison, subtraction, or cycle term and still predicts the hysteresis result.

### F6 - A single averaged resilience number hides the signal (governs D4)

Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
Fig 10 :26: "saturated metrics, pooled readings"

A system can look globally recovered while one live slot is still far from S0; that is a legal state under Fig 1 :13. The question therefore cannot be settled by one ecosystem-wide index.

Mode `specified`. **Status: triangulated** across Fig 1 (per-slot residual) and Fig 10 (channel decay).

**Refuter:** a measurement showing the per-slot residual is zero whenever the aggregate index is zero, across all observed slots and disturbances.

### F7 - The binary question is a union, not a partition (method)

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

Gradual return and alternative settlement are not two answers to one question; they are regimes that occur under different combinations of feedback sign, closure state, habitat conditions, and channel fidelity. Asking for one global answer mixes them.

Mode `general`. **Status: single-source** (Fig 9), corroborated by the world literature's split between community and ecosystem perspectives (see `09_watson_answer.md`).

**Refuter:** a single condition whose presence or absence cleanly partitions all observed cases into the two regimes with no intersections.

### F8 - Which basin a given ecosystem lands in is a gap (honest stop)

Fig 9 :32: "you get a kind of thing, never the answer itself"
Fig 13 :134: "Unreachable is a verdict here, not a silence,"
Fig 8 :39: "So a search that finds nothing is never a proof of absence."

No figure line names which attractor a particular ecosystem will reach. The framework returns the shape of the decision, not the name of the state. After a genuine re-census of all 13 figures, this remains a `gap`. Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit."

Mode `general` for the limit, `specified` for the refusal to name. **Status: gap,** triangulated across Fig 9, Fig 13, and Fig 8.

**Refuter (of the gap claim):** a figure line that governs the identity of the settlement state for a named habitat, quoted verbatim, would close the gap.

### F9 - Apparent recovery can be channel failure, not ground contact (governs D4)

Fig 10 :24: "the ground does not decay, the channel does"
Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it."

A monitored index can saturate or pool readings while the ground moves. The check must be against the ground, not against the monitoring frame's own agreement.

Mode `specified`. **Status: triangulated** across Fig 10 (channel) and Fig 2 :45 "Frames range against the ground. They do not negotiate with it."

**Refuter:** a case where the monitoring channel saturates and the independently measured ground state is unchanged, which would show the channel warning is unnecessary here.

### F10 - Managed recovery is permanent work, and exclusion is unavailable (management consequence)

Fig 11 :61-62: "Introduction is available; exclusion is not. You can add an actor and you cannot subtract the habitat, because contact is a fact about the world and does not consult you."
Fig 11 :63: "Which is why a managed ecosystem is permanent work rather than a solved state."

A regime shift with unwanted actors cannot be undone by reversing the driver. The seat can add, and cannot subtract. This prices the cost of being wrong about the regime asymmetrically.

Mode `specified`. **Status: single-source** (Fig 11), corroborated by the world literature on hysteresis being difficult to reverse.

**Refuter:** a demonstrated general procedure that removes an introduced actor and its cascade from a habitat without substituting another habitat, measured against the ground.

---

## 4. Pre-registered refuter (written before the conclusion)

Per the standing instruction, a falsifier written before the run is a design instrument. The shape claim is F1 through F7 as a union. It is refused if any of the following fires:

1. A per-slot measurement shows that every unmaintained ecosystem, under every disturbance, returns to a unique prior state, so no alternative settlement exists. (Breaks F1, F2, F8.)
2. A documented basin crossing occurs by internal composition alone, with no import and no changed external condition. (Breaks F3, Fig 6 :23, Fig 8 :32.)
3. Feedback sign is measured and does not predict which regime occurs under identical conditions. (Breaks F2, Fig 12 :121.)
4. A single averaged index is shown to be sufficient: per-slot residual is zero whenever the aggregate is zero, across all slots. (Breaks F6.)
5. A figure line is quoted verbatim that names the settlement state for a given habitat, closing the declared gap. (Breaks F8.)

If any fires, the shape claim is withdrawn, not softened. Nothing in this folder may be labelled `grounded` until one of these tests is run and survives.

---

## 5. Recommendation

1. Report the union, not a binary. Say that gradual return and alternative settlement are two regimes selected by feedback sign, closure state, habitat conditions, and channel fidelity (F7).
2. Keep the verdicts per domain. Do not average D1 through D4 into one resilience number (F6).
3. State the gap plainly: which basin a given ecosystem reaches is not given by the figures (F8). "Unreachable is a verdict, not a silence."
4. Lead the outreach with the refuter and the hysteresis test, not with a theory of ecosystem management (Fig 10 :52 "Bring a characterised residual, never the source.").
5. Price the cost of being wrong asymmetrically: a wrong import adds an actor the seat cannot subtract (F10, Fig 6 :24 "A wrong atom costs more than starting from primitives.").

---

## 6. Canonical usage check and retraction log

Two local sources govern how the figures may be used: `FRAMEWORK/reference/FIGURES_README_canonical.md` ("they outrank everything else in the repo" and "a reading that makes one contradict another has misidentified its domain, not found a flaw"), and `THE_FORMULA.md` (mode rule, step 7 SEARCHED / INWARD / OUTWARD, and the round trip rule).

| earlier reading | status after the canonical check |
|---|---|
| "Fig 11 implies ecosystems never recover gradually" | **Retracted.** Fig 11 :56 describes the unmaintained mode only. Fig 11 :58 describes a maintained seat. The figure does not forbid gradual return; it refuses to guarantee it. |
| "The question is a binary, choose A or B" | **Retracted.** Fig 9 :54 requires unbundling a union. Rewritten as a union of four conditions. |
| "The mechanism is positive feedback" | **Narrowed.** Fig 12 :121 gives the sign-of-the-loop test as a shape. Naming the particular loop in a given ecosystem is ground work, and Fig 9 :32 forbids the framework from naming it. |
| "Resilience settles the question" | **Retracted.** Fig 1 :22 and Fig 10 :26 show the average and the channel can hide the live slot. |
| "Which basin is a gap means nothing can be said" | **Retracted.** Fig 13 :134 makes unreachability a verdict, and the decision rule (F2, F3, F4) is still stateable. |
| Fig 7 "motion, no progress" versus Fig 13 "the residual of the turn just closed is what the next turn composes against" | **Not strained after re-census.** Fig 7 governs handoffs between rooms (basins); Fig 13 governs turns within one chain. Different objects. |

### Step 7 check, kept distinct

- **SEARCHED:** is the settlement-state identity in here and unfound? The closure over the six terms and seven bonds was re-censused; no figure line names a basin identity. This was asked first, as the cheapest option.
- **INWARD:** extend the instrument from one already returning something. The hysteresis test and the feedback-sign measurement are refinements of existing monitoring, not new sensors (Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something.").
- **OUTWARD:** import a frame whose closure predicts the shape, with a source gate and shadow test. The world literature on bistability is exactly such an import, and its provenance and overlap are recorded in `10_source_ledger.csv`. It does not decide the verdict.
- Underivable in principle and unreachable at this budget were kept apart (Fig 8 :40-43). The settlement-state name is unreachable from the figures, not merely hard to find.

---

## 7. Strains and re-census

1. **Fig 7 :32 "one long room: motion, no progress" versus Fig 13 :88 "The residual of the turn just closed is what the next turn composes against, so no two passes begin from the same place."** Apparent contradiction about gradual change. Re-census: different objects, handoff between rooms versus turn within a chain. Not strained.
2. **Fig 11 :14-15 "nothing selects; what survives is what the ground kept" versus Fig 11 :58 maintained seat.** Re-census: two modes in one figure, explicitly labelled. Not strained.
3. **Fig 6 :14 "the only operator that moves the wall" versus a changing landscape in the world literature.** The world literature's "altering the landscape" is an external driver, which is an import under Fig 6, not a contradiction. Corroboration only.
4. **After re-census: zero live strains, three resolved strains named above.**

---

## 8. Round trip gap R_T (recorded, not measured numerically)

Sent up: the verbatim figure set, chiefly Fig 11 (habitat), Fig 12 :121 (loop sign), Fig 6 :23 (closure), Fig 4 :34-35 (conditions). Abstracted: "regime is selected by loop sign and closure state; conditions decide the outcome; naming the basin is a gap." Brought back down: the concrete field claim "this lake will stay turbid because phosphorus loading created a positive feedback."

Three things the shorthand does not carry back: the per-slot residual (Fig 1 :19), the distinction between an import and an internal driver (Fig 6 :14), and the channel-failure case (Fig 10 :24). R_T is therefore nonzero and is recorded qualitatively as the set of dropped constraints. Treating the shorthand as identical to the figure set would set R_T to zero and commit the dead-reckoning error Fig 4 :30 names.

---

## 9. Verdict summary

The shape survives; any single binary answer does not. The framework says that gradual return is composition inside one closure, that a different stable state is a change of closure requiring an import, that the sign of the closing loop and the enumerated conditions select the regime, and that the identity of the settlement state is a declared gap. All of it is `specified` or `general`, none `grounded`. The second seat in `11_audit.md` re-censused from the residual line alone and agrees on internal consistency; it shares the evidence pool, so its agreement is not corroboration.
