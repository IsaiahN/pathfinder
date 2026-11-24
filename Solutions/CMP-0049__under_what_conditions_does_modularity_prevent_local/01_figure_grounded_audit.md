# Figure-grounded audit: under what conditions does modularity prevent local failures from becoming systemic cascades?

**Mode of this document: `specified` on the conditions, `general` on the structural shape, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." No measurement of a real cascade settles the conditions derived here.

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, 2026-11-19): "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post" while "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Primary source of all figure quotes:** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read verbatim this session. Every `Fig N :line` below was checked against that extract, not against a summary or a memory.

---

## 0. The residual, in effect terms

A failure fires on one slot. The question is what decides whether the residual stays on that slot or appears on many slots. Stated as an effect:

> R = a positive residual on slot s at time t. Containment means R(t+1) is still confined to s. A systemic cascade means R(t+k) is live on a set of slots S with |S| growing in k.

The thing being decided is the condition under which the first outcome obtains. The two options lead to different operational consequences:

- **Option A, containment:** the failure costs one module and the module can be repaired or replaced. The system-wide reading stays near zero while one slot is live.
- **Option B, cascade:** the failure propagates across module boundaries and the cost is system-wide. The system-wide reading moves only after many slots are already affected, so the signal arrives late.

**Bind the sought shape as an ordinary term (Formula "Direction").** The shape an answer would have, written down before the search so it can accrue a residual, is:

> **Containment-shape:** a structural arrangement in which the specific channel the failure needs to travel is absent, or filtered, at the boundary between the failing module and the rest, at the moment the failure fires.

This is deliberately a shape, not a number. It does not say "raise modularity Q above 0.6." Fig 9 :32: "you get a kind of thing, never the answer itself." The refuter in section 3 is aimed at this bound term, not at a preferred outcome.

---

## 1. Domain census (before choosing any figure line)

### 1.1 R by arity, symmetry and scale

- **Arity:** two or more. One initiating slot plus the set of downstream slots. A cascade is a relation from one to many, so a single-slot figure line cannot by itself close the residual.
- **Symmetry:** propagation is directed and channel-specific. Influence travels along relations (Fig 13 :23-24: "network", "that entities relate, and influence travels"). A failure that travels one way need not travel back. Modularity is a property of the arrangement of bonds, not of the atoms at the nodes (Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording.").
- **Scale:** explicitly cross-scale. The initiating failure is local; the outcome is systemic. Fig 11 :52-53 names the mechanism: "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."

### 1.2 One line per domain: actors, currency, anchor

**Domain 1, framework-internal structure and contact.**
- Actors: the six terms (Space, Time, Energy as states; Spectrum, Gradient, Network as structures), the seven bonds and negation, the membrane between sizes, the habitat's actors and relations.
- Currency: contact, residual per slot, composition inside `closure(Γ)`.
- Anchor: the figures as metalaws, plus the ground for any measurement. A nameable anchor exists, so this is a domain.
- Question type: partition at the boundary (which bonds cross the membrane) and union inside the cascade (structure plus dynamics).

**Domain 2, the network-resilience and complexity frame (the world).**
- Actors: nodes, modules, inter-module links, loads, thresholds, failure modes (overload, exposure, common cause, targeted bridge removal), observers.
- Currency: cascade size, robustness index, systemic risk index, modularity Q, rewiring cost.
- Anchor: measurement or simulation on real networks, power grids, supply chains, pollination and herbivory networks, interbank and firm-level exposures. Nameable, so this is a domain.
- Question type: union compound. The structure and the propagation dynamics are two conditions that must both bind.

**Domain 3, the verification and outreach frame.**
- Actors: expert readers with public, checkable ground contact.
- Currency: agreement and residuals.
- Anchor: the ground, never agreement (Fig 2 :35, :45). Nameable.
- Standing in this run: all seats draw on one evidence pool (the same figure extract, the same essays, the same opened web pages), so this domain's independence is zero. Its agreement is internal consistency, not corroboration.

### 1.3 Partition or union

The question as asked bundles two conditions:

1. a structural condition (modules exist, with sparse inter-module coupling), and
2. a dynamical condition (the failure travels along a channel that the structure either passes or blocks).

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :57: "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound." So this is a **union**, and the two conditions need separate loops. A single lever (raise modularity) clears only the region where structure alone binds; it leaves the intersection where the failure travels by a channel the visible topology does not represent. This is the central re-census result and it is carried into every later file.

### 1.4 Order by dependency (Fig 3)

1. Perceive the failing slot (Fig 1 :19, per-slot residual) before naming a global robustness score.
2. Acquire vocabulary for the boundary: membrane, coupling, overlap, common cause, bridge.
3. State the objective in the system's own terms: containment means a residual stays on one slot (Fig 3 :9-11).
4. Describe the residual in effect terms, then choose a frame (Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit").
5. Refuse before mint (Formula step 2); settle each module's local behaviour before composing the cross-module claim (Fig 12 :104).

A reading taken below the break is not a weak reading; it is a reading of nothing (Fig 3 :22-23). So a global cascade metric taken before the per-slot residual is measured is not evidence of containment.

---

## 2. Figure census

Quotes are verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Strained readings are named, not smoothed over.

| figure | bearing on this residual | reading after census | status |
|---|---|---|---|
| 1 The Agent | residual per slot, never aggregated; a global R near zero with one live slot is a legal state | containment must be measured per slot; a global score hides the live module | direct |
| 2 The Ground | independence between frames; common cause collapse; agreement disqualifying | low inter-module overlap = independence; hidden shared source defeats modularity | direct |
| 3 Dependency Chain | ordered by dependency; reading below the break is a reading of nothing | describe the failing slot before scoring the system | direct |
| 4 The Membrane | boundary between sizes; a filter with a direction, not a wall | modularity filters by channel; it does not categorically block | direct, decisive |
| 5 Mint Pipeline | three guards as product; gap has a fifth kind (refuted) | no new primitive is minted here; the "raise Q" term is a reuse | supporting |
| 6 Closure / Reachability | no frame escapes its own closure; inward instrument fails on an axis that cannot carry it | a module's internal composition cannot generate a cross-module failure; Q is an instrument with a limit | direct |
| 7 Room Chain | "same closure, handed along; agreement compounds, evidence does not" | a cascade through near-identical modules is a mirror chain, not extra evidence of fragility | supporting |
| 8 Union Surplus | "Two frames that overlap almost completely are one frame wearing two names"; closure idempotent | high overlap means the modules are already one frame; the union has no surplus barrier | direct |
| 9 Leave / Arrive | union versus partition; describe before looking; filters versus witnesses | the question is a union; split it; do not let a single Q score hand you the verdict | direct, decisive |
| 10 Ground Maintainer | ground does not decay, channel does; bring a characterised residual | measure per-slot contact, not agreement among modules | supporting |
| 11 The Habitat | contact cascades; habitat enumerated, never composed; isolation is substitution | enumerate the contact chain outward until the cascade stops mattering; an isolator substitutes a habitat | direct |
| 12 The Bond | the arrangement is the substance; four structures including cycle and functional group | modularity is an arrangement property; the failure path is a cycle, not a list of nodes | direct |
| 13 Minimum Viable Set | network as a structure; remainder compounding through an amplifying chain | the cascade is a remainder compounding; network is one of six structures, not a sixth kind of state | direct |
| Operators / Symbols | R is the aim and always a slice; the ground settles | R is measured per slot, never as a single global number | supporting |
| Formula | step 7 SEARCHED / INWARD / OUTWARD are three questions; mode rule | first ask whether the containment term is already in the frame, then whether the instrument can hold it, then import | procedural |

---

## 3. Findings

### F1 — A cascade is a contact cascade, measured per slot, that crosses scales (triangulated)

Fig 11 :44: "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."

Fig 11 :52-53: "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."

Fig 13 :32: "a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise."

Fig 13 :23-24: "network" and "that entities relate, and influence travels."

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

A systemic cascade is not many independent local failures. It is one residual that travels through contact, with the effect appearing steps away from the cause, and the per-slot signal is the only one that shows where to look. Modularity is therefore a claim about the *contact path*, not about the count of nodes or the average degree.

**Triangulation status:** `triangulated`. Fig 11 governs the enumeration of contact and the cross-scale reach; Fig 13 governs the substrate structure (network, influence travels) and the amplifying remainder. These are two figures with low overlap, one about habitat enumeration, one about what a structure is. Both bear on the same residual, so the conclusion that the cascade is a contact path is supported from two directions.

**Refuter:** show a systemic cascade in which the residual on distant slots is not reachable by any enumerated contact chain from the initiating slot, or show that per-slot residuals stay flat while a global score collapses. Either would break F1.

### F2 — Modularity is a membrane: a filter with a direction, not a wall (single-source in the figures)

Fig 4 :21: "The membrane is the boundary between the sizes, and the rule about what may cross it. Not a wall: a filter with a direction."

Fig 4 :22: "Only methods cross up. Only head starts come down."

Fig 4 :23-24: "upward: a method that can be reapplied. Never the recording of a particular success." and "downward: something that makes the next search cheaper. Never a replay of what worked once."

The module boundary does not stop everything. It determines *what kind of thing* may cross. So the honest claim is not "modularity prevents cascades" but "modularity prevents the classes of propagation its filter does not pass, and passes the classes it does." This is the figure-grounded reason the world literature splits: compartmentation that weakly connects modules contains overload failures in trophic networks (Thébault and Fontaine 2010), while strong local communities with sparse bridges *weaken* connectivity robustness when the attack targets the bridges (Mou and Hayashi 2025). Both results are filters with a direction, not a contradiction at the ground.

**Triangulation status:** `single-source` for the figure claim (Fig 4 is the only figure that names the membrane). The world conflict corroborates the filter reading but, because it is secondary and drawn from a different frame, it does not raise the figure status to triangulated.

**Refuter:** produce a case where a module boundary passes a failure class that the figure's filter reading says it blocks, with the channel explicitly named and measured, or show a case where a boundary blocks everything including the "head start" that makes repair possible. The second would make the membrane a wall, which Fig 4 forbids.

### F3 — Containment requires genuine independence between modules, not just drawn boxes (triangulated)

Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence."

Fig 8 :29: "low overlap: B does not draw on A's evidence."

Fig 8 :48-49: "How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus. Two frames that overlap almost completely are one frame wearing two names."

A module that draws on the same supply, the same load source, or the same information channel as its neighbour is not a separate frame. It is one frame wearing two names, and a failure is already systemic before it "crosses." Drawing a boundary on a diagram does not create independence; independence is a measured property of how little the two sides share. This is why Newman (2006) describes modular structure as groups with "some degree of independence", and why the supply-chain rewiring study finds that topological change can cut systemic risk by 16 to 50 percent while no single global measure predicts the cut.

**Triangulation status:** `triangulated`. Fig 2 defines independence for frames and warns about a hidden shared source; Fig 8 defines low overlap as the condition for a union surplus. Different quantities, low overlap between the figure routes.

**Refuter:** exhibit two modules with measured near-zero overlap of channels that nevertheless fail together from a cause internal to one of them. That would break the independence condition and force a re-census of "modularity" as a property of the drawn boundary rather than of the shared channel.

### F4 — A hidden common cause defeats modularity however clean the topology looks (single-source in the figures)

Fig 2, collapse 2: "collapse 2: common cause" and "(hidden shared source)".

Fig 2 :20-21: "they never talk, and still agree" and "so the agreement is the pool talking, not two frames confirming each other."

Fig 2 :39: "Correlation has valence."

Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool."

The figure's second collapse is the exact structural analogue of correlated risk. Two modules need not communicate to fail together; if both range against one hidden source, their co-failure is the source talking. The visible inter-module link count can be zero and the system can still be one risk pool. This is the figure-grounded reason the question cannot be answered by topology alone.

**Triangulation status:** `single-source` for the figure claim (Fig 2, panel 2). The world sources corroborate strongly: the cascading-failure overview states that "systemic risk is not due to individual institutions per se, but due to the interconnections" and the supply-chain study reports a "systemic risk core" whose "failure of one of them typically leads to the failure of most firms in the core." Corroboration is secondary, so the figure status stays single-source.

**Refuter:** show two modules with a demonstrably distinct, unshared source of failure whose co-failure is still explained by correlation alone with no channel and no shared cause. If that can be measured, F4 is wrong.

### F5 — Containment must be read per slot; a global score hides the live module (triangulated)

Fig 1 :13: "a global R near zero with one live slot residual is a legal state."

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

Fig 6 :29: "inward: is our representation adequate to hold it? The instrument extends access. Fails by refining forever on an axis that cannot carry it. Sharpen in our own terms."

A single global modularity score is an average over slots and over conditions. It cannot show which module is live. The supply-chain paper reports exactly this instrument limit: "We find no particular topological measure that explains systemic risk mitigation" and "systemic risk depends on the network structure at a mesoscale, as explored in [21], which is not captured by the commonly used measures." Wikipedia's modularity entry records a parallel limit: "modularity suffers a resolution limit and, therefore, it is unable to detect small communities."

**Triangulation status:** `triangulated`. Fig 1 governs the per-slot residual; Fig 6 governs the failure mode of an instrument sharpened on an axis that cannot carry the quantity. Two different figures, low overlap.

**Refuter:** exhibit a system in which a single global modularity value predicts containment across multiple failure types and multiple real networks with no per-slot information. That would break the per-slot requirement.

### F6 — The question is a union compound; unbundle before searching (decisive, triangulated)

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."

Fig 9 :55-58: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." and "a case in two conditions is not a harder case of either."

Fig 9 :53: "Nobody chooses. The gap does, and the gap is only as good as its description."

Fig 8 :45: "Two frames together reach what neither reaches alone."

The two conditions are structure (modularity, coupling, overlap) and dynamics (how the failure propagates: overload redistribution, exposure, threshold, common cause). The world conflict is the signature of a union:

- Thébault and Fontaine (2010), abstract: "the stability of trophic networks is enhanced in compartmented and weakly connected architectures", while "a highly connected and nested architecture promotes community stability in mutualistic networks." The same word, "stability", responds oppositely to connection depending on interaction type.
- Mou and Hayashi (2025), abstract: "the robustness is weakened by strong local communities in spatial networks" and "These results highlight the potential of long-distance links in mitigating the negative effects of local community on the robustness."
- Buldyrev et al. (2010), abstract: "failure of nodes in one network may lead to failure of dependent nodes in other networks. This may happen recursively and can lead to a cascade of failures."

These are not three answers to one question. They are three cases of a compound. The conflict sends us back to the census, not to a verdict flip (master plan section 2: a conflict sends us back to the domain census).

**Triangulation status:** `triangulated` for the union reading. Fig 9 governs union versus partition; Fig 8 governs why the union of two frames has a surplus and why overlap decides it. Two figures, different quantities.

**Refuter:** find a single structural lever that predicts containment across interaction types, failure modes and network substrates with no reference to dynamics. That would make this a partition, not a union, and F6 would be withdrawn.

### F7 — A module's own closure cannot manufacture a cross-module failure (triangulated)

Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."

Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."

Fig 7 :12-13: "same closure, handed along; agreement compounds, evidence does not."

If a module is genuinely closed, a failure inside it cannot produce an atom that travels to another module. What crosses must be carried by contact (Fig 6 :11-14: "IMPORT", "source gate: provenance", "shadow test: explains a gap", "the only operator that moves the wall"). A cascade is therefore evidence that a channel existed, whether or not it was drawn on the diagram. This also explains Fig 11 :66: "Isolation is not removal of the habitat. It is substitution of one habitat for another." An isolator does not delete the coupling; it replaces it with a different set of contacts, some of which were not chosen.

**Triangulation status:** `triangulated`. Fig 8 gives the idempotence proof; Fig 6 gives the import rule; two figures, low overlap. Fig 7 corroborates the mirror-chain failure.

**Refuter:** exhibit a failure that crosses into a second module with no contact, no shared source, and no import of any kind. That would break closure idempotence as applied here and force a re-census of what "module" denotes.

### F8 — The framework returns conditions (a shape), not a threshold of Q (single-source, with a world instrument limit)

Fig 9 :32: "you get a kind of thing, never the answer itself."

Fig 9 :30-31: "your words are borrowed too, so describe the effect rather than the cause."

Fig 8 :53-54: "Residual first, frame second." and "The atom cannot be derived from inside A. But the union is searchable from contact, so underivable is not unknowable."

The canonical figures README states the limit directly: the framework reports "what a missing thing would have to look like (a shape, not a name)" and stops where the instruments stop. So the deliverable is the set of conditions, not an optimal modularity value. A numeric Q threshold would be a name where the framework returns a shape, and it would be instrument-dependent anyway (F5).

**Triangulation status:** `single-source` for the figure claim (Fig 9 plus the canonical README, same framework pool, so one witness). The world instrument limits (modularity resolution limit; no single topological measure predicts risk mitigation) corroborate but are secondary.

**Refuter:** produce a ground measurement that assigns a unique Q threshold for containment across systems with low overlap of failure mode and substrate. Until one exists, any number is a binding, not a derivation.

### F9 — What survives, with mode attached

| claim | mode | figure / source |
|---|---|---|
| A cascade is a contact path from one slot to many; it is measured per slot | `general`, structural | Fig 11 :44, :52-53; Fig 13 :32; Fig 1 :19 |
| Modularity is a boundary that filters by channel, not a wall | `general`, structural | Fig 4 :21-24 |
| Containment needs genuine independence, not a drawn box | `specified`, falsifiable | Fig 2 :31; Fig 8 :29, :48-49 |
| Hidden common cause defeats modularity | `specified`, falsifiable | Fig 2 :20-21, collapse 2 |
| The question is a union of structure and dynamics | `specified`, falsifiable | Fig 9 :54-58; Fig 8 :45 |
| A numeric Q threshold for containment is not derivable here | `general`, limit | Fig 9 :32; canonical README |
| Which specific module, coupling value or network passes the filter in a given case | not claimed | needs a ground measurement |

---

## 4. Pre-registered refuter (written before the conclusion)

"A falsifier written before the run is a design instrument, not only an honesty device." The containment-shape is refuted if any of the following is demonstrated:

1. A systemic cascade in which distant slots become live with no enumerable contact chain from the initiating slot and no hidden shared source. This breaks F1 and F7.
2. A module boundary that passes a failure class it should filter, or one that blocks every class including the head start needed for repair. This breaks F2.
3. Two modules with measured near-zero channel overlap that still fail together from an internal cause in one of them. This breaks F3 and F4.
4. A single global modularity value that predicts containment across interaction types, failure modes and substrates with no per-slot information and no dynamics term. This breaks F5, F6 and F8.

If any fires, the shape is withdrawn, not softened. Until one is run, nothing here is `grounded`.

---

## 5. Recommendation

1. **Unbundle before you search.** Report two conditions, structure and dynamics, and mark their intersection as the compound that matters (F6).
2. **State the filter, not a wall.** Say which propagation classes a module boundary passes and which it blocks; do not say modularity prevents cascades in general (F2).
3. **Measure per slot.** Report the migrating residual, not a global robustness average (F1, F5).
4. **Test independence, not partition count.** Look for shared sources and common causes before counting inter-module links (F3, F4).
5. **Refuse the numeric threshold.** Hand over the shape and the refuter; let the ground supply the number (F8).
6. **Lead outreach with the residual and the refuter** (`02_outreach_email.md`), and offer links only after a verdict on stage 1 is recorded.

---

## 6. Canonical usage check (figures README + metalaws, re-read after findings)

Two local canonical sources govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also "a reading that makes one contradict another has misidentified its domain, not found a flaw", and the limit: "what a missing thing would have to look like (a shape, not a name)", then "Indiscernibility is not identity."
- The metalaw reading carried in the framework reference set: design questions are answered by derivation, not escalation; figures are primary and world sources corroborate but never overrule.

**Effect on this audit:** F2's apparent conflict between "modularity contains" and "modularity weakens robustness" was initially recorded as a strain on Fig 4. Re-census under the canonical rule resolves it: the two world results govern different propagation classes (overload redistribution versus targeted bridge removal), so they are different objects. Fig 4 says a membrane has a direction. No figure was changed; the domain was re-censused.

### Retraction and confirmation log

| earlier reading | status after canonical check |
|---|---|
| "Modularity prevents local failures from becoming systemic cascades" as a flat verdict | **Retracted.** Too strong. Fig 4 :21 makes the boundary a filter, not a wall. Replaced by the channel-specific containment-shape in section 0. |
| "The world conflict means the figure verdict is wrong" | **Retracted.** Conflict sends the search back to the census (master plan section 2). The union reading in F6 absorbs it without flipping the figure verdict. |
| Fig 4 versus Thébault / Mou "strain" | **Dissolved by re-census.** Different propagation classes, as the canonical re-census rule requires. |
| Fig 2 "common cause" applied to correlated financial risk | **Confirmed, not strained.** Panel 2 of Fig 2 is literally a hidden shared source; the finance and supply-chain literature is a low-overlap corroboration. |
| "Higher modularity Q is the answer" | **Refused.** Fig 9 :32 returns a kind of thing, and the world instrument limits (resolution limit; no single topological measure) agree. |
| URL `https://www.nature.com/articles/nature09873` considered for financial systemic risk | **Retracted before use.** Fetch showed it is an unrelated ageing / amyloid paper. It was never cited and is not in the ledger. |
| Web search integration | **Recorded failure.** The search tool returned no results for all four queries. All sources were found by direct fetch of known URLs or via the Europe PMC REST endpoint, and were opened. |

---

## 7. Round trip note (carried into `11_audit.md`)

The condensation used across this folder is: "containment is a filtered boundary plus independence plus no common cause." The round trip from the figures to concrete network numbers drops at least: (1) the per-slot residual that the global Q averages away; (2) the directionality of the membrane, which a single pass/block reading loses; (3) the union structure, which a single-lever intervention erases. The gap R_T is therefore nonzero and qualitative; it is enumerated in `11_audit.md`, not set to zero.

---

## 8. Honest stop

The six-term set and the membrane rule are the framework's own guess at how a system composes, not a measurement of any particular grid, ecosystem or market. Fig 13 :134: "Unreachable is a verdict here, not a silence." What this audit reaches is the shape of the conditions. What it does not reach is the numeric coupling at which a given real system crosses from containment to cascade. That number needs a ground: a measured cascade on a named network, with the per-slot residual and the channel recorded. Until then the verdict is `candidate`, `specified`, ungrounded.
