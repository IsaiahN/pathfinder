# The Tether's answer: why benchmark success fails under small context change

**Mode: `general` on the structural shape, `specified` on the transfer prediction, not `grounded`.** This is a shape and a route, not a measurement. It is a simulated derivation checked for internal consistency against the figures (`05_what_shape_means.md` §6), not a ground reading.

## 1. The residual it answers

A system scores well on benchmark B in C0; a small change to C1 (new distribution, changed cue, perturbed input, shifted population) leaves the B score reportable while task success collapses. The residual is the gap between what the frame reports and the contact the system maintains with the ground once the habitat moves. It is indexed per slot: a global mean near zero can hide a live slot residual. Fig 1 :19: "The residual is indexed by object slot, not aggregated."

This is a **union compound**, not one hard question. Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Shortcut cues, underspecification, metric saturation, habitat substitution and missing vocabulary overlap; the intersections are categorically different compounds, not harder cases of one condition.

## 2. The shape

1. **A benchmark is a substituted habitat.** Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." A high score is evidence that the wiring works in that habitat, not that capability survives another one.
2. **Capability belongs to the pair.** Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone." Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves." The intuition that the model "lost ability" when the world changed assumes an agent-only property the figures deny.
3. **The score is frame-internal and can saturate.** Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces." Fig 10 :24: "the ground does not decay, the channel does"; Fig 10 :26: "saturated metrics, pooled readings". When the metric saturates, the number stays green and reports loss of contact only as "you have lost touch" (Fig 10 :28).
4. **The room stayed fixed while the question moved.** Fig 10 :72: "When the question changes, the room should change. A room that stays fixed while the question moves is the failure; the correlation is only its symptom." The high score is the symptom, not the thing to explain. This is the direct answer to "small change in context": the change is small in the description of the habitat and large in the composition the system must perform.
5. **The score is a filter, not a witness.** Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." Agreement among frames sharing the training and scoring pool is one witness wearing many names (Fig 2 :40). Independence is bought in proportion to the cost of being wrong (Fig 2 :42).
6. **More of the same search cannot reach the new term.** Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Scaling the same distribution helps only if the needed term was already in the closure and unfound. Otherwise a different habitat or instrument is required, and importing against a budget limit adds an atom that was not needed.
7. **The honest report is the round-trip gap.** Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." Score to deployment and back loses conditional structure; that loss is `R_T`, not noise to be tuned away.
8. **The structural relation is isomerism.** Over the shared atoms {system, task, metric, habitat, ground}, the benchmark case and the changed-context case differ in arrangement, not ingredients, and are different substances that a score-only notation cannot tell apart (Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour.").

## 3. What it explicitly does not say

- Not a measured effect size. No number for `R_T` is reported; no claim about how large the drop will be in any particular system.
- Not a named culprit. The shape does not say which cue, artifact or correlation caused a specific collapse. Naming one requires a discriminator, not an argument.
- Not "more data never helps." It helps in the unfound-in-closure case. What is refused is treating more of the same as a universal remedy.
- Not "benchmarks are useless." A benchmark is a legitimate budget filter, and it is the ground when the question is constitutively about the benchmark (Fig 2 :36).
- Not a claim that the framework settles the question. It is `general`/`specified`, simulated, and internally consistent only.

## 4. What would settle it: the ground

A discriminating instrument and a genuinely different test habitat, not a further argument. From *The Hard Problem is About Source*: an instrument that reads green "cannot comment on the source"; the spectrometer, not a debate, resolved the source question. Here the corresponding checks are:

- measure `R_T` for a real habitat change: score in C0, contact in C1, and the gap between the abstraction and its concretization;
- run two test habitats with disjoint construction and disjoint data provenance, so their agreement means something (Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence.");
- build an instrument for the unmeasured middle link: does the system have terms for what C1 affords and can it say what progress there would mean (Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at.")?
- check the anchor is reachable: is the metric still read, or has it saturated while everyone reads through it (Fig 10 :29: "keep the anchor reachable")?

## 5. Standing falsifiers (pre-registered in `01_figure_grounded_audit.md` §4)

1. A score that predicts transfer as well as direct contact measurement.
2. An isolated improvement that raises capability in a changed habitat without changing contact.
3. The benchmark shown to be the ground for the generalization question.
4. Composition inside the training closure reaching the new-context term with no new habitat or instrument.
5. An evaluation room that tracks the question while a score collapses with contact intact.
6. A zero round-trip gap on a real habitat change.

## 6. The honest stop

**Unmeasured, not unreachable.** The framework constrains the shape of any answer without supplying the mechanism or the magnitude. Fig 9 :32: "you get a kind of thing, never the answer itself." "Indiscernibility is not identity." The derivation stops where the available instruments stop distinguishing score from contact, and records the lineage so the stop is checkable. It cannot name which primitive or cue is missing, because naming it would mean already holding it.

## 7. One-paragraph version for outreach

> The Tether does not say the model forgot, and it does not name a culprit. It says a benchmark is a substituted habitat: a high score proves the wiring works in that habitat and does not establish capability in another. Capability belongs to the system and its habitat together. When the context changes slightly, the evaluation room usually does not change with it, so the high score becomes a symptom of a fixed room rather than a verdict about the system. The metric can saturate while the channel to the ground quietly dies, and more training inside the same frame cannot reach what that frame never held. The honest report is the round trip from score to deployment and back: measure the gap, keep the anchor reachable, test in genuinely different habitats, and write down in advance what would refute the claim. The framework returns that shape and its refuters, not a mechanism and not a number.
