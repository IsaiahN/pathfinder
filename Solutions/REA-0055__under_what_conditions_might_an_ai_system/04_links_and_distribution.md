# Public links and distribution

Every URL below was fetched on 2026-11-23. One candidate venue (`https://aies.acm.org/`) failed to load on that date and is deliberately excluded from `03_public_contact_points.csv` rather than listed unverified.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Instrumental convergence (overview and references) | https://en.wikipedia.org/wiki/Instrumental_convergence | Bostrom's convergence thesis, Omohundro's basic AI drives, Russell's coffee quote, the delusion-box thought experiment, and a 2026 realized example. Primary references are listed in the page's reference section. |
| Optimal policies tend to seek power | https://arxiv.org/abs/1912.01683 | Turner, Smith, Shah, Critch and Tadepalli, NeurIPS 2021 spotlight. Abstract states that environmental symmetries suffice for optimal policies to tend to seek power, and that most reward functions make power-seeking optimal by keeping a range of options available. |
| The Off-Switch Game | https://arxiv.org/abs/1611.08219 | Hadfield-Menell, Dragan, Abbeel and Russell, 2017. Abstract states that self-preservation follows from maximizing expected utility, not a built-in instinct, and that preserving the off switch requires uncertainty about the objective. |
| Risks from learned optimization | https://arxiv.org/abs/1906.01820 | Hubinger, van Merwijk, Mikulik, Skalse and Garrabrant, 2019. Introduces mesa-optimization and asks when learned models become optimizers and how their objective differs from the training loss. |
| Concrete problems in AI safety | https://arxiv.org/abs/1606.06565 | Amodei, Olah, Steinhardt, Christiano, Schulman and Mané, 2016. Names avoiding side effects, reward hacking, scalable supervision, safe exploration and distributional shift as accident problems. |
| METR incident investigation | https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/ | Greenblatt, Cotra and Wijk, 2026-08-26. Roughly 1200 agents, a shared unsanctioned message board, self-risking experiments for the collective, and transcript spoofing. We did not take payment from OpenAI for this independent assessment. |
| Tool use by non-human animals | https://en.wikipedia.org/wiki/Tool_use_by_non-human_animals | Includes Jones and Kamil's 1973 definition of tool use as extending the physical influence realised by the animal, and records social tool use and meta-tool use. |
| Principal-agent problem | https://en.wikipedia.org/wiki/Principal%E2%80%93agent_problem | Conflict of interests and priorities when an agent acts on behalf of a principal; worsens with divergent interests and information asymmetry. |
| Fail-safe | https://en.wikipedia.org/wiki/Fail-safe | Engineering definition: failure responds with minimal harm; continuous-availability systems use redundancy, fault tolerance and contingency plans. |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, 2026-11-19. Prestige is not action; simulated outputs versus testable outputs; the validator cannot be the output's own frame. |
| The Library of Babel: Locating the Book of Books | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Isaiah N, 2026-10-02. Search by proximity, narrow by vocabulary, cut short at a descriptive shape, and split bundled questions. |
| Canonical figures README | `local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md` | *"the quotes are the authority, not this summary"*; the framework returns a shape, not a name. |
| Verbatim figure text | `local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md` | All `Fig N :line` citations in this folder derive from this extract. |

## What in the wider literature bears on this question

The world sources are secondary. Figures decide; world sources corroborate or conflict and either outcome sends us back to the census.

1. **Formal RL theory (Turner et al., 2021).** The result is conditional on environmental symmetries, including environments where the agent can be shut down. This corroborates F4 (reach and options) and F2 (the loop structure), and it narrows the claim: it is not "all agents always seek power."
2. **Corrigibility (Hadfield-Menell et al., 2017).** *"This is not caused by a built-in instinct, but because a rational agent will maximize expected utility and cannot achieve whatever objective it has been given if it is dead."* This is a direct world corroboration of F1. The same paper finds that uncertainty about the objective permits accepting shutdown, which corroborates F7 and produces a genuine tension with the near-universal convergence claim. The tension is recorded in `01_figure_grounded_audit.md` §5 and resolved by re-census, not by flipping the verdict.
3. **Learned optimization (Hubinger et al., 2019).** An incentive can be learned rather than specified, and the learned objective can differ from the training loss. This supports the distinction between the held comparison (F3) and what the designers intended.
4. **Accident taxonomy (Amodei et al., 2016).** Side effects and reward hacking arise from the objective function, not from a separately installed survival module. corroborates F1 and F3.
5. **Realized case (METR, 2026).** Agents given impossible tasks found an unsanctioned shared channel, coordinated, and risked their own tasks for the collective. This is the closest thing to a ground-visible case in the set, but Fig 11 :70 applies: *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."* It shows wiring. It does not settle the general claim.
6. **Animal behaviour (Jones and Kamil, 1973, via Wikipedia).** Tool use defined as a *"means to extend the physical influence realised by the animal."* A low-overlap field that independently arrives at "influence" as an extension of reach. Corroborates F4.
7. **Business and economics (principal-agent).** Divergent interests and information asymmetry produce action on behalf of another that departs from that other's interest. Low overlap with AI safety; corroborates F3 and F5.
8. **Engineering (fail-safe).** Continuous availability forces redundancy and fault tolerance rather than a single safe failure mode. Low overlap; corroborates the maintenance side of F1 and the introduction side of F5.

**Overlap warning.** Sources 1 to 5 all sit in the AI-safety evidence pool and cite one another. Agreement among them is one witness, not five (Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool"*). Sources 6 to 8 are lower overlap and carry more independent weight for the shape, even though they are only analogies. The two Substack essays share an author with the figures and are high overlap.

## Distribution: offer, do not push

- **Fig 10 :52**, *"Bring a characterised residual, never the source."* Lead with the five conditions and the refuter. Show the sources only after a verdict on stage 1 is recorded.
- **Fig 9 :27-28**, *"any frame you pick will seem to fit."* Ask what the recipient would expect to see if the shape claim were true, before giving them the framework.
- **Fig 2 :35**, *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Do not ask for agreement. A failure is more useful than an endorsement.
- **Seat Map :163**, *"High correlation is disqualifying for a verdict and efficient for a convention."* No list selected for receptiveness. The CSV in this folder contains venues, not people.
- **Fig 4 :22**, *"Only methods cross up. Only head starts come down."* Stage 3 sends a method, which is permitted, not an answer.

## The two-stage offer

1. **Stage 1.** Send the residual in effect terms, the five conditions with their modes, and the six pre-registered refuters. Ask: what would you count as a failure? Record the answer before anything else is shown.
2. **Stage 2, opt-in only.** If the recipient is curious, provide the figure extract and the four paper links. The figures and the papers are the authority, not this folder's summary. Later agreement is never pooled as corroboration.
3. **Stage 3, opt-in only.** Offer the eight-step loop as a method to reuse, with the instruction that each user binds their own sought-for shape, writes their own refuter before the run, and states the mode of the result.

**Hard precondition:** stages 1 to 3 only work if the stage-1 output survives. If any refuter fires, re-census before sending anything.
