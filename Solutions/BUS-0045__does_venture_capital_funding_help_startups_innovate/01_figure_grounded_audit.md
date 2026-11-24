# Figure-grounded audit: BUS-0045, venture capital, innovation and premature scaling

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, opened 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post."* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the business question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Gamma(b,a) - o-prime| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the startup's belief about what customers will pay for, formed from its own history and inherited priors.
- **a** is what the startup does: build, hire, price, launch, spend, scale.
- **Gamma(b,a)** is what the startup's library of product, team, routines and capital predicts will happen.
- **o-prime** is what the market actually returns: payment, retention, survival.
- **s** is the startup. R is indexed by startup and by time, never averaged across a portfolio.

Fig 1 :19 "The residual is indexed by object slot, not aggregated."
Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."

The phenomenon to explain is not whether a funded startup is bigger on average. It is what happens to the per-slot residual and to the bracket when an external frame (the fund) enters the loop with capital and an objective. State the residual as: *does the entry of a funding frame lower R by admitting new, ground-settled terms, or does it change the objective and the scale so that the bracket no longer matches the actual stage?* This is an effect description. It names no theory, no "product market fit", no "blitzscaling", no "alignment". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be two conditions, kept separate, (C1) contact and reach changed so that new terms were admitted and settled at the ground, and (C2) the objective and scale stayed faithful to the customer ground, plus an instrument that discriminates a failure of one from a failure of the other. Until bound, that shape predicts nothing and no check in the loop can see it. It is now bound, so the refuter in section 3 can fire on it.

**Anchor test.** Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." The same line names a candidate directly: Fig 2 :29 "A measurement, an experiment, a counter, a market, a patient outcome." The customer market is a named anchor. Fig 2 :30 "If it moves when you push on it, it is not an anchor." Investor sentiment, growth decks and internal metrics move when pushed; they are instruments at best. The capital market (exit, return) is a different anchor from the customer market. Naming both is the whole difficulty: the question puts two grounds in one sentence. Viable anchors: realized customer payment and retention per startup, and realized fund return, never blended.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a three-place relation: startup Gamma, action a, market return o-prime, indexed by slot s and ordered by time t. It carries an **ordered** bond (`->`, sequence: Fig 12 :72 "A then B; B needs A to have happened") because funding precedes the actions it funds, and a **comparison** bond (`><` in the source glyph `⋛`, Fig 12 :87 "a threshold relation between two quantities") for "innovate", "growth" and "premature". It is not symmetric: funder and startup are not interchangeable.
- **Symmetry.** "Innovation" is a threshold relative to a prior state, not an absolute quantity (Fig 12 :85-89; Operators table :46-51). "Premature" is asymmetric in time: a scale commitment made too early is not undone by reversing the spending; the habitat has already changed (Fig 11 :66 "Isolation is not removal of the habitat. It is substitution of one habitat for another.").
- **Scale.** Three scales are in view: the single startup's step loop, the fund's portfolio with *"something that ranks what they produce"* (Fig 4 :5), and the time channel across funding rounds. The membrane between them is *"Not a wall: a filter with a direction"* (Fig 4 :21), and Fig 4 :22 "Only methods cross up. Only head starts come down." The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The startup loop** (one agent, one scale) | founders, product, team, the startup's Gamma | actions and residual reduction | yes: realized customer payment, retention, survival | admitted |
| **D2 The funding frame** (a different closure) | partners, fund lifecycle, milestones, board | capital, governance, the return objective | yes: realized fund return and exit, a different ground from D1 | admitted |
| **D3 The capability library** (composition inside the startup) | atoms (tech, data, people, cash, network) and bonds | reach, what can be composed and done, cost of a term | yes: settlement, *"then check it against the ground, then carry it up"* (Fig 5 :32) | admitted |
| **D4 The scaling channel** (across rounds) | metrics, growth targets, reviews, dashboards | contact with the ground | yes: the ground, *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **X1 "Innovation" as a free-floating property of money** | the dollar | novelty | **no** anchor independent of the customer and citation instruments | not a domain yet |
| **X2 "Growth" as sole cause** | the growth rate | scale | measurable, but this is D2's objective instrument and D4's metric, already inside those domains | absorbed, not separate |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that money never matters.

### 1.3 Partition or union

D1 and D3 overlap: Gamma is inside the startup loop, so their overlap is a compound with its own loop. D2 and D4 overlap: the investor's milestone sets the growth target, so that overlap is a second compound. D1 and D2 overlap at the financing event, where capital and an objective cross the membrane. The whole question is a **union**, not a partition.

Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."
Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

The unbundled conditions are: (C1) contact and reach changed so new terms were admitted and settled, and (C2) the objective and scale stayed faithful to the customer ground. A startup failing only C1 and a startup failing only C2 are not different degrees of one failure; they are different compounds and need different instruments. The essay *The Library of Babel* states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

This is why the empirical literature looks contradictory. Studies that measure patent counts, patent quality, early employment growth, and failure after early scaling are pointing at different slots of this union. Averaging them into "does VC help innovate" is the aggregation error Fig 1 :22 names.

### 1.4 Dependency order (Fig 3)

Fig 3 :20 "The chain is ordered by dependency, not by importance."
Fig 3 :24 "Why the middle link is where chains usually break."
Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at."

Order for this question: 1 perception (can the startup read customer response?) -> 2 vocabulary (does Gamma have terms for what the market affords?) -> 3 objective (can it say what progress would count, and who sets that objective?) -> 4 planning -> 5 learn and carry. The middle link, having terms for what the situation affords and saying what would count as progress, is the one with no instrument. This is where the funding frame enters and where premature scaling is born: the investor supplies an objective (a growth threshold) before the startup has terms for what its changed situation affords (Fig 12 :113-115 says a vocabulary holding only ingredients can say what a situation contains and cannot say what would count as getting somewhere from it). Most diagnosis effort lands above the break because that is where the measurements already exist (Fig 3 :29-30).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not whether funding is good |
| 2 The Ground | customer market and capital market as two anchors; independence vs common pool | governs the anchor and the witness rule, and the two-ground problem |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs where the funding objective does its damage |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs portfolio-to-startup transfer |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs whether funding can admit a new term at all |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs the legitimate innovation channel (C1) |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs board agreement and scaling chains |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and source rules |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; keep anchor reachable | governs premature scaling as channel failure (C2) |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | decisive for why money changes valence with the residual |
| 12 The Bond | goal is a comparison; catalyst, cycle, functional group | governs the growth-target mechanism and scaling loops |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop |

Strain test applied during this census: an early attempt to apply Fig 13's six-term physical substrate directly to "startup resources" only fit by calling cash a kind of energy and a team a kind of gradient. That is a strain, so Fig 13 does **not** govern startup capabilities. Re-census sent Fig 13 to the honest-stop role only (section 6, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about startups and funds, `grounded` only if settled by a measurement. None is `grounded`.

### F1: Capital is a currency, not an atom; only an import of a differing closure moves reach

**Mode: `specified`. Domain D3. Status: triangulated (Fig 5, Fig 6 and Fig 8, distinct roles).**

Fig 6 :21 "MINT composes inside the closure and can never add an atom."
Fig 6 :25 "An import adds no atom to the world."
Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."
Fig 8 :45 "Two frames together reach what neither reaches alone."

Funding enters as capital, expertise and network from a frame whose closure differs. The money is fuel inside the existing closure; it is the differing closure (a new market, a partner, a discipline, a customer base) that can move the wall. So "VC helps innovate" is true only in the qualified form: it helps when it imports a differing closure and the resulting composition is settled at the ground. The claim that dollars alone manufacture novelty is the frame-internal error Fig 1 :27 names. This is the figure-grounded reason the empirical estimates split: the studies that find a positive effect are often measuring the network and expertise that come with the money, while the studies that correct for selection find the money effect small or negative.

**Refuter:** a controlled set of startups in which capital alone, with no new atom entering (no network, no expertise, no new customer closure), reliably produces ground-settled novelty at a higher rate than an unfunded matched set. If that holds, F1 is false.

**World bearing (secondary only):** Akcigit, Dinlersoz, Greenwood and Penciakova (NBER Working Paper 26196, *Synergizing Ventures*) report that *"VC-backed startups have higher early growth rates and initial patent quality than non-VC-backed ones."* That is the "helps" side, and note what the paper itself credits: *"venture capitalists provide both expertise and financing for business startups."* Expertise plus financing, not financing alone. Lahr and Mina (2016, Research Policy) find *"the effect of VC on patenting is insignificant or negative"* once endogeneity is handled and suggest VCs are *"more likely to rationalise, rather than increase, the patenting output of portfolio firms."* These are not a contradiction to be averaged; they are different slots (see F7).

### F2: A growth target is a comparison bond, and a fund's objective can replace the startup's objective

**Mode: `specified`. Domains D2, D4. Status: triangulated (Fig 12 and Fig 1, low overlap: bond grammar vs per-slot metric).**

Fig 12 :112 "A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."
Operators table :51 "a goal is a comparison, which is why a vocabulary without it cannot state one"
Fig 1 :23 "The ground enters as the only metric."
Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces."

When the objective handed down at financing is a growth threshold, the startup's loop can end up optimising a quantity that the fund produces (growth as a signal of fund performance) rather than the quantity the customer ground settles (payment and retention). That is exactly the output-layer failure genus: a frame scoring itself with a quantity it also produces. This is the figure-grounded reading of "narrow growth targets": not that growth is bad, but that a comparison bond installed from another closure can become the objective of a loop whose ground is elsewhere. Fig 10 :59 "an interest in the outcome is unavoidable, an interest in the reading is disqualifying" applies to the fund: its interest in the outcome is normal, but an interest in how the metric is read is disqualifying for a verdict about innovation.

**Refuter:** a fund whose growth metric is demonstrably identical, per startup slot, to the customer ground's payment and retention signal over the same window. If the two coincide, F2's distortion mechanism has not fired.

**World bearing (secondary only):** Hallen, Tidhar and Eisenhardt (Harvard Business Review, 2026) write that *"For decades, entrepreneurs have been told to prioritize growth above all else. But the authors' research shows that this 'growth first' logic often undermines long-term success."* The companion Organization Science study (Hallen et al., *Measure Twice, Cut Once*) reports that the successful firms begin with *"focused attention on unit profitability (not growth), then broad (not narrow) learning, and finally active delay (not acceleration) of growth"* while *"peers with focused attention on growth ironically fail to achieve it."* That is F2 observed at the process level. Both are from the management-practice pool, so they count as one witness (Fig 2 :31).

### F3: Premature scaling is a channel failure, an overshoot of the bracket, not a lack of ambition

**Mode: `specified`. Domain D4. Status: triangulated (Fig 10, Fig 7 and a natural-science analogue, low overlap).**

Fig 10 :24 "the ground does not decay, the channel does"
Fig 10 :25 "stale percepts, dropped transients,"
Fig 10 :26 "saturated metrics, pooled readings"
Fig 7 :37 "Progress per handoff has two factors. Zero either and the chain runs in place:"
Fig 7 :38 "the bracket's fidelity across the handoff"
Fig 7 :39 "the ground's pressure on the room"

Premature scaling happens when the behavioural dimensions (team, spend, customer acquisition, product complexity) move to a larger stage than the actual stage measured at the customer ground. That is bracket fidelity going to zero while the ground may still be perfectly healthy. Startup Genome (Gauthier, 2011) names precisely this mismatch: *"the primary cause of failure is premature scaling, an affliction that 70% of startups in our dataset possess"*, and defines it as any *"behavioral dimension is at a stage larger than the actual stage"*. On fundraising specifically it says: *"Raising too much money, thereby making the startup undisciplined, giving lots of breathing room for other dimensions to scale prematurely, and eliminating exit optionality."* That is the capital channel degrading the bracket.

The SMJ study *When do startups scale?* (Lee, 2024) supplies the large-sample version: *"startups that begin scaling in the first 6 or 12 months of their founding are 20-40% more likely to fail"* and *"scaling early can suppress startup performance by prematurely curtailing learning through experimentation and increasing commitment risk."* Crucially, the effect is negated for startups that engage in A/B experimentation. Experimentation is the bracket; it keeps contact with the ground.

A genuinely low-overlap witness corroborates the mechanism. The University of Minnesota open biology text (Clark, Douglas and Choi; delayed-feedback section from Lehman, Loberg and Clark) states: *"if the growth rate is too fast compared with that feedback, the population can overshoot its carrying capacity, which can lead to highly complex outcomes."* Here the growth rate is the scale commitment and the feedback is customer response. This is Fig 10 :24 and Fig 7 :38 in a different field, with no shared evidence pool with management research.

**Refuter:** a documented set of startups whose behavioural stage outruns the actual stage and yet whose bracket fidelity and ground pressure both measure high and non-declining at the customer ground. Under Fig 7 :37-39 that should not happen; if it does, F3's mechanism is wrong.

### F4: Investor agreement inside a portfolio or board is not evidence

**Mode: `specified`. Domains D2, D4. Status: triangulated (Fig 7 and Fig 2, low overlap).**

Fig 7 :13 "agreement compounds, evidence does not"
Fig 7 :36 "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."
Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you."
Fig 7 :35 "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

A board and a partner meeting that all read the same growth dashboard are handing themselves the same room. Their agreement compounds while evidence does not. This is the figure-grounded reason that a syndicate's conviction is not a witness for whether a startup innovates, and why the same investors backing the same thesis is one pool, not many frames. Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence."

**Refuter:** a case in which investor agreement, measured before the outcome and with the syndicate's shared evidence pool declared, predicts per-startup ground-settled novelty out of sample. If it does, F4 is weakened.

### F5: Renewal of reach needs contact with a closure that differs

**Mode: `specified`. Domain D3. Status: triangulated (Fig 6 and Fig 8, distinct roles).**

Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."
Fig 13 :115 "The set is closed. The arrangements are not. That gap is why import exists."
Fig 8 :53 "Residual first, frame second."

A startup can keep optimising its existing product-market combination forever and never add an atom. The fund's legitimate contribution is a bridge to a closure that differs (an adjacent market, a technical discipline, a distribution channel), which is the C1 condition. This is where the "enabling" findings in the literature belong: the Research Policy study *Enabling or accelerating?* (2024) reports *"a positive and persistent enabling effect, suggesting that VCs push for rapid commercialization of inventive ideas by previously non-patenting firms"*, while finding *"no accelerating effect"* on average for firms that were already patenting. Different slots of the same union.

**Refuter:** a portfolio that renews its reach solely by composing inside the founders' original closure, with no new atom entering, and still passes the customer-ground test across a change of market. That breaks idempotence and F5 with it.

### F6: The valence of capital is relative to the residual, not a property of capital

**Mode: `specified`. Domains D1, D3. Status: triangulated (Fig 11 and Fig 12, low overlap).**

Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries."
Fig 11 :50 "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."
Fig 12 :119 "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."

Money is a benefactor when the residual is a missing resource that would let a faithful bracket be tested. The same money is a malfactor when it lowers the cost of committing to a scale the actual stage has not earned, because it removes the constraint that was keeping the bracket honest. Startup Genome's observation that funded inconsistent startups *"are on average valued twice as much as consistent startup and raise about three times as much money"* is this same actor with a changed valence. The Organization Science study *When More Is Less* (2022) gives the mechanism in its own terms: *"unbounded claims drive up the financial resources that ventures mobilize but reduce the likelihood of their long-term viability because of unmanageable technological complexity and uncontrolled organizational scaling."*

**Refuter:** capital whose measured valence is invariant across a documented change of the startup's residual. If no such change of valence can be found anywhere, F6 weakens to `general`.

### F7: The union must be unbundled; mixed findings are different slots, not a contradiction

**Mode: `general` with a `specified` consequence for method. Domains all. Status: figure-governed.**

Fig 9 :54, :55 and :57 (quoted in section 1.3) are the governing lines. The two conditions C1 (contact and reach changed) and C2 (objective and scale stayed faithful) have different instruments:

- A C1 failure shows up as no new atom entering, a reach that stops moving while the library (headcount, burn, features) keeps growing (Fig 6 :21, Fig 7 :12).
- A C2 failure shows up as saturated metrics, pooled readings, a bracket that no longer matches the actual stage (Fig 10 :26, Fig 7 :38).

This resolves the apparent war in the literature without averaging it. Howell, Lerner, Nanda and Townsend (NBER 27150) find that *"patents filed by VC-backed firms are of significantly higher quality and economic importance than those in the broader economy"* and simultaneously that *"VC-backed innovation is even more pro-cyclical than innovation in general"*, adding that *"During downturns, VCs in hubs are more likely to shift early-stage funding to less innovative firms that are closer to profitability."* That is C1 succeeding in booms and C2 narrowing in downturns, in one paper. Akcigit et al. measure growth and initial patent quality (C1). Lahr and Mina measure patenting after correcting for selection (C1, but a different instrument). Startup Genome and Lee measure scale-stage mismatch and failure (C2). Bernstein's dissertation reports both directions: *"venture funding increases the rate of companies' innovative activity"* and *"venture capital is associated with a decrease in the quality of companies' research output"* (C1 quantity up, C1 quality down). None of these should be averaged into a single "does VC help innovate" number.

**Refuter:** a single intervention that restores both C1 and C2 in both failure types with no categorically different residue left over. That would collapse the union into a partition.

### F8: Filter, never witness; stop at the shape

**Mode: `general` with a `specified` consequence for method. Status: triangulated (Fig 1, Fig 9 and Fig 13, low overlap).**

Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."
Fig 9 :32 "you get a kind of thing, never the answer itself"
Fig 13 :134 "Unreachable is a verdict here, not a silence"
Fig 8 :39 "So a search that finds nothing is never a proof of absence."

An average patent count, an average growth rate, a portfolio-level return multiple: each is a filter for where to look and a budget instrument, not a witness. The specified consequence: any claimed answer to BUS-0045 that is an average across startups has already thrown away the only signal that says which startup is losing contact and where. The shape survives; the name does not.

**Refuter:** an averaged, industry-level statistic that predicts, prospectively and per startup, which named slot will narrow its innovation or scale prematurely next. If one exists, F8's methodological consequence is false.

### F9: Conflict between the world sources and the figures, and how it was resolved

**Mode: `general`. Status: figure-governed.**

The world sources genuinely conflict with one another. A naive reading would call that an open question and stop. The figures send the conflict back to the census. Re-census R2 in section 6 resolves it: the conflicting studies measure different slots (patent count versus patent quality versus employment growth versus failure after early scaling) and use different anchors (customer market versus capital market versus citation pool). Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence." Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Agreement among the pro-VC studies that share the VentureXpert data pool is one witness; agreement among the practice studies that share the entrepreneur-interview pool is another. What looks like five witnesses is two pools plus one natural-science analogue.

The natural-science source is a corroboration of the mechanism shape, not of the business conclusion. Fig 4 :20 "Only the actors, the currency and the anchor change." The transfer is licensed at the level of the loop, with the anchor re-named at the new scale. Its agreement carries one independent witness because it draws on ecology, not on entrepreneurship.

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per startup, never a portfolio average | general | Fig 1 :19, :22 | figure-derived |
| Customer market and capital market are two anchors, never blended | general | Fig 2 :29, :30 | figure-derived |
| Only a differing closure moves reach; money alone is fuel | specified | Fig 6 :21, :23, :25; Fig 8 :45 | triangulated F1 |
| A growth target is a comparison bond that can replace the startup's objective | specified | Fig 12 :112; Operators :51; Fig 1 :27 | triangulated F2 |
| Premature scaling is bracket/channel failure, not lack of ambition | specified | Fig 10 :24-26; Fig 7 :37-39 | triangulated F3 |
| Investor agreement is not evidence | specified | Fig 7 :13, :35, :36; Fig 2 :35 | triangulated F4 |
| Capital's valence is relative to the residual | specified | Fig 11 :49-51; Fig 12 :119 | triangulated F5 |
| The question is a union of two conditions | general | Fig 9 :54, :55, :57 | figure-derived |
| The break is usually at vocabulary/objective | specified | Fig 3 :19, :24, :29 | single-source F1/F2 area |
| Which named practice (which term sheet, which milestone) occupies the slot | not stated | none | gap: framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. Capital alone, with no new atom entering from a differing closure, reliably raises ground-settled novelty per startup against a matched unfunded set (breaks F1, Fig 6 :21, :25).
2. A fund's growth metric is demonstrably identical, per startup slot, to the customer ground's payment and retention signal over the same window (breaks F2, Fig 1 :27, Fig 12 :112).
3. Startups whose behavioural stage outruns their actual stage still show high, non-declining bracket fidelity and ground pressure (breaks F3, Fig 7 :37-39).
4. Investor agreement, with shared evidence pool declared, predicts per-startup ground-settled novelty out of sample (breaks F4, Fig 7 :13, Fig 2 :35).
5. A portfolio renews reach purely by composing inside the founders' original closure and still passes the ground test across a change of market (breaks F5, Fig 8 :32).
6. A single lever restores both conditions and leaves no categorically different residue (breaks F7, Fig 9 :57).
7. Fig 13's six terms are derived from five of them, or Fig 6's idempotence fails inside a closed set (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a customer-ground measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of venture capital (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep the two conditions (C1 reach changed, C2 objective/scale faithful) separate in every report. A blended "funding helps innovation" score is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Ask, at each handoff, which link the chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
4. Treat capital as a currency and a possible import, never as the answer (Fig 1 :27, Fig 6 :25). Ask what atom crossed with the money.
5. Use the empirical literature as a budget filter and as two corroborating witnesses at most (Fig 2 :31, :40). The pro-VC economics papers and the practice studies each share a pool.
6. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
7. Stop at the shape. Do not name which term sheet, which milestone or which growth target is the right one; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, `THE_FORMULA.md`, and the essays *The Recursive Self-Improvement Trap* and *The Hard Problem is About Source* (both opened 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop.
- WATSON 60 confirms that design questions are decided from the figures as metalaws, and that asking the anchor for a ruling is the named failure mode. No ruling was requested here.
- *The Hard Problem is About Source* supplies the metamerism warning: an instrument that reads green *"cannot comment on the source"*, and *"If several paths create the same behavior, then behavior is a projection with lossy information."* A patent count or a growth rate reads the projection and cannot name the source. What is owed is a discriminator, not a stronger opinion.

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13 six-term set to startup resources | **Retracted, strain S1** | Only fit by renaming cash as energy and a team as a gradient. Re-census: Fig 13 governs the physical substrate, not a startup's Gamma |
| Treated the pro-VC economics papers as straightforward corroboration | **Conflict, re-census R2** | They share the VentureXpert/citation pools and measure C1, while the practice studies measure C2. Resolved by the union reading in F7. Verdict unchanged |
| Read portfolio-level return multiples as evidence for the answer | **Retracted as a witness, kept as a filter** | Fig 9 :60; averaged quantities are frame-internal (Fig 1 :27) |
| Wanted to name "product market fit" as the answer | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer. It is a practice-pool binding, recorded as such |
| Wanted to call Fig 11 :40 a `general` law about all startups | **Narrowed to `specified`** | Structural claim; no customer-ground measurement pays for the startup-level version here |
| Used the ecology overshoot source as business corroboration | **Narrowed to mechanism-shape corroboration** | Fig 4 :20 requires the anchor to be re-named at the new scale. It corroborates the loop, not the business conclusion |
| F1 initially written as "money cannot help innovate" | **Narrowed** | Fig 6 :23 permits an import from a differing closure; the qualified claim is that money alone cannot move reach |
| F10 row "which term sheet is the right one" | **Marked `gap`** | Metamerism: the reading cannot comment on the source; a discriminator is owed, not a name |
| F3 called "decisive" in an early draft | **Downgraded to triangulated** | Fig 10, Fig 7 and the ecology analogue are three figures/fields, but the business-level version is still unmeasured |

**Strains sent to the log:** S1 (Fig 13 applied to startup resources), resolved by re-census. S2 (calling the capital market "the ground" while also treating the customer market as the ground), resolved by Fig 2 :29-30 and Fig 11 :73: the habitat updates, the ground is what settles and does not; two grounds in one sentence must be kept separate. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of contact/reach change and objective/scale fidelity, each with its own loop and instrument.
2. **What is the anchor?** Two, kept separate: the customer market and the capital market, both named forms of Fig 2 :29. Never the dashboard, never the deck (Fig 1 :27).
3. **Is the answer in the money alone?** No. Fig 6 :21, :25. Only a differing closure moves the wall.
4. **How do narrow growth targets arise?** A comparison bond installed from the funding frame becomes the objective of a loop whose ground is elsewhere (Fig 12 :112, Operators :51, Fig 1 :27).
5. **How does premature scaling happen?** Channel decay: the behavioural stage outruns the actual stage, bracket fidelity falls, ground pressure may be fine (Fig 10 :24-26, Fig 7 :37-39). Rapid growth with delayed feedback overshoots (ecology analogue).
6. **Why does the same money change valence?** Valence is relative to the residual (Fig 11 :49-51); a catalyst may become a spent part (Fig 12 :119).
7. **What can be said at the stop?** A shape and two conditions, with falsifiers. Not which term sheet, not a `grounded` answer. Fig 13 :134 "Unreachable is a verdict here, not a silence" and Fig 8 :39 "So a search that finds nothing is never a proof of absence."

---

## 8. Updated verdict

The shape survives: **funding helps innovation only when it imports a differing closure and the new composition is settled at the customer ground; it pushes toward narrow growth targets and premature scaling when the fund's objective replaces the startup's objective and the behavioural stage outruns the actual stage.** The two conditions are kept separate, never averaged. Which named instrument, term sheet or milestone occupies each slot is a `gap`, not a silence: the framework returns a shape, and the discriminator that would name the source is not held here. Mode `specified`. No world source was allowed to flip a verdict; the genuine conflicts were returned to the census and re-mapped. No unresolved strain remains after re-census.
