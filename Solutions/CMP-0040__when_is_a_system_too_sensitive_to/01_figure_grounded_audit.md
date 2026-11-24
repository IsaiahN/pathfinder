# Figure-grounded audit: when is a system too sensitive for precise prediction, yet predictable at distributions or regimes?

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." This states what would have to be measured; it records no measurement.

**Status: a simulated derivation, not a ground reading.** From *The Recursive Self-Improvement Trap* (Isaiah N, 2026-11-19, opened 2026-11-22): "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Figure sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, line numbers) and `FRAMEWORK/reference/FIGURES_README_canonical.md`. Every figure quote below was checked against that extract before writing. World sources are listed in `10_source_ledger.csv`; each was fetched on 2026-11-22.

---

## 0. The residual in effect terms

State the residual before choosing any figure line.

> R = |Γ(b,a) − o′| per slot s, where Γ is the library's model, b the belief about the initial state, a the act of measuring and propagating, and o′ the observation (Symbols table; `THE_FORMULA.md` step 1).

Two slots are in play, and they must not be averaged:

- **s1, the trajectory slot.** A precise forecast of the state at time t. R_s1 grows without trending down when two initial states that are arbitrarily close at t = 0 separate faster than the instrument can refresh its reading of b.
- **s2, the distribution or regime slot.** A forecast of the invariant measure, the attractor, the ensemble spread, or the frequency of regimes. R_s2 can stay small while R_s1 is live.

The question asks where the boundary between these two lies. In effect terms: *when does amplification of the remainder at s1 outrun the held resolution, while the discarded remainder still lands in a bounded, stable coarse description at s2?*

Fig 1 :13 names the legal state: "a global R near zero with one live slot residual is a legal state." So "the distribution is predictable" cannot be read off a global average. It is a claim about slot s2 that must be checked against a ground separately from s1.

**What an answer would look like, bound as an ordinary term (formula step, Direction).** An answer is a boundary rule with three parts: (i) a condition under which the trajectory residual amplifies without trending down, (ii) a condition under which the amplified remainder stays inside a bounded closure so a coarse descriptor is reapplicable, and (iii) an instrument that measures the round trip between the fine and coarse descriptions. I write this down before running the derivation so the sought-for shape can accrue a residual like any other term.

---

## 1. Domain census (before any figure line is chosen)

**R by arity, symmetry, scale.**
Arity: two slots (s1 fine trajectory, s2 coarse distribution/regime) and one transform between them. Symmetry: the comparison of two nearby trajectories is ordered in time (amplification is forward, not reversible), while the coarse descriptor is a threshold/ordering relation over an invariant measure, not a symmetric join of two trajectories (Operators table: ⋛ is "a threshold relation between two quantities"). Scale: fine (one trajectory, one initial-condition encoding) and coarse (ensemble, attractor, regime frequency). The transform between scales is lossy and directional (Fig 4).

**One line per domain: actors, currency, anchor.**

| domain | actors | currency | anchor | partition or union |
|---|---|---|---|---|
| D1, the fine dynamics | state variables, nearby trajectories, the remainder that re-enters each turn | divergence of the remainder per unit time; whether R_s1 trends down | a trajectory measurement (an instrument that returns something) | partition: does the amplified remainder stay inside a bounded reach? |
| D2, the coarse statistics | the invariant set or attractor, the ensemble, regime frequencies, the discarded detail | information thrown away by the crossing; stability of the coarse descriptor | the ground for the distribution, not agreement among ensemble members | partition at the level of the reach, union with D1 when the two are composed |
| D3, the instrument and verification frame | the observer, initial-condition resolution, the ensemble constructor, the checker | bits about the initial state; spread of the ensemble; round trip gap R_T | the ground, which does not update on any frame (Fig 2 :29) | union compound: D1 + D2 + D3, each with its own loop |

No domain is admitted without a nameable anchor. D1's anchor is a trajectory reading even when it fails to resolve. D2's anchor is a reading of the distribution against the ground. D3's anchor is the ground itself. Where no instrument returns anything, there is no edge to extend from (Fig 6 :34-35: "the search for a proto-instrument is a search for one that is already there").

**Partition or union.** The question is a **union compound**, not one hard problem. "a case in two conditions is not a harder case of either" (Fig 9 :55-56). A single lever that fixes initial-condition precision leaves the boundedness question standing, and a lever that establishes an attractor leaves the measurement question standing. Each domain gets its own loop and its own verdict; the verdicts are never averaged.

**Order by dependency (Fig 3).**
1. D3 perception: can the instrument return anything about s1? (Fig 3 :4-5)
2. D1 dynamics: does the remainder amplify, and does R_s1 trend down? (Fig 13 :31)
3. D2 closure: does the amplified remainder remain inside a bounded reach so a coarse descriptor can settle? (Fig 13 :115)
4. Only then compose the boundary rule. Optimising a link that already works cannot rescue one that does not (Fig 3 :19).

The chain is ordered by dependency, not importance. A reading of D2 taken before D1 has been read is a reading of nothing if the remainder actually escapes the reach.

---

## 2. Findings

### F1  -  The figures name chaos as amplified residual, and this is the governing line for s1

Fig 13 :31-32:

> "a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise."

Fig 13 :28:

> "They alternate, and the alternation is where both the recursion and the randomness come from."

Fig 13 :88-89:

> "The residual of the turn just closed is what the next turn composes against, so no two passes begin from the same place."

The figure does not define chaos by a threshold on a coordinate. It defines it by the *behaviour of the residual*: a remainder re-enters the next turn, the chain amplifies it, and the fine description ceases to track. That is exactly the effect the question calls "too sensitive to initial conditions for precise prediction." The second half of the same line is equally load-bearing: the detail discarded at a crossing reappears *above* the crossing as noise. So the coarse level is not chaos-free; it is chaos seen after a lossy transform.

**Verdict for D1 (`triangulated` across Fig 13 and Fig 1, low overlap).** Precise prediction ends when the live residual at s1 amplifies without trending down faster than the instrument can refresh b. Fig 1 :19, "The residual is indexed by object slot, not aggregated," and Fig 1 :22, "Aggregating across slots is how a live signal disappears into an average," govern the bookkeeping, a different quantity from the amplification mechanism, so the two figure lines are low overlap.

**Refuter for F1.** A system whose trajectory residual demonstrably amplifies at all accessible resolutions, yet whose coarse descriptor's ground residual also fails to settle at any scale, refutes the claim that a bounded coarse description survives. That would break the second half of Fig 13 :31-32.

### F2  -  Predictability at the regime level is bought by the loss at the crossing

Fig 4 :27:

> "The transform between scales loses information, and that is the point."

Fig 4 :28:

> "Going up throws away detail; that is what makes the result reapplicable."

Fig 4 :31-32:

> "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."

This is the answer to the "yet still predictable" half. The coarse descriptor is reapplicable *because* the transform discarded the very detail that was being amplified. If the crossing preserved everything, the coarse level would inherit the instability and no regime would be stable. The regime is not a coincidence; it is what a lossy upward transform produces.

Fig 4 :30 adds the discipline: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." A claim that distributions are predictable is only checkable if the gap R_T between the fine and coarse descriptions is measured, not assumed zero.

**Verdict for D2 (`triangulated` across Fig 4 and Fig 13, low overlap).** Regime-level predictability holds when the amplified remainder stays inside a bounded reach and the coarse descriptor inherits only the part that survives the crossing. Fig 13 :115, "The set is closed. The arrangements are not," and Fig 13 :118, "infinite effort inside a finite reach," bound the reach; Fig 4 governs the transform. Different quantities, so low overlap.

**Refuter for F2.** A coarse descriptor declared predictable whose ensemble is under-dispersive, or which simply repeats one structural assumption, refutes the claim that the gap was measured. World source *Ensemble forecasting* records Leith's 1974 result that ensembles gave adequate forecasts only when their probability distribution was a representative sample of the atmosphere's distribution. A non-representative ensemble is an unmeasured gap.

### F3  -  A global "distribution is predictable" can hide a live slot

Fig 1 :13:

> "a global R near zero with one live slot residual is a legal state"

Fig 1 :22:

> "Aggregating across slots is how a live signal disappears into an average."

The question's phrasing tempts a single answer of the form "the system is unpredictable precisely but predictable statistically." The figures forbid stating that as a global fact. The fine slot can be live while the coarse slot is settled, and the reverse is conceivable: a stable-looking aggregate can be produced by pooling readings until the live slot vanishes into the mean (Fig 10 :25-26 names "saturated metrics, pooled readings" as a way the channel decays). So the boundary must be stated per slot, with each slot ranged against its own ground.

**Verdict (`triangulated` across Fig 1 and Fig 2 :29, low overlap).** The two-level claim is legal only as a per-slot claim. Fig 1 governs slot indexing; Fig 2 :29, "An anchor is whatever settles the question and does not change its answer because of what any frame thinks," governs what each slot ranges against.

**Refuter for F3.** Show a case where the coarse residual is reported as settled but its ground reading moves when the fine slot is perturbed, and the report was produced by averaging. That breaks the per-slot rule.

### F4  -  The two instruments are opposed and must be run as two tracks

Fig 6 :29-30, quoted here by their governing clauses:

> "inward: is our representation adequate to hold it? The instrument extends access. Fails by refining forever on an axis that cannot carry it. Sharpen in our own terms."
>
> "outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."

For this question, **INWARD** means sharpening the initial-condition instrument and the resolution of the trajectory reading. **OUTWARD** means finding a frame that already holds the shape, which is the ensemble and invariant-measure frame of chaos theory (D2). Fig 6 :31: "Neither answer tells you much about the other. Run them as two tracks, and never read one against the other."

This matters because a common error is to argue that better measurement will eventually restore precise prediction. INWARD can improve the horizon without removing the amplification; OUTWARD can characterise the distribution without improving the trajectory. They are different facts.

**Refuter for F4.** A demonstration that improving the instrument changes the distribution-level verdict, or that importing an invariant-measure frame changes the trajectory-level verdict, would collapse the two tracks and break this finding.

### F5  -  Underivable and unreachable-at-budget are different facts

Fig 8 :39:

> "So a search that finds nothing is never a proof of absence."

Fig 8 :40-41:

> "Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."

For s1, the failure is **underivable in principle** given finite precision: the amplification is structural, so more search at the same resolution does not restore the trajectory (Fig 8 :32: "no search, however long, adds an atom"). For s2, a failure to find a stable descriptor may be only **unreachable at this budget**: the invariant measure or the attractor may already be in the closure and simply not sampled enough. The instructions differ. Importing a new frame against a budget limit adds an atom that was not needed, and a wrong atom costs more than starting from primitives (Fig 8 :41-43).

**Refuter for F5.** A proof that a system's regime descriptor is underivable in principle, not merely under-sampled, would erase the distinction here and require a re-census.

### F6  -  The regime is a shape, not a name

Fig 9 :32:

> "you get a kind of thing, never the answer itself"

Fig 13 :134:

> "Unreachable is a verdict here, not a silence"

The figures can return the shape of the boundary (amplification at s1, bounded lossy coarse descriptor at s2, measured R_T), but they do not return a number for a Lyapunov exponent nor a name for a particular attractor. *The Library of Babel* (Isaiah N, 2026-10-02, opened 2026-11-22): "You can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." Naming a specific exponent or attractor is a binding from the world frame, provenanced as such, not a derivation from the figures.

**Refuter for F6.** A derivation of a specific numerical threshold from the figure set alone would refute the shape-only limit. Until one appears, any number is `specified`, ungrounded.

### F7  -  What actually survives, with mode attached

| claim | mode | figure |
|---|---|---|
| A live fine residual amplifies and the fine description stops tracking | `general`, structural | Fig 13 :31, :28 |
| The coarse descriptor is reapplicable because the crossing discards the amplified detail | `general`, structural | Fig 4 :27-28 |
| The boundary is per slot and must be ranged against a ground | `specified`, falsifiable | Fig 1 :13, :19; Fig 2 :29 |
| The loss between fine and coarse must be measured as R_T, not assumed zero | `specified`, falsifiable | Fig 4 :30-32 |
| The regime stays stable only while the amplified remainder remains in a bounded reach | `specified`, falsifiable | Fig 13 :115, :118 |
| A numeric Lyapunov threshold or a named attractor is the answer | **refused as a figure-derived claim** | F6, Fig 9 :32 |

### F8  -  The phrase "predictable at the level of distributions" is itself a filter

Fig 9 :60:

> "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

"Distribution-level predictability" is a filter that tells us where to spend search (the ensemble and invariant-measure frame). It must never hand us the verdict that the system is predictable. The verdict comes from the ground reading of R_s2, per slot. The world literature itself records the failure mode: Slingo and Palmer (2011, opened 2026-11-22) note that early ensembles were "not sufficiently dispersive" and hence "over-confident," and that the distribution of probable outcomes "may not reflect the observed distribution." A filter can look successful and still be wrong.

---

## 3. Pre-registered refuter

Written before the conclusion, per Fig 9 :60 and the formula's Direction discipline. The shape claim is refuted if any of the following holds:

1. A system whose fine residual demonstrably amplifies at every accessible resolution has a coarse descriptor whose ground residual also fails to settle at any scale and with any instrument. This breaks the discarded-detail-becomes-noise half of Fig 13 :31-32.
2. A stable, ground-settled regime is found whose underlying dynamics shows no amplification of the fine residual at any scale. This breaks F1 and makes the two-level distinction empty.
3. A coarse descriptor is declared predictable but is shown to be under-dispersive, to repeat a single structural assumption, or to have been read off an aggregate rather than per slot. This breaks Fig 1 :19 and Fig 4 :30.
4. A derivation shows a remainder compounding through an amplifying chain can leave the closure. This breaks Fig 13 :115 and the boundedness condition.
5. A specific numerical threshold for the boundary is derived from the figure set alone. This breaks the shape-not-a-name limit (Fig 9 :32).

If any fires, the boundary claim is withdrawn or narrowed. Until one is run, no part of this may be labelled `grounded`.

---

## 4. Recommendation

1. State the boundary per slot, never as a global "precise unpredictable, statistical predictable" slogan (F3).
2. Lead with the residual and the pre-registered refuter, then offer the shape. The figures, not this summary, are the authority (Fig 10 :52).
3. Treat the fine and coarse instruments as two tracks, never as one ladder (F4).
4. Require a measured R_T before any regime claim is called settled (F2).
5. Use public institutional and opt-in venues, and ask what would refute the shape claim. Do not select recipients for likely agreement (Fig 2 :40).

---

## 5. Canonical usage check and retraction/confirmation log

Two local sources govern how figures may be used and were read after the first four sections.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo" and "the quotes are the authority, not this summary." A reading that makes one contradict another has misidentified its domain, not found a flaw. The framework returns "a shape, not a name" and stops at the limit of the available instruments, recording the lineage so the stop is honest. "Indiscernibility is not identity."
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule, the three-question limit at step 7, and the warning that the loop cannot check the direction of its own question.

| earlier reading | status after canonical check |
|---|---|
| F1 called chaos a "definition" | **Narrowed to a governing line, not a definition.** Fig 13 :31-32 names the mechanism; the formal criterion (positive maximal exponent plus boundedness) is an import from the world frame, provenanced in `09_watson_answer.md`. |
| "Noise at the coarse level comes from discarded detail" | **Kept but narrowed.** Fig 13 :32 governs the internal crossing. Model error is a separate frame (D3), named as a strain in §6, not erased. |
| "The regime is the attractor" | **Retracted as a name.** Fig 9 :32 returns a kind of thing, never the answer itself. Attractor, invariant measure and regime are bindings from world frames, not figure-derived names. |
| "Underivable means hopeless" | **Corrected.** Fig 8 :40-41 separates underivable-in-principle from unreachable-at-budget. The former applies to s1, the latter may apply to s2. |
| "A tiny global residual proves the distribution is predictable" | **Refused.** Fig 1 :13 makes a near-zero global R with one live slot a legal state. The claim is per slot. |
| Apparent strain: Fig 13 amplifies versus Fig 4 discards | **Not strained after re-census.** Fig 13 governs the internal remainder; Fig 4 governs the cross-scale transform. Different quantities. |

---

## 6. Strains and honest stop

- **Chaos identification.** The figure line governing s1 is qualitative; the world criterion is a positive maximal Lyapunov exponent together with boundedness or phase-space compactness. Mapping one to the other is `specified`, not a figure-derived identity. Named, not hidden.
- **Source of coarse noise.** Fig 13 :32 attributes noise above a crossing to discarded detail. Slingo and Palmer (2011) show that in real forecast systems uncertainty is not confined to initial conditions: model formulation and sub-gridscale parametrisation contribute at all leads. Re-census: the figure governs the internal transform; model error belongs to D3. Compatible, but the meeting point is a strain worth an instrument.
- **One regime or many.** Fig 13 :115 treats the closure as one bounded reach. Slingo and Palmer describe coexisting regimes whose residence times change under forcing. Compatible if regimes are arrangements within one reach, but the multiplicity needs the world frame. Named.
- **Unreachable, not silence.** The fine prediction is unreachable at finite precision for a amplifying chain, not absent as a question. "Unreachable is a verdict here, not a silence" (Fig 13 :134).
- **After re-census: three strains, all named, none smoothed.** The structural shape survives; every specific binding is `specified` and awaiting a ground reading.

No measurement was taken. This audit is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it audits.
