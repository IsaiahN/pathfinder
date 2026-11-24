# WATSON answer: which Earth-system processes are most poorly represented in global models?

**Mode: `general` on the ranking rule, `specified` on the candidate set. Not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This WATSON run synthesizes `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the question it reports on. No model was run and no instrument was read.

## QUESTION

Decide, in effect terms, what the Tether says about the question: which Earth-system processes are most poorly represented in global models? Option A: name a process as the settled worst. Option B: return the shape any answer must have, keep candidate processes as `specified` witnesses, and stop where no per-slot instrument settles the rank. What each leads to: A sends a `general`-mode verdict presented as `grounded` and directs effort to processes whose instruments already exist; B sends a checkable shape, written refuters and an open top slot until the ground settles it.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor, partition or union, and order by dependency.

- **R (the residual).** A model's parameterization prediction minus observation, indexed by process slot. Arity: one residual per slot over atmosphere, ocean, ice, land, ecosystems, aerosols, clouds and carbon-cycle processes. Symmetry: slots are not interchangeable; compensating errors allow a global score near zero with one live slot residual. Scale: step (a subgrid scheme), cycle (feedback), level (component to Earth system), seat (evaluation community), lineage (model generations). Fig 9 names this a union compound: four conditions in one question.
- **Domain 1, the model frame.** Actors: grid cells, schemes, tunable parameters. Currency: description length and closure(Γ). Anchor: none internal; the frame cannot score itself.
- **Domain 2, the ground.** Actors: satellites, in-situ probes, laboratories, field campaigns, paleo reconstructions. Currency: observations. Anchor: a measurement that does not move when models push on it.
- **Domain 3, the membrane and dependency chain.** Actors: unresolved processes and the schemes that stand in for them. Currency: what crosses subgrid to grid. Anchor: the round-trip gap. This is where the residual concentrates.
- **Domain 4, the evaluation frame.** Actors: models and intercomparisons. Currency: spread and agreement. Anchor: the ground, never the agreement. Independence is low when models share tuning data.
- **Domain 5, the ground-maintenance seat.** Actors: instrument builders and experimentalists. Currency: conventions and instruments. Anchor: the ground kept reachable. May author conventions, never the verdict.
- **Order by dependency (Fig 3):** perceive the process, acquire a term for it, state what counts as progress, plan the improvement, carry it to the next generation. Classify the condition before choosing the search; SEARCHED before INWARD and OUTWARD (formula step 7).

Strain test applied: the four conditions are isomers over the same atoms with different failing bonds (Fig 12), so one lever cannot clear all four. No strain after re-census. One live strain is carried: the operand type of the comparison at second order.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs.

**Domain 1, the model frame.** Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> the unit of the question is the slot, not a global score. Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." -> a global skill score is the quantity that hides the answer. [triangulated with Fig 5 per-slot ranking; low overlap between the agent loop and the mint pipeline]

**Domain 2, the ground.** Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." -> only an unmoving instrument may rank. Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence." -> models tuned to the same products are one witness. Fig 2 :42 "Buy independence in proportion to the cost of being wrong." -> instrument effort follows the cost of a wrong rank. [triangulated across three separate clauses of Fig 2 plus Fig 7 :13]

**Domain 3, the membrane and chain.** Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." -> the worst slot is predicted at an unmeasured middle link. Fig 6 :34 "Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there." -> inward extension requires an instrument already returning something. [triangulated: dependency chain and closure/reachability have different subject matter]

**Domain 4, the evaluation frame.** Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" -> spread and agreement are budget filters, never witnesses. Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." -> a recipient who holds the framework before checking cannot check it. [triangulated across Fig 2 and Fig 10]

**Domain 5, the shape limit.** Fig 9 :32 "you get a kind of thing, never the answer itself" -> the figures return a slot shape, never a process name. Fig 8 :39 "So a search that finds nothing is never a proof of absence." -> no opened per-slot comparison is a report of the search, not evidence that none exists. [single-source for the figure phrasing, corroborated by the canonical usage rule]

**Ranking rule and order.** Fig 5 :59 "a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at" -> rank by persistence and non-improvement, not one-off size. Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world." -> the cross-process ranking is second-order. Fig 12 :125 "A composition costs in two currencies, and they do not add." -> description bits and settlement actions stay separate. [triangulated across Fig 1, Fig 5 and Fig 12]

## WORLD (secondary sources read)

World sources corroborate; they cannot overrule a figure. Overlap is declared, not hidden. W1 to W8 are field sources. E1 to E8 are essays by the framework author, so their agreement with the figures is expected and carries little independent weight.

- **Atmospheric science / cloud microphysics.** Morrison et al., *Journal of Advances in Modeling Earth Systems*, 12(8), 2020 (W1): "The representation of microphysical processes in models continues to pose a major challenge leading to uncertainty in numerical weather forecasts and climate simulations." Predicts an unsettled process-rate slot; corroborates Fig 3 :27.
- **Climate modelling / aerosol-cloud interaction.** Wang et al., *Nature Communications* 17, 627, 2026 (W2): "all models largely underestimate cloud cover responses to aerosols, with five of them outside the 90% confidence level." Predicts a persistent non-trending residual despite tuning; corroborates Fig 5 and Fig 1 :22.
- **Climate modelling / uncertainty quantification.** Pirzada, Dunbar, Garbuno Iñigo, Wu and de Souza, Caltech CliMA, 2021 (W3): "the primary source of uncertainty are approximations of processes that cannot be explicitly resolved, such as turbulence in atmosphere and oceans and the convection sustaining clouds." Predicts that the residual lives at the membrane; corroborates Fig 3 and Fig 4.
- **Biogeochemistry / permafrost.** Schuur et al., *Nature* 520, 2015 (W4): "the magnitude and timing of greenhouse gas emission from these regions and their impact on climate change remain uncertain." Predicts an unsettled term; corroborates the four-condition split.
- **Cryosphere / ice-sheet modelling.** DeConto and Pollard, *Nature* 531, 2016 (W5): "previously underappreciated processes linking atmospheric warming with hydrofracturing of buttressing ice shelves and structural collapse of marine-terminating ice cliffs." Predicts an absent term needing a source gate; corroborates Fig 6 outward import.
- **Climate assessment.** Forster et al., IPCC AR6 WG1 Chapter 7, 2021 (W6): "the cloud feedback remains the largest contribution to overall uncertainty." Predicts a leading candidate in one objective only; corroborates the candidate table but conflicts with any reading that turns it into a cross-process verdict. The conflict sends us back to the census, not to a new verdict: the figure limit on naming remains.
- **Systems theory / statistics (low overlap).** Wikipedia, "Equifinality" and "Simpson's paradox", accessed 2026-11-22 (W7, W8): "distinct configurations of model components (e.g. distinct model parameter values) can lead to similar or equally acceptable simulations"; "a trend appears in several groups of data but disappears or reverses when the groups are combined." Predicts source underdetermination and aggregation hiding a signal; corroborates Fig 9 :32 and Fig 1 :22.
- **Metatheory / source discrimination.** Isaiah N, "The Hard Problem is About Source", 2026 (E7): "If several paths create the same behavior, then behavior is a projection with lossy information." Predicts that an optical-depth reading cannot name its source; corroborates the call for a discriminator instrument. High overlap with the framework.
- **Search / shape.** Isaiah N, "The Library of Babel: Locating The Book of Books", 2026 (E5): "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." Predicts a narrowed shape; corroborates Fig 9 :32.
- **Validation / simulation status.** Isaiah N, "The Recursive Self-Improvement Trap", 2026 (E2): "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." Predicts that this derivation cannot settle its own claim; corroborates its simulated status.
- **Tacit knowledge / effect terms.** Isaiah N, "Decoding Tacit Knowledge", 2026 (E3): "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." Predicts describe-the-residual-first outreach; corroborates Fig 10 :52.
- **Multi-agent frames.** Isaiah N, "How a Society of Agents Would Work", 2026 (E4): "The group's agreement is never the verdict." Predicts that a model ensemble cannot rank processes; corroborates Fig 2.
- **Provenance / generators.** Isaiah N, "How Intelligence Actually Works" (E1) and "They're Scanning Books When They Should Be Studying Nature" (E6), 2026: "indiscernibility is not identity"; "Declaring the primitives does not make them neutral. It makes the choice visible." Predicts that a global score reproducing observations is a projection, not a ground verdict; corroborates the honest stop.
- **Canonical architecture.** Isaiah N, "Arrival of the Fittest: The Tether Architecture", 2026 (E8): the triangulation claim "fits four cases already known and has not been tested forward." Predicts that candidate selection needs forward testing; corroborates the `specified` label.

No world source overrides a figure. The one apparent conflict (W6's objective-specific "largest contribution" versus a cross-process verdict) was returned to the census and resolved as a scope difference: W6 governs uncertainty in climate sensitivity, the question governs representation quality across processes. All sources are either field-specific or share the framework author, so their agreement with the figures is one evidence pool in different rooms, not independent corroboration.

## VERDICT (from the figures)

The question as posed is a union compound and must be unbundled before a process is ranked. The figures return a shape: rank per slot by a residual that persists and does not trend down, against an anchor that does not move when models push on it, with absent, mis-attached, unsettled and hidden conditions kept separate, and the cross-process comparison treated as second-order. They do not name a process. World sources nominate cloud microphysics and aerosol-cloud interaction, marine ice-sheet dynamics, and permafrost carbon feedback as `specified` candidates, with no `grounded` order. No opened source supplies a cross-process, per-slot instrument comparison, so the top slot stays open. This is `general` on the rule and `specified` on the candidates.

- **cost if wrong:** bounded if the shape claim is kept separate from the candidate list. The real cost is effort landing above the dependency break, where instruments already exist, while the unmeasured middle link stays broken (Fig 3 :19). A second cost is spending the independence of outside readers by sending a name instead of a generator (Fig 2 :42). Both are avoidable by leading with the per-slot claim and its refuter.
- **undoable:** yes. The candidate ranking is an allocation of checking effort, not a primitive. A per-slot instrument comparison can replace the candidate order without withdrawing the shape, and no term has to be deleted from the record.
- **reversed by:** a ground reading, not agreement. A process-level instrument showing that the worst residual lies above the broken link; a consensus ranking that changes what an instrument returns; one candidate residual trending down while unlisted slots persist; one protocol collapsing all four conditions; a figure re-census that ranks two processes by name. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [The figures, as text with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [Confronting the Challenge of Modeling Cloud and Precipitation Microphysics](https://pmc.ncbi.nlm.nih.gov/articles/PMC7507216/)
- [Challenges in global climate models to represent cloud response to aerosols](https://www.nature.com/articles/s41467-025-67359-3)
- [Quantifying Parameter and Structural Uncertainty in Climate Modeling](https://clima.caltech.edu/2021/05/13/quantifying-parameter-and-structural-uncertainty-in-climate-modeling/)
- [Climate change and the permafrost carbon feedback](https://www.nature.com/articles/nature14338)
- [Contribution of Antarctica to past and future sea-level rise](https://www.nature.com/articles/nature17145)
- [IPCC AR6 WG1 Chapter 7: The Earth's Energy Budget, Climate Feedbacks, and Climate Sensitivity](https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-7/)
- [Equifinality](https://en.wikipedia.org/wiki/Equifinality)
- [Simpson's paradox](https://en.wikipedia.org/wiki/Simpson%27s_paradox)
- [How Intelligence Actually Works](https://adventuresinml.substack.com/p/how-intelligence-actually-works)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [Decoding Tacit Knowledge: Why Context, Subtext, and Pretext Matter](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [How a Society of Agents Would Work](https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [They're Scanning Books When They Should Be Studying Nature](https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [Arrival of the Fittest: The Tether Architecture](https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether)
