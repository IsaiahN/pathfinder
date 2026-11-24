# WATSON answer, INF-0022

**Mode: `specified` on the shape claims, `general` on the cited laws, `gap` on the identity of a unique best code, not `grounded`.**

**Status: SIMULATED DERIVATION, not a ground reading.** This run synthesizes `01_figure_grounded_audit.md`, `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` and `08_expert_verification_packet.md`. It is checked for internal consistency against the figures. By the framework's own rule (Recursive Self-Improvement Trap, essay read 2026-11-23: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself") it cannot settle the question it reports on. No channel was measured.

## QUESTION

Which coding strategies best protect messages when errors are correlated rather than independent? Restated as an effect: which arrangement of redundancy makes R = |Γ(b,a) - o'| stay small per symbol slot when adjacent slots fail together, rather than being averaged into a global error rate (Fig 1 :19)? Option A: name a code as the winner inside the current frame. Option B: split the compound, derive the shape of the winning arrangement, and refuse the name until an anchor settles it. A filters for what gets tried but hands out a verdict the framework cannot support; B returns a checkable shape and a measured stopping rule.

## DOMAIN CENSUS

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor, partition or union, order by dependency.

- **R (the residual).** A decoder counts five corrupted bits as five independent witnesses when they are one physical burst. Arity: two-place (error pattern, channel state); the standard two-state model has good and bad states. Symmetry: independent errors are exchangeable across positions; bursts break that symmetry because failures are confined to consecutive components. Scale: bit, symbol, codeword, interleaved block. Fig 9 :55 names it a union compound, not one hard question.
- **D1 Channel and noise.** Actors: transmitter, channel, noise source, receiver. Currency: error pattern and transition probabilities. Anchor: a measured error sequence (Gilbert 1960 derived transition parameters from a success/failure sequence). Admitted.
- **D2 Code and decoder.** Actors: codewords, symbols, parity checks, interleaver. Currency: redundancy n-k, burst length ℓ, distance, rate. Anchor: block error rate on the D1 channel. Admitted.
- **D3 Cost and constraint.** Actors: bandwidth, energy, memory, latency. Currency: rate, interleaver memory, decoding delay. Anchor: a declared budget. Admitted.
- **D4 Verification and outreach.** Actors: expert readers. Currency: residuals and corrections. Anchor: the ground (a reproducible block-error curve), never agreement. In this simulated run all seats draw on one evidence pool, so its independence is zero.
- **X1 "the best code in the abstract".** No nameable anchor: no channel, no metric, no budget. Not a domain yet, only a phrase.

Union, not partition: D1 and D2 form a compound (D2's currency is meaningless without D1's anchor), D3 gates D2, D4 ranges over all three (Fig 9 :54). Dependency order: perceive the channel, get terms for the error structure, state what counts as protection, choose the code, carry the result forward (Fig 3 :5, :7, :10, :13, :15). Strain test: Fig 11 :40 governs capability and contact in D4, not code choice in D2; re-censused and removed. No figure line was forced.

## TETHER (primary, verbatim, per domain)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim from the SVGs.

**D1 Channel and noise, status triangulated (Fig 1 and Fig 2 and Fig 10, low overlap).**

- Fig 1 :19 "The residual is indexed by object slot, not aggregated." -> count errors per position, not as one pooled rate.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." -> the independent-error model hides the burst.
- Fig 2 :20-21 "so the agreement is the pool talking, not two frames confirming each other" -> adjacent errors share one source. This is a structural analogy in D1, corroborated by the two-state Markov channel model from the world literature.
- Fig 10 :26 "stale percepts, dropped transients, saturated metrics, pooled readings" -> pooled BER is a saturated metric.
- Reading: a burst is one event read many times. Mode `specified`. Refuter: independence at the decision scale after conditioning on the physical state.

**D2 Code and decoder, status triangulated (Fig 12 and Fig 13 and Fig 6 and Fig 8, distinct roles).**

- Fig 12 :94 "The arrangement is the substance." -> interleaving changes the substance at unchanged redundancy.
- Fig 13 :115 "The set is closed. The arrangements are not. That gap is why import exists." -> a finite code family cannot generate the reordering from inside.
- Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." -> the interleaver is an import from the coding frame.
- Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." -> tuning a random-error code does not make it a burst code.
- Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." -> random and burst protection are isomers, not a ranking.
- Reading: break the shared pool by arranging symbols; group at the scale where the burst is one symbol; mark erasures. Mode `specified` for the shape; the device is a provenanced import. Refuter: equal-redundancy reordering with no change in corrected burst length.

**D3 Cost and constraint, status triangulated (Fig 5 and Fig 12 and Fig 9, separate quantities).**

- Fig 5 :42 "The acceptance test is a bargain, not a threshold." -> keep the strategy only if cost plus leftover failure beats the baseline.
- Fig 12 :126 "A composition costs in two currencies, and they do not add." -> rate and redundancy do not sum with memory and latency.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." -> a rank score is a budget filter, never the winner.
- Reading: price both currencies separately. Mode `general` for the rule, `specified` for its use here. Refuter: a strategy that wins on every currency simultaneously on two independent channels.

**D4 Verification and outreach, status triangulated (Fig 2 and Fig 10 and Seat Map :163).**

- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." -> the block-error curve is the anchor.
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" -> this simulated second seat is not a witness.
- Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." -> first contact carries the residual, not the source.
- Fig 10 :52 "Bring a characterised residual, never the source." -> the two-stage offer.
- Reading: each reader ranges separately against a measured curve; agreement is never pooled. Mode `general`.

**Union and gap, status single-source for the figure rule, corroborated by the engineering split.**

- Fig 9 :5 "Split it rather than search." -> split channel, code, cost and decoding before choosing.
- Fig 9 :32 "you get a kind of thing, never the answer itself" -> no named winner.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." -> no winner found is not proof none exists.
- Fig 13 :134 "Unreachable is a verdict here, not a silence," -> the gap is stated, not hidden.
- Reading: X1 has no anchor. Verdict `gap` after genuine re-census of D1 to D4.

## WORLD (secondary sources read)

World sources corroborate but never overrule. Each was fetched and read on 2026-11-23.

- **Engineering / burst codes.** Wikipedia contributors, "Burst error-correcting code" (English Wikipedia, accessed 2026-11-23): "burst error-correcting codes employ methods of correcting burst errors, which are errors that occur in many consecutive bits rather than occurring in bits independently of each other." Predicts a separate burst family with bounds in burst length ℓ; corroborates the split and the arrangement lever. Overlap with other world sources: low, distinct topic from the channel model page but same host.
- **Engineering / interleaving.** Same source: "If the burst error correcting ability of some code is ℓ, then the burst error correcting ability of its λ-way interleave is λℓ." Predicts that arrangement alone multiplies protection; corroborates Fig 12 :94. Overlap: same page, so one witness with the burst bounds.
- **Engineering / cost.** Same source: block interleavers give "latency" and a "considerable amount of memory", cross interleavers halve both. Predicts two currencies that do not add; corroborates Fig 12 :126. Overlap: same witness.
- **Channel modelling.** Wikipedia contributors, "Burst error" (English Wikipedia, accessed 2026-11-23), citing Gilbert 1960, "Capacity of a burst-noise channel", Bell System Technical Journal 39(5):1253-1265, and Elliott 1963, BSTJ 42(5):1977-1997: "The Gilbert-Elliott model is a simple channel model ... It is based on a Markov chain with two states G (for good or gap) and B (for bad or burst)." Predicts dependence by construction and a measurement-derived channel; corroborates D1. Overlap: independent of the coding pages' content but same host.
- **Engineering / symbol codes.** Wikipedia contributors, "Reed-Solomon error correction" (English Wikipedia, accessed 2026-11-23), citing Reed and Solomon 1960: "well-suited to applications where errors occur in bursts" and "a poor choice compared to a binary code" for random single-bit errors; "if multiple bits in a symbol are corrupted it only counts as a single error." Predicts the isomer reading and the symbol-grouping step; corroborates Fig 12 :117. Overlap: distinct topic, same host.
- **Publication venues.** arXiv, "cs.IT Information Theory": "Covers theoretical and experimental aspects of information theory and coding." IEEE ISIT 2026: "ISIT 2026 invites submission of manuscripts on all classical topics of Information Theory such as Shannon Theory, Coding Theory and Techniques". Predicts public opt-in routes for a checkable claim; corroborates the distribution rules, not the figure verdict.
- **Metatheory / canonical usage.** Isaiah N, local figures README (copy of public repo README): "what a missing thing would have to look like (a shape, not a name)" and "Indiscernibility is not identity." Predicts a refused slot; corroborates the gap. Overlap: high, framework author.
- **Human cognition / source discrimination.** Isaiah N, "The Hard Problem is About Source" (adventuresinml Substack, 2026-08-28): "If several paths create the same behavior, then behavior is a projection with lossy information." Predicts that a raw BER reading cannot name its source; corroborates the need for a dependence test. Overlap: high, framework author.
- **Human cognition / tacit knowledge.** Isaiah N, "Decoding Tacit Knowledge" (adventuresinml Substack, 2026-11-10): "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." Predicts the first contact format; corroborates Fig 10 :52. Overlap: high, framework author.
- **Search / shape.** Isaiah N, "The Library of Babel: Locating The Book of Books" (adventuresinml Substack, 2026-10-02): "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." Predicts a narrowed shape; corroborates Fig 9 :32. Overlap: high, framework author.
- **Validation / self-validation.** Isaiah N, "The Recursive Self-Improvement Trap" (adventuresinml Substack, 2026-11-19): "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." Predicts this derivation cannot settle its own claim; corroborates its simulated status. Overlap: high, framework author.

No world source conflicts with the figure verdict; the conflict rule was not triggered. The Wikipedia pages share a host but cover distinct topics and cite distinct primary literatures, so they are treated as low-overlap witnesses for the engineering claims. The essays all share an author and an evidence pool with the figures, so their agreement is expected and carries little independent weight.

## VERDICT (from the figures)

Correlated errors are a shared-source structure and a union compound, so the problem must be split before a code is chosen. The figure-licensed lever is arrangement: grouping at the symbol scale, interleaving across uses, and erasure marking, priced in two separate currencies against a declared channel. Random-error and burst protection are isomers, same atoms arranged differently, with the difference invisible in a raw bit-error rate and decisive in behaviour. No figure names a winning code, an interleaver depth or a λ; "best" is a `gap` until a measured block-error curve on a specified channel family settles it. Mode `specified` on the shape, `general` on the laws, `gap` on the member. Nothing here is `grounded`.

- **cost if wrong:** bounded and locatable. A wrong arrangement claim is refuted by one equal-redundancy comparison on a measured burst channel. The larger avoidable cost is spending reader independence by sending a named code and a full theory before the channel residual is described (Fig 2 :42: "Buy independence in proportion to the cost of being wrong."). Leading with the shape and the refuter avoids it.
- **undoable:** yes. The shape survives independent of any specific code binding; a refuted interleaver choice can be replaced without withdrawing the isomer claim. A sent claim can be superseded by a corrected packet, and no primitive is withdrawn.
- **reversed by:** a ground reading, not agreement. A dependence test showing independent errors at the decision scale fires D1's refuter; an equal-redundancy reordering that does not change corrected burst length fires D2's; a strategy that wins on rate, memory and latency simultaneously on two channels fires D3's; a code family that dominates both memoryless and correlated channels without an arrangement change narrows the split rule. Until one fires, the verdict stands as `candidate`.

## Sources

- [Burst error-correcting code](https://en.wikipedia.org/wiki/Burst_error-correcting_code)
- [Burst error and the Gilbert-Elliott model](https://en.wikipedia.org/wiki/Burst_error)
- [Reed-Solomon error correction](https://en.wikipedia.org/wiki/Reed%E2%80%93Solomon_error_correction)
- [arXiv cs.IT archive](https://arxiv.org/archive/cs.IT)
- [IEEE ISIT 2026](https://www.ieee-isit.org/)
- [ISIT Information for Authors](https://www.ieee-isit.org/index.php/information-authors)
- [The Library of Babel: Locating The Book of Books](https://adventuresinml.substack.com/p/the-library-of-babel-locating-the)
- [The Hard Problem is About Source](https://adventuresinml.substack.com/p/the-hard-problem-is-about-source)
- [Decoding Tacit Knowledge](https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context)
- [The Recursive Self-Improvement Trap](https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap)
- [They're Scanning Books When They Should Be Studying Nature](https://adventuresinml.substack.com/p/theyre-scanning-books-when-they-should)
- [How Intelligence Actually Works](https://adventuresinml.substack.com/p/how-intelligence-actually-works)
- [How a Society of Agents Would Work](https://adventuresinml.substack.com/p/how-a-society-of-agents-would-work)
- [Arrival of the Fittest: The Tether Architecture](https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether)
- [Figures text extract with line numbers (local)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md)
- [Figures README (local canonical copy)](local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md)
