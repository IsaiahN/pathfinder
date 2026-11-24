# Figure-grounded audit: can human oversight reliably detect errors?

**Mode:** `specified` on the substantive claims, `general` on the structural shape, nothing `grounded`. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status: simulated derivation, not a ground reading.** This document is checked for internal consistency against the figures. By the framework's own rule (*The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself"), it cannot settle the question it audits. See `05_what_shape_means.md` section 6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, all quotes below), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, and the sources in `10_source_ledger.csv`.

---

## 0. The claim under audit and the residual in effect terms

> Can human oversight reliably detect errors in systems that perform better than humans on some tasks but worse on others?

Restated as an effect: a checker (a person) ranges against a maker (a system) whose competence is not uniform. On some slots the checker is below the maker, on others above. The word "reliably" claims a stable property across those slots and across time. The question asks whether that property belongs to the checker.

The residual `R` is the gap between what the oversight arrangement predicts about correctness and what the ground returns. Per the Symbols table, `R` is "the gap between prediction and observation" and "it is always a slice" (Symbols table :38). It is indexed per slot, never aggregated: Fig 1 :19 states "The residual is indexed by object slot, not aggregated." The slots here are individual decisions, error classes, and the two competence regimes (tasks where the system exceeds the human and tasks where it does not).

- **Arity.** Two competence regimes plus an oversight relation. These are overlapping conditions, so the residual is a **union compound**, not one hard question (Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."; Fig 9 :57: "a case in two conditions is not a harder case of either").
- **Symmetry.** The checker and the maker are not interchangeable. The relation "detect an error in" is a comparison against a threshold, not a symmetric bond. The comparison is legitimate only if the checker can range against a ground the maker cannot move.
- **Scale.** First order: one person checking one output. Second order: an arrangement of person, interface, rubric, time budget, ground, and other checkers. The transform between them is lossy, so a claim proved at one scale does not carry to the other without a measured round-trip gap (Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked.").

**Figure-licensed shape of an answer, bound before the run.** Write down what an answer would look like so the sought-for shape becomes an ordinary term that can accrue a residual: (a) a legitimate ground for the question, (b) a checker whose closure differs from the maker's, (c) per-slot residuals with no averaging, (d) an operator that can refuse a claim, (e) a channel to the ground that is kept reachable and re-measured, (f) the union unbundled into separate conditions. Anything claiming "reliability" without these six is a preference masquerading as a term (Formula step 2, "Direction").

### Domain census, before choosing any figure line

One line per domain with actors, currency, anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | type |
|---|---|---|---|---|
| D1, the system (maker) | the model, its corpus, its own confidence signal | per-slot prediction and residual | task correctness, which the system cannot author | part of a union |
| D2, the human checker | the reviewer, their rubric, interface, attention and time | agreement, correction, refusal | should be task correctness; in practice often the reviewer's own judgment | part of a union |
| D3, the ground for correctness | a measurement, verified dataset, counter, experiment, downstream outcome | settled correctness | itself; it does not update on what a frame thinks | the only legitimate anchor for "is this output correct" |
| D4, the oversight arrangement (habitat) | interface design, case selection, feedback, other checkers, rotation | independence and channel fidelity | the ground, kept reachable | compound; the union's own loop |

**Partition or union.** D1 and D2 are not two independent halves of one question. They overlap in evidence, so the whole is a union with a compound intersection, and each condition needs its own loop (Fig 9 :54). D3 is not a party to the disagreement; it is the anchor (Fig 2 :46). D4 is where capability actually lives.

**Dependency order (Fig 3).** First settle which anchor is legitimate (D3), because both instruments are graded against it. Second ask whether the checker can perceive and name the error at all (D2 vocabulary link). Third ask whether the checker's evidence pool differs from the maker's (independence). Fourth keep residuals per slot. Fifth ask whether a refusal can cross back to the maker (channel). Sixth only now evaluate a reliability claim. Optimising a later link cannot rescue an earlier break (Fig 3 :19: "Optimising a link that already works cannot rescue one that does not.").

**Strain test before concluding.** A line that only fits with a strain governs another quantity. The line "Human judgment is the right anchor for is this a good answer for a person" is not stretched to cover correctness; Fig 2 :36-38 explicitly separates the two. No strain is needed for the central finding. Where a strain does arise (the equality of "checker" and "verifier" across scales), it is recorded in section 6 and in `11_audit.md` rather than smoothed over.

---

## 1. Figure census

Quotes are verbatim against `FRAMEWORK/reference/03-FIGURES_TEXT.md`.

| figure | what it governs here | bearing |
|---|---|---|
| Fig 1 The Agent | residual per slot, ground as only metric, frame-internal quantities disqualified | "reliably" is an aggregate; aggregation throws away the live slot |
| Fig 2 The Ground | anchor legitimacy, independence, mirror collapse, correlation valence | human judgment is an instrument for correctness, not the anchor |
| Fig 3 Dependency Chain | link order, reading below the break, instruments | ask which link oversight stops at before asking how good it is |
| Fig 4 The Membrane | lossy cross-scale transform, round trip | person-level and arrangement-level claims need a measured R_T |
| Fig 5 Mint Pipeline | refuted bin, negation requirement, guards | error detection is a refusal, not a score |
| Fig 6 Closure / Reachability | import is the only operator that moves the wall; instruments improved from worse ones | shared closures leave no surplus; a blind checker needs an imported instrument |
| Fig 7 Room Chain | agreement is variation, selection between rooms | adding more reviewers does not add an anchor |
| Fig 8 Union Surplus | idempotent closure, absence is not proof, independence read twice | no errors found is not evidence of no errors |
| Fig 9 Leave / Arrive | describe residual first, union versus partition, filters not witnesses | unbundle the compound before searching for a checker |
| Fig 10 Ground Maintainer | channel decay, verifier non-access, declare stakes | reliability is maintained, not possessed; the reviewer's independence is spent by use |
| Fig 11 The Habitat | capability is agent-and-habitat; test harness is substituted habitat | the question as posed isolates the checker and therefore mislocates capability |
| Fig 12 The Bond | refutation is a negation, not a bond; isomer and functional group | an oversight vocabulary that can only rate cannot carry a correction |
| Fig 13 Minimum Viable Set | unreachable is a verdict; shape not a name; independence condition | the answer returns a shape and a stop, not a yes/no number |
| Operators table | negation is unary; a vocabulary without it can only accumulate | refusal must be available to the checker |
| Symbols table | `R` is a slice, measured per slot | per-slot reporting is mandatory |
| Formula | five bins, direction limit, mode rule | refusal precedes mint; the sought-for shape must be bound |

---

## 2. Findings

### F1. Human judgment is the wrong anchor for "is this output correct" (decisive)

Fig 2 :36 states "An anchor is legitimate when the question is constitutively about it." Fig 2 :37-38 then separates two cases:

> **"It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."**

The residual here is about errors, that is, correctness of an output, not about whether an answer is good for a person. So the human is an **instrument**, not the anchor. The condition "the system performs better than humans on some tasks" names exactly an axis the instrument does not measure. An instrument cannot be credited with reliability on an axis it does not measure, and more careful use of the same instrument does not add the missing axis.

Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." This is **triangulated** across Fig 2 :36-38 (anchor legitimacy) and Fig 11 :39 (capability is agent-and-habitat) and the world source on weak supervision below (low overlap: formal framework versus empirical alignment study). Verdict: the bare claim "human oversight detects errors" is not figure-licensed.

**Refuter:** a ground reading in which human reviewers, with no independent correctness instrument, detect errors at a per-slot rate that stays flat on the very tasks where the system outperforms them. Or a demonstration that "correctness" here is constitutively defined by human judgment, which would make the human a legitimate anchor. Either fires F1.

### F2. Independence collapse: the checker and the maker are often one frame with two names

Fig 2 :31-32 defines independence by shared evidence. Fig 8 :48-49:

> **"Two frames that overlap almost completely are one frame wearing two names."**

Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool." A human reviewer trained on the same corpus, using the same rubric and the same model of correctness as the system, contributes no surplus. The reviewer's approval is the pool talking. This matters especially on the tasks where the system is stronger: there the reviewer has even less independent purchase on the error.

Fig 7 :12-13: "same closure, handed along; agreement compounds, evidence does not" and Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." Adding reviewers selected for likely agreement manufactures the disqualifying correlation.

**Triangulated** across Fig 2, Fig 7 and Fig 8 (different diagrams, same independence quantity), with the world sources on reward-model overoptimisation and on debate as corroboration. **Refuter:** show that the reviewer's evidence pool is genuinely disjoint from the maker's and that the union produces a surplus the maker's closure cannot reach, measured against the ground. If the pools overlap, this finding stands.

### F3. "Reliably" is an aggregate that hides the live slot

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22:

> **"Aggregating across slots is how a live signal disappears into an average."**

Symbols table :43-44: "R is measured per slot, never as a single global number." Fig 1 :13 permits "a global R near zero with one live slot residual is a legal state". A system that is superhuman on common tasks and subhuman on rare, high-cost ones can show excellent aggregate oversight accuracy while the residual is live exactly where the human is weakest. A single "reliability" percentage is a frame-internal figure of merit, and Fig 1 :27 says a frame "cannot score itself with a quantity it also produces."

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." Aggregate detection rate is a filter for allocating review budget; it is not a witness for reliability.

**Triangulated** across Fig 1 and the Symbols table, plus Fig 9's filter/witness rule. **Refuter:** report per-slot residuals with the high-cost slots separated, and show the live slot is zero. If only a mean is reported, the finding is not touched.

### F4. Error detection is a refusal, and a rating-only vocabulary cannot carry it

Fig 5 :53 names the fifth bin: "refuted: a term we hold is wrong; a term is owed that says so". The Operators table :58 states "a refutation is a negation, which is why a vocabulary without it can only accumulate." A rubric that only asks a reviewer to rate, approve, or assign a confidence has no way to record that a held claim is false; it can only add another score. Formula step 2 requires a refusal before a mint when the residual is "REFUTED".

Fig 6 :21: "MINT composes inside the closure and can never add an atom." If the missing thing is a refusal of a claim the system holds, composing more scores inside the same vocabulary will not produce it.

**Triangulated** across Fig 5, the Operators table and Formula step 2. **Refuter:** exhibit an oversight record whose vocabulary contains an explicit negation operator exercised at least once on a system claim, with the refusal stamped and the reach recomputed. Absent that, the finding holds.

### F5. Capability lives in agent-and-habitat, not in the person in isolation

Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone." Fig 11 :40:

> **"An improvement that does not change contact changes nothing, however much it improves."**

Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." The question as phrased isolates "human oversight" as if reliability were a property of the person. It is a property of the arrangement: who selects the cases, what the interface shows, whether a ground is reachable, how long the reviewer has, and whether another frame can be imported. A study that shows reviewers succeeding on a curated synthetic set proves the wiring of that set, not oversight capability in the real habitat.

**Triangulated** across Fig 11 and the Bowman et al. study below (low overlap: framework metalaw versus empirical HCI experiment). **Refuter:** the framework itself names the one that would break this: "an agent-only improvement that moved the ground would refute the capability claim" (Fig 11 :72). Concretely, show a reviewer-only change that moves task correctness without changing contact. No such result is recorded here.

### F6. No detected errors is not evidence of no errors

Fig 8 :39: "So a search that finds nothing is never a proof of absence." Fig 9 :44: "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing." Fig 6 :27 notes that from inside a frame, depth and genuine absence look the same.

An oversight regime that reports zero detected errors is therefore silent, not settled. This is the exact reason the word "reliably" cannot be certified from oversight logs alone: the log is produced by the instrument whose blind spots are in question.

**Triangulated** across Fig 6, Fig 8, Fig 9. **Refuter:** a sealed, enumerated, finite case space with a proof that every case was visited by an instrument capable of detecting every error class. No such seal exists for an open task environment.

### F7. The channel decays even though the ground does not

Fig 10 :24: "the ground does not decay, the channel does." Fig 10 :25-26 lists "stale percepts, dropped transients, saturated metrics, pooled readings". Fig 10 :59: "an interest in the outcome is unavoidable, an interest in the reading is disqualifying." Every correction raises correlation between corrector and corrected, so the reviewing channel that once caught failures becomes less able to catch the next one (Seat Map, "The Shelf Life"). A property called "reliable" must be re-measured; it cannot be assumed from past performance.

Fig 10 :47: "a convention that decides an outcome has stopped being one." If the reviewer's rubric quietly becomes the definition of correctness, the arrangement has collapsed into one frame checking itself.

**Triangulated** across Fig 10 and the seat map's shelf-life section. **Refuter:** a measured independence renewal schedule showing detection rates do not degrade after repeated calibration, with a fresh frame replacing the calibrated one. If independence is not renewed, this finding stands.

### F8. The chain breaks at vocabulary, and the break is invisible from above

Fig 3 :25-27 describes the middle link: having terms for what a situation affords and being able to say what would count as progress has "neither" obvious failures nor obvious tests, "so it attracts the least attention and the fewest instruments." Fig 3 :27:

> **"A link with no instrument is not a link that works. It is a link nobody has looked at."**

Fig 3 :22-23: a reading taken below the break "is not a weak reading. It is a reading of nothing." Where the system is superhuman, the reviewer may lack terms for what its output affords. Asking that reviewer to detect errors is asking for a reading at a link whose input never arrived.

**Single-source for the structural claim** (Fig 3), with the weak-supervision source below as low-overlap corroboration of the empirical side. **Refuter:** an instrument that makes the system's affordances representable to the reviewer, with the per-slot residual before and after recorded. If the residual does not move, the finding about that link is not discharged.

### F9. More reviewers cannot substitute for a ground

Fig 2 :42: "Buy independence in proportion to the cost of being wrong." Fig 7 :12-13: "same closure, handed along; agreement compounds, evidence does not." Seat Map :283: "A room reaching a conclusion without the ground is agreement, and agreement among frames is a weighted average of influence. Adding people raises the vocabulary and does not add an anchor." Fig 13 :38: "independence is how little two frames draw on the same evidence, and it is what makes their agreement mean anything."

**Triangulated** across Fig 2, Fig 7 and Fig 13. **Refuter:** a controlled comparison where adding a reviewer drawn from a demonstrably different closure and different evidence pool changes a per-slot detection result against a fixed ground. That is a genuine second frame, not a second vote.

### F10. What survives: the shape, not a yes or no

Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 13 :134: "Unreachable is a verdict here, not a silence." The figures do not yield a scalar reliability coefficient. They yield the constraints any such coefficient would have to satisfy, and they yield a stop when the available instruments cannot distinguish. The honest output is the shape from section 0 plus a list of what would settle it:

1. a legitimate anchor for correctness (measurement, verified set, counter, experiment);
2. a checker whose closure differs from the maker's, with measured independence;
3. per-slot residuals, never a single mean;
4. an explicit refusal operator, not only a rating scale;
5. a maintained, re-measured channel with a round-trip gap R_T;
6. the union unbundled, each condition looped separately.

**Verdict status:** F1 is `triangulated`; F2, F3, F4, F6, F7, F9 are `triangulated`; F5 is `triangulated` with one named possible refuter from the figures themselves; F8 is `single-source` for the figure claim with empirical corroboration. A numeric yes/no reliability rate is a `gap` after re-census, because no figure line governs a scalar and no ground reading was taken.

---

## 3. Pre-registered refuter

Written before the conclusion, per Seat Map :287: "a falsifier written before the run is a design instrument, not only an honesty device." The shape claim is refuted if any of the following holds:

1. **Anchor reversal.** A ground reading shows that human judgment is constitutively the anchor for the question being asked (correctness is defined by the judgment), so Fig 2 :36-38 no longer applies.
2. **Flat per-slot detection.** Human reviewers, with no independent correctness instrument, detect errors at a non-decaying rate on the exact slots where the system outperforms them, measured against a separate ground and reported per slot.
3. **Independence surplus.** A reviewer whose evidence pool is demonstrably disjoint from the maker's produces a detection surplus the maker's closure cannot reach, with provenance showing convergent derivation rather than adopted import.
4. **Vocabulary sufficient.** A rating-only oversight vocabulary is shown to carry an explicit refusal of a held system claim, with the refusal stamped and the reachable set recomputed.
5. **Capability isolated.** An agent-only improvement to the reviewer moves task correctness without changing contact, which is the refuter Fig 11 itself names.

If any fires, the corresponding finding is withdrawn and the shape is revised. Until one is run, no part of this may be labelled `grounded`.

---

## 4. Recommendation

1. Do not answer the question with a single reliability number. Unbundle the union first (Fig 9 :54) and name which condition is being measured.
2. Put a real ground in the arrangement: a verified dataset, a counter, an experiment, a downstream outcome. Keep the human as an instrument with known axes, and publish those axes (Fig 2 :36-38).
3. Report per-slot residuals and keep the high-cost superhuman slots visible (Fig 1 :19, :22).
4. Give the checker a refusal operator, not only a rating scale (Fig 5 :53, Operators table :58).
5. Recruit at least one frame from a different closure and different evidence pool, and record provenance so convergence is not mistaken for adopted agreement (Fig 8 :50-52: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them").
6. Re-measure independence on a schedule. Rotation is refresh; familiarity is decay (Fig 10 :24).
7. Send the residual and the refuter first, never the source (Fig 10 :52: "Bring a characterised residual, never the source.").

---

## 5. Canonical usage check

Read after the first four sections, and governing how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo" and "the quotes are the authority, not this summary." A reading that makes one figure contradict another has misidentified its domain. The framework returns "a shape, not a name" and stops where instruments can no longer distinguish, recording lineage so the stop is honest. This forbids reading F10 as a numeric answer.
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the seat reads the ground and does not ask the ground's maintainer to decide design questions the figures already decide. "Use filters for the budget and witnesses for the verdict" applies to oversight metrics as much as to lead scores.
- `THE_SEAT_MAP_Field_Guide_amended.md`: the outside frame (Seat 4) verifies nothing and checks nothing; it reads shape without referent and produces corrections on shape and the question "could this have been anything else?" That is the role the outreach artifacts address, and the reason the first contact carries the residual rather than the framework.

No figure line needed a strain to produce the findings above. Two apparent tensions were resolved by re-census and are recorded below.

---

## 6. Retractions and confirmations

Corrections are kept visible. Nothing earlier is silently erased.

| earlier reading | status after re-census and canonical check |
|---|---|
| "Human oversight cannot work" as a blanket verdict | **Retracted.** Too strong. F1 says human judgment is not the anchor for correctness. It does not say a person cannot be a useful instrument inside an arrangement with a separate ground. The retained claim is narrower and checkable. |
| "Bowman et al. conflicts with the figure verdict because participants using an unreliable assistant outperformed both" | **Retracted as a conflict.** Re-census: that result corroborates F5, capability is agent-and-habitat. It tests a person plus a tool plus a ground, not a person in isolation. |
| "The checker must be unable to produce the answer, so a human reviewer is disqualified" | **Narrowed.** Fig 10 :42 is a soundness condition on a verifier that reconstructs the claim. Humans reviewing outputs they cannot reproduce are not thereby sound; the condition still requires non-access to the criterion. The earlier blanket disqualification was over-read. |
| "Negation is unavailable to human reviewers" | **Retracted.** Negation is available to people. The figure point is structural: a vocabulary that records only ratings cannot carry a refusal. The requirement is on the record, not on human capacity. |
| "This is one hard question about reliability" | **Refuted by re-census.** It is a union compound (Fig 9 :54, :57). Kept as F0 in the census, and the verdicts are never averaged. |
| "Zero errors found means oversight works" | **Refused, not merely unsupported.** Fig 8 :39 and Fig 9 :44 are categorical. |
| Apparent strain: Fig 2 makes the human an instrument, Fig 11 makes the person part of the capability | **Not strained.** Fig 2 governs anchor legitimacy for a specific question; Fig 11 governs where capability resides. Different objects. Re-census closes it. |
| Apparent strain: Fig 10 verifier non-access versus a human who cannot reproduce a superhuman output | **Named strain, not hidden.** Non-access to the criterion is required, but mere inability to produce the answer is not sufficient for soundness. The second-seat audit in `11_audit.md` carries this as an open item, not a correction. |

**Final status after re-census.** Strains: one live (verifier non-access versus mere non-reproducibility), named in F1 and in `11_audit.md`. Gaps: one (a numeric reliability verdict), stated plainly. No finding was smoothed over to force a yes or no.
