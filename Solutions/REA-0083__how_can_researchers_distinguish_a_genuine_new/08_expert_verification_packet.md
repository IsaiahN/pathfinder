# Expert verification packet: separating a new capability from a better score

**What this is:** a claim in a form an evaluation researcher can check. Mode, derivation, and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the four conditions, `general` on the structural shape, `gap` on the named test. Not `grounded`.** No measurement in this packet establishes that any model has or lacks a capability.

**Standing:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the question it reports on.

## 1. The claim in one paragraph

A score increase does not discriminate between more search inside a closure, a re-bonding over a fixed atom set (an isomer), an import that moves the wall, and a change of contact with the ground. Four conditions do discriminate: (1) per-slot residual on tasks whose ground was not in training; (2) novelty relative to the pre-change atom set, with provenance for any import and an isomer report where atoms are unchanged; (3) demonstrated contact change in a reproduced habitat, since a harness solve proves wiring and never capability; (4) an anchor that does not update on the model's own outputs plus at least one evaluator with a separate evidence pool. The shape is stated before the test, and a refuter is pre-registered. No figure line names a benchmark or threshold, so the discriminator itself is a declared gap.

## 2. Three checkable sub-claims

### C1: Framework-internal; checkable by reading Figures 1, 6, 8 and 12

- **Statement:** composition inside a closure cannot add an atom, so an improvement on already-represented tasks and a genuine new capability are different objects. Over a fixed atom set the difference is an isomer, not a new primitive.
- **Source, verbatim:** Fig 6 :21 "MINT composes inside the closure and can never add an atom." Fig 6 :49 "more search at the same reach: is it in here and unfound? The closure does not change. Same atoms, same wall, more of the space actually visited." Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- **Refuter:** exhibit a behaviour that is not derivable from the pre-change atoms under the held bonds while no import can be identified; or derive it fully from the old atoms, which makes it a search or isomer result and withdraws the novelty claim.

### C2: Evaluation-facing; checkable by an evaluation researcher against practice

- **Statement:** a benchmark is a substituted habitat, so passing it proves wiring and never capability. A public benchmark used in training is not an anchor, and a saturated metric is a channel failure while the ground has not decayed.
- **Source, verbatim:** Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." Fig 11 :39 "capability is a property of agent-and-habitat, never of the agent alone." Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 10 :24 "the ground does not decay, the channel does" and Fig 10 :26 "saturated metrics, pooled readings".
- **What to check:** does the claimed capability survive when the task is moved out of the harness into a reproduced habitat with a ground the model's developers cannot move? Are contamination and metric saturation ruled out? LiveBench's monthly refreshed questions and objective ground-truth answers are a concrete instance of the required design.
- **Refuter:** the capability disappears when contaminated items are removed or the habitat is reproduced; or the score moves while the non-updating ground shows no change in what the system can do.

### C3: Independence and provenance; checkable by reading Figures 2, 6 and 8

- **Statement:** agreement between evaluators who share a corpus and a benchmark is one witness, not two. An import must carry a source gate and a shadow test, because convergent derivation and adopted import look identical in the contents.
- **Source, verbatim:** Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence." Fig 6 :12 "source gate: provenance" and Fig 6 :13 "shadow test: explains a gap". Fig 8 :51 "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them".
- **What to check:** can the record show where the claimed new term came from, and do the two evaluators draw on genuinely separate evidence? If not, the classification is unsupported regardless of how many labs repeat it.
- **Refuter:** two frames with low evidence overlap, each ranging against an anchor neither can move, agree that the behaviour was already in the old closure. This breaks the import claim, not the anchor claim. The two are kept separate deliberately.

## 3. What is explicitly not claimed

- Not a judgment on any named model, lab, or benchmark.
- Not a claim that scaling cannot produce something new. Import and contact change are allowed (Fig 6 :23, Fig 11 :40).
- Not a claim that every bond-level difference is a new primitive. Over a fixed atom set it is an isomer (Fig 12 :117).
- Not a benchmark, threshold, or percentage. The named discriminator is a declared `gap` (Fig 9 :32, Fig 13 :134).
- Not a proof of absence from a negative result (Fig 8 :39).
- Not `grounded`. Nothing here is settled by measurement.
- Not a claim that the framework can validate itself. The essays state that metatheories cannot validate themselves and need an external ground.

## 4. Standing refuter written before the run

From `01_figure_grounded_audit.md` section 4, written before the conclusion and dated 2026-11-24:

1. A behaviour appears that is not composable from the old atoms, yet no differing frame or import can be found.
2. A continuous per-slot metric shows the same smooth trend that the coarse benchmark showed as a jump, with no new term required.
3. The behaviour is derived from the old atoms under an existing bond, so it is an isomer rather than a new primitive.
4. The capability disappears when contaminated items are removed or the task is moved into a reproduced habitat.
5. The score moves while a non-updating ground shows no change in what the system can do.
6. An agent-only improvement moves the ground. This is the figure's own standing refuter, Fig 11 :71-72: "an agent-only improvement that moved the ground would refute the capability claim."
7. Two genuinely low-overlap evaluators agree the behaviour was already in the old closure.

A failure is more useful than an endorsement. Send the refutation, not the agreement.

## 5. Provenance

- Question: reasoning.txt line 102, REA-0083, section 9 (Limits, scaling, and architecture).
- Figure text extracted verbatim from the canonical SVGs: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read 2026-11-24. Citations use `Fig N :line`.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`.
- Eight-step loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`.
- Eight framework essays, four opened directly this session and four carried from the completed exemplar's canonical mapping with that limitation declared in `05_what_shape_means.md`.
- Outside sources opened 2026-11-24: Wei et al. 2022 (TMLR), Schaeffer et al. 2023, White et al. 2025 (LiveBench, ICLR 2025 Spotlight), Wikipedia on overfitting, Goodhart's law, and linguistic competence, plus METR, venue pages, and the ICLR LLM policy post. All in `10_source_ledger.csv`.
- This packet compiled 2026-11-24.

## 6. What an expert can check in twenty minutes

1. Read Fig 6 :21, :49 and Fig 12 :117. Three short passages. Confirm that SEARCHED and isomer are different from import.
2. Read Fig 11 :39-40 and :70. Confirm that a harness solve is not a capability claim under the figure.
3. Read Fig 2 :29 and :40. Confirm that a trained-on public benchmark fails the anchor test and that shared-corpus agreement is one witness.
4. Name one evaluation design that would discriminate among the three structural states, or say why none is available. If you can name one, the declared gap in this packet should be replaced by it.
5. Try to break the claim with the pre-registered refuter. Send the failure, not the endorsement.

**Status of this packet:** simulated derivation, internally consistent with the verbatim figures. It is not a ground reading and cannot settle the question it reports on.
