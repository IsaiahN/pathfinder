# Public links and distribution

All links below were fetched and read on 2026-11-22. They are public. None is a personal email of a named individual.

## Verified sources actually opened

| what | URL | verified content |
|---|---|---|
| NIST AI Risk Management Framework | https://www.nist.gov/itl/ai-risk-management-framework | Overview: the framework is *"intended for voluntary use and to improve the ability to incorporate trustworthiness considerations into the design, development, use, and evaluation of AI products, services, and systems."* Released 2023-01-26, revised under the 2026 AI Action Plan. Public workshops and comments are part of its development. |
| NIST, "There's More to AI Bias Than Biased Data" | https://www.nist.gov/news-events/news/2022/03/theres-more-ai-bias-biased-data-nist-report-highlights | Reva Schwartz: *"Context is everything"* and *"AI systems do not operate in isolation. They help people make decisions that directly affect other people's lives."* Bias includes *"human and systemic"* sources, and NIST recommends a *"socio-technical"* approach. |
| NIST draft RMF and AI bias guidance | https://www.nist.gov/news-events/news/2022/03/nist-seeks-comments-draft-ai-risk-management-framework-offers-guidance-ai | The bias publication explains that bias is related to *"broader societal factors - human and systemic institutional in nature - which influence how AI technology is developed and deployed."* |
| Fairness and Machine Learning,Chapter 2 | https://www.fairmlbook.org/legitimacy.html | Barocas, Hardt and Narayanan, MIT Press 2023. *"The legitimacy question should precede other fairness questions."* Bureaucracies have procedural protections that *"ensure that decisions are made transparently, on the basis of the right and relevant information, and with the opportunity for challenge and correction."* |
| Fairness and Machine Learning,Chapter 9 | https://www.fairmlbook.org/datasets.html | *"It's become commonplace to point out that machine learning models are only as good as the data they're trained on"*, and *"the dataset itself is an integral part of the problem formulation."* Also: *"there is no simple answer to the question of what makes data good for what purpose."* |
| ACM FAccT | https://facctconference.org/ | *"Research challenges are not limited to technological solutions regarding potential bias, but include the question of whether decisions should be outsourced to data- and code-driven computing systems."* |
| Society for Judgment and Decision Making | https://sjdm.org/ | *"an interdisciplinary academic organization dedicated to the study of normative, descriptive, and prescriptive theories of judgments and decisions. Its members include psychologists, economists, organizational researchers, decision analysts, and other decision researchers."* |
| Judgment and Decision Making journal | https://www.cambridge.org/core/journals/judgment-and-decision-making | *"The study of judgment and decision making (JDM) concerns normative, descriptive, and prescriptive analysis of human judgments and decisions."* Open access, official journal of SJDM and EADM. |
| Decision Sciences Institute | https://decisionsciences.org/ | *"Decision Sciences is the study of managerial decision making, using state-of-the-art data driven and behavioral approaches to solve real world problems in both the private and public sectors."* |
| Academy of Management | https://www.aom.org/ | *"The Academy of Management (AOM) is the leading professional association for management and organization scholars."* Its news page carries the study report *"AI Could Undermine Managers' Judgment Unless Used Carefully, Study Warns"* (2026-09-28). |
| AOM study report on managerial judgment | https://www.aom.org/news/phys-org-ai-could-undermine-managers-judgment-unless-used-carefully-study-warns/ | University of Bath study in Academy of Management Review. *"over-reliance on the technology may erode managers' ability to build moral insights, contextual understanding and know-how to do get a job done."* Professor Dirk Lindebaum: *"Gen-AI cannot replace the lessons learned through first-hand experience. Unlike humans, AI does not experience the world, understand the consequences of decisions, or grasp the social and emotional complexities in our workplaces."* |
| ACM CHI 2026 | https://chi2026.acm.org/ | *"The ACM (Association for Computing Machinery) CHI conference on Human Factors in Computing Systems is the leading international conference on Human-Computer Interaction."* Public author tracks include papers, panels and workshops. |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* And: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* |
| The Library of Babel: Locating the Book of Books | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* And: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"* |
| Decoding Tacit Knowledge | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."* And: *"Long, close contact pulls the frames together, so the process that makes communication easy slowly uses up that extra reach."* |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | *"If several paths create the same behavior, then behavior is a projection with lossy information"* and *"An instrument that can't distinguish these cases demonstrates its own inadequacy"* |

## Three findings in the wider literature that bear directly on this question

1. **Legitimacy is a separate question from accuracy.** The fairness textbook says *"The legitimacy question should precede other fairness questions."* This matches the figure-derived split in `01` §2: a decision has a factual part, a value-about-people part and a legitimacy part, and they do not share one metric. Do not present a balance ratio as an answer to the legitimacy part.
2. **Bias is not only in the training data.** NIST's bias report extends the source to *"human and systemic"* factors and recommends a socio-technical approach. This corroborates Fig 10 :24 (*"the ground does not decay, the channel does"*) at the institutional scale: the channel includes the organization, not only the dataset.
3. **Human judgment can be eroded by the tool.** The AOM report on the University of Bath study says over-reliance on Gen-AI may erode *"contextual understanding and practical know-how"*, and cites the risk that managers *"rely less on their own judgement."* This is one direction of the Fig 8 :29 independence condition: if the manager's frame is generated by the model's frame, the overlap rises and the surplus disappears.

None of these sources conflicts with the figure verdict. They are secondary corroboration only; four of them share the framework author and are flagged as high overlap in `10_source_ledger.csv`. The NIST, fairness-textbook, conference and society sources are independent of that pool.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 10 :52** - *"Bring a characterised residual, never the source."* The first message carries the residual and the refuter. The framework comes later, and only if asked.
- **Fig 2 :45** - *"Frames range against the ground. They do not negotiate with it."* Ask what the recipient would expect to see if the shape claim were true, before giving them the theory.
- **Fig 4 :22** - *"Only methods cross up. Only head starts come down."* What is transferable is the checking method, not a recorded conclusion.
- **Fig 9 :60** - *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* A venue's prestige is a budget filter for where to try, never a reason to accept the claim.
- **Seat Map :163** - *"High correlation is disqualifying for a verdict and efficient for a convention."* Do not select recipients for likely agreement. One-to-one contact only.

**Recommended order in a reply:** (1) the residual and the shape claim; (2) ask what they would count as a failure and record it; (3) only then, if they are curious, the links; (4) the formula as a method to reuse, with the instruction that each person writes their own refuter and states their own mode.

## The two-stage offer

1. **Stage 1:** residual, shape claim, pre-registered refuter. No framework. Ask for a failure, not an endorsement.
2. **Stage 2, opt-in only:** the links in this file. The figures are the authority, not the summary. Their stage-1 verdict is already recorded, so later agreement is never pooled as corroboration (Fig 2 :40).
3. **Stage 3:** offer the formula as a generator, with the warning that a frame cannot check the direction of its own question and that each user must bind their expected answer as an ordinary term before running.

**Hard precondition:** if the stage-1 claim does not survive, stages 2 and 3 do not happen. The exemplar's equivalent failure was a chain that broke its own figure; here the live strains S1 and S2 in `01` §5 must be disclosed in stage 1 rather than buried.
