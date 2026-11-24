# Figure-grounded audit: EAR-0097

**Mode of this document: `specified` on the per-domain verdicts, `general` on the structural shape, `gap` on the literal ranked list. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (opened 2026-11-22) states that LLM output can only simulate an approximate answer: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post."* The testable output *"would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Figure text source.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session. Every quoted string below is an exact substring of that file. Citations are `Fig N :line`. No figure quote was taken from a summary, a memory, or another file in this folder.

---

## 0. The residual, stated in effect terms

R = |Γ(b,a) − o′| per slot s.

- **Γ** is the forecasting system currently in use: the model, the data-assimilation step, the downscaling chain, and the uncertainty product it issues.
- **b** is the belief encoded in the initial and boundary conditions.
- **a** is the decision the forecast is being asked to inform: siting a substation, raising a levee, assigning a zoning class.
- **o′** is what actually happens at the place and time the decision commits to.
- **s** is the decision slot: a catchment, a coastal segment, a watershed, a parcel, a service territory. It is *not* a global mean.

The residual is not "models are imperfect." It is the specific, per-slot gap between a prediction and the local outcome on which an irreversible or expensive decision was based. Fig 1 :23: *"The ground enters as the only metric."* Symbols table :38-40: R *"is the aim, not only the error signal, and it is always a slice: what cannot be perceived yet is residual and simply cannot be read."*

**Question as effect.** Which additions to the observing system would shrink R⁺_s on those slots, where R⁺_s is the live positive mass (Fig 5 :21: *"the gap has real mass somewhere"*)? "Most improve" is a comparative, ⋛, not a conjunction (Fig 12 :87: *"a threshold relation between two quantities"*). It ranks candidate observations by a quantity already held, the residual that persists and does not trend down (Formula step 2), not by plausibility or by how impressive the instrument sounds.

**What an answer would look like, bound as an ordinary term (Formula step "Direction").** Before searching I write down the sought-for shape and let it accrue a residual like anything else. Candidate answer shape A: *an observation qualifies as decision-scale-improving only if (i) it reduces forecast error on at least one live decision slot, (ii) it is read against an anchor that does not update on the model's own output, (iii) its value survives the global-to-local round trip, and (iv) it extends an instrument already returning something that fails to resolve.* A is bound now, so it can be refused by the same test as everything else. It is not assumed true.

**Anchor check.** A nameable anchor exists. It is the observed local outcome at the decision slot: a measurement, a gauge, a survey, a recorded failure or survival. Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* So this is a well-formed question, not yet a `gap`.

---

## 1. Domain census, before choosing any figure line

### 1.1 R by arity, symmetry, scale

- **Arity.** The forecast residual is a three-place relation among Γ(b,a), the action a, and the outcome o′, indexed by slot s. A two-place reading (model versus world) loses the decision, so it is rejected. The ranking question adds a second arity: comparing candidate observations is a threshold relation between quantities (Fig 12 :87), not a symmetric join.
- **Symmetry.** Not symmetric. The observation is ordered before the decision and the outcome after it (Fig 12 :71, sequence, *"A then B; B needs A to have happened"*). Decision relevance is a threshold: an observation inside the decision's lead time and cost envelope counts, one outside does not. A pooled symmetric average of skill destroys the ordering (Fig 1 :22).
- **Scale.** Intrinsically cross-scale. The observation often enters a global or regional model; the decision is local. The transform between them is lossy (Fig 4 :27: *"The transform between scales loses information, and that is the point."*). So the residual lives at the membrane, not entirely on either side.

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if it has a nameable anchor. No anchor means it is not a domain yet.

| id | domain | actors | currency | anchor | admitted? |
|---|---|---|---|---|---|
| D1 | The forecasting frame | models, data assimilation, downscaling chains, forecast producers | forecast error per slot, ensemble spread | the observed local outcome that settles the forecast (Fig 2 :29) | yes |
| D2 | The decision frame | planners, engineers, regulators, land managers, affected communities | avoided loss, robust choice, lead time | the realized consequence at the decision site | yes |
| D3 | The scale membrane | regional models, downscaling, the T_A / T_E round trip | information lost across the transform, R_T | local observations against which a downscaled projection can be ranged | yes |
| D4 | The instrument and channel frame | gauges, satellites, reanalysis, field surveys, data streams | what can be represented at all; contact with the ground | the ground that persists while the channel decays (Fig 10 :24) | yes |
| D5 | The habitat / cascade frame | actors, conditions and relations in contact with the residual | contact cascades out to the second and third order | the world read off, not the model's variable list (Fig 11 :48) | yes |
| C1 | "More data everywhere" as a free property | an aggregate | volume | none independent of D1's metric | no, not a domain; a candidate answer with no residual described |
| C2 | "A perfect forecast" as the sole cause | an idealization | zero error | none reachable; a terminal room | absorbed into D1 as a limit, not admitted |

### 1.3 Partition or union

Union, not partition. D1 (model error), D3 (scale loss), D4 (channel decay) and D2 (decision usability) are overlapping conditions, not disjoint buckets. A single lever, for example adding another satellite channel, clears the region where only D1 holds and leaves the intersections standing: the scale mismatch in D3 and the channel drift in D4 still bind. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :57: *"a case in two conditions is not a harder case of either."*

D5 is not a fifth equal bucket. It is the enumeration rule for all of them: the habitat is read off the world, and the observation that matters can be three causal steps out (Fig 11 :52: *"Scoping the habitat to direct contact is how DDT reached the eagles"*).

### 1.4 Dependency order (Fig 3)

The chain is perception -> vocabulary -> objective -> planning -> learn and carry (Fig 3 :20: *"The chain is ordered by dependency, not by importance."*). For this question:

1. **Perception:** can the relevant variable be observed at the decision slot at all? This is the link that usually breaks (Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*).
2. **Vocabulary:** do we have a term for what the observation affords the decision?
3. **Objective:** can we say what would count as improvement here, in the slot's own terms?
4. **Planning / carrying:** which network, which cadence, which archive.

Effort above the break is effort that arrives at a step that cannot use it. Fig 3 :29-30: *"Most improvement effort in practice lands above the break, because that is where the measurements already exist."* In this field that means more compute and more global model resolution, which are measurable, rather than the unmeasured local link.

---

## 2. Figure census

The figures that bear, quoted before conclusions are drawn. Strained readings are named in section 7, not smoothed over.

| figure | bearing on this residual | verdict it supports |
|---|---|---|
| 1 The Agent | residual indexed per slot; aggregation hides it | no global skill average can answer this question |
| 2 The Ground | anchor must not update; independence; buy independence by cost of being wrong | observations must be read against a non-updating local anchor, and independent of the model's own pool |
| 3 Dependency Chain | link with no instrument; effort lands above the break | the local perception link is the usual break |
| 4 The Membrane | kernel fixed, actors/currency/anchor change; round trip and gap | cross-scale value is measured by R_T, not assumed |
| 5 Mint Pipeline | support, reachability, novelty; gap has real mass | an observation must reduce a live slot residual, not merely add volume |
| 6 Closure / Reachability | import is the only wall mover; instruments extend representation; proto-instrument rule | new sensor modalities are imports with a source gate; sharpening needs an existing edge |
| 7 Room Chain | agreement is variation, not a verdict | many agreeing ensembles are one long room |
| 8 Union Surplus | residual first, frame second; no proof of absence; provenance | describe the decision-scale residual before naming an observing technology |
| 9 Leave / Arrive | describe before looking; union; filters not witnesses | shape not a name; ranked list is a filter for the budget |
| 10 Ground Maintainer | ground does not decay, channel does; pooled readings; bring a characterised residual | channel maintenance is a first-class answer; do not send the source |
| 11 The Habitat | enumerate, never compose; read off the world; valence relative to residual; cascades | no standing list of valuable observations; enumerate the contact network outward |
| 12 The Bond | comparison, two currencies that do not add | "most improve" is a comparison of bits and actions, not one score |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | the literal named list is a `gap`, reported not manufactured |
| Operators / Symbols tables | ⋛ threshold; R is a slice | per-slot residual is the selection quantity |

---

## 3. Findings

### F1 - The residual must stay indexed per decision slot (decisive for the framing)

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**
Fig 1 :20 (substring): **"Support is satisfied when some slot carries positive mass"**

A global forecast-skill average can improve while the one catchment that matters is still wrong. That is a legal state under the figures (Fig 1 :13: *"a global R near zero with one live slot residual is a legal state"*). Therefore "which observations improve forecasts" cannot be answered with a global ranking. It must be answered per slot class, on slots with positive live mass.

**Refuter:** show a global skill metric that preserves the per-slot residual on every decision-relevant slot with no information loss, or show that all decision slots have zero residual. Then per-slot indexing is unnecessary and this finding falls.

### F2 - "Most improve" is a comparison in two currencies that do not add

Fig 12 :125: **"A composition costs in two currencies, and they do not add."**
Fig 12 :126: **"Bits price the description. Actions price finding out whether it holds."**
Fig 12 :87: **"a threshold relation between two quantities"**

An observation's value has an information component (how much of the slot's uncertainty it removes) and an action component (what it costs to deploy, maintain and assimilate). They are in different units. Summing them into one "value score" is the named error, not the fix. The world literature agrees from an independent field: *Value of information* (Wikipedia, 2026) defines VoI as *"the amount a decision maker would be willing to pay for information prior to making a decision"* and states *"The VoI of observing two new evidence variables is not additive."* That is a price in money, not a claim that bits and actions add.

**Refuter:** produce a single unit in which information and deployment action are commensurable without a declared conversion convention, and show the ranking is invariant to the convention. Until then the comparison stays two-dimensional.

### F3 - The anchor must be local and must not update on the model

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**
Fig 2 :45: **"Frames range against the ground. They do not negotiate with it."**
Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**

A forecast validated only against another forecast, a reanalysis built from the same model family, or an ensemble whose members share the same initial dataset is one evidence pool talking. Fig 2 :31: **"Independence, between two frames, is how little they draw on the same evidence."** The world's ensemble-forecasting literature supplies the independent corroboration: *"existing observation networks have limited spatial and temporal resolution ... which introduces uncertainty into the true initial state of the atmosphere"*, and *"It is common for the ensemble spread to be too small, such that the observed atmospheric state falls outside of the ensemble forecast. This can lead the forecaster to be overconfident in their forecast."*

So one of the observations that "most improve" forecasts is the independent local reading that lets a forecast be ranged against something it cannot move. This is a structural result, not a preference for field work.

**Refuter:** show a verification closed under the model's own output that reliably detects the model's error at the slot without any independent reading. Then the anchor requirement is void for this question.

### F4 - The scale mismatch is a measurable round-trip gap, not a defect to be erased

Fig 4 :20 (substring): **"Only the actors, the currency and the anchor change."**
Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**
Fig 4 :31 (substring): **"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold"**

The global-to-local transform is lossy by construction. What the coarse model cannot hold at the decision slot is exactly the quantity the question is about. The world source *Downscaling* (Wikipedia, 2026) states: *"Global Climate Models (GCMs) used for climate studies and climate projections are typically run at spatial resolutions of the order of 150 to 200 km and are limited in their ability to resolve important sub-grid scale features such as convection clouds and topography. As a result, GCM based projections may not be robust for local impact studies."* That is the round trip failing at the decision scale, corroborated from the field itself.

Therefore a high-value observation is one that makes R_T measurable at the slot: a local reading against which the downscaled projection can be compared and found short. Instrumenting the boundary is not overhead; it is the answer to part of the question.

**Refuter:** measure a zero round-trip gap between the coarse projection and the local outcome at the slots in question, with a declared metric and an independent local reading. Then no boundary observation is owed.

### F5 - An instrument is extended from an edge that already returns something

Fig 6 :26 (substring): **"instruments extend what can be represented at all"**
Fig 6 :32: **"An instrument is not built from a description. It is improved from a worse instrument already returning something."**
Fig 6 :34 (substring): **"The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."**

This is INWARD in Formula step 7: extend perception from one already returning something, sharpen in our own terms. It gives a priority rule that is the opposite of "buy the most novel sensor." Where nothing has ever registered, there is no edge to extend from; the search for a proto-instrument is a search for one that is already there (Fig 6 :34-35).

A genuinely new modality is a different operation: OUTWARD import. It needs a source frame whose closure predicts the shape of R, a source gate (provenance) and a shadow test (Fig 8 :9-13), and it is debited against independence (Fig 6 :24). Confusing the two is a strain, handled in section 7.

**Refuter:** exhibit an observation of a quantity that has never registered at any resolution, constructed from a description alone and later shown to reduce the slot residual. That breaks Fig 6 :32-34 and would require re-census.

### F6 - There is no standing list of valuable observations

Fig 11 :49: **"An actor’s valence is relative to the residual, not a property it carries."**
Fig 11 :51: **"No standing list of good actors survives a change of residual."**
Fig 11 :48: **"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."**

Apply "actor" to "observation channel." Whether a gauge, a satellite product, a survey, or a historical record is valuable depends on which residual it is ranged against. The same rainfall product is a benefactor to a flood-forecast residual and nearly silent to a groundwater-zoning residual. So the question's implied single answer is structurally refused. The right form is a per-slot-class verdict plus an enumeration rule.

Fig 11 :43: **"The habitat is enumerated, never composed."** Enumerate everything in contact with the decision residual, then what contacts those, outward until the cascade stops mattering.

**Refuter:** produce an observation that reduces R⁺_s on every decision slot class with equal force and survives a change of residual. Then a standing list is possible and this finding falls.

### F7 - The observation that matters can be several causal steps out

Fig 11 :52 (substring): **"Scoping the habitat to direct contact is how DDT reached the eagles"**
Fig 11 :53 (substring): **"first-order enumeration, second-order effect, and the residual that mattered was three"**

The field's own ecology literature corroborates the mechanism shape from a different evidence pool: *Trophic cascade* (Wikipedia, 2026) defines *"powerful indirect interactions that can control entire ecosystems, occurring when a trophic level in a food web is suppressed"*, and gives the cross-boundary subsidy case where oil-palm food subsidies raised wild-boar numbers and caused *"a 62% decline in forest tree sapling density over a 24-year study period."* A decision about forest regeneration that monitors only trees and rainfall misses the driver three steps out.

So the habitat census for a land-use decision must include conditions and relations beyond the variables in the model, and the enumeration must cascade outward until adding another step stops changing the residual.

**Refuter:** show a decision residual whose habitat closes at first-order contact, with a measured demonstration that second- and third-order actors do not move it. Then the cascade requirement is unnecessary for that class.

### F8 - The channel decays even though the ground does not

Fig 10 :24: **"the ground does not decay, the channel does"**
Fig 10 :25-26 (substring): **"stale percepts, dropped transients, saturated metrics, pooled readings"**
Fig 10 :28 (substring): **"the output is not a verdict, it is you have lost touch"**

Part of "which observations most improve forecasts" is not a new instrument at all. It is keeping the existing channel reachable: gauge density, metadata, calibration continuity, archive survival, and resistance to pooling. A saturated metric or a pooled regional average reports contact that is no longer there. The world source *Data assimilation* (Wikipedia, 2026) confirms the practical form: *"Real world measurements contain errors both due to the quality of the instrument and how accurately the position of the measurement is known"*, and *"Dealing with biased data is a serious challenge in data assimilation."*

Fig 10 :52: **"Bring a characterised residual, never the source."** In outreach terms, the first contact should characterise the decision-scale residual, not hand over the entire observing-system theory.

**Refuter:** demonstrate a channel that can decay without any loss of contact with its ground, measured against an independent reading. Then channel maintenance drops out of the top set.

### F9 - Agreement among forecast frames cannot substitute for an observation

Fig 7 :13: **"agreement compounds, evidence does not"**
Fig 7 :35: **"A room’s agreement is variation, not a verdict. Selection between rooms is where the ground votes."**
Fig 8 :32: **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."**

Adding another model, another ensemble member, or another review of the same reanalysis is more search at the same reach. It can improve the average and leave the live slot residual untouched. This is why "more modelling" is a filter for the budget, never a witness for the verdict (Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**).

The human-cognition source *Anchoring effect* (Wikipedia, 2026) supplies a low-overlap corroboration of the social failure: *"The anchoring effect is a psychological phenomenon in which an individual's judgments or decisions are influenced by a reference point or 'anchor' which can be completely irrelevant"*, and *"while some groups are able to perform better than an individual member, they are found to be just as biased or even more biased relative to their individual counterparts."* A room of planners who share the same headline forecast can drift together without noticing.

**Refuter:** show an ensemble whose agreement improves prediction at a slot without any new observation entering the chain and without sharing an evidence pool with the thing it predicts. Then agreement can be a witness here.

### F10 - The literal ranked list is a `gap`, not a silence

Fig 9 :32: **"you get a kind of thing, never the answer itself"**
Fig 13 :134: **"Unreachable is a verdict here, not a silence,"**
Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**

After a genuine census, no figure line selects a sensor, a network, a variable, a cadence, or a percentage of budget. The canonical figures README says the framework returns *"what a missing thing would have to look like (a shape, not a name)"* and stops at the limit of what the instruments can distinguish. So the honest report is the separator of F1 to F9 plus the declaration that the naming is owed to a ground reading, not derivable here. This is `unreached` rather than `unreachable in principle`: decision-scale observing systems exist and are studied, so the missing thing is an instrument and a measurement, not a new kind.

**Refuter:** exhibit a figure line that, under a re-census that does not strain it, names a specific observation as decision-scale-optimal across slot classes. Then the `gap` is closed and this finding is retracted.

---

## 4. Pre-registered refuter

Written before the conclusion, per the seat-map rule that *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following holds:

1. A single observation is shown to reduce forecast error on all decision slots with equal force and to keep working after the residual changes (breaks Fig 11 :49, :51).
2. The decision-scale residual is captured by a global skill average with no loss of live local slots (breaks Fig 1 :19, :22).
3. An observation is shown to improve forecasts while drawing on the same evidence pool as the model producing the forecast, with no independent reading at the slot (breaks Fig 2 :31, :35, :40).
4. The round-trip gap between the coarse projection and the local outcome is measured to be zero at the relevant slots (breaks Fig 4 :30-31).
5. An observation of a quantity that has never registered at any resolution is constructed from a description alone and later shown to reduce the slot residual (breaks Fig 6 :32-34).
6. An observation is shown to be decision-scale-improving while the channel that reads it has decayed and no ground contact remains (breaks Fig 10 :24).
7. A figure line is found that, without strain, names the specific observation that wins (closes the F10 `gap`).

If any fires, the corresponding finding is withdrawn and the census is re-run. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. **Reframe the deliverable.** Stop asking for a list of observations. Ask which conditions an observation must satisfy to bear on a decision-scale residual, and deliver the four-condition separator plus the enumeration rule (F1, F3, F4, F5, F6).
2. **Report per slot class.** Keep verdicts separate for flood-siting, water-allocation, land-use zoning, and coastal-protection residuals. Never average them into a universal ranking (F1, F6).
3. **Lead with the refuter and the shape claim.** Fig 10 :52: *"Bring a characterised residual, never the source."* Fig 4 :22: *"Only methods cross up. Only head starts come down."* Send the generator, not a recording of one successful observing campaign.
4. **Price in two currencies.** Report information gain and action cost separately, and keep every cut ranked and reversible (F2, Fig 9 :41: *"so keep every cut ranked and reversible"*).
5. **Enumerate the habitat outward.** Include second- and third-order actors before declaring the observation set complete (F7).
6. **Treat channel maintenance as an answer.** Gauge continuity and metadata are not overhead; a decayed channel is "you have lost touch" (F8).
7. **Declare the `gap`.** Name no winner. Say what instrument would settle the name (F10).

---

## 6. Canonical usage check and retraction / confirmation log

Two sources were read after the first five sections and govern how the figures may be used: the canonical `FIGURES_README_canonical.md` (local copy) and the four framework essays opened this session.

- Canonical README: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* And the limit: *"what a missing thing would have to look like (a shape, not a name)"*, then *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."*
- *The Hard Problem is About Source* (opened 2026-11-22): *"If several paths create the same behavior, then behavior is a projection with lossy information"* and *"The answer is unreached until a better instrument exists."* This governs the `gap` in F10: what is owed is a discriminator, not another argument.
- *Decoding Tacit Knowledge* (opened 2026-11-22): *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."* This governs the outreach ordering in `02`.
- *The Library of Babel* (opened 2026-11-22): *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* This governs the shape-not-a-name framing.
- *The Recursive Self-Improvement Trap* (opened 2026-11-22): *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* This governs the refusal to rank contact points by receptiveness.

| earlier reading | status after the canonical check |
|---|---|
| F1 called "decisive for the framing" | **Confirmed, narrowed.** It governs the framing of the question, not the existence of useful global products. Global products remain filters for budget. |
| "Global skill is useless" (draft phrasing) | **Retracted and preserved.** Global skill is efficient for a convention and for budget allocation; it is disqualifying only as a witness for a per-slot verdict. |
| F4 "scale mismatch is a defect" | **Retracted and preserved.** Fig 4 :31 says the gap is a measurement, not an error to eliminate. The finding is now the measurement claim. |
| F5 "no new sensors, only sharpening" | **Retracted and preserved.** INWARD and OUTWARD are opposed instruments (Fig 6 :31). New modalities are imports with a source gate, not forbidden. |
| F6 "no observation is valuable" | **Retracted and preserved.** Valence is relative to the residual; the claim is the refusal of a standing list, not the refusal of value. |
| F10 "unreachable" | **Narrowed.** It is unreached at this budget, not unreachable in principle (Fig 8 :40-43). Decision-scale observing systems exist and are studied. |
| "shape, not a name" applied to observation channels | **Corrected.** The README's phrase governs a missing primitive. Observation channels are bindings from the observation frame, provenanced as such; a binding is a candidate, not an invented primitive. See `05` section 6. |
| F7 DDT/eagles used as a literal earth-system example | **Kept as a mechanism analogue.** The figure's case is ecological; the world source on trophic cascades corroborates the mechanism shape, not any specific infrastructure decision. |
| Apparent Fig 6 versus Fig 8 conflict on new instruments | **Not strained.** Fig 6 :29-31 governs INWARD versus OUTWARD as two instruments; Fig 8 governs where the imported atom comes from. Different quantities, re-censed in section 7. |

---

## 7. Strains, re-census, and what was carried forward

- **S1, Fig 6 proto-instrument rule versus the practical call for wholly new observation systems.** Re-census: Fig 6 :32-34 governs extension of an existing edge (INWARD); a genuinely new modality is OUTWARD import with provenance, shadow test and an independence debit. Both are licensed; neither is read against the other. Resolved, kept visible.
- **S2, Fig 11 "read the list off the world" versus the model's variable list.** Re-census: the habitat is the world's contact network, not the model's state vector. The observation that matters can be three steps out. This is a correction to the naive "add more of the variables already in the model" reading, not a contradiction. Resolved.
- **S3, "most improve" as one ranking versus per-slot residual.** Re-census: ⋛ is a threshold between two quantities (Fig 12 :87), applied per slot. A global ranking aggregates away the signal (Fig 1 :22). The single-list reading is retracted.
- **S4, the two currencies of observation value.** Live type question. Bits and actions do not add (Fig 12 :125-127); no common unit is supplied by the figures. Named, not smoothed.
- **S5, world source on ensemble spread versus Fig 2 independence.** Not strained. Ensemble spread measures within-frame uncertainty; Fig 2 governs verdict weight between frames. One is a budget filter, the other a witness rule.

**Carried forward.** The method, not the answer: state R per slot; admit only domains with nameable anchors; declare union before searching; describe the residual before choosing an observation frame; keep verdicts separate; price in two currencies; treat the missing instrument as a discriminator to be found, not a name to be invented.
