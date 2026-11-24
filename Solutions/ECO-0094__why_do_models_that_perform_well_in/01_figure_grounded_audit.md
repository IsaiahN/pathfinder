# Figure-grounded audit: why a model fitted in one region or period fails in another

**Mode of this document: `specified`, not `grounded`.** It states what would have to be enumerated and measured. Per `FRAMEWORK/figures/THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (essay, opened 2026-11-23) records: "the truly testable output would need to be derived from the real architecture or working the formula yourself" and calls simulated model output "simulacra". This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the ecological question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Local framework files were opened this session: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, cited as `Fig N :line`), `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`, `FRAMEWORK/figures/THE_FORMULA.md`. World sources were opened and are listed in `10_source_ledger.csv`.

---

## 0. The residual, stated in effect terms

A model M is fitted and validated in region A (or period A). Against ground A it has a small residual. The same M applied to region B (or period B) has a large residual. What is being decided:

- Option A: the failure is inside M. A better algorithm, more data, or more tuning in A would fix it.
- Option B: the ground changed its answer, so no fixed model could track it.
- Option C: the failure is in contact. M's good performance was a property of the pair (M, habitat A). Transfer to B substitutes a habitat M did not author, and the conditions that made M work in A were never enumerated.

Each leads to a different remedy. A leads to refitting. B leads to giving up on transfer. C leads to enumerating the target habitat before transfer and importing what it requires. The figures decide between them, not the modeller's preference.

**Bind the sought-for shape as an ordinary term (Formula, "Direction").** Write down what an answer would look like: "transfer failure is habitat substitution with unenumerated contact, not model decay", then let it accrue a residual like anything else. This makes the preference refusable. Without this discipline the frame aims the refusal at the outcome it did not want rather than at the belief it holds (Fig 5 :62-63).

---

## 1. Domain census (before choosing any figure line)

### 1.1 R by arity, symmetry, scale

- **Arity.** Three terms are in contact: the model M, the source habitat A, the target habitat B. The residual is a function R(M, A, B), not a single number. Fig 1 :19: "The residual is indexed by object slot, not aggregated." The "slots" here are the sites, species, seasons and interactions that make up A and B. A global performance statistic across them is not R.
- **Symmetry.** Transfer A to B is not transfer B to A. The bond is ordered (→ sequence, Fig 12 :73: "A then B; B needs A to have happened"). Treating transfer as a symmetric relation is the first error to refuse.
- **Scale.** M is fitted at the local scale (one region, one period). Its application is at a different scale (another region, another period). A membrane sits between them (Fig 4). The transform loses information, so the round trip A to general and back to A or B carries a nonzero gap R_T (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

| domain | actors | currency | anchor | nameable anchor? |
|---|---|---|---|---|
| D1, the fitted-model frame | predictors, parameters, functional form, training records | fitted residual on A, cross-validated inside A | ground A: the measurements it was fitted and validated against | yes, the training and validation data |
| D2, the source and target habitats | actors (species, observers), conditions (light, water, temperature, season, terrain), relations (predation, pollination, competition, dependency) | ecological outcomes in A and in B | ground B: independent observations in the target | yes, independent field records |
| D3, the verification frame | validation designs, reviewers, journals | agreement versus residual on B | the ground, never agreement | yes, an external dataset or experiment |

No domain is admitted on a name alone: each has a currency and a nameable anchor. A "general theory of transferability" with no named anchor would not be a domain yet.

### 1.3 Partition or union

This is a **union compound**, not a partition. Failure in B can come from a changed habitat, from a rigid model, or from both at once. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :58: "a case in two conditions is not a harder case of either." A single lever (more data in A) clears the region where only one condition holds and leaves the intersections standing. So the loop must run once per condition and once on the overlap, and verdicts stay separate.

### 1.4 Order by dependency (Fig 3)

1. Enumerate the habitat in contact with the residual (Fig 11 :43). This is the vocabulary link, link 2 of Fig 3, the one with no instrument and therefore the one usually skipped (Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at.").
2. Describe the residual in effect terms before selecting a frame (Fig 9 :27-28).
3. Fit M and test transfer against an independent ground B (Fig 2 :45).
4. Only then decide whether a term must be imported (Fig 6 :23). Optimising link 4 (planning, tuning) cannot rescue a broken link 2 (Fig 3 :19).

---

## 1.5 Figure census (bearing and verdict before findings)

| figure | bearing on this residual | verdict after census |
|---|---|---|
| 1 The Agent | residual per slot; frame-internal metrics are disqualified | aggregate accuracy is not R; per-site residual is |
| 2 The Ground | anchor does not update; independence; agreement is not a verdict | random CV inside A shares a pool with training; external B is the anchor |
| 3 Dependency Chain | the middle vocabulary link has no instrument | habitat enumeration precedes fitting |
| 4 The Membrane | methods cross up, recordings do not; round-trip gap | a fitted model is a recording of one occasion; transfer is a lossy crossing |
| 5 Mint Pipeline | one-occasion terms fail the bargain; fifth kind (refuted) | a model that explains A perfectly is not thereby licensed for B |
| 6 Closure / Reachability | the wall moves only on contact with a different closure | B's conditions are outside closure(Γ_A); import is required |
| 7 Room Chain | same closure handed along compounds agreement, not evidence | many models validated in A are one long room |
| 8 Union Surplus | low overlap and residual-first lookup; import has a source gate | two independent grounds triangulate; provenance separates them |
| 9 Leave / Arrive | describe the residual before choosing a frame; union versus partition | unbundle the compound before searching |
| 10 Ground Maintainer | ground does not decay, channel does; verifier non-access | failure is a broken channel to B, not an moved ground |
| 11 The Habitat | capability is agent-and-habitat; isolation is substitution; valence is relative | decisive governor of the residual (F1, F2, F4) |
| 12 The Bond | arrangement is the substance; gradient over space versus time | a model is a molecule; transfer changes its bonds, not just its atoms |
| 13 Minimum Viable Set | space, time and gradient are distinct terms; cross-kind composition | a spatial and a temporal gradient are different molecules |
| Operators / Symbols | → ordered; ⋛ comparison; R is the aim, per slot | transfer is ordered; a global score is not R |
| Formula | steps 2, 5, 7, "Direction", "Habitat", R_T | refuse before mint; settle at the ground; SEARCHED, INWARD, OUTWARD |

Strained readings are named in §3 and not smoothed over.

---

## 2. Findings (one loop per domain, verbatim before conclusion)

### F1: Transfer is habitat substitution, not model decay (decisive; triangulated)

Fig 11 :66: "Isolation is not removal of the habitat. It is substitution of one habitat for another."
Fig 11 :67: "Move the residual and you must reproduce everything its goal required, and you inherit the new habitat's actors, which you did not choose."
Fig 11 :68: "what you failed to reproduce is invisible until the goal fails"
Fig 11 :69: "what you unintentionally introduced is invisible until it acts"

Moving a fitted model from A to B reproduces the goal statement (predict the species) but not necessarily the conditions the goal required in A. The actors and conditions of B arrive unbidden, and the omissions and additions only register when the prediction fails. That is the reported phenomenon exactly: good performance in A, failure in B, with the cause appearing only at the moment of transfer.

The capability claim that makes this more than a description: Fig 11 :39 "capability is a property of agent-and-habitat, never of the agent alone", and Fig 11 :40 "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves." A better optimizer trained only on A does not change contact with B, so it does not buy transfer.

**Triangulation.** Low overlap between the habitat substitution rule (Fig 11) and the recording rule (Fig 4 :25, "A recording carried upward looks like knowledge and is a description of one occasion.") and the scale rule (Fig 13 :76, "A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is."). Three figures with different subjects converge. Not one figure restated.

**Refuter.** A documented transfer in which the target habitat's actors, conditions and relations were substituted for the source's, yet model performance did not change, with the substitution independently measured and the model unchanged. That breaks Fig 11 :66-69. Also: a demonstration that M's capability is invariant to habitat under a controlled habitat swap.

**Mode:** `general` for the structural claim, `specified` for its binding to ecological models.

### F2: Valence is relative to the residual, so learned roles do not carry (triangulated)

Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries."
Fig 11 :50: "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."
Fig 11 :51: "No standing list of good actors survives a change of residual."

A predictor that helps in A (a cover type, a temperature threshold, an interacting species) is not a "good predictor" in general. It is good for a residual in a habitat. When the residual or habitat changes, its sign and magnitude can invert or vanish. Fig 13 :76 gives the second witness from a different domain: "A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is." A term's identity includes what it is bonded to, so re-bonding a predictor to a new region or period is a different term, not the same term moved.

World corroboration (secondary, not the verdict): Estrada-Peña 2026 found that historical correlations among climate variables change as the climate evolves, so a model that relies on variable combinations that uncouple produces uncertain extrapolation. Roberts et al. 2017 found that random cross-validation of structured ecological data gives "serious underestimation of predictive error" and ample opportunity for overfitting with non-causal predictors. Both predict that a predictor's apparent value is a property of the sampling frame, but they are corroboration only.

**Triangulation:** Fig 11 :49-51 and Fig 13 :76, low overlap (one about roles in a habitat, one about composition identity). **Refuter:** show that for the terms M uses, valence (sign and magnitude, not just presence) is invariant across a documented change of residual in two habitats. That breaks Fig 11 :49-51. **Mode:** `general` structural, `specified` binding.

### F3: The fitted model is a recording of one occasion, not a generator (triangulated)

Fig 4 :22: "Only methods cross up. Only head starts come down."
Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion."
Fig 4 :27: "The transform between scales loses information, and that is the point."
Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

A model fitted in A, carried to the scale of "general ecological prediction", is a recording of one occasion presented as knowledge. What can cross up is a method (how to enumerate a habitat, how to describe a residual), never the particular fitted coefficients. The transform is lossy, and the honest report is the round-trip gap R_T, not an assumed identity between local fit and general rule.

Fig 6 :23 triangulates from a different figure: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." The closure built over A cannot reach B's unsampled combinations by more search. Fig 8 :32: "no search, however long, adds an atom."

**Refuter:** a model whose fitted terms cross the local-to-general boundary with measured R_T = 0 on independent ground in B, reproduced by a second group. That breaks Fig 4 :27-30 and Fig 6 :23. **Mode:** `general`.

### F4: The habitat is enumerated, never composed (single figure for the rule, corroborated)

Fig 11 :43: "The habitat is enumerated, never composed."
Fig 11 :44: "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."
Fig 11 :46: "conditions: light, water, temperature, season, terrain"
Fig 11 :47: "relations: pollination, predation, competition, dependency"
Fig 11 :48: "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."

This is the positive instruction that follows from F1 to F3. Before transfer, enumerate the target habitat: actors, conditions, relations, then second-order contacts. What cannot be perceived is not zero; it is the residual. A model that treats an unmeasured driver as absent has not shown it is absent (Fig 8 :39: "So a search that finds nothing is never a proof of absence.").

**Status: single-source for the enumeration rule** (Fig 11 alone). The world source Estrada-Peña 2026 corroborates it with a different method: incomplete niche representation in calibration constrained transfer, and the portion of environmental space never sampled became a source of uncertainty. Agreement from a different method is corroboration, not a second figure. **Refuter:** an enumerated habitat whose second-order cascade changes nothing about transfer across two independent target regions. **Mode:** `specified`.

### F5: The ground did not move; the channel did (triangulated)

Fig 11 :73: "The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."
Fig 10 :24: "the ground does not decay, the channel does"
Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."
Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

Initial reading (retracted, see §5): "the ecological ground changed between A and B". Re-census shows this is wrong. The habitat updates; the ground (whether a prediction matches an independent observation) does not. What fails is the channel from M to the new ground: stale predictors, saturated metrics, pooled readings. The remedy is to re-establish contact with an independent ground B, and to buy independence in proportion to the cost of being wrong. A second model validated on the same A cannot correct the first (Fig 2 :35). Oreskes et al. 1994, from a different field, corroborates the epistemic half: "natural systems are never closed and model results are always nonunique", and "confirmation is inherently partial".

**Refuter:** a case where the anchor itself (the observation that settles the question) changed its answer under identical conditions and was shown to have been moved by a frame. That breaks Fig 11 :73 and Fig 10 :24. **Mode:** `general`.

### F6: Aggregate skill hides the slots where transfer will fail (triangulated)

Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
Fig 1 :28: "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."
Fig 5 :43: "A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."

A single AUC or R-squared in A is a frame-internal quantity (Fig 1 :24-27). The transfer-relevant residual lives in particular sites, species and seasons, and averaging across them removes the only signal that says where to look. The world source Roberts et al. 2017 independently predicts this: random cross-validation of structured data underestimates predictive error precisely because it lets nearby, correlated observations stand in for independent ones. The exemplar's analogue: a global R near zero with one live slot residual is a legal state (Fig 1 :13).

**Refuter:** show that for a given model, the per-site residual in A carries no information about the per-site residual in B under blocked validation. That breaks the slot-indexing claim as applied here. **Mode:** `specified`.

### F7: Validation inside A cannot detect the failure (triangulated)

Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"
Fig 8 :45: "Two frames together reach what neither reaches alone."
Fig 8 :47: "Independence is one quantity read twice."
Fig 7 :12: "same closure, handed along; agreement compounds, evidence does not"

Random cross-validation within A draws training and test folds from one evidence pool. It is one frame with two names (Fig 8 :48-49). Many such folds, or many models tuned on A, do not add evidence. Only an independent ground B, or a blocked design that forces extrapolation (Roberts et al. 2017), can register the transfer residual. Fig 7 :36: "The next room must differ from the last, and match the residual it surfaced."

**Refuter:** a validation design that shares its evidence pool with training and detects transfer failure as reliably as independent external validation across three target regions. That breaks Fig 2 :40 and Fig 8 :47. **Mode:** `specified`.

### F8: What survives (the defensible residue)

| claim | mode | governing figure |
|---|---|---|
| A model's good performance is a property of model and habitat, not the model alone | `general` | Fig 11 :39-40 |
| Transfer is substitution of one habitat for another, not removal of a condition | `general` | Fig 11 :66-67 |
| A predictor's valence is relative to the residual and does not survive a change of residual by being carried | `general` | Fig 11 :49-51 |
| The fitted model is a recording of one occasion; what crosses scales is a method | `general` | Fig 4 :22-25 |
| The ground does not move; the channel to a new ground must be rebuilt | `general` | Fig 11 :73, Fig 10 :24 |
| Before transfer, enumerate the target habitat and measure the per-slot residual; validate on an independent ground | `specified` | Fig 11 :43-48, Fig 1 :19-28, Fig 2 :40 |
| Which specific predictor or interaction caused a given failure | `gap` at this budget | no figure line names a particular ecological mechanism; this needs a ground reading |

The last row is a `gap` deliberately left open. "Unreachable is a verdict, not a silence" (Fig 13 :134). Naming a mechanism from a figure would be inventing a seventh term.

---

## 3. Pre-registered refuter (written before the conclusion)

Required before any outreach: "a falsifier written before the run is a design instrument, not only an honesty device" (Seat Map :287, via the exemplar). The shape claim is refuted if any of the following holds:

1. A documented habitat substitution (actors, conditions, relations independently measured in A and B) leaves model performance unchanged, with the model unchanged. This breaks F1 / Fig 11 :66-69.
2. For the terms M uses, valence is invariant under a change of residual across two habitats. This breaks F2 / Fig 11 :49-51.
3. A model crosses the local-to-general boundary with a measured round-trip gap R_T = 0 on independent ground, reproduced by a second group. This breaks F3 / Fig 4 :30.
4. A validation design that shares its evidence pool with training detects transfer failure as reliably as independent external validation across three target regions. This breaks F7 / Fig 2 :40.
5. The anchor that settles the question is shown to have changed its answer because a frame pushed on it. This breaks F5 / Fig 11 :73.

If any fires, the shape is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 4. Recommendation

1. Lead with the shape and the refuter, not with the framework (Fig 10 :52).
2. Enumerate the target habitat before tuning the model (Fig 11 :43-48). Treat unmeasured conditions as residual, not as zero.
3. Replace random cross-validation with blocked or external validation aimed at the transfer question (Fig 2 :40; Roberts et al. 2017).
4. Report per-slot residuals, not a single aggregate score (Fig 1 :19-28).
5. Measure the round trip R_T when a model is carried from local fit to general claim (Fig 4 :30).
6. Import the missing term from a frame whose closure differs, with a source gate and a shadow test (Fig 6 :23, Fig 8). Do not mistake more search in A for an import.
7. Send the generator (the residual, its census and its refuter), not the conclusion (Fig 4 :25).

## 4b. SEARCHED, INWARD, OUTWARD (Formula step 7, kept distinct)

- **SEARCHED.** Is the cause of a given transfer failure already in closure(Γ_A) and merely unfound? Ask first, cheapest, and the other two assume its answer. More search inside A cannot add B's unsampled conditions (Fig 8 :32), so a positive answer only applies to combinations already observed in A.
- **INWARD.** Extend the instrument from one already returning something: per-site residuals, blocked validation, niche-overlap measures. Sharpen in our own terms (Fig 6 :29).
- **OUTWARD.** Import: characterize the residual in effect terms, then find the frame whose closure predicts its shape (Fig 6 :30, Fig 9 :26-28). Here that means the target-region ecology frame, imported with provenance. INWARD and OUTWARD are opposed and are never read against one another.

The question "why did this model fail in B" is often underivable at this budget rather than unreachable in principle. Fig 8 :40-43 distinguishes them. Importing against a budget limit adds an atom that was not needed.

---

## 5. Canonical usage check and retraction log

Two local sources were read after the first four sections and govern how the figures may be used: `FRAMEWORK/reference/FIGURES_README_canonical.md` ("They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary"; "a reading that makes one contradict another has misidentified its domain, not found a flaw"; the framework returns "a shape, not a name") and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` (the figures decide design questions; the seat reads the ground and does not ask the anchor for rulings the figures already settle).

| earlier reading in this audit | status after re-census |
|---|---|
| "the ecological ground changed between A and B" | **Retracted.** Fig 11 :73 separates habitat (updates) from ground (does not). The failure is the channel, not the anchor. See F5. |
| "more training data in A is the obvious remedy" | **Refused.** Fig 4 :25 makes that a recording of one occasion; Fig 6 :23 says more search in a closure adds no atom. Estrada-Peña 2026 reports that record count alone did not predict transfer. |
| "a model with high AUC has been validated" | **Refused.** Fig 1 :24-27 disqualifies frame-internal metrics; Fig 1 :19 requires per-slot R. Roberts et al. 2017 gives the independent statistical result. |
| "Fig 11 :40 means model improvement never helps" | **Narrowed.** The figure forbids an improvement that does not change contact. A change that does change contact (an imported term for B's habitat) is exactly the sanctioned remedy. Triangulated with Fig 6 :23. |
| "Fig 4 :25 and Fig 11 :66 strain against each other: one says a model is a recording, the other says capability is in the habitat" | **Not strained.** Re-census: Fig 4 governs what crosses the scale membrane (methods, not recordings); Fig 11 governs where capability lives (agent-and-habitat). Different objects, different questions. Matches the README's re-census rule. |
| "Estrada-Peña and Roberts are two independent witnesses for the same claim" | **Narrowed.** They are different fields and different methods, but both are secondary and share no evidence pool with the figures. Agreement is corroboration of shape, not a ground reading of this question. |
| "this audit can conclude why models fail" | **Retracted.** It is a simulation. It returns a shape and a refuter; the specific mechanism is `gap` until a ground reading closes it. |

## 5b. Strain test summary

- **Fig 4 versus Fig 11:** resolved by re-census as above (different objects).
- **Fig 8 :39 "a search that finds nothing is never a proof of absence" versus the practical need to declare a missing condition:** not a strain. Fig 8 forbids the inference from "not found" to "absent"; the audit declares a residual, not an absence. The missing thing is named only in effect terms (Fig 13 :135: "It cannot say which primitive is missing, because naming it would mean already holding it.").
- **Fig 11 :43 "enumerated, never composed" versus the impulse to build a general transferable model by composing features:** resolved by re-census. Enumeration reads the world; composition builds inside a closure. They are different operations (Fig 8 :32, Fig 11 :48).
- **After re-census: one strain remains live and is not hidden.** The exact boundary between SEARCHED and INWARD for a given failure cannot be fixed from inside the frame; Fig 9 :44 ("Only a sealed room can be searched to the end, and no frame is a sealed room") and Fig 8 :40-43 say so. It is recorded as an open instrument question, not smoothed into a verdict.

---

## 6. Closing verdict of the audit

The figure line that governs is Fig 11 :66-69, triangulated with Fig 4 :25 and Fig 13 :76. A model that performs well in one region or period fails under different ecological conditions because it was never a standalone capability: it was a capability of model-and-habitat A, and transfer substitutes a habitat whose actors and conditions were not chosen and whose omissions become visible only when the goal fails. The model is a recording of one occasion, its learned valences are relative to the old residual, and validation inside A shared an evidence pool with fitting. The verdict is `general` on that shape and `specified` on its binding to ecological models. It is not `grounded`, and the specific mechanism for any given failure is `gap`. Cost if wrong and what would reverse it are stated in `09_watson_answer.md`.
