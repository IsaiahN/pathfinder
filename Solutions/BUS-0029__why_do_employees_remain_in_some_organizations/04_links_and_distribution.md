# Public links and distribution

Every link in the tables below was fetched and read on 2026-11-22. Links that failed are listed separately and were excluded from the ledger.

## Verified sources actually opened

| what | URL | verified content |
|---|---|---|
| Verbatim figure text with line numbers (local) | `local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md` | Figures 1 to 13 plus Operators and Symbols tables, one text element per line. All `Fig N :line` citations in this folder come from this file. |
| Canonical figures README (local) | `local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md` | *"They outrank everything else in the repo... the quotes are the authority, not this summary."* Also the *"shape, not a name"* limit and the re-census rule. |
| The formula (local) | `local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md` | Eight steps, the three-mint guards, step 7's SEARCHED / INWARD / OUTWARD split, and the mode rule. |
| Organizational commitment umbrella (QIC-WD) | https://qic-wd.org/umbrella-summary/organizational-commitment | Three-factor model with definitions: affective *"desire to stay... out of emotional attachment"*, normative *"feelings of obligation"*, continuance *"need to stay... based on analysis of the possible costs and benefits incurred from leaving"*. Also commitment profiles and the note that definitions describe *"a tie that binds employees to their organization"*. |
| Job embeddedness umbrella (QIC-WD) | https://qic-wd.org/umbrella-summary/job-embeddedness | *"the extent to which employees are connected to their jobs through a social web"*, with links, fit and sacrifice; negatively related to turnover. |
| Compensation umbrella (QIC-WD) | https://qic-wd.org/umbrella-summary/compensation | *"Actual pay is only modestly connected to job satisfaction, organizational commitment, and turnover"*; *"the primary theme for pay satisfaction is one of perceived fairness"*. |
| New Directions for Theories for Why Employees Stay or Leave | https://www.annualreviews.org/content/journals/10.1146/annurev-orgpsych-110622-033733 | Hom and Kiazad, Annual Review of Organizational Psychology and Organizational Behavior 12:185-213, 2025, open access. Distinguishes *"perceived desirability of movement or ease of movement"* and the *"unfolding model and its derivatives (i.e., shocks research...)"* that *"upended traditional explanations"*. |
| Turnover contagion (Felps et al. 2009) | https://repub.eur.nl/pub/20102/ | *"coworkers' job embeddedness and job search behaviors explain variance in individual 'voluntary turnover' over and above that explained by other individual and group-level predictors."* 45 bank branches and 1,038 hotel departments. |
| Pay satisfaction and commitment in turnover intentions | https://link.springer.com/article/10.1007/s10869-008-9063-3 | Vandenberghe and Tremblay, Journal of Business and Psychology 22:275-286, 2008. *"the effect of pay satisfaction on intended turnover is fully mediated by affective commitment and perceived sacrifice commitment."* |
| Ecological trap (definition and evidence review) | https://en.wikipedia.org/wiki/Ecological_trap | *"Ecological traps are scenarios in which rapid environmental change leads organisms to prefer to settle in poor-quality habitats."* Also: when a cue and habitat quality decouple, *"organisms may be lured into poor-quality habitat."* Cites Robertson and Hutto 2006, PMID 16761584. |
| Win-stay / lose-switch in red-necked grebes | https://pmc.ncbi.nlm.nih.gov/articles/PMC7804401/ | Kloskowski, Scientific Reports 11:570, 2021. *"grebes lured to low-quality ponds were more likely to shift territories than birds nesting on high-quality ponds"*; *"their settlement decisions, based on the win-stay/lose-switch rule and prospecting a year in advance, were inappropriate in conditions of year-to-year habitat fluctuations."* |
| Hysteresis (IEEE Technology Navigator) | https://technav.ieee.org/topic/hysteresis | *"Hysteresis is the property of a physical system in which its current state depends on the history of past inputs, not solely on the present input."* |
| The Library of Babel | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Isaiah N, 2026-10-02. *"You can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, 2026-11-19. *"the truly testable output would need to be derived from the real architecture or working the formula yourself"*; prestige *"can give an action a budget to be tried. But it cannot settle an action."* |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Isaiah N, 2026-08-28. *"If several paths create the same behavior, then behavior is a projection with lossy information"*; *"The answer is unreached until a better instrument exists."* |
| AOM publishing, AOM 2027 call, AMD Registered Reports | see `03_public_contact_points.csv` | Public submission routes, including a results-blind Registered Reports call that matches a pre-registered refuter. |

## Links attempted that failed, and why they were excluded

- `https://www.siop.org/` returned HTTP 403. The Society for Industrial and Organizational Psychology would be relevant, but the page was not read and no claim is made about it.
- `https://qic-wd.org/contact` returned HTTP 404. QIC-WD public contact was not verified, so only its read summary pages appear in `03_public_contact_points.csv`.
- `https://pubmed.ncbi.nlm.nih.gov/16761584/` required cookies. The Robertson and Hutto review is cited through the ecological-trap page that was opened, and the Wikipedia entry is the ledger row, not the unopened PubMed page.
- Three PDF files (the QIC-WD umbrella PDFs and the Hom turnover PDF) returned an unsupported content type. The HTML versions were opened instead.
- `https://www.semanticscholar.org/paper/...Allen-Meyer...` returned no output. The three-component model is recorded through the QIC-WD summary that was opened. No quote is attributed to Allen and Meyer directly.

These failures are recorded rather than silently replaced. Nothing unread is cited.

## Wider literature that bears on the question

Grouped by evidence pool so overlap is visible.

**Pool A, organizational psychology (one witness, not many).** The QIC-WD commitment, embeddedness and compensation summaries, Hom and Kiazad 2025, Vandenberghe and Tremblay 2008, and Felps et al. 2009 all draw on the same meta-analytic tradition and largely the same three-component vocabulary. Their agreement is one pool talking (Fig 2 :40). What they contribute is a set of instruments and a warning: pay has only a modest relation to actual turnover, and the named "components" are distinguishable bonds, not one substance.

**Pool B, ecology and animal behaviour (low overlap with A).** The ecological-trap definition and the grebe field study concern cue-based settlement under environmental change. They corroborate the mechanism shape (history-dependent decisions, cues decoupled from current quality, habitat substitution) but not the employee-level fact. The grebe study in particular is honest about a limit: the birds mostly left poor ponds, so it supports the mechanism, not the literal "stay in poor conditions" result. That correction is recorded in `01_figure_grounded_audit.md` section 5.

**Pool C, engineering and physical sciences (low overlap with A and B).** The IEEE hysteresis definition corroborates the path-dependence shape: a state can depend on history rather than on the present input. It says nothing about people and is used only as an analogue for Fig 10 :24 *"the ground does not decay, the channel does"*.

**Framework-internal essays (not world witnesses).** The three essays opened this session are all by the framework's author, so their agreement with the figures is expected and carries no independent corroboration weight. They are used only for the canonical reading in `05_what_shape_means.md`.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22** *"Only methods cross up. Only head starts come down."* and Fig 4 :25 *"A recording carried upward looks like knowledge and is a description of one occasion."* Sending the full framework before anyone has described a residual sends a recording, not a generator. Lead with `R_s`, the union reading and the refuter.
- **Fig 10 :42** *"A verifier that can reconstruct the claim cannot verify it."* A recipient who absorbs the framework before the check has joined the frame being checked.
- **Fig 9 :27-28** *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see if the shape were true before giving them the literature.
- **Fig 2 :35** *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* A send selected for people likely to agree produces a convention, not a check.

**Recommended order in a reply:** (1) the residual and the four refuters; (2) ask what they would count as a failure and record it; (3) only then the figure text extract, the canonical README and the ledger, with the note that the figures, not this summary, are the authority.

## What this agent cannot do

The package can be hosted and the link sent by the operator. This agent cannot upload or email anything. Prefer an opt-in download page that lets a recipient decline contact over an attachment pushed to a list. One to one only, no bulk send, opt-out line in every message.
