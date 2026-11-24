# Figure-grounded audit: How much dark matter exists in the smallest galaxies and dark-matter clumps?

**Mode:** `specified` on the shape, `general` on the level-relative limit, `gap` on the number. Not `grounded`.

**Status: simulated derivation, not a ground reading.** This document was produced by a language model checking an argument for internal consistency against the figures. From the essay actually read this session, Isaiah N, *The Recursive Self-Improvement Trap* (2026-11-19): "the truly testable output would need to be derived from the real architecture or working the formula yourself." The same essay says the output "is only as good as the validator." This document cannot settle the question it reports on. The ground here is telescopes, kinematics, lensing, simulations and particle experiments, none of which were operated for this audit.

**Sources:** the local verbatim figure text, canonical figures README, THE_FORMULA.md, and the world links listed in `10_source_ledger.csv`, all fetched 2026-11-23.

---

## 0. The claim under audit and the residual

The question asks for a quantity: how much dark matter is in the smallest galaxies and dark-matter clumps. Two readings are possible and must not be blended.

- **Reading A, the aggregate.** There is one number, the dark matter content of "the smallest galaxies," and the question asks for it.
- **Reading B, the per-object distribution.** There is a class of slots (each dwarf spheroidal, each ultra-faint dwarf, each subhalo), each with its own mass within a radius, and "how much" is answered by a distribution over those slots plus a low-mass cutoff.

**Residual in effect terms.** Let a slot `s` be one small galaxy or one clump. Prediction `Γ(b,a)` says what mass the current model expects within a stated aperture; observation `o′` (stellar velocity dispersion, lensing, or a resolved simulation) returns a mass; `R_s = |Γ(b,a) − o′|` is the residual on that slot. The question is about `R_s` over a class of slots, and about where the class stops (the cutoff). Nothing in this audit measures an `o′`.

**What an answer would look like, bound as an ordinary term (Formula step "Direction"):** a per-slot mass function with a stated low-mass cutoff, where the cutoff is imported from particle microphysics and each point in the function is checked against a kinematic or lensing mass on the ground. Committing to that shape before the run makes it refusable (Fig 5 :65-66).

**Question type: union, not partition.** The question bundles at least three overlapping conditions: what sets the low-mass end of the halo population, how much mass the faintest observed systems actually contain, and whether the two agree. Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Each condition gets its own loop. Their verdicts are never averaged.

---

## 1. Figure census and domain census

### 1.1 R by arity, symmetry and scale

- **Arity:** one scalar per slot (mass within an aperture, or mass-to-light ratio), indexed by object. Fig 1 :19 "The residual is indexed by object slot, not aggregated." This is not a single global number.
- **Symmetry:** mass is conserved, finite and directionless alone (the state "energy" in Fig 13 :13-14). The population is different: it is a spectrum, "ordering, so more and less can be said" (Fig 13 :20), and a network, "that entities relate, and influence travels" (Fig 13 :23-24), because halos nest and merge. Asking "how much" is a comparison, Fig 12 :85-86 "a threshold relation between two quantities", against a cutoff.
- **Scale:** the low-mass tail of a hierarchy. Fig 4 :21 "The membrane is the boundary between the sizes, and the rule about what may cross it." The question is about a boundary between scales, not about one isolated object.

### 1.2 Domains: actors, currency, anchor

| domain | actors | currency | anchor | partition or union | dependency |
|---|---|---|---|---|---|
| 1. Particle and cosmological generator | dark matter particles, primordial fluctuations, free-streaming length, collisional damping | mass scale, power spectrum, cutoff mass | CMB, particle experiment, large-scale structure | union member | upstream: sets the cutoff the other two compare against |
| 2. Galaxy-scale observation | dwarf spheroidals, ultra-faint dwarfs, their stars | velocity dispersion, luminosity, mass within the half-light radius | telescopes and stellar kinematics | union member | downstream of 1 for interpretation, but independently measured |
| 3. Simulation and structure formation | N-body halos, subhalos, density profiles | halo mass function, concentration, substructure counts | simulation checked against 2 | union member | between 1 and 2: carries the imported cutoff into observable predictions |
| 4. Verification and outreach | expert readers, venues | agreement and residual | the ground, never agreement | checking frame, not a member of the physical union | last: comes after a verdict on stage 1 |

**No nameable anchor means it is not a domain yet.** Domains 1 to 3 each have a nameable anchor. Domain 4 is included only as the checking arrangement; its agreement is not evidence (Fig 2 :40).

**Order by dependency (Fig 3 :20 "The chain is ordered by dependency, not by importance.").** Settle the mass estimator for one object (perception and vocabulary) before the population mass function (objective), and the mass function before the comparison with theory (planning). A claim about the cutoff read off a simulation whose halo finder has not been settled is a reading taken below the break, "a reading of nothing" (Fig 3 :22-23).

### 1.3 Figure census

| figure | bearing in this census | preliminary verdict |
|---|---|---|
| 1 The Agent | residual indexed per object; aggregation hides the live signal | governs reading B, refuses reading A |
| 2 The Ground | anchor must not move; correlation disqualifies a verdict | governs the number and the outreach frame |
| 3 Dependency Chain | settle the estimator before the population before the theory | governs order of loops |
| 4 The Membrane | scale boundary, lossy transform, round-trip gap | governs "smallest" as a boundary and `R_T` |
| 5 Mint Pipeline | guards, bargain, shape made bindable before the run | governs what would license a new term |
| 6 Closure and Reachability | import is the only wall mover; instruments grow from worse instruments | governs the particle cutoff as import and the instrument question |
| 7 Room Chain | agreement compounds, evidence does not | governs multi-venue corroboration |
| 8 Union Surplus | describe the residual before picking a frame; sources overlap | governs domain selection |
| 9 Leave and Arrive | union unbundling, describe before looking, shape not answer | governs question type and the number as gap |
| 10 Ground Maintainer | bring a characterised residual, not the source | governs the two-stage offer |
| 11 The Habitat | enumerate the habitat; contact decides capability | governs which instruments count as anchors |
| 12 The Bond | comparison is a threshold relation; arrangement carries meaning; level-relative irreducibility | governs "how much" as comparison and "smallest" as level |
| 13 Minimum Viable Set | spectrum, network, no bottom, unreachable is a verdict | governs the distribution shape and the level limit |
| Operators table | ⋛ is a threshold relation between two quantities | governs the cut question |
| Symbols table | `R` is the aim and always a slice; ground is the anchor | governs the residual statement |

Strained readings are named in section 2 and re-censed in section 5. None is smoothed over.

---

## 2. Findings

Each finding carries verbatim figure text, a mode, a per-domain verdict and a refuter. Verdict words are `triangulated` (two figures with low overlap), `single-source`, or `gap`.

### F1. The quantity is per slot, not an aggregate

- **Fig 1 :19** "The residual is indexed by object slot, not aggregated."
- **Fig 1 :22** "Aggregating across slots is how a live signal disappears into an average."
- **Fig 13 :20** "ordering, so more and less can be said" (the spectrum, one of the six structures).
- **Mode:** `specified`. **Verdict:** `triangulated` across Fig 1 (an agent's residual indexing) and Fig 13 (a substrate structure), two figures with different cast and low overlap. The world literature independently reports a *mass function* rather than one content: Bullock et al. 2017 write "There are many more small halos than large ones" and give a steep halo mass function. That corroborates the shape but is secondary.
- **Consequence:** reading A is refused. "How much" is answered by a distribution of masses over named slots, each with its own `R_s`. A single mean is a filter for a budget, never a witness for the verdict (Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict.").
- **Refuter:** show that one aggregate number leaves no positive residual on any individual faint system, that is, that the per-object residual is zero after aggregation. A single average that hides a live per-object signal fails this.

### F2. "Smallest" is a level, not a bottom (strain named and re-censed)

- **Fig 12 :104** "irreducible is a fact about a level and never about the world, and there is no bottom"
- **Fig 4 :33** "Which is why there is no top and no infinite regress."
- **Mode:** `general` for the framework claim. **Verdict:** `triangulated` (Fig 12 on composition levels, Fig 4 on scale membranes). The *physical* claim that there is no minimum halo mass is **not** licensed by these lines.
- **Strain test and re-census.** On a first pass these lines look like an answer to "is there a smallest clump?" They are not. Fig 12 governs levels of composition of terms; a halo mass function is a physical distribution, not a composition of terms in `Γ`. If the lines are forced to govern minimum halo mass, they strain, so they govern another quantity (F2 as written) and the domain must be re-censed. Re-census: the existence and value of a low-mass cutoff belongs to domain 1 (particle microphysics) and is an import, not a derivation from the six-term set. This strain is kept visible in section 5 and in `11_audit.md`.
- **Refuter:** derive a minimum physical halo mass from the six-term set alone, with no import from particle physics. If that succeeds, the level-relative limit does not govern this question and F2 is withdrawn.

### F3. The number is a gap from the figures; only the shape is figure-governed

- **Fig 9 :32** "you get a kind of thing, never the answer itself"
- **Fig 6 :23** "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."
- **Fig 13 :134** "Unreachable is a verdict here, not a silence"
- **Mode:** `general` on the limit. **Verdict:** `gap` for the number in the figure frame, `triangulated` for the shape limit (Fig 9 on lookup and recognition, Fig 6 on what moves a wall).
- **Consequence after genuine re-census.** The figures contain no mass measurement, no halo finder, no free-streaming length. No figure line governs a number. Saying `gap` is the honest verdict, not a failure to try. The shape that *is* governed: a per-slot distribution with a cutoff that must be imported, source-gated, and then settled by the ground. Fig 8 :39 "So a search that finds nothing is never a proof of absence." This gap is about the figure frame's reach, not about the world's answer, which exists and is being measured.
- **Refuter:** exhibit a figure line that yields a numerical dark matter mass for a named dwarf galaxy without an imported observation or particle parameter. None exists in the verbatim text; if one is produced and survives the strain test, this `gap` closes.

### F4. The anchor for the number is the ground, never agreement

- **Fig 2 :29** "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
- **Fig 2 :30** "If it moves when you push on it, it is not an anchor."
- **Fig 2 :45** "Frames range against the ground. They do not negotiate with it."
- **Mode:** `specified`. **Verdict:** `triangulated` (Fig 2 anchor definition plus Fig 1 :23 "The ground enters as the only metric.").
- **World corroboration, secondary:** Bullock et al. 2017 give the kinematic estimator "the mass can be measured accurately within the stellar half-light radius" and Errani et al. 2024 state that micro galaxies are distinguished "by measuring their velocity dispersion." These are the anchors, not the essays and not this audit.
- **Refuter:** show that the reported mass of a faint system changes when readers are told which theoretical frame produced it, with no change in the kinematics. That would mean the anchor had been moved by a frame.

### F5. The small-scale problems are a union compound; unbundle before searching

- **Fig 9 :55** "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
- **Fig 9 :57** "a case in two conditions is not a harder case of either" (the union reading).
- **Fig 9 :27-28** "describe it before you go looking, or any frame you pick will seem to fit"
- **Mode:** `specified`. **Verdict:** `triangulated` (Fig 9 union/partition split and Fig 9 describe-before-look are the same figure but different moves; the low-overlap corroboration comes from the world literature, which lists three separate challenges).
- **World corroboration, secondary:** Bullock et al. 2017 name three distinct challenges, "Missing Satellites and Dwarfs", "Low-density Cores vs. High-density Cusps" and "Too-Big-to-Fail". AAS Nova (Lexi Gault, 2024-11-01) reports a fourth finding about cored profiles in six ultra-faint dwarfs. These are overlapping conditions, so one lever cannot clear them all (Fig 9 :55-56).
- **Refuter:** show that one condition (say the low-mass cutoff) entails all the others with no additional mechanism. Then the union reading is wrong and a single loop suffices.

### F6. Independence is the scarce resource, not the number of readers

- **Fig 2 :44** "The effective-sample-size correction for correlated observations is standard in survey statistics and meta-analysis; the collapse is the same arithmetic read as a warning."
- **Fig 7 :13** "agreement compounds, evidence does not" (joining the lines "same closure, handed along;").
- **Fig 2 :40** "agreement about the world is worthless when the agreeing frames share an evidence pool"
- **Mode:** `general` for the figure rule, `specified` for its application here. **Verdict:** `triangulated` across Fig 2 and Fig 7, two figures on different objects (anchor collapse and room chains) with low overlap.
- **World corroboration, genuinely low overlap:** Binh Ho, *What is a correlated sample worth? Effective sample size and the integrated autocorrelation time* (2026-10-12, statistical computation): "For positively correlated draws the formula is optimistic: consecutive values repeat much of the same information." This is from a different field from both the framework essays and the astrophysics sources, so it is not a pooled witness. It corroborates the arithmetic the figure names. Two reviews quoting the same kinematic compilation are one witness, not two.
- **Refuter:** demonstrate that two frames which draw on the same halo catalogue and the same kinematic compilation carry independent evidence for the number. By the figure's arithmetic they do not; a demonstration otherwise would break F6.

### F7. The question is unreached, not unreachable

- **Fig 6 :34** "Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."
- **Fig 4 :30** "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."
- **Mode:** `specified`. **Verdict:** `triangulated` (Fig 6 on proto-instruments and Fig 4 on round-trip gap).
- **Application.** Something is already returning a reading at the relevant resolution: stellar velocity dispersions in ultra-faint dwarfs (Bullock et al. 2017), stellar surface-density profiles in six ultra-faint systems (AAS Nova, 2024), and predicted velocity dispersions for heavily stripped "micro galaxies" (Errani et al. 2024). Therefore there is an edge to extend from; this is depth at the current budget, not absence. The honest label is `unreached`. The round trip must still be measured: a condensation like "dwarfs are dark matter dominated" dropped the per-slot mass function and the cutoff question, which is `R_T` (section 5 of `11_audit.md`).
- **Refuter:** show that no instrument, at any resolution, is already returning a failing reading for mass in the faintest systems, so there is no proto-instrument. Then the label flips from `unreached` to `unreachable`.

### F8. The cutoff is an import and needs a source gate

- **Fig 6 :14** "the only operator that moves the wall" (IMPORT).
- **Fig 6 :12-13** "source gate: provenance" and "shadow test: explains a gap".
- **Fig 8 :50-52** "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them."
- **Mode:** `specified`. **Verdict:** `single-source` for the figure rule on imports; the physical content is the world literature.
- **Application.** Bullock et al. 2017 report that for typical WIMP candidates "these processes erase cosmological perturbations with M ≲ 10−6 M⊙ (i.e., Earth mass)" and that substructure mass functions rise "down to the low-mass free-streaming scale". That number is an import from particle physics into this question. It is not produced by the figures. It must be recorded with provenance (which particle model, which cross-section, which damp mechanism) and a shadow test (it explains the absence of halos below a scale). Without that record it carries zero evidentiary weight here (Fig 8 :50-52).
- **Refuter:** show that the cutoff follows from the six-term set plus the seven bonds with no particle input. Then it is not an import and F8 is withdrawn.

### F9. What survives, with mode attached

| claim | mode | figure / source | status |
|---|---|---|---|
| "How much" is a per-slot distribution, not one aggregate number | `specified` | Fig 1 :19, :22; Fig 13 :20 | triangulated |
| A cutoff question is a threshold comparison (⋛) on a mass scale | `specified` | Fig 12 :85-86; Operators ⋛ | single-source for the figure mapping |
| "Smallest" is level-relative; the six-term set supplies no physical bottom | `general` | Fig 12 :104; Fig 4 :33 | triangulated, with the F2 strain recorded |
| The numerical answer is not in the figure frame | `general` | Fig 9 :32; Fig 6 :23; Fig 13 :134 | `gap` |
| The anchor is measurement, not agreement | `specified` | Fig 2 :29, :30, :45 | triangulated |
| The question is reachable with existing instruments | `specified` | Fig 6 :34; Fig 4 :30 | triangulated, world-supported |
| The low-mass cutoff is a sourced import from particle microphysics | `specified` | Fig 6 :12-14; Bullock 2017 | single-source rule, world-grounded content |

Verdicts are kept separate. Nothing in the table is averaged into an overall confidence.

---

## 3. Pre-registered refuter

Written before the conclusion, per the standing rule that a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. One aggregate dark matter mass is shown to leave zero positive residual on every individual faint system, so Fig 1 :19 and :22 are misapplied.
2. A minimum physical halo mass is derived from the six-term set alone, with no particle import, closing the F2 gap from inside the figures.
3. No instrument at any resolution is already returning a failing mass reading for the faintest systems, so F7 flips from `unreached` to `unreachable`.
4. A figure line is produced that yields a numerical mass for a named dwarf without an imported observation or particle parameter, closing F3.
5. Two frames drawing on the same catalogue and kinematics are shown to carry independent evidence for the number, breaking F6.

Until one is run, no part of this may be labelled `grounded`. A failure is more useful than an endorsement.

---

## 4. Recommendation

1. Refuse reading A in the first sentence of any outreach: the answer is a per-slot mass function, not one number (F1).
2. State the F2 strain openly. The framework's "no bottom" governs composition levels, not halo mass functions. The physical cutoff is an import (F2, F8).
3. Say `gap` for the number plainly. The framework returns a shape; the ground returns the number (F3, F4).
4. Unbundle before searching: cutoff physics, observed faint-galaxy masses, and their comparison are three loops (F5).
5. Keep independence as the scarce resource. Ask one checker at a time, record their verdict before showing theory, and never pool later agreement (F6).
6. Lead with the registered refuter (Fig 5 :65-66, Fig 10 :52).

---

## 5. Canonical usage check

Read after the first four sections, per the standing rule:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also "a reading that makes one contradict another has misidentified its domain, not found a flaw," and the limit: "what a missing thing would have to look like (a shape, not a name)." The framework "stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest. Indiscernibility is not identity."
- `FRAMEWORK/figures/THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." And step 7's three distinct questions SEARCHED, INWARD and OUTWARD.

Applied here: SEARCHED is answered first (no figure line yields the number, and the verbatim text was grepped). INWARD is answered next (stellar kinematics is already returning a failing reading, F7). OUTWARD is the import from particle microphysics and the observation frame, with source gate and shadow test (F8). These three are never read against one another.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "Fig 13 says there is no smallest clump, so no minimum halo mass" | **Retracted as a strain.** Fig 12 :104 and Fig 4 :33 govern composition levels and scale membranes. The physical cutoff is an import (F2, F8). Kept visible rather than erased. |
| "The question is unreachable from the framework" | **Narrowed.** It is unreachable in the figure frame (`gap`, F3) but `unreached` in the world, because instruments already return readings (F7). Unreachable is a verdict, not a silence, and here the verdict is about the frame, not the world. |
| "Aggregate the dark matter content of the smallest galaxies for a clean answer" | **Refused.** Fig 1 :19 and :22; aggregating throws away the per-object signal (F1). |
| "Name the cutoff scale the framework predicts" | **Forbidden by canonical usage.** The framework returns a shape, not a name; naming the scale is a sourced import (F8). |
| "More agreeable readers strengthen the result" | **Refused.** Fig 2 :40 and Fig 7 :13; agreement from one pool is one witness. |
| F1 to F8 after re-census | **Confirmed with F2 narrowed.** No quote drifted from the verbatim extract; the only live strain is F2 and it is recorded, not hidden. |

---

## 6. Strain summary

One live strain, F2: the figure language of "bottom" and "level" does not govern physical halo masses without forcing. It is re-censed into a `general` statement about composition levels plus an imported physical cutoff. All other figure lines fit without force. The `gap` on the number is not a strain; it is what the figures say about their own reach.
