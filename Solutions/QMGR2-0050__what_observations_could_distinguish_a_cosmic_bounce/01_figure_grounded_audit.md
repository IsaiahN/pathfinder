# Figure-grounded audit: what observations could distinguish a cosmic bounce or cyclic model from standard cosmology

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured and which channels are candidates. It does not report a measurement. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status: a simulation, not a ground reading.** This is a simulated derivation checked for internal consistency against the figures. From *The Recursive Self-Improvement Trap* (Isaiah N, 2026): LLM output can *"simulate an approximate answer/output with the formula"*, yet *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document cannot settle which cosmology is correct. See `05_what_shape_means.md` section 6.

**Figure source.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session. Every `Fig N :line` citation below is a verbatim substring of that file. World sources were opened this session and are listed in `10_source_ledger.csv`.

---

## 0. The residual under audit, stated in effect terms

Two model families are on the table.

- **Frame A, standard cosmology:** a hot Big Bang preceded by a short epoch of accelerated expansion (inflation). Actors: inflaton, slow-roll potential, scalar and tensor perturbations. It predicts a nearly scale-invariant, adiabatic, Gaussian scalar spectrum, plus a tensor background whose amplitude is parameterised by `r`.
- **Frame B, bounce / cyclic cosmology:** the current expanding branch is preceded by a contracting branch joined at a regular bounce, or by an endless sequence of cycles. Actors: contracting phase (ekpyrotic or matter dominated), bounce mechanism (ghost condensate, modified gravity, loop quantum cosmology), shear. It also predicts a nearly scale-invariant, adiabatic scalar spectrum in its successful realisations.

On the slots the experiments already measure well (scalar spectral index `n_s`, amplitude `A_s`, acoustic peak structure, light-element abundances, the expanding Hubble flow today), both frames return predictions close to the observation: `|Γ_A(s) − o'| ≈ 0` and `|Γ_B(s) − o'| ≈ 0`. So the global residual looks quiet. The question does not ask which frame is right. It asks for the **slots where the two prediction functions separate and an instrument can see the separation**:

> Find the set S of observables s such that `|Γ_A(s) − Γ_B(s)| > 0` with a live per-slot residual, and such that some existing instrument already returns a reading at s that fails to resolve.

State the shape of an answer before the run (Formula "Direction"; Fig 5 :65 to :66): an answer is a **finite, ranked, unbundled list of channels with a losing condition on each**, not one universal test. If the search returns empty at this budget, the honest report is `unreachable`, not that the models are identical. Fig 13 :134: *"Unreachable is a verdict here, not a silence"*. Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 1. Domain census (before any figure line is chosen)

### R by arity, symmetry, scale

- **Arity.** Two frames (A and B) ranged against one ground (observation). The comparison is a two-operand relation, so a bond is needed; it is not a third frame. This is the triangulation layout of Fig 2, not a vote.
- **Symmetry.** The discriminant is a **difference / comparison** of two predictions on one slot, and it is *ordered*: the question is which frame predicts more power, more non-Gaussianity, a different tilt. It is not a symmetric merge. `⋛` (comparison, *"a threshold relation between two quantities"*, Operators table :49) and `−` (subtraction, *"progress is a subtraction"*, Operators table :46) are the relevant bonds; `+` (both hold) would be the wrong operator because both frames can hold the same scalar spectrum at once.
- **Scale.** The discriminating slots live at very different scales: BBN (minutes), recombination and last scattering (`z ≈ 1100`, degree-scale B-modes, low-`ℓ` bispectrum), and stochastic gravitational-wave backgrounds from nanohertz (pulsar timing) through millihertz (LISA) to ~100 Hz (ground interferometers). A single lever cannot clear all of these. Fig 9 :4 to :5: *"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."*

### One line per domain

| domain | actors | currency | anchor | nameable? |
|---|---|---|---|---|
| D1: standard inflation frame | inflaton, potential, scalar + tensor perturbations, slow roll | predicted primordial spectra and their parameters (`n_s`, `r`, `f_NL`) | cosmological observation (CMB, LSS, BBN), which does not move when a theorist prefers a model | yes, the published ΛCDM + inflation model set |
| D2: bounce / cyclic frame | contracting phase, bounce mechanism, shear, ekpyrotic / matter / LQC variants | predicted scalar spectrum, tensor amplitude, bispectrum, features | the same observational ground | yes, the published bounce/cyclic model set |
| D3: instruments and data | CMB polarization experiments, bispectrum estimators, pulsar timing arrays, interferometers, galaxy surveys | bandpowers, limits, detections, residuals | the measured sky; instruments are themselves correctable on axes they measure | yes, named experiments and datasets |
| D4: verification / outreach frame | the figure lines, this author, an outside reader | residuals, mode labels, refuters | the figures as metalaws plus the ground; never agreement | yes, but it is not independent of D1 to D3 (one evidence pool) |

No domain here is nameless, so all four are legitimate. D3 is the ground-adjacent domain, not the ground itself: an instrument is not the anchor, it is a fallible channel to it. Fig 2 :37 to :38: *"It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."*

### Partition or union

- The **model space** is a partition into two closures: A and B are different mechanisms reaching similar phenomenology. Their comparison is a triangulation across low-overlap closures, which is the *grounded* panel of Fig 8 (two frames, one residual `R`, surplus where the closures differ).
- The **observational programme** is a union of overlapping conditions (scalar spectrum, tensors, bispectrum, stochastic background, features, shear). A single discriminator clears the region where only one condition holds and leaves the intersections standing. Fig 9 :57: *"a case in two conditions is not a harder case of either"*. So the answer must be unbundled before it is searched.
- The **Frame 12 "cycle"** is a composition structure (*"cycle. The output re-enters as input."*, Fig 12 :121), not a cosmological history. Re-census (recorded in section 6): different objects, so no strain; the analogy is used only as an analogy.

### Order by dependency (Fig 3)

1. **SEARCHED first** (Formula step 7): is a discriminating observation already in hand and unfound? This is cheapest and both other routes assume its answer. The scalar spectrum has been searched exhaustively and does not discriminate; that is a fact about that slot, not about all slots.
2. **INWARD second:** extend an instrument already returning something that fails to resolve (B-modes, bispectrum, PTA bandpowers). Fig 6 :32: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."*
3. **OUTWARD third:** import a frame whose closure predicts a shape the ground can test (a stochastic background interpretation, a parity-odd statistic). Fig 6 :30: *"outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."*
4. **Refuse before mint (Formula step 2):** the "one decisive observation" is a *preference*, not a term. Bind it as an ordinary term with a losing condition before the search. Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."*

INWARD and OUTWARD are opposed and are never read against each other (Fig 6 :31).

---

## 2. Figure census (the lines that bear, quoted before concluding)

| figure | bearing on this residual | verdict it supports |
|---|---|---|
| Fig 1 :19, :22 | residual is per object slot; aggregation destroys the signal | per-channel answer, never one aggregate |
| Fig 2 :29, :31, :35, :40, :45 | anchor, independence, triangulation, shared pool | two frames against one ground; agreement is not verdict |
| Fig 3 :27 | a link with no instrument is not a link that works | only channels with a real instrument count |
| Fig 4 :30 | round trip has a measurable gap | do not treat this summary as identical to the figure set |
| Fig 5 :65 to :66 | make the sought-for shape an ordinary term | pre-register the losing condition |
| Fig 6 :23, :29 to :35, :49 | reachability, inward/outward, instrument extension | candidate channels must already return something |
| Fig 7 :13 | agreement compounds, evidence does not | a chorus of cosmologists is not a discriminant |
| Fig 8 :39, :44, :50 to :52 | no-search-is-not-absence; convergent vs imported | null result is not equivalence; provenance matters |
| Fig 9 :4 to :5, :27 to :28, :32, :42, :57, :60 | split the union; describe before looking; shape not name; ground decides; filters not witnesses | unbundle, name channels only with provenance, keep verdict separate from budget |
| Fig 10 :42, :52 | verifier non-access; bring residual not source | two-stage offer; do not teach the framework before the verdict |
| Fig 11 :43 to :48 | habitat enumerated, never composed | list the instruments and channels actually in contact, do not invent a list |
| Fig 12 :117, :121 | isomer and cycle are composition structures | analogy only; re-census keeps it honest |
| Fig 13 :121, :133 to :135 | different routes reach same substance; shape not name; unreachable is a verdict | multiple mechanisms can fit the scalar spectrum; stop honestly |
| Operators table :46, :49 | subtraction and comparison | difference of predictions, not conjunction |

Strained readings are named in section 6, not smoothed over.

---

## 3. Findings F1 to F8

### F1 — The residual is per slot; one aggregate statistic cannot answer the question

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

The scalar power spectrum is one slot. It is measured exquisitely and both frames reproduce it. Reporting "the data fit both models equally well" is a global residual near zero with live per-slot residuals elsewhere. This is exactly the legal state Fig 1 :13 describes (*"a global R near zero with one live slot residual is a legal state"*). The question must be answered per channel.

**Refuter:** exhibit one observable whose value closes the residual on *all* channels simultaneously, so that no per-slot structure remains. If such a statistic exists, F1 fails.

**Status:** triangulated (Fig 1 per-slot rule plus Fig 9 union/split rule, low overlap between the agent figure and the search figure).

### F2 — This is triangulation, not negotiation, and agreement is not a verdict

Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."* Anchor definition, Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*

Both frames are ranged separately against the same data. A count of papers for or against either model is a room, not an anchor. Fig 7 :13: *"same closure, handed along; agreement compounds, evidence does not"*. Nor does agreement between the two frames on the scalar spectrum automatically mean corroboration: if they draw on the same data pool, Fig 2 :40 applies, *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*. Here the *mechanisms* are genuinely different closures (expansion versus contraction), so the shared scalar spectrum is closer to the convergent-derivation case of Fig 8 :50, *"Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."* That corroborates the **phenomenology**, not the **history**: it is the underdetermination named in F4.

**Refuter:** show the two predictions are generated from one evidence pool (the same code fit to the same data), so their agreement carries no independent weight; or show that one frame simply re-labels the other.

**Status:** triangulated (Fig 2 ground rules and Fig 8 convergence rules, different arguments).

### F3 — A candidate discriminant must be something an instrument already returns and fails to resolve

This is the figure line that actually governs the word "observations" in the question.

Fig 6 :32: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."* Fig 6 :34: *"The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."* Fig 6 :35: *"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."* Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

Apply the strain test. A proposed discriminant such as "measure the primordial tensor tilt at a frequency where no detector has ever returned a bandpower" does not pass: there is no edge to extend from, so it is an INWARD fantasy, not an INWARD extension. A proposed discriminant such as "the B-mode bandpower at degree scales" passes: BICEP/Keck already returns those bandpowers and the current upper limit is `r_0.05 < 0.036` at 95 percent confidence (BICEP/Keck Collaboration, PRL 127, 151301, 2021; BK18 figures page, opened this session). Likewise the CMB bispectrum (Planck 2019 returns `f_NL` constraints) and the nanohertz stochastic background (NANOGrav 15-year returns a correlated signal). These are instruments *already returning something that fails to resolve the mechanism*.

INWARD and OUTWARD stay separate (Fig 6 :31: *"Neither answer tells you much about the other. Run them as two tracks, and never read one against the other."*). INWARD sharpens the existing CMB and GW instruments; OUTWARD imports an interpretation from another closure (a primordial rather than astrophysical source for a stochastic background), with a source gate and a shadow test (Fig 6 :12 to :13).

**Refuter:** name a channel on the final list for which no instrument, at any resolution, has ever returned a reading; or show that an existing instrument's reading is already fully resolved for both frames (no failure to resolve remains). Then that channel must be struck from the list.

**Status:** triangulated (Fig 6 instrument rule and Fig 3 instrument-on-the-link rule, low overlap).

### F4 — Underdetermination is metamerism: one reading, several sources

World source (framework author, high overlap): Isaiah N, *The Hard Problem is About Source* (adventuresinml, 2026-08-28), opened this session: *"If several paths create the same behavior, then behavior is a projection with lossy information"* and *"An instrument that can't distinguish these cases demonstrates its own inadequacy."* The essay's spectrometer example is the exact structure here: a CMB temperature-and-E-mode instrument reads "green" (a red, near scale-invariant spectrum) and cannot comment on the source (inflationary expansion or a contracting bounce).

Figure side: Fig 13 :121 *"Different routes can arrive at the same substance."* Fig 8 :51 *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."* Fig 9 :32 *"you get a kind of thing, never the answer itself"*.

Physics corroboration from an independent field (Battefeld and Peter 2014): the Planck data show *"an unmistakably red, quasi scale-invariant, purely adiabatic primordial power spectrum and no primary non-Gaussianities"*, and *"While these observations are consistent with inflationary predictions, bouncing cosmologies aspire to provide an alternative framework to explain them."* So the shared spectrum is a real metamerism, not an artefact of this derivation.

What is owed is a **source-discriminating instrument**, not a further argument about which story is more elegant. The figure returns a shape for that instrument: it must separate sources that the scalar-spectrum instrument merges. It returns no name (Fig 13 :133: *"what it returns is a shape rather than a name"*). The concrete names come from the physics frame and are recorded as imports.

**Refuter:** demonstrate that the scalar power spectrum (plus standard model parameters) uniquely determines the early-universe mechanism, so no two distinct histories can produce it. Then the metamerism claim fails.

**Status:** single-source on the framework side (Fig 13 convergence plus one essay, shared author, one evidence pool); the physics-side statement that multiple mechanisms fit the data is corroborated by an independent review (Battefeld and Peter 2014).

### F5 — The concrete discriminants, as imports from the physics frame with provenance

These are **world claims**, secondary to the figure verdict. Each is `specified` and each carries its own falsifier. They are offered as the current best content of the slots F1 to F4 require, not as figure-derived laws. Fig 8 :50 to :52 is the reason provenance is recorded: convergent derivation and adopted import look identical in the contents.

**C-a. Primordial tensors / CMB B-modes (`r`).** Inflation generically produces a tensor background; many ekpyrotic/cyclic realisations produce negligible tensor power. Battefeld and Peter (2014, *Physics Reports* 569, 1): *"If primordial gravitational waves are observed, certain bouncing cosmologies, such as the cyclic scenario, are in trouble, while others remain valid."* Current status from BK18: `r_0.05 < 0.036` (95 percent CL). Deng Wang (2024, arXiv:2407.02714) reports *"the strongest constraints on primordial gravitational waves so far"* using Planck, ACT, SPT, BK18 and DESI. Deng Wang's abstract also records a *"Major revision... Conclusion changed"*, which is itself a reason to keep the record and not treat a number as settled.
**Falsifier:** exhibit a bounce model that predicts observable `r` in the inflationary range; then `r` alone does not separate the families. The phrase "certain bouncing cosmologies" in the source already concedes this.

**C-b. Primordial non-Gaussianity (bispectrum shape, amplitude, scale dependence).** Battefeld and Peter: bounce models *"must be fine-tuned to generate a red spectral index; as a side effect, large non-Gaussianities often result."* Planck Collaboration 2019 (A&A, arXiv:1905.05697) finds `f_NL^local = -0.9 ± 5.1`, `f_NL^equil = -26 ± 47`, `f_NL^ortho = -38 ± 24` (68 percent CL), and *"do not detect any signal"* in parity-breaking and feature models while placing tight constraints. Delgado, Durrer and Pinto-Neto (2021, JCAP 11 024) compute the CMB bispectrum for LQC-motivated bounces and find *"the cumulative signal-to-noise ratio of the bispectrum induced in the CMB from scales ℓ < 30 is larger than 10 in all cases of interest and therefore can, in principle, be detected in the Planck data."*
**Falsifier:** a bounce model whose `f_NL` lies inside the single-field inflation range, or a future large-local-`f_NL` detection that is shown to arise from a non-bounce mechanism. The two quoted papers point in opposite directions, which is recorded rather than averaged (Fig 1 :22).

**C-c. Spectral tilt, running, and small-scale features.** Battefeld and Peter: *"many models predict a slightly blue spectrum and must be fine-tuned to generate a red spectral index"*. Ijjas and Steinhardt (2016, Class. Quantum Grav. 33 044001) argue the opposite for ekpyrotic models: *"the new results are consistent with the simplest versions of ekpyrotic cyclic models"* and that anamorphic cosmology *"can produce distinctive predictions."*
**Falsifier:** a bounce model that produces the observed red tilt without fine tuning in the same parameter count as inflation, which would collapse this discriminant.

**C-d. Stochastic gravitational-wave background across frequency.** NANOGrav 15-year (Agazie et al. 2023, ApJL, arXiv:2306.16213) reports a correlated signal following the Hellings-Downs pattern, with *"The inferred gravitational-wave background amplitude and spectrum are consistent with astrophysical expectations for a signal from a population of supermassive black-hole binaries, although more exotic cosmological and astrophysical sources cannot be excluded."* The spectral shape across PTA, LISA and ground-detector bands is therefore a live per-slot residual, not a settled detection of a bounce.
**Falsifier:** an independent component-separation result that identifies the PTA signal as definitively astrophysical at all frequencies, leaving no primordial excess in any band.

**C-e. Parity-odd correlations and features.** Planck 2019 constrains *"parity-breaking models"* and *"scale-dependent feature and resonance bispectra"* without detection. These are shape discriminants, not amplitude discriminants.
**Falsifier:** show that both model families generate the same parity-odd and feature templates at detectable amplitude.

**C-f. Shear / anisotropy.** Battefeld and Peter list *"the possible presence of shear"* as a cosmological application level problem for bounces.
**Falsifier:** a bounce mechanism that generically suppresses shear below the detectable floor in all realisations.

**C-g. Big Bang nucleosynthesis and expansion history.** Both frames must reproduce light-element abundances; this is a consistency constraint rather than a strong discriminant in the cited sources. It is included because a channel with a nameable instrument belongs in the habitat (Fig 11 :43 to :44), but its discriminating power is marked low.
**Falsifier:** a model in either family that cannot reproduce the abundances, which removes it from the comparison rather than discriminating the families.

**Status of F5 as a whole:** `specified`, imported, world-corroborated where independent collaborations agree (BICEP/Keck, Planck, NANOGrav are low-overlap instruments and teams). No single channel is sufficient; the list is a union to be unbundled (Fig 9 :57).

### F6 — The sought "smoking gun" must be refused or bound before the search

Fig 5 :65 to :66: *"The remedy is a discipline rather than a branch: make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else. Then the preference is refusable by the same test as everything else. Committing a prediction before a run is this, already working."* Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."*

The preference most likely to corrupt this question is "there is one decisive observation." It predicts nothing until bound. It is bound in the README as: finite ranked list, per-slot residual, instrument already returning something, losing condition on each. That binding is refusable. An answer that arrives as a single dramatic detection without a pre-registered losing condition is the preference smuggled in as a term.

**Refuter:** show that one observable does in fact close all slots (same as F1's refuter); the discipline then permits the preference to be promoted.

**Status:** framework-internal, triangulated (Fig 5 plus Seat Map, different documents but one author and one evidence pool, so note the overlap).

### F7 — A null result is not an equivalence result

Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* Fig 8 :44: *"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."* Fig 13 :134: *"Unreachable is a verdict here, not a silence"*. Fig 9 :42: *"narrowing gets you close, the ground decides"*.

If, after all channels are searched, no separation is found, the correct report is: at this budget and with these instruments the families are **indiscernible**, not identical. Indiscernibility is not identity (canonical figures README). The record must state which instruments were used and which residual was live and unresolved, so a later instrument can reopen it.

**Refuter:** prove the two closures predict identical values on every observable (a sealed-room result). The figures rule this out for any finite frame, so a claim of observational equivalence must be a measurement claim about a stated instrument set, never a theorem.

**Status:** triangulated (Fig 8 plus Fig 13 plus Fig 9, independent arguments).

### F8 — The condensation of this audit has a nonzero round-trip gap

Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

The shorthand carried into `07_the_tether_answer.md` and `09_watson_answer.md` is: two frames, one ground, per-slot residuals, instruments already returning something, unbundle the union, null is not equivalence. Concretising that shorthand back into the claim "tensors, non-Gaussianity, tilt, stochastic background, shear discriminate" drops at least three constraints: (i) the requirement that the instrument already return a reading (F3), (ii) the per-slot rather than aggregate structure (F1), and (iii) the provenance of each imported channel (F5). The gap `R_T` is recorded qualitatively in `11_audit.md`; it is not zero and must not be assumed zero.

**Refuter:** show that the shorthand preserves all three constraints on the way back down. It does not; hence the full table in section 3 and the provenance ledger in `10_source_ledger.csv` are part of the answer, not decoration.

**Status:** general (structural).

---

## 4. Pre-registered refuter (written before the conclusion)

Required by Seat Map :287. The shape claim of this solution is refuted if any of the following holds:

1. A single observational statistic closes the residual across all channels, so no per-slot structure remains (breaks F1, Fig 1 :19).
2. A listed channel has no instrument that has ever returned a reading at any resolution, or its reading is already fully resolved for both frames (breaks F3, Fig 6 :34 to :35).
3. The two frames are shown to draw on one evidence pool, so their agreement is one witness (breaks F2, Fig 2 :40).
4. The scalar spectrum is proven to determine the mechanism uniquely (breaks F4).
5. A "decisive observation" is asserted without a pre-registered losing condition (breaks F6, Fig 5 :65 to :66).
6. A null search is reported as proof the models are identical (breaks F7, Fig 8 :39).

If any fires, the answer is withdrawn or narrowed accordingly. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Answer per channel, ranked, never with one aggregate goodness-of-fit (F1).
2. Range both models against the same ground separately; do not count papers (F2).
3. Keep only channels with an instrument already returning something that fails to resolve (F3).
4. Lead with the metamerism: one spectrum, several histories, so the owed object is a source-discriminating instrument (F4).
5. Present the concrete channel list as an **import with provenance**, each with its own falsifier, and never average contradictory sources (F5, Fig 1 :22).
6. Pre-register the losing condition before any search (F6).
7. Report nulls as indiscernibility at a stated instrument set, not equivalence (F7).
8. Keep the record and the round-trip gap; the summary is not the authority (F8).

Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* A tier, a review score, or a citation count is a filter. Only an instrument is a witness.

---

## 6. Canonical usage check, strains, and retraction / confirmation log

Two canonical sources were read after sections 0 to 5: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` (both local, opened this session).

- Canonical README: the figures *"outrank everything else in the repo"* and *"the quotes are the authority, not this summary."* It states the limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)"*, stops *"at the limit of what the available instruments can distinguish"*, and records the lineage so the stop is honest. *"Indiscernibility is not identity."*
- WATSON 60: the figures are metalaws that decide design questions; the seat reads the ground and does not ask the anchor to rule on what the figures already settle. A conflict sends the reader back to the census.

### Retractions and confirmations

| earlier reading in this audit | status after the canonical check |
|---|---|
| "tensors discriminate bounce from inflation" | **Narrowed.** Battefeld and Peter say *"certain bouncing cosmologies, such as the cyclic scenario, are in trouble, while others remain valid."* A blanket tensor test was an overstatement; C-a now carries its own falsifier. |
| "bounces predict large non-Gaussianity" | **Narrowed and split.** Battefeld and Peter predict large `f_NL` as a side effect of fine tuning; Delgado et al. predict a low-`ℓ` bispectrum detectable in Planck, while Planck 2019 reports no detection. These are different models and different statistics. Recorded separately, not averaged. |
| "cyclic" | **Re-censused, not strained.** Fig 12 :121 *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."* This is a bond structure in a composition, not a claim about a cosmological history. The word is used only as an analogy; the cosmological sense is defined by the model literature. Different objects, so no figure conflict. |
| "many models predict a blue spectrum" | **Narrowed.** Battefeld and Peter say *"many"*, and Ijjas and Steinhardt argue ekpyrotic models are consistent with the observed red tilt. Model-dependent, not a family-wide law. |
| "no signal means the models are the same" | **Refused.** Canonical README's *"Indiscernibility is not identity"* confirms F7. |
| "the framework can name the decisive observable" | **Refused.** Canonical README's *"a shape, not a name"* confirms F4 and F5: the figure set constrains the form of the discriminant; the physics frame supplies the names, with provenance. |
| "instruments can be improved from a description" | **Refused.** Fig 6 :32 to :35 confirms F3; only an instrument already returning something can be extended. |
| this audit is a ground reading | **Refused.** The Recursive Self-Improvement Trap's simulacra rule confirms the status line: this is internal consistency, not a test of any cosmology. |

### Strains after re-census

One apparent strain, the Fig 12 "cycle" versus cosmological cyclic history, was dissolved by re-census (different objects). One genuine openness remains and is named, not hidden: the **sign and detectability of the tensor and bispectrum predictions are model-dependent within the bounce family**, so no single entry in C-a to C-f is a family-wide discriminant. That is not a figure strain; it is a world fact recorded by the independent sources and handled by keeping per-channel falsifiers. Strains hidden: none.

---

## 7. Updated verdict

The figure verdict survives: a valid answer to "what observations could distinguish" must be an unbundled, per-slot list of channels where an instrument already returns a reading that fails to resolve, with a pre-registered losing condition on each and a provenance record for every imported name. The concrete channel list (tensors, bispectrum, tilt and features, stochastic gravitational background, shear, BBN consistency) is imported from the physics frame and is `specified`, low-weight, and model-dependent. No figure line names a winner between a bounce and standard inflation. The question of which history the universe had is **unreached, not unreachable**: it is settled by an instrument, not by this derivation or by agreement.
