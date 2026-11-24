# Figure-grounded audit: INF-0022, correlated errors and coding strategy

**Mode of this document: `specified` on the shape claims, `general` on the cited laws, `gap` on the identity of a single best code.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** The Recursive Self-Improvement Trap (essay, read 2026-11-23) states that LLMs *"can quickly simulate an approximate answer/output with the formula"* and that *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* LLM output is *"simulacra."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text with line numbers), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, the eight essays, and the public sources in `10_source_ledger.csv`. Every figure quote was checked character by character against the local extract before use.

---

## 0. The claim under audit

> Which coding strategies best protect messages when errors are correlated rather than independent?

Stated as an effect. A decoder treats each symbol error as an independent witness: the probability of the received word given the sent word factorises over positions. When errors are correlated, adjacent positions fail together, so the error pattern carries far less information than its Hamming weight suggests. Several symbols are one event. The independent-error model counts them as several. R = |Γ(b,a) − o′| per slot (THE_FORMULA.md step 1) is systematically misread: five corrupted bits are booked as five residuals when they are one.

What is at stake. If correlation is a *different shape* of noise rather than a larger amount of noise, codes optimised for independent errors are not a worse version of the right code; they are aimed at the wrong quantity. The engineering literature already behaves this way: burst channels get interleavers, symbol codes and bounds expressed in burst length ℓ, not in raw bit error rate. The derivation's job is to say why, in figure terms, and what to measure next.

---

## 1. Residual, by arity, symmetry and scale

- **Arity.** Two-place at minimum: (error vector, channel state). The channel state is a hidden variable that makes error indicators dependent. Under the standard Gilbert-Elliott model (world source, read 2026-11-23) the chain has two states, good and bad, with different error probabilities. So the error event is a *compound* of position and state, not a single number.
- **Symmetry.** Independent errors are exchangeable across positions: permuting positions leaves the model unchanged. Correlated errors are not; they have locality, an ordered span. A burst is defined by *consecutive* components (world source: burst error-correcting code). That breaks the permutation symmetry and introduces a sequence bond, not a symmetric one (Fig 12 :73, ordered `→`).
- **Scale.** Single symbol (bit), symbol (field element), codeword, interleaved block. A burst of bits is one symbol error at the symbol scale (world source: Reed-Solomon over F_2^m); a burst of symbols across codewords is one event at the interleaver scale. The scale at which the noise is *counted* decides which code wins.

This is a **union compound**, not one hard question. It bundles (a) channel characterisation, (b) redundancy arrangement, (c) decoding under erasure, (d) rate and latency cost. Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :57: *"a case in two conditions is not a harder case of either"*. A single lever clears the region where only one condition holds and leaves the intersections standing (Fig 9 :56).

---

## 2. Domain census (before choosing any figure line)

One line per domain: actors / currency / anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Channel and noise | transmitter, channel, receiver, noise source | error pattern, transition probabilities | measured error sequence, a Gilbert-Elliott two-state trace | admitted |
| D2 Code and decoder | codewords, symbols, parity checks, generator polynomial, interleaver | redundancy (n−k), burst length ℓ, distance, rate | block error rate measured on the channel from D1 | admitted |
| D3 Cost and constraint | bandwidth, energy, memory, latency | rate R=k/n, interleaver memory, decoding delay | the system's own budget, declared in advance | admitted |
| D4 Verification / outreach | expert readers, instrument logs | residual and correction | the ground (a measured BER curve), never agreement | admitted; in this simulated run independence = 0 |
| X1 "the best code in the abstract" | none nameable | none | none: no channel, no budget, no metric | **not a domain yet**, only a phrase |

**Partition or union.** D1 and D2 form a compound: D2's currency is meaningful only against D1's anchor. D3 gates D2 (a code with unbounded latency is not available under a latency constraint). D4 ranges over all three. The whole is a union (Fig 9 :54: *"when the split lands on a union rather than a partition, unbundle before you search again"*).

**Dependency order (Fig 3).** Perception of the channel → vocabulary for the error structure → objective (what counts as protection) → planning (which code) → learn and carry (Fig 3 :5, :7, :10, :13, :15). Optimising the code (link 4) before characterising the channel (link 1) is effort spent above the break. Fig 3 :20: *"The chain is ordered by dependency, not by importance."*

**Strain test applied before conclusion.** Fig 11 :40 (*"An improvement that does not change contact changes nothing"*) could be strained to say "any better code is useless without a better channel model." That is a stretch: Fig 11 governs agent-and-habitat capability, not coding. It governs D4 (does an expert's opinion change contact with the measured BER?). For D2 the governing line is Fig 12 :94 (*"The arrangement is the substance"*). Re-census done; no figure was forced.

---

## 3. Figure census (quoted before concluding)

| figure | verbatim line (checked) | bearing | verdict |
|---|---|---|---|
| Fig 1 | *"The residual is indexed by object slot, not aggregated."* (:19) | per-symbol residual must not be averaged into a global BER | governs D1 |
| Fig 1 | *"Aggregating across slots is how a live signal disappears into an average."* (:22) | independent-error model aggregates correlated slots | governs D1, F1 |
| Fig 2 | *"so the agreement is the pool talking, not two frames confirming each other"* (:20-21) | correlated errors share a source | governs D1, F1 (strain tested, see F1) |
| Fig 2 | *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* (:29) | measured BER curve is the anchor, not code reputation | governs D4, F5 |
| Fig 2 | *"Independence, between two frames, is how little they draw on the same evidence."* (:31) | same arithmetic defines code distance and expert independence | governs D2 and D4, F6 |
| Fig 3 | *"A link with no instrument is not a link that works. It is a link nobody has looked at."* (:27) | channel characterisation before code choice | governs dependency order, F5 |
| Fig 4 | *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* (:30) | abstract channel model to concrete code and back | governs R_T in `11_audit.md` |
| Fig 5 | *"The acceptance test is a bargain, not a threshold."* (:42) | a code is kept when redundancy cost plus leftover residual beats the unencoded cost | governs D2, F7 |
| Fig 6 | *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* (:23) | random-error code family cannot derive a burst strategy from inside; interleaving is an import from the arrangement frame | governs D2, F3 |
| Fig 8 | *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."* (:32) | more random-error codes do not become a burst code | governs D2, F3 |
| Fig 8 | *"So a search that finds nothing is never a proof of absence."* (:39) | no unique best code found is not proof none exists | governs X1, F8 |
| Fig 9 | *"Split it rather than search."* (:5) | unbundle channel, code, cost, decoding | governs F2 |
| Fig 9 | *"you get a kind of thing, never the answer itself"* (:32) | the framework returns a strategy shape, not a named code | governs F8 |
| Fig 9 | *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* (:60) | a high code-rank score is a budget filter, not truth | governs D3, F7 |
| Fig 10 | *"the ground does not decay, the channel does"* (:24) | channel drift is a maintenance problem, not a code problem | governs D1, F4 |
| Fig 10 | *"stale percepts, dropped transients, saturated metrics, pooled readings"* (:26) | pooled error counts are a saturated metric | governs D1, F1 |
| Fig 10 | *"A verifier that can reconstruct the claim cannot verify it."* (:42) | do not show the derivation before the verdict | governs D4, outreach |
| Fig 10 | *"Bring a characterised residual, never the source."* (:52) | first contact carries the residual | governs outreach |
| Fig 11 | *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."* (:44) | enumerate the noise habitat: fade, scratch, scheduler, adversary | governs D1, F4 |
| Fig 11 | *"And contact cascades."* (:52) | correction and retransmission reshape the error process | governs D1, F4 |
| Fig 12 | *"Symmetry is what decides whether an arrangement is a new thing."* (:92) | burst vs random is a symmetry break | governs F6, `06` |
| Fig 12 | *"The arrangement is the substance."* (:94) | interleaving changes the substance at equal redundancy | governs D2, F3 (decisive) |
| Fig 12 | *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* (:117) | same redundancy, different arrangement | governs F6, `06` |
| Fig 13 | *"The set is closed. The arrangements are not. That gap is why import exists."* (:115) | finite code family, unbounded arrangements | governs F3, `06` |
| Seat Map | *"High correlation is disqualifying for a verdict and efficient for a convention."* (:163) | do not select expert readers for agreement | governs outreach |

No line was accepted on strain. F1 records the one place where a line appeared to strain and how re-census resolved it.

---

## 4. Findings

### F1  -  Correlated errors are the common-cause collapse, not a bigger version of independent errors (triangulated)

Fig 2 :18-21 names the second collapse: *"one evidence pool"*, *"they never talk, and still agree"*, *"so the agreement is the pool talking, not two frames confirming each other"*. Fig 2 :39-40 adds: *"Correlation has valence. disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*.

Read in D1, adjacent bits in a burst are not independent witnesses to the noise; they are readouts of one scratch, one fade, one lightning stroke. Counting them as five independent errors is the arithmetic of a shared pool read as five frames. Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* Fig 10 :26 lists *"pooled readings"* as a channel failure.

**Re-census of the apparent strain.** Fig 2 is about *frames*, not bits. Applying it to bits is an analogy, so it cannot decide the code on its own. Re-census: what Fig 2 governs here is the *inference structure*, which is identical (many readings, one source). The world source supplies the bridge: the Gilbert-Elliott model is explicitly a Markov chain with good and bad states, so successive errors are dependent by construction (author, venue, year in ledger). The figure governs the shape; the channel model supplies the instance. Verdict: **triangulated** across Fig 1 (per-slot residual), Fig 2 (shared source), Fig 10 (pooled readings), with a low-overlap world source confirming the two-state structure. Not a single witness.

**Refuter.** A channel measurement in which error indicators remain independent at the bit level after conditioning on the physical state (scratch, fade slot). Then there is no shared pool and F1 does not apply.

### F2  -  The question is a union compound; split before choosing (single-source for the figure rule, corroborated by the engineering split)

Fig 9 :5: *"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."* The code literature corroborates by doing exactly this: random-error codes and burst-error codes are separate families with separate bounds. Reed-Solomon is described as *"a poor choice compared to a binary code"* for random single-bit errors but *"well-suited to applications where errors occur in bursts"* (world source, read 2026-11-23). That is a rule working well on a different subset.

Refuter. A single code family with one bound that is optimal under both independent and correlated error models on the same channel, measured, not asserted. Then the split is not required.

### F3  -  The decisive lever is arrangement: interleaving is an import from the arrangement frame, not more of the same code (triangulated)

Fig 12 :94: *"The arrangement is the substance."* Fig 13 :115: *"The set is closed. The arrangements are not. That gap is why import exists."* Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* Fig 8 :32: *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."*

Reading. You cannot make a random-error code into a burst code by tuning its parameters inside the random-error frame; the closure is the same. The operator that moves the wall is import from a frame that orders the sequence. Interleaving is exactly that: the transmitter jumbles symbols, the deinterleaver reverses the jumble, and a contiguous burst at the channel becomes spread-out single errors at the decoder input (world source, read 2026-11-23). The theorem there is sharp: a λ-way interleave of a code that corrects bursts of length ℓ corrects bursts of length λℓ. That is a wall moved by arrangement at the same redundancy.

**Triangulation.** Fig 12 (bond carries meaning), Fig 13 (closed set, open arrangements), Fig 6 (import moves the wall), Fig 8 (idempotent closure), plus an independent engineering source that states the λℓ theorem. Low overlap between the metatheory and the coding textbook. Verdict **triangulated** for the *shape* (arrangement over ingredients).

**What the figures do not give.** They do not give λ, the interleaver depth, or which code sits inside it. Those are `gap` (F8). The source gate and shadow test for the import are supplied in `04_links_and_distribution.md` and the ledger: the interleaver is imported from public coding theory with provenance, and it explains the gap (bursts become random errors), so the import is legitimate (Fig 6 :12-13: source gate, shadow test).

**Refuter.** An equal-redundancy reordering of symbols that leaves the corrected burst length unchanged on a measured burst channel. Then arrangement is not the substance for this quantity and F3 fails.

### F4  -  Characterise the habitat before picking the code; channel drift is a channel failure (triangulated)

Fig 11 :44: *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."* Fig 11 :52: *"And contact cascades."* Fig 10 :24: *"the ground does not decay, the channel does"*.

Reading. The residual is the undetected error at the receiver. Enumerate the habitat by contact, not by field: the physical medium (scratch, fading, lightning), the framing (symbol size, block length), the scheduler (which packets are adjacent in time), the decoder (erasure marking), feedback and retransmission (which changes what the channel *is* for the next codeword), and the adversary if present. Second-order effects matter: an interleaver chosen for one burst length changes latency, which changes the retransmission loop, which changes the effective channel. That is the DDT cascade pattern (Fig 11 :52-54).

The world literature corroborates that the two-state channel model was built *from* error traces, not from a code: Gilbert (1960) derived transition parameters from a success/failure sequence (world source, read 2026-11-23). Order: channel first, code second.

**Refuter.** A code chosen without any channel measurement that is optimal across a declared family of channels including both memoryless and two-state. Then habitat enumeration did not decide anything.

### F5  -  "Best" is a verdict the ground must settle, not a rank inside a frame (triangulated)

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."* Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

Reading. "Best protect" has no answer until an anchor is named: block error rate on a specified channel at a specified rate, latency and complexity. The anchor must not move when a code is praised. Code reputation, citation count, and "everyone uses it" are frames, not the ground: Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* The effective-sample-size correction under correlated observations (Fig 2 :44) is the same arithmetic read as a warning, and it applies twice: to correlated bits and to correlated expert opinions.

Mode: `general` for the anchor rule, `specified` for its application here. No measurement in this folder, so nothing is `grounded`.

**Refuter.** A published result in which one code dominates on a declared metric across the full declared channel family, measured by an instrument other parties can reproduce. Then "best" is settled for that family and this finding narrows to "best is family-relative."

### F6  -  Random and burst protection are isomers: same redundancy, different bond (triangulated for the definition, `specified` for the application)

Fig 12 :92: *"Symmetry is what decides whether an arrangement is a new thing."* Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* Fig 12 :41: *"same two atoms, three substances"*.

Reading. At equal redundancy n−k, a code with symbols laid out consecutively and the same symbols interleaved are different substances. The ingredient list (n, k, distance, redundancy) is identical; the bond (sequence, `→`) differs. That is why a raw BER plot, which records the ingredients, cannot tell them apart. Details and falsifier in `06_isomers_and_order.md`.

**Refuter.** The two arrangements produce the same block-error curve on a channel whose errors are provably correlated. Then they are not isomers in behaviour and F6 fails as applied.

### F7  -  The acceptance test is a bargain in two currencies that do not add (single-source for the figure, corroborated by the engineering trade-off)

Fig 5 :42: *"The acceptance test is a bargain, not a threshold."* Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* Fig 12 :126: *"A composition costs in two currencies, and they do not add."*

Reading. A burst strategy is worth having when its stated cost (redundancy, interleaver memory, latency) plus what remains unexplained after it (residual burst failures) costs less than the unencoded or random-error-coded baseline. The world source records the price concretely: block interleavers buy burst length at the cost that *"these factors give rise to two drawbacks, one is the latency and other is the storage (fairly large amount of memory)"*, while cross interleavers halve both. Bits price the description; actions price finding out whether it holds under a real channel. Summing them into one "score" is the error Fig 12 names.

**Refuter.** A strategy that reduces block error rate to the same level at lower redundancy, lower latency and lower memory under one declared metric, and the improvement survives measurement on two independent channels. Then the trade-off is not binding for this case.

### F8  -  "Which single code is best?" is a `gap` after a genuine re-census (unreachable is a verdict)

Fig 9 :32: *"you get a kind of thing, never the answer itself"*. Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and :135 *"It cannot say which primitive is missing, because naming it would mean already holding it."*

Re-census performed. Domains D1 to D4 were re-examined for any line that would name a code (Reed-Solomon, Fire, LDPC, turbo, convolutional). None does. What the figures license is the *shape* of a strategy: break the correlation (arrangement), operate at the scale where the burst is one symbol (grouping), mark uncertain positions as erasures, and settle with a measured curve. They cannot select a member. X1 has no nameable anchor, so it is not a domain yet. Verdict: **gap**, stated plainly. This is not silence; it is the honest stop.

**Refuter.** A figure line that, after re-census, predicts a unique code for a specified channel family. Until one is quoted verbatim, any named winner is the searcher's own contribution and must be recorded as such.

---

## 5. Pre-registered refuter (written before the conclusion)

Required before outreach: Seat Map :287 *"a falsifier written before the run is a design instrument, not only an honesty device."*

The strategy-shape claim is refuted if any of the following holds:

1. Bursts are shown to be statistically independent at the decision scale on a measured channel, so there is no shared pool to break.
2. An equal-redundancy reordering of symbols fails to change corrected burst length on that channel (arrangement is not the substance for D2).
3. A single code family is measured to be optimal across both memoryless and correlated channels on one declared anchor, with no arrangement change (no split required).
4. Expert agreement about the claim comes from a shared evidence pool and is offered as corroboration, rather than each reader ranging against a BER curve separately. This refutes the *verification* claim, not the coding claim.
5. The cost of the arrangement (latency, memory, rate loss) exceeds the residual it removes under a declared budget, i.e. the MDL bargain fails.

If any fires, retract the affected finding and keep the rest. Until a channel measurement is run, nothing here is labelled `grounded`.

---

## 6. Recommendation

1. Lead with F1 and F2: correlated errors are a shared-source collapse and a union compound, so the problem must be split before a code is chosen.
2. Give the shape, not a name (F3, F8): arrangement and scale, with the channel statistic that licenses them. Record any named code as an import with provenance, never as a figure output.
3. State the anchor before comparing codes (F5): channel family, metric, rate, latency, complexity.
4. Price both currencies (F7) and keep them separate.
5. Send the packet in `08`. Ask what would refute it. Do not pool later agreement as corroboration (Fig 2 :40).

---

## 7. Canonical usage check and retraction / confirmation log

Two sources were read after the first four sections and govern usage: the local canonical figures README (copied from the public repo) and the eight essays (all read this session). The README says the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary"* and returns *"a shape, not a name."*

| earlier move | status after canonical check |
|---|---|
| Read Fig 2's common-cause collapse onto bits | **Narrowed, not retracted.** Fig 2 governs inference structure, not physics. The two-state channel model (world source) supplies the instance. F1 now states both. |
| "Interleaving is figure-derived" (draft phrase, not in this file) | **Retracted to import.** Fig 6 says import adds an atom; the interleaver is imported from public coding theory with source gate and shadow test. The figures derive the *shape* (arrangement), not the device. Corrected in F3. |
| "Best code" treated as answerable (draft framing) | **Retracted.** X1 has no anchor. F8 records `gap`. |
| Treating raw BER as the residual | **Retracted.** Fig 1 :19, :22 require per-slot residual; pooled BER is a saturated metric (Fig 10 :26). Corrected in F1. |
| Fig 11 :40 applied to code choice (draft strain) | **Retracted and re-censused.** It governs capability and contact in D4, not code choice in D2. No strain remains. |
| Fig 8 :32 the rule that no search, however long, adds an atom applied to code tuning | **Confirmed.** Tuning inside a family cannot change the family. |
| Two-currency pricing | **Confirmed** by Fig 12 :125-130 and the interleaver latency/memory discussion in the world source. |
| Simulated status | **Confirmed** by the Recursive Self-Improvement Trap essay, read directly this session. |

Strains after re-census: **none hidden**. Two were named and resolved above (Fig 2 analogy, Fig 11 scope). One remains open as a `gap`, not a strain: which code, if any, is uniquely best. Treating that gap as a strain would force a figure line to name a member, which the README forbids.

**Updated verdict.** The shape survives: correlation is a shared-source structure; the problem bundles and must be split; arrangement, not volume of redundancy, is the licensed lever; the anchor is a measured channel curve; and a unique best code is unreachable from the figures. What does not survive is any claim that the framework names a winning code, any pooled BER as the residual, and any reading of Fig 11 as a coding theorem.
