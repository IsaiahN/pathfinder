# Figure-grounded audit: will generative AI reduce the value of expertise?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* in the sense that *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Figure quotes: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, cited as `Fig N :line`). Loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`. Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`. Essays: the four Substack essays opened 2026-11-22 and listed in `05_what_shape_means.md`. World sources: listed in `10_source_ledger.csv`, all opened 2026-11-22.

---

## 0. Proposal header (seat reasoning, five lines)

```
DECIDES:  The question's "or" is a false partition. The figures decide that the effect is a
          union compound: a cheap composer inside the same closure lowers the price of search
          (the productivity half) while the load-bearing term shifts toward settlement against
          a ground (the value-of-expertise half), and the sign of the effect on any worker is
          relative to the residual, not a property of the tool or of the worker. Fig 6 :49-50,
          Fig 11 :39-40, :49-51, Fig 9 :55-57. A = B? No: they answer different questions,
          what moves the wall versus what becomes load-bearing inside it.
HOURS:    Derivation and census 1.5. Figure verification and re-census 1. WATSON world search
          and ledger 2. Outreach artifacts 1. Second-seat audit 0.75. About 6.25 agent-hours.
PRIOR CASE: BUS-0001 (sustained firm performance) supplied the business-question shape: union
          not partition, per-slot residual, valence relative to residual, named gap for the
          specific routines. QMGR-0037 supplied the retraction discipline and the WATSON form.
ANALOGUE: Library of Babel searcher narrowing by proximity to a shape; habitat actor
          introduction (Fig 11 :20-22) with introduction available and exclusion not; the
          membrane's head start (Fig 4 :11-12) sent down to a novice.
LIMIT:    Which occupations gain and which lose is a gap after re-census. No figure names an
          occupation, a wage, or an elasticity. A task-level ground reading is owed; this
          derivation cannot settle that, and says so in 07 and 09.
```

---

## 1. The residual, stated in effect terms

The question asks about a change when a new actor enters a habitat. Written as an effect: for each task slot `s`, an expert frame holds a belief `b` and a library `Γ`, acts `a`, and compares a prediction `Γ(b,a)` with an observation `o′`. A generative model is a second frame that can produce artifacts cheaply from a closure built on the same corpus. The residual of interest is the change in `R_s = |Γ(b,a) − o′|` and in which term of the loop is load-bearing after the composer arrives.

- **Arity:** three-place (composer, worker, ground), indexed by task slot. The world literature calls the same shape "uneven impact", the jagged frontier (Dell'Acqua et al., HBS WP 24-013, opened 2026-11-22).
- **Symmetry:** asymmetric. The composer produces artifacts, the worker settles them; the bond is `→` sequence or `⇒` production, not `+` (Fig 12 :70, :76; Operators table :30, :38). "Superior" or "more influential" is a `⋛` comparison, a threshold relative to other workers, not a property carried (Fig 12 :86).
- **Scale:** one worker's loop, the team or labor-market population, and the lossy membrane between them (Fig 4). The same rule holds at each scale; only actors, currency and anchor change (Fig 4 :19-20).
- **What an answer would look like (bound as an ordinary term, formula step "Direction"):** a list of task slots, each with (i) whether the composer is inside or outside the closure that settles that slot, (ii) which term becomes load-bearing, (iii) the ground instrument that would confirm the sign, and (iv) a falsifier. Any answer that gives only a global "AI helps" or "AI hurts" has aggregated away the signal (Fig 1 :19, :22).

---

## 2. Domain census before choosing any figure line

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet.

| id | domain | actors | currency | anchor | status |
|---|---|---|---|---|---|
| D1 | The generator frame | model, corpus, prompt, decoding budget | generated artifacts, description length, search cost | the training corpus and its benchmark; fixed at inference, does not update on this user's ground | admitted |
| D2 | The expert frame | specialist, tacit library `Γ`, instruments, corrections | settlement, reach, `left(R,φ)` | the real ground: code that runs, a patient outcome, a paying client (Fig 2 :29) | admitted |
| D3 | The knowledge-work habitat | firms, clients, entrants, the new generator, trainees | tasks, wages, influence, survival | willingness to pay, a market (Fig 2 :29 names "a market") | admitted |
| D4 | The channel and its instruments | metrics, benchmarks, percepts, verification habits | contact with the ground | the ground that does not decay (Fig 10 :24) | admitted |
| X1 | "The value of expertise" as a free-floating property | none nameable | prestige | none: if it moves when you push on a frame's opinion, it is not an anchor | not a domain yet; absorbed into D3 payment and D2 settlement |
| X2 | "Productivity" as artifact count | the output counter | tokens, documents, tickets | none: a frame-internal quantity it also produces (Fig 1 :24-27) | absorbed into D4 as a filter, never a witness |

**Partition or union?** Union. D1 and D2 overlap in the task slot: the same artifact can be a head start for one worker and a replacement recording for another. Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."* The two halves of the question are two conditions in one compound; they have one loop each and must not be averaged.

**Dependency order (Fig 3).** Perception of what the composer produced, then vocabulary to discriminate correct from plausible, then an objective that counts as progress, then planning, then learn and carry. The chain is ordered by dependency, not importance: *"Optimising a link that already works cannot rescue one that does not."* (Fig 3 :19). The break in this case is predicted at the vocabulary-to-objective link: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* (Fig 3 :27).

**Strain test applied before concluding.** An early reading tried to use Fig 12's isomer rule to call human-plus-AI and AI-alone "isomers". Re-census: Fig 12 governs compositions inside one library with typed bonds; a labor-substitution claim compares two different habitats. The line strains, so it was retracted, not smoothed (see §7).

---

## 3. Figure census (bearing and verdict, read before concluding)

| figure | bearing on this residual | verdict |
|---|---|---|
| 1 The Agent | residual per slot; frame-internal quantities disqualified | global productivity averages cannot answer |
| 2 The Ground | anchor must not update; independence | market or outcome settles, agreement does not |
| 3 Dependency Chain | middle link (vocabulary to objective) has no instrument | predicted break at discrimination, not at generation |
| 4 The Membrane | head start vs recording; lossy round trip | AI passes a head start down, not a recording's authority |
| 5 Mint Pipeline | three guards; own output is not success | more artifacts can be "nothing new here" |
| 6 Closure / Reachability | cheap search at same wall; import is the only wall mover | productivity without new atoms; no wall move claimed |
| 7 Room Chain | agreement compounds, evidence does not | expert consensus is not corroboration |
| 8 Union Surplus | residual first, frame second; convergent vs imported | do not name a field before describing the residual |
| 9 Leave / Arrive | union vs partition; describe before looking; filters vs witnesses | the "or" is a bundle; sign is a `gap` |
| 10 Ground Maintainer | ground does not decay, channel does; verifier non-access | settlement becomes load-bearing; verification can decay |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual; introduce not subtract | the central figure for this question |
| 12 The Bond | sequence/production vs symmetric conjunction; isomer strain retracted | the two options are not symmetric alternatives |
| 13 Minimum Viable Set | closed set, unbounded arrangements; unreachable is a verdict | no seventh term is needed, and the specific occupation is unnamed |
| Operators table | `→` and `⇒` ordered; `⋛` comparison | "helps" is a threshold claim, not a conjunction |
| Symbols table | `R` is the aim; ground is the anchor | no global `R` may be averaged |

---

## 4. Findings, each with verbatim figure lines and a refuter

### F1: The disjunction is a union compound, not a partition (decisive for the form of the answer)

Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*

Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*

The question offers A (reduce value) or B (increase productivity and influence). Under Fig 9 these are not mutually exclusive answers to one question. They are two conditions that overlap in the same task slot: a worker can be markedly more productive at artifact production while the artifact-production component of their expertise loses standing. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*

The world literature agrees in effect, not in authority: the HBS jagged-frontier abstract reports gains inside the frontier and a 19% drop in correct solutions outside it (Dell'Acqua et al., opened 2026-11-22). That is a union with opposite signs, not one effect.

**Refuter:** an experiment in which one lever clears both conditions and leaves no categorically different residue, with the residue measured, not assumed. Until then the "or" is refused as written. Mode `specified`.

### F2: Cheap composition at the same reach is the productivity half

Fig 6 :49: *"more search at the same reach: is it in here and unfound? The closure does not change. Same atoms, same wall, more of the space actually visited."*

Fig 6 :50: *"Fails by spending budget on a region already swept. Distribute the search, and keep the searchers independent."*

Fig 4 :12: *"it makes the next agent’s search cheaper"*

Fig 4 :11: *"a head start, never a recording"*

A generative model trained on the corpus is a composer inside `closure(Γ)`. Fig 6 :21: *"MINT composes inside the closure and can never add an atom."* Fig 6 :25: *"An import adds no atom to the world."* What it lowers is the price of visiting more of the existing space. That is exactly Fig 4's head start: a method sent down that makes the next search cheaper, not a replayed success that makes the next worker unnecessary.

This is a shape prediction, not a wage forecast. It predicts that the measurable gain is largest where the task was search-limited and the ground was already reachable, and near zero where the wall itself was the limit.

**Refuter:** a settled case where a generative model added a new atom to a worker's closure, meaning a ground-verified prediction neither the worker nor the corpus could compose, with provenance and a shadow test (Fig 6 :12-13). Absent that, the claim that AI makes experts more productive means cheaper search, not a bigger wall.

### F3: The valence of the composer is relative to the residual

Fig 11 :49: *"An actor’s valence is relative to the residual, not a property it carries."*

Fig 11 :50: *"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."*

Fig 11 :51: *"No standing list of good actors survives a change of residual."*

So there is no figure-licensed fact of the matter that generative AI is inherently deskilling or inherently augmenting. Change the residual, and the same tool changes sign. The HBS frontier result is the world-level shadow of this: inside the frontier it is a benefactor, outside it a malfactor (Dell'Acqua et al., 2023). The medical deskilling review reaches the same structural point from a different field: the effect is context dependent and can also stimulate a transformation of competencies (Natali et al., Artificial Intelligence Review, 2025).

**Refuter:** an invariant sign of the composer's effect across task slots whose residuals demonstrably differ, measured on ground outcomes rather than self-report. That would refute the valence claim. Mode `specified`; triangulated across Fig 11 and two low-overlap fields.

### F4: Capability belongs to the agent and habitat, not the agent alone

Fig 11 :39: *"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."*

Fig 11 :40: *"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."*

The question asks about the value of a worker. The figure refuses to locate value in the worker alone. Replacing the worker with a faster generator changes the agent; it changes capability only if contact with the paying ground changes. Conversely, an expert who keeps contact (verification, correction, client outcome) retains a load-bearing term even while their artifact output is undercut.

The figure states its own refuter at Fig 11 :72: *"an agent-only improvement that moved the ground would refute the capability claim."* This is recorded here rather than hidden.

### F5: What loses value is the recording, not the settlement

Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."*

Fig 5 :48: *"Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."*

Fig 1 :25: *"coverage, and compression achieved"*

Fig 1 :26: *"predicates minted, and credibility accrued"*

Fig 1 :27: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*

When a composer can produce plausible artifacts at near-zero marginal cost, the price of the recording falls. Output counts (documents, tickets, tokens, lines of code) are frame-internal quantities the generating frame also produces, so they are disqualified as a verdict by Fig 1 :27. What does not become cheap is the ability to range the artifact against a ground and refuse it. Fig 10 :42: *"A verifier that can reconstruct the claim cannot verify it."* A model that can regenerate an answer is not thereby a check on that answer.

The world evidence is consistent with the direction. Lee et al. (CHI 2025, Microsoft Research, opened 2026-11-22): *"GenAI shifts the nature of critical thinking toward information verification, response integration, and task stewardship."* Siu and Fok (arXiv:2503.24334, opened 2026-11-22) report that experts *"prefer to retain control over complex synthesis and interpretation activities that require nuanced domain understanding."*

**Refuter:** a ground-outcome study in which artifact volume, after controlling for verification quality, predicts client outcomes better than verification does. That would put value back in the recording and break F5.

### F6: The likely break is the missing discriminator, not missing effort

Fig 3 :25: *"Perception has obvious failures and obvious tests. Planning has obvious failures and obvious tests. The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."*

Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*

The scarce thing after cheap generation is not more generation and not more hours. It is a term for what the artifact affords and an objective that says what would count as progress, checked against a ground. This is why the medical deskilling review names clinical judgment and the ability to challenge AI outputs as the vulnerable competencies (Natali et al., 2025). It is also why the HBS frontier paper finds the loss outside the frontier: the worker lacks a discriminator there.

**Refuter:** an instrument that discriminates correct from merely plausible output at task level, in routine use, with residual trending to zero and no change in verification practice. Then the middle link works and F6 fails.

### F7: The anchor must be a ground, never agreement or a benchmark

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."*

Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*

Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*

Fig 10 :24: *"the ground does not decay, the channel does"*

Fig 10 :26: *"stale percepts, dropped transients, saturated metrics, pooled readings"*

Most of the world evidence on this question is benchmark or task-laboratory evidence. It is admissible as corroboration of a mechanism shape, not as a settlement of the wage-and-influence question. Brynjolfsson, Li and Raymond (NBER WP 31161, opened 2026-11-22) do have a ground: issues resolved per hour at a real firm. Noy and Zhang (Science 2023, record opened 2026-11-22) have incentivized writing tasks with human-rated quality. Even there, "quality" is a rating, not a market. The channel can saturate; Fig 10 :26 names that failure.

**Refuter:** a multi-year, task-linked wage and employment series with an identifiable ground that does not move when researchers change their minds. Until such an anchor is used, every verdict here stays `candidate`.

### F8: Which specific expertise loses is a `gap`, not a hidden answer

Fig 9 :32: *"you get a kind of thing, never the answer itself"*

Fig 13 :134: *"Unreachable is a verdict here, not a silence,"*

Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

After a genuine re-census no figure line names an occupation, a skill, a wage elasticity, or a time horizon. The figures return a kind of thing: a composer at the same wall, a shift of load-bearing from recording to settlement, a valence that flips with the residual. They do not say "radiologists lose" or "lawyers gain". Declaring that would be a name where the framework returns a shape. This is a real `gap` and it is recorded as such in `07` and `09`. The missing thing is an instrument: a task-level census that attaches each task slot to an anchor and a ground-verified outcome.

**Refuter:** not applicable in the same way. A `gap` is closed by an instrument, not by a better argument. If such a census returns stable signs across low-overlap fields, F8 is replaced by a grounded verdict.

### F9: The two halves reinforce each other through the habitat, and "influence" is a comparison

Fig 11 :61: *"The seat’s power is asymmetric. Introduction is available; exclusion is not."*

Fig 12 :86: *"a threshold relation between two quantities"*

Fig 7 :13: *"agreement compounds, evidence does not"*

A habitat can add the composer; it cannot subtract the contact that experts hold. The new actor changes what is abundant (artifacts) and what is scarce (settlement), so the same intervention raises measured productivity and changes the standing of a subset of experts at once. The phrase more influential is a `⋛` comparison between workers and must be anchored in something that does not move with opinion; a popularity count inside the tool community is a frame-internal quantity (Fig 1 :27).

**Refuter:** a documented habitat substitution in which the composer is introduced, artifact productivity rises, and the distribution of influence is demonstrably unchanged against a ground. That would split the compound and require F1 to be re-censused.

---

## 5. Pre-registered refuter (written before the conclusion)

Required before any conclusion, per the seat rule that a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. **Union refuted:** one lever clears artifact production and settlement standing with no categorically different residue, measured on a ground.
2. **Same-wall refuted:** a generative system adds a settled atom to a worker's closure, with provenance and a shadow test, so the wall moves rather than only the search cost.
3. **Valence refuted:** the sign of the effect is invariant across task slots with demonstrably different residuals, measured on ground outcomes.
4. **Recording refuted:** artifact volume, controlling for verification, predicts ground outcomes better than verification does.
5. **Gap closed against the shape:** a task-level census with a real anchor returns stable gains or losses that contradict the shift-from-recording-to-settlement prediction.

If any fires, the relevant finding is withdrawn in `11_audit.md` with provenance. Until one is run, nothing here is `grounded`.

---

## 6. Recommendation

1. Keep the union and refuse the "or" in the question until F1 is refuted.
2. Report productivity as cheaper search at the same wall, not as new atoms or new capability (F2).
3. Describe the composer's effect per task slot, never averaged over a workforce (Fig 1 :19, :22).
4. Put the discriminator instrument ahead of more tooling. The scarce term is "what would count as progress here" (F6, Fig 3 :27).
5. Use a ground (payments, outcomes, task completions) as the anchor; treat benchmark gains as frame-internal until they pay (F7).
6. Say `gap` for the occupation-level question. Do not fill it with an expert's favourite list (F8).
7. Send the generator, meaning the residual, the shape and the refuter, not a recording of the conclusion. Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."*

---

## 7. Canonical usage check and retraction/confirmation log

Two usage rules were applied after the first findings were drafted.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also gives the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments stop and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md` step 7 and mode rule: underivable-in-principle and unreachable-at-this-budget are different facts; filters are for budget and witnesses for the verdict.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "AI makes experts obsolete" as a figure verdict | **Retracted before conclusion.** No figure line says this. Fig 11 :40 ties capability to agent and habitat and Fig 11 :49-51 makes valence residual-relative. Replaced by F3 and F4. |
| "AI only makes experts more productive" as a figure verdict | **Retracted before conclusion.** Fig 6 :49 licenses cheaper search at the same wall, not a new atom, and Fig 5 :48 disqualifies output as a success measure. Replaced by F2 and F5. |
| Fig 12 isomer reading: human+AI versus AI-alone are isomers | **Retracted at re-census.** Fig 12 governs typed bonds inside one library; substituting one habitat actor for another is not a bond change inside a library. The line strains and was sent back to census. No isomer claim survives in `06`. |
| Fig 11 :40 read as a ban on tool use for experts | **Narrowed.** It says an improvement that does not change contact changes nothing. A head start that changes the novice's contact with the ground does change the loop, which is what the Brynjolfsson result reports. Both readings are kept visible. |
| "Productivity" treated as a witness | **Retracted as a witness.** Fig 1 :25-27 disqualifies quantities a frame produces about itself; it survives only as a budget filter in D4. |
| "Value of expertise" treated as a domain | **Retracted.** No nameable anchor; absorbed into D2 settlement and D3 payment (X1). |
| Fig 9 union reading | **Canonically confirmed.** Fig 9 :55 and :57, plus Fig 9 :54 on unbundling a union before searching again. |
| F8 `gap` | **Canonically confirmed, not a failure.** Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39 on searches that find nothing. |

### Seven-question recursive derivation (summary)

1. **One question or two?** Union, not partition (Fig 9 :55, :57). F1.
2. **Does the generator move the wall?** No; it searches more of the same closure (Fig 6 :21, :49). F2.
3. **Is it good or bad for expertise?** Neither as a kind; valence is relative to the residual (Fig 11 :49-51). F3.
4. **Where does capability live?** In agent and habitat, not the worker alone (Fig 11 :39-40). F4.
5. **What becomes expensive?** Settlement, because recordings get cheap and output is frame-internal (Fig 4 :25, Fig 1 :27). F5.
6. **What breaks first?** The discriminator link, because it has no instrument (Fig 3 :25-27). F6.
7. **Which occupations?** `gap`. A kind of thing, never a name (Fig 9 :32); an instrument is owed (Fig 13 :134). F8.

### Updated verdict

The shape survives and the forced "or" does not. A cheap composer inside the same closure lowers search cost, which is the defensible core of the productivity half; the load-bearing term moves toward settlement against a ground, which is the defensible core of the value-of-expertise half; and the sign for any particular worker depends on the residual of their task slot. No occupation is named. Strains after re-census: **one retracted** (Fig 12 isomer), **one narrowed** (Fig 11 :40), **none hidden**. All findings are `specified`, ungrounded, `candidate`.
