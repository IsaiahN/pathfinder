# Figure-grounded audit: EAR-0086, early warning and local knowledge under uncertainty

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured in a place for the claim to be settled there. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** This is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No outcome data, no harm counts, no forecast verification and no community interview were gathered for this run. See `05_what_shape_means.md` section 6.

**Sources.** Local framework files only for figure authority: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`, `FRAMEWORK/figures/THE_FORMULA.md`. World sources listed in `10_source_ledger.csv`, each opened 2026-11-22. Every figure quote below is copied from the verbatim extract, not from a summary.

---

## 0. The residual, stated in effect terms

Harm `H` from a climate hazard is an outcome at the ground: deaths, injuries, lost livelihoods, damaged assets. A forecast `F` is a prediction of the hazard produced by a frame. Forecast uncertainty `U` is a property of that frame's representation and channel, not of the outcome. The question asks whether an early warning system (an instrument that produces and transmits `F`) together with local knowledge (a second frame held by people in continuous contact with the place) can change the action `a` so that `H` falls while `U` stays high.

In the loop's notation: `R_s = |Γ(b,a) − o′|` per slot `s`. The slot is a community, a hazard and an exposure unit. The observation `o′` is the harm that actually occurs. The prediction `Γ(b,a)` is what the warning system expected. A forecast that stays uncertain leaves a large `Γ` spread; it does not remove `o′`. So the residual does not disappear when the forecast is uncertain. It is precisely the gap the question asks about.

**Bound sought-for shape (written before the run, per Formula "Direction"):** a per-slot harm reduction that is observable while forecast uncertainty remains high, together with a stated counterfactual in which the same reduction fails when one of the two frames or the decision link is removed. If no such shape can be stated, the correct answer is `gap`.

**Question type.** A union, not a partition. "Can EWS and local knowledge reduce harm even when forecasts remain uncertain?" bundles at least four overlapping conditions: forecast skill, reach and dissemination, local interpretability (having terms for what the warning affords), and the capacity and authority to act. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." Better forecasting clears the region where forecast skill alone binds and leaves the intersections standing.

---

## 1. Domain census

R by arity, symmetry and scale, then one line per domain with actors, currency and anchor. No nameable anchor means it is not yet a domain.

- **R (arity / symmetry / scale).** Arity: many slots, one per exposed community and hazard pairing. Symmetry: asymmetric, because a missed warning and a false alarm have different and unevenly distributed costs. Scale: local. A global forecast error near zero is compatible with one live local slot. Fig 1 :13: "a global R near zero with one live slot residual is a legal state". Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
- **Domain A, the forecasting frame.** Actors: meteorological services, models, forecasters, warning messages. Currency: probability, skill, lead time, reach. Anchor: the hazard as it actually unfolds, which the forecast does not control. This is a frame, not the ground. Question type: what the frame can represent. Forecast uncertainty lives here.
- **Domain B, the local-knowledge frame and the habitat.** Actors: community members, knowledge holders, local institutions, terrain, livestock, flora, fauna, communications channels, infrastructure. Currency: contact with the residual, affordances, local cues already returning a reading. Anchor: actual harm outcomes and the observed survival of the lineage. Question type: a habitat of contact, enumerated, never composed (Fig 11 :43). Local knowledge is not one frame; it is many actors and institutions.
- **Domain C, the decision and checking chain.** Actors: the two frames, communicators, decision-makers, outcome feedback. Currency: per-slot residual, agreement or disagreement between frames, actions taken. Anchor: harm at the ground, never agreement. Question type: triangulation between low-overlap frames, ordered by dependency.

**Partition or union:** union. Domains A, B and C overlap at the point where a warning is translated into a local decision. That overlap is a compound with its own loop, so it is kept as Domain C rather than folded into either A or B.

**Order by dependency (Fig 3):** perception (hazard detection plus local cues) gives vocabulary and objective (what this situation affords, what counts as a safer outcome) gives planning (trigger, route, action) gives learn and carry (outcome feedback, verify, carry to the next event). Effort spent above a break arrives at a step that cannot use it. Fig 3 :20: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."

Strain test applied before choosing any figure line: Fig 11 :40 says an agent-only improvement that does not change contact changes nothing. Read literally, that would forbid better forecasting from ever helping. Re-census: Fig 11 governs capability as a property of agent and habitat; a forecast is an agent-internal instrument. The line governs Domain B, not Domain A. No strain after re-census.

---

## 2. Findings, one loop per domain

### F1 (Domain A) Uncertainty is a channel state, not a ground state. `triangulated`

Fig 10 :24: "the ground does not decay, the channel does"

Fig 2 :29-30: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."

Fig 2 :37: "Human judgment is the right anchor for is this a good answer for a person, because the question is about people."

Harm to people is the right anchor for a question about harm to people. The forecast is an instrument: "It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure" (Fig 2 :37-38). Uncertainty is a broadening of the instrument's channel, not a change in the thing being measured. So the clause "even when forecasts remain uncertain" does not by itself entail "cannot reduce harm". It locates the uncertainty in the wrong object.

Triangulation: Fig 10 (channel decay) and Fig 1 (per-slot indexing) plus Fig 2 (anchor definition) are three low-overlap routes. Fig 10 is about instrument state, Fig 1 about residual indexing, Fig 2 about what may count as a settle. Their agreement is not one pool restating itself.

**Refuter for F1.** A case where the measured harm outcome moves when the forecast frame is pushed, so that the outcome depends on what the frame thinks rather than settling it. That would break the anchor definition and F1 falls.

### F2 (Domain C) A warning that stops at prediction produces no harm reduction. `single-source` on the figure, corroborated by two world sources that overlap with each other

Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."

Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

Fig 3 :29-30: "Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."

Fig 3 :25-26 names the usually broken middle link: "The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments." That is the link where local knowledge does its work: it supplies terms for what the situation affords and what would count as getting somewhere.

World corroboration, low overlap with the figures but high overlap with each other (both are the institutional DRR literature, so one witness not two): UNDRR's definition says a warning system must enable "individuals, communities, governments, businesses and others to take timely action to reduce disaster risks in advance of hazardous events" and that "Failure in one component or a lack of coordination across them could lead to the failure of the whole system." Hermans et al. (2022) say "All these four components have to work together seamlessly (end to end) and in a people-centred way to make an EWS effective."

**Refuter for F2.** A documented case where harm measurably fell while the chain stopped at perception, with no planning or action link. That would break the dependency order and F2 falls.

### F3 (Domain B) Local knowledge is a proto-instrument already returning a reading, and capability lives in the habitat. `triangulated`

Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something."

Fig 6 :34-35: "The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve. Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."

Fig 11 :39: "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."

Fig 11 :40: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."

Fig 11 :43-44: "The habitat is enumerated, never composed. List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."

Local knowledge is a set of readings already returned by flora, fauna, wind, celestial bodies and local institutions, refined by outcome feedback across generations. Balehegn et al. (2019) document exactly this among Afar pastoralists: observations of livestock, insects, birds, trees and wildlife, collected and refined through the *Edo*, *Dagu* and *Adda* institutions, with "a dynamic process where information collected from different sources, including weather information from the modern weather forecasting system, is triangulated to make the safest livelihood decisions." They also report that people "do not take the information directly and have to make a lot of comparisons with local conditions and local bio-physical observations."

So an early warning system dropped into a place without enumerating that habitat is an agent-only improvement. It may raise skill and leave contact unchanged. Hermans et al. (2022) observes the matching failure in the other direction: "often forecasts are relevant only at a too aggregated spatial scale and are consequently not local enough for communities to be of value."

Triangulation: Fig 6 (proto-instrument) and Fig 11 (capability and habitat enumeration) are independent figure routes; the Balehegn and Hermans papers are different fields and methods from each other and from the figures. Fig 6 is about instruments, Fig 11 about capability, so low overlap.

**Refuter for F3.** A controlled case where an early warning intervention improves per-slot harm with no change in contact, no use of local cues and no habitat enumeration, and where the improvement persists after the intervention is removed. That would break Fig 11 :40 and F3 falls.

### F4 (Domain C) Two frames reduce harm only if they are independent enough to triangulate. `triangulated`

Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are."

Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"

Fig 8 :45: "Two frames together reach what neither reaches alone."

Fig 8 :48-49: "How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus. Two frames that overlap almost completely are one frame wearing two names."

Fig 8 :51-52: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."

If local knowledge is merely the official forecast restated in local vocabulary, the two frames draw on one evidence pool and their agreement is the pool talking. If the local reading and the scientific forecast arrive at the same conclusion by separate routes, that is corroboration at maximum independence (Fig 8 :50), and the surplus is real. The record of provenance is what separates the two cases. Balehegn et al. (2019) describe the independent route: the *Adda* elders "triangulate information from different sources and formulate the most probable weather scenarios" and "no prediction is taken for granted, and uncertainty is identified and declared." Hermans et al. (2022) list "methods that focus on 'triangulation' (people)" among the most popular integration approaches.

**Refuter for F4.** A case where harm reduction is fully explained by two channels drawing on the same evidence pool, with no independent local observation contributing, yet the programme is credited to local knowledge. That would break the low-overlap requirement and F4 falls.

### F5 (Domain C) The probability threshold is a filter for the budget, not a verdict about whether to act. `triangulated`

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

Fig 1 :13 again: "a global R near zero with one live slot residual is a legal state"

A forecast probability threshold decides where scarce resources are tried first. It does not decide whether a particular community is safe. IPCC AR6 WGII (2022) reports that "Between 2010–2020, human mortality from floods, droughts and storms was 15 times higher in highly vulnerable regions, compared to regions with very low vulnerability (high confidence)." The same hazard reading lands on very different harm depending on the slot, which is the per-slot claim in Fig 1. Katz and Murphy (1997/2009) state that "theoretical relationships between the scientific quality and economic value of imperfect weather forecasts are considered" and that the work concerns "the shape of the 'quality/value curve.'" Quality and value are different quantities; a nonlinear curve means an uncertain forecast can still change a decision, and a skill improvement can fail to change harm.

Triangulation: Fig 9 (filter versus verdict), Fig 1 (per-slot residual) and the economics source (quality versus value) are three low-overlap routes.

**Refuter for F5.** A decision rule in which raising the warning threshold strictly increases harm in every slot, with no slot where the reverse holds, so that no filter/verdict distinction can be maintained. That would break F5.

### F6 (Domain C) Repeated non-actionable warnings decay the channel. `triangulated` for the mechanism, `single-source` for the transfer to community warnings

Fig 10 :25-28: "stale percepts, dropped transients, saturated metrics, pooled readings" and "the output is not a verdict, it is you have lost touch → keep the anchor reachable"

Michels et al. (2025), a clinical human-factors scoping review in a completely different field, define alarm fatigue as a phenomenon where "repeated exposure to frequent or non-actionable alarms leads to sensory overload, emotional strain, and a gradual desensitization or reduced responsiveness to alarms among healthcare professionals." They note that "A high frequency of false alarms creates distrust in the alarm system, leading to a gradual wearing down" of confidence and eventually to disregard of the alarm. The mechanism is the same shape as Fig 10's decayed channel: the ground has not moved, the receiver has stopped ranging against it.

The transfer from clinical telemetry to community flood or drought warnings is an extrapolation, not a figure line. Marked `single-source` for that step. The figure governs channel state generally, so the extrapolation is licensed as a `specified` prediction, not a measurement.

**Refuter for F6.** Outcome data showing that repeated non-actionable warnings leave subsequent response times and harm unchanged in the recipient population. That would break the transferred prediction at the ground.

### F7 (all domains, at the figure level) The empirical verdict is a `gap`, not a silence

The figures give the shape of a warning system that can reduce harm under uncertainty: per-slot residuals, an anchor that does not move with frames, two independent frames, a complete action chain, a reachable outcome channel. They do not report harm in any place. Fig 2 :29-30 says the anchor is a counter or a patient outcome; no counter was read here. Fig 9 :42: "→ narrowing gets you close, the ground decides". Fig 8 :39: "So a search that finds nothing is never a proof of absence."

So the honest answer to the literal question is: **yes in shape, conditionally, and unmeasured here.** A `gap` is a verdict, not a failure. "Unreachable is a verdict, not a silence" applies at the budget where no outcome study was run; what is owed is a ground reading in a named place and hazard, not a further argument.

**Refuter for F7.** A registered outcome study in a named place that measures per-slot harm before and after an EWS plus local-knowledge intervention, with uncertainty held high, and reports no reduction. That would move F7 from `gap` to a negative `grounded` verdict for that place.

---

## 3. Pre-registered refuter

Required before any conclusion or outreach: "a falsifier written before the run is a design instrument, not only an honesty device." Written here before section 4.

The shape claim (conditional yes) is retracted if any of the following fires:

1. A controlled outcome study shows harm reductions fully explained by forecast-skill improvements alone, with no independent contribution from local knowledge or from the post-warning decision chain. This breaks F3 and F4.
2. A documented case shows harm falling while the dependency chain stops at perception, with no vocabulary, planning or action link. This breaks F2.
3. Every successful case is shown to have local knowledge drawing on exactly the same evidence pool as the official forecast, so the two frames are one frame wearing two names. This breaks F4.
4. The measured harm anchor is shown to move when the forecast frame is pushed, so outcomes are not independent of the prediction. This breaks F1.
5. Repeated non-actionable warnings are shown to leave response and harm unchanged in the recipient population, in a place where the warnings are non-actionable. This breaks the transferred part of F6.

If any fires, the affected finding is withdrawn and the overall verdict falls to `gap` until a new derivation is run. No finding is silently softened.

---

## 4. Recommendation

1. Evaluate early warning as an end-to-end chain, not as forecast skill. Ask which link the local system currently stops at and whether that was measured or assumed (Fig 3 :29-30).
2. Enumerate the habitat before importing technology. List actors, conditions and relations in contact with the harm residual, including local institutions and bio-physical indicators (Fig 11 :43-44).
3. Treat local knowledge as an independent proto-instrument already returning readings, and improve it from what is already there rather than specifying a new sensor from a description (Fig 6 :32-35).
4. Keep the two frames' provenance separate. A restatement is not a second witness; a convergent independent reading is (Fig 8 :51-52).
5. Report residuals per slot. Never let a regional average erase a live community slot (Fig 1 :22).
6. Use warning probability thresholds to allocate a budget, not to decide that no action is owed (Fig 9 :60).
7. Keep the outcome channel reachable: record what happened after each warning so the ground can correct the frame (Fig 10 :24-29).
8. State `specified` on every substantive claim. Do not call any part of this `grounded` until a counter is read.

---

## 5. Canonical usage check

Read after sections 0 to 4, per the standing instruction that usage rules govern how the figures may be cited.

`FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." It also says a reading that makes figures contradict each other has misidentified its domain, and that the framework says "what a missing thing would have to look like (a shape, not a name)" and then stops at the limit of the instruments and records the lineage. Indiscernibility is not identity.

`60_FIGURES_AS_METALAWS.md`: the figures are metalaws and decide design questions by themselves; the seat reads the ground and does not ask the anchor to decide what the figures already settle. This means the question "does local knowledge help?" is answered by a derivation from Fig 6 and Fig 11, not by asking an expert to rule on it. An expert is asked to check the shape, not to supply it.

### Retraction and confirmation log

| earlier reading | status after the canonical check |
|---|---|
| "An uncertain forecast cannot reduce harm" as a premise | **Retracted at the level of the question.** Fig 10 :24 makes uncertainty a channel state; Fig 2 :29-30 makes harm the anchor. The premise relocates uncertainty into the ground. |
| Fig 3 read as "early warning systems only reach perception" | **Retracted.** Fig 3 governs dependency order, not the ceiling of a technology. The correct claim is that effort above a break cannot rescue a lower one. |
| Fig 8 read as "two frames always produce a surplus" | **Corrected.** The surplus exists only where closures differ (Fig 8 :48-49) and where a residual has been described; otherwise "the union is mute" (Fig 8 :21). F4 now carries that condition. |
| "Local knowledge" treated as one frame | **Re-censused.** Fig 11 :43-44 requires enumeration of a habitat of actors, conditions and relations. Local knowledge is a field of readings and institutions, not a single witness. |
| F6 treated as figure-derived for community warnings | **Narrowed.** The channel-decay mechanism is figure-derived (Fig 10); the transfer from clinical alarm research to community warnings is a `specified` extrapolation from one world source, marked single-source for that step. |
| No empirical verdict | **Confirmed as `gap`.** The canonical rule returns a shape and a stop, not a name and not a measurement. "Unreachable is a verdict, not a silence." |
| F1, F3, F4, F5 triangulation | **Confirmed.** Each uses figure lines from different figures with different subject matter, plus world sources from different fields. Overlaps between the two DRR sources are declared rather than hidden. |

---

## 6. Strains recorded, not smoothed

1. **Fig 8 union surplus versus Fig 2 correlation warning.** Not strained after re-census: Fig 8 :48-49 is the low-overlap case and Fig 2 :40 is the high-overlap case. Same quantity read at two values.
2. **Fig 11 :40 versus forecast improvement.** Re-census: Fig 11 governs agent-and-habitat capability. A forecast is an agent-internal instrument, so the line does not govern Domain A. No strain after re-census.
3. **Fig 10 channel decay versus the clinical alarm-fatigue literature.** The mechanism transfers, the domain does not. The transfer is named as an extrapolation in F6. Strain accepted as a boundary, not hidden.
4. **Global aggregate versus per-slot reading.** Fig 1 :13 and :22 are explicit: a global near-zero residual with one live slot is a legal state. No strain; this is the figure's own position on averages.

**Verdict after re-census: conditional yes in shape; `gap` at the ground. Strains: one named extrapolation (F6), none unresolved inside the figures.**
