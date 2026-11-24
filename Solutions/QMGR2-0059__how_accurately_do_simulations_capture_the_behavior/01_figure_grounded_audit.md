# Figure-grounded audit: QMGR2-0059, accuracy of galaxy simulations

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, opened 2026-11-23: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too (intelligence is essentially arrangement). However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the astronomy question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`, `THE_SEAT_MAP_Field_Guide_amended.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the initial condition and the chosen subgrid parameter set.
- **a** is running the model: the solver, the timestepping, the feedback coupling.
- **Γ(b,a)** is the predicted state of ordinary baryons: gas, stars, dust.
- **o′** is what telescopes return about ordinary baryons in real galaxies.
- **s** is the component-and-regime slot: gas, stars, dust, at a given mass scale and redshift. R is indexed per slot and per object, never aggregated into one accuracy number.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"a global R near zero with one live slot residual is a legal state"** (Fig 1 :13)
> **"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."** (Fig 1 :28)

The phenomenon to explain is not whether simulations are "accurate" in the abstract but **which slots keep R small against observation, which carry a live residual, and what instrument would discriminate the two causes of a large residual**. A frame that answers with one number has already pooled the signal (Fig 1 :22).

State the residual as: *why does the gap between what a simulation predicts for gas, stars and dust and what observation returns stay small for some components and regimes and grow for others?* This is an effect description. It names no code, no "subgrid model", no "feedback", no "resolution". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a pair of conditions whose conjunction keeps a slot's R small, plus the class of instrument that would discriminate a failure of one condition from a failure of the other. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* The anchor here is a measurement: the sky. Fig 2 :30: *"you push on it, it is not an anchor."* Code consensus, resolution counts and calibration targets move when pushed; they are instruments at best. Viable anchor: an independent observation used as a held-out test, with its own uncertainty, measured per slot.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is at least three-place (model Γ, observation o′, slot s) and is ordered by redshift z, so it carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) and a **comparison** bond for "accurate enough" (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :88). It is not symmetric: observation is the anchor and the model is the frame.
- **Symmetry.** "Accurate" is a threshold relative to observational uncertainty, not an absolute quantity (Fig 12 :85-89; Operators table :46-51). The comparison is asymmetric: the sky does not update when a simulation changes (Fig 2 :33).
- **Scale.** Several scales are in view: sub-parsec star formation and supernova microphysics (unresolved, subgrid), the resolved kpc ISM and CGM, the individual galaxy (one-agent loop), the galaxy population (Fig 4), and the Mpc cosmic web. The membrane between them is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"The transform between scales loses information, and that is the point"* (Fig 4 :27).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The numerical solver** (code verification) | hydro scheme (SPH, AMR, moving mesh), gravity solver, timestepping, mass and force resolution | numerical error, convergence under refinement | yes: analytic test problems (Sedov, Evrard, Zeldovich) and convergence tests | admitted |
| **D2 The subgrid bonds** (unresolved physics) | star-formation recipe, stellar and AGN feedback,metal enrichment, cooling, dust models |参数 calibrated to reproduce chosen observables | yes, but borrowed from D3: the sub-parsec process itself has no direct instrument | admitted, overlaps D3 |
| **D3 The observational ground** (validation) | telescopes, IFU and photometric surveys, absorption-line and dust probes | measured observables with uncertainty | yes: the sky, a measurement (Fig 2 :29) | admitted |
| **D4 The chaotic ensemble** (stochasticity) | initial particle positions, floating-point round-off, RNGs, mergers | variance across individual galaxies | yes: statistical distributions of observables can be compared; individual trajectories cannot | admitted, overlaps D3 |
| **X1 "The simulation itself" as a free-floating accuracy property** | the code | a score | **no** anchor independent of D3; accuracy is a property of simulation-and-observation-contact (Fig 11 :39) | not a domain; absorbed into D3 |
| **X2 "Code-to-code agreement"** | two simulation suites | mutual closeness | measurable, but agreement is frame-internal (Fig 1 :27) and the two suites calibrate to the same observations (Fig 2 :31) | absorbed into D1/D2 as a filter, not a witness |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that codes never differ in quality. X2 is real but is a budget filter, never a witness (Fig 9 :60).

### 1.3 Partition or union

D2 and D3 overlap: the subgrid parameters are calibrated to observations, so the calibration anchor lives in the observational domain. D4 and D3 overlap: chaotic variance appears in the observed distribution of galaxy properties. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: (C1) **numerical fidelity**, are the equations solved right, and (C2) **physical fidelity**, are the equations and subgrid bonds right. They have different instruments: test problems and refinement studies for C1, held-out observations for C2. A single lever, more resolution, clears the region where only C1 fails and leaves the C2 intersection standing (Fig 9 :55). Gas, stars and dust are themselves three slots whose failure modes are categorically different, not three degrees of one failure.

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the observation resolve the component at all?) → 2 vocabulary (does Γ have terms for gas, stars, dust and their interactions, i.e. subgrid physics?) → 3 objective (which observable counts as a match, and at what tolerance?) → 4 planning (which code, which resolution, which calibration set) → 5 learn and carry (calibrate, settle against held-out data, carry up). The middle link, having terms for what the situation affords and saying what would count as progress, is the one with the least direct instrument. Most effort lands above the break because that is where the measurements already exist (Fig 3 :29-30).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how accuracy is indexed; forbids one score |
| 2 The Ground | sky is a named anchor; independence vs common pool | governs the witness rule; code agreement is one pool |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs scale transfer and calibration loss |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs when a physical term can be admitted at all |
| 6 Closure / Reachability | import only moves the wall; instruments improved from worse ones | governs subgrid physics and source-discriminating observations |
| 7 Room Chain | same closure handed along; agreement compounds, evidence does not | governs code-to-code agreement and calibration handoff |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and the search for a new observable |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; keep anchor reachable | governs calibration drift and held-out tests |
| 11 The Habitat | capability is agent-and-habitat; introduce, never subtract | decisive for X1 and D3 |
| 12 The Bond | melt/freeze/boil, isomer, arrangement is the substance | governs why same-resolution codes diverge |
| 13 Minimum Viable Set | set closed, arrangements not; chaos as compounded remainder | honest-stop role and ensemble limit |

Strain test applied during this census: an early attempt to read Fig 13's six physical terms as a classification of gas, stars and dust only fit by calling dust a network and star formation a gradient. That is a strain, so Fig 13 does **not** govern the classification of baryonic components. Re-census sent Fig 13 to the honest-stop and chaos role only (section 6, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about simulations, `grounded` only if settled by an independent observation. None is `grounded`.

### F1: Accuracy is a per-slot residual, never a single number

**Mode: `general` with a `specified` consequence for reporting. Domains all. Status: triangulated (Fig 1 and Fig 9, low overlap: residual indexing vs union unbundling).**

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"a global R near zero with one live slot residual is a legal state"** (Fig 1 :13)

A single "accuracy of X percent" is a pooled reading: R is indexed by component, object and regime. A code can match the stellar mass function while having a live residual in circumgalactic gas, and bubble diagrams of "faithfully reproduced baryonic physics" hide exactly that. The ground enters as the only metric (Fig 1 :23), and *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* (Fig 1 :27).

World bearing (secondary only). van de Sande et al. 2018 write: *"The validity of simulation predictions become doubtful if the main parameter that is being used to make the predictions matches well with observations, while other parameters do not."* Crain and van de Voort 2023 write of *"the characteristics used for the calibration"* that *"the characteristics used for the calibration cannot be considered as predictions of the simulation."* Both corroborate per-slot reporting; the first is an observational comparison, the second a review, so they are not fully independent (Fig 2 :31).

**Refuter:** a published accuracy metric that is a single global number and that predicts, prospectively and per slot, which component will diverge next in a held-out galaxy. If one exists, F1's reporting consequence is false.

### F2: The ground decides; code-to-code agreement is not corroboration

**Mode: `general` with a `specified` consequence for how comparisons are quoted. Domains D1, D2, D3. Status: triangulated (Fig 2 and Fig 7, low overlap: anchor/independence vs room chain).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."** (Fig 2 :29)
> **"Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are."** (Fig 2 :31)
> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)
> **"same closure, handed along; agreement compounds, evidence does not"** (Fig 7 :12)

Major simulation suites calibrate to overlapping sets of observables (the z=0 stellar mass function, the mass-size relation, the black-hole mass relation), and several share numerical ancestry. Their mutual agreement on those calibration targets is the pool talking, not two frames confirming each other. Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*

World bearing. Ludlow et al. 2020 report that *"even simulations starting from the same initial conditions, but carried out using different hydrodynamical codes, do not converge to similar solutions"*, and recall Scannapieco et al. 2012 where nine codes produced *"instantaneous star formation rates (SFRs) that differed by a factor ∼10^3"*. This **conflicts** with a naive reading of "simulations agree"; the conflict sends us back to the census (section 6, re-census R2), where agreement is re-read as a property of calibration targets, not of the whole model. van de Sande et al. 2018 add: *"the areas of discrepancy and agreement are different in the various simulations."*

**Refuter:** two suites with demonstrably independent evidence (different solver, different subgrid physics, different calibration data) that agree on a held-out observable and then survive an independent measurement of it. If agreement holds at maximum independence in the figure's sense (Fig 8 :50), F2's consequence weakens.

### F3: Convergence is a gate, not the ground

**Mode: `general`. Domains D1, D3. Status: triangulated (Fig 1 and Formula step 5, low overlap: frame-internal quantities vs settlement rule).**

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"the ground settles it. Verified only by what pays. A gate is not the ground."** (Formula step 5)

Resolution, particle count and convergence are quantities the simulation produces; they cannot score the simulation. Fig 5 :30 names the inert result: *"the machinery worked; the answer was already known."* A code that converges at fixed subgrid physics has satisfied a gate; only a held-out observation settles accuracy.

World bearing, low overlap with astronomy. The NAFEMS Simulation Governance working group, with William Oberkampf, states: *"Verification deals with the issues of numerical solution reliability, accuracy, and everything to do with the issue of the solution of the mathematical model. Validation deals with the issue of how well the model results compare to experimental measurements or experimental observations. So those are two completely different issues."* And: *"In validation we always try to compare the simulation data with the physical measurements, a comparison between data and reality."* Crain and van de Voort 2023 independently note that *"Simulations are therefore often better suited to offering qualitative insight rather than quantitative predictions"*, corroborating the same separation from inside astronomy.

**Refuter:** a demonstration that resolution and convergence alone settle accuracy on a held-out observable with no observational comparison at all. If convergence predicts the observed residual by itself, F3 is false.

### F4: Subgrid physics is the bond, so same atoms give different substances

**Mode: `specified` (physics-facing) with a `general` structural core. Domain D2. Status: triangulated (Fig 12 and Fig 6, low overlap: bond/arrangement vs closure wall).**

> **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** (Fig 12 :5)
> **"the ingredients are recorded and the arrangement is not"** (Fig 12 :14)
> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** (Fig 12 :117)
> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)

Two codes can hold the same ingredients, dark matter, gas, stars, black holes, and the same numerical resolution, yet differ in their subgrid bonds: how cold gas turns into stars, how supernova and AGN energy couples to the surrounding gas, how metals mix. By Fig 12 :117 they are **isomers**: the difference is invisible in the ingredient list and decisive in behaviour. Refinement inside a closure cannot add the missing bond (Fig 6 :21); that is why more particles do not by themselves fix a feedback prescription.

World bearing. Crain and van de Voort 2023 report: *"Similar galaxy populations can emerge in simulations with dissimilar subgrid feedback implementations. However, these models generally predict markedly different gas flow rates into, and out of, galaxies and their haloes."* This is the isomer claim observed: same calibrated population (same formula), different bond, different gas flows (decisive in behaviour). The same review adds that *"There is no guarantee that the reproduction of a particular observable represents a unique solution, i.e. different subgrid models may yield similarly-successful outcomes."*

**Refuter:** two simulations with different subgrid feedback that also agree, within observational uncertainty, on gas inflow and outflow rates, CGM absorption, and dust attenuation, so that the bond difference is no longer decisive in any observable. Then the isomer reading fails.

### F5: The residual concentrates where no instrument reaches

**Mode: `specified`. Domain D2. Status: triangulated (Fig 3 and Fig 11, low overlap: dependency chain vs habitat enumeration).**

> **"Perception has obvious failures and obvious tests. Planning has obvious failures and obvious tests."** (Fig 3 :25)
> **"The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."** (Fig 3 :26)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)
> **"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."** (Fig 11 :48)

Star formation and feedback act on scales orders of magnitude below the resolution element of a representative-volume simulation. There is no direct instrument for the individual event in that volume; the link is calibrated at the scale above it. Fig 3 :24 says this is where chains usually break, and Fig 3 :27 says an uninstrumented link is not a working one.

World bearing. Crain and van de Voort 2023: *"the macroscopic efficiencies of feedback mechanisms are governed by microphysics acting on spatial scales several orders of magnitude below the resolution scale of galaxy population simulations"*, and *"In the absence of authoritative empirical constraints on how microphysics influences macroscopic scales"* the implementations are diverse. Ludlow et al. 2020: subgrid processes *"all occur on physical scales not resolved by simulations"* and *"are often poorly constrained by observation"*.

**Refuter:** a direct observation that resolves individual star-formation and feedback events at the subgrid scale in a representative volume, making the middle link instrumented. If the link then still carries the same residual, F5's mechanism is wrong.

### F6: Chaos caps accuracy for individual objects; accuracy is an ensemble statement

**Mode: `specified`. Domain D4. Status: triangulated (Fig 13 and Fig 4, low overlap: chaos as compounded remainder vs lossy scale transform).**

> **"a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise."** (Fig 13 :32)
> **"The transform between scales loses information, and that is the point."** (Fig 4 :27)

A nonlinear, hierarchical system returns a distribution, not a unique trajectory. Fig 13 :32 names the mechanism: the residual re-enters and compounds. Statistical agreement can be good while any single identified galaxy diverges.

World bearing. Ludlow et al. 2020 report that *"chaotic galaxy-to-galaxy variations can account for up to 50 per cent of the variance in simulated galaxy scaling relations, such as the star formation-mass and Tully-Fisher relations"*, and that minute changes to initial particle positions, floating-point round-off and RNGs produce large differences in individual star-formation histories. This corroborates the figure's shape at a different scale, so it is one witness with low overlap, not an independent ground.

**Refuter:** a simulation that predicts the exact star-formation history of a single identified galaxy to within observational error over a Hubble time and does not diverge under sub-percent perturbations to initial conditions. If achieved, F6 fails for individual objects.

### F7: Source discrimination, not more of the same comparison

**Mode: `general` with a `specified` consequence for instrument choice. Domains D2, D3. Status: triangulated (Fig 6 and Fig 8, low overlap: instrument from worse instrument vs no proof of absence).**

> **"An instrument is not built from a description. It is improved from a worse instrument already returning something."** (Fig 6 :32)
> **"Nobody specified a telescope from an account of Mars. A wandering point in the sky was already a reading, and every sharper instrument was built on the residual the last one produced."** (Fig 6 :33)
> **"So a search that finds nothing is never a proof of absence."** (Fig 8 :39)

When the same observable is tuned again and again, the search stays inside one closure. What is owed is a source-discriminating observable, a new instrument pointed at the residual, not another argument over the same mass function. Fig 2 :42 prices the choice.

World bearing, low-overlap field. Isaiah N, *The Hard Problem is About Source* (2026): *"If several paths create the same behavior, then behavior is a projection with lossy information"*; the colour instrument *"cannot comment on the source"*; the case *"was proven wrong not by argument, but by the arrival of a better instrument."* In astronomy the analogue is the circumgalactic medium: Crain and van de Voort 2023 note that *"CGM observations are thus a promising means of breaking this degeneracy and guiding the development of new feedback models"*, because different feedback bonds that match the galaxy population predict different gas flows.

**Refuter:** a purely theoretical argument that names the correct subgrid prescription without any new observation, and is subsequently confirmed by a held-out ground measurement. If such an argument exists, F7's consequence weakens.

### F8: Accuracy is a property of simulation-and-observation-contact

**Mode: `specified`. Domains X1, D3. Status: triangulated (Fig 11 and Fig 2, low overlap: capability in the habitat vs anchor triangulation).**

> **"capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)
> **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."** (Fig 11 :70)

A simulation judged only by internal tests, or only against mock observations produced by itself, proves the wiring and never capability. Fig 11 :39 relocates accuracy out of X1 and into D3.

World bearing. van de Sande et al. 2018: *"We have taken great care to ensure that our simulated measurement methods match the observational methods as closely as possible"*; that care is the act of establishing contact, not of increasing resolution. NAFEMS/Oberkampf: validation is *"a comparison between data and reality."*

**Refuter:** a simulation declared accurate solely on internal convergence and synthetic self-comparison whose accuracy is then confirmed by an independent observation with no change in contact. If that holds, F8 is false.

### F9: The round-trip gap must be measured, not set to zero

**Mode: `general` with a `specified` consequence for calibration reporting. Domains D2, D3. Status: triangulated (Fig 4 and Fig 6, low overlap: scale gap vs closure expansion).**

> **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."** (Fig 4 :30)
> **"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."** (Fig 4 :31)

The calibration loop is a round trip: a full observed galaxy is abstracted to a few statistics (the stellar mass function, the mass-size relation), the model is tuned to those statistics, and the result is concretised back into mock observables. What the statistics cannot hold is the round-trip gap R_T. Treating "matches the mass function" as "matches the galaxy" sets R_T to zero and is the dead-reckoning error Fig 4 :30 names.

World bearing. van de Sande et al. 2018 is itself this round trip: mock galaxies were *"projected onto a 2D plane"* and measured with techniques matched to the surveys, and the paper reports *"moderate mismatches in Re, ε, σe, and mean stellar age"* that a mass-function match alone would have hidden. Crain and van de Voort 2023 note that *"the characteristics used for the calibration cannot be considered as predictions of the simulation"*, which is the same gap stated from the modelling side.

**Refuter:** a calibration statistic that preserves all information needed to predict every other observable, so that R_T is zero. If one exists, F9's consequence fails.

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| Accuracy is indexed per component, object and regime, never one number | general | Fig 1 :13, :19, :22, :28 | figure-derived |
| The sky is the anchor; code agreement is not a witness | general | Fig 2 :29, :31, :40; Fig 7 :12 | figure-derived |
| Convergence is a gate, not the ground | general | Fig 1 :23, :27; Formula step 5 | figure-derived |
| Subgrid feedback is a bond; same atoms give different substances | specified | Fig 12 :5, :14, :117; Fig 6 :21 | triangulated F4 |
| The live residual sits at the uninstrumented middle link | specified | Fig 3 :24-27; Fig 11 :48 | triangulated F5 |
| Chaos caps object-level accuracy; ensemble agreement is the reachable claim | specified | Fig 13 :32; Fig 4 :27 | triangulated F6 |
| What is owed is a source-discriminating observable | general | Fig 6 :32, :33; Fig 8 :39 | triangulated F7 |
| Accuracy is simulation-and-observation-contact | specified | Fig 11 :39, :40, :70 | triangulated F8 |
| Calibration carries a round-trip gap that must be reported | general | Fig 4 :30, :31 | triangulated F9 |
| The numerical accuracy percentage for any named code | not stated | none | gap: framework returns a shape, not a measurement |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule, Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A single global accuracy number predicts, prospectively and per slot, which component will diverge next in a held-out galaxy (breaks F1, Fig 1 :19, :22).
2. Two suites with different solvers, different subgrid physics and different calibration data agree on a held-out observable and survive an independent measurement of it, so agreement holds at maximum independence (breaks F2, Fig 2 :31, :40).
3. Convergence alone settles accuracy on a held-out observable with no observational comparison (breaks F3, Formula step 5).
4. Two different subgrid feedback implementations agree on gas flows, CGM absorption and dust attenuation as well as on the calibrated population (breaks F4, Fig 12 :117).
5. A direct instrument resolves the subgrid-scale process and the residual there does not change (breaks F5, Fig 3 :27).
6. A simulation predicts one identified galaxy's star-formation history to observational error over a Hubble time without stochastic divergence (breaks F6, Fig 13 :32).
7. A calibration statistic preserves all information needed for every other observable, so R_T is zero (breaks F9, Fig 4 :30).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until an independent observation has paid for the shape.

---

## 5. Recommendation

1. Lead with the per-slot residual and the refuter, not with a claim that a named code is accurate (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Report separate residuals for gas, stars and dust, and separate the verification result from the validation result. A blended accuracy score is a pooled reading (Fig 10 :26, *"saturated metrics, pooled readings"*) and destroys the diagnostic.
3. Treat code consensus as a budget filter and as one witness at most (Fig 9 :60; Fig 2 :40).
4. Ask, at each handoff, which link the chain stops at and whether that was measured (Fig 3 :29). Do not spend the whole budget above the break.
5. Choose source-discriminating observables, for example CGM absorption and dust attenuation, over another tuning of the stellar mass function (Fig 6 :33; Fig 8 :39).
6. Publish the round-trip gap R_T with every calibration claim (Fig 4 :30).
7. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
8. Stop at the shape. Do not name which code is "the accurate one"; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, and the essays *The Library of Babel*, *The Recursive Self-Improvement Trap*, *Decoding Tacit Knowledge* and *The Hard Problem is About Source* (all opened 2026-11-23).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop.
- *The Library of Babel*: *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* And: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"* These license F1's shape and the union unbundling of section 1.3.
- *The Recursive Self-Improvement Trap* confirms the simulation status of this document: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* It also supplies the prestige rule used in `05`: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."*
- Seat Map :281: *"An unmeasured quantity is a specification of what to measure and is worth having, it is not a verdict."* This forbids presenting any accuracy percentage as settled here.

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to read the six terms as gas / stars / dust | **Retracted, strain S1** | Only fit by renaming a component as a kind of network. Re-census: Fig 13 governs composition rules and the honest stop, not a classification of baryons |
| Treated agreement between flagship codes as corroboration | **Retracted as a witness, kept as a filter** | Shared calibration targets and numerical ancestry (Fig 2 :31, :40) |
| Wanted to quote "simulations reproduce the observed galaxy population" as a verdict | **Narrowed to `specified`, per slot** | It is a calibration statement, not a held-out settlement (Fig 1 :27; Crain and van de Voort) |
| Read Ludlow's code divergence as a conflict with F2 | **Conflict, re-census R2** | Re-read: agreement is about calibration targets, divergence is about physics; different quantities, no flip of verdict |
| Used NAFEMS V&V as a verdict for astronomy | **Narrowed to a structural corroboration** | Different field, low overlap; corroborates the shape of the verification/validation split, not any number |
| Planned to name CGM absorption as "the answer" | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer. CGM is an instance of the source-discriminating class |
| Called Fig 11 :40 a `general` law about all simulations | **Narrowed to `specified`** | No held-out observation here pays for the simulation-level version |
| F1 "accuracy is not one number" | **Canonically confirmed and strengthened** | The README's shape-not-a-name limit plus Fig 1 :19; a number is a name where a shape is owed |

**Strains sent to the log:** S1 (Fig 13 applied to baryonic components), resolved by re-census; S2 (calling the stellar mass function "the ground" while it is also a calibration target), resolved by Fig 2 :29-30 and Fig 1 :27: the habitat and the instrument update, the ground is the sky and does not. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus *The Library of Babel* bundle passage: it is a union of numerical fidelity and physical fidelity, and gas / stars / dust are three slots with categorically different instruments.
2. **What is the anchor?** The sky, a measurement named in Fig 2 :29. Not code consensus, not resolution counts (Fig 1 :27).
3. **Is accuracy in the simulation alone?** No. Fig 11 :39-40. It is a property of simulation-and-observation-contact.
4. **Why do same-resolution codes diverge?** The subgrid bond is the missing information (Fig 12 :5, :117); refinement inside a closure cannot add it (Fig 6 :21).
5. **Where does the live residual sit?** At the uninstrumented middle link (Fig 3 :24-27), and in components such as CGM gas that are not calibration targets (Fig 11 :48).
6. **What can be said at the stop?** A shape: per-slot residuals, two unbundled conditions, a class of source-discriminating instrument, and a measured round-trip gap. No accuracy number, no "best code", no `grounded` verdict. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*
7. **Who may check it?** An outside frame holding only the residual and its refuter (Fig 10 :52); agreement from a selected Believer list is a convention, not corroboration (Seat Map :163).

---

## 8. Updated verdict

The shape survives: **"how accurately" is a per-slot residual against an independent observational anchor, not one number. Numerical convergence is a gate; physical fidelity lives in the subgrid bonds, so same-ingredient codes are isomers whose differences are invisible in the ingredient list and decisive in gas flows. The live residual concentrates at the uninstrumented middle link and in uncalibrated components such as the CGM, chaos caps object-level accuracy to ensemble statements, and calibration carries a round-trip gap that must be reported. Accuracy is a property of simulation-and-observation-contact.** The two conditions, numerical and physical fidelity, are kept separate and never averaged. Which number belongs to which named code is a `gap`, not a silence: the framework returns a shape, and the instrument that would settle a single number is not held here. Mode `specified`. No world source was allowed to flip a verdict; the one genuine conflict (code divergence versus code agreement) was returned to the census and re-mapped. No unresolved strain remains after re-census.
