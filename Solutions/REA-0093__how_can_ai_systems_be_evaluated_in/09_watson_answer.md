# WATSON answer: how can AI systems be evaluated in real environments

**Mode: `specified` on the substantive claims, `general` on the structural shape. Not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This run synthesizes material already in `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the question it reports on. No deployment measurement was taken.

## QUESTION

Decide, in effect terms, what the Tether says about evaluating an AI system when the outcome that matters arrives late, is multi-valued, and depends on human behavior. Option A: treat a benchmark score as the evaluation and improve it. Option B: treat the score as a head start, name a legitimate non-updating outcome anchor, measure per-slot residual against it, enumerate the habitat, and keep low-overlap instruments. What each leads to: A lets a frame score itself with a quantity it also produces and spends the independence of the people checking it; B yields a checkable shape, written refuters, and an open verdict until the field settles it.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor. Partition or union. Order by dependency (Fig 3).

- **R (the residual).** Gap between the evaluation score and the real outcome, `R = |Γ(b,a) − o'|` per slot s. Arity: three conditions in contact (delay, ambiguity, human response), so a union compound, not one hard question (Fig 9 :54, :57-58). Symmetry: score and outcome are not interchangeable; the score is an instrument, the outcome is the anchor when legitimate (Fig 2 :36). Scale: score computed inside one frame, outcome arrives after the habitat has changed (Fig 4, Fig 11 :52-53).
- **Domain 1, evaluation frame.** Actors: benchmark designers, leaderboards, model builders, metric code. Currency: scores, coverage, compression, credibility. Anchor: none legitimate for this question; the score is frame-internal (Fig 1 :27). Verdict: not a verdict domain, a habitat actor and a head start.
- **Domain 2, deployment habitat.** Actors: users, institutions, affected third parties, the system as introduced actor, conditions (time, incentives, law). Currency: actual outcomes, harms, benefits. Anchor: the outcome the question is constitutively about, when measurable and held fixed. Verdict: union member with its own delay loop.
- **Domain 3, verification frame.** Actors: external auditors, field studies, independent instruments. Currency: residual and independence. Anchor: the same ground, never agreement. Verdict: union member with its own ambiguity loop; agreement counts only at measured low overlap.
- **Domain 4, delayed-outcome channel (compound of D2 and D3).** Actors: time, drift, stale percepts, pooled readings, saturated metrics. Currency: contact with the ground. Anchor: the ground, which does not decay; the channel does (Fig 10 :24). Verdict: dependent domain between D2 and D3.
- **Order by dependency.** Anchor, then habitat vocabulary, then objective per slot, then instruments, then carry (Fig 3 :20-21). A benchmark-first protocol works above the break and never reaches the objective link (Fig 3 :27).
- **Strain test.** Fig 1 (per-slot indexing) and Fig 2 (anchor identity) govern different quantities, so no strain. Fig 10 (channel decay) and Fig 2 (anchor non-decay) likewise govern different objects. No re-census owed for either.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`; quotes are verbatim from the SVGs. Status is marked per domain.

**Domain 1, evaluation frame (single-source for the frame-internal verdict; triangulated with the Symbols table for the ground definition).**

- Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." -> scores and metrics cannot settle the deployment question.
- Fig 1 :23 "The ground enters as the only metric." -> the outcome, not the score, is the metric.
- Fig 4 :22 "Only methods cross up. Only head starts come down." -> benchmark results are head starts, not capability certificates.

**Domain 2, deployment habitat (triangulated across Fig 11 and Fig 1; low overlap between the habitat rule and per-slot indexing).**

- Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." -> synthetic evaluation is bounded.
- Fig 11 :39 "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone." -> human behavior is part of the capability claim.
- Fig 11 :40 "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves." -> score-only gains are not deployment gains.
- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> report per slot.

**Domain 3, verification frame (triangulated across Fig 2 and Fig 7; different figures, different subjects: independence and handoff).**

- Fig 2 :31-32 "Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are." -> measure overlap.
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." -> no agreement-driven verdict.
- Fig 2 :36 "An anchor is legitimate when the question is constitutively about it." -> for questions about people, the outcome about people is the anchor.
- Fig 7 :35 "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." -> more reviewers do not add an anchor.

**Domain 4, delayed-outcome channel (triangulated across Fig 10 and Fig 6).**

- Fig 10 :24 "the ground does not decay, the channel does" -> delay is a channel failure.
- Fig 6 :32 "An instrument is not built from a description. It is improved from a worse instrument already returning something." -> use a field instrument already returning something; an argument is not one.
- Fig 9 :39 "So a search that finds nothing is never a proof of absence." -> an unfound outcome is not a nonexistent outcome.

**Across all domains.**

- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." -> cost and accessibility select what gets tried, never what is true.
- Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." -> report R_T between score and field outcome.
- Fig 7 :6 "the limit: no last room" -> no final evaluation suite.
- Fig 13 :134 "Unreachable is a verdict here, not a silence" -> say what the instruments cannot distinguish.

Triangulation summary: D1 verdict is single-source for the frame-internal claim but triangulated for the ground definition; D2, D3 and D4 are triangulated across distinct figure lines. All figure lines share one corpus and one author, so this is internal triangulation, not independent corroboration. The genuinely low-overlap witnesses are the WORLD sources below. No figure line was strained; the two apparent strains were dissolved by re-census and recorded in `01` section 5.

## WORLD (secondary, each source read)

World sources corroborate only; they never overrule a figure line. Field, author, venue, year, quote, prediction, status.

- **Field: AI evaluation. Author/venue/year:** Percy Liang et al., Holistic Evaluation of Language Models, TMLR / arXiv:2211.09110, 2022 (v2 2023). **Quote:** "we anticipate practitioners should first identify scenarios and metrics pertinent to their use conditions". **Prediction here:** per-context, multi-metric evaluation rather than one global score. **Status:** corroborates Fig 1 :19. **Overlap:** medium with the other AI-evaluation sources, none with the figures.
- **Field: benchmarking integrity. Author/venue/year:** Shivalika Singh et al., The Leaderboard Illusion, NeurIPS 2025 / arXiv:2504.20879, 2025. **Quote:** "these dynamics result in overfitting to Arena-specific dynamics rather than general model quality." **Prediction here:** a score under optimisation drifts away from the intended construct. **Status:** corroborates Fig 2 :34. **Overlap:** medium with HELM and the textbook.
- **Field: measurement design. Author/venue/year:** Stanford AIMS Lab, AI Measurement Science textbook, chapter 11 Design, 2025. **Quote:** "The data-generating process is no longer fixed: it shifts in response to the measurement itself." **Prediction here:** an influential score changes the phenomenon it measures. **Status:** corroborates Fig 2 :33. **Overlap:** high with the AI-evaluation cluster, different method from the figures.
- **Field: AI ethics and metrics. Author/venue/year:** Rachel L. Thomas and David Uminsky, Reliance on metrics is a fundamental challenge for AI, Patterns (N Y) 3(5):100476, 2022. **Quote:** "Any metric is just a proxy for what you really care about." **Prediction here:** a metric suite needs audits, qualitative accounts and affected stakeholders. **Status:** corroborates Fig 1 :27 and Fig 2 :31-32. **Overlap:** medium with HELM and the textbook.
- **Field: cognitive science. Author/venue/year:** Gijs A. Holleman, Ignace T. C. Hooge, Chantal Kemner and Roy S. Hessels, The Real-World Approach and Its Problems, Frontiers in Psychology 11:721, 2020. **Quote:** "researchers in psychological science should always specify the particular context of cognitive and behavioral functioning in which they are interested". **Prediction here:** "real environment" must be specified per deployment, not appealed to as a single setting. **Status:** corroborates Fig 9 :27-28. **Overlap:** none with the framework corpus.
- **Field: medicine (surrogate endpoints). Author/venue/year:** Moein Heidari, Surrogate Endpoints in Clinical Trials: Lessons From CAST, StatsAlly explainer, 2026, citing Echt et al., NEJM 324(12):781-788, 1991. **Quote:** "The number is a representation of health, not health itself." **Prediction here:** a marker can improve while the delayed patient outcome worsens. **Status:** corroborates Fig 10 :24 and Fig 1 :22. **Overlap:** none with the framework corpus.
- **Field: economics (policy evaluation). Author/venue/year:** Neil R. Ericsson and John S. Irons, The Lucas Critique in Practice, Springer, 1995, quoting Robert E. Lucas Jr., 1976, p. 41. **Quote:** "any change in policy will systematically alter the structure of econometric models." **Prediction here:** people change behavior when the evaluation rule changes, so the measured relationship drifts. **Status:** corroborates Fig 11 :39 and Fig 2 :34. **Overlap:** none with the framework corpus.

No world source conflicts with the figure verdict, so the conflict rule (return to census) was not triggered. Sources 1 to 4 partly share the AI-evaluation evidence pool; their agreement is one witness, not four. Sources 5 to 7 are genuinely low-overlap. All agree with the figures, but agreement cannot settle the deployment question, which needs a ground reading.

## VERDICT (from the figures)

The shape survives; no specific metric, venue or panel is endorsed. A score cannot be the ground it is scored against. For a question about people in real settings, the legitimate anchor is a human or institutional outcome that does not move when the score moves. Measure residual per slot, enumerate the habitat including the system as an introduced actor, keep low-overlap instruments ranging against the same anchor, treat benchmarks as head starts, and record the round trip gap. Delay is a stale channel to a live ground. The three conditions are a union compound with separate loops, not one problem. This is a `specified`, ungrounded, candidate result.

- **cost if wrong:** a deployment could be approved on a healthy aggregate score while a live slot residual harms an averaged-away population. Fig 2 :42 prices the remedy, "Buy independence in proportion to the cost of being wrong." The avoidable cost is spending outside readers' independence by sending a recording before a verdict is recorded.
- **undoable:** yes. The protocol is a set of conventions and instruments, not a primitive. Keep every cut ranked and reversible. A wrong anchor can be replaced without withdrawing the shape.
- **reversed by:** a ground reading, not agreement. A field measurement showing a single score is simultaneously a legitimate non-updating anchor and retains the per-slot signal; an agent-only improvement that moves real outcomes without changing contact; two low-overlap instruments whose agreement is shown to be independent convergence; one lever clearing all three conditions; a sealed final evaluation room; or a metric that never needs channel maintenance. Prestige, consensus and larger panels are not reversal routes.

## Sources

- [The figures, as text (local extract)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [THE SEAT MAP Field Guide, amended (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_SEAT_MAP_Field_Guide_amended.md)
- [Holistic Evaluation of Language Models](https://arxiv.org/abs/2211.09110)
- [The Leaderboard Illusion](https://arxiv.org/abs/2504.20879)
- [AI Measurement Science, chapter 11 Design](https://aimslab.stanford.edu/textbook/src/chap11.html)
- [Reliance on metrics is a fundamental challenge for AI](https://pmc.ncbi.nlm.nih.gov/articles/PMC9122957/)
- [The Real-World Approach and Its Problems](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2020.00721/full)
- [Surrogate Endpoints in Clinical Trials: Lessons From CAST](https://statsally.com/resources/surrogate-endpoints-clinical-trials-cast)
- [The Lucas Critique in Practice](https://link.springer.com/chapter/10.1007/978-94-011-0669-6_8)
- [How Intelligence Actually Works](https://adventuresinml.substack.com/p/how-intelligence-actually-works)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [Decoding Tacit Knowledge: Why Context](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [How a Society of Agents Would Work](https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work)
- [The Library of Babel: Locating the](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [They're Scanning Books When They Should](https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [Arrival of the Fittest: The Tether](https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether)
