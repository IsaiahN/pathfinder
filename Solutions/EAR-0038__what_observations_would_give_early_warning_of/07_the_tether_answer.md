# The Tether's answer: what would give early warning of a major ice change

**Mode: `specified` on the observation set, `general` on the structural shape. Not `grounded`.** This is a shape and a route, not a forecast. It is a simulated derivation checked against the figures (`05_what_shape_means.md` section 6), not a ground reading of any glacier.

## 1. The residual it answers

`R = |Γ(b,a) − o′|` per slot. The prediction Γ is the ice's expected recovery after a melt, snowfall, ocean-heat or basal-water perturbation; the observation o′ is the measured elevation, mass, velocity, terminus position or fracture state. In a stable state R decays. Approaching a major change, R persists. The question asks which observations register that persistence early enough to matter. The contact between ice dynamics and diagnostic theory is a **union compound** (Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."): it needs its own loop and its own anchor.

## 2. The shape

1. **Warning is per slot, not per ice sheet.** Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." The warning lives in a named basin or glacier. The Greenland studies are explicitly regional in their reported signal.
2. **The signature is a residual that persists and does not trend down.** Fig 5 :59: "a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at". The selector's shrinking test, read with the opposite sign, is exactly a slowing recovery. Concretely: rising lag-1 autocorrelation, rising variance or standard deviation, longer return time, spectral reddening, and where appropriate skewness or flickering, each computed on the detrended residual in rolling windows.
3. **Single state extremes are not warnings.** The Planetary Security Initiative summary (2025) puts it plainly: changes in the normal state are often not informative about stability. A record melt summer is a state reading; the warning is the failure of the system to recover from it.
4. **Only instruments already returning data may be named.** Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something." Altimetry, gravimetry, InSAR coherence and velocity, ice-core height reconstructions, fracture depth and terminus positions qualify. A dedicated future tipping sensor does not, until something at some resolution already registers.
5. **The statistic must be refusable.** A rising variance can be inherited forcing, coverage change or genuine resilience loss (*The Hard Problem is About Source*: metamerism). Chapman et al. (2026) test the inherited-forcing null; where it is not rejected, the warning is withdrawn. Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves."
6. **Independent instruments, not agreeing reports.** Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence." Two different instruments ranged against the same ice are two frames; two teams reading the same product are one. Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."
7. **The cascade is second order and is kept separate.** Fig 11 :52-53: "first-order enumeration, second-order effect, and the residual that mattered was three steps out." A warning transmitted into a neighbour is a compound, not a stronger first-order warning (Fang et al. 2025).
8. **No date and no threshold value.** Fig 9 :32: "you get a kind of thing, never the answer itself." Mannerfelt et al. (2025) obtain surge forecasts whose errors range from four months to nine years. A warning is elevated risk with a stated shape, not a scheduled event.

## 3. What it explicitly does not say

- Not that any named glacier or ice sheet is currently tipping, and not that a threshold has been crossed.
- Not that a particular instrument is the best one; only that it must already return a distinguishable value.
- Not that CSD statistics work for noise-driven or rate-driven transitions; Fang et al. (2025) and Chapman et al. (2026) limit them to the bifurcation case.
- Not that a null result proves stability. Fig 8 :39: "So a search that finds nothing is never a proof of absence."
- Not grounded. No measurement in this package settles `left(R,φ)` for a specific ice body.

## 4. What would settle it - the ground

A discriminating observation, not more agreement. The questions to put to the ground:

- Does the rising statistic survive a null of inherited forcing variability and changing coverage, using the same assumption tests as Chapman et al. (2026)?
- Do two low-overlap instruments, ranged separately against the ice, show the same trend at the same slot?
- Does the warning precede an independently documented change in a held-out set of glaciers, with better discrimination than raw state extremes?
- Does a second-order signal persist after each slot's own first-order residual is accounted for?
- **Standing refuters from `01`:** necessity fails, discrimination fails, source fails, slot rule fails, or instrument rule fails. Any one narrows or withdraws the shape claim.

## 5. The honest stop

**Unreached, not unreachable.** The answer stops at the limit of what the already-returning instruments can distinguish. Where no signal is found, the report is "no warning detected at this instrument, resolution and record length", not "stable". Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." The round-trip gap for this condensation is measured qualitatively in `11_audit.md`. Indiscernibility is not identity.

## 6. One-paragraph version for outreach

> Early warning of a major glacier or ice-sheet change is not a record melt summer. It is a residual at a named basin or glacier that persists and does not trend down: after each perturbation the ice recovers more slowly, so the detrended elevation, mass, velocity or fracture series show rising lag-1 autocorrelation and variance, sometimes skewness or flickering, and eventually a warning that spreads to neighbouring basins. The figures require that the signal be indexed per slot rather than averaged into a whole-ice-sheet mean, that the instrument already be returning something, that the rising statistic survive a null of inherited forcing, and that a second, independent instrument confirm it. They also require a refusal: a warning that only tracks the driver is not a warning. What this offers is the shape a warning must have, four tests that would break it, and a recorded stop where the instruments can no longer distinguish. It names no glacier, gives no date, and claims no measurement as settled.
