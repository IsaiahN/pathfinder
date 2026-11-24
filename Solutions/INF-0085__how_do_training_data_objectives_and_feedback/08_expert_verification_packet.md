# Expert verification packet: the Tether on training data, objectives and feedback channels

**What this is:** a claim in a form a machine learning researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the three domain verdicts, `general` on the structural shape. Not `grounded`.** No per-slot measurement is claimed. This is a shape and a route, not a result.

## 1. The claim, in one paragraph

What an AI system learns to prioritize is per slot, not one global ranking. Training data acts through contact with an enumerated habitat, and synthetic or benchmark-only data is a substituted habitat that proves wiring rather than capability. The objective is the third dependency link, a comparison that says what would count as progress, and it is the link most likely to lack an instrument; a score the system produces itself cannot be its own ground. Feedback is a channel carrying the error signal back, and that channel decays while the ground does not, so saturation, staleness and pooled readings lose contact with an unchanged world. Human judgment is the right anchor only for questions constitutively about people. The three inputs form a union compound, not a ranked list, and a single lever leaves the intersections standing.

## 2. Three checkable sub-claims

### C1: framework-internal and perception-facing; checkable by reading Figures 1, 10 and 11

- **Statement:** priority is per slot; data changes it through contact; feedback is a decaying channel. A global average can hide a live slot, and a saturated reward signal carries less ground information than a sparse one.
- **Source, verbatim:** Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* Fig 1 :28 *"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."* Fig 11 :40 *"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."* Fig 10 :24 *"the ground does not decay, the channel does"* and Fig 10 :25 *"stale percepts, dropped transients, saturated metrics, pooled readings"*.
- **What to check:** does any per-slot evaluation in your system actually exist, or is the reported priority a single averaged metric? Can you point to a case where reward-model score rose while per-slot ground performance fell?
- **Refuter:** a system with no per-slot structure that still attends reliably to rare live cases; or a feedback channel that cannot saturate, stale, drop or pool at any resolution; or saturation that leaves per-slot priority unchanged.

### C2: objective-facing; checkable by a researcher against the objective actually used

- **Statement:** the objective is a comparison link, not extra information. It is the dependency link most likely to break, and the one with no instrument. Holding data and architecture fixed while changing the comparison yields a different per-slot priority without new data arriving, which by Fig 12 makes two such systems isomers.
- **Source, verbatim:** Fig 3 :10 *"it can say what would count as progress here, in its own terms"*; Fig 3 :27 *"A link with no instrument is not a link that works. It is a link nobody has looked at."*; Fig 12 :117 *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*; Fig 12 :112 *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."* The Operators table :51 adds *"a goal is a comparison, which is why a vocabulary without it cannot state one."*
- **What to check:** does the stated loss actually say what counts as progress in the system's own terms? Is there a standard instrument that measures this, with published failure modes? Do two objectives that differ only in wording make the same comparisons?
- **Refuter:** produce such an instrument, with published failure modes, which retires the "nobody has looked at it" claim; or show that changing the comparison leaves per-slot priority unchanged, which kills the isomer claim and leaves only the functional-group claim.

### C3: ground-facing; checkable against the anchor used for evaluation

- **Statement:** a frame-internal score cannot be an anchor. Training loss, compression achieved, credibility accrued and proxy reward are quantities the system also produces. Human preference is the right anchor only when the question is constitutively about people; for correctness questions it is an instrument, and instruments can be wrong on axes they do not measure.
- **Source, verbatim:** Fig 1 :27 *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :30 *"If it moves when you push on it, it is not an anchor."* Fig 2 :36 *"An anchor is legitimate when the question is constitutively about it."* Fig 2 :38 *"It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."*
- **What to check:** does the score move when the frame is pushed on? Does it track the ground on axes it was not trained on? Gao, Schulman and Hilton (2022) measured proxy reward rising while gold reward fell; reproduce that with per-slot gold labels.
- **Refuter:** exhibit a self-produced score that does not move when the frame is pushed and tracks the ground on untrained axes; or show human preference feedback settling a factual question on an axis humans do not measure, with ground confirmation.

## 3. What is explicitly not claimed

- Not a ranking of data, objectives and feedback. That is a budget filter, not a verdict (Fig 9 :60).
- Not that training loss, compression or reward-model score is a ground.
- Not that human preference settles factual or correctness questions.
- Not that more data adds a new kind of term. Fig 8 :32: *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."*
- Not that synthetic data is useless. It proves wiring, never capability against the original habitat.
- Not that the three levers are separable. Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*
- Not `grounded`. Nothing here is asserted as settled by experiment.
- Not a claim that the six-term substrate decides any of the three domain verdicts.

## 4. Provenance

- Figure text extracted verbatim from Isaiah's 13 SVGs plus the Operators and Symbols tables, local path `FRAMEWORK/reference/03-FIGURES_TEXT.md`, reopened 2026-11-23.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`, mirrored at `https://github.com/IsaiahN/tether/tree/general-agent/figures` (fetched 2026-11-23).
- The loop, modes and direction discipline: `FRAMEWORK/figures/THE_FORMULA.md`.
- Seat rules: `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`.
- Eight essays by Isaiah N, 2026-08 to 2026-11, cited in `05_what_shape_means.md`, all fetched 2026-11-23.
- World papers: Amodei et al. 2016, Christiano et al. 2017, Gao et al. 2022, Shumailov et al. 2023/2024, Gebru et al. 2018/2021. All URLs and quotes in `10_source_ledger.csv`.
- This packet compiled 2026-11-23.

## 5. What would settle it

A ground reading, not agreement. Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."*

1. **Data ablation.** *Arrival of the Fittest* proposes changing a training set to a date cutoff or a single field and testing what the model can still solve. That is a direct per-slot test of C1's data half.
2. **Channel saturation.** Re-run proxy versus gold reward with per-slot gold labels. That tests C1's channel half and C3.
3. **Objective instrumentation.** Produce the standard instrument Fig 3 :27 says is missing.
4. **Proxy independence.** Determine whether a reward model trained on the same preference corpus as the policy has a closure that differs, which settles the open source-gate strain in `01_figure_grounded_audit.md` section 8.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19, :28, Fig 3 :10, :27, Fig 10 :24, :25 and Fig 2 :36, :38. Eight short passages.
2. Check C2 against the objective you actually use: is it a comparison, and is there an instrument for whether it says what counts as progress?
3. Name one per-slot ground measurement in your evaluation stack, or say there is none.
4. Send the refutation. A failure is more useful than an endorsement (Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*).

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
