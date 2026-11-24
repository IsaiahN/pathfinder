# Figure-grounded audit: when do community boundaries reduce contagion, and when do they sustain it?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status: a simulated derivation, not a ground reading.** *The Recursive Self-Improvement Trap* (essay opened 2026-11-22) says LLMs "can quickly simulate an approximate answer/output" and that "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Sources.** Figure lines from `FRAMEWORK/reference/03-FIGURES_TEXT.md` only, cited `Fig N :line`. World sources opened on 2026-11-22, listed in `10_source_ledger.csv`. Canonical usage from `FRAMEWORK/reference/FIGURES_README_canonical.md`. Loop from `FRAMEWORK/figures/THE_FORMULA.md`.

---

## 0. The residual, in effect terms

Two observations must both be explained:

- Drawing a cut between densely linked groups is often reported as slowing an epidemic, an information cascade or a behavioural adoption.
- The same cut is also reported as letting a pathogen or behaviour persist at low level, hide inside a group, and reappear elsewhere after a gap.

So the residual is not "how strong is community structure." It is: **what is different in the contacting conditions when a boundary acts as a barrier, and what is different when it acts as a reservoir?** Arity, symmetry and scale:

- **Arity.** The boundary is a partition relation over nodes (membership plus a bridge relation). Contagion is a transmission relation of order 1 (one exposure suffices) or order k greater than 1 (several exposures required). Fig 13 :24 names the substrate: "that entities relate, and influence travels."
- **Symmetry.** Crossing is directed: source group to target group. Simple transmission is effectively reversible, threshold transmission is not. Fig 13 :36: "adjacency is not duration, an ordering is not a pathway, a pathway is not a direction." A path existing and a direction being available are different facts, so counting bridges and measuring directed transmission are different instruments.
- **Scale.** Within-group contact is first order (node to node). Between-group contact is second order (group as meta-node, then group to group). Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."

What an answer would look like, bound as an ordinary term before the search (Formula step "Direction"): **a rule that names the kind of thing crossing the boundary, the order of the composition, and the overlap of the closures on either side, and that predicts the sign of the boundary's effect from those three.** This is a shape, not a numeric threshold.

---

## 1. Domain census (before any figure line is chosen)

| domain | actors | currency | anchor | no anchor? |
|---|---|---|---|---|
| D1 structure (the partition) | nodes, within-group edges, bridges, overlapping members, groups as meta-nodes | edges, path length, modularity, membership overlap | the measured adjacency or contact matrix | anchored |
| D2 dynamics (the process) | infectious and susceptible nodes, exposures, threshold q | infection events, reproduction number, prevalence, extinction or persistence | an outbreak curve, a contact-tracing record, an experiment | anchored |
| D3 the boundary itself | bridges, boundary nodes, high-betweenness nodes, membership overlap | **what** crosses (a live case versus a mere signal), direction, crossing rate | measured cross-boundary transmission events | anchored |
| D4 verification | researchers, models, panels of readers | agreement versus residual | the ground (outbreak data), never agreement | anchored |

**Partition or union.** D1 is a partition only in the simplified non-overlapping case. In the general case communities overlap, so the problem is a union of conditions, not a list. D2 splits into at least two conditions, simple and complex contagion, and into two orders, first and second. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :57: "a case in two conditions is not a harder case of either." The honest answer is therefore two regime verdicts, kept separate and never averaged.

**Dependency order (Fig 3).** D1 before D3 before D2 before D4. You cannot characterise a boundary before the partition is measured; you cannot predict the effect before the order of contagion is specified. Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." Tuning a transmission parameter cannot rescue an unmeasured community partition.

**Strain test applied before concluding.** An early draft tried to make Fig 4 mean "a boundary blocks disease." That strains: Fig 4 governs what crosses a scale membrane in a search system, not literal pathogens. Re-census put the boundary itself in D3 and the question became *what kind of thing crosses*, which the figure answers at low strain. The re-census is recorded in section 6.

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual per object slot; global averages hide the live signal | modularity Q is a budget filter, never a witness |
| 2 The Ground | anchor, independence, correlation valence | agreement between models is one pool, not corroboration |
| 3 Dependency Chain | order by dependency; a reading below the break reads nothing | structure first, process second |
| 4 The Membrane | the boundary as a directional filter, not a wall | governs D3 directly |
| 5 Mint Pipeline | guards as a product; acceptance as a bargain | no new primitive is needed here |
| 6 Closure / Reachability | no escape of closure without contact with a differing closure | governs the reduce regime |
| 7 Room Chain | low overlap between rooms; a chain of mirrors is one long room | governs handoff between groups |
| 8 Union Surplus | low overlap, independence, residual first | governs overlapping membership and corroboration rules |
| 9 Leave / Arrive | union versus partition; describe before looking | governs the regime split |
| 10 Ground Maintainer | channel decay; carry residual, not source | governs outreach, not the mechanism |
| 11 The Habitat | contact cascades; isolation substitutes a habitat | governs the sustain regime and interventions |
| 12 The Bond | arrangement is substance; catalyst, cycle, order, two currencies | governs both regimes and the order split |
| 13 Minimum Viable Set | network carries influence; gradient is spendable difference; cross-kind composition | governs the division between structure and process |
| Operators table | comparison is a threshold relation, not a conjunction | threshold contagion is a comparison, not a sum |
| Symbols table | `R` is per slot; habitat is enumerated | keep per-community residuals |

---

## 3. Findings

### F1 — A boundary is a filter with a direction, not a wall (shape claim, decisive)

Fig 4 :21:

> **"The membrane is the boundary between the size and the rule about what may cross it. Not a wall: a filter with a direction."**

The exact figure line reads "between the sizes" (Fig 4 :21). Quoted here in full:

> **"The membrane is the boundary between the sizes, and the rule about what may cross it. Not a wall: a filter with a direction."**

Fig 4 :22:

> **"Only methods cross up. Only head starts come down."**

A community boundary does not simply stop or allow "contagion." It discriminates by **type of thing**. In D3 terms, a live infectious case that seeds a new local outbreak is a **head start**: it makes the next local search cheaper, because the receiving group need not rediscover the state from scratch. A signal, an observation, an alert, or a model update is a **recording**: it changes what a group believes without carrying the infectious state. A boundary that passes people or cases sustains spread; a boundary that passes only information reduces it. The same physical cut, different crossing rule, opposite sign.

Fig 4 :25-26: "A recording carried upward looks like knowledge and is a description of one occasion. Replayed downward, it produces a system that repeats a past success and cannot produce a new one." Applied here: a warning that crosses without a case is a recording. It cannot produce a new outbreak.

**Refuter:** show a boundary where a signal alone, with no live case and no exposure event crossing, reliably starts a new chain of transmission in the receiving group. Then the head-start/recording distinction fails.

### F2 — Structure and process are two different substrates, and mixing them is the standing error

Fig 13 :24: **"that entities relate, and influence travels."** Fig 13 :22: **"a difference that can be spent."** Fig 13 :36: "adjacency is not duration, an ordering is not a pathway, a pathway is not a direction."

- The network (D1) supplies adjacency: who can reach whom. Counting bridges measures this.
- The gradient (D2) supplies directedness: a susceptible/infectious difference that can be spent in a transmission event. Measuring reproduction or exposure counts this.
- Fig 13 :10 lists space as "near, far, between, contained"; "contained" is the community, "between" is the bridge. These are states, not the process.
- Fig 13 :74: "Everything else is a composition across the two kinds, never within one." A bridge (structure) plus a spendable difference (gradient) compose into a crossing. Neither alone is a contagion.

A model that reads modularity off adjacency and calls the result an epidemic forecast has composed within one kind. It has a state and no structure to spend it through, or a structure and no difference to drive it.

**Refuter:** demonstrate a crossing event in which neither a structural connection nor a spendable susceptible/infectious difference is required. Under the six-term set this is not available, so the refuter would break the substrate, not just this reading.

### F3 — The reduce regime: no contact with a differing closure

Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**

Fig 8 :32: **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."**

If bridges are too sparse to constitute contact with a different closure, the process exhausts what the local closure reaches and stops. It does not matter how long it runs. This is the barrier regime, and it requires two additional conditions:

1. The contagion is first order, so one crossing would suffice if a crossing existed. Then the number of bridges is the whole bottleneck.
2. The local spendable difference is exhausted faster than a bridge is used (Fig 13 :22, a difference that can be spent). Once the within-group gradient is spent, there is no directed pressure left to carry across.

World corroboration: Qian and Asllani (arXiv:2504.05653, 2025) report that "highly connected groups accelerate and amplify outbreaks, while less connected ones dampen spread." The Wikipedia complex contagion page reports that weak ties and small worlds are good for simple contagions. Both are consistent with a bridge count bottleneck for one-exposure spread.

**Refuter:** a first-order contagion reaching global prevalence in a network whose communities have no cross-boundary transmission events at all. That would break the closure claim.

### F4 — The sustain regime: catalyst, cycle, and head start

Fig 12 :119: **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."**

Bridge nodes and overlapping members are catalysts. They are reinfected because they belong to more than one closure; they survive their own use as a conduit and are available for the next crossing. A model that spends its bridges once cannot represent this. The arXiv search for community structure and epidemic spreading surfaced work on immunisation based on overlapping nodes (arXiv:2212.14884), which reports that "overlapping nodes play a major role in the epidemic process."

Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."**

Within-group reinfection is a cycle. Its sign decides whether the local state closes on itself as an endemic reservoir or dies out. A chain model cannot close by construction, so an SIR-style one-pass model structurally cannot represent a reservoir that reopens. This is why "same network, different model" can flip the verdict without any change in topology.

Fig 4 :22 again: "Only methods cross up. Only head starts come down." A live case crossing is a head start. The Contreras et al. household study (arXiv:2602.15447, 2026) reports that larger households "boost transmission by acquiring external infections more frequently and subsequently transmitting them back into the community" and that "mandatory interventions primarily modulate contagion between households rather than within them." That is a pump: the boundary modulates between, while the group acquires and re-exports. The boundary both slows and sustains, at different orders.

World corroboration for the threshold case: the Journal of Physics: Complexity listing for "Simplicial contagion in temporal higher-order networks" (Chowdhary et al., 2021) states that "critical mass effects can emerge even for infectivity values below the standard pairwise epidemic threshold, where the size of the initial seed of infectious nodes determines whether the system would eventually fall in the endemic or the healthy state." A dense group can therefore hold an endemic state that a pairwise model calls impossible. The boundary protects that state from dilution.

**Refuter:** a controlled experiment in which dense internal contact does not sustain prevalence below the pairwise threshold, with the bridge rate held fixed. That kills the catalyst/cycle reading.

### F5 — Contact cascades; isolation substitutes a habitat, it does not remove contact

Fig 11 :52-53: **"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."**

Fig 11 :44: "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."

Fig 11 :66: **"Isolation is not removal of the habitat. It is substitution of one habitat for another."**

A closure policy that closes the bridges between groups does not delete contact; it replaces a habitat. The group still has internal contact, still has its own gradient, and inherits actors the policy did not choose. Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves." Cutting a bridge changes contact only if it changes which differing closure is reachable. If the same actors meet in a different room, the residual moved with them.

This is also a warning about enumeration scope: the effect of a boundary may be three steps out. A direct-contact-only measurement of a boundary's effect is a first-order reading of a second-order quantity.

**Refuter:** a case where removing all cross-group contact between two populations leaves every internal contact, actor and condition identical, and the outbreak trajectories are provably unchanged. Under Fig 11 :66 that cannot happen, because the habitat was substituted; a demonstration that it did would break the isolation law.

### F6 — The two regimes form a union, not a point on one scale (regime split)

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :57: "a case in two conditions is not a harder case of either."

The Library of Babel essay (opened 2026-11-22) puts the same discipline as a search rule: "Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually to find their answers and then combine them in a satisfactory way."

So:

| condition | boundary effect | figure basis |
|---|---|---|
| one exposure suffices, bridges rare, local burn-out fast | reduces | F3 (Fig 6 :23, Fig 8 :32) |
| one exposure suffices, bridges pass live cases | sustains by reseeding | F4 (Fig 4 :22, Fig 11 :52) |
| several exposures required, bridges pass signals only | reduces, because reinforcement cannot cross | F1 + Operators table (threshold, not conjunction) |
| several exposures required, dense internal group holds a critical mass | sustains locally, protected by the cut | F4 (Fig 12 :121, :119) |

The apparent conflict between "weak ties spread simple contagion" (Wikipedia complex contagion) and "dense small groups boost respiratory transmission" (Contreras et al.) is **not** a conflict. It sends us back to the census: different order of contagion, different condition. Per the canonical usage rule, a reading that makes figures contradict one another has misidentified its domain, not found a flaw.

**Refuter:** a pre-registered cross-dataset test in which the simple/complex distinction does not predict the sign of the boundary effect. Then the union split is wrong and the regimes are one continuum after all.

### F7 — Per-community residual; modularity is a filter, never a witness

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."** Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

Mean modularity Q over a network is a cheap description. It can rank which systems to study first (a filter for the budget). It cannot tell you which community is still seeding (a witness for the verdict). A global attack rate near zero with one live community residual is a legal state, exactly as Fig 1 :13 permits a global residual near zero with one live slot. Any claim of the form "high modularity always reduces contagion" has averaged away the only signal that says where to look.

**Refuter:** show a case where an aggregated modularity value, with no per-community residual, correctly predicts the sign of the boundary effect on a new outbreak. Then the per-slot rule is not load-bearing here.

### F8 — Where the figures stop: the number is a gap, the shape is not

Fig 8 :39: "So a search that finds nothing is never a proof of absence." The canonical usage rule says the framework returns "what a missing thing would have to look like (a shape, not a name)" and stops "at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."

No figure line supplies a numeric crossover, a critical bridge density, or a modularity value at which the sign flips. There is no anchor reading in this derivation. That is a **gap on the number**, not on the shape. It is unreachable at this budget, not underivable in principle: an instrument, a controlled cross-boundary transmission experiment, could return it. Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something." The worse instruments already returning something here are the household transmission decomposition and the mesoscale metapopulation fits in `10_source_ledger.csv`.

A second limit comes from the Wikipedia community structure page: the detectability transition means that when within- and between-group connection probabilities become too close, community labels cannot be recovered better than chance even with optimal inference. If the boundary is not detectable, the question cannot be settled empirically. That is an instrument limit, not a silence.

**Verdict status per domain:** D1 `single-source` for the structure/process split (Fig 13 family, with Fig 12 for order); D3 `triangulated` for the filter-not-wall claim (Fig 4 membrane and Fig 11 isolation, low overlap); D2 `triangulated` for the sustain mechanism (Fig 12 catalyst/cycle and Fig 11 contact cascades, low overlap); D4 `single-source` at figure level for the union split (Fig 9), corroborated by world sources. No domain is `grounded`.

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach; the Recursive Self-Improvement Trap calls a written-out prediction the discipline that makes a preference refusable, and the exemplar's standing rule is that a falsifier written before the run is a design instrument.

The shape claim is refuted if any of the following holds:

1. A first-order contagion reaches global prevalence with zero cross-boundary transmission events (breaks F3, closure without contact).
2. A controlled experiment shows dense internal contact does not sustain prevalence below the pairwise threshold with bridge rate held fixed (breaks F4, catalyst and cycle).
3. A pre-registered cross-dataset test shows the simple/complex distinction does not predict the sign of the boundary effect (breaks F6, union split).
4. A single scalar predicts the sign monotonically with no interaction term across all four cells of the F6 table (breaks the union claim in a different way).
5. A signal with no live case crossing reliably starts a new transmission chain (breaks F1, head start versus recording).

If any fires, withdraw the regime claim and re-census. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with the shape claim and the refuter, not with modularity numbers. The number is the gap, not the answer (F8).
2. Describe the residual before picking a literature frame (Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit"). Do not start from "community structure" and then find a contagion model to fit it.
3. Split the question into the four cells of F6 before searching. A single model of one cell cannot answer the whole question.
4. Report per-community residuals, not a global attack rate (Fig 1 :19).
5. Treat modularity Q, tier labels and prestige as budget filters only (Fig 9 :60).
6. Send a generator (the derivation and the refuter), not a recording (a finished verdict). Fig 4 :22.

---

## 6. Canonical usage check and retraction log

Two local sources govern how the figures may be used, both opened this session: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/figures/THE_FORMULA.md`. Key sentences applied:

- "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."
- "a reading that makes one contradict another has misidentified its domain, not found a flaw"
- "what a missing thing would have to look like (a shape, not a name)"
- "Indiscernibility is not identity."

| earlier reading in this session | status after the check |
|---|---|
| "A boundary is a wall that stops contagion" | **Retracted.** Fig 4 :21 says a filter with a direction. The sign depends on what crosses. Re-census moved the boundary into its own domain D3. |
| "Modularity Q is the answer to the question" | **Retracted.** Fig 1 :19 and Fig 9 :60 make Q a filter for the budget, not a witness for the verdict. |
| "The two literatures conflict: weak ties help versus dense groups help" | **Not a conflict.** Re-census: different contagion order. Fig 9 :54 union split governs. Recorded in F6. |
| "The framework should supply the critical bridge density" | **Retreated to a gap.** The canonical usage rule limits the framework to a shape, not a name or a number. An instrument is owed, not a figure line (F8). |
| Isolation reading in F5 (Fig 11 :66) | **Corrected.** My first draft said isolation removes contact. The line says substitution of one habitat for another. A closure changes which actors are in play; it does not delete the habitat. |
| F1 quoted "between the size" on first draft | **Corrected to the verbatim** "between the sizes". Both forms are preserved here so the correction is visible. |

**Strains after re-census: none hidden.** One earlier strain (Fig 4 applied to literal pathogens) was resolved by moving the reading from D2 to D3. F8's missing number is a declared gap, not a smoothed-over strain.
