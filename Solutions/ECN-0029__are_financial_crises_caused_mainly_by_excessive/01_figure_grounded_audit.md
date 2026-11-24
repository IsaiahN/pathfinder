# Figure-grounded audit - are financial crises caused mainly by one of four things?

**Mode of this document: `specified`, not `grounded`.** It states what a ground reading would have to measure. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (essay, opened this session) says LLMs can *"simulate an approximate answer/output with the formula"* but that *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Figure quotations are verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`. The canonical usage rule is the local `FIGURES_README_canonical.md`. The formula is `FRAMEWORK/figures/THE_FORMULA.md`. World sources are recorded in `10_source_ledger.csv` and were opened this session.

---

## 0. The residual in effect terms

The question as written: are financial crises caused *mainly* by (a) excessive risk-taking, (b) unstable credit growth, (c) bad regulation, or (d) structural features of finance?

Stated as an effect, not as a list of names:

> We want a description of the conditions that precede and accompany financial crises such that, when it is used to predict the incidence and severity of crises across cases, the gap between prediction and observation shrinks and keeps shrinking on cases not used to build it. The word "mainly" asks for a single dominant term in that description.

What an answer would look like, written down and bound as an ordinary term before the run (formula step "Direction"): a **ranking of the four candidates by causal share**, with an anchor that would confirm or refuse the ranking. Binding this now makes the preference refusable. The refuter is in §4.

Two things are being decided at once, and they are kept separate:

1. **Is the question a partition or a union?** If the four are mutually exclusive alternatives, a single winner is well formed. If they are overlapping conditions, a single winner is a category error.
2. **If it is a union, what is the dependency order among the conditions?** Order is not causal share. The figures can speak to order; they cannot speak to share.

Arity, symmetry, scale of R:

- **Arity:** four candidate conditions plus their intersections. The "or" reads as a one-of-four choice; that reading is the first thing under test.
- **Symmetry:** the four are not interchangeable. They name different actors, different currency, and different anchors (§2). The operator "mainly" is an ordered comparison, not a symmetric join.
- **Scale:** individual decisions up through balance sheets and market architecture to the regulatory frame. This is a cross-scale question, so the membrane rule (Fig 4) governs what may be carried between levels.

---

## 1. Figure census

| figure | bearing on this question | verdict |
|---|---|---|
| **1 The Agent** | residual is per slot and must not be aggregated; frame-internal quantities cannot score themselves | "mainly" aggregates across slots; the comparison is not well formed |
| **2 The Ground** | anchor must not update; shared evidence pools disqualify agreement | each school needs its own anchor; agreement among crisis narratives is one pool |
| **3 Dependency Chain** | order by dependency, not importance; a link with no instrument is not a link that works | "mainly" is an importance ranking over links that have not been instrumented |
| **4 The Membrane** | same loop, only actors/currency/anchor change; round trip gap must be measured | the physics six-term instance does not transfer to finance (strain, see §6); the domain-agnostic kernel does |
| **5 Mint Pipeline** | a term that explains one occasion perfectly fails the bargain | a single-cause theory that fits one crisis and not the next is refused |
| **6 Closure / Reachability** | no frame escapes its closure; import adds an atom with a source gate | importing "credit" from economics into the figure vocabulary needs a source gate; it adds no figure atom |
| **7 Room Chain** | agreement compounds, evidence does not | four schools agreeing is a room chain, not corroboration |
| **8 Union Surplus** | two frames with low overlap reach what neither reaches alone; residual first, frame second | supports low-overlap anchors; forbids picking the favourite school first |
| **9 Leave / Arrive** | split a non-shrinking disagreement; unbundle a union; filters are not witnesses | **decisive**: the four are overlapping conditions, not exclusive answers |
| **10 Ground Maintainer** | a convention that decides an outcome has stopped being one; declare stakes | "bad regulation" is a verdict about a convention, and regulators are frames inside the system |
| **11 The Habitat** | contact cascades; direct contact scoping misses effects three steps out; actor valence is relative to the residual | structural features sit further out in the cascade than the directly visible risk-taker |
| **12 The Bond** | same atoms, different bond, different substance; arrangement carries information | analogue only for the union claim; the bond mechanics do not transfer (strain noted) |
| **13 Minimum Viable Set** | six-term physics substrate, cross-kind composition | does **not** govern finance directly; forcing it is a strain, re-census to Fig 4 :19-20 (see §6) |
| **Operators table** | ⋛ comparison is a threshold relation between two quantities | "mainly" is a comparison over four quantities, not a join; no operator selects a winner by share |
| **Symbols table** | R is the aim and is always a slice; the ground is the anchor | no ground reading exists here, so every verdict is `candidate` |

Strained readings are named in §6 and in `11_audit.md`, not smoothed over.

---

## 2. Domain census

### 2.1 R by arity, symmetry, scale

R is the gap between a crisis prediction built from a causal description and the crises that actually occur. Arity four as framed, but the census below shows four domains with four different anchors, so the true arity of the compound is at least four plus their intersections. Symmetry: low, because the currency differs across domains (behaviour, flows, rules, architecture). Scale: the residual is read at the individual decision scale and at the system scale, and the two are connected by a lossy transform (Fig 4).

### 2.2 One line per domain: actors, currency, anchor

**Domain A: excessive risk-taking (behavioural).**
Actors: investors, borrowers, lenders, fund managers. Currency: incentives, expectations, herd behaviour, default. Anchor: observable behaviour and outcomes (asset prices, default rates, leverage decisions). A nameable anchor exists, so this is a domain. First-order and directly visible in the habitat.

**Domain B: unstable credit growth (flow dynamics).**
Actors: banks, lenders, borrowers, credit creation. Currency: growth rates of credit and asset prices, the credit gap. Anchor: credit aggregates and leading indicators; a BIS working page read this session states *"Historically, unusually strong increases in credit and asset prices have tended to precede banking crises."* A nameable anchor exists. This condition operates on the same actors as A but over an aggregation and a time derivative.

**Domain C: bad regulation (rules and conventions).**
Actors: regulators, legislators, agencies, rulebooks. Currency: rules, enforcement, regulatory capture. Anchor: regulatory changes and crisis recurrence after reform, in principle; confounded in practice because the rule changes in response to the crisis, so the anchor partially updates. This is the domain where the anchor test is weakest.

**Domain D: structural features of finance (architecture).**
Actors: balance sheets, leverage, interconnectedness, shadow banking, market structure. Currency: fragility, contagion, systemic risk. Anchor: systemic indicators, interbank exposures, balance-sheet data. A nameable anchor exists. Highest-order in the contact cascade.

### 2.3 Partition or union

A **union of overlapping conditions**, not a partition. This is the decisive figure result (F1). The same borrower can be acting on a behavioural incentive, inside a credit boom, under a captured rule, and on a fragile balance sheet at the same time. Removing one condition does not remove the case.

### 2.4 Order by dependency (Fig 3)

Dependency order, not importance order: first perceive the crisis (measure it), then have vocabulary for what conditions afford, then state what would count as "mainly", then plan a lever, then carry the result. Fig 3 :20-21: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."* The "mainly" comparison sits at the objective link, the middle link that Fig 3 :27 says has no instrument: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

Contact order in the habitat (separate from dependency order): A is direct contact, B and D are second- and third-order contact, C is a frame acting on the habitat. Fig 11 :52: *"Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."*

---

## 3. Findings

### F1 - The question is a union presented as a partition (decisive)

Fig 9 :4-5:

> **"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."**

Fig 9 :54-56:

> **"And when the split lands on a union rather than a partition, unbundle before you search again."**
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."**

Fig 9 :57:

> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."**

The four candidate causes each work well on a different subset of crises and do not shrink when forced into a single ranking. Each is a condition that can bind at once. A lever against regulation clears the region where only rules failed; it leaves the intersection with a credit boom standing because credit still binds. So "which mainly" is not one hard question with four answers; it is a compound that must be unbundled before it is searched. This is corroborated, weakly and from a different pool, by the Wikipedia *Financial crisis* page read this session: *"There is little consensus and financial crises continue to occur from time to time."* Corroboration is secondary; the verdict comes from Fig 9.

**Status: triangulated** (Fig 9 :4-5 and Fig 9 :54-57 are two distinct moves with low internal overlap: one diagnoses a non-shrinking disagreement, the other classifies the bundle). **Mode: `general`** on the structural claim, `specified` when applied to these four candidates.

**Refuter:** show that the four conditions form a partition, that is, that each crisis instance falls under exactly one and that removing the dominant one drives the residual to near zero on out-of-sample cases.

### F2 - "Mainly" aggregates away the live signal

Fig 1 :19 and :22:

> **"The residual is indexed by object slot, not aggregated."**
> **"Aggregating across slots is how a live signal disappears into an average."**

Fig 1 :13:

> **"a global R near zero with one live slot residual is a legal state"**

A single dominant-cause statistic is exactly an aggregation across object slots (here, crisis episodes and conditions). A global fit near zero is compatible with one live slot still carrying the signal. So "which one is mainly responsible" cannot be read off an aggregate; the per-case residual is where the answer lives. The question's own grammar commits the error the figure names.

**Status: triangulated** (Fig 1 :19 and Fig 1 :22 state the law and its failure mode; Fig 1 :13 supplies the legal-state counterexample). **Mode: `general`.**

**Refuter:** produce a single aggregate "main cause" statistic that still predicts held-out crises at least as well as the per-case, per-condition residuals, with no live slot left behind.

### F3 - Four domains, four anchors, no averaging

Fig 2 :29-30:

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."**

Each domain in §2 has a different nameable anchor. Behaviour is settled by observed decisions, credit growth by credit data, regulation by rule changes and outcomes, structure by balance-sheet and exposure data. Verdicts must be kept per domain and never averaged into one "main cause" score. Fig 2 :40, quoted in the README, says what happens when they are: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."* Crisis schools frequently read the same handful of episodes, so their convergence is one evidence pool, not four witnesses.

Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."* The cost of being wrong here is high (policy design), so independent anchors are owed, not optional.

**Status: triangulated** (Fig 2 :29-30 defines the anchor, Fig 2 :40-42 prices independence). **Mode: `specified`** on which anchors belong to which domain.

**Refuter:** exhibit a single anchor that legitimately settles all four domains and does not move when any one of them pushes on it.

### F4 - Structural features sit further out in the contact cascade

Fig 11 :49-50:

> **"An actor's valence is relative to the residual, not a property it carries."**
> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."**

Fig 11 :52 (verbatim, quoted in §2.4): *"Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."*

Excessive risk-taking is the directly visible actor. Credit growth and structural fragility are second- and third-order contact: the risk-taker's balance sheet is connected to everyone else's, so a local decision becomes a cascade. The figure does **not** say structure is "the main cause". It says a direct-contact search will systematically under-weight the further-out conditions, and that actor valence cannot be assigned outside a specific residual. A behavioural frame and a structural frame can each be right about their own slot.

World corroboration, from different pools: the BIS working page *The bank lending channel revisited* read this session says banks *"could act either as absorbers or amplifiers of shocks originiating in the financial system."* Amplifier is a structural role, not a property of the individual. The Wikipedia *Financial crisis* page says *"herding models, based on complex systems science, indicate that it is the internal structure of the market, not external influences, which is primarily responsible for crashes."* These corroborate the cascade ordering; they do not decide it.

**Status: single-source** for the figure verdict (Fig 11 only), with external corroboration from two sources that do not themselves share the figure's evidence pool. **Mode: `specified`.**

**Refuter:** show that a model truncated at direct actors (risk-taking only) predicts held-out crises as well as one that includes balance-sheet connectivity, so the cascade contributes nothing.

### F5 - Regulation is a convention that can decide an outcome

Fig 10 :47:

> **"a convention that decides an outcome has stopped being one"**

Fig 10 :59:

> **"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."**

Rules are conventions: they make a failure statable and carry no claim about the world until an outcome runs against them. When a regulator's rule decides which banks survive, the convention has become an outcome variable and can no longer be treated as a neutral background condition. Fig 10 :60: *"Where a stake cannot be removed, declare it. An undeclared interest is modelled anyway and an unnamed model runs unchallenged."*

The world literature read this session shows the two-way character: the Wikipedia *Financial crisis* page records that *"Some financial crises have been blamed on insufficient regulation"* and that *"excessive regulation has also been cited as a possible cause of financial crises."* The Wikipedia *Regulatory capture* page quotes Stigler: *"as a rule, regulation is acquired by the industry and is designed and operated primarily for its benefit."* So the sign of the regulatory term is not fixed by the figures, and a one-sentence "bad regulation" verdict is a stake, not a result.

**Status: triangulated** (Fig 10 :47 and Fig 10 :59-60). **Mode: `specified`.**

**Refuter:** exhibit a rule regime whose sign and effect are invariant across episodes and whose makers have no interest in the reading, so it can be treated as a fixed background condition.

### F6 - A single-cause term fails the mint bargain

Fig 5 :43-44:

> **"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before. A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."**

A candidate answer of the form "crises are caused mainly by X" is a term that explains one occasion perfectly if X is chosen after the fact. It fails the second half of this line unless it pays on held-out cases. The four-candidate framing invites exactly this failure, because the candidate list is enumerated after the crises are known.

**Status: single-source** (Fig 5). **Mode: `general`.**

**Refuter:** show that one of the four terms pays the bargain prospectively, that is, was fixed before the episodes it explains and reduced the unexplained remainder on those episodes.

### F7 - Filters for the budget, witnesses for the verdict

Fig 9 :60:

> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

Fig 9 :27-28:

> **"describe it before you go looking, or any frame you pick will seem to fit"**

A discipline's preferred cause (behavioural, monetary, regulatory, structural) is a filter on where to look first. It is not a witness for the verdict. The residual must be described before a frame is selected; otherwise any of the four will seem to fit. The Library of Babel essay (opened this session) states the same discipline in different words: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually to find their answers and then combine them in a satisfactory way."*

**Status: triangulated** (Fig 9 :60 and Fig 9 :27-28, with an essay corroboration from a separate pool). **Mode: `general`.**

**Refuter:** show a case where the frame selected first produced a prediction that was then confirmed by an anchor it had not seen, rather than a retrospective fit.

### F8 - Agreement among four schools is a room chain, not corroboration

Fig 7 :13 and :35:

> **"agreement compounds, evidence does not"**
> **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."**

Fig 8 :32:

> **"no search, however long, adds an atom"**

If four schools converge on "credit growth" because each read the same 2008 narrative, the convergence has added no evidence. Fig 8 :50-52: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them."* The ledger in `10_source_ledger.csv` records overlap so a pool is not mistaken for a witness. Note that the two BIS pages share an institution and three Wikipedia pages share a host; those overlaps are declared, not hidden.

**Status: triangulated** (Fig 7 and Fig 8, distinct figures). **Mode: `general`.**

**Refuter:** exhibit two schools arriving at the same dominant factor from genuinely non-overlapping data and instruments, with the provenance of each route recorded.

### F9 - What actually survives

| claim | mode | figure / source |
|---|---|---|
| The four candidates form a union of overlapping conditions, not a partition | `general`, falsifiable | Fig 9 :4-5, :54-57 |
| "Mainly" aggregates away the per-case signal | `general` | Fig 1 :19, :22, :13 |
| Each domain has its own anchor; verdicts stay separate | `specified` | Fig 2 :29-30, :40 |
| Structure is further out in the contact cascade than direct risk-taking | `specified`, single-source | Fig 11 :52 |
| Regulation is a convention that can become an outcome variable | `specified` | Fig 10 :47, :59-60 |
| Which factor dominates in a given crisis | **gap after census** | no figure line governs; needs the ground |

### F10 - Naming a seventh factor or forcing the physics six-term set is a strain

Fig 13 :74:

> **"Everything else is a composition across the two kinds, never within one."**

This line governs the six-term physics substrate in Figure 13. Applied to finance, "the two kinds" would have to be states and structures at a financial stratum, which the figure does not define. Fig 4 :19-20 gives the rule that does transfer: *"The kernel is the part that does not change with size: the same loop and the same rule for naming what worked, whether one agent is running it or a thousand. Only the actors, the currency and the anchor change."* The *They're Scanning Books* essay (opened this session) warns against exactly this transfer: *"A minimum viable set of six terms is a human's careful guess at reality's compression axes; another sensorium's minimum set need not be those six."* So the domain census uses actors/currency/anchor, not space/time/energy/spectrum/gradient/network. Similarly, Fig 12's isomer definition is used only as an analogue in `06_isomers_and_order.md`, with the bond mechanics explicitly not transferred.

**Status: strain resolved by re-census.** **Mode: `general`.**

**Refuter:** derive a financial six-term set, show each member is indivisible from the other five, and show that the finance figures then license the same composition rule without importing the physics labels.

---

## 4. Pre-registered refuter

Written before the conclusion, per the seat rule that a falsifier written before the run is a design instrument.

The union-and-shape claim is refuted if any of the following holds:

1. **Partition refuter.** The four conditions form a partition: each crisis falls under exactly one, and removing the dominant one drives the crisis residual to near zero on out-of-sample episodes. (Kills F1.)
2. **Aggregation refuter.** A single aggregate "main cause" statistic predicts held-out crises as well as the per-case residuals, with no live slot left unexplained. (Kills F2.)
3. **Cascade refuter.** A model truncated at direct actors predicts held-out crises as well as one including balance-sheet connectivity and credit aggregation, so the further-out conditions contribute nothing. (Kills F4.)
4. **Anchor refuter.** One anchor legitimately settles all four domains and does not move when any one of them pushes on it, so per-domain verdicts can be averaged. (Kills F3.)
5. **Prospective refuter.** One candidate term was fixed before the episodes it explains and paid the Fig 5 :43-44 bargain on them. (Kills F6.)

If any fires, the union claim is withdrawn and the question is reopened as a single-cause question. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Stop asking "which one mainly" and ask "which conditions bind, in which episodes, and in what dependency order" (F1, F2). This is a change of question, not a hedge.
2. Keep verdicts per domain with their own anchors; never average them into a league table (F3).
3. Search direct actors and the cascade separately; do not let the visible risk-taker stand in for the whole habitat (F4).
4. Treat regulation as a variable with a declared sign and a declared stake, not as background (F5).
5. Use discipline preference only to allocate the search budget; use independent anchors for the verdict (F7, F8).
6. Report the result as `specified` with a stated gap: the figures narrow the shape, they do not name the dominant factor. The ground does that.

---

## 6. Canonical usage check, retraction and confirmation log

Two sources were read after the first five sections and govern how the figures may be used: the local canonical figures README and the three essays opened this session (*The Library of Babel*, *The Recursive Self-Improvement Trap*, *They're Scanning Books When They Should Be Studying Nature*). The README says the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them"* and that *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* It also gives the canonical limit: the framework reports *"what a missing thing would have to look like (a shape, not a name)"* and stops where instruments cannot distinguish, recording the lineage.

| earlier move | status after the canonical check |
|---|---|
| Initial temptation to apply Fig 13's six terms to finance | **Retracted as strained.** Fig 13 governs the physics substrate. Re-census to Fig 4 :19-20 (actors/currency/anchor). Recorded as F10, not silently erased. |
| Initial reading of Fig 12 isomer as the main result | **Downgraded to analogue.** The bond mechanics do not transfer to causal attribution; only "same atoms, different arrangement, different substance" is carried, and only in `06`. |
| "The figures say structure is the main cause" | **Never asserted, and explicitly refused.** Fig 11 gives cascade order, not causal share. F4 says so. |
| "Four schools agreeing is corroboration" | **Refused throughout.** Fig 2 :40 and Fig 7 :13 govern; the overlap column in the ledger is the operational check. |
| Shape-not-a-name used to forbid naming any factor | **Narrowed.** The README's phrase governs a *missing primitive*. Here all four candidates are already nameable domains with anchors. What is forbidden is naming a *dominant share* the figures do not return, not naming a domain. See `05` §5b. |
| F1 called "decisive" | **Confirmed, with scope.** It is decisive against the question *as framed* (partition), not against the existence of robust single-factor effects in particular episodes. That empirical question is the stated gap. |
| Simulated status | **Confirmed.** The RSI Trap essay's own warning applies to this document. |

### Seven-question recursive derivation (summary)

1. **Is this one question?** No under Fig 9 :4-5; it is a bundle, so split before searching.
2. **Union or partition?** Union under Fig 9 :54-57; intersections still bind after one lever clears a single-condition region.
3. **Can "mainly" be read from an aggregate?** No under Fig 1 :19-22; the live signal is per slot.
4. **Are the four commensurable?** No: four actors/currency/anchor triples (§2), so no average is legitimate (Fig 2 :29-30).
5. **Does any figure name a winner?** No. Fig 11 orders contact; it does not rank causal share. Gap recorded.
6. **Does a frame preference count as evidence?** No (Fig 9 :60); it is a budget filter only.
7. **Can this derivation settle the question?** No (RSI Trap essay); it is a simulated shape check, `specified`, awaiting a ground reading.

### Updated verdict

The union shape survives: a non-shrinking four-way disagreement that must be unbundled, per-domain verdicts with separate anchors, no legitimate global "mainly" statistic, and a contact order in which the visible risk-taker is first and structural fragility several steps out. What does not survive is the question's own framing: there is no figure-licensed single dominant cause. After re-census: one resolved strain (Fig 13 to Fig 4), one analogue explicitly limited (Fig 12), and no hidden strain in the governing figures.
