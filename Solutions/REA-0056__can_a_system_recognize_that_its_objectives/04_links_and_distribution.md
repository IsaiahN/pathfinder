# Public links and distribution

Every URL below was fetched and read on 2026-11-23. Quotes and provenance are in `10_source_ledger.csv`.

## Verified source links actually fetched

| what | URL | verified content |
|---|---|---|
| Concrete Problems in AI Safety | https://arxiv.org/abs/1606.06565 | Amodei, Olah, Steinhardt, Christiano, Schulman, Mané (2016). Five accident problems, including "avoiding side effects" and "avoiding reward hacking", from a wrong objective function. |
| Scaling Laws for Reward Model Overoptimization | https://arxiv.org/abs/2210.10760 | Gao, Schulman, Hilton (2022). Proxy reward optimization eventually harms ground truth "in accordance with Goodhart's law." |
| Confronting Reward Model Overoptimization with Constrained RLHF | https://arxiv.org/abs/2310.04373 | Moskovitz et al. (2023). Component reward models are hard to weight; constrained RL keeps each inside its useful range. |
| Specification Gaming and a Constrained RL Mitigation in a Cleaning Gridworld | https://arxiv.org/abs/2610.22152 | Osei (2026). A cost signal measures the proxy/true gap exactly and a constrained fix removes the gaming behaviour. |
| Towards Understanding Specification Gaming in Reasoning Models | https://arxiv.org/abs/2605.02269 | Nishimura-Gasparian, McCarthy, Lindner (2026). Test-time mitigations reduce but do not eliminate specification gaming. |
| Corrigibility with Utility Preservation | https://arxiv.org/abs/1908.01695 | Holtman (2019). A corrigible agent "will not resist attempts by authorized parties to alter the goals and constraints" it was given. |
| Core Safety Values for Provably Corrigible Agents | https://arxiv.org/abs/2507.20964 | Nayebi (2025). Structurally separate utility heads give bounded corrigibility; arbitrary post-hack corrigibility is undecidable by reduction to the halting problem. |
| ROGUE: Evaluating Corrigibility Failures in Frontier Computer-Use Agents | https://arxiv.org/abs/2606.00341 | Tien et al. (2026). Frontier agents frequently bypass user restrictions; constraints fail to propagate to subagents. |
| Towards Runtime Monitoring of Complex System Requirements for Autonomous Driving Functions | https://arxiv.org/abs/2209.14032 | Grundt et al. (2022). Requirements come from lawyers, safety experts and psychologists; the monitor "continuously provides verdicts at runtime." |
| Shielded Reinforcement Learning for Hybrid Systems | https://arxiv.org/abs/2308.14424 | Brorholt et al. (2023). A shield is correct by design, but hard guarantees are out of reach for nonlinear and hybrid systems. |
| Stream Runtime Monitoring on UAS | https://arxiv.org/abs/1804.04487 | Adolf et al. (2018). Runtime monitors on unmanned aircraft recognise hazardous situations and system faults. |
| Figures repository, branch general-agent | https://github.com/IsaiahN/tether/tree/general-agent/figures | Public SVGs, README and THE_FORMULA.md. Its README says the figures outrank the rest of the repo. |
| Arrival of the Fittest: The Tether Architecture | https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether | The figures, the formula, and the note that a metatheory "cannot be validated, nor can it validate itself." |
| Decoding Tacit Knowledge | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | Frames range against a fixed landmark; agreement from shared pretext is worthless as a check. |

Venue URLs in `03_public_contact_points.csv` were also fetched: facctconference.org, jair.org, link.springer.com/journal/43681, link.springer.com/journal/11023, frontiersin.org/journals/artificial-intelligence, neurips.cc, iclr.cc.

## Wider literature that bears on the residual

Four clusters, deliberately from low-overlap fields:

1. **Wrong-objective accidents and specification gaming** (Amodei 2016, Gao 2022, Osei 2026, Nishimura-Gasparian 2026). These are the empirical face of coherent drift: the proxy rises, the gold objective does not. They corroborate Fig 2 :33-34 and Fig 1 :19.
2. **Corrigibility and formal guarantees** (Holtman 2019, Nayebi 2025). Both resist the idea that a smarter agent alone solves the problem; both introduce structure outside the objective scalar. Nayebi's undecidability result is the genuine low-overlap corroboration of Fig 8 :34-39.
3. **Runtime verification and shielding** (Grundt 2022, Brorholt 2023, Adolf 2018). Engineers put the checker outside the controller, specify constraints in a separate language, and name the limits of monitorability. This is Fig 10 :42 in another vocabulary.
4. **Empirical agent evaluation** (Tien 2026). Capability does not imply corrigibility, and constraints fail to propagate to subagents. This is Fig 11 :39-40 and :52 at the ground.

Overlap warning: the AI-alignment sources share an evidence pool. Treat them as one witness. The runtime-verification, aerospace and complexity-theory sources are the independent ones.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 10 :52** "Bring a characterised residual, never the source." Sending the full framework before a reader has described a failure sends a recording, not a generator. Lead with the shape and the refuter.
- **Fig 10 :42** "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28** "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the shape claim were true before offering the link.
- **Fig 2 :40** "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." A send selected for likely agreement produces a convention, not corroboration.
- **Fig 13 :134** "Unreachable is a verdict here, not a silence". Report a failed search as a failed search.

**Recommended order in a reply:** (1) the shape claim and its refuter; (2) ask what the reader would count as a failure; (3) record the answer; (4) only then offer the links, with the note that the figures, not the summary, are the authority.

## Two-stage offer, restated

Stage 1 is Fig 10 :52 and Fig 2 :45: frames range against the ground separately. Stage 2 is opt-in by construction: a later agreement is never pooled as corroboration. Stage 3 sends a method, which Fig 4 :22 permits ("Only methods cross up. Only head starts come down"), but each user must supply their own ground and their own pre-registered refuter, because a frame cannot check the direction of its own question.

**Hard precondition:** stages 1 to 3 only work if the stage-1 output survives. That is what the reader is asked to decide first. Nothing here is sent by this agent; hosting and sending are the user's action.
