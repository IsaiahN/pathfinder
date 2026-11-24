# Public links and distribution

All links below were fetched on 2026-11-23 unless a failure is recorded. Verbatim quotes taken from them appear in `10_source_ledger.csv`. Nothing is cited here that was not opened.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Insurance hypothesis, primary paper | https://pmc.ncbi.nlm.nih.gov/articles/PMC15485/ | Yachi and Loreau, PNAS 1999, 96(4):1463-1468. "biodiversity insures ecosystems against declines in their functioning because many species provide greater guarantees that some will maintain functioning even if others fail"; the richness at which the system becomes redundant "depends on the way the various species respond to environmental fluctuations". |
| Biodiversity as insurance, review | https://pmc.ncbi.nlm.nih.gov/articles/PMC8519139/ | Loreau et al., Biological Reviews 2021, 96(5):2333-2354. Distinguishes the buffering effect from the performance-enhancing effect and states that diversification helps only when components fluctuate asynchronously. Explicitly compares ecology with Markowitz portfolio theory. |
| Reconsidering functional redundancy | https://pmc.ncbi.nlm.nih.gov/articles/PMC11332098/ | Eisenhauer et al., npj Biodiversity 2023, 2:9. Reports that different plant species promoted different functions "during different years, at different places, and under different environmental change scenarios", that many species are needed for multiple functions at multiple times and places, and that "the question 'redundancy for what?' should always be asked". |
| Linking biodiversity to ecosystem function | https://pubs.usgs.gov/publication/1008357 | Schwartz et al., Oecologia 2000, 122(3):297-305. Concludes they "find little support for the hypothesis that there is a strong dependence of ecosystem function on the full complement of diversity within sites". |
| Simpson's Paradox | https://plato.stanford.edu/entries/paradox-simpson | Stanford Encyclopedia of Philosophy, first published 2021, substantively revised 2026. Defines the paradox as an association that "emerges, disappears or reverses when the population is divided into subpopulations". Mathematics and statistics field, low overlap with ecology. |
| Simpson's paradox in psychological science | https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2013.00513/full | Kievit, Frankenhuis, Waldorp and Borsboom, Frontiers in Psychology 2013, 4:513. Calls it "a counterintuitive feature of aggregated data, which may arise when (causal) inferences are drawn across different explanatory levels". Human cognition field, low overlap. |
| Effective portfolio size | https://arxiv.org/html/0805.3397v2 | Medo, Yeung and Zhang, International Review of Financial Analysis 2009 (arXiv:0805.3397v2). "When assets are correlated, benefits of investment diversification are reduced"; the effective portfolio size "is much smaller than the actual number of assets". Business and mathematics field, low overlap. |
| n-1 criterion | https://www.kyon-energy.de/en/glossar/n-1-kriterium | Engineering glossary. Defines (n-1) safety as the requirement that supply continues after one component fails; notes that in some critical networks n-2 is mandatory. A reliability requirement is tied to a named failure, not to a universal component count. Engineering field, low overlap. |
| Canonical figure text with line numbers | local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md | The authority for every `Fig N :line` citation in this folder. |
| Canonical usage rule | local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md | The figures outrank the docs; the framework returns a shape, not a name. |

## Fetch failures, recorded rather than hidden

- `https://besjournals.onlinelibrary.wiley.com/doi/10.1111/j.1365-2664.2011.02048.x` (Cadotte 2011, *Journal of Applied Ecology*) returned HTTP 403. Its abstract was seen in search results but the full page was not opened, so it is **not** cited as a read source. The same point is supported by the Eisenhauer 2023 paper, which was opened.
- `https://www.pnas.org/doi/10.1073/pnas.96.4.1463` returned HTTP 403. The paper was read at the PMC mirror listed above instead.
- NIST SP 800-160 PDF returned an unsupported content type. It is not listed as a read source. The engineering witness actually used is the n-1 criterion page, which was opened.
- `https://www.frontiersin.org/journals/ecology-and-environment` returned HTTP 404. The psychology article link above was opened successfully.
- Mori et al. 2013 and Biggs et al. 2020 were found in search results but their publisher pages could not be opened in this session. They are not cited in the WATSON answer.

## What the wider literature does, and what it does not do

Four ecology sources share a substantial evidence pool (they cite one another and several share authors). They are **one witness**, not four. Their agreement with the figure verdict is corroboration only, and it is weak corroboration because of that overlap. The mathematics, psychology, finance and engineering sources are genuinely low overlap with ecology; they corroborate the *form* of the result, that aggregated counts can invert per-slot signals and that resilience is a property of a configured system under a named failure. They do not corroborate any ecological mechanism, and none was used to decide the verdict.

No world source was admitted that would overturn the figure verdict. Yachi and Loreau's saturating curves were the only candidate: re-census shows they are per-function thresholds computed under a declared response distribution, not a cross-context universal number, so they do not conflict. If a genuine conflict appeared, the rule is to return to the domain census, not to flip the verdict.

## Distribution: offer, do not push

Figure-grounded rules:

- Fig 10 :52 "Bring a characterised residual, never the source." Send the claim and its refuter, then the links.
- Fig 9 :27 "describe it before you go looking, or any frame you pick will seem to fit". Ask what the recipient would expect to see if the shape claim were true before giving them the literature.
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." Do not select recipients for likely agreement; do not pool later agreement as corroboration.
- Fig 4 :22 "Only methods cross up. Only head starts come down." The formula may be offered as a reusable method; an answer may not be smuggled in as a method.

**Recommended order in a reply:** (1) the shape claim in four steps; (2) the four refuters; (3) ask what they would count as a failure and record the answer; (4) only then, the three source links, with the note that the figures and the papers, not this summary, are the authority.

## Two-stage offer, with the third stage optional

1. **Stage 1:** validate the output against the ground. No framework material.
2. **Stage 2, opt in only:** if curious, read the figures and the three linked papers. Their verdict on stage 1 must already be recorded.
3. **Stage 3, optional:** offer the eight-step loop as a method. Each user writes their own refuter and states their own mode before running it.

There is no stage in which the recipient is asked to trust the framework, and no stage in which a reply is treated as corroboration.

## Hosting

Nothing here was sent by this agent. Hosting and sending are yours to do. Prefer an institutional submission route or an opt-in channel from `03_public_contact_points.csv` over an attachment pushed to a list.
