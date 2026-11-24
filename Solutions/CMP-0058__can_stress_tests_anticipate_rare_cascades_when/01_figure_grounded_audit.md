# Figure-grounded audit: Can stress tests anticipate rare cascades when the mechanisms and network structure may change during a crisis?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured for a verdict to move. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status: simulated derivation, not a ground reading.** LLM output is simulacra; "the truly testable output would need to be derived from the real architecture or working the formula yourself" (essay: *The Recursive Self-Improvement Trap*, read 2026-11-22). This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Sources.** Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, line numbers). Formula: `FRAMEWORK/figures/THE_FORMULA.md`. Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md`. World sources actually opened are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

A stress test is an instrument: a model, a scenario and a mapping to a quantity (loss, capital shortfall, survival). Say it **anticipates** a cascade when its output would register against the ground, that is, when a cascade it flags is a cascade the real system undergoes, and when a cascade it clears is one the real system clears.

The residual R is the gap between what the model's closure can represent and what the crisis actually returns. The question adds a specific strain: the mechanisms (behavioural rules, transmission channels, recovery assumptions) and the network structure (links, exposures, counterparty set) are themselves **state variables that move during the crisis**. The stress test holds fixed exactly the things that move.

Stated as an effect, with the two options bound as ordinary terms (Formula, "Direction"; Fig 5 :65 to :66):

- **Option A (strong anticipation):** a fixed-model stress test can anticipate a mechanism-changing rare cascade. Leads to: reliance on a clean result as a warning, and treating more scenarios as more evidence.
- **Option B (shape-only anticipation):** a stress test can return the *shape* of a cascade under stated assumptions, and can register against the ground only if its closure is kept reachable and its rooms are independent. Leads to: enumeration outward, independent frames, measured round trip gap, and an open slot until the ground settles it.

What an answer would look like is bound now: a verdict on whether R closes inward (more searching in the same closure) or requires an outward import and a ground reading. That bound shape is what the refuter in §3 aims at.

---

## 1. Domain census (before any figure line was chosen)

R by arity, symmetry and scale, then one line per domain with actors, currency and anchor. A domain without a nameable anchor is not a domain yet.

**R (arity / symmetry / scale).**
- Arity: two operands, the instrument's closure and the changing habitat. Two conditions, so a **union compound** (Fig 9 :57 "a case in two conditions is not a harder case of either"), not one hard question. The overlap is a compound with its own loop.
- Symmetry: asymmetric. The ground does not update, the channel does (Fig 10 :24). A cascade is ordered (Fig 12 :121 "a chain cannot close by construction"), so shock order and contact order matter; this is a sequence, not a symmetric conjunction.
- Scale: first order (direct losses inside the model), second and third order (cascade over the network), and cross-scale (model abstraction versus real system, measured by R_T, Fig 4 :30).

**Domain 1, the stress-test frame.**
- Actors: institutions, exposures, behavioural rules, the scenario and the loss mapping.
- Currency: simulated loss and capital shortfall.
- Anchor: none of its own. Its closure is "the floor of what it can say" (Symbols table, atoms(Γ)), not an anchor. "An anchor is whatever settles the question and does not change its answer because of what any frame thinks" (Fig 2 :29). The model's closure changes when the modeler edits it, so it fails the anchor test.
- Question type: partition (what is inside closure(Γ)).

**Domain 2, the ground (the real crisis and its habitat).**
- Actors: banks, funds, counterparties, conditions (liquidity, confidence, fire sales, policy), relations (exposure, common assets, funding).
- Currency: actual losses, defaults and surviving contingency.
- Anchor: the ground, which settles and does not update (Fig 10 :21-24).
- Question type: habitat enumerated, never composed (Fig 11 :43). Cascades cross boundaries and reach three steps out (Fig 11 :52).

**Domain 3, verification and contact.**
- Actors: scenario designers, regulators, outside expert frames.
- Currency: residuals and agreement.
- Anchor: the ground, never agreement (Fig 2 :35, Fig 2 :40).
- Question type: independence between rooms (Fig 7 :35-36). In this simulated run every seat reads one evidence pool, so this domain's independence is zero. Declared, not hidden.

**Partition or union.** Union, not partition. Domain 1 and Domain 2 share atoms (banks, exposures) but not closure (the model omits or freezes the moving mechanisms). "A bundled problem is usually a union of overlapping conditions, not a list of separate ones" (Fig 9 :55). Do not merge them into one question about whether stress testing works.

**Dependency order (Fig 3).** Perceive whether the instrument still registers the mechanism; then have terms for the changed situation; then state what would count as progress; then plan and carry. Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." Effort spent above the break (more scenarios, finer loss accounting) cannot rescue the missing middle link (terms for what a changed mechanism affords).

Strain test applied before concluding: a line is kept only if it fits without forcing. Where a figure seemed to strain (early-warning-signal literature, see §5 and `09_watson_answer.md`), re-census showed it governs a different domain and it was not used to flip a verdict.

---

## 2. Figure census

| figure | bearing on this question | verdict used |
|---|---|---|
| 1 The Agent | a global clean result can hide a live per-slot residual; frame-internal quantities are disqualified | a clean portfolio-level stress result is not evidence |
| 2 The Ground | anchor must not update; correlation disqualifies a verdict | many runs of one model are one frame |
| 3 Dependency Chain | a reading below the break is a reading of nothing | more scenarios cannot rescue a missing mechanism term |
| 4 The Membrane | the condensation carries a round trip gap R_T | measure what the model abstraction dropped |
| 5 Mint Pipeline | a sought-for shape held as preference is invisible until bound as an ordinary term | pre-register the cascade shape |
| 6 Closure / Reachability | import is the only operator that moves the wall; search inside closure adds no atom | inward refinement cannot supply a new mechanism |
| 7 Room Chain | "agreement compounds, evidence does not"; rooms must differ | independence between stress tests, not volume |
| 8 Union Surplus | "no search, however long, adds an atom"; a nil result is not proof of absence | bounded NO, with the nil-result caveat |
| 9 Leave / Arrive | union versus partition; a sealed room does not exist; describe the residual first | union compound; clean result proves nothing |
| 10 Ground Maintainer | the ground does not decay, the channel does; keep the anchor reachable | model decay during crisis is the central failure |
| 11 The Habitat | habitat enumerated never composed; contact cascades three steps out; test harness | decisive: "synthetic solve proves wiring and never capability" |
| 12 The Bond | cycle and compounding remainder; level-relative irreducibility | cascade mechanism, not just ingredient list |
| 13 Minimum Viable Set | the set is closed, arrangements are not; no chain reaches outside | why import is owed |
| Operators / Symbols | sequence and production are ordered; R is per slot, the ground is the anchor | notation for the derivation |

---

## 3. Findings

### F1 - A stress test is a substituted habitat, not the system (decisive)

Fig 11 :70, verbatim:

> **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."**

And Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone."

A stress test substitutes a model habitat for the real one. A clean result proves that the model's wiring computes correctly, not that the institution or system can survive a crisis whose habitat differs. When mechanisms and network structure change during the crisis, the substitution is not merely approximate; it is a different habitat. This is the single strongest figure line in the audit and it governs the verdict directly.

Fig 11 :68 to :69 names the two blind spots of substitution: "what you failed to reproduce is invisible until the goal fails" and "what you unintentionally introduced is invisible until it acts." A mechanism-changing cascade is exactly what was failed to be reproduced.

**Refuter:** show a stress test whose habitat is not substituted but is the live system under observation, with the ground reachable throughout; then a synthetic solve would be a contact reading and the finding would not apply. No such instrument was found in the sources opened.

### F2 - Closure is idempotent, so more scenarios do not add a mechanism

Fig 6 :21: "MINT composes inside the closure and can never add an atom."
Fig 8 :32: "no search, however long, adds an atom."
Fig 6 :22: "NOVEL means novel relative to atoms, not to the world."
Fig 13 :113: "More compositions never add a member, and no chain reaches outside what the six and their bonds already span."

A "novel severe scenario" generated inside a fixed model is novel relative to the model's atoms, not to the world. Running a thousand scenarios sweeps the same closure. Fig 13 :115: "The set is closed. The arrangements are not. That gap is why import exists."

This refutes the strong reading of anticipation: the missing thing is not a further arrangement of known mechanisms, it is a mechanism the closure does not hold. Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."

**Refuter:** demonstrate that the set of mechanisms a stress-test frame can hold is closed under the crisis operations (entry, adaptation, fire sale, link rewiring), so no new atom is required. The network-science sources opened (`10_source_ledger.csv`) describe time-varying networks and mechanism change, which point the other way, but no formal closure proof was read.

### F3 - The channel decays during a crisis, and the dropped items are the mechanisms

Fig 10 :24: "the ground does not decay, the channel does."
Fig 10 :26: "stale percepts, dropped transients, saturated metrics, pooled readings."
Fig 10 :27 to :28: "the output is not a verdict, it is you have lost touch."
Fig 10 :29: "keep the anchor reachable."

This is the figure that maps most exactly onto the question's phrase "may change during a crisis." The ground keeps running; the instrument's contact with it degrades. Stale percepts are exposures calibrated before the change. Dropped transients are behavioural adaptations. Saturated metrics are loss functions that cap out. Pooled readings are aggregated parameters. The world literature corroborates: the Banque de France / Bank of England system-wide stress test report states that "the use of aggregated or representative parameters tends to average out participant behaviour, thereby dampening non-linear feedback loops, overreactions, and other effects that drive real-world amplification" (`04_links_and_distribution.md`, source ledger).

Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." The portfolio-level clean result is the average; the live slot residual is the institution about to fail.

**Refuter:** show a crisis in which the stress test's channel remained reachable and all mechanisms were captured, verified against out-of-sample outcomes. Gai and Kapadia (2010) report the opposite: "the resilience of the system in withstanding fairly large shocks prior to 2007 should not have been taken as a reliable guide to its future robustness."

### F4 - A clean stress test is not proof of absence

Fig 9 :44: "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."
Fig 8 :39: "So a search that finds nothing is never a proof of absence."
Fig 6 :27: "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."

A stress test that returns no cascade cannot distinguish "no cascade is possible here" from "the mechanism that would produce one is not in my closure." From inside the frame the two look identical. This is the barrier-theorem reading: the test can report what is unreachable with its library as it stands, and must report "unreachable is a verdict here, not a silence" (Fig 13 :134) rather than emitting a comforting zero.

**Refuter:** exhibit a sealed room, a finite and complete enumeration of cascade mechanisms and contacts for a real system. Fig 11 :43 forbids it by rule: "The habitat is enumerated, never composed," and the enumeration has no stated stopping point except when the cascade stops mattering (Fig 11 :44).

### F5 - Direct-contact scoping misses the cascade that matters

Fig 11 :52: "Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."
Fig 11 :44: "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."

A stress test that shocks only direct counterparty exposures performs first-order enumeration. Contagion literature finds exactly the second-round and chain-amplification structure the figure describes: Battiston, Caldarelli, May, Roukny and Stiglitz (2016) write that "more-numerous and longer chains lead to stronger amplification of the errors on the parameters," and that "small errors on the knowledge of the network of contracts can lead to large errors in the probability of systemic defaults."

The remedy is figure-derived and additive: enumerate outward, including common assets, funding links and cross-system feedback, until the cascade stops mattering. The Gambhir et al. (2025) polycrisis framework independently uses the same move, conceiving systemic risk as "the potential for individual failures to cascade into system-wide breakdown, both within and across systems."

**Refuter:** show that all consequential cascade paths in a real system are contained in first-order direct exposures, verified over multiple crises. The sources opened do not support this.

### F6 - The cascade is a cycle and a compounding remainder, not an ingredient list

Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."
Fig 13 :31 to :32: "a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise."
Fig 13 :88: "The residual of the turn just closed is what the next turn composes against, so no two passes begin from the same place."

A cascade is the residual of one turn re-entering the next through an amplifying chain. A stress test that models a one-shot shock and a fixed clearing vector captures a chain, which "cannot close by construction." The loop, and the new remainder it produces, are the mechanism-changing part. The network-science review by Caccioli, Barucca and Kobayashi states that "individual participants react to the aggregate dynamics of the market that they collectively create, so that to understand systemic risk the feedback loop between individual and collective dynamics has to be accounted for."

Fig 12 :103: "Composition is recursive, and the level decides what is irreducible." A cascade that is negligible at the institution level can be irreducible at the system level; per-slot residuals must not be averaged away (Fig 1 :19).

**Refuter:** exhibit a cascade with no feedback loop and no compounding remainder, that is, a pure one-pass chain, and show that this covers the rare cases. Pure chain models exist (Eisenberg and Noe clearing), but they are "a chain" in the figure's sense and do not cover the mechanism-changing case.

### F7 - Independence between rooms, not volume of rooms

Fig 7 :13: "agreement compounds, evidence does not."
Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."
Fig 7 :36: "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."
Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."
Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

Running many scenarios through one model is one long room. Each additional agreeing scenario is the same closure handing the question along. What buys evidence is a room with a different closure, selected against the residual the previous room surfaced. The ecology early-warning literature supplies the low-overlap analogue: indicator choice depends on the system, and a study of real lake data found that "their applicability was strongly limited by the requirement for ecosystem-specific knowledge of transition-generating mechanisms and their drivers to choose relevant state variables for analysis" (Dakos et al. 2016, PNAS, source ledger). Different mechanisms require different instruments.

**Refuter:** show two stress tests with genuinely different closures (not just different parameter draws) whose agreement increases confidence in a cascade warning, verified against the ground. Such a demonstration was not found; the point is a design rule, not an empirical claim of this derivation.

### F8 - What survives, with mode attached

| claim | mode | figure |
|---|---|---|
| A model run is a substituted habitat and proves wiring, not capability | `general` (structural) | Fig 11 :70 |
| More scenarios in one closure cannot supply a missing mechanism | `specified`, falsifiable | Fig 6 :21; Fig 8 :32 |
| A clean result is not proof of absence | `specified` | Fig 9 :44; Fig 8 :39 |
| The channel decays during crisis; stale, dropped, saturated and pooled readings are the failure mode | `specified` | Fig 10 :24-29 |
| First-order contact scoping misses third-order cascades | `specified` | Fig 11 :52 |
| A cascade is a cycle and a compounding remainder | `general` | Fig 12 :121; Fig 13 :31 |
| Independence, not volume, is what makes multiple tests informative | `general` | Fig 7 :35-36; Fig 2 :42 |
| The stress test returns a shape under stated assumptions, not the occurrence | `specified` | Fig 9 :32 |
| The specific mechanism that will change is not named by the figures | `general` | Fig 9 :32; Fig 13 :134 |

---

## 4. Pre-registered refuter

Written before the conclusion, per the standing rule that "a falsifier written before the run is a design instrument." The strong verdict (NO to strong anticipation) is refuted if any of the following holds:

1. A stress test whose model explicitly permits the mechanism and the network to change (time-varying links, endogenous behavioural adaptation, changing recovery) issues a cascade alert that is then confirmed against the ground out of sample, with the residual R closing. This is the direct ground test.
2. A formal demonstration that a stress-test frame's mechanism vocabulary is closed under the crisis operations (entry, adaptation, fire sale, rewiring), so inward refinement suffices and no import is owed.
3. A sealed-room argument: a finite, complete enumeration of cascade mechanisms and contacts for a real system, which would let a clean result count as proof of absence.
4. An instrument that keeps the anchor reachable throughout a real crisis (no stale percepts, no dropped transients, no saturated or pooled metrics) and whose readings remain in contact with outcomes.

If any fires, the verdict is withdrawn. Until one is run, nothing here is labelled `grounded`.

---

## 5. Canonical usage check and the strain that was re-censused

Two usage rules were applied after the first four sections:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "the quotes are the authority, not this summary"; "a reading that makes one contradict another has misidentified its domain, not found a flaw"; and the framework returns "a shape, not a name," stopping at instrument limits with a recorded lineage.
- `FRAMEWORK/figures/THE_FORMULA.md`: steps 2 (REFUTED before mint), 5 (settle at the ground), 7 (SEARCHED / INWARD / OUTWARD as three distinct questions), and the mode rule.

**Strain examined and resolved.** The ecology early-warning-signal literature suggests rare transitions sometimes *can* be anticipated from generic signals (Scheffer et al. 2009, Nature: "work in different scientific fields is now suggesting the existence of generic early-warning signals that may indicate for a wide class of systems if a critical threshold is approaching"). Read naively, this strains the NO verdict. Re-census resolves it: that literature governs a system approaching a fixed bifurcation with a stable mechanism and a known state variable. This question governs a system whose mechanism and structure change during the crisis, so the state variable and the threshold themselves move. Different objects, so no strain after re-census and no verdict flip. The record keeps both: early warning is possible in the narrow domain, and that is a shape, not a mechanism-changing anticipation. The empirical limits are recorded too (Dakos et al. 2016: low reliability and low agreement among indicators).

**Search / inward / outward kept distinct (Formula step 7).**
- SEARCHED: more scenarios, finer loss accounting, more Monte Carlo draws. Same closure, same wall. Asked first and cheapest; it cannot supply a new mechanism (F2).
- INWARD: extend the instrument from one already returning something, for example add a higher-frequency liquidity or funding-stress reading (the OFR Financial Stress Index is a public example of an instrument already returning a reading). Fails by refining forever on an axis that cannot carry a mechanism change.
- OUTWARD: describe R in effect terms and find a frame whose closure predicts its shape, then import with a source gate and shadow test. The network-science, complex-systems and ecology sources are candidate frames, not corroboration of a shared pool.

These are three tracks, never read against one another. Importing against a mere budget limit would add an atom that was not needed (Fig 6 :51-52).

---

## 6. Retractions and confirmations

| earlier reading | status after canonical check |
|---|---|
| "Stress tests cannot anticipate anything" | **Retracted as overstated.** The figures and the BIS review both allow a narrow, useful role: crisis management, scenario discipline and noting where models fail. The verdict is bounded NO to *strong, out-of-sample anticipation of a mechanism-changing cascade*, not NO to all uses. |
| "A clean result is a warning" | **Refused.** Fig 9 :44 and Fig 8 :39. A nil result is silence about absent mechanisms, not evidence of safety. |
| "The missing thing can be found by more scenarios" | **Refused after re-census.** Fig 8 :32 and Fig 6 :22. It would be novel only relative to the model's atoms. |
| Ecology early warning conflicts with the verdict | **Not a conflict.** Re-census: fixed-bifurcation systems with stable mechanisms are a different domain from mechanism-changing crises. Recorded as a narrowed shape, not discarded. |
| World sources are independent corroboration | **Corrected.** Several share the central-banking and complex-systems evidence pool. Overlap is declared per row in `10_source_ledger.csv`; agreement within a pool is one witness, not two. |
| This derivation settles the question | **Refused.** Simulated derivation, internal consistency only. It reports what the figures would say; it is not a ground reading. |

## 7. Recommendation

1. Do not present a clean stress-test result as evidence that a rare cascade is absent (F4). Present it as a shape under stated assumptions (Fig 9 :32).
2. Enumerate the habitat outward past direct exposures (Fig 11 :44, :52), including common assets, funding links and cross-system feedback.
3. Keep the anchor reachable (Fig 10 :29): update mechanisms and graphs as they move; treat the test as a probe, not a verdict.
4. Buy independence between rooms (Fig 7 :36, Fig 2 :42), not volume within one room.
5. Run the round trip and measure R_T (Fig 4 :30): record what the model abstraction dropped when mechanisms changed.
6. Bind the sought-for cascade shape as an ordinary term before the run (Fig 5 :65-66; Formula "Direction"), so the preference is refusable.
7. Lead outreach with the residual and the refuter, with the links held back until stage 2.

**Final verdict of the audit:** bounded NO, `specified`, ungrounded, candidate. Triangulated across Fig 11 :70 (test harness), Fig 6 :21 / Fig 8 :32 (idempotent closure) and Fig 10 :24-29 (channel decay) with low conceptual overlap between them; `single-source` for the DDT third-order cascade example (Fig 11 :52) corroborated only in kind by the finance literature.
