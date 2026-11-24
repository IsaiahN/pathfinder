# WATSON answer: how close can real communication systems come to theoretical limits when channels change unpredictably?

**Mode: `specified` for the substantive claims, `general` for the structural shape. Not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This WATSON run synthesizes `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By its own rule (The Recursive Self-Improvement Trap, opened 2026-11-23: LLM output can *"simulate an approximate answer/output with the formula"* while *"the truly testable output would need to be derived from the real architecture or working the formula yourself"*) it cannot settle the question it reports on. No measurement was taken.

## QUESTION

Decide, in effect terms, what the Tether says about a transmitter sending at rate `R` toward a claimed theoretical limit `C` when the channel changes unpredictably. Option A: treat `C` as one fixed anchor and report how closely engineering can approach it. Option B: re-census first and report a family of limits indexed by what the frames hold, with the gap measured per realisation and the round trip `R_T` stated. What each leads to: A produces a bare closeness number whose value is decided by an unstated benchmark convention and whose mean hides live error slots; B produces a checkable shape, refuters written in advance, and an open slot until a ground measurement settles the benchmark.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor, partition or union, and order by dependency.

- **R (the residual).** The persistent gap `C - R` under an unpredictable channel. Arity: at least three frame positions plus a measurement position. Symmetry: the limit is asymmetric in who holds channel state, in latency, and in whether variation is stochastic or adversarial. Scale: per channel use, per block (`n`), and per adaptive episode. Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* It is a **union compound** of short blocklength, unpredictable variation and unknown statistics (Fig 9 :53), not one hard question.
- **Domain 1, channel / ground.** Actors: sender, receiver, channel, noise. Currency: bits per use, error probability. Anchor: a measured rate/error pair under a stated state process. Nameable when the state process and latency are stated. This is where the "theoretical limit" must be re-censused (F1).
- **Domain 2, coding frame.** Actors: encoder, decoder, codebook. Currency: rate `R`, blocklength `n`, actions to encode/decode. Anchor: ground settlement of a minted code (measured error at stated `R`, `n`). A composition inside closure(Gamma); no new atom.
- **Domain 3, knowledge / adaptation frame.** Actors: transmitter and receiver with or without CSI, estimator, adversary. Currency: state information, observations, regret. Anchor: the state sequence and the instrument that reads it. Nameable only when an estimator or a CSI assumption exists; otherwise not yet a domain and re-censused at F1.
- **Domain 4, verification / outreach frame.** Actors: expert readers, replicators. Currency: agreement and residual. Anchor: the ground, never agreement. In this simulated run all four domains draw on one evidence pool, so this domain's independence is zero.
- **Order by dependency (Fig 3).** perceive/estimate channel, then vocabulary of state-dependent codes, then objective under a declared benchmark, then planning, then learn and carry. Fig 3 :19 *"Optimising a link that already works cannot rescue one that does not."*

Strain test applied: applying "anchor must not update" to one fixed channel is fine; applying it to a single fixed-channel capacity for a moving channel strains Fig 2, so it governs frame knowledge instead (F1). Re-census done, not smoothed over.

## TETHER (primary, verbatim)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs.

- Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* -> the fixed-channel capacity is a legitimate anchor only for a fixed, known channel; a moving channel needs a re-census of the limit.
- Fig 2 :33 *"The anchor must not update."* and Fig 2 :34 *"the anchor becomes another frame, everything drifts together, and the drift is coherent"* -> a benchmark that moves with the frame's knowledge is not a ground.
- Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* -> report the rate/error distribution, not a mean throughput.
- Fig 6 :23 *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* -> reaching a state-dependent limit requires importing channel state; a fixed codebook cannot add that atom.
- Fig 6 :27 *"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."* -> short blocklength is budget depth; missing CSI is absence.
- Fig 8 :40 *"Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."* -> the two failures take different remedies.
- Fig 4 :30 *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* -> `R_T` between abstract capacity and realised point is the honest gap.
- Fig 9 :4 *"Split it rather than search."* and Fig 9 :55 *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* -> unbundle before another search.
- Fig 9 :60 *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* -> blocklength and compute are budget filters; a measured rate/error pair is the witness.
- Fig 10 :47 *"a convention that decides an outcome has stopped being one"* -> a benchmark that decides "how close" has stopped being a convention.
- Fig 12 :125 *"A composition costs in two currencies, and they do not add."* -> bits and actions are reported apart.
- Fig 13 :115 *"The set is closed. The arrangements are not. That gap is why import exists."* -> capacity is a composition, not a primitive; channel state is the import.
- Fig 9 :32 *"you get a kind of thing, never the answer itself"* -> the framework returns a shape, not a single number.

Triangulation status: the anchor re-census (C1) is **triangulated** across Fig 2 and the world's outage/ergodic distinction plus competitive-capacity results, which are low-overlap subfields. The per-slot and import claims (C2) are **triangulated** across Fig 1, Fig 6, Fig 8 and two distinct world subfields (network finite-blocklength and CSI/fading capacity). The depth/absence and round-trip claims (C3) are **triangulated** across Fig 6, Fig 8, Fig 4 and world blocklength requirements. The convention-versus-verdict rule is **single-source** within the framework (Fig 10 plus seat map, one evidence pool), corroborated in direction by the competitive-benchmark literature. No figure line strains after re-census; benchmark dependence is recorded as a live limitation, not hidden.

## WORLD (secondary sources read)

World sources corroborate only. Each row gives field, author/venue/year, an opened quote, what it predicts here, and its overlap. None conflicts with the figure verdict; the conflict rule was not triggered.

- **Information theory / reference.** Wikipedia contributors, "Channel capacity", en.wikipedia.org, accessed 2026-11-23 (page last edited 2026-11-06): in slow fading *"there is no definite capacity as the maximum rate of reliable communications supported by the channel"*; the coding theorem holds *"for a sufficiently large block length."* Predicts an anchor re-census and a budget/depth split. Corroborates C1 and C3. Overlap: general reference, independent of the framework.
- **Networks / finite blocklength.** Nourhan Hesham, Hesham ElSawy, Jahangir Hossain, Anas Chaaban, "Rate Outage and Meta-Distribution for Uplink Networks in Finite Block-Length Regime", arXiv:2312.10412, 2023, IEEE Trans. Vehicular Technology: *"The performance using short codes cannot be inferred through classical channel capacity analysis"* and results *"demonstrate the discrepancy between the actual network rate and idealistic classical channel capacity."* Predicts per-slot distribution and a measured round trip. Corroborates C2 and C3. Overlap: low with other world sources (network modelling).
- **Learning / unknown channel.** Neil Irwin Bernardo, Jingge Zhu, Jamie Evans, "Learning Channel Codes from Data: Performance Guarantees in the Finite Blocklength Regime", arXiv:2304.10033, 2023, ISIT 2023: *"the maximum code rate achievable by a data-driven communication system over some unknown discrete memoryless channel in the finite blocklength regime."* Predicts that the learn-and-carry link is a distinct domain requiring instruments. Corroborates Fig 3. Overlap: low (learning-theoretic framing).
- **Adversarial channels / competitive analysis.** Michael Langberg, Oron Sabag, "Competitive Analysis of Arbitrary Varying Channels", arXiv:2407.02949, 2024: worst-case optimisation *"may result in low rates for state sequences that are associated with relatively good channels"* and the encoder *"benefits from varying its input distribution as time proceeds."* Predicts that benchmark choice changes the reported answer and that adaptation needs new input distribution. Corroborates C1 and C2. Overlap: low (competitive/adversarial modelling).
- **Wiretap / fading.** Daniel Seifert, Onur Gunlu, Rafael F. Schaefer, "Modular Neural Wiretap Codes for Fading Channels", arXiv:2409.08786, 2024: *"further research on finite-blocklength codes is required on the path towards practical, secure communication systems"* and codes built *"without channel state information."* Predicts that CSI is the imported atom. Corroborates C2. Overlap: low (physical-layer security).
- **Adversarial authentication.** Mayank Bakshi, Vinod M. Prabhakaran, Bikash Kumar Dey, Oliver Kosut, "Authentication over Arbitrarily Varying Channels with Causal Adversaries", arXiv:2608.28939, 2026, ITW 2026: *"whenever the authentication capacity is positive, it coincides with the no-adversary Shannon capacity."* Predicts a dichotomy rather than a smooth closeness curve under an adaptive adversary. Corroborates C1. Overlap: low (authentication/dichotomy).
- **Infrastructure (not a witness).** arXiv submission guidelines (https://arxiv.org/help/submit), cs.IT recent listing (https://arxiv.org/list/cs.IT/recent), arXiv category taxonomy (https://arxiv.org/category_taxonomy), all opened 2026-11-23. These locate the habitat and confirm cs.IT scope; they do not bear on the verdict and are not counted as confirming witnesses.

The essays by Isaiah N (Library of Babel, The Hard Problem is About Source, The Recursive Self-Improvement Trap; opened 2026-11-23) shape the method and the simulated-status disclaimer. Their agreement with the figures is expected because the same author wrote both, so it is treated as one evidence pool, not independent corroboration. Five other essays were not opened and are not cited.

## VERDICT (from the figures)

The shape survives; the single-number framing does not. For a channel that changes unpredictably, the honest theoretical limit is a family indexed by what the frames hold (CSI, latency, blocklength, adversarial power). The realised gap is measured per channel realisation, reported as the round trip `R_T` between the abstract capacity formula and the operating point, with bits of rate shortfall held apart from the actions spent tracking the channel. Finite blocklength is depth (budget, more search); missing channel state is absence (import). The benchmark is a convention until it decides the outcome, and then it is not a convention. The framework returns that shape and its refuters; it does not name a single right benchmark. This is a `specified`, ungrounded, candidate result.

- **cost if wrong:** bounded and locatable. The packet states its mode, refuters and lineage before its conclusion, so an error is findable rather than invisible. The real cost is spending an outside reader's independence by sending a bare "percent of capacity" that lets a benchmark convention decide the answer before the ground speaks. Fig 2 :42 *"Buy independence in proportion to the cost of being wrong."* That cost is avoidable by leading with the shape claim and its refuters.
- **undoable:** yes. The union unbundling, benchmark reporting, per-slot reporting and two-currency accounting are additions to how the question is answered. They do not require withdrawing any established coding result, and a sent claim can be superseded by the corrected packet.
- **reversed by:** a ground reading, not agreement. The five pre-registered tests are: (1) a single stable frame-independent limit that settles reliability without side conditions; (2) a state-blind fixed code at the same blocklength and error matching full CSI; (3) `R_T = 0` at finite blocklength and compute; (4) the rate distribution carrying nothing beyond its mean; (5) depth and absence issuing the same instruction. A re-census showing the union is a partition would also reverse it. Until one fires, the verdict stands as `candidate`.

## Sources

- [Figures text extract with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README, canonical local copy](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
- [THE FORMULA (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md)
- [THE SEAT MAP Field Guide, amended (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_SEAT_MAP_Field_Guide_amended.md)
- [WATSON 60: the figures as metalaws (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\60_FIGURES_AS_METALAWS.md)
- [Channel capacity, Wikipedia](https://en.wikipedia.org/wiki/Channel_capacity)
- [Rate Outage and Meta-Distribution for Uplink Networks in Finite Block-Length Regime](https://arxiv.org/abs/2312.10412)
- [Learning Channel Codes from Data: Performance Guarantees in the Finite Blocklength Regime](https://arxiv.org/abs/2304.10033)
- [Competitive Analysis of Arbitrary Varying Channels](https://arxiv.org/abs/2407.02949)
- [Modular Neural Wiretap Codes for Fading Channels](https://arxiv.org/abs/2409.08786)
- [Authentication over Arbitrarily Varying Channels with Causal Adversaries](https://arxiv.org/abs/2608.28939)
- [arXiv submission guidelines](https://arxiv.org/help/submit)
- [arXiv cs.IT recent listing](https://arxiv.org/list/cs.IT/recent)
- [arXiv category taxonomy](https://arxiv.org/category_taxonomy)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- Folder material synthesized: `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, `08_expert_verification_packet.md`
