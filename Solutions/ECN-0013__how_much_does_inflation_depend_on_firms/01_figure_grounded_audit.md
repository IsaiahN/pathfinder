# Figure-grounded audit: ECN-0013, inflation and firm pricing

**Mode of this document: `specified`, with `general` on the structural shape.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* No claim here is `grounded`.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, opened 2026-11-23: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the economics question it reports on. No inflation data were opened, no markup series were recomputed, no regression was run.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. Also `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/figures/THE_FORMULA.md`. World sources are secondary, are opened in full, and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines `R = |Γ(b,a) − o′|` per slot `s` (Formula step 1; Symbols table, `R`). Here:

- **b** is the firm's belief about what its buyers will pay, formed from past prices, observed demand and inherited pricing habits.
- **a** is what the firm does: set a price, change a markup, pass through a cost, shelter a margin, enter or exit.
- **Γ(b,a)** is what the firm's library of pricing routines predicts will happen to its own sales, margin and share.
- **o′** is what the market actually returns: the realized transaction price, the realized volume, the realized price index.
- **s** is the firm, indexed also by time `t`. R is indexed by firm and by time, never aggregated into one economy-wide number without saying what was thrown away.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."** (Fig 1 :28)

The question as posed asks for an aggregate: *how much* of inflation (a pooled price change) depends on market power and pricing strategies (firm-level properties). Stated as a residual, the phenomenon to explain is: why does the gap between what a firm-slot's pricing rule predicts and what the market returns stay small in some slots and regimes, and grow in others, and how does that per-slot pattern compose into the single number that a price index reports?

State the residual as: *why does the per-slot gap between a firm's pricing prediction and the market's realized price move in some slots and regimes and not others, and what is lost when those slots are pooled into an inflation rate?* This names no theory, no "greed", no "monopoly", no "cost shock". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** before the run (Formula, "Direction"): the answer would be (i) a set of conditions whose conjunction governs the per-slot pricing residual, (ii) an account of how those slots compose into an index, and (iii) an instrument that discriminates a failure of one condition from a failure of another. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 5 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names candidates: *"A measurement, an experiment, a counter, a market, a patient outcome."* The market is a named anchor. But the question's own measure, the aggregate price index, is a reading assembled from many slots, and Fig 10 :25 names *"pooled readings"* as a way contact is lost. So the anchor is the realized transaction price and the realized market outcome at the slot, not the index alone, and not the economist's estimate of a markup. Fig 2 :30: *"If it moves when you push on it, it is not an anchor."* A markup estimate moves when the cost-classification convention moves (Deloitte-style evidence below), so it is an instrument, not an anchor.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry and scale of R

- **Arity.** R is at least a four-place relation: firm belief `b`, action `a`, realized outcome `o′`, and slot `s`, ordered by time `t`. It carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) because a cost change precedes a pricing response, and a **comparison** bond (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87) because "high markup" and "superior inflation" are relative positions, not absolute quantities. It is not symmetric: the firm and the market are not interchangeable.
- **Symmetry.** Markup is a comparison of price to cost, not a conjoined presence of two things (Fig 12 :85-89). The inflation rate is a threshold reading of a distribution, not a physical stock. The direction of pass-through matters: the world source from BIS reports that high markups cushion falls in input cost but do not cushion rises, which is a sign flip, not a magnitude change.
- **Scale.** Three scales are in view: the single firm's pricing loop (Fig 4, one-agent panel), the population of firms and the index that ranks what they produce (Fig 4 :5: *"many agents, a shared library, and something that ranks what they produce"*), and the time channel over which a price response becomes an inflation rate. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap `R_T` must be measured, not assumed (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The firm pricing loop** (one agent, one scale) | managers, pricing routines, the firm's Γ, its buyers | price quotes, markup choices, margin protection | yes: realized transaction price and marginal cost at the slot | admitted |
| **D2 The market habitat and the index** (population) | firms, consumers, input suppliers, entrants, monetary authority | survival, share, the price level | yes: realized market outcomes, the market as ground (Fig 2 :29). The index is a pooled reading of it (Fig 10 :25) | admitted |
| **D3 The cost and pass-through structure** (composition inside and across firms) | marginal cost, overhead and fixed cost, input prices, expectations of future cost | cost changes, pass-through rates, markups as a reading | yes: realized cost and price data; a markup is a *reading* whose source is not determined by the reading | admitted |
| **D4 The measurement channel** (across time) | price statisticians, markup estimators, Compustat-type accounts, index construction rules | contact with the ground | yes: the ground persists while the channel decays (Fig 10 :24) | admitted |
| **X1 "Firms' greed" as a free property** | a firm | a disposition | **no** anchor independent of the measured price and margin | not a domain yet |
| **X2 "Market power" as one scalar cause of inflation** | an industry | a concentration statistic | measurable, but it is a reading of D1 and D3, already inside them; the source of the reading is not fixed by it | absorbed into D1 and D3 |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that firms never seek margin. X2 is not excluded but re-mapped: a markup is a **reading**, and the question of what produced the reading is exactly the source question the figures refuse to settle from the reading alone (Fig 9 :32; essay *The Hard Problem is About Source*, opened 2026-11-23).

### 1.3 Partition or union

D1 and D3 overlap: the pricing rule lives inside the firm loop, and cost structure is what it composes against, so their overlap is a compound with its own loop. D2 and D4 overlap: an index is built inside the habitat from readings that the channel carries, so that overlap is a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: (C1) a cost-and-expectation shock reaches the firm's pricing rule; (C2) the firm's pricing rule and market position determine how much of that shock is passed on, sheltered or amplified; (C3) the composition of slots changes, so high-markup firms gain share; (C4) the measurement channel pools the result into an index. A slot failing only C1 and a slot failing only C2 are not different degrees of one failure; they are different compounds and need different instruments. The world literature corroborates the union: Konczal and Lusiani report that the 2021 markup jump *"fits all three of the main explanatory stories of inflation being debated"*, namely those related to changes in demand, supply, and market power (Roosevelt Institute, 2022). Three stories fitting one reading is a union signature, not evidence for any one of them.

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the firm and the observer read the realized price and cost at the slot?) → 2 vocabulary (do Γ and the economist's Γ have terms that distinguish markup, rent, overhead recovery and pass-through?) → 3 objective (what would count as "how much": a per-slot counterfactual or a pooled variance share?) → 4 planning → 5 learn and carry. The middle link is where this question breaks. Economics has a term for markup, but the objective "how much of inflation depends on market power" is a pooled comparison built over slots whose identities change (Hasenzagl and Perez 2026: *"A percentile marks a position rather than a firm, and the firm in the middle of the distribution in 2020 is not the firm that was there in 1960."*). The instrument that would carry a per-slot verdict into an aggregate is missing, so most effort lands above the break (Fig 3 :29-30).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed and why "how much" loses the signal |
| 2 The Ground | market is a named anchor; independence vs common pool; anchor must not update | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; lossy transform; R_T | governs the firm-to-index crossing |
| 5 Mint Pipeline | three guards as a product; settlement; "nothing new here" | governs whether a markup reading can be admitted as a term |
| 6 Closure / Reachability | import is the only operator that moves the wall; instruments improved from worse ones | governs the need for a source-discriminating instrument |
| 7 Room Chain | same closure handed along; fidelity times ground pressure | governs citation chains in the literature |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs source independence and "search that finds nothing" |
| 9 Leave / Arrive | union vs partition; describe the residual first; filters vs witnesses | decisive for the union and the refusal of a variance share |
| 10 Ground Maintainer | ground does not decay, channel does; pooled readings; keep anchor reachable | governs the index as a pooled reading |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual; habitat enumerated not composed | decisive for D1, D2 and the sign flip in pass-through |
| 12 The Bond | comparison, sequence, subtraction, cycle, two currencies that do not add | governs the bonds and the single-number error |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop |
| Operators table | ⋛ comparison is a threshold relation between two quantities | types the "how much" question as a comparison |
| Symbols table | `R` is the aim; the ground is the anchor | no per-slot `R` is stated by the question as posed |

Strain test applied during this census: an early attempt to read Fig 13's six physical substrate terms directly onto "market power" only fit by calling a markup a kind of gradient and a price index a kind of spectrum. That is a strain, so Fig 13 does **not** govern the economics of markups. Re-census sends Fig 13 to the honest-stop role only (section 7, strain S1). A second strain arose from treating the aggregate price index as "the ground": an index is built by a channel and is a *"pooled reading"* (Fig 10 :25), while the ground is what settles. Re-census: the market at the slot is the ground; the index is an instrument pointed at it (strain S2, resolved).

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about inflation and firm pricing, `grounded` only if settled by a measurement here. None is `grounded`.

### F1: R is per firm-slot, so the aggregate share is a pooled reading, not a witness

**Mode: `general` with a `specified` methodological consequence. Domains D1, D2, D4. Status: triangulated (Fig 1 and Fig 10, low topical overlap: agent-slot indexing versus channel decay).**

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"stale percepts, dropped transients, saturated metrics, pooled readings"** (Fig 10 :25)

An inflation rate is a mean over slots whose composition changes. The Richmond Fed brief supplies the world-side instance: *"A percentile marks a position rather than a firm, and the firm in the middle of the distribution in 2020 is not the firm that was there in 1960."* (Hasenzagl and Perez, 2026). And: *"Markups, in short, did not rise across the board. Instead, they concentrated."* So "how much of inflation is due to market power" is a question about a pooled reading, and the figures say the pooled reading has thrown away the only signal that says where to look. The `specified` consequence: any answer that is only an economy-wide percentage has already lost the per-slot diagnostic, and cannot tell a regulator which firm or which regime is failing.

**Refuter:** an aggregate statistic that predicts, prospectively and per named firm-slot, which slot's price residual will rise next, and that survives an out-of-sample change in the composition of the index. If one exists, F1's methodological consequence is false.

### F2: The market is the anchor, but the markup reading is not the source

**Mode: `specified`. Domains D1, D3. Status: triangulated (Fig 2 and the source essay, low overlap: anchor rule versus metamerism).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** (Fig 2 :29)
> **"If it moves when you push on it, it is not an anchor."** (Fig 2 :29-30)
> **"Frames range against the ground. They do not negotiate with it."** (Fig 2 :45)

The essay *The Hard Problem is About Source*, opened 2026-11-23, states the mechanism: *"the instrument detects green, and says that it's green. However, the instrument is speaking only about what it measured, it cannot comment on the source."* And: *"If several paths create the same behavior, then behavior is a projection with lossy information."* A markup is exactly such a projection. The Kansas City Fed authors give the economic instance: *"the timing and cross-industry patterns of markup growth are more consistent with firms raising prices in anticipation of future cost increases, rather than an increase in monopoly power or higher demand."* (Glover, Mustre-del-Río and von Ende-Becker, 2023). A 3.4 percent markup growth alongside 5.8 percent PCE inflation can be read as market power, as expected future cost, or as a composition shift; the reading does not select among them.

The Richmond Fed brief makes the same point at the level of profit: *"a high markup at a firm with heavy fixed costs may translate into little or no profit"*, and its conclusion is a source question: *"the right question is not 'Are markups high?' but 'Are profits persistent, and what barrier protects them?'"*. That is the framework's move from a reading to a source-discriminating instrument, arrived at inside economics.

**Refuter:** an instrument, not an argument, that discriminates markup-rising-from-barrier from markup-rising-from-expected-cost at the firm-slot level, and whose readings are stable when the cost classification convention is changed. Until one exists, the markup remains a `specified` reading with no assigned source.

### F3: The question is a union of conditions, not a partition of shares

**Mode: `general` on the union, `specified` on the per-domain instruments. Domains all. Status: triangulated (Fig 9 and the Library of Babel essay; the essay is framework-internal, so one outside witness).**

> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The question bundles at least four conditions: cost reaches the pricing rule (C1); the pricing rule and market position set the pass-through (C2); the cast of firms changes (C3); the channel pools the result (C4). A single lever clears the region where only one condition holds and leaves the intersections standing (Fig 9 :55). The world literature supplies three different levers and no shared fraction: the BIS paper isolates oil cost shocks and pass-through; the Kansas City Fed paper isolates anticipated future cost; the Richmond Fed paper isolates composition and fixed costs; the Roosevelt brief isolates pre-existing markup as a predictor. They are not competing estimates of one quantity; they are instruments pointed at different conditions in the union.

The Library of Babel essay, opened 2026-11-23, states the stop: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually to find their answers and then combine them in a satisfactory way."*

**Refuter:** a single intervention that restores all four conditions across both failure types and leaves no categorically different residue. That would collapse the union into a partition.

### F4: A variance share is a filter for the budget, never a witness for the verdict

**Mode: `general` with a `specified` consequence for any headline percentage. Domains D2, D4. Status: triangulated (Fig 9 and Fig 1, low overlap).**

> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

A decomposition that reports "market power explains X percent of inflation" scores the frame with a quantity the frame also produces (the markup series is estimated from the same price data as the inflation series). It tells you where to look and how to spend the research budget. It is not a verdict on the cause. The Kansas City Fed result is the clean instance: *"markups could account for more than half of 2021 inflation"* is immediately followed by *"However, the timing and cross-industry patterns of markup growth are more consistent with firms raising prices in anticipation of future cost increases, rather than an increase in monopoly power or higher demand."* The share and the source came apart in the same paragraph. The share was a filter; the timing and cross-industry pattern were the witness.

**Refuter:** a variance share that predicts, prospectively and out of sample, which named firm-slot's residual will move under a documented change of regime, with no access to the timing and cross-industry evidence. If one exists, F4's consequence fails.

### F5: The effect of market power changes sign with the residual

**Mode: `specified`. Domains D1, D2, D3. Status: triangulated (Fig 11 and Fig 12, low topical overlap: habitat relations versus bond structures).**

> **"An actor's valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)

The BIS working paper by Kharroubi, Spigt, Igan, Takahashi and Zakrajsek (2023) is a direct empirical instance. Its finding: *"high markups mainly reduce the pass-through of disinflationary oil shocks, while they barely affect that of inflationary oil shocks."* And: *"following a dis-inflationary oil shock, high-markup firms are more likely to raise their markup."* The same structural property, high markup, is a cushion in one residual and neutral or amplifying in another. There is no standing coefficient "the effect of market power on inflation"; there is a relation between a firm's position and the sign of the shock it faces.

The Nikiforos and Grothe piece (INET, 2023) reports the same asymmetry in a different frame: *"Thus, there are two forces that have led to inflation: i) the initial cost-push and ii) the pricing behavior of the firms that protect their profit margins."* Protecting a margin is not a fixed additive contribution; it is a response whose valence depends on what is being protected against.

**Refuter:** a firm-level estimate of the effect of markup on pass-through whose sign and magnitude are invariant across an inflationary shock and a disinflationary shock of comparable size. If found, F5 is false and the effect may be treated as a standing coefficient.

### F6: The firm-to-index crossing is lossy, so the round trip must be measured

**Mode: `specified`. Domains D2, D4. Status: single-source for the structural claim (Fig 4), with a world corroboration from the measurement-dispute literature.**

> **"Only methods cross up. Only head starts come down."** (Fig 4 :22)
> **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."** (Fig 4 :30)
> **"But it means the trip is not reversible"** (Fig 4 :28-29)

There is no method that carries a per-slot pricing residual into an inflation rate without loss: the index weights slots, drops transients and pools readings (Fig 10 :25). The loss is visible in the economics itself. Benkard, Miller and Yurukoglu (2025) write that the De Loecker, Eeckhout and Unger result is *"sensitive to unreported sample restrictions that drop 27% of the available observations"*, and conclude that *"the DEU methodology and data, as they are described in the article, do not support the conclusion that broad-based increases in market power have occurred in recent decades."* The Richmond Fed authors locate the disagreement in *"how firm-level markups are combined into an economy-wide average and how costs are classified, which are measurement choices"*. Those are round-trip gaps `R_T`: what the coarser description cannot hold.

**Refuter:** a firm-to-index aggregation that is invertible for the quantities in question, so that carrying a markup series up to an index and back down reproduces the per-slot series. If one exists, the `R_T` requirement is empty for this quantity.

### F7: Agreement between studies is one evidence pool until provenance is shown

**Mode: `general`. Domains D4. Status: triangulated (Fig 8 and Fig 7, low overlap: union surplus versus room chains).**

> **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."** (Fig 8 :51-52)
> **"same closure, handed along;"** (Fig 7 :12)
> **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"Independence, between two frames, is how little they draw on the same evidence."** (Fig 2 :31)

De Loecker and Eeckhout (2017), Konczal and Lusiani (2022), Nikiforos and Grothe (2023) and the Richmond Fed brief (2026) all use variants of the Compustat markup estimator. They look like four witnesses; they are one evidence pool wearing four names, and their agreement on "markups rose" is the pool talking (Fig 2 :19-21). Benkard, Miller and Yurukoglu (2025) are a genuine low-overlap frame in the sense that they interrogate the construction rather than reuse it, but they draw on the same underlying data, so the disagreement is a correction within a pool, not two independent instruments. The genuinely low-overlap witnesses for this solution are outside economics: Simpson's paradox in statistics and psychology (section 3, W2 and W3), which share no evidence pool with Compustat.

**Refuter:** two studies of the same claim that demonstrably draw on disjoint data, disjoint instruments and disjoint cost classifications, and whose agreement therefore carries independence. If none can be found, F7 stands as a filter on how much weight to give consensus.

### F8: Total markup growth is partly a change of cast, not a change of pricing within a firm

**Mode: `specified`. Domains D2, D3. Status: single-source for the figure mapping (Fig 12 cycle), triangulated with the Richmond Fed world source.**

> **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** (Fig 12 :121)
> **"The habitat is enumerated, never composed."** (Fig 11 :43)

Hasenzagl and Perez (2026) report: *"The markups of firms in business throughout the period did not rise. (If anything, they edged down.) The economy-wide markup rose instead because high-markup firms came to account for a growing share of sales."* The brief adds that most of that shift, roughly 65 percent of the increase, took place among firms already in business, with the remaining 35 percent from turnover, as entrants tended to charge higher markups than the firms they replaced. That is a cycle, not a chain: the output of the selection (the cast of firms) re-enters as input to the aggregate markup. The sign of the loop decides whether the aggregate rises. A question about "how much inflation depends on firms' pricing strategies" that holds the cast fixed has answered a different question from one that lets the cast move.

**Refuter:** a decomposition in which the within-firm markup change accounts for the whole aggregate change across a period with documented entry and exit, and in which the sign of the composition loop is zero. If observed, F8's cycle mapping is wrong.

### F9: Two currencies are being summed into one number

**Mode: `general`. Domains D3, D4. Status: figure-derived (Fig 12), with the economics literature as a corroborating instance.**

> **"A composition costs in two currencies, and they do not add."** (Fig 12 :125)
> **"Bits price the description. Actions price finding out whether it holds. They are in different units, so a system holding one accounting cannot compare them"** (Fig 12 :126)
> **"Summing them into one figure is the error this names, not the fix for it."** (Fig 12 :130)

A headline percentage mixes a description cost (how much of the variance in an index is associated with a markup series) with an action cost (what it would take to change a firm's pricing or a barrier to entry). They are in different units. The Nikiforos and Grothe piece records the same confusion from inside economics: *"Markups (and profit margins) are not equivalent to profit shares"*, and *"Has there been an increase in markups over the last three years? This is an empirical question."* The question "how much" invites the summing error; the figures name it rather than fix it.

**Refuter:** a common unit in which a variance share and a policy action cost are commensurable, with a stated conversion and a ground that pays for it. If supplied, F9 is false.

### F10: No figure line selects a universal percentage

**Mode: `general`. Status: `gap` after a genuine re-census.**

> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)
> **"It cannot say which primitive is missing, because naming it would mean already holding it."** (Fig 13 :135)
> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)

After the census above, no figure line governs the magnitude "X percent of inflation is due to market power". The lines govern indexing (Fig 1), the anchor (Fig 2), the union (Fig 9), the source question (Fig 10 and the source essay), the sign flip (Fig 11), the lost round trip (Fig 4), the evidence pool (Fig 8) and the honest stop (Fig 13). None returns a number. This is a `gap`, and per Fig 13 :134 it is a verdict: *"Unreachable is a verdict here, not a silence,"*. The instrument that would close it is characterized in section 6, but it is not held here.

**Refuter:** a figure line, found by re-census, that directly types a per-slot attribution and fixes its magnitude. No such line was found; if one is produced with a verbatim quote, F10 is withdrawn.

### F11: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per firm-slot, never an economy-wide average without loss | general | Fig 1 :19, :22, :28 | figure-derived |
| The market at the slot is the anchor; the markup is a reading | general | Fig 2 :29, :30, :45; Fig 9 :32 | figure-derived |
| The question is a union of four conditions, not a partition of shares | general | Fig 9 :54, :55, :57 | figure-derived |
| A variance share is a budget filter, not a witness | general | Fig 1 :27; Fig 9 :60 | figure-derived |
| Market power's valence flips with the sign of the shock | specified | Fig 11 :49-51 | triangulated F5 |
| The aggregate markup partly reflects a change of cast | specified | Fig 12 :121; Fig 11 :43 | single-source mapping, world-corroborated F8 |
| The firm-to-index transform is lossy and needs R_T | specified | Fig 4 :22, :28-30; Fig 10 :25 | single-source F6 |
| Citation agreement inside the markup literature is one pool | general | Fig 7 :12, :13; Fig 8 :51-52; Fig 2 :31 | figure-derived F7 |
| The universal percentage | not stated | none | `gap`, unreached, F10 |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* (Seat Map :287, quoted in the exemplar). The shape claim is refuted if any of the following is observed:

1. An aggregate inflation share predicts, prospectively and per named firm-slot, which slot's residual will move, across a change in index composition (breaks F1, Fig 1 :19-22).
2. An instrument discriminates markup-from-barrier from markup-from-expected-cost at the slot, with readings stable under a change of cost classification (breaks F2, Fig 9 :32).
3. A single intervention restores all four union conditions and leaves no categorically different residue (breaks F3, Fig 9 :57).
4. A variance share predicts per-slot moves out of sample without the timing and cross-industry evidence (breaks F4, Fig 9 :60).
5. The effect of markup on pass-through has invariant sign and magnitude across inflationary and disinflationary shocks of comparable size (breaks F5, Fig 11 :49-51).
6. The firm-to-index aggregation is invertible for the quantities in question (breaks F6, Fig 4 :30).
7. Two genuinely disjoint evidence pools produce the same attribution and survive an independence audit (breaks F7, Fig 2 :31).
8. Within-firm markup change accounts for the whole aggregate change across a period with entry and exit (breaks F8, Fig 12 :121).
9. A common unit makes description cost and action cost commensurable and is paid for by the ground (breaks F9, Fig 12 :125-130).
10. A verbatim figure line is found that types and sizes the per-slot attribution (breaks F10).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a market-ground measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of inflation (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Refuse the universal percentage explicitly. Report per-slot residuals and per-condition verdicts separately; a blended "market power share" is a pooled reading (Fig 10 :25) and destroys the diagnostic.
3. Ask, at each handoff, which link the chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
4. Treat every markup estimate as Γ, that is, as a candidate reading whose reach must be tested against the ground, never as the answer (Fig 1 :27).
5. Use the economics literature as a budget filter and as one corroborating witness, not as the verdict. The Compustat-based sources share an evidence pool (Fig 2 :31, :40).
6. Name the instrument that is owed: one that discriminates sources of a markup reading at the firm-slot level. Until it exists, say `gap` rather than producing a number (Fig 9 :32; Fig 13 :134).
7. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
8. Stop at the shape. The framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. What would settle it: the instrument, not more argument

The essay *The Hard Problem is About Source* ends the color example with: *"What the Spectrometer Example Reveals: The answer is unreached until a better instrument exists."* An instrument that cannot distinguish sources *"demonstrates its own inadequacy."* Here the corresponding questions are:

- Does a given markup reading come from a barrier to entry, from overhead recovery, from an expectation of future cost, or from a composition shift? A source-discriminating firm-level design is owed, not another variance decomposition.
- Does the sign of the markup/pass-through relation flip with the sign of the cost shock, as Fig 11 :49-51 predicts and the BIS paper reports?
- Is the firm-to-index transform invertible for the quantities in question? If not, report `R_T` rather than a share.
- **Threshold Test:** does a comparison bond ⋛ hold between a cost-shock molecule and a pricing-response molecule at the slot, or demonstrably not? The Operators table types ⋛ as *"a threshold relation between two quantities"*; whether a firm's position counts as a quantity at that level is a type question, named not hidden.

---

## 7. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, and three essays opened 2026-11-23 (*The Library of Babel*, *The Recursive Self-Improvement Trap*, *The Hard Problem is About Source*).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 6's stop.
- The source essay confirms the simulation status and the source rule quoted in the preamble and F2.

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13's six physical terms to market power | **Retracted, strain S1** | Only fit by renaming a markup a gradient. Re-census: Fig 13 governs the honest stop, not inflation mechanics |
| Called the aggregate price index "the ground" | **Retracted, strain S2** | An index is a pooled reading (Fig 10 :25). Re-census: the slot-level market is the ground; the index is an instrument |
| Treated De Loecker, Konczal, Nikiforos and Richmond Fed as four witnesses | **Retracted as independent, kept as one pool** | They reuse the Compustat estimator; Fig 2 :31 and Fig 7 :13 |
| Read "how much" as a figure-governed magnitude | **Retracted, F10 `gap`** | No verbatim line types the magnitude. Fig 9 :32 returns a kind of thing |
| Wanted to name "market power" as the framework's answer | **Retracted at record level** | A markup is a reading; naming its source is the metamerism the source essay forbids without a discriminator |
| Called F5 a `general` law of all markets | **Narrowed to `specified`** | No ground measurement here pays for the firm-level version; the BIS result is one shock family |
| Used the Roosevelt brief as evidence for market power as a cause | **Narrowed to a union witness** | Its own text says the result *"fits all three of the main explanatory stories"*, which is a union signature, not a verdict |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Fig 1 and Fig 10 are two figures but one framework; triangulation here means low topical overlap, not independent evidence pools |

**Strains sent to the log:** S1 (Fig 13 physical substrate versus market power) and S2 (index as ground versus channel reading), both dissolved by re-census. One live type question: whether a firm's market position counts as a quantity for ⋛ at the composed level; it is recorded in F10's instrument list, not smoothed over. No unresolved strain after re-census.

---

## 8. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :55, :57 plus the Library of Babel bundle passage: it is a union of cost reach, pricing response, cast change and measurement, each with its own instrument.
2. **What is the anchor?** The slot-level market, named in Fig 2 :29. Not consensus, not a markup estimate, not the index alone (Fig 10 :25).
3. **Is the answer in the firm alone?** No. Fig 11 :39-40: capability and pricing power are firm-and-habitat. The pass-through result changes sign with the habitat's residual.
4. **Why does the number fail?** Because it pools slots whose identities change (Fig 1 :19-22; Richmond Fed 2026) and because the reading does not determine the source (source essay; Kansas City Fed 2023).
5. **How does the union stay unbundled?** Four conditions, different instruments, never averaged (Fig 9 :54-57; Fig 9 :60).
6. **Why is the percentage a gap?** Because the framework returns a shape, not a magnitude, and the source-discriminating instrument is not held (Fig 9 :32; Fig 13 :134; Fig 8 :39).
7. **What can be said at the stop?** A shape, four separable verdicts, ten falsifiers, and a named instrument. Not a percentage. *"Unreachable is a verdict here, not a silence,"* (Fig 13 :134) and *"So a search that finds nothing is never a proof of absence."* (Fig 8 :39).

---

## 9. Updated verdict

The shape survives; the requested number does not. Inflation's dependence on firms' market power and pricing strategies is **not a single share**. It is a union of per-slot conditions: a cost-and-expectation shock reaching a pricing rule, a pricing rule and market position governing pass-through, a changing cast of firms, and a measurement channel that pools the result. The figures fix how each condition must be indexed, what may count as an anchor, and why the pooled reading cannot certify its own source. They do not fix a magnitude. The market power reading changes sign with the residual (Fig 11 :49-51), the aggregate partly reflects a change of cast (Fig 12 :121), and the firm-to-index transform is lossy (Fig 4 :30). The universal percentage is a `gap` of the unreached kind, not underivable in principle: an instrument that discriminates sources of a markup reading at the firm-slot level would close it. Mode `specified` on the substantive claims, `general` on the structural shape, not `grounded`. No world source was allowed to flip a verdict; the one apparent conflict, between a rising markup reading and a flat profit share, was returned to the census and re-mapped as a source problem, not used to soften the claim. No unresolved strain remains after re-census.
