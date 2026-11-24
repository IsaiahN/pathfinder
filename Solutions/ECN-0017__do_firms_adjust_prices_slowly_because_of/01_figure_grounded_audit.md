# Figure-grounded audit: ECN-0017, costs and contracts versus strategic price setting

**Mode of this document: `specified`, with `general` on the structural shape.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." No claim here is `grounded`.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, opened 2026-11-23: "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself." No price spell data were recomputed, no markup series were fitted, no firm interview was conducted. This document is checked for internal consistency against the figures. It cannot settle the economics question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session; cite as `Fig N :line`. Also `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/figures/THE_FORMULA.md`. World sources are secondary, are opened in full, and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines `R = |Γ(b,a) − o′|` per slot `s` (Formula step 1; Symbols table, `R`). Here:

- **b** is the price-setter's belief about what buyers will pay and what rivals will do, formed from past prices, observed demand and inherited pricing habits.
- **a** is what the firm does: leave the price, reset it, change a markup, pass through a cost, shelter a margin, or wait for information.
- **Γ(b,a)** is what the firm's library of pricing routines predicts will happen to its own sales, margin and share if it acts.
- **o′** is what the market actually returns: the realized transaction price, the realized volume, the realized rival response, the realized index contribution.
- **s** is the firm indexed also by time `t`. R is indexed by firm and by time, never aggregated into one economy-wide speed without saying what was thrown away.

> Fig 1 :19 "The residual is indexed by object slot, not aggregated."
> Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."
> Fig 1 :28 "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."

The observation to explain is a **price spell**: the price at slot s remains unchanged for an interval while the state around it moves. The question asks for the source of that stillness. It offers two candidate names: (A) an obstacle in the adjustment channel, the cost of repricing or a contract that fixes the price; (B) a choice, a strategic response to rivals or to the information others hold. Stated as a residual: *why does the per-slot gap between the price the firm's routine would set and the price the market returns stay at zero through a spell, and which condition is load-bearing in that slot at that moment?* This names no menu cost, no contract, no kink, no inattention. Those are candidate names, withheld until the census.

**Bind the sought-for shape as an ordinary term before the run** (Formula, "Direction"): the answer would be (i) a set of conditions whose conjunction governs the per-slot price residual, (ii) the bond type of each condition so an obstacle is not mistaken for a feedback loop, (iii) an instrument that discriminates the source at the moment of the price decision, and (iv) an account of what the spell-distribution loses when pooled into a frequency of price change. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 3 can fire on it.

**Anchor test.** Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." The same line names "A measurement, an experiment, a counter, a market, a patient outcome." The market at the slot, that is the realized transaction price and realized rival response, is a nameable anchor. The published frequency of price change is not: it is a pooled reading assembled by a channel (Fig 10 :25 "stale percepts, dropped transients, saturated metrics, pooled readings"). Fig 2 :30 "If it moves when you push on it, it is not an anchor." A classification of "why the price was slow" moves when the interviewer's question or the contract taxonomy moves, so it is an instrument, not an anchor.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry and scale of R

- **Arity.** R is at least a four-place relation: belief `b`, action `a`, realized outcome `o′`, slot `s`, ordered by time `t`. It carries an **ordered** bond (`→`, sequence: "A then B; B needs A to have happened", Fig 12 :72) because a cost or demand change precedes the pricing decision. It carries a **comparison** bond (`⋛`, Fig 12 :87 "a threshold relation between two quantities") because the decision to reprice is "expected benefit larger than adjustment cost". It carries a **cycle** when rivals' responses re-enter the focal firm's belief (Fig 12 :121). It is not symmetric: the firm and the market are not interchangeable.
- **Symmetry.** A spell is a duration, and durations are ordered by time. The comparison of benefit with cost is not a symmetric conjunction of two presences (Fig 12 :85-89). "Slow" is a threshold reading of a distribution, not a physical stock.
- **Scale.** Three scales are in view: the single price-setter's loop (Fig 4, one-agent panel); the population of firms and the index that ranks what they produce (Fig 4 :5 "many agents, a shared library, and something that ranks what they produce"); and the time channel over which a repricing becomes an inflation statistic. The membrane is Fig 4 :21 "Not a wall: a filter with a direction." The transform is lossy, so the round trip `R_T` must be measured, not assumed (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The firm pricing loop** (one agent, one scale) | managers, pricing routines, the firm's Γ, buyers | price quotes, markups, margin protection | yes: the realized transaction price and realized marginal cost at the slot | admitted |
| **D2 The market habitat and the index** (population) | firms, rivals, consumers, input suppliers, monetary authority | survival, share, price level | yes: realized market outcomes, the market as ground (Fig 2 :29); the index is a pooled reading of it | admitted |
| **D3 The cost and contract structure** (composition inside and across firms) | marginal cost, overhead, fixed cost, input prices, staggered contracts, expected future cost | cost changes, pass-through, repricing cost | yes: realized cost data and contract terms; the cost of a repricing is measurable in principle | admitted |
| **D4 The strategic interaction structure** | rival firms, oligopoly or monopolistic competition, price leadership | rivals' price responses, strategic complementarity, kinks | yes: realized rival price moves, which are a different reading from the focal firm's own cost | admitted |
| **D5 The information and attention channel** | price-setters, information-acquisition cost, plans | information, updates, attention | yes: the realized state versus the state the firm acted on; sticky information is an instrument-level fact | admitted |
| **D6 The measurement channel** (across time) | price statisticians, CPI collectors, interviewers, contract taxonomists | contact with the ground | yes: the ground persists while the channel decays (Fig 10 :24) | admitted |
| **X1 "The firm's reason" as a directly observed cause** | a manager | a disposition | **no** anchor independent of the price reading and the manager's own report | not a domain yet |
| **X2 "Menu cost versus strategy" as one scalar dial** | an industry | a concentration or rigidity statistic | measurable only as a reading of D3 and D4; the source of the reading is not fixed by it | absorbed into D3 and D4 |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that firms never weigh costs or rivals. X2 is re-mapped: the two candidate causes are not opposite ends of one dial with a missing scale reading. They are different bonds with different anchors (sections 4 and 5), and a single statistic cannot sit between them.

### 1.3 Partition or union

D1 and D3 overlap: the pricing rule lives inside the firm loop and the cost structure is what it composes against. D1 and D4 overlap: the pricing rule responds to rivals whose own loops are running. D1 and D5 overlap: the rule uses information that may be stale or costly to acquire. D2 and D6 overlap: an index is built inside the habitat from readings that the channel carries. The whole question is a **union**, not a partition.

> Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."
> Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
> Fig 9 :56 "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."
> Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

The unbundled conditions are: (C1) a cost or contract state reaches the firm's pricing rule; (C2) the adjustment cost creates a band in which no repricing pays; (C3) rivals' anticipated responses create a band in which no repricing pays; (C4) the information needed to reprice has not arrived or has not been attended to; (C5) the measurement channel pools the resulting spells into a frequency. A slot failing only C2 and a slot failing only C3 are not different degrees of one failure; they are different compounds requiring different instruments. The world literature corroborates the union. The Wikipedia *Nominal rigidity* article, opened 2026-11-23, records that models "can be classified as either time-dependent, where firms change prices with the passage of time and decide to change prices independently of the economic environment, or state-dependent, where firms decide to change prices in response to changes in the economic environment." It then records that sticky-information models have no nominal rigidity in prices, which is "at odds with the empirical evidence on prices," and that this "has led to attempts to formulate a 'dual stickiness' model that combines sticky information with sticky prices." Two mechanisms coexisting in one model is a union signature, not a partition into exclusive shares.

### 1.4 Dependency order (Fig 3)

> Fig 3 :20 "The chain is ordered by dependency, not by importance."
> Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at."
> Fig 3 :29 "Most improvement effort in practice lands above the break, because that is where the measurements already exist."

Order for this question: 1 perception (can the observer read the realized price, cost, contract terms and rival price at the slot?) → 2 vocabulary (does the economist's Γ have terms distinguishing repricing cost, staggered contract, strategic complementarity and information lag?) → 3 objective (what would count as an answer: a per-slot source classification or an economy-wide share?) → 4 planning → 5 learn and carry. The middle link is where this question breaks. The published literature has excellent terms for a price spell and for a menu cost, but the objective "is it costs or is it strategy?" is a pooled comparison over sources that are read from the same price path. The instrument that would carry a per-slot source verdict into a general claim is missing, so effort lands above the break.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed and why a single speed loses the signal |
| 2 The Ground | market is a named anchor; independence vs common pool; anchor must not update | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; lossy transform; R_T | governs the firm-to-index crossing |
| 5 Mint Pipeline | three guards as a product; settlement; "nothing new here" | governs whether a named cause can be admitted as a term |
| 6 Closure / Reachability | import is the only operator that moves the wall; instruments improved from worse ones | governs the need for a source-discriminating instrument |
| 7 Room Chain | same closure handed along; fidelity times ground pressure | governs citation chains in the price-setting literature |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs source independence and "search that finds nothing" |
| 9 Leave / Arrive | union vs partition; describe the residual first; filters vs witnesses | decisive for the union and the refusal of an either/or share |
| 10 Ground Maintainer | ground does not decay, channel does; pooled readings; keep anchor reachable | governs the index as a pooled reading and the source question |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual; habitat enumerated not composed | decisive for D1 to D5 and for the sign flip across shock regimes |
| 12 The Bond | comparison, sequence, cycle, two currencies that do not add | types the threshold, the strategic feedback, and the single-number error |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop |
| Operators table | ⋛ comparison is a threshold relation between two quantities | types the "repricing pays" decision |
| Symbols table | `R` is the aim; the ground is the anchor | no per-slot `R` is stated by the question as posed |

**Strain test applied during this census.** An early attempt to read Fig 13's six physical substrate terms directly onto "costs and contracts" only fit by calling a repricing cost a kind of energy and a price index a kind of spectrum. That is a strain, so Fig 13 does **not** govern the economics of price setting. Re-census sends Fig 13 to the honest-stop role only (section 7, strain S1). A second strain arose from treating the published price-change frequency as "the ground": a frequency is built by a channel and is a pooled reading, while the ground is what settles. Re-census: the slot-level market is the ground, the frequency is an instrument pointed at it (strain S2). A third strain arose from reading "state-dependent" and "time-dependent" as a clean partition. The sticky-information literature's "dual stickiness" result dissolves it: they are conditions that compound, so the union reading stands (strain S3).

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about price setting, `grounded` only if settled by a measurement here. None is `grounded`.

### F1: R is per firm-slot, so "slowly" is a duration distribution, not one speed

**Mode: `general` with a `specified` methodological consequence. Domains D1, D2, D6. Status: triangulated (Fig 1 and Fig 6, low topical overlap: agent-slot indexing versus instrument improvement).**

> Fig 1 :19 "The residual is indexed by object slot, not aggregated."
> Fig 1 :28 "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."
> Fig 6 :32 "An instrument is not built from a description. It is improved from a worse instrument already returning something."

The Wikipedia *Nominal rigidity* article, opened 2026-11-23, supplies the world-side instance: gasoline and tomatoes vary frequently, while "the price of a bottle of champagne or the cost of a meal in a restaurant" may remain fixed "for many months or even years." The CPI microdata table in that article gives a monthly change frequency of 27 percent for the US (mean spell 3.7 months) against 9 percent for Italy (11.1 months), and 10 percent for Germany (10 months). It then notes that "many price changes are temporary (for example sales) and prices revert to their usual or 'reference price'", and that removing sales "more than doubled the mean spell duration to 11 months" in the US data. The same article warns that "The distribution of price spell durations and its mean are heavily influenced by prices generating short price spells." So a single number "how slowly firms adjust" has already discarded the per-slot signal. The `specified` consequence: any answer that is only an economy-wide frequency cannot say which slot is failing, and two distributions with the same mean can have opposite mechanisms.

**Refuter:** one adjustment speed that predicts, prospectively and per named firm-slot, which price will next reset, across a documented change in the composition of the index and after removing temporary sales. If one exists, F1's consequence is false.

### F2: A fixed price is a reading whose source the reading does not determine

**Mode: `specified`. Domains D1, D3, D4, D5. Status: triangulated (Fig 10 and the source essay, low overlap: channel decay versus metamerism).**

> Fig 10 :25 "stale percepts, dropped transients, saturated metrics, pooled readings"
> Fig 10 :24 "the ground does not decay, the channel does"
> Fig 9 :32 "you get a kind of thing, never the answer itself"

The essay *The Hard Problem is About Source*, opened 2026-11-23, states the mechanism: "the instrument detects green, and says that it's green. However, the instrument is speaking only about what it measured, it cannot comment on the source." And: "If several paths create the same behavior, then behavior is a projection with lossy information." A price that did not move is exactly such a projection. It is consistent with a repricing cost below the gain, with a contract that forbids repricing, with a rival whose response would cancel the gain, and with information that has not yet arrived. The essay ends the example with: "What the Spectrometer Example Reveals: The answer is unreached until a better instrument exists." An instrument that "can't distinguish these cases demonstrates its own inadequacy." The Wikipedia *Nominal rigidity* article corroborates the multiplicity inside economics: "Linking micro data of prices and cost, Carlsson and Nordström Skans (2012), showed that firms consider both current and future expected cost when setting prices." A current cost that has not moved can still produce a new price because an expected future cost moved; the source is not the current reading.

**Refuter:** an instrument that discriminates, at the firm-slot and at the decision moment, repricing-cost-driven stillness from contract-driven stillness from rival-response-driven stillness from information-driven stillness, with readings stable under a change of contract classification. Until one exists, the observed spell remains a `specified` reading with no assigned source.

### F3: The either/or is a union of conditions, not a partition into shares

**Mode: `general` on the union, `specified` on the per-domain instruments. Domains all. Status: triangulated (Fig 9 and the Library of Babel essay; the essay is framework-internal, so one outside witness).**

> Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
> Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

The question bundles at least five conditions: cost and contract state reaching the rule (C1); an adjustment-cost band (C2); a strategic-response band (C3); an information lag (C4); and a measurement channel that pools the spells (C5). A single lever clears the region where only one condition holds and leaves the intersections standing. The Library of Babel essay, opened 2026-11-23, states the stop: "Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually to find their answers and then combine them in a satisfactory way." The economics corroborates from inside: the Wikipedia article records the "dual stickiness" model combining sticky information with sticky prices, and the *Menu cost* article records that Dixon and Hansen "showed that even if menu costs were applied to a small sector of the economy, this would influence the rest of the economy and lead to prices in the rest of the economy becoming less responsive to changes in demand." A small obstacle in one sector changes the strategic response in another: the conditions compound.

**Refuter:** a single intervention that restores all five conditions across both failure types and leaves no categorically different residue. That would collapse the union into a partition.

### F4: The cost-and-contract side is a threshold, not a friction that smoothly slows

**Mode: `specified`. Domains D1, D3. Status: triangulated (Fig 12 and the Operators table, low overlap: bond structure versus operator test).**

> Fig 12 :87 "a threshold relation between two quantities"
> Fig 12 :125 "A composition costs in two currencies, and they do not add."

The Operators table types ⋛ as a comparison: "is it about which is larger, rather than both being present?" The *Menu cost* article, opened 2026-11-23, gives the decision in the firm's own terms: "If Z < B − A, then the menu cost is less than the theoretical increase in profits and adjusting prices to N is economically profitable." It adds: "Daily fluctuations in the economy lead to small shifts in firm structure, supply and demand affecting the profits curve. However, firms do not in turn adjust their prices constantly as Z acts as a buffer, making such small benefits economically unviable compared to the menu cost." That is a threshold bond, not a smooth drag. Staggered contracts are a different instance of the same family: the *Nominal rigidity* article records Taylor, where "firms change prices every nth period," and Calvo, where "price changes follow a Poisson process," and stresses that "the choice of changing prices is independent of the inflation rate" in both. The anchor for these claims is the realized repricing cost and contract term, not the economist's classification of the cause.

**Refuter:** a regime in which the gain from repricing and the cost of repricing are commensurable at every state, so the threshold band has zero width and prices respond smoothly to arbitrarily small shocks. If observed in a named firm-slot, F4's threshold mapping fails there.

### F5: The strategic side is a feedback cycle whose return path is the rival's price

**Mode: `specified`. Domains D1, D2, D4. Status: single-source for the figure mapping (Fig 12 cycle), with a world corroboration from industrial organization.**

> Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."
> Fig 12 :111 "A vocabulary without bonds can name a state and cannot name a route to one."

The Wikipedia *Kinked demand* article, opened 2026-11-23, is the canonical strategic instance: it is "an economic theory regarding oligopoly and monopolistic competition" and "was an initial attempt to explain sticky prices." Because of a "jump discontinuity in the marginal revenue curve, marginal costs could change without necessarily changing the price or quantity." The return path is the rival's anticipated response: rivals do not follow a price increase but match a cut, so the focal firm's own output (a price) re-enters as a constraint on its next decision. That is Fig 12's cycle. The article's *Criticism* section is itself figure-relevant. Stigler "first argues that the kinked demand models are not useful, as Hall and Hitch's model only explains observed phenomenon and is not predictive," and "the kinked demand analysis only suggests why prices remain sticky and does not describe the mechanism that establishes the kink and how the kink can reform once prices change." That is the framework's source question arrived at inside economics: the shape is given, the mechanism that pays for it is not. The article's closing note that "Game theory and models of strategic interaction have largely replaced kinked demand" records the same move toward a mechanism.

**Refuter:** a direct measurement of rival response functions in a named market in which the discontinuity vanishes and the focal firm's price tracks marginal cost within the observed band. If found, F5's cycle mapping is wrong for that slot.

### F6: The valence of each condition flips with the residual

**Mode: `specified`. Domains D1, D2, D3, D4. Status: triangulated (Fig 11 and Fig 12, low topical overlap: habitat relations versus bond structures).**

> Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries."
> Fig 11 :50 "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."
> Fig 11 :51 "No standing list of good actors survives a change of residual."

The *Nominal rigidity* article reports that "Prices change faster and monetary shocks are over faster under state dependent than time." The same repricing-cost structure that holds a price still through a small shock therefore causes a bunch of repricing when the shock is large, and the aggregate response is faster, not slower. The *Menu cost* article reports the same nonlinearity from a different frame: Golosov and Lucas (2007) found "the size of the menu cost needed to match the micro-data of price adjustment inside an otherwise standard business cycle model is implausibly large to justify the menu-cost argument," because such models lack "real rigidity." A cost-only story needs an implausibly large cost unless the strategic and real-rigidity conditions are also present. There is no standing coefficient "the effect of repricing cost on adjustment speed"; there is a relation between the adjustment obstacle and the size and sign of the shock it faces.

**Refuter:** a firm-level estimate of the effect of repricing cost on adjustment speed whose sign and magnitude are invariant across large and small, inflationary and disinflationary shocks of comparable size. If found, F6 is false and the condition may be treated as a standing coefficient.

### F7: Sticky information is a distinct condition, not a renamed menu cost

**Mode: `specified`. Domains D1, D5, D6. Status: single-source for the figure mapping (Fig 10 channel), world-corroborated.**

> Fig 10 :24 "the ground does not decay, the channel does"
> Fig 10 :26 "saturated metrics, pooled readings"
> Fig 10 :52 "Bring a characterised residual, never the source."

The *Nominal rigidity* article is explicit: "Sticky information models do not have nominal rigidity: firms or unions are free to choose different prices or wages for each period. It is the information that is sticky, not the prices." It adds that this "is at odds with the empirical evidence on prices" and that "The lack of sticky prices in the sticky information model is inconsistent with the behavior of prices in most of the economy." The Wikipedia *Rational inattention* article, opened 2026-11-23, states the general case: "when the information required for a decision is costly to acquire, the decision makers may rationally take decisions based on incomplete information, rather than incurring the cost to get the complete information." That is a channel condition with a different anchor from the repricing cost: the realized state versus the state the firm acted on. Collapsing it into "costs and contracts" loses the distinction the figures require, just as calling a saturated metric a decayed ground would.

**Refuter:** an instrument showing that every observed spell disappears when the firm's information set is brought up to date while repricing costs and contract terms are held fixed. If that holds in a named slot, the information condition is not separately load-bearing there.

### F8: The firm-to-index crossing is lossy, so the round trip must be measured

**Mode: `specified`. Domains D2, D6. Status: single-source for the structural claim (Fig 4), with a world corroboration from the measurement literature.**

> Fig 4 :22 "Only methods cross up. Only head starts come down."
> Fig 4 :25 "A recording carried upward looks like knowledge and is a description of one occasion."
> Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

There is no method that carries a per-slot source classification into an economy-wide frequency without loss: the index weights slots, drops transients and pools readings. The *Nominal rigidity* article shows the loss concretely. The mean spell changes from 3.7 months to 11 months when temporary sales are removed; "the reference price can remain unchanged for an average of 14.5 months in the US data." It further shows that averaging over items versus averaging over spells gives different durations for the same two goods. Those are round-trip gaps `R_T`: what the coarser description cannot hold. A claim about "why firms are slow" that is stated only at the index level has crossed a lossy membrane without measuring the gap.

**Refuter:** a firm-to-index aggregation that is invertible for the quantities in question, so carrying a per-slot source classification up to an index and back down reproduces the classification. If one exists, the `R_T` requirement is empty for this quantity.

### F9: Agreement inside the price-setting literature is one pool until provenance is shown

**Mode: `general`. Domains D6. Status: triangulated (Fig 8 and Fig 7, low overlap: union surplus versus room chains).**

> Fig 7 :13 "agreement compounds, evidence does not"
> Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence."
> Fig 8 :50 "Convergent derivation and adopted import look identical in the contents."

Klenow and Kryvtsov (2008), Nakamura and Steinsson (2008), Bunn and Ellis (2012), Álvarez et al. (2006) and the ECB working-paper stream all use variants of CPI price-quote microdata. They look like several witnesses; they share an evidence pool, and their agreement is the pool talking. The Wikipedia *Menu cost* and *Nominal rigidity* articles are derivations of that same pool, not additional witnesses. The genuinely lower-overlap witnesses for this solution are outside that pool: the *Kinked demand* article is an industrial-organization frame, the *Stick-slip phenomenon* article is a physics and tribology frame, and the *Rational inattention* article is a decision-theory frame (though it borders economics). Fig 2 :42 "Buy independence in proportion to the cost of being wrong." Here the cost of a wrong verdict is a wrong account of monetary transmission, so independence is worth buying.

**Refuter:** two studies of the same claim that demonstrably draw on disjoint data, disjoint instruments and disjoint industry classifications, and whose agreement therefore carries independence. If none can be found, F9 stands as a filter on how much weight to give consensus.

### F10: No figure line selects a universal side of the either/or

**Mode: `general`. Status: `gap` after a genuine re-census.**

> Fig 9 :32 "you get a kind of thing, never the answer itself"
> Fig 13 :135 "It cannot say which primitive is missing, because naming it would mean already holding it."
> Fig 8 :39 "So a search that finds nothing is never a proof of absence."

After the census above, no figure line governs "firms are slow because of costs and contracts" or "firms are slow because they act strategically." The lines govern indexing (Fig 1), the anchor (Fig 2), the union (Fig 9), the source question (Fig 10 and the source essay), the threshold and cycle bonds (Fig 12), the sign flip (Fig 11), the lost round trip (Fig 4), the evidence pool (Fig 8) and the honest stop (Fig 13). None returns a universal cause. This is a `gap`, and Fig 13 :134 reports it as a verdict: "Unreachable is a verdict here, not a silence,". The instrument that would close it is characterized in section 6, but it is not held here.

**Refuter:** a verbatim figure line, found by re-census, that directly types and settles the per-slot source of a price spell. No such line was found; if one is produced with a verbatim quote, F10 is withdrawn.

### F11: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per firm-slot; "slowly" is a duration distribution, not one speed | general | Fig 1 :19, :22, :28 | figure-derived |
| The slot-level market is the anchor; a fixed price is a reading | general | Fig 2 :29, :30; Fig 9 :32 | figure-derived |
| The question is a union of five conditions, not a two-share partition | general | Fig 9 :54, :55, :57 | figure-derived |
| Repricing cost and contracts form a threshold band | specified | Fig 12 :87; Operators | triangulated F4 |
| Strategic interaction forms a feedback cycle with a rival return path | specified | Fig 12 :121, :111 | single-source mapping, world-corroborated F5 |
| The load-bearing condition changes sign with the shock regime | specified | Fig 11 :49-51 | triangulated F6 |
| Sticky information is a separate channel condition | specified | Fig 10 :24, :26, :52 | single-source mapping, world-corroborated F7 |
| The firm-to-index transform is lossy and needs R_T | specified | Fig 4 :22, :25, :30; Fig 10 :25 | single-source F8 |
| Citation agreement inside the CPI microdata pool is one pool | general | Fig 7 :13; Fig 2 :31; Fig 8 :50 | figure-derived F9 |
| The universal choice of one side | not stated | none | `gap`, unreached, F10 |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: "a falsifier written before the run is a design instrument, not only an honesty device." The shape claim is refuted if any of the following is observed:

1. One adjustment speed predicts, prospectively and per named firm-slot, which price will next reset across a change in index composition and after removing temporary sales (breaks F1, Fig 1 :19-28).
2. An instrument discriminates repricing-cost stillness from contract stillness from rival-response stillness from information stillness at the decision moment, stable under a change of contract classification (breaks F2, Fig 9 :32).
3. A single intervention restores all five union conditions and leaves no categorically different residue (breaks F3, Fig 9 :57).
4. The repricing benefit and cost become commensurable at every state, so the threshold band has zero width and prices respond smoothly to arbitrarily small shocks (breaks F4, Fig 12 :87).
5. Rival response functions lose their discontinuity in a named market and the focal price tracks marginal cost inside the old band (breaks F5, Fig 12 :121).
6. The effect of repricing cost on adjustment speed has invariant sign and magnitude across shock size and sign (breaks F6, Fig 11 :49-51).
7. Bringing the information set up to date while holding cost and contracts fixed removes every observed spell in a named slot (breaks F7, Fig 10 :24).
8. The firm-to-index aggregation is invertible for the quantities in question (breaks F8, Fig 4 :30).
9. Two genuinely disjoint evidence pools produce the same source attribution and survive an independence audit (breaks F9, Fig 2 :31).
10. A verbatim figure line is found that types and settles the per-slot source (breaks F10).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a market-ground measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of price setting (Fig 10 :52 "Bring a characterised residual, never the source.").
2. Refuse the either/or explicitly. Report per-slot conditions separately; a blended "costs versus strategy" share is a pooled reading and destroys the diagnostic.
3. Ask at each handoff which link the chain stops at and whether that was measured (Fig 3 :27). Do not fund above the break.
4. Treat every published frequency of price change as Γ, that is, as a candidate reading whose reach must be tested against the ground, never as the answer (Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces.").
5. Use the economics literature as a budget filter and as one corroborating witness, not as the verdict. The CPI microdata sources share an evidence pool (Fig 2 :31, :40).
6. Name the instrument that is owed: one that records cost, contract term, rival price and information set at the moment of each price decision. Until it exists, say `gap` rather than picking a side (Fig 9 :32; Fig 13 :134).
7. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
8. Stop at the shape. Fig 9 :32 "you get a kind of thing, never the answer itself."

---

## 6. What would settle it: the instrument, not more argument

The essay *The Hard Problem is About Source* ends the color example with "The answer is unreached until a better instrument exists." Here the corresponding questions are:

- At a named firm-slot and at each repricing decision, was the realized repricing cost below the gain from changing price? That is the F4 threshold test.
- Was a contract term binding at that date? That is the C1 condition; the Taylor and Calvo schedules are measurable independently of the price path.
- Did a rival's recent or anticipated price move change the gain from repricing? That is the F5 cycle test.
- Had the relevant information arrived and been attended to? That is the F7 channel test.
- **Threshold Test:** does a ⋛ comparison hold between a gain molecule and an adjustment-cost molecule at the slot, or demonstrably not? The Operators table types ⋛ as "a threshold relation between two quantities"; whether a firm's position counts as a quantity at that level is a type question, named not hidden.
- **Round trip:** does a per-slot source classification survive aggregation to the index, or is the resulting frequency a pooled reading with a nonzero `R_T`?

A single dataset that records all five at the decision moment, drawn from a frame that does not reuse the CPI microdata estimator, would be the lower-overlap instrument the question owes. None is held here.

---

## 7. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, and three essays opened 2026-11-23 (*The Library of Babel*, *The Recursive Self-Improvement Trap*, *The Hard Problem is About Source*).

- The README confirms: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." It confirms the re-census rule: "a reading that makes one contradict another has misidentified its domain, not found a flaw."
- The README's canonical limit: the framework says "what a missing thing would have to look like (a shape, not a name)," then stops where instruments can no longer distinguish, and records the lineage. This governs section 6's stop.
- The source essay confirms the simulation status and the source rule quoted in the preamble and F2.

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13's six physical terms to repricing costs | **Retracted, strain S1** | Only fit by renaming a repricing cost a kind of energy. Re-census: Fig 13 governs the honest stop, not price-setting mechanics |
| Called the aggregate price-change frequency "the ground" | **Retracted, strain S2** | A frequency is a pooled reading (Fig 10 :25). Re-census: the slot-level market is the ground; the frequency is an instrument |
| Read state-dependent and time-dependent pricing as a partition | **Retracted, strain S3** | The sticky-information literature's "dual stickiness" combines them; they are union conditions |
| Treated the kinked-demand and menu-cost stories as competing estimates of one coefficient | **Retracted, kept as different bonds** | One is a cycle with a rival return path (Fig 12 :121), the other a threshold comparison (Fig 12 :87); different anchors |
| Treated the five CPI microdata studies as five witnesses | **Retracted as independent, kept as one pool** | They reuse CPI price quotes; Fig 2 :31 and Fig 7 :13 |
| Read "costs or strategy" as a figure-governed choice | **Retracted, F10 `gap`** | No verbatim line selects a universal source; Fig 9 :32 returns a kind of thing |
| Called F5 a `general` law of all oligopolies | **Narrowed to `specified`** | No ground measurement here pays for the firm-level version; the kinked-demand article is one frame |
| Used the *Menu cost* article's supermarket cost estimate as evidence that menu costs dominate | **Narrowed to a magnitude witness** | It reports a cost per store, not a source attribution for a given spell; it is a filter for the budget |

**Strains sent to the log:** S1, S2 and S3, all dissolved by re-census. One live type question remains: whether a firm's position counts as a quantity for ⋛ at the composed level. It is recorded in section 6, not smoothed over. No unresolved strain after re-census.

---

## 8. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :55, :57 plus the Library of Babel bundle passage: it is a union of cost, threshold, strategic, information and measurement conditions, each with its own instrument.
2. **What is the anchor?** The slot-level market, named in Fig 2 :29. Not consensus, not a markup estimate, not the index frequency alone (Fig 10 :25).
3. **Is the answer in the firm alone?** No. Fig 11 :39: price-setting capability is firm-and-habitat. The rival return path and the sign of the shock change which condition binds.
4. **Why does the either/or fail?** Because the reading does not determine the source (source essay) and because the conditions compound across sectors (Dixon and Hansen as reported in the *Menu cost* article).
5. **How does the union stay unbundled?** Five conditions, different instruments and anchors, never averaged (Fig 9 :54-57; Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict.").
6. **Why is the universal side a gap?** Because the framework returns a shape, not a universal cause, and the source-discriminating instrument is not held (Fig 9 :32; Fig 13 :134; Fig 8 :39).
7. **What can be said at the stop?** A shape, five separable verdicts, ten falsifiers and a named instrument. Not a side. Fig 13 :134 "Unreachable is a verdict here, not a silence," and Fig 8 :39 "So a search that finds nothing is never a proof of absence."

---

## 9. Updated verdict

The shape survives; the requested either/or does not. Slow price adjustment is **not** a choice between an obstacle and a strategy. It is a union of per-slot conditions: a cost and contract state reaching a pricing rule, an adjustment-cost threshold that makes small shocks inert, a strategic feedback whose return path is the rival's price, an information channel that can be stale without the price being sticky, and a measurement channel that pools the resulting spells into a frequency. The figures fix how each condition must be indexed, what may count as an anchor, why the source is not determined by the reading, and why the two candidate causes carry different bonds. They do not fix a universal side. The load-bearing condition changes sign with the shock regime (Fig 11 :49-51), the strategic side is a cycle (Fig 12 :121), the cost side is a threshold (Fig 12 :87), and the firm-to-index transform is lossy (Fig 4 :30). The universal choice of one side is a `gap` of the unreached kind, not underivable in principle: a firm-level, source-discriminating design that records cost, contract, rival price and information at the decision moment would close it. Mode `specified` on the substantive claims, `general` on the structural shape, not `grounded`. No world source was allowed to flip a verdict; the apparent conflict between observed price rigidity and the kinked-demand model's non-predictiveness was returned to the census and re-mapped as a source problem, not used to soften the claim. No unresolved strain remains after re-census.
