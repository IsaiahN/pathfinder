# Figure-grounded audit: how a brain can estimate uncertainty about its own beliefs and decisions

**Mode of this document: `general` on the structural shape, `specified` on the per-domain determinant claims, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (opened 2026-11-23): LLM output *"can quickly simulate an approximate answer/output"*, but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the cognitive-science question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** Figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical usage rule at `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the eight essays as mapped in `05_what_shape_means.md` (three re-opened this session, five carried from the exemplar's canonical mapping and marked as such), and the public sources in `10_source_ledger.csv`, all opened 2026-11-23.

---

## 0. The residual in effect terms

The question asks *how a brain can estimate uncertainty about its own beliefs and decisions*. Stated as an effect rather than a topic:

A brain holds a belief b, acts a, observes o′, and forms a per-slot residual R = |Γ(b,a) − o′| (Formula step 1; Fig 1 :11). The question is how the brain obtains a reading of the **reliability of that reading**, when the same first-order machinery that produces the decision also produces the apparent confidence in it. The difficulty is not "how to attach a number" but "how to avoid a self-score": a frame cannot score itself with a quantity it also produces (Fig 1 :27), and a channel that has stopped delivering evidence looks, from inside, exactly like a prediction that met its ground (Formula, Closure).

The question as posed is a **bundle of four asks**, and must be unbundled before a frame is chosen (Fig 9 :54, *"And when the split lands on a union rather than a partition, unbundle before you search again"*; Library of Babel: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*):

1. **Uncertainty about beliefs**, where the object is b, *"Not the observation"* (Symbols table :21).
2. **Uncertainty about decisions**, where the object is the action a and its outcome o′.
3. **"How can"**, a generative or mechanism ask, which needs a shape rather than a name (Fig 9 :32, *"you get a kind of thing, never the answer itself"*).
4. **"Estimate"**, a measurement ask, which needs an instrument that can fail (Fig 10 :19, *"→ install what can be violated"*).

These four overlap and are not a list of separate questions. A single lever (one confidence scalar) clears the region where one condition holds and leaves the intersections standing (Fig 9 :55, *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones"*). Each gets its own loop; verdicts are kept separate and never averaged.

---

## 1. Domain census (before any figure line was chosen)

**R by arity, symmetry and scale.** Arity: at least three operands, belief b, action a, observation o′, plus a second-order reader of the resulting R. Symmetry: the comparison is not a symmetric join, it is a threshold relation and a directed refusal, so no symmetric bond is assumed. Scale: first order inside one object slot, second order at the read of that slot and across slots. The estimate must be per-slot because *"The residual is indexed by object slot, not aggregated"* (Fig 1 :19), and *"Aggregating across slots is how a live signal disappears into an average"* (Fig 1 :22).

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D1 first-order decision frame | b, a, Γ, o′, R per slot | residual mass R⁺_s | the ground, the outcome that settles the decision (Fig 2 :29) | partition boundary: which compositions are legal |
| D2 second-order metacognitive frame | the confidence reader, weighting w, boundary diff, negation ¬ | reliability of R, sorted gap kind, learnable w | the ground, via a maintained channel and a second frame with low evidence overlap (Fig 10 :24; Fig 2 :31) | union: monitoring plus control, two conditions |
| D3 ground / maintainer frame | experiment, dataset, independent frame | settlement | immovable ground (Fig 10 :22-24; Fig 2 :25) | ordering: settle before compose |
| D4 implementation / neuroscience frame | circuits, signals, regions, decoders | neural data | experiment | gap after re-census: no figure names an actor here |

**Partition or union.** D1 to D3 form a dependency-ordered chain, not three independent topics. D2 to D4 is a union: the estimate is both a monitoring read and a control signal, and the two conditions overlap (Symbols table :20-24 gives a learnable weighting w; Fig 9 :57, *"a case in two conditions is not a harder case of either"*). D4 is not yet a domain in the strong sense: it has actors and an anchor but no figure line that governs which actor fills which role, so it is admitted as a `gap`, not a verdict.

**Order by dependency (Fig 3).** Perception first (can the system read R per slot?), vocabulary second (does it have terms for the kinds of gap?), objective third (can it say what would count as being right in its own terms?), planning fourth (where to aim the probe). The chain typically breaks at the third link: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* (Fig 3 :27). Effort spent above a break arrives at a step that cannot use it (Fig 3 :19, :20). So the first question is not whether the confidence is accurate but what would count as progress per slot, and whether that was measured or assumed. Fig 3 :29 puts it thus: **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."**

---

## 2. Figure census (verbatim, quoted before concluding)

| figure | bearing | verdict |
|---|---|---|
| Fig 1 The Agent | residual per slot; self-scores disqualified | no global confidence scalar |
| Fig 2 The Ground | anchor must not update; triangulation not negotiation | confidence must range against an immovable ground |
| Fig 3 Dependency Chain | objective link has no instrument | the chain stops at "what counts as being right" |
| Fig 4 The Membrane | lossy cross-scale transform; measure the round trip | confidence is a coarse read of first-order activity, with a gap R_T |
| Fig 5 Mint Pipeline | gap sorted into kinds; refuted fifth kind; persistent-and-flat residual | uncertainty is typed, and must be able to refuse |
| Fig 6 Closure / Reachability | no frame escapes closure; unreachability looks the same from inside | "I don't know" conflates depth and absence |
| Fig 7 Room Chain | agreement compounds, evidence does not | no consensus pool can settle an uncertainty estimate |
| Fig 8 Union Surplus | frame cannot certify its own limit; underivable versus unreachable-at-budget | metacognition is a second frame in a chain, never final |
| Fig 9 Leave / Arrive | unbundle a union; describe before looking; a kind of thing | the four bundled asks must be split; shape not name |
| Fig 10 Ground Maintainer | the ground does not decay, the channel does; verifier non-access | channel decay is the hidden cause of low R |
| Fig 11 The Habitat | capability is agent-and-habitat; introduce, never subtract | an estimate that does not change contact changes nothing |
| Fig 12 The Bond | level-relative irreducibility; negation is not a bond; two currencies | confidence is second order; refusal needs a unary operator |
| Fig 13 Minimum Viable Set | the set is closed, arrangements are not; unreachable is a verdict | honest stop where instruments cannot discriminate |
| Operators table | negation refuses a claim; a vocabulary without it can only accumulate | the estimate must be able to say "this belief is false" |
| Symbols table | b is not the observation; w is learnable; R is the aim | w is a belief-source weight, not an evidence-precision weight |

Every quote in the findings below was checked character by character against `03-FIGURES_TEXT.md`. Where a figure line wraps, the quote is a contiguous substring of the normalised text.

---

## 3. Findings F1 to F12

### F1 — The question is a union of four conditions, not one scalar (framework-internal, triangulated)

Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."** Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** Library of Babel: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

The four asks in section 0 share objects but have different anchors. Belief-uncertainty ranges against the ground for b; decision-uncertainty against the outcome for a; "how can" against the shape of a mechanism; "estimate" against an instrument that can fail. A single number cannot settle all four, and averaging them would be the error Fig 1 :22 names.

**Refuter:** show that the four asks reduce to one quantity measured by one instrument on one anchor, with no residual left in any of the four slots. Until then the union stands.

### F2 — Uncertainty must be per-slot, never a global scalar (framework-internal, triangulated)

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."** Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."** Symbols table :43: **"R is measured per slot, never as a single global number."**

An uncertainty estimate that returns one confidence value for the whole decision has thrown away the only signal that says *where* the belief is fragile. A global confidence near zero with one live slot residual is a legal state (Fig 1 :13, *"a global R near zero with one live slot residual is a legal state"*). So the shape is a vector over slots, not a scalar.

**World check.** Fleming and Lau 2014 (opened, PMC) define *"metacognitive efficiency as the value of meta-d′ relative to d′, or meta-d′/d′"*, a single global ratio per task. This is a **budget filter**, not a witness for the shape: it measures overall calibration and is explicitly *"unable to dissociate trial-to-trial variability in the placement of confidence criteria from additional noise in the evidence used to make the confidence rating."* It cannot see slots. Corroborates the per-slot requirement at the level of a stated limitation, not a derivation.

**Refuter:** demonstrate a global confidence scalar that preserves the where-to-look signal for every live slot, including the case where the global residual is near zero and one slot is live.

### F3 — The estimate cannot be a frame-internal self-score (framework-internal, triangulated)

Fig 1 :27: **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** Fig 1 :23: **"The ground enters as the only metric."** Fig 5 :48: **"Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."**

If the brain's confidence readout is produced by the same machinery whose reliability it is meant to report, it is a quantity a frame produces scoring itself. It is not evidence; it is coverage. The same ban applies to confidence *"accrued"* and *"compression achieved"* (Fig 1 :25-26).

**World check.** Rahnev 2025, Nature Communications (opened via search and article page): *"the properties of existing measures of metacognition have been mostly assumed rather than empirically established."* His empirical assessment of 17 measures found the traditional ones *"thought to be influenced by the primary task performance."* Corroborates, low overlap with the framework (empirical psychometrics).

**Refuter:** exhibit a confidence signal produced by the decision machinery that is nevertheless independent of the quantity it scores, demonstrated by an intervention that moves one and not the other.

### F4 — A small residual has two internally indistinguishable causes (framework-internal, triangulated)

Fig 10 :24: **"the ground does not decay, the channel does"**. Fig 10 :25-26: **"stale percepts, dropped transients, saturated metrics, pooled readings"**. Fig 10 :27-28: **"the output is not a verdict, it is you have lost touch"**. Formula, Closure: the loop stops when R stops arriving, *"which is either a perfect prediction or a closed channel, and from inside those look the same."*

This is the core cognitive difficulty. A brain cannot read "how uncertain am I?" off the size of R alone, because R is small both when the world confirmed the prediction and when the channel stopped carrying a discriminating observation. The second-order read must therefore include a check on the channel: is the instrument still returning something? Fig 6 :34: **"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."**

**World check.** Wikipedia Predictive coding (opened 2026-11-23): *"Estimates of the precision are crucial for effectively minimizing prediction error, as it allows to weight sensory inputs and predictions according to their reliability."* Also: *"thus far there is no consensus on how the brain most likely implements predictive coding."* Corroborates the reliability-weighting shape; the implementation is an explicit gap. Behrens et al. 2007 (opened): *"it updates its belief about the environment in proportion to its prediction error, d, which is the difference between the expected and actual outcomes"*, and *"d must be multiplied by an additional factor called the learning rate, a"*, which *"should depend on the current levels of uncertainty in the estimate of the action's value."* This is the second-order multiplier in a concrete preparation.

**Refuter:** show a case where a decaying channel and a met ground are distinguishable from inside by the first-order readout alone, without a channel check or an independent frame.

### F5 — Uncertainty has kinds, not degrees (framework-internal, triangulated)

Fig 5 :10: **"sort the gap into four kinds"**. Fig 5 :11: **"held: the model was right, nothing owed"**. Fig 5 :12: **"new: extend perception, aim the probe here"**. Fig 5 :13: **"mis-attached: refit what you have, do not invent"**. Fig 5 :14: **"mechanism broken: a new term is owed"**. Fig 5 :53: **"refuted: a term we hold is wrong; a term is owed that says so"**.

A single confidence magnitude collapses five categorically different states. "I am 70% sure" does not say whether the gap is novel (aim the probe), mis-attached (refit), mechanism-broken (mint), held (nothing owed), or refuted (a belief must be refused). They route differently and have different anchors. This is the same structural point as the objective link in Fig 3: the kind of gap is what decides what to do next.

**World check.** Fleming and Lau 2014 (opened) distinguish *"metacognitive bias (a difference in subjective confidence despite basic task performance remaining constant), metacognitive sensitivity (how good one is at distinguishing between one's own correct and incorrect judgments) and metacognitive efficiency."* These are three kinds, not three degrees of one confidence. Pouget et al. 2016, as annotated in Fleming 2026 (opened): *"distinguishes world-directed uncertainty from self-directed confidence, arguing that the two serve different behavioural goals."* Corroborates typed uncertainty from an independent literature.

**Refuter:** produce a single scalar uncertainty report that determines the correct routing among all five gap kinds in every slot without further information.

### F6 — Estimation requires the capacity to refuse, and refusal is not a bond (framework-internal, triangulated)

Fig 12 :140: **"A vocabulary that cannot refuse can only accumulate."** Operators table :58: **"a refutation is a negation, which is why a vocabulary without it can only accumulate"**. Fig 5 :53 (above): the fifth kind owes a term that *"says so"*. Fig 5 :56: **"Requires an operator for negation, which the seven bonds do not contain."**

A brain that can only accumulate confidence cannot estimate uncertainty about a belief it holds, because the estimate would have to be able to say that the belief is false. Negation is the unary operator that does this; it joins nothing and its price is open (Operators table :70-71, :77). This is a structural requirement of the shape, not a claim about a neuron.

**World check.** Fleming 2026, Nature Reviews Neuroscience (opened): metacognition *"can lead to disorders of reality monitoring and insight, in which erroneous mental representations are endorsed with aberrant confidence."* A failure to refuse a held representation is exactly the clinical failure class. Corroborates from clinical neuroscience.

**Refuter:** show a system that accurately estimates uncertainty about a belief while having no operation that can refuse that belief, demonstrated by a case where the belief is false and the estimate does not change.

### F7 — A frame cannot certify its own limit (framework-internal, triangulated)

Fig 8 :34: **"A frame cannot reach its own metaframe. Godel's second theorem: a consistent system cannot prove its own consistency."** Fig 8 :37: **"A frame cannot certify its own limit. Chaitin: beyond a fixed constant, no system proves that any object exceeds its own complexity."** Fig 13 :134: **"Unreachable is a verdict here, not a silence"**. Fig 13 :135: **"It cannot say which primitive is missing, because naming it would mean already holding it."**

So the brain's uncertainty estimate cannot be final. It is a room in a chain, and it must be selected against the ground by the residual the previous room surfaced (Fig 7 :35, *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*). The estimate reports a shape and a stop; it does not certify itself.

**World check.** Fleming 2026 (opened) defines **meta-uncertainty** as *"Imprecision in an observer's own estimate of the reliability of their perceptual or cognitive system. Because this second-order estimate is itself noisy, it imposes a ceiling on metacognitive performance even when first-order sensitivity is intact"*, and identifies it as *"a central parameter of the CASANDRE model"* (Boundy-Singer, Ziemba and Goris 2023, cited and annotated in the review). This is the empirical counterpart of the frame-certainty limit: the second-order estimate is itself noisy. Corroborates, low overlap with the framework.

**Refuter:** exhibit a metacognitive estimate that certifies its own completeness and is then confirmed by an independent ground without any further frame.

### F8 — Confidence is triangulation, not negotiation (framework-internal, triangulated)

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** Fig 2 :31: **"Independence, between two frames, is how little they draw on the same evidence."** Fig 2 :40: **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"**.

A confidence readout is evidence for an uncertainty claim only if it ranges against an immovable anchor (an outcome, a dataset, a board) and a frame with low evidence overlap. Agreement among multiple cortical readers that share the same first-order signal is one pool talking (Fig 2 :19, *"they never talk, and still agree"*; Fig 2 :20, *"so the agreement is the pool talking,"*). Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."**

**World check.** Fleming and Lau 2014 (opened) insist that metacognitive sensitivity *"scales with task performance"* and must be corrected for it, and cite Nelson 1984: *"there should not be a built-in relation between [a measure of] feeling-of-knowing accuracy and overall recognition."* This is the operational form of ranging against an independent anchor. Behrens et al. 2007 (opened) range their volatility estimate against trial outcomes in a probability-tracking task. Corroborates.

**Refuter:** show that correlated confidence readers with identical evidence count as two independent witnesses for the same uncertainty claim.

### F9 — Reachability splits into three questions, and the estimate must say which (framework-internal, triangulated)

Fig 6 :27: **"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."** Fig 8 :39: **"So a search that finds nothing is never a proof of absence."** Fig 9 :44: **"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."** Fig 6 :32: **"An instrument is not built from a description. It is improved from a worse instrument already returning something."**

When a brain "doesn't know", three different facts are conflated: the answer may be in the closure and unfound (more search), it may be absent from the closure (import needed), or the instrument may be too coarse to resolve it (sharpen an instrument already returning something). Formula step 7 keeps these distinct, and asks SEARCHED first because it is cheapest. An uncertainty estimate that returns only "low confidence" does not tell the system which instruction to follow.

**World check.** Wikipedia Value of information (opened 2026-11-23): *"Value of information (VOI or VoI) is the amount a decision maker would be willing to pay for information prior to making a decision."* It distinguishes value of perfect and imperfect information, and notes *"The VoI of observing two new evidence variables is not additive."* This is a decision-theoretic analogue of the three-way split: whether to gather more evidence depends on what the evidence could change, not on a scalar doubt. Low overlap (decision theory / engineering). Corroborates the shape only.

**Refuter:** demonstrate a single confidence magnitude that reliably selects among more search, import, and instrument refinement without any further information about the source of the uncertainty.

### F10 — The sought-for shape must be made an ordinary term before the run (framework-internal, triangulated)

Fig 5 :62: **"A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term. It is not bound, it predicts nothing, and it accrues no residual, so nothing here can see it."** Fig 5 :65: **"The remedy is a discipline rather than a branch: make the sought-for shape an ORDINARY TERM."** Formula, "Direction": *"make the sought-for shape an ORDINARY TERM - write down what an answer would look like, bind it, and let it accrue a residual like anything else."*

This is why the five properties were written down in the README before the findings were derived. Without that step the derivation could find whatever shape it was looking for and would have no way to refuse it. A pre-registered refuter is this discipline already working (Fig 5 :66, *"Committing a prediction before a run is this, already working."*).

**Refuter:** show a derivation of the shape that did not commit to it in advance and still produced a checkable, falsifiable prediction rather than a retrodiction.

### F11 — The estimate is a second-order composition, and it costs in two currencies (framework-internal, single-source for the structure)

Fig 12 :104: **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom"**. Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** Fig 12 :125: **"A composition costs in two currencies, and they do not add."** Fig 12 :126: **"Bits price the description. Actions price finding out whether it holds."**

A first-order decision that has settled against the ground becomes an atom for the confidence estimate. So confidence is second order by construction, not by metaphor. Two slots with the same first-order atoms can be different uncertainty objects if the bond differs (Fig 12 :117, *"isomer. Same atoms, different bond, different substance"*), which is why local and global confidence are not the same molecule. A full derivation of order and analogues is in `06_isomers_and_order.md`.

**World check.** Behrens et al. 2007 (opened): the learning rate is a second multiplier on prediction error, and *"Variations in this ACC signal across the population predict variations in subject learning rates."* Corroborates the second-order structure from a single preparation; the bond typing itself is framework-internal, so marked `single-source` for the structure.

**Refuter:** show a confidence estimate that is not composed over any settled first-order term, or that can be fully priced in bits alone with no action cost.

### F12 — The chain stops at the objective link, and the implementation is a declared gap (framework-internal, `gap`)

Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."** Fig 3 :25-26: the link between having terms for what a situation offers and *"being able to say what would count as progress"* has *"neither, so it attracts the least attention and the fewest instruments."* Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."**

What would count as a correct uncertainty estimate, per slot, in a given preparation, is not measured by a single agreed instrument. Fig 1 :23: **"The ground enters as the only metric."** Without a ground that can refuse the estimate, the second-order read is not settled. And no figure line names a brain circuit, frequency band or region as the estimator. Every such name in the world literature is a **binding from the neuroscience frame**, provenance owed, never a figure result.

This is an honest `gap`, not a silence. Fig 8 :39: **"So a search that finds nothing is never a proof of absence."** Fig 13 :134: **"Unreachable is a verdict here, not a silence."** The framework returns the shape an estimator must have and which instruments would close it; it cannot say which circuit implements it.

**World check.** Wikipedia Predictive coding (opened): *"thus far there is no consensus on how the brain most likely implements predictive coding."* Rahnev 2025 (opened): the properties of metacognition measures *"have been mostly assumed rather than empirically established."* Fleming 2026 (opened) presents *"Dynamic evidence accumulation processes"* as *"candidate building blocks for local confidence"* with multimodal prefrontal integration for global self-beliefs, explicitly a candidate architecture. All three corroborate the gap.

**Refuter:** name a figure line that assigns a specific brain circuit to the confidence reader, or exhibit a single instrument that settles per-slot metacognitive accuracy across preparations. Until one of these, the implementation verdict stays `gap`.

---

## 3b. Domain verdicts, kept separate and never averaged

| domain | verdict | status | governing lines |
|---|---|---|---|
| D1 first-order decision frame | R must be per-slot and ground-ranged; the estimate cannot be a self-score | `triangulated` | Fig 1 :19, :22, :23, :27; Symbols :43 |
| D2 second-order metacognitive frame | typed by gap kind, channel-aware, refusable, ending in a stated stop | `triangulated` | Fig 5 :11-14, :53; Fig 10 :24-28; Fig 12 :140; Fig 8 :37 |
| D3 ground / maintainer frame | confidence is triangulation against an immovable anchor, not agreement | `triangulated` | Fig 2 :29, :31, :35, :40; Fig 7 :35; Fig 10 :42 |
| D4 implementation / neuroscience frame | no figure names a circuit or a single correct measure; the instrument is unagreed | `gap` | Fig 3 :27; Fig 8 :39; Fig 13 :134 |

No average is taken across these rows. A `triangulated` verdict here means two figures with low overlap govern the same quantity, not that two observers agreed. D4 is a `gap` after a genuine re-census, and is reported as unreached rather than filled by a name.

---

## 4. Pre-registered refuter (written before the recommendation and the canonical check)

Required before any outreach, per the seat map's rule that *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following holds:

1. A global confidence scalar is shown to preserve the where-to-look signal for every live slot, including the case where the global residual is near zero and one slot is live (breaks F2).
2. A confidence signal produced by the decision machinery is shown to be independent of the quantity it scores, by an intervention that moves one and not the other (breaks F3).
3. A decaying channel and a met ground are shown to be distinguishable from inside by the first-order readout alone, with no channel check (breaks F4).
4. A single uncertainty magnitude is shown to determine the correct routing among all five gap kinds in every slot (breaks F5).
5. Accurate uncertainty about a false belief is demonstrated in a system with no operation that can refuse that belief (breaks F6).
6. A metacognitive estimate certifies its own completeness and is then confirmed by an independent ground without any further frame (breaks F7).
7. A figure line is found that assigns a specific brain circuit to the confidence reader, or a single instrument settles per-slot metacognitive accuracy across preparations (breaks F12 and turns the declared gap into a nameable domain).

If any fires, the shape is wrong or incomplete and the claim is withdrawn or revised. Until one is run, no part of this may be labelled `grounded`. These seven conditions were written before section 5 and before the canonical check in section 6.

---

## 5. Recommendation

1. Unbundle before searching (F1). Treat belief-uncertainty, decision-uncertainty, mechanism and measurement as a union with its own loops.
2. Ship a per-slot, typed estimate, not a confidence scalar (F2, F5). Keep held / new / mis-attached / broken / refuted distinct because they route differently.
3. Keep the channel check inside the estimate (F4). A drop in R is not evidence of certainty until the channel is shown still to return something.
4. Make the estimate refusable (F6) and let it end in a stated `unreached` or `gap` (F7, F12). The framework returns a shape and a stop, not a name or a number that certifies itself.
5. Range confidence against an immovable ground and a low-overlap second frame (F8). Do not pool agreement among readers that share one evidence pool.
6. Distinguish more search, import and instrument refinement in the report (F9). "Low confidence" alone issues no instruction.
7. Offer the formula as a method, not the conclusion as a verdict. Fig 4 :22: **"Only methods cross up. Only head starts come down."**

---

## 6. Canonical usage check

Two local sources were read after sections 0 to 5 and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of the instruments and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: the mode rule, the three-way search question in step 7, the direction discipline, and the closure note that *"a perfect prediction or a closed channel... look the same."*

### Retractions and confirmations of my own earlier readings

| earlier reading | status after the canonical check |
|---|---|
| "the framework forbids naming any mechanism" | **Narrowed.** The canonical phrase is *"what a missing thing would have to look like (a shape, not a name)"*. It governs a primitive not held in Γ. Naming a brain circuit is not allowed by any figure, but for a different reason: no figure line governs D4 at all. Recorded as `gap`, not as a prohibition on held atoms. |
| "meta-d′ is the uncertainty estimate" | **Refused.** Fleming and Lau 2014 call it a measure of metacognitive sensitivity and say it is *"unable to dissociate trial-to-trial variability in the placement of confidence criteria from additional noise in the evidence."* It is a filter for the budget, never a witness for the shape (Fig 9 :60). |
| "precision weighting and w are the same operator" | **Retracted.** Symbols table :23-24 defines w as *"How far the belief leans on private history versus inherited prior"*, learnable from outcomes of past weightings. Predictive-coding precision weights prediction error by estimated reliability. Different operands, different object levels. Kept separate as strain S2 in section 7. |
| "the question is one switch with three settings" | **Refuted by F1.** It is a union of four conditions; Fig 9 :54 requires unbundling. |
| F7 read as "metacognition is impossible" | **Narrowed.** Fig 8 :37 says a frame cannot *certify its own limit*, not that it cannot have an estimate. The estimate is a room in a chain; it reports a stop and hands off. |
| F12 read as silence | **Refused.** A `gap` is a verdict (Fig 13 :134). The framework states what an estimator must look like and which instrument would close it, then stops honestly. |
| Apparent strain Fig 5 four kinds versus a confidence scalar | **Not strained after re-census.** Fig 5 sorts a gap by what is missing; a scalar prices the budget. Different objects. The scalar is a filter, not a witness (Fig 9 :60). |

---

## 7. Strains and re-census

- **S1, confidence scalar versus gap kinds.** Dissolved by re-census. The kinds sort R by what is missing (Fig 5 :10-14); a scalar is a budget price. Fig 9 :60 keeps filters and witnesses apart.
- **S2, w versus precision weighting.** Live and named, not hidden. Symbols table :23-24 governs belief-source mixing; predictive-coding precision governs reliability weighting of prediction error. They may both be learnable, but they are not one operator. A falsifier is in `06_isomers_and_order.md` Q3.
- **S3, "ground does not decay" versus internal noise.** Dissolved by re-census. Fig 10 :24 says the ground does not decay and the channel does; internal noise is assigned to the channel, which can decay. No strain after the census.
- **S4, belief-uncertainty versus decision-uncertainty.** A union, not a partition (F1). Symbols table :21 says b is *"Not the observation"*; decisions are a followed by o′. Both are per-slot readouts but different objects, kept in separate loops.
- **After re-census: one live strain (S2), one declared gap (D4), none hidden.**
