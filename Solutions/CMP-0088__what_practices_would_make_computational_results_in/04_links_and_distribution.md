# Public links and distribution

All links below were fetched and read on 2026-11-22. Local framework files were read from disk the same day.

## Verified sources

| what | URL | verified content |
|---|---|---|
| Ten Simple Rules for Reproducible Computational Research | https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003285 | Sandve, Nekrutenko, Taylor and Hovig, PLOS Computational Biology 9(10), e1003285, published 2013-10-24. Ten rules including tracking how each result was produced, archiving exact program versions, version control, recording random seeds, storing raw data behind plots, connecting textual claims to results, and public access to scripts, runs and results. |
| Good enough practices in scientific computing | https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005510 | Wilson, Bryan, Cranston, Kitzes, Nederbragt and Teal, PLOS Computational Biology 13(6), e1005510, published 2017-06-22. Box 1 lists data management, software, collaboration, project organization, change tracking and manuscript practices; "recording how various components of your project change over time." |
| The FAIR Guiding Principles | https://www.nature.com/articles/sdata201618 | Wilkinson et al., Scientific Data 3, 160018, published 2016-03-15. Findable, Accessible, Interoperable, Reusable; explicitly applies to "algorithms, tools, and workflows" and to "all scholarly digital research objects." |
| Artifact Review and Badging, version 1.1 | https://www.acm.org/publications/policies/artifact-review-and-badging-current | ACM, 2020-08-24. Defines repeatability (same team), reproducibility (different team, same setup, author's artifacts) and replicability (different team, different setup, independent artifacts). Badges: Artifacts Evaluated, Artifacts Available, Results Validated. States that agreement within an acceptable tolerance is the criterion, not exact identity. |
| Software and Data Artifacts in the ACM Digital Library | https://www.acm.org/publications/artifacts | ACM Reproducibility Task Force, artifact submission and curation; "Many of ACM's technical communities are evolving standardized documentation and review processes to improve the chances for successful experiment re-runs and artifact re-use." |
| The Turing Way | https://book.the-turing-way.org/ | The Turing Way Community. Open, community-written handbook "to reproducible, ethical and collaborative data science"; CC-BY and MIT licensed; contributions through GitHub. |
| Journal of Open Source Software | https://joss.theoj.org/ | Developer-friendly open access journal for research software, zero article processing charges, ORCID login, public submission at /papers/new. |
| Figures text with line numbers (local) | `FRAMEWORK/reference/03-FIGURES_TEXT.md` | Verbatim SVG text for Figures 1 to 13 plus Operators and Symbols tables. All `Fig N :line` quotes in this folder come from here. |
| Canonical figures usage rule (local) | `FRAMEWORK/reference/FIGURES_README_canonical.md` | "They outrank everything else in the repo... the quotes are the authority, not this summary." |
| WATSON 60, figures as metalaws (local) | `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` | "The figures are the ground for design questions; Isaiah is the anchor for what the figures genuinely cannot settle." |
| THE FORMULA (local) | `FRAMEWORK/figures/THE_FORMULA.md` | Eight-step loop, the round trip `R_T`, the three questions of step 7, and the mode rule. |
| The eight essays | `adventuresinml.substack.com`, 2026-08 to 2026-11 | All eight were fetched and read: "Arrival of the Fittest: The Tether Architecture", "How Intelligence Actually Works", "The Hard Problem is About Source", "They're Scanning Books When They Should", "The Library of Babel: Locating The Book of Books", "How a Society of Agents Would Work", "Decoding Tacit Knowledge", "The Recursive Self-Improvement Trap". Used in `05_what_shape_means.md`. |

## What in the wider literature bears on this question

1. **ACM's three-way terminology cuts the residual at the right joint.** Same team and same setup is repeatability; a different team using the author's artifacts is reproducibility; a different team with independently developed artifacts is replicability. This is the operational form of `Fig 2 :31` "Independence, between two frames, is how little they draw on the same evidence." It also confirms F2: "exact replication or reproduction of results is not required, or even expected. Instead, the results must be in agreement to within a tolerance deemed acceptable for experiments of the given type."
2. **Sandve's exponential combinations are an action cost, not a description cost.** "There will for a given analysis be an exponential number of possible combinations of software versions, parameter values, pre-processing steps, and so on, meaning that a failure to take notes may make exact reproduction essentially impossible." This is `Fig 12 :126` "Bits price the description. Actions price finding out whether it holds." written for computational work. It is the reason a parameter *grid* and a parameter *value* must be reported separately.
3. **Wilson's future-self criterion is a round trip.** "Many of our recommendations are for the benefit of the collaborator every researcher cares about most: their future self." A future self is a frame with a different closure (it has forgotten the interior), so this is the same membrane as `Fig 4 :22` "Only methods cross up. Only head starts come down."
4. **FAIR extends the object of reproduction beyond data.** "it is our intent that the principles apply not only to 'data' in the conventional sense, but also to the algorithms, tools, and workflows that led to that data." That is `Fig 13 :130` "A term carries the atoms it was built from and the bonds that joined them. That record is not documentation of the term. It is the term." in repository language.
5. **The Turing Way supplies the adoption channel.** It describes itself as making reproducible work "too easy not to do" and is written in the open. Adoption is a habitat question (`Fig 11 :37` "Where a seat exists, something is doing work, and it is exactly what the seat does: enumerate the habitat, rank by cascade, introduce actors, build instruments, read the ground."), not a matter of exhortation.
6. **Overlap is declared.** These five sources are all from the broad reproducibility literature, so they are partly one evidence pool. Their authors, venues and subfields differ (bioinformatics, scientific-computing education, data stewardship, computing-society policy, data-science community), which gives them partial independence from one another. All five are fully independent of the Tether figures' author. None was allowed to flip a figure verdict; each was used only after a figure line had closed the finding.

## Distribution: offer, do not push

- `Fig 4 :25` "A recording carried upward looks like knowledge and is a description of one occasion." Sending the full architecture before anyone has described a residual sends a recording. Lead with the shape claim and its refuter; offer links after.
- `Fig 10 :42` "A verifier that can reconstruct the claim cannot verify it." Seat 4 reads shape without referent. A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- `Fig 9 :27-28` "describe it before you go looking, or any frame you pick will seem to fit." Ask what the person would expect to see if the shape claim were true before showing them the source.
- `Fig 2 :40` "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Do not select recipients for likely agreement, and do not pool later agreement as corroboration.
- `Fig 7 :35` "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." One to one, not bulk.

**Recommended order in a reply:** (1) the shape claim and its five refuters; (2) ask what the person would count as a failure; (3) record the verdict and its date; (4) only then offer the links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

**Stage 1.** Validate the shape claim against the ground. The recipient checks the claim without holding the framework's interior. This is `Fig 10 :52` "Bring a characterised residual, never the source." and `Fig 2 :45` "Frames range against the ground. They do not negotiate with it."

**Stage 2, opt in only.** If curious, read the method that produced it. The stage-1 verdict must be recorded before any theory is shown, because once a recipient has absorbed the theory their agreement stops being evidence (Fig 2 :40).

**Stage 3.** Offer the formula as a method to reuse. This is permitted: `Fig 4 :22` "Only methods cross up. Only head starts come down." Each user still needs a ground of their own. Formula "Direction": a frame "cannot check the direction of its own question, because the shape a frame is searching for is not a term it holds." So each user writes down what would refute their result before running it, and labels the mode of what they get.

**Hard precondition.** Stages 1 to 3 work only if the stage-1 claim can fail. The five refuters in `01_figure_grounded_audit.md` section 3 are written down before contact. If one fires, the claim is withdrawn rather than defended.

## Hosting

Nothing here is sent by this agent. Hosting and sending are yours. Prefer an opt-in download page that lets a recipient decline contact over an attachment pushed to a list. That is closer to the figure's rule about independence than a mailing.
