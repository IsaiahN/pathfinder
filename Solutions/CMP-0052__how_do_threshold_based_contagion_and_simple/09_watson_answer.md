# WATSON answer: how do threshold-based contagion and simple exposure contagion interact in the same system?

**Mode: `specified` on the structural claims, `general` on the shape, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This run synthesizes material already in `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*: LLM output simulates an approximate answer, and "the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the question it reports on. No measurement was taken.

## QUESTION

Decide, in effect terms, what the Tether says about the interaction of two transmission rules in one system: simple exposure contagion, where one contact suffices with probability λ, and threshold contagion, where a node adopts when the count or fraction of exposed neighbours reaches θ. Option A: they are one mechanism with a knob, so one transmission probability stands for both. Option B: they are two typed relations over one contact substrate, forming a union compound with a binding mixed region, composing across scales. What each leads to: A hands the modeller a single-lever story that leaves the intersection unexplained and spends the independence of the person checking it; B hands over a checkable shape, written refuters, and an open slot until a ground settles which bond ran.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor; partition or union; order by dependency.

- **R (the residual).** The interaction of two rules on one network. Arity: two conditions, one-exposure-suffices and reinforcement-required. Symmetry: simple transmission is symmetric over donors (any one neighbour suffices, disjunction); threshold transmission is an ordered comparison of a count against θ. Scale: simple acts on a pairwise link, threshold acts on a node's whole neighbourhood, a composed quantity over k links. Fig 9 calls such a case several well-formed questions, not one hard question.
- **Domain 1, the contact substrate.** Actors: nodes (slots), edges, contact weights. Currency: contacts and exposures. Anchor: measured time-resolved contact data. Nameable, so it is a domain; it is the habitat, enumerated and not composed.
- **Domain 2, the simple-exposure rule.** Actors: a susceptible node, one infected neighbour, transmission probability λ. Currency: independent per-edge transmission events. Anchor: an infection curve estimating λ. Nameable.
- **Domain 3, the threshold rule.** Actors: a node, k neighbours, threshold θ. Currency: count or weight of exposed neighbours. Anchor: an adoption curve measured against θ. Nameable.
- **Domain 4, the coupled system.** Actors: nodes with heterogeneous adoptability, seeds, both rules. Currency: final adopted fraction and phase boundaries. Anchor: measured final adoption fraction. Nameable. Question type: a union compound, because some nodes satisfy both conditions at once.
- **Domain 5, the observation frame.** Actors: analyst, model, data. Currency: agreement and residual. Anchor: the ground (per-node events, co-infection data), never agreement. In this simulated run all seats draw on one evidence pool, so independence here is zero.
- **Partition or union.** Domains 2 and 3 partition the rule set when nodes are disjoint (θ = 1 versus θ > 1). When both rules act on the same node and contact, the split lands on a union and the intersection is a specific compound.
- **Order by dependency (Fig 3).** Enumerate the substrate; the per-exposure event; the threshold comparison; the coupled system; the observation frame. Optimising a link that already works cannot rescue one that does not.

Strain test applied: writing simple contagion as the θ = 1 limit of one model family is an outcome-level collapse; the figures distinguish the two at the level of the recorded relation. Different objects, so no strain after re-census. The tension is preserved in `01` section 6 and re-examined in `11_audit.md`.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs.

- Fig 12 :62 "either suffices; not both required" -> the simple rule is disjunction: one contact suffices, removing another changes nothing.
- Fig 12 :87 "a threshold relation between two quantities" -> the threshold rule is comparison, tested by Fig 12 :89 "is it about which is larger, rather than both being present? Yes."
- Fig 12 :94 "The arrangement is the substance." -> two rules over one substrate are different substances even with identical contacts.
- Fig 12 :95 "Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond." -> a graph-only model cannot distinguish the two rules.
- Fig 9 :4 "First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." -> split rather than fit one law.
- Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." -> one λ clears the simple-only region and leaves the mixed region standing.
- Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound." -> the mixed regime has its own loop and its own ground.
- Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it." -> successful exposures settle first and their count becomes the operand of the threshold comparison.
- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> track the per-node exposure gap, not the global attack rate.
- Fig 8 :51 "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ." -> the bond is a property of the record, not of the curve.
- Fig 11 :52 "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out." -> threshold contagion is a second-order effect over the contact habitat.
- Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." -> over a shared graph substrate the two rules are isomers.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." -> λ, θ, p and z never witness a mechanism.
- Fig 6 :21 "MINT composes inside the closure and can never add an atom." -> fitting a parameter does not import a new bond.
- Fig 10 :52 "Bring a characterised residual, never the source." -> the outreach order is residual before theory.

Triangulation status: the two-bond verdict is single-source within the figure set (Fig 12 definitions corroborated by the Operators table, one evidence pool). The union-compound verdict is triangulated across Fig 9 and the competing-contagion literature at low overlap. The dependency order is triangulated across Fig 12 and two world teams. The per-node verdict is triangulated across Fig 1 and the infection-pattern result. The non-identifiability verdict is triangulated across Fig 8 and an exact mean-field mapping, a genuinely different closure. Strains after re-census: one live, the θ = 1 outcome collapse versus the bond distinction, named and carried.

## WORLD (secondary sources read)

World sources corroborate only; most sit in one network-science pool, and overlap is declared rather than hidden.

- **Network science / applied mathematics.** Duncan J Watts, "A simple model of global cascades on random networks", PNAS 99(9):5766-5771, 2002, opened 2026-11-22: "decisions are determined by the actions of their neighbors according to a simple threshold rule." Predicts threshold cascades from local rules; corroborates the threshold bond and the second-order habitat claim. Overlap: canonical source, high citation pool.
- **Sociology.** Damon Centola and Michael Macy, "Complex Contagions and the Weakness of Long Ties", American Journal of Sociology 113(3):702-734, 2007, opened 2026-11-22: "Complex contagions require social affirmation from multiple sources." Predicts reinforcement effects and that bridge width, not only length, matters; corroborates F6. Overlap: shares the complex-contagion vocabulary with the other sources.
- **Physics of complex systems.** Byungjoon Min and Maxi San Miguel, "Competing contagion processes: Complex contagion triggered by simple contagion", Scientific Reports 8:10422, 2018, opened 2026-11-22: "Effectively the transmission probability acts as a simple contagion process triggering a process of complex contagion." Predicts the dependency order and a mixed phase with a double transition; corroborates F2 and F3. Overlap: network-science pool with Watts and Centola.
- **Computational epidemiology / network science.** Diego Andres Contreras, Giulia Cencetti and Alain Barrat, "Infection patterns in simple and complex contagion processes on networks", PLOS Computational Biology 20(6):e1012206, 2024, opened 2026-11-22: "the two processes are characterized by rather different infection patterns." Predicts that the arrangement survives in the pattern even when the curve looks similar; corroborates F1 and F4. Overlap: Barrat also co-authors the 2022 Nature Communications paper.
- **Temporal networks / physics.** Elsa Andres, Romualdo Pastor-Satorras, Michele Starnini and Marton Karsai, "Competition between simple and complex contagion on temporal networks", Physical Review Research 7:043088, 2025, opened 2026-11-22: "their distinguishability based on the observable contagion dynamics is challenging." Predicts three scenarios including a mixed one; corroborates F2, F3 and F5. Overlap: temporal-network closure differs from the annealed model, but shares the pool.
- **Collective decision-making / robotics.** Nikolaj Horsevad, David Mateo, Robert E Kooij, Alain Barrat and Roland Bouffanais, "Transition from simple to complex contagion in collective decision-making", Nature Communications 13:1442, 2022, opened 2026-11-22: "such a transition from simple to complex contagion can also be observed in an archetypal model of distributed decision-making devoid of any thresholds or nonlinearities." Predicts that the bond distinction is not tied to an explicit threshold parameter; corroborates F1 from a low-overlap engineering frame.
- **Theoretical epidemiology.** Laurent Hebert-Dufresne, Samuel V Scarpino and Jean-Gabriel Young, "Macroscopic patterns of interacting contagions are indistinguishable from social reinforcement", Nature Physics 16:426-431, 2020, opened 2026-11-22: "Every curve of Fig. 1 can be obtained by solving the differential equations for either interacting or complex contagions. The solutions are identical." Predicts non-identifiability from aggregate incidence; corroborates F5 at maximum independence from the figures (well-mixed mean field versus the framework).
- **Social experiment narrative.** Damon Centola, "The Theory of Complex Contagions", Network Dynamics Group, University of Pennsylvania, opened 2026-11-22: "instead of one social contact being sufficient to transmit the contagion, each person requires confirmation from a second source of activation before being willing to adopt." Predicts the counterfactual that defines the two rules; corroborates F1. Overlap: same author as the 2007 AJS paper.

No world source conflicts with the figure verdict; the conflict rule was not triggered. One live strain exists between the figure-level bond distinction and the world-level θ = 1 collapse, and it is recorded, not smoothed. Agreement among sources sharing the network-science pool is one witness, not several (Fig 2 :40).

## VERDICT (from the figures)

The shape survives: two typed bonds over one contact substrate; simple transmission upstream of the threshold comparison; a union compound with a binding mixed region; residual indexed per node; the bond undecidable from aggregate incidence. The collapse reading fails except as an outcome-level limit inside one model family. This is a `specified`, ungrounded result. It does not yield θ or λ and does not name the mechanism of any real cascade.

- **cost if wrong:** bounded and locatable. The packet states its mode, writes four refuters before the conclusion and records the lineage, so an error is findable rather than invisible. The larger cost is spending the independence of an outside reader by sending a recording instead of a generator, which Fig 2 :42 prices as "Buy independence in proportion to the cost of being wrong." That cost is avoidable by leading with the shape claim and its refuter.
- **undoable:** yes. The two-bond claim and the union reading can be withdrawn without touching the contact substrate or the world sources. A claim already sent can be superseded by a corrected packet, and no primitive has to be removed from the record. What is refused is the collapse reading, and that refusal can itself be retracted if a single bond passes both tests in C1.
- **reversed by:** a ground reading, not agreement. A per-node exposure gap that fails to beat the global attack rate breaks F4; a single lever clearing the intersection breaks F2 and Fig 9 :55; an aggregate observable identifying the bond breaks F5 and Fig 8 :51; a threshold condition firing before any exposure settles breaks F3. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [The figures, as text (local extract used for every citation)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [figures README (canonical local copy)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [A simple model of global cascades on random networks](https://pmc.ncbi.nlm.nih.gov/articles/PMC122850)
- [Complex Contagions and the Weakness of Long Ties](https://ics.uci.edu/~projects/dissemination/papers/centola.macy.2007-ajs.pdf)
- [Competing contagion processes: Complex contagion triggered by simple contagion](https://pmc.ncbi.nlm.nih.gov/articles/PMC6039514)
- [Infection patterns in simple and complex contagion processes on networks](https://journals.plos.org/ploscompbiol/article?id=10.1371%2Fjournal.pcbi.1012206)
- [Competition between simple and complex contagion on temporal networks](https://journals.aps.org/prresearch/abstract/10.1103/2l6j-46rh)
- [Transition from simple to complex contagion in collective decision-making](https://www.nature.com/articles/s41467-022-28958-6)
- [Macroscopic patterns of interacting contagions are indistinguishable from social reinforcement](https://pmc.ncbi.nlm.nih.gov/articles/PMC8247125)
- [The Theory of Complex Contagions (chapter 3)](https://ndg.asc.upenn.edu/chapter-3-a-social-experiment-on-the-internet)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [They're Scanning Books When They Should Be Studying Nature](https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should)
- Folder material synthesized: `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, `08_expert_verification_packet.md`
