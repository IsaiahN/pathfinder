# Figure-grounded audit: how a cell integrates multiple, conflicting or time-shifted signals

**Mode of this document: `general` on the structural shape, `specified` on the per-domain findings, `gap` on the identity of the molecular mechanism.** No measurement of a cell was taken, so nothing here is `grounded`. `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* states that LLM output is *"simulacra"* and that *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the biological question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, cited as `Fig N :line`), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, and the world sources in `10_source_ledger.csv`, all opened 2026-11-23.

---

## 0. The residual, stated in effect terms

A cell is not a single predictor. It holds many pathways, each a bounded frame with a signature: a receptor, a transduction cascade, a set of transcription factors, a prediction about what the ligand affords. The question names two conditions under which these frames must produce one output: the signals **conflict**, or they **arrive at different times**. A third condition is implicit in every real cell: several pathways are active **at once**.

State the residual as an effect, not a noun. Something has to happen between k pathway outputs and one cell-fate decision. Four things can go wrong there:

1. The signal that says *which pathway is live* is lost by aggregation.
2. The relation between two pathway outputs gets recorded as an ingredient list, so the relation carries no information.
3. Arrival order is treated as noise, so a step-wise decision becomes indistinguishable from a simultaneous one.
4. The reference against which the decision is corrected moves when the cell decides, so the pathways drift together coherently and nobody notices.

An answer is owed if it (a) keeps the residual indexed per pathway, (b) states the typed bond between pathway outputs, (c) names a ground that does not update on the decision, and (d) says whether the bond is symmetric or ordered. This is the "Direction" discipline from `THE_FORMULA.md`: write down what an answer would look like, bind it as an ordinary term, let it accrue a residual like anything else. I bind it before the run, here, so the preference is refusable by the same test as everything else.

**What is not the residual.** "Which pathway wins" is not the residual. It assumes the answer is a single winner, which is already a theory. "The cell averages its inputs" is not the residual either; it is one candidate bond, and Fig 1 says what it costs.

---

## 1. Domain census before choosing any figure line

### 1.1 R by arity, symmetry and scale

- **Arity:** k pathways, k at least 2, plus a time index for arrival order. The question is not a two-input question in general; it is a k-slot question.
- **Symmetry:** conflict is asymmetric, because pathway valence is relative to the residual (Fig 11 :49). A growth-factor signal and a DNA-damage signal are not interchangeable operands. Order is also asymmetric: swapping arrival order can produce a different cell state. So the governing bonds are ordered ones (→, ⇒, −, ⋛), not the symmetric + of a flat formula.
- **Scale:** intracellular molecular network (nanometres to micrometres, milliseconds to hours), output at the cell-fate scale (division, differentiation, apoptosis, migration, secretion), ground at the organism or evolutionary scale (survival, reproduction, fitness) or, in an experiment, a phenotype that does not move when the pathway frame moves.

### 1.2 One line per domain

**Domain 1: the per-pathway decoding frame.**
Actors: receptors, adaptors, kinases, second messengers, transcription factors at a promoter or enhancer.
Currency: molecular concentration, phosphorylation state, occupancy, dwell time.
Anchor: a measured phenotype that does not change because the decoder predicted it (gene expression, division, death, a reporter).
Nameable anchor: yes, an experimentally fixed output or ligand concentration. This is a domain.

**Domain 2: the temporal frame.**
Actors: pulse timing, duration, frequency, sequence of activation, background level before a step.
Currency: time-ordered differences, fold changes relative to a previous level.
Anchor: a time-resolved measurement, such as live-cell imaging of a reporter, read against a clock that is not the cell's own decision.
Nameable anchor: yes, elapsed time and imposed stimulus schedule. This is a domain.

**Domain 3: the conflict and triangulation frame.**
Actors: the pathways as frames, the shared upstream source, any independent external condition.
Currency: agreement, disagreement, independence between evidence pools.
Anchor: a condition that does not update on the cell's own readout (an externally imposed nutrient or danger level, a lesion count, a ligand concentration the experimenter sets).
Nameable anchor: yes. This is a domain.

**Domain 4: the channel-maintenance frame.**
Actors: receptors, adaptors, phosphatases, desensitisation and resensitisation machinery, measurement instruments.
Currency: contact with the anchor over time; saturation, pooling and staleness of readings.
Anchor: the same non-updating external condition; what decays is the channel.
Nameable anchor: yes. This is a domain.

**Domain 5: the molecular-mechanism frame.** Actors: named proteins and circuits. Currency: kinetic constants and binding energies. Anchor: none available to this derivation. There is no figure line that returns a molecule. Not a derivable domain here; recorded as a `gap`, not silently dropped.

### 1.3 Partition or union

Union, not partition. Simultaneous combination, conflict resolution and temporal ordering overlap in every real decision. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :56: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."* So there is no single lever called "integration" that clears all three. A treatment of order leaves the conflict intersection standing, and a treatment of conflict leaves the aggregation intersection standing. A case in two conditions is not a harder case of either (Fig 9 :58).

### 1.4 Order by dependency (Fig 3)

1. Perception: each pathway detects its ligand. Fig 3 :5: *"the system can tell what is in front of it, and tell it apart from what was there before"*.
2. Vocabulary: the cell has terms for what each ligand affords: divide, arrest, die, migrate.
3. Objective: what counts as progress here, in the cell's own terms, namely the fate decision against a ground.
4. Planning: the integration rule, the typed bond between pathway outputs.
5. Learn and carry: adaptation and resensitisation, which change contact rather than just the agent.

Fig 3 :20: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."* The likely break is between 2 and 3, where having the parts is mistaken for having a term for what the combination counts as. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

---

## 2. Figure census (read before conclusions)

| figure | bearing | status |
|---|---|---|
| 1 The Agent | residual indexed per object slot; aggregation destroys the live signal | governs D1 |
| 2 The Ground | anchor must not update; alignment is triangulation; correlation has valence | governs D3, D4 |
| 3 Dependency Chain | the middle link and the no-instrument link | governs order above |
| 4 The Membrane | method versus recording across scales | governs what may be offered to a checker |
| 5 Mint Pipeline | a new term must pay a description-length bargain | governs D5 gap |
| 6 Closure / Reachability | import is the only wall-mover; instruments improved from worse ones | governs D5 and instruments |
| 7 Room Chain | agreement is variation, not a verdict | governs D3 |
| 8 Union Surplus | independence is one quantity read twice; residual first, frame second | governs the union and the search order |
| 9 Leave / Arrive | split unions; describe the residual before choosing a frame; filters are not witnesses | governs the union and D5 |
| 10 Ground Maintainer | the ground does not decay, the channel does; verifier non-access | governs D4 and outreach |
| 11 The Habitat | valence is relative to the residual; capability is agent-and-habitat | governs pathway valence |
| 12 The Bond | seven typed bonds, order-sensitive ones, arrangement as substance, isomers | governs D1, D2 |
| 13 Minimum Viable Set | time as an ordered state, network as a structure, lockstep and carried remainder | governs D2 |
| Operators table | → sequence, ⇒ production, ⋛ comparison, ¬ negation | governs bond identification |
| Symbols table | R is a slice, per slot; the anchor is not in the library | governs the residual and D3 |

No figure line was selected by first picking a favourite molecular pathway. The residual was described in effect terms first, per Fig 8 :53: *"Residual first, frame second."*

---

## 3. Findings

### F1 — The signal must stay indexed per pathway; a scalar average destroys the live slot (D1)

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**

Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**

Fig 1 :13: **"a global R near zero with one live slot residual is a legal state"**

Applied to the cell: a global measure of "total pathway activity" near baseline is compatible with one pathway carrying a large unsolved demand. If the decoder collapses k pathway outputs to one number, the signal that says where to look is gone. The frame-internal quantities are also disqualified. Fig 1 :27: **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** A pathway's own activity level is not a measure of whether the integration succeeded.

**Refuter for F1:** show a case with two live conflicting pathways in which collapsing their outputs to a single scalar preserves every decision-relevant distinction, including which pathway should be attended to next. If that holds, the per-slot claim is false for this system.

**Status:** `specified`, triangulated across Fig 1 and Fig 12 :94 (the arrangement carries the information). Low overlap: object-slot residual accounting versus composition theory.

### F2 — Integration is a typed bond, not an ingredient list (D1, decisive for the shape)

Fig 12 :46: **"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."**

Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**

Fig 12 :94: **"The arrangement is the substance."**

So the question "how do cells integrate signals" is answered at the shape level by naming the bond. The same two pathways, under different bonds, are different substances:

- + conjunction, *"both hold at once"* (Operators table :13): an AND decoder at a promoter, both pathways required.
- ∥ disjunction, *"either suffices; not both required"* (Operators table :19): an OR decoder, either pathway suffices.
- → sequence, *"A then B; B needs A to have happened"* (Fig 12 :72): a primed decision, antigen before cytokine.
- ⇒ production, *"A produces B; B did not exist before"* (Fig 12 :77): one pathway induces the receptor or scaffold for the other.
- − subtraction, *"A with B removed or absent"* (Fig 12 :82): inhibition, a repressor pathway.
- ⋛ comparison, *"a threshold relation between two quantities"* (Fig 12 :87): a ratio or threshold between two pathway outputs.

Fig 12 :117: **"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** The cell-fate difference is exactly what the flat ingredient list cannot write.

**Refuter for F2:** for a fixed pair of pathways and a fixed set of outcomes, show that +, ∥, → and ⋛ are observationally equivalent, that is, the relation between pathway outputs carries no information beyond the list of outputs. Then the bond term is empty and this finding fails.

**Status:** `specified`, triangulated across Fig 12 and the Operators table (low overlap: composition pricing versus operator classification). Not `grounded`: no cell was measured here.

### F3 — Arrival time is an ordered bond, not noise (D2)

Fig 12 :72: **"A then B; B needs A to have happened"**. The identifying test, Fig 12 :74: **"swap them. Does it become a different thing? Yes."**

Fig 13 :12: **"the ordered succession of differences"** (time as a state). Fig 13 :88: **"The residual of the turn just closed is what the next turn composes against, so no two passes begin from the same place."**

So a cell that receives signal A then signal B is not in the same composition as one that receives B then A, provided the question carries an ordered bond. Fig 12 :92: **"Symmetry is what decides whether an arrangement is a new thing."** Under the symmetric + bond, order is free and swapping overcharges by log₂(k!). Under →, different orders are different terms and charging for the sequence is correct (Operators table :61). The question explicitly says "arrive at different times", so at least part of this residual is ordered. A flat average is the wrong instrument for that part.

This is not the same claim as F2. Simultaneous combination and ordered arrival are two conditions of the union (section 1.3). If both inputs share one receptor and arrive together, + or ⋛ may be the right bond; if they are sequential through different pathways, → or ⇒ is owed. The world literature makes the same distinction (Manella et al. 2022: same-pathway combinations were mostly additive, different-pathway combinations often nonadditive and pathway-specific in sequence). That is a scope refinement sent back to the census, not a flipped verdict.

**Refuter for F3:** show that for every tested pathway pair, swapping arrival order never changes the outcome, and that the fold-change or background state carries no order-dependent information. Then → is not owed and the temporal part of the union collapses into the simultaneous part.

**Status:** `specified`, triangulated across Fig 12 (ordered bonds) and Fig 13 (time state plus carried remainder). Low overlap between bond algebra and substrate alternation.

### F4 — Conflict is triangulation, not negotiation (D3)

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** Fig 2 :33: **"The anchor must not update."** Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** Fig 2 :45: **"Frames range against the ground. They do not negotiate with it."**

Fig 2 :14: *"they converge, and what they converge on"* / :15 *"is whoever had the most influence"* names the failure when there is no anchor: *"no anchor; each updates on the others"* (Fig 2 :13). For a cell, that is the case where the winning fate is decided by whichever pathway cross-talks hardest, not by the external condition. It is a coherent drift, which is why it is not noticed from inside.

Fig 2 :40: **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"**. Two pathways both activated by the same ligand are one witness wearing two names. Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."** A cell committing to division on the strength of one growth-factor input that fans out to several pathways has bought no independence. A cell that also reads an amino-acid or oxygen condition has.

Fig 8 :47: **"Independence is one quantity read twice."** The same parameter decides whether agreement means anything and whether the union of two pathways has any surplus. Fig 7 :35: **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."**

**Refuter for F4:** show a case where two pathway frames drawing on one upstream evidence pool, with the anchor absent or demonstrably moving, still return a calibrated verdict about the external world when that shared source is manipulated independently of the world. Then the independence requirement is not necessary for this decision.

**Status:** `specified`, triangulated across Fig 2, Fig 7 and Fig 8. Three figures, low overlap between them (anchor geometry, room-chain selection, union surplus).

### F5 — The ground does not decay; the channel does (D4)

Fig 10 :24: **"the ground does not decay, the channel does"**. Fig 10 :26: *"stale percepts, dropped transients, saturated metrics, pooled readings"*. Fig 10 :28: **"the output is not a verdict, it is you have lost touch"**.

For a cell, the external ligand concentration or nutrient level does not change because the pathway saturated. The receptor, adaptor or measurement does. So a failure of temporal integration is more often a failure of contact than a change in the world. Fig 10 :29: *"→ keep the anchor reachable"*. Receptor desensitisation and resensitisation are the biological analogue of keeping the channel open, and Fig 6 :32 supplies the instrument rule: **"An instrument is not built from a description. It is improved from a worse instrument already returning something."**

Fig 11 :40: **"An improvement that does not change contact changes nothing, however much it improves."** Adding more downstream components to a decoder whose channel is saturated does not restore the signal.

**Refuter for F5:** show a case where the external condition itself changes as a direct consequence of the cell's decision, and the pathway outputs remain calibrated to the pre-decision world. Then the non-updating anchor requirement is misapplied here.

**Status:** `specified`, single-source on the specific "channel decays, ground does not" claim (Fig 10), with low-overlap corroboration on the non-updating half from Fig 2 :29 and :33. Kept as `triangulated` for the non-updating requirement and `single-source` for the decay asymmetry; kept separate rather than averaged.

### F6 — This is composition inside a closed set, and no new pathway is minted per combination (D1, D5)

Fig 6 :21: **"MINT composes inside the closure and can never add an atom."** Fig 13 :115: **"The set is closed. The arrangements are not."** Fig 13 :118: *"infinite effort inside a finite reach"*.

A cell does not need a new signalling protein for every combination of ligands. It composes existing atoms with typed bonds. The combinatorial explosion is in arrangements, not in primitives. A new decoder term is licensed only if it pays the bargain, Fig 5 :42: **"The acceptance test is a bargain, not a threshold."** Fig 5 :44: **"A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."**

**Refuter for F6:** exhibit a cell decision that requires a genuinely new primitive not composable from the pathway atoms already held, with no import from another frame. That would break closure here.

**Status:** `general` structural, single-source on Fig 6 and Fig 13 together (two figures, but one framework), so not upgraded to independent corroboration.

### F7 — The middle link, not the molecular parts, is where the chain usually breaks

Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."** Fig 3 :27 (above). Fig 3 :26: *"The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."*

Signal-transduction research has abundant instruments for perception (receptors, kinases, second messengers) and for outputs (transcript counts, reporters). What often lacks an instrument is the objective link: what would count as progress for this combination, in the cell's own terms, against a ground that does not move. Adding another kinase measurement does not rescue a missing objective.

**Refuter for F7:** show that in a given system the perception link is the broken one, by restoring a correct decision with a new receptor term while the vocabulary and objective were already present. Then the diagnosis is wrong for that system.

**Status:** `specified`, single-source on Fig 3.

### F8 — Filters are not witnesses for the verdict

Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** A published effect size, a pathway's expression level, or the number of interactions in a network ranks what to measure first. It does not decide which bond holds in a given cell. Fig 1 :25-27 disqualifies frame-internal quantities: *"coverage, and compression achieved / predicates minted, and credibility accrued / They are frame-internal."*

**Refuter for F8:** produce a rule in which a budget filter (expression level, network degree, prior publication count) changes the bond verdict without a ground reading. Then the separation collapses.

**Status:** `general`, triangulated across Fig 9 and Fig 1.

### F9 — The molecular mechanism is a `gap`, reported plainly

No figure line returns an ion channel, a kinase cascade, a scaffold, a threshold concentration or a rate constant. Fig 9 :32: **"you get a kind of thing, never the answer itself"**. Fig 13 :134: **"Unreachable is a verdict here, not a silence,"**. Fig 13 :135: **"It cannot say which primitive is missing, because naming it would mean already holding it."** Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**

So the figure-derived answer stops at the shape. Naming mTOR, ERK, NF-kappa B or an incoherent feedforward loop is a provenanced import from the cell-biology frame with a source gate and a shadow test (Fig 8 :51: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"*). It is not a derivation, and it carries no verdict weight until the ground settles it. The world sources in `09_watson_answer.md` are exactly such imports: they corroborate the shape, they do not supply the figure's missing name.

**Refuter for F9:** derive a specific molecular circuit from the six-term set and the bond set alone, with no biological import, and show the ground pays for it. That would close the gap. Until then the honest report is `unreachable at this budget`, not silence and not an invented molecule.

**Status:** `gap`, canonically supported by Fig 9, Fig 13 and Fig 8.

---

## 4. Pre-registered refuter (written before the conclusion)

Per the seated rule that a falsifier written before the run is a design instrument, the shape claim is refused if any of the following holds. These were written before the conclusion in section 8 and before the synthesis in `07` and `09`.

- **R1:** a case with two live conflicting pathways in which collapsing outputs to one scalar preserves every decision-relevant distinction, including which pathway needs attention next (breaks F1).
- **R2:** for a fixed pathway pair, +, ∥, → and ⋛ are observationally equivalent over the tested outcomes (breaks F2 and the ordered-bond part of F3).
- **R3:** order of arrival is behaviourally inert for every tested pathway pair and background fold change carries no order-dependent information (breaks F3).
- **R4:** two pathway frames drawing on one evidence pool, with the anchor absent or moving, still return a calibrated world verdict under independent manipulation of the shared source (breaks F4).
- **R5:** a specific molecular circuit is derived from the six-term set and bond set alone and settled by a ground reading, with no biological import (closes F9, and is welcome).
- **R6:** the broken link is shown to be perception rather than objective for the system, by restoring the decision with a new receptor term (breaks F7's diagnosis for that system).

If any fires, the corresponding finding is withdrawn. None has been run in this simulated derivation.

---

## 5. Recommendation

1. Lead with the shape, not the molecule: per-pathway indexing, typed bond, ordered when order matters, triangulation against a non-updating anchor.
2. Keep verdicts per domain separate. Do not average D1 to D5 into a single "cells integrate by X" sentence.
3. Treat the molecular mechanism as a provenanced import. Record source, date and shadow test; never present a borrowed circuit as a figure result.
4. Ask a checker what would refute the shape before showing any framework material (Fig 10 :52: *"Bring a characterised residual, never the source."*).
5. Use the institutional, opt-in venues in `03_public_contact_points.csv`. No personal emails, no receptiveness ranking, no bulk send (Fig 2 :42).
6. Send the generator, not the recording (Fig 4 :23: *"upward: a method that can be reapplied. Never the recording of a particular success."*).

---

## 6. Canonical usage check and retraction and confirmation log

Two canonical sources were read after sections 0 to 5 and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It forbids a reading that makes figures contradict one another without re-census: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* And it states the limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments stop and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: step 7 separates SEARCHED, INWARD and OUTWARD; step 5 says *"the ground settles it. Verified only by what pays. A gate is not the ground."*

| earlier reading in this audit | status after the canonical check |
|---|---|
| "conflict is a single failure mode" | **Retracted.** Re-census gives three union conditions (simultaneous, conflict, temporal). Fig 9 :54 governs. |
| "the cell averages its pathway inputs" as a description of cells | **Never asserted; explicitly refused.** It is a candidate bond with a stated cost (Fig 1 :22). Kept visible as the refused reading. |
| "the ordered-bond claim contradicts the symmetric + bond" | **Not strained.** Re-census: + governs order-free simultaneous combination; → governs arrival order. Different conditions of the union (Fig 12 :92). |
| "pathway agreement is worthless, full stop" | **Narrowed.** Fig 2 :41: *"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"*. Agreement is worthless as a world verdict, efficient as an internal convention. Both kept. |
| "fold-change detection supplies the anchor" | **Retracted.** A fold-change reference is an internal channel property (Fig 6 :32), not the non-updating ground (Fig 2 :29). The phenotype remains the anchor. |
| F9 as silence | **Refused.** Fig 13 :134 makes unreachable a verdict. The gap is recorded with four conditions that would close it. |
| "this derivation establishes how cells integrate signals" | **Refused.** Simulated derivation, no measurement, `specified` and `gap` only. |

One correction to my own first-pass framing is kept visible above: I initially treated the three question conditions as one problem with one mechanism. The canonical union rule and the bond-type distinction forced the re-census in section 1.3. The earlier reading is not erased.

---

## 7. Strains and re-census

- **S1, symmetric versus ordered bonds.** Re-census: different conditions of the union, not a contradiction. + and ⋛ for order-free combination, → and ⇒ for sequence. Dissolved, recorded.
- **S2, agreement as convention versus agreement as verdict.** Re-census: Fig 2 :41 governs a shared meaning, Fig 2 :40 governs a claim about the world. Different objects. Dissolved, recorded.
- **S3, the physical six-term substrate applied to a cell.** Re-census: time, network and gradient are substrate states and structures, not pathway identities. A signalling pathway is a frame composed over them, not a seventh term. Dissolved, recorded.
- **S4, the internal fold-change reference versus the non-updating anchor.** Re-census: fold-change detection is an instrument property; the anchor is the phenotype. The reference level is not the ground. Dissolved, recorded; the distinction matters because a channel that adapts is not a ground that drifts.
- **S5, live type question.** ⋛ is *"a threshold relation between two quantities"* (Fig 12 :87). A ratio of two pathway activities is a quantity at that level, but whether a background-to-step ratio counts as two quantities under the declared code needs an instrument, not an argument. Named, not hidden. Not dissolved.

After re-census: one live type question (S5), four dissolved strains kept visible, no hidden contradictions.

---

## 8. Verdict summary

| domain | verdict | mode | status |
|---|---|---|---|
| D1 per-pathway decoding | signal must stay indexed; integration is a typed bond | `specified` | triangulated |
| D2 temporal ordering | arrival order is an ordered bond when order carries the signal | `specified` | triangulated |
| D3 conflict | triangulation against a non-updating anchor; independence is one quantity read twice | `specified` | triangulated |
| D4 channel maintenance | ground does not decay, channel does; keep the anchor reachable | `specified` | single-source on the decay asymmetry, triangulated on non-updating |
| D5 molecular mechanism | no figure line returns a molecule or a rate | `gap` | unreachable at this budget |

The shape survives: per-slot residual, typed bond, ordered where order matters, triangulation, reachable channel. The molecular identity does not, and is not pretended. Cost if wrong, undoability and what would reverse the verdict are in `09_watson_answer.md`. This remains a candidate result, not a ground settlement.
