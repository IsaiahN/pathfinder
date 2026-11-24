# Figure-grounded audit: EAR-0022, AMOC stability and the observation channels that track it

**Mode of this document: `specified`, with `general` on the structural shape and `gap` on the numerical tipping date. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, opened 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the oceanographic question it reports on. No mooring was deployed, no reanalysis was recomputed, no measurement was taken.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md` and `FRAMEWORK/reference/FIGURES_README_canonical.md` are the local framework primaries. World sources are secondary and are listed with author, venue, year, accessed date and a quote in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is a frame's belief about the overturning: a model's initial state and forcing, a reconstruction's transfer function, an index's assumed relationship to transport.
- **a** is what the frame does: run a freshwater hosing experiment, hold a mooring array, fit an SST fingerprint, apply an observational constraint to a CMIP6 ensemble.
- **Γ(b,a)** is the prediction: an overturning strength in sverdrups, a percentage weakening by 2100, a position on a stability diagram.
- **o′** is what the Atlantic returns: transport at 26°N, salinity at 34°S, deep convection in the Labrador and Irminger Seas, subpolar SST, regional rainfall.
- **s** is the slot. Slots include latitude (26°N, subpolar, 34°S), variable (volume transport, heat transport, freshwater transport, SST), instrument (mooring, float, cable, reanalysis, proxy), and timescale (days, years, decades, centuries, millennia).

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The question asks for two things that do not share one anchor:

1. **Stability.** In effect terms this is not a noun but three distinct verdicts. (a) Trend: is Γ(b,a) drifting away from a historical baseline? (b) Variability: how much of Γ(b,a) is weather and internal variability rather than forced change? (c) Threshold: is there a control value past which the circulation changes qualitatively, and how far is the present state from it? These have different instruments and cannot be averaged. Fig 12 :87 calls a threshold *"a threshold relation between two quantities"*; Operators table :52 says *"a goal is a comparison, which is why a vocabulary without it cannot state one."* A stability scalar that merges trend, variance and threshold is a category error, not a conservative summary.
2. **Observations.** In effect terms this is a channel-selection question: which channels range against a ground that does not update, and which merely correlate with other channels. The ground test is explicit:

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."** (Fig 2 :29, continuing :30 *"you push on it, it is not an anchor."*)

Bind the sought-for shape as an ordinary term before the run (Formula, "Direction"): the answer would be (i) three separable stability conditions with their own instruments and refuters, (ii) a classification of observation channels into anchors and instruments with the test that separates them, and (iii) an explicit stop where no held instrument can resolve the distance to a threshold. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the pre-registered refuter in section 5 can fire on it.

**Anchor test applied to the candidate channels.** Direct transport arrays are counters: the RAPID project says it has *"pioneered the use of arrays of moorings to measure the variability of the meridional overturning circulation (MOC), sustaining the observations for more than 20 years"* (RAPID, 2026). A mooring does not change its reading because a model changes its projection. SST fingerprints, model ensembles and IPCC confidence language all move when pushed by a reanalysis choice, a bias correction or an expert elicitation; they are instruments at best. This is a structural classification of channels, not a claim that any one array is perfect.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry and scale of R

- **Arity.** Each observation channel is a two-place relation (prediction versus return) indexed per slot. The threshold verdict is a three-place comparison: overturning strength, a critical value, and a control variable (freshwater input). That is a comparison bond, not a symmetric conjunction (Fig 12 :87; Operators table :49-52). It is ordered, not interchangeable: adding freshwater to the North Atlantic is not the reverse of removing it.
- **Symmetry.** The system shows hysteresis and bistability in box models and in some intermediate-complexity models, while comprehensive GCMs typically show a single equilibrium that recovers (Wikipedia, AMOC article, section "Stability and vulnerability"; Lenton et al. 2008). A pooled "how stable" number erases the sign of that difference. Fig 12 :121 governs: *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."*
- **Scale.** Five scales are in view at once: days to years (RAPID variability), 2004 to present (the direct array record), 1900 to present (reconstructions and reanalyses), millennia (paleo proxies, Dansgaard-Oeschger events), and 1,700 to 4,400 model years (hosing experiments). The boundary between them is a filter, not a wall:

> **"The membrane is the boundary between the sizes, and the rule about what may cross it. Not a wall: a filter with a direction."** (Fig 4 :21)
> **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."** (Fig 4 :30)

The transform between a mooring record and a threshold claim is lossy, so the round-trip gap R_T must be measured (section 11 of this folder).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 Direct observing arrays** (in situ transport) | RAPID at 26°N, OSNAP in the subpolar North Atlantic, SAMBA at 34°S, Florida Current cable, Argo floats | volume and heat transport in Sverdrups, freshwater transport FovS | yes: measured transport; the mooring does not update on a model's opinion | admitted |
| **D2 Indirect indices and fingerprints** (remote reading) | subpolar SST "cold blob", subpolar gyre index, North Atlantic carbon sink, dynamic sea level, CERES and Argo heat-flux products | correlation with overturning state | no independent anchor on its own; must be ranged against D1. An instrument that reads green *"cannot comment on the source"* (essay, Hard Problem is About Source) | admitted as instrument, not as anchor |
| **D3 Models and projections** (closed computational frame) | CMIP5/CMIP6 GCMs, EMICs, the CESM hosing experiment of van Westen et al. 2024 | percentage weakening, tipping threshold in Sv of freshwater forcing | yes but biased: the ground pays only where a model reproduces the observed freshwater transport; van Westen et al. report a *"well-known bias in CMIP phase 3, phase 5, and phase 6 models"* | admitted with the bias recorded |
| **D4 Paleo and reconstruction records** (sediments, corals, ice cores) | Dansgaard-Oeschger and Heinrich event records, coral and sediment SST, 120-year SST-difference series | inferred AMOC strength and stability over centuries to millennia | yes: geological archive does not update, but dating and proxy transfer functions are instruments whose limits must be stated | admitted |
| **D5 Assessment and expert judgment** (IPCC, tipping-point assessments, elicitation) | assessors, workshop experts, confidence language | "very likely", "medium confidence", thresholds in degrees of warming | no independent anchor; the anchor is the underlying ground, never the consensus. A confidence label is a filter for the budget, not a witness | admitted as filter only |
| **X1 A single global "AMOC stability index"** | an unspecified scalar | stability | **no** nameable anchor that returns one number independent of a frame's weighting | not a domain yet |
| **X2 The subpolar gyre as a proxy for the whole AMOC** | subpolar gyre | gyre strength | measurable, but RAPID reports *"meridional coherence of the MOC appears much more complicated than previously expected"* and the gyre can *"collapse independently of it"* (Wikipedia, Observations) | absorbed into D1/D2 as a separate slot, not the whole |

X1 fails the anchor test and is excluded before any figure line is applied to it. X2 is not excluded as a measurement, it is re-slotted as its own domain. These are structural exclusions, not claims that the gyre is unimportant or that experts never help.

### 1.3 Partition or union

D1 and D2 overlap: a fingerprint is useful only where it has been ranged against transport, so the overlap is a compound with its own loop. D1 and D3 overlap: observational constraints are imports into model ensembles (Portmann et al. 2026). D3 and D4 overlap: paleo records calibrate hosing experiments (van Westen et al. 2024). D2 and D5 overlap: confidence language summarizes fingerprints and models. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are:

- **C1 Trend is resolved.** A trend claim needs a baseline and a record long enough that internal variability does not dominate. RAPID states that *"Observational data needs to be collected for a prolonged period to be of use"* (Wikipedia, Observations, quoting the array's own interpretation). A 20-year record can show variability and a downturn; it cannot by itself fix a century-scale trend.
- **C2 Variability is separated from forced change.** *"The MOC varies on timescales of days to a decade, where previously the expectation was for variability on timescales of decades to centuries"* (RAPID). If the observing frame has no term for fast variability, it will read weather as climate.
- **C3 Threshold distance is observable.** This requires a physics-based diagnostic, not a statistical proxy. van Westen et al. 2024 propose *"the minimum of the AMOC-induced freshwater transport at the southern boundary of the Atlantic"* and report that *"reanalysis products indicate that the present-day AMOC is on route to tipping"* while admitting the products are *"too short (maximum of ∼100 years) at the moment to adequately estimate the distance to the FovS minimum."*

A single lever, for example "deploy more moorings at 26°N", clears C1 and part of C2 and leaves C3 standing, because the threshold diagnostic lives at 34°S (Fig 9 :55). This is why the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the array resolve overturning at all, and at which latitude?) → 2 vocabulary (do we hold a term for the stability-relevant quantity, namely freshwater transport FovS, rather than only volume transport?) → 3 objective (what would count as "stable": no trend, no crossing, or recovery after perturbation?) → 4 planning (which array, which reanalysis, which model ensemble?) → 5 learn and carry (obs constraints, bias corrections, sustained records).

The middle link is where the field breaks. "Stable" is not returned by an instrument. The classical variance and lag-1 autocorrelation indicators are proxies for an approaching bifurcation, and van Westen et al. 2024 report that *"we find no consistent increase in the classical early warning indicators for various 300-year periods before the AMOC collapse"* and that *"over the full time series, these quantities decline when approaching the tipping point and, hence, are not reliable early warning indicators."* Having terms for what the situation affords was taken for a dictionary and it is a grammar (Fig 12 :113-115). Most effort lands above the break because that is where measurements already exist (Fig 3 :29-30).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs indexing of every channel, not the ocean's physics |
| 2 The Ground | anchor test; independence; correlation valence | governs anchor versus instrument, and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order for "stable" |
| 4 The Membrane | kernel fixed across sizes; R_T between record and claim | governs cross-scale transfer from mooring to tipping claim |
| 5 Mint Pipeline | three guards as product; settlement is necessary not sufficient | governs why a new diagnostic is not a new term by fiat |
| 6 Closure / Reachability | import is the only operator that moves the wall; instruments improved from worse instruments | governs observation-constrained models and the 34°S diagnostic |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs "more models" and "more proxies" as non-progress |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs two independent-ish research groups and the source gate |
| 9 Leave / Arrive | union versus partition; describe residual before choosing frame; filters not witnesses | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; bring a characterised residual | governs short records, saturated metrics and outreach order |
| 11 The Habitat | enumeration, not composition; contact cascades three steps out; valence relative to residual | governs which variables belong in the observation habitat |
| 12 The Bond | comparison, cycle, functional group, isomer, two currencies | governs threshold type and the relation among stability conditions |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop on numerical tipping distance |
| Operators table | ⋛ comparison; ¬ refutation; open price of unary operator | governs the threshold relation and the pre-registered refusal |
| Symbols table | `R` is the aim and always a slice; the ground is the anchor | governs the effect restatement in section 0 |

Strain test applied during this census: an early attempt to apply Fig 13's six-term physical substrate directly to AMOC quantities only fit by calling salinity a kind of spectrum and overturning a kind of gradient. That is a strain, so Fig 13 does **not** govern the physical decomposition of the AMOC. Re-census sent Fig 13 to the honest-stop role only (section 6, strain S1). A second strain arose from reading Fig 2 :35 (*"A mirror cannot correct you"*) as a ban on expert assessment. Re-census assigns Fig 2 to verdict weight and Fig 9 :60 to budget allocation; consensus is a filter, not a witness (strain S2). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about observing systems or model behaviour, `grounded` only if settled by a measurement. None is `grounded`. World sources are secondary and never flip a figure verdict.

### F1: The question is a union of three stability conditions and two observation classes

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 9 and Fig 12, low overlap: unbundling rule versus bond typology).**

The figure lines are quoted in section 1.3. The unbundled conditions C1 (trend), C2 (variability), C3 (threshold) and the observation classes (anchor, instrument) have different instruments. The world agrees in effect: the IPCC says the AMOC is *"very likely to weaken over the 21st century for all emissions scenarios"* yet has only *"low confidence in the magnitude of the trend"* and *"medium confidence that there will not be an abrupt collapse before 2100"* (IPCC AR6 WG1 SPM C.3.4, 2021). One sentence contains three different epistemic statuses. Reading it as one stability score is the aggregation error Fig 1 :22 names.

**Refuter:** a single observation channel that resolves trend, variability and threshold distance with no residual left in any one of them, such that the three verdicts reduce to one scalar without information loss. If such a channel exists and is demonstrated, F1 fails.

### F2: Direct transport arrays are the anchor; fingerprints are instruments that cannot name their source

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 2, Fig 6 and the source essay, low overlap: anchor rule versus proto-instrument rule versus metamerism).**

> **"you push on it, it is not an anchor."** (Fig 2 :30)
> **"An instrument is not built from a description. It is improved from a worse instrument already returning something."** (Fig 6 :32)
> **"your words are borrowed too, so describe the effect"** (Fig 9 :30), **"rather than the cause"** (Fig 9 :31)

The RAPID array has sustained *"observations for more than 20 years"* at 26°N (RAPID, 2026) and is the counter against which proxies and models are checked. The essay *The Hard Problem is About Source* gives the mechanism for why a fingerprint cannot replace it: an instrument that detects green *"cannot comment on the source,"* so yellow+blue, RGB, CMYK or an undiscovered scheme all read the same. A subpolar SST cold blob has many possible sources, and Wikipedia reports that *"cold-blob trends alone cannot be used to analyze the strength of the AMOC"* because low cloud cover and the North Atlantic oscillation also contribute. What is owed is a discriminator, not a name.

Portmann et al. 2026 demonstrate the correct use of instruments: they combine the RAPID observed mean (2005 to 2023) with 19 observed SST and SSS variables under ridge-regularized regression and obtain a constrained weakening of *"51 ± 8% (90% probability)"* against a multimodel *"32 ± 37%"*. The constraint is an import from D1 into D3 with a source gate; it is not a new anchor.

**Refuter:** a demonstration that an SST or carbon-sink index preserves its ranking of AMOC states under a change of source that leaves the transport unchanged, with no transport measurement used in validation. That would make the index an anchor and break F2. Conversely, if an "observation" changes its answer when a model changes its projection, Fig 2 :30 refuses it as an anchor.

### F3: A short channel decays while the ground does not

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 10 and Fig 7, low overlap: ground maintainer versus room chain).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"stale percepts, dropped transients, saturated metrics, pooled readings"** (Fig 10 :26)
> **"you have lost touch"** (Fig 10 :28)
> **"Progress per handoff has two factors. Zero either and the chain runs in place:"** (Fig 7 :37)
> **"the bracket’s fidelity across the handoff"** (Fig 7 :38)
> **"the ground’s pressure on the room"** (Fig 7 :39)

The Atlantic did not begin a 20-year record in 2004; our channel did. Wikipedia notes that *"Observational data needs to be collected for a prolonged period to be of use,"* and van Westen et al. 2024 state that current reanalyses *"are too short (maximum of ∼100 years) at the moment to adequately estimate the distance to the FovS minimum."* Portmann et al. 2026 find that the past AMOC observation has a high intermodel correlation with the projected AMOC (0.84) yet *"the multimodel bias of the past AMOC is very small; therefore, the past AMOC has almost no influence on correcting the future AMOC estimate"*; the correction comes from salinity and temperature biases. A single saturated metric (AMOC strength alone) is precisely the pooled reading Fig 10 :26 names.

**Refuter:** a documented case in which a stability verdict changes materially while every observation channel's fidelity and the ground's pressure are independently measured as high and non-declining. If both stay high, F3's mechanism is not the cause.

### F4: Threshold distance needs a comparison and a physics-based diagnostic, not a variance trend

**Mode: `specified`. Domain D3, D1. Status: single-source on the figure side (Operators table and Fig 12, same framework) with world corroboration from two methodologically distinct papers.**

> **"a threshold relation between two quantities"** (Fig 12 :87; Operators table :49)
> **"a goal is a comparison, which is why a vocabulary without it cannot state one"** (Operators table :52)
> **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** (Fig 12 :121)

The salt-advection feedback is a cycle whose sign decides whether a freshwater perturbation is amplified or damped. van Westen et al. 2024 identify *"the minimum of the AMOC-induced freshwater transport at 34°S in the Atlantic, here indicated by FovS"* as a physics-based early warning signal and report that it *"occurs 25 years (9 to 41, 10 and 90% percentiles) before the AMOC tipping event"* in their CESM run. Classical indicators are unreliable on the same event: *"we find no consistent increase in the classical early warning indicators"* and *"most 150-year time windows do not provide an accurate estimate of the tipping point."* Lenton et al. 2008 had already framed the general problem: *"an incipient bifurcation in a dynamical system could be anticipated"* by extracting a timescale that *"universally characterized by τ → ∞ at the threshold."*

**Live strain, named not hidden:** the Operators table restricts ⋛ to two quantities, while the threshold diagnostic compares a transport minimum with a control parameter through a model-derived stability curve. Whether the settled molecule of "FovS minimum" counts as a quantity at that level needs an instrument, not an argument. Recorded as S4 in section 6.

**Refuter:** a measurement that returns distance to the tipping point directly, with no model-derived stability curve and no variance or FovS diagnostic, validated against an observed crossing. That would retire the gap in F4. If the classical indicators are shown to be reliable across all time windows of the van Westen event, the specific claim about their unreliability is false.

### F5: The model closure is too stable; only observation-constrained import moves the wall

**Mode: `specified`. Domain D3. Status: triangulated (Fig 6, Fig 8 and Fig 4, three distinct roles).**

> **"the only operator that moves the wall"** (Fig 6 :14)
> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Import from a live peer is debited against that frame’s independence. A wrong atom costs more than starting from primitives."** (Fig 6 :24)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** (Fig 8 :32)

CMIP-class models have a known stability bias. van Westen et al. 2024 write that the model's positive FovS at the start *"is not in agreement with observations, which is a well-known bias in CMIP phase 3, phase 5, and phase 6 models."* Portmann et al. 2026 constrain the weakening from 32 ± 37% to *"51 ± 8%"* and say the result *"may be due to the real AMOC being closer to a tipping point than a number of models suggest."* A February 2025 Nature study reported in Wikipedia concludes the AMOC is *"resilient to extreme greenhouse gas and North Atlantic freshwater forcings across 34 climate models,"* which is the opposing reading of the same model pool. Both readings are about a closure that has not met the right observation.

The import has a source gate and a shadow test: the RAPID mean and the SST/SSS fields are provenanced observations; the shadow test is that the bias-corrected estimate explains something the unconstrained one did not, namely the observed salinity pattern. Fig 8 :50-52: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."*

**Refuter:** a model that reproduces the observed sign and magnitude of FovS without any observational constraint, and still projects only small weakening under the same scenario. That would break the claim that the import is what moves the wall.

### F6: The residual is per slot, and the slots disagree

**Mode: `specified`. Domains D1, D2, D3. Status: triangulated (Fig 1 and RAPID's own account of meridional coherence, low topical overlap).**

> **"a global R near zero with one live slot residual is a legal state"** (Fig 1 :13)
> **"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."** (Fig 1 :28)

The RAPID project lists as a new discovery that *"With the further installation of additional Atlantic arrays, meridional coherence of the MOC appears much more complicated than previously expected,"* and that the conveyor-belt expectation of uniform speed everywhere is wrong. Wikipedia reports that the 26°N array and the subpolar gyre can behave separately, that the 2004 subpolar decline was judged a statistical anomaly, and that the gyre *"could collapse independently of it."* Different arrays returned different readings; averaging them into "the AMOC" would have hidden the live slot. The Florida Current has been *"measured as stable over the last four decades after correction for changes in Earth's magnetic field"* (Wikipedia, Observations) while the 26°N array shows a downturn after 2010-11 (RAPID). These are different slots, not contradictory verdicts on one scalar.

**Refuter:** a demonstration that all Atlantic observing channels return the same state vector at all resolutions and latitudes, so that per-slot indexing adds no information. Fig 1 :13 says such global agreement with one live residual is a legal state; showing that no live residual exists anywhere would break F6.

### F7: The numerical tipping date is a declared gap, not a silence

**Mode: `general` on the stop, `gap` on the number. Domain D3. Status: figure-governed with world corroboration.**

> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)
> **"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."** (Fig 9 :44)
> **"Unreachable is a verdict here, not a silence,"** (Fig 13 :134)
> **"It cannot say which primitive is missing, because naming it would mean already holding it."** (Fig 13 :135)
> **"So a search that finds nothing is never a proof of absence."** (Fig 8 :39)

The world shows exactly this limit. A statistical analysis of intermediate-complexity models suggested collapse around 2065 with 95% confidence of collapse between 2037 and 2109; Wikipedia reports *"widespread agreement among experts the paper's proxy record was 'insufficient'"* and that it may *"confuse a major slowing of the circulation with its complete collapse."* van Westen et al. 2024 explicitly *"do not present a particular time period estimate for reaching the tipping point, as more observations of the ocean circulation at this latitude will be needed for that."* The IPCC assessment is *"medium confidence"* of no abrupt collapse before 2100, not a proof. No figure line returns a date. The figure-side verdict is `gap`, of the unreachable-at-this-budget kind, not underivable in principle (Fig 8 :40-43): the needed instrument exists in principle and is already returning a weak signal at 34°S, so the remedy is sustained search plus a longer record, not an imported atom.

**Refuter:** a source-discriminating instrument that returns distance to threshold with a stated uncertainty small enough to decide policy, validated on an observed crossing. Until then, any specific date is a `candidate` binding from a frame, not a figure result.

### F8: Agreement and prestige cannot settle the verdict

**Mode: `general` with a `specified` outreach consequence. Domains D3, D5. Status: triangulated (Fig 2, Fig 7, Fig 9).**

> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)
> **"Buy independence in proportion to the cost of being wrong."** (Fig 2 :42)
> **"same closure, handed along; agreement compounds, evidence does not"** (Fig 7 :12, :13)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

The IPCC confidence labels, the 44-scientist open letter of October 2024, and the 17-scientist Matters Arising commentary of 2022 all draw on overlapping CMIP6 and reanalysis products. They are one pool wearing several names until provenance separates them. The essay *The Recursive Self-Improvement Trap* states the rule in the author's own words: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige."* The practical consequence is in `02_outreach_email.md`: ask what would refute the shape before showing any theory, and never pool later agreement as corroboration.

**Refuter:** a demonstration that two frames with zero overlap in evidence and method converge on the same stability verdict by separate derivation. Under Fig 8 :50-52 that is convergent derivation, which is corroboration at maximum independence; it would strengthen, not break, the method, but it would break the claim that the present literature is one pool.

### F9: The habitat is enumerated, and contact cascades three steps out

**Mode: `general`. Domain D2, D4. Status: triangulated (Fig 11 and the van Westen impact chain, low overlap: habitat rule versus a specific physical cascade).**

> **"The habitat is enumerated, never composed."** (Fig 11 :43)
> **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."** (Fig 11 :44)
> **"conditions: light, water, temperature, season, terrain"** (Fig 11 :46)
> **"An actor’s valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)

The observation habitat for this residual is not a short list of favourite indices. It includes conditions (SST, SSS, freshwater flux, wind, sea ice, season), relations (salt-advection feedback, ice-albedo feedback, deep convection, meridional heat transport) and cascades three steps out. van Westen et al. 2024 trace freshwater forcing to reduced sinking, to reduced northward salt transport, to further freshening, to a shutdown, to ITCZ shift and Amazon precipitation change. Wikipedia adds the North Atlantic carbon sink, deoxygenation and phytoplankton productivity as proposed indirect signs, several of them contested. Fig 11 :52-54 governs: first-order enumeration misses the effect three steps out. A variable's valence is relative to the residual: a cold blob is evidence for slowing in one frame and a cloud-cover artefact in another (Fig 11 :50).

**Refuter:** a closed, finite list of observed variables that is sufficient to decide every stability verdict for all future residuals, with no cascade outside it ever mattering. Fig 11 :61 (*"Introduction is available; exclusion is not"*) predicts no such list; finding one would break F9.

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per observing slot, never one stability scalar | general | Fig 1 :19, :22, :28 | figure-derived |
| Direct transport is the anchor; fingerprints are instruments | specified | Fig 2 :29, :30; Fig 6 :32; Fig 9 :30-31 | triangulated F2 |
| A short channel decays while the ground does not | specified | Fig 10 :24, :26; Fig 7 :37-39 | triangulated F3 |
| Threshold distance is a comparison with a physics-based diagnostic | specified | Fig 12 :87, :121; Operators :49, :52 | single-source figure, world corroborated F4 |
| Observation-constrained import moves the model wall | specified | Fig 6 :14, :21, :23, :24 | triangulated F5 |
| The slots disagree; averaging hides the live one | specified | Fig 1 :13, :28 | triangulated F6 |
| A numerical tipping date is unreachable at this budget | general / gap | Fig 9 :32, :44; Fig 13 :134, :135; Fig 8 :39 | figure-governed F7 |
| Consensus and confidence labels are filters, not witnesses | general | Fig 2 :40, :42; Fig 9 :60 | triangulated F8 |
| The observation habitat is enumerated; valence is residual-relative | general | Fig 11 :43, :44, :49, :51 | triangulated F9 |
| Which single observing system wins overall | not stated | none | gap: union, not partition; no figure picks a winner |
| The date and probability of an abrupt collapse | not stated | none | gap: unreachable at this budget |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A single observation channel resolves trend, variability and threshold distance with no information loss, collapsing the union into a partition (breaks F1, Fig 9 :54-57).
2. An SST, carbon-sink or gyre index preserves its ranking of AMOC states under a change of source with no transport measurement used in validation (breaks F2, Fig 2 :30).
3. A short observing channel is shown to decay while the ground's pressure and bracket fidelity both measure high and non-declining (breaks F3, Fig 10 :24; Fig 7 :37-39).
4. A measurement returns distance to threshold directly, with validated uncertainty, without a model stability curve (breaks F4 and closes the F7 gap).
5. A model reproduces the observed FovS sign without observational constraint and still projects only small weakening (breaks F5, Fig 6 :23-24).
6. All Atlantic observing channels return the same state vector at all latitudes and resolutions, so no live per-slot residual remains (breaks F6, Fig 1 :13, :28).
7. A ground reading settles a specific tipping date within this budget, or a two-frame convergent derivation with genuinely disjoint evidence agrees on one (breaks F7 and F8, Fig 8 :50-52).
8. A finite closed list of observed variables suffices for every future residual (breaks F9, Fig 11 :43, :61).
9. Fig 13's six terms are derived from five, Fig 6's idempotence fails inside a closed set, or the anchor moves when pushed (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a transport ground has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a stability verdict or a confidence label (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep trend, variability and threshold in separate reports. A blended "AMOC stability score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Treat direct arrays as anchors and fingerprints as instruments requiring a shadow test against transport (F2). Report which is which.
4. Sustain the 34°S SAMBA record and the 26°N RAPID record. The threshold diagnostic lives at 34°S; the trend record lives at 26°N. More of the same at one latitude does not clear both conditions (Fig 9 :55).
5. Use IPCC confidence language, model ensembles and expert elicitation as filters for the budget, never as witnesses for the verdict (Fig 9 :60).
6. Treat the two research groups (Utrecht hosing studies and Bordeaux observational constraints) as potentially one evidence pool until their provenance is separated; they share CMIP6 and RAPID (Fig 8 :50-52).
7. Stop at the shape. Do not publish a tipping date from these figures. Fig 9 :32 returns a kind of thing, not the answer, and Fig 13 :134 makes unreachability a verdict.

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, `FRAMEWORK/reference/03-FIGURES_TEXT.md` reopened line by line, and four essays opened directly (Library of Babel, Hard Problem is About Source, Recursive Self-Improvement Trap, Decoding Tacit Knowledge).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also gives the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after the canonical check | reason |
|---|---|---|
| Tried to map the six-term physical substrate onto salinity and overturning | **Retracted, strain S1** | Only fit by renaming ocean quantities as spectrum and gradient. Re-census: Fig 13 governs the honest stop here, not the physical decomposition |
| Read Fig 2 :35 as a ban on expert assessment | **Narrowed, strain S2** | Fig 2 governs verdict weight; Fig 9 :60 governs budget allocation. Consensus is a filter, not a witness |
| Wanted to rank observations by correlation with AMOC | **Retracted at record level** | A frame cannot score itself with a quantity it produces (Fig 1 :27). Correlation is a budget filter, not an anchor test |
| Planned to name FovS as "the" stability primitive | **Narrowed and kept visible** | The README's "shape, not a name" governs a missing primitive. FovS is a held instrument from the oceanography frame; naming it is a provenanced binding, not an invented seventh term. Compare `05_what_shape_means.md` section 5 |
| Treated the Utrecht and Bordeaux groups as two witnesses | **Narrowed to one pool with declared sub-methods** | Both use CMIP6 and RAPID; Fig 8 :50-52 says only the record of origin separates convergent derivation from adopted import |
| Treated IPCC "medium confidence" as a figure result | **Retracted as a witness, kept as a filter** | A confidence label is an assessment output, not a non-updating ground (Fig 2 :29-30; Fig 9 :60) |
| Read "collapse before 2100" and "on tipping course" as a direct conflict | **Conflict returned to census, verdict unchanged** | Re-census: they answer different quantities, abrupt 21st-century collapse versus long-run trajectory toward a threshold. Different objects, so no strain after re-census |
| Attempted to fetch a Scheffer early-warning paper | **Not cited** | The URL returned a different paper (autophagy). Two Nature fetches also failed with a cookie error or a 404. Nothing from those pages is used |
| F4 called "triangulated" in a first draft | **Downgraded to single-source on the figure side** | Operators table and Fig 12 are one framework; the world papers corroborate the shape but are not independent figure witnesses |
| F7 recorded as silence | **Corrected to `gap`** | Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39 |

**Strains sent to the log:** S1 (six-term substrate mapped onto ocean quantities), dissolved by re-census; S2 (mirror rule versus expert assessment), dissolved by assigning different figures to different quantities; S3 (trend versus threshold as one stability score), dissolved by union split (Fig 9 :54-57); S4 (⋛ operand type at the threshold level), live and named, not smoothed. One live strain, three dissolved.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :4-5, :54, :55, :57 plus the Library of Babel bundle passage: it is a union of trend, variability and threshold, with a separate anchor-versus-instrument question.
2. **What is the anchor?** Direct transport measurement. Fig 2 :29-30 names the counter; RAPID and SAMBA are the counters in this field.
3. **Is the answer in one observing system?** No. Fig 1 :13, :28 and RAPID's own report of meridional coherence: slots disagree; a global average hides the live one.
4. **Why do models look stable?** Because their closure has not met the observed freshwater transport; Fig 6 :21, :23 and the CMIP FovS bias.
5. **How does a verdict become better?** By import with a source gate and a shadow test, Fig 6 :12, :23-24 and Fig 8 :50-52; observation-constrained weakening is the example.
6. **What does "stable" require as a term?** A comparison and a cycle with a sign, Fig 12 :87, :121; variance alone is not the goal.
7. **What can be said at the stop?** A shape: three separable conditions, an anchor/instrument discriminator, a physics-based threshold diagnostic, and an explicit limit. Not a date. Fig 9 :32, Fig 13 :134.

---

## 8. Updated verdict

The shape survives. **AMOC "stability" is not one scalar. It is a union of a trend condition, a variability condition and a threshold condition, each with its own instrument, and the observation question is a separate union of channels indexed per slot. Direct transport arrays are the anchors; SST fingerprints, carbon-sink indices and model confidence labels are instruments that must be ranged against them and carry zero verdict weight until provenance separates them. Models are too stable in their own closure, and the only operator that moves that wall is observation-constrained import with a source gate and a shadow test. The distance to a tipping point is reachable as a shape, a physics-based freshwater-transport diagnostic at 34°S, but not as a number at this budget.** Verdicts per domain are kept separate and never averaged. The numerical tipping date and the winning single observing system are declared `gap`s, unreachable at this budget rather than silences (Fig 13 :134, Fig 8 :39). Mode `specified` on the domain claims, `general` on the shape, `gap` on the number, nothing `grounded`. No world source flipped a verdict; the one genuine apparent conflict was returned to the census and re-mapped to two different quantities. One strain remains live and named (S4).
