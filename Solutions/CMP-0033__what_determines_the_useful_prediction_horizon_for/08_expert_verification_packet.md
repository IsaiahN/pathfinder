# Expert verification packet: the Tether on the useful prediction horizon

**What this is:** a claim in a form a complex-systems researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `general` shape, `specified` mechanisms, not `grounded`.** No system was measured. This is a shape and a route, not a result.

## 1. The claim, in one paragraph

For a system with nonlinear feedback and changing structure, the useful prediction horizon is not a single time constant. It is a per-slot boundary where the prediction-minus-observation residual crosses the tolerance the decision actually uses. What moves that boundary falls into four classes: the sign of each feedback loop (output re-entering as input, closing or amplifying), the lossy round trip from situation to forecast and back, new actors and relations entering contact as the structure changes, and decay of the channel to the ground. Two classes are cured by more search, two by changing the frame or maintaining contact, and from inside the two cases look identical, so the census must be done explicitly. The framework returns the shape, not a number; a number requires a measured residual from a real system.

## 2. Three checkable sub-claims

### C1: framework-internal; checkable by reading Figure 1

- **Statement:** the horizon is per slot; a single global average is disqualified as the signal.
- **Source, verbatim:** `Fig 1 :19 "The residual is indexed by object slot, not aggregated."` Also `Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."`
- **What to check:** is the score used in practice a global mean, and does that mean hide the first live slot? If yes, the practical horizon estimate is the figure's named failure.
- **Refuter:** exhibit a system where a single global tolerance predicts every slot's failure turn across a regime change as well as per-slot tracking does.

### C2: system-facing; checkable by a complex-systems researcher against their own system

- **Statement:** nonlinear feedback is a cycle whose sign sets the early horizon; changing structure brings new terms into contact beyond first-order enumeration.
- **Source, verbatim:** `Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."` Also `Fig 11 :52 "Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."`
- **What to check:** does the model contain re-entry of output as input? If it is a one-way chain, it cannot represent the mechanism. Then enumerate contact outward three steps: was the term that actually broke the forecast in the original frame's closure?
- **Refuter:** an amplifying loop whose live-slot residuals stay bounded and trend down indefinitely without channel maintenance; or a structural change whose new term is derivable by search inside the unchanged closure.

### C3: framework-internal derivation with an operational test

- **Statement:** the lossy round trip sets a gap, and the budget/absence split decides the remedy.
- **Source, verbatim:** `Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."` Also `Fig 8 :41 "Underivable: go outside. Unreachable-at-budget: the term is already in the closure and was not found, so the remedy is more search, not another atom."`
- **What to check:** hold the frame fixed and vary compute; then vary the frame. If the horizon extends only in the second case, it was an absence. Measure `R_T = gap(x, (T_E o T_A)(x))` rather than assuming the compression is free.
- **Refuter:** a measured round-trip gap of zero on every live slot, or a failure reliably cured by more compute with no new atom that is indistinguishable from an absence by the census.

## 3. What is explicitly not claimed

- Not a number of days, steps or cycles for any named system.
- Not that chaos makes all long prediction impossible. It is one of four limiters.
- Not that a bigger model is the answer to a failed forecast. Channel failures and budget failures have different remedies.
- Not `grounded`. Nothing here was settled by a measurement.
- Not that the four limiters can be averaged into one severity score. They are isomers of one residual (`Fig 12 :117 "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."`), and the bond decides the remedy.

## 4. Provenance

- Question: `Questions/complexity science.txt` line 42, section 4. Source ID CMP-0033.
- Figure text extracted verbatim from the canonical local file `FRAMEWORK/reference/03-FIGURES_TEXT.md`; every `Fig N :line` quote in this packet was checked against it.
- Formula and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`. Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md`.
- Essays by Isaiah N, 2026, read 2026-11-22 and listed in `05_what_shape_means.md`.
- World sources read 2026-11-22: Lyapunov exponent and Predictability and Structural break (Wikipedia contributors, 2026); Bøhn, Gros, Moe and Johansen (2021); Wesselkamp et al. (2024/2025). All are secondary and recorded in `10_source_ledger.csv`.
- This packet compiled 2026-11-22.

## 5. What would settle it

A discriminating measurement, not agreement. From *The Hard Problem is About Source* (read 2026-11-22): an instrument reading green "cannot comment on the source", and the case was closed only by the spectrometer. Here:

1. Does a global tolerance predict every slot's failure across a regime change?
2. Does an amplifying loop coexist with indefinitely bounded residuals without channel maintenance?
3. Three-step contact enumeration: was the breaking term in the original closure?
4. Does `R_T` measure nonzero, and does varying compute alone extend the horizon?

## 6. What an expert can check in twenty minutes

1. Read `Fig 1 :19`, `Fig 1 :22`, `Fig 12 :121`, `Fig 11 :52`, `Fig 4 :30`, `Fig 8 :41` (six short passages).
2. In one system you know: name the live slot, the sign of the active loop, and the term outside the closure.
3. Say which of the four limiters actually ended your last forecast, and what remedy was used.
4. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
