# Figure-grounded audit: ORI-0022, local formation versus extraterrestrial delivery

**Mode of this document: `specified`, with `general` on the reachability rule. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status: SIMULATED DERIVATION, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, Substack, 2026): *"LLMs can quickly simulate an approximate answer/output with the formula... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* LLM output is *"simulacra."* This document is checked for internal consistency against the figures. It cannot settle the question it reports on. No measurement was taken here.

**Sources.** Local framework: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`. World sources were opened on 2026-11-23 and are listed in `10_source_ledger.csv`. Every `Fig N :line` quote below is a verbatim substring of the local figure text extract.

---

## 0. The claim under audit

The source question asks for a partition of prebiotic ingredients into two sets: those that could have formed locally on early Earth, and those that may have arrived on meteorites or comets. It is asked inside section 3, "Prebiotic ingredients and chemical supply", next to questions about concentration, mineral surfaces, energy sources, stability, and the share of organics delivered.

Stated in effect terms, the question is: for each ingredient slot `s`, is the presence of `s` at the origin site reachable by composition from the local chemical closure, or does its presence require an import from a frame whose closure differs? "Formed locally" leads to laboratory synthesis in a local habitat analogue and a terrestrial isotopic signature. "Arrived on meteorites or comets" leads to an extraterrestrial provenance signature and an identified delivery vector. The two are not mutually exclusive: reachability inside one closure does not forbid an import from another.

**Bound shape term, written before the census.** `BUCKET(s) = local-reachable | import-available | compound | undetermined`, with `DISCRIMINATOR(s)` = the observation that would move `s` between buckets. This is the "make the sought-for shape an ordinary term" discipline from `THE_FORMULA.md` step "Direction" and Fig 5 :65-66.

---

## 1. Domain census (before choosing any figure line)

Describe `R` by arity, symmetry and scale, then one line per domain with actors, currency and anchor. No nameable anchor means it is not a domain yet.

- **R (the residual).** For each slot `s` (amino acids, sugars, nucleobases, membrane lipids, reactive phosphorus, and the feedstock set HCN/formaldehyde/ammonia), `R_s` is the gap between what the local early-Earth closure predicts it can produce and what prebiotic chemistry actually required at the site and time of origin. **Arity:** multiple slots, not one. **Symmetry:** the slots are not symmetric, each has a different synthesis route and a different delivery vector, so a global classification would be an average that hides the live signal. **Scale:** molecular bonds up to planetary delivery fluxes, over the Hadean interval. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*
- **Domain 1, local chemistry frame.** **Actors:** atmospheric gases (CH4, NH3, N2, CO2, H2O, H2S), UV, lightning, volcanic plumes, hydrothermal vents, hot springs, mineral surfaces (clays, silicates, borates), dissolved feedstocks (HCN, formaldehyde), and locally generated reduced phosphorus from lightning strikes. **Currency:** chemical bonds formed by composition inside `closure(Gamma_local)`; reactions are MINT operations over held atoms. **Anchor:** reproducible laboratory synthesis under plausible local conditions and the geological record of those conditions. Nameable, so this is a domain.
- **Domain 2, extraterrestrial delivery frame.** **Actors:** carbonaceous chondrite parent bodies, comets, interplanetary dust particles and micrometeorites, asteroidal aqueous alteration. **Currency:** the delivered molecular inventory and impact-driven synthesis. **Anchor:** direct analysis of meteorite and returned samples, and in situ cometary spectroscopy. Nameable, so this is a domain. Its closure differs from Domain 1 in nuclei inventory, isotopic carriers, chiral bias and mineral forms.
- **Domain 3, provenance / discrimination frame.** **Actors:** compound-specific isotope-ratio mass spectrometry, chiral chromatography, exact-mass high-resolution mass spectrometry, sample-return curation. **Currency:** source-discriminating measurements. **Anchor:** the measurement itself; it does not update on either frame's preference. Nameable, so this is a domain, and it is the only domain that can assign a molecule to a bucket.
- **Partition or union.** Domains 1 and 2 are a **union**, not a partition: a molecule can be both locally reachable and delivered. One lever (showing local synthesis exists) clears the "local" region but leaves the overlap standing, because delivery still binds in the intersection. Fig 9 :54-56: *"And when the split lands on a union rather than a partition, unbundle before you search again."* The impact-synthesis case is a genuine compound with its own loop (see F7 and `06_isomers_and_order.md`).
- **Order by dependency (Fig 3).** First establish what the local closure can reach (SEARCHED, then INWARD), because the import question assumes that answer; then ask what must be imported (OUTWARD). Describe the residual in effect terms before selecting any extraterrestrial frame. Settle feedstocks (HCN, formaldehyde, ammonia, reactive P) before the molecules built from them, since a link whose input never arrives cannot be diagnosed. Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*

Strain test applied during the census: a line that only fits by forcing a delivery mechanism onto a local synthesis result governs a different quantity and sends us back here. Recorded as F7 and in the retraction log rather than smoothed over.

---

## 2. Figure census (quoted verbatim before concluding)

| figure | verbatim line | bearing here | verdict |
|---|---|---|---|
| Fig 1 | :19 *"The residual is indexed by object slot, not aggregated."* | per-ingredient treatment, not one global list | governs the unit of analysis |
| Fig 1 | :22 *"Aggregating across slots is how a live signal disappears into an average."* | a single "most ingredients were local" claim would hide the live slots | governs |
| Fig 2 | :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* | the isotope/chirality measurement is the anchor | governs Domain 3 |
| Fig 2 | :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* | a review article citing another review is not two witnesses | governs source handling |
| Fig 2 | :40 *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* | the essays all share the framework author; world literature must be checked for independent pools | governs |
| Fig 2 | :42 *"Buy independence in proportion to the cost of being wrong."* | sample return and independent labs are worth their cost here | governs |
| Fig 3 | :19 *"Optimising a link that already works cannot rescue one that does not."* | settle feedstocks before complex molecules | governs order |
| Fig 3 | :27 *"A link with no instrument is not a link that works. It is a link nobody has looked at."* | provenance without an isotope instrument is an unlooked-at link | governs |
| Fig 4 | :30 *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* | local-closure models must be checked against meteorite ground | governs |
| Fig 5 | :28 *"keep the gap, look for an import"* | when local synthesis stalls (P reactivity, ribose stability), park and look outward | governs |
| Fig 6 | :21 *"MINT composes inside the closure and can never add an atom."* | local synthesis makes new arrangements, not new elements | **the local bucket** |
| Fig 6 | :14 *"the only operator that moves the wall"* | delivery is the import operator | **the delivered bucket** |
| Fig 6 | :22 *"NOVEL means novel relative to atoms, not to the world. IMPORT adds an atom, and the added atom is what expands the closure."* | a locally made molecule and a delivered one can be the same molecule; novelty is relative to the frame | governs |
| Fig 6 | :25 *"An import adds no atom to the world."* | delivery did not create the atoms, it moved them into the local frame | governs |
| Fig 6 | :27 *"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."* | reactive phosphorus: absent locally, or merely hard to reach? from inside, identical | **live strain** |
| Fig 7 | :13 *"agreement compounds, evidence does not"* | many papers repeating one synthesis are one witness | governs |
| Fig 8 | :39 *"So a search that finds nothing is never a proof of absence."* | failure to detect a nucleobase in a meteorite is not proof it was not delivered | governs |
| Fig 8 | :50 *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"* | **the molecule cannot tell you its origin; provenance is the whole answer** | **decisive** |
| Fig 9 | :27-28 *"describe it before you go looking, or any frame you pick will seem to fit"* | describe the residual slot before choosing meteorites versus comets | governs |
| Fig 9 | :32 *"you get a kind of thing, never the answer itself"* | the figures give the bucket shape, not the ingredient list | **decisive limit** |
| Fig 9 | :60 *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* | "which is more abundant" is a filter, not the origin verdict | governs |
| Fig 10 | :42 *"A verifier that can reconstruct the claim cannot verify it."* | an expert who has absorbed the derivation before judging loses independence | governs outreach |
| Fig 10 | :52 *"Bring a characterised residual, never the source."* | lead with the per-slot residual and its refuter | governs outreach |
| Fig 11 | :43 *"The habitat is enumerated, never composed."* | list the local actors and conditions from the world, do not invent them | governs Domain 1 |
| Fig 11 | :46 *"conditions: light, water, temperature, season, terrain"* | UV, wet-dry cycles, ice, vents are habitat conditions | governs |
| Fig 11 | :49 *"An actor's valence is relative to the residual, not a property it carries."* | meteorites are a benefactor for reactive P and a contaminant for amino-acid provenance | governs |
| Fig 12 | :5 *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."* | an ingredient list is not a prebiotic pathway | governs |
| Fig 12 | :47 *"A recipe that names only its ingredients has recorded half of itself."* | listing amino acids without bonds/order is half an answer | governs |
| Fig 12 | :117 *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* | delivered and local molecules can be isomerically distinct | governs |
| Fig 13 | :74 *"Everything else is a composition across the two kinds, never within one."* | the bond/arrangement question is separate from the atom question | governs |
| Fig 13 | :115 *"The set is closed. The arrangements are not. That gap is why import exists."* | local closure can keep composing; import is for what it cannot reach | **the structural claim** |
| Fig 13 | :134 *"Unreachable is a verdict here, not a silence"* | an undelivered and unreachable slot is reported, not omitted | governs |
| Fig 13 | :135 *"It cannot say which primitive is missing, because naming it would mean already holding it."* | the figures cannot name the specific delivered ingredient | **decisive limit** |

Canonical usage check: `FIGURES_README_canonical.md` says the figures *"outrank everything else in the repo"* and that the quotes are the authority, not the summary. It also says the framework reports *"a shape, not a name"* and stops *"at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."* That is exactly the limit F9 records below.

---

## 3. Findings

### F1 - The local bucket is composition, not enumeration (governs Domain 1)

Fig 6 :21: *"MINT composes inside the closure and can never add an atom."* Fig 13 :115: *"The set is closed. The arrangements are not. That gap is why import exists."*

An ingredient "could have formed locally" exactly when its molecular arrangement lies in `closure(Gamma_local)`, that is, when a chain of reactions from locally available atoms and feedstocks reaches it. Local synthesis does not create new elements; it makes new bonded arrangements. This matches the world literature: Miller-Urey type spark discharge makes amino acids from CH4/NH3/H2O through HCN and aldehydes and the Strecker reaction (Lazcano and Bada 2012; Pianowski 2026); the formose reaction makes sugars from formaldehyde with Ca/Mg, silicate or borate assistance (Lambert et al. 2010; Pianowski 2026); HCN oligomerization and cyanoacetylene plus urea make nucleobases (Pianowski 2026); Fischer-Tropsch type synthesis over meteoritic iron or under hydrothermal conditions makes fatty acids and long-chain alcohols (Pianowski 2026). These are compositions from held atoms, so they belong to the local bucket by the figure rule.

**Refuter:** a named ingredient for which no local reaction chain from plausible Hadean feedstocks is reachable even after SEARCHED and INWARD, with the failure measured rather than assumed (Fig 3 :27).

### F2 - The delivered bucket is import, and it adds no atom to the world (governs Domain 2)

Fig 6 :14 calls import *"the only operator that moves the wall"*; Fig 6 :25: *"An import adds no atom to the world."* So "arrived on meteorites or comets" is not a claim that new elements came from space. It is a claim that a frame whose closure differs (parent body, comet, dust) supplied an atom or a molecular form that the local closure did not reach, or reached only with difficulty.

World corroboration, opened 2026-11-23: carbonaceous meteorites contain a wide diversity of amino acids and all five canonical nucleobases (Oba et al. 2022; Glavin et al. 2021 via retrieved abstract), ribose and other sugars (Furukawa et al. 2019 as cited by Oba et al. 2022), and reduced phosphorus in schreibersite (Galloway et al. 2025). Comet 67P has glycine and phosphorus in its coma (Altwegg et al. 2016; ESA 2016). Interplanetary dust is proposed as a concentrated feedstock in glacial systems (Ritson et al. 2024). NASA's summary states the discovery *"demonstrates that these genetic parts are available for delivery"* and that chemical reactions in asteroids *"can make some of life's ingredients."*

**Refuter:** a delivered molecule whose atoms and molecular form are demonstrably already reachable in the local closure with the same isotopic and chiral signature, making the import add nothing to the local frame (Fig 6 :25).

### F3 - The molecule cannot tell you its origin; only the record can (decisive)

Fig 8 :50: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"*

This is the structural heart of the answer. An alanine molecule synthesized in a spark-discharge flask and an alanine molecule extracted from Murchison are the same arrangement of the same atoms. The contents do not carry their origin. The provenance record, isotopic enrichment, chirality, isomer distribution, and the known vector, carries it. The world literature independently confirms that this is how the field actually decides: Burton and Berger 2018 write that *"Compound-specific stable isotope measurements, therefore, are a powerful tool for establishing an extraterrestrial origin for meteoritic amino acids,"* and give the discriminating signature, meteoritic amino acids enriched in D, 13C and 15N against biology's preference for the lighter isotopes. Glavin et al. 2021 report alanine in Murchison as *"both racemic (D approximately L) and heavily enriched in 13C,"* and non-proteinogenic amino acids whose carbon isotopes *"fall well outside the typical terrestrial range."* Oba et al. 2022 use the absence of a compound in the landing-site soil and the presence of non-biological analogs to conclude indigenous origin.

**Refuter:** a claimed provenance signature that is produced by a local route at the same magnitude, so the record no longer separates the two frames. For example, if a local process generates the same 13C enrichment and the same racemic ratio as the meteoritic sample, the isotope discriminator fails and the slot returns to `undetermined`.

### F4 - The answer is a shape and a route, not the ingredient list (decisive limit)

Fig 9 :32: *"you get a kind of thing, never the answer itself."* Fig 13 :135: *"It cannot say which primitive is missing, because naming it would mean already holding it."*

The figures decide the bucket structure: local = composition in closure, delivery = import from a differing closure, provenance = the only discriminator. They do **not** decide which named molecule goes in which bucket. That is ground work. The canonical README says the framework returns *"a shape, not a name"* and stops *"at the limit of what the available instruments can distinguish."* Therefore any answer that presents a final, fixed list as figure-derived would be the named error. The list here is world-sourced, `specified`, and open to revision by measurement.

**Refuter:** a figure derivation that names a specific ingredient as necessarily imported or necessarily local without a provenance measurement, which would breach Fig 9 :32.

### F5 - The buckets are a union, and the overlap needs its own loop (compound case)

Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*

Amino acids, nucleobases and sugars are each locally reachable **and** delivered. Asking "which bucket?" as a forced choice is a malformed question. The honest output is two independent verdicts per slot: `local-reachable yes/no` and `import-available yes/no`, plus a provenance verdict where the molecule is actually found. The question's own source file anticipates this: question 27 asks separately whether meteorite-delivered organic compounds *"could have supplied a meaningful share of life's building blocks,"* which is a flux question, not an origin question.

Impact synthesis is the sharper compound case: an extraterrestrial impactor delivers minerals and energy, but the nucleobases and amino acids are formed in the early ocean from meteoritic minerals, water, nitrogen and ammonium bicarbonate (Fakhraee et al. 2015 as retrieved). The imported frame supplies the catalyst and the shock, not the finished molecule. Under Fig 6 :21 this is a local composition (new bonds from held atoms) triggered by an import; it belongs to neither bucket alone. It needs its own loop, recorded in `06_isomers_and_order.md`.

**Refuter:** a demonstration that the union can be replaced by a clean partition with no residual overlap, which would remove the need for the compound case.

### F6 - Reactive phosphorus is a depth-versus-absence strain, not a settled import (live strain)

Fig 6 :27: *"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."*

Phosphorus illustrates this exactly. Elemental P is present locally in apatite and vivianite, but these are sparsely soluble and weakly reactive, which is why the field calls it the *"P-problem"* (Galloway et al. 2025, opened). Meteorites supply soluble schreibersite and other reduced P species; but lightning strikes, serpentinization and metamorphism can also generate reduced P locally (Galloway et al. 2025; Pasek et al. 2008 as retrieved). So reactive P is not an atom missing from the local closure. It is a form that is either hard to reach (depth) or supplied by a differing frame (import), and from inside the frame the two look the same. The honest verdict is `undetermined` pending an instrument that measures the local reduced-P flux against the meteoritic flux at the specific site.

**Refuter:** a measurement of local reduced-P production at the origin site that accounts for the required phosphorylation without an extraterrestrial contribution, which would move this slot to `local-reachable` and dissolve the strain.

### F7 - Ingredients are not pathways; the bond and the order are the other half

Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."* Fig 12 :47: *"A recipe that names only its ingredients has recorded half of itself."*

The source question asks "which ingredients", but the adjacent questions in the same section ask about concentration, mineral assembly and energy sources. A bare list would repeat the flat-formula failure. For a molecule to count as locally formed, the local closure must reach both the atoms and the bond arrangement, in an order that is geologically available. Pianowski 2026 notes that demonstrated nucleoside pathways *"strongly depend on precise regulation and sequential additions of reactants, which might be difficult to achieve under non-laboratory prebiotic conditions."* That is a bond-and-order constraint on the local bucket, not a missing ingredient. Fig 13 :74: *"Everything else is a composition across the two kinds, never within one."*

**Refuter:** a local route demonstrated in one pot under geologically plausible conditions with no imposed reagent order, which would remove the order constraint for that slot.

### F8 - Isomerism can make two "same ingredient" answers be different substances

Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*

Oba et al. 2022 report that structural isomers of uracil and thymine (imidazole carboxylic acids) are one to two orders of magnitude more abundant than the canonical pyrimidines in the same meteorite extracts, and that the methylated pyrimidine analogs occur at similar concentrations to the canonical bases, which they read as evidence of abiological origin. A list that says "uracil present" without recording which isomer and which distribution has recorded the ingredient and lost the substance. This is the same failure Fig 12 names.

**Refuter:** a measurement showing the isomer distribution in the delivered sample is indistinguishable from the local synthesis distribution for the same slot, which would make the isomer discriminator useless.

### F9 - What actually survives

| claim | mode | figure / ground |
|---|---|---|
| Per-ingredient residuals must not be aggregated | `general` | Fig 1 :19, :22 |
| Local formation is composition inside a closure, not creation of atoms | `general` | Fig 6 :21, Fig 13 :115 |
| Delivery is an import from a closure that differs, adding no atom to the world | `general` | Fig 6 :14, :22, :25 |
| The same molecule can be both locally reachable and delivered (union, not partition) | `specified` | Fig 9 :54-56 |
| A molecule's contents do not determine its origin; provenance is the discriminator | `general` | Fig 8 :50 |
| The figures give the bucket shape, not the ingredient list | `general` | Fig 9 :32, Fig 13 :135 |
| Amino acids, sugars, nucleobases and fatty acids are locally reachable in laboratory analogues | `specified`, ungrounded as to the Hadean site | local synthesis literature |
| Amino acids, nucleobases, sugars and reactive P are present in extraterrestrial bodies and deliverable | `specified`, ungrounded as to the actual share | meteorite and comet literature |
| Reactive P, ribose stability and impact synthesis are compound or undetermined slots | `specified`, live strain | Fig 6 :27, F5, F6 |

---

## 4. Pre-registered refuter (written before the conclusion)

"A falsifier written before the run is a design instrument." The shape claim is refuted if any of the following holds:

1. **Provenance inversion.** A molecule assigned `local-reachable` is found in the origin-relevant deposit with a heavy-isotope and chirality signature that no local route can produce, while no delivery vector is available. That would break the reachability side of the census.
2. **Convergent collapse.** A molecule assigned `import-available` is synthesized locally under plausible conditions with the same isotopic and isomeric signature as the meteoritic sample, and the local flux is sufficient. That would make the import add nothing to the local closure (Fig 6 :25) and collapse the bucket distinction for that slot.
3. **Discriminator failure.** An instrument shows that origin is indiscernible in principle for a slot, so no `DISCRIMINATOR(s)` can be named. That would force `undetermined` and make the bucket claim unfalsifiable for that slot.
4. **Figure re-census failure.** A re-census shows that extraterrestrial delivery is not an import, that is, the parent-body or cometary closure does not differ from the local closure in the relevant atom or molecular form. That would remove the structural basis for the delivered bucket.
5. **Union refutation.** A clean partition of ingredients into local-only and delivered-only is demonstrated with no overlap, which would falsify the compound-case finding F5.

Until one of these is run, no part of this may be labelled `grounded`. A search that fails to find a molecule in meteorites is not a proof it was not delivered (Fig 8 :39).

---

## 5. Recommendation

1. Report the answer as a per-slot table with two independent columns (local-reachable, import-available) and a provenance column. Do not force a single bucket.
2. State Fig 8 :50 before any list: the molecule does not carry its origin. Ask what would discriminate before asking which list it belongs to.
3. Mark the P-problem and impact synthesis as compound or undetermined, not as settled imports.
4. Lead outreach with the per-slot residual and the refuter (Fig 10 :52), and only then offer the literature links.
5. Treat repeated reviews as one witness. Buy independence with sample return, independent laboratories, and the landing-site soil blanks that Oba et al. 2022 actually used.

---

## 6. Canonical usage check and corrections visible

After the first five sections I reopened `FIGURES_README_canonical.md` and `THE_FORMULA.md`. Two things changed the reading, and both are recorded rather than silently applied.

- **Correction to F2.** I first wrote that meteorite delivery *"supplies an atom the early Earth lacked."* The README's barrier reading and Fig 6 :25 (*"An import adds no atom to the world"*) forbid that phrasing. Delivery changes access for the local frame; it does not add a new element to the universe. Corrected above. The original reading is preserved here so the correction is visible.
- **Correction to F4.** I first treated the figure output as a list-shaped answer. The canonical limit, *"a shape, not a name"*, and Fig 13 :135 narrow it to the bucket structure. Corrected. The ingredient names in F1 and F2 are world-sourced bindings, not figure derivations.
- **Confirmed, not retracted.** F3 is strengthened by the canonical source rule: *"Indiscernibility is not identity"* means an unmeasured local/delivered distinction is not a claim that the molecules are the same thing, only that the instrument cannot yet tell.
- **Strain retained.** Fig 6 :27 (depth versus absence) is not dissolved by the canonical check. It is the standing live strain and is carried into `09_watson_answer.md` and `11_audit.md`.

### Round trip note

The condensation carried into `07` and `09` is: "locally formed = composition in closure; delivered = import; provenance decides which." Taking that shorthand back down to the concrete question drops two constraints: the union overlap (F5) and the depth-versus-absence strain (F6). Fig 4 :30 requires the gap to be measured rather than assumed. `R_T` is recorded qualitatively in `11_audit.md` as the set of dropped constraints; it is not set to zero.
