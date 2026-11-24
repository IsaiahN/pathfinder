# WATSON answer: behavioral response and epidemic dynamics (CMP-0063)

**Mode: `specified` on the substantive claims, `general` on the structural shape. Not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This WATSON run synthesizes material already in `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (*The Recursive Self-Improvement Trap*: "the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the question it reports on. No measurement was taken.

## QUESTION

Decide, in effect terms, whether behavioral change is an external forcing applied to an epidemic or a term inside the epidemic's own loop. Option A: treat transmission as fixed and behavior as a perturbation. Option B: treat the two as one coupled compound whose output re-enters as its own input through contact. What each leads to: A gives one-peak forecasts, a stable threshold, and interventions that ignore the behavioral intersection; B gives the possibility of damped waves, sustained oscillations, bistability, a response-dependent threshold, and interventions that must be checked against the compound.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors, currency and anchor; partition or union; order by dependency.

- **R (the residual).** Fixed-behavior models mispredict peak timing, peak size, final size, R_t and wave count. Arity: two conditions bind at once, transmission and response. Symmetry: not symmetric; the chain perceive, believe, act, contact, transmit is ordered and closes only as a cycle. Scale: a step loop for the individual and a population loop for the epidemic, across the membrane. Slot: per group and per region, never a national average. Fig 9 names a union compound: a case in two conditions is not a harder case of either.
- **Domain 1, epidemiological transmission.** Actors: susceptible, infectious, recovered, contacts. Currency: infection events, R_t. Anchor: case and hospitalization data. Question type: partition of the disease loop alone.
- **Domain 2, behavioral response.** Actors: individuals, information, perceived risk, protective action. Currency: awareness, contact change. Anchor: contact surveys and behavioral time series. Question type: a binding onto held terms, not a new primitive; action keys on belief, not observation.
- **Domain 3, the coupled compound.** Actors: both loops, the information and disease networks. Currency: contact-mediated feedback. Anchor: epidemic data, never agreement. Question type: union with its own loop, its own ground and its own refuters.
- **Domain 4, verification and outreach.** Actors: modellers and expert readers. Currency: residuals and refutations. Anchor: the ground. In this simulated run all four domains draw on one evidence pool, so independence is zero and agreement carries no independent weight.
- **Order by dependency (Fig 3 :20).** Perceive cases, form belief, choose protective action, change contact, change transmission, new cases. A break at perception cannot be repaired downstream.

Strain test applied and re-censused: "contact" was initially read too narrowly as contact count; re-census of agent-and-habitat contact includes per-contact transmission conditions. "Closes" in Fig 12 :121 was initially read as "damps"; re-census makes it a topological claim with sign held separate. Two retractions preserved in `01` §5 and §8.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs.

- Fig 9 :57 "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound." -> the disease and behavior loops form a compound with its own loop and ground. [single-source for the union ruling]
- Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves." -> behavior can alter the epidemic only by changing the field of contact. [triangulated]
- Fig 4 :20 "Only the actors, the currency and the anchor change." -> cross-scale support for the contact claim: what changes is the cast and the ground, not a new physics of the agent. [triangulated with Fig 11 :40]
- Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." -> the coupling is a cycle; sign decides damping versus amplification. [triangulated]
- Fig 13 :31-32 "a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise." -> a finite information remainder in an amplifying loop can produce chaotic or wave-like dynamics. [triangulated with Fig 12 :121]
- Fig 12 :119 "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is." -> waves reopen because a persisting part changes the next wave's conditions. [single-source]
- Symbols table :20-21 "What the system takes to be the case before it acts. Formed from its own history and from what it inherited, mixed by w. Not the observation." -> behavior keys on perceived risk. [single-source]
- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> the behavioral signal is per group and per region. [single-source]
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." -> agreement among models sharing a data pool cannot settle the claim. [triangulated]
- Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool" -> this simulated second seat and these five world sources are one pool, not five witnesses for the verdict.
- Fig 6 :32 "An instrument is not built from a description. It is improved from a worse instrument already returning something." -> the tests that would settle the sign improve existing contact and case instruments.

Triangulation status: the contact-necessity verdict is triangulated across Fig 11 (habitat) and Fig 4 (membrane), two figures with low overlap. The cycle verdict is triangulated across Fig 12 and Fig 13. The union, catalyst, perception and per-slot verdicts are single-source within the figures; each is corroborated by at least one world source from a different field, but corroboration does not promote a single-source figure ruling to triangulation. No gap after re-census: the governing lines are held in Γ, so this is not an unreachable case and no import is owed.

## WORLD (secondary sources read)

World sources are corroboration only. Each was opened on 2026-11-22.

- **Epidemiology / mathematical modelling.** Sebastian Funk, Erez Gilad, Chris Watkins and Vincent A. A. Jansen, "The spread of awareness and its impact on epidemic outbreaks" (PNAS 106(16):6872-6877, 2009): "changes in behavior in response to the outbreak can alter the progression of the infectious agent." Predicts that awareness couples into transmission; corroborates Fig 11 :40. Overlap: low with the physics and control sources.
- **Mathematics / dynamical systems.** Winfried Just, Joan Saldana and Ying Xin, "Oscillations in epidemic models with spread of awareness" (arXiv:1606.08788, 2017): "such oscillations are ruled out in Susceptible-Aware-Infectious-Susceptible models with a single compartment of aware hosts, but can occur if we consider two distinct compartments of aware hosts." Predicts that wave structure depends on the internal decomposition of awareness; corroborates Fig 12 :121 and Fig 12 :119. Overlap: none with the ecology source.
- **Physics / complex systems.** Thilo Gross and Bernd Blasius, "Adaptive coevolutionary networks: a review" (J R Soc Interface 5:259-271, 2008): "At high rewiring rates the adaptive SIS model of Gross et al. (2006) can approach an oscillatory state in which the prevalence of the epidemic changes periodically." Predicts waves from local contact change; corroborates the cycle and catalyst readings. Overlap: low with the epidemiology source.
- **Engineering / control theory.** "Negative feedback" (Wikipedia, control theory entry, accessed 2026-11-22): "negative feedback systems can still be subject to oscillations. This is caused by a phase shift around any loop." Predicts that sign and delay are distinct; corroborates the split in `06_isomers_and_order.md`. Overlap: a general reference, not drawn from the epidemic literature.
- **Animal behaviour / ecology.** Sonny S. Bleicher, "The landscape of fear conceptual framework" (PeerJ 5:e3772, 2017): "Landscapes of Fear (LOF), the spatially explicit distribution of perceived predation risk as seen by a population." Predicts that perceived, spatially distributed risk drives behavior that changes higher-level outcomes; corroborates the Symbols-table belief claim and Fig 1 :19. Overlap: none with the modelling sources.

No world source conflicts with the figure verdict, so the conflict rule was not triggered. Agreement among these five is weak corroboration: they come from different fields but all were selected by the same residual description, and the second seat shares this evidence pool.

## VERDICT (from the figures)

Behavioral change alters an epidemic by becoming a term inside the epidemic's own loop. The system is a union compound; behavior acts only through contact; the coupling is a cycle whose sign and delay decide damping, oscillation or amplification; the input is perceived risk held per slot; and waves reopen because a part survives its own use. The framework does not name the sign, delay or magnitude for any real outbreak, and any such name from a case curve alone is the metamerism error. This is a `specified`, ungrounded result. The strongest single figure-grounded point is contact-necessity (Fig 11 :40), triangulated with Fig 4 :20.

- **cost if wrong:** bounded and locatable. The packet is mode-labelled, states four refuters before the conclusion, and records the lineage, so an error is findable rather than invisible. The real cost is spending the independence of outside readers by sending a conclusion instead of a generator; Fig 2 :42 says "Buy independence in proportion to the cost of being wrong." That cost is avoidable by leading with the shape claim and its refuters.
- **undoable:** yes. The numerical bindings, if any were added, are removable without touching the derivation; `07_the_tether_answer.md` and `08_expert_verification_packet.md` already remove them. A sent claim can be superseded by a corrected packet, and no primitive must be withdrawn.
- **reversed by:** a ground reading, not agreement. The contact test, the sign test, the perception and slot test, and the union test in `07` §4 would each reverse the corresponding sub-claim. A source-discriminating instrument that separates belief-driven from ground-driven behavior would name what the framework refuses to name. Until one of these fires, the verdict stands as `candidate`.

## Sources

- [The figures, as text (local, verbatim with line numbers)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [The spread of awareness and its impact on epidemic outbreaks](https://pmc.ncbi.nlm.nih.gov/articles/PMC2672559/)
- [Oscillations in epidemic models with spread of awareness](https://arxiv.org/html/1606.08788v2)
- [Adaptive coevolutionary networks: a review](https://pmc.ncbi.nlm.nih.gov/articles/PMC2405905/)
- [Negative feedback](https://en.wikipedia.org/wiki/Negative_feedback)
- [The landscape of fear conceptual framework](https://pmc.ncbi.nlm.nih.gov/articles/PMC5600181/)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [They're Scanning Books When They Should Be Studying Nature](https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should)
- [How Intelligence Actually Works](https://adventuresinml.substack.com/p/how-intelligence-actually-works)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [Decoding Tacit Knowledge](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
