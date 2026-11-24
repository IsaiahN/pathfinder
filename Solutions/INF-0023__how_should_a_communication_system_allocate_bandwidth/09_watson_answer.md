# WATSON answer: how should a communication system allocate bandwidth among accuracy, speed, robustness, and energy use?

**Mode: `general` on the unbundling, `specified` on the shape, `gap` on the numeric split. Not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This WATSON run synthesizes `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the question it reports on. No channel was measured.

## QUESTION

Decide, in effect terms, what the Tether says about allocating a finite bandwidth and power budget among four named goods. Option A: return a single percentage split. Option B: unbundle the goods, set floors, measure per slot, buy independence in proportion to failure cost, and declare the number a `gap` until a channel model and a cost of being wrong are supplied. What each leads to: A presents a filter as a verdict and hides a live-slot failure inside an average; B sends a checkable shape, written refuters and the instruments that would close it.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor, partition or union, and order by dependency.

- **R (the residual).** The gap per message and per channel state between what the design predicted the receiver would get and what it got. Arity: four named goods, but two are correctness claims, one is a rate and one is an expenditure, so the underlying conditions overlap. Symmetry: none, so no equal split follows. Scale: per message slot, per link session, per design fleet. Fig 1 :19 says *"The residual is indexed by object slot, not aggregated."* Fig 9 :55 names the union: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*
- **Domain 1, channel and coding.** Actors: sender, encoder, channel, noise, decoder, receiver. Currency: bits and error probability per slot. Anchor: a known sent message compared with the received one under a stated channel state. Union, not partition, because accuracy overlaps robustness.
- **Domain 2, resource and thermodynamics.** Actors: transmitter, clock, power source. Currency: joules, hertz, seconds. Anchor: a power meter and a clock. Speed and energy are coupled at the anchor, so they do not partition.
- **Domain 3, design and objective.** Actors: system designer, maintainer, checker. Currency: budget and residual. Anchor: the application's cost of being wrong, which the design frame does not own. This is the imported axis.
- **Domain 4, verification of this packet.** Actors: primary seat, second seat, outside frame. Currency: agreement and residual. Anchor: the ground, never agreement. In this simulated run all seats draw on one evidence pool, so independence is near zero and agreement is internal consistency only.
- **Order by dependency.** Perception, channel vocabulary, objective with floors, planning, learn and carry (Fig 3). Effort spent above the objective link arrives at a step that cannot use it.

Strain test: the first pass mapped the four goods onto the six-term substrate. It was retracted after the strain test fired. The six terms are states and structures of a system, not allocation resources. Fig 12's two-currency rule and Fig 2's independence rule govern this domain directly (see `01_figure_grounded_audit.md` §5). No live strain after re-census.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs.

**Per domain.**

- **D1 channel and coding, `triangulated`.** Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* and Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."* together with Symbols table :43 *"One object, region or entity being tracked. R is measured per slot, never as a single global number."* predict per-message error tracking. Triangulated across Fig 1 and the Symbols table, two separate passages.
- **D1 union rule, `triangulated`.** Fig 9 :55 *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* and Fig 9 :57 *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."* predict unbundling before allocation. Triangulated with the distinct-unit finding in D2.
- **D2 resource and thermodynamics, `single-source`.** Fig 12 :125 *"A composition costs in two currencies, and they do not add."* and Fig 12 :126 *"Bits price the description. Actions price finding out whether it holds."* predict two separate accounts, bits and actions, never one score. Single-source in the figures (Fig 12 and its Operators table share the framework pool); engineering sources corroborate from outside.
- **D3 design and objective, `triangulated`.** Fig 2 :31 *"Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are."* and Fig 2 :42 *"Buy independence in proportion to the cost of being wrong."* predict that robustness is purchased as low-overlap paths, priced by an external failure cost. Triangulated with Fig 8 :45 *"Two frames together reach what neither reaches alone."*
- **D3 floor ordering, `single-source`.** Fig 9 :60 *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* predicts hard floors before optimisation. Single-source in the figures.
- **D4 verification, `triangulated`.** Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* and Fig 2 :40 *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* predict that this second seat is not a witness. Triangulated with Fig 7 :13 *"agreement compounds, evidence does not"*.
- **Numeric split, `gap`.** Fig 8 :39 *"So a search that finds nothing is never a proof of absence."* and Fig 13 :134 *"Unreachable is a verdict here, not a silence"* license reporting the missing number as a verdict. Fig 6 :21 *"MINT composes inside the closure and can never add an atom."* rules out inventing a factor to fill the gap.

## WORLD (secondary sources read)

World sources corroborate only; they never overrule a figure. Each was opened on 2026-11-23.

- **Field: information theory, lossy compression.** Wikipedia, "Rate-distortion theory" (2026, accessed 2026-11-23): *"provides the theoretical foundations for lossy data compression"*. Predicts a rate versus distortion frontier for the accuracy slot. Corroborates the SEARCHED branch of step 7. Overlap with other sources: low (public encyclopedia pool, not the framework).
- **Field: communications engineering.** Wikipedia, "Shannon-Hartley theorem" (2026, accessed 2026-11-23): *"tells the maximum rate at which information can be transmitted over a communications channel of a specified bandwidth in the presence of noise"*. Predicts a rate versus bandwidth and power frontier, and explicitly separates bandwidth-limited and power-limited regimes. Corroborates the two-account reading in D2. Overlap: low, separate page from rate distortion but the same encyclopedia pool, so the two count as one witness.
- **Field: thermodynamics of computation.** Wikipedia, "Landauer's principle" (2026, accessed 2026-11-23): *"erasing a bit in a finite time τ requires additional work that decreases in proportion to 1/τ"*. Predicts that speed enters the energy cost directly, so speed and energy are an overlapping condition. Corroborates F1. Overlap: low.
- **Field: coding theory, network coding.** Wikipedia, "Multiple description coding" (2026, accessed 2026-11-23): *"The packets of each description are routed over multiple, (partially) disjoint paths."* Predicts that redundancy buys resilience when failure modes do not coincide. Corroborates Fig 2 :31. Overlap: low.
- **Field: coding theory, storage channels.** Wikipedia, "Burst error-correcting code" (2026, accessed 2026-11-23): *"The methods used to correct random errors are inefficient to correct burst errors."* Predicts that a channel vocabulary without the burst term breaks Fig 3's middle link. Corroborates the dependency order. Overlap: low, but shares the encyclopedia pool with the three rows above.
- **Field: machine learning, compression.** Yochai Blau and Tomer Michaeli, "Rethinking Lossy Compression: The Rate-Distortion-Perception Tradeoff", ICML 2019, arXiv:1901.07821: *"restricting the perceptual quality to be high, generally leads to an elevation of the rate-distortion curve, thus necessitating a sacrifice in either rate or distortion."* Predicts that a two-good frontier is incomplete even after rate and distortion are fixed. Corroborates the union reading in F1. Overlap: low (different authors, different venue).
- **Field: human cognition, search.** Isaiah N, "The Library of Babel: Locating The Book of Books", adventuresinml Substack, 2026: *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* Predicts a narrowed shape, not a filled split. Corroborates. Overlap: high, same author as the figures.
- **Field: validation, self-validation.** Isaiah N, "The Recursive Self-Improvement Trap", adventuresinml Substack, 2026: *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* Predicts that this derivation cannot settle its own claim; corroborates its simulated status. Overlap: high.
- **Field: perception and instruments.** Isaiah N, "The Hard Problem is About Source", adventuresinml Substack, 2026: *"If several paths create the same behavior, then behavior is a projection with lossy information"*. Predicts that a fleet average cannot name the failing slot. Corroborates F2. Overlap: high.
- **Field: human cognition, tacit knowledge.** Isaiah N, "Decoding Tacit Knowledge", adventuresinml Substack, 2026: *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."* Predicts describe-the-residual-first outreach. Corroborates Fig 10 :52. Overlap: high.
- **Field: metatheory, declared primitives.** Isaiah N, "They're Scanning Books When They Should Be Studying Nature", adventuresinml Substack, 2026: *"Declaring the primitives does not make them neutral. It makes the choice visible."* Predicts that the four chosen goods are a visible choice, not nature's list. Corroborates the honest stop. Overlap: high.
- **Field: multi-agent systems.** Isaiah N, "How a Society of Agents Would Work", adventuresinml Substack, 2026: *"A group is only worth having while its members stay different."* Predicts that a second seat sharing the evidence pool adds no witness. Corroborates D4. Overlap: high.
- **Field: cognitive science, mapping.** Isaiah N, "How Intelligence Actually Works", adventuresinml Substack, 2026: *"converges toward indiscernibility, and indiscernibility is not identity."* Predicts the honest stop at the measured channel states. Corroborates. Overlap: high.
- **Field: derivation narrative.** Isaiah N, "Arrival of the Fittest: The Tether", adventuresinml Substack, 2026: *"Rule 1: You can never compose within the same kind. They must alternate."* Predicts the re-census that retracted the six-term mapping of the four goods. Corroborates the strain resolution. Overlap: high.

No world source conflicts with a figure verdict; the conflict rule was not triggered. The essay sources all share an author with the figures, so their agreement carries little independent weight. The four Wikipedia pages share an editing pool, so they are one witness rather than four.

## VERDICT (from the figures)

The shape survives; the numeric split does not exist to be found here. The four goods are a union, so unbundle them and bind each as a floor. Measure the residual per message and per channel state, not as a fleet average. Keep bits and actions in separate accounts. Buy robustness as independence between low-overlap failure paths, priced by the cost of being wrong, which must be imported from the application. Accuracy and robustness are isomers over the shared atoms when robustness adds no new physical path, otherwise they are functional-group relatives. The number stays open until a channel model and a failure-cost axis are supplied. This is `general` on the unbundling, `specified` on the shape, and `gap` on the split. No percentage is claimed.

- **cost if wrong:** bounded and locatable. The packet states its mode, writes its refuters before the conclusion and records the lineage, so an error is findable rather than invisible. The real cost is spending the independence of outside readers by sending a verdict-shaped percentage instead of a generator, which Fig 2 :42 prices: *"Buy independence in proportion to the cost of being wrong."* That cost is avoidable by leading with the shape and its refuters. There is also a physical cost if the shape is ignored: a robust-looking repetition code on a burst channel fails exactly when the average still looks good.
- **undoable:** yes. No resource has been committed and no primitive withdrawn. The `gap` is declared rather than filled with a guessed factor, so a later channel model and cost axis can close it without retracting the shape. The retracted six-term mapping is preserved in `01` §5 so a reader can see the correction.
- **reversed by:** a ground reading, not agreement. Per-slot error and latency distributions under stated channel states, joules per delivered correct bit, and an imported failure-cost axis would close the number. A single anchor covering all four goods, an averaged metric that identifies the failing slot under correlated errors, or repetition that stays independent under the actual failure mode would break the shape. A figure re-census that shows the four goods form a partition under one anchor would also reverse the verdict. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [Figures text extract with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [Rate-distortion theory](https://en.wikipedia.org/wiki/Rate%E2%80%93distortion_theory)
- [Shannon-Hartley theorem](https://en.wikipedia.org/wiki/Shannon%E2%80%93Hartley_theorem)
- [Landauer's principle](https://en.wikipedia.org/wiki/Landauer%27s_principle)
- [Multiple description coding](https://en.wikipedia.org/wiki/Multiple_description_coding)
- [Burst error-correcting code](https://en.wikipedia.org/wiki/Burst_error-correcting_code)
- [Rethinking Lossy Compression: The Rate-Distortion-Perception Tradeoff](https://arxiv.org/abs/1901.07821)
- [arXiv submission overview](https://info.arxiv.org/help/submit/index.html)
- [IEEE Communications Society](https://www.comsoc.org/)
- [How Intelligence Actually Works](https://adventuresinml.substack.com/p/how-intelligence-actually-works)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [Decoding Tacit Knowledge: Why Context](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [How a Society of Agents Would Work](https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [They're Scanning Books When They Should Be Studying Nature](https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [Arrival of the Fittest: The Tether](https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether)
