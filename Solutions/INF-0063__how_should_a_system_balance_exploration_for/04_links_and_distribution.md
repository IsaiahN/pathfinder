# Public links and distribution

All links below were fetched and read on 2026-11-23. Everything cited in this folder comes from a page that was opened; where a link was only *seen* on a fetched page and not opened, that is stated in `03_public_contact_points.csv` and not treated as read.

## Verified sources actually opened

| what | URL | verified content |
|---|---|---|
| Exploration-exploitation dilemma | https://en.wikipedia.org/wiki/Exploration%E2%80%93exploitation_dilemma | Defines exploitation as choosing the best option under current knowledge and exploration as trying new options at the expense of an exploitation opportunity; documents the noisy TV problem and the observation that exploration reward is non-stationary while exploitation reward is usually stationary. |
| Multi-armed bandit | https://en.wikipedia.org/wiki/Multi-armed_bandit | Robbins 1952 formulation; epsilon-greedy, epsilon-first, epsilon-decreasing, Thompson sampling, pricing strategies; states that a price can be expected reward plus estimated future rewards from additional knowledge. |
| Gittins index | https://en.wikipedia.org/wiki/Gittins_index | Index policy is optimal for independent projects with one project evolving at a time; restless bandit has no general optimal solution and is NP-complete in general. |
| Berger-Tal, Nathan, Meron and Saltz 2014 | https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3995763/ | "The Exploration-Exploitation Dilemma: A Multidisciplinary Framework", PLOS ONE 9(4):e95693. Four dynamic phases: knowledge establishment, accumulation, maintenance, exploitation. Open access. |
| Cohen, McClure and Yu 2007 | https://pmc.ncbi.nlm.nih.gov/articles/PMC2430007/ | "Should I stay or should I go?", Phil Trans R Soc B 362:933-942. States there is no known generally optimal solution and a general solution may not be possible; reviews Gittins index, epsilon-greedy, uncertainty bonus, expected versus unexpected uncertainty. |
| Value of information | https://en.wikipedia.org/wiki/Value_of_information | VoI is the amount a decision maker would pay for information before deciding; observation of two evidence variables is not additive but sequential. |
| Optimal foraging theory | https://en.wikipedia.org/wiki/Optimal_foraging_theory | Currency, constraints and optimal decision rule; marginal value theorem gives a leaving rule; prey-switching and generalist/specialist depend on search time and abundance. |
| Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, 2026-11-19. "Prestige is not action"; "the output is only as good as the validator"; LLM output described as simulacra. |
| Library of Babel: Locating the Book of Books | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Isaiah N, 2026-10-02. Search narrows by proximity vocabulary; the question anchors the search; a bundle must be searched as separate problems. |
| PLOS ONE submission guidelines | https://journals.plos.org/plosone/s/submission-guidelines | Public submission route and registered-report instructions; no word-count limit; Editorial Manager linked. |
| NeurIPS 2026 Call for Papers | https://neurips.cc/Conferences/2026/CallForPapers | Interdisciplinary scope including decision-making, reinforcement learning, control, neuroscience and cognitive science; separate tracks with their own portals. |
| JMLR information for authors | https://www.jmlr.org/author-info.html | Scope includes new analytical frameworks; no publication fees; submission via manudb; discussion articles listed. |
| INFORMS journals index | https://www.informs.org/Publications/INFORMS-Journals | Lists Decision Analysis, Organization Science, Operations Research, Mathematics of Operations Research and other journals with their scope statements. |

Local framework sources read: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `PLANS/00_MASTER_PLAN.md`, `Scripts/validate_solution.py`.

## Four things in the world literature that bear directly on the claim

1. **The scalar is not a settled object.** Cohen et al. 2007 state plainly that *"There is no known generally optimal solution to the exploration versus exploitation problem, and a solution to the general case may indeed not be possible."* This corroborates the figure-side `gap`. It does not prove the gap; the figures do.
2. **The exploration bonus is not stationary.** The exploration-exploitation dilemma page records that the reward of exploitation is usually stationary while the reward of exploration is non-stationary: the same action should pay less exploratory reward over time. This is the world version of Fig 5's drive firing on a live, compressible gap rather than on a fixed fraction.
3. **The two currencies appear in decision analysis too.** Value of information is defined as what a decision maker would pay for information, and the value of observing two variables is *"not additive. Instead it is equivalent to observing one, incorporating it into our current evidence, then observing the other."* This is a low-overlap corroborator for Fig 12 :125-130, not a source for it.
4. **Foraging gives a leaving rule, not a ratio.** The marginal value theorem gives the optimal time to leave a patch from the tangent of the diminishing-returns curve and the travel time. That is a per-patch comparison, which is the shape of the framework's per-slot bargain. It comes from behavioural ecology, a genuinely different evidence pool.

## Overlap declaration

The bandit and exploration-exploitation Wikipedia pages plus the Gittins page are one statistics/machine-learning evidence pool, not three witnesses. Cohen et al. 2007 and Berger-Tal et al. 2014 cite parts of the same bandit and foraging literature, so they overlap at the reference level even though their fields (human neuroscience and behavioural ecology) differ. The value-of-information page and the optimal-foraging page are the lower-overlap corroborators. The two Substack essays share the framework author's evidence pool completely and carry no independent witness weight. No world source conflicts with the figure verdict; the conflict rule was not triggered.

## Distribution: offer, do not push

- **Fig 10 :52** *"Bring a characterised residual, never the source."* Lead with the routing claim and the refuter; offer the links after a verdict is recorded.
- **Fig 2 :35** *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Do not ask for agreement.
- **Fig 9 :28** *"any frame you pick will seem to fit"* Ask what they would expect to see if the claim were true before giving them the article.
- **Fig 2 :40** *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* Record their stage-1 verdict before any theory is shown, and never pool later agreement as corroboration.
- **Fig 4 :22** *"Only methods cross up. Only head starts come down."* Stage 3 offers the formula as a method, not an answer.

**Recommended order in a reply:** (1) the routing claim and its five refuters; (2) ask what they would count as a failure; (3) only then the links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

1. **Stage 1:** validate the per-slot routing claim and the two-currency separation against the ground the recipient already knows. Record the verdict before showing any theory.
2. **Stage 2, opt in only:** if curious, offer the figure text and the canonical README. Their later agreement is never pooled as corroboration.
3. **Stage 3:** offer the formula as a method to reuse, with the instruction that each user writes a refuter and states a mode before running it.

**Hard precondition:** stage 1 only works if the routing claim survives. If a recipient shows that a universal fraction is figure-governed, that the residual is genuinely global, or that information gain alone settles the choice, the claim is narrowed before any further send.
