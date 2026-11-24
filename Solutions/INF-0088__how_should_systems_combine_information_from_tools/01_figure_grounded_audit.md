# Figure-grounded audit: combining conflicting information from tools, users and learned parameters

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*, opened 2026-11-23: "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post." and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** All figure citations are against `FRAMEWORK/reference/03-FIGURES_TEXT.md`, quoted verbatim with line numbers. `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, `FIGURES_README_canonical.md` and the eight essays are the framework sources. World sources are listed in `10_source_ledger.csv` and were opened on 2026-11-23.

---

## 0. The residual, in effect terms

A system holds learned parameters (a library Γ, a belief b, and a weighting w that leans on private history versus inherited prior, Symbols table :23-25). It receives readings from tools (instruments and external functions) and feedback or judgments from users. On some object slot s those three sources disagree about the same quantity. The structure of the residual is, per `THE_FORMULA.md` step 1, `R = |Γ(b,a) − o′|` per slot s.

The question asks for a **combining rule**: what to do with R when it arrives from several frames at once. Stated as effect terms, two candidate answers and what each leads to:

- **A: blend.** Treat the three sources as interchangeable numbers and take a weighted average, with weights set by confidence, recency, or who supplied them. This leads to a single number, a smooth output, and no record of which source was wrong. The live signal that would say where to look is averaged away (Fig 1 :22). If the sources share an evidence pool, the agreement is the pool talking, not two frames confirming each other (Fig 2 :40).
- **B: range, then fuse where licensed.** First describe the disagreement per slot, then decide whether the sources bear on a common state, then range each source separately against a ground that does not move when they disagree, then fuse only redundant readings with reliability weights corrected for correlation, and keep a refusal and a provenance record. This leads to a checkable shape, a named failure class, and an open slot where no ground exists.

The task of this audit is to decide which of A or B the figures license, per domain, without averaging the verdicts.

---

## 1. Domain census (before any figure line is chosen)

### R by arity, symmetry, scale

- **Arity:** three source kinds (tool, user, parameter) plus at least one object slot. The conflict is multi-source, not a two-frame disagreement.
- **Symmetry:** the sources are **not** interchangeable. A tool is an instrument that can range against the world; a user is a human-judgment frame that is an anchor only for a question constitutively about people (Fig 2 :36-38); learned parameters are an internal prior inside closure(Γ), not an anchor at all. Because the operands are asymmetric, a symmetric combine such as an unweighted average commits the flat-formula error of recording ingredients and not arrangement (Fig 12 :5, Fig 12 :92).
- **Scale:** the three operate at different scales. A tool reading is a local observation; a parameter is a compressed prior accumulated over many episodes; a user judgment may be about a goal rather than a reading. The transform between these scales is lossy and needs a measured round trip, not an assumed identity (Fig 4 :30).

### One line per domain (actors / currency / anchor)

| domain | actors | currency | anchor | partition or union |
|---|---|---|---|---|
| D1 Tool / instrument frame | tools, the measured object | readings, observations o′ | the measurement, only when the question is constitutively about what the tool measures (Fig 2 :36) | one slot of a union |
| D2 User / judgment frame | users, annotators, feedback providers | judgments, preferences, corrections | human judgment is the right anchor "for is this a good answer for a person"; otherwise an instrument (Fig 2 :37-38) | one slot of a union |
| D3 Parameter / prior frame | Γ, b, w, the learned weights | prior probability, compressed history | **none**: a frame inside closure(Γ), not a ground | one slot of a union |
| D4 Causal-structure frame | the relation among sources (common cause vs separate causes) | whether sources bear on the same state | the ground, reached through description of R in effect terms | the unbundling step |
| D5 Ground / verification frame | experiment, counter, benchmark, market, patient outcome | settlement, what pays | itself, and it does not update on any frame's opinion (Fig 2 :29-30) | the anchor for all four above |

A domain with no nameable anchor is not yet a ground. D3 fails that test by construction, and that is a finding, not a defect in the census. D4 has no anchor of its own and borrows D5's; it is a relation, not a source.

### Partition or union

This is a **union compound**, not a partition. The three sources are overlapping conditions: a tool and a parameter may be trained on the same corpus; a user and a tool may both reflect the same deployment distribution. A single lever such as a uniform weight clears the region where only one condition binds and leaves the intersections standing (Fig 9 :54-56). The correct first move is to unbundle: separate the causal-structure question (do these sources measure the same thing?) from the estimate-combination question (how much do we trust each reading?).

### Order by dependency (Fig 3)

1. perception: can the system tell what each source said and distinguish it from its prior state (Fig 3 :4-5)?
2. vocabulary: does it have terms for what each source affords, instrument, judgment, prior (Fig 3 :6-8)?
3. objective: can it say what would count as progress here, namely a residual that stops arriving at the ground (Fig 3 :9-11)?
4. planning: which source to probe next under incomplete information (Fig 3 :12-13)?
5. learn and carry: name what worked, verify it, carry it (Fig 3 :14-15)?

The chain usually breaks at link 2 to 3: teams treat all three sources as numbers and skip "do they measure the same thing, and what would settle the disagreement?" That link has no instrument, so it attracts the least attention (Fig 3 :25-27). Effort spent on link 4 (a cleverer weighting optimizer) cannot rescue a break at link 2 (Fig 3 :19-20).

---

## 2. Findings

### F1 - Do not average across sources or slots (decisive against A)

Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
Fig 1 :28: "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."

A combining rule that reduces tool, user and parameter readings to one blended number throws away the only signal that says which source failed and where to aim the next probe. Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." And Fig 12 :92: "Under a symmetric bond, k operands have k! spellings and one term". The sources are joined by asymmetric, typed relations (instrument of, judgment about, prior over), and a symmetric combine prices the arrangement at zero. **Triangulated** across Fig 1 and Fig 12 with low overlap (per-slot residual accounting versus bond pricing).

**Refuter:** a controlled task with a settled ground in which blending all three sources into one symmetric score matches or beats per-slot ranging on both accuracy and the ability to identify which source was wrong. If it does, this finding falls.

### F2 - Range each source against a ground that does not update; agreement is not triangulation

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
Fig 2 :30: "If it moves when you push on it, it is not an anchor."
Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."
Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool"
Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

If the learned parameters were trained on the same tool logs, the parameter and the tool are one evidence pool wearing two names. Their agreement adds no evidence. The rule must range each source separately against something that cannot be moved by the other two. Fig 2 :45: "Frames range against the ground. They do not negotiate with it." **Triangulated** across Fig 2, the Seat Map law at :163 ("High correlation is disqualifying for a verdict and efficient for a convention"), and the statistics of effective sample size (Faes et al. 2009, world source: correlated observations carry less information than their count suggests).

**Refuter:** two sources proven to draw on identical evidence change the combined estimate in a way that *increases* accuracy against a held-out ground, reproducibly. If so, the independence condition is not load-bearing here.

### F3 - Decide causal structure before combining

Fig 2 :6-7: "collapse 2: common cause (hidden shared source)"
Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."

Before weighting anything, the system must ask whether the three readings are readings *of the same state*. If a tool and a user disagree because one is measuring the latency and the other is judging the answer's helpfulness, there is no conflict to combine; there are two questions. If they disagree about the same state but from a hidden shared source, the "disagreement" is one pool talking (Fig 2 :6-7). If they are genuinely low-overlap readings of one state, the surplus of combining is real (Fig 8 :47: "Independence is one quantity read twice."). **Triangulated** across Fig 2, Fig 9, Fig 8, and two independent world literatures: Kayser and Shams 2015 (cognitive science: the brain first infers whether inputs have a common source, then integrates or segregates) and Roach et al. 2006 (human behaviour: with increasing discrepancy, integration gives way to segregation, contrary to mandatory averaging).

**Refuter:** a task in which skipping the common-cause check and fusing every source unconditionally is never worse than checking it, across a range of induced discrepancies. Roach et al.'s result predicts this refuter will not fire, but the refuter is written before the run, not after it.

### F4 - Users are an anchor only for questions about people

Fig 2 :36: "An anchor is legitimate when the question is constitutively about it."
Fig 2 :37: "Human judgment is the right anchor for is this a good answer for a person, because the question is about people."
Fig 2 :37-38: "It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."

For "is this answer helpful to this person" the user is the anchor and the tool is an instrument. For "is this code correct" the ground is a test suite or a proof checker and the user is an instrument that can be wrong on axes it does not measure. There is therefore no single fixed weight for users across all questions. The weight is delegated to the question, which is the "question selects the room" rule of Fig 10 :71-72 applied to sources. **Triangulated** across Fig 2 and the forecasting literature (Satopää et al. 2021, decision science: dependence among judges from common sources is one of the biggest challenges in combining judgments), with an honest scope note: the forecasting literature scores combinations against an outcome, which is exactly the ground condition the figures require.

**Refuter:** user feedback, on a non-people question with a checkable ground, improves the ground score as much as a direct ground test does, under conditions where the users have no access to the test. If so, the user is functioning as a ground and F4 is wrong for that class.

### F5 - Learned parameters are a prior, not a ground

Symbols table :23-24: "How far the belief leans on private history versus inherited prior. w_A + w_B = 1, and w is learnable from the outcomes of past weightings."
Symbols table :25: "Two frames with identical architecture diverge because their histories and their w diverge."

The parameter set is inside the frame. A confident prior is not a settlement, and confidence is not contact. Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves." Two systems with identical architecture can disagree purely because their histories and w diverged, so parameter disagreement is not automatically evidence about the world. The Recursive Self-Improvement Trap (essay, opened 2026-11-23) states the valence rule: "Prestige must never be allowed to validate an action directly... Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." A large, well trained parameter set is a budget to be tried, not a verdict. **Single-source** within the framework (Symbols table and Fig 11 are one evidence pool), corroborated from a different field by Wong et al. 2026 (machine learning: expert-level calibration is sufficient under distribution shift only for hard-routed mixtures, insufficient for soft-routed ones, so internal confidence cannot be equated with ground contact).

**Refuter:** a parameter-only system, with no new contact with a ground, improves its ground score purely by reweighting its own internally generated readings. That would make the prior a ground and break F5 and Fig 11 :40.

### F6 - Reliability weighting is local to redundant readings, and the numeric weights are a gap

Fig 2 :31-32: "Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are."
Fig 13 :39: "Six members that overlapped would be fewer members wearing six names."

Reliability weighting is licensed only when the readings are redundant measurements of one state and their noise is at least approximately independent. Then inverse-reliability weighting is the efficient combination, and correlated readings must be discounted, not counted twice. Faes et al. 2009 (statistics): the effective sample size is "the sample size one would need in an independent sample to equal the amount of information in the actual correlated sample." Castanedo 2013 (engineering) classifies source relations as complementary, redundant or cooperative, so a single weighting rule cannot cover all three. Seilheimer et al. 2014 (animal behaviour and neuroscience) report reliability reweighting in monkeys and humans, but only after the system has inferred a common source. **Gap at the numeric level:** the figures constrain the *shape* of the rule (per slot, causal structure first, ground-ranged, independence-corrected), but they hand down no numbers. Any specific weighting formula is an import from a world frame and owes a source gate and a shadow test (Fig 6 import rule). This is recorded as a gap, not papered over with a formula the framework does not derive.

**Refuter:** a derivation, from the figures alone, of a numerical weight for a tool, a user and a prior that beats a ground-scored baseline on a new task. That would close the numeric gap. Until then the honest report is the shape, not a coefficient.

### F7 - The channel decays even though the ground does not

Fig 10 :24: "the ground does not decay, the channel does"
Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

A tool that was calibrated last month, a user population that changed, and a prior trained on an older distribution are all channel failures, not changes in the ground. A combining rule must keep the channel reachable and measure the round-trip gap R_T between the compact internal description and the concrete reading, rather than treating the condensation as identity. **Triangulated** across Fig 10 and Fig 4 (framework) and Wong et al. 2026 (distribution shift, machine learning), which is a low-overlap field.

**Refuter:** a system that never re-checks its channels and never measures a round-trip gap matches a system that does, on a task with known distribution shift. If so, channel maintenance is decorative for that task.

### F8 - Provenance is the whole distinction between fusion and import

Fig 8 :51: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"
Fig 6 :14: "the only operator that moves the wall"

When a tool reading is admitted into Γ, the record must stamp origin and sequence (`THE_FORMULA.md` step 4: "Γ ← Γ ∪ {φ}, stamped with origin and seq"). Otherwise a binding borrowed from the tool frame looks identical to a term derived inside the frame, and the system cannot tell whether its wall moved or it merely relabelled something it already held. Castanedo 2013 describes the same requirement operationally as data association: establishing which observations came from which source over time. **Triangulated** across Fig 8, Fig 6 and the engineering source, with low overlap.

**Refuter:** a system that discards all source provenance and keeps only the fused values suffers no loss on an audit that asks which source was wrong. If so, provenance is bookkeeping rather than a check.

### F9 - A combining rule must be able to refuse a source, not just reweight it

Fig 5 :50-52: "a residual whose content is that a regularity the system holds is false owes a term, and the term it owes refuses another rather than explaining a gap."
Fig 12 :112: "A refutation is a negation, and that one is not a bond."

A tool that starts lying, a user cohort that starts gaming the feedback channel, and a prior that is simply obsolete are not readings to be downweighted forever. The rule needs the REFUTED bin of `THE_FORMULA.md` step 2: "a term held is false; what is owed is a refusal, not an explanation." Note the asymmetry from Fig 5 and Fig 6: nothing is deleted, and the reach falls because something was added. A vocabulary with only weights can accumulate and reweight; it cannot carry the correction that a source has become false. Roach et al. 2006 and Kayser and Shams 2015 corroborate from behaviour: segregation, not gentler averaging, is the response when discrepancy grows. **Triangulated** across Fig 5, Fig 12, `THE_FORMULA.md` and two low-overlap world sources.

**Refuter:** a rule with no refusal operator, only continuous reweighting, recovers as fast as one with refusal when a source flips to being systematically wrong. If so, negation is unnecessary for this class.

### F10 - Check the middle link before tuning weights

Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."
Fig 3 :20: "The chain is ordered by dependency, not by importance."
Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

Most engineering effort in this question lands at the weighting step, which is downstream of the vocabulary and objective links. If the system has no term for "common source versus separate source" and no way to say what would count as resolving the conflict, a better optimizer spends its budget on a step whose input never properly arrived (Fig 3 :22-23). **Triangulated** across Fig 3 and Fig 9 :27-28 "describe it before you go looking, or any frame you pick will seem to fit".

**Refuter:** a task where adding a representational term for source relation and a stated objective changes nothing, while a better optimizer changes the ground score materially. Then link 2 is not the break for that task.

### F11 - What survives, with mode attached

| claim | mode | figure or source |
|---|---|---|
| Residual must be kept per slot, never averaged across sources | `general` (structural) | Fig 1 :19, :22, :28 |
| Decide common-cause versus separate-cause before combining | `specified`, falsifiable | Fig 2 :6-7, Fig 9 :54-55 |
| Each source ranged separately against a non-updating anchor | `specified`, falsifiable | Fig 2 :29-30, :35, :40 |
| Users are an anchor only for people-about questions | `specified`, question-dependent | Fig 2 :36-38 |
| Parameters are a prior inside the frame, not ground | `specified` | Symbols table :23-25, Fig 11 :40 |
| Reliability weights only for redundant, low-overlap readings | `specified` | Fig 2 :31-32, Fig 13 :39, world sources |
| Numeric values of those weights | `gap` | no figure line governs numbers |
| A refusal operator is required in the vocabulary | `general` (structural) | Fig 5 :50-52, Fig 12 :112 |
| Provenance recorded per admitted reading | `general` (structural) | Fig 8 :51, Formula step 4 |

---

## 3. Pre-registered refuter (written before the conclusion)

Required before any outreach: Seat Map :287 "And a falsifier written before the run is a design instrument, not only an honesty device."

The shape claim (causal-structure first, per-slot residual, ground-ranged sources, independence-corrected reliability weights, refusal, provenance) is **refuted** if any of the following holds:

1. A single symmetric blend of tool, user and parameter readings, with no causal-structure check and no non-updating anchor, matches or beats the shape rule on a task with a settled ground and low-overlap sources (breaks F1, F2, F3).
2. Two sources with demonstrably identical evidence change the combined estimate in a way that reliably increases accuracy against ground (breaks F2, F6).
3. User feedback improves a non-people question with a checkable ground as much as a direct ground test does (breaks F4).
4. A parameter-only system with no new contact improves its ground score by internal reweighting alone (breaks F5).
5. A rule with no negation operator recovers as fast as one with refusal when a source becomes systematically false (breaks F9).
6. A numeric weighting rule is derived from the figures alone and beats a ground-scored baseline (closes the F6 gap in favour of a stronger claim).

If any fires, the corresponding finding is withdrawn and the recommendation is rewritten. Until one is run, no part of this may be labelled `grounded`.

---

## 4. Recommendation

1. State the residual per object slot before combining anything: which source said what, and what failed to resolve (F1, Fig 10 :52 "Bring a characterised residual, never the source.").
2. Infer causal structure first: common cause, separate causes, or hidden shared source. Unbundle the union before searching for weights (F3, Fig 9 :54).
3. Range each source separately against a ground that cannot be moved by the others. Treat user feedback as an anchor only when the question is constitutively about people (F2, F4).
4. Fuse only redundant readings of a common state, inverse to measured reliability and discounted for correlation. Segregate the rest (F6). Do not pretend the figures give the numbers (gap).
5. Keep the channel reachable and measure the round-trip gap; a stale channel reports as "contact lost", not as a verdict (F7).
6. Stamp every admitted reading with origin and sequence, and keep a refusal operator so a source can be marked false without deleting history (F8, F9).
7. Fix the vocabulary and objective links before optimizing weights (F10).
8. Fig 4 :22: "Only methods cross up. Only head starts come down." Send the rule and its refuter, not a recorded conclusion.

---

## 5. Canonical usage check (figures README and metalaws note)

Two framework sources were read after the first four sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw", and the canonical limit, the framework reports "what a missing thing would have to look like (a shape, not a name)", then stops at the limit of the instruments and records the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: design questions are answered by derivation from the figures, not by escalating to an authority. The figures are metalaws.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| Initially treated user feedback as an anchor for all sources | **Retracted.** Fig 2 :36-38 makes the anchor question-dependent. The claim is now scoped to questions constitutively about people. |
| Initially proposed inverse-variance weighting as "the Tether answer" | **Retracted at the numeric level.** No figure line yields a coefficient. It is now an honest `gap` at F6, with weighting licensed only under common-cause and low-overlap conditions. |
| Initially read F1 as forbidding all combination | **Narrowed.** Fig 1 :19-28 forbids aggregation that destroys slot information; it does not forbid fusion of redundant readings after causal inference. F3, not F1, governs the permission to fuse. |
| Apparent strain Fig 1 (no averaging) versus world reliability-weighted combination | **Not strained after re-census.** Fig 1 governs the accounting of residual across slots; the world literature governs the estimator applied to readings already known to be redundant measurements of one slot. Different quantities. Matches the README re-census rule. |
| Apparent conflict, Good Judgment Project reports uniform averaging is hard to beat | **Re-census, not a verdict flip.** That result is a convention whose weights are scored by an outcome ground (Fig 2 :41: "efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"). It does not license treating agreement as a verdict about the world when frames share evidence (Fig 2 :40). The numeric level stays a gap. |
| F9 "refusal" initially filed under Fig 5 only | **Confirmed and triangulated.** Fig 12 :112 supplies the structural reason: a refutation is a negation and is not a bond, so a vocabulary of weights alone cannot carry it. |
| F7 channel decay initially read as a tool-maintenance tip | **Canonically confirmed as a seat office.** Fig 10 :24 and the Seat Map put keeping the channel reachable in the Ground Maintainer's office, not in the loop. |

### Round-trip check in brief

Abstraction up: the figures become the shorthand "range sources against a non-updating anchor, fuse only redundant readings, keep refusal and provenance". Concretisation down: a concrete system with three sources. What the shorthand drops (the numeric weights, the exact test for common cause, and the per-slot bookkeeping) is the round-trip gap R_T. It is recorded qualitatively, not set to zero. `11_audit.md` runs the full second-seat version.

### Updated verdict

The shape survives: keep residuals per slot, infer causal structure before combining, range each source against a non-updating anchor, fuse only redundant low-overlap readings with reliability weights discounted for correlation, keep a refusal operator and a provenance record, and fix the vocabulary and objective links before optimizing weights. What does not survive is any claim to a specific numeric rule, any fixed weight for users across all question types, and any treatment of parameter confidence as ground. Strains after re-census: **one live gap, the numeric weights**, named and not hidden.
