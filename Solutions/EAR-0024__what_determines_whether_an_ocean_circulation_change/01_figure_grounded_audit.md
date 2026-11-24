# Figure-grounded audit: what determines whether an ocean circulation change is gradual, abrupt, or reversible

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the claim it reports on. See `05_what_shape_means.md` section 6.

**Sources.** The 13 figures plus Operators and Symbols tables, quoted verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` (cited as `Fig N :line`); `FRAMEWORK/figures/THE_FORMULA.md`; `FRAMEWORK/reference/FIGURES_README_canonical.md`; and the world sources opened 2026-11-22 and listed in `10_source_ledger.csv`.

---

## 0. The residual, stated in effect terms

The question offers three adjectives as if they were points on one dial. That is the first thing to audit. Restate the effect before choosing any figure line:

> Given an ocean circulation cell with state q (overturning strength, deep convection state, density structure) and a forcing F (freshwater flux, heat flux, ice melt), the prediction Gamma(b,a) drawn from the current model and belief is compared with the observation o'. The residual is R = |Gamma(b,a) - o'|, indexed per circulation slot s (basin, depth, region, season), never aggregated (Fig 1 :19, :22). The question asks what sets the SHAPE of the response trajectory in (F, time) space: continuous tracking (gradual), a discontinuous jump (abrupt), return to the original state on forcing removal (reversible), or persistence in the new state with a reverse threshold (hysteretic / irreversible).

Three things are being asked at once, and conflating them is the likely source of the confusion the question encodes. The audit therefore begins with a census of conditions, not a choice of answer.

---

## 1. Domain census (before any figure line is chosen)

### R by arity, symmetry and scale

- **Arity:** multi-place. The response depends on (state q, forcing level F, rate dF/dt, history, noise). Any answer that varies only F is already too small. This is a union of conditions (Fig 9 :55), not a two-place threshold.
- **Symmetry:** "gradual" versus "abrupt" is not a smooth interpolation with a midpoint. It is a comparison between F and a critical value, an ordered relation ⋛ with a threshold, not a symmetric join (Fig 12 :87; Operators table :51). "Reversible" versus "irreversible" is path dependence: the return path is not the forward path reversed, so it carries sequence (→) and a cycle, not a symmetric bond (Fig 12 :111, :121).
- **Scale:** one convection site, a basin-scale overturning cell, the connected global ocean, and paleo time. The membrane between these is lossy (Fig 4 :27-29). A verdict at one scale does not compose upward without a measured round trip.

### One line per domain: actors / currency / anchor

| domain | actors | currency | anchor | nameable? |
|---|---|---|---|---|
| D1 Physical ocean frame | water masses, temperature and salinity, density, salt-advection feedback, convection sites, freshwater and heat forcing | meridional heat and freshwater transport (Sv), density gradient, overturning strength | RAPID 26°N array, SAMBA 34°S array, Argo, SST fingerprints, paleo proxies | yes: instruments and proxies |
| D2 Dynamical-systems frame | control parameter rho, state variable q, positive and negative feedback loops, basins of attraction, saddle-node and Hopf bifurcations, rate parameter, noise | stability, basin geometry, critical level and critical rate | quasi-equilibrium hosing experiments, bifurcation analysis, mathematical theorems | yes: experiments and proofs |
| D3 Verification / outreach frame | expert readers, model intercomparisons, early-warning estimators | residuals and agreement | the real ocean, never agreement | yes: the ocean |
| X1 "the tipping point" as a free-floating number | none nameable independent of D1 and D2 | none | none | **not a domain yet** |

X1 is refused a domain line: no anchor can be named for it apart from D1 instruments and D2 experiments. Treating "the tipping point" as a standalone object is the echo-without-shadow error (Fig 9 :27-28).

### Partition or union

**Union, not partition.** The three adjectives name at least three overlapping conditions:

- C1 continuity / threshold: is the response smooth or does it jump? (gradual vs abrupt)
- C2 path dependence / basin structure: does the system return when forcing reverses? (reversible vs hysteretic)
- C3 rate / time channel: does the RATE of forcing matter independently of its level? (fast versus slow tracking, return tipping)

Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."* A change can be abrupt AND irreversible (Stommel's jump that stays), or gradual AND effectively irreversible on human timescales (a slow weakening with multi-centennial recovery). One lever clears only the region where a single condition holds and leaves the intersections standing (Fig 9 :55-56). Verdicts are kept per condition and never averaged.

### Dependency order (Fig 3)

Perception (what is the observed state?) → vocabulary (terms for feedback sign, threshold, basin, rate) → objective (what would count as progress: a shape and a refuter) → planning (which instrument discriminates the conditions) → learn and carry (a method, not a recording). The chain most likely to be broken here is the vocabulary-to-objective link:the literature has terms for "tipping" but no instrument that settles reversibility in the present ocean (Fig 3 :25-27).

Census complete. Figure lines are now brought in and tested for strain.

---

## 2. Figure census (bearing and verdict)

| figure | bearing here | verdict |
|---|---|---|
| 1 The Agent | R indexed per slot, aggregation hides the live signal | no global verdict; per-cell only |
| 2 The Ground | anchor must not update; agreement from one pool is worthless | observations settle, model agreement does not |
| 3 Dependency Chain | vocabulary-to-objective link has no instrument | the break is named, not assumed |
| 4 The Membrane | cross-scale transform is lossy; round trip required | basin to global verdicts need a measured gap |
| 5 Mint Pipeline | mechanism broken owes a term; guards are a product | a model that cannot produce abruptness owes a mechanism |
| 6 Closure / Reachability | import is the only operator that moves the wall | irreversibility is structural; reversal needs a wall-moving forcing |
| 7 Room Chain | next room must differ and match the surfaced residual | intercomparisons of same-closure models add motion, not evidence |
| 8 Union Surplus | residual first, frame second; search is not proof of absence | the gap is recorded, not filled |
| 9 Leave / Arrive | union versus partition; describe before looking | union confirmed; gap declared |
| 10 Ground Maintainer | channel decays while ground does not; verifier non-access | sustained observation is the office that can fail |
| 11 The Habitat | actors enumerated from the world; valence relative to residual | enumerate the feedbacks, do not rank them by reputation |
| 12 The Bond | cycle sign, threshold comparison, functional group, isomer | the determinant of continuity is cycle sign against a threshold |
| 13 Minimum Viable Set | gradient over space composes a flow; arrangement unbounded, set closed | the physical mapping is strong; no strain after re-census |
| Operators table | ⋛ is a threshold relation; ¬ refuses a claim | threshold is ordered; a refusal is owed when a model is falsified |
| Symbols table | R is the aim and the ground is the anchor | residual stays per slot and per time |

Strains are named in section 6 rather than smoothed over.

---

## 3. Findings

### F1 - The question is a union of conditions, not one dial (decisive framing finding)

Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
Fig 9 :57: **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."**
Fig 9 :4-5: *"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."*

The literature already splits it. Lenton et al. 2008 write that the term tipping point has been used for *"the appearance of a positive feedback, reversible phase transitions, phase transitions with hysteresis effects, and bifurcations where the transition is smooth but the future path of the system depends on the noise at a critical point"* and that models *"differ as to whether the transition is reversible or irreversible (in principle)."* That is a union statement made in the field's own words. A single adjective cannot decide which condition a given change falls in.

**Refuter:** show that all observed ocean circulation changes lie on one continuous axis such that gradual, abrupt and reversible are monotonic functions of a single parameter, with no intersections requiring a second condition. If that holds, the union collapses to a partition and this finding falls.

### F2 - Continuity versus abruptness is governed by feedback cycle sign against a threshold

Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."**
Fig 12 :87: **"is it about which is larger, rather than both being present?"** (the ⋛ comparison test)
Fig 13 :32: **"a remainder compounding through a chain that amplifies is chaos"**

A stabilising (negative) feedback returns the system toward the moving equilibrium, so the response tracks the forcing: gradual. A self-amplifying (positive) feedback takes the output back as an input of the same sign, the remainder compounds, and crossing a threshold produces a jump: abrupt. The salt-advection feedback is the named positive loop in D1: Rahmstorf 2005 calls it *"a basin-scale positive feedback: enhanced thermohaline circulation transports more salt northward, enhancing high-latitude salinity and density and thereby the circulation"* and reports that *"all models, despite their large differences in construction, show a clear hysteresis response."* van Westen et al. 2024 quantify the contrast: the collapse gave *"about 8-Sv AMOC change due to a forcing change of 0.03 Sv"*, which they identify as a tipping event driven by internal feedbacks rather than by the forcing magnitude. Lenton 2021 states the mechanism in one line: tipping points occur *"when reinforcing (positive) feedbacks within a system take over from stabilising (negative) feedbacks."*

The figure gives the determinant (cycle sign), not the name of the loop. Naming the salt-advection feedback is a binding from the ocean frame onto a held structural atom, provenance to be recorded, not a new primitive.

**Refuter:** demonstrate a change that is abrupt with a demonstrably negative (stabilising) dominant feedback, no threshold crossing, and no rate effect. That would break the cycle-sign determinant and send the derivation back to the census.

### F3 - Reversibility is governed by basin structure, which is closure, and reversal is a wall-moving import

Fig 6 :14: **"the only operator that moves the wall"**
Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**
Fig 8 :32: **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."**

If the system has one basin, removing the forcing returns it: reversible. If two basins coexist over a range of forcing, the system stays in the new one when forcing is removed and needs a reverse forcing past a lower threshold: hysteresis. Structurally, the system cannot reach the original regime by search inside its current closure; something must move the wall back. Stommel 1961 wrote the founding result in exactly these terms: a slight change in a parameter *"could cause the temperature dominated circulation at a to jump over to the reverse salinity circulation at c, and it would then stay there even when A was restored to its original value."* Lenton et al. 2008 report that in the THC *"this collapse is reversible (after the forcing is removed, convection resumes), whereas in others, it is irreversible - indicating bistability."*

This is a structural analogy, not a physical identity, and the strain is recorded in section 6. The figure's "import" is a statement about reachability, not a claim about brine rejection.

**Refuter:** demonstrate a model with two coexisting stable basins in which the system returns to the original basin on forcing removal without crossing any reverse threshold. That breaks the closure determinant.

### F4 - Rate of forcing is a third determinant, not reducible to threshold value

Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**
Fig 7 :36: **"The next room must differ from the last, and match the residual it surfaced."**
Fig 10 :24: **"the ground does not decay, the channel does"**

Lenton et al. 2008: *"Both the timescale and the magnitude of forcing are important, because a more rapid forcing to a given level can more readily overwhelm the negative feedback that redistributes salt in a manner that maintains whatever is the current circulation state."* Ritchie et al. 2023 define rate-induced tipping as *"an instability that occurs when external conditions vary faster, or sometimes slower, than some critical rate, usually without crossing any critical levels (bifurcations)"*, and note a *"return tipping"* failure: reversing fast to avoid a fold can tip the system on the way back. Chapman et al. 2024 demonstrate bifurcation-, noise- and rate-induced tipping in one AMOC box model and note the threshold level *"varies considerably based on the calibration of the model."* A fixed temperature threshold is therefore not a well-defined object when the rate can move it.

**Refuter:** show that for a given circulation cell the critical forcing level is invariant across rates from very slow to very fast, with no R-tipping and no return tipping. That would fold C3 into C1 and remove one condition from the union.

### F5 - The verdict is per slot; the aggregate can hide the live signal

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**
Fig 11 :48: **"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."**

van Nes and Scheffer 2005 show exactly this aggregation effect in ecology: with spatial heterogeneity, *"each patch shifts to the other stable state at different values of the overall control variable. Therefore, the response of the ecosystem as a whole is gradual (i.e., the average of many asynchronous small shifts) instead of catastrophic"*, yet *"in response to a reverse change in the global stressor, the system always shows hysteresis."* Applied to the ocean with the anchor renamed per Fig 4 :20, the shape warning is: a basin-mean curve can look gradual while individual convection sites or depth levels jump and fail to return. The question's three adjectives must be answered per cell, per depth and per region, not for "the ocean" as one object.

**Refuter:** show that per-cell residuals are well approximated by the basin-wide average for abrupt events, with no loss of the live signal. That would dissolve the per-slot requirement.

### F6 - The ground is observation; model agreement is one pool talking

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."**
Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**
Fig 2 :40: **"agreement about the world is worthless when the agreeing frames share an evidence pool"**

Most AMOC models share a construction lineage (CMIP-family ocean components, common hosing designs, shared SST-based fingerprints). Intercomparison is valuable as a budget filter, not a witness for the verdict (Fig 9 :60). van Westen et al. 2024 make the anchor question concrete: reanalysis products suggest the ocean is on course to tipping but are *"too short (maximum of ~100 years) at the moment to adequately estimate the distance to the FovS minimum"*, so they call for sustained section measurements at 34°S (SAMBA). Ben-Yami et al. 2024 are blunter: *"the uncertainties are too large to reliably estimate tipping times by extrapolating historical information."* Ironically, Ditlevsen and Ditlevsen 2023, whose mid-century estimate is the headline result, received an Author Correction in 2025. None of this lets a model vote settle whether a real change is reversible.

**Refuter:** identify a genuinely independent anchor, outside the ocean-climate model pool, that settles the specific threshold and reversibility in the observed ocean. If one exists and agrees, the verdict gains a witness; if it conflicts, the derivation returns to the census.

### F7 - The specific threshold and the specific reversibility are a `gap`, not a hidden number

Fig 9 :32: **"you get a kind of thing, never the answer itself"**
Fig 13 :134: **"Unreachable is a verdict here, not a silence"**
Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**

No figure line returns a numerical freshwater threshold, a critical rate, the identity of the dominant feedback in a named model, or a yes/no on whether today's AMOC is reversible. The framework returns the shape any answer must have: union of conditions, per-slot indexing, threshold against feedback sign, basin structure for reversibility, rate as an independent axis, and a ground that only observation can supply. The missing object is characterized in effect terms (a source-discriminating, long-enough observing system), but is not held. This is `unreachable` at this budget, not a refusal to answer, and not underivable in principle.

**Refuter:** a ground reading that supplies the missing discriminator and settles the specific case would close the gap. Until then, any specific number asserted here would be a name where the framework returns a shape.

### F8 - What survives

| claim | mode | figure / world |
|---|---|---|
| The three adjectives are a union of at least three conditions | `general` shape, `specified` application | Fig 9 :55, :57; Lenton et al. 2008 union wording |
| Continuity versus abruptness follows feedback cycle sign against a threshold | `specified`, ungrounded | Fig 12 :121, :87; Fig 13 :32; Stommel, Rahmstorf, Lenton 2021 |
| Reversibility follows basin structure / closure; reversal is wall-moving | `specified`, ungrounded, structural analogy | Fig 6 :14, :23; Fig 8 :32; Stommel, Rahmstorf |
| Rate is an independent determinant | `specified`, ungrounded | Fig 4 :30, Fig 7 :36; Ritchie et al., Chapman et al., van Westen et al. |
| Verdicts are per slot, never averaged | `general` | Fig 1 :19, :22; van Nes and Scheffer 2005 |
| The ground is observation; agreement inside the model pool is not corroboration | `general` | Fig 2 :29, :35, :40; van Westen et al., Ben-Yami et al. |
| The numerical threshold and specific reversibility | `gap` | Fig 9 :32, Fig 13 :134, Fig 8 :39 |

---

## 4. Pre-registered refuter

Written before any conclusion, per Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."*

The shape claim (a union of conditions with the determinants above) is refuted if any of the following holds:

1. All observed ocean circulation changes lie on one continuous axis such that gradual, abrupt and reversible are monotonic functions of a single parameter, with no intersection requiring a second condition.
2. A change is abrupt with a demonstrably negative (stabilising) dominant feedback, no threshold crossing and no rate effect (breaks Fig 12 :121).
3. A change returns to its original basin on forcing removal with competing stable basins present in the same model and no reverse threshold crossed (breaks Fig 6 :14/:23).
4. The critical forcing level is invariant across forcing rates from very slow to very fast, with no R-tipping or return tipping (folds C3 into C1).
5. Per-cell residuals are well approximated by the basin-wide average for abrupt events with no lost live signal (breaks Fig 1 :19/:22).
6. A genuinely independent anchor, outside the ocean-climate model pool, settles the specific threshold and reversibility and contradicts the union shape.

If any fires, the union framing is wrong and is withdrawn. No part may be labelled `grounded` until a ground reading pays for it.

---

## 5. Recommendation

1. Lead with the union framing (F1). Do not answer the question with one adjective. Ask which of the three conditions a given change is in, per cell and per depth.
2. State the determinant for each condition separately (F2, F3, F4). Never average them into a single "tipping likelihood".
3. Treat observation as the anchor and model intercomparison as a budget filter (F6). Buy independence in proportion to the cost of being wrong (Fig 2 :42).
4. Record the missing discriminator as an instrument owed, not as a number to be invented (F7). The SAMBA/Basin-wide Array at 34°S is the concrete public instrument named in the literature (van Westen et al. 2024).
5. Send the generator, not a recording: Fig 4 :22 *"Only methods cross up. Only head starts come down."* Lead with the shape claim and its refuter, then offer the links.

---

## 6. Canonical usage check, strains, and retraction log

Two sources govern how the figures may be used: `FRAMEWORK/reference/FIGURES_README_canonical.md` (*"the quotes are the authority, not this summary"*; a reading that makes figures contradict one another has misidentified its domain) and the metalaws note (the seat reads the ground; the figures are metalaws, so design questions are answered by derivation, not escalation).

### Strains and re-census

- **S1, cycle sign versus named feedback.** Fig 12 :121 governs the sign of a cycle; Stommel and Rahmstorf name the salt-advection loop that instantiates the positive sign. Different objects, so no contradiction. The sign in a specific model remains a live ground question, recorded, not hidden.
- **S2, import moves the wall versus physical reversal.** Fig 6 :14/:23 and Fig 8 :32 are statements about reachability, not about ocean dynamics. Physical reversal is a forcing that carries the state across a reverse threshold; calling it "import" is a structural binding onto a held atom, not a claim that brine rejection is a literal import. Kept visible as a binding.
- **S3, gradual aggregate versus abrupt jump.** Stommel's jump and van Nes and Scheffer's gradual aggregate are not a conflict. Re-census: Fig 1 :19/:22 separates per-slot from aggregate, and Fig 9 :55 makes it a union. Different quantities.
- **S4, six-term substrate mapping.** Unlike the QMGR exemplar, this question maps cleanly: Fig 13 :76 *"Energy and a gradient compose a flow"* is the density-driven overturning, and the network is the connected ocean. No forced fit, so no strain, but naming "salt-advection feedback" is provenance from the ocean frame, not a seventh primitive.
- **After re-census: one live type question (which feedback sign dominates in a specific model), two dissolved by re-census (S3, S4), one binding kept visible (S2).**

### Retraction and confirmation log

| earlier reading | status after canonical check |
|---|---|
| "the answer is one of the three adjectives" | **Retracted.** Fig 9 :4-5/:55/:57 and the Lenton union wording make it a union. |
| "tipping point is a single number" | **Retracted.** Fig 9 :32 and the Ritchie/Chapman rate results make a fixed threshold an ungrounded object. |
| "hysteresis means the ocean cannot physically return" | **Narrowed.** Fig 6 is about reachability; physical reversal is a forcing that crosses the reverse threshold. Binding kept visible (S2). |
| "all models agree, so the verdict is settled" | **Retracted.** Fig 2 :40: one shared evidence pool is one witness; Ben-Yami et al. 2024 and the 2025 Author Correction reinforce it. |
| "the numerical threshold is a gap of the underivable kind" | **Corrected.** It is `unreachable` at this budget, not underivable in principle (Fig 8 :40-43). An instrument is owed, not a new atom. |
| union framing | **Confirmed.** Canonical README and Fig 9 agree; §5 re-census leaves it standing. |
| per-slot indexing | **Confirmed.** Fig 1 :19/:22 and van Nes and Scheffer 2005 agree at different scopes. |

### Round trip

The condensation from the verbatim figures to the shorthand "union of threshold sign, basin closure and rate" drops three constraints: the per-slot indexing (Fig 1 :19), the provenance/shadow-test gate on the salt-advection binding (Fig 8 :50-52), and the non-updating-anchor requirement (Fig 2 :29). The gap R_T is therefore nonzero and qualitative, enumerated here rather than set to zero. See `11_audit.md`.
