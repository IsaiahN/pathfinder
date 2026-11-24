# WATSON answer: how often do early-warning signals falsely signal a transition?

**Mode: `gap` on the numeric frequency, `specified` on the shape, `general` on the structural constraint. Not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This WATSON run synthesizes material already in `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the question it reports on. No measurement was taken.

## QUESTION

Decide, in effect terms, what the Tether says when asked how often rising variance or slower recovery falsely signals an approaching transition. Option A: supply a single global false-alarm percentage. Option B: report that the number is `gap` from the figures and give the shape any admissible rate must have. What each leads to: A aggregates per-slot residuals into a scalar, lets a filter hand over a verdict, and asserts a number no figure line and no source read here can support. B preserves the per-slot signal, keeps the filter separate from the verdict, states what ground would settle the rate, and stops honestly at that limit. The sought-for shape is bound as an ordinary term before the run: a false-signal rate is a per-slot curve over thresholds with a stated base rate and an enumerated habitat, settled by observation.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors, currency and anchor; partition or union; order by dependency.

- **R (the residual).** For system s at decision time t, the detector predicts an approaching transition; the observation o' is whether a transition followed in the window. R_s = |Gamma(b,a) - o'|. A false signal is R_s > 0 with the alarm having fired. Arity: three-place (indicator, threshold, realized transition), and it names an absence, so it needs the negation operator. Symmetry: ordered in time, sequence bond -> then comparison bond >< (written as the comparison glyph in the figures). Scale: first order inside one time series, second order at the ensemble of settled alarms. Fig 1 :19: "The residual is indexed by object slot, not aggregated."
- **Domain 1, the detection frame.** Actors: variance estimator, lag-1 autocorrelation, recovery-rate estimator, rolling window, decision threshold. Currency: hit rate versus false-alarm rate. Anchor: a labelled time series. No labels, no anchor, no rate. Question type: partition boundary between filter and verdict.
- **Domain 2, the dynamical frame.** Actors: state, control parameter, basin, noise, slow variable. Currency: resilience loss and return time. Anchor: model plus experiment. It enumerates the conditions that produce look-alikes; it does not by itself produce the rate.
- **Domain 3, the verification frame.** Actors: realized regime shift, observer, base rate of transitions in the ensemble. Currency: confirmed transitions, false alarms, missed alarms. Anchor: the transition itself, which does not update when an expert changes their mind.
- **Partition or union.** Union compound, not a partition. At least two indicators and at least five overlapping look-alike conditions. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
- **Order by dependency (Fig 3).** Perception (can we measure variance and recognize a transition?) -> vocabulary (do we have terms for criterion and base rate?) -> objective (what counts as a false signal?) -> planning (choose ensemble and window) -> learn and carry. The objective link is where the question currently breaks; a rate without a decision rule is a reading of nothing.

Strain test: applying the per-slot rule to the ensemble count strains if we treat it as a single measurement. Re-census resolves it: the ensemble curve is a second-order composition over settled first-order alarms (Fig 12 :104), so the aggregate is legitimate only as a curve that preserves the slots. No strain remains.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs.

**Domain 1, detection frame.**
- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> the rate must be indexed per system and indicator.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." -> a global scalar destroys the signal.
- Symbols table :43 "R is measured per slot, never as a single global number." -> corroborates the same constraint from the notation.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." -> variance and recovery budget attention; the ground settles the transition.
- Operators table :51 "a goal is a comparison, which is why a vocabulary without it cannot state one" -> the threshold states a goal, not a fact.
- Operators table :57 "a refutation is a negation, which is why a vocabulary without it can only accumulate" -> a false alarm needs a refusal, not just an absent alarm.
- Status: **triangulated** (Fig 1, Symbols table, Fig 9, Operators table; low overlap between the residual indexing and the bond grammar).

**Domain 2, dynamical frame.**
- Fig 11 :43 "The habitat is enumerated, never composed." -> the look-alike conditions are read off the world.
- Fig 11 :48 "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual." -> the list stays open.
- Fig 10 :25-26 "stale percepts, dropped transients, saturated metrics, pooled readings" -> pooled alarms and dropped transients are named channel failures.
- Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." -> variance and recovery are two readings of one change under different statistic-bonds.
- Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence." -> their agreement is one witness, not two.
- Status: **triangulated** for the enumeration rule and the one-witness reading (Fig 11 + Fig 12 + Fig 2); the statistical independence of the two estimators is `specified`, unmeasured, and is not claimed.

**Domain 3, verification frame.**
- Fig 1 :23 "The ground enters as the only metric." -> the realized transition scores the alarm.
- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." -> the anchor does not move with expert opinion.
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." -> agreement cannot score an alarm.
- Fig 7 :35 "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." -> corroborates from the room-chain figure.
- Fig 9 :44 "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing." -> the absence of a rate in the figure closure is not proof that no rate exists.
- Fig 13 :134 "Unreachable is a verdict here, not a silence" -> the `gap` is reported, not hidden.
- Status: **triangulated** (Fig 1, Fig 2, Fig 7, Fig 13).

**Status of the numeric answer itself: `gap`.** No figure line returns a frequency. Fig 6 :21 "MINT composes inside the closure and can never add an atom." More search in the figure set will not mint an ensemble count.

## WORLD (secondary sources read)

World sources are corroboration only; they never overrule the figures. Fields were chosen for low overlap with complexity science.

- **Field: nonlinear dynamics / ecological early warning.** Carl Boettiger and Alan Hastings, "Quantifying limits to detection of early warning for critical transitions", J R Soc Interface 9(75), 2012 (opened 2026-11-22). Quote: "proposed methods hardly ever characterize their expected error rates." Prediction: no universal rate; error rates are model- and dataset-specific. Corroborates C1. Overlap: primary field, not low-overlap.
- **Field: nonlinear dynamics / stochastic processes.** Carl Boettiger and Alan Hastings, "No early warning signals for stochastic transitions: insights from large deviation theory", arXiv:1307.4415, 2013 (opened 2026-11-22). Quote: "rising variance or autocorrelation patterns typical of fold bifurcations can be observed in more benign bifurcations or smooth transitions." Prediction: look-alikes are structural, not exceptional. Corroborates C3.
- **Field: human cognition / decision making.** Spencer K Lynn and Lisa Feldman Barrett, "'Utilizing' signal detection theory", Psychological Science 25(9), 2014 (opened 2026-11-22). Quote: "When in the presence of perceptual uncertainty, mistakes cannot be avoided." Prediction: false-alarm rate is set by criterion, base rate and payoff, not by the signal alone. Corroborates C2. Overlap: low with the dynamical frame, but both use statistics, so not fully independent.
- **Field: cognitive science reference.** "Signal Detection Theory: Sensitivity, Criterion, and the ROC Curve", en.cognitivepsychology.com, 2026 (opened 2026-11-22). Quote: "When signals are rare, the optimal criterion rises, because most 'yes' responses to weak evidence would be false alarms." Prediction: no rate without a prevalence and a criterion. Corroborates C1 and C2.
- **Field: probability judgment / screening.** "Base rate fallacy", Wikipedia, accessed 2026-11-22. Quote: "the probability of a positive test result is determined not only by the accuracy of the test but also by the characteristics of the sampled population." Prediction: a positive alarm is not a probability of a transition. Corroborates the base-rate clause in the verdict.
- **Field: metatheory / provenance.** Isaiah N, "The Hard Problem is About Source", adventuresinml (Substack), 2026 (opened 2026-11-22). Quote: "An instrument that can't distinguish these cases demonstrates its own inadequacy, it cannot claim anything substantial about what is being measured or what causes it." Prediction: a source-discriminating instrument is owed, not a name or a rate. Corroborates the honest stop. Overlap: high, same author as the figures.
- **Field: search / shape.** Isaiah N, "The Library of Babel: Locating The Book of Books", adventuresinml (Substack), 2026 (opened 2026-11-22). Quote: "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." Prediction: stop at a shape. Corroborates the `gap` plus shape verdict. Overlap: high.
- **Field: validation / self-validation.** Isaiah N, "The Recursive Self-Improvement Trap", adventuresinml (Substack), 2026 (opened 2026-11-22). Quote: "the truly testable output would need to be derived from the real architecture or working the formula yourself." Prediction: this derivation cannot settle its own claim. Corroborates its simulated status. Overlap: high.
- **Field: tacit knowledge / effect descriptions.** Isaiah N, "Decoding Tacit Knowledge: Why Context, Subtext, & Pretext Matter", adventuresinml (Substack), 2026 (opened 2026-11-22). Quote: "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." Prediction: the two-stage offer is the right order. Corroborates the outreach artifacts. Overlap: high.

No world source conflicts with the figure verdict; the conflict rule was not triggered. The essays share an author with the figures, so their agreement is expected and carries little independent weight. The signal-detection sources are lower-overlap but share a statistical lineage with the dynamical frame, so their agreement is weak corroboration and is not counted as a second witness.

## VERDICT (from the figures)

The literal question ends in `gap`: the figures supply no false-alarm frequency, and a frequency is a `grounded` quantity requiring a labelled ensemble. The figure-reachable residue is a `specified` shape. Report, per system class and per indicator, the hit rate against the false-alarm rate as the decision threshold moves, state the base rate of transitions and the enumerated look-alike conditions, and score each alarm against the realized transition. The indicator is a filter, not a verdict; variance and recovery are one witness under two descriptions; the conditions form a union that must be unbundled before counting. An honest stop at the instrument limit is recorded rather than filled with a number. "Unreachable is a verdict, not a silence."

- **cost if wrong:** bounded and locatable. The pre-registered refuters R1 to R5 in `01_figure_grounded_audit.md` are written down, so an error is findable rather than invisible. The real cost would be inventing a percentage and spending the independence of outside readers on an uncheckable claim, which Fig 2 :42 prices: "Buy independence in proportion to the cost of being wrong." That cost is avoidable by leading with the shape and its refuter.
- **undoable:** yes. A labelled ensemble can be added without withdrawing any figure claim; the shape is not contradicted by a measurement, only narrowed by one. The packet already states its non-claims, so nothing has to be retracted to add the number.
- **reversed by:** a ground reading, not agreement. A labelled ensemble yielding a rate invariant across system class, indicator, threshold and base rate would reverse the per-slot claim; conditional independence of variance and recovery would reverse the one-witness claim; agreement-only calibration matching ground calibration would reverse the anchor claim; a single mechanism for all look-alikes would collapse the union; a figure line returning a frequency would change `gap` to `grounded`. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [The figures, as text (local extract)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [WATSON 60: the figures as metalaws (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\60_FIGURES_AS_METALAWS.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [Quantifying limits to detection of early warning for critical transitions](https://pmc.ncbi.nlm.nih.gov/articles/PMC3427498)
- [No early warning signals for stochastic transitions: insights from large deviation theory](https://arxiv.org/html/1307.4415v1)
- [Utilizing signal detection theory (Lynn and Barrett 2014)](https://pmc.ncbi.nlm.nih.gov/articles/PMC4304641)
- [Signal Detection Theory: Sensitivity, Criterion, and the ROC Curve](https://en.cognitivepsychology.com/Signal_Detection_Theory)
- [Base rate fallacy](https://en.wikipedia.org/wiki/Base_rate_fallacy)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [Decoding Tacit Knowledge: Why Context, Subtext, & Pretext Matter](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
