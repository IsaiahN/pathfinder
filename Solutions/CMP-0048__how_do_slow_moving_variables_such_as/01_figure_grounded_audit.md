# Figure-grounded audit: how slow variables create sudden system-wide change

**Mode of this document: `specified` on the mechanism, `general` on the structural shape, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, line-numbered), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, and the world sources in `10_source_ledger.csv`, all opened 2026-11-22.

---

## 0. The claim under audit

The question is a how-question, so the first discipline is to bind the sought-for shape as an ordinary term before searching (Formula "Direction": a frame cannot check the direction of its own question). Write down what an answer would look like:

> **Shape claim (bound before the run).** A slow variable is a stock whose change is small per turn but whose remainder is carried into the next turn. It accumulates until the loop that holds the current regime changes sign or loses its stored difference; the regime then flips abruptly, and the flip propagates through the network so that what changes is system-wide. The flip is not visible from inside the frame before it fires. The framework gives this as a shape. It does not name the specific mathematical object (fold bifurcation, saddle-node, Hopf, noise-induced transition), and it does not certify that any particular early-warning statistic will work in any particular system.

Mode on the shape claim: `general` (structural). Mode on the specific bindings of the world sources: `specified` (unmeasured here).

---

## 1. The residual in effect terms

**Observed:** a system sits in one regime while a forcing variable drifts slowly; then, over a short interval, the whole system reorganises into a contrasting regime. **Predicted by a linear/proportional model:** the response tracks the forcing smoothly, so a small change in forcing gives a small change in state. The gap between that prediction and the observed abrupt, system-wide flip is `R`.

- **Arity.** At least two timescales are bound at once: a slow control stock and a fast response. The question names only one variable class (slow), so the second is already owed by the residual. There may be more than one slow stock, in which case the case is a union, not a single condition.
- **Symmetry.** Not symmetric. The stock has direction: it accumulates or depletes, and the change of regime is one-way over the observational window (hysteresis in the world literature). The comparison is a threshold relation, not a symmetric joining of two equal operands.
- **Scale.** First order locally: one slot's remainder is carried into the next turn. Second order globally: the local flip travels through the network and becomes a system-wide regime change. The residual is indexed by slot, not averaged (Fig 1 :19).

Per-slot statement: "The residual is indexed by object slot, not aggregated." (Fig 1 :19). And: "Aggregating across slots is how a live signal disappears into an average." (Fig 1 :22). So a global mean of system health can stay near zero while one slot carries the live signal that will become the flip. This is not a side note; it is where the detection problem lives.

---

## 2. Domain census (before choosing any figure line)

Describe R by arity, symmetry and scale above. One line per domain with actors, currency and anchor. A domain without a nameable anchor is not yet a domain.

| domain | actors | currency | anchor | nameable anchor? |
|---|---|---|---|---|
| D1, the physical system | the slow stock (stored stress, depleted resource, nutrient load, freshwater input), the fast response variables, the feedback loop, the intervening structure | the accumulated quantity and its spendable difference (a gradient) | an instrument that measures the stock and a record of the actual regime shift | yes: a measured threshold and an observed flip |
| D2, the observer / modeller frame | the model, the monitor, the early-warning statistics (variance, lag-1 autocorrelation, return time) | residual R (prediction minus observation) | the ground, which is the actual shift, never the statistic | yes: the realised shift tests the indicator |
| D3, the propagation frame | neighbouring slots, network links, cascade paths | influence travelling between linked states | the observed spatial extent of the flip | yes: which slots flipped, and in what order |

**Partition or union.** This is a **union compound**, not one hard question. The flip needs all of: an accumulating stock (D1), a loop whose sign or stored difference changes (D1), a threshold at which stability is lost (D1/D2), and a network that carries the local change outward (D3). A case in two conditions is not a harder case of either; it is a specific compound with its own loop. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Multiple slow variables (stress plus depletion, or nutrient plus temperature) overlap, so a single lever that clears the region where only one binds leaves the intersection standing.

**Dependency order (Fig 3).** The chain runs: perception of the slow drift (can the stock be measured at all?) -> vocabulary (terms for stock, threshold, feedback sign, spendable difference) -> objective (what counts as the regime and the flip) -> planning (which intervention, before which point) -> learn and carry. Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." In this question the usual break is between perception and objective: the slow stock has no instrument until someone builds one, and effort spent on early-warning statistics above that break arrives at a step whose input never arrived.

---

## 3. Figure census (quoted verbatim before concluding)

Each line below is an exact substring of `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`. Quotes precede the findings, so the derivation runs from the figures rather than from a recalled summary.

| figure line | verbatim text | bearing | verdict |
|---|---|---|---|
| Fig 13 :88-89 | "The residual of the turn just closed is what the next turn composes against, so no two passes begin from the same place." | accumulation mechanism, D1 | governs |
| Fig 13 :31-32 | "a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise." | compounding remainder, D1 | governs the compounding, not the specific flip type |
| Fig 12 :121 | "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." | why the loop runs away, D1 | governs |
| Fig 13 :46-47 | "What makes a gradient a gradient is that it can be spent, and neither an ordering nor a span of space has directedness." | stored difference spent at the flip, D1 | governs |
| Fig 13 :20 | "ordering, so more and less can be said" | the stock as spectrum-like ordering | governs the descriptive side |
| Fig 13 :24 | "that entities relate, and influence travels" | network propagation, D3 | governs |
| Fig 11 :52-53 | "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out." | cascade beyond direct contact, D3 | governs |
| Fig 6 :27 | "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same." | threshold invisible from inside, D2 | governs |
| Fig 10 :24 | "the ground does not decay, the channel does" | the monitor loses contact, D2 | governs |
| Fig 10 :25-26 | "stale percepts, dropped transients, saturated metrics, pooled readings" | failure modes of the channel, D2 | governs |
| Fig 9 :54 | "And when the split lands on a union rather than a partition, unbundle before you search again." | compound structure | governs |
| Fig 1 :19 | "The residual is indexed by object slot, not aggregated." | per-slot detection, D2 | governs |
| Fig 1 :22 | "Aggregating across slots is how a live signal disappears into an average." | why global indicators fail, D2 | governs |
| Fig 8 :39 | "So a search that finds nothing is never a proof of absence." | null early-warning result | governs |
| Fig 9 :32 | "you get a kind of thing, never the answer itself" | shape-not-a-name limit | governs |
| Fig 5 :46 | "When nothing is scoring, the drive manufactures a gradient." | accumulation when nothing appears to happen | governing, with a strain noted in F2 |
| Fig 12 :119 | "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is." | candidate reading of the slow stock | rejected after strain test, F7 |
| Fig 4 :30 | "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." | round-trip gap R_T | governs the audit |
| Fig 2 :35 | "Alignment is triangulation, not negotiation. A mirror cannot correct you." | second-seat honesty | governs |
| Fig 2 :40 | "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" | outreach rule | governs |
| Fig 10 :42 | "A verifier that can reconstruct the claim cannot verify it." | outreach rule | governs |

---

## 4. Findings

### F1 - The slow variable is an accumulated residual carried across turns (decisive for D1)

Fig 13 :88: "The residual of the turn just closed is what the next turn composes against, so no two passes begin from the same place."
Fig 13 :31-32: "a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise."
Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."

A stock whose per-turn change is small is exactly a remainder that re-enters the next turn. Because each pass begins where the last one left off, the quantity drifts even while each individual step looks negligible. The world literature says the same in different terms: "This is basically because of the interaction of a slow variable with a fast one" (Scheffer and Carpenter, Trends in Ecology and Evolution, 2003). That is a low-overlap corroboration from ecology, not a figure line, so it is world evidence only.

**Mode:** `general` (structural). **Verdict:** triangulated across two figures with low conceptual overlap (Fig 13 turn-to-turn remainder, Fig 12 cycle with output re-entering as input). Both are framework sources, so the triangulation is internal to one evidence pool; the ecology source is the only genuinely separate witness.

**Refuter:** show a slow stock that changes with no remainder carried into the next turn, that is, a system whose next pass begins from the same place as the last. That breaks Fig 13 :88 and the accumulation account.

### F2 - Suddenness is the loop sign and a spendable difference, not a new kind of thing

Fig 12 :121: "The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."
Fig 13 :46-47: "What makes a gradient a gradient is that it can be spent, and neither an ordering nor a span of space has directedness."
Fig 13 :22: "a difference that can be spent."
Fig 5 :46: "When nothing is scoring, the drive manufactures a gradient."

The slow variable is a difference that accumulates (an ordering: "ordering, so more and less can be said", Fig 13 :20). The fast regime is held by a loop whose sign decides whether it closes on itself. When the stored difference is spent, or when the loop sign flips from stabilising to amplifying, the regime can no longer close, and the state moves to a contrasting regime over a short interval. The figures give the **shape**: a stored difference plus a loop-sign change plus a threshold. They do not give the **name**: fold, saddle-node, Hopf, or noise-induced transition. Fig 9 :32: "you get a kind of thing, never the answer itself." The mathematical names are a provenanced import from the world literature (Scheffer et al. 2009; Lenton et al. 2008; Li et al. 2019), and are recorded as such, not as figure derivations.

**Strain, named.** Fig 13 :31-32 says a compounding remainder "is chaos." A critical transition to a contrasting state is not necessarily chaotic; it is often a bifurcation. The line governs the compounding of remainders generally, not the specific post-threshold regime. Re-census: do not force "chaos" to mean "bifurcation." The figure supplies the compounding; the world supplies the bifurcation type. This is a shape-not-a-name gap, not a contradiction.

**Mode:** `specified` on the mechanism, `general` on the shape. **Verdict:** single-source for the spendable-difference claim (Fig 13), triangulated for loop-sign runaway (Fig 12 plus the saddle-node literature, which is a separate field). The specific bifurcation type is a **gap** after re-census: the figures cannot name it.

**Refuter:** show a system whose loop sign and stored difference are unchanged across the flip, with no threshold crossed, so that the abruptness comes from something the figures do not describe. That breaks F2.

### F3 - System-wide change is a cascade, not a simultaneous event

Fig 11 :52: "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."
Fig 13 :24: "that entities relate, and influence travels."

The flip is system-wide because influence travels through a network. A local threshold crossing becomes a second-order effect, and the residual that matters can be several links out. This is why the question's phrase "system-wide" is not decoration: it names the propagation domain D3, which has its own anchor (which slots flipped, in what order) and cannot be reduced to D1. Ecology supplies a low-overlap witness: Scheffer et al. 2009 report self-organised spatial patterns preceding a critical transition, and Li et al. 2019 describe the time-dependent saddle-node as a fold catastrophe with a point of no return. These are corroboration, not the source of the verdict.

**Mode:** `specified`. **Verdict:** triangulated (Fig 11 cascade and Fig 13 network are different figures with different subject matter). **Refuter:** show an abrupt system-wide flip with no network path, that is, a true simultaneous independent crossing in every slot with no influence travelling between them. That breaks F3.

### F4 - The threshold is invisible from inside the frame until it fires

Fig 6 :27: "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."
Fig 10 :24: "the ground does not decay, the channel does"
Fig 10 :25-26: "stale percepts, dropped transients, saturated metrics, pooled readings"

Before the flip, an observer inside the system cannot distinguish "the regime is robust and this is just depth" from "the regime is about to fail and this is a genuine approach to a threshold." The two look the same from inside. The monitor degrades, not the ground: the stock keeps moving while the channel that reports it goes stale, drops transients, saturates its metrics, or pools readings into an average. This is the figure-grounded reason why the world literature says predicting critical points before they are reached is "extremely difficult" (Scheffer et al. 2009), and why Lenton et al. 2008 report that bifurcation tipping points are universally characterised by a response time tending to infinity at the threshold, a quantity that must be reconstructed from noisy time series rather than read directly.

**Mode:** `specified`. **Verdict:** triangulated across Fig 6 and Fig 10 (different figures), with world corroboration from ecology and Earth systems. **Refuter:** demonstrate an instrument that inside the frame reliably separates depth from genuine approach before the flip, without using the later shift to calibrate it. That breaks F4. A null early-warning result does **not** refute it: Fig 8 :39 "So a search that finds nothing is never a proof of absence."

### F5 - Multiple slow variables form a union compound, so unbundle before searching

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."

Accumulated stress plus resource depletion is not one bigger slow variable. It is two overlapping conditions with their own loops. A single lever that fixes stress clears the region where only stress binds and leaves the intersection standing. The dependency chain then has each slow stock measured on its own slot before any combined indicator is trusted (Fig 1 :19).

**Mode:** `general`. **Verdict:** single-source (Fig 9), corroborated by the empirical finding that early-warning indicators are not specific to catastrophic shifts (Kéfi et al. 2013, Oikos): "Early warning signals based on critical slowing down indicate a broader class of situations where a system becomes increasingly sensitive to perturbations." **Refuter:** show that two slow variables in a given system share one loop and one threshold such that they behave as a single stock; then the union reading is wrong for that case.

### F6 - Aggregation destroys the detection signal

Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

A system-wide mean can look stable while one slot carries the live residual that will seed the cascade of F3. The detection domain D2 therefore has a per-slot anchor, not a global one. World corroboration: Kéfi et al. 2014 (PLOS ONE) develop spatial early-warning signals precisely because time-series averages miss spatial structure, and Lenton et al. 2008 note that the tipping elements with the greatest uncertainty are those where the relevant control cannot be reduced to a single global number.

**Mode:** `specified`. **Verdict:** triangulated (Fig 1 plus Fig 11's first-order/second-order cascade distinction). **Refuter:** show a system whose aggregate residual tracks the impending flip as well as or better than any per-slot residual, measured before the flip and confirmed at the ground.

### F7 - Rejected reading: the slow variable is not a catalyst

Fig 12 :119: "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."

A catalyst survives its own use. A depleted resource does not; an accumulated stress does not in general regenerate per use. Reading the slow stock as a catalyst requires forcing the line, so the strain test sends it back to census: the line governs parts that are regenerated across uses, not stocks that accumulate monotonically. Some slow variables do behave catalytically (a positive feedback that reproduces itself), and in those cases the line applies, but as a separate sub-case with a recorded distinction, not as a general name for the stock.

**Mode:** `specified`. **Verdict:** rejected as a general reading, retained as a marked sub-case. **Refuter:** show that the particular stock under study is regenerated by its own use, in which case the catalyst reading is licensed and F1 must be restated for that stock.

### F8 - A null early-warning result is not a refutation of the shape

Fig 8 :39: "So a search that finds nothing is never a proof of absence."

The world literature contains a genuine conflict, recorded rather than smoothed. Jiruska et al. 2018 (Nature Neuroscience) found that "the transition to seizure is not a sudden phenomenon, but is instead a slow process that is characterized by the progressive loss of neuronal network resilience" governed by critical slowing. Wilkat et al. 2019 (Chaos) found "no evidence for critical slowing down prior to 105 epileptic seizures." Freestone et al. 2020 (Nature Communications) found critical slowing a reliable indicator in 14 patients. Kéfi et al. 2013 found slowing down is not specific to catastrophic shifts.

Per the method, a conflict sends us back to the census, it never flips the verdict. Re-census: the figure verdict is about the **shape** (accumulating remainder, loop sign, spendable difference, cascade, invisibility from inside). It is not about the reliability of any particular statistic. The conflict is wholly inside D2 (instrument domain) and therefore cannot touch D1 or D3. Agreement among studies that share the same early-warning evidence pool is one witness, not two (Fig 2 :40). Verdict unchanged; the instrument claim stays `candidate`.

---

## 5. Pre-registered refuter (written before the conclusion)

A falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. A slow stock changes with no remainder carried into the next turn, so each pass begins from the same place (breaks Fig 13 :88).
2. The abrupt flip occurs with no change in loop sign and no spending of a stored difference, and no threshold is crossed (breaks Fig 12 :121 and Fig 13 :46-47).
3. The flip is system-wide with no network path, that is, independent simultaneous crossings in every slot (breaks Fig 11 :52 and Fig 13 :24).
4. A ground measurement shows the aggregate residual tracking the flip as well as or better than per-slot residuals, consistently before the flip (breaks Fig 1 :19, :22).
5. An instrument inside the frame reliably separates depth from genuine approach before the shift, without using the shift to calibrate it (breaks Fig 6 :27).

Until one is run, no part of this may be labelled `grounded`. A failure is more useful than an endorsement.

---

## 6. Recommendation

1. Lead with the shape claim and the five refuters. Do not lead with the word "tipping point," which is a world import, not a figure term (F2).
2. State the mode on every substantive claim: `general` for structure, `specified` for mechanism, nothing `grounded`.
3. Keep the three domains separate. Never average D1's accumulation, D2's detection, and D3's cascade into one "resilience" score. Fig 1 :22 gives the reason: an average is exactly how the live signal disappears.
4. Treat the bifurcation literature as a provenanced import with a source gate and shadow test, not as a figure derivation (Fig 9 :32).
5. Use the public institutional venues in `03_public_contact_points.csv`, ask what would refute the shape, and do not pool later agreement as corroboration (Fig 2 :40).
6. Figure 4 :22: "Only methods cross up. Only head starts come down." Send the generator (shape plus refuter), not a polished conclusion.

---

## 7. Canonical usage check

Two sources govern how the figures may be used, read after the first four sections:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw"; and the limit: the framework says "what a missing thing would have to look like (a shape, not a name)", then stops at the limit of the instruments and records the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are the ground for design questions; the seat must not ask for rulings the figures already decide. The six-term set and the loop are metalaws, so a design or mechanism question is answered by derivation, not by escalation to an author.

Consequences applied above: the chaos-versus-bifurcation strain was dissolved by re-census rather than by softening a figure; the catalyst reading was rejected by strain test rather than retained as a loose analogy; the specific fold was declared a gap rather than named as a figure result.

---

## 8. Retractions and confirmations

| earlier reading | status after canonical check |
|---|---|
| "The figures derive the saddle-node bifurcation" | **Retracted.** Fig 9 :32: "you get a kind of thing, never the answer itself." The fold is a world import, recorded with provenance. |
| "Compounding remainder means chaos, so the flip is chaos" | **Retracted as a type claim.** Fig 13 :31-32 governs compounding generally; the specific regime is a separate question. Re-census applied. |
| "The slow variable is a catalyst" | **Rejected as general, kept as a marked sub-case** (F7). Strain test, not smoothing. |
| "Critical slowing down is figure-derived and universal" | **Refused.** It is a world instrument claim inside D2 (Fig 8 :39; Wilkat 2019; Kéfi 2013). Verdict unchanged. |
| "A global resilience score measures the approach" | **Refused.** Fig 1 :19, :22: per-slot residual, never an aggregate. |
| "The three domains can be averaged into one risk number" | **Refused.** Fig 9 :54 union compound; partition before search. |
| F1 accumulation (remainder re-enters next turn) | **Canonically confirmed.** Fig 13 :88 and Fig 12 :121 are metalaw-level statements about the loop. |
| F3 cascade (influence travels) | **Canonically confirmed.** Fig 11 :52 and Fig 13 :24. |
| F4 invisibility from inside | **Canonically confirmed.** Fig 6 :27 and Fig 10 :24; matches the README's "Indiscernibility is not identity." |
| F8 conflict handling | **Canonically confirmed.** A conflict sends the reader back to the census; agreement from one evidence pool is one witness (Fig 2 :40). |

### Updated verdict

The shape survives: a slow variable is an accumulated remainder that re-enters each turn; the flip is the sign change or spending of a stored difference at a threshold; the system-wide extent is a cascade through the network; and the approach is invisible from inside until it fires. The specific mathematical name, the reliability of any early-warning statistic, and the claim that a global score measures the approach do not survive as figure-derived results. Strains after re-census: one live instrument-strain in D2 (the early-warning conflict), recorded, not hidden; no figure-to-figure contradiction.
