# The Tether's answer: what a convincing test of flexible OOD learning looks like

**Mode: `specified` - not `grounded`.** This is a shape and a route, not a result. Simulated derivation checked against the figures (`05_what_shape_means.md` section 6), not a ground reading.

## 1. The residual it answers

A learner's library Γ predicts Γ(b,a); a changed environment returns o′; R = |Γ(b,a) - o′| is small on some slots and grows on others. The question asks what a test would have to do to tell genuine flexible learning from in-distribution pattern extension under a disguised habitat. The answer is not an accuracy level but a **test-design shape**: a set of conditions that must hold together, plus an instrument that discriminates a failure of one from a failure of the other. The question is a union of two conditions, not one hard problem (Fig 9 :57, *"a case in two conditions is not a harder case of either"*), so the verdicts stay separate.

## 2. The shape

1. **Enumerate the habitat; describe the residual first.** Fig 11 :43: "The habitat is enumerated, never composed." Fig 11 :48: "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual." Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit." The list of conditions that could change at deployment is read off the world before any benchmark is chosen. Contact cascades, so scoping to direct contact is not enough (Fig 11 :52).
2. **Use an anchor that does not move.** Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :30: "If it moves when you push on it, it is not an anchor." The deployment outcome is the anchor; a leaderboard, a fixed split and the test designer's expectation are instruments that move when pushed. Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."
3. **Require contact with a differing closure.** Fig 6 :21: "MINT composes inside the closure and can never add an atom." Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." A pass means something only if the test put the learner in contact with a frame whose closure differs from its training closure.
4. **Index R per environment, never as one average.** Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." Taori et al. 2020 reported results across 213 test conditions, which is the right shape; collapsing them would erase the finding that transfer is uneven.
5. **Draw the test pool from an unauthored habitat and buy independence.** Fig 10 :73-74: "A candidate set chosen by a participant is an authored room however well the selection is reasoned, so the pool must be unauthored first and examined second." Fig 10 :75-79 names the mechanisms: a lottery, everyone who qualifies, a set assembled before the question existed, or the habitat enumerated rather than composed. Fig 2 :42: "Buy independence in proportion to the cost of being wrong." Benchmarks sharing a generator are one witness wearing many names (Fig 2 :40).
6. **Report failure as a verdict and separate depth from absence.** Fig 13 :134: "Unreachable is a verdict here, not a silence". Fig 8 :39: "So a search that finds nothing is never a proof of absence." Fig 6 :27: "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same." The report says whether to search longer or import, and why. Importing against a budget limit adds an atom that was not needed (Fig 8 :42-43).
7. **Measure the round-trip gap.** Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." The training-instrument reading and the deployment reading are different scales; the loss between them is the honest report, not an error to hide.

## 3. What it explicitly does not say

- Not a new benchmark and not a leaderboard. The framework returns a shape, not a name (Fig 9 :32, *"you get a kind of thing, never the answer itself"*).
- Not that existing benchmarks are worthless. They are instruments, and instruments can be improved from worse instruments (Fig 6 :32); they are just not the ground.
- Not that a particular invariance, metric or architecture is the answer. Those are bindings, provenance owed, not derivations.
- Not a theory of everything. No final room; the deployment habitat keeps changing (Fig 7 :6).
- Not `grounded`. No deployment measurement in this folder pays for the shape.

## 4. What would settle it - the ground

A prospective test, not a further argument:

- Environments enumerated from the deployment habitat before the method is chosen, with the list and the reasoning recorded.
- An anchor that does not move when pushed: a real outcome measured per environment, not a shared synthetic generator.
- A method comparison that separates learners which import from a differing closure from learners that only search inside their training closure, with the depth/absence split measured rather than assumed.
- Two test suites with demonstrably disjoint evidence pools, so their agreement means something (Fig 2 :31-32).

From *The Hard Problem is About Source*: an instrument that reads green *"cannot comment on the source"*; the spectrometer resolved it, not an argument. Here the corresponding question is: can we build an instrument that discriminates a missing primitive from an unfound one, and a substituted habitat from a real one? Until we can, the report stays a shape.

## 5. The honest stop

**Unreached, not unreachable.** The six-term substrate is *"a human's careful guess at reality's compression axes"* in the framework's own essay vocabulary; declaring primitives makes the choice visible, not neutral. The specific test conditions that matter for a given system are not named here, because naming them would require the deployment ground to have paid. The answer stops at the limit of the available instruments and records the lineage so the stop is checkable. *"Indiscernibility is not identity."*

## 6. One-paragraph version for outreach

> A convincing test of out-of-distribution learning is not a bigger held-out set from the same generator. The Tether says the conditions must be enumerated from the deployment habitat before a benchmark is chosen, the anchor must be a real outcome that does not move when pushed, the test must put the learner in contact with a closure that differs from its training closure, the residual must be reported per environment rather than as one average, the test pool must be unauthored and independent, and a failure must be reported as a verdict that separates a missing capability from an unfound one. A synthetic suite is a substituted habitat: passing it proves the wiring works, not that the capability is there. This is a `specified` shape with written refuters, not a measured result and not a named benchmark. The ground decides which systems actually satisfy it.
