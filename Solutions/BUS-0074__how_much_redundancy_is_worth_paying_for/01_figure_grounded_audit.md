# Figure-grounded audit: how much redundancy is worth paying for

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** The figure text in `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical usage rule in `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, and the eight essays. World sources are listed in `10_source_ledger.csv`. All accessed 2026-11-22.

---

## 0. The residual in effect terms

The question is not "what number of suppliers is optimal." It is: *what would have to be true for a redundancy premium paid now to be justified, when neither p (the probability of a disruption) nor C (its cost) is known?*

- A firm's operating model Gamma predicts continuity: Gamma(b,a) = "supply continues as planned." A disruption returns o-prime = "supply does not continue." R = |Gamma(b,a) - o'|.
- R is indexed per slot (supplier, component, route, region, tier), never aggregated. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* A portfolio-level "expected disruption cost" is exactly the aggregation the figure disqualifies.
- The ground for this question is the disruption itself. Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* That anchor has not yet returned a reading. So any specific number is a verdict stated before the ground speaks, which is the named output-layer defect.
- Two candidate readings of the question, bound as ordinary terms before the run (Formula, "Direction"):
  - **A:** an optimisable scalar, "the optimal redundancy level = f(p, C)."
  - **B:** a shape, the set of conditions under which a redundancy spend buys *independence* rather than duplication, sized to the cost of being wrong and staged as reversible cuts.

The derivation below ends at B in `specified` mode. A is refused, not because it is impractical but because it is a verdict stated in `general` mode against a ground that has not moved.

---

## 1. Domain census (before any figure line is chosen)

R described by arity, symmetry, scale:

- **Arity:** a multi-place relation among slots (supplier, component, lane, region, tier) and a time index. "How much" pretends to a one-place quantity; the residual is many-placed.
- **Symmetry:** not symmetric. Disruptions propagate directionally through tiers. A comparison (threshold) bond and a sequence bond are present, not a symmetric conjunction. Fig 12 :112: *"Progress is a subtraction."* Operators table :51: *"a goal is a comparison, which is why a vocabulary without it cannot state one."*
- **Scale:** per-component up to network-of-networks; the membrane between scales is lossy (Fig 4 :20: *"Only the actors, the currency and the anchor change."*).

One line per domain. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Disruption ground | supplier failure, port closure, pandemic, geopolitical shock | realized interruption o-prime | the disruption, not yet returned | admitted, anchor silent |
| D2 Firm operating model | planners, routines, S&OP and risk models | predicted continuity Gamma(b,a), redundancy spend | the ground, when it arrives | admitted |
| D3 Supply network habitat | suppliers, tier-2 and tier-3 suppliers, lanes, ports, regions | contact and cascade | the ground | admitted |
| D4 Independence and reach | duplicate sources, buffers, spares, alternate routes | independence (shared evidence), reach | the ground | admitted |
| D5 Verification and outreach | reliability and supply-chain researchers | agreement and residual | the ground, never agreement | admitted |
| X1 "optimal redundancy level" as a scalar property | none nameable | none | none, it depends on unknown p and C | not a domain yet (a preference, Formula "Direction") |
| X2 "expected loss = p times C is sufficient" | planners | one collapsed number | none, it sums two currencies | absorbed into D2 and flagged as a summing error |

**Partition or union.** A union, not a partition. D2/D4 (model plus redundancy) and D3/D1 (habitat plus ground) overlap. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."* The "how much" question is at least four conditions: which slots are live; whether the channel to the ground is maintained (visibility); whether reach is renewed (genuine independence); whether the cut is reversible. A single redundancy budget clears only the regions where one condition holds and leaves the intersections, which are compounds with their own loops.

The *Library of Babel* essay names this exact failure: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually to find their answers and then combine them in a satisfactory way."*

**Order by dependency (Fig 3).** Perception (can you see the tier-three dependency) -> vocabulary (terms for what a disruption affords: what can fail, be buffered, rerouted) -> objective (what counts as progress: continuity under a disruption) -> planning (the spend) -> learn and carry (name what worked, verify, carry). Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* Fig 3 :20-21: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."* Most practice lands on planning (buying redundancy) before the middle link (having terms for what a disruption affords) has an instrument. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

---

## 2. Figure census (quoted verbatim before concluding)

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual per slot, ground only metric | no portfolio averaging; no spend verdict from a frame-internal score |
| 2 The Ground | anchor has not spoken; common cause; independence; buy by cost of being wrong | no number is settled; common-cause twins are one frame |
| 3 Dependency Chain | middle link has no instrument | visibility and vocabulary precede the spend |
| 4 The Membrane | lossy scale transform, round trip | a network-level risk score loses the slot |
| 5 Mint Pipeline | guards as a product; nothing-scoring state | no mint without support and settlement |
| 6 Closure and Reachability | import is the only wall-mover; a wrong atom costs more than primitives | a duplicate in the same closure adds no atom |
| 7 Room Chain | agreement is variation, not a verdict | a committee's probability estimate is not the ground |
| 8 Union Surplus | idempotent closure; absence is not proof; low-overlap surplus | "no disruptions yet" is not p=0; independence is the surplus |
| 9 Leave and Arrive | union not partition; ranked reversible cuts; filters not witnesses | "how much" is a union; stage the cuts |
| 10 Ground Maintainer | channel decays; provenance; verifier non-access | keep the anchor reachable; record the lineage |
| 11 The Habitat | enumerate never composed; cascades; valence relative to residual; permanent work | map the tiers; resilience is maintained work |
| 12 The Bond | two currencies do not add; comparison is a goal; subtraction is progress | p and C are not one number |
| 13 Minimum Viable Set | closed set, unbounded arrangements; unreachable is a verdict | a shape, not a name; honest stop |
| Operators and Symbols tables | comparison bond, R per slot, ground as anchor | supports D2 and D4 readings |

Strained readings are named below, not smoothed over.

---

## 3. Findings F1 to F11

### F1 The ground has not spoken, so no number is settled (decisive against Option A)

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* Fig 10 :24: *"the ground does not decay, the channel does"*.

A future disruption is the anchor for this question. It has not arrived. Therefore any answer of the form "hold X weeks of inventory" is a verdict in `general` mode with no ground reading, which `THE_FORMULA.md` step 5 forbids: *"the ground settles it. Verified only by what pays. A gate is not the ground."*

What survives is a shape and a decision rule, held as `candidate`. Status: `single-source` for the anchor rule (Fig 2), triangulated with the mode rule in `THE_FORMULA.md` and Fig 5 :30 *"the machinery worked; the answer was already known."*

**Refuter:** a demonstration from the figures, not from practice, that a specific redundancy number is settled by the loop independently of a ground reading. If shown, F1 is withdrawn.

### F2 Index the spend per slot, never as a portfolio average

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* Symbols table :43: *"R is measured per slot, never as a single global number."*

The standard "expected disruption cost = sum over scenarios of p times C" collapses the very slots that carry the live signal. The single supplier in one port, the sole tier-three source, the one lane with no alternate: these are positive-mass slots (R+_s) and a network average hides them.

Status: `triangulated` (Fig 1 and the Symbols table, low overlap between the loop figure and the notation table).

**Refuter:** a proof that the residual for this question is genuinely global and that no slot carries positive mass alone. If shown, F2 is withdrawn and portfolio averaging is licensed.

### F3 Redundancy buys independence, and independence is counted by shared evidence, not by headcount

Fig 2 :31-32: *"Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are."* Fig 8 :48-49: *"How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus. Two frames that overlap almost completely are one frame wearing two names."*

Two suppliers in the same port, with the same tier-two source, using the same logistics provider, are one frame wearing two names. Their "redundancy" is a second label on one failure mode. Fig 2 :6-7 names the collapse: *"collapse 2: common cause"* / *"(hidden shared source)"*; Fig 2 :20-21: *"so the agreement is the pool talking,"* / *"not two frames confirming each other."*

Status: `triangulated` (Fig 2 independence and Fig 8 union surplus, different figures and different questions). Reliability engineering corroborates this at the ground, but as a secondary witness only (see section 8 and `09_watson_answer.md`).

**Refuter:** a real event in which two sources demonstrably sharing a port, a tier-two supplier and a maintenance regime failed independently. If shown, the common-cause reading is weakened and headcount redundancy is restored as a valid unit.

### F4 Buy independence in proportion to the cost of being wrong, not in proportion to a point estimate of p

Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*

This is the one figure line that functions as a decision rule, and it is deliberately not an expected-value formula. When p is unbracketable and C is catastrophic, the rule says size the independence to C. Fig 6 :24: *"Import from a live peer is debited against that frame's independence. A wrong atom costs more than starting from primitives."* Fig 8 :42-43: *"Importing against a budget limit adds an atom that was not needed, and Figure 6 prices a wrong atom above starting from primitives."*

Status: `single-source` for the rule itself (Fig 2 :42), corroborated in effect by the supply-chain literature (Chopra and Sodhi, 2014: underestimating disruption likelihood is far more expensive than overestimating it). The corroboration comes from a different field but it is a decision-theoretic conclusion, not a figure line, so it cannot upgrade the verdict.

**Refuter:** a figure re-census showing that "cost of being wrong" here means p times C (a single currency) rather than C alone. That would collapse F4 into the expected-value rule it currently refuses.

### F5 p and C are two readings and do not add

Fig 12 :125: *"A composition costs in two currencies, and they do not add."* Fig 12 :126: *"Bits price the description. Actions price finding out whether it holds."* Fig 12 :130: *"Summing them into one figure is the error this names, not the fix for it. A price in bits and a price in actions are two readings, held apart."*

The expected-loss product p times C is the flat-formula error: it records the ingredients and loses the arrangement. It also confuses two different costs: the cost of stating the risk (a description, in bits) and the cost of finding out whether a source is truly independent (an action, in budget). Fig 12 :101: *"A bond that costs nothing is a bond that carries nothing, which is the flat case."*

Status: `triangulated` (Fig 12 two-currency rule and the Operators/Symbols pricing rule, plus the comparison-is-a-goal line). The business expected-value literature conflicts with this as written and was returned to the census (see section 8), not used to flip the verdict.

**Refuter:** a derivation within the figures that licenses adding the two currencies for this decision. If shown, F5 falls and the expected-value rule is admitted.

### F6 A duplicate inside the same closure adds no atom

Fig 6 :21: *"MINT composes inside the closure and can never add an atom."* Fig 8 :32: *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."* Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*

A second supplier from the same industrial ecosystem, same geography, same raw-material origin, is composed inside the same closure. It does not move the wall. A genuinely independent source is an import from a closure that differs (different infrastructure, different tier-two base, different regulatory regime), and imports carry a source gate and a shadow test. Fig 6 :24 prices a wrong atom above starting from primitives, so the threat is a false independence that costs real money.

Status: `triangulated` (Fig 6 and Fig 8, distinct figures, one about the wall and one about where the atom comes from).

**Refuter:** a demonstration that adding an identical duplicate changes the reachable set of a firm's supply graph. If shown, the idempotence claim fails at this stratum and F6 is withdrawn.

### F7 "No disruptions yet" is not evidence of low probability

Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* Fig 9 :44: *"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."* Fig 6 :27: *"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."*

A clean history is a search that found nothing. It does not license p = 0. The supply-chain literature corroborates in effect: Chopra and Sodhi write that if no mitigation is in place for a source of disruption, "a disruption probability of zero has effectively been assumed," and that it is "often cheaper in the long run to assume some arbitrary but positive probability of disruption rather than to ignore it." Human-cognition research corroborates the mechanism: Tversky and Kahneman (1974) report that *"the risk involved in an undertaking may be grossly underestimated if some possible dangers are either difficult to conceive of, or simply do not come to mind."*

Status: `triangulated` (Fig 8 and Fig 9, different figures and different arguments).

**Refuter:** a source with a genuinely different evidence pool showing that a clean history is a sufficient statistic for p in this class of systems. If shown, F7 is weakened.

### F8 The spend is a union of conditions, so it must be unbundled and staged as ranked reversible cuts

Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :40-41: *"a wrong cut removes the answer and speeds up"* / *"so keep every cut ranked and reversible"*. Fig 9 :38: *"elimination compounds here, and only here"*.

The conditions are: which slots are live; whether the channel to the ground is maintained (can the firm detect the disruption and see several tiers out); whether reach is renewed (an import from a differing closure, not a twin); whether the cut can be reversed when the ground returns. A single lever, "spend X on redundancy," clears the first region and leaves the intersections standing, where the compound needs its own loop.

Status: `triangulated` (Fig 9 union rule plus Fig 3 dependency order and the *Library of Babel* bundle passage).

**Refuter:** a demonstration that one lever clears all four conditions and that the residue is smaller but not categorically different. If shown, the unbundling is unnecessary and F8 falls.

### F9 Map the habitat outward; the material disruption is often three tiers out

Fig 11 :43: *"The habitat is enumerated, never composed."* Fig 11 :44: *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."* Fig 11 :52-53: *"contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."*

A first-tier supplier map is first-order enumeration. The failure that matters sits in a sub-tier, a shared port, a single-source raw material, a shared maintenance provider. Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."* Fig 11 :51: *"No standing list of good actors survives a change of residual."*

Status: `triangulated` (Fig 11 enumeration and cascade, plus Fig 11 valence, one figure but two independent rules; weakly corroborated by the supply-chain containment literature).

**Refuter:** a case where the material disruption is always and only at direct contact, with no cascade. If shown, first-order enumeration is sufficient and the deeper mapping is not owed.

### F10 Resilience is maintained work, not a purchased state

Fig 11 :63-64: *"Which is why a managed ecosystem is permanent work rather than a solved state."* Fig 11 :61: *"Introduction is available; exclusion is not. You can add an actor and you cannot subtract the habitat, because contact is a fact about the world and does not consult you."* Fig 10 :29: *"keep the anchor reachable"*.

Buying a second supplier introduces an actor and inherits its habitat, which cannot be subtracted. The channel to the ground (visibility, indicators, audits, refreshed maps) decays if unmaintained: Fig 10 :25-26: *"stale percepts, dropped transients,"* / *"saturated metrics, pooled readings"*. Resilience engineering corroborates in effect: Hollnagel and colleagues treat resilience as a long-term quality of adjusting functioning, and Woods (2006) writes that effective organizations create safety "through proactive resilient processes rather than through reactive barriers and defenses."

Status: `triangulated` (Fig 11 asymmetry plus Fig 10 channel decay, distinct figures).

**Refuter:** a case where a one-time redundancy purchase leaves the firm resilient indefinitely with no maintenance of the channel. If shown, the permanent-work claim is refuted.

### F11 What survives, with its mode

| claim | mode | figure |
|---|---|---|
| R is per slot; a portfolio average hides the live slot | `general` (structural) | Fig 1 :19, :22; Symbols :43 |
| The ground has not spoken; no redundancy number is settled | `specified` (falsifiable) | Fig 2 :29; Fig 10 :24 |
| Redundancy must buy independence, not duplicate a closure | `specified` | Fig 2 :31-32; Fig 8 :48-49; Fig 6 :21 |
| Size independence to the cost of being wrong | `specified` | Fig 2 :42 |
| p and C are two readings; do not collapse them into one number | `general` | Fig 12 :125, :126, :130 |
| The spend is a union of conditions, staged as reversible cuts | `specified` | Fig 9 :54-57, :40-41 |
| Map the habitat outward; the material failure is often three tiers out | `specified` | Fig 11 :43, :44, :52-53 |
| Resilience is maintained work; the channel decays | `specified` | Fig 11 :63; Fig 10 :24-29 |
| The specific number "hold X weeks / Y suppliers" | **refused as a verdict** | F1, F4, F5 |

---

## 4. Pre-registered refuter (written before the conclusion)

Per `THE_FORMULA.md` step "Direction" and the seat-map rule that a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. A figure re-census shows that a specific redundancy number is settled by the loop independently of a ground reading (breaks F1 and the ground-only rule).
2. Two sources sharing a demonstrable common cause are shown in a real event to fail independently, so headcount redundancy is a valid unit (breaks F3).
3. Adding an identical duplicate inside one closure is shown to expand the reachable set (breaks F6 and idempotence).
4. The figures are shown to license adding p and C in one currency for this decision (breaks F5).
5. A clean history is shown to be a sufficient statistic for p in this class of systems (breaks F7).
6. One lever is shown to clear all four conditions with a residue that is smaller but not categorically different (breaks F8).

If any fires, the corresponding part is retracted. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Do not publish a single "optimal redundancy" number. Publish the shape and the decision rule (F1, F4, F5).
2. Re-index the analysis per slot before aggregating anything (F2, F9).
3. Audit each " redundant" pair for shared evidence: same port, same tier-two, same infrastructure, same maintenance. Count only independent closures (F3, F6).
4. Stage the spend as ranked, reversible cuts, and keep the channel to the ground reachable (F8, F10).
5. State mode on every sentence. The absence of a disruption is not a measurement (F1, F7).
6. Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* Send the generator, the shape and its refuter, not a recording of a number.

---

## 6. Canonical usage check

Two sources govern how the figures may be used. They were read after the first five sections.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; and the limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of the instruments and records the lineage. *"Indiscernibility is not identity."*
- `THE_FORMULA.md` step 7 separates SEARCHED, INWARD and OUTWARD. For this question: SEARCHED means "is the slot already in the closure and unfound" (the firm has not enumerated its tiers); INWARD means sharpen the visibility instrument from one already returning something; OUTWARD means import a source from a closure that genuinely differs. Underivable-in-principle and unreachable-at-this-budget are different facts.

### Retractions and confirmations

| earlier finding | status after the canonical check |
|---|---|
| F1 "no number is settled" | **Canonically confirmed.** The README's "shape, not a name" and the mode rule both forbid a verdict before the ground speaks. |
| F4 "buy by cost of being wrong" | **Confirmed as the only figure decision rule.** It is not upgraded to `grounded`: the figure states it, the ground has not paid for a specific spend. |
| F5 expected value as a summing error | **Confirmed, with a conflict noted.** Business expected-value models conflict. The conflict was returned to the census (two currencies), not resolved by flipping the verdict. |
| F6 "duplicate adds no atom" | **Confirmed by re-census.** The apparent strain with reliability engineering (which counts identical duplicates in a parallel model) is resolved: classical reliability assumes independence, which is exactly the assumption the figure refuses. Different domains, so no figure contradiction. |
| F7 "absence is not p=0" | **Canonically confirmed.** Fig 8 :39 and Fig 9 :44 are explicit. The "no last room" section of the README reinforces it. |
| F8 "union, not scalar" | **Canonically confirmed.** Fig 9 :54-57 plus the *Library of Babel* bundle passage. |
| F9 habitat enumeration | **Confirmed.** Fig 11 :43-53. No strain found. |
| Naming which redundancy wins | **Forbidden, not merely unsupported.** The README's "shape, not a name" governs a missing primitive; here the specific source name is a binding from the supply frame onto a held slot, and it needs a source gate and shadow test before it carries weight. |

### Step 7 discipline

- **SEARCHED:** asked first. Many firms have not enumerated tier-two and tier-three dependencies, so the atom may already be in the closure and unfound. Fig 6 :49-50: *"more search at the same reach: is it in here and unfound? The closure does not change."*
- **INWARD:** sharpen the visibility instrument from one already returning something (Fig 6 :32: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."*). Do not invent a perfect risk score from nothing.
- **OUTWARD:** characterize the residual in effect terms, then find the frame whose closure differs (a different geography, infrastructure base, regulatory regime). Import with a provenance gate and a shadow test, debited against independence (Fig 6 :24).

These three are kept distinct and are never read against one another (Formula step 7).

### Updated verdict

The shape survives intact: per-slot residual, independence rather than duplication, sizing to the cost of being wrong, two currencies held apart, a union staged as reversible cuts, habitat enumerated outward, and maintained work. No specific number survives as a `grounded` verdict. Strains after re-census: none hidden; the one substantive conflict (expected-value models in business) is recorded as a conflict and returned to the census, and the one apparent strain (reliability headcount vs figure independence) is dissolved by re-census. All substantive claims are `specified`; the structural claims are `general`. Nothing is `grounded`.
