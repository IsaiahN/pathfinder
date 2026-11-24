# Figure-grounded audit: can resilience be measured across systems?

**Mode of this document: `general` on the shape, `specified` on the falsifiable predictions, never `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** The Recursive Self-Improvement Trap (essay, opened 2026-11-23) says LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." Arrival of the Fittest says the same: "the solutions presented were not contrived to fit the formula" cannot be verified by the model that produced them. This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** Figure strings: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the verbatim extract. Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md`. Loop: `FRAMEWORK/figures/THE_FORMULA.md`. World: Walker et al. 2004, Scheffer et al. 2009, Wikipedia "Ecological resilience", and the eight essays. Every URL was opened on 2026-11-23 and is logged in `10_source_ledger.csv`.

---

## 0. The question stated as a residual

Source question (ecology.txt line 11): "Can ecosystem resilience be measured in ways that work across forests, oceans, grasslands, and other systems?"

Effect form. A resilience measure is a bet that a system's future state after a disturbance can be read from a current reading. `R = |Γ(b,a) − o′|` per slot s (Formula step 1). The residual is the gap between what the measure predicts about recovery and what the ground returns when a real disturbance arrives.

- **Arity.** Indexed by slot: system, function at risk, disturbance regime, scale. Not one number. Symbols table :43-44: "One object, region or entity being tracked. R is measured per slot, never as a single global number."
- **Symmetry.** Asymmetric. A reading is relative to a function and a disturbance. The same actor changes valence when the residual changes (Fig 11 :50-51). It is not a symmetric join of systems.
- **Scale.** First order within one system at one scale (one disturbance and its recovery). Second order across scales, because recovery at a focal scale depends on states above and below it. That is the membrane question of Fig 4.

**Desired shape, bound as an ordinary term before the run** (Formula "Direction"). An answer would look like: a procedure that (i) enumerates the habitat relative to a stated residual, (ii) reads `R` per slot against a ground that does not update on the measure, (iii) names what the measure gives up when carried from one system to another, and (iv) keeps verdicts separate. A single scalar that ranks a forest against an ocean would look like an answer too, so both are bound and allowed to accrue a residual. The pre-registered refuter in section 3 says what would kill the preferred shape.

**Two readings carried forward, never blended.** A: one transferable scalar index. B: one transferable method with per-system, per-slot readings and a measured transfer gap. The audit below sorts which figure lines govern each.

---

## 1. Domain census (before choosing any figure line)

One line per domain: actors / currency / anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D1 Measurement and instrumentation | the index, the instrument, the slots (function, species, patch, basin), the disturbance | residuals, bits of description, actions spent in the field | the actual recovery outcome after a real disturbance | partition within one system across slots; union across systems |
| D2 The ecological habitat | species, functions, conditions (light, water, season, terrain), relations (predation, pollination, competition), the manager where one exists | survival and recovery of the function at risk | the ground: what recovery actually happened | union of overlapping systems, not a list of separate domains |
| D3 Cross-system transfer and comparison | forest, ocean, grassland, grassland-with-fire, forest-with-drought | comparability of readings, and what is lost to make them comparable | none shared. Each system has its own ground, and a cross-system index would have to invent one | union, so unbundle before searching (Fig 9 :54) |

**Dependency order (Fig 3).** Settle perception and vocabulary first (can we perceive the recovering function and name what it affords?), then the objective (what counts as progress here?), then planning. Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." Fig 3 :29-30: "Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed." A cross-system index is an effort at the top of a chain whose middle link, "what would count as progress here," is still unmeasured. Effort above a break arrives at a step that cannot use it (Fig 3 :20-21).

**Partition or union.** Forest, ocean and grassland share functions (primary production, nutrient retention), share disturbance types (drought, heat, harvest), and share observers. They are not disjoint. Fig 9 :55-56: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." So the question is not "one metric or many metrics by biome" but "one method applied to a union, with the intersections given their own loop."

---

## 2. Figure census (quoted verbatim, before conclusion)

| figure | bearing | verdict |
|---|---|---|
| Fig 1 The Agent | residual indexed per slot, not aggregated; frame-internal quantities disqualified | governs the scalar question directly |
| Fig 2 The Ground | anchor test, independence, convention versus verdict | governs what may count as a cross-system number |
| Fig 3 Dependency Chain | chain ordered by dependency; middle link has no instrument | governs the order of the work |
| Fig 4 The Membrane | kernel crosses, recording does not; round-trip gap R_T | governs transfer across systems and scales |
| Fig 5 Mint Pipeline | three guards as a product; acceptance is a bargain | governs whether a new universal index is licensed |
| Fig 6 Closure and Reachability | import moves the wall; instruments improved from worse ones | governs attempts to manufacture comparability |
| Fig 7 Room Chain | agreement compounds, evidence does not | governs multi-observer index validation |
| Fig 8 Union Surplus | residual first, frame second; no search proves absence | governs the search for a universal metric |
| Fig 9 Leave / Arrive | split rather than search; unbundle a union | governs forest/ocean/grassland as a union |
| Fig 10 Ground Maintainer | anchor reachable; conventions are not verdicts | governs who may define the index |
| Fig 11 The Habitat | enumerated never composed; valence relative to residual; capability is agent-and-habitat | governs what a resilience measure is a measure of |
| Fig 12 The Bond | arrangement is the substance; two currencies do not add | governs index compactness versus measurement cost |
| Fig 13 Minimum Viable Set | derived quantities are what a turn leaves, not new members | governs reifying resilience as a primitive |
| Symbols table | R is per slot; ground is the anchor | primary definition |

Strained readings are named as such in section 6, not smoothed over.

---

## 3. Findings

### F1. A single cross-system scalar is the aggregation that destroys the live signal (decisive against A)

Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
Fig 1 :28: "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."

Symbols table :43-44: "One object, region or entity being tracked. R is measured per slot, never as a single global number."

A global resilience number formed by averaging a forest, an ocean and a grassland is exactly the operation Fig 1 forbids. The live slot is the one system whose recovery is failing. Support is per slot: `|R⁺_s| > 0 for some s` (Formula step 3). A near-zero global score with one live slot is a legal state, not an inert one (Fig 1 :20-21). So A does not merely lose resolution; it loses the object of the question.

**Triangulation status: `triangulated`.** Fig 1 (per-slot measurement) and Fig 2 (:40-41, convention versus verdict) are low-overlap figures: one is about instrumentation, the other about what agreement means. Both govern the same quantity here, the scalar.

**Refuter.** Show a scalar that is itself a slot-level reading (not an average), that leaves `|R⁺_s|` readable for every member system, and that settles a recovery question without being recomputed after each disturbance. If such a scalar exists, F1 fails.

### F2. What transfers is the kernel, not the recording

Fig 4 :19-20: "The kernel is the part that does not change with size: the same loop and the same rule for naming what worked, whether one agent is running it or a thousand. Only the actors, the currency and the anchor change."
Fig 4 :22: "Only methods cross up. Only head starts come down."
Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion."

This is the direct answer to "works across." Forests, oceans and grasslands differ in actors (species, guilds), currency (what is counted: cover, biomass, recruitment, trophic structure) and anchor (the particular disturbance and the recovery outcome that settles it). What does not change is the loop: enumerate the habitat relative to a residual, bet, act, observe, measure `R` per slot against a ground that does not move, carry up the method. A number measured in one biome is a recording of one occasion; carried to another it produces a system that repeats a past success and cannot produce a new one.

Fig 6 :30 supports the outward leg: "outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms." A cross-system protocol must be written in effects (what would you see if recovery were failing?), not in the jargon of one biome.

**Triangulation status: `triangulated`.** Fig 4 (membrane) and Fig 6 (closure and instruments) are low-overlap routes to the same claim.

**Refuter.** Exhibit a transferable quantity that is not a method and not a recording of one occasion: a single number whose value is preserved across systems while the actors, currency and anchor all change, and that still predicts recovery. That would break the kernel/recording distinction.

### F3. Forest, ocean and grassland form a union, not a partition (single-source on Fig 9)

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
Fig 9 :4-5: "First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."

A single lever, "apply index X everywhere," clears the region where only one condition holds and leaves the intersections standing because the second condition still binds (Fig 9 :55-56). Peatland after drainage, seagrass after heat, and forest after fire are not harder versions of one case; each is a compound with its own loop.

**Triangulation status: `single-source`.** Fig 9 is the only figure line that governs union versus partition. Walker et al. 2004 says "There is no 'one size fits all' approach to the future," which corroborates from a different evidence pool, but world sources do not upgrade a figure verdict to triangulated.

**Refuter.** Show that the systems partition: each biome's binding conditions are disjoint, so one lever clears all regions including the intersections. Then unbundling is unnecessary and a universal index becomes thinkable.

### F4. The anchor must be a system-specific ground that does not update

Fig 2 :29-30: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."
Fig 2 :33: "The anchor must not update."
Fig 11 :73: "The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."

The anchor here is the recovery outcome after a real disturbance: what actually happened to the function at risk. A composite index whose definition is retuned until forests, oceans and grasslands all score sensibly is not an anchor; it is a frame that updates on the systems it is meant to grade. Fig 2 :34: "If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."

Fig 11 :39: "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone." Resilience has the same grammar. It is a property of system and habitat and disturbance regime, not a property stored in the system. Fig 11 :40: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."

**Triangulation status: `triangulated`.** Fig 2 (alignment and anchors) and Fig 11 (habitat and capability) are low-overlap figures.

**Refuter.** Produce a cross-system anchor that does not move when any frame pushes on it, that is the same quantity in forest, ocean and grassland, and that settles recovery without being retuned. Or show that resilience is a property of the system alone, independent of habitat and disturbance.

### F5. No standing list of good actors survives a change of residual

Fig 11 :50-51: "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds. No standing list of good actors survives a change of residual."

Any universal index built from a fixed indicator list (a fixed set of "resilient" functional groups, a fixed diversity-weighting) carries a valence that belongs to one residual. Move to another function or another disturbance and the same indicator changes sign. Fig 11 :43-44: "The habitat is enumerated, never composed. List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering." Enumeration is relative to the residual; it is not a one-time inventory.

Walker et al. 2004 supply the ecological vocabulary for the same point: they define resilience as "the capacity of a system to absorb disturbance and reorganize while undergoing change so as to still retain essentially the same function, structure, identity, and feedbacks," and note that "Different interpretations of what is meant by resilience, however, cause confusion." That is a world-source corroboration of Fig 11, not a figure line.

**Triangulation status: `single-source` for the valence claim (Fig 11 only).** The definition from Walker et al. is secondary and shares no evidence pool with the figures, but it is a world source, so it cannot make the figure verdict triangulated.

**Refuter.** Exhibit an actor whose valence is invariant across two different residuals in the same system, and show that a universal index can use it without re-enumeration.

### F6. Any claim of cross-system comparability owes a measured round-trip gap R_T

Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."
Fig 4 :31-32: "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."

`R_T = gap(x, (T_E ∘ T_A)(x))` (Symbols table :75-77, Formula step 6). Send a protocol up from forest practice (abstraction), bring it back down into ocean practice (concretisation), compare. The gap is what the common description cannot hold. Reporting a cross-system number without reporting R_T is dead reckoning. The gap is not to be driven to zero: it is the measurement of what was given up.

**Triangulation status: `single-source` (Fig 4).** Fig 6 :27 says "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same," which is a related but different quantity. I keep F6 single-source rather than stretch it.

**Refuter.** Show a transfer for which the abstraction and concretisation are lossless, so R_T is zero and need not be reported. Under Fig 4 :27-29 the transform between scales is lossy by construction, so this refuter is expected to fail, but it is written down before the conclusion as required.

### F7. Resilience is a remainder, not a seventh primitive

Fig 13 :124-125: "Smoothness, symmetry, chaos and discreteness are each what a particular composition leaves behind, and none is a seventh member."
Fig 13 :3: "No system functions without any of them, none is built from the others, and everything else is a composition across the two kinds."
Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."

Resilience is what a composition of network, gradient and spectrum over space, time and energy leaves behind when a disturbance is applied. It is not an extra state variable sitting alongside biomass and diversity. Measuring it as if it were a primitive (a thing a system "has" in an amount independent of what is arranged) is the flat-formula error: the ingredients are recorded and the arrangement is not.

**Triangulation status: `triangulated`.** Fig 13 (substrate) and Fig 12 (bond and arrangement) are low-overlap figures.

**Refuter.** Derive a seventh member from the six, or show that resilience is conserved across all rearrangements of the six so that the arrangement carries no information about it. Either breaks the reading.

### F8. Description cost and measurement cost do not add

Fig 12 :125-126: "A composition costs in two currencies, and they do not add. Bits price the description. Actions price finding out whether it holds."
Fig 12 :128-130: "The two readings come apart in both directions. A long chain of cheap parts is expensive to describe and may cost one action to refute. A short arrangement over a costly operand is cheap to state and may take a whole budget to settle. Neither figure predicts the other, so both are read or the choice is made blind."

A compact global index is cheap in bits and expensive in actions, because deciding whether it holds for a real ocean requires a long field campaign. A detailed per-slot protocol is expensive in bits and may be cheap to refute at one site. Summing them into one "efficiency score" is the named error.

**Triangulation status: `single-source` (Fig 12).**

**Refuter.** Exhibit a common unit in which bits and actions are commensurable and show that the resulting single score predicts which protocol to choose. Fig 12 :130 says summing is the error, so this is expected to fail, but it is recorded.

### F9. What survives: triangulated and single-source verdicts kept separate

| claim | mode | status | figure |
|---|---|---|---|
| A single cross-system scalar is an aggregate that hides the live slot | `general` structural, refutable | `triangulated` | Fig 1 :19, :22, :28 + Fig 2 :40-41 |
| The transferable thing is the method (kernel), not the measured value | `general` structural | `triangulated` | Fig 4 :19-20, :22, :25 + Fig 6 :30 |
| The systems are a union, so unbundle before searching | `specified` | `single-source` | Fig 9 :54, :55-56 |
| The anchor is a system-specific recovery ground that must not update | `general` structural | `triangulated` | Fig 2 :29-30, :33 + Fig 11 :73 |
| Valence of an indicator is relative to the residual | `specified` | `single-source` | Fig 11 :50-51 |
| Cross-system claims owe a measured R_T | `specified` | `single-source` | Fig 4 :30-32 |
| Resilience is a derived remainder, not a primitive | `general` structural | `triangulated` | Fig 13 :124-125 + Fig 12 :5 |
| Bits and actions are two currencies | `general` structural | `single-source` | Fig 12 :125-130 |

No row is `grounded`. No row is averaged with another.

---

## 4. Pre-registered refuter (written before this conclusion)

Required before any claim is made public: "a falsifier written before the run is a design instrument, not only an honesty device" (Seat Map, amended field guide, on pre-registration). The shape claim (B: transferable method, no universal scalar, union not partition) is refuted if any of the following holds.

1. **Anchor test.** A single scalar is shown to be an anchor: it settles a recovery question in forest, ocean and grassland, does not move when frames push on it, and does not need retuning after a disturbance (Fig 2 :29-30, :33).
2. **Slot test.** That scalar leaves `|R⁺_s|` readable for every member system, so no live slot disappears into an average (Fig 1 :19, :22).
3. **Union test.** The three systems partition rather than form a union, so one lever clears the intersections too (Fig 9 :54-56).
4. **Round-trip test.** A transfer is demonstrated with R_T = 0, so the common description loses nothing (Fig 4 :30-32).

If any fires, the shape claim is withdrawn and the scalar reading A is reinstated as the live option. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Stop asking for one number that works everywhere. Reframe the deliverable as a protocol with four parts: enumerate the habitat relative to the residual, read `R` per slot against a system-defined ground, report R_T for every transfer, keep verdicts separate.
2. State mode on every sentence. "Resilience cannot be measured across systems" is a `general` structural claim about composition, not a measurement result. The honest form is: "under the figures, a universal scalar is not composable; a transferable method is."
3. Enumerate the union's intersections as their own loops. Do not assume forests and oceans are separate cases.
4. Publish the refuter with the claim. Ask a checker what they would count as a failure, not whether they agree.
5. Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion." Send the protocol and the refuter, not a table of scores.

---

## 6. Canonical usage check, strains and re-census

The canonical figures README was read after the first five sections. It says: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." It also says a reading that makes one figure contradict another has misidentified its domain, and that a search that finds nothing is never a proof of absence. It describes the framework as producing "a shape, not a name" and stopping "at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."

**Strain 1, world source versus figure verdict (resolved by re-census, no flip).** Scheffer et al. 2009, in Nature, write that "work in different scientific fields is now suggesting the existence of generic early-warning signals that may indicate for a wide class of systems if a critical threshold is approaching." Read carelessly, this looks like support for a universal resilience metric. Re-census of R: Scheffer's generic signals (rising autocorrelation, variance, skewness) are a *pattern read from one system's own time series*. They are per-slot by construction. They govern proximity to a threshold *within* a system, not the comparability of scalar values *across* systems. So the world source corroborates F1 and F2 at a deeper level: what transfers is the shape of the signal, not a value. It does not flip the verdict. Fig 9 :53: "Nobody chooses. The gap does, and the gap is only as good as its description."

**Strain 2, Fig 1 versus Fig 12 (not strained).** Fig 1 forbids aggregation; Fig 12 says two currencies do not add. Both forbid a single number, but for different reasons: one because it loses the slot, the other because it collapses units. Different quantities, so no re-census owed.

**Strain 3, the word "anchor" in ecology versus in Fig 2 (resolved).** Walker et al. define resilience relative to "the same function, structure, identity, and feedbacks." That reference set is chosen by observers and can be negotiated. Fig 2 :25: "pinned: it does not update on A or B". So an ecological "reference state" is not automatically an anchor. It becomes one only when the question is constitutively about it and it cannot be moved by the measure (Fig 2 :36: "An anchor is legitimate when the question is constitutively about it."). Recorded as a distinction, not a contradiction.

**After re-census: three strains, all resolved or re-described, none hidden. No figure quote was taken from a summary.**

---

## 7. Retraction and confirmation log

Corrections are kept visible. Nothing here was silently erased.

| earlier reading | status after canonical check and re-census |
|---|---|
| "The figures say resilience cannot be compared across systems at all" | **Retracted.** The figures forbid a universal scalar, not cross-system work. Fig 4 :19-20 licenses the transfer of the kernel. Restated as F2. |
| "Fig 1 :22 forbids all indices" | **Narrowed.** It forbids an aggregate that hides a live slot. A per-slot index with `|R⁺_s|` reported is not touched by this line. |
| "Scheffer's generic early-warning signals conflict with the figures" | **Retracted as a conflict.** Re-census shows they are per-system pattern readings. They corroborate F1 and F2. Kept in the log so the nearly-wrong reading remains visible. |
| "There is no generic cross-system resilience signal in the literature" | **Retracted.** Scheffer et al. 2009 and Walker et al. 2004 both describe generic structure. What is missing is a generic *scalar value*, which is a narrower and now stated claim. |
| "Walker's reference state is the anchor" | **Retracted.** Fig 2 :33 requires the anchor not to update. A negotiated reference set is a frame until it is pinned to an outcome. |
| F1 "decisive against A" | **Confirmed, with mode attached.** It is decisive as a structural claim inside the figures. It is not a measurement result and cannot settle what practitioners should do. |
| F3 union reading | **Confirmed as single-source**, not promoted to triangulated by world agreement. |
| "shape, not a name" applied here | **Narrowed.** From the canonical README, the phrase governs a missing primitive. We are not naming a seventh primitive; we are choosing among arrangements of held terms. The phrase therefore governs the refusal to name a universal scalar, not a ban on using existing ecological quantities. |
| Simulated status | **Confirmed.** Recursive Self-Improvement Trap and Arrival of the Fittest both state that an LLM output of this kind is a simulacrum and cannot validate itself. |

---

## 8. What would settle the question

Not agreement. Fig 11 :73: "the ground is what settles, and it does not." Concretely:

1. Run the same protocol in a forest, an ocean and a grassland against three real disturbances, record the recovery outcomes, and report `R_T` for every cross-system transfer.
2. Try to break the shape claim with the four refuters in section 4. Publish the attempt whether it succeeds or fails.
3. Have an outside frame, one that does not hold this derivation, name what it would count as a failure before it reads the protocol.

Nothing in this folder constitutes such a run. The verdict stands as `candidate`.
