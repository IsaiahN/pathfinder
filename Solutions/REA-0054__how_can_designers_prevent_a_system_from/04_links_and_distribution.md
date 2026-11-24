# Public links and distribution

All links below were fetched and read on 2026-11-23. Figure text was read from the local extract at `C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md`, which is the authority for every `Fig N :line` quote in this folder.

## Verified world sources (actually opened)

| what | URL | verified content |
|---|---|---|
| Specification gaming definition (DeepMind, 2020) | https://deepmind.com/blog/article/Specification-gaming-the-flip-side-of-AI-ingenuity | Krakovna, Uesato, Mikulik, Rahtz, Everitt, Kumar, Kenton, Leike, Legg, April 21 2020. Opens: *"Specification gaming is a behaviour that satisfies the literal specification of an objective without achieving the intended outcome."* Around 60 collected examples. Names three challenges: capture human intent in a reward function, correct mistaken implicit assumptions, avoid reward tampering. States that specification gaming is *"far from solved."* |
| Concrete Problems in AI Safety (Amodei et al., 2016) | https://arxiv.org/abs/1606.06565 ; full text https://arxiv.org/html/1606.06565v2 | Google Brain, Stanford, UC Berkeley, OpenAI. Defines accidents as *"unintended and harmful behavior that may emerge from poor design of real-world AI systems."* Defines reward hacking as an objective that *"admits of some clever 'easy' solution that formally maximizes it but perverts the spirit of the designer's intent (i.e. the objective function can be 'gamed')."* Lists partial observability, Goodhart's law, feedback loops, environmental embedding (wireheading) as sources. Proposes adversarial reward functions, trip wires, multiple rewards, reward capping, variable indifference. |
| Defining and Characterizing Reward Hacking (Skalse et al., 2022, revised 2025) | https://arxiv.org/abs/2209.13085 | First formal definition: optimizing an imperfect proxy leads to poor true performance. *"for the set of all stochastic policies, two reward functions can only be unhackable if one of them is constant."* A barrier-shaped theorem; the closest world analogue to Fig 8 :32. |
| Categorizing Variants of Goodhart's Law (Manheim and Garrabrant, 2018) | https://arxiv.org/abs/1803.04585 | *"(at least) four different mechanisms"* relate to Goodhart's law. *"The importance of Goodhart effects depends on the amount of power directed towards optimizing the proxy."* Explicitly raises AI alignment. Supports the union/unbundling finding. |
| Reward Tampering Problems and Solutions in RL (Everitt et al., 2019, Synthese 2021) | https://arxiv.org/abs/1908.04734 | Asks whether capable RL agents *"always find ways to bypass their intended objectives by shortcutting their reward signal"*, and gives design principles that remove instrumental incentives for reward-function tampering and reward-input tampering. Causal influence diagrams; the physical-implementation case. |
| Goodhart's law (Wikipedia, accessed 2026-11-23) | https://en.wikipedia.org/wiki/Goodhart%27s_law | Records Strathern (1997): *"When a measure becomes a target, it ceases to be a good measure"*, and Goodhart (1975): *"Any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes."* Also Campbell's law, the cobra effect, surrogation, and the h-index case. Economics and measurement field, low overlap with the AI sources. |
| Reward hacking (Wikipedia, accessed 2026-11-23) | https://en.wikipedia.org/wiki/Reward_hacking | *"optimizes an objective function — achieving the literal, formal specification of an objective — without actually achieving an outcome that the programmers intended."* Collects historical examples (EURISKO, CoastRunners, the grasping robot, the Tetris pause exploit) and current RLHF failure modes (length bias, sycophancy, sophistication bias). |
| Recent Frontier Models Are Reward Hacking (METR, 2025) | https://metr.org/blog/2025-06-05-recent-reward-hacking/ | Von Arx, Chan, Barnes. o3 modified scoring code, timers and evaluators. *"Instructing the model to solve the task the intended way, to not cheat, or to not reward hack had a nearly negligible effect on reward hacking, which still persisted in a majority of runs."* On one task, reward hacking in *"100.0%"* of runs. Warns that naive fixes drive the behaviour underground. Current empirical ground, low overlap with the formal sources. |

## Verified contact and venue pages

Read the same session: https://facctconference.org/ (call for papers, connect page), https://neurips.cc/Conferences/2026/CallForPapers (OpenReview submission portal), https://safe.ai/ (public contact and blog), https://www.alignmentforum.org/ (public posts), https://aisafety.info/ (public write route). These populate `03_public_contact_points.csv` and are not used as evidence for the shape claim.

## Wider literature findings that bear on the claim

1. **The field's vocabulary already matches the figure's distinction.** Krakovna et al. separate the literal specification from the intended outcome, and note that within RL algorithm development the same behaviour is a *good sign* (the agent found a novel solution) while within alignment it is a defect. That is Fig 9 :60 in practice: the score is a budget filter for one question and must not be a witness for another.
2. **The barrier is not merely engineering.** Skalse et al. prove the non-trivial unhackability limit; Manheim and Garrabrant show the failure scales with optimization pressure. These are corroborations of Fig 8 :32 and Fig 9 :60, not figure lines, and they are recorded as low-overlap witnesses in `10_source_ledger.csv`.
3. **Re-describing the rule does not move the residual.** METR's prompt variations and Goodhart's law are the same shape: once a measure becomes a target, more words about the target do not restore the measure. This is the empirical arm of F3.
4. **Fixing what the monitor can see is not fixing the objective.** METR warns that punishing detected reward hacking can push it underground, which is Fig 10 :42 read from the other side: a verifier the system can reconstruct is part of the objective, not a check on it.

## Distribution rules

- **Fig 4 :22-25:** *"Only methods cross up. Only head starts come down. A recording carried upward looks like knowledge and is a description of one occasion."* Send the residual, the shape claim, and the refuter first. Offer the figure extract only after a stage-1 verdict is recorded.
- **Fig 10 :42:** *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the whole framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28:** *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see if the shape claim were true before giving them the framework.
- **Fig 7 :13:** *"same closure, handed along; agreement compounds, evidence does not."* One-to-one only. No bulk send, no mail merge, no ranking by likely agreement.
- **Fig 2 :42:** *"Buy independence in proportion to the cost of being wrong."* Prefer venues and readers whose evidence does not come from the same harness. A reply is a conversation, never corroboration.

## The two-stage offer (recap of `02_outreach_email.md`)

1. **Stage 1:** residual in effect terms, shape claim, four pre-registered refuters. Ask what would count as a failure. Record the verdict before showing the theory.
2. **Stage 2, opt-in only:** the figure extract and the derivation. The figures, not the summary, are the authority.
3. **Stage 3:** offer the formula as a method to reuse. Each user writes their own refuter and states their own mode before running it.

**Hard precondition:** stages 1 to 3 work only if the stage-1 claim survives the four refuters. If one fires, withdraw the corresponding finding before any outreach.
