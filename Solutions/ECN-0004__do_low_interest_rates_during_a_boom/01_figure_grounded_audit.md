# Figure-grounded audit: ECN-0004, low rates and malinvestment versus demand shortfall

**Mode of this document: `specified` on the separations, `general` on the structural shape, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* states that LLM output can "simulate an approximate answer/output with the formula" but that "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the economic question it reports on. No measurement of any episode was taken. See `05_what_shape_means.md` section 7.

**Sources.** The canonical figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read verbatim this session; `THE_FORMULA.md`; `THE_SEAT_MAP_Field_Guide_amended.md`; the canonical figures README and metalaws note; the essays and world sources in `10_source_ledger.csv`. Every figure string quoted below was checked character by character against the extract. Citations use `Fig N :line` against that file.

---

## 0. The question under audit

> Do low interest rates during a boom create harmful investment "malinvestments," or are recessions better explained by demand shortfalls and financial shocks?

The question is phrased as an either/or. The first duty of a derive-first audit is to state what would have to be true for that framing to be admissible. It is admissible only if both descriptions are answers to one residual, measured in one currency, against one anchor. The census below tests that. The answer turned out to be no, so the either/or is itself the main finding.

The answer shape was written down before the run (formula "Direction"): for a named episode and a named project slot, name which condition was load-bearing, name the non-updating ground that settled it, and state what would have had to be true for the other verdict to win. Anything that returns a single universal winner over all recessions fails this shape because it aggregates across slots and flattens a union into a partition.

---

## 1. Residual, described in effect terms

The unexplained effect is **clustered failure of particular capital projects after a boom in which the price of borrowing was low**, together with the aggregate fall in spending that accompanies it. Two readings arrive with it:

1. The price of borrowing was wrong relative to real saving, so specific projects were wrongly started. This is a **per-slot allocation residual**. Its comparator is a rate that was never observed.
2. The flow of spending or credit broke, so sound projects could not be financed or their output could not be sold. This is a **channel and aggregate-anchor residual**. Its comparator is a level of spending or credit that was also never observed.

Arity: at least two conditions, possibly three once the comparator is counted separately. Symmetry: the two readings are not symmetric alternatives to be swapped. One is an ordered claim about a sequence (low rate, longer projects, clustered failure), the other is a threshold claim about a shortfall against a benchmark. They have different bond types. Scale: the first reads at the project slot and the capital structure, the second at the aggregate and the credit channel. Fig 9 :4-5 says that a disagreement which does not shrink with effort, "where each rule keeps working well on a different subset", is "not one hard question but several well-formed ones." and "Split it rather than search.". The apparent either/or therefore enters the census as a candidate **union**, not as an accepted partition.

---

## 2. Domain census before any figure line is chosen

I describe R by arity, symmetry and scale, then give one line per domain with actors, currency and anchor. A domain with no nameable anchor is not a domain yet and is recorded as owed, not as found.

| domain | actors | currency | anchor (nameable, non-updating?) | question type |
|---|---|---|---|---|
| D1, intertemporal price signal | central bank, savers, borrowers, the market rate, the saving-determined comparator | a price/ordering, the gap between two rates | **owed**: an independent measure of the comparator. Policy rate is not an anchor because it moves when pushed. Observed defaults and project survival are candidate anchors. | comparison (⋛) between a held quantity and an unheld one |
| D2, real allocation at the project slot | individual investment projects, capital structure, hurdle rates, liquidation | actions and cash flows; per-project survival | project-level outcome against a discount rate fixed independently of the decision (capital budgeting supplies the practice, not the figure) | per-slot residual, ordered sequence |
| D3, aggregate spending and the credit channel | households, banks, balance sheets, aggregate demand, credit spreads | spending flow and credit availability | observed spending, employment, defaults and bank lending. These are counters and markets, and do not change because a frame thinks otherwise. | threshold (⋛) against a benchmark plus a channel state |
| D4, verification and outreach frame | expert readers, schools of thought, submitted packets | agreement and residuals | the ground, never agreement | a room that must differ from the last if it is to add evidence |

**Partition or union.** D1, D2 and D3 form a **union of overlapping conditions**, not a partition. The same episode can carry a rate gap, a cluster of wrong projects and a broken credit channel at once. A case in two conditions is not a harder case of either (Fig 9 :57), so one lever aimed at one condition leaves the intersections standing. The census therefore owes a separate loop per domain and forbids an averaged verdict such as "rates matter 40 percent, demand 60 percent".

**Order by dependency (Fig 3).** The chain runs: perceive the per-slot failure (link 1), have terms for what a rate and a project afford (link 2), say what would count as progress, namely the comparator and the counterfactual (link 3), plan a discriminating test (link 4), then carry the method (link 5). The break is expected at link 3, because the comparator has no instrument. Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." Effort spent below such a break is a reading of nothing.

**Strain test applied during the census.** My first pass tried to assign "interest rate" to one of the six substrate terms (spectrum or gradient). That is a strain: the six are the physical minimum set (Fig 13), and an interest rate is a quantity in the economic frame's library, not a seventh primitive. Re-census dissolves it by carrying only the structural template across scales: cross-kind composition, a non-updating anchor, per-slot indexing, and Fig 4 :19-20 "Only the actors, the currency and the anchor change." The economic actors and currency change; the rule does not. Recorded as S1 below, not silently erased.

---

## 3. Figure census (read before concluding)

| figure | bearing on this question | verdict after use |
|---|---|---|
| 1 The Agent | residual indexed per slot, ground is the only metric, frame-internal quantities disqualified | decides the per-project versus aggregate split |
| 2 The Ground | anchor must not update, independence, correlation valence | the policy rate fails the anchor test; agreement between schools is one pool |
| 3 Dependency Chain | the comparator link has no instrument | locates the break at objective, not at perception or planning |
| 4 The Membrane | kernel fixed, actors/currency/anchor change; round-trip gap | licenses the structural template across scales; requires R_T |
| 5 Mint Pipeline | MDL bargain, support/reach/novelty, refutation as fifth kind | governs whether "malinvestment" is a real term or a retrodictive label |
| 6 Closure / Reachability | import moves the wall; a proto-instrument must already return something | governs the natural-rate comparator as an instrument question |
| 7 Room Chain | agreement compounds, evidence does not | a century of readings is motion without progress unless rooms differ |
| 8 Union Surplus | residual first, frame second; low overlap, underivable versus unreachable | governs the union reading and the import of a discriminator |
| 9 Leave / Arrive | split rather than search; union not partition; describe before looking; filters not witnesses | the decisive anti-either/or figure |
| 10 Ground Maintainer | channel decays while ground does not; convention that decides an outcome; declare stake; bring residual not source | governs the credit channel and the outreach order |
| 11 The Habitat | enumerate contacts; valence relative to residual; no standing list of good actors; isolation is substitution | the rate's valence flips with the residual; policy substitution is habitat substitution |
| 12 The Bond | comparison, sequence, subtraction, negation; arrangement is the substance; two currencies | gives the bond types for the two candidate mechanisms |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | declares the comparator gap honestly |
| Operators table | ⋛ comparison, − subtraction, ¬ negation | typed bonds for the claims |
| Symbols table | R is the aim and is always a slice | the unobservable comparator is residual, not nothing |

---

## 4. Findings F1 to F10

### F1. The either/or is a union, not a partition (decisive for the framing)

Fig 9 :4-5: "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones." and "Split it rather than search."

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

A boom with low rates can simultaneously carry (a) a rate gap relative to saving, (b) projects that only clear the subsidized hurdle, and (c) a fragile balance-sheet structure that later severs credit. Each condition has its own anchor. Asking which one explanation is right is asking a partition question of a union object.

**Mode:** `general` on the structure, `specified` that these three conditions overlap in the census. **Triangulated** across Fig 9 and Fig 1. **Refuter:** show that the three conditions are mutually exclusive by construction, or that one of them is a relabeling of the others rather than a distinct condition with a distinct anchor.

### F2. The residual must stay indexed per project (decisive against an aggregate verdict)

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." Fig 1 :23: "The ground enters as the only metric."

"Harmful investment" is a property of a slot: this plant, this tranche, this project. "Recession" is an aggregate reading. The question tries to settle a slot-level claim with an aggregate outcome. That is precisely the move Fig 1 forbids. A recession can be the correct aggregate of many per-slot liquidations *and* a demand shortfall, because those are different quantities in different slots.

**Mode:** `specified`, triangulated (Fig 1 plus the MDL and union findings). **Refuter:** a measurement showing that project-level failure and aggregate shortfall are the same variable under a single instrument, such that indexing adds no information.

### F3. The policy rate fails the anchor test; the comparator is owed

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome." Fig 2 :29-30: "If it moves when you push on it, it is not an anchor." The policy rate is moved by the policy maker whose action is under examination, so it cannot be the anchor that settles whether the action was a mistake. Fig 2 :33-34 adds the failure mode: if the reference updates on the frame, "everything drifts together, and the drift is coherent, which is why nobody notices."

What is owed is a rate that would have prevailed absent the policy, fixed independently of the school doing the measuring. The world source on the neutral rate states the same thing in economic terms: it "cannot be observed directly" and must be estimated. Fig 6 :34-35 sets the standard for such a proto-instrument: "The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve." Natural-rate estimates do return something, with bands wide enough and revisions large enough that the discriminator does not yet resolve the case.

Note the symmetry: the demand-shortfall side also needs an unobserved benchmark (potential output or full employment). This is recorded as S4, not used to favour either school.

**Mode:** `specified` that the rate is not an anchor, `general` that a comparator is owed. **Single-source on the figure side for the anchor test itself (Fig 2), corroborated in world terms by the neutral-rate source and Goodhart's law.** **Refuter:** produce a rate quantity that does not move when the policy maker pushes it and that every frame can range against separately.

### F4. "Malinvestment" risks being a term that explains everything by saying nothing

Fig 5 :42: "The acceptance test is a bargain, not a threshold." Fig 5 :43-44: "A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before. A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."

If malinvestment is defined *after* the bust as "the investments that failed", then it names the outcome and explains nothing. Fig 5 :29-30 names the result: "nothing new here" and "the machinery worked; the answer was already known." Fig 5 :48: "Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing." The human-cognition source on outcome bias corroborates the mechanism from a low-overlap field: the error is "evaluating the quality of a decision when the outcome of that decision is already known."

The term can be salvaged, and the salvage is the forward version: a project that clears the actual borrowing rate but would not clear an independently estimated saving-determined rate. That version commits to a comparison and is refutable. It is a candidate, not a settlement, while the comparator is unresolved. This is correction C1 in `01` and is kept visible rather than smoothed.

**Mode:** `specified`. **Triangulated** (Fig 5 plus the outcome-bias source, low overlap). **Refuter:** exhibit an independent criterion, fixed before the bust, that classifies projects as wrongly initiated at a rate above zero predictive content, or show that the MDL bargain fails for such a criterion.

### F5. The two mechanisms use different bonds

The Operators table defines ⋛ as "a goal is a comparison, which is why a vocabulary without it cannot state one" and − as "progress is a subtraction, which is why a vocabulary without it cannot say how far along it is". Fig 12 :111: "A vocabulary without bonds can name a state and cannot name a route to one." Fig 12 :94: "The arrangement is the substance."

- The Austrian claim is an **ordered sequence** (→) plus a **comparison** (⋛) between the actual rate and the comparator, followed by a **subtraction** (−) of the wrong projects. Its bond structure is `actual rate ⋛ comparator → project set − liquidated set`.
- The demand/financial claim is a **threshold** (⋛) of spending against a benchmark plus a **channel break**: the credit link that normally carries saving to investment stops carrying. Fig 10 :24: "the ground does not decay, the channel does"; Fig 10 :25-26 lists "stale percepts, dropped transients, saturated metrics, pooled readings" as the ways contact is lost.

These are not inverse spellings of one claim. The same atom list can carry both, with different bonds, which is the framework's definition of a different substance (Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."). Over the shared economic atom set they are an isomer claim, subject to the fixed-atom condition recorded as a live strain in `06`.

**Mode:** `specified`, triangulated across Fig 12 and the Operators table. **Refuter:** show that both descriptions reduce to the same bond under the same operands, in which case the isomer claim fails and a single mechanism remains.

### F6. The interest rate's valence is relative to the residual

Fig 11 :49: "An actor’s valence is relative to the residual, not a property it carries." Fig 11 :51: "No standing list of good actors survives a change of residual."

Low rates are a benefactor when the residual is a demand shortfall (they support spending and debt service) and a malfactor when the residual is intertemporal misallocation. Neither "low rates cause busts" nor "low rates prevent busts" is a verdict independent of which residual is indexed. The world source on debt deflation corroborates the context dependence: falling rates accompany the bust rather than causing it in Fisher's chain, while the real debt burden rises. That is a claim about which quantity is being measured, not a contradiction of the rate-gap claim.

**Mode:** `general` on valence relativity, `specified` on the rate. **Triangulated** (Fig 11 plus the debt-deflation source). **Refuter:** a stable classification of the rate as benefactor or malfactor across all residuals.

### F7. Agreement between the schools is one pool, not two witnesses

Fig 2 :39: "Correlation has valence." Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool". Fig 7 :12-13: "agreement compounds, evidence does not". Fig 7 :35: "A room’s agreement is variation, not a verdict. Selection between rooms is where the ground votes."

A century of debate over the same historical episodes is handed along the same records. Persistent disagreement does not prove the question open at the ground, and consensus does not close it. Fig 8 :50-51: "Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence." That is the standard to aim for: separate experience, not separate vocabulary. The world source on Austrian business cycle theory states that empirical findings are inconclusive and schools reach different conclusions from the same record, which corroborates the structural diagnosis rather than deciding between the schools.

**Mode:** `specified`. **Triangulated** (Fig 2 and Fig 7). **Refuter:** two frames with genuinely independent evidence that return the same per-slot verdict, with the independence documented.

### F8. Selection of recipients must not be selection for agreement

Fig 10 :59: "an interest in the outcome is unavoidable, an interest in the reading is disqualifying." Fig 10 :60: "Where a stake cannot be removed, declare it. An undeclared interest is modelled anyway and an unnamed model runs unchallenged." Fig 10 :93: "A ground with a reputation to protect is a ground someone benefits from, and its keeper is thereby disqualified."

Both schools have a stake in the verdict, and the stake is structural. The first contact must therefore carry the residual and its refuter, not the theory. Fig 10 :52: "Bring a characterised residual, never the source." Fig 4 :22: "Only methods cross up. Only head starts come down." The public venues in `03` are chosen for being checkable and opt-in, not for likely agreement.

**Mode:** `general` on the rule, `specified` on this outreach. **Triangulated** (Fig 10 plus seat-map rules). **Refuter:** a selection procedure that removes the stake rather than declaring it, with the removal checkable by a third party.

### F9. Where the chain actually breaks

Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." Fig 3 :20: "The chain is ordered by dependency, not by importance." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

Perception works: failures are visible. Vocabulary works: both schools can name the price, the project and the shortfall. The objective link does not: neither "wrong rate" nor "shortfall" has an instrument that both schools accept. Planning effort aimed at more elaborate versions of either theory lands above the break and arrives at a step that cannot use it. Fig 3 :25-26 names why this link attracts the least attention: "has neither, so it attracts the least attention and the fewest instruments."

**Mode:** `specified`, single-source on the figure side (Fig 3), with world corroboration from the neutral-rate and Simpson's-paradox sources. **Refuter:** an accepted instrument for either comparator, after which the break moves and this finding is retracted.

### F10. What survives, with mode attached

| claim | mode | figure / source | status |
|---|---|---|---|
| The either/or is a union of overlapping conditions with different anchors | `general` structure, `specified` census | Fig 9 :4-5, :54-58; Fig 1 :19 | triangulated |
| The residual must be indexed per project, not averaged into a recession rate | `specified` | Fig 1 :19, :22 | triangulated |
| A policy-moved rate cannot be the anchor that settles the policy question | `specified` | Fig 2 :29-30, :33-34 | single-source figure side plus world corroboration |
| An independently fixed comparator is owed by both schools | `general` owed, `specified` unheld | Fig 6 :34-35; Fig 3 :27 | single-source figure side plus world corroboration |
| "Malinvestment" is a retrodictive label unless it carries a forward criterion | `specified` | Fig 5 :43-44, :48 | triangulated |
| The rate's valence flips with the residual | `general` | Fig 11 :49, :51 | triangulated |
| Which mechanism dominated a given episode | **gap, unreachable at this budget** | Fig 9 :32; Fig 13 :134; Fig 8 :39 | no figure line governs it |

---

## 5. Pre-registered refuter (written before the conclusion)

Per the seat-map rule that "a falsifier written before the run is a design instrument", the shape claim is refuted if any of the following holds:

1. A figure line directly returns which of the two explanations dominates recessions in general; the union verdict and the gap would both be withdrawn.
2. Per-slot failure and aggregate shortfall are shown to be one quantity under one instrument, so per-slot indexing adds nothing (breaks F2).
3. An instrument fixes the comparator with bands narrow enough to classify boom-time rate gaps, and across a set of episodes shows no relation to subsequent project failure (breaks the forward version of F4), or shows a relation that makes the financial/demand frame unnecessary (breaks F1).
4. A documented case in which low rates and a rate gap cluster with project failure while spending and credit channels remain intact and no shortfall is measurable (breaks the necessity claim on the demand side).
5. A documented case in which a demand shortfall and a credit break occur with no rate gap and no misallocated project set (breaks the necessity claim on the Austrian side).
6. A re-census shows the per-slot and aggregate readings draw on the same evidence at the same scale and therefore constitute one frame wearing two names (Fig 8 :48-49).
7. Two genuinely low-overlap frames, with separately documented ground contact, return a single winner at the slot level that survives the anchor test. This is a refutation by success and is as admissible as a failure.

If any fires, the relevant finding is withdrawn in the retraction log below. Until one is run, nothing here is `grounded`.

---

## 6. Recommendation

1. Stop asking the either/or. Split the union and run one loop per condition (Fig 9 :54).
2. Index the residual per project slot and keep the aggregate reading as a separate slot (Fig 1 :19, :22).
3. Treat the comparator as an owed instrument, not as a term to be asserted by either school (Fig 6 :34-35). A natural-rate estimate already returns something that fails to resolve, which is a starting edge, not an answer.
4. Keep "malinvestment" only in its forward, refutable form. Record its first use after the fact as an outcome-bias correction, not as evidence.
5. Keep the credit-channel claim separate from the allocation claim. "The ground does not decay, the channel does" (Fig 10 :24) is a different object from "the wrong projects were started".
6. Send the residual and the refuter first (Fig 10 :52). Do not ask for endorsement of either school.
7. Report the gap as unreachable, not as silence: "Unreachable is a verdict here, not a silence" (Fig 13 :134).

---

## 7. Canonical usage check and retraction / confirmation log

Two local sources govern how the figures may be used and were read after the first six sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, which says "the quotes are the authority, not this summary" and that the framework returns "what a missing thing would have to look like (a shape, not a name)"; and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, the metalaw reading.

| earlier reading | status after canonical check |
|---|---|
| First pass read the question as a two-option partition with one winner | **Retracted.** Fig 9 :4-5 and :54-58 govern; it is a union. Recorded as F1, not erased. |
| First pass assigned the interest rate to a substrate term (spectrum or gradient) | **Retracted as a strain.** Re-census S1: only the structural template crosses scale; the rate is a quantity in the economic library. |
| "Malinvestment is meaningless" (first pass) | **Narrowed and kept visible.** F4: the retroactive label fails the MDL bargain; the forward comparator version is a legitimate candidate. |
| "The natural rate is unavailable, so the Austrian claim is empty" (temptation) | **Refused.** Unobserved is not absent. Fig 6 :34-35 asks whether anything already returns something that fails to resolve; estimates do. The verdict is `unreachable at this budget`, not refuted. |
| "Therefore the demand side wins by default" (temptation) | **Refused.** The demand side has the same comparator problem (potential output). Recorded as S4, so the symmetry is honest. |
| Fig 2 agreement rules applied to econometric consensus | **Narrowed (S2).** Consensus is efficient for a convention and a filter for the budget (Fig 9 :60), not a witness for a verdict. |
| Shape-not-a-name applied to the comparator | **Confirmed and narrowed.** It governs a primitive not held in the frame. Naming an already held binding is provenance, not an invented primitive. |
| World source on ABCT says mainstream rejects it | **Not a conflict.** It corroborates the union diagnosis at the level of the literature and does not settle the ground. Conflict rule not triggered. |

---

## 8. Strains and re-census

- **S1, substrate strain (dissolved).** The six-term physical set does not contain an interest rate. Re-census: carry the structural rule, not the physical labels. Fig 4 :19-20 licenses a change of actors, currency and anchor at a new scale. The economic frame holds a rate and a project set; the rule that composition needs a non-updating ground still applies.
- **S2, consensus strain (dissolved).** Agreement is disqualifying for a verdict (Fig 2 :40) but efficient for a convention (Fig 2 :41). Different quantities, same independence parameter. No contradiction.
- **S3, scale strain (dissolved by separation, not by averaging).** Per-slot residual and aggregate recession are different objects (Fig 1 :19, :22). Kept as the central split.
- **S4, comparator symmetry (live, not used to flip a verdict).** Both schools need an unobserved benchmark. This is a live type-and-instrument question, named as such.
- **S5, fixed-atom condition on the isomer claim (live).** Fig 12 :117 defines isomers over the same atoms. If a frame adds or drops an atom (for example, a balance-sheet term that the other frame lacks), the claim becomes composition plus import, not isomerism. Stated in `06` with a falsifier.
- **S6, world/figure conflict (none triggered).** Every substantive world source either corroborates a structural point or reports the inconclusiveness of the empirical literature. No source was made to overrule a figure line.

After re-census: two live strains (S4 and S5), four dissolved, none hidden.

---

## 9. Conclusion of the audit

The honest result is a separation and a gap, not a winner. The framework returns the **shape** any adequate account must have: per-slot indexing, a comparator that does not update on the frame, a channel that can fail while the ground remains, a non-updating anchor per domain, and separate verdicts that are never averaged. It does not return the empirical dominance of malinvestment over demand shortfall in any episode, and it does not name the missing instrument. That is unreachable at this budget, which is a verdict rather than a silence.

**Mode:** `specified` on the separations and conditions, `general` on the shape, not `grounded`. The whole folder is a simulated derivation checked for internal consistency against the figures, not a ground reading, and cannot settle the economic question it reports on.
