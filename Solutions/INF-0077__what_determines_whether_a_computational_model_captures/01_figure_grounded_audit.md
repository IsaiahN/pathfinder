# Figure-grounded audit: what determines whether a computational model captures causal structure?

**Mode of this document: `general` on the structural shape, `specified` on the checkable claims, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** By the framework's own validation rule, LLM output is a simulacrum and the truly testable output would have to be derived by working the formula against a real ground. This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No measurement, model fit or intervention was performed.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, with line numbers), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `PLANS/00_MASTER_PLAN.md`, and the world sources in `10_source_ledger.csv`, all fetched 2026-11-23.

---

## 0. The claim under audit

The question as written: *What determines whether a computational model captures the causal structure of the system it describes?*

Two readings are on the table and they lead to different places.

- **Reading A (fit):** what determines it is how well the model reproduces observations. This is the default in much modeling practice and it is the reading the figures refuse.
- **Reading B (contact):** what determines it is the model's contact with a ground it did not author, through an anchor that does not update, from a frame whose closure differs from the model's, with the residual read per slot and the check made by someone who cannot reconstruct the claim.

The audit derives before concluding. The residual is stated first, then the domain census, then the figure lines are quoted verbatim, then each finding is tested against its refuter. No figure line was chosen to make Reading B win; the lines were gathered by searching the extract for the terms *anchor*, *residual*, *slot*, *bond*, *arrangement*, *closure*, *import*, *instrument*, *ground*, and *verifier* before any verdict was written.

---

## 1. The residual in effect terms

**R is not "the model is wrong about causation."** That is a label, not a residual. In effect terms:

> R is the gap, on a particular variable or a particular link, between what the model predicts or represents and what the system returns when that variable or link is actually changed. It persists when two models fit the same observations equally well yet answer an intervention question differently.

- **Arity.** R is indexed by slot, one per variable or link, not by a global score. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :13 allows *"a global R near zero with one live slot residual is a legal state."* A single accuracy number can be near zero while the causal link that matters is still wrong.
- **Symmetry.** The residual is carried by an **asymmetric** relation. Causal direction is not interchangeable with its reverse; swapping the operands changes the thing. Fig 12 :74-75 names `→` sequence with the test *"swap them. Does it become a different thing? Yes."* Observational co-occurrence is symmetric; causal production is not. The residual lives exactly in that difference.
- **Scale.** Fitting happens inside the model's closure. Settling happens at the ground. Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."* The question spans two scales, and the membrane between them is directional: Fig 4 :22 *"Only methods cross up. Only head starts come down."*
- **The gap is per object, not per step.** Fig 1 :28: *"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."* For this question the objects are variables and candidate links, so a model-level average is the wrong instrument by construction.

Symbols table :38-39 defines R as *"It is the aim, not only the error signal, and it is always a slice: what cannot be perceived yet is residual and simply cannot be read."* The causal structure a model cannot represent is such a slice. It cannot be read by sharpening the same observations further.

---

## 2. Domain census (before choosing any figure line)

R by arity / symmetry / scale is set out above. One line per domain: actors, currency, anchor. A domain with no nameable anchor is not yet a domain that can settle the question.

| domain | actors | currency | anchor | can it settle causal fidelity? |
|---|---|---|---|---|
| **D1. The model frame** | variables/slots, parameters, candidate graphs, fitted weights | prediction error, likelihood, description length, compression | none internal that settles direction; a score the frame produces is frame-internal | **No.** It settles predictive adequacy, not causal structure. Anchor test fails for the target quantity. |
| **D2. The system and its interventions** | mechanisms, the intervention (do), instruments, the experimenter's act | the response under intervention, a counter, a patient outcome | **the ground**: *"whatever settles the question and does not change its answer because of what any frame thinks"* (Fig 2 :29) | **Yes.** This is the nameable anchor. |
| **D3. The verification frame** | outside checkers, independent instruments, other closures | residuals, independence, refutations | the ground, never agreement | **Only if independent** and the checker does not author the claim. |

**Partition or union?** A union compound, not a partition. Predictive adequacy and causal fidelity are two overlapping conditions, and one lever does not clear both. Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* The intersection, a model that fits well and is causally wrong, is the case that matters. Fig 9 :57: *"a case in two conditions is not a harder case of either."* It is a specific compound with its own loop and its own ground.

**Dependency order (Fig 3).** Ordered by dependency, not importance (Fig 3 :20):
1. perception: can the variables and the intervention be observed at all;
2. vocabulary: are there terms for the **ordered bonds** and for the act of intervention, rather than only for co-occurrence;
3. objective: does "progress" mean lower prediction error or a correct response under intervention;
4. planning: can an intervention or an instrument be designed;
5. learn and carry: name what worked, verify it, carry it to the next model.

The likely break is between 2 and 3. Fig 3 :25-27 says that link *"has neither, so it attracts the least attention and the fewest instruments. A link with no instrument is not a link that works. It is a link nobody has looked at."* Fig 3 :29: *"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."* Most modeling effort lands at steps 1 and 4, where instruments exist. The vocabulary/objective link is where "captures causal structure" is decided and where the instrument is usually missing.

---

## 3. Figure census (bearing and verdict before findings)

| figure | verbatim bearing | verdict for this question |
|---|---|---|
| **1 The Agent** | *"A frame cannot score itself with a quantity it also produces."*; residual per slot | disqualifies fit, compression and accuracy as the answer |
| **2 The Ground** | *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*; independence | settles the anchor requirement and the independence requirement |
| **3 Dependency Chain** | *"A link with no instrument is not a link that works."* | locates the break at vocabulary/objective |
| **4 The Membrane** | *"Only methods cross up. Only head starts come down."*; round trip gap | separates method from recording, requires measured `R_T` |
| **5 Mint Pipeline** | *"make the sought-for shape an ORDINARY TERM"* | licenses the pre-registered refuter, names the direction limit |
| **6 Closure / Reachability** | *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* | observational closure cannot add the intervention atom |
| **7 Room Chain** | *"A room's agreement is variation, not a verdict."* | a panel of agreeing modelers is not a ground |
| **8 Union Surplus** | *"Closure is idempotent. Composing inside a closed set never leaves it"*; residual first | underivability is not silence; describe R before picking a frame |
| **9 Leave / Arrive** | *"Use filters for the budget and witnesses for the verdict."*; union vs partition | fit is a budget filter; the question is a union compound |
| **10 Ground Maintainer** | *"A verifier that can reconstruct the claim cannot verify it."* | checker non-access and independence |
| **11 The Habitat** | *"A test harness is a substituted habitat."*; capability is agent-and-habitat | synthetic validation proves wiring, not causal capability |
| **12 The Bond** | *"The arrangement is the substance."*; ordered vs symmetric bonds; isomer | causal structure is the bond, not the ingredient list |
| **13 Minimum Viable Set** | *"could this have been reached at all. A system with a closure can answer that before it searches"* | identifiability is decidable before searching |
| **Operators table** | `→` sequence and `⇒` production are ordered; `+` and `≡` are symmetric | direction needs an ordered bond; a negation operator is owed to refuse it |
| **Symbols table** | R is the aim, always a slice | the unrepresentable cause is residual, not noise |

No figure line was strained to fit. The one live strain is named in section 8.

---

## 4. Findings F1 to F10

Each finding states mode, quotes verbatim, gives a refuter, and records triangulation status. Verdicts stay per domain; they are never averaged.

### F1. Predictive fit is frame-internal and cannot settle causal fidelity (decisive for Reading A)

**Mode: `general`** (structural, follows from the frame rule).

Fig 1 :24-27:

> **"Everything else either produces a residual or consumes the library. These do not count:"**
> **"coverage, and compression achieved"**
> **"predicates minted, and credibility accrued"**
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."**

Fig 9 :60:

> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

An accuracy score, a likelihood and a compression ratio are quantities the model's own frame produces. They can be used to decide what to try next (budget). They cannot be the witness for "the model has the causal structure." Fig 1 :23: *"The ground enters as the only metric."* This is the single most important reason Reading A fails. Applying Fig 9 :60, fit is a **filter**, never a **witness**.

**Refuter:** exhibit a model whose predictive score is produced outside its own frame by an anchor that does not depend on the model's output and cannot be moved by it. If such a score exists, it is no longer frame-internal and this finding narrows. Until then it stands.

**Status: triangulated** across Fig 1 (frame-internal quantities), Fig 9 (filter versus witness) and Fig 2 (anchor as the only metric), three low-overlap parts of the figure set.

### F2. Causal structure lives in the bond, and the bond is not recoverable from the ingredients

**Mode: `general` on the shape, `specified` on the claim about observational equivalence.**

Fig 12 :5:

> **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**

Fig 12 :46-47:

> **"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."**

Fig 12 :94-96:

> **"The arrangement is the substance."**
> **"Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."**

Fig 12 :117:

> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

Observations record the joint distribution, the ingredient list. Causal structure is the directed arrangement. Two graphs that imply the same conditional independences have the same ingredients and different bonds. They are **isomers** in the figure's precise sense: invisible in the formula, decisive in behavior under intervention. This is why perfect fit does not imply causal capture, and it gives Reading A its mechanism of failure rather than merely asserting it.

The world frame names this result *observational or Markov equivalence*: the Wikipedia "Causal model" article, read 2026-11-23, says *"Conversely, data cannot show which of these two models are correct, because they have the same independence conditions."* That is corroboration only. The verdict comes from Fig 12.

**Refuter:** show that the directed arrangement is recoverable from the observational distribution without any additional assumption, instrument or import. Equivalently, show that two models with identical observational implications and different edge directions always agree under every intervention. If that holds, the bond adds nothing and this finding falls.

**Status: triangulated** across Fig 12 (bond carries the information), Fig 1 (per-slot residual must say *where* to look) and the world source above (low overlap between a metatheory figure and a statistics reference).

### F3. Capturing direction requires ordered bonds and a way to refuse

**Mode: `specified` (falsifiable structural claim).**

Fig 12 :111-112:

> **"A vocabulary without bonds can name a state and cannot name a route to one."**
> **"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."**

Fig 12 :140 (quoted before the em dash in the source): *"it cannot write that any of those is false"* in the context of a vocabulary without a unary negation operator. The Operators table :57: *"is the point that it is false, rather than absent? Yes."* and :58: *"a refutation is a negation, which is why a vocabulary without it can only accumulate."*

A model whose representational vocabulary contains only symmetric co-occurrence or an undifferentiated ingredient list cannot even write "A produces B rather than B produces A," and it cannot write "the direction I held is false." It can accumulate fits. It cannot carry the correction. Causal capture therefore requires two things in the vocabulary: an **ordered bond** (`→` sequence or `⇒` production, Operators table :29 and :36) and **negation** so the wrong direction can be refused rather than merely outscored.

**Refuter:** exhibit a model that represents and correctly reverses causal direction while holding no ordered bond and no refusal operator, using only symmetric co-occurrence terms and a scalar score. This is difficult to even state, which is the point of the figure, but if produced it refutes the finding.

**Status: triangulated** across Fig 12, the Operators table and Fig 5 :53 (the "refuted" gap, *"a term we hold is wrong; a term is owed that says so"*).

### F4. What settles it is an anchor from a closure that differs, reached by intervention or import

**Mode: `general` on the anchor requirement, `specified` on intervention as the canonical case.**

Fig 2 :29-30:

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."**

Fig 2 :33: *"The anchor must not update."* Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."*

The model's own data is not an anchor for causal structure, because it is produced by the frame and updates with it. The response of the system to a deliberate change is. Fig 6 :23:

> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**

Fig 8 :32: *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."* More fitting, more data of the same kind and more hyperparameter search inside the observational closure cannot add the interventional atom. The world frame makes the same point in different terms: Wikipedia "Causal inference" says *"one cannot determine the direction of a causal relation based on correlations only,"* and "Causal model" describes `do` as *"an operator that signals the experimental intervention,"* a *"mini-surgery"* on the model. Wikipedia "Surrogate endpoint" gives the clinical version: *"A correlate does not make a surrogate,"* because justification requires *"the effect of the intervention on the surrogate endpoint predicts the effect on the clinical outcome: a much stronger condition than correlation."*

The import is not free. Fig 6 :23 and Fig 8 :45-46 require a source gate (provenance) and a shadow test; Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."* An intervention imported from a frame that shares all its evidence with the model is one witness wearing two names.

**Refuter:** show a case where the causal structure is settled by a quantity inside the model's frame that does not depend on any external contact, does not move when the frame changes, and is not a description the frame produces. That quantity would be an internal anchor and would refute the claim that external contact is required.

**Status: triangulated** across Fig 2, Fig 6, Fig 8 and three independent world fields (statistics, computer science, medicine). This is the strongest single verdict in the audit.

### F5. The residual must be read per variable and per link, never as a global score

**Mode: `specified`.**

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* Fig 1 :28: *"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."*

A global accuracy near zero is a legal state with one live causal residual (Fig 1 :13). The operational question is not "is the model good?" but "on which variable or link is the prediction wrong when that variable or link is changed?" Fig 3 :20 warns that effort above the break cannot rescue a link below it. A model can be improved in ways that lower aggregate error while leaving the wrong edge untouched.

**Refuter:** show a causal-fidelity failure that is detectable only in an aggregate score and invisible on every individual variable and link. If such a case exists, aggregation is not thrown information and this finding falls.

**Status: single-source for the figure line (Fig 1), corroborated by the world frame's per-variable independence tests** (Wikipedia "Causal graph": *"these conditional independences represent all of the model's testable implications"*). Low overlap between the two, so the agreement is weak but not circular.

### F6. This is a union compound; a better fit does not clear the second condition

**Mode: `general`.**

Fig 9 :55-56:

> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."**

Fig 9 :57: *"a case in two conditions is not a harder case of either."*

"Predicts well" and "has the causal structure" overlap. Improving prediction is a single lever. It clears the fit-only region and leaves the intersection, the model that predicts well with the wrong edges, standing. Treating the question as one hard problem sends the modeler to search harder in the same closure. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*

**Refuter:** show that predictive adequacy and causal fidelity are a partition, that is, that no case can satisfy one without the other. Then one lever would clear the whole region and the union reading is wrong.

**Status: triangulated** across Fig 9 (union/partition), Fig 12 (isomers fit identically) and the world source on observational equivalence.

### F7. Identifiability is decidable before searching; unreachable is a verdict

**Mode: `specified`.**

Fig 13 :132-134:

> **"The first is provenance: how did this come to be, and from what. The second is decidability: given the library as it stands, could this have been reached at all. A system with a closure can answer that before it searches, and what it returns is a shape rather than a name."**
> **"Unreachable is a verdict here, not a silence"**

Fig 9 :43: *"The verdict tells you to leave. The lookup tells you where to go. Elimination is what you do after you arrive."* Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

Before collecting more data, a frame with a known closure can often say that a causal quantity is not identifiable from that data and graph. The world frame has a precise version: Wikipedia "Causal graph" describes *"the single-door criterion, a necessary and sufficient graphical condition for the identification of a structural coefficients, like β, using regression,"* and Wikipedia "Causal model" says *"An algorithm can determine whether, for a given model, a solution is computable in polynomial time."* These are bindings from the world frame, not figure derivations. They corroborate the shape: the reach can be checked before the search, and a failed search reports a verdict rather than silence.

Fig 4 :30 requires the condensation to be bracketed: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

**Refuter:** exhibit a case where identifiability cannot be decided from the closure and graph before search but is decided by more search inside that same closure. Then reachability would not be decidable in advance and the verdict/silence distinction collapses.

**Status: triangulated** across Fig 13, Fig 9, Fig 8 and the two world sources named.

### F8. A synthetic test harness is a substituted habitat; it proves wiring, not capability

**Mode: `specified`, unmeasured.**

Fig 11 :70:

> **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."**

Fig 11 :39-40:

> **"capability is a property of agent-and-habitat, never of the agent alone."**
> **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."**

A model validated only on held-out data drawn from the same observational pool has been tested in a substituted habitat. It may be excellent wiring. It has not been shown to track the system's causal ground. Fig 11 :66: *"Isolation is not removal of the habitat. It is substitution of one habitat for another."* Two silent failures follow: Fig 11 :68-69, *"what you failed to reproduce is invisible until the goal fails"* and *"what you unintentionally introduced is invisible until it acts."*

The world frame has a hard empirical version. Wikipedia "Surrogate endpoint" records that *"There have been a number of instances when studies using surrogate markers have been used to show benefit from a particular treatment, but later, a repeat study looking at endpoints has not shown a benefit, or has even shown a harm,"* and the cholesterol example: a drug can be shown *"effective in reducing cholesterol, without showing directly that simvastatin prevents death."*

**Refuter:** show that performance in a substituted habitat transfers to the real system's causal ground without recontact, with the transfer measured rather than assumed. That would refute the isolation claim in Fig 11.

**Status: single-source for the figure claim (Fig 11), corroborated across a low-overlap field (clinical trials).** The figure's isolation claim is explicitly one the framework says *"fit cases already known and have not been tested forward, so they can still come back wrong"* so it is marked as a claim, not a law.

### F9. Independence and verifier non-access are part of the answer

**Mode: `general`.**

Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."* Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence."* Fig 10 :42: *"A verifier that can reconstruct the claim cannot verify it."* Fig 7 :35: *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*

Two models trained on the same dataset are one witness with two names. A panel of modelers who all read the same paper is one evidence pool talking. The checker must be outside the slice being graded, with no gain from a particular reading (Fig 10 :86-88). In this simulated derivation all seats share one evidence pool, so no agreement here counts as corroboration (see `11_audit.md`).

**Refuter:** show that two frames drawing on exactly the same evidence can nevertheless corroborate each other about the world. Then correlation would not be disqualifying and much of Fig 2 and Fig 8 would need re-census.

**Status: triangulated** across Fig 2, Fig 7, Fig 8 and Fig 10.

### F10. The direction of the question must be made an ordinary term

**Mode: `general` (a discipline, not a step).**

Fig 5 :62-64:

> **"a frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term. It is not bound, it predicts nothing, and it accrues no residual"**
> **"Every check above runs on the MECHANISM and none runs on the DIRECTION OF THE QUESTION"**

Fig 5 :65-66:

> **"The remedy is a discipline rather than a branch: make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else."**

This is why the pre-registered refuter in section 5 was written before the findings were finalized. A model can be internally coherent, well fitted and still aimed at the wrong target. The framework cannot certify its own direction; only a written, refusable commitment can. Committing a prediction before the run is the discipline already working.

**Refuter:** show a frame that checks the direction of its own question by a mechanism inside itself, with the sought-for shape never bound as a term. Then the direction limit is false.

**Status: triangulated** across Fig 5, `THE_FORMULA.md` "Direction" section and the pre-registered refuter below.

---

## 5. Pre-registered refuter (written before the conclusion)

Required by Fig 5 :65-66 and by seat reasoning: a falsifier written before the run is a design instrument. The shape claim is **refuted** if any of the following holds:

1. A model's own fit, compression or likelihood is shown to settle causal fidelity without any external anchor, that is, the score is not frame-internal (breaks F1).
2. The directed arrangement is shown to be recoverable from observational ingredients alone, with no intervention, assumption or import (breaks F2 and F3).
3. Two models with identical observational implications and different edge directions are shown to agree under every possible intervention (breaks F2).
4. A causal-fidelity failure is found that is visible only in an aggregate score and on no individual variable or link (breaks F5).
5. A substituted test habitat is shown to transfer to the real system's causal ground with measured, not assumed, success (breaks F8).
6. A frame checks the direction of its own question without binding the sought-for shape as a refusable term (breaks F10).

If any fires, the answer is withdrawn or narrowed accordingly. None was fired in this simulated run. That is not evidence that they cannot fire; it is a record that they were written first.

---

## 6. Recommendation

1. Replace Reading A with Reading B. Do not let accuracy stand in for causal capture (F1, F9).
2. State what counts as progress in intervention terms before fitting: *which link, changed how, would have to move the prediction* (F4, F5, Fig 3 objective link).
3. Write the model's vocabulary down. If it has no ordered bond and no refusal operator, causal direction is not representable and no amount of fitting fixes it (F3).
4. Run the identifiability check before the data collection, not after. Report "not identifiable from this graph and data" as a verdict (F7).
5. Validate on the system, not on a substituted habitat. If only synthetic validation is possible, say so explicitly (F8).
6. Send the generator, not the recording: Fig 4 :25 *"A recording carried upward looks like knowledge and is a description of one occasion."* Lead with the residual and the refuter, offer the links after the verdict (F9, F10).

---

## 7. Canonical usage check

Two sources govern how the figures may be used; both were read after the first six sections and before the conclusion.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw,"* and the canonical limit, the framework says *"what a missing thing would have to look like (a shape, not a name),"* then stops at *"the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."* *"Indiscernibility is not identity."*
- `PLANS/00_MASTER_PLAN.md` sections 2, 8 and 9: figures are primary, world sources are secondary corroboration, and a conflict sends the derivation back to the census rather than flipping the verdict. Filters are for the budget, witnesses are for the verdict.

**Consequence for this question.** The answer is a **shape**, not a named algorithm. The figures license: contact with a non-updating anchor, a differing closure, ordered bonds, a refusal operator, a per-slot residual and an independent checker. They do **not** license naming do-calculus, randomised trials, instrumental variables or any specific estimator as *the* answer. Those names are bindings from the world frame, recorded as such in `09_watson_answer.md`. Saying "the answer is do-calculus" would turn a visible choice into an invisible one.

---

## 8. Retractions, confirmations and strains

| earlier reading | status after the canonical check |
|---|---|
| Initial draft: "the answer is intervention" | **Narrowed.** Intervention is the canonical case of contact with a differing closure, not the only case. A natural experiment, an instrument, a provenanced import or a patient outcome can occupy the seat. The shape is contact, not a procedure name. |
| Initial draft: "the model's likelihood is not an anchor because it is subjective" | **Retracted wording.** The figure's reason is *"They are frame-internal. A frame cannot score itself with a quantity it also produces"* (Fig 1 :27). Subjectivity is not the test; production by the frame is. |
| Initial draft: "observational equivalence refutes the model" | **Corrected.** Equivalence does not refute either model. It shows the data cannot select between them, which is a limit of the instrument, not an error in the fit. Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* |
| Initial draft: Fig 12 bond as a claim about Bayesian network edges | **Narrowed to a binding.** The figures are domain-agnostic metalaws. Mapping "bond" onto a directed edge is a binding from the causal-inference frame, not a derivation from the figure. The figure derives the *need* for an arrangement the ingredients do not carry; the world frame names the arrangement. |
| F8 isolation claim | **Kept as a claim, not promoted to law.** Fig 11 :71-72 says it *"fit cases already known and have not been tested forward, so they can still come back wrong"* |
| Apparent strain Fig 2 anchor versus noisy real instruments | **Not a figure conflict.** Fig 2 :29 defines the ideal anchor; Fig 10 :24-28 defines the channel that decays and the output *"you have lost touch."* A noisy instrument is a channel failure, not a moving ground. Different objects, so no re-census owed. |
| Live strain: Fig 12 bond pricing versus causal graph edges | **Open.** Fig 12 :99-101 prices a bond by the choice it records among available bonds. The framework's price formula is not applied here, because no cost(phi) was computed and no code was declared. Recorded as an unpriced binding, not hidden and not smoothed. |

**After re-census: one open strain (unpriced binding), named; no hidden strains.**

### Round trip note

The condensation carried into `07_the_tether_answer.md` is lossy. Fig 4 :30 requires the gap to be measured. The enumerated `R_T` in `11_audit.md` records what the shorthand drops: the intervention requirement can collapse into "use experiments," the per-slot requirement into "check accuracy," and the bond requirement into "look at the graph." Each drop is a dead-reckoning error if treated as identity. The honest form is a lossy condensation with a measured gap.

---

## 9. Final status of this audit

The shape is **triangulated**, not single-source: F1, F2, F4, F6, F7 and F9 each rest on two or more figures with low overlap, plus world corroboration from fields the figures do not mention. F5 and F8 are single-source for the figure line and are corroborated across one low-overlap world field each. No claim is `grounded`. The answer is a `general` shape with `specified` checks, candidate until a ground settles it. This document is a simulation and cannot settle the question it reports on.
