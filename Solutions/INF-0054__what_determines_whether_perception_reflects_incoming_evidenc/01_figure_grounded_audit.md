# Figure-grounded audit: what determines whether perception reflects evidence, priors, or their interaction

**Mode of this document: `general` on the structural shape, `specified` on the determinant claims, not `grounded`.** `THE_FORMULA.md` says: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status: simulated derivation, not a ground reading.** From *The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Local framework files read this session: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`. Figure quotes are verbatim from the extract and cited as `Fig N :line`.

---

## 0. The residual, stated in effect terms

The question offers three candidate readouts for a perceiver at a moment:

- **A, incoming evidence.** The readout tracks what just arrived at the senses. Change the signal and the readout changes; hold the signal and the readout holds.
- **B, prior expectations.** The readout tracks what the perceiver already held. Change the expectation and the readout changes; change the signal and it does not.
- **C, their interaction.** The readout is the difference between what was predicted and what was observed. Change either operand and the readout changes.

Stated as an effect, the residual is: *which operand, prediction or observation, owns the current content of a perceptual slot, and under what conditions does that ownership switch?*

The framework has a native vocabulary for all three, from the Symbols table:

- `b`, the belief: "What the system takes to be the case before it acts. Formed from its own history and from what it inherited, mixed by w. Not the observation." (Symbols table :18-20). This is the **prior expectation**.
- `o′`, the observation: "What actually happened." (Symbols table :30-31). This is the **incoming evidence**.
- `Γ(b,a)`, the prediction: "What the library says should happen, given belief b and action a." (Symbols table :33-34).
- `R`, the residual: "The gap between prediction and observation. The central quantity: everything the system does is driven by it." (Symbols table :36-39).
- `s`, the slot: "One object, region or entity being tracked. R is measured per slot, never as a single global number." (Symbols table :41-43).

Formula step 1 binds them: `R = |Γ(b,a) − o′| per slot s`. So option C, the interaction, is not a third alternative on a par with A and B. It is the substrate the loop always runs on. A and B are limiting cases in which one operand's contribution disappears or is suppressed. This is the first derive-first result, and it re-shapes the question before any figure is chosen.

---

## 1. Domain census, before choosing any figure line

### Residual by arity, symmetry, scale

- **Arity.** The residual takes two operands, prediction `Γ(b,a)` and observation `o′`, and returns a magnitude per slot `s`. Binary comparison, indexed by object slot.
- **Symmetry.** The absolute gap `|Γ(b,a) − o′|` is symmetric in its two operands as arithmetic, but the loop is not. `b` is "Not the observation" (Symbols table :20), and the ground "does not update on A or B" (Fig 2 :25). The operands have different standing: one is a frame-held bet, the other is the ground reading. Do not symmetrise them.
- **Scale.** Steps 1 to 5 close within one scale; the cross-scale transform has its own error signal `R_T` (Formula step 6, Fig 4). The determinant being asked about is a within-scale quantity. A cross-scale reading would be a different question.

### One line per domain: actors / currency / anchor

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D1, the perceiver's loop | Γ library, b belief, w weighting, a action, o′ observation, R residual, s slot | residuals and description cost | the ground reached through o′ | partition: which operand drives this slot |
| D2, the anchor / ground | measurement, experiment, counter (Fig 2 :29) | settlement | itself, it does not update | determinant of evidence dominance |
| D3, the channel | percepts, transients, metrics, readings (Fig 10 :25-26) | fidelity | the ground it must keep reachable | determinant of whether o′ is trustworthy |
| D4, the verification frame | outside perceivers and researchers | agreement and residual | the ground, never agreement | where the three options are checked |

No domain is admitted without a nameable anchor. D1 has the ground via o′. D2 is the anchor itself. D3 has the ground as the thing it must keep reachable. D4 has the ground as its reference, never agreement. If a proposed domain had no anchor, it would not be a domain yet.

### Partition or union

**Union compound.** The three options are not a partition of one switch with three settings. "Interaction" is structural and always present; "evidence" and "prior" are limiting cases with *different determinants in different domains*. Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57: "a case in two conditions is not a harder case of either." Unbundle before searching, or a single lever (for example, tuning `w`) will clear the region where only one condition holds and leave the intersections standing. See `06_isomers_and_order.md`.

### Dependency order (Fig 3)

Fig 3 orders links by dependency, not importance: perception (link 1), vocabulary (link 2), objective (link 3), planning (link 4), learn and carry (link 5). Fig 3 :5 names link 1: "the system can tell what is in front of it, and tell it apart from what was there before." For this question the operative order is:

1. **Channel fidelity**: does `o′` arrive at all? (D3)
2. **Anchor legitimacy**: is the reference pinned against frames? (D2)
3. **Per-slot residual**: is `R` read locally rather than averaged? (D1)
4. **Belief update and readout**: only now does the content of the slot move.

Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." Spending effort on prior-tuning (step 4) cannot rescue a saturated channel (step 1).

---

## 2. Figure census

| figure | bearing on this question | verdict |
|---|---|---|
| **1 The Agent** | residual indexed per slot; ground is the only metric; aggregation kills the signal | governs D1 and the per-slot condition (F1, F5) |
| **2 The Ground** | anchor must not update; mutual update and common cause; independence | governs D2 and evidence dominance (F3) |
| **3 Dependency Chain** | perception is link 1; a reading below the break is a reading of nothing | governs the order (F8) |
| **4 The Membrane** | lossy transform between scales; round trip gap | sets scale boundary; governs `R_T`, not this within-scale determinant |
| **5 Mint Pipeline** | three guards; fifth kind refuted; direction of question outside the pipeline | no mint occurs in a perceptual readout; carries the "shape as ordinary term" discipline |
| **6 Closure / Reachability** | import is the only operator that moves the wall; instruments improved from worse ones | governs the remedy when the channel lacks an instrument, not the determinant itself |
| **7 Room Chain** | "agreement compounds, evidence does not" | governs D4, rules out consensus as a determinant |
| **8 Union Surplus** | independence, triangulation, residual first frame second | governs union reading and witness rules |
| **9 Leave / Arrive** | unbundle a union; describe residual before choosing a frame | governs the union census (F6) |
| **10 Ground Maintainer** | ground does not decay, channel does; stale percepts and pooled readings | governs D3 (F4) |
| **11 The Habitat** | capability is agent-and-habitat; introduce never subtract | governs D3 to D1 contact; an agent-only fix cannot change contact |
| **12 The Bond** | composition and bonds; a plan is a sequence, a goal a comparison | supports the structure reading in `06` |
| **13 Minimum Viable Set** | six terms, states and structures in lockstep | not directly load-bearing here; perception runs on the loop, not on the substrate enumeration |
| **Operators table** | negation is a refusal, not a subtraction | relevant to F6 (a closed channel must be refused, not explained) |
| **Symbols table** | b, w, o′, Γ(b,a), R, s, ground | the primary vocabulary (F1, F2) |
| **Formula** | step 1 residual; step 6 `R_T`; closure's "no convergence criterion" | primary for F1 and F6 |

Strained readings are named below, not smoothed over.

---

## 3. Findings

### F1 — Perception is the per-slot residual, so "interaction" is structural (decisive, `general`)

Fig 1 :9 "perceive · plan · act · predict"; Fig 1 :10 "one bet per object slot, every action"; Fig 1 :11 "residual R indexed by object slot". Symbols table :36-39: "The gap between prediction and observation. The central quantity: everything the system does is driven by it." Formula step 1: `R = |Γ(b,a) − o′| per slot s`.

The readout is defined as a function of both operands. A readout that depended on `o′` alone would have no prediction; one that depended on `b` alone would have no residual and no loop. Option C is therefore not one of three outcomes. It is what perception *is* inside this loop.

- **Mode:** `general`, structural.
- **Refuter:** exhibit a loop whose per-slot readout is a function of only one of `Γ(b,a)` and `o′`, and that still closes against the ground. If it closes, the residual definition is wrong for this domain.
- **Status:** triangulated across Fig 1, the Symbols table and Formula step 1 (three documents, low terminological overlap, one framework pool).

### F2 — The weighting `w` is prior versus prior, not evidence versus prior (strain resolved by re-census, `general`)

Symbols table :20: "Not the observation." Symbols table :24-25: "w_A + w_B = 1, and w is learnable from the outcomes of past weightings." Symbols table :23: "How far the belief leans on private history versus inherited prior."

The tempting reading is that `w` is the knob the question asks about: turn it up for evidence, down for prior. That reading strains against "Not the observation" and against `w_A + w_B = 1`, which partitions the belief's two internal sources, not belief against observation. Re-census: `w` governs the composition of `b`; `o′` is a separate operand entering only through `R`. The evidence/prior balance is therefore not a single scalar in this framework. It is a relation between a prediction and a ground reading.

- **Mode:** `general`.
- **Refuter:** show a frame in which `w` scales `o′` directly against `b` (so that `w_A + w_B = 1` applies to observation and belief) and the frame still satisfies the Symbols table's definition of belief.
- **Status:** single-source (Symbols table). Corroborated in the world literature by the precision-weighting distinction, which weights *prediction errors* by estimated reliability rather than mixing prior and evidence into one private scalar (see `09_watson_answer.md`). Different evidence pool, so this is genuine low-overlap corroboration, not a second reading of the same line.

### F3 — Evidence dominance is a ground condition: the anchor must not update (`specified`)

Fig 2 :29-30: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :33: "The anchor must not update." Fig 1 :23: "The ground enters as the only metric."

When the anchor is captured, two named collapses produce prior-like output that is not evidence:

- **Mutual update.** Fig 2 :14-15: "they converge, and what they converge on is whoever had the most influence." The readout tracks influence, not `o′`.
- **Common cause.** Fig 2 :20-21: "so the agreement is the pool talking, not two frames confirming each other." The readout tracks a shared evidence pool, not independent contact.

So a percept that looks evidence-driven can be influence-driven or pool-driven. What determines the difference is not the content of the percept but whether the reference it ranges against is immovable.

- **Mode:** `specified`, testable by an instrument that can tell whether the anchor moved when the frame changed.
- **Refuter:** exhibit a readout that tracks current `o′` at unchanged fidelity while the putative anchor is shown to have moved in response to that frame's own belief.
- **Status:** triangulated across Fig 2 and Fig 1 (anchor definition plus "only metric").

### F4 — Channel decay produces prior-dominant perception with an intact ground (`specified`)

Fig 10 :24: "the ground does not decay, the channel does"; Fig 10 :25-26: "stale percepts, dropped transients, saturated metrics, pooled readings"; Fig 10 :27-28: "the output is not a verdict, it is you have lost touch."

The perceiver can hold a correct prior and an immovable ground and still report the prior, because the observation reaching `R` is stale, dropped, saturated or pooled. This is a distinct determinant from F3: in F3 the reference is captured; in F4 the reference is fine but the line to it is degraded. Fig 10 :29: "keep the anchor reachable."

- **Mode:** `specified`.
- **Refuter:** show a channel with demonstrably stale or saturated readings whose per-slot `R` still tracks current `o′` at the same fidelity as a fresh channel, under the same belief and action.
- **Status:** single-source (Fig 10), corroborated at low overlap by signal detection theory, which separates sensitivity from response bias and lists fatigue as a threshold-affecting factor (see `09`).

### F5 — Per-slot indexing is required; aggregation hides the evidence (`specified`)

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." Fig 1 :13: "a global R near zero with one live slot residual is a legal state."

A perceiver that reports a single global fit will conclude that evidence was absorbed (small global `R`) while one slot is still live and uncorrected. Whether perception reflects the incoming evidence therefore depends on the granularity at which the residual is read, not only on the magnitude of the signal.

- **Mode:** `specified`.
- **Refuter:** exhibit a perceiver whose readout is a single global number and whose local evidence nonetheless drives the correct per-slot report at unchanged fidelity.
- **Status:** triangulated across three separate lines of Fig 1 (:13, :19, :22).

### F6 — From inside, evidence-dominated and prior-dominated states look the same when `R` stops (`general` limit)

Formula, closure: "the loop stops only when R stops arriving, which is either a perfect prediction or a closed channel, and from inside those look the same." Fig 2 :45: "Frames range against the ground. They do not negotiate with it." Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."

This is the deepest part of the answer. The determinant cannot be read off the perceiver's own residual, because a vanishing `R` is compatible with two different worlds: the prediction genuinely met the evidence, or the evidence stopped arriving. Distinguishing them requires the ground or a second, independent frame ranged against it. Fig 8 :39: "So a search that finds nothing is never a proof of absence." Fig 9 :55, :57 require the union to be unbundled before a single determinant is named.

- **Mode:** `general`, a structural limit rather than a measurement.
- **Refuter:** exhibit a frame that certifies from its own residual alone that it is tracking the ground rather than a closed channel, without importing a reference.
- **Status:** triangulated across the Formula closure and Fig 2 (two documents). Corroborated at low overlap by the essays' distinction horizon and union horizon, and by Friston's state-versus-process distinction (see `09`).

### F7 — Perceptual inference is the prediction-changing half of the loop (`general`)

Formula step 1 separates "bet, act, observe". Symbols table :27-28 defines `a` as "What it does." and :33-34 defines `Γ(b,a)` as the prediction given belief and action. The loop can reduce discrepancy by changing the model (perception) or by sampling a different input (action). Which half is moving is part of the determinant: an unchanged readout can mean a settled percept or an action that kept the input constant.

- **Mode:** `general`.
- **Refuter:** show a loop in which changing the action never changes the observation, so the two halves cannot be separated.
- **Status:** single-source (Formula plus Symbols table). Strongly corroborated by an outside primary source: Friston 2010, "agents minimize free energy by changing their predictions (perception) or by changing the predicted sensory inputs (action)." See `09`.

### F8 — The dependency order puts the channel and anchor before prior-tuning (`general`)

Fig 3 :5: "the system can tell what is in front of it, and tell it apart from what was there before." Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

If perception (link 1) is broken by a saturated channel, adding better priors or a larger library lands above the break and cannot arrive. The intervention point depends on which link actually stopped, and a reading taken below the break is a reading of nothing.

- **Mode:** `general`.
- **Refuter:** show that tuning only `b` restores per-slot fidelity through a demonstrably saturated channel.
- **Status:** single-source (Fig 3).

---

## 4. Strain test and re-census

| apparent strain | re-census | result |
|---|---|---|
| "w is the evidence/prior knob" versus `b` is "Not the observation" | `w` mixes private history and inherited prior, both sources of `b`; `o′` enters elsewhere. Different quantities. | Not a strain after re-census. The first reading was wrong and is retracted in §7. |
| "interaction is a third option" versus `R = |Γ(b,a) − o′|` always | The three options are a union compound, not a partition. Interaction is the substrate; the other two are limiting cases. | Re-census resolves. `06` carries the derivation. |
| "the ground settles it" versus "from inside they look the same" | The ground is D2 and the internal indiscernibility is D1. Different domains, different jobs. | Not strained. Fig 2 :45 and the Formula closure are compatible. |
| Precision weighting in the world literature versus `w` in the Symbols table | Precision weights prediction errors by reliability; `w` weights two sources of the belief. They are different operators with different operands. | Corroboration at the level of "no single scalar knob", not identity. Declared, not hidden. |

After re-census: **no live strain**. The one genuine correction is the retraction of the `w`-as-knob reading.

---

## 5. Pre-registered refuter

Written before the conclusion, per Seat Map :287: "a falsifier written before the run is a design instrument, not only an honesty device." The shape claim is refuted if any of the following fires:

1. A perceiver's readout is a function of only one of `Γ(b,a)` and `o′` and still closes against the ground (breaks F1).
2. `w` is shown to scale observation against belief rather than private history against inherited prior (breaks F2).
3. A perceiver with a pinned anchor still fails to be corrected by `o′` while the channel is demonstrably intact (breaks F3).
4. A demonstrably stale or saturated channel leaves per-slot fidelity unchanged (breaks F4).
5. A single global residual drives correct per-slot reports (breaks F5).
6. A frame certifies from its own residual alone that it is tracking the ground rather than a closed channel (breaks F6).
7. Tuning only the prior restores fidelity through a saturated channel (breaks F8).

If any fires, the shape is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 6. Recommendation

1. Answer in effect terms, not with a single knob. The framework's answer is a union compound with per-domain verdicts (F1, §1).
2. Keep the three verdicts separate and never average them. Evidence dominance, prior dominance and interaction have different determinants.
3. Lead with the internal limit (F6): from inside the residual, evidence-driven and prior-driven states are indiscernible when `R` stops. This is the part a perception researcher can actually refute.
4. State mode on every claim. Nothing here is a measurement.
5. Offer the formula as a method, not the conclusion as an answer (Fig 4 :22, "Only methods cross up. Only head starts come down.").
6. Send the packet in `08` first, ask what would refute it, and show the framework only after a stage-1 verdict is recorded.

---

## 7. Canonical usage check and retraction / confirmation log

Read after the first four sections and governing how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw"; and the canonical limit, the framework returns "what a missing thing would have to look like (a shape, not a name)" and stops at the limit of the instruments, recording the lineage so the stop is honest. "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are metalaws, so design questions are decided by derivation from the figures, not by asking the anchor to rule. Fig 10: "the ground does not decay, the channel does"; the seat reads the ground rather than asking the ground's maintainer to decide design.

| earlier reading | status after the check |
|---|---|
| "`w` is the evidence versus prior knob" | **Retracted.** Re-census: `w` is prior versus prior; `o′` is separate. Fig and Symbols table both govern. |
| "the three options are three settings of one switch" | **Retracted.** Union compound, Fig 9 :55-58. `06` carries the derivation. |
| "interaction is one answer among three" | **Corrected.** Interaction is structural; `R = |Γ(b,a) − o′|`. F1. |
| "the anchor decides whether perception is correct" | **Narrowed.** The anchor is the ground for settlement (Fig 2), but from inside a closed channel looks like a perfect prediction (Formula closure). Both kept. |
| "evidence dominance is just a large `o′`" | **Retracted.** It requires an unpinned anchor, an intact channel and per-slot readout. F3, F4, F5. |
| "from inside the two states look the same" | **Canonically confirmed.** "Indiscernibility is not identity"; the lineage and the ground distinguish them. |
| Apparent Fig 2 versus Formula strain | **Not strained.** Different domains: D2 is the anchor, D1 is the internal readout. Matches the README re-census rule. |
| World literature on precision weighting | **Corroboration, not identity.** Different operand: reliability weights prediction errors, not belief sources. Declared in `09` and `10`. |

### Canonical limit

The framework returns a shape: per-slot residual as the interaction, with three separately named determinant conditions and an internal indiscernibility limit. It does **not** return the name of a brain area, a synapse, a neurotransmitter or a numerical precision weight. Those are bindings from the neuroscience frame, provenanced as such, and ungrounded until an instrument settles them. Fig 9 :32: "you get a kind of thing, never the answer itself."
