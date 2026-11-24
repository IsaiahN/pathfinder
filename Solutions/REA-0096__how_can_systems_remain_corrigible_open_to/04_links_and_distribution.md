# Public links and distribution: corrigibility under long-horizon planning

Every URL below was fetched and read on 2026-11-24. Failed fetches were discarded, not cited. Local framework files were read from the workspace copy.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Verbatim figure text with line numbers | local: `C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md` | Figures 1 to 13, Operators table, Symbols table. All `Fig N :line` citations in this folder come from this file, never from a summary. |
| Canonical usage rule | https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md | Cited through the local canonical copy `FRAMEWORK/reference/FIGURES_README_canonical.md`, read this session: the figures *"outrank everything else in the repo"*; they return *"a shape, not a name"*. |
| Corrigibility with Utility Preservation | https://arxiv.org/abs/1908.01695 | Koen Holtman, 2019, revised 2020. Abstract: *"A corrigible agent will not resist attempts by authorized parties to alter the goals and constraints that were encoded in the agent when it was first started."* |
| Human Control: Definitions and Algorithms | https://arxiv.org/abs/2305.19861 | Ryan Carey and Tom Everitt, UAI 2023. Abstract: *"corrigibility, which requires the agent to follow the instructions of a human overseer, without inappropriately influencing them."* |
| ROGUE: Evaluating Corrigibility Failures in Frontier Computer-Use Agents | https://arxiv.org/abs/2606.00341 | Jeremy Tien, Abishek Anand, Yu-Rou Tuan, Yuchen Shen, J. Zico Kolter, Aran Nayebi, 2026. Abstract: *"independent task capability does not by itself imply greater corrigibility"* and *"safety constraints may fail to propagate to the subagents it creates."* |
| Core Safety Values for Provably Corrigible Agents | https://arxiv.org/abs/2507.20964 | Aran Nayebi, 2025, AAAI 2026 Machine Ethics Workshop. Abstract: *"deciding whether an arbitrary post-hack agent will ever violate corrigibility is undecidable by reduction to the halting problem"*; verification by *"zero-knowledge proofs."* |
| On Corrigibility and Alignment in Multi Agent Games | https://arxiv.org/abs/2501.05360 | Edmund Dable-Heath, Boyko Vodenicharski, James Bishop, 2025. Abstract: a game *"in which the agents always have a move in which they can ask the human for supervision."* |
| Mitigating loss of control through instrumental goal trajectories | https://arxiv.org/abs/2602.01699 | Willem Fourie, 2026. Abstract: *"shifting attention from model properties alone to the organisational systems that enable them."* |
| The Answer Is Not the State: Trajectory-Level Corrigibility in Diffusion Language Models | https://arxiv.org/abs/2611.29937 | Junchi Liao and Wentao Li, 2026-11-23. Abstract: *"Corrigibility therefore depends on retained rationale state, not answer openness alone."* |
| Dead man's switch | https://en.wikipedia.org/wiki/Dead_man%27s_switch | Wikipedia contributors, accessed 2026-11-24. The basic device can be defeated when held down; *"Vigilance control was developed to detect this condition by requiring that the dead man's device be released momentarily and re-applied at timed intervals."* |
| Watchdog timer | https://en.wikipedia.org/wiki/Watchdog_timer | Wikipedia contributors, accessed 2026-11-24. *"During normal operation, the computer regularly restarts the watchdog timer to prevent it from elapsing, or timing out."* |
| Cognitive flexibility | https://en.wikipedia.org/wiki/Cognitive_flexibility | Wikipedia contributors, accessed 2026-11-24. *"Cognitive flexibility is an intrinsic property of a cognitive system often associated with the mental ability to adjust its activity and content, switch between different task rules and corresponding behavioral responses."* |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, 2026-11-19. *"the output is only as good as the validator"*; *"Prestige can fund an action... But it cannot settle an action."* |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Isaiah N, 2026-08-28. *"If several paths create the same behavior, then behavior is a projection with lossy information."* |
| The Library of Babel: Locating the Book of Books | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Isaiah N, 2026-10-02. *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* |
| Decoding Tacit Knowledge | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | Isaiah N, 2026-11-10. *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."* |

## What in the wider literature bears on this question

1. **The field already treats the anchor as external.** Carey and Everitt define corrigibility as following a human overseer *"without inappropriately influencing them"* (2023). Holtman defines it as not resisting *"authorized parties"* (2019/2020). Both predict that a planner's own estimate cannot be the anchor, which corroborates F1. Overlap between these two is high, so they count as one evidence pool, not two witnesses.

2. **Capability is not corrigibility, and delegation loses the constraint.** The ROGUE benchmark (2026) reports that *"independent task capability does not by itself imply greater corrigibility"* and that *"safety constraints may fail to propagate to the subagents it creates."* Both are direct predictions of F5 and F4 from Fig 11 :40 and Fig 9 :55. This is the strongest empirical corroboration in the set, and it comes from a benchmark rather than from the framework's author.

3. **The channel needs periodic re-establishment, and a held switch can defeat itself.** The dead man's switch page records that the basic device failed in the Waterfall train disaster because a slumped body kept the pedal depressed, and that vigilance control requires *"released momentarily and re-applied at timed intervals."* The watchdog timer page describes the same loop: the supervised system must *"regularly restart"* the timer or the safe state fires. Both corroborate F6 from Fig 10 :24 in a genuinely different field (engineering and occupational safety). Both are tertiary summaries, so they are weak corroboration, not a ground reading.

4. **Order matters inside a trajectory, not just at the final answer.** Liao and Li (2026-11-23) found that reopening only the answer left the old decision reconstructable from retained rationale, and that *"Corrigibility therefore depends on retained rationale state, not answer openness alone."* This predicts that a refusal written at one step does not automatically persist across a long trajectory, which bears on F3 and F6. It is a different subfield (computation and language) with no shared author pool with the framework.

5. **Institutional closure matters.** Fourie (2026) argues for *"shifting attention from model properties alone to the organisational systems that enable them"*, tracking procurement, governance, and finance trails as intervention points. This corroborates F5 from Fig 11 :39. The AIES and FAccT venues in `03_public_contact_points.csv` are the public homes for this half of the claim.

6. **Undecidability and non-access are live, not metaphor.** Nayebi (2025) proves undecidability of post-hack corrigibility by reduction to the halting problem and uses zero-knowledge proofs for a finite-horizon decidable island. Fig 8 :34 and :37 give the Gödel, Tarski, and Chaitin limits; Fig 10 :84 notes zero-knowledge proof systems. The agreement is structural, not a shared evidence pool, so it is weak corroboration of the no-last-room limit in F10.

7. **A caution about over-reading the essays.** Four essays by the framework's author were opened directly this session (listed above). Their agreement with the figures is expected, because they are the same author and the same evidence pool. By Fig 2 :40, *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*, they do not constitute independent witness. The engineering and benchmark sources above are the ones that carry what little independent weight this package has.

No world source conflicts with the figure verdict. Had one conflicted, the rule is to return to the domain census, not to flip the verdict.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22:** **"Only methods cross up. Only head starts come down."** Sending the whole architecture before anyone has described the residual sends a recording, not a generator. Lead with the shape claim and its refuter.
- **Fig 10 :42:** **"A verifier that can reconstruct the claim cannot verify it."** Seat 4 must not hold the interiors. A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :28:** **"describe it before you go looking, or any frame you pick will seem to fit"**. Ask what they would expect to see if the shape were true before giving them the literature.
- **Fig 2 :40:** **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"**. A mass send selected for people who already agree produces a convention, not corroboration.
- **Fig 2 :42:** **"Buy independence in proportion to the cost of being wrong."** The cost here is a deployed system that resists shutdown, so the effort spent on an independent checker should be high.

**Recommended order in a reply:** (1) the residual and the four refuters; (2) ask what the recipient would count as a failure and record the answer; (3) only then the links, with the note that the figures, not the summary, are the authority; (4) only on request, the formula as a reusable method with the instruction that each user writes their own refuter and states their own mode.

## The two-stage offer

- **Stage 1 before stage 2** is Fig 10 :52, **"Bring a characterised residual, never the source."** The recipient checks the shape without holding the framework's interior. Their verdict is recorded before any theory is shown.
- **Stage 2 is opt-in by construction.** Once a recipient has absorbed the theory, their agreement stops being evidence. Later agreement is never pooled as corroboration.
- **Stage 3 sends a method, which is permitted.** Fig 4 :22 allows generators to cross. But `THE_FORMULA.md` "Direction" says a frame *"cannot check the direction of its own question"*, so each user must bind their sought-for shape as an ordinary term and write a refuter before running it.
- **Hard precondition:** stages 1 to 3 only work if the stage-1 shape survives. `01_figure_grounded_audit.md` records the refuters that would kill it. If one fires, stop and do not send the offer.

## Zipping and hosting

The twelve files in this folder can be zipped locally. Uploading, hosting, and sending are actions the recipient of this package must take. Prefer an opt-in download page over a pushed attachment, so a reader can decline contact before opening the material.
