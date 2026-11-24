# Figure-grounded audit: uncertain outcomes and limited resources in conservation prioritization

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* says LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the Operators and Symbols tables, the eight essays, and the public world sources in `10_source_ledger.csv`. All figure citations use `Fig N :line` against the local verbatim extract.

---

## 0. The question in effect terms

> How can conservation prioritize actions when ecological outcomes are uncertain and resources are limited?

Restated as a decision: a manager holds a library Γ of candidate actions and beliefs about what each does. For each object slot s (a site, a species, an interaction, an ecosystem function), the library predicts an outcome Γ(b,a) and the ground returns an observation o′. The residual is R_s = |Γ(b,a) − o′|. "Outcomes uncertain" means R_s is live on some slots: the prediction is not yet paid by the ground. "Resources limited" means the budget bounds how much of the candidate space can be described and how much can be tried. The decision is which actions to accept into the plan, and which held assumption to refuse. It is a prioritization of actions, not a naming of winners.

Two options and what they lead to. Option A: produce a single ranked list from one aggregate score, then defend it by expert agreement. That hides live slot residuals in an average, mixes two incommensurate costs, and lets a shared evidence pool stand in for a verdict. Option B: state the shape of a rule that keeps residuals per slot, keeps description cost and action cost apart, ranges independent frames against the ground, enumerates contact and cascade, and keeps every cut ranked and reversible. Option B yields a checkable generator, not a list.

---

## 1. Residual

- **R (arity).** Many slots, not one number: sites, species, interactions, functions, and the relations among them. Fig 1 :19: "The residual is indexed by object slot, not aggregated."
- **R (symmetry).** Not symmetric across slots. Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries." The same actor is a benefactor to one residual and a malfactor to another (Fig 11 :50). So no standing priority order survives a change of residual.
- **R (scale).** Local action to third-order effect. Fig 11 :52: "contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."
- **R (question type).** A union compound, not one hard question. Fig 9 :5: "are not one hard question but several well-formed ones. Split it rather than search." Uncertainty about outcomes and scarcity of resources are two conditions; a single lever that clears the resource condition leaves the uncertainty condition binding, and the intersection is a specific compound (Fig 9 :55-58).

---

## 2. Domain census

One line per domain: actors / currency / anchor. No nameable anchor means it is not a domain yet. Partition or union. Order by dependency (Fig 3).

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D1 The habitat (field of contact) | species, conditions (light, water, temperature, season, terrain), relations (pollination, predation, competition, dependency) | contact and cascade | measured ecological state (the ground) | enumeration, not composition; union of overlapping conditions |
| D2 The budget and acceptance rule | candidate actions φ, the library Γ, live slot residuals R⁺_s | two currencies: bits price the description, actions price finding out whether it holds | what the ground pays | partition: which actions compose from held terms and are genuinely novel |
| D3 Verification and monitoring | managers, monitors, expert elicitors, independent methods | agreement and residual | the ground, never agreement | triangulation, not negotiation |
| D4 Dependency order of the management chain | perception, vocabulary, objective, planning, learn and carry | a route under incomplete information | the broken link, if it has an instrument | ordered by dependency, not importance |

**Order by dependency.** Perception (can we observe the slot?) -> vocabulary (do we have terms for what an action affords?) -> objective (can we say what counts as progress per slot in our own terms?) -> planning (a route). Fig 3 :20: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it." D1 feeds D2, D2 feeds D3, D4 governs where effort lands across all three.

**Partition or union.** D1 is a union of conditions (direct contact, cascade, asymmetry). D2 is a partition of candidates into held, novel, misattached, mechanism-broken, and refuted (Fig 5 :10-14, :53). D3 is a triangulation of low-overlap frames (Fig 8 :29). Splitting the compound before searching is required by Fig 9 :5.

---

## 3. Figure census and findings

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual per slot; ground the only metric; frame-internal quantities disqualified | D2 governs: no aggregate score, no self-scoring metric |
| 2 The Ground | anchor invariance; triangulation not negotiation; independence | D3 governs: agreement cannot be the verdict |
| 3 Dependency Chain | broken link; order by dependency; instrumentless link | D4 governs: find the break before optimizing above it |
| 4 The Membrane | methods cross up, head starts down; round-trip gap | send the rule (generator), not a recording of one plan |
| 5 Mint Pipeline | three guards as product; MDL bargain; persistently wrong term | D2 governs: accept iff cost(φ) + left(R,φ) < cost(R) |
| 6 Closure / Reachability | import moves wall; instruments improved from worse ones | D3 governs: a monitoring instrument must already return something |
| 7 Room Chain | selection between rooms; next room is the direction travelled | D3 governs: choose the next independent check against the residual |
| 8 Union Surplus | low overlap; residual first, frame second | D3 governs: corroboration requires independent evidence pools |
| 9 Leave / Arrive | filters versus witnesses; ranked reversible cuts; split unions | D2 and D4 govern: cost is a filter, never a witness |
| 10 Ground Maintainer | ground does not decay, channel does; bring characterised residual | D3 governs: keep the measurement channel reachable |
| 11 The Habitat | enumerate habitat; valence relative to residual; asymmetry; cascade | D1 governs: enumerate, introduce, never subtract |
| 12 The Bond | two currencies, bits and actions, do not add | D2 governs: never collapse description cost and action cost |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | limit: no single priority list is derivable without a ground |
| Operators / Symbols | ¬ is unary; R is the aim and always a slice | refusal is available; the list is not the ground |

### F1 - Prioritize per slot, not by a global score (governs D2)

Fig 1 :19: "The residual is indexed by object slot, not aggregated."

Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

Symbols table :42-44: "One object, region or entity being tracked. R is measured per slot, never as a single global number."

A conservation plan expressed as one score (total biodiversity value, total hectares, total species weighted and summed) is an aggregate. By Fig 1 :22 the live slot that matters is precisely the one an average erases. The rule must carry R_s for each site, species, interaction and function, and show which slot is live before ranking any action.

**Mode: `specified`. Refuter:** exhibit a single scalar score over slots that preserves every live slot's residual and the decision the residual drives. If such a score exists, F1 fails. Also: show a case where aggregating across slots increases the information available about where to act.

### F2 - The ground is the only metric; a planning frame cannot score itself (governs D2, D3)

Fig 1 :23: "The ground enters as the only metric."

Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces."

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."

For conservation the anchor is a measured ecological outcome: a monitoring plot, a population count, an experiment, a before/after control, an observed function. "Coverage achieved", "number of plans written", "stakeholder satisfaction with the plan" and "credibility accrued" are quantities the planning frame produces and also uses to score itself. Fig 1 :24-26 names coverage and compression achieved, predicates minted and credibility accrued as frame-internal. They are not evidence that an action worked.

**Mode: `general` for the structural claim, `specified` when applied to a named metric. Refuter:** show a planning-internal quantity that settles whether an action changed the ecological state without any measurement that could fail. If such a quantity exists, F2 fails.

### F3 - Two currencies: description and action, held apart (governs D2)

Fig 12 :125: "A composition costs in two currencies, and they do not add."

Fig 12 :126: "Bits price the description. Actions price finding out whether it holds."

Fig 12 :127: "the budget is what decides how much of the space is reached at all."

Fig 12 :130: "Summing them into one figure is the error this names, not the fix for it."

"Resources are limited" is not one constraint. Planning and analysis cost bits (data, models, expert elicitation, the description of the action). Fieldwork and implementation cost actions (survey effort, fencing, translocation, restoration). The figures say these are in different units, so a system holding one accounting "will not notice the shortfall. It proposes arrangements it cannot afford to test" (Fig 12 :127). The conservation literature independently distinguishes money and knowledge as two limiting factors (McDonald-Madden et al. 2008, see `09_watson_answer.md` WORLD), but that pair is a correspondence, not an identity with bits and actions; the re-census in §7 records the correction.

**Mode: `specified`. Refuter:** exhibit a conversion from description cost to action cost that preserves the budget boundary and the choice of actions, with the conversion's own ground reading. If it does, the two-currency rule is a bookkeeping convenience rather than a structural constraint.

### F4 - Enumerate the habitat, include cascades, no standing list of good actions (governs D1)

Fig 11 :43: "The habitat is enumerated, never composed."

Fig 11 :44: "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."

Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries."

Fig 11 :51: "No standing list of good actors survives a change of residual."

Fig 11 :52: "contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."

The first step of prioritization is a list, not an optimization: everything in contact with the live residual, then second-order and third-order contacts. The DDT case in the figure is itself a conservation caution. A "best practice" action list that is not re-derived against the current residual is a standing list of good actors, which Fig 11 :51 forbids.

**Mode: `general` for enumeration and asymmetry, `specified` for the cascade claim. Refuter:** show a prioritization that scopes only direct contact and still avoids a documented second- or third-order failure, or show a standing action list that remains valid across a change of residual.

### F5 - You cannot subtract the habitat; intervention is asymmetric (governs D1)

Fig 11 :61: "The seat's power is asymmetric. Introduction is available; exclusion is not."

Fig 11 :63: "Which is why a managed ecosystem is permanent work rather than a solved state."

A manager can add an actor (a predator, a propagule, a fire regime, a fence) and cannot remove the habitat, because contact is a fact about the world and does not consult the manager. So "we protected the site" is not a solved state; it is an ongoing change in contact. This constrains how an action is described in the plan: as an introduction with a cascade to monitor, not as a subtraction of a threat that is then over.

**Mode: `specified`. Refuter:** exhibit a management operation that genuinely removes an actor or a relation from the habitat without substituting another habitat, and that leaves the residual's goal unchanged. Fig 11 :66 says isolation is substitution, not removal: "Isolation is not removal of the habitat. It is substitution of one habitat for another."

### F6 - Find the broken link before optimizing above it (governs D4)

Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."

Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

Fig 3 :30: "Most improvement effort in practice lands above the break, because that is where the measurements already exist."

A prioritization exercise often assumes perception (we can measure the species) and vocabulary (we know what the actions afford) and goes straight to planning and optimization. Fig 3 :29: "Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed." In conservation the middle link, having terms for what a situation affords and saying what counts as progress, is the least instrumented. A plan that optimizes the selection algorithm while the objective is unmeasured is effort above the break.

**Mode: `specified`. Refuter:** show a case where better optimization of action selection, with no change to perception or objective, moved the ecological outcome at the ground. That would mean the break was where the measurements already existed.

### F7 - Accept by bargain; refuse the term that keeps being wrong (governs D2)

Fig 5 :42: "The acceptance test is a bargain, not a threshold."

Fig 5 :43: "A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before."

Fig 5 :60: "The selector asks which residual is improving; this asks which one keeps being wrong and is not."

`THE_FORMULA.md` step 3 states the same bargain: accept φ iff `cost(φ) + left(R,φ) < cost(R)`, gated by SUPPORT (|R⁺_s| > 0 on some slot before the search), REACHABILITY (φ in closure(Γ) during), and NOVELTY (φ not in atoms(Γ) after). For conservation: an action is accepted when its cost plus the residual it leaves is less than the residual before; it must answer a live slot; it must compose from capacities the program already has; and it must not be a relabelled action already in the library.

The refusal side matters as much. The candidate to refuse is the currently bound priority assumption whose residual "PERSISTS AND DOES NOT TREND DOWN" (Fig 5 :59), not the outcome the manager disliked. Negation is available (Operators table :53-58: "a refutation is a negation, which is why a vocabulary without it can only accumulate"), so a plan can carry its own correction.

**Mode: `specified`. Refuter:** show a program that accepts actions by a fixed ranked list with no leftover residual term, and that reliably reduces L_s across slots at the ground without ever refusing a held assumption. The second half of that claim needs a measurement, not an argument.

### F8 - Filters for the budget, witnesses for the verdict (governs D2, D4)

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

Fig 9 :41: "so keep every cut ranked and reversible"

Cost, feasibility, political acceptability and time are filters: they decide what gets tried first and how much of the space is reached. They are not witnesses for whether an action changed the ecological state. Fig 9 :40 warns: "a wrong cut removes the answer and speeds up." Hence every exclusion stays ranked and reversible, and the ground alone removes it.

**Mode: `general`. Refuter:** exhibit a case where a cost filter, by itself, establishes that an action works at the ground. If it does, the filter has become a witness and F8 fails.

### F9 - Range frames against the ground, keep the channel live (governs D3)

Fig 2 :45: "Frames range against the ground. They do not negotiate with it."

Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

Fig 10 :24: "the ground does not decay, the channel does"

Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something."

Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

Uncertainty about outcomes is not resolved by more agreement among the same planners. It is resolved by independent frames (field experiment, remote sensing, long-term monitoring, local and Indigenous knowledge, models) each ranged against a ground that does not move because they agree. Monitoring is the channel; it decays through "stale percepts, dropped transients, saturated metrics, pooled readings" (Fig 10 :25-26), and the output of a dead channel is not "no change", it is "you have lost touch" (Fig 10 :28). An instrument is improved from a worse one already returning something (Fig 6 :32), which is why a program with no current measurement cannot bootstrap one from a description alone.

**Mode: `specified`. Refuter:** show a decision about which action worked that was settled by agreement among frames drawing on the same evidence, with no independent ground reading. If it can be, Fig 2 :40 is wrong here.

### F10 - The framework returns a shape, not a priority list (limit)

Fig 9 :32: "you get a kind of thing, never the answer itself."

Fig 13 :134: "Unreachable is a verdict here, not a silence,"

Fig 8 :39: "So a search that finds nothing is never a proof of absence."

No priority list over actual sites, species and actions is derivable from the figures. What is derivable is the shape a defensible list must have and the tests it must survive. Absence of a list here is `unreachable-at-this-budget`, not `underivable-in-principle`: with a specified habitat and a live ground, the rule can be run. Marking it `gap` would be wrong, because governing figure lines exist for every domain. Marking it `grounded` would also be wrong, because no measurement was taken.

**Mode: `general`. Refuter:** derive a concrete priority list from the figures alone, with no habitat enumeration and no ground reading. That would breach Fig 9 :32.

---

## 4. Pre-registered refuter (written before the conclusion)

Per Fig 5 :65-66, "Committing a prediction before a run is this, already working." The shape claim is refuted if any of the following holds:

1. A single aggregate score across slots preserves all the information the per-slot residual carries about where to act (breaks F1, Fig 1 :19 and :22).
2. A prioritization converts description cost and action cost into one currency and shows the conversion leaves the budget boundary and the chosen actions unchanged (breaks F3, Fig 12 :125-127 and :130).
3. Expert agreement, with no independent ground reading, settles which action worked (breaks F9, Fig 2 :35 and :45).
4. A plan scoped to direct contact avoids a documented second- or third-order ecological failure (breaks F4, Fig 11 :52).
5. A fixed ranked list with no refusal step reliably reduces live residuals at the ground across changing conditions (breaks F7, Fig 5 :59-60).

If any fires, the shape is withdrawn or repaired and the change recorded here. Until one is run, no claim in this folder is `grounded`.

---

## 5. Recommendation

1. State the shape as a rule, not a list. Keep R_s per slot, show which slots are live, and refuse to sum them (F1).
2. Keep bits and actions in separate accounts and state the budget boundary in each (F3). Cost is a filter, never a witness (F8).
3. Enumerate the habitat outward to the cascade, and re-derive the action list whenever the residual changes (F4, F5).
4. Check the management chain for a broken link before optimizing the selection algorithm (F6).
5. Range field experiment, monitoring, remote sensing and local knowledge separately against a ground that does not update (F9). Keep the monitoring channel reachable.
6. State the mode on every sentence. Send the rule and its refuter, not a recording of one successful plan (Fig 4 :22: "Only methods cross up. Only head starts come down.").

---

## 6. Canonical usage check

Two sources govern how the figures may be used and were read after sections 0 to 3.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw"; the framework says "what a missing thing would have to look like (a shape, not a name)" and "Indiscernibility is not identity."
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule, the mint bargain, step 7's SEARCHED / INWARD / OUTWARD distinction, and "Direction": a frame cannot check the direction of its own question, so the sought-for shape must be written down as an ordinary term. That bound is made in this folder's README.

**Applied here.** No figure line is used to name a species, site or action. Fig 9 :32 and the README's "a shape, not a name" jointly forbid that. "Unreachable is a verdict here, not a silence" (Fig 13 :134) is recorded as the status of the concrete list, not as a failure of the derivation. Formula step 7 is kept distinct: SEARCHED would ask whether the right actions are already in the plan and unfound; INWARD would sharpen monitoring in our own terms; OUTWARD would import a frame (for example Bayesian experimental design or risk-sensitive foraging) whose closure predicts the shape of the residual. The three are not read against one another.

---

## 7. Strain test, re-census, and retraction / confirmation log

### Strain test

- **Fig 12's bits and actions versus the conservation literature's money and knowledge.** Initially treated as the same pair. Re-census: the figure governs the incommensurability of *description cost* and *action cost* inside a frame; McDonald-Madden et al. (2008) operationalize funding and model uncertainty. Different objects, so no strain after re-census. **Retracted as identity**, retained as correspondence.
- **Fig 11's "exclusion is not" versus conservation triage.** Initially read as "triage is forbidden by the figures." Re-census: declining to add an actor is not subtracting the habitat. Fig 11 :61 governs addition and subtraction of actors, not the ethical decision to stop funding a slot. **Retracted as a figure verdict.** It is a world-source ethical disagreement (Bottrill et al. 2008; PNAS 2016), not a figure conflict.
- **Fig 1's "ground: RLVR" versus ecological ground.** Initially strained because conservation has no reward function. Re-census: Fig 1 :6-7 names the framework's calibration instance; Fig 2 :29 defines an anchor generically as a measurement or experiment that does not move with opinion. Different quantities. **Not strained.**
- **Fig 9's verdict / lookup / narrowing versus a three-stage allocation algorithm.** Initially used as "leave the plan, find the action, narrow the list." Re-census: those three are about leaving a *frame*, not allocating a budget. **Retracted** as a forcing; they are used in F8 only for the filter/witness rule and the ranked-reversible cut.

### Retraction and confirmation log

| earlier reading | status after re-census and canonical check |
|---|---|
| F3: money and knowledge are Fig 12's two currencies | **Retracted as identity.** Correspondence in a different frame. Fig 12 still governs bits versus actions. |
| F5: the figures forbid conservation triage | **Retracted.** Fig 11 forbids subtracting the habitat, not declining an addition. Triage is a world-source ethical question. |
| Fig 9 verdict/lookup/narrowing is an allocation algorithm | **Retracted as forcing.** It governs leaving a frame. |
| F10: no concrete list is derivable | **Confirmed** by Fig 9 :32 and Fig 13 :134. Status `unreachable-at-this-budget`, not `gap`. |
| F2: ground is the only metric | **Canonically confirmed** by Fig 1 :23 and Fig 2 :29. |
| F1: per-slot, not aggregated | **Canonically confirmed** by Fig 1 :19, :22 and Symbols :42-44. |
| F9: agreement is not a verdict | **Canonically confirmed** by Fig 2 :35, :40, :45 and Fig 7 :35. |
| "Shape, not a name" | **Canonically confirmed** for the missing list. Does not forbid naming an atom already held when it is provenanced as a binding (see `05` §5b and `06` Q1 in the exemplar for that distinction). |

After re-census: zero live strains. Two retractions and one narrowing are kept visible rather than erased.

---

## 8. Final audit line

Every domain has a governing figure line. Verdict per domain is kept separate: D1 `triangulated` (Fig 11 plus Fig 2, low overlap between habitat enumeration and anchor invariance), D2 `triangulated` (Fig 1, Fig 12, Fig 5, low overlap between slot indexing, cost accounting and the acceptance bargain), D3 `triangulated` (Fig 2, Fig 10, Fig 7), D4 `single-source` (Fig 3; the management chain is one figure's object). The concrete priority list is `unreachable-at-this-budget`, stated plainly. Nothing is `grounded`. The world sources in `09_watson_answer.md` corroborate but do not decide; most are from a different evidence pool than the figures, which is why they are worth recording, and none overrules a figure line.
