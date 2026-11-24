# Figure-grounded audit: how should the five ways of knowing be combined?

**Mode of this document: `specified` on the structural shape and the per-domain verdicts, `general` on the barrier rules, `gap` on the particular winning combination. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the ecological question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** Figures 1 to 13 plus the Operators and Symbols tables, quoted from `FRAMEWORK/reference/03-FIGURES_TEXT.md`; `FRAMEWORK/figures/THE_FORMULA.md`; `FRAMEWORK/reference/FIGURES_README_canonical.md`; the eight essays cited in `05_what_shape_means.md`; and the public sources in `10_source_ledger.csv`. Every `Fig N :line` quote below was re-opened in the verbatim extract.

---

## 0. The question under audit, restated as an effect

> How should field observations, experiments, remote sensing, Indigenous knowledge, and models be combined to improve ecological prediction?

Stated as an effect: an ecological forecaster holds a belief b about the state of a system, takes an action a (a measurement programme, a manipulation, a satellite tasking, a monitoring protocol, a model run), and observes o'. The residual is R = |Gamma(b,a) - o'|, and it is indexed per slot s, where s is a population, a site, a season, an indicator, or a management decision. *"The residual is indexed by object slot, not aggregated."* (Fig 1 :19). The question asks for the arrangement of five ways of knowing that reduces R at the ground, not for a ranking of the five.

**What an answer would look like, bound before the run** (Formula "Direction" discipline; Fig 5 :65-66, *"Write down what an answer would look like, bind it, and let it accrue a residual like anything else."*): a combination is an answer only if it (i) keeps the per-slot residual visible, (ii) keeps the evidence pools of the contributing frames distinguishable, (iii) names the ground that settles a forecast and refuses to let any frame move it, (iv) states what would refute the arrangement, and (v) records the lineage so a later reader can locate the error. A single number, a single "best method", or a single weighted blend is **not** such an answer, because it satisfies none of (i) to (v).

The first reading I wrote, and retract in section 5, was that "combine" should be answered by choosing an optimal ensemble weighting over the five inputs. That reading failed the strain test: it forced Fig 1 :19 and Fig 2 :40 into a claim about numerical weights, which they do not govern. The re-census below governs the *arrangement of frames*, not the weights inside one frame.

---

## 1. Domain census, before choosing any figure line

### 1.1 R by arity, symmetry and scale

- **Arity.** The residual has at least three coupled conditions, not one: (C1) state and forecast updating, where measured and remotely sensed values constrain model states; (C2) mechanism identification, where manipulations and cross-level patterns discriminate among competing generative structures; (C3) governance and validation, where a knowledge system's own protocols decide what counts as a check. These are a **union** of overlapping conditions, not a partition of one evidence budget. Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*
- **Symmetry.** The relation between the frames is not symmetric. Field and satellite readings can be two instruments pointed at the same thing (Fig 2 :31), but a harvester's seasonal indicator and a model parameter are not interchangeable operands: one is an ordered, place-bound, qualitative comparison, the other a graded quantity. The bond between them is a **comparison** (a threshold relation), and the forecast-analysis sequence is **ordered** (a → sequence). Treating all five as symmetric ingredients is the flat-formula collapse of Fig 12.
- **Scale.** Slots run from a leaf and a plot to a catchment and a continent; times run from a storm event to living memory and a thirty-year observatory; structures run from an individual behaviour to a food web. The membrane between scales is lossy (Fig 4 :30), so a method that works at one level is carried up as a method and returns as a head start, never as a recording.

### 1.2 One line per candidate domain: actors, currency, anchor

| candidate | actors | currency | anchor | status |
|---|---|---|---|---|
| **D1 Field observations** | observers, plots, transects, sensors, specimens | in situ measurement, high temporal frequency, local accuracy, representativeness error | the repeatable measurement at a named site | admitted |
| **D2 Experiments** | manipulations, treatments, controls, natural experiments | intervention-induced change, causal discrimination | the manipulated outcome; where manipulation is impossible, a pattern that a rival mechanism cannot produce | admitted |
| **D3 Remote sensing** | satellites, drones, radiometers, observation operators | spatially continuous repeated signal, spectral indices, bias and gaps | the calibrated sensor reading with stated uncertainty | admitted |
| **D4 Indigenous knowledge** | harvesters, Elders, rangers, governance bodies, oral and practice records | long time depth, qualitative indicators, cross-checks, local causal hypotheses | validation within that knowledge system's own protocols and governance | admitted |
| **D5 Models** | parameters, states, structure, priors, ensembles | probabilistic prediction, uncertainty decomposition, equifinality | out-of-sample forecast verification | admitted |
| **D6 The forecast-analysis cycle** | forecast, analysis, residual, provenance record | updates weighted by their uncertainties | future observations, which nobody in the loop can move | admitted, this is the compound where the "how" lives |
| **X1 A single best method** | one chosen method | one score | none nameable outside the frame that prefers it | not a domain, absorbed as the blend collapse |
| **X2 Translate everything into one currency** | a common index | one unit | assumes the validator of one frame may validate another | refused as unidirectional validation; see re-census in section 5 |

### 1.3 Partition or union

Union, not partition. D1 and D3 overlap (satellite calibration against field plots); D2 and D4 overlap (harvesters as observers and hypothesis generators); D5 draws on all four and must not be mistaken for a neutral container. Overlaps are compounds with their own loops. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :57: *"a case in two conditions is not a harder case of either"*. Verdicts are kept per domain and never averaged.

### 1.4 Order by dependency (Fig 3)

1. **Perception.** Can the system tell what is in front of it and tell it apart from what was there before? This is the per-slot residual, and it comes first.
2. **Vocabulary.** What can each frame express? Field: a measurement with an error. Satellite: a radiance with an observation operator. Indigenous knowledge: an indicator with a protocols-governed meaning. Model: a state, a parameter, a prior. Equifinality is a vocabulary failure, not a shortage of compute.
3. **Objective.** What would count as progress in the system's own terms? A forecast that is scored against an observation that arrives later.
4. **Planning.** The forecast-analysis cycle: range each frame against the ground, import only from a closure that differs, update with stated uncertainty.
5. **Learn and carry.** Name what worked, verify it, carry it with provenance and a round-trip gap.

Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* The middle links here are vocabulary (what a frame can express) and governance (whose validation counts); both are usually assumed rather than measured. Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* More satellites do not repair a missing objective.

---

## 2. Findings F1 to F11

Each finding states its mode, quotes verbatim figure lines **before** the reading, gives a refuter, and records triangulation status. Per-domain verdicts are not averaged.

### F1 - Combination is a union to unbundle, not one method contest to win

**Mode `general`, triangulated (Fig 9 and Fig 1, low overlap).**

> Fig 9 :4-5: *"are not one hard question but several well-formed ones. Split it rather than search."*
> Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*
> Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*

The phrase "how should these be combined" invites a single lever. The figures forbid that reading before any ecology is consulted: a residual that does not shrink with effort, where each rule works on a different subset, is several questions. Here the subsets are state updating, mechanism discrimination, and validation governance. **Verdict:** split first, then seek a combination per condition.

**Refuter:** one intervention that restores all three conditions at once, with the residue after it no longer categorically different, would dissolve the union and demote this finding.

**World corroboration (secondary, one witness per pool):** Dietze et al. 2018 (PNAS) treat iterative forecasting as a cycle of data, models, uncertainty and decision, not a single optimal predictor; Tengö et al. 2014 (Ambio) treat knowledge systems as parallel and complementary. Different fields, low overlap with each other and with the figures.

### F2 - Score the residual per slot; an averaged score deletes the live signal

**Mode `general` on the rule, `specified` on ecological application, triangulated (Fig 1 and Fig 9 :60).**

> Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
> Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*
> Fig 1 :23: *"The ground enters as the only metric."*
> Fig 1 :27: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*

An overall RMSE across all sites and species is a filter for the budget, not a witness for the verdict. It tells you how the combination scored; it does not tell you which slot is failing, and a single failing slot can be the one a decision depends on. Coverage, number of predictors minted, and credibility accrued are frame-internal and cannot score the frame that produces them.

**Refuter:** show that the decision improves when residuals are pooled across slots, across several systems, with the per-slot signal still available. Until then, per-slot indexing is load-bearing.

**Triangulation:** Fig 9 :60, *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* Dietze et al. 2018 make the same point operationally: forecast skill must be assessed with proper local scores and against a null model, and early forecasts are expected to be poor and honestly uncertain.

### F3 - The ground is future observation, not agreement among the five

**Mode `specified`, triangulated (Fig 2 and Fig 10, distinct roles).**

> Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."*
> Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."*
> Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
> Fig 10 :24: *"the ground does not decay, the channel does"*
> Fig 10 :26: *"saturated metrics, pooled readings"*

For ecological prediction the anchor is the observation that arrives after the forecast. No method gets to move it. A forecast that is quietly redefined after the observation arrives has converted the anchor into a frame (Fig 2 :33-34). A saturated index, a pooled reading, or a dropped transient is not evidence that the system was stable; it is loss of contact. The five ways of knowing are ranged against the ground separately, then their residuals are compared; they do not hold a vote.

**Refuter:** a case where two frames converge on the same forecast while drawing on one evidence pool and the convergence itself predicts the ground better than either frame's separate bearing. That would make agreement, not independence, the settling quantity.

**Triangulation:** Fig 10 :42, *"A verifier that can reconstruct the claim cannot verify it."* Oliver et al. and the ecological-forecasting literature use open archiving and out-of-sample scoring for the same reason. Robinson et al. 2022 (Ecology and Society) show the political version: trust is built by testing multiple sources, not by declaring one sovereign.

### F4 - Independence is a quantity, and most "integration" spends it

**Mode `specified`, triangulated (Fig 2 and Fig 8, with world corroboration from Grimm and Railsback 2012).**

> Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence."*
> Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*
> Fig 7 :13: *"agreement compounds, evidence does not"*
> Fig 8 :50: *"Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."*
> Fig 8 :51-52: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"*

Field plots and a satellite pixel are two instruments pointed at the same thing only if their readings arise from different evidence chains. If the satellite product is tuned entirely against the same plots, they are one witness wearing two names and their agreement is the pool talking. Indigenous knowledge is the lowest-overlap frame in the set because it validates within its own protocols, but that independence can be destroyed by conscripting it as a decorative check on a model answer. Convergence is worth more than adoption, and only the record of provenance distinguishes them.

**Refuter:** show that two streams sharing their entire evidence base still carry independent information about the residual, or show that a weighted blend of fully correlated frames outperforms independent ranging on held-out slots.

**Triangulation:** Grimm and Railsback 2012 (Phil Trans R Soc B): *"For complex systems, a single pattern is rarely enough to fully decode the internal organization and achieve structural realism."* Their pattern-oriented modelling is the complex-systems version of Fig 2 :31.

### F5 - The blend is a named collapse, not a neutral default

**Mode `general` on the barrier, `specified` on the ecological reading, triangulated (Fig 8, Fig 9, Fig 12).**

> Fig 8 :19: *"closures differ, so a surplus exists"*
> Fig 8 :21: *"nothing was aimed; the union is mute"*
> Fig 8 :32: *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."*
> Fig 12 :117: *"isomer. Same atoms, different bond, different substance."*
> Fig 9 :27-28: *"describe it before you go looking, or any frame you pick will seem to fit"*

Two frames with differing closures have a surplus; an undirected union of them is mute because no residual was described before the union. A weighted average of five evidence streams is the undirected union with arithmetic: it records ingredients and not the bond, which is exactly Fig 12's flat-formula failure. What carries the information is the arrangement: which stream constrains which slot, at what scale, with what uncertainty, and with what provenance. "The same atoms, different bond, different substance" is the structure of a method-combination claim.

**Refuter:** exhibit a weighting whose outperformance is stable across ecosystems and whose success does not depend on which stream generated which constraint. That would mean the bond carries nothing and the flat formula is sufficient.

**Triangulation:** Grimm and Railsback 2012 on equifinality: *"there are many acceptable representations that cannot be easily rejected and that should be considered in assessing the uncertainty associated with predictions."* Worden et al. 2025 (Global Change Biology) report the same trade-off between model complexity, parameter equifinality and predictive performance in CARDAMOM.

### F6 - Experiments are a distinct anchor, and their absence is a change of instrument, not a blank

**Mode `specified`, triangulated (Fig 6 and Fig 3).**

> Fig 6 :32: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."*
> Fig 6 :34-35: *"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."*
> Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*
> Fig 11 :48: *"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."*

A controlled ecosystem manipulation is often impractical or unethical, so "more experiments" is not an instruction the figures can issue in the abstract. What they issue is: an instrument is sharpened from a worse instrument already returning something. Long-run harvester observations, natural experiments, before-after-control-impact designs, and multiple-pattern constraints are all returning readings. Where a manipulation would decide a cause, the residual is the gap between rival mechanisms' predictions, and the instrument is whatever discriminates them. A synthetic test is a substituted habitat (Fig 11 :66), not the ground.

**Refuter:** show a case where no prior reading exists at any resolution and the claimed mechanism still gets settled by argument alone. Under Fig 6 :34-35 that case is not hard; it is unreachable at this budget and the honest report is a gap.

### F7 - Indigenous knowledge is a frame with its own anchor, not a dataset to be ingested

**Mode `specified`, triangulated (Fig 2, Fig 6, Fig 11, plus Tengö et al. 2014 and Robinson et al. 2022).**

> Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*
> Fig 6 :30: *"outward: does another frame already hold it? The description travels."*
> Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."*
> Fig 10 :59: *"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."*

Tengö et al. 2014: *"MEB emphasizes that evaluation of knowledge occurs primarily within rather than across knowledge systems."* Robinson et al. 2022 describe a dashboard in which *"oral assessments of healthy Country by traditional owners [were] given the same exposure as quantitative or scientific data"*, with Indigenous-led governance deciding how evidence may be used. Moller et al. 2004 show the practical gain: *"The combination of scientific monitoring data and hunters' local observations provided optimal monitoring information to manage the resource."* This is Fig 6 :23 in practice: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* The import must carry provenance and a shadow test, otherwise it is adoption dressed as convergence.

**Refuter:** demonstrate that Indigenous validation criteria are fully reducible to the receiving model's criteria, with no loss and no governance question left over. Until then, treating the knowledge as a covariate is a source-gate failure.

**Strain, resolved by re-census in section 5:** the figures speak of *the* ground in the singular. Here there are multiple validation protocols. Re-census shows different objects: the ground for a prediction is the out-of-sample observation shared by every frame, while "what counts as a valid reading within a knowledge system" is a convention (Fig 10 :46, *"A convention makes no claim about the world; a verdict and an atom both do"*). A convention that decides which forecast counts would become a verdict (Fig 10 :47), and that is the failure to avoid.

### F8 - The "how" is a forecast-analysis cycle with a measured round trip

**Mode `general` on the shape, `specified` on the ecological application, triangulated (Fig 4, Fig 5, Fig 10, Fig 11).**

> Fig 11 :43: *"The habitat is enumerated, never composed."*
> Fig 11 :44: *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."*
> Fig 5 :42: *"The acceptance test is a bargain, not a threshold."*
> Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*
> Fig 10 :62: *"A ruling carries provenance like an atom."*

The defensible answer to "how" is a loop, not a recipe. Enumerate everything in contact with the per-slot residual, including second-order effects (Fig 11 :52-53: *"Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."*); characterise each frame's currency and anchor; range each against the ground separately; import only from a differing closure with a source gate and shadow test; accept a term only when stating it plus the remaining residual costs less than the confusion it removes; update the forecast with stated uncertainty; and carry the lineage. The condensation from figure set to field protocol is lossy, so the round trip gap R_T must be measured, not assumed zero.

**Refuter:** a lossless condensation, with R_T measured at zero, or a protocol that reaches a correct forecast with no provenance record and no residual left unexplained.

### F9 - Which combination wins is a `gap`, not a hidden answer

**Mode `general` that this is unreached, `gap` on the winner.**

> Fig 9 :32: *"you get a kind of thing, never the answer itself"*
> Fig 13 :134: *"Unreachable is a verdict here, not a silence,"*
> Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

No figure line governs which weighting, which data stream, or which model class wins for a given ecosystem and slot. The framework returns a kind of thing: a union with independence, a ground nobody can move, a provenanced import, and a measured gap. Naming the winner is a binding from the ecological frame, to be provenanced and settled by an instrument. Distinguish underivable in principle from unreachable at this budget (Fig 8 :40-43): the winner is not ruled out, it is not reached here. SEARCHED is answered first; INWARD (a better observation operator) and OUTWARD (a frame already holding the needed atom) are opposed tracks, never read against one another.

**Refuter:** a figure line that directly governs the choice among the five, or a source-discriminating instrument already in hand that names the winner for the target slot.

### F10 - What survives, with modes attached

| claim | mode | figure / source |
|---|---|---|
| The residual must be indexed per population, site, season and indicator | `general` | Fig 1 :19, :22 |
| The five ways of knowing form a union of overlapping conditions | `general` | Fig 9 :54, :55 |
| Future observations settle a forecast; agreement among frames does not | `specified` | Fig 2 :29, :35, :45 |
| Independence decides whether corroboration means anything | `specified` | Fig 2 :31, :42; Fig 8 :50 |
| An undirected blend is the mute union, not a combination | `general` | Fig 8 :21, :32; Fig 12 :117 |
| Indigenous knowledge validates within its own protocols; importing it needs a source gate | `specified` | Fig 6 :23; Tengö 2014; Robinson 2022 |
| The arrangement is a forecast-analysis cycle with a measured R_T | `specified` | Fig 4 :30; Fig 10 :62 |
| Which combination wins for this ecosystem and slot | `gap` | Fig 9 :32; Fig 13 :134 |

### F11 - Retractions and corrections, kept visible

1. **First reading retracted.** "Combine means choose an optimal ensemble weighting over five inputs." Retraction reason: strain against Fig 1 :19, Fig 2 :40 and Fig 9 :54. The figures govern the arrangement of frames, not the arithmetic inside one frame. Kept as the X1 non-domain.
2. **"Translate Indigenous knowledge into model variables" retracted.** It is unidirectional validation, which Tengö et al. 2014 explicitly refuse, and it spends the independence that Fig 2 :42 prices. Replaced by F7.
3. **"Field and remote sensing are automatically two independent frames" narrowed.** They are one witness if they draw on one evidence pool (Fig 2 :31, Fig 8 :50). Independence must be established, not assumed.
4. **"More data resolves equifinality" narrowed.** New observations of the right kind reduce equifinality (Worden et al. 2025); more of the same observations enlarge the record without growing the reach (Fig 5 :72, *"and a library that grows is not a reach that grows."*).
5. **"Shape, not a name" narrowed.** It governs a missing primitive, not the selection of an already-held frame. Naming field observations or a satellite product is a binding, not an invented primitive. The four that I over-extended this rule to in an earlier pass are corrected here.
6. **"There are five domains" corrected.** There are five evidence lines plus the compound loop D6, and two refused candidates X1 and X2. Counting the lines as the whole answer was the flat-formula error.

---

## 3. Pre-registered refuter (written before the recommendation)

Required by the Formula "Direction" discipline and the exemplar's rule that a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. **A blend wins.** One fixed weighted combination of the five streams beats every separate stream on held-out slots across several ecosystems, and leaves no residue that requires a frame holding a different closure.
2. **Aggregation helps.** Pooling residuals across slots, sites and seasons improves the decision the per-slot signal was meant to drive, with the per-slot signal still available.
3. **No second closure.** Indigenous validation protocols are shown to be a special case of model validation with no distinct criteria and no governance residue.
4. **Zero independence.** All five streams are shown to draw on one evidence pool, yet their agreement tracks the ground better than any separate bearing.
5. **No instrument owed.** Equifinal candidate models are shown to be distinguishable without any new observation, so no source-discriminating instrument is missing.
6. **A governing line is found.** A figure line directly governs which of the five wins for a given ecosystem and slot, which would demote F9 from `gap`.
7. **R_T is zero.** The condensation from the figure set to the field protocol is measured lossless.

If any fires, the corresponding finding is withdrawn and the retraction log in section 5 is updated in place. Until one is run, no part of this may be labelled `grounded`.

---

## 4. Recommendation

1. **Split before you search.** Treat the question as a union of state updating, mechanism discrimination and validation governance. Do not average the verdicts (F1, F5).
2. **State R per slot.** Name the population, site, season, indicator and decision. Refuse an overall score as a verdict (F2).
3. **Name the anchor.** It is the observation that arrives after the forecast. Nobody gets to redraw it (F3).
4. **Buy independence deliberately.** Ask which streams share an evidence pool. Keep their bearings separate and record where each atom came from (F4).
5. **Use experiments where they discriminate, and other instruments where they cannot.** An instrument is sharpened from one already returning something (F6).
6. **Treat Indigenous knowledge as a frame with its own gate.** Import with provenance and a shadow test; keep governance with its holders (F7, Tengö 2014, Robinson 2022).
7. **Ship the loop, not the conclusion.** Enumerate the habitat, describe the residual, range frames, import on difference, update with uncertainty, carry provenance, measure R_T (F8).
8. **Stop honestly.** Which combination wins is `gap`, not silence. Say what instrument would close it (F9).
9. **Send the generator.** Fig 4 :25, *"A recording carried upward looks like knowledge and is a description of one occasion."* Send the derivation and the refuter, not the conclusion.

---

## 5. Canonical usage check and retraction log

Two sources govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; and the limit: the framework reports *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish and records the lineage. *"Indiscernibility is not identity."*
- `THE_FORMULA.md`: mode rule, the eight steps, and the direction discipline. Step 7 keeps SEARCHED, INWARD and OUTWARD distinct; step 6 sets R_T as the error signal across scales.

### Retraction and confirmation table

| earlier reading | status after the canonical check |
|---|---|
| "combine means an optimal weighted ensemble" | **Retracted.** Fig 1 :19 and Fig 9 :54 govern arrangement, not weights. Kept visible as X1. |
| "five equal domains" | **Corrected.** Five evidence lines plus the compound loop D6, with X1 and X2 refused. |
| "translate Indigenous knowledge into model variables" | **Retracted.** Unidirectional validation; Tengö 2014 and Fig 6 :23 both forbid the unprovenanced version. |
| "field and remote sensing are independent by construction" | **Narrowed.** Independence is established by evidence-pool provenance, not by instrument type (Fig 2 :31). |
| "shape, not a name forbids naming a method" | **Narrowed.** It governs missing primitives. Naming a held frame is a binding, to be provenanced. |
| "five validation protocols contradict one ground" | **Not strained.** Re-census: the ground settles forecasts; protocols are conventions until one decides an outcome (Fig 10 :46-47). Different objects. |
| "more data fixes equifinality" | **Narrowed.** New observations of the right kind help; record growth is not reach growth (Fig 5 :72). |
| "the choice of winner is unreachable in principle" | **Narrowed.** Unreached at this budget. Underivable and unreachable-at-budget are different facts (Fig 8 :40-43). |
| "agreement among the five is corroboration" | **Refused.** Only low-overlap agreement with a provenance record is corroboration (Fig 2 :40, Fig 8 :50-52). |

### Seven-question recursive derivation (summary)

1. **One question or several?** Several: a union. Fig 9 :4-5, :55.
2. **What is being minimised?** R per slot, not a global score. Fig 1 :19, :22.
3. **What settles it?** The arriving observation, not negotiation. Fig 2 :29, :45.
4. **Can the frames be added?** Only if independence is established; otherwise one witness. Fig 2 :31, Fig 8 :50.
5. **Can a frame be imported?** Only from a differing closure with source gate and shadow test. Fig 6 :23, Fig 8 :51-52.
6. **Can it be settled now?** No measurement at this budget settles the winning combination. Verdict `candidate`, `gap` for the winner. Fig 5 :42, Fig 13 :134.
7. **What is the route?** Describe the residual first (Fig 9 :27-28), enumerate the habitat (Fig 11 :43), then SEARCHED before INWARD or OUTWARD (Formula step 7).

### Updated verdict

The shape survives: a union of conditions, per-slot residuals, a ground nobody can move, independence bought and recorded, imports with provenance, an instrument-shaped stop, and a measured R_T. What does not survive is any single combination, any averaged verdict, any claim that agreement among the five is corroboration, and any naming of the winner. Strains after re-census: **none hidden**, one declared `gap` and one qualitative R_T recorded in `11_audit.md`.
