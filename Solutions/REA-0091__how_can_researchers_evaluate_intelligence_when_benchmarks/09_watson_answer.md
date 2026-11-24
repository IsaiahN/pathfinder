# WATSON answer: how can researchers evaluate intelligence when benchmarks fail?

**Mode: `specified`, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This WATSON run synthesizes `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the question it reports on. No measurement was taken.

## QUESTION

Decide, in effect terms, what the Tether says about evaluating intelligence when a benchmark can be memorized, gamed or made obsolete. Option A: treat this as one hard measurement problem and search for a better single benchmark. Option B: treat it as a union of three overlapping conditions and derive a protocol shape with a private ground, per-slot residuals, independent instruments, a verifier without access, and a refresh or retire rule. What each leads to: A spends budget above the dependency break, where measurements already exist, and leaves the anchor moving; B states the objective before the instrument, records what would refute it, and stops honestly where instruments can no longer discriminate.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor, partition or union, and order by dependency.

- **R (the residual).** A benchmark score is a reading that has come loose from the capability it was built to index. Arity three: memorize, game, obsolete. Symmetry: the score is invariant under permutation of its items, which is exactly how it hides which slots are live; the score-to-capability relation is a directed threshold comparison, not a symmetric join. Scale: first order inside one benchmark, second order at the evaluation protocol, with a lossy round trip `R_T` between them. Fig 9 names a union compound: a case in two conditions is not a harder case of either.
- **Domain 1, benchmark as instrument.** Actors: items, scores, the model under test, leaderboard. Currency: accuracy. Anchor: none once contaminated, because the benchmark updates on the frame. Not a verdict domain; an instrument domain only.
- **Domain 2, capability ground.** Actors: the system plus its habitat, including conditions, delayed outcomes, other agents and human behaviour. Currency: contact and per-slot outcomes. Anchor: the world outcome, which does not move when pushed. A partition question at the cross-kind boundary.
- **Domain 3, evaluation and maintainer seat.** Actors: evaluators, private held-out sets, fresh tasks, independent instruments. Currency: independence and residuals. Anchor: the ground, never agreement. Must not author what it grades.
- **Domain 4, reporting layer.** Actors: leaderboards, vendors, selective disclosure, prestige. Currency: attention. Anchor: none; prestige cannot settle an action. A failure domain, not a verdict domain.
- **Order by dependency.** State the objective in effect terms before installing the verifier, then choose per-slot instruments, then tune scores and add items (Fig 3). Refuse a dead instrument before minting a new one (Formula step 2). Describe the residual before choosing a frame (Fig 9 :27-28).

Strain test: Fig 11 (capability is agent-and-habitat) and Fig 2 (what may count as an anchor) seem to strain. Re-census resolves it: Fig 11 governs capability, Fig 2 governs the legitimacy of an anchor for a given question. Different objects, so no strain.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs.

- Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." -> three loops, not one.
- Fig 9 :56 "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." -> held-out sets, refresh and non-access are separate levers.
- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." -> a score that moves under optimization is not an anchor.
- Fig 2 :30 "If it moves when you push on it, it is not an anchor." -> memorization and gaming are both anchor failures.
- Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." -> a self-scored benchmark is disqualified.
- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> per-capability reporting is required.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." -> a single scalar hides the live slot.
- Fig 10 :24 "the ground does not decay, the channel does" -> saturation is channel decay.
- Fig 10 :25 "stale percepts, dropped transients, saturated metrics, pooled readings" -> the named failure is in the instrument.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." -> a ceiling score does not settle capability.
- Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." -> hold-out must be unreachable.
- Fig 10 :84 "Zero-knowledge proof systems, where the verifier's non-access to the witness is what makes the verification sound rather than a limitation it tolerates." -> non-access is the soundness condition.
- Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." -> a benchmark solve is not a real-habitat solve.
- Fig 11 :39 "capability is a property of agent-and-habitat, never of the agent alone" -> the measured object is the pair, not the model.
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" -> benchmark count is not independence.
- Fig 9 :32 "you get a kind of thing, never the answer itself" -> the framework returns a shape, not a named benchmark.

Triangulation status: the union verdict is triangulated across Fig 9 and Fig 8 :47-49 (union surplus and independence read twice, low overlap between the two figure routes). The anchor verdict is triangulated across Fig 2 and Fig 1 :27 (anchor test and self-scoring disqualification, low overlap). The per-slot verdict is triangulated across Fig 1 and Fig 2 :44 (residual indexing and effective-sample-size arithmetic). The channel-decay verdict is triangulated across Fig 10 and Fig 8 plus Fig 9 proof-of-absence. The substituted-habitat verdict is single-source within the figures (Fig 11 only) and relies on the HLE page as a non-framework corroborator. The verifier non-access verdict is triangulated across Fig 10 :42 and Fig 9 :51. No figure line was forced; Fig 13 was checked and is not load-bearing here.

## WORLD (secondary sources read)

World sources corroborate only. Most come from applied ML evaluation, so their overlap with each other is declared rather than hidden.

- **Machine learning theory / specification gaming.** Joar Skalse, Nikolaus H. R. Howe, Dmitrii Krasheninnikov and David Krueger, "Defining and Characterizing Reward Hacking", NeurIPS 2022, https://arxiv.org/abs/2209.13085. Quote: "optimizing an imperfect proxy reward function leads to poor performance according to the true reward function." Predicts that a gamed benchmark rises while true capability does not. Corroborates Fig 2 :29-30. Overlap with other world sources: low (formal RL theory, not benchmark practice).
- **Benchmark engineering / contamination and obsolescence.** Colin White et al., "LiveBench: A Challenging, Contamination-Limited LLM Benchmark", ICLR 2025 Spotlight, https://arxiv.org/abs/2406.19314. Quote: "Test set contamination, wherein test data from a benchmark ends up in a newer model's training set, is a well-documented obstacle for fair LLM evaluation and can quickly render benchmarks obsolete." Predicts held-out refresh and withheld generation code. Corroborates F2, F4 and F6. Overlap: medium, shares the applied LLM evaluation pool with HELM, CheckList and HLE.
- **Institutional audit / leaderboard gaming.** Shivalika Singh et al., "The Leaderboard Illusion", NeurIPS 2025 Datasets and Benchmarks Track, https://arxiv.org/abs/2504.20879. Quote: "overfitting to Arena-specific dynamics rather than general model quality." Predicts that selective disclosure authors the score. Corroborates Fig 10 :42 and Fig 9 :51. Overlap: medium, same applied pool but a different method (audit of a platform, not a benchmark design).
- **Evaluation methodology / aggregation.** Percy Liang et al., "Holistic Evaluation of Language Models", TMLR 2023, https://arxiv.org/abs/2211.09110. Quote: "multi-metric approach" so "metrics beyond accuracy don't fall to the wayside, and that trade-offs are clearly exposed." Predicts per-slot, multi-instrument reporting. Corroborates Fig 1 :19-22. Overlap: medium, same applied pool.
- **NLP behavioral testing.** Marco Tulio Ribeiro, Tongshuang Wu, Carlos Guestrin and Sameer Singh, "Beyond Accuracy: Behavioral Testing of NLP Models with CheckList", ACL 2020, https://aclanthology.org/2020.acl-main.442. Quote: "measuring held-out accuracy has been the primary approach to evaluate generalization, it often overestimates the performance of NLP models." Predicts that behavioral tests find failures a scalar hides. Corroborates Fig 1 :22. Overlap: medium, same applied pool but an older, independent lineage.
- **Benchmark design / held-out sets.** Long Phan et al., "Humanity's Last Exam", 2025, published in Nature 2026, https://arxiv.org/abs/2501.14249. Quote: "maintaining a private test set of held out questions to assess model overfitting." Predicts verifier non-access. Corroborates Fig 10 :42 and :84. Provider page adds that high accuracy "would not alone suggest autonomous research capabilities", corroborating Fig 11 :70. Overlap: medium, same applied pool; the capability caveat is host-independent.
- **Human psychometrics / norms obsolescence.** Lisa H. Trahan, Karla K. Stuebing, Jack M. Fletcher and Merrill Hiscock, "The Flynn Effect: A Meta-Analysis", Psychological Bulletin 2014, https://pmc.ncbi.nlm.nih.gov/articles/PMC4152423. Quote: "the observed rise in IQ scores over time, which results in norms obsolescence." Predicts that an instrument's norm goes stale independently of the person measured. Corroborates Fig 10 :24-29 from a field with no stake in LLM benchmarking. Overlap: low, the only non-AI empirical source.

No world source conflicts with the figure verdict, so the conflict rule was not triggered. Five of the seven share the applied evaluation pool, so their agreement is one pool talking, not seven witnesses (Fig 2 :40). The reward-hacking theory paper and the psychometrics meta-analysis are the low-overlap corroborators.

## VERDICT (from the figures)

The protocol shape survives; the search for one better benchmark does not. Memorization, gaming and obsolescence are a union needing three loops plus compound loops for their intersections. An evaluation anchor must not move under optimization, so a public, training-exposed item set is a frame rather than a ground. Residuals are per capability, so a scalar hides the live signal; two equal scores with different access conditions are isomers under Fig 12. Saturation is channel decay and says "you have lost touch", not "capability attained". A benchmark solve is a substituted habitat and proves wiring, not capability in the real habitat. Independence is provenance, not count, and the verifier must not hold the interiors. The framework names no benchmark and settles no score. Everything here is `specified`, ungrounded and `candidate`.

- **cost if wrong:** bounded and locatable. The packet states its mode, its three checkable sub-claims and five refuters before the conclusion, and records the figure lineage, so an error is findable rather than invisible. The real cost is spending the independence of outside readers by sending a framework instead of a residual, which Fig 2 :42 prices, "Buy independence in proportion to the cost of being wrong." That cost is avoidable by leading with the shape claim and its refuter and by never pooling later agreement as corroboration.
- **undoable:** yes. The protocol is a set of design constraints and a refusal rule, not a primitive. A saturated instrument can be retired and a private set refreshed without withdrawing the shape claim. The derivation can be superseded by the corrected packet; nothing has to be silently erased, and the retraction log in `01_figure_grounded_audit.md` stays visible.
- **reversed by:** a ground reading, not agreement. A canaried private set that fails to separate two systems that differ in capability at sufficient budget; a general metric shown to be unhackable; a scalar that determines all per-slot residuals exactly; a benchmark solve that transfers to a fully reproduced habitat; or a fully informed verifier that remains sound against a party optimizing against it. A figure re-census that places the reporting layer under a governing line would also change the census. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [Figure text extract with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [The Formula (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [Defining and Characterizing Reward Hacking](https://arxiv.org/abs/2209.13085)
- [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://arxiv.org/abs/2406.19314)
- [The Leaderboard Illusion](https://arxiv.org/abs/2504.20879)
- [Holistic Evaluation of Language Models](https://arxiv.org/abs/2211.09110)
- [Beyond Accuracy: Behavioral Testing of NLP Models with CheckList](https://aclanthology.org/2020.acl-main.442)
- [Humanity's Last Exam](https://arxiv.org/abs/2501.14249)
- [The Flynn Effect: A Meta-Analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC4152423)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [How Intelligence Actually Works](https://adventuresinml.substack.com/p/how-intelligence-actually-works)
- [The Library of Babel: Locating the Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [Decoding Tacit Knowledge: Why Context, Subtext and Pretext Matter](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [They're Scanning Books When They Should Be Studying Nature](https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should)
- [How a Society of Agents Would Work](https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work)
- [Arrival of the Fittest: The Tether Architecture](https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether)
- Folder material synthesized: `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, `08_expert_verification_packet.md`, `10_source_ledger.csv`, `11_audit.md`.
