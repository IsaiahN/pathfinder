# Figure-grounded audit: stable pattern versus coincidence in a changing environment

**Mode of this document: `specified` on the separator, `general` on the structural shape, `gap` on the universal numerical threshold. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (carried quote, see `05` section 7) calls LLM output *"simulacra"* and says *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No experiment, dataset, or measurement was taken by this agent.

**Sources.** Verbatim figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session, cited as `Fig N :line`. Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md`. Loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`. Every quoted string below is an exact substring of `03-FIGURES_TEXT.md` (case-insensitive, trailing punctuation ignored by the validator).

---

## 0. The residual, stated in effect terms

The learner's library Γ predicts an observation per object slot: `R = |Γ(b,a) − o'|` per slot s (`THE_FORMULA.md` step 1; Symbols table :36-40, *"it is the aim, not only the error signal, and it is always a slice"*). In a changing environment the same departure can mean two different things:

- a **stable pattern**: a regularity that will recur, that the ground will pay for, and that can be composed over in later predictions; or
- a **coincidence**: a fit to one occasion that will not recur, that fails the description-length bargain, and that has no standing to be composed over.

The residual to be closed is the learner's inability to decide which is which before committing a term. Stated as an effect, not a name: the learner must sort a per-slot departure into (i) nothing owed, (ii) a probe to aim, (iii) a re-fit of a held term, (iv) a new term owed, or (v) a refusal of a held term, and must do it while the generating process drifts, so that an anchor which updates on the learner's own reading is not an anchor.

**Bound ordinary term.** *"Write down what an answer would look like, bind it, and let it accrue a residual like anything else"* (`Fig 5 :65`). The sought-for shape is bound now as: a **separator with three parts, (a) a per-slot residual that trends down, (b) a settlement against a non-updating ground, and (c) a written refusal that can fire, held separate per regime**. This is an ordinary term for the rest of the audit, so it can be checked rather than silently steering the search (`Fig 5 :62-64`: *"A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term. It is not bound, it predicts nothing, and it accrues no residual"*).

---

## 1. Domain census before choosing any figure line

### 1.1 The residual R by arity, symmetry, scale

- **Arity:** one residual per slot. `Fig 1 :19`: *"The residual is indexed by object slot, not aggregated."* `Fig 1 :22`: *"Aggregating across slots is how a live signal disappears into an average."* For this question the slot is a candidate regularity, so a coincidence in one slot must not be averaged away against a stable pattern in another.
- **Symmetry:** the comparison that decides stability is ordered, not symmetric. The Operators table :49 defines comparison as *"a threshold relation between two quantities"* with the test *"is it about which is larger, rather than both being present?"* and `Fig 12 :89` asks *"is it about which is larger, rather than both being present? Yes."* A pooled correlation is symmetric; "stable" is an ordered threshold claim, so a correlation cannot choose the direction (`Fig 2 :39`: *"Correlation has valence"*). Coincidence, when it means a held claim is false, is a negation, not a subtraction: Operators :58, *"a refutation is a negation, which is why a vocabulary without it can only accumulate"*.
- **Scale:** first order inside one regime (the learner's loop settles a term); second order when the regime changes (a lossy crossing between descriptions, with a round-trip gap `R_T`). `Fig 4 :27`: *"The transform between scales loses information, and that is the point."* `Fig 4 :30`: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

### 1.2 One line per domain: actors, currency, anchor

**Domain 1, the learning frame (term management).** Actors: the library Γ, its atoms and bonds, the slots s, the selector, the candidate term φ, the refusal term. Currency: per-slot residual R and description length in bits; actions price settling. Anchor: the environment outcome o', which does not change because the frame thinks so. `Fig 2 :29`: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* `Fig 1 :23`: *"The ground enters as the only metric."* A frame alone has no nameable anchor, so Domain 1 is not a domain until the ground is named. Question type: partition boundary (which residuals are owed a term, which are absorbed).

**Domain 2, the environment and habitat (regime change).** Actors: the generating process, its conditions and transitions, transient fluctuations, the learner as an actor inside it. Currency: observations and sucrose-like payoff, i.e. contact with the ground. Anchor: the process that decides recurrence, which does not decay when the learner stops looking. `Fig 10 :24`: *"the ground does not decay, the channel does"*; `Fig 10 :26`: *"stale percepts, dropped transients, saturated metrics, pooled readings"*. Question type: union when a regime mixes a stable component and a drifting component; `Fig 9 :55`: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* `Fig 11 :43`: *"The habitat is enumerated, never composed."*

**Domain 3, the verification and outreach frame.** Actors: an outside reader or ground maintainer. Currency: agreement versus residual. Anchor: the ground, never agreement. `Fig 7 :35`: *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* In this simulated run all three domains draw on one evidence pool, so the independence here is zero. This domain is `general` structural only and is never used as a witness for the Domain 1 or 2 verdicts.

### 1.3 Partition or union

The question as posed is a **union of overlapping conditions**, not a partition of observations into two boxes. "Stable" needs a settled term (Domain 1) *and* persisting contact through change (Domain 2). One lever clears only one condition and leaves the intersection standing. `Fig 9 :54`: *"And when the split lands on a union rather than a partition, unbundle before you search again."* `Fig 9 :57`: *"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."* This is why a single p-value, a single window length, or a single significance level cannot answer the literal question: it would average two conditions with different anchors.

### 1.4 Dependency order (`Fig 3`)

`Fig 3 :20`: *"The chain is ordered by dependency, not by importance."* The learner's chain runs: perception (can the departure be registered at all, link 1) → vocabulary (does it have a term for what the regularity affords, link 2) → objective (what counts as progress, link 3) → planning (when to sample, link 4) → learn and carry (settle and cross scale, link 5). The middle link is the one that usually breaks: `Fig 3 :27`: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* `Fig 3 :19`: *"Optimising a link that already works cannot rescue one that does not."* So tuning a detector's window (link 4) cannot rescue a learner with no term for persistence (link 2) or no objective that shrinks residual (link 3).

Order of operations for this audit: describe the residual before choosing a frame (`Fig 9 :27`: *"describe it before you go looking, or any frame you pick will seem to fit"*); refuse before mint (`THE_FORMULA.md` step 2); settle a first-order term before composing over it (`Fig 5 :69`: *"A term is settled when the ground pays for it. A term is usable when something can compose over it."*).

---

## 2. Figure census (bearing and verdict, before findings)

| figure | bearing on this question | verdict after census |
|---|---|---|
| **1 The Agent** | residual per slot; frame-internal quantities disqualified | governs the unit of the separator |
| **2 The Ground** | anchor must not update; triangulation not negotiation; correlation valence | governs what may count as evidence of stability |
| **3 Dependency Chain** | ordered links; middle link has no instrument | governs the order of the derivation |
| **4 The Membrane** | lossy crossing; round trip gap | governs "changing environment" as a scale crossing |
| **5 Mint Pipeline** | bargain, one-occasion failure, persistent-residual test, settle-not-sufficient | **decisive** for stable versus coincidence within a regime |
| **6 Closure / Reachability** | import is the only wall-moving operator; instruments improved from worse ones | governs what the world literature may contribute |
| **7 Room Chain** | agreement compounds, evidence does not; next room must differ | governs verification and outreach, not the verdict |
| **8 Union Surplus** | low-overlap frames; residual first; underivable vs unreachable | governs import of drift-detection methods |
| **9 Leave / Arrive** | union splitting, describe before looking, shape not name, filters vs witnesses | governs the union reading and the gap |
| **10 Ground Maintainer** | ground does not decay; channel does; verifier non-access; interest in reading disqualifying | governs regime change and checking |
| **11 The Habitat** | capability is agent-and-habitat; valence relative to residual; no standing list | governs "changing environment" and refuses a universal pattern list |
| **12 The Bond** | comparison is ordered; two currencies do not add; settled molecule becomes atom | governs the type of "stable" and the cost of settling |
| **13 Minimum Viable Set** | set closed, arrangements not; unreachable is a verdict | governs the stop and the declared gap |
| **Operators table** | ⋛ comparison, ¬ negation, + versus ordered bonds | governs the shape of the separator |
| **Symbols table** | R is aim, per slot, always a slice | governs the restatement in section 0 |

Strained readings are named in section 4, not smoothed over.

---

## 3. Findings, F1 to F12

### F1 - A coincidence is a one-occasion fit that fails the bargain (decisive, `specified`, triangulated)

`Fig 5 :42` states *"The acceptance test is a bargain, not a threshold."* `Fig 5 :43-44`: *"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before. A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."* `Fig 5 :45`: *"This is minimum description length, Rissanen 1978"*.

A coincidence is exactly the excluded case: a term that explains one occasion perfectly. A stable pattern is a term whose statement plus leftover residual costs less than the confusion it removes, across more than one occasion. The discriminator is therefore not probability of the fit under a null; it is the description-length bargain evaluated over recurrence.

**Refuter:** show a term that fits exactly one occasion and is still cheaper, after its own statement and leftover, than the un-modelled confusion, and that the ground pays for it. Then F1 fails. Triangulated at low overlap: the MDL bargain (`Fig 5`) and the per-slot residual (`Fig 1`) are different quantities, one in bits and one in error signal.

### F2 - The shrink test is opposite-signed for the term to refuse

`Fig 5 :59`: *"a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at"* `Fig 5 :60`: *"The selector asks which residual is improving; this asks which one keeps being wrong and is not."*

This is the crux of stable versus coincidence. The learner does not ask "did this pattern appear?" but "does the residual under this term trend down across slots and occasions, or does it persist and stay flat?" A coincidence leaves a flat, non-shrinking residual; a stable assimilation makes the residual shrink. Note the object: the shrink test ranks which *held* term to refuse. It does not rank which new term to accept, so it must not be read as "stable = low residual". That misreading is a strain, resolved in section 4 (S1).

**Refuter:** exhibit a held term whose residual persists and does not trend down against a non-updating ground, yet which remains settled and composable. That breaks `Fig 5 :59-60` together with `Fig 5 :69-70`.

### F3 - Stability is settlement plus composability, not one condition

`Fig 5 :69-70`: *"A term is settled when the ground pays for it. A term is usable when something can compose over it. Those are two conditions and this figure names one."* `Fig 5 :72`: *"a library that grows is not a reach that grows."* `Fig 12 :104`: *"A settled molecule becomes an atom for whatever composes over it."*

A coincidence may be recorded in the library (the learner can remember it) without being settled (the ground never paid for it as a regularity) and without being composable (nothing can be built on it). Conversely, a stable pattern is a settled molecule that has become an atom at the next level. "Stable" therefore names a relation to the ground and to composition, not a property of the stored string.

**Refuter:** show a term that is settled and composed over but was never paid for by the ground, or show that settlement alone guarantees composability. The latter would contradict `Fig 5 :69-70` directly.

### F4 - The residual must stay per slot; a global average hides the coincidence

`Fig 1 :19`: *"The residual is indexed by object slot, not aggregated."* `Fig 1 :22`: *"Aggregating across slots is how a live signal disappears into an average."* `Fig 1 :28`: *"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."*

In a changing environment a stable regularity in one region and a transient in another can cancel in a global error rate. A detector that reports one global score has thrown away the only quantity that says which candidate to refuse. The separator is indexed per candidate regularity, not per batch.

**Refuter:** show an aggregating statistic that separates two candidate slots which the per-slot residual cannot separate. That breaks `Fig 1 :19` and `:28`.

### F5 - The anchor cannot update on the learner's own reading

`Fig 2 :29`: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* `Fig 2 :33`: *"The anchor must not update."* `Fig 2 :34` warns that if it does, *"everything drifts together, and the drift is coherent, which is why nobody notices."* `Fig 1 :27`: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*

A common failure in "stable versus coincidence" is to use the learner's own confidence, or the same data used to fit the pattern, as the test of stability. That is panel 1 of `Fig 2`: mutual update, coherent drift. The ground for a stable pattern is a held-out contact, a measurement, or a payoff that does not move when the belief moves.

**Refuter:** show a stability metric that moves when the learner's belief moves and still settles the question. By `Fig 2 :29` it is not an anchor, so the separator built on it fails.

### F6 - A changing environment is a union, and the room must change with the question

`Fig 10 :71`: *"The room composition is a function of the question."* `Fig 10 :72`: *"When the question changes, the room should change. A room that stays fixed while the question moves is the failure; the correlation is only its symptom."* `Fig 11 :51`: *"No standing list of good actors survives a change of residual."* `Fig 11 :49`: *"An actor's valence is relative to the residual, not a property it carries."*

A pattern that was stable under one residual can become a coincidence under another; there is no standing list of stable patterns. "Changing environment" is not a nuisance to be normalised away. It is a second condition that changes which contacts are load-bearing. This is a union, not one hard problem with a moving target (`Fig 9 :54-57`).

**Refuter:** exhibit a standing list of patterns that remains stable in its role across a change of residual and a change of question. That breaks `Fig 11 :51` and `Fig 10 :72`.

### F7 - The channel can decay while the ground does not

`Fig 10 :24`: *"the ground does not decay, the channel does"*; `Fig 10 :26`: *"stale percepts, dropped transients, saturated metrics, pooled readings"*; `Fig 10 :28`: *"you have lost touch"*.

The learner can lose the ability to detect a change without the environment changing. A plateau in measured residual may be a saturated metric, not a stable world. So "the residual stopped moving" is not sufficient evidence of stability; the channel must be kept reachable. This is a seat's office, not the loop's (`THE_FORMULA.md` step 8: *"Nothing here maintains the ground. The ground does not decay; the channel does, and that is a seat's office, not the loop's."*).

**Refuter:** show that a saturated or pooled reading can still discriminate a regime change. Then channel decay is not the failure this finding names.

### F8 - Detection is a comparison, which needs an instrument, not more data

Operators table :51: *"a goal is a comparison, which is why a vocabulary without it cannot state one"*; :49: *"a threshold relation between two quantities"*. `Fig 6 :32`: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."* `Fig 6 :34`: *"Where nothing is, there is no edge to extend from"*.

"Stable enough" is a threshold relation between persistence and chance rate, so the learner needs a comparison operator and an instrument that already returns something. More samples at the same resolution cannot manufacture the threshold; closure is idempotent: `Fig 8 :32`: *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."* This is where the world literature (drift detectors, MDL, predictive coding) can be imported, but only with a source gate and a shadow test (`Fig 8 :51`: *"Only the record of where each came from separates them"*).

**Refuter:** show a learner with no comparison operator and no instrument returning a persistence signal that still distinguishes a stable pattern from a coincidence. That breaks the Operators table and `Fig 6 :32`.

### F9 - Search inside one frame cannot establish absence

`Fig 9 :44`: *"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."* `Fig 8 :39`: *"So a search that finds nothing is never a proof of absence."* `Fig 13 :134`: *"Unreachable is a verdict here, not a silence"*.

A learner that has looked and seen no recurrence may be in a closed channel, not a coincidence-free world. The honest report is `searched`, `inward`, or `outward` (`THE_FORMULA.md` step 7), not a confident "no pattern". Underivable-in-principle and unreachable-at-this-budget are different facts with different instructions (`Fig 8 :40-41`).

**Refuter:** exhibit a frame that is a sealed room, so that exhaustive search inside it proves absence. That breaks `Fig 9 :44` and the argument of `Fig 8 :32-43`.

### F10 - The sought-for shape must be bound before the run

`Fig 5 :62`: *"A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term."* `Fig 5 :65`: *"Write down what an answer would look like, bind it, and let it accrue a residual like anything else."* `Fig 9 :27`: *"describe it before you go looking, or any frame you pick will seem to fit"*; `Fig 9 :31`: *"your words are borrowed too, so describe the effect rather than the cause"*.

A learner that wants to find stability will find a coincidence that looks stable, because the shape is a preference that accrues no residual. The pre-registered refuter in section 5 is this binding made explicit. This is also the reason the outreach material leads with the residual and its failure conditions.

**Refuter:** show a frame that certifies its own completeness without binding the sought shape as a term. That breaks the direction limit in `Fig 5 :62-68`.

### F11 - Two currencies: bits and actions do not add

`Fig 12 :125`: *"A composition costs in two currencies, and they do not add."* `Fig 12 :126`: *"Bits price the description. Actions price finding out whether it holds."* `Fig 12 :128`: *"A long chain of cheap parts is expensive to describe and may cost one action to refute."*

A stable pattern can be cheap to state and expensive to settle (wait for enough recurrences), or elaborate to state and cheap to refute (one held-out failure). A single score that sums description length and sample count is the named error, not the fix. This remains a live type question, recorded in section 4 (S4), not hidden.

**Refuter:** provide a single additive measure of bit-cost and action-cost that preserves both orderings in `Fig 12 :128-129`. Then the two-currency claim fails.

### F12 - No figure line returns the numerical threshold (declared `gap`)

`Fig 9 :32`: *"you get a kind of thing, never the answer itself"*; `Fig 9 :42`: *"narrowing gets you close, the ground decides"*; `Fig 13 :135`: *"It cannot say which primitive is missing, because naming it would mean already holding it."*

No figure line selects a confidence level, a window length, a p-value, or a hazard rate that separates stable from coincidence for a given learner and a given ground. The figures fix the shape of the separator and the order of its tests; the number is owed from a ground reading. `Fig 8 :39`: *"So a search that finds nothing is never a proof of absence."* This is reported as a `gap` of the shape-not-a-name kind, not as silence and not as an invitation to invent a number.

**Refuter:** derive a universal threshold from the figure set alone. Since the figures are domain-agnostic (`Fig 4 :19-20`: *"Only the actors, the currency and the anchor change"*), any such number would have to be independent of the anchor, which contradicts `Fig 2 :29`.

### Finding summary, verdicts kept separate

| domain | verdict | mode | status |
|---|---|---|---|
| D1 term management within one regime | the B1-B4 separator (bargain, shrink sign, settlement plus composability, per-slot) | `specified` | triangulated (Fig 1, 5, 12, Symbols) |
| D2 regime change and habitat | no standing list; valence relative to residual; channel decay distinct from ground decay | `specified` | triangulated (Fig 10, 11, 4) |
| D3 verification and outreach | agreement is not a verdict; independence is zero in this simulated run | `general` structural | single-source on the figure side; world corroboration only |
| literal universal threshold | none returned | `gap` | unreached / unreachable-at-this-budget, not silence |

Verdicts are not averaged across these rows.

---

## 4. Strain test and re-census

A figure that fits only with a strain governs another quantity, so re-census before changing the reading (`FIGURES_README_canonical.md`: a reading that makes figures contradict one another has misidentified its domain).

- **S1, shrink test versus "stable = low residual".** `Fig 5 :59-60` ranks which *held* term to refuse; `Fig 5 :43-44` is the acceptance test for a *new* term. Different objects, same shrinking quantity read with opposite sign. Re-census dissolves the strain; F2 is retained with the sign made explicit.
- **S2, coincidence forced into the refuted bin.** The amendment in `Fig 5 :50-56` adds a fifth kind (refuted) with no branch in the four-kind pipeline. A coincidence is usually an unaccepted one-occasion term, not the refusal of a held term. Forcing it into the refuted bin would strain the amendment; so it is not forced. Named, not hidden. A coincidence that *is* a held claim now shown false does use ¬ (Operators :58), and that is a separate case recorded in `06`.
- **S3, drift versus habitat substitution.** `Fig 10 :72` (question changes inside a room) and `Fig 11 :66` (*"Isolation is not removal of the habitat. It is substitution of one habitat for another."*) look like two accounts of change. Re-census: the first is a change of residual within a maintained habitat; the second is moving the residual into a different habitat. Different scale and different anchor. No contradiction; the derivation keeps them as two cases.
- **S4, two currencies (live).** Bits price description, actions price settling; they do not add (`Fig 12 :125-126`). Neither the figure nor the world sources supply a common unit. This is recorded as a live type question with the refuter in F11, not smoothed into a single score.
- **S5, "shape not a name" overstatement.** The canonical phrase governs a *missing* primitive. A persistence window or a drift detector is a binding from a world frame onto held atoms, not a new primitive of the six. The correction is kept visible in `05` section 6, as in the exemplar; it is not erased.

After re-census: one live strain (S4), four dissolved and preserved (S1, S2, S3, S5), none hidden.

---

## 5. Pre-registered refuter (written before the conclusion)

Per `Fig 10 :59`: *"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."* The author's stake is declared; the following failure conditions were written before the findings were assembled, so they are a design instrument and not an after-the-fact defence.

The shape claim (a per-slot, settlement-based, refutable separator) is refuted if any of the following holds:

1. A term is settled and composable while its residual persists and does not trend down against a non-updating ground (breaks `Fig 5 :59-60` and `:69-70`).
2. A term fitting exactly one occasion is admitted as a stable, composable regularity (breaks `Fig 5 :43-44`).
3. The learner's own output, or data used to fit the pattern, is used as the stability metric (breaks `Fig 1 :23`, `:27` and `Fig 2 :29`, `:33`).
4. A standing list of patterns keeps its role across a change of residual (breaks `Fig 11 :51` and `Fig 10 :72`).
5. An aggregating statistic separates two candidate slots that the per-slot residual cannot separate (breaks `Fig 1 :19`, `:22`, `:28`).
6. Exhaustive search inside one closure establishes that no stable pattern exists (breaks `Fig 9 :44` and `Fig 8 :32`, `:39`).
7. A single additive score correctly orders both bit-cost and action-cost cases in `Fig 12 :128-129` (breaks `Fig 12 :125-126`).

If any fires, the separator is withdrawn in that domain and the retraction is recorded here, not silently removed. Until a ground reading pays for it, no part of this is labelled `grounded`.

---

## 6. Recommendation

1. Lead with the separator and its refuter, not with a number. `Fig 10 :52`: *"Bring a characterised residual, never the source."*
2. Keep the residual per candidate regularity; never report a single global score (F4).
3. Bind the sought-for shape before running any detector (F10), and state the mode on every claim (`THE_FORMULA.md` mode rule).
4. Treat a changing environment as a union of a settlement condition and a contact condition, with separate anchors (section 1.3, F6).
5. Import drift-detection or MDL instruments only with provenance and a shadow test (`Fig 8 :51-52`), and debit the independence of the source (`Fig 6 :24`: *"Import from a live peer is debited against that frame's independence."*).
6. Report the numerical threshold as a `gap` and name the instrument that would close it (F12, `Fig 13 :134`).

---

## 7. Canonical usage check and retraction and confirmation log

Read after the first six sections: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/figures/THE_FORMULA.md`. The canonical rule says the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them"* and that *"the quotes are the authority, not this summary"*. It also states the limit: the framework gives *"what a missing thing would have to look like (a shape, not a name)"* and stops where instruments cannot distinguish, recording the lineage; *"Indiscernibility is not identity."*

| earlier reading | status after the canonical check |
|---|---|
| F2 called "stable = low residual" | **Retracted and preserved.** The shrink test is opposite-signed and ranks refusal, not acceptance. Re-census in S1. |
| "coincidence is always a refutation" | **Narrowed and preserved.** Usually a one-occasion term that fails the bargain; negation applies only when a held claim is shown false (Fig 5 amendment), see S2. |
| "changing environment is noise to be averaged" | **Refused.** It is a union condition with its own anchor (F6), and averaging is the named failure (F4). |
| "the world literature settles the threshold" | **Refused.** World sources are secondary and share pools; they are imports needing a source gate and shadow test (F8, F12). |
| F12 numerical threshold | **Canonically confirmed as a `gap`.** The framework returns a kind of thing, never the answer itself (Fig 9 :32), and unreachable is a verdict, not silence (Fig 13 :134). |
| S5 shape-not-a-name | **Narrowed and confirmed.** It governs missing primitives; naming a held binding from a world frame is provenance, not an invented primitive. |
| Second seat in `11_audit.md` | **Declared as internal consistency only.** It shares the primary's evidence pool, so by `Fig 2 :40` its agreement is not corroboration. |

No figure quote was taken from a summary. All `Fig N :line` strings in this file were checked character by character against `03-FIGURES_TEXT.md` after writing; the validator result is recorded in `11_audit.md` and the completion log.
