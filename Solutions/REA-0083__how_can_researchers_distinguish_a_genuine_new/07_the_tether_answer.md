# The Tether's answer: how to distinguish a new capability from a better score

**Mode: `specified` on the four conditions and on every per-domain verdict, `general` on the structural shape, `gap` on the named test. Not `grounded`.** Simulated derivation checked for internal consistency against the figures (`05_what_shape_means.md` §7), not a ground reading.

## 1. The residual it answers

A model changes and scores better on tasks whose form was in training. The score rise is real but underdetermined: three different structural states produce it. More of the same closure was visited (Fig 6 :49); the atoms were re-bonded into different substances (Fig 12 :117); or a new atom arrived from a differing frame and the wall moved (Fig 6 :22-23). A fourth possibility sits at a different scale: the agent did not change its library at all, but its contact with the ground changed (Fig 11 :39-40). The score cannot tell us which. That is the residual.

## 2. The answer, in four conditions

1. **Read the residual per slot, not as an average, against a ground that was not in training.** Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces." Schaeffer et al. 2023 show from outside the framework that a discontinuous metric can manufacture a jump where a continuous metric shows a smooth trend. An average over represented tasks is exactly the wrong instrument.

2. **Ask whether the new behaviour is composable from the pre-change atoms(Γ).** Fig 6 :21: "MINT composes inside the closure and can never add an atom." Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." If it is not composable, an import is owed: Fig 6 :22: "NOVEL means novel relative to atoms, not to the world. IMPORT adds an atom, and the added atom is what expands the closure." An import needs a source gate and a shadow test (Fig 6 :12-13). If the atom set is unchanged and only the bond changed, the before and after states are isomers: Fig 12 :117, "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Report it at the bond level and do not call it a new primitive.

3. **Require a changed contact, not a harness solve.** Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone." Fig 11 :40: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves." Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." A benchmark is a harness. Passing one proves wiring in that habitat. To claim capability, reproduce the habitat, name what you failed to reproduce and what you unintentionally introduced (Fig 11 :68-69), and show the ground pays.

4. **Require an anchor that does not update, and at least one genuinely low-overlap evaluator.** Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence." Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." A public benchmark present in training is a frame, not an anchor. LiveBench's monthly refreshed questions with objective ground truth are a practical instance of keeping the anchor reachable; Goodhart's law is the general warning. Buy independence in proportion to the cost of being wrong (Fig 2 :42).

**Bind the sought-for shape before the run.** Fig 5 :65: "make the sought-for shape an ORDINARY TERM." Write down what would count as a capability, attach the pre-registered refuter from `01` section 4, and let the term accrue a residual like anything else. A preference for a particular answer is invisible to its own frame; that is why the discipline is required.

## 3. What it explicitly does not say

- **No named model is judged.** Nothing here asserts that any system has or lacks a capability.
- **No benchmark, threshold, or percentage is nominated.** Fig 9 :32: "you get a kind of thing, never the answer itself." The fifth item is a declared gap, not silence (Fig 13 :134).
- **Not a denial that scaling can produce something new.** Fig 6 :23 allows an import from a frame whose closure differs. The figures forbid deriving a new atom inside a closure, not acquiring one.
- **Not the claim that every bond-level difference is a new primitive.** Over a fixed atom set it is an isomer (Fig 12 :117).
- **Not a claim that a negative result proves absence.** Fig 8 :39: "So a search that finds nothing is never a proof of absence." Underivable and unreachable-at-this-budget are different facts with different instructions (Fig 8 :41-43).
- **Not grounded.** No measurement in this folder settles a capability claim.

## 4. What would settle it: the ground

From *The Hard Problem is About Source*, opened this session: an instrument that reads green "cannot comment on the source"; several paths can give the same reading, so "behavior is a projection with lossy information". The case was resolved "not by argument, but by the arrival of a better instrument." Here the corresponding questions are:

1. **Source discriminator.** Does a per-slot, continuous metric on a fresh held-out task family show the same jump as the coarse benchmark, or a smooth trend? The first supports novelty; the second supports SEARCHED. Schaeffer et al. provide the template.
2. **Atom-set discriminator.** Can the new behaviour be derived from Γ_t under the held bonds, with the derivation written out? If yes, it is an isomer or a search result, not an import.
3. **Contact discriminator.** In a reproduced habitat with a non-updating anchor, does the ground pay for the new behaviour? Move the task out of the harness and enumerate the two silent failures (Fig 11 :68-69).
4. **Independence check.** Do two evaluators with separate evidence, each ranging against the same unmoved ground, reach the same classification? Their agreement means something only if they do not share a corpus (Fig 2 :40).
5. **Standing refuter from the figure.** Fig 11 :71-72: "an agent-only improvement that moved the ground would refute the capability claim." This is recorded against the answer, not as a rhetorical aside.

## 5. The honest stop

The answer stops at a shape. No line in the figures names the discriminating test, and the essay rule says the framework returns a shape and not a name. Fig 13 :135: "It cannot say which primitive is missing, because naming it would mean already holding it." What is owed is an instrument, not another argument. The lineage is recorded so a later reader can locate the error. Nothing in this folder updates the ground; the channel can decay (Fig 10 :24), and a saturated metric looks exactly like a working one until the drift is visible.

## 6. One-paragraph version for outreach

> A higher benchmark score does not tell you whether a system gained a capability or just visited more of the same space. The figures separate the cases. Read the residual per task slot, not as an average, on a task whose ground was not in training. Ask whether the new behaviour can be composed from the atoms the system held before: if not, an import from a differing frame is owed, with a provenance record; if the atoms are the same and only the arrangement changed, it is an isomer, a real difference in substance but not a new primitive. Then stop treating the benchmark as the ground. A harness solve proves wiring, not capability, so reproduce the habitat and require a non-updating anchor plus an evaluator whose evidence does not come from the same corpus. The framework returns these four conditions as a shape and refuses to name a benchmark or threshold. It also writes its own refuter first, including the case where an agent-only improvement moves the ground. Nothing here is settled by measurement; what is owed is a source-discriminating instrument, not another argument.
