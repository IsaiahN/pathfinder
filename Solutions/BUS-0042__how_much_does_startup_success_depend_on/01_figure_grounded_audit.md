# Figure-grounded audit: BUS-0042, founder skill versus timing, networks, financing and luck

**Mode of this document: `specified` on the per-domain claims, `general` on the structural shape, `gap` on the universal percentage split. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries a mode. Nothing is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From *The Recursive Self-Improvement Trap*, opened 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the business question it reports on. See `05_what_shape_means.md` section 7.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md` and `FIGURES_README_canonical.md` for the loop and the usage rule. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the founder's belief about what the market will pay for, formed from private history and inherited priors.
- **a** is what the founder does: build, price, hire, pivot, raise, sell.
- **Γ(b,a)** is what the founder's library of routines, skills and assets predicts will happen.
- **o′** is what the market actually returns: survival, revenue, growth, acquisition, or failure.
- **s** is the startup. R is indexed by startup and by time, never averaged into a field-wide rate.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"The ground enters as the only metric."** (Fig 1 :23)

The phenomenon to explain is not the level of success but **which condition is binding at which slot and time**. Observed: two startups with similar ideas and resources diverge; the same founder succeeds in one habitat and fails in another; a strong team misses a window and a weaker one catches it. A frame that reports "skill explains X percent, luck explains Y percent" has a residual here, because it has averaged across the very slots that carry the signal.

Bind the sought-for shape as an ordinary term before the run (Formula, "Direction"): the answer would be a set of separable conditions, each with a nameable anchor and its own instrument, plus an effect description of what a source-discriminating instrument would have to read. Until bound, this shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 5 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* The market is explicitly a named anchor. Fig 2 :30: *"you push on it, it is not an anchor."* Founder self-assessment, investor sentiment, press narrative and analyst consensus move when pushed; they are instruments at best. Viable anchor: realized, per-startup market return and survival, measured independently of what any founder or investor thinks.

**A note on the question's own grammar.** "How much X depends on Y" is a partition request: it assumes the causes can be listed and their shares added. Fig 9 opens with a different test: *"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."* (Fig 9 :4-5). The candidate sources each work well on a different subset of startups. That is a warning to split, not to add. It is applied in section 1.3.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a multi-place relation: founder Γ, action a, market return o′, indexed by slot s and ordered by time t. It carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :71-72) and a **comparison** bond for "success" (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87). "Success" is not a symmetric relation: the market and the startup are not interchangeable, and a lost window is not recovered by reversing the action.
- **Symmetry.** "Superior success" is a threshold relative to competitors and to the market anchor, not an absolute quantity (Fig 12 :85-89; Operators table :46-51). The relation is asymmetric in time. Financing that arrives after the window closes is a different term, not the same term later.
- **Scale.** Three scales are in view: the single founder's step-by-step loop (Fig 4, one-agent panel); the population of startups with *"something that ranks what they produce"* (Fig 4 :5); and the time channel across which timing and luck operate. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21) and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap `R_T` must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The founder loop** (one agent, one scale) | founder, routines, Γ | actions and residual reduction | yes: realized market return on the action | admitted |
| **D2 The venture habitat** (population) | customers, competitors, entrants, suppliers, regulators, conditions | survival, revenue, share, profit | yes: customer choice and willingness to pay; the market as ground (Fig 2 :29) | admitted |
| **D3 The capability library** (composition inside the venture) | atoms (know-how, routines, assets) and bonds between them | reach (what can be composed and done), `|φ|` cost | yes: settlement, *"then check it against the ground, then carry it up"* (Fig 5 :32) | admitted |
| **D4 The time channel** (timing) | the market at a time, windows, the firm's instruments and percepts | contact with the ground | yes: the ground, *"the ground does not decay, the channel does"* (Fig 10 :24); season is a habitat condition (Fig 11 :46) | admitted |
| **D5 Network relations** | founders, ties, bridges, other closures | information and introduction | yes: market payment reached through an introduced contact (Fig 11 :47; Fig 6 :23) | admitted; overlaps D2/D3 |
| **D6 Financing condition** | investors, capital, terms | spendable capital | yes: continued ground payment, not investor agreement (Fig 2 :35; Fig 10 :47) | admitted; overlaps D3/D5 |
| **X1 "Founder skill" as a free-floating property carried by a person regardless of context** | the founder | talent | **no** anchor independent of the market's verdict | not a domain yet |
| **X2 "Luck" as a sixth independent cause with its own anchor** | chance | fortune | **no** anchor separate from the same success reading | not a domain; re-grounded as the remainder in every domain (F6) |

X1 fails the anchor test and is excluded as a free-floating property before any figure line is applied to it. This is a structural exclusion, not a claim that founders never matter. Founder skill is retained as **Γ**, the library operand inside D1 and D3, whose reach must be tested against the ground (F3). X2 fails because "luck" names the part of the reading no source discriminator can assign; re-census assigns it to the remainder that re-enters each turn (Fig 13 :31-32). It is not a co-equal actor with its own ground.

### 1.3 Partition or union

D1 and D3 overlap: Γ is inside the founder loop, so their overlap is a compound with its own loop. D2, D4, D5 and D6 overlap: the habitat, the time channel, networks and financing act on the same contact surface, so their overlaps are compounds too. Timing and luck share the time channel; networks and financing share the import mechanism; founder skill and financing share the reach. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."** (Fig 9 :55-56)
> **"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."** (Fig 9 :57)

The unbundled conditions, stated in effect terms before any theory is chosen:

- **C1:** the venture keeps a channel to a ground that still pays it reachable. Failure signature: the founder stops hearing what the market returns; the reading is stale, saturated or pooled (Fig 10 :24-28).
- **C2:** the venture's reach keeps moving outward through contact with closures that differ. Failure signature: only internal composition, no new atom, the same room handed along (Fig 6 :21, :23; Fig 7 :12).
- **C3:** the window and the habitat conditions still fit the question the venture is asking. Failure signature: the room stays fixed while the question moves (Fig 10 :72).
- **C4:** a source discriminator exists that can tell skill from timing from network from financing from remainder when all produce the same success reading. Failure signature: the reading is a projection with lossy information and cannot comment on the source.

A startup in two conditions is not a harder startup in one; it is a specific compound. This is why the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged. The Library of Babel essay states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually to find their answers and then combine them in a satisfactory way."*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the founder read the market response?) → 2 vocabulary (does Γ have terms for what the situation affords?) → 3 objective (can the founder say what progress would count as?) → 4 planning → 5 learn and carry. The middle link, having terms for what the situation affords and saying what would count as progress, is the one with no instrument in most startup practice. Fig 12 :111-113 says a vocabulary holding only ingredients can name a state and cannot name a route to one, and that *"having terms for what a situation affords was taken for a dictionary and it is a grammar."* Most diagnosis effort lands above the break because that is where the measurements already exist (Fig 3 :29-30).

Two further ordering rules: refuse before mint (Formula step 2), and describe the residual before choosing a frame (Fig 9 :27-28, *"describe it before you go looking, or any frame you pick will seem to fit"*).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs indexing, and refuses the averaged share |
| 2 The Ground | market is a named anchor; independence vs common pool | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; `R_T` | governs founder-to-population transfer |
| 5 Mint Pipeline | three guards as a product; settlement; "nothing new here" | governs when a capability can be admitted at all |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs C2 (networks, financing) |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs timing windows and persistence |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and source rules |
| 9 Leave / Arrive | union vs partition; describe residual first; filters not witnesses | governs the unbundling and the census itself, and refuses the percentage |
| 10 Ground Maintainer | ground does not decay, channel does; keep anchor reachable | governs quick failure (C1) and conventions deciding outcomes |
| 11 The Habitat | capability is agent-and-habitat; conditions and relations; valence relative to residual | decisive for D1, D2, D4, D5, D6 |
| 12 The Bond | ingredient list vs arrangement; catalyst, cycle, isomer; comparison bond | governs why a list of factors cannot be added |
| 13 Minimum Viable Set | remainder re-enters as randomness; set closed, arrangements not; unreachable is a verdict | governs luck as remainder and the honest stop |
| Operators table | `⋛` comparison is a threshold between quantities; `¬` refuses | governs "success" type and the refusal of the partition |
| Symbols table | `R` is the aim; the ground is the anchor | no universal share is an `R`-reducing term here |

**Strain test applied during this census.** Two early readings were strained and sent back to census:

- **S1.** An attempt to map Fig 13's six physical terms onto startup "skill, timing, networks, financing, luck" only fit by calling capital a kind of energy and a network a kind of physical network. That is a strain, so Fig 13 does **not** govern the five business factors as if they were its six primitives. Re-census sends Fig 13 to two proper roles only: the remainder/randomness claim (F6) and the honest-stop claim (F9). Recorded in section 7.
- **S2.** An attempt to read "founder skill" as a free-floating cause with its own anchor failed the anchor test. Re-census grounds it as Γ inside D1/D3 (F3). No figure was strained; the domain was wrong.

No unresolved strain remains after re-census. Other strains are named in section 7, not smoothed over.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about startups, `grounded` only if settled by a market measurement. None is `grounded`.

### F1: The question asks for an averaged share, which is the aggregation error

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 1 and Fig 9, low overlap: per-slot residual vs union/partition rule).**

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

A variance decomposition that reports "skill explains X percent of startup success" scores the frame with a quantity the frame produces. It is a filter for where to look and a budget instrument, not a witness for a cause. The specified consequence: any answer to BUS-0042 that is an average across startups has thrown away the only signal that says which condition is binding at which slot. The justifications readers give for their beliefs are themselves frame-internal output: Lifchits, Anderson, Goldstein, Hofman and Watts 2021 found that participants shown a few selected success examples produced *"causal explanations justifying their decision"* while being strongly swayed in opposing directions by which examples they saw (full text read).

**Refuter:** an averaged, per-startup prospective statistic that predicts which named condition will bind next at a named startup and time, with its shared fraction assignable. If one exists, F1's methodological consequence is false.

### F2: Success is settled by the market, an anchor that does not update

**Mode: `general` on the anchor, `specified` on the startup application. Domain D2. Status: triangulated (Fig 2 and Fig 11, low overlap: anchor rule vs habitat updates).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."** (Fig 2 :29)
> **"you push on it, it is not an anchor."** (Fig 2 :30)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."** (Fig 11 :73)

The market returns or it does not. Investor enthusiasm, founder confidence and press narrative are instruments that can be wrong on axes they do not measure; they are not the anchor. This is the structural reason the question's five candidates cannot simply be listed as co-equal "determinants": most of them are frames ranging against a ground, not the ground itself. Frank 2017 illustrates the inverse error at the individual level: *"success is always rationalized"*, and people feel their success *"was somehow inevitable"* (Michael Lewis, quoted in Frank). Frank's own summary: *"A growing body of evidence suggests that chance events play a much larger role in important life outcomes than most people once imagined."*

**Refuter:** a documented case where the success verdict moves when founder or investor opinion changes while realized market return and survival are unchanged. That would make the ground update on a frame and break F2.

### F3: Founder skill is Γ, not a free-floating stock

**Mode: `specified`. Domains D1, D3. Status: triangulated (Fig 11 and Fig 4, low overlap: habitat vs membrane).**

> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)
> **"it or a thousand. Only the actors, the currency and the anchor change."** (Fig 4 :20)

The habit of answering "how much founder skill" as if skill were a stock a person carries is an agent-only improvement that may not change contact. The same Γ succeeds in one habitat and fails in another. Giones, Gozun and Miralles 2019, using the Kauffman Firm Survey, report that *"the influence of human capital factors are dependent on the context (high vs. non-high technology industries)"* and that *"work experience does not have a statistically significant influence"* in their models. That is a business-pool corroboration of context dependence, not of a fixed founder effect. It **conflicts** with a naive reading of "founder skill" as context-free; the conflict is returned to census and resolved by grounding skill as Γ (section 7, R1).

**Refuter:** a controlled comparison in which a founder's Γ is held constant across a habitat substitution that demonstrably removes or reverses the market's payment for what the founder does, and the success verdict is unchanged. If it survives, F3 is false.

### F4: The five candidates form a union with unassignable intersections, not additive shares

**Mode: `general` on the union, `specified` on startups. Domains all. Status: triangulated (Fig 9 and the Library of Babel essay, but the essay is framework-internal, so one witness on the world side).**

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."** (Fig 9 :55-56)
> **"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."** (Fig 9 :57)

Timing and luck share the time channel. Networks and financing share the import mechanism. Founder skill and financing share the reach. The shared region cannot be assigned to one factor without a cut, and Fig 9 :40-41 says a wrong cut removes the answer and speeds up: *"a wrong cut removes the answer and speeds up so keep every cut ranked and reversible"*. So "X percent skill plus Y percent timing" is a set of cuts, not a measurement. This is the figure-grounded reason the universal number is a `gap` (F9), not a quantity awaiting a better regression.

**Refuter:** a decomposition in which the intersection terms are proven to be zero, that is, every startup fails or passes exactly one condition and the union is a partition. That would collapse F4 and restore additivity.

### F5: Networks and financing are import operators, not percentages

**Mode: `specified`. Domains D3, D5, D6. Status: triangulated (Fig 6, Fig 8 and Fig 13, three figures with distinct roles), with Granovetter 1973 as a genuine low-overlap corroborator.**

> **"the only operator that moves the wall"** (Fig 6 :14)
> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** (Fig 8 :32)
> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)
> **"Two frames together reach what neither reaches alone."** (Fig 8 :45)

A venture can optimize inside its library forever and never add an atom. To reach a new market it needs contact with closures that differ: customers, partners, adjacent technologies, other industries, regulators. Granovetter 1973 provides the low-overlap mechanism: *"those to whom we are weakly tied are more likely to move in circles different from our own and will thus have access to information different from that which we receive."* That is Fig 6 :23 observed in a job market, with no shared evidence pool with management strategy. Financing is the same structural move when it genuinely adds a new atom to reach; when it merely funds more of the same composition it is a head start, not a wall-moving import (Fig 4 :22). An import from a live peer is *"debited against that frame's independence"* (Fig 6 :24), so a warm intros network can be a source of reach and a source of correlation at the same time.

**Refuter:** a venture that renews its reach solely by composing inside its own closure, with no new atom entering from a differing closure, and still passes the ground test across a change of habitat. That breaks idempotence and F5 with it.

### F6: Timing is a habitat condition; luck is the remainder, not a sixth cause

**Mode: `general` on the structural claim, `specified` on startups. Domains D4 and all. Status: triangulated (Fig 13 and Fig 11, low overlap: recursion/randomness vs habitat conditions), with Pluchino et al. 2018 as a low-overlap corroborator.**

> **"And because each turn leaves a remainder (the residual) that re-enters the next, it is also where the randomness comes from"** (Fig 13 :31-32)
> **"the detail a crossing discards reappears above it as noise."** (Fig 13 :32)
> **"conditions: light, water, temperature, season, terrain"** (Fig 11 :46)
> **"When the question changes, the room should change. A room that stays fixed while the question moves is the failure; the correlation is only its symptom."** (Fig 10 :72)

"Season" is literally a habitat condition in Fig 11 :46. Timing is the room the market is in when the venture arrives, and the room should change when the question moves. Luck, by contrast, is not an actor in the habitat. It is the leftover the coarser description cannot hold, re-entering the next turn as noise. This is the exact structural role Fig 13 gives the residual. Pluchino, Biondo and Rapisarda 2018 model this directly with an agent-based toy model: *"almost never the most talented people reach the highest peaks of success, being overtaken by mediocre but sensibly luckier individuals"* and conclude that *"the observed Gaussian shape of P(Cmax|T) is the proof that luck matters more than talent in reaching very high levels of success."* That is a complexity-physics corroboration of luck-as-remainder, not a management-pool witness. Frank 2017 corroborates at the economics level: in a contest where *"98 percent of each contestant's performance is accounted for by talent and effort, only two percent by luck"*, *"the most talented and hardworking of all contestants will usually be outdone by a rival who is almost as talented and hardworking but also considerably luckier."*

The decisive point for BUS-0042: these sources do **not** license a universal "luck explains N percent" either. They show why a reading of the winner cannot comment on its source. The source essay says so in the general case: *"If several paths create the same behavior, then behavior is a projection with lossy information (it cannot define consciousness in full)."*

**Refuter:** a source-discriminating instrument that assigns every bit of a startup's outcome to a named source, prospectively validated across new startups, leaving no remainder. That would refute luck-as-remainder and could restore a meaningful percentage.

### F7: A success reading cannot settle its own source; a discriminator is owed

**Mode: `general` on the limit, `specified` on startups. Domains all. Status: triangulated (Fig 9 and Fig 13, low overlap: describe-the-effect vs unreachable-is-a-verdict).**

> **"your words are borrowed too, so describe the effect"** (Fig 9 :30)
> **"rather than the cause"** (Fig 9 :31)
> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)
> **"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."** (Fig 9 :44)
> **"Unreachable is a verdict here, not a silence,"** (Fig 13 :134)

The readings here are profit, growth, survival and exit. The candidate sources are a protected Γ, a paying habitat, a timed window, an imported network or financing atom, and the remainder. All five produce the same green reading. *The Hard Problem is About Source*, opened this session, gives the mechanism: an instrument reading green *"is speaking only about what it measured, it cannot comment on the source"*, and *"The answer is unreached until a better instrument exists."* The framework's own limit is the same: it returns a shape, and it stops where the instruments can no longer distinguish. Lifchits et al. 2021 supply the cognition-side warning: *"success narratives suffer from selection on the dependent variable. They overwhelmingly analyze successes but ignore failures, an often-decried inferential error"*, and a pre-registered experiment showed that *"even the most compelling success narratives convey little information regarding the true association between a particular feature and success."*

**Refuter:** an instrument that discriminates the sources from the same success reading, with stated accuracy and a prospective test. Until one exists, naming a winner from the reading is the metamerism error the source essay forbids.

### F8: Hindsight and attribution corruption in "how much" answers

**Mode: `specified`. Domain D1 and the research frame. Status: triangulated (Fig 2 and Fig 7, low overlap: coherent drift vs mirror chain).**

> **"they converge, and what they converge on is whoever had the most influence"** (Fig 2 :14-15)
> **"same closure, handed along;"** (Fig 7 :12) **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)

A founder community that retells the same success stories hands itself the same room. Agreement inside it compounds while evidence does not. Gudmundsson and Lechner 2013 report that *"research on cognitive biases is generally affected by survival bias: most studies have focused on cognitive biases among surviving firms alone"* and that *"overconfidence is the chief negative influence on survival."* Lerner, Ortiz-Hunt and Jin 2021 quantify the truncation effect in entrepreneurship research: in a complete population of 6,850 firms, *"Entry under truncated conditions was understated by 40%"* and *"average longevity was overstated by 152%"* when short-lived failures were removed. These are two corroborations from within the entrepreneurship-method pool, so they count as one witness, and they bear on the instrument, not on the figure verdict.

**Refuter:** a prospective, pre-registered study in which founders' attributed shares match independently measured sources at the slot level. If attributions track measured sources, F8 weakens to `general`.

### F9: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per startup, never a field-wide average | general | Fig 1 :19, :22 | figure-derived |
| The market is the anchor, not founder or investor agreement | general | Fig 2 :29, :30, :35 | figure-derived |
| Founder skill is Γ, and capability is founder-and-habitat | specified | Fig 11 :39, :40 | triangulated F3 |
| The five candidates form a union with unassignable intersections | general | Fig 9 :54, :55, :56, :57 | figure-derived |
| Networks and financing are import operators, not shares | specified | Fig 6 :14, :21, :23; Fig 8 :32 | triangulated F5 |
| Timing is a habitat condition; luck is the re-entering remainder | general / specified | Fig 11 :46; Fig 13 :31-32 | triangulated F6 |
| A success reading cannot comment on its source | general | Fig 9 :30-32; Fig 13 :134 | figure-derived |
| The universal percentage split | not stated | none | **gap**: the framework returns a shape, and the discriminator is not held |
| Which named condition binds at a given startup and time | specified method | Fig 3 :19, :24, :27; Fig 9 :26 | the instrument is owed, not answered |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. An averaged, per-startup prospective statistic that predicts which named condition will bind next, with its shared fraction assignable (breaks F1, Fig 1 :19, :22; Fig 9 :60).
2. A success verdict that moves with founder or investor opinion while realized market return and survival are unchanged (breaks F2, Fig 2 :29, :30).
3. A founder's Γ held constant across a habitat substitution that removes the market's payment, with unchanged success (breaks F3, Fig 11 :39-40).
4. The intersection terms of the five-condition decomposition proven to be zero (breaks F4, Fig 9 :55-57).
5. A venture renewing reach purely by internal composition, with no new atom from a differing closure, still passing the ground test across a habitat change (breaks F5, Fig 6 :21, :23, Fig 8 :32).
6. A source-discriminating instrument that assigns all of a startup's outcome to named sources, prospectively validated with no remainder (breaks F6 and F7, Fig 13 :31-32; Fig 9 :32).
7. Fig 13's remainder claim itself broken: a turn that leaves no remainder re-entering the next (breaks the figures, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until market-ground measurements have paid for the shape per slot.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of startup success (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Refuse the universal percentage. A five-way split is a union of overlapping conditions with an unassignable shared fraction (Fig 9 :55-57), and an averaged share is a filter for budget, not a witness (Fig 9 :60).
3. Keep the conditions separate in every report. A blended "founder quality score" or "success index" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
4. Index per startup and per time (Fig 1 :19). The unit is the slot, not the cohort.
5. Treat lists of founder traits, network size, funding amount and timing heuristics as Γ and habitat elements, that is, as candidate libraries and conditions whose reach must be tested against the ground, never as the answer (Fig 1 :27; Fig 11 :39-40).
6. Import with provenance. Networks and financing are wall-moving only when a genuine new atom crosses, with a source gate and a shadow test (Fig 6 :23; Fig 8 :50-52).
7. Ask, at each handoff, which condition is binding and whether that was measured (Fig 3 :29). Do not fund above the break.
8. Use the entrepreneurship literature as one corroborating witness and as a budget filter, not as the verdict. Giones, Gudmundsson and Lechner, Lerner et al. and Lifchits et al. overlap in the broad management/cognition pool (Fig 2 :31, :40).
9. Stop at the shape. Do not name which founder, which network, which round or which month wins. The framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and four essays opened directly this session: *The Hard Problem is About Source*, *The Recursive Self-Improvement Trap*, *The Library of Babel*, *Decoding Tacit Knowledge*.

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop.
- *The Recursive Self-Improvement Trap* confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* It also states the prestige rule: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* A list of famous founders or famous investors cannot settle this question.
- *Decoding Tacit Knowledge* confirms the outreach order: *"When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to map Fig 13's six physical terms onto the five startup factors | **Retracted, strain S1** | Only fit by renaming capital and networks as physical kinds. Re-census: Fig 13 governs the remainder/randomness and the honest stop here, not the five business factors |
| Treated "founder skill" as a free-floating cause | **Retracted at domain level, strain S2** | No independent anchor; re-grounded as Γ in D1/D3 (F3) |
| Planned to call luck a sixth independent domain | **Retracted at domain level** | Luck has no separate ground; it is the re-entering remainder (Fig 13 :31-32) |
| Read Giones et al. as evidence for a fixed founder effect | **Conflict, re-census R1** | The study reports context dependence and a null for work experience. Re-mapped to Γ and habitat; verdict unchanged |
| Wanted to report a "best estimate" five-way split | **Retracted as a witness, kept as a filter** | Fig 9 :60; union with unassignable intersection (Fig 9 :55-57) |
| Wanted to say the framework forbids naming skill, timing or networks at all | **Narrowed** | The README's "shape, not a name" governs a **missing** primitive. Skill, timing, networks, financing and the network structure are held atoms or habitat conditions; naming them is a provenance-bearing binding, not an invented primitive |
| Treated Pluchino et al. as if it returned a universal luck percentage | **Narrowed to mechanism-shape corroboration** | The model shows why a winner reading cannot comment on its source; it does not measure startup variance shares |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Fig 1 and Fig 9 are two figures but one framework; triangulation means low topical overlap, not independent evidence pools |
| Averaged success rate used as a check on the claim | **Retracted as a witness** | Selection on the dependent variable (Lifchits et al. 2021) and left truncation (Lerner et al. 2021) make it a frame-internal number |

**Strains sent to the log:** S1 (Fig 13 six-term set vs business factors), resolved by re-census to the remainder and honest-stop roles; S2 (free-floating founder skill), resolved by grounding to Γ; R1 (Giones context dependence vs a fixed founder effect), resolved by re-mapping. The apparent tension between Fig 2 :29 (market does not move) and Fig 11 :73 (habitat updates) is not strained: the habitat updates, the ground settles and does not. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54-57 plus the Library of Babel bundle passage: it is a union of at least four conditions with different instruments, not one hard question with a percentage answer.
2. **What is the anchor?** The market, named in Fig 2 :29. Not founder confidence, not investor consensus (Fig 1 :27, Fig 2 :30).
3. **Is the answer in the founder alone?** No. Fig 11 :39-40. Capability is founder-and-habitat; skill is Γ whose reach must be tested.
4. **How do networks and financing act?** As imports that can move the wall (Fig 6 :23), with provenance and a shadow test (Fig 8 :50-52), debited against independence when the peer is too close.
5. **How does timing act?** As a habitat condition, season (Fig 11 :46), and as the room that must change when the question moves (Fig 10 :72).
6. **How does luck act?** As the remainder that re-enters each turn (Fig 13 :31-32), not as a sixth actor with its own ground.
7. **What can be said at the stop?** A shape, four conditions, and falsifiers. Not a universal split, not a named winner. *"Unreachable is a verdict here, not a silence,"* (Fig 13 :134), and *"So a search that finds nothing is never a proof of absence."* (Fig 8 :39).

---

## 8. Updated verdict

The shape survives: **startup success is not a stock to be divided into founder, timing, network, financing and luck shares. It is a per-startup contact relation. The venture keeps a channel to a market that still pays it reachable, keeps moving its reach outward through contact with closures that differ, keeps the room matched to the question as the window moves, and is read by an instrument that can discriminate sources when several sources produce the same green reading. Quick failure is usually a channel or room failure, not a shortage of founder talent; the routine that won can change sign when the residual changes; luck is the remainder, not a co-equal cause.** The conditions are kept separate, never averaged. Which named condition binds at a given startup, and any universal percentage, is a declared `gap` at the instrument boundary, reported as unreached, not as silence. Mode `specified` on the per-domain claims, `general` on the structural shape, `gap` on the split. No world source was allowed to flip a verdict; the one genuine conflict (Giones on context dependence) was returned to the census and re-mapped. No unresolved strain remains after re-census.
