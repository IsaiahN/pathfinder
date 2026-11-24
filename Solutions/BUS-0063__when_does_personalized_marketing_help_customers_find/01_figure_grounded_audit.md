# Figure-grounded audit: BUS-0063, help versus manipulation in personalized marketing

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every finding below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, opened 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the business question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`, `THE_SEAT_MAP_Field_Guide_amended.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the firm's belief about what this customer wants, formed from collected data, the customer's history and inherited priors.
- **a** is the personalization action: the product, ad, price, framing or rank served to this customer-slot.
- **Γ(b,a)** is what the firm's library predicts the customer will do: click, conversion, repeat purchase, lifetime value.
- **o′** is what the customer actually experiences: whether the product was useful to them, judged under conditions in which they could decline.
- **s** is the customer. R is indexed per customer and per occasion, never aggregated into a campaign-wide click-through rate.

> Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
> Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**

The phenomenon to explain is not the level of engagement but the **valence of the intervention for the customer**: why does the same class of action sometimes end in a product the customer later judges useful, and sometimes end in a purchase they later judge to have been brought about by something other than their own good?

State the residual as: *when does a firm's model-driven action on a customer's information environment reduce the gap between what the customer would judge useful and what they actually encounter, and when does it replace that judgment with the firm's own prediction and narrow the customer's options?* This is an effect description. It names no theory, no "persuasion", no "filter bubble", no "dark pattern", no "nudge". Those are candidate names and are withheld until the census.

**Two frames, not one.** The firm is a frame ranging Γ_f against market response o′_f. The customer is a frame ranging their own belief b_c (what would help me) and action a_c (search, inspect, buy, decline) against o′_c (what the product actually did for them). Personalization is an action of the firm that becomes part of the customer's habitat. A one-frame analysis that scores only Γ_f commits the frame-internal error:

> Fig 1 :27: **"They are frame-internal. A frame cannot score itself with a quantity it also produces."**

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a pair of conditions whose conjunction keeps the customer's welfare judgment in the checking seat and keeps the customer's reach moving outward, plus an instrument that discriminates a failure of one condition from a failure of the other. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** The same line names candidates: *"A measurement, an experiment, a counter, a market, a patient outcome."* Fig 2 :36: **"An anchor is legitimate when the question is constitutively about it."** Fig 2 :37-38:

> **"Human judgment is the right anchor for is this a good answer for a person, because the question is about people. It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."**

This question is constitutively about whether an outcome is good for a person. So the customer's considered judgment, taken under conditions where they can refuse, is the legitimate anchor. Click-through, conversion and revenue are instruments. They move when the firm pushes on them, so by Fig 2 :30 (*"If it moves when you push on it, it is not an anchor"*) they cannot settle the question. A strain is named here and re-censused in section 6 (S1): the firm's intervention is precisely designed to move the person's expressed preference, so a naive "the customer said they wanted it" is not an anchor either. What is nameable as anchor is the person's considered judgment with a real option to decline, not their click in the moment of targeting.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a relation among firm model Γ_f, action a and customer outcome o′_c, indexed by customer-slot and ordered by occasion. Three operands plus an ordering, so it carries an **ordered** bond (`→`, sequence: Fig 12 :72, *"A then B; B needs A to have happened"*) and a **comparison** bond for "useful" (`⋛`, Operators table :46, *"a threshold relation between two quantities"*). It is not symmetric: the firm and the customer are not interchangeable.
- **Symmetry.** "Useful" is a threshold relative to this customer's situation, not an absolute property of the product (Fig 12 :85-89). The valence is asymmetric in time: a manipulation that produced a purchase is not undone by showing the same ad in reverse.
- **Scale.** Three scales are in view: the single customer's step-by-step search loop (Fig 4, one-agent panel), the population of customers with a shared ranking and *"something that ranks what they produce"* (Fig 4 :5), and the campaign channel across many occasions. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The firm loop** (one model, one campaign) | analysts, data, the firm's Γ_f | actions and residual reduction against market response | yes: realized customer outcome and the market's verdict (Fig 2 :29 names *"a market"*) | admitted |
| **D2 The customer habitat** (the information environment) | the customer, recommendations, competing products, other people | attention, consideration, options actually encountered | yes: the customer's considered judgment on the product, under a real option to refuse (Fig 2 :36-38) | admitted |
| **D3 The model library** (composition inside the firm) | atoms (past clicks, demographics, catalog, ranking rule) and bonds between them | reach (what can be recommended), |φ| cost | yes: settlement against the ground, *"then check it against the ground, then carry it up"* (Fig 5 :32) | admitted |
| **D4 The temporal channel** (across occasions) | instruments, metrics, percepts in the ranking pipeline | contact with the person's real response | yes: the ground, *"the ground does not decay, the channel does"* (Fig 10 :24) | admitted |
| **X1 "The algorithm is manipulative" as a free-floating property of code** | the model | cleverness | **no** anchor independent of what happens to this customer | not a domain yet |
| **X2 "Personalization works" as a single campaign-level KPI** | the campaign | average CTR or ROAS | a number exists, but it is a quantity the frame produces (Fig 1 :27) and it is pooled across slots (Fig 1 :22) | absorbed into D1/D4 as an instrument, not an anchor |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that some algorithms are not harmful. X2 is retained only as an instrument. Note the direct world parallel: a 2025 meta-analysis of 53 experiments reports that *"perceived relevance / but not perceived intrusiveness / explained the persuasiveness of personalized advertising"* (Journal of Advertising Research), while AMA's own research page reports *"Ad Retargeting is Overrated"* and that *"prospecting ads consistently outperform retargeting ads"* against *"platform-reported metrics"*. The metric and the person's good come apart in the literature exactly as the figures require.

### 1.3 Partition or union

D1 and D3 overlap: Γ_f is inside the firm loop, so their overlap is a compound with its own loop. D2 and D4 overlap: contact with the person's real response is exercised inside the habitat, so that overlap is a second compound. The whole question is a **union**, not a partition.

> Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**
> Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
> Fig 9 :57: **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."**

The unbundled conditions are:

- **C1 (anchor maintained):** the customer's considered judgment remains the thing that settles whether the product was useful; the firm's engagement proxy is not allowed to decide the outcome.
- **C2 (reach renewed):** the recommendation imports something from a closure that differs from the customer's own past behaviour, so the customer's reach moves outward rather than replaying what they already clicked.

Four cells, not two degrees of one problem. C1 true and C2 true is help. C1 true and C2 false is a comfortable mirror: the person judges it fine, but nothing new is found, which is motion without progress rather than manipulation (Fig 7 :32). C1 false and C2 true is novelty in the service of someone else's objective, which is still manipulation because the proxy is in the checking seat. C1 false and C2 false is the full filter-bubble case. A single lever, for example "improve relevance", clears the region where only one condition holds and leaves the intersections standing (Fig 9 :55). The essay *The Library of Babel* states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> Fig 3 :20: **"The chain is ordered by dependency, not by importance."**
> Fig 3 :24: **"Why the middle link is where chains usually break."**
> Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."**

Order for this question: 1 perception (can the firm read the customer's response?) to 2 vocabulary (does Γ_f have terms for what this situation affords this customer, and can it say what would count as helping them?) to 3 objective (can it state a comparison that would count as progress for the person?) to 4 planning (which item to serve) to 5 learn and carry (name what worked, verify it, carry it up). The middle link, having terms for what the situation affords and saying what would count as progress for the person, is the one with no instrument. Fig 3 :25-26: *"The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."* Most measurement effort lands above the break because that is where the measurements already exist (Fig 3 :29-30). This is why personalization can drift into manipulation without anyone deciding to manipulate: the objective link is unmeasured.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not the valence |
| 2 The Ground | the question is constitutively about a person, so human judgment is the anchor; mirror collapse | decisive for C1 and for the manipulation reading |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs why the welfare objective is unmeasured |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs customer to population transfer and the honest compression |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs when a recommendation term can be admitted at all |
| 6 Closure / Reachability | import is the only operator that moves the wall | decisive for C2 |
| 7 Room Chain | same closure handed along; agreement compounds, evidence does not | governs the filter bubble as a mirror chain |
| 8 Union Surplus | two frames reach what neither reaches alone; provenance separates convergence from import | governs triangulation and source rules |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; a convention that decides an outcome has stopped being one | decisive for the proxy-in-seat reading of manipulation |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual; isolation as substitution | decisive for D2 and for help versus harm being a relation |
| 12 The Bond | isomer, catalyst, functional group; arrangement is the substance | governs why the same data and model can be two substances |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | honest-stop role only, see strain S1 |

**Strain test applied during this census.** An early attempt to apply Fig 13's six-term physical substrate directly to marketing only fit by calling data a kind of energy, a ranking rule a kind of gradient and a customer segment a kind of space. That is a strain, so Fig 13 does **not** govern the marketing domain. Re-census sent Fig 13 to the honest-stop role only (section 6, strain S1). A second strain, treating the customer's expressed click as the anchor, was resolved by re-reading Fig 2 :36-38 (section 6, strain S2). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about marketing, `grounded` only if settled by a measurement. None is `grounded`.

### F1: The person's considered judgment is the anchor, not the engagement metric

**Mode: `general` for the anchor rule, `specified` for its application here. Domains D1, D2. Status: triangulated (Fig 2 and Fig 1, low overlap: anchor rule vs frame-internal scoring).**

> Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**
> Fig 2 :36: **"An anchor is legitimate when the question is constitutively about it."**
> Fig 2 :37-38: **"Human judgment is the right anchor for is this a good answer for a person, because the question is about people."**
> Fig 1 :27: **"They are frame-internal. A frame cannot score itself with a quantity it also produces."**

This question is constitutively about whether an outcome is good for a person, so human judgment is the legitimate anchor. CTR, conversion and revenue are instruments that the firm itself produces, and instruments *"can be wrong on axes they do not measure"* (Fig 2 :38). The whole industry's dependence on platform-reported metrics is exactly the exposure this rule names: AMA's own page reports that prospecting ads *"consistently outperform retargeting ads"* contrary to *"platform-reported metrics"*, and a 2022 Journal of Interactive Marketing insight is titled *"Ad Retargeting is Overrated"*. Those are two pages from one marketing pool and count as one witness.

**Refuter:** a demonstration that campaign-level CTR or ROAS, with no person-level welfare measurement, prospectively and correctly classifies which named customer-slot will later judge a recommendation manipulative. If that works, the anchor rule as applied here is false.

### F2: Help and manipulation are two conditions of a relation, not one continuum

**Mode: `specified`. Domains all. Status: triangulated (Fig 9, Fig 7, Fig 6, three distinct roles).**

> Fig 9 :57: **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."**
> Fig 7 :36: **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."**
> Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**

C1 (the person's judgment stays the anchor) and C2 (reach is renewed from a differing closure) are different conditions with different instruments. A firm can hold C1 and fail C2, producing a comfortable mirror that is unhelpful but not manipulative. It can hold C2 and fail C1, producing novelty in the service of the firm's proxy, which is still manipulation. Blending them into one "personalization quality score" is a pooled reading (Fig 10 :26) and destroys the diagnostic. The four-cell union is the figure-grounded content of "when does it help, when does it become manipulation".

**Refuter:** a single intervention that restores both conditions in both failure cells and leaves no categorically different residue. That would collapse the union into a partition.

### F3: Manipulation is a convention deciding an outcome, and a mirror chain

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 10 and Fig 7 and Fig 2, low overlap).**

> Fig 10 :47: **"a convention that decides an outcome has stopped being one"**
> Fig 10 :24: **"the ground does not decay, the channel does"**
> Fig 10 :26: **"saturated metrics, pooled readings"**
> Fig 10 :28: **"you have lost touch"**
> Fig 2 :14-15: **"they converge, and what they converge on is whoever had the most influence"**

When the engagement proxy stops measuring the customer's response and starts deciding which response the customer gets, it has stopped being a convention and has become a hidden objective. The loop then becomes the collapse Fig 2 names: the customer's preferences and the firm's model update on each other until they converge on whoever had the most influence. Fig 7 :12-13 supplies the motion-without-progress form: *"same closure, handed along;"* and *"agreement compounds, evidence does not"*. Zuboff's account of surveillance capitalism describes the world-side of this same structure in a different field: *"the surest way to predict behavior is to intervene at its source and shape it"*, and she names *"instrumentation and instrumentalization of human behaviour, for the purposes of modification and monetization"*. That is a low-overlap witness for the mechanism, not for this figure reading, and it is recorded as such.

**Refuter:** a documented regime in which CTR/CLV demonstrably governs what is shown, yet customers' ex post informed judgments and welfare improve and their reach expands, with no hidden proxy substituting for their judgment. If that is common, proxy-in-seat is not the manipulation condition.

### F4: The same technique changes valence when the customer's residual changes

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 11 and Fig 12, low overlap: habitat relations vs composition structures).**

> Fig 11 :49: **"An actor's valence is relative to the residual, not a property it carries."**
> Fig 11 :50: **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."**
> Fig 11 :51: **"No standing list of good actors survives a change of residual."**
> Fig 12 :119: **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."**

A recommendation engine is a benefactor to the customer who was looking for that product and a malfactor to the customer whose hesitation it exploits. Nothing in the technique's description records which. This is the figure-grounded reason why a list of "manipulative tactics" cannot settle the question by inspection. The world corroborates at a different stratum: Aguirre et al. 2015 find *"sharp drops in click-through rates when customers realize their personal information has been collected without their consent"*, and Bleier and Eisenbeiss 2015 find that the same high-depth personalization *"triggered increased reactance and privacy concerns"* for less trusted retailers but increased perceived usefulness for trusted ones. Same technique, different relation, different valence.

**Refuter:** a technique whose measured valence is invariant across a documented change of customer residual and trust condition. If none can be found, F4 weakens to `general`.

### F5: Score per customer, never average across the campaign

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 1 and Fig 9, low overlap).**

> Fig 1 :23: **"The ground enters as the only metric."**
> Fig 1 :27: **"They are frame-internal. A frame cannot score itself with a quantity it also produces."**
> Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

A campaign-level CTR is useful for allocating budget and useless as a verdict about any named customer. The harm, when it occurs, is a per-slot event. The specified consequence: any answer to BUS-0063 that reports only an average lift has already thrown away the only signal that says which customer's channel went stale and which customer's reach stopped moving. A 2025 meta-analysis reports a small average persuasive advantage for personalized ads (*"davg = .16"*), which is a filter for whether to run a study, not a witness about a person.

**Refuter:** an averaged campaign statistic that predicts, prospectively and per named customer, which slot will be manipulated. If one exists, F5's methodological consequence is false.

### F6: The break is at the objective link, and it has no instrument

**Mode: `specified`. Domain D1. Status: single-source (Fig 3, with Fig 12 :112 and the Operators table as corroborating lines from the same framework, so one witness).**

> Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."**
> Fig 3 :29: **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."**
> Fig 12 :112: **"A plan is a sequence. A goal is a comparison. Progress is a subtraction."**
> Operators table :51: **"a goal is a comparison, which is why a vocabulary without it cannot state one"**

The firm can measure perception (did the ad register, was it clicked) and outcome (did revenue arrive) with excellent instruments. It has almost no instrument for the middle link: what would count as progress for this person. A vocabulary containing clicks, prices and margins can name what a situation contains and cannot state a goal for the customer. The world's own vocabulary shows the gap: the literature measures *"perceived relevance"* and *"perceived intrusiveness"* and *"click-through intentions"*, all of which are readings of the firm-facing response, not discriminators of the customer's good. That is why the manipulation question is hard in practice even when nobody intends harm.

**Refuter:** a firm whose perception, vocabulary and objective links all measure as working, with the objective independently validated against customers' ex post considered judgments, and whose failure is located at planning alone. That would falsify the "usually at the middle" claim, though not the dependency ordering.

### F7: A filter bubble is a substituted habitat, and help requires a differing closure

**Mode: `specified`. Domain D2. Status: triangulated (Fig 11 and Fig 6 and Fig 8, distinct roles).**

> Fig 11 :66: **"Isolation is not removal of the habitat. It is substitution of one habitat for another."**
> Fig 11 :61: **"The seat's power is asymmetric. Introduction is available; exclusion is not."**
> Fig 6 :21: **"MINT composes inside the closure and can never add an atom."**
> Fig 8 :45: **"Two frames together reach what neither reaches alone."**

A personalization system does not remove the customer's world; it substitutes a filtered one, and the customer inherits actors they did not choose. The recommendation can introduce an option and cannot subtract the customer's circumstances. Pure replay of past clicks composes inside the customer's own closure and can never add the product they would never have searched for. Help is an import: contact with a frame whose closure differs, which is why collaborative filtering and exploration are not decorative extras but the operator that moves the wall. Pariser's filter bubble is the low-overlap world description of the same substitution: *"Your filter bubble is this unique, personal universe of information created just for you by this array of personalizing filters. Its invisible and its becoming more and more difficult to escape."* Recommender-systems engineering reaches the same boundary in its own terms: *"we cannot offer something new to a user as is not in their past interaction data"*, and exploration is *"avoiding the filter bubble effect"* at a cost to short-term revenue.

**Refuter:** a regime with no new atom entering from a differing closure, pure replay of past behaviour, that nevertheless produces durable, ex post judged-useful discoveries for the customer. That breaks idempotence and C2 with it.

### F8: The boundary is timed and graded, not a single level of personalization

**Mode: `specified`. Domains D2, D4. Status: triangulated for the mechanism shape (Fig 7 and cognition sources), single-source for the specific marketing numbers.**

> Fig 7 :37: **"Progress per handoff has two factors. Zero either and the chain runs in place:"**
> Fig 7 :38: **"the bracket's fidelity across the handoff"**
> Fig 7 :39: **"the ground's pressure on the room"**

A recommendation is a handoff. It pays when the bracket still matches the customer's current situation and the ground still pays for the product. Bleier and Eisenbeiss 2015 report *"overpersonalization"*: highly personalized banners are most effective just after a visit and *"quickly lose effectiveness as time passes"*, while medium-depth banners are *"initially less effective, but more persistent, so that they outperform high DCP banners over time"*. Lambrecht and Tucker 2013 find *"dynamic retargeted ads are on average less effective than their generic equivalent"* until the customer's browsing on review sites signals that their preferences *"have evolved"*. Loewenstein's information-gap theory supplies a low-overlap cognitive boundary: curiosity is highest for a moderate gap, because *"when attention becomes focused on a gap in one's knowledge"* the missing information produces deprivation, while full knowledge removes the gap and reduces reading. Too little novelty is a mirror; too much novelty is noise. This is bracket fidelity, not a preference for "more personalization".

**Refuter:** a recommendation regime in which the same depth and timing pay equally across all customers and all stages of their search, with no inverted-U or decay. That would falsify the bracket-fidelity reading.

### F9: Conflict and re-mapping in the world sources

**Mode: `general`. Status: figure-governed.**

The marketing literature is split. Aguirre et al. and Bleier and Eisenbeiss report that personalization can help relevance yet trigger vulnerability and reactance; the 2025 meta-analysis reports relevance as the mediator and intrusiveness as not mediating; Pariser and Zuboff argue that the same personalization is a structural substitution of behaviour for experience. Read as one pool these look like a contradiction. Per Fig 2 :45 (*"Frames range against the ground. They do not negotiate with it."*) the conflict returns to the census rather than flipping a verdict. Re-census R1 in section 6 resolves it: the studies are ranged against different anchors. Relevance and CTR are firm-facing instruments; vulnerability, reactance and considered welfare are the person-facing ground. Agreement among the firm-facing measures is one evidence pool talking (Fig 2 :31, :40). No source was allowed to overrule a figure line.

A second warning corroborates the method. Recommender-systems work on exploration saturation reports that *"exploration may not be an unbounded good, but rather a bounded process with user-specific limits"*, and that excessive novelty can increase cognitive load and reduce perceived relevance. That matches Fig 9 :30 (*"your words are borrowed too, so describe the effect"*) and refuses the naive answer "always show something new".

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per customer, never a campaign average | general | Fig 1 :19, :22 | figure-derived |
| The person's considered judgment is the anchor, not CTR | general / specified | Fig 2 :29, :36-38, Fig 1 :27 | triangulated F1 |
| Help and manipulation are two conditions, not one score | specified | Fig 9 :55, :57, Fig 7 :36, Fig 6 :23 | triangulated F2 |
| Proxy-in-seat is the structural form of manipulation | specified | Fig 10 :47, :24, Fig 2 :14-15 | triangulated F3 |
| Valence is relative to the customer's residual | specified | Fig 11 :49-51, Fig 12 :119 | triangulated F4 |
| A filter bubble is a substituted habitat, help is an import | specified | Fig 11 :66, Fig 6 :21, :23 | triangulated F7 |
| The objective link has no instrument | specified | Fig 3 :24, :27, Fig 12 :112 | single-source F6 |
| The boundary is graded and timed, not a fixed level | specified | Fig 7 :37-39 | single-source F8 |
| Which named tactic is manipulative in this case | not stated | none | `gap`: framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach, per Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted or closed if any of the following is observed:

1. A regime in which CTR or CLV demonstrably decides what is shown, yet customers' ex post informed judgments and welfare improve and their reach expands, with no hidden proxy substituting for their judgment (breaks F3 and C1).
2. A regime with no import from a differing closure, pure replay of past behaviour, that nevertheless produces durable ex post judged-useful discoveries (breaks F7 and C2, Fig 6 :21).
3. A technique whose measured valence is invariant across a documented change of customer residual and trust condition (breaks F4, Fig 11 :49-51).
4. An averaged campaign metric that prospectively and correctly predicts which named customer-slot will be manipulated (breaks F5, Fig 1 :22).
5. A recommendation with identical depth and timing that pays equally across all customers and all search stages, with no decay or inverted-U (breaks F8, Fig 7 :37-39).
6. The anchor test fails for considered judgment: it moves whenever the firm pushes with no substitute anchor nameable (breaks the domain itself, Fig 2 :30).
7. A source-discriminating instrument that reads a click and names its source (useful discovery, habit, vulnerability-driven compliance) above chance. This would not refute the shape but would **close the `gap`** in F10 and move part of the answer toward `grounded`.

No part of this solution may be upgraded to `grounded` until at least one of 1 to 6 has been run and has failed to fire, and until a person-level ground measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of personalization (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep C1 and C2 separate in every report. A blended "personalization quality score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Instrument the middle link: state, per customer and before serving, what would count as progress for that person, and how it would be invalidated (Fig 3 :27).
4. Treat engagement metrics as instruments at the budget stage and bar them from the checking seat (Fig 9 :60, Fig 2 :37-38). A convention that decides an outcome has stopped being one (Fig 10 :47).
5. Preserve a real option to decline and record informed ex post judgment. That is what keeps the anchor reachable (Fig 10 :29) and stops the customer from becoming another frame in a mirror chain.
6. Require an import for the "help" claim: name the differing closure the recommendation draws from (Fig 6 :23). Pure replay is motion, not discovery (Fig 7 :32).
7. Use the marketing literature as one corroborating witness and a budget filter, not as the verdict. Aguirre, Bleier-Eisenbeiss, Lambrecht-Tucker and the meta-analysis share one evidence pool (Fig 2 :31, :40). The cognition and recommender-systems sources are low-overlap corroboration of mechanism.
8. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
9. Stop at the shape. Do not name which specific tactic is manipulation in a named case; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32), and the discriminating instrument is not held here.

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, and the three essays *The Library of Babel*, *The Recursive Self-Improvement Trap* and *The Hard Problem is About Source* (all opened 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Applied Fig 13's six-term physical substrate to data, algorithms and segments | **Retracted, strain S1** | Only fit by renaming marketing objects as physical states and structures. Re-census: Fig 13 governs the physical substrate, not a firm's Γ. It now serves only the honest-stop role |
| Treated "the customer clicked it" as the anchor | **Retracted, strain S2** | A click moves when the firm pushes (Fig 2 :30), so it is an instrument. Re-census: the anchor is considered judgment under a real option to decline (Fig 2 :36-38). The measurement of that judgment is itself an open instrument problem, recorded as a gap, not hidden |
| Planned to call covert collection the definition of manipulation | **Narrowed** | Covert collection corrupts the channel (Fig 10 :26), but the shape requires proxy-in-seat and a narrowed reach. Covert plus useful plus informed consent is a different cell |
| Read the filter bubble as absence of information | **Corrected** | Fig 11 :66: it is substitution of a habitat, not removal. The firm introduces what the customer did not choose |
| Read the 2025 meta-analysis average effect as evidence for the verdict | **Retracted as a witness, kept as a filter** | Fig 9 :60; an average across slots is frame-internal (Fig 1 :27) |
| Wanted to name "dark patterns" as the framework's answer | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer. A tactic name is a binding from the marketing frame, recorded as such |
| F2 "decisive" in an early draft | **Downgraded to triangulated** | Fig 9, Fig 7 and Fig 6 are three figures but one framework; triangulation here means low topical overlap, not independent evidence pools |
| F3's Zuboff passage treated as figure-derived | **Narrowed to low-overlap world corroboration** | The figure line stands on its own; Zuboff describes a social analogue at a different stratum and is not a source for the figure reading |

**Strains sent to the log:** S1 (Fig 13 applied to marketing objects), resolved by re-census; S2 (click as anchor), resolved by re-census to considered judgment with the instrument gap left open. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of anchor maintenance and reach renewal, each with its own instrument.
2. **What is the anchor?** The customer's considered judgment, because the question is constitutively about what is good for a person (Fig 2 :36-38). Engagement is an instrument, not the anchor (Fig 1 :27).
3. **Is help a property of the technique?** No. Valence is relative to the residual (Fig 11 :49-51); the same engine is benefactor or malfactor depending on the customer and the objective bond.
4. **How does manipulation happen structurally?** A convention starts deciding the outcome (Fig 10 :47); the model and the customer converge on whoever had the most influence (Fig 2 :14-15); agreement compounds while evidence does not (Fig 7 :13).
5. **How does help happen?** A differing closure is imported (Fig 6 :23); two frames reach what neither reaches alone (Fig 8 :45); the recommendation is a room that differs from the last and matches the surfaced residual (Fig 7 :36).
6. **Why is this hard to see from inside a firm?** The objective link has no instrument (Fig 3 :24-27); a vocabulary of clicks and margins can state a plan and not a goal for the person (Fig 12 :112).
7. **What can be said at the stop?** A two-condition shape with four cells and falsifiers. Not which named tactic is manipulative in a named case. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **personalized marketing helps when the customer's considered judgment remains the anchor and the recommendation imports a differing closure that expands the customer's reach; it becomes manipulation when the firm's engagement proxy takes the checking seat and the loop turns into a mirror chain that narrows reach. These are two conditions with four distinct cells, never averaged. Which named tactic is manipulative in a named case is a `gap`, not a silence: the framework returns a shape, and the source-discriminating instrument that would read a click and name its cause is not held here.** Mode `specified`. No world source flipped a verdict; the apparent conflict among the marketing sources was returned to the census and re-ranged against different anchors. No unresolved strain remains after re-census.
