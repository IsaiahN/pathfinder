# WATSON answer: when does a dataset disagreement mean new physics rather than error?

**Mode: `general` on the decision-procedure shape, `specified` on the mapping to physics-statistics practice, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This WATSON run synthesizes `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By the framework's own rule (*The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself"*) it cannot settle the question it reports on. No measurement was taken.

## QUESTION

Decide, in effect terms, what the Tether says when two datasets disagree by more than their quoted uncertainties. Option A: the disagreement indicates new physics, so a term is owed. Option B: it indicates underestimated errors, so a refit, a split, a refusal or a better instrument is owed. What each leads to: A imports an atom from a differing closure, gated by provenance, a shadow test and the MDL bargain, and is expensive if wrong. B stays inside the closure and spends search or instrument work, and is cheap if wrong but can be blind to a genuinely missing term. The question asks for the rule that separates them, not for a verdict on any real anomaly.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors, currency and anchor; partition or union; order by dependency.

- **R (the residual).** Two observations of what is taken to be one quantity, differing by more than quoted uncertainty. Arity: two slots, one per dataset, with their comparison as a second-order slot. Symmetry: the two frames are interchangeable until an anchor is named, which is why an unanchored pair drifts. Scale: first order inside each analysis, second order at the comparison. Fig 9 :4-5 names it a bundle, not one hard question: a case in two conditions is not a harder case of either.
- **Domain 1, the two datasets as frames.** Actors: instruments, analyses, calibration chains, reports. Currency: measurements plus quoted uncertainties. Anchor: the ground, the true value of the quantity, which must not move when either frame is pushed. Question type: union of overlapping conditions, not a partition into new and error.
- **Domain 2, the residual-sorting frame.** Actors: prediction Γ, observation o′, the five bins. Currency: support, reach, novelty, settlement. Anchor: the ground, which settles a minted term; a gate is not the ground. Question type: a sort, not a scalar magnitude.
- **Domain 3, the instrument and ground-maintainer frame.** Actors: detectors, clocks, cables, foreground models, pipelines. Currency: resolution and contact with the ground. Anchor: the ground, which does not decay while the channel does. Question type: reachability, inward instrument work versus outward import.
- **Order by dependency (Fig 3).** Anchor, independence, split, per-slot localization, bin assignment, underivable versus unreachable-at-budget, bargain, settlement. Optimising a later link cannot rescue a broken earlier one.
- **Partition or union.** The two outcomes overlap: a shared pool, a subset structure, a decayed channel and a genuinely missing term can coexist in one discrepancy. Verdicts stay per domain and are never averaged.

Strain test applied: the five bins of Fig 5 sort by what is missing, and the fifth sorts by what is wrong (Fig 5 :50-56). No strain after re-census; the Operators table's negation supplies the refusal.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs. Verdicts are per domain and are never averaged.

**Domain 1, the two datasets as frames. Triangulated (Fig 2 and Fig 8, low overlap between the independence rule and the union-surplus rule).**

- Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are." -> shared calibration or code makes two reports one frame; only disjoint evidence makes a disagreement informative.
- Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool" -> the same rule governs disagreement; a pooled pair is one witness, not two.
- Fig 8 :47 "Independence is one quantity read twice." -> the quantity that decides whether agreement means anything also decides whether a union has surplus.
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." -> two groups checking only against each other cannot settle a discrepancy.

**Domain 2, the residual-sorting frame. Triangulated (Fig 9 split rule plus Fig 5 bins plus Fig 8 underivable/unreachable).**

- Fig 9 :5 "are not one hard question but several well-formed ones. Split it rather than search." -> a stubborn, subset-dependent gap is a bundle; the first correction is a re-description.
- Fig 9 :4 "Disagreements that do not shrink with effort" -> the diagnostic for the bundle case.
- Fig 5 :13 "mis-attached: refit what you have, do not invent" -> the underestimated-error family.
- Fig 5 :14 "mechanism broken: a new term is owed" -> the new-physics family.
- Fig 5 :53 "refuted: a term we hold is wrong; a term is owed that says so" -> a refusal is owed when an uncertainty model or a "same quantity" assumption is false.
- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> pool-level significance can hide or manufacture a discrepancy.
- Fig 8 :42 "already in the closure and was not found, so the remedy is more search, not another atom." -> unreachable-at-budget is the error side.
- Fig 5 :43 "A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before." -> the new-physics term must beat the error hypothesis.

**Domain 3, the instrument and ground-maintainer frame. Single-source for the channel-decay claim (Fig 10), with Fig 6 corroborating the instrument rule.**

- Fig 10 :24 "the ground does not decay, the channel does" -> a drifted dataset is a lost channel, not changed physics.
- Fig 10 :28 "you have lost touch" -> this is the output of a saturated or pooled metric, not a verdict.
- Fig 6 :32 "An instrument is not built from a description. It is improved from a worse instrument already returning something." -> settlement comes from an instrument already returning something that fails to resolve, not from another argument.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." -> significance allocates effort; it never decides the meaning.

**Declared gap.** Fig 9 :32 "you get a kind of thing, never the answer itself" and Fig 13 :134 "Unreachable is a verdict here, not a silence," -> the figures return the sort rule's shape and refuters. They do not name the cause of any particular disagreement. That is `gap` of the unreachable-at-this-budget kind, not underivable in principle: a ground reading would close it.

## WORLD (secondary sources read)

World sources are corroboration only. Each is given with field, author/venue/year, quote, prediction and effect status. Agreement from a shared evidence pool is one witness, not two.

- **Physics data analysis.** Louis Lyons, "Discovering the Significance of 5 sigma", arXiv:1310.1284, 2013. Quote: "a 5σ claim should be reduced to merely 2.5σ if the systematic uncertainties had been underestimated by a factor of 2". Predicts that a significance claim must be read against the error hypothesis; corroborates C3. Overlap: particle-physics methods pool with Gross and Vitells.
- **Physics statistics.** Eilam Gross and Ofer Vitells, "Trial factors for the look elsewhere effect in high energy physics", Eur.Phys.J.C70, 2010. Quote: "the significance of observing a local excess of events must take into account the probability of observing such an excess anywhere in the range." Predicts that a local significance overstates a searched-for effect; corroborates the budget-filter reading. Overlap: same pool as Lyons.
- **Metrology.** Randolf Pohl et al., "The size of the proton", Nature, 2010. Quote: "which differs by 5.0 standard deviations from the CODATA value". Predicts that a 5σ discrepancy can have in-closure resolutions; corroborates the error side of the sort. Overlap: proton-radius pool with Antognini and Bezginov.
- **Metrology.** Aldo Antognini et al., "Muonic hydrogen spectroscopy: the proton radius puzzle", proceedings, 2011. Quote: "The observed discrepancy therefore indicates that a problem exists in at least one of the experiments or theory used to extract the radii." Predicts a refutation of a held term rather than a mint; corroborates the refuted bin.
- **Cosmology.** Wikipedia, "BICEP and Keck Array", accessed 2026-11-23. Quote: "the signal can be entirely attributed to dust in the Milky Way". Predicts a split into components once a new frame (Planck dust) arrives; corroborates Fig 9 :4-5. Low overlap with the particle-physics pool.
- **Experimental particle physics.** Wikipedia, "2011 OPERA faster-than-light neutrino anomaly", accessed 2026-11-23. Quote: "A link from a GPS receiver to the OPERA master clock was loose". Predicts a channel failure, not changed physics; corroborates Fig 10 :24. Low overlap with BICEP2 and with the statistics papers.
- **Cross-field statistics.** Daniel J. Benjamin et al., "Redefine statistical significance", Nature Human Behaviour 2, 6-10, 2018. Quote: "We propose to change the default P-value threshold for statistical significance from 0.05 to 0.005 for claims of new discoveries." Predicts that a threshold is a revisable convention; corroborates Fig 10 :47. Low overlap with physics.
- **Metrology, reduced weight.** Bezginov et al., "A measurement of the atomic hydrogen Lamb shift and the proton charge radius", Science, 2019. Quote: "Our measurement determines the proton radius to be rp = 0.833 femtometers". Full fetch returned 403; abstract read via search index. Predicts independent-frame resolution of the radius puzzle; corroborates convergence at low overlap.

No world source conflicts with the figure verdict, so the conflict rule was not triggered. The framework essays are the author's own pool and are primary, not independent corroboration.

## VERDICT (from the figures)

The figures do not give a number that separates new physics from underestimated errors. They give a sort rule. Independence is checked before significance; a stubborn subset-dependent gap is split before it is searched; the residual stays per slot; the gap is assigned to one of five bins; underivable is separated from unreachable-at-budget; a new-physics term must pay the MDL bargain against the error hypothesis; and an independent frame or a better instrument settles it, because the ground does not decay while the channel does. Under this rule, "new physics" means a term owed from a differing closure, and "underestimated errors" means the fix is already in the closure and needs search, refit, split, refusal or instrument work rather than a new atom. The assignment of any real disagreement remains a `gap` at the ground. Mode `general`/`specified`, simulated, ungrounded, candidate.

- **cost if wrong:** bounded and locatable. If the rule is wrong, the error is in a stated step with a verbatim figure line and a written refuter, so it is findable rather than invisible. The larger practical cost is importing a new atom against a budget limit, which Fig 6 :24 prices above starting from primitives, or spending an outside reader's independence by sending the full framework before the refuter (Fig 2 :42 *"Buy independence in proportion to the cost of being wrong."*). Both are avoidable.
- **undoable:** yes. A wrong bin assignment is revised by re-running later steps; no primitive has to be withdrawn. The shape survives even if a specific real case is reassigned. A sent claim can be superseded by a corrected packet.
- **reversed by:** a ground reading, never agreement. An evidence-overlap audit showing the two frames are independent; a subset split showing one quantity was actually two; an instrument already returning something that fails to resolve the quantity and then resolves it; a sixth kind of gap outside the five bins; a figure-derived numeric threshold that settles a verdict without a ground; or a case where the ground moved while the channel was intact. Until one fires, the verdict stands as `candidate`.

## Sources

- [The figures, as text (local extract)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [Discovering the Significance of 5 sigma](https://arxiv.org/abs/1310.1284)
- [Trial factors for the look elsewhere effect in high energy physics](https://arxiv.org/abs/1005.1891)
- [The size of the proton](https://www.nature.com/articles/nature09250)
- [Muonic hydrogen spectroscopy: the proton radius puzzle](https://www.dora.lib4ri.ch/psi/dload/psi%3A22696/PDF/Antognini-2011-Muonic_hydrogen_spectroscopy-(published_version).pdf)
- [BICEP and Keck Array](https://en.wikipedia.org/wiki/BICEP_and_Keck_Array)
- [2011 OPERA faster-than-light neutrino anomaly](https://en.wikipedia.org/wiki/Faster-than-light_neutrino_anomaly)
- [Redefine statistical significance](https://www.nature.com/articles/s41562-017-0189-z)
- [A measurement of the atomic hydrogen Lamb shift and the proton charge radius](https://www.science.org/doi/full/10.1126/science.aau7807)
- [The Library of Babel: Locating the Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [Decoding Tacit Knowledge: Why Context, Subtext, and Pretext Matter](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
