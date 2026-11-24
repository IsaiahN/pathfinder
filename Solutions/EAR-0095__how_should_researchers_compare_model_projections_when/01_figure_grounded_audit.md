# Figure-grounded audit: how to compare disagreeing model projections

**Mode of this document: `specified`, not `grounded`.** It states the shape of a comparison procedure and what a ground reading would have to show. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Figure quotes are verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`. World sources were opened 2026-11-22 and are recorded in `10_source_ledger.csv`.

---

## 0. The question in effect terms (the residual)

The question is *how to compare*, not which projection is correct. State it as an effect:

- A set of models projects a changing system. Each projection is a prediction from a bounded frame.
- The researchers observe a gap between what the models project and what the ground returns. That gap is **R**.
- The models disagree along three axes named in the question: probability, timing, severity.
- Two candidate procedures:
  - **A:** average the projections into an ensemble mean and spread; treat agreement as robustness and spread as probability.
  - **B:** unbundle the three conditions, range each model separately against the ground, weight by independence and fitness, keep the axes in separate accounts, and report what remains unreachable.

What each leads to: A produces a single fluent number and a confidence interval that may be a weighted average of influence, and it spends the independence of the readers asked to endorse it. B produces a per-slot residual record, a ranked and reversible set of cuts, and an explicit stop where the instruments cannot decide.

**Bind the sought-for shape as an ordinary term before the run** (Formula, "Direction"). The shape I am looking for is: *a comparison procedure that preserves per-slot disagreement, refuses to convert dependent agreement into corroboration, keeps incommensurate axes apart, and names what a ground reading would have to show.* Binding it lets it accrue a residual and be refused by the same test as everything else.

---

## 1. Domain census (before choosing any figure line)

**R by arity, symmetry and scale.**

- **Arity:** one residual with three bundled conditions (probability, timing, severity). Not one hard question, three well-formed ones (Fig 9 :4-5). This is a **union compound**, not a partition (Fig 9 :57).
- **Symmetry:** asymmetric. Each model is a distinct frame with its own history and weighting. The three axes are not interchangeable: probability is a measure over outcomes, timing is an ordering in time, severity is a magnitude on a state variable. Swapping axes changes the question.
- **Scale:** R is indexed per object slot, meaning region, variable and horizon. It is never a single global number (Fig 1 :19, Fig 1 :28).

**One line per domain: actors / currency / anchor. A domain with no nameable anchor is not yet a domain.**

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| **D1, the models as frames** | individual climate models, ensemble members, shared physics and code | projections, that is predictions Γ(b,a) | none of its own; must range against D2 | union of frames; some overlap through shared lineage |
| **D2, the observational ground** | instruments, reanalyses, proxy records | observations o-prime | the ground itself, which must not update on model opinion (Fig 2 :33) | partition boundary between what is measured and what is predicted |
| **D3, the comparison and decision frame** | researchers, assessment bodies, reviewers | agreement and residuals, verdicts | the ground, never agreement (Fig 7 :35) | partition: which cuts are filters for budget and which are witnesses for verdict |

**Partition or union.** The residual is a union (three conditions in one compound), and the ensemble is a union of frames with unequal independence. A mean that merges them is a blend, which Fig 8 warns adds nothing when closures overlap (Fig 8 :12-15). So the structure is **union first, then partition inside each unbundled condition**.

**Order by dependency (Fig 3).**

1. Describe R per slot before choosing a frame (Fig 9 :27-28).
2. Split the union before searching inside it (Fig 9 :4-5, Fig 9 :54).
3. Range each model against the ground separately (Fig 2 :46). This is the link that usually breaks: a mean can be computed without ever ranging the frames, so the step below the break is a reading of nothing (Fig 3 :22-23).
4. Establish independence between frames before interpreting agreement (Fig 2 :31-32).
5. Only then let the ground decide (Fig 9 :42).

Effort spent on step 5 cannot rescue a missing step 3 (Fig 3 :19).

---

## 2. Figure census (bearing, quoted before concluding)

| figure | bearing | preliminary verdict |
|---|---|---|
| Fig 1, The Agent | residual indexed per slot, never aggregated | governs the shape of R |
| Fig 2, The Ground | anchor must not update, independence between frames, alignment is triangulation | governs D2 and D3 |
| Fig 3, Dependency Chain | status per link, ordered by dependency | governs the protocol order |
| Fig 5, Mint Pipeline | support, reach, novelty, settlement, overfitting to one occasion | governs what a projection is worth |
| Fig 6, Closure / Reachability | import moves the wall, instruments improved from worse ones | governs what more search buys |
| Fig 7, Room Chain | agreement compounds, evidence does not | governs ensemble-size reasoning |
| Fig 8, Union Surplus | convergence versus import, residual first frame second, idempotent closure | governs the blend failure |
| Fig 9, Leave / Arrive | split before search, unbundle unions, describe before looking, filters versus witnesses | governs the three-axis split (decisive) |
| Fig 10, Ground Maintainer | verifier non-access, bring the residual not the source, declare stakes | governs outreach and checking |
| Fig 11, The Habitat | enumerate the habitat, contact is what changes capability | governs which actors enter the comparison |
| Fig 12, The Bond | arrangement carries meaning, two currencies that do not add | governs probability/timing/severity separation (decisive) |
| Fig 13, Minimum Viable Set | unreachable is a verdict, narrowing gets close while the ground decides | governs the honest stop |
| Operators / Symbols tables | R is the aim per slot, R_T is the gap in a lossy condensation | governs the round trip check |

Strained readings are named in §4, not smoothed over.

---

## 3. Findings F1 to F9

### F1: Measure the residual per slot; averaging across slots throws away the signal (governs R, D1)

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*

Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

Fig 1 :28: *"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."*

A global ensemble mean is an aggregate over slots. If one region or one variable carries a live residual while the global number is near zero, the global number reports health where there is a live signal. The correct comparison keeps the residual indexed by region, variable and horizon. Fig 1 :20-21 adds that *"a global residual near zero with one live slot is a legal state and not an inert one."*

**Verdict for D1:** `triangulated` across Fig 1 (per-slot indexing) and Fig 2 (frames range separately), two figures with low conceptual overlap. **Refuter:** show that a single global score preserves a positive per-slot residual that the indexed record would otherwise lose, under a declared ground reading. Until that is shown, keep the slots separate.

### F2: The anchor must not update, and each frame is corrected by it separately (governs D2)

Fig 2 :33: *"The anchor must not update."*

Fig 2 :29-30: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."*

Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."*

Fig 2 :46: *"Each frame is corrected by it separately, and what makes the correction sound is that neither frame can move it."*

The ground here is the observational record: measurements, reanalyses, proxy evidence. If the "ground" used to score models is itself adjusted because the models agree, it has become another frame and the comparison is panel 1 of Fig 2, coherent drift. Each model must be ranged against the observations on its own, and the observations must not be moved by model consensus.

**Verdict for D2:** `triangulated` (Fig 2 :33/:45/:46 and Fig 11 :40, *"An improvement that does not change contact changes nothing, however much it improves."*). **Refuter:** a demonstration that changing a model's weight legitimately changes the observational anchor used to score it. If that happens, the anchor has been authored.

### F3: Agreement is not corroboration when the models share an evidence pool (governs D3)

Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence."*

Fig 2 :32: *"Independence is what makes agreement mean something."*

Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool"*

Fig 2 :44: *"The effective-sample-size correction for correlated observations is standard in survey statistics and meta-analysis; the collapse is the same arithmetic read as a warning."*

Climate models are not independent draws. They share literature, parameterisations, evaluation data and often whole code components. Ten models from one lineage are closer to one witness with ten names than to ten witnesses. Counting them as ten overstates the evidence. Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*

**Verdict for D3:** `triangulated` (Fig 2 :31-32/:40 plus Fig 7 :12-13, *"same closure, handed along; agreement compounds, evidence does not"*). **Refuter:** show that two models with shared parent code and shared evaluation data carry full independent corroborating weight on the residual at issue. This is a ground question about the specific pair, not an assumption.

### F4: Disagreement that does not shrink is several questions; unbundle before search (decisive for the question's three axes)

Fig 9 :4-5: *"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."*

Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*

Fig 9 :57: *"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."*

The question itself names three conditions: probability, timing, severity. These are exactly the case where each rule keeps working on a different subset. A model can be right about severity and wrong about timing; another can agree on probability and disagree on onset. Merging them into one "projection disagreement" score is a bundle, and a single lever clears only the region where one condition holds.

**Verdict:** `triangulated` across Fig 9 :4-5, :54, :57 and Fig 12 :125-130 (incommensurate currencies). **Refuter:** evidence that the three axes collapse to one residual that shrinks under effort on a declared ground. The world literature supplies the analogue in `04_links_and_distribution.md`: IPCC AR6 says storylines help when models give substantially different or opposing changes.

### F5: Probability, timing and severity are two currencies and cannot be summed (decisive)

Fig 12 :125: *"A composition costs in two currencies, and they do not add."*

Fig 12 :126-127: *"Bits price the description. Actions price finding out whether it holds. They are in different units, so a system holding one accounting cannot compare them and will not notice the shortfall."*

Fig 12 :130: *"Summing them into one figure is the error this names, not the fix for it. A price in bits and a price in actions are two readings, held apart."*

The figure's two currencies are bits and actions. The structural lesson transfers to this question: magnitude/severity and timing/probability are different readings of a projection. Expressing all three as one "risk score" is the named error. It proposes arrangements the researchers cannot afford to test and hides the shortfall. Keep three accounts: a probability account, a timing account, a severity account, each with its own residual and its own settlement test.

**Verdict:** `single-source` for the figure statement (Fig 12), corroborated from a different pool by the climate literature's three distinct uncertainty sources (emissions, internal variability, model response) in Brunner et al. 2020. **Refuter:** a demonstrated one-to-one commensurability of the three axes under a declared ground that loses no decision-relevant information.

### F6: The ensemble mean is not a verdict, and adding members adds spelling after a point

Fig 7 :35: *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*

Fig 7 :12-13: *"same closure, handed along; agreement compounds, evidence does not"*

Fig 8 :32: *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."*

More members drawn from the same closure do not create a new kind of evidence. The ensemble mean is a room's average, useful as a compact description but not a verdict. The ground votes when one frame is selected against the residual the last one surfaced (Fig 7 :36).

**Verdict:** `triangulated` (Fig 7 :35 plus Fig 8 :32). **Refuter:** show that increasing the count of models drawn from one lineage adds independent evidence to the verdict beyond what the first few members supplied.

### F7: Describe the residual before choosing the frame, and keep provenance (the import trap)

Fig 9 :27-28: *"describe it before you go looking, or any frame you pick will seem to fit"*

Fig 8 :53: *"Residual first, frame second."*

Fig 8 :51-52: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."*

Picking a favourite model and then explaining the disagreement is apophenia. Describe R first (per slot, per axis), then find which frame predicts its shape. A model that agrees with another by shared ancestry is an adopted import; a model that arrives at the same projection by a separate route is a convergent derivation. The contents look identical, so only the record separates them. Record lineage, version, evaluation data and tuning history for each model.

**Verdict:** `triangulated` (Fig 8 :51-53, Fig 9 :27-28). **Refuter:** a case where two models with identical outputs and documented shared ancestry still count as two independent witnesses on the residual at issue.

### F8: A model that fits one occasion perfectly is not licensed for projection

Fig 5 :43-44: *"A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."*

Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*

Fig 6 :30: *"Cast it in effect terms."*

Historical fit is a necessary but not sufficient licence for future projection. A model tuned to reproduce one historical record may simply encode that occasion. The test is whether it stays in contact with the ground on diagnostics relevant to the projected quantity, and whether a different frame holds something this one cannot reach. When a frame fails to resolve a slot, ask SEARCHED first, then INWARD, then OUTWARD (§7).

**Verdict:** `single-source` for the figure rule, corroborated by Abramowitz et al. 2019 and Brunner et al. 2020 on out-of-sample testing. **Refuter:** a historical-fit-only selection that survives a genuine out-of-sample test on the projection horizon.

### F9: The honest stop: unreachable is a verdict, narrowing gets close, the ground decides

Fig 13 :134: *"Unreachable is a verdict here, not a silence"*

Fig 13 :138: *"narrowing gets you close while the ground decides"*

Fig 9 :32: *"you get a kind of thing, never the answer itself"*

Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

The protocol does not have to deliver a single answer. If the current model set and instruments cannot resolve the timing of a change at the required scale, the correct output is *unreachable at this budget* with the residual described in effect terms, not a fabricated consensus. Underivable-in-principle and unreachable-at-this-budget are different facts with different instructions (Fig 6 :51-52). Report which one applies.

**Verdict:** `triangulated` (Fig 13 :134/:138, Fig 8 :39, Fig 9 :32). **Refuter:** a demonstration that the supposedly unreachable slot is in the closure and was merely unfound, in which case the instruction is more independent search, not a new frame.

---

## 4. Strain test and re-census

I tested every figure line against the residual before accepting it.

- **Apparent strain, Fig 7 :12-13 versus Fig 8 :32.** Both say agreement does not add evidence. They govern different things: Fig 7 governs handing a question along rooms, Fig 8 governs composing inside one closure. Re-census: no strain, two levels of the same law.
- **Apparent strain, Fig 12's two currencies versus the three axes of the question.** The figure names bits and actions; the question names probability, timing and severity. Re-census: I am not claiming the figure names these axes. I am applying its structural rule (different units, do not sum) to axes that the world literature independently treats as distinct. This is a `specified` transfer, not a quote. Marked as such, not hidden.
- **Apparent strain, Fig 1 per-slot residual versus a global climate mean.** Fig 1 governs the controller's error signal; a global mean is a legitimate *description* of a state but not a residual for deciding where to look. Re-census: no strain, different quantities.
- **Live strain, kept open.** Fig 2 :44 invokes the effective-sample-size correction as standard arithmetic, but the climate literature has no universally accepted definition of model independence (Abramowitz et al. 2019). The law is clear; the metric for this domain is not. I record this as a strain in the application, not a correction to the figure.

After re-census: one live strain in the metric, none in the figure lines.

---

## 5. Pre-registered refuter (written before the conclusion)

Per Fig 10 :59: *"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."* And the standing rule: *"a falsifier written before the run is a design instrument, not only an honesty device."*

The comparison protocol is refuted if any of the following holds on a declared ground:

1. A single global ensemble score is shown to preserve a positive per-slot residual that the indexed record would otherwise have lost (breaks F1, Fig 1 :19/:22/:28).
2. Models with documented shared ancestry, shared evaluation data and shared code are shown to carry full independent corroborating weight on the residual at issue (breaks F2 and F3, Fig 2 :31-32/:40).
3. The probability, timing and severity disagreement is shown to shrink as one question under sustained effort (breaks F4, Fig 9 :4-5).
4. The three axes are shown to be commensurable in one score with no loss of decision-relevant information (breaks F5, Fig 12 :125-130).
5. An observational anchor is legitimately updated by model consensus and still settles the question (breaks Fig 2 :33).

If any fires, the protocol is withdrawn or revised at that point. Until one is run, nothing here is `grounded`.

---

## 6. Recommendation: the comparison protocol

This is the answer the figures license, stated as steps. Mode: `specified`.

1. **Describe R in effect terms per slot.** Index by region, variable and horizon. Do not start with a global mean (F1).
2. **Unbundle the union into three conditions:** probability, timing, severity. Give each its own loop and its own ground (Fig 9 :4-5, :57).
3. **Range each model separately against the observational record.** The anchor must not move when models disagree (F2).
4. **Estimate independence before interpreting agreement.** Record lineage, shared components and shared evaluation data. Discount correlated witnesses (F3).
5. **Keep three accounts.** Do not reduce probability, timing and severity to one score (F5).
6. **Use the mean as a description, never as a verdict.** Add models only while they bring new information or a different closure (F6).
7. **Describe the residual before choosing the preferred frame.** Keep the provenance record so convergent derivation and adopted import can be told apart (F7).
8. **Test out of sample.** Historical fit alone does not license projection (F8).
9. **Stop honestly.** If the current closure cannot resolve a slot, return *unreachable at this budget* with the residual characterised in effect terms (F9). Distinguish it from underivable in principle.
10. **Use filters for the budget and witnesses for the verdict.** Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

---

## 7. The three questions when no line closes the residual

Distinct and in order, per Formula step 7.

- **SEARCHED, asked first:** is the resolving frame already in our closure and unfound? Same atoms, same wall, more of the space visited. Distribute the search and keep searchers independent.
- **INWARD:** is our instrument adequate to hold the residual? Sharpen in our own terms. An instrument is improved from a worse instrument already returning something.
- **OUTWARD:** does another frame already hold a closure that predicts this shape? Cast the residual in effect terms so it can travel. Source gate (provenance), shadow test (explains a gap), debited against independence.

Do not read INWARD against OUTWARD. Importing against a budget limit adds an atom that was not needed.

---

## 8. Canonical usage check and retraction/confirmation log

Two sources were read after the first sections and govern how the figures may be used: the canonical figures README (`FRAMEWORK/reference/FIGURES_README_canonical.md`) and the local formula. The README states that the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them"* and that *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* It also gives the canonical limit: the framework returns *"a shape, not a name"*, then stops at the limit of the instruments and records the lineage. *"Indiscernibility is not identity."*

| earlier reading | status after the canonical check |
|---|---|
| F1 initially written as "never use an ensemble mean" | **Retracted in that absolute form.** Fig 1 governs the residual signal, not the usefulness of a mean as a description. The mean is allowed as description, refused as verdict. |
| F4 written as "there are exactly three questions" | **Narrowed.** The question names three axes; the figure licenses a split whenever a disagreement does not shrink. I claim three here because the question supplies them, not because the figure enumerates them. |
| F5 written as "probability, timing and severity are Fig 12's two currencies" | **Retracted as a quote claim.** Fig 12 names bits and actions. The transfer is a structural analogy and is labelled `specified`. |
| F6 written as "ensemble spread is always probability" | **Retracted.** Spread is not a full measure of uncertainty (IPCC AR6, World source 1). The figure only bars treating room agreement as a verdict. |
| F7 written as "any model similarity invalidates comparison" | **Narrowed.** Similarity downgrades independence on the specific residual; it does not invalidate the model. Abramowitz et al. 2019 stress that independence is problem dependent. |
| F2 (anchor must not update) | **Canonically confirmed.** Fig 2 :33 and the README's "the ground, not agreement, decides." |
| F9 (unreachable is a verdict) | **Canonically confirmed.** Fig 13 :134 and the plan's own rule that a question may honestly end in `gap` or `unreachable`. |
| Apparent Fig 12 versus three axes strain | **Not strained after re-census.** Different object: the figure governs currencies of a composition, the question supplies axes of a comparison. See §4. |

Nothing was silently erased. Earlier absolute forms are preserved above so a reader can see the correction.

---

## 9. Findings summary

| finding | domain | verdict | figure line |
|---|---|---|---|
| F1 residual per slot, not aggregated | R, D1 | triangulated | Fig 1 :19, :22, :28 |
| F2 anchor must not update, frames ranged separately | D2 | triangulated | Fig 2 :29-30, :33, :45, :46 |
| F3 dependent agreement is not corroboration | D3 | triangulated | Fig 2 :31-32, :40, :42, :44 |
| F4 unbundle the union before search | R | triangulated | Fig 9 :4-5, :54, :57 |
| F5 keep axes in separate accounts | R | single-source plus world corroboration | Fig 12 :125-130 |
| F6 ensemble mean is description, not verdict | D3 | triangulated | Fig 7 :12-13, :35; Fig 8 :32 |
| F7 describe residual first, keep provenance | D1, D3 | triangulated | Fig 8 :51-53; Fig 9 :27-28 |
| F8 historical fit does not license projection | D1 | single-source plus world corroboration | Fig 5 :43-44; Fig 6 :23 |
| F9 unreachable is a verdict | all | triangulated | Fig 13 :134, :138; Fig 8 :39 |

**Overall verdict, `specified`, ungrounded, candidate:** the figures license a *shape of procedure* for comparison, not a numerical answer and not a single best model. No ground reading was taken in this derivation. Strained after re-census: one, the metric for model independence, named in §4.
