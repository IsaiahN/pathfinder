# Figure-grounded audit: when does a local shock remain contained?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, 2026-11-19), read 2026-11-22: "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §7.

**Sources.** Primary: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, cited as Fig N :line), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`. Secondary: the sources in `10_source_ledger.csv`, all opened 2026-11-22.

---

## 0. The residual under audit, stated in effect terms

The question is: when does a local shock remain contained, and when does it trigger a cascade across a network?

Stated as an effect, not a topic:

> A shock arrives at one node, region, or slot s. Ask what the per-slot residual R_s does as the shock is composed outward through contact with neighbours. Two outcomes are possible. (A) R_s trends down to zero at each step: only s, or a small neighbourhood, ever goes live, and the disturbance is **contained**. (B) R_s persists and does not trend down; it compounds through the chain, more slots cross their threshold, and the disturbance is a **cascade**.

What an answer would look like, bound as an ordinary term (Formula "Direction"): a rule that decides, for a given network and shock, which of A or B occurs, and that names the conditions whose conjunction is required. The sought-for shape is written down here before the derivation so it can accrue a residual and be refused: **"a decision rule over four separable conditions, returning a shape rather than a universal number."**

**Arity / symmetry / scale of R:**

- **Arity:** one slot per tracked object. Fig 1 :19 "The residual is indexed by object slot, not aggregated." A "local shock" is exactly this: a live slot inside an otherwise quiet system. Fig 1 :20 note: "a global residual near zero with one live slot is a legal state and not an inert one."
- **Symmetry:** transmission is ordered and directed, not a symmetric join. A shock passes from s to a neighbour along a relation with a direction; the reverse path need not carry it. This is the sequence/production side of Fig 12, not the symmetric bonds.
- **Scale:** first order at the seed, second and higher order as the remainder compounds outward through the habitat (Fig 11 :43-44). Containment is a claim about where the outward enumeration stops.

---

## 1. Domain census (before choosing any figure line)

One line per domain: actors / currency / anchor. No nameable anchor means it is not yet a domain.

| domain | actors | currency | anchor (nameable?) |
|---|---|---|---|
| **D1 Network topology and contact** | nodes, edges, the seed slot s, neighbours | transmission of residual along edges ("influence travels", Fig 13 :24) | yes: the measured cascade footprint, which nodes crossed threshold and in what order |
| **D2 Boundary / containment** | the boundary, the seed, the filter, modules | what passes the boundary versus what is filtered | yes: a measured event, whether the boundary held over the observation window |
| **D3 Correlation / common cause** | nodes-as-frames, shared source or shared evidence pool | agreement, correlation, codefault | yes: measured independence, whether failures coincide with no path between them |
| **D4 Feedback / amplification** | loops, the compounding remainder, thresholds | residual per step (growth or decay) | yes: the measured per-step trend of R_s (sign and slope) |

**Partition or union.** The four domains are a **union of overlapping conditions**, not a partition of one problem. Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." A case can be in two conditions at once (a highly connected *and* correlated pair), and that intersection is categorically different from either alone (Fig 9 :57 "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound"). Verdicts are therefore kept per domain and never averaged.

**Order by dependency (Fig 3).** The chain runs: (1) perception: resolve R per slot; (2) vocabulary: have terms for what an edge affords (can it carry the residual?); (3) objective: say what counts as "contained" in our own terms (R_s trends down); (4) planning: a route through the four conditions; (5) learn and carry. Fig 3 :19 "Optimising a link that already works cannot rescue one that does not." A reading below a broken link is a reading of nothing (Fig 3 :22-23). So: measure per-slot residuals **before** declaring containment; describe the residual before selecting a frame (Fig 9 :27-28 "describe it before you go looking, or any frame you pick will seem to fit").

---

## 2. Figure census (verbatim, quoted before concluding)

| figure | verbatim line | bearing | verdict |
|---|---|---|---|
| Fig 1 :19 | "The residual is indexed by object slot, not aggregated." | the shock is per-slot; aggregate thresholds erase it | governs D1 |
| Fig 1 :22 | "Aggregating across slots is how a live signal disappears into an average." | a global "everything is fine" reading hides the live slot | governs D1 |
| Fig 2 :19-21 | "they never talk, and still agree" / "so the agreement is the pool talking, not two frames confirming each other" | correlated failure without transmission is a common cause, not contagion | governs D3 |
| Fig 2 :31-32 | "Independence, between two frames, is how little they draw on the same evidence." | independence decides whether co-failure means anything | governs D3 |
| Fig 2 :40 | "agreement about the world is worthless when the agreeing frames share an evidence pool" | pooled failures are one witness, not two | governs D3 |
| Fig 2 :42 | "Buy independence in proportion to the cost of being wrong." | sets the budget for discriminating contagion from common cause | governs cost |
| Fig 4 :21 | "The membrane is the boundary between the sizes, and the rule about what may cross it. Not a wall: a filter with a direction." | containment is a directional filter, not a wall | governs D2 (analogue, strain named) |
| Fig 5 :59-60 | "a term whose residual PERSISTS AND DOES NOT TREND DOWN" | the shrinking test with opposite sign names the cascade | governs D4 |
| Fig 7 :12-13 | "same closure, handed along; agreement compounds, evidence does not" | a chain of agreeing nodes is one long room, not evidence of propagation | governs D3 |
| Fig 8 :39 | "So a search that finds nothing is never a proof of absence." | absence of an observed cascade does not prove the network is safe | governs honest stop |
| Fig 8 :45 | "Two frames together reach what neither reaches alone." | two low-overlap instruments beat one global metric | governs method |
| Fig 9 :32 | "you get a kind of thing, never the answer itself" | the figures give a shape, not a universal critical number | governs whole question |
| Fig 9 :54-56 | "unbundle before you search again" / "A single lever clears the region where only one condition holds and leaves the intersections standing" | no single lever separates containment from cascade across all conditions | governs union reading |
| Fig 9 :60 | "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." | a centrality score is a budget filter, not a verdict | governs method |
| Fig 10 :42 | "A verifier that can reconstruct the claim cannot verify it." | outreach must lead with the refuter | governs outreach |
| Fig 11 :43-44 | "The habitat is enumerated, never composed." / "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering." | the cascade is the radius at which the outward enumeration stops mattering | governs D1 |
| Fig 11 :52-53 | "And contact cascades." / "first-order enumeration, second-order effect, and the residual that mattered was three steps out." | scoping to direct contact misses the effect that matters | governs D1 |
| Fig 11 :66 | "Isolation is not removal of the habitat. It is substitution of one habitat for another." | "cutting the edge" is substituting a habitat, with inherited actors | governs D2 |
| Fig 12 :121 | "The sign of the loop decides whether it closes, and a chain cannot close by construction." | feedback sign, not connectivity alone, decides amplification | governs D4 |
| Fig 13 :24 | "that entities relate, and influence travels" | network is the structure over which the residual travels | governs D1 |
| Fig 13 :31-32 | "a remainder compounding through a chain that amplifies is chaos" | cascade is a compounding remainder, not a threshold event alone | governs D4 |
| Fig 13 :74 | "Everything else is a composition across the two kinds, never within one." | constrains how state and structure compose in a cascade path | governs D1 (structural limit) |

**Strain test.** Fig 4 :21 governs the boundary **between sizes** (the text says "between the sizes"). Applying it to a topological boundary between modules is a cross-scale analogue, not a direct application. Per the canonical usage rule ("a reading that makes one contradict another has misidentified its domain"), this strain sends D2 back to census: D2 is marked **single-source analogue**, not triangulated, and the point is carried as a `specified` analogy, not a figure-derived law. The cleaner D2 support is Fig 11 :66 (isolation as substitution), which governs habitat boundaries directly. No other line needed forcing.

---

## 3. Findings F1 to F9

### F1 - The shock is a per-slot residual; a global metric erases it (governs D1; triangulated)

Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." Fig 1 :20 "a global residual near zero with one live slot is a legal state and not an inert one."

A network can have a healthy-looking average load, average degree, or average infection rate while one slot is live. "Is the system stable?" asked globally is the wrong question; it averages away the only signal that says where to look. The correct first measurement is a vector of R_s over slots, not a scalar.

**Refuter:** exhibit a case where the decision to contain or cascade is correctly made from a global scalar but not from the per-slot vector. Then the per-slot rule is not necessary. (I did not find one; world sources in `09` use per-node or per-slot states too.)

### F2 - Cascade is a remainder that persists and does not trend down (governs D4; triangulated)

Fig 13 :31-32 "a remainder compounding through a chain that amplifies is chaos" and "the detail a crossing discards reappears above it as noise". Fig 5 :59-60 "a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at, which is the same shrinking test the selector already runs, read with the opposite sign." Fig 12 :121 "The sign of the loop decides whether it closes, and a chain cannot close by construction."

This is the sharpest figure-grounded result in the audit. The Tether already has a shrinking test for a live residual. Read with the opposite sign, it gives the operational distinction:

- **contained:** R_s trends down to zero as the disturbance passes outward, so the chain's remainder dies;
- **cascaded:** R_s persists flat or grows across steps, so the remainder compounds and the loop closes.

World corroboration (secondary, low overlap): Scheffer et al. 2009 Nature, "as the eigenvalue approaches zero, the impacts of shocks do not decay, and their accumulating effect increases the variance of the state variable" (critical slowing down). That is the same effect stated in dynamical-systems language. The agreement is across domains (earth systems / ecology versus a metatheory), so it is weak corroboration, not the same pool talking.

**Refuter:** a network in which every per-slot residual trends monotonically down yet a global cascade still occurs. That would break the shrinking-test criterion and send D4 back to census.

### F3 - Containment is a directional filter, not a wall (governs D2; single-source analogue, strain named)

Fig 4 :21 "The membrane is the boundary between the sizes, and the rule about what may cross it. Not a wall: a filter with a direction." Fig 4 :22 "Only methods cross up. Only head starts come down."

The practical reading: a module boundary, a circuit breaker, a quarantine, or a firebreak is not a perfect wall. It is a filter with a direction, and what it lets through is what composes at the next level. So "contained" never means "nothing crossed" in an absolute sense; it means the filter passed only what the next level could absorb without going live. Fig 11 :66 "Isolation is not removal of the habitat. It is substitution of one habitat for another." Cutting an edge substitutes a new habitat and inherits actors you did not choose, so isolation is permanent work, not a solved state.

**Strain stated, not hidden:** Fig 4 is about scale boundaries; a topological boundary between modules is an analogue. D2 is therefore single-source analogue. The world literature sharpens the point: Pastor-Satorras, Castellano, Van Mieghem and Vespignani 2015 (Rev Mod Phys) report "the presence of communities tends to confine the outbreak around the initial seed and hinders the transmission to other communities" for SI/SIR, while Nadini et al. 2018 (Scientific Reports) find modularity "speeds up SIS phenomena" and lowers the SIS threshold. So modularity is a filter whose sign depends on the process; it is not a universal wall. This is a world-source correction to an over-reading, recorded in §7.

**Refuter:** a demonstration that a boundary can be a perfect wall (nothing crosses at any scale and no actors are inherited on substitution). Then the filter rule is wrong for D2.

### F4 - Correlated failure is not contagion (governs D3; triangulated)

Fig 2 :18-21 "one evidence pool" / "they never talk, and still agree" / "so the agreement is the pool talking, not two frames confirming each other". Fig 2 :31-32 "Independence, between two frames, is how little they draw on the same evidence." Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool." Fig 7 :12-13 "agreement compounds, evidence does not." Fig 8 :29 "low overlap: B does not draw on A's evidence."

Two nodes that fail together may share a hidden source (common asset, common supplier, common software, common bias) rather than having transmitted the shock between them. Observing co-failure does not decide which. The discriminating quantity is independence: do the two frames draw on the same evidence? If they do, their agreement is the pool talking, and counting them as two cascaded nodes is double-counting one witness.

World corroboration (low overlap, economics/finance): Caccioli, Barucca and Kobayashi 2017 (J Comput Soc Sci), "a fall in the price of an asset will simultaneously affect many banks holding the same (or a correlated) asset. Such a simultaneous shock to multiple banks has a potential to accelerate the traditional contagion process through interbank exposures." Acemoglu, Ozdaglar and Tahbaz-Salehi 2015 (AER) show "the same factors that contribute to resilience under certain conditions may function as significant sources of systemic risk under others."

**Refuter:** a case where two nodes with a proven shared source and zero path between them are nonetheless demonstrated, by intervention, to be transmitting the shock to each other. Then shared-pool detection is not sufficient for D3.

### F5 - It is a union of conditions, not one threshold (governs whole question; triangulated)

Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55-56 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." Fig 9 :57 "a case in two conditions is not a harder case of either."

"Contained or cascaded" is not one hard question. It is a compound of D1 topology, D2 boundary filter, D3 independence, and D4 feedback sign. Any one lever, for example raising a node's threshold, clears only the region where that single condition holds; the intersections (well connected *and* correlated, or well filtered *and* positively fed back) remain and are categorically different. The world literature agrees from an independent field: Acemoglu et al. 2015 (AER) find a "phase transition" where density of connections helps at small shocks and harms at large ones; Li and Zhang 2024 (QREF) find "the expected loss of the network is not monotonically related to the number of partners."

**Refuter:** a single scalar (for example a reproduction number or degree threshold) that reliably separates contained from cascaded across all four conditions. Then the union claim is false and the question collapses to one lever.

### F6 - The figures give a shape, not a universal number (governs whole question; triangulated)

Fig 9 :32 "you get a kind of thing, never the answer itself." Fig 9 :30-31 "your words are borrowed too, so describe the effect rather than the cause." The canonical README states the framework returns "what a missing thing would have to look like (a shape, not a name)". Fig 13 :134-135 "Unreachable is a verdict here, not a silence, It cannot say which primitive is missing, because naming it would mean already holding it."

No figure line returns the critical infection rate, the percolation threshold, or R0 > 1. Those are ground quantities, measured in a particular network with a particular shock and instrument. The Tether provides the shape any answer must have and the conditions that must be measured; it does not provide the number. This is the honest limit of the method.

**Refuter:** a derivation of a universal numeric cascade threshold from the six-term set and its bond rules alone, verified against a ground measurement. Then the shape-not-number limit is wrong for this question.

### F7 - The habitat must be enumerated outward, not scoped to direct contact (governs D1; triangulated)

Fig 11 :43-44 "The habitat is enumerated, never composed." and "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering." Fig 11 :52-54 "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out." Fig 11 :49-51 "An actor's valence is relative to the residual, not a property it carries."

A shock's relevant habitat is not its immediate neighbours. It is everything in contact with R_s, then what contacts those, outward until the cascade stops mattering. The effect that decides containment may be three steps out. An actor that is a benefactor for one residual is a malfactor for another, so there is no standing list of "safe" nodes; valence is relative to the residual. This is why a static centrality ranking is a budget filter, not a verdict (Fig 9 :60).

**Refuter:** a case where enumerating only first-order contacts predicts containment and cascade as well as full outward enumeration. Then the second-order effect is idle here.

### F8 - Two low-overlap instruments beat one pooled metric (method; triangulated)

Fig 8 :45 "Two frames together reach what neither reaches alone." Fig 8 :50 "But shared atoms are not the signature." Fig 2 :42 "Buy independence in proportion to the cost of being wrong." Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

Because the question is a union of conditions with costly errors, the budget should be spent on independent measurements: one instrument for transmission (did the residual travel?), one for common cause (did the frames share a source?), kept low-overlap. Their agreement, if truly independent, is corroboration; their disagreement names which condition binds. A single pooled metric cannot do this.

**Refuter:** a single instrument that discriminates transmission from common cause at lower cost than two independent ones. Then the independence budget is misplaced for D3.

### F9 - What actually survives (the defensible residue)

| claim | mode | figure(s) | status |
|---|---|---|---|
| The shock is a per-slot residual; global averages hide it | `general` structural | Fig 1 :19, :22 | triangulated (D1) |
| Cascade is a remainder that persists and does not trend down; containment is the shrinking case | `specified` | Fig 13 :31-32, Fig 5 :59-60, Fig 12 :121 | triangulated (D4) + world (Scheffer 2009) |
| Contact cascades outward; enumerate the habitat beyond first order | `general` structural | Fig 11 :43-44, :52-54 | triangulated (D1) |
| Correlated failure is not contagion; independence decides | `general` structural | Fig 2 :19-21, :31-32, :40 | triangulated (D3) + world (Caccioli 2017) |
| Containment is a directional filter, not a wall | `specified` analogue | Fig 4 :21, Fig 11 :66 | single-source, strain named (D2) |
| It is a union of four conditions, not one threshold | `specified` | Fig 9 :54-57 | triangulated (F5) + world (Acemoglu 2015) |
| A universal numeric threshold is derivable from the figures | refused | Fig 9 :32 | F6 |

---

## 4. Pre-registered refuter (written before the conclusion)

"A falsifier written before the run is a design instrument, not only an honesty device." The shape claim is refuted if any of the following holds:

1. Every per-slot residual trends down to zero yet a cascade still occurs (breaks F2 / D4).
2. Two nodes with a proven shared source and no path between them are shown by intervention to be transmitting the shock (breaks F4 / D3).
3. A single lever reliably separates contained from cascaded across all four conditions (breaks F5 / the union reading).
4. A universal numeric cascade threshold is derived from the six-term set alone and confirmed at the ground (breaks F6 / shape-not-number).
5. A boundary is demonstrated to be a perfect wall at every scale, with no actors inherited on substitution (breaks F3 / D2).

If any fires, the relevant verdict is withdrawn, not smoothed over. Until one is run, nothing here is labelled `grounded`.

---

## 5. Recommendation

1. Lead with the shape and the refuter, not with a threshold number. The figures do not give the number (F6).
2. Measure R per slot. Refuse any verdict based on a global average (F1).
3. Distinguish transmission from common cause with two independent instruments before calling a co-failure a cascade (F4, F8).
4. Treat module boundaries as directional filters and expect to keep managing them (F3).
5. Unbundle the four conditions and look at the intersections first; a single lever will mislead (F5).
6. Figure 4 :25 "A recording carried upward looks like knowledge and is a description of one occasion." Send the generator (the conditions and the refuter), not a conclusion.

---

## 6. Canonical usage check

Two local sources govern how the figures may be used; both were read this session.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." It also gives the re-census rule: "a reading that makes one contradict another has misidentified its domain, not found a flaw" and the canonical limit: a shape, not a name. It states "Indiscernibility is not identity."
- `FRAMEWORK/figures/THE_FORMULA.md` step 7: "INWARD and OUTWARD are opposed; never read one against the other." Applied here: sharpening a per-slot instrument (INWARD) and importing an independent frame, for example the finance literature on common cause (OUTWARD), are two tracks and are never read one against the other.

### Retractions and confirmations (kept visible)

| earlier reading in this derivation | status after check |
|---|---|
| "containment means the boundary is a wall" | **Retracted.** Fig 4 :21 says "Not a wall: a filter with a direction." Reformulated as a directional filter. |
| "Fig 4 membrane directly governs module boundaries" | **Retracted to analogue.** Fig 4 is about scale boundaries. D2 is marked single-source with a named strain; Fig 11 :66 carries the direct habitat-boundary support. |
| "modularity always contains a shock" | **Retracted on world evidence.** RMP 2015 says communities confine SI/SIR; Nadini 2018 says modularity speeds up SIS and lowers its threshold. This strengthens F5 (sign depends on process); it is not a figure conflict. |
| "the figures give the cascade threshold" | **Refused.** Fig 9 :32 gives a shape. The number is ground work. F6 stands. |
| "co-failure proves contagion" | **Refused.** Fig 2 :19-21 and :40. Common cause is a named collapse. F4 stands. |
| "a global stability metric is enough" | **Refused.** Fig 1 :19, :22. F1 stands. |
| Fig 13 versus the compounding-remainder reading | **Not strained.** Fig 13 :31-32 names the compounding remainder as chaos and Fig 13 :24 names the network as the travel structure; different clauses, same domain. |

### Round trip to the formula (qualitative R_T)

- **Sent up (x):** the verbatim figure set, chiefly Fig 1 :19, Fig 5 :59-60, Fig 11 :43-44, Fig 9 :54-57.
- **Abstracted (T_A):** "per-slot residual; shrinking test decides containment; four conditions in a union; shape not a number."
- **Concretised (T_E):** a concrete network decision, for example a power grid with a given breaker policy.

**R_T is nonzero and is not assumed zero.** What the shorthand drops: (i) the direction of the membrane filter (a wall reading loses it); (ii) the outward enumeration radius, which is case-specific; (iii) the independence measurement needed to separate common cause from contagion; (iv) the sign of the feedback loop, which can reverse the modularity effect. What survives cleanly: per-slot indexing and the shrinking test. R_T was not measured numerically because no ground reading exists; it is recorded as the enumerated set of dropped constraints. Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning."

### Updated verdict

The shape survives: containment versus cascade is decided by the sign of the per-slot residual's trend as it is composed outward through contact, under four separable conditions whose intersections matter. What does not survive: any single universal threshold, any global-scalar verdict, any identification of co-failure with contagion, and the wall reading of a boundary. Strains after re-census: one, D2's membrane analogue, named and kept as single-source. Verdict on the whole: `specified`, ungrounded, candidate.
