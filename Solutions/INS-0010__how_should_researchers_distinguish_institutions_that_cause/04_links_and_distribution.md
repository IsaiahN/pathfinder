# Public links and distribution

Links below were opened on 2026-11-23 either directly or through the public search index where a direct fetch was blocked. The method of access is recorded for each. Nothing is cited from a page that was not opened or returned by search.

## Verified sources actually fetched

| what | URL | access | verified content |
|---|---|---|---|
| Colonial Origins, AJR 2001 | https://www.aeaweb.org/articles?id=10.1257/aer.91.5.1369 | fetched directly | AER 91(5), 1369-1401. Abstract: "Exploiting differences in European mortality rates as an instrument for current institutions, we estimate large effects of institutions on income per capita." Full-text excerpts via search: "we use the mortality rates expected by the first European settlers in the colonies as an instrument for current institutions" and the schematic chain "settler mortality, settlements, early institutions, current institutions, current performance." |
| Do Institutions Cause Growth?, Glaeser et al. 2004 | https://www.nber.org/papers/w10568 | fetched directly | NBER WP 10568, June 2004. Abstract states that most institutional-quality indicators are "constructed to be conceptually unsuitable for that purpose" and some IV techniques "are flawed." Full text via search: "the commonly used measures of institutions cannot be used to establish causality" and the finding that the traditional indices are "strongly correlated with each other, as well as with per capita income," which is "consistent with institutions having a causal positive effect on growth, but also with reverse causality." |
| Institutions Rule, Rodrik, Subramanian and Trebbi | https://www.nber.org/papers/w9305 | fetched via public search index | NBER WP 9305, 2002; published JEG 9(2), 2004. "the quality of institutions 'trumps' everything else." Uses recently developed instruments for institutions and trade; states that geography has only weak direct effects once institutions are controlled for. |
| Causal inference in statistics: An overview, Pearl 2009 | https://projecteuclid.org/journals/statistics-surveys/volume-3/issue-none/Causal-inference-in-statistics-An-overview/10.1214/09-SS057.short | abstract fetched directly, body via search index of the UCLA and Project Euclid PDFs | *Statistics Surveys* 3:96-146. "one cannot substantiate causal claims from associations alone, even at the population level - behind every causal conclusion there must lie some causal assumption that is not testable in observational studies." Also: an associational concept "can be defined in terms of a joint distribution of observed variables" while a causal concept "cannot be defined from the distribution alone." |
| Causal Inference in Statistics, Pearl, Glymour and Jewell 2016 | https://archive.illc.uva.nl/cil/uploaded_files/inlineitem/Pearl_Glymour_and_Jewell_2016_Causal_inference_in_s.pdf | fetched via public search index | Textbook chapter. The ice-cream-and-crime example: an association exists "not because ice cream causes crime, but because both ice cream sales and violent crime are more common in hot weather," and "the randomized controlled experiment is considered the golden standard of statistics." |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | fetched directly | Isaiah N, Aug 28 2026. "If several paths create the same behavior, then behavior is a projection with lossy information." The colour-meter example: "the instrument is speaking only about what it measured, it cannot comment on the source." "An instrument that can't distinguish these cases demonstrates its own inadequacy." This is the governing essay for this solution: a prosperity reading cannot name its source. |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | fetched directly | Isaiah N, Nov 19 2026. "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." "LLMs can quickly simulate an approximate answer/output... the truly testable output would need to be derived from the real architecture or working the formula yourself." |
| The Library of Babel: Locating The Book of Books | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | fetched directly | Isaiah N, Oct 02 2026. "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." "Perhaps your problem was a bundle or conflation of several problems masquerading as one?" This is the essay that licenses the union reading of the question. |
| Figures and formula (local framework primaries) | `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md` | read locally | Primary figure text with line numbers, eight-step loop with the mode rule, canonical usage rule. These are framework primaries, not world sources, and are recorded in the ledger as `local:`. |
| Public venues | https://www.aeaweb.org/articles?id=10.1257/aer.91.5.1369 ; https://www.nber.org/papers/w10568 ; https://link.springer.com/article/10.1023/B:JOEG.0000038933.16398.ed ; https://www.econometricsociety.org/ ; https://cepr.org/publications/dp3643 ; https://www.povertyactionlab.org/ ; https://www.hks.harvard.edu/publications ; https://papers.ssrn.com/abstract=556370 | fetched or search-verified as noted in the CSV | Nine institutional, opt-in or public submission venues in institutional economics, development economics and causal inference. No personal emails. |

## Fetch failures recorded honestly

- `https://www.aeaweb.org/journals/aer/info/authors` returned 404; replaced with the verified AER article page and the public journal landing page.
- `https://www.aeaweb.org/about/contact` returned 404; the AEA article page did expose a "Contact the AEA" link, so the public journal route is used instead.
- `https://www.nber.org/about` and `https://www2.nber.org/about` returned 404 through the fetch tool; the verified NBER working paper page showed the public contact line and was used as the source record.
- `https://link.springer.com/journal/10759` returned 404 to direct fetch; the JEG article page was verified through the public search index and is the recorded source.
- `https://papers.ssrn.com/` returned 403 to automated fetch; SSRN is retained in the contact CSV with an explicit verify-before-use note and is not treated as a fully verified fetch.
- The Pearl 2009 and Pearl, Glymour and Jewell PDFs returned "unsupported file content type" to the direct fetcher. Their quoted text was obtained from the public search index of the same documents and is marked as such in the ledger.

## Wider literature that bears on the question

1. **AJR 2001 versus Glaeser et al. 2004 is not a contest with one winner.** They use different instruments, different institutional measures and different priors. Under Fig 8 :50, "Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence." Under Fig 8 :51, convergent derivation and adopted import look identical in the contents and only the record separates them. The correct response to the disagreement is to demand provenance for each instrument, not to average the two estimates. Rodrik et al. 2004 shows what a multi-instrument frame looks like and still reports that the results depend on "choices on samples, specification, and instrumentation."
2. **Pearl is the low-overlap witness, not a second economics paper.** Statistics and computer science are outside the institutions-and-prosperity evidence pool. Pearl's claim that causal concepts cannot be defined from the joint distribution is the formal version of the operators-table symmetry finding. One witness across a differing closure, counted once.
3. **The colour-meter essay is the metamerism analogue.** A spectrometer resolved what an argument about zombie functional equivalence could not. In this field the analogous question is whether an institutional reading can discriminate among its possible sources (property rights, human capital, geography, colonial history). Glaeser et al.'s critique is essentially the claim that the standard index cannot.
4. **J-PAL's randomized evaluations are an imported asymmetry with a visible source gate.** They are not a proof that institutions cause prosperity at national scale; they are an example of a frame whose closure differs and where the atom crosses back with provenance.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22 -** "Only methods cross up. Only head starts come down." Sending the whole framework before anyone has described a residual sends a recording, not a generator. Lead with the separator and its refuter; offer the links after.
- **Fig 10 :42 -** "A verifier that can reconstruct the claim cannot verify it." A reader who has absorbed the architecture before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28 -** "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the separator were true before giving them the article.
- **Fig 2 :40 -** "agreement about the world is worthless when the agreeing frames share an evidence pool." A list selected for people likely to agree that institutions cause prosperity produces a convention, not corroboration.
- **Fig 10 :60 -** "Where a stake cannot be removed, declare it. An undeclared interest is modelled anyway and an unnamed model runs unchallenged." State openly that this package prefers a figure-grounded separator; do not present that preference as a result.

**Recommended order in a reply:** (1) the separator and its refuter; (2) ask what they would count as a failure; (3) record their verdict; (4) only then the three links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

1. **Stage 1:** validate the separator against the ground. Can a symmetric association alone assign direction? Does the candidate anchor update with the outcome? Are verdicts kept per slot? No theory is shown.
2. **Stage 2, opt-in only:** if they are curious and have recorded a stage-1 verdict, offer the figure text and the two economics papers. Their later agreement is never pooled as corroboration (Fig 2 :40).
3. **Stage 3:** offer the formula as a method to reuse, with the instruction that each user writes their own refuter, names their own anchor and states their own mode. Fig 4 :22 permits sending a method; a recording is not permitted to cross.

**Caution before submitting.** This folder is a simulated derivation. Several scholarly societies and journals now restrict or disclose AI-assisted or synthetic submissions. Check each venue's current AI and simulation policy before sending anything derived from this package, and disclose the simulated status if the venue permits the submission at all. This is a practical caution, not a verified statement of any venue's policy.

## Zip

The working package is this folder. Nothing is sent by this agent. Hosting and sending are yours to do. If you host it, prefer a link that lets a recipient decline contact, an opt-in download page is closer to the figure's rule than an attachment pushed to a list.
