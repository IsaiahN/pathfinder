# Figure-grounded audit: can researchers reliably distinguish human-caused changes in extreme events from natural variability?

**Mode of this document: `specified` on the split verdict, `general` on the structural shape, `grounded` on the observation-only sub-claim.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status: SIMULATED DERIVATION, not a ground reading.** *The Recursive Self-Improvement Trap* (opened this session): "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is checked for internal consistency against the figures. It cannot settle the question it reports on. No measurement was taken, no climate model was run, and no expert was consulted.

**Figure source.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, verbatim, cited as `Fig N :line`. Every quoted string below was checked against that file. Layout-dependent readings were checked against the figure text, not a summary.

**World sources.** Opened this session and recorded in `10_source_ledger.csv`: IPCC AR6 WG1 Chapter 11 (Seneviratne et al., 2021); Naveau, Hannart and Ribes (2020, *Annual Review of Statistics and Its Application*); Bellprat, Guemas, Doblas-Reyes and Donat (2019, *Nature Communications*); Otto, Barnes, Philip, Kew, van Oldenborgh and Vautard (2024, *ASCMO*); Perkins-Kirkpatrick et al. (2022, *Environmental Research Letters*); Isaiah N, "The Hard Problem is About Source" (2026, framework author, high overlap, declared). Figures decide; world sources corroborate only.

---

## 0. The residual in effect terms

The question contains two hidden bundles: "reliably" and "human-caused changes ... from natural variability." Both must be stated as effects before any figure line is chosen.

**R (the residual).** The gap between what an attribution method predicts for an observed extreme under a natural-only hypothesis and what the observing instruments actually return. Formally, per slot `s` (an event class, region, variable, time window): `R_s = |P_obs(s) - P_nat(s)|`, where `P_nat` is the counterfactual probability of the class in a world without anthropogenic forcing.

- **Arity:** three terms are in play, observation, factual world, counterfactual natural world. The third is never directly observed. That is the first structural fact.
- **Symmetry:** not symmetric. The comparison has direction (is the event class more likely in the factual world?), which is Fig 12's ordered comparison bond, not a symmetric join. Swapping factual and counterfactual does not leave the claim unchanged.
- **Scale:** event (one draw) versus class (a distribution); local versus global; hours to decades for the event, decades to centuries for the baseline. The signal-to-noise ratio changes with each of these, so a single global verdict would be a category error.

**What an answer would look like, bound as an ordinary term (formula "Direction").** Reliable discrimination = a positive per-slot residual against an anchor that does not update, returned by at least two frames whose closures differ and whose evidence pools are independent. Writing this down before the run makes the sought-for shape refusable by the same test as everything else, instead of an invisible preference that the mechanism cannot check.

**The two options and what each leads to.** Option A: answer "yes, reliably", which commits to a nameable anchor for the counterfactual and to a per-event discrimination. It leads to an overclaim at the single-event scale and spends the independence of anyone asked to endorse it. Option B: answer per regime, with an open source slot where no anchor exists. It leads to a checkable shape, written refuters, and an honest `unreached` where the instrument is missing. The derivation below decides between them from the figures, not from the literature.

---

## 1. Domain census (before any figure line is chosen)

R described by arity, symmetry and scale is above. One line per domain, with actors, currency and an anchor. A domain without a nameable anchor is treated as a frame, not as ground.

| domain | actors | currency | anchor (nameable?) | partition or union |
|---|---|---|---|---|
| D1 Observed record | thermometers, satellites, reanalyses, event catalogues | measured magnitude and frequency of the class | **yes**: the measurement itself. It does not move when a model changes its answer. | part of a union |
| D2 Counterfactual model frame | GCMs, large ensembles, ALL and NAT experiments, detection-and-attribution statistics | `P_ALL`, `P_NAT`, risk ratio, FAR, return period | **no** for the NAT world. It borrows the observed anchor for *evaluation*, but the natural-only baseline itself is generated inside a frame. | part of a union |
| D3 Internal variability | ENSO, NAO, PDO, chaotic weather, unforced modes | natural variance, mode amplitude | **partial**: pre-industrial control runs and paleo records, but the observed record is too short for rare-event tails. | part of a union |
| D4 Verification / outreach | expert readers, reviewers, journal editors | agreement and residual | **the ground, never agreement**. In this simulated run all seats draw on one evidence pool, so independence is zero. | meta-domain |

**Partition or union.** Union, not partition. An observed event magnitude is a compound of forced signal, internal variability, measurement error and model representation error. The same lever (say, a longer observational record) clears the region where only sampling error binds and leaves the compound standing. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57: "a case in two conditions is not a harder case of either." So the question must be split into three well-formed questions before it is searched: is the observed change real (D1), is the natural baseline anchored and independent (D2 and D3), and is the claim about a class or a single event (scale).

**Order by dependency (Fig 3).** Perception first (was the event measured?), then vocabulary (is the "change" a class frequency, a single-event magnitude, or an impact?), then the comparison (risk ratio), then the verdict. Fig 3 :20: "The chain is ordered by dependency, not by importance." Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." A risk ratio computed before the event definition and the observational baseline are settled is a reading below the break: Fig 3 :22-23, "a reading taken below the break is not a weak reading. It is a reading of nothing."

**Strain test applied during the census.** The word "anchor" fits D1 without strain. Applied to D2's counterfactual it strains: a model-generated NAT world changes when the model changes, which violates the anchor definition. Per the strain rule, the figure line does not govern D2; it governs another quantity (the observation). D2 must be re-censused as a frame, and its reliability must come from independence between frames, not from an anchor of its own. This re-census is the structural result of the audit, not a softening of the reading.

---

## 2. Findings F1 to F8

### F1 - The question is a union compound, so a single yes or no is not an available answer

Fig 9 :4-5: "First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."

World corroboration, low overlap with the framework: the IPCC AR6 WG1 Chapter 11 assessment (Seneviratne et al., 2021) assigns *different confidence levels to different extremes and regions*, for example *virtually certain* for the global frequency and intensity of hot extremes since 1950, but *low confidence* for human influence on trends in meteorological droughts in most regions. A single global confidence label would erase exactly the per-slot structure the figures require. Naveau, Hannart and Ribes (2020) name "the choice of the appropriate spatio-temporal scales to enhance attribution power" as a remaining statistical challenge.

**Verdict:** the question splits; verdicts are reported per domain and never averaged. Mode `general`. **Triangulated** (Fig 9 union rule plus two low-overlap world sources). World sources agree with the figure but do not decide it.

### F2 - The residual is indexed per slot, never aggregated

Fig 1 :19: "The residual is indexed by object slot, not aggregated."

Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

Fig 1 :23: "The ground enters as the only metric."

A global mean temperature anomaly is not the slot at which an extreme event lives. The slot is the event class in a region and season. A method that reports only a global risk ratio has thrown away the signal that says where the human contribution is actually registered. The IPCC Chapter 11 assessment makes the same distinction in world terms: "Some recent hot extreme events would have been extremely unlikely to occur without human influence on the climate system," while regional attribution remains uneven and "In a few regions, limited evidence (data or literature) prevents the reliable estimation of trends."

**Verdict:** reliability is a per-slot property. A claim about "extreme events" in general is not yet a claim that can be settled. Mode `general`. **Triangulated** (Fig 1 plus IPCC, low overlap).

### F3 - The anchor is split: the observation is ground, the counterfactual is a frame

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."

Fig 2 :33: "The anchor must not update."

Fig 2 :36: "An anchor is legitimate when the question is constitutively about it."

Fig 2 :37-38: "instruments can be wrong on axes they do not measure"

The observed record is an anchor for the question *did the class change*. It is not an anchor for the question *what would have happened without humans*: that quantity does not register on any instrument. Bellprat et al. (2019, *Nature Communications*) state the limitation in world terms: "no observations are available for a world without climate change." They show that correcting model probabilities changes the attributable risk substantially, and that "a common structural deficiency of the models or the experimental design exists that prevents the problem to be overcome by the traditional multi-model or large-ensemble approaches."

This is where the strain test pays. If Fig 2's anchor line were forced onto the counterfactual, the reading would strain and would have to be sent back to the census. The re-census keeps the line governing D1 only. D2 is a frame borrowing D1's anchor for evaluation, not an anchor-bearing domain.

**Verdict:** the human-versus-natural split is anchored on the observation side and frame-dependent on the counterfactual side. That is a structural asymmetry, not a temporary data gap. Mode `specified`. **Single-source** for the figure reading (Fig 2), with low-overlap world corroboration from Bellprat et al. for the missing counterfactual observation; the two agree but the figures decide.

### F4 - Independence between frames is what makes class-level agreement mean anything

Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence."

Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool"

Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

Fig 8 :47: "Independence is one quantity read twice."

Fig 8 :51-52: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"

World corroboration, low overlap: Otto et al. (2024, *ASCMO*) write that "the use of models from different framings - for example, SST-forced, regional and coupled global models ... is expected to reduce the effect of biases due to shared modelling assumptions between related families of models." They also record that observational datasets over the same realisation of reality have "strongly correlated natural variability", so multiple reanalyses are not independent witnesses of the same event. Bellprat et al. (2019) show that adding more models and more members does not cure a shared structural deficiency. That is the Fig 8 :32 rule in world language: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."

**Verdict:** class-level attribution is reliable to the degree that the frames are low-overlap and the provenance of each is recorded. Ten ensembles from one modelling family are one witness wearing ten names. Mode `specified`. **Triangulated** (Fig 2 and Fig 8 are two figures with low conceptual overlap, plus two independent world sources).

### F5 - At the single-event scale, no instrument returns a source discrimination

Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something."

Fig 6 :35: "Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."

Fig 6 :53: "searchers drawing on the same evidence are one searcher wearing many names"

Fig 8 :39: "So a search that finds nothing is never a proof of absence."

The observed magnitude of one event is a projection. Several sources (forced thermodynamic change, a natural circulation state, their interaction) can produce the same reading. *The Hard Problem is About Source* (Isaiah N, 2026, framework author, high overlap, declared): "If several paths create the same behavior, then behavior is a projection with lossy information." The essay also says "An instrument that can't distinguish these cases demonstrates its own inadequacy, it cannot claim anything substantial about what is being measured or what causes it." Bellprat et al. (2019) put the climate-specific version on record: single events "happen only once in the exact same manner and their probability is. therefore. strictly speaking infinitely small, which inhibits any attribution", so practice treats them "as part of classes of events". Perkins-Kirkpatrick et al. (2022, *Environmental Research Letters*) add: "FAR measures the change in frequency of a class of events, and an impact is a specific outcome of a singular event."

So the reliable object is the class, not the individual event. Attributing the *class* is a comparison of distributions; attributing the *one occurrence* is a source question for which no discriminating instrument is returned at that resolution.

**Verdict:** single-event source attribution is `unreached`, not `unreachable` and not a silence. Fig 13 :134: "Unreachable is a verdict here, not a silence". Underivable-in-principle and unreachable-at-this-budget are different facts (Fig 8 :40-43); the figures cannot tell us which we have here, so we do not pretend to. Mode `specified`. **Triangulated** (Fig 6 instrument rule, Fig 8 search rule, plus two low-overlap world sources), with the framework-author essay counted as internal consistency rather than independent corroboration.

### F6 - Confidence gates are filters, not the ground

Fig 5 :70: "A term is settled when the ground pays for it. A term is usable when something can compose over it."

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

Fig 2 :45: "Frames range against the ground. They do not negotiate with it."

IPCC confidence language (*likely*, *very likely*, *high confidence*) is a calibrated filter for how much evidence supports a statement. It is not the ground itself. Bellprat et al. (2019) show that a method can pass the usual model evaluation and still be unreliable in the probability tail that determines the risk ratio: "correcting properly for model probabilities alters the attributable risk of extreme events to climate change." A reliability check is a gate that can be violated; passing it does not settle the attribution. Otto et al. (2024) likewise show that the choice between weighted and unweighted synthesis requires expert judgement rather than following a single number.

**Verdict:** a confidence label never converts a `specified` claim into a `grounded` one. Only the ground settling a per-slot residual does that. Mode `general`. **Triangulated** (Fig 5, Fig 9, Fig 2 plus world).

### F7 - What the framework returns is a shape, not a verdict about the world

Fig 9 :32: "you get a kind of thing, never the answer itself"

Fig 9 :42: "narrowing gets you close, the ground decides"

Fig 13 :137-138: "It can say the answer is out of reach with the library as it stands, so something has to be imported before it is asked again."

Fig 13 :115: "The set is closed. The arrangements are not. That gap is why import exists."

The figures narrow the answer to this shape: a per-slot, per-regime statement; an anchor only where an instrument actually returns one; provenance for every import from a model frame; a class-level comparison rather than a single-event source verdict; and an open slot wherever no source-discriminating instrument exists. The framework does not return the name "greenhouse gas" or "ENSO" for the slot. Those are bindings from the climate-science frame, provenanced as such. Fig 8 :53: "Residual first, frame second."

**Verdict:** the deliverable is the shape plus the refuters, not a new scientific result that outranks the assessment literature. Mode `general`. **Triangulated** (Fig 9 and Fig 13).

### F8 - The verification seat must be outside the model family it grades

Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it."

Fig 10 :52: "Bring a characterised residual, never the source."

Fig 10 :59: "an interest in the outcome is unavoidable, an interest in the reading is disqualifying."

Fig 10 :60: "Where a stake cannot be removed, declare it."

Fig 7 :13: "agreement compounds, evidence does not"

An expert asked to check this derivation should receive the residual and the refuter first, not the framework's interiors. If the checker is a member of the same modelling group that produced the attribution being checked, the independence that gives the class-level verdict its force is already spent. This is a contact rule, not an evidence rule: it changes how the packet is sent, never whether the answer counts. Declaration of stake replaces the impossible demand for no stake.

**Verdict:** one-to-one, opt-in, public institutional venues; residual first; no pooling of later agreement. Mode `general`. **Triangulated** (Fig 10 and Fig 7).

### Summary of per-domain verdicts

| domain | verdict | mode | status |
|---|---|---|---|
| D1 observed change in a class, at scale | reliable against the measurement anchor | `grounded` for the observation, `specified` for the attribution step | triangulated |
| D2 counterfactual natural baseline | reliable only conditionally, on low-overlap frames and a reliability check | `specified` | triangulated |
| D3 single event source | no grounded discrimination available, `unreached` | `specified` | triangulated, with high-overlap essay counted as internal only |
| D4 verification | agreement is not a witness; independence is the parameter | `general` | triangulated |

No averaging. A "mostly yes" or "mostly no" would be the aggregate across slots that Fig 1 :22 forbids.

---

## 3. Pre-registered refuter (written before the conclusion and before the world search was used to decide anything)

Required by the seat rule: a falsifier written before the run is a design instrument. The shape claim (the split verdict above) is refuted if any of the following fires:

1. **Single-event anchor appears.** A source-discriminating instrument returns the same per-slot human-versus-natural attribution for a *single* event under two low-overlap framings, with simulated probabilities matching observed frequencies and with an anchor that does not move when a frame pushes on it. That would make single-event attribution `grounded` and collapse the D3 `unreached` verdict.
2. **Convergent, not adopted, class attribution.** Two frames drawing on genuinely different evidence (different observational datasets with non-correlated errors, different model framings, different event definitions) converge on the same per-slot risk ratio with non-overlapping uncertainty, and provenance shows convergence rather than one frame importing the other's atom. That would lift class-level reliability from `specified` toward `grounded`.
3. **Counterfactual observation.** A natural-only baseline is observed directly at the relevant resolution, for example a palaeo-anchored natural distribution at the event's spatial and temporal scale, removing the model-dependence of `P_NAT`. The anchor split in F3 dissolves and the union becomes a partition.
4. **Re-census failure.** The Fig 2 anchor line is found to govern the counterfactual as well as the observation, with no strain, so the domain split D1/D2 was wrong.

If any fires, the split verdict is withdrawn or narrowed in writing, and the correction is kept visible in this file. Until one fires, no part of the answer may be promoted from `specified` to `grounded` except the observation-only sub-claim in D1.

---

## 4. Recommendation

1. Report reliability per regime, never as one global number (F1, F2).
2. State the anchor for each regime explicitly. Say "no nameable anchor" where that is the case instead of borrowing the observed record's authority for the counterfactual (F3).
3. Require provenance and low overlap before treating agreement as corroboration. Models from one family and reanalyses of the same realisation are one witness (F4).
4. Stop calling single-event source attribution reliable. The reliable object is the class; the individual event stays `unreached` until a discriminating instrument exists (F5).
5. Label confidence gates as filters, never as the ground (F6).
6. Send the generator, that is the residual, the shape and the refuter, not the conclusion. Fig 4 :22: "Only methods cross up. Only head starts come down."
7. Use the public institutional venues in `03_public_contact_points.csv`, one to one, and record the checker's verdict before showing any theory (F8).

---

## 5. Canonical usage check (figures README + WATSON 60 + THE_FORMULA)

Read after the first four sections and used to govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them ... the quotes are the authority, not this summary." Also the re-census rule: "a reading that makes one contradict another has misidentified its domain, not found a flaw." And the canonical limit: the framework reports "a shape, not a name" and "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: "the figures are the ground for design questions; Isaiah is the anchor for what the figures genuinely cannot settle." So the seat must not ask a human authority to decide what the figures already decide. The design of the outreach and the per-domain split are decided by derivation.
- `FRAMEWORK/figures/THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." This is why the D1 observation-only claim is labelled `grounded` while the attribution steps remain `specified`.

### Retraction and confirmation log

| earlier reading in this audit | status after canonical check |
|---|---|
| Tempting first reading: "No, researchers cannot reliably distinguish; answer is no." | **Retracted.** It aggregates across slots, which Fig 1 :22 forbids, and it forces the anchor line onto a model frame. Re-census produced the split verdict. |
| Tempting first reading: "IPCC high confidence means the figures would call this grounded." | **Retracted.** Confidence is a filter (Fig 9 :60) and a gate is not the ground (formula step 5). Only a per-slot residual paid by the ground is `grounded`. |
| Tempting first reading: "single-event attribution is unreachable in principle." | **Narrowed.** Fig 8 :39 forbids reading search failure as proof of absence, and Fig 8 :40-43 separates underivable from unreachable at budget. Recorded as `unreached`, with both alternatives left open. |
| Apparent strain between Fig 2 anchor and the model-generated counterfactual. | **Not smoothed over.** Re-census shows Fig 2 governs the observation; D2 is a frame. This is a domain split, not a weaker reading. |
| Tempting first reading: "more ensembles give independence." | **Retracted.** Fig 8 :32 and Fig 6 :53 say search inside a closure adds no atom; Bellprat et al. show shared structural deficiency survives multi-model and large-ensemble approaches. |
| Shape-not-a-name applied to "human influence" / "ENSO". | **Confirmed with a boundary.** The framework returns a shape. Naming a specific forcing or mode in a slot is a binding from the climate-science frame and must be provenanced; it is not a derivation and not an import that moves the wall. |
| "The answer is a single yes or no." | **Refused.** Fig 9 :54 and the union census decide this. |

### Recursive derivation summary (seven questions)

1. **Is there a fact here?** Yes, three well-formed questions, not one. Fig 9 :4-5. The split is into D1 observation, D2 counterfactual, D3 scale.
2. **Where is the residual indexed?** Per event class and region, not the global mean. Fig 1 :19.
3. **What is the anchor?** The measurement, for the change question. No nameable anchor for the natural-only world, which is a model frame. Fig 2 :29, re-census in F3.
4. **What makes agreement count?** Independence between frameworks and a recorded provenance for every import. Fig 2 :31, Fig 8 :47.
5. **Can the instrument be extended inward?** Only from something already returning a discrimination. At the single-event source slot, nothing is; status `unreached`. Fig 6 :32, :35.
6. **What is owed?** Not a new global verdict, but a per-regime statement with an open source slot and a refuter. Fig 9 :32.
7. **Who decides?** The ground, per frame, separately. Agreement is not a vote. Fig 2 :45, Fig 10 :42.

### Updated verdict

The shape survives and is now sharper than the question: reliability is a per-slot, per-regime property. Where an anchor exists and frames are independent (classes of events against the observed record), the discrimination can be reliable. Where the baseline is model-generated, reliability is conditional on independence and provenance. Where the object is one event, no source-discriminating instrument returns an answer, so the status is `unreached`. Strains after re-census: none hidden; the one apparent strain (anchor versus counterfactual) is recorded as the domain split that produced the verdict.
