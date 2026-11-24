# The Tether's answer: how to test generalization rather than historical fit

**Mode: `general` on the shape, `specified` on the falsifiable predictions, not `grounded`.** Simulated derivation checked against the figures (`05_what_shape_means.md` §6), not a ground reading.

## 1. The residual it answers

A model fits historical data but the question is whether its predictions carry to new conditions. In effect terms: does R(M, C) stay small as C moves off the pool that produced the fit, and what would count as a failure before the test is run? Arity two (model and habitat), symmetry ordered (the transport direction is part of the quantity), scale two (within condition, then across conditions). Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone."

Fit and transport are a **union compound**, not one hard question. Fig 9 :55-56: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." So they need two loops and per-domain verdicts, never an average.

## 2. The shape of a valid test

1. **The claim is about transport, not accuracy.** Fig 1 :27: "A frame cannot score itself with a quantity it also produces." A fit score is produced by the frame being scored. Fig 5 :44: "A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."

2. **Seal an anchor the model cannot update.** Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :30 "If it moves when you push on it, it is not an anchor." Test conditions are fixed before model selection and never used for tuning. Fig 2 :45: "Frames range against the ground. They do not negotiate with it."

3. **Choose conditions by low overlap with the training pool.** Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence." Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." A random split of one historical dataset gives two names for one frame (Fig 8 :48-49). It can be reported, but it cannot witness the transport claim.

4. **A same-distribution holdout proves wiring, not capability.** Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." Enumerate the habitat instead: Fig 11 :43, "The habitat is enumerated, never composed." List what you failed to reproduce and what you introduced (Fig 11 :30).

5. **Transport error is the round-trip gap R_T.** Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." Fitting throws detail away; deployment puts the model back into a specific situation; the residual there is the gap. Fig 4 :31: "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold."

6. **Report per condition, never the mean.** Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." Publish the residual vector and the worst case. (The move from Fig 1's object slot to condition slot is a declared level crossing, see `01` §7.)

7. **Keep the verifier blind to the maker.** Fig 9 :51: "evidence bearing on the residual is admissible; evidence bearing only on its maker is a stake-inducing channel, and the verifier is denied it." Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it."

8. **Buy independence in proportion to the cost of being wrong.** Fig 2 :42: "Buy independence in proportion to the cost of being wrong." For a high-stakes model, add genuinely new conditions, not more recipients from the same pool.

9. **Passing leaves a candidate.** Fig 8 :39: "So a search that finds nothing is never a proof of absence." Fig 9 :44: "Only a sealed room can be searched to the end, and no frame is a sealed room." No finite suite exhausts the habitat.

## 3. What it explicitly does not say

- Not that any particular model generalizes. No model was tested here.
- Not that cross-validation is useless. It is a fit check, not a transport witness.
- Not that a low-overlap test suite proves transport. It fails to refute, which is weaker.
- Not a single validation score. Fig 12 :126: "Bits price the description. Actions price finding out whether it holds." The two currencies do not add.
- Not that naming a benchmark is deriving one. A benchmark is a binding from the validation frame and must be provenanced as such.
- Not `grounded`. No observation was collected.

## 4. What would settle it and what would break it

The ground, not agreement, settles it. A sealed, low-overlap condition is observed; the frozen model's prediction is compared with the outcome; the residual vector is published. That is a ground reading, which this package does not contain.

**Falsifiers, written before the run** (full set in `01_figure_grounded_audit.md` §4):

1. A model-produced score shown to settle transport with no independent observation.
2. Same-pool samples shown to carry as much deployment information as low-overlap conditions.
3. A substituted test habitat shown to demonstrate capability, not wiring.
4. Averaging shown to preserve every live per-condition failure.
5. A finite suite shown to prove absence of failure.

Any one fires against a specific claim and sends that domain back to the census. It does not flip the verdict by preference.

## 5. The honest stop

**Unreached, not unreachable.** The figure set gives the shape of a valid test, not a certificate. The five world sources in `09_watson_answer.md` corroborate from low-overlap fields, but the verdict comes from the figures. This is a simulation: it cannot settle the question it reports on. The lineage is recorded so the stop is checkable: "Indiscernibility is not identity" (canonical README).

## 6. One-paragraph version for outreach

> The Tether does not offer a new validation score. It says that "does this model generalize?" is the wrong shape of question, because capability belongs to the model and its habitat together. A real transport test needs four things: an anchor the model cannot update, conditions drawn from a different evidence pool than the training data, a residual reported for each condition instead of an average, and a verifier who sees the prediction and the outcome rather than the model's pedigree. The error such a test measures is the round-trip gap between fitting and deployment, not the in-sample fit. A model that passes is a candidate, never a proven generalizer, because no finite suite is a sealed room. What the framework offers is that shape, five refuters written in advance, and the instruments that would close it. Nothing here is grounded, and no model was tested.
