# The Tether's answer: coding strategies for correlated errors

**Mode: `specified` on the shape claims, `general` on the cited laws, `gap` on the identity of a unique best code. Not `grounded`.** This is a simulated derivation checked for internal consistency against the figures (`05_what_shape_means.md` §6), not a ground reading.

## 1. The residual it answers

A decoder that assumes independent symbol errors treats each corrupted position as a separate witness. On a correlated channel, positions in a burst are readouts of one physical event. Counting them separately is aggregating a live per-slot signal into a global error rate (Fig 1 :19, :22). The question asks what coding strategy protects the message once that assumption fails.

The residual is a **union compound**: channel characterisation, redundancy arrangement, erasure handling and cost, bundled into one question (Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*). It must be split before it is searched.

## 2. The shape, per domain

**D1, channel and noise.** Correlated errors are a common-cause collapse (Fig 2 :20-21: *"so the agreement is the pool talking, not two frames confirming each other"*). The residual is indexed per position, not pooled. Anchor: a measured error sequence, from which a two-state good/bad model can be fitted. Mode `specified`. Refuter: error indicators independent at the decision scale after conditioning on the physical state.

**D2, code and decoder.** The decisive lever is arrangement, not volume of redundancy (Fig 12 :94: *"The arrangement is the substance."* Fig 13 :115: *"The set is closed. The arrangements are not. That gap is why import exists."*). Random and burst protection are isomers: same atoms, different ordered bond, decisive behavioural difference invisible in the ingredient formula (Fig 12 :117). The route: group bits into symbols so one burst is one symbol error; interleave so one physical burst becomes separated correctable events; mark uncertain positions as erasures. Mode `specified`, with the interleaver recorded as a provenanced import. Refuter: an equal-redundancy reordering that leaves corrected burst length unchanged on a measured channel.

**D3, cost and constraint.** A burst strategy is worth having when its stated cost plus leftover burst failures costs less than the baseline (Fig 5 :42: *"The acceptance test is a bargain, not a threshold."*). Rate, memory and latency are two currencies that do not add (Fig 12 :126). Budget scores filter what gets tried; they never decide the winner (Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*). Mode `general` for the rule, `specified` for the application.

**D4, verification.** "Best" is a verdict the ground settles, not a rank inside a frame (Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*). Each reader ranges separately against a block-error curve. Agreement among readers who share a source is one pool talking (Fig 2 :40). Mode `general`.

**Union and gap.** Splitting is required before search (Fig 9 :5: *"Split it rather than search."*). No figure line names a code, an interleaver depth or a λ for a specified channel family. Verdict: **gap**, not silence (Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*).

## 3. What it explicitly does not say

- Not "use Reed-Solomon", "use Fire codes", "use LDPC" or "interleave by 28". Those are bindings from the coding frame, provenanced as imports, not figure outputs.
- Not "correlation just means a higher error rate". It is a different symmetry and a different anchor.
- Not "one code is best for all channels". "Best" is family- and metric-relative; without a declared channel and metric X1 is not a domain.
- Not a derivation of any code's distance bound. The figures license the shape of the strategy, not the mathematics of the code.
- Not `grounded`. No BER curve was measured.

## 4. What would settle it: the ground

A source-discriminating instrument, not a further argument. *The Hard Problem is About Source* (essay, read this session): an instrument that reads green *"cannot comment on the source"*; the spectrometer resolved it. Here the corresponding questions are:

1. **Dependence test.** Does the error sequence show dependence after conditioning on the physical state? Fit a two-state model and report the transition probabilities and a run-length distribution. A memoryless trace would fire refuter 1.
2. **Arrangement test.** On that trace, compare two equal-redundancy arrangements: consecutive symbols versus interleaved. If corrected burst length does not change, F3 fails.
3. **Cost test.** Measure rate, interleaver memory and decoding latency for the winning arrangement. If their total exceeds the residual burst failures removed under the declared budget, the bargain fails.
4. **Dominance test.** Does one code family dominate across both memoryless and correlated channels on one declared anchor with no arrangement change? If yes, the split requirement narrows.

## 5. The honest stop

**Reached the shape, unreached the member.** The figures return a kind of thing: break the shared pool, arrange at the symbol scale, mark erasures, price against a measured channel. They return no name. The public coding literature supplies names with provenance, and that literature is not the framework's authority. The answer stops where the instruments stop: without a measured channel family there is no "best," only a shape any best answer must have. *"indiscernibility is not identity."* (How Intelligence Actually Works, read this session): two arrangements indistinguishable on a raw BER plot are still different substances.

## 6. One-paragraph version for outreach

> Correlated errors are not a larger number of independent errors. They are several readings of one physical event, so treating each corrupted bit as a separate witness is the same mistake as counting a shared evidence pool as many independent frames. The figure-grounded answer is a shape, not a code name: split the bundle before searching; break the shared pool by rearranging symbols so a burst becomes separate correctable events; group at the scale where the burst is already one symbol; mark uncertain positions as erasures; and price rate, memory and latency separately against a declared channel. Random-error and burst protection then stand as isomers, same redundancy arranged differently, with the difference invisible in a raw bit-error plot and decisive in behaviour. No figure selects a winning code, and "best" has no verdict until a measured block-error curve on a specified channel settles it. What is offered is the shape, refuters written in advance, and the instrument that would close it.
