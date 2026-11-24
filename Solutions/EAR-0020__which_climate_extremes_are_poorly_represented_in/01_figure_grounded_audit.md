# Figure-grounded audit: which climate extremes are poorly represented in models because they are rare, local, or compound?

**Mode of this document: `general` on the structural shape, `specified` on the per-domain predictions.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* The named extremes are `grounded` only in the world sources cited in `10_source_ledger.csv`, not by this derivation.

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap* (read 2026-11-22): *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* From *Arrival of the Fittest: The Tether Architecture*, its own demo note: an LLM prompt with the figures *"you get a plausible simulated output to an issue in any given domain"* and the results *"could never be verified if the solutions presented were not contrived to fit the formula."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No climate measurement was taken here.

**Sources.** Local framework files: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`. World sources were fetched and read on 2026-11-22 and are listed with quotes in `10_source_ledger.csv`.

---

## 0. The residual stated in effect terms

A climate model is a frame Γ: a library of resolved dynamics, parameterisations, grid cells and indices. Its prediction Γ(b,a) is compared against an observation o′ drawn from the ground. The residual is

```
R_s = |Γ(b,a) − o′|   indexed by object slot s, never aggregated
```

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**

The question asks which slots carry a positive live residual R⁺_s that the model systematically misses, and groups the causes as rare, local, or compound. Stated as an effect: the model's prediction, after its own averaging and its own scale transform, leaves a positive residual concentrated in slots that are (a) rarely sampled or never registered, (b) sub-grid or local, and (c) at the intersection of two or more binding conditions. An answer would look like a **set with a shape**: a membership list whose three named causes are structural conditions, not three independent puzzles.

Two constraints bind the derivation before any figure is chosen:

1. The question is empirical, so the figures can govern the **shape** of the poorly-represented set but cannot, on their own, name its members. Fig 9 :32: *"you get a kind of thing, never the answer itself."* The membership list must be an OUTWARD import with provenance (formula step 7).
2. The three named causes may not be a partition. If they overlap, they are a union and must be unbundled before search. Fig 9 :54: *"When the split lands on a union rather than a partition, unbundle before you search again."*

---

## 1. Domain census (before choosing any figure line)

**R by arity, symmetry and scale.** Arity: three named causes, but compound events are themselves at least bivariate, so R has at least two conditions bound in one slot. Symmetry: not symmetric. A compound is an ordered/overlapping binding of conditions, not a commutative join of two equal operands (Fig 9 :57-58). Scale: from the sub-grid slot (local, tornadoes at less than 100 metres per IPCC AR6) to the global multi-model ensemble; at least two scales, so a transform between them is in play (Fig 4 :27). World anchor for the scale claim: IPCC AR6 WG1 Ch 11, *"Tornadoes have a spatial scale as small as less than 100 metres and a temporal scale as short as a few minutes."* (`grounded` in that source).

**One line per domain, with actors / currency / anchor.** A domain is admitted only if it has a nameable anchor.

| domain | actors | currency | anchor | partition or union |
|---|---|---|---|---|
| D1, the model frame | grid cells, parameterisations, ensemble members, skill scores | prediction Γ(b,a) and residual R_s | observation o′ (reanalysis, station, satellite) | per-slot indexing, not aggregation |
| D2, the scale boundary | the resolved state and the sub-grid event, upscaling/downscaling transform | information lost in the transform, R_T | the same observation at the finer scale | lossy transform, not identity |
| D3, the compound condition | two or more drivers or hazards bound in one event | joint frequency and dependence | the observed joint occurrence | **union** of overlapping conditions |
| D4, the verification frame | modellers, reviewers, multi-model ensembles, attribution studies | agreement and residuals | the ground, never agreement | frames range separately against the anchor |

D1 and D2 touch at the grid cell. D2 and D3 touch when a compound's constituents occupy different scales. D3 and D4 touch at event attribution. This is a union with overlaps, so each overlap gets its own loop rather than being averaged into the others. There is no fifth domain: an observing frame with no instrument returning anything at a slot is not yet a domain, it is a gap (Fig 6 :34-35).

**Order by dependency (Fig 3).** The chain is perception, vocabulary, objective, planning, learn and carry (Fig 3 :4-15).

- Link 1, perception: can any instrument return something at the rare/local slot? Fig 3 :5, *"the system can tell what is in front of it, and tell it apart from what was there before."*
- Link 2, vocabulary: does the model have terms for what the situation affords, including a compound interaction? Fig 3 :7, *"it has terms for what things afford: what can be moved, opened, joined, blocked."*
- Link 3, objective: what counts as represented, global mean skill or per-slot skill? Fig 3 :10, *"it can say what would count as progress here, in its own terms."*
- Links 4 and 5, planning and carry, consume the first three.

Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."** The likely break for rare and local extremes is at link 1; for compound extremes it is at link 2. Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."**

---

## 2. Figure census

Quotes are verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited `Fig N :line`. Strained readings are named in section 6, not smoothed over.

| figure | bearing here | verdict |
|---|---|---|
| **1 The Agent** | R is per slot; averaging kills the live signal | governs the shape of "rare" and "local" |
| **2 The Ground** | anchor must not update; agreement from one pool is worthless | governs D4 |
| **3 Dependency Chain** | break at perception/vocabulary, not planning | governs the order of remedies |
| **4 The Membrane** | lossy transform between scales, round trip gap R_T | governs "local" |
| **5 Mint Pipeline** | no term can be minted without support | rare slots have no support before a record exists |
| **6 Closure / Reachability** | import moves the wall; no proto-instrument where nothing registers | governs INWARD versus OUTWARD |
| **7 Room Chain** | multi-model agreement is variation, not a verdict | corroborates D4 |
| **8 Union Surplus** | search finding nothing is not proof of absence; provenance separates import from convergence | governs absence and membership |
| **9 Leave / Arrive** | union versus partition; describe the residual before choosing a frame; shape not a name | decisive for "compound" and for the two-layer answer |
| **10 Ground Maintainer** | dropped transients, pooled readings: the channel decays, not the ground | corroborates "local" and "rare" |
| **11 The Habitat** | contact cascades, second and third order effects | governs compound cascades |
| **12 The Bond** | same atoms, different bond, different substance | typing for compound configurations |
| **13 Minimum Viable Set** | gradient over space and gradient over time are different terms | a state/structure grammar for scaling, not a namer of extremes |
| **Operators table** | ⋛ comparison is a threshold relation; goal is a comparison | compound as a threshold, not a merge |
| **Symbols table** | R is the aim and the ground is the anchor | the residual, not the library, drives the search |

---

## 3. Findings, each with mode, refuter and triangulation status

### F1 — "Rare" is a live slot hidden by an average (`specified`)

Fig 1 :19, already quoted, and Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."** Fig 1 :28: **"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."** And Fig 1 :13: **"a global R near zero with one live slot residual is a legal state"**.

A global or regional-mean skill score can be near zero while a rare event slot carries positive R⁺_s. The rarity is not a property of the atmosphere alone; it is a property of the slot relative to the evaluation's weighting. Mode `specified`: the prediction is that per-slot scoring will surface more residual at rare-event slots than mean scoring does.

**Refuter:** recompute skill strictly per event slot with equal weight per event (not per grid point or per time step). If the excess residual at rare slots disappears, F1 fails.

**Triangulation:** triangulated, low overlap between Fig 1 (indexing of R) and Fig 6 :49 **"more search at the same reach: is it in here and unfound? The closure does not change. Same atoms, same wall, more of the space actually visited."** (budget vs indexing are different quantities). World corroboration: IPCC AR6 reports *"Projected percentage changes in frequency are higher for the rarer extreme events (high confidence)."* and Bevacqua et al. (2023) reports *"the required sample is much larger than that needed for analyses of univariate extremes."* These are secondary witnesses in the climate frame, not additional figures.

### F2 — "Local" is a lossy scale transform whose gap must be reported, not zeroed (`specified`)

Fig 4 :27: **"The transform between scales loses information, and that is the point."** Fig 4 :31-32: **"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."** Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

A global model coarsens the local slot. Upscaling throws away the detail that makes the event an event; the round trip from fine to coarse and back cannot restore it. What is owed is a measured R_T, not a claim that the coarse field "represents" the local event. Mode `specified`.

**Refuter:** exhibit a downscaling round trip whose R_T is zero for the tested event quantity, with the same observation used at both ends. Then there is no local deficit to explain.

**Triangulation:** triangulated across Fig 4 (scale transform) and Fig 10 :24-27: **"the ground does not decay, the channel does"**, **"stale percepts, dropped transients, saturated metrics, pooled readings"**, **"you have lost touch"**. The channel, not the ground, drops the transient. World corroboration: IPCC AR6, *"Higher horizontal model resolution improves the spatial representation of some extreme events (e.g., heavy precipitation events), in particular in regions with highly varying topography (high confidence)."*

### F3 — "Compound" is a union of overlapping conditions, not a list of separate ones (`general` structural, `specified` prediction)

Fig 9 :54-56: **"When the split lands on a union rather than a partition, unbundle before you search again."**, **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."** Fig 9 :57-58: **"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."**

This is the decisive figure result for the third named cause. A model that represents heat well and drought well can still miss hot-dry, because the intersection is a different object with its own residual. A lever that improves either marginal does not, by itself, clear the intersection. Fig 12 :117: **"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** Applying this one level up: the same drivers under a different bond (dependence, sequence, spatial connection) are a different event. Mode `general` for the union law, `specified` for the prediction that marginal skill will not transfer to the joint.

**Refuter:** show a compound event whose joint frequency and impacts are fully reproduced by a model that treats its drivers independently, with no dependence, sequence or spatial term. Then the intersection is not a different object and F3 fails.

**Triangulation:** triangulated across Fig 9 (union/partition) and Fig 12 (bond typing), two figures governing different quantities (when to split a search vs what makes an arrangement a new substance). World corroboration: Zscheischler et al. (2020) define compound events as *"Although many climate-related disasters are caused by compound events, the understanding, analysis, quantification and prediction of such events is still in its infancy."* and note *"the complex nature of compound events results in some cases inevitably fitting into more than one class, necessitating soft boundaries within the typology."* Bevacqua et al. (2023): *"Recognizing that a univariate perspective on hazards may severely underestimate risk"*.

### F4 — Model agreement is not a verdict; frames must range separately against the anchor (`general`)

Fig 2 :33: **"The anchor must not update."** Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** Fig 2 :40: **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"**. Fig 7 :35: **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."**

A multi-model ensemble is a set of frames built largely from the same evidence pool (shared physics, shared reanalyses, shared evaluation practices). Their agreement about an extreme is efficient as a convention and disqualifying as a verdict. The anchor is the observation, which must not be adjusted to match the ensemble. Mode `general`.

**Refuter:** demonstrate two model frames with genuinely low overlap (different institutions, different formulations, independent initial condition ensembles and independent evaluation data) that fail against the same observed anchor in the same way. Then the agreement carries weight.

**Triangulation:** triangulated across Fig 2 (anchor and correlation) and Fig 7 (room chain). World corroboration: Ridder et al. (2022) show that *"Models with higher skill in simulating historical CEs project smaller increases in the number of heatwaves and drought in Eurasia, but larger numbers of strong winds and heavy precipitation CEs everywhere for all emission scenarios."*, that is, an unweighted multi-model median can hide a skill-dependent bias.

### F5 — The chain usually breaks at perception or vocabulary, not at planning (`specified`)

Fig 3 :27 and Fig 3 :19, quoted in section 1. Fig 3 :6-7: **"it has terms for what things afford: what can be moved, opened, joined, blocked"** and **"what the search can reach"**. For a rare or local event, the first link (does an instrument return anything at that slot?) is missing. For a compound event, the second link (a term for the dependence between drivers) is missing. Effort spent on the objective or planning link cannot rescue either. Mode `specified` for the diagnosis of where the break lies; the world check is incomplete, so this is the weakest empirical link in the solution.

**Refuter:** show a case where improving only the objective or planning link, with perception and vocabulary held fixed, removes the residual at rare/local/compound slots.

**Triangulation:** single-source for the dependency ordering (Fig 3 is the only figure that names the five links). Corroboration from the climate frame is partial: Bevacqua et al. (2023) show that *"the limited temporal length of observations and routinely used model simulations often limits the possibility of identifying and studying the sparse multidimensional constellations of climate variables constituting compound events, an issue related to the curse of dimensionality"*, which is a perception/vocabulary failure in effect terms.

### F6 — Absence in a model is not evidence of absence in the world (`general`)

Fig 8 :39: **"So a search that finds nothing is never a proof of absence."** Fig 9 :44: **"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."** Fig 6 :34-35: **"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."**

A rare extreme that a 31-year record or a single model member never registers may be underivable-at-this-budget, not underivable-in-principle. Formula step 7 separates these as different facts with different instructions. This matters for the question because "not in the model" is often read as "not there." Mode `general`.

**Refuter:** produce a complete, independently verified record showing the event class genuinely never occurred in the region over the period. Then absence in the model is absence in the ground for that period.

**Triangulation:** triangulated across Fig 8 (proof of absence) and Fig 9 (no sealed room), with Fig 6 (proto-instrument) as a third. World corroboration: Bevacqua et al. (2023) find that from 31 years of a single member *"using model output from only one model simulation does not even guarantee to identify the correct sign in the projected change."*

### F7 — Compound and cascading extremes are residuals several steps out (`specified`)

Fig 11 :52-53: **"Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."** Fig 11 :43: **"The habitat is enumerated, never composed."**

Heat and drought are linked by soil moisture feedback; drought and fire by fuel dryness; fire and flood by burned-ground runoff; concurrent breadbasket heat by trade. Enumerating only direct drivers misses the residual three steps out. The habitat, in Fig 11's sense, must be enumerated outward until the cascade stops mattering. Mode `specified` (the figure's cascade rule is structural; which cascade matters in a given basin is empirical).

**Refuter:** show that the poorly-represented residual is fully accounted for by first-order, direct drivers and that no second- or third-order link changes the result.

**Triangulation:** single-source for the cascade rule (Fig 11). The DDT example is borrowed from ecology, a low-overlap field, so it is an analogue that corroborates the shape, not a climate derivation. World corroboration: IPCC AR6, *"Fire weather conditions (compound hot, dry and windy events) have become more probable in some regions (medium confidence)"* and *"Concurrent extreme events at different locations, but possibly affecting similar sectors (e.g., critical crop-producing areas for global food supply) in different regions, will become more frequent with increasing global warming, in particular above 2°C of global warming (high confidence)."*

### F8 — The framework returns a shape, not a name; the membership list is a provenanced import (`general`)

Fig 9 :30-32: **"your words are borrowed too, so describe the effect rather than the cause"**, **"you get a kind of thing, never the answer itself"**. Fig 9 :27-28: **"describe it before you go looking, or any frame you pick will seem to fit"**. Fig 8 :50-52: **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them."**

No figure line derives the name "atmospheric river" or "fire weather" from the six-term set. Those names arrive from the climate-science frame with a source gate (the cited papers) and a shadow test (they explain the residual described in F1 to F7). Naming them as if derived would be echo without shadow. Mode `general` for the limit; the import itself is recorded with provenance in `10_source_ledger.csv`.

**Refuter:** derive the specific membership list from Figures 1 to 13 alone, with no world source, showing which bond and which slot forces each name.

**Triangulation:** triangulated across Fig 9 (shape not a name) and Fig 8 (provenance separates import from convergence). World corroboration: IPCC AR6 and Zscheischler et al. (2020) supply the names and the typology; the canonical figures README (local) states the framework returns *"what a missing thing would have to look like (a shape, not a name)"*.

---

## 4. SEARCHED, INWARD, OUTWARD (formula step 7), kept distinct

The question "which extremes are poorly represented when no term closes R" is exactly step 7. The three questions are run in order and never read against one another.

1. **SEARCHED, asked first (cheapest).** Is the extreme already in the model's closure and merely unfound? Fig 6 :49, quoted in F1. World answer: partly yes. Bevacqua et al. (2023) show that large initial-condition ensembles (SMILEs) supply hundreds to thousands of years of weather and that *"robust analyses of compound events ... require data with very large sample size"*. So a budget-limited component exists, and more search at the same reach is a legitimate remedy for some of the residual. This is a `grounded` finding of the world source, not a figure verdict.
2. **INWARD, extend the instrument.** Fig 6 :32-33: **"An instrument is not built from a description. It is improved from a worse instrument already returning something."**, **"Nobody specified a telescope from an account of Mars. A wandering point in the sky was already a reading, and every sharper instrument was built on the residual the last one produced."** The edge to extend from is the existing station, reanalysis or radar that already returns something at the slot. Higher resolution, longer records and sub-daily indices are INWARD moves. IPCC AR6 notes *"Studies of events on longer time scales for temperature or precipitation, or on sub-daily extremes, are scarcer, which generally limits the assessment for such events."*
3. **OUTWARD, import a frame whose closure predicts the shape.** Fig 6 :30: **"outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."** Fig 8 :53: **"Residual first, frame second."** The imported frames here are compound-event typology (Zscheischler et al. 2020), large-ensemble event attribution (Bevacqua et al. 2023) and skill-weighted multi-model assessment (Ridder et al. 2022). Each has a source gate (a real URL read 2026-11-22) and a shadow test (it explains one of F1 to F7). They are debited against independence: they overlap with the climate frame that produced the problem, so their agreement with the figures is one evidence pool, not a second witness.

Underivable-in-principle and unreachable-at-this-budget remain different facts. Importing a new modelling paradigm to fix a budget-limited sampling problem would add an atom that was not needed (Fig 6 :51-52), so the remedy must match the diagnosed cause.

---

## 5. Pre-registered refuter (written before the conclusion)

Per the standing instruction: a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. Per-slot, equally weighted skill shows no excess residual at rare-event slots relative to common-event slots (kills F1).
2. A scale round trip yields R_T indistinguishable from zero for the tested local quantity (kills F2).
3. A driver-independent model reproduces the joint frequency and impacts of a compound event (kills F3).
4. Two genuinely low-overlap frames agree with the model and the observed anchor cannot move their agreement (kills F4).
5. Improving only objective/planning, with perception and vocabulary held fixed, removes the deficit (kills F5).
6. A complete independent record demonstrates true absence of the event class at the slot (kills F6).
7. First-order direct drivers fully account for the residual with no cascade contribution (kills F7).
8. The membership list is derived from the figures alone (kills F8 and the two-layer structure).

If any fires, the corresponding domain verdict is withdrawn and the two-layer answer collapses into a single-layer claim. Until one is run, nothing here is labelled `grounded` by this derivation.

---

## 6. Strains, re-census and corrections (kept visible)

| earlier reading | status after re-census |
|---|---|
| "Rare, local, compound are three independent problems, so answer three times." | **Retracted.** Fig 9 :54-58 governs: they overlap, so it is a union and each intersection gets its own loop. Fig 12 :117 supplies the bond typing. This changed the domain census before any verdict was written. |
| "Raising resolution fixes 'local'." | **Narrowed, not retracted.** Resolution is an INWARD instrument move (Fig 6 :32). It can shrink the error but cannot make the lossy transform invertible; R_T remains the honest report (Fig 4 :31). |
| "Multi-model agreement is corroboration." | **Retracted.** Fig 2 :40, Fig 7 :35. Shared evidence pools make agreement a convention, not a witness. Ridder et al. (2022) show the median can be biased by low-skill models. |
| "The figures can tell us which extremes are poorly represented." | **Retracted.** Fig 9 :32, shape not a name. The names are an OUTWARD import with provenance. |
| Apparent strain Fig 1 (per-slot residual) versus Fig 9 (union compounding) | **Not strained after re-census.** Fig 1 governs how R is indexed; Fig 9 governs how conditions are bundled. Different quantities. A rare slot and a compound slot can both be live without contradiction. |
| Apparent strain Fig 11 DDT cascade versus a climate question | **Analogue, not derivation.** Fig 11's DDT entry is from an ecology/self-contained frame with low overlap, so it corroborates the cascade shape but does not supply a climate mechanism. Recorded as a strain in witness type, not hidden. |
| Step 7 complaint: importing compound-event theory when the problem might be a budget problem | **Kept distinct.** SEARCHED found a genuine budget component (Bevacqua et al. 2023). OUTWARD is used only for the union/scale shape that SEARCHED and INWARD cannot close. |

**Strains remaining: two, both named.** (a) The climate-frame sources and the figures share almost no evidence pool, which is good for independence but means the world figures corroborate the shape only in effect terms, never by derivation. (b) F5 is single-source (Fig 3), and its world corroboration is partial, so its mode stays `specified` with a live refuter.

---

## 7. Canonical usage check

Two local files were read after the first four sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also says a reading that makes figures contradict each other has misidentified its domain, which is the rule applied to the Fig 1 / Fig 9 re-census above, and that the framework reports *"a shape, not a name"* then *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."* *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: step 7 separates SEARCHED, INWARD and OUTWARD, and warns that underivable-in-principle and unreachable-at-this-budget are different facts. The derivation in section 4 keeps them distinct. The mode rule is applied throughout.

### Retraction and confirmation log

Retractions and narrowing are listed in section 6 and not silently erased. Confirmations: F3 is canonically confirmed by the README's shape-not-a-name limit plus Fig 9, F4 by the README's anchor rule plus Fig 2, and F8 by the README's explicit *"a shape, not a name"*. No earlier quote was found to have drifted when rechecked against `03-FIGURES_TEXT.md` on 2026-11-22.

---

## 8. Verdict of the audit

The **shape** of the poorly-represented set survives: it is the live per-slot residual that averaging hides (F1), the lossy local-to-global transform whose gap is R_T (F2), the union of overlapping conditions that marginal skill cannot clear (F3), assessed against an unmoving observed anchor rather than by model agreement (F4), with the chain breaking at perception and vocabulary (F5), absence in a model not proving absence in the world (F6), cascades several steps out (F7), and a membership list that is a provenanced import rather than a figure derivation (F8).

The **membership** is world-sourced: rare (unprecedented heat, 10-year and 50-year heavy precipitation), local (tornadoes, sub-daily flash floods, topographically driven precipitation), and compound (hot-dry, fire weather, compound flooding, spatially concurrent breadbasket heat). These names are `grounded` in the cited assessments, not produced by this simulation. Verdict on the solution's own claim: `specified`, ungrounded, candidate. This audit cannot settle which extremes are poorly represented; it can only say what a settleable answer must look like and what would refute it.
