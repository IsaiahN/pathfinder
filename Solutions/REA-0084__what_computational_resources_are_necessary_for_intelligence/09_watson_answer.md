# WATSON answer: what computational resources are necessary for intelligence?

**Mode: `specified` on the substantive claims, `general` on the structural shape. Not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This run synthesizes material already in `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By the framework's own rule (LLM output is "simulacra" and the testable output would have to be derived from the real architecture or worked by hand) it cannot settle the question it reports on. No measurement of capability or efficiency was taken.

## QUESTION

Decide, in effect terms, what the Tether says about the claim that a resource budget (compute, data, parameters, time, energy) is what intelligence requires and that there is a single fundamental efficiency limit. Option A: answer in the budget frame, find the resource function and the efficiency frontier. Option B: re-census to capability, split the cost into two currencies, split the limit into two kinds, and stop at a shape with refuters. What each leads to: A produces a single number that the measured frame also produces, and it prescribes more compute or a new primitive without saying which limit is in play; B produces a checkable shape, five refuters written in advance, and an honest stop at the instruments.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors, currency and anchor; partition or union; order by dependency.

- **R (the residual).** The gap between what a resource-budget answer predicts and what the figure-governed domains support. Arity: at least four conditions (description price, action price, habitat contact, limit kind), so a **union compound**, not one scalar (Fig 9 :54). Symmetry: efficiency is a threshold comparison, ordered, not a symmetric join. Scale: within one scale for a single agent's budget; across scales for a head start handed down (Fig 4 :19).
- **Domain 1, framework-internal composition and settlement.** Actors: six terms, seven bonds, negation, closure(Γ), atoms(Γ). Currency: composition then settlement, with prices in bits and actions. Anchor: the figures as metalaws and the ground for any measurement. Question type: partition boundary (which compositions cross the two kinds) embedded in a union of currencies.
- **Domain 2, agent and habitat.** Actors: agent, habitat actors and relations, the ground. Currency: contact. Anchor: the ground, what survives. Question type: compound; isolation substitutes a habitat and never removes one (Fig 11 :66-67).
- **Domain 3, computational-limits research.** Actors: researchers, benchmarks, hardware roadmaps, expert readers. Currency: agreement and residuals; FLOPs, parameters and watts are frame-internal. Anchor: the ground, never agreement. Stake: builders have an interest in the reading, which must be declared (Fig 10 :60).
- **Order by dependency.** Describe the residual before choosing a frame (Fig 9 :27-28); run SEARCHED before INWARD and OUTWARD (Fig 6 :49, formula step 7); settle the cost currencies before comparing at a threshold (Fig 12 :125-129).

Strain test applied: Fig 11 governs what capability is; the hardware and physics literature governs what a budget can buy. Different objects, so no strain after re-census. The action price of Fig 12 is not the Landauer energy price; that strain is recorded in `01_figure_grounded_audit.md` §8, not smoothed over.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVG text extract.

- **D1.** Fig 12 :125 "A composition costs in two currencies, and they do not add." -> cost is not one number. **triangulated** with Fig 1 :27.
- **D1.** Fig 12 :126 "Bits price the description. Actions price finding out whether it holds. They are in different units, so a system holding one accounting cannot compare them" -> the two prices are incommensurable. **triangulated** with Fig 5 :26 (the MDL bargain).
- **D1.** Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means." -> extra compute is extra search at the same reach. **triangulated** with Fig 6 :21 and Fig 13 :115.
- **D1/D2.** Fig 8 :40 "Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions." -> two limits, different remedies. **triangulated** with Fig 9 :44 and Fig 6 :27.
- **D2.** Fig 11 :39 "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone." -> the denominator is the pair. **triangulated** with Fig 11 :40 and the low-overlap world sources below.
- **D2.** Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." -> a benchmark proves wiring. **single-source** within the figures; corroborated by the embodied literature in WORLD.
- **D3.** Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." -> field metrics are disqualified as verdicts. **triangulated** with Fig 2 :45 and Fig 9 :60.
- **D1/D3.** Fig 7 :30-31 "every room closes some of the gap; no finite number of them ever arrives" -> improvement is real, arrival is not. **triangulated** with Fig 7 :42 and Fig 13 :90.
- **All.** Fig 9 :32 "you get a kind of thing, never the answer itself" -> shape, not a resource number. **triangulated** with the canonical figures README and Fig 13 :135.

Triangulation status: the capability re-census is triangulated across Fig 11 and two low-overlap world fields; the two-currency reading is triangulated across Fig 12 and Fig 1; the barrier/budget split is triangulated across Fig 8, Fig 9, and Fig 6. The action price versus physical energy price remains a named **strain**, not a correction, and is recorded as such. No domain is left as `gap`: every domain has at least one governing figure line after two re-censuses.

## WORLD (secondary sources read)

World sources corroborate only. Field, author, venue and year, quote, prediction here, and status.

- **Physics of computation, retrospective.** Iulia Georgescu, Nature Reviews Physics, 2021. Quote: "there is an absolute minimum thermodynamic cost associated with erasing one bit of information: k B T ln2." Predicts a real energetic floor for irreversible computation. **corroborates** the existence of physical ceilings; it does not price settlement against a ground. Overlap with other sources: moderate (shares Landauer with Markov and Bérut).
- **Physics of computation, experiment.** Antoine Berut et al., Nature, 2012. Quote: "we experimentally show the existence of the Landauer bound in a generic model of a one-bit memory." Predicts the bound is measurable, not merely argued. **corroborates** that some efficiency limits are settled by instruments, which is what Fig 2 :29 requires of an anchor. Overlap: moderate.
- **Physics / cosmology.** Seth Lloyd, Physical Review Letters, 2002 (preprint arXiv:quant-ph/0110141). Quote: "The laws of physics determine the amount of information that a physical system can register (number of bits) and the number of elementary logic operations that a system can perform (number of ops)." Predicts finite absolute bounds (10^120 ops on 10^90 bits). **corroborates** that limits are real and structural. Overlap: low with the cognition and search sources.
- **Engineering / limits review.** Igor L. Markov, arXiv cs.ET, 2015. Quote: "Several fundamental limits remain substantially loose, possibly indicating viable opportunities for emerging technologies." Also "Reasonably tight limits are rare." Predicts that most quoted ceilings are not tight, so a claimed universal efficiency constant is suspect. **corroborates** the budget/barrier split from a different field. Overlap: low.
- **Thermodynamics of intelligence, interview.** David Wolpert, FQxI QSpace, 2022. Quote: "It must be because you can't actually get anywhere close to the tiny theoretical limit. There must be other constraints on how the system can behave that keep it from being able to get anywhere close to the theoretical minimum energetic cost." Predicts that practical constraints, not the theoretical floor, dominate. **corroborates** Fig 8 :41 (budget-limited gaps) and the two-currency split. Overlap: moderate (shares thermodynamics with Landauer sources, but different author from the framework).
- **Human cognition / philosophy.** Andy Clark and David Chalmers, Analysis, 1998. Quote: "an active externalism, based on the active role of the environment in driving cognitive processes." Predicts that the unit of capability includes the environment. **corroborates** Fig 11 :39-40 at maximum independence from the framework. Overlap: low.
- **Mathematics / optimisation.** David Wolpert and William Macready, IEEE Transactions on Evolutionary Computation, 1997 (statement recorded via the public Wikipedia entry, original DOI 10.1109/4235.585893). Quote: "if an algorithm performs well on a certain class of problems then it necessarily pays for that with degraded performance on the set of all remaining problems." Predicts no universal best search. **corroborates** Fig 8 :32 in a field with no contact with the framework. Overlap: low. Caveat recorded: some scholars dispute the practical relevance of no-free-lunch to machine learning, so this is weak corroboration, not a second witness for the figure reading.
- **Biology / protein folding.** Cyrus Levinthal's case as reported by A. Clay Clark, Archives of Biochemistry and Biophysics, 2008. Quote: "For a small protein of one hundred residues, Levinthal estimated that the time for folding would exceed the age of the universe by many orders of magnitude. Thus, real proteins do not fold by a random search." Predicts that extra unbiased search does not close a gap; a bias or structure is required. **corroborates** Fig 8 :32 and Fig 3 :27. Overlap: low.
- **Policy / AGI limits.** Edward Geist and Alvin Moon, RAND working paper WR-A3990-1, 2025. Quote: "the laws of the physical universe impose fundamental limits such that we can predict with confidence things that even the most powerful forms of AGI will not be able to do." Predicts that limits can be mapped in advance. **corroborates** the search for a barrier shape. Overlap: low.
- **Distribution venue, not a verdict witness.** FQxI QSpace competition rules, 2025. Quote: "Each eligible essay will be read and rated (scored between 1 and 10) by at least two Expert Readers." Predicts an opt-in, ground-visible route for the packet. **silent on the verdict**; included only to verify the public channel in `03_public_contact_points.csv`.

No world source conflicts with the figure verdict; the conflict rule was not triggered. Agreement from a shared evidence pool is one witness, not two (Fig 2 :40). The independent fields here are physics, cognition, mathematics, biology, engineering, and policy; the framework's own author appears in none of them.

## VERDICT (from the figures)

The question as posed is answered in the wrong domain. The figure-governed answer is a shape, not a number: capability belongs to agent and habitat; cost has two incommensurable currencies; one limit is a budget ceiling that more search can close and one is a barrier that only an import can cross; no finite budget arrives at a last room; and the field's own metrics are filters, not witnesses. The two named strains (action price versus physical energy price, barrier versus asymptotic non-arrival) are recorded and not resolved by fiat. Status `specified`, ungrounded, candidate. The strongest single check is Fig 11 :39, because it changes the denominator of the whole question.

- **cost if wrong:** bounded and locatable. The packet states its refuters before the conclusion and records the lineage, so an error is findable rather than invisible. The real cost is asking a field to spend its independence on a single efficiency number that the field itself produces. Fig 2 :42: "Buy independence in proportion to the cost of being wrong." That cost is avoidable by leading with the shape and its five refuters.
- **undoable:** yes. The resource-budget framing is removable without touching the shape; `07_the_tether_answer.md` and `08_expert_verification_packet.md` already remove it. A circulated claim can be superseded by the corrected packet, and no primitive has to be withdrawn.
- **reversed by:** a ground reading, not agreement. A controlled case in which agent-internal compute with contact fixed moves the ground would break the capability re-census; a single accounting for both currencies, or a search that adds a primitive, would break the two structural claims; a finite last room would break the asymptotic limit. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [The figures, as text (local verbatim extract)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA, eight-step loop and mode rule (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [WATSON 60: the figures as metalaws (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\60_FIGURES_AS_METALAWS.md)
- [Limits on Fundamental Limits to Computation (Markov, 2015)](https://arxiv.org/html/1408.3821v2)
- [Computational capacity of the universe (Lloyd, 2002)](https://arxiv.org/abs/quant-ph/0110141)
- [Experimental verification of Landauer's principle (Bérut et al., 2012)](https://www.nature.com/articles/nature10872)
- [60 years of Landauer's principle (Georgescu, 2021)](https://www.nature.com/articles/s42254-021-00400-8)
- [The Extended Mind (Clark and Chalmers, 1998)](https://consc.net/papers/extended.html)
- [The Thermodynamic Limits of Intelligence: Q&A with David Wolpert (FQxI, 2022)](https://qspace.fqxi.org/articles/261)
- [No free lunch theorem (Wolpert and Macready, 1997, record)](https://en.wikipedia.org/wiki/No_free_lunch_theorem)
- [Protein folding: Are we there yet? (Clark, 2008, Levinthal case)](https://pmc.ncbi.nlm.nih.gov/articles/PMC3109318/)
- [What Even Superintelligent Computers Can't Do (Geist and Moon, RAND, 2025)](https://www.rand.org/pubs/working_papers/WRA3990-1.html)
- [FQxI QSpace competition rules (venue verification)](https://qspace.fqxi.org/competitions/rules)
- Folder material synthesized: `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, `08_expert_verification_packet.md`.
