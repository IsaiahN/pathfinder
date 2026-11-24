# Public links and distribution

All links below were fetched on 2026-11-22 unless the entry says otherwise. Fetch failures are recorded honestly and the affected page is not cited as read.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| ODD protocol update, Grimm et al. 2020 | https://www.jasss.org/23/2/7.html | *The ODD Protocol for Describing Agent-Based and Other Simulation Models: A Second Update to Improve Clarity, Replication, and Structural Realism*, JASSS 23(2)7, DOI 10.18564/jasss.4259, received 08-Nov-2019, published 31-Mar-2020, 17 authors. States that state variables "may vary among entities of the same type or vary over time"; gives the motto "Describe what the program does, not what you think the model does"; links ODD to pattern-oriented modelling and lists "lack of sufficient details of many ODDs to enable reimplementation without access to the model code" as a live limitation. |
| Homophily and social distance attachment, Talaga and Nowak 2020 | https://www.jasss.org/23/2/6.html | JASSS 23(2)6, DOI 10.18564/jasss.4252. States that selection and influence "is usually very difficult to disentangle" and that "When looking at a single snapshot of a social network any statement about homophily is a correlational statement". Both bear on the claim that behavior alone cannot identify the governing rule. |
| Agent-based model, field overview | https://en.wikipedia.org/wiki/Agent-based_model | Defines ABMs, records that "representative agents are replaced by agents with diverse, dynamic, and interdependent behavior", that "simple behaviors (meaning rules followed by agents) generate complex behaviors (meaning state changes at the whole system level)", and the criticism that "similar models can yield very different results". Also confirms JASSS as the field's social-simulation journal. |
| Personality in animals | https://en.wikipedia.org/wiki/Personality_in_animals | Low-overlap animal-behaviour source. Gives the consensus definition "individual differences in behaviour that are consistent across time and ecological context", the behavioural reaction norm method over an environmental gradient, and Dingemanse's criticism that one can "erroneously determine that variation in behaviour between individuals exists if the subjects have not been examined across a gradient of ecological contexts". |
| Partially observable Markov decision process | https://en.wikipedia.org/wiki/Partially_observable_Markov_decision_process | Low-overlap mathematics and AI source. States that "the agent cannot directly observe the underlying state. Instead, it must maintain a sensor model", that optimal behavior "may often include (information gathering) actions that are taken purely because they improve the agent's estimate of the current state", and that "Planning in POMDP is undecidable in general." |
| Concept drift | https://en.wikipedia.org/wiki/Concept_drift | Low-overlap ML and engineering source. Defines drift as a change in "the statistical properties of the target variable... over time in unforeseen ways"; states "Concept drift cannot be avoided for complex phenomena that are not governed by fixed laws of nature" and that "actual shopping behavior does not follow any static, finite model". |
| Bounded rationality | https://en.wikipedia.org/wiki/Bounded_rationality | Low-overlap human-cognition source. Quotes Simon's aim "to replace the global rationality of economic man with a kind of rational behavior that is compatible with the access to information and the computational capacities that are actually possessed by organisms" and notes that ABMs "often implement that agents follow a sequence of simple rule-of-thumb behavior instead of an optimization procedure". |
| Recursive Self-Improvement Trap, Isaiah N | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Opened directly. Governing simulation-status and prestige quotes: "the output is only as good as the validator", "the truly testable output would need to be derived from the real architecture or working the formula yourself", and "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." |
| The Hard Problem is About Source, Isaiah N | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Opened directly. "If several paths create the same behavior, then behavior is a projection with lossy information" and "An instrument that can't distinguish these cases demonstrates its own inadequacy". Governs F7. |
| The Library of Babel: Locating the Book of Books, Isaiah N | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Opened directly. "You can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." Also the union warning about "a bundle or conflation of several problems masquerading as one". |
| Decoding Tacit Knowledge, Isaiah N | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | Opened directly. "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." Also explicitly cites Fig 9 :27-28, Fig 6 :30 and Fig 11 :40 for contact and effect-term rules. |
| CoMSES Net | https://www.comses.net/ | Verified. Open model library with a publish route, peer review for a DOI, a forums link, and curated standards and journals resources. |
| Winter Simulation Conference 2026 | https://www.wintersim.org/ | Verified. Call for papers and author submission linked from the site; WSC 2026, Glasgow, 6 to 9 December 2026. |
| Journal of Computational Social Science | https://link.springer.com/journal/42001 | Verified. Interdisciplinary scope spanning social simulation and multi-agent models; public submission through Editorial Manager. |
| INFORMS | https://www.informs.org/ | Verified. Public contact page and conference calendar; sponsors the Winter Simulation Conference. |

## Fetch failures, recorded not hidden

- `https://www.openabm.org/` returned a transport error. Not cited as read; CoMSES Net is used as the model-library venue instead.
- `https://www.essa.eu.org/` returned HTTP 503. It is listed in `03` with an unverified note and is not used as a source in the argument.
- `https://casomodeling.biomedcentral.com/` returned HTTP 404. The journal is not listed or cited.
- `https://www.jasss.org/admin/submit.html` is linked from the verified JASSS article navigation but the direct automated fetch returned no body. It is listed with a verify-before-use note.
- `https://www.jasss.org/admin/contacts.html` is likewise linked from site navigation and listed with a note, not cited as read.

Nothing in the argument is drawn from a page that was not opened or returned by a fetch.

## Two things in the world sources that bear directly on this question

1. **ODD's "Describe what the program does, not what you think the model does"** is the closest the ABM literature comes to Fig 3 :27 ("A link with no instrument is not a link that works. It is a link nobody has looked at.") and Fig 11 :70 (a harness proves wiring, not capability). It supports F8: the missing instrument is the binding of rule to slot, not more solver tuning.
2. **The animal-behaviour reaction-norm criticism** is the strongest low-overlap corroborator. If an individual agent is only examined in one context, apparent stable differences may be context plasticity. That is exactly the warning in Fig 10 :72 that a room fixed while the question moves produces a correlation that is only a symptom. It supports F3 and F4.

## Overlap declaration

- The four framework essays opened this session share the framework author's evidence pool with the figures and the canonical README. Their agreement with the figures is expected and carries **no independent witness weight**.
- The ABM and simulation sources (JASSS ODD, JASSS homophily, Wikipedia ABM, Journal of Computational Social Science, INFORMS, WSC, CoMSES) are one broad field pool, not seven witnesses.
- The genuinely low-overlap corroborators are **animal behaviour** (personality and reaction norms), **mathematics and AI** (POMDP), **machine learning and engineering** (concept drift), and **human cognition** (bounded rationality). Four distinct fields, but none of them uses the figure vocabulary, so they corroborate the *mechanism shape*, not the framework's authority.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22 "Only methods cross up. Only head starts come down."** Sending the full architecture before someone has described their residual sends a recording, not a generator. Lead with the four requirements and the refuter; offer the links after a verdict is recorded.
- **Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it."** Seat 4 must not hold the interiors. A recipient who has absorbed the whole framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28 "describe it before you go looking, or any frame you pick will seem to fit"** Ask what they would expect to see in a correct representation before giving them the article.
- **Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** A send selected for people likely to agree produces a convention, not corroboration.

**Recommended order in a reply:** (1) the four requirements and the `gap`; (2) ask what they would count as a failure; (3) record their verdict; (4) only then the links, with the note that the figures, not the summary, are the authority.

## Two-stage offer, restated

1. **Stage 1:** validate the output against a modeling ground they know. No theory shown.
2. **Stage 2, opt-in:** if curious, read the theory that produced it. Their stage-1 verdict is already recorded and is never pooled with later agreement.
3. **Stage 3:** offer the formula as a method to reuse. Each user writes their own refuter and states their own mode.

**Hard precondition:** stages 1 to 3 work only if the stage-1 output survives. The refuter conditions in `01` §4 are the test. Do not send a recording of a conclusion; send a generator with a falsifier.
