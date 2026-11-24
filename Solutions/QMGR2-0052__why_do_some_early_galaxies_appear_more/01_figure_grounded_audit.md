# Figure-grounded audit: why some early galaxies look bright or developed

**Mode of this document: `specified` on the per-domain findings, `general` on the structural shape, `gap` on which single physical cause fills the residual.** Not `grounded`. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (opened 2026-11-23): "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." And: "LLMs can quickly simulate an approximate answer/output with the formula" while "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the astronomical question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Figure lines are quoted verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`. Formula lines from `THE_FORMULA.md`. Canonical usage from `FRAMEWORK/reference/FIGURES_README_canonical.md`. World sources were opened in 2026-11-23 and are recorded in `10_source_ledger.csv`; publisher 403s are marked rather than hidden.

---

## 0. The residual in effect terms

The question says that some early galaxies "appear more developed or brighter than models predicted." Three words carry the whole problem.

- **"Appear."** The thing under audit is a reading, not a galaxy in itself. An observation `o'` is produced by an instrument chain: NIRCam broadband photometry, a photometric-redshift code, an SED fit, a stellar mass and a UV luminosity. Boylan-Kolchin 2023 writes that "the most massive galaxy candidates in JWST observations at z ≈ 7–10 lie at the very edge of these limits" and immediately adds that this indicates "an important unresolved issue with the properties of galaxies derived from the observations, how galaxies form at early times in ΛCDM or within this standard cosmology itself." Three possibilities, not one.
- **"More developed or brighter."** This is a comparison against a threshold, a `⋛` relation in the figures' notation, not a symmetric identity. Operators table :49: "a threshold relation between two quantities". Ordered, so the arrow of explanation cannot be read off a correlation.
- **"Than models predicted."** The prediction `Γ(b,a)` is produced by a model whose atoms are a halo mass function, a cosmic baryon fraction, a star-formation efficiency, feedback, dust, an initial mass function, and a time coordinate. The residual is `Γ(b,a) − o'`, per object slot.

Symbols table :38-40: "It is the aim, not only the error signal, and it is always a slice: what cannot be perceived yet is residual and simply cannot be read." Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."

So the residual R is: for each high-redshift candidate slot s, a positive mass or luminosity excess of a reading over a model prediction, where part of the excess may be a channel defect (a wrong redshift, an AGN misread as starlight, dust), part may be a term the model holds but has mis-set (efficiency, burstiness, IMF), and part may be an atom the model closure does not hold (a different cosmology, feedback-free starbursts). These are different quantities with different anchors. Folding them into "the models are wrong" is the aggregation error Fig 1 names.

**What an answer would look like, bound as an ordinary term (formula step "Direction"):** a per-slot verdict stating (i) which instrument reading settles the slot, (ii) whether the excess is closed by re-fitting a held term or requires an import from a differing closure, (iii) the name of that import if any, with provenance and a shadow test, and (iv) the falsifier that would reverse the verdict. A claim of the form "JWST breaks cosmology" or "high star-formation efficiency explains everything" is not this shape; it is a name where the derivation owes a slot-wise verdict.

---

## 1. Domain census, before choosing any figure line

### 1.1 R by arity, symmetry and scale

- **Arity:** at least three operands. (a) An instrument reading of a slot; (b) a model prediction for that slot; (c) a habitat of halo, gas, dust, stars and time that can change the reading and the prediction. Possibly a fourth: an observer's stated aim, which decides what "developed" means (spectral age, mass, morphology, luminosity).
- **Symmetry:** `brighter than predicted` is ordered. Operators table :51: "a goal is a comparison, which is why a vocabulary without it cannot state one". A population correlation between halo mass and luminosity is symmetric (`+`); "more than expected" is `⋛`. A pooled correlation cannot choose the arrow.
- **Scale:** first order inside one reading or one model; second order at the union of instrument, model and habitat. Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."

### 1.2 One line per domain: actors, currency, anchor

| domain | actors | currency | anchor (nameable? if not, not yet a domain) | question type |
|---|---|---|---|---|
| D1 Instrument / reading | NIRCam photometry, NIRSpec spectroscopy, ALMA, photometric-redshift codes, SED fitting | flux, redshift, inferred stellar mass, UV luminosity | **yes:** a spectrum with a Lyman break; a measured spectroscopic redshift. Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." | partition boundary: which slots are real, which are interlopers or AGN |
| D2 Model closure | semi-analytic models, hydro simulations, empirical UVLF models; held atoms: halo mass function, f_b, efficiency, feedback, dust, IMF | predicted number density n(>M*, z), stellar mass density rho*(>M*, z) | **yes:** the same measured luminosity function and stellar mass function, which the model must range against | re-fit inside the closure versus import |
| D3 Habitat / physics | dark matter halos, baryon reservoir, gas density, feedback, black holes, dust, stellar IMF, cosmic time | baryons converted into stars; contact | **yes:** the baryon bound M* <= f_b M_halo (Boylan-Kolchin 2023), which does not move when a model changes its mind | union of overlapping conditions; valence relative to R |
| D4 Verification / outreach | expert readers, reviewers, journal and society venues | agreement and residual | **yes:** the ground, never agreement. Fig 2 :45 "Frames range against the ground. They do not negotiate with it." | seat arrangement, not a fifth physical cause |

No domain is admitted without a nameable anchor. A proposed "general model tension" with no instrument that could settle a slot is not a domain; it is an aggregate of the four above.

### 1.3 Partition or union

Union, not partition. A single candidate can be bright because a photometric redshift was wrong **and** because its star-formation efficiency was high **and** because its IMF was top-heavy. Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." One lever clears only the region where one condition holds; the intersections stand. Verdicts are therefore kept separate per domain and never averaged into a single "the models are off by X".

This is confirmed by the world record rather than guessed. Arrabal Haro 2023 found that a candidate at suggested z approximately 16 "instead has z = 4.9, with an unusual combination of nebular line emission and dust reddening that mimics the colours expected for much more distant objects" (D1). Carniani 2024 confirmed two galaxies at z = 14.32 and 13.90 spectroscopically and wrote that "the excess of luminous galaxies in the early Universe cannot be entirely explained by accretion onto black holes" (D1 plus D3). Ceverino 2024 reproduced the bright end by "redshift-dependent galaxy formation efficiency" inside ΛCDM (D2). Shen 2024 explored early dark energy as an outward import from a differing cosmological closure (D3/D2 boundary). These are not competing answers to one question; they are different conditions in a union, firing on different slots.

### 1.4 Dependency order (Fig 3)

1. **Perception:** does the slot have a measured redshift and a clean spectrum? Fig 3 :5 "the system can tell what is in front of it, and tell it apart from what was there before". A photometric candidate is not yet a perception; it is a bet.
2. **Vocabulary:** does the model have a term for burstiness, dust geometry, IMF variation, or AGN contamination? Fig 3 :7 "it has terms for what things afford: what can be moved, opened, joined, blocked".
3. **Objective:** what would count as a resolved slot? Fig 3 :10 "it can say what would count as progress here, in its own terms". A luminosity function match is an objective; "break cosmology" is not.
4. **Planning and import:** only now choose whether to re-fit or import. Fig 3 :19 "Optimising a link that already works cannot rescue one that does not." Fig 3 :20 "The chain is ordered by dependency, not by importance."

The likely break in this literature is between perception and vocabulary: photometry produces a mass long before there is an instrument that discriminates its source. Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at."

---

## 2. Figure census (quoted verbatim before concluding)

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | residual per object slot; frame-internal quantities disqualified; ground is the only metric | D1 and D4: aggregation is the named failure |
| **2 The Ground** | triangulation, non-updating anchor, correlation has valence | D1 and D4 decisive; D2 ranges against the same anchor |
| **3 Dependency Chain** | ordered by dependency; a reading below the break is a reading of nothing | governs the SEARCHED / INWARD order |
| **4 The Membrane** | methods cross up, recordings do not; round trip has a gap | governs how a simulation result may travel |
| **5 Mint Pipeline** | three guards as a product; "mis-attached: refit what you have, do not invent" | D2: most proposed fixes are re-fits, not mints |
| **6 Closure / Reachability** | import is the only operator that moves the wall; instruments improved from worse ones | D2/D3: discriminates re-fit from outward import |
| **7 Room Chain** | a room's agreement is variation, not a verdict | D4: many agreeing teams are one room |
| **8 Union Surplus** | residual first, frame second; provenance and shadow test; idempotent closure | governs import discipline and union reading |
| **9 Leave / Arrive** | SEARCHED first, then INWARD, then OUTWARD; union unbundling; filters not witnesses | the operational core of the answer |
| **10 Ground Maintainer** | ground does not decay, channel does; verifier non-access; bring a characterised residual | D1 and D4 outreach discipline |
| **11 The Habitat** | enumerate, never compose; valence relative to residual; capability is agent-and-habitat | D3: candidate causes are habitat actors, not a standing list |
| **12 The Bond** | same atoms, different bond, different substance; functional group; two currencies | `06_isomers_and_order.md` derivation |
| **13 Minimum Viable Set** | closed set, unbounded arrangements; "Unreachable is a verdict here, not a silence," | the literal single-cause name is a `gap` |
| **Operators table** | `⋛` comparison is ordered; `¬` refusal; "a relation that fails all seven is not an operator you are missing; it is a claim that has not been made yet" | "brighter than" is a comparison, not an identity |
| **Symbols table** | R is the aim and a slice; per object slot | governs the whole derivation |

Strained readings are named and sent back to census, not smoothed over (see §7).

---

## 3. Findings

### F1: The residual is per slot; the population average erases the signal (decisive for framing)

Fig 1 :19 "The residual is indexed by object slot, not aggregated."
Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."
Symbols table :38-40 "It is the aim, not only the error signal, and it is always a slice: what cannot be perceived yet is residual and simply cannot be read."

The astronomical literature often reports a luminosity function offset, which is a population statistic. That is a filter for where to spend telescope time (Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."), not a witness for a cause. Boylan-Kolchin 2023 reports that the most extreme candidates require efficiency epsilon near 0.99 to 0.84 at z about 9 and 7.5, while "in the low-redshift Universe, such efficiencies are never seen, with epsilon ≲ 0.2 for all galaxies." That is a statement about slots at the edge, not a universal property of early galaxies.

**Refuter:** show that the excess is uniformly distributed across all slots at the same redshift with no edge objects, so a per-slot reading adds nothing over the population statistic. Then this finding is withdrawn and a single population-level mechanism is owed instead. Status: `triangulated` across Fig 1 and the Symbols table, with world corroboration from Boylan-Kolchin 2023.

### F2: "Appear" is a channel claim first, a physics claim second

Fig 10 :24 "the ground does not decay, the channel does"
Fig 10 :26 "stale percepts, dropped transients, saturated metrics, pooled readings"
Fig 6 :32 "An instrument is not built from a description. It is improved from a worse instrument already returning something."
Fig 6 :33 "Nobody specified a telescope from an account of Mars. A wandering point in the sky was already a reading, and every sharper instrument was built on the residual the last one produced."

Photometry is the worse instrument already returning something (bright red dots). NIRSpec spectroscopy is the sharper instrument built on the residual the last one produced. Arrabal Haro 2023: "Spectroscopic measurements are required to validate these sources and to reliably quantify physical properties that can constrain galaxy formation models and cosmology," and one z approximately 16 candidate "instead has z = 4.9". Carniani 2024: the brightest z approximately 14 candidate "was previously considered a low-redshift interloper with a peculiar spectral energy distribution", and a follow-up spectrum excluded the contamination.

So for at least some slots, the correct route is SEARCHED then INWARD, not OUTWARD. The models did not fail; the reading did. The residual lived in the channel while the ground stayed put.

**Refuter:** a slot whose photometric excess survives a clean spectrum with an unambiguous Lyman break, no AGN lines, and a stable stellar-continuum slope removes the channel explanation for that slot. Status: `triangulated` (Fig 10 plus Fig 6 plus two world sources with different instruments), per slot.

### F3: An anchor must not update on the model's own inference

Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
Fig 2 :30 "If it moves when you push on it, it is not an anchor."
Fig 2 :45 "Frames range against the ground. They do not negotiate with it."

The baryon bound in Boylan-Kolchin 2023, M* <= epsilon f_b M_halo with epsilon <= 1, is a candidate anchor of this kind: it does not move because a stellar-population model changes its IMF prior. A fiducial photometric stellar mass is **not** an anchor: it updates when the SED code, the dust law, or the redshift solution changes. Boylan-Kolchin himself lists these as "sources of observational uncertainty" and notes that "the flux calibration of NIRCam is continually being updated."

The anchor test therefore sorts the world's claims. "The candidate is at z = 14.32 from a Lyman break in a spectrum" is anchored. "The candidate has 10^11 solar masses from a photometric SED fit" is a frame reading pending settlement.

**Refuter:** exhibit a quantity used as an anchor that changes value when a model frame revises its priors, and the anchor claim for that quantity is withdrawn. Status: `triangulated` (Fig 2 and world), `single-source` for the specific baryon-bound choice (from Boylan-Kolchin 2023 alone, not from the figures).

### F4: Most proposed explanations are re-fits, not mints

Fig 5 :13 "mis-attached: refit what you have, do not invent"
Fig 6 :21 "MINT composes inside the closure and can never add an atom."
Fig 6 :22 "NOVEL means novel relative to atoms, not to the world. IMPORT adds an atom, and the added atom is what expands the closure."
Fig 13 :115 "The set is closed. The arrangements are not."

Higher star-formation efficiency, burstier histories, lower dust attenuation, a top-heavy IMF and earlier black holes are all rearrangements of atoms the model closure already holds (halo mass, baryons, gas density, time, feedback, light). Ceverino 2024: "The efficiency of galaxy formation increases significantly with mass and redshift. At a fixed mass, galactic halos at extremely high redshifts convert gas into stars at a higher rate than at lower redshifts. The high gas densities in these galaxies enable high efficiencies." Donnan 2025 goes further: "the current data can be reproduced simply by assuming ever-younger stellar populations consistent with a formation epoch at z ≃ 15" with "a non-evolving halo-mass dependent galaxy-formation efficiency consistent with that observed today."

Calling these "new physics" is the flat-formula error: the ingredients changed, not the atom set. They still earn their place under the MDL bargain when they explain more for less: Fig 5 :43 "A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before."

**Refuter:** show that a proposed re-fit requires a primitive the closure does not hold, and it is reclassified as an import with provenance and a shadow test. Status: `triangulated` across Fig 5, Fig 6, Fig 13 and four world sources (one astronomy evidence pool, counted once).

### F5: A genuine outward import is owed only when SEARCHED and INWARD fail

THE_FORMULA.md step 7, verbatim: "SEARCHED  is it in here and unfound? The closure does not change: same atoms, same wall, more of the space actually visited." "INWARD    extend the instrument, from one already returning something." "OUTWARD   IMPORT. Characterize R in effect terms, then find the frame whose closure predicts its shape."

Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."
Fig 6 :24 "Import from a live peer is debited against that frame's independence. A wrong atom costs more than starting from primitives."
Fig 8 :53 "Residual first, frame second."

Order matters because the first two are cheaper and the third assumes their answer. Shen 2024 is a clean example of an outward import: an "Early Dark Energy (EDE) model, originally proposed to solve the Hubble tension," used because "the EDE cosmology, the UVLF measurements at z ≃ 12 based on spectroscopically confirmed galaxies ... exhibit no tension with the benchmark model." It carries a cost the paper states: the EDE cosmology "is in stronger tension with values of S8 measured at low redshift and predict that the Universe is ≈ 13 billion years old ... in moderate tension with the measured ages of ultra-faint galaxies and globular clusters" (Boylan-Kolchin 2023 discussing EDE). An import is not free; it is priced against the rest of the record.

**Refuter:** demonstrate that the excess closes after spectroscopy or after re-fitting a held term with no new primitive; then the import is withdrawn. Status: `triangulated` (formula + Fig 6 + Fig 8), with world corroboration.

### F6: The candidate causes are a habitat to enumerate, not a list to compose

Fig 11 :43 "The habitat is enumerated, never composed."
Fig 11 :48 "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."
Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries."
Fig 11 :51 "No standing list of good actors survives a change of residual."

Enumerated habitat for this residual: dark-matter halo mass and assembly history; cosmic baryon fraction; cold gas density and inflow; star-formation efficiency as a function of mass and redshift; burstiness and its duty cycle; stellar initial mass function; dust mass, geometry and destruction; black-hole seeding and accretion; feedback and outflows; cosmic variance and lensing; the instrument chain. The same actor changes valence with the slot: high gas density raises luminosity in Ceverino 2024 but also raises dust production, which lowers the observed UV luminosity; black holes add light in some accounts (Arrabal Haro 2023, Curtis-Lake quoted there) and are excluded as dominant by the UV slope and extended morphology in Carniani 2024. A standing list of "the causes of bright early galaxies" is structurally refused.

**Refuter:** produce a standing list of actors with fixed valence that correctly predicts a new slot without re-enumeration. Status: `single-source` on the figure rule (Fig 11), with world corroboration that is one evidence pool.

### F7: The union leaves intersections standing

Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."
Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."
Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

JWST's bright-end excess is not one question with several opinions. It is (D1) a reading question, (D2) a closure question, and (D3) a habitat question, overlaid. Carniani 2024 is the clean demonstration: the same object needed a spectrum to settle its redshift (D1), an extended 260 parsec morphology and a UV slope of -2.20 to exclude a dominant AGN (D3), and a comparison to a halo-abundance scaling to establish that "some astrophysical processes are creating a deviation from the dimensional scaling of halo mass and the Hubble time" (D2/D3). One lever clears none of the intersections.

**Refuter:** find a single intervention that closes every slot including the overlaps, with no residual left in any domain. Then the union verdict is replaced by a partition verdict. Status: `triangulated` (Fig 9 plus the world record).

### F8: Convergence and adoption look identical in the contents

Fig 8 :51 "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"
Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."
Fig 4 :22 "Only methods cross up. Only head starts come down."

Ceverino 2024 and Donnan 2025 reach compatible bright-end fits from different directions (zoom-in simulations with dust modelling versus a simple empirical model with non-evolving efficiency), while Shen 2024 imports EDE from a different cosmology closure. From the output numbers alone, a re-fit and an import can look the same. The provenance is the whole difference. This is why `10_source_ledger.csv` records overlap and why the outreach packet asks for a refutation of the shape rather than an endorsement of a mechanism.

**Refuter:** show a case where two frames sharing an evidence pool produce an output that cannot be distinguished from independent convergence, and where the record does not separate them; then the demand for provenance is undercut for that case. Status: `triangulated` (Fig 8 plus Fig 4).

### F9: More models inside the same closure do not add evidence

Fig 7 :35 "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."
Fig 8 :39 "So a search that finds nothing is never a proof of absence."
Fig 13 :118 "So a frame can search without end and still not arrive: infinite effort inside a finite reach."
Fig 2 :42 "Buy independence in proportion to the cost of being wrong."

Many teams independently fitting the same JWST photometry with the same SED codes are one room wearing many names. Independent instruments pointed at the same thing are two rooms. Boylan-Kolchin 2023's caveat about the Hubble/JWST comparison is exactly this point in astronomical language: "the loophole is that you're not necessarily observing the same galaxies with JWST and Hubble" (quoted in O'Callaghan 2024). Agreement from a shared evidence pool is one witness, not two.

**Refuter:** exhibit two readings whose calibration, priors and SED assumptions are genuinely disjoint and whose agreement survives that check; then upgrade the corroboration weight. Status: `triangulated` (three figure lines plus world).

### F10: The literal "why" is a gap, and that is a verdict

Fig 9 :32 "you get a kind of thing, never the answer itself"
Fig 13 :134 "Unreachable is a verdict here, not a silence,"
Fig 13 :135 "It cannot say which primitive is missing, because naming it would mean already holding it."
Fig 13 :138 "library as it stands, so something has to be imported before it is asked again."

No figure line selects star-formation efficiency over IMF over early dark energy over black-hole seeding for a given slot. The figures return the shape of the required answer (per-slot residual, non-updating anchor, SEARCHED first, re-fit before import, habitat enumerated) and the test that would close it. The name of the physical cause is a `gap` of the unreachable-at-this-budget kind, not underivable in principle: a source-discriminating instrument could settle it. This is not an invitation to invent a cause; it is an honest stop recorded with its lineage.

**Refuter:** exhibit a figure line that names a specific astrophysical cause for a high-redshift luminosity excess, or a ground reading that settles one slot. Then the gap closes for that slot. Status: `triangulated` (Fig 9 plus Fig 13 plus canonical README).

### F11: "Developed" hides a second comparison that needs its own instrument

Fig 12 :125 "A composition costs in two currencies, and they do not add."
Fig 12 :126 "Bits price the description. Actions price finding out whether it holds."
Operators table :51 "a goal is a comparison, which is why a vocabulary without it cannot state one"

"Brighter" is a flux comparison. "More developed" could mean older stellar age, higher stellar mass, a Balmer break, a metallicity, a compactness, or a morphological structure. These are different quantities in different currencies, and the figures forbid summing them into one score. Carniani 2024 reports both a blue UV slope and an extended 260 parsec radius for JADES-GS-z14-0; the paper's own phrase is that "the properties of galaxies seem to change rapidly in only 600 Myr (that is, from z = 14 to z = 6)." A "development score" would mix those again.

**Refuter:** exhibit an instrument that reads age, mass and morphology on one axis such that a single "development" number is ground-settled rather than convention-authored. Status: `specified`, `single-source` on the figure side, with world corroboration.

### F12: The outreach claim must lead with the residual, not the framework

Fig 10 :52 "Bring a characterised residual, never the source."
Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it."
Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you."

The first contact to an astronomer is the residual and the pre-registered refuter: "which observation would make you withdraw this slot verdict?" The framework, the figures and the eight essays come only after a stage-1 verdict is recorded, and later agreement is never pooled as corroboration. This is why `02_outreach_email.md` carries no request for trust, no "bombshell" framing, and no theory before the check.

**Refuter:** show that a reader can give an independent stage-1 verdict while already holding the framework's interiors, with their independence intact under Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence." Status: `triangulated`.

---

## 4. Retraction and confirmation log

Corrections stay visible. Nothing below was silently erased.

| earlier reading | status after re-census and canonical usage check |
|---|---|
| "The models are wrong" as one verdict | **Retracted.** Replaced by a union of D1 channel, D2 closure and D3 habitat verdicts, per slot, never averaged (F1, F7). |
| "JWST breaks ΛCDM" | **Not supported.** Boylan-Kolchin 2023 says the candidates "lie at the very edge of these limits" and frames an "unresolved issue" spanning observation-derived properties and galaxy formation; Carniani 2024 says "Galaxy formation models will need to address the existence of such large and luminous galaxies so early in cosmic history." Neither is a measurement that the cosmological model is false. |
| "High efficiency explains it" | **Narrowed.** Ceverino 2024 supports a redshift-dependent efficiency inside ΛCDM; Donnan 2025 argues a non-evolving efficiency plus younger ages suffices; the two disagree, which is evidence for the union, not a flipped verdict. |
| "The bright objects are real" | **Split.** Some are confirmed (Carniani 2024); one z approximately 16 candidate was refuted (Arrabal Haro 2023). Both statements are slot-indexed. |
| "Name the cause" as an answer | **Refused.** Fig 9 :32 and Fig 13 :135. Recorded as `gap` with the instrument that would close it (F10). |
| Fig 12 bond vocabulary applied to the six-term physical substrate | **Retained but narrowed.** The six terms govern the framework's substrate, not a catalogue of galaxies. The isomer derivation in `06` is over an abstract atom set and is explicitly a structural analogue, marked `specified`. |
| Apparent conflict: "refit" versus "import" | **Not strained after re-census.** Refitting changes arrangement inside a closure (Fig 6 :21); import adds an atom (Fig 6 :22). Different quantities. |
| Apparent conflict: convergence versus agreement | **Not strained after re-census.** Fig 8 :50 allows convergence at maximum independence; Fig 2 :40 disqualifies agreement from a shared pool. Same independence parameter read twice. |

---

## 5. Pre-registered refuter

Written before the conclusion and before any verdict was composed. A falsifier written before the run is a design instrument.

The shape claim is refuted, and the relevant domain verdict withdrawn, if any of the following fires:

- **R1 (D3 anchor):** a spectroscopically confirmed galaxy at z > 10 whose stellar mass exceeds the maximum allowed by the baryon bound for the most massive halos expected at that redshift in the adopted cosmology, with photometric contamination, lensing, AGN light and calibration alternatives excluded. This would require an outward import, not a re-fit.
- **R2 (D1 channel):** every bright candidate in a defined sample loses its excess under a clean spectrum, so the residual was entirely a reading defect and D2/D3 imports are owed nothing for that sample.
- **R3 (D4 independence):** two purportedly independent readings are shown to share calibration, priors or SED libraries, so their agreement is one evidence pool and is removed from witness weight.
- **R4 (D2 provenance):** a term presented as a new import is shown to have been already in the held closure, so the claim that a wall moved is withdrawn (Fig 6 :22).
- **R5 (union):** a single lever closes all slots including the intersections, so the union verdict is replaced by a partition verdict.
- **R6 (ground):** an instrument is named and run that discriminates among efficiency, IMF, dust and black-hole contributions for one slot, and the slot's verdict is then settled by that ground reading rather than by this derivation.

Until one of these is run, no cause is labelled `grounded`.

---

## 6. Recommendation

1. Report the residual per slot, with the spectroscopic status of each slot stated first (F1, F2).
2. Use the anchor test on every proposed quantity: a photometric stellar mass is a reading; a spectral redshift and the baryon bound are candidate anchors (F3).
3. Run SEARCHED, then INWARD, then OUTWARD in that order; record why each was closed before naming a cause (F5).
4. Treat efficiency, burstiness, dust, IMF and early black holes as re-fits unless a genuinely new primitive is shown with provenance and a shadow test (F4, F8).
5. Enumerate the habitat, including what cannot yet be perceived, rather than composing a standing list (F6).
6. Keep the three domains' verdicts separate; do not average them into one number or one mechanism (F7).
7. State the gap plainly where no figure line governs a cause, and name the instrument that would close it (F10).

Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

---

## 7. Canonical usage check

Read after sections 0 to 6: `FRAMEWORK/reference/FIGURES_README_canonical.md`. Its governing sentences: the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary"; "a reading that makes one contradict another has misidentified its domain, not found a flaw"; the framework returns "what a missing thing would have to look like (a shape, not a name)" and stops "at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest"; "Indiscernibility is not identity."

Applied here:

- The apparent Fig 6 versus Fig 5 strain dissolves by re-census: Fig 5 sorts a gap by what is missing and prescribes re-fit for a mis-attached term; Fig 6 says what moves the wall. Different quantities.
- The apparent Fig 11 valence claim versus Fig 2 non-updating anchor dissolves by re-census: valence is relative to a residual in a habitat; an anchor is what settles a question. A baryon bound can be both an anchor for the bound test and an actor whose valence is relative to a different residual.
- The "shape, not a name" rule governs a **missing** primitive. Naming an already-held atom, such as efficiency or dust, is a binding from the astronomy frame onto a held term and is permitted as provenance (see `05_what_shape_means.md` §5b). This was overstated in a first pass and is corrected here rather than erased.
- No figure line certifies the framework's own completeness; the claim to settle a physical cause is forbidden the same way the exemplar's "only true one" claim was refused.

### Strains still live

- **S1:** Fig 12 treats a settled molecule as an atom available for composition, but the physical substrate of Fig 13 is the six-term set, not halo mass. The isomer derivation in `06` is therefore an analogue over an abstract atom set, labelled `specified`, not a claim about galaxies being molecules. Named, not hidden.
- **S2:** the phrase "more developed" is not ground-settled on one axis. Named in F11 with the instrument condition.
- **S3:** Ceverino 2024 (redshift-dependent efficiency) and Donnan 2025 (non-evolving efficiency plus younger stellar ages) genuinely disagree about the same slots. Kept as evidence for the union; the conflict rule sends us back to census, not to a flipped verdict.

After re-census: three live strains, all named, none smoothed over.

---

## 8. Final verdict of the audit

The question "why do some early galaxies appear brighter than predicted" is a **union of three conditions with an open fourth seat**, not one question with one mechanism.

- **D1 instrument / reading:** `specified`, `triangulated`. Part of the excess is a channel defect, settled per slot by spectroscopy, not by more photometry.
- **D2 model closure:** `specified`, `triangulated`. Most candidate explanations are re-fits of held atoms; whether a re-fit closes the bright end is a model comparison decided at the ground, not by this derivation.
- **D3 habitat / physics:** `specified`, `single-source` on the figure rule (habitat enumeration) with a one-pool world corroboration. Which actors dominate which slot is a `gap`; a source-discriminating instrument is owed.
- **D4 verification:** `general`, `triangulated`. Agreement cannot settle any of the above; independent instruments can.

**Overall: `general` on the shape, `specified` on the per-domain verdicts, `gap` on the literal single cause, not `grounded`, candidate.** The figures govern the route and the stop. They do not name the physical cause. Every substantive claim in this folder is a simulated derivation checked for internal consistency against the figures, not a ground reading, and cannot settle the question it reports on.
