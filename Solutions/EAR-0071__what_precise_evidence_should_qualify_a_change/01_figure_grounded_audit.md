# Figure-grounded audit: what evidence qualifies a change as a tipping point?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (world source, Section 7) holds that LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, cited as `Fig N :line`), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, and the world sources opened 2026-11-22 and listed in `10_source_ledger.csv`.

---

## 0. The residual, in effect terms

A change C is observed in an earth system variable. Three descriptions compete for it:

| option | what it says happens | what following it leads to |
|---|---|---|
| A, tipping point | C occurs at a critical value of a control variable; the system reorganises qualitatively; internal feedbacks carry it; it may be irreversible | monitor the approach, estimate the threshold, avoid crossing it, treat the post-change state as a new regime |
| B, gradual trend | C is a smooth ordered change proportional to a driving variable; the system stays in the same regime | project the trend, adapt incrementally, no threshold search |
| C, abrupt event | C is a jump imposed by an external shock (volcanic eruption, earthquake, impact, sudden land clearance) with no internal threshold crossed | attribute to the external cause, respond to the shock, no threshold search |

**What an answer would look like (Direction, bound as an ordinary term).** An answer is a *discriminating rule*: a conjunction of evidence conditions E1..En such that observing all of them licenses A, observing their absence with a proportional ordered trajectory licenses B, and observing an external cause with no internal closing loop licenses C. The rule must be per system and per slot, because the framework's central quantity is indexed, not aggregated (Fig 1 :19, Fig 1 :22).

**The residual R itself.** R is the gap between what the currently held regime predicts and what is observed at each slot, as that gap evolves through the transition (Symbols table: *"The gap between prediction and observation ... it is the aim, not only the error signal, and it is always a slice"*). The decision is not "is the change big?" It is "which bond type generated this change?"

---

## 1. Domain census (before choosing any figure line)

### R by arity, symmetry, scale

- **Arity.** Three conditions wrapped in one observation. This is a **union compound**, not one hard question: Fig 9 :57 *"a case in two conditions is not a harder case of either"*, and Fig 9 :4-5 *"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."* Unbundle before searching.
- **Symmetry.** The three options are not interchangeable. A gradual trend is an ordered succession (→, an ordered bond). A tipping point requires a threshold comparison (⋛, ordered) and a closing loop (cycle). An abrupt event is an imposed discontinuity. Because the option structure is asymmetric, no symmetric bond can hold the three together as one term.
- **Scale.** First order within a regime (the trend), second order at the regime boundary (the comparison of two settled regimes, Fig 12 :103-104). A tipping point is a crossing between levels; an abrupt event need not be.

### One line per domain: actors, currency, anchor

| domain | actors | currency | anchor? nameable | question type |
|---|---|---|---|---|
| **D1 detection (measurement frame)** | instruments, time series, object slots s, the residual R⁺_s | residuals per slot; trend of each residual | **yes**: the ground. Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* | partition: which slot carries live mass (Fig 1 :19) |
| **D2 attribution (mechanism frame)** | control variable ρ, state variable F, feedbacks, the six structures, the seven bonds | bonds: ⋛ comparison, ⇒ production →, cycle, negation; settlement | **yes**: process experiment, palaeo proxy, or process model that can be pushed; the ground for mechanism | union: detection and attribution are two conditions, not one harder one (Fig 9 :57) |
| **D3 verification (decision frame)** | expert readers, reviewers, decision-makers | agreement and residuals | **yes**: the ground, never agreement. Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* | partition: which frame can be refused (Fig 10 :42) |

No nameable anchor means it is not a domain yet. All three have one, so all three are domains.

### Partition or union

The residual is a **union compound** of D1 and D2: a change can be detected without being attributed, and attributed without being well detected. They must be unbundled (Fig 9 :54 *"when the split lands on a union rather than a partition, unbundle before you search again"*). D3 sits across both as the checking arrangement.

### Order by dependency (Fig 3)

1. Detect: is there a live per-slot residual, and does it trend down or persist? (D1)
2. Attribute: what bond generated it? Refuse the wrong option before minting the right one (formula step 2: *"REFUTED ... a term held is false; what is owed is a refusal, not an explanation"*).
3. Verify: range independent frames against the ground, record the lineage (D3).
4. Describe R before choosing a frame (Fig 9 :27-28), otherwise any frame will seem to fit.

---

## 2. Figure census (bearing and verdict)

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | residual indexed per slot, not aggregated | no global-average evidence can qualify a tipping point |
| **2 The Ground** | anchor does not update; independence; agreement with shared pool is worthless | detection and attribution must range against a fixed ground, not each other |
| **3 Dependency Chain** | ordered by dependency; reading below a break reads nothing | detect before attribute before decide |
| **4 The Membrane** | round trip gap R_T must be measured | a condensed "tipping point" label loses the discriminating conditions |
| **5 Mint Pipeline** | residual that persists and does not trend down; shrinking test read with opposite sign | critical slowing down is a structural signature, not a brand |
| **6 Closure / Reachability** | import is the only operator that moves the wall; instruments improved from worse instruments | thresholds are found by instruments, not by re-labelling a trend |
| **7 Room Chain** | agreement is variation, not a verdict | multiple agreeing studies are one pool unless independent |
| **8 Union Surplus** | search finding nothing is not proof of absence; provenance separates convergence from import | absence of early warning does not disprove a tipping point |
| **9 Leave / Arrive** | split unions; describe residual first; filters never hand a verdict | the three options are a union to split, not a spectrum to average |
| **10 Ground Maintainer** | verifier cannot reconstruct the claim; bring a characterised residual | send the evidence rule and its refuter, not the theory |
| **11 The Habitat** | contact cascades; capability is agent and habitat | cascades are second-order and third-order, not first-order readings |
| **12 The Bond** | ⋛ threshold, ⇒ production, → sequence, cycle, chain, bond carries the difference | **decisive: the three options differ in bond, not in ingredients** |
| **13 Minimum Viable Set** | gradient is directedness; remainder compounding amplifies; shape not a name | self-amplification is structural; a universal numeric threshold is not given |
| **Operators table** | ⋛ *"a threshold relation between two quantities"*; goal is a comparison | threshold is a comparison, not a magnitude |
| **Symbols table** | R is per slot; ground is the anchor | the rule is per system and per slot |

Strained readings are named in Section 7, not smoothed over.

---

## 3. Findings

### F1 - The three options differ in bond, not in ingredients (decisive)

Fig 12 :94 *"The arrangement is the substance."*
Fig 12 :95-96 *"Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."*

A gradual trend, a tipping point, and an abrupt event can involve exactly the same measured variables: temperature, freshwater input, ice extent, rainfall. What distinguishes them is the relation among those variables. Naming the ingredients cannot decide the case. This is why a magnitude test ("big change = tipping point") fails: it reads the ingredients and not the bond.

- **Refuter:** exhibit a case where the same measured variables and the same arrangement (same bond, same order, same operating regime) are correctly called both a tipping point and a gradual trend with no further evidence. Then the bond does not decide and this finding falls.
- **Mode:** `general`, structural. **Status:** triangulated across Fig 12 :94-96 and Fig 12 :48 (chain) with low overlap from the notation argument; not grounded.

### F2 - A tipping point carries a threshold comparison, ⋛

Fig 12 :85-89 *"a threshold relation between two quantities"*; test: *"is it about which is larger, rather than both being present? Yes."*
Operators table :51 *"a goal is a comparison, which is why a vocabulary without it cannot state one"* (attributed to the Operators table, not a Fig N line).

The test distinguishes the options exactly. In a gradual trend, the driver and the response are both present at all times and co-vary; the question is "both present". In a tipping point, the question is "which is larger", the control variable against its critical value. The evidence owed is therefore a measured control trajectory with a located crossing, not just a response curve.

Lenton et al. 2008 (world source) give the same shape in domain terms: *"there exists a critical control value ρcrit from which any significant variation by δρ > 0 leads to a qualitative change (F̂) in a crucial system feature F, after some observation time T > 0"*. Low overlap between the figure's bond test and the climate definition: triangulated.

- **Refuter:** show a candidate tipping point with no control variable that can be ranked against a critical value, and where the change is demonstrably proportional to forcing at all observed scales. Then ⋛ does not govern and the case is a trend.
- **Mode:** `specified`. **Status:** triangulated (Fig 12 + Lenton 2008, low overlap).

### F3 - A tipping point produces a state that did not exist before; an abrupt event does not originate one

Fig 12 :75-77 *"A produces B; B did not exist before"*; test Fig 12 :79 *"is there a B before A fires? No."*

The post-transition regime is a new attractor. Evidence: qualitative change in the feature F, alternative stable states, hysteresis (the system does not return when the forcing is relaxed). Lenton et al. 2008 (world source) define abrupt change as *"when the climate system is forced to cross some threshold, triggering a transition to a new state at a rate determined by the climate system itself and faster than the cause"*. Two pieces of this matter: **new state**, and **rate determined by the system itself** (the second is F4). Wunderling et al. 2024 (world source) add: *"Nonlinear changes can occur at tipping points (TPs), where a slight change in a parameter or a small perturbation of a system's state can cause a large change in the system, driving it to transition into a completely different (often undesirable) state."*

- **Refuter:** demonstrate recovery to the original regime on relaxation of the forcing, with no hysteresis and no new attractor, in a case where self-amplification was claimed. Then ⇒ fails; call it a forced excursion.
- **Mode:** `specified`. **Status:** triangulated (Fig 12 + Lenton 2008 + Wunderling 2024; note the two world sources share the tipping-points literature pool, so they count as one pool, with Fig 12 as the independent figure witness).

### F4 - A tipping point needs a closing positive feedback loop; a gradual trend is a chain that cannot close

Fig 12 :121 *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."*
Fig 12 :48 *"A chain is the degenerate case: one bond type, no branching."*
Fig 13 :31-32 *"a remainder compounding through a chain that amplifies is chaos"*

This is the sharpest discriminator against both alternatives. A gradual trend is an ordered chain (Fig 12 :70-72 *"A then B; B needs A to have happened"*): it cannot close by construction. An abrupt event is an imposed jump with no internal loop that takes over. A tipping point requires the system's own output to re-enter as input with a positive sign, so that after the trigger the dynamics are self-driven.

Lenton 2021 (world source, *Weather*): *"tipping points occur when reinforcing (positive) feedbacks within a system take over from stabilising (negative) feedbacks and propel change from one state to another."* Wunderling et al. 2024 (world source): *"Once the tipping element is triggered, its self-amplifying feedbacks dominate the dynamics of the tipping element during the tipping process."* This is Fig 12's cycle in domain vocabulary, a genuinely low-overlap corroboration (dynamical systems vs composition theory).

- **Refuter:** exhibit a regime shift where the post-change dynamics are fully accounted for by the external forcing with no internal reinforcing loop, and where the system relaxes back when forcing stops. Then the cycle condition fails; classify as a forced abrupt event.
- **Mode:** `specified`. **Status:** triangulated (Fig 12 :121, Fig 13 :31-32, and the dynamical-systems literature, low overlap).

### F5 - Critical slowing down is a residual that persists and does not trend down

Fig 5 :58-60 *"a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at, which is the same shrinking test the selector already runs, read with the opposite sign."*

Read with the opposite sign: a healthy regime absorbs perturbation and its residual shrinks (the selector's improving residual). An approaching threshold is announced by the opposite behaviour: the old model's residual stops shrinking and flattens, then fails. This is the figure's structural form of critical slowing down.

World corroboration (secondary): Scheffer et al. 2009 (world source, *Nature*) find *"three possible early-warning signals in the dynamics of a system approaching a bifurcation: slower recovery from perturbations, increased autocorrelation and increased variance."* Lenton et al. 2008 (world source) state that bifurcation tipping points are *"universally characterized by τ → ∞ at the threshold"*. Dakos et al. 2012 (world source, *Ecology*) caution that *"variance may sometimes decrease close to a transition"* while *"autocorrelation always increases toward critical transitions in our analyses."*

**Warning written into the finding:** Scheffer et al. 2012 (world source, *Science*) hold that *"slowing down is neither a universal warning signal for shifts nor specific to an approaching tipping point"* and that *"sharp change may simply result from a sudden big external impact."* So F5 is **necessary-looking but not sufficient**: it must be combined with F2, F3, and F4. A filter (early-warning statistic) must never be allowed to hand the verdict (Fig 9 :60 *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*).

- **Refuter:** a case with rising lag-1 autocorrelation and slower recovery that demonstrably arises from a cooling rate or a change in noise colour, with no approaching threshold and no closing loop. Then the persistent-residual signature is not specific and must be demoted to a budget filter.
- **Mode:** `specified`. **Status:** triangulated (Fig 5 + three early-warning papers, low overlap between composition theory and time-series statistics).

### F6 - The evidence is per slot; a global average hides the live signal

Fig 1 :19 *"The residual is indexed by object slot, not aggregated."*
Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."*

A global mean temperature series cannot by itself qualify a regional tipping element. The evidence must be read on the element and its habitat: the Greenland Ice Sheet, the AMOC, the Amazon, per slot. Wunderling et al. 2024 (world source) make the same point in domain terms: tipping elements are *"large-scale subsystems of the Earth"* whose interactions are *"not isolated"* and whose effects are *"three steps out"* in the cascade sense (Fig 11 :52-53 *"contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."*).

- **Refuter:** show a tipping point whose discriminating evidence exists only in a global aggregate and vanishes in every physically meaningful slot. Then per-slot indexing is the wrong instrument.
- **Mode:** `general`. **Status:** triangulated (Fig 1 + Fig 11 + Wunderling 2024, low overlap).

### F7 - Absence of early warning is not proof of absence, and the numeric threshold is not named by the framework

Fig 8 :39 *"So a search that finds nothing is never a proof of absence."*
Fig 13 :133 *"what it returns is a shape rather than a name."*
Fig 13 :134 *"Unreachable is a verdict here, not a silence"*
Fig 13 :134-135 *"narrowing gets you close while the ground decides"*

The framework returns the **shape** of the qualifying evidence (threshold comparison, new regime, closing loop, persistent residual), not a universal number for ρ_crit. The number is ground-settled per system: by process experiment, palaeo reconstruction, or a model that can be pushed through the threshold. Lenton et al. 2008 (world source) explicitly list *"Unidentified"* critical values for several candidate tipping elements and report expert-elicited ranges with large uncertainty. That is the honest stop.

- **Refuter:** produce a universal critical value derived from the figures alone, valid across tipping elements, and settled against a ground. Until then any single number is an import and must carry provenance (Fig 8 :50-52 *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"*).
- **Mode:** `general`. **Status:** single-source for the shape-not-a-name limit within the figures (Fig 13 + Fig 8), corroborated by the canonical figures README (same framework author, so high overlap and weak corroboration).

### F8 - Detection and attribution must be triangulated against a ground that does not move

Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*
Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
Fig 2 :40 *"agreement about the world is worthless when the agreeing frames share an evidence pool"*
Fig 2 :45 *"Frames range against the ground. They do not negotiate with it."*
Fig 7 :35 *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*

The IPCC detection and attribution practice is a world instance of this: Eyring and Gillett et al. 2021 (world source, IPCC AR6 WGI Ch 3) write that *"A regression coefficient which is significantly greater than zero implies that a detectable change is identified in the observations"* and that *"Combining the evidence from across the climate system increases the level of confidence in the attribution of observed climate change to human influence and reduces the uncertainties associated with assessments based on single variables."* Fingerprints, observations, and process understanding are different frames ranging against one ground. World Weather Attribution (world source) states: *"researchers don't rely on statistical significance alone to find evidence of climate change, but complement the statistical analysis with other lines of evidence."*

- **Refuter:** show a tipping-point claim settled by a single frame with no independent line of evidence and with an anchor that updates when the frame does. Then the verification rule is not needed and F8 falls.
- **Mode:** `general`. **Status:** triangulated (Fig 2, Fig 7, and the D&A literature, low overlap).

### F9 - What actually survives, with mode attached

| claim | mode | figure / source |
|---|---|---|
| The difference among the three options is carried by the bond, not the ingredients | `general` | Fig 12 :94-96 |
| A tipping point carries a threshold comparison of control against critical value | `specified` | Fig 12 :85-89; Lenton 2008 |
| It produces a new regime with hysteresis or alternative stable states | `specified` | Fig 12 :75-79; Lenton 2008 |
| It requires a closing positive feedback loop; a trend is a chain that cannot close | `specified` | Fig 12 :121, :48; Fig 13 :31-32; Lenton 2021; Wunderling 2024 |
| Critical slowing down is a persistent, non-trending residual, necessary-looking but not sufficient | `specified` | Fig 5 :58-60; Scheffer 2009, 2012; Dakos 2012 |
| Evidence must be per slot, not a global average | `general` | Fig 1 :19, :22; Fig 11 :52-53 |
| A universal numeric threshold is not delivered by the framework | `general` | Fig 13 :133; Lenton 2008 (unidentified critical values) |
| Verification is triangulation against a fixed ground | `general` | Fig 2 :29, :35, :40, :45; IPCC AR6 WGI Ch 3 |

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach: *"a falsifier written before the run is a design instrument, not only an honesty device"* (Seat Map, failure genera / output layer, seat-map file, not a Fig N line).

The evidence rule in `07_the_tether_answer.md` is refuted if any of the following holds:

1. **Bond refutation.** Two cases sharing all measured ingredients and the same bond and arrangement are correctly classified one as a tipping point and one as a gradual trend with no further evidence. (Breaks F1.)
2. **Threshold refutation.** A confirmed regime shift shows no control variable rankable against a critical value at the transition, with response proportional to forcing at all observed scales. (Breaks F2.)
3. **Loop refutation.** A confirmed shift is fully accounted for by an external forcing with no internal reinforcing loop, and the system relaxes when the forcing stops. (Breaks F4; such a case is reclassified as abrupt event.)
4. **Warning refutation.** A rising autocorrelation and slower recovery are demonstrated to arise from a non-threshold cause in a case with no closing loop and no threshold. (Demotes F5 to a filter.)
5. **Ground refutation.** A claim is settled by one frame whose anchor moves when the frame changes. (Breaks F8.)

If any fires, the rule is withdrawn or narrowed and the change in the log is made visible. Until one is run, nothing here is `grounded`.

---

## 5. Recommendation

1. Lead with the bond distinction (F1), not with a magnitude or speed criterion. Fast does not mean tipping; Lenton et al. 2008 explicitly allow *"gradual or episodic tipping"* and *"slow or asymptotic tipping."*
2. Require the conjunction E1 to E4 (threshold comparison, new regime, closing loop, persistent residual) before applying the label. Treat early-warning statistics as filters for the budget, never as witnesses for the verdict (Fig 9 :60).
3. Report the evidence per tipping element and per slot (Fig 1 :19, :22). Name the habitat and the cascade, not just the direct driver (Fig 11 :52-53).
4. State the mode on every sentence. A candidate shape is not a measurement (THE_FORMULA mode rule).
5. Keep provenance: which threshold value came from a process experiment, which from a palaeo proxy, which from an expert elicitation (Fig 8 :50-52).
6. Send the checkable rule and its refuter first; the theory only after a verdict is recorded (Fig 10 :52 *"Bring a characterised residual, never the source."*).

---

## 6. Canonical usage check

Two canonical sources were read after the first five sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of the available instruments and records the lineage so the stop is honest. *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are metalaws for design questions; the ground decides what they cannot settle. A design question like "what counts as evidence" is answered by derivation from the figures, not by escalation to an authority.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| I first read Fig 9 :32 and Fig 13 :133 as forbidding any quantitative threshold | **Corrected.** The limit governs a *missing primitive / a universal name*, not a measured critical value. The framework returns the shape of the qualifying evidence; the numeric ρ_crit is settled per system by an instrument or a pushed model. Lenton et al. 2008 list "Unidentified" values rather than inventing them. |
| I first treated rising variance as a tipping-point witness | **Demoted to a filter.** Dakos et al. 2012 find variance can decrease; Scheffer et al. 2012 find slowing down is not specific. Only the conjunction with F2, F3 and F4 licenses the verdict. Fig 9 :60 governs. |
| I first read "abrupt" as the defining feature of a tipping point | **Refused.** Lenton et al. 2008 allow gradual and slow tipping; rate is not the criterion. The criterion is a threshold crossing with self-amplification. |
| I considered Fig 6 :14 *"the only operator that moves the wall"* as a figure line for abrupt external events | **Declined as strained.** Fig 6 governs the epistemic wall of a frame (import moves a closure). An abrupt geophysical event crosses a physical state boundary, not a frame boundary. Different quantity, so re-census; the discriminator for abrupt events is the absence of F2/F3/F4 plus an identifiable external cause (Scheffer et al. 2012). |
| F1 decisive | **Confirmed and narrowed.** Decisive for the classification question, not for the measurement question. It says the bond must be identified; it does not supply the instrument. |
| F7 shape not a name | **Canonically confirmed**, with the correction above. |

---

## 7. Strain, re-census, honest stop

- **Fig 5 persistent residual vs Scheffer's non-specific slowing down.** Not a figure conflict. Fig 5 governs the *ranking* of which held term to refuse (persistent and flat residual). Scheffer governs the *specificity* of the time-series statistic. Different quantities, so no re-census owed; the conjunction rule records both.
- **Fig 12 cycle vs gradual forcing.** Re-census resolved: an external forcing can be gradual and still trigger a tipping point (Lenton et al. 2008). The cycle condition applies *after* the trigger, when self-amplification must dominate. Different phases of the same event, not a contradiction.
- **Fig 6 import vs physical external shock.** Strain named and declined in Section 6. No hidden smoothing.
- **After re-census: one strain named and declined, none hidden.**
- **Honest stop.** The framework returns the shape of a qualifying evidence rule and stops where the instruments stop. It cannot, from the figures alone, name a critical value for the Greenland Ice Sheet, the AMOC, or the Amazon, nor certify that any particular present-day system has crossed one. That is a ground reading we have not performed. *"Unreachable is a verdict here, not a silence"* (Fig 13 :134).
