# Figure-grounded audit: REA-0017

**Mode of this document: `specified` on the per-domain conditions, `general` on the structural shape, `gap` on the named algorithm. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, Adventures in Machine Learning, 2026-11-19, opened 2026-11-23) states: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself"* and *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No training run was performed and no out-of-distribution measurement was taken.

**Sources.** The canonical figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the figures README at `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, the seat map, and the world sources listed in `10_source_ledger.csv`. All figure quotes below were checked against the verbatim extract before use.

---

## 0. The residual, in effect terms

The question asks: which training regimes yield representations that generalize beyond familiar patterns?

Restated in the loop's own notation: a learner holds `Γ` (a library of terms, an actor's vocabulary). It acts, observes `o'`, and carries a residual `R = |Γ(b,a) - o'|`. The question is which training procedures leave `R` small when `o'` is drawn from a situation the training did not contain.

Three effects need separating before any figure line is chosen:

1. **In-distribution fit.** `R` on familiar situations can go to near zero while a live residual remains on one situation slot. Fig 1 :13: *"a global R near zero with one live slot residual is a legal state"*. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* So "the model scores well on the benchmark" is not the residual this question is about.
2. **Out-of-distribution transfer.** The target effect is small `R` on a novel slot, measured against a ground that does not move when the model changes. Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*
3. **The object inspected.** A learned representation is an artifact, a reading of internal state. Whether the capacity to transfer came from a generator, a memorized table, or a borrowed binding is not recoverable from the artifact alone. Fig 11 :129: *"Nothing about a composed term tells you, from looking at it, which route produced it or whether that route was available."*

**What an answer would look like if bound as an ordinary term (formula step "Direction"):** a predicate `GENERALIZES(TrainingRegime, Ground)` that holds when (i) the regime leaves a re-applicable generator in the library so the reach grows, (ii) the habitat places the learner in contact with conditions whose closures differ, and (iii) an unmoved ground returns small per-slot `R` on novel situations. This predicate is written down before the run so it can accrue a residual and be refused like any other term. Without that binding, "generalization" is a preference the loop cannot see (THE_FORMULA, step 2 limit).

---

## 1. Domain census (before choosing any figure line)

R by arity, symmetry and scale. `R` is a three-place relation: learner `Γ`, action, observation, indexed by situation slot and ordered by training time. It carries an ordered bond (training precedes evaluation) and a comparison bond (inside versus beyond the familiar); it is not a symmetric join. Scale: a single learning loop, a population of environments, and a channel across training time. The membrane between scales is lossy (Fig 4 :30).

| domain | actors | currency | anchor | nameable anchor? | status |
|---|---|---|---|---|---|
| D1 Learner loop | parameters, features, vocabulary `Γ`, objective | residual reduction, description length | an external ground (held-out situation, experiment) | yes | admitted |
| D2 Training habitat | examples, environments, tasks, conditions, augmentations | contact, coverage of conditions | the structure of the target world, not the sample | yes | admitted |
| D3 Evaluation / ground | OOD probes, interventions, real-world outcomes | per-slot residual on novel situations | a measurement that does not update on the model | yes | admitted |
| D4 Method across scales | inductive biases, objectives, typed bonds, generators | methods crossing up, head starts down | whether the composition is re-applicable | yes | admitted |
| D5 Provenance / source frame | the record of which environment or frame supplied each atom | source gate, shadow test | the lineage, readable after the run | yes | admitted |
| X1 "Bigger model, more data" as sole cause | scale | compute, sample count | none nameable that is not already in D1 or D2 | no | absorbed into D1 and D2; a filter for the budget, not a domain (Fig 9 :60) |
| X2 "Good representation" as an intrinsic property | the vector | magnitude | none nameable independent of a ground | no | not a domain yet; re-grounded in D3 |

**Partition or union.** This is a **union** of overlapping conditions, not a partition of training methods into good and bad kinds. A generalizing regime needs D1 (a reach-growing generator) **and** D2 (contact with differing closures) **and** D3 (an unmoved, per-slot ground). A single lever clears the region where only one condition holds and leaves the intersections standing (Fig 9 :55). "A bundled problem is usually a union of overlapping conditions, not a list of separate ones" (Fig 9 :55).

**Order by dependency (Fig 3).** Perception of the slot structure comes before vocabulary; vocabulary comes before the objective (what counts as progress here); the objective comes before a plan (which training regime to run); learn and carry comes last. Fig 3 :20: *"The chain is ordered by dependency, not by importance."* The middle link, having terms for what a situation affords and saying what would count as progress, is the one with the fewest instruments (Fig 3 :25-26). This is where representation learning actually sits: Bengio, Courville and Vincent (2013) note *"the difficulty in establishing a clear objective, or target for training"*, which is Fig 3's broken-middle-link diagnosis stated in the field's own vocabulary.

Strain test applied during the census: D4 (methods cross up) and D1 (reach grows inside the closure) at first appear to compete. Re-census shows they govern different quantities: D4 is the between-scale filter, D1 is the within-scale closure. No strain after re-census. This is recorded in section 7.

---

## 2. Figure census (verbatim, before concluding)

| figure | bearing on REA-0017 | initial verdict |
|---|---|---|
| 1 The Agent | per-slot residual; ground is the only metric; frame-internal scores disqualified | governs the measurement domain D3 |
| 2 The Ground | anchor must not update; independence is low overlap; agreement is not triangulation | governs D3; a benchmark trained on is a frame, not an anchor |
| 3 Dependency Chain | objective is the weakly instrumented middle link | governs the order of D1 to D4 |
| 4 The Membrane | methods cross up, recordings do not; round trip gap | governs D4; separates generator from recording |
| 5 Mint Pipeline | three guards as a product; output is not success | governs whether a new term is licensed by training |
| 6 Closure / Reachability | mint cannot add an atom; only import moves the wall; instruments improved from worse ones | governs D2 and D5 |
| 7 Room Chain | agreement compounds, evidence does not; next room must differ | governs D2 diversity and evaluation chains |
| 8 Union Surplus | closure idempotent; low-overlap union has surplus; residual first | governs D2 plus D5; corroborates D4 |
| 9 Leave / Arrive | describe the residual before picking a frame; union versus partition; filters versus witnesses | governs the method and the declared gap |
| 10 Ground Maintainer | ground does not decay, channel does; verifier non-access | governs D3 and the outreach artefacts |
| 11 The Habitat | capability is agent and habitat; habitat enumerated; valence relative to residual; harness is substituted habitat | governs D2 decisively |
| 12 The Bond | ingredients are not the molecule; arrangement is the substance; catalysts, functional groups, two currencies | governs what a representation carries |
| 13 Minimum Viable Set | set closed, arrangements not; lineage is the proof; unreachable is a verdict | governs D1 reach and the gap |
| Operators table | negation refuses; a vocabulary without it can only accumulate | governs what a learner can withdraw |
| Symbols table | `R` is the aim and always a slice | governs the residual statement |

---

## 3. Findings

### F1 - Generalization is a property of agent and habitat, not of the representation inspected alone (decisive for D2)

Fig 11 :39: **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."**
Fig 11 :40: **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."**

The question is phrased as if a property of the training procedure applied to the model were the whole answer. The figure refuses that framing. A training procedure that enlarges the model without changing what the model is in contact with cannot move the out-of-distribution ground reading. D2 is therefore a genuine domain, not a background condition. Fig 11 :43: **"The habitat is enumerated, never composed."** Fig 11 :44: **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."** What counts as a training condition must be read off the contact cascade, not composed from a convenient list of augmentations. Fig 11 :52-53: the residual that mattered with DDT was *"three steps out."*

**Mode `specified` for learning systems.** Refuter: an agent-only change, with habitat and contact held fixed, that moves a novel-slot ground reading refutes this and refutes Fig 11 :40 at the same time. The figure itself names this as the live falsifier: *"an agent-only improvement that moved the ground would refute the capability claim"* (Fig 11 :71-72).

World corroboration, low overlap: Nakamura, Wright, Katz, Bodily and Sturz (2009, Journal of Comparative Psychology) trained pigeons in a same/different task with initial sets of 32, 64 or 1024 pictures and tested with novel pictures. Pigeons trained initially with 64 or 1024 items transferred immediately at baseline level; those started at 8 items showed carryover effects that *"hamper transfer when the training set is expanded"*. The effect is in the training habitat (set size and breadth of exemplars), not in a change of organism. Zhang, Zhang, Zhang and Gao (2023, Acta Psychologica Sinica) similarly find that *"worked-example learning can promote the solution of near, but not far, transfer problems"* and that rule-variant reasoning after prototype learning promotes far transfer. Mondoux, Auderset and Dillenbourg (2020, ISLS) find that students *"trained with examples taken from varied contexts got higher scores in a transfer task than those working with examples from the same context."* Three fields, three different organisms and tasks, one mechanism shape.

### F2 - The reach grows, not the library (decisive for D1)

THE_FORMULA step 8: *"IT IS THE REACH THAT DRIVES THE LOOP, NOT THE LIBRARY. Γ can grow while the reach does not move"* and *"a library that grows is not a reach that grows."*
Fig 4 :23: **"upward: a method that can be reapplied. Never the recording of a particular success."**
Fig 4 :25-26: **"A recording carried upward looks like knowledge and is a description of one occasion."** *"Replayed downward, it produces a system that repeats a past success and cannot produce a new one."*

A training regime that increases the number of stored patterns without increasing what can be composed from them has grown the library, not the reach. This is the figure-grounded distinction between memorizing the familiar and carrying a generator into the novel. Fig 13 :116-118: *"So a frame can search without end and still not arrive: infinite effort inside a finite reach."* Fig 6 :21: **"MINT composes inside the closure and can never add an atom."**

**Mode `general` for the structural claim, `specified` for a learning system.** Refuter: exhibit a system whose library grows while reach demonstrably does not, yet whose per-slot residual on a novel, ground-measured situation trends down and stays down. That breaks the reach-library distinction as applied here.

World corroboration: Bengio, Courville and Vincent (2013) frame representation learning as recovering *"the different explanatory factors of variation behind the data"* and state that *"for the most part what one learns about one factor generalizes in many configurations of the other factors."* That is a description of reach growth in the field's own terms. Geirhos et al. (2020) name the opposite failure: *"Shortcuts are decision rules that perform well on standard benchmarks but fail to transfer to more challenging testing conditions"*.

### F3 - Only import moves the wall; the training habitat must present differing closures (D2 and D5)

Fig 6 :14: **"the only operator that moves the wall"** (import).
Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**
Fig 8 :32: **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."**
Fig 8 :45: **"Two frames together reach what neither reaches alone."**

Combining F2 and F3: if training only composes inside one closure, no amount of it adds the atom needed for a novel situation. Generalization beyond familiar patterns therefore requires contact with environments whose closures differ. This is the figure-side reason for multiple, heterogeneous training environments. Fig 8 :48: **"How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus."** Many correlated examples are one frame wearing many names.

An import needs a source gate and a shadow test (Fig 6 :12-13, Fig 8 :50-52). Fig 8 :50-52: *"Only the record of where each came from separates them, and the surplus lives only where the closures differ."* So the training record (which environment, which intervention, which source) is part of the answer, not documentation added afterwards.

**Mode `general`.** Refuter: reach extended to a novel atom purely by internal composition with no new contact and no import, verified against an unmoved ground.

World corroboration: Arjovsky, Bottou, Gulrajani and Lopez-Paz (2019/2020, Invariant Risk Minimization) propose to *"find a data representation such that the optimal classifier on top of that representation matches for all environments"*, and warn that *"minimizing training error leads machines into recklessly absorbing all the correlations found in training data."* Peters, Bühlmann and Meinshausen (2016, JRSS-B) state the same condition from statistics: *"The predictions from a causal model will in general work as well under interventions as for observational data. In contrast, predictions from a non-causal model can potentially be very wrong if we actively intervene on variables."* IRM and invariant causal prediction are two world formulations of "contact with differing closures," from adjacent but distinguishable pools.

### F4 - The evaluation ground must not update, and the score must stay per slot (D3, decisive for the word "generalize")

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**
Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**
Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**
Fig 1 :28: **"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."**

A benchmark on which the model was trained, or an evaluation by the model's own confidence, is a frame that has updated on the learner. It is not an anchor. A single averaged accuracy hides the live OOD slot, which is exactly the state Fig 1 :13 licenses. Fig 1 :23: **"The ground enters as the only metric."** Fig 1 :27: coverage and compression are *"frame-internal. A frame cannot score itself with a quantity it also produces."*

**Mode `specified`.** Refuter: a regime counted as generalizing when its evaluation set is inside its training contact, or when aggregation across situations recovers the same verdict as per-slot measurement.

World corroboration: Geirhos et al. (2020) note that related failures are *"known in comparative psychology, education and linguistics"*, so the benchmark/ground confusion is not an ML-only artefact. The pigeon and education studies each use genuinely novel transfer stimuli, which is the experimental form of a non-updating anchor.

### F5 - A representation carries bonds, not just ingredients (D1 and D4)

Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**
Fig 12 :46: **"A recipe that names only its ingredients has recorded half of itself."**
Fig 12 :94: **"The arrangement is the substance."**

A vector of feature magnitudes is a list of ingredients. What licenses transfer is the typed relation between them, which is not recoverable from the magnitudes. Fig 12 :117: **"isomer. Same atoms, different bond, different substance."** Two representations with the same active dimensions but different composition are different substances. Fig 12 :119: *"catalyst. A part that survives its own use."* Some components are re-applicable methods; others are spent records of one occasion. Nothing in the ingredient list records which.

**Mode `general`.** Refuter: show that a representation's transfer behaviour is fully determined by its ingredient list with the bond term set to zero across a change of situation.

### F6 - The broken middle link is the objective, not the optimizer (order, Fig 3)

Fig 3 :25-26: **"having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."**
Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."**
Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."**

Most effort in training goes into optimization (a link that already works) and architecture scale, while the objective and the vocabulary of affordances (what counts as progress on a novel situation) have no instrument. Bengio et al. (2013) call the objective *"far-removed from the ultimate objective"* and say the question *"remains clearly open"*. That is Fig 3's diagnosis confirmed from inside the field.

**Mode `specified`.** Refuter: an instrument that measures the objective link directly and shows it is not the binding constraint in a given OOD failure.

### F7 - A vocabulary that cannot refuse can only accumulate (operator level)

Operators table :58: **"a refutation is a negation, which is why a vocabulary without it can only accumulate."**
THE_FORMULA step 3: *"NOTHING IS EVER DELETED, and the reach falls because something was ADDED."*
Fig 5 :53: *"refuted: a term we hold is wrong; a term is owed that says so."*

Shortcut learning is not only the presence of a spurious rule; it is the absence of a term that refuses it. A learner that can only add features cannot withdraw the standing of a feature that predicted well in training and fails outside it. Fig 6 :41-43: the reach can fall when a refusal is added, even though the record only grows.

**Mode `general`.** Refuter: a learning system with no negation-like operator that reliably withdraws a refuted regularity after an OOD failure without merely averaging it away.

### F8 - The answer is a union of conditions, not a ranked list of recipes (method)

Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**
Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
Fig 9 :57: **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."**
Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

The question invites a list: contrastive learning, self-supervised learning, data augmentation, domain randomization, meta-learning, invariant risk minimization. These are filters on what to try first (budget devices), not witnesses for the verdict (Fig 9 :60). The verdict is the union kept separate per domain: reach-growing generator, differing-closure habitat, unmoved per-slot ground. One lever leaves the intersections standing.

### F9 - No figure line names an algorithm: a declared `gap`

Fig 9 :32: **"you get a kind of thing, never the answer itself"**
Fig 13 :134: **"Unreachable is a verdict here, not a silence,"**
Fig 13 :135: **"It cannot say which primitive is missing, because naming it would mean already holding it."**
Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**

After a genuine re-census of all 13 figures, the Operators table and the Symbols table, no line selects contrastive over self-supervised, or augmentation over meta-learning, or returns an OOD threshold number. The figures constrain the shape of any generalizing regime; they do not rank named methods. This is a `gap` of the shape-not-a-name kind, reported as a verdict, not a silence. It is the ordinary term that remains unbound: "a specific algorithm wins" predicts nothing and accrues no residual until an instrument settles it.

An additional type question is live: "beyond familiar patterns" is a comparison (Fig 12 :87, a threshold relation between two quantities), and its operands require a defined boundary between familiar and novel. The artifact cannot disclose which source produced the capacity (Fig 11 :129), so naming a mechanism from the representation is a source-naming error. What is owed is a source-discriminating instrument, not a better name.

**Mode `general` for the limit.** Refuter condition 5 in section 4 would close this gap if a figure line were found that directly names a method.

### F10 - World caveat returned to the census, not used to flip the verdict

Kamath, Tangella, Sutherland and Srebro (2021, AISTATS) show that IRM *"can fail to capture 'natural' invariances"* and that this *"can lead to worse generalization on new environments, even when compared to unconstrained ERM."* Arjovsky et al. (2019) themselves require *"some degree of diversity across training environments"* (linear general position) for their guarantee.

This is a conflict only if "use multiple environments" is read as a recipe that automatically works. Re-census: diversity of environments is the **habitat condition D2**, not a sufficient algorithm. A failure of IRM on a problem with insufficiently diverse environments corroborates F3 rather than opposing it. The verdict is not flipped. This is recorded in the retraction log as a narrowing of an initial overreading.

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach: the shape claim is refused if any of the following holds.

1. A representation that only records familiar patterns (library grows, reach does not) nonetheless shows small, non-declining `R` on a genuinely novel slot measured by a ground that does not update on the model (breaks Fig 4 :25-26 and the reach-library rule).
2. An agent-only change that leaves habitat and contact unchanged moves the out-of-distribution ground reading (breaks Fig 11 :40).
3. A regime is counted as generalizing when its evaluation set lies inside its training contact, or when averaged accuracy reproduces the per-slot verdict (breaks Fig 2 :29 and Fig 1 :22).
4. A representation's transfer behaviour is fully determined by its ingredient list with the bond term set to zero across a change of situation (breaks Fig 12 :5 and :46).
5. A verbatim figure line is found that directly names a specific training algorithm as the generalizer, or returns an OOD threshold number. This closes the declared `gap` and makes F9 wrong.

If any fires, the corresponding finding is withdrawn and the census is redone. Until one is run, nothing in this folder is `grounded`.

---

## 5. Recommendation

1. Lead with the shape and the refuter, not with a method list (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Report generalization per situation slot against an anchor that did not train on the model (F4).
3. Characterize the training habitat by contact and cascade, including second-order and third-order effects, before naming augmentations (F1, Fig 11 :43-44).
4. Distinguish generator from recording in the training procedure; a method that cannot be reapplied is a recording (F2, Fig 4 :22-26).
5. Keep a provenance record of which environment supplied which atom, with a source gate and a shadow test (F3, Fig 8 :50-52).
6. Do not let a method ranking substitute for a verdict (F8, Fig 9 :60).
7. Say `gap` where the figures return no name, and say what instrument would close it (F9).

---

## 6. Canonical usage check

Two local sources were read after the first five sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of the instruments and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: design questions are answered by derivation from the figures, not by escalating to an outside authority; a conflict sends the reader back to the domain census.

### Retraction and confirmation log

| earlier reading | status after the canonical check |
|---|---|
| F1 first read as "large training sets are the answer" | **Narrowed.** Set size is a habitat condition, not a recipe. The mechanism is relational learning enabled by breadth of contact; the pigeon carryover result is the evidence, not a universal number. Fig 11 :39 governs. |
| F3 first read as "use many environments, therefore IRM works" | **Narrowed and kept visible.** Kamath et al. 2021 and Arjovsky et al.'s diversity requirement show that mere multiplicity is insufficient. Diversity of closure is the condition. Verdict unchanged, overreading retracted. |
| F6 first read as "optimizer is useless" | **Retracted.** Fig 3 :19 says effort above the break cannot rescue a broken link; it does not say the upper links are idle. Narrowed to "the objective link is the weakly instrumented binding constraint in the cases cited." |
| F9 first titled "the figures forbid naming an algorithm" | **Narrowed.** The canonical phrase governs a *missing primitive*. Named methods here are bindings already held in the ML frame, so naming one is provenance, not an invented primitive. What is forbidden is claiming the figure derived a name. Same `gap`, corrected reason. |
| F2 reach/library distinction | **Canonically confirmed.** THE_FORMULA step 8 and Fig 13 :115-118 both state it; the README's "set closed, arrangements not" is the same claim one level up. |
| F4 per-slot residual | **Canonically confirmed.** Fig 1 :19, :22, :28 and the Symbols table definition of `R` as always a slice. |
| Apparent Fig 4 versus Fig 6 strain | **Not strained after re-census.** Fig 4 is the between-scale membrane; Fig 6 is the within-closure wall. Different quantities. Matches the README's re-census rule. |
| F10 world conflict | **Returned to census, not flipped.** The failure of IRM under low diversity corroborates the habitat condition rather than opposing it. |

### Strains after re-census

- **Live, named:** the threshold type of "beyond familiar patterns" (comparison bond between two quantities; the boundary needs an instrument). F9.
- **Live, narrowed:** "representation" as artifact versus `Γ` as library plus reach. The artifact cannot disclose source (Fig 11 :129). F1 and F9.
- **Dissolved:** Fig 4 membrane versus Fig 6 wall. Different quantities.
- **Dissolved:** Fig 8 surplus versus Fig 2 agreement worthlessness. Same independence parameter read twice: differing frames create surplus; a shared pool makes agreement worthless.

**One live type question, one live source question, none hidden.**

---

## 7. Updated verdict

The figure-derived answer is the union of three conditions, not a named recipe. A training regime generalizes when it leaves a re-applicable generator so reach grows (F2, Fig 4 :22-26, Fig 13 :115-118), when the habitat places the learner in contact with conditions whose closures differ so an import is possible (F1 and F3, Fig 11 :39-40, Fig 6 :23, Fig 8 :45), and when an unmoved ground returns a small residual on novel situations measured per slot (F4, Fig 2 :29, Fig 1 :19). A representation carries bonds, not just ingredients (F5); the weakly instrumented link is the objective (F6); a vocabulary that cannot refuse can only accumulate (F7). No figure line ranks named algorithms or returns a threshold number, so that part is a declared `gap` (F9). Mode `specified` on the per-domain conditions, `general` on the structural shape, `gap` on the name. Not `grounded`. The whole folder is a simulated derivation checked for internal consistency against the figures, not a ground reading.
