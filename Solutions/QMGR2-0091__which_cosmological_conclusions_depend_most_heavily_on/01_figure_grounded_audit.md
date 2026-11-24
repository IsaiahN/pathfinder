# Figure-grounded audit: which cosmological conclusions depend most heavily on a model or calibration

**Mode of this document: `specified` on the separators and the mechanism ranking, `general` on the structural shape, `gap` on the literal numeric ordering, not `grounded`.** Per `THE_FORMULA.md`: `general | specified | grounded`, and an unmeasured quantity is a specification of what to measure, not a verdict.

**Status: simulated derivation, not a ground reading.** LLM output is simulacra, and the testable output would have to be derived from a real instrument or the formula worked by hand. This document is checked for internal consistency against the figures only. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md`. Formula, seat map and metalaws note locally. World sources opened and recorded in `10_source_ledger.csv`.

---

## 0. The residual, stated in effect terms

Let the conclusions be `c_1 ... c_n`: H0, the age of the universe, Ωm, σ8 / S8, the dark-energy equation of state w, spatial curvature ΩK, the effective relativistic degree count Neff, the sound horizon r_s / r_d, primordial light-element abundances, the expansion of the universe, the hot Big Bang, and the dark-matter inference.

Define `R_i` as the movement of `c_i` when the model or the calibration at the end of its inference chain is swapped for another admissible one. The question asks for the ordering of the `R_i`.

- **Arity:** one `R_i` per conclusion. This is a relation between a conclusion and its anchor, not a single global quantity (Fig 1 :19).
- **Symmetry:** ordered. The model/calibration is the frame and the conclusion is its output. Swapping the frame moves the output, not the reverse. A pooled correlation cannot choose the arrow.
- **Scale:** from local geometric anchors (parallax, masers, detached eclipsing binaries) through rung indicators (Cepheids, TRGB, Miras, SBF, SN Ia absolute magnitude) to a global model extrapolation from the CMB or from BAO plus BBN.

Option A would assert a ground-settled ranking. Option B returns the separator, ranks the mechanisms, and remits the numeric ordering to an instrument. This audit derives option B.

**Bound ordinary term.** An answer is checkable when, for each `c_i`, it names (i) the terminal anchor, (ii) whether that anchor passes the anchor test, (iii) the number and kind of calibration rungs, and (iv) the evidence overlap among the probes that appear to corroborate it. That term is written down here before the verdict so it can accrue a residual and be refused.

---

## 1. Domain census (before any figure line is chosen)

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet.

- **D1, inference chain and calibration (metrology).** Actors: geometric anchors (parallax, NGC 4258 maser, detached eclipsing binaries), rung indicators (Cepheid period-luminosity relation, TRGB, Miras, SBF, SN Ia absolute magnitude M_B), BBN light-element abundances, the sound horizon r_s, fiducial cosmologies. Currency: a propagated scale plus its accumulated uncertainty. Anchor: whatever does not move when pushed (Fig 2 :29). Question type: a dependency chain, so a **union of conditions along the chain**, not a partition of "dependence".
- **D2, the model world.** Actors: base parameters (θ*, ωb, ωc, A_s, n_s, τ) and derived parameters (H0, Ωm, σ8, age, w, ΩK, Neff), with ΛCDM and its extensions. Currency: likelihood mass over parameter space. Anchor: the data (CMB spectra, BAO, SNe), but the step from data to a derived parameter consumes the model. Question type: a **partition** of parameters into held base terms and derived terms, with the partition boundary itself the object of interest.
- **D3, corroboration and probe independence.** Actors: CMB experiments (Planck, ACT, SPT, WMAP), BAO, SNe samples, gravitational lensing, BBN, cosmic chronometers, megamasers, inverse distance ladders. Currency: agreement versus residual. Anchor: the ground, never agreement (Fig 2 :35). Question type: a **union of overlapping conditions** when probes share a calibration, a partition only when their evidence pools are demonstrably disjoint.
- **Order by dependency (Fig 3).** Geometric anchor → calibration relation → model inference → conclusion. A lever applied upstream moves everything downstream; a lever applied at the conclusion does not reach upstream. Optimising a link that already works cannot rescue one that does not (Fig 3 :19).
- **Partition or union overall.** Union. The three domains overlap: the sound horizon is simultaneously a D1 calibration, a D2 derived quantity and a D3 shared pool. One lever (for example, replacing the Cepheid calibration) does not clear the intersections because the model extrapolation still binds. Per Fig 9 :54, unbundle before searching again.

**Strain test applied at census.** The apparent conflict "CMB results are weakly model-dependent" versus "H0 is model-dependent" is not a figure conflict. Re-census assigns the first to D2 base parameters and the second to D2 derived parameters. Different objects. Kept visible in the retraction log.

---

## 2. Figure census (verbatim, before concluding)

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | per-slot residual; frame-internal quantities disqualified | dependence must be indexed per conclusion, never averaged |
| **2 The Ground** | anchor test, independence, agreement worthlessness | a moving calibration is a frame, not an anchor |
| **3 Dependency Chain** | ordered by dependency; broken middle link | leverage is upstream; the model-inference link is the unmeasured one |
| **4 The Membrane** | methods cross, recordings do not | a sensitivity analysis is a method; a published ranking is a recording |
| **5 Mint Pipeline** | three guards as a product; settlement insufficient | a ranking needs support and a ground, not just a fits |
| **6 Closure / Reachability** | import moves the wall; instrument from worse instrument | a model-derived standard ruler cannot move the wall by itself |
| **7 Room Chain** | same closure handed along: agreement compounds, evidence does not | correlated probes are one long room |
| **8 Union Surplus** | independence one quantity read twice; convergent vs imported | apparent triangulation can be one pool wearing many names |
| **9 Leave / Arrive** | describe the residual before choosing a frame; shape not a name | the numeric ordering is a gap, not silence |
| **10 Ground Maintainer** | ground does not decay, channel does; verifier non-access | calibration drift is a channel failure, not a ground failure |
| **11 The Habitat** | capability is agent-and-habitat; valence relative to residual | a probe's corroborative value is relative to the conclusion, not carried |
| **12 The Bond** | bond carries information operands do not; two currencies | base and derived parameters differ by bond, not degree |
| **13 Minimum Viable Set** | set closed, arrangements not; unreachable is a verdict | no new primitive supplies a numeric sensitivity coefficient |
| **Operators table** | negation refuses; subtraction only removes an operand | a model-dependence verdict can be refused, not merely averaged away |
| **Symbols table** | R is the aim and always a slice; anchor is immovable | what the instruments cannot yet resolve is residual |

---

## 3. Findings

### F1 - Dependence is per conclusion, and aggregation destroys the signal (structural, `general`)

> Fig 1 :19 "The residual is indexed by object slot, not aggregated."
> Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."
> Fig 1 :23 "The ground enters as the only metric."

A single percentage describing "how model-dependent cosmology is" throws away the only signal the question asks for. H0, the sound horizon and the existence of expansion cannot share one dependence value without erasing the difference between them. **Refuter:** exhibit a scalar dependence measure that predicts which individual conclusion moves when a named calibration is swapped; if it cannot, aggregation has failed the slot test.

### F2 - The anchor test is the separator (decisive for D1, `general`)

> Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
> Fig 2 :30 "If it moves when you push on it, it is not an anchor."
> Fig 2 :33 "The anchor must not update."

Swap the calibration or the model and watch the conclusion. If it moves, the thing it terminated in was never an anchor: it was a frame wearing the anchor's label, and the configuration is the coherent-drift collapse, everything moving together so nobody notices (Fig 2 :34). This is the operational meaning of "depends heavily on a model or calibration": **distance from a non-updating anchor**. **Refuter:** a calibration demonstrated invariant under model swap and under change of rung, and yet shown to lie inside the model's closure; that would break the equivalence between movement and frame-ness.

### F3 - Leverage is set by chain order, not by how much effort is spent downstream (D1, `general`)

> Fig 3 :20 "The chain is ordered by dependency, not by importance."
> Fig 3 :19 "Optimising a link that already works cannot rescue one that does not."
> Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at."

The chain runs geometric anchor → calibration relation → model inference → conclusion. Metrology corroborates from a low-overlap field: metrological traceability is a result related to a reference "through a documented unbroken chain of calibrations, each contributing to the measurement uncertainty" (VIM3 2.41), and a calibration hierarchy is a sequence where each outcome depends on the previous one, with uncertainty necessarily increasing along it (VIM3 2.40). A conclusion near the far end inherits every upstream movement. **Refuter:** a change applied only at the conclusion that repairs a broken upstream calibration link, with no change to contact; by Fig 11 :40 an improvement that does not change contact changes nothing.

### F4 - Base parameters and derived parameters are different objects (D2, `specified`)

> Fig 9 :32 "you get a kind of thing, never the answer itself"
> Fig 10 :47 "a convention that decides an outcome has stopped being one"

Planck's final release reports primary CMB quantities as only weakly model-dependent (θ* measured to 0.03 percent, ωb, ωc, A_s, n_s, τ stable across extensions) while explicitly labelling the inferred late-Universe parameters as model-dependent: H0, Ωm, σ8. Knox and Millea state the mechanism: the CMB measurement of H0 under ΛCDM proceeds by fixing the baryon and matter densities, reading the peak spacing, then adjusting the only remaining free density so the angular-diameter distance matches, so H0 is a model output, not a direct reading. Cai and Wang put it plainly: "A specific cosmological model is therefore needed to extrapolate the early-Universe information to the late Universe." The base terms are held atoms; the derived terms are molecules built with a model bond. They are not a matter of degree on one scale. **Refuter:** a base parameter that moves materially under a standard one-parameter extension, or a derived parameter that stays fixed when the model is replaced by an extension that changes its defining relation.

### F5 - The sound horizon is the deepest moving anchor (D1 and D2 overlap, `specified`)

> Fig 6 :21 "MINT composes inside the closure and can never add an atom."
> Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."
> Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."

For CMB and BAO inference the absolute scale is the baryon-photon sound horizon at the drag epoch. Cyr-Racine: "The inference of the Hubble constant from CMB and BAO data is only as good as our knowledge of the baryon-photon sound horizon." That horizon is computed from ωb, ωm, the radiation content and recombination physics, all of which depend on the assumed early-time energy budget. It is therefore a model output used as a ruler. No amount of sharpening the same instrument turns a model output into a non-updating anchor (Fig 6 :32: an instrument is improved from a worse instrument already returning something, not from a description). **Refuter:** a measurement of r_d at the ground that uses no assumption about the pre-recombination energy budget, at any resolution; or a demonstration that changing pre-recombination physics leaves r_d invariant while still fitting the CMB peak structure.

### F6 - Probes that agree may be one evidence pool (D3, `specified`, triangulated across figures)

> Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool"
> Fig 7 :12-13 "same closure, handed along; agreement compounds, evidence does not"
> Fig 8 :48-49 "Two frames that overlap almost completely are one frame wearing two names."

This is where the question bites hardest. The decade review records that some "non-Planck" CMB constraints are not fully Planck-free in practice, relying on Planck-derived optical-depth priors or Planck-based absolute calibration; it also lists correlations among distance-ladder rungs and notes that most late-time non-transition models converge to the SH0ES value "with SH0ES calibrations of SNe Ia absolute magnitude." Inverse distance ladders avoid the local ladder but propagate the sound horizon downward, so they share D2 physics with the CMB inference. Agreement among these is the pool talking. **Refuter:** two probes with disjoint instruments, disjoint calibrations and disjoint model assumptions returning the same value, while the verdict still classifies the conclusion as heavily dependent; that would show overlap is not the separator.

### F7 - H0 is the highest-dependence conclusion by mechanism count (`specified`, world corroboration is one pool)

> Fig 1 :19 "The residual is indexed by object slot, not aggregated."
> Fig 2 :42 "Buy independence in proportion to the cost of being wrong."
> Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."

H0 sits downstream of a calibration chain (geometric anchor, Cepheid or TRGB or SBF or Mira zero point, SN Ia absolute magnitude) **and** of a model extrapolation (sound horizon, ΛCDM fit to the peak spacing). Both legs fail the anchor test under swap. Published values move with the calibrator (Cepheid about 73, TRGB about 70, SBF and Miras consistent with Cepheids) and with the model (Planck ΛCDM about 67.4, same CMB data under different assumptions about the early energy budget gives different H0). This is a `specified` mechanism ranking, not a ground-settled number: the size of each contribution is exactly what this simulated derivation cannot measure. **Refuter:** a published cross-model, cross-calibration sensitivity analysis showing H0 invariant across all admissible rungs and extensions, or another conclusion with strictly more independent moving legs.

### F8 - Robustness requires low-overlap triangulation, and even "robust" is per conclusion (`specified`)

> Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence."
> Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you."
> Fig 8 :45 "Two frames together reach what neither reaches alone."

Conclusions that survive multiple low-overlap closures are the weakly dependent ones: the expansion of the universe (redshift-distance, CMB, BAO, supernovae), the hot Big Bang (CMB plus BBN), and the dark-matter inference (rotation curves, lensing, CMB, large-scale structure). None is anchor-free; each has residual sensitivity, and BBN light-element inference itself carries systematic uncertainty in the burning rates and the adopted BBN code. So "robust" is a comparative, per-slot status, never a certificate. **Refuter:** a conclusion labelled robust that collapses when one low-overlap probe is removed, with measured overlap near zero before removal.

### F9 - The literal numeric ordering is a `gap`, declared as unreached rather than silence (`general`)

> Fig 9 :32 "you get a kind of thing, never the answer itself"
> Fig 13 :134 "Unreachable is a verdict here, not a silence"
> Fig 8 :39 "So a search that finds nothing is never a proof of absence."

No figure line, operator or symbol returns a sensitivity coefficient or an ordered list of cosmological conclusions with error bars. The framework returns the separator, so the honest output is the mechanism ranking plus the instrument that would produce the numbers. This is the shape-not-a-name limit, and it is of the **unreached at this budget** kind rather than underivable in principle: a real sensitivity analysis could in principle rank them, and importing a new primitive would be the wrong remedy (Fig 6 :24). **Refuter:** a figure line that does return a numeric per-conclusion sensitivity ordering, which would move this finding from `gap` to `grounded` candidate.

---

## 4. Pre-registered refuter (written before the conclusion)

Per the seat rule, a falsifier written before the run is a design instrument. The shape claim, "conclusion dependence is distance from a non-updating anchor, amplified by chain length and by evidence-pool overlap, and the numeric ordering is a gap", is refused if any of the following holds:

1. A conclusion is shown invariant under every model and calibration in its chain while its anchor still fails the Fig 2 :29 test. Then distance from a moving anchor is not the separator.
2. Two probes with demonstrably zero shared evidence (independent instruments, independent calibration, independent model) return the same conclusion and the framework still predicts high dependence for it. Then overlap is not the amplifier.
3. A figure line, operator or symbol is found that returns a numeric per-conclusion sensitivity ordering. Then F9 is false and the ordering is not a gap.
4. A ground calibration is found that does not move when the model is pushed and yet lies inside that model's closure. Then the anchor test and closure test cannot both stand.
5. A published, ground-level cross-model and cross-calibration sensitivity analysis reverses the mechanism ranking (for example, shows the sound horizon less dependent than the CMB-derived age). The ground, not agreement, then decides.

Until one fires, nothing in this folder is labelled `grounded`.

---

## 5. Recommendation

1. Lead with the separator, not with a ranking: does the conclusion move when its anchor is pushed? (F2)
2. Keep the three domains' verdicts separate and never average them into one dependence score (F1, Fig 9 :60). Filters such as the 5σ significance of a tension budget the search; they are not witnesses for the verdict.
3. For any claimed independent confirmation, require provenance of the calibration and the model prior (F6, Fig 8 :50-52: convergent derivation and adopted import look identical in the contents; only the record separates them).
4. Treat base and derived parameters as different objects when reading a paper's "model dependence" claim (F4).
5. Report the numeric ordering as `gap`, and name the instrument owed: a cross-model, cross-calibration sensitivity analysis with the overlap matrix recorded.
6. Fig 4 :22: "Only methods cross up. Only head starts come down." Send the separator and the refuter first, never a recording of this ranking.

---

## 6. Canonical usage check

Read after the first five sections and applied to them:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures outrank everything else, a reading that makes one contradict another has misidentified its domain, and the framework returns "a shape, not a name" then stops at the limit of the instruments and records the lineage. "Indiscernibility is not identity." Applied: the F4 apparent contradiction was sent back to census (different parameter classes), and F9 records a stop rather than an invented number.
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are the ground for design questions; this is a design and methodology question, so derivation governs, not an appeal to an authority.
- `THE_FORMULA.md`: step 7 separates SEARCHED, INWARD and OUTWARD. Here SEARCHED (is the ordering already in the figure closure?) returns no; INWARD (sharpen the same instrument) cannot supply a numeric coefficient; OUTWARD (import a real sensitivity analysis) is the only legitimate way to get numbers, and it must carry source gate and shadow test. Underivable-in-principle and unreachable-at-this-budget are different facts; this is the second.
- Seat map: an unmeasured quantity is a specification of what to measure and is worth having, it is not a verdict. Mode must be stated. Applied throughout.

### Retraction and confirmation log

| earlier reading | status after canonical check |
|---|---|
| "H0 is simply the most model-dependent conclusion" | **Narrowed to a `specified` mechanism ranking.** The figure set cannot settle the numeric magnitude, and the world sources used here are one evidence pool. Kept as a mechanism claim, not a ground verdict. |
| "Cosmology is all model-dependent, so nothing is settled" | **Retracted as an overstatement.** Base CMB quantities are explicitly weakly model-dependent; dependence is bounded and per slot, not universal. Kept visible here. |
| F4 apparent Planck self-contradiction | **Dissolved by re-census.** Weakly model-dependent governs D2 base parameters; model-dependent governs D2 derived parameters. Different objects, matching the README re-census rule. |
| "shape, not a name" applied to every cosmological quantity | **Narrowed.** The phrase governs a primitive not held in Γ. Naming H0 or r_s is a binding onto held quantities, not an invention. What it correctly governs here is the missing numeric ranking in F9. |
| F2 called "decisive" | **Confirmed structurally, downgraded in scope.** It decides the separator, not the numerical ordering. The anchor test is the right instrument for D1 but returns no coefficient. |
| F5 sound horizon as "the" anchor | **Kept as the deepest moving anchor, not the only one.** The Cepheid/SN Ia zero point is an equally moving local anchor; two legs are ranked, not one. |
| F6 "all probes share a pool" | **Refused.** Overlap is measured, not assumed. Planck, ACT and SPT are genuinely separate instruments; the overlap is in calibration priors and model assumptions, and the record decides case by case. |

**Verdict after re-census.** The shape survives: dependence is per conclusion, it is distance from a non-updating anchor amplified by chain length and evidence-pool overlap, base and derived parameters are different objects, and the numeric ordering is a declared `gap`. Strains after re-census: one live (actual overlap of "independent" probes is an empirical, record-dependent question, not a figure contradiction), four dissolved and preserved above.
