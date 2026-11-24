# Figure-grounded audit: how a simulation of the early universe can be tested

**Mode of this document: `general` on the structural findings, `specified` on the application to early-universe cosmology, never `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." Also: "an unmeasured quantity is a specification of what to measure and is worth having, it is not a verdict" (Seat Map :281).

**Status: a simulated derivation, not a ground reading.** The Recursive Self-Improvement Trap says LLM output is *"simulacra"* and that *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, cited `Fig N :line`). Usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`. Loop: `FRAMEWORK/figures/THE_FORMULA.md`. Checking rules: `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`. World sources: nine real URLs opened 2026-11-23, listed in `10_source_ledger.csv`.

---

## 0. The residual, stated in effect terms

Let Γ be a simulation: a library of physical laws, initial conditions, a numerical scheme and a set of parameters. Running Γ with belief b and action a yields a prediction Γ(b,a). Let o' be what can actually be observed of the universe. The residual is R = |Γ(b,a) - o'| per observational slot s, never as one global score.

Slots are not one thing. They include the CMB temperature and polarization power spectra, primordial light-element abundances, baryon acoustic oscillations, the large-scale distribution of galaxies, and the gap between a subgrid model and a resolved calculation. The laboratory recreation of the early universe is unavailable as a direct ground: we cannot set the initial conditions of the actual universe and rerun it.

**The question in effect terms:** what may count as a test of Γ when the direct manipulation of its subject is impossible?

- **Option A:** internal validation. Check that the code implements the equations, that outputs look reasonable, that the simulation matches the dataset it was tuned to, and that it agrees with other simulations. What it leads to: a frame scoring itself with quantities it produces, plus a room of correlated frames. It buys a convention.
- **Option B:** ground-range validation. Treat the observed universe as the anchor; range each slot prediction against a measurement that does not update on Γ; require independence between probes; commit predictions before seeing them; use analogues only for wiring; record the lineage and the stop. What it leads to: a checkable shape, an enumerable refuter and a named limit.

The residual is a **union compound**, not one hard question (Fig 9 :54-55: "And when the split lands on a union rather than a partition, unbundle before you search again. A bundled problem is usually a union of overlapping conditions, not a list of separate ones."). "Cannot recreate the early universe" bundles at least three separable conditions: no direct manipulation of the subject, limited observational access, and lossy coarse-graining of the model. A single lever clears one and leaves the intersections standing. They must be unbundled and given separate loops.

---

## 1. Domain census (before choosing any figure line)

**R by arity, symmetry and scale.**

- **Arity:** many slots, indexed by observable, not one global score. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :28: "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."
- **Symmetry:** the relation between simulation and observation is not symmetric. The observation does not update on what the simulation thinks. Fig 2 :25: "the anchor / pinned: it does not update on A or B". A simulation that averages across slots or treats agreement as mutual update enters Fig 2's collapse 1.
- **Scale:** two scales and a lossy transform between them. The microphysical input (reaction rates, initial fluctuation spectrum) and the emergent output (galaxy populations) are not the same object. Fig 4 :27-29: "The transform between scales loses information, and that is the point. Going up throws away detail; that is what makes the result reapplicable. But it means the trip is not reversible, and something carried up and brought back down will not match what was sent."

**One line per domain: actors, currency, anchor.** A domain without a nameable anchor is not yet a domain.

| domain | actors | currency | anchor |
|---|---|---|---|
| **D1, the simulation frame** (Γ, closure(Γ)) | laws, initial conditions, numerical scheme, parameters, subgrid prescriptions | prediction Γ(b,a); residual R against observation | none inside. Fig 6 :21: "MINT composes inside the closure and can never add an atom." A frame cannot supply its own anchor. |
| **D2, the observational ground** (the accessible universe) | photons of the CMB, primordial nuclei, galaxies and clusters, telescopes and detectors | measurements o' that do not move when the model changes | the universe as observed. Fig 2 :29-30: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor." |
| **D3, the analogue / harness frame** (lab and synthetic substitutes) | fluids, Bose-Einstein condensates, lab plasmas, reaction-rate experiments, code test suites | wiring checks, mechanism checks, numerical convergence | the apparatus, but it is a **substituted habitat**: Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." |

**Partition or union.**

- D1 and D2 are a **partition boundary**: the ground is not a frame and cannot be listed as one of the parties. Fig 2 :47: "A ground listed as one of the parties has already become a frame." Fig 2 :46: "The anchor is not a third party to the disagreement and it is not the tie-breaker in a vote. Each frame is corrected by it separately, and what makes the correction sound is that neither frame can move it."
- D1 and D3 are a **union**, not a partition. An analogue or a test harness shares laws and numerical machinery with the simulation; it borrows Γ's atoms. It cannot be counted as an independent witness for the whole claim. Unbundle before searching (Fig 9 :54-58).
- D2 splits further into **low-overlap probes**: CMB and BBN are separated by roughly 400,000 years of evolution and share a parameter without sharing an evidence pool (world source W5). This is the one place where two measurements are genuinely two frames.

**Order by dependency (Fig 3).**

Fig 3 :20-21: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it." The validation chain therefore runs:

1. Keep the anchor reachable (calibrate the instrument, avoid pooled readings). D2 precedes everything: Fig 10 :24-29.
2. Describe R in effect terms before choosing a validation frame: Fig 9 :27-28.
3. Settle first-order predictions (CMB spectrum, BBN abundances) before composing higher-level ones (structure formation, galaxy populations): Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it."
4. Check the harness/analogue link for wiring only; it cannot substitute for step 3: Fig 11 :70.
5. Only after SEARCHED and INWARD fail, consider OUTWARD import of new physics: Fig 6 :28-31, Fig 9 step order.

A reading taken below a broken link is not a weak reading; it is a reading of nothing (Fig 3 :22-23).

---

## 2. Figure census (verbatim, before concluding)

| figure | bearing on this question | verdict |
|---|---|---|
| **1 The Agent** | ground is the only metric; per-slot residual; self-scoring is disqualified | internal fit, resolution and visual fidelity are frame-internal |
| **2 The Ground** | anchor definition; independence; triangulation not negotiation; correlation valence | the ground is the observed universe; simulator agreement is not validation |
| **3 Dependency Chain** | a link with no instrument is not a working link | check which link the validation chain stops at before scoring the simulation |
| **4 The Membrane** | methods cross up, head starts down; round trip gap R_T | a headline prediction is a lossy condensation; measure the gap |
| **5 Mint Pipeline** | MDL bargain; a term explaining one occasion perfectly fails; settlement | post-hoc tuning to one dataset fails; commit before observing |
| **6 Closure / Reachability** | closure cannot escape itself; instruments improved from worse instruments already returning something | testing is contact with a differing closure; instrument extension is the route |
| **7 Room Chain** | agreement compounds, evidence does not; selection between rooms | more simulators in one closure is one long room, not progress |
| **8 Union Surplus** | idempotent closure; search finding nothing is not proof of absence; provenance | low-overlap triangulation is the only surplus; absence is a verdict |
| **9 Leave / Arrive** | describe the residual before choosing a frame; narrowing gets close, ground decides; unbundle unions | describe slots before naming validation venues; keep cuts reversible |
| **10 Ground Maintainer** | the channel decays, not the ground; bring a characterised residual | keep the observation channel reachable; send the refuter, not the source |
| **11 The Habitat** | capability is agent-and-habitat; test harness proves wiring, never capability; enumerate the habitat | lab analogues are substituted habitats; enumerate second-order systematics |
| **12 The Bond** | two currencies, bits and actions; a cheap description can be expensive to settle | description cost is not evidence; budget is a filter, never a witness |
| **13 Minimum Viable Set** | unreachable is a verdict, not a silence; one route through a space with no last route | the answer is a shape and a route, not one named simulation |
| **Operators table** | negation is a refusal, not an absence; a vocabulary without it can only accumulate | a refuter must be a term that refuses, not a missing slot |
| **Symbols table** | R is the aim, indexed per slot; the anchor is not in the library | R is the test signal, not a summary statistic |

Strained readings are named in §6, not smoothed over.

---

## 3. Findings

### F1 — The anchor for this question is the observed universe, and it is legitimate

Fig 2 :29-30: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."**

Fig 2 :36: **"An anchor is legitimate when the question is constitutively about it."**

The question is constitutively about the universe as it is. There is no laboratory lever on the early universe, but there is a ground: the photons and nuclei that reached us. The CMB is explicitly described by world source W4 as "the key experimental evidence of the Big Bang theory for the origin of the universe." World source W5 states that "In order to test the predictions of BBN, astrophysicists make precise measurements of light element abundances in the universe."

**Correction, kept visible (see §6):** the anchor is not the CMB alone. The CMB is one instrument reading of the ground. The anchor is the whole observational record that does not move when Γ is edited. Naming a single dataset as the anchor was my first reading and is narrowed here.

**Refuter:** show a proposed "ground" whose returned value changes when a simulation changes its parameters or priors. It is not an anchor; it is a frame (Fig 2 :34).

### F2 — Internal consistency cannot validate a simulation

Fig 1 :23: **"The ground enters as the only metric."**

Fig 1 :25-27: **"coverage, and compression achieved"**, **"predicates minted, and credibility accrued"**, **"They are frame-internal. A frame cannot score itself with a quantity it also produces."**

Resolution, particle count, visual fidelity, code elegance and agreement with the tuning dataset are all quantities the frame produces. Fig 5 :32 requires: **"then check it against the ground, then carry it up."**

World source W1 (engineering V&V), quoted verbatim: "It is entirely possible that a product passes when verified but fails when validated." World source W2: "Simulation models are approximate imitations of real-world systems and they never exactly imitate the real-world system." These are secondary corroboration from a different field; they agree with the figure but share no evidence pool with it.

**Refuter:** produce a case where internal consistency alone settles a claim about an external system with no contact, or show a simulation whose frame-internal score changes the universe. Neither is available; if one appears, F2 falls.

### F3 — Agreement between simulations is not corroboration when they share an evidence pool

Fig 2 :31-32: **"Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are. Independence is what makes agreement mean something."**

Fig 2 :40: **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"**

Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."**

Most early-universe simulations start from the same initial fluctuation spectrum, the same ΛCDM parameters and the same CMB constraints. They are one frame wearing many names. Fig 7 :13 is exact: **"same closure, handed along; agreement compounds, evidence does not"**.

The genuine exception is low overlap between kinds of observation. World source W5 (BBN): "BBN and the formation of the CMB are separated by roughly 400,000 years of evolution; they are two independent epochs in cosmology, and yet the Lambda-CDM model of cosmology requires they share the same value of the baryon-to-photon ratio. Concordance between these epochs is observed, and so Lambda-CDM passes this consistency test." This is triangulation in the figure's sense: two instruments, one shared parameter, no shared evidence pool.

**Refuter:** show two simulations that share all initial conditions and tuning data yet whose agreement constitutes two independent witnesses for the same verdict. By Fig 2 :40 it constitutes one witness.

### F4 — You cannot validate from inside the closure; you extend instruments from what already returns something

Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**

Fig 6 :32: **"An instrument is not built from a description. It is improved from a worse instrument already returning something."**

Fig 6 :33: **"Nobody specified a telescope from an account of Mars. A wandering point in the sky was already a reading, and every sharper instrument was built on the residual the last one produced."**

Fig 6 :40: **"What is unavailable is a sensor for something that has never registered anywhere, at any resolution. That is the whole of it."**

The historical route is visible in world source W4: "Ground and space-based experiments such as COBE, WMAP and Planck have been used to measure these temperature inhomogeneities." Each instrument was built on the residual the previous one surfaced. The same article records that "detailed prediction encouraged larger and more ambitious experiments," matching Fig 6 :38: "Neptune was calculated before it was seen, and the prediction is what told anyone where to point instruments."

This is the answer to the "cannot recreate in a laboratory" objection. The missing laboratory is not the only possible contact. A sensor chain already exists and is sharpened from what returns something.

**Refuter:** name an instrument for an early-universe quantity that has never registered at any resolution, specify it from a description alone, and have it succeed without being built from a worse instrument. Fig 6 :40 says this is unavailable. A single success would break the finding.

### F5 — A laboratory analogue proves wiring, never capability

Fig 11 :70: **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."**

Fig 11 :68: **"what you failed to reproduce is invisible until the goal fails"**; Fig 11 :69: **"what you unintentionally introduced is invisible until it acts"**

Fig 11 :39-40: **"capability is a property of agent-and-habitat, never of the agent alone."** **"An improvement that does not change contact changes nothing, however much it improves."**

World source W8 (analog models of gravity) says such models "may create opportunities for practical experiments within the analog that can be applied back to the source phenomena." That is exactly a wiring claim: insight transfers, capability does not. World source W5 notes that "The nuclear reaction rates are well-known from detailed laboratory studies at similar temperatures to those that appear in BBN." This is a legitimate **instrument extension** for one sub-quantity (Fig 6 :32), not a recreation of the universe. The two uses must not be conflated.

**Correction, kept visible (see §6):** I first treated lab nuclear reaction-rate data as evidence that "the early universe can partly be recreated in a lab." Re-census puts it under instrument extension (a worse instrument already returning something) rather than under substituted habitat. It constrains one input; it cannot run the whole experiment.

**Refuter:** demonstrate a lab analogue whose success establishes that the simulation would produce the actual observed universe, not merely that the analogue's equations were implemented correctly. Fig 11 :70 says it proves wiring. A demonstration that changes contact would refute the finding.

### F6 — Commit the prediction before observing; post-hoc tuning fails the bargain

Fig 5 :43-44: **"A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."**

`THE_FORMULA.md`, Direction: "make the sought-for shape an ORDINARY TERM - write down what an answer would look like, bind it, and let it accrue a residual like anything else. Then the preference is refusable by the same test as everything else."

World source W4 records that the CMB was "first predicted in 1948 by Ralph Alpher and Robert Herman" and discovered in 1964; world source W5 records BBN's predicted helium fraction "in accordance with observations." A prediction written before the measurement carries weight that a fit after the measurement does not.

**Refuter:** show that a post-hoc fit to one dataset carries the same independent evidential weight as a pre-committed prediction that survives a new measurement. Under Fig 5 :43-44 it does not.

### F7 — Enumerate the habitat, including second-order contacts

Fig 11 :43-44: **"The habitat is enumerated, never composed. List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."**

Fig 11 :52-53: **"contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."**

For an early-universe simulation the habitat includes: foreground emission that modifies the CMB reading (world source W4: "the emission has undergone modification by foreground features such as galaxy clusters"), stellar processing that changes primordial abundances (world source W5: measurements are taken in metal-poor systems because "stars change the relative abundances"), instrument calibration and beam systematics, and the numerical subgrid prescriptions inside Γ. A first-order list misses the eagles.

Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."** An unmeasured systematic is not a passed systematic.

**Refuter:** exhibit a validation protocol that enumerates only direct contacts and still detects a third-order systematic. By the DDT example it cannot.

### F8 — Distinguish unreachable-at-budget from underivable-in-principle

Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**

Fig 8 :40-43: **"Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions. Underivable: go outside. Unreachable-at-budget: the term is already in the closure and was not found, so the remedy is more search, not another atom."**

Fig 13 :134: **"Unreachable is a verdict here, not a silence,"**

A simulation that fails to match a slot may be missing a physics atom (underivable, needs OUTWARD import), or may simply not have been checked at enough resolution or with enough independent runs (unreachable at this budget, needs SEARCHED and INWARD). Importing new physics against a budget limit adds an atom that was not needed (Fig 9 :60-61 is about filters; the price is stated in Fig 8 :42-43 and Fig 6 :24: "Import from a live peer is debited against that frame's independence. A wrong atom costs more than starting from primitives.").

**Refuter:** show a case where more search at the same reach and an import produce the same result and carry the same cost. Fig 8 :40-43 says they issue different instructions.

### F9 — Description cost and settlement cost are two currencies

Fig 12 :125-126: **"A composition costs in two currencies, and they do not add."** **"Bits price the description. Actions price finding out whether it holds."**

Fig 12 :128-129: **"A short arrangement over a costly operand is cheap to state and may take a whole budget to settle."**

Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

A cosmological simulation is cheap to state in bits (a parameter file) and enormously expensive to settle in actions (a 19-million-CPU-hour Illustris run, per world source W6). Particle count and runtime are budget filters. They decide how much of the space is reached; they never witness that the model is true.

**Refuter:** demonstrate a budget filter that by itself settles a verdict, or a way to add bits and actions into one score that preserves both readings. Fig 12 :129 says summing them is the error.

### F10 — Measure the round-trip gap R_T

Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

Fig 4 :31-32: **"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."**

A simulation is a lossy condensation of the underlying physics, and a published headline is a lossy condensation of the simulation. Carry a result up to a claim and back down to the code and it will not match exactly. The mismatch is the measurement, not a defect to hide.

**Refuter:** produce a condensation of the figures or of a simulation whose round trip is lossless at every scale. Fig 4 :27-29 says the transform loses information by construction.

### F11 — Keep the anchor reachable; the channel decays, not the ground

Fig 10 :24: **"the ground does not decay, the channel does"**

Fig 10 :25-29: **"stale percepts, dropped transients, saturated metrics, pooled readings"**, **"the output is not a verdict, it is you have lost touch"**, **"→ keep the anchor reachable"**

The universe did not become less observable; the instrument and its calibration can drift. Saturated metrics and pooled readings are named failure modes. Instrument calibration, cross-checking between experiments, and refusing to average independent probes into one number are the maintenance work.

**Refuter:** show a case where the ground itself moved and the channel was sound. Under Fig 10 :24 that is not ground decay; it is a different question.

### F12 — Describe the residual before naming the validation frame

Fig 9 :27-28: **"describe it before you go looking, or any frame you pick will seem to fit"**

Fig 9 :53: **"Nobody chooses. The gap does, and the gap is only as good as its description."**

If you begin with "use CMB" or "use Illustris" and then find reasons, any frame will seem to fit. The slots in §0 must be written first: which observable, which redshift range, which systematic, which numerical convergence test. Only then choose the instrument.

Fig 9 :32: **"you get a kind of thing, never the answer itself"** — the output of this derivation is the shape any valid test must have, not a certificate for any named simulation.

**Refuter:** show a validation protocol that selects the frame first and still achieves low-overlap corroboration. Fig 9 :27-28 says the selection will look fitted either way.

---

## 4. Pre-registered refuter

Required before any outreach, Seat Map :287: **"a falsifier written before the run is a design instrument, not only an honesty device."** Written here before the conclusion in §5 and before the WATSON run in `09`.

The shape claim is: *a simulation of the early universe can be tested only by ranging its per-slot predictions against the observed universe, with low-overlap independent probes, pre-committed predictions, and analogues used for wiring alone; the absence of a laboratory recreation changes the route to the ground, not the necessity of a ground.*

It is refuted if any of the following holds:

1. **Internal-only settlement.** A simulation is settled as correct by internal consistency with no contact with any observation. Breaks Fig 1 :23 and Fig 6 :21.
2. **Correlated witnesses.** Two simulations sharing initial conditions, data and priors are counted as two independent witnesses for a verdict. Breaks Fig 2 :40 and Fig 7 :13.
3. **Capability from harness.** A lab analogue or test harness is shown to establish capability for the actual early universe, not merely correct wiring. Breaks Fig 11 :70 and :40.
4. **Post-hoc equivalence.** A fit written after seeing one dataset is shown to carry the same evidential weight as a pre-committed prediction that survives a new measurement. Breaks Fig 5 :43-44 and Formula "Direction".
5. **Description-built sensor.** An instrument, for a quantity that has never registered at any resolution, is specified from a description alone and succeeds. Breaks Fig 6 :40 and :32.
6. **Filter as verdict.** A budget or resolution threshold is shown by itself to settle truth. Breaks Fig 9 :60 and Fig 12 :126.

If any fires, the shape claim is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. **Start from the slots, not the tool.** Write the observable, the systematic and the convergence test before naming a dataset or a code (F12).
2. **Range, do not negotiate.** Each prediction is corrected by the observation separately; the observation is never a party to a vote (F1, Fig 2 :46).
3. **Buy independence where being wrong is costly.** Prefer probes from different epochs and different instruments (CMB plus BBN plus LSS) over more runs of one code (F3).
4. **Commit predictions before the measurement.** A term tuned to one occasion fails the bargain (F6).
5. **Use lab analogues for wiring only.** Reaction-rate experiments extend an instrument; they do not recreate the universe (F5).
6. **Enumerate the habitat outward.** Include foregrounds, stellar processing, calibration drift and subgrid prescriptions at second and third order (F7, F11).
7. **Separate the currencies.** Report bits and actions separately; do not let runtime or resolution become a verdict (F9).
8. **Measure R_T and keep the lineage.** Report what the condensation dropped (F10).
9. **Name the stop.** Say `unreachable-at-this-budget`, `underivable-with-this-closure`, or `gap` explicitly. Unreachable is a verdict, not a silence (F8).

---

## 6. Canonical usage check and retraction / confirmation log

Two framework sources govern how the figures may be used. They were read after §§0-5.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo"; "a reading that makes one contradict another has misidentified its domain, not found a flaw"; the framework returns "what a missing thing would have to look like (a shape, not a name)"; "Indiscernibility is not identity." It also names the key limit for this audit: search inside a closure cannot manufacture what the closure lacks, and import is the only wall-moving operator.
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are the ground for design questions; the seat reads the ground and does not ask the anchor for rulings the figures can decide. "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

| earlier reading | status after the canonical check |
|---|---|
| "The CMB is the anchor" | **Narrowed.** The anchor is the whole observational record that does not update on Γ. The CMB is one instrument reading of it. Fig 2 :29-30 is about whatever settles the question, not about one dataset. |
| "Lab reaction rates mean the early universe is partly recreatable" | **Retracted and replaced.** Those rates are instrument extension from a worse instrument already returning something (Fig 6 :32), not a substituted habitat for the whole simulation (Fig 11 :70). Both readings are kept so the distinction stays visible. |
| "Reachability failure means new physics is owed" | **Retracted.** Fig 8 :40-43 separates underivable-in-principle from unreachable-at-this-budget. The remedy is SEARCHED first, then INWARD, then OUTWARD. |
| "Agreement between CMB and BBN is ordinary corroboration" | **Confirmed and sharpened.** It is low-overlap triangulation (Fig 2 :31-32, Fig 8 :29, :50-52), not two readings of one pool. The record of where each came from is load-bearing. |
| "Resolution and particle count are evidence" | **Refused.** They are frame-internal (Fig 1 :25-27) and budget filters (Fig 12 :126). |
| "A test harness validates the model" | **Refused.** It proves wiring, never capability (Fig 11 :70). |
| "The answer is a named validation protocol" | **Refused.** The framework returns a shape, not a name; "you get a kind of thing, never the answer itself" (Fig 9 :32). |

### Three-question route when no single line closes R

Per `THE_FORMULA.md` step 7, asked in order and kept distinct:

- **SEARCHED (is it in here and unfound?)** Are the relevant observations already in Γ's closure but not yet used? In practice: re-check existing CMB, BBN, BAO and LSS likelihoods, more independent runs, convergence tests, and published but un-used data releases. This is cheapest and the other two assume its answer. Fig 6 :49-50: "more search at the same reach: is it in here and unfound? The closure does not change. Same atoms, same wall, more of the space actually visited."
- **INWARD (extend the instrument)** Sharpen a probe that already returns something: higher-resolution CMB polarization, more metal-poor abundance measurements, better foreground separation. Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something."
- **OUTWARD (import)** Only if search and instrument extension fail: characterize the residual in effect terms and find a frame whose closure predicts its shape, with a source gate (provenance), a shadow test (explains a gap), and a debit against that frame's independence (Fig 6 :12-13, :24; Fig 8 :26-29).

INWARD and OUTWARD are opposed and are never read one against the other (Fig 6 :30-31).

### Strains after re-census

- **Instrument extension versus substituted habitat.** These govern different objects: one improves a reading of the ground (Fig 6 :32), the other replaces the habitat (Fig 11 :70). Different quantities, so no strain after re-census.
- **Ground as anchor versus ground as a party.** Fig 2 :46-47 is explicit: a ground listed among the parties has already become a frame. No strain; it is a disambiguation rule.
- **Bits versus actions.** Held apart as two currencies (Fig 12 :125-129). Summing them is the named error, not a fix.
- **After re-census: three named narrowings, no unresolved figure conflict.** The live limits are empirical, not textual: which slots register, and at what resolution.

---

## 7. What survives

**Shape, `general`:** any test of a simulation must put the simulation in contact with an anchor that does not update on it; must keep independent frames independent; must commit predictions before the measurement; must treat a harness as wiring only; must enumerate the habitat beyond direct contact; and must record the round-trip gap and the reach limit.

**Specification, `specified`:** for the early universe the anchor is the observed universe (CMB, BBN, LSS, BAO), the useful independence is between epochs and instruments rather than between codes, and the unavailable laboratory changes the route to the ground rather than removing the need for one.

**Not claimed:** no specific simulation is validated here; no particular inflationary model, dark matter model or galaxy-formation code is endorsed; no new measurement was made. The stop is `candidate` until the ground pays.
