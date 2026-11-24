# The Tether's answer: quantifying uncertainty under mechanism ignorance plus random variation

**Mode: `specified` on the shape, `general` on the structural limits. Not `grounded`.** This is a simulated derivation checked against the figures, not a ground reading (`05_what_shape_means.md` §6). Per-domain verdicts are kept separate and are never averaged.

## 1. The residual it answers

A report of uncertainty must let a reader choose among three different actions: collect more data, change the model class, or hedge against irreducible spread. When outcomes depend on a poorly known mechanism *and* random variation, a single number conflates them and the consumer cannot tell which action is owed. This is a union compound, not one hard question: Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57 "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."

## 2. The shape: a five-field report per decision slot

1. **Per slot, never a global width.** Fig 1 :19 "The residual is indexed by object slot, not aggregated." Symbols table :43 "R is measured per slot, never as a single global number." A portfolio-wide interval can be tight while one regime carries all the unmodelled mass. *Verdict: triangulated.*

2. **Irreducible spread, conditioned on the mechanism and the horizon.** This is the part that does not shrink below the process variance given the mechanism. But "irreducible" is not one thing: Fig 13 :31 "a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise." Chaos may be predictable at the level of distributions; discarded detail is irrecoverable at the level it was dropped. Name which one the field contains. *Verdict: single-source for the chaos/noise split; triangulated for per-slot indexing.*

3. **Reducible spread, over parameters and over candidate mechanisms inside the class.** Name the data that would reduce it. A flat residual that does not trend down is a candidate signal that the model class, not the parameter estimate, is wrong (Formula step 2's "PERSISTS AND DOES NOT TREND DOWN" test, read with the opposite sign). *Verdict: triangulated (Fig 6 plus Formula step 2).*

4. **A structural marker for mechanism-class uncertainty, not a probability over outcomes.** Fig 6 :27 "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same." Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." When the mechanism is outside the class, more data inside the class never supplies the missing primitive. The right representation is a set, an interval-valued distribution or an explicit outside-closure flag, and the right operator is refusal (negation), not subtraction. *Verdict: triangulated.*

5. **An independence audit and a ground score, with mode and cost if wrong.** Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence." An ensemble that shares a structural assumption is one frame wearing many names; its narrow spread is not evidence of small uncertainty. The report must be scored against outcomes, not self-reported: Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." Fig 2 :45 "Frames range against the ground. They do not negotiate with it." *Verdict: triangulated.*

**The fields are not added.** Fig 12 :130 "Summing them into one figure is the error this names, not the fix for it. A price in bits and a price in actions are two readings, held apart." Mechanism uncertainty carries a description cost (bits) and an action cost (measurements); random variation carries neither. Folding them into one variance or entropy restores the very conflation the report was built to remove.

## 3. What the answer explicitly does not say

- Not a unique numerical estimator. The framework returns a shape, not a name. Interval methods, p-boxes, credal sets and ensembles are all in the closure already (SEARCHED); which one to use is decided by the ground on a specific problem.
- Not that the aleatoric/epistemic split is exhaustive. It misses chaos versus noise, the structural-absence case and the independence audit.
- Not that a flat residual proves the mechanism is outside the model class. An instrument may have saturated. Fig 6 :32 "An instrument is not built from a description. It is improved from a worse instrument already returning something." INWARD must be checked before OUTWARD.
- Not that any frame can certify complete coverage. Fig 9 :44 "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."
- Not an ensemble-size claim. Fig 7 :12 "same closure, handed along; agreement compounds, evidence does not."
- Not `grounded`. No held-out score has been run here.

## 4. What would settle it, the ground

A pre-registered forecast task with materialised outcomes and a strictly proper score is the ground-side instrument. Gneiting and Raftery (2007) state the world-side rule: "In prediction problems, proper scoring rules encourage the forecaster to make careful assessments and to be honest." The tests:

1. **Decomposition test:** does the five-field report beat the best single predictive distribution fitted on the same data, out of sample?
2. **Discriminator test:** does a held-out score separate parameter ignorance from model-class absence, rather than merely showing a wide interval for both? This is the source-discrimination problem from *The Hard Problem is About Source*: an instrument that reads green "cannot comment on the source."
3. **Saturation check:** is an apparently flat structural residual really a saturated sensor? Repaired instrument, then re-measure.
4. **Independence test:** do candidate models with low measured evidence overlap improve the score more than additional models from the same pool?
5. **Standing refuters:** the five in `01_figure_grounded_audit.md` section 4.

Until one fires, the verdict stays `candidate`.

## 5. The honest stop

**Unreached, not unreachable.** The specific estimator is unreached at this budget and by this method, not unreachable in principle. The structured report form is reachable now and is checkable. The representation vocabulary is a visible choice: *They're Scanning Books* says "Declaring the primitives does not make them neutral. It makes the choice visible." A report form is also a choice, and its provenance must be recorded. The derivation stops at the limit of what the figures can distinguish and records the lineage so the stop is checkable. Indiscernibility is not identity.

## 6. One-paragraph version for outreach

> The Tether does not offer a better number for uncertainty; it says a single number is the wrong shape of answer when outcomes depend on a poorly known mechanism and random variation at once. The problem is a union of two conditions, so it must be unbundled before it is searched. What survives is a report form, per outcome or regime, that separates the spread that more data would reduce from the spread the process will always have, marks the case where the mechanism class itself is outside the model with a refusal rather than a wider interval, distinguishes amplified residual (chaos) from discarded detail (noise), records how much the evidence behind candidate models overlaps, and is scored against observed outcomes rather than trusted at its own word. The fields are not added, because bits of description and actions of measurement are in different units. The framework does not name an estimator, does not claim the aleatoric/epistemic split is exhaustive, and cannot certify that it has quantified everything. What it offers is a shape any acceptable report must have, five refuters written in advance, and the ground tests that would close it.
