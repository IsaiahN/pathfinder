# Figure-grounded audit: ECN-0036, aims of fiscal policy

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, opened 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the economics question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`, and the seat map field guide were opened this session. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines `R = |Γ(b,a) - o′|` per slot s (Formula step 1; Symbols table, `R`: *"The gap between prediction and observation. The central quantity"*). Here:

- **b** is the fiscal authority's belief about the state of the economy, formed from its own history and inherited priors (a Phillips-curve view, a Ricardian view, a chase-the-cycle view).
- **a** is what the authority does: set spending, set taxes, issue or retire debt, change a rule.
- **Γ(b,a)** is what the authority's library predicts will happen: a forecast of employment, inflation, output and debt service.
- **o′** is what actually happens: measured employment, the price level, realized output, the realized borrowing cost and whether the sovereign pays.
- **s** is the slot: a state of the world (boom or bust), a period, a cohort of households. R is indexed by these, never averaged into a single cycle figure.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is not the level of the deficit but **which quantity is allowed to settle R**. The question offers three candidates as if they were rival goals at one level. That is the effect to interrogate. It names no theory, no "sustainability", no "stabilization", no "fiscal anchor". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be an assignment of each candidate to a seat (ground, path constraint, or instrument), plus an instrument that discriminates a failure of one seat from a failure of another. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* The realized outcomes are named: a measurement and a market. Fig 2 :30: *"you push on it, it is not an anchor."* A balanced ledger and a debt ratio move when the government changes its accounting boundary or its spending, so they cannot be anchors. Fig 2 :36: *"An anchor is legitimate when the question is constitutively about it."* A question about what fiscal policy should aim at is constitutively about employment, prices and solvency, not about the ledger. Fig 2 :37-38 adds the axe distinction: human judgment is the right anchor for a question about people and only an instrument for a question about code, and *"instruments can be wrong on axes they do not measure."* The ledger is an instrument for solvency and can be wrong on the employment and inflation axes.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a multi-place relation: authority Γ, action a, measured outcome o′, indexed by state s and ordered by time t. It carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Operators table :29-30) and **comparison** bonds (`⋛`, *"a threshold relation between two quantities"*, Operators table :47-51) for every target. It is not symmetric: the economy is not interchangeable with the authority.
- **Symmetry.** "Balance" is a threshold relation between two flows, not a symmetric conjunction. "Stable debt ratio" is a threshold relation against an accumulated stock. "Employment and price stability" are two thresholds. Operators table :51: *"a goal is a comparison, which is why a vocabulary without it cannot state one."* All three candidates are therefore *goals* in the bond sense; that does not make them peers, because the bonds sit at different levels.
- **Scale.** Three scales are in view: the single period (a budget year), the cycle (a sequence of periods), and the sovereign's intertemporal horizon (the accumulated stock). The membrane between them is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). Mark the balance over the cycle explicitly as an abstraction across scale here, so that the round trip gap R_T is measured rather than assumed (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The fiscal controller** (one authority, one period) | treasury, central budget office, finance ministry, Γ | actions, deficit/surplus, residual reduction | yes: realized per-period outcome against measurement | admitted |
| **D2 The economy as habitat** (population and cycle) | households, firms, prices, business-cycle states | income, employment, price level, output | yes: measured employment and prices; the market as ground (Fig 2 :29) | admitted |
| **D3 The debt stock** (intertemporal constraint) | accumulated debt, creditors, interest rate, growth | debt/GDP ratio, debt service | yes: solvency and realized borrowing cost, a market verdict (Fig 2 :29) | admitted |
| **D4 The rule and convention layer** | rule designers, fiscal councils, legislatures | compliance, credibility, commitment | yes: market-assessed credibility and measured compliance, but this is an instrument, not the ground | admitted as instrument |
| **X1 Balancing the ledger as an end in itself** | the accounting boundary | a balanced number | **no** anchor independent of the government's own accounting choice (Fig 2 :30) | not a ground; absorbed into D4 |
| **X2 Debt-ratio stabilization as the ultimate aim** | the debt/GDP threshold | a fixed ratio | solvency is anchorable, but that is already D3's anchor | absorbed into D3 |

X1 fails the anchor test and is therefore excluded as a ground before any figure line is applied to it. This is a structural exclusion, not a claim that balanced budgets never help.

### 1.3 Partition or union

D1 and D3 overlap: the controller acts on the stock, and the stock constrains the controller. D2 and D4 overlap: rules act inside the habitat, and the habitat decides whether the rule's claim pays. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: (C1) the channel to a paying ground stays reachable (so the stabilizers can work), and (C2) the debt stock stays reachable (so solvency is not lost). A third condition, (C3) the rule keeps renewing its reach from a closure that differs, governs D4. A government failing only C1 and one failing only C2 are not different degrees of one failure; they are different compounds and need different instruments. The essay *The Library of Babel*, opened this session, states the same stop: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the authority read the cycle and the debt service?) → 2 vocabulary (does Γ distinguish a structural from a cyclical deficit, and does it have terms for what the changed situation affords?) → 3 objective (which comparison counts as progress?) → 4 planning → 5 learn and carry. The middle link, the objective, is exactly what the question asks about, and it is the link with no instrument. Most diagnosis effort lands above the break because that is where the measurements already exist (Fig 3 :29-30). The usual failure is not that the treasury cannot plan; it is that it has no term for what the state of the world affords and cannot say what would count as progress there.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs indexing, not the aim |
| 2 The Ground | market and measurement named as anchors; independence vs common pool | decides which candidate can be ground |
| 3 Dependency Chain | the objective link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | methods up, head starts down; lossy transform, R_T | governs "over the cycle" |
| 5 Mint Pipeline | three guards as product; settlement | governs whether a rule can be admitted at all |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs renewal of the rule (C3) |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs a rule that keeps re-running itself |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and source rules |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | conventions that decide outcomes; keep the anchor reachable; channel decay | decisive for C1, C2 and the status of the ledger |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | governs D1, D2 and the turnover of a good rule |
| 12 The Bond | goal is a comparison; stock versus flow; catalyst, cycle | governs the three candidates' bond types |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop |
| Operators table | ⋛ comparison; → sequence; − subtraction; ¬ refusal | type-checks "balance", "stabilize", "prioritize" |
| Symbols table | `R` is the aim; the ground is the anchor | no `R` is stated by any of the three as written |

Strain test applied during this census: an early attempt to map Fig 13's six physical substrate terms directly onto "budget, debt, employment" only fit by calling a budget a kind of energy and a debt ratio a kind of gradient. That is a strain, so Fig 13 does **not** govern fiscal variables. Re-census sent Fig 13 to the honest-stop role only (section 6, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about fiscal policy, `grounded` only if settled by a measurement. None is `grounded`.

### F1: The three candidates do not occupy the same seat

**Mode: `general` with a `specified` consequence. Domains all. Status: triangulated (Fig 2, Fig 10 and the Operators table, three distinct roles).**

> **"a goal is a comparison, which is why a vocabulary without it cannot state one"** (Operators table :51)
> **"a convention that decides an outcome has stopped being one"** (Fig 10 :47)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

All three options are comparisons, so all three are "goals" in the bond vocabulary. But a goal whose threshold is the ground and a goal whose threshold is a convention are different objects. A balanced budget is a constraint on a flow that the government itself produces; the IMF's own definition is *"a long-lasting constraint on fiscal policy through numerical limits on budgetary aggregates"* (IMF Fiscal Rules Dataset, opened 2026-11-22). A rule is a convention. When a convention decides the outcome (when the balanced-budget target overrides the employment outcome), it has stopped being a convention and has become a verdict that no ground has paid for. Fig 2 :25 on the anchor: *"pinned: it does not update on A or B."* The ledger updates when the government acts, so it is not pinned.

The consequence: the question "which of these three should we aim at?" is malformed at one level. The answer is a level assignment, not a choice among peers.

**Refuter:** a demonstrated fiscal regime in which a balanced-budget rule, a fixed debt-ratio rule and an employment/price target all settle the same question at the same level with no difference in which quantity is permitted to decide. That would collapse the seats.

**World bearing (secondary only):** the IMF dataset says rules *"typically aim at correcting distorted incentives and containing pressures to overspend, particularly in good times, so as to ensure fiscal responsibility and debt sustainability."* "Particularly in good times" is precisely the problem: the rule is an instrument to constrain booms, not an aim to replace outcomes. It corroborates the instrument reading and conflicts with treating the balance as the aim. The conflict is returned to the census (F9), not used to flip the verdict.

### F2: Balancing over the cycle is a pooled reading that hides the live slot

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 1, Fig 10 and Fig 4, low overlap: per-slot indexing vs channel decay vs membrane).**

> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"saturated metrics, pooled readings"** (Fig 10 :26)
> **"The transform between scales loses information, and that is the point."** (Fig 4 :27)

"Over the business cycle" means netting the bust against the boom. That is aggregation across the very states that carry the live residual. The debt may fall over a whole cycle while a particular recession slot goes unpaid, and R for that slot is the signal that says where to look. A cycle-average balanced budget has thrown it away. The channel that fails is the reading, not the ground: *"the ground does not decay, the channel does"* (Fig 10 :24) and *"you have lost touch"* (Fig 10 :28).

Fig 12 supplies the bond-level version: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."* (Fig 12 :112). A cycle-average balance is one comparison with no sequence and no per-slot subtraction. It can name a state and cannot name a route to one.

**Refuter:** a documented case in which a strict period-by-period balanced budget leaves measured employment and price stability unchanged across a habitat substitution that removes the ground's payment for what the government does. If it survives, F2 is false.

**World bearing (secondary only):** Auerbach and Gorodnichenko 2012 report *"fiscal policy being considerably more effective in recessions than in expansions"*. If the multiplier is state-dependent, a rule that nets boom against bust is applying one comparison to two different regimes, which is the pooled-reading failure. Abad, Lloyd-Braga and Modesto 2020 find that under a balanced-budget rule with incompressible spending there is *"always ... steady state multiplicity (two steady states) and global indeterminacy"*. That is the direct model result for the instability named here. The QuantEcon tax-smoothing lecture states Barro's result plainly: governments *"sometimes choose not to balance their budgets every period but instead issue debt to smooth tax rates over time."* Three studies, one broad macro-fiscal evidence pool, so one witness, not three (Fig 2 :31).

### F3: The anchor is the realized outcome, not the ledger

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 2 and Fig 1, anchor rule vs only metric).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."** (Fig 2 :29)
> **"An anchor is legitimate when the question is constitutively about it."** (Fig 2 :36)
> **"The ground enters as the only metric."** (Fig 1 :23)

Realized employment, the realized price level and realized debt service are measurements, and the sovereign's ability to borrow is a market verdict. They settle. A balanced ledger and a target ratio are instruments for reading solvency, and *"instruments can be wrong on axes they do not measure"* (Fig 2 :38). A balanced ledger can be right about solvency and wrong about the recession that caused the deficit; that is the metamerism case, a reading that cannot comment on its source.

The essay *The Hard Problem is About Source*, opened this session, gives the mechanism: *"If several paths create the same behavior, then behavior is a projection with lossy information"*, and *"What the Spectrometer Example Reveals: The answer is unreached until a better instrument exists."* A deficit reading is consistent with a stimulus in a bust, a structural overspend, an accounting reclassification, or a tax cut. The reading does not determine the source. Naming "the deficit" as the thing to aim at is the metamerism error.

**Refuter:** an instrument that discriminates, from realized data alone, a deficit caused by a shock from a deficit caused by structural overspend, in real time, and that prospectively predicts which named fiscal slot will fail. Until such an instrument exists, the ledger stays an instrument.

### F4: Debt-ratio stabilization is a keep-reachable constraint, not the aim

**Mode: `specified`. Domain D3. Status: triangulated (Fig 10, Fig 13 and the Symbols table, distinct roles).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"→ keep the anchor reachable"** (Fig 10 :29)
> **"energy"** / **"conserved, finite, directionless alone"** (Fig 13 :13-14)

Debt is an accumulated state: conserved and finite, with no direction on its own. The flow into it is the deficit; the flow out is the primary surplus. A fixed debt-ratio target is a comparison against a threshold on that state, but it does not say how to respond when the denominator collapses in a bust. Fig 10 :29 gives the correct form: keep the anchor reachable. The primary surplus must *respond to* the ratio, not sit at a fixed number.

Bohn 1998 reports *"the U. S. primary surplus is an increasing function of the debt-GDP ratio"* and *"The debt-GDP ratio displays mean-reversion if one controls for war-time spending and for cyclical fluctuations."* Mean reversion conditional on cycles and wars is exactly the state-contingent response, not a fixed target. It corroborates the constraint reading. Note the overlap: Bohn is in the same broad macro-fiscal pool as F2's sources, so it does not add an independent witness.

**Refuter:** evidence that a fixed debt/GDP target dominates a state-contingent primary-surplus reaction function with no loss of employment or price stability across a shock. That would demote the constraint reading.

### F5: Employment and price stability are the ground-facing aims, and they are a union

**Mode: `specified`. Domain D2. Status: triangulated (Fig 9 and Fig 12, union rule vs goal-as-comparison).**

> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)
> **"a goal is a comparison, which is why a vocabulary without it cannot state one"** (Operators table :51)
> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)

"Prioritize employment and price stability" is two comparisons, not one. They can pull in opposite directions, so the instruction is a union that must be unbundled before a lever is chosen (Fig 9 :54-55). A single lever, more spending, clears the region where only the employment condition binds and leaves the inflation intersection standing, because the second condition still binds (Fig 9 :55). Fig 12 :112 says a vocabulary with only ingredients can name a situation and cannot name a route; here a vocabulary with only two targets can name two comparisons and cannot name the sequence that reaches them.

And the framework returns a shape. It cannot say "2 percent inflation" or "the natural rate of unemployment". Fig 9 :32: *"you get a kind of thing, never the answer itself."* The numerical targets are bindings from the policy frame, provenance owed, not outputs of the loop.

**Refuter:** a single instrument that brings both employment and prices to target in every state of the world and leaves no categorically different residue. That would collapse the union into a partition and let one lever stand.

### F6: Renewal of the fiscal rule needs contact with a differing closure

**Mode: `specified`. Domain D4. Status: triangulated (Fig 6, Fig 8 and Fig 7, distinct roles).**

> **"the only operator that moves the wall"** (Fig 6 :14)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."** (Fig 8 :32)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)

A fiscal authority that keeps re-running its rule at different sizes never adds an atom. To keep paying across regimes it must meet closures that differ: other countries' rule designs, independent fiscal councils, new data, shocks the rule was not built for. The IMF Fiscal Rules Dataset covers 123 economies and tracks legal basis, escape clauses and correction mechanisms, which is exactly the imported structure a single authority cannot manufacture from inside its own rule. But an import needs a source gate and a shadow test (Fig 6 :12-13); copying a rule because it is famous is prestige, not provenance.

**Refuter:** a fiscal authority that renews its reach purely by composing inside its own closure, with no new atom from a differing closure, and still passes the ground test across a change of regime. That breaks idempotence and F6 with it.

### F7: "Over the cycle" is a lossy condensation with a measured gap

**Mode: `general`. Domains D1, D4. Status: triangulated (Fig 4 and Fig 5).**

> **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."** (Fig 4 :30)
> **"The gap is not an error to eliminate."** (Fig 4 :31)
> **"Only methods cross up. Only head starts come down."** (Fig 4 :22)

Carry the shorthand "balance the budget over the cycle" up (T_A): it becomes "keep the books balanced on average". Bring it back down (T_E) into a specific recession: it tells the treasury to run a surplus while the ground is weak. Three things are lost in the trip: the state of the slot, the per-period measurement of employment and prices, and the direction of the primary-surplus response. R_T is nonzero. Treating "balance over the cycle" as identical to "keep the ground reachable" is the dead-reckoning error Fig 4 :30 names. The full enumeration is in `11_audit.md` section 4.

### F8: Internal agreement about a fiscal rule is not evidence

**Mode: `specified`. Domain D4. Status: triangulated (Fig 7 and Fig 2).**

> **"same closure, handed along;"** (Fig 7 :12) **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)

A committee of fiscal economists who all read the same IMF working papers and agree that a rule is "credible" is one frame wearing many names. The seat map states the rule directly: *"High correlation is disqualifying for a verdict and efficient for a convention"* (Seat Map :163), and *"an interest in the outcome is unavoidable, an interest in the reading is disqualifying"* (Seat Map :171). A fiscal council whose members are selected for agreement has been authored rather than selected by the residual (Fig 10 :73-79).

**Refuter:** two fiscal-forecasting institutions with demonstrably disjoint data, training and incentives whose agreement prospectively predicts a rule failure that neither predicted alone. That is triangulation; agreement within one pool is not.

### F9: Conflict between the fiscal-rules literature and the figures, and how it was resolved

**Mode: `general`. Status: figure-governed.**

The IMF definition of a rule as a long-lasting numerical constraint *"correcting distorted incentives and containing pressures to overspend"* reads, at first pass, like an agent-only improvement: fix the rule, expect the outcome. Fig 11 :40 says an improvement that does not change contact changes nothing. A conflict between world and figures sends the derivation back to the census; it never flips the verdict. Re-census R2 in section 6 resolves it: the rule is mapped to Γ, the library operand inside the controller, and "containing overspend" is re-read as a change of contact with the creditor frame. Under that mapping the IMF finding corroborates D4 as an instrument and no longer conflicts with D1/D2. The mapping is recorded as an import from the policy frame with no shadow test for the fiscal question, so it carries zero evidentiary weight until one is supplied (Fig 6 :23; Fig 8 :50-52).

The resilience literature supplies a low-overlap warning that corroborates the method rather than the verdict. Allison and Hobbs 2004 describe a *"rigidity trap"* in which a social system becomes *"highly connected, rigid, and inflexible"*, and their Table 1 proposition: *"Vulnerability increases as sources of novelty are eliminated and as functional diversity and cross-scale functional replication are reduced."* That matches Fig 7 :36 and Fig 6 :23 with no shared evidence pool with macro-fiscal policy. It refuses the tempting reading that a more rigid rule is a safer rule.

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per state and per period, never a cycle average | general | Fig 1 :19, :22 | figure-derived |
| Realized outcomes are the anchor, the ledger is an instrument | specified | Fig 2 :29, :36; Fig 1 :23 | triangulated F3 |
| The three candidates occupy different seats, not one level | general with specified consequence | Fig 10 :47; Operators :51; Fig 9 :60 | triangulated F1 |
| Cycle balancing is a pooled reading that hides the live slot | specified | Fig 1 :22; Fig 10 :26; Fig 4 :27 | triangulated F2 |
| Debt ratio is a keep-reachable constraint on a stock | specified | Fig 10 :24, :29; Fig 13 :13-14 | triangulated F4 |
| Employment and price stability are a union of two comparisons | specified | Fig 9 :54, :55, :57; Operators :51 | triangulated F5 |
| A rule renews only by import from a differing closure | specified | Fig 6 :14, :23; Fig 8 :32 | triangulated F6 |
| Numerical targets and optimal rule design | not stated | none | gap: framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule, *"a falsifier written before the run is a design instrument, not only an honesty device"* (Seat Map :287). The shape claim is refuted if any of the following is observed:

1. A strict balanced-budget rule leaves measured employment and price stability unchanged across a habitat substitution that removes the ground's payment for government action (breaks F2 and F3, Fig 1 :22, Fig 2 :29).
2. A fiscal authority keeps the same closure for two regimes and keeps passing the ground test with no import from a differing closure (breaks F6, Fig 6 :23, Fig 8 :32).
3. Two fiscal frames with a demonstrably shared evidence pool produce a prospective prediction about a rule failure that later proves correct, and their agreement is treated as corroboration (breaks F8, Fig 2 :40).
4. A fixed debt/GDP target dominates a state-contingent primary-surplus response with no loss of stabilization across a shock (breaks F4).
5. One instrument brings both employment and prices to target in every state and leaves no categorically different residue (breaks F5, Fig 9 :57).
6. Fig 13's six terms are derived from five of them, or closure is not idempotent inside a closed set (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a measured, prospective, per-state reading has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of fiscal rules (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Stop asking which of the three to "aim at". Ask which quantity is permitted to decide, and record the answer per domain (F1).
3. Keep C1 (channel reachable) and C2 (stock reachable) separate in every report. A blended "fiscal score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
4. Replace "balance over the cycle" with a per-state reading: does the primary surplus respond to the ratio and to the state of the world? That is the instrument Fig 3 :27 says is missing.
5. Treat any fiscal rule as Γ, a candidate library whose reach must be tested against the ground, never as the answer (Fig 1 :27).
6. Probe the independence of forecasters and councils. Agreement from one evidence pool is a convention, not a witness (Fig 2 :40; Seat Map :163).
7. Use the fiscal-rules literature as a budget filter and one corroborating witness, not as the verdict. Bohn, Auerbach and Gorodnichenko, Abad et al. and the IMF papers share a broad macro-fiscal pool (Fig 2 :31).
8. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
9. Stop at the shape. Do not name the inflation target, the natural rate, or the debt threshold; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources opened after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, and the essays *The Library of Babel*, *The Recursive Self-Improvement Trap* and *The Hard Problem is About Source* (all fetched 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop.
- The seat map confirms the mode rule at :281: *"An unmeasured quantity is a specification of what to measure and is worth having, it is not a verdict."*
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13 six-term substrate to budget, debt and employment | **Retracted, strain S1** | Only fit by renaming debt as a kind of energy. Re-census: Fig 13 governs the physical substrate and the honest stop, not fiscal variables |
| Treated the IMF definition of a rule as straightforward corroboration | **Conflict, re-census R2** | Rule as agent-only fix vs Fig 11 :40. Resolved by mapping the rule to Γ and "containing overspend" to a change of contact; see F9. Verdict unchanged |
| Read the three options as three rival goals | **Retracted at census level** | Operators table :51 makes each a comparison, but Fig 10 :47 and Fig 2 :29 put them at different levels. Re-census to a seat assignment, F1 |
| Planned to name a numerical debt threshold or inflation target | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer. Targets are policy-frame bindings, provenance owed |
| Wanted to call Fig 11 :40 a `general` law about all fiscal authorities | **Narrowed to `specified`** | Structural claim; no prospective measurement pays for the fiscal-level version here |
| Used the resilience sources as fiscal evidence | **Narrowed to mechanism-shape corroboration** | They are social-ecological, not a fiscal ground; they corroborate the rigidity and import mechanisms only |
| F10 row "numerical targets and optimal rule design" | **Marked `gap`** | The source essay's metamerism rule: a reading *"cannot comment on the source"*; what is owed is a discriminator, not a name |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Three figures, but one framework; triangulation here means low topical overlap, not independent evidence pools |

**Strains sent to the log:** S1 (Fig 13 applied to fiscal variables), resolved by re-census; S2 (calling realized employment "the ground" while employment plainly moves under policy), resolved by Fig 2 :29-30 and Fig 11 :73: the habitat updates, the ground is what settles, and the anchor is the realized measurement at the moment of settlement, not the target value. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of channel maintenance, stock reachability and rule renewal, each with its own loop and instrument.
2. **What is the anchor?** Realized outcomes, measurement and market, named in Fig 2 :29. Not the ledger, not internal agreement (Fig 1 :27).
3. **Are the three options peers?** No. Operators :51 makes them comparisons, but Fig 10 :47 makes a convention that decides an outcome a failure, and Fig 2 :36 requires the anchor to be what the question is about.
4. **Why does "over the cycle" fail?** It pools the states (Fig 1 :22), loses the channel reading (Fig 10 :26) and carries a nonzero R_T (Fig 4 :30).
5. **What is the debt ratio?** A conserved stock (Fig 13 :13-14) whose anchor must be kept reachable (Fig 10 :29) by a state-contingent surplus response, not a fixed target.
6. **What do employment and price stability require?** Unbundling, because two comparisons in two conditions are not one problem (Fig 9 :57), and a shape, not numerical names (Fig 9 :32).
7. **What can be said at the stop?** A seat assignment, three conditions, instruments for each, and six falsifiers. Not the optimal rule, not the numerical targets, not a `grounded` answer. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The three candidates are not rival aims at one level. The shape that survives is: **employment and price stability are the ground-facing aims and the question is constitutively about them, but they are a union of two comparisons with different instruments; the debt ratio is a keep-reachable constraint on an accumulated stock and must be met by a state-contingent primary-surplus response; the balanced budget is an instrument, a convention that must never be allowed to decide the outcome, and "balancing over the cycle" is a pooled reading that hides the live state.** Each verdict is kept per domain and never averaged. Mode `specified`. Which numerical targets or rule design are optimal is a `gap`, not a hidden answer: the framework returns a shape, and the source-discriminating instrument that would name the numbers is not held here. No world source was allowed to flip a verdict; the one genuine conflict (the rule as agent-only fix) was returned to the census and re-mapped. No unresolved strain remains after re-census.
