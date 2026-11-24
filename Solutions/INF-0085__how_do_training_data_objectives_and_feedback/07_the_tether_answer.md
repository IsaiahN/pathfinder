# The Tether's answer on training data, objectives and feedback channels

**Mode: `specified` on the three domain verdicts, `general` on the structural shape. Not `grounded`.** This is a shape and a route, not a result. Simulated derivation checked against the figures (`05_what_shape_means.md` section 6), not a ground reading.

## 1. The residual it answers

A system with fixed architecture and capacity ends up prioritizing some information over others. The residual is the mapping from three offered levers, training data, objectives and feedback channels, to that per-slot priority. It is not one scalar. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :28: *"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."* The question is therefore not "which lever wins" but "what form does the mapping have, and what does each lever contribute that the others cannot."

## 2. The shape

1. **Priority is per slot.** The three levers set which slots carry positive residual mass R⁺_s and therefore which slots get probed and which terms get minted. A global ranking over "all information" is the aggregation error the figures name. Fig 1 :13: *"a global R near zero with one live slot residual is a legal state."*

2. **Training data acts through contact, not as a recipe.** Fig 11 :40: *"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."* The habitat is enumerated, never composed (Fig 11 :43). Synthetic data and fixed benchmarks are substituted habitats; Fig 11 :70: *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."* More of the same distribution is SEARCHED, not IMPORT: Fig 8 :32, *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."*

3. **The objective is the unmeasured middle link, and it is a comparison.** Fig 3 :10 says the objective link *"can say what would count as progress here, in its own terms."* Fig 3 :24 to :27 says this link usually breaks and has no instrument. Fig 12 :112: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."* Change the comparison and the same data yields a different per-slot priority without new data arriving.

4. **A frame-internal objective cannot be the ground.** Fig 1 :27: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* Training loss, compression achieved and reward-model score are quantities the system also produces. Fig 2 :29 to :30 gives the test: *"If it moves when you push on it, it is not an anchor."*

5. **Feedback is a channel, and the channel decays.** Fig 10 :24: *"the ground does not decay, the channel does."* Its failure modes are *"stale percepts, dropped transients, saturated metrics, pooled readings"* (Fig 10 :25). When one fires the system loses touch with an unchanged ground.

6. **Human feedback is an anchor only where the question is about people.** Fig 2 :36 to :38: *"An anchor is legitimate when the question is constitutively about it. Human judgment is the right anchor for is this a good answer for a person, because the question is about people. It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."*

7. **Agreement in a shared pool is not corroboration.** Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool."* Fig 7 :13: *"agreement compounds, evidence does not."*

8. **The three are a union compound, not a ranked list.** Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* A single lever clears the region where only one condition holds and leaves the intersections standing. Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

9. **The dependency order is not an importance order.** Fig 3 :20: *"The chain is ordered by dependency, not by importance."* Data and vocabulary first, the objective second, planning and feedback third. Optimizing a link above a break cannot rescue one below it.

10. **Bits and actions do not add.** Fig 12 :125: *"A composition costs in two currencies, and they do not add."* Data buys bits; ground verification buys actions. A single weighted score of "data times objective times reward" is the error this names.

## 3. Verdicts per domain, kept separate

| domain | verdict | status |
|---|---|---|
| Data / habitat | Changes priority by changing contact; synthetic or benchmark-only data is a substituted habitat; more of the same distribution searches rather than imports | triangulated (Fig 11, Fig 6, Fig 1) |
| Objective | The third dependency link and a comparison; the link most likely to lack an instrument; frame-internal scores are not anchors | triangulated (Fig 3, Fig 12/Operators, Fig 1) |
| Feedback channel | Carries R; decays while the ground does not; human preference is an anchor only for people-questions; shared-pool agreement is not evidence | triangulated (Fig 10, Fig 2, Fig 7) |
| Union | Needs its own loop; intersecting conditions are specific compounds | triangulated, forward test unmeasured (Fig 9, Fig 8) |
| Verification here | The second seat shares the whole evidence pool, so its agreement is internal consistency only | single-source (Fig 2 :40), high-overlap echo elsewhere |

No verdict was averaged with another. No domain ended in `gap`: each has a nameable anchor and at least one governing figure line.

## 4. What it explicitly does not say

- Not a ranking of the three levers, and not a single "most important" factor. That is a filter for effort, not a verdict.
- Not a claim that training loss, compression, or reward-model score is a ground. Those are frame-internal.
- Not a claim that human preference settles factual or correctness questions.
- Not a claim that more data adds a new kind of term. It visits more of the same closure.
- Not a claim that synthetic data is useless. It proves wiring; it does not prove capability against the original habitat.
- Not `grounded`. No per-slot measurement was taken in this derivation.
- Not a claim that the six-term substrate decides this question. The substrate is background grammar here, not the governing line for any domain verdict.

## 5. What would settle it, and the honest stop

A ground reading, not agreement. The concrete tests already exist in the literature this solution read:

1. **Data ablation.** *Arrival of the Fittest* proposes modifying a training set to a date cutoff or a single field and testing what the model can still solve. That is a direct per-slot test of the data verdict.
2. **Channel saturation.** Gao et al. (2022) measured proxy reward rising while gold reward falls. Repeating that with per-slot gold labels would test the feedback verdict.
3. **Objective instrumentation.** Fig 3 :27 says the middle link has no instrument. Producing a standard one, with published failure modes, would retire that claim.
4. **Proxy independence.** Show whether a reward model trained on the same corpus as the policy has a closure that differs, which would settle the open source-gate strain.

**Unreached, not unreachable.** *They're Scanning Books*: *"A minimum viable set of six terms is a human's careful guess at reality's compression axes; another sensorium's minimum set need not be those six."* *How Intelligence Actually Works*: *"The projection that no instrument distinguishes from the thing is still a projection, which is why the lineage has to be kept even when the copy is perfect."* The derivation stops at the limit of what the available instruments distinguish and records the lineage so the stop is checkable.

## 6. Standing falsifiers

Written before the conclusion (`01_figure_grounded_audit.md` section 6; Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device"*):

1. a system with no per-slot structure that still attends to rare live cases;
2. a self-produced score that does not move when the frame is pushed and tracks the ground on untrained axes;
3. a working standard instrument for whether an objective says what counts as progress;
4. a feedback channel that cannot saturate, stale, drop or pool, or whose saturation changes nothing;
5. human preference feedback that settles a factual question on an axis humans do not measure;
6. full separability of the three levers on every slot.

## 7. One-paragraph version for outreach

> The Tether does not rank training data, objectives and feedback channels. It says that what a system learns to prioritize is per slot, not one global ranking. Data acts through contact: the habitat is enumerated, not composed, and synthetic or benchmark-only data proves wiring rather than capability. The objective is the dependency link that says what counts as progress, it is a comparison, and it is usually the link nobody has instrumented; a score the system produces itself cannot be its own ground. Feedback is a channel carrying the error signal back, and the channel decays while the ground does not, so saturation and pooled readings lose contact with a world that has not moved. Human judgment is the right anchor only for questions that are about people. The three form a union compound, not a list of independent causes, so a single lever leaves the intersections standing. This is a `specified` shape with six falsifiers written in advance, not a measured answer. It stops where the instruments stop, and the lineage is recorded so the stop can be checked.
