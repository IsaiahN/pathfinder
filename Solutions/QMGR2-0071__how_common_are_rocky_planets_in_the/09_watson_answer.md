# WATSON answer: how common are rocky planets in habitable zones, by star type?

**Mode: `general` on the structural rule, `specified` on the shape. Not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This run synthesizes `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. *The Recursive Self-Improvement Trap* (opened this session) says "the truly testable output would need to be derived from the real architecture or working the formula yourself", so this document cannot settle the question it reports on. No measurement was taken here.

## QUESTION

Decide, in effect terms, what the Tether says about the question "How common are rocky planets in the potentially habitable zones of different kinds of stars?". Option A: report one aggregate occurrence rate for all stars. Option B: report a table with one rate per star-kind slot, each tied to its definitions, catalog epoch and instrument, with the number imported from measurements. What each leads to: A hides the slot signal in an average and cannot tell a planner which kind of star to observe; B is checkable, falsifiable and keeps the numeric question open until the ground settles each cell.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor, partition or union, and order by dependency.

- **R (the residual).** Arity: one rate per star-kind slot, not one global number. Symmetry: a rate is a comparison of planet counts to star counts under a completeness correction; swapping operands is meaningless, so the comparison is ordered. Scale: stellar-population scale, above a single planet and below the Galaxy. The conditions (rocky, in the HZ, per host kind) form a union; the star kinds form a partition.
- **Domain 1, survey and instrument.** Actors: Kepler photometer, DR25 pipeline, completeness, reliability, TESS, HARPS radial velocity. Currency: detections per star and completeness corrections. Anchor: the instrument and public catalog, which can be pushed on and revised (Gaia). Partition by survey; union with D3 when a rate is assembled.
- **Domain 2, stellar demographics.** Actors: FGK dwarfs, early M, mid to late M, Gaia-revised effective temperature and radius. Currency: stars counted per spectral bin. Anchor: the stellar catalog. This is the slot index. Partition by star kind.
- **Domain 3, habitability definition.** Actors: conservative and optimistic HZ models, rocky radius bound near 1.5 to 1.64 Earth radii, instellation limits. Currency: definitional boundaries. Anchor: climate models and the measured mass-radius relation. Union with D1 and D2.
- **Domain 4, verification and mission design.** Actors: ExoPAG, SAG13, HWO yield planners, reviewers. Currency: agreement, credible intervals, expected yield. Anchor: the future detection of actual HZ rocky planets, not agreement. Union with the other three; it must not feed back as a verdict.
- **Order by dependency.** Fix definitions (D3) before counting stars (D2), choose instrument and completeness treatment (D1) before quoting a rate, and record provenance (D4) before any comparison. Fig 3 :19 "Optimising a link that already works cannot rescue one that does not."
- **Strain test applied.** The apparent conflict between "do not aggregate" and "planners need one number" dissolves on re-census: the planning figure is a filter for the budget, not the residual's slot value. No strain survives.

## TETHER (primary, verbatim, per domain)

Cited against local `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs.

**Domain 1, survey and instrument.**
- Fig 6 :33 "Nobody specified a telescope from an account of Mars." -> instruments are improved from instruments already returning something; reprocessing Kepler is licensed, inventing an instrument from a description is not.
- Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." -> the few-detections bottleneck is a real link, not a rounding error.
- Fig 11 :48 "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual." -> star-kind slots and completeness maps are enumerated from catalogs.
- Status: **triangulated** across Fig 6 and Fig 3 and Fig 11, three distinct figure routes, low overlap.

**Domain 2, stellar demographics.**
- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> one rate per star kind.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." -> an aggregate is not the answer.
- Fig 13 :39 "Six members that overlapped would be fewer members wearing six names." -> Gaia revisions that move hosts across spectral boundaries collapse slots; the epoch must be stated.
- Status: **triangulated**, the slot rule plus the overlap warning.

**Domain 3, habitability definition.**
- Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." -> rocky, HZ and host kind are conjoined conditions and become columns.
- Fig 9 :32 "you get a kind of thing, never the answer itself" -> the framework returns the form of the table, not a filled cell.
- Status: **triangulated** for the union rule across Fig 9 and the canonical README; the specific radius and HZ bounds are **gap**, imported from climate and mass-radius science.

**Domain 4, verification and mission design.**
- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." -> the measurement settles a cell; a baseline does not.
- Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool" -> multiple analyses of one Kepler catalog are one witness.
- Fig 2 :42 "Buy independence in proportion to the cost of being wrong." -> the cost is borne by HWO design, so transit, radial velocity and imaging independence is worth buying.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." -> SAG13 and mission baselines are filters.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." -> zero HZ detections is not zero planets.
- Fig 13 :134 "Unreachable is a verdict here, not a silence" -> the numeric question is a gap from the figures, reported as such.
- Status: **triangulated** across Fig 2, Fig 9, Fig 8 and Fig 13.

**Overall figure verdict for the number itself: `gap`.** The figures contain no stellar luminosity function, no completeness map and no climate model. No line closes that residual. The instruction is OUTWARD import with a source gate, not SEARCHED or INWARD (local `THE_FORMULA.md` keeps those three questions distinct).

## WORLD (secondary sources read)

World sources are corroboration only and never overrule the figures. Each entry gives field, author / venue / year, quote, prediction and status.

- **Exoplanet demographics / review.** Rachel B. Fernandes, Samson Johnson, Galen J. Bergsten et al., Publications of the Astronomical Society of the Pacific, 2025: "there is little evidence of convergence in estimates of η⊕ after 2019." Predicts that agreement among analyses is not evidence that the rate is settled; corroborates Fig 2 :29 and Fig 7's agreement-compounds claim. Overlap: the review compiles many studies, several citing one another, so its "dispersion" is one pool described from inside.
- **M-dwarf occurrence / primary study.** Galen J. Bergsten, Ilaria Pascucci, Kevin K. Hardegree-Ullman et al., The Astronomical Journal 166, 234, 2023: "the current Kepler sample does not offer evidence to support an increase in η⊕ from FGK to M stars." Predicts that star-kind slots are currently consistent within large errors and that no richness ranking is licensed; corroborates the slot rule and the refusal to rank (C1, C3). Overlap: same survey (Kepler) as the FGK estimates, so not an independent instrument.
- **M-dwarf occurrence / same study, catalog revision.** Bergsten et al., AJ, 2023: after Gaia revisions there is "only one partially reliable Earth-sized candidate" in the optimistic HZ and zero in the conservative one, yet a forward model returns a nonzero rate. Predicts that non-detection must not be read as absence; corroborates Fig 8 :39. Overlap: same survey and author pool.
- **Mission design / NASA presentation.** Jon M Jenkins, NASA Ames, SPIN 2024, NTRS record 20240003044: "Estimates of η⊕ vary from near 0.0 to >1.0" (from the public PDF preview returned by the search tool). Predicts that a single planning value is a budget filter; corroborates Fig 9 :60. Overlap: design frame, not a measurement.
- **Search and shape / essay.** Isaiah N, "The Library of Babel: Locating The Book of Books", 2026-10-02: "You can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." Predicts a narrowed shape rather than a filled cell; corroborates Fig 9 :32. Overlap: high, framework author.
- **Instrument discrimination / essay.** Isaiah N, "The Hard Problem is About Source", 2026-08-28: "If several paths create the same behavior, then behavior is a projection with lossy information." Predicts that a single rate cannot disclose whether it came from a separable extrapolation or a stripped-core population; corroborates the provenance requirement. Overlap: high, framework author.
- **Validation / essay.** Isaiah N, "The Recursive Self-Improvement Trap", 2026-11-19: "Only the ground can settle it." Predicts that consensus cannot close the numeric gap; corroborates Fig 2 :29. Overlap: high, framework author.
- **Community venue / NASA page.** ExoPAG 35 overview, NASA Science, 2026-10-16: "Community input is welcome and encouraged any time" via anonymous online forms; SIG 2 covers exoplanet demographics. Predicts an opt-in route to the right closure; corroborates the distribution rule in `04`. Overlap: institutional source, distinct from the essays.

No world source conflicts with the figure verdict; the conflict rule was not triggered. Most sources share the Kepler evidence pool, and three essays share an author with the figures, so their agreement is expected and carries little independent weight. This is stated rather than hidden.

## VERDICT (from the figures)

The figures settle the shape and refuse the number. The shape: one rate per star-kind slot, with the conjoined rocky, HZ and host-kind conditions unbundled into columns, zero detections reported as non-detections, the anchor being the measurement rather than consensus, and the cell values imported from the measurement literature with their credible intervals. The number is a `gap` from the figures; even in the world literature the estimates for Sun-like stars span roughly 0.05 to 0.6 and the 2025 review finds no convergence after 2019. The updated M-dwarf analysis finds no evidence that small stars are richer in Earth-sized HZ planets. This is a `specified`, ungrounded result; the status of the numeric question is `candidate` until the ground settles each cell.

- **cost if wrong:** bounded and locatable. The packet states its mode, refuters and provenance before the conclusion, so an error is findable. The real cost is external: a single aggregate number drives HWO aperture, throughput and cost decisions (Jenkins 2024), and an aggregate can be wrong for every individual star kind. That cost is why Fig 2 :42 says "Buy independence in proportion to the cost of being wrong."
- **undoable:** yes. The table can be corrected cell by cell; no primitive has to be withdrawn. A star-kind row can be redefined when a new catalog appears, and a non-detection can be upgraded to a measurement. A sent claim can be superseded by the corrected table.
- **reversed by:** a ground reading, not agreement. A measurement in the η⊕ regime that fills a cell with measured completeness would settle that cell; an instrument that separates born-rocky planets from stripped cores would fix the composition condition; star-kind definitions stable across catalog epochs would stabilize the rows. A figure re-census that produced a numerical rate from the six-term set alone would close the `gap`, and none of the thirteen figures currently does. Prestige or consensus is not such an instrument.

## Sources

- [The figures, as text (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [Are We There Yet? Challenges in Quantifying the Frequency of Earth Analogs in the Habitable Zone](https://iopscience.iop.org/article/10.1088/1538-3873/ae215a)
- [No Evidence for More Earth-sized Planets in the Habitable Zone of Kepler's M versus FGK Stars](https://arxiv.org/html/2310.11613v1)
- [Improving Estimates of the Frequency of Earth-like Planets (NTRS)](https://ntrs.nasa.gov/citations/20240003044)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [ExoPAG 35 overview, NASA Science](https://science.nasa.gov/astrophysics/programs/exep/exopag/meetings/exopag35)
- [NASA Exoplanet Archive helpdesk](https://exoplanetarchive.ipac.caltech.edu/cgi-bin/Helpdesk/nph-genTicketForm)
