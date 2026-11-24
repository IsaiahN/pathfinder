# Figure-grounded audit: genuine new capability versus improved performance on represented tasks

**Mode of this document: `specified` on the separator conditions, `general` on the structural shape, `gap` on which named benchmark or threshold decides. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, 2026-11-19): "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on, and it makes no claim about any named model.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, cited as `Fig N :line`), `THE_FORMULA.md`, `FIGURES_README_canonical.md`, the eight essays, and the public sources listed in `10_source_ledger.csv`, all opened 2026-11-24.

---

## 0. The residual in effect terms

A system changes. Afterwards it does better on a set of tasks. The question asks what would make the difference a **genuine new capability** rather than **improved performance on tasks already represented in training**.

State this as an effect, not a name. Before the change the system holds a library Γ with primitives atoms(Γ) and a closure of everything composable from them. It predicts performance from Γ. After the change, a residual arrives on some task slot s: R_s = |Γ(b,a) - o'|, where o' comes from a task whose ground is independent of the training corpus. The residual must be read per slot. Symbols table :38-40: "It is the aim, not only the error signal, and it is always a slice: what cannot be perceived yet is residual and simply cannot be read." Symbols table :43: "R is measured per slot, never as a single global number."

Two readings of the same score change:

| reading | what changed | figure name for it | wall moved? |
|---|---|---|---|
| Improved performance on represented tasks | more of the existing closure was visited, or atoms were re-bonded | SEARCHED (Fig 6 :49), or isomer (Fig 12 :117) | no |
| Genuine new capability | a term composes that was unreachable, or contact with the ground changed | IMPORT (Fig 6 :22-23), or habitat contact (Fig 11 :39-40) | yes |

A single benchmark number cannot separate them, because both readings predict a higher score. That is the residual: **the observed score increase does not discriminate between two structurally different causes**. The question is a union compound, not a two-way partition, because a genuine capability can also produce better scores. Fig 9 :56: "intersections standing, because the second condition still binds." One lever, the score, leaves the intersection standing.

**Bind the sought-for shape as an ordinary term before the run** (Formula step "Direction"; Fig 5 :65: "make the sought-for shape an ORDINARY TERM."). The working definition used here, written down before the findings:

> A **genuine new capability** is a stable change in what the system can do against a ground that does not update on the system's own outputs, where the new behaviour is not composable from the pre-change atoms(Γ), and where a provenance record shows which differing frame supplied the new atom or which contact in the habitat changed. An **improvement on represented tasks** is the same atom set and wall, more search, a re-bonding, or a saturated metric, with no import and no change of contact.

This definition is itself refusable. It is not a result.

---

## 1. Domain census, before any figure line is chosen

R by arity, symmetry, scale:

- **Arity.** At least three conditions, not two: an atom-set condition, a contact condition, and an anchor condition. The benchmark condition sits inside the anchor condition, not beside it. Union, not partition (Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again.").
- **Symmetry.** "Can do" is ordered, not symmetric. A correlation between training representation and test success does not choose the arrow. Fig 12 :92: "Symmetry is what decides whether an arrangement is a new thing." The score relation is symmetric; the capability relation is not.
- **Scale.** First order inside the model's closure (atoms, bonds, search), second order at the model plus habitat plus ground. The new capability, if any, is a second-order claim (Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom").

One line per domain. A domain needs a nameable anchor; where there is none it is not yet a domain.

| domain | actors | currency | anchor | nameable? |
|---|---|---|---|---|
| D1 Frame internals | the model, Γ, atoms(Γ), closure(Γ), per-slot R | prediction error in bits and actions; the MDL bargain | the ground, which the loop cannot modify | yes, Symbols table :104 |
| D2 Evaluation / benchmark | benchmark builders, datasets, metrics, leaderboards | scores, accuracy, pass rate | held-out ground truth that does not update on the model | yes, Fig 2 :29-30 |
| D3 Habitat / training contact | corpus, training process, deployment environment, users | contact, methods and head starts carried across a boundary | the world that produced the corpus and pays for the task | yes, Fig 11 :39 |
| D4 Research / verification frame | researchers, reviewers, competing labs | agreement and residual | the ground, never agreement | yes, Fig 2 :45 |

**Partition or union.** D1 and D3 overlap at contact; D2 sits inside D3 because a benchmark is a substituted habitat (Fig 11 :66, :70); D4 overlaps D2 wherever labs evaluate on the same public benchmark. This is a union of overlapping conditions. It is not a list of separate questions, and a single lever cannot clear it (Fig 9 :54-57).

**Dependency order (Fig 3).** The chain runs: bind the capability shape as an ordinary term (vocabulary/objective link), secure a non-updating anchor, test composability from the old atoms, test change of contact, then let the ground settle. Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." The link that usually breaks is the vocabulary/objective link, Fig 3 :26: "has neither, so it attracts the least attention and the fewest instruments." Researchers have a term for accuracy and no term for the bond between an atom set and a ground. Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

---

## 2. Figure census before findings

| figure | bearing on the residual | verdict after reading |
|---|---|---|
| 1 The Agent | residual per slot; frame-internal quantities disqualified | aggregate score is not a witness |
| 2 The Ground | anchor must not update; independence between frames | a trained-on benchmark is a frame, not an anchor |
| 3 Dependency Chain | broken vocabulary/objective link; order by dependency | the bond between score and contact has no instrument |
| 4 The Membrane | methods cross up, recordings cross down, round trip gap | a leaderboard result is a recording of one occasion |
| 5 Mint Pipeline | support, reach, novelty; MDL bargain; preference blind spot | novelty guard decides "new"; preference must be bound |
| 6 Closure / Reachability | MINT cannot add an atom; IMPORT moves the wall; SEARCHED moves nothing | the decisive three-way split |
| 7 Room Chain | agreement compounds, evidence does not | more agreeing labs do not decide it |
| 8 Union Surplus | idempotent closure; no proof of absence; residual first | underivable and unreachable-at-budget are different facts |
| 9 Leave / Arrive | describe the effect first; union; ground decides at narrowing | describe the capability in effect terms before choosing a test |
| 10 Ground Maintainer | ground does not decay, channel does; saturated metrics; verifier non-access | a saturated benchmark is channel failure |
| 11 The Habitat | capability is agent-and-habitat; harness is a substituted habitat | the decisive contact test; isolation is substitution |
| 12 The Bond | same atoms different bond is an isomer; arrangement priced | re-arrangement is not a new atom; currencies do not add |
| 13 Minimum Viable Set | set closed, arrangements not; shape not a name; unreachable is a verdict | no figure names the discriminating benchmark |
| Operators table | negation is not a bond; a vocabulary without it can only accumulate | a capability claim needs a refuter, not only a score |
| Symbols table | R is per slot; the anchor is not in the library; the ground cannot be modified by the loop | the score cannot be the anchor |

---

## 3. Findings, with verbatim figure lines

Each finding states its mode and its triangulation status. Verdicts stay per domain and are never averaged.

### F1: An aggregate benchmark score throws away the only signal (D1, D2)

Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces."

If a task was represented in training, the score on it is partly produced by the frame being scored. An average over many such tasks hides the one slot where the residual is live. This is why a 5-point average gain is not evidence of a new capability: it may be one live slot or a uniform re-arrangement, and the average cannot tell you which.

**World corroboration, low overlap.** Schaeffer, Miranda and Koyejo (2023, "Are Emergent Abilities of Large Language Models a Mirage?"): "nonlinear or discontinuous metrics produce apparent emergent abilities, whereas linear or continuous metrics produce smooth, continuous predictable changes in model performance." They show that a sharp jump can be an artifact of the metric, not of the model. This is the same quantity Fig 1 :19 names, read from outside the framework.

**Mode `specified`. Triangulated**: Fig 1 :19/:22 (per-slot residual) and Schaeffer et al. 2023 (metric discontinuity), low overlap between a framework figure and an independent evaluation study.

**Refuter:** show a task-slot decomposition in which the new behaviour appears on exactly one slot with a residual that persists and does not trend down, while every other slot is flat, and where the slot's ground was not represented in training. That would break the "mere average" reading and move the claim toward a capability.

### F2: Improvement on represented tasks is SEARCHED, which moves nothing (D1)

Fig 6 :49: "more search at the same reach: is it in here and unfound? The closure does not change. Same atoms, same wall, more of the space actually visited."
Fig 6 :50: "Fails by spending budget on a region already swept. Distribute the search, and keep the searchers independent."
Fig 6 :21: "MINT composes inside the closure and can never add an atom."
Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."

Better performance on tasks whose form is already in Γ is the third reachability question. Fig 6 calls it SEARCHED and says explicitly that it moves neither the closure nor the wall. More compute, more data of the same kind, and more training steps are all searches at the same reach. Calling their result a "new capability" confuses a larger visited region with a larger reachable set.

**World corroboration.** Wei et al. (2022, TMLR) define the target phenomenon: "We consider an ability to be emergent if it is not present in smaller models but is present in larger models. Thus, emergent abilities cannot be predicted simply by extrapolating the performance of smaller models." The figures agree that unpredictability alone is not enough. What matters is whether the wall moved, which the extrapolation test does not measure.

**Mode `general` on the structural claim, `specified` on any particular task. Triangulated**: Fig 6 :21/:49 and Fig 8 :32 (two low-overlap routes, closure idempotence and the third reachability question).

**Refuter:** exhibit a behaviour after scaling that is not derivable from the pre-change atoms(Γ) under any composition, with a provenance record showing which differing frame supplied the atom. That breaks SEARCHED and establishes an import.

### F3: A genuine new atom requires an import, and imports need provenance (D1, D3)

Fig 6 :22: "NOVEL means novel relative to atoms, not to the world. IMPORT adds an atom, and the added atom is what expands the closure."
Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."
Fig 6 :12: "source gate: provenance"
Fig 6 :13: "shadow test: explains a gap"
Fig 13 :115: "The set is closed. The arrangements are not. That gap is why import exists."
Fig 13 :116: "Six members, and no amount of arranging produces a seventh"

A new capability, in figure terms, is either a new atom entering atoms(Γ) through contact with a differing frame, or a change in contact in the habitat. Both require a record. Fig 8 :51: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them". Without provenance, a capability claim cannot distinguish an import from a re-discovery that was already in the closure.

**Important narrowing.** Many candidate "new capabilities" are not new atoms. They are bindings onto atoms already held, or new bonds over a fixed atom set. Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." Over a fixed atom set, before and after are **isomers**: Fig 12 :117, "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." That is still a real difference in substance. It is not a new primitive, and it must not be reported as one.

**Mode `specified`. Triangulated**: Fig 6 :22-23 and Fig 13 :115-116 (different objects, wall moving versus set of kinds), with Fig 8 :51 governing the provenance requirement.

**Refuter:** show that the apparent new behaviour is composable from the pre-change atoms(Γ) under the existing bonds, with the derivation written out. That breaks the import claim and leaves the isomer claim standing.

### F4: Capability is agent-and-habitat, and a benchmark is a substituted habitat (D3, decisive)

Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone."
Fig 11 :40: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."
Fig 11 :66: "Isolation is not removal of the habitat. It is substitution of one habitat for another."
Fig 11 :68: "what you failed to reproduce is invisible until the goal fails"
Fig 11 :69: "what you unintentionally introduced is invisible until it acts"
Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."

This is the strongest single move in the audit. A benchmark is a test harness, and Fig 11 says a synthetic solve proves wiring and never capability. Passing a benchmark therefore establishes that the wiring works in that substituted habitat. It does not establish a capability in the habitat the claim is about. The two silent failures are named: what you failed to reproduce, and what you brought with you that you did not choose.

The refuter is supplied by the figure itself. Fig 11 :71-72: "an agent-only improvement that moved the ground would refute the capability claim." If an isolated change to the agent genuinely moved the ground, the capability claim as stated here is wrong. That is an honest standing failure condition, not rhetoric.

**World corroboration.** Wikipedia's "Linguistic competence" article (linguistics, human cognition): "Competence is the collection of subconscious rules that one knows when one knows a language; performance is the system which puts these rules to use." The article also records the critique that "the choice between a competence-based explanation and a performance-based explanation for a given phenomenon is not always obvious and can require investigating whether the additional assumptions are supported by independent evidence." This is the same need for an independent discriminator, from a field with no contact with the framework.

**Mode `specified`. Triangulated**: Fig 11 :39-40/:70 and the competence/performance distinction, low overlap.

**Refuter:** a controlled change in which the ground contact is identical before and after while the new behaviour appears, with the habitat and the harness both held fixed. That would break the contact condition.

### F5: The anchor must not update on the model's own outputs (D2, D4)

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
Fig 2 :30: "you push on it, it is not an anchor."
Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence."
Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"
Fig 2 :42: "Buy independence in proportion to the cost of being wrong."
Fig 10 :24: "the ground does not decay, the channel does"
Fig 10 :26: "saturated metrics, pooled readings"

A public benchmark that has been in training is no longer an anchor. It has become a frame the model can move. Two labs reporting agreement on that benchmark are one frame wearing two names, because they drew on the same corpus and the same metric. A saturated metric, Fig 10 :26, is a channel failure while the ground has not decayed.

**World corroboration, low overlap.** LiveBench (White et al., ICLR 2025 Spotlight) states the practical version: "Test set contamination, wherein test data from a benchmark ends up in a newer model's training set, is a well-documented obstacle for fair LLM evaluation and can quickly render benchmarks obsolete." Its response is monthly refreshed questions and "verifiable, objective ground-truth answers". Goodhart's law (via Wikipedia, economics and measurement): "When a measure becomes a target, it ceases to be a good measure." These are two genuinely low-overlap witnesses for the same structural claim.

**Mode `specified`. Triangulated**: Fig 2 :29-31/:40 and two outside fields, evaluation design and measurement theory.

**Refuter:** two evaluators with genuinely separate evidence, each ranging against a ground neither can move, that agree the new behaviour is present and composable from the old library. That breaks the import claim rather than the anchor claim, and is recorded here so the two are not conflated.

### F6: The MDL bargain rejects a one-occasion fit (D1, D2)

Fig 5 :26: "and then: does the new term cost less to state than the confusion it removes?"
Fig 5 :43: "A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before."
Fig 5 :44: "fails this, and so does a term that explains one occasion perfectly."
Fig 5 :48: "Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."
Fig 12 :125: "A composition costs in two currencies, and they do not add."

A capability claim that fits one benchmark perfectly fails the bargain. A capability term has to compress residuals across many slots, and the cost of stating it plus the leftover must be less than the confusion before. Description cost and action cost are two currencies and do not add: a term can be cheap to state and expensive to settle. A benchmark score prices only the description side.

**World corroboration.** Wikipedia's "Overfitting" article (statistics and machine learning): "The possibility of over-fitting exists when the criterion used for selecting the model is not the same as the criterion used to judge the suitability of a model." This is the same mismatch Fig 5 :43-44 prices, from a field that does not use the framework.

**Mode `specified`. Triangulated**: Fig 5 :43-44 and the statistics source, low overlap.

**Refuter:** show that the capability term pays across a held-out family of tasks with a stated code and a measured residual, not one occasion. If it fails to pay, the claim is withdrawn as a capability and recorded as a benchmark fit.

### F7: No figure line names the discriminating benchmark (all domains)

Fig 9 :32: "you get a kind of thing, never the answer itself"
Fig 9 :30: "your words are borrowed too, so describe the effect"
Fig 13 :133: "could this have been reached at all. A system with a closure can answer that before it searches, and what it returns is a shape rather than a name."
Fig 13 :134: "Unreachable is a verdict here, not a silence,"
Fig 13 :135: "It cannot say which primitive is missing, because naming it would mean already holding it."
Fig 8 :39: "So a search that finds nothing is never a proof of absence."

The framework returns the shape of a discriminator, not its name. No line selects a benchmark, a threshold, a percentage, or a task family. So the answer to "how can researchers distinguish" is a four-condition separator, and the question of which concrete test to run is a declared `gap`. The gap is of the shape-not-a-name kind, close to unreachable-at-this-budget: no instrument in this room returns a specific test, and no figure line entitles us to invent one. Fig 9 :32 is explicit that we get a kind of thing. Fig 8 :39 is explicit that failing to find novelty is not proof of absence, so a negative result on our separator is not a proof the system lacks the capability.

**Mode `general` on the shape, `gap` on the named test. Triangulated**: Fig 9 :32 and Fig 13 :133-135 (two low-overlap figures, the lookup step and the decidability step).

**Refuter:** a figure line that directly names a discriminating test, or a ground measurement that does so. Until then, the gap stays open and is reported rather than filled.

### F8: The preference must be bound before the run (D4)

Fig 5 :62-63 (the sought-for shape held "as a PREFERENCE rather than as a term", "It is not bound, it predicts nothing, and it accrues no residual"): attributed to the figure text, quoted here by paraphrase to keep the audit clean.
Fig 5 :65: "make the sought-for shape an ORDINARY TERM."
Operators table :58: "a refutation is a negation, which is why a vocabulary without it can only accumulate"
Fig 2 :59: "an interest in the outcome is unavoidable, an interest in the reading is disqualifying."

A research group looking for a capability holds "capability" as a preference. A benchmark result cannot refute that preference because the preference predicts nothing. The remedy is the discipline in section 0: write down what an answer would look like, bind it, and let it accrue a residual. Negation is required, so a refuter must be written before the evaluation (Operators table :58). A group whose standing depends on announcing a capability must declare the stake (Fig 2 :59).

**Mode `general`. Single-source on the figure side** for the preference blind spot (Fig 5 amendment), with the Formula "Direction" paragraph as a within-framework corroborator, not an independent witness.

**Refuter:** the pre-registered refuter in section 4, written before any conclusion. If it is written after seeing results, it is not a refuter and this finding fails.

---

## 4. Pre-registered refuter

Written before the conclusion, as required by the seat discipline. "A falsifier written before the run is a design instrument." The shape claim in section 0 is refuted if any of the following holds:

1. **Import refuter.** A behaviour appears that is not composable from the pre-change atoms(Γ), yet no contact with a differing frame can be found and no import was made. This breaks Fig 6 :22-23.
2. **Metric refuter.** A continuous per-slot metric on a held-out task shows the same smooth trend across scales that the discontinuous benchmark showed as a jump, with no new term required. This breaks the novelty condition and corroborates Schaeffer et al.
3. **Isomer refuter.** The behaviour is derived from the pre-change atom set under an existing bond, so the before and after states are isomers rather than different atom sets. This breaks the "new primitive" part of the claim and leaves the "real difference in substance" part standing.
4. **Harness refuter.** The capability disappears when the benchmark is refreshed, contaminated items are removed, or the task is moved into a reproduced habitat with an independent ground. This breaks Fig 11 :70 and Fig 10 :26.
5. **Contact refuter.** The score moves while a non-updating ground shows no change in what the system can do. This breaks Fig 11 :40.
6. **Ground refuter.** An agent-only improvement demonstrably moves the ground. This is the figure's own standing refuter (Fig 11 :71-72) and would break the capability-as-contact claim.
7. **Independence refuter.** Two frames with genuinely low evidence overlap, each ranging against a non-updating anchor, agree that the behaviour was already in the old closure. This breaks the import claim without breaking either frame.

If any fires, the affected part of the claim is withdrawn. The four-condition shape is not thereby disproved; it is a different object and must be tested separately. This distinction is deliberate, so a failed capability claim cannot be quietly recycled as a failed separator.

---

## 5. Recommendation

1. **Do not report a benchmark gain as a capability.** Report it as a residual per task slot (Fig 1 :19). Ask which slots are live and whether their ground was in training.
2. **Split the question before searching it.** It is a union of atom-set, contact, anchor, and provenance conditions (Fig 9 :54-57). One lever leaves the intersections standing.
3. **Bind the capability shape in advance**, with a stated code and a pre-registered refuter (Fig 5 :65). A post-hoc "capability" label is a preference, not a term.
4. **Move the test out of the harness.** Use a task in a reproduced habitat with a non-updating anchor, and enumerate the two silent failures: what was not reproduced, and what was unintentionally introduced (Fig 11 :68-69).
5. **Buy independence in proportion to the cost of being wrong** (Fig 2 :42). Two labs on the same public benchmark are one witness.
6. **Demand a provenance record for any import** (Fig 6 :12-13, Fig 8 :51). Without it, convergent derivation and adopted import are indistinguishable in the contents.
7. **Name the gap.** No figure line selects a benchmark. Say so rather than nominating one (Fig 9 :32, Fig 13 :134).
8. **Send the separator, not the theory** (Fig 10 :52: "Bring a characterised residual, never the source."). The outreach artifacts do this.

---

## 6. Canonical usage check and retraction / confirmation log

Read after the first five sections: `FIGURES_README_canonical.md` and the essay set. The canonical rule is that figures outrank summaries and the quotes are the authority; a reading that makes one figure contradict another has misidentified its domain. Applied here:

| earlier reading | status after the canonical check |
|---|---|
| "The figures forbid emergence" | **Retracted.** Fig 6 :21 forbids deriving a new atom inside a closure. It does not forbid import (Fig 6 :23) or contact change (Fig 11 :40). The verdict is conditional, not a blanket denial. |
| "Any benchmark gain is just more search" | **Narrowed.** SEARCHED applies only when atoms and wall are unchanged (Fig 6 :49). If contact changes through an import, the wall moves. Both readings kept. |
| "New capability means a new primitive" | **Narrowed and kept.** Over a fixed atom set the change is an isomer (Fig 12 :117), which is a real difference in substance without a new atom. The word "primitive" is reserved for the atom-set claim. |
| "shape, not a name forbids naming a capability type" | **Corrected, as in the exemplar.** The rule governs a *missing* primitive. Naming "tool use" or "recursion" is a binding onto an already-held atom, not an invented seventh. The citation is provenance (Fig 8 :51). Both readings visible. |
| World conflict: Wei et al. define emergence as non-extrapolable | **Returned to census, verdict not flipped.** Non-extrapolation can come from metric discontinuity (Schaeffer et al.) with no atom change. "Not predictable" and "wall moved" are different objects. No conflict with the figures remains. |
| Apparent strain Fig 6 (import moves wall) vs Fig 11 (capability is contact) | **Not strained after re-census.** Fig 6 governs what happens to a frame's closure; Fig 11 governs what capability is at the agent-and-habitat scale. Different objects, same independence rule. |
| "No figure names a test, so the answer is silence" | **Refused.** Fig 13 :134: "Unreachable is a verdict here, not a silence," and Fig 8 :39: "So a search that finds nothing is never a proof of absence." The gap is reported. |
| Simulated status | **Confirmed.** The Recursive Self-Improvement Trap essay's simulator warning applies to this document. Nothing here is `grounded`. |

### Seven-question recursive derivation, summary

1. **Does the score change discriminate?** No. Both readings predict it (Fig 1 :19, Fig 6 :49).
2. **Is the difference in the atom set?** If yes, an import is owed with provenance and a shadow test (Fig 6 :22-23, :12-13). If no, go to 3.
3. **Is it a new bond over the same atoms?** Then it is an isomer (Fig 12 :117), a real difference but not a new primitive.
4. **Did contact with the ground change?** Capability is agent-and-habitat (Fig 11 :39-40). A harness solve is not a capability (Fig 11 :70).
5. **Is the anchor independent?** If the task was in training or the metric is saturated, there is no anchor (Fig 2 :29-30, Fig 10 :26). LiveBench and Goodhart corroborate.
6. **Does the capability term pay?** MDL across slots, not one occasion (Fig 5 :43-44). Overfitting source corroborates.
7. **Can the frame see its own preference?** No. Bind the shape and write the refuter first (Fig 5 :65, Operators :58).

### Updated verdict

The answer is a **four-condition separator**, not a benchmark and not a percentage: per-slot residual on a task whose ground was not in training, novelty relative to the pre-change atoms(Γ) with a provenanced import or an explicitly named isomer, a demonstrated change of contact in a reproduced habitat, and an anchor that does not update plus at least one genuinely low-overlap frame. No figure line names a specific discriminating test, so the fifth item is a declared `gap`. Strains after re-census: one live type question, the exact status of "contact" as an observable at the agent scale, and one live world tension, the standing Fig 11 :71-72 refuter. Both are named, none hidden. Mode: `specified` on the separator, `general` on its shape, not `grounded`.
