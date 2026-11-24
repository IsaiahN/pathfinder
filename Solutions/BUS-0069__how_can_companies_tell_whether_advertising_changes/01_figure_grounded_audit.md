# Figure-grounded audit: BUS-0069, does advertising change behavior or only reach likely buyers?

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From *The Recursive Self-Improvement Trap*, opened 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post."* The essay adds that *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the advertising question it reports on. No lift test, holdout, or purchase record was run here.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session, cited as `Fig N :line`. `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`, `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) − o′| per slot s (Formula step 1; Symbols table, `R`). Mapping to this question:

- **b** is the consumer's belief and prior preference before the ad. Crucially it includes what the consumer would have done without the ad.
- **a** is the action the company takes: serve an impression, target a user, bid, retarget.
- **Γ(b,a)** is what the company's measurement frame predicts will happen. Its terms are impressions, reach, clicks, attributed conversions, last-touch credit, multi-touch credit, and model scores.
- **o′** is what actually happens to purchases in the market.
- **s** is the consumer, or the cohort or geography acting as one slot. R is indexed per slot and per time, never pooled into one campaign ROAS.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is not whether purchases followed exposure. They often do, because ads are targeted at people already likely to buy. The phenomenon is the gap between two states of the same slot: purchases with the ad and purchases without it, holding the habitat as close as the instrument allows. Call this `Δ_s`. Observed: a campaign can show high attributed conversions and near-zero `Δ_s`, or modest attributed conversions and large `Δ_s`. A frame that predicts all purchases following an exposure were caused by the ad has a residual here.

Stated as an effect: *why does the gap between what a consumer would have done and what the consumer did after an ad stay large in some slots and vanish in others, and which instrument discriminates one case from the other?* This names no theory, no "attribution model", no "incrementality platform". Those are candidate names, withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run. The answer would be a pair of conditions whose conjunction separates the two cases, plus an instrument that discriminates "the ad changed this purchase" from "this purchase was going to happen". The two conditions are (C1) a counterfactual comparison for each slot that does not update on what the company believes about the exposed, and (C2) a source-discriminating instrument that can tell a persuaded buyer from a likely buyer who would have purchased anyway. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* Fig 2 :30: *"If it moves when you push on it, it is not an anchor."* Attribution dashboards, platform-reported conversions, and analyst consensus move when pushed by a budget change, a bidding optimisation, or a model specification change. They are instruments at best. Two anchors are nameable at two strata:

- For **what was purchased**: the market, explicitly named as an anchor in Fig 2 :29.
- For **whether the ad changed the purchase**: the randomisation in a holdout or lift test. It does not update on any frame's opinion, which is the same property the anchor must have (Fig 2 :33: *"The anchor must not update."*).

The second anchor is not a third party to a vote. Each measurement frame is corrected by it separately (Fig 2 :46).

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a three-place relation: consumer Γ, ad action a, purchase o′, indexed by slot s and ordered in time, since exposure precedes purchase. It therefore carries an **ordered** bond, `→` sequence (*"A then B; B needs A to have happened"*, Fig 12 :72), and a **comparison** bond, `⋛` (*"a threshold relation between two quantities"*, Fig 12 :87), for a change relative to baseline. It is not symmetric: consumer and market are not interchangeable.
- **Symmetry.** "Changed behavior" is asymmetric in time. A purchase caused by an ad is not recovered by reversing the action; a likely buyer's purchase is a different substance from a persuaded buyer's purchase even though the observed purchase reading is identical. Same atoms, different bond, different substance (Fig 12 :117).
- **Scale.** Three scales are in view: the single consumer's decision loop (Fig 4, one-agent panel), the campaign population with *"something that ranks what they produce"* (Fig 4 :5), and the measurement channel across time. The membrane between the analytics frame and the market is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap `R_T` must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 Consumer decision loop** (one agent, one scale) | the consumer, belief b, purchase action, the ad exposure | decisions and residual reduction | yes: realized purchase, and the purchase under no-ad from a randomised holdout | admitted |
| **D2 Measurement and attribution frame** (the analytics library) | analysts, platforms, attribution models, dashboards, MMMs | impressions, clicks, attributed conversions, ROAS | **no** independent anchor: these move when pushed and are frame-internal (Fig 1 :24, :27), so instruments only | admitted as instrument, not as anchor |
| **D3 Market habitat** (population) | consumers, competitors, platforms, targeting algorithms, season | purchases, share, spend | yes: the market and the randomisation (Fig 2 :29) | admitted |
| **D4 The comparison instrument and channel** (across time) | holdouts, geo splits, ghost ads, source-discriminating instruments | contact with the counterfactual | yes: the ground, *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **X1 Brand affinity or purchase intent as a free-floating property** | the consumer's stated preference | survey score | **no** anchor independent of the behavior it is supposed to predict; stated preference moves when asked | not a domain yet |
| **X2 Ad spend as sole cause** | the budget | dollars | already inside D2 and D3 | absorbed |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that preferences never matter.

### 1.3 Partition or union

D1 and D4 overlap: the counterfactual instrument acts inside the decision loop. D2 and D3 overlap: attribution reads purchases from the market. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are (C1) the ad changed the purchase, which needs a counterfactual, and (C2) the ad reached a likely purchaser, which needs a selection instrument. A campaign failing only C1 and a campaign failing only C2 are not different degrees of one failure; they are different compounds and need different instruments. A blended ROAS or a single "effectiveness score" is a pooled reading that destroys both diagnostics (Fig 10 :26). *The Library of Babel* states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the firm read the purchase response per slot?) → 2 vocabulary (does Γ have terms for the counterfactual, exposed versus not-exposed, likely-buyer versus persuaded?) → 3 objective (can it state the estimand, what would count as a change?) → 4 planning (design the holdout) → 5 learn and carry. The middle link is the one with no instrument in most firms: there is abundant reach data but no term for "would have bought anyway". Fig 12 :111-113 says a vocabulary holding only ingredients can say what a situation contains and cannot say what would count as getting somewhere from it. Most measurement effort lands above the break because that is where the dashboards already exist (Fig 3 :29-30).

### 1.5 Strain test and re-census

An early attempt applied Fig 13's six-term physical substrate directly to "attention = energy, targeting = gradient". That is a strain: it only fit by renaming marketing quantities as physical states. Fig 13 does **not** govern consumer behavior. Re-census sends it to the honest-stop role only (section 8, strain S1).

A second strain appeared by using Fig 2 :29 "a market" as the anchor for the causal question. The market returns the purchase but not the counterfactual, so it cannot settle C1 alone. Re-census resolves this as two anchors at two strata: the market settles what happened (D3), the randomisation settles what would have happened (D4). Fig 4 :20 requires the anchor to be re-named at the new scale: *"it or a thousand. Only the actors, the currency and the anchor change."* No unresolved strain remains after re-census.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed and what may count as evidence |
| 2 The Ground | market and experiment are named anchors; independence vs common pool | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; `R_T` | governs scale transfer from consumer to campaign and the round-trip gap |
| 5 Mint Pipeline | three guards as a product; settlement; "nothing new here" | governs when a causal term can be admitted at all |
| 6 Closure / Reachability | import is the only operator that moves the wall; instruments improved from worse ones already returning something | governs the search for a counterfactual instrument |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs repeated attribution reporting as motion without progress |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and the source rule |
| 9 Leave / Arrive | union vs partition; describe the residual first; filters vs witnesses | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; keep the anchor reachable | governs lost contact with the counterfactual |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual; test harness is a substituted habitat | governs why a clean lab solve proves wiring, not capability in market |
| 12 The Bond | isomer, catalyst, functional group; arrangement is the substance | governs why "persuaded" and "would have bought" are different terms with identical readings |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop only (strain S1) |
| Operators table | `⋛` comparison is a threshold relation between two quantities; `→` is sequence | governs the causal contrast and its order |
| Symbols table | `R` is the aim; the ground is the anchor | governs what is measured and what settles it |

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about measurement practice, `grounded` only if settled by a measurement. None is `grounded`.

### F1: The anchor for "did it change behavior" is the counterfactual, not the attributed conversion

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 1 and Fig 2 and Fig 10, three distinct roles: what counts as evidence, what counts as an anchor, what decays).**

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."** (Fig 2 :29)
> **"the ground does not decay, the channel does"** (Fig 10 :24)

Attributed conversions are produced by the frame that reports them. They change when the bidding algorithm changes, when the attribution window changes, or when the model is re-specified. A thing that moves when you push on it is not an anchor (Fig 2 :30). The counterfactual purchase under a randomised holdout does not move when the analyst changes their mind, which is why it can settle C1. The market settles what was actually purchased, which is why it can settle "what happened" but not "what would have happened".

**Refuter:** a case in which the attributed conversion count and the holdout-estimated incremental purchases are shown to be the same quantity under every re-specification of the analyst frame, including changes of model, window, and bid. If they cannot be separated, F1 is false.

**World bearing (secondary only):** Gordon, Zettelmeyer, Bhargava and Chapsky 2019, read 2026-11-22, report that *"The observational methods often fail to produce the same effects as the randomized experiments, even after conditioning on extensive demographic and behavioral variables."* That is a direct instance of F1 at the campaign stratum. It corroborates but does not decide, since the figures decide.

### F2: Reach, clicks, and attributed conversions are frame-internal and cannot score the frame

**Mode: `specified`. Domain D2. Status: triangulated (Fig 1 and Fig 9, low overlap: what a frame may count versus filters and witnesses).**

> **"Everything else either produces a residual or consumes the library. These do not count:"** (Fig 1 :24)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

Reach is a measure of who saw the ad. It is a budget filter, a count of how much of the space was visited. It is not a witness for the verdict about behavior change. The same holds for impressions, clicks, and last-touch credit. A dashboard that reports "2 million reached, 40,000 attributed conversions" has scored the frame with quantities the frame produces.

**Refuter:** an observational statistic computed from exposure and click logs that predicts, prospectively and per slot, which named consumers would change purchase behavior under a randomised holdout, with the prediction surviving out-of-sample. If one exists, F2's methodological consequence is false.

### F3: The question is a union and must be unbundled before any lever is chosen

**Mode: `specified`. Domains all. Status: triangulated (Fig 9 and Fig 10, low overlap: union splitting versus channel decay).**

Fig 9 :54, :55 and :57 are quoted in section 1.3. The two conditions have different instruments:

- A C1 failure, the ad did not change the purchase, shows up as `Δ_s` near zero against a holdout whose assignment the analyst could not influence (Fig 2 :33, Fig 7 :35).
- A C2 failure, the ad reached people who would have bought anyway, shows up as high exposure-to-purchase correlation and high attributed ROAS with low `Δ_s` in the same slots (Fig 10 :26, *"saturated metrics, pooled readings"*).

A single lever, for example "increase targeting precision" or "move budget to the highest-ROAS channel", clears the region where only one condition holds and leaves the intersection standing (Fig 9 :55). F3 is why the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

**Refuter:** a single intervention that simultaneously raises `Δ_s` and removes exposure to likely buyers in both failure types, leaving no categorically different residue. That would collapse the union into a partition.

### F4: Attribution reads the source off a projection, which is the metamerism error

**Mode: `specified`. Domains D2, D4. Status: triangulated (Fig 6 and the essay *The Hard Problem is About Source*, low topical overlap: instrument reach versus source discrimination).**

> **"outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."** (Fig 6 :30)
> **"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."** (Fig 6 :34)

From *The Hard Problem is About Source*, opened 2026-11-22: an instrument that detects green *"cannot comment on the source"*, and *"If several paths create the same behavior, then behavior is a projection with lossy information"*. A purchase following an exposure is a reading. Its source could be persuasion, or a pre-existing intention the targeting found, or a concurrent promotion, or a competitor's absence. The reading does not determine the source. *"An instrument that can't distinguish these cases demonstrates its own inadequacy"*; what is owed is a discriminator, not a name. Fig 6 :34 adds the constraint: you cannot specify the discriminator from a description alone. You improve an instrument already returning something, which is why holdout and geo-experiment methods were built out of earlier A/B tests rather than invented from the concept of causality.

**Refuter:** an attribution instrument whose reading provably determines the source, that is, a single observable that separates a persuaded purchase from an otherwise-identical likely-buyer purchase without a counterfactual assignment. If one is demonstrated, F4 is false.

### F5: The residual is per consumer, and averaging across consumers destroys the signal

**Mode: `specified`. Domains D1, D3. Status: triangulated (Fig 1 and Fig 8, low overlap: per-slot indexing versus when union adds a surplus).**

> **"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."** (Fig 1 :28)
> **"Two frames together reach what neither reaches alone."** (Fig 8 :45)

A campaign average can be positive while the frequent-user slot has a negative residual and the new-user slot has a large positive one. Blake, Nosko and Tadelis 2015, read 2026-11-22, report that *"For non-brand keywords we find that new and infrequent users are positively influenced by ads but that more frequent users whose purchasing behavior is not influenced by ads account for most of the advertising expenses, resulting in average returns that are negative."* Their result is a direct instance of per-slot indexing. It is one business-pool witness, not a second frame: the figure line decides.

**Refuter:** a campaign-level average that predicts, prospectively and per named consumer, whether that consumer's purchase was caused by the ad, with the prediction verified against a holdout. If it does, F5's per-slot consequence is false.

### F6: Agreement between analytics frames is not corroboration

**Mode: `general` with a `specified` consequence for practice. Domains D2, D4. Status: triangulated (Fig 2 and Fig 8 and Seat Map :163, distinct roles).**

> **"Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are."** (Fig 2 :31)
> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)
> **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."** (Fig 8 :51)

Three attribution vendors fed by the same exposure and purchase logs are one frame wearing three names. Their agreement is the pool talking. A randomised holdout draws on a different evidence source, the assignment mechanism, so agreement between the holdout estimate and an independently specified observational estimate at maximum independence would be corroboration. Seat Map :163: *"High correlation is disqualifying for a verdict and efficient for a convention."*

**Refuter:** two attribution systems with provably disjoint evidence pools whose estimates of the same campaign's incrementality converge, where the convergence is shown not to come from a shared training set, shared logs, or a shared holdout. If such convergence is demonstrated and confirmed at the ground, F6's "one pool, one witness" reading is weakened for that case.

### F7: Contact with the counterfactual decays; the ground does not

**Mode: `specified`. Domain D4. Status: triangulated (Fig 10 and Fig 7, low overlap: ground maintainer versus room chain).**

> **"stale percepts, dropped transients, saturated metrics, pooled readings"** (Fig 10 :26)
> **"the output is not a verdict, it is you have lost touch"** (Fig 10 :28)
> **"→ keep the anchor reachable"** (Fig 10 :29)
> **"same closure, handed along;"** (Fig 7 :12) **"agreement compounds, evidence does not"** (Fig 7 :13)

A holdout that no longer randomises, a geo split contaminated by spillover, a conversion definition that changes mid-campaign, or a lifted metric that saturates are all channel failures. The market kept paying throughout. The room chain adds the second test: a reporting cadence that hands the same attribution room along each week produces motion without progress (Fig 7 :36).

**Refuter:** a campaign whose measurement channel is documented as stale, pooled, or saturated and whose estimate of `Δ_s` nevertheless continues to match an independently refreshed holdout at every handoff. That would falsify the channel-decay mechanism.

### F8: Unreachable at this budget is different from underivable, and importing an atom against a budget limit costs more than starting over

**Mode: `specified`. Domain D4. Status: triangulated (Fig 8 and Fig 6 and Formula step 7, distinct roles).**

> **"So a search that finds nothing is never a proof of absence."** (Fig 8 :39)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** (Fig 8 :32)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)

Lewis and Rao 2015, read 2026-11-22, report that *"The median confidence interval on return on investment is over 100 percentage points wide"* and that *"informative advertising experiments can easily require more than 10 million person-weeks, making experiments costly and potentially infeasible for many firms."* That is an unreachable-at-this-budget result, not an underivable one. The counterfactual term is already in the closure, the experiment just has not been run long enough to resolve it. The instruction is more search or a better instrument, not the import of a new causal theory. Formula step 7 asks SEARCHED first, then INWARD, then OUTWARD, and keeps the three distinct.

**Refuter:** a campaign for which every available holdout and geo design is proven underivable in principle, not merely underpowered, so that no amount of budget would resolve `Δ_s`. If such a proof exists, F8's budget reading is the wrong instrument for that case.

### F9: Describe the residual before choosing the measurement frame

**Mode: `general` with a `specified` consequence. Domains all. Status: triangulated (Fig 9 and *The Library of Babel*, but the essay is framework-internal, so one witness for the external count).**

> **"describe it before you go looking, or any frame you pick will seem to fit"** (Fig 9 :27-28)
> **"your words are borrowed too, so describe the effect"** (Fig 9 :30) **"rather than the cause"** (Fig 9 :31)
> **"Residual first, frame second."** (Fig 8 :53)

Choosing "marketing mix modelling" or "multi-touch attribution" before describing `Δ_s` is the inversion Fig 9 forbids. Once a vendor frame is chosen, every observed purchase will seem to fit it. The effect description is the counterfactual gap per slot; the frame is whatever closes it. *Decoding Tacit Knowledge*, opened 2026-11-22, gives the transferable form: *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."*

**Refuter:** a measurement frame selected by the vendor before any residual description that still predicts `Δ_s` prospectively and per slot at the ground. If one does, the describe-first discipline is a preference, not a constraint, for that class.

### F10: The framework returns a shape, not a named tool or model

**Mode: `general`. Status: triangulated (Fig 9 and the canonical figures README).**

> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)
> **"Unreachable is a verdict here, not a silence,"** (Fig 13 :134)

`FIGURES_README_canonical.md` states the limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where the instruments can no longer distinguish, and records the lineage. So the answer that survives the figures is the shape of a valid measurement: per-slot counterfactual, immovable anchor, source-discriminating instrument, union unbundled. It does not name a particular attribution product, platform, or statistical package as the answer. Naming one is a binding from the business frame, provenanced as such, not a derivation.

### F11: The break is usually at vocabulary and objective, not at planning

**Mode: `specified`. Domain D1. Status: single-source (Fig 3, with Fig 12 :111-113 as a corroborating line from a different figure but the same framework, so one witness).**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)

The usual failure is not that the firm cannot plan a lift test. It is that its vocabulary has no term for the counterfactual purchase and its objective is stated as "improve ROAS" rather than "estimate `Δ_s` per slot". Better optimisation applied above that break cannot rescue it (Fig 3 :19).

**Refuter:** a documented firm whose perception, vocabulary, and objective links all measure as working and whose failure is located at experiment planning. That falsifies the "usually at the middle" claim, though not the dependency ordering.

### F12: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per consumer or slot, never a campaign average | general | Fig 1 :19, :22, :28 | figure-derived |
| The market settles what happened; the randomisation settles what would have happened | general | Fig 2 :29, :33 | figure-derived |
| Reach and attributed conversions are frame-internal filters, not witnesses | specified | Fig 1 :24, :27; Fig 9 :60 | triangulated F2 |
| The question is a union of C1 and C2 and must be unbundled | general | Fig 9 :54, :55, :57 | figure-derived |
| Attribution reads a source off a projection and needs a discriminator | specified | Fig 6 :30, :34; Hard Problem essay | triangulated F4 |
| Agreement inside one evidence pool is one witness | general | Fig 2 :31, :40; Fig 8 :51 | triangulated F6 |
| Channel decay, not ground decay, breaks a measurement programme | specified | Fig 10 :24, :26; Fig 7 :12, :13 | triangulated F7 |
| Low power is unreachable-at-budget, not underivable | specified | Fig 8 :32, :39; Fig 6 :23 | triangulated F8 |
| Describe the residual before choosing the frame | general | Fig 8 :53; Fig 9 :27-28, :30-31 | figure-derived |
| The break is usually at counterfactual vocabulary and objective | specified | Fig 3 :19, :24, :29 | single-source F11 |
| Which named tool or model is best for this firm | not stated | none | gap: framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach, Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A case in which attributed conversions and holdout-estimated incremental purchases are the same quantity under every re-specification of the analyst frame, including changes of model, window, and bid (breaks F1).
2. An observational statistic from exposure and click logs that predicts prospectively and per named consumer whether that purchase was caused by the ad, verified against a holdout (breaks F2 and F5).
3. A single intervention that raises `Δ_s` and removes exposure to likely buyers in both failure types with no categorically different residue (breaks F3, Fig 9 :57).
4. An attribution instrument whose reading provably determines the source without a counterfactual assignment (breaks F4).
5. Two measurement frames with provably disjoint evidence pools whose incrementality estimates converge, confirmed at the ground (breaks F6's one-pool reading for that case).
6. A campaign whose channel is documented as stale, pooled, or saturated whose estimate still matches a refreshed holdout at every handoff (breaks F7).
7. A proof that no holdout or geo design could resolve `Δ_s` for a campaign at any budget (distinguishes F8's budget case from the underivable case).

If any fires, the corresponding claim is withdrawn. Until one is run and fails to fire, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of advertising (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep C1 and C2 separate in every report. A blended ROAS is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Ask, at each reporting handoff, which link the measurement chain stops at and whether that was measured (Fig 3 :29). Do not fund optimisation above the break.
4. Treat reach and attributed conversions as Γ, that is, as a candidate library whose reach must be tested against the holdout, never as the answer (Fig 1 :27).
5. Use the advertising literature as one corroborating witness and a budget filter, not as the verdict. Gordon, Blake, Lewis and Rao, and the platform papers draw on overlapping experiment pools in parts (Fig 2 :31, :40).
6. Run SEARCHED first: ask whether the counterfactual term is already in the closure and merely underpowered, before importing a new causal framework (Formula step 7, Fig 8 :39-43).
7. Improve the instrument from a worse one already returning something (Fig 6 :32-34). An A/B test already returns a reading; a holdout, a geo split, and ghost ads are sharpenings of it, not inventions from a definition of causality.
8. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
9. Stop at the shape. Do not name a tool or vendor as the answer; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`, `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, and the essays *The Library of Babel*, *The Hard Problem is About Source*, *The Recursive Self-Improvement Trap*, *Decoding Tacit Knowledge* (all fetched 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop.
- WATSON 60 confirms that the seat reads the ground; it does not ask the anchor to decide what the figures already settle. Design questions are answered by derivation, not escalation.
- *The Recursive Self-Improvement Trap* confirms the simulation status with *"the output is only as good as the validator"* and the prestige rule: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* A famous attribution vendor is a prestige proxy, excluded from verdict weight.

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13 six-term set to attention and targeting | **Retracted, strain S1** | Only fit by renaming marketing quantities as states and structures. Re-census: Fig 13 governs the physical substrate, not a consumer's Γ. It stays in the honest-stop role |
| Used "the market" as the single anchor for the causal question | **Narrowed by re-census** | The market returns the purchase but not the counterfactual. Two anchors at two strata: market for what happened, randomisation for what would have happened (Fig 4 :20) |
| Treated the Gordon, Blake, and Lewis papers as independent witnesses for the verdict | **Narrowed to one business/experiment pool** | They share experimental methods and often data sources, so their agreement is one witness (Fig 2 :31, :40). The figures decide |
| Treated Lewis and Rao's wide confidence intervals as proof advertising cannot be measured | **Retracted as a verdict, kept as a budget fact** | Fig 8 :39 and Formula step 7: unreachable-at-budget and underivable-in-principle are different facts with different instructions |
| Wanted to name a holdout platform or MMM as "the" answer | **Retracted at record level** | Fig 9 :32 and the README return a shape, not a name. Naming is a binding from the business frame, provenanced as such |
| Wanted to call F6 a `general` law about all analytics teams | **Kept `general` for the structure, `specified` for the practice consequence** | Fig 2 :40 is structural; no measurement of a particular team pays for the practice version |
| Used the Hard Problem essay as an external witness | **Narrowed to framework-internal corroboration** | Same author and evidence pool as the figures. Its metamerism point explains F4 but carries no independent weight |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Fig 1, Fig 2 and Fig 10 are three figures but one framework; triangulation means low topical overlap, not independent evidence pools |

**Strains sent to the log:** S1 (Fig 13 applied to marketing quantities), resolved by re-census; S2 (single market anchor for two questions), resolved by two anchors at two strata (Fig 2 :29, :33, Fig 4 :20). No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the *Library of Babel* bundle passage: it is a union of causal change (C1) and selection into likely buyers (C2), each with its own instrument.
2. **What is the anchor?** The market for what was purchased, the randomisation for what would have been purchased (Fig 2 :29, :33). Not dashboards, not analyst agreement (Fig 1 :27).
3. **Can the answer be inside the analytics frame?** No. Reach and attributed conversions are quantities the frame produces (Fig 1 :24, :27); closure is idempotent (Fig 8 :32).
4. **How does the false positive arise?** Targeting selects likely buyers, so exposure and purchase correlate without causation (Fig 2 :40; Hard Problem essay on projection).
5. **How is it resolved?** A per-slot counterfactual comparison against an anchor that does not update on anyone's opinion (Fig 2 :29, :33), with C1 and C2 kept separate (Fig 9 :57).
6. **Why does measurement quality decay?** Channel, not ground: stale percepts, pooled readings, saturated metrics (Fig 10 :24-29); either factor of Fig 7 :37-39 going to zero.
7. **What can be said at the stop?** A shape and two conditions with falsifiers. Which named tool wins is a `gap`, not a hidden answer. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **a company can tell the difference only by comparing behavior per consumer slot against a counterfactual whose assignment does not depend on what the company believes about those consumers, and by keeping separate the question of whether the ad changed a purchase (C1, needs a holdout or equivalent source-discriminating instrument) from the question of whether it reached people who would have bought anyway (C2, needs a selection diagnostic).** Reach, clicks, and attributed conversions are frame-internal budget filters, not witnesses. Agreement among analytics frames sharing one evidence pool is one witness. The break is usually at the missing vocabulary for the counterfactual and the unstated objective, not at planning. Which named tool or vendor is best is a `gap`: the framework returns a shape, and the source-discriminating instrument that would name a specific choice is not held here. Mode `specified`. No world source was allowed to flip a verdict; the one genuine strain (market as anchor for two questions) was returned to the census and re-mapped. No unresolved strain remains after re-census.
