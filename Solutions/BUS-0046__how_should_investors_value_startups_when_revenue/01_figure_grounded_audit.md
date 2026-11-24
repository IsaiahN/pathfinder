# Figure-grounded audit: BUS-0046, valuation under conflicting signals

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, read 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the business question it reports on. See `05_what_shape_means.md` section 6.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) − o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the investor's prior, formed from comparable deals, sector lore, and inherited assumptions about how startups fail.
- **a** is the investment action: price, round size, tranches, milestones, board rights, follow-on reserve.
- **Γ(b,a)** is the valuation the investor's model predicts given that belief and that action. It is a price in bits (Fig 12 :125).
- **o′** is what actually happens: audited revenue, a subsequent round's clearing price, an acquisition, an IPO, or a write-off. It is payment from the ground.
- **s** is the slot. Slots in view are the revenue reading, the user-growth reading, the future-market reading, and the company itself. R is indexed by s and by time, never pooled into one blended valuation.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"a global R near zero with one live slot residual is a legal state"** (Fig 1 :13)

The last line is decisive for the practical question. A blended valuation can look entirely reasonable while one live slot (retention collapsing under a growing user count, say) carries the whole residual. Averaging does not merely smooth noise here; it removes the only signal that says where to look.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names the candidate: *"A measurement, an experiment, a counter, a market, a patient outcome."* A market is explicitly a named anchor. But that line must be read with Fig 2 :30: *"If it moves when you push on it, it is not an anchor."* The current comparable-company multiple moves when the investing pool's enthusiasm moves, so it is a frame, not an anchor. The viable anchor is the realised, arms-length clearing event (a later round, an acquisition, an IPO, a write-off) or an audited counter. This distinction is the strain test in section 1.5, not a footnote.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a shape with four parts, (i) a per-slot valuation whose live residual is visible, (ii) a named anchor that does not update on the investor's opinion, (iii) independence bought between the readings, and (iv) a pre-registered refuter. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 5 can fire on it.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a three-place relation: investor belief b, investment action a, realised outcome o′, indexed by slot s and ordered by time t. It is a sequence rather than a set, so it carries an ordered bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) and a comparison bond for "worth" (`⋛`, *"a threshold relation between two quantities"*, Operators table :48). It is not symmetric: investor and company are not interchangeable, and paying more does not make the company worth more.
- **Symmetry.** "Undervalued" is a threshold relative to the investor's required return, not an absolute quantity. "Conflicting signals" is asymmetric in time: a user-growth signal that later converts to revenue is a sequence, while three readings of the same quarter are a conjunction, not a sequence. The ordinariness of the word "signal" hides which bond holds.
- **Scale.** Three scales are in view: the single investment decision (one agent, one step-by-step loop), the portfolio of investments with *"something that ranks what they produce"* (Fig 4 :5), and the market habitat that settles many decisions over time. The membrane is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). A comparable-company multiple is a recording from another occasion carried sideways, not a generator, so its round trip must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The three signal frames** | revenue counts, user-growth metrics, TAM narratives, the analysts who produce them | readings, ratios, forecasts | yes: realised cash conversion and realised market clearing (Fig 2 :29) | admitted |
| **D2 The valuation act** | investor, model, term sheet, price, tranches | description cost (bits) and settlement cost (actions) | yes: the payment the ground makes on the security (Fig 12 :125-126) | admitted |
| **D3 The settlement frame** | later rounds, acquirers, public markets, auditors, write-offs | cash, liquidation preference, realised return | yes: the arms-length clearing event, which does not update on the first investor's model (Fig 2 :29-30) | admitted |
| **D4 The temporal channel** | investor instruments, metrics, board reports, information rights | contact with the ground | yes: the ground, *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **X1 "The true intrinsic value" as a free-floating number** | the number | precision | **no** anchor independent of a realised transaction or cash flow | not a domain yet |
| **X2 "Market sentiment" as a separate ground** | the investing crowd | enthusiasm | sentiment updates when pushed; it is a frame inside D3, not an anchor (Fig 2 :30, :47) | absorbed into D3 |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that disciplined modeling is useless. X2 is the most common category error in this question: a live comparable multiple is treated as the market's verdict while it is actually the market's ongoing conversation.

### 1.3 Partition or union

D1 and D4 overlap: the signal frames are the channel through which contact with the ground is read. D2 and D3 overlap: the term sheet partly creates the future settlement it will be judged against (liquidation preferences, tranches, pro-rata rights). D1's three signals also overlap with each other, because revenue, users, and TAM are often three tellings of one underlying customer story. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: (C1) a signal has a reachable ground that can settle it; (C2) the readings are independent at the evidence level; (C3) the price is staged so that settlement can arrive before the whole commitment is made. A company failing only C1 (no realised conversion evidence) and one failing only C2 (three versions of one narrative) are not different degrees of one failure. They need different instruments and different term-sheet structures.

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the investor read the customer response at all?) → 2 vocabulary (does the model have terms for what the company affords: conversion, retention, expansion, churn?) → 3 objective (can it say what progress would count as, in its own terms?) → 4 planning (the staged investment) → 5 learn and carry (name what paid, verify it, carry it to the next deal). The middle link is the one that usually lacks an instrument, and the one valuation decks most often skip: a TAM number is an ingredient, not a term for what would count as progress. Fig 12 :112: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."* A vocabulary holding only ingredients can say what a situation contains and cannot say what would count as getting somewhere from it.

### 1.5 Strain test and re-census

An early reading tried to use *"a market"* in Fig 2 :29 as the current comparable-company multiple. That fits only with a strain, because the multiple updates on the opinions of the same investors whose disagreement it is supposed to settle. By the strain rule (figures README: a reading that makes figures contradict one another has misidentified its domain), the line was re-censused: "market" as anchor means the realised clearing transaction, while today's multiple is a frame inside D1. With that re-census, Fig 2 :29 and Fig 2 :30 agree and no strain remains. This re-census is recorded rather than hidden.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs indexing of R, not the size of the price |
| 2 The Ground | market and counter as named anchors; independence versus common pool | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, recordings sideways; R_T | governs transfer of comparable-deal knowledge |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs whether a new valuation term is licensed |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs what a new metric can and cannot add |
| 7 Room Chain | same closure handed along; agreement compounds, evidence does not | governs syndicate agreement as non-evidence |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation across signal frames |
| 9 Leave / Arrive | union versus partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; pooled readings | governs metric decay and the anchor reachability rule |
| 11 The Habitat | valence relative to residual; enumerate, never compose | governs why the same signal changes sign by stage |
| 12 The Bond | two currencies, bits and actions; comparison, sequence, subtraction; isomers | governs the price/action split and method types |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop on a company-specific number |

Strained readings are named in section 1.5 and in the retraction log. No figure line was forced onto the six-term physical substrate; Fig 13 is retained only for the honest-stop role, consistent with the completed BUS pilots.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about valuation practice, `grounded` only if settled by a realised measurement. None is `grounded`.

### F1: A blended valuation removes the live signal (decisive for the headline question)

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 1 and Fig 10, low overlap: agent indexing versus ground-maintainer channel decay).**

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"saturated metrics, pooled readings"** (Fig 10 :26)
> **"you have lost touch"** (Fig 10 :28)

A weighted average of a revenue multiple, a user-growth multiple, and a TAM narrative produces a number that can look precise while every slot's residual is hidden. Fig 10 names the decay modes: stale percepts, dropped transients, saturated metrics, and pooled readings. "Pooled readings" is the valuation-level version of aggregating across slots. The practical prediction is testable: two companies with the same blended score but different per-slot residuals will realise different outcomes, and the blend will not have predicted which.

**Refuter:** show a blend that preserves, for each slot, the same discriminating information as the per-slot readings, in a prospective test where the two companies have equal blended scores and different live slots. If the blend predicts which one fails, F1 is false.

**World bearing (secondary only):** Wikipedia's valuation overview says the methods are *"used in combination, providing a 'triangulation' or (weighted) average."* That is a genuine conflict with Fig 2 :35 (*"Alignment is triangulation, not negotiation"*) if "triangulation" is read as a blend. The conflict was returned to the census, not used to flip the verdict; see section 6, re-census R1.

### F2: Conflicting signals are a union of well-formed questions, not one hard one

**Mode: `specified`. Domain D1. Status: triangulated (Fig 9 union rule and Fig 3 dependency order, low overlap).**

> **"First: is there a fact here?"** (Fig 9 :4)
> **"are not one hard question but several well-formed ones. Split it rather than search."** (Fig 9 :5)
> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)

The question says the three signals "provide conflicting signals." In the figures' terms, a disagreement that does not shrink with effort, where each rule keeps working well on a different subset, is several well-formed questions. Revenue works where cash has already converted; user growth works where conversion is plausible but unproven; future market works where neither is available and the question is about a category that does not yet exist. They are not three estimates of one quantity to be reconciled; they are three different questions with three different instruments.

**Refuter:** demonstrate, for a defined population of startups, that the three readings converge under more measurement of the same kind with no change of instrument or anchor, and that one residual remains after splitting. If so, it is one hard question and F2 is false.

### F3: The anchor is the realised clearing event, not today's comparable multiple

**Mode: `specified`. Domains D1, D3. Status: triangulated (Fig 2 anchor test and Fig 10 channel rule, low overlap).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** (Fig 2 :29)
> **"A measurement, an experiment, a counter, a market, a patient outcome."** (Fig 2 :29)
> **"If it moves when you push on it, it is not an anchor."** (Fig 2 :30)
> **"A ground listed as one of the parties has already become a frame."** (Fig 2 :47)

A startup is not settled by its own deck, not by an analyst's comparable set, and not by the last round's price if that price is itself a comparable for the next round. Each of those moves when the pool of investors moves. Anchors that do not move with opinion: an audited cash count, a signed term sheet at arms length, an acquisition price, an IPO opening price, or a realised write-off. The market is a legitimate anchor here because the question is constitutively about what a market will pay (Fig 2 :36 gives the legitimacy rule), but only at the realised event.

**Refuter:** show a case where the realised clearing price changes systematically when the first investor publicly revises their own model, with no change in the company's cash, customers, or external conditions. If the anchor moves with the frame, the anchor test fails and F3 is false.

### F4: Investor agreement is a convention, not corroboration

**Mode: `specified`. Domain D3. Status: triangulated (Fig 2 correlation valence and Fig 7 room chain, low overlap).**

> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)
> **"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"** (Fig 2 :41)
> **"agreement compounds, evidence does not"** (Fig 7 :13)

A syndicate of investors who all read the same data room, the same comparable set, and the same founder narrative is one evidence pool. Their consensus on price is useful as a convention (it lets a round close and creates a shared meaning about what the company is called), but it is worthless as evidence that the price is right. The figures price independence in proportion to the cost of being wrong (Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*), which in venture means buying independent readings exactly where the loss is largest.

**Refuter:** show that two investors drawing on disjoint evidence sets and two drawing on one shared set have the same track record of realised outcomes across a broad sample. If independence buys nothing here, F4 is false.

### F5: The price is a price in bits, the settlement is a price in actions, and they do not add

**Mode: `general`. Domain D2. Status: triangulated (Fig 12 two-currency rule and Formula step 5 gate/ground distinction, low overlap).**

> **"A composition costs in two currencies, and they do not add."** (Fig 12 :125)
> **"Bits price the description. Actions price finding out whether it holds."** (Fig 12 :126)

A DCF or comparable multiple prices the description: how much information is compressed into the number. The cost of discovering whether that description is true is paid in actions: diligence, milestones, tranches, board information rights, follow-on reserves, and the time until a realised outcome. Collapsing both into one "expected value" number is the error the figure names. A cheap description over a costly operand can take a whole budget to settle; a long description can be refuted by one action. Neither reading predicts the other.

**Refuter:** exhibit a decision in which the description cost and the action cost are measurable in one unit and adding them changes the investment recommendation. If they can be added without loss, F5 is false.

### F6: The sought-for number is held as a preference, not a term

**Mode: `specified`. Domain D2. Status: triangulated (Formula "Direction" and Fig 5 amendment, low overlap).**

> **"your words are borrowed too, so describe the effect rather than the cause"** (Fig 9 :30)
> **"describe it before you go looking, or any frame you pick will seem to fit"** (Fig 9 :27)
> **"A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."** (Fig 5 :43)

The target price is often fixed before the analysis: the founder's round requirement, the partner's return target, the comparable that flatters the deal. A frame searching for an answer of a particular shape holds that shape as a preference, not as a term; it predicts nothing and accrues no residual, so no check inside the model can see it. The world-side record of this is in the Investopedia article read this session: *"Different valuation methods will produce different values for the same underlying asset or company, which can lead analysts to employ the technique that provides the most favorable output."* That is the preference being smuggled in as a method choice. The remedy is the discipline the Formula names: write down what an answer would look like, bind it, and let it accrue a residual.

**Refuter:** show that the choice of valuation method is invariant to the target price in a blinded experiment where the target is hidden and revealed in two conditions. If method choice does not move with the preference, F6 is weakened for this domain.

### F7: A metric is an instrument, and instruments are improved from worse instruments already returning something

**Mode: `general`. Domain D1. Status: single-source for the instrument rule (Fig 6), corroborated in shape by world meteorological practice.**

> **"the only operator that moves the wall"** (Fig 6 :14, on import)
> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)

Inventing a new multiple for a company with no revenue does not import a new atom; it rearranges the ones the investor already holds. Adding a genuinely new instrument (cohort-level conversion data, retention curves, signed design-partner contracts, regulatory approvals) is an import from a frame whose closure differs, and it carries a source gate and a shadow test (Fig 8 provenance rule). Fig 6 :14 is about what moves the wall; the practical instruction is to look for the instrument that is already returning a failing reading rather than to specify an ideal metric from an account of the company.

**Refuter:** exhibit a new valuation metric that adds a genuinely new atom without drawing on a frame whose closure differs from the investor's, and that moves the wall in a prospective test.

### F8: Staging is the legitimate form of reversibility

**Mode: `specified`. Domain D2. Status: triangulated (Fig 12 two currencies and Fig 3 dependency order, low overlap).**

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Because the action price and the description price do not add, the rational response to a large unsettled residual is not a larger single payment but a staged commitment whose tranches are tied to the link that currently lacks an instrument. A milestone buys a reading. A reading that arrives before the whole capital is committed is a head start for the next decision, not a recording of this one (Fig 4 :22: *"Only methods cross up. Only head starts come down."*). The term sheet is therefore part of the valuation answer, not an administrative afterthought.

**Refuter:** show that staging changes nothing about realised outcomes in a population where the underlying uncertainty is genuinely one-shot (no intermediate reading can arrive before the final settlement). In that case F8 is false for that population.

### F9: The same signal changes sign when the residual changes

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 11 valence rule and Fig 12 catalyst/spent part, low overlap).**

> **"An actor's valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)

Revenue growth is a benefactor to a company whose residual is "can it sell anything" and can be a malfactor to one whose residual is "is it growing a sustainable margin at all": the same growth can consume cash faster than it converts. A large user base is a benefactor before network effects saturate and can hide churn after. No standing weight can be assigned to a metric across stages. This is why a fixed scorecard is a convention, not a verdict.

**Refuter:** exhibit a signal whose realised predictive sign is invariant across stage and residual for a defined population. If it is invariant, F9 is false for that signal.

### F10: Company-specific value is a `gap`, reported as unreachable, not as silence

**Mode: `general`. Cross-domain. Status: triangulated (Fig 9 shape limit and Fig 13 honest-stop rule).**

> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)
> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)
> **"Unreachable is a verdict here, not a silence,"** (Fig 13 :134)
> **"So a search that finds nothing is never a proof of absence."** (Fig 8 :39)

No figure line returns a price, a multiple, a discount rate, or a weighting. Reweighting the three signals is an arrangement inside the investor's existing method set, and *"no search, however long, adds an atom"* (Fig 8 :32). What the figures return is the shape any defensible valuation must have, plus a list of what would have to be imported (a discriminating instrument, a grounded anchor, an independent reading) before the number could be called settled. The specific number is a `gap` of the unreachable-at-this-budget kind, not a failure of the derivation and not an invitation to invent one.

**Refuter:** produce a figure line that returns a numeric valuation rule after a genuine re-census, or a settled measurement that pays for a specific price before a realised event. Until then, no number here is labelled `grounded`.

### Findings summary with modes

| claim | mode | status | figure |
|---|---|---|---|
| Blending hides the live per-slot residual | `specified` | triangulated | Fig 1 :19, :22; Fig 10 :26 |
| Conflicting signals are a union, not one question | `specified` | triangulated | Fig 9 :4-5, :54 |
| The anchor is the realised clearing event | `specified` | triangulated | Fig 2 :29, :30, :47 |
| Syndicate agreement is a convention, not evidence | `specified` | triangulated | Fig 2 :35, :40; Fig 7 :13 |
| Description cost and action cost do not add | `general` | triangulated | Fig 12 :125-126 |
| Target price is a held preference, not a term | `specified` | triangulated | Fig 9 :27, :30; Fig 5 :43 |
| Staging buys readings and is the reversible form | `specified` | triangulated | Fig 3 :20, :27; Fig 4 :22 |
| Signal sign is relative to the residual | `specified` | triangulated | Fig 11 :49, :51 |
| The company-specific number is a `gap` | `general` | triangulated | Fig 9 :32; Fig 13 :115, :134 |

---

## 4. Pre-registered refuter

**Written before the conclusion in `07` and `09`, per Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."*** The shape claim is refuted if any of the following holds:

1. A prospective test shows that a blended score preserves the discriminating information of the per-slot residuals when two companies share the same blend but differ in a live slot (kills F1).
2. The three readings demonstrably converge under more measurement of the same kind with no instrument or anchor change, leaving one residual (kills F2).
3. A realised clearing price moves systematically with the first investor's private model revision, with no change in the company (kills F3).
4. Independent and shared-evidence investor panels have equal realised outcome accuracy across a broad sample (kills F4).
5. Description cost and action cost are commensurable in one unit and summing them changes the recommendation (kills F5).
6. Method choice is invariant to a hidden target price in a blinded test (weakens F6).
7. A company-specific numeric valuation rule is derived from a figure line after re-census, or settled by a pre-realisation measurement (kills F10).

If any fires, the corresponding finding is withdrawn and the shape is rebuilt from the census. Until one is run, nothing here may be labelled `grounded`.

---

## 5. Recommendation

1. Stop averaging the three signals into one price. Keep a per-slot residual, and say which slot is live (F1).
2. Split the union before searching: three questions, three instruments, three grounds (F2).
3. Name the anchor as the realised clearing event or audited counter, and keep it reachable (F3; Fig 10 :29: *"keep the anchor reachable"*).
4. Buy independence where the cost of being wrong is largest. Do not count a syndicate of shared-data investors as corroboration (F4).
5. Price the description and the settlement in separate columns. Put the action price in tranches tied to the link that currently lacks an instrument (F5, F8).
6. Write the target price down as an ordinary term before analysis, so it can accrue a residual and be refused (F6).
7. Report a shape with a refuter, not a number with a confidence interval that pretends the gap was closed (F10).

---

## 6. Canonical usage check (figures README + WATSON 60, 2026-11-22)

Two sources were read after the first four sections and they govern how the figures may be used:

- `https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md` and the local copy `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; and the canonical limit, that the framework returns *"a shape, not a name"*, then stops at the limit of the instruments and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the seat reads the ground; it does not ask the anchor to decide what the figures already settle. Design questions are answered by derivation, not by escalation.

### Retractions and confirmations

| earlier finding | status after the canonical check |
|---|---|
| F1 called "decisive" | **Narrowed to a domain finding.** It governs the slot on which the residual is indexed; it does not say that all averaging is forbidden. A weighted average used as a budget filter is legitimate (Fig 9 :60). The claim that it can serve as a witness is retained and refused. |
| F3 "market is the anchor" | **Re-censused.** The live comparable multiple is a frame; the realised clearing event is the anchor. Both readings preserved above (section 1.5). |
| "triangulation" in the valuation literature | **Conflict returned to census, not flipped.** Wikipedia uses the word for a weighted average; Fig 2 :35 uses it for independent ranging against a ground. Different objects, so the world usage is a convention (Fig 2 :41) and is not admitted as a witness. |
| F7 "a new metric imports an atom" | **Retracted as stated.** Reweighting or renaming a multiple adds no atom (Fig 6 :21). Only a genuinely new instrument from a differing closure can move the wall, and it needs provenance plus a shadow test. |
| "shape, not a name" as a ban on all numbers | **Narrowed.** The canonical phrase governs a missing primitive. Here the missing thing is a discriminating ground reading, not a multiple. Naming an already-held valuation method is a binding with provenance, not a forbidden invention. |
| F10 unreachable | **Canonically confirmed.** The README's *"a shape, not a name."* and the figure line *"Unreachable is a verdict here, not a silence"* (Fig 13 :134). |
| Prestige of the valuer | **Excluded from evidence, kept as contact cost only.** *"Prestige can fund an action... but it cannot settle an action. Only the ground can settle it"* (*The Recursive Self-Improvement Trap*). |

### Re-census log

- **R1, "triangulation" conflict.** World source uses the term for a blend. Re-census: Fig 2 governs evidence; the blend governs convention and budget. Different objects, no strain after re-census.
- **R2, "market" as anchor.** Re-census: realised clearing event versus live multiple. Different objects, no strain after re-census.
- **R3, Fig 13 physical substrate.** Attempted mapping of revenue/user/market onto states and structures was refused. Fig 13 is retained for the honest-stop role only. Consistent with the completed BUS pilots.

### Updated verdict

The shape survives: per-slot residuals instead of a blend; a union split into three well-formed questions; a non-updating realised anchor; independence bought in proportion to cost; two prices kept in two currencies; a target preference bound and refusable; a staged commitment that buys readings. What does not survive is any claim to a specific price, a universal weighting, or a settled ground before a realised event. Strains after re-census: none hidden; three named above.
