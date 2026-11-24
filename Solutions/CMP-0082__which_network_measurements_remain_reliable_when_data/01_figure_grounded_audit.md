# Figure-grounded audit: Which network measurements remain reliable when data are incomplete, sampled unevenly, or collected through biased platforms?

**Mode:** `specified` on the structural claims, `general` on the refusal to rank named measures, not `grounded`. No measurement of an actual network was taken.

**Status: simulated derivation, not a ground reading.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." *The Recursive Self-Improvement Trap* calls LLM output "simulacra" and says "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Figure source.** All figure quotes are from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`. Quotes were checked character by character before use. The canonical usage rule in `FRAMEWORK/reference/FIGURES_README_canonical.md` and the metalaw reading in `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` were read after the first draft and govern §5.

---

## 0. The claim under audit

The question is: which network measurements remain reliable when data are incomplete, sampled unevenly, or collected through biased platforms?

Stated in effect terms:

- Let `G` be the true network, the ground. Let `C` be a collection channel that produces the observed graph `Ĝ = C(G)`. `C` is one of three defects, or a compound of them: incomplete (nodes or edges dropped), unevenly sampled (observation probability varies by node or region), biased platform (observation probability is tied to node attributes or to the platform's own ranking rule).
- Let `m` be a network measurement, indexed per slot `s` (a node, an edge, a local region). Define the residual `R_s(m; C, G) = |m_s(Ĝ) − m_s(G)|`.
- "Reliable" means `R_s` stays small for the slots that matter, under `C`, against an independent `G`.

The question as posed treats reliability as a property of `m` alone. That is the shape the question searches for, and per `THE_FORMULA.md` "Direction" such a shape is held as a preference, not a term: "a frame searching for an answer of a given SHAPE holds that shape as a PREFERENCE, not a term. Unbound, predicting nothing, no residual - so nothing above can see it." So before deriving, write the sought-for shape down as an ordinary term and bind it:

```
reliable(m) = for all defects C, max_s |m_s(C(G)) − m_s(G)| is small, with G enumerated independently.
```

Binding it makes it refusable. The derivation below tests that bound and, finding that `G` and `C` cannot be removed from it, rewrites it as `reliable(m, C, G)`. The answer shape returned is not a ranked list of measures. It is the set of conditions under which a ranking could be honestly produced.

What an answer would look like if the question were well formed as asked: an ordered list, "degree is reliable, betweenness is not," with thresholds. That list is the preference this derivation refuses.

---

## 1. Figure census

Describe `R` by arity, symmetry, scale, then one line per domain with actors, currency, and anchor. A domain without a nameable anchor is not yet a domain.

**R by arity, symmetry, scale.**

- Arity: `R_s` is a round-trip gap across the transform `C` between two frames, the true-network frame and the observed-data frame. Per slot it is arity one with `C` and `G` as parameters; globally it is arity two.
- Symmetry: under random incompleteness, slots are exchangeable, so swap symmetry holds. Under uneven sampling and a biased platform it fails: some slots are systematically over-observed. Any measure that weights observed slots equally silently assumes a symmetry the channel broke.
- Scale: the defects act on the channel, so the honest scale of the residual is per slot. A whole-graph average is a different object at a different scale, not a better version of the same reading.

**Domains.**

| domain | actors | currency | anchor | nameable? |
|---|---|---|---|---|
| 1. Network measurement | nodes, edges, measures (degree, betweenness, clustering, path length, density, modularity) | graph statistics | the true network `G` | only if independently enumerated. Otherwise the anchor is owed and this is a gap, not a domain. |
| 2. Collection channel | sampler, platform, sensors, respondents | observed edges | none of its own | no. The platform's published metric updates with its own rule, so by `Fig 2 :29-30` it is a frame, not an anchor. |
| 3. Verification / ground | independent enumerators, a second channel, direct survey | per-slot residuals | a ground that does not move when frames change | yes in principle: an independently enumerated network. |

**Partition or union.** This is a **union**, not a partition or one hard question. Incomplete, uneven, and biased overlap. A biased platform is usually also uneven; incompleteness can be missing-not-at-random. `Fig 9 :57`: "a case in two conditions is not a harder case of either". A single lever clears the region where only one condition holds and leaves the intersections standing. So no single measure can be declared reliable across all three. Each intersection needs its own loop.

**Order by dependency (`Fig 3`).** Perception: can the slot be observed at all. Vocabulary: do we have per-slot terms, or only a global aggregate. Objective: what counts as progress, namely a small per-slot residual against an independent ground. Planning: choose a measure and a sampling design. Learn and carry: verify, then carry to the next network. A break at perception cannot be rescued by better planning. `Fig 3 :19`: "Optimising a link that already works cannot rescue one that does not." `Fig 3 :22`: "A step whose input never arrives cannot be diagnosed, only its predecessor can."

| figure | bearing on this residual | verdict |
|---|---|---|
| **1 The Agent** | frame-internal quantities disqualified; residual per slot, never aggregated | governs the indexing of error, not the ranking of named measures |
| **2 The Ground** | anchor must not update; independence; common-cause collapse | governs why a platform cannot anchor its own metric |
| **3 Dependency Chain** | a link with no instrument is not a link that works | governs the missing-node break, which better statistics cannot repair |
| **4 The Membrane** | round trip and its gap; lossy transform | governs the measured-versus-true gap `R_T` |
| **5 Mint Pipeline** | three guards as a product; a gate is not the ground | no new primitive is owed for a reliability claim; settlement is owed |
| **6 Closure / Reachability** | import moves the wall; instruments improved from worse instruments | a new sampling technology is an instrument extension, not a new measure name |
| **7 Room Chain** | agreement compounds, evidence does not | two channels sharing a pool cannot corroborate |
| **8 Union Surplus** | describe the residual before choosing the frame; residual first, frame second | the three defects must be described before picking a measure |
| **9 Leave / Arrive** | union versus partition; filters are not witnesses | governs the union reading and the ban on rank-by-convenience |
| **10 Ground Maintainer** | the ground does not decay, the channel does; pooled readings | names the four channel failures that match the three defects |
| **11 The Habitat** | capability is a property of agent-and-habitat | governs the refusal to assign reliability to the measure alone |
| **12 The Bond** | arrangement is the substance; isomer and functional group | governs why same nodes and edges can yield different reliability |
| **13 Minimum Viable Set** | network is a structure; meaning is decided by the measurement | governs why a corrupted structure changes what a measure means |
| **Operators table** | seven bonds, comparison, subtraction, negation | the union refusal is not a subtraction of one condition; a refusal is a negation |
| **Symbols table** | `R` is a slice and is per slot, never a single global number | governs the slot indexing and the limit of what can be perceived |
| **THE_FORMULA.md** | mode rule; direction discipline; SEARCHED / INWARD / OUTWARD | governs mode, the bound shape, and the three distinct routes |

Strained readings are named in §2 and resolved in §6, not smoothed over.

---

## 2. Findings

### F1 - Reliability is a property of measure, channel, and ground, not of the measure alone (decisive)

`Fig 11 :39`: "capability is a property of agent-and-habitat, never of the agent alone". `Fig 11 :40`: "An improvement that does not change contact changes nothing, however much it improves." `Fig 1 :23`: "The ground enters as the only metric."

Apply the same move one level down. A network measure does not contact the true network directly. It contacts `Ĝ`, which is what a channel returns. Improving the measure while leaving the channel and the ground untouched is an agent-only improvement. It does not change contact, so it changes nothing about reliability. The bound `reliable(m)` in §0 fails: `m` cannot carry the property by itself. The honest form is `reliable(m, C, G)`.

This is not a preference for a particular methodology. It is the same structural claim the figure makes for capability, applied to a measurement frame. The three domains in §1 are distinct precisely because the currency and anchor differ across them.

**Refuter:** exhibit a named measure whose per-slot residual stays near zero under two materially different collection channels, with an independently enumerated `G`, and show that the two channels are not drawing on the same evidence. If that holds, reliability is a property of the measure and F1 fails.

**Status:** `triangulated`. Low overlap between the capability claim (Fig 11, habitat/capability) and the ground-only-metric claim (Fig 1, agent/library). Both govern a quantity the other does not name.

### F2 - Aggregate measures are structurally the least able to certify reliability

`Fig 1 :19`: "The residual is indexed by object slot, not aggregated." `Fig 1 :22`: "Aggregating across slots is how a live signal disappears into an average." `Fig 1 :13`: "a global R near zero with one live slot residual is a legal state". Symbols table: "R is measured per slot, never as a single global number."

A global network statistic (mean degree, global clustering, diameter, modularity) is an aggregate over slots. A global value near zero or near a reference is a legal state with materially wrong slots underneath it. So a global statistic can look stable under corruption while the slots that matter are badly wrong. That is not a claim that global statistics are always wrong. It is a claim that they cannot certify slot-level reliability, which is the property the question asks about.

The per-slot object is the honest signal. `Fig 1 :28`: "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."

**Refuter:** show a global aggregate whose value moves materially whenever any single live slot moves materially, across independent grounds and all three defects. Then aggregation does not hide the signal and F2 fails.

**Status:** `triangulated` across Fig 1 and the Symbols table (low overlap: one is the agent loop, the other the notation definitions).

### F3 - Platform-produced quantities are frame-internal and disqualified as self-scoring

`Fig 1 :24`: "coverage, and compression achieved". `Fig 1 :26`: "predicates minted, and credibility accrued". `Fig 1 :27`: "They are frame-internal. A frame cannot score itself with a quantity it also produces."

A centrality score published by the platform that collected the edges is a quantity the collector also produces. Its ranking rule changes what it measures. The same structure appears in `Fig 2 :34`: "If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices." And `Fig 2 :47`: "A ground listed as one of the parties has already become a frame."

`Fig 2 :29-30`: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." A platform metric changes its answer with the platform's rule, so it fails the anchor test. It can be used as one frame, ranged against an independent ground, but never as the ground. `Fig 2 :45`: "Frames range against the ground. They do not negotiate with it."

This is the named common-cause collapse, not a side objection. The platform's ranking and the measured centrality share a hidden source. `Fig 2 :18-21`: "one evidence pool / they never talk, and still agree / so the agreement is the pool talking, / not two frames confirming each other."

**Refuter:** show a platform-published metric whose value is invariant to the platform's own ranking rule, verified against an independent enumeration, across all three defects. Then it is not frame-internal and F3 fails.

**Status:** `triangulated` across Fig 1 and Fig 2 (low overlap: frame-internal quantities versus the anchor test).

### F4 - The three defects form a union, so no single lever clears them

`Fig 9 :57`: "a case in two conditions is not a harder case of either". `Fig 9 :54`: "And when the split lands on a union rather than a partition, unbundle before you search again." `Fig 9 :55-56`: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."

Incomplete, uneven, and biased are three conditions of one residual, not three severities of one condition. A method that repairs random edge loss (for example, estimating missing ties) does not repair a platform whose observation probability is tied to its own ranking. A correction for unequal inclusion probabilities does not repair a node that was never perceived at all. The intersections, such as missing-not-at-random on a biased platform, are a specific compound with its own loop, not a harder case of either.

`Fig 2 :44`: "The effective-sample-size correction for correlated observations is standard in survey statistics and meta-analysis; the collapse is the same arithmetic read as a warning." The arithmetic is known; treating the three conditions as one is the error.

**Refuter:** exhibit one correction that drives the per-slot residual to zero for all three defects and their intersections against an independent ground, with two low-overlap channels. Then the union reading is wrong and F4 fails.

**Status:** `triangulated` across Fig 9 (union/partition) and Fig 2 (effective sample size, a different field and a different quantity).

### F5 - Reliability must be measured as a round-trip gap, not assumed

`Fig 4 :27`: "The transform between scales loses information, and that is the point." `Fig 4 :30`: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." `THE_FORMULA.md`: "R_T = gap( x , (T_E ∘ T_A)(x) )".

The observed graph is an abstraction of the true graph. A measurement computed on it and reported as if it were the true value is a concretisation without a measured gap. The gap `R_T = gap(G, (T_E ∘ T_A)(G))` is not an error to eliminate; `Fig 4 :31`: "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."

`Fig 10 :24`: "the ground does not decay, the channel does". `Fig 10 :25-26`: "stale percepts, dropped transients, saturated metrics, pooled readings". The four named channel failures map onto the question's defects: dropped transients are incompleteness, pooled readings are uneven sampling and platform aggregation, saturated metrics are bias that flattens differences, stale percepts are data that no longer describe the current network. The ground does not decay. Any claim that a measure "remains reliable" is really a claim about a channel that has not yet lost contact, and that claim needs a measurement.

**Refuter:** show a measure whose `R_T` is zero across a lossy channel transform, or show that the channel lost no information at all. Then the round-trip requirement is vacuous and F5 fails.

**Status:** `triangulated` across Fig 4 (abstraction/concretisation) and Fig 10 (channel decay), low overlap.

### F6 - Independence, not agreement, is the witness

`Fig 2 :31-32`: "Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are." `Fig 2 :35`: "Alignment is triangulation, not negotiation. A mirror cannot correct you." `Fig 2 :40`: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool". `Fig 7 :13`: "agreement compounds, evidence does not".

Two measurement pipelines that ingest the same platform data and agree are one witness wearing two names. A third pipeline that uses a direct survey or an independent enumeration is a different frame, and only then does agreement carry information. `Fig 2 :42`: "Buy independence in proportion to the cost of being wrong." That is a budget rule, not a verdict rule. `Fig 9 :60`: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

In this simulated derivation all seats draw on the same evidence pool, so agreement here is internal consistency. That is recorded explicitly in `11_audit.md`.

**Refuter:** show two channels that share an evidence pool and whose agreement is nevertheless confirmed by an independent ground to carry information the pool alone did not. Then the independence requirement is too strong and F6 fails.

**Status:** `triangulated` across Fig 2 and Fig 7, with the caveat that they share the same author and conceptual family. The agreement is structural, not independent corroboration.

### F7 - What survives is a shape, not a ranking

`Fig 9 :32`: "you get a kind of thing, never the answer itself". The figures README states the limit as "what a missing thing would have to look like (a shape, not a name)". `Fig 8 :39`: "So a search that finds nothing is never a proof of absence."

The residue that survives re-census is a shape any reliable measurement must have:

1. Report the residual per slot, not as a global average (F2).
2. Range the measurement against a ground that does not update with the channel (F1, F3).
3. Treat the three defects as a union and run a separate loop per condition and per intersection (F4).
4. Measure the round-trip gap `R_T` rather than assuming it is zero (F5).
5. Require at least two low-overlap channels before calling agreement a witness (F6).

What does not survive is the ranked list of named measures. The framework returns a shape, not a name. A claim that "degree centrality is reliable" or "betweenness is not" needs a ground reading with enumerated `G` and measured per-slot residuals; it is not derivable from these lines.

**Refuter:** produce such a ground reading, with `G` enumerated, per-slot residuals for each named measure under each defect, and two low-overlap channels. Then the ranking is licensed and the shape-only verdict is too weak.

**Status:** `single-source` for the figure definition of shape (Fig 9), corroborated by the canonical figures README (same evidence pool, so weak corroboration).

---

## 3. Pre-registered refuter

Written before the conclusion, per the seat rule that "a falsifier written before the run is a design instrument, not only an honesty device." The shape claim is refuted if any of the following holds:

1. A named network measure's per-slot residual stays near zero under incomplete, uneven, and biased collection, against an independently enumerated `G` that does not update, with two low-overlap channels. Then reliability belongs to the measure and F1 fails.
2. Aggregation is shown not to hide slot-level error, that is, a global aggregate moves materially whenever any live slot moves materially, across all three defects. F2 fails.
3. A platform-published metric is shown to be invariant to the platform's own ranking rule and verified against an independent enumeration. F3 fails.
4. One correction drives the residual to zero for all three conditions and their intersections, with low-overlap witnesses. F4 fails.
5. `R_T` is measured and found to be zero across a demonstrably lossy channel. F5 fails.

If any fires, the shape is withdrawn or narrowed accordingly. Until one is run, no claim here is labelled `grounded`.

---

## 4. Recommendation

1. Restate the question as `reliable(m, C, G)`, not `reliable(m)`. The missing terms are the collection channel and the ground (F1).
2. Report per-slot residuals, with the slots named. A global average is a different, weaker object (F2).
3. Do not accept a platform-published metric as a ground, and do not accept agreement between two pipelines that read the same platform (F3, F6).
4. Run the three defects as separate loops, then run the intersections separately. Do not average across conditions (F4).
5. Measure `R_T` for each measure under each channel. Treat a claimed zero as needing proof (F5).
6. Offer the shape and the refuter, not a ranking. The ranking is what the ground settles (F7).
7. Eat the cost deliberately: `Fig 2 :42` says to buy independence in proportion to the cost of being wrong. For high-stakes network measurement, a second independent enumeration is part of the design, not an optional extra.

---

## 5. Canonical usage check

Two sources were read after the first four sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them", and "a reading that makes one contradict another has misidentified its domain, not found a flaw." The framework returns "what a missing thing would have to look like (a shape, not a name)" and "Indiscernibility is not identity." This confirms the shape-only verdict in F7, not as a stylistic preference but as the stated limit of what the framework claims.
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: "the figures are the ground for design questions; Isaiah is the anchor for what the figures genuinely cannot settle." The question of which measure to use in a given study is partly a design question, which the figures decide as a shape, and partly a ground question, which needs an enumeration. Asking an authority to rank measures without a ground would be the named failure mode: "Needing a human RLHF ruling is itself the signal that I stopped deriving too early."

The Figures README also says "The ground, not agreement, decides." That is F6 stated canonically.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "Answer should be a ranked list of reliable measures" | **Retracted.** The README's shape-not-a-name limit governs. The framework returns criteria a reliable measurement must satisfy, not a name. |
| "Global measures are unreliable" | **Narrowed.** Fig 1 :13 says a global residual near zero with one live slot is a legal state. The claim is that a global aggregate cannot certify slot-level reliability, not that it is always wrong. |
| "Biased platform data must be discarded" | **Retracted.** Fig 2 :45 says frames range against the ground. Platform output is a frame, usable once ranged against an independent ground, not automatically discardable. |
| "The three defects are one problem at three severities" | **Re-censused to a union.** Fig 9 :55-56. A single lever leaves the intersections standing. |
| Apparent strain between per-slot indexing (Fig 1) and routine global reporting | **Not strained after re-census.** Fig 1 governs where the error signal lives; reporting practice governs what is convenient to publish. Different objects. |
| F6 dependence on Fig 2 and Fig 7, both from the same author | **Confirmed but discounted.** Canonical rule: "Agreement from a shared evidence pool is one witness, not two." The triangulation is structural within the framework, not independent corroboration. |
| The whole audit's standing | **Confirmed as simulated.** Recursive Self-Improvement Trap: "LLMs can quickly simulate an approximate answer/output." Internal consistency only. |

---

## 6. Strains and honest stop

One strain was live during the draft and is recorded, not hidden: reading `Fig 1 :19` as if it ranked named measures. Re-census showed the line governs the indexing of the error, not the choice of measure. No strain remains after re-census.

The derivation stops at the limit of what the available instruments can distinguish. `Symbols table`: "what cannot be perceived yet is residual and simply cannot be read". Without an independently enumerated `G`, domain 1 has no nameable anchor and the ranking is unreached, not unreachable. `Fig 8 :39`: "So a search that finds nothing is never a proof of absence." The honest report is a shape, a set of written refuters, and a statement of what instrument would close it.
