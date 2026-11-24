# WATSON answer: can AI systems construct and revise causal models through intervention rather than observation alone?

**Mode: `specified` on the shape and on per-domain verdicts, `general` on quoted structural rules. Not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This run synthesizes `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. From *The Recursive Self-Improvement Trap* (read 2026-11-23): "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post... However, the truly testable output would need to be derived from the real architecture or working the formula yourself." It cannot settle the question it reports on. No measurement was taken and no system was tested.

## QUESTION

Decide in effect terms whether intervention is necessary, sufficient, or optional for an AI system to construct and revise a causal model. Option A: observation alone is enough if the model is powerful or the dataset large. Option B: acting on the world is structurally required for the causal slot, and revision requires a refusal operator. What each leads to: A treats every successful prediction as evidence of causal structure and leaves a live slot hidden inside a small global error; B gives a checkable shape, a separated pair of verbs, a refuter written in advance, and an open slot until a ground settles it. I do not decide between A and B by counting sources. The figures decide.

## DOMAIN CENSUS

R by arity, symmetry, scale, then one line per domain with actors, currency, and anchor; partition or union; order by dependency.

- **R (the residual).** Arity: several object slots, since Fig 1 :10 "one bet per object slot, every action" and Fig 1 :19 "The residual is indexed by object slot, not aggregated." Symmetry: the observational input is symmetric under relabellings that preserve the same conditional independencies, which is why one graph is not identified; the intervention input has a target and a direction and breaks that symmetry. Scale: one agent in one habitat per loop, with a possible round trip to a population of checkers.
- **Domain 1, the control loop.** Actors: agent, belief b, library Gamma, action a, observation o-prime, slot residual R. Currency: residual per slot and terms minted or refused. Anchor: the ground via an experiment or verifiable outcome (Fig 1 :23). Question type: partition, whether acting enters the loop.
- **Domain 2, causal composition.** Actors: variable slots, seven bonds, negation, the graph as molecule. Currency: composable terms in closure(Gamma). Anchor: settlement by the ground. Question type: partition, which bond carries cause.
- **Domain 3, the habitat.** Actors: the world, the do-operation, instruments, other frames. Currency: causal contact. Anchor: the ground that does not update. Question type: partition, where capability lives.
- **Domain 4, verification of the claim.** Actors: expert readers, the packet, the residual. Currency: agreement versus residual. Anchor: the ground, never agreement. Question type: union of an evidence question and a budget question, so it has its own loop.
- **Order by dependency (Fig 3).** Perceive the slot and residual, acquire vocabulary for what an intervention affords, state an objective that counts causal progress, plan which variable to set, then learn and carry. Refuse before mint (formula step 2). Describe the residual before choosing a frame (Fig 8 :53). No verdict is averaged across domains.

Strain test: the apparent conflict between Fig 1 "ground: RLVR" and causal discovery's lack of a scalar score was re-censused and dissolved, since Fig 2 :29 defines an anchor generically as an experiment, measurement, counter, market, or patient outcome. The remaining instrument strain is named in `01_figure_grounded_audit.md` §7.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim. Status is given per domain, never averaged.

- Fig 1 :9 "perceive · plan · act · predict" -> acting is inside the loop, not an optional add-on. D1.
- Fig 1 :23 "The ground enters as the only metric." -> a prediction-only score is not the ground for a causal slot. D1.
- Fig 1 :28 "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look." -> average accuracy hides the live causal slot. D1.
- Fig 12 :77 "A produces B; B did not exist before" -> production is ordered and is the causal bond. D2. Triangulated with the Operators table and with Fig 13 cross-kind composition.
- Fig 12 :111 "A vocabulary without bonds can name a state and cannot name a route to one." -> variables alone do not state a causal route. D2.
- Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." -> two graphs over the same variables are different substances, which is why intervention is the discriminator. D2.
- Fig 5 :53 "refuted: a term we hold is wrong; a term is owed that says so" -> revision is a refusal. D3. Triangulated with Operators table :58 and Fig 12 :140.
- Fig 6 :42 "A refutation adds a term that refuses; it removes nothing, and the reach falls because something was added rather than because anything was deleted." -> the reach, not the library, shrinks on revision. D3.
- Fig 11 :39 "And capability is a property of agent-and-habitat, never of the agent alone." -> the capacity is not a property of the model in isolation. D4.
- Fig 11 :40 "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves." -> internal scaling without a changed habitat does not buy causal capability. D4. **single-source** for the figure verdict, with low-overlap world corroboration.
- Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." -> benchmark results are wiring evidence only. D4.
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." -> agreement is not a ground. D verification.
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" -> this simulated second seat is not a witness. D verification. **triangulated** across Fig 2, Fig 7, and Fig 9.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." -> the ground gap is reported as a verdict. All domains.
- Fig 9 :32 "you get a kind of thing, never the answer itself" -> no architecture is named. All domains. Triangulated with the canonical figures README.

Source status by domain: D1 triangulated (Fig 1, Fig 11), D2 triangulated (Fig 12, Fig 13, Operators table), D3 triangulated (Fig 5, Operators table, Fig 12, Fig 6), D4 single-source for the figure with world corroboration, D verification triangulated. No domain is `gap` at the figure level; the `gap` is at the ground, where no instrument in this run settles a named system's capability.

## WORLD (secondary sources, read 2026-11-23)

World sources corroborate only. They never overrule a figure. Overlap is declared so a pool is not mistaken for a witness.

- **Field: statistics and machine learning.** Alain Hauser and Peter Buhlmann, JMLR, 2012. Quote: "interventional Markov equivalence defines a finer partitioning of DAGs than observational Markov equivalence and hence improves the identifiability of causal models." Prediction: interventional data refines what observation leaves equivalent. Corroborates F2. Overlap: high, part of the Pearl or Markov evidence pool.
- **Field: machine learning.** Yang-Bo He and Zhi Geng, JMLR, 2008. Quote: "Because we cannot distinguish the different directed acyclic graphs (DAGs) in a Markov equivalence class learned from observational data, we have to collect further information on causal structures from experiments with external interventions." Prediction: external interventions supply information observation cannot. Corroborates F1 and F2. Overlap: high, same pool.
- **Field: machine learning.** Karren Yang, Abigail Katcoff and Caroline Uhler, ICML or PMLR, 2018. Quote: "we define and characterize the interventional Markov equivalence class that can be identified from general (not necessarily perfect) intervention experiments." Prediction: intervention generalizes beyond perfect do-operations. Corroborates F2 and F6. Overlap: high, same pool.
- **Field: machine learning.** Adam Li, Amin Jaber and Elias Bareinboim, NeurIPS, 2023. Quote: "learning from observational data in multiple domains is equivalent to learning from interventional data with unknown targets in a single domain." Prediction: domain variation can act as an intervention channel. Corroborates F6. Overlap: high, same pool.
- **Field: machine learning.** Philippe Brouillard et al., NeurIPS, 2020. Quote: "most methods based on this idea do not make use of interventional data, which can significantly alleviate identifiability issues." Prediction: adding intervention data eases identification. Corroborates F2. Overlap: high, same pool.
- **Field: machine learning and reinforcement learning.** Arquimides Mendez-Molina, Eduardo F. Morales and L. Enrique Sucar, PMLR PGM, 2022. Quote: "the interventional nature of the data generating process in RL favors the discovery of the underlying causal structure." Prediction: an acting agent has an intervention channel by construction. Corroborates F1 and F4. Overlap: high, same pool but closest analogue to the loop.
- **Field: machine learning and multi-agent systems.** Andreas Sauter et al., AAMAS, 2024. Quote: "passive observations alone are not enough to distinguish correlation from causation" and the work formulates causal discovery as a POMDP with informative interventions. Prediction: acting is required and the action must be informative. Corroborates F1 and F5. Overlap: high, same pool. The PDF was read from indexed text because the fetch tool does not support PDFs.
- **Field: human cognition, developmental psychology.** David M. Sobel and Jessica A. Sommerville, Frontiers in Psychology, 2010. Quote: "Conditional probability information can be learned from observation, but actions typically provide conditional probability information not present in simply observing the environment." Prediction: acting first beats observing first, and not all self-generated action is equivalent. Corroborates F1 and F4 from a genuinely low-overlap field. Overlap: low.
- **Field: human cognition.** Elizabeth Lapidow and Caren M. Walker, Cognition, 2020. Quote: "Children use exploratory actions to discriminate between possible causal structures." Prediction: learners select informative interventions. Corroborates F1 and F5 from a low-overlap field. Overlap: low. Abstract and highlights read from the indexed abstract because the article page blocked a direct fetch.
- **Field: metatheory and validation.** Isaiah N, The Recursive Self-Improvement Trap, adventuresinml Substack, 2026. Quote: "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." Prediction: this derivation cannot validate its own claim. Corroborates the simulated status. Overlap: high, framework author.

No source conflicts with the figure verdict, so the conflict rule was not triggered. Seven ML sources plus the framework-author essay share one evidence pool; their agreement is one witness. The two psychology sources are low overlap and are the strongest external corroboration, still secondary to the figures.

## VERDICT (from the figures)

Intervention is structurally required for the causal slot, not merely helpful. Cause is an ordered production bond that intervention discriminates from association. Revision is a refusal, so a revised model loses reach where a reweighted one does not. Capability belongs to agent and habitat together, so a synthetic solve proves wiring and never capability. The figures return this shape and stop; no architecture, benchmark, or system is named, and nothing here is settled by measurement. Mode `specified`, status candidate. The strongest single point is Fig 1 :9 together with Fig 11 :40: the loop already acts, and improving the agent without changing contact changes nothing.

- **cost if wrong:** bounded and locatable. Mode, refuter, and lineage are stated before the conclusion, so an error is findable. The real cost is spending an outside reader's independence by sending a theory before a residual, which Fig 10 :42 prices: "A verifier that can reconstruct the claim cannot verify it." That cost is avoidable by leading with the shape and its refuter.
- **undoable:** yes. The per-domain verdicts are independent, so the habitat claim can be withdrawn without touching the bond claim, and no primitive has to be retracted. A superseding packet can be issued.
- **reversed by:** a ground reading, never agreement. An unauthored-habitat experiment closing a pre-specified causal slot would settle the capability question; a demonstration that a held relation lost standing through refusal would settle the revision question; an agent-only change that moved the anchor would break Fig 11 :72 and refute the capability claim; a derivation of the ordered bond from a symmetric one without import would break Fig 12 :77. Until one fires, the verdict stands as candidate.

## Sources

- [Verbatim figure text with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Canonical figures README (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [The eight-step loop (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [Characterization and Greedy Learning of Interventional Markov Equivalence Classes (Hauser and Buhlmann, JMLR 2012)](https://www.jmlr.org/papers/v13/hauser12a.html)
- [Active Learning of Causal Networks with Intervention Experiments and Optimal Designs (He and Geng, JMLR 2008)](https://www.jmlr.org/papers/v9/he08a.html)
- [Characterizing and Learning Equivalence Classes of Causal DAGs under Interventions (Yang, Katcoff and Uhler, ICML 2018)](https://proceedings.mlr.press/v80/yang18a.html)
- [Causal discovery from observational and interventional data across multiple environments (Li, Jaber and Bareinboim, NeurIPS 2023)](https://proceedings.neurips.cc/paper_files/paper/2023/hash/368cba57d00902c752eaa9e4770bbbbe-Abstract-Conference.html)
- [Differentiable Causal Discovery from Interventional Data (Brouillard et al., NeurIPS 2020)](https://proceedings.neurips.cc/paper/2020/hash/f8b7aa3a0d349d9562b424160ad18612-Abstract.html)
- [Causal Discovery and Reinforcement Learning: A Synergistic Integration (Mendez-Molina et al., PMLR 2022)](https://proceedings.mlr.press/v186/mendez-molina22a.html)
- [CORE: Towards Scalable and Efficient Causal Discovery with Reinforcement Learning (Sauter et al., AAMAS 2024)](https://ifaamas.org/Proceedings/aamas2024/pdfs/p1664.pdf)
- [The Importance of Discovery in Children's Causal Learning from Interventions (Sobel and Sommerville, Frontiers in Psychology 2010)](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2010.00176/full)
- [Informative experimentation in intuitive science (Lapidow and Walker, Cognition 2020)](https://www.sciencedirect.com/science/article/abs/pii/S0010027720301347)
- [The Recursive Self-Improvement Trap (Isaiah N, 2026)](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [The Library of Babel: Locating The Book of Books (Isaiah N, 2026)](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Hard Problem is About Source (Isaiah N, 2026)](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [Decoding Tacit Knowledge (Isaiah N, 2026)](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
