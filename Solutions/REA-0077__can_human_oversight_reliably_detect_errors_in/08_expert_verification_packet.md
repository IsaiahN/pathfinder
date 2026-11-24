# Expert verification packet: human oversight and error detection

**What this is:** a claim in a form a researcher in human oversight, human factors or AI safety can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the structural claims, `general` on the shape, not `grounded`.** No detection rate is asserted. This is a shape and a route, not a result.

## 1. The claim, in one paragraph

The question "can human oversight reliably detect errors in a system that is better than people on some tasks and worse on others" is a union compound, not one question. Its conditions have different grounds, so they cannot be averaged into one reliability coefficient. For a correctness question, human judgment is an instrument and not the anchor: an instrument can be wrong on axes it does not measure, and the tasks where the system exceeds the reviewer are exactly such an axis. Reliability, if it exists, is a property of the whole oversight arrangement (ground, independence, per-slot residuals, an explicit refusal, and a maintained channel), not of the person in isolation. The figures yield that shape and an honest stop; they do not yield a yes or a number.

## 2. Three checkable sub-claims

### C1. Anchor legitimacy, framework-internal; checkable by reading Figure 2

- **Statement:** human judgment is the legitimate anchor only for questions constitutively about people. For "is this output correct," the human is an instrument, and reliability cannot be asserted of an instrument on an axis it does not measure.
- **Source, verbatim:** Fig 2 :36 "An anchor is legitimate when the question is constitutively about it." Fig 2 :37-38 "It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure." Supporting: Fig 2 :29-30 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
- **What to check:** is the residual here about correctness or about human preference? If the task has a verifiable ground, the figure applies as stated.
- **Refuter:** show that correctness in this setting is constitutively defined by human judgment, so the anchor condition is satisfied; or provide a ground reading in which reviewers with no independent correctness instrument detect errors at a non-decaying rate on the very slots where the system beats them, reported per slot.

### C2. Aggregation hides the live slot, framework-internal; checkable by reading Figure 1

- **Statement:** a global detection percentage is a filter for budget, never a witness for reliability. Slots where the system is superhuman and the error is high-cost can carry a live residual while the aggregate looks near zero.
- **Source, verbatim:** Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." Fig 1 :13 "a global R near zero with one live slot residual is a legal state". Symbols table :43-44 "R is measured per slot, never as a single global number."
- **What to check:** does the usual oversight evaluation report a mean, or does it separate the superhuman-task slots and the high-cost error classes?
- **Refuter:** per-slot residuals with the high-cost superhuman slots at zero, measured against a separate ground. If only a mean is reported, the finding is untouched.

### C3. Capability is in the arrangement, framework-internal plus empirically checkable

- **Statement:** "human oversight" cannot carry reliability as a property of the person alone. Capability lives in agent-and-habitat, and a synthetic harness proves wiring rather than capability.
- **Source, verbatim:** Fig 11 :39 "capability is a property of agent-and-habitat, never of the agent alone". Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves." Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."
- **Empirical check:** Bowman et al. 2022 (https://arxiv.org/abs/2211.03540) define the regime as tasks "for which human specialists succeed but unaided humans and current general AI systems fail," and report that people using an unreliable assistant beat both the model alone and their own unaided performance. That is a change of arrangement, not proof that unaided people are strong detectors.
- **Refuter:** an agent-only improvement to the reviewer that moves task correctness without changing contact. The figures themselves name this as the test that would refute the capability claim. Also: a controlled comparison in which a reviewer drawn from a demonstrably different evidence pool changes a per-slot detection result against a fixed ground would establish a genuine second frame, which the claim allows.

## 3. What is explicitly not claimed

- Not that human reviewers are useless, or that a person can never catch a model error.
- Not that oversight is impossible. An arrangement with a ground and independent frames is exactly what the shape requires.
- Not that a detection rate is meaningless. It is a budget filter, not a verdict.
- Not that zero detected errors shows reliability, and not that more reviewers show reliability.
- Not a ground reading. No measurement was taken by this package.
- Not a reliability coefficient, and not a claim that a named instrument is the one the framework selects. Naming a ground is a binding from the task frame, recorded as such.

## 4. Provenance

- Figure text extracted verbatim from Isaiah's 13 SVGs plus the Operators and Symbols tables: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read 2026-11-24.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, local copies read 2026-11-24.
- Seat rules: `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, local copy read 2026-11-24.
- Eight essays by Isaiah N, 2026-08 to 2026-11, read 2026-11-24 and listed in `05_what_shape_means.md`. All share an author and an evidence pool with the figures, so they carry little independent weight.
- Outside sources actually opened: arXiv 2211.03540, 2312.09390, 2307.15217, 1805.00899, 2210.10760; SEP Gödel entry; NIST AI RMF pages; ACM FAccT and CHI pages; PubMed result pages on automation bias and animal error monitoring. Full provenance in `10_source_ledger.csv`.
- This packet compiled 2026-11-24.

## 5. What would settle it

A ground reading, not agreement. Three tests in priority order:

1. **Anchor and ground:** name the correctness ground and show it does not move under pressure from either frame.
2. **Per-slot detection:** on the superhuman-task slots, report detection by error class against that ground, with independence of the checker recorded.
3. **Channel:** measure the round-trip gap R_T and re-measure detection after repeated calibration with fresh frames.

## 6. What an expert can check in twenty minutes

1. Read Fig 2 :36-38 and Fig 1 :19, :22 (four short passages).
2. Check C3 against your own field: is the Bowman et al. result a person-level or an arrangement-level result?
3. Name one instrument that would distinguish a real ground from a rubric that has quietly become one, or say why none is available in your setting.
4. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
