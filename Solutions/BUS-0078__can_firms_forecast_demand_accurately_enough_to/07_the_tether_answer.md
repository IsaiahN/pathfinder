# The Tether's answer on forecasting demand without waste or shortage

**Mode: `specified` - not `grounded`.** This is a shape and a route, not a result. Simulated derivation checked against the figures (`05_what_shape_means.md` section 7), not a ground reading. No per-slot measurement of waste and shortage against realized demand pays for any claim here.

## 1. The residual it answers

An answer would explain why the gap between what a firm's forecasting library predicts customers will buy and what customers actually do fails to be tethered closely enough, per SKU and period, to keep overage and underage both small, and which failure mode is binding in a given slot. R is indexed by SKU, period and channel, never averaged (Fig 1 :19, :22). The question is about **two operational outcomes and their costs**, not about the magnitude of an error score.

The union must be unbundled before it is searched (Fig 9 :54). It is two conditions, not one hard question:

- **C1:** the channel to realized demand stays reachable, with unpooled SKU-level readings and supply-line visibility.
- **C2:** the forecasting reach can represent the demand that arrives, importing from closures that differ when history has no atom for a shift.

## 2. The shape

1. **Accuracy is a filter, not the anchor.** Fig 1 :27: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* The anchor is realized demand and the write-off and lost-sale counters (Fig 2 :29). An accuracy score moves when you change the aggregation level or the error measure, so it is an instrument (Fig 2 :30).
2. **Read the residual per slot, never as a company average.** Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 10 :26 names the failure: *"saturated metrics, pooled readings"*. A blended accuracy number hides the SKU that is failing and the direction in which it is failing.
3. **The literal "zero shortage" target is refused as written.** The canonical operations result is that *"to minimize the expected total cost, the seller should intentionally create some shortage!"* (world source N2). Fig 12 :112: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."* The goal is a two-cost comparison, not the elimination of one cost.
4. **Waste and shortage are two currencies that do not add.** Fig 12 :125: *"A composition costs in two currencies, and they do not add."* Fig 12 :126: *"Bits price the description. Actions price finding out whether it holds."* A single accuracy number sums two readings the figure says must be held apart (Fig 12 :130).
5. **A perfect forecast is not sufficient.** Fig 11 :40: *"An improvement that does not change contact changes nothing, however much it improves."* Sterman's result is the low-overlap witness: *"Even a perfect forecast will not prevent a manager who ignores the supply line from over ordering"* (world source E1). The bullwhip effect is rational actors processing a distorted channel (world source B1).
6. **Quick loss is channel failure, not demand decay.** Fig 10 :24: *"the ground does not decay, the channel does"*; :25: *"stale percepts, dropped transients,"*; :29: *"→ keep the anchor reachable"*. The named decay modes are data latency, dropped early signals, saturated metrics and pooled readings.
7. **Novel demand needs an import.** Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* Fig 8 :32: closure is idempotent, so no amount of internal search adds an atom. Fig 6 :40: *"What is unavailable is a sensor for something that has never registered anywhere, at any resolution."* Sell-through data, exogenous signals and a differing closure are the operators that move the wall, not a larger model trained on the same history.
8. **Agreement among models on one history is one witness.** Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence."* Fig 7 :13: *"agreement compounds, evidence does not"*. Combining methods helps when their closures differ (world source M2), not because there are more of them.
9. **The break is usually in the middle of the chain.** Fig 3 :24 and :27: the vocabulary/objective link has no instrument, and a link with no instrument is a link nobody has looked at. Most forecasting budget lands in planning, above the break.
10. **Two setups with the same data can still differ.** Under Fig 12 :117 they are isomers if the bonds differ: *"same atoms, different bond, different substance."* A data inventory alone cannot predict which one keeps contact.

## 3. What it explicitly does not say

- Not `grounded`. No per-slot prospective measurement has paid for this shape.
- Not a name. It does not say which model, algorithm, metric or safety-stock policy wins. Fig 9 :32: *"you get a kind of thing, never the answer itself."*
- Not an average. It makes no claim about a company-wide accuracy percentage or a single optimal MAPE. Such numbers are filters for budget, not witnesses (Fig 9 :60).
- Not that accuracy is irrelevant, that forecasters are useless, or that data is unimportant. Those are Γ and its instruments; the claim is that Γ alone does not settle the two outcomes (Fig 11 :40).
- Not a claim that zero shortage is always wrong in a regulated or safety-critical setting. In such a setting the underage cost is set very high, which shifts the critical ratio; it does not abolish the comparison (world source N1).
- Not corroborated by agreement. The operations and forecasting sources overlap in evidence pools in places (Fig 2 :31, :40); the low-overlap fields corroborate the mechanism, not the firm-level fact.
- Not a theory of everything about operations. It stops where the instrument stops.

## 4. What would settle it - the ground

A source-discriminating, per-slot instrument, not a further argument. The source essay's metamerism rule: a reading of green *"cannot comment on the source"*, and *"the answer is unreached until a better instrument exists"*. Here the readings are MAPE, fill rate and service level; the candidate sources are a paying habitat, a reachable supply line, a protected position, a temporary asymmetry or luck.

The falsifiers, pre-registered in `01` and repeated in `08`:

1. a SKU loses forecast contact while all named channel indicators measure healthy and non-degrading;
2. a model predicts a demand discontinuity from historical sales alone with no imported signal;
3. accuracy by itself, with no cost outcome, prospectively predicts which named SKU will fail and in which direction;
4. bits cost and actions cost are commensurable and their single sum predicts the operational outcome per slot;
5. a perfect point forecast plus unchanged channel conditions reduces both waste and shortage across several demand regimes;
6. the canonical optimum has zero overage and zero underage for all positive cost pairs.

A prospective study that measures C1 and C2 separately per SKU, records the bonds as well as the atoms (model arrangement and feedback structure), separates overage from underage, and reports which condition failed before the decline would turn this from `specified` toward `grounded`.

## 5. The honest stop

**Unreached, not unreachable.** Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* The shape stops at the limit of the available instruments and records the lineage so the stop is checkable. The missing thing is a discriminator of sources at SKU level, characterized in effect terms but not held here. Naming a winning model from a low error reading would be the metamerism error the source essay forbids. The two conditions in section 2 are a shape; the third thing, which model and which cost ratio actually work next, is not held and is not pretended.

## 6. One-paragraph version for outreach

> The Tether does not name the model that wins or promise that a sufficiently accurate forecast removes both problems. It says that waste and shortage are two conditions with two different instruments, not two degrees of one accuracy problem. Waste falls without a binding shortage when the firm keeps its channel to realized demand reachable at SKU level, with unpooled readings and a visible supply line, and when its forecasting reach can represent the demand that actually arrives, importing signals from closures that differ from its own sales history when there is no atom in the history to refine. Accuracy is a filter for deciding where to look, not the anchor; the anchor is realized demand and the cost counters. A perfect point forecast is not enough, because the manager who ignores the supply line can still amplify orders. And the target of zero shortage is refused as written, because the canonical optimum deliberately tolerates some shortage as the price of less waste. What is offered is that shape, six falsifiers written in advance, and the instruments that would close it. Which model occupies the slot stays open until a source-discriminating instrument exists, and the stop is recorded rather than filled.
