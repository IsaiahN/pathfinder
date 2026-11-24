# Figure-grounded audit: which inflation models produce distinguishable predictions?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." No experiment was run here.

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, 2026-11-19): "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post" while "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the eight essays, plus the world sources in `10_source_ledger.csv`, all opened 2026-11-23.

---

## 0. The residual in effect terms

The question asks for a partition, not a winner. We hold:

- a set of **inflation models** M = {m1, ..., mk}. Each model is a frame that predicts a vector over observable slots: `n_s`, `r`, `alpha_s`, `beta_s`, `n_t`, `f_NL`, isocurvature, feature templates.
- a **ground**: the sky as measured. Today that is Planck plus BICEP/Keck. Later it is Simons Observatory and LiteBIRD. The LiteBIRD mission statement is "either making a discovery or ruling out well-motivated inflationary models" (LiteBIRD Collaboration, PTEP 2023).
- an **instrument resolution**: for a stated experiment, a variance or upper limit on each slot. LiteBIRD's Level 1 requirement is a total uncertainty `delta r < 0.001`.

The residual, per the Symbols table, is "The gap between prediction and observation. The central quantity: everything the system does is driven by it." Here it is indexed by model and by slot: `R(m, s) = |Gamma(m, s) - o'(s)|`, never a single global number.

**Bound answer-shape (Direction discipline).** Define **distinguishability class**: two models are in different classes iff, for a named instrument I, their predicted distributions on at least one slot s are separated by more than I's resolution on s. Models in the same class are mutually indistinguishable *at I*. This is an ordinary term, written down before the run, so it can be refused. Note the dependence on I is part of the term: without naming I, nothing is predicted.

**What the question is not.** It is not "which inflation model is true." That bundles two conditions: a model must be *in reach* of an instrument, and it must be *separated* from its neighbours. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."

---

## 1. Domain census (before choosing any figure line)

### R by arity, symmetry, scale

- **Arity.** The primary relation is binary (a pair of models), but the object being partitioned is a set of models, so the output is a partition over k frames, not a single class. There is also a three-way dependency: model predictions, instrument resolution, ground.
- **Symmetry.** "Distinguishable from" is symmetric: if m1 is separable from m2 at I, then m2 is separable from m1. "Same prediction at I" is an equivalence relation (identity at the level of the instrument, Fig 12 :66 "two names, one referent"). So the symmetric bond `≡` and the comparison bond `⋛` (Fig 12 :85 "a threshold relation between two quantities") are both in play: `≡` for the collapsed prediction class, `⋛` for the comparison with instrument resolution.
- **Scale.** First order: a model's predicted vector. Second order: the relation between two models' vectors and between a vector and an instrument error. The comparison requires settled instrument forecasts, so it is second order by Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it."

### One line per domain: actors / currency / anchor

**Domain A, the candidate model family (frames under test, not a free-standing domain).**
Actors: Starobinsky `R^2`, Higgs inflation with non-minimal coupling, `alpha`-attractors, monomial chaotic potentials (`phi^2`, `phi^4`), natural inflation, hilltop models, axion-SU(2) sourced-tensor models, feature models.
Currency: predicted observable vectors, and theoretical uncertainty from the unknown reheating history (`47 < N_* < 57` in the LiteBIRD analysis).
Anchor: **none**. Models are frames. Per the census rule, "no nameable anchor means it is not a domain yet." So this is not an independent domain; it is the set of frames that must be ranged against Domain B's anchor. This is itself a finding: treating the model family as a self-validating domain is the collapse Fig 2 names.

**Domain B, the observational ground.**
Actors: COBE, WMAP, Planck, BICEP/Keck (now); Simons Observatory, LiteBIRD (later). The CMB-S4 project is in orderly shutdown per its own site as of 2025-07-09, so it is removed from the live instrument set (a re-census of the habitat, not a verdict change).
Currency: measured `n_s`, upper limits on `r`, `f_NL` constraints, B-mode power spectra.
Anchor: **the sky**. Symbols table: the anchor is "Whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :29-30: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome." The sky does not move when a theorist prefers a model.

**Domain C, the resolution and comparison frame.**
Actors: instrument error forecasts (`delta r`, `sigma_n_s`, `sigma_alpha_s`, `sigma_beta_s`), foreground residuals, delensing assumptions, Bayesian evidences.
Currency: separability in observable space, measured in sigma.
Anchor: the ground reached through instruments. Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something."
Question type: **union compound**, not a partition. A pair is distinguishable only if both (i) at least one predicted slot lies in the instrument's reach and (ii) the two predictions are separated on that slot. Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."

### Partition or union

Union, not partition. The model family overlaps: Higgs inflation tends to the Starobinsky prediction for large non-minimal coupling; `alpha`-attractors and Starobinsky cluster in the same small-`r` plateau region; natural inflation tends to the monomial `phi^2` prediction for large decay constant. These are overlaps of conditions, so a single lever clears only the region where one condition binds and leaves the intersections standing (Fig 9 :56).

### Dependency order (Fig 3)

1. Describe the residual before choosing a frame (Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit").
2. Fix the anchor before ranging models (Fig 2 :45: "Frames range against the ground. They do not negotiate with it.").
3. Keep predictions per model and per slot (Fig 1 :19).
4. Compare with instrument resolution (Fig 6 inward axis), and in parallel import other observables from other frames (Fig 6 outward axis). Never read these two against each other (Fig 6 :31).
5. Eliminate against the ground (Fig 9 :38 "elimination compounds here, and only here").
6. Repeat with the sharper instrument; the reach has changed, so the prediction changes (Formula step 8).

---

## 2. Figure census (quoted verbatim before concluding)

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | residual indexed by object slot, never aggregated; ground is the only metric | per-model, per-observable residual is mandatory |
| **2 The Ground** | anchor must not update; agreement with shared evidence is disqualifying for a verdict | the sky is the anchor; model agreement is not corroboration |
| **3 Dependency Chain** | a link with no instrument is not a link that works | a distinguishability claim with no named instrument is a reading of nothing |
| **4 The Membrane** | round trip must be measured; lossy condensation | any "X percent of models ruled out" headline carries a nonzero `R_T` |
| **5 Mint Pipeline** | three guards as a product; MDL bargain; settling is not sufficiency | a model-by-model mapping is not a new atom; it needs support, reach, novelty |
| **6 Closure / Reachability** | import is the only operator that moves the wall; instruments improved from worse instruments already returning something | inward (sharpen `n_s`) and outward (add `f_NL`, features, GW background) are distinct tracks |
| **7 Room Chain** | "A room's agreement is variation, not a verdict" | a consensus of model builders cannot decide the question |
| **8 Union Surplus** | "Two frames that overlap almost completely are one frame wearing two names" | prediction-overlapping models are one distinguishable class, not two |
| **9 Leave / Arrive** | union vs partition; describe before looking; filters vs witnesses | unbundle the union; use experiment priority as budget filter only |
| **10 Ground Maintainer** | "Bring a characterised residual, never the source"; verifier non-access | lead with the refuter, not the theory |
| **11 The Habitat** | habitat enumerated, never composed; capability is agent and habitat | enumerate the instruments and observables in contact with the residual; do not compose a wish list |
| **12 The Bond** | isomer, functional group, symmetric `≡`, threshold `⋛` | classification structure for model families |
| **13 Minimum Viable Set** | independence is how little two frames draw on the same evidence; "Unreachable is a verdict here, not a silence" | overlap is structural, not rhetorical; an honest `gap` is allowed |
| **Operators table** | `≡` identity, `⋛` comparison, `¬` negation | the two relations used in the census |
| **Symbols table** | `R` is the aim; the ground is the anchor; `R_T` is the round trip | definitions used throughout |

---

## 3. Findings

### F1 - Keep the residual per model and per slot; never average (decisive for method)

Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
Fig 1 :28: "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."
Fig 1 :23: "The ground enters as the only metric."

The question is precisely about which *individual* models are separable. A single averaged fit statistic (for example "inflation as a whole fits the data at 68 percent CL") destroys the signal being asked for. The correct object is a k by s matrix of predicted values and a matching matrix of instrument errors. This is independent of which inflation turns out to be right; it is a condition on any answer.

**Mode:** `general` (structural, holds for any model family). **Status:** triangulated across Fig 1 and the Symbols definition of `R` (two different sources within the framework, low conceptual overlap: one is the loop, one is the notation). **Refuter:** exhibit a correct distinguishability decision that uses only a single aggregated fit number and still identifies which pair of models is separable. If that is possible, this finding is wrong.

### F2 - The sky is the anchor; models range against it separately

Fig 2 :29-30: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."
Fig 2 :45: "Frames range against the ground. They do not negotiate with it."
Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."

The future observations are the anchor. A model cannot change the measured `n_s` by being more popular or by being preferred by a model-selection criterion. Conversely, a model-selection criterion (Bayesian evidence, AIC) is a *frame*, not the ground; it ranks models by a quantity it computes, which Fig 1 :24-27 disqualifies as a frame-internal score: "coverage, and compression achieved", "predicates minted, and credibility accrued", "They are frame-internal. A frame cannot score itself with a quantity it also produces."

This matters because much of the real literature on this question is a model-comparison literature (Martin, Ringeval and Vennin 2014; Escudero et al 2015/2016; Hardwick, Vennin and Wands 2018). Those papers are used below as *corroboration about instrument precision*, never as the authority about which model is right.

**Mode:** `general`. **Status:** triangulated (Fig 2 plus Symbols table). **Refuter:** show a case where the ground value of `n_s` or `r` changes as a function of which inflation model is assumed, without changing the data. That would break the anchor and make the whole question non-empirical.

### F3 - Prediction overlap collapses distinct models into one distinguishable class (decisive for the question)

Fig 8 :49: "Two frames that overlap almost completely are one frame wearing two names."
Fig 8 :50-51: "But shared atoms are not the signature. Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence." and "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."
Fig 2 :39: "Correlation has valence."
Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"
Fig 13 :38: "independence is how little two frames draw on the same evidence, and it is what makes their agreement mean anything."

This is the figure answer to the literal question. Models whose predicted observable vectors coincide, at the resolution of a stated instrument, are *not* two distinguishable predictions. They are one prediction wearing several names. Their mutual agreement is not corroboration; it is the shared prediction talking.

Two sub-cases must be kept separate, because Fig 8 :50 warns against reading shared atoms as overlap:

1. **Convergent derivation at maximum independence.** Two microscopically different models arrive at the same `(n_s, r)` point through different mechanisms. Fig 8 :50 says this is corroboration at maximum independence, not a collapse. Yet at the level of the *observables* they are still one distinguishable class, because no observation at that resolution separates them. The record of where each came from survives in the model lineage (provenance), but the ground does not see it.
2. **Adopted import or shared scaffolding.** Higgs inflation with large non-minimal coupling *tends to* the Starobinsky prediction; natural inflation with large decay constant *tends to* the monomial `phi^2` prediction. These are limiting cases where the predicted vectors approach identity. Fig 8 :49 applies directly: at that limit they are one frame wearing two names as far as the ground is concerned.

The distinction in (1) is real and important: two models can be empirically indistinguishable at one instrument and yet be maximally independent frames. It does not make them distinguishable by that instrument. It means a *different* instrument, reading a different slot, may separate them. The Braglia et al (2023) result is the concrete case: "there do exist exceptional cases in which microscopically very different models predict almost identical features in the power spectrum", but "two models with identical power spectra lead to primordial non-Gaussianities of different amplitudes." That is Fig 8's surplus appearing on a second slot.

**Mode:** `specified` (depends on a stated instrument resolution). **Status:** triangulated across Fig 8 :49, Fig 2 :40, and Fig 13 :38, three distinct argument routes (closure overlap, correlation valence, independence definition). **Refuter:** show two models whose predicted distributions are identical on every observable at a stated resolution and which a correctly calibrated instrument nevertheless separates. That would break the collapse law.

### F4 - Union compound: unbundle "in reach" from "separated"

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
Fig 9 :55-57: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." and "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

The question bundles two conditions:
- (i) **Reach**: at least one predicted observable lies within the instrument's sensitivity. Escudero et al: "the measurement of `r` will not be enough to discriminate between the models on the `(r,n_s)` plane" because models cluster in a populated region.
- (ii) **Separation**: within the reached region, two models' predictions differ by more than the error.

A better `r` measurement clears (i) for the monomial models (predicting `r` above about 0.01) but does nothing for the plateau cluster at `r` about 0.003 to 0.005. That is exactly the single-lever failure Fig 9 names. Hardwick, Vennin and Wands (2018) reach the structural same conclusion from information theory: "a decrease in the measurement uncertainty of the scalar spectral index would be more decisive than a decrease in the uncertainty in the tensor-to-scalar ratio" for single-field model selection.

**Mode:** `specified`. **Status:** triangulated (Fig 9 :54-57 plus the independent information-theoretic result of Hardwick et al, which shares no evidence pool with the figures). **Refuter:** exhibit a case where improving a single observable separates all currently overlapping model pairs, with no intersection left standing.

### F5 - Instruments are extended from worse instruments already returning something; inward and outward are distinct

Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something."
Fig 6 :33: "Nobody specified a telescope from an account of Mars. A wandering point in the sky was already a reading, and every sharper instrument was built on the residual the last one produced."
Fig 6 :29-31: "inward: is our representation adequate to hold it? The instrument extends access. Fails by refining forever on an axis that cannot carry it. Sharpen in our own terms." and "outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms." and "Neither answer tells you much about the other. Run them as two tracks, and never read one against the other."

Future observatories were not specified from an account of inflation. They were built from the residual of COBE, WMAP, Planck and BICEP: a measured `n_s` and a tightening upper limit on `r`. LiteBIRD's `delta r < 0.001` target is a sharpening of the same reading, not a new kind of reading.

Two tracks, kept distinct:
- **Inward:** sharpen `n_s`, `r`, `alpha_s`, `beta_s` in the same slow-roll representation. Fails if the representation cannot carry the distinction; Escudero et al found the forecast errors on the running and running-of-running are "wider by an order of magnitude or more than the region of values" occupied by the favoured models, so that on those slots there is "no hope in disentangling between the different models".
- **Outward:** import a different observable from another frame: primordial non-Gaussianity `f_NL`, isocurvature, parity-odd `TB`/`EB` correlations, the stochastic gravitational-wave background, high-frequency features. Braglia et al: "primordial features are a clear target of forthcoming CMB surveys beyond the detection of tensor modes." The LiteBIRD axion-SU(2) study reports that "most of the discriminating power of LiteBIRD will reside in `BB` angular power spectra rather than in `TB` and `EB` correlations", a live example of an outward import that failed on one slot and worked on another.
- Never read one track against the other. A claim that `n_s` precision is decisive (Hardwick et al) and a claim that features or non-Gaussianity are decisive (Braglia et al) are answers to different instruments, not a contradiction.

**Mode:** `specified`. **Status:** triangulated (Fig 6 :29-33 plus three independent world sources across the two tracks). **Refuter:** show that sharpening one slot and adding a new observable slot are the same operation, so that the two tracks collapse into one.

### F6 - Isomers and functional groups classify the model family, within a fixed atom set

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
Fig 12 :124: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."
Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom"

Within single-field slow-roll models, the shared substructure `state -> structure -> state` is a functional group: "the group says what kind; the qualifier says which member." Members differ in the arrangement (potential shape, coupling, number of e-folds), and that arrangement decides which observable slot moves. Plateau models and monomial models are isomers in Fig 12's sense if they are written over the same atom set and differ only in arrangement; they are not isomers if one requires an atom the other lacks (for example a second field, or a gauge sector).

**Mode:** `specified`. **Status:** single-source for the figure definition (Fig 12), corroborated partly by the physics literature but with a live strain. **Strain, named:** "same atoms" requires fixing an atom set across models. Single-field and multi-field models do not share one. F6 therefore holds only within a restricted family, and any isomer claim must state its atom set. **Refuter:** exhibit two models over the same declared atom set with identical arrangement but different observable predictions, which breaks the isomer definition.

### F7 - The framework returns a shape, not the names of the models

Fig 9 :32: "you get a kind of thing, never the answer itself"
Fig 13 :134-135: "Unreachable is a verdict here, not a silence," and "It cannot say which primitive is missing, because naming it would mean already holding it."
Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."
Fig 8 :26-28: "2: the atom crosses back", "1: describe R, then find the frame that already predicts its shape", "low overlap: B does not draw on A's evidence"

The canonical usage rule, read after this first pass, says the framework reports "what a missing thing would have to look like (a shape, not a name)" and then stops at the limit of the instruments, recording the lineage. So the figures can yield the *criterion* (the shape of distinguishability: per-slot, per-model, against a fixed anchor, with overlap collapse and a union compound). They cannot yield the *list* of which specific models will be separated, because that list lives in the cosmology frame's predictions and instrument forecasts. Supplying it is an OUTWARD import, which needs a source gate and a shadow test (Fig 6 :12-13 "source gate: provenance", "shadow test: explains a gap") and is debited against independence (Fig 6 :24).

**Mode:** `general` for the limit, `specified` for any particular import. **Status:** triangulated (Fig 9 :32, Fig 13 :135, canonical README). **Refuter:** derive the name of a specific inflation model from the six-term substrate alone, with no import from the physics frame. Until that happens, the model list is a `gap` at the figures, not a silence.

### F8 - No separation found is a verdict conditional on the instruments, not a proof of absence

Fig 8 :39: "So a search that finds nothing is never a proof of absence."
Fig 9 :44: "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."
Fig 9 :40-43: "a wrong cut removes the answer and speeds up so keep every cut ranked and reversible" and "narrowing gets you close, the ground decides"
Fig 8 :40-42: "Scope. These prove the metaframe is underivable. They do not prove any particular atom is far away. Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."

If LiteBIRD returns an upper limit at `r < 0.002` and no feature is detected, the plateau cluster (Starobinsky, Higgs, `alpha`-attractors) remains one distinguishable class at that instrument. That is a real verdict: "unreachable at this instrument." It is not "unreachable in principle." A different observable slot, imported outward, may separate them. Conversely, importing a new atom against a *budget* limit adds something not needed (Fig 8 :42-43); the remedy for budget-unreachability is more search on the existing slots, not a new theory.

The CMB-S4 shutdown (recorded in `04_links_and_distribution.md`) is a live re-census of the habitat: an instrument that older forecasts assumed is no longer in the live set. That changes which pairs are currently reachable. It does not change the figure verdict about how reachability works.

**Mode:** `general`. **Status:** triangulated (Fig 8 limit theorems plus Fig 9 unsealed-room argument, distinct routes). **Refuter:** produce a sealed frame in which a finite search genuinely proves absence. That would break both figures.

### F9 - Filters for the budget, witnesses for the verdict

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."
Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

Ranking experiments by cost, by expected sigma, or by how many models they would rule out ("about three quarters of the inflationary scenarios", Martin, Ringeval and Vennin 2014) is a budget filter. It says what gets tried first. It says nothing about which model is right. A consensus among model builders is a room's variation, not a verdict.

**Mode:** `general`. **Status:** single-source (Fig 9 :60, corroborated in substance by Fig 7 :35 from a different argument). **Refuter:** show a case where an experiment's priority score determines the truth value of a model. If that is possible, the filter/witness distinction fails.

### F10 - Measure the round-trip gap `R_T` on any headline compression

Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."
Symbols table: `R_T` is "The gap between what was sent up and what came back down: gap(x, (T_E ∘ T_A)(x))", which "Measures what the coarser description cannot hold."

A sentence like "LiteBIRD will distinguish large-field from small-field inflation" is a condensation. Going back down to the concrete model list loses at least: (a) the reheating uncertainty that makes a model a bar in the `(n_s, r)` plane rather than a point; (b) the foreground-removal assumption that decides whether the projected sigma is achievable; (c) the distinction between a class of models and a specific model. `R_T` is nonzero and qualitative here; it was not measured numerically because no ground reading exists. Treating the condensation as identity would set `R_T` to zero, the dead-reckoning error Fig 4 names.

**Mode:** `specified`. **Status:** triangulated (Fig 4 :30 plus Symbols definition). **Refuter:** exhibit a condensation of the distinguishability claim that preserves every constraint of the figure set. If one exists, `R_T` is zero for it and the warning does not apply.

---

## 4. Pre-registered refuter

Written before the conclusion, per the standing rule that "a falsifier written before the run is a design instrument, not only an honesty device."

The shape claim is refuted if any of the following holds:

1. Two models whose predicted distributions are identical on every observable slot at a stated instrument resolution are nevertheless counted as distinguishable by the criterion. (Breaks F3, Fig 8 :49.)
2. A correct distinguishability decision is obtained from a single aggregated fit number, with no per-model, per-slot residual. (Breaks F1, Fig 1 :22.)
3. The ground value moves when the model is changed, so that the anchor updates. (Breaks F2, Fig 2 :29-30.)
4. A future instrument returns separated measurements for a pair the criterion declared indistinguishable at that instrument. (Breaks the verdict by the ground, Fig 2 :45.)
5. A distinguishability claim is delivered without naming the instrument and its resolution, and is then defended as a result rather than a specification. (Breaks the mode rule, `THE_FORMULA.md`.)
6. The figure census is shown to be strained: a line is made to fit only by assigning it to a different quantity, and no re-census resolves it. (Breaks the self-consistency requirement of the figures README.)

If any fires, the corresponding finding is withdrawn and the affected domain verdict changes. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. State the instrument and its resolution in every distinguishability claim. A claim without an instrument is unbound (F1, F4).
2. Keep the residual as a matrix over models and observable slots, never as one averaged statistic (F1).
3. Treat prediction-overlapping models as one distinguishable class at the stated instrument, and record their separate provenance in the model lineage rather than counting them as two witnesses (F3).
4. Unbundle reach from separation before searching. Improving `r` alone does not clear the plateau intersections (F4).
5. Run the inward and outward tracks separately: sharpen `n_s` precision, and in parallel add non-Gaussianity, features, isocurvature and stochastic gravitational-wave observables (F5).
6. Classify model families by functional group and, within a fixed atom set, by isomerism; state the atom set whenever an isomer claim is made (F6).
7. Publish the shape (the criterion) and the refuter first. The specific model list is an import with provenance, never a figure derivation (F7).
8. Report "unreachable at this instrument" as a verdict, and keep every cut ranked and reversible (F8).
9. Use experiment priority as a budget filter only (F9).
10. Measure and state `R_T` for any compressed headline (F10).

---

## 6. Canonical usage check (figures README, read after sections 1 to 5)

Two local sources were read after the first pass and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw." Canonical limit: the framework says "what a missing thing would have to look like (a shape, not a name)", then stops at the limit of what the instruments can distinguish and records the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/figures/THE_FORMULA.md`: the eight-step loop, the mode rule, and step 7's three questions SEARCHED, INWARD, OUTWARD, kept distinct.

Applied here:

- **SEARCHED first.** Is the separating observable already in the current CMB representation and simply unfound? In several cases yes: the running and running-of-running were forecast and found too noisy, so the remedy is more search on the same axis, not a new atom.
- **INWARD second.** Sharpen `n_s` and `r` precision (Hardwick et al: `n_s` precision is more decisive for single-field selection).
- **OUTWARD third.** Import other slots (non-Gaussianity, features, isocurvature, stochastic gravitational waves) with a source gate and shadow test.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| F3 called "prediction overlap means collapse" | **Narrowed, not retracted.** Fig 8 :50 says convergence at maximum independence is corroboration, not a shared-evidence collapse. The narrowing: the two models are still one distinguishable *class* at the instrument, while remaining independent *frames*. Both claims are now recorded. |
| "the question is which model is right" (first framing of section 0) | **Retracted.** Re-census showed a union compound (Fig 9 :54): reach and separation are two conditions. The question is which models are separable at a named instrument. |
| CMB-S4 treated as a live future instrument in the first census | **Retracted by a live source.** Its own site states DOE and NSF "can no longer support the CMB-S4 Project" as of 2025-07-09. Removed from the live instrument set; the habitat was re-enumerated (Fig 11 :43 "The habitat is enumerated, never composed."). |
| F6 "models are isomers" | **Narrowed.** Requires a fixed atom set; single-field and multi-field models do not share one. Strained-for-now, named rather than hidden. |
| F7 "the figures cannot name a model" | **Canonically confirmed and strengthened.** The README's "shape, not a name" governs a missing thing; an import of a name from the physics frame is permitted only with provenance and a shadow test. |
| F8 "no separation found means indistinguishable" | **Narrowed.** Must read "at this instrument and budget". Fig 8 :40-42 separates underivable-in-principle from unreachable-at-budget; importing against a budget limit adds an unneeded atom. |
| Fig 13 versus F5 (different observables) | **Not strained.** Re-census: Fig 13 governs the six-term substrate; F5 governs instrument access to observable slots. Different objects, matches the README's re-census rule. |

### Round trip, summarized

- **Sent up (x):** the verbatim figure set, chiefly Fig 1 :19/:22, Fig 2 :29-30/:40, Fig 8 :49/:50, Fig 9 :54/:60, Fig 6 :32-33.
- **Abstraction (T_A):** "distinguishable predictions means separated per model and per slot at a named instrument; overlapping predictions collapse into one class; reach and separation are a union; instruments are sharpened from older readings."
- **Concretisation (T_E):** "LiteBIRD with `delta r < 0.001` rules out monomial models and leaves the plateau cluster standing; non-Gaussianity or features may separate members of that cluster."
- **`R_T` nonzero.** The condensation drops reheating uncertainty, foreground assumptions, the convergence-versus-collapse distinction, and the CMB-S4 habitat change. Recorded qualitatively; not measured numerically because no ground reading exists. The honest form is a lossy condensation with a measured gap, not an identity.

---

## 7. Updated verdict

The shape survives: distinguishability is a per-model, per-slot relation against a fixed observational ground, evaluated at a named instrument; prediction-overlapping models form one distinguishable class at that instrument; reach and separation are a union compound that must be unbundled; instruments are extended from older readings; and inward precision work and outward observable imports are separate tracks that must not be read against one another.

What does not survive: any claim that the figures name specific inflation models, any aggregated "inflation fits the data" statistic as an answer to this question, any single-observable lever as sufficient across the whole model family, and any verdict stated without an instrument and a mode. The specific model list is a `gap` at the figures, filled only by a provenanced import from cosmology. Strains after re-census: one live (F6 atom-set dependence), one narrowed (F3 convergence versus collapse), none hidden.

Status of every substantive claim: `specified` or `general`, none `grounded`. This is a simulation checked for internal consistency against the figures. It cannot settle which inflation models future observations will in fact distinguish. Only the ground can settle that, when the observations arrive.
