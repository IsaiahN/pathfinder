# WATSON answer: are some reasoning strategies more common in particular institutional settings?

**Mode: `specified` on the verdict, `general` on the structural shape, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This run synthesises `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule, "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post." It cannot settle the question it reports on. No strategy frequency was measured.

## QUESTION

Decide, in effect terms, whether reasoning strategy frequencies are conditional on institutional setting. Option A: the loop is invariant and the strategies minted, rewarded, and transmitted vary with the setting's actors, currency, and anchor. Option B: reasoning forms are universal and only content changes, so observed differences are noise. What each leads to: A leads to splitting markets, schools, and courts into separate rooms with separate anchor tests and to refusing to pool their agreement; B leads to one context-free catalogue of strategies and to treating setting differences as surface variation. The shape to be tested was written down before the run and is stated in §1 of `01_figure_grounded_audit.md`.

## DOMAIN CENSUS

R by arity, symmetry, and scale, then one line per domain with actors, currency, and anchor; partition or union; order by dependency.

- **R (the residual).** The unexplained unevenness of `f(strategy | setting)`. Arity: two-place at minimum, three-place once the reasoner is included. Symmetry: asymmetric, since settings select and reward rather than form an equivalence. Scale: spans the one-agent reasoning scale and the institutional population scale, with the membrane between them. Fig 9 makes it a union compound rather than one hard question.
- **D1, individual reasoning frame.** Actors: one reasoner, belief b, action a, observation o', terms in Γ. Currency: residual R per slot and description length of a mint. Anchor: the ground, the only metric (Fig 1 :23). This is the invariant kernel at this scale.
- **D2, institutional frame.** Actors: many agents, a shared library, and a ranking. Currency: what the setting rewards (price and clearing in markets, verdict and precedent in courts, grade and standard in schools). Anchor: the institution's ground, legitimate only when the question is constitutively about it (Fig 2 :36). Union, not partition.
- **D3, habitat and contact.** Actors: roles, rules, evidence standards, instruments, other reasoners. Currency: contact, what the ground keeps. Anchor: the ground, not the habitat (Fig 11 :73). Enumeration, never composition (Fig 11 :43).
- **D4, verification and outreach.** Actors: expert readers, the claim, the institution described. Currency: agreement and residual, held apart. Anchor: the ground, never agreement (Fig 2 :35). In this simulated run all seats share one evidence pool, so independence is zero.
- **Order by dependency.** Anchor first, then currency, then strategy vocabulary, then frequency (Fig 3 :20). Describe the residual before choosing a frame.

Strain test applied: the apparent conflict between an invariant kernel and a conditional distribution was resolved by re-census. Fig 4 :19-20 governs the loop and the naming rule; the currency governs the terms minted under them. Different objects. One live strain remains, the school anchor (Fig 2 :36), and one analogue strain, the use of Fig 12's chemical vocabulary for reasoning practices.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK\reference\03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs.

- Fig 4 :19-20 "The kernel is the part that does not change with size: the same loop and the same rule for naming what worked, whether one agent is running it or a thousand. Only the actors, the currency and the anchor change." -> the loop is invariant; the strategy distribution is the part that can vary. D1, D2. **triangulated** with Fig 2 (anchor test), low overlap between a size-boundary rule and a disagreement rule.
- Fig 2 :29-30 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor." -> each room needs an anchor test; a market is named as an anchor in the figure itself. D2. **single-source** within the figures.
- Fig 2 :33 "The anchor must not update." -> a movable school grade is not an anchor for learning. D2.
- Fig 11 :39 "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone." -> capability is not carried by the reasoner into every room. D3. **triangulated** with Fig 4, low overlap between habitat contact and membrane size.
- Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries." -> no standing list of good strategies survives a change of residual. D3.
- Fig 11 :73 "The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not." -> enumerate the habitat but do not mistake it for the anchor. D3.
- Fig 9 :4-5 "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." -> split the three settings before searching. D2, D4. **triangulated** with Fig 7, low overlap between a search-stop rule and a handoff rule.
- Fig 7 :35 "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." -> do not pool the rooms. D2, D4.
- Fig 4 :22 "Only methods cross up. Only head starts come down." -> a common strategy is a reusable method, not a recording of one success. D2. **single-source** within the figures.
- Fig 12 :124 "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." -> settings are functional groups over shared moves. D2. **triangulated** with Fig 4's invariant kernel, but the bond typing is a `specified` analogue, not a measurement.
- Fig 3 :20 "The chain is ordered by dependency, not by importance." -> anchor before currency before vocabulary before frequency. All domains.
- Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool" -> this simulated second seat is not a witness. D4. **triangulated** with Fig 10 :42, low overlap between correlation and verifier non-access.
- Fig 9 :32 "you get a kind of thing, never the answer itself" -> no frequency table is claimed. Empirical layer: **gap**, unreachable at this budget.
- Fig 13 :134 "Unreachable is a verdict here, not a silence," -> the stop is recorded, not hidden. Empirical layer.

## WORLD (secondary sources read)

World sources are corroboration only. All were opened on 2026-11-22. Overlap is declared per source; two share an author and two share an author pool, so agreement among them is one pool, not multiple witnesses.

- **Cultural psychology.** Nisbett, Peng, Choi and Norenzayan, Psychological Review, 2001: "The authors speculate that the origin of these differences is traceable to markedly different social systems." Predicts that reasoning processes vary with social systems. **corroborates** the conditionality claim. Overlap: shares an author with the education study below; about cultures rather than the three named institutions.
- **Human decision making, ecological rationality.** Mata, Pachur, von Helversen, Hertwig, Rieskamp and Schooler, Frontiers in Neuroscience, 2012: "First, the mind's decision strategies are adapted to particular environments. Therefore, decision strategies are not good or bad per se but can only be evaluated relative to the environments in which they are used." Predicts environment-relative strategy value and a table of strategy-environment fits. **corroborates** Fig 11. Overlap: low with the law and institutional sources.
- **Cognitive science, situated action.** Suchman, Human-Machine Reconfigurations, Cambridge University Press, 2006: "insofar as actions are always situated in particular social and material circumstances, the situation is crucial to action's interpretation." Predicts that reasoning cannot be read off the reasoner alone. **corroborates** Fig 11. Overlap: low.
- **Law, legal reasoning.** Stanford Encyclopedia of Philosophy, "Precedent and Analogy in Legal Reasoning," 2006: "Legal reasoning differs in a number of ways from the sort of reasoning employed by individuals in their everyday lives. It frequently uses arguments that individuals do not employ, or that individuals employ in different ways." Predicts a distinctive courtroom strategy set built on precedent and analogy. **corroborates** the functional-group reading for courts. Overlap: low.
- **Business and markets.** Gallagher, Mastrogiorgio and Petracca, Frontiers in Psychology, 2019: "That markets are cognitive institutions enabling and constraining economic reasoning also leads to the possibility of specific types of economic reasoning processes." Predicts market-specific reasoning enabled by the institution. **corroborates** Fig 4's currency claim. Overlap: medium, shares two authors with the next source.
- **Institutional economics.** Petracca and Gallagher, Journal of Institutional Economics, 2020: "Cognitive institutions are defined as institutions that not just allow agents to perform certain cognitive processes in the social domain but, more importantly, without which some of the agents' cognitive processes would not exist or even be possible." Predicts that institutions partly constitute the reasoning processes observed in them. **corroborates** Fig 11 strongly. Overlap: high with the previous source, same authors and evidence pool, so the two count as one witness.
- **Institutional decision making.** Engel and Weber, Journal of Institutional Economics, 2007: "We argue that the meta-choice of which problem-solving mode to use for a given decision can be influenced by institutions." Predicts that institutions select the reasoning mode directly. **corroborates** the shape most precisely. Overlap: medium, same journal pool but different authors and data from the two sources above.
- **Education.** Lehman and Nisbett, "A Longitudinal Study of the Effects of Undergraduate Training on Reasoning": "These results are consistent with the view that reasoning can be taught and with the presumption that different undergraduate disciplines teach different kinds of reasoning to different degrees." Predicts that different school disciplines produce different reasoning profiles. **corroborates** the school case. Overlap: high with Nisbett et al. 2001, shared author; read through the search integration rather than a direct page fetch.

No world source conflicts with the figure verdict, so the conflict rule was not triggered. Agreement among these sources is weak evidence because several share an evidence pool. Where they are independent (law versus ecological rationality, for example) the agreement is more informative, but still secondary to the figures.

## VERDICT (from the figures)

Yes, in a restricted sense. The loop is invariant across markets, schools, and courts; the strategies that become common are conditional on each setting's currency, anchor, and habitat, and a strategy's valence is relative to the residual there. The three settings are a union compound, not a partition, so their frequencies must not be averaged. They are best read as functional groups over shared reasoning moves. Which strategies actually are more common in each setting is not derivable from the figures; that is a ground question and a `gap` at this budget. The school anchor remains a live strain until the question is specified. This is a `specified`, ungrounded result.

- **cost if wrong:** bounded and locatable. The claim is a shape with five written refuters and an explicit gap, so an error is findable rather than invisible. The real cost is spending the independence of outside readers by pooling their agreement or by sending a frequency table the figures never produced, which Fig 2 :42 prices as "Buy independence in proportion to the cost of being wrong." That cost is avoidable by leading with the shape and the refuter.
- **undoable:** yes. The empirical gap can be closed room by room without touching the shape; an anchor test, a currency test, and a habitat enumeration per setting are additive. The live school-anchor strain can be resolved by specifying the question. No primitive has to be withdrawn.
- **reversed by:** a ground reading, not agreement. A single strategy retaining the same frequency and success criterion in all three settings after currencies and anchors are matched, a single scoring rule that works everywhere without changing what counts as correct, or a demonstration that two settings use disjoint atom sets would break the verdict. A movable metric that still settles would break the anchor test. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [The figures, as text (local verbatim extract)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA, eight-step loop and mode rule](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [Precedent and Analogy in Legal Reasoning (SEP)](https://plato.stanford.edu/entries/legal-reas-prec/)
- [Ecological Rationality: A Framework for Understanding and Aiding the Aging Decision Maker](https://pmc.ncbi.nlm.nih.gov/articles/PMC3278722/)
- [Economic Reasoning and Interaction in Socially Extended Market Institutions](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2019.01856/full)
- [Economic cognitive institutions, Journal of Institutional Economics](https://www.cambridge.org/core/journals/journal-of-institutional-economics/article/economic-cognitive-institutions/E93F4714D2126B547C3EDD62D8344544)
- [The impact of institutions on the decision how to decide, Journal of Institutional Economics](https://www.cambridge.org/core/journals/journal-of-institutional-economics/article/impact-of-institutions-on-the-decision-how-to-decide/BC93C3794E6B20DBC593B0030DD14888)
- [Conclusion to the 1st Edition, Human-Machine Reconfigurations (Suchman)](https://www.cambridge.org/core/product/8386E26332B53FF8314D54C5167BFCCF)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- Folder material synthesised: `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, `08_expert_verification_packet.md`
