# Public links and distribution

All links in the tables below were fetched and read on 2026-11-23. Three attempted sources failed and are recorded in the last section rather than silently dropped.

## 1. Framework links actually opened (local)

| what | path | verified content |
|---|---|---|
| Verbatim figure text | `FRAMEWORK/reference/03-FIGURES_TEXT.md` | 13 figures plus Operators and Symbols tables, one SVG text element per line. All `Fig N :line` citations in this folder were checked against it. |
| Canonical usage rule | `FRAMEWORK/reference/FIGURES_README_canonical.md` | "They outrank everything else in the repo"; "a shape, not a name"; "a reading that makes one contradict another has misidentified its domain". |
| Eight-step loop and mode rule | `FRAMEWORK/figures/THE_FORMULA.md` | Steps 1-8, the three questions of step 7 (SEARCHED / INWARD / OUTWARD), the round trip R_T, and "Mode. general · specified · grounded." |

## 2. Wider literature actually fetched

These are secondary corroboration only. Figures decide; world sources never overrule a figure. Fields were chosen to be low-overlap with each other.

| field | source | URL | what was read and what it predicts here |
|---|---|---|---|
| Engineering, distributed systems | "Byzantine fault" (Wikipedia, accessed 2026-11-23) | https://en.wikipedia.org/wiki/Byzantine_fault | "Byzantine fault tolerance is only concerned with broadcast consistency... This kind of fault tolerance does not encompass the correctness of the value itself." Predicts that broadcast agreement and truth are separate achievements. Corroborates Fig 2 :40-41 (valence) and F2. Also: "Without message signing, Byzantine fault tolerance can only be achieved if the total number of generals is greater than three times the number of disloyal generals," which predicts a resource threshold for independence, corroborating Fig 2 :42. |
| Economics, social choice | "Belief aggregation" (Wikipedia, redirected from Judgment aggregation, accessed 2026-11-23) | https://en.wikipedia.org/wiki/Belief_aggregation | "Geometric aggregation is justified when the experts' beliefs are based on the same information, and multiplicative aggregation is justified when the experts' beliefs are based on private information." Predicts that the correct pooling rule depends on whether evidence is shared or private. Corroborates Fig 2 :39-41 exactly. Also notes strong impossibility results implying dictatorship when preference space is too rich, which corroborates the warning that a convention must not decide an outcome. |
| Survey statistics | "Design effect" (Wikipedia, accessed 2026-11-23) | https://en.wikipedia.org/wiki/Design_effect | "The effective sample size, defined by Kish in 1965, is calculated by dividing the original sample size by the design effect." Clustering and intraclass correlation inflate variance. This is the standard arithmetic behind Fig 2 :44, which names it directly. Corroborates F4: more voices from one pool are not more witnesses. |
| Mathematics, information theory | "A Mathematical Theory of Communication" (Wikipedia entry on Shannon 1948, accessed 2026-11-23) | https://en.wikipedia.org/wiki/A_Mathematical_Theory_of_Communication | "Shannon's diagram of a general communications system, showing the process by which a message sent becomes the message received (possibly corrupted by noise)." Predicts that maintenance work acts on the channel, not on the source. Corroborates Fig 10 :24 "the ground does not decay, the channel does" (F8). Note that Shannon's theory is about encoding and noise, not about epistemic warrant; the corroboration is structural and low-weight. |
| Social epistemology, media studies | "Echo chamber (media)" (Wikipedia, accessed 2026-11-23) | https://en.wikipedia.org/wiki/Echo_chamber_(media) | "An echo chamber is an environment where a person only encounters information that reflects and reinforces their own opinions." Distinguishes echo chambers from epistemic bubbles: "An epistemic bubble is an informational network in which important sources have been excluded by omission." Predicts two different failure modes, one of which matches exclusion-by-substitution (Fig 11 :66). Reports that "researchers do not fully agree on how strong or widespread echo chambers actually are," which corroborates Fig 9 :44: a sealed room cannot be searched to the end. |
| Metascience | "Replication crisis" (Wikipedia, accessed 2026-11-23) | https://en.wikipedia.org/wiki/Replication_crisis | "A replication experiment to demonstrate that the same findings can be obtained in any other place by any other researcher is conceived as an operationalization of objectivity." Lists "Emphasize triangulation, not just replication" as a remedy. Predicts that independent repetition, not accumulated agreement, is the ground test. Corroborates Fig 2 :35 and Fig 7 :35. |
| Economics, behavioural science | "Information cascade" (Wikipedia, accessed 2026-11-23) | https://en.wikipedia.org/wiki/Information_cascade | "Information cascades occur when external information obtained from previous participants in an event overrides one's own private signal, irrespective of the correctness of the former over the latter." Also: cascades are fragile and "susceptible to the release of public information." Predicts that a shared environment can lock in a wrong view without any shared source list, and that a single public release can break it. Corroborates Fig 7 :36 and Fig 8 :53. |

No world source conflicts with the figure verdict. One result is a caution rather than a conflict: the echo-chamber literature's own disagreement about effect size is expected under Fig 9 :44 and is not treated as evidence that echo chambers do not exist. All sources in this table are secondary; all share the same general evidence pool of public web reference material, so their agreement is one witness, not seven.

## 3. Public contact venues actually opened

Ten venues were opened and are recorded with URLs, relevance and verification dates in `03_public_contact_points.csv`: Center for Open Science, OSF, Wikimedia Research Index, COPE, ACL, ACM CSCW, Internet Policy Review, Shorenstein Center, Berkman Klein Center, and Data and Society. All are institutional, public and opt-in. No personal email is used anywhere in this folder.

## 4. Distribution rules: offer, do not push

- **Fig 10 :52:** "Bring a characterised residual, never the source." Lead with the shape claim and its refuter; offer the links only after a stage-1 verdict is recorded.
- **Fig 4 :22:** "Only methods cross up. Only head starts come down." A summary of the whole framework sent before a check is a recording of one occasion, not a generator.
- **Fig 9 :27-28:** "describe it before you go looking, or any frame you pick will seem to fit." Ask what the recipient would expect to see if the shape claim were true before showing the figure text.
- **Fig 2 :40-41:** high correlation is disqualifying for a verdict and efficient for a convention. A recipient selected for likely agreement contributes a convention, not corroboration.
- **Fig 2 :42:** "Buy independence in proportion to the cost of being wrong." Prefer venues whose readers are positioned to refute the claim over venues likely to endorse it.
- **Fig 10 :57:** declare the stake. This derivation is simulated and shares the framework's evidence pool; that is stated in every substantive file.

**Recommended order in a reply:** (1) the shape claim and its five pre-registered refuters; (2) ask what the recipient would count as a failure; (3) record the verdict; (4) only then offer the three local framework links, with the note that the figures, not the summary, are the authority; (5) offer the formula as a method, with the instruction that each user writes their own refuter and states their own mode.

## 5. Sources attempted but not used

Recorded for honesty, not hidden:

- `https://jots.scroll.pub/` (Journal of Online Trust and Safety): fetch failed with a transport error. No content was read, so it is not cited.
- `https://plato.stanford.edu/entries/judgment-aggregation/`: returned 404. The topic was covered instead through the public "Belief aggregation" page, which was opened.
- `https://academic.oup.com/joc` (Journal of Communication) and `https://journals.sagepub.com/home/nms` (New Media & Society): both returned 403. Neither is cited or listed in the contact CSV.

## 6. What this agent cannot do

Hosting and sending are the user's actions. Nothing here has been sent. Prefer an opt-in download page over an attachment pushed to a list, so a recipient can decline contact.
