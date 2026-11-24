# Expert verification packet: network measurement under incomplete, uneven, or biased data

**What this is:** a claim in a form a network measurement or data quality researcher can check. Mode, derivation, and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the shape, `general` on the refusal to rank named measures, not `grounded`.** No network was measured.

**Status:** simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.

## 1. The claim, in one paragraph

Reliability under damaged network data is not a property of a named measure alone. It is a property of the measure, the collection channel, and an independent ground. Four things follow and are checkable separately. First, a global network statistic cannot certify that individual slots are correct, because a global residual near zero is a legal state with a live slot residual underneath it. Second, a metric published by the platform that collected the data scores itself and cannot serve as its own anchor. Third, incomplete, uneven, and biased collection are overlapping conditions of one residual, not three severities of one condition, so no single lever clears their intersections. Fourth, the gap between a value on the observed graph and the value on the true graph must be measured as a round trip, not assumed to be zero. The framework returns this shape; it does not rank named measures, and the ranking is open until a ground network is enumerated.

## 2. Three checkable sub-claims

### C1 - Global aggregation cannot certify slot-level correctness

- **Statement:** per-slot residuals are the honest signal. A whole-graph average near a reference value is compatible with materially wrong nodes underneath it.
- **Source, verbatim:** `Fig 1 :19` "The residual is indexed by object slot, not aggregated." `Fig 1 :22` "Aggregating across slots is how a live signal disappears into an average." `Fig 1 :13` "a global R near zero with one live slot residual is a legal state". Symbols table: "R is measured per slot, never as a single global number."
- **What to check:** take a network you know, drop or distort a small set of nodes, and see whether a global statistic moved while the affected nodes changed materially. Try the same with a platform-like observation probability.
- **Refuter:** show a global aggregate that moves materially whenever any single live slot moves materially, across incomplete, uneven, and biased collection, against an independently enumerated ground. Then C1 fails.

### C2 - A platform-published metric is a frame, not an anchor

- **Statement:** a metric whose value depends on the platform's own ranking rule cannot settle whether it is correct. It may be used as one frame ranged against an independent ground, but it cannot decide the result.
- **Source, verbatim:** `Fig 1 :27` "They are frame-internal. A frame cannot score itself with a quantity it also produces." `Fig 2 :29-30` "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." `Fig 2 :47` "A ground listed as one of the parties has already become a frame." `Fig 2 :45` "Frames range against the ground. They do not negotiate with it."
- **What to check:** does the published ranking change when the platform's ranking rule changes while the underlying ties do not? If yes, the metric is frame-internal. Does a direct survey or independent enumeration move it? If yes, it was ranged against a ground.
- **Refuter:** exhibit a platform-published metric invariant to the platform's ranking rule, verified against an independent enumeration under all three defects. Then C2 fails.

### C3 - The three defects are a union, and the observed-to-true gap must be measured

- **Statement:** incomplete, uneven, and biased collection overlap; a correction for one leaves the intersections standing. The gap between the observed graph and the true graph carries information that a single correction does not remove, and it must be measured.
- **Source, verbatim:** `Fig 9 :57` "a case in two conditions is not a harder case of either". `Fig 9 :55` "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." `Fig 4 :30` "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." `Fig 10 :24` "the ground does not decay, the channel does" and `Fig 10 :25-26` "stale percepts, dropped transients, saturated metrics, pooled readings".
- **What to check:** apply a missing-edge correction to incomplete data and see whether it also fixes a platform whose inclusion probability is tied to degree. Apply an inverse-probability correction and see whether it recovers a node that was never perceived. Measure the value on an enumerated ground and compare it with the value after correction.
- **Refuter:** show one correction that drives the per-slot residual to zero for all three conditions and their intersections with an independently enumerated ground, and show a measured zero round-trip gap across a demonstrably lossy channel. Then C3 fails.

## 3. What is explicitly not claimed

- Not a ranked list of reliable measures. No claim that degree, betweenness, clustering, or any other named measure is reliable or unreliable without a ground reading.
- Not that global statistics are always wrong. Only that they cannot certify slot-level correctness.
- Not that biased platform data must be deleted. The protocol refuses its standing as an anchor; it does not delete the record.
- Not that missingness is harmless when missing at random. The channel can still decay.
- Not `grounded`. There is no enumeration, no per-slot residual table, and no measured round-trip gap in this packet.
- Not corroborated by an independent frame. Every seat here draws on the same evidence pool.

## 4. Provenance

- Question: `complexity science.txt` line 101, section 9, Modeling, measurement, and reproducibility.
- Figure text extracted verbatim from Isaiah's 13 figures plus the Operators and Symbols tables: `FRAMEWORK/reference/03-FIGURES_TEXT.md`.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`.
- Metalaw reading: `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`.
- Loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`.
- Essays re-opened 2026-11-22: Library of Babel, The Hard Problem is About Source, The Recursive Self-Improvement Trap (links in `05_what_shape_means.md`).
- World sources read 2026-11-22: five arXiv papers and the design-effect reference, listed with quotes in `10_source_ledger.csv`.
- This packet compiled 2026-11-22.

## 5. What would settle it

An independently enumerated network that does not update with the platform, with per-slot residuals for each named measure under each defect and intersection, a measured round-trip gap, and a second channel that does not share the first channel's evidence. From *The Hard Problem is About Source*, an instrument that reads green "cannot comment on the source"; the case was resolved "not by argument, but by the arrival of a better instrument."

The four pre-registered refuters are in `01` §3 and `07` §4. Any one that fires narrows or withdraws the corresponding sub-claim. A failure is more useful than an endorsement.

## 6. What an expert can check in twenty minutes

1. Read `Fig 1 :13`, :19, :22 and the Symbols table line on `R`. Ask whether your own reporting practice would have caught a live slot under a near-zero global.
2. Read `Fig 2 :29-30`, :45, :47. Name one platform metric you use and say whether its value follows the platform's ranking rule.
3. Read `Fig 9 :55`, :57 and `Fig 4 :30`. Try one correction you know against a case where two conditions hold at once, and say what residual remains.
4. Send the refutation, or the enumeration that settles it. A failure is more useful than an endorsement.

**Status:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
