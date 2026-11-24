# Figure-grounded audit: adequacy of standard cost-benefit analysis

**Mode of this document: `specified`, not `grounded`.** It states what follows from the figures' shape rules and what would have to be measured. The headline verdict is `general` in so far as it says adequacy is relative to a ground; each per-domain verdict is `specified` and falsifiable. Per `THE_FORMULA.md` mode rule: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, cited as Fig N :line), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, and the public sources in `10_source_ledger.csv`.

---

## 0. The residual, in effect terms

Let `R` be the gap between what a standard CBA returns and what a decision needs.

- **What CBA returns:** one scalar, the discounted sum of monetised benefits minus monetised costs (NPSV or BCR), computed by adding effects expressed in a single currency, money, over affected parties and over time.
- **What the decision needs:** an answer that registers (a) which person bears which effect, (b) what is true across future states when probabilities and models are contested, and (c) effects that have no money price.
- **Slots `s`:** each affected person, each distinct effect, each plausible future state. `THE_FORMULA.md` step 1 writes the residual *"per slot s"*; the symbols table defines `s` as *"One object, region or entity being tracked. R is measured per slot, never as a single global number."*

`R` is nonzero whenever two people bear different effects whose sum hides the difference, when the probability atom under-collapses a contested future, or when an effect has no price. The question asked is not "is CBA useful" but the closure question: can a money-only CBA close `R` by refining itself, or does it owe an import from a frame whose closure differs?

The residual is stated before any frame is chosen, per Fig 9 :27-28: *"describe it before you go looking, or any frame you pick will seem to fit."*

---

## 1. Domain census (before choosing any figure line)

**R by arity, symmetry and scale.** Arity: three conditions, uncertain / unequal / difficult to value. They are not interchangeable: a distributional fix does not value a wetland, and a valuation fix does not resolve contested probabilities. Symmetry: the three conditions have different currencies, so no symmetric bond joins them; the CBA's `+` is symmetric and therefore treats recipients and effects as swappable (Fig 12 :59, *"swap the operands. Does the meaning change? No."*). Scale: per person, per outcome, per future state. CBA collapses all three scales into one scalar.

One line per domain, giving actors / currency / anchor. A domain without a nameable anchor is not a domain yet.

| domain | actors | currency | nameable anchor | verdict type |
|---|---|---|---|---|
| D1 Monetised CBA frame | analyst, numeraire, parties as entries in a sum | money (market price, WTP) | the discounted net benefit figure and the market or WTP reading behind it | inside closure for commensurable, reversible, low-distribution cases |
| D2 Persons and their welfare | affected people, each with an income and a conversion of resources into functioning | welfare, capability, real freedoms | the person's actual circumstances, which do not move when an analyst changes weights | outside D1 closure, import owed |
| D3 Future under deep uncertainty | possible future states, models, stakeholders who disagree on weights | robustness across futures, not optimality at a best estimate | the realised future when it arrives, and the ensemble of plausible futures before it | outside D1 closure, import owed |
| D4 Non-market value and its instrument | the good, the survey respondent, the elicitation instrument | an attitude or a real value; the reading is not the source | a source-discriminating instrument, not the WTP number | outside D1 closure, import owed |
| D5 Verification / outreach | expert readers, this simulated second seat | agreement and residual | the ground, never agreement | all seats share one evidence pool here, so independence is zero |

**Partition or union.** Union. Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* A case that is both unequal and deeply uncertain is not a harder case of either; it is a specific compound with its own loop. The three conditions must be unbundled before a frame is chosen (Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*).

**Order by dependency.** Describe the residual per slot; then ask SEARCHED (is the term in the closure and unfound?), then INWARD (extend the instrument in our own terms), then OUTWARD (find a frame whose closure predicts the shape). Refuse before mint where a held regularity is false. Do not average per-domain verdicts.

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | residual indexed by slot; frame-internal quantities disqualified | aggregation across people is the mechanism of loss |
| **2 The Ground** | anchor must not update; instruments wrong on axes they do not measure | a BCR is an instrument, not the anchor for "good for people" |
| **3 Dependency Chain** | a reading below the break is a reading of nothing | a more precise discount rate cannot rescue a missing non-market term |
| **4 The Membrane** | only methods cross up; head starts come down; measure round trip `R_T` | send the method, not the monetised conclusion |
| **5 Mint Pipeline** | three guards as a product; settling necessary not sufficient | a CBA refinement can be settled in-frame and still miss the slot |
| **6 Closure / Reachability** | import the only operator that moves the wall; inward vs outward opposed | three atoms are outside money-only closure; inward refinement cannot add them |
| **7 Room Chain** | agreement compounds, evidence does not | a larger panel of agreeing economists cannot corroborate |
| **8 Union Surplus** | closure idempotent; underivable versus unreachable; provenance | no amount of money-only search adds the missing atom; imports need a record |
| **9 Leave / Arrive** | union unbundling; describe residual before looking; filters not witnesses | the question bundles three conditions; separate loops owed |
| **10 Ground Maintainer** | bring a characterised residual, never the source; verifier non-access | first contact is the refuter, not the theory |
| **11 The Habitat** | capability is agent-and-habitat; enumerate, never compose; isolation substitutes | adding a valuation method changes contact; isolated "better analyst" does not |
| **12 The Bond** | symmetry erases order; two currencies do not add; flat formula | the `+` over people loses who bears what; money and non-money must be held apart |
| **13 Minimum Viable Set** | closed set, unbounded arrangements; unreachable is a verdict | forbids forcing a seventh valuation primitive; honest stop is `unreachable` |
| **Operators table** | `+` symmetric, `⋛` comparison, `¬` refusal | the refusal owed is "not adequate in this closure", not a new meta-metric |
| **Symbols table** | `R` per slot; anchor does not update | one global BCR is the wrong index for this residual |

Strained readings are named as such in §6 and not smoothed over.

---

## 3. Findings

### F1 — Aggregation across people erases the inequality signal (decisive for D2)

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**
Fig 12 :14: **"the ingredients are recorded and the arrangement is not"**
Fig 12 :92: **"Symmetry is what decides whether an arrangement is a new thing."**

A CBA adds one person's benefit to another's cost under a symmetric `+`. The sum is a flat formula: it records the ingredients (amounts of money) and not the arrangement (who bears them). Under a symmetric bond, recipients are swappable and the term is unchanged; the identity of the loser is not recoverable from the total. That is exactly the loss Fig 1 names. The live residual sits on a slot (the poor household that bears the cost), and the average of net benefits does not say where to look.

Verdict for D2: **standard CBA is not adequate for unequal effects**, `specified`, not `grounded`. To register distribution it must import distributional weights from a welfare frame whose closure differs (Fig 6 :23). **Triangulated**: Fig 1 (per-slot residual) and Fig 12 (bond symmetry / flat formula) and Fig 9 :55 (union unbundling) are three low-overlap routes: error signal, notation, and question type. **Refuter:** show a money-only CBA that registers each person's stake without importing a weight from outside the money frame, or show that affected people's revealed preferences are invariant to their income and to how the question is framed.

World corroboration (secondary): the 2026 Green Book requires distributional weighting because *"An additional £1,000 of income is more valuable to a low-income household than to a high-income household"*; Sen's sum-ranking critique says *"sum-ranking does not take seriously the distinction between persons"*; Arrow's theorem says *"possibilities for choosing rationally can be lost when individual preferences are aggregated into social preferences."*

### F2 — Under deep uncertainty the expected-value atom is the wrong atom (decisive for D3)

Fig 6 :29: **"inward: is our representation adequate to hold it? The instrument extends access. Fails by refining forever on an axis that cannot carry it. Sharpen in our own terms."**
Fig 6 :30: **"outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."**
Fig 8 :40: **"Underivable-in-principle and unreachable-at-this-budget are"** (continued on :41) **"different facts, and they issue different instructions."**
Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**

The residual splits. Calculable risk (known probabilities, reversible outcomes) is in the CBA closure: expected value and sensitivity analysis can hold it, so the honest answer is SEARCHED or a budget limit, not an import. Deep uncertainty (contested conceptual models, unknown or disputed probability distributions, disputed weights over outcomes, irreversibility) is a different condition. The CBA frame's atom is "probability-weighted money". Refining that atom (another discount rate, another sensitivity table) is precisely the failure Fig 6 :29 names: refining forever on an axis that cannot carry the residual. The atom must be imported from a frame whose closure holds robustness across futures rather than optimality at a best estimate.

Verdict for D3: **adequate for calculable risk inside the frame, not adequate for deep uncertainty**, `specified`. Imported robustness methods carry a provenance cost (Fig 6 :24: *"Import from a live peer is debited against that frame’s independence. A wrong atom costs more than starting from primitives."*). **Triangulated**: Fig 6 inward/outward and Fig 8 underivable/unreachable are two different instruments (representation adequacy versus budget/scope) with low overlap. **Refuter:** show that a single probability distribution over money outcomes registers a case where experts dispute the model of the system and the weights over outcomes; or show that no decision-relevant information is lost by optimising at a best estimate in a case with irreversible effects.

World corroboration: RAND states deep uncertainty exists when parties *"do not know or cannot agree on"* the conceptual models, the probability distributions, and *"how to weigh and value desirable alternative outcomes"*, and that DMDU seeks policies *"robust"* rather than optimal for a best estimate. Marchau et al. define it as not knowing or not agreeing on how the system works and how likely future states are.

### F3 — Money and non-market value are two currencies that do not add (decisive for D4)

Fig 12 :125: **"A composition costs in two currencies, and they do not add."**
Fig 12 :126: **"Bits price the description. Actions price finding out whether it holds. They are in different units, so a system holding one accounting cannot compare them"**
Fig 12 :130: **"Summing them into one figure is the error this names, not the fix for it."**
Fig 2 :37-38: **"instruments can be wrong on axes they do not measure."**

A WTP number is a reading from an instrument. The instrument reads a quantity in money and cannot comment on its source: the same number can come from a real valuation, from moral satisfaction, from an attitude, or from a framing effect. Fig 2 :37-38 establishes the general rule: money/WTP is an instrument for some questions, not an anchor for "is this good for people", and instruments fail on axes they do not measure. Fig 12 :125-130 adds the structural rule: two currencies in different units are held apart, and summing them into one score is the named error, not a remedy.

Verdict for D4: **standard CBA is not adequate for effects difficult to value in money**, `specified`. The honest form when no discriminating instrument exists is `unreachable`, not a forced monetisation: Fig 13 :134 **"Unreachable is a verdict here, not a silence,"**. **Triangulated**: Fig 12 (currency incommensurability) and Fig 2 (instrument versus anchor) have low overlap: one is about units, the other about what settles a claim. **Refuter:** show a single money reading that is invariant to how the valuation question is asked and that discriminates among the sources of the same reading, or show that two quantities in different units can be added without loss.

World corroboration: Kahneman and Ritov find *"Observed preference reversals and violations of monotonicity in contributions are better explained by a concept of attitude than by the notion of economic value that underlies the contingent valuation method."* The 1999 CRS report concludes that *"it is impossible to reach an unqualified conclusion as to the reliability and validity of such surveys generally"* (from the search extract; the full report text retrieved 2026-11-23 records the same controversy). OMB Circular A-4 notes *"agencies have at times conflated what cannot be monetized with what is insignificant, speculative, or unimportant."*

### F4 — The question is a union, so one scalar cannot hold it

Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**
Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
Fig 9 :57: **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."**

The three conditions in the question overlap: a climate policy can be uncertain, unequal and hard to value at once. A single NPSV is a bundled answer. Adding a distributional weight, a robustness check and a non-monetary valuation to the same spreadsheet does not produce one bigger CBA; it produces three loops whose results must be kept apart (Fig 12 :130). **Triangulated** with F1 and F3 through the union/partition question type, which is distinct from the per-slot and currency findings. **Refuter:** show that the three conditions are a partition under one currency (that each can be reduced to the same missing atom), in which case one loop is owed.

### F5 — The BCR is frame-internal, so it cannot score the frame that produces it

Fig 1 :27: **"They are frame-internal. A frame cannot score itself with a quantity it also produces."**
Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**
Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**

A BCR is produced by the CBA frame using the CBA's currency. It therefore cannot be the metric that certifies the CBA's adequacy for a person: it moves when the analyst changes the discount rate or the weight, so by Fig 2 :29 it is not an anchor for this question. Fig 2 :37-38 says human judgment is the right anchor for "is this a good answer for a person", because the question is about people; money is only an instrument. **Single-source for the frame-internal claim** (Fig 1 :27) triangulated with the anchor test (Fig 2 :29/:37-38), two distinct figures. **Refuter:** name an anchor for adequacy that does not update when the analyst changes a weight or a price, and show the BCR ranging against it.

World corroboration: the 2026 Green Book says *"Value for money is the balanced judgement about the optimal use of public resources to achieve the objectives of a proposal"* and that the government *"does not choose projects solely on the basis of which have the highest benefit-cost ratios"*. OMB's 2023 revision prompted the warning that *"agencies have at times conflated what cannot be monetized with what is insignificant, speculative, or unimportant."* Official practice has already conceded F5 at the level of decision rules.

### F6 — The three repairs are imports and owe a provenance record

Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**
Fig 8 :50-52: **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"**
Fig 9 :27-28: **"describe it before you go looking, or any frame you pick will seem to fit."**

Distributional weights come from welfare ethics and social choice; robustness criteria come from decision science under deep uncertainty; non-monetary valuation comes from psychology, deliberative practice and instrument design. Each is an atom imported from a closure that differs from money-only CBA. Fig 8 :50-52 makes the record decisive: an imported weight and a derived weight look the same in the output. The provenance, not the number, is what a checker needs. **Single-source on the import rule** (Fig 6 :23), corroborated by the provenance rule (Fig 8 :50-52). **Refuter:** derive distributional weights, robustness criteria and non-market values entirely from the money atom without changing the closure.

### F7 — Search order: SEARCHED first, then INWARD, then OUTWARD

Fig 8 :32: **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."**
Fig 6 :29: **"inward: is our representation adequate to hold it? The instrument extends access. Fails by refining forever on an axis that cannot carry it. Sharpen in our own terms."**
Fig 6 :30: **"outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."**

Asked in order: (1) SEARCHED, is the atom already in CBA's closure and unfound? Distributional weights and sensitivity tables are in the closure, so distributional analysis at a fixed weight is SEARCHED and cheap. (2) INWARD, can the representation be extended in our own terms? A source-discriminating valuation instrument is an inward extension of the measurement side. (3) OUTWARD, what frame already predicts the shape? Robust decision making and the capability approach are outward imports. INWARD and OUTWARD are opposed and never read against one another (Fig 6 :31: *"Neither answer tells you much about the other. Run them as two tracks, and never read one against the other."*). **Refuter:** show an atom added to the closure by search alone, or that INWARD and OUTWARD are the same operation.

### F8 — What survives: CBA is adequate inside its closure, and the stop is `unreachable`

Fig 9 :32: **"you get a kind of thing, never the answer itself"**
Fig 13 :134: **"Unreachable is a verdict here, not a silence,"**
Fig 13 :135: **"It cannot say which primitive is missing, because naming it would mean already holding it."**

The shape that survives is not "CBA is useless". It is: CBA is an adequate generator inside a closure where effects are commensurable in money, small and reversible, and where distribution is not at issue; outside that closure the residual is a union of three conditions and the answer is a shape held apart in three currencies, not a single number. Where no instrument discriminates, the honest report is `unreachable at this budget` or `underivable from this closure`, not a fabricated price. **Triangulated** across Fig 9 (shape not answer) and Fig 13 (unreachable as verdict). **Refuter:** exhibit a decision where a bare BCR ordered options identically to the full three-loop assessment and the differences carried no decision-relevant information.

---

## 4. Pre-registered refuter

Required before conclusion, per Seat Map :287: *"And a falsifier written before the run is a design instrument, not only an honesty device."*

The claim "standard CBA is not adequate under the three conditions" is refuted if any of the following holds:

1. An internal refinement of the money-only CBA, using the same currency, the same per-slot aggregation and a single probability atom, is shown to register each person's distributional stake, contested deep uncertainty and non-market value without importing an atom from a frame whose closure differs (Fig 6 :23).
2. A ground reading shows that affected people's reported values are invariant to their income, to framing, and to the elicitation instrument, so the per-slot and instrument findings (Fig 1 :19/:22, Fig 2 :37-38) do not fire.
3. A decision is found in which a bare BCR ranks alternatives exactly as the full multi-frame assessment does across all three conditions, and the unmonetised and distributional differences carry no decision-relevant information.

If any fires, the verdict is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Use CBA inside its closure: small, reversible, commensurable effects with low distributional stakes. Do not discard a working instrument because it fails outside its range (Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*).
2. Beyond the closure, keep the money number as one witness among several, and add three loops with separate outputs: distributional analysis with a recorded weight, robust decision making over plausible futures, and non-monetary valuation with a source-discriminating instrument.
3. Hold the currencies apart. Fig 12 :130: *"Summing them into one figure is the error this names, not the fix for it."* No composite "adjusted BCR" score.
4. Record provenance for every import (Fig 8 :50-52), so a convergent derivation and an adopted import are distinguishable by a checker.
5. Report `unreachable` where no instrument discriminates, rather than a monetised placeholder (Fig 13 :134).
6. Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."* Send the generator, the shape claim and the refuter, not a finished monetised verdict.

---

## 6. Canonical usage check and retraction log

Two sources were read after the first sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also says *"a reading that makes one contradict another has misidentified its domain, not found a flaw"* and that the framework reports *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of the instruments. *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: *"the figures are the ground for design questions; Isaiah is the anchor for what the figures genuinely cannot settle."* The seat reads the ground; it does not ask the anchor to decide what the figures already decide. No ruling was requested in producing this folder.

### Retractions, corrections and confirmations

| earlier reading | status after re-census and canonical check |
|---|---|
| Fig 13's six-term substrate governs money valuation | **Retracted.** Money is not one of the six primitives and the residual is about currency and indexation, not composition across states and structures. The line only fit with a strain, so by the strain test it governs another quantity. Fig 12 :125-130 governs the currency question. Fig 13 is kept only for the closed-set/unreachable limit. |
| Treat "uncertain" as one condition handled by expected value | **Split, not silently erased.** Re-census separates calculable risk (inside the CBA closure, SEARCHED or budget-limited) from deep uncertainty (outside the closure, import owed). Both readings are recorded in F2. |
| Average the three domain verdicts into one adequacy score | **Retracted.** Fig 1 :19 forbids aggregating the residual across slots, and the standing instruction keeps per-domain verdicts separate. There is no single "70 percent adequate" number. This removal is why the reach falls while the record keeps the earlier line. |
| "difficult to value" means "assign a better guess" | **Corrected.** Fig 12 :125-130 says the currencies do not add and summing is the error. What is owed is a separate reading and a discriminating instrument, not a better guess inside the money currency. |
| F5 (BCR frame-internal) | **Confirmed at record level.** The 2026 Green Book and 2023 Circular A-4 both state that the monetised ratio is not the decision rule. |
| F1 (aggregation) | **Canonically confirmed.** The figures README's shape-not-a-name limit plus Fig 1 :19/:22 give a shape: per-slot residuals, not a total. |
| F4 (union) | **Canonically confirmed.** Fig 9 :54-58 and the README's "a reading that makes one contradict another has misidentified its domain" both send a bundled question back to the census. |

### Strain check after re-census

One live strain is named, not hidden: Fig 8 :40-43 separates underivable-in-principle from unreachable-at-this-budget, but for a specific decision it is an empirical question which one applies. We record the verdict as `specified`: D2, D3 and D4 are underivable from the money-only closure; whether a given case is merely unreachable at the current budget requires a ground reading of that case. No figure line was smoothed to make it fit.

---

## 7. Round trip to the WATSON answer

The condensation sent to `09_watson_answer.md` is: "CBA adequate inside its closure; three imports owed outside it; hold currencies apart; report unreachable rather than a price." The concretisation returns to the verbatim figure set. What survives the trip is the shape and the import direction. What does not survive automatically is (a) which of risk or deep uncertainty applies to a given decision, (b) the exact weight any particular frame would supply, and (c) whether a discriminating instrument exists. `R_T` is therefore nonzero and is recorded qualitatively in `11_audit.md`. Treating the formula as identical to the full figure set would set `R_T` to zero and would be the dead-reckoning error Fig 4 :30 names: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*
