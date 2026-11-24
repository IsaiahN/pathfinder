# Public links and distribution

Every link in the tables below was fetched and read on 2026-11-22. Two attempted venues failed and are recorded, not hidden.

## Verified sources fetched

| what | URL | verified content |
|---|---|---|
| Boids (Wikipedia) | https://en.wikipedia.org/wiki/Boids | Reynolds 1987 SIGGRAPH paper cited; the simplest model uses separation, alignment, cohesion; "the complexity of Boids arises from the interaction of individual agents ... adhering to a set of simple rules"; "More complex rules can be added, such as obstacle avoidance and goal seeking." |
| Stigmergy (Wikipedia) | https://en.wikipedia.org/wiki/Stigmergy | Grassé 1959 termite work; indirect coordination through the environment; "without need for any planning, control, or even direct communication between the agents"; traces act as a shared external memory. |
| Vicsek model (Wikipedia) | https://en.wikipedia.org/wiki/Vicsek_model | Vicsek et al. 1995; self-propelled particles align with neighbors under noise; "This spontaneous organization of particles epitomizes collective motion." |
| Vicsek et al. 1995 abstract (arXiv) | https://arxiv.org/abs/cond-mat/0611743 | "spontaneous symmetry breaking of the rotational symmetry"; journal reference Phys Rev Lett 75(6):1226-1229 (1995). |
| Self-organization (Wikipedia) | https://en.wikipedia.org/wiki/Self-organization | "overall order arises from local interactions between parts of an initially disordered system"; "wholly decentralized, distributed over all the components"; examples from physics, chemistry, biology, robotics, social science. |
| Swarm robotics (Wikipedia) | https://en.wikipedia.org/wiki/Swarm_robotics | "study of how to design independent systems of robots without centralized control"; swarm-intelligence principle "Robots do not exploit centralized swarm control or global knowledge." |
| Spontaneous order (Wikipedia) | https://en.wikipedia.org/wiki/Spontaneous_order | Hayek, Ferguson: "the emergence of large-scale patterns of social coordination from the actions of many individuals, none of whom intends or designs the overall results"; markets, language, common law as examples. |
| Collective animal behavior (Wikipedia) | https://en.wikipedia.org/wiki/Collective_animal_behavior | "coordinated behavior of large groups of similar animals as well as emergent properties of these groups"; three-rule models (align, stay close, avoid collisions); quorum rule in consensus decisions. |
| How a Society of Agents Would Work | https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work | "capability is a property of agent-and-habitat, never of the agent alone"; "The group's agreement is never the verdict"; "everything drifts together, and the drift is coherent, which is why nobody notices"; cites Woolley et al. 2010 on collective intelligence tracking turn-taking rather than member intelligence. |
| The Library of Babel: Locating The Book of Books | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | "cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer"; "Perhaps your problem was a bundle or conflation of several problems masquerading as one?" |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself"; "Prestige can fund an action... but it cannot settle an action. Only the ground can settle it." |
| Santa Fe Institute contact | https://www.santafe.edu/about/contact | Public contact page and opt-in research-news subscribe, fetched 2026-11-22. |
| ISCS contact | https://complexsystems.org/contact/ | Institutional contact page, fetched 2026-11-22. |
| Swarm Intelligence journal | https://link.springer.com/journal/11721 | Journal page with manuscript submission and contact-the-journal routes, fetched 2026-11-22. |

## Fetch failures, recorded

- `https://www.tandfonline.com/journals/tncb20` returned HTTP 403 on 2026-11-22. The journal exists but could not be read here, so no claim from it is used.
- `https://direct.mit.edu/artl` returned HTTP 403 on 2026-11-22. No claim from it is used.

Per the standing rule, a failed fetch is not a source. These two are listed so the distribution plan does not silently rely on them.

## Wider literature that bears on the question

1. **Computer graphics / artificial life.** Reynolds' Boids shows global flocking from three local rules, with goal seeking listed as an optional extra rather than a requirement. This is the clearest low-overlap witness for "no shared goal, no controller".
2. **Biology / cognition.** Grassé's stigmergy shows coordination through traces in the environment, with no planning, control, or direct communication. This answers the narrow reading of "common information" but not the broad one: the trace *is* shared information, just not shared intent.
3. **Physics / active matter.** The Vicsek model shows collective motion from local alignment plus noise, with a phase transition and spontaneous symmetry breaking, no leader term.
4. **Complex systems.** Self-organization is defined as order from local interactions, decentralized and distributed, with positive feedback and energy flow.
5. **Engineering.** Swarm robotics explicitly designs systems without centralized control or global knowledge; "Robots do not exploit centralized swarm control or global knowledge."
6. **Economics / social science.** Spontaneous order: large-scale coordination from individuals, none of whom designs the result; Hayek's "result of human action but not of human design".
7. **Animal behaviour.** Collective animal behavior: three-rule models and quorum consensus, with decisions emerging from local interactions.
8. **Framework essays.** The Society of Agents essay connects the figure set directly to multi-agent systems and records the drift failure that comes from agents converging to an average. It shares an author with the figures, so its agreement is expected and is treated as weak corroboration, not an independent witness.

Overlap check: items 1 through 7 are written by different communities in different fields and do not share an evidence pool with the figures. Item 8 shares the framework author. Agreement across 1 through 7 is genuine low-overlap corroboration for the shape; agreement from item 8 is one pool talking.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 10 :52** "Bring a characterised residual, never the source." Sending the essays before the reader has given a verdict on the shape sends a recording, not a generator.
- **Fig 10 :42** "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28** "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the shape claim were true before giving them the links.
- **Fig 7 :35** "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." Do not treat the number of people who like the claim as evidence for it.
- **Fig 9 :60** "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." A venue's prestige is a filter on where to try, never a witness for the verdict.

## The two-stage offer

1. **Stage 1.** Send the four-clause shape and the five refuters from `02_outreach_email.md`. Ask what the reader would count as a failure. Record their verdict before any theory is shown.
2. **Stage 2, opt-in only.** If they are curious, offer the three framework essays above, with the note that the figures, not the summary, are the authority.
3. **Stage 3, opt-in only.** Offer the eight-step loop as a method to reuse, with the instruction that each user names a ground and writes a refuter before running it.

Stage 2 is opt-in by construction: once a recipient has absorbed the theory, their agreement stops being evidence (Fig 2 :39-40). Stage 3 sends a generator, which is permitted by Fig 4 :22 "Only methods cross up. Only head starts come down."

**Hard precondition:** stages 1 to 3 only work if the stage-1 shape survives. If a reader fires any of the five refuters, the corresponding clause is withdrawn and the packet is not sent onward as a success.

## Hosting

Nothing is sent by this agent. Hosting and sending are yours. Prefer an opt-in download or submission page over a pushed attachment, so a recipient can decline contact without a reply.
