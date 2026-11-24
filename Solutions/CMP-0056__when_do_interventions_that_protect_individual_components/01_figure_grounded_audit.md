# Figure-grounded audit: when do interventions that protect individual components increase fragility at the system level?

**Mode of this document: `general` on the structural claims, `specified` on the per-domain conditions, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." A condition under which protection flips sign is a prediction that could be measured. No measurement was taken here.

**Status: simulated derivation, not a ground reading.** This is a derived shape checked for internal consistency against the figures. It did not measure a network, an intervention or a cascade. *The Recursive Self-Improvement Trap* (Isaiah N, 2026-11-19) says LLM output can "simulate an approximate answer/output" but "the truly testable output would need to be derived from the real architecture or working the formula yourself." So this cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim extract, cited `Fig N :line`), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. World sources are listed in `10_source_ledger.csv` and were opened 2026-11-22.

---

## 0. The claim under audit

> When do interventions that protect individual components increase fragility at the system level?

Stated in effect terms: a system has components in contact. An intervention makes one component less likely to fail, or keeps it functioning under stress. We want the conditions under which that protection raises the probability or severity of failure of the whole. The question is a decision, so any verdict must carry a cost if wrong, an undoability judgment and a reversal condition (WATSON procedure step 6).

**The two options.**

- **A (additive intuition):** protecting a component reduces that component's failure rate; failure rates compose additively; therefore protecting components makes the system safer. The "when" is answered with a list of components worth protecting, ranked by how failure-prone they are.
- **B (shape plus test):** protection is an actor introduced into a habitat. Its valence is a relation to a residual, not a property it carries. "Component protected" and "system not fragile" are two conditions that bind jointly, so they form a union compound that must be unbundled before search. The answer is a set of structural conditions under which the sign flips, plus a measurement protocol per slot and a written refuter. The framework refuses to name a system-specific threshold until the ground settles it.

An answer would look like: (1) the dependency order of the checks, (2) a per-slot measurement protocol with a stated cascade horizon, (3) the structural conditions that flip the sign of the intervention, (4) a cost comparison in two currencies, (5) a pre-registered refuter. Bind that shape as an ordinary term so it can accrue a residual like anything else (`THE_FORMULA.md`, "Direction": "make the sought-for shape an ORDINARY TERM").

---

## 1. DOMAIN CENSUS (written before any figure line was chosen)

### a. R by arity, symmetry and scale (Fig 9 :22, :27-28)

- **Arity: two, bound jointly.** "The component is protected" and "the system is not more fragile" are two conditions. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." This is a union compound, not one optimization with a side constraint.
- **Symmetry: broken.** The protected slot and the downstream slots are not interchangeable. Fig 1 :19: "The residual is indexed by object slot, not aggregated." An intervention's valence is relative to the residual (Fig 11 :49). Swapping the protected slot for a downstream one changes the question.
- **Scale: three, plus a cross-scale transform.** First order (direct contact with the protected component), second order (the neighbour that absorbs the redistributed load), third order (the residual that mattered in the DDT case, Fig 11 :52). Fig 4 :20: "Only the actors, the currency and the anchor change." The loop runs at step, habitat and lineage scale.

### b. One line per domain: actors / currency / anchor

No nameable anchor means it is not a domain yet. All four below have one.

| domain | actors | currency | anchor |
|---|---|---|---|
| **D1 Habitat and cascade** (primary) | components, conditions, relations (Fig 11 :45-47), the protective intervention, the residual | contact and cascade | the ground: what actually happens to each slot and to the whole, measured |
| **D2 Signal and channel** | instruments, system-level metrics, monitors, the ground maintainer's channel | residual per slot, independence | the ground, which does not update (Fig 2 :29, Fig 10 :24) |
| **D3 Decision and search** | the designer, candidate protections, filters, two budgets | bits and actions (Fig 12 :126) | the ground settles; filters only buy budget (Fig 9 :60) |
| **D4 Modelling (the compound where D1 and D2 overlap)** | models, aggregates, shared priors, stress-test scenarios | description length | the ground; a model is not an anchor. This is Fig 10's seam (Fig 10 :11-18), so D1 and D2 must be triangulated, not negotiated |

### c. Partition or union?

**Union.** D1 and D2 share the field (both touch the same residual), a seam in Fig 10's sense, so their agreement is not automatically evidence. Inside the compound, the two conditions form a union of overlapping conditions: Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." The intersection, "component safe and system safe at horizon H", is its own compound with its own loop. Partition by slot **after** unbundling, not before. Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

### d. Order by dependency (Fig 3)

Dependency order, not importance order:

1. perception (which slot is live);
2. vocabulary (terms for what a protection affords: shield, redirect, substitute, isolate, suppress);
3. objective (what counts as "protected" and what counts as "more fragile", per slot and over what horizon);
4. planning (enumerate the habitat outward, choose a route under incomplete information);
5. learn and carry (name what worked, verify it, keep monitoring).

The break usually sits between 2 and 3, where there is no instrument (Fig 3 :24-27). Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." Most protection effort lands on the component itself, above the break, where measurements already exist.

### e. Strain test before deriving

An earlier reading tried to use Fig 13 :75 ("Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state.") as if it forbade acting on a component. That line governs composition of the six primitives, not action in a habitat. Re-census moved the derivation to Fig 11, where actors, contact and valence are governed. The strain is recorded in section 6 and the line is not used as evidence here.

A second strain was temptation to average over slots to get a single fragility number. Fig 1 :22 forbids that as a witness but Fig 9 :60 permits an aggregate as a budget filter. Both are recorded; neither is smoothed away.

---

## 2. Findings

Each finding carries its domain, verbatim figure lines quoted **before** the conclusion, a mode, a triangulation status and a refuter.

### F1 - Protection has no standing valence; the sign is relative to the residual (D1)

Verbatim first:

- Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries."
- Fig 11 :50: "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."
- Fig 11 :51: "No standing list of good actors survives a change of residual."

A protective intervention is an actor introduced into a habitat. Its valence is a relation to a specific residual, not a property of the intervention. So "protecting a component" is not intrinsically safe. The same guard, buffer or redundancy is a benefactor to one residual and a malfactor to another. This is why option A cannot answer the question and why the honest answer is a set of conditions plus a test, not a roster of safe components.

**Mode:** `general` (structural). **Status:** single-source for the figure rule, corroborated by *Moral hazard* (Wikipedia, 2026-11-22): "an economic actor has an incentive to increase its exposure to risk because it will not bear the full costs associated with that risk." Low overlap (framework metatheory versus economics). One witness, not two independent ones.

**Refuter:** exhibit an intervention whose valence is invariant across residuals, verified at the ground in at least two unrelated habitats, moving every residual the same direction with no slot-level harm. That would break the relation claim.

### F2 - An improvement that does not change contact changes nothing (D1)

- Fig 11 :40: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."
- Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone."

This is the most direct figure answer to "when." A protection that only changes the component's internal state, without changing what contacts what, cannot change system fragility at all. A protection that does change system fragility must have changed contact: it redirected load, added an actor, substituted a habitat, or cut a channel. So the "when" is a contact question, and the first check is to name the contact the intervention changes. If none is named, the claimed system-level effect is unexplained and the intervention is inert at the system level.

**Mode:** `general`. **Status:** single-source for the figure rule. The capability claim is one the figures flag as "fit cases already known and have not been tested forward" (Fig 11 :71-72), so it is a candidate rule, not a settled measurement.

**Refuter:** demonstrate, against an independent ground, a protection that changes no contact at any slot yet changes system-level failure probability. That breaks the capability claim for that class of system.

### F3 - First-order protection misses the residual that matters (D1)

- Fig 11 :52: "Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."
- Fig 11 :43: "The habitat is enumerated, never composed."
- Fig 11 :44: "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."

The figure's own example is precisely this question: a move applied to one target reached a third-order slot. The prescribed method is enumeration of contact outward until the cascade stops mattering, never composition from a closed set of imagined safe components. A protection is unacceptable until its habitat has been enumerated to a stated horizon. **Condition 1:** the sign flips when the harm appears beyond first-order contact and the protection was scoped to direct contact.

**Mode:** `general` for the enumeration rule, `specified` for the prediction that first-order scoping misses a three-steps-out residual. **Status:** triangulated across Fig 11, *Cascading failure* (engineering/network science, Wikipedia 2026-11-22): "the failure of one or few parts leads to the failure of other parts, growing progressively as a result of positive feedback", and *Systemic risk* (finance, Wikipedia 2026-11-22): "the failure of a single entity or cluster of entities can cause a cascading failure." Low overlap between habitat ecology, power/computer engineering and finance.

**Refuter:** show a system in which all harm from a protection appears within first-order contact and the cascade stops at one step, measured not assumed. That limits the claim to those systems; a measured third-order residual where the figure predicts none would break it.

### F4 - Protection can cut the channel that carries the residual (D2)

- Fig 10 :24: "the ground does not decay, the channel does"
- Fig 10 :25: "stale percepts, dropped transients,"
- Fig 10 :26: "saturated metrics, pooled readings"
- Fig 10 :29: "keep the anchor reachable"
- Fig 13 :31: "a remainder compounding through a chain that amplifies is chaos"

This is the mechanism most specific to this question. The loop runs on a remainder that re-enters the next turn (Fig 13 :31). A small local failure is not only damage, it is the signal that drives correction. A protection that suppresses small failures removes the error signal while leaving the underlying load or stress in place. The ground does not decay; the channel does. Suppressed small events are "dropped transients" (Fig 10 :25). The stress accumulates off-channel and reappears as a larger cascade when the protected component finally gives way. **Condition 2:** the sign flips when protection suppresses the small residuals that would have driven correction, so the remainder compounds until the channel can no longer hide it.

**Mode:** `specified` (mechanism plus prediction). **Status:** triangulated across Fig 10, Fig 13 and *Wildfire suppression* (fire ecology, Wikipedia 2026-11-22): "aggressive wildfire suppression aimed at minimizing fires has often protected significant chunks of wilderness, but has sometimes contributed to accumulation of fuel loads, increasing the risk of large, catastrophic fires." Very low overlap (agent architecture versus fire ecology).

**Refuter:** exhibit a protection that suppresses small failures yet preserves every per-slot residual and improves system outcomes at all stated horizons, verified at the ground. That breaks the channel-cutting mechanism for that class.

### F5 - Protection as habitat substitution: what you failed to reproduce is invisible (D1)

- Fig 11 :66: "Isolation is not removal of the habitat. It is substitution of one habitat for another."
- Fig 11 :67: "Move the residual and you must reproduce everything its goal required, and you inherit the new habitat's actors, which you did not choose."
- Fig 11 :68: "what you failed to reproduce is invisible until the goal fails"
- Fig 11 :69: "what you unintentionally introduced is invisible until it acts"
- Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."

Many component protections work by isolation: a buffer, a safeguard, a dedicated corridor, a stress-test regime, a trimmed redundancy. Isolation is not removal of the habitat, it is substitution of one habitat for another. The protected component now lives in a habitat the designer did not author completely. Two failure modes come with it: the conditions the goal needed but the substitute omits, and the actors the substitute brings in uninvited. Neither is visible until the goal fails. **Condition 3:** the sign flips when protection substitutes a habitat without reproducing what the goal required, or inherits actors that were not enumerated.

**Mode:** `specified`. **Status:** triangulated across Fig 11 and *Systemic risk* (Wikipedia 2026-11-22): "regulation arbitrage - the transfer of commerce from a regulated sector to a less regulated or unregulated sector - brings markets a full circle and restores systemic risk." Low overlap.

**Refuter:** demonstrate a protection that isolates a component without substituting a habitat, preserving every goal-relevant condition and inheriting no unchosen actor, verified at the ground over a stated horizon. That breaks the substitution claim for that class.

### F6 - The system-level indicator hides the live slot (D2, D4)

- Fig 1 :13: "a global R near zero with one live slot residual is a legal state"
- Fig 1 :19: "The residual is indexed by object slot, not aggregated."
- Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
- Fig 1 :28: "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."

A system that declares itself safe because the aggregate metric reads near zero is in a legal state with a live downstream slot. This is the structural reason "the system got more fragile" is non-trivial to see. **Condition 4:** the sign flips when safety is assessed as a global average and the per-slot residual that grew is hidden in the average. Aggregates remain usable as budget filters (Fig 9 :60), never as the verdict.

**Mode:** `general`. **Status:** triangulated between Fig 1 and *Systemic risk* (Wikipedia 2026-11-22), which reports that stress tests based on market outcomes "happen multiple times a year" while "systemic financial crises happen once every 43 years for a typical OECD country", so the measured probability does not correspond to the actual risk. Low overlap.

**Refuter:** exhibit a system-level metric proven to preserve every slot-level residual relevant to fragility at all stated horizons. Then the per-slot requirement is unnecessary for that metric.

### F7 - The two requirements are a union; one lever leaves the intersection standing (D3)

- Fig 9 :54: "when the split lands on a union rather than a partition, unbundle before you search again."
- Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
- Fig 9 :56: "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."
- Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

A single protection clears the region where only "this component is safe" holds and leaves the intersection standing, because "the system is safe" still binds. **Condition 5:** the sign flips when the two conditions are treated as one and a lever is chosen for the target variable alone. The decision procedure is: unbundle into "failure residual per slot" and "cascade consequence per slot at horizon H", search each with its own witness, then recombine. Cost, ease and political acceptability are budget filters, never witnesses for safety.

**Mode:** `general`. **Status:** triangulated between Fig 9 and *The Library of Babel: Locating the Book of Books* (Isaiah N, 2026-10-02): "Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually." Note the overlap: the essay shares the framework author, so it corroborates the reading but is not an independent world witness.

**Refuter:** exhibit a single protection for which the intersection is provably empty across the enumerated habitat, verified at the ground. Then unbundling adds no safety.

### F8 - Protection changes the sign of a loop or creates a part that survives its own use (D1)

- Fig 12 :119: "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."
- Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."
- Fig 12 :117: "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

A protection can be a catalyst: it survives its own use, so unlike a spent fuse or a consumed margin it keeps acting on every subsequent turn. Whether a protecting part is spent or regenerating is not recorded by naming the part, so the same component can read as safe in a snapshot and destabilising across uses. Where protection alters feedback, Fig 12 :121 governs: the sign of the loop decides whether it closes. **Condition 6:** the sign flips when the protection is a regenerating part in a loop whose sign it changes, or when two protections share atoms but differ in bond and therefore in system-level substance (an isomer claim, derived in `06_isomers_and_order.md`).

**Mode:** `specified`. **Status:** single-source for the bond definitions, corroborated by *Highly optimized tolerance* (Carlson and Doyle, PNAS 2002): "They are 'robust, yet fragile,' that is, robust to what is common or anticipated but potentially fragile to what is rare or unanticipated and also to flaws in design, manufacturing, or maintenance." Low overlap (framework composition versus engineering and physics).

**Refuter:** show a protection whose sign is invariant across loop configurations and whose spent/regenerating status is recorded by the system itself, verified at the ground. That breaks the catalyst and sign claim.

### F9 - Introduction is available, exclusion is not; protection is permanent work (D1)

- Fig 11 :61: "The seat's power is asymmetric. Introduction is available; exclusion is not."
- Fig 11 :62: "You can add an actor and you cannot subtract the habitat, because contact is a fact about the world and does not consult you."
- Fig 11 :63: "Which is why a managed ecosystem is permanent work rather than a solved state."

A protection is an introduction. The contact it creates cannot be recalled by removing the policy, because contact is a fact about the world. Harm cannot be undone by "taking the protection back" once the cascade has propagated. **Condition 7:** the sign flips when the intervention introduces contact that persists beyond the horizon over which safety was claimed, so the bill arrives after the protection was declared successful. This is why "it worked in the test" is not the end of the question.

**Mode:** `specified`. **Status:** triangulated between Fig 11 and *Risk compensation* (Wikipedia 2026-11-22): "The perception of safety can lead to unsafe land development in the floodplain, which is supposed to be protected by the levee. Consequently, when a flood does occur or the levee breaches, the effects of that disaster will be greater than if the levee had not been built." Low overlap. The source is contested for magnitude (noted in `09_watson_answer.md`); that contest does not flip this figure verdict.

**Refuter:** demonstrate a protection whose introduced contact can be fully removed without substituting a habitat, verified at the ground over a stated horizon. That breaks the asymmetry claim for that class.

### F10 - The ground settles, and independence must be bought (D2)

- Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
- Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."
- Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"
- Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

Whether a protection increased system fragility is a question about the world, so expert agreement is an instrument, not the anchor. Systemic failures are high-cost and often irreversible, so Fig 2 :42 requires independence in proportion to that cost: separate instruments or frames with separate evidence, each ranged against the same unmoving ground. Model agreement from one data pool is one witness wearing many names. Fig 7 :13: "agreement compounds, evidence does not."

**Mode:** `general`. **Status:** triangulated across Fig 2 and Fig 7 (two different framings: grounding and handoff) and *Systemic risk* (Wikipedia 2026-11-22), which reports the criticism that SRISK and CoVaR metrics are based on "market outcomes that happen multiple times a year" and therefore mis-measure a rare event. Low overlap.

**Refuter:** settle a protection's systemic safety by agreement among frames drawn from one evidence pool, with no independent ground reading, and show the agreement survives contact with an independent instrument. That would make the independence purchase unnecessary.

### F11 - The figures cannot name the system-specific threshold (search limits)

- Fig 8 :32: "no search, however long, adds an atom"
- Fig 8 :39: "So a search that finds nothing is never a proof of absence."
- Fig 13 :134: "Unreachable is a verdict here, not a silence"
- Fig 13 :115: "The set is closed. The arrangements are not. That gap is why import exists."
- Fig 6 :14: "the only operator that moves the wall"

No amount of searching inside the framework manufactures the knowledge of which specific protection, in which specific network, at which load, flips the sign. That knowledge is an import from the ground (a measurement, experiment, dataset or stress test), with a source gate and a shadow test. "We found no candidate" is not "no candidate exists." So the answer to "when" is a set of structural conditions plus a verification procedure, and a plain declaration that the threshold name is owed. **Unreachable is a verdict, not a silence.**

**Mode:** `general`. **Status:** triangulated across Figs 8, 13 and 6 (low overlap between closure, minimum set and reachability framings).

**Refuter:** derive a named, system-specific fragility threshold from the figures alone, with no import and no ground reading, that survives independent measurement. Until that happens the name is owed, not held.

---

## 2b. What survives

| claim | mode | figure | status |
|---|---|---|---|
| Protection has no standing valence; valence is relative to the residual | `general` | Fig 11 :49-51 | single-source plus world corroboration |
| A protection that changes no contact changes nothing at system level | `general` | Fig 11 :39-40 | single-source, flagged forward-untested by the figure |
| The habitat must be enumerated outward to a stated cascade horizon | `general` | Fig 11 :43-44, :52 | triangulated |
| Suppressing small failures cuts the channel; the remainder compounds | `specified` | Fig 10 :24-26; Fig 13 :31 | triangulated |
| Isolation substitutes a habitat; omitted and inherited actors are invisible | `specified` | Fig 11 :66-70 | triangulated |
| A system aggregate can hide a live per-slot residual | `general` | Fig 1 :13, :19, :22, :28 | triangulated |
| The two requirements are a union; one lever leaves the intersection | `general` | Fig 9 :54-57 | triangulated, author overlap noted |
| Protection can be a catalyst or flip a loop sign; bonds carry the difference | `specified` | Fig 12 :117, :119, :121 | single-source plus world corroboration |
| Introduction is available, exclusion is not; protection is permanent work | `specified` | Fig 11 :61-63 | triangulated |
| The ground settles; independence must be bought; aggregates are filters | `general` | Fig 2 :29, :35, :40, :42; Fig 7 :13; Fig 9 :60 | triangulated |
| No system-specific threshold is figure-derived; the name requires an import | `general` | Figs 8, 13, 6 | triangulated |

---

## 3. Pre-registered refuter

Written here before the conclusion, per the standing rule that a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following fires:

1. An intervention is demonstrated, against an independent ground, to have a valence invariant across residuals in at least two unrelated habitats (breaks F1).
2. A protection that changes no contact at any slot is shown to change system-level failure probability at the ground (breaks F2, Fig 11 :40).
3. A system is measured in which all harm from a protection appears within first-order contact and the cascade stops at one step, where the figure predicts a three-steps-out residual (breaks F3).
4. A protection suppresses small failures, preserves every per-slot residual and improves system outcomes at all stated horizons (breaks F4).
5. A protection isolates a component without substituting a habitat, preserving every goal-relevant condition and inheriting no unchosen actor, verified at the ground (breaks F5).
6. A global system-level metric is proven to preserve every per-slot residual relevant to fragility at all stated horizons (breaks F6).
7. A single lever is shown to empty the intersection of "component safe" and "system safe" across the enumerated habitat, verified at the ground (breaks F7).
8. A protection is shown to have sign-invariant, recorded spent or regenerating status across loop configurations (breaks F8).
9. An introduced contact is fully removable without habitat substitution, verified at the ground (breaks F9).
10. A single frame, using one evidence pool, settles a protection's systemic safety and the result survives an independent instrument unchanged (breaks F10).
11. A named, system-specific fragility threshold is derived from the figures alone, with no import and no ground reading, and survives independent measurement (breaks F11).

If any fires, the shape claim is withdrawn. Until one is run, nothing above may be labelled `grounded`.

---

## 4. Recommendation

1. Refuse to produce an armchair list of components to protect. Produce the conditions, the enumeration rule and the refuter (F1, F11).
2. For each candidate, start by naming the contact it changes. If none is named, stop: an improvement that does not change contact changes nothing (F2).
3. Enumerate the habitat outward to a stated cascade horizon and price that enumeration in actions, separately from the bits cost of describing the candidate (F3, `06` section on two currencies).
4. Check whether the protection suppresses small failures and thereby cuts the channel. Treat any restored signal as evidence, not as overhead (F4).
5. Check whether isolation substitutes a habitat. List what the goal required that the substitute omits and what actors the substitute inherits (F5).
6. Measure per slot; use any global indicator as a budget filter only (F6, F7).
7. Buy independence in proportion to the cost of being wrong; keep the monitoring channel reachable, because the ground does not decay but the channel does (F10, Fig 10 :24).
8. Lead outreach with the conditions and their refuter, not with the framework. Fig 4 :22: "Only methods cross up. Only head starts come down." Send a generator, not a recording.

---

## 5. Canonical usage check

Two sources govern how the figures may be used, read after the first four sections:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." It also says a reading that makes figures contradict one another has misidentified its domain, and that the framework returns "what a missing thing would have to look like (a shape, not a name)", then stops at the limit of its instruments and records the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are the ground for design questions, so no human ruling is owed on whether to enumerate a habitat, unbundle a union or buy independence. The seat reads the ground; it does not ask the anchor to decide design.

Applied here: the question is a design question, so it is decidable by derivation. The one thing not decidable is the system-specific threshold at which a named protection flips sign, and that is recorded as a gap (F11), not escalated to a person.

---

## 6. Retractions and confirmations

Corrections are kept visible. Nothing is silently erased.

| earlier reading | status after the canonical check |
|---|---|
| Tried to use Fig 13 :75 (no direct bond between two states) to forbid acting on a component | **Retracted.** That line governs composition of the six primitives, not action in a habitat. Re-census moved the derivation to Fig 11. |
| Initial one-line answer "protecting components always increases system fragility" | **Retracted as an overreach.** Fig 11 :49-51 makes valence relative to the residual. The correct claim is conditional: protection increases fragility under the seven structural conditions above, and is inert or beneficial under others. |
| "Fig 1's aggregation ban means never use system-level indicators" | **Narrowed.** Aggregates are admissible as budget filters (Fig 9 :60) but cannot be the verdict. Both forms are now recorded. |
| "Fig 11's asymmetry means protection is never permissible" | **Retracted as an overreach.** Introduction is available. The asymmetry prices the intervention with permanent monitoring; it does not forbid it. |
| "shape, not a name" forbids naming any specific mechanism | **Narrowed.** The phrase governs a missing primitive not held in Γ (see `05_what_shape_means.md` section 5b). Naming catalyst, cycle or substitution is a binding onto figure terms already held. Naming a system-specific numeric threshold is still forbidden without an import. |
| Apparent conflict: Fig 9 union (unbundle) versus Fig 3 chain (order) | **Not strained.** Re-census: Fig 9 governs the structure of the compound, Fig 3 governs dependency order among links. Different quantities. |
| Apparent conflict: "no harm elsewhere" as a global zero versus per-slot residual | **Not strained.** Re-census: "elsewhere" is a slot and a time, so the residual is per slot. The global zero was the misreading. |
| Risk compensation as corroboration for F9 | **Kept with a contest flag.** The source reports substantial contrary evidence and calls strong homeostasis "refuted" by empirical studies. It corroborates the direction (protection can raise exposure elsewhere) but not a universal magnitude. It did not flip any figure verdict. |
| Quantitative cost of enumeration and the threshold value | **Open gap.** Fig 12 gives two currencies but no number; the threshold name requires an import. `R_T` is recorded qualitatively in `11_audit.md`. |

**After re-census: no hidden strains. One open quantitative gap and one open name gap, both declared.** The verdict in `07_the_tether_answer.md` follows from the findings above and is stated as `general`/`specified`, candidate, never `grounded`.

---

## 7. Seven-question recursive derivation (summary)

1. **Is protection intrinsically good?** No. Valence is relative to the residual (Fig 11 :49-51). Condition F1.
2. **What would a protection have to change to matter?** Contact. An improvement that does not change contact changes nothing (Fig 11 :40). Condition F2.
3. **Where does the harm show up?** Often beyond first-order contact, at three steps out in the figure's own case (Fig 11 :52). Condition F3.
4. **How does a protection hide the harm?** By dropping the small transients that drive correction (Fig 10 :25) and by hiding a live slot in an average (Fig 1 :22). Conditions F4, F6.
5. **What does isolation do?** It substitutes a habitat, not remove one; omitted conditions and inherited actors are invisible until the goal fails (Fig 11 :66-69). Condition F5.
6. **Can one lever fix both conditions?** No in general. A single lever clears the region where only one condition holds (Fig 9 :56). Condition F7. Protection can also be a catalyst or flip a loop sign (Fig 12 :119, :121). Condition F8.
7. **Can the framework name the threshold?** No. Closure is idempotent and the wall moves only on import (Fig 8 :32, Fig 6 :14). Unreachable is a verdict, not a silence (Fig 13 :134). Gap F11.

The residue that survives the round trip: a protection changes system fragility only by changing contact, and the change must be measured per slot outward to a stated cascade horizon with independent instruments, while the small residuals are kept reachable. The specific threshold is owed from the ground, not derivable here.
