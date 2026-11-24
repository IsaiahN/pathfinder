# Figure-grounded audit: how much do current results depend on assumptions built into the analysis?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (opened 2026-11-23): *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself. An external validator, or ground, is always needed to tether the veracity of the output to reality. Anything else is drift."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the cosmology question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`, `FRAMEWORK/figures/THE_FORMULA.md`, plus the world sources in `10_source_ledger.csv`. Every figure quote below was checked against the local extract, character by character, before use.

---

## 0. The claim under audit and the residual

The question asks for the dependence of "current results" on "assumptions built into the analysis." In this section of the source file, "current results" means the reported constraints on dark energy and expansion: a detected acceleration, a Hubble constant, a preference for evolving dark energy, a neutrino mass bound. "Assumptions" means the prior widths, the chosen supernova sample, the calibration anchor (Cepheids or TRGB), the light-curve fitter, the nuisance model, the likelihood, and the model class itself.

**Residual stated in effect terms.** A published number, say a 3.9 sigma preference for evolving dark energy or a 73 km/s/Mpc Hubble constant, is presented as what the data gave. The effect to be explained is this: the same recorded sky, re-analysed under a different but admissible assumption, returns a different number with a different stated strength. That difference is not noise in the sky. It is a sensitivity in the analysis channel. The residual `R` is indexed by assumption slot, and the question "how much" asks for the map from each slot to the resulting displacement of the answer, not for one global fraction.

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

Binding the sought-for shape before the run (formula Direction rule): an answer is a per-slot sensitivity table, an anchor test per slot, an independence audit across probes, and a measured round-trip gap. A scalar "37 percent assumption dependent" is not that shape; it is the aggregate the figure forbids.

### Domain census, before any figure line is chosen

R by arity, symmetry, scale:

- **Arity:** many slots, at least six named above. This is not a two-frame triangulation; it is a multi-slot residual.
- **Symmetry:** ordered and directional. Pushing a dark-energy prior toward more negative `w` moves the answer toward more negative `w`; swapping the order of operations in a pipeline is not the same operation as changing a calibrator. The appropriate bond is the comparison `⋛`, a threshold relation between two quantities (Operators table :47-51), not a symmetric join.
- **Scale:** first order inside one analysis, second order across independent analyses, third order along the literature chain where a first-order result is cited as settled by a later paper.

One line per domain with actors, currency, anchor:

- **Domain 1, the analysis frame.** Actors: the model, prior widths, dataset selection, calibration zero point, nuisance parameters, the fitter, the likelihood. Currency: posterior mass, Bayesian evidence, quoted sigma. Anchor: none of its own. It ranges against the observations in Domain 2 and cannot update them. By the anchor test this is a frame, not a ground (Fig 2 :33).
- **Domain 2, the ground and instruments.** Actors: Type Ia supernovae, BAO tracers, the CMB, lensing, gravitational-wave standard sirens, Cepheids, TRGB stars, detached eclipsing binaries. Currency: fluxes, redshifts, distances, counts. Anchor: the recorded measurement. It does not change because an analysis team changes its prior. This is a genuine domain.
- **Domain 3, the verification frame.** Actors: independent teams, independent probes, independent calibration chains, independent pipelines. Currency: agreement or residual between probes. Anchor: the same ground in Domain 2. Independence between frames is the parameter that decides whether their agreement means anything (Fig 2 :31).
- **Domain 4, the reporting layer.** Actors: abstracts, press releases, review summaries. Currency: stated significance. Anchor: none of its own, it inherits from Domains 1 to 3. **Not a domain yet** by the anchor rule; treat it as a room whose agreement is variation, not a verdict (Fig 7 :35). It is recorded so its lack of standing is visible, not silently promoted.

**Partition or union.** This is a **union compound**, not a partition. Prior-width dependence, dataset-combination dependence, calibration dependence, and model-class dependence overlap on the same reported sigma. A lever that fixes one (tighten a prior) clears the region where only that condition holds and leaves the intersections standing (Fig 9 :54-57). So each condition gets its own loop and the verdicts are never averaged into one "how much."

**Order by dependency (Fig 3).** Establish the ground reading (Domain 2) before assessing channel sensitivity (Domain 1); refuse a claim of robustness before minting one (formula step 2); audit independence (Domain 3) before recording agreement; only then interpret the reporting layer (Domain 4). The middle link here is the one Fig 3 :25-27 names: having terms for what the analysis affords and being able to say what would count as a failure. A paper that quotes a sigma without naming which pushes would count as a failure is a reading below the break, *"a reading of nothing"* (Fig 3 :22-23).

Strain test rule applied: if a figure line fits only when a word is stretched, it governs another quantity and we re-census. Two candidate strains are resolved in section 6.

---

## 1. Figure census

| figure | bearing on this question | verdict after census |
|---|---|---|
| **1 The Agent** | per-slot residual; frame-internal quantities cannot score themselves | governs "how much" as a slot-indexed map, not a scalar |
| **2 The Ground** | anchor test, independence, correlation valence | governs the discriminator: push the assumption, watch the anchor |
| **3 Dependency Chain** | a reading below the break is a reading of nothing; middle link has no instrument | governs the order of the loops |
| **4 The Membrane** | round trip and measured gap R_T | governs robustness checks: measure the gap, do not assume zero |
| **5 Mint Pipeline** | a refusal is owed before a positive term; persistence of residual | governs "robust" as a refused term until pushes are run |
| **6 Closure / Reachability** | MINT cannot add an atom; inward and outward are opposed instruments | governs why re-analysis inside one model cannot settle model choice |
| **7 Room Chain** | a room's agreement is variation, not a verdict | governs the reporting layer, denies standing to Domain 4 |
| **8 Union Surplus** | low overlap, residual first frame second, provenance separates convergence from import | governs the independence audit and the order describe-push-then-compare |
| **9 Leave / Arrive** | union vs partition, describe the effect not the cause, filters never verdicts | governs the unbundling of the four conditions |
| **10 Ground Maintainer** | the ground does not decay, the channel does; bring a characterised residual | governs diagnosis: dependence lives in the channel |
| **11 The Habitat** | capability is agent-and-habitat; an improvement that does not change contact changes nothing | governs why more analyses on the same data add no evidence |
| **12 The Bond** | the bond carries half the information; isomer, flat formula, two currencies | governs why a scalar dependency number loses the slot identity |
| **13 Minimum Viable Set** | the set is closed, arrangements are not; narrowing gets you close while the ground decides | governs the honest stop: shape, not number |
| **Operators table** | `⋛` is a threshold relation between two quantities; `−` is absence, `¬` is refusal | governs the formal reading of "A versus B" in section 06 |
| **Symbols table** | R is a slice per slot, the ground is the anchor, R_T is the round-trip gap | supplies the notation used throughout |

No figure was forced. Where a line is used with a narrower scope than its full claim, that scope is stated.

---

## 2. Findings

### F1 - The anchor test decides dependence, and it runs per slot (decisive for the shape)

Fig 2 :29-30:

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."**

Fig 2 :33: **"The anchor must not update."**

The operational reading is a push test. For each assumption slot, hold the recorded observations fixed, change the assumption within the admissible range, and re-run. If the reported value or its stated strength moves, that slot is carrying the result and the result is not anchored there. If no admissible push moves it, the result passes the anchor test for that registered set of pushes.

World corroboration (secondary, their numbers are their claims, not mine): Riess et al. 1998 report 2.8 and 3.9 sigma for acceleration with no prior on the mass density other than positive, and 7 and 9 sigma *"For a flat-Universe prior (Omega_M+Omega_Lambda=1)"*. Yang et al. 2026 change a distance prior and find *"the tail and bulk shifts are therefore properties of the prior, not a data update"*, with the weighted median moving from 77.6 to 87.6 km/s/Mpc while the binned MAP stays at 70.5. Freedman et al. 2019 change the calibration anchor and land *"midway in the range defined by the current Hubble tension."*

Triangulation status: **triangulated**. Fig 2 (anchor) and Fig 1 (per slot) are separate figures with low conceptual overlap, and the three world papers above are independent collaborations using different data.

**Refuter:** register the push set in advance, then exhibit a result that is invariant under every push in that set and is later overturned by the ground, or a result that moves under every push and is nevertheless confirmed by the ground. Either case breaks the claim that push-invariance tracks anchoring. A weaker but cheaper failure: the push set cannot be registered because the admissible range of an assumption is itself contested and no instrument arbitrates it. That would be a `gap`, not a win.

### F2 - "How much" is a vector, not a global fraction

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**

The slot here is the assumption. DESI 2024 VI reports the same preference for evolving dark energy at *"the 2.5σ, 3.5σ or 3.9σ levels for the addition of Pantheon+, Union3, or DES-SN5YR datasets respectively"*. That is three values of one quantity indexed by one slot. Heavens et al. 2017 report that *"the final numbers depend on the widths of the parameter priors"* and that only when a particular external data set is added does the previously favoured model become disfavoured. Planck 2018 VI reports its own base parameters as *"only weakly dependent on the cosmological model"* with *"somewhat increased errors"* in extensions. These are not contradictory numbers; they are different slots reported separately by the collaborations themselves.

The framework refuses to add them. Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** A summary scalar is a filter for communication, not a witness for the text.

Triangulation status: **triangulated** (Fig 1 plus Fig 9, different quantities: indexing versus verdict authority), with world corroboration from three independent analyses.

**Refuter:** exhibit a dependency measure that is unchanged when two slots are merged and a third is split. If re-indexing the assumptions leaves the number untouched, the index is decorative and the per-slot claim fails.

### F3 - Agreement counts only when the frames are independent

Fig 2 :31: **"Independence, between two frames, is how little they draw on the same evidence."**
Fig 2 :40: **"agreement about the world is worthless when the agreeing frames share an evidence pool"**
Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**

Two analyses of the same supernova compilation with the same likelihood are one frame wearing two names. The field's own practice recognises this. Verde, Treu and Riess 2019 state that the H0 discrepancy *"does not appear to be dependent on the use of any one method, team, or source"*, which is an independence result, not a headcount. The LEMAITRE project (Regnault 2026) builds independence into the design with *"a distinct SN Ia dataset (2800 from ZTF, 170 from SNLS and 300 from HSC), a dedicated calibration program, and a new, independent analysis pipeline."* Cheshire et al. 2026 use *"agreement between two independent selectors as a consistency diagnostic"* for imaging systematics.

This is also the reason the simulated second seat in `11_audit.md` cannot corroborate this derivation: it shares the evidence pool.

Triangulation status: **triangulated** (Fig 2 and Fig 8 :50-52, where convergent derivation and adopted import look identical in the contents and only the record separates them).

**Refuter:** in a registered sample of "independent" confirmations, show that removing one never changes any conclusion because the two share a calibration zero point or a likelihood implementation, and that a field audit cannot detect the shared input. Then the independence claim is not operational.

### F4 - The dependence is in the channel, not in the ground

Fig 10 :24: **"the ground does not decay, the channel does"**
Fig 10 :25-26: **"stale percepts, dropped transients, saturated metrics, pooled readings"**
Fig 10 :27-28: **"the output is not a verdict, it is you have lost touch"**

The recorded photometry and spectra have not changed because a prior was widened. What changed is the channel between those records and the published number. Di Valentino et al. 2020 phrase the live alternatives correctly: *"While these tensions can be in portion the result of systematic errors, the persistence after several years of accurate analysis strongly hints at cracks in the standard cosmological scenario and the need for new physics."* Both options are ground questions. Cheshire et al. 2026 note that as samples grow, *"systematic rather than statistical uncertainties come to dominate the cosmological error budget"*, which is the channel becoming the limiting term.

Fig 11 :40: **"An improvement that does not change contact changes nothing, however much it improves."** Adding a tenth analysis on the same data does not change contact with the sky.

Triangulation status: **triangulated** for the shape (Fig 10 plus Fig 2 :33), **single-source** for the specific cosmology diagnosis of which channel term dominates, which only a measurement can settle.

**Refuter:** show, across a large registered sample, that repairing the channel (recalibration, unblinding, re-fit, template deprojection) never moves any reported result, and that no ground test can be named that would distinguish the competing analyses. Then dependence is not a channel property as claimed.

### F5 - A robustness check is a round trip, and the gap must be measured

Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**
Fig 4 :31-32: **"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."**

The round trip here is concrete: send the result up to a prior-independent claim, bring it back down under an admissible alternative, and measure the displacement `R_T = gap(x, (T_E o T_A)(x))`. Hu and McEwen 2026 state the field's own version: *"However, prior-dependence makes it important to assess the influence of plausible alternative priors."* Yang et al. 2026 show why the cheap shortcut fails: post-hoc reweighting recovers only about 17 percent of the directly sampled prior shift, and they conclude that *"full-sample prior-sensitivity reruns"* should be the default robustness tool. A cheap approximation of the round trip lost information; that loss is `R_T`, measured rather than assumed.

Triangulation status: **triangulated** (Fig 4 plus the Symbols table definition of `R_T`, corroborated by two independent methodology papers).

**Refuter:** exhibit a full re-run under an alternative prior that returns the baseline number exactly for every registered slot, so `R_T = 0` across the board. That would contradict Fig 4's claim that the coarser description always gives up something. A cheaper failure: a paper reports robustness while showing no alternative runs, and a later full re-run changes the verdict.

### F6 - The question is a union compound, so it must be unbundled before answering

Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**
Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
Fig 9 :57: **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."**

The four conditions (prior width, dataset selection, calibration anchor, model class) bind the same reported sigma. Heavens et al. 2017 show prior width and external data binding together. DESI 2024 VI shows dataset selection and neutrino-mass prior binding together. LEMAITRE shows dataset, calibration, and pipeline being changed together deliberately to obtain independence. One lever does not clear the intersections.

Triangulation status: **single-source** for the figure rule (Fig 9), corroborated structurally by the way the published sensitivity tables are laid out. Not triangulated to a second figure, so marked as such.

**Refuter:** show a single intervention that changes all four conditions at once and leaves no compound residue in the reported result. Then the union reading is wrong and a single scalar might be adequate.

### F7 - What survives and what is refused

| claim | status | basis |
|---|---|---|
| Dependence is slot-indexed; report the map | `specified`, survives | F1, F2 |
| Push-invariance is the anchor test | `specified`, survives with registered push set | F1 |
| Independence must be audited, not asserted | `specified`, survives | F3 |
| The channel is where dependence lives | `specified` for shape; the specific culprit needs a measurement | F4 |
| Robustness is a measured `R_T` | `specified`, survives | F5 |
| One global dependency percentage | **refused** | F2, Fig 1 :22 |
| "Robust" as a verdict before pushes are run | **refused** | formula step 2, Fig 5 amendment |
| Agreement of many analyses as corroboration | **refused** | F3, Fig 7 :35 |
| A figure-derived name for which slot dominates in current cosmology | **refused, gap** | figures return shape, not a world measurement |

The honest gap is named: **which assumption currently carries the most leverage in the dark-energy results is a world question, not a figure question.** The figures supply the test that would find it. They do not supply the finding. Unreachable is a verdict, not a silence (Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*).

---

## 3. Pre-registered refuter

Written before the conclusion, per the standing rule that a falsifier written before the run is a design instrument. If any of these fires, the corresponding finding is withdrawn, not smoothed over.

1. **Anchor test (F1).** Register a push set. If a result invariant under all pushes is later overturned by the ground, or a result moved by all pushes is confirmed by the ground, push-invariance does not track anchoring. F1 falls.
2. **Indexing (F2).** If a dependency measure is unchanged under merging two slots and splitting a third, the slot index is decorative. F2 falls.
3. **Independence (F3).** If two analyses sharing a calibration zero point or likelihood code are counted as independent in a registered sample and removing one never changes a conclusion, the independence audit is not operational. F3 falls.
4. **Channel (F4).** If repairing the channel never moves any reported result across a large registered sample and no discriminating ground test can be named, F4 falls.
5. **Round trip (F5).** If a full alternative-prior re-run reproduces the baseline result exactly for every registered slot, `R_T = 0` and Fig 4's loss claim fails for this domain.
6. **Union (F6).** If one intervention clears all four conditions and leaves no residue, the union reading fails and the conditions should be treated as a partition.

None of these were run in this simulated derivation. Until one is run, nothing above is `grounded`.

---

## 4. Recommendation

1. Do not publish a single dependence percentage. Publish the per-slot table: slot, admissible range, pushed value, baseline result, pushed result, displacement, sign flip yes or no (F2).
2. Register the push set before looking at the outcomes, so the test cannot be built to pass (F1, pre-registered refuter).
3. Audit independence by provenance, not by count: same data, same calibrator, same pipeline, or same code means one witness (F3).
4. Report `R_T` for each cheap robustness shortcut actually used, so a reweighting that recovers 17 percent of a full re-run is recorded as 17 percent, not as "robust" (F5).
5. Unbundle prior, data selection, calibration, and model class into separate loops and keep the verdicts separate (F6).
6. Send the generator: the push protocol and the refuter, not the conclusion (Fig 4 :23 *"Only methods cross up. Only head starts come down."*).

---

## 5. Canonical usage check

Two local sources were read after sections 0 to 4 and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo"* and *"the quotes are the authority, not this summary."* The canonical limit is that the framework reports *"what a missing thing would have to look like (a shape, not a name)"*. Applied here: the missing thing is not a primitive but a measurement protocol and a number, so the framework returns the shape of an honest dependence report and refuses to supply the number. The README also states *"Indiscernibility is not identity"* and the re-census rule: a reading that makes two figures contradict one another has misidentified its domain, not found a flaw.
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: figures are metalaws and decide design questions by derivation; the seat must not ask an anchor to rule on what the figures settle. This report therefore does not request a cosmology ruling from any expert; it asks them to check the shape claim and the refuter.
- `FRAMEWORK/figures/THE_FORMULA.md` step 7 keeps SEARCHED, INWARD and OUTWARD distinct. Here SEARCHED asks whether a push within the same analysis finds the dependence (it does, cheaply, and is asked first). INWARD asks whether a better instrument or a full re-run resolves the channel. OUTWARD asks which independent frame already holds a result that does not move. Importing an external prior against a budget limit would add an atom that was not needed.

### Strains and re-census

- **Planck 2018 versus DESI 2024 and Heavens 2017.** Planck reports base parameters *"only weakly dependent on the cosmological model"*, while DESI and Heavens report sizeable movement. Re-census: different slots. Planck's claim is about model-class extensions of the base parameter set; DESI's is about which supernova sample is combined and Heavens' is about prior widths and an external H0 data set. Not a conflict; one evidence pool quoted at different axes.
- **Fig 2 :29 "does not change its answer" versus real posteriors that move under priors.** Re-census: the anchor is the recorded measurement (Domain 2), not the posterior (Domain 1). The posterior is a frame product and is expected to move. No strain after re-census.
- **Fig 4 :31 "not an error to eliminate" versus the field's aim to reduce systematics.** Re-census: the gap is the report of what a coarser description drops; reducing the underlying systematic is different from pretending the condensation was lossless. No strain.
- **After re-census: no live strain.** The one genuine gap is the world-level identification of the dominant slot (F7), reported as `gap`, not hidden.

---

## 6. Retractions and confirmations

Corrections are kept visible. They are changes to my reading, not edits that erase it.

| earlier reading | status after the canonical check |
|---|---|
| "The question wants a single percentage of assumption dependence" | **Retracted.** The figures return a slot-indexed map and a test. A global scalar is the aggregation named in Fig 1 :22. The percentage remains a legitimate world-science deliverable, but it is not the Tether verdict. |
| "The DESI 2.5/3.5/3.9 sigma spread is the answer to this question" | **Retracted.** It is one slot (supernova sample choice) inside one analysis chain. Promoting it to a global number repeats the error above. |
| "Disagreement between probes means the results are assumption dependent" | **Revised, not erased.** Disagreement is a residual whose source must be discriminated. Agreement can equally be assumption dependence when the frames share a pool (Fig 2 :18-21). Both readings are recorded; the test is the independence audit, not the sign of the disagreement. |
| "Fig 2's anchor must never move, so a moving posterior refutes the framework" | **Retracted after re-census.** The anchor is the measurement. The posterior is a frame and is expected to move. |
| "Planck and DESI conflict about model dependence" | **Retracted after re-census.** Different assumption slots, recorded in section 5. |
| F1 to F5 | **Canonically confirmed** as figure-derived shape claims. Their world corroboration is secondary, and several cosmology sources draw on the same Planck, supernova, or distance-ladder evidence pool, so their agreement is not nine independent witnesses. |
| F6 | **Partially confirmed.** It rests on one figure (Fig 9). Marked `single-source` in F6 and in `09_watson_answer.md`. |
| F7 world-level dominant slot | **Confirmed as a `gap`.** The figures do not decide which current assumption carries the most leverage; a measurement does. |

### Updated verdict

The shape survives: dependence per slot, anchor test per slot, independence audit, measured round-trip gap, unbundled conditions, and an honest stop at the world-level question. What does not survive is the request for one global number and any claim that agreement among analyses settles anything. No measurement was taken. Mode remains `specified` on the shape and `general` on the structural figure laws, with the world-level identification of the dominant slot left at `gap`.
