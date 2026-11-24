# Figure-grounded audit: can network structure predict conservation priority?

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (opened 2026-11-23) says: "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself. An external validator, or ground, is always needed to tether the veracity of the output to reality." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Figure quotes come only from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session. World sources actually opened are in `10_source_ledger.csv`. No repository file was edited.

---

## 0. The claim under audit

> **Option A, as it is usually stated:** network structure (centrality, degree, betweenness, modularity, nestedness, motif role) identifies which species or interactions should be prioritized for conservation.
>
> **Option B, the qualified form this audit derives:** network structure enumerates the habitat of contact and ranks candidates for a *declared* objective; which candidate is actually a priority is settled by a ground reading, not by the graph alone.

What each leads to: A allocates a finite budget from inside one frame, using the graph to validate itself. B keeps the ranking revisable, names the objective, and sends the ranking to be checked against measured persistence.

---

## 1. The residual in effect terms

R is not "we lack a metric." It is a gap per object slot.

- **Definition.** For slot s (a species, an interaction, or a community function), `R_s = |Gamma(b,a) - o'|`: what the structural prediction says about priority versus what happens when the system is actually perturbed or managed. Symbols table :38-40: R is "the gap between prediction and observation... it is always a slice: what cannot be perceived yet is residual and simply cannot be read."
- **Arity.** Many slots. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." A single global statistic (connectance, nestedness) collapses the per-species signal the decision needs.
- **Symmetry.** Priority is a comparison and a goal, not a symmetric join. Operators table :51: "a goal is a comparison, which is why a vocabulary without it cannot state one." Interaction effects are signed and directed: a node's valence changes with the residual (Fig 11 :49-50). So the residual is not symmetric under swapping the target function.
- **Scale.** First order (direct partners), second order (neighbours of neighbours), third order and beyond (cascades). Fig 11 :52-53 gives the DDT case: "first-order enumeration, second-order effect, and the residual that mattered was three steps out." A direct-degree ranking lives at the first scale; the decision often turns on the third.

The residual is therefore **not one question**. It bundles at least four conditions with different anchors. This is decided in §2.

---

## 2. Domain census, before choosing any figure line

One line per domain: actors, currency, anchor. A domain with no nameable anchor is not yet a domain that can settle the priority question. Partition or union is then decided, then dependency order (Fig 3 :20).

| domain | actors | currency | anchor | can it settle priority? |
|---|---|---|---|---|
| **D1 Structural-pattern frame** | species as nodes, interactions as edges, degree/closeness/betweenness, modules, nestedness, motifs | topology, composition inside `closure(Gamma_structure)` | the recorded interaction dataset. It settles "what pattern is present", not "what to protect" | no. No conservation-outcome anchor lives here |
| **D2 Dynamics-and-ground frame** | abundances, interaction strengths, removals, disturbances, traits, time series, forecasters' held-out targets | persistence and function | measured outcome: an experiment, a monitoring series, a forecast scored after collection | yes. Fig 2 :29 defines the anchor as what settles without moving when a frame thinks |
| **D3 Objective-and-decision frame** | the declared goal (which function, service, richness, or lineage), managers, stakeholders | the stated objective | the goal itself, declared in advance. It is legitimate when the question is constitutively about it | it selects *which* residual D2 must settle; it does not do the settling |
| **D4 Verification-and-outreach frame** | expert readers, forecasting challenges, reviewers | residuals and scored forecasts | withheld ground data, never agreement | it checks the claim; it does not author it |

**No nameable anchor in D1 for the priority question**, so D1 alone is a sub-frame, not a deciding domain. This is the first substantive result of the census, obtained before any figure line was chosen.

**Partition or union.** Union (Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."). "Priority" is the overlap of (a) a large-effect condition and (b) a declared-objective condition. Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." A single lever, such as degree, clears the region where only (a) holds and leaves the intersection standing (Fig 9 :56). *The Library of Babel* (opened 2026-11-23) names the same failure: "Perhaps your problem was a bundle or conflation of several problems masquerading as one?"

**Dependency order (Fig 3).** Perception (build the network) -> vocabulary (terms for what nodes afford: centrality, role) -> **objective** (what counts as progress) -> planning (which to protect) -> learn and carry (verify outcome). Fig 3 :20: "The chain is ordered by dependency, not by importance." The objective link is the one structure cannot supply and the one most often assumed instead of measured (Fig 3 :25-27; see F4).

---

## 3. Figure census (verbatim, with `Fig N :line`)

| figure | bearing on this question | verdict after strain test |
|---|---|---|
| **1 The Agent** | residual per slot; global metrics are frame-internal | governs per-slot indexing, not the verdict |
| **2 The Ground** | anchor test, triangulation, correlation valence | governs D2 and D4 |
| **3 Dependency Chain** | objective is a link that can break unseen | governs D3, the missing link |
| **4 The Membrane** | actors/currency/anchor change; methods cross up | governs how the answer travels to D4 |
| **5 Mint Pipeline** | three guards and settlement | governs what would make a priority term a mint |
| **6 Closure / Reachability** | a frame cannot escape its closure; import moves the wall | governs why D1 cannot reach D2's verdict alone |
| **7 Room Chain** | agreement compounds, evidence does not | governs the outreach failure |
| **8 Union Surplus** | residual first, frame second; low overlap | governs the union reading and field selection |
| **9 Leave / Arrive** | union unbundling; filters versus witnesses; ground decides | governs F5 and F7 |
| **10 Ground Maintainer** | bring a residual, never the source; verifier non-access | governs D4 procedure |
| **11 The Habitat** | enumerated contact, valence relative to residual, cascades | governs F2 and F3, the decisive domain |
| **12 The Bond** | bond carries meaning; route versus state; isomers | governs supporting derivation in `06` |
| **13 Minimum Viable Set** | network is a structure; structure without state is empty | governs F1, the substrate constraint |
| **Operators table** | a goal is a comparison | governs F4's bond type |
| **Symbols table** | R is a slice, per slot | governs §1 |

Strained readings are named in §7, not smoothed over.

---

## 4. Findings

### F1 - A structure with nothing at the nodes is empty (governs D1)

Fig 13 :24 names the network: "that entities relate, and influence travels." Fig 13 :29-30 is the constraint:

> **"A structure with no state is empty: an ordering over nothing, a network with nothing at the nodes."**

Fig 13 :74: "Everything else is a composition across the two kinds, never within one."

A network is one of the six **structures**, in lockstep with states (Fig 13). A centrality score is a property of the arrangement, not of the species as a state with magnitude. So the graph can tell you *where influence can travel*; it cannot, by itself, tell you *which node matters for this objective*, because "which" is a comparison over states and states are not in the graph description. Fig 13 :75: "Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state."

**Verdict:** structural prediction is a necessary input and not a sufficient priority verdict. `triangulated` across Fig 13, Fig 11 :49-51 and Fig 9 :32 (low overlap: substrate, habitat, leave/arrive).
**Refuter:** exhibit a structure with no state at its nodes that still carries magnitude for a conservation decision, under the six-term set. If that is admitted, F1 fails.

### F2 - No standing priority list survives a change of objective (governs D3, decisive)

Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries." Fig 11 :50: "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds." Fig 11 :51:

> **"No standing list of good actors survives a change of residual."**

This is the direct answer to the question as posed. "Which species should be prioritized" has no answer until the residual (the thing being preserved) is named. A predator is a priority for a function that needs trophic control and a hazard for a function that needs prey abundance. The same wiring yields opposite rankings for two objectives. Fig 9 :26: "R's own predicates name the habitat that holds φ*": describe the residual first, then the priority falls out; name the frame first and every node looks important.

**Verdict:** priority is objective-relative. `triangulated` across Fig 11 :49-51, Fig 3 :25-27 and the Operators table.
**Refuter:** one purely structural ranking that is settled as correct by the ground for two different declared objectives. That would break "no standing list survives a change of residual."

### F3 - Contact cascades past first-order neighbours (governs the scale of the prediction)

Fig 11 :43: "The habitat is enumerated, never composed." Fig 11 :44: "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering." Fig 11 :48: "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual." Then the canonical case, Fig 11 :52-53: "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."

Degree and direct adjacency are first-order enumerations. Jordán 2009 (opened 2026-11-23) states the ecological version: "key species may be important interactors even if they only have a small number of direct partners in the web" (the *Pisaster* case). Dominguez-Garcia and Kefi 2024 report that "the importance of a plant for the whole community is a mixture between its importance for the two animal sets" and that in some networks "the ranking of plant importance in the whole community is emergent, i.e. it is not similar to the ranking of importance for neither of the animal sets." So even within the structural frame, the answer depends on how far out the cascade is read and which layer is counted.

**Verdict:** a priority ranking must state its cascade depth. `triangulated` between Fig 11 and two world sources, but the two world sources share a citation pool with each other, so they count as one witness on this point (Fig 2 :40).
**Refuter:** show that for a declared objective all priority-bearing effects are contained in first-order adjacency, so third-order enumeration changes nothing.

### F4 - The objective is a missing dependency link, and it is a comparison (governs D3)

Fig 3 :20: "The chain is ordered by dependency, not by importance." Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." The link between vocabulary and planning is the objective. Fig 3 :25-27:

> **"The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."**

Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." Network metrics give terms for what a node affords (connects, bridges, modules); they do not say what would count as progress. Operators table :51: "a goal is a comparison, which is why a vocabulary without it cannot state one." Fig 12 :111: "A vocabulary without bonds can name a state and cannot name a route to one."

Cagua 2019 (abstract read 2026-11-23) makes the ecological consequence explicit: "While centrality is useful when predicting which species' extinctions could cause the largest change in a community, it says little about how these species could be used to attain or preserve a particular community state." Their "structural controllability" asks how topology can be "harnessed to achieve a desired state", which is exactly the objective link the plain structural ranking omits.

**Verdict:** the objective must be declared from outside the graph. `triangulated` across Fig 3, Operators table, Fig 11 and Cagua 2019. The exact bond type of the goal is `single-source` (Operators table) and is recorded as such.
**Refuter:** derive the conservation objective from topology alone, with no declaration from D3, and show the derivation is not circular.

### F5 - Centrality is a filter for the budget, not a witness for the verdict (governs D1/D4)

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." Fig 1 :19 and :22 (quoted in §1) forbid aggregating the slot signal. A centrality ranking answers "which candidates should I test first" cheaply. It does not answer "which candidate survived the test." Fig 5 :69: "settling is necessary for a term to be composed over, and it is not sufficient." Fig 5 :41: "Any one of them at zero stops the mint entirely." For a priority term φ, SUPPORT needs positive mass on some slot, REACHABILITY needs φ in the closure, NOVELTY needs φ not already an atom, and SETTLEMENT needs the ground to pay. A ranking that fails SETTLEMENT remains `candidate`.

**Verdict:** filters and witnesses are different quantities. `triangulated` across Fig 9, Fig 1, Fig 5.
**Refuter:** a global network statistic that settles priority per slot without any ground settlement, such that changing the graph alone changes the `grounded` label.

### F6 - The habitat is not the ground (governs D2)

Fig 11 :73: "The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not." Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome." Fig 9 :42: "narrowing gets you close, the ground decides." Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves."

A better centrality algorithm that never changes contact with measured persistence is an improvement in D1 only. Fig 11 :63: "Which is why a managed ecosystem is permanent work rather than a solved state." The NEON Ecological Forecasting Challenge (opened 2026-11-23) is an institutional instance of the right arrangement: forecasts are submitted before data are collected and "All forecasts and scores are publicly available through cloud storage and discoverable through our catalog." The withheld data are the anchor; the score does not move when a forecaster argues.

**Verdict:** priority is `candidate` until D2 pays. `triangulated` across Fig 11, Fig 2, Fig 9 and the forecasting-challenge world source.
**Refuter:** a decision procedure whose output is labelled `grounded` although the ground was never consulted and only the graph changed.

### F7 - Unbundle before searching (governs the whole question)

Fig 9 :54 to :56 (quoted in §2) require unbundling a union. The two conditions are (a) large effect on the declared target and (b) the target itself. Condition (a) is partly structural, partly dynamic; condition (b) is D3. A lever that only touches (a), such as adding a new centrality index, leaves (b) binding, so the compound remains. Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

Library of Babel adds the searcher's-side warning: "The problem you have determines what makes a book relevant to you or not" and "Perhaps your problem was a bundle or conflation of several problems masquerading as one?"

**Verdict:** the question must be split before it is searched. `triangulated` across Fig 9 and the essay.
**Refuter:** show the two conditions are a partition, so that one lever clears the whole region and no unbundling is owed.

### F8 - Checking arrangement (governs D4)

Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Fig 2 :42: "Buy independence in proportion to the cost of being wrong." Fig 8 :45: "Two frames together reach what neither reaches alone." Fig 10 :52: "Bring a characterised residual, never the source." Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it."

An expert list selected for likely agreement produces a convention, not corroboration. Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." The honest first contact is the shape claim and its refuter, not the framework.

**Verdict:** procedural, but binding on how `02`, `03` and `08` are written. `triangulated` across Fig 2, Fig 8, Fig 10, Fig 7.
**Refuter:** not applicable as a factual claim; a violation would be a defect in the outreach artifacts, checkable by reading them.

### F9 - What actually survives

| claim | mode | figure / source |
|---|---|---|
| Network structure is a structure; structure without states cannot denote a priority | `general`, structural | Fig 13 :24, :29-30, :74 |
| Which species is a priority is relative to the declared residual | `specified`, triangulated | Fig 11 :49-51, Fig 3 :25-27 |
| Priority-bearing effects can be several steps out | `specified`, unmeasured here | Fig 11 :52-53; Jordán 2009 |
| The objective is a separate, often uninstrumented link | `specified` | Fig 3 :25-27; Cagua 2019 |
| Centrality ranks are filters, not verdicts | `general` | Fig 9 :60; Fig 1 :19, :22 |
| The ground, not the graph, settles the verdict | `general` | Fig 11 :73; Fig 2 :29; Fig 9 :42 |
| The question is a union, so it must be unbundled | `general` | Fig 9 :54-56 |
| A particular species X is the priority in ecosystem Y | **not claimed** | no ground reading was run |

---

## 5. Pre-registered refuter

Written before the conclusion, per Fig 10's discipline and the formula's "Direction": make the sought-for shape an ordinary term so it can be refused. The shape claim is refuted if any of the following holds:

1. **Objective-invariance failure:** a purely structural metric, computed with no dynamics, demography, traits, or objective data, is settled by the ground as the correct priority ranking for two different declared objectives. This breaks Fig 11 :51, "No standing list of good actors survives a change of residual."
2. **Ground failure:** a removal or manipulation experiment shows that the top node by a structural centrality measure has no effect on the persistence of the declared target, while a low-degree node does. This breaks F1 and F5 at the ground.
3. **Substrate failure:** the framework is shown to admit a structure with no state at the nodes that nevertheless carries magnitude for a conservation decision. This breaks Fig 13 :29-30.
4. **Union failure:** the two conditions are shown to be a partition, so one lever clears the whole question. This breaks Fig 9 :55-56.
5. **Cascade failure:** all priority-bearing effects for the declared target are shown to be first-order, so enumerating neighbours of neighbours never changes the ranking. This breaks F3.

If any fires, the shape is withdrawn or narrowed. Until one is run, no part of this may be labelled `grounded`.

---

## 6. Recommendation

1. Answer the question in its qualified form (Option B): structure predicts a shape and a candidate set, not a verdict.
2. Require a declared objective before any priority ranking is produced (F2, F4).
3. State cascade depth and which interaction layers were counted (F3).
4. Label centrality outputs as filters for the budget, never witnesses (F5).
5. Send the shape claim and the refuter first, through the public opt-in venues in `03`, and offer links only after a verdict is recorded (F8).
6. Fig 4 :22: "Only methods cross up. Only head starts come down." Offer the method of declaring an objective and a ground test, not a list of priority species.

---

## 7. Canonical usage check, corrections and retractions

Two local sources were read after the first pass and govern how the figures may be used: `FRAMEWORK/reference/FIGURES_README_canonical.md` ("they outrank everything else in the repo... the quotes are the authority, not this summary"; "a reading that makes one contradict another has misidentified its domain, not found a flaw"; the framework returns "a shape, not a name") and `FRAMEWORK/figures/THE_FORMULA.md` (the eight steps and the mode rule).

| earlier reading | status after re-census |
|---|---|
| First pass tried to find one figure line governing "network predicts priority" | **Retracted.** The line strained. Re-census shows a union compound over four domains with different anchors; no single line governs it. Strain dissolved, not hidden. |
| First pass read Fig 13 :29-30 as banning all structure-only reasoning | **Narrowed.** It bans *denotation without states*, not the use of a structure as a habitat census or a budget filter. F1 now says "necessary input, not sufficient verdict." |
| First pass treated "keystone species" as a kind of species | **Corrected.** Fig 11 :50 makes it a relation: "mutualism and parasitism are relations rather than kinds." A taxon is not a priority by kind. |
| Jordán 2009, Cagua 2019 and Dominguez-Garcia & Kefi 2024 counted as three independent confirmations | **Corrected to one witness.** They share the ecological-network citation pool. Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool." They corroborate within ecology; they are not a second frame from outside it. |
| Cagua 2019 PDF intended as a fetched source | **Fetch limitation recorded.** The author's PDF returned an unsupported content type and the Wiley page returned 403 to the fetcher. Its abstract was read verbatim from the search index of the same author-hosted PDF URL. The URL is retained in the ledger with this status; nothing was quoted that was not read. |
| EFI and NEON sources treated as corroborating the specific priority verdict | **Narrowed.** They concern abundance, phenology and water-quality forecasts, not network-based prioritization. They corroborate the *method*: declare a target, score against withheld ground, keep scores public. Not the verdict. |
| Apparent strain: Fig 11 says enumerate the habitat; Fig 9 says describe the residual before choosing a frame | **Not strained.** Different objects. Fig 11 governs which actors to list once R is named; Fig 9 governs how R is named before listing. Matches the canonical re-census rule. |

---

## 8. Verdict of the audit

The figure-governed answer is **qualified affirm with a split**. Network structure predicts the shape of the answer: the habitat of contact, a per-slot candidate set, a first-order map of who can affect whom, and a budget ordering. It does not predict the verdict of which species or interaction to prioritize until a conservation objective is declared (D3) and a ground reading settles which candidate survives (D2). The strongest single figure is Fig 11 :51, because it makes the objective-dependence structural rather than a matter of practitioner caution.

Triangulation status of the main verdict: `triangulated` across Fig 13 (substrate), Fig 11 (habitat) and Fig 9 (leave/arrive), three figures with low conceptual overlap. The exact goal bond type is `single-source` (Operators table) and is marked as such. The cascade-depth claim is `triangulated` between Fig 11 and the ecological literature, with the literature counted as one pool. No strain remains after the re-census in §7. Status of every substantive claim: `specified`, ungrounded, candidate.
