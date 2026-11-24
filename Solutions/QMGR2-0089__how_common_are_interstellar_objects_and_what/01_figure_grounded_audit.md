# Figure-grounded audit: how common are interstellar objects, and what can they reveal?

**Mode of this document: `general` on the structural shape, `specified` on every substantive claim, never `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figures, cited as `Fig N :line`), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, the eight essays, and the astronomy sources in `10_source_ledger.csv`, all opened 2026-11-23. World sources are secondary corroboration and do not outrank a figure line.

---

## 0. The question under audit

> How common are interstellar objects, and what can they reveal about other planetary systems?
>
> Source: QM & GR Questions.txt line 255, section I (Stars, planets, and the Solar System).

### Residual in effect terms

A survey holds a model Γ that predicts a detection count Γ(b,a) from an assumed number density and detection efficiency; the sky returns o′. The residual R = |Γ(b,a) − o′| is indexed by survey-object slot s: Pan-STARRS (which found 1I), the informal Borisov survey (which found 2I), and the 3I discovery survey each constitute a slot with different depth, area and cadence. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

A second residual asks: from a composition reading c (CO/H2O ratio, NH3 production, isotope ratios), infer a parent-system property p (metallicity, formation radius, ejection mechanism). This mapping is many-to-one and lossy: several p produce the same c. So the question carries two residuals, a count residual and a source residual.

### Options and what each leads to

- **Option A:** interstellar objects are common and their composition names their parent system. Leads to: n is a well-measured scalar; a composition maps one-to-one onto a source; no further instrument is owed.
- **Option B:** abundance is a bounded per-slot measurement with large Poisson and size-frequency-distribution (SFD) uncertainty, and composition constrains a *kind* of parent system but does not name one. Leads to: more survey search and source-discriminating instruments are owed before either half closes.

### The sought shape, bound before the run

Formula, "Direction": *"make the sought-for shape an ORDINARY TERM - write down what an answer would look like, bind it, and let it accrue a residual like anything else."* Bound here: a shape with three parts, (i) the per-slot detection residual with its uncertainty, (ii) the two-scale transform from a local count to a galactic population with its measured round-trip gap `R_T`, and (iii) the class of parent systems consistent with the composition plus the instrument that would discriminate among that class. This bound shape is the preference that the pre-registered refuter in section 4 can refuse.

---

## 1. Domain census (done before choosing any figure line)

### R by arity, symmetry, scale

- **Arity:** two conditions (count and source). This is a **union compound**, not one hard question. Fig 9 :54: *"when the split lands on a union rather than a partition, unbundle before you search again."*
- **Symmetry:** the count is a scalar per slot, not a threshold relation; the source inference is many-to-one and not symmetric. Under a symmetric bond, permutations collapse to one term (Fig 12 :92), but here different parent systems can give the same reading, so the permutation does not collapse.
- **Scale:** local (number per cubic au inside the planetary region) and galactic (10^25 to 10^26 objects in the disk), joined by a lossy transform with a round-trip gap.

### One line per domain: actors / currency / anchor

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D1 detection and abundance | sky surveys (Pan-STARRS, Rubin/LSST, NEO Surveyor), interlopers 1I/2I/3I | detection counts, number density n, Poisson confidence interval | the characterized sky survey, which does not update on a model's preference | partition: detection versus non-detection per slot |
| D2 formation and ejection | protoplanetary disks, giant planets, planetesimals, birth cluster, stellar flybys | ejected mass per star, SFD slope, Safronov number | debris disks and dynamical simulations | habitat enumeration, never composition |
| D3 composition and inference | cometary volatiles (CO, H2O, NH3, N2), spectrographs, parent stars | production rates, isotope ratios, metallicity | spectroscopy and isotope measurement | lossy projection: many parents, one reading |
| D4 verification and outreach | expert readers, proposal reviewers | agreement and residual | the ground, never agreement | anchor problem; all seats here share one evidence pool |

**Partition or union.** D1 and D3 form a union: the overlap is the objects themselves, which are both counted and sampled. D2 is upstream of both (it supplies the objects). Unbundle D1 and D3 before searching (Fig 9 :54). Inside D1 there is a further split: the inferred number density and the number density expected from formation models are two conditions, and their disagreement does not shrink with effort, so it is not one hard question but several well-formed ones (Fig 9 :4-5).

**Dependency order (Fig 3).** 1 perception (can a survey detect an interloper at all); 2 vocabulary (terms for what detections afford: n, SFD, Safronov number); 3 objective (what would count as "common", a comparison); 4 planning (design a deeper survey); 5 learn and carry (name what worked and carry it to the next object). The chain currently stops at link 3: we can perceive (three objects) and we have vocabulary (n, SFD), but "common" is a threshold comparison that has no grounded value. Effort spent on link 4 arrives at a step whose input (the threshold) never arrived (Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*). More survey work is still the right move for the Poisson half of the residual; it is not the right move for the threshold half.

Strain test note: Fig 8 :32 (search adds no atom) would appear to forbid more surveys. It governs the *underivable* case, not the *unreachable-at-budget* case, which Fig 8 :40-43 separates. Different objects, so re-census rather than soften either line. The strain is named and dissolved in section 6.

---

## 2. Figure census (quoted verbatim BEFORE concluding)

Every line below was read from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session. Paraphrases in this table are not in quotation marks.

| figure line | verbatim text | bearing |
|---|---|---|
| Fig 1 :19 | "The residual is indexed by object slot, not aggregated." | abundance residual is per survey, not a global mean |
| Fig 1 :22 | "Aggregating across slots is how a live signal disappears into an average." | a single density quoted across dissimilar surveys hides where to look |
| Fig 2 :29 | "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." | the measured sky is the anchor for count |
| Fig 2 :35 | "Alignment is triangulation, not negotiation. A mirror cannot correct you." | agreement among papers citing the same detections is not corroboration |
| Fig 2 :40 | "agreement about the world is worthless when the agreeing frames share an evidence pool" | all sources here share the three-detection pool |
| Fig 3 :19 | "Optimising a link that already works cannot rescue one that does not." | survey design cannot repair an ungrounded threshold |
| Fig 4 :20 | "Only the actors, the currency and the anchor change." | the local-to-galactic transform changes cast, not the loop |
| Fig 4 :30 | "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." | local count to galactic population needs a measured `R_T` |
| Fig 6 :32 | "An instrument is not built from a description. It is improved from a worse instrument already returning something." | Rubin and NEO Surveyor grow from existing detections |
| Fig 6 :33 | "Nobody specified a telescope from an account of Mars. A wandering point in the sky was already a reading, and every sharper instrument was built on the residual the last one produced." | discharges an objection that a survey could not have been designed a priori |
| Fig 6 :34 | "The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve." | three detections already fail to resolve the SFD |
| Fig 7 :13 | "agreement compounds, evidence does not" | many papers citing one detection do not multiply evidence |
| Fig 8 :32 | "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." | more analysis of the same three objects cannot add a new parent system |
| Fig 8 :39 | "So a search that finds nothing is never a proof of absence." | non-detection in one slot does not close the population |
| Fig 9 :32 | "you get a kind of thing, never the answer itself" | reveal is a shape and a class, not a named star |
| Fig 9 :54 | "when the split lands on a union rather than a partition, unbundle before you search again" | the two-part question must be split |
| Fig 9 :60 | "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." | survey tier is a budget filter, never a verdict |
| Fig 10 :42 | "A verifier that can reconstruct the claim cannot verify it." | send the residual and refuter, not the framework |
| Fig 11 :43 | "The habitat is enumerated, never composed." | ejection mechanisms are read off the world, not invented |
| Fig 11 :44 | "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering." | enumerate disks, planets, cluster, flybys, post-main-sequence loss |
| Fig 12 :117 | "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." | isomer test for 1I versus 2I |
| Fig 12 :124 | "a substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." | functional group reading: ejected planetesimal |
| Fig 13 :121 | "Different routes can arrive at the same substance." | same composition from different parent systems is the source problem |
| Fig 13 :134 | "Unreachable is a verdict here, not a silence" | a bounded answer is a verdict, not a failure |

Strained readings are named in section 6, not smoothed over.

---

## 3. Findings F1 to F12

Each finding carries a mode and a triangulation status. Verdicts are kept per domain and are never averaged.

### F1 - The question is a union compound; unbundle before search

Fig 9 :54: *"when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :55-57: a bundled problem is a union of overlapping conditions; a case in two conditions is not a harder case of either, it becomes a specific compound.

The two halves share the objects but have different grounds. Count is settled by a survey with a published selection function; source is settled by a discriminating instrument. Running one search over the bundle guarantees that whichever half has the better instrument decides the answer.

**Mode:** `general` (structural). **Status:** triangulated (Fig 9 with the review structure of Jewitt 2024, which treats population and composition in separate sections). **Refuter:** show that count and source share one anchor such that a single measurement settles both; then the union reading fails and a single loop is correct.

### F2 - The abundance residual is per survey slot, not a global scalar

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

The frequently quoted local density near 0.1 au^-3 comes from the well-characterized Pan-STARRS detection of 1I (Jewitt et al. 2017; Do et al. 2018, as reported by Jewitt 2024 and Jewitt & Seligman 2023). The 2I discovery survey has unpublished depth, area and cadence, so Jewitt 2024 states that it is not possible to extrapolate from that discovery to a number density. Treating both detections as interchangeable measurements of one scalar aggregates across slots and throws away the signal about where to look. The Poisson confidence intervals span orders of magnitude (Siraj & Loeb 2022 report roughly 10^-3 to 10^0 au^-3 for an Oumuamua-like object at 95 percent confidence).

**Mode:** `specified`. **Status:** triangulated (Fig 1 plus two reviews with low overlap on the survey-selection point: Jewitt 2024 is a handbook chapter, Jewitt & Seligman 2023 an Annual Review). **Refuter:** publish a selection function for the Borisov survey and show it yields a density consistent with Pan-STARRS within small error; the per-slot objection then weakens.

### F3 - The anchor for "how common" is the measured sky, and it must not update

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."*

A number-density model is a frame; a characterized survey is an anchor. The model must be corrected by the survey, not the other way round. This is why an informal survey cannot be used to tighten a density: there is no fixed reference to range against. Siraj & Loeb 2022 and Moro-Martin 2022 give the underlying inventory (local stellar density, detection volumes, Poisson bounds); the figures decide that only a published selection function makes it an anchor rather than a frame.

**Mode:** `specified`. **Status:** triangulated (Fig 2 with the two survey-based reviews). **Refuter:** show a case where a model preference legitimately changes a published selection function without new measurements; then the anchor is movable and Fig 2 :33-34 (coherent drift) governs a different quantity.

### F4 - Local count to galactic population is a lossy transform; measure `R_T`

Fig 4 :20: *"Only the actors, the currency and the anchor change."* Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

Jewitt 2024 carries 0.1 au^-3 into roughly 10^4 bodies inside Neptune and roughly 10^26 in the Galaxy. Siraj & Loeb 2022 carry the same detections into 2 percent to 50 percent of stellar mass in ejected objects. These are not the same number, because the transform depends on the assumed SFD, which two detections cannot constrain (Jewitt et al. 2019; Moro-Martin 2022). The gap `R_T` between the local count and the galactic mass claim is the measurement, not an error to erase.

**Mode:** `specified`. **Status:** triangulated (Fig 4 with the independent local-count and mass-budget derivations in the world literature). **Refuter:** demonstrate an SFD-independent, invertible map from count density to mass density; then the round-trip gap is zero and the dead-reckoning warning does not apply.

### F5 - Instruments are improved from instruments already returning something

Fig 6 :32: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."* Fig 6 :33: *"Nobody specified a telescope from an account of Mars. A wandering point in the sky was already a reading, and every sharper instrument was built on the residual the last one produced."* Fig 6 :34: *"The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."*

Pan-STARRS returned a reading that fails to resolve the SFD; that residual is what Rubin/LSST and NEO Surveyor are built on (Siraj & Loeb 2022; Stahl & Betts 2025). The question is therefore not whether a better survey could exist; it is unreachable-at-this-budget, which issues a "more search" instruction, not an "import a new mechanism" instruction.

**Mode:** `general` for the instrument rule, `specified` for its application here. **Status:** triangulated (Fig 6 with Moro-Martin 2022, which records that pre-discovery work already anticipated using Pan-STARRS and then LSST). **Refuter:** show a survey designed from a pure description with no prior detection and no worse instrument to improve from; the instrument rule would then be wrong about this domain.

### F6 - "How common" is a comparison, and its threshold is not grounded

`THE_FORMULA.md`, "Composition": *"a plan is a sequence, a goal is a comparison, progress is a subtraction."* "Common" is a goal: a threshold relation between the measured density and an expected density. Fig 12 gives the grammar for a comparison, not the threshold value.

Jewitt et al. 2019 found that converting number density to mass density requires an SFD, and that with a single detected object the claim that the observed number density is "higher than expected" is not supported. Moro-Martin 2022 reports that inferred densities are generally higher than expected across plausible origins, but also that the observed value remains uncertain until more objects are detected. The disagreement does not shrink with more analysis of the same three objects, so Fig 9 :4-5 splits it rather than averaging it.

**Mode:** `specified`. **Status:** triangulated (the figure grammar plus two independent assessments that reach opposite emphases, which is corroboration of the split, not of either side). **Refuter:** state a grounded threshold for "common" and show both reviews satisfy it; the ungrounded-threshold finding then falls.

### F7 - More search, not another atom

Fig 8 :32: *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."* Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* Fig 7 :13: *"agreement compounds, evidence does not"*

Exotic one-off explanations (a nitrogen iceberg, a hydrogen-iceberg, an alien probe) are imports offered against a budget-limited residual. Fig 8 :40-43 distinguishes underivable-in-principle from unreachable-at-budget and prices a wrong atom above starting from primitives. The right move is to distribute search over independent surveys, not to mint a new object class per anomaly. Jewitt 2024 documents why the alien-probe reading fails on abundance grounds alone: with roughly 10^4 similar objects inside Neptune and a flux near 10^3 per year, the "why so many, and why miss Earth by 0.16 au" question is decisive.

**Mode:** `specified`. **Status:** triangulated (Fig 8 and Fig 7 with the survey-based abundance argument). **Refuter:** show the count residual is underivable in principle rather than budget-limited, by proving no possible survey could discriminate the SFD; then import would be legitimate and this finding fails.

### F8 - The reveal is a shape and a class, not a name

Fig 9 :32: *"you get a kind of thing, never the answer itself"* Fig 13 :121: *"Different routes can arrive at the same substance."*

Hopkins et al. 2026 predict a strong correlation between an ISO's ammonia abundance and its parent star's metallicity, infer near-solar metallicity for 2I/Borisov and lower metallicity for 3I/ATLAS, and state that the compositions of ISOs vary significantly between stars. This is exactly a constraint on a *kind* of parent, not a name: the observable is a production-rate ratio and the output is a metallicity range. From *How Intelligence Actually Works*: *"The projection that no instrument distinguishes from the thing is still a projection, which is why the lineage has to be kept even when the copy is perfect."* Fig 8 :39 is the limit: a search that finds no unique parent is not a proof that none exists.

**Mode:** `specified`. **Status:** triangulated (Fig 9 and Fig 13 with the composition model; the figure governs the shape, the paper supplies the measured axis). **Refuter:** exhibit a one-to-one map from a composition vector to a unique parent star, verified by a ground measurement; then the shape-not-a-name verdict is refuted for this domain.

### F9 - Source discrimination is a union-horizon matter

From *How Intelligence Actually Works*: *"A projection sinks below the union horizon when no observer, with any instrument any of them can build, can discriminate its origin."* Also: *"Being 'below the union horizon' is never a settled verdict, only a report that nobody has reached it yet."* From *The Hard Problem is About Source*: *"If several paths create the same behavior, then behavior is a projection with lossy information"* and *"the instrument is speaking only about what it measured, it cannot comment on the source."*

A green reading does not determine whether the source was one green light, blue plus yellow, RGB, CMYK, or something not yet discovered; the spectrometer, not the argument, resolved that case. For ISOs the analogous discriminators are isotope ratios and CO/N2 production ratios (Hopkins et al. 2026 reporting Opitom et al. 2026 and Salazar Manzano et al. 2026 for 3I/ATLAS). The reveal is exactly the set of parent systems that survive a given discriminator, and that set changes when the instrument changes.

**Mode:** `specified`. **Status:** single-source for the union-horizon term (one essay), triangulated at the level of the general source/projection claim (two essays plus Fig 13 :121) and corroborated by the composition paper. **Refuter:** produce a case where a reading uniquely determines its source with no instrument change and no lineage; the union-horizon framing would then add nothing.

### F10 - Ejection mechanisms are a habitat to enumerate, not a list to compose

Fig 11 :43: *"The habitat is enumerated, never composed."* Fig 11 :44: *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."*

Read off the world: giant-planet scattering (Raymond et al. 2018), cluster flybys, post-main-sequence mass loss, tidal shredding, exo-Oort release (Moro-Martin 2022; Fitzsimmons et al. 2023; Jewitt 2024). All mechanisms produce roughly 0.1 to 30 Earth masses per star, so mass alone gives no clear winner; the discriminators are velocity and composition (Fitzsimmons et al. 2023). The seat's power is asymmetric: introduction is available, exclusion is not, so a mechanism is not banished by a single failed fit.

**Mode:** `general` (enumeration rule), `specified` (the enumerated list). **Status:** triangulated (Fig 11 with three reviews that independently enumerate the same mechanisms). **Refuter:** derive one ejection mechanism from the others, or show the list is generated by composing a fixed vocabulary rather than read off observations; the habitat reading then fails.

### F11 - 1I and 2I are not isomers as written; they are a functional group

Fig 12 :117: *"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* Fig 12 :124: *"a substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*

1I is refractory and cometarily inactive; 2I is CO-rich and active. They do not share an atom inventory in the figure's sense, so the strong isomer claim fails as written. Both are ejected planetesimals, which is the functional group, with the qualifier (icy versus devolatilized, formation zone, ejection mechanism) deciding the member. See `06_isomers_and_order.md` for the fuller derivation and falsifier.

**Mode:** `specified`. **Status:** single-source for the figure definition of isomer, with the physics-facing check unmeasured. **Refuter:** show both objects share the full volatile inventory and differ only in arrangement; the isomer claim would then be revived and the functional-group reading would be the weaker one.

### F12 - All verification seats here share one evidence pool

Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool"* Fig 10 :42: *"A verifier that can reconstruct the claim cannot verify it."* Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

Every astronomy source in `10_source_ledger.csv` draws on the same three objects and largely the same Pan-STARRS detection volume. Their agreement is one witness wearing many names. The second seat in `11_audit.md` is also simulated and reads the same files, so its agreement is internal consistency, not corroboration. Survey tier and detection count are budget filters; only a ground measurement is a witness.

**Mode:** `general`. **Status:** triangulated (three figures with the documented co-citation structure of the literature). **Refuter:** find two surveys with genuinely disjoint selection functions and instruments that converge independently; then their agreement would carry weight and this finding would narrow.

---

## 4. Pre-registered refuter (written before the conclusion)

Per Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refused if any of the following holds:

1. A characterized survey yields a number density with negligible Poisson and SFD uncertainty, so the count residual is not per-slot and not budget-limited (kills F2, F5, F7).
2. An invertible, SFD-independent map from number density to ejected mass density is demonstrated, so `R_T` is zero (kills F4 and F6).
3. A composition vector is shown to identify a unique parent star by measurement, not by preference (kills F8 and F9).
4. Count and source are shown to share one anchor, so the union reading and the unbundling instruction are wrong (kills F1).
5. A seventh ejection mechanism is derived from the others, or the enumerated habitat is shown to be composed rather than read off the world (kills F10).

If any fires, the shape is withdrawn or narrowed. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Split the question into count and reveal before either is searched (F1). Do not trade one against the other.
2. Report number density per characterized survey slot with its Poisson interval; do not quote one scalar across dissimilar surveys (F2, F3).
3. Publish the round-trip gap when scaling a local count to a galactic population; label the mass-budget claim `specified`, not `grounded` (F4).
4. Treat the count question as unreachable-at-budget: fund and distribute independent survey search, not a new object class per anomaly (F5, F7). Use filters for the budget, witnesses for the verdict (F9, F12).
5. State the reveal as a class of parent systems plus the instrument that discriminates among it. Do not name a star (F8, F9).
6. Enumerate ejection mechanisms from the literature; keep velocity and composition as the discriminators (F10).
7. Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."* Send the generator, the shape claim and the refuter, not the conclusion.

---

## 6. Canonical usage check and retraction log

Two sources were read after the first five sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"* and stops at the limit of the instruments, recording the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the seat reads the ground; it does not ask the anchor to decide what the figures already settle. Design questions are answered by derivation, not escalation.

### Retractions and confirmations

| earlier reading in this audit | status after canonical check |
|---|---|
| First reading: Fig 8 :32 forbids more search, so a new physical mechanism must be imported to explain the abundance | **Retracted at re-census.** Fig 8 :40-43 separates underivable-in-principle from unreachable-at-budget. The count residual is the second, so the instruction is more search. Both readings are kept visible; the import is not applied. |
| First reading: "shape, not a name" forbids naming any parent-star property | **Narrowed.** The README's phrase governs a *missing* primitive, not a binding onto a measured property of a parent star. A metallicity range from ammonia production (Hopkins et al. 2026) is a provenanced measurement, not an invented primitive. Naming a unique star is still refused. |
| First reading: 0.1 au^-3 is a settled measurement of the population | **Downgraded to candidate, per slot.** It is a Poisson estimate from one characterized survey with an interval spanning orders of magnitude, and the second survey is uncharacterized. Kept as a bound term, not a verdict. |
| First reading: 1I and 2I are isomers | **Refused as written; functional group retained.** They do not share the figure's atom inventory. The stronger isomer claim needs a shared inventory and is left as a falsifiable test in `06_isomers_and_order.md`. |
| F1 union compound | **Canonically confirmed.** Fig 9 :54-58 is explicit about union versus partition and unbundling before search. |
| F8 shape not a name | **Canonically confirmed** for a unique parent; narrowed for a measured class constraint, per the missing-primitive qualification above. |
| Apparent strain Fig 8 :32 versus Fig 6 :34 | **Not strained after re-census.** Fig 8 :32 governs closure under a fixed atom set; Fig 6 :34 governs whether an instrument is already returning a failing reading. Different objects, matching the README's re-census rule. |

### Updated verdict

The shape survives: the count residual is per characterized survey slot and budget-limited, so more independent search is owed; the local-to-galactic scaling carries a round-trip gap that must be measured; the reveal is a class of parent systems plus a discriminating instrument, never a named star; the ejection habitat is enumerated, not composed. What does not survive is any single scalar "commonness" verdict, any one-to-one composition-to-parent mapping, any import offered against the budget limit, and the isomer claim as first written. After re-census: one narrow strain remains, the union-horizon term in F9 is single-source (one essay), and both are recorded rather than hidden.
