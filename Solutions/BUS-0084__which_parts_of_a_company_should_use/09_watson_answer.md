# WATSON answer, BUS-0084

**Mode: `specified`, not `grounded`.** Figures are primary and decide. World sources are secondary, corroborate but never overrule, and a conflict returns the derivation to the domain census. This is a simulated derivation checked for internal consistency against the figures, not a ground reading.

## QUESTION

Which parts of a company should use AI for recommendations, and which should allow it to make decisions autonomously?

Restated as an effect: for which decision slots does R = |Γ(b,a) - o'| stay small when Γ selects action a directly, and for which slots does it grow unless a person selects the action? R is indexed per decision slot, never per department and never aggregated (Fig 1 :19). Anchor: the realized outcome that does not change when the AI's prediction pushes on it (Fig 2 :29-30). The offered either/or is refused as a partition; the question is a union of four conditions (Fig 9 :54).

## DOMAIN CENSUS

Arity: a three-place relation (AI library Γ, action, realized outcome), indexed by slot and ordered by time; carries an ordered bond and a comparison bond, not a symmetric one. Symmetry: "autonomous" is a threshold on a decision-rights variable (Fig 12 :85-89). Scale: the single slot loop, the population of slots in a company, the time channel across repeated decisions, and the regulatory habitat; the membrane between scales is lossy (Fig 4).

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Decision slot loop | AI system, operator where present, action | action and residual reduction | realized outcome per slot | admitted |
| D2 Organisational habitat | managers, workers, incentives, compliance | survival, cost, risk, throughput | realized performance and loss per slot | admitted |
| D3 Ground of each decision | customer, patient, machine, market, regulator | the outcome it returns | non-updating referent (Fig 2 :29-30) | admitted, conditional on anchor test |
| D4 Oversight seat | checker, audit, regulator | independent refusal | the ground, never agreement (Fig 10 :42) | admitted |
| X1 Department as the unit of analysis | org chart, headcount | budget | none independent of its slots | not a domain; absorbed into D2 |
| X2 Trust in AI as ground | users, adopters | stated confidence | none; moves when pushed | not a domain; absorbed into D4 |
| X3 Model accuracy as ground | the model, the benchmark | benchmark score | none; frame-internal (Fig 1 :27) | not a domain; absorbed into D1 |

Union, not partition: C1 anchor, C2 anchor legitimacy, C3 verdict or convention, C4 non-reconstructing checker; D1/D3 and D2/D4 form two compounds (Fig 9 :54-57). Dependency order: perception -> vocabulary -> objective -> planning -> learn and carry (Fig 3 :4-15). Recommendation tolerates a break at objective; autonomy does not.

Strain test applied: an early attempt to apply Fig 13's six physical terms to decision rights only fit by renaming decision rights as kinds of energy, so Fig 13 is retained for the honest-stop role only (S4). No other strain after re-census except the open operand type of `⋛` at second order, named in TETHER below.

## TETHER (primary, verbatim, per domain, low-overlap fields first)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs.

**D1 Decision slot loop, status triangulated (Fig 1 and Fig 4, per-slot indexing versus membrane).**

- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> the slot, not the department, is the unit.
- Fig 4 :20 "it or a thousand. Only the actors, the currency and the anchor change." -> the same kernel applies at one slot and across a population of slots; only the anchor is re-named.
- Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." -> most governance budget lands above the break.

Reading: a department is a bundle of slots; a department-wide rule is a single lever on a union. Mode `general` for the structure, `specified` for the company application. Refuter: a department-wide rule that keeps R small on every slot across a habitat change.

**D2 Organisational habitat, status triangulated (Fig 11 and Fig 2, valence versus anchor rule).**

- Fig 11 :39 "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone." -> granting decision rights changes authority, not contact.
- Fig 11 :40 "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves." -> a better model in the same slot may improve accuracy without moving R.
- Fig 2 :30 "you push on it, it is not an anchor." -> adoption, trust and accuracy are not grounds.

Reading: the allocation is a property of the AI-and-slot, not of the AI and not of the org chart. Mode `specified`. Refuter: an agent-only autonomy grant that moves the ground-verified residual down across a habitat change.

**D3 Ground of each decision, status triangulated (Fig 2 :29, :36-38, Fig 1 :23, distinct clauses).**

- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome." -> the realized outcome is the anchor.
- Fig 2 :36 "An anchor is legitimate when the question is constitutively about it." -> legitimacy depends on what the question is about.
- Fig 2 :37 "Human judgment is the right anchor for is this a good answer for a person, because the question is about people." -> for questions about people, the AI is an instrument, not the anchor.
- Fig 2 :37-38 "It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure." -> for checkable states, a measurement is the anchor.
- Fig 1 :23 "The ground enters as the only metric." -> accuracy and adoption are not the metric.

Reading: this is the decisive allocation rule, and it is not a department list. Mode `specified`. Refuter: a slot whose ground moves with the prediction yet still justifies autonomy, or an instrument as legitimate anchor for a question about a person.

**D4 Oversight seat, status triangulated (Fig 10 and Fig 2, non-access versus valence).**

- Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." -> the checker needs non-access, not a copy of the reasoning.
- Fig 10 :52 "Bring a characterised residual, never the source." -> send the residual and refuter before the framework.
- Fig 10 :24 "the ground does not decay, the channel does" -> fast failure is channel failure.
- Fig 10 :26 "stale percepts, dropped transients, saturated metrics, pooled readings" -> the named decay modes.
- Fig 7 :37 "Progress per handoff has two factors. Zero either and the chain runs in place:" -> fidelity times ground pressure.
- Fig 7 :38 "the bracket's fidelity across the handoff", Fig 7 :39 "the ground's pressure on the room"
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" -> a rubber stamp is one frame wearing two names.
- Fig 2 :41 "efficient for a convention: agreement about a shared meaning is the product, not a corruption of it" -> conventions need no independence.
- Fig 2 :42 "Buy independence in proportion to the cost of being wrong." -> independence is proportional, not maximal.
- Fig 2 :43 "Guard, from Figure 10: a convention that decides an outcome has stopped being one." -> a convention that decides an outcome is a verdict in disguise.

Reading: verdict slots require a genuinely separate checker; convention slots do not; a convention that decides an outcome has changed kind. Mode `specified`. Refuter: a verdict settled by pooled agreement, or a checker that reconstructs the decision and refutes at the independent rate.

**Structure, order and cost, status triangulated (Fig 12 and Fig 3).**

- Fig 12 :5 "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." -> model inventory is not decision-rights arrangement.
- Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." -> recommendation and autonomy are isomers over the same model, data and people.
- Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world" -> a settled slot becomes an atom for the next comparison.
- Fig 12 :125 "A composition costs in two currencies, and they do not add." -> description cost and settlement cost must be held apart.
- Fig 12 :130 "Summing them into one figure is the error this names, not the fix for it." -> a single governance score is the named error.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." -> a maturity score is a filter.

Reading: two slots with the same AI but different decision-rights bonds are different substances. The operand type of `⋛` at second order is strained, not smoothed: the Operators table defines it as *"a threshold relation between two quantities"*, and whether a settled slot now serving as an atom counts as a quantity at that level needs an instrument, not an argument.

**Naming the specific slots to automate, status `gap`.** No figure line governs this after a full census of thirteen figures, the Operators and Symbols tables, and eight essays. Fig 9 :32 "you get a kind of thing, never the answer itself", Fig 13 :134 "Unreachable is a verdict here, not a silence,", Fig 8 :39 "So a search that finds nothing is never a proof of absence." The missing thing is a per-slot source-discriminating instrument, characterized in effect terms but not held here.

Triangulation summary: the per-slot unit is triangulated across Fig 1 and Fig 4 (low topical overlap). The anchor rule is triangulated across Fig 2 :29 and :36-38 and Fig 1 :23. The verdict/convention rule is figure-internal to Fig 2 but its two clauses are distinct and low-overlap with the Fig 10 convention guard. The capability claim is triangulated across Fig 11 and Fig 2 :30. The oversight claim is triangulated across Fig 10 and Fig 2. The isomer reading is single-source for the figure definition (Fig 12), with the organizational check still unmeasured. The `gap` is figure-governed across three figures. The `⋛` operand type is a live strain, named.

## WORLD (secondary, each source read; field, author/venue/year, quote, prediction, corroborates or conflicts)

**Organizational design and AI at work (one witness, not more).**

- **Business and organizational design.** Katherine C. Kellogg, Melissa A. Valentine and Angèle Christin, *Algorithms at Work: The New Contested Terrain of Control*, Academy of Management Annals 14(1), 2020, open reproduction read 2026-11-22. Quote: *"employers can use algorithms to direct workers by restricting and recommending, evaluate workers by recording and rating, and discipline workers by replacing and rewarding"*. Prediction: the recommendation versus replacement split is a control mechanism, not a department property. **Corroborates** F1 and the bond reading, but it shares one management evidence pool, so it counts as one witness (Fig 2 :31).

**Low-overlap fields (independent witnesses for mechanism shape).**

- **Regulation.** European Union, *AI Act, Article 14: Human oversight*, Regulation (EU) 2024/1689, consolidated 2026-07-27, AI Act Service Desk, read 2026-11-22. Quote: *"The oversight measures shall be commensurate with the risks, level of autonomy and context of use of the high-risk AI system"* and, in :4(b), *"the possible tendency of automatically relying or over-relying on the output produced by a high-risk AI system (automation bias), in particular for high-risk AI systems used to provide information or recommendations for decisions to be taken by natural persons"*. Prediction: oversight varies per system context, not per department. **Corroborates** C1 and C2 as a regulatory floor, not a measurement.
- **Labour economics.** Daron Acemoglu and Pascual Restrepo, *Automation and New Tasks: How Technology Displaces and Reinstates Labor*, Journal of Economic Perspectives 33(2), 2019, AEA abstract read 2026-11-22. Quote: *"At the center of our framework is the allocation of tasks to capital and labor, the task content of production"*. Prediction: the unit of automation is the task, not the occupation. **Corroborates** the per-slot unit, at a different stratum; it says nothing about corporate decision rights.
- **Human factors engineering.** Raja Parasuraman and Victor Riley, *Humans and Automation: Use, Misuse, Disuse, Abuse*, Human Factors 39(2), 1997, SAGE abstract and free full text read 2026-11-22. Quote: *"automation abuse, or the automation of functions by designers and implementation by managers without due regard for the consequences for human performance"*. Prediction: autonomy granted without a channel analysis is a named design failure. **Corroborates** C4 and F6 at the mechanism level.
- **Judgement and decision making, result one.** Berkeley J. Dietvorst, Joseph P. Simmons and Cade Massey, *Algorithm Aversion: People Erroneously Avoid Algorithms after Seeing Them Err*, Journal of Experimental Psychology: General 144(1), 2015, full abstract and methods read 2026-11-22. Quote: *"people are especially averse to algorithmic forecasters after seeing them perform, even when they see them outperform a human forecaster"*. Prediction: trust in an algorithm moves with observed errors. **Corroborates** the claim that trust is a channel variable, not a ground.
- **Judgement and decision making, result two.** Jennifer M. Logg, Julia A. Minson and Don A. Moore, *Algorithm Appreciation: People Prefer Algorithmic to Human Judgment*, Organizational Behavior and Human Decision Processes 151, 2019, Harvard Kennedy School abstract read 2026-11-22. Quote: *"lay people adhere more to advice when they think it comes from an algorithm than from a person"* and *"experienced professionals... relied less on algorithmic advice than lay people did, which hurt their accuracy"*. Prediction: reliance depends on framing and expertise. **Corroborates** the same conclusion from the opposite behavioural direction, so neither result can anchor a verdict. Different labs and tasks, so two witnesses to instability rather than one pool.

**Framework-internal essays, used for the canonical reading only, not as world witnesses.** Isaiah N, all eight essays, Adventures in Machine Learning, opened directly 2026-11-22 and listed in `05_what_shape_means.md`. Key quote from *The Hard Problem is About Source*: *"The answer is unreached until a better instrument exists."* Overlap with the figures is maximal (same author), so these carry no independent corroboration weight.

No world source conflicts with a figure verdict, so the conflict rule was not triggered. The apparently opposite trust findings were returned to the census and resolved as two readings of one channel variable, not as a dispute about the ground (S3). The essays all share the figures' author, and the lead essay itself says the triangulation claim *"fits four cases already known and has not been tested forward"*, so agreement here is expected and carries little independent weight.

## VERDICT (from the figures)

The shape survives; the offered partition does not. The unit is the decision slot. Autonomy is licensed only where four conditions hold, kept separate and never averaged: a nameable ground that does not update, a legitimate anchor type (human judgment for questions about people, a measurement for checkable states), a verdict-or-convention classification that sets how much independence to buy, and a checker that cannot reconstruct the decision. Capability lives in the AI-and-slot, so granting decision rights changes authority and not contact; fast failure is channel decay, not ground decay; recommendation and autonomy are different bonds over the same atoms, invisible in a model inventory. Which named roles to automate is a `gap`, a verdict and not a silence. This is a `specified`, ungrounded result. The strongest outreach point is the anchor rule: what a decision is about decides who or what should settle it, not how accurate the model is.

- **cost if wrong:** bounded and locatable. The packet is mode-labeled, states nine refuters before the conclusion and records the lineage, so an error is findable rather than invisible. The real cost is spending the independence of outside readers by sending a department list instead of a generator, which Fig 2 :42 prices (*"Buy independence in proportion to the cost of being wrong."*) and Fig 4 :25 names (*"A recording carried upward looks like knowledge and is a description of one occasion."*). That cost is avoidable by leading with the four conditions and their refuters.
- **undoable:** yes. No term is deleted if the claim fails; a refutation is added and the reach falls because something was added, not because anything was struck out (Fig 6 :42-43). The shape and its nine falsifiers are recorded in a provenance trail so a later reader can locate the error (Fig 10 :62-64). A sent claim can be superseded by the corrected packet, and no role has to be reclassified as forbidden.
- **reversed by:** a per-slot ground reading, not agreement. Any of the nine pre-registered falsifiers would fire, in particular a ground that moves with the prediction yet still justifies autonomy, a convention that silently decides a consequential outcome, an agent-only autonomy grant that moves the ground, or a checker that reconstructs the decision and still refutes independently. A source-discriminating per-slot instrument that separates a real anchor from a pooled metric would move the naming gap from `unreachable` toward grounded, and a figure re-census that admits `⋛` over two settled slots as quantities at second order would clear the live type strain. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [The figures, as text (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [THE SEAT MAP Field Guide (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_SEAT_MAP_Field_Guide_amended.md)
- [Article 14: Human oversight, EU AI Act Service Desk](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-14)
- [Automation and New Tasks, Acemoglu and Restrepo 2019](https://www.aeaweb.org/articles?id=10.1257%2Fjep.33.2.3)
- [Algorithm Aversion, Dietvorst, Simmons and Massey 2015](https://pubmed.ncbi.nlm.nih.gov/25401381/)
- [Algorithm Appreciation, Logg, Minson and Moore 2019](https://www.hks.harvard.edu/publications/algorithm-appreciation-people-prefer-algorithmic-human-judgment)
- [Algorithms at Work, Kellogg, Valentine and Christin 2020](https://doi.org/10.5465/annals.2018.0174)
- [Humans and Automation: Use, Misuse, Disuse, Abuse, Parasuraman and Riley 1997](https://journals.sagepub.com/doi/10.1518/001872097778543886)
- [The Library of Babel, Isaiah N 2026](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Recursive Self-Improvement Trap, Isaiah N 2026](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [The Hard Problem is About Source, Isaiah N 2026](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [Decoding Tacit Knowledge, Isaiah N 2026](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [How a Society of Agents Would Work, Isaiah N 2026](https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work)
- [They're Scanning Books When They Should Be Studying Nature, Isaiah N 2026](https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should)
- [Arrival of the Fittest: The Tether Architecture, Isaiah N 2026](https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether)
- [How Intelligence Actually Works, Isaiah N 2026](https://adventuresinml.substack.com/p/how-intelligence-actually-works)
