# Figure-grounded audit: when should a model prioritize one of four objectives?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* says LLM output can simulate an approximate answer with the formula, but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** The figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical usage rule at `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, the metalaws note, plus the public web pages listed in `10_source_ledger.csv`. World sources are secondary and corroborate only.

---

## 0. The residual in effect terms

A model is a library Γ. It forms a belief b, takes an action a, predicts Γ(b,a), and the world returns o′. The residual is R = |Γ(b,a) − o′|, and it is **indexed per slot, not aggregated**:

> **Fig 1 :19** "The residual is indexed by object slot, not aggregated."
> **Fig 1 :22** "Aggregating across slots is how a live signal disappears into an average."

The question asks which of four objectives should be *prioritized*. In effect terms, each objective is a different anchor against which a slot's residual can be ranged:

> **Fig 2 :29** "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."

The four candidates are:

| word | what it ranges R against | anchor candidate | currency |
|---|---|---|---|
| predictive accuracy | held-out observation o′ | the measurement | residual mass |
| interpretability | a person's ability to read, check and contest the model | human judgment, but only for the question "is this understandable to a person" | description length, cognitive chunks |
| mechanistic realism | the system's generative parts and activities | a source-discriminating instrument | invariance under intervention, composition |
| usefulness for intervention | the outcome in the deployment habitat | the patient outcome, market, board | actions and their costs |

The residual that actually motivates the question is a **disagreement among these anchors on the same slot**. A model can be accurate and unreadable; readable and wrong about the mechanism; mechanistically elegant and useless for action; useful for one intervention and harmful under a shifted habitat. The live residual is the slot where one anchor says "settled" and another says "not settled." Naming one word as the global priority is a single lever on what Fig 9 calls a union.

**Arity / symmetry / scale of R.**

- Arity: at least four-place (Γ, b, a, o′) and indexed by slot s. The "priority" relation is a comparison between conditions, not a conjunction of them.
- Symmetry: priority is ordered. It is a threshold relation of the kind Fig 12 :85 calls *"a threshold relation between two quantities"*, not a symmetric join. "Better" is always relative to an anchor.
- Scale: single prediction, model library, deployment habitat, and the social decision that deploys the model. The transforms between these are lossy (Fig 4 :20, Fig 10 :68), so a conclusion at one scale does not transfer as a recording to another.

**What an answer would look like, bound before the run (Formula, "Direction").** A four-row assignment. Each row names the binding slot, the legitimate anchor, the currency, and the instrument that would show the row is wrong. This shape is the sought-for term; until it is bound it accrues no residual and no check in the loop can see it.

---

## 1. DOMAIN CENSUS (before choosing any figure line)

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Validation ground | model, held-out data, measuring instrument | residual R = \|Γ(b,a) − o′\| per slot | the measurement | admitted |
| D2 Reader's understanding | model terms and bonds, human reader | description length, cognitive chunks | human judgment, legitimate only because the question is constitutively about a person | admitted, scope-limited |
| D3 World's generative structure | parts and activities of the target system, atoms and bonds of the model | invariance under intervention, cross-kind composition | a source-discriminating instrument | admitted only where such an instrument exists; otherwise shape only |
| D4 Intervention habitat | model, decision maker, affected system and people | actions and their costs, outcomes | the patient outcome, market, board | admitted |
| X1 "single scalar model quality" | none nameable | a weighted average of the four currencies | none | not a domain yet, declined |
| X2 "interpretability is always first" / "accuracy is all that matters" as standing rules | none | none distinct from D1 to D4 | valence is relative to the residual | absorbed, not a domain |

**Partition or union?** Union. D1 and D4 overlap when a prediction changes the environment it predicts (the pneumonia/asthma case in Lipton 2016). D2 and D3 overlap when an interpretable structure is also a causal structure. D2 and D4 overlap when an explanation must be contestable. Under Fig 9 these overlaps are the important part; the union is not a list to be ranked.

> **Fig 9 :55** "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
> **Fig 9 :56** "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."
> **Fig 9 :57** "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

**Order by dependency (Fig 3).** Perception and vocabulary (what the model can represent, D2) precede the objective (what counts as progress, D1). The objective precedes planning (intervention, D4). D3, the generator, is what both D1 and D4 range against. Learn and carry closes the loop. A step whose input never arrives cannot be diagnosed, only its predecessor can (Fig 3 :22-23). So "priority" is a dependency question before it is an importance question:

> **Fig 3 :19** "Optimising a link that already works cannot rescue one that does not."
> **Fig 3 :20** "The chain is ordered by dependency, not by importance."

Strain test applied before concluding: a line that needs forcing is governing another quantity. Two candidate strains were found and re-censused (section 5): interpretability as anchor versus instrument (Fig 2 :36-38), and the world-source conflict between Rudin and Lipton on the accuracy/interpretability tradeoff. Neither flips the figure verdict.

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | R per slot, ground the only metric, frame-internal quantities disqualified | no ground reading available; accuracy is the metric for "does it predict" only |
| 2 The Ground | anchor must not update; anchor legitimacy is constitutive; independence | D1 to D4 each need their own anchor, and human judgment is legitimate only for the question about people |
| 3 Dependency Chain | dependency, not importance; broken link cannot be rescued from below | priority is a dependency order |
| 4 The Membrane | lossy transform between scales; round trip gap | a conclusion at one scale is a generator, not a recording, for another |
| 5 Mint Pipeline | MDL bargain, guards, settling necessary not sufficient | a model that explains one occasion perfectly fails the bargain |
| 6 Closure / Reachability | import moves the wall; instruments improved from worse instruments | mechanistic specificity needs an instrument already returning something |
| 7 Room Chain | agreement compounds, evidence does not | a consensus of model evaluations is not a ground |
| 8 Union Surplus | low overlap and provenance decide whether two frames add anything | two evaluators sharing one benchmark are one witness |
| 9 Leave / Arrive | union vs partition, unbundle, describe before looking, filters vs witnesses | the four objectives are a union; filters never hand the verdict |
| 10 Ground Maintainer | channel decays, declared meaning not grounded, verifier non-access | accuracy metrics saturate; interpretability must be installable, not declared |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | intervention usefulness is not a property of the model alone |
| 12 The Bond | bonds carry routes, goals and comparisons; two currencies that do not add | an interpretable list cannot guide intervention; bits and actions stay separate |
| 13 Minimum Viable Set | cross-kind composition; shape not name; unreachable is a verdict | the generator is a shape until a discriminating instrument exists |

---

## 3. Findings F1 to F12

### F1 - The four objectives form a union, not a ranking (decisive for the question's form)

Quoted in section 1: Fig 9 :55-57. The word "prioritize" invites a total order over four items. The figures say the four are overlapping conditions. A single lever clears the singly-bound region and leaves the compound standing. The compound is not a harder case of either condition; it is a different thing.

Mode `general` for the union claim, `specified` for its application to these four objectives. **Refuter:** exhibit a single scalar over model quality that preserves the per-slot residuals of all four conditions, including their intersections, without a second lever. That would contradict Fig 9 :56.

### F2 - Priority is per slot, never a global average

> **Fig 1 :19** "The residual is indexed by object slot, not aggregated."
> **Fig 1 :22** "Aggregating across slots is how a live signal disappears into an average."

A statement like "this model prioritizes accuracy" averages over slots. The slot where interpretability is binding (a contestable decision about a person) disappears into that average. This is the same failure as averaging R across objects.

Mode `general`. **Refuter:** an averaged quality score that provably preserves the location and sign of the live slot, so no signal is lost.

### F3 - Each objective is legitimate only against the anchor its question is constitutively about

> **Fig 2 :29** "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
> **Fig 2 :36** "An anchor is legitimate when the question is constitutively about it."
> **Fig 2 :37** "Human judgment is the right anchor for is this a good answer for a person, because the question is about people."
> **Fig 2 :38** "It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."

This is the pivot of the whole answer. Interpretability is not a soft extra and not a universal first principle. For "can this person understand and contest this decision" the anchor is human judgment and that is legitimate, because the question is about people. For "does this code compute correctly" human judgment is only an instrument, and instruments can be wrong on axes they do not measure. Predictive accuracy is anchored by a measurement; mechanistic realism by a source-discriminating instrument; intervention usefulness by the outcome. Confusing the anchor with the frame is the collapse Fig 2 names.

Mode `specified`. **Refuter:** show that human judgment settles "is this code correct" without any instrument, or that a held-out accuracy number settles "is this explanation contestable by this person" without a person.

### F4 - Accuracy is the only metric for the prediction question, and frame-internal quantities cannot score the frame

> **Fig 1 :23** "The ground enters as the only metric."
> **Fig 1 :27** "They are frame-internal. A frame cannot score itself with a quantity it also produces."
> **Fig 2 :45** "Frames range against the ground. They do not negotiate with it."

Doshi-Velez and Kim (2017) observe that criteria such as fairness, privacy and safety often cannot be completely quantified, which is why interpretability is demanded as a fallback. That is consistent with Fig 1 :27: a quantity the frame produces (coverage, compression, credibility) cannot also be its score. But accuracy remains the only metric for the narrow question "does it predict." It is necessary and not sufficient, which is exactly the "settled is not sufficient" distinction the formula makes elsewhere.

Mode `general`. **Refuter:** a held-out accuracy figure that also settles whether a proposed mechanism is real or whether an intervention is safe in a shifted habitat. Lipton's pneumonia/asthma case is a counterexample to any such claim.

### F5 - An interpretable list names states, not routes, goals or interventions

> **Fig 12 :111** "A vocabulary without bonds can name a state and cannot name a route to one."
> **Fig 12 :112** "A plan is a sequence. A goal is a comparison. Progress is a subtraction."

A model whose entire interpretability consists of a feature list has no ordered bonds. It can say what is in a situation and cannot say what would count as getting somewhere from it. Usefulness for intervention needs sequence, comparison and subtraction, so interpretability in the weak list sense does not deliver intervention usefulness for free. Rudin's inherently interpretable rule lists do contain ordered structure (if-then sequence, threshold comparisons), which is why they are closer to a route than a saliency map is.

Mode `general` for the structural claim, `specified` for the application. **Refuter:** an interpretable model with no ordered or comparison structure that reliably guides a novel intervention against a ground.

### F6 - Bits and actions do not add; "balance the objectives" is the named error

> **Fig 12 :125** "A composition costs in two currencies, and they do not add."
> **Fig 12 :126** "Bits price the description. Actions price finding out whether it holds."
> **Fig 12 :130** "Summing them into one figure is the error this names, not the fix for it."

Interpretability is priced in bits (how costly the model is to state and hold in mind; Rudin cites the 7±2 cognitive chunk limit). Usefulness for intervention is priced in actions (what it costs to find out whether the model holds in the habitat). A single "model quality" score that adds them is the flat-formula error: it records ingredients and not the currency split. Both readings must be kept, or the choice is made blind.

Mode `general`. **Refuter:** a common unit in which description cost and test cost are commensurable without information loss, demonstrated on a case where each reading currently predicts the other's failure.

### F7 - Intervention usefulness is a property of model and habitat, not of the model

> **Fig 11 :39** "capability is a property of agent-and-habitat, never of the agent alone."
> **Fig 11 :40** "An improvement that does not change contact changes nothing, however much it improves."
> **Fig 11 :51** "No standing list of good actors survives a change of residual."

A model that improves held-out accuracy without changing what it is in contact with has not become more useful for intervention. This is the sharpest point against a global "accuracy first" rule. Lipton (2016) gives the concrete failure: a pneumonia risk model assigns lower risk to asthmatic patients because they received more aggressive treatment; deploying it in triage changes the treatment and invalidates the prediction. The model's accuracy on the old contact was real; its capability in the new habitat was not.

Mode `specified`. **Refuter:** a model that gains intervention capability purely through better held-out accuracy with no change of contact, habitat or action set, sustained across a habitat substitution.

### F8 - Mechanistic realism needs a discriminating instrument; otherwise it is a gap

> **Fig 9 :32** "you get a kind of thing, never the answer itself"
> **Fig 13 :134** "Unreachable is a verdict here, not a silence,"
> **Fig 6 :34-35** "Where nothing is, there is no edge to extend from"

The SEP entry on mechanisms gives Woodward's condition that a component's behavior must be described by a generalization *invariant under interventions*, and notes that correlational patterns are not mechanisms. That is the same requirement in world vocabulary: a mechanism claim is not a fit to observations, it is a claim about what would happen under an intervention. Without an instrument that discriminates among sources, the framework returns a shape. Naming the specific mechanism is the metamerism error described in the source essay: a reading cannot comment on its source.

This is a declared `gap` for the general question "which mechanism is real in this model," not a hidden answer. It becomes `specified` and checkable only when a discriminating instrument exists.

Mode `general` for the gap, `specified` where an instrument is named. **Refuter:** a mechanism named and settled by an instrument that discriminates among candidate sources, with the read-and-source distinction measured rather than asserted.

### F9 - Priority follows dependency, not importance

> **Fig 3 :19** "Optimising a link that already works cannot rescue one that does not."
> **Fig 3 :27** "A link with no instrument is not a link that works. It is a link nobody has looked at."

Most modeling effort lands on accuracy because accuracy has an obvious instrument. The middle links (having terms for what a situation affords, and saying what counts as progress) have neither obvious failures nor obvious tests. A link with no instrument is not a link that works. So the honest "when" is answered by which link is currently broken and measured, not by a fixed order of the four words.

Mode `specified`. **Refuter:** an importance-ranked priority scheme that demonstrably rescues a broken upstream link by adding effort downstream.

### F10 - Filters for budget, witnesses for the verdict

> **Fig 9 :60** "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

Interpretability and accuracy are excellent filters. They decide what gets tried, who gets a budget, which model deserves a deployment test. They are not the witness. The ground is the witness. Doshi-Velez and Kim (2017) say the claim of the research should match the type of evaluation; a functionally-grounded sparsity proxy cannot witness an application-grounded claim about a person. That is the world-source form of the same rule.

Mode `general`. **Refuter:** a filter shown to settle a verdict without contact with the ground, sustained after the filter is removed.

### F11 - Buy independence in proportion to the cost of being wrong

> **Fig 2 :42** "Buy independence in proportion to the cost of being wrong."
> **Fig 2 :40** "agreement about the world is worthless when the agreeing frames share an evidence pool"

High-stakes deployment (medicine, credit, parole) is exactly where the four objectives collide. There the cost of being wrong is high, so the number of low-overlap checks should rise. NIST AI RMF is a public example of an institutional attempt to make evaluation a consensus-driven, revisable process rather than a single score. Two reviewers reading the same benchmark are one witness wearing two names (Fig 8).

Mode `specified`. **Refuter:** a high-stakes deployment where a single in-frame metric settles all four objectives and no independent frame is available, with the cost of error shown to be low.

### F12 - The derivation is a simulation, not a validation

> **Fig 10 :42** "A verifier that can reconstruct the claim cannot verify it."

And from *The Recursive Self-Improvement Trap*: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* The four-row shape produced here is a candidate. It is not settled by its own internal consistency, and agreement with the essays is one evidence pool talking.

Mode `general`. **Refuter:** a ground reading that fires any of the pre-registered falsifiers below.

---

## 4. Pre-registered refuter (written before the conclusion)

The shape claim is: priority is a per-slot, dependency-ordered assignment of four objectives to four legitimate anchors, kept in two currencies, with a declared gap where no discriminating instrument exists. It is refuted if any of the following holds:

1. A single scalar model-quality objective is exhibited that preserves all four per-slot residuals and resolves their intersections without a second lever (breaks Fig 9 :56).
2. An averaged score is shown to preserve the location and sign of the live slot in all deployments tested (breaks Fig 1 :22).
3. Human judgment is shown to settle "is this code correct" without an instrument, or a measurement is shown to settle "is this explanation contestable by this person" without a person (breaks Fig 2 :36-38).
4. A model with no ordered bonds is shown to guide a novel intervention reliably against a ground (breaks Fig 12 :111-112).
5. Description cost and test cost are shown commensurable in a common unit without loss on a case where each currently predicts the other's failure (breaks Fig 12 :130).
6. A model gains intervention capability purely through held-out accuracy, with no change of contact, across a habitat substitution (breaks Fig 11 :40).
7. A source-discriminating instrument settles a specific mechanism that the figures would only give as a shape (moves F8 from gap to grounded; this is a successful refutation of the gap claim, not of the framework).
8. An importance-ordered scheme is shown to rescue a broken upstream link by downstream effort alone (breaks Fig 3 :19).

These were written before the verdict in section 6. A failure is more useful than an endorsement.

---

## 5. Strains, re-census and retraction log

### Strain A: interpretability as anchor versus instrument (Fig 2 :36-38)

Initial reading: "human judgment is the right anchor" seems to make interpretability universal. Strain test: the line only fits with a strain if applied to all four objectives. Re-census: the same passage immediately says human judgment is *only an instrument* for "is this code correct." The two sentences govern different questions. Interpretability is an anchor for the question that is constitutively about a person, and an instrument for the question that is about code. No contradiction; the domain changed. The verdict is unchanged and is now scoped.

### Strain B: Rudin versus Lipton on the accuracy/interpretability tradeoff

World source conflict: Rudin (2019) writes *"It is a myth that there is necessarily a trade-off between accuracy and interpretability"* and reports that in iterative data science *"the accuracy/interpretability tradeoff is reversed - more interpretability leads to better overall accuracy, not worse."* Lipton (2016) writes *"In some cases, transparency may be at odds with the broader objectives of AI"* and warns against giving up predictive power without justification. Conflict rule: a conflict sends the derivation back to the census, it never flips the verdict. Re-census: Rudin's claim is about inherently interpretable models on structured data within a knowledge-discovery loop; Lipton's is about transparency constraints and post-hoc interpretations across broader objectives including vision and deployment. Different objects. Both are in the same ML-interpretability evidence pool, so their agreement or disagreement is one witness, not two. The figure verdict (two currencies, union, filters not witnesses) governs both and is not overruled by either.

### Strain C: "shape, not a name" applied to mechanism

Re-census: the canonical phrase governs a *missing* primitive not held in Γ. For this question, the mechanism of a deployed model is often not held in the model's library at all (a fitted predictor has no generator). So F8's gap is the correct use of the limit: the framework returns a shape for the missing generator. Where the model's structure is itself the object of study and is held (a rule list, a causal graph), an instrument can settle it. Both readings are recorded.

### Retraction and confirmation log

| earlier reading | status after re-census |
|---|---|
| "prioritize" means pick one objective globally | **Retracted.** Fig 9 :55-57 governs a union; one lever leaves intersections standing. |
| human judgment is a universal anchor | **Retracted and narrowed.** Fig 2 :37-38 makes it anchor only for the question about people. |
| accuracy is the whole verdict | **Retracted.** Fig 1 :23 makes it the only metric for the prediction slot, not for the other three. |
| interpretability always trades off against accuracy | **Retracted as a universal.** Rudin 2019; Lipton 2016 scoped to different objects. |
| mechanistic realism is a gap in all cases | **Narrowed.** Gap only where no discriminating instrument exists; Fig 6 :34-35. |
| the four objectives add to one score | **Refused.** Fig 12 :125-130; two currencies held apart. |
| the accuracy/interpretability conflict needs a human ruling | **Refused.** WATSON 60: the figures decide design questions; no ruling needed. |
| the union reading | **Confirmed** by Fig 9 :54-57 after independent second-seat census in `11_audit.md`. |

---

## 6. Recommendation

1. Replace "which objective is first" with "which condition is binding on this slot at this stage." Unbundle the union before searching (Fig 9 :54).
2. Assign an anchor per objective (Fig 2 :29, :36-38). Do not let human judgment settle code correctness and do not let a metric settle contestability.
3. Keep two ledgers: bits for description cost, actions for test cost (Fig 12 :125-130). Never publish a single summed quality score as the verdict.
4. Where the model will act on the world, test contact, not just accuracy (Fig 11 :40). Lipton's pneumonia case is the standing example.
5. Where a mechanism is claimed, require a source-discriminating instrument; otherwise print the shape and the gap (Fig 9 :32).
6. Buy independent checks in proportion to cost of error (Fig 2 :42), and never pool agreement from one evidence pool (Fig 2 :40).
7. Lead outreach with the four-row shape and its refuters, then offer links only after a recorded verdict (Fig 10 :52).

---

## 7. Canonical usage check

Two sources were read after the first four sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; and the limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of the instruments and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the seat reads the ground; it does not ask the anchor to decide what the figures already settle. The figures are metalaws, so design questions are answered by derivation, not by escalation. The note names the failure mode of ending with "this needs your ruling" when the figures already decide.

### Confirmations after the canonical check

| earlier finding | status |
|---|---|
| F1 union not ranking | **Canonically confirmed.** The README's re-census rule and Fig 9 :54-57 agree. |
| F8 mechanism gap | **Canonically confirmed.** The README's "shape, not a name" and Fig 13 :134 agree; unreachable is a verdict. |
| F11 independence | **Canonically confirmed.** Fig 2 :42 prices independence in proportion to cost of error. |
| Simulated status | **Canonically confirmed.** The README says the framework is a generator of the shape of an answer, not the final answer; the RSI essay says LLM output is simulacra. |

### Seven-question recursive derivation (summary)

1. **Is one objective globally first?** No. Fig 9 :55-57. Union, not ranking.
2. **Can the four be averaged?** No. Fig 1 :22 and Fig 12 :130. Two currencies, per-slot residual.
3. **Is accuracy the verdict?** No. Fig 1 :23, only metric for the prediction slot; Fig 2 :45 frames range against the ground.
4. **Is interpretability an anchor?** For the question about a person, yes; for code correctness, only an instrument. Fig 2 :37-38.
5. **Is mechanistic realism nameable?** Only with a discriminating instrument. Fig 9 :32; Fig 6 :34-35.
6. **Does usefulness belong to the model?** No. Fig 11 :39-40. Agent-and-habitat.
7. **What decides priority?** The live residual and the dependency stage. Fig 3 :19-20. Filters for budget, witnesses for the verdict, Fig 9 :60.

### Updated verdict

The shape survives: a per-slot, dependency-ordered assignment of four objectives to four legitimate anchors, priced in two currencies, with a declared gap where no discriminating instrument exists. What is refused: any global ranking, any single summed quality score, any transfer of human judgment to code correctness, any mechanism name without a source-discriminating instrument, and any claim that usefulness is a property of the model alone. Strained after re-census: **none in the figures**. Two world-source conflicts were scoped and recorded; one source pool, so no corroboration weight claimed.
