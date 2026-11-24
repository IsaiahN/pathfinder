# Figure-grounded audit: QMGR2-0018, which probe combination measures the expansion history

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every finding below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, read 2026-11-23: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too (intelligence is essentially arrangement). However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle which probe combination is best. See `05_what_shape_means.md` section 7.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session, cited as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`, and the Seat Map field guide. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Gamma(b,a) - o-prime| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the cosmological belief: the assumed H(z), its parametrization (for example w0-wa), and the calibration inherited from the distance ladder or the CMB sound horizon.
- **a** is the act of observation and inference: choose a tracer, measure a signal, fit a model.
- **Gamma(b,a)** is what the probe's model predicts given b and a: a Hubble diagram for supernovae, a BAO peak position for galaxy clustering, a shear correlation for lensing.
- **o-prime** is what the survey actually returns: magnitudes, clustering wedges, shear two-point functions.
- **s** is the object slot: a redshift bin, a sky patch, a tracer. R is indexed by probe and by redshift bin, never averaged into a single global score (Fig 1 :19, :22).

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is not the numerical value of H0 or w, but *what makes a combination a good measurer of the expansion history*. Observed: some combinations constrain H(z) tightly and robustly across many bins; others give tight-looking constraints that move when one systematic changes. A frame that says "more probes is always better", or "the combination with the smallest error bar is best", has a residual here.

State the residual as: *which conditions must a set of probes satisfy so that the gap between its predicted and observed observables stays small and discriminating across redshift slots, and so that its agreement is evidence rather than a shared systematics pool?* This is an effect description. It names no winner, no "standard candle", no "standard ruler", no "3x2pt". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a conjunction of conditions, each with its own instrument, that makes R small and discriminating per slot. Call it the *triangulation shape*. Until bound, it predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* The anchor here is the realized distance-redshift relation, fixed by calibration (parallax, TRGB, Cepheids for supernovae; the CMB acoustic scale for BAO) and ultimately by the data. Consensus about "which combination is best", a forecast figure of merit, and a collaboration's preferred prior all move when pushed; they are instruments at best (Fig 2 :30). Viable anchor: the measured distance-redshift relation over a fixed calibration, indexable per redshift bin.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a multi-place relation: cosmology b, probe p, observable o-prime, indexed by slot s and ordered by redshift z. It is a sequence rather than a set, so it carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72). "Best" is a **comparison** bond (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87). It is not symmetric: a supernova magnitude and a shear correlation are not interchangeable.
- **Symmetry.** "Best" is a threshold relative to alternatives, not an absolute quantity (Fig 12 :85-89; Operators table :46-51). The probes are individually symmetric under sky direction (isotropy) but the comparison between them is not.
- **Scale.** Three scales are in view: the single-probe loop (one frame ranging against the data), the population of probes combined (a union with a shared inference), and the redshift channel across cosmic time. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured, not assumed zero (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 Calibration and anchor** | parallax, TRGB, Cepheids, SN absolute magnitude M_B, CMB sound horizon r_d | absolute scale and calibration | yes: parallax and the acoustic angular scale, which do not update on probe preference (Fig 2 :29) | admitted |
| **D2 Geometry probes** | Type Ia supernovae (standard candles), BAO in galaxy clustering (standard ruler) | luminosity distance D_L, angular diameter distance D_A, H(z) | yes: the measured distance-redshift relation | admitted |
| **D3 Growth probes** | weak gravitational lensing (cosmic shear), redshift-space distortions in clustering | growth rate f*sigma_8, clustering amplitude S_8 | yes: the measured shear and clustering statistics | admitted |
| **D4 Inference and combination** | likelihoods, covariances, priors, Fisher forecasts, figure of merit | information, chi-squared, constraining power | yes: the ground, data; but a figure of merit is a filter, not a witness (Fig 9 :60) | admitted as method, not verdict source |
| **X1 "Best" as an absolute property of a probe list** | the probes considered alone | constraining power | **no** anchor independent of the ground and the question | not a domain yet |
| **X2 "More probes is always better"** | the union | information count | already inside D4; overlap of near-identical probes is a compound, not a new domain | absorbed into D4 |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that some probes are not better than others.

### 1.3 Partition or union

D2 and D3 overlap: lensing and clustering constrain both geometry and growth through the model, so their overlap is a compound with its own loop. D1 and D2 overlap at calibration (the SN absolute magnitude M_B and the BAO sound horizon r_d), so that overlap is a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: (C1) a geometric measurement of the distance-redshift relation, and (C2) a growth measurement that discriminates models which share the same background expansion. A combination satisfying only C1 and a combination satisfying only C2 are not different degrees of one answer; they are different compounds and need different instruments. *The Library of Babel* states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the probe read the signal at all?) → 2 vocabulary (does the probe's model have terms for its systematics?) → 3 objective (can it say what progress on H(z) would count as?) → 4 planning (which combination) → 5 learn and carry. Calibration (D1) must be settled before geometry (D2) and growth (D3) can compose, and the middle link, having terms for what the observable affords and saying what would count as a constraint, is the one with no instrument. Fig 12 :113-115 says a vocabulary holding only ingredients can say what a situation contains and cannot say what would count as getting somewhere from it.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not which probe wins |
| 2 The Ground | anchor, independence, two collapses, correlation valence | decisive for what makes agreement count |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnostic order and calibration dependency |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs scale transfer and forecast-to-data gap |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs when a new probe term can be admitted |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs what a new probe adds to reach |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs why repeating a probe is not progress |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | decisive for why combinations with low overlap win |
| 9 Leave / Arrive | union vs partition; describe the residual first; filters not witnesses | governs unbundling and the gap for the name |
| 10 Ground Maintainer | ground does not decay, channel does; saturated metrics, pooled readings | governs calibration drift and the Hubble tension symptom |
| 11 The Habitat | capability is agent-and-habitat; substituted habitat proves wiring only | governs why mocks and forecasts are filters, not the ground |
| 12 The Bond | isomer, catalyst, arrangement is the substance; two currencies | governs probes as isomers and the bits/actions price |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop, not a physical mapping of probes |

**Strain test applied during this census:** an early attempt to apply Fig 13's six-term physical substrate directly to "supernovae, clustering and lensing" only fit by calling a supernova a kind of energy and a shear a kind of gradient. That is a strain, so Fig 13 does **not** govern the probes as physical kinds. Re-census sent Fig 13 to the honest-stop and union lessons only (section 6, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about probe combinations, `grounded` only if settled by a measurement. None is `grounded`.

### F1: "Best" is a name, not a shape

**Mode: `general`. Domains all. Status: figure-derived.**

> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)
> **"Unreachable is a verdict here, not a silence,"** (Fig 13 :134)
> **"describe it before you go looking, or any frame you pick will seem to fit"** (Fig 9 :27-28)

The framework returns the conditions any good combination must satisfy, not a ranked list of names. If a probe list is named before the residual is described, any list will seem to fit (Fig 9 :27-28). The specific winner is therefore a `gap` at the figure level, answered by the ground (data), not by the figures.

**Refuter:** a figure line that, after a genuine re-census, names a specific probe combination as optimal. None was found. If one is produced, F1 is false.

### F2: Independence, not count, is what makes a combination informative

**Mode: `specified`. Domains D2, D3, D4. Status: triangulated (Fig 2 and Fig 8, low overlap: anchor/witness rule vs union surplus).**

> **"Independence, between two frames, is how little they draw on the same evidence."** (Fig 2 :31)
> **"agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)
> **"Two frames together reach what neither reaches alone."** (Fig 8 :45)
> **"How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus."** (Fig 8 :48)

A supernova catalogue and a second supernova catalogue that share calibration, pipeline and systematics are two names for one frame. Their agreement is the pool talking (Fig 2 :19-21). Supernovae (candles), BAO (a ruler) and lensing (a shear) draw on different physics and different systematics, so their agreement is triangulation. The best combination is the one with the lowest effective overlap and the largest union surplus, not the largest probe count.

**Refuter:** two nearly identical probes whose agreement is counted as corroboration, or a demonstrated case where adding a probe with the same evidence pool improves the ground-tested constraint. Under Fig 2 :40 and Fig 8 :48 that should be impossible; if observed, F2 is false.

### F3: The question is a union of geometry and growth, and must be unbundled

**Mode: `general` with a `specified` consequence. Domains D2, D3. Status: triangulated (Fig 9 and Fig 8).**

> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)
> **"Two frames together reach what neither reaches alone."** (Fig 8 :45)

Supernovae and BAO are principally geometric: they measure the distance-redshift relation. Lensing and redshift-space distortions are principally growth probes: they measure how structure grows, which discriminates models that share a background expansion. "Expansion history" conflates the two. A combination that measures only geometry and one that measures only growth are not competing answers to one question; they are answers to two conditions of a union. A single lever, for example "add more supernovae", clears the geometry region and leaves the growth intersection standing (Fig 9 :55).

**Refuter:** a single probe that measures both geometry and growth at the same independence and with no model degeneracy, so the union collapses into a partition. If none can be found, F3 stands.

### F4: Keep the residual per slot, never average it away

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 1 and Fig 9, low overlap).**

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

A chi-squared or a figure of merit that collapses all redshift bins into one number is a budget instrument, a filter. It is not the ground. The diagnostic signal is the per-bin, per-probe residual: which bin is failing to resolve, and which probe's systematic is responsible. A combination reported only as a single error bar has already thrown away the signal that says where to look.

**Refuter:** an averaged statistic that predicts, prospectively and per redshift bin, which probe will fail next. If one exists, F4's methodological consequence is false.

### F5: The anchor must not update on the probes' preferences

**Mode: `specified`. Domain D1. Status: triangulated (Fig 2 and Fig 10, low overlap: anchor rule vs channel decay).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** (Fig 2 :29)
> **"If it moves when you push on it, it is not an anchor."** (Fig 2 :30)
> **"If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."** (Fig 2 :34)
> **"the ground does not decay, the channel does"** (Fig 10 :24)

The calibration is the anchor: parallax and the acoustic angular scale are measured independently of what the supernova or BAO fits would prefer. If a joint fit is allowed to re-tune the SN absolute magnitude M_B or the sound horizon r_d to reconcile probes, the anchor becomes another frame and the system drifts coherently. The present Hubble tension is exactly the named symptom: separate frames ranging against a calibration they cannot move, with a disagreement that does not shrink when they talk (Fig 2 :4-7).

**Refuter:** a documented case where the combined fit re-calibrates the anchor, the drift is declared "new physics", and no independent anchor is later produced to discriminate. Under Fig 2 :33-34 that is coherent drift, not discovery; if an independent anchor settles it, F5 is weakened.

### F6: The probes are isomers over a shared atom set

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 12 and Fig 8, low overlap: composition structure vs union surplus).**

> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** (Fig 12 :117)
> **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."** (Fig 12 :104)
> **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"** (Fig 8 :50)

The three probes share atoms (redshift, distance, growth) but are bonded by different physics: a luminosity relation, a standard-ruler peak, a shear kernel. They are Fig 12's isomers, same atoms, different bond, different substance, and their difference is decisive in which systematic can corrupt them. Each is settled against the ground and so becomes an atom for the next level (Fig 12 :104). Combining them is composition across differing closures, which is exactly where Fig 8 locates the surplus.

**Refuter:** two probes that share every systematic and every evidence source yet are treated as different substances in the combination. Under Fig 8 :48-49 they are one frame wearing two names; if the combination still gains independent ground-tested reach, F6 is false.

### F7: Forecasts and mocks are filters and substituted habitats, never the verdict

**Mode: `specified`. Domain D4. Status: triangulated (Fig 11 and Fig 9, low overlap).**

> **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."** (Fig 11 :70)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)
> **"There is no route. Ordering does not produce adjacency; duration does not produce conservation; a quantity does not produce the fact that things relate at all."** (Fig 13 :42)

A Fisher-matrix figure of merit or a mock catalogue demonstrates that an analysis pipeline is wired correctly. It does not demonstrate that the combination measures the real expansion history, because the mock is a substituted habitat and the ground is not in it. A forecast is the budget filter that decides how much of the space is reached, and nothing more (Fig 12 :127-128).

**Refuter:** a forecast-derived ranking of combinations that, on real data with independent calibration, produces the predicted ground-tested constraint with no re-tuning. F7 does not deny forecasts are useful; it denies they are the ground.

### F8: Agreement among probes is not the verdict; the ground is

**Mode: `general` with a `specified` consequence. Domains D2, D3, D4. Status: triangulated (Fig 2, Fig 7, Fig 10).**

> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."** (Fig 7 :35)
> **"The ground does not decay, the channel does."** (Fig 10 :24)
> **"the output is not a verdict, it is you have lost touch"** (Fig 10 :27-28)

Three probes that agree because they were analysed with the same priors, the same calibration and the same pipeline are a room, not a triangulation. The correction has to come from a reference none of them can move: the distance-redshift data with an independent anchor. When a combination's residuals stop registering against that ground, the honest report is not "the best combination" but "no probe in this set currently resolves the residual".

**Refuter:** a combination declared best solely because multiple probes agree, with no independent anchor and no per-slot ground check. Under Fig 2 :35 that is negotiation; if the agreement survives an independent anchor, F8 is weakened.

### F9: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per probe and per redshift bin, never a global average | general | Fig 1 :19, :22 | figure-derived |
| The anchor is the distance-redshift relation under fixed calibration | general | Fig 2 :29, :30 | figure-derived |
| Independence, not probe count, governs the union surplus | specified | Fig 2 :31, :40; Fig 8 :45, :48 | triangulated F2 |
| The question is a union of geometry and growth | general | Fig 9 :54, :55, :57 | figure-derived |
| A good combination spans both conditions with per-slot residuals | specified | Fig 9 :57; Fig 1 :19 | triangulated F3, F4 |
| Calibration must not update on probe preference | specified | Fig 2 :33, :34; Fig 10 :24 | triangulated F5 |
| Probes are isomers over a shared atom set | specified | Fig 12 :117, :104; Fig 8 :50 | triangulated F6 |
| Forecasts are filters, not the ground | specified | Fig 11 :70; Fig 9 :60 | triangulated F7 |
| Which named combination is best | not stated | none after re-census | gap: framework returns a shape, not a name |

### F10: The gap and the shape of the missing discriminator

**Mode: `general`. Status: `gap` for the name, `specified` for the shape.**

No figure line governs the specific ranking of supernovae + clustering + lensing combinations, after a genuine re-census (section 6). Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* What is owed is not a name but an instrument: an analysis that (i) keeps residuals per redshift bin and per probe, (ii) measures the overlap between probe evidence pools, (iii) holds calibration fixed against an independent anchor, and (iv) tests geometry and growth as separate conditions. That is the shape of the missing discriminator, stated in effect terms so it can travel to a frame that may already hold it (Fig 6 :30, *"Cast it in effect terms"*).

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule, Seat Map :287: *"And a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A combination of probes sharing an evidence pool has its agreement counted as independent corroboration, and the ground-tested constraint still improves (breaks F2, Fig 2 :40, Fig 8 :48).
2. A single probe measures both background geometry and growth at the same independence with no model degeneracy, collapsing the union into a partition (breaks F3, Fig 9 :57).
3. A reported constraint is an average over redshift bins that still predicts, prospectively and per bin, which probe fails next (breaks F4, Fig 1 :22).
4. A joint fit re-calibrates the anchor, calls the drift new physics, and no independent anchor later discriminates (breaks F5, Fig 2 :34).
5. A forecast-only ranking reproduces its predicted real-data constraint with no re-tuning on an independent anchor (breaks F7, Fig 11 :70).
6. Fig 8's idempotence fails inside a closed probe set, or Fig 2's independence condition is shown irrelevant to whether agreement means anything (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a ground reading with fixed calibration has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a ranked probe list (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep geometry and growth separate in every report. A blended constraint is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Report per-redshift-bin, per-probe residuals, not a single figure of merit (Fig 1 :19, Fig 9 :60).
4. Hold calibration fixed against an independent anchor; treat a drifting M_B or r_d as a symptom of a broken channel, not as a free parameter to reconcile probes (Fig 2 :33-34, Fig 10 :24).
5. Use cosmology literature and forecasts as budget filters and as one corroborating witness, not as the verdict. The sources in `10_source_ledger.csv` share a measurement pool (Fig 2 :31, :40).
6. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
7. Stop at the shape. Do not name which combination is best; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, the Seat Map field guide, and the essays *The Library of Babel*, *The Recursive Self-Improvement Trap*, *The Hard Problem is About Source*, *They're Scanning Books When They Should Be Studying Nature*, *Decoding Tacit Knowledge*, *How Intelligence Actually Works*, and *How a Society of Agents Would Work* (all fetched 2026-11-23).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs F1 and F10.
- *They're Scanning Books* confirms that a new probe adds a term, not necessarily a new axis: *"The real import is not a new term in the existing space. It is a new dimension of the space."* So adding a fourth probe to a combination is not automatically an import that moves the wall (Fig 6 :25, *"An import adds no atom to the world"*).
- *Decoding Tacit Knowledge* confirms that agreement from a shared pool is not evidence: *"High contact builds exactly the shared understanding that makes communication work, but that same factor makes the learner's agreement with the teacher worthless as a check."*
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Temptation to answer with the current cosmology consensus, for example SNe + BAO + CMB | **Retracted at record level** | That is a name where a shape is owed; Fig 9 :32 and the README's "shape, not a name". The empirical ranking is for the ground, not the figures |
| Attempted to apply Fig 13 six-term physical substrate to the probes | **Retracted, strain S1** | Only fit by renaming a supernova as energy and shear as gradient. Re-census: Fig 13 governs the physical substrate, not a probe's Gamma |
| Read a small forecast error bar as the verdict | **Retracted as a witness, kept as a filter** | Fig 9 :60; Fig 11 :70; mocks prove wiring, not capability |
| Wanted to call Fig 2 :31 a `general` law of all measurement | **Narrowed to `specified` for probes** | It is a structural rule; no ground measurement pays for the probe-level ranking here |
| Used DESI and Planck as independent corroboration | **Narrowed to one witness** | All these sources share the cosmology measurement pool; their agreement is one pool talking (Fig 2 :40) |
| F1 row "which named combination is best" | **Marked `gap`** | The framework returns a shape; the source-discriminating instrument is not held here |
| F2 "decisive" in an early draft | **Downgraded to triangulated** | Fig 2 and Fig 8 are two figures but one framework; triangulation means low topical overlap, not independent evidence pools |
| F5 read as "the Hubble tension proves coherent drift" | **Narrowed to a symptom, not a proof** | Fig 2 :34 names the failure class; only an independent anchor can settle whether this case is drift or new physics. Verdict unchanged |

**Strains sent to the log:** S1 (Fig 13 applied to probes), resolved by re-census; S2 (calling a forecast figure of merit "the best measure" while also using it as a filter), resolved by Fig 9 :60 and Fig 11 :70: a filter decides budget, the ground decides verdict. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus *The Library of Babel* bundle passage: it is a union of geometry and growth, each with its own loop and instrument.
2. **What is the anchor?** The distance-redshift relation under fixed calibration, named in Fig 2 :29. Not consensus, not a forecast (Fig 1 :27).
3. **Is independence or count the driver?** Independence. Fig 2 :31, :40 and Fig 8 :45, :48.
4. **How does a combination fail?** By sharing an evidence pool, by averaging away per-slot residuals, by letting the anchor drift, or by measuring only one condition of the union (F2, F4, F5, F3).
5. **What does a probe add?** A different bond over shared atoms (Fig 12 :117), a surplus where closures differ (Fig 8 :45), provided it is not a near-duplicate.
6. **What about forecasts?** Filters and substituted habitats (Fig 9 :60, Fig 11 :70), never the ground.
7. **What can be said at the stop?** A shape and six falsifiers. Not the winning combination, not a `grounded` answer. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **a combination measures the expansion history well when its probes are independent (low overlap, distinct systematics), when their union spans both the geometry of the distance-redshift relation and the growth of structure with residuals kept per redshift slot, and when calibration is held fixed against an anchor that does not update on probe preference. Adding probes that share an evidence pool adds a name, not evidence, and a forecast can rank combinations for budget but cannot say which is true.** The conditions are kept separate, never averaged. Which named combination is best is a declared `gap`, not a hidden answer: the framework returns a shape, and the source-discriminating instrument is not held here. Mode `specified` on the shape, `general` on the structural rules. No world source was allowed to flip a verdict; the one genuine tension (DESI BAO versus CMB) was returned to the census and read as a channel/anchor question, not as a ranking. No unresolved strain remains after re-census.
