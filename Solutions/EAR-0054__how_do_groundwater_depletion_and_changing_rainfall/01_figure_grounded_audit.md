# Figure-grounded audit: groundwater depletion, changing rainfall, rivers and wetlands

**Mode of this document: `specified` on the structural verdicts, `general` on the shape, `gap` on basin numbers. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, 2026): "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post" but "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** The local `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FIGURES_README_canonical.md`, `THE_FORMULA.md`, the eight essays, and the public sources fetched 2026-11-22 in `10_source_ledger.csv`. All `Fig N :line` quotes below were checked as exact substrings of the figure text before writing.

---

## 0. The residual, in effect terms

Water agencies plan river yield and wetland hydroperiod against a historical hydrograph: a belief `b` that next season's low flow and inundation will resemble the past. Pumping and rainfall change act on the aquifer, the river and the wetland. The observed water delivered `o'` departs from the prediction `Γ(b,a)`. The residual is

```
R_s,season = | Gamma(b, a) - o'_s,season |
```

and it is indexed **per river reach, per wetland and per season**, never aggregated into a basin mean or a national total. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." Fig 1 :13: "a global R near zero with one live slot residual is a legal state."

Season is part of the slot definition, not a nuisance parameter. The low-flow season is where groundwater's share of river flow is largest and where wetland hydroperiod is set. de Graaf et al. 2024 (opened) state that "the relative contribution of groundwater to streamflow, and the dependency of healthy ecosystems on groundwater is largest during times of low rainfall and low flows." An annual mean would hide the exact window in which the residual matters.

What would count as an answer. A shape with four parts: (1) whether the two pressures are one problem or a union with a distinct intersection; (2) the dependency order in which the effects arrive; (3) which quantity is the threshold that flips the ecological outcome; (4) the name of the instrument that would settle the sign and size for a given reach or wetland. Bound as an ordinary term for the rest of this audit: "interaction" = the intersection of two conditions in a union, with the properties Fig 9 :57 gives it, not a correlation between two continuous trends.

---

## 1. Domain census before any figure line

`R` by arity, symmetry and scale:

- **Arity:** at least two conditions bind (pumping and rainfall change), plus the mediating condition of hydraulic connection, plus the receiving condition of ecosystem dependence. This is a **union**, not a list of independent causes (Fig 9 :54, :55).
- **Symmetry:** not symmetric. Order and timing matter. Capture precedes storage loss (de Graaf et al. 2024: "suggesting increased capture happens before groundwater depletion is experienced"); environmental flow limits are reached "before substantial losses in groundwater storage are experienced" (de Graaf et al. 2019); the river's baseflow is a lagging response, not an instantaneous one. A pump near a connected reach can act in days; one tens of miles away can act over decades (Barlow and Leake 2012, USGS Circular 1376, opened).
- **Scale:** reach and wetland, seasonal to decadal, across the scale membrane. Global and national aggregates are lossy projections of these slots (Fig 4 :27).

One line per candidate domain: actors, currency, anchor. A domain with no nameable anchor is not a domain yet.

| domain | actors | currency | anchor | genuine? | partition / union |
|---|---|---|---|---|---|
| A. Groundwater-surface water physics | wells, aquifers, gaining and losing streams, recharge, evapotranspiration | water flux and hydraulic head | stream gauges, observation wells, pumped volumes, the capture relation | yes | union of capture, storage loss and reduced evapotranspiration |
| B. Rainfall and recharge | rainfall amount, intensity, timing, season, snowmelt, evapotranspiration | recharge flux | rain gauges, recharge estimates, lysimeters, isotope studies | yes | union of amount, timing, intensity and land cover |
| C. River and wetland ecology | groundwater-dependent wetlands, riparian vegetation, aquatic communities | hydroperiod, inundation, environmental flow | measured inundation, flow thresholds, vegetation plots | yes | union of groundwater dependence, flood pulse and water quality |
| D. Verification and outreach | expert readers, data archives, instruments | agreement and residual | the ground, never agreement | yes, but independence zero here | not a physical union; a checking arrangement |

Dependency order (Fig 3 :20: "The chain is ordered by dependency, not by importance."): hydraulic connection must exist before capture can occur; capture precedes storage depletion; storage depletion and head decline precede the ecological threshold. Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." A rainfall-only intervention cannot rescue a reach whose connection link is already broken.

No figure line was chosen before this census. The census was written first; the figure lines below were selected to test it.

---

## 2. Figure census, quoted verbatim before concluding

| figure | bearing on this census | verdict it gives |
|---|---|---|
| Fig 1 The Agent | residual per slot, ground is the only metric | per reach, per wetland, per season; no aggregate verdict |
| Fig 2 The Ground | anchor does not update; agreement across a shared pool disqualifies | measured flow and inundation are anchors; reviewer agreement is not |
| Fig 3 Dependency Chain | ordered links; a reading below the break reads nothing | connection before capture before depletion before ecology |
| Fig 4 The Membrane | lossy cross-scale transform, measure `R_T` | basin mean is not the reach; round trip must be measured |
| Fig 5 Mint Pipeline | support, reachability, novelty, settlement | no new primitive needed; the world supplies numbers |
| Fig 6 Closure / Reachability | import is the only operator that moves the wall; instruments improved from worse instruments | recession coefficient and threshold depth are imports, not figure derivations |
| Fig 7 Room Chain | agreement compounds, evidence does not | more agreeing reviews cannot settle a basin |
| Fig 8 Union Surplus | a search that finds nothing is not a proof of absence | gap verdict is legitimate after SEARCHED first |
| Fig 9 Leave / Arrive | union unbundling, describe before looking, filters versus witnesses | the question is a union; the global trend is a filter, not a verdict |
| Fig 10 Ground Maintainer | ground does not decay, channel does; bring the residual, never the source | stale gauges and pooled readings are live failure modes |
| Fig 11 The Habitat | enumerate the field of contact, cascades, relative valence, asymmetric intervention | manage by introduction, never subtraction; permanent work |
| Fig 12 The Bond | sequence, threshold, two currencies, level-relative irreducibility | order is a bond, adequacy is a comparison, cost has two units |
| Fig 13 Minimum Viable Set | gradient plus state composes a flow; gradient over space differs from gradient over time | river response is a flow over a stored state; a missing number is a shape, not a silence |
| Operators and Symbols tables | `→` sequence, `⋛` comparison, `R` per slot | read the bonds, not just the ingredients |

---

## 3. Findings F1 to F8

### F1. The question is a union compound, and a single lever will not clear it (decisive for the structure)

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

Pumping and rainfall change are not two ends of one axis. In a connected aquifer, pumping captures water that would have discharged to the stream, then reverses the gradient, then disconnects the stream; rainfall change alters the recharge that replenishes the same store and the timing of the flood pulse a wetland needs. A basin with low rainfall but no pumping, a basin with heavy pumping but stable recharge, and a basin with both are three different objects, not three points on one scale. de Graaf et al. 2024 (opened) found the fractions differ by condition: about 20% of globally pumped groundwater came from increased river capture and 16% from storage, but "the impact on streamflow is more widespread and linked to smaller pumping rates, contrasting with impacts on storage associated with higher pumping rates." The NSF PAR study of 152 Florida wetlands (read via public excerpt, full PDF fetch failed) reported that "low rainfall, combined with wetland water storage losses, created persistent drought conditions exacerbated by management decision-making that included over-extraction of groundwater," and that when extraction fell, "precipitation inputs mattered less for wetland inundation as surface water storage was likely sustained through a mix of precipitation and groundwater discharge." That is an intersection, not an average.

**Refuter:** show that one lever (only pumping reduction, or only recharge augmentation) restores both low flows and hydroperiod across the intersection cases, or show the two conditions are separable (a partition) rather than overlapping.

**Status:** `triangulated` across Fig 9 (union rule) and the two world sources above (different study systems, one global model and one 14-year wetland field comparison). Low overlap: the figure is a structural rule, the field study is an empirical intersection.

### F2. The residual is per slot, and the sign can flip between slots

Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :13: "a global R near zero with one live slot residual is a legal state."
Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries."

A national mean of low-flow change is not evidence about a reach. de Graaf et al. 2024 (opened) report substantial decreases (from about minus 30% to more than minus 50%) in the Indus basin, the Middle East, southern Europe, Mexico and California's Central Valley, while "certain regions are estimated to have notable increases of 30% to more than 50% in river low flows, including parts of the lower Ganges basin and the North China Plain." The same physical act, pumping, changes sign for different slots because what matters is the slot's connection and dependence, not the pump.

**Refuter:** exhibit a reach and a wetland where a sustained, connected pumping change produces no measurable low-flow or hydroperiod change, with the instrument's detection limit stated; or show an aggregation that preserves the live slot.

**Status:** `triangulated` (Fig 1 bookkeeping plus Fig 11 relative valence), corroborated in kind by the global model. The model is one evidence pool for the numbers; it is not a second witness for the figure rule.

### F3. There is a dependency order, and capture comes before depletion

Fig 3 :20: "The chain is ordered by dependency, not by importance."
Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."
Fig 12 :72: "A then B; B needs A to have happened."

Barlow and Leake 2012 (USGS Circular 1376, opened) describe the sequence under pumping: the cone of depression develops, drawdown reduces the gradient towards the stream, groundwater discharge falls, the gradient can reverse, and the stream becomes losing. The de Graaf 2024 study (opened) reports that "increased capture happens before groundwater depletion is experienced," and the 2019 Nature paper (abstract opened) estimates environmental flow limits are reached in 42 to 79 per cent of pumping watersheds by 2050 and "generally occur before substantial losses in groundwater storage are experienced." Time to full capture depends on distance and aquifer properties: days for a well near a stream, decades or centuries for one far away (Barlow and Leake 2012). This is `→` sequence, a bond whose order is not recoverable from the ingredients (Fig 12 :72).

**Refuter:** a measured case where environmental flow limits are crossed only after substantial storage loss in the same connected system, or where pumping causes no capture before depletion.

**Status:** `triangulated` for the order (Fig 3 dependency plus Fig 12 sequence, different figures) and `single-source` on the specific "capture first" empirical claim, since the two de Graaf papers share an author, a model lineage and an evidence pool. Counted as one witness, not two.

### F4. The river response is a flow over a stored state, with a decaying memory

Fig 13 :76: "Energy and a gradient compose a flow. A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is."
Fig 13 :22: "a difference that can be spent."

A river fed by groundwater is a flow produced by a head difference (a gradient that can be spent) acting on stored water across space and time. The baseflow recession literature, opened this session (University of Calgary hydrology lecture, 2022 and 2023; HEC-HMS recession model, USACE), writes this as `dS/dt = -Q`, `Q = aS`, giving `Q(t) = Q0 exp(-a t)`, with a nonlinear generalisation `Q = a S^p` and a hysteretic storage-discharge function (Kirchner 2009, as quoted in the lecture: "Q = f(S) ← Complex function (non-linear, hysteretic)"). A pump is a competing withdrawal from the same store; changed rainfall is a changed input to it. The exponential is a *provenanced import* from hydraulic theory, not a figure derivation, and its coefficient `a` is a ground quantity, not a shape.

Strain, named: Fig 13 :76's "gradient" is a **substrate primitive** (a structure that can be spent), not the hydraulic gradient of Darcy's law. The mapping is a structural analogue with a source gate, not an identity. An earlier draft of this audit called them the same thing; that is retracted in section 6.

**Refuter:** show that the figure's gradient cannot be read as a spendable difference over a state, or that the recession response is instantaneous and memoryless in a connected reach.

**Status:** `single-source` on the figure side (Fig 13), with the mathematical form imported. The import is declared, not hidden, and carries a nonzero round trip gap (section 5 and `11_audit.md`).

### F5. The flip is a threshold, and adequacy is a comparison, not a stock

Fig 12 :87: "a threshold relation between two quantities."
Fig 11 :49 (again): valence is relative to the residual.

The ecological outcome does not scale smoothly with the head decline. de Graaf et al. 2019 (opened) found that "only a small decline in groundwater level is needed to affect streamflow," with the largest uncertainty "for streams near a transition to reversed groundwater discharge." The global groundwater-dependent wetland mapping (HESS 2025, opened by abstract) classifies a wetland GDE using a saturated-area fraction above 50% and a water table depth below 5 m, while noting groundwater levels of 0.5 to 3 m "support core wetland functions" and depths up to 5 m in arid regions. The Victoria climate assessment (opened) states that shallow wetlands relying on local flow systems are "at most risk" and may "become disconnected from the groundwater system" as levels fall. A connectivity threshold converts a continuous head change into a categorical ecological change.

**Refuter:** a measured wetland or reach whose ecological state changes smoothly and monotonically with head across the claimed transition, with no threshold.

**Status:** `triangulated` for threshold-as-comparison (Fig 12 :87 plus Fig 11 :49 apply the comparison to a different quantity), `gap` for the numeric threshold value. The 5 m figure is a world import with a provenance record, not a number the framework produced.

### F6. The habitat is enumerated, cascades several steps out, and management can add but not subtract

Fig 11 :43: "The habitat is enumerated, never composed."
Fig 11 :46: "conditions: light, water, temperature, season, terrain."
Fig 11 :52: "And contact cascades."
Fig 11 :61: "The seat's power is asymmetric. Introduction is available; exclusion is not."
Fig 11 :63: "Which is why a managed ecosystem is permanent work rather than a solved state."

The chain from pumping to social consequence is enumerated, not assumed: well field, cone of depression, reduced baseflow, stream temperature rise, loss of environmental flow, riparian vegetation shift, wetland disconnection, irrigation and crop choice, income. The 2022 JAWRA review (read via public excerpt, full fetch returned 403) notes streamflow depletion "can impact aquatic ecosystems through changes in the availability and temperature of surface water," and the Wisconsin analysis found impacts "on low flows during the baseflow period." The 2026 Frontiers review (opened) adds that intense rainfall often "boost[ed] runoff over recharge, leaving systems stressed post-rainfall," so adding water at the surface does not guarantee restoring the store. Managed aquifer recharge is an introduction, available; removing an existing groundwater dependence from a wetland is not a lever the manager has.

**Refuter:** an intervention that subtracts an unwanted groundwater dependence from a wetland without substituting a habitat, or a cascade that stops at the first physical step with no measurable second-order effect.

**Status:** `single-source` on the figure side for the asymmetry rule (Fig 11 alone), corroborated in kind by the management literature but not upgraded by it. `triangulated` for enumeration plus cascade (Fig 11 :43 and :52 are different rules with different tests).

### F7. The channel degrades while the ground does not; staleness is a live failure mode

Fig 10 :24: "the ground does not decay, the channel does."
Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."

Gauges are dropped, transients are lost, readings are pooled. Two consequences follow. First, the anchor is measured flow, head and inundation, not the agreement of model intercomparisons. Second, "streamflow depletion cannot be measured directly and is challenging to estimate because pumping impacts are masked by streamflow variability due to other factors" (Zipper et al. 2022, JAWRA, public excerpt). The 2024 global study puts the point in its own terms: large-scale assessments "often overlook the relationship between groundwater and surface water," which is why the two-way coupling has to be imported into them. *The Hard Problem is About Source* (opened): an instrument "is speaking only about what it measured, it cannot comment on the source." A low-flow reading does not by itself say pumping, rainfall or both.

**Refuter:** a case where reviewer agreement alone, without a new measurement, correctly changes the sign and magnitude for a named reach.

**Status:** `triangulated` (Fig 10 channel rule plus Fig 2 anchor rule, low overlap), with the source-discrimination point corroborated by an essay, which shares the framework author and carries little independent weight.

### F8. The numeric answer is a declared gap, reached by SEARCHED, then INWARD, then OUTWARD

Fig 8 :39: "So a search that finds nothing is never a proof of absence."
Fig 9 :32: "you get a kind of thing, never the answer itself."
Fig 13 :134: "Unreachable is a verdict here, not a silence,"

No figure line predicts the sign or size of low-flow change for a named reach under a named rainfall scenario. The instruments exist: stream gauges, observation wells, GRACE storage anomalies, wetland inundation maps, coupled groundwater-surface water models. The missing thing is a cross-scale convention that separates pumping capture from rainfall-driven recharge change in a single observed hydrograph, and a long enough record in the data-scarce regions the Frontiers review identifies. That is the `unreached at this budget` kind of gap, not `underivable in principle`: the term is already in the closure of hydrology, it was not found here. Formula step 7 asks SEARCHED first (the closure does not change; more of the space is visited), then INWARD (sharpen the instrument, from one already returning something, e.g. recession analysis paired with head records), then OUTWARD (find the frame whose closure predicts the shape, e.g. the coupled global groundwater-surface water model). Importing a number against a budget limit would add an atom that was not needed.

**Refuter:** a figure line that directly predicts a basin number, or a demonstration that no instrument at any resolution could separate the contributions.

**Status:** `gap`, plainly reported. "Unreachable is a verdict, not a silence."

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach. The shape claim is refused if any of the following holds:

1. A single lever (pumping reduction alone or recharge augmentation alone) restores both low flows and wetland hydroperiod in the intersection cases (breaks F1).
2. An aggregation across reaches and wetlands preserves the live slot and its sign (breaks F2).
3. A connected system crosses its environmental flow threshold only after substantial groundwater storage loss (breaks F3).
4. A reach or wetland shows a memoryless, instantaneous response with no recession signal (breaks F4).
5. A wetland's ecological state changes smoothly with head across the claimed connectivity transition, with no threshold (breaks F5).
6. A named reach under sustained connected pumping shows no measurable low-flow change with a stated detection limit (breaks the empirical application).

If any fires, the relevant finding is withdrawn and the retraction log below is updated. Until one is run, nothing here is `grounded`.

---

## 5. Recommendation

1. Lead with the union and the dependency order, not with a global trend (F1, F3).
2. State the mode on every substantive sentence (F4 on the import, F8 on the gap).
3. Quote the residual per reach, per wetland, per season; never report a national mean as the verdict (F2).
4. Put the threshold test in front of the number: head decline relative to the connectivity transition, not head decline alone (F5).
5. Use public institutional contact points and ask for a refutation, not belief (F7).
6. Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion." Send the generator, the shape and the refuter, not a recording of this derivation.

---

## 6. Canonical usage check and retraction / confirmation log

Read after the first five sections: `FIGURES_README_canonical.md` and `THE_FORMULA.md`. Key sentence from the README: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." And: a reading that makes figures contradict one another "has misidentified its domain, not found a flaw."

| earlier reading | status after the check |
|---|---|
| "Hydraulic gradient = the figure's Gradient primitive" (draft of F4) | **Retracted as an identity.** Re-census: Fig 13 :76 governs the substrate primitive, a spendable difference; the Darcy gradient is a world quantity. Structural analogue retained, marked as a provenanced import with `R_T > 0`. |
| "The 5 m wetland depth is a figure-derived threshold" (draft of F5) | **Retracted.** It is a world import from the HESS 2025 mapping with a declared use condition. The figure supplies only the comparison bond, not the operand value. |
| Rainfall treated as a single condition in an early draft | **Narrowed.** Fig 11 :46 lists "conditions: light, water, temperature, season, terrain." Rainfall is part of water and season; warming and evapotranspiration enter through temperature. The census now names all four explicitly. |
| "Shape, not a name forbids giving a threshold depth" | **Narrowed, consistent with `05` section 6.** The rule governs a primitive missing from Γ. Naming a measured threshold is a binding from a world frame, provenanced as such, not the invention of a seventh primitive. |
| F1 union compound | **Canonically confirmed.** Figures README: the set is closed, the arrangements are not; Fig 9 :54-57 gives the unbundling rule directly. |
| F8 gap verdict | **Canonically confirmed.** Fig 8 :39 and Fig 13 :134; the README: the framework returns "a shape, not a name" and stops at the limit of the instruments, recording the lineage. |
| Apparent strain Fig 13 :76 versus hydraulic recession | **Not strained after re-census.** Different objects: substrate structure versus a world flow law. The analogue is a borrowed form, not a figure claim. |

### Round trip note

Condensing the figure set into "it is a union with an order and a threshold" and then applying it to a named basin loses at least three constraints: the per-slot indexing of `R`, the separation of capture from storage depletion, and the requirement that the threshold be measured rather than assumed. Fig 4 :30 forbids treating that condensation as identity. `11_audit.md` enumerates the gap as `R_T`.

---

## 7. Verdict of this audit

The shape survives; the numbers do not come from the figures. There is a union of overlapping conditions, indexed per reach and per wetland and per season, with a dependency order of connection, capture, storage depletion and ecological threshold. The river response carries a decaying memory; adequacy is a comparison at a threshold; management can introduce but cannot subtract; and the ground is measured flow, head and inundation, never agreement. No figure line gives a basin-specific sign or size, and that is recorded as `gap`, not filled with an imported number. Verdicts were kept separate per domain and never averaged. Strains after re-census: one live, the gradient analogue in F4, named and priced; none hidden.

**Next:** `09_watson_answer.md` performs the canonical world check against these findings and must not promote them to `grounded`.
