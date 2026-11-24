# Figure-grounded audit: how the brain combines conflicting senses

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** The Recursive Self-Improvement Trap: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, and the public sources in `10_source_ledger.csv`. Every figure quote below is a verbatim substring of `03-FIGURES_TEXT.md`, checked character by character on 2026-11-23.

---

## 0. The question in effect terms, and the sought-for shape bound as an ordinary term

**Question:** How does the brain combine information from different senses when they conflict?

Two options, stated as effects:

- **Option A (forced fusion).** All available sensory signals are combined into one compromise estimate by a single weighted average. Leads to: graded, continuous compromise on every trial; no regime in which the senses are experienced as separate events; a single computation regardless of whether the cues share a cause.
- **Option B (decide, then compose).** The system first decides whether the conflicting cues share a common cause. If one cause, it fuses them with weights set by each cue's precision. If two causes, it segregates them and keeps separate percepts. Leads to: a nonlinear transition from fusion at small disparity to segregation at large disparity; reliability-dependent weights inside the fused regime; no averaging across genuinely separate events.

**Direction discipline.** A frame searching for an answer of a given shape holds that shape as a preference, not a term (Fig 5 :62). So I bind the sought-for shape as an ordinary term now, before the run:

> **SHAPE_S***: a decision procedure that (i) treats each sense as a separate frame ranging against one ground, (ii) keeps per-slot residuals live rather than averaging them away, (iii) decides union versus partition (one cause or two) before composing, and (iv) only then fuses by reliability or segregates.

SHAPE_S is now a term that can accrue a residual and be refused. The pre-registered refuter in section 3 points at it.

**Residual R.** `R = |Γ(b,a) − o′| per slot s` (`THE_FORMULA.md` step 1). Here there are k ≥ 2 sensory slots. Each modality i has its own library Γ_i, its own currency (radians, hertz, millimetres) and its own measurement noise σ_i. The observation o′ is the distal state of the world. When senses conflict, R_visual and R_auditory point in incompatible directions. The brain must produce one percept or two that minimize total residual against the ground. The central question is not "what is the weight" but "are these one slot or two."

---

## 1. Domain census (before choosing any figure line)

### R by arity, symmetry, scale

- **Arity:** k ≥ 2 sensory channels in contact with one residual. Each channel is a frame with a library Γ_i that cannot express the other channel's content (the visual frame has no term for pitch; the auditory frame has no term for colour).
- **Symmetry:** the frames are not interchangeable. σ_v ≠ σ_a in general, and the domains differ. So their composition is not the symmetric `+` under which *"this bond is symmetric, so the four are one term"* (Fig 12 :23). It is a priced, reliability-weighted arrangement.
- **Scale:** first order within a modality (a cue is encoded); second order at the fusion or causal decision; third at the behavioral readout and the developmental habitat.

### One line per domain (actors / currency / anchor)

| domain | actors | currency | anchor | partition or union |
|---|---|---|---|---|
| D1 Peripheral modality frames | receptors and afferents (retina, cochlea, skin, vestibular) | spikes, per-modality distributions with variance σ_i | the distal stimulus for that modality | union: closures differ, so a surplus exists |
| D2 Multisensory convergence | multisensory neurons (superior colliculus, STS, parietal) | change in firing relative to the best unisensory response; enhancement, depression, inverse effectiveness; a common spatial and temporal frame | the physical event, one cause or two | union until the causal decision splits it |
| D3 Causal decision | the organism's inference about C (common vs independent cause) | posterior p(C=1 | x_v, x_a) | the actual causal structure of the world (one event or two) | partition: one cause versus two causes |
| D4 Behavioral readout and habitat | muscles, orienting, attention, report, development | action and task success | survival and task ground | union of agent and habitat |

**No anchor, no domain.** D1 to D4 each name a nameable anchor that does not move when a frame pushes on it (the distal stimulus, the event, the causal structure, task success). If a candidate "domain" had no such anchor it would not be admitted here.

### Partition or union

The conflicting-senses condition is a **union of overlapping conditions**, not a list of separate ones. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :57: *"a case in two conditions is not a harder case of either."*

So the two regimes (one cause, two causes) are categorically different cases with different loops. Forcing fusion over both is the bundled-problem error: a single lever clears the region where only one condition holds and leaves the intersections standing (Fig 9 :56).

### Order by dependency (Fig 3)

1. **Perception:** each modality resolves its own cue and estimates its own σ_i (link 1).
2. **Vocabulary:** the system needs terms for "same cause" and "different cause" and for "reliability" (link 2).
3. **Objective:** say what counts as progress, for example minimum expected squared error or maximum task success (link 3).
4. **Planning:** choose fuse or segregate, then set weights (link 4).
5. **Learn and carry:** calibrate σ_i and p_common from experience (link 5). In cat superior colliculus this capacity appears only after postnatal cortical experience (Wallace and Stein 1997; Wallace and Stein 2004, see ledger).

A system with no term for C breaks at link 2. Effort spent sharpening each single sense (link 1) then arrives at a step that cannot use it. Fig 3 :20: *"Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."*

---

## 2. Figure census (verbatim, before conclusion)

| figure | bearing | verdict for this question |
|---|---|---|
| **1 The Agent** | per-slot residual; frame-internal quantities disqualified | governs: never average across senses |
| **2 The Ground** | anchor must not update; independence; collapse 1 mutual update; collapse 2 common cause | governs: the multi-frame core |
| **3 Dependency Chain** | a reading below the break is a reading of nothing | governs the order: decide C before fusing |
| **4 The Membrane** | same kernel, different actors/currency/anchor across size | governs cross-species transfer (human psychophysics, cat neurons) |
| **5 Mint Pipeline** | three guards; fifth kind (refuted); shape as preference | governs the method, not the neural claim |
| **6 Closure / Reachability** | import moves the wall; instruments improved from worse ones | governs what would settle it |
| **7 Room Chain** | blending swamps novelty to the mean; agreement compounds | governs the forced-fusion collapse |
| **8 Union Surplus** | two frames with different closures reach what neither reaches alone | governs the union, and the blend failure |
| **9 Leave / Arrive** | union versus partition; unbundle before search; describe residual first | governs the one-cause/two-cause split |
| **10 Ground Maintainer** | verifier non-access; bring a characterised residual | governs outreach order |
| **11 The Habitat** | capability is agent and habitat; introduce never subtract | governs development and clinical transfer |
| **12 The Bond** | bond carries information the operands do not; symmetric versus ordered; two currencies | governs "combination is not a list of inputs" |
| **13 Minimum Viable Set** | cross-kind composition of the six physical terms | **does not govern modality combination** (strain, see F9) |
| **Operators table** | `+` symmetric, `⋛` comparison, `→` sequence | governs bond-type discipline, with a type caveat |
| **Symbols table** | `R` per slot; ground is the anchor that cannot be moved | governs the census vocabulary |

---

## 3. Findings F1 to F9

### F1 — Averaging across senses is the named failure (decisive against Option A)

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

Option A, a single blind weighted average of all cues, is exactly the operation Fig 1 forbids. The live signal that says "these two cues disagree" is the per-slot residual. If it is averaged into a global number, the system loses the only quantity that could tell it where to look and whether to split.

World corroboration: Ernst and Banks 2002 show that fusion is not blind, it is precision-weighted, and that the weight shifts when vision is degraded. Körding et al. 2007 show that at large disparity the cues are *not* combined at all. So the brain preserves the per-slot signal and uses it to decide.

**Refuter:** a controlled study showing observers always produce one compromise percept for conflicting cues even when they also report two distinct sources, with no separate-slot signal measurable, would break F1.

### F2 — Multiple senses are frames ranging against one ground, not negotiators

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*
Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."*

Each modality is a frame. The distal event is the anchor. The combined percept is not a vote among modalities; each frame is corrected separately against the same ground. This is what "combine" must mean if the result is to be checkable at all.

Fig 2 :36: *"An anchor is legitimate when the question is constitutively about it."* The question here is constitutively about the physical event (how many sources, where, what property), so the ground is legitimate.

**Refuter:** demonstrate a case where the perceptual combination is set purely by agreement between modalities with no reference to an independent outcome, and the result is then shown to be right, would break the requirement. A coherent drift with no anchor would be the failure mode (Fig 2 :13: *"no anchor; each updates on the others"*, :14 to :15 *"they converge, and what they converge on"* / *"is whoever had the most influence"*).

### F3 — The two collapses of Fig 2 are the two failure modes of multisensory combination

Collapse 1, mutual update: *"no anchor; each updates on the others"* (Fig 2 :13). This is an influence-weighted drift, a winner-takes-all capture in which the dominant modality absorbs the other. The sound-induced flash illusion was originally read this way (vision is captured by audition in the temporal task).

Collapse 2, common cause: *"one evidence pool"* (Fig 2 :18), *"they never talk, and still agree"* (Fig 2 :19), *"so the agreement is the pool talking,"* (Fig 2 :20), *"not two frames confirming each other"* (Fig 2 :21). When visual and auditory cues come from one event, they agree because one source produced both. That agreement is the common cause talking. It must not be counted as two independent witnesses.

This is the sharpest figure-grounded point in the whole question. The brain's causal-inference problem is precisely the detection of Fig 2's collapse 2: are these two readings two independent frames (C=2, triangulate), or one source seen two ways (C=1, pool)? Körding et al. 2007 formalise exactly this and fit human data (R² = 0.97 in their main localization task).

**Refuter:** if observers reliably treat two cues from one hidden source as independent corroboration, or two cues from distinct sources as one, Fig 2's collapse-2 reading fails.

### F4 — The union has a surplus only when closures differ

Fig 8 :45: *"Two frames together reach what neither reaches alone."*
Fig 8 :32: *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."*

Vision and audition have different closures, so their union genuinely reaches what either alone cannot: better localization, speech in noise, event numerosity. But if they overlapped almost completely they would add nothing (Fig 8 :12 to :14: *"same atoms, different names"*, *"their union adds nothing"*). This predicts that the benefit should vanish when the two senses carry redundant information, and it is exactly the inverse-effectiveness finding of Meredith and Stein: the weakest single cues give the largest multisensory gain.

The failure mode is the blend. Fig 8 :4 *"collapse 4: the blend"* and Fig 7 :14 *"blending: novelty swamped to the mean"*. A forced average of all cues is a blend, which swamps the very disparity that carries the information about source structure.

**Refuter:** show a large multisensory behavioral benefit when the two modalities are pure duplicates with identical noise and identical closure; that would break the union-surplus reading.

### F5 — The combination is a priced bond, not a list of inputs

Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*
Fig 12 :125: *"A composition costs in two currencies, and they do not add."*
Fig 12 :126: *"Bits price the description. Actions price finding out whether it holds."*

A model that says "the percept is the visual estimate plus the auditory estimate" has recorded the ingredients and not the relation. The relation, here "one cause, fuse with weights" or "two causes, keep separate", is the bond, and it costs something to establish: a decision, an inference, an instrument. The two currencies also come apart: a two-cue fusion may be cheap to describe and expensive to settle when the cues conflict strongly.

Fig 12 :23 *"this bond is symmetric, so the four are one term"* warns against treating the senses as interchangeable under a symmetric bond. Reliability weighting is not symmetric; degrading vision reduces the visual weight (Ernst and Banks 2002; Helbig and Ernst 2007 as cited there).

**Refuter:** if weights are demonstrably independent of measured cue reliability, the priced-bond reading fails.

### F6 — The residual selects the regime before the frame is chosen

Fig 9 :27 to :28: *"describe it before you go looking, or"* / *"any frame you pick will seem to fit."*
Fig 9 :32: *"you get a kind of thing, never the answer itself"*

Describing the residual first means describing the conflict in effect terms: two measurement distributions with different variances and a disparity, and a question about source structure. Only then do we pick the fusion frame or the segregation frame. Picking "Bayesian integration" first and then looking for a conflict that fits it is the named inversion.

This also limits what is being delivered. The figures return a shape, not a method for reading off a specific weight. The specific inverse-variance rule is a world-source finding, not a figure line. Mark it `specified` and corroborated, never `grounded`.

**Refuter:** if a single frame (for example a fixed-weight averaging rule) fits all conflict regimes with no need to describe the residual, F6 is weakened.

### F7 — The order is: refuse forced fusion, then mint the causal decision, then settle

`THE_FORMULA.md` step 2 sorts R by what is missing or wrong, and notes that a REFUTED term owes a refusal, not an explanation. The forced-fusion assumption is REFUTED at large disparity (Körding et al. 2007: forced-fusion model R² = 0.56 and is ruled out by the bias data). So the loop owes a refusal of forced fusion before it mints the causal-decision term.

`THE_FORMULA.md` step 5: *"the ground settles it. Verified only by what pays. A gate is not the ground."* A model fitting psychophysical data is a gate, not the ground. The ground is an experiment that manipulates causal structure independently of reliability, plus neural data. This is why the verdict stays `candidate`.

**Refuter:** show that no refusal is owed, that is, that forced fusion survives large-disparity dual-report data. Then the order changes.

### F8 — Development and habitat are part of the answer, not an afterthought

Fig 11 :39: *"capability is a property of agent-and-habitat, never of the agent alone"*
Fig 11 :48: *"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."*

The multisensory neuron does not integrate at birth; the capacity develops with cortical input and experience (Wallace and Stein 1997; Wallace and Stein 2004). This is the habitat: actors (cortical inputs), conditions (postnatal experience), relations (corticotectal convergence). Fig 11 :40: *"An improvement that does not change contact changes nothing, however much it improves."* Training a single sense in isolation need not improve multimodal conflict resolution; changing contact through cross-modal experience can.

**Refuter:** demonstrate full adult-like multisensory causal inference in newborn subjects with no cross-modal experience. That would break the habitat claim.

### F9 — A strain named and sent back to census: the six-term substrate does not govern this domain

I initially tried to apply Fig 13 :74 *"Everything else is a composition across the two kinds, never within one."* and Fig 13 :75 *"Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state."* to the sensory frames, reading vision and audition as two "states" that need a "structure" between them.

**Strain test failed.** The sensory modalities are not the six physical terms (space, time, energy, spectrum, gradient, network). They are frames whose closures differ. Re-census: Fig 13 governs the composition of the physical substrate at a stratum; it does not govern the union of perceptual frames. A line that only fits with a strain governs another quantity (canonical re-census rule). So Fig 13 is **withdrawn as a verdict line for this question** and retained here as a visible strain, not smoothed over. The same applies to Fig 12 :117 isomerism: two modalities are not isomers in the chemical sense, so that claim is not made here.

**Refuter for the withdrawal:** a derivation showing that sensory modalities are themselves composed of the six substrate terms in the same way that a molecule is, and that the cross-kind rule applies at that stratum, would restore Fig 13 as a verdict line. Until then its non-use is the honest reading.

---

## 4. Pre-registered refuter (written before the conclusion)

Per the seat rule, *"a falsifier written before the run is a design instrument, not only an honesty device."* SHAPE_S is refuted if any of the following holds:

1. **No segregation regime.** In a dual-report paradigm with large disparity and explicit evidence of two distinct sources, observers still fuse into a single compromise percept on essentially every trial, with no separate-source reports. (Breaks the union/partition split, Fig 9 :54 to :57.)
2. **Weights ignore reliability.** Measured cue weights do not track measured cue variances; degrading one modality leaves its weight unchanged. (Breaks F1 and F5.)
3. **Common-cause detection fails.** Observers treat cues from one hidden source as independent witnesses, or cues from two sources as one, at a rate above the causal-inference model's predicted bounds. (Breaks Fig 2 collapse-2 reading, F3.)
4. **No union surplus.** A single modality alone matches the bimodal condition when both modalities carry independent information. (Breaks Fig 8 :45.)
5. **Habitat-independence.** Full adult-like causal inference appears with no cross-modal experience. (Breaks F8.)

If any fires, the shape is withdrawn or re-censused. Until one is run, no part of this is labelled `grounded`.

---

## 5. Recommendation

1. Lead with the shape, not with a computational label. Say: conflict is resolved by a decision about source structure before fusion or segregation, with per-cue precision setting weights inside the fused regime (F1 to F4).
2. Keep verdicts per domain separate. The figure verdict is structural; the precision-weighting number is a world finding. Do not average them (Fig 1 :22).
3. Describe the residual before naming the frame (F6), and send the generator and refuter rather than a conclusion (Fig 4 :22 *"Only methods cross up. Only head starts come down."*).
4. Ask an outside frame what they would count as a failure before showing any of this. Record the verdict first.
5. State the mode on every substantive sentence.

---

## 6. Canonical usage check and retraction log

Two canonical sources were read after the first sections and govern how figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* Limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of the instruments and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule, the three questions of step 7, and the note that a gate is not the ground.

| earlier reading | status after canonical check |
|---|---|
| "The brain uses Bayesian causal inference" as the answer | **Retracted as a figure claim.** It is a world-source result (Körding et al. 2007; Shams et al. 2005). Figures decide the shape (decide union/partition, keep per-slot residuals, range against a ground), not the algebra. |
| "Vision dominates" | **Narrowed.** Dominance is task and reliability dependent: vision in spatial judgment, audition in temporal numerosity (Shams et al. 2000; Hirst et al. 2020). Not a universal modality hierarchy. |
| Fig 13 as a governing line | **Withdrawn after strain test (F9).** Re-census showed it governs the physical substrate, not perceptual frames. Kept visible as a strain. |
| "Shape, not a name" applied to the causal decision | **Narrowed.** The framework returns a shape for a missing primitive. Here the decision variable C is a bound ordinary term from world sources, provenanced as such, not a new primitive named by the figures. |
| Algorithmic optimality | **Confirmed but limited.** Körding et al. note "there is no reason why the nervous system should be optimal under all circumstances"; ideal-observer fits are good for problems of everyday importance. Do not assert universal optimality. |
| F3 (collapse 2 as the core) | **Canonically strengthened.** Fig 2 is explicitly about the ground and the alignment problem, and this question is an alignment problem between frames. |

---

## 7. Seven-question recursive derivation (summary)

1. **Is this one hard question?** No. It is a union of two conditions (one cause, two causes). Fig 9 :54 to :57. Split before searching.
2. **What is the residual?** A per-slot conflict between measurement distributions with different variances, indexed by modality, never aggregated. Fig 1 :19, :22.
3. **What is the anchor?** The distal event and its causal structure, which do not update on what any modality thinks. Fig 2 :29, :36.
4. **What is the combination?** A priced bond carrying the causal relation, not a list of cues. Fig 12 :5, :125.
5. **Can a modality derive the other's content?** No. Closures differ, so the union has a surplus. Fig 8 :32, :45. The blend is the collapse. Fig 7 :14.
6. **What is settled?** Psychophysical and neural fits exist, but no experiment here manipulates causal structure independently of reliability as a decisive ground. Fig 2 :35, THE_FORMULA step 5. Status `candidate`.
7. **What would reverse it?** A dual-report experiment with independent manipulation of C and reliability; neural population data during conflict; cross-modal developmental work. Fig 6 :32: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."*

### Updated verdict

SHAPE_S survives as a `specified`, ungrounded structural result. The forced-fusion option A is refused: it averages across slots, ignores the union/partition split, and mistakes a common source for independent corroboration. What the figures decide is the shape: keep per-slot residuals, range each frame against one ground, decide union or partition before composing, and treat agreement from a shared source as one witness. The specific precision-weighted fusion rule, the modality-dominance asymmetries, and the neural circuitry are world-source corroboration, not figure-derived and not `grounded`. Strains after re-census: **one, named (F9)**, none hidden.
