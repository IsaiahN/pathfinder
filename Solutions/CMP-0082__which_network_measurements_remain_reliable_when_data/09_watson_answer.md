# WATSON answer: which network measurements remain reliable when data are incomplete, sampled unevenly, or collected through biased platforms?

**Mode: `specified` on the shape, `general` on the refusal to rank named measures, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** It is checked for internal consistency against the figures. *The Recursive Self-Improvement Trap* says LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." It cannot settle the question it reports on. No network was measured.

## QUESTION

Decide, in effect terms, what the Tether says about network measurement under three data defects. Option A: answer the question as asked, with a ranked list of reliable measures. Option B: restate reliability as a property of a measure, a collection channel, and an independent ground, and return the shape any reliable measurement must have while leaving the ranking open. What each leads to: A produces a list that a global average can make look stable while individual slots are wrong and that a platform can score itself; B produces per-slot criteria, written refuters, and a clear statement of the instrument that would close the ranking. The derivation takes B.

## DOMAIN CENSUS

R by arity, symmetry, and scale, then one line per domain with actors, currency, and anchor. No nameable anchor means it is not yet a domain.

- **R (the residual).** The gap between a measurement on the observed graph and that measurement on the true graph, per slot. Arity: one per slot with the channel and ground as parameters, two at the whole-graph scale. Symmetry: exchangeable under random incompleteness, broken under uneven sampling and platform bias. Scale: the defects act on the channel, so the honest scale is the slot, not the global aggregate. Fig 9 names the three defects a union compound: a case in two conditions is not a harder case of either.
- **Domain 1, network measurement.** Actors: nodes, edges, slots, measures (degree, betweenness, clustering, path length, density). Currency: graph statistics. Anchor: the true network, nameable only if independently enumerated. Without such an enumeration this is an anchor owed, so the ranking is unreached.
- **Domain 2, collection channel.** Actors: sampler, platform, sensors, respondents. Currency: observed edges. Anchor: none of its own. The platform's published metric moves with its own rule, so by Fig 2 it is a frame, not an anchor. This is the common-cause collapse, not a separate domain with its own ground.
- **Domain 3, verification and ground.** Actors: independent enumerators, a second channel, a direct survey. Currency: per-slot residuals. Anchor: a ground that does not move when frames change, nameable in principle as an independently enumerated network.
- **Partition or union.** Union, not partition. Incomplete, uneven, and biased overlap, and their intersections are categorically different from the single conditions. Four loops are owed, not one.
- **Order by dependency (Fig 3).** Perception (is the slot observed), vocabulary (is there a per-slot term), objective (is a small per-slot residual the target), planning (choose measure and design), learn and carry (verify and carry the method). A break at perception cannot be rescued by planning above it.

Strain test applied: reading Fig 1's per-slot rule as a ranking of named measures was strained. Re-census showed the line governs the indexing of the error, not the choice of statistic. No strain remains after re-census.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the figures.

- Fig 11 :39 "capability is a property of agent-and-habitat, never of the agent alone" -> reliability is a property of measure and channel and ground, never of the measure alone. Governs domain 1 and 2 together. `triangulated` with Fig 1 :23 "The ground enters as the only metric." (low overlap: capability/habitat versus the agent loop).
- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> report per-slot residuals, not a global average. `single-source` for the indexing rule, with the Symbols table as a second, notation-level statement (low overlap but same framework).
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." -> a global statistic can look stable while slots are wrong. Same domain, same finding.
- Fig 1 :13 "a global R near zero with one live slot residual is a legal state" -> near-zero global error does not certify correctness. Governs the interpretation of reported stability.
- Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." -> a platform-published metric disqualified as an anchor. Governs domain 2.
- Fig 2 :29-30 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." -> the anchor test. Governs domains 2 and 3.
- Fig 2 :47 "A ground listed as one of the parties has already become a frame." -> the platform is not the ground. Governs domain 2.
- Fig 2 :45 "Frames range against the ground. They do not negotiate with it." -> platform output may be used only when ranged against an independent enumeration. Governs the partition between domains 2 and 3.
- Fig 9 :57 "a case in two conditions is not a harder case of either" -> union, not severity. Governs the three defects and their intersections. `triangulated` with Fig 10 :25-26 "stale percepts, dropped transients, saturated metrics, pooled readings" (low overlap: union/partition versus channel failure modes).
- Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." -> the observed-to-true gap must be measured. `triangulated` with Fig 10 :24 "the ground does not decay, the channel does" (low overlap: abstraction/concretisation versus channel maintenance).
- Fig 2 :31-32 "Independence, between two frames, is how little they draw on the same evidence." -> agreement across low-overlap channels only. Governs domain 3.
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." -> two pipelines reading the same platform are one witness.
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" -> this simulated run's internal agreement is one pool, not corroboration.
- Fig 2 :42 "Buy independence in proportion to the cost of being wrong." -> budget rule for the number of independent channels, never a verdict rule.
- Fig 3 :19 "Optimising a link that already works cannot rescue one that does not." -> a better statistic cannot repair an unperceived slot. Governs the dependency order.
- Fig 9 :32 "you get a kind of thing, never the answer itself" -> shape, not a ranking. `single-source` for the figure limit; the canonical figures README corroborates but shares the evidence pool.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." -> unreached is not unreachable, and no ranking is a proof of absence.

Triangulation summary: the measure-channel-ground verdict is triangulated across Fig 11 and Fig 1 with low overlap. The union verdict is triangulated across Fig 9 and Fig 10 with low overlap. The round-trip requirement is triangulated across Fig 4 and Fig 10 with low overlap. The shape-not-a-name limit is single-source for the figure line, with same-pool corroboration from the README. The ranking of named measures is a `gap` after re-census: no figure line governs it, and the anchor for it has not been enumerated.

## WORLD (secondary, each source read)

World sources are corroboration only. Most framework essays share an author with the figures, so that overlap is declared. The arXiv and survey-methodology sources are separate pools.

- **Field:** physics of complex networks. **Source:** Yohsuke Murase, Hang-Hyun Jo, Janos Torok, Janos Kertesz, Kimmo Kaski, "Sampling networks by nodal attributes", Phys. Rev. E 99, 052304 (2019), https://arxiv.org/abs/1902.04707. **Quote:** "the sampled network may have sampling-induced network properties that are absent in the original network, which implies the potential risk of a naive generalization of the results of the sample to the entire original network." **Prediction:** sampling changes structure, not just sample size. **Verdict:** corroborates the union and round-trip findings. Overlap: low, separate pool.
- **Field:** epidemiological network modelling. **Source:** Neha Bansal, Katerina Kaouri, Thomas E. Woolley, "Reducing Size Bias in Epidemic Network Modelling", arXiv (2025), https://arxiv.org/abs/2501.13195. **Quote:** "For time-to-infection, both algorithms provide representative estimates. However, neither algorithm samples SF networks representatively, exhibiting significant variability." **Prediction:** reliability is per quantity, not per dataset, and depends on network type. **Verdict:** corroborates the per-slot and per-metric findings. Overlap: low, separate pool.
- **Field:** statistics and network inference. **Source:** Tyler Vu, Tuo Lin, Jingjing Zou, Vladimir Novitsky, Xin Tu, Victor De Gruttola, "Estimating Viral Genetic Linkage Rates in the Presence of Missing Data", arXiv (2022), https://arxiv.org/abs/2203.12779. **Quote:** "when ignoring missing data, even when missing completely at random, this results in bias for estimators regarding inference network related parameters." **Prediction:** incompleteness is its own condition even under random missingness. **Verdict:** corroborates the union finding. Overlap: low, separate pool.
- **Field:** survey statistics. **Source:** Krista J. Gile, Mark S. Handcock, "Respondent-Driven Sampling: An Assessment of Current Methodology", arXiv (2009), https://arxiv.org/abs/0904.1855. **Quote:** "the favorable statistical properties claimed for the current estimates are shown to be heavily dependent on often unrealistic assumptions." **Prediction:** an estimator cannot anchor itself when its assumptions are not met by the channel. **Verdict:** corroborates the platform-as-frame finding. Overlap: low, separate pool.
- **Field:** social and information networks. **Source:** Daniel Catlin, Giulia Berlusconi, David J.B. Lloyd, "The Game is the Game: Dynamic network analysis and shifting roles in criminal networks", arXiv (2025, revised 2026), https://arxiv.org/abs/2509.08028. **Quote:** "dynamic Katz centrality is helpful to differentiate individual contributions even among central nodes and explore individual trajectories over time, even when data are incomplete." **Prediction:** a measure can remain informative under incomplete data when it is per-actor and temporal. **Verdict:** corroborates the shape, not a general ranking. Overlap: low, separate pool.
- **Field:** survey methodology. **Source:** "Design effect / effective sample size", Wikipedia, accessed 2026-11-22, https://en.wikipedia.org/wiki/Effective_sample_size. **Quote:** "When Deff>1, then inference from the data collected is not as accurate as it could have been if people were picked randomly." **Prediction:** pooled or correlated readings buy less information than their count suggests. **Verdict:** corroborates the uneven-sampling condition and Fig 2 :44. Overlap: low, separate pool.
- **Field:** human cognition and source discrimination. **Source:** Isaiah N, "The Hard Problem is About Source", adventuresinml Substack (2026), https://adventuresinml.substack.com/p/the-hard-problem-is-about-source. **Quote:** "If several paths create the same behavior, then behavior is a projection with lossy information." **Prediction:** a source cannot be read off a projection; a better instrument is owed. **Verdict:** corroborates the anchor and round-trip findings. Overlap: high, framework author.
- **Field:** search and shape. **Source:** Isaiah N, "The Library of Babel: Locating The Book of Books", adventuresinml Substack (2026), https://adventuresinml.substack.com/p/the-library-of-babel-locating-the. **Quote:** "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." **Prediction:** a narrowed shape, not a filled ranking. **Verdict:** corroborates the shape-not-a-name limit. Overlap: high, framework author.
- **Field:** validation and prestige. **Source:** Isaiah N, "The Recursive Self-Improvement Trap", adventuresinml Substack (2026), https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap. **Quote:** "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." **Prediction:** this derivation cannot settle its own claim. **Verdict:** corroborates the simulated status. Overlap: high, framework author.

No world source conflicts with the figure verdict, so the conflict rule was not triggered. Agreement among the three essays is one evidence pool, not three witnesses.

## VERDICT (from the figures)

Reliability under damaged network data is a property of a measure, a collection channel, and an independent ground, not of the measure alone. The figures return a shape, not a ranking: report per-slot residuals; range every platform metric against a ground that does not update; treat incomplete, uneven, and biased collection as a union with separate loops for the intersections; measure the observed-to-true round-trip gap; and count agreement only across low-overlap channels. The protocol is an ordered dependency chain, not a checklist, and a platform metric is refused by negation rather than deleted by subtraction. No named measure is declared reliable or unreliable. That ranking is a `gap` after re-census, because the anchor that would settle it has not been enumerated. This is a `specified`, ungrounded result.

- cost if wrong: choosing a measure because a global statistic looked stable, or because a platform published it, spends the only signal that says where the error is. Fig 4 :30 calls that dead reckoning: "confident about a position nobody checked." The cost is bounded and locatable because the packet states refuters before the conclusion, but it is real in any study that acts on the ranking.
- undoable: yes. The ranking is open, so nothing has to be withdrawn to add one. The shape and refuters can be sent now and superseded by a measured ranking later. Refusing a platform metric as an anchor adds a term; it deletes no data and is reversible when an enumeration arrives.
- reversed by: a ground reading, not agreement. An independently enumerated network that does not update with the platform, with per-slot residuals for each named measure under each defect and intersection, a measured round-trip gap, and a second low-overlap channel would fill the gap and license a ranking. Any of the pre-registered refuters firing would narrow or withdraw the shape instead. Prestige or number of agreeable readers is not such an instrument.

## Sources

- [Figures README, canonical](https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md)
- [Figures text extract with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [60_FIGURES_AS_METALAWS (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\60_FIGURES_AS_METALAWS.md)
- [The Formula, eight-step loop (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [Sampling networks by nodal attributes](https://arxiv.org/abs/1902.04707)
- [Reducing Size Bias in Epidemic Network Modelling](https://arxiv.org/abs/2501.13195)
- [Estimating Viral Genetic Linkage Rates in the Presence of Missing Data](https://arxiv.org/abs/2203.12779)
- [Respondent-Driven Sampling: An Assessment of Current Methodology](https://arxiv.org/abs/0904.1855)
- [The Game is the Game: Dynamic network analysis and shifting roles in criminal networks](https://arxiv.org/abs/2509.08028)
- [Design effect / effective sample size](https://en.wikipedia.org/wiki/Effective_sample_size)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- Folder material synthesized: `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, `08_expert_verification_packet.md`.
