# Figure-grounded audit: BUS-0044, growth versus profitability in startups

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, read 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too (intelligence is essentially arrangement). However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the business question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md` and `FIGURES_README_canonical.md` are the usage and mode rules. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). For BUS-0044:

- **b** is the founder's belief about demand, formed from the startup's own early evidence (cohorts, retention curves) and inherited priors (playbooks, investor advice, benchmark ratios).
- **a** is the action under decision: spend to acquire more users, or cut spend to extend runway and approach profit.
- **Γ(b,a)** is what the startup's library predicts will follow: a growth model, a burn model, a "rule of 40" style ratio, or an investors-will-fund-us assumption.
- **o′** is what the ground returns: customers who pay and stay, gross margin collected, cash in the bank, survival.
- **s** is the slot: a cohort, a segment, a product, a period. R is indexed by slot and by time, never by a single blended company metric.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is not "growth is good" or "profit is good." It is why the same growth action reduces R in one company or cohort and increases it in another, and how the founder can tell which case they are in before the cash is gone. A frame that predicts all growth is value creating, or all profit is safety, has a residual here.

Stated as an effect description: *when does spending to grow reduce the gap between what the company predicts customers will do and what they actually do, and what instrument would discriminate a sound growth action from an unsound one before the money runs out?* This names no theory, no "unit economics," no "blitzscaling," no "product-market fit." Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a conjunction of conditions that must both hold for growth to be value creating, plus an instrument that discriminates a failure of one from a failure of the other. It is now bound, so the refuter in section 4 can fire on it. Until bound it predicts nothing and no check in the loop can see it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* The market and the counter are named anchors. Fig 2 :30: *"If it moves when you push on it, it is not an anchor."* A growth rate moves when spend is pushed; a valuation moves when narrative is pushed. Both are instruments at best. Viable anchor: realized retention, collected margin and survival, measured per cohort. Founder confidence, investor enthusiasm, board consensus and internal dashboards are not anchors.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a three-place relation: company library Γ, action a (grow or preserve), market return o′, indexed by cohort s and ordered by time t. It carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) because today's burn constrains tomorrow's options, and a **comparison** bond (`⋛`, *"a threshold relation between two quantities"*, Operators table :46-51) because "creating value" is a threshold, not an absolute. It is not symmetric: the company and the market are not interchangeable.
- **Symmetry.** "Value creating" is a threshold relative to the cost of capital and the alternative use of cash, not an intrinsic property of a growth rate. Persistence is asymmetric in time: a burned runway is not recovered by reversing the hire.
- **Scale.** Three scales are in view: the single founder's step loop (Fig 4 one-agent panel), the population of startups ranked by investors and markets (Fig 4 :5, *"many agents, a shared library, and something that ranks what they produce"*), and the time channel across runway and funding rounds. The membrane is *"Not a wall: a filter with a direction"* (Fig 4 :21) and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so R_T must be measured (Fig 4 :30). A board-deck summary of growth is a recording, not the cohort measurement that produced it.

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The cohort loop** (one agent, one scale) | founder, product, acquired customers | actions and residual reduction per cohort | yes: customers who pay and stay; the market (Fig 2 :29) | admitted |
| **D2 The capital habitat** (population) | founders, VCs, angels, lenders, competitors for capital | cash, runway, valuation, access to the next round | yes: the market for capital, which pays or refuses; a differing closure (Fig 6 :23) | admitted |
| **D3 The value library** (composition inside the firm) | atoms (CAC, retention, gross margin, payback, founder labor) and bonds between them | reach (what can be composed into a durable business), |φ| cost | yes: settlement, *"then check it against the ground, then carry it up"* (Fig 5 :32) | admitted |
| **D4 The runway channel** (across rounds) | instruments, metrics, board decks, burn forecasts | contact with the ground | yes: the ground, *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **X1 "Growth" as a free-floating virtue** | the metric | percentage increase | **no** anchor independent of value creation; moves when pushed (Fig 2 :30) | not a domain yet |
| **X2 "Profitability now" as an absolute rule** | the bank balance | cash preserved | measurable but already inside D4; Fig 11 :46 names conditions as habitat elements | absorbed into D4 |
| **X3 Founder charisma or "vision" as a stand-alone cause** | the leader | persuasion | no anchor independent of what customers and the market pay | not a domain yet |

X1 and X3 fail the anchor test and are excluded before any figure line is applied to them. This is a structural exclusion, not a claim that confident founders never matter.

### 1.3 Partition or union

D1 and D3 overlap: the value library Γ is inside the cohort loop, so their overlap is a compound with its own loop. D2 and D4 overlap: contact with the ground is exercised through the capital market, so that overlap is a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are:

- **C1, the bracket condition:** the link from growth spend to realized customer value is sound and settles against the ground (D1, D3).
- **C2, the channel condition:** the channel to a paying ground stays reachable (D2, D4), so the company is not in the fatal pinch.

A startup failing only C1 (buying growth that does not retain) and a startup failing only C2 (sound unit economics but no runway and no fundable market) are not different degrees of one failure. They are different compounds and need different instruments. *The Library of Babel* states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

The question also splits by **direction**: the "how can they tell" part is upstream of the "when should they" part in dependency order. A detection instrument is a prerequisite for the decision, not a companion to it (Fig 3).

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the founder read cohort retention and cash?) **→** 2 vocabulary (does Γ have terms for what the market affords: payback, retention, margin?) **→** 3 objective (can it say what would count as value-creating growth?) **→** 4 planning (how much to spend, when to hire) **→** 5 learn and carry. The middle link, having terms for what the situation affords and saying what would count as progress, is the one with no instrument in most early startups. Fig 12 :113-115 says a vocabulary holding only ingredients can say what a situation contains and cannot say what would count as getting somewhere from it. Most diagnosis effort lands above the break, where the measurements already exist (Fig 3 :29-30): founders argue about growth rates and hiring plans, not about whether their bracket is sound.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not the answer |
| 2 The Ground | market and counter are named anchors; independence vs common pool | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs the detection-before-decision order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs cohort-to-company transfer and the round trip |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs when growth counts as a new, settled capability |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs capital as a differing closure and its cost |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs "raise another round to fix it" reasoning |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and the shared-evidence-pool warning |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; keep anchor reachable | governs runway failure and metric saturation |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | decisive for D1 and D2 |
| 12 The Bond | two currencies, catalyst, cycle, isomer | governs why a growth engine becomes a spending engine |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop only (see strain S1) |
| Operators table | ⋛ comparison; ¬ negation | governs the threshold and the refusal of "growth is good" |
| Symbols table | R is the aim; the ground is the anchor | no R is stated by growth-first or profit-first slogans |

**Strain test applied during this census.** An early attempt to apply Fig 13's six-term physical substrate directly to "growth inputs" only fit by calling cash a kind of energy and retention a kind of gradient. That is a strain, so Fig 13 does **not** govern the composition of a business model. Re-census sends Fig 13 to the honest-stop role only (section 6, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about startups, `grounded` only if settled by a measurement. None is `grounded`. Triangulation here means two figures with low topical overlap, never two independent evidence pools (Fig 2 :31).

### F1: The question is a union, and detection is upstream of decision

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 9 union rule and Fig 3 dependency order, low overlap).**

Quotes at section 1.3 and 1.4. The "when" question cannot be answered until the "how to tell" question has an instrument. A founder who has not measured cohort-level value creation is deciding under an unbound shape: growth is a preference, not a term, and the loop cannot check its direction (Formula step 2, *"a frame searching for an answer of a given SHAPE holds that shape as a PREFERENCE, not a term"*).

**Specified consequence:** prioritize building the detection instrument over choosing the strategy label. The choice of "growth first" versus "profit first" before C1 is measured is effort above the break.

**Refuter:** a single intervention (for example "cut all acquisition spend") that restores both C1 and C2 across both failure types with no categorically different residue. That would collapse the union into a partition and make F1 false.

### F2: R is per cohort, never a blended growth rate

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 1 per-slot rule and Fig 10 saturated-metric rule, low overlap).**

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"predicates minted, and credibility accrued"** (Fig 1 :26)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"saturated metrics, pooled readings"** (Fig 10 :26)

A blended growth rate is a pooled reading. It is the company scoring itself with a quantity the company also produces. It hides the cohort whose acquisition cost is never repaid, exactly as an industry average hides the live firm-slot (Fig 1 :22). Goodhart's law, read from the social-science measurement literature, is a low-overlap corroboration: *"When a measure becomes a target, it ceases to be a good measure"* (Strathern 1997, via the Goodhart's law reference page). Once the growth-rate target is set, spend moves the metric without moving the ground.

**Refuter:** an averaged growth-rate threshold that predicts prospectively and per named cohort which cohort will create value, with no cohort-level measurement. If one exists, F2's methodological consequence is false.

### F3: The anchor is a counter and a market, not the growth rate or valuation

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 2 anchor test and Fig 1 ground-as-only-metric, low overlap).**

Quotes at section 0. Valuation is a market price, but it moves with narrative and can be inflated by the next-round assumption; Graham's investor-behaviour observation is that *"As a rule their interest is a function of growth"* and that investors *"are so fickle that you can never do more than start to count on them."* That is an instrument that moves when pushed, not an anchor. The retained customer and the collected margin are the counter.

**Refuter:** a company metric that does not move when spend or narrative is pushed and that settles the value question by itself. Under Fig 2 :30 no such metric can be an anchor; if one is demonstrated, the anchor rule is wrong.

**World bearing (secondary only):** Graham's *Default Alive or Default Dead?* (2015) says *"Half the founders I talk to don't know whether they're default alive or default dead."* That is a detection failure at link 1, described independently of the figures. It corroborates F3's instrument requirement but shares the startup-advice pool with the other business sources, so it is one witness.

### F4: Growth creates value when the bracket settles against the ground

**Mode: `specified`. Domains D1, D3. Status: triangulated (Fig 5 mint pipeline and Fig 12 two-currencies rule, distinct roles).**

> **"then check it against the ground, then carry it up"** (Fig 5 :32)
> **"Any one of them at zero stops the mint entirely. Which is why a system that is minting nothing may have nothing wrong with its minting."** (Fig 5 :41)
> **"A composition costs in two currencies, and they do not add."** (Fig 12 :125)
> **"Bits price the description. Actions price finding out whether it holds."** (Fig 12 :126)

In effect terms, a growth dollar is a candidate term φ. It is admitted only if (i) there is positive live mass R⁺_s somewhere (support: some cohort is actually responding), (ii) it composes from what the company already has (reachability), (iii) it is new relative to the library (novelty), and (iv) the bargain pays: *"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before"* (Fig 5 :43). A growth action that buys revenue without buying a retained, paying customer relation adds no settled atom; it is a recording of one occasion, not a capability. The cash spent is an action-price, the ratio on the deck is a bits-price, and the two do not add (Fig 12 :125-127).

**Refuter:** a documented case where acquisition spend creates no newly settled customer relation, no repeatable unit, and no new paying atom in the library, yet the ground keeps paying across a market change. If such cases are common, the settlement condition is not necessary.

**World bearing:** the IÉSEG report on Ben-Hafaïedh and Hamelin (2022) states that *"firms that initially prioritize profitability before growth are more likely to successfully secure both profitability and growth than those focusing primarily on growth."* This reads as a conflict with growth-first advice, but it corroborates F4's shape at the population level: value creating growth is downstream of a sound economic base, not a substitute for it. The conflict is returned to the census in section 6 (R2), not used to flip the verdict.

### F5: Quick loss is channel failure, not market decay

**Mode: `specified`. Domain D4. Status: triangulated (Fig 10 and Fig 7, low overlap: ground maintainer vs room chain).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"you have lost touch"** (Fig 10 :28)
> **"keep the anchor reachable"** (Fig 10 :29)
> **"Progress per handoff has two factors. Zero either and the chain runs in place:"** (Fig 7 :37)
> **"the bracket’s fidelity across the handoff"** (Fig 7 :38)
> **"the ground’s pressure on the room"** (Fig 7 :39)

A startup loses its option to grow quickly when its contact with what pays degrades while the market keeps paying other companies. The named decay modes are stale percepts, dropped transients, saturated metrics and pooled readings (Fig 10 :25-26). "Pooled readings" is the cohort-level version of F2. Graham's "fatal pinch" is the founder-facing name for the same compound: *"The fatal pinch is default dead + slow growth + not enough time to fix it."* A chain of rounds is a chain of handoffs; if bracket fidelity or ground pressure goes to zero, the company runs in place (Fig 7 :37-39).

**Refuter:** a documented startup that loses its ability to fund growth while bracket fidelity and ground pressure both measure high and are not declining. If both stay high, F5's mechanism is not the cause.

### F6: The growth engine changes valence when the residual changes

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 11 and Fig 12, low overlap: habitat relations vs composition structures).**

> **"An actor’s valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)
> **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** (Fig 12 :121)

A paid-acquisition engine is a catalyst if it regenerates retained customers across uses and a spent part if it does not, and nothing in the engine's description records which. When retention falls or the market shifts, the same spend becomes a malfactor without changing anything about the spend. This is the figure-grounded reading of "premature scaling." Graham's note, quoted verbatim in part: *"founders take a small business that isn't really working (bad unit economics, typically) and then scale it up because they want impressive growth numbers"*. The engine is not bad in itself; its valence changed with the residual.

**Refuter:** an acquisition engine whose measured value creation is invariant across a documented change in the company's residual (retention curve, market, or cost of capital). If no such change of valence can be found anywhere, F6 weakens to `general`.

### F7: Renewal of reach requires a differing closure, and capital is one

**Mode: `specified`. Domain D2. Status: triangulated (Fig 6, Fig 8 and Fig 13 in its honest-stop role, three distinct roles).**

> **"the only operator that moves the wall"** (Fig 6 :14)
> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** (Fig 8 :32)
> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)

A startup can optimize its funnel forever and never add a new atom. Capital is an import from a frame whose closure differs: investors price risk, portfolio effects and exit costs, not just customer retention. Norbäck, Persson and Tåg (2024/2025) report that *"VC-backed startups adopt aggressive scaling and research strategies, characterized by high-potential rewards and commensurate risks of failure"*, which is the differing-closure effect stated in the business pool. The import is debited against independence (Fig 6 :24): a plan whose survival depends entirely on the next round has imported an atom it does not control. Graham's *"you can never safely treat fundraising as more than a plan A"* is the practitioner version.

**Refuter:** a startup that renews its reach purely by composing inside its own closure, with no new atom from customers, capital, technology or any differing frame, and that still passes the ground test across a change of habitat. That breaks idempotence and F7 with it.

### F8: The two conditions have different instruments, so a single lever is the wrong tool

**Mode: `specified`. Domains all. Status: triangulated (Fig 9 and Fig 3, low overlap).**

The governing lines are Fig 9 :54, :55 and :57 (quoted in section 1.3).

- A **C1 failure** shows up as pooled cohort readings, acquisition cost that never pays back, a bracket that no longer matches the residual (Fig 10 :26, Fig 7 :38).
- A **C2 failure** shows up as a closure that keeps handing itself the same room ("we just need one more round"), no import that changes what the company can do, and a reach that stops moving while the burn keeps growing (Fig 6 :21, Fig 7 :12). Estrin, Herrmann, Lévesque, Mickiewicz and Sanders (2025) find that *"for all innovativeness levels, new ventures face a tradeoff between speed-to-breakeven and revenue-at-breakeven"*, which is a population-level statement that the two outcomes are distinct and cannot both be maximized by one lever.

A single lever, for example "spend twice as much on growth" or "freeze all hiring," clears the region where only one condition holds and leaves the intersection standing (Fig 9 :55). This is why the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

**Refuter:** one intervention that restores both conditions in both failure types with no categorically different residue left over. That would collapse the union into a partition.

### F9: Never let a filter hand you a verdict

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 9 and Fig 1, low overlap).**

> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

Growth rate, benchmark multiples, the "rule of 40," burn multiple and valuation are budget filters: they decide how much to try and which companies to look at. They are not witnesses for whether a specific growth action created value. Under Fig 1 :26-27, a frame cannot score itself with a quantity it also produces. The IÉSEG authors explicitly caution that their population-level result does not settle the individual case: *"if you are not in a specific type of market where"* blitzscaling makes sense, the recommendation changes. A benchmark cannot be the verdict.

**Refuter:** a benchmark ratio that, without any cohort-level measurement, prospectively identifies which named startup action created value and which did not, across markets. If one exists, F9's methodological consequence is false.

### F10: The universal numeric threshold is a `gap`

**Mode: `general`. Status: `gap` after genuine re-census.**

> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)
> **"Unreachable is a verdict here, not a silence"** (Fig 13 :134)
> **"So a search that finds nothing is never a proof of absence."** (Fig 8 :39)

No figure line yields "grow when growth exceeds X%," "keep going until LTV/CAC exceeds Y," or "default alive is always sufficient." Those are bindings from the venture-finance frame onto slots the figures leave open. The r/K selection analogue (see `06_isomers_and_order.md`) says the same thing from a low-overlap field: which strategy pays depends on whether the environment is unstable or near capacity, and the modern literature treats the dichotomy as a spectrum with contested scope. The missing thing is a source-discriminating instrument: an experiment that separates "growth bought a retained customer" from "growth bought a chart." Characterizable in effect terms, not held here. This is a `gap`, not a hidden answer.

### F11: Conflict from the business pool, and how it was resolved

**Mode: `general`. Status: figure-governed.**

Two business sources pull in opposite directions at the surface. Graham makes growth the route to investor interest and says operating cheaply and growing fast are *"far from the sharp dichotomy many founders assume."* Ben-Hafaïedh and Hamelin report that profitability-first firms are more likely to reach both. A conflict sends the derivation back to the census; it never flips the verdict (master plan section 2). Re-census R2 in section 6 resolves it: the two sources are answering two different slots. Graham's claim is about C2 (keeping the channel reachable in a capital market that prices growth), the IÉSEG claim is about C1 (the base from which value creating growth compounds). Under that mapping both corroborate the union and neither overrides it. Because they share the startup-advice and SME-finance evidence pools, their agreement is one witness, not two (Fig 2 :40).

### F12: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per cohort, never a blended growth rate | general | Fig 1 :19, :22 | figure-derived |
| The anchor is a counter or a market, not a metric | general | Fig 2 :29, :30; Fig 1 :23 | figure-derived |
| Detection is upstream of decision | general | Fig 3 :20, :24, :27 | figure-derived |
| The question is a union, not one lever | general | Fig 9 :54, :55, :57 | figure-derived |
| Quick loss is channel failure, not ground decay | specified | Fig 10 :24, :26; Fig 7 :37-39 | triangulated F5 |
| A growth engine changes valence with the residual | specified | Fig 11 :49-51; Fig 12 :119 | triangulated F6 |
| Reach renewal needs a differing closure, with a cost | specified | Fig 6 :14, :21, :23; Fig 8 :32 | triangulated F7 |
| Benchmarks are filters, not witnesses | general | Fig 9 :60; Fig 1 :26-27 | figure-derived |
| The universal numeric threshold is not stated | not stated | none after re-census | `gap` F10 |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A single intervention restores both C1 and C2 across both failure types with no categorically different residue (breaks F1, F8, Fig 9 :57).
2. An averaged growth-rate threshold predicts prospectively and per named cohort which cohort creates value, with no cohort-level measurement (breaks F2, Fig 1 :19, :22).
3. A company metric is shown that moves neither with spend nor with narrative and settles the value question by itself (breaks F3, Fig 2 :29-30).
4. Growth spend repeatedly fails to settle any new paying customer relation yet the ground keeps paying across a market change (breaks F4, Fig 5 :32).
5. A startup loses its ability to fund growth while bracket fidelity and ground pressure both measure high and non-declining (breaks F5, Fig 7 :37-39).
6. An acquisition engine's measured value creation is invariant across a documented change of residual (breaks F6, Fig 11 :49-51).
7. Reach is renewed purely inside a closed library across a habitat change, with no import from any differing frame (breaks F7, Fig 8 :32).
8. Fig 13's six terms are derived from five of them, or Fig 6's idempotence fails inside a closed set (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a market-ground measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a growth doctrine (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Measure per cohort. A blended growth rate is a pooled reading (Fig 10 :26) and destroys the diagnostic (F2).
3. Build link 2 vocabulary before link 4 planning. Ask what the situation affords and what would count as progress, then decide spend (Fig 3 :24-27).
4. Keep C1 and C2 separate in every board report. A blended "health score" is another pooled reading.
5. Treat capital as an import with a source gate: what atom does the round add that the company could not compose itself, and what does it debit from independence (Fig 6 :23-24)?
6. Use the business literature as one corroborating witness and a budget filter, not as the verdict (Fig 9 :60). Graham, IÉSEG, Estrin et al. and Norbäck et al. are overlapping pools (Fig 2 :31, :40).
7. Stop at the shape. Do not name the universal ratio; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).
8. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and three essays fetched 2026-11-22 (*The Library of Babel*, *The Recursive Self-Improvement Trap*, *The Hard Problem is About Source*).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs F10's stop.
- *The Library of Babel* adds the bundle rule quoted in section 1.3 and the search rule: *"With each new term gained, you narrow the space and deepen your vocabulary."*
- *The Hard Problem is About Source* adds the discriminator argument: *"If several paths create the same behavior, then behavior is a projection with lossy information"* and *"it cannot comment on the source."* This sharpens F3: a growth chart is a projection, and the instrument owed is one that discriminates sources of the reading.
- *The Recursive Self-Improvement Trap* confirms simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* It also confirms the outreach posture: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13 six-term set to growth inputs | **Retracted, strain S1** | Only fit by renaming cash as energy and retention as gradient. Re-census: Fig 13 governs the physical substrate, not a firm's Γ |
| Treated growth-first and profit-first as contradictory world findings | **Conflict, re-census R2** | They answer C2 and C1 respectively. Resolved by union split; verdict unchanged (F11) |
| "The framework returns a shape, not a name" applied to the numeric threshold | **Kept, narrowed** | The README governs a missing primitive; here the missing thing is a discriminator, not a new atom. F10 states the gap as an instrument, not a ban on ratios already in Γ |
| Read Estrin et al. 2025 as a verdict for any single startup | **Retracted as a witness, kept as a filter** | It is a population frontier estimate; Fig 9 :60 forbids a filter handing a verdict |
| Read the r/K analogue as evidence that startups are r- or K-selected | **Narrowed to mechanism-shape corroboration** | The ecology literature treats the dichotomy as a contested spectrum; used only for the dependence of strategy on environment |
| Wanted to call F5 a `general` law about all startups | **Narrowed to `specified`** | Structural claim; no market measurement pays for the startup-level version here |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Fig 9 and Fig 3 are two figures from one framework; triangulation means low topical overlap, not independent evidence pools |
| Naming "default alive" as the answer | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer. Graham's phrase is a business-pool binding, recorded as such |

**Strains sent to the log:** S1 (Fig 13 applied to growth inputs), resolved by re-census. S2 (calling the customer market "the ground" while treating customer preference as moving), resolved by Fig 2 :29-30 and Fig 11 :73: the habitat updates, the ground is what settles and does not. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54-57 plus *The Library of Babel* bundle passage: it is a union of C1 (sound bracket) and C2 (reachable channel), with detection upstream of decision (Fig 3).
2. **What is the anchor?** A counter and a market, named in Fig 2 :29. Not a growth rate, not a valuation (Fig 2 :30).
3. **How is R indexed?** Per cohort and per time, never blended (Fig 1 :19, :22; Fig 10 :26).
4. **What does value-creating growth require?** A candidate action that settles against the ground and adds a repeatable paying atom (Fig 5 :32, :41; Fig 12 :125-126).
5. **How does quick loss happen?** Channel decay and the fatal pinch: saturated metrics, pooled readings, lost touch (Fig 10 :24-29); either factor of Fig 7 :37-39 going to zero.
6. **Why does the growth engine turn on its owner?** Valence is relative to the residual (Fig 11 :49-51); a catalyst may become spent (Fig 12 :119).
7. **Why is capital not a free solution?** It is an import from a differing closure, debited against independence (Fig 6 :14, :23-24; Fig 8 :32).
8. **What can be said at the stop?** A conjunction of two conditions with falsifiers and an instrument-shaped gap. Not a universal ratio, not a `grounded` answer. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **founders should prioritize growth when the bracket from spend to realized customer value is sound and settling (C1) and the channel to a paying ground remains reachable (C2); they should preserve cash and restore contact when either condition fails. Detection precedes decision, R is measured per cohort, and the universal numeric threshold is a `gap` because the discriminating instrument is not held here.** The two conditions are kept separate, never averaged, and each has its own instrument and its own refuter. Mode `specified`. No world source was allowed to flip a verdict: the one genuine surface conflict (growth-first versus profit-first) was returned to the census and resolved as a union split. No unresolved strain remains after re-census.
