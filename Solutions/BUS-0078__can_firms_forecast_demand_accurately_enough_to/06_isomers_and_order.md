# Isomers, order and competing explanations - supporting derivation for BUS-0078

**Mode: `specified`.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).

## RESIDUAL

The primary audit (`01`) returned two conditions as a union. Four questions are still owed before the answer can be stated cleanly:

1. **Structure.** If two firms use the same demand history and the same exogenous variables, why does one keep its channel reachable and the other not? Is that an isomer claim under Fig 12, or something weaker?
2. **Order.** In what order do the conditions and their instruments bind? Which link breaks first?
3. **Cost form.** How does the two-currency result change what "accurately enough" can mean?
4. **Competing explanations.** Can the standard forecasting answers be generated from the shape, or do they name something the shape cannot reach?

## DOMAIN CENSUS (carried forward, not re-run)

- D1 demand channel: actors point-of-sale data, orders, sell-through, supply line; currency contact with realized demand; anchor realized unit sales.
- D2 forecasting frame: actors models, history, priors, overrides; currency reach and description cost |φ|; anchor settlement against realized demand.
- D3 operational decision: actors replenishment orders and safety stock; currency actions and two costs; anchor write-off and lost-sale counters.
- D4 market habitat: actors customers, competitors, promotions, shocks; currency demand shifts; anchor customer choice.
- Partition or union: union of C1 (contact maintained) and C2 (reach renewed), D1/D2 and D3/D4 forming two compounds.
- Dependency order: perception → vocabulary → objective → planning → learn and carry (Fig 3 :4-15).

No new domain is introduced here. The figure lines below were selected only after this census was fixed.

---

## Q1 - Are two forecasting setups with the same data isomers?

> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** (Fig 12 :117)
> **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."** (Fig 12 :124)
> **"Symmetry is what decides whether an arrangement is a new thing."** (Fig 12 :92)

Two firms with an identical demand history and an identical set of exogenous variables have the same atoms. If one composes them as a single series updated by exponential smoothing and the other composes them as a cross-learned hierarchical model with a supply-line feedback term, the bonds differ. Under Fig 12 :117 they are **isomers**: same atoms, different bond, different behaviour, with the difference invisible in the data inventory and decisive in the outcome. This is the figure-grounded version of "it is not what data you have, it is how you arrange it", but stronger, because the arrangement is itself a substance and carries information the ingredients do not.

If both setups share only a pattern (both do `history → forecast → order`) while differing in which atoms occupy the slots, the weaker claim holds: they are members of the same **functional group** (Fig 12 :124), the qualifier saying which member. The presence of the pattern fixes the kind, not the outcome.

The distinction is testable. A data-inventory comparison that finds no difference between two firms cannot distinguish isomer from functional-group; the bond has to be recorded. Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*

**Falsifier, written before the run:** if two setups with identical atoms and identical bonds nevertheless diverge in per-slot waste and shortage with no difference in ground contact or imported atoms, the isomer framing is insufficient and the difference must be habitat (D4), which moves the explanation out of D2.

**Status:** `specified`, triangulated for the legality of the reading (Fig 12 and Fig 11 :50, different figures), single-source for the forecasting application. The world corroboration is the M5 finding that combining models with *"a different learning approach and train set"* helped (world source M2) plus Sterman's supply-line feedback result (world source E1), but these are different fields and are counted separately in `09_watson_answer.md`.

---

## Q2 - What order do the conditions bind in?

> **"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."** (Fig 3 :20-21)
> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)

Order for a firm facing a demand signal:

1. **Perception.** Can it read realized demand and the supply line at SKU level? Failure here is visible and has obvious tests: data latency, sell-through coverage, on-order visibility.
2. **Vocabulary.** Does Γ have terms for what the changed situation affords, and can it say what would count as progress there? This is the middle link. Fig 3 :26: *"The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."*
3. **Objective.** Can it state the comparison that "accurate enough" hides? Fig 12 :112: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."* A vocabulary with only accuracy ingredients cannot state a two-cost goal.
4. **Planning.** The replenishment quantity and safety stock.
5. **Learn and carry.** Name what worked, verify it, refit.

The two conditions from the primary audit map onto this chain: C1 (contact) is mostly a failure of links 1 and 2, with the supply line as the classic missed item; C2 (reach) is mostly a failure of link 5, because the firm names what worked but never imports a new atom. That mapping is why a single lever, such as "buy a better model", cannot clear both (Fig 9 :55).

The order also decides which instrument to buy first. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* Link 1 has POS and inventory data; link 5 has almost none of the source-discriminating kind. So budget piles up at links 1 and 4 while the break sits at 2 and 5. The bullwhip literature is the world-level demonstration: *"the bullwhip effect is a consequence of the players' rational behavior within the supply chain's infrastructure"* (world source B1), and the fix is infrastructure and information sharing, not retraining decision makers.

**Falsifier:** a firm whose chain demonstrably works at 1, 2 and 3 and fails only at 4. That would falsify the "usually middle" claim of F8 in the primary audit, though not the dependency ordering itself.

---

## Q3 - The two currencies, restated for "accurately enough"

> **"A composition costs in two currencies, and they do not add."** (Fig 12 :125)
> **"Bits price the description. Actions price finding out whether it holds."** (Fig 12 :126)
> **"The two readings come apart in both directions."** (Fig 12 :128)
> **"Summing them into one figure is the error this names, not the fix for it."** (Fig 12 :130)

A forecast is a description, so its complexity is a bits cost. The operational consequences, lead time, spoilage, expedited freight, goodwill, are actions costs. The newsvendor result gives the world-side form: the optimum is a critical ratio over the two costs, not a single accuracy number (world source N2). The FVA critique gives the other half: *"A forecast might be 40% more accurate but the associated cost means the company makes 75% less profit overall"* (world source F2). So "accurately enough" is not underivable in principle; it is a **type error** if posed as one number. It becomes answerable only when the two costs are named per slot and compared (Fig 12 :112), which is the objective link of Q2.

**Falsifier:** a demonstrated function converting bits cost into actions cost such that their sum predicts the operational outcome per slot, stable across demand regimes. That would collapse the two-currency rule for this domain.

---

## Q4 - Competing explanations, and what each can and cannot reach

| candidate explanation | what it names | figure-line bearing | what it cannot reach |
|---|---|---|---|
| **Forecast accuracy / MAPE targets** | error magnitude at an aggregation level | MAPE is a frame-internal score (Fig 1 :27); per-slot indexing is required (Fig 1 :19) | Cannot say which slot fails or in which direction; becomes corrupt when made a target (world G1) |
| **Forecast value added (FVA)** | per-step and per-participant residual | close to Fig 1 :10, one bet per object slot | Has *"an absence of a robust financial perspective"* (world F2); measures accuracy, not the two-cost outcome |
| **Machine learning / cross-learning** (M5) | a richer Γ and a different bond over the same data | close to C2 and to Fig 6 :23 when exogenous variables are imported | A business/forecasting-pool binding; does not say what would refute it; improvement *"diminish[es] at lower hierarchical levels"* (world M1) |
| **Newsvendor critical ratio** | the two-cost comparison at link 3 | exactly Fig 12 :112 and :125 | It is an OR binding with no source gate for the cost numbers; does not by itself maintain contact with realized demand |
| **Bullwhip / supply-line visibility** | the channel condition C1 | matches Fig 10 :24-29 and Fig 7 :37-39 | Control-engineering instance; a different ground from the per-slot demand ground, so it corroborates mechanism, not this firm's numbers |
| **Judgmental overrides** | bets by planners | Fig 1 :10, one bet per slot | Kahneman and Tversky's *"illusion of validity"* (world C1) predicts confidence without accuracy; needs its own residual |
| **Luck / information asymmetry** | an unearned early reading that persists while unfuted | Fig 8 :40: *"Underivable-in-principle and unreachable-at-this-budget are different facts"* | Cannot be excluded from inside a frame; Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* Honest `gap`, not a rival verdict |

No candidate is discarded by prestige or familiarity. Each is ranged against the same residual, in the order Fig 8 :53 requires. The point is not to pick one; it is to notice that the first four are bindings from overlapping forecasting and operations pools, and that the low-overlap fields corroborate mechanism, not the firm-level fact.

---

## Q5 - Does the shape generate the literature's answers?

Partly. The shape can generate:

- the accuracy-measurement emphasis, as per-slot residual indexing under a frame-internal metric that must not be the verdict (Fig 1 :19, :27);
- the FVA emphasis on touchpoints, as link-by-link bets with residuals (Fig 1 :10);
- the ML emphasis on cross-learning and exogenous variables, as C2 and Fig 6 :23;
- the newsvendor emphasis on the critical ratio, as the objective link and the two currencies (Fig 12 :112, :125-130);
- the bullwhip emphasis on information sharing, as C1 and Fig 10 :24-29.

It cannot generate the *name* of the model or the specific cost numbers that will work next. That is the `gap` recorded in F10 of `01`. It is a gap at the instrument boundary, not a silence: Fig 13 :134 (*"Unreachable is a verdict here, not a silence,"*) and Fig 8 :39 apply. The source essay states why: an instrument that reads a result *"cannot comment on the source"*, and *"the answer is unreached until a better instrument exists"*.

---

## CONCLUSION

Two setups with the same atoms but different bonds are isomers under Fig 12 :117; two setups sharing only a `history → forecast → order` pattern are members of one functional group under Fig 12 :124. The conditions bind in dependency order, with the middle link (vocabulary and objective) and the carry link the usual breaks, which is why C1 and C2 need different instruments. "Accurately enough" is a two-currency comparison, not a number, so a single accuracy target is a type error. The standard forecasting explanations are mostly bindings of overlapping pools and are generated by the shape only up to the point where a name would be required. The isomer, order and currency claims each have a written falsifier; the naming gap is declared rather than filled.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session. World sources opened and recorded in `10_source_ledger.csv`. No measurement was used. Mode `specified`.

## FIGURE CENSUS

Fig 1 (per-slot residual, frame-internal scores), Fig 3 (dependency order, middle break, instrument absence), Fig 6 (import moves the wall), Fig 8 (residual first, underivable vs unreachable), Fig 9 (union vs partition), Fig 10 (channel decay), Fig 11 (valence relative to residual), Fig 12 (isomer, functional group, symmetry, two currencies, goal as comparison), Formula (step 5 settlement, Direction). Strained after re-census: none. The one earlier strain, applying Fig 13's six-term substrate to demand "ingredients", was re-census S1 and is logged in `01_figure_grounded_audit.md` section 6.
