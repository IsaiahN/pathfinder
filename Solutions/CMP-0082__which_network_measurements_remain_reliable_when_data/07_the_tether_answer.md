# The Tether's answer: which network measurements remain reliable under incomplete, uneven, or biased data?

**Mode: `specified` on the shape, `general` on the refusal to rank named measures, not `grounded`.** Simulated derivation checked for internal consistency against the figures (`05_what_shape_means.md` §6), not a ground reading. No network was measured.

## 1. The residual it answers

The question asks for a list of reliable network measurements. The residual is the gap between a measurement on the observed graph and that measurement on the true graph, per slot. Slots are nodes, edges, or local regions. The collection channel is incomplete, unevenly sampled, or biased by a platform. The question as posed omits the channel and the ground from the object of the claim, so the bound `reliable(m)` cannot be satisfied. It must be rewritten as `reliable(m, C, G)`.

This is a **union compound**, not one hard question. `Fig 9 :57`: "a case in two conditions is not a harder case of either". Incomplete, uneven, and biased overlap, and the intersections are categorically different from the single conditions. The answer therefore cannot be a single lever or a single ranking.

## 2. The shape

1. **Reliability is a property of measure, channel, and ground, not of the measure alone.** `Fig 11 :39`: "capability is a property of agent-and-habitat, never of the agent alone". Improving a statistic while the channel and ground are untouched does not change contact, and `Fig 11 :40` says an improvement that does not change contact changes nothing. `Fig 1 :23`: "The ground enters as the only metric."
2. **Report the residual per slot.** `Fig 1 :19`: "The residual is indexed by object slot, not aggregated." `Fig 1 :22`: "Aggregating across slots is how a live signal disappears into an average." Symbols table: "R is measured per slot, never as a single global number." `Fig 1 :13`: "a global R near zero with one live slot residual is a legal state". A global statistic can be published, but it cannot certify that individual slots are right.
3. **A platform-published metric is a frame, not an anchor.** `Fig 1 :27`: "They are frame-internal. A frame cannot score itself with a quantity it also produces." `Fig 2 :29-30`: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." A metric whose value follows the platform's ranking rule fails that test. `Fig 2 :47`: "A ground listed as one of the parties has already become a frame." The metric may be used once ranged against an independent ground; it may not decide the result.
4. **Run the three defects as a union with separate loops.** `Fig 9 :54`: "And when the split lands on a union rather than a partition, unbundle before you search again." Each condition and each intersection needs its own per-slot check against the ground. One correction cannot clear the intersections.
5. **Measure the round-trip gap rather than assuming it away.** `Fig 4 :27`: "The transform between scales loses information, and that is the point." `Fig 4 :30`: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." `Fig 10 :24`: "the ground does not decay, the channel does". The channel failures named at `Fig 10 :25-26`, "stale percepts, dropped transients, saturated metrics, pooled readings", are the question's three defects plus staleness.
6. **Independence is the witness, not agreement.** `Fig 2 :31-32`: "Independence, between two frames, is how little they draw on the same evidence." `Fig 2 :35`: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Two pipelines reading the same platform data are one witness wearing two names.
7. **The protocol is a sequence, not a checklist.** From `06`: perception first, then per-slot vocabulary, then the objective, then planning, then carry. `Fig 3 :19`: "Optimising a link that already works cannot rescue one that does not." A better statistic cannot repair a slot that was never perceived.

## 3. What it explicitly does not say

- Not a ranked list of named measures. "Degree is reliable, betweenness is not" is a name, not a shape. `Fig 9 :32`: "you get a kind of thing, never the answer itself".
- Not that all global statistics are wrong. The claim is that a global aggregate cannot certify slot-level reliability, since a global residual near zero with a live slot is a legal state.
- Not that platform data must be discarded. The protocol refuses its standing as an anchor; it does not delete the record (`Fig 6 :42`: "What is recorded only grows. What is reachable is derived, and it can fall.").
- Not that missing data are harmless when missing at random. The world literature cited in `04` says the opposite, and Fig 10 names dropped transients as a channel failure.
- Not `grounded`. No enumeration, no per-slot residuals, no measured `R_T`.
- Not a claim that any particular sampling correction imports cleanly. An import needs a source gate and a shadow test (`Fig 6 :12-13`).

## 4. What would settle it, the ground

An independently enumerated network `G`, with the same slots enumerated under each corrupted channel `C`, and per-slot residuals for each named measure. That is the instrument that discriminates sources. From *The Hard Problem is About Source*: an instrument that reads green "cannot comment on the source"; the case "was proven wrong not by argument, but by the arrival of a better instrument."

Concretely:

1. **Enumeration.** Acquire a ground-truth network that does not update with the platform whose data are being checked. `Fig 2 :33`: "The anchor must not update."
2. **Per-slot residuals.** For each measure, compute `R_s` under incomplete, uneven, and biased collection, and under their intersections. Report the distribution over slots, not only its mean.
3. **Round trip.** Measure `R_T` for each measure and channel. Treat a claimed zero as needing proof.
4. **Independence.** Repeat with a second channel that does not draw on the first channel's evidence. `Fig 2 :42`: "Buy independence in proportion to the cost of being wrong."
5. **Refuters.** Run the four refuters in `08` before publishing any ranking. A failure is more useful than an endorsement.

Standing refuters from `01` §3: a measure whose per-slot residual stays near zero under all three defects with two low-overlap channels; an aggregate that moves materially whenever any live slot moves; a platform metric invariant to its own ranking rule; one correction that clears all conditions and intersections; a measured zero `R_T` across a lossy channel. Any one of these narrows or withdraws the shape.

## 5. The honest stop

**Unreached, not unreachable.** The figures README says the framework "stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest." Without an independently enumerated `G`, domain 1 has no nameable anchor. That is a gap in the instrument, not a proof that no measure is reliable. `Fig 8 :39`: "So a search that finds nothing is never a proof of absence." Symbols table: "what cannot be perceived yet is residual and simply cannot be read."

The shape stops here: constraints, refuters, and the instrument that would close it. The ranking stays open until the ground pays for it.

## 6. One-paragraph version for outreach

> The Tether does not produce a list of reliable network measures, because the question as asked leaves out two terms: the channel that collected the data and an independent ground to range them against. Reliability is a property of the measure together with those two, not of the measure alone. What the figures give is a shape any reliable measurement must have. Report the error per node or edge, since a global average can look right while individual slots are badly wrong. Treat a platform-published metric as a frame, not an anchor, because its value follows the platform's own ranking rule. Treat incomplete, uneven, and biased data as overlapping conditions, not severities of one condition, and give each intersection its own check. Measure the gap between the observed and the true value instead of assuming it is zero, and count agreement only across channels that do not share an evidence pool. The ranking of named measures stays open until someone enumerates a ground network and measures those per-slot residuals. What this offers is the shape, the refuters written in advance, and the instrument that would close it. It cannot settle the question it reports on.
