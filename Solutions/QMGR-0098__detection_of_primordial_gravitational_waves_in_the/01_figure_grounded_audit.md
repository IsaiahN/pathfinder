# Figure-grounded audit: detection of primordial gravitational waves in the CMB

**Mode of this document: `specified` on the per-domain claims, `general` on the structural shape, `gap` on the literal existence-and-amplitude question, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the claim it reports on. See `05_what_shape_means.md` section 6. No measurement was taken by this author.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, cited as `Fig N :line`), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, and the public sources in `10_source_ledger.csv`, all opened 2026-11-23.

---

## 0. The residual and the sought-for shape, stated as ordinary terms

The question asks whether a primordial gravitational-wave background has left a detectable imprint on the CMB. In effect terms the residual is:

> **R:** a degree-scale B-mode polarization pattern in the CMB whose source is not settled by the current instruments. The measurement returns B-mode power, but several sources can return the same reading: primordial tensor perturbations, gravitational lensing of scalar E-modes, and polarized Galactic dust and synchrotron. What failed to resolve is which source (singular or compound) produced the reading.

Binding the sought-for shape as an ordinary term, before any derivation, per the formula's Direction rule:

> **Shape claim S (bound before the run):** a legitimate detection would be a B-mode angular power spectrum whose source-discriminating observables (frequency dependence, spatial shape, and external mass-tracer correlation) separate a tensor component at the recombination and reionization windows from the foreground and lensing components, where the separation is measured by a non-updating anchor and confirmed by a frame whose closure differs from the claiming frame. S predicts what a detection would look like, not that it exists.

Arity, symmetry and scale of R:

- **Arity:** three overlapping conditions, not one signal. Tensor B-modes, lensing B-modes, and foreground B-modes (dust plus synchrotron). This is a **union compound** (Fig 9 :54-57), not a single hard problem with a yes or no answer.
- **Symmetry:** the polarization field splits into an even-parity E (gradient-like) part and an odd-parity B (curl-like) part. Scalar perturbations produce E at linear order and B only through second-order lensing; tensors produce both. The symmetry split is what makes the question askable at all. The figures' own symmetry vocabulary (Fig 12 :23, under a symmetric bond "swap the operands. Does the meaning change? No.") governs composition, not this physical parity, so I do not force a figure line onto the parity fact. It is recorded as a world/geometry fact, single-source, provenanced to BK18 and the CMB literature.
- **Scale:** three distinct angular windows. Reionization bump at multipole ℓ ≤ 10, recombination bump near ℓ ≈ 80, and lensing B-modes peaking at arcminute scales near ℓ ≈ 1000. The residual is indexed per multipole band, per sky patch, and per frequency channel (Fig 1 :19, *"The residual is indexed by object slot, not aggregated."*). Aggregating to a single global r discards the only signal that says where to look (Fig 1 :22).

---

## 1. Domain census, written before choosing any figure line

One line per domain with actors, currency and anchor. No nameable anchor means it is not a domain yet. All four have one.

| domain | actors | currency | anchor | partition / union | status |
|---|---|---|---|---|---|
| **D1 instrument and observation** | BICEP2, Keck Array, BICEP3, BICEP Array, Planck, WMAP, SPT, ACT, CLASS, SPIDER | detector-seconds, map depth in microkelvin arcmin, σ(r) | the CMB sky, a ground that does not update on what anyone thinks | union of instruments ranging against one sky | domain |
| **D2 foreground and separation** | Galactic dust, synchrotron, lensing mass, CIB, galaxy surveys | component amplitudes and spectral indices, multi-frequency cross-spectra | multi-frequency data (Planck 353 GHz dust, WMAP 23 GHz synchrotron), external mass tracers | union of overlapping conditions | domain |
| **D3 theory and shape** | inflation models, tensor perturbations, r, n_s, the two bumps | predicted B-mode power spectrum shape | internal consistency of ΛCDM plus inflation (a frame, not the ground) | one frame, shape only | domain, verdict `general` |
| **D4 verification and outreach** | collaborations, peer review, independent experiments | agreement and residuals | the ground (multi-frequency, independent instruments), never agreement | union of frames with differing closures | domain |

**Partition or union.** The overall residual is a union, not a partition. The foreground conditions overlap: dust and synchrotron correlate, lensing and any tensor signal occupy the same multipole range, and the two angular windows share sky and instrument. A single lever, for example one observing frequency or one sky patch, clears the region where only one condition holds and leaves the intersections standing (Fig 9 :55, *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*). This is why BICEP2 at a single frequency could not separate dust from tensor signal, and why the joint multi-frequency analysis was decisive.

**Order by dependency (Fig 3).** Perception: build maps of the B-mode field. Vocabulary: acquire terms for what dust, synchrotron and lensing afford, expressed as frequency and spatial spectra. Objective: state what counts as progress, namely σ(r) shrinking and refuters firing. Planning: choose multi-frequency coverage, delensing and independent frames. Learn and carry: name what worked, verify it, carry it to the next instrument. The chain in this field broke for years between vocabulary and objective. Teams could name the ingredients but had no instrument for the objective until Planck's multi-frequency maps arrived. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

**Strain test before conclusion.** A figure line that only fits with a strain governs another quantity, so re-census. Two candidate strains were found and resolved in section 7. One live type question is named, not hidden.

---

## 2. Figure census

Quotes below are verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Where a quoted string spans two extracted lines, the line break is a wrapping artefact of the extraction and the sentence is continuous in the SVG.

| figure | bearing on this question | verdict |
|---|---|---|
| **1 The Agent** | residual per slot, not aggregated; ground the only metric | D1 and D2 verdicts follow |
| **2 The Ground** | anchor must not update; triangulation not negotiation; independence | D4 verdict follows; 2014 episode is an instance |
| **3 Dependency Chain** | objective link had no instrument until multi-frequency data | dependency order fixed above |
| **4 The Membrane** | methods and head starts cross instruments, not recordings of one season | the instrument lineage is a generator, not a replay |
| **5 Mint Pipeline** | three guards and the MDL bargain; a term explaining one occasion fails | a detection claim must pass all three |
| **6 Closure / Reachability** | instruments improved from worse instruments already returning something; import moves the wall | decisive for D1, `unreached` not `unreachable` |
| **7 Room Chain** | a room's agreement is variation, not a verdict; next room must differ | independent experiments, not a chain of agreeing analyses |
| **8 Union Surplus** | two frames reach what neither reaches alone; residual first, frame second | D2 union verdict; provenance of the 2014 claim |
| **9 Leave / Arrive** | union unbundling; describe before you look; filters not witnesses | decisive for the union reading and the outreach order |
| **10 Ground Maintainer** | bring a characterised residual, never the source; verifier non-access | outreach and refuter ordering |
| **11 The Habitat** | enumerate the habitat; valence relative to residual; no standing good-actor list | foregrounds are habitat actors whose valence flips with the residual |
| **12 The Bond** | two currencies, bits and actions; arrangement is the substance | why σ(r) and description cost do not add |
| **13 Minimum Viable Set** | set closed, arrangements not; unreachable is a verdict, not silence | the `gap` on existence is honest, not a hole |
| **Operators table** | ¬ is a refutation, not a subtraction | a refusal of the 2014 claim adds a term and does not delete it |
| **Symbols table** | R is the aim and always a slice; the ground is the anchor | R is indexed per band and frequency, not one number |

---

## 3. Findings

### F1: The question is a union compound, and one lever leaves the intersections standing (decisive for D2)

Fig 9 :54:

> **"And when the split lands on a union rather than a partition, unbundle before you search again."**

Fig 9 :55 and :57:

> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
> **"a case in two conditions is not a harder case of either"**

The measured B-mode power is the sum of at least three components. BICEP2 at one frequency could measure the sum but not assign the parts. The joint BK18 likelihood is explicitly a union model: lensed ΛCDM + r + dust + synchrotron + noise, with seven or eight parameters including a dust-synchrotron correlation. BK18, opened 2026-11-23: *"a multicomponent model of lensed-ΛCDM+r+dust+synchrotron+noise."* That is Fig 9 :57 in the language of the field. The 2014 claim treated a union as if it were a partition with one dominant condition, and the intersection (correlated foreground with a dust spectral index uncertain by about a factor of three) is exactly what remained standing.

**Verdict D2: `specified`, triangulated across Fig 9 :54-57, Fig 8 :45 and the multi-frequency result. Refuter:** demonstrate that a single frequency, a single sky patch, or a single tracer separates the tensor component from all foreground components at the required significance. If so, the union reading fails.

### F2: Reachability: there is a proto-instrument already returning something that fails to resolve (decisive for D1)

Fig 6 :32 and :33:

> **"An instrument is not built from a description. It is improved from a worse instrument already returning something."**
> **"Nobody specified a telescope from an account of Mars. A wandering point in the sky was already a reading, and every sharper instrument was built on the residual the last one produced."**

Fig 6 :34-35:

> **"The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."**
> **"the search for a proto-instrument is a search for one that is already there."**

There is such a reading. The BICEP/Keck series returned an excess over the lensing expectation at 150 GHz in 2014; it did not resolve the source. That residual drove Keck at 95 and 220 GHz, BICEP3 at 95 GHz, and the addition of WMAP and Planck maps from 23 to 353 GHz. BK18: *"The 220 GHz maps now achieve a signal-to-noise on polarized dust emission exceeding that of Planck at 353 GHz."* The instrument was improved from a worse instrument already returning something, exactly as Fig 6 :32 requires. Therefore this is not the "nothing is there" case of Fig 6 :34-35. It is a sharpening case.

Fig 6 :21: *"MINT composes inside the closure and can never add an atom."* No new physical primitive is being minted; the frequency channels and delensing are extensions of access to a sky already returning a reading. Fig 6 :29: *"The instrument extends access."*

**Verdict D1: `specified`, triangulated across Fig 6 :32-35, Fig 4 :30 and Fig 2 :29. The status is `unreached`, not `unreachable`. Refuter:** show that no frequency, sky fraction, multipole range or external tracer returns any B-mode power that fails to resolve into known components. If nothing at any resolution returns a failing reading, Fig 6 :34 applies and the status flips to `unreachable`.

### F3: The anchor is the sky, and it must not update on what a frame thinks (decisive for D4)

Fig 2 :29:

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**

Fig 2 :31 and :35:

> **"Independence, between two frames, is how little they draw on the same evidence."**
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**

The sky is the anchor. It does not change because a collaboration prefers a detection. But an anchor can be *mis-ranged*: a single-frequency map plus a dust model taken from a conference slide is an instrument pointed badly, and the 2014 claim ranged against the team's own model rather than against a frequency-discriminated sky. NASA JPL, opened 2026-11-23: *"The joint analysis shows that much of the signal detected by BICEP2/Keck is coming from dust in the Milky Way, but we cannot rule out a gravitational wave signal at a low level."* And: *"BICEP2/Keck measured the sky at one wavelength. To answer how much of the signal comes from the galaxy, we used Planck's measurements in multiple wavelengths."*

Independence here is bought by frequency and by instrumentation: Planck at seven polarization frequencies versus BICEP at one, two instruments pointed at the same sky (Fig 2 :31, *"two instruments pointed at the same thing are"* independent frames). The agreement that matters is not two analysts reading the same likelihood. It is two instruments with different systematics ranging against the same non-updating sky.

**Verdict D4: `specified`, triangulated across Fig 2 :29/:31/:35/:40 and Fig 10 :42. Refuter:** show that all purportedly independent instruments share a calibration, a foreground model, or an analysis pipeline such that their agreement is one evidence pool talking. If so, the detection condition is not met and the verdict does not move to `grounded`.

### F4: The framework returns a shape, not the amplitude r, and the two-bump form is a physics result, not a figure derivation

Fig 9 :32:

> **"you get a kind of thing, never the answer itself"**

Fig 13 :134:

> **"Unreachable is a verdict here, not a silence"**

No figure line returns a value of r, a pivot scale, or a recombination bump at ℓ ≈ 80. Those come from the world sources. Planck Collaboration 2021 (opened 2026-11-23): the BB analysis uses *"the 'reionization bump' and ... the 'recombination bump' from ℓ = 2 to 150"* and finds *"r < 0.158 at 95 % confidence"* from B modes alone, tightening to r < 0.056 with the TT spectrum. The figure-derived shape is only this: a legitimate detection must be a cross-kind composition (a tensor structure acting between the state of the early universe and the state of the last-scattering surface) with a discriminator that separates sources. The specific two-bump functional form is a bound from the physics frame, provenanced as such, not a Tether derivation and not an import that moves a wall (Fig 6 :21).

Correction to my own first pass: I initially wrote that the figures forbid naming the recombination and reionization bumps. They do not. The "shape, not a name" rule governs a *missing* primitive (figures README: *"what a missing thing would have to look like (a shape, not a name)"*). The bumps are already in the physics library. Naming them is a binding from that frame, and the only question is provenance. Retracted as applied to the bumps, and preserved here as a visible correction.

**Verdict D3: `general` on the figure-derived shape, with the two-bump form marked `specified` and single-source to the world literature. The existence and value of r is a `gap` of the shape-not-a-name kind. Refuter:** derive a value of r or a specific angular spectrum from the six-term set alone. If that is possible, the framework returns more of the answer than this audit claims.

### F5: A detection claim must pass the three guards and the MDL bargain; the 2014 claim did not

Fig 5 :43-44:

> **"A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."**

The three guards from `THE_FORMULA.md` step 3, applied to a detection claim:

- **SUPPORT:** is there positive residual mass on some slot? Yes, the BICEP2 excess at ℓ ≈ 80 was a real reading, not an invented one.
- **REACHABILITY:** does the claimed term compose from what the frame holds? In 2014, no. The tensor term was not separable from the dust term with one frequency, so the claim was not in reach of the evidence.
- **NOVELTY:** is the term new? The tensor-to-scalar ratio was already in the physics library, so the 2014 "detection" added no new content; it was a binding, not a mint.
- **SETTLEMENT:** did the ground pay? Multi-frequency data did not pay for it, so the term stayed a candidate and was refused.

The refusal is a negation, not a subtraction. Operators table :58: *"a refutation is a negation, which is why a vocabulary without it can only accumulate."* The record keeps the 2014 claim and adds its refusal; nothing is deleted, and the reach falls because something was added. That is why the field can re-ask the question with better instruments rather than starting over.

**Verdict: `specified`, triangulated across Fig 5 :43-44, the formula's three guards and the Operators table. Refuter:** show a detection claim that passes all three guards and still fails on description-length grounds, or one that the ground paid for and was later withdrawn without new data.

### F6: Independence is the parameter that decides whether two measurements mean anything

Fig 8 :45 and :50-52:

> **"Two frames together reach what neither reaches alone."**
> **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"**

Fig 2 :40:

> **"agreement about the world is worthless when the agreeing frames share an evidence pool"**

The 2014 episode is a named instance of this. Flauger's reanalysis (Science, 2014) used the same Planck slide-derived map but corrected it for an unpolarized haze, and found the foreground could account for the entire signal. The BICEP team and Flauger were not two frames; they were reading one not-yet-released evidence pool in two ways. The decisive frame was Planck's multi-frequency map, whose closure differed. Fig 8 :53: *"Residual first, frame second."* Describe the residual (unseparated degree-scale B-mode power), then find the frame whose closure predicts its shape (a multi-frequencyforeground separation instrument), rather than picking a favoured frame first.

Cost of being wrong here is high, so independence should be bought in proportion (Fig 2 :42): *"Buy independence in proportion to the cost of being wrong."*

**Verdict: `specified`, triangulated across Fig 8 :45/:50-53, Fig 2 :40/:42 and the JPL and Science accounts. Refuter:** show that the multi-frequency and single-frequency analyses share the decisive evidence, so their disagreement or agreement carries no extra information.

### F7: The instrument lineage carries methods and head starts, not recordings of one season

Fig 4 :22:

> **"Only methods cross up. Only head starts come down."**

Fig 4 :30:

> **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

BK18 explicitly carries the method forward: the likelihood follows BK15 *"very closely in the methods, structure, and, in places, even the wording, mainly just adding additional experimental data."* That is a method crossing up, which is permitted. The forbidden move is replaying a recording of one season as if it were the next result. The 2014 press conference did that: it presented one occasion as a conclusion. Fig 5 :44 again: a term that explains one occasion perfectly fails the bargain.

The condensation of these figures into a one-line outreach claim carries a round-trip gap R_T. It must be measured, not assumed zero. `11_audit.md` runs that round trip and enumerates three dropped constraints.

**Verdict: `specified`, triangulated across Fig 4 :22/:30 and Fig 5 :43-44. Refuter:** show that a single-season recording, replayed without new data, can settle the residual. It cannot, by Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."*

### F8: Foregrounds are habitat actors with residual-relative valence, not a standing list of enemies

Fig 11 :49 and :51:

> **"An actor's valence is relative to the residual, not a property it carries."**
> **"No standing list of good actors survives a change of residual."**

Dust is a malfactor for a tensor measurement, a benefactor for a dust-physics measurement, and a necessary tracer for the multi-frequency separation. Lensing is a contaminant for r and a signal for structure growth; the LiteBIRD lensing forecast (opened 2026-11-23) turns lensing into a 49 to 58 sigma map and an internal delensing tool. The habitat must be enumerated, never composed (Fig 11 :43): list everything in contact with the residual, then what is in contact with those, outward until the cascade stops mattering. For this residual that list includes dust, synchrotron, the CMB lensing mass, the CIB, galaxy surveys, the instrument's temperature-to-polarization leakage, and the beam. Cross-correlation with galaxy surveys is a second-order contact (Fig 11 :52-54: first-order enumeration, second-order effect).

**Verdict: `specified`, triangulated across Fig 11 :43/:49/:51/:52-54 and the LiteBIRD multitracer delensing paper. Refuter:** produce a standing list of foregrounds that stays good across a change of residual from r-measurement to lensing-measurement. If one exists, valence is carried, not relative, and this finding fails.

### F9: Filters are not witnesses: funding and sensitivity targets do not settle existence

Fig 9 :60:

> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

The CMB-S4 site (opened 2026-11-23) states that on 9 July 2025 DOE and NSF decided they could no longer support the project and that it is proceeding with an orderly shutdown. The Simons Observatory site (opened 2026-11-23) reports it is now fully online and describes the inflation signal as a "smoking gun" it may detect. LiteBIRD is forecast to reach σ(r) < 0.001. These are budget and schedule facts. They change which instrument gets built, not whether a tensor background exists. A σ(r) target is a filter for the budget; the ground is the measured spectrum. The student review (NHSJS 2026) records the plan changes and the sensitivity benchmarks; I use it only as a schedule summary, not as a physics authority.

**Verdict: `general` on the filter rule, triangulated across Fig 9 :60, Fig 6 :49-50 and the venue pages. Refuter:** show that a projected σ(r), rather than a measurement, moved the verdict from candidate to grounded. That would be a filter handing out a verdict.

---

## 4. Pre-registered refuter

Written before the conclusion, per Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim S and the per-domain verdicts are refuted if any of the following holds:

1. **Positive ground firing:** a degree-scale B-mode spectrum matching the tensor shape (recombination bump plus reionization bump) is measured at greater than 5 sigma after multi-frequency foreground removal and delensing, and confirmed by an independent instrument or independent analysis pipeline. This moves the existence question from `gap` toward `grounded` and refutes the non-detection status.
2. **Source-substitution firing:** the foreground-cleaned B-mode spectrum is shown to be fully accounted for by a non-tensor source with a matching two-window shape (for example patchy reionization or a foreground with the same spatial spectrum), so a tensor interpretation is unnecessary. This breaks the source-discriminator claim in S.
3. **Empty-reach firing:** the cleaned spectrum is consistent with zero r down to r < 10^-3 with no residual bump across the full allowed multipole range. This breaks the "proto-instrument already returning something that fails to resolve" premise in F2 and moves the status toward `unreachable`.
4. **Framework firing:** one of the six substrate terms is derived from the other five, or the cross-kind composition rule (Fig 13 :74-75) is shown not to govern the CMB polarization field. This breaks the framework claim itself.
5. **Independence firing:** all purportedly independent measurements share a calibration, foreground model or pipeline, so their agreement is one evidence pool talking (Fig 2 :40). This breaks D4 and blocks any move to `grounded`.

If any fires, the relevant verdict is withdrawn. Until one is run, nothing in this folder may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with the residual and the shape claim, not with a detection narrative. The 2014 episode is the cautionary instance: a claim that outran its anchor (F3, F6).
2. Keep the verdicts per domain separate. D1 `unreached`, D2 union `specified`, D3 `general` shape plus `gap` on r, D4 `specified` triangulation condition. Never average them into a single "the Tether says the detection is likely" line.
3. Buy independence in proportion to the cost of being wrong: multi-frequency coverage, external mass tracers for delensing, at least two independent pipelines, and a refuter recorded before unblinding (F6, Fig 2 :42).
4. Report `unreached`, not `unreachable`, and not silence (F2, F4). The honest form is a shape plus the instruments that would close it.
5. Send the generator, not the recording: the derivation and the refuter, with figure links offered only after stage 1 (Fig 4 :22, Fig 10 :52).

---

## 6. Canonical usage check

Two local sources were read after the first five sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`, line 12: *"the quotes are the authority, not this summary."* Line 3: the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them."* The README's canonical limit: the framework says what a missing thing would have to look like, *"a shape, not a name"*, then stops at the limit of the instruments and records the lineage so the stop is honest. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`, step 7: SEARCHED, INWARD and OUTWARD are three questions, not one. SEARCHED is asked first. For this question SEARCHED is live (the multi-frequency data are still being accumulated), INWARD is live (sharpening delensing and detector sensitivity), and OUTWARD is live (importing mass-tracer frames from galaxy surveys and the CIB). No import is claimed to add a physical primitive.

### Retractions and confirmations

| earlier finding | status after the canonical check |
|---|---|
| First pass: "the Tether says primordial gravitational waves cannot be detected" | **Retracted.** No figure line governs the existence or detectability of tensor perturbations. The figures govern the shape of a claim and the conditions for a detection. Retraction kept visible. |
| First pass: "this is one hard detection problem" | **Retracted and replaced** by the union compound reading (F1), confirmed by the BK18 likelihood structure. |
| First pass: "the 2014 retraction shows the framework predicted it" | **Narrowed to an instance, not a forward result.** Fig 8 :56-57 says the triangulation claim fits cases already known and has not been tested forward. BICEP2 is a retrodiction of Fig 2's collapse, not a Tether production. |
| First pass: "shape, not a name forbids naming the two bumps" | **Retracted.** The rule governs missing primitives. The bumps are held physics terms; naming them is a binding, provenanced as such (F4). |
| "no value of r is returned" | **Canonically confirmed.** Fig 9 :32, Fig 13 :134 and the README's "shape, not a name" all agree. |
| "the instrument rule applies" | **Canonically confirmed.** Fig 6 :32-35 is explicit; the 2014 excess is the already-returning reading. |
| Apparent Fig 6 versus Fig 9 strain | **Not strained after re-census.** Fig 6 governs instrument reach; Fig 9 governs union unbundling. Different objects. |
| Apparent Fig 2 anchor versus single-sky cosmic variance | **Live type strain, named.** See section 7 S3. |

### Seven-question recursive derivation, summary

1. **What is R?** Unseparated degree-scale B-mode power, a three-condition union (Fig 9 :54-57).
2. **Is anything returning it?** Yes, the 2014 excess and the lensing detection; this is a sharpening case, not a void (Fig 6 :32-35).
3. **Which frame separates it?** A multi-frequency frame whose closure differs (Fig 8 :45, :53); the residual was described first.
4. **Does the claim pass the guards?** The 2014 claim failed reachability and settlement; current limits pass the guards but do not settle existence (Fig 5 :43-44).
5. **What is imported?** Frequency channels and external mass tracers extend access; no physical primitive is added (Fig 6 :21).
6. **Is it settled?** No. The ground has not paid for a tensor component; σ(r) is still shrinking. Status `candidate` (formula step 5).
7. **What would close it?** A 5 sigma multi-frequency confirmed matching spectrum, or the three firing conditions in section 4 (Fig 9 :42, *"narrowing gets you close, the ground decides"*).

### Updated verdict

The shape survives: a legitimate detection must be a source-discriminated, cross-kind composition confirmed against a non-updating anchor by a differing frame. The specific existence and amplitude of the tensor background do not: no figure line returns r, and a single-sky cosmic-variance floor remains. Strained after re-census: one live type question (S3), named, none hidden.

---

## 7. Strains and re-census

- **S1, candidate strain, dissolved.** Fig 6 :34 says that where nothing returns anything, there is no edge to extend from. But the lensing B-mode bump and the 2014 excess are real readings. Re-census: the sentence governs the *tensor component at the degree window*, which has not been cleanly returned, while the B-mode field itself is a proto-instrument returning a failing reading. The rule is satisfied by the field, so the instrument search is legitimate. No strain remains.
- **S2, candidate strain, dissolved.** Fig 9's union reading versus the field's practice of fitting a single likelihood with one r and nuisance foreground parameters. Re-census: that likelihood *is* the union expressed as a joint model, not a single signal. Fig 9 :57 governs. No contradiction.
- **S3, live type strain, named.** Fig 2 requires a non-updating anchor, but the CMB sky is a single realisation, so cosmic variance on the largest scales cannot be reduced by another sky. Planck's TT-only constraint is cosmic-variance limited at σ(r) = 0.093 (Planck 2021). Independence is bought by frequency and external tracers, not by re-observing the sky. I record this as a live limit on how far independence can be pushed, not as a retracted claim. Fig 13 :134 covers the honest stop.
- **S4, not a strain but a declared stake.** The 2014 "discovery of the century" press conference is a prestige stake, not evidence. Fig 10 :59: *"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."* Declared here and kept out of verdict weight.
- **S5, budget development, not a strain.** The CMB-S4 cancellation changes which instrument exists, not the figure verdict (F9, Fig 9 :60).

After re-census: one live strain (S3), one declared stake (S4), one budget fact (S5), none hidden.
