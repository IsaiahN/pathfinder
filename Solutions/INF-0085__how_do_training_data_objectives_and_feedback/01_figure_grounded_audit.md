# Figure-grounded audit: how training data, objectives and feedback channels shape learned priority

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap* (read 2026-11-23): *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post"* but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, cited as `Fig N :line`), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, eight essays by Isaiah N, and the world sources in `10_source_ledger.csv`.

---

## 0. The question under audit, stated as an effect

> How do training data, objectives, and feedback channels shape the information an AI system learns to prioritize?

Options and what each leads to:

- **A: rank the three levers.** Say which matters most. Leads to a global scalar answer that erases per-slot structure, and to a verdict handed to a filter rather than a witness (Fig 9 :60).
- **B: treat them as one lever.** Say "data is all you need" or "the objective is everything." Leads to a single condition clearing only the region where that condition holds and leaving the intersections standing (Fig 9 :55 to :57).
- **C: derive the shape of the mapping, keep the three domains separate, mark the union, and state what is owed.** Leads to a checkable per-domain answer, a pre-registered refuter, and an honest stop at the limit of the instruments.

This audit derives C. It does not average the three domains into one score.

**Direction discipline.** The sought-for term here is "prioritize." It is a preference the question holds, not a term the derivation already has bound. Fig 5 :62 to :66 requires making it an ordinary term: *"make the sought-for shape an ORDINARY TERM"* and *"Committing a prediction before a run is this, already working."* So before the run: an answer to this question would look like a rule that predicts, per slot, which information acquires live residual mass and which terms get minted, stated independently of which of the three levers is being varied. That written shape is the term the refuter in section 6 points at.

---

## 1. The residual described before any frame is chosen

**R by arity, symmetry and scale** (Fig 9 :22: *"arity · symmetry · scale"*; Fig 9 :27 to :31: *"describe it before you go looking, or any frame you pick will seem to fit"*, *"your words are borrowed too, so describe the effect rather than the cause"*).

- **Arity.** "What gets prioritized" is a relation between a system (its library Γ, belief b and weighting w) and its habitat, not a single quantity. It has at least three inputs under consideration, so it is a compound, not a scalar.
- **Symmetry.** Priority is indexed per object slot, not aggregated. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :28: *"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."* A single global ranking over "all information" is the aggregation this forbids.
- **Scale.** The three levers act inside one closure during a run; a method learned at one scale crosses to another only through the membrane, and the transform is lossy (Fig 4 :22, :27 to :30). So the answer must be scale-indexed, not universal.

Fig 9 :53 applies: *"Nobody chooses. The gap does, and the gap is only as good as its description."*

---

## 2. Domain census before choosing any figure line

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| **D1, data and habitat** | training examples, corpus, labels, sampling distribution | contact and exposure; what the system can perceive at all | the ground the data was drawn from, which the corpus itself is not | partition boundary (what is in contact with the residual) |
| **D2, objective** | loss function, reward, comparison, threshold | what would count as progress, in the system's own terms (Fig 3 :10) | none of its own; a frame-internal score cannot anchor | partition (which composition crosses the kinds) |
| **D3, feedback channel** | reward signal, preference labels, graders, evaluators | the residual R carried back to the controller | the ground, reached only while the channel stays reachable | union with D1 and D2 (feedback is itself data and is weighted by the objective) |
| **D4, verification** | outside readers, second seat | agreement versus residual | the ground, never agreement | shares one evidence pool here, so no independent witness |

**Anchors checked.** D1 has one: a measurement or outcome the data is about, and it does not move when a model thinks differently (Fig 2 :29 to :30). D2 has none: an objective is a comparison the system authors, so it is not ground-visible on its own (Fig 1 :27). D3 has one only derivatively: the ground at the far end of the channel; the channel itself is an instrument, not the anchor (Fig 10 :24). D4 has one, but in this simulated run all seats draw on the same papers, so its independence is zero (Fig 2 :31).

**Partition or union.** Union, not partition. Feedback labels are training data; the objective decides how both are weighted; the data bounds what the objective can even express. Fig 9 :55 to :57: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."* This is why option B fails.

**Dependency order (Fig 3 :20).** *"The chain is ordered by dependency, not by importance."* Order: perception and data (Fig 3 :4 to :6), then vocabulary of what a situation affords (Fig 3 :7 to :8), then the objective (Fig 3 :9 to :11), then planning, then learn and carry. Feedback closes the loop by returning R. Refusal comes before mint (`THE_FORMULA.md` step 2), and the residual is described before a frame is chosen (Fig 9 :27 to :28).

---

## 3. Verbatim figure census, quoted before concluding

| figure | verbatim line | bearing |
|---|---|---|
| Fig 1 :19 | "The residual is indexed by object slot, not aggregated." | priority is per slot, not a global rank |
| Fig 1 :28 | "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look." | an averaged objective hides the live slot |
| Fig 1 :23 | "The ground enters as the only metric." | the three levers are not themselves the metric |
| Fig 1 :27 | "They are frame-internal. A frame cannot score itself with a quantity it also produces." | self-scoring objectives are disqualified |
| Fig 2 :29 | "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." | anchor test for all three domains |
| Fig 2 :35 | "Alignment is triangulation, not negotiation. A mirror cannot correct you." | feedback that moves with the model is not feedback |
| Fig 2 :36 | "An anchor is legitimate when the question is constitutively about it." | domain condition for human feedback |
| Fig 3 :10 | "it can say what would count as progress here, in its own terms" | the objective is the third dependency link |
| Fig 3 :27 | "A link with no instrument is not a link that works. It is a link nobody has looked at." | the objective link is usually unmeasured |
| Fig 4 :22 | "Only methods cross up. Only head starts come down." | a learned priority is a head start, not a recording to replay |
| Fig 6 :21 | "MINT composes inside the closure and can never add an atom." | more of the same data searches, it does not import |
| Fig 8 :32 | "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." | data scaling inside one frame cannot add a new kind |
| Fig 9 :55 | "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." | the three levers are a compound |
| Fig 9 :60 | "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." | ranking the levers is a budget move, not a verdict |
| Fig 10 :24 | "the ground does not decay, the channel does" | feedback failure is channel failure |
| Fig 10 :52 | "Bring a characterised residual, never the source." | first contact carries the residual, not the theory |
| Fig 11 :40 | "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves." | data changes priority through contact |
| Fig 11 :70 | "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." | synthetic feedback proves wiring, not ground contact |
| Fig 12 :112 | "A plan is a sequence. A goal is a comparison. Progress is a subtraction." | an objective is a comparison, not a state |

Every line above was reopened character by character in `03-FIGURES_TEXT.md` before being used. Strained readings are named in section 8, not smoothed over.

---

## 4. Findings

### F1: Priority is per slot, not an aggregate (general; structural)

Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* and Fig 1 :28 *"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."*

The three levers do not set one global priority. They set which slots carry positive residual mass R⁺_s and therefore which slots get probed and which terms get minted. A loss averaged over a corpus or batch can be near zero while one rare slot is live, which Fig 1 :13 calls *"a global R near zero with one live slot residual is a legal state."* This is the most important structural result for the question: asking "which information" without a slot index is the aggregation error the figures name.

**Mode:** `general`. **Refuter:** exhibit a system whose learned priority is demonstrably a single global scalar with no per-slot structure, and which still reliably attends to rare live cases without a separate per-slot mechanism.

### F2: Data acts as habitat, through contact, not as a recipe (specified)

Fig 11 :40 *"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."* Fig 11 :43 *"The habitat is enumerated, never composed."* Fig 11 :70 *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."*

Training data shapes learned priority by changing what the system is in contact with, not by being a formula added to the model. What the data does not yet resolve is the residual; Fig 11 :48 says *"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."* Synthetic data and a fixed benchmark are substituted habitats: they can prove wiring and never ground-contacted capability. Fig 6 :26 adds *"instruments extend what can be represented at all."*

**Mode:** `specified`. **Refuter:** the standing refuter in Fig 11 :72, an agent-only improvement that moves the ground, or a demonstration that a substituted habitat yields ground-validated capability without any subsequent contact with the original habitat.

### F3: The objective is a comparison link, and the link most likely to be unmeasured (specified)

Fig 3 :10 *"it can say what would count as progress here, in its own terms"*; Fig 3 :24 *"Why the middle link is where chains usually break."*; Fig 3 :27 *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

Fig 3 :25 to :26 explains why: perception and planning have obvious failures and obvious tests, while *"having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."* The objective is exactly this middle link. Fig 12 :112 states its grammar: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."* The Operators table :51 gives the test: *"a goal is a comparison, which is why a vocabulary without it cannot state one."* So an objective does not add information by itself. It supplies the threshold relation that decides which already-present differences count as progress. Change the objective, and the same data yields a different per-slot priority without any new data arriving.

**Mode:** `specified`. **Refuter:** name and demonstrate a working, standard instrument that measures whether a given objective says what counts as progress, with published failure modes. That would retire the "nobody has looked at it" claim for that objective.

### F4: A frame-internal objective cannot score the system (general)

Fig 1 :23 *"The ground enters as the only metric."* Fig 1 :24 to :26 disqualifies *"coverage, and compression achieved"* and *"predicates minted, and credibility accrued"*, then Fig 1 :27: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*

Training loss, compression achieved, and reward-model score are quantities the system also produces. They are useful as filters for budget and as error signals, not as grounds. The anchor test from Fig 2 :29 to :30 applies: *"If it moves when you push on it, it is not an anchor."* A proxy that rises while ground performance falls fails that test. World corroboration: Gao, Schulman and Hilton (2022) found exactly this divergence under Goodhart's law; see `09_watson_answer.md`.

**Mode:** `general`. **Refuter:** exhibit a self-produced score that does not move when the frame is pushed on, and that tracks the ground on axes it was not trained on. By Fig 2 :29 that would qualify it as an anchor.

### F5: Feedback is a channel, and the channel, not the ground, decays (specified)

Fig 10 :24 *"the ground does not decay, the channel does"* and Fig 10 :25 to :28: *"stale percepts, dropped transients, saturated metrics, pooled readings"*, *"the output is not a verdict, it is you have lost touch"*, *"keep the anchor reachable."*

A feedback channel is the return path for R. Its characteristic failures are staleness, dropped transients, saturation, and pooling of readings. When one fires, the system loses contact with an unchanged ground. This is why "more feedback" is not monotone improvement: a saturated reward signal carries less information than a sparse one. Fig 4 :25 adds a related warning: *"A recording carried upward looks like knowledge and is a description of one occasion."* A reward model is a recording of one population's preferences; replaying it as if it were the ground is the Fig 4 failure.

**Mode:** `specified`. **Refuter:** show a feedback channel that cannot saturate, stale, drop, or pool at any resolution, or show a channel in which saturation leaves per-slot priority unchanged.

### F6: Human feedback is a legitimate anchor only where the question is about people (general)

Fig 2 :36 *"An anchor is legitimate when the question is constitutively about it."* Fig 2 :37 to :38: *"Human judgment is the right anchor for is this a good answer for a person, because the question is about people. It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."*

This settles a common conflation in the field. Preference feedback from people is the right ground for "is this a good answer for a person." It is only an instrument for questions about correctness, truth, or code, and on those axes it can be wrong in ways its own readings cannot reveal. The RSI essay states the same rule in the author's voice (2026-11-23): *"The Tether ties alignment to the ground. Not to human preferences. Not to a reward model trained on human feedback."* That is a `general` framework claim with high author overlap, recorded as such.

**Mode:** `general`. **Refuter:** demonstrate human preference feedback that reliably settles a factual or correctness question on an axis humans do not measure, with ground confirmation.

### F7: Agreement inside a feedback pool is not corroboration (general)

Fig 2 :31 *"Independence, between two frames, is how little they draw on the same evidence."* Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Fig 2 :40 *"agreement about the world is worthless when the agreeing frames share an evidence pool"*; Fig 2 :42 *"Buy independence in proportion to the cost of being wrong."* Fig 7 :13 *"agreement compounds, evidence does not"* and Fig 7 :35 *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* Seat Map :163: *"High correlation is disqualifying for a verdict and efficient for a convention."*

If the reward model, the policy, and the evaluators all draw on the same preference corpus, their agreement is the pool talking. It is efficient for a convention about what the answers should sound like, and disqualifying as evidence about what the system prioritizes against the ground. This governs the outreach method too: do not pick readers for likely agreement.

**Mode:** `general`. **Refuter:** show two feedback frames whose independence survives a shared training corpus, measured by whether they diverge on a held-out ground reading.

### F8: The three levers are a union compound, not a ranked list (general; structural)

Fig 9 :55 *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :56 to :57: *"A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."* and *"a case in two conditions is not a harder case of either."* Fig 8 :45 *"Two frames together reach what neither reaches alone."*

Feedback labels are data; the objective weights both; the corpus bounds what the objective can express. The intersection is where the interesting behavior lives. Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* A claim that "data matters 60 percent" is a budget allocation, not a verdict.

**Mode:** `general`. **Refuter:** demonstrate full separability, that varying each lever leaves the other two effects unchanged on every slot, so the compound reduces to a partition.

### F9: More of the same data searches the closure; it does not move the wall (general)

Fig 8 :32 *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."* Fig 6 :21 *"MINT composes inside the closure and can never add an atom."* Fig 6 :23 *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*

Scaling a corpus is Fig 6's SEARCHED question: same atoms, same wall, more of the space visited. That can be exactly the right move when the term is already in the closure and merely unfound (Fig 8 :40 to :43 distinguishes unreachable-at-budget from underivable-in-principle). But it does not add a new kind of prioritized information. For that, an import from a frame whose closure differs is owed, with a source gate and a shadow test.

**Mode:** `general`. **Refuter:** show a genuinely new primitive, not a new arrangement, appearing in Γ from additional draws from the same distribution and the same objective, with no contact with a differing closure.

### F10: The sought-for shape must be bound as an ordinary term (general; method)

Fig 5 :63 to :65: *"so a frame can refuse the right kind of thing and still aim the refusal at the outcome it did not want rather than at the belief it holds."* and *"make the sought-for shape an ORDINARY TERM."* Fig 5 :48 *"Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."*

"Prioritize" is the shape this question is searching for. As a preference it accrues no residual and nothing in the derivation can see it until it is written down, bound, and allowed to accrue a residual like anything else. This is why section 0 writes the answer shape before the findings, and why section 6's refuter was written before the conclusion.

**Mode:** `general`. **Refuter:** demonstrate a derivation whose stated aim was never bound as a term and which nevertheless produced a refusable, ground-checkable prediction about per-slot priority.

### F11: The shorthand is lossy; measure the round trip gap (general)

Fig 4 :27 to :30: *"The transform between scales loses information, and that is the point."* and *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* The Symbols table defines R_T as *"The gap between what was sent up and what came back down: gap(x, (T_E ∘ T_A)(x)). Measures what the coarser description cannot hold."*

"Data, objectives and feedback shape priority" is a coarse description. What it drops when concretised into a particular system includes the slot index, the dependency order, the anchor test, and the union structure. Those drops are enumerated in `11_audit.md` rather than assumed to be zero.

**Mode:** `general`. **Refuter:** show that the shorthand and the full derivation return identical predictions on a per-slot benchmark, which would set R_T to zero for that case.

---

## 5. Verdicts per domain, kept separate and never averaged

| domain | verdict | status | key figures |
|---|---|---|---|
| D1 data and habitat | Data shapes priority by changing contact and the enumerated habitat, not by being a recipe. Synthetic or benchmark-only data is a substituted habitat and proves wiring, not capability. More of the same distribution searches, it does not import. | **triangulated**: Fig 11 (habitat and contact), Fig 6 (instruments and import), Fig 1 (per-slot residual). Low overlap among ecology, closure theory and residual indexing. | Fig 11 :40, :43, :70; Fig 6 :21, :26; Fig 1 :28 |
| D2 objective | The objective is the third dependency link and a comparison that supplies what counts as progress. It is the link most likely to lack an instrument, and a frame-internal objective cannot be an anchor. | **triangulated**: Fig 3 (dependency break), Fig 12 and Operators (comparison grammar), Fig 1 (ground-only metric). | Fig 3 :10, :24, :27; Fig 12 :112; Operators :51; Fig 1 :23, :27 |
| D3 feedback channel | Feedback carries R back to the controller. The channel decays while the ground does not. Human preference is the right anchor only for questions constitutively about people; otherwise it is an instrument. Agreement in a shared pool is not corroboration. | **triangulated**: Fig 10 (channel decay), Fig 2 (anchor legitimacy and correlation valence), Fig 7 (agreement versus evidence). | Fig 10 :24 to :29; Fig 2 :36 to :42; Fig 7 :13, :35 |
| D4 verification | In this simulated run the second seat shares the whole evidence pool, so its agreement is internal consistency, not corroboration. This is a verdict, not a silence. | **single-source** for the shared-pool verdict: Fig 2 :40 is primary; Fig 7 and Seat Map :163 use the same framework pool and are high-overlap corroboration only. | Fig 2 :31, :40; Fig 7 :13; Seat Map :163 |
| union of D1 to D3 | The compound needs its own loop. Varying one lever leaves the intersections bound by the others. | **triangulated**, with the forward test still unmeasured: Fig 9 :55 to :57 plus Fig 8 :45. | Fig 9 :55 to :57; Fig 8 :45 |

No domain was assigned `gap`: after the re-census in section 8 every domain has a nameable anchor and at least one governing figure line. That is a finding about coverage, not a claim that the world sources settle anything.

---

## 6. Pre-registered refuter

Required before the conclusion, per Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."* Also Fig 5 :66 *"Committing a prediction before a run is this, already working."*

The shape claim is refuted if any of the following holds:

1. A system's learned priority is shown to be a single global scalar with no per-slot structure and it still reliably attends to rare live cases without a separate per-slot mechanism (breaks F1, Fig 1 :19 and :28).
2. A self-produced score is shown not to move when the frame is pushed on, and to track the ground on axes it was not trained on (breaks F4, Fig 1 :27 and Fig 2 :29 to :30).
3. A standard, working instrument is demonstrated for whether a given objective says what counts as progress, with published failure modes (breaks F3, Fig 3 :27).
4. A feedback channel is shown that cannot saturate, stale, drop or pool at any resolution, or whose saturation leaves per-slot priority unchanged (breaks F5, Fig 10 :24).
5. Human preference feedback is shown to reliably settle a factual question on an axis humans do not measure, with ground confirmation (breaks F6, Fig 2 :38).
6. The three levers are shown to be fully separable, with varying one leaving the other two effects unchanged on every slot (breaks F8, Fig 9 :55).

If any fires, the corresponding finding is withdrawn and the verdict in `07` and `09` is revised. Until one is run, no domain is labelled `grounded`.

---

## 7. Recommendation

1. Lead with the per-slot shape, not with a ranking of the three levers. A ranking is a filter for where to spend effort (Fig 9 :60).
2. Instrument the objective link before optimizing above it. Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*
3. Treat feedback as a channel to be kept reachable. Monitor saturation, staleness, dropped transients and pooled readings as first-class failure modes (Fig 10 :25 to :29).
4. Unbundle the union before searching again (Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*).
5. Declare the stake in any check. Fig 10 :59: *"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."*
6. Measure the round trip gap rather than treating the shorthand as identical to the derivation (Fig 4 :30).
7. Send the generator, not a recording. Fig 4 :22: *"Only methods cross up. Only head starts come down."*

---

## 8. Canonical usage check, strains and retraction log

Two sources were read after the first sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo"*; *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; the framework returns *"what a missing thing would have to look like (a shape, not a name)"* and stops at the limit of the instruments, recording the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: *"the figures are the ground for design questions; Isaiah is the anchor for what the figures genuinely cannot settle."* So this derivation does not ask the author to rule on what the figures already decide.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| I first tried to rank data, objectives and feedback by importance | **Retracted.** Fig 3 :20 orders by dependency, not importance, and Fig 9 :60 forbids a filter handing over a verdict. Replaced with per-domain verdicts and a union. |
| I first treated the three as a partition of independent causes | **Retracted, re-censused as a union.** Fig 9 :55 to :57. Feedback labels are data; the objective weights both. |
| I first equated training data with the ground | **Retracted.** The corpus is an external source (Fig 6 :9 to :11), and the habitat is not the ground (Fig 11 :73: *"The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."*). Data is where actors come from; the ground is what settles. |
| I first equated the feedback channel with the anchor | **Narrowed.** The channel carries R; the ground is at the far end. Fig 10 :24 and Fig 2 :36 to :38. |
| I first read "more data" as adding new atoms to Γ | **Retracted, re-censused.** Fig 8 :32 and Fig 6 :21: it is SEARCHED, not OUTWARD, unless the added data comes from a closure that differs. |
| "shape, not a name" applied to the levers | **Narrowed.** The README's phrase governs a missing primitive. None of the three levers is a missing primitive here; the shape claim is about the form of the mapping, so the phrase governs the slot index and the union structure, not a ban on naming the levers. |
| F6 on human feedback | **Canonically confirmed and sharpened.** Fig 2 :36 to :38 plus the RSI essay's *"Not to human preferences. Not to a reward model trained on human feedback."* High author overlap recorded. |
| F7 on agreement | **Canonically confirmed.** Figures README and Fig 2 :40. |
| Simulated status | **Canonically confirmed.** RSI essay: *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* |

### Strains named, not hidden

- **Source gate for a proxy reward model.** Fig 6 :23 says the wall moves only on contact with a frame whose closure differs. A reward model trained on the same preference corpus as the policy may not have a closure that differs, so whether it counts as an import is undecidable from inside the frame. Recorded as an open strain in F5 and in `11_audit.md`. It is not smoothed into "reward models are imports."
- **Arity of R.** Fig 9 :22 requires arity, symmetry and scale, but the three levers overlap, so the arity count is itself a union rather than an integer. This is why no single "number of causes" is reported.
- After re-census: **two strains, both named, none hidden.**

### Updated verdict

The shape survives: priority is per slot; data acts through contact and habitat, the objective is an unmeasured comparison link, feedback is a decaying channel whose anchor is the ground, and the three form a union compound whose intersections need their own loop. Every specific ranking of the three levers does not survive. The result is `specified`, ungrounded, and a candidate until a per-slot ground reading settles it.
