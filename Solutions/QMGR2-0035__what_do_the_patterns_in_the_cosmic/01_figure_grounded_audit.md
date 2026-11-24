# Figure-grounded audit: what the CMB patterns say about the earliest expansion

**Mode of this document: `specified`, with `general` structural claims and a declared `gap`.** It states what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*, as quoted in the exemplar's canonical reading (not re-opened this session), says LLM output is "simulacra" and that "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §7.

**Primary source.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the verbatim extraction; citations are `Fig N :line`. Every figure quote below was copied from that file. World sources are secondary and are recorded in `10_source_ledger.csv`.

---

## 0. The residual, stated in effect terms

Let `R = |Γ(b,a) - o'|` per slot `s`, where `b` is the state of a cosmological model before it meets the data, `a` is the model's prediction, and `o'` is the sky the instruments returned. The slot is one angular scale (multipole ℓ), one sky direction, and one field (temperature T, E-mode or B-mode polarization).

Fig 1 :19 says *"The residual is indexed by object slot, not aggregated."* Fig 1 :22 says *"Aggregating across slots is how a live signal disappears into an average."* So the question is not "what is the average temperature of the sky" but "what does the per-slot pattern, the tiny variations, license us to say about the expansion that produced it."

The mean temperature, 2.725 K, is frame-internal for this question: it is a pooled reading that carries none of the pattern. Fig 1 :23: *"The ground enters as the only metric."* The ground here is the measured sky, and it does not change because a model believes something (Symbols table :104: *"It is not a frame and has no vantage to update from."*).

**What an answer would look like (the sought-for shape bound as an ordinary term).** Fig 5 :65 says *"make the sought-for shape an ORDINARY TERM."* Before searching, write down what would count as an answer so the preference can accrue a residual like anything else: an answer must (i) name the per-slot anchor and keep the signal per slot, (ii) say what the pattern constrains about the earliest expansion, (iii) say what it cannot select, and (iv) name the instrument or channel that would close the residual plus a written refuter. Anything that only names an inflaton or declares "inflation did it" is not an answer to this residual. Fig 9 :32: *"you get a kind of thing, never the answer itself."*

---

## 1. Domain census (before choosing any figure line)

### R by arity, symmetry, scale

- **Arity:** at least ternary, `sky direction x angular scale x field (T/E/B)`, with a model prediction and an observed reading at each slot. Indexed per slot, never averaged (Fig 1 :19).
- **Symmetry:** the sky is statistically isotropic, so the pattern has a rotational symmetry that is itself a result, not an assumption. Model selection is a threshold comparison (⋛), not a symmetric join: is n_s consistent with 1, is r below a bound (Operators table :51: *"a goal is a comparison, which is why a vocabulary without it cannot state one"*).
- **Scale:** three scales with lossy transforms between them (Fig 4): the instrument scale (COBE, WMAP, Planck), the last-scattering scale (z near 1100, about 380,000 years), and the expansion scale (about 10^-35 s or earlier if inflation occurred).

### One line per domain: actors, currency, anchor

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Sky and instrument | CMB photons, detectors (COBE DMR, WMAP, Planck), foregrounds | temperature and polarization readings per angular slot | the measured sky, a measurement that does not update because a frame thinks (Fig 2 :29) | admitted |
| D2 Plasma and transfer | photons, baryons, electrons, acoustic oscillations, Silk damping, reionization, lensing, foregrounds | physical effects carried into the pattern | laboratory plasma physics and general relativity, tested independently of the pattern | admitted |
| D3 Primordial-model frame | inflation models, bounce and ekpyrotic alternatives, defect models | predicted n_s, r, amplitude, Gaussianity, adiabaticity | the CMB sky; models range against it and do not negotiate with it (Fig 2 :45) | admitted |
| D4 Statistical and instrument frame | power-spectrum estimators, Bayesian evidence, independent instruments | imported atoms (n_s, r, flatness, optical depth) | source gate and shadow test (Fig 8 :10-13) plus independence (Fig 2 :31) | admitted |
| X1 "the first instant independent of any reading" | none nameable | none | none. If it moved when a frame pushed on it, it would not be an anchor (Fig 2 :29-30) | not a domain yet |
| X2 "the one true inflation model" | none | none | absorbed into D3 and D4; many models converge on the same pattern (Fig 8 :50) | absorbed |

A domain without a nameable anchor is not admitted. X1 fails the Fig 2 :29 anchor test and is recorded as not a domain rather than smuggled in.

### Partition or union

This is a **union**, not a partition. D2 and D3 overlap: the observed pattern is primordial signal convolved with a transfer history, so the compound has its own loop (Fig 9 :54-57: *"a case in two conditions is not a harder case of either"*). D1 and D4 overlap whenever two experiments reduce the same map with the same pipeline; that agreement is one pool, not two witnesses. Each compound needs its own check, not an average over the four domains.

### Dependency order (Fig 3)

1. perception: can the sky be read at all, and at what resolution?
2. vocabulary: are there terms for what the pattern affords (multipole, acoustic peak, power spectrum, E and B)?
3. objective: what would count as a discriminating prediction rather than a retrodiction?
4. planning: which channel or instrument is affordable?
5. learn and carry: did the prediction pay against the sky, and does the model library update?

Fig 3 :27 says *"A link with no instrument is not a link that works. It is a link nobody has looked at."* For model discrimination the break is at links 2 and 3: many models predict the same two or three numbers, and no current instrument separates them. Most effort lands at links 4 and 5 (more experiments, more parameter fitting), above the break, where the measurements already exist. Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*

---

## 2. Findings

### F1 - The signal is per slot; the monopole is a pooled reading

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 10 :26: *"stale percepts, dropped transients, saturated metrics, pooled readings"*. Fig 10 :24: *"the ground does not decay, the channel does"*.

The 2.725 K monopole is a pooled reading. The cosmological information lives in the roughly one-part-in-100,000 anisotropies, their angular scale, and their statistics. A report that quotes only the mean temperature has lost the channel, not summarised it.

**Mode:** `general` for the rule, `specified` for the CMB case. **Status:** triangulated (Fig 1 per-slot indexing and Fig 10 channel rule, low overlap between an indexing argument and a channel-decay argument). **Refuter:** show that the monopole alone determines all parameters now extracted from the angular pattern, with no loss of out-of-sample prediction. Then Fig 1 :19 is not load bearing here and this finding is withdrawn.

### F2 - The sky is an anchor; models range against it

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."* Fig 1 :23: *"The ground enters as the only metric."*

A model does not move the measured sky by being believed. This is why a claim about the earliest expansion is checkable at all: the anchor is public, repeatable, and independent of which model is being tested.

**Mode:** `general`. **Status:** triangulated (Fig 2 anchor rule and Fig 1 metric rule). **Refuter:** a model whose acceptance changes the recorded sky, or a second sky from a genuinely different evidence pool that agrees with models the first sky refutes and is shown to be an instrument rather than a frame. Either would break the anchor reading and return the census to D1.

### F3 - The pattern gives a shape and constraints, not a mechanism name

Fig 9 :32: *"you get a kind of thing, never the answer itself."* Fig 13 :134: *"Unreachable is a verdict here, not a silence"*. Fig 8 :50: *"Convergent derivation and adopted import look identical in the contents."*

What the pattern does say, in effect terms: the universe was hot and dense (the blackbody and the acoustic peaks), near-flat (the first peak's angular scale), statistically homogeneous and isotropic to about one part in 100,000, and seeded by perturbations that are nearly scale-invariant, Gaussian, and adiabatic (the peak ratios and the absence of detected non-Gaussianity or isocurvature). Those are shape constraints. They do not select an inflaton potential, a reheating mechanism, or a cause before the expansion. Many models converge on the same observables, and convergence from a shared evidence pool is one witness (Fig 2 :40).

**Mode:** `specified` on the constraints, `general` on the limit. **Status:** triangulated (Fig 9 shape limit, Fig 13 silence rule, Fig 8 convergence/provenance, genuinely different arguments). **Refuter:** a figure line that, after re-census, selects a unique early-universe mechanism. That would close the F10 gap. Until then the name stays with the ground.

### F4 - More of the same sky is SEARCHED, not a new atom

Fig 8 :32: *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."* Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*

More sky modes and lower error bars refine estimates of n_s and r inside the same closure. They do not add a new discriminating primitive. To separate models that predict the same n_s and r, a different channel is needed (polarization B-modes, 21 cm, non-Gaussianity, direct tensor detection). Fig 8 :40-43 distinguishes underivable-in-principle from unreachable-at-this-budget: a null tensor result at current sensitivity is a bound, not proof that no expansion mechanism produced tensors.

**Mode:** `general` for idempotence, `specified` for the CMB case. **Status:** triangulated (Fig 8 definitional closure, Fig 6 contact rule). **Refuter:** a search inside one channel adding a genuinely new discriminating atom relative to the atoms already held, not merely a tighter estimate of an existing parameter. Then this finding is narrowed.

### F5 - Instruments are improved from worse instruments already returning something

Fig 6 :32: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."* Fig 6 :34-35: *"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."*

COBE returned a failing reading (anisotropy at the limit of its detection); WMAP and Planck sharpened that same reading into acoustic peaks. The B-mode program continues from upper limits already returned, so it has an edge to extend. If primordial tensors registered nowhere at any resolution, no instrument could be specified from a description; the honest verdict would be unreachable, not a design brief.

**Mode:** `specified`. **Status:** triangulated (Fig 6 instrument rule plus the instrument record opened in `04_links_and_distribution.md`). **Refuter:** a fully specified instrument for a signal that has never registered anywhere at any resolution, with no prior failing reading to improve from. That breaks Fig 6 :34-35.

### F6 - Independence decides whether agreement means anything

Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence."* Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool"*. Fig 2 :44: *"The effective-sample-size correction for correlated observations is standard in survey statistics and meta-analysis"*. Fig 7 :13: *"agreement compounds, evidence does not"*.

Two collaboration pipelines reducing the same public map are not two instruments; they are two readers of one report. Independent instruments pointed at the sky are different: Planck temperature, ACT and SPT small-scale spectra, and BICEP/Keck polarization draw on different hardware and systematics. Even then, if they fit the same six-parameter model because the model was built to fit all of them, agreement is a convention that works, not a new verdict (Fig 2 :41). The survey-statistics effective-sample-size rule (Fig 2 :44) is the same arithmetic: correlated sky modes and cosmic variance mean more pixels do not buy proportionately more independent evidence.

**Mode:** `general`. **Status:** triangulated (Fig 2 independence and effective-sample-size, Fig 7 mirror chain, with a low-overlap witness from survey statistics opened this session). **Refuter:** two models shown to fit the same data from genuinely disjoint evidence pools, with the disjointness established by provenance rather than asserted. That would be real corroboration, and it is exactly what Fig 8 :50 says only the record can establish.

### F7 - The habitat of the residual reaches beyond last scattering

Fig 11 :52: *"And contact cascades."* and *"Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."* Fig 11 :73: *"The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."*

The pattern is not a pristine primordial photograph. Reionization, gravitational lensing, the Sunyaev-Zel'dovich effect, and Galactic foregrounds act between last scattering and the detector. A census that stops at "primordial perturbations made the pattern" scopes to first-order contact and misses effects three steps out. Fig 10 :24-26 names the channel failure modes that matter here: pooled readings and saturated metrics.

**Mode:** `specified`. **Status:** triangulated (Fig 11 contact cascade and Fig 10 channel rule). **Refuter:** a map in which every non-primordial contribution is demonstrated to cancel exactly, with no loss of primordial information and no modelling required. Then the habitat extension is idle and this finding is narrowed.

### F8 - The pattern is a bonded arrangement, not a list of pixels

Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."* Fig 12 :46: *"A bond is the typed relation between two operands."* Fig 12 :96: *"Two entries with an identical ingredient set are not variants of one thing."*

A temperature map is a bag of pixels (ingredients). The two-point correlation, expressed as the angular power spectrum C_ℓ, is the bond that carries the physics: the acoustic peaks are relations between pixels, not properties of any pixel. Adiabatic and isocurvature perturbations are two arrangements over the same perturbation atoms, differing in the bond and therefore in the peak series (1:2:3 versus 1:3:5). E-modes and B-modes share polarization atoms but differ in parity bond. The observer who records only ingredients records half of the pattern.

**Mode:** `specified`. **Status:** triangulated (Fig 12 bond/pricing rules plus the world CMB record). **Refuter:** a demonstration that pixel values alone, with no correlation or bond information, determine all extracted parameters equally well out of sample. Then the bond is not carrying the information and this finding fails.

### F9 - Model choice is an MDL bargain in two currencies

Fig 5 :43: *"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before."* Fig 12 :125: *"A composition costs in two currencies, and they do not add."*

The accepted model (near-flat six-parameter cosmology plus an early accelerated expansion) is accepted because it compresses the pattern with few parameters and little leftover residual. That is the bargain, not a proof of the mechanism. The two currencies matter: bits price the description, actions price finding out whether it holds. A model cheap to state may be unaffordable to test, which is why a prediction at an energy scale no instrument can reach remains `candidate`.

**Mode:** `specified` for the mapping onto model comparison, `general` for the bargain. **Status:** single-source for the mapping (the Fig 5 bargain read onto Bayesian model comparison); triangulated for the bargain itself (Fig 5 plus Fig 12 two currencies, low overlap). **Refuter:** a model with strictly fewer free parameters and lower leftover residual that predicts all the same data out of sample. That would reverse the model-choice claim without touching the shape.

### F10 - Gap: the mechanism name and the question of a first instant

Fig 9 :32: *"you get a kind of thing, never the answer itself."* Fig 13 :134: *"Unreachable is a verdict here, not a silence"*. Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

After a genuine re-census of D1 to D4, no figure line selects among inflaton potentials, reheating mechanisms, a bounce, or an ekpyrotic onset. Those are bindings from the physics frame onto the shape, and they must be provenanced as such. Nor does any figure line govern "what came before," which fails the anchor test at X1. The honest output is a gap. Unreachable is a verdict, not a silence.

**Mode:** `general` on the limit, `gap` on the name. **Status:** `gap` after re-census. **Refuter:** a figure line found after re-census that names the mechanism, or a ground instrument that discriminates two mechanisms with disjoint evidence pools (which closes the gap by ground, not by figure). Until one is produced, the gap stands.

---

## 3. Pre-registered refuter (written before the conclusion)

Required by the discipline recorded in the exemplar and by Fig 5 :65: write the sought-for shape as an ordinary term so the preference is refusable. Written before the run is a design instrument, not an honesty device.

The shape claim is refuted if any of the following holds:

1. The monopole alone is shown to carry all per-slot pattern information with no loss of out-of-sample prediction (breaks Fig 1 :19 and Fig 10 :26).
2. The measured sky is shown to change because a model is believed, or a model with a demonstrably different evidence pool fails to constrain the shape (breaks Fig 2 :29 and :45).
3. Search inside one channel is shown to add a genuinely new discriminating atom relative to the atoms held, not just a tighter estimate (breaks Fig 8 :32).
4. An instrument is specified for a signal that has never registered at any resolution, with no prior failing reading to improve from (breaks Fig 6 :34-35).
5. Two pipelines sharing one evidence pool are shown to supply independent corroboration (breaks Fig 2 :40 and Fig 7 :13).
6. A figure line is found after re-census that names the specific early-universe mechanism (closes F10).

If any fires, the corresponding finding is withdrawn and the audit is rerun from the census. Until one is run, no part of this may be labelled `grounded`.

---

## 4. Recommendation

1. Lead with the shape and the constraints, not with a mechanism name. The shape is: per-slot signal, sky as anchor, near-flat hot expansion with nearly scale-invariant Gaussian adiabatic seeds, specific mechanism left open.
2. Keep F10 open. Characterise what a discriminating channel would have to do; do not name the winner (F3, F10).
3. Treat more data as SEARCHED first. Ask whether it adds an atom before treating it as corroboration (F4).
4. Buy independence in proportion to the cost of being wrong (Fig 2 :42). Cross-instrument, cross-pipeline agreement counts only when provenance shows disjoint pools (F6).
5. Enumerate the habitat outward: foregrounds, lensing, reionization, foreground segregation (F7).
6. Record the bond, not just the ingredients: power spectra, peak ratios, parity (F8).
7. Send the generator, not the conclusion. Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."*

---

## 5. Canonical usage check

Three sources were read after the first four sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo"*; *"the quotes are the authority, not this summary"*; a reading that *"has misidentified its domain, not found a flaw"* must be re-censused, not smoothed; and the framework returns *"what a missing thing would have to look like"* then stops at the limit of the instruments, recording the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule; step 2 refuses before minting; step 7 keeps SEARCHED, INWARD and OUTWARD distinct; step 8 says the reach, not the library, drives the loop.
- `THE_SEAT_MAP_Field_Guide_amended.md` as represented in the local plan and exemplar: "High correlation is disqualifying for a verdict and efficient for a convention." This governs the outreach artifacts, not the verdict.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "the CMB proves inflation" | **Retracted as a figure result.** A measurement ranges against models (Fig 2 :45); a frame cannot certify its own completeness (Fig 8 rule 2). The pattern corroborates a shape; it does not deliver a verdict on a mechanism. |
| "the pattern tells us the inflaton field" | **Retracted to the F10 gap.** The canonical limit is a shape, not a name. Naming a field is a binding from the physics frame, provenanced as such. |
| "n_s and r are figure outputs" | **Retracted.** They are imported atoms from the physics frame (Fig 6 :14 imports move walls; these are bindings, not atoms minted by the figures). |
| "the monopole is the answer about the early universe" | **Retracted.** Fig 1 :19 and Fig 10 :26: the monopole is a pooled reading; the signal is per slot. |
| "more CMB data will eventually pick the model" | **Narrowed.** Fig 8 :32: same closure, more of the space visited. A different channel is required; underivable-in-principle and unreachable-at-budget are different facts (Fig 8 :40-43). |
| Apparent strain: Fig 2 :29 names a measurement as anchor while Fig 2 :36 makes human judgment an anchor | **Not strained.** Re-census: D1 anchors a question about a measured sky; Fig 2 :36 anchors a question about a person. Different questions, different domains, allowed by Fig 4 :20. |
| Apparent strain: Fig 6 :32 requires an instrument already returning something, yet the earliest expansion is not directly observed | **Not strained.** Re-census: the anisotropy itself is the returning reading at a coarser scale. COBE returned it; Planck sharpened it. No instrument was specified from a description. |
| F10 called a gap | **Canonically confirmed.** "Unreachable is a verdict here, not a silence" (Fig 13 :134); "a search that finds nothing is never a proof of absence" (Fig 8 :39). |
| Simulation status | **Confirmed.** "the truly testable output would need to be derived from the real architecture or working the formula yourself" (*The Recursive Self-Improvement Trap*). |

### SEARCHED / INWARD / OUTWARD kept distinct (Formula step 7)

- **SEARCHED:** can a discriminating prediction be found inside the current CMB closure? Fig 8 :32 says no atom is added. More sky, tighter error bars. Asked first because it is cheapest, and the other two assume its answer.
- **INWARD:** is there an instrument already returning a failing reading? Fig 6 :32 says sharpen it. Temperature and E-mode anisotropy, lensing B-modes, and small-scale spectra are such readings. Primordial B-modes are at the upper-limit stage, so they have an edge to extend from.
- **OUTWARD:** which frame already holds the missing discriminator? Fig 6 :30 says cast the residual in effect terms: "a channel that responds to tensor perturbations at recombination without foreground degeneracy." Candidates are 21 cm, direct tensor detection, and primordial non-Gaussianity. These are searched as separate tracks and never read against each other.

These are different instructions and were not averaged into one recommendation.

---

## 6. Verdict of the audit

The shape survives; the mechanism name does not. The pattern is per slot with the sky as an immovable anchor; it constrains a hot, near-flat, statistically uniform expansion with nearly scale-invariant, Gaussian, adiabatic seeds; it does not select an inflaton, a reheating history, or a first instant. Eight findings are figure-triangulated; F9 is single-source for its mapping onto model comparison; F10 is a declared `gap`. Two apparent strains were dissolved by re-census and none remain hidden. Strains after re-census: **none**. The result is `specified`, ungrounded, and a candidate until a ground reading with a genuinely different evidence pool pays for the specific parts.
