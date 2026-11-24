# Public links and distribution

All links in the tables below were fetched and read on 2026-11-22 unless the note says otherwise. Nothing is cited here that was not opened. Local framework files are framework primaries, not world witnesses.

## 1. Verified sources actually fetched

| what | URL | verified content and why it bears on BUS-0085 |
|---|---|---|
| NIST AI Risk Management Framework (main page) | https://www.nist.gov/itl/ai-risk-management-framework | Framework released 2023-01-26, being revised under the 2026 AI Action Plan. States it is intended *"to improve the ability to incorporate trustworthiness considerations into the design, development, use, and evaluation of AI products, services, and systems."* Corroborates the need for an explicit evaluation discipline; it does not itself say how to index a residual per group. |
| NIST AI RMF Development | https://www.nist.gov/itl/ai-risk-management-framework/ai-rmf-development | Same scope statement, plus the consensus process of RFI, drafts, public comments and workshops. Useful for the claim that an anchor must be legitimate for the question (Fig 2 :36): a public process is a convention, not a ground. |
| NIST AI RMF Engage | https://www.nist.gov/itl/ai-risk-management-framework/ai-risk-management-framework-engage | States NIST welcomes comments and feedback and gives the role contact AIframework [at] nist.gov. Verifies the public opt-in route used in the contact CSV. |
| NIST AI Resource Center | https://airc.nist.gov/ | Hosts the AI RMF, playbook, use cases, crosswalks and a Metrology Center supporting testing, evaluation, verification and validation. Its listed technical reports include an assessing-risks-and-impacts pilot combining expert annotators and human testers, which is a low-overlap parallel to independent frames. |
| NIST Metrology Center, how to submit a metric | https://airc.nist.gov/metrology/how-to-submit/ | Public, opt-in metric submission reviewed in the open on GitHub. Explicitly non-confidential, one metric per submission, no code required. This is the closest public institutional venue for the missing instrument named in the solution. Do not submit proprietary data. |
| Fairness and Machine Learning, book home | https://fairmlbook.org/ | Barocas, Hardt and Narayanan, MIT Press 2023. Contents include chapters on relative notions of fairness, causality, testing discrimination in practice and datasets. Establishes that fairness criteria are plural and context-dependent. |
| Fairness and Machine Learning, testing chapter | https://fairmlbook.org/testing.html | *"there is no single test for fairness, that is, there is no single criterion that is both necessary and sufficient for fairness."* Also: *"if a system passes a fairness test, we should not interpret it as a certificate that the system is fair."* Direct world corroboration of the filter-versus-witness finding. |
| Fairness and Machine Learning, relative notions chapter | https://fairmlbook.org/relative.html | *"what we call discrimination in this chapter is not different treatment in and of itself, but rather treatment that systematically imposes a disadvantage on one social group relative to others."* Qualifies the per-group claim: a difference is not automatically a defect; the residual and its anchor must be named first. |
| Underspecification in modern ML | https://jmlr.org/papers/v23/20-1335.html | D'Amour et al., JMLR 23(226), 2022, 61 pages. Abstract states a pipeline is underspecified when it *"can return many distinct predictors with equivalently strong test performance"* and that these *"can behave very differently in deployment domains."* Corroborates the round-trip gap between aggregate test scores and per-group deployment behaviour. |
| Model Cards for Model Reporting | https://arxiv.org/abs/1810.03993 | Mitchell et al., FAT* 2019. Abstract recommends documentation with *"benchmarked evaluation in a variety of conditions, such as across different cultural, demographic, or phenotypic groups ... and intersectional groups."* Corroborates per-slot enumeration as an instrument, not a verdict. |
| Simpson's paradox | https://en.wikipedia.org/wiki/Simpson%27s_paradox | *"a trend appears in several groups of data but disappears or reverses when the groups are combined."* Genuinely low-overlap mathematical corroboration of the split instruction in Fig 9. Also records that the correct interpretation cannot be determined by the tables alone, which supports the need for an anchor from outside the data. |
| Automation bias | https://en.wikipedia.org/wiki/Automation_bias | *"the propensity for humans to favor suggestions from automated decision-making systems and to ignore contradictory information made without automation, even if it is correct."* Genuinely low-overlap human-cognition corroboration of Fig 10 :50-51. The article also notes high reliability increases complacency and that training alone does not reliably remove the bias, which supports designing an outside check rather than trusting reviewer goodwill. |
| Framework essays, four opened | RSI Trap: https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap ; Hard Problem is About Source: https://adventuresinml.substack.com/p/the-hard-problem-is-about-source ; Library of Babel: https://adventuresinml.substack.com/p/the-library-of-babel-locating-the ; Decoding Tacit Knowledge: https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | Sources for the canonical reading of shape in `05`. Their quotes are recorded in `10_source_ledger.csv`. All share the framework author's evidence pool, so they carry no independent witness weight. |

### Local framework primaries opened this session

- `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the verbatim source of every `Fig N :line` citation.
- `FRAMEWORK/reference/FIGURES_README_canonical.md`, the canonical usage rule.
- `FRAMEWORK/figures/THE_FORMULA.md`, the eight-step loop and the mode rule.

The source ledger records all of the above with author, venue, year, accessed date, quote, field and overlap. Two framework files from the exemplar's ledger (`THE_SEAT_MAP_Field_Guide_amended.md` and the metalaws note) were read through their local copies in the framework reference folder; the seat-map rule quoted in `01` and `02` is carried from the exemplar's canonical mapping and marked as such rather than presented as a fresh web read.

## 2. What the wider literature bears on the question

1. **No single criterion closes it.** The fairness book's testing chapter is the clearest outside witness for the filter-versus-witness distinction. A firm that reports a single fairness score has a measurement, not a verdict; the score decides where to spend a testing budget.
2. **Aggregate scores can hide deployment differences.** The underspecification paper gives the mechanism for the round-trip gap: equally good held-out scores do not pin down behaviour in a deployment domain, and different groups are different deployment domains in effect terms.
3. **Group aggregation can reverse the sign.** Simpson's paradox is the mathematical case of the Fig 9 split: the pooled comparison and the per-group comparison can disagree in direction, so a pooled lift cannot answer a per-group question.
4. **The human overseer is part of the system.** Automation bias gives the human-factors half of Fig 10 :50-51. An internal reviewer who sees the automated suggestion and the model's reasoning tends to follow it, and high apparent reliability increases the effect. Independence has to be designed, not requested.
5. **A difference is not automatically a defect.** The relative-notions chapter qualifies the question: what matters is systematic disadvantage relative to a named residual and anchor, which is why the solution refuses to name groups and metrics from the figure set alone.

No world source conflicts with the figure verdict. The conflict rule was not triggered. The three AI-evaluation sources (NIST, fairness book, model cards, underspecification) partly share one broad evidence pool and are not counted as four independent witnesses for the same claim; the statistics and human-factors sources are genuinely low overlap.

## 3. Distribution rules

Figure-grounded reasons for offering, not pushing:

- Fig 4 :22 *"Only methods cross up. Only head starts come down."* Sending the whole framework before a reader has described a residual sends a recording of one occasion, not a generator. Lead with the separator and its refuter.
- Fig 10 :42 *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework interior before giving a verdict has joined the frame being checked.
- Fig 9 :27-28 *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what the recipient would expect to see if the separator were true before offering the sources.
- Fig 2 :40 *"agreement about the world is worthless when the agreeing frames share an evidence pool"* and Fig 7 :35 *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* Selecting recipients for likely agreement manufactures the disqualifying correlation.
- Fig 2 :42 *"Buy independence in proportion to the cost of being wrong."* One careful outside reader who can refute the claim is worth more than a list of agreeable readers.

**Recommended order in a reply:** (1) the residual, the four conditions and the five refuters; (2) ask what they would count as a failure; (3) record that verdict; (4) only then the links, with the note that the figures, not the summary, are the authority; (5) offer the formula as a reusable method, with the instruction that each user writes their own refuter and states their own mode.

## 4. Two-stage offer

- **Stage 1 before stage 2:** Fig 10 :52 *"Bring a characterised residual, never the source."* The recipient checks the shape without holding the framework interior.
- **Stage 2 is opt in by construction:** the outside seat must not hold the interiors; once a recipient has absorbed the theory, their agreement stops being evidence. Their stage-1 verdict is recorded first and their later agreement is never pooled as corroboration (Fig 2 :40).
- **Stage 3 sends a method:** Fig 4 :22 permits it. The formula is a generator, so giving it away does not give away an answer. Each user still needs a ground and a pre-registered failure condition (Formula, "Direction").

## 5. AI-policy caveat on submitting simulated work

This folder is a simulated derivation, not a ground reading. If you submit any part of it to an academic venue, say so in the cover letter and in the paper. FAccT's 2027 call asks for anonymized submissions and forbids concurrent or prior publication of substantially similar work; JMLR requires originality, reproducible experiments where appropriate, a cover letter disclosing overlap and conflicts, and no simultaneous submission elsewhere. Neither venue should receive a claim presented as measured when no firm data was measured. The NIST Metrology Center submission route publishes everything and is non-confidential, so do not put proprietary firm data or unreleased product information into a metric proposal. Check current deadlines and policies before submitting; the dates and rules quoted above are those on the pages as fetched on 2026-11-22.

## 6. Zip and hosting

No archive was created and nothing was sent by this agent. Hosting and sending are yours. Prefer an opt-in download page over an attachment pushed to a list, so a recipient can decline contact without responding.
