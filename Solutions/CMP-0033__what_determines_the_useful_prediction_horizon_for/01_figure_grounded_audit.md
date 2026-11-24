# Figure-grounded audit: what determines the useful prediction horizon

**Mode of this document: `general` on the shape, `specified` on the mechanisms, never `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status: SIMULATED DERIVATION, not a ground reading.** *The Recursive Self-Improvement Trap* (read 2026-11-22) says LLM output can simulate an approximate answer but "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is checked for internal consistency against the figures only. No system was measured, so nothing here settles the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** Verbatim figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Formula: `FRAMEWORK/figures/THE_FORMULA.md`. Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `60_FIGURES_AS_METALAWS.md`. All world sources are listed in `10_source_ledger.csv` and were opened 2026-11-22.

---

## 0. The residual, stated in effect terms

The question asks what sets the useful prediction horizon for a system with nonlinear feedback and changing structure. Restated as an effect: a predictive frame issues predictions turn by turn; the ground returns observations; at some turn the prediction stops being useful. We want what determines that turn.

The loop already defines the quantity. Formula step 1: `R = |Γ(b,a) - o'|`, residual per slot `s`. The Symbols table calls `R` "the residual", "the gap between prediction and observation... the central quantity: everything the system does is driven by it." The ground enters as the only metric (`Fig 1 :23 "The ground enters as the only metric."`).

**The shape bound before the run.** Write down what an answer would look like so it can accrue a residual (Fig 5 :65-66, the "ordinary term" discipline). An answer here is:

1. a per-slot boundary where `R` crosses the tolerance the decision actually uses,
2. a census of what can move that boundary (feedback sign, lossy abstraction, new atoms entering contact, channel decay),
3. a distinction between a horizon limited by budget and a horizon limited by genuine absence.

A single scalar number of time steps is not that shape. If a derivation returns only a number, the refuter has nothing to bite on, which is why the number is refused before the run.

---

## 1. Domain census (before choosing any figure line)

**R by arity, symmetry, scale.**

- *Arity:* `R` is indexed by object slot. `Fig 1 :19 "The residual is indexed by object slot, not aggregated."` The horizon is therefore a vector of per-slot boundaries, not one global time. A system can look healthy in the mean while one slot is already failing: `Fig 1 :13 "a global R near zero with one live slot residual is a legal state"`.
- *Symmetry:* not symmetric. The loop is ordered (perceive, plan, act, predict), and the residual re-enters forward through an amplifying chain. Time direction is built into the quantity, so any symmetric "average error" reading is a strain and is rejected.
- *Scale:* the horizon spans the one-agent loop and the abstraction/population level. `Fig 4 :27 "The transform between scales loses information, and that is the point."` A horizon read at one scale will not transfer to another without a measured gap.

**One line per domain: actors / currency / anchor.**

| domain | actors | currency | anchor | nameable? |
|---|---|---|---|---|
| D1 predictive frame | library Γ, belief b, action a, slots s, candidate term φ | residual R and description cost | the ground (observation o'), which does not update | yes: instrument, dataset, scoring run |
| D2 system / habitat | feedback cycles, the six substrate kinds, new actors and relations entering contact | contact | what actually happens (the same ground) | yes: measured trajectory, logged regime change |
| D3 verification frame | decision maker, instrument, tolerance, scoring function | agreement vs residual, and action cost | the ground, never agreement | yes: an out-of-sample score or a board |

No domain here is a "not yet a domain" case: each has a nameable anchor that does not move when a frame pushes on it (`Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."`).

**Partition or union.** This is a **union compound**, not one hard question. There is a first-order question (at fixed structure, does `R` grow past tolerance?) and a second-order question (does the structure change so that the frame's closure no longer contains the relevant term?). `Fig 9 :54` names the failure: a bundled problem is usually a union of overlapping conditions, and a case in two conditions is not a harder case of either. So "prediction horizon" needs its own loop, not a single lever.

**Dependency order (Fig 3).** Describe the residual per slot first; then fix the sign of each feedback loop; then enumerate what new terms enter contact; then decide whether the limiting term is in the closure already (budget) or absent (import). Effort spent on a later link cannot rescue an earlier one: `Fig 3 :19 "Optimising a link that already works cannot rescue one that does not."`

---

## 2. Figure census (bearing and verdict before conclusion)

| figure | bearing on this residual | verdict after strain test |
|---|---|---|
| 1 The Agent | residual per slot; ground is the only metric; frame-internal quantities disqualified | governs arity and the no-average rule |
| 2 The Ground | anchor must not update; agreement from one pool is worthless | governs the anchor and the verification frame |
| 3 Dependency Chain | ordered links; a reading below the break reads nothing | governs the derivation order |
| 4 The Membrane | lossy transform and round-trip gap R_T between scales | governs abstraction-limited horizon |
| 5 Mint Pipeline | shrinking residual test; preference must be a bound term; MDL bargain | governs the pre-run shape binding and tolerance |
| 6 Closure / Reachability | import is the only operator that moves the wall; depth vs genuine absence | governs structural-change limit |
| 7 Room Chain | progress per handoff, R = h² x S; no last room | **strained: governs frame-to-frame handoffs, not a single forecast; re-censed below** |
| 8 Union Surplus | idempotent closure; underivable vs unreachable-at-budget; residual first | governs budget vs absence and the union reading |
| 9 Leave / Arrive | describe before looking; union vs partition; filters are not witnesses | governs compound split and the shape limit |
| 10 Ground Maintainer | ground does not decay, channel does; verifier non-access | governs channel-limited horizon |
| 11 The Habitat | capability is agent-and-habitat; contact cascades several steps out | governs new atoms entering contact |
| 12 The Bond | cycle (sign of loop), catalyst, two currencies (bits and actions) | governs nonlinear feedback and the cost split |
| 13 Minimum Viable Set | residual compounding in an amplifying chain is chaos; cross-kind composition | governs the amplification mechanism |
| Operators / Symbols tables | R is the aim and always a slice; negation refuses a held term | governs per-slot reading and refusal before mint |

Strained readings are named, not smoothed over. Section 6 records a retraction where an early reading of Fig 7 failed the strain test.

---

## 3. Findings

### F1: The horizon is per-slot; there is no single global number (mode: `general`, structural)

Verbatim lines, read before concluding:

- `Fig 1 :19 "The residual is indexed by object slot, not aggregated."`
- `Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."`
- `Fig 1 :28 "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."`

If the horizon were a single time constant, it would have to be an aggregate. The figures disqualify that aggregate as exactly the move that hides the live slot. The binding horizon is the first slot whose residual goes live and does not trend down (Formula step 2's persistent-and-flat test, read with the growth sign). **Status: triangulated** across three lines of Fig 1 plus Formula step 1, low internal overlap (arity, averaging, gap location are separate statements).

**Refuter:** exhibit a system in which a single global tolerance on the mean residual predicts the failure turn of every slot as well as per-slot tracking does, across at least one regime change.

### F2: Nonlinear feedback enters as a cycle whose sign decides whether the residual closes or grows (mode: `specified`)

- `Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."`
- `Fig 13 :31 "a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise."`

"Output re-enters as input" is the figure's own definition of a feedback loop, and the sign is load-bearing: a closing loop contracts residuals, an amplifying one compounds them. So the first determinant of a horizon is the sign of each active loop, not the nominal size of the system. A positive loop does not make prediction impossible at all horizons; it makes the horizon finite and inversely related to the loop's gain. **Status: triangulated** across Fig 12 (structure of the loop) and Fig 13 (dynamics of the remainder). These are different objects, so agreement is not a restatement.

**Refuter:** exhibit a system with an active amplifying loop (output re-entering as input with a closing sign) whose live-slot residuals stay bounded and trend down indefinitely without any channel maintenance or frame change.

### F3: Changing structure brings new atoms into contact; the horizon ends there and needs an import, not more search (mode: `specified`)

- `Fig 11 :52 "Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."`
- `Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."`
- `Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."`

A changing structure is not "the same model with different numbers": it is new actors and relations entering contact. The figure's DDT case is the point: the residual that mattered was three steps out, beyond first-order enumeration. When the relevant term is outside `closure(Γ)`, no amount of additional forecasting inside the frame reaches it (Fig 6 :32 "MINT composes inside the closure and can never add an atom."). The remedy is an import with a source gate and a shadow test, not a longer compute budget. **Status: triangulated** across Fig 11 (contact cascade), Fig 6 (wall moves only on contact) and Fig 8 (idempotence).

**Refuter:** exhibit a term introduced by a structural change that is derivable by search inside the unchanged frame's closure, with the derivation shown.

### F4: Lossy abstraction sets an irreducible horizon through the round-trip gap R_T (mode: `specified`)

- `Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."`
- `Fig 4 :31 "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."`

Every forecast compresses the situation into a coarser description and brings the result back down. Because the transform loses information (`Fig 4 :27 "The transform between scales loses information, and that is the point."`), the round trip is not reversible: something the situation needs cannot be held by the description. The horizon is where that unheld detail becomes the live residual. Formula step 6 writes the error signal as `R_T = gap(x, (T_E o T_A)(x))`. **Status: triangulated** across Fig 4 and Formula step 6 (same framework, different statements: one semantic, one operational).

**Refuter:** exhibit a lossy abstraction whose long-horizon prediction matches the ground on every live slot with a measured round-trip gap of zero.

### F5: Budget-limited and genuinely absent horizons are different facts and issue opposite instructions (mode: `general`)

- `Fig 8 :41 "Underivable: go outside. Unreachable-at-budget: the term is already in the closure and was not found, so the remedy is more search, not another atom."`
- `Fig 6 :27 "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."`
- `Fig 8 :39 "So a search that finds nothing is never a proof of absence."`

A forecast that fails can fail because the needed term is in the library and was not found (more search extends the horizon) or because the term is not in the closure at all (an import is owed). From inside, the two look identical, so the distinction is not a feeling; it is a separate derivation. Treating an absence as a budget problem wastes compute and adds an unneeded atom. Treating a budget problem as an absence imports an atom that was not needed, which `Fig 8 :42` prices above starting from primitives. **Status: triangulated** across Fig 8 and Fig 6 plus Formula step 7.

**Refuter:** exhibit a failed forecast classified as absence that is reliably cured by more compute with no new atom, and that is indistinguishable from a budget failure by the census.

### F6: The horizon belongs to the forecaster-and-habitat and ends when the channel decays, not when the ground changes (mode: `specified`)

- `Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves."`
- `Fig 10 :24 "the ground does not decay, the channel does"`
- `Fig 10 :27 "the output is not a verdict, it is you have lost touch"`

Improving the model in isolation does not extend a useful horizon; what extends it is keeping contact with the ground (fresh observations, re-fit terms, maintained instruments). The figures call the failure mode stale percepts, dropped transients, saturated metrics and pooled readings. `Fig 10 :29` gives the office: "keep the anchor reachable." A horizon is therefore a property of the pair (forecaster, habitat), not of the forecast alone. **Status: triangulated** across Fig 11 (capability is agent-and-habitat) and Fig 10 (channel vs ground).

**Refuter:** exhibit a forecast that remains useful after all contact with the ground is cut, with the residual still measured against a ground the forecaster cannot reach.

### F7: The framework returns a shape, not a horizon number (mode: `general`, single-source)

- `Fig 9 :32 "you get a kind of thing, never the answer itself"`
- `Fig 9 :27 "describe it before you go looking, or any frame you pick will seem to fit"`

The canonical README says the framework names "what a missing thing would have to look like (a shape, not a name)." So what is derivable here is the boundary description and the limiter census, not "this system is predictable for 14 days." A number is licensed only when a ground settles a minted term for that specific system. **Status: single-source** (Fig 9 and the canonical README share an author and an evidence pool; this is one witness, not two).

**Refuter:** produce a numeric, system-specific horizon from the figures alone with no ground reading. That would break the mode rule ("general · specified · grounded. State which.") and collapse the distinction the shape preserves.

### F8: Two currencies limit the horizon and they do not add (mode: `specified`, single-source for the figure)

- `Fig 12 :125 "A composition costs in two currencies, and they do not add."`
- `Fig 12 :126 "Bits price the description. Actions price finding out whether it holds."`

A horizon can be description-limited (the model cannot be stated within the budget) or settlement-limited (the model can be stated but not checked in time). They are in different units. Collapsing them into one "cost" hides which lever actually moves the horizon. The MPC source (Bøhn et al., 2021, read 2026-11-22) independently reports that a longer prediction horizon raises performance but "requires an increasingly powerful computing platform", an action/budget limit rather than a description limit. **Status: single-source** for the figure definition; the world source is corroboration only and shares no authors with the framework.

**Refuter:** exhibit a single scalar cost that predicts both description-limited and settlement-limited horizon failures with equal accuracy across two systems.

---

## 4. Pre-registered refuter (written before the conclusion)

Required by the discipline that a falsifier written before the run is a design instrument. The whole shape claim (F1 to F8 together) is refuted if any of the following holds:

1. A single global tolerance on a mean residual predicts every slot's failure turn across at least one regime change (breaks F1).
2. An active amplifying feedback loop coexists with bounded, downward-trending live-slot residuals indefinitely without channel maintenance (breaks F2).
3. A term introduced by structural change is derivable inside the unchanged closure (breaks F3).
4. A lossy abstraction returns a measured round-trip gap of zero against the ground on every slot (breaks F4).
5. A numeric system-specific horizon follows from the figures with no ground reading (breaks F7 and the mode rule).

None of these was run. Until one is, no subsystem claim can be labelled `grounded`.

---

## 5. Recommendation

1. Read the horizon as a per-slot boundary, never as a global time constant (F1).
2. Census the sign of each feedback loop before modeling the magnitude (F2).
3. Enumerate the habitat outward at least three steps; assume the residual that matters is not in direct contact (F3).
4. Measure the round-trip gap instead of assuming the forecast's compression is free (F4).
5. Run the budget/absence split before choosing a remedy (F5).
6. Maintain the channel; a better model with the same contact buys nothing (F6).
7. State the mode. Offer the shape and the refuter, then ask for a refutation, not agreement (`Fig 2 :45 "Frames range against the ground. They do not negotiate with it."`).

---

## 6. Canonical usage check, retractions and confirmations

Read after sections 0 to 5: `FIGURES_README_canonical.md` and `60_FIGURES_AS_METALAWS.md`. Two rules govern how the above may be used. First: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Second, from the metalaws note: the seat reads the ground; it does not ask the anchor to decide what the figures already settle. The figures are the ground for design questions, so no ruling was requested.

| earlier reading | status after the canonical check |
|---|---|
| Fig 7 :26 "progress per handoff: R = h² × S" taken as a decay law for forecast error | **Retracted.** Re-census: Fig 7 governs progress across handoffs between rooms (selection between frames), not the within-frame growth of a residual. It governs another quantity, so it was removed from the findings. No verdict rests on it. |
| "Chaos makes all long horizons impossible" | **Narrowed.** Fig 13 :31 governs one limiter (an amplifying chain). Fig 10 :29 shows the channel can be maintained, and Fig 8 :41 separates budget from absence. Chaos is one of several limiters, not a blanket ban. |
| "Prediction horizon is a single number" | **Refused before the run** as the unbound preference. What survives is a per-slot boundary with a limiter census. |
| Shape-not-a-number (F7) | **Confirmed but marked single-source.** The README and Fig 9 share one evidence pool, so this is not independent corroboration. |
| No-direct-averaging (F1) | **Canonically confirmed.** Fig 1 :22 and :28 are explicit, and the Formula step 1 per-slot definition agrees. |
| "More compute always extends the horizon" | **Refuted by the figures.** Fig 8 :32 idempotence and Fig 8 :41 budget/absence split make that false when the term is absent. |

**Strain after re-census: one named, none hidden.** The Fig 7 reading was a genuine strain and was retracted rather than smoothed. The remaining findings use figures that govern the same quantity (residual growth against a ground at a per-slot boundary). Consistent with the canonical rule that a reading which makes figures contradict each other has misidentified its domain, the re-census moved Fig 7 to a different quantity instead of softening it.
