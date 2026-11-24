# Figure-grounded audit: BUS-0078, forecasting demand without waste or shortage

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, opened 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too (intelligence is essentially arrangement). However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the business question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the firm's belief about demand, formed from its own sales history, orders, promotions calendar and inherited priors about seasonality and growth.
- **a** is what the firm does: the production quantity, replenishment order, safety stock, capacity allocation.
- **Γ(b,a)** is the forecast, what the firm's library of models and rules predicts will be demanded.
- **o′** is what customers actually do: realized unit sales, cancellations, returns, stockouts.
- **s** is the SKU, period and market slot. R is indexed by SKU, by time and by channel, never aggregated into one company-wide accuracy figure.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is not the size of the error but whether a firm can move two outcomes in opposite-safe directions at once: **overage (waste, spoilage, excess inventory)** down and **underage (stockout, lost sale, lost goodwill)** not up. In operations research this is the newsvendor's two cost components (world source N1): *"The two cost factors are conflicting; therefore a tradeoff exists between ordering a lot in order to reduce the understock cost and ordering little to reduce overstock cost."* The question as written asks for both at once, which is a **union**, not a single optimization target (Fig 9 :55).

> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)

State the residual as: *why does the gap between what a firm's forecasting library predicts customers will buy and what customers actually do fail to be tethered closely enough, per slot, to keep overage and underage both small, and which failure mode is binding in a given slot?* This is an effect description. It names no model, no algorithm, no "accuracy target", no "demand sensing". Those are candidate names withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a pair of conditions whose conjunction keeps both outcomes bounded, plus an instrument that discriminates a channel failure from a reach failure. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names candidates directly: *"A measurement, an experiment, a counter, a market, a patient outcome."* Viable anchors here: realized unit sales (a counter), the market's actual choice, and the write-off and lost-sale counters. A forecast accuracy metric such as MAPE moves when you push on it (change the aggregation level, change the error measure, change the override process), so it is an instrument, not an anchor (Fig 2 :30: *"you push on it, it is not an anchor"*).

> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)

Accuracy is produced by the forecasting frame. It cannot be the frame's own verdict. This is the first structural result of the audit.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a four-place relation: firm Γ, action a (the order quantity), realized demand o′, indexed by slot s and ordered by time t. It is a sequence, so it carries an **ordered** bond (`→`, *"A then B; B needs A to have happened"*, Fig 12 :72). "Enough" is a threshold comparison (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87). It is not symmetric: the customer's realized choice is an anchor and does not update on the firm's opinion.
- **Symmetry.** "Accurate enough" is relative to the cost of being wrong, not an absolute quantity (Fig 12 :85-89; Operators table :46-51). The waste and shortage costs are *"two currencies, and they do not add"* (Fig 12 :125), so there is no single natural number called "accurate enough".
- **Scale.** Three scales are in view: the single SKU's step-by-step loop (forecast, order, observe, refit), the population of SKUs and channels with *"something that ranks what they produce"* (Fig 4 :5), and the supply chain across echelons. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The demand channel** (perception of the ground) | point-of-sale data, orders, sell-through, early indicators, the firm's instruments | contact with realized demand | yes: realized unit sales, the counter (Fig 2 :29) | admitted |
| **D2 The forecasting frame** (Γ and its models) | models, history, priors, planners, overrides | reach of what can be represented, description cost |φ| | yes: settlement against realized demand, *"then check it against the ground, then carry it up"* (Fig 5 :32) | admitted |
| **D3 The operational decision** (the action) | production order, replenishment, safety stock, capacity | actions, lead time, holding and shortage cost | yes: the write-off counter and the lost-sale counter (Fig 2 :29) | admitted |
| **D4 The market habitat** (population and conditions) | customers, competitors, promotions, season, entrants, shocks | survival, demand shifts, share | yes: customer choice and willingness to pay; the market as ground (Fig 2 :29) | admitted |
| **X1 "Forecast accuracy" as a self-standing target** | the forecasting team, the metric | MAPE, bias, tracking signal | **no** anchor independent of the model's own output (Fig 1 :27) | not a domain yet |
| **X2 "Zero shortage" as an absolute constraint** | the service-level policy | fill rate | measurable, but it is one side of D3 and directly contradicted by the canonical optimum (world source N1) | absorbed into D3, not separate |

X1 fails the anchor test and is excluded before any figure line is applied to it. X2 is absorbed: the nonzero optimal shortage probability is part of D3's currency, not a separate domain. These are structural exclusions, not claims that forecasters or service levels are unimportant.

### 1.3 Partition or union

D1 and D2 overlap: the model reads the channel, so their overlap is a compound with its own loop. D3 and D4 overlap: the order lands in the habitat and the habitat's response sets the next reading, so that overlap is a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: **(C1) the channel to realized demand stays reachable**, and **(C2) the forecasting reach can represent the demand that actually arrives**. A firm failing only C1 (stale, saturated or pooled readings, the bullwhip case) and a firm failing only C2 (a demand shift with no atom anywhere in its history) are not different degrees of one failure; they are different compounds and need different instruments. Fig 9 :57 is the warrant for keeping the verdicts separate in `09_watson_answer.md`.

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the firm read realized demand at SKU level?) → 2 vocabulary (does Γ have terms for what the signals afford, and can it say what would count as progress, that is, the overage and underage costs?) → 3 objective (can it state the comparison ⋛ that "accurate enough" hides?) → 4 planning (the order quantity) → 5 learn and carry (name what worked, verify it, refit). The middle link, having terms for what the situation affords and saying what would count as progress, is the one with no instrument. Almost all forecasting investment lands at links 4 and 5 (better algorithms, more data) because that is where the measurements already exist (Fig 3 :29-30). The world confirms the inversion: the FVA literature measures accuracy at every touchpoint but *"Overestimates the value of accuracy"* (world source F2), and Sterman's result is that *"Even a perfect forecast will not prevent a manager who ignores the supply line from over ordering"* (world source E1). A perfect forecast at link 4 cannot rescue a break at link 2.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed and what may count as a verdict |
| 2 The Ground | realized demand and counters are named anchors; independence vs common pool | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs SKU-to-chain transfer and the lossy summary |
| 5 Mint Pipeline | three guards as product; MDL bargain; "nothing new here" | governs when a model can be admitted at all |
| 6 Closure / Reachability | import is the only operator that moves the wall; no sensor for what never registered | governs novel demand (C2) |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs repeated forecast-refit cycles |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs ensemble agreement and source rules |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; keep anchor reachable | decisive for C1 and for the accuracy-metric trap |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | decisive for the "better model alone" claim |
| 12 The Bond | two currencies; isomer; comparison as a goal; arrangement is substance | governs the waste/shortage trade and competing explanations |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop |

Strain test applied during this census: an early attempt to apply Fig 13's six-term physical substrate directly to "demand ingredients" only fit by calling inventory a kind of energy and a trend a kind of gradient. That is a strain, so Fig 13 does **not** govern the composition of a forecast. Re-census sent Fig 13 to the honest-stop role only (section 6, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about forecasting or operations, `grounded` only if settled by a measurement. None is `grounded`.

### F1: Forecast accuracy is a frame-internal score, not the anchor

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 1 and Fig 2, low overlap: per-slot indexing vs anchor rule).**

> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"coverage, and compression achieved"** (Fig 1 :25)
> **"predicates minted, and credibility accrued"** (Fig 1 :26)
> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** (Fig 2 :29)

A MAPE or FVA score is produced by the forecasting frame. The ground is realized demand and the write-off and lost-sale counters. The world corroborates from two independent directions: FVA's own critic writes that *"A forecast might be 40% more accurate but the associated cost means the company makes 75% less profit overall"* (world source F2), and Goodhart's law in Strathern's formulation is *"When a measure becomes a target, it ceases to be a good measure"* (world source G1). The M5 competition found that *"Out of the 2,666 participating teams in the 'Accuracy' challenge, less than half (48.4%) managed to outperform the Naive benchmark"* (world source M1): elaborate machinery can fire while returning nothing new, which is Fig 5 :30, *"the machinery worked; the answer was already known."*

**Refuter:** a prospective, per-slot study in which an accuracy score alone, with no cost outcome and no realized-demand anchor, prospectively predicts which named SKU will generate waste and which will stock out next quarter, and is confirmed. That would make the metric an anchor and break F1.

### F2: R must be read per SKU-slot; an averaged accuracy number is a pooled reading

**Mode: `specified` for the operational consequence, `general` for the indexing rule. Domains D1, D3. Status: triangulated (Fig 1 and Fig 10).**

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"saturated metrics, pooled readings"** (Fig 10 :26)
> **"the output is not a verdict, it is you have lost touch"** (Fig 10 :27-28)

FVA is exactly a per-step and per-participant instrument: *"FVA is a metric for evaluating the performance of each step and each participant in the forecasting process to determine which one adds value and which one does not, so that the one that does not can be eliminated"* (world source F1). That supports per-slot indexing. But a single blended "FVA score" across all SKUs recreates the pooled reading. The M5 result that improvement *"diminish[es] at lower hierarchical levels and at the tails"* (world source M1) is the same signal: a top-level average hides the slots where the residual is live.

**Refuter:** an aggregate company-level accuracy statistic that predicts, prospectively and per SKU, which slot will fail and in which direction. If one exists, the per-slot requirement is an overcommitment to granularity.

### F3: The question is a union of two conditions, and the optimum is not zero shortage

**Mode: `specified`. Domains D3, D4. Status: triangulated (Fig 9 and the newsvendor result, low overlap: framework union rule vs canonical OR model).**

> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)
> **"A goal is a comparison, which is why a vocabulary without it cannot state one"** (Fig 12 :112)

The canonical operations model states the optimum directly: *"to minimize the expected total cost, the seller should intentionally create some shortage!"* (world source N2). Its critical ratio balances overage and underage costs rather than eliminating either. So the literal question, "reduce waste without creating shortages", is not a target the theory can pursue as written: the target is a **comparison** (Fig 12 :112) between two costs, with a nonzero tolerance for one of them. This is a genuine world/figure return to the census (world source N1 conflicts with the literal framing, not with the figure verdict), recorded as conflict C1 in section 6.

**Refuter:** a documented setting in which the measured optimal policy has zero overage and zero underage, or a proof that the critical-ratio solution degenerates to zero shortage for all positive cost pairs. Either fires against F3.

### F4: Quick loss of forecast quality is channel failure, not demand decay

**Mode: `specified`. Domain D1. Status: triangulated (Fig 10 and Fig 7, low overlap: ground maintainer vs room chain).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"stale percepts, dropped transients,"** (Fig 10 :25)
> **"saturated metrics, pooled readings"** (Fig 10 :26)
> **"→ keep the anchor reachable"** (Fig 10 :29)

The bullwhip effect is the world's name for a channel that stops carrying realized demand: *"the information transferred in the form of 'orders' tends to be distorted and can misguide upstream members in their inventory and production decisions"* (world source B1). The four named causes, demand forecast updating, order batching, price fluctuation and rationing gaming, all sit in D1 and D3, not in the customer's ground. The remedy named in the same source is contact: *"sell-through data and information on inventory status at downstream nodes are keys to improving channel coordination and dampening the bullwhip effect"* (world source B1). Fig 7 adds the two-factor test:

> **"Progress per handoff has two factors. Zero either and the chain runs in place:"** (Fig 7 :37)
> **"the bracket’s fidelity across the handoff"** (Fig 7 :38)
> **"the ground’s pressure on the room"** (Fig 7 :39)

A sequence of forecast-refit cycles is a chain of handoffs. If either the fidelity of the forecast bracket to realized demand or the ground's pressure through cost consequences goes to zero, the chain runs in place even as models get more elaborate.

**Refuter:** a documented SKU that loses forecast contact while every named channel indicator (data latency, sell-through coverage, metric saturation, aggregation level) measures healthy and non-degrading. If both stay healthy, F4's mechanism is not the cause.

### F5: A better model that does not change contact changes nothing

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 11 and the Sterman result, low overlap: agent-and-habitat claim vs control-engineering experiment).**

> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)

The strongest world witness comes from a different field and a different method. Sterman's dynamic decision experiment concludes: *"Even a perfect forecast will not prevent a manager who ignores the supply line from over ordering"* (world source E1, a quote of Sterman 1989 p.336 reproduced in the 2003 System Dynamics Society proceedings). Control-theory work reaches the same structure: *"we show that when the demand stream is stationary, the system is relatively robust to this bias"* and *"the performance of the system depends on the combination of the behavioral biases and the structure of the demand stream"* (world source E2). A more accurate point forecast can amplify order variance; the bullwhip result is *"a consequence of the players' rational behavior within the supply chain's infrastructure"* (world source B1). So the binding variable is the connection to realized demand and to the supply line, not the sophistication of Γ.

**Refuter:** a controlled comparison in which forecast accuracy improves substantially while measures of contact with realized demand and with the supply line are held fixed, and both waste and shortage fall and stay down across a habitat change. That would be an agent-only improvement that moved the ground, and it would break Fig 11 :40 and F5 together.

### F6: Novel demand is unreachable from history alone

**Mode: `general` for the closure result, `specified` for the demand application. Domain D2. Status: triangulated (Fig 6, Fig 8 and Fig 13, distinct roles).**

> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** (Fig 8 :32)
> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)

A demand shift with no precursor anywhere in the history cannot be reached by refining the model. Fig 6 :40 states the limit: *"What is unavailable is a sensor for something that has never registered anywhere, at any resolution."* The M5 finding that exogenous variables mattered to every winning submission (world source M2) is the world-side corroboration: *"information from exogenous/explanatory variables becomes of critical importance to improve forecasting accuracy"*. Those variables are imports from a closure that differs from the sales history. Fig 8 :39 closes the honest stop: *"So a search that finds nothing is never a proof of absence."*

**Refuter:** a model that, from historical sales alone with no import and no new atom, predicts a demand discontinuity that had never registered at any resolution in any frame. That breaks idempotence and F6 with it.

### F7: Agreement among models trained on one history is one witness

**Mode: `general`. Domains D2, D4. Status: triangulated (Fig 2, Fig 7 and Fig 8).**

> **"Independence, between two frames, is how little they draw on the same evidence."** (Fig 2 :31)
> **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"Two frames together reach what neither reaches alone."** (Fig 8 :45)

Combining forecasts is genuinely valuable, and the M5 result confirms it: *"combining forecasts of different methods, even relatively simple ones ... results in improved accuracy"* (world source M2). But if every ensemble member draws on the same sales history and the same exogenous feed, the agreement is the pool talking, not independent corroboration (Fig 2 :40). The M5 winner used *"a very simple, equal-weighted combination, involving 6 models, each one exploiting a different learning approach and train set"* (world source M2), which is closer to low overlap than a single model family. The framework's own point is not that combining is wrong; it is that the value comes from differing closures, not from the count of models.

**Refuter:** two forecasters drawing on provably disjoint evidence whose agreement fails to improve the per-slot prediction of overage and underage. That would falsify the independence requirement in this domain.

### F8: The two currencies of a forecast do not add

**Mode: `general` with a `specified` operational consequence. Domains D2, D3. Status: single-source for the figure line (Fig 12), corroborated by the world from a different field.**

> **"A composition costs in two currencies, and they do not add."** (Fig 12 :125)
> **"Bits price the description. Actions price finding out whether it holds."** (Fig 12 :126)
> **"The two readings come apart in both directions."** (Fig 12 :128)
> **"Summing them into one figure is the error this names, not the fix for it."** (Fig 12 :130)

Model complexity is a bits cost; the lead time, spoilage and expediting needed to discover whether the forecast holds are an actions cost. The world corroborates in the same terms: *"A forecast might be 40% more accurate but the associated cost means the company makes 75% less profit overall"* (world source F2), and the FVA critic notes the *"absence of a robust financial perspective"* (world source F2). A single "accuracy" number sums two readings the figure says must be held apart, so it cannot answer "accurately enough".

**Refuter:** a demonstrated conversion in which the bits cost of a forecast and the actions cost of testing it are commensurable and their sum predicts the operational outcome per slot. If that conversion holds generally, the two-currency rule is wrong for this domain.

### F9: Human judgment is a touchpoint with a residual, not a verdict

**Mode: `specified`. Domain D2. Status: triangulated (Fig 1 and the cognition source, low overlap).**

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"one bet per object slot, every action"** (Fig 1 :10)

The cognitive source predicts that confidence in a forecast need not track its accuracy: *"the unwarranted confidence which is produced by a good fit between the predicted outcome and the input information may be called the illusion of validity"* (world source C1). It also names the exact domain case: *"People are sometimes called upon to make such numerical predictions as the future value of a stock, the demand for a commodity, or the outcome of a football game. Such predictions are often made by representativeness."* (world source C1). FVA measures each override as a bet with a residual (world source F1). Fig 1 :10 is the warrant: one bet per object slot, every action. The verdict is not that planners are useless; it is that an override is a term whose residual must be measured, like any other.

**Refuter:** a documented planning team whose overrides improve per-slot outcomes across multiple habitat changes with no measurement of the overrides themselves. That would mean a bet can be placed without a residual accruing, breaking Fig 1 :10.

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per SKU-slot, never an industry or company average | general | Fig 1 :19, :22 | figure-derived |
| Realized demand and the counters are the anchor, not accuracy | general | Fig 2 :29; Fig 1 :27 | figure-derived |
| The question is a union of two conditions, not one target | general | Fig 9 :54, :55, :57 | figure-derived |
| Zero shortage cannot be the target | specified | Fig 12 :112 + world N1, N2 | world-refuted as written, returned to census |
| Quick loss is channel failure, not ground decay | specified | Fig 10 :24-29; Fig 7 :37-39 | triangulated F4 |
| A better model with unchanged contact changes nothing | specified | Fig 11 :39, :40 | triangulated F5 |
| Novel demand needs an import from a differing closure | specified | Fig 6 :21, :23, :40; Fig 8 :32 | triangulated F6 |
| Accuracy and operational cost are two currencies | general | Fig 12 :125-130 | single-source figure, world F2 corroborates |
| The break is usually at vocabulary and objective | specified | Fig 3 :19, :24, :27 | single-source F8 in `06` |
| Which particular model or policy wins in a slot | not stated | none | gap: framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A firm's per-slot overage and underage both remain reduced across a habitat substitution that removes the market's payment for what the forecast gets right (breaks F4 and F5, Fig 10 :24, Fig 11 :40).
2. A SKU loses forecast contact while every named channel indicator measures healthy and non-degrading (breaks F4, Fig 10 :25-26).
3. A model predicts a demand discontinuity from historical sales alone, with no import and no new atom anywhere (breaks F6, Fig 6 :40, Fig 8 :32).
4. Forecast accuracy alone, with no cost outcome, prospectively predicts which named SKU will fail and in which direction (breaks F1 and F2, Fig 1 :19, :27).
5. Bits cost and actions cost are commensurable and their single sum predicts the operational outcome per slot (breaks F8, Fig 12 :125-130).
6. An aggregate accuracy score, a perfect point forecast and an unchanged channel jointly reduce both waste and shortage across multiple demand regimes (breaks the union reading, Fig 9 :57).
7. Fig 13's six terms are derived from five of them, or Fig 8's idempotence fails inside a closed set (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a per-slot ground measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a forecasting theory (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep overage and underage separate in every report. A blended accuracy score is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Ask, at each forecast-refit handoff, which link the chain stops at and whether that was measured (Fig 3 :29). Do not fund algorithms above the break.
4. Treat any model as Γ, that is, as a candidate library whose reach must be tested against realized demand, never as the answer (Fig 1 :27).
5. Use the forecasting literature as one witness and as a budget filter. Lee et al., the M5 papers and the FVA literature are different in method but overlapping in evidence pool in places (Fig 2 :31, :40).
6. Buy contact before complexity: sell-through data, supply-line visibility, exogenous imports (Fig 6 :23; world B1).
7. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
8. Stop at the shape. Do not name which model a firm should use; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and the three essays *The Library of Babel*, *The Recursive Self-Improvement Trap* and *The Hard Problem is About Source* (all fetched 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13 six-term set to demand "ingredients" | **Retracted, strain S1** | Only fit by renaming inventory as energy and trend as gradient. Re-census: Fig 13 governs the physical substrate, not a firm's forecasting Γ |
| Treated "forecast accuracy" as a candidate anchor | **Retracted, strain S2** | MAPE moves when pushed (aggregation, measure, override process). Re-census: Fig 1 :27 disqualifies it; the anchor is realized demand and the counters |
| Read "zero shortage" as an absolute design constraint | **Conflict C1, re-census** | Newsvendor N1/N2 prescribe a nonzero optimum. Re-mapped to D3's two-cost comparison (Fig 12 :112). Verdict unchanged; question form refused |
| Wanted to call Fig 11 :40 a `general` law about all forecasts | **Narrowed to `specified`** | It is a structural claim; no per-slot measurement pays for the operations version here |
| Read Fig 7 :26 *"progress per handoff: R = h² × S"* as a calibrated equation | **Retracted, strain S3** | The figure supplies two factors and no numbers. Re-census: treat as a product structure, mode `specified` |
| Planned to name an ML method as the framework's answer | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer. Method names are bindings from the forecasting frame, recorded as such |
| Used M5 results as independent corroboration | **Narrowed to one witness** | M5 accuracy and uncertainty papers share data and authors (Fig 2 :31) |
| Used Sterman 1989 quote as read directly | **Narrowed to reproduced quote** | The sentence was read in the 2003 System Dynamics Society proceedings reproducing Sterman 1989 p.336; the primary 1989 article was seen only as an abstract. Recorded honestly in the ledger |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Fig 1 and Fig 2 are two figures but one framework; triangulation here means low topical overlap, not independent evidence pools |

**Strains sent to the log:** S1 (Fig 13 applied to demand ingredients), S2 (accuracy as anchor), S3 (Fig 7 :26 as equation), resolved by re-census; C1 (zero shortage), a genuine world/figure conflict returned to the census and re-mapped. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of channel maintenance and reach renewal, each with its own instrument.
2. **What is the anchor?** Realized demand and the counters, named as anchors in Fig 2 :29. Not MAPE, not internal agreement (Fig 1 :27).
3. **Is the answer in a better model alone?** No. Fig 11 :39-40; Sterman's perfect-forecast result. Capability is forecaster-and-habitat.
4. **How does forecast contact get lost?** Channel decay: stale percepts, pooled readings, either factor of Fig 7 :37-39 going to zero. The bullwhip effect is the world's instance.
5. **How does novel demand enter?** By import from a closure that differs (Fig 6 :23), not by refining history. What never registered anywhere has no sensor (Fig 6 :40).
6. **Why can accuracy not be the target?** It is frame-internal (Fig 1 :27), it is one of two incommensurable costs (Fig 12 :125-130), and it becomes corrupt when made a target (world G1).
7. **What can be said at the stop?** A two-condition shape, two distinct failure modes, a set of falsifiers and the instrument that is missing. Not which model wins. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **waste falls without a binding shortage when (C1) the channel to realized demand stays reachable, measured per SKU-slot with supply-line visibility and unpooled readings, and (C2) the forecasting reach can represent the demand that arrives, importing from closures that differ whenever history has no atom for the shift. These are two conditions with two instruments and two failure modes, never averaged. The literal "zero shortage" target is refused as written: the canonical optimum deliberately tolerates some shortage. Accuracy is a filter for the budget, never a witness for the verdict.** Mode `specified`. No world source was allowed to flip a verdict; the one genuine conflict (zero shortage vs the newsvendor optimum) was returned to the census and re-mapped to a cost comparison. No unresolved strain remains after re-census.
