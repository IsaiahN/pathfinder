# WATSON answer: how should a system decide when new evidence should change a learned belief?

**Mode: `specified`, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This run synthesizes material in `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the decision it reports on. No measurement was taken.

## QUESTION

Decide, in effect terms, what the Tether says about when a system should change a belief it has learned. Option A: treat the decision as a single threshold on aggregate error and mint a new explanation whenever the error passes it. Option B: route the per-slot residual into five bins, refuse a held term only on the fifth bin, choose the target by a persistent-and-flat residual, add a refusal instead of deleting the belief, keep the anchor fixed, and pre-bind the sought-for shape. What each leads to: A cannot distinguish a mint from a refusal, destroys the never-held distinction if it deletes, and can drift coherently if the measurement moves with the frames; B yields a checkable decision shape, a derived fall of reach, written refuters, and an honest open case.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors, currency and anchor; partition or union; order by dependency.

- **R (the decision residual).** Not the raw mismatch but the route the mismatch should take. Arity: unary per object slot, so the verdict is a set of per-slot decisions, not one scalar. Symmetry: asymmetric, the frame ranges against the anchor and the anchor does not range against the frame. Scale: closes within one scale (loop steps 1 to 5); second-order only when a settled result is promoted. Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 2 :45 "Frames range against the ground. They do not negotiate with it."
- **Domain 1, the perceptual controller.** Actors: belief b, weighting w, action a, observation o-prime, per-slot residual R, candidate terms. Currency: residual and cost, in two incommensurable units (bits for description, actions for settlement, Fig 12 :125-127). Anchor: the ground via o-prime, "The ground enters as the only metric." (Fig 1 :23).
- **Domain 2, the library and the reach.** Actors: terms in gamma, atoms(gamma), closure(gamma), the refusal term not-t, and derivations built on t. Currency: reachability and settlement; the record grows while the reach can fall. Anchor: derivation, "a term is reachable if it is derivable under everything currently held" (Fig 6 :44).
- **Domain 3, the verification arrangement.** Actors: ground maintainer, outside frames, records. Currency: settlement and independence. Anchor: the immovable ground, "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." (Fig 2 :29).
- **Domain 4, the direction of the question.** Actors: the sought-for shape held as a preference, and the prediction written before the run. Currency: residuals the unbound preference does not accrue. Anchor: the pre-registered prediction, if the discipline is followed. Unbound, it is not a domain at all, which is exactly the limit Fig 5 :61-68 names.
- **Partition or union.** A union compound with a dependency order, not a partition. Support, target, bargain, anchor and direction must hold jointly; a case in two conditions is not a harder case of either (Fig 9 :54-58).
- **Order by dependency.** Perceive R per slot, then route, then rank candidates, then mint or refuse, then settle, then promote (Fig 3 :19-20; Formula steps 1 to 6).

Strain test applied: the fourth bin (mint) and the fifth bin (refuse) initially look like the same operation. Re-census shows they sort by different quantities, what is missing versus what is wrong (Fig 5 :50-56), so they are isomers, not one route. No strain remains.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs.

- Fig 5 :53 "refuted: a term we hold is wrong; a term is owed that says so" -> belief change is a fifth route with no branch in the four-kind pipeline. This decides the trigger category.
- Fig 5 :58-60 "a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at, which is the same shrinking test the selector already runs, read with the opposite sign." -> the target is chosen by a quantity already recorded, not by a new preference. This decides which belief.
- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> the decision is per slot. A global average can hide the only live signal.
- Fig 6 :43 "A refutation adds a term that refuses; it removes nothing, and the reach falls because something was added rather than because anything was deleted." -> the mechanism is addition of a refusal, never deletion. This decides how the belief changes.
- Fig 6 :44 "a term is reachable if it is derivable under everything currently held, so what happens to terms built on a refuted one follows from derivation rather than being stipulated." -> the fall of reach is computed, not stipulated, and the never-held distinction survives.
- Fig 5 :42 "The acceptance test is a bargain, not a threshold." -> the refusal must pay its way. Persistence is necessary, not sufficient.
- Fig 2 :33 "The anchor must not update." -> the ground stays fixed while frames change; otherwise the drift is coherent and unnoticed.
- Fig 5 :65-66 "make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else." -> the direction limit has a discipline, not another mechanism branch.
- Fig 6 :47 "If a term and its refusal are both settled, the record holds a contradiction. Whether that is two scopes, an error in the ground, or a world that changed is not yet decidable here." -> one genuine open case; reported as gap.
- Fig 12 :140 "A vocabulary that cannot refuse can only accumulate." -> negation is required; subtraction alone cannot say a claim is false.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." -> reporting the open case is a verdict, not a silence.

Triangulation status: the fifth-bin verdict is triangulated across Fig 5 and Formula step 2 (compact loop, low overlap). The per-slot rule is triangulated across Fig 1 and Fig 5. The add-a-refusal mechanism is triangulated across Fig 6 and Fig 12 and the Operators table. The fixed-anchor rule is single-source for the decisive line (Fig 2), corroborated at low overlap by the Seat Map law and Fig 10 :47. The direction limit is single-source for the figure (Fig 5), corroborated by the Formula Direction section and the Seat Map :190-192. The both-settled case is a named gap (Fig 6 :47). No strain after re-census.

## WORLD (secondary sources read)

World sources corroborate only. Fields were chosen for low overlap with the framework. Every source below was opened; overlap is declared.

- **Philosophy, formal belief revision.** Sven Ove Hansson, "Logic of Belief Revision", Stanford Encyclopedia of Philosophy, 2006, substantive revision 2026, https://plato.stanford.edu/entries/logic-belief-revision/. Quote: "The epistemic agent should give up beliefs only when forced to do so, and should then give up as few of them as possible." Also the Levi identity "K* p = (K÷ ¬p)+p". Predicts minimal, ranked change via contraction of the negation then addition. Corroborates the target ranking and the add-a-refusal mechanism. Overlap: low (independent philosophical tradition). Status: corroborates.
- **Philosophy, Bayesian epistemology.** "Bayesian Epistemology", Stanford Encyclopedia of Philosophy, 2022, https://plato.stanford.edu/entries/epistemology-bayesian/. Quote: "no credence change is permitted without new evidence" (the old-evidence objection to strict conditionalization). Predicts that a bare error threshold is incomplete. Corroborates the support gate and the open case. Overlap: low. Status: corroborates.
- **Cognitive and social psychology.** Matthew Tyler Boden, Howard Berenbaum and James J Gross, "Why Do People Believe What They Do? A Functionalist Perspective", Review of General Psychology 20(4):399-411, 2016, https://pmc.ncbi.nlm.nih.gov/articles/PMC6824436/. Quote: "Inaccurate and falsified beliefs persist even when people have the resources required for accuracy." Predicts that flat, persisting residuals are the diagnostic signal and that a belief serving a non-accuracy function will not update on accuracy grounds. Corroborates the persistent-and-flat rule and the stake warning. Overlap: low. Status: corroborates.
- **Cognitive psychology, confirmation bias.** Raymond S. Nickerson, "Confirmation Bias: A Ubiquitous Phenomenon in Many Guises", Review of General Psychology 2(2):175-220, 1998, https://doi.org/10.1037/1089-2680.2.2.175. Quote (abstract): "Confirmation bias, as the term is typically used in the psychological literature, connotes the seeking or interpreting of evidence in ways that are partial to existing beliefs, expectations, or a hypothesis in hand." Predicts that the target of a refusal may be the frame's preferred direction. Corroborates the direction limit. Overlap: low. Status: corroborates.
- **Neuroscience, prediction error.** Wolfram Schultz, "Dopamine reward prediction error coding", Dialogues in Clinical Neuroscience 18(1):23-32, 2016, https://pmc.ncbi.nlm.nih.gov/articles/PMC4826767/. Quote: "if the reward is exactly as predicted (blue), there is no prediction error, and we keep our prediction and behavior unchanged; we learn nothing." Predicts a zero-error no-change condition. Corroborates the per-slot residual and the support gate. Overlap: low (different substrate and method). Status: corroborates.
- **Machine learning, catastrophic forgetting.** German I. Parisi, Ronald Kemker, Jose L. Part, Christopher Kanan and Stefan Wermter, "Continual Lifelong Learning with Neural Networks: A Review", Neural Networks, 2019, https://arxiv.org/abs/1802.07569. Quote: "the continual acquisition of incrementally available information from non-stationary data distributions generally leads to catastrophic forgetting or interference." Predicts that naive updating overwrites prior knowledge. Corroborates add-a-refusal and the cost bargain. Overlap: low. Status: corroborates.
- **Machine learning, protecting important weights.** James Kirkpatrick et al., "Overcoming catastrophic forgetting in neural networks", PNAS, 2017, https://www.pnas.org/doi/10.1073/pnas.1611835114. Quote: "Our approach remembers old tasks by selectively slowing down learning on the weights important for those tasks." Predicts importance-weighted, per-slot protection. Corroborates per-slot indexing and minimal change. Overlap: low. Status: corroborates, partial verification (direct fetch returned 403; full text read via indexed result and abstract at https://pubmed.ncbi.nlm.nih.gov/28292907).
- **Framework essays (high overlap, weak corroboration).** Isaiah N, "The Library of Babel: Locating The Book of Books", 2026, https://adventuresinml.substack.com/p/the-library-of-babel-locating-the. Quote: "You can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." And "The Recursive Self-Improvement Trap", 2026, https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap. Quote: "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." Predicts a shape rather than a name and the simulated status of this run. Overlap: high (framework author). Status: corroborates weakly.

No world source conflicts with a figure verdict; the conflict rule was not triggered. None supplies the fifth bin, so none overrules the figures. Agreement among the framework essays is one evidence pool, not independent witnesses (Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool").

## VERDICT (from the figures)

A system should change a learned belief only when a per-slot residual is routed to the fifth bin (a held term is wrong), the target is the bound predicting term whose residual persists and does not trend down while others improve, the refusal passes the description-length bargain, the anchor stays fixed, and the sought-for shape was written down before the run so it can be refused too. The change adds a refusal rather than deleting a term, so the reach falls by derivation and never-held stays distinct from held-and-withdrawn. The framework returns a decision structure, not a numeric threshold, and leaves the both-settled case open. Truth status: `specified`, ungrounded, candidate. The most direct figure line is the fifth bin (Fig 5 :53); the most important limit is the direction preference (Fig 5 :61-68) plus the open case (Fig 6 :47).

- **cost if wrong:** bounded and locatable, because the packet carries a mode, three checkable sub-claims and refuters stated before the conclusion. The real cost is spending the independence of an outside checker by sending a finished theory before a verdict on the rule. Fig 2 :42 "Buy independence in proportion to the cost of being wrong." That cost is avoidable by leading with the rule and its refuter.
- **undoable:** yes. The decision rule can be corrected without withdrawing the figure set; nothing here claims a new primitive. `07_the_tether_answer.md` and `08_expert_verification_packet.md` already strip the numeric and theoretical over-claims. A sent claim can be superseded by a corrected rule, and the open case can be closed later if a ground decides it.
- **reversed by:** a ground reading, not agreement. A per-slot residual trace showing a flat term and improving others with a correct refusal would pay for the trigger; a record showing an added refusal with the old belief still present and the reach falling by derivation would pay for the mechanism; a case where the anchor moved with the frames would refute the legitimacy rule; a framework decision in the both-settled case would close the gap. Until one of these fires, the verdict stands as candidate.

## Sources

- [Verbatim figure text, local](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [THE_FORMULA, local](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [Figures README, canonical, local](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE_SEAT_MAP_Field_Guide_amended, local](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_SEAT_MAP_Field_Guide_amended.md)
- [60_FIGURES_AS_METALAWS, local](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\60_FIGURES_AS_METALAWS.md)
- [Logic of Belief Revision (SEP)](https://plato.stanford.edu/entries/logic-belief-revision/)
- [Bayesian Epistemology (SEP)](https://plato.stanford.edu/entries/epistemology-bayesian/)
- [Why Do People Believe What They Do? (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6824436/)
- [Confirmation Bias: A Ubiquitous Phenomenon in Many Guises](https://doi.org/10.1037/1089-2680.2.2.175)
- [Dopamine reward prediction error coding (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC4826767/)
- [Continual Lifelong Learning with Neural Networks: A Review (arXiv)](https://arxiv.org/abs/1802.07569)
- [Overcoming catastrophic forgetting in neural networks (PNAS)](https://www.pnas.org/doi/10.1073/pnas.1611835114)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
