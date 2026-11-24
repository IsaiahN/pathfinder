# Figure-grounded audit: which infrastructure failures could cascade across regions or sectors

**Mode of this document: `general` on the structural shape, `specified` on the per-domain findings. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** The Recursive Self-Improvement Trap essay calls LLM output "simulacra" and says "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle which infrastructure fails; it can only say what a settled answer would have to look like. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, cited as `Fig N :line`), `THE_FORMULA.md`, `FIGURES_README_canonical.md`. World sources opened this session are listed in `10_source_ledger.csv` and used only as secondary corroboration.

---

## 0. The residual, stated in effect terms

The question asks for a name: *which* failures cascade. Observationally we have a local failure (a line trips, a pump stops, a fibre cut) and a distant outcome (blackout across a region, water pressure loss in a city, food insecurity in an urban centre after a rural drought). What is missing is the rule that says which links carry the cascade, to what order, and where it stops.

- **Option A (produce the list now):** a fixed catalogue of "critical" infrastructures. Leads to a static name whose valence is relative to the residual (Fig 11 :49), so it changes meaning when the hazard changes; and to first-order scoping that misses the effect three steps out (Fig 11 :52-53).
- **Option B (produce the shape and the method, refuse the name):** an enumeration procedure plus a recorded stop until the ground settles the list. Leads to a checkable generator and an honest "unreachable at this budget" rather than a fabricated catalogue.

**Binding the sought-for shape as an ordinary term** (formula section "Direction": a frame cannot check the direction of its own question, so make the shape a term that accrues a residual). The shape is bound as:

> A cascade answer is an ordered enumeration of contact links from a source node, carried to second and third order, with each node's valence relative to the residual, over a union of sector and region conditions that has been unbundled before search, with every cut kept ranked and reversible.

That sentence is the claim under audit. It is refusable (§3) and it is not a ground reading.

---

## 1. Domain census, done before choosing any figure line

### 1.1 R by arity, symmetry, scale

- **Arity:** at least two (source node and affected node), but the question bundles sectors **and** regions, so R is a union over overlapping conditions, not a single binary relation.
- **Symmetry:** ordered. A failure propagates from A to B; B failing does not imply A fails by the same mechanism. Influence travels with direction, which is what distinguishes a gradient from a mere distribution (Fig 13 :22 "a difference that can be spent"). So the relation is directed, not symmetric.
- **Scale:** local node, network, region, cross-region, national/transnational. Multiple scales are in play, which is exactly why a first-order scoping fails.

### 1.2 One line per domain: actors / currency / anchor

| domain | actors | currency | anchor (nameable?) | question type |
|---|---|---|---|---|
| D1 Within-network physical cascade | nodes, lines, pumps, protective relays, operators, load | load versus capacity, overload transfer, positive feedback | yes: measured load flow, relay logs, outage records | partition (which link is the break) |
| D2 Cross-sector interdependent cascade | electricity, communications, water, transport, health, finance and their dependency links | dependency, cascading failure across networks | yes: observed cross-sector outages and dependency contracts | union (overlapping conditions) |
| D3 Cross-region / spatial cascade | settlements, connecting infrastructure, trade and remittance flows, provisioning ecosystems | flows of water, food, energy, people, capital | yes: observed drought-to-food and flood-to-isolation cases | union (sector and region overlap) |
| D4 Verification / analysis frame | analysts, models, datasets, peer readers | residuals and agreement | yes: the ground, never agreement | triangulation (frames range against ground) |

Every domain has a nameable anchor, so all four are domains. A domain without a nameable anchor would not be admitted yet.

### 1.3 Partition or union

The four domains form a **union, not a partition**. A single power failure can be simultaneously a within-network cascade (D1), a cross-sector cascade into communications and water (D2), and a cross-region cascade into another state or country (D3). Each overlap is a compound with its own loop, so verdicts are kept separate and are never averaged. Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." and Fig 9 :57-58 "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."

### 1.4 Order by dependency (Fig 3)

1. Enumerate the habitat by contact before ranking anything (Fig 11 :43-44).
2. Sort each link into broken versus novel before minting a term for it (formula step 2; Fig 5 :10-14).
3. Settle each first-order link against the ground before composing the second-order cross-sector link (Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it.").
4. Only then ask "which failures", because effort spent above the break arrives at a step that cannot use it (Fig 3 :20-21).

---

## 2. Figure census (quotes first, conclusions after)

Every quotation below is copied verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` and cited as `Fig N :line`. A line that fits only with a strain is recorded as strained and re-censused, not smoothed over.

| figure | bearing on this question | verdict after census |
|---|---|---|
| 1 The Agent | residual indexed per slot, never aggregated; a global near-zero with one live slot is legal | governs D1: rank individual links, never average sector risk |
| 2 The Ground | anchor must not update; independence; correlation disqualifies a verdict | governs D4: the check is triangulation, not a poll of agreeing readers |
| 3 Dependency Chain | ordered by dependency, not importance; optimize above the break cannot rescue below | governs D1 and the order of the whole derivation |
| 4 The Membrane | what crosses between sizes (methods up, head starts down); round-trip gap | STRAINED if used for physical propagation; re-censused to method transfer only (see F6) |
| 5 Mint Pipeline | four gap kinds plus refusal; three guards as a product | governs when a new link term is owed versus when to re-fit |
| 6 Closure / Reachability | import is the only operator that moves the wall; instruments improved from worse ones | governs D4: an unlisted link is owed from a frame with a different closure, not invented |
| 7 Room Chain | agreement is variation, selection between rooms is where the ground votes | governs outreach only, never the verdict |
| 8 Union Surplus | residual first, frame second; search that finds nothing is not proof of absence | governs the method for importing a new sector frame |
| 9 Leave / Arrive | unbundle a union before searching; keep cuts ranked and reversible; filters are not witnesses | governs D2 and D3 directly |
| 10 Ground Maintainer | verifier non-access; bring a characterised residual, never the source | governs the two-stage offer in `02` and `08` |
| 11 The Habitat | enumerate by contact outward; valence relative to residual; contact cascades; isolation substitutes | **primary figure for the shape of the answer** |
| 12 The Bond | directed bonds; cycle sign; catalyst; two currencies (bits and actions) | governs the modelling notation and mitigation accounting (see F7) |
| 13 Minimum Viable Set | network is a structure: entities relate and influence travels; shape not a name | governs the directed structure and the honest stop |
| Operators table | → sequence is ordered; ⋛ comparison is a threshold relation | a notation binding from network science, not a figure derivation (F7) |
| Symbols table | R is the aim and always a slice; ground is the anchor | R here is a slice: what cannot be perceived at second order is residual |

---

## 3. Findings F1..F8

### F1 The habitat must be enumerated by contact, not composed (primary, governs the shape)

Fig 11 :43 "The habitat is enumerated, never composed."
Fig 11 :44 "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."
Fig 11 :48 "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."

A list of "critical infrastructures" composed from a vocabulary is exactly what these lines forbid. The admissible object is an enumeration read off the world, extended outward by contact until the residual stops registering. This is why the answer to "which" is a method plus a stop, not a static catalogue. Mode: `general` (structural), triangulated with Fig 9 :32 "you get a kind of thing, never the answer itself" (low overlap: enumeration rule versus lookup limit).

### F2 First-order scoping misses the effect that matters

Fig 11 :52-53 "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."

This is the figure's own cascade case. It says the residual that mattered was three steps out, so a one-hop dependency map is not merely incomplete, it is aimed at the wrong quantity. The 2003 Northeast blackout and the Italy 2003 case in the world literature show the same shape (electricity to communications back to electricity, a positive feedback). Mode: `specified`; triangulated across Fig 11 and Fig 3 :19 "Optimising a link that already works cannot rescue one that does not." (low overlap: habitat web versus dependency chain).

### F3 Valence is relative to the residual, so no standing critical list survives a hazard change

Fig 11 :49 "An actor’s valence is relative to the residual, not a property it carries."
Fig 11 :51 "No standing list of good actors survives a change of residual."

A node that is a benefactor for one residual (a reservoir that buffers drought) can be a malfactor for another (the same reservoir failing and flooding downstream). The figure names the relation, not the kind: Fig 11 :50 "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds." Any answer that labels infrastructure as intrinsically critical has committed the error these lines name. Mode: `specified`; single-source within the figures (Fig 11 only), corroborated by the IPCC statement that risks transfer between sectors and places.

### F4 Unions must be unbundled, and cuts kept reversible

Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."
Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
Fig 9 :41 "so keep every cut ranked and reversible."

"Across regions or sectors" is a union of two overlapping conditions. A single lever (harden the grid) clears the region where only the sector condition holds and leaves the intersection (a grid failure that also cuts water and crosses a border) standing, because the second condition still binds. The remaining residue is categorically different, a specific compound, not a harder case of either. Mode: `general`; triangulated with Fig 11 :52-53 (low overlap: union logic versus contact enumeration).

### F5 Isolation is substitution, and introduction is available while exclusion is not

Fig 11 :66 "Isolation is not removal of the habitat. It is substitution of one habitat for another."
Fig 11 :67 "Move the residual and you must reproduce everything its goal required, and you inherit the new habitat’s actors, which you did not choose."
Fig 11 :61-62 "The seat’s power is asymmetric. Introduction is available; exclusion is not. You can add an actor and you cannot subtract the habitat, because contact is a fact about the world and does not consult you."

Mitigation advice follows the figures without naming a technology: decoupling or relocating a dependent function does not remove contact, it substitutes a habitat, inheriting unchosen actors and hiding what failed to reproduce (Fig 11 :68 "what you failed to reproduce is invisible until the goal fails"). Redundancy is introduction; it is available. Subtracting a dependency is not. Mode: `general`; single-source (Fig 11), with the test-harness corollary Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."

### F6 Strained reading retracted: the membrane is not the cascade

The tempting move is to use Fig 4 (membrane between scales) to explain how a local failure "crosses up" into a regional or global one. That reading strains: Fig 4 :22 "Only methods cross up. Only head starts come down." governs what may pass between a single-agent model and a population model, not physical propagation. Forcing it would make Fig 4 contradict Fig 11, which the canonical usage rule forbids ("a reading that makes one contradict another has misidentified its domain"). Re-census: Fig 4 governs the transfer of *methods* between levels of analysis; Fig 11 and Fig 13 govern the *physical* cascade. The strain is dissolved by assigning different objects. The round-trip rule Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." still applies to condensing the figures into a formula (see `11_audit.md` R_T).

### F7 The bond notation is a binding, not a derivation

Fig 13 :24 "that entities relate, and influence travels" licenses a directed structure (network, one of the six). Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." names the feedback that turns a sequence into a cascade. Fig 12 :119 "catalyst. A part that survives its own use." names why a protection system that regenerates behaves differently across uses from one that is spent.

But writing a cascade as `A → B ⇒ C` uses the Operators table glyphs as a notation borrowed from network science. The figures' bonds compose *terms in a library*; they are not a physics of failure propagation. Fig 12 :111 "A vocabulary without bonds can name a state and cannot name a route to one." supports using the notation for the route, but it does not derive the route. This is recorded as a binding with provenance, not a figure result. Mode: `specified`; single-source for the figure definitions; the physics is unmeasured here.

### F8 The specific "which" is a gap in this derivation, not a silence

Fig 13 :134 "Unreachable is a verdict here, not a silence,"
Fig 13 :135 "It cannot say which primitive is missing, because naming it would mean already holding it."
Fig 9 :32 "you get a kind of thing, never the answer itself"

The figures give the shape and the enumeration method; they do not and cannot supply the actual dependency graph of a real region. That graph is the ground. Without reading it, a named list would be a fabrication, so the honest verdict on "which" is `gap` pending a ground reading. Fig 8 :39 "So a search that finds nothing is never a proof of absence." prevents this from being read as "no failures can cascade." It says the name is unreachable from the figures alone at this budget. Mode: `general`; triangulated across Fig 13 and Fig 9.

---

## 4. Pre-registered refuter (written before the conclusion)

A falsifier written before the run is a design instrument. The shape claim in §0 is refuted if any of the following holds:

1. A cascade is observed to travel through a contact link that a completed habitat enumeration (Fig 11 :43-44) did not list even at third order. This breaks the "read it off the world" rule, so the enumeration was not actually complete.
2. A cascade is found whose propagation is symmetric in the same domain (A fails through B exactly as B fails through A, identical mechanism), where the census declared the relation ordered. This breaks the directed-structure reading of Fig 13 :24.
3. A single lever clears a case the analysis declared a union compound (Fig 9 :55-58), so the unbundling was unnecessary and the compound reading is wrong.
4. Two frames drawn from genuinely different evidence pools disagree about the same cascade even after each ranges against the ground (Fig 2 :35, Fig 2 :40).

If any fires, the shape claim is withdrawn and the census is rerun. None was fired by the simulated run.

---

## 5. Recommendation

1. Lead with the shape and the refuter, not with a list (Fig 10 :52 "Bring a characterised residual, never the source.").
2. Enumerate the habitat per sector and region by contact, then extend to second and third order before ranking (Fig 11 :43-44, :52-53).
3. Unbundle the sector/region union before searching; keep every cut ranked and reversible (Fig 9 :54-58, :41).
4. Treat valence as relative to the named residual; re-enumerate when the residual changes (Fig 11 :49-51).
5. Do not claim a static critical list as grounded. Record `gap` for the name and state what instrument would settle it (Fig 13 :134-135).
6. Use filters (tier, sector, region) for the enumeration budget only. Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

---

## 6. Canonical usage check and retraction / confirmation log

Read after sections 0 through 5: `FIGURES_README_canonical.md`, which says the figures "outrank everything else in the repo" and that "the quotes are the authority, not this summary," and gives the re-census rule for apparent contradictions.

| earlier reading | status after the check |
|---|---|
| Fig 4 membrane could model local-to-regional failure propagation | **Retracted (F6).** Fig 4 governs method transfer between sizes; Fig 11 governs physical contact cascades. Different objects, no contradiction. |
| Fig 12 bonds could serve as a literal cascade calculus | **Narrowed (F7).** Bond glyphs are a notation binding from network science, not a derivation of propagation. Kept as notation, not as evidence. |
| Fig 11 :43 "never composed" forbids all composition | **Corrected.** It forbids composing the *list* from a vocabulary. Once links are read off the world, composing models of those links is allowed and is what the loop does. |
| F2 called "triangulated" across two figures | **Confirmed.** Fig 11 (habitat web) and Fig 3 (dependency chain) have low overlap in actors and structure. |
| F3 valence relativity called general | **Narrowed to `specified`.** It is tied to the residual, not a free-standing law about infrastructure. |
| "No figure line governs the 'which'" | **Confirmed as `gap`, not silence.** Fig 13 :134 explicitly licenses the verdict of unreachability; Fig 8 :39 forbids reading it as proof of absence. |
| Fig 13 versus Fig 4 apparent contradiction | **Not strained after re-census.** Different domains, matching the canonical re-census rule. |

**Strains after re-census:** one named modelling strain (bond notation as binding), zero hidden figure contradictions.

**Final status of the audit:** the shape survives and is triangulated; the specific list is a `gap` pending a ground reading; no finding was averaged across domains.
