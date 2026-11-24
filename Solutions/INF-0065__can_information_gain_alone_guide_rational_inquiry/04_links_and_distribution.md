# Public links and distribution

All links in the first table were fetched and verified on 2026-11-23. A second table records venues that were attempted but rejected by the remote site; they are routing hints only.

## Verified public links

| what | URL | verified content |
|---|---|---|
| arXiv submission overview | https://arxiv.org/help/submit | Public e-print submission system with sections for stat.ML, cs.IT and physics.data-an; TeX and PDF submission, FAQ, withdrawal and retraction. |
| ISBA home and meeting calls | https://bayesian.org/ | International Society for Bayesian Analysis, founded 1992; Bayesian Analysis journal, world meetings, sections including Bayesian AI and Objective Bayes; 2026 World Meeting call for sessions. |
| AUAI home and opt-in list | https://www.auai.org/ | Association for Uncertainty in Artificial Intelligence; UAI 2026 announced; opt-in UAI mailing list with an explicit subscribe form. |
| SJDM home and meeting submissions | https://sjdm.org/ | Society for Judgment and Decision Making, interdisciplinary body covering normative, descriptive and prescriptive theories of judgment and decision; annual meeting submissions and an open jdm-society list. |
| NeurIPS 2026 Call for Papers | https://neurips.cc/Conferences/2026/CallForPapers | Explicit topic areas for decision making, reinforcement learning and control, probabilistic methods and theory; abstract and full paper deadlines and OpenReview submission. |

## Attempted, not verified (routing hints only)

| venue | URL | result 2026-11-23 |
|---|---|---|
| IEEE Information Theory Society | https://www.itsoc.org/ | fetch returned 403 |
| PhilSci-Archive | https://philsci-archive.pitt.edu/ | access filter rejected the request |
| Behavioral Ecology submission page | https://academic.oup.com/beheco/pages/submission | fetch returned 403 |
| Entropy (MDPI) | https://www.mdpi.com/journal/entropy | fetch returned 403 |
| JMLR author page | https://jmlr.org/forauthors.html | 404; journal home page is listed in the contact CSV |

Nothing in this solution depends on the contents of the attempted pages. Do not cite them as read.

## Wider literature actually read (secondary corroboration only)

These are in the low-overlap fields named by the method: information theory, economics, statistics, philosophy, cognitive neuroscience, animal behaviour, and machine learning. Each was opened on 2026-11-23. Full provenance, quotes, and overlap declarations are in `10_source_ledger.csv`.

1. **Information theory / machine learning.** Tishby, Pereira and Bialek, "The information bottleneck method" (arXiv:physics/0004057, 1999/2000): Shannon deliberately left relevance and value to the recipient out of information theory; information rate alone is not enough to characterize a good representation. Predicts that gain about one variable cannot select what is relevant without a second, relevance variable. Corroborates F2.
2. **Economics.** Maćkowiak, Matějka and Wiederholt, "Rational Inattention: A Review" (Journal of Economic Literature, 2023): agents cannot process all available information and choose which pieces to attend to. Predicts attention as an optimized, costly choice, not a maximized gain. Corroborates F3 and F5.
3. **Economics / decision theory.** Sims, "Rational Inattention and Monetary Economics" (handbook chapter): a test well can cost thousands of dollars while providing only one bit. Predicts that bits and action cost are different currencies. Corroborates F4. Direct PDF fetch failed, so this source was read from the indexed excerpt returned by the search tool; status is declared in the ledger.
4. **Statistics / decision science.** Jackson, Presanis, Conti and De Angelis, "Value of Information: Sensitivity Analysis and Research Design in Bayesian Evidence Synthesis" (JASA, 2019): the expected value of sample information is traded against data-collection cost to give an expected net benefit of sampling. Predicts information value as decision-relative and net of cost. Corroborates F3 and F5.
5. **Philosophy of information.** Adriaans and van Benthem, "Information" (Stanford Encyclopedia of Philosophy, 2012, revised 2023): quantitative information theories do not deal with truthfulness, which places them outside semantic information. Predicts that bits do not by themselves carry relevance or truth. Corroborates F2.
6. **Cognitive neuroscience.** Wu, Nakazato, Yang and Shimokawa, "A neural basis of rational inattention models" (Neuroreport, 2022): people decide not only which action to take but how much information to use, with mutual information used as the cost measure; brain activation tracks that cost. Predicts cost as a real, measurable constraint on information acquisition. Corroborates F3 and F4.
7. **Animal behaviour.** Dunlap, Papaj and Dornhaus, "Sampling and tracking a changing environment" (Interface Focus, 2017): the value of collecting information depends on environmental persistence and on the relative costs of making wrong decisions. Predicts sampling only at moderate persistence and when error costs justify it. Corroborates F5 and F6.
8. **Statistics / machine learning.** Rainforth, Foster, Ivanova and Bickford Smith, "Modern Bayesian Experimental Design" (arXiv:2302.14545, 2023): the BALD score is noted as a sub-optimal application of Bayesian design when what matters is information gain for downstream predictions, not model parameters. Predicts that the target of the gain matters, so gain alone cannot rank inquiries. Corroborates F2 and F5.

No world source conflicts with the figure verdict. Most are independent of the framework's author, so their agreement is genuine external corroboration; they still cannot overrule the figures, and a conflict would send the derivation back to the domain census. Agreement among the framework essays is one author's evidence pool and is not treated as corroboration.

## Distribution: offer, do not push

- **Fig 4 :22** "Only methods cross up. Only head starts come down." Sending the full architecture before anyone has described a residual sends a recording, not a generator. Lead with the shape claim and its refuter.
- **Fig 10 :42** "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the framework before giving a verdict has joined the frame being checked.
- **Fig 9 :27-28** "describe it before you go looking, or any frame you pick will seem to fit" Ask what they would expect to see if the shape claim were true before giving them the sources.
- **Seat Map :163** "High correlation is disqualifying for a verdict and efficient for a convention." A mass send selected for likely agreement produces a convention, not corroboration.
- **Fig 2 :42** "Buy independence in proportion to the cost of being wrong." Choose venues whose readers work in a different closure from this derivation.

## The two-stage offer

1. **Stage 1 before stage 2.** Send the residual, the shape claim, and the five refuters. Ask what they would count as a failure. Record their verdict before any theory is shown.
2. **Stage 2 is opt-in.** Only if they are curious, offer the verified links above. The figures, not this summary, are the authority. Their later agreement is never pooled as corroboration (Fig 2 :40).
3. **Stage 3 is a method, not an answer.** Offer the formula for reuse, with the instruction that each user writes their own refuter before running it and states their own mode (`THE_FORMULA.md` "Direction").

**Hard precondition:** stages 1 to 3 only work if the stage-1 claim survives. If a refuter fires, stop and retract before sending anything.
