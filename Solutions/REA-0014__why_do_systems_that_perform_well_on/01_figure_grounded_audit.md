# Figure-grounded audit: why benchmark success fails under small context change

**Mode of this document: `general` on the structural shape, `specified` on the transfer prediction, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." No measurement is claimed here.

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* states that LLM output is "simulacra" and that "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** The local canonical extract `FRAMEWORK/reference/03-FIGURES_TEXT.md`, with `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`, `THE_FORMULA.md` and `THE_SEAT_MAP_Field_Guide_amended.md`. Every figure citation below was opened and checked against the verbatim extract this session. Quotes are exact substrings of that file.

---

## 0. The residual, in effect terms

State what is being decided before reaching for a figure.

A system S is scored on benchmark B in context C0 and does well. The context changes slightly to C1 (a new distribution, a changed cue, a perturbed prompt, a shifted population). The score on B stays reportable, but task success in C1 collapses. What is the residual R?

R is **the gap between the score the frame reports and the contact the system actually maintains with the ground once the habitat moves**. It is not a gap in accuracy on B. B is still answering the question B was built for. The gap appears at the seam between a substituted habitat and the habitat the system now faces.

In the loop's notation: R = |Γ(b,a) − o′| per slot s. The global score on B can be near zero while a live slot residual in C1 is unread. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." A single mean accuracy across many benchmark items is exactly that average.

What an answer would look like: a constrained **shape** for why the score and the contact come apart, plus the class of instrument that would close the gap. Binding it as an ordinary term (formula step "Direction") means writing down, before the run, what would count as a failure of the shape. That is §4.

---

## 1. Domain census (before choosing any figure line)

I describe R by arity, symmetry and scale, then give one line per domain with actors, currency and anchor. A domain with no nameable anchor is not yet a domain.

### R by arity, symmetry and scale

- **Arity: two habitats.** The relation is (S in C0, S in C1), one system under two habitats. It is not a property of S alone.
- **Symmetry: asymmetric and directional.** Strong performance in the familiar direction, collapse in the changed direction. The comparison is a transform across a membrane (Fig 4), not a symmetric bond of the kind where swapping operands changes nothing. Treating "familiar" and "changed" as interchangeable is the first census error to avoid.
- **Scale: agent-and-habitat, and cross-scale.** The quantity lives at the level of the pair, so it is read through the round trip between the local loop and the habitat (Fig 4, Fig 11). It is a round-trip gap `R_T`, not an in-loop error.

### One line per domain

**Domain 1, the benchmark frame.**
- Actors: the dataset, the metric, the scorer, the training and validation distribution.
- Currency: the benchmark score, a frame-internal quantity.
- Anchor: conditional. It is a legitimate anchor only if the question is constitutively about it (Fig 2 :36: "An anchor is legitimate when the question is constitutively about it."). For the generalization question it is not the ground. It is a substituted habitat.
- Verdict: this domain produces the high score and cannot by itself witness transfer.

**Domain 2, the deployment habitat (the changed context).**
- Actors: the system plus the new actors, conditions and relations in contact with the task. Fig 11 :45 to :47 lists actors, conditions and relations as the habitat's contents.
- Currency: capability, that is contact with the ground on the task.
- Anchor: the ground for the task, whatever settles whether the job got done. This is nameable, so this is a domain.
- Verdict: this is where the failure lives and where the only legitimate verdict is read.

**Domain 3, the robustness verification frame.**
- Actors: researchers, out-of-distribution evaluation sets, stress tests, review.
- Currency: evidence about transfer, and agreement.
- Anchor: the ground, never agreement. Independence between test frames is the parameter, not a courtesy.
- Verdict: in this simulated run all three domains draw on one evidence pool (the local figures and the papers in the ledger), so this domain's independence is low and its agreement is not corroboration.

### Partition or union

This is a **union compound, not a partition**. "Benchmark failure" bundles at least five overlapping conditions: shortcut cues, underspecification, metric saturation, habitat substitution, and missing vocabulary for the changed situation. Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." A single remedy (more data, more regularization, a harder benchmark) clears only the single-condition regions. The intersections remain and become the specific, describable residue.

### Order by dependency (Fig 3)

1. Settle what the ground is for the generalization question (anchor first). Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
2. Enumerate the deployment habitat before designing the metric (Fig 11 :43: "The habitat is enumerated, never composed.").
3. Only then design the score and the stress test.
4. Only then improve the model. Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."

Most effort in practice lands at step 4, because that is where the measurements already exist. Fig 3 :20: "The chain is ordered by dependency, not by importance."

---

## 2. Figure census (bearing and verdict, before findings)

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | residual indexed per slot; ground is the only metric; frame-internal quantities disqualified | the benchmark mean hides a live slot residual; the score is frame-internal |
| **2 The Ground** | anchor legitimate only if question is about it; correlation disqualifies a verdict | the benchmark is not the anchor for a transfer question |
| **3 Dependency Chain** | the middle link has no instrument; optimize above the break cannot rescue below | the break is at "what does the changed situation afford", which is unmeasured |
| **4 The Membrane** | recording carried up, replayed down; round trip and its gap `R_T` | a benchmark-perfect model is a recording replayed in a new habitat |
| **5 Mint Pipeline** | bargain, three guards, "explains one occasion perfectly" fails | high in-domain fit is exactly what the acceptance test refuses |
| **6 Closure / Reachability** | mint cannot add an atom; movement only on contact with a different closure | the changed-context term is not reachable from the training closure by more search |
| **7 Room Chain** | agreement compounds, evidence does not; next room must differ | repeated similar benchmarks are a mirror chain, not progress |
| **8 Union Surplus** | two frames reach what neither alone; provenance separates convergence from import | independent test habitats are the surplus, not more of the same one |
| **9 Leave / Arrive** | filter versus witness; describe residual before choosing a frame | the benchmark is a budget filter, never the verdict |
| **10 Ground Maintainer** | channel decays, not the ground; saturated metrics; room fixed while question moves | the direct answer to "small change": the room stayed fixed and the score is its symptom |
| **11 The Habitat** | test harness is a substituted habitat; capability is agent-and-habitat | decisive figure: the score proves wiring, never capability |
| **12 The Bond** | isomer, functional group, cross-kind composition | a context change is a different bond over similar atoms, a different substance |
| **13 Minimum Viable Set** | the set is closed, the arrangements are not | no new primitive is needed to explain the failure, only a different arrangement and habitat |
| **Operators table** | comparison ⋛ is a threshold relation between two quantities | the familiar/changed contrast is a threshold comparison, not a symmetric join |
| **Symbols table** | `R` is the aim and the round trip `R_T` measures what the coarser description drops | the score is an in-frame reading, not `R` at the habitat scale |

Strained readings are named as such in §7, not smoothed over.

---

## 3. Findings

### F1: The benchmark is a substituted habitat; the score proves wiring, never capability (decisive, triangulated)

Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."

Fig 11 :39: "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."

Fig 11 :40: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."

A benchmark is a test harness, therefore a substituted habitat. S doing well on B is a demonstration that the wiring works in the substituted habitat. It is not evidence of capability in C1, because capability is a property of the pair (S, habitat), not of S. The intuition that "the model was good and then the world changed" smuggles in an agent-only property that the figure denies.

Triangulated with Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion. Replayed downward, it produces a system that repeats a past success and cannot produce a new one." Low overlap: Fig 11 argues from capability and habitat, Fig 4 from the lossy scale transform. Mode `general` (structural), with the transfer prediction `specified`.

**Refuter:** a controlled intervention in which S improves in isolation (no change of contact, no new habitat, no new instrument) and yet becomes more capable in a genuinely changed habitat. That would break Fig 11 :40 and falsify the finding.

### F2: The score is frame-internal and can saturate without anyone noticing (triangulated)

Fig 1 :23: "The ground enters as the only metric."
Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces."

Fig 10 :24: "the ground does not decay, the channel does"
Fig 10 :25: "stale percepts, dropped transients,"
Fig 10 :26: "saturated metrics, pooled readings"
Fig 10 :28: "you have lost touch"

When a benchmark saturates, the metric keeps returning a high number while the channel to the ground is dead. The output is not a verdict about capability, it is the message "you have lost touch" (Fig 10 :27 to :28: "the output is not a verdict, it is you have lost touch"). This is the most common shape of the reported phenomenon: the number does not degrade at all, so there is no internal signal that anything is wrong. The Seat Map states the same rule in its own words (Seat Map :20): "The anchor does not decay. The channel to it does: stale readings, dropped signals, saturated metrics, populations pooled across a change."

Triangulated across Fig 1 (frame-internal quantities) and Fig 10 (channel decay), two figures with different subjects. Mode `general`.

**Refuter:** demonstrate an evaluation metric that is not produced by the frame it scores and that cannot saturate on the task while the channel to the ground dies. If such a metric exists and still fails to report loss of contact, F2 is weakened.

### F3: The room stays fixed while the question moves, and the high score is only its symptom (triangulated; the direct answer to "small change in context")

Fig 10 :71: "The room composition is a function of the question."
Fig 10 :72: "When the question changes, the room should change. A room that stays fixed while the question moves is the failure; the correlation is only its symptom."

The Seat Map repeats this as a standing law (Seat Map :235): "The room composition is a function of the question. When the question changes, the room should change. A room that stays fixed while the question moves is the failure; the correlation is only its symptom." A "small change in context" is precisely a small change in the question. The benchmark room was composed for C0 and is not re-composed for C1. The high score is the correlation that is only a symptom; treating the score as the thing to explain reverses cause and symptom.

Fig 7 :42: "booking a room like the last one is how a chain stops travelling at all." A robustness campaign that adds benchmark after benchmark drawn from the same habitat is a mirror chain: Fig 7 :13 "agreement compounds, evidence does not."

Triangulated across Fig 10 and Fig 7. Mode `general`.

**Refuter:** show a room (evaluation protocol) that does track the question across the specific change, and a system whose score in that room still collapses while its contact with the ground does not. Then the fixed-room diagnosis is not sufficient for that case.

### F4: What was not reproduced and what was introduced are invisible until the goal fails or the new actor acts (single-source)

Fig 11 :66: "Isolation is not removal of the habitat. It is substitution of one habitat for another."
Fig 11 :67: "Move the residual and you must reproduce everything its goal required, and you inherit the new habitat's actors, which you did not choose."
Fig 11 :68: "what you failed to reproduce is invisible until the goal fails"
Fig 11 :69: "what you unintentionally introduced is invisible until it acts"

This is the mechanism-level description of a "small change". The substitution removes conditions the benchmark silently supplied (a source tag, a padding pattern, a fixed camera, a shared population) and introduces conditions the system never selected for. Both failure modes are silent before the goal fails. So the collapse is not surprising once the habitat is enumerated, and the high score on B was never evidence that the missing conditions had been reproduced.

Single-source for the figure definition (Fig 11), corroborated at the world level by the shortcut-learning and Clever Hans papers in `09_watson_answer.md`, which share an ML evidence pool and therefore count as one witness.

**Refuter:** enumerate a habitat transfer in which every condition the goal required was demonstrably reproduced and no unchosen actor was introduced, yet performance still collapses. That would move the failure out of Fig 11's isolation law.

### F5: More search inside the training closure cannot reach the changed-context term (single-source)

Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."
Fig 6 :32: "MINT composes inside the closure and can never add an atom."

If the term that would predict C1 is not in closure(Γ) of the training frame, then training longer, adding more of the same data, and tuning on the same benchmark do not add it. Composition is idempotent inside a closed set. This distinguishes two remedies that look identical: the term may be in the closure and unfound (more search, more data diversity), or it may require a genuinely different closure (a new habitat or instrument). Fig 9 :39: "So a search that finds nothing is never a proof of absence." Underivable in principle and unreachable at this budget are different facts and issue different instructions; importing against a budget limit adds an atom that was not needed.

Single-source (Fig 6, with Fig 9 on the two-instrument distinction). Mode `general`.

**Refuter:** produce a case where scaling the same training distribution reaches a term that predicts a genuinely new habitat without any contact with a different closure or any new instrument. That would break the closure law as applied here.

### F6: A term that explains one occasion perfectly is refused by the bargain (triangulated)

Fig 5 :43: "A term that explains everything by saying nothing"
Fig 5 :44: "fails this, and so does a term that explains one occasion perfectly."
Fig 5 :48: "Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."

The acceptance test is a bargain: stating the term plus what remains unexplained must cost less than what was unexplained before. A model that fits B perfectly by exploiting a benchmark artifact explains one occasion perfectly and fails the bargain. Its own score is not a measure of success, by the figure's explicit rule.

Triangulated with Fig 1 :27 (a frame cannot score itself) and F2. Mode `general`.

**Refuter:** give a formal cost function under which a one-occasion-perfect term genuinely pays because the residual it leaves is smaller in both bit cost and action cost, with no hidden subsidy from the evaluator. Then the figure's refusal would not apply.

### F7: The benchmark is a filter for the budget, never a witness for the verdict (triangulated)

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."
Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool"
Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

A score on B ranks candidates and allocates compute. It is not admissible evidence that capability survived the habitat change. Several systems or several reviews that agree because they were trained and scored on the same pool are one witness wearing many names. The price of independence is paid in proportion to what a wrong verdict costs, which is why high-stakes deployment needs genuinely different test habitats, not more items from the same one.

Triangulated across Fig 9 and Fig 2. Mode `general`.

**Refuter:** show that agreement between two evaluation frames that demonstrably draw on disjoint evidence and disjoint construction history has no more predictive power for C1 than a single frame. That would break the independence rule here.

### F8: The break is at the unmeasured middle link (single-source)

Fig 3 :26: "having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."
Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."
Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."

The chain is perception, vocabulary, objective, planning, learning and carrying. Benchmarks measure the ends of the chain well and the middle link (does the system have terms for what the changed situation affords, and can it say what progress would mean there?) hardly at all. So optimization pressure concentrates where the instruments already are, and the unmeasured link stays broken. Fig 3 :22: "A step whose input never arrives cannot be diagnosed, only its predecessor can."

Single-source (Fig 3). Mode `general`.

**Refuter:** exhibit an instrument that reads the middle link directly and show that systems with a high score and a healthy middle-link reading still collapse under small context change. Then the missing-instrument diagnosis is incomplete.

### F9: The round-trip gap is the honest report (single-source, with an open measurement)

Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

Fig 4 :31: "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."

A benchmark score is an abstraction sent up from a habitat and read back down in a different one. The difference between what the score promises and what the system does in C1 is `R_T = gap(x, (T_E ∘ T_A)(x))`. It is not noise to be tuned away; it is the report of what the coarse metric could not carry. Treating "the benchmark score is the capability" sets `R_T` to zero and is exactly the dead-reckoning error the figure names.

Single-source (Fig 4), and it is the one finding that explicitly requires a measurement we have not made. Mode `specified` where it predicts a nonzero gap, not `grounded`.

**Refuter:** a round trip in which the abstraction and concretization are information preserving for the quantity of interest, giving `R_T = 0` on a real habitat change. Then the gap is not inevitable for that quantity.

### What survives: the defensible residue

| claim | mode | figure |
|---|---|---|
| A benchmark is a substituted habitat, and its score proves wiring rather than capability | `general` | Fig 11 :70, Fig 11 :39, Fig 11 :40 |
| The score is frame-internal and can saturate while contact is lost | `general` | Fig 1 :27, Fig 10 :24 to :28 |
| A fixed room under a moved question makes the score a symptom, not a verdict | `general` | Fig 10 :71 to :72, Fig 7 :42 |
| Failure is a union compound of overlapping conditions | `general` | Fig 9 :55 to :56 |
| Score and transfer come apart by a nonzero round-trip gap | `specified` | Fig 4 :30 |
| Which specific cue or artifact caused a given collapse | **not claimed** | needs a ground reading (world sources only corroborate) |

---

## 4. Pre-registered refuter

Written before the conclusion, per Seat Map :287: "a falsifier written before the run is a design instrument, not only an honesty device." The shape claim is refuted if any of the following holds:

1. **Score is a witness.** A benchmark score predicts performance under arbitrary small context changes at the same rate as a direct measurement of contact with the changed habitat. Then the score is admissible as a verdict and the filter/witness distinction (F7) is wrong.
2. **Isolated improvement transfers.** A system improved in isolation, with no change of contact and no new habitat or instrument, becomes more capable in a changed habitat (breaks F1, Fig 11 :40).
3. **The benchmark is the ground for the question.** If the question is constitutively about performance on B and performance on B does not drop, there is no residual to explain (Fig 2 :36).
4. **Closure reaches the new term.** Composition inside the training closure reaches the term that predicts C1 with no contact with a different closure and no new instrument (breaks F5, Fig 6 :23).
5. **The room tracks the question.** An evaluation protocol that re-composes with every relevant context change coexists with a score collapse while ground contact is intact (breaks F3).
6. **Zero round trip.** A real habitat change for which the score is information preserving for the capability of interest, giving `R_T = 0` (breaks F9).

If any fires, the corresponding finding is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with the residual, not the theory: a high in-domain score is a substituted-habitat result (F1). Ask for a refutation of that claim before showing any framework material.
2. Re-compose the room when the question changes (F3). A robustness evaluation that does not change with the context change is a mirror, not a test.
3. Enumerate the deployment habitat before designing the metric (Fig 11 :43 to :48). Read the list off the world; what cannot yet be perceived is the residual.
4. Buy independence where the cost of being wrong is high (Fig 2 :42): disjoint construction, disjoint data provenance, genuinely different habitats, not more items from one pool.
5. Measure `R_T` and publish it, rather than asserting that the score is the capability (F9). Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion." Send the generator, the shape claim and the refuter, not the conclusion.
6. Refuse the term "benchmark performance equals capability" explicitly. Refutation is negation, an operator that a vocabulary of ingredients cannot write (Operators table :58: "a refutation is a negation, which is why a vocabulary without it can only accumulate").

---

## 6. Canonical usage check

Two local sources govern how the figures may be used, and both were read after the first findings.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." A reading that makes one figure contradict another has misidentified its domain. The framework reports "a shape, not a name" and stops where instruments can no longer distinguish, recording the lineage.
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are metalaws, so design questions are answered by derivation, not by asking an anchor for a ruling. It applies Fig 11 directly: "capability is a property of agent-and-habitat, never of the agent alone," and Fig 9: "Use filters for the budget and witnesses for the verdict."

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "This is a benchmark-overfitting story" | **Narrowed.** Overfitting is only one of the five overlapping conditions in the union (F4, Fig 9 :55). Keep the union, do not reduce it to one cause. |
| "The model lost knowledge when the context changed" | **Refused.** The model never held capability as an agent-only property (Fig 11 :39). Retract the loss-of-knowledge framing. |
| "A harder benchmark fixes it" | **Refused as a general remedy.** A harder benchmark in the same closure is more search, not a new atom (Fig 6 :32). It helps only the unfound-in-closure case. |
| "Benchmark score is the ground" | **Conditionally retracted.** It is the ground only when the question is constitutively about the benchmark (Fig 2 :36). For a transfer question it is an instrument, and instruments can be wrong on axes they do not measure. |
| F1 "decisive" | **Confirmed and triangulated.** Fig 11 (capability) and Fig 4 (recording replayed) are low overlap. |
| F3 "room fixed while question moves" | **Canonically confirmed.** Same sentence in Fig 10 :72 and Seat Map :235, two local authority files. |
| F9 `R_T` | **Confirmed but unmeasured.** The figure requires the round trip to be measured; this simulated derivation cannot supply the number. |
| Apparent strain Fig 11 vs Fig 6 | **Not strained.** Fig 11 governs where capability lives; Fig 6 governs what composition can reach inside a closure. Different objects; re-census, no softening. |

---

## 7. Strains and re-census

- **Fig 1 (ground is the only metric) versus Fig 2 (an anchor is legitimate when the question is about it).** Not strained after re-census. Fig 1 disqualifies frame-internal quantities for a ground question; Fig 2 licenses the benchmark when the question is about the benchmark itself. Different question scopes.
- **Fig 5 (refuse a term that explains one occasion) versus Fig 9 (a term may be in the closure and unfound).** Not strained. Fig 5 prices a candidate term; Fig 9 tells you which of the three searches to run before pricing. Sequential, not contradictory.
- **`R_T` type under Fig 4.** Live and named, not hidden. The symbols table defines `R_T = gap(x, (T_E ∘ T_A)(x))`; the coarser description here is a scalar score, so what the gap measures is a loss of conditional structure. The numeric value has not been measured. This is a strain in the measurement, not in the figure.
- **After re-census: one live measurement strain, none hidden.**

The figure verdict in one sentence: **a benchmark score is a substituted-habitat reading; capability is agent-and-habitat; when the question moves and the room does not, the score becomes a symptom and the round-trip gap to the changed habitat is the honest, still-unmeasured report.**
