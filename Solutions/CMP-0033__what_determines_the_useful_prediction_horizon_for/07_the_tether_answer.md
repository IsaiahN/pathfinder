# The Tether's answer on the useful prediction horizon

**Mode: `general` on the shape, `specified` on the mechanisms, not `grounded`.** A shape and a route, not a result. Simulated derivation checked for internal consistency against the figures (`05_what_shape_means.md` section 6), not a ground reading.

## 1. The residual it answers

A forecaster issues predictions turn by turn against a system with nonlinear feedback and changing structure. The ground returns observations. The residual `R = |Γ(b,a) - o'|` is measured per slot, and at some turn the prediction stops being useful. The question asks what determines that turn. The union reading (Fig 9 :54) says this is not one quantity: it is a compound whose conditions need separate verdicts and separate remedies.

## 2. The shape, one verdict per domain (never averaged)

**D1, the predictive frame.** The horizon is a per-slot boundary, not a global time. `Fig 1 :19 "The residual is indexed by object slot, not aggregated."` `Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."` The binding slot is the first one whose residual goes live and does not trend down. Verdict: `general`, triangulated across three Fig 1 lines plus Formula step 1.

**D2, the system / habitat.** Nonlinear feedback enters as a cycle whose sign sets the early horizon. `Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."` `Fig 13 :31 "a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise."` Changing structure brings new atoms into contact beyond direct enumeration (`Fig 11 :52 "Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."`). Verdict: `specified`, triangulated across Fig 12, Fig 13 and Fig 11.

**D3, the verification frame.** The compression of a situation into a forecast and back is lossy; the horizon is where the unheld detail becomes the live residual. `Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."` The horizon also ends when the channel decays, not when the ground changes: `Fig 10 :24 "the ground does not decay, the channel does"`. Verdict: `specified`, triangulated across Fig 4, Fig 10 and Formula step 6.

**The remedy split, across all domains.** If the needed term is in `closure(Γ)` and unfound, more search extends the horizon. If it is absent, search cannot help and an import is owed. `Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."` `Fig 8 :41 "Underivable: go outside. Unreachable-at-budget: the term is already in the closure and was not found, so the remedy is more search, not another atom."` Verdict: `general`, triangulated across Fig 8 and Fig 6.

**Shape limit.** The framework returns a boundary description, not a number: `Fig 9 :32 "you get a kind of thing, never the answer itself"`. Verdict: `general`, single-source (Fig 9 and the canonical README share an evidence pool).

## 3. What it explicitly does not say

- Not one global horizon number, and not an average over slots.
- Not that chaos makes long prediction impossible in all systems. Amplification is one limiter among four; maintaining the channel and importing a term are separate levers.
- Not that every failure needs a bigger model. A channel failure or a budget failure has a different remedy.
- Not a derivation of any system's horizon. No residual was measured; no term was settled against a ground.
- Not `grounded`. Everything here is candidate until a measurement pays for it.

## 4. What would settle it: the ground

A discriminating instrument, not a further argument. *The Hard Problem is About Source* (read 2026-11-22): an instrument that reads green "cannot comment on the source"; it was the spectrometer, not an argument, that resolved the sources. Here the corresponding tests are:

1. **Per-slot check:** does a single global tolerance predict every slot's failure turn across a regime change? If yes, F1 falls.
2. **Sign check:** does an amplifying loop coexist with bounded, downward-trending live-slot residuals indefinitely without channel maintenance? If yes, F2 falls.
3. **Contact check:** enumerate the habitat three steps out and test whether the term that actually broke the forecast was in the original closure. If it was derivable by search, F3 falls.
4. **Round-trip check:** measure `R_T = gap(x, (T_E o T_A)(x))`. If it measures zero on every live slot, F4 falls.
5. **Budget/absence check:** hold the frame fixed and vary compute, then vary the frame. If the failure is cured by compute with no new atom, it was a budget failure all along.

Full pre-registered refuter is in `01_figure_grounded_audit.md` section 4.

## 5. The honest stop

**Unreached, not unreachable.** `Fig 8 :39 "So a search that finds nothing is never a proof of absence."` The derivation stops at the limit of what the figures can distinguish and records the lineage so the stop is checkable. The four limiter classes are a shape, not a measurement. Indiscernibility is not identity: two failures with the same score are not the same failure.

## 6. One-paragraph version for outreach

> The Tether does not give a number of days for any system. It says the useful prediction horizon is a per-slot boundary where the residual crosses the tolerance the decision uses, and that what moves that boundary falls into four distinguishable classes: the sign of each feedback loop, the gap introduced by compressing the situation into a forecast, new actors entering contact as the structure changes, and decay of the channel to the ground. Two of these are cured by more search, two by changing the frame or maintaining contact, and from inside they look the same. What the framework offers is the shape any acceptable answer must have, four refuters written in advance, and the instruments that would close it. The number stays open until a ground settles it.
