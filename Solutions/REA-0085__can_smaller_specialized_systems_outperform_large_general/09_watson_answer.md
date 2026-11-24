# WATSON answer: can smaller, specialized systems outperform large general-purpose models?

**Mode: `specified` on the per-domain shapes, `general` on the meta-shape, `gap` on the absolute ranking. Not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This run synthesizes material already in `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. From *The Recursive Self-Improvement Trap* (opened 2026-11-24): "the truly testable output would need to be derived from the real architecture or working the formula yourself". It cannot settle the question it reports on. No measurement was taken.

## QUESTION

Decide, in effect terms, what the Tether says about the claim that smaller specialized systems outperform large general-purpose models in reliability and adaptability. Option A: treat it as one comparison and answer yes or no. Option B: split the compound, keep the two axes separate, and report a conditional shape with a `gap` on the absolute ranking. What each leads to: A averages two currencies and lets parameter count stand in for a verdict; B names the habitat and anchor required, states where a specialist surplus is reachable, and records what would reverse each cell. Mode of B: `specified` and ungrounded.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors, currency and anchor, partition or union, and order by dependency.

- **R (the residual).** The gap between a size-and-scope frame's prediction about which architecture wins and what a controlled measurement on a named habitat would return. Arity: two axes (reliability, adaptability) over two overlapping conditions (stable habitat, habitat change), so four cells and a **union compound** (Fig 9 :5), not one hard question. Symmetry: the axes are not symmetric and the architecture classes overlap, so a small model can be general and a large model can be tuned narrowly. Scale: model size (parameters) within one scale, habitat change across scales with `R_T` as the error signal.
- **Domain 1, the architecture frame.** Actors: models, training data, objectives, parameter count. Currency: loss on a fixed distribution. Anchor: a held-out evaluation, valid only if it does not update. Question type: partition boundary inside a closure. Fig 1 :27 disqualifies size as a self-scoring quantity.
- **Domain 2, the evaluation frame.** Actors: benchmarks, rephrased sets, leaderboards, reference models. Currency: measured score. Anchor: the ground, if and only if it is not moved by tuning. Question type: anchor integrity. A contaminated benchmark is a frame, not an anchor.
- **Domain 3, the habitat frame.** Actors: task distribution, deployment conditions, tools, users, operators. Currency: contact with the ground. Anchor: the ground itself. Question type: maintained versus substituted habitat. Capability belongs to agent-and-habitat, never the agent alone.
- **Domain 4, the verification frame.** Actors: expert readers and public venues. Currency: residual and refutation. Anchor: the ground, never agreement. In this simulated run all seats draw on one evidence pool, so independence is low and agreement carries little weight.
- **Order by dependency:** describe R in effect terms; name the anchor and demonstrate it does not update; enumerate the habitat; settle reliability on the fixed habitat; then test adaptability across the habitat change; only then compare architectures. Fig 3 :19, "Optimising a link that already works cannot rescue one that does not."

Strain test applied: scaling results (loss falls with size) and specialist wins (small tuned model beats large general model) appear to conflict. Re-census resolves it: scaling is search inside a closure, while fine-tuning imports an atom from a labelled-data frame. Different operations, no figure bent. The one live strain is that Fig 11 :40 admits its capability claim "has not been tested forward", so that finding is reported with lower confidence.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs.

- Fig 9 :5 "are not one hard question but several well-formed ones. Split it rather than search." -> the bundle is split before it is searched; the answer has cells, not a single yes or no.
- Fig 12 :125 "A composition costs in two currencies, and they do not add." -> reliability and adaptability are reported separately; summing them is the named error.
- Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." -> parameter count cannot decide the comparison.
- Fig 4 :20 "Only the actors, the currency and the anchor change." -> size changes the cast, not the loop.
- Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." -> a larger model searches a wider space but does not add an atom by searching longer.
- Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." -> a specialist surplus is reachable only where a different frame supplies an atom.
- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." -> benchmark leakage turns the anchor into a frame; the surplus claim is conditional on anchor integrity.
- Fig 11 :40 "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves." -> across a habitat change, contact wins; scaling alone changes nothing.
- Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." -> a static benchmark win is a wiring result.
- Fig 3 :19 "Optimising a link that already works cannot rescue one that does not." -> scaling cannot repair a broken objective or vocabulary link.
- Fig 13 :134 "Unreachable is a verdict here, not a silence" -> the absolute ranking is recorded as `gap`, not filled with an outside intuition.
- Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." -> first contact carries the residual and refuter, not the framework.

Triangulation status: the union split is triangulated across Fig 9 and Fig 12 (low overlap between the split rule and the two-currency rule). The frame-internality of size is triangulated across Fig 1 and Fig 4. The specialist-surplus condition is triangulated across Fig 8, Fig 6 and Fig 2 (closure law, import law, anchor law). The habitat claim is single-source within the figures (Fig 11 only), with one low-overlap ecology corroboration. The absolute ranking is a `gap` after re-census: no figure line governs a comparison with no habitat and no anchor named.

## WORLD (secondary, each source read)

World sources are corroboration only. Overlap is declared rather than hidden. Figures decide; none of these overrules them.

- **Machine learning / scaling.** Kaplan, McCandlish et al., "Scaling Laws for Neural Language Models", arXiv, 2020. Quote: "Larger models are significantly more sample-efficient, such that optimally compute-efficient training involves training very large models on a relatively modest amount of data and stopping significantly before convergence." Predicts smooth gains from size. Corroborates the size frame's own case, read as search inside a closure (Fig 8 :32); does not conflict. Overlap: distinct from the specialist papers.
- **NLP / specialist break-even.** Pecher, Srba and Bielikova, "Comparing Specialised Small and General Large Language Models on Text Classification", arXiv / EMNLP, 2024/2025. Quote: "larger models do not consistently lead to better performance and lower variance". Predicts a conditional specialist win with high variance. Corroborates Fig 6 :23. Overlap: high with the other specialist-evaluation papers, one pool.
- **Information theory / domain tuning.** Maatouk, Chirino Ampudia, Ying and Tassiulas, "Tele-LLMs", arXiv, 2024. Quote: "these models outperform their general-purpose counterparts on Tele-Eval and telecommunications-related literature tasks while retaining their previously acquired capabilities, thus avoiding the catastrophic forgetting phenomenon." Predicts domain reliability plus retained breadth. Corroborates specialist surplus and warns that retention is a separate axis. Overlap: same specialist pool; benchmark is authored by the same authors, so anchor integrity is unverified.
- **NLP / low-resource.** Arif, Azeemi, Raza and Athar, "Generalists vs. Specialists: Evaluating Large Language Models for Urdu", Findings of EMNLP, 2024. Quote: "We found that specialist models quantitatively outperformed generalist models on 12 out of the 14 tasks." Also reports generalist wins in human evaluation of generation. Predicts that the winner depends on the measuring instrument. Corroborates Fig 12 :125 directly. Overlap: same specialist pool.
- **NLP / routing.** Simonds, Kurniawan and Lau, "MoDEM: Mixture of Domain Expert Models", ALTA, 2024. Quote: "Rather than focusing solely on creating increasingly large, general-purpose models, the future of AI may lie in developing ecosystems of smaller, highly specialized models coupled with sophisticated routing systems." Predicts surplus from a union of frames with routing. Corroborates Fig 8 :45. Overlap: same specialist pool.
- **ML / contamination.** Dekoninck, Müller and Vechev, "ConStat", NeurIPS, 2024. Quote: "data contamination can lead to inflated performance, rendering them unreliable for model comparison." Predicts that many reported wins are readings against a moved anchor. Corroborates Fig 2 :29. Overlap: high with the Deng survey, one witness.
- **NLP / contamination survey.** Deng et al., "Unveiling the Spectrum of Data Contamination in Language Models", Findings of ACL, 2024. Quote: "Such contamination of evaluation benchmarks can obscure the true generalization performance of LLMs". Predicts inflated scores from memorisation. Corroborates Fig 2 :29. Overlap: same contamination pool as ConStat.
- **Ecology / niche breadth.** Peers, Thornton and Murray, "Reconsidering the Specialist-Generalist Paradigm", PLOS ONE, 2012. Quote: "Specialist species are predicted to have higher fitness under certain environmental conditions, and generalists have consistent levels of fitness across a gradient of conditions". Predicts specialist wins on few axes, generalist wins across variability. Corroborates Fig 11 :40 as a conditional shape, and warns that peak-performance magnitudes often fail to appear. Overlap: low with ML; one witness from a distant field.
- **Ecology / disturbance.** Fried, Petit and Reboud, "A specialist-generalist classification of the arable flora", BMC Ecology, 2010. Quote: "increased levels of disturbance have favoured the most generalist species, hence leading to biotic homogenisation in arable landscapes." Predicts generalist advantage under habitat change. Corroborates Fig 11 :40. Overlap: same ecology pool as Peers and Morris.
- **Ecology / variability.** Morris, Allhoff and Valdovinos, "Strange invaders increase disturbance and promote generalists in an evolving food web", Scientific Reports, 2021. Quote: "While specialists are often thought to evolve due to greater efficiency, generalists should have an advantage in systems with high levels of variability." Predicts the same conditional shape. Corroborates Fig 11 :40. Overlap: same ecology pool.
- **Human cognition / shape.** Isaiah N, "The Library of Babel: Locating the Book of Books", adventuresinml Substack, 2026. Quote: "You can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." Predicts a shape, not a filled ranking. Corroborates Fig 9 :32. Overlap: framework author, so weak corroboration.
- **Validation / simulated output.** Isaiah N, "The Recursive Self-Improvement Trap", adventuresinml Substack, 2026. Quote: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." Predicts that this derivation cannot settle its own claim. Corroborates its simulated status. Overlap: framework author.

No world source conflicts with the figure verdict; the apparent scaling conflict was resolved by re-census. The essays share an author with the figures, the specialist papers share an evaluation pool, the contamination papers share a literature, and the ecology papers share a theory pool. Four pools, not twelve independent witnesses.

## VERDICT (from the figures)

The bundled question is split and answered cell by cell. Size is excluded as a deciding variable (Fig 1 :27, Fig 4 :20). Reliability and adaptability are reported separately (Fig 12 :125). On a fixed habitat with an anchor that does not update, a specialist in contact with a different closure can reach what a wide closure cannot derive; this is conditional on the anchor holding (Fig 8 :32, Fig 6 :23, Fig 2 :29). Across a habitat change, maintained contact wins and agent-only scaling changes nothing (Fig 11 :40, Fig 11 :70); this cell carries lower confidence because the figure admits the claim has not been tested forward. Scaling cannot repair a broken objective or vocabulary link (Fig 3 :19). The absolute ranking "smaller beats larger" is a `gap`: no habitat and no anchor were named, so no figure line governs it, and "Unreachable is a verdict here, not a silence". The whole result is `specified` and ungrounded.

- **cost if wrong:** bounded and locatable. Each cell carries its own refuter and its own figure line, so an error can be assigned to one cell rather than smeared over a slogan. The avoidable cost is spending the independence of outside readers by sending a verdict instead of a residual; Fig 2 :42 says "Buy independence in proportion to the cost of being wrong." Lead with the shape and the refuter and that cost is avoided.
- **undoable:** yes. The claim is conditional and has not modified any library primitive. A failed cell can be withdrawn without touching the others. A sent packet can be superseded by a corrected one, and no architecture claim has to be defended as settled.
- **reversed by:** a ground reading, not agreement. A dynamic, provably non-leaked anchor with size varied independently of contact could fire refuter 1 and break the specialist-surplus cell. A specialist retaining adaptability after habitat change with no import channel would fire refuter 2 and break the capability cell. A derivation showing size changes the loop would fire refuter 3 and break the frame-internality claim. A lossless conversion between the two currencies would fire refuter 4 and dissolve the union split. Until one fires, the verdict stands as `candidate`.

## Sources

- [Figures text extract with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [Question source, reasoning.txt line 104 (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\Questions\reasoning.txt)
- [Scaling Laws for Neural Language Models](https://arxiv.org/abs/2001.08361)
- [Comparing Specialised Small and General Large Language Models on Text Classification](https://arxiv.org/abs/2402.12819)
- [Tele-LLMs: A Series of Specialized Large Language Models for Telecommunications](https://arxiv.org/abs/2409.05314)
- [Generalists vs. Specialists: Evaluating Large Language Models for Urdu](https://aclanthology.org/2024.findings-emnlp.426/)
- [MoDEM: Mixture of Domain Expert Models](https://aclanthology.org/2024.alta-1.6/)
- [ConStat: Performance-Based Contamination Detection in Large Language Models](https://arxiv.org/html/2405.16281)
- [Unveiling the Spectrum of Data Contamination in Language Models](https://aclanthology.org/2024.findings-acl.951.pdf)
- [Reconsidering the Specialist-Generalist Paradigm in Niche Breadth Dynamics](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0051488)
- [A specialist-generalist classification of the arable flora](https://pmc.ncbi.nlm.nih.gov/articles/PMC2939635)
- [Strange invaders increase disturbance and promote generalists in an evolving food web](https://www.nature.com/articles/s41598-021-99843-3)
- [The Library of Babel: Locating the Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
