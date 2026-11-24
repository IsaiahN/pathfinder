# WATSON answer: ORI-0022, local formation versus meteorite and comet delivery

**Mode: `specified` on the per-slot shape and chemistry bindings, `general` on the reachability rule, nothing `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This WATSON run synthesizes material already in `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the question it reports on. No provenance measurement was taken.

## QUESTION

Decide, in effect terms, what the Tether says about the question: which prebiotic ingredients could have formed locally on early Earth, and which may have arrived on meteorites or comets? Option A: treat this as a two-column partition of named ingredients. Option B: treat it as two independent reachability questions per slot plus a provenance discriminator, with compound and undetermined as legal outcomes. What each leads to: A hands back a list that cannot tell local from delivered and hides the union overlap; B hands back a per-slot shape, written refuters, and an open slot until a source-discriminating instrument settles it.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors, currency and anchor; partition or union; order by dependency.

- **R (the residual).** For each slot s (amino acids, sugars, nucleobases, membrane lipids, reactive phosphorus, feedstocks), R_s is the gap between what the local early-Earth closure predicts it can produce and what prebiotic chemistry required at the site. Arity: multiple slots. Symmetry: not symmetric, each slot has a different route and vector, so aggregation hides the live signal. Scale: molecular bonds to planetary delivery flux. Fig 1 :19 "The residual is indexed by object slot, not aggregated." and Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."
- **Domain 1, local chemistry frame.** Actors: CH4, NH3, N2, CO2, H2O, H2S, UV, lightning, volcanic plumes, vents, hot springs, clays, silicates, borates, HCN and formaldehyde. Currency: bonds formed by composition inside closure(Gamma_local). Anchor: reproducible laboratory synthesis and the geological record. Union member, not a partition member.
- **Domain 2, extraterrestrial delivery frame.** Actors: carbonaceous chondrite parent bodies, comets, interplanetary dust, aqueous alteration. Currency: delivered inventory plus impact synthesis. Anchor: meteorite and returned-sample analysis, in situ cometary spectroscopy. Union member.
- **Domain 3, provenance and discrimination frame.** Actors: isotope-ratio mass spectrometry, chiral chromatography, exact-mass HRMS, sample curation. Currency: source-discriminating measurements. Anchor: the measurement, which does not update on either frame's preference. This is the only domain that can assign a bucket.
- **Partition or union.** A union, not a partition. A molecule can be locally reachable and delivered. Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." Impact synthesis is a compound with its own loop.
- **Order by dependency.** Enumerate the local habitat, establish what the local closure reaches, ask SEARCHED then INWARD then OUTWARD, and describe the residual before selecting a frame. Settle feedstocks before complex molecules. Fig 3 :19 "Optimising a link that already works cannot rescue one that does not."

Strain test applied: Fig 6 :27 governs depth versus absence for reactive P; Fig 9 :54 governs the union. Different quantities, so no forced reading after re-census. The one live strain is whether local reduced-P production is sufficient, which needs an instrument.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs. Per-domain status is marked `triangulated`, `single-source` or `gap`.

- **Domain 1, local frame.** Fig 6 :21 "MINT composes inside the closure and can never add an atom." and Fig 13 :115 "The set is closed. The arrangements are not. That gap is why import exists." -> local formation is composition from held atoms, not creation of elements. `triangulated` across Fig 6 and Fig 13 with low overlap between the closure and substrate frames. The specific chemistry bindings (Strecker, formose, HCN routes, Fischer-Tropsch) are `single-source` world bindings, not figure derivations.
- **Domain 2, delivery frame.** Fig 6 :14 "the only operator that moves the wall" and Fig 6 :25 "An import adds no atom to the world." -> delivery changes access for the local frame, not the world's elements. `triangulated` across Fig 6 and Fig 8's surplus claim.
- **Domain 3, provenance frame.** Fig 8 :50 "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them" -> the molecule's contents cannot decide origin; provenance is the whole discriminator. Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." -> the isotope measurement is the anchor. `triangulated` across Fig 8, Fig 2 and the canonical usage rule, which are different figures with different subjects.
- **Union and compound cases.** Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." and Fig 6 :27 "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same." -> two slots stay compound or undetermined. `triangulated` across Fig 9 and Fig 6.
- **Ingredient versus pathway.** Fig 12 :47 "A recipe that names only its ingredients has recorded half of itself." and Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." -> a bare ingredient list repeats the flat-formula failure. `triangulated` across Fig 12 and Fig 13 :74 "Everything else is a composition across the two kinds, never within one."
- **Limit on naming.** Fig 9 :32 "you get a kind of thing, never the answer itself" and Fig 13 :135 "It cannot say which primitive is missing, because naming it would mean already holding it." -> the figures give the shape, not the list. `triangulated` across Fig 9 and Fig 13.
- **Null results.** Fig 8 :39 "So a search that finds nothing is never a proof of absence." and Fig 13 :134 "Unreachable is a verdict here, not a silence" -> undetermined is a report, not an omission. `single-source` for each line, mutually consistent.
- **Budget filter.** Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." -> "which source supplied the larger share" is a flux filter, not an origin verdict. `triangulated` with Fig 7 :13 "agreement compounds, evidence does not".

No `gap` was found after a genuine re-census: a figure line governs every part of the shape. The gap is in the ground data (which molecule at which site), not in the figures. That is stated plainly rather than filled with a guess.

## WORLD (secondary sources read)

World sources are corroboration only. Each was opened on 2026-11-23 and is recorded in `10_source_ledger.csv` with author, venue, year and quote. None was used to overrule a figure verdict.

- **Prebiotic chemistry / review.** Pianowski, *Communications Chemistry*, 2026. Quote: "strongly depend on precise regulation and sequential additions of reactants, which might be difficult to achieve under non-laboratory prebiotic conditions." Predicts that local reachability carries an order constraint, not just an atom list. Corroborates Fig 12 :47. Overlap with other sources: low, independent of the framework.
- **Meteoritics / nucleobases.** Oba et al., *Nature Communications* 13:2008, 2022. Quote: "This study demonstrates that a diversity of meteoritic nucleobases could serve as building blocks of DNA and RNA on the early Earth." Predicts import availability for nucleobases and a provenance method using soil blanks and non-biological isomers. Corroborates Fig 6 :25 and Fig 8 :50. Overlap: low.
- **Analytical chemistry / amino acid provenance.** Burton and Berger, *Life* 8(2):14, 2018. Quote: "Compound-specific stable isotope measurements, therefore, are a powerful tool for establishing an extraterrestrial origin for meteoritic amino acids." Predicts that provenance, not presence, decides origin. Corroborates Fig 8 :50 and Fig 2 :29. Overlap: low.
- **Planetary science / nutrient supply.** Galloway et al., *Phil. Trans. R. Soc. B* 380:20240288, 2025. Quote: "This low-solubility and low-reactivity have led to the coining of the term 'P-problem' for the origin of life." Predicts that reactive P is depth versus absence, not an absent element. Corroborates Fig 6 :27. Overlap: low.
- **Cometary science / in situ measurement.** Altwegg et al., *Science Advances* 2:e1600285, 2016 (retrieved abstract) and ESA public release, 2016. Quote: "This is the first unambiguous detection of glycine at a comet." Predicts import availability for glycine and phosphorus. Corroborates Fig 6 :14. Overlap: low.
- **Science communication / NASA summary.** NASA, "Could the Blueprint for Life Have Been Generated in Asteroids?", 2022. Quote: "this discovery demonstrates that these genetic parts are available for delivery." Predicts availability, not dominance, and explicitly says the finding is not a smoking gun. Corroborates the union finding F5. Overlap: moderate, it reports Oba et al. 2022.
- **Prebiotic chemistry / Miller-Urey review.** Lazcano and Bada, *Evolution: Education and Outreach*, 2012 (retrieved). Quote: "A variety of prebiotic processes can form amino acids." Predicts local reachability for amino acids. Corroborates Fig 6 :21. Overlap: low.
- **Geochemistry / formose.** Lambert et al., *Science* 327:984, 2010 (retrieved). Quote: "silicate ions, present in Earth's surface waters at relatively high concentrations, catalyze the formation of four- and six-carbon sugars." Predicts local sugar reachability with a mineral condition. Corroborates Fig 6 :21. Overlap: low.
- **Cosmic dust / feedstock.** Ritson et al., *Nature Astronomy*, 2024 (retrieved). Quote: "cosmic dust sedimentation in glacial systems provides a highly relevant geological feedstock for prebiotic chemistry." Predicts import of concentrated P, S, N and C feedstocks. Corroborates Fig 6 :14. Overlap: low.
- **Impact synthesis.** Fakhraee et al., *Earth and Planetary Science Letters*, 2015 (retrieved). Quote: "Both nucleobases and amino acids were formed from inorganic materials." Predicts a compound case, not a clean delivery. Corroborates Fig 9 :54. Overlap: low.
- **Framework essays (secondary, high overlap).** Isaiah N, *The Hard Problem is About Source*, 2026: "If several paths create the same behavior, then behavior is a projection with lossy information." Predicts that a molecule cannot comment on its source. Corroborates Fig 8 :50, but shares the framework author, so it is weak corroboration. *The Recursive Self-Improvement Trap*, 2026: "the output is only as good as the validator." Predicts that this run cannot settle its own claim. Corroborates its simulated status.

No world source conflicts with the figure verdict. Apparent disagreements about delivery share versus local synthesis are flux questions, which Fig 9 :60 assigns to the budget, not the verdict. The conflict rule was not triggered. Independence note: the essays overlap heavily with the figures; the eleven scientific sources above are by independent authors in different fields, so their agreement is low-overlap corroboration, not an evidence pool.

## VERDICT (from the figures)

The shape survives; the two-column partition does not. Local formation is composition inside a closure and cannot add an atom; delivery is an import from a differing closure and adds no atom to the world. The two are a union, so every slot needs two reachability verdicts plus a provenance discriminator. The molecule's contents cannot decide its origin (Fig 8 :50), so isotope enrichment, chirality and isomer distribution are the only legitimate bucket assignments. Reactive phosphorus and impact synthesis stay compound or undetermined, reported rather than hidden. The figures give this shape and its refuters; the ingredient names come from world measurements and are `specified`, ungrounded bindings.

- **cost if wrong:** bounded and locatable. The packet states mode, union structure and refuters before any list, so an error is findable rather than invisible. The real cost is asking experts to judge a molecule list before they have named a discriminator, which Fig 10 :42 prices: "A verifier that can reconstruct the claim cannot verify it." That cost is avoidable by leading with the shape and the refuter.
- **undoable:** yes. The specific bindings are removable without touching the derivation; `07_the_tether_answer.md` and `08_expert_verification_packet.md` already mark them `specified` and open the two compound slots. No primitive has to be withdrawn, and a slot can be reassigned when an instrument reports.
- **reversed by:** a ground measurement, not agreement. A heavy-isotope and chirality measurement at the origin-relevant site that separates local from delivered for a slot; a local reduced-P flux sufficient without meteoritic input; a demonstration that impact products carry an intact meteoritic signature; a figure re-census that shows delivery does not import a differing closure; or a measurement showing origin is indiscernible in principle for a slot. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [The figures, as text (local extract)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [figures README (canonical local copy)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [Approaching life in a test tube with prebiotic chemistry](https://pmc.ncbi.nlm.nih.gov/articles/PMC13694700)
- [Identifying the wide diversity of extraterrestrial purine and pyrimidine nucleobases in carbonaceous meteorites](https://www.nature.com/articles/s41467-022-29612-x)
- [Insights into Abiotically-Generated Amino Acid Enantiomeric Excesses Found in Meteorites](https://pmc.ncbi.nlm.nih.gov/articles/PMC6027462)
- [Planetary sources of bio-essential nutrients on a prebiotic world](https://pmc.ncbi.nlm.nih.gov/articles/PMC12489510)
- [Rosetta's comet contains ingredients for life](https://www.esa.int/Science_Exploration/Space_Science/Rosetta/Rosetta_s_comet_contains_ingredients_for_life)
- [Could the Blueprint for Life Have Been Generated in Asteroids?](https://www.nasa.gov/solar-system/could-the-blueprint-for-life-have-been-generated-in-asteroids/)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- Folder material synthesized: `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, `08_expert_verification_packet.md`
