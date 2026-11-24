# Figure-grounded audit: QMGR2-0049, consistency of universe age estimates

**Mode of this document: `specified` on the world-facing findings, `general` on the structural shape, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From *The Recursive Self-Improvement Trap*, read 2026-11-23: "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post... However, the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources for the figures:** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session; `FRAMEWORK/reference/FIGURES_README_canonical.md`; `FRAMEWORK/figures/THE_FORMULA.md`. Cite as `Fig N :line`. Every figure quote below is an exact substring of the verbatim extract. World sources are secondary corroboration and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **s (the slot)** is a method that returns an estimate of the age of the universe. R is indexed by method, never pooled into one global number.
- **o′** is what that method measures: a CMB temperature and polarization map, a Cepheid period and apparent brightness, a gravitational-wave strain, the luminosity of an old globular cluster.
- **Γ(b,a)** is the model that maps the measurement to an age: almost always flat ΛCDM, with H0 as the dominant free parameter.
- **R** is the spread of the resulting ages across methods, and the question asks whether that spread is a live signal (a real disagreement at the ground) or a pooled artifact (methods that share evidence or assumptions and therefore cannot corroborate each other).

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"The ground enters as the only metric."** (Fig 1 :23)

State the residual as: *why do age estimates from different methods fail to converge to one number, and when their numbers do agree, is that agreement evidence or just a shared evidence pool speaking twice?* This is an effect description. It names no theory, no "Hubble tension" as a cause, no "new physics". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be (i) a test for independence between two estimating frames, (ii) a separation of within-pool agreement from cross-pool disagreement, and (iii) a statement of what would have to be imported to close the residual, without naming the import. It is now bound, so the pre-registered refuter in section 5 can fire on it.

**Anchor test.** Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** Fig 2 :36: **"An anchor is legitimate when the question is constitutively about it."** The question is constitutively about the expansion history of the universe, not about any one instrument. There is no direct cosmic clock. The universe has no birth certificate. Every claimed age is a model-derived quantity, so no single method is the anchor. Each is an instrument, and Fig 2 :37-38 warns that "instruments can be wrong on axes they do not measure." The nearest things to anchors are a lower bound from old stars (the universe must be older than its oldest objects) and a geometric distance ladder rung (parallaxes, masers), but neither returns an age by itself. The honest status of the anchor for age is **reached only through a model, with a measured round-trip gap** (Fig 4 :30).

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a family of estimates indexed by method: a one-place function on slots, each returning an age under a model. It is not a single number. Comparison of two ages is a threshold relation (comparison bond ⋛, Fig 12 :87: "a threshold relation between two quantities"), not an identity: agreement means "within error bars", not "the same object". Methods are not interchangeable, so the relation is asymmetric in evidence provenance even when the numbers are close.
- **Symmetry.** "Consistent" is a threshold relative to quoted uncertainties, so it is a ⋛ comparison (Fig 12 :87). A 0.02 Gyr spread is decisive for Planck versus BAO; a 0.9 Gyr spread is decisive for Planck versus a high-H0 ladder age. The meaning of "consistent" changes with the error scale, so the bond is priced by scale, not fixed (Fig 12 :99-101).
- **Scale.** The same quantity (age today) is inferred from different cosmic epochs: the CMB at recombination (z ≈ 1100), baryon acoustic oscillations at intermediate z, the local distance ladder at z ≈ 0, standard sirens at z ≈ 0, and old stars in the Galaxy today. These are different scales linked by a model through a lossy membrane (Fig 4). The round trip from a measurement up to H0 and down to an age must have its gap R_T measured, not assumed zero (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 Early-universe inference (CMB and sound horizon)** | CMB photons, sound horizon, ΛCDM, BAO | angular scale mapped to H0 then age | yes: the CMB map is a measurement, but age is model-derived, so the age anchor is reached through the model | admitted |
| **D2 Late-universe distance ladder** | Cepheids, TRGB, JAGB stars, SNe Ia, Gaia parallaxes, NGC 4258 masers | geometric distances and redshifts mapped to H0 then age | yes: geometric parallaxes and masers as the base rung | admitted |
| **D3 Standard sirens (gravitational waves)** | GW170817, host galaxy NGC 4993 | GW luminosity distance plus EM redshift, no ladder | yes: the GW signal itself, but currently low precision | admitted |
| **D4 Old-object lower bound** | globular clusters, old field stars, white dwarfs | stellar ages as a lower bound on cosmic age | yes for a bound: stellar evolution models, which can be wrong on axes they do not measure; no for a point age | admitted as bound only |
| **X1 A single true age readable off a clock** | none | none | **no** anchor independent of a model; there is no t = 0 clock to consult | not a domain yet |
| **X2 "The tension is just statistics"** | aggregate averages of many methods | pooled error-weighted mean | measurable, but this is already inside D1 and D2, and a pooled reading is a frame-internal quantity (Fig 1 :27) | absorbed, not separate |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that the universe has no age. X2 is absorbed because a weighted mean of agreeing frames is a convention, not a witness (Fig 2 :41).

### 1.3 Partition or union

D1 and D2 overlap: both use ΛCDM to turn a measurement into an age, and BAO (D1) is calibrated by the same sound horizon that anchors the CMB inference. D2 methods overlap each other: Cepheids, TRGB and JAGB are applied to the same host galaxies and often the same supernovae (Freedman, UChicago News 2024). D3 and D4 are low-overlap with both camps: a standard siren uses no distance ladder, and old stars use stellar evolution rather than the expansion history. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: **(C1)** internal consistency within a calibration/model camp (Planck, BAO, SNe under ΛCDM agree tightly), and **(C2)** cross-camp consistency between low-overlap determinations (early-universe versus late-universe H0, and hence age). A camp that fails only C1 and a comparison that fails only C2 are not different degrees of one failure; they need different instruments. The single lever "average all age estimates" clears C1 and leaves C2 standing, because averaging is a convention about shared meaning (Fig 2 :41) and cannot move a wall between closures (Fig 6 :21).

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order: 1 perception (does the instrument return a signal?) → 2 vocabulary (does the model have terms for what the signal affords, that is, does ΛCDM map it to H0?) → 3 objective (can it say what would count as progress, that is, a consistent age?) → 4 planning (choose a calibration anchor) → 5 learn and carry. The middle link is where the model assumptions live: having terms for what a measurement affords and saying what would count as a consistent age. It has no instrument independent of the model, so it is the link most likely to break, and most effort is spent above the break (Fig 3 :29-30). The Hubble tension sits exactly at this link: Verde, Schöneberg and Gil-Marín (2024) write that "The shape of the Universe expansion history agrees with the model; it is the normalizations that disagree," a statement about link 2 and 3, not about perception.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed and why averaging destroys it |
| 2 The Ground | independence, common pool, anchor must not update, correlation valence | **decisive** for what "consistent across independent methods" can mean |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs where the disagreement lives |
| 4 The Membrane | methods cross up, head starts down, lossy round trip R_T | governs model-to-age inference |
| 5 Mint Pipeline | three guards as product; settlement | governs whether a new-physics term is licensed |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs what could close the residual |
| 7 Room Chain | agreement compounds, evidence does not; selection between rooms | governs why a decade of agreement did not settle it |
| 8 Union Surplus | convergent derivation versus adopted import; low overlap | governs which methods count as two witnesses |
| 9 Leave / Arrive | union versus partition; non-shrinking disagreement; describe residual first | **decisive** for treating the tension as several questions |
| 10 Ground Maintainer | ground does not decay, channel does; declare stakes | governs calibration as a stake, not an anchor |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | governs old-object methods as habitat-embedded |
| 12 The Bond | comparison, settled molecule becomes atom, isomer | governs age as a derived quantity and agreement as a threshold |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop and the refused name |

**Strain test applied during this census:** an early attempt to apply Fig 13's six-term physical substrate directly to "methods" only fit by calling a distance ladder a network and H0 a gradient. That is a strain, so Fig 13 does **not** govern the methods as physical terms. Re-census sent Fig 13 to the honest-stop and closure role only (section 7, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about the age estimates, `grounded` only if a measurement settles it. None is `grounded`.

### F1: Age consistency is indexed per method, never pooled

**Mode: `general` with a `specified` consequence for method. Domain all. Status: triangulated (Fig 1 and Fig 9, low overlap: per-slot residual versus filter/witness rule).**

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)

A single "best age of the universe" formed by averaging all methods is a pooled reading. It scores the field with a quantity the field produces. The specified consequence: any answer to QMGR2-0049 that is an error-weighted mean across methods has already thrown away the only signal that says which camp has lost contact with the ground. Verde et al. (2024) note there are "more than a dozen H0s" and that "these determinations do not agree at high statistical significance"; they cluster into two camps. Averaging the two camps produces a number nobody's method actually returned.

**Refuter:** an averaged age statistic that predicts, prospectively and per method, which method will next move out of agreement. If one exists, F1's methodological consequence is false.

**World bearing (secondary):** Turner (2024) shows that the uncertainty in the age-redshift relation is "dominated by the uncertainty in the Hubble constant" and that other ΛCDM parameters contribute at the 0.07 to 0.9 percent level. That corroborates indexing by method, because H0 is method-specific.

### F2: Independence decides whether agreement is evidence (decisive)

**Mode: `general`. Domains D1, D2, D3. Status: triangulated (Fig 2 and Fig 8, low overlap: anchor triangulation versus union surplus).**

> **"Independence, between two frames, is how little they draw on the same evidence."** (Fig 2 :31)
> **"Two people reading the same report are not two frames; two instruments pointed at the same thing are."** (Fig 2 :31-32)
> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)
> **"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"** (Fig 2 :41)
> **"Buy independence in proportion to the cost of being wrong."** (Fig 2 :42)

The tight agreement among Planck CMB, BAO and supernovae under ΛCDM (ages around 13.79 to 13.80 Gyr, Planck 2020 Table 2) is genuine agreement, but it is agreement inside one closure: all use ΛCDM, and BAO's physical scale is calibrated by the same sound horizon the CMB fixes. By Fig 2 :40 it is disqualifying for a verdict. It is excellent for a convention (Fig 2 :41): the community can agree on what "13.8 Gyr" means. Fig 8 :50 adds that "Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence," and :51-52 that "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them." So the question is not whether numbers match; it is whether the records of their derivation differ. Riess et al. (2022) make the same point operationally: they ran "nearly 70 analysis variants" and found "no indication that the discrepancy arises from measurement uncertainties or analysis variations considered to date."

**Refuter:** a demonstration that two low-overlap methods (say standard sirens and CMB) draw on fully independent evidence and agree on H0 (hence age) within their quoted errors at the precision needed. That would turn their agreement into triangulation under Fig 2 :31-32.

### F3: There is no direct anchor for age; age is a derived, settled molecule

**Mode: `specified`. Domains D1 to D4. Status: triangulated (Fig 2 :anchor rule, Fig 12 :settled molecule, Fig 4 :round trip, three distinct roles).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** (Fig 2 :29)
> **"An anchor is legitimate when the question is constitutively about it."** (Fig 2 :36)
> **"instruments can be wrong on axes they do not measure."** (Fig 2 :37-38)
> **"A settled molecule becomes an atom for whatever composes over it."** (Fig 12 :104)
> **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."** (Fig 4 :30)

Every age estimate is a two-stage composition: measurement → H0 (a settled molecule under ΛCDM) → age (an atom composed over that settled molecule, Fig 12 :104). The ground is the actual expansion history, which is not directly observed. Turner (2024) confirms in effect terms: the age-redshift uncertainty is "dominated by the uncertainty in the Hubble constant," with Ωm, w and Ωk far less important. Cimatti and Moresco (2023) state that "the age of an object at z = 0 provides only a lower limit to the current age of the Universe," so the old-star method (D4) cannot be a point anchor. The round trip from model to H0 to age and back carries a gap R_T (computed qualitatively in `11_audit.md`): it includes the assumption of flat ΛCDM, the minimal-neutrino-mass prior, and the sound-horizon calibration. These are not measured by the age number itself.

**Refuter:** a measurement of cosmic age that does not pass through any cosmological model, for example an independent clock surviving from t = 0. None is known.

### F4: The cross-camp disagreement is a persistent, non-shrinking residual, so it is a real signal

**Mode: `specified`. Domains D1, D2, D3. Status: triangulated (Fig 9 and Fig 7, low overlap: non-shrinking disagreement versus selection between rooms).**

> **"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."** (Fig 9 :4-5)
> **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)
> **"The chain approaches the truth only as the world runs out of ways to refuse it."** (Fig 7 :42)

The gap between early-universe and late-universe H0 has not shrunk across a decade of better data. Planck 2020 reports a "3.6σ, tension with local measurements of the Hubble constant"; Riess et al. 2022 report "a 5σ difference with the prediction of H0 from Planck"; Verde et al. 2024 report two camps at roughly 68 and 73 km/s/Mpc. Freedman (2024) reports that JWST measurements with three local distance indicators find "the two other methods agree with each other, and the Cepheids are an outlier right now," so even within the late camp the middle link is being re-examined. Under Fig 9 :4-5, a disagreement that does not shrink with effort is not one hard question; it is several well-formed ones. Under Fig 7 :42, the fact that the world keeps refusing the single-model answer is the direction of travel, not a nuisance. The world-facing shape: the estimates are **not consistent across genuinely independent methods**, and the persistence of the split is itself the signal.

**Refuter:** the tension falls below 2σ under both substantially more data and systematic reanalysis, with no new model term introduced. That would make F4 a pooled artifact and retire the "real signal" reading.

### F5: The question is a union and must be unbundled before a lever is chosen

**Mode: `general` with a `specified` consequence. Domains all. Status: triangulated (Fig 9 and Fig 3, distinct roles).**

Fig 9 :54, :55 and :57 (quoted in section 1.3) are the governing lines. The two conditions have different instruments:

- **A C1 failure** (within-camp) shows up as inconsistent local distance indicators, calibration drift, or differing likelihoods within ΛCDM. Freedman 2024 is a C1 report: Cepheids disagree with TRGB and JAGB at the distance step, before H0 is even formed.
- **A C2 failure** (across-camp) shows up as a non-shrinking early versus late split with each camp internally coherent. Riess 2022 and Planck 2020 are C2 reports.

A single lever, for example "adopt the Planck age", clears C1 for the early camp and leaves C2 standing. This is why the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged (Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict.").

**Refuter:** a single model or calibration change that restores both C1 and C2 and leaves no categorically different residue. That would collapse the union into a partition.

### F6: The framework returns a shape, not a name

**Mode: `general`. Status: figure-governed and canonically confirmed.**

> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)
> **"what it returns is a shape rather than a name."** (Fig 13 :133)
> **"the system can report that it lacks something rather than producing an answer anyway. Unreachable is a verdict here, not a silence,"** (Fig 13 :134)
> **"the only operator that moves the wall"** (Fig 6 :14)

The shape is: an import is owed, that is, something that changes the closure so early and late determinations can range against a common ground. The framework cannot say which new physics (early dark energy, modified gravity, a local void, an unmodeled stellar systematic) because naming a missing primitive would mean already holding it. Fig 6 :21 ("MINT composes inside the closure and can never add an atom.") forbids deriving the fix by composing harder inside ΛCDM. Verde et al. (2024) agree at the world level: none of the three classes of fix (early-time physics, global modification, or systematics) "has the consensus of the community."

**Refuter:** a figure-derived term that names the specific new physics or specific systematic responsible. Under Fig 9 :32 and Fig 13 :133 this cannot happen; if it did, the framework's own limit claim would be false.

### F7: Agreement is not a verdict; frames range against the ground

**Mode: `general`. Domains all. Status: triangulated (Fig 2 and Fig 10, low overlap: triangulation versus verifier non-access).**

> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"Frames range against the ground. They do not negotiate with it."** (Fig 2 :45)
> **"A verifier that can reconstruct the claim cannot verify it."** (Fig 10 :42)

A consensus age produced by averaging agreeing frames is a negotiation with a mirror. The legitimate move is to keep the estimates separate and let a ground (a new distance indicator, a standard-siren sample, an old-object lower bound) settle each separately. Freedman's three-indicator strategy is the world-level instance of this: use the same telescope and filters, measure three different ways, and let the disagreement name the systematic rather than averaging it away.

**Refuter:** a case where consensus among low-overlap frames prospectively predicted a later independent measurement to within its errors. That would be triangulation under Fig 2 :31-32, not negotiation.

### F8: Calibration is a stake that can masquerade as an anchor

**Mode: `specified`. Domains D1, D2. Status: single-source (Fig 10, with the seat-map interest rule as a corroborating line from the same framework, so one witness).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"stale percepts, dropped transients, saturated metrics, pooled readings"** (Fig 10 :26)
> **"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."** (Fig 10 :59)

A method whose H0 depends on a calibration it did not itself derive has an interest in the reading. Verde et al. (2024) put it in one word: "It appears to be a matter of anchors." The social form of this is prestige: a well-measured result from a famous collaboration can stand in for proof. *The Recursive Self-Improvement Trap*: "Prestige must never be allowed to validate an action directly... Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." Where the stake cannot be removed, declare it rather than pretending to a view from nowhere.

**Refuter:** a method whose inferred H0 is invariant across all plausible calibration anchors and all analysis variants. If one exists for both camps, F8 weakens to `general`.

### F9: World sources conflict, and the conflict returns to the census

**Mode: `general`. Status: figure-governed.**

Three world sources disagree about what the split means. Riess et al. (2022) say the discrepancy shows "no indication that the discrepancy arises from measurement uncertainties or analysis variations considered to date." Freedman (2024) says of the local distance step that "that disagreement isn't telling us anything about fundamental physics in the early universe. That's telling us that we better understand the distances better," and that the combined evidence "does not meet the requirement of extraordinary evidence." Verde et al. (2024) say "it appears to be a matter of anchors."

**Conflict rule applied:** a conflict between world sources sends the derivation back to the census; it never flips a figure verdict (authority order, project README §3). Re-census R1 (section 6) resolves the apparent conflict: these sources differ in which calibration anchor they range against, so they are reporting different slots, not contradictory facts about one slot. The figure verdict (independence decides; the question is a union; no direct age anchor) is unchanged. The sources are one broad cosmology evidence pool, so their agreement with the figures is weak corroboration (Fig 2 :40).

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per method, never a global age average | general | Fig 1 :19, :22 | figure-derived |
| Independence decides whether agreement counts | general | Fig 2 :31-32, :40-41 | decisive, triangulated F2 |
| No direct anchor for age; age is derived | specified | Fig 2 :29, :36-38; Fig 12 :104; Fig 4 :30 | triangulated F3 |
| The cross-camp gap is a real, non-shrinking residual | specified | Fig 9 :4-5; Fig 7 :13, :36, :42 | triangulated F4 |
| The question is a union of C1 and C2 | general | Fig 9 :54-57 | figure-derived F5 |
| An import is owed; its name is withheld | general | Fig 6 :14, :21; Fig 9 :32; Fig 13 :133-134 | figure-derived F6 |
| Consensus is negotiation, not triangulation | general | Fig 2 :35, :45; Fig 10 :42 | triangulated F7 |
| Calibration is a declared stake | specified | Fig 10 :24, :26, :59 | single-source F8 |
| Which specific new physics or systematic closes it | not stated | none | gap: framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device"* (Seat Map :287). The shape claim is refuted if any of the following is observed:

1. Two low-overlap methods (for example standard sirens and CMB) are shown to draw on fully independent evidence and agree on H0, hence age, within the precision needed (breaks F2, Fig 2 :31-32).
2. The early versus late H0 gap falls below 2σ under more data and systematic reanalysis with no new model term (breaks F4, Fig 9 :4-5).
3. A direct, model-independent measurement of cosmic age is made (breaks F3, Fig 2 :29).
4. A single lever restores both within-camp and cross-camp consistency with no categorically different residue (breaks F5, Fig 9 :57).
5. The figures derive the specific new physics or specific systematic responsible (breaks F6, Fig 9 :32, Fig 13 :133).
6. Fig 2's independence rule fails inside the framework, that is, two frames sharing one evidence pool are admitted as two witnesses (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a ground settles the age independently of a model.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of the Hubble tension (Fig 10 :52, "Bring a characterised residual, never the source").
2. Keep within-camp and cross-camp consistency separate in every report. A blended "best age" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Ask of any claimed agreement: what evidence do these two methods share? (Fig 2 :31-32). If the answer names one shared model and one calibration, the agreement is a convention, not a witness.
4. Treat "new physics" as a candidate import with a source gate and shadow test, never as an answer (Fig 6 :23; Fig 8 :51-52).
5. Use the cosmology literature as a budget filter and as one corroborating witness, not as the verdict. Planck, Riess, Verde and the reviews share a broad evidence pool (Fig 2 :40).
6. Offer the formula as a method after a verdict is recorded (Fig 4 :22, "Only methods cross up. Only head starts come down."). Each user writes their own refuter and states their own mode.
7. Stop at the shape. Do not name which new physics closes the gap; the framework returns "a kind of thing, never the answer itself" (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and the essays *The Library of Babel* and *The Recursive Self-Improvement Trap* (both fetched 2026-11-23).

- The README confirms: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." It also confirms the re-census rule: "a reading that makes one contradict another has misidentified its domain, not found a flaw."
- The README's canonical limit: the framework says "what a missing thing would have to look like (a shape, not a name)", then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop and F6.
- The source essay confirms the simulation status: "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13 six-term set to "methods" | **Retracted, strain S1** | Only fit by renaming a ladder a network and H0 a gradient. Re-census: Fig 13 governs the physical substrate, not a method's Γ |
| Treated the 5σ tension as straightforward corroboration of "new physics" | **Retracted as a witness, kept as a residual** | Fig 9 :4-5 says a non-shrinking disagreement is several questions, not a name; F6 stops at the shape |
| Read the 13.797 Gyr Planck age as "the answer" | **Retracted as a verdict, kept as a convention** | Fig 1 :19 indexes per slot; Fig 2 :41 makes shared-closure agreement a convention |
| Wanted to call F2 a `general` law about all measurements | **Narrowed to `general` structure, `specified` consequence** | The independence rule is structural; the identification of which methods are low-overlap is a wager requiring sources |
| Used Freedman 2024 as a primary measurement | **Narrowed to public commentary** | It is a podcast transcript, not a paper; used only to report a stated position, not as a measurement |
| F9 apparent conflict among Riess, Freedman and Verde | **Conflict, re-census R1** | They range against different calibration anchors. Resolved as different slots; verdict unchanged |
| F8 "calibration is a stake" | **Kept as `single-source`, declared** | Fig 10 only; the seat-map interest rule is the same framework, not an independent witness |
| F6 row "which specific new physics" | **Marked `gap`** | The canonical limit forbids naming a missing primitive; "Unreachable is a verdict here, not a silence," (Fig 13 :134) |

**Strains sent to the log:** S1 (Fig 13 applied to methods), resolved by re-census; R1 (world-source conflict on what the split means), resolved by re-census to different anchors. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of within-camp consistency and cross-camp consistency, each with its own instrument.
2. **What is the anchor?** Not any one method. Fig 2 :29, :36-38. Age is constitutively about the expansion history, which is reached only through models; old objects give a lower bound, not a point.
3. **Does agreement among CMB, BAO and SNe count?** Fig 2 :40-41. No for a verdict, yes for a convention: they share one model and one sound-horizon calibration.
4. **Why has the split not closed?** Fig 9 :4-5 and Fig 7 :36, :42. It is a non-shrinking residual between rooms; the world keeps refusing the single-frame answer.
5. **What is owed?** An import that moves the wall (Fig 6 :14, :21), characterized in effect terms, not named.
6. **What can be said at the stop?** A shape and six falsifiers. Not which new physics, not which systematic, not a `grounded` age. "Unreachable is a verdict here, not a silence," (Fig 13 :134) and "So a search that finds nothing is never a proof of absence." (Fig 8 :39).

---

## 8. Updated verdict

The shape survives: **current estimates of the universe's age are consistent only within shared-assumption clusters, not across genuinely independent methods.** Within the early-universe ΛCDM cluster the ages agree near 13.79 to 13.80 Gyr, and that agreement is a convention bought with a common model and sound-horizon calibration (Fig 2 :41). Across low-overlap camps the implied H0 values split into two non-shrinking camps near 67 and 73 km/s/Mpc, which under the same densities imply ages near 13.8 and 12.9 Gyr respectively, so the estimates are not consistent where independence is real (Fig 2 :31-32; Fig 9 :4-5). The question is a union of within-camp and cross-camp consistency, so no single average can settle it (Fig 9 :57). An import is owed, but the framework returns a shape, not a name (Fig 9 :32; Fig 13 :133-134). Mode `specified` for the world-facing claims, `general` for the structure. No world source flipped a verdict; the one genuine conflict was returned to the census and re-mapped to different anchors. No unresolved strain remains after re-census.
