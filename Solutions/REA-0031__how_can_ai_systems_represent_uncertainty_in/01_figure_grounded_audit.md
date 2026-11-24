# Figure-grounded audit: how AI systems can represent uncertainty across unfamiliar tasks

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"*, and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, opened and grepped this session), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the eight essays by Isaiah N, and the world sources recorded in `10_source_ledger.csv`, all opened 2026-11-23.

---

## 0. The claim under audit

> An AI system can remain calibrated across unfamiliar tasks if it attaches a single well trained confidence score to each output and minimises an average calibration error over a held-out set.

That is Option A. It is the common engineering reading of the question and it is the claim audited here. Option B, derived below, is that uncertainty is a per-slot residual held against an immovable anchor, with a refusal operator and reach renewed by import from a differing closure, and that the choice of a specific algorithm is a `gap` the figures do not close.

**Residual in effect terms.** The system holds belief b (private history mixed with inherited prior by w), acts a, predicts Γ(b,a), observes o′, and forms R = |Γ(b,a) − o′| per slot s (Symbols table :36-43; THE_FORMULA step 1). A stated uncertainty is a second-order term that predicts R before o′ arrives. "Calibrated" means that term ranges against a reading the frame cannot author, on an anchor that does not move when the frame pushes (Fig 2 :29, Fig 2 :45). "Unfamiliar" means the slot lands in a closure whose atoms Γ lacks, so the term governing it is not obtainable by more search inside Γ (Fig 8 :32). The residual that persists is: *why does a confidence that tracks outcomes on known tasks stop tracking them on new ones?*

**Sought-for shape, bound as an ordinary term before the run** (THE_FORMULA, "Direction"). An answer must have three conditions that hold together: C1 per-slot residual with positive live mass somewhere (support), C2 an anchor whose reading is not written by the graded frame, C3 a method that crosses to a differing closure with source gate, shadow test, and negation. Plus an instrument that tells a C1 failure from a C2 failure from a C3 failure. Because it is now a bound term it can accrue a residual and be refused by the same test as anything else. This paragraph was written before the findings.

---

## 1. Domain census (before any figure line is chosen)

**R by arity, symmetry, scale.** Arity: R is a two-place relation between prediction Γ(b,a) and observation o′, indexed by slot s and never aggregated (Fig 1 :19). The stated uncertainty is a comparison (⋛) between a confidence and a realised frequency, which is a binary ordered bond, not a symmetric join (Operators table :46-52). Symmetry: a confidence is an *"ordering, so more and less can be said"* (Fig 13 :20), which is a structure that needs a state to be about (Fig 13 :29-30), so swapping prediction and observation changes the term. Scale: one slot loop, a population of slots across the membrane, and a cross-task transfer; the transform between scales is lossy (Fig 4 :27-30).

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Per-slot prediction loop | b, w, a, Γ(b,a), o′, slot s, R⁺_s | residual reduction; cost in bits and actions | the observation o′ the frame cannot write (Fig 1 :23) | admitted |
| D2 Calibration and ground frame | instrument, realised frequency, verifier seat | contact; bracket fidelity across the handoff | the anchor (Fig 2 :29) | admitted |
| D3 Cross-task membrane | methods crossing up, head starts down, peer frames with differing closures | methods, head starts, round-trip gap R_T | the ground at the new task | admitted |
| D4 Representation and refusal frame | atoms, seven bonds, negation, candidate φ | |φ|, reach, settlement | the ground settles a mint (THE_FORMULA step 5) | admitted |
| D5 Which named algorithm wins (temperature scaling, conformal, Bayesian, evidential) | methods and their hyperparameters | coverage or error | none nameable in the figures | not a domain yet |
| X1 Confidence as a free-floating property of the model | the scalar | self-reported certainty | none nameable | absorbed into D1 as frame-internal (Fig 1 :27) |
| X2 "Unfamiliar task" as one hard task | the task | error | none nameable | split into a union of D2 and D3 (Fig 9 :54-57) |

**Partition or union.** The whole question is a union, not a partition: C2 (contact maintained) and C3 (reach renewed) are overlapping conditions, and a case in two conditions is categorically different from a harder case of either (Fig 9 :57). D1 and D4 are dependency substrate under both. A single lever, for example more calibration data, clears the region where only one condition holds and leaves the intersections standing (Fig 9 :55).

**Order by dependency (Fig 3).** Perception: the per-slot residual must be visible before anything is graded. Vocabulary: terms for what a confidence affords, including ordering, comparison, and negation. Objective: say what would count as calibrated here, in the system's own terms. Planning: choose the instrument or the import. Learn and carry: only methods cross up (Fig 4 :22). The chain usually breaks between vocabulary and objective: a system can hold a number without holding a term for what the number affords, and a link with no instrument is a link nobody has looked at (Fig 3 :27).

Strain test applied before concluding: a line that fits only by forcing is retargeted to another quantity and the census is redone. One such strain is recorded in section 5.

---

## 2. Findings

### F1 — A global average can hide the live slot (D1)

> **Fig 1 :19** *"The residual is indexed by object slot, not aggregated."*
> **Fig 1 :22** *"Aggregating across slots is how a live signal disappears into an average."*
> **Fig 1 :13** *"a global R near zero with one live slot residual is a legal state"*

Symbols table :43-44: *"R is measured per slot, never as a single global number."* A calibration report that returns one expected calibration error has collapsed the slots into one figure. Under the figures that is not a small inaccuracy, it is the loss of the only signal that says where to look. Note the careful form: a low global average is a *legal state*, not an impossibility. The claim is that it can conceal a live slot, not that averaging is always invalid.

**Mode:** `general` for the figure's indexing rule, `specified` for AI calibration reports. **Triangulated** across Fig 1 and the Symbols table (low overlap: the agent's slot mechanics versus the notation's definition of R).
**Refuter:** show that a live slot with positive residual stays visible in a global average after the system is explicitly equipped with per-slot measurement, or that support can be evaluated on the aggregate without loss.

### F2 — Calibration is triangulation against an anchor, not agreement (D2)

> **Fig 2 :29** *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*
> **Fig 2 :35** *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
> **Fig 2 :45** *"Frames range against the ground. They do not negotiate with it."*
> **Fig 1 :27** *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*

A confidence model that reports its own calibration with a metric it also optimises is a frame scoring itself. Agreement between two such models is one pool talking (Fig 2 :40). Calibration under the figures is a relation between a frame and something it cannot move: *"A measurement, an experiment, a counter, a market, a patient outcome"* (Fig 2 :29).

**Mode:** `specified`. **Triangulated** across Fig 2 and Fig 1 (anchor law versus frame-internal quantity).
**Refuter:** exhibit a calibration metric whose reading changes when the graded frame pushes on it and show that calibration is still settled by that metric; or show the anchor moving under disagreement.

### F3 — The channel decays; a saturated metric is not a verdict (D2)

> **Fig 10 :24** *"the ground does not decay, the channel does"*
> **Fig 10 :26** *"stale percepts, dropped transients, saturated metrics, pooled readings"*
> **Fig 10 :27-28** *"the output is not a verdict, it is you have lost touch"*

This is the figure that most directly names the unfamiliar-task failure. A confidence distribution can become saturated (all mass at one value) or pooled (several conditions read as one) while the ground is unchanged. The output then reports "you have lost touch", not a fact about the world. Fig 2 :37 adds that *"It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."*

**Mode:** `specified`. **Single-source for the figure** (Fig 10's channel office); it is consistent with Fig 11 :70 but the two lines concern different objects, so no triangulation is claimed.
**Refuter:** an instrument that stays discriminating across an unfamiliar task while reported calibration still drifts, with the drift attributable to the ground rather than the channel.

### F4 — Unfamiliar means a new closure; import is the only operator that moves the wall (D3)

> **Fig 8 :32** *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."*
> **Fig 6 :23** *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*
> **Fig 6 :24** *"Import from a live peer is debited against that frame's independence. A wrong atom costs more than starting from primitives."*

An unfamiliar task is not a harder version of a familiar one; it is a slot whose governing atom is absent from Γ. More data from the same closure cannot supply it. Fig 8 :42 distinguishes the cases: *"Unreachable-at-budget: the term is already in the closure and was not found, so the remedy is more search, not another atom."* Deciding which case holds is a verdict, not a preference, and it comes before any algorithm is chosen.

**Mode:** `general` for closure idempotence, `specified` for the AI application. **Triangulated** across Fig 8 and Fig 6 (union surplus versus membrane law), low overlap between routes.
**Refuter:** a demonstrable renewal of reach by pure internal composition with no new atom, no differing frame, and no import.

### F5 — Only methods cross the membrane; recordings fail on new tasks (D3)

> **Fig 4 :22** *"Only methods cross up. Only head starts come down."*
> **Fig 4 :25** *"A recording carried upward looks like knowledge and is a description of one occasion."*
> **Fig 11 :70** *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."*

A benchmark score is a recording from one occasion. Transferring it to an unfamiliar task is replaying a past success, which Fig 4 :26 says produces a system that *"repeats a past success and cannot produce a new one."* What crosses is the method: the per-slot residual, the anchor test, the source gate, the refusal. The round trip is lossy, so measure the gap rather than assume the method carried unchanged (Fig 4 :30).

**Mode:** `specified`. **Triangulated** across Fig 4 and Fig 11 (membrane rule versus substituted habitat), distinct actors and currency.
**Refuter:** a recorded confidence from task A that calibrates task B unchanged under a new habitat, with no method carried and no new contact.

### F6 — A vocabulary that cannot refuse can only accumulate (D4)

> **Fig 12 :140** *"A vocabulary that cannot refuse can only accumulate."*
> **Fig 5 :50-55** *"AMENDMENT · the gap has a fifth kind, and the pipeline has no branch for it."* and *"refuted: a term we hold is wrong; a term is owed that says so"*

The four kinds of gap sort what is missing. They do not sort what is wrong. A confidence that is confidently false is not a novel gap to be explained by another scalar; it is a held term whose standing to be composed over must be removed. Operators table :58: *"a refutation is a negation, which is why a vocabulary without it can only accumulate."* Negation is unary, outside the seven bonds (Fig 12 :134-140), so it must be present in the representation, not simulated by adding more positive terms.

**Mode:** `general` for the operator requirement, `specified` for AI systems. **Single-source** for the operator set: Fig 12, the Operators table, and the Fig 5 amendment are one framework document and share an evidence pool, so agreement among them is not two witnesses.
**Refuter:** a system that removes the standing of a held confidence without any unary negation, by addition alone, and whose reach falls accordingly.

### F7 — A confidence is an ordering, not a magnitude on its own (D4)

> **Fig 13 :20** *"ordering, so more and less can be said"*
> **Fig 13 :29-30** *"A state with no structure has no magnitude: three of what, ordered how, varying across what? A structure with no state is empty: an ordering over nothing, a network with nothing at the nodes."*
> **Operators table :48-51** *"comparison / a threshold relation between two quantities"*

A confidence score is a Spectrum-like ordering over outcomes; it needs a state to be an ordering *of*. The calibration claim itself is a ⋛ comparison between the stated confidence and a realised frequency. Operators table :52: *"a goal is a comparison, which is why a vocabulary without it cannot state one."* So "90% confident" is neither a primitive state nor a self-grounding magnitude: it is a threshold relation whose operands must be quantities at that level.

**Mode:** `general`. **Triangulated** across Fig 13 (substrate) and the Operators table (bond type), two different listings with low overlap.
**Refuter:** a confidence ordering that denotes with no state at all, or a ⋛ whose operands are not quantities at the level where it is applied.

### F8 — Two currencies: bits price the description, actions price the settlement (D4)

> **Fig 12 :125-126** *"A composition costs in two currencies, and they do not add. Bits price the description. Actions price finding out whether it holds."*
> **Fig 12 :127** *"They are in different units, so a system holding one accounting cannot compare them"*

A sharper confidence value costs description length; checking whether it is calibrated costs actions against the ground. A system that optimises only one accounting will propose arrangements it cannot afford to test. This is why a calibration metric alone cannot decide a method: it counts the denominator, not the reach (THE_FORMULA step 8).

**Mode:** `general`. **Triangulated** across Fig 12 and Fig 9 :60 (filters versus witnesses), distinct quantities.
**Refuter:** a single-unit accounting that prices both description and settlement without loss and demonstrably notices the shortfall.

### F9 — Filters are for the budget, never for the verdict (D2 and outreach)

> **Fig 9 :60** *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*
> **Fig 7 :35** *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*
> **Fig 2 :42** *"Buy independence in proportion to the cost of being wrong."*

A leaderboard rank, an expected calibration error, a venue's prestige, or a tier label decides what gets tried first. It does not decide whether a representation is calibrated. Selecting checkers for likely agreement manufactures the correlation that disqualifies their agreement (Fig 2 :40).

**Mode:** `specified`. **Triangulated** across Fig 9, Fig 7, and Fig 2 (three separate budget/verdict statements).
**Refuter:** a panel selected for receptiveness whose agreement nonetheless independently refutes the stage-1 shape on a new ground.

### F10 — Which named algorithm wins is a `gap` (D5)

After a genuine re-census D5 has no nameable anchor in the figures. No figure line selects temperature scaling, conformal prediction, Bayesian inference, or evidential heads. Fig 9 :32 says *"you get a kind of thing, never the answer itself."* Fig 13 :134 says *"Unreachable is a verdict here, not a silence,"* and Fig 13 :135 says *"It cannot say which primitive is missing, because naming it would mean already holding it."* Fig 8 :39 says *"So a search that finds nothing is never a proof of absence."*

The world literature supplies candidates. Guo et al. report that *"We discover that modern neural networks, unlike those from a decade ago, are poorly calibrated"* and that *"temperature scaling – a single-parameter variant of Platt Scaling – is surprisingly effective at calibrating predictions"* (PMLR 70, 2017). Angelopoulos and Bates describe conformal sets that are *"valid in a distribution-free sense"* with *"explicit, non-asymptotic guarantees even without distributional assumptions or model assumptions"* (arXiv:2107.07511, 2021). These are frame-specific results with their own assumptions and grounds. They are secondary corroboration at most; they do not close a figure gap, and neither one establishes transfer to arbitrary unfamiliar tasks.

**Mode:** `specified` on the gap verdict, `general` on the limit. **Verdict: `gap`, not a hidden answer.** A re-census that finds a figure line governing method choice, or a ground reading that settles it, would close the gap. More papers in the same pool would not.

---

## 3. Pre-registered refuter

Written here before the conclusion and before any outreach, per the seat rule that *"a falsifier written before the run is a design instrument."*

1. A per-slot residual with positive live mass that stays invisible in the system's calibration report after the system is equipped with per-slot measurement (breaks F1).
2. An anchor whose reading changes when a frame pushes on it, yet calibration is claimed to be settled by it (breaks F2).
3. A channel instrument that remains discriminating across an unfamiliar task while the reported calibration still drifts, with the drift attributable to the ground (breaks F3).
4. Reach renewed by pure internal composition with no new atom, no import, and no differing closure (breaks F4).
5. A recorded confidence from task A that transfers to unfamiliar task B with identical bracket fidelity and no new contact (breaks F5).
6. A system that removes the standing of a held confidence without a unary negation, by addition alone (breaks F6).
7. A figure line that governs the choice among calibration algorithms after re-census, or a ground reading that settles it (closes F10).

If any of 1 to 6 fires, the corresponding finding is withdrawn. Until one is run, no part of this audit is `grounded`.

---

## 4. Recommendation

1. Ship Option B with mode labels on every sentence. Keep the three conditions separate and never average their verdicts into one score.
2. Bind the sought-for shape as an ordinary term before running any experiment (THE_FORMULA, "Direction"), so the preferred answer becomes refusable.
3. Report calibration per slot and per condition, and treat a saturated metric as a channel alarm rather than a result (F1, F3).
4. For an unfamiliar task, ask the SEARCHED question first: is the governing term already in the closure and merely unfound? Only then ask INWARD (sharpen the instrument) and OUTWARD (import from a differing closure), keeping the two opposed (THE_FORMULA step 7; Fig 6 :29-31).
5. Do not name a winning algorithm. The framework returns a shape, not a name. Record any algorithm binding as a provenanced import with a source gate and shadow test (Fig 8 :50-52).
6. *"Only methods cross up. Only head starts come down."* (Fig 4 :22). Send the generator: the residual, the shape, and the refuters, not a recorded conclusion.

---

## 5. Canonical usage check and retraction log

Read after the findings, as required by the canonical usage rule: *"the quotes are the authority, not this summary,"* *"a reading that makes one contradict another has misidentified its domain, not found a flaw,"* the framework returns *"a shape, not a name,"* and *"Indiscernibility is not identity."* THE_FORMULA adds the mode rule and the round-trip gap R_T.

| earlier reading | status after canonical check |
|---|---|
| Fig 13 :20 was first used to call a confidence score "the Spectrum" | **Retracted.** That strains: a structure needs a state (Fig 13 :29-30) and ⋛ is a comparison, not a primitive. Re-census moved the claim to D4 and the Operators table. The strain is preserved here rather than smoothed. |
| "Averaging is invalid" | **Narrowed.** Fig 1 :13 makes a low global average with a live slot a *legal state*. The claim is that averaging can hide a live slot, not that it is forbidden. |
| "Conformal prediction solves unfamiliar tasks" | **Refused.** Its guarantee is conditional on exchangeability, which is a closure assumption in these terms. It corroborates F2, not F4. |
| "Temperature scaling is the figure-derived answer" | **Refused.** It is a world import with its own ground and no figure line. Fig 8 :50-52: convergent derivation and adopted import look identical in the contents; only the record separates them. |
| "Domain D5 is a domain" | **Corrected.** No nameable anchor in the figures, so it is not a domain yet and the verdict is `gap`. |
| "The three conditions can be averaged into a calibration score" | **Refused.** Fig 9 :60 and Fig 1 :19. A single score is a filter for the budget, not a witness for the verdict. |
| Canonical limit on self-certification | **Confirmed.** *"Because it is a metatheory, it cannot be validated, nor can it validate itself"* (Arrival of the Fittest, 2026). This audit is internal consistency, not corroboration. |

**Seven-question recursive derivation (summary).**

1. **Is a confidence a state?** No. It is an ordering (Fig 13 :20) needing a state, and the calibration claim is a ⋛ comparison (Operators table :48-52).
2. **What settles calibration?** An anchor that does not update (Fig 2 :29), never a self-produced metric (Fig 1 :27).
3. **Why does it fail on unfamiliar tasks?** Either the channel decayed (Fig 10 :24) or the closure lacks the atom (Fig 8 :32). These are different questions with different instructions.
4. **Which comes first?** SEARCHED, then INWARD, then OUTWARD (THE_FORMULA step 7). Importing against a budget limit adds an unneeded atom (Fig 8 :42).
5. **What transfers?** A method, not a recording (Fig 4 :22, :25); a synthetic solve proves wiring, never capability (Fig 11 :70).
6. **Can a false confidence be represented?** Only with negation (Fig 12 :140; Operators table :58). Without it the system can be corrected but cannot carry the correction.
7. **Which algorithm wins?** `gap`. The figures return a shape, not a name (Fig 9 :32; Fig 13 :134-135).

**Updated verdict.** The shape survives: per-slot residual, immovable anchor, method transfer, refusal, and renewing reach by import. No named algorithm is licensed by the figures. Strains after re-census: one recorded and retargeted (confidence as Spectrum), none hidden.
