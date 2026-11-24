# Public links and distribution

All links listed as verified were fetched on 2026-11-23. Links whose fetch failed are recorded as failures, not hidden and not cited as evidence.

## Verified public links actually fetched

| what | URL | verified content |
|---|---|---|
| Why Most Published Research Findings Are False | https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.0020124 | Ioannidis, PLOS Medicine, published 2005-08-30. Abstract states a finding is less likely true with *"greater flexibility in designs, definitions, outcomes, and analytical modes"* and asks of several independent teams whether a claim is true. Corollary 6: *"The hotter a scientific field (with more scientific teams involved), the less likely the research findings are to be true."* |
| Replication crisis (Wikipedia) | https://en.wikipedia.org/wiki/Replication_crisis | Distinguishes *"direct (repeating procedures as closely as possible)"*, *"systematic (repeating with intentional changes)"*, and *"conceptual (testing hypotheses using different procedures to assess generalizability)"*. Says *"no universal definition of replication or related concepts has been agreed on."* Has a section titled "Emphasize triangulation, not just replication". Reports that *"Analyses of identical datasets by different teams, even absent incentives for significant findings, often yield divergent results"*. |
| Center for Open Science | https://www.cos.io/ | Public institutional contact and webforms. States *"We conduct research on research practices to understand areas of inefficiency, and to evaluate interventions to improve."* Links to Registered Reports, RP: Psychology, RP: Cancer Biology, SCORE and the Metascience Alliance. |
| OSF | https://osf.io/ | Reachable public infrastructure page. Returned minimal text through the fetch tool, so no quotation is taken from it. It is listed as a venue, not as evidence. |
| Research Integrity and Peer Review | https://researchintegrityjournal.biomedcentral.com/ | Open access journal. States it is *"the only journal covering all aspects of integrity in research publication, including peer review, study reporting, and research and publication ethics"*. Public "Submit your manuscript" and "Contact the journal" routes. |
| Scientific Reports | https://www.nature.com/srep/ | Open access Nature Portfolio journal publishing across natural sciences, psychology, medicine and engineering. Public submission route. |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Isaiah N, 2026-08-28. *"If several paths create the same behavior, then behavior is a projection with lossy information"*; the instrument *"cannot comment on the source"*; *"It was proven wrong not by argument, but by the arrival of a better instrument."* Framework author, high overlap with the figures. |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, 2026-11-19. *"You may all agree and be wrong. You may set your clock to someone else's, who was setting your clock to yours, and be off by many deviations over time. You need ground truth to define where you stand."* Also the validator rule and the simulated-output warning. Framework author, high overlap. |
| How a Society of Agents Would Work | https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work | Isaiah N, 2026-10-22. *"A group is only worth having while its members stay different."* *"Ten copies watching the same thing are one opinion said ten times."* *"Independent discoveries count most."* Framework author, high overlap. |
| The Library of Babel: Locating The Book of Books | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Isaiah N, 2026-10-02. *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* Framework author, high overlap. |
| Local verbatim figure text | local: FRAMEWORK/reference/03-FIGURES_TEXT.md | The authority for every `Fig N :line` citation in this folder. Checked this session. |
| Canonical figures README | local: FRAMEWORK/reference/FIGURES_README_canonical.md | *"the quotes are the authority, not this summary."* |

## Fetch failures, recorded honestly

- `https://www.americanscientist.org/article/the-statistical-crisis-in-science`: HTTP 503. Not cited.
- `https://journals.sagepub.com/doi/full/10.1177/2515245917745629` (Many Analysts, One Data Set): HTTP 403. Not cited; the related claim about divergent analyses is taken from the fetched Wikipedia article instead.
- `https://www.nature.com/articles/s41467-021-26758-3`: HTTP 404 on fetch. Not cited.
- `https://www.tandfonline.com/journals/tacr20` (Accountability in Research): HTTP 403. Not cited.
- `https://www.cos.io/our-services/reproducibility-projects` and `https://www.cos.io/open-science/registered-reports`: HTTP 404. The COS home page was used instead.

## Wider literature relevant to this question, from sources that were read

1. **Many teams are not many witnesses.** Ioannidis's model makes the predictive value of a claim fall as more teams chase significance in a field with low prior odds. This is the arithmetic behind Fig 2 :44's effective-sample-size warning and Fig 7 :13's "agreement compounds, evidence does not". It corroborates F1 and F5, it does not decide them.
2. **The same data under different analyses give different answers.** The fetched Wikipedia article reports that analyses of identical datasets by different teams often diverge, and that failed repeats using a different plausible design do not necessarily undermine the original finding. This is the method-commensurability problem of F3, stated in the world literature.
3. **Triangulation is already named as a remedy in the field.** The Wikipedia article has a section "Emphasize triangulation, not just replication". Agreement with Fig 2 :35 is strong, but it is agreement between a framework source and a secondary reference that ultimately draws on the same metascience pool, so it is one witness, not two.
4. **Instrument change can make a direct repeat unavailable.** The hard-problem essay's metamerism case (one green light versus RGB versus CMYK all reading green) is the world-level analogue of the Symbols table's pose rule: a reading does not determine its source, and only a better instrument settles it.

## Distribution: offer, do not push

- **Fig 4 :22:** *"Only methods cross up. Only head starts come down."* A recording of a conclusion sent before anyone has described a residual is the wrong object. Lead with the three conditions and the refuter.
- **Fig 10 :42:** *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before giving a verdict has joined the frame being checked.
- **Fig 9 :27-28:** *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would count as a failure before giving them the articles.
- **Fig 2 :40:** *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."* Do not select recipients for likely agreement, and do not pool later agreement as corroboration.
- **Fig 2 :42:** *"Buy independence in proportion to the cost of being wrong."* One to one contact with people whose public work touches the residual is the right spend. A list is not a witness.

## The two-stage offer

**Stage 1.** Send the residual, the three conditions and the four pre-registered refuters. Ask what they would count as a failure. Record their verdict before showing any framework material.

**Stage 2, opt-in only.** If they are curious, offer the two article links and the local figure text. The figures, not the summary, are the authority. Their later agreement is never pooled as corroboration.

**Stage 3, opt-in only.** Offer the formula as a method to reuse. Each user writes their own refuter, states their own mode and measures their own round-trip gap. Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

**Hard precondition:** stages 1 to 3 only work if the stage-1 output survives. The refuter must travel with the claim. If a recipient asks for the theory first, that is a signal to stop, not to send more.
