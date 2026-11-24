# WATSON answer: what makes a multi-step inference reliable

**Mode: `specified` on the conditions, `general` on the shape, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This run synthesizes `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (The Recursive Self-Improvement Trap: LLM output is simulacra and the truly testable output would need to be derived from the real architecture or by working the formula yourself) it cannot settle the question it reports on. No measurement was taken.

## QUESTION

Decide, in effect terms, what makes a chain of k inference steps reliable when each step may introduce uncertainty. Option A: reliability is a property of the chain, measured by per-step confidence, chain length or agreement between sampled chains. Option B: reliability is a union of per-link conditions under an unmoved ground, namely per-slot residual, an instrumented dependency break, settlement before composition, bracket fidelity times ground pressure, independent frames with a pinned anchor, and a checker outside the generator's interior. What each leads to: A reports a number that cannot comment on its own source and spends the independence of anyone asked to check it; B reports a shape with refuters and an open slot until a ground settles it.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor, partition or union, and order by dependency.

- **R (the residual).** A downstream consumer cannot distinguish a chain that reached the ground from one that drifted coherently when its only local readings are a per-step residual and a final answer. Arity: four conditions, so a union compound, not one hard question. Symmetry: the chain is built from ordered bonds (sequence, production, comparison, subtraction), so reordering steps changes the term; independence between frames is symmetric in the sense that it is one quantity read twice. Scale: each settled step becomes an atom at the next level, so status must be read at each handoff.
- **Domain 1, the single step.** Actors: belief b, action a, prediction Γ(b,a), observation o', residual R on slot s. Currency: residual per slot. Anchor: the ground as the only metric. Question type: partition (which slots carry live mass).
- **Domain 2, the chain composition.** Actors: steps as molecules, the seven bonds and negation, the carried remainder. Currency: bracket fidelity h² and ground pressure S, with progress R = h² × S. Anchor: the ground at each link, not agreement between links. Question type: union (each link is a condition that must hold).
- **Domain 3, the verifier / seat.** Actors: a pinned anchor, the outside frame, the lineage. Currency: independence, how little the checker draws on the generator's evidence. Anchor: an anchor that does not update. Question type: partition (inside versus outside the frame being graded).
- **Domain 4, the habitat / contact.** Actors: instruments, data, peer frames, conditions, relations. Currency: contact with the residual. Anchor: the ground, enumerated, never composed. Question type: union (contact cascades outward through the habitat).
- **Order by dependency.** Instrument the link where the chain stops before spending effort above it (Fig 3 :19); refuse or settle a step before composing over it (formula step 2 and Fig 12 :106); describe the residual before choosing a checking frame (Fig 9 :27-28).

Strain test applied: Fig 7's mirror chain (ρ ≈ 1, agreement compounds) and Fig 2 :40's shared evidence pool are the same collapse read at two scales, not two conflicting rules. Re-census: Fig 7 governs fidelity across a handoff between rooms; Fig 2 governs independence between frames at one comparison. Fig 8 :47 says independence is one quantity read twice. No strain remains.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK\reference\03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs.

- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> report reliability per slot and per link, never as one score.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." -> a global confidence is a reporting convenience, not a settling signal.
- Fig 3 :19 "Optimising a link that already works cannot rescue one that does not." -> effort goes to the first uninstrumented link.
- Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." -> measurement, not assumption, decides link status.
- Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it." -> settle each step before the next composes over it.
- Fig 12 :106 "Nothing composes over what was never admitted as a part." -> an unsettled step is not a safe operand.
- Fig 13 :31-32 "a remainder compounding through a chain that amplifies is chaos" -> per-step uncertainty grows multiplicatively, so settlement is load-bearing.
- Fig 7 :26 "Progress per handoff: R = h² × S" -> progress has two factors, fidelity and ground pressure.
- Fig 7 :36 "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced." -> agreement between steps is not evidence.
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." -> a checker cannot correct a frame by agreeing with it.
- Fig 2 :42 "Buy independence in proportion to the cost of being wrong." -> independence is purchased, not assumed.
- Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." -> the checker reads the lineage, not the interior.
- Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves." -> agent-only changes do not move reliability.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." -> sampling and confidence are filters, not witnesses.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." -> an unreached condition is reported as unreachable, not as settled.

**Triangulation status.** Condition 1 (per-slot residual) is triangulated across Fig 1 and the Symbols table, two low-overlap parts of the figure set. Condition 2 (instrument the break) is triangulated across Fig 3 and Fig 13. Condition 3 (settle before composing) is triangulated across Fig 12 and Fig 13. Condition 4 (handoff product) is single-source for the explicit product in Fig 7, corroborated structurally by Fig 3. Condition 5 (independence and anchor) is triangulated across Fig 2, Fig 7 and Fig 8. Condition 6 (verifier non-access) is triangulated across Fig 10 and Fig 11. One open limit is named, not smoothed: THE_FORMULA says a perfect prediction and a closed channel look the same from inside the loop, so a chain cannot certify its own stop.

## WORLD (secondary sources read)

World sources are corroboration only. Seven of the ten below share the machine-learning and NLP reasoning evidence pool, so their overlap is declared rather than hidden.

- **AI / reasoning.** Jason Wei et al., "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models", NeurIPS 2022: "there is no guarantee of correct reasoning paths, which can lead to both correct and incorrect answers." Predicts that longer chains are not automatically reliable. Corroborates condition 4's budget/verdict split.
- **AI / decoding.** Xuezhi Wang et al., "Self-Consistency Improves Chain of Thought Reasoning in Language Models", ICLR 2023: "It first samples a diverse set of reasoning paths instead of only taking the greedy one, and then selects the most consistent answer by marginalizing out the sampled reasoning paths." Also: "the model is not well calibrated and thus cannot distinguish well between correct solutions and wrong solutions." Predicts gains from diverse paths, with a stated limit under systematic error. Corroborates conditions 5 and 6, with a caveat that voting is a filter.
- **AI / verification.** Hunter Lightman et al., "Let's Verify Step by Step", ICLR 2024: "process supervision significantly outperforms outcome supervision" and "We implement this as the product of the correctness probabilities for each step." Predicts that per-step checking beats final-only checking. Corroborates conditions 1 and 3.
- **AI / error detection.** Weiqiu You et al., "Probabilistic Soundness Guarantees in LLM Reasoning Chains", EMNLP 2025: "earlier errors can corrupt judgments of downstream reasoning" and "evaluates each reasoning step based solely on previously-verified premises." Predicts verifier non-access. Corroborates condition 6.
- **AI / evaluation.** "Omanic: Towards Step-wise Evaluation of Multi-hop Reasoning", Findings of EMNLP 2026: "step-wise analysis reveals a later-hop bottleneck, factual knowledge floor, and error propagation along reasoning chains." Predicts a later-hop bottleneck and compounding error. Corroborates conditions 2 and 3.
- **AI / survival analysis.** "When Does Reasoning Age?", EMNLP 2026: "the conditional probability of reasoning error increasing with step depth", with increasing hazard in 34 of 35 dataset-model cells. Predicts depth-dependent hazard. Corroborates Fig 13's amplifying chain.
- **AI / theory.** "Quantifying the Stability of Multi-Step Reasoning via Error Amplification", arXiv 2026: "an inference error bound governed by the product of spectral norms of the Jacobians taken through the input space across generation steps", a factor that can scale exponentially with steps. Predicts multiplicative growth. Corroborates condition 3 most strongly.
- **Human cognition, low overlap.** David Copeland and Gabriel Radvansky, "Working memory and syllogistic reasoning", Quarterly Journal of Experimental Psychology 2004: "participants performing better, faster, and more confidently for syllogisms requiring the use of one model than for multiple model syllogisms." Predicts that more items to hold in mind raises difficulty. Corroborates condition 2.
- **Human cognition, low overlap.** Kenneth Gilhooly et al., "Working memory and strategies in syllogistic-reasoning tasks", Memory and Cognition 1993: "A significant effect of memory load was obtained." Corroborates the load sensitivity in condition 2.
- **Formal verification, low overlap.** "Theorem Proving in Lean", theorem proving in Lean 4: "every rule of inference and every step of a calculation has to be justified by appealing to prior definitions and theorems, all the way down to basic axioms and rules", with proof objects that can be "checked independently". Predicts per-step settlement plus an independent checker. Corroborates conditions 3 and 6.

**Conflict rule:** no world source conflicts with the figure verdict, so the rule sending a conflict back to the census was not triggered. The seven AI/NLP sources are one pool, not seven witnesses (Fig 2 :40). The two human cognition sources and the formal verification source are genuinely lower overlap, but they still share the broader literature on reasoning with the figures' author's essays, so their independence is partial, not absolute.

## VERDICT (from the figures)

Reliability is not a scalar and not a count of steps. It is a union of conditions on a chain in contact with a ground: per-slot residual, an instrumented dependency break, settlement before composition, bracket fidelity times ground pressure, independent frames against an anchor that does not update, and a checker that reads the lineage rather than the interior. Sampling, confidence and chain length are filters for the budget. Verdict mode `specified`, ungrounded, candidate. The strongest single line for outreach is Fig 2 :35, "Alignment is triangulation, not negotiation. A mirror cannot correct you."

- **cost if wrong:** bounded and locatable. The packet states refuters before the conclusion and records the lineage, so an error is findable rather than invisible. The real cost is spending the independence of outside readers by sending a recording instead of a generator, which Fig 2 :42 prices. That cost is avoidable by leading with the shape claim and its refuter.
- **undoable:** yes. Each of the six conditions can be removed independently without touching the others; `07_the_tether_answer.md` and `08_expert_verification_packet.md` already state the refuters. A superseded claim costs a correction, not a withdrawn primitive.
- **reversed by:** a ground reading, not agreement. A per-slot instrument that detects failures a final confidence misses, an instrumented middle link that beats compute above the break, a demonstration that settling an intermediate recovers a degraded conclusion, separate measurements of fidelity and pressure with zeroing either stopping progress, an independent anchor that beats a shared-pool vote on a systematic error, or a checker whose detection rate changes when interior access is denied. Any of these moves the relevant condition. A derivation of one of the six figure terms from the other five would break the substrate itself. Until one fires, the verdict stands as `candidate`.

## Sources

- [Figures text extract with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [WATSON 60, figures as metalaws (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\60_FIGURES_AS_METALAWS.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2022/file/9d5609613524ecf4f15af0f7b31abca4-Paper-Conference.pdf)
- [Self-Consistency Improves Chain of Thought Reasoning in Language Models](https://arxiv.org/abs/2203.11171)
- [Let's Verify Step by Step](https://proceedings.iclr.cc/paper_files/paper/2024/file/aca97732e30bcf1303bc22ac3924fd16-Paper-Conference.pdf)
- [Probabilistic Soundness Guarantees in LLM Reasoning Chains](https://arxiv.org/abs/2507.12948)
- [Omanic: step-wise evaluation of multi-hop reasoning](https://aclanthology.org/2026.findings-emnlp.1714.pdf)
- [When Does Reasoning Age?](https://aclanthology.org/2026.emnlp-main.1976.pdf)
- [Quantifying the Stability of Multi-Step Reasoning via Error Amplification](https://arxiv.org/abs/2610.06404)
- [Working memory and syllogistic reasoning (Copeland and Radvansky 2004)](https://memorylab.nd.edu/assets/257933/copeland_radvansky_2004_quarterly_journal_of_experimental_psychology_.pdf)
- [Working memory and strategies in syllogistic-reasoning tasks (Gilhooly et al. 1993)](https://pubmed.ncbi.nlm.nih.gov/8433642)
- [Theorem Proving in Lean](https://leanprover.github.io/theorem_proving_in_lean/theorem_proving_in_lean.pdf)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
