# Figure-grounded audit: the early-galaxy puzzles

**Mode of this document: `general` on the structural result, `specified` on the attribution, not `grounded`.** It states what would have to be measured and in what order. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Figure source.** All figure quotes are verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited `Fig N :line`. All world sources were opened on 2026-11-23 and are listed in `10_source_ledger.csv`.

---

## 0. The question under audit, stated in effect terms

> Are the apparent early-galaxy puzzles caused by measurement, modeling assumptions, or a real problem for standard galaxy-formation theory?

The residual R is the gap between the reported early universe and the predicted one. Concretely, as of this run: photometric candidates at z ~ 10-17 with stellar masses that seem too large too early (Labbe et al. 2022/2023), candidates that turn out to be low-z interlopers under NIRSpec (Arai et al. 2026), stellar masses that fall by ~0.4 dex when rest-frame near-IR from MIRI is added (Wang et al. 2024/2025), IMF and dust-law assumptions that move the mass-to-light ratio (van Dokkum and Conroy 2024), LRD light that may be AGN rather than stars (Casey et al. 2024), and simulations that still underpredict quenched massive galaxies at z > 3 by up to ~2 dex (Weller et al. 2025).

**Bound the sought-for shape as an ordinary term before searching.** An answer would have to: (a) say whether the three causes form a partition or a union, (b) assign a per-slot residual bin to each observed puzzle, (c) name the anchor that settles each bin, (d) state what would have to be true for the attribution to flip, and (e) decide whether a new term is owed and of what kind. Binding this shape lets it accrue a residual, so the preference is refusable by the same test as everything else.

---

## 1. Domain census (before choosing any figure line)

### R by arity, symmetry, scale

- **Arity.** Multiple. R is not one number. It is a vector over object slots and over properties (redshift, stellar mass, SFR, quiescence, dust, AGN fraction). Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." The headline phrase "the early-galaxy puzzles" is already an aggregation; the first task is to unbundle it.
- **Symmetry.** Not symmetric. The gap is directional: observed abundance and mass exceed model prediction. The comparison operator is threshold-like, not a symmetric join of two equal operands.
- **Scale.** First order inside an object (is this candidate at z ~ 12 and how massive is it), second order at the population (number density and luminosity function), third order at the theory link (efficiency, feedback, cosmology). Contact cascades (Fig 11 :52-53 "Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."), so a first-order redshift error arrives third-order as a cosmological claim.

### One line per domain: actors, currency, anchor

| domain | actors | currency | anchor (nameable?) | question type |
|---|---|---|---|---|
| D1 measurement / channel | NIRCam photometry, NIRSpec prism and grating, MIRI, ALMA, medium bands | photons, colours, emission lines, secure z | **yes**: the physical spectrum and a spectroscopic redshift; it does not move when a frame pushes on it | perception link |
| D2 modeling / vocabulary | SED fitting codes, template libraries, IMF, dust attenuation law, M/L ratio, AGN versus stellar source | fitted M_star, A_V, SFR, z_phot, efficiency epsilon | **yes**: a source-discriminating observation (rest-frame NIR, emission-line widths, ALMA dust) that separates competing fits | vocabulary and objective link |
| D3 galaxy-formation theory | halo mass function, gas density, star-formation efficiency, stellar and AGN feedback, cosmology | comoving number density, efficiency, quenching timescale | **yes**: the spectroscopically confirmed abundance, which D1 and D2 deliver | planning link, compare to prediction |
| D4 verification / outreach | outside readers, reviewers, proposal panels | errors and residuals, not agreement | the ground, never agreement; in this simulated run the seats share one evidence pool | checking arrangement |

No domain is admitted without a nameable anchor. D4's anchor is the ground, and its independence is declared as near zero in this run (Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool").

### Partition or union

Union. A wrong photometric z (D1) changes the fitted mass (D2), which changes the comparison to prediction (D3). A change in IMF assumption (D2) changes the mass without changing the photons (D1). A feedback prescription (D3) changes what abundance would count as surprising. These are overlapping conditions, not exclusive alternatives. Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." A single lever clears only the region where one condition holds and leaves the intersections standing. **The either/or framing of the question is the first thing the figures refuse.**

### Order by dependency (Fig 3)

1. Perception: is the object real and at what z. Fig 3 :22 "A step whose input never arrives cannot be diagnosed, only its predecessor can."
2. Vocabulary: what does the spectrum afford, under which IMF and dust law.
3. Objective: what counts as a massive galaxy at z > 10, and what counts as a surprise.
4. Planning: only now compare to theory and ask whether a new term is owed.

Fig 3 :19 "Optimising a link that already works cannot rescue one that does not." Most published effort lands at step 4 because that is where the predictions are; the figures say the work belongs at steps 1 and 2 until they are measured. Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at."

---

## 2. Figure census

| figure | bearing | verdict for this question |
|---|---|---|
| 1 Agent | residual per slot, not aggregated | the headline "puzzles" is an average; re-slot before deciding |
| 2 Ground | anchor test, independence, no updating anchor | spectroscopy is the anchor; photometric selections are frames |
| 3 Dependency chain | ordered links, a reading below the break reads nothing | the puzzle sits at the vocabulary link, which has the fewest instruments |
| 4 Membrane | methods cross up, round trip gap R_T | a tabulated mass is a recording; the fitting method is the generator |
| 5 Mint pipeline | four gaps plus refutation, three guards, bargain | maps directly onto the three explanations and decides the order |
| 6 Closure / reachability | import only moves wall, instruments improved from worse ones | inward and outward are two tracks; do not read one against the other |
| 7 Room chain | agreement is variation, not a verdict | a consensus of photometric selections cannot corroborate |
| 8 Union surplus | residual first, frame second, provenance | describe the mismatch in effect terms before naming a cause |
| 9 Leave / arrive | union versus partition, verdict / lookup / narrowing | decisive: the question is a union, so unbundle |
| 10 Ground maintainer | ground does not decay, channel does; bring residual not source | the measurement channel is the suspect, not the ground |
| 11 Habitat | capability is agent and habitat, contact cascades | environment and feedback are in the habitat, not optional extras |
| 12 Bond | arrangement carries meaning, isomers, level relativity | a number density is a composition of selections, not a raw fact |
| 13 Minimum viable set | closed set, unbounded arrangements, unreachable is a verdict | no new primitive is licensed until the arrangements are swept |
| Operators / Symbols | R is the aim, anchor is the ground | no R was stated in the question as posed; we stated one in section 0 |

Strained readings are named in section 5, not smoothed over.

---

## 3. Findings

### F1. The three causes are a union, not a partition (structural, decisive)

Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."

The question asks "measurement, modeling assumptions, or a real problem." That is a partition request. The figure says a bundled problem is a union of overlapping conditions. So the honest answer is not one of the three. It is: sort the components, then attribute per slot. A lever that fixes D1 leaves the D2/D3 intersections standing.

**Refuter:** show that for every observed puzzle exactly one of the three conditions holds and the other two are false across the whole catalog, so the conditions are disjoint and a partition is licensed.

### F2. Do not answer with an averaged number density (per-slot)

Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."

"Too many massive galaxies too early" is an aggregate. The live signal is per candidate: this z, this mass, this SED. The world literature corroborates the mechanic rather than decides it: Wang et al. find the mass error is concentrated at M_star > 10^10 and absent at lower masses, so an all-slot average would hide exactly where the effect lives.

**Refuter:** demonstrate a global residual that trends down under one lever while every per-slot residual is flat or growing.

### F3. The anchor is spectroscopy; photometry is the channel

Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :33 "The anchor must not update." Fig 10 :24 "the ground does not decay, the channel does."

A spectroscopic redshift and a rest-frame near-IR constraint are anchors for "what is there." A photometric selection is a frame: it updates when the template library changes. Arrabal Haro et al. find a low confirmed-interloper rate (8.3%) but also that photometric redshifts are slightly overestimated (average Delta(z) = 0.50 +/- 0.12) because "current templates do not fully describe the spectra of very high-z sources." Arai et al. show pre-JWST z ~ 10 candidates becoming a z = 2.54 ULIRG under NIRSpec. The anchor moved the answer, which is what an anchor is for.

**Refuter:** produce a case where pushing on the spectroscopic reading changes it, or where the photometric selection does not move when its templates are changed and is therefore the real anchor.

### F4. The vocabulary link is where the puzzle lives and has the fewest instruments

Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." Fig 3 :19 "Optimising a link that already works cannot rescue one that does not."

D1 has instruments (NIRSpec, MIRI, ALMA). D3 has instruments (simulations, abundance counts). D2, having terms for what a spectrum affords and saying what counts as progress, has neither an obvious failure nor an obvious test. This is exactly Fig 3's middle link. The IMF source (van Dokkum and Conroy 2024) and LRD source debate (Casey et al. 2024, where "this suggests stars do not dominate") are vocabulary disputes, not perception disputes.

**Refuter:** exhibit a direct instrument for the mass-to-light assumption that settles IMF and source without fitting, so the middle link acquires an obvious test and the diagnosis moves elsewhere.

### F5. Fig 5's bins are the three explanations, with a fourth

Fig 5 :11 "held: the model was right, nothing owed"
Fig 5 :12 "new: extend perception, aim the probe here"
Fig 5 :13 "mis-attached: refit what you have, do not invent"
Fig 5 :14 "mechanism broken: a new term is owed"

Map: measurement = `new` (extend perception, the NIRSpec/MIRI story); modeling assumptions = `mis-attached` (refit the term, the IMF and dust and AGN story); real theory problem = `mechanism broken` (a new term is owed). The fourth bin, `held`, is not nothing: it is the portion of the early-galaxy abundance that Ferrara et al. show is already explained by a minimal model within LCDM, where "the weak evolution from z=7 to z≈14 of the LF bright-end arises from a conspiracy between a decreasing dust attenuation, making galaxies brighter, that almost exactly compensates for the increasing shortage of their host halos."

The fifth kind is refutation: if a bound term is false, what is owed is a refusal, not an explanation. That is why "LCDM is broken" cannot be minted from within a frame that has not first refused the specific term that keeps failing.

**Refuter:** show that one of the three options can absorb all four bins, including the held portion, without changing the representational vocabulary.

### F6. No mint is owed until the guards pass and the bargain pays

Fig 5 :33 "The three guards are a product, not a checklist." Fig 5 :42 "The acceptance test is a bargain, not a threshold."

From `THE_FORMULA.md` step 3: SUPPORT |R+_s| > 0 before the search, REACHABILITY phi in closure(Gamma) during, NOVELTY phi not in atoms(Gamma) after. For a new-cosmology term: SUPPORT is not yet shown because D1 and D2 have not been exhausted; REACHABILITY is doubtful because a new primitive is by definition outside closure; NOVELTY would force an import with a source gate and shadow test (Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."). Fig 8 :51 "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them."

The world sources behave as the guards predict. Wang et al. reduce the number density of massive galaxies by ~36% (55% at the higher mass cut) and the LRD fraction from ~32% to ~13% by adding MIRI, with no new cosmology. The term "new physics" does not pay its bargain against that.

**Refuter:** show a residual that persists and does not trend down after D1 and D2 are fully swept, and whose proposed term costs less to state than the confusion it removes. Then, and only then, a mint is licensed.

### F7. Inward and outward are two tracks, never one argument

Fig 6 :31 "Neither answer tells you much about the other. Run them as two tracks, and never read one against the other." Fig 6 :32 "An instrument is not built from a description. It is improved from a worse instrument already returning something."

Inward: sharpen the instruments we already have. NIRCam medium bands, MIRI, NIRSpec, ALMA. Outward: find a frame whose closure already predicts the shape, such as simulations with different feedback prescriptions (Weller et al.), or the minimal LCDM model of Ferrara et al. A success outward does not excuse a failure inward, and a failure inward is not a proof of absence (Fig 8 :39 "So a search that finds nothing is never a proof of absence."). Naidu et al. show both redshift solutions for CEERS-1749 "hold the potential to challenge existing models," which is precisely why the inward track must decide before the outward one is read.

**Refuter:** derive an instrument for an unobserved quantity from a description alone, contrary to Fig 6 :32, and thereby collapse the two tracks into one.

### F8. Describe the residual before naming the cause

Fig 9 :27-28 "describe it before you go looking, or any frame you pick will seem to fit." Fig 9 :32 "you get a kind of thing, never the answer itself."

Naming "measurement error" or "new physics" before describing R in effect terms is the inversion the figure forbids. The effect description is: more rest-optical light at z ~ 8-12 than the current templates and halo occupation predict, concentrated in compact red sources, with the excess moving when rest-frame NIR is added. That description travels to a frame that may hold the answer; the label does not.

**Refuter:** give a cause label that predicts a novel per-slot residual and is confirmed at the ground before the effect description is fixed.

### F9. Filters are for the budget, witnesses for the verdict

Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

"JWST breaks LCDM" is a filter result: it selects the surprising subset and hands it the verdict. The witness is the spectroscopically confirmed abundance after the channel is sharpened. A tier, a SIGMA, a press release, or a citation count is a contact-cost or budget item, never evidence (Seat Map :163 "High correlation is disqualifying for a verdict and efficient for a convention.").

**Refuter:** produce a verdict that is unchanged when the selection filter is removed and the full slot set is read.

### F10. Unreachable is a verdict, not a silence

Fig 8 :39 "So a search that finds nothing is never a proof of absence." Fig 13 :115 "The set is closed. The arrangements are not." Fig 13 :134 "Unreachable is a verdict here, not a silence."

If the inward track exhausts and no source-discriminating instrument exists for a given slot, the honest report is `unreachable`, not `no problem` and not `new physics`. The distinction between underivable-in-principle and unreachable-at-this-budget is real: the first sends you outward, the second asks for more independent search (Formula step 7). The 2022 to 2026 literature shows repeated movement of the same slots, so these are mostly budget-limited, not absence.

**Refuter:** show that a slot has no possible discriminating observation at any resolution, then upgrade its status from `unreachable-at-budget` to `underivable`.

### F11. Contact cascades and capability is agent and habitat

Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves." Fig 11 :52-53 (DDT cascade).

A better IMF fit that does not change what the instrument can discriminate does not move the ground. Environment and feedback are part of the habitat, enumerated not composed (Fig 11 :43-44 "The habitat is enumerated, never composed."). Weller et al. locate the residual in AGN feedback and environment, and Baxter et al. show that NIRCam selections miss most of the massive galaxies in TNG300, with only 1 of 18 satisfying the selection. Both are habitat facts, not cosmologies.

**Refuter:** improve the agent only, leave contact unchanged, and show the ground moving.

### F12. What survives

| component | cause bin | mode | figure | status |
|---|---|---|---|---|
| the either/or framing is wrong, it is a union | structural | general | Fig 9 :54, :55 | triangulated (Fig 9 plus the shared-model literature) |
| headline abundance is an aggregate; re-slot | measurement | general | Fig 1 :19, :22 | triangulated (Fig 1 plus per-mass effects in Wang et al.) |
| interlopers and biased z_phot move the puzzle | measurement | specified | Fig 2 :29, Fig 10 :24 | triangulated (Arrabal Haro, Arai, Naidu) |
| MIRI rest-frame NIR cuts masses by ~0.4 dex | modeling | specified | Fig 3 :27, Fig 5 :12 | single-source for the number (Wang et al.) |
| IMF and dust law change M/L | modeling | specified | Fig 5 :13 | single-source (van Dokkum and Conroy) |
| LRD light source unsettled | modeling | specified, open | Fig 5 :13 | single-source (Casey et al.), other sources conflict on dust |
| a real underprediction remains for quenched z > 3 | theory, inside LCDM | specified | Fig 5 :14 | triangulated (Weller et al. plus Wang et al. efficiency result) |
| a new cosmological primitive is owed | theory, outside LCDM | refused as written | Fig 5 :33, Fig 6 :23 | no figure line licenses it after re-census |

---

## 4. Pre-registered refuter (written before the conclusion)

The attribution is refuted if any of the following holds:

1. A per-slot census shows the three conditions are disjoint across the full catalog, so the union reading of Fig 9 :55 is false.
2. Spectroscopic or rest-frame near-IR follow-up leaves the per-slot residuals unchanged while photometric selections are varied, so the anchor claim of Fig 2 :29 fails.
3. After D1 and D2 are fully swept, a residual persists and does not trend down, and a proposed term costs less than the confusion it removes under Fig 5 :42. Then the no-new-term-owed conclusion falls.
4. A source-discriminating instrument names an LRD's source, or a direct measurement fixes the IMF at z > 7, so the modeling bin is settled rather than open.
5. A simulation within unmodified LCDM reproduces the full per-slot abundance, so the theory-bin residual falls to `held`.

If any fires, the attribution is revised in the retraction log. Until one is run, nothing here is `grounded`.

---

## 5. Strains, re-census, and retractions

### Strain 1: "mechanism broken" could mean two different things

**Initial reading:** Fig 5 :14 "mechanism broken: a new term is owed" licenses the claim that early galaxies require new cosmology.
**Re-census:** the figure says a term is owed, not that the term is a primitive. A better AGN-feedback prescription (Weller et al.) or a higher efficiency epsilon (Wang et al.) is a term inside the existing cosmology. It is minted in closure(Gamma), not imported. **Retracted** as a license for new physics. Retained as a license for a modeling term. Triangulated (Fig 5 plus Fig 13 :115).

### Strain 2: "A link with no instrument is not a link that works"

Fig 3 :27 could be read as saying the vocabulary link is broken and therefore the whole chain produces nothing. **Re-census:** Fig 3 :22 says only the predecessor can be diagnosed. The perception link does have instruments, so the chain is not broken at step 1. The correct statement is that step 2 is unmeasured, not that it is broken. **Strain named, not smoothed.**

### Strain 3: Fig 6 :32 versus direct dynamical masses at z > 10

The inward track assumes an instrument already returning something. For direct dynamical masses of the highest-z candidates, nothing may yet be returning a resolved value. **Re-census:** this is an `unreachable-at-budget` case (Formula step 7), not a contradiction of Fig 6 :32. It is recorded as a strain because the instrument-improvement rule has no edge to extend from there.

### World-source overlap, declared

Ten papers were read. Several draw on the same surveys and consortia (CEERS, PRIMER, JADES, JWST ERS). Naidu, Arrabal Haro, Wang and Arai overlap in the CEERS/PRIMER evidence pool; their agreement on the direction of the effect is one pool talking, not four witnesses (Fig 2 :40). Ferrara et al. and Weller et al. are modelling frames with different closures, so their disagreement is informative. No conflict sends us back to the census, because the verdict comes from the figures.

### Canonical usage check

The canonical figures README says the figures "outrank everything else in the repo" and that "a reading that makes one contradict another has misidentified its domain, not found a flaw." The re-census above follows that rule: each strain was sent back to the domain census, not resolved by softening a quote. The README also states the framework returns "what a missing thing would have to look like (a shape, not a name)." So the conclusion below reports a shape (union, per-slot, anchor-led, mint-last) and does not name a new cosmology.

---

## 6. Recommendation

1. Restate the puzzle as a per-slot vector, not an aggregate (F2).
2. Treat the three options as overlapping conditions and unbundle them (F1).
3. Run the anchor first: spectroscopy and rest-frame NIR before any theory claim (F3, F7).
4. Spend the budget on the vocabulary link, which is the unmeasured middle link (F4).
5. Mint nothing until SUPPORT, REACHABILITY and NOVELTY pass and the bargain pays (F6).
6. Report `unreachable` where no discriminator exists, and keep the lineage (F10).
7. Fig 4 :22 "Only methods cross up. Only head starts come down." Send the sorting method and the refuter, not a table of masses.

---

## 7. Round trip check, qualitative

Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

- **Sent up:** the verbatim figure set (Fig 1, 2, 3, 5, 6, 9, 10, 11, 13).
- **Abstraction:** "union not partition, anchor first, mint last, unreachable is a verdict."
- **Concretisation:** the four findings in section 3 plus the world attributions.

Three things the shorthand holds do not survive the trip back down without loss: (i) which specific slot is in which bin (it is empirical, not figure-derived), (ii) the numeric size of the MIRI mass shift (it is a measurement, not a figure line), (iii) whether LRD light is stellar or AGN (still open). The residue that survives cleanly is the shape and the order. R_T is recorded qualitatively as this enumerated set of dropped constraints, not set to zero.
