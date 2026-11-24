# Figure-grounded audit: Are other cosmological parameters also in tension, or is the problem confined to the expansion rate?

**Mode: `specified`, not `grounded`.** It states what would have to be measured. `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status: simulated derivation, not a ground reading.** This document is checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure lines), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, plus the public sources recorded in `10_source_ledger.csv`.

---

## 0. The claim under audit

Two options are offered.

**Option A, confined:** the disagreement is a single live slot, the expansion rate H0. Every other fitted parameter is consistent once H0 is set aside. The remedy is a change that moves the expansion history.

**Option B, spread:** the disagreement has positive support on several parameter slots. H0 is the largest, but the structure-growth amplitude S8 or sigma8, the matter density Omega_m, the sound horizon r_d and the inferred age also register. The slots share atoms and cannot simply be added up. The remedy is a joint model that fits all of them.

Stated as an effect: two inference frames, an early-universe chain and a late-universe chain, each return a vector of parameter estimates. The error signal R is indexed by parameter slot. The question asks for the **support of R across slots**, not for a single scalar verdict.

What an answer would look like, bound as an ordinary term before the run (Formula step 8, "Direction"): a table with one row per parameter slot giving (a) which frames constrain it, (b) which atoms those frames share, (c) the residual that persists and does not trend down, and (d) whether a proposed import moves that slot or merely moves residual into another. This table is the shape claim. The framework never names which new physics fills it.

---

## 1. Residual, domain census and dependency order

### 1.1 R by arity, symmetry and scale

- **Arity:** multi-slot. R is a vector over parameter slots, not a number. H0, S8, Omega_m, r_d and age are distinct operands, so collapsing them to "tension yes or no" changes the object.
- **Symmetry:** comparing two frames' estimates in one slot is a threshold comparison, not a symmetric join. The relation is directional (early universe versus late universe), and the operands are quantities of the same kind only after a model maps them onto one another.
- **Scale:** first order at the level of a measurement chain; second order at the level of the parameter vector, where settled first-order measurements become atoms for an inference; third order at the level of a proposed mechanism that must fit the whole vector.

Fig 11 :43: *"The habitat is enumerated, never composed."* Fig 11 :48: *"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."* So the slot list is read off published measurements, not generated from the vocabulary.

### 1.2 One line per domain: actors, currency, anchor

| domain | actors | currency | anchor (nameable?) | question type |
|---|---|---|---|---|
| D1 Observational frames | CMB temperature and polarization, distance ladder (Cepheids, TRGB, SBF), time-delay lensing, BAO, weak lensing, redshift surveys | standardized angles, distances, redshifts and shear with error bars | yes: each instrument and dataset, which cannot be moved by what another frame concludes | union; several frames, some sharing calibration atoms |
| D2 Parameter inference inside a model | H0, S8, sigma8, Omega_m, r_d, age, Omega_k, the likelihood and priors | posterior mass, chi-square per slot | yes: the likelihood of the data under one parameter set, plus internal consistency of one model fitting all data | union compound; slots are covariant, not a partition |
| D3 Proposed mechanism (imports) | early dark energy, extra relativistic species, modified gravity, calibration shifts | which slots a proposed atom can move | yes: shadow test (does it explain a named gap) and source gate (where did the atom come from) | import question; only import moves the wall |
| D4 Verification and contact | expert readers, journals, public venues | agreement and residual | yes: the ground, never agreement. In this simulated run all seats draw on one evidence pool, so independence is zero | seat/ground question |

A domain with no nameable anchor would not be a domain yet. All four have one. D2 is the critical one: its anchor is not the literature consensus but the likelihood, which does not change because another frame prefers a different value.

### 1.3 Partition or union

This is a **union**, not a partition. H0 and S8 share Omega_m, the model and, for early-universe probes, the sound horizon r_d. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :55-56: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing."* So Option A and Option B are not mutually exclusive in the naive way: a change can clear the H0-only region and leave the intersection standing. The right object is a compound with its own loop.

### 1.4 Dependency order (Fig 3)

1. **Perception:** obtain per-frame, per-slot estimates. Fig 3 :4-5: *"1 · perception / the system can tell what is in front of it, and tell it apart from what was there before."*
2. **Vocabulary:** have terms for what each slot affords, meaning which measurement constrains it and which assumptions bind it. This is the usual break. Fig 3 :25-26: *"The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."*
3. **Objective:** define progress as a residual that persists and does not trend down, not as significance alone.
4. **Planning:** choose a null test that isolates which assumption is responsible (for example a sound-horizon-free estimator or an independent lensing channel).
5. **Learn and carry:** name what worked, verify against the ground, carry the method not the recording.

Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* Effort spent on tightening a parameter that already agrees cannot rescue the missing vocabulary for the slot that disagrees.

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | residual indexed per object slot, not aggregated | governs the scope question directly |
| **2 The Ground** | anchor must not update; independence is low overlap; correlated observations | governs which frames count as witnesses |
| **3 Dependency Chain** | chain ordered by dependency; weakest link is vocabulary/objective | governs where a null test is owed |
| **4 The Membrane** | methods cross up, head starts down, round trip has a gap | governs how the result may be offered |
| **5 Mint Pipeline** | five kinds of gap; candidates are enumerable; persistent flat residual identifies the wrong term | governs which slot to refuse or revise |
| **6 Closure / Reachability** | import is the only operator that moves the wall, with source gate and shadow test | governs new-physics proposals |
| **7 Room Chain** | same closure handed along compounds agreement, not evidence | governs literature consensus as a witness |
| **8 Union Surplus** | convergence versus adopted import; a search that finds nothing is no proof of absence | governs independence claims and honest stop |
| **9 Leave / Arrive** | split rather than search; unbundle unions; describe before looking; filters not witnesses | governs partition/union and the outreach order |
| **10 Ground Maintainer** | bring a characterised residual, never the source; verifier non-access | governs the two-stage offer |
| **11 The Habitat** | enumerate the habitat; contact, not isolated improvement | governs the slot list and instrument question |
| **12 The Bond** | same atoms, different bond, different substance; level-relative irreducibility | governs shared atoms across slots |
| **13 Minimum Viable Set** | six terms; gradient over space and over time are different terms | governs the substrate reading of H0 and S8 |
| **Operators table** | comparison is a threshold relation between two quantities | governs the type of a per-slot comparison |
| **THE_FORMULA.md** | modes, mint gates, step 7 three questions, direction discipline | governs mode discipline and the honest stop |

Strained readings are named in section 6, not smoothed over.

---

## 3. Findings

### F1 — The residual must be indexed per parameter slot, never aggregated (decisive for method)

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*
Fig 1 :28: *"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."*

A single global statistic, "is there a Hubble tension?" is exactly the aggregate the figure forbids. The answer to this question is a per-slot table. A parameter whose residual is near zero still matters, because Fig 1 :13 (*"a global R near zero with one live slot residual is a legal state"*) says the live slot can hide inside a quiet global score.

**Reading mode:** `general` (structural). **Status:** triangulated across Fig 1 and Fig 11 :43 (enumerate, never compose). Low overlap: Fig 1 is about residual indexing inside an agent loop, Fig 11 is about habitats in the world, so they are different routes to the same instruction.

**Refuter:** show that the governing residual here is genuinely scalar (for example that all parameter shifts are exactly proportional under one reparameterisation, so no slot carries information the others do not). If that holds, per-slot indexing adds nothing and F1 is withdrawn.

### F2 — Independence is not a count of teams or methods; it is low overlap of evidence

Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence."*
Fig 2 :44: *"The effective-sample-size correction for correlated observations is standard in survey statistics and meta-analysis; the collapse is the same arithmetic read as a warning."*
Fig 7 :12-13: *"same closure, handed along; agreement compounds, evidence does not"*

An early-universe CMB inference, a BAO inference and an inverse distance ladder can all calibrate on the same sound horizon r_d. Different collaborations, one shared atom. Their agreement is the pool talking, not two frames confirming each other. Late-universe ladders share the supernova absolute magnitude M_B; a Cepheid ladder and a TRGB ladder are closer to independent than two analyses of the same supernova anchors. Time-delay lensing is a genuinely different closure: Wong et al. (2019) report *"This method is completely independent of both the supernovae and CMB analyses."*

**Reading mode:** `specified` (a claim about which published chains share atoms). **Status:** triangulated across Fig 2, Fig 7 and the world sources, but the world sources are secondary only and Fig 2 decides.

**Refuter:** exhibit an independence audit showing that two chains assumed correlated here draw on disjoint calibration data and disjoint likelihoods, so their agreement is corroboration. The claim then narrows to the remaining correlated pairs, not to all pairs.

### F3 — This is a union compound; unbundle before searching

Fig 9 :4-5: *"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."*
Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*

The Hubble constant slot and the structure-growth slot each have their own measurements and their own grounds. They overlap in Omega_m and in the model. The Library of Babel essay (Isaiah N, 2026-10-02) puts the same shape: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"* So Option B is not "add S8 to the list"; it is "run a separate loop for each slot and a third loop for the intersection".

**Reading mode:** `specified`. **Status:** triangulated across Fig 9 and the essay's bundle case (low overlap: a search essay versus a leave/arrive figure). The Abdalla et al. (2022) review corroborates from the physics side, listing both the H0 disagreement and the sigma8/S8 disagreement in one review, but agreement from a shared physics pool is one witness.

**Refuter:** demonstrate that every slot's residual is a one-to-one function of H0 under the same model and the same data, so the slots are a partition after all. Then the compound has no intersection to unbundle.

### F4 — Which slot is wrong? Enumerate bound terms and rank by persistent, flat residual

Fig 5 :58: *"every term currently bound and generating a prediction is a candidate for being the wrong one."*
Fig 5 :59: *"a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at"*

The bound terms here are the fitted parameters of the working model. H0 is the slot whose residual persists and does not trend down under added data: Verde, Treu and Riess (2019) report that *"the discrepancy does not appear to be dependent on the use of any one method, team, or source."* The structure-growth slot also shows a residual, at lower significance, and the Abdalla et al. (2022) abstract names *"the σ8--S8 tension"* alongside the Hubble tension. Sub-threshold anomalies are lower-mass slots, not zero slots.

Significance is a **filter for the budget**, not a witness. Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* A 5 sigma ranking says where to look first. It does not say that the 2 sigma slot is unreal.

**Reading mode:** `specified`. **Status:** single-source for the figure rule (Fig 5), with world sources corroborating the empirical ranking. The numerical significances come from world sources, not from the figures, and are not imported into the verdict.

**Refuter:** show a slot with equal or greater persistent residual that the census omitted, or show that the H0 residual trends down as data accumulate. The ranking is then wrong and must be re-run, not defended.

### F5 — The anchor is the measurement, not the consensus

Fig 2 :29-30: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."*
Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*

A review article agreeing with a review article is not a triangulation. The anchor for a per-slot residual is the likelihood under a stated model, and the anchor for a claim about new physics is an instrument that does not move when a theorist prefers a different value. The sound-horizon-free estimator of Gadbail and Bamba (2026) and the four-channel null test of Martinelli and Sapone (2026) are attempts to build such anchors. Martinelli and Sapone write that *"most consistency tests between datasets cannot isolate which physical assumption is responsible for an observed discrepancy"*, and that the pattern of agreement across channels *"localises the assumption responsible for any observed tension."*

**Reading mode:** `general` (structural) with `specified` instances. **Status:** triangulated across Fig 2 and the null-test literature, but the figures decide that agreement cannot be the anchor.

**Refuter:** produce a genuine ground that settles the scope question directly, for example a measurement that simultaneously determines H0, S8 and r_d without model priors. Then the shape claim is testable at ground level and this finding moves from `specified` to `grounded`.

### F6 — A new-physics import must say which slot it moves, and what it leaves standing

Fig 6 :14: *"the only operator that moves the wall"*
Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*
Fig 8 :50: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"*

An import (early dark energy, extra Neff, a calibration shift) adds an atom to the inference closure. If it reduces the H0 residual while increasing the structure-growth or lensing residual, it has not explained a gap, it has moved residual between slots. Wang and Guo (2026) describe exactly this: *"Current proposals can reduce the nominal tension, but often at the cost of correlated shifts in CMB spectra, standard-ruler distances, lensing, structure growth, or calibrator information."* Provenance matters: the atom must be shown to come from a frame whose closure differs, and must pass a shadow test against a named gap.

**Reading mode:** `specified`. **Status:** triangulated across Fig 6, Fig 8 and the review, with the figure lines primary.

**Refuter:** exhibit an import that closes one slot and leaves every other slot strictly inside its previous error budget, with provenance and a source gate. That import genuinely moves the wall for the compound and the union reading becomes a list again.

### F7 — Shape, not a name; describe the residual before choosing a mechanism

Fig 9 :27-28: *"describe it before you go looking, or any frame you pick will seem to fit"*
Fig 9 :32: *"you get a kind of thing, never the answer itself"*

The framework can deliver: "the residual has support on a set of covariant slots sharing at least one atom, and a proposal will be judged by how it moves that whole set". It cannot deliver "early dark energy is the answer". Naming a mechanism is a binding from the physics frame onto the shape, provenanced as such, not a derivation. The canonical figures README calls the output *"a shape, not a name"* and stops where instruments stop discriminating. The Hard Problem essay (Isaiah N, 2026-08-28) gives the mechanism: an instrument that reads a value *"cannot comment on the source"*, and *"If several paths create the same behavior, then behavior is a projection with lossy information."* Several mechanisms can produce the same H0 shift, so the reading does not determine the source.

**Reading mode:** `general` for the limit, `specified` for the binding. **Status:** triangulated across Fig 9 and the canonical README (different documents, low overlap within the framework), plus the essay from a different field.

**Refuter:** derive a unique mechanism from the per-slot residual table alone, with no extra measurement and no imported atom. Then "shape, not a name" is too weak here and is withdrawn for this case.

### F8 — Unreachable is a verdict, not a silence

Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*
Fig 13 :134: *"Unreachable is a verdict here, not a silence,"*

A null result from one estimator does not close a slot. Equally, a slot with no discriminating instrument is **unreached**, not permanently unreachable. Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."* The honest stop is to name which slots are currently reachable with which instruments and which would need a new one. The examples in F5 are instruments built from an already-returning reading, which is how Fig 6 :32 says instruments are improved: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."*

**Reading mode:** `general`. **Status:** triangulated across Fig 8, Fig 13 and Fig 6.

**Refuter:** show that an instrument for a currently unreached slot was specified from a description alone and then worked, contrary to Fig 6 :32. That would narrow the honest stop.

### F9 — What actually survives, per domain

| domain | verdict that survives | mode | figure |
|---|---|---|---|
| D1 observational frames | per-frame residuals must be stated separately; shared calibration atoms reduce the witness count | `specified` | Fig 2 :31, :44 |
| D2 parameter inference | support of R is a vector over slots; the compound has a union structure; H0 is the largest persistent slot, S8 a smaller live slot | `specified` | Fig 1 :19; Fig 5 :59; Fig 9 :54 |
| D3 proposed mechanisms | an import is judged on the whole vector, with source gate and shadow test; no mechanism is named by the framework | `specified` | Fig 6 :14; Fig 8 :50; Fig 9 :32 |
| D4 verification | the anchor is the ground; this second seat shares the primary's evidence pool and is not a corroborator | `general` | Fig 2 :35, :40 |

Verdicts are kept separate and never averaged. Averaging them would recreate the F1 error at the level of domains.

---

## 4. Pre-registered refuter

Written before the conclusion, as required. Seat Map: *"a falsifier written before the run is a design instrument, not only an honesty device."*

The shape claim (per-slot, union compound, no named mechanism) is refuted if any of the following holds:

1. A per-slot residual table, built from published likelihoods, shows that every non-H0 slot has zero persistent residual once H0 is fixed, with shared atoms accounted for. Then the problem is confined to the expansion rate and the union reading is withdrawn.
2. Two chains declared independent here are shown to share all calibration data and all likelihood inputs, and no genuinely independent chain exists for that slot. Then F2's independence claim for that pair is withdrawn.
3. A single import closes the H0 slot while every other slot remains strictly inside its prior error budget, with provenance and shadow test. Then F6's compound reading is withdrawn.
4. A ground-level measurement determines H0, S8 and r_d simultaneously without model priors and shows all slots agree. Then the tension itself is refuted, not merely reclassified.
5. An expert identifies a figure line governing scope that this census missed. Then the census is re-run before any verdict is kept.

If any fires, the corresponding finding is retracted in section 6 with its date and reason. Until one is run, no part of this is `grounded`.

---

## 5. Recommendation

1. Lead with the per-slot table and the refuter, not with a theory of what causes the tension (Fig 10 :52: *"Bring a characterised residual, never the source."*).
2. Ask each recipient what they would count as a failure in the per-slot table before offering any framework material. Record the answer first.
3. State the mode on every substantive sentence. An unmeasured scope claim is `specified`, not a verdict.
4. Buy independence where the cost of being wrong is high: prefer a lensing or sound-horizon-free channel over another analysis of the same supernova anchors (Fig 2 :42).
5. Treat significance thresholds as budget filters (Fig 9 :60), never as the verdict itself.
6. Offer the formula only as a method to reuse, with each user writing their own refuter (Fig 4 :22: *"Only methods cross up. Only head starts come down."*).

---

## 6. Canonical usage check, retractions and strains

### Canonical usage check

Read after sections 0 to 5: the canonical figures README (local copy) and `60_FIGURES_AS_METALAWS.md`. Two rules govern how the figures may be used here.

- The canonical README says *"They outrank everything else in the repo"* and *"the quotes are the authority, not this summary"*, and warns that *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* So a strain sends us back to the census.
- The README describes the output as *"what a missing thing would have to look like (a shape, not a name)"*, stopping at the limit of the instruments and recording the lineage. The metalaws note says *"the figures are the ground for design questions"* and the seat must not ask the anchor to decide what the figures already settle. So no external ruling was sought and none is claimed.
- Fig 4 :30 requires a measured round-trip gap. The gap is recorded qualitatively in `11_audit.md`, not assumed to be zero.

### Retractions and corrections (kept visible)

| earlier reading | status after the check |
|---|---|
| Initially treated Fig 1 as a claim about software agents only and nearly skipped it for a cosmology question. | **Retracted.** Re-census: "object slot" is the parameter slot here, and Fig 1 :19 governs the scope question directly. A figure being about agents in one domain does not stop it governing the same residual shape in another. |
| Initially counted five independent late-universe H0 probes as five witnesses. | **Retracted.** Fig 2 :31 and Fig 2 :44 require an overlap audit; several share the supernova calibration. The witness count is now per closure, not per paper. |
| Initially wrote that the S8 tension is a second independent confirmation of new physics. | **Downgraded.** It is a correlated slot sharing Omega_m and the model, so it is a second slot in the union, not a second witness. Same evidence pool, per Fig 2 :40. |
| Initially planned to quote Fig 5 :59 with the source's typographic dash. | **Retracted for style.** The quote now stops before that character: *"a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at"*. No meaning lost. |
| Initially read "unreachable" as a silence about the question. | **Corrected.** Fig 13 :134 and Fig 8 :39 make it a verdict with a named stop, distinct from underivable in principle. |

### Strains after re-census

- **Fig 1 (per-slot residual) versus Fig 9 (split rather than search).** Not strained. Fig 1 says how to index R; Fig 9 says what to do once several slots are live. Different quantities, ordered by dependency.
- **Fig 6 :32 (instruments improved from worse instruments) versus the call for a sound-horizon-free estimator.** Not strained. The estimator is built on already-returning BAO and supernova readings, which is an improvement from a worse instrument, not a sensor specified from a description.
- **Comparison bond type.** The Operators table defines the comparison as *"a threshold relation between two quantities."* At second order the operands are parameter estimates, which are quantities, so no strain is live in this question. Recorded explicitly because the exemplar QMGR-0037 has a live strain at this point with different operands; here it does not transfer.
- **After re-census: zero live strains.** Any future strain is to be sent back to section 1, not smoothed into a softer reading.

### Confirmation log

Fig 1 :19, :22, :28; Fig 2 :29-30, :31, :35, :40, :42, :44; Fig 3 :4-5, :19, :25-26; Fig 4 :22, :30; Fig 5 :58, :59; Fig 6 :14, :23, :32; Fig 7 :12-13; Fig 8 :39, :50; Fig 9 :4-5, :27-28, :32, :54, :55-56, :60; Fig 10 :42, :52; Fig 11 :43, :48; Fig 13 :134. Each was checked against `FRAMEWORK/reference/03-FIGURES_TEXT.md` in this session; none is taken from a summary.

### Updated verdict

The figures do not answer "which new physics?" They answer "what would an answer have to look like". The shape is a per-slot residual vector over a union compound, with independence bought per pair of frames, an import judged against the whole vector, and no named mechanism until a source-discriminating instrument pays for one. Mode `specified`, ungrounded, candidate. The empirical ordering of the slots (H0 largest, S8 next) comes from world sources and is secondary; it cannot overrule the figure verdict, and the figure verdict does not depend on it.
