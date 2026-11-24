# The Tether's answer on mechanisms versus correlations in ML models

**Mode: `general` on the structural shape, `specified` on each per-domain finding, not `grounded`.** This is a shape and a route, not a result. Simulated derivation checked against the figures (`05_what_shape_means.md` §5), not a ground reading. No model was trained, intervened on or measured.

## 1. The residual it answers

The question asks whether a fitted model reveals a genuine system mechanism or mainly captures correlations that fail under change. Under the figures that phrasing is a **union compound**, not one question (Fig 9 :4-5 *"are not one hard question but several well-formed ones. Split it rather than search"*). It splits into three conditions with separate loops and separate grounds:

- **Q_a (reachability and settlement):** does the model hold anything that contacts the ground at all?
- **Q_b (bond):** is what it holds the arrangement, not just the ingredient set?
- **Q_c (habitat):** does the regularity pay when the habitat is substituted?

Each is answered separately below and never averaged. A single lever (more data) clears the region where only Q_c holds and leaves the Q_b intersection standing (Fig 9 :55-56).

## 2. The shape: four constraints on any mechanism-credit

1. **Accuracy is frame-internal; it cannot be the verdict.** Fig 1 :23 *"The ground enters as the only metric."* Fig 1 :27 *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* Accuracy is a budget filter, not a witness (Fig 9 :60). The M-shape and C-shape both predict high in-distribution accuracy, so accuracy does not discriminate them.

2. **The discriminating residual is per slot, across habitats, from an independent frame.** Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* Fig 2 :29-30 *"If it moves when you push on it, it is not an anchor."* Fig 2 :31-32 *"Two people reading the same report are not two frames; two instruments pointed at the same thing are."* A held-out split from the same generator is one instrument wearing two names. Independence is bought in proportion to the cost of being wrong (Fig 2 :42).

3. **Correlation versus mechanism is ingredients versus bond.** Fig 12 :94 *"The arrangement is the substance."* Fig 12 :117 *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* A feature-importance map reports ingredients; it does not report the bond. Under Fig 12 two models over the same variable set with different arrangements are isomers, while models sharing only a pattern are a functional group. The full derivation and falsifier are in `06_isomers_and_order.md`.

4. **A test set is a substituted habitat; a solve proves wiring, never capability.** Fig 11 :70 *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."* Fig 11 :40 *"An improvement that does not change contact changes nothing, however much it improves."* What the harness failed to reproduce, and what it unintentionally introduced, are both invisible until the goal fails (Fig 11 :68-69).

## 3. Verdicts per domain, kept separate

| domain | verdict | status |
|---|---|---|
| **Q_a, model as frame** | Refused as a grounded domain: it has no internal anchor. Its "data" moves with the frame, so it fails Fig 2's anchor test. It is an object under test, folded into Q_c. | `general`, figure-derived |
| **Q_b, composition inside the model** | The vocabulary of bonds exists; the bond, not the ingredient set, is what "mechanism" names. Whether any given model holds the right bond is unmeasured. | `specified`, triangulated (Fig 12 + `THE_FORMULA.md` Composition) |
| **Q_c, evaluation ground and verification frame** | Only a push on the ground from a frame that shares no evidence pool with training discriminates the two shapes. Benchmarks are wiring tests; independence costs something. | `specified`, triangulated across Fig 1, Fig 2, Fig 8, Fig 11 |
| **The compound as a whole** | Not one question and not one verdict. Split before search; keep the three verdicts separate. | `general` |

No domain is marked `grounded`. No domain is `gap`: figure lines govern all four, and the strain test produced no live strain (§6 of `01_figure_grounded_audit.md`).

## 4. What it explicitly does not say

- Not that models cannot reveal mechanisms. That is a blanket `general`-mode verdict the figures do not give. The figures give criteria for a legitimate credit; they do not deny the possibility. No figure line names a model class as mechanism-bearing or mechanism-barred.
- Not that in-distribution accuracy is useless. It is a valid budget filter (Fig 9 :60); it is disqualified only as a witness for mechanism.
- Not that feature importance, saliency or probing accuracy is a mechanism. Those report a reading, and a reading *"cannot comment on the source"* (*The Hard Problem is About Source*).
- Not that a larger or more diverse fixed test set solves the problem. More of the same closure is Fig 8 :32 idempotence: *"no search, however long, adds an atom."*
- Not that the question is answered. The criterion is answered; the instance is not. No model was measured.

## 5. What would settle it, the ground

A source-discriminating instrument, not a further argument. *The Hard Problem is About Source*: a spectrometer resolved the green-reading/metamerism case, and *"It was proven wrong not by argument, but by the arrival of a better instrument."* Here the corresponding tests are:

1. **Intervention test (refutes "mainly correlations"):** a model keeps per-slot residual near zero under a genuinely new habitat, where the probe shares no data or preprocessing with training and the new habitat reproduces deployment conditions.
2. **Bond test (refutes "mechanism"):** two models with the same ingredient set and different arrangements behave identically under intervention, so the arrangement carries nothing (Fig 12 :94, :117).
3. **Round trip test (Fig 4 :30):** measure `R_T` between the benchmark habitat and deployment. If the gap is zero, the substitution costs nothing; if not, the benchmark result is dead reckoning: *"confident about a position nobody checked."*
4. **Standing figure-level refuters:** add an atom by import that changes which arrangement pays (Fig 6 :23), or show that two frames with disjoint evidence agree on the mechanism claim (Fig 2 :31-32).

These were written before the conclusion and are reproduced in `08_expert_verification_packet.md` and `09_watson_answer.md`.

## 6. The honest stop

**Unreached, not unreachable.** Fig 8 :39 *"So a search that finds nothing is never a proof of absence"* and :40-43 separate underivable-in-principle from unreachable-at-this-budget. If no instrument anywhere registers the difference between a mechanism and a shortcut, the honest verdict is that the question is unreachable at this budget: a verdict, not a silence. Fig 13 :134 *"Unreachable is a verdict here, not a silence"*. The lineage is recorded so the stop is checkable. *Indiscernibility is not identity.* What remains open is a measurement, not another argument about the figures.

## 7. One-paragraph version for outreach

> The Tether does not say that machine-learning models cannot reveal mechanisms, and it does not anoint any model that passes a benchmark. It says that in-distribution accuracy is a quantity the training loop also produces, so it cannot witness a mechanism; that the discriminating measurement is the per-slot prediction gap under a changed habitat, taken by a probe that shares no evidence with training; that correlation versus mechanism is the difference between holding the ingredients and holding the arrangement, invisible in the accuracy formula and decisive under intervention; and that a test set is a substituted habitat whose solve proves wiring and never capability. The original either/or question is a bundle of three conditions and has to be split. What is offered is the shape any mechanism-credit must have, falsifiers written in advance, and the instruments that would close it. Whether any particular model has a mechanism stays open until the ground pays.
