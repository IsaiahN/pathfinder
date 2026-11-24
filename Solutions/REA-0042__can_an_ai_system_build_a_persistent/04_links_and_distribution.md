# Public links and distribution

All links below were fetched and checked on 2026-11-23. One subpage is explicitly marked as surfaced but not opened.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| World Models (Ha and Schmidhuber) | https://arxiv.org/abs/1803.10122 | Title, authors, 2018. Abstract: *"Our world model can be trained quickly in an unsupervised manner to learn a compressed spatial and temporal representation of the environment."* Also: agents can be trained inside a hallucinated dream and the policy transferred back. |
| PlaNet (Hafner et al.) | https://arxiv.org/abs/1811.04551 | *"PlaNet, a purely model-based agent that learns the environment dynamics from images and chooses actions through fast online planning in latent space."* Submitted 2018, revised 2019. |
| Overcoming catastrophic forgetting (Kirkpatrick et al.) | https://arxiv.org/abs/1612.00796 | *"We show that it is possible to overcome this limitation and train networks that can maintain expertise on tasks which they have not experienced for a long time."* The persistence-updating tension is the paper's subject. |
| Cognitive map | https://en.wikipedia.org/wiki/Cognitive_map | *"A cognitive map is a type of mental representation used by an individual to order their personal store of information about their everyday or metaphorical spatial environment."* Introduced by Tolman in 1948. Criticism section records that simpler explanations can account for several results. |
| Predictive coding | https://en.wikipedia.org/wiki/Predictive_processing | *"the brain is constantly generating and updating a 'mental model' of the environment."* Prediction error updates the model; *"there is no consensus on how the brain most likely implements predictive coding."* |
| Concept drift | https://en.wikipedia.org/wiki/Concept_drift | *"concept drift or drift is an evolution of data that invalidates the data model."* Also: *"Concept drift cannot be avoided for complex phenomena that are not governed by fixed laws of nature."* |
| Digital twin | https://en.wikipedia.org/wiki/Digital_twin | *"a digital twin is distinguished from an ordinary simulation in that it continuously uses real data from its physical counterpart to dynamically synchronize with the real system."* The strict definition is the channel, not the model. |
| World model (AI) | https://en.wikipedia.org/wiki/World_model_(artificial_intelligence) | *"World model benchmarks test physical understanding, long-term consistency, planning, and generalization from sensor data."* Interactive evaluation measures *"consistency over minutes of interaction, memory of off-screen objects, and response to user actions."* |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Nov 19 2026. *"This is why world models will not work. You cannot recreate our reality. It is combinatorically impossible. The best you could do is take traces of patterns."* Also the validator line quoted in `01`. |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Aug 28 2026. *"If several paths create the same behavior, then behavior is a projection with lossy information."* |
| The Library of Babel | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Oct 2 2026. *"You can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* |
| How Intelligence Actually Works | https://adventuresinml.substack.com/p/how-intelligence-actually-works | Sep 16 2026. *"indiscernibility is not identity."* Contact is the distinction resolver; the record carries the lineage. |
| Decoding Tacit Knowledge | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | Nov 10 2026. *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."* |
| How a Society of Agents Would Work | https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work | Oct 22 2026. *"Inside a run the arrangement persists and nothing is re-earned."* A past self is *"one frame wearing two names."* |
| They're Scanning Books When They Should | https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should | Sep 6 2026. *"A minimum viable set of six terms is a human's careful guess at reality's compression axes; another sensorium's minimum set need not be those six."* |
| NeurIPS 2026 Call for Papers | https://neurips.cc/Conferences/2026/CallForPapers | Main, evaluations/datasets, position papers and workshops are separate tracks with separate portals. Submission via OpenReview. |
| ICLR 2026 Call for Papers | https://iclr.cc/Conferences/2026/CallForPapers | Subject areas include lifelong learning, RL, causal reasoning and neuroscience/cognitive science. Public review on OpenReview. |
| JMLR homepage | https://www.jmlr.org/ | *"provides an international forum for the electronic and paper publication of high-quality scholarly articles in all areas of machine learning."* The Submissions link was surfaced on this page; the subpage was not opened in this run. |
| OpenReview homepage | https://openreview.net/ | *"Open Peer Review. Open Publishing. Open Access. Open Discussion."* Active venues include JMLR, TMLR, NeurIPS 2026, ICLR, AAAI 2027 and the workshops listed in `03`. |
| arXiv cs.AI recent listing | https://arxiv.org/list/cs.AI/recent | Public listing, 1383 entries at time of access, dated Mon 23 Nov 2026. |

## Wider literature that bears on this question

1. **The persistence-updating tension is named in the field.** Kirkpatrick et al. call catastrophic forgetting a long-standing obstacle and show it can be mitigated. This corroborates the union reading in F6: keeping old expertise and acquiring new behaviour are two conditions with separate instruments.
2. **The strict definition of a persistent updating model is the channel.** The digital-twin definition requires continuous real data. This is a low-overlap engineering corroboration of Fig 10 :24, *"the ground does not decay, the channel does."* A simulation without the data flow is not a twin.
3. **Change is not the same as error.** Concept drift names the case where statistical properties change over time, and distinguishes drift from concept evolution and from delayed labels. This is an engineering corroboration of Fig 6 :47's open three-way split, and it does not close it.
4. **Prediction error is a known update signal outside the framework.** Predictive coding corroborates the R = |prediction minus observation| loop, but the same source records no consensus on implementation, so it cannot settle a mechanism claim.

Overlap warning: the Ha and Schmidhuber paper, the PlaNet paper, the world-model Wikipedia page and the survey references it cites share authors and an evidence pool. They are one witness for the general possibility, not four. The RSI Trap, Hard Problem, Library of Babel and other essays share the framework's author and are weak independent corroboration, though the "world models will not work" passage is recorded as a live conflict.

## Distribution: offer, do not push

- **Fig 4 :22 to :25** - *"Only methods cross up. Only head starts come down."* Sending the full architecture before anyone has described a residual sends a recording, not a generator. Lead with the two verdicts, the open gap and the refuter.
- **Fig 10 :42** - *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27 to :28** - *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what the reader would expect to see if a persistent updating model existed before giving them the literature.
- **Seat Map :163** - *"High correlation is disqualifying for a verdict and efficient for a convention."* A list selected for receptiveness produces a convention, not corroboration.
- **Fig 2 :42** - *"Buy independence in proportion to the cost of being wrong."* The cost here is a silent dead channel, so one genuinely independent check is worth more than many agreeing ones.

**Recommended order in a reply:** (1) the two verdicts and the open gap; (2) the pre-registered refuter and the question "what would you count as a failure?"; (3) record the verdict; (4) only then the links, with the note that the figures, not this summary, are the authority.

## The two-stage offer

Stage 1 sends the shape and its refuter, never the source. Stage 2 is opt-in and its agreement is never pooled as corroboration. Stage 3 offers the formula as a method, with the instruction that each user writes their own refuter and states their own mode. The full draft is in `02_outreach_email.md`.

## What this agent cannot do

Nothing here is sent by this agent. There is no archive, no hosted link and no mailing. Hosting a download page and contacting venues is yours to do. Prefer an opt-in submission portal over an attachment pushed to a list; every venue in `03_public_contact_points.csv` is public and opt-in, and no row contains a personal email.
