# The Tether's answer: can human oversight reliably detect errors?

**Mode: `specified` on the structural claims, `general` on the shape, nothing `grounded`.** Simulated derivation checked for internal consistency against the figures, not a ground reading (`05_what_shape_means.md` section 6).

## 1. The residual it answers

The question asks whether "human oversight" has the stable property of reliably detecting errors made by a system that is stronger than people on some tasks and weaker on others. The residual is the gap between what the oversight arrangement predicts about correctness and what the ground returns, measured per slot and never as a single number (Fig 1 :19). It is a union compound (Fig 9 :54), with two overlapping regimes and one shared arrangement.

## 2. The answer, per domain, never averaged

**D1, the system.** The maker produces outputs and a per-slot residual. Its own confidence signal is frame-internal and cannot score it (Fig 1 :27). Nothing in the figures licenses treating the system as the judge of its own errors.

**D2, the human checker.** This is the decisive domain. Fig 2 :36 "An anchor is legitimate when the question is constitutively about it." Human judgment is the *legitimate anchor* only when the question is constitutively about people. "Is this output correct" is not such a question. Fig 2 :37-38: "It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure." The tasks where the system outperforms the person are precisely an axis the instrument does not measure. So a bare person cannot be the verifier for this residual. This is `triangulated` across Fig 2, Fig 11 and the weak-supervision literature.

**D3, the ground.** The only legitimate anchor for correctness is something that settles the question and does not move when a frame pushes on it: a verified dataset, a measurement, a counter, an experiment, a downstream outcome (Fig 2 :29-30). It does not decay; the channel to it does (Fig 10 :24). It is not a third party to a vote.

**D4, the arrangement.** Capability is "a property of agent-and-habitat, never of the agent alone" (Fig 11 :39). Reliability, if it exists, belongs to the whole: interface, case selection, rubric, time, independence, refusal operator and a maintained channel. A test harness proves wiring, never capability (Fig 11 :70). This is `triangulated` with the Bowman et al. result that a person assisted by an unreliable model beat both the model and their own unaided performance.

**Verdicts kept separate.** D1 says nothing about D2. D2's failure does not imply oversight is impossible, because D4 can import a ground and a second frame. D3 is shared by all. D4 is where a repair is possible. No average is taken across them.

## 3. The shape that survives

A reliable oversight arrangement must have all six of the following, each as an ordinary, refusable term:

1. **A legitimate ground** for correctness, named and published, with the human's measured axes stated (Fig 2 :36-38).
2. **A checker whose closure differs** from the maker's, with independence measured by shared evidence rather than headcount (Fig 2 :31-32, Fig 8 :48-49).
3. **Per-slot residuals**, with the high-cost superhuman slots kept visible and never averaged away (Fig 1 :19, :22).
4. **An explicit refusal**, not only a rating scale: "a refutation is a negation, which is why a vocabulary without it can only accumulate" (Operators table :58).
5. **A maintained channel** with a measured round-trip gap. "the ground does not decay, the channel does" (Fig 10 :24); familiarity spends independence, so rotation is refresh (Fig 4 :30).
6. **An unbundled union**, each condition looped separately (Fig 9 :54-58).

No figure line yields a scalar reliability coefficient. Asking for one is a `gap` after a genuine re-census, not a silence and not a failure: "Unreachable is a verdict here, not a silence" (Fig 13 :134).

## 4. What it explicitly does not say

- Not that people are bad reviewers. People are the right anchor for "is this a good answer for a person"; they are instruments for correctness.
- Not that oversight is impossible. A person plus a tool plus a ground is a different arrangement, and the empirical literature reports real gains.
- Not that a reliability number is meaningless. It is a legitimate **filter for the budget**: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict" (Fig 9 :60). It just cannot be the witness.
- Not that zero detected errors proves reliability. "So a search that finds nothing is never a proof of absence" (Fig 8 :39).
- Not that adding reviewers helps. A room without a ground is agreement, not a verdict (Fig 7 :35).
- Not a ground reading. Nothing here is measured by this package.

## 5. What would settle it

A ground reading, not agreement and not prestige. Concretely:

- **Anchor test:** name the ground and show that it does not move when reviewer or system pushes on it.
- **Per-slot detection test:** on the tasks where the system beats the reviewer, report detection rates per error class against that ground, with the high-cost slots separated. This is the test that fires refuter 2 in `01`.
- **Independence test:** show the reviewer's evidence pool is disjoint from the system's, with provenance distinguishing convergent derivation from adopted agreement (Fig 8 :50-52).
- **Refusal test:** show the oversight record carries an explicit negation of a held system claim and recompute the reachable set after it.
- **Channel test:** measure detection before and after repeated calibration, replacing checkers on a schedule; report the round-trip gap R_T.

## 6. The honest stop

This is the limit of the available instruments. The figures return "a kind of thing, never the answer itself" (Fig 9 :32). The arrangement described in section 3 is a shape any settled answer must have, not a result. The lineage is recorded so the stop is checkable: which line governed, which strain remains (verifier non-access versus mere inability to reproduce the output), and what would reverse it. Indiscernibility is not identity. A reviewer whose approval is indistinguishable from a correct verdict is not thereby correct.

## 7. One-paragraph version for outreach

> The Tether does not give a yes or no on human oversight. It says the question bundles several conditions with different grounds, so the first move is to unbundle them. For "is this output correct," human judgment is an instrument, not the anchor: instruments can be wrong on axes they do not measure, and the tasks where the system beats the person are exactly such an axis. Reliability therefore cannot be a property of the person alone; it is a property of an arrangement with a real ground, a checker whose evidence differs from the system's, per-slot residuals, an explicit way to refuse a claim, and a channel to the ground that is re-measured as familiarity spends independence. None of that is measured here. What is offered is the shape any settled answer would have, the refuters written in advance, and the experiments that would close it. Until one runs, the honest answer is unreached rather than unreachable.
