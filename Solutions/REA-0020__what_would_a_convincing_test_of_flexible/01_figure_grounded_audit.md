# Figure-grounded audit: REA-0020, a convincing test of flexible out-of-distribution learning

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, opened 2026-11-23: *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* And: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`. World sources are secondary and are listed in `10_source_ledger.csv`, with the ones actually opened recorded there. No figure quote in this file came from a summary.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`, `s`, `Γ(b,a)`, `o′`). Here:

- **b** is the learner's belief, formed from its own training history and inherited priors.
- **a** is what the learner does: a prediction, a classification, an action in an environment.
- **Γ(b,a)** is what the learner's library predicts will happen.
- **o′** is what the deployed environment actually returns.
- **s** is the slot: a hospital, a camera trap, a season, a location, a user population, a novel game. R is indexed by slot and ordered by time, never averaged into one benchmark score.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is not the accuracy level on a held-out split but **the duration for which R stays small as the slot changes**. Call it `D_e`, the persistence of a low-residual condition across environments. Observed in the world: a model can score near ceiling on its test set and lose 11 to 14 points on a freshly collected version of the same dataset (Recht et al. 2019, read this session); robustness on synthetic corruptions often does not transfer to natural shifts (Taori et al. 2020, read this session). A frame that treats generalization as a property of the model considered alone, or that treats a harder held-out split from the same generator as the ground, has a residual here.

State the residual as: *why does the gap between what a learner predicts and what a changed environment returns remain small on some slots and grow on others, and what would a test have to do to discriminate flexible learning from in-distribution pattern extension under a disguised habitat?* This is an effect description. It names no theory, no "robustness", no "invariance", no "world model". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term before the run** (Formula, "Direction"), before choosing any figure line: the answer would be a test design with conditions whose conjunction keeps `D_e` large, plus an instrument that discriminates a failure of one condition from a failure of the other. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 3 can fire on it.

**Anchor test.** Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." The same line names candidates directly: a measurement, an experiment, a counter, a market, a patient outcome. Fig 2 :30: "If it moves when you push on it, it is not an anchor." For OOD testing, the viable anchor is the shifted environment's verdict, measured per slot: a patient outcome in a new hospital, a species count from a new camera trap, a poverty estimate from a new region, a score in a genuinely novel game. Benchmark scores, leaderboards and the test designer's expectation move when pushed by method selection and are instruments at best. Fig 2 :37 warns that instruments *"can be wrong on axes they do not measure."*

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a four-place relation among learner Γ, action a, environment e, indexed by slot s and ordered by time t. It is a sequence rather than a set, so it carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) and a **comparison** bond for "flexible" (`⋛`, *"a threshold relation between two quantities"*, Operators table :46-51). It is not symmetric: learner and environment are not interchangeable, and "out of distribution" is relative to the learner's training closure.
- **Symmetry.** "Flexible" is a threshold relative to the family of shifts considered, not an absolute quantity. Persistence across environments is asymmetric in time: a capability lost after a habitat substitution is not recovered by reversing the substitution (Fig 11 :66-68).
- **Scale.** Three scales are in view: the single learner's step-by-step loop (Fig 1, Fig 3), the population of environments with something that ranks what learners produce (Fig 4 :5), and the channel between training and deployment. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured, not assumed zero (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The learner loop** (one agent, one scale) | the learner, its Γ, its training history | actions and residual reduction on training slots | yes: the verifiable reward or measurement in the training environment (RLVR; essay *Recursive Self-Improvement Trap*) | admitted |
| **D2 The deployment habitat** (population of environments) | hospitals, camera traps, seasons, locations, users, novel games | survival of low R under shift | yes: the real outcome, the ground named in Fig 2 :29 (patient outcome, count, score) | admitted |
| **D3 The test instrument** (the channel) | held-out sets, synthetic corruptions, leaderboards, metrics | a score | grounded only when test conditions stay in contact with D2; otherwise frame-internal (Fig 1 :27) | admitted as an instrument, not as a ground |
| **D4 The invariance and reach domain** (composition inside the learner) | atoms (features, invariances, primitives) and bonds between them | reach, that is what can be composed; cost of stating a term | yes: settlement against D2, *"then check it against the ground, then carry it up"* (Fig 5 :32) | admitted |
| **X1 "General capability as a free-floating property of the model"** | the model | talent or parameter count | **no** anchor independent of the deployment habitat | not a domain yet |
| **X2 "Robustness to synthetic corruption as the whole of OOD"** | corruption generators | perturbation accuracy | measurable, but it is already D3's instrument, and a synthetic solve is a substituted habitat (Fig 11 :70) | absorbed into D3, not separate |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that model design never matters. X2 is measurable but is an instance of D3, not a rival domain.

### 1.3 Partition or union

D1 and D3 overlap: the test instrument enters the learner's loop whenever it is used for model selection, so that overlap is a compound with its own loop. D2 and D3 overlap: contact with the ground is exercised through the test when the test is built from the deployment habitat, so that overlap is a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: **(C1)** the test's ground must be reachable and must not move when pushed, and **(C2)** the test must require a reach expansion, that is contact with a closure that differs from training, rather than more search inside the same closure. A learner failing only C1 and a learner failing only C2 are not different degrees of one failure; they are different compounds and need different instruments. The essay *The Library of Babel* states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the test detect what actually changed between training and deployment?) -> 2 vocabulary (does the test have terms for what the shifted environment affords?) -> 3 objective (can it say what would count as progress under that shift?) -> 4 planning -> 5 learn and carry. The middle link, having terms for what a changed situation affords and saying what would count as progress there, is the one with no instrument. Fig 12 :113 says a vocabulary holding only ingredients can say what a situation contains and cannot say what would count as getting somewhere from it. Most benchmark effort lands above the break because that is where the measurements already exist (Fig 3 :29-30).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not why it persists |
| 2 The Ground | anchor must not update; independence vs common pool | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs cross-environment transfer and the round trip |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs when a new invariance can be admitted |
| 6 Closure / Reachability | import is the only operator that moves the wall | decisive for C2 |
| 7 Room Chain | same closure handed along; agreement compounds, evidence does not | governs benchmark chains and unauthored pools |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and source rules |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; unauthored rooms | decisive for C1 and for test construction |
| 11 The Habitat | capability is agent-and-habitat; isolation substitutes habitat | decisive for D1 and D2; synthetic tests are substituted habitats |
| 12 The Bond | arrangement is the substance; a vocabulary without bonds cannot name a route | governs why a test set can name states and not routes |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop |
| Operators table | `⋛` comparison, `¬` negation | governs "flexible" as threshold and a failure as refusal |

**Strain test applied during this census.** An early attempt to apply Fig 13's six-term physical substrate directly to "feature spaces", "representation gradients" and "networks of neurons" only fit by calling a latent dimension a kind of space and a loss curve a kind of energy. That is a strain, so Fig 13 does **not** govern a learner's Γ. Re-census sent Fig 13 to the honest-stop role only (section 6, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about test design, `grounded` only if settled by a measurement. None is `grounded`.

### F1: A synthetic test is a substituted habitat, so a synthetic solve proves wiring and never capability

**Mode: `specified`. Domain D3. Status: triangulated (Fig 11 and two world sources with genuinely low overlap with the framework).**

> **"what you failed to reproduce is invisible until the goal fails"** (Fig 11 :68)
> **"what you unintentionally introduced is invisible until it acts"** (Fig 11 :69)
> **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."** (Fig 11 :70)

Fig 11 :66-67 says isolation is not removal of the habitat but substitution of one habitat for another, and that moving a residual requires reproducing everything its goal required. A benchmark built by perturbing images with noise, simulated weather or synthetic corruption is a substituted habitat: it keeps some conditions and silently drops others. What was dropped is invisible until the goal fails on a real shift. This is the figure's isolation law applied to test design, and it is the strongest single figure-grounded point in this answer.

The world corroborates from a different evidence pool. Taori et al. 2020 report *"there is often little to no transfer of robustness from current synthetic to natural distribution shift"* and call natural distribution shift *"currently an open research problem."* Geirhos et al. 2020 define shortcuts as *"decision rules that perform well on standard benchmarks but fail to transfer to more challenging testing conditions, such as real-world scenarios."* Neither paper draws on the Tether figures; their agreement with Fig 11 :70 is convergent derivation at low overlap, so it is a genuine witness here, unlike framework-author essays.

**Refuter:** a synthetic suite whose scores prospectively predict deployment R across independently sampled real shifts, with no shared generator or shared condition with the deployment habitat. If one exists, F1 is false as stated.

### F2: Capability is a property of learner-and-habitat, so a convincing test measures the pair

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 11 and Fig 4, low overlap: habitat vs membrane).**

> **"capability is a property of agent-and-habitat, never of the agent alone"** (Fig 11 :39)
> **"An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)
> **"Only the actors, the currency and the anchor change."** (Fig 4 :20)

The observed regularity is the same one at two sizes: the loop is constant, what changes is the cast. A test that reports a model-only number has measured the agent in isolation. Fig 11 :40 gives the standing refuter in the figure's own words: an agent-only improvement that moved the ground would refute the capability claim. Koh et al. 2021 corroborate from the benchmark literature: distribution shifts *"are under-represented in the datasets widely used in the ML community today"* and *"standard training yields substantially lower out-of-distribution than in-distribution performance"* across ten real-world datasets. Their testbed is built precisely because the pair, not the model alone, is what pays.

**Refuter:** a controlled comparison in which a model-only change (parameters, architecture, training objective) moves OOD ground performance while measured contact with the deployment habitat is unchanged. Under Fig 11 :40 that should be impossible.

### F3: Enumerate the habitat and describe the residual before choosing the test distribution

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 9 and Fig 11, low overlap: leave/arrive vs habitat).**

> **"The habitat is enumerated, never composed."** (Fig 11 :43)
> **"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."** (Fig 11 :48)
> **"describe it before you go looking, or any frame you pick will seem to fit"** (Fig 9 :27-28)
> **"Residual first, frame second."** (Fig 8 :53)

A convincing test lists everything in contact with the residual (the conditions that could change at deployment), then what is in contact with those, outward until the cascade stops mattering (Fig 11 :44). Fig 11 :52 notes that contact cascades and that first-order enumeration can miss a third-order effect, which is why a single corruption type is never enough. The test distribution is chosen *after* the residual is described in effect terms. Otherwise any benchmark will seem to fit, which is the apophenia the formula's "Direction" section warns about: a frame searching for an answer of a given shape holds that shape as an unbound preference.

Recht et al. 2019 corroborate the need for real enumeration: they built new test sets *"By closely following the original dataset creation processes"* and found the resulting drops were *"not caused by adaptivity, but by the models' inability to generalize to slightly "harder" images."* The new test set was read off the world, not composed from the old one.

**Refuter:** a test suite assembled before the residual was described in effect terms that nevertheless discriminates methods prospectively on a fresh deployment habitat. That would show the order is a discipline, not a law.

### F4: OOD reach requires contact with a differing closure; search inside the training closure cannot add an atom

**Mode: `specified`. Domain D4. Status: triangulated (Fig 6, Fig 8 and Fig 13, three figures with distinct roles).**

> **"the only operator that moves the wall"** (Fig 6 :14)
> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."** (Fig 8 :32)

A learner can optimize inside its training distribution forever and never acquire the missing primitive that a shifted environment requires. A convincing test must therefore put it in contact with a frame whose closure differs: a new environment, a new modality, a new objective, a human demonstrator, an intervention. Arjovsky et al. 2019 corroborate in statistical language: IRM *"learns a data representation such that the optimal classifier, on top of that data representation, matches for all training distributions"* and relates this to invariances that *"enable out-of-distribution generalization."* Multiple training distributions are the world's version of contact with differing closures. Their claim is a theory claim, not a ground measurement, so it corroborates the condition and cannot name the atom.

**Refuter:** a method that expands OOD reach solely by more search inside a fixed closure, with no new atom entering from any differing frame, and that still passes a fresh real-shift ground test. That breaks idempotence and F4 with it.

### F5: An OOD failure is a verdict, and the test must separate depth from genuine absence

**Mode: `general` with a `specified` consequence for test design. Domains D1, D4. Status: triangulated (Fig 13, Fig 8, Fig 6).**

> **"Unreachable is a verdict here, not a silence"** (Fig 13 :134)
> **"So a search that finds nothing is never a proof of absence."** (Fig 8 :39)
> **"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."** (Fig 6 :27)

A low score on a shifted test is a legal result, not noise to be trained away. But two different facts produce the same score: the needed term is inside the learner's reach and was not found (depth, remedy is more search, Fig 8 :41-42), or it is genuinely absent from the closure (absence, remedy is an import, Fig 8 :40-41). From inside the frame they look the same. A convincing test must report which one it is, because the two issue opposite instructions. Importing against a budget limit adds an atom that was not needed, and a wrong atom costs more than starting from primitives (Fig 8 :42-43).

**Refuter:** a single score that cannot be decomposed into these two cases and that still tells an engineer whether to search longer or import. If such a score exists, F5's specified consequence is false.

### F6: Independent grounds, not a room of agreeing benchmarks

**Mode: `specified`. Domain D3. Status: triangulated (Fig 2 and Fig 7, low overlap: anchor triangulation vs room chain).**

> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)
> **"Buy independence in proportion to the cost of being wrong."** (Fig 2 :42)
> **"same closure, handed along;"** (Fig 7 :12)
> **"agreement compounds, evidence does not"** (Fig 7 :13)

Ten benchmarks generated from the same simulator, or ten leaderboards drawn from the same ImageNet-derived corpus, are one witness wearing ten names. Agreement among them is the shared pool talking. A convincing test suite buys independence in proportion to the cost of being wrong: different generators, different modalities, different real deployments, and a declared account of what each draws on. Fig 7 :36: *"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."*

**Refuter:** two test suites with demonstrably disjoint evidence pools and disjoint generators that return conflicting verdicts on the same method, with one shown to be wrong at the ground. If independence cannot be established, the suite is one frame.

### F7: Never report a single averaged OOD score

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 1 and Fig 9, low overlap).**

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

A mean accuracy across shifted conditions scores the frame with a quantity the frame produces. It is a filter for where to look and a budget instrument, not a witness. The specified consequence: any claimed answer to REA-0020 that is an average across environments has already thrown away the only signal that says which environment lost contact and where. Fig 1 :28: *"The gap is measured per object, not per step."* Taori et al. 2020 report results across *"204 ImageNet models in 213 different test conditions"*, which is the right per-slot shape; collapsing those to one number would erase the finding that transfer is uneven.

**Refuter:** an averaged OOD statistic that predicts, prospectively and per named environment, which slot will fail next. If one exists, F7's methodological consequence is false.

### F8: The test pool must be unauthored and the verifier must be outside the interior

**Mode: `specified`. Domain D3. Status: triangulated (Fig 10 and Fig 7, low overlap).**

> **"A verifier that can reconstruct the claim cannot verify it."** (Fig 10 :42)
> **"A candidate set chosen by a participant is an authored room however well the selection is reasoned, so the pool must be unauthored first and examined second."** (Fig 10 :73-74)

If the authors of a method also choose which shifts count, the test is an authored room. Fig 10 :75-79 gives the mechanisms for unauthored selection: a lottery, everyone who qualifies, a set assembled before the question existed, or the habitat itself enumerated rather than composed. Fig 7 :41 adds that the pool from which the next room is drawn must be unauthored. A convincing test therefore pre-registers the environment list, or draws it from the habitat by enumeration, and keeps the method authors out of that selection. This is also why the outreach in `02_outreach_email.md` carries only the residual and its refuter: a recipient who has absorbed the framework before giving a verdict has joined the frame being checked.

**Refuter:** a test suite whose environments were drawn by a pre-registered lottery from a habitat enumerated before the method existed, and where the method authors still cannot predict which slots will fail. If the lottery changes nothing, the authorship condition is weaker than claimed.

### F9: The break is usually at the middle link of the test-design chain

**Mode: `specified`. Domain D1. Status: single-source (Fig 3, with Fig 12 :113-115 as a corroborating line from the same framework, so one witness).**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)

The usual failure in OOD evaluation is not that the benchmark cannot measure accuracy; it is that the test has no terms for what a changed situation affords and cannot say what would count as progress there. More test data lands above the break. F9 predicts that the highest-value diagnostic question is not "how robust is this model?" but "at which link does its evaluation chain stop, and was that measured?" The ARC-AGI-3 page opened this session states its design aim in effect terms: *"Novelty that prevents brute-force memorization"* and testing *"across time, not just final answers"*. That is a world-facing attempt to instrument the middle link, marked single-source for the figure claim.

**Refuter:** a documented evaluation where perception and vocabulary links all measure as working and the failure is located at planning. That falsifies the "usually at the middle" claim, though not the dependency ordering.

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per environment, never a single benchmark average | general | Fig 1 :19, :22 | figure-derived |
| The deployment outcome is the anchor, not a leaderboard | general | Fig 2 :29, :30, :35 | figure-derived |
| A synthetic test is a substituted habitat | specified | Fig 11 :66-70 | triangulated F1 |
| Capability is learner-and-habitat | specified | Fig 11 :39, :40; Fig 4 :20 | triangulated F2 |
| Enumerate habitat and residual before choosing the test frame | specified | Fig 11 :43, :48; Fig 9 :27-28 | triangulated F3 |
| OOD reach needs contact with a differing closure | specified | Fig 6 :14, :21, :23 | triangulated F4 |
| Failure is a verdict; depth and absence must be separated | general | Fig 13 :134; Fig 8 :39; Fig 6 :27 | triangulated F5 |
| Test suites need independence and unauthored pools | specified | Fig 2 :35, :40, :42; Fig 10 :73-74 | triangulated F6, F8 |
| Averaged scores are filters, not witnesses | general | Fig 1 :27; Fig 9 :60 | figure-derived |
| The break is usually at vocabulary/objective | specified | Fig 3 :19, :24, :29 | single-source F9 |
| Which particular shift will break a given model | not stated | none | gap: the framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A synthetic suite prospectively predicts deployment R across independently sampled real shifts with no shared generator, and the real shifts add nothing (breaks F1, Fig 11 :70).
2. A model-only improvement moves OOD ground performance while measured contact with the deployment habitat is unchanged (breaks F2, Fig 11 :40).
3. A test suite assembled before the residual was described discriminates methods prospectively on a fresh deployment habitat (breaks F3, Fig 9 :27-28).
4. A method expands OOD reach solely by search inside a fixed closure, with no new atom and no contact with a differing frame, and still passes a fresh real-shift ground test (breaks F4, Fig 8 :32).
5. A single score both reports OOD failure and tells an engineer whether to search longer or import (breaks F5, Fig 6 :27).
6. An averaged OOD statistic predicts, prospectively and per named environment, which slot will fail next (breaks F7, Fig 9 :60).
7. Fig 13's six terms are derived from five of them, or Fig 8's idempotence fails inside a closed set (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a deployment-ground measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of generalization (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Enumerate the deployment habitat and describe the shifted residual in effect terms before naming any benchmark (Fig 11 :43, Fig 9 :27-28).
3. Keep each environment's R separate in every report. A blended "OOD score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
4. Require a source gate and a shadow test for every claimed invariance: where did the invariance come from, and which gap does it explain? Convergent derivation and adopted import look identical in the contents and only the record separates them (Fig 8 :50-52).
5. Ask, at each handoff, which link the evaluation chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
6. Buy independence in proportion to the cost of being wrong (Fig 2 :42), and draw the test pool from the habitat by enumeration or lottery, not from the method authors' judgement (Fig 10 :75-79).
7. Use the benchmark literature as one corroborating witness and as a budget filter, never as the verdict. Recht, Taori, Geirhos, Koh and Arjovsky do not share a single evidence pool with the figures, but they do partly share one with each other (Recht and Taori overlap in authors and in the ImageNet testbed), so they count as fewer witnesses than their number suggests.
8. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
9. Stop at the shape. Do not name which benchmark will settle a given system; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and the essays *The Library of Babel*, *The Recursive Self-Improvement Trap* and *The Hard Problem is About Source* (all opened 2026-11-23).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13's six-term physical substrate to feature spaces and representation gradients | **Retracted, strain S1** | Only fit by renaming a latent dimension a kind of space. Re-census: Fig 13 governs the physical substrate, not a learner's Γ |
| Planned to claim an "invariance" is an import that moves the wall | **Retracted at record level** | Fig 6 :22, *"IMPORT adds an atom, and the added atom is what expands the closure"*; an invariance built from held features adds none. It is a binding, provenance still owed |
| Treated Recht and Taori as two fully independent witnesses | **Narrowed to partly overlapping** | Shared author and shared ImageNet testbed; one evidence pool in part (Fig 2 :31) |
| Read "shape, not a name" as forbidding any named metric | **Narrowed to missing primitives** | The README's phrase governs a primitive not held in Γ. Naming an already-held metric is a binding, not a prohibition |
| Wanted to call Fig 11 :39 a `general` law about all learners | **Narrowed to `specified`** | No deployment-ground measurement pays for the OOD version here |
| Wanted the five world papers to supply the verdict | **Retracted** | Figures decide; world sources corroborate only. No conflict was allowed to flip a finding (F9's conflict would return to census) |
| F1 called "decisive" in an early draft | **Downgraded to triangulated** | Fig 11 and two world sources are two kinds of evidence, but the world sources partly overlap each other |
| "no residual stated" risk | **Avoided at record level** | The residual is bound in section 0 and the answer would look like a condition pair plus an instrument, so the refuter can fire |

**Strains sent to the log:** S1 (Fig 13 applied to learner internals), resolved by re-census; S2 (calling a synthetic corruption "the ground" while also treating the real environment as the anchor), resolved by Fig 2 :29-30 and Fig 11 :73: the habitat updates and is substituted, the ground is what settles and does not. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55 and :57 plus the *Library of Babel* bundle passage: it is a union of anchor maintenance and reach expansion, each with its own loop and instrument.
2. **What is the anchor?** The real deployment outcome, named in Fig 2 :29. Not a leaderboard, not a synthetic split (Fig 11 :70).
3. **Is the answer in the model alone?** No. Fig 11 :39-40. Capability is learner-and-habitat.
4. **How does a synthetic test fail?** By substituting a habitat (Fig 11 :66-70): what it failed to reproduce is invisible until the goal fails.
5. **How does a convincing test get built?** Enumerate the habitat, describe the residual, then choose the frame (Fig 11 :43-48, Fig 9 :27-28), with an unauthored, independent pool (Fig 10 :73-79).
6. **What makes a pass meaningful?** Contact with a differing closure (Fig 6 :23), because search inside a closed set adds no atom (Fig 8 :32).
7. **What can be said at the stop?** A shape with conditions, refuters and the depth/absence distinction. Not which benchmark, not a `grounded` answer. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **a convincing test of flexible OOD learning is one whose conditions are enumerated from the deployment habitat rather than composed from the training generator, whose anchor is a real outcome that does not move when pushed, which requires contact with a closure differing from training, which reports residual per environment, whose pool is unauthored and independent, and which reports failure as a verdict that separates depth from genuine absence.** The conditions are kept separate, never averaged. Which specific shift will break a given system is a `gap`, not a silence: the framework returns a shape, and the instrument that would name the source is not held here. Mode `specified`. No world source was allowed to flip a verdict; the one apparent conflict (IRM's claim that invariances "enable OOD generalization") was returned to the census and re-mapped as a theory-level corroboration of contact with differing closures, not a ground result. No unresolved strain remains after re-census.
