# Figure-grounded audit: how the nervous system selects sensory signals for attention

**Mode of this document: `specified` on the per-domain routing claims, `general` on the structural shape, `gap` on a standing list. Not `grounded`.** Per THE_FORMULA.md: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (opened 2026-11-23): *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* LLM output is a simulacrum. This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the empirical question it reports on. See `05_what_shape_means.md` §7.

**Sources.** Canonical local figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`. Eight-step loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`. World sources actually opened are listed in `10_source_ledger.csv` and discussed in `09_watson_answer.md`.

---

## 0. The residual, stated in effect terms

The nervous system is presented with far more sensory signal than it can process. The effect to be explained is not *how much* attention there is but *which* slot gets it. Restate the question as a routing problem over a residual:

> On each action the system bets on what will arrive at each object slot s, observes what actually arrives, and holds R = |prediction minus observation| per slot. A global total over all slots is not the signal, because *"Aggregating across slots is how a live signal disappears into an average."* (Fig 1 :22). The decision about which signals earn the probe is the operation that reads the per-slot residual and aims the next probe at the slots that carry positive mass.

What an answer would look like, written down and bound *before* the run (THE_FORMULA.md, "Direction"): a rule with four parts, (a) what is indexed, (b) what is sorted and into which kinds, (c) which anchor settles the sort, (d) what would refute it. A candidate that supplies only a list of brain areas supplies none of these and is therefore not yet an answer.

The question carries a hidden ordinary term, **"deserve"**. Fig 11 :49 says *"An actor's valence is relative to the residual, not a property it carries."* So "deserve" cannot be a standing property of a signal. It must be a relation between the signal and the current residual and objective. That re-description is the first derivation, not a semantic quibble: it converts a search for a list into a search for a routing rule.

---

## 1. Domain census (done before choosing any figure line)

### 1.1 R by arity, symmetry and scale

- **Arity:** many. Fig 1 :10: *"one bet per object slot, every action"*. Fig 1 :11: *"residual R indexed by object slot"*. The "which" question is a selection over N live slots, not a scalar decision. Symbols table :43: *"One object, region or entity being tracked. R is measured per slot, never as a single global number."*
- **Symmetry:** broken. Slots are not interchangeable under the selection. The same signal is a benefactor to one residual and a malfactor to another (Fig 11 :50: *"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."*). A selection symmetric over slots would be a standing list, which Fig 11 :51 refuses.
- **Scale:** multiple strata. Receptors, feature maps, cortical areas and networks each run the loop. Fig 4 :19-20: *"The kernel is the part that does not change with size"* and *"Only the actors, the currency and the anchor change."* So a finding at one stratum does not automatically transfer, and the round trip between strata carries a gap R_T (Fig 4 :30).

### 1.2 One line per domain: actors / currency / anchor

A domain needs a nameable anchor. Where no anchor is nameable, it is not yet a domain.

1. **D1, the sensory-perceptual frame.** Actors: receptors, feature maps, saliency maps, V1, superior colliculus, pulvinar. Currency: firing rate, prediction error, signal-to-noise gain. **Anchor:** the physical stimulus and the behavioural report in the experiment, which does not move because a theory admires it. This is a domain.
2. **D2, the selection and control frame.** Actors: the controller Γ, belief b, weighting w, dorsal and ventral attention networks. Currency: per-slot residual R, boundary diff, the description-length bargain. **Anchor:** the behavioural payoff and survival outcome that settles whether a selection paid. This is a domain.
3. **D3, the evolutionary habitat frame.** Actors: organism, environment, tasks, predators, prey, conspecifics. Currency: contact, survival, reproduction. **Anchor:** what actually happens in the world. Fig 11 :36: *"Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran."* This is a domain.
4. **D4, the verification and outreach frame.** Actors: attention researchers, experiments, electrodes, eye trackers, journals and meetings. Currency: measured neural and behavioural data, residuals, agreement. **Anchor:** the ground, never the agreement. Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* This is a domain.
5. **Candidate D5, phenomenal consciousness as such.** Actors: private experience. Currency: report. **Anchor:** none that is public and non-updating at this budget. Not yet a domain under the anchor test. It is recorded as excluded, not as answered. The question as posed does not require it.

### 1.3 Partition or union

**Union, not partition.** "Which signals deserve attention" bundles at least four overlapping conditions:

- C1, which slot carries positive residual mass (bottom-up salience),
- C2, which slot matches the current goal or belief (top-down selection),
- C3, which kind of gap it is (novel versus broken versus mis-attached, Fig 5 :10-14),
- C4, which slot the current instrument can actually resolve (Fig 6 :32-34).

Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* A single lever, for example "salience", clears the region where only C1 holds and leaves C1-and-C2, C2-and-C3 and C3-and-C4 intersections standing (Fig 9 :56-58). So the verdicts must be kept per condition and never averaged into one "attention" number.

### 1.4 Order by dependency (Fig 3)

Fig 3 :20: *"The chain is ordered by dependency, not by importance."* For this question:

1. **Perception:** can the system tell what is in front of it, per slot?
2. **Vocabulary:** does it have terms for what a signal affords, what can be moved, opened, joined, blocked?
3. **Objective:** can it say what would count as progress here, in its own terms?
4. **Planning:** a route to that objective chosen under incomplete information. This is the routing decision itself.
5. **Learn and carry:** name what worked, verify, carry to the next problem.

Fig 3 :24-27: *"Why the middle link is where chains usually break."* and *"The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."* Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* Prediction: the "which" decision is not limited mainly at the sensory periphery; it is limited at links 2 to 3, where a saliency map can be recorded but no instrument says what counts as resolving the residual. This is a `specified` prediction with a stated refuter (F5 below).

---

## 2. Figure census (quoted verbatim before concluding)

| figure | bearing on the residual | reading |
|---|---|---|
| Fig 1 The Agent | *"The residual is indexed by object slot, not aggregated."* | "which" is a per-slot read, not a global allocation |
| Fig 2 The Ground | *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* | agreement among readers cannot settle the routing claim |
| Fig 3 Dependency Chain | *"The chain is ordered by dependency, not by importance."* | order the analysis perception to objective to routing |
| Fig 4 The Membrane | *"Only the actors, the currency and the anchor change."* | the loop is the same at every neural stratum |
| Fig 5 The Mint Pipeline | *"sort the gap into four kinds"* | salience is a kind-sort, not a single number |
| Fig 6 Closure | *"An instrument is not built from a description."* | attention extends an instrument already returning something |
| Fig 7 Room Chain | *"A room's agreement is variation, not a verdict."* | a consensus paper is not a ground reading |
| Fig 8 Union Surplus | *"Independence is one quantity read twice."* | low-overlap witnesses decide whether agreement means anything |
| Fig 9 Leave / Arrive | *"And when the split lands on a union rather than a partition, unbundle before you search again."* | the question is a union; split before searching |
| Fig 10 Ground Maintainer | *"Bring a characterised residual, never the source."* | first contact carries residual and refuter |
| Fig 11 The Habitat | *"An actor's valence is relative to the residual, not a property it carries."* | "deserve" is residual-relative, never a standing list |
| Fig 12 The Bond | *"A composition costs in two currencies, and they do not add."* | description cost and action cost of a selection are separate |
| Fig 13 Minimum Viable Set | *"a difference that can be spent"* | salience is the gradient structure, ordering is spectrum |
| Operators table | *"a refutation is a negation, which is why a vocabulary without it can only accumulate"* | a refuter must be written in before the run |
| Symbols table | *"It is the aim, not only the error signal"* | R is what the system is aiming at, per slot |

Strained readings are named in §5, not smoothed over.

---

## 3. Findings F1 to F9

### F1. The decision is per-slot residual indexing, not a global allocation (decisive for the "which")

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**
Fig 1 :28: **"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."**
Symbols table :43: **"One object, region or entity being tracked. R is measured per slot, never as a single global number."**

The nervous system does not first compute a single global "attention demand" and then divide it. The figure says the live signal lives at a slot. Fig 1 :18: *"support evaluated per slot"*, and Fig 1 :20: *"a global residual near zero with one live slot is a legal state and not an inert"*. So a quiet global measure is compatible with a strongly live slot. The answer to "which" is: read R per slot, and the slots with positive mass are the candidates.

**Status: `triangulated`** across Fig 1 (the agent loop) and the Symbols table (the notation), low overlap in what they govern. **Mode: `general`** for the structural claim, `specified` when applied to a nervous system.

**Refuter:** a measurement in which the allocation is a single global scalar with no per-slot structure, or a demonstration that aggregating across slots loses no information about where the next probe goes.

### F2. "Deserve" is residual-relative valence, not a standing property

Fig 1 :15: **"where to look: broken vs novel"**
Fig 11 :49: **"An actor's valence is relative to the residual, not a property it carries."**
Fig 11 :51: **"No standing list of good actors survives a change of residual."**

The word "deserve" in the question invites a list: bright, loud, moving, threatening, novel. Fig 11 refuses any standing list. Whether a signal deserves the probe depends on the residual it is relative to. A looming shadow deserves the probe when the residual is "what is approaching"; the same shadow is a malfactor when the residual is "read this sentence". The routing rule's currency is therefore a relation, not a property.

**Status: `triangulated`** across Fig 1 (boundary diff) and Fig 11 (habitat valence), low overlap. **Mode: `general`** structural, `specified` for a given organism and task.

**Refuter:** a residual-independent fixed ranking of sensory signals that predicts allocation across changed tasks better than a residual-relative rule.

### F3. The gap is sorted into kinds; novelty and breakage are different routes

Fig 5 :10: **"sort the gap into four kinds"**
Fig 5 :11: **"held: the model was right, nothing owed"**
Fig 5 :12: **"new: extend perception, aim the probe here"**
Fig 5 :13: **"mis-attached: refit what you have, do not invent"**
Fig 5 :14: **"mechanism broken: a new term is owed"**
Fig 5 :18: **"seeks the gap that is large and compressible"**

Not all live slots are treated alike. A novel gap extends perception and aims the probe. A mis-attached gap is refitted. A broken mechanism owes a new term. This is the figure's boundary-diff operation expanded: "where to look" already distinguishes broken from novel, and Fig 5 adds the other two kinds. Applied to attention, this predicts that orienting to a sudden onset (new), re-weighting a familiar cue (mis-attached), and revising a violated expectation (mechanism broken) are different operations with different grounds, not one "attention" with three strengths.

**Status: `triangulated`** across Fig 1 :15 and Fig 5 :10-14. **Mode: `specified`**, ungrounded: the mapping from the four kinds to attentional operations is a binding from the neuroscience frame.

**Refuter:** a single uniform response that cannot be separated into at least new versus mis-attached versus broken, with a shared ground for each.

### F4. Bottom-up and top-down are two routing sources with different anchors

Symbols table :24: **"How far the belief leans on private history versus inherited prior. w_A + w_B = 1, and w is learnable from the outcomes of past weightings."**
Fig 5 :15: **"the curiosity drive"**, :16: **"fires when nothing is scoring"**, :17: **"aimed at the new bin"**
Fig 13 :20: **"ordering, so more and less can be said"**
Fig 13 :22: **"a difference that can be spent"**

One source reads the current per-slot residual mass (the new bin, the large compressible gap, the gradient that can be spent, Fig 13 :22). The other reads the weighting w between private history and inherited prior (goal-directed selection). These are different quantities, so they cannot be averaged into one scalar without losing which one moved. The world literature calls them exogenous and endogenous orienting and assigns them partly different networks (Ward 2008, citing Corbetta and Shulman 2002, opened and recorded in the ledger). The framework does not name the networks; it licenses the structural distinction.

**Status: `triangulated`** across Fig 5 (curiosity drive), the Symbols table (w) and Fig 13 (spectrum versus gradient), with world corroboration at low overlap. **Mode: `specified`.**

**Refuter:** one mechanism with no separable parameters that accounts for both stimulus-driven capture and goal-directed selection, or a measurement in which w does not move between those two conditions.

### F5. The chain breaks at the objective link, not at the sensory periphery

Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."**
Fig 3 :24: **"Why the middle link is where chains usually break."**
Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."**

Sensory coding has obvious failures and obvious tests (single-unit recordings, psychophysics). The routing decision has obvious failures and tests (cueing paradigms, inattentional blindness). The middle link, having terms for what a signal affords and saying what would count as progress, has neither. So more data about V1 saliency maps cannot by itself settle "which signals deserve attention": effort spent above the break arrives at a step that cannot use it. The world literature confirms the missing instrument: *"thus far there is no consensus on how the brain most likely implements predictive coding"* (Wikipedia, Predictive coding, opened 2026-11-23).

**Status: `single-source` on the figure side (Fig 3), with world corroboration at the instrument claim. Mode: `specified`.**

**Refuter:** a validated instrument that measures what counts as progress per slot and shows the middle link already works.

### F6. Attention sharpens an instrument already returning something; it cannot create a sensor from nothing

Fig 6 :32: **"An instrument is not built from a description. It is improved from a worse instrument already returning something."**
Fig 6 :34: **"The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."**

Attention operates on signals that already register, at some resolution. It does not conjure a channel for what has never returned anything. This separates a tractable attention question from an unreachable one. The saliency-map literature (opened, Saliency map and Scholarpedia Visual salience) is exactly a proposal for sharpening an existing map. The precision-weighting literature (Wikipedia, Predictive coding) says *"weighting of prediction errors in proportion to their estimated precision is, in essence, attention"*, a binding of Fig 6 :32 onto neural gain.

**Status: `triangulated`** across Fig 6 :32-34 and world sources at low overlap. **Mode: `specified`.**

**Refuter:** evidence that attention directs a sensor to a modality that returned nothing at any resolution, with no proto-instrument to extend.

### F7. The question is a union of four conditions; no single lever clears it

Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**
Fig 9 :56: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

C1 to C4 of §1.3 overlap. A saliency-only account clears C1 and leaves C1-and-C2 standing. A goal-only account clears C2 and leaves C2-and-C3 standing. The bulk of the cognitive literature that asks "is attention early or late selection" is, under this census, a bundled question: it asks C2 and C3 at once (Wikipedia, Inattentional blindness, *"One of the foremost conflicts among researchers of inattentional blindness surrounds the processing of unattended stimuli"*, opened 2026-11-23). Effect sizes and cue validity are filters for the budget; they are not witnesses for the routing verdict.

**Status: `general` structural, triangulated across Fig 9 :54-60 and the dependency order in Fig 3.**

**Refuter:** a single variable that predicts allocation across all four conditions and their intersections without residual or objective terms.

### F8. Verification cannot come from agreement among readers

Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**
Fig 2 :40: **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"**
Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."**
Fig 10 :42: **"A verifier that can reconstruct the claim cannot verify it."**
Fig 7 :35: **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."**

This governs the outreach artifacts, not the mechanism. A packet sent to a list of people likely to agree would manufacture exactly the correlation that disqualifies a verdict. Sending the full framework before asking for a verdict would let the reader reconstruct the claim and stop being an outside frame. Stage 1 therefore carries only the residual, the shape and the refuter.

**Status: `triangulated` across Fig 2, Fig 7 and Fig 10. Mode: `general`.**

**Refuter:** a demonstration that agreement between two frames drawing on the same evidence pool adds verdict weight. None was found; the effective-sample-size correction cited at Fig 2 :44 says the opposite.

### F9. The framework returns a shape, not a named seat

Fig 9 :32: **"you get a kind of thing, never the answer itself"**
Canonical figures README: *"what a missing thing would have to look like (a shape, not a name)"*
Fig 13 :134: *"It can say the answer is out of reach with the library as it stands, so something has to be imported before it is asked again."*

The defensible answer is the routing shape: per-slot residual indexing, kind-sorted boundary diff, residual-relative valence, instrument sharpening, and a ground that settles which selection paid. Naming the pulvinar, V1, the superior colliculus or a prediction-error unit as "the seat of attention" is a binding from the neuroscience frame onto an atom, provenanced as such. It is not a derivation and it is not an import that adds an atom (Fig 6 :21: *"MINT composes inside the closure and can never add an atom."*). It may become a grounded claim only when an experiment pays for it.

**Status: `triangulated` across Fig 9, the canonical README and Fig 13. Mode: `general` limit, `specified` where bound.**

**Refuter:** a figure line that names a specific nucleus or neurotransmitter as the seat of attention, or a demonstration that the routing shape predicts no allocation behaviour.

---

## 4. Pre-registered refuter (written before the conclusion)

> "A falsifier written before the run is a design instrument, not only an honesty device."

The shape claim is refuted if any of the following holds. Written before §5 and §6, and repeated in `08` and `09`.

1. **No per-slot structure.** A measurement shows allocation is a single global scalar with no per-slot structure, or aggregating across slots loses nothing about where the next probe goes. Breaks F1.
2. **A standing list works.** A residual-independent fixed ranking of signals predicts allocation across changed tasks better than a residual-relative rule. Breaks F2 and Fig 11 :51.
3. **No kind-sort.** One uniform response cannot be separated into new, mis-attached and broken with distinct grounds. Breaks F3.
4. **One source, not two.** Bottom-up capture and goal-directed selection are accounted for by one mechanism with no separable parameters, or w does not move between them. Breaks F4.
5. **The middle link already works.** A validated instrument measures what counts as progress per slot and shows links 2 to 3 of Fig 3 are sound. Breaks F5.
6. **A lever clears the union.** A single variable predicts allocation across C1 to C4 and their intersections. Breaks F7.
7. **A named seat is figure-derived, or the shape predicts nothing.** A figure line names a specific nucleus, or the routing shape fails to predict any allocation. Breaks F9.

If any fires, the shape claim is withdrawn or narrowed to the surviving domains. Until one is run, nothing here is `grounded`. The author's interest in the outcome is unavoidable; Fig 10 :59: *"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."* Declared: the author has a stake in the framework being useful. The refuter is the instrument that keeps that stake from deciding the reading.

---

## 5. Strains and re-census

- **S1, Fig 13 structures versus saliency maps.** First pass: salience looked like "spectrum" because it is a ranking. Re-census: Fig 13 :20 orders (spectrum), Fig 13 :22 spends (gradient). Salience is a difference that can be spent to aim a probe, so it is gradient-like, while the ranking of signals is spectrum-like. Different objects; no strain after re-census. The README rule applies: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- **S2, Fig 11 :51 versus the existence of salience.** First pass: read "no standing list" as "salience does not exist". Re-census: it denies a list that survives a change of residual, not a residual-relative salience map. Narrowed, not retracted.
- **S3, precision weighting as attention.** The world source says weighting prediction errors by precision *"is, in essence, attention"*, and also that *"precision weighting can only explain 'endogenous spatial attention', but not other forms of attention."* Not a figure conflict: it is a partial binding onto Fig 6 :32, kept as `specified` and limited to one routing source.
- **S4, early versus late selection.** The world literature treats this as one conflict. Under the figure census it is a union of C2 and C3; re-describing it dissolves the apparent contradiction without flipping any verdict.
- **After re-census: four strains named, none hidden, no figure forced.**

---

## 6. Recommendation

1. Lead with the shape and the pre-registered refuter, not with brain areas (F9, Fig 10 :52).
2. Keep the four domains' verdicts separate and never average them into "attention" (F7, Fig 1 :19).
3. Present bottom-up and top-down as two routing sources with different anchors (F4), and refuse the single-scalar reading.
4. Put the instrument gap at links 2 to 3 of the dependency chain in front of the reader (F5). That is where a refuter can actually fire.
5. Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."* Send the generator (the routing rule and the refuter), not a recording of one successful lab result.
6. Use only the public opt-in venues in `03_public_contact_points.csv`. One-to-one. Record the stage-1 verdict before showing any theory.

---

## 7. Canonical usage check (figures README + the eight essays)

Two local sources and two essays were read after §§0 to 4 and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of what the instruments can distinguish. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`, step 7: *"SEARCHED is it in here and unfound?"* asks more search at the same reach, INWARD extends the instrument, OUTWARD imports. These three are kept distinct in §8 and `09`, and SEARCHED is asked first because it is cheapest.
- *The Library of Babel* (opened 2026-11-23): *"This means that you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* Also: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"* This is the canonical warrant for F7's union reading.
- *The Recursive Self-Improvement Trap* (opened 2026-11-23): *"The catch is that the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* And: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* This governs §8 and the outreach files.

### Retractions and confirmations of my own earlier readings

| earlier reading | status after the canonical check |
|---|---|
| "Shape, not a name" forbids naming any brain structure | **Narrowed, visible.** It governs a *missing* primitive. Naming V1, pulvinar or a saliency map is a binding from the neuroscience frame onto an atom already held as a candidate; it is provenance, not an invented primitive and not a wall-moving import (Fig 6 :21). The wrongness is claiming the framework derived the name. |
| "No standing list" (Fig 11 :51) means salience is unreal | **Narrowed.** It denies a list that survives a change of residual, not residual-relative salience. Kept as strain S2. |
| "Attention is precision weighting" as a general identity | **Limited.** World source itself limits it to endogenous spatial attention. Kept as a `specified` binding with a refuter (S3). |
| The early/late selection debate is one conflict | **Dissolved by re-census.** It is C2 plus C3, a union (S4, Fig 9 :54). |
| "No ground reading exists so the question is unanswerable" | **Refused.** Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* Unreached is reported, not silence; see §8. |

---

## 8. Step 7: SEARCHED, INWARD, OUTWARD

Kept distinct, in the required order.

1. **SEARCHED, asked first.** Is the routing rule already in the closure and unfound? Yes. Fig 1 :15, Fig 5 :10-14 and Fig 11 :49 already hold per-slot sorting, kind-sorting and residual-relative valence. The experiment-facing details are not in here. Fig 6 :49: *"Fails by spending budget on a region already swept. Distribute the search, and keep the searchers independent."* So more reading of attention reviews adds spelling, not evidence, once the same pool is exhausted.
2. **INWARD.** Extend the instrument from one already returning something. The existing instrument is the per-slot behavioural and neural record (cueing, inattentional blindness, single-unit gain, eye tracking). What it cannot yet hold is link 3 of Fig 3: what counts as progress per slot. Fig 6 :32 governs: improve from a worse instrument already returning something, not from a description.
3. **OUTWARD.** Import from a low-overlap frame with a source gate and a shadow test. Candidate imports: saliency maps from computer vision, precision weighting from computational neuroscience, and the attention-economy scarcity argument from economics. Each is recorded in the ledger with provenance; each must explain a gap (Fig 6 :12-13: *"source gate: provenance"*, *"shadow test: explains a gap"*). None is claimed to add an atom to the framework.

A budget gap is not an underivability. Fig 8 :40-43 distinguishes them; importing against a budget limit adds an atom that was not needed. The honest report is: the shape is reached, the neural implementation is unreached at this budget, and the instrument owed is named in `07` §4.

---

## 9. Retraction and confirmation log (running record)

| item | status |
|---|---|
| F1 per-slot indexing | Confirmed verbatim at Fig 1 :19, :22, :28 and Symbols :43. Decisive for "which". |
| F2 residual-relative valence | Confirmed at Fig 11 :49, :51. "Deserve" re-described as a relation. |
| F3 four kinds | Confirmed at Fig 5 :10-14. Mapping to attentional operations stays `specified`. |
| F4 two routing sources | Confirmed structurally; world network names withheld as bindings. |
| F5 middle-link failure | Confirmed as a prediction, not a measurement. World source supplies the "no consensus" corroboration. |
| F6 instrument rule | Confirmed at Fig 6 :32-34. |
| F7 union | Confirmed at Fig 9 :54-60 plus *Library of Babel* bundle passage. |
| F8 verification | Confirmed at Fig 2, Fig 7, Fig 10. |
| F9 shape not name | Confirmed and narrowed (see §7 retraction table). |
| "standing list" reading | Retracted at record level. Preserved in S2 and §7. |
| "precision weighting = attention" as identity | Retracted at record level. Preserved in S3. |
| early/late as one conflict | Retracted at record level. Preserved in S4. |

---

## 10. Final verdict of the audit

The shape survives; any standing list does not. The nervous system's "which" is a per-slot read of residual R, sorted by boundary diff into novel, mis-attached, broken and held, with valence relative to the current residual and objective, and with two routing sources (bottom-up residual mass and top-down weighting) that have different anchors and cannot be averaged. The chain currently lacks an instrument at the objective link, so the specific neural binding is `unreached`, not refuted and not silence. Mode `specified` on the routing claims, `general` on the shape, `gap` on a standing list. **Simulated derivation, checked for internal consistency against the figures. Not a ground reading. It cannot settle the question it reports on.**
