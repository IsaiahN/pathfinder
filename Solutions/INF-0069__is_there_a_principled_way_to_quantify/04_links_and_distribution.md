# Public links and distribution

All links below were opened on 2026-11-23. Where a direct fetch was blocked, that is stated and the
source was read through the public search index at reduced weight. Nothing is cited from a page that
was not opened or returned by the search integration.

## Verified framework sources

| what | URL | verified content |
|---|---|---|
| Figure text extract (primary) | local: `C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md` | Verbatim SVG text with `Fig N :line` numbers. Every quoted string in this folder was checked against it. |
| Figures README (canonical usage) | local: `C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md` | *"They outrank everything else in the repo... the quotes are the authority, not this summary."* Also the "shape, not a name" limit and *"Indiscernibility is not identity."* |
| The formula | local: `C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md` | Eight-step loop, three mint guards, step 7 SEARCHED / INWARD / OUTWARD, and the mode rule. |
| Public figures repository | https://github.com/IsaiahN/tether/tree/general-agent/figures | Public branch `general-agent`, folder `figures/`, Figures 1-13 plus Operators and Symbols tables as SVG. Verified via the canonical README's citation form and the repository link carried in the exemplar. |
| Library of Babel | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Opened directly. *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* Also the proximity method and the question as tether. |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Opened directly. *"the output is only as good as the validator"*; *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action."*; LLM output can *"simulate an approximate answer/output"* but the testable output needs the real derivation. |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Opened directly. Metamerism: an instrument that reads green *"cannot comment on the source"*; *"If several paths create the same behavior, then behavior is a projection with lossy information."* The spectrometer, not an argument, resolved it. |

## Wider literature actually opened

| source | URL | what it contributes | access note |
|---|---|---|---|
| Shannon 1948, A Mathematical Theory of Communication | https://web.mit.edu/6.976/www/handout/shannon.pdf (full text returned via search integration) | *"These semantic aspects of communication are irrelevant to the engineering problem."* and *"The system must be designed to operate for each possible selection, not just the one which will actually be chosen since this is unknown at the time of design."* The second sentence is the question, stated inside communication theory. | Full text retrieved by search integration; publisher metadata also seen at IEEE Xplore. |
| Howard 1966, Information Value Theory | https://ieeexplore.ieee.org/document/4082064 and https://ui.adsabs.harvard.edu/abs/1966ITSSC...2...22H/abstract | Abstract: *"no theory that involves just the probabilities of outcomes without considering their consequences could possibly be adequate in describing the importance of uncertainty to a decision maker."* Also the non-additivity result. | IEEE abstract and ADS record opened via search integration; direct ADS fetch returned no body, abstract text captured in the result. |
| Lindley 1956, On a Measure of the Information Provided by an Experiment | https://projecteuclid.org/journals/annals-of-mathematical-statistics/volume-27/issue-4/On-a-Measure-of-the-Information-Provided-by-an-Experiment/10.1214/aoms/1177728069.full | Open access abstract: *"where the object of experimentation is not to reach decisions but rather to gain knowledge about the world."* Expected information gain is defined before the outcome is observed. | Open access page verified directly. |
| Ivanova 2021, Introduction to Bayesian Optimal Experimental Design | https://desirivanova.com/post/boed-intro | Opened directly. *"we can't use IG to find the optimal design as it depends on the outcome y and hence can't calculate it until after the experiment has been performed. An easy way to fix that is to take the expectation with respect to all possible outcomes y for an experiment."* This is the cleanest field statement of the ex-ante problem. | Direct fetch succeeded. |
| Rothery et al. 2020, ISPOR VoI Task Force Report 2 | https://pmc.ncbi.nlm.nih.gov/articles/PMC7373630 | Opened directly. *"Value of Information (VOI) analysis provides a framework for quantifying the value of acquiring additional information to reduce uncertainty in decision-making."* and *"Acquiring information, however, can be costly."* Also: *"when a decision is made about whether to conduct further research, θ* is not known."* | Direct fetch succeeded (PMC author manuscript). |
| Value of information (reference entry) | https://en.wikipedia.org/wiki/Value_of_information | Opened directly. Definition: *"the amount a decision maker would be willing to pay for information prior to making a decision."* Also: *"The VoI of observing two new evidence variables is not additive."* | Direct fetch succeeded. Secondary reference, not treated as an independent witness. |
| On the Value of Information Across Decision Problems (Decision Analysis, 2024) | https://pubsonline.informs.org/doi/10.1287/deca.2024.0187 | *"These two measures rank information sources identically in a scalar-valued decision problem only when the utility function is linear or exponential."* Conditional status of the single scalar ranking. | Direct fetch 403; abstract and lead text captured via public search index. Reduced weight. |
| Denti, Marinacci and Rustichini 2022, Experimental Cost of Information (AER 112(9)) | https://pubs.aeaweb.org/doi/10.1257/aer.20210879 | *"We relate two main representations of the cost of acquiring information: a cost that depends on the experiment performed, as in statistical decision theory, and a cost that depends on the distribution of posterior beliefs, as in applications of rational inattention."* A second, distinct price for information. | Direct fetch 403; abstract captured via public search index and the IGIER working-paper PDF text. Reduced weight. |
| Experience Matters: Information Acquisition Optimizes Probability Gain (Salk / Psychological Science, 2010) | https://papers.cnl.salk.edu/PDFs/Experience-matters_%20Information%20Acquisition%20Optimizes%20Probability%20Gain%202009-4057.pdf | Human cognition source: *"Information gain (IG; Lindley, 1956) defines a datum's usefulness as the extent to which it reduces uncertainty (Shannon entropy) about the probabilities of the individual categories."* | Full text returned via search integration; genuinely lower overlap with the decision-analysis pool. |

## Two findings in the wider literature that bear directly

1. **Shannon and Howard are the two currencies Fig 12 names.** Shannon explicitly removes semantics
   from the engineering quantity; Howard explicitly adds consequences. Neither refutes the other
   because they price different things. The Fig 12 line *"Bits price the description. Actions price
   finding out whether it holds."* is the bridge, and *"Summing them into one figure is the error
   this names, not the fix for it"* is the warning. When explaining why the answer is not a single
   number, cite these two together.
2. **The realized value cannot be computed before the outcome, so the field uses an expectation.**
   Ivanova 2021 states this directly, and Lindley 1956 builds the measure as an expectation over
   outcomes. Rothery et al. do the same with EVPI / EVSI. That expected quantity is the shape: a
   ranking over possible contents, not the content. Do not present it as a settled value.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22-25** - *"Only methods cross up. Only head starts come down. A recording carried upward
  looks like knowledge and is a description of one occasion."* Sending the full framework before
  anyone has described their residual sends a recording, not a generator. Lead with the shape claim
  and the refuter; offer links after.
- **Fig 10 :42** - *"A verifier that can reconstruct the claim cannot verify it."* Seat 4 must not
  hold the interiors. A recipient who has absorbed the framework before being asked for a verdict
  has joined the frame being checked.
- **Fig 9 :27-28** - *"describe it before you go looking, or any frame you pick will seem to fit."*
  Ask what they would expect to see if the shape claim were true before giving them the article.
- **Fig 2 :40** - *"agreement about the world is worthless when the agreeing frames share an evidence
  pool"* - later agreement from people who read the theory is not corroboration.
- **Fig 9 :60** - *"Use filters for the budget and witnesses for the verdict."* A VoI number is a
  filter for which experiment to run. Sending it as a verdict is the category error the packet asks
  them to check.

**Recommended order in a reply:** (1) the shape claim and its refuter; (2) ask what they would count
as a failure and what they would expect to see; (3) record their verdict; (4) only then the links,
with the note that the figures, not the summary, are the authority; (5) offer the formula as a method
with the instruction to write a fresh refuter per problem.

## The two-stage offer (with the optional third stage)

1. **Stage 1:** the per-slot shape claim, the two-currency distinction, and the six refuters. Ask for
   a failure, not an endorsement.
2. **Stage 2, opt-in only:** the figure extract, the canonical README, and the formula. The figures
   are primary; the summary is not.
3. **Stage 3, opt-in only:** the formula as a reusable method. Each user writes their own refuter and
   states their own mode. A frame cannot check the direction of its own question, so the write-up
   must bind what an answer would look like before the run.

**Hard precondition:** stages 1-3 only work if stage 1 survives. The claim in `08_expert_verification_packet.md`
is `specified`, not `grounded`, and carries its own non-claims. A recipient who finds a failure has
done the useful thing.

## Venue and legal cautions

- ISPOR publishes an AI Policy (https://www.ispor.org/ai-policy). Because this packet is a simulated
  derivation, check that policy before submitting to an ISPOR venue, and disclose the method.
- INFORMS Decision Analysis and Springer PharmacoEconomics pages returned 401 / were read via search
  index. Verify current author instructions on the publisher site before any submission.
- Nothing here is sent by this agent. The user hosts and sends. Prefer an opt-in download page that
  lets a recipient decline contact over an attachment pushed to a list.
