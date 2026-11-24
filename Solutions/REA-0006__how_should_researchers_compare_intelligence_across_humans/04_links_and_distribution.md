# Public links and distribution

Verified during this run, 2026-11-23. A link is marked as fetched only if content was actually returned to this session. Pages reached through a public search index are marked as such and carry reduced weight.

## 1. Links fetched and read directly

| what | URL | what was returned and why it matters |
|---|---|---|
| On the Measure of Intelligence (Chollet 2019) | https://arxiv.org/html/1911.01547 | Full HTML text. Defines intelligence as skill-acquisition efficiency over a scope of tasks with priors, experience and generalization difficulty; states that unlimited priors or training data let experimenters buy arbitrary skill and mask generalization power; notes that 70 definitions were summarized by Legg and Hutter and that the Turing test outsources measurement to unreliable human judges. The single strongest low-overlap world corroborator for F1, F2 and F6. |
| Validity of Cognitive Tests for Non-human Animals (Schubiger, Fichtel, Burkart 2020) | https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2020.01835/full | Full review and Table 1. Non-cognitive factors affect performance mainly via attention; three preconditions (sensory, motor, motivational) must hold for a fair comparison; "applying a physically identical task is not sufficient to warrant fair species comparisons". Corroborates F5. |
| Are There Differences in Intelligence Between Nonhuman Species? (Colombo and Scarf 2020) | https://pmc.ncbi.nlm.nih.gov/articles/PMC7471122/ | Full open-access text. Reviews Macphail's null hypothesis; quotes Hodos that a general intelligence concept for animals is "well beyond our grasp"; recommends "specific, definable, and measurable capacities" and "kernel cognitive capabilities"; shows pigeon and monkey transfer become indistinguishable once contextual variables are set. Corroborates F1, F2 and F5. |
| Methods in Comparative Cognition (Stanford Encyclopedia of Philosophy, 2023) | https://plato.stanford.edu/entries/comparative-cognition/ | Full entry. Documents anthropomorphism, anthropofabulation, underdetermination, null-hypothesis choice and the plurality-of-methods conclusion; Buckner 2013 on an inflated human sense of its own aptitude "loads the deck against animal mentality". Corroborates F3 and the low-overlap instrument rule. |
| A Collection of Definitions of Intelligence (Legg and Hutter 2007) | https://arxiv.org/abs/0706.3639 | Abstract and bibliographic record. "70-odd definitions" collected, no complete list possible; summarized as "Intelligence measures an agent's ability to achieve goals in a wide range of environments." Corroborates F1's no-consensus-object claim. Full paper body was not re-read this session (abstract and record only), so the quote is from the abstract as returned. |
| The Recursive Self-Improvement Trap (Isaiah N, 2026) | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Full essay read directly. "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." Also the simulated-output limit, "the truly testable output would need to be derived from the real architecture or working the formula yourself." Framework author, maximal overlap, no independent witness weight. |
| Animal Cognition submission guidelines (Springer Nature) | https://link.springer.com/journal/10071/submission-guidelines | Full author instructions returned. Single-blind review; LLM authorship policy stated explicitly. Used to verify the public submission route in the contact CSV. |
| Animal Cognition how to publish (Springer Nature) | https://link.springer.com/journal/10071/how-to-publish-with-us | Full page. Open access, article processing charge. Used for the venue note in the contact CSV. |
| Frontiers in Psychology, Comparative Psychology section | https://www.frontiersin.org/journals/psychology/sections/comparative-psychology | Full section page. Open submission portal, open Research Topics, including work on comparative cognition of intelligence. |
| NeurIPS 2026 Evaluations and Datasets Track call | https://neurips.cc/Conferences/2026/CallForEvaluationsDatasets | Full call. Evaluation as an object of study; benchmark saturation, overfitting, competing evaluation designs, construct validity; double-blind by default; OpenReview submission. |

## 2. Reached through the public search index, not fetched directly

These are recorded honestly and used with reduced weight. Nothing is quoted from them beyond the text actually returned by the search result.

| what | URL | note |
|---|---|---|
| Comparative Cognition Society home and About | https://comparativecognition.org/ and https://comparativecognition.org/about.php | Society purpose and journal description returned in the search index; direct automated fetch produced a transport error. |
| ARC Prize, What is ARC-AGI? | https://arcprize.org/arc-agi | Definition of intelligence as skill-acquisition efficiency and the core-knowledge-priors fairness argument returned in the search index. The underlying Chollet 2019 paper was fetched directly, so the claim does not depend on this page. |
| Vertebrate Intelligence: A Review of the Laboratory Research (Thomas 1986) | https://psyc.franklin.uga.edu/sites/default/files/inline-files/ThomasChapter1986.pdf | Direct PDF fetch is unsupported by this fetcher; only the search-index excerpt was returned. "Intelligence is a fictitious entity. It has no physical existence." and the search for a "common denominator" are from that excerpt, not from a full reading. Recorded with reduced weight and not used for a verdict. |
| Animal Cognition aims and scope | https://link.springer.com/journal/10071/aims-and-scope | Scope text returned via the search index; the direct page presented a cookie notice. The submission and OA pages were fetched directly. |

## 3. Fetch failures, recorded rather than hidden

- `https://www.sciencedirect.com/journal/intelligence/publish/guide-for-authors` returned HTTP 400 at an error page. No quote was taken and the venue was excluded from the contact CSV.
- `https://www.apa.org/pubs/journals/com` returned no content to the fetcher. Excluded from the contact CSV.
- `https://comparativecognition.org/` returned a transport error on direct fetch. Content from the public search index is marked as such above.
- `https://comparative-cognition-and-behavior-reviews.org/for-authors/` returned an automated-access verification interstitial. Excluded as a verified submission route; only the society's description of CCBR is used.
- The Thomas 1986 PDF is `application/pdf`, which this fetcher cannot open. Kept as a partial source with reduced weight.

## 4. Wider literature that bears on the question

Grouped by field so overlap is visible. Fields that are genuinely low overlap with the framework are marked.

1. **Machine intelligence and evaluation (low overlap).** Chollet 2019 and Legg and Hutter 2007. The shared point is that skill at a task is not capability, because priors can be bought and definitions multiply. The disagreement worth noting: Chollet offers a formal single efficiency measure, which strains against Fig 12 :125-130 (bits and actions are two currencies that do not add). Kept as a live strain, not a flipped verdict.
2. **Comparative cognition and animal behaviour (low overlap).** Schubiger et al. 2020, Colombo and Scarf 2020, Thomas 1986 partial. The shared point is that per-capacity, context-controlled comparisons are what the field can actually deliver, and that a general intelligence scale for animals is not in hand.
3. **Philosophy of comparative method (low overlap).** SEP Methods in Comparative Cognition 2023. Anchors the warnings about anthropomorphism, underdetermination and the choice of null hypothesis.
4. **Framework essays (maximal overlap, no independent weight).** Recursive Self-Improvement Trap, plus the canonical eight-essay mapping carried in `05_what_shape_means.md`. These corroborate the shape but share the framework author's evidence pool, so their agreement with the figures is expected.

## 5. Distribution rules: offer, do not push

Figure-grounded reasons:

- **Fig 10 :52**: "Bring a characterised residual, never the source." Sending the full architecture before someone has described the residual sends a recording, not a generator. Lead with the separator and its refuter.
- **Fig 10 :42**: "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the framework before giving a verdict has joined the frame being checked.
- **Fig 9 :27-28**: "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see under their own comparison before showing the protocol.
- **Fig 2 :41**: "efficient for a convention: agreement about a shared meaning is the product, not a corruption of it." Selecting recipients for likely agreement manufactures a convention, not corroboration.
- **Fig 8 :53**: "Residual first, frame second."

**Recommended order in a reply:** (1) the separator and the three refuters; (2) ask what they would count as a failure; (3) record that verdict; (4) only then offer the figure links, with the note that the figures, not this summary, are the authority; (5) offer the loop as a method each person reuses with their own ground and their own pre-written refuter.

## 6. The two-stage offer

**Stage 1.** Send the output only: capability is agent-and-habitat, per-slot comparison, non-updating anchor, low-overlap instruments, harness caveat, and the three failures written in advance. No theory, no links. Record the verdict before anything else is shown.

**Stage 2, opt-in only.** If they are curious, offer the three links in `02_outreach_email.md`. Their later agreement is never pooled as corroboration (Fig 2 :40).

**Stage 3, opt-in only.** Offer the loop as a method. Fig 4 :22: "Only methods cross up. Only head starts come down." Each user writes a refuter before running it and states the mode of the result. Fig 5 :48: "Its own output is never a measure of success."

**Hard precondition.** Stages 1 to 3 only work if the stage-1 output survives. The live type strains S3 and S4 in `01_figure_grounded_audit.md` §7 must be stated, not hidden. If they cannot be stated back, repair before sending.

## 7. What this agent cannot do

I cannot host or send anything. Hosting the packet (Drive, Dropbox, a repo release) and sending the link is yours to do. Prefer an opt-in download page that lets a recipient decline contact over an attachment pushed to a list. One-to-one only, no bulk send, no misleading subject lines.
