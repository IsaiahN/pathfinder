# Figure-grounded audit: threshold-based contagion and simple exposure contagion in one system

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md` mode rule: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* calls LLM output *"simulacra"* and says *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, and eight world sources opened 2026-11-22 and listed in `10_source_ledger.csv`.

---

## 0. The question as a residual in effect terms

The same system carries two transmission rules:

- **Simple, exposure-based contagion.** One contact with an infected neighbour can transmit, with probability λ, and the exposures act independently. The adoption probability does not depend on how many other neighbours are infected.
- **Threshold-based contagion.** A node adopts only when the number or fraction of exposed neighbours reaches θ. Adoption is a comparison of a count against a threshold.

The residual R is: **what is the shape of their interaction when both rules act on the same nodes and the same edges?** Two readings were stated before the census and kept separate:

- **A (collapse):** one mechanism with a knob. A single transmission probability λ stands for both, and the threshold is a parameter setting.
- **B (compound):** two distinct typed relations over one contact substrate, forming a union with an intersection that needs its own loop, composing across scales.

What an answer would look like, bound as an ordinary term before the run (Formula "Direction"): a statement of which bonds are present, which quantity each compares, which region each clears, and what residual remains in the intersection. If that term cannot be stated, the derivation has not started. It is stated here.

---

## 1. Domain census (before choosing any figure line)

R by arity, symmetry and scale, then one line per domain with actors / currency / anchor. No nameable anchor means it is not a domain yet.

- **R (arity / symmetry / scale).** Arity: two conditions, one-exposure-suffices and reinforcement-required. Symmetry: the simple rule is symmetric over donors (any one neighbour suffices, disjunction); the threshold rule is an ordered comparison of two quantities (count versus θ), not a symmetric join. Scale: simple contagion acts on a pairwise link; threshold contagion acts on a node's whole neighbourhood, a composed quantity over k links. The two conditions therefore differ in arity and in scale, and that is already a reason not to average them (Fig 1 :19).
- **Domain 1, the contact substrate.** Actors: nodes (slots), edges, contact weights. Currency: contacts and exposures. Anchor: measured time-resolved contact data (sociopatterns-style contact diaries). Nameable, so this is a domain. It is the habitat, enumerated and not composed (Fig 11 :43).
- **Domain 2, the simple-exposure rule.** Actors: a susceptible node, one infected neighbour, transmission probability λ. Currency: independent per-edge transmission events. Anchor: an infection curve from which λ is estimated. Nameable. Bond candidate: disjunction (one suffices).
- **Domain 3, the threshold rule.** Actors: a susceptible node, k neighbours, threshold θ. Currency: count or weight of exposed neighbours. Anchor: an adoption curve measured against θ (cascade window, experimental adoption curves). Nameable. Bond candidate: comparison (a threshold relation between two quantities).
- **Domain 4, the coupled system.** Actors: nodes with heterogeneous adoptability, seeds, both rules. Currency: final adopted fraction R, phase boundaries. Anchor: the measured final adoption fraction and its phase transitions. Nameable. Question type: **union compound**, not a partition, because some nodes satisfy both conditions at once.
- **Domain 5, the observation and verification frame.** Actors: the analyst, the model, the data. Currency: agreement and residual. Anchor: the ground (co-infection data, per-node event data), never agreement. In this simulated run all seats share one evidence pool, so this domain's independence is zero.

**Partition or union.** Domains 2 and 3 partition the rule set only when applied to disjoint node subsets (θ = 1 nodes versus θ > 1 nodes, as in Min and San Miguel's bimodal adoptability). When both rules act on the same node and the same contact, the split lands on a **union** (Fig 9 :54). The intersection is a specific compound, not a harder case of either condition (Fig 9 :57).

**Dependency order (Fig 3).** Enumerate the contact substrate first; the per-exposure event second (the threshold rule consumes it); the threshold comparison third; the coupled system fourth; the observation frame last. "Optimising a link that already works cannot rescue one that does not" (Fig 3 :19).

---

## 2. Figure census (quoted verbatim BEFORE concluding)

Each quote below is an exact substring of `FRAMEWORK/reference/03-FIGURES_TEXT.md`. The bearing column is filled before any verdict is drawn.

| figure line | verbatim text | bearing on this residual |
|---|---|---|
| Fig 1 :19 | "The residual is indexed by object slot, not aggregated." | R must be read per node, not as one global fraction adopted. |
| Fig 1 :22 | "Aggregating across slots is how a live signal disappears into an average." | A global attack rate hides the node one exposure short of its threshold. |
| Fig 2 :29 | "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." | The ground is per-node contact and co-infection data, not agreement about a fit. |
| Fig 2 :35 | "Alignment is triangulation, not negotiation. A mirror cannot correct you." | Agreement between two models sharing a data pool is not corroboration. |
| Fig 3 :19 | "Optimising a link that already works cannot rescue one that does not." | Tuning λ cannot repair a missing threshold comparison, or the reverse. |
| Fig 4 :30 | "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." | Any condensation of the two mechanisms into one parameter has a measured round-trip gap `R_T`. |
| Fig 6 :21 | "MINT composes inside the closure and can never add an atom." | A fitted parameter does not import a new bond; it stays inside the model family. |
| Fig 8 :51 | "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ." | A simple-contagion fit and a threshold fit that produce the same curve are separated only by the record. |
| Fig 9 :4 | "First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." | The two rules each work well on a different subset, so split rather than search for one law. |
| Fig 9 :54 | "And when the split lands on a union rather than a partition, unbundle before you search again." | The coupled system is a union, so unbundle before fitting. |
| Fig 9 :55 | "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." | A single λ clears the simple-only region and leaves the mixed region standing. |
| Fig 9 :57 | "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound." | The mixed regime has its own loop and its own ground. |
| Fig 9 :60 | "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." | λ, θ, p and z are budget filters, never witnesses for which bond is present. |
| Fig 11 :49 | "An actor's valence is relative to the residual, not a property it carries." | A contact is a simple-transmission edge or a reinforcement edge relative to R, not by its own nature. |
| Fig 11 :52 | "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out." | Threshold contagion is a second-order effect over the contact habitat; direct-edge enumeration misses it. |
| Fig 12 :62 | "either suffices; not both required" | The bond test for disjunction: the simple-exposure rule. |
| Fig 12 :87 | "a threshold relation between two quantities" | The bond definition for the threshold rule. |
| Fig 12 :89 | "is it about which is larger, rather than both being present? Yes." | The test that separates ⋛ from the conjunction bond. |
| Fig 12 :94 | "The arrangement is the substance." | Two rules over one substrate are different substances even with identical contacts. |
| Fig 12 :95 | "Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond." | A model that records only the contact graph cannot distinguish the two contagions. |
| Fig 12 :103 | "Composition is recursive, and the level decides what is irreducible." | Settled simple exposures become operands at the threshold level. |
| Fig 12 :104 | "A settled molecule becomes an atom for whatever composes over it." | Each successful exposure settles and is then composed over by the threshold. |
| Fig 12 :117 | "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." | Over a shared node set, the two rules are isomers of one contact substrate. |
| Fig 12 :121 | "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." | Adoption feeds back into the exposure count; the loop's sign decides takeoff or die-out. |
| Fig 13 :74 | "Everything else is a composition across the two kinds, never within one." | Cross-kind constraint on any composed cascade term. |
| Fig 13 :88 | "The residual of the turn just closed is what the next turn composes against, so no two passes begin from the same place." | The post-exposure state is the input to the threshold turn. |

**Strain test.** Two candidate readings were tested and rejected rather than smoothed:

1. Mapping threshold contagion to the `+` conjunction bond fails. Fig 12 :57 defines conjunction as "both hold at once" and the Operators table gives the symmetric test "swap the operands. Does the meaning change? No." Threshold contagion is not symmetric co-presence; it is "is it about which is larger" (Fig 12 :89). The governing line is ⋛, not `+`. Re-census moved it.
2. Treating the whole coupled system as Fig 8's "blend" fails. A blend is "vocabulary, never an atom" (Fig 8 :5). The mixed regime here leaves a binding intersection (Fig 9 :55), so it is a union compound, not a relabelling.

---

## 3. Findings F1 to F7 (each with a refuter)

### F1 - The two mechanisms are two bonds over one substrate, not one mechanism with a knob

Fig 12 :62 gives the simple rule's test: "either suffices; not both required". Fig 12 :87 defines the threshold rule: "a threshold relation between two quantities", tested by Fig 12 :89 "is it about which is larger, rather than both being present? Yes." (The Operators table :47-51 gives the same bond glyph and test.) These are two different typed relations, and Fig 12 :94 says "The arrangement is the substance." Fig 12 :95 adds that identical ingredients with a different bond are "different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."

A model that records the contact graph and a single λ has recorded the ingredients and not the arrangement. By Fig 12 :14-16 ("the ingredients are recorded and the arrangement is not / nothing downstream can tell them apart, and nothing signals that anything was lost"), nothing in that model can signal the loss. This is a `general` structural prediction, triangulated across Fig 12 (bond definitions) and the Operators table (the same tests).

**Refuter:** exhibit a single bond, with one test, from which both "one exposure suffices" and "which is larger" follow without adding a second typed relation. If that succeeds, F1 fails.

**World corroboration (secondary only):** Min and San Miguel (2018) write *"Simple contagion refers to spreading processes induced by a single exposure to a contagious entity while complex contagion demands multiple exposures for transmission."* They do unify the two in one family Q(θ), with θ = 1 recovering SIR. This is a strain against F1 and is handled in the retraction log: their unification is at the level of outcomes in one model family; the figures' distinction is at the level of the recorded bond. Different objects. The strain is named, not hidden.

### F2 - The interaction is a union compound with a mixed region that needs its own loop

Fig 9 :4 says disagreements that do not shrink with effort and where each rule works well on a different subset "are not one hard question but several well-formed ones. Split it rather than search." Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55 gives the operative asymmetry: "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." Fig 9 :57: "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."

Prediction (`specified`): a single λ clears the simple-only region (θ = 1 nodes) and leaves standing the nodes that require multiple successful exposures; the intersection is not a harder simple case, it is a compound with its own threshold and its own ground.

**Refuter:** show that a single lever clears the whole system, that is, the final adopted fraction and its phase boundaries are reproduced without any second condition, with no residual left on the θ > 1 nodes. If so, the union claim fails.

**World corroboration:** Min and San Miguel (2018) report a mixed phase in which *"nodes following simple contagion become adopted but nodes with complex contagion remain susceptible"* and a double transition separating simple adoption from complex adoption. Andres et al. (2025) classify three scenarios, simple-dominated, complex-dominated, and mixed, with the dominant mechanism changing during the unfolding process. Triangulated across two low-overlap teams, though both sit in the network-science evidence pool; overlap declared.

### F3 - Simple exposures supply the operands that the threshold comparison composes over

Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it." Fig 13 :88: "The residual of the turn just closed is what the next turn composes against, so no two passes begin from the same place." The successful simple transmissions settle first; their count is what the threshold comparison consumes. Fig 12 :121 adds the loop: "The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."

Prediction (`specified`): the ordering is not arbitrary. Simple transmission is upstream of the threshold comparison. Reversing the order, asking the threshold to act before any exposure has settled, gives a reading of nothing (Fig 3 :22-23).

**Refuter:** exhibit a system in which the threshold condition is evaluated and fires before any single exposure has settled, with no upstream transmission event to count. If that is a working model of the same system, this ordering claim fails.

**World corroboration:** Min and San Miguel write *"Effectively the transmission probability acts as a simple contagion process triggering a process of complex contagion."* Andres et al. (2025) write *"the more easily contracted simple contagion may govern the spreading initially but in turn could trigger the complex contagion process."* Two independent wordings of the same dependency order. Triangulated, with the shared network-science pool declared.

### F4 - The residual is per node, not the global attack rate

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." The node one exposure short of its threshold is the live slot. A global "fraction adopted" is exactly the aggregate that hides it.

Prediction (`specified`): a per-node residual, the gap between a node's current successful-exposure count and its θ, carries information about takeoff that the global attack rate does not.

**Refuter:** show that the global attack rate predicts cascade takeoff as well as any per-node exposure gap, on the same data and at the same budget. If so, Fig 1 :19 does not govern this quantity and the claim is withdrawn.

**World corroboration:** Contreras, Cencetti and Barrat (2024) find that for simple contagion the infection pattern is *"almost completely determined by the final attack rate"*, while *"the two processes are characterized by rather different infection patterns"* for threshold contagion, and that *"slight parameter changes can significantly impact the spreading paths."* This is a result about where information lives, and it supports the per-slot reading. Single-source for the specific empirical claim, triangulated with Fig 1 for the structural rule.

### F5 - The bond is not identifiable from the aggregate curve

Fig 8 :51: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ." Fig 9 :27 says "describe it before you go looking, or any frame you pick will seem to fit." So an incidence curve that fits both a simple-interaction model and a threshold model does not tell you which bond is running. This is not a practical difficulty; it follows from what the curve does and does not record.

Prediction (`general`): from aggregate incidence alone, the mechanism is underdetermined. The bond is a property of the record, not of the curve.

**Refuter:** exhibit an observable in the aggregate time series that separates the two mechanisms without per-node or co-infection data. Hébert-Dufresne, Scarpino and Young explicitly bound this: *"even perfect incidence data for a single contagion in these environments cannot be used to identify the true spreading mechanism."* If a counter-example is produced, F5 fails.

**World corroboration:** Hébert-Dufresne et al. (2020, Nature Physics) show an exact mapping: *"Every curve of Fig. 1 can be obtained by solving the differential equations for either interacting or complex contagions. The solutions are identical."* Andres et al. (2025) say their distinguishability *"based on the observable contagion dynamics is challenging."* Triangulated across a well-mixed mean-field result and a temporal-network result, two different closures. This is the strongest world corroboration in the folder and it agrees with the figure line for a low-overlap reason.

### F6 - Threshold contagion is a second-order effect over the contact habitat

Fig 11 :52: "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out." A threshold is evaluated over a neighbourhood, which is a composed object, so it is second order relative to the single contact. Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries." The same edge is a simple-transmission route for one residual and a reinforcement route for another.

Prediction (`specified`): direct-edge enumeration underestimates threshold cascades; the width and overlap of paths matters, not only their length.

**Refuter:** reproduce threshold cascade sizes and locations from a first-order model that counts only direct edges with no neighbourhood composition and no path overlap. If that works, F6 fails.

**World corroboration:** Centola and Macy (2007) write *"Complex contagions depend primarily on the width of the bridges across a network, not just their length."* Watts (2002) shows the cascade condition depends on the percolation of the vulnerable subnetwork, not on mean degree alone. Triangulated across sociology and applied mathematics, different evidence pools.

### F7 - Parameters are filters for the budget, never witnesses for the verdict

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." Fig 6 :21: "MINT composes inside the closure and can never add an atom." Fitting λ, θ, p or z tunes a model inside its family; it does not tell you that a bond is present. A tricritical point is a feature of a phase diagram, not a proof of a mechanism.

**Refuter:** show that a fitted parameter value, with no change of record and no ground contact relative to the bond, entails which bond is running. If so, this finding fails.

**World corroboration:** Min and San Miguel's tricritical point appears in a model that already assumes both rules; it is a consequence of the assumption, not evidence for it. Andres et al. explicitly warn that distinguishability from observed dynamics is challenging. Single-source for the specific phase-diagram claim, triangulated with Fig 9 for the rule.

---

## 4. Pre-registered refuter (written before the conclusion)

Per the seat rule that a falsifier written before the run is a design instrument, the shape claim is refuted if any of the following holds:

1. A single per-edge transmission probability λ, with **no** threshold comparison, reproduces the coupled phenomenology (continuous, discontinuous, hybrid and double transitions plus the mixed phase) at the same budget, so no second bond is owed. This breaks F1 and F2.
2. A single lever clears the intersection region: the nodes with θ > 1 have no residual left after the simple rule is applied. This breaks Fig 9 :55 and F2.
3. Aggregate incidence time series alone identify the bond, without per-node or co-infection data. This breaks Fig 8 :51 and F5.
4. A per-node exposure gap does not predict takeoff better than the global attack rate, on the same data. This breaks Fig 1 :19 and F4.
5. A threshold condition fires before any single exposure has settled in a working model of the same system. This breaks F3.

If any fires, the corresponding claim is withdrawn. None was run in this simulated derivation, so no part of the answer may be labelled `grounded`.

---

## 5. Recommendation

1. Report the interaction as a union compound: two bonds over one substrate, a simple-only region, a threshold region, and a mixed region with its own loop (F1, F2).
2. State the dependency order: exposures settle first, the threshold compares their count second (F3).
3. Report the residual per node, not as a global average (F4).
4. Refuse to name the bond from the aggregate curve. Keep the record of which rule was assumed and where it came from (F5, F7).
5. Enumerate the habitat out to at least second order before claiming a cascade is contained (F6).
6. Offer the shape and the refuter to the venues in `03_public_contact_points.csv`. Ask what would refute it. Do not ask for agreement.

---

## 6. Canonical usage check (figures README + metalaws)

Two sources were read after the first five sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md` - *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; and the canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of the available instruments and records the lineage so the stop is honest. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`, steps 5 and 7 - *"the ground settles it. Verified only by what pays. A gate is not the ground."* and the three distinct questions SEARCHED, INWARD, OUTWARD.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| Threshold contagion mapped to the `+` conjunction bond | **Retracted.** Re-census: `+` is symmetric co-presence; the figure's test for the threshold is "which is larger" (Fig 12 :89). Governing bond is ⋛. |
| The coupled system read as a Fig 8 "blend" | **Retracted.** Re-census: a blend is vocabulary only and leaves no binding intersection. Fig 9 :55 gives a real intersection, so the correct figure is the union compound. |
| Simple contagion collapsed to "threshold with θ = 1" | **Narrowed, not fully retracted.** The world literature does unify them at outcome level (Min's Q(θ), θ = 1 recovers SIR). The figures separate them at the level of the recorded bond. Both statements are kept: different objects, no strain after re-census. This is the one live tension and it is named in `11_audit.md`. |
| "No anchor for the coupled system" considered at first | **Retracted.** Final adopted fraction and phase boundaries are measured quantities (Min, Andres, Contreras), so Domain 4 has a nameable anchor and is a domain. |
| F5 treated as a practical measurement difficulty | **Upgraded to structural.** Fig 8 :51 and the exact mapping in Hébert-Dufresne et al. make it a property of what the curve records, not of instrument quality. |
| F1 called "triangulated" on Fig 12 alone | **Downgraded to single-source for the bond definitions** until the Operators table was read as an independent line of the same figure set. It is triangulated within the framework, but both are one evidence pool, so this is internal consistency, not two witnesses. |
| "Shape" used as if it returned a name | **Canonical check confirms the limit.** The framework returns a shape: two bonds, union, recursion, per-slot residual. It does not return θ, λ, or which bond is active in a real system. |

### Three-question check from Formula step 7

No line in closure(Γ) closes R by simply naming a mechanism, so the three questions are kept distinct:

- **SEARCHED (asked first, cheapest):** is a single-bond answer in here and unfound? Within the model family Q(θ) it is: θ = 1 is simple, θ > 1 is threshold. The residual is not a missing primitive in that family; it is a union of two conditions that the family records under one knob. So more search inside the family will not produce the bond distinction as a result.
- **INWARD:** sharpen in our own terms. The instrument is the per-node exposure gap versus θ (Fig 1 :19) and the infection-pattern matrix that records which edge transmitted (Contreras et al.). This can resolve the mixed region without importing a new primitive.
- **OUTWARD:** find a frame whose closure predicts the shape. The frame is the network-science literature on competing contagions (Min, Andres), with a source gate (their published model and data) and a shadow test (do they explain the gap in a single-bond model? Yes, they report the mixed phase and double transition). Import is debited against independence because these sources and the figures share no author and little vocabulary, but they do share the network-science problem pool.

These are not read against one another. SEARCHED says the distinction is in the family but unfound as a shape; INWARD supplies the instrument; OUTWARD supplies the competing-contagion frame.

---

## 7. Updated verdict

The shape survives: **two typed bonds over one contact substrate; simple transmission upstream of the threshold comparison; a union compound with a binding mixed region; residual indexed per node; the bond not identifiable from aggregate incidence.** The collapse reading fails, except at outcome level inside one model family, where it is a limit, not an equivalence of bonds. Triangulation status: F1 single-source within the figure set (bond definitions); F2 triangulated across Min and Andres; F3 triangulated across Min and Andres; F4 single-source for the figure rule with one world source; F5 triangulated across a mean-field mapping and a temporal-network study; F6 triangulated across sociology and applied mathematics; F7 single-source for the framework rule. Strains after re-census: one live (θ = 1 outcome collapse versus bond distinction), named above and re-examined in `11_audit.md`. The derivation is `specified` and ungrounded. It cannot settle the question it reports on.
