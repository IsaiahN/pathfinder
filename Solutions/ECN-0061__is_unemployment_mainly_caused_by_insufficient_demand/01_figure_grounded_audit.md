# Figure-grounded audit: ECN-0061, the four causes of unemployment

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, opened 2026-11-23: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too (intelligence is essentially arrangement). However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the economics question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the belief workers and firms hold about what jobs, skills and wages are available, formed from private history and inherited priors.
- **a** is what they do. Firms post vacancies, set wages, hire and fire. Workers search, train, accept or refuse. Policymakers set benefits, wage floors and employment protection.
- **Γ(b,a)** is what the economy's library of skills, contracts, institutions and expectations predicts will happen: matches, vacancies, durations, wage bargains.
- **o′** is what actually happens: whether the vacancy is filled and the worker employed, at what wage, for how long.
- **s** is the slot: a worker, a vacancy, an occupation, a region, a demographic group. R is indexed per slot and per time, never aggregated into one national unemployment rate.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is not the level of unemployment but **why a slot's R stays positive**: the worker wants work and the work does not arrive, or arrives at a wage or in a place or with a requirement that does not fit. The four candidate answers are four different mechanisms for that positive residual:

- **Insufficient demand:** few or no vacancies; the ground stopped paying for labor at the going terms.
- **Mismatch:** vacancies and workers exist, but the worker's affordances do not compose with the vacancy's requirements.
- **Wages that do not adjust:** the comparison between what labor costs and what it is worth does not update, so the bracket no longer matches the residual.
- **Institutional barriers:** a rule or closure that cannot be crossed, so reach cannot move outward.

State the residual as: *why does the gap between what workers and firms bet on and what the labor market actually returns remain positive in some worker-slots and not others, and which condition is binding in each?* This is an effect description. It names no theory. "Demand", "mismatch", "wage stickiness" and "institution" are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a set of conditions, each with its own instrument, a dependency order among them, and a per-slot, per-phase statement of which condition binds. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names *"a market"* as an instance. Fig 2 :30: *"If it moves when you push on it, it is not an anchor."* Economist consensus, the unemployment rate as a single pooled number, and the theory's own vocabulary all move when pushed; they are instruments at best. Viable anchor: the filled vacancy, the realized employment, the wage actually paid, the duration actually experienced, measured per slot.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a multi-place relation among a worker (skill, reservation), a vacancy (requirement, pay), a wage, an institution set and time. It is two-sided matching, so it carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72), a **comparison** bond for the wage threshold (`⋛`, *"a threshold relation between two quantities"*, Operators table :48), and a **disjunction** (`∥`) over the four candidate conditions. It is not a symmetric relation: worker and firm are not interchangeable.
- **Symmetry.** "Unemployed" is a threshold state (wants work, has no work), a comparison rather than an absolute quantity (Fig 12 :87, Operators table :51). Persistence in unemployment is asymmetric in time: a lost match is not recovered by reversing the search step.
- **Scale.** Four scales are in view: the worker's search loop, the firm's hiring loop, the market's matching function and Beveridge curve, and the institutional or policy frame. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 Worker search loop** (one agent, one scale) | workers, their Γ (skills, beliefs, reservation) | search effort, matches, residual reduction | yes: the worker actually finds work or does not | admitted |
| **D2 Firm hiring loop** | firms, vacancies, recruiters | filled vacancies, profit, hiring costs | yes: the vacancy is filled or stays open | admitted |
| **D3 Matching market habitat** (population) | workers, firms, intermediaries, regions | matches, durations, vacancy flows | yes: realized flows and durations (the market as ground, Fig 2 :29) | admitted |
| **D4 Wage comparison** | wage bargains, productivity, price level | real wage versus productivity, employment response | yes: whether the labor market clears at the wage paid | admitted |
| **D5 Institutional frame** | regulators, unions, benefit systems, employment protection | rules, costs, crossable or closed boundaries | yes: measured outcomes before and after the rule (habitat conditions, Fig 11 :46) | admitted |
| **X1 "Voluntary idleness as sole cause"** | the individual | leisure preference | no anchor independent of the market's verdict | not a domain yet |
| **X2 "A demographic group as sole cause"** | a category of workers | group identity | group rates exist but are already inside D3's per-slot index | absorbed into D3, not separate |

X1 fails the anchor test and is excluded before any figure line is applied to it. X2 is absorbed because a group average is exactly the pooled reading Fig 1 :22 forbids. These are structural exclusions, not claims that preferences or demography never matter.

### 1.3 Partition or union

D1 and D3 overlap: search happens inside a market. D2 and D4 overlap: hiring and wage-setting are the same bargain seen from two sides. D3 and D5 overlap: institutions are conditions of the habitat (Fig 11 :46 names *"conditions: light, water, temperature, season, terrain"* as habitat elements). The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are:

- **C1:** a vacancy exists and is reachable (demand condition, ground pressure).
- **C2:** the worker's library fits the vacancy (mismatch, vocabulary and bond condition).
- **C3:** the wage comparison clears (wage-adjustment condition, bracket fidelity).
- **C4:** the closure is crossable (institutional condition, import condition).

A worker failing only C1 and a worker failing only C2 are not different degrees of one failure; they are different compounds and need different instruments. A demand stimulus clears the region where only C1 holds and leaves the intersection where C2 still binds (Fig 9 :55). This is why the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the worker read which vacancies exist and what they pay?) → 2 vocabulary (does Γ have terms for what the changed situation affords?) → 3 objective (can the worker say what would count as an acceptable match?) → 4 planning (a route: apply, train, relocate) → 5 learn and carry (name what worked, verify it, carry it to the next search). The middle link, having terms for what a situation affords and saying what would count as progress, is the one with no instrument. Fig 12 :112 says a vocabulary holding only ingredients can state a situation and cannot state a route to one: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."* Mismatch lives at this link. Most diagnosis effort lands above the break because that is where the measurements already exist (Fig 3 :29).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not which cause wins |
| 2 The Ground | market is a named anchor; independence vs common pool | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order and mismatch |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs scale transfer from worker to market to policy |
| 5 Mint Pipeline | three guards as product; settlement | governs whether a skill or policy can be admitted at all |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs D5 and the institutional condition |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs demand as ground pressure and the persistence of a search chain |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs source rules and the `gap` |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; keep anchor reachable | governs wage stickiness and pooled readings |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | decisive for D1, D3 and the flip of a good rule into a barrier |
| 12 The Bond | isomer, functional group, catalyst, bond information | governs mismatch as a bond failure, not an ingredient count |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop on "mainly" |
| Operators table | ⋛ comparison is a threshold relation between two quantities | governs the wage comparison; type caveat named |
| Symbols table | `R` is the aim; the ground is the anchor | no R was stated for the four-way question until section 0 |

Strain test applied during this census: an early attempt to apply Fig 13's six-term physical substrate directly to "labor market atoms" (workers as energy, skills as gradients, vacancies as networks) only fit by renaming ordinary labor quantities as physical states and structures. That is a strain, so Fig 13 does **not** govern the labor domains. Re-census sent Fig 13 to the honest-stop role only (section 6, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about labor markets, `grounded` only if settled by a measurement. None is `grounded`.

### F1: The question is a union of four conditions, not a ranking of four causes

**Mode: `general` structurally, `specified` as applied to this question. Domains all. Status: triangulated (Fig 9 and the Library of Babel bundle passage; the essay is framework-internal, so this is low topical overlap but one evidence pool).**

The governing lines are Fig 9 :54, :55 and :57 (quoted in section 1.3). The essay *The Library of Babel*, opened 2026-11-23, gives the same stop: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually to find their answers and then combine them in a satisfactory way."*

So the demand/mismatch/wage/institution list is not a menu from which one winner is selected. It is a union of four overlapping conditions that can all be present at once, and the intersection is categorically different from any single condition. The strongest world corroboration is from labor economics itself: Tyler Cowen, writing on the Mortensen and Pissarides model at Marginal Revolution, 2010, says it *"deconstructs the traditional distinction between cyclical and structural unemployment"* and that *"unemployment can look like it is structural when it is not"*. That is a labor-pool witness to the union reading, not a verdict from an independent frame.

**Refuter:** a single intervention that restores all four conditions in all four failure types with no categorically different residue left over. That would collapse the union into a partition and make "mainly" a well-posed question.

### F2: Demand failure is ground pressure falling, not a property of the worker

**Mode: `specified`. Domains D1, D2, D3. Status: triangulated (Fig 7, Fig 10 and Fig 2, three distinct roles: room chain, ground maintainer, anchor rule).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."** (Fig 2 :29)
> **"Progress per handoff has two factors. Zero either and the chain runs in place:"** (Fig 7 :37)
> **"the bracket’s fidelity across the handoff"** (Fig 7 :38)
> **"the ground’s pressure on the room"** (Fig 7 :39)
> **"the ground does not decay, the channel does"** (Fig 10 :24)

An economy with too few vacancies is one where the ground's pressure on the worker's search room has gone to zero: no matter how faithful the worker's reading, no handoff pays. This is a relation between worker and market, not a defect located in the worker. Fig 11 :39 and :40 make the same point at a different level: *"capability is a property of agent-and-habitat, never of the agent alone"* and *"An improvement that does not change contact changes nothing, however much it improves."*

The Nobel Prize 2010 popular information, opened 2026-11-23, gives the diagnostic that the economics pool uses: *"If unemployment and vacancies move in opposite directions, then changes can be regarded as reflecting variations in the demand for labor which occur over a business cycle."* The engineering analogue gives the same shape in an unrelated field: Prof. Tom V. Mathew, *Queuing Analysis*, IIT Bombay NPTEL lecture notes, opened 2026-11-23, writes that *"the analysis of delay normally focuses on delay that results when demand exceeds its capacity; such delay is known as queuing delay"* and that when arrival rate exceeds service rate *"the queue has a never ending growth"*. The queue grows because the service side stopped keeping up, not because the arrivals became defective.

**Refuter:** unemployment rises while vacancy creation per firm measures high and non-declining and measured labor demand has not fallen. If both the demand indicator and the queue behave that way, C1 is not the binding condition.

### F3: Mismatch is a bond and vocabulary failure, not a shortage of ingredients

**Mode: `specified`. Domains D1, D3. Status: triangulated (Fig 3, Fig 12 and Fig 11, three distinct roles: middle link, bond information, valence relative to residual).**

> **"The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."** (Fig 3 :26)
> **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** (Fig 12 :5)
> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** (Fig 12 :117)
> **"An actor’s valence is relative to the residual, not a property it carries."** (Fig 11 :49)

A worker and a vacancy can hold the same "atoms" on paper (a degree, a skill list, a wage band) and still not compose, because the bond between the worker's skills and the vacancy's requirement is not recorded in the list. Under Fig 12 :117 two such pairs are isomers: same ingredients, different arrangement, different outcome, and the ingredient list cannot see the difference. Under Fig 3 :26 the reason the list cannot see it is that the vocabulary/objective link has no instrument.

Two low-overlap witnesses corroborate the mechanism shape. Tidy Ecology, *Input matching and undermatching*, opened 2026-11-23, reports that across the studies Kennedy and Gray reviewed *"44 of 52 matching slopes fell below one"* and warns that *"The matching slope is a good summary and a poor diagnosis"*, because the same number is compatible with perceptual limits, incomplete information, travel costs and interference. That is exactly Fig 3 :27 and Fig 9 :30 (*"your words are borrowed too, so describe the effect"*) observed in animal foraging, with no shared evidence pool with labor economics. The American Mathematical Society Feature Column *The Stable Marriage Problem and School Choice* by David Austin, opened 2026-11-23, states that a matching is stable when *"there is not a student and a school who would prefer to be matched with each other more than their current matches"* and that Gale and Shapley showed *"there is always a stable matching"*. Stability depends on the preference/bond structure, not on the count of participants, which corroborates the Fig 12 reading of mismatch as arrangement rather than quantity.

**Refuter:** two worker-slots with identical measured skill atoms and identical measured bonds whose persistence diverges with no difference in ground contact or imported atoms. Under Fig 12 :117 that cannot be a bond difference, so the explanation moves out of D3 and mismatch weakens to `general`.

### F4: Wage stickiness is a bracket that stopped tracking the residual

**Mode: `specified`. Domain D4. Status: triangulated (Fig 10 and Fig 12, plus Fig 9 effect-description rule).**

> **"stale percepts, dropped transients, saturated metrics, pooled readings"** (Fig 10 :26)
> **"A plan is a sequence. A goal is a comparison. Progress is a subtraction."** (Fig 12 :112)
> **"your words are borrowed too, so describe the effect"** (Fig 9 :30)
> **"rather than the cause"** (Fig 9 :31)

A wage that does not adjust is a comparison bond that keeps returning the old threshold while the quantities it compares have moved. Fig 10 :26 names the decay modes of the channel that carries the reading: stale percepts, saturated metrics and pooled readings. A wage index that averages across occupations is a pooled reading in the Fig 1 :22 sense; it hides which slot is losing contact.

Fiveable, *Sticky Wages*, opened 2026-11-23, states the economics version directly: *"Sticky wages are wages that do not adjust quickly when demand, inflation, or unemployment changes"* and *"With sticky wages, the market can get stuck with too many workers looking for jobs at the current wage, which creates unemployment, especially in the short run."* This is a teaching source and shares the Keynesian pool, so it is one witness. The **conflict** is real: Cowen 2010 writes of the Mortensen and Pissarides results that *"The results do not require sticky wages or AD shocks. Do not."* A conflict sends the derivation back to the census, never flips the verdict (Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."*). Re-census C3 resolves it: sticky wages and search frictions are two different conditions in the union, each with its own instrument; one model can generate unemployment without the other, which is exactly what a union predicts (see section 6, re-census R1).

**Refuter:** a documented case where a wage change clears the labor market at the slot level with no change in employment or vacancy duration. If the comparison updates and the residual does not move, the wage condition is not binding there.

### F5: Institutions act as walls; import is the only operator that moves the wall

**Mode: `specified`. Domain D5. Status: triangulated (Fig 6, Fig 8 and Fig 13, three distinct roles).**

> **"the only operator that moves the wall"** (Fig 6 :14)
> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** (Fig 8 :32)
> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)

An institutional barrier is a closure that a worker or firm cannot compose its way out of: a licence, a benefit cliff, a firing cost, a closed occupation, a transport boundary. No amount of internal search adds the missing atom. The only operator that moves that wall is contact with a closure that differs: a retraining system, a different employer, a different region, a policy import.

Wikipedia, *Employment protection legislation*, opened 2026-11-23, gives the labor-pool version and its unresolved status: *"EPL reduces both job creation and job destruction, so that the net effects on average employment and unemployment are not identifiable a priori."* It also records that Kugler and Pica find *"economic complementarities between labor and product market policies ... in the sense that the effectiveness of one policy depends on the implementation of the other policy"*. That complementarity is the union claim in the institution's own vocabulary, and the "not identifiable a priori" line is an honest `gap` in that source rather than a failure of the figures. Corroboration from the Nobel page is sharper: benefits *"bring about higher unemployment and longer search time"* while also being able to *"facilitate efficient matching between unemployed workers and vacancies"*. The same rule has two valences depending on which residual is in view (Fig 11 :49-51).

**Refuter:** a documented case where reach renews purely by composing inside the worker's existing closure, with no new atom entering from a differing closure, and the worker still passes the ground test across a habitat change. That breaks idempotence and F5 with it.

### F6: A strength changes valence when the residual changes

**Mode: `specified`. Domains D2, D5. Status: triangulated (Fig 11 and Fig 12, habitat relations vs composition structures).**

> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)
> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)

A benefit system is a catalyst for a worker whose residual is income security and a spent part for a worker whose residual is rapid re-employment. An employment protection rule is a benefactor to an incumbent and a malfactor to an outsider. The Fig 11 Wikipedia passage names the outsider/insider split directly. The cognitive source supplies a low-overlap witness: Mai P. Trinh, *Overcoming the Shadow of Expertise*, Frontiers in Psychology 10:2505, 2019, opened 2026-11-23, writes that experts *"suffer from the curse of knowledge and cognitive entrenchment, which prevents them from being able to adapt to changing situational demands"*, and that expert schemas, reinforced by repeated practice, *"also tended to be more stable"*. That is the same valence flip at the individual stratum. Fig 4 :20 (*"Only the actors, the currency and the anchor change"*) licenses the cross-scale transfer of the mechanism shape; it is marked single-source for the labor-level claim.

**Refuter:** an institution whose measured valence is invariant across a documented change of the residual it is supposed to serve. If no such change of valence can be found anywhere, F6 weakens to `general`.

### F7: Never rank the four causes by an averaged unemployment statistic

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 1 and Fig 9, low topical overlap).**

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"predicates minted, and credibility accrued"** (Fig 1 :26)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

A national unemployment rate, a regional average or a variance decomposition that reports "demand explains X percent" scores the frame with a quantity the frame also produces. It is a filter for where to look and a budget instrument, not a witness. The specified consequence: any answer to ECN-0061 that is an average over workers has already thrown away the only signal that says which slot is losing contact and on which of the four conditions.

**Refuter:** an averaged statistic that predicts prospectively and per slot which named worker will become unemployed next, and on which condition. If one exists, F7's methodological consequence is false.

### F8: The break is usually at the vocabulary/objective link

**Mode: `specified`. Domain D1. Status: single-source (Fig 3, with Fig 12 :112 as a corroborating line from a different figure but the same framework, so one witness).**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)

In labor terms, the usual failure is not that a worker cannot apply for jobs; it is that the worker's Γ has no terms for what a changed occupation affords and cannot say what would count as an acceptable match there. More application effort and more training budget land above the break (Fig 3 :29-30). F8 predicts that the highest-value diagnostic question is not "is this worker skilled?" but "at which link does the search chain currently stop, and was that measured?"

**Refuter:** a documented worker whose perception, vocabulary and objective links all measure as working and whose failure is located at planning or at the carry link. That would falsify the "usually middle" claim, though not the dependency ordering.

### F9: Conflict between the economics pool and the figures, and how it was resolved

**Mode: `general`. Status: figure-governed.**

Two real conflicts arose. Neither flipped a verdict.

1. **Sticky wages versus search frictions.** Fiveable presents sticky wages as a cause of persistent unemployment; Cowen 2010 says the Mortensen and Pissarides results *"do not require sticky wages or AD shocks"*. Re-census R1 in section 6: they are different conditions C3 and C2, not rival single causes. The union predicts that either can generate unemployment without the other. Verdict unchanged.
2. **The two-way liability of benefits.** The Nobel 2010 page says generous benefits both raise search time and facilitate efficient matching. That looks like "the institution both causes and cures unemployment". Re-census R2: valence is relative to the residual (Fig 11 :49-51), so the two statements range against different residuals (income security versus match quality). They are not the same quantity. Verdict unchanged.

Cowen's line that the model *"deconstructs the traditional distinction between cyclical and structural unemployment"* is treated as a labor-pool corroboration of F1, not as a figure line and not as an independent witness from a different field.

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| Unemployment is indexed per worker/vacancy, never a national average | general | Fig 1 :19, :22 | figure-derived |
| The market, not consensus, is the anchor | general | Fig 2 :29, :30 | figure-derived |
| The question is a union of four conditions | general / specified | Fig 9 :54, :55, :57 | triangulated F1 |
| Demand failure is ground pressure falling, not worker defect | specified | Fig 7 :37-39; Fig 10 :24; Fig 2 :29 | triangulated F2 |
| Mismatch is a bond and vocabulary failure | specified | Fig 3 :26, :27; Fig 12 :5, :117 | triangulated F3 |
| Wage stickiness is a bracket no longer tracking the residual | specified | Fig 10 :26; Fig 12 :112 | triangulated F4 |
| Institutions act as walls; only import moves the wall | specified | Fig 6 :14, :21, :23; Fig 8 :32 | triangulated F5 |
| A rule's valence flips when the residual changes | specified | Fig 11 :49-51; Fig 12 :119 | triangulated F6 |
| The break is usually at vocabulary/objective | specified | Fig 3 :19, :24, :26, :29 | single-source F8 |
| Which single condition is "mainly" responsible | not stated | none after re-census | `gap`: no source-discriminating instrument |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A single intervention restores all four conditions in all four failure types and leaves no categorically different residue (breaks F1, Fig 9 :57).
2. Unemployment rises while vacancy creation per firm and measured labor demand both hold high and non-declining (breaks F2, Fig 7 :37-39).
3. Two worker-slots with identical atoms and identical bonds diverge with no difference in ground contact or imported atoms (breaks F3, Fig 12 :117).
4. A wage change clears the market at slot level with no change in employment or duration (breaks F4, Fig 12 :112).
5. Reach renews purely by internal composition with no new atom from a differing closure, and still passes the ground test across a habitat change (breaks F5, Fig 8 :32).
6. An institution's measured valence stays invariant across a documented change of residual (breaks F6, Fig 11 :49-51).
7. An averaged unemployment statistic predicts prospectively and per slot which named worker fails next and on which condition (breaks F7, Fig 1 :22, Fig 9 :60).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a per-slot labor-market measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of unemployment (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep the four conditions separate in every report. A blended "structural unemployment score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Ask, at each handoff, which link the search chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
4. Treat every skill list, wage index and institutional rating as Γ, that is, as a candidate library whose reach must be tested against the ground, never as the answer (Fig 1 :27).
5. Use the labor literature as a budget filter and as one corroborating witness, not as the verdict. The Nobel page, Cowen, Fiveable and the EPL review share an economics evidence pool (Fig 2 :31, :40).
6. Buy independence in proportion to the cost of being wrong (Fig 2 :42). The low-overlap witnesses from animal behaviour, mathematics, engineering and cognition corroborate the mechanism shape, not the labor-level fact.
7. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
8. Stop at the shape. Fig 9 :32: *"you get a kind of thing, never the answer itself."* The instrument that would rank the four conditions per slot is not held here.

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and the essays *The Library of Babel*, *The Recursive Self-Improvement Trap* and *The Hard Problem is About Source* (all opened 2026-11-23).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish and records the lineage. This governs section 5's stop and the `gap` row in F10.
- The source essay gives the reason the ranking is a `gap`: an instrument that reads green *"cannot comment on the source"*, so *"the answer is unreached until a better instrument exists"*. A single unemployment rate is a reading; demand, mismatch, wage rigidity and institutions are candidate sources. The reading does not determine the source.
- The self-validation essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13 six-term physical substrate to labor market atoms | **Retracted, strain S1** | Only fit by renaming skills as gradients and vacancies as networks. Re-census: Fig 13 governs the physical substrate, not a labor Γ |
| Read "insufficient demand" as the single root cause via Fig 2's anchor | **Retracted, re-census R0** | Fig 2 names the anchor, not the cause. Demand is one condition, the ground-pressure factor of Fig 7 :39 |
| Treated Cowen 2010 and Fiveable as straightforward corroboration | **Conflict, re-census R1** | They disagree on whether sticky wages are required. Re-mapped to C3 versus C2 in the union; both retained, neither used as the verdict |
| Read the Nobel page's two benefit effects as a contradiction | **Conflict, re-census R2** | Valence is relative to the residual (Fig 11 :49-51); income security and match quality are different residuals |
| Wanted to name "search frictions" as the framework's answer to mismatch | **Retracted at record level** | It is a labor-pool binding, not a derivation. Recorded as an import with zero verdict weight until a source gate and shadow test are supplied (Fig 6 :23; Fig 8 :50-52) |
| Planned to rank the four causes by an unemployment-variance decomposition | **Retracted as a witness, kept as a filter** | Fig 9 :60; frame-internal quantities are disqualified (Fig 1 :27) |
| Read Fig 13 :134 as if the line opened with "Unreachable is a verdict" | **Narrowed to a substring citation** | The line begins *"So the system can report that it lacks something rather than producing an answer anyway."* The phrase is an exact substring, not the opening |
| Interpreted "matching" in the Nobel 2010 page as Fig 6 composition | **Vocabulary correction** | Different quantities. The framework claim is closure idempotence (Fig 8 :32); the economics claim is matching efficiency. No strain after separation |
| F10 row "which single cause is mainly responsible" | **Marked `gap`** | Canonical limit: a shape, not a name; the source essay's metamerism rule applies |
| Fig 11 :40 as a `general` law about all labor markets | **Narrowed to `specified`** | Structural claim; no per-slot measurement pays for the labor-level version here |

**Strains sent to the log:** S1 (Fig 13 physical substrate applied to labor atoms), resolved by re-census; S2 (calling the market "the ground" while preference and vacancies plainly move), resolved by Fig 2 :29-30 and Fig 11 :73: the habitat updates, the ground settles; S3 (reading Fig 7 :26, *"progress per handoff: R = h² × S"*, as a calibrated equation), resolved by treating it as a product structure with mode `specified`; S4 (equating the economics word "matching" with framework composition), resolved by vocabulary separation. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of four conditions, each with its own loop and instrument.
2. **What is the anchor?** The market, named in Fig 2 :29. Not consensus, not a pooled national rate (Fig 1 :22).
3. **Is demand a property of the worker?** No. Fig 7 :37-39 and Fig 11 :40. It is the ground's pressure on the room.
4. **What is mismatch?** A bond and vocabulary failure, not an ingredient shortage (Fig 3 :26, Fig 12 :5, :117).
5. **What is wage stickiness?** A comparison bond whose bracket stopped tracking the residual (Fig 10 :26, Fig 12 :112).
6. **What is an institutional barrier?** A wall that only import moves (Fig 6 :14, :23, Fig 8 :32).
7. **Can a rule change sign?** Yes. Valence is relative to the residual (Fig 11 :49-51, Fig 12 :119).
8. **What can be said at the stop?** Four separate conditions in dependency order, with falsifiers. Not a ranking, not a name, not a `grounded` answer. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **unemployment is a union of four conditions, demand, mismatch, wage adjustment and institutions, each with its own instrument; the worker-slot is the unit of analysis; demand failure is ground pressure falling, mismatch is a bond and vocabulary failure, wage rigidity is a bracket that stopped tracking the residual, and institutions are walls that only import moves; any rule's valence can flip when the residual changes.** The four verdicts are kept separate, never averaged. Mode `specified`. The claim that any one is "mainly" responsible is a `gap`, not a hidden answer: no source-discriminating instrument that ranks them per slot is held here. No world source was allowed to flip a figure verdict; the two genuine conflicts were returned to the census and re-mapped. No unresolved strain remains after re-census.
