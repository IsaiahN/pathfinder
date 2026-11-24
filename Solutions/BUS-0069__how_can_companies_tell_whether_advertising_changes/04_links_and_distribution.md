# Public links and distribution

## Verified sources actually fetched

Each URL below was opened with a fetch tool on 2026-11-22. The fourth column records what the fetch actually returned, not what the page was expected to say.

| what | URL | verified content |
|---|---|---|
| Gordon et al. 2019 abstract (RePEc) | https://ideas.repec.org/a/inm/ormksc/v38y2019i2p193-225.html | Full abstract: 15 US Facebook experiments, 500 million user-experiment observations, 1.6 billion impressions; *"The observational methods often fail to produce the same effects as the randomized experiments, even after conditioning on extensive demographic and behavioral variables."* Bibliographic record: Marketing Science 38(2):193-225, DOI 10.1287/mksc.2018.1135. |
| Blake et al. 2015 abstract (RePEc, NBER WP record) | https://ideas.repec.org/p/nbr/nberwo/20171.html | Full abstract: eBay paid-search field experiments; *"returns from paid search are a fraction of conventional non-experimental estimates"*; *"brand-keyword ads have no measurable short-term benefits"*; new and infrequent users influenced, frequent users not. Econometrica 83:155-174, 2015. |
| Lewis and Rao 2015 abstract (RePEc) | https://ideas.repec.org/a/oup/qjecon/v130y2015i4p1941-1973.html | Full abstract: *"The median confidence interval on return on investment is over 100 percentage points wide"*; *"informative advertising experiments can easily require more than 10 million person-weeks"*; *"selection bias, due to the targeted nature of advertising, is a crippling concern for widely employed observational methods."* QJE 130(4):1941-1973. |
| Hernán and Robins 2016 (PMC full text) | https://pmc.ncbi.nlm.nih.gov/articles/PMC4832051 | Full text: *"Causal inference from large observational databases (big data) can be viewed as an attempt to emulate a randomized experiment"*. Am J Epidemiol 183(8):758-764. Low-overlap field, epidemiology. |
| ScienceDaily report on Gordon et al. | https://www.sciencedaily.com/releases/2019/03/190321130405.htm | INFORMS release, 2019-03-21. States the residual in plain terms: *"did more consumers purchase because they saw an ad, or would many of those consumers have purchased even in the absence of the ad?"* Quotes Zettelmeyer: *"even fairly comprehensive data prove inadequate to yield reliable estimates of advertising effects."* |
| Ghost Ads working paper record (MSI) | https://msi.org/working-papers/ghost-ads-improving-the-economics-of-measuring-ad-effectiveness | Working paper by Johnson, Lewis and Nubbemeyer, 2015-12-07: *"This new methodology for measuring ad effectivenes can reduce experimentation cost, improve measurement precision, and work with ad platforms that optimize ad delivery in real time."* Topics: advertising, Marketing ROI. |
| Marketing Science Institute home | https://msi.org/ | MSI is *"a division of the Advertising Research Foundation"* and lists a public Submit Working Paper route plus open working papers. |
| Advertising Research Foundation home | https://thearf.org/ | Lists Ad Effectiveness & ROI, Analytics & Data Science, Audience & Media Measurement, and Research & Data Quality as public topic areas. A research item names *"incrementality and attribution to transparency, deduplication, in-store measurement and access to underlying data"* as practical measurement problems. |
| AAPOR home | https://www.aapor.org/ | *"The leading association of public opinion and survey research professionals."* Members span market research, statistics, and research methodology. Publishes standards and journals. |
| SSRN home | https://www.ssrn.com/ | Open preprint platform; *"Share your Research"* and public submission across 69 disciplines, including an Economics Research Network. |
| The Library of Babel (essay) | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Isaiah N, 2026-10-02. *"You can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* Also the bundle passage used in section 1.3. |
| The Hard Problem is About Source (essay) | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Isaiah N, 2026-08-28. *"If several paths create the same behavior, then behavior is a projection with lossy information"*; the instrument *"cannot comment on the source"*; *"An instrument that can't distinguish these cases demonstrates its own inadequacy."* |
| The Recursive Self-Improvement Trap (essay) | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, 2026-11-19. *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* Prestige rule: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* |
| Decoding Tacit Knowledge (essay) | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | Isaiah N, 2026-11-10. *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."* |

## Confirmed by search listing but not fetched directly

Two venue pages returned 403 to the fetch tool. They are listed in `03_public_contact_points.csv` with that limitation recorded in the notes column, and they are not used as world evidence anywhere in this package:

- `https://journals.sagepub.com/author-instructions/mrj` (JMR submission guidelines). Search listing shows authorship and file-upload instructions.
- `https://pubsonline.informs.org/journal/mksc` (Marketing Science journal home). Existence confirmed by the DOI 10.1287/mksc.2018.1135 and its RePEc record.

Another fetch, `https://www.journalofadvertisingresearch.org/`, failed with a transport error. The JAR route in the contact CSV uses the Taylor & Francis about page and the ARF how-to-submit page, both confirmed by search listing, rather than the failed URL.

## Local canonical files read

- `local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md`
- `local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md`
- `local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\60_FIGURES_AS_METALAWS.md`
- `local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md`
- `local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_SEAT_MAP_Field_Guide_amended.md`

## What the wider literature adds, and what it does not decide

The advertising papers are corroboration only. The figures decide.

- **Gordon et al. 2019** supplies the central empirical fact: granular data plus extensive conditioning did not recover the experimental effect. It corroborates F1 and F2 at the campaign stratum.
- **Blake et al. 2015** supplies the per-slot heterogeneity: brand-keyword ads had no measurable short-term benefit, and frequent users who were not influenced accounted for most spend. It corroborates Fig 1 :19 and F5.
- **Lewis and Rao 2015** supplies the budget distinction: median ROI interval wider than 100 percentage points, and experiments that can need more than 10 million person-weeks. It corroborates F8, unreachable-at-budget rather than underivable.
- **Johnson, Lewis and Nubbemeyer 2015/2017** supplies an instrument that was improved from a worse one already returning something, which is the Fig 6 :32-34 shape. It is not a derivation of the framework.
- **Hernán and Robins 2016** is a genuinely low-overlap witness from epidemiology. Its target-trial framing corroborates the counterfactual shape without sharing the advertising evidence pool. Overlap with the other papers is low; overlap with the figures is irrelevant because the figures are primary.

No source conflicts with the figure verdict, so the conflict rule was not triggered. The essays all share an author with the figures, so their agreement is one pool talking and carries no independent weight.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22**: *"Only methods cross up. Only head starts come down."* Sending the whole architecture before anyone has described a residual sends a recording, not a generator. Lead with the shape claim and its refuter.
- **Fig 10 :42**: *"A verifier that can reconstruct the claim cannot verify it."* Seat 4 must not hold the interiors. A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28**: *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see if the shape claim were true before giving them any article.
- **Fig 2 :40** and Seat Map :163: agreement selected for receptiveness is a disqualifying correlation for a verdict and only efficient for a convention. No bulk send, no ranking by likely agreement.

**Recommended order in a reply:** (1) the shape claim and its four refuters, (2) ask what they would count as a failure and record the answer, (3) only then the three local links, with the note that the figures, not the summary, are the authority, (4) only if asked, the formula as a method to reuse with their own refuter and mode.

**Hard precondition:** stages 1 to 3 work only if the stage-1 claim survives. This package is a simulated derivation, not a ground reading, so nothing is sent by this agent. Hosting and sending are the owner's decision.
