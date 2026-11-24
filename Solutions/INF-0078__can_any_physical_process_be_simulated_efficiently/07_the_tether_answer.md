# The Tether's answer on efficient simulation

**Mode: `specified` on the per-domain claims, `general` on the structural shape, `gap` on the universal yes/no. Not `grounded`.** This is a shape and a route, not a result. Simulated derivation checked for internal consistency against the figures (`05_what_shape_means.md` section 7), not a ground reading.

## 1. The residual it answers

For a simulator Γ_S, a physical process P, an object slot s and a budget B, `R = |Γ(b,a) - o′|` per slot, measured against a ground that does not update on what the simulator reports (Fig 2 :29). The question asks whether that residual can be kept near zero efficiently, and whether some processes resist even when they are computable in principle. It is a **union compound** with five overlapping conditions and different anchors, not one hard question with a yes/no answer. Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

## 2. The shape

1. **Reachability is not efficiency, and the difference is the wall.** MINT composes inside a closure and cannot add an atom (Fig 6 :21). Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." A process may be computable in principle and still sit behind a wall that only an import moves (Fig 13 :115: "The set is closed. The arrangements are not. That gap is why import exists.").
2. **Efficiency has two currencies that do not add.** Fig 12 :125: "A composition costs in two currencies, and they do not add." Fig 12 :126: "Bits price the description. Actions price finding out whether it holds." Any single runtime figure is a filter for the budget, never a witness for the verdict (Fig 9 :60).
3. **A simulation is a substituted habitat.** Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." A simulator cannot score itself with a quantity it also produces (Fig 1 :27), and "A verifier that can reconstruct the claim cannot verify it" (Fig 10 :42). Useful simulation requires a channel to a ground the simulator did not author.
4. **Chaos is the amplifying remainder.** Fig 13 :32: "comes from: a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise." Exact trajectory tracking is then budget-limited even though the rule is computable; statistics of the attractor can remain well-conditioned. Name the object that is claimed to resist.
5. **Some properties are underivable, not expensive.** Fig 8 :40-41: "Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions." The general spectral gap problem is undecidable; a precision problem is not. Importing a new atom against a budget limit buys the wrong thing.
6. **A substrate change is an import with provenance.** Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Feynman's quantum simulator and Lloyd's proof move the wall; they do not accelerate one classical program. Convergent derivation and adopted import look identical in the contents, and only the record separates them (Fig 8 :51).
7. **There is no last simulator.** Fig 7 :6: "the limit: no last room". A universal efficiency guarantee would be a final frame with no outside left to import from, and a universal "some always resist" would freeze a habitat and forbid a future import. Both are refused.
8. **The honest stop is `unreached`, not `unreachable`.** Fig 8 :39: "So a search that finds nothing is never a proof of absence." The universal question is a `gap`; per-process verdicts are `candidate` until an instrument settles them.

## 3. Verdicts per domain, kept separate and never averaged

| domain | verdict | mode | status |
|---|---|---|---|
| D1 Reachability | Computable in principle is closure membership; searching a fixed closure adds no atom | `general` rule, `specified` application | triangulated (Fig 6, Fig 8, Fig 13) |
| D2 State-space blowup | Classical description and settling are exponential for entangled many-body states; a quantum substrate moves the wall | `specified`, ungrounded | single-source for the figure rule, corroborated by physics |
| D3 Chaos | Exact-trajectory tracking is precision-budget-limited; attractor statistics can be computable | `specified`, ungrounded | triangulated (Fig 13, Fig 4, Corless 2025) |
| D4 Ground contact | A simulation succeeds only while a channel to a non-updating ground stays reachable; self-consistency is not capability | `general` rule, `specified` application | triangulated (Fig 1, Fig 10, Fig 11) |
| D5 Underivability | Some general physical questions are undecidable; this is not a budget fact | `specified`, ungrounded | triangulated (Fig 8, Fig 9, Cubitt et al. 2015) |
| Universal yes/no | `gap`, reported as a verdict and not as silence | `general` | Fig 9 :32, Fig 13 :134 |

## 4. What it explicitly does not say

- Not that no physical process can be simulated efficiently. Many are, and SEARCHED is asked first.
- Not that quantum simulators are always faster. Alsing, Cafaro and Mancini 2024 record that with enough loss and noise a classically efficient simulation exists for a process once thought to require exponential steps. Fig 11 :49 makes the valence relative to the residual.
- Not that chaos makes simulation useless. Corless 2025 shows statistics can be robust when trajectories are not.
- Not that undecidability of a general problem decides any particular instance.
- Not that a named algorithm is the framework's answer. The framework returns a shape, not a name; naming a substrate is a provenance-bearing binding.
- Not `grounded`. No measurement, simulation run or numerical experiment was performed in this derivation.

## 5. What would settle it: the ground

A source-discriminating instrument, not a further argument. From *The Hard Problem is About Source*: an instrument that reads green "cannot comment on the source"; the spectrometer resolved it. The discriminators are:

- **Channel test:** does the prediction still pay at the physical ground when the simulator's own report is withheld from the checking seat? A failure is a broken channel, not a bad algorithm.
- **Currency test:** measure description bits and settling actions separately for the same process and slot. If one is finite and the other unbounded, the failure is in the second account.
- **Trajectory-versus-statistic test:** state which object is required. Verify against the exact reference orbit, not a shadow orbit, before claiming that chaos blocks useful simulation.
- **Decision test:** for an alleged hard question, ask whether it is the general problem or an instance. Cubitt et al. decide the general spectral gap case but not every instance.
- **Round trip:** carry a simulator method up a scale and back down and measure `R_T`. Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."
- **Standing refuters:** the seven in `01_figure_grounded_audit.md` section 3, written before the conclusion.

## 6. The honest stop

The shape stops where instruments stop distinguishing. "Indiscernibility is not identity" (canonical figures README). The universal question cannot be closed because there is no last room from which a final simulator could be certified (Fig 7 :6), and no frame is a sealed room (Fig 9 :44). A future substrate import can change a per-process verdict without touching any primitive of nature. What is recorded is the route, the refused options, the provenance of imports and the refuters, so a later reader can locate the error rather than only feel it.

## 7. One-paragraph version for outreach

> The Tether does not answer "yes, any process" or "no, some always resist". It says the question bundles five conditions with different anchors. Computability is membership in a simulator's closure, and search inside a fixed closure never adds a primitive; efficiency is really two currencies, bits to describe and actions to settle, which do not add. A simulation is a substituted habitat, so a successful run proves wiring and never capability unless its prediction is still checked against a physical ground that does not update. Chaos is an amplifying remainder: exact trajectory tracking is budget-limited while attractor statistics can remain well-conditioned, so the object that resists must be named. Some properties, such as the general spectral gap problem, are underivable rather than expensive. A quantum substrate moves the wall, it does not speed up the same classical program, and the gain needs provenance. What the framework returns is that shape, seven refuters written in advance, and the instruments that would close each slot. The universal yes/no stays open as a declared `gap` until a ground settles it.
