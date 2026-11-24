# Public links and distribution

All links below were fetched and read on 2026-11-22. Failed fetches are recorded as such and were not cited.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Canonical figures usage rule | https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md (read locally as `FRAMEWORK/reference/FIGURES_README_canonical.md`) | "They outrank everything else in the repo" and the shape-not-a-name limit. |
| Figures and formula | https://github.com/IsaiahN/tether/tree/general-agent/figures (read locally as `FRAMEWORK/reference/03-FIGURES_TEXT.md` and `THE_FORMULA.md`) | Figures 1 to 13, Operators and Symbols tables, the eight-step loop, the mode rule. |
| Library of Babel: Locating The Book of Books | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." Also the bundle/malformed-question branch: "Perhaps your problem was a bundle or conflation of several problems masquerading as one?" |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | "If several paths create the same behavior, then behavior is a projection with lossy information." Metamerism: the instrument "cannot comment on the source"; a better instrument, not an argument, resolved the case. |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." Also "Prestige can fund an action ... but it cannot settle an action. Only the ground can settle it," and "the truly testable output would need to be derived from the real architecture or working the formula yourself." |
| Sampling networks by nodal attributes | https://arxiv.org/abs/1902.04707 | Murase, Jo, Torok, Kertesz, Kaski, Phys. Rev. E 99, 052304 (2019). "the sampled network may have sampling-induced network properties that are absent in the original network, which implies the potential risk of a naive generalization of the results of the sample to the entire original network." |
| Reducing Size Bias in Epidemic Network Modelling | https://arxiv.org/abs/2501.13195 | Bansal, Kaouri, Woolley (2025). "For time-to-infection, both algorithms provide representative estimates. However, neither algorithm samples SF networks representatively, exhibiting significant variability." |
| Estimating Viral Genetic Linkage Rates in the Presence of Missing Data | https://arxiv.org/abs/2203.12779 | Vu, Lin, Zou, Novitsky, Tu, De Gruttola (2022). "most inferences on networks assume the data collected represents the complete. However, when ignoring missing data, even when missing completely at random, this results in bias for estimators regarding inference network related parameters." |
| Respondent-Driven Sampling: An Assessment of Current Methodology | https://arxiv.org/abs/0904.1855 | Gile and Handcock (2009). "the favorable statistical properties claimed for the current estimates are shown to be heavily dependent on often unrealistic assumptions." |
| The Game is the Game: Dynamic network analysis and shifting roles in criminal networks | https://arxiv.org/abs/2509.08028 | Catlin, Berlusconi, Lloyd (2025, revised 2026). "dynamic Katz centrality is helpful to differentiate individual contributions even among central nodes and explore individual trajectories over time, even when data are incomplete." |
| Design effect / effective sample size | https://en.wikipedia.org/wiki/Effective_sample_size (redirects to Design effect) | "When Deff>1, then inference from the data collected is not as accurate as it could have been if people were picked randomly." Also "the design effect is a number that shows how well a sample of people may represent a larger group of people for a specific measure of interest." |

Fetch failures, not cited: Oxford Academic's Journal of Complex Networks submission page (403), Cambridge's Network Science submission guidelines (404 at the tried URL), ACM JDIQ (403), Emerald Data Quality (403), Wiley Networks (403), ScienceDirect Social Networks (400). No claim in this folder rests on those pages.

## What in the wider literature bears on this question

1. **Sampling manufactures properties, it does not only shrink them.** Murase et al. derive analytic expressions showing that the sampled network can have properties absent from the original. This is the world-side statement of `Fig 4 :27` ("The transform between scales loses information") and of the union reading: the loss is structural, not a smaller copy of the same graph. It corroborates F4 and F5. Field: physics of complex networks, low overlap with the framework.
2. **Reliability is per metric, not per dataset.** Bansal et al. find that the time-to-infection estimate stayed representative under two sampling algorithms while infected counts and secondary infections were overestimated by 25 percent, and that neither algorithm sampled scale-free networks representatively. One quantity surviving while another fails is exactly the per-slot, per-metric claim in F2. It corroborates F2 and F4. Field: epidemiological network modelling, low overlap.
3. **Missingness biases even when missing completely at random.** Vu et al. state that ignoring missing data results in bias for network estimators even under MCAR. That directly corroborates the claim that incompleteness is its own condition and cannot be waved away as "random noise." Field: statistics and network inference, low overlap.
4. **Unrealistic assumptions are the failure, not the algorithm's cleverness.** Gile and Handcock's caution about respondent-driven sampling is the world-side counterpart of `Fig 2 :29-30`: if the estimator depends on assumptions the channel does not satisfy, it cannot be an anchor. It corroborates F3. Field: survey statistics, low overlap.
5. **A specific measure can remain informative under incomplete data, but only as a trajectory.** Catlin et al. report that dynamic Katz centrality differentiated individual contributions "even when data are incomplete." Read carefully, this does not license "Katz is reliable in general." It supports the shape in F7: per-actor, over time, with the uncertainty simulated. It is the closest world-side case of a measure surviving a defect, and it is `specified`, not a general ranking. Field: social and information networks, low overlap.
6. **Correlated observations have an effective sample size smaller than their count.** The design-effect entry corroborates `Fig 2 :44` and the uneven-sampling condition: pooled or correlated readings do not buy the information their number suggests. Field: survey methodology, low overlap.

No world source conflicts with the figure verdict. The conflict rule was not triggered. The essays share an author with the figures, so their agreement is one evidence pool and carries little independent weight; the arXiv and survey-statistics sources are separate pools.

## Distribution: offer, do not push

- `Fig 4 :22`: "Only methods cross up. Only head starts come down." Sending the full architecture before anyone has described a residual sends a recording, not a generator. Lead with the shape claim and its refuter; offer the links after.
- `Fig 10 :42`: "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- `Fig 9 :27-28`: "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would count as a failure under each of the three defects before showing the article.
- `Fig 2 :40`: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." A list selected for people likely to agree produces a convention, not corroboration.

**Recommended order in a reply:** (1) the shape claim and its four refuters; (2) ask what they would expect to see if the claim were true, and what would count as a failure; (3) record their verdict on stage 1; (4) only then, if they are curious, the three links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

1. **Stage 1 before stage 2.** `Fig 10 :52`: "Bring a characterised residual, never the source." `Fig 2 :45`: "Frames range against the ground. They do not negotiate with it." The recipient checks the output without holding the framework's interior.
2. **Stage 2 is opt-in by construction.** Once a recipient has absorbed the theory, their agreement stops being evidence. Their verdict on stage 1 is recorded before any theory is shown, and later agreement is never pooled as corroboration.
3. **Stage 3 sends a method, which is permitted.** `Fig 4 :22`: methods cross up. The loop is a generator, so giving it away does not give away an answer. Each user must state their own ground, mode, and pre-registered refuter, because `THE_FORMULA.md` "Direction" says a frame cannot check the direction of its own question.

**Hard precondition:** stages 1 to 3 work only if the stage-1 output survives. It is a simulated derivation with no ground reading, so it is offered for checking, not for belief. That is the honest frame for the first contact.

## Hosting

Nothing here is sent by this agent. Hosting and sending are yours. Prefer an opt-in download page that lets a recipient decline contact over an attachment pushed to a list: the opt-in page is closer to the figure rule than a mass send.
