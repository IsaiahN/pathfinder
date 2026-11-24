# Figure-grounded audit: is potential output a useful measurable guide for policy?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (fetched 2026-11-23): LLM output can *"simulate an approximate answer/output with the formula"*, but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** The canonical figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical figures README, `THE_FORMULA.md`, the Operators and Symbols tables, and the public web pages in `10_source_ledger.csv`. Figure lines are quoted verbatim as `Fig N :line`. One CBO page returned 403 and is recorded, not cited as read.

---

## 0. The question under audit, in effect terms

> Is "potential output" a useful measurable guide for policy, or too uncertain to rely on?

Restated as an effect: a policy institution must choose a stance (how hard to push demand through fiscal and monetary instruments). It has direct readings of actual output, inflation, and unemployment. It wants the distance to the economy's sustainable capacity ceiling, potential output, because that distance tells it how much slack can be absorbed before inflation accelerates. The quantity it wants is not directly observed. It is inferred by a model from the very readings it is meant to interpret. The decision to be made is whether an inferred scalar may occupy the anchor position in a policy rule, or whether it must be demoted to one revisable input reported as a band.

What an answer would look like, bound as an ordinary term before the run (formula step "Direction"): a **decision-grade capacity estimate**, that is a rule taking several low-overlap observables (output, capacity utilisation, vacancies, hours, wage growth, inflation, unemployment) into a range for capacity with a stated interval and vintage, where a policy action is accepted only if it remains acceptable across that range. This shape is written down here before the derivation so it can accrue a residual like anything else, rather than remaining an unbound preference for a "useful" or "useless" verdict.

The answer is not: read the capacity ceiling off the observed path of GDP. The figures forbid that move for the reasons in F1 to F3. Nor is it: declare the concept meaningless because it cannot be observed directly. The figures forbid that move too (F7).

---

## 1. Residual and domain census

**R (arity, symmetry, scale).** Arity: one unobserved scalar (potential output Y*) is inferred from several observed series, and the policy stance is a function of the inferred gap. The map is many-to-one, so the inference is underdetermined. Symmetry: the candidate sources of a given reading are symmetric with respect to observed output (both a demand-driven boom and a supply-constrained boom can show the same GDP path) and asymmetric with respect to the discriminating observables (capacity utilisation, vacancies, wage growth, and inflation respond differently). Scale: the published aggregate is one level, the sectoral and regional composition is a finer level, and the real-time-to-final revision is a third level. Each move between levels loses information (Fig 4).

**Question type: union, not partition.** The question as posed is a false either-or. It bundles two conditions: (a) is the estimate informative at all, and (b) is it precise and stable enough to be decisive? Both can hold at once. World evidence says yes to (a) and no to (b) (VoxEU, FRED blog, both fetched 2026-11-23). Fig 9 :57-58: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."* The two conditions are unbundled below, and each cut is kept ranked and reversible.

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D1, framework-internal metatheory | figures, methods, the library Γ, residual R | composition, residual, shape | the ground, and the figures as metalaws for structure | partition: what an inferred reading can carry |
| D2, economic measurement and national accounts | GDP and its vintages, capacity utilisation, unemployment, vacancies, hours, wage growth, producer prices | published statistics and revisions | outturn data and the revision record | which series carry slack and how estimates revise |
| D3, latent-state estimation and macroeconomic theory | potential output, NAIRU, trend/cycle decomposition, production functions, statistical filters | model-based inference | prediction tested against D2 | union: one unobserved state with several observationally equivalent drivers |
| D4, policy decision and verification | central banks, fiscal authorities, surveillance bodies, expert readers | policy stance, agreement and residual | outturn inflation and employment, never agreement | triangulation, not negotiation |

No nameable anchor means it is not a domain yet. D2 has one (the published series and their vintages), D3 has one (prediction against D2), D4 has one (outturn inflation and employment), D1 has one (the figures for structure, the ground for any measurement).

**Partition or union.** The "useful versus uncertain" split is a union (both conditions hold), so it is a compound with its own loop. The part that is a partition (can one aggregate reading be decisive?) is settled inside D1. The part that is a union (informative yet imprecise) belongs to D2 and D3 and must be unbundled before it is searched.

**Order by dependency (Fig 3).** Perception first: can we measure output, capacity utilisation, inflation, and unemployment at all (D2)? Vocabulary second: do we have terms for capacity and slack (D3)? Objective third: what counts as decision-grade (D1)? Planning fourth: which observables to triangulate (D2 plus D3)? Learn and carry fifth: publish intervals and vintages, keep the cuts reversible (D4). Effort spent on the objective before perception is effort above the break, and Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | residual per object slot, never aggregated; ground is the only metric | governs D1 and D2 decisively |
| **2 The Ground** | anchor definition, anchor must not update, triangulation, correlation valence | governs D1 and D4 decisively |
| **3 Dependency Chain** | order by dependency; a reading below the break reads nothing | governs the order of D2 to D4 |
| **4 The Membrane** | lossy transform, round trip gap `R_T` | governs the real-time to final and aggregate to component moves |
| **5 Mint Pipeline** | sort the gap into kinds; settle at the ground | governs "what would settle it" |
| **6 Closure / Reachability** | depth versus genuine absence; inward and outward are opposed | governs D3 decisively |
| **7 Room Chain** | a room's agreement is variation, not a verdict; agreement compounds, evidence does not | governs D4 |
| **8 Union Surplus** | two low-overlap frames reach what neither reaches alone; shared pool has no surplus | governs D2 and D4 decisively |
| **9 Leave / Arrive** | describe the effect not the cause; shape not a name; union unbundling | governs D1 and D3 decisively |
| **10 Ground Maintainer** | stale channels, bring a characterised residual, verifier non-access | governs D2 channel decay and D4 outreach |
| **11 The Habitat** | enumerate the habitat in contact with the residual | governs D2 variable selection |
| **12 The Bond** | comparison ⋛ is a threshold relation between two quantities; isomer | weak analogue, strained, see §4 |
| **13 Minimum Viable Set** | six-term substrate, composition across two kinds | **strained, rejected as governing here, see §4** |
| **Operators table** | ⋛ is asymmetric; a goal is a comparison | corroborates the strain note |
| **Symbols table** | `R` is measured per slot, never a single global number | corroborates F2 |
| **Formula** | direction bound as an ordinary term; REFUSAL before mint; mode rule | governs the method itself |

---

## 3. Findings

### F1 : An anchor that moves when pushed is not an anchor (decisive, `general` structural)

Fig 2 :29-30 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."

Fig 2 :33: *"The anchor must not update."* Fig 2 :34: *"If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."*

Potential output is revised. The VoxEU study of IMF surveillance (Barkema, Gudmundsson and Mrkaic, 2020, fetched 2026-11-23) reports a median real-time output gap of -0.7 percent and a final median of -0.1 percent, with roughly two-thirds of the revision attributable to re-estimating potential growth rather than to revisions in actual output. The FRED blog (2024) puts it plainly: *"Potential output cannot be observed, so policymakers contend with considerable uncertainty here, including frequent and unpredictable revisions to the estimate of potential output."* Benoit Coeure, then of the ECB (speech 2019), said: *"True, the output gap is an elusive concept that should never have become a gauge for conducting public policy, and it may be larger than thought."*

An estimate whose value changes when the model or the data vintage changes is a frame reading, not the ground. The anchor for this question is outturn inflation and employment, which do not change because a forecaster revised a trend. Assigning potential output the anchor position is the named collapse: a frame listed as one of the parties has become the ground.

**Mode:** `general` for the figure rule, `specified` for its application to published potential output estimates. World sources corroborate but never decide the figure verdict.

**Refuter:** an estimate for a named economy and period whose value is invariant under every plausible re-estimation method and every data vintage, with a demonstration that the anchor does not move when pushed. That would collapse the distinction between a reading and the ground and break Fig 2 :29-34.

### F2 : Read the residual per slot, do not aggregate it away (decisive, `general` plus `specified`)

Fig 1 :19 "The residual is indexed by object slot, not aggregated."
Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."
Symbols table: *"One object, region or entity being tracked. R is measured per slot, never as a single global number."*

A single aggregate gap is exactly the quantity Fig 1 :22 says throws away the signal. Slack is distributed across sectors, regions, skill groups, and capital vintages. The VoxEU study finds output gap measures are *"only slightly correlated with other indicators of slack"*, which is what an aggregate looks like when it is not tracking the distributed detail. The FRED blog shows the aggregate moving from slightly negative in 2022 and early 2023 to about 1 percent above potential in the second quarter of 2024, without saying which slots carry that movement.

An answer that reports one number and a confidence interval still hides the per-slot question. The decision-grade estimate defined in §0 therefore requires a component decomposition alongside the scalar: capacity utilisation by industry (Federal Reserve G.17), unemployment by group, vacancies, hours, and wage growth.

**Mode:** `general` for the figure rule, `specified` for the chosen slot list, which is world-sourced.

**Refuter:** an aggregate gap that tracks every named sub-slot's slack with zero residual across a set of dated episodes containing at least one supply shock and one demand boom. That would collapse the slot distinction and break Fig 1 :19-22.

### F3 : Describe the effect, do not read the cause off the reading (decisive, `general`)

Fig 9 :30-31 "your words are borrowed too, so describe the effect rather than the cause"
Fig 9 :32 "you get a kind of thing, never the answer itself"
Fig 6 :30 "outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."

Naming a capacity ceiling from an observed path of output, inflation, and unemployment is the inversion the figures forbid. The effect is: output grew, capacity utilisation is at this level, vacancies and wage growth moved this way, and inflation did or did not respond. "Potential output is 29.4 trillion chained dollars" is a binding from a model onto that effect. The canonical README states the limit as *"what a missing thing would have to look like (a shape, not a name)"*. The shape here is a capacity constraint with an interval; the point name is the searcher's contribution and must be recorded as such.

*The Hard Problem is About Source* (fetched 2026-11-23) gives the mechanism in a different field: *"If several paths create the same behavior, then behavior is a projection with lossy information"*. An instrument that reads green *"cannot comment on the source."* A GDP path plus a low inflation reading does not determine whether the economy is below capacity or whether its capacity fell. The spectrometer, not an argument, resolved the colour case; here the corresponding instrument is a set of independent slack readings.

**Mode:** `general` for the figure rule, `specified` for the claim that capacity estimation asks the same kind of question.

**Refuter:** a figure re-census showing that Fig 9 :30-31 governs only missing primitives and permits point identification of a latent state from a single series, or a demonstration that one observed series is one-to-one with capacity across all states.

### F4 : The discriminator is triangulation, not a vote (decisive, `general` and `specified`)

Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you."
Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"
Fig 2 :42 "Buy independence in proportion to the cost of being wrong."
Fig 8 :45 "Two frames together reach what neither reaches alone."
Fig 8 :48-49 "How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus. Two frames that overlap almost completely are one frame wearing two names."

Two instruments pointed at the same economy have surplus only if they are genuinely separate instruments. A consensus of forecasters all using variants of the same production function is one evidence pool wearing many names. The VoxEU result that the output gap is only slightly correlated with other slack indicators is a warning in both directions: the other indicators may carry real surplus, or their disagreement may mean none of them is reading capacity cleanly. Either way, a single estimate cannot be certified by agreement.

The cost of being wrong is a policy error applied at the wrong time, so Fig 2 :42 says independence is worth buying here. That means choosing observables with low overlap, not adding more estimates of the same kind.

**Mode:** `general` for the triangulation rule, `specified` for the claim that capacity utilisation, vacancies, and wage growth are low-overlap readings of the same residual.

**Refuter:** show that a candidate second indicator is a deterministic transform of the first (overlap near one), so the apparent triangulation is one pool counted twice; or show that the anchor moved when the frames agreed, which would turn the anchor into a frame.

### F5 : The real-time to final move is a lossy round trip (`specified`)

Fig 4 :27 "The transform between scales loses information, and that is the point."
Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

A real-time estimate carried forward to a final estimate and back into a policy decision is a transform across scales. The gap `R_T` is what the coarser description cannot hold. In the VoxEU sample the median real-time gap of -0.7 percent round trips to a final median of -0.1 percent; the missing content is the re-estimated potential growth, roughly two-thirds of the revision. Treating the real-time number as if it were the final number with a small symmetric error sets `R_T` near zero and is the dead-reckoning error Fig 4 :30 names. The world sources also report asymmetry: the VoxEU authors describe real-time gaps as *"asymmetrically revised upwards as time goes by"*.

**Mode:** `specified`. `R_T` is recorded qualitatively here, as the enumerated set of dropped constraints, not measured numerically, because no vintage-level computation was run in this folder.

**Refuter:** a round trip in which carrying the component and vintage detail up and back down returns the original aggregate exactly, with no residue, for a named economy and period. That would falsify the claim that detail is lost.

### F6 : Enumerate the habitat of the residual, do not compose a favourite variable list (`general`)

Fig 11 :43 "The habitat is enumerated, never composed."
Fig 11 :44 "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."
Fig 11 :52-53 "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."

Applied to this residual, direct contacts include real GDP and its vintages, capacity utilisation, unemployment and its alternative measures, vacancies, hours worked, wage growth, consumer and producer prices, and productivity. Second-order contacts include expectations, demographic change, participation, and hysteresis or scarring: the Wikipedia *Output gap* page (fetched 2026-11-23) notes that prolonged idleness can damage long-term potential through skill atrophy and reduced investment. The published statistical system makes this architecture visible: the FRED GDPPOT page cites the CBO's Budget and Economic Outlook and defines real potential GDP as *"the CBO's estimate of the output the economy would produce with a high rate of use of its capital and labor resources"*; the Federal Reserve Economic Research page lists G.17 industrial production and capacity utilisation, the FRB/US model, and FEDS Notes.

The list is read off the published habitat, not composed from a preferred model.

**Mode:** `specified` for the enumerated list, `general` for the enumeration rule. The specific list is world-sourced.

**Refuter:** an actor in contact with the residual that changes the diagnosis and was omitted from the enumeration after being pointed out. Because cascades are second and third order, this refuter stays live after the first pass.

### F7 : Underivable is not the same as unreached (general, decisive for the honest stop)

Fig 6 :27 "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."
Fig 6 :34-35 "Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."
Fig 8 :39 "So a search that finds nothing is never a proof of absence."
Fig 9 :44 "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."

The *Identifiability* page (statistics, fetched 2026-11-23) defines the relevant limit in a field with no contact with this framework: a model is identifiable only when different parameter values generate different distributions, otherwise *"two or more parametrizations are observationally equivalent."* Its errors-in-variables example shows a latent regressor whose coefficient cannot be learned even with infinite data without an extra assumption. The *Kalman filter* page (control theory, fetched 2026-11-23) shows the constructive counterpart: an unobserved state can be estimated from a sequence of noisy measurements, but optimality assumes *"the model matches the real system perfectly"* and the noise covariances are known exactly, and *"Practical implementation of a Kalman Filter is often difficult due to the difficulty of getting a good estimate of the noise covariance matrices."*

So "potential output is unobservable" and "we have not yet built a clean discriminator" are different facts that look the same from inside the estimating frame. The honest report is `unreached`: a range is available, an interval should be published, and the question of whether the latent state is structurally identifiable is left open. Neither "it does not exist" nor "it can never be measured" is licensed. Formula step 7 keeps SEARCHED, INWARD and OUTWARD distinct: more vintages and more methods (SEARCHED), better slack instruments (INWARD), and a different frame that already predicts the shape (OUTWARD, here the engineering and meteorological analogues).

**Mode:** `general` for the figure rule, `specified` for the mapping to latent capacity estimation.

**Refuter:** a proof that potential output is structurally unidentifiable from any finite set of observables under any admissible assumptions. That would downgrade this from `unreached` to `underivable`, and would change the instruction from "publish intervals and build instruments" to "replace the concept."

### F8 : A filter for the budget is not a witness for the verdict (general)

Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."
Fig 7 :13 "agreement compounds, evidence does not"

The institutional prominence of a potential output estimate, the number of institutions publishing one, and its convenience in a policy rule are all filters. They decide which estimate gets tried first and how much budget to spend refining it. None of them decides whether the estimate is true. A room of agreeing forecasters is one long room (Fig 7 :13): the agreement compounds while the evidence does not.

**Mode:** `general` for the rule, `specified` for the identification of prominence as a filter here.

**Refuter:** a decision rule whose loss is provably minimized by choosing the most prominent estimate, with no dependence on vintage or independent slack readings.

### F9 : Sorting the surprise by kind before minting a theory (general)

Fig 5 :10 "sort the gap into four kinds"
Fig 5 :11 "held: the model was right, nothing owed"
Fig 5 :12 "new: extend perception, aim the probe here"
Fig 5 :13 "mis-attached: refit what you have, do not invent"
Fig 5 :14 "mechanism broken: a new term is owed"

A forecasting surprise is sorted before a new theory is owed. A broad rise with capacity utilisation high is held. A rise concentrated in an unmeasured component is new, and the probe should be aimed there. A rise attributed to the wrong component is mis-attached, and the existing decomposition should be refitted. A rise the model structurally cannot represent (a supply shock in a model with no supply channel) owes a new term. A standing belief that a single scalar can anchor policy is REFUSABLE, and Formula step 2 says the refusal comes before any mint: *"REFUTED a term held is false; what is owed is a refusal, not an explanation"*.

**Mode:** `general` for the sorting rule, `specified` for the mapping to a capacity surprise.

**Refuter:** a surprise that cannot be assigned to any of the five bins without remainder, which would mean the pipeline as stated does not cover the phenomenon.

### F10 : What survives, with modes attached

| claim | mode | figure or source |
|---|---|---|
| A reading that revises when the model changes cannot be the anchor | `general` structural, `specified` applied | Fig 2 :29-34; VoxEU, FRED blog, ECB speech |
| Read slack per slot; an aggregate hides where the signal lives | `general`, `specified` applied | Fig 1 :19, :22; Symbols table |
| Capacity is described as an effect and returned as a band, not a point name | `general` | Fig 9 :30-32; Fig 6 :30; figures README |
| Independent slack readings, not a consensus, are the discriminator | `general`, `specified` for the chosen indicators | Fig 2 :35, :40, :42; Fig 8 :45, :48-49 |
| Real-time to final revision is a nonzero `R_T` that must be published | `specified` | Fig 4 :27, :30; VoxEU |
| The diagnostic set is enumerated from the published statistical habitat | `specified` | Fig 11 :43-44, :52-53; FRED, Fed research page |
| Informative and too imprecise to be decisive can both hold; unbundle | `specified` for the union, `general` for the rule | Fig 9 :54-59; VoxEU |
| Unobservable and not-yet-discriminated look the same from inside; report `unreached` | `general` | Fig 6 :27, :34-35; Fig 8 :39; Fig 9 :44; Identifiability, Kalman filter |
| The framework itself decides whether a dated episode had a given amount of slack | **refused** | no instrument run; Fig 2 :29-30 |

---

## 4. Strain test and re-census

Two candidate figure lines were tried and rejected after a genuine re-census. They are recorded, not silently dropped.

**Fig 13, the six-term substrate.** It would be tempting to map potential output onto the six terms, for example by calling capacity a spectrum (Fig 13 :19-20: *"ordering, so more and less can be said"*) and a supply shock a gradient (Fig 13 :21-22: *"a difference that can be spent"*). Then Fig 13 :74, *"Everything else is a composition across the two kinds, never within one."*, would appear to govern. This is a strain. The six terms govern composition at the substrate level; a latent-state estimation problem in macroeconomics is not a bond between space, time and energy, and the figures nowhere claim to be a macroeconometric model. Per the canonical rule, a reading that makes a figure strain has misidentified its domain. **Re-census result:** Fig 13 is moved to the census row "strained, rejected as governing here." It governs what a composition is, not how to estimate capacity.

**Fig 12 comparison ⋛.** The Operators table defines ⋛ as *"a threshold relation between two quantities"*, with the test *"is it about which is larger, rather than both being present?"*. It would be neat to call the comparison of a point estimate against the bounds of its interval a ⋛ bond. But Fig 12 is a theory of composition inside a library, whereas comparing a published number with its confidence bounds is a measurement operation. **Re-census result:** ⋛ is retained as a weak structural analogue ("which is larger" captures the shape of an estimate-versus-bound check) and marked `strained-for-now`, single-source, not part of the verdict. The same applies to the isomer reading in `06_isomers_and_order.md`: two capacity estimates with the same point value but different internal arrangements are isomer-like under Fig 12 :117, but the "atoms" here are measured series rather than primitives, so that claim is an analogue, not a derivation.

After re-census: **no figure line is forced.** The governing set is Figs 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 and 11, plus the Symbols table and the Formula. Figs 12 and 13 are recorded as strained and non-governing.

---

## 5. Pre-registered refuter

Written before the conclusion, per Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."*

The decision-grade-capacity shape claim is refuted if any of the following holds:

1. **The anchor moves.** A named potential output estimate for a named economy and period is invariant under all plausible re-estimation methods and all data vintages, and outturn inflation and employment are shown to revise when the estimate revises. This breaks Fig 2 :29-34.
2. **The aggregate carries everything.** A single scalar gap classifies slack per sector, region and group with zero residual across a dated set of episodes containing at least one adverse supply shock and one demand boom. This breaks Fig 1 :19-22.
3. **One series identifies capacity.** A single observed series is shown to be one-to-one with sustainable capacity in all states, so no independent slack readings are needed and Fig 9 :30-31 permits point identification. This breaks F3.
4. **The pool is one.** Every candidate "independent" slack indicator is shown to be a deterministic transform of the same GDP series, so the union has no surplus. This breaks Fig 8 :45-49.
5. **No revision loss.** A vintage round trip returns the original real-time estimate exactly with no residue for a named economy and period. This breaks Fig 4 :27-30.
6. **World-level failure.** A well-documented episode in which every published capacity estimate, every independent slack indicator and every outturn series agree, and the policy action based on them still produces a large forecast error with no available instrument that discriminates the source. That is a genuine `unreachable-at-this-budget` result and is reported as such, not smoothed into a confident classification.

If any fires, the shape claim is withdrawn or downgraded to `gap`. Until one is run, no part of this may be labelled `grounded`.

---

## 6. Recommendation

1. Lead with the shape, not with a verdict about any particular estimate: an unobserved capacity ceiling cannot be the anchor; it must be reported as a band, read per slot, and ranged against outturn data (F1 to F4).
2. State the mode on every sentence. The figures give the shape; economics gives the variables; the ground gives the episode verdict (F10).
3. Publish the revision alongside the estimate, so `R_T` is visible rather than assumed zero (F5).
4. Unbundle "useful" from "precise enough to decide", and keep both cuts ranked and reversible (§1, F10).
5. Enumerate the published statistical habitat instead of composing a favourite model's variable list (F6).
6. Report `unreached`, not `unobservable in principle` and not `settled` (F7).
7. Sort a surprise by kind before minting a new capacity theory, and refuse the single-scalar-anchor belief first (F9).
8. Figure 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."* Send the generator, the shape plus its refuter, not a table of past gap estimates.

---

## 7. Canonical usage check

Two local canonical sources were read after the first four sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the limit, the framework says *"what a missing thing would have to look like (a shape, not a name)"* and then stops at the limit of the instruments, recording the lineage. *"Indiscernibility is not identity."*
- `THE_FORMULA.md`: mode rule, the five kinds of residual, and the discipline that *"make the sought-for shape an ORDINARY TERM - write down what an answer would look like, bind it, and let it accrue a residual like anything else."* This is how the shape claim in §0 was bound before the run.

### Retractions and confirmations

| earlier reading | status after re-census and canonical check |
|---|---|
| Fig 13 six-term substrate governs capacity estimation | **Retracted as a strain.** Fig 13 governs substrate composition; a latent-state estimation problem is not a state-state bond. Re-census moved it to non-governing. |
| ⋛ comparison bond governs estimate versus interval bounds | **Downgraded to a weak analogue.** The Operators table defines ⋛ for quantities inside a composition; comparing a number with its bounds is a measurement operation. Strained-for-now, single-source, not in the verdict. |
| "Potential output is an anchor for policy" | **Refused, not merely unsupported.** Fig 2 :29-34: an anchor that updates when the frame changes is a frame. The outturn series is the anchor; the estimate is a reading. |
| "Shape, not a name" forbids reporting any number | **Narrowed.** The README's phrase governs a missing thing. Reporting a range with a vintage and provenance is a shape; presenting a point value as the capacity ceiling is the forbidden move (F3). |
| The question is a clean either-or | **Refused.** Fig 9 :54-59: it is a union of two conditions that can both hold. Unbundle before searching. |
| "Potential output cannot be observed, so it does not exist" | **Refused.** Fig 8 :39 and Fig 9 :44: a search that finds nothing proves nothing. Report `unreached`. |
| This derivation settles the policy question | **Refused.** Simulated derivation, `specified`, candidate. It cannot settle anything it reports on. |
| VoxEU and FRED corroborate the figure verdict | **Confirmed as corroboration only.** Both are low-overlap with the framework, but world sources never decide a figure verdict. Their agreement is not a second witness to the figures. |

---

## 8. Updated verdict

Both halves of the question survive, but at different levels. Potential output is **useful** as a bounded, revisable, per-slot input that helps frame a policy question; it is **too uncertain to rely on** as the decisive anchor or as a single point value. The two are not a contradiction once the union is unbundled: informative and imprecise can hold at once. The policy-relevant output is not a number but a decision rule: publish a range, show its revision, triangulate against genuinely independent slack readings, and test whether the intended action remains acceptable across the range. The anchor is outturn inflation and employment, which do not revise when a model does.

No figure line was forced. Strains after re-census: **two, both named and non-governing** (Fig 13 substrate, ⋛ operand type). The estimate-level verdict is unreached, not unreachable: it needs vintage-level computation and an instrument that discriminates sources of the same reading, and this document supplies neither.
