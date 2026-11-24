# Figure-grounded audit: when does prior knowledge improve inference, and when does it lock a learner in?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the claim it reports on. See `05_what_shape_means.md` section 7.

**Sources.** The canonical figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical usage rule at `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, and the Symbols table (Fig, Symbols Table) in the figure text. World sources are secondary and listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The Symbols table defines the belief and the weighting:

> `b`, the belief: **"What the system takes to be the case before it acts. Formed from its own history and from what it inherited, mixed by w. Not the observation."**
> `w`, the weighting: **"How far the belief leans on private history versus inherited prior. w_A + w_B = 1, and w is learnable from the outcomes of past weightings. Two frames with identical architecture diverge because their histories and their w diverge."**

So "prior knowledge" in this framework is not a substance. It is one term in the mixture that forms `b`, and `w` is itself learnable from outcomes. The prediction is `Γ(b,a)`, the observation is `o'`, and the residual is `R = |Γ(b,a) − o'|` (Symbols table), indexed per slot:

> Fig 1 :19 **"The residual is indexed by object slot, not aggregated."**
> Fig 1 :22 **"Aggregating across slots is how a live signal disappears into an average."**

The effect to be explained: with the prior included in `b`, the per-slot `R` sometimes falls faster than without it, and sometimes stays large and flat while the learner keeps acting on it. A global `R` near zero does not rule out the second case:

> Fig 1 :13 **"a global R near zero with one live slot residual is a legal state"**

The question is therefore a **union**, not a partition. The same learner, with the same prior, can be improved on one slot and locked on another (Fig 1 :19; Fig 9 :54-58: *"when the split lands on a union rather than a partition, unbundle before you search again"*). Verdicts are kept per domain and per slot, never averaged.

`THE_FORMULA.md` step 6 names the directional asymmetry that governs the whole question: *"generators cross up, playback never does"* and *"priors descend, replays never do."*

---

## 1. Domain census (before choosing any figure line)

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor. No nameable anchor means it is not a domain yet.

- **R (the residual).** Arity: one belief `b` mixing two sources (private history, inherited prior) through `w`; the gap is measured per slot `s`. Symmetry: `R` is a directed error `|Γ(b,a) − o'|`, not a symmetric relation between prior and ground; the prior is not a symmetric partner of the anchor, since the anchor must not update on it (Fig 2 :33). Scale: the prior crosses a membrane between a source frame and a target learner (Fig 4), so it can be a first-order term inside the learner's closure or a second-order object, a prior about priors, because `w` is learnable. Question type: union compound, unbundled (Fig 9 :54-58).
- **Domain 1, the learner's inference loop (framework-internal, per slot).** Actors: `Γ`, `b`, `w`, `a`, `o'`, `R_s`, candidate term `φ`. Currency: residual shrinkage and the two prices in Fig 12 (bits for the description, actions for finding out whether it holds). Anchor: the ground, the only metric (Fig 1 :23). Deciding question: is the prior held as a refusable ordinary term that can accrue a residual, or as an invisible preference that cannot?
- **Domain 2, the membrane / transmission domain (prior as inherited content).** Actors: one agent, a population, the membrane, head start versus recording, generator versus replay, priors descending. Currency: whether what crosses is a reapplicable method or a one-occasion recording. Anchor: the round-trip gap `R_T` (Fig 4 :30), which is measurable in principle as the difference between what was sent up and what came back down. Dependency: **upstream of Domain 1**, because what kind of thing the prior *is* determines how Domain 1 can treat it.
- **Domain 3, the frame-independence / verification domain (multi-learner).** Actors: frames or rooms, evidence pools, anchor. Currency: independence, how little two frames draw on the same evidence. Anchor: the ground, never agreement (Fig 2 :35, Fig 7 :35). Deciding question: does the fact that many learners share the prior make their agreement evidence, or one pool talking?

**Partition or union.** Union. "Improve inference" and "lock into a mistaken model" are not two exclusive kinds of learner; they are overlapping conditions that can hold on different slots of the same learner (Fig 1 :19). A single lever (more prior, or less prior) clears the region where only one condition holds and leaves the intersections standing (Fig 9 :55-58).

**Dependency order (Fig 3 :20).** Domain 2 (what kind of thing crosses the membrane) → Domain 1 (how the loop treats it, refuse before mint) → Domain 3 (whether multiple learners' agreement carries evidence). Domain 3 assumes Domain 1 and Domain 2. The chain most often breaks at the middle link: a learner can have a rich prior vocabulary and a working planner, yet have no instrument for "could this prior be false?" Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

---

## 2. Figure census (bearing before conclusion)

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual per slot, ground is the only metric | a global mean hides lock-in on one slot |
| 2 The Ground | anchor must not update; correlation has valence | prior as frame must range against a fixed ground; shared-prior agreement is one pool |
| 3 Dependency Chain | ordered by dependency; middle link has no instrument | "could the prior be false" is usually unmeasured |
| 4 The Membrane | methods cross up, head starts come down; replay repeats a past success | the help/lock split is generator versus recording |
| 5 Mint Pipeline | refuse before mint; invisible preference accrues no residual; settling is not sufficiency | lock-in is the prior held as preference, not as bound term |
| 6 Closure / Reachability | mint never adds an atom; only import moves the wall; refutation lowers reach without deletion | sharpening inside the prior's closure cannot correct it |
| 7 Room Chain | agreement compounds, evidence does not; next room must differ | a community sharing a prior is one long room |
| 8 Union Surplus | high overlap adds nothing; residual first, frame second | a low-overlap frame, not more of the same prior, supplies the missing atom |
| 9 Leave / Arrive | describe the effect before choosing a frame; shape not name; cuts ranked and reversible | the discriminator is a shape, not a `w*` number |
| 10 Ground Maintainer | channel decays, not ground; bring the residual, never the source; declare stake | stale priors are a channel failure, and the checker must not hold the interior |
| 11 The Habitat | capability is agent-and-habitat; introduce, never subtract | improving the prior in isolation may not change contact at all |
| 12 The Bond | isomer, functional group, free bond priced, two currencies | two learners with the same prior differ by bond and by refusability |
| 13 Minimum Viable Set | closed set, unbounded arrangements; unreachable is a verdict | the numeric threshold is unreachable from the figures at this budget |
| Operators table | `⋛` comparison is a threshold relation; `¬` negation refuses a claim | the tipping point is a comparison (shape), the correction is a negation (refusal) |
| Symbols table | `b` formed from history and prior mixed by `w`; `w` learnable | prior knowledge is a weighting, not a stock |

Strained readings are named as such in section 2b and in `11_audit.md`, not smoothed over.

---

## 2b. Findings

### F1 — The discriminator is refusability, not prior strength (Domain 1, decisive)

> Fig 5 :61 **"BUT THE TERM MOST WORTH REFUSING MAY NOT BE IN THE LIBRARY AT ALL."**
> Fig 5 :62 **"A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term. It is not bound, it predicts nothing, and it accrues no residual, so nothing here can see it."**
> Fig 5 :65 **"make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else."**

A prior that is held as a preference, an answer-shape the learner expects to see, predicts nothing and accrues no residual. Every check in the loop runs on the mechanism, not on the direction of the question, so the learner cannot refuse it. That is the lock-in mechanism named in the figure: not too much prior, but a prior placed outside the only test that could correct it. The remedy is a discipline rather than a step: make the prior an ordinary term, let it predict, let it accrue `R_s`, and then the same shrinking test that selects terms can refuse it.

> Fig 5 :58 **"a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at, which is the same shrinking test the selector already runs, read with the opposite sign."**

Mode: `specified`. Refuter: a learner that improves its per-slot `R` while holding the prior as an unbound preference, predicting nothing against it and allowing no refusal, would falsify this finding.

**Triangulated:** Fig 5 (mint/refusal) and the Formula "Direction" paragraph (a frame cannot check the direction of its own question) are two statements with low overlap that converge on the same condition.

### F2 — A prior that updates the anchor produces coherent drift nobody notices (Domain 1 / Domain 3)

> Fig 2 :29 **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**
> Fig 2 :30 **"If it moves when you push on it, it is not an anchor."**
> Fig 2 :33 **"The anchor must not update."**
> Fig 2 :34 **"If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."**

A prior is a frame, not an anchor. The moment the learner lets the prior change what counts as the ground (for example by treating a familiar solution as the standard against which the new observation is judged), the configuration collapses into mutual update. The drift is coherent, so it is invisible from inside. This is the "mistaken model" half of the question in the figures' own vocabulary.

An anchor is legitimate only where the question is constitutively about it (Fig 2 :36). A prior is an instrument, not an anchor. Fig 2 :37-38: *"It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."* Treating the prior as ground is a category error, not a strong prior.

Mode: `specified`. Refuter: a learner allowed to update its ground from the prior that nevertheless tracks an independent measurement and corrects itself would falsify this finding.

**Triangulated:** Fig 2 (anchor non-updating) and Fig 10 :24 (*"the ground does not decay, the channel does"*) are low-overlap statements about the same asymmetry.

### F3 — The prior cannot derive its way out of its own closure (Domain 1)

> Fig 6 :21 **"MINT composes inside the closure and can never add an atom."**
> Fig 6 :23 **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**
> Fig 8 :32 **"no search, however long, adds an atom"**
> Fig 8 :53 **"Residual first, frame second."**

Once a learner is inside a mistaken model, more reasoning with the same prior is more search at the same reach. Closure is idempotent, so no amount of inward sharpening adds the missing atom. The atom comes from contact with a frame whose closure differs, and the union is searchable only because the residual was described in effect terms first (Fig 8 :54). This is why the lock-in is not cured by "try harder with the same knowledge": the remedy has a direction (outward, import) and a precondition (a described residual), not an amount of effort.

Two opposed instruments must not be confused:

> Fig 6 :29 **"inward: is our representation adequate to hold it? The instrument extends access. Fails by refining forever on an axis that cannot carry it. Sharpen in our own terms."**
> Fig 6 :30 **"outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."**
> Fig 6 :31 **"Neither answer tells you much about the other. Run them as two tracks, and never read one against the other."**

Mode: `specified`. Refuter: a derivation, from the prior's own closure alone, of an atom the prior did not contain would falsify this finding.

**Triangulated:** Fig 6 (what moves the wall) and Fig 8 (where the atom comes from) are low-overlap and converge.

### F4 — Correction subtracts standing, not the prior (Domain 1)

> Fig 6 :42 **"What is recorded only grows. What is reachable is derived, and it can fall. A refutation adds a term that refuses; it removes nothing, and the reach falls because something was added rather than because anything was deleted."**
> Fig 6 :47 **"If a term and its refusal are both settled, the record holds a contradiction. Whether that is two scopes, an error in the ground, or a world that changed is not yet decidable here."**

A mistaken model is not corrected by deleting the prior. A refusing term is added; the prior stays in the record, but its standing to be composed over is removed, and the reach falls. This is a strict improvement over a store that deletes, because a refused term cannot cycle back without new growth. It also names the honest frontier: once both the prior and its refusal are settled, whether that is two scopes, a ground error, or a changed world is not decidable inside this figure.

Related, and easy to miss: settling is necessary but not sufficient. Fig 5 :69 *"AMENDMENT · settling is necessary for a term to be composed over, and it is not sufficient"*; Fig 12 :106 *"Nothing composes over what was never admitted as a part."* A learner can hold a well-confirmed prior it cannot use, and a library that grows is not a reach that grows.

Mode: `specified`. Refuter: a correction that genuinely deletes the prior from the record, with no refusing term, and that still prevents recurrence would falsify this finding.

**Single-source:** Fig 6 amendment, with the Operators table `¬` entry (*"a refutation is a negation, which is why a vocabulary without it can only accumulate"*) as a same-pool corroboration, not an independent witness.

### F5 — Method versus recording, head start versus replay (Domain 2)

> Fig 4 :21 **"The membrane is the boundary between the sizes, and the rule about what may cross it. Not a wall: a filter with a direction."**
> Fig 4 :22 **"Only methods cross up. Only head starts come down."**
> Fig 4 :11 **"a head start, never a recording"**
> Fig 4 :12 **"it makes the next agent's search cheaper"**
> Fig 4 :25 **"A recording carried upward looks like knowledge and is a description of one occasion. Replayed downward, it produces a system that repeats a past success and cannot produce a new one."**

This is the cleanest statement of the help/lock split in the whole figure set, and it is independent of the amount of prior. A prior helps when what crossed the membrane is a *generator*: a method that can be reapplied, a head start that makes the next search cheaper. It locks when what crossed is a *recording*: a description of one occasion, replayed downward, producing a system that repeats a past success and cannot produce a new one. The Luchins water-jar result in `09_watson_answer.md` is a direct world analogue: the previously successful method is replayed on a new problem that has a simpler solution.

The transform is lossy and the loss must be measured:

> Fig 4 :27 **"The transform between scales loses information, and that is the point."**
> Fig 4 :30 **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

Mode: `specified`. Refuter: a recording, replayed without modification on a genuinely novel slot, that produces a new success rather than a repetition would falsify this finding.

**Triangulated:** Fig 4 (membrane direction) and Formula step 6 (*"generators cross up, playback never does; priors descend, replays never do"*) are low-overlap and converge.

### F6 — The live signal is per slot, and the average destroys it (Domain 1)

> Fig 1 :19 **"The residual is indexed by object slot, not aggregated."**
> Fig 1 :22 **"Aggregating across slots is how a live signal disappears into an average."**
> Fig 1 :13 **"a global R near zero with one live slot residual is a legal state"**
> Fig 1 :23 **"The ground enters as the only metric."**

A learner can be locked into a mistaken model on one slot while its overall accuracy improves. Any test that reports only an average residual will declare the prior beneficial. This is not a statistical nicety in the framework: frame-internal quantities are disqualified as metrics (Fig 1 :24-27), and the ground is the only metric. The check has to be run per slot against the ground, with the prior ablated.

Mode: `specified`. Refuter: a demonstration that a single global residual predicts correction on every slot as well as the per-slot vector would falsify this finding.

**Triangulated:** Fig 1 (slot indexing) and Fig 2 :31-32 (independence between frames) are different quantities, but both forbid the single-number summary; low overlap.

### F7 — Shared prior makes a community one frame (Domain 3)

> Fig 7 :12 **"same closure, handed along; agreement compounds, evidence does not"**
> Fig 7 :35 **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."**
> Fig 7 :36 **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."**
> Fig 2 :40 **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"**
> Fig 8 :48 **"How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus. Two frames that overlap almost completely are one frame wearing two names."**

When a field shares a prior, the agreement of its members is the pool talking, not two frames confirming each other. The corrected verdict on a prior therefore cannot be taken from a vote of people who learned the same prior. The next "room" must differ from the last and be selected against the residual the last one surfaced. Independence has a price:

> Fig 2 :42 **"Buy independence in proportion to the cost of being wrong."**

Mode: `specified`. Refuter: two frames with deliberately high overlap that nevertheless produce a genuinely new correction traceable to their difference would falsify this finding.

**Triangulated:** Fig 7 (room chain) and Fig 2 :40 / Fig 8 :48 (correlation and overlap) are low-overlap statements converging on the same selection rule.

### F8 — The middle link has no instrument (Domain 1 / Domain 3)

> Fig 3 :19 **"Optimising a link that already works cannot rescue one that does not."**
> Fig 3 :20 **"The chain is ordered by dependency, not by importance."**
> Fig 3 :27 **"A link with no instrument is not a link that works. It is a link nobody has looked at."**

For prior knowledge, the link between "having terms for what a situation offers" and "being able to say what would count as progress" is the one that fails silently. A learner can have an elaborate prior vocabulary and still have no instrument for the question "what observation would show this prior is wrong?" Fig 3 :25-26: the middle link *"has neither, so it attracts the least attention and the fewest instruments."* Effort spent above the break (more data, more prior) arrives at a step that cannot use it. The world analogue is the Einstellung experiments where warning people to pay attention often fails; what works is a structural change in the task.

Mode: `specified`. Refuter: a case where strengthening perception or planning above the break reliably restores correction below it would falsify this finding.

**Single-source:** Fig 3, with the task-structure results in the world sources as corroboration only.

### F9 — The channel decays, not the ground (Domain 2)

> Fig 10 :24 **"the ground does not decay, the channel does"**
> Fig 10 :25 **"stale percepts, dropped transients, saturated metrics, pooled readings"**
> Fig 10 :52 **"Bring a characterised residual, never the source."**
> Fig 10 :59 **"an interest in the outcome is unavoidable, an interest in the reading is disqualifying"**

Old priors fail because the channel carrying them goes stale, saturated or pooled, not because the ground moved. The maintainer's office is to keep the anchor reachable. This also governs the verification packet: a checker must receive the residual and the refuter, never the full interior of the framework, or the checker joins the frame being checked (Fig 10 :42). Any stake in the verdict must be declared; an undeclared interest is modelled anyway and an unnamed model runs unchallenged.

Mode: `specified`. Refuter: a case where the ground demonstrably moved while the channel stayed fresh, with the change measured, would qualify this finding (it would not refute the channel-decay claim, but it would open the "world that changed" branch of Fig 6 :47).

**Triangulated:** Fig 10 (channel versus ground) and Fig 11 :40 (*"An improvement that does not change contact changes nothing, however much it improves"*) converge across different domains.

### F10 — The numeric tipping point is a genuine gap (all domains)

> Fig 9 :32 **"you get a kind of thing, never the answer itself"**
> Fig 13 :134 **"Unreachable is a verdict here, not a silence,"**
> Fig 13 :135 **"It cannot say which primitive is missing, because naming it would mean already holding it."**
> Fig 8 :39 **"So a search that finds nothing is never a proof of absence."**

The figures return the shape of the discriminator: a non-updating anchor, a refusable bound term, a method rather than a recording, per-slot measurement, and low-overlap checking. They do **not** return a number `w*` at which a prior flips from help to lock-in. That number depends on a ground reading: an ablation experiment in which the prior is included versus removed, the anchor held fixed, and the per-slot residual measured with and without it. Reporting `w*` would be a name where the framework gives a shape (Fig 9 :32). It is honest to say `gap` for that part. Fig 8 :40-43 distinguishes underivable-in-principle from unreachable-at-this-budget; here the missing quantity is unreachable from the figures at this budget, not proved absent.

Mode: `specified` for the shape, `gap` for the number. Refuter: derive `w*` from the figure set alone, with the derivation checked against the verbatim text, and this finding is refuted and the mode moves.

**Single-source / gap:** Fig 9 and Fig 13 agree, but they share the framework's evidence pool.

---

## 3. Pre-registered refuter (written before the conclusion)

Required before any outreach, per the seat rule *"a falsifier written before the run is a design instrument, not only an honesty device."*

The shape claim is: prior knowledge improves inference when it crosses as a reapplicable method, is bound as a refusable term, ranges against an anchor that does not update on it, is measured per slot, and is checked by frames with low overlap; it locks a learner into a mistaken model when it is a replayed recording, held as an invisible preference, allowed to move the anchor, averaged away, or checked only by frames sharing the same pool.

It is refuted if any of the following holds:

1. A learner improves its per-slot residual while holding the prior as an unbound preference that predicts nothing and cannot be refused (breaks F1).
2. A learner whose prior is allowed to change what counts as the ground nevertheless tracks an independent measurement and self-corrects (breaks F2).
3. An atom missing from a learner's closure is derived from inside that closure alone (breaks F3).
4. A recording, replayed unchanged on a novel slot, reliably produces a new success rather than a repetition (breaks F5).
5. Two frames with deliberately high overlap produce a new correction traceable to their difference, and their agreement is shown to carry evidence (breaks F7).
6. A single global residual predicts per-slot correction as well as the per-slot vector (breaks F6).
7. `w*` is derived from the figure set alone, with no ground reading (breaks F10 and moves the mode).

If any fires, the shape is withdrawn or narrowed. Until one is run, no part of this may be labelled `grounded`.

---

## 4. Recommendation

1. Lead with the discriminator, not with a magnitude (F1, F5). "How much prior" is the wrong question; "what relation does the prior hold to the ground and to refusability" is the right one.
2. Insist on a per-slot ablation against a fixed ground (F6, F2). An average improvement is not a result in this framework.
3. Treat a correction as adding a refusal, not deleting a belief, and record both (F4). This makes recurrence computable rather than invisible.
4. Buy a low-overlap checker in proportion to the cost of being wrong (F7, Fig 2 :42), and select the next checker against the residual the last one surfaced (Fig 7 :36).
5. Name the gap (F10). Say `gap` for the numeric threshold; do not manufacture a `w*`.
6. Send the generator, not the conclusion. Fig 4 :22: *"Only methods cross up. Only head starts come down."* The first contact carries the residual and its refuter (`02_outreach_email.md`, `08_expert_verification_packet.md`).

---

## 5. Canonical usage check (figures README + formula)

Two sources were read after the first four sections and they govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; and the canonical limit, the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of what instruments can distinguish and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule; step 2 refuse before mint; step 6 *"generators cross up, playback never does; priors descend, replays never do"*; step 7 SEARCHED / INWARD / OUTWARD kept distinct; "Direction" discipline of binding the sought-for shape as an ordinary term.

### Retractions and confirmations (kept visible, not silently erased)

| earlier reading in this run | status after canonical check |
|---|---|
| Framed the question as a partition: "helpful prior" versus "harmful prior" | **Retracted.** It is a union compound, unbundled per slot (Fig 1 :19; Fig 9 :54-58). A single lever leaves the intersections standing. |
| Was going to report a numeric tipping point `w*` as the answer | **Retracted.** The framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32). `w*` is a `gap` until an ablation ground measures it. |
| Read Fig 2 :33 "the anchor must not update" as forbidding priors altogether | **Retracted by re-census.** The anchor is the ground; the prior is a frame. The line constrains the relation between them, not the existence of priors. A reading that makes figures contradict has misidentified the domain (figures README). |
| Read Fig 5 :69 "settling is necessary, not sufficient" as saying confirmation is worthless | **Retracted.** It says a settled term may still be uncomposable (Fig 12 :106), not that settlement is worthless. Held as a structural caveat. |
| Treated the transfer-learning "negative transfer" source as conflicting with the figures | **Retracted as a conflict.** Re-census: it corroborates the conditional claim (prior helps when domains are related, hurts when they are not). Agreement from a low-overlap field is corroboration, not a verdict. |
| Fig 2 :40 and Fig 8 :48 read as two independent witnesses | **Downgraded.** They are one evidence pool (the same framework). They triangulate in the sense of two low-overlap figure lines, not two independent world witnesses. |
| F1 (refusability), F5 (method versus recording) | **Canonically confirmed.** Formula "Direction" and step 6 respectively are the same claims in compact form. |

### Round trip note

The condensation from the verbatim figure set to the phrase "prior helps iff refusable and grounded" is lossy. What survives: non-updating anchor, refusability, method versus recording, per-slot measurement, independence. What is dropped, and must be re-measured rather than assumed: the operand type of a refusal at a given level, the order of refuse before mint, and the two-currency price (bits versus actions, Fig 12 :126-127). The round-trip gap `R_T` is enumerated qualitatively in `11_audit.md`; it is not zero.

### Updated verdict

The shape survives. Prior knowledge improves inference when it is a method that crosses the membrane as a head start, is bound as a refusable term with a live per-slot residual, ranges against an anchor that does not update on it, and is checked by frames whose closures differ. It locks a learner into a mistaken model when it is a replayed recording, an invisible preference that accrues no residual, a frame that has captured the anchor, a signal averaged away, or a claim checked only by a pool that already shares it. Correction adds a refusal rather than deleting the prior. Strains after re-census: **one named, none hidden**, the operand type of a refusing term when the prior is itself a settled molecule at a higher level (Fig 12 :104 permits the demotion to atom; whether a refusal can attach there needs an instrument). The numeric `w*` is a `gap`, not a silence. No world source was allowed to flip a verdict; all four were read as corroboration only.
