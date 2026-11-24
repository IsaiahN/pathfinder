# Figure-grounded audit: practices for reproducible computational results in complexity science

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured and compared. The practice set is a `specified` shape; the structural claims are `general`. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (2026-11-19): LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** Local framework: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`. Eight essays at `adventuresinml.substack.com`, opened 2026-11-22. Five external reproducibility sources, all opened 2026-11-22, listed in `10_source_ledger.csv`.

---

## 0. The claim under audit

> What practices would make computational results in complexity science more reproducible across software, data, and parameter choices?

**Stated as an effect.** A computational result is published. A second party, using different software, different data, or different parameter choices, tries to obtain the same result. The residual `R` is the gap between the published result and what the second party obtains. The question asks which recorded constraints shrink `R` without hiding it inside agreement.

**Mode discipline (Formula, "Direction").** "make the sought-for shape an ORDINARY TERM - write down what an answer would look like, bind it, and let it accrue a residual like anything else." Binding before the run:

> A reproducibility practice is a recorded constraint that survives a change of frame and lets an independent party range against the same ground.

This binding is a term in the library, so it can accrue a residual and be refused. Without it, the word "reproducible" would be a preference invisible to every check below.

**What an answer would look like.** A list of practices each with: an actor, a currency, an anchor, a figure line that governs it, a stated mode, and a refuter. Practices that only increase agreement among frames sharing an evidence pool are excluded before the verdict, not averaged into it.

---

## 1. Figure census

| figure | bearing on this residual | verdict |
|---|---|---|
| **1 The Agent** | `R` is per slot; frame-internal quantities (coverage, predicates minted) are disqualified | no slot means no diagnosis; counts of artifacts are not reproducibility |
| **2 The Ground** | anchor, independence, the two collapses, tolerance of correlation | governs the verdict: triangulation, not negotiation |
| **3 Dependency Chain** | ordered by dependency; the middle link has no instrument | governs the order of practices |
| **4 The Membrane** | round trip, measured gap `R_T`, only methods cross up | governs why a result is not an identity and why a method must be reapplied |
| **5 Mint Pipeline** | three guards as a product; acceptance is a bargain | a checklist is a gate, not a settlement |
| **6 Closure / Reachability** | import moves the wall; search at the same reach is the third question | governs when to re-run versus when to import an independent frame |
| **7 Room Chain** | agreement is variation; mirrors are one long room | a room of agreeable readers cannot corroborate |
| **8 Union Surplus** | low overlap and provenance; residual first, frame second | governs which re-runs buy evidence |
| **9 Leave / Arrive** | describe the residual first; unbundle a union; filters versus witnesses | governs the three-way split and the status of badges |
| **10 Ground Maintainer** | keep the anchor reachable; the channel decays; provenance of rulings | governs archival duty and the seat that owns it |
| **11 The Habitat** | capability is agent and habitat; enumerate; a harness is a substituted habitat | governs software, data and parameter conditions as habitat |
| **12 The Bond** | the arrangement is the substance; two currencies that do not add | governs lineage, parameter arrangement and cost accounting |
| **13 Minimum Viable Set** | the record is what makes a composed term verifiable; decidability | **the decisive figure for the answer** |
| **Operators table** | ⋛ comparison, − subtraction, → sequence | agreement is a threshold relation; progress is a subtraction |
| **Symbols table** | `R` is the aim, per slot; the ground is the anchor | vocabulary for the residual and the anchor |
| **THE_FORMULA.md** | steps 2, 4, 5, 6, 7; mode rule | gates are not settlement; `R_T` is the cross-scale error |
| **Seat Map** | Seat 3 keeps the anchor reachable; Seat 4 reads shape without referent | division of labour for checking |

Strained readings are named in section 7, not smoothed over.

---

## 1a. Domain census (before any figure line was chosen)

**R by arity, symmetry, scale.**

- **Arity: three, and overlapping.** Software, data, and parameter choices are three conditions under which the result can move. They are not three isolated questions. A result can fail across software and data at once, so this is a **union compound** (Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."), not a partition.
- **Symmetry: a threshold comparison, not identity.** The second result is compared with the first by ⋛ (Operators table :48 "a threshold relation between two quantities"), with a declared tolerance. It is not ≡. The round trip is lossy (Fig 4 :27).
- **Scale: three.** Within one run (one frame). Across frames (a second team). Across strata (a method carried up from one run and brought down into another).

**One line per domain: actors, currency, anchor.**

| domain | actors | currency | anchor | nameable anchor? |
|---|---|---|---|---|
| D1 original run | code, data, parameters, seeds, RNG, hardware | residual `R` per slot against the dataset | the dataset or experiment the model was fit against | yes: a named measurement |
| D2 reproducing party | a second team with different software or independently built artifacts | agreement within tolerance versus residual | the same ground, never agreement with D1 | yes: the same named measurement |
| D3 transmission channel | artifact, lineage record, abstracted method, maintainer seat | bits (description) and actions (cost to settle) | the ground, which must stay reachable | yes: the ground, through a decaying channel |

No domain is admitted without a nameable anchor. All three have one, so all three are domains.

**Partition or union.** D1 and D2 are separate frames ranged against one anchor (a union of two frames, not a partition of one question). Inside the residual, software, data and parameters form a union compound with intersections. D3 is a channel between D1 and D2, not a fourth condition.

**Order by dependency (Fig 3).** Perception: can the second party tell what the result was and what it was measured against. Vocabulary: are there terms for versions, configurations, seeds and raw readings. Objective: what counts as agreement, stated in the second party's own terms. Planning: a route to re-run under a changed setup. Learn and carry: name what worked, verify it, carry it as a method. The break usually falls between vocabulary and objective (Fig 3 :25-26 "having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments.").

---

## 2. Findings

### F1: The lineage is the proof, not the artifact (decisive)

Fig 13 :127 "The array cannot be checked by inspection, so the record is what makes it verifiable."
Fig 13 :128 "Nothing about a composed term tells you, from looking at it, which route produced it or whether that route was available."
Fig 13 :130 "A term carries the atoms it was built from and the bonds that joined them. That record is not documentation of the term. It is the term."
Fig 13 :132 "The first is provenance: how did this come to be, and from what. The second is decidability: given the library as it stands, could this have been reached at all."
Fig 13 :140-141 "not only what was concluded, but what could have been concluded, and what would have had to be true for the answer to differ."
Fig 10 :62 "A ruling carries provenance like an atom."
Fig 10 :63 "The residual it answered, the reasoning, the date, in a record the seats below can read."

A published number, plot or agent trace is a projection. The reading does not determine the route that produced it. Fig 13 says the order is not recoverable from the artefact; it is recoverable from the lineage. So the first practice is to record atoms (program names and exact versions, data provenance and checksums, parameter values, random seeds, hardware) and bonds (the typed, executable order in which they were combined), plus the residual the run was meant to reduce, the reasoning, and the date.

World corroboration, low overlap with the figures: Sandve et al. (2013) Rule 1 requires the name and version of the program and the exact parameters and inputs for every step; Wilson et al. (2017) requires "record all the steps used to process data"; Wilkinson et al. (2016) extends the requirement to "algorithms, tools, and workflows." Three separate author groups, three venues (PLOS Computational Biology twice, Scientific Data once), one shared topic. Partly one evidence pool, declared as such.

**Mode: `specified`, triangulated** (Fig 13 plus Fig 10 plus three world sources with no framework-author overlap).
**Refuter:** exhibit a published artifact alone from which an independent party can decide both provenance (how it was made) and decidability (whether it could have been reached from the declared library), with no lineage record. If that exists, F1 is false.

### F2: Reproducibility is ⋛ within tolerance, not ≡ identity

Fig 4 :27 "The transform between scales loses information, and that is the point."
Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."
Fig 4 :31-32 "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."
Fig 12 :95 "Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."
Operators table :51 "a goal is a comparison, which is why a vocabulary without it cannot state one"
Operators table :46 "progress is a subtraction, which is why a vocabulary without it cannot say how far along it is"

A method abstracted from one run and reapplied in another undergoes a lossy transform. Demanding bitwise identity confuses repeatability with reproduction and sets a target the theory says cannot be reached across a membrane. The right bond is ⋛: state what counts as agreement and what would count as a failure before the comparison. The ACM Artifact Review and Badging policy (2020) says the same in metrological terms: "exact replication or reproduction of results is not required, or even expected. Instead, the results must be in agreement to within a tolerance deemed acceptable for experiments of the given type."

**Mode: `specified`, triangulated** (Fig 4 plus Operators table plus ACM, low overlap).
**Refuter:** exhibit a case where bitwise identity is achievable across different software stacks and is the correct criterion for reproducibility. If so, the round trip is not lossy at that boundary and F2 falls.

### F3: Independence is the parameter; agreement is not the witness

Fig 2 :29-30 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."
Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence."
Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you."
Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"
Fig 2 :42 "Buy independence in proportion to the cost of being wrong."
Fig 7 :35 "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."
Fig 7 :36 "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."
Fig 8 :49 "Two frames that overlap almost completely are one frame wearing two names."

Re-running the same container, same seed and same data is a mirror. It can find a hardware fault or a transcription error; it cannot corroborate the claim. Reproduction across software means a frame whose closure differs (Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."). The ACM definitions make the same three-way cut: repeatability (same team, same setup), reproducibility (different team, same setup, using the author's artifacts), replicability (different team, different setup, independently developed artifacts). Only the last two buy independence, and only in proportion to the cost of being wrong.

**Mode: `general`, triangulated** (Fig 2, Fig 7, Fig 8, ACM; four low-overlap routes to the same boundary).
**Refuter:** exhibit a case where agreement between two frames that draw on the same code, data and seed counts as evidence for the world. If so, correlation is not disqualifying and F3 fails.

### F4: Keep the anchor reachable; the channel decays

Fig 10 :24 "the ground does not decay, the channel does"
Fig 10 :25-26 "stale percepts, dropped transients, saturated metrics, pooled readings"
Fig 10 :29 "→ keep the anchor reachable"
Fig 11 :43 "The habitat is enumerated, never composed."
Fig 11 :44 "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."

Versions rot, links break, metrics saturate, readings get pooled. The failure looks like a working channel from inside, because every other seat reads through it. So the second practice set is archival and enumerative: preserve exact versions and raw data; keep intermediate results; record seeds; list everything in contact with the residual (toolchain, OS, dependencies, data source, preprocessing, parameter grid, stopping rule) outward until the cascade stops mattering. Own this in a seat that does not author the results (Seat Map, Seat 3; Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it.").

Sandve Rule 3 (archive exact program versions), Rule 5 (record intermediate results), Rule 6 (note random seeds) and Rule 7 (store raw data behind plots) are independent support. FAIR adds persistence and machine-actionable metadata, and notes that "all scholarly digital research objects" including workflows need the treatment.

**Mode: `specified`, triangulated** (Fig 10 plus Fig 11 plus Sandve plus Wilkinson).
**Refuter:** exhibit an artifact that remains self-describing and replayable with no maintenance and no external record of versions. If such an object exists, the maintainer's office is unnecessary and F4 narrows.

### F5: A test harness is a substituted habitat

Fig 11 :66 "Isolation is not removal of the habitat. It is substitution of one habitat for another."
Fig 11 :68 "what you failed to reproduce is invisible until the goal fails"
Fig 11 :69 "what you unintentionally introduced is invisible until it acts"
Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."

A benchmark run on generated data proves that the pipeline executes. It does not prove that the result survives contact with the data and conditions the claim was about. For complexity science this is acute: agent based models are sensitive to initial conditions, interaction rules, boundary conditions and the random stream. Enumerate the habitat and reproduce the conditions, not merely the code path. A synthetic test is valid evidence for wiring; it is invalid evidence for capability.

**Mode: `specified`, single-source for the figure line** (Fig 11), with a partial corroboration from ACM's "different experimental setup" definition of replicability. Not triangulated to the figures.
**Refuter:** Fig 11 :71-72 already names one: "an agent-only improvement that moved the ground would refute the capability claim." Concretely, show that a result on a synthetic harness transfers to the real system without reproducing any of the enumerated contact conditions.

### F6: Two currencies: bits and actions do not add

Fig 12 :125 "A composition costs in two currencies, and they do not add."
Fig 12 :126 "Bits price the description. Actions price finding out whether it holds. They are in different units, so a system holding one accounting cannot compare them and will not notice the shortfall."
Fig 12 :130 "Summing them into one figure is the error this names, not the fix for it. A price in bits and a price in actions are two readings, held apart."

A reproducibility package must report both. Bits: length of the config, number of pinned dependencies, clarity of the lineage. Actions: compute spent, number of runs, breadth of the parameter sweep, cost of settling agreement. A single "reproducibility score" that adds them is the named error. Sandve's "exponential number of possible combinations of software versions, parameter values, pre-processing steps, and so on" is an action statement, not a description-length statement: enumerating the grid is a budget, not a line of code.

**Mode: `specified`, single-source for the figure definition**, corroborated by Sandve's combinations sentence and by ACM's separate badging of "Artifacts Evaluated" (description) and "Results Validated" (settlement).
**Refuter:** exhibit a unit in which the cost of describing a configuration and the cost of executing the search for it add meaningfully, such that a single summed number predicts reproducibility better than the two held apart.

### F7: The middle link: a parameter list is a dictionary, a workflow is a grammar

Fig 3 :19 "Optimising a link that already works cannot rescue one that does not."
Fig 3 :20 "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."
Fig 3 :26-27 "having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."
Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at."
Fig 12 :111 "A vocabulary without bonds can name a state and cannot name a route to one."

Publishing a list of parameter values supplies the dictionary. It does not supply the grammar: which value bound to which state, in which order, under which stopping rule, compared to which tolerance. Most effort lands above the break (more documentation of already visible steps) because those measurements already exist. The missing instrument is the declaration of what counts as progress. Formula "Composition": "a plan is a sequence, a goal is a comparison, progress is a subtraction." A runnable controller script with a stated tolerance supplies all three.

**Mode: `general`, triangulated** (Fig 3 plus Fig 12 plus the Operators table).
**Refuter:** show that a parameter list with no stated comparison and no executable order is sufficient for an independent party to decide agreement. If so, the link below the break is working and needs no instrument.

### F8: Software, data and parameters are a union compound, not three levers

Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
Fig 9 :57-58 "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."
Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

Pinning software versions clears the software-only region. It leaves the intersections standing, where the result fails because a version change altered a preprocessing step that a parameter value made sensitive to a data revision. Each condition needs its own loop; then the intersections must be treated as a specific compound with its own ground. Badges, checklists and reproducibility scores are filters for the budget. They decide what gets tried; they do not settle whether the result holds.

**Mode: `general`, single-source for the figure line**, with the operational distinction corroborated by ACM's "Artifacts Evaluated" badge (an audit) versus "Results Validated" (an independent settlement).
**Refuter:** exhibit one lever that closes the residual across all three conditions including their intersections, with no separate handling of the compound. If so, the union reading is wrong.

### F9: More search at the same reach is the first question, not an import

Fig 6 :49 "more search at the same reach: is it in here and unfound? The closure does not change. Same atoms, same wall, more of the space actually visited."
Fig 6 :50 "Fails by spending budget on a region already swept. Distribute the search, and keep the searchers independent."
Fig 8 :54 "The atom cannot be derived from inside A. But the union is searchable from contact, so underivable is not unknowable."

For a parameter sweep: if the reproducing party cannot hit the published regime, first ask whether the answer is already in the declared space and was not found. The remedy is distributed, independent search over the grid, not a new model or a new instrument. Importing a new atom against a budget limit "adds an atom that was not needed" (Fig 6 :51-52), and Fig 6 prices a wrong atom above starting from primitives. This is why F3's independent frame and F9's distributed search are different instruments and must not be read against each other.

**Mode: `specified`, single-source**, corroborated by Fig 8's searchable-from-contact claim.
**Refuter:** show a case where a failed parameter search was closed only by importing a primitive that was genuinely absent from the closure, and where no amount of independent search at the same reach would have found it.

### F10: What survives, and with what mode

| practice | mode | figure warrant | status |
|---|---|---|---|
| Record the lineage: atoms, bonds, residual answered, reasoning, date | `specified`, triangulated | Fig 13 :127-130, Fig 10 :62-63 | survives |
| Declare the tolerance before the comparison (⋛, not ≡) | `specified`, triangulated | Fig 4 :27-32, Operators :51 | survives |
| Buy one independent range against the same ground | `general`, triangulated | Fig 2 :31-42, Fig 7 :35-36 | survives |
| Keep the anchor reachable; enumerate the habitat | `specified`, triangulated | Fig 10 :24-29, Fig 11 :43-44 | survives |
| Reproduce contact conditions, not only the harness | `specified`, single-source | Fig 11 :66-70 | survives, untriangulated within figures |
| Report bits and actions separately | `specified`, single-source | Fig 12 :125-130 | survives, untriangulated within figures |
| Turn the parameter list into a runnable grammar with a comparison | `general`, triangulated | Fig 3 :19-27, Fig 12 :111 | survives |
| Unbundle software/data/parameters, then treat the compound | `general`, single-source | Fig 9 :55-58 | survives |
| Search at the same reach before importing | `specified`, single-source | Fig 6 :49-52 | survives |
| A single reproducibility score that adds all of the above | **refused** | Fig 12 :130, Fig 9 :60, Fig 2 :40 | fails |

---

## 3. Pre-registered refuter

Written before the recommendation, per Fig 10's discipline: a check a maker has not seen cannot be built around. The shape claim is refuted if any of the following holds:

1. **Lineage refuter.** An independent party can decide provenance and decidability of a published result from the artifact alone, with no record of versions, parameters, seeds, order or residual. Breaks F1 and Fig 13 :128.
2. **Independence refuter.** Two re-runs drawing on the same code, same data and same seed count as a verdict for the world, either in a journal's standard or in a working group's decision. Breaks F3 and Fig 2 :40.
3. **Tolerance refuter.** Bitwise identity across two different software stacks is both achievable and the correct acceptance criterion for reproduction. Breaks F2 and Fig 4 :27.
4. **Habitat refuter.** A synthetic harness result transfers to the real system with no reproduction of the contact conditions. Breaks F5 and Fig 11 :70.
5. **Currency refuter.** A single summed number over description cost and settling cost predicts reproducibility better than the two reported apart. Breaks F6 and Fig 12 :130.

If any fires, the corresponding practice is withdrawn. No part of this package is `grounded` until a controlled comparison on a real complexity-science model has run these five checks and recorded the outcome.

---

## 4. Recommendation

1. **Ship the lineage with the result.** Machine-readable manifest: program names and exact versions, dependency lock, data identifier and checksum, preprocessing steps, parameter values, random seeds, hardware, run order, tolerance, and the residual the run was meant to reduce. Date it and stamp its origin.
2. **Write the acceptance criterion before the re-run.** State the tolerance, the comparison bond ⋛, and what would count as a failure. Do not let the second party infer it from the first party's output.
3. **Require one independent range.** At least one reproduction by a different team, preferably with independently developed artifacts, ranged against the same ground. Same-stack re-runs are labelled repeatability and carry no verdict weight.
4. **Enumerate the habitat.** List everything in contact with the result, including conditions two steps out. Archive raw data and intermediate results. Assign the channel to a maintainer seat that does not author the results.
5. **Publish both prices.** Bits for the description, actions for the search. Report the sweep budget and parameter sensitivity, not only the chosen values.
6. **Treat badges as filters.** A badge says artifacts were audited or a result was re-observed within tolerance. It does not say the claim is true. Keep every cut reversible.
7. **Distinguish gap from absence.** Before importing a new model or instrument, run the independent parameter search at the current reach. An unfound answer is not a missing atom.

Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion." Send the generator (lineage, tolerance, refuter), not the conclusion.

---

## 5. Canonical usage check

Two local sources were read after the first four sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw." And the limit: the framework says "what a missing thing would have to look like (a shape, not a name)", then stops at the limit of the instruments and records the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: "The figures are the ground for design questions; Isaiah is the anchor for what the figures genuinely cannot settle." A design question like "what practices" is decided by derivation, not by escalation to an authority. This file also records that asking for a human ruling on a figure-decidable design question is itself the failure mode.

**Applied here.** F1 to F9 were derived before the recommendation; no world source was allowed to flip a verdict. The world sources corroborate or conflict only after a figure line has closed a finding. The ACM three-way terminology conflicted with nothing; it sharpened F2 and F3. The FAIR principles and the reproducibility guides conflicted with nothing; they supplied operational detail for F1 and F4.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| Reproducibility means bitwise identity, so same seed is the goal | **Retracted.** Fig 4 :27 makes the round trip lossy and the Operators table gives ⋛ for comparison. ACM states exact reproduction is not required. The correct target is agreement within a declared tolerance. |
| "Keep the anchor reachable" means archive everything and the claim is then settled | **Retracted at the settlement step.** Formula step 5: "A gate is not the ground." Archiving keeps a channel open; it does not settle a claim. A badge is a filter (Fig 9 :60). |
| Fig 11 :70 forbids synthetic benchmarks | **Narrowed, not retracted.** A harness proves wiring and never capability. Synthetic tests remain valid for wiring. They are invalid as evidence about the real system's contact conditions. |
| Software, data and parameters form a partition of three independent questions | **Retracted after re-census.** They overlap, so Fig 9 :55 governs a union compound, and the intersections need their own loop. |
| Fig 6 :23 requires importing a new frame for any reproduction | **Retracted after re-census.** A second team using different software already has a closure that differs. Contact is supplied by the re-run. No import is owed. |
| F1 lineage as the proof | **Canonically confirmed.** Fig 13 :127-130 and :140-141, the README's "a shape, not a name", and the essays' provenance argument (How Intelligence Actually Works: "the lineage has to be kept even when the copy is perfect"). |
| F3 independence as the parameter | **Canonically confirmed.** Fig 2 :31-42, Fig 7 :35-36, Fig 8 :49, and the Tacit Knowledge essay's three drift-stoppers (a ground both are corrected by, separate experience, effect terms). |
| F5 harness as substituted habitat | **Canonically confirmed, single-source within figures.** Fig 11 :66-70. The README's re-census rule was applied; the nearby Fig 6 :23 governs closure contact, not harness substitution, so there is no contradiction. |

---

## 6. Per-domain loops, verdicts kept separate

**D1, original run.** Actors: code, data, parameters, seeds. Currency: `R` per slot. Anchor: the named dataset or experiment. Loop: perceive the gap, mint a recorded configuration, settle it against the dataset. Verdict: `specified`; the lineage is necessary and not sufficient (Formula step 5). Not averaged with D2.

**D2, reproducing party.** Actors: a different team with different closure. Currency: agreement within tolerance versus residual. Anchor: the same ground. Loop: describe the residual first, choose a frame whose closure differs, range against the ground. Verdict: `general`; independence, not agreement, is the witness (Fig 2 :35, :40). Not averaged with D1.

**D3, transmission channel.** Actors: artifact, record, abstracted method, maintainer seat. Currency: bits and actions. Anchor: the ground, kept reachable. Loop: carry up a method, bring it down, measure `R_T`. Verdict: `specified`; the gap is a measurement, not an error to hide (Fig 4 :31-32).

**Round trip gap `R_T` (qualitative).** Sent up: the concrete run (exact code, data, seed, grid). Abstracted: "the method with its tolerance." Brought down: a second run in a different stack. What does not survive the trip: the exact operand types (a version number is not a parameter), the order of refusal before acceptance, and the contact conditions the harness dropped. The gap is the honest report of what the coarser description cannot hold. It was not measured numerically; no controlled re-run was performed in this simulated derivation.

---

## 7. Seven-question recursive derivation (summary)

1. **What is the residual?** A gap between a published result and a result under changed software, data or parameters. Arity three, union compound (Fig 9 :55). Not one hard question.
2. **Can it be closed from inside one frame?** No. A mirror shares the evidence pool (Fig 2 :40). The wall moves only on contact with a differing closure (Fig 6 :23).
3. **What is the verdict quantity?** `R` per slot, never an average (Fig 1 :19, :22). A single score hides a live slot.
4. **What is owed before a term is minted?** A refusal of "identity as target" (Formula step 2; ¬ is not a bond). Then a tolerance term ⋛ (Operators :51).
5. **What composes?** Atoms (versions, data, seeds, parameters) plus typed bonds (workflow order). The arrangement is the substance (Fig 12 :94), so a list is not a method.
6. **What is imported?** Only an independent frame with a different closure, with a source gate and a shadow test. A badge is not an import; it is a filter.
7. **What settles?** The ground, separately for each frame (Fig 2 :45-46). Not agreement, not prestige (*The Recursive Self-Improvement Trap*: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it.").

**Strains after re-census: none hidden.** One live strain is recorded: F5 and F6 are single-source within the figures. They are not triangulated, and the ledger says so.
