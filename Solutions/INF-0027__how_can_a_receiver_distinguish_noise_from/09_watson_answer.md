# WATSON answer, INF-0027

**Mode: `specified`, not `grounded`.** Figures are primary and decide. World sources are secondary, corroborate but never overrule, and a conflict returns the derivation to the domain census. This is a simulated derivation checked for internal consistency against the figures, not a ground reading.

## QUESTION

How can a receiver distinguish noise from a rare but meaningful signal?

Restated as an effect: why does a positive residual on one slot sometimes source-confirm and sometimes turn out to be discarded representation detail, and what lets a receiver tell the two apart before the ground has spoken? R = |Γ(b,a) - o'| is indexed per slot and per time, never aggregated (Fig 1 :19). Anchor: the source state, a measurement that does not move when the receiver changes its criterion (Fig 2 :29). Option A says amplitude plus a threshold separates them. Option B says structure, contact and provenance separate them while the threshold only allocates a budget. The verdict below is Option B in `specified` mode, kept per domain and never averaged.

## DOMAIN CENSUS

Arity: a three-place relation (receiver library, action, observation), indexed by slot and ordered by time; it carries an ordered bond and a comparison bond, not symmetric ones. Symmetry: source classification is not symmetric, and "rare" is a threshold relative to the slot population (Fig 12 :87). Scale: the single observation step, the stream over time, and the population of slots; the membrane between scales is lossy (Fig 4).

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Receiver loop | receiver, Γ, probe actions | residual reduction per slot | the observation actually returned | admitted |
| D2 Channel | instruments, percepts, metrics, transients | contact with the ground | the ground, which does not decay | admitted |
| D3 Source / ground | whatever emits or fails to emit | true state of the world | the source-confirming measurement | admitted |
| D4 Code and library | atoms, bonds, candidate terms φ | reach, description length | settlement against the ground | admitted |
| X1 Noise as a substance | the disturbance | amplitude | none independent of the representation | not a domain yet; absorbed into D2/D4 |

Union, not partition: D1/D4 and D2/D3 form two compounds; the whole is a union of C1 structure, C2 contact and C3 source corroboration (Fig 9 :54-57). Dependency order: perception → vocabulary → objective → planning → learn and carry (Fig 3). Dependency for the search: SEARCHED → INWARD or OUTWARD (Formula step 7). Noise is representational-relative, so X1 has no anchor: Fig 13 :32 - *"the detail a crossing discards reappears above it as noise"*.

## TETHER (primary, verbatim, per domain, low-overlap fields first)

**D1 Receiver loop, status triangulated (Fig 1 and Fig 9, per-slot bookkeeping vs union splitting).**

> *"a global R near zero with one live slot residual is a legal state"* (Fig 1 :13)
> *"The residual is indexed by object slot, not aggregated."* (Fig 1 :19)
> *"Aggregating across slots is how a live signal disappears into an average."* (Fig 1 :22)

Reading: a rare signal is one live slot over a quiet background; a global average destroys it. Mode `general` for the bookkeeping rule, `specified` for receiver design. Refuter: recover every signal after replacing per-slot R with the global average and adding no other information.

**D4 Code and library, status triangulated (Fig 5 and the MDL literature, framework loop vs information theory).**

> *"seeks the gap that is large and compressible"* (Fig 5 :18)
> *"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before."* (Fig 5 :43)
> *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* (Fig 9 :60)

Reading: compressibility ranks which candidate is worth naming; it is a filter, not a witness. The ground settles source. Mode `specified`. Refuter: a large, incompressible residual without import that still selects the correct source prospectively across independent trials. The first-pass reading of compressibility as the verdict was retracted; see `01_figure_grounded_audit.md` F2.

**D2 Channel, status triangulated (Fig 10 and Fig 7, ground maintainer vs room chain).**

> *"the ground does not decay, the channel does"* (Fig 10 :24)
> *"stale percepts, dropped transients,"* (Fig 10 :25) *"saturated metrics, pooled readings"* (Fig 10 :26)
> *"you have lost touch"* (Fig 10 :28)

Reading: rare signals die by the four named channel-decay modes; the remedy is to restore the reading, not adjudicate from a degraded one. Mode `specified`. Refuter: channel independently verified fresh, unsaturated, unpooled and transient-preserving, yet rare signals still missed at the decay-predicted rate.

**D3 Source / ground, status triangulated (Fig 2 and the source-discrimination essay, anchor geometry vs instrument philosophy).**

> *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* (Fig 2 :29)
> *"Independence, between two frames, is how little they draw on the same evidence."* (Fig 2 :31)
> *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* (Fig 2 :35)
> *"the detail a crossing discards reappears above it as noise"* (Fig 13 :32)

Reading: one reading cannot name its source, so corroboration must cross differing closures; the criterion is a budget filter and never the verdict. Mode `specified`. Refuter: a closed, enumerated source set with a distinct verified reading for every member.

**Search order, status triangulated (Fig 6, Fig 8, Formula step 7).**

> *"the only operator that moves the wall"* (Fig 6 :14)
> *"It is whether anything, at any resolution, is already returning something that fails to resolve."* (Fig 6 :34)
> *"So a search that finds nothing is never a proof of absence."* (Fig 8 :39)

Reading: SEARCHED first, then INWARD or OUTWARD, never read against each other; underivable and unreachable-at-budget issue different instructions. Mode `specified`. Refuter: a novel signal detected with no added search, no instrument refinement and no import.

**Naming the specific source of a particular reading, status `gap`.** No figure line governs this after a genuine re-census. Fig 9 :32 - *"you get a kind of thing, never the answer itself"*. Fig 13 :134 - *"Unreachable is a verdict here, not a silence"*. The missing thing is a source-discriminating instrument, characterized in effect terms but not held. Agreement from a shared evidence pool is not that instrument: Fig 2 :40 - *"agreement about the world is worthless when the agreeing frames share an evidence pool"*.

## WORLD (secondary, each source read; field, author/venue/year, quote, prediction, corroborates|conflicts)

**Statistics and psychophysics (distinct literatures, one witness each).**

- **Cognitive science / signal detection.** Detection theory, Wikipedia, 2026, read 2026-11-23. Quote: *"Bias is independent of sensitivity."* Prediction: criterion and sensitivity vary separately, so a threshold change is not a source claim. **Corroborates** C2 and F5.
- **Engineering and diagnostics.** Receiver operating characteristic, Wikipedia, 2026, read 2026-11-23. Quote: *"The ROC curve is the plot of the true positive rate (TPR) against the false positive rate (FPR) at each threshold setting."* Also: ROC analysis selects models *"independently from (and prior to specifying) the cost context or the class distribution."* Prediction: discrimination is assessed before cost context. **Corroborates** F5.
- **Statistics / mathematical statistics.** Neyman-Pearson lemma, Wikipedia, 2026, read 2026-11-23. Quote: *"one must not relinquish control over one type of error while calibrating the other."* Prediction: thresholds price a trade, they do not supply a source. **Corroborates** F5 from a third field.
- **Cognitive bias / rare-event statistics.** Base rate fallacy and false positive paradox, Wikipedia, 2026, read 2026-11-23. Quote: *"When the prevalence, the proportion of those who have a given condition, is lower than the test's false positive rate, even tests that have a very low risk of giving a false positive in an individual case will give more false than true positives overall."* Prediction: rare targets are swamped by a large noise population unless slots are kept separate and the source is corroborated. **Corroborates** F1 and F3.
- **Information theory / model selection.** Minimum description length, Wikipedia, 2026, read 2026-11-23. Quote: *"any regularity in a given set of data can be used to compress the data, i.e. to describe it using fewer symbols than needed to describe the data literally."* Prediction: the two-part code ranks candidates by compression. **Corroborates** F2 as a filter only. This source does not support the retracted claim that compression decides source.

**Framework-internal essays, used for the canonical reading only, not as independent world witnesses.** Isaiah N, *The Hard Problem is About Source*, Aug 28 2026: *"it cannot comment on the source"* and *"An instrument that can't distinguish these cases demonstrates its own inadequacy."* *The Library of Babel*, Oct 02 2026: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"* *The Recursive Self-Improvement Trap*, Nov 19 2026: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* *They're Scanning Books*, Sep 06 2026: *"The real import is not a new term in the existing space. It is a new dimension of the space."* *Decoding Tacit Knowledge*, Nov 10 2026: identifies *"Noise is Fig 13 :32: 'the detail a crossing discards reappears above it as noise.'"* All opened 2026-11-23. Overlap with the figures is maximal (same author and evidence pool), so these carry no independent corroboration weight.

**Venue pages opened, no verdict bearing (silent on the question).** Psychonomic Society, Society for Mathematical Psychology, IEEE Signal Processing Society, SPIE, arXiv. These establish public opt-in routes only. The ScienceDirect Journal of Mathematical Psychology page returned HTTP 400; the society listing was opened instead and the failure is recorded in `10_source_ledger.csv`.

No fetched source conflicts with the figure verdict. The apparent conflict between classical threshold practice and the filter/witness rule was returned to the census and resolved as a category distinction (F5). It did not flip a verdict. The Wikipedia pages are a shared host but not a shared evidence pool: radar engineering, mathematical statistics, psychophysics, rare-event statistics and information theory are independent literatures. The framework essays are one pool and are declared as such.

## VERDICT (from the figures)

**The figure-derived verdict:** a receiver distinguishes noise from a rare meaningful signal only by a conjunction kept separate per domain: (D1) R stays indexed per slot, because a rare signal is one live slot in a quiet background; (D4) a candidate pattern is worth naming when its description plus leftover costs less than the raw residual, which ranks candidates and is not a source verdict; (D2) the channel to the ground is preserved against the four named decay modes; (D3) the source is corroborated across differing, non-overlapping closures. The criterion allocates a budget between misses and false alarms and is never evidence of a source. Noise is discarded representation detail, so the question is under-specified until the representation and the ground are named. Which physical source produced a particular reading is a declared `gap`, not a hidden answer. Mode `specified`. No world source flipped a verdict; the one overreach (compressibility as witness) was retracted at record level.

- **Cost if wrong:** misdirected engineering. A receiver failing C2 (dropped transients) would be sold more sensitivity; a receiver failing C3 (uncorroborated source) would be told to tune its threshold. In outreach terms, an expert's twenty minutes would be spent refuting a shape that was never the right shape. The cost is real but bounded and largely reversible, and Fig 2 :42 prices the avoidance: *"Buy independence in proportion to the cost of being wrong."*
- **Undoable:** yes. No term is deleted if the claim fails; a refutation is added and the reach falls because *"something was added rather than because anything was deleted"* (Fig 6 :42-43). The shape and its eight falsifiers are recorded in a provenance trail so a later reader can locate the error (Fig 10 :62-64).
- **Reversed by:** any of the eight pre-registered falsifiers, in particular (1) recovery of every signal after global averaging, (2) channel verified intact yet rare signals missed at the decay-predicted rate, (3) a closed source set with distinct verified readings so one reading names its source, (4) a detection rule invariant to its cost pair, or (5) a novel signal detected with no search, no instrument refinement and no import. A source-discriminating instrument that names the source would move the `gap` to `grounded`. Agreement or prestige is not such an instrument.

## Sources

- [The figures, as text (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [WATSON 60: figures as metalaws (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\60_FIGURES_AS_METALAWS.md)
- [Detection theory](https://en.wikipedia.org/wiki/Detection_theory)
- [Receiver operating characteristic](https://en.wikipedia.org/wiki/Receiver_operating_characteristic)
- [Base rate fallacy / false positive paradox](https://en.wikipedia.org/wiki/False_positive_paradox)
- [Minimum description length](https://en.wikipedia.org/wiki/Minimum_description_length)
- [Neyman-Pearson lemma](https://en.wikipedia.org/wiki/Neyman%E2%80%93Pearson_lemma)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [They're Scanning Books When They Should Be Studying Nature](https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should)
- [Decoding Tacit Knowledge](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [Psychonomic Society](https://www.psychonomic.org/)
- [Society for Mathematical Psychology](https://mathpsych.org/)
- [IEEE Signal Processing Society](https://signalprocessingsociety.org/)
- [SPIE](https://www.spie.org/)
- [arXiv](https://arxiv.org/)
