# Figure-grounded audit: when to trust an AI system, and what calibrates the judgment

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* (quoted from the local formula file, not from the figure extract).

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the claim it reports on. See `05_what_shape_means.md` section 6. No human-subject data were collected and no instrument was built.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, plus the world sources in `10_source_ledger.csv`, all opened 2026-11-24.

---

## 0. The residual in effect terms

The person is the frame. The AI system is a second frame. The task is the ground candidate. A trust judgment is a bet: the person acts as if the system's output will pay, or checks it instead. In formula terms (Symbols table, local file):

- b: the person's belief about the system, formed from private history and inherited prior, mixed by w.
- a: the action, rely or check or override.
- o': the outcome that actually arrives.
- Γ(b,a): the person's prediction of what relying will yield.
- R = |Γ(b,a) - o'|, indexed per decision slot s.

The residual is *whether the person's confidence tracks what the system does in this slot*. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* Fig 1 :13: *"a global R near zero with one live slot residual is a legal state"*. So a person can be right about an AI system on average and still be badly calibrated on the one slot that matters. That is the residual this audit addresses.

Two options were written down before the derivation (Formula, "Direction", local file):

- **A:** trust is a property of the system that the person reads off. A benchmark number, a confidence score, or a fluent explanation is sufficient for calibration.
- **B:** trust is a relation among person, system and task ground, maintained through contact. Calibration fails when the anchor type is wrong, when checks reuse the system's evidence, when the channel decays, or when the habitat changes.

The sought-for shape was bound as an ordinary term before the run: **a per-slot judgment ranged against a legitimate ground by at least one independent reading, with an explicit objective and a maintained channel, plus a refusal when the anchor is illegitimate.** That term is what the figures can and cannot see.

---

## 1. Domain census (before choosing any figure line)

### R by arity, symmetry and scale

- **Arity:** three-place (person, system output, task ground), indexed by decision slot.
- **Symmetry:** not symmetric. Trust precedes verification or follows it (ordered bond →). Calibration compares confidence with observed correctness (comparison bond ⋛, a threshold relation between two quantities, Operators table, local file). Swapping the operands changes the claim.
- **Scale:** single decision loop (person), repeated-interaction learning (person plus system over time), and social/population frame (reviews, reputation, other users). The transform between scales is lossy (Fig 4).

### One line per domain: actors, currency, anchor

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Person's judgment loop | the person, belief b, weighting w, action rely/check/override | confidence, per-slot residual reduction | the task ground, when legitimately about it | admitted |
| D2 AI system frame | model Γ, outputs, confidence scores, explanations, citations | predictions and their self-reported confidence | the task ground, external to the system | admitted |
| D3 Task ground and habitat | the task, data, environment, affected stakeholders, instruments, outcome | correctness, harm, payment, patient outcome | a measurement, experiment, counter, market or patient outcome | admitted |
| D4 Social and reputational frame | other users, reviews, leaderboards, publicity, prestige | agreement and reputation | none of its own that does not update on opinion | **not a domain yet** |

D4 has no nameable anchor that is independent of the frames in it. By the census rule, no nameable anchor means it is not a domain yet. It becomes a legitimate *channel* inside D3 only when it points to a discriminating reading (for example, a structured external review with a method), and is otherwise excluded from verdict weight. An anchor listed as one of the parties has already become a frame (Fig 2 :47, outside the quote set used below but present in the extract).

### Partition or union

**Union, not partition.** Calibration is a compound of at least two overlapping conditions: C1, the person's channel to the ground is maintained; C2, the system's reliability in this habitat is independently measured. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds (Fig 9, local reading). This is why "show the user a confidence score" and "improve the model's benchmark" can each fail alone.

### Order by dependency (Fig 3)

1. **Perception:** can the person tell what the system output and what actually happened?
2. **Vocabulary:** does the person have terms for the system's affordances and failure modes, and for what a discriminating observation would be?
3. **Objective:** can the person say what counts as progress here, in their own terms? The objective is correct reliance, not agreement.
4. **Planning:** when to rely, when to check, which check to run under incomplete information.
5. **Learn and carry:** name what worked, verify it, carry it to the next slot.

Effort aimed above the break cannot rescue a link below it. Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* Fig 3 :20: *"The chain is ordered by dependency, not by importance."* The middle link, vocabulary plus objective, is the one that usually breaks and has the fewest instruments. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| Fig 1 The Agent | residual per slot; ground is the only metric; frame-internal quantities disqualified | calibration is per slot; confidence alone is not ground |
| Fig 2 The Ground | anchor legitimacy, triangulation vs mirror, correlation valence | the anchor type must be decided first; shared evidence cannot corroborate |
| Fig 3 Dependency Chain | order by dependency; link with no instrument | vocabulary and objective precede any trust interface |
| Fig 4 Membrane | actors/currency/anchor change with size; round trip gap | benchmark trust does not transfer without measuring the gap |
| Fig 5 Mint Pipeline | guards as product; acceptance is a bargain | a trust heuristic is not a term until it pays |
| Fig 6 Closure | import is the only operator that moves the wall; effects travel | a discriminating instrument must be imported, not described into existence |
| Fig 7 Room Chain | agreement compounds, evidence does not | a room of agreeing users cannot calibrate |
| Fig 8 Union Surplus | idempotent closure; residual first, frame second; provenance | two low-overlap checks can reach what one cannot |
| Fig 9 Leave/Arrive | describe before looking; filters vs witnesses | the sought shape is a filter until bound; no naming of a threshold |
| Fig 10 Ground Maintainer | ground does not decay, channel does; verifier non-access | overtrust and undertrust are channel states; verdicts need outside checks |
| Fig 11 The Habitat | capability is agent-and-habitat | trust is not a property of the model alone |
| Fig 12 The Bond | bond carries information ingredients do not; two currencies | a checklist of model properties is not a trust judgment |
| Fig 13 Minimum Viable Set | closed set, unbounded arrangements; unreachable is a verdict | no universal threshold is derivable from the figures |
| Operators table | ⋛ is a threshold relation between two quantities | calibration is a comparison, not a sum |
| Symbols table | R is the aim, per slot; ground is the anchor | the residual drives the loop, not the feeling of trust |

Strained readings are named as such in section 5, not smoothed over.

---

## 3. Findings

### F1 - Decide the anchor type before deciding trust (decisive)

Fig 2 :36: *"An anchor is legitimate when the question is constitutively about it."*
Fig 2 :37: *"Human judgment is the right anchor for is this a good answer for a person, because the question is about people."*
Fig 2 :38: *"It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."*
Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*

A question of the form "should I trust this AI output" is underdetermined until we ask what the question is constitutively about. If it is a person-facing judgement (is this answer good for me, does it respect my situation), human judgment is the anchor and the machine is an instrument. If it is a correctness question (does this code compile, is this citation real), a measurement or a check is the anchor and human judgment is itself only an instrument, one that *"can be wrong on axes they do not measure."*

The common miscalibration is an anchor-type error. Fluency, confidence, and a polished explanation are frame-internal outputs of D2, not anchors for D3. Jaidka and Cai report exactly this in the chatbot case: the cues users rely on come from the same system that generated the answer. Rehman's survey operationalises calibration as a self-report, so even the word *calibrated* can be measured inside the person's frame rather than against the ground; his own limitation statement says the results do not establish *"independently verified calibration, or objectively appropriate reliance."*

- **Mode:** `general` for the anchor-type rule, `specified` for its application to AI trust.
- **Status:** triangulated across Fig 2 :29, :36-38 and Fig 1 :23 (local reading: *"The ground enters as the only metric."*), which are different figures with low overlap.
- **Refuter:** show a case where human judgment legitimately settles a code-correctness question without any instrument, or where a system's own confidence score legitimately settles a person-facing question without any person. Either breaks the anchor-type rule.

### F2 - Calibration is per slot, never an average

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*
Fig 1 :13: *"a global R near zero with one live slot residual is a legal state"*
Fig 1 :27: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*

A well-calibrated trust judgment is one whose confidence matches the ground *per decision slot*: per task, per domain, per user, per case. An overall figure such as "the system is 95 percent accurate" is a frame-internal aggregate that hides the live slot. Guo, Pleiss, Sun and Weinberger measure a related but distinct quantity in machine learning, confidence calibration, and find that modern networks are *"poorly calibrated"* despite high accuracy. Their result is a world measurement from a low-overlap field, not a figure line; it corroborates the distinction between accuracy and calibration without deciding the human question.

- **Mode:** `specified`.
- **Status:** triangulated across Fig 1 :13, :19, :22 and the ML measurement in Guo et al. 2017 (low overlap with the human-factors pool).
- **Refuter:** demonstrate in a controlled domain that a single global calibration score preserves every per-slot live residual, so aggregation loses no signal. Until then, the average is a filter for the budget, not a witness for the verdict (Fig 9 :60, quoted in F6).

### F3 - Trust must be triangulation, not negotiation

Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence."*
Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*
Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*

People decide trust by fluency, reputation, or other people's agreement. In the figure's terms these are the mutual-update collapse or the common-cause collapse, not anchoring. A check that uses the system's own explanation or confidence display draws on the same evidence pool as the system: it is the system talking twice, so its agreement carries no information. Independent checks (a different instrument, a person with separate experience, a held-out case) are what make agreement mean something.

The world literature agrees from two genuinely different angles. Jaidka and Cai describe transparency features that are shown but seldom consulted, and call the problem *"the inertness, not the absence, of transparency"*. Pham, Illingworth-Vera and Thomas argue that what looks like blind acceptance may be *"an inadequately populated comparison set"*, so the defect is upstream of belief evaluation. Both are secondary corroboration; neither sets the figure verdict.

- **Mode:** `general` for the triangulation rule, `specified` for AI trust.
- **Status:** triangulated across Fig 2 :31, :35, :40 and two low-overlap world fields (communication/HCI and cognitive psychology).
- **Refuter:** show in a controlled test that two checks drawing on the same source produce independent corroboration, or that a system's self-reported confidence plus its own explanation are two frames rather than one.

### F4 - The channel decays, not the ground

Fig 10 :24: *"the ground does not decay, the channel does"*
Fig 10 :26: *"stale percepts, dropped transients, saturated metrics, pooled readings"*
Fig 7 :13: *"agreement compounds, evidence does not"*
Fig 7 :35: *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*

Overtrust after long flawless operation and undertrust after one salient failure are both channel states, not changes in the system's reliability. The ground stays; the readings go stale, saturate, or get pooled across a change of task. Lyell and Coiera's systematic review finds that *"high levels of system accuracy may inadvertently contribute to AB"* and that *"accuracy engenders trust, and it has been shown that users who have greater trust in automation are less likely to detect automation failures."* Their finding is a low-overlap witness from health informatics, not a figure line. A room of users who all report that the system is reliable adds vocabulary, not an anchor.

- **Mode:** `specified`.
- **Status:** triangulated across Fig 10 and Fig 7 (different failure objects: channel decay vs handoff motion) plus the health-informatics review.
- **Refuter:** exhibit a measured case where trust rises monotonically with independent ground readings across a change of task, with no habituation, ceiling, or pooled reading. That would break the channel-decay claim.

### F5 - Capability is agent-and-habitat, so benchmark trust is not deployment trust

Fig 11 :39: *"And capability is a property of agent-and-habitat, never of the agent alone."*
Fig 11 :40: *"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."*
Fig 4 :20: *"Only the actors, the currency and the anchor change."*

Whether to trust is not a property of the model alone. It is a property of the system in the deployment habitat: which users, which stakes, which corrections are available, which ground pays. A trust judgment calibrated on a benchmark is a claim about one habitat. Moving it to another requires the round trip and a measured gap, not an assumption that the number transferred (Fig 4, local reading: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning"*).

- **Mode:** `specified`.
- **Status:** triangulated across Fig 11 and Fig 4, with world corroboration from Jaidka and Cai's high-stakes versus low-stakes contrast (secondary, same broad HCI pool as F3).
- **Refuter:** show an intervention that improves the model in isolation, leaves deployment contact unchanged, and still improves real-world trust calibration. That breaks Fig 11 :40.

### F6 - The middle link is vocabulary and objective, not more or less trust

Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*
Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*
Fig 3 :20: *"The chain is ordered by dependency, not by importance."*
Fig 9 :27: *"describe it before you go looking, or"* Fig 9 :28: *"any frame you pick will seem to fit"*

Users are offered confidence scores, rationales, and citations without terms for what those readings discriminate. The missing link is not a quantity of trust; it is a vocabulary for what would count as a discriminating observation and an objective that says progress is correct reliance rather than agreement. Jaidka and Cai find that citations and panels are *"passive affordances that wait for the user to act"*, and Pham and colleagues show that a supportive explanation can make the AI-supported hypothesis focal before alternatives are generated. Transparency is a budget input (a filter), not a witness for the verdict.

- **Mode:** `specified`.
- **Status:** triangulated across Fig 3 and Fig 9, with two low-overlap world fields.
- **Refuter:** show users with no terms for a system's failure modes calibrating correctly across novel tasks without external feedback. That would mean the vocabulary link was never load-bearing.

### F7 - What the framework returns here: a shape, and one declared gap

Fig 9 :32: *"you get a kind of thing, never the answer itself"*
Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*
Fig 13 :134: *"Unreachable is a verdict here, not a silence"*
Fig 8 :45: *"Two frames together reach what neither reaches alone."*

The figures return the shape of a well-calibrated judgment: per-slot residual tracking against a legitimate ground; independent checks with stated overlap; a maintained channel with fresh readings; habitat-relative capability; an explicit objective; and a refusal when the anchor type is wrong. They do not return a universal trust threshold, a single calibration number, a specific interface design, or the name of the one instrument that would settle it.

**Declared gap.** No figure line governs a numeric threshold or a source-discriminating instrument that separates fluent-but-wrong from fluent-and-right in all cases. That is a `gap`, not a hidden answer. From *The Hard Problem is About Source*: *"If several paths create the same behavior, then behavior is a projection with lossy information."* and *"An instrument that can't distinguish these cases demonstrates its own inadequacy."* A better instrument is owed, not a name or a number.

- **Mode:** `general` for the shape, `gap` for the threshold and the instrument.
- **Status:** `gap` after a genuine re-census. Unreachable is a verdict, not a silence.
- **Refuter:** derive a universal numeric trust threshold from the figures alone, or exhibit a held instrument that discriminates every fluent-but-wrong case from every fluent-and-right one. Either would close the gap.

---

## 4. Pre-registered refuter (written before the conclusion)

The shape claim is refuted if any of the following holds. Written before the derivation, per the local Seat Map :287: *"And a falsifier written before the run is a design instrument, not only an honesty device."*

1. A single global calibration score is shown sufficient; per-slot residuals can be aggregated without losing a live signal (breaks Fig 1 :19, :22).
2. Human judgment is shown to be a legitimate anchor for a code-correctness question without an instrument, or a system's own confidence is shown to settle a person-facing question without a person (breaks Fig 2 :36-38).
3. Two checks sharing one evidence pool are shown to give independent corroboration in a controlled test (breaks Fig 2 :31, :40).
4. Calibration is shown to improve from an intervention that changes only the model in isolation and leaves deployment contact unchanged (breaks Fig 11 :40).
5. A source-discriminating instrument is shown unnecessary: fluent-but-wrong and fluent-and-right outputs are behaviourally identical yet equally trustworthy (breaks the source essay quoted in F7).
6. A universal numeric trust threshold is derived from the figures alone (breaks Fig 9 :32 and the declared gap).

If any fires, the shape is withdrawn or narrowed. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Decide the anchor type before discussing trust. Write down whether the question is about a person or about code (F1).
2. Move from global accuracy to per-slot residuals. Report the live slot, not the average (F2).
3. Count independence, not agreement. A check that reuses the system's output is one witness (F3).
4. Maintain the channel: refresh readings across task changes and declare pooled or saturated metrics (F4).
5. Test in the deployment habitat, and measure the round-trip gap from benchmark to use (F5).
6. Build the vocabulary and the objective before adding more displays (F6).
7. Say `gap` for the threshold and the discriminating instrument. Do not fill the slot with a number (F7).
8. Send the generator, the shape and the refuter, not a conclusion. Fig 4 :22: *"Only methods cross up. Only head starts come down."*

---

## 6. Canonical usage check and retraction / confirmation log

Two local sources govern how the figures may be used, read after the first five sections:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; and the limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments stop distinguishing.
- `docs/05-RESEARCH/60-WATSON_2026-11-22_FIGURES_AS_METALAWS.md` (local copy where present): the seat reads the ground; it does not ask the anchor to decide what the figures already settle.

| earlier reading | status after the canonical check |
|---|---|
| "human judgment is the anchor for trust in AI" | **Retracted as too broad.** Fig 2 :36-38 makes it conditional on the question being constitutively about people. For code correctness, human judgment is an instrument that can be wrong. |
| "transparency or explainability calibrates trust" | **Retracted as a filter handed a verdict.** Fig 9 :60 separates filters from witnesses; Jaidka and Cai report inertness, not absence; Pham and colleagues show explanations can narrow the comparison set. |
| "calibration is one number, confidence equals accuracy" | **Narrowed, not deleted.** Guo et al. measure confidence calibration in one field. Fig 1 :19 requires per-slot residuals. The number is a useful filter for a budget, not the verdict. |
| "a trust score would settle when to trust" | **Declared `gap`.** Fig 9 :32 returns a kind of thing; Fig 13 :134 says unreachable is a verdict. No threshold is named. |
| Apparent strain: Fig 2 :37 human judgment as anchor vs Fig 2 :29 anchor must not update | **Not strained after re-census.** :36 supplies the legitimacy condition. When the question is about people, human judgment does not update on the machine's opinion. When it estimates code correctness it is an instrument, and instruments can be wrong. Same figure, two object types. |
| Apparent strain: Fig 7 :35 room agreement is not a verdict vs Fig 8 :45 two frames reach more | **Not strained after re-census.** Fig 7 governs a room of high-overlap agreeing frames; Fig 8 governs two low-overlap frames ranged against a residual. Different objects, same independence quantity read twice. |
| Apparent strain: Fig 11 :40 agent-only improvement changes nothing vs world reports that better models improve trust | **Not strained.** Better model accuracy can change a reading inside one habitat; Fig 11 :40 governs capability in a habitat. If contact does not change, the world finding stays within the old habitat and is a filter, not a transfer. |

### Strain summary

After re-census: one live strain, named and not hidden. The comparison bond ⋛ is defined in the Operators table as *"a threshold relation between two quantities"*, and here it compares stated confidence with observed correctness, both quantities at the person's level. At the social/population scale the operands become aggregated rates, and whether an aggregate is a quantity at that level needs a measurement, not an argument. This is recorded as a strain, not corrected by assertion.

### Round-trip note

The condensation from figures to the phrase "range trust against the ground" is lossy. What survives: anchor type, per-slot residual, independence, channel decay, habitat relativity. What drops: the five pre-registered refuters, the explicit middle-link dependency order, and the declared `gap`. Treating the phrase as identical to the figures would set R_T to zero and would be dead reckoning. The honest form is a lossy condensation with a measured gap, recorded in `11_audit.md`.

### Updated verdict

The shape survives: a well-calibrated trust judgment is per-slot, ranged against a legitimate ground, independently checked, channel-maintained, habitat-relative, and founded on a vocabulary and objective that come before any display. The anchor-type error, aggregation, shared-evidence verification, channel decay, and benchmark transfer are the five named failure classes. A universal threshold is refused as a `gap`. Mode `specified`, ungrounded, candidate. No figure line was found by forcing; two apparent strains were dissolved by re-census and one operand-type strain remains live.
