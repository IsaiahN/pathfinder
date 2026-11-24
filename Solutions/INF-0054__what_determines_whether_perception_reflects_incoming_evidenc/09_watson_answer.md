# WATSON answer: what determines whether perception reflects evidence, priors, or their interaction?

**Mode: `general` on the structural claim, `specified` on the determinant claims, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This run synthesizes `01`, `05`, `06`, `07` and `08`. It is checked for internal consistency against the figures. By its own rule ("the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the question it reports on. No measurement was taken.

## QUESTION

Decide, in effect terms, what determines whether a perceptual readout follows incoming evidence, prior expectations, or their interaction. Option A: it is one scalar balance knob. Option B: the three are a union compound with separate determinants. What each leads to: A promises a single parameter and predicts that raising it always moves the readout toward evidence; B predicts three separable conditions (immovable reference, live channel, per-object residual), an internal indiscernibility limit when the residual stops, and no single knob. Only B is checkable by the instruments named in `07` §4.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor, partition or union, and order by dependency.

- **R (the residual).** Arity: two operands, prediction `Γ(b,a)` and observation `o′`, producing a magnitude per slot `s`. Symmetry: the gap is arithmetically symmetric but the loop is not, because belief is "Not the observation" (Symbols table :20) and the anchor "does not update on A or B" (Fig 2 :25). Scale: within one scale; cross-scale error is `R_T` (Formula step 6), a different question.
- **D1, the perceiver's loop.** Actors: Γ, b, w, a, o′, R, s. Currency: residuals and description cost. Anchor: the ground reached through o′. Question type: partition of which operand drives a slot.
- **D2, the anchor / ground.** Actors: measurement, experiment, counter. Currency: settlement. Anchor: itself, it does not update. Determines evidence dominance.
- **D3, the channel.** Actors: percepts, transients, metrics, readings. Currency: fidelity. Anchor: the ground it must keep reachable. Determines whether o′ is current.
- **D4, the verification frame.** Actors: outside researchers. Currency: agreement and residual. Anchor: the ground, never agreement. In this simulated run all four domains draw on one evidence pool, so this domain's independence is zero.
- **Question type: union compound.** Interaction is structural; the other two are limiting cases with different determinants. Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Unbundle before searching.
- **Order by dependency (Fig 3).** Channel, then anchor, then per-slot residual, then belief-weighting. Fig 3 :19 "Optimising a link that already works cannot rescue one that does not."

Strain test: precision weighting in the world literature weights prediction errors by reliability; `w` in the Symbols table weights two belief sources. Different operands, so no strain after re-census. The one live strain is whether the gap `R` is literally the comparison bond `⋛`; the figures call it a gap and never write the identity, so that binding is `specified` and ungrounded.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the figures. Verdicts are kept per domain and never averaged.

**D1, the perceiver's loop, triangulated (Fig 1, Symbols table, Formula step 1, low overlap between an agent figure, a notation table and the compact loop):**
- Fig 1 :11 "residual R indexed by object slot" -> the readout is per object.
- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> a global number hides the live slot.
- Symbols table :36-39 "The gap between prediction and observation. The central quantity: everything the system does is driven by it." -> interaction is the substrate, not one option.
- Symbols table :24-25 "w_A + w_B = 1, and w is learnable from the outcomes of past weightings." -> `w` partitions belief sources, not belief against observation. This sub-claim is single-source within the framework.

**D2, the anchor, triangulated (Fig 2 and Fig 1):**
- Fig 2 :29-30 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." -> evidence dominance requires an immovable reference.
- Fig 2 :33 "The anchor must not update." -> if it updates, the readout tracks influence, not evidence.
- Fig 1 :23 "The ground enters as the only metric." -> the frame's own coherence is not the metric.
- Fig 2 :20-21 "so the agreement is the pool talking, not two frames confirming each other." -> a shared evidence pool mimics evidence contact.

**D3, the channel, single-source (Fig 10):**
- Fig 10 :24 "the ground does not decay, the channel does" -> an intact ground with a decayed channel yields prior-dominant output.
- Fig 10 :25-26 "stale percepts, dropped transients, saturated metrics, pooled readings" -> the named failure modes.
- Fig 10 :29 "keep the anchor reachable" -> the remedy is contact, not a better prior.

**D4, verification, triangulated (Fig 2, Fig 7, Fig 9):**
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." -> agreement cannot decide the determinant.
- Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool" -> this simulated second seat is not a witness.
- Fig 7 :35 "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." -> the check happens at the ground.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." -> contact scores never enter the verdict.

**Cross-domain limit, triangulated (Formula closure and Fig 2):**
- `THE_FORMULA.md`, closure: "the loop stops only when R stops arriving, which is either a perfect prediction or a closed channel, and from inside those look the same." -> the determinant is not internally readable.
- Fig 2 :45 "Frames range against the ground. They do not negotiate with it." -> only an external reference separates the two cases.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." -> the limit is not a proof that no determinant exists.

**Gap check.** After a genuine census, no domain ends in `gap`: every domain has a nameable anchor and at least one verbatim figure line. The sub-claim about the exact bond implementing `R` remains `specified` and unclosed, which is recorded as a strain rather than hidden as a gap.

## WORLD (secondary sources read, corroboration only)

Each entry: field, author / venue / year, verbatim quote, prediction here, and corroborates or conflicts.

- **Computational neuroscience, primary paper.** Karl Friston, "The free-energy principle: a unified brain theory?", *Nature Reviews Neuroscience*, 2010. Quote: "agents minimize free energy by changing their predictions (perception) or by changing the predicted sensory inputs (action)." Predicts that perception and action are two distinct ways of reducing a gap. Corroborates D1. Overlap: low with the framework figures, different author and venue.
- **Human cognition / predictive processing.** Wikipedia contributors, "Predictive coding", accessed 2026-11-23. Quote: "perception depends on balancing prior expectations (top-down predictions) with sensory evidence (bottom-up input), weighted by their precision, or estimated reliability." Predicts two operands with reliability weighting. Corroborates D1 and D3; it does **not** establish a single scalar knob, because the weighting acts on prediction errors. Overlap: moderate with the Bayesian brain page.
- **Computational neuroscience / statistics.** Wikipedia contributors, "Bayesian approaches to brain function", accessed 2026-11-23. Quote from Friston: "These changes correspond to action and perception, respectively." Predicts the same two halves as the primary paper. Corroborates D1. Overlap: high with the Friston paper and the free energy page, so this is one witness, not two.
- **Information physics / neuroscience.** Wikipedia contributors, "Free energy principle", accessed 2026-11-23. Quote: "This casts perception as Bayesian inference and action-perception cycles as active inference." Predicts a model-update loop ranged against sensation. Corroborates D1. Overlap: high with the two entries above.
- **Psychophysics / engineering statistics.** Wikipedia contributors, "Detection theory", accessed 2026-11-23. Quote: "Bias is independent of sensitivity." Also: "experience, expectations, physiological state (e.g. fatigue) and other factors can affect the threshold applied." Predicts that evidence sensitivity and response prior are separable, and that channel state (fatigue) moves the threshold. Corroborates D3 and the no-single-knob claim. Overlap: low, different field.
- **Philosophy and history of perception.** Wikipedia contributors, "Unconscious inference", accessed 2026-11-23. Helmholtz quote: "Every evening apparently before our eyes the sun goes down behind the stationary horizon, although we are well aware that the sun is fixed and the horizon moves." Predicts that a strong prior can dominate despite explicit contrary knowledge. Corroborates the prior-dominant limiting case. Overlap: low, historical source.
- **Engineering / control theory.** Wikipedia contributors, "Kalman filter", accessed 2026-11-23. Quote: "With a high gain, the filter places more weight on the most recent measurements, and thus conforms to them more responsively. With a low gain, the filter conforms to the model predictions more closely." Predicts a two-operand estimate with a reliability-set gain, not a belief-source knob. Corroborates D1 and F2. Overlap: low, different field.
- **Perception and instrument discrimination.** Isaiah N, "The Hard Problem is About Source", adventuresinml Substack, 2026. Quote: "An instrument that can't distinguish these cases demonstrates its own inadequacy, it cannot claim anything substantial about what is being measured or what causes it." Predicts that the readout cannot identify its own source; a discriminator is owed. Corroborates the cross-domain limit. Overlap: high, framework author.
- **Perception as reception.** Isaiah N, "How Intelligence Actually Works", adventuresinml Substack, 2026. Quote: "Perception is the reception of a projection by something that is not its source." Predicts that perceptual content is a crossing, not the source. Corroborates D1 and the limit. Overlap: high.
- **Validation and drift.** Isaiah N, "The Recursive Self-Improvement Trap", adventuresinml Substack, 2026. Quote: "a broken channel looks exactly like a working one, until the drift is so large that the system collapses." Predicts the internal indiscernibility of D3. Corroborates the Formula closure. Overlap: high.
- **Tacit knowledge and contact.** Isaiah N, "Decoding Tacit Knowledge", adventuresinml Substack, 2026. Quote: "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." Predicts the effect-first outreach order. Corroborates D4 method. Overlap: high.

No world source conflicts with the figure verdict; the conflict rule was not triggered. Four of the eleven entries share the framework author and several Wikipedia pages cross-reference one another, so the agreement is one evidence pool in large part. The Friston paper, the detection theory page and the Kalman filter page are the lower-overlap witnesses.

## VERDICT (from the figures)

The question's three-way framing is wrong: interaction is not an option among three, it is what a per-object readout is. Evidence dominance requires an immovable anchor; prior dominance can arise from a decayed channel even with an intact ground; and both require a residual read per object rather than averaged. There is no single evidence/prior knob, because the framework's weighting mixes two sources of belief and is explicitly "Not the observation". Last, from inside, a prediction that met its evidence and a channel that stopped delivering evidence are indiscernible when the error signal stops, so the determinant cannot be certified from the readout alone. This is a `general` structural result with `specified` determinant claims, ungrounded.

- **cost if wrong:** bounded and locatable. The packet names five refuters and four instruments before the conclusion, so an error is findable rather than invisible. The real cost is telling perception researchers that a single knob exists when three separable conditions exist, which would aim experiments at the wrong link (Fig 3 :19). That cost is avoidable by leading with the shape and its refuter. Fig 2 :42 "Buy independence in proportion to the cost of being wrong."
- **undoable:** yes. The three determinant claims can be refuted independently without touching the rest of the shape. A precision test separates `w` from reliability weighting; a live-line test separates channel decay from a prediction match; a slotting test separates aggregation from local evidence. No primitive has to be withdrawn.
- **reversed by:** a ground reading, not agreement. A live-line instrument that reads channel state independently of the readout; a measurement showing the reference moved when belief changed; a single global residual that yields correct per-object reports; a weight that demonstrably mixes observation with belief while `w_A + w_B = 1` still holds over belief sources; or a frame that certifies ground contact from its own residual alone. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [The figures, as text, with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical usage rule (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [WATSON 60: the figures as metalaws (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\60_FIGURES_AS_METALAWS.md)
- [The Formula (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [The Seat Map Field Guide (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_SEAT_MAP_Field_Guide_amended.md)
- [The free-energy principle: a unified brain theory?](https://www.nature.com/articles/nrn2787)
- [Predictive coding](https://en.wikipedia.org/wiki/Predictive_coding)
- [Bayesian approaches to brain function](https://en.wikipedia.org/wiki/Bayesian_approaches_to_brain_function)
- [Free energy principle](https://en.wikipedia.org/wiki/Free_energy_principle)
- [Detection theory](https://en.wikipedia.org/wiki/Detection_theory)
- [Unconscious inference](https://en.wikipedia.org/wiki/Unconscious_inference)
- [Kalman filter](https://en.wikipedia.org/wiki/Kalman_filter)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [How Intelligence Actually Works](https://adventuresinml.substack.com/p/how-intelligence-actually-works)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [Decoding Tacit Knowledge](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- Folder material synthesized: `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, `08_expert_verification_packet.md`
