# Figure-grounded audit: which interventions can shift a system away from a tipping point without harmful side effects elsewhere?

**Mode of this document: `general` on the structural claims, `specified` on the per-domain predictions, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status: simulated derivation, not a ground reading.** This document is a derived shape checked for internal consistency against the figures. It did not measure a system, a threshold, or an intervention. *The Recursive Self-Improvement Trap* (Isaiah N, 2026-11-19) says LLM output can *"simulate an approximate answer/output"* but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* So this cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim extract, cited `Fig N :line`), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. World sources are listed in `10_source_ledger.csv` and were opened 2026-11-22.

---

## 0. The claim under audit

> Which interventions can shift a system away from a tipping point without producing harmful side effects elsewhere?

Stated as an effect: a system sits near a critical threshold. We want an action that moves it away from that threshold, and we want no positive residual in any other object slot or at any later time. The question is a **decision**, so the verdict must carry a cost if wrong, an undoability judgment, and a reversal condition (WATSON procedure step 6).

**The two options:**

- **A (armchair list):** rank candidate interventions by their direct effect on the target variable, choose the largest, and treat "no harmful side effects" as a constraint checked on the same variable. This is the way first-order scoping works.
- **B (shape plus test):** treat the two requirements as a union compound, enumerate the habitat outward past first-order contact, measure every slot against a ground with independent frames, and keep the channel reachable. Refuse to name a specific intervention until the ground settles it.

An answer would look like: a rule that selects among candidate interventions, a stated horizon over which harms are counted, a measurement protocol per slot, and a pre-registered refuter. Bind that shape as an ordinary term so it can accrue a residual like anything else (`THE_FORMULA.md`, "Direction").

---

## 1. DOMAIN CENSUS (written before any figure line was chosen)

### a. R by arity, symmetry, scale (Fig 9 :22, :27-28)

- **Arity: two.** "Away from the tipping point" and "no harm elsewhere" are two conditions that bind jointly, so this is a **union compound**, not one optimization with a side constraint. `Fig 9 :54` "when the split lands on a union rather than a partition, unbundle before you search again."
- **Symmetry: broken.** The target slot and the "elsewhere" slots are not interchangeable. "Elsewhere" is a different object slot and a later time step. `Fig 1 :19` "The residual is indexed by object slot, not aggregated." An intervention's valence is relative to the residual, not carried by the intervention (`Fig 11 :49`).
- **Scale: three.** First order (direct contact with the target variable), second order (the effect on a neighbour), third order (the residual that actually mattered in the DDT case, `Fig 11 :52`). The loop runs at step, habitat and lineage scale.

### b. One line per domain: actors / currency / anchor

No nameable anchor means it is not a domain yet. All four below have one.

| domain | actors | currency | anchor |
|---|---|---|---|
| **D1 Habitat and ecology** (primary) | the system, habitat actors, conditions, relations (`Fig 11 :45-47`), the introduced intervention, the residual | contact and cascade | the ground: what actually happens to the system and to downstream slots, measured |
| **D2 Measurement and verification** | instruments, frames, the ground maintainer's channel | residual per slot, independence | the ground, which does not update (`Fig 2 :29`, `Fig 10 :24`) |
| **D3 Decision and search** | the designer, candidate interventions, filters, two budgets | bits and actions (`Fig 12 :126`) | the ground settles; filters only buy budget (`Fig 9 :60`) |
| **D4 Modelling (the compound where D1 and D2 overlap)** | models, aggregates, shared priors | description length | the ground; a model is not an anchor. This is Fig 10's seam (`Fig 10 :11-18`), so D1 and D2 must be triangulated, not negotiated |

### c. Partition or union?

**Union.** D1 and D2 share the field (both touch the same residual), which is a seam in Fig 10's sense, so their agreement is not automatically evidence. Inside the compound, the two conditions form a union of overlapping conditions: `Fig 9 :55` "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." A ∩ B = "effective here and harmless elsewhere at horizon H", which is its own compound with its own loop. Partition by slot **after** unbundling, not before.

### d. Order by dependency (Fig 3)

Dependency order, not importance order:

1. perception (which slot is live);
2. vocabulary (terms for what the situation affords);
3. objective (what counts as "away" and what counts as "harm elsewhere");
4. planning (enumerate the habitat, choose a route under incomplete information);
5. learn and carry (name what worked, verify, keep monitoring).

The break usually sits between 2 and 3, where there is no instrument (`Fig 3 :24-27`). Most intervention effort lands on parameters (level 12 in Meadows' list), which is above the break and where measurements already exist. `Fig 3 :19` "Optimising a link that already works cannot rescue one that does not."

### Strain test before deriving

An earlier reading tried to use `Fig 13 :75` (no direct bond between two states) as if it forbade interventions on a system. That line governs the composition of the six primitives, not the choice of an action in a habitat. Re-census: the appropriate figure for "acting on a system" is Fig 11. The strain is recorded in §6 and the line is not used as evidence here.

---

## 2. Findings

Each finding carries its domain, verbatim figure lines quoted **before** the conclusion, a mode, a triangulation status, and a refuter.

### F1 - There is no standing list of safe interventions (D1)

Verbatim first:

- `Fig 11 :49` "An actor's valence is relative to the residual, not a property it carries."
- `Fig 11 :50` "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."
- `Fig 11 :51` "No standing list of good actors survives a change of residual."

An intervention is an actor introduced into a habitat. Its valence is a relation to a specific residual, not a property it carries. Therefore "which interventions" cannot be answered by a list of intrinsically safe levers; the same lever is beneficial for one residual and harmful for another. This is why a generic answer to the question is impossible, and why the honest answer is a shape plus a test.

**Mode:** `general` (structural). **Status:** single-source for the figure rule; the world source *Unintended consequences* (Wikipedia, 2026-11-22) corroborates with the cobra effect, cane toads and the Four Pests sparrow campaign, where a lever that worked on one variable produced harm through another.

**Refuter:** exhibit an intervention whose valence is invariant across residuals (it moves every residual the same direction with no slot-level harm), verified at the ground in at least two unrelated habitats. That would break the relation claim.

### F2 - First-order enumeration misses the harms that matter (D1)

- `Fig 11 :52` "Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."
- `Fig 11 :43` "The habitat is enumerated, never composed."
- `Fig 11 :44` "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."

The figure's own example is exactly the question's "harmful side effects elsewhere": DDT applied to one target reached the eagles three steps out. The method the figure prescribes is enumeration of contact outward until the cascade stops mattering, never composition from a closed set of imagined levers. A candidate intervention is therefore unacceptable until its habitat has been enumerated to the cascade horizon, and the horizon must be stated.

**Mode:** `general` for the enumeration rule, `specified` for the prediction that first-order scoping will miss a three-steps-out residual. **Status:** triangulated across Fig 11 (habitat), *Cascading failure* (engineering/network science, Wikipedia 2026-11-22: failure of one part "leads to the failure of other parts, growing progressively as a result of positive feedback") and *Regime shift* (ecology, Wikipedia 2026-11-22: "cascading consequences among regime shifts"). Low overlap between the three fields.

**Refuter:** show a system in which all harm from an intervention appears within first-order contact and the cascade stops at one step, measured, not assumed. That limits the claim to those systems rather than breaking it; a measured case with no third-order residual where the figure predicts one would break it.

### F3 - Introduction is available, exclusion is not; there is no solved state (D1)

- `Fig 11 :61` "The seat's power is asymmetric. Introduction is available; exclusion is not."
- `Fig 11 :62` "You can add an actor and you cannot subtract the habitat, because contact is a fact about the world and does not consult you."
- `Fig 11 :63` "Which is why a managed ecosystem is permanent work rather than a solved state."
- `Fig 11 :65` "Introducing an actor for its cascade is ecosystem engineering, after Jones, Lawton and Shachak, 1994. Cane toads and kudzu are the same move with the cascade unenumerated."
- `Fig 11 :66` "Isolation is not removal of the habitat. It is substitution of one habitat for another."

This is the cost asymmetry the question hides. You can introduce an intervention; you cannot subtract the habitat or recall the contact it created. Harm cannot be undone by "removing the lever" because the contact has already propagated. Ecosystem engineering is the same move as cane toads and kudzu when the cascade is unenumerated, and a legitimate move when it is. Moving the system "elsewhere" is habitat substitution, and you inherit actors you did not choose. Therefore "shift away from a tipping point" is permanent monitoring work, not a one-time fix.

**Mode:** `specified` (predicts ongoing cost). **Status:** triangulated between Fig 11 and *Unintended consequences* (Wikipedia 2026-11-22), which records cane toads, kudzu, rabbits in Australia, the sparrow campaign, and smokestacks producing acid rain. The *Ecosystem engineer* page (Wikipedia 2026-11-22) corroborates the Jones, Lawton and Shachak 1994 lineage and the ambiguity of introduced engineers.

**Refuter:** demonstrate a reversible intervention whose introduced contact can be fully removed without substituting a habitat, with the removal verified at the ground over a stated horizon. That would break the asymmetry claim for that class of system.

### F4 - Harms elsewhere disappear inside an aggregate (D2)

- `Fig 1 :19` "The residual is indexed by object slot, not aggregated."
- `Fig 1 :22` "Aggregating across slots is how a live signal disappears into an average."
- `Fig 1 :13` "a global R near zero with one live slot residual is a legal state"

This is the structural reason "without harmful side effects elsewhere" is non-trivial. A system-level indicator can read near zero while a single downstream slot carries a live residual. Any intervention assessment that reports one global number is incapable of seeing the harm the question asks about. Aggregate indicators remain usable as **budget filters**, but they cannot serve as the verdict.

**Mode:** `general`. **Status:** triangulated between Fig 1 and the *Earth System Dynamics* recent-articles page (Copernicus, accessed 2026-11-22), whose "Spatial patterns in indirect effects of human activity" entry says the work "highlight[s] the risk of information loss inherent in commonly used aggregation approaches." Low overlap (agent architecture versus Earth-system modelling).

**Refuter:** exhibit an aggregation that preserves every slot-level residual relevant to harm at all horizons, proven rather than assumed. Then the per-slot requirement is unnecessary for that aggregate.

### F5 - The ground settles, and independence must be bought (D2)

- `Fig 2 :29` "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
- `Fig 2 :35` "Alignment is triangulation, not negotiation. A mirror cannot correct you."
- `Fig 2 :40` "agreement about the world is worthless when the agreeing frames share an evidence pool"
- `Fig 2 :42` "Buy independence in proportion to the cost of being wrong."

Whether an intervention works is a question about the world, so human judgment or expert agreement is only an instrument, not the anchor. Tipping-point interventions are high-cost and often irreversible, so Fig 2 :42 requires buying independence in proportion to that cost: multiple instruments, or frames with separate evidence, each ranged against the same unmoving ground. Model agreement from one data pool is one witness wearing many names.

**Mode:** `general` for the anchor rule, `specified` for the purchase instruction. **Status:** triangulated across Fig 2, *Regime shift* (ecology: "It remains unclear how well such signals work for all regime shifts, and if the early warnings give time enough to take appropriate managerial corrections to avoid the shift"), and *Iatrogenesis* (medicine/public health, Wikipedia 2026-11-22: "First do no harm" as a primary Hippocratic mandate). Low overlap.

**Refuter:** settle an intervention's safety by agreement among frames drawn from one evidence pool, with no independent ground reading, and show the agreement survives contact with an independent instrument. That would make the independence purchase unnecessary.

### F6 - Keep the channel reachable (D2)

- `Fig 10 :24` "the ground does not decay, the channel does"
- `Fig 10 :25` "stale percepts, dropped transients," and `Fig 10 :26` "saturated metrics, pooled readings"
- `Fig 10 :29` "keep the anchor reachable"
- `Fig 10 :52` "Bring a characterised residual, never the source."

The failure is not that the ground changes; it is that the monitoring channel degrades. Stale percepts, saturated metrics and pooled readings are precisely how a harmful third-order residual goes unseen after an intervention is declared successful. Early-warning literature says the signals are uncertain and data-hungry, which is the world-side version of the same channel problem.

**Mode:** `specified`. **Status:** single-source for the figure rule (Fig 10), corroborated by *Regime shift* and *Iatrogenesis* (adverse effects that "can evade recognition"). A frame may not ask the ground's maintainer to decide design; the metalaw note says the seat reads the ground.

**Refuter:** show a monitoring channel that cannot degrade over the horizon of the intervention, with saturation and pooling ruled out by construction. Then "permanent work" reduces to the initial enumeration.

### F7 - The two requirements form a union; one lever leaves the intersection standing (D3)

- `Fig 9 :54` "when the split lands on a union rather than a partition, unbundle before you search again."
- `Fig 9 :55` "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
- `Fig 9 :60` "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

A single lever that shifts the target variable clears the region where only the first condition holds and leaves the intersection (harm elsewhere) standing, because the second condition still binds. The decision procedure is therefore: unbundle into "distance from threshold per slot" and "harm per slot at horizon H", search each with its own witness, then recombine. Cheap heuristics (cost, ease, political acceptability) are filters for how much of the candidate space to visit, never witnesses for safety.

**Mode:** `general`. **Status:** triangulated between Fig 9 and *The Library of Babel* (Isaiah N, 2026-10-02): *"Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually..."* Also corroborated by Meadows' warning that leverage points are counterintuitive.

**Refuter:** exhibit a single lever for which the intersection is provably empty across the enumerated habitat, verified at the ground. Then unbundling adds no safety.

### F8 - Find the broken link before optimizing (D3)

- `Fig 3 :19` "Optimising a link that already works cannot rescue one that does not."
- `Fig 3 :27` "A link with no instrument is not a link that works. It is a link nobody has looked at."
- `Fig 3 :29` "Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."

Before selecting an intervention, locate the link at which the monitoring and response chain stops: perception, vocabulary, objective, planning, or carry. Effort above the break arrives at a step that cannot use it. Meadows' world-side observation that roughly 95 percent of attention goes to parameters, which "RARELY CHANGE BEHAVIOR", is the same point in a different field.

**Mode:** `general`. **Status:** single-source for the chain (Fig 3), corroborated by Meadows (systems thinking / management, 1999) and by *Unintended consequences* (ignorance and errors in analysis as causes).

**Refuter:** show an intervention that improves an outcome by strengthening a link already working while the true break remains unrepaired, with the ground paying. Then the dependency-order instruction is wrong for that case.

### F9 - Two currencies, and a round-trip gap that must be measured (D3)

- `Fig 12 :126` "Bits price the description. Actions price finding out whether it holds."
- `Fig 4 :30` "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

Enumerating the habitat is paid in **actions** (field surveys, experiments, monitoring), while describing the intervention is paid in **bits**. They do not add, so a plan that is cheap to state can still be unaffordable to verify. The condensation from the full figure set into the shorthand "enumerate the habitat and measure per slot" loses information; Fig 4 requires measuring that round-trip gap `R_T` rather than assuming zero. No numerical `R_T` exists here because no ground reading was taken; §11 of the audit (`11_audit.md`) records it qualitatively.

**Mode:** `general`. **Status:** single-source for the pricing rule (Fig 12), with the measurement requirement triangulated by Fig 4. This is a **gap** in the quantitative sense: the figures give the shape of the cost accounting, not a number.

**Refuter:** produce a single unit in which description cost and verification cost are commensurable without loss, and show the condensed shorthand preserves all constraints of the full figure set (`R_T = 0`). Until then the gap stands.

### F10 - The figures cannot name the intervention (search limits)

- `Fig 8 :32` "no search, however long, adds an atom"
- `Fig 8 :39` "So a search that finds nothing is never a proof of absence."
- `Fig 13 :134` "Unreachable is a verdict here, not a silence"
- `Fig 13 :115` "The set is closed. The arrangements are not. That gap is why import exists."
- `Fig 6 :14` "the only operator that moves the wall"

No amount of searching inside a frame manufactures the specific knowledge of which intervention works in a particular system. That knowledge is an import from the ground (a measurement, experiment, dataset or market), with a source gate and a shadow test. "We found no candidate" is not "no candidate exists." So the answer to "which interventions" is a shape and a procedure, and a plain declaration that names require the ground. **Unreachable is a verdict, not a silence.**

**Mode:** `general`. **Status:** triangulated across Figs 8, 13 and 6 (low overlap between closure, minimum set and reachability framings).

**Refuter:** derive a named, system-specific intervention from the figures alone, with no import and no ground reading, that survives independent measurement. Until that happens, the name is owed, not held.

---

## 2b. What survives

| claim | mode | figure | status |
|---|---|---|---|
| Interventions have no standing valence; valence is relative to the residual | `general` | Fig 11 :49-51 | single-source + world corroboration |
| The habitat must be enumerated outward until the cascade stops mattering | `general` | Fig 11 :43-44, :52 | triangulated |
| Introduction is available, exclusion is not; monitoring is permanent work | `specified` | Fig 11 :61-63 | triangulated |
| Harm elsewhere must be measured per slot; aggregates can hide it | `general` | Fig 1 :13, :19, :22 | triangulated |
| The ground settles; independence must be bought; the channel must stay reachable | `general`/`specified` | Fig 2 :29, :35, :40, :42; Fig 10 :24-29 | triangulated |
| The two requirements are a union and must be unbundled before search | `general` | Fig 9 :54-55 | triangulated |
| Find the broken dependency link before optimizing | `general` | Fig 3 :19, :27 | single-source + corroboration |
| Bits and actions are two prices; `R_T` must be measured | `general` | Fig 12 :126; Fig 4 :30 | single-source + gap |
| No named intervention is figure-derived; names require the ground | `general` | Figs 8, 13, 6 | triangulated |

---

## 3. Pre-registered refuter

Written here before the conclusion, per the standing rule that a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following fires:

1. A global system-level metric is proven to preserve every slot-level residual relevant to harm at all stated horizons (breaks Fig 1 :22).
2. An intervention is demonstrated, against an independent ground, to move a system away from a threshold with zero residual in every enumerated downstream slot, with no ongoing maintenance required (breaks Fig 11 :63 and the union claim at Fig 9 :55).
3. A way is shown to subtract an introduced actor's harm from the habitat without substituting a habitat, verified at the ground (breaks Fig 11 :61-62).
4. A named, system-specific intervention is derived from the figures alone, with no import and no ground reading, and survives independent measurement (breaks F10).
5. A single frame, using one evidence pool, settles an intervention's safety and the result survives an independent instrument unchanged (breaks Fig 2 :40).

If any fires, the shape claim is withdrawn. Until one is run, nothing above may be labelled `grounded`.

---

## 4. Recommendation

1. Refuse to produce an armchair list of named interventions. Produce the shape, the enumeration rule and the refuter (F1, F10).
2. For each candidate, enumerate the habitat outward to a stated cascade horizon, price that enumeration in actions, and keep it separate from the bits cost of describing the candidate (F2, F9).
3. Measure per slot; treat any global indicator as a budget filter only (F4, F7).
4. Buy independence in proportion to the cost of being wrong; keep the monitoring channel reachable, because the ground does not decay but the channel does (F5, F6).
5. Unbundle the two conditions before searching; find the broken link in the response chain before optimizing a lever (F7, F8).
6. Lead outreach with the shape and its refuter, not with the framework. Send a generator, not a recording (Fig 4 :22, "Only methods cross up. Only head starts come down.").

---

## 5. Canonical usage check

Two sources govern how the figures may be used, read after the first four sections:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also says a reading that makes figures contradict one another has misidentified its domain, and that the framework returns *"a shape, not a name"* then stops at the limit of its instruments and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are the ground for design questions, so no human ruling is owed on whether to enumerate a habitat or buy independence. The seat reads the ground; it does not ask the anchor to decide design.

Applied here: the question is a design question, so it is decidable by derivation. The one thing not decidable is the name of a system-specific intervention, and that is recorded as a gap (F10), not escalated.

---

## 6. Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| Tried to use `Fig 13 :75` (no direct state bond) to forbid acting on a system | **Retracted.** That line governs composition of the six primitives, not action selection. Re-census moved the derivation to Fig 11. |
| "Fig 1's aggregation ban means never use system-level indicators" | **Narrowed.** Aggregates are admissible as budget filters (`Fig 9 :60`) but cannot be the verdict. Both forms are now recorded. |
| "Meadows' leverage points tell us which interventions to choose" | **Downgraded to corroboration.** Meadows is a world source and warns the list is *"a work in progress. It's not a recipe for finding leverage points."* It does not decide the verdict. |
| "Fig 11's asymmetry means no intervention is ever permissible" | **Retracted as an overreach.** Introduction is available. The asymmetry prices the intervention; it does not forbid it. |
| "The figures answer which intervention to pick" | **Refused and recorded as a gap.** They return a shape and a test. Names require an import from the ground. |
| Apparent conflict: Fig 9 union (unbundle) vs Fig 3 chain (order) | **Not strained.** Re-census: Fig 9 governs the structure of the compound, Fig 3 governs dependency order among links. Different quantities. |
| Apparent conflict: "no harm elsewhere" as a global zero vs per-slot residual | **Not strained.** Re-census: "elsewhere" is a slot and a time, so the residual is per slot. The global zero was the misreading. |
| Quantitative cost of enumeration | **Open gap.** Fig 12 gives two currencies but no number; `R_T` is recorded qualitatively in `11_audit.md`. |

**After re-census: no hidden strains. One open quantitative gap, named.** The verdict in `07_the_tether_answer.md` follows from the findings above and is stated as `general`/`specified`, candidate, never `grounded`.
