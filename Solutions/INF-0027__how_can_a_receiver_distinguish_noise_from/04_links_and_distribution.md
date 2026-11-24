# Public links and distribution

All links below were fetched and verified on 2026-11-23, except where a fetch failure is recorded explicitly.

## Verified world sources

| what | URL | verified content |
|---|---|---|
| Detection theory | https://en.wikipedia.org/wiki/Detection_theory | Defines detection theory as measuring the ability to differentiate information-bearing patterns from random patterns that distract from them, calls the latter noise; states *"Bias is independent of sensitivity"*; credits radar work (Marcum 1947, Peterson/Birdsall/Fox 1954) and Tanner/Swets/Green 1954. Sensitivity index d' and response bias c and beta are named. |
| Receiver operating characteristic | https://en.wikipedia.org/wiki/Receiver_operating_characteristic | *"The ROC curve is the plot of the true positive rate (TPR) against the false positive rate (FPR) at each threshold setting."* Also: ROC analysis selects models *"independently from (and prior to specifying) the cost context or the class distribution."* Radar origin in WWII is documented. |
| Base rate fallacy / false positive paradox | https://en.wikipedia.org/wiki/False_positive_paradox | *"When the prevalence, the proportion of those who have a given condition, is lower than the test's false positive rate, even tests that have a very low risk of giving a false positive in an individual case will give more false than true positives overall."* Includes the breathalyzer and terrorism-screening worked examples. |
| Minimum description length | https://en.wikipedia.org/wiki/Minimum_description_length | *"any regularity in a given set of data can be used to compress the data, i.e. to describe it using fewer symbols than needed to describe the data literally"* (Grünwald 2004, quoted there). Two-part code L(D) = min over H of L(H) + L(D|H). Rissanen 1978 cited. |
| Neyman-Pearson lemma | https://en.wikipedia.org/wiki/Neyman%E2%80%93Pearson_lemma | *"one must not relinquish control over one type of error while calibrating the other."* Radar use: set missed detections to a low level then minimize false alarms, or vice versa. Neyman and Pearson 1933 cited. |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Isaiah N, Aug 28 2026. Metamerism: an instrument that detects green *"cannot comment on the source"*; *"If several paths create the same behavior, then behavior is a projection with lossy information"*; *"The answer is unreached until a better instrument exists."* Framework-internal. |
| The Library of Babel | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Isaiah N, Oct 02 2026. *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"* and the proximity/vocabulary method for narrowing a search. Framework-internal. |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, Nov 19 2026. *"Prestige can fund an action... But it cannot settle an action. Only the ground can settle it."* and the simulation-status warning about LLM outputs. Framework-internal. |
| They're Scanning Books When They Should Be Studying Nature | https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should | Isaiah N, Sep 06 2026. *"The real import is not a new term in the existing space. It is a new dimension of the space."* and the claim that a recognizer can only be surprised along axes its primitives can represent. Framework-internal. |
| Decoding Tacit Knowledge | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | Isaiah N, Nov 10 2026. Identifies noise with Fig 13 :32, *"the detail a crossing discards reappears above it as noise"*, and states *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."* Framework-internal. |

## Verified public contact and submission venues

Verified on 2026-11-23 and recorded in `03_public_contact_points.csv`: Psychonomic Society, Society for Mathematical Psychology, IEEE Signal Processing Society, SPIE, arXiv. One Journal of Mathematical Psychology route was found through the society site because the ScienceDirect journal page returned HTTP 400 when fetched. That failure is recorded in the CSV and in the source ledger rather than hidden. No personal emails were collected and no bulk-send plan exists.

## What the wider literature bears on the question

1. **The criterion is not the source.** Detection theory separates sensitivity from bias, and the ROC page shows that discrimination is assessed prior to specifying the cost context. This is the world-level twin of Fig 9 :60, *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* Cite these when explaining why a threshold crossing is not a detection verdict.
2. **Rarity breaks raw accuracy.** The false-positive paradox shows that a highly accurate test applied to a low-prevalence population returns more false positives than true positives. This is the world-level twin of Fig 1 :22, *"Aggregating across slots is how a live signal disappears into an average"*, and it is why per-slot indexing and source corroboration matter more than sensitivity alone.
3. **Compression is a selection principle, not a truth principle.** The MDL page gives the same inequality as Fig 5 :43. It corroborates the filter reading, and the F2 retraction in `01` records why it cannot be promoted to a witness.
4. **A reading does not name its source.** The source essay's metamerism case is the philosophical counterpart of Fig 2 :31 on independence. It supports F4 but shares an author with the figures, so it is weak corroboration, declared as high overlap in the ledger.

No fetched source conflicts with the figure verdict. The one apparent conflict, the classical detection-theory habit of treating a threshold decision as the answer, was returned to the census and resolved as a filter/witness category distinction (F5 and retraction log). It did not flip a verdict.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22-25** - *"Only methods cross up. Only head starts come down. A recording carried upward looks like knowledge and is a description of one occasion."* Sending the full architecture before anyone has described a residual sends a recording, not a generator. Lead with the shape claim and its refuter; offer links after.
- **Fig 10 :42** - *"A verifier that can reconstruct the claim cannot verify it."* Seat 4 must not hold the interiors. A recipient who has absorbed the entire framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28** - *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what the recipient would expect to see if the shape claim were true before giving them the article.
- **Seat Map :163** - *"High correlation is disqualifying for a verdict and efficient for a convention."* A mass send selected for people who already agree produces a convention, not corroboration.

**Recommended order in a reply:** (1) the shape claim and its four refuters; (2) ask what the recipient would count as a failure, and record their verdict before showing any theory; (3) only then the links, with the note that the figures, not this summary, are the authority.

## The two-stage offer

1. **Stage 1:** send the residual, the shape claim and the pre-registered refuter. Ask for a failure, not agreement. Record the verdict first.
2. **Stage 2, opt-in only:** if curious, offer the three source categories (figures text, detection-theory background, MDL background). Later agreement is never pooled as corroboration (Fig 2 :40).
3. **Stage 3:** offer the formula as a method to reuse. Each user writes their own refuter, states their own mode and names their own ground.

**Hard precondition:** stages 1 to 3 only work if the stage-1 output survives. The F2 retraction must be carried with it: compressibility ranks candidates, the ground settles sources. Sending the uncorrected "compressibility is the discriminator" version would spend the recipient's independence on a filter presented as a verdict.

## Hosting note

This agent cannot upload or send anything. Hosting the packet and sending the link is yours to do. Prefer a link that lets a recipient decline contact; an opt-in download page is closer to the figure's rule than an attachment pushed to a list.
