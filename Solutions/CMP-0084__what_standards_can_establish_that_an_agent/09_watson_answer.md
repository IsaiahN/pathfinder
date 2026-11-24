# WATSON answer: what standards establish empirical grounding of an ABM?

**Mode: `specified` on the substantive claims, `general` on the structural shape, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This run synthesizes `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*: "the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the question it reports on. No measurement was taken.

## QUESTION

Decide, in effect terms, what standards can establish that an agent-based model is empirically grounded rather than an illustrative story. Option A: treat a checklist (code archived, ODD written, stylised fact reproduced, paper peer reviewed) as proof of grounding. Option B: treat such checklists as gates on the budget and require a non-updating anchor, a per-slot residual, low-overlap evidence, discrimination among observationally equivalent mechanisms, a pre-registered refuter, and a recorded lineage before calling the model grounded. What each leads to: A mistakes a frame-internal quantity for the ground and spends the independence of the people checking it; B yields a checkable shape, written refuters, and a `candidate` verdict until a ground pays. This derivation takes B.

## DOMAIN CENSUS

R by arity, symmetry, scale; then one line per domain with actors / currency / anchor; partition or union; order by dependency.

- **R (the residual).** The gap between model output and the world's returns. Arity: a vector, indexed by object slot, not a scalar. Symmetry: not symmetric; a live miss on one slot is not exchangeable with a hit on another, and the relevant comparison is model against an external reading, not frame against frame. Scale: the model runs at the agent scale, the ground returns at the observation or experiment scale, with a lossy membrane between. Question type: a union compound, not one hard question, because grounding bundles reproducibility, documentation, calibration, independent validation, and mechanism discrimination. Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."
- **Domain 1, the model frame.** Actors: agents, rules, parameters, initial conditions, stochastic seeds, interaction topology. Currency: outputs, coverage, compression, rule count, credibility. Anchor: should be the ground; in an illustrative story it is a frame-internal metric. Partition boundary question: what composes and what may be admitted as a term.
- **Domain 2, the ground.** Actors: measurements, datasets, field records, interventions, instruments. Currency: observations o'. Anchor: the ground itself, which must not update on the model. Nameable anchors exist (held-out data, independent instruments, the real-world data-generating process in Windrum et al.), so this is a domain to score.
- **Domain 3, the verification and validation frame.** Actors: reviewers, repositories, auditors, the reader of the packet. Currency: residuals and provenance. Anchor: the ground, never agreement among reviewers. In this simulated run all three domains draw on one evidence pool, so this domain's independence is zero.
- **Order by dependency.** Describe the residual before choosing a standard (Fig 9 :27-28); fix the objective before designing the test (Fig 3); keep provenance last because it records the run (Fig 13 :127). Work on documentation cannot rescue a model with no named anchor, because the chain is ordered by dependency and not by importance.

Strain test applied. No figure line was kept by forcing it. One live strain is named in the verdict.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`; quotes are verbatim from the SVGs. Verdicts are kept separate per domain, never averaged.

**Domain 1, the model frame.**

- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> grounding must be reported per slot. **Triangulated** with Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." Low overlap between the indexing rule and the averaging warning.
- Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." -> coverage, compression, rule count, badges, and prestige are disqualified as evidence of contact. **Triangulated** with Fig 5 :48 "Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."
- Fig 12 :117 "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." -> pattern-equivalent models are isomers; a pattern test cannot discriminate them. **Single-source** for the figure definition; the model-level mapping is strained on operand type and is marked as such.

**Domain 2, the ground.**

- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." -> the anchor test. **Triangulated** with Fig 2 :33 "The anchor must not update." Same figure, distinct clauses; low overlap with the model-frame census.
- Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence." -> held-out data and independent instruments. **Triangulated** with Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool" and Fig 7 :13 "agreement compounds, evidence does not".
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." -> failure to falsify is not confirmation. **Single-source** within the figure set, corroborated in world by Windrum et al.'s underdetermination discussion.

**Domain 3, the verification frame.**

- Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." -> send the residual, not the source. **Triangulated** with Fig 10 :52 "Bring a characterised residual, never the source." and Fig 9 :51 "evidence bearing on the residual is admissible; evidence bearing only on its maker is a stake-inducing channel, and the verifier is denied it".
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." -> submission venues and review badges are filters. **Triangulated** with Formula step 5, "A gate is not the ground."
- Fig 13 :127 "The array cannot be checked by inspection, so the record is what makes it verifiable." -> lineage is part of the claim. **Single-source** for the checkability claim; corroborated in world by the CoMSES documentation criteria.

**Cross-domain limits.**

- Fig 9 :44 "Only a sealed room can be searched to the end, and no frame is a sealed room." -> no standard certifies completeness. **Triangulated** with Fig 13 :134 "Unreachable is a verdict here, not a silence".
- Fig 9 :32 "you get a kind of thing, never the answer itself" -> the mapping to named standards is a binding, not a name from the framework. **Triangulated** with the canonical figures README.
- Fig 9 :27-28 "describe it before you go looking, or any frame you pick will seem to fit" -> describe the residual before choosing a standard. **Single-source** within the figures; corroborated in world by the SEP curve-fitting point.

**Gap.** No figure line names ODD, TRACE, FAIR, or any institutional standard. This is a gap in the *mapping*, not in the figures: the framework returns a shape, not a name. The named standards come from world sources and are single-source and ungrounded.

## WORLD (secondary sources read)

World sources are corroboration only. Overlap is declared. Agreement from one evidence pool is one witness, not two.

- **Social simulation, ABM validation.** Paul Windrum, Giorgio Fagiolo and Alessio Moneta, "Empirical Validation of Agent-Based Models: Alternatives and Prospects", *Journal of Artificial Societies and Social Simulation* 10(2)8, 2007, https://www.jasss.org/10/2/8.html. Quote: "it is impossible for statistical inference to decide between hypotheses that are observationally equivalent." Predicts that pattern reproduction cannot discriminate models; corroborates the C2 figure verdict. Overlap: different field from the framework, but it is the target field; secondary only.
- **Social simulation, concrete ABM.** Eric Pulicka, Patrick Korth, Patrick Grima and Jiin Jung, "Modeling Interaction Effects in Polarization", JASSS 19(2)1, 2016, https://www.jasss.org/19/2/1.html. Quote: "Hidden in standard deviation as a single measure, however, is an important interference effect between our two social reinforcers." Predicts that a global statistic hides a live slot; corroborates Fig 1. Overlap: same journal pool as Windrum et al.; counts as one witness for the field, not two independent ones.
- **Verification infrastructure.** CoMSES Net, "Computational Model Library Peer Review", https://www.comses.net/reviews/, accessed 2026-11-22. Quote: "Reviewers are not required to assess the theoretical soundness, scientific merit, or validity of model outputs." Predicts that the field's own badge is a gate; corroborates the Formula step 5 verdict directly. Overlap: institutional source, distinct from the framework pool.
- **Standards catalogue.** CoMSES Net, "Standards", https://www.comses.net/resources/standards/, accessed 2026-11-22. Quote: "1. Purpose and patterns, i.e., it also lists the patterns observed in reality which will be used to claim that the model is realistic enough for its purpose." Predicts that documentation standards touch grounding only as a claim to be tested; corroborates Fig 10 :49. Overlap: same institution as the peer review page, so one witness.
- **Philosophy of science.** Roman Frigg and Stephan Hartmann, "Models in Science", *Stanford Encyclopedia of Philosophy*, Fall 2026 Edition, https://plato.stanford.edu/entries/models-science/. Quote: "This can lead to an increase in empirical adequacy... but not necessarily to a better understanding of the underlying mechanisms." Predicts that empirical adequacy is not grounding; corroborates Fig 1 :27. Overlap: low, distinct field and distinct evidence pool.
- **Perception and instrumentation.** Isaiah N, "The Hard Problem is About Source", adventuresinml Substack, 2026-08-28. Quote: "If several paths create the same behavior, then behavior is a projection with lossy information." Predicts that a discriminating instrument is needed where mechanisms are observationally equivalent; corroborates Fig 12 :117. Overlap: high, framework author; weak corroboration.
- **AI validation.** Isaiah N, "The Recursive Self-Improvement Trap", adventuresinml Substack, 2026-11-19. Quote: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." Predicts that badges and reputation cannot ground a claim; corroborates Fig 9 :60. Overlap: high, framework author; weak corroboration.
- **Metascience.** Monya Baker, "1,500 scientists lift the lid on reproducibility", *Nature* 533, 452-454, 2016, https://www.nature.com/articles/533452a. Quote from the public page: "Survey sheds light on the 'crisis' rocking research." Full text paywalled. Predicts that reproducibility is a live concern; corroborates the need for gates but supplies no figure line. Overlap: low, distinct field. Used weakly.
- **Framework canonical usage.** Isaiah N, figures README, local copy `FRAMEWORK/reference/FIGURES_README_canonical.md`. Quote: "what a missing thing would have to look like (a shape, not a name)". Predicts a shape and a recorded stop; corroborates Fig 9 :32. Overlap: high, framework primary; not independent.

No world source conflicts with the figure verdict; the conflict rule was not triggered. The essays share an author and an evidence pool with the figures, so their agreement is weak. The genuinely low-overlap witnesses are Frigg and Hartmann, the CoMSES pages, and Windrum et al.; even those three overlap with one another on the target field, so they are not three independent confirmations of the same claim.

## VERDICT (from the figures)

Grounding is a relation to a non-updating anchor, not a certificate a model can issue about itself. The figure verdict, kept separate by domain: D1, self-produced metrics and aggregate fit are disqualified (Fig 1 :19, :22, :27; triangulated); D2, a non-updating anchor and low-overlap evidence are required (Fig 2 :29, :31, :40; triangulated); D3, verifier non-access, pre-registered refuters, and lineage are required (Fig 10 :42, :52; Fig 13 :127; triangulated for non-access, single-source for lineage). Observation-equivalent mechanisms need a discriminating instrument (Fig 12 :117; single-source for the figure definition, strained on operand type). Existing documentation standards are necessary gates and insufficient witnesses (Formula step 5; Fig 9 :60; triangulated). No standard certifies completeness (Fig 9 :44; Fig 13 :134; triangulated). The named institutional standards are a world-sourced mapping, not a figure name, and stay `specified` and single-source. The verdict is `specified`, ungrounded, `candidate`.

- **cost if wrong:** bounded and locatable. The packet states mode, three checkable sub-claims, verbatim lines, and refuters before the conclusion, so an error is findable rather than invisible. The real cost is spending the independence of outside readers by treating a badge as a verdict; Fig 2 :42 "Buy independence in proportion to the cost of being wrong." That cost is avoidable by leading with the shape claim and its refuter.
- **undoable:** yes. No primitive is withdrawn. A specific standard can be added, relabelled as a gate, or replaced by a better one without touching the shape. A sent claim can be superseded by a corrected packet with a dated note.
- **reversed by:** a ground reading, not agreement. A registered replication in which a verifier who never saw the model's interior predicts a held-out per-slot residual correctly; a discriminating measurement that separates two mechanisms fitting the same pattern; a standard shown to change contact with no self-produced criterion; a dataset shown to move when the model is re-calibrated (which breaks the anchor test); or a figure re-census that names a sufficient standard (which breaks the mapping gap). Until one of these fires, the verdict stands as `candidate`.

## Sources

- [The figures, as text (local extract, the authority for every Fig N :line)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [THE SEAT MAP Field Guide, amended (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_SEAT_MAP_Field_Guide_amended.md)
- [Empirical Validation of Agent-Based Models: Alternatives and Prospects](https://www.jasss.org/10/2/8.html)
- [Modeling Interaction Effects in Polarization](https://www.jasss.org/19/2/1.html)
- [CoMSES Net Computational Model Library Peer Review](https://www.comses.net/reviews/)
- [CoMSES Net Standards](https://www.comses.net/resources/standards/)
- [Models in Science, Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/entries/models-science/)
- [1,500 scientists lift the lid on reproducibility](https://www.nature.com/articles/533452a)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [Decoding Tacit Knowledge](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [They're Scanning Books When They Should Be Studying Nature](https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should)
- [How Intelligence Actually Works](https://adventuresinml.substack.com/p/how-intelligence-actually-works)
- [How a Society of Agents Would Work](https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work)
- [Arrival of the Fittest: The Tether Architecture](https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether)
