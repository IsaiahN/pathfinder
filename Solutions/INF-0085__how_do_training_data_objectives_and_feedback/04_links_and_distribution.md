# Public links and distribution

All links below were fetched and read on 2026-11-23. Each one actually returned content; the two guessed links that failed (a Nature article URL that returned 404, and an arXiv ID that turned out to be an unrelated finance paper) were discarded rather than cited.

## Verified world sources

| what | URL | verified content |
|---|---|---|
| Concrete Problems in AI Safety | https://arxiv.org/abs/1606.06565 | Amodei, Olah, Steinhardt, Christiano, Schulman and Mané, submitted 2016, revised 2016. Abstract categorizes accident risk by *"having the wrong objective function"*, *"an objective function that is too expensive to evaluate frequently"*, and undesirable learning-process behavior. |
| Deep reinforcement learning from human preferences | https://arxiv.org/abs/1706.03741 | Christiano, Leike, Brown, Martic, Legg and Amodei, 2017, revised 2023. Abstract: goals defined by *"human preferences between pairs of trajectory segments"* with feedback on *"less than one percent of our agent's interactions with the environment."* |
| Scaling Laws for Reward Model Overoptimization | https://arxiv.org/abs/2210.10760 | Gao, Schulman and Hilton, 2022. Abstract: *"Because the reward model is an imperfect proxy, optimizing its value too much can hinder ground truth performance, in accordance with Goodhart's law."* |
| The Curse of Recursion | https://arxiv.org/abs/2305.17493 | Shumailov, Shumaylov, Zhao, Gal, Papernot and Anderson, 2023, revised 2024. Abstract: *"use of model-generated content in training causes irreversible defects in the resulting models, where tails of the original content distribution disappear."* |
| Datasheets for Datasets | https://arxiv.org/abs/1803.09010 | Gebru, Morgenstern, Vecchione, Vaughan, Wallach, Daumé III and Crawford, 2018, published in CACM 2021. Abstract proposes that *"every dataset be accompanied with a datasheet that documents its motivation, composition, collection process, recommended uses, and so on."* |

## Verified framework and essay sources

| what | URL | verified content |
|---|---|---|
| Figures and formula for direct download | https://github.com/IsaiahN/tether/tree/general-agent/figures | Public repo, branch `general-agent`, folder `figures/`: Figures 1 to 13, Operators and Symbols tables, README and THE_FORMULA. The README says the figures *"outrank everything else in the repo"* and gives the citation form `Fig N :line`. |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Isaiah N, 28 August 2026. Metamerism: the instrument *"cannot comment on the source"*; the color case was settled *"not by argument, but by the arrival of a better instrument."* |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, 19 November 2026. Directly on RLHF, reward models and ground: *"The Tether ties alignment to the ground. Not to human preferences. Not to a reward model trained on human feedback."* Also the simulated-output caveat and the prestige-versus-action rule. |
| Decoding Tacit Knowledge | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | Isaiah N, 10 November 2026. *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."* |
| The Library of Babel | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Isaiah N, 2 October 2026. Search narrowing: *"With each new term gained, you narrow the space and deepen your vocabulary."* and *"a general shape of the answer that satisfies your question."* |

## What the wider literature bears on the question

1. **Objectives can diverge from the ground.** Gao et al. (2022) measured the divergence directly and named Goodhart's law. This corroborates F4 and F5 at low overlap with the figures: an empirical scaling result, not a framework text. It does not decide the verdict, only supports it.
2. **Feedback volume is not feedback quality.** Christiano et al. (2017) obtained useful behavior from preference comparisons on less than one percent of interactions. This corroborates the channel reading in F5: a sparse but reachable channel can beat a dense saturated one.
3. **Data is a habitat, and substitution has costs.** Shumailov et al. (2024) found that training on generated content erases the tails of the original distribution. This is a concrete instance of Fig 11 :70's substituted habitat, reached independently. One witness, one evidence pool of its own.
4. **Documenting data is a channel condition.** Gebru et al. (2021) argue for datasheets so that dataset consumers can see motivation, composition and recommended uses. This corroborates the Fig 9 :30 requirement to describe the effect rather than the cause before searching.

No world source here is from the framework author except the essays, which are clearly marked as high-overlap corroboration in `10_source_ledger.csv`. The four papers are independent of the figures and of one another to a useful degree: safety, RL preference learning, reward-model optimization, generative-data collapse, and dataset documentation are five distinct literatures.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 10 :52**: *"Bring a characterised residual, never the source."* Sending the full architecture before anyone has described a residual sends a recording, not a generator.
- **Fig 10 :42**: *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the whole framework before giving a verdict has joined the frame being checked.
- **Fig 9 :27 to :28**: *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see if the per-slot claim were true before showing them anything else.
- **Fig 2 :40**: *"agreement about the world is worthless when the agreeing frames share an evidence pool"*; Seat Map :163: *"High correlation is disqualifying for a verdict and efficient for a convention."* A send selected for likely agreement produces a convention, not corroboration.

**Recommended order in a reply:** (1) the per-slot shape claim and its six refuters; (2) ask what the recipient would count as a failure and record the answer; (3) only then the three links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

The proposition is: **(1)** check the output against a ground you already trust, **(2)** only if curious, read the framework that produced it, **(3)** use the formula recursively on other problems. This order follows from the figures:

- Stage 1 before stage 2 is Fig 10 :52 and Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."* The recipient checks the output without holding the framework interior.
- Stage 2 is opt-in by construction. Once a recipient has absorbed the theory, their agreement stops being evidence, so the stage-1 verdict is recorded first and later agreement is never pooled.
- Stage 3 sends a method, which is permitted: Fig 4 :22: *"Only methods cross up. Only head starts come down."*
- Stage 3 still needs a ground per problem. Fig 5 :65 requires the sought-for shape to be bound as an ordinary term, and each user must write a refuter before running the formula.

## Hosting

Nothing is sent by this agent. Hosting and sending are yours to do. Prefer a link that lets a recipient decline contact, an opt-in download or a public submission portal, over an attachment pushed to a list. A public submission route in `03_public_contact_points.csv` is closer to the figure's rule than a private message to a named individual.
