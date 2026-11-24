# Figure-grounded audit: could a single dark-matter model explain four observational slots?

**Mode of this document: `specified` on the per-domain verdicts, `general` on the structural shape, `gap` on which specific model is correct, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." No measurement taken here settles which dark-matter model is right, so nothing in this folder is labelled `grounded`.

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, 2026) says "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources of figure text.** `C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md`, read this session. Every figure quote below is an exact substring of that file, cited as `Fig N :line`. The canonical usage rule is `FRAMEWORK/reference/FIGURES_README_canonical.md`; the metalaw reading is `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`.

---

## 0. The question under audit and its effect statement

> Source: QM & GR Questions.txt line 146, section A. Dark matter.
> "Could a single dark-matter model explain galaxies, clusters, gravitational lensing, and the early universe?"

Stated in effect terms, stripping the theory words:

- **The four slots.** Galaxies, clusters, gravitational lensing, and the early universe are four things we can measure. Each has an instrument and an anchor that does not move when a model thinks about it: rotation curves and density profiles (galaxies), mass estimates from kinematics plus X-ray and Sunyaev-Zel'dovich (clusters), lensing convergence and image geometry (lensing), and acoustic peak locations and light-element abundances (early universe).
- **The ask.** "A single model" asks whether one closure, one set of primitives and bonds held by one frame, closes the residual at all four slots. It is a reachability claim about one Γ, not a request for more observations.
- **What each answer leads to.** A yes returns one all-explaining frame, which is structurally a last room, and it predicts that the same atoms settle every slot. A no returns a union of four conditions with per-slot verdicts and, where a slot fails, an owed import from a frame whose closure differs.
- **The ordinary term we bind before the run (Formula "Direction").** By "single-model answer" we mean: a closure Γ whose atoms and bonds predict the observation at each of four named slots, with a stated anchor per slot, a stated dependency order, and a refuter per slot. Binding this makes the sought-for shape refusable instead of a preference floating outside the loop.

---

## 1. Domain census (before any figure line is chosen)

### 1.1 The residual R by arity, symmetry and scale

- **Arity: four.** R has four slots, not one. Galaxies, clusters, lensing and the early universe are four indexed residuals. The framework's rule is explicit: "The residual is indexed by object slot, not aggregated." (Fig 1 :19) and "Aggregating across slots is how a live signal disappears into an average." (Fig 1 :22) The question as asked aggregates them into one yes/no, which is exactly the move the figure forbids.
- **Symmetry: asymmetric across slots.** The "single model" ask is a demand for symmetry across scale: the same terms and bonds at kpc and at Gpc. But the four anchors are not interchangeable. A rotation curve is not an acoustic peak. Under a symmetric bond k operands have one term (Fig 12 :92); here the slots are not symmetric operands, so the "one model covers all" inference does not follow from counting them as four instances of one thing. The residual is a union of differently grounded conditions.
- **Scale: four scales, one dependency chain.** Roughly kpc to Gpc, redshift 0 to 1100. The early universe is upstream because it sets the dark-matter density and the initial perturbation spectrum that the later slots inherit. Lensing cross-cuts as a geometry-direct mass tracer. The chain is ordered by dependency: "The chain is ordered by dependency, not by importance." (Fig 3 :20)

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if it has a nameable anchor. All four observational slots do; the model frame and the verification frame are included because they have anchors too.

| domain | actors | currency | anchor (does not update on the model) | question type |
|---|---|---|---|---|
| D1 galaxies | stars, gas, dark halo | rotation velocity, central density slope | measured rotation curves and density profiles | per-slot residual |
| D2 clusters | galaxies, intracluster medium, dark halo | mass, velocity dispersion, X-ray and SZ signal | cluster mass measurements | per-slot residual |
| D3 lensing | source galaxies, lens mass distribution | convergence, shear, image positions | observed lensing maps, for example the mass-gas separation in the Bullet Cluster | per-slot residual, geometry-direct |
| D4 early universe | photons, baryons, dark matter, neutrinos | acoustic peak locations and heights, Ω_c h², light abundances | Planck CMB spectrum and BBN abundances | upstream slot, sets initial conditions |
| D5 the model closure | the model's primitives and bonds: a gravitating component with equation of state, sound speed, self-interaction, hot or cold phase space | predictions of structure across scale | the four anchors above | reachability of one Γ over the union |
| D6 verification and outreach | external checkers, instrument builders | agreement and residual | the ground, never agreement | seat arrangement |

No anchor, no domain. If a proposed fifth observational slot had no instrument returning anything that fails to resolve, it would not be a domain yet (Fig 6 :34-35, "Where nothing is, there is no edge to extend from").

### 1.3 Partition or union

This is a **union**, not a partition. The four conditions overlap: cluster mass is measured both kinematically and by lensing; galaxies feed cluster observables; the CMB fixes the density that both galaxy and cluster structure inherit. Over a union, "And when the split lands on a union rather than a partition, unbundle before you search again." (Fig 9 :54) "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." (Fig 9 :55-56) One parameter tweak that fixes a galaxy profile can leave the CMB peaks or the cluster lensing mass untouched. Verdicts are therefore kept per domain and never averaged into one "dark matter works" score.

### 1.4 Dependency order (Fig 3)

1. D4 early universe: fix the cold dark matter density Ω_c h² and the primordial perturbation spectrum. This is perception plus vocabulary for everything downstream.
2. D2 clusters and D3 lensing: the largest collapsed structures, closest to the linear initial conditions.
3. D1 galaxies: the smallest and most baryon-contaminated slot, further from the clean initial conditions.
4. D5 model closure and D6 verification: assessed only after each slot's residual is stated.

The order is not by importance. It is by what consumes what. "Optimising a link that already works cannot rescue one that does not." (Fig 3 :19)

---

## 2. Figure census (quotation before conclusion)

The figures that bear were read verbatim before any verdict was written. Strained readings are named in section 6, not smoothed over.

| figure | bearing on this question | preliminary verdict |
|---|---|---|
| 1 The Agent | residual per slot, ground is the only metric | the four scales are four slots; aggregation is the named failure |
| 2 The Ground | anchor non-updating, independence, correlation valence | each slot needs its own anchor; agreement from one dataset is one witness |
| 3 Dependency Chain | ordered by dependency, a break cannot be rescued from above | CMB is upstream; galaxies cannot be tuned to rescue a CMB mismatch |
| 4 The Membrane | methods cross, recordings do not; measure the round trip | a fitted parameter set is a recording; the generative model is the method |
| 5 Mint Pipeline | three guards as a product; MDL bargain; settling not sufficient | a model is not a mint just because it is elaborate; the ground must pay per slot |
| 6 Closure / Reachability | import is the only wall-moving operator; instruments improved from worse ones | the single-model ask is a reachability question; import needs a source gate |
| 7 Room Chain | no last room, agreement compounds, evidence does not | the unconditional all-explaining model is the terminal room, refused |
| 8 Union Surplus | no search adds an atom; search that finds nothing is not proof of absence; residual first | per-slot residual before picking a model; a null at one slot is not a universal no |
| 9 Leave / Arrive | describe before looking; union unbundling; filters are not witnesses | unbundle the four slots; no figure line names a particle |
| 10 Ground Maintainer | channel decays, not the ground; verifier non-access; convention cannot decide outcome | small-scale tensions are a reachable channel; an assumed model is a verdict in disguise |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | a model's fit is a property of model-and-instrument, not of the model alone |
| 12 The Bond | bond carries information the ingredients do not; isomer, settled molecule becomes atom | competing dark-matter models are isomers over a shared atom set; CMB settles first |
| 13 Minimum Viable Set | set closed, arrangements not; infinite effort inside a finite reach; unreachable is a verdict | the six are the loop substrate, not a particle taxonomy; no single last model |
| Operators table | negation is a unary operator; a refutation refuses a term | each slot owes a refusal condition, not just a fit |
| Symbols table | R is the aim and always a slice; the ground is the anchor | the per-slice reading of the four slots is canonical |

---

## 3. Findings F1 to F10

### F1 - The four phenomena are four slots; the single-model question aggregates them (decisive for framing)

Verbatim, Fig 1 :19 and :22:

> **"The residual is indexed by object slot, not aggregated."**
> **"Aggregating across slots is how a live signal disappears into an average."**

And Fig 9 :54:

> **"And when the split lands on a union rather than a partition, unbundle before you search again."**

The question bundles galaxies, clusters, lensing and the early universe into one predicate, "explained by a single model." Under Fig 1 the correct move is to index R by slot: R_galaxy, R_cluster, R_lensing, R_early. A global "CDM works / CDM fails" collapses a live signal at the small-scale slot into an average dominated by the large-scale and CMB slots, where the model works well. The world literature confirms the asymmetry rather than being asked to supply it: the Annual Review of Astronomy and Astrophysics review states that the ΛCDM model "has been a demonstrably successful framework for predicting and explaining the large-scale structure of the Universe and its evolution with time. Yet on length scales smaller than ∼1 Mpc and mass scales smaller than ∼10¹¹ M☉, the theory faces a number of challenges" (Bullock and Boylan-Kolchin 2017). Aggregating would report "works" because the large scales win the average.

**Verdict:** `general`, triangulated (Fig 1 per-slot indexing and Fig 9 union unbundling are low overlap: one is an indexing rule, the other a split rule). **Refuter:** if the four slots were shown to share one atom and one anchor such that a single global residual is sufficient, this finding falls and the question can be asked as one.

### F2 - A single model is one closure; reachability, not effort, is the question

Verbatim, Fig 6 :21 and :23:

> **"MINT composes inside the closure and can never add an atom."**
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**

And Fig 8 :32:

> **"no search, however long, adds an atom"**

A model is a frame with a library Γ: its primitives (a gravitating component, its equation of state, sound speed, interaction cross section) and the bonds between them. Whether that closure reaches all four slots is a reachability question (Fig 6), settled by derivation and by the ground, not by trying harder. Where a slot cannot be closed, Fig 6 :14 names the only operator that moves the wall: "the only operator that moves the wall", namely import from a frame whose closure differs, gated by provenance and a shadow test (Fig 8). Two world results show the shape of such wall moves. El-Zant 2015 (MNRAS) finds that "Unified dark matter models are appealing in that they describe the dark sector in terms of a single component. They however face problems when attempting to account for structure formation," specifically that pressure gradients in a unified dark fluid make flat or falling rotation curves impossible for a broad class of equations of state, and that the resulting density profile is "incompatible with that inferred in the outer part of clusters." A 2025 arXiv study of clustered unified dark sector models reports that late-universe large-scale-structure data "prefer models that are far from ΛCDM. But these are in tension with the CMB data."

**Verdict:** `specified`, triangulated (Fig 6 plus Fig 8 plus two low-overlap world results: one on galaxies and clusters, one on CMB versus large-scale structure). **Refuter:** exhibit one closure that demonstrably settles all four slots at once with no imported atom left unaccounted for. Then the union verdict is wrong and this finding is withdrawn.

### F3 - The dependency chain runs from the early universe down; a downstream tune cannot rescue an upstream break

Verbatim, Fig 3 :19 and :20:

> **"Optimising a link that already works cannot rescue one that does not."**
> **"The chain is ordered by dependency, not by importance."**

The early-universe slot is upstream. The CMB acoustic peaks measure the cold dark matter physical density with high precision; the Particle Data Group CMB review (Scott and Smoot, 2025 revision) quotes Ω_c h² = 0.1200 ± 0.0012 within the six-parameter fit and notes that "the standard cosmological model still fits the data well, with the error bars on the parameters continuing to shrink." Galaxies and clusters inherit that density as initial conditions. A model tuned to fix a dwarf-galaxy rotation curve while disagreeing with the CMB has a break at the middle link of Fig 3's chain, and work at the downstream end does not arrive where it is needed. The 2025 unified-dark-sector result that CMB secondary anisotropies force the clustered fraction f close to unity while late-universe data prefer f further from one is exactly this dependency inversion made empirical.

**Verdict:** `general` structural, triangulated (Fig 3 plus the CMB and unified-sector world sources). **Refuter:** demonstrate that the dependency order for dark matter runs galaxies-first, so the CMB is a downstream consequence rather than an initial condition. Then this finding is retracted.

### F4 - The unconditional "one model explains everything" is the last room, refused

Verbatim, Fig 7 :6 and :12-13:

> **"the limit: no last room"**
> **"same closure, handed along; agreement compounds, evidence does not"**

And Fig 13 :116-118:

> **"a frame can search without end and still not arrive: infinite effort inside a finite reach."**

A single all-explaining dark-matter model would be a terminal frame, the last handoff after which nothing further can be asked. The figures forbid that room and that last route. The canonical figures README devotes a section to "This is not a Theory of Everything - and that is the point." So the strong reading of the question, "yes, there is one final model that explains all four," is figure-refused as a verdict. This is **not** an empirical "no." It is a structural limit: what can be returned is a candidate closure whose reach is reported per slot, with what is unreachable stated and the lineage recorded. Fig 8 :39: "So a search that finds nothing is never a proof of absence." A null at one slot does not license a universal denial.

**Verdict:** `general`, triangulated (Fig 7 room chain and Fig 13 closed set are low overlap: one is about handoffs, the other about combinatorial closure). **Refuter:** a derivation showing a terminal, all-explaining frame is allowed by the figures, or an empirical result that closes all four residuals under one closure with no outside left to import from. Until then this stands as a limit, not a denial.

### F5 - The framework returns a shape, not a model; which model is a declared gap

Verbatim, Fig 9 :32 and :27-28:

> **"you get a kind of thing, never the answer itself"**
> **"describe it before you go looking, or any frame you pick will seem to fit"**

No figure line names ΛCDM, warm dark matter, self-interacting dark matter, a generalized Chaplygin gas, or any other candidate. The framework cannot, by its own rule, name the occupant of the closure. What it can return is the **shape** any single-model candidate must have:

1. one stated set of atoms (a gravitating component with specified equation of state, sound speed, interaction and phase-space distribution);
2. a closure that reaches all four named slots, with the reach computed per slot rather than averaged;
3. for any slot that fails, an import from a frame whose closure differs, with source gate and shadow test (Fig 6 :12-14, Fig 8);
4. four independent, non-updating anchors, one per slot (Fig 2);
5. a written refuter per slot, since "a refutation is a negation, which is why a vocabulary without it can only accumulate" (Operators table :58);
6. a lineage, so the stop is checkable (Fig 13 :127-141).

Which specific model occupies that shape is a `gap`. Fig 13 :134: "Unreachable is a verdict here, not a silence." The gap is of the shape-not-a-name and unreachable-at-this-budget kind, not underivable in principle: an instrument (a scale-specific observation that discriminates among candidate models at the failing slot) is owed, and no such discriminating reading is claimed here.

**Verdict:** `general` on the shape; `gap` on the model name. Triangulated for the shape (Fig 9 plus the canonical README); the gap is a verdict, not a silence. **Refuter:** exhibit a figure line that selects a specific dark-matter model. Then F5's gap is retracted.

### F6 - Anchors must be independent and must not update on the model

Verbatim, Fig 2 :29, :35, :40 and :42:

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**
> **"agreement about the world is worthless when the agreeing frames share an evidence pool"**
> **"Buy independence in proportion to the cost of being wrong."**

Each slot has its own anchor. Galaxy rotation curves do not change when a halo model is proposed. CMB peak locations do not change when a structure-formation model is proposed. The Bullet Cluster lensing map is a geometry-direct reading: the Chandra and ESA description says "This was the first clear separation seen between normal and dark matter," with the lensing mass following the galaxies rather than the X-ray gas. That is a different instrument and a different evidence pool from the CMB acoustic peak measurement. When several models are fit to the same simulation or the same dataset, their agreement is one pool talking, not two frames confirming each other. The framework's independence rule decides both whether agreement means anything and whether a union has surplus (Fig 8 :47-49).

**Verdict:** `general`, triangulated (Fig 2 plus the genuine low-overlap lensing and CMB instruments in the world literature). **Refuter:** show that two of the four slots draw on the same evidence pool at the level that matters here, so they are one anchor wearing two names. Then this slot separation is overstated and the census needs redoing.

### F7 - The ground does not decay; the channel does, and an assumed model is a verdict in disguise

Verbatim, Fig 10 :24, :47 and :42:

> **"the ground does not decay, the channel does"**
> **"a convention that decides an outcome has stopped being one"**
> **"A verifier that can reconstruct the claim cannot verify it."**

The small-scale literature is the channel staying reachable, not the ground moving. The PNAS review "Cold dark matter: Controversies on small scales" says the model "has been remarkably successful in explaining cosmic structure over an enormous span of redshift, but it has faced persistent challenges from observations that probe the innermost regions of dark matter halos and the properties of the Milky Way's dwarf galaxy satellites." To declare by convention "we assume CDM solves all four" would be a convention deciding an outcome, which Fig 10 refuses. To state that this audit is a simulation and cannot settle the claim is to keep the seat honest. And a researcher who has absorbed the whole model before being asked for a verdict has joined the frame being checked.

**Verdict:** `specified`, triangulated (Fig 10 plus the PNAS and Annual Review channel records). **Refuter:** show that the small-scale tensions evaporate under systematic uncertainties such that the channel carries no residual, in which case the channel-decay finding is moot for those slots. The 2024 cusp-core review indeed argues that "systematic uncertainties in models of the gas kinematics of low-mass galaxies give us an inaccurate inference on the central dark matter densities in these objects," which is recorded as evidence for the union, not as a flipped verdict.

### F8 - Competing models are isomers over a shared atom set; the CMB molecule settles first

Verbatim, Fig 12 :5, :117 and :104:

> **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**
> **"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
> **"A settled molecule becomes an atom for whatever composes over it."**

Cold, warm, self-interacting and unified-fluid models can be written as molecules over a shared atom set: a gravitating component, an equation of state, a sound speed, an interaction cross section, a phase-space distribution. Differing bonds (collisionless streaming, pressure support, scattering, decaying into dark energy) yield different substances whose differences are decisive at galaxy versus cluster scales. This is a figure-derived structural claim, hence `specified`. The CMB molecule is settled first (Fig 12 :104) because the early universe is upstream (F3); only then does it become an atom for the structure-formation molecule. World corroboration: El-Zant 2015 shows that the same unified component that behaves as pressureless matter at high density cannot support the observed outer profiles of galaxies and clusters, a bond-level difference invisible if one records only the ingredient "dark sector."

**Verdict:** `specified`, single-source on the figure definition (Fig 12), with world corroboration. **Refuter:** if two candidate models cannot be written over a shared atom set (each requires atoms the other lacks), the isomer claim fails and the weaker functional-group claim stands.

### F9 - A model's fit is a property of model and habitat, not of the model alone

Verbatim, Fig 11 :39, :49 and :51:

> **"capability is a property of agent-and-habitat, never of the agent alone"**
> **"An actor's valence is relative to the residual, not a property it carries."**
> **"No standing list of good actors survives a change of residual."**

A model that fits clusters may misfit galaxies because the residual changed, not because the model changed. Baryonic feedback is an actor whose valence is relative to the slot: at cluster scales it is a small correction; at dwarf-galaxy scales it may be the dominant lever. The Annual Review review notes the key open question is "whether a better understanding of baryon physics, dark matter physics, or both is required to meet these challenges." That is a habitat enumeration question (Fig 11 :43-44, enumerate everything in contact with the residual), not a question about the model in isolation.

**Verdict:** `general`, single-source on the figure side (Fig 11) plus world corroboration. **Refuter:** demonstrate a model whose fit is invariant across all four slots under the same instrument setup, in which case the habitat dependence is weaker than claimed here.

### F10 - What survives: the defensible residue with mode attached

| claim | mode | figure |
|---|---|---|
| Each of the four phenomena is a separate residual slot with its own anchor | `general` | Fig 1 :19; Fig 2 :29 |
| The four slots form a union over a dependency chain, not a single residual | `general` | Fig 9 :54-56; Fig 3 :20 |
| Whether one closure reaches all four is a reachability question | `specified` | Fig 6 :21, :23; Fig 8 :32 |
| The unconditional all-explaining model is the last room, refused | `general` | Fig 7 :6; Fig 13 :116-118 |
| Any single-model candidate must be stated as a shape with four anchors and refuters | `general` | Fig 9 :32; Operators :58 |
| Which specific model is correct is a gap, unreached not silence | `gap` | Fig 13 :134 |
| Competing models are isomers over a shared atom set | `specified`, falsifier written | Fig 12 :117 |

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach: "a falsifier written before the run is a design instrument." The shape claim in this folder is refuted if any of the following holds:

1. A single model's closure is demonstrated to settle all four per-slot residuals at once against independent non-updating anchors, with no imported atom left unaccounted for. This would break the union and reachability verdict (F1, F2).
2. One of the four slots has no nameable anchor (no instrument returning anything that fails to resolve). Then it is not a domain yet and the census is invalid (Fig 6 :34-35).
3. The four slots form a partition with one common atom and no overlap, so unbundling is unnecessary. Then Fig 9 :54 is misapplied (F1).
4. A figure line is found that governs which specific dark-matter model is correct. Then F5's gap is retracted.
5. The dependency order is demonstrated to run galaxies-first, so the CMB is downstream. Then F3's chain direction is wrong for this case.
6. An outside frame returns a refutation of the shape claim at any slot with provenance. It is copied into `11_audit.md` with source and re-evaluated by the auditor seat as if it came from any other source; verdict weight comes from the ground, not from agreement.

If any fires, the claim is withdrawn or revised in place. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Ask the question as four per-slot residuals, not one yes/no (F1). This is the single most important repair.
2. State the dependency order, early universe first, and refuse to let a galaxy tune stand in for a CMB mismatch (F3).
3. Report reach per slot. Where a slot fails, characterize the missing thing in effect terms and look for the frame whose closure predicts its shape, with source gate and shadow test (F2, F5).
4. Name the gap as a gap. No figure line selects a particle or a fluid (F5). Do not convert "the framework returns a shape" into "dark matter is impossible."
5. Keep the four anchors independent. Do not pool agreement from models fit to the same dataset as corroboration (F6).
6. Lead with the shape and the pre-registered refuter, then ask what would count as a failure at each slot. Offer the links only after the verdict is recorded (Fig 10 :52, "Bring a characterised residual, never the source.").
7. Figure 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion." Send the generator, the per-slot derivation and the refuter, not a fitted parameter table.

---

## 6. Strains, re-census and corrections to my own first pass

### S1 - Fig 13's six terms are not a dark-matter taxonomy (dissolved by re-census)

My first pass tried to map "dark matter" onto one of the six substrate terms (space, time, energy, spectrum, gradient, network). That strains Fig 13, which governs the substrate the loop assumes, not a particle catalogue in the physics frame. Re-census: dark matter is a term in the physics frame's library (D5), not one of the six. Fig 13 :115 ("The set is closed. The arrangements are not. That gap is why import exists.") governs closure, not ontology. No strain after re-census. The earlier reading is kept visible here rather than erased.

### S2 - The isomer claim needs a fixed atom set (live strain, falsifier written)

Fig 12 :117 requires "same atoms, different bond." Candidate dark-matter models do not all share one atom set: warm dark matter brings a mass and phase-space distribution, self-interacting dark matter a cross section, unified dark matter an equation of state. The isomer claim in F8 is therefore conditional on writing the candidates over a shared atom set. Falsifier: if two candidates require atoms the other lacks, the isomer claim fails and the weaker functional-group claim stands. This is kept as a live strain, not smoothed.

### S3 - Baryonic feedback returns the galaxy slot to the census (dissolved, verdict not flipped)

A first-pass reading took the small-scale tensions as direct evidence against a single dark-matter model. The literature (Bullock and Boylan-Kolchin 2017; the 2024 cusp-core review) says baryonic physics may account for some of them. Re-census: the galaxy slot is a union of dark-matter physics and baryon physics, so a single lever that changes only dark matter leaves the intersection standing (Fig 9 :55-56). This strengthens the union verdict; it does not flip it. Recorded as a correction with the source.

### C1 - My own overstatement of "no last room" (narrowed, kept visible)

I initially read Fig 7 "no last room" as a decisive empirical "no, no single model can work." That overstates the figure. The figures refuse an unconditional terminal frame; they do not assert an empirical result about dark matter. The honest form is a shape plus per-slot verdicts and a gap, not a blanket denial. Both the first-pass reading and its narrowing are recorded so neither is quietly lost.

---

## 7. Canonical usage check (figures README and WATSON 60)

Two local sources were read after the first sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also "a reading that makes one contradict another has misidentified its domain, not found a flaw," which is the rule applied in S1 and S3. The canonical limit: the framework says "what a missing thing would have to look like (a shape, not a name)" and stops at the limit of the available instruments, recording the lineage so the stop is honest. "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the seat reads the ground; it does not ask the anchor to decide what the figures already settle. Design questions are answered by derivation, not escalation.

### Retractions and confirmations

| earlier finding or reading | status after the canonical check |
|---|---|
| F1 "decisive" framing of the single-model question | **Narrowed to a framing finding.** The figures require indexing by slot and unbundling a union; they do not by themselves return an empirical yes or no. |
| F4 "one model is impossible" (my first pass) | **Retracted at figure level, kept as limit.** Fig 7 refuses the terminal room; it does not assert a measurement. See C1. |
| "dark matter is one of the six" (my first pass) | **Retracted by re-census.** See S1. Dark matter is a physics-frame term, not a substrate member. |
| F5 "gap on which model" | **Canonically confirmed.** The figures README returns "a shape, not a name," so naming ΛCDM or a Chaplygin gas is a binding from the physics frame, not a derivation. |
| F8 isomer claim | **Conditional, not retracted.** "Same atoms" requires a shared atom set; the falsifier stays live (S2). |
| S3 small-scale tensions as direct anti-single-model evidence | **Narrowed.** Baryon physics makes the galaxy slot a union; the verdict is unchanged (S3). |
| Apparent Fig 7 versus Fig 8 strain (no last room versus search that finds nothing is not proof of absence) | **Not strained after re-census.** Fig 7 governs terminal frames; Fig 8 governs what a null search licenses. Different objects. |

### Seven-question recursive derivation (summary)

1. **One residual or four?** Four, indexed by slot (Fig 1 :19, Fig 9 :54). Aggregation is the named failure.
2. **Are the four symmetric?** No. Different instruments and anchors, so the single-model symmetry demand is not licensed (Fig 2 :29, Fig 12 :92).
3. **Which way does the chain run?** Early universe first, then clusters and lensing, then galaxies (Fig 3 :20). A downstream tune cannot rescue an upstream break.
4. **Is a single model a mint?** It is a closure, not automatically a mint. The three guards and settlement apply per slot (Formula steps 3 and 5; Fig 5).
5. **What if one slot fails?** Import from a frame whose closure differs, with source gate and shadow test. More search at the same reach is a different question (Fig 6 :14, Fig 8).
6. **Does the framework name the model?** No. It returns a shape (Fig 9 :32). The gap on which model is a verdict, not silence (Fig 13 :134).
7. **What would reverse the verdict?** A closure settling all four slots at once, a figure line naming a model, a demonstration that the CMB is downstream, or an outside refutation with provenance. Written in section 4 before this conclusion.

### Updated verdict

The shape survives: four indexed slots over a dependency chain, per-slot reach, independent anchors, an import rule for the failing slot, a shape-not-a-name limit, and a pre-registered refuter. What does not survive is the question's own aggregation and the strong "one final all-explaining model" reading. Strains after re-census: one live (the fixed-atom condition on the isomer claim, S2), none hidden. World sources corroborate the shape, notably the large-scale success plus small-scale tension (Bullock and Boylan-Kolchin 2017), the failure of a single unified fluid across galaxies and clusters (El-Zant 2015), the CMB versus large-scale-structure tension (2025 unified dark sector study), and the geometry-independent lensing anchor (Clowe et al. 2006 via ESA and Chandra). They do not decide the question; the figures do.
