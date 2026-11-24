# Figure-grounded audit: monetary versus fiscal policy as the main stabilization tool

**Mode of this document: `specified` on the per-slot and per-regime claims, `general` on the structural shape, `gap` on any numerical split. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (opened 2026-11-23): "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." And: "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No policy outcome was measured and no dataset was run.

**Sources.** Local canonical files: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text with line numbers, every quote below is an exact substring), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`. World sources opened 2026-11-23 and listed in `10_source_ledger.csv`.

---

## 0. The question as a held preference, bound before the run

The ordinary question is:

> Should monetary policy be the main tool for stabilizing the economy, or should fiscal policy play a larger role?

Fig 5 :62 warns that a frame searching for an answer of a given shape holds that shape as a preference, not a term:

> **"A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term."**

Fig 5 :65 gives the discipline:

> **"The remedy is a discipline rather than a branch: make the sought-for shape an ORDINARY TERM."**

So before deriving, I bind the shape. **Held shape S:** there exists a stable ordering of the two instruments (monetary first, or fiscal first) that holds across the slots of "the economy" and across the regimes those slots pass through. The derivation below treats S as an ordinary term and asks what residual it accrues.

Option A is "monetary first." Option B is "fiscal first." Both are instances of S. A third possibility is that S is refuted by the figure text and the correct output is a separator rather than a ranking. That possibility is written down here before the run, which is what makes the refuter in §3 a design instrument rather than a retrofit.

---

## 1. Residual stated in effect terms

The residual is not "the economy is unstable." That is an aggregate, and Fig 1 :19 says:

> **"The residual is indexed by object slot, not aggregated."**

Fig 1 :22:

> **"Aggregating across slots is how a live signal disappears into an average."**

The Symbols table defines R as always a slice: "it is always a slice: what cannot be perceived yet is residual and simply cannot be read." The effect residual R here is the set of per-slot gaps between observed outcomes and what the stabilizing frame committed to:

| slot s | gap R_s | candidate anchor for that slot | reach of monetary | reach of fiscal |
|---|---|---|---|---|
| inflation / price level | deviation from committed price path or target | measured price index, if independent of the frame | direct, via rate and expectations | indirect, via demand and taxes |
| real activity / employment | output and employment shortfall | measured employment and output, if not revised to fit the model | indirect, via credit and rates | direct, via spending and transfers |
| credit and financial conditions | spread widening, funding failure | market spreads, default counts | direct, via liquidity operations | partial, via guarantees and timing |
| financial stability | leverage, asset booms, cascading failure | observed failures and leverage data | partial and late | partial, via regulation and balance sheets |
| distribution | who bears the adjustment | observed incidence data | weak, indirect | direct, via the tax and transfer schedule |
| expectations | whether the target is believed | survey and market measures, if not self-referential | direct and fast | slow, via demonstrated action |

R is a vector indexed by s. There is no single R that a single instrument is "main" for. A global statement such as "the economy needs tightening" throws away the slot index that tells you where to look (Fig 1 :28: "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look.").

---

## 2. Domain census

R by arity, symmetry and scale, then one line per domain with actors, currency and anchor, followed by partition or union and dependency order. This census is written before any figure line is used to decide.

**R by arity, symmetry, scale.**

- **Arity:** at least six slots (inflation, real activity, credit, financial stability, distribution, expectations). R is a vector, not a scalar. Any answer that returns one ranking is answering a different, aggregated question.
- **Symmetry:** monetary and fiscal are not symmetric substitutes. Their composition is often ordered (`→`, sequence: stabilize the funding market before the rate path can transmit; or `⋛`, threshold: compare the state of the slot to a commitment). Treating them as interchangeable terms in a flat sum is the collapse Fig 12 names: "A vocabulary without bonds can name a state and cannot name a route to one." Fig 12 :112: "A plan is a sequence. A goal is a comparison. Progress is a subtraction."
- **Scale:** first order within a regime and a policy horizon; second order across the membrane from a central bank balance sheet or a budget to realized household and firm behaviour (Fig 4); third order where a rate change cascades into credit, asset prices and distribution (Fig 11 :52-54).

**One line per domain.**

- **D1, the monetary frame.** Actors: the central bank, the policy rate, the balance sheet, open market operations, reserve requirements, forward guidance. Currency: base money, the short rate, and the expectation of the future short rate. Anchor: measured market rates and measured prices, but only if those measurements do not update on what the frame thinks. Reach: the inflation and expectations slots directly, the credit slot in a crisis, the real-activity slot indirectly through the bank-lending channel.
- **D2, the fiscal frame.** Actors: the treasury, the legislature, tax schedules, spending programmes, transfers, debt issuance. Currency: budget authority, disposable income, aggregate demand, and the government's intertemporal budget. Anchor: realized output, employment and tax receipts, if those are read independently. Reach: the real-activity and distribution slots directly, the inflation slot indirectly and with a lag, the expectations slot slowly through demonstrated action.
- **D3, the economy and its habitat.** Actors: households, firms, banks, the external sector, institutions, the legal and payment infrastructure. Currency: realized transactions and balance sheets. Anchor: the ground itself, the outcomes that settle whether a policy paid. This is not a frame. No seat authors it and no convention inside it decides an outcome. It is enumerated, never composed (Fig 11 :43-44: "The habitat is enumerated, never composed.").
- **D4, the measurement and objective frame.** Actors: statistical agencies, modelers, target committees, data revisions, the policy loss function. Currency: metrics, targets, conventions, and the language used to say what counts as progress. Anchor: none of its own. It is a frame, not a ground. Its metrics can saturate, its readings can be pooled, and it can drift coherently with the institution that uses it.
- **D5, the verification and outreach frame.** Actors: expert readers, journals, conference audiences. Currency: agreement and residuals. Anchor: the ground, never agreement. In this simulated run every seat draws on one evidence pool (the same figures, the same essays, the same opened web pages), so D5 independence is zero. This is declared, not hidden.

**Partition or union.** Union, not partition. The conditions overlap: a liquidity trap can coincide with a financial crisis; a supply shock can coincide with an inflation expectations de-anchoring; a fiscal expansion at the zero lower bound acts through a channel that monetary policy has saturated. Fig 9 :4-5:

> **"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."**

Fig 9 :54 and :55-57:

> **"And when the split lands on a union rather than a partition, unbundle before you search again."**
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."**
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."**

So Option A and Option B are not two answers to one question. Each is a rule that works well on a different subset. The question as asked is a bundled union wearing the costume of a partition.

**Order by dependency (Fig 3).** The chain is perception, vocabulary, objective, planning, learn and carry. Fig 3 :20: "The chain is ordered by dependency, not by importance." In this domain the chain usually stops at the vocabulary/objective link: macro policy can name its ingredients (rate, money, tax, spending, debt) but has no instrument-independent term for what counts as progress in each slot, so effort lands above the break. Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." The dependency order for any real triage is: measure the per-slot residual, name what each instrument affords in that slot, state the objective as a comparison for that slot, then choose the composition, then carry the method and not a recording of one success.

---

## 3. Figure census (quoted before concluding)

Every string below was checked character by character against `FRAMEWORK/reference/03-FIGURES_TEXT.md` on 2026-11-23.

| figure | bearing | verdict |
|---|---|---|
| Fig 1 | residual per slot, not aggregated; ground is the only metric | the single-ranking assumption aggregates away the signal |
| Fig 2 | anchor must not update; independence; agreement disqualifies a verdict | measured outcome is the anchor; consensus is not |
| Fig 3 | dependency order; a link with no instrument | the objective link has no independent instrument; supply slots have no demand instrument |
| Fig 4 | only actors, currency, anchor change; methods cross up | a disinflation recording is not a method for a different habitat |
| Fig 5 | fifth kind, preference as unbound shape, MDL bargain | "main tool" is a held preference, now bound and testable |
| Fig 6 | import is the only wall-moving operator; inward versus outward | a new instrument for a supply slot is an import with a source gate |
| Fig 7 | no last room; agreement is variation, not a verdict | a permanent doctrine is a room that stopped moving |
| Fig 8 | union surplus; residual first, frame second; convergence is not independence | monetary and fiscal compose where closures differ, not where they agree |
| Fig 9 | split versus search; unbundle a union; filters versus witnesses | the either/or is a union; a policy rule is a filter, not a witness |
| Fig 10 | channel decays, ground does not; saturated metrics; a convention that decides an outcome | the ZLB is a saturated actuator; a fixed rule stops being a convention |
| Fig 11 | capability is instrument-and-habitat; valence relative to residual; contact cascades | no standing "good tool"; reach flips with the regime |
| Fig 12 | bonds, isomer, catalyst, cycle, two currencies | monetary and fiscal are isomers; credibility is a catalyst; debt is a cycle |
| Fig 13 | set closed, arrangements not; unreachable is a verdict | no figure returns a numerical split or a standing ranking |
| Operators table | a goal is a comparison; a refutation is a negation | the objective is a threshold; the ranking claim can be refused |
| Symbols table | R is always a slice; the ground is the anchor | R must stay indexed per slot |

---

## 4. Findings

### F1 — "The economy" is an aggregation that erases the live signal (decisive against S)

Fig 1 :19 and :22 (quoted in §1), plus Fig 9 :32:

> **"you get a kind of thing, never the answer itself"**

The residual that stabilization addresses is a vector. Inflation, employment, credit, financial stability and distribution can move in opposite directions at the same time. A single "main tool" verdict answers the average, and the average is not a slot. This does not mean the aggregate concept is useless as a filter for the budget; it means it cannot be a witness for the verdict (Fig 9 :60).

**Mode:** `general` structural, `specified` that the slot index is load-bearing here. **Status:** triangulated across Fig 1, the Symbols table, and Fig 9 (low overlap between the per-slot residual law and the union/partition law). **Refuter:** exhibit a slot structure in which the per-slot residuals all have the same sign and the same instrument reach, and show that the aggregate remains a faithful index. That would collapse the vector to a scalar and let a single ranking be meaningful.

### F2 — The question is a bundled union, not a two-option partition

Fig 9 :4-5, :55-57 (quoted in §2) and Fig 8 :45:

> **"Two frames together reach what neither reaches alone."**

Each instrument works on a subset. The interesting cases are the intersections, where one lever leaves the second condition standing. Fig 9 :57: a case in two conditions "stops being a mixture and becomes a specific compound." In a liquidity trap with a funding crisis, the compound is not "monetary plus fiscal" as a weighted average; it is a specific arrangement where liquidity provision and demand support occupy different slots and must be composed in an order.

**Mode:** `specified`. **Status:** triangulated (Fig 9 union law plus Fig 8 union-surplus law; different figures, different quantities). **Refuter:** show a regime set in which one instrument strictly dominates in every condition and every intersection, so that the union collapses to a partition.

### F3 — "Main tool" is a standing list of good actors, which the figures structurally refuse

Fig 11 :49-51:

> **"An actor’s valence is relative to the residual, not a property it carries."**
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."**
> **"No standing list of good actors survives a change of residual."**

A rate increase is the right actor for an inflation slot with anchored expectations and the wrong actor for a demand-collapse slot at the zero lower bound. The same instrument changes valence because the residual changed, not because the instrument changed. Fig 10 :72:

> **"When the question changes, the room should change. A room that stays fixed while the question moves is the failure; the correlation is only its symptom."**

So S ("a stable ordering exists") is not merely unsupported; the figure that governs actor valence refuses the standing form. This is a figure verdict about the form of the claim, not an empirical verdict about which instrument worked in 2008 or 2021.

**Mode:** `specified`. **Status:** triangulated (Fig 11 valence plus Fig 10 room-change; low overlap). **Refuter:** exhibit an actor whose valence is invariant to the residual across a genuine change of regime, measured at the ground, not assumed in a model.

### F4 — Monetary reach is real but saturable; the zero lower bound is a channel failure

Fig 10 :24-28:

> **"the ground does not decay, the channel does"**
> **"stale percepts, dropped transients, saturated metrics, pooled readings"**
> **"the output is not a verdict, it is you have lost touch"**

Fig 11 :39-40:

> **"capability is a property of agent-and-habitat, never of the agent alone"**
> **"An improvement that does not change contact changes nothing, however much it improves."**

At the zero lower bound the policy rate cannot fall further. In the figures' terms, the actuator has saturated: the metric "policy rate" has hit the bottom of its scale and the error signal stops changing what the controller can do. Fig 6 :29:

> **"inward: is our representation adequate to hold it? The instrument extends access. Fails by refining forever on an axis that cannot carry it."**

Refining the same rate instrument at the bound is exactly refining on an axis that cannot carry the residual. The inference is `specified`: where the monetary channel is saturated for the real-activity slot, another instrument must carry that slot. This is a shape claim about which slot has to be covered, not a claim about a particular multiplier.

**World corroboration (secondary).** The Wikipedia "Liquidity trap" page (opened 2026-11-23) quotes Keynes (1936): "In this event the monetary authority would have lost effective control over the rate of interest." The Wikipedia "Integral windup" page (control engineering, opened 2026-11-23) states the saturation case mechanically: "the position of a valve cannot be any more open than fully open and also cannot be closed any more than fully closed," and names "process saturation: the output of the process being limited at the top or bottom of its scale, making the error constant." These are two genuinely low-overlap fields (economic history and control engineering) predicting the same shape. They corroborate; they do not decide.

**Mode:** `specified`. **Status:** triangulated on the figure side (Fig 10 channel plus Fig 11 capability plus Fig 6 inward limit), with two low-overlap world corroborators. **Refuter:** a measured case in which the monetary channel to the real-activity slot is demonstrably unsaturated at the bound, with the residual still failing to close for a documented non-saturation reason. Such a case would move the failure from the channel to the model and require a re-census of D4.

### F5 — Fiscal reach is direct on the activity and distribution slots, and bounded by its own channel

Fig 12 :121:

> **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."**

Tax receipts feed the budget, the budget feeds spending, spending feeds income, income feeds receipts. The sign of that loop decides whether debt stabilizes. This is a structural constraint on the fiscal frame, not a reason to rank it first or last. Fig 12 :125-127:

> **"A composition costs in two currencies, and they do not add."**
> **"Bits price the description. Actions price finding out whether it holds."**
> **"Neither figure predicts the other, so both are read or the choice is made blind."**

A fiscal rule is cheap to state (bits) and expensive to settle (actions, through a legislative and implementation channel that can be stale). A central bank can act within a meeting; a budget cannot. Those are two different currencies, and summing them into "which tool is stronger" is the named error (Fig 12 :130: "Summing them into one figure is the error this names, not the fix for it.").

**World corroboration (secondary).** Romer and Romer, "The Macroeconomic Effects of Tax Changes: Estimates Based on a New Measure of Fiscal Shocks," NBER Working Paper 13264 (2007), published in the *American Economic Review* 100(3) (2010), opened 2026-11-23. Abstract: "The resulting estimates indicate that tax increases are highly contractionary. The effects are strongly significant, highly robust, and much larger than those obtained using broader measures of tax changes." The NBER non-technical summary states: "an exogenous tax increase of 1 percent of GDP lowers real GDP by roughly 2 to 3 percent." This confirms that the fiscal instrument reaches the real-activity slot. It does not confirm any standing ranking, and the paper itself is about tax shocks, not about a stabilization doctrine.

**Mode:** `specified`. **Status:** triangulated for "fiscal reaches the activity slot" (Fig 12 cycle plus world); `single-source` for the magnitude, which is not used in the verdict. **Refuter:** a measured case in which the fiscal channel to the activity slot fails while the slot residual remains live and the monetary channel is open.

### F6 — The target is a convention, and a convention that decides an outcome has stopped being one

Fig 10 :47:

> **"a convention that decides an outcome has stopped being one"**

Fig 10 :49: "Declaring a meaning does not ground it." Fig 2 :33-34:

> **"The anchor must not update."**
> **"If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."**

An inflation target is a convention that coordinates expectations. It becomes a verdict when the target is enforced at the cost of the employment slot without a fresh reading of that slot. A measured price index is an anchor only if it does not move when the frame pushes on it. If the measurement is revised to fit the model, or if the targeted series is gamed, the anchor has become a frame.

**World corroboration (secondary).** Goodhart's law, Wikipedia page opened 2026-11-23, quoting Goodhart (1975): "Any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes." The page gives the common formulation "When a measure becomes a target, it ceases to be a good measure" and notes the law originated in monetary policy. This is a different field from the figure text but a direct mechanism-level match to "saturated metrics" in Fig 10 :26. It corroborates the shape, not the number.

**Mode:** `general` structural, `specified` for the inflation-target case. **Status:** triangulated (Fig 10 convention plus Fig 2 anchor plus a low-overlap world law). **Refuter:** an anchor that remains non-updating while being used as a policy target across a full regime change, demonstrated with an instrument that discriminates source from reading.

### F7 — The two frames' union has a surplus only where their closures differ and a residual is described

Fig 8 :48-49:

> **"How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus."**

Fig 8 :50-52:

> **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."**

Fig 8 :53:

> **"Residual first, frame second."**

Monetary and fiscal analysis often share one evidence pool: the same forecast, the same model, the same data vintage. Their apparent agreement on "the right mix" is then one witness wearing two names (Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence."). A surplus exists only when the closures differ: a balance-sheet view of funding markets and a budget view of household disposable income are different closures. Even then the union is mute until a residual is described, because "closures differ, so a surplus exists, but no residual is described, nothing was aimed; the union is mute" (Fig 8 :19-21). This audit describes the residual in §1 before choosing frames, which is what makes the union searchable.

**Mode:** `general`. **Status:** triangulated (Fig 8 union law plus Fig 2 independence law). **Refuter:** a case where both frames draw on a genuinely disjoint evidence base and still produce no surplus on any described slot, which would bound the union claim.

### F8 — Credibility is a catalyst, and a catalyst is not a free lunch

Fig 12 :119:

> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."**

Expectations of the target behave like a catalyst in the stabilization composition: a small amount can change the rate of the response, it is not consumed by one use, and it can be spent and regenerated across episodes. Fig 5 :43-44 gives the bargain:

> **"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before. A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."**

"Forward guidance" that says nothing about the contingency under which it would be abandoned fails this bargain, because it explains one occasion perfectly.

**World corroboration (secondary).** "Catalysis," Wikipedia page opened 2026-11-23: "Catalysts are not consumed by the reaction and remain unchanged after the reaction." Genuinely low overlap (chemistry), mechanism-shape corroboration only. The mapping from credibility to catalyst is a binding from the economics frame onto a held figure atom, not a new primitive and not an import that moves the wall (Fig 6 :21: "MINT composes inside the closure and can never add an atom.").

**Mode:** `specified`, ungrounded. **Status:** single-source on the figure definition, with one low-overlap world corroborator. **Refuter:** a measured case in which an expectations term is consumed by its own use and cannot be regenerated without a new institutional primitive, which would break the catalyst binding.

### F9 — A pure supply-shock slot has no demand-side instrument, and that is an owed import, not a harder case

Fig 3 :27:

> **"A link with no instrument is not a link that works. It is a link nobody has looked at."**

Both monetary and fiscal policy are demand-side levers. A supply shock that raises prices while lowering output creates a residual in a slot for which neither lever is the matching instrument. Demand restraint can close the price gap by worsening the activity gap; demand support can close the activity gap by worsening the price gap. That is not a hard trade-off inside one instrument; it is two slots with one missing instrument. Fig 6 :23:

> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**

The owed thing is an import from a frame whose closure contains supply-side instruments, with a source gate and a shadow test (Fig 8 :9-13), debited against independence. Fig 8 :39:

> **"So a search that finds nothing is never a proof of absence."**

**Mode:** `specified`. **Status:** triangulated (Fig 3 broken-link law plus Fig 6 import law). **Refuter:** a measured case in which demand management closes both the price gap and the activity gap after a pure supply shock without importing any supply-side instrument, which would show the missing instrument was already in the closure.

### F10 — A permanent "main tool" doctrine is a room that stays fixed while the question moves

Fig 7 :35-36:

> **"A room’s agreement is variation, not a verdict. Selection between rooms is where the ground votes."**
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."**

A doctrine that answers "monetary first" in every regime is one long room: motion, no progress. The next room has to differ from the last and match the residual the last one surfaced. Fig 4 :22 and :25:

> **"Only methods cross up. Only head starts come down."**
> **"A recording carried upward looks like knowledge and is a description of one occasion."**

A successful disinflation is a recording of one habitat. Replayed in a different habitat it produces the past success, not a new one (Fig 4 :26: "Replayed downward, it produces a system that repeats a past success and cannot produce a new one.").

**World corroboration (secondary).** "Regime shift," Wikipedia page opened 2026-11-23: "Regime shifts are large, abrupt, persistent changes in the structure and function of ecosystems, the climate, financial systems or other complex systems." Ecology and complex systems, genuinely low overlap. It corroborates only the shape that the habitat can change abruptly and that a fixed response is the failure mode. It says nothing about which policy is correct.

**Mode:** `general`. **Status:** triangulated (Fig 7 room chain plus Fig 4 membrane plus low-overlap ecology corroboration). **Refuter:** a regime in which the same instrument composition keeps matching every surfaced residual without a room change, measured at the ground.

### F11 — Prestige and consensus are not the anchor

Fig 2 :40 (quoted in README), Fig 2 :42, and the opened essay *The Recursive Self-Improvement Trap* (Isaiah N, 2026-11-19): "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige." A consensus statement by prominent economists gives the claim a budget to be tried. It is not a measurement that pays for the claim. Fig 7 :12-13: "same closure, handed along; agreement compounds, evidence does not."

**Mode:** `general`. **Status:** triangulated (Fig 2 plus Fig 7 plus essay with maximal overlap to the framework author, so the essay carries no independent witness weight). **Refuter:** a consensus that survives a ground reading which discriminates among the frames that formed it. Until such a reading exists, agreement is a filter for the budget, never a witness for the verdict (Fig 9 :60).

### F12 — No figure returns a numerical split or a standing ranking. That is a `gap`, not a silence.

Fig 9 :32 (quoted in F1), Fig 13 :134-135:

> **"Unreachable is a verdict here, not a silence,"**
> **"It cannot say which primitive is missing, because naming it would mean already holding it."**

The figures constrain the shape of the answer: per-slot indexing, union structure, residual-relative valence, a source gate for imports, a non-updating anchor. They do not return "60 percent monetary and 40 percent fiscal" or "monetary should always lead." Any such number would be a binding from the economics frame, provenanced as such, and a candidate until a ground settles it. It is not prohibited; it is ungrounded. The honest stop is a declared `gap` of the shape-not-a-name kind, reported as unreachable at this budget rather than as absence (Fig 8 :39).

**Mode:** `general` on the limit, `gap` on the object. **Status:** triangulated (Fig 9 shape limit plus Fig 13 unreachability plus canonical figures README). **Refuter:** a figure line that directly governs a ratio or a standing priority order. A genuine re-census would be owed; none was found.

### F13 — Rules are filters for the budget and never witnesses for the verdict

Fig 9 :60:

> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

A Taylor rule, an inflation target, a fiscal rule or a debt brake is a filter: it decides how much of the state space is searched and at what cost. A committee's decision to follow the rule is a verdict that must be settled by the ground, not by the rule. Fig 10 :47 closes the loop: a convention that decides an outcome has stopped being one. The two currencies of Fig 12 :125-126 must be kept apart, or a cheap-to-state rule is mistaken for a settled instrument.

**Mode:** `general`. **Status:** single-source for the exact filter/witness sentence (Fig 9), triangulated with Fig 10 and Fig 12. **Refuter:** a demonstrated case in which a rule itself pays for the residual, which would collapse the distinction between the budget constraint and the ground.

---

## 5. Pre-registered refuter

Written before the conclusion, per the standing rule that a falsifier written before the run is a design instrument. The held shape S ("a stable instrument ranking exists") is refuted if any of the following fires:

1. A figure line or a ground-visible instrument returns one standing priority order over monetary and fiscal that holds across the inflation, activity, credit, stability and distribution slots. This breaks F1 and F3.
2. A measured regime change leaves the valence of both instruments unchanged on every slot, with the residuals still live. This breaks F3 and F10.
3. A documented case in which the monetary channel is unsaturated at the effective lower bound and the real-activity residual persists for a reason that is not a channel failure, with the fiscal channel also unable to reach the slot. This breaks F4 and F5.
4. A target series that remains a non-updating anchor while being used as the binding policy constraint across a full regime change, demonstrated with a source-discriminating instrument. This breaks F6.
5. A supply shock whose price and activity gaps both close under demand management alone, with no imported supply-side instrument. This breaks F9.
6. A figure re-census that yields a line governing a numerical split or a standing ranking, which would convert F12 from `gap` to a verdict.

If any fires, the separator is withdrawn or narrowed and the finding is recorded in the retraction log below, not silently dropped. Until one is run, nothing in this folder is labelled `grounded`.

---

## 6. Recommendation

1. Replace the either/or with per-slot triage. For each slot: name the anchor, check that the anchor does not update on the frame's report, name the reach of each instrument in the current regime, then compose. Keep the verdicts separate, never averaged (F1, F2, F3).
2. Treat S as an ordinary term with the refuter above attached, so the preference is testable rather than invisible (Fig 5 :62-66).
3. At a saturated monetary channel, assign the stalled slot to fiscal or to an imported supply-side instrument with a source gate and shadow test. Do not keep refining the rate on an axis that cannot carry the residual (F4, F6, F9).
4. Treat rules as filters for the budget and conventions for coordination, never as witnesses for the verdict. A target that decides an outcome has stopped being a convention (F6, F13).
5. Demand independence before pooling the two frames. If both analyses read the same forecast, they are one witness (F7, F11).
6. Send the generator, which is the shape claim plus the refuter, not a recording of one successful disinflation (F10, Fig 4 :22-25).

---

## 7. Canonical usage check and retraction / confirmation log

Two local sources govern how the figures may be used and were read after the first six sections: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/figures/THE_FORMULA.md`. The canonical README says the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them," that "the quotes are the authority, not this summary," and that a reading that makes one figure contradict another "has misidentified its domain, not found a flaw." It also states the canonical limit: the framework returns "what a missing thing would have to look like (a shape, not a name)" and stops "at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest," with "Indiscernibility is not identity."

| earlier reading in this file | status after the canonical check |
|---|---|
| F1 first draft said the question is "meaningless" | **Narrowed.** The question is ill-posed as a single ranking, but perfectly well formed as per-slot triage. The aggregate is usable as a budget filter, just not as a witness. Kept as F1. |
| First pass mapped monetary and fiscal onto two of the six physical terms in Fig 13 | **Retracted.** Monetary and fiscal instruments are not among the six substrate terms. They are atoms at the policy level, built from the budget and balance-sheet frames. The Fig 13 cross-kind composition rule does not directly govern them. Re-census moved the composition analysis to Fig 4, Fig 8 and Fig 12. The retraction is kept visible here. |
| First pass called the "main tool" claim REFUTED outright (Fig 5 fifth kind) | **Narrowed.** The framework refuses the *standing form* of the claim (F3). It does not settle the empirical question of which instrument worked in a given episode. The claim is a `candidate` preference bound as an ordinary term, not a figure-refuted term. |
| First pass treated Goodhart's law as direct confirmation of Fig 10 :26 | **Narrowed.** Goodhart is an economics/metrology law about a target ceasing to function as a measure. It corroborates the saturation mechanism at the level of shape. It is a different field, so it is one low-overlap witness, not a second statement of the figure. |
| First pass invoked "shape, not a name" to forbid naming monetary and fiscal instruments | **Retracted.** The limit governs a *missing* primitive. Monetary and fiscal instruments are already held atoms in the policy frame, so naming them is a binding with provenance, not an invented primitive or a wall-moving import. The correction is kept visible; see `05_what_shape_means.md` §5. |
| F12 treated the missing ratio as underivable in principle | **Narrowed and confirmed.** It is `gap` of the shape-not-a-name kind, reported as unreachable at this budget rather than as a proof of absence (Fig 8 :39, Fig 13 :134). |
| Apparent strain Fig 2 non-updating anchor versus Fig 11 residual-relative valence | **Not strained.** Fig 2 governs what may settle a verdict; Fig 11 governs which actor carries a residual. Different objects. Re-census, matching the canonical README's rule. |
| Apparent strain Fig 8 union surplus versus Fig 2 agreement worthlessness | **Not strained.** Both are one independence parameter read twice: surplus needs differing closures, verdict needs non-overlapping evidence. Fig 8 :47 states this explicitly. |

### Confirmations that survived the check

- The per-slot index (Fig 1, Symbols table) survives and is the strongest single figure point in the package.
- The union reading (Fig 9, Fig 8) survives. A case in two conditions is a specific compound, not a harder case of either.
- The refusal of a standing actor list (Fig 11 :51, Fig 10 :72) survives and is canonically consistent with the framework's own re-census rule.
- The channel-saturation account of the effective lower bound (Fig 10 :24-28, Fig 6 :29, Fig 11 :39-40) survives, with the caveat that it is a shape and not a multiplier.
- The filter/witness separation (Fig 9 :60) survives and governs the outreach artifacts as well as the verdict.

### Strain still live

One live type question remains: Fig 12 defines a catalyst as "a part that survives its own use," and the binding of policy credibility to that atom is a provenanced mapping from the economics frame, not a derivation from the six-term set. Whether credibility is spent-and-regenerated in the figure's sense needs an instrument that discriminates regeneration from one-occasion replay. It is named here and in `06_isomers_and_order.md`, not smoothed over.

---

## 8. Updated verdict

Shape S in its standing form is refused. What survives is a separator. The economy presents a vector of residuals indexed per slot; each slot needs a named, non-updating anchor; each instrument's reach is a property of the instrument and the habitat, so valence flips with the regime; monetary and fiscal are two frames whose union is searchable only when a residual is described and their evidence pools are independent; a saturated channel moves the stalled slot to the other instrument or to an imported supply-side primitive; rules are filters and conventions, never witnesses. No figure returns a ratio or a standing priority order, so that object is a declared `gap`, reported as unreachable, not as silence. Mode `specified` on the per-domain claims, `general` on the structural shape, `gap` on the number. Simulated derivation, internally consistent with the figures, not a ground reading. Nothing here settles whether monetary or fiscal policy actually stabilized any particular economy.
