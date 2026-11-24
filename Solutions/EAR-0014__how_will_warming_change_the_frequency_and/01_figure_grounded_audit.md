# Figure-grounded audit: warming and compound extremes

**Mode of this document: `specified` on the per-domain claims, `general` on the structural shape, `gap` on the numerical magnitude.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** This is a simulated derivation checked for internal consistency against the figures. *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* No observation was re-analysed and no model was run here. The verdict reported below is a candidate, not a settlement. See `05_what_shape_means.md` section 6.

**Sources for figure quotes.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the verbatim extract with line numbers. Every figure string below is an exact substring of that file. World sources were opened on 2026-11-22 and are listed in `10_source_ledger.csv`.

---

## 0. The residual, stated in effect terms

The question asks *how warming will change the frequency and intensity of compound extremes*. Before choosing any figure line, state R as an effect:

- **Effect to be decided.** For a named compound-extreme slot (region, season, hazard pair, threshold definition), what does a change in global mean warming do to (a) the count of joint threshold crossings and (b) the magnitude of the joint exceedance?
- **Arity.** At least two conditions bind at once. A compound is not one hazard with a larger number attached.
- **Symmetry.** The operands are not freely swappable: a precondition (dry soil) and a hazard (heat) are ordered by role, and a succession (heat then fire) is ordered in time. A joint distribution over two hazards is not a symmetric conjunction in the sense that either operand can stand for the other in a decision.
- **Scale.** The extreme lives at event scale (hours to multiple years); the control parameter lives at global, multi-decadal scale. This is a cross-scale question, so Fig 4's membrane rule applies.
- **What each option leads to.** Option A (one global multiplier) gives a simple number, hides the live slot, and treats marginal and joint behaviour as the same object. Option B (per-slot, per-currency, union) gives separate frequency and intensity verdicts per compound type, keeps the slot visible, and records a refuter for each. We bind *per-slot, per-currency verdict with a stated refuter* as the sought-for shape before the run, so the preference is refusable like any other term (Formula, "Direction").

**R is not the global mean temperature.** Warming is the scenario filter that budgets the search (Fig 9 :60). The residual is the per-slot gap between the predicted joint-crossing behaviour and what the observing system actually returns.

---

## 1. Domain census, before choosing any figure line

Describe R by arity, symmetry and scale, then one line per domain with actors, currency and anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | partition or union | order by dependency |
|---|---|---|---|---|---|
| **D1 Physical climate** | greenhouse forcing, temperature and moisture gradients, distributions of daily T and P, teleconnections, soil-moisture feedback | radiative flux, probability of a state | instrumental record plus physical law (a measurement that does not move when a frame pushes it) | union: thermodynamic and dynamic contributions overlap | first; warming shifts the spectrum before any hazard is counted |
| **D2 Hazard statistics and detection** | thresholds, return periods, joint exceedances, dependence between hazards, reanalyses | count of crossings, magnitude of exceedance | observed joint-exceedance counts (a counter), with reanalysis as a lossy stand-in | union: marginal exceedance and joint dependence are distinct conditions binding at once | second; consumes the shifted distributions from D1 |
| **D3 Impacts and habitat** | soil moisture, vegetation, fire, water, energy, transport, health, governance | damage and cascade reach | impact records and losses | union: several sectors bind at once; compound is a specific compound not a mixture | third; consumes hazard occurrence from D2 |
| **D4 Verification and outreach** | model ensembles, reanalyses, attribution studies, expert readers | agreement and residual | the ground, never agreement | partition between frames only if their closures differ and their evidence pools do not | last; ranges against D1-D3, never negotiates with them |

**Partition or union.** The question is a **union of overlapping conditions**, not a partition of one hazard into sub-hazards. Fig 9 :55, *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :57, *"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."* A lever that reduces a single marginal hazard leaves the intersection standing. Verdicts must be kept per domain and never averaged into a single percentage.

**Dependency order (Fig 3).** Perception (detect the joint event) gives vocabulary (terms for precondition, multivariate, temporally compounding, spatially compounding) gives objective (say what counts as a change: frequency or intensity) gives planning (choose a lever) gives learn and carry. Fig 3 :20, *"The chain is ordered by dependency, not by importance."* The break in this literature is predicted between vocabulary and objective, because the objective of "more extreme" is not well defined for a vector (world source: Extreme value theory, *"there is no natural way to order a set of vectors"*). Fig 3 :27, *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

---

## 2. Figure census, quoted before concluding

The following lines were read from `03-FIGURES_TEXT.md` before any verdict was written. Where a line only fits with a strain, it governs another quantity and the census is redone (see section 6).

| figure | verbatim line | bearing on this residual | verdict |
|---|---|---|---|
| Fig 1 | Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* | forbids a single global multiplier | governs D2, D4 |
| Fig 1 | Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."* | global mean hides the live compound slot | governs D2 |
| Fig 1 | Fig 1 :27 *"A frame cannot score itself with a quantity it also produces."* | model agreement cannot score the model | governs D4 |
| Fig 2 | Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* | observations, not ensemble consensus, settle | governs D2, D4 |
| Fig 2 | Fig 2 :31 *"Independence, between two frames, is how little they draw on the same evidence."* | CMIP ensembles sharing reanalysis are one witness | governs D4 |
| Fig 2 | Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* | selecting agreeable readers cannot corroborate | governs D4 |
| Fig 2 | Fig 2 :40 *"agreement about the world is worthless when the agreeing frames share an evidence pool"* | one climate-modelling pool is one witness | governs D4 |
| Fig 2 | Fig 2 :42 *"Buy independence in proportion to the cost of being wrong."* | adaptation cost justifies independent instruments | governs D4 |
| Fig 3 | Fig 3 :20 *"The chain is ordered by dependency, not by importance."* | order the four domains | governs all |
| Fig 3 | Fig 3 :27 *"A link with no instrument is not a link that works. It is a link nobody has looked at."* | multivariate objective lacks a clean instrument | governs D2 |
| Fig 3 | Fig 3 :29 *"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."* | locate the break before judging models | governs D4 |
| Fig 4 | Fig 4 :20 *"Only the actors, the currency and the anchor change."* | same loop at event scale and global scale | governs all |
| Fig 4 | Fig 4 :22 *"Only methods cross up. Only head starts come down."* | send the per-slot method, not a recorded number | governs D4 |
| Fig 4 | Fig 4 :30 *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* | any global-to-local condensation needs R_T | governs D1-D2 |
| Fig 6 | Fig 6 :23 *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* | palaeo and historical archives are imports | governs D2 |
| Fig 6 | Fig 6 :32 *"An instrument is not built from a description. It is improved from a worse instrument already returning something."* | observing systems improved from existing ones | governs D2 |
| Fig 7 | Fig 7 :12-13 *"same closure, handed along; agreement compounds, evidence does not"* | model handoffs do not add evidence | governs D4 |
| Fig 8 | Fig 8 :32 *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."* | more CMIP runs alone add no new physics | governs D1, D4 |
| Fig 8 | Fig 8 :39 *"So a search that finds nothing is never a proof of absence."* | failure to find a multiplier is not silence | governs the gap |
| Fig 8 | Fig 8 :45 *"Two frames together reach what neither reaches alone."* | observations plus process understanding | governs D1-D2 |
| Fig 8 | Fig 8 :51 *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"* | provenance of proxies and reanalyses | governs D2 |
| Fig 9 | Fig 9 :27-28 *"describe it before you go looking, or any frame you pick will seem to fit"* | residual described before picking a model frame | governs D4 |
| Fig 9 | Fig 9 :32 *"you get a kind of thing, never the answer itself"* | no global number from the figures | governs the gap |
| Fig 9 | Fig 9 :55 *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* | compound is a union | governs D1-D3 |
| Fig 9 | Fig 9 :57 *"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."* | compound has its own loop | governs D1-D3 |
| Fig 9 | Fig 9 :60 *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* | warming level is a filter | governs all |
| Fig 10 | Fig 10 :24 *"the ground does not decay, the channel does"* | observing networks decay, climate does not | governs D2 |
| Fig 10 | Fig 10 :42 *"A verifier that can reconstruct the claim cannot verify it."* | do not teach the framework before the verdict | governs D4 |
| Fig 10 | Fig 10 :52 *"Bring a characterised residual, never the source."* | first contact carries the residual | governs D4 |
| Fig 11 | Fig 11 :40 *"An improvement that does not change contact changes nothing, however much it improves."* | model resolution helps only where it changes contact | governs D1-D2 |
| Fig 11 | Fig 11 :43 *"The habitat is enumerated, never composed."* | list actors by contact | governs D3 |
| Fig 11 | Fig 11 :44 *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."* | cascades several steps out | governs D3 |
| Fig 11 | Fig 11 :49 *"An actor's valence is relative to the residual, not a property it carries."* | warming flips sign across regions and hazards | governs D1, D3 |
| Fig 11 | Fig 11 :51 *"No standing list of good actors survives a change of residual."* | no universal hierarchy of hazards | governs D3 |
| Fig 11 | Fig 11 :52-53 *"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."* | impact cascades are second and third order | governs D3 |
| Fig 12 | Fig 12 :87 *"is it about which is larger, rather than both being present? Yes."* | an extreme is a threshold comparison | governs D2 |
| Fig 12 | Fig 12 :117 *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* | hazard pairs over a shared atom set are isomers | governs D2, D3 |
| Fig 12 | Fig 12 :123 *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."* | different hazard pairs share a functional form | governs D2 |
| Fig 12 | Fig 12 :125 *"A composition costs in two currencies, and they do not add."* | frequency and intensity do not add | governs D2 |
| Fig 13 | Fig 13 :20 *"ordering, so more and less can be said"* | the distribution is a spectrum | governs D1-D2 |
| Fig 13 | Fig 13 :31-32 *"a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise"* | residual compounds through an amplifying chain | governs D1 |
| Fig 13 | Fig 13 :76 *"A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is."* | warming trend is not a spatial pattern | governs D1 |
| Fig 13 | Fig 13 :115 *"The set is closed. The arrangements are not. That gap is why import exists."* | compound types are unbounded arrangements | governs D2 |
| Fig 13 | Fig 13 :134 *"Unreachable is a verdict here, not a silence"* | the numeric gap is a verdict | governs the gap |
| Operators | Operators :48 *"a threshold relation between two quantities"* | comparison ⋛ is the extreme-defining operator | governs D2 |
| Operators | Operators :52 *"a goal is a comparison, which is why a vocabulary without it cannot state one"* | a threshold is a goal-like term, not a physical field | governs D2 |
| Symbols | Symbols :38-40 *"It is the aim, not only the error signal, and it is always a slice: what cannot be perceived yet is residual and simply cannot be read."* | R is per-slice and partial | governs all |

---

## 3. Findings, one loop per domain

### F1: Compound extremes are a union, not one hazard with a bigger number (D1-D3, decisive)

Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :57: *"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."*

A heat-and-drought compound is not "heat plus drought" in the sense that a lever on heat alone transfers to the compound. The intersection is where both conditions bind. Fig 9 supplies the shape: one lever clears the region where only one condition holds and leaves the intersections standing.

**World corroboration.** Zscheischler et al. 2018, *Nature Climate Change* 8:469-477: *"Traditional risk assessment methods typically only consider one driver and/or hazard at a time, potentially leading to underestimation of risk, as the processes that cause extreme events often interact and are spatially and/or temporally dependent."* Ridder et al. 2020, *Nature Communications* 11:5956: *"the probability of the near flood event in Groningen in 2012 or compound hot and dry summers is widely underestimated, when classical univariate statistical methods are used."* Zscheischler et al. 2020, *Nature Reviews Earth & Environment* 1:333-347: *"the complex nature of compound events results in some cases inevitably fitting into more than one class, necessitating soft boundaries within the typology."*

**Mode:** `specified`. **Status:** triangulated (Fig 9 plus two figures' worth of world reporting, but the three climate sources share a Zscheischler-led evidence pool, so they count as one witness, not three). **Refuter:** show a single scalar driver that determines the frequency and intensity of every compound type with no residual left at the intersection.

### F2: The residual is per slot; global mean warming is a budget filter (D2, D4)

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

A global mean warming level orders scenarios and budgets the search. It is not the witness for a verdict about a hot-dry compound in a given region and season. IPCC AR6 WG1 Chapter 11 (Seneviratne et al. 2021) says *"Projected percentage changes in frequency are higher for the rarer extreme events (high confidence)"* and reports regional hotspots rather than one number. Ridder et al. 2020 identify *"hotspots of multivariate CEs including many socio-economically important regions such as North America, Russia and western Europe,"* a per-slot result.

**Mode:** `general` for the indexing rule, `specified` for the per-slot claim. **Status:** triangulated (Fig 1 and Fig 9 are different figures; the world sources share a pool). **Refuter:** a sufficient statistic in global mean warming that preserves the per-slot residual for all compound types.

### F3: Frequency and intensity are two currencies and do not add (D2, decisive for the question's own wording)

Fig 12 :125: *"A composition costs in two currencies, and they do not add."* Operators :48 defines ⋛ as *"a threshold relation between two quantities"*; Fig 12 :87 gives the test *"is it about which is larger, rather than both being present? Yes."* A hazard is declared by crossing a threshold. Once a threshold exists, two distinct quantities appear: how often it is crossed and how far beyond it the system goes.

Fig 13 :20 calls the distribution *"ordering, so more and less can be said"* (spectrum), while Fig 13 :22 calls a gradient *"a difference that can be spent"*. Crossing frequency is a count over an ordering; exceedance magnitude is a spent difference. They are different terms, not two views of one.

**World corroboration, low overlap with the framework.** IPCC AR6 Ch11: *"Changes in extremes can be examined from two perspectives, either focusing on changes in frequency of given extremes, or on changes in their intensity."* Extreme value theory (Wikipedia, statistics): *"For POT data, the analysis may involve fitting two distributions: One for the number of events in a time period considered and a second for the size of the exceedances."*

**Mode:** `general` on the structural split, `specified` on applying it to joint exceedances. **Status:** triangulated (Fig 12 plus an independent statistical source). **Refuter:** a lossless single index that preserves both count and magnitude for a compound pair across all slots.

### F4: A shift of an ordering changes crossings more than it changes the mean (D1-D2)

Fig 13 :28: *"They alternate, and the alternation is where both the recursion and the randomness come from."* Fig 13 :31-32: *"a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise."* Fig 12 :87 and Operators :52 (*"a goal is a comparison, which is why a vocabulary without it cannot state one"*) place a threshold at the point where an ordering is read against a goal. A small motion of the ordering near a fixed threshold can convert a large fraction of previously sub-threshold draws into crossings. That is why tail percentages move faster than the mean.

**World corroboration.** IPCC AR6 Ch11: *"The frequency of hot temperature extreme events will very likely increase nonlinearly with increasing global warming, with larger percentage increases for rarer events."* Also: *"even relatively small incremental increases in global warming (+0.5°C) cause statistically significant changes in extremes on the global scale and for large regions (high confidence)."* An empirical illustration from *npj Natural Hazards*' news coverage, fetched 2026-11-22: *"Fire weather of this severity was roughly tenfold more likely than in the late twentieth century."*

**Mode:** `specified`. **Status:** triangulated (Fig 13 plus the IPCC assessment, low overlap). **Refuter:** a demonstrated distribution shift under warming that leaves tail-crossing frequency unchanged across the same slots.

### F5: A temporal gradient is not a spatial pattern (D1)

Fig 13 :76: *"A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is."* Warming is a gradient bonded to time; a spatial pattern of drought-prone regions is a gradient bonded to space. Composing them is legal, but they cannot be substituted.

IPCC Box 11.1 separates thermodynamic from dynamic contributions and says *"the dynamic contributions show large differences across models and are more uncertain than thermodynamic contributions."* The confidence difference is exactly what Fig 13 :76 predicts: one bonded term is better anchored than the other.

**Mode:** `specified`. **Status:** triangulated (Fig 13 plus IPCC). **Refuter:** a result that treats a spatial hotspot map as equivalent to the time trend of the same hazard and retains the same confidence.

### F6: Contact cascades carry the impact, and valence is relative to the residual (D3)

Fig 11 :43: *"The habitat is enumerated, never composed."* Fig 11 :44: *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."* Fig 11 :52-53: *"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."*

The DDT example is not decoration. It is a figure-given precedent from earth systems: a residual that mattered was three steps out. For heat and drought the enumeration runs soil moisture, vegetation, fire, air quality, health, energy, waterway transport, grain markets. Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."* Fig 11 :51: *"No standing list of good actors survives a change of residual."* This is why warming does not have one sign: IPCC reports increases in agricultural and ecological drought in about half of inhabited regions at 4 °C and *"only two regions (NEAF, SAS) would experience decreases in agricultural and ecological drought (medium confidence)."*

**World corroboration, genuinely low overlap.** Niggli et al. 2022, *PLOS Climate* 1(8):e0000057: *"Our analysis shows that cascading impacts can propagate through numerous sectors with far reaching consequences, potentially being able to destabilize entire socio-economic systems."* Alcántara-Ayala 2025, *npj Natural Hazards* 2:54: *"Hazards increasingly interact in ways that are non-linear, cross-scalar, and temporally dynamic, producing cascading effects that extend far beyond the initial point of impact."* Cascading failure (Wikipedia, engineering and network science): *"a failure of a small fraction of nodes in one network can trigger an iterative cascade of failures in several interdependent networks."*

**Mode:** `specified`. **Status:** triangulated (Fig 11 plus low-overlap engineering and disaster-risk sources). **Refuter:** an impact study in which first-order hazard contact fully accounts for the loss, with no residual three steps out.

### F7: The chain breaks between vocabulary and objective (D1-D2)

Fig 3 :25-26: *"The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."* Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

For a two-hazard vector there is no unique ordering of severity. Extreme value theory (Wikipedia): *"One problem that arises is that one must specify what constitutes an extreme event. Although this is straightforward in the univariate case, there is no natural way to order a set of vectors."* Zscheischler et al. 2020: *"the understanding, analysis, quantification and prediction of such events is still in its infancy."*

So "warming makes compound extremes worse" is not yet an objective. It is a direction held as a preference. The formula's "Direction" discipline requires writing down what an answer would look like and binding it; the bound term here is *per-slot joint-crossing count plus exceedance magnitude with an enunciated refuter*.

**Mode:** `specified`. **Status:** triangulated (Fig 3 plus an independent statistical source). **Refuter:** a unique, instrument-backed ordering of multivariate compound severity that works across hazard pairs without a goal declaration.

### F8: The anchor is the observing system; the model pool is not independent (D4)

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence."* Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool."* Fig 10 :24: *"the ground does not decay, the channel does"*; Fig 10 :25-26 names *"stale percepts, dropped transients, saturated metrics, pooled readings."*

An ensemble of climate models is not a set of independent witnesses if they share reanalysis products, parameterisations and assessment literature. Ridder et al. 2020 are explicit about the dependence: *"We did not test the sensitivity of our results to alternative reanalyses for individual variables because taking one component of a CE (e.g., wind) from an alternative source would create physical inconsistencies with another component from ERA-Interim (e.g., storm surge)."* That is an honest dependence declaration, and it reduces independence rather than removing it. An *npj Natural Hazards* comment fetched 2026-11-22, *"Building on quicksand: the paradox of AI advances and declining in situ networks in hydrometeorology,"* warns *"High-quality AI training data are dependent upon in situ measurements for adjustment, assimilation, and calibration."* The channel decays; the ground does not.

Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."* Adaptation decisions justify independent instruments.

**Mode:** `specified`. **Status:** triangulated (Fig 2 plus a low-overlap instrumentation source). **Refuter:** two studies using the same reanalysis counted as two independent confirmations of the same joint-probability result.

### F9: Imports need a source gate and a shadow test (D2)

Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* Fig 8 :51: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"*. Palaeo records, documentary archives, reanalyses and satellite products are frames with differing closures brought into the hazard frame. IPCC AR6 Ch11: *"Evidence of observed changes in extremes and their attribution to human influence... has strengthened since AR5."* That strengthening is only a witness if the provenance of each line of evidence is recorded, not pooled.

Fig 6 :32: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."* This is why the remedy for a missing compound-extreme observation is a better joint observing system, not another description of the desired dataset.

**Mode:** `specified`. **Status:** single-source on the framework side (Fig 6 and Fig 8 are separate figures but one framework pool), corroborated by IPCC's own emphasis on multiple lines of evidence. **Refuter:** an imported proxy used as ground with no source characterisation and no check that it explains a gap.

### F10: The numerical multiplier is a declared gap, not silence (all domains)

Fig 9 :32: *"you get a kind of thing, never the answer itself."* Fig 13 :134: *"Unreachable is a verdict here, not a silence."* Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

No figure line returns a percentage change in compound-event frequency, a multiplier on intensity, or a region-specific return-period shift. The figures fix the shape of the answer: union, per-slot, two currencies, threshold crossing, cascade, independence. The number must be settled by the ground (observations and instruments), not derived from the metalaws. This is a `gap` of the **shape-not-a-name** kind, and `unreachable at this budget` for a global single number, not `underivable in principle`. Per Fig 8 :39 and the formula's step 7, those are different facts with different instructions: the remedy here is a ground reading, not an import of another atom.

**Mode:** `general`. **Status:** `gap`, recorded plainly. **Refuter:** a figure line that yields a numerical multiplier without an observation.

### F11: Compound types are arrangements over a closed set, so the typology cannot be exhausted (D2)

Fig 13 :115: *"The set is closed. The arrangements are not. That gap is why import exists."* Fig 13 :118: *"infinite effort inside a finite reach."* The four types in Zscheischler et al. 2020 (preconditioned, multivariate, temporally compounding, spatially compounding) are a current enumeration of arrangements, not a closed taxonomy; the paper itself says *"necessitating soft boundaries within the typology."*

**Mode:** `general` for the structural claim, `specified` for the current typology. **Status:** triangulated (Fig 13 plus the typology source). **Refuter:** a proof that the set of compound arrangements over the held climate atoms is finite and has been enumerated.

---

## 4. Pre-registered refuter (written before the conclusion)

Per the seat rule, a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. A single scalar (global mean warming) is a sufficient statistic for the frequency and intensity of all compound types, leaving no per-slot residual.
2. Frequency and intensity can be combined into one lossless index across all slots (Fig 12 :125 fails).
3. A shift of the underlying ordering leaves joint tail-crossing frequency unchanged across the same slots (Fig 13 :31-32 fails).
4. Two studies drawing on the same reanalysis are counted as independent confirmations (Fig 2 :40 fails).
5. A figure line yields a numerical global multiplier without a ground reading (the gap closes the other way).
6. A lever that clears one marginal hazard also clears the compound intersection (the union reading fails).
7. First-order hazard contact fully accounts for the loss, with no residual three steps out (Fig 11 :52-53 fails).

If any fires, the corresponding finding is withdrawn, not softened. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Report **per slot and per currency**: joint-crossing frequency and exceedance magnitude are separate verdicts (F2, F3).
2. Name the question a **union** and refuse the single-multiplier framing (F1). A single lever leaves intersections standing.
3. State the **mode on every claim**. The `general` shape is not a `specified` number and neither is `grounded` (F10).
4. Put the **observing system** in the centre: independent joint observations, not ensemble agreement, are the anchor (F8). Fig 2 :42 prices independence by the cost of being wrong.
5. **Enumerate the habitat outward** to second and third order before estimating impact (F6). The figure's own earth-systems example is DDT reaching the eagles.
6. Write the **refuter before the run** (section 4), and send the generator, not a recorded number (Fig 4 :22-25).

---

## 6. Canonical usage check and strain log

Two local canonical sources were read after the first five sections and govern how the figures may be used: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/figures/THE_FORMULA.md`. The README says the figures *"outrank everything else in the repo"* and that *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* It limits the framework to *"what a missing thing would have to look like (a shape, not a name)"*, then stopping at the limit of the instruments. That is the authority for F10.

### Strains and re-census

| apparent strain | handling | outcome |
|---|---|---|
| Fig 9 :55 (union) versus a single warming scalar that scales all hazards | Re-census: the scalar is a scenario filter (Fig 9 :60), not a member of the union | dissolved, filter and witness separated |
| Fig 13 :76 (gradient over time versus space) versus hotspot maps that look like trends | Re-census: two different states bonded to the gradient | dissolved, not strained |
| Fig 12 :125 (two currencies) versus IPCC's joint reporting of "frequency and/or intensity" | Re-census: "and/or" is a reporting convenience, not a claim that the quantities add; the statistical source fits two distributions | dissolved with a note |
| Fig 11 :49 (valence relative to residual) versus a "warming increases compound extremes" headline | Re-census: the headline holds a preference, not a per-slot term; IPCC itself reports two regions with decreases | dissolved, sign kept per slot |
| Fig 1 per-slot residual versus global mean warming as the control parameter | Re-census: control parameter is a filter, residual is the per-slot gap | dissolved, recorded in F2 |
| Numerical gap versus "unreachable" | Re-census with Fig 8 :39: underivable in principle and unreachable at this budget are different facts | kept as a live limit, not a defect |

**Live strain, named not hidden.** The comparison operator ⋛ is defined as *"a threshold relation between two quantities"* (Operators :48), while a compound extreme is a joint exceedance of two hazards. Treating the pair as one quantity at the decision level is a level-relativity move (Fig 12 :104 permits a settled molecule to become an atom), but whether a joint pair counts as one quantity needs an instrument, not an argument. It is recorded as a type question in `06_isomers_and_order.md` and `08_expert_verification_packet.md`.

### Retraction and confirmation log

| earlier reading | status after canonical check |
|---|---|
| "warming raises every compound extreme" | **Retracted.** Sign is per slot and per residual (Fig 11 :49); IPCC reports regional decreases. |
| "global warming level is the ground" | **Retracted.** It is a filter for the budget (Fig 9 :60); the ground is the observing system (Fig 2 :29). |
| "one global multiplier can be derived from the figures" | **Retracted and replaced by a gap.** Fig 9 :32 and Fig 13 :134 forbid it. |
| "more models will settle the number" | **Retracted.** Closure is idempotent (Fig 8 :32); agreement from one pool is one witness (Fig 2 :40). |
| "compound = heat plus drought" | **Narrowed to a union compound** (Fig 9 :55-57). |
| "frequency and intensity are one risk index" | **Refused** (Fig 12 :125). |
| Union, per-slot indexing, two currencies, cascade, independence requirement | **Confirmed** by re-reading the verbatim figure text and the canonical usage rule. |
| Shape-not-a-name limit | **Confirmed and narrowed.** Fig 9 :32 and the README govern a missing thing; naming a held atom (for example a hazard pair) is a binding, not an invented primitive. |

---

## 7. Updated verdict

The shape survives: compound extremes are a union of overlapping conditions; the residual is indexed per slot; frequency and intensity are two currencies read at a threshold; warming shifts an ordering so rarer crossings move fastest; a temporal gradient is not a spatial pattern; impacts cascade several steps out with residual-relative valence; the anchor is an independent observing system, not model agreement. The number does not survive as a figure-derived result. It is a declared `gap`, owed to the ground. Strains after re-census: one live type question on the operand of ⋛ at the compound level, named in section 6. Mode: `specified` per domain, `general` on the shape, `gap` on the magnitude, not `grounded`, and simulated throughout.
