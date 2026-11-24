# Public links and distribution

All links below were fetched and read on 2026-11-23. World sources are corroboration only; they never overrule the figures.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Figures and formula (GitHub) | https://github.com/IsaiahN/tether/tree/general-agent/figures | Public repo, branch `general-agent`, folder `figures/`: Figures 1-13, Operators and Symbols tables as SVG, plus `THE_FORMULA.md` and the README. The canonical usage rule is cited from the README: the quotes are the authority, not the summary. |
| Voyager (arXiv) | https://arxiv.org/abs/2305.16291 | Wang, Xie, Jiang, Mandlekar, Xiao, Zhu, Fan, Anandkumar, 2023. *"an ever-growing skill library of executable code for storing and retrieving complex behaviors"*; the skills are *"temporally extended, interpretable, and compositional"* and *"alleviates catastrophic forgetting."* |
| Reflexion (arXiv) | https://arxiv.org/abs/2303.11366 | Shinn, Cassano, Berman, Gopinath, Narasimhan, Yao, 2023. Agents *"verbally reflect on task feedback signals, then maintain their own reflective text in an episodic memory buffer to induce better decision-making in subsequent trials."* |
| LLM Agent Survey (arXiv) | https://arxiv.org/abs/2309.07864 | Xi, Chen, Guo et al., 2023. *"AI agents are artificial entities that sense their environment, make decisions, and take actions."* The survey's general framework has three components: brain, perception, action. |
| Embodied Cognition (Stanford Encyclopedia of Philosophy) | https://plato.stanford.edu/entries/embodied-cognition/ | First published 2021, substantive revision 2026. Reports Brooks's robot architecture that *"use[s] the world as its own model"* and Gibson's *"affordances"*, which are *"opportunities for action that are revealed through the interaction of organisms with features of their environment."* Also records the symbol grounding problem (Harnad 1990). |
| Allostasis (Wikipedia) | https://en.wikipedia.org/wiki/Allostasis | Concept from Sterling and Eyer, 1988. *"maintaining stability through change"* (Wingfield). Predictive regulation: *"Allostasis is essential in order to maintain internal viability amid changing conditions."* |
| Autopoiesis (Wikipedia) | https://en.wikipedia.org/wiki/Autopoiesis | Maturana and Varela, 1972. *"a system capable of producing and maintaining itself by creating its own parts"*; an autopoietic machine *"continuously regenerate[s] and realize[s] the network of processes (relations) that produced [it]."* |
| Executive functions (Wikipedia) | https://en.wikipedia.org/wiki/Executive_functions | Cognitive control processes that *"support goal-directed behavior, by regulating thoughts and actions through cognitive control, selecting and successfully monitoring actions that facilitate the attainment of chosen objectives."* Includes planning, inhibitory control, working memory and cognitive flexibility. |
| Optimal foraging theory (Wikipedia) | https://en.wikipedia.org/wiki/Optimal_foraging_theory | Behavioural ecology. An animal adopts a strategy that *"provides the most benefit (energy) for the lowest cost"*; the marginal value theorem describes *"a situation in which an organism searching for food in a patch must decide when it is economically favorable to leave."* |
| AAAI | https://www.aaai.org/ | Verified live; public contact page and conference routes including AIES and AIIDE. |
| JAIR | https://www.jair.org/ | Verified live; open-access submissions in all areas of AI, scope includes agents and multi-agent systems. |
| Cognitive Science Society | https://cognitivesciencesociety.org/ | Verified live; public contact form, annual CogSci conference, journals. |
| IFAAMAS | https://www.ifaamas.org/ | Verified live; purpose is to promote autonomous agents and multiagent systems, sponsors AAMAS. |
| Partnership on AI | https://www.partnershiponai.org/ | Verified live; public contact form; publishes on agent observability and failure detection. |

One fetch failed: `https://www.aamas-conference.org/` returned a transport error. The IFAAMAS site was fetched instead and is the venue of record for AAMAS. The failed URL is recorded here rather than hidden.

## What the wider literature bears on the question

The world sources fall into four low-overlap evidence pools. None settles the figure verdict; each predicts a piece of the shape.

1. **AI engineering (Voyager, Reflexion, LLM Agent Survey).** These name mechanisms that fill conditions in the census: an ever-growing skill library fills reach renewal (D4), an episodic memory buffer fills learn and carry (D1), and the brain/perception/action decomposition fills the dependency chain (D1). They predict that a long-lived agent needs memory, curriculum and feedback. They do **not** predict that capability is agent-and-habitat; that is the figure verdict. Corroborates D1 and D4 at the mechanism level, with high overlap among the three (same field and overlapping authors/citations), so this is one witness, not three.
2. **Philosophy of mind and cognitive science (SEP embodied cognition).** *"use the world as its own model"* (Brooks) and Gibson's affordances corroborate the agent-and-habitat verdict (F1) from a frame that does not share the figures' vocabulary. Low overlap with the AI pool, so this is a genuinely separate witness for the shape. The article also records that more than one embodied thesis exists and that the field is contested, which is a caution against treating affordances as a settled mechanism.
3. **Biology and systems theory (allostasis, autopoiesis).** *"maintaining stability through change"* and *"producing and maintaining itself by creating its own parts"* corroborate the maintenance reading of autonomy from living systems. Allostasis in particular predicts that viability under changing conditions requires anticipatory regulation plus feedback correction, which maps onto the channel-maintenance condition (F4). Low overlap with AI and philosophy pools, so a separate witness for the union shape. Note the asymmetry: autopoiesis is about operational closure, and the figures require an import to move the wall, so the analogy is partial and is recorded as partial.
4. **Animal behaviour (optimal foraging).** The marginal value theorem gives an independent, quantitative version of Fig 9 :44 (*"Only a sealed room can be searched to the end"*): leave a patch when the marginal return falls below the environmental average, where travel time is a constraint. This corroborates the leave/arrive structure (D6) and the two-currency price in Fig 12 :126 from a field with almost no overlap with the others. It does not corroborate any specific AI architecture.

**Evidence-pool warning (Fig 2 :40):** *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."* AI engineering sources overlap heavily; philosophy, biology and animal behaviour are lower-overlap. Even so, all are secondary. The verdict comes from the figures (Fig 2 :45, *"Frames range against the ground. They do not negotiate with it."*).

**A conflict that was returned to the census.** Barney-style resource arguments (not cited here as evidence) and executive-function descriptions both tempt a "trait inside the agent" reading, which conflicts with Fig 11 :40. The conflict was returned to the census and re-mapped: the trait is a binding onto a held condition in D1 or D3, not a property of the agent alone. It did not flip the verdict. Agreement from a shared pool is one witness, not two (Fig 2 :19-21).

## Distribution: offer, do not push

- **Fig 4 :22** - *"Only methods cross up. Only head starts come down."* Sending the full architecture before anyone has described a residual sends a recording, not a generator. Lead with the shape claim and its refuter; offer links after.
- **Fig 10 :42** - *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the whole framework before being asked for a verdict has joined the frame being checked. Stage 1 must be answered before stage 2 is shown.
- **Fig 9 :27-28** - *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see if the shape claim were true before giving them the article.
- **Fig 2 :40** - *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."* No bulk send selected for people likely to agree.
- **Fig 8 :53** - *"Residual first, frame second."* The first contact is the residual and its refuter, not the executive-function or skill-library mapping.

## The two-stage offer (plus an optional third stage)

1. **Stage 1:** send the shape claim and the pre-registered refuter. Ask what they would count as a failure. Record their verdict *before* showing any theory.
2. **Stage 2, opt-in only:** if they are curious, offer the three source links. The figures, not the summary, are the authority.
3. **Stage 3, optional:** offer the formula as a method to reuse, with the instruction that each user writes their own refuter and states their own mode.

Stage 1 before stage 2 is Fig 10 :52 and Fig 2 :45. Stage 2 is opt-in by construction. Stage 3 sends a method, which Fig 4 :22 permits, but each user still needs a ground and a refuter of their own (Formula "Direction").

**Hard precondition:** stages 1 to 3 only work if the stage-1 output survives. As currently derived it is a `specified` shape with a genuine gap at the mechanism level, so it is checkable rather than assertive. Do not promote it to `grounded` in the email.

## Hosting

No packet is sent by this agent. Hosting and sending are the owner's to do. Prefer an opt-in download page over an attachment pushed to a list, so a recipient can decline contact. Keep the shape claim and refuter in front of the links in whatever page is used.
