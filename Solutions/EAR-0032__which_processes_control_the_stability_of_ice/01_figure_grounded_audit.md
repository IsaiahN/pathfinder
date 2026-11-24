# Figure-grounded audit: which processes control the stability of ice shelves that restrain glaciers?

**Mode of this document: `specified` on the applied shape, `general` on framework-internal claims, `gap` on the identity and ranking of named processes. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* states that LLM output is *"simulacra"* and that *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the glaciological question it reports on. See `05_what_shape_means.md` §6.

**Source discipline.** Figure quotes are taken verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` and cited as `Fig N :line`. Every quoted string used in this folder was checked as an exact substring against that file using the validator's own normalisation before any file was written. No figure quote came from a summary, a memory or a plan. World sources were fetched and read on 2026-11-22 and are recorded in `10_source_ledger.csv`.

---

## 0. The question and the residual in effect terms

Question, verbatim from `earth systems.txt` line 32: "Which processes control the stability of ice shelves that restrain glaciers?"

Stated as an effect, the question is this. An ice shelf is a floating plate that presses back against the grounded glaciers feeding it. When the shelf thins, fractures, retreats or disintegrates, that back pressure is reduced and the glaciers accelerate, moving land ice into the ocean and raising sea level. We want to know **which processes, acting on which shelf, at which place and time, change that restraint, and whether any of them acts as a lever rather than a contributor.**

Write the residual per slot, after Fig 1 :11 "residual R indexed by object slot" and Fig 1 :19 "The residual is indexed by object slot, not aggregated.":

```
R_s,t = | Gamma(b_s,t, a_s,t) - o'_s,t |
```

- `s` is a slot: one shelf, one tributary glacier, one grounding-line sector, one season.
- `Gamma` is what the current library predicts for shelf thickness, velocity, rift density and back stress, given belief and action.
- `o'` is what is actually observed by altimetry, InSAR velocity, moorings, boreholes or field survey.

The residual is **not** one scalar called "ice shelf stability." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." A global mean that matches observation can coexist with a live, fast-moving slot on the Antarctic Peninsula or in the Amundsen Sea. Fig 1 :13 "a global R near zero with one live slot residual is a legal state" is exactly this case.

What an answer would look like, bound as an ordinary term before the run (Formula, "Direction"): a **shape** consisting of (i) the list of process slots in contact with the shelf residual, (ii) which of those slots currently carry positive live mass `R⁺_s`, (iii) the observation that anchors each slot, and (iv) the conditions under which a slot becomes a threshold rather than a trend. It does **not** include a single ranked list of processes valid for every shelf.

---

## 1. Domain census

### 1.1 R by arity, symmetry and scale

- **Arity:** multiple, at least five distinguishable condition families on the shelf residual: subsurface ocean heat and basal melt; surface meltwater and hydrofracture; mechanical calving and rift propagation; ice geometry, pinning points and back stress including cliff failure; sea-ice cover and wave forcing. Arity is not one, so the question is not a single hard problem (Fig 9 :4 "Split it rather than search.").
- **Symmetry:** the processes are **not** interchangeable operands. Ocean melt thins the shelf, which reduces buttressing, which moves the grounding line, which changes the cavity geometry that delivers more warm water. Surface meltwater wedges crevasses; wave flexure opens the same crevasses by a different route. Two different processes can produce the same observed thinning. That is a metamerism problem, not a symmetric join.
- **Scale:** shelf-local and hours-to-weeks for hydrofracture and disintegration; regional and years-to-decades for basal melt, grounding-line retreat and glacier acceleration; millennial for committed ice-sheet loss. Scale is mixed, so a verdict at one scale does not compose to another without a lossy transform (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if it has a nameable anchor. Where no instrument settles it, it is not yet a domain, it is an open slot.

| domain | actors | currency | anchor (nameable) | question type |
|---|---|---|---|---|
| D1 Subsurface ocean forcing | warm deep water, cavity circulation, basal melt, basal channels, grounding line | heat flux, melt rate in m/yr, thinning rate | measured basal melt rates, ocean temperature moorings, satellite altimetry | measured, ground-visible |
| D2 Surface and atmospheric forcing | air temperature, firn permeability, melt ponds, crevasse water, hydrofracture | surface energy balance, meltwater volume, water depth in crack | melt pond area, surface temperature records, observed fracture propagation | measured, ground-visible |
| D3 Ice mechanical state | shelf thickness, rifts, shear margins, pinning points, ice rises, back stress, calving front, ice cliffs | stress, strain rate, glacier velocity | InSAR velocity, grounding-line position, observed acceleration after loss | measured, ground-visible |
| D4 Sea-ice and wave buffer | sea-ice cover, ocean swell, storm events | wave energy, flexural stress | observed sea-ice retreat preceding breakups; wave records | partly measured, open on magnitude |
| D5 Verification and modelling | coupled ice-ocean models, remote sensing, field campaigns, paleo archives | prediction minus observation | observed glacier response and mass balance; the ground, never agreement | measured, but models share a parameter pool |

No domain here is admitted on prestige or on expert agreement. Each has a measurement that can move it. D4 is the weakest: the contact is observed, but the magnitude of the wave contribution is contested and needs a dedicated instrument.

### 1.3 Partition or union

This is a **union**, not a partition. Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57 "a case in two conditions is not a harder case of either". Basal melt and hydrofracture are not independent levers on the same shelf: melt thins and weakens the shelf, making hydrofracture easier; loss of sea ice lets waves flex a shelf already fractured by meltwater. A single lever clears the region where only one condition holds and leaves the intersections standing (Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."). Fig 12 :5 "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." A list of processes without their couplings is the flat-form collapse, not an answer.

### 1.4 Dependency order (Fig 3)

The chain is ordered by dependency, not by importance:

1. **Perception.** Can we observe shelf thickness, velocity and rift state? Fig 3 :19 "Optimising a link that already works cannot rescue one that does not."
2. **Vocabulary.** Do we have terms for what the situation affords? Melt, hydrofracture, buttressing, pinning, flexure.
3. **Objective.** What counts as loss of stability here: thinning, retreat, acceleration, or irreversible disintegration? These are different quantities.
4. **Planning.** Which instrument or intervention reaches that objective under incomplete information?
5. **Learn and carry.** Name what worked, verify it, carry it to the next shelf.

Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." This is the status of the marine ice cliff instability link: widely discussed, but with contested observational support. Treating it as an established link because it is frequently cited is an effort spent above a break.

---

## 1b. Figure census

| figure | bearing on this residual | verdict |
|---|---|---|
| 1 The Agent | residual per slot; frame-internal quantities disqualified | no single global stability scalar |
| 2 The Ground | anchor must not update; shared pool disqualifies | observations anchor; model consensus does not |
| 3 Dependency Chain | a link with no instrument is not a link that works | cliff failure and wave magnitude are unmeasured links |
| 4 The Membrane | lossy transform across shelf to ice-sheet scale; round trip needed | scale claims require a measured gap |
| 5 Mint Pipeline | three guards and MDL bargain; no mint without support | no new primitive is owed from this run |
| 6 Closure / Reachability | import moves the wall; instruments improved from worse ones | process names are imports from earth science with a source gate |
| 7 Room Chain | agreement among rooms is not a verdict | expert consensus cannot settle MICI |
| 8 Union Surplus | residual first, frame second; search finds nothing is not absence | describe the shape before choosing the discipline |
| 9 Leave / Arrive | union versus partition; describe effect not cause; filters versus witnesses | unbundle; no single lever; budget filters only |
| 10 Ground Maintainer | bring the residual, not the source; declare stakes | outreach order; this audit's own stake declared |
| 11 The Habitat | enumerate contact outward; valence relative to residual; contact cascades | D4 is a second-order contact that matters |
| 12 The Bond | arrangement is substance; functional group; settled molecule becomes atom | process couplings matter more than the process list |
| 13 Minimum Viable Set | six-term substrate governs composition form, not process identity | no heat or melt primitive is derivable from it |
| Operators | a relation failing all seven tests is not a missing operator | no new operator is minted for "control" |

---

## 2. Findings

### F1: No single stability scalar (triangulated)

Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces."

A number called "ice shelf stability" that averages over shelves, processes and timescales is a frame-internal score. It can look stable while one slot is live. The world sources make the same point from the ground: Wekerle et al. 2026 report that at one Greenland floating tongue mass loss is dominated by basal melting while at another it is dominated by iceberg calving, in the same hindcast, the same region and the same model. A single process ranking would erase that difference.

**Refuter:** produce one scalar, with a stated instrument, that predicts the response of every slot under both ocean and surface forcing without hiding a live residual. If it exists, F1 is withdrawn.

### F2: It is a union compound, so unbundle before search (triangulated)

Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57 "a case in two conditions is not a harder case of either". Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 12 :5 "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."

The processes couple. Basal thinning reduces buttressing; reduced buttressing moves the grounding line; grounding-line retreat changes cavity geometry; sea-ice loss lets waves act on a shelf already weakened. A campaign that attacks only basal melt leaves the intersections standing. A campaign that lists five processes as independent peers has recorded ingredients and not the molecule.

**Refuter:** show, with per-shelf data, that two of the condition families never co-occur and never change each other's effect on glacier acceleration. Then the partition reading is restored for that pair.

### F3: The anchor is measurement, not agreement (triangulated)

Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 7 :35 "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool".

The marine ice cliff instability case is the live test. The world record describes it as highly influential and also highly contested, with later work explaining the same paleo sea-level episodes without it and other studies finding seabed gouging consistent with it. That is a ground disagreement. It is not settled by counting papers, ranking authors or polling experts. Coupled models and remote-sensing observations that share parameters and reanalysis forcing are one evidence pool, not two witnesses (Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence.").

**Refuter:** exhibit a model-only metric for shelf stability that every independent field observation fails to move. If it exists, the anchor rule is wrong for this residual.

### F4: Enumerate the habitat outward; the control may be three steps out (single-source for the figure rule, corroborated by world sources)

Fig 11 :43 "The habitat is enumerated, never composed." Fig 11 :44 "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering." Fig 11 :46 "conditions: light, water, temperature, season, terrain". Fig 11 :52 "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."

First-order enumeration of the shelf residual gives water and ice. Second-order enumeration gives grounding-line geometry and cavity circulation. Third-order enumeration gives sea ice, swell and storm tracks, which act on a shelf that was already fractured by surface melt. The world sources report exactly this: retreating sea ice removes a buffer against long-period waves, and the largest waves can buckle a shelf already flooded and cracking. A study limited to basal melt would miss the third-order term.

Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries." Warm water is a malfactor to a cold shelf residual and a benefactor to a different residual such as seasonal ocean heat uptake. There is no standing list of good or bad processes. Fig 11 :61 "The seat's power is asymmetric. Introduction is available; exclusion is not." We can add an instrument to the habitat; we cannot subtract the contact.

**Refuter:** demonstrate across several shelves that second- and third-order contacts never change `R_s,t` once first-order melt and meltwater are held fixed. Then the enumeration radius can be cut.

### F5: Several processes give the same reading, so a discriminator is owed (triangulated)

Fig 6 :32 "An instrument is not built from a description. It is improved from a worse instrument already returning something." Fig 9 :30 "your words are borrowed too, so describe the effect rather than the cause". Fig 9 :27 "describe it before you go looking, or any frame you pick will seem to fit". Fig 9 :32 "you get a kind of thing, never the answer itself".

Observed thinning does not comment on its source. Basal melt, surface-driven rifting, wave flexure and dynamic thinning can all produce a falling surface. Funds of the kind described in *The Hard Problem is About Source* make the point for colour: a spectrometer, not an argument, resolved the source. Here the owed thing is a source-discriminating observation at a single shelf: coincident basal melt rate, fracture propagation and flexural strain, so that one thinning signal can be apportioned. Fig 6 :32 requires that the instrument be improved from one already returning something; altimetry and InSAR already return the signal, so the proto-instrument exists.

**Refuter:** exhibit an instrument that, at one site and one season, attributes a measured thinning uniquely to one process while holding the others fixed. Then this particular `gap` closes.

### F6: The figures return a shape, not a process name (triangulated)

Fig 9 :32 "you get a kind of thing, never the answer itself". Fig 13 :134 "Unreachable is a verdict here, not a silence". Operators :68 "A relation that fails all seven is not an operator you are missing; it is a claim that has not been made yet."

No figure line yields "basal melting," "hydrofracture," "calving," "cliff failure" or "wave forcing" as a consequence of the six-term set. Those are atoms held by the earth-science frame. Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Importing them is legitimate, but it carries a source gate and a shadow test: the imported term must explain a described residual and must have provenance. This is why `03_public_contact_points.csv` and the WORLD section matter: they are the frame whose closure differs, and they are where the process names come from with dates and measurements.

**Refuter:** derive any one of those process names from the six-term substrate and its seven bonds without importing it. If that derivation succeeds, this finding is withdrawn.

### F7: `gap`, not unreachable-in-principle (single-source for the category distinction, corroborated by the canonical rule)

Fig 8 :39 "So a search that finds nothing is never a proof of absence." Fig 8 :40 "underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions." Fig 13 :134 "Unreachable is a verdict here, not a silence".

What is missing here is not a sensor for something that has never registered. Melt rates, velocities, rift propagation and sea-ice extent already register at multiple resolutions. What is missing is (i) a discriminator among co-producing processes at one site and (ii) a schedule for when a trend becomes a threshold on a named shelf. That is a `gap` in the shape-not-a-name sense, reported as a verdict and not as silence. Importing a whole new primitive to fill it would add an atom that was not needed (Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict.").

**Refuter:** show a quantity relevant to shelf restraint that returns nothing at any resolution on any existing instrument. Then the category changes from `gap` to `unreachable-at-this-budget`.

### F8: Verdicts stay per domain and are never averaged (triangulated)

Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." Fig 2 :42 "Buy independence in proportion to the cost of being wrong."

D1 and D2 are measured but share reanalysis forcing and satellite altimetry pools. D3 has its own velocity instrument. D4 is contested. A combined "confidence" over the four domains would be an average of influence, not an evidence gain. The cost of getting this wrong is concrete: a scalar lever sends a field campaign to the wrong shelf and spends the independence of the outside reader who could have refuted the claim.

**Refuter:** show that two of these domains draw on genuinely disjoint instruments and that their agreement therefore changes the verdict weight. Until then their agreement is one pool with several views.

### F9: What survives (the residue)

| claim | mode | figure |
|---|---|---|
| The residual must be indexed per shelf, per process slot and per time, never averaged | `general` structural, `specified` applied | Fig 1 :19, :22 |
| The condition set is a union compound and must be unbundled before search | `specified` | Fig 9 :54, :55, :57 |
| Measurement is the anchor; model or expert agreement is not | `general` | Fig 2 :29, :35, :40 |
| Contact must be enumerated outward; the controlling term can be second or third order | `general`, `specified` applied | Fig 11 :43, :44, :52 |
| A source-discriminating instrument is owed where several processes give one reading | `specified` | Fig 6 :32, Fig 9 :30 |
| The framework returns a shape, not a process name | `general` | Fig 9 :32, Fig 13 :134 |
| Which named process dominates a given shelf, and any threshold number | `gap` | no figure line; imported ground content |

---

## 3. Strains and re-census

- **S1, substrate mapping.** First pass wanted to map ocean heat to the substrate's Energy and cavity circulation to Network, then call that a derivation. Re-census: Fig 13 :74 "Everything else is a composition across the two kinds, never within one." The six-term set constrains the form of a composition, not the identity of a geophysical process. The mapping is a binding from the earth-science frame, not a derivation. Strain dissolved; the original reading is preserved here rather than erased.
- **S2, MICI controversy.** First pass treated the disagreement as a figure strain. Re-census: it is a ground-level disagreement about what happened at specific shelves, not a conflict between figure lines. It returns to F3 as an anchor question. Strain dissolved.
- **S3, "shape, not a name" overreach.** First pass read the rule as forbidding all process names in the folder. Narrowed following the exemplar's own correction: the phrase governs a primitive not held in the library. Named processes are imports from a different frame and may be reported as world claims with provenance, but they are not figure verdicts. The narrower form is used throughout.
- **S4, stability as one quantity.** First pass used "stability" as a single dependent variable. Re-census splits it into thinning, retreat, acceleration and irreversible disintegration, which have different instruments and different anchors (Fig 9 :4 "Split it rather than search."). Strain dissolved.
- **S5, witness count.** First pass treated NSIDC, Wikipedia and the 2026 preprint as independent corroborations of one another. Downgraded: the two synthesis pages draw on the same assessment and field-programme pool, and the preprint is a single model study. They are reported as several views of one pool, not three witnesses. Strain dissolved.
- **After re-census: no live strain. One declared `gap`, named above.**

---

## 4. Pre-registered refuter

Written here before the conclusion and before any outreach, per the standing instruction that a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. A single scalar with a stated instrument predicts the response of every shelf under both ocean and surface forcing without hiding a live slot residual.
2. Two of the five condition families are shown never to co-occur and never to alter each other's effect on glacier acceleration, restoring a partition for that pair.
3. A model-only metric is found that every independent field observation fails to move, so agreement becomes the anchor.
4. Second- and third-order contacts are shown never to change `R_s,t` when first-order melt and meltwater are held fixed.
5. An instrument attributes one observed thinning uniquely to one process at one site and season while holding the others fixed, closing the source `gap`.
6. Any process name is derived from the six-term substrate and seven bonds without import.
7. A quantity relevant to shelf restraint is shown to return nothing at any resolution on any existing instrument, changing the category from `gap` to unreachable-at-this-budget.
8. Two of the four verdict domains are shown to draw on genuinely disjoint instruments and their agreement changes the verdict weight.

If any fires, the corresponding finding is withdrawn and the retraction is recorded below. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Verdict and per-domain verdicts

**Option B: keep the figure-derived shape and refuse to name a winning process from the framework.** Option A, asserting that the framework identifies the controlling process, would name an atom it does not hold, present imported ground content as a derivation, and spend the independence of the people asked to check it (Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it."). Option B sends a checkable shape, written refuters and an open slot until an instrument settles it.

| domain | verdict | status | why |
|---|---|---|---|
| D1 Ocean forcing | measured, dominant at some slots, not universal | `grounded` in the world frame, `gap` as a figure-derived ranking | Wekerle et al. 2026; NSIDC; import with provenance |
| D2 Surface forcing | measured, dominant at other slots | `grounded` in the world frame, `gap` as a figure-derived ranking | hydrofracture documented; melt pond dependence on summer temperature |
| D3 Mechanical state | measured; cliff failure contested | `specified`, instrument owed | velocity record is solid; MICI link contested |
| D4 Sea ice and waves | contact observed, magnitude contested | `specified`, instrument owed | third-order term, weak anchor |
| D5 Verification | prediction minus observation is the currency | `general` structural | models share a parameter pool, not independent witnesses |

Verdicts are kept separate and never averaged. Mode on the whole: `general` on framework-internal laws, `specified` on the applied shape, `gap` on the process ranking and all threshold numbers. Not `grounded`.

**Cost if wrong.** A scalar lever misdirects field campaigns and spends reader independence (Fig 2 :42 "Buy independence in proportion to the cost of being wrong."). **Undoable.** The shape and the refuters are removable or revisable without touching any observation. **Reversed by.** A source-discriminating instrument, a demonstrated single-scalar predictor, a partitioned proof for two condition families, or a figure re-census that actually derives a process name.

---

## 6. Canonical usage check and retraction / confirmation log

Two sources were read after the first five sections and govern how the figures may be used: `FRAMEWORK/reference/FIGURES_README_canonical.md`, which says the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary,"* and adds that the framework reports *"what a missing thing would have to look like (a shape, not a name)"*; and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, under which design questions are answered by derivation rather than escalation.

| earlier reading | status after the canonical check |
|---|---|
| Substrate maps heat to Energy and circulation to Network as a derivation | **Retracted.** A binding from the earth-science frame; Fig 13 :74 governs composition form only (S1). |
| MICI disagreement as a figure strain | **Retracted.** Ground-level disagreement, returned to F3 (S2). |
| "Shape, not a name" forbids all process names | **Narrowed, not erased.** Governs missing primitives; process names are imports with provenance (S3). |
| "Stability" as one dependent variable | **Retracted.** Split into four quantities with different instruments (S4). |
| NSIDC, Wikipedia and the 2026 preprint as three witnesses | **Retracted.** One evidence pool with several views (S5). |
| No single stability scalar | **Canonically confirmed.** Fig 1 :19 and :22, plus the README's per-slot rule. |
| Union compound must be unbundled | **Canonically confirmed.** Fig 9 :54 to :57 and :60. |
| Anchor must not update | **Canonically confirmed.** Fig 2 :29 to :35. |
| `gap` is a verdict, not silence | **Canonically confirmed.** Fig 13 :134 and Fig 8 :39. |

### Honest standing of the second seat

`11_audit.md` is a simulated second seat reading the same evidence pool. Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" applies to it directly. Its agreement is internal consistency, not corroboration. No measurement was taken in this folder.

---

## 7. What would close the gap

Nothing in this folder settles a glaciological question. What would move it to `grounded`:

1. Coincident basal melt rate, fracture propagation and flexural strain at one shelf in one season, so one thinning signal can be apportioned among sources.
2. A per-shelf threshold determination for the transition from trend to threshold, with the instrument named in advance.
3. A source-discriminating observation of the cliff-failure link, or its refutation, at a named grounding line.
4. A demonstration that two condition families are partitioned for a named shelf.
5. A figure re-census that derives a process name, which would falsify F6.

Until one of these fires, the answer stops at the limit of the available instruments and records the lineage so the stop is checkable. *"Indiscernibility is not identity."*
