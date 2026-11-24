# Public links and distribution

All links below were fetched and verified on 2026-11-23. Local framework files were opened in the workspace. Where a fetch failed or a page was silent on the question, that is recorded rather than hidden.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Mesa-optimization paper | https://arxiv.org/abs/1906.01820 | Hubinger, van Merwijk, Mikulik, Skalse and Garrabrant, submitted 2019-06-05, revised 2021-12-01. Abstract defines "mesa-optimization" and asks "what will its objective be - how will it differ from the loss function it was trained under". |
| Curiosity-driven exploration | https://arxiv.org/abs/1705.05363 | Pathak, Agrawal, Efros and Darrell, ICML 2017. Abstract: "curiosity can serve as an intrinsic reward signal to enable the agent to explore its environment", formulated as prediction error in an inverse-dynamics feature space. |
| Free-energy principle review | https://www.nature.com/articles/nrn2787 | Friston, Nature Reviews Neuroscience 11, 127-138, published 2010-01-13. Key points include "rewards correspond to innate priors that constrain policies" and "These priors can be acquired ... or they can be innate (epigenetic) and therefore subject to selective pressure." |
| Balleine and Dickinson record | https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=TITLE%3A%22Goal-directed%20instrumental%20action%22%20AND%20AUTH%3A%22Balleine%22&format=json&resultType=core | Europe PMC record 9704982, Neuropharmacology 37(4-5), 1998, pp 407-419. Abstract: "Instrumental behaviour is controlled by two systems: a stimulus-response habit mechanism and a goal-directed process". |
| Ryan and Deci record | https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=TITLE%3A%22Self-determination%20theory%20and%20the%20facilitation%20of%20intrinsic%20motivation%22&format=json&resultType=core | Europe PMC record 11392867, American Psychologist 55(1), 2000, pp 68-78. Abstract names "the natural processes of self-motivation and healthy psychological development". |
| Locke and Latham record | https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=TITLE%3A%22Building%20a%20practically%20useful%20theory%20of%20goal%20setting%20and%20task%20motivation%22&format=json&resultType=core | Europe PMC record 12237980, American Psychologist 57(9), 2002, pp 705-717. Abstract describes "the mechanisms by which goals operate" and "the role of goals as mediators of incentives". |
| Library of Babel essay | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Isaiah N, 2026-10-02. Source of "a general shape of the answer" and the tether-by-question rule. Maximal overlap with the figures (same author). |
| Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, 2026-11-19. Source of "simulacra", "Prestige can fund an action... but it cannot settle an action", and "cannot validate itself". Maximal overlap. |
| Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Isaiah N, 2026-08-28. Metamerism: an instrument reads green and "cannot comment on the source"; "The answer is unreached until a better instrument exists." Maximal overlap. |
| arXiv submission overview | https://arxiv.org/help/submit | Public submission page, TeX and PDF routes. Verifies an opt-in route. Silent on the question. |
| OpenReview venues list | https://openreview.net/ | Public open peer review; active venues include NeurIPS 2026 Workshop AI and the Self, NeurIPS 2026 Workshop Meta-Agents, AAAI 2027 Workshop LoyalAgents. Verifies opt-in routes. Silent on the question. |
| NeurIPS 2026 Call for Papers | https://neurips.cc/Conferences/2026/CallForPapers | Public call; topic list includes "Decision-making, reinforcement learning, and control" and "Neuroscience and cognitive science". Deadlines listed. Silent on the question. |
| CHAI | https://chai.berkeley.edu/ | Public institutional contact and opt-in mailing list; research post "Getting By Goal Misgeneralization With a Little Help From a Mentor", 2024-12-25. Silent on the verdict. |
| SPSP | https://spsp.org/ | Public society contact and convention routes; describes itself as "The Society for Personality and Social Psychology". Silent on the verdict. |

**Fetch failures, recorded.** `https://pubmed.ncbi.nlm.nih.gov/9779215/` required cookies. `https://www.fhi.ox.ac.uk/wp-content/uploads/SCI.pdf` and `https://nickbostrom.com/superintelligentwill.pdf` returned a PDF content type that could not be read as text. `https://www.frontiersin.org/journals/motivation-science` and the psychology motivation section returned 404. `https://selfdeterminationtheory.org/self-determination-theory/` returned 404. None of these is cited as a read source. Balleine and Dickinson, Ryan and Deci, and Locke and Latham were obtained instead from Europe PMC records that were opened and are recorded in `10_source_ledger.csv`.

## Three things in the wider literature that bear on the pitch

1. **Mesa-optimization is the cleanest outside case of the distinction the derivation makes.** A learned model can itself be an optimizer whose objective differs from the training loss. That is a self-minted comparison over held quantities (F4) whose *content* still arrived through training (F3). It corroborates the unbundling, but it does not settle it: it is one AI/ML evidence pool.
2. **Curiosity as intrinsic reward is the empirical form of Fig 5's drive.** Pathak et al. generate an exploration signal from prediction error without extrinsic reward. That is a derived objective formed inside the loop. It is exactly what "a system can form its own goals" would mean if the goal is a comparison, and exactly what it would not mean if the goal is a terminal value.
3. **The animal and human literatures split the same way.** Balleine and Dickinson separate a habit mechanism from a goal-directed process that learns a response-reward contingency and an incentive value. Ryan and Deci locate self-motivation in social conditions. Friston's priors are innate or acquired. All three put part of the goal in the agent's history and habitat, not in a free-floating choice.

## Distribution: offer, do not push

- **Fig 4 :22-25:** "Only methods cross up. Only head starts come down. A recording carried upward looks like knowledge and is a description of one occasion." Sending the full architecture before someone has described a residual sends a recording, not a generator. Lead with the refuter and the shape claim; offer the links after.
- **Fig 10 :42:** "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the framework before giving a verdict has joined the frame being checked.
- **Fig 9 :27-28:** "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the shape claim were true before giving them the article.
- **Fig 2 :40:** "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." No list selected for people already committed to one side of the question.
- **Fig 10 :59:** "an interest in the outcome is unavoidable, an interest in the reading is disqualifying." Declare the stake; do not ask for endorsement.

**Recommended order in a reply:** (1) the three unbundled claims and the refuter; (2) ask what they would count as a failure; (3) record their verdict; (4) only then, and only if they are curious, the links and a note that the figure text, not this summary, is the authority.

## The two-stage offer

**Stage 1:** send the residual and the pre-registered refuter. Ask what the researcher would count as a failure. Do not show the source. This is Fig 10 :52 ("Bring a characterised residual, never the source") and Fig 2 :45 ("Frames range against the ground. They do not negotiate with it.").

**Stage 2, opt-in:** if they are curious, offer the figure text and formula. Their stage-1 verdict stays recorded separately and is never pooled as corroboration (Fig 2 :40).

**Stage 3:** offer the formula as a method to reuse. The formula is a generator, so giving it away does not give away an answer (Fig 4 :22). Each user must still name a ground and write a refuter before running it, because a frame "cannot check the direction of its own question" (THE_FORMULA, "Direction").

**Hard precondition:** stages 1-3 work only if the stage-1 output survives. `01_figure_grounded_audit.md` records its own corrections and its `gap`; the packet in `08` is the version to send, and the one-paragraph version in `07` is a deliberately lossy invitation, not a substitute.
