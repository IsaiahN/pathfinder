# Figure-grounded audit: BUS-0009, management versus industry versus the economy

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, read 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the business question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`. World sources are secondary and are listed in `10_source_ledger.csv`. Every verbatim quote below was checked against the extract character by character before use.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the firm's belief about what the market will pay for, formed from its own history and inherited priors.
- **a** is what management does: price, product, entry, investment, routine. This is the "management choices" candidate.
- **Γ(b,a)** is what the firm's library of routines and assets predicts will happen.
- **o′** is what the market actually returns: demand, price, share, survival.
- **s** is the firm, indexed also by time for the "broader economic conditions" candidate.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The question as posed asks for the opposite of that rule. It asks for one number that aggregates across firm-slots and across time, then divides that number among three named causes. The residual that the loop uses to steer does not survive that operation. This is the first finding, and it is structural rather than empirical.

State the residual as: *why does the gap between what a firm's routines predict and what its market returns differ across slots, and why does a global share of that difference keep changing when the frame of measurement changes?* This is an effect description. It names no percentage, no "industry effect", no "CEO effect". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be (i) the indexing the residual must keep, (ii) the reason the three named sources form a union rather than a partition, and (iii) an instrument that discriminates, for a named firm-slot, which condition changed the market's return. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 5 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* The market is explicitly a named anchor. Fig 2 :30: *"you push on it, it is not an anchor."* Management self-report, analyst consensus, and an ANOVA effect size all move when you change the sample or the model; they are instruments at best. Viable anchor: realized market return and survival, measured per firm and per time.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a four-place relation: firm Γ, action a, market return o′, and time t. It carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) and a **comparison** bond for "performance" (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87). It is not symmetric: firm and market are not interchangeable, and a management choice and an industry condition do not trade places.
- **Symmetry.** "Performance" is a threshold relative to competitors, not an absolute quantity (Fig 12 :85-89; Operators table :46-51). Attribution is asymmetric in time: an advantage attributed to a choice in one period is not recovered by reversing the choice in the next.
- **Scale.** Three scales are in view: the single firm's step-by-step loop (Fig 4, one-agent panel), the population of firms with *"something that ranks what they produce"* (Fig 4 :5), and the economy-wide time channel. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30), not assumed zero.

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 Management choices** (one agent, one scale) | decision makers, routines, the firm's Γ | actions and residual reduction | yes: realized market return on the action (Fig 2 :29) | admitted |
| **D2 Industry structure** (population) | firms, customers, entrants, suppliers, regulators | survival, share, profit | yes: customer choice and willingness to pay; the market as ground (Fig 2 :29) | admitted |
| **D3 Economic conditions** (time channel) | the ground's conditions, instruments, metrics | contact with the ground | yes: the ground, *"the ground does not decay, the channel does"* (Fig 10 :24); conditions named at Fig 11 :46 | admitted |
| **X1 Managerial genius as free-floating cause** | the leader | talent | **no** anchor independent of the market's verdict | not a domain yet |
| **X2 "The industry percentage" as a single cause** | the industry | structural rents | measurable industry returns, but this is already the habitat of D2 | absorbed into D2 |
| **X3 "The macro percentage" as a separate anchor** | the economy | aggregate conditions | the ground is one anchor (Fig 2 :29); a second anchor would be another frame | absorbed into D3 |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that leaders never matter. X2 and X3 are absorbed because the three named "sources" are not three grounds; they are three descriptions of conditions around one ground.

### 1.3 Partition or union

D1 and D2 overlap: a management choice is made inside an industry habitat, so their overlap is a compound with its own loop. D2 and D3 overlap: economic conditions are exercised inside the habitat, so that overlap is a second compound. D1 and D3 overlap through the time channel. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The three named sources are therefore not additive boxes. A firm-slot that is in a management condition and an industry condition at once is not "part management, part industry"; it is a specific compound (Fig 9 :58). This is the figure-grounded reason a single percentage split cannot be the answer: the operation assumes a partition where the figures license only a union. Ecology's variation partitioning makes the same point in a different field: the shared fraction *"[c] - shared variation explained by both variables at the same time (cannot be decided to which of them should be attributed, and is a result of correlation between both variables)"* (Zelený, 2026, read 2026-11-22).

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the firm read the market response?) → 2 vocabulary (does Γ have terms for what the market affords?) → 3 objective (can it say what progress would count as?) → 4 planning → 5 learn and carry. The attribution question is asked at link 3: it wants to say what counts as progress and where it came from. That is the middle link, the one with no instrument. Variance decomposition is an observer's aggregate statistic about a population; it is not the firm's link-3 term. Most diagnosis effort lands above the break because that is where the measurements already exist (Fig 3 :29-30), which is why this literature has produced hundreds of percentages and no source-discriminating instrument.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot indexing; frame-internal quantities disqualified | governs how R is indexed, forbids the global split |
| 2 The Ground | market is a named anchor; independence vs common pool | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs why percentages accumulate without settling |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs scale transfer and the lossy split |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs when an attribution term can be admitted at all |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs why adding an effect class changes the answer |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs why agreement across studies is not corroboration |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs source independence across datasets |
| 9 Leave / Arrive | union vs partition; describe the residual first; filters vs witnesses | decisive for the "how much" framing |
| 10 Ground Maintainer | ground does not decay, channel does; keep anchor reachable | governs the economic-conditions domain |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | decisive for D1 versus D2 and D3 |
| 12 The Bond | comparison is a threshold; isomer; arrangement is the substance | governs "performance" as a threshold and effect classes as arrangements |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop on a universal number |

**Strain test applied during this census.** An early attempt to read Fig 13's six physical terms directly onto "industry structure" only fit by calling industry a kind of space and the economy a kind of time. That is a strain, so Fig 13 does **not** govern the three business domains. Re-census sent Fig 13 to the honest-stop role only (section 7, strain S1), exactly as the validated BUS-0001 solution did for firm capabilities. No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about firms, `grounded` only if settled by a measurement. None is `grounded`.

### F1: The global percentage aggregates away the only signal (decisive)

**Mode: `general` structural, `specified` for firms. Domains D1, D2, D3. Status: triangulated (Fig 1 and Fig 3, low overlap: per-slot residual vs dependency order).**

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."** (Fig 1 :28)

A variance decomposition reports the share of variance in ROA attributable to an effect class across a whole sample. That is an average over objects. By Fig 1 :22 the quantity that says *where to look* is exactly what the average removes. So the "how much" answer is not merely hard to measure; the requested object is the wrong object for steering.

Fig 3 adds the dependency reason. The question is asked at the objective link (link 3), and the instrument applied to it (ANOVA on ROA) is an observer-side population statistic, not the firm's term for what counts as progress. **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19).

**Refuter:** a demonstration that a stable per-slot attribution survives aggregation, in the sense that the global percentage predicts a named firm-slot's response to an intervention better than the per-slot reading does. If that holds, F1 is false.

**World bearing (secondary only):** Rumelt 1991 reports *"negligible corporate effects, small stable industry effects, and very large stable business-unit effects"* (abstract, RePEc/IDEAS). That is precisely an aggregate over objects. It corroborates the *existence* of a measurable aggregate split but carries zero weight for the verdict, because Fig 1 :19 says the steering signal is per slot. The split is a filter for the budget, not a witness (F3).

### F2: The three sources form a union, not a partition

**Mode: `specified`. Domains D1, D2, D3. Status: triangulated (Fig 9 and the ecology variation-partitioning literature, genuinely low overlap: metalaw vs community ecology).**

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

Management choices, industry structure and economic conditions are not three boxes that sum to 100 percent. They are three conditions that overlap on every firm-slot. A firm in a recession, in a concentrated industry, making a pricing choice is a case in three conditions, and by Fig 9 :57 that is a *specific compound*, not a harder case of any one condition.

The empirical signature of this is visible in the literature without help from the framework. Vedula, Fitza, Purkayastha and Ellsaesser (2026, *Asia Pacific Journal of Management*, opened 2026-11-22) added a neighborhood effect and a neighborhood-industry interaction to a standard variance decomposition and report that *"controlling for neighborhood and neighborhood-industry interaction effects reduces the identified firm effect in our models from 43.9 to 11.5%"*. The "firm effect" did not reveal a fixed share of management contribution; it moved by a factor of nearly four when a new overlapping condition was admitted. That is what a union looks like when you try to force a partition onto it.

Zelený (2026, *Analysis of community ecology data in R*, opened 2026-11-22) states the general case from outside business: the shared fraction *"cannot be decided to which of them should be attributed, and is a result of correlation between both variables"*. This is a different evidence pool from the strategy journals, so it is a genuine corroborator of the union reading rather than another voice in the same pool.

**Refuter:** a stable percentage split of a named performance measure into the three sources that (i) sums without a residual shared term, and (ii) is unchanged when a new overlapping condition is added to the model. If such a split is shown, F2 is false.

### F3: A variance decomposition is a filter, not a witness

**Mode: `general` for the rule, `specified` for this literature. Domains all. Status: triangulated (Fig 9 and Vedula et al 2026, low overlap: metalaw vs empirical methods section).**

> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)
> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)

The master plan's ranking rules call this explicitly: effect sizes score *what gets tried first* and say nothing about what is true. The business literature agrees from inside its own practice. Vedula et al (2026) write: *"It is essential to recognize that variance decomposition as a methodology does not pinpoint which underlying aspect of an effect class influences firm performance"*, and, in a footnote, *"we are not examining causal relationships of specific drivers ... but instead look at the relative importance of aggregate effect classes"*. A method that cannot say which aspect of "firm" produced the effect cannot answer a question whose answer is "management choices did it".

The Vanneste meta-analysis (*Strategic Management Science*, 2017, DOI 10.1287/stsc.2017.0029, abstract retrieved 2026-11-22) is blunter: *"Third, it follows that the observed effects are not causal effects. The literature on variance decomposition defines an 'effect' as a ..."* The word "effect" in "industry effect" is a variance share, not a cause. Fig 9 :60 is the same rule stated as a metalaw.

**Refuter:** show that a variance share, with no additional instrument, identifies a causally active source for a named firm-slot and predicts the outcome of an intervention on that source. If it does, F3 is false and the filter may be promoted to a witness.

### F4: Management choices have no anchor when detached from the market

**Mode: `specified`. Domain D1, with D2. Status: triangulated (Fig 11 and Fig 2, low overlap: capability vs anchor).**

> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)
> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** (Fig 2 :29)

"Management choice" is a lever inside D1, not a free-floating cause (X1 fails the anchor test in section 1.2). A choice contributes to performance only insofar as it changes contact with what the market pays for. The same choice changes sign when the residual changes:

> **"An actor’s valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)

So there is no universal "management percentage". There is a per-slot, per-residual judgement about whether a choice changed contact. The question's framing treats management as a substance with a fixed contribution; the figures treat it as a relation with a variable valence.

**Refuter:** a controlled comparison in which a management intervention's measured contribution to performance is invariant across a documented change of residual and habitat, with the market anchor held fixed. If it survives, F4 is false.

### F5: Industry structure and economic conditions are habitat, not competing anchors

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 11 and Fig 10, habitat valence vs channel decay).**

> **"conditions: light, water, temperature, season, terrain"** (Fig 11 :46)
> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"saturated metrics, pooled readings"** (Fig 10 :26)

Fig 11 :46 names conditions as habitat elements. Industry structure is a habitat condition; so is the macro-environment. They are not additional grounds that vote alongside the market; they are the field of contact within which the market settles (Fig 2 :46: *"Each frame is corrected by it separately"*). Quick losses of performance that get attributed to "the economy" are often channel failures: stale percepts, dropped transients, saturated metrics, pooled readings. "Pooled readings" is the firm-level version of Fig 1 :22.

The empirical literature corroborates the habitat reading without using the framework: Vedula et al (2026) challenge the assumption that *"industry effects are spatially homogeneous"* and find a substantial neighborhood-industry interaction, which is a habitat condition the older two-way split could not see. Wang and Coff's review of the Rumelt tradition (*Strategic Management Review*, opened via the publisher's PDF) reports *"significant effect from the corporate-industry covariance term in his model"*, another overlap term.

**Refuter:** a demonstrated case in which an "economic conditions" or "industry" variable moves the market's payment for a firm-slot while the market anchor and the habitat both remain unchanged. If such a variable can be isolatingly shown to settle performance on its own, it is an anchor and F5 is false.

### F6: The universal number is a `gap`, not a silence

**Mode: `general`. Status: single-source for the figure limit, with the empirical disagreement as corroboration.**

> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)
> **"Unreachable is a verdict here, not a silence,"** (Fig 13 :134)
> **"So a search that finds nothing is never a proof of absence."** (Fig 8 :39)
> **"describe it before you go looking, or any frame you pick will seem to fit"** (Fig 9 :27-28)

After a genuine re-census, no figure line governs a universal percentage. The figures return a shape: index per slot, keep the union unbundled, treat the split as a filter, and name an instrument. Fig 9 :27-28 gives the reason the literature keeps producing different percentages: the frame is chosen before the residual is described, so any frame fits.

The empirical record is exactly what a `gap` predicts. Rumelt (1991) finds business-unit effects dominant; Vedula et al (2026) find the firm effect collapses from 43.9% to 11.5% once neighborhood is added; Wang and Coff conclude *"It seems unlikely that there is a single correct answer to the effect size question"* and that the answer will be *"it depends"*. Agreement among these papers is not a converging witness; they share a method and, in several cases, a dataset (Fig 2 :40).

**Refuter:** a frame-invariant percentage that survives the addition of a new effect class, is replicated on a different dataset with a different method, and is anchored by a measurement that does not update. If it is produced, this `gap` closes.

### F7: "Performance" is a threshold, not a quantity to be split

**Mode: `general`. Status: single-source (Operators table and Fig 12).**

> **"a threshold relation between two quantities"** (Fig 12 :87; Operators table :49)
> **"is it about which is larger, rather than both being present? Yes."** (Fig 12 :89)

"Superior performance" is a ⋛ comparison against competitors, not an absolute stock. A variance decomposition on ROA treats the dependent variable as a quantity; the framework says the object being attributed is a threshold relation. That is a type distinction, not a quibble: a comparison can change because either operand changed, so an "attribution of performance" must say which side of the comparison moved. No percentage does this.

**Refuter:** show that the performance measure being decomposed is a quantity at the level measured and that the comparison to competitors is invariant across the sample. If so, F7 is false at that level.

### F8: Source independence is the missing experimental design

**Mode: `specified`. Domains all. Status: triangulated (Fig 2 and Fig 8, anchor vs union surplus).**

> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)
> **"Buy independence in proportion to the cost of being wrong."** (Fig 2 :42)
> **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"** (Fig 8 :50-52)

Most strategy attribution studies draw on the same Compustat, FTC or Prowess pools and the same ANOVA machinery. By Fig 2 :40 their agreement is one pool talking. The cost of being wrong here is a misdirected intervention in a real firm, so independence should be bought in proportion to that cost. The practical design implication: the verdict needs a source-discriminating instrument and at least two frames with genuinely different closures, ranging separately against the market anchor.

**Refuter:** two studies with no shared data, no shared method and no shared authors that produce the same per-slot attribution for the same named firms, rated against the market anchor. That would be corroboration at high independence and would weaken F8.

### F9: Effect classes are arrangements, not ingredients

**Mode: `specified`. Domain D3 and the method. Status: single-source for the figure definition, with the business literature as a non-independent illustration.**

> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** (Fig 12 :117)
> **"The arrangement is the substance."** (Fig 12 :94)

Two models can contain the same effect classes (firm, industry, year) and differ only in how they are bonded (nested ANOVA versus covariance model versus an added interaction). Under Fig 12 they are different substances, not variants of one estimate. This is why the literature's percentages disagree: the ingredients are the same, the bonds are not. The fuller derivation is in `06_isomers_and_order.md`.

**Refuter:** show that two models with the same effect classes and different bonds produce the same per-slot attribution, i.e. the bond carries no information. If so, F9 is false.

### F10: Prestige cannot settle an attribution

**Mode: `general`. Status: single-source (essay, used for outreach only).**

From *The Recursive Self-Improvement Trap*: *"Prestige must never be allowed to validate an action directly... Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige."* A list of famous strategy scholars who agree with a percentage is a convention, not corroboration (Fig 2 :41: *"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"*). The ask in `02_outreach_email.md` gives the claim a budget to be tried; it does not ask for endorsement.

**Refuter:** a case where the prestige of the source, with no change in the instrument, changed the market anchor's reading. Since that would mean the anchor updates when pushed (Fig 2 :30), it would break the anchor rather than support the claim.

### F11: What actually survives

The defensible residue, with its mode attached:

| claim | mode | figure |
|---|---|---|
| The residual must be indexed per firm-slot; a global share discards the steering signal | `general` structural, `specified` for firms | Fig 1 :19, :22, :28 |
| The three named sources form a union of overlapping conditions, not a partition | `specified` | Fig 9 :54-57 |
| A variance share is a filter for the budget, not a witness for the cause | `general` for the rule | Fig 9 :60 |
| Management choices contribute only where they change contact, with valence relative to the residual | `specified` | Fig 11 :39-40, :49-51 |
| Industry and macro conditions are habitat and time channel, not competing anchors | `specified` | Fig 11 :46, Fig 10 :24 |
| "Performance" is a threshold relation, so an attribution must say which side of the comparison moved | `general` | Fig 12 :87, :89 |
| A universal percentage split is `gap`, with the instrument characterised in effect terms | `general` | Fig 9 :32, Fig 13 :134 |

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach, per the seat reasoning discipline: a falsifier written before the run is a design instrument, not only an honesty device.

The shape claim is refuted if any of the following holds:

1. A stable, frame-invariant percentage split of a named performance measure into management, industry and macro sources is shown to survive the addition of a new overlapping effect class, and is replicated across two datasets with different methods and an anchor that does not update.
2. The residual's per-slot attribution is shown to be preserved by aggregation, in that the global percentage predicts a named firm-slot's response to an intervention better than the per-slot reading does.
3. A source-discriminating instrument is demonstrated that, for a named firm-slot, identifies which condition changed the market's return, and two independent frames using it agree while ranging separately against the market anchor.
4. A "management" contribution is shown to be invariant across a documented change of residual and habitat, with valence that does not flip.
5. A variance share, with no additional instrument, is shown to identify a causally active source and to predict the outcome of intervening on that source.

If any fires, the shape is withdrawn or narrowed, and the retraction is recorded here rather than silently edited away. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Reframe the question before answering it: from "how much" to "indexed by which slot, union of which conditions, filtered by which budget". Keep the three verdicts separate; never average them (F1, F2).
2. State the mode on every sentence (F11 table).
3. Report variance shares only with the frame that produced them attached: dataset, effect classes, bonds, and the date. A number without its provenance is an adopted import masquerading as a convergent derivation (F8, Fig 8 :50-52).
4. Do not send the mass list. Use the public submission and contact points in `03_public_contact_points.csv`, and ask for a refutation rather than belief.
5. Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."* Send the generator, the shape and its refuter, not the conclusion.

---

## 6. Canonical usage check (figures README)

Two sources were read after the first five sections and they govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md` - *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; and the canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of the available instruments and records the lineage so the stop is honest. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md` step 7 - underivable-in-principle and unreachable-at-this-budget are different facts. The universal percentage is not underivable in the sense of Fig 8's metaframe theorems; it is unreachable because the object it names is an aggregate over a union. That distinction is recorded, not blurred.

### Retractions and confirmations

| earlier finding | status after the canonical check |
|---|---|
| F1 called "decisive" | **Retained, but narrowed.** It is decisive against the *global* number, not against measuring per-slot shares. Fig 1 governs the agent's steering signal; a population statistic is a different object. The re-census in strain S2 makes the line precise. |
| "no anchor for management" | **Narrowed, not retracted.** Management choices have an anchor through the market (Fig 2 :29); only the free-floating "managerial genius" candidate X1 fails. The table in section 1.2 now says so. |
| "three sources are not domains" | **Retained and clarified.** They are conditions admitted as D1, D2, D3, not three grounds. X2 and X3 are absorbed, not excluded. |
| F6 "gap" | **Canonically confirmed.** The README returns *"a shape, not a name"* and Fig 13 :134 says *"Unreachable is a verdict here, not a silence."* |
| F9 isomer reading | **Kept as `specified`.** Fig 12 :117 defines isomer over atoms and bonds; applying it to effect-class models is a binding from the methods frame, provenanced as such, not a derivation. |
| Apparent Fig 1 vs business-variance-decomposition strain | **Not strained after re-census.** Fig 1 :19 governs the agent's residual signal; the ANOVA share is an observer's population statistic. Different objects; see strain S2. |
| Apparent Fig 13 vs business terms strain | **Not strained after re-census.** Fig 13 governs the six physical primitives; S1 sends it to the honest-stop role only. |

### Seven-question recursive derivation (summary)

1. **Is performance one quantity?** No. It is a ⋛ threshold (Fig 12 :87), so an attribution must say which side of the comparison moved.
2. **Can the residual be aggregated?** No for steering (Fig 1 :19, :22). A global share discards the "where to look" signal.
3. **Do the three sources partition it?** No. They are a union of overlapping conditions (Fig 9 :54-57), confirmed from ecology's shared fraction.
4. **Is the decomposition a witness?** No. It is a filter (Fig 9 :60) and its own practitioners say it is not causal (Vedula 2026; Vanneste 2017).
5. **Is "management" a cause with an anchor?** Only as a lever changing contact (Fig 11 :39-40); the free-floating version X1 has no anchor.
6. **Are industry and macro separate anchors?** No. Habitat conditions and time channel around one market anchor (Fig 11 :46, Fig 10 :24, Fig 2 :29).
7. **Is a universal number reachable?** No. `gap` (Fig 9 :32, Fig 13 :134). What is owed is a source-discriminating instrument, characterised in effect terms, plus independent frames.

### Updated verdict

The shape survives: index per firm-slot, keep the union unbundled, treat the split as a filter, refuse the universal number, and specify the instrument that would close it. What does not survive is the question's own framing: performance as an aggregable stock, the three sources as additive parts, and the percentage as an answer. Strained after re-census: **none**; two strains (S1, S2) were dissolved by assigning each figure to its proper object, and one live empirical disagreement (effect sizes moving with the frame) is recorded as evidence *for* the union verdict rather than smoothed over.

---

## 7. Strains and re-census

- **S1, Fig 13 physical substrate versus business terms.** Early reading strained by calling industry a kind of space. Re-census: Fig 13 governs the six physical primitives; it has no bearing on business domains except the honest-stop rule (Fig 13 :134). Dissolved.
- **S2, Fig 1 per-slot residual versus population variance decomposition.** Early reading treated them as the same quantity. Re-census: Fig 1 :19 governs the agent's steering signal; the ANOVA effect share is an observer's statistic about a population. Both are legitimate on their own objects. The error is promoting the second into the first. Dissolved.
- **S3, live empirical disagreement about effect sizes.** Rumelt (1991) finds large stable business-unit effects and small industry effects; Vedula et al (2026) find the firm effect moving from 43.9% to 11.5%; Wang and Coff report *"it depends"*. Not a figure strain. It is the data-level signature of the union and filter verdicts, so it is kept as evidence rather than resolved away.
- After re-census: **one live empirical strain (S3), named; two dissolved (S1, S2); none hidden.**
