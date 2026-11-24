# Figure-grounded audit: when do ecological networks reorganize after species loss, and when do they lose functions?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. `THE_FORMULA.md` line 107: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** This is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figures, cited `Fig N :line`), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, plus the world sources in `10_source_ledger.csv`, all opened 2026-11-23.

---

## 0. The residual, in effect terms

A network N is a set of species (actors) joined by interaction relations (bonds: pollination, predation, competition, dependency). A perturbation removes one or more actors. The residual is indexed per function slot s:

`R_s = | predicted function_s (pre-loss) − observed function_s (post-loss) |`

Two branches are asked about:

- **Reorganization:** the bonds among remaining actors change and `R_s` returns near zero. Arrangement changed, contact with the ground held.
- **Function loss:** `R_s` stays positive or grows because no remaining composition delivers function s. The reach fell.

The question is a disjunction, "when A and when B", so the first task is to test whether it is one question or several. It is also a confusion of two different quantities: arrangement (bonds) and contact (function delivered). A network can re-wire and still lose function, and can lose species without any visible re-wiring until a threshold.

**Answer shape bound before the run (formula Direction rule):** `C*` = a rule that, given the enumerated pre-loss habitat and the removed species, predicts per function slot whether a substitute composition is reachable in the remaining habitat (reorganize) or the function is out of reach until an import (lose function), and predicts the cascade order by which the loss propagates. This ordinary term accrues a residual like anything else and is refutable.

---

## 1. Domain census before choosing any figure line

### R by arity, symmetry, scale

- **Arity:** many. R is a vector over function slots, not one global health number. Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." The perturbation also has arity: one species versus a selective set.
- **Symmetry:** species loss is a subtraction, not a symmetric join. Which actor is removed changes the outcome (world: Solé and Montoya 2001, random versus selective). "Importance" is not a property a species carries; Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries." Fig 11 :50 "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."
- **Scale:** first order (direct partners) through cascades several steps out. Fig 11 :52 "Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out." Also temporal scale: function can hold then fall together, with recovery needing more than reversal (world: Lever et al. 2014).

### One line per domain (actors / currency / anchor)

1. **The unmaintained habitat.** Actors: species, conditions, relations. Fig 11 :47 "relations: pollination, predation, competition, dependency". Currency: contact and cascade. Anchor: the ground, that is what actually persists. Fig 11 :56 "Unmaintained. No maintainer and no live frame in the seat. The habitat is pure contact, nothing selects, and what survives is what the ground kept." No anchor problem: the anchor is the measured persistence of function, which does not move when we re-label the network.
2. **The maintained habitat (management or restoration).** Actors: a seat plus the habitat. Currency: introduction, not exclusion. Anchor: the ground still decides. Fig 11 :61 "The seat's power is asymmetric. Introduction is available; exclusion is not." Fig 11 :63 "Which is why a managed ecosystem is permanent work rather than a solved state."
3. **The network as composition (structure).** Actors: species as atoms, interaction types as bonds. Currency: composition inside the closure of what the remaining actors can form. The network is a structure among the six: Fig 13 :24 "that entities relate, and influence travels". Anchor: a function measurement settles which compositions count. Reorganization is a mint over remaining atoms; function loss is the reach falling when a load-bearing atom is removed.
4. **The measurement and verification frame.** Actors: ecologists, functional assays, network metrics. Currency: agreement versus residual. Anchor: the ground (measured function), never agreement. Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor." Network position is a filter, not the ground (world: Rojas et al. 2025).

### Partition or union

It is a **union**, not a partition. Two conditions bind: (i) whether a substitute composition is reachable in the remaining habitat, and (ii) whether the measurement actually discriminates the function lost (a global network metric may not). Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." A single lever such as "increase connectance" clears only the region where one condition binds and leaves the intersection standing. Fig 9 :4 "First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." There is also a partition by function slot: each function has its own reach.

### Order by dependency (Fig 3)

Enumerate the habitat before choosing a lever: Fig 11 :43 "The habitat is enumerated, never composed." Fig 11 :44 "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering." Measure per slot before aggregating (Fig 1 :19). Settle which atoms remain before judging what can compose: Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it." Describe the residual before naming a frame: Fig 9 :27 "describe it before you go looking, or any frame you pick will seem to fit".

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | residual per slot; aggregation destroys the live signal | governs how "lose a function" must be measured |
| **2 The Ground** | anchor does not update; agreement is not triangulation | function measurement, not expert agreement, decides |
| **3 Dependency Chain** | a reading below the break is a reading of nothing | enumerate habitat before scoring topology |
| **4 The Membrane** | methods cross up; round trip has a gap | a metric condensed from networks is lossy; measure `R_T` |
| **5 Mint Pipeline** | three guards as product; acceptance is a bargain | reorganization is a mint, gated by support/reach/novelty |
| **6 Closure / Reachability** | import is the only operator that moves the wall; reach can fall | function loss is a reach fall; recovery needs import |
| **7 Room Chain** | a chain of agreeing rooms is one long room | more network metrics of the same pool add no evidence |
| **8 Union Surplus** | low overlap is where a surplus lives | coral and pollination studies are independent witnesses |
| **9 Leave / Arrive** | split a union; describe residual before frame; filters versus witnesses | this question must be unbundled before search |
| **10 Ground Maintainer** | bring a characterised residual, never the source | send the refuter first, the framework later |
| **11 The Habitat** | enumerate, cascades, valence relative to residual, asymmetric seat, ground not habitat | the governing ecology figure, primary for this question |
| **12 The Bond** | arrangement is the substance; isomer, catalyst, functional group | rearrangement changes bonds, not necessarily contact |
| **13 Minimum Viable Set** | network is a structure; set closed, arrangements not | why new functions require import, not more re-wiring |
| **Operators table** | `−` is subtraction, `⇒` production, `⋛` comparison | loss is subtraction; recovery of a new role is production |
| **Symbols table** | R is the aim and always a slice; the ground is the anchor | function loss is an R that stops resolving, not silence |

---

## 3. Findings

### F1 — "The network" is not one thing that reorganizes; the residual is per function slot

Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."

A single index such as connectance or species richness can stay flat while one function slot carries all the live residual. The world literature makes the same point from a different direction: Rojas et al. 2025 found that plants important for network cohesiveness differ from plants that determine nutritional intake, and advise caution "when inferring the functional consequences of plant species loss based solely on their position within networks". So "the network reorganized" and "a function was lost" can both be true at once, in different slots.

**Refuter:** a single global network metric that predicts every function slot's post-loss trajectory with no live residual left on any slot. If such a metric existed, the per-slot census would be unnecessary.

### F2 — Reorganization and function loss are different quantities (arrangement versus contact)

Fig 12 :94 "The arrangement is the substance." Fig 11 :73 "The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not." Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves."

Reorganization changes bonds; function loss changes contact with the ground. They are not opposite ends of one variable. Memmott et al. 2004 report tolerance to extinction deriving from "redundancy in pollinators per plant and from nested topology of the networks" (reorganization holding function), while Rojas et al. 2025 report that frugivores that re-wire "can suffer important shifts in the average nutrient content of their diets" (reorganization with a functional cost). Both are figure-consistent: re-wiring is a mint, and a mint only pays if `cost(φ) + left(R,φ) < cost(R)`. `THE_FORMULA.md` step 3: "accept iff cost(φ) + left(R,φ) < cost(R)". A re-wire that leaves leftover function residual positive has not paid.

**Refuter:** exhibit (a) a rewiring that restores contact in every measured slot, so arrangement change is functionally sufficient, or (b) a function loss with zero change in bonds, so arrangement is not the discriminator in that case. Either collapses the distinction for that case.

### F3 — The discriminating condition is reachability of a substitute in the remaining habitat

Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Fig 6 :42 "What is recorded only grows. What is reachable is derived, and it can fall." Fig 13 :115 "The set is closed. The arrangements are not. That gap is why import exists."

When the lost actor's role can be recomposed from remaining actors, the network mints new bonds and the function is reachable (reorganize). When no remaining composition delivers the function, the reach for that function falls; nothing inside the remaining set can recover it. Recovery then requires an import, which in ecology is an arriving or introduced actor or a new interaction partner. Fig 6 :14 names import as "the only operator that moves the wall".

World corroboration, low overlap: Memmott et al. 2004 attribute tolerance to redundancy (a substitute exists); Solé and Montoya 2001 find food webs "very robust against random removals but can be extremely fragile when selective attacks are used"; Lever et al. 2014 find that high connectance and nestedness "increases the capacity of pollinator populations to persist under harsh conditions" until a tipping point.

**Refuter:** a function that recovers after loss with no substitute composition in the remaining habitat and no import. That would break reachability. Its mirror also refutes: a function lost although a substitute composition is present, settled, and reachable.

### F4 — Which species matters is relative to the residual, not a property of the species

Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries." Fig 11 :50 "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds." Fig 11 :51 "No standing list of good actors survives a change of residual."

This predicts an interaction between the loss pattern and the function slot, not a universal "keystone species" list. Solé and Montoya 2001 (selective removal of the most-connected species is far more damaging than random removal) and Memmott et al. 2004 (decline "most rapidly with preferential removal of the most-linked pollinators, but declines were no worse than linear") corroborate from independent groups. The apparent tension between "catastrophic declines in food webs" and "relative tolerance in pollination networks" is resolved by the residual: different network types, different loss patterns, different function slots. This is not a conflict to be averaged away.

**Refuter:** removing the most-connected species has no more effect than a random removal across all measured function slots. That breaks valence relativity and both world findings at once.

### F5 — Cascades are enumerated, never composed; first-order scoping misses the residual that matters

Fig 11 :43 "The habitat is enumerated, never composed." Fig 11 :44 "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering." Fig 11 :52 "Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."

Scoping a post-loss assessment to direct partners is the named failure. Cascades must be enumerated outward until the cascade stops mattering. World corroboration: Gama et al. 2025 report habitat loss associated with "vulnerability to cascading effects" and species turnover as the main driver of interaction dissimilarity; Kusch and Ordonez 2023 propose quantifying "link loss sensitivity and realisation of rewiring potential" plus bidirectional extinction cascades.

**Refuter:** a case where all post-loss function change is accounted for by direct partners only, with no second- or third-order link carrying residual in any slot.

### F6 — Threshold and hysteresis: function can hold, then be lost all at once

Lever et al. 2014: "pollinator populations may collapse suddenly once drivers of pollinator decline reach a critical point" and "once a tipping point is reached, pollinator populations collapse simultaneously. Recovering from this single community-wide collapse requires a relatively large improvement of conditions." This is single-source for the threshold detail and is a **world** fact, not derived from a figure line. Figure-consistent anchor: Fig 11 :63 "Which is why a managed ecosystem is permanent work rather than a solved state." The figure gives permanent work; the world source gives the shape of the discontinuity. Fig 9 :32 "you get a kind of thing, never the answer itself" applies: the framework gives the shape of a threshold, not its numeric location.

**Refuter:** a documented case where function declines linearly with the driver and recovers fully when the driver is reversed, with no hysteresis. That would remove the world-sourced threshold detail, though not the figure-derived permanent-work claim.

### F7 — Unmaintained versus maintained: nobody selects for function in the first mode; the seat can only introduce in the second

Fig 11 :56 "Unmaintained. No maintainer and no live frame in the seat. The habitat is pure contact, nothing selects, and what survives is what the ground kept." Fig 11 :61 "The seat's power is asymmetric. Introduction is available; exclusion is not." Fig 11 :63 "Which is why a managed ecosystem is permanent work rather than a solved state."

In an unmaintained habitat "reorganization" is a label applied after the fact to whatever met the ground, not a goal pursued by the system. In a managed habitat a seat can add an actor to restore a lost composition but cannot subtract the fact of contact. These are two domains with separate verdicts; averaging them produces the false statement "ecological networks try to preserve function".

**Refuter:** a managed system that restores a lost function by subtracting an actor, or a one-off intervention after which the system stays solved without further work.

### F8 — Recovery of a genuinely new role requires import, not more re-wiring

Fig 13 :115 "The set is closed. The arrangements are not. That gap is why import exists." Fig 6 :14 "the only operator that moves the wall". Fig 11 :65 "Introducing an actor for its cascade is ecosystem engineering, after Jones, Lawton and Shachak, 1994."

Re-wiring searches the arrangements already spanned by the remaining atom set. If a function needs an atom the set does not contain (a new pollinator, a new decomposer, a rewired mutualism with an arriving species), only import supplies it. This is why introduction is available and exclusion is not (Fig 11 :61): adding an actor expands the closure, subtracting one shrinks the reach.

**Refuter:** a function recovered with no new actor, no new interaction partner, and no recombination of remaining atoms. That would require a new atom from nowhere.

### F9 — The question as posed is a union compound and must be unbundled

Fig 9 :4 "First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." Fig 9 :57 "a case in two conditions is not a harder case of either". Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

There is no single "when". The answer is conditional on (i) function slot, (ii) reachability of a substitute in the enumerated habitat, (iii) loss pattern (random versus selective), (iv) maintained versus unmaintained, and (v) whether the assay discriminates the function. Connectivity, nestedness and redundancy are **filters** for where to look; the **witness** is the per-slot function measurement after the loss.

**Refuter:** a single unconditional rule that predicts reorganization versus function loss across all slots, habitats and loss patterns with zero residual. If one is demonstrated, the union reading is wrong.

---

## 4. Pre-registered refuter (written before the conclusion)

Per the standing rule that a falsifier written before the run is a design instrument. The shape claim `C*` is refuted if any of the following holds:

1. A single global network metric predicts every function slot's post-loss trajectory with no live slot residual (breaks F1 and Fig 1 :19).
2. A rewiring restores contact in every measured slot, or a function loss occurs with unchanged bonds (breaks F2).
3. A function recovers with no substitute composition in the remaining habitat and no import, or is lost despite a reachable settled substitute (breaks F3).
4. Removing the most-connected actor is no worse than random removal across all slots (breaks F4).
5. All post-loss function change is explained by direct partners only (breaks F5).
6. Function declines linearly and recovers fully on driver reversal (breaks the world-sourced threshold detail F6).
7. A managed system restores function by subtraction, or stays solved without further work (breaks F7).
8. A new function appears with no new atom and no recombination (breaks F8).
9. A single unconditional rule predicts both outcomes everywhere with zero residual (breaks F9).

If any fires, the claim is withdrawn or narrowed accordingly. Until one is run, no part of this is `grounded`.

---

## 5. Recommendation

1. Ask the disaggregated question: per function slot, is a substitute composition reachable in the enumerated habitat, and does the assay discriminate that function? (F1, F3, F9)
2. Enumerate the habitat outward until the cascade stops mattering before scoring topology (F5, Fig 11 :44).
3. Keep arrangement change separate from contact change; a re-wire is only a success if `left(R,φ)` falls (F2).
4. Match the risk question to the loss pattern; selective loss of connectors is the dangerous case (F4).
5. In managed systems, budget for permanent work and introduction, not one-off subtraction (F7, F8).
6. Use filters for the budget and witnesses for the verdict (Fig 9 :60). Connectivity is not an answer.
7. Send the generator, not the conclusion. Fig 4 :22 "Only methods cross up. Only head starts come down."

---

## 6. Canonical usage check

Two local canonical sources were read after the first sections and govern how figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo", and "a reading that makes one contradict another has misidentified its domain, not found a flaw". The framework returns "what a missing thing would have to look like (a shape, not a name)" and stops at the limit of the instruments, recording the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/figures/THE_FORMULA.md`: step 7 separates SEARCHED, INWARD and OUTWARD; underivable-in-principle and unreachable-at-this-budget are different facts with different instructions.

**SEARCHED / INWARD / OUTWARD applied to ECO-0019.** SEARCHED: is the discriminating condition already inside ecological network theory? Largely yes for redundancy, connectance and nestedness (Memmott 2004, Solé and Montoya 2001, Lever 2014), so more of the same metric is not owed. INWARD: sharpen the assay per function slot and enumerate cascades to depth (Fig 1 :19, Fig 11 :44). OUTWARD: import the habitat-and-reach framing from Fig 11, which predicts that valence is residual-relative and that loss is a reach fall. These are separate tracks and are never read against one another.

### Retractions and confirmations

| earlier reading | status after canonical check |
|---|---|
| "Ecological networks preserve function by reorganizing" | **Retracted.** In an unmaintained habitat there is no seat and nothing selects for function; Fig 11 :56. The phrase smuggles a goal into a pure-contact system. |
| "Connectivity is the answer to when networks reorganize" | **Retracted to a filter.** Fig 9 :60; Rojas et al. 2025 show network-centrality importance differs from nutritional importance. |
| "A highly connected species is intrinsically important" | **Retracted.** Fig 11 :49, :51 make valence residual-relative and deny a standing list. |
| "Rewiring means the function is safe" | **Narrowed.** Fig 11 :40 plus Rojas et al. 2025: a re-wire with positive leftover residual is not success. |
| "Food webs collapse, pollination networks do not" | **Dissolved by re-census.** Solé and Montoya 2001 and Memmott et al. 2004 differ in loss pattern and network type, not in law. Fig 9 union reading applies. |
| "The threshold is figure-derived" | **Retracted.** It is single-source world corroboration (Lever et al. 2014); the figure gives permanent work, not a critical point. |
| Fig 11 habitat as a domain with a nameable anchor | **Confirmed.** Anchor = measured persistence of function, which does not update on what frames think (Fig 2 :29). |
| F9 union reading | **Canonically confirmed.** Fig 9 :4 and :57; unbundle before searching. |

### Strains sent to the log

- The threshold/hysteresis detail (F6) is world-sourced, not figure-derived. Marked `single-source`; it does not get verdict weight from the figures.
- Whether a settled rewired interaction counts as an atom for the next function (Fig 12 :104) needs an instrument, not an argument. Recorded as an open type question in `06_isomers_and_order.md`.
- "Network" is a structure (Fig 13 :24), not a state; no strain here, but a common category error in the literature worth naming.

### Updated verdict

The shape survives: per function slot, reorganization is a mint that pays only if it lowers leftover residual, function loss is a reach fall, the habitat must be enumerated to cascade depth, and recovery of a new role requires import. The unconditional phrasing of the question does not survive; it is a union compound. Nothing in this audit is `grounded`. Strained after re-census: two items, both named above, neither hidden.
