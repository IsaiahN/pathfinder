# Figure-grounded audit: attributing an ecosystem decline (EAR-0049)

**Mode of this document: `general` on the shape, `specified` on the procedure, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* An unmeasured attribution procedure is a specification of what to measure, not a verdict about any ecosystem.

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap*, opened 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post... the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No ecosystem was measured.

**Sources.** Figure citations are verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`. Formula citations from `FRAMEWORK/figures/THE_FORMULA.md`. Essay and world citations are listed in `10_source_ledger.csv` and were opened 2026-11-22.

---

## 0. The residual, stated in effect terms

The question asks how scientists can tell whether an observed ecosystem decline is driven chiefly by climate, by direct human pressure, or by their interaction. Restated as an effect:

> A decline is observed across a set of ecological slots (species, populations, sites, functions). Three candidate driver frames each predict what the decline should look like. The residual for slot *s* is `R_s = |predicted decline under a candidate driver − observed decline|`. We must decide what would make one candidate, or their compound, the correct account of `R_s`, and what would make that decision fail.

Two things are being decided, and they must not be conflated:

1. **The method question.** What does a sound attribution have to do in order to count as evidence at all?
2. **The case question.** Which candidate actually governs a particular decline?

The figures bear on (1) directly. They do not answer (2) for any case, because (2) requires a ground reading that this package does not take. Treating a figure-derived method as if it named the driver would be the output-layer error of stating a specification as a verdict.

What an answer would look like, bound as an ordinary term before the run (Formula step, Direction): *an attribution counts as warranted when each candidate is ranged separately against an anchor that does not update, when the residual is described before a frame is chosen, when a bundled question has been split and its union compound isolated, and when agreement between frames is shown to come from independent evidence rather than a shared pool.* This is the sought-for shape made refutable, written down before the findings below.

---

## 1. Domain census (before any figure line is chosen)

### R by arity, symmetry and scale

- **Arity:** three candidates plus their union. Climate and direct human pressure are two distinct causes; "their interaction" is a third candidate that is not a peer of the first two but a compound over them.
- **Symmetry:** not symmetric. Climate and human pressure differ in actors, currency and temporal scale. Their interaction is not a symmetric join of two equal operands; it is a case in two conditions, governed by Fig 9's union language rather than by a conjunction of two independent results.
- **Scale:** climate operates broadly and slowly; direct human pressure operates locally and often quickly; the interaction crosses scales. The measured decline sits at the ecosystem scale but the residual that matters may be several steps out in the contact cascade.
- **Slot structure:** `R` must be indexed per species, population, site or function. A single aggregate "the ecosystem is in decline" destroys the signal that says which driver acts where.

### One line per domain: actors, currency, anchor

**Domain 1, the observation frame (is there a decline, and where? )**
Actors: species, populations, survey instruments, monitoring time series, observers. Currency: the per-slot residual `R_s` against a baseline. Anchor: the measured state of the ecosystem, which does not change because a climate scientist or a conservation biologist prefers one driver. If the measurement moves when a driver frame pushes on it, it is not an anchor. This is a genuine domain: it has a nameable anchor.

**Domain 2, the driver-attribution frame (which candidate predicts the residual? )**
Actors: climate variables, direct human pressures (harvest, land conversion, nutrient loading, pollution, introduced species), the interaction term, and the models that represent them. Currency: counterfactual predictions and explanatory residuals. Anchor: experimentation, manipulation, natural experiment, or a counterfactual model whose factual and control worlds are declared. Without such an anchor, two candidates that agree are one evidence pool, not two witnesses. This is a genuine domain: its anchor is an experiment or a counterfactual, not agreement.

**Domain 3, the contact and confounding frame (what is in contact with the residual? )**
Actors: conditions (temperature, water, season, terrain), relations (pollination, predation, competition, dependency), and indirect human effects that arrive several steps from their point of application. Currency: contact and cascade. Anchor: the ground, never the correlation between two driver time series. A shared source can make climate and human pressure agree without two witnesses. This is a genuine domain: the habitat is enumerable and it updates, while the ground that settles the attribution does not.

### Partition or union

The three candidates form a **union with overlaps**, not a partition. A case where warming and overfishing both bind is not a harder case of either; it is a specific compound with its own loop. A single-lever study that removes one pressure clears the region where only that pressure binds and leaves the intersection standing. The union must be unbundled before it is searched, or the interaction is silently absorbed into whichever single driver was tested first.

### Dependency order (Fig 3)

1. Establish the decline per slot (Domain 1). Fig 3 :20: *"The chain is ordered by dependency, not by importance."* A reading below this link is a reading of nothing.
2. Describe `R` in effect terms before selecting a driver frame (Formula step 7; Fig 9).
3. Split the bundled question; isolate the union compound (Domain 2).
4. Range each candidate against an anchor and buy independence between frames (Domains 1 and 2).
5. Enumerate contact outward past the first order (Domain 3).
6. Let the ground decide; record what is still unreachable.

Strain test was applied throughout: any figure line that only fit by forcing was sent back to the census. One such re-census is recorded in §7 (the abandoned six-term mapping).

---

## 2. Figure census (quoted before concluding)

| figure | bearing | verdict in this question |
|---|---|---|
| 1 The Agent | residual per slot, never aggregated | governs the observation frame |
| 2 The Ground | anchor must not update; correlation disqualifies a verdict; independence | governs the attribution frame and the confounding frame |
| 3 Dependency Chain | order by dependency; a link with no instrument | governs the step order above |
| 4 The Membrane | methods cross up, head starts down | governs what may be offered in outreach |
| 5 Mint Pipeline | guards, bargain, settling is not sufficiency | governs why "we fitted a model" is not a verdict |
| 6 Closure / Reachability | import is the only operator that moves the wall; instruments from worse instruments | governs "you cannot measure a driver that has never registered" |
| 7 Room Chain | agreement is variation, not a verdict | governs consensus as non-evidence |
| 8 Union Surplus | low overlap, two frames reach what one cannot; provenance | governs independence as the parameter |
| 9 Leave / Arrive | split before search; unbundle the union; describe residual first; filters are not witnesses | the decisive figure set for this question |
| 10 Ground Maintainer | bring a characterised residual; verifier non-access; declare stakes | governs the two-stage offer |
| 11 The Habitat | enumerate contact outward; contact cascades; habitat is not the ground | governs indirect and lagged human effects |
| 12 The Bond | arrangement carries meaning; a flat list is not the thing | governs the interaction as a compound, not a sum |
| 13 Minimum Viable Set | unreachable is a verdict; shape, not a name | governs the honest stop |
| Operators / Symbols | `R` is the gap between prediction and observation; the ground is the anchor | governs the vocabulary of the residual |

---

## 3. Findings

### F1 — Keep the decline per slot; an aggregate throws away the driver signal

Fig 1 :19 says *"The residual is indexed by object slot, not aggregated."* Fig 1 :22 says *"Aggregating across slots is how a live signal disappears into an average."*

Applied here: a single ecosystem-wide decline index cannot tell whether the loss is concentrated in a temperature-sensitive species (climate), in a harvested species (direct pressure), or in the interaction between them. The per-slot structure is where the discrimination lives. The world literature corroborates independently. Earth System Dynamics, opened 2026-11-22, reports work that *"highlight the risk of information loss inherent in commonly used aggregation approaches"* for indirect human effects. That is a different field using different instruments to arrive at the same constraint.

**Mode:** `general` (structural). **Status:** triangulated across Fig 1 and the Earth System Dynamics paper, with low overlap between the framework figure and an empirical aggregation study.

**Refuter:** show a case in which aggregating across species or sites preserves, rather than removes, the driver-specific signal, under a declared code for `R`. If aggregation preserves it, this finding does not govern that case.

### F2 — Attribution needs an anchor that does not update; correlation is not a witness

Fig 2 :29 says *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* Fig 2 :35 says *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Fig 2 :20-21 says *"so the agreement is the pool talking, not two frames confirming each other."*

Applied here: a climate time series and a decline time series that move together are two readings of one world, not two independent checks. If the climate frame and the human-pressure frame both draw on the same monitoring dataset, their agreement is the dataset talking. What is owed is an anchor: a manipulation, an exclusion experiment, a natural experiment, or a counterfactual factual-versus-control comparison whose control world does not bend when a frame pushes on it. Extreme event attribution, opened 2026-11-22, describes exactly this move: methods apply models to *"the \"factual\" (observed) world ... and a \"counterfactual\" (control) world that does not suffer human drivers of global warming."* *Causes of climate change*, opened 2026-11-22, describes fingerprint studies in which *"unique \"fingerprints\" for all potential causes are developed and compared with both observed patterns and known internal climate variability."*

**Mode:** `specified`. **Status:** triangulated across Fig 2 and two independent climate-science sources (counterfactual design and fingerprint discrimination), low overlap with the framework.

**Refuter:** produce a warranted attribution in which every candidate frame draws on one observational dataset and no experiment, counterfactual, manipulation or independent instrument exists. If that attribution survives, the anchor requirement does not govern this case.

### F3 — "Climate, human pressure, or interaction" is not one hard question; split before searching

Fig 9 :5 says *"are not one hard question but several well-formed ones. Split it rather than search."* The preceding lines (Fig 9 :4) give the condition: disagreements *"that do not shrink with effort, where each rule keeps working well on a different subset."*

Applied here: if the climate account keeps working on cold sites and the human-pressure account keeps working on accessible sites, and neither improves with more effort, the honest move is to split the question by subset, not to keep fitting a bigger model. *The Library of Babel*, opened 2026-11-22, states the same thing from the search side: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually"*.

**Mode:** `general` with a `specified` trigger condition. **Status:** triangulated across Fig 9 and the search essay (different vocabularies, different domains, low overlap).

**Refuter:** show a case where the three candidates do form a partition, the disagreement shrinks monotonically with effort, and a single search resolves all three at once. Then splitting is unnecessary here. This refuter is narrow on purpose: it does not overturn the finding globally, it bounds its domain, as it should.

### F4 — The interaction is a union compound, not a mixture or a third peer

Fig 9 :54 says *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :55 says *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :56-57 says *"A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."* Fig 9 :57-58 says *"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."*

Applied here: "their interaction" is not a third driver sitting beside the other two. It is the intersection where both conditions bind. A study that removes fishing pressure clears the fishing-only region and leaves the warming-plus-fishing region standing, which then has to be treated as its own object. *Regime shift*, opened 2026-11-22, corroborates from ecology: *"Regime shifts typically result from a combination of gradual changes in an underlying driving variable (or set of variables), combined with an external shock, such as a storm or fire."* Global Tipping Points, opened 2026-11-22, is blunter: *"Climate change and deforestation together put the Amazon rainforest at risk of widespread dieback below 2°C"*.

Fig 12 :5 adds the structural reason a sum is not enough: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."* The interaction is carried by the relation, not by the list of pressures.

**Mode:** `specified`. **Status:** triangulated across Fig 9 plus Fig 12 and two ecology/tipping sources, low overlap between framework and world literature.

**Refuter:** demonstrate, for a case where both drivers demonstrably bind, that their effects are strictly additive with an empty intersection, so that a single-lever design clears the whole residual. Then the compound reading does not govern that case.

### F5 — Describe the residual before choosing a frame, or any frame will seem to fit

Fig 9 :27-28 says *"describe it before you go looking, or any frame you pick will seem to fit."* Fig 9 :30-31 says *"your words are borrowed too, so describe the effect rather than the cause."*

Applied here: starting from "this looks like climate change" or "this looks like overfishing" and then collecting confirming series is apophenia. The decline has to be characterised in effect terms first (which species, which site, which function, which season, what shape of change), and only then should candidate frames be ranged against it. Extreme event attribution, opened 2026-11-22, names the same discipline as *"framing: the careful posing of questions that science is better able to answer"* and notes that science can better answer whether human influence increased the frequency or intensity of an event than whether humans caused it. Asking the answerable version is a description of the residual, not a retreat from it.

**Mode:** `specified`. **Status:** triangulated across Fig 9 and attribution science, low overlap.

**Refuter:** show a frame selected before the residual was described that nevertheless discriminates between candidates at least as well as a residual-first design, measured by out-of-sample counterfactual prediction. If so, the ordering constraint is weaker than claimed.

### F6 — Buy independence; two datasets from one pool are one witness

Fig 2 :31-32 says *"Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are."* Fig 2 :40 says *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."* Fig 8 :29 says *"low overlap: B does not draw on A's evidence."* Fig 8 :45 says *"Two frames together reach what neither reaches alone."*

Applied here: a climate-model prediction and a human-pressure model prediction both tuned to the same monitoring record are one frame wearing two names. What buys independence is an experiment, a different instrument, a different lineage of data, or a natural experiment with a genuinely different provenance. Independence is a **parameter of the verdict**, not a courtesy. Fig 2 :42 says *"Buy independence in proportion to the cost of being wrong."*

**Mode:** `general`. **Status:** single-source for the figure definition of independence in this derivation (Fig 2 and Fig 8 are the same framework, so they are one witness), with corroboration from climate fingerprint practice, which explicitly compares candidate causes to known internal variability rather than pooling them.

**Refuter:** exhibit two attribution frames with proven identical evidence pools whose agreement still raises the warrant of a driver claim. By the figure's definition that cannot happen; if it does, the definition of independence here is wrong.

### F7 — Enumerate the habitat outward; the residual that matters can be three steps out

Fig 11 :43-44 says *"The habitat is enumerated, never composed. List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."* Fig 11 :52-53 says *"Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."* Fig 11 :73 says *"The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."*

Applied here: a direct human pressure (pesticide, nutrient loading, harvesting of a predator) can produce a decline in a species that never touched the pressure, via a food-web cascade, and can arrive with a lag that outlasts the measurement window. Scoping the search to the species that declined, or to the year it declined, is first-order enumeration. Fig 11 :49 says *"An actor's valence is relative to the residual, not a property it carries"*, so "human pressure" is not automatically the harm and "climate" is not automatically the background; which one binds is relative to the residual being tracked. *Silent Spring*, opened 2026-11-22, corroborates the case the figure cites: Carson documented *"the death of birds around her property in Duxbury, Massachusetts, resulting from the aerial spraying of DDT to kill mosquitoes."*

**Mode:** `specified`. **Status:** triangulated across Fig 11 and the environmental-history source, low overlap.

**Refuter:** show a decline for which the full causal chain is contained in first-order direct contact, with a measured zero second-order effect and no lag. Then cascade enumeration is not owed for that case.

### F8 — Fit, significance and model weight are filters for the budget, not witnesses for the verdict

Fig 9 :60 says *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* `THE_FORMULA.md` step 5 says *"SETTLE — the ground settles it. Verified only by what pays. A gate is not the ground."*

Applied here: variance explained, Akaike weight, a significant coefficient, or a good hindcast tells you which candidate to try first with a limited budget. It does not tell you which candidate is true. The verdict is owed by an anchor (F2), and the record has to say which anchor paid. Fig 10 :65-66 adds the provenance constraint: *"Provenance shows a ruling was reached legitimately. It never shows it was right: the ground does that, and a wrong ruling stays wrong however clean its record."*

**Mode:** `general`. **Status:** single-source for the figure phrasing, corroborated by the distinction in climate attribution between what a model can reproduce and what an anchor settles.

**Refuter:** specify a decision rule under which a fit statistic alone, with no independent anchor, licenses a driver verdict for a case, and show it is not merely a budget allocation. If such a rule works, Fig 9 :60 does not govern that decision.

### F9 — The figures give the method's shape, not the case's answer; this is not silence

Fig 13 :134 says *"Unreachable is a verdict here, not a silence."* Fig 9 :32 says *"you get a kind of thing, never the answer itself."* Fig 2 :45 says *"Frames range against the ground. They do not negotiate with it."*

Applied here: this derivation returns a shape for a sound attribution and a set of falsifiers. It does not return "climate", "human pressure" or "interaction" for any named ecosystem, because no instrument was read. That is a `gap` at this budget on the case question, and a figure-governed `specified` result on the method question. The two verdicts are kept separate and never averaged. Fig 6 :34-35 sets the honest boundary for what a future instrument could do: *"The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."*

**Mode:** `general` on the limit, `specified` on the procedure. **Status:** triangulated across Fig 13, Fig 9 and the canonical figures README (which the local copy states as returning *"what a missing thing would have to look like (a shape, not a name)"*).

**Refuter:** produce from the figures alone a named driver for a specific ecosystem without a ground reading, in a way that survives the strain test. If that succeeds, this honest-stop finding is wrong.

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach: a falsifier written in advance is a design instrument. The shape claim is refuted if any of the following holds:

1. A warranted driver attribution is produced from a single observational frame with no anchor, no counterfactual and no independent instrument (breaks F2).
2. Aggregating the decline across slots demonstrably preserves the driver-specific signal under a declared code for `R` (breaks F1).
3. In a case where climate and direct human pressure both bind, their effects are shown to be strictly additive with an empty intersection, so no union compound exists (breaks F4).
4. Two frames with a declared common evidence pool nevertheless raise the warrant of a driver claim by agreeing (breaks F6).
5. A fit statistic alone, with no independent anchor, licenses a driver verdict under a stated decision rule (breaks F8).

If any fires, the method shape is wrong in that domain and the affected claim is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with the residual and the refuter, never with the framework (Fig 10 :52).
2. Report `R` per slot and say what the slots are (F1).
3. Describe the decline in effect terms before naming any candidate driver (F5).
4. Split the question where the disagreement does not shrink; unbundle the intersection where both conditions bind (F3, F4).
5. Buy an anchor and independence in proportion to the cost of being wrong (F2, F6, Fig 2 :42).
6. Enumerate contact outward until the cascade stops mattering (F7).
7. Keep fit in the budget column and the ground in the verdict column (F8).
8. Record the stop and the lineage, and say plainly which part is a `gap` (F9).

---

## 6. Canonical usage check

Two framework-level sources were consulted after the findings and are used only as usage rules, never as a source of new case facts.

- `FRAMEWORK/reference/FIGURES_README_canonical.md` (local copy): the figures *"outrank everything else in the repo"* and *"the quotes are the authority, not this summary"*; a reading that makes figures contradict one another has misidentified its domain; the framework returns *"a shape, not a name"* and records the lineage so the stop is honest.
- `FRAMEWORK/figures/THE_FORMULA.md`: step 7 separates SEARCHED, INWARD and OUTWARD; these are not interchangeable. For this question, SEARCHED was asked first (is the answer already in the closure of the observational frame? no, because the three candidates cannot be discriminated without an anchor), then INWARD (sharpen the instrument: per-slot measurement, counterfactual design) and OUTWARD (find a frame whose closure predicts the decline shape: manipulation experiments, fingerprint methods, regime-shift analysis). INWARD and OUTWARD were never read against one another.

### Retractions and corrections (kept visible)

| earlier reading | status after the check |
|---|---|
| Initial attempt to map the three candidates onto the six-term substrate (climate = gradient, human pressure = network, interaction = comparison). | **Retracted.** Re-census: Fig 12 and Fig 13 govern composition of states and structures, not causal attribution across driver frames. The mapping strained both figures, so per the canonical rule the strain sent it back to census rather than into a softer reading. Nothing from that mapping survives in the findings. |
| F3 first written as "always split the question". | **Narrowed.** Fig 9 :4 gives the trigger condition. Splitting is owed when the disagreement does not shrink with effort and each rule works on a different subset. The unconditional form was an over-generalization and is withdrawn. |
| F6 initially counted Fig 2 and Fig 8 as two corroborating witnesses for independence. | **Retracted at the witness level.** They are the same framework and one evidence pool, so they are one witness. Climate fingerprint practice is the low-overlap corroboration; the figure pair is the definition. |
| "No ground reading exists for any ecosystem" (first draft of F9). | **Corrected.** The claim is about this package, not about ecology. Attribution science has ground readings for particular events; this derivation has none, so its case-level verdict is a `gap` here, not a claim that the question is unanswerable. |
| Interaction described as "a third driver peer" in the first census. | **Corrected** to union compound (F4), after re-reading Fig 9 :54-58. The earlier census is kept here rather than erased. |

---

## 7. Verdict of the primary seat

The method shape survives: per-slot residual, residual described before frame, split before search, union unbundled, anchor required, independence bought, contact enumerated outward, filters kept out of the verdict, stop recorded. Verdicts by domain, kept separate:

- **Domain 1 (observation):** `triangulated`, Fig 1 plus the aggregation study, low overlap.
- **Domain 2 (attribution):** `triangulated`, Fig 2 and Fig 9 plus counterfactual and fingerprint practice, low overlap.
- **Domain 3 (contact and confounding):** `single-source` for the figure framing with one low-overlap historical corroboration (Silent Spring / DDT).
- **Case-level driver identification:** `gap` at this budget. Not a silence, not a refusal to answer, and not evidence that the question is unanswerable.

Strain after re-census: none left live. The one live strain from the first draft (the six-term mapping) was retracted rather than smoothed, and the F6 witness count was corrected. Internal consistency only. This audit cannot settle the question it reports on.
