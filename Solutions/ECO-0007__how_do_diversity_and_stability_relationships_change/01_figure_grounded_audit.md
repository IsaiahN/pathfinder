# Figure-grounded audit: how diversity and stability relationships change with scale

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." This document states what would have to be measured.

**Status: simulated derivation, not a ground reading.** *The Recursive Self-Improvement Trap* says LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Local canonical figure text `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FIGURES_README_canonical.md`, `THE_FORMULA.md`, and the public sources recorded in `10_source_ledger.csv`, all fetched 2026-11-23.

---

## 0. The residual, in effect terms

Ecology reports a diversity-stability relationship that is positive in some systems, negative in others, and absent in others, and that shifts as the grain and extent of observation change. Two readings:

- **A:** there is one diversity-stability law whose sign or strength changes with scale. On A, we hunt for a scale-dependent coefficient, pool comparable studies, and average across stability metrics.
- **B:** there is no single relationship. Scale is a lossy transform that changes what is being measured, and the "relationship" is a union of scale-indexed compounds, one per stability metric and scale axis. On B, we unbundle, keep verdicts per metric and per scale, and measure what is lost across the transform.

What each leads to: A spends budget fitting a coefficient to a bundle of non-comparable quantities; B produces a checkable shape and a measured gap, and refuses the coefficient until a ground settles it. The residual is not "what is the coefficient". It is "what changes when the scale changes, and what is lost in the change".

### R by arity, symmetry, and scale

- **Arity:** three. Diversity D, stability S, and scale lambda. More exactly, S is a family and R(D,S) is a function of lambda, so this is a second-order residual.
- **Symmetry:** broken. Resistance, initial resilience, recovery rate, invariability, and persistence are not interchangeable readings of one quantity. Wikipedia records that Grimm and Wissel found "167 definitions used in the literature and found 70 different stability concepts". Jarillo et al. show that some of these scale as weighted means and one does not. Averaging them would discard the very difference the question asks about.
- **Scale:** two axes, not one. Space (grain, extent) and time (window, duration). Fig 13 lists space and time as distinct states and Fig 13 :76 says a gradient in one is a different term from a gradient in the other.

---

## 1. Domain census (before choosing any figure line)

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor (nameable?) |
|---|---|---|---|
| D1 ecological composition (habitat) | species, functional groups, competition, predation, mutualism, conditions (light, water, season, terrain) | biomass, abundance, energy flow | yes: monitoring time series and field experiments. Fig 11 :43-48: "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual." |
| D2 stability measurement (instruments) | resistance, initial resilience, recovery/elasticity, invariability, persistence, CV-based indices | variance, return rate, displacement | yes: the measurement protocol and its units. Jarillo et al. define each measure explicitly. |
| D3 scale transform (membrane) | grain, extent, aggregation, alpha/beta/gamma, synchrony/asynchrony | information dropped by aggregation, the round trip gap `R_T` | yes: the same system observed at two scales. Fig 4 :30: "So take the round trip and measure the gap." |
| D4 verification (outside frame) | expert readers, public reviewers | agreement and residual | yes: the ground, never agreement. Fig 2 :45: "Frames range against the ground. They do not negotiate with it." In this simulated run all four domains draw on one evidence pool, so D4 independence is zero. |

**Partition or union? Union.** Fig 9 :54-58: "And when the split lands on a union rather than a partition, unbundle before you search again." The diversity-stability question is a bundle of overlapping conditions: stability metric times scale axis times habitat. A single lever (add diversity) clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds. A case at two scales is not a harder case of one scale; it is a specific compound with its own loop.

**Order by dependency (Fig 3).** Enumerate D1 at a scale (perception), define D2 in units (vocabulary and objective), then apply D3 and measure the gap (planning and carrying), then D4 checks the result. Fig 3 :19-20: "Optimising a link that already works cannot rescue one that does not. The chain is ordered by dependency, not by importance." Effort spent on a universal diversity coefficient before the stability metric is defined lands above the break and cannot be used below it.

---

## 2. Findings

### F1. The question is a union, not one relationship (governing)

Fig 9 :4-5: "First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."

Fig 9 :54-58: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."

The disagreements in this field do not shrink with effort; each stability metric keeps working on its own subset. So the correct move is to split, not to search harder for one coefficient. World corroboration: Jarillo et al. (2022) find "scaling of stability depends on the metric considered"; Zelnik et al. (2023) note that both scale and stability can be defined in different ways; Wikipedia reports 167 definitions and 70 stability concepts.

**Refuter:** exhibit one stability metric whose diversity relationship has the same sign, magnitude, and scale dependence across spatial grain, spatial extent, and temporal window, so that no unbundling is owed. If that is shown, F1 fails.

### F2. Scale change is a lossy transform; the honest report is the gap, not a coefficient (decisive for the question as asked)

Fig 4 :27: "The transform between scales loses information, and that is the point." Fig 4 :28-29: "Going up throws away detail; that is what makes the result reapplicable. But it means the trip is not reversible, and something carried up and brought back down will not match what was sent." Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

Fig 4 :31-32: "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."

So a diversity-stability result measured at one grain cannot be relabelled onto another. The coarse description drops the per-species and per-site detail that may be doing the stabilizing. What is owed is `R_T`, the round trip gap, not a universal scaling exponent. World corroboration: Hodapp et al. (2023) write that "any measure of stability scales with the spatial and temporal extent of the underlying data, which complicates the upscaling of knowledge acquired from small scale experiments to scales relevant to management and conservation"; Zelnik et al. list as an open question "What information about a system is necessary in order to scale up small spatial and temporal scale findings to larger scales that are relevant for conservation management?"

**Refuter:** exhibit a transform between two scales for the diversity-stability relation that is reversible, so carrying up and bringing down reproduce the original reading and `R_T = 0`. If shown, F2 fails.

### F3. Spatial and temporal scale are different terms, not one axis

Fig 13 :9-14 names the states: "near, far, between, contained" for space and "the ordered succession of differences" for time. Fig 13 :76: "A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is."

So "across spatial and temporal scales" is not one axis with two labels. Spatial insurance (asynchrony among sites) and temporal portfolio effects (asynchrony among species through time) are different terms. Pooling them into a single "scale" variable is the error Fig 13 names. World corroboration: Zelnik et al. build a spatial-temporal map with two distinct "demarcation lines", a locality boundary and a homogeneity boundary, not one; Jarillo et al. treat spatial and ecological scale separately.

**Refuter:** show that one scalar scale parameter suffices for both axes, that is, space and time enter only through the same aggregate, so a single axis recovers both sets of results. If shown, F3 fails.

### F4. Aggregation hides the live per-slot signal

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

Pooling species into one diversity index and sites into one mean stability is how the scale-dependent signal disappears. A dominant species or a rare species whose fluctuation drives the whole community is exactly the live slot that an average erases. World corroboration: Hodapp et al. find that dominant species "can but did not necessarily have highly stabilizing or destabilizing effects on overall community biomass" and that "The sign and magnitude of individual contributions depended on community structure and the spatial distribution of biomass and species in space"; Wikipedia notes an ecosystem can be stable in some properties and unstable in others.

**Refuter:** show that aggregating across species or sites preserves the identity-level signal exactly, with no loss of the contribution that drives the relation. If shown, F4 fails.

### F5. A species' stability valence is relative to the residual, not a property it carries

Fig 11 :49-51: "An actor's valence is relative to the residual, not a property it carries. The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."

This is why the same species list can appear stabilizing under invariability and destabilizing under resistance, or stabilizing at one extent and not another. World corroboration: Hodapp et al. report context-dependent signs; Ebel et al. (2022) report that the portfolio effect "was not important for stability in this system" even though it is a standard mechanism elsewhere.

**Refuter:** exhibit a species or functional group with a fixed stability valence across all residuals, metrics, and scales. If shown, F5 fails.

### F6. The level remakes the term; a settled result becomes an atom at the next level

Fig 12 :103-104: "Composition is recursive, and the level decides what is irreducible. A settled molecule becomes an atom for whatever composes over it."

Fig 4 :34-35: "The level a method lands on remakes it. A seed carries no small tree: it carries what will grow one, and the conditions it lands in decide what it becomes."

A diversity-stability term settled at the local scale is not a plug-in component at the regional scale. Its result is remade by the level it lands on. World corroboration: Jarillo et al. find resistance and initial resilience to be scale-free weighted means, while invariability increases with network size; that difference is a level fact about the metrics, not a property of diversity.

**Refuter:** show that a diversity-stability term settled at one scale composes into another scale without being remade, with no level-specific change in its role. If shown, F6 fails.

### F7. Witnesses must be low overlap; the figure verdict does not come from the world

Fig 8 :47: "Independence is one quantity read twice." Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool."

The ecology sources (theory, aquatic monitoring, synthesis) largely share the same literature pool, so their agreement is one witness. The finance/portfolio source is a genuinely low-overlap frame: it corroborates the variance mechanism, not the verdict. The verdict comes from the figures. The arXiv preprint and the Frontiers article are the same paper by the same authors and count as one witness, not two.

**Refuter:** show that the finance frame and the ecology frame draw on the same evidence pool, so their agreement adds no independence. If shown, the low-overlap claim fails.

### F8. What survives (with mode)

| claim | mode | figure / source |
|---|---|---|
| The question is a union of metric-by-scale compounds, not one relationship | `general` (structural) | Fig 9 :4-5, :54-58; Jarillo; Zelnik |
| Scale change is lossy; the honest report is `R_T` | `specified`, falsifiable | Fig 4 :27-32; Hodapp |
| Spatial and temporal scale are different terms | `general` (structural) | Fig 13 :9-14, :76; Zelnik |
| Aggregation hides per-slot signal | `specified` | Fig 1 :19, :22; Hodapp |
| Actor valence is relative to the residual | `specified` | Fig 11 :49-51; Hodapp; Ebel |
| The sign of the relation at any given scale | **not derivable** | no figure line; needs the ground |

---

## 3. Pre-registered refuter

Written before the conclusion, per the standing rule that a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. One stability metric is found whose diversity relation has identical sign, magnitude, and scale dependence across spatial grain, spatial extent, and temporal window (breaks F1 and F3).
2. A reversible scale transform is demonstrated for the diversity-stability relation, with `R_T = 0` (breaks F2).
3. Aggregation across species or sites is shown to preserve the identity-level signal exactly (breaks F4).
4. A fixed stability valence for a species or functional group is demonstrated across residuals (breaks F5).

If any fires, the union and lossy-transform reading is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 4. Recommendation

1. Replace "does diversity stabilize ecosystems?" with "which stability metric, at which spatial grain and extent, over which temporal window, and what is lost moving between them?" (F1, F2, F3).
2. Report the round trip gap `R_T` between scales rather than a portable coefficient (F2). The invariability-area relationship and the stability-synchrony decomposition in Hodapp et al. are candidate instruments for this, but no measurement was taken here.
3. Keep species and site level results visible; do not aggregate before the per-slot signal is read (F4, F5).
4. Ask outside readers for a refutation of the shape claim, not for agreement with it (F7). Send the generator, not the recording: Fig 4 :25 says "A recording carried upward looks like knowledge and is a description of one occasion."

---

## 5. Canonical usage check

Two local canonical sources govern how the figures may be used, read after the first four sections.

- `FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw." And the limit: the framework returns "what a missing thing would have to look like (a shape, not a name)" and stops "at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."
- `THE_FORMULA.md` step 7 separates SEARCHED, INWARD, and OUTWARD. For this question, the local scale question is INWARD (sharpen the instrument at a scale); the cross-scale question is the round trip of Fig 4, not an import. No new primitive is claimed.

### Retractions and confirmations (kept visible)

| earlier reading in this run | status after canonical check |
|---|---|
| Initial phrasing "diversity increases stability at larger scales" | **Retracted.** The figures return a shape, not a sign. The world sources show metric-dependence and context-dependence. The sign at any scale is unmeasured here. |
| Treated spatial and temporal scale as one axis | **Retracted.** Fig 13 :76 makes a gradient over space a different term from one over time. Re-census done; see F3. |
| Counted the arXiv preprint and the Frontiers article as two witnesses | **Retracted.** Same authors, same paper, one evidence pool. Recorded as one witness in `10_source_ledger.csv`. |
| Treated "scale" as a new primitive needed to answer the question | **Retracted.** Space and time are already among the six (Fig 13); scale is a transform between levels, not a seventh member. |
| Union reading (F1) | **Confirmed.** Fig 9 and three independent ecology studies agree on metric-dependence. |
| Lossy-transform reading (F2) | **Confirmed.** Fig 4 and Hodapp et al. agree on the upscaling difficulty. |
| Apparent strain Fig 4 (lossy) versus Fig 12 (settled molecule becomes atom) | **Not strained after re-census.** Fig 4 governs the transform between scales; Fig 12 governs composition after a term is settled at a level. Different objects. |

### Strain test

After re-census, no figure line is being made to fit by force. One item remains open but is not a strain: whether `R_T` can be measured numerically for a given dataset from existing monitoring records. Hodapp et al. provide candidate instruments (slope of the invariability-area relationship, synchrony decomposition), but this run took no measurement. Treating the condensed shape as identical to the figure set would set `R_T` to zero and would be the dead-reckoning error Fig 4 :30 names. The honest form is a lossy condensation with a gap recorded as an enumerated set of dropped constraints.

### Updated verdict

The shape survives. The question is a union of metric-by-scale compounds; scale enters as a lossy transform whose round trip gap is the honest report; spatial and temporal scale are different terms; aggregation hides the per-slot signal; actor valence is relative to the residual. What does not survive is any claim about the sign or magnitude of the diversity-stability relation at a given scale, and any single coefficient that would carry between scales. Mode: `specified`, ungrounded, candidate.
