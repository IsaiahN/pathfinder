# Second-seat audit of the INF-0022 solution

**Mode: `specified` on the shape claims, `general` on the cited laws, `gap` on the member.**

**Honest standing of this document.** This is a simulated second seat. It reads the same evidence pool as the primary derivation: the same verbatim figure text, the same essays, the same public coding pages, the same folder files. Fig 2 :40 says *"agreement about the world is worthless when the agreeing frames share an evidence pool"* and Fig 2 :35 says *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* A second seat sharing the evidence pool is a mirror with a different name. What follows is a check of **internal consistency only. It is not corroboration, not a second witness and not a ground reading.** No channel was measured. This audit cannot settle the question it audits.

The material audited is `01_figure_grounded_audit.md`, read together with `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, `08_expert_verification_packet.md`, `09_watson_answer.md` and `10_source_ledger.csv`.

## Independent domain census

I redid the census from the residual line alone, before using the primary's conclusions, in the WATSON order: R by arity, symmetry and scale; one line per domain with actors / currency / anchor; partition or union; order by dependency.

- **R.** The residual is the misread error signal at the receiver. Arity: (error pattern, channel state), with a hidden state that makes positions dependent; a two-state Markov model is the minimal known instance. Symmetry: independent errors are permutation-invariant; a burst is defined by consecutive components, so the symmetry is broken and position carries information. Scale: bit, symbol, codeword, interleaved block, and the scale of counting decides the answer. Union compound, not one question (Fig 9 :55).
- **D1 Channel.** Actors: medium, noise source, channel state, error trace. Currency: transition probabilities and run lengths. Anchor: measured error sequence. Admitted.
- **D2 Code.** Actors: codewords, symbols, parity, interleaver. Currency: redundancy ℓ, distance, rate. Anchor: block error rate on D1's trace. Admitted.
- **D3 Budget.** Actors: bandwidth, memory, latency. Currency: rate, interleaver memory, decode delay. Anchor: declared constraint. Admitted.
- **D4 Verification.** Actors: outside readers. Currency: residual and correction. Anchor: ground, never agreement. Independence zero in this simulated run.
- **X1 best code in the abstract.** No anchor, no metric, no channel. Not a domain.

Order by dependency: perceive channel, get vocabulary for dependence, state the objective, choose the code, carry the result (Fig 3). Refuse the unanchored "best" before trying to answer it (Formula step 2). Describe the residual before naming a frame (Fig 9 :27-28).

My census matches the primary's four domains and the X1 exclusion. I started from Fig 9's union/partition rule and Fig 12's symmetry test where the primary started from Fig 1's per-slot residual and Fig 2's common-cause collapse. Different starting figures, same boundaries. Low overlap within the framework, so the agreement is weak but not circular. It is still one evidence pool.

## Comparison with primary

| primary finding | my independent check | agreement |
|---|---|---|
| F1 correlated errors as shared-source collapse | Fig 2 :20-21 governs inference structure, not physics; the two-state model supplies the instance. The primary now states both, so the analogy is declared | agree, with the narrowing |
| F2 union compound, split before search | Fig 9 :5 and the engineering split (RS burst vs random) both hold | agree |
| F3 arrangement is the decisive lever | Fig 12 :94, Fig 13 :115, Fig 6 :23, Fig 8 :32 plus the λℓ theorem. Import provenance is recorded. The primary no longer calls interleaving figure-derived | agree |
| F4 enumerate the habitat before choosing | Fig 11 :44, :52 and Fig 10 :24; Gilbert derived parameters from traces, so channel first | agree |
| F5 best is a ground verdict | Fig 2 :29, Fig 3 :27; no measurement here, so `specified` not `grounded` | agree |
| F6 isomers | Fig 12 :117 defines same atoms / different bond / different substance, and the engineering pages supply the behavioural difference | agree, `specified` for the application |
| F7 two currencies | Fig 12 :126, Fig 5 :42; the interleaver cost is documented | agree |
| F8 best code is a gap | X1 has no anchor; Fig 9 :32 and Fig 13 :134 license the plain `gap` verdict | agree |
| Retraction of Fig 11 applied to code choice | Fig 11 :40 governs capability and contact, not code choice; the re-census is correct | agree |

No disagreement with the primary. Because we share an evidence pool, that agreement is expected and carries no independent weight.

## Verbatim figure lines checked

I reopened `FRAMEWORK/reference/03-FIGURES_TEXT.md` and checked these lines character by character before relying on them. Each is a primary quote; none came from a summary.

- Fig 1 :19 "The residual is indexed by object slot, not aggregated." checked.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." checked.
- Fig 2 :20-21 "so the agreement is the pool talking, not two frames confirming each other" checked. It is the tail of a longer line; the quotation is a true substring.
- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." checked. The full SVG line continues with "A measurement, an experiment, a counter, a market, a patient outcome."
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" checked. The leading clause is included where the quote is presented as the whole line.
- Fig 5 :42 "The acceptance test is a bargain, not a threshold." checked.
- Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." checked.
- Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." checked.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." checked.
- Fig 9 :5 "Split it rather than search." checked as the tail of a longer line; a true substring.
- Fig 9 :32 "you get a kind of thing, never the answer itself" checked.
- Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." checked.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." checked.
- Fig 10 :26 "stale percepts, dropped transients, saturated metrics, pooled readings" checked.
- Fig 11 :44 "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering." checked.
- Fig 12 :94 "The arrangement is the substance." checked.
- Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." checked.
- Fig 12 :126 "A composition costs in two currencies, and they do not add." checked.
- Fig 13 :115 "The set is closed. The arrangements are not. That gap is why import exists." checked.
- Fig 13 :134 "Unreachable is a verdict here, not a silence," checked with the comma, as the line continues.

All checked lines are present verbatim. No quote drifted.

## Round trip gap R_T

The Symbols table defines R_T as gap(x, (T_E composed with T_A)(x)), measuring what the coarser description cannot hold. Fig 4 :30 requires it to be measured rather than assumed. I ran the round trip on the condensation this folder actually uses.

1. **Sent up (x):** the verbatim figure set, chiefly Fig 1 :19, :22 (per-slot residual), Fig 2 :20-21 (shared source), Fig 12 :94, :117, :126 (bond, isomer, two currencies), Fig 9 :5, :32 (split, shape not name).
2. **Abstraction (T_A):** the shorthand carried in `07`: correlated errors are a shared pool; split before choosing; arrange at the symbol scale; price in two currencies; no unique best code.
3. **Concretisation (T_E):** a concrete engineering claim about Reed-Solomon symbol grouping, λ-way interleaving, erasure marking and CD CIRC.

**R_T is nonzero.** Four things the shorthand holds do not survive the trip back down:

- the value of λ and the choice of code family (the figures give a slot, not a filler);
- the actual channel statistic that establishes dependence (the figures give the shape of the instrument, not its reading);
- the exact latency and memory prices (the figures name two currencies but do not price them);
- the identity of the physical shared source (scratch, fade, lightning, adversary), which must be enumerated from the habitat, not derived.

Conversely, one thing survives cleanly: a shared error source must be broken by arrangement, and the arrangement is invisible in the ingredient formula. That is the residue worth sending. R_T was **not** measured numerically, because no ground reading exists; it is recorded qualitatively as the enumerated set of dropped constraints. Treating "the formula is the condensed version of the metalaws" as identity would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names. The honest form is a lossy condensation with a recorded gap.

## Strains and re-census

- **Fig 2 applied to bits.** Initially a strain (Fig 2 is about frames). Re-census: it governs inference structure, and the two-state channel model supplies the physical instance. The primary states both. Strain dissolved by declaring the analogy, not by hiding it.
- **Fig 11 :40 applied to code choice.** Initially a strain. Re-census: Fig 11 :40 governs capability and contact in D4, not code design in D2. Removed.
- **Fig 12 catalyst and cycle readings.** Analogues, not figure-derived laws. The primary labels them `general` for the definition and `specified` with falsifiers for the application. Not strained, but low weight.
- **The `gap` on the best code.** Not a strain. Forcing a figure line to name a member would violate Fig 9 :32 and the canonical README's "shape, not a name".
- **Wikipedia pages as witnesses.** They share a host, so they are lower-overlap than distinct journals but not fully independent. The ledger declares this. Their agreement with the figure verdict is corroboration of the engineering instance, not of the metatheory.
- **After re-census: no hidden strains.** Two were named and dissolved; one `gap` stands.

## Verdict on the solution

**On internal consistency: the solution passes.** The files are consistent with each other and with the verbatim figure text. The retraction table is applied (interleaving is an import, not a figure output; "best code" is a gap; pooled BER is not the residual; Fig 11 is not a coding theorem). `09_watson_answer.md` carries the full WATSON shape with cost if wrong, undoable and reversed by. `10_source_ledger.csv` lists every source actually read, with the blocked portal recorded as blocked and the unread 403 pages excluded. This file records the independent check.

**On corroboration: none.** This second seat shares the primary's evidence pool. By Fig 2 :40 its agreement is the pool talking and by Fig 2 :35 a mirror cannot correct you. What this audit establishes is that the folder is internally consistent, not that the coding claim is true.

**On the claim: `specified`, ungrounded, candidate.** The shape survives (shared-source collapse, union split, arrangement as the licensed lever, isomer reading, two currencies, no last word on the member). The specific bindings do not count as figure outputs (Reed-Solomon, interleaver depth, λ, CIRC are imports with provenance). Nothing is settled: a dependence test, an equal-redundancy arrangement comparison, a cost measurement or a dominance result would be required to move any part of it to `grounded`. Prestige or agreement is not such a measurement.

**Recommendation.** Send `08_expert_verification_packet.md` with its mode and refuters attached, ask what channel statistic would refute the shape, record that answer before offering links, and do not pool later agreement as corroboration. Keep the shape claim and the refuter in front of the sources.
