# Figure-grounded audit: ECN-0070, valuing unpaid care work and household production

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap* (Isaiah N, fetched 2026-11-23): *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too (intelligence is essentially arrangement). However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the economics question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`. World sources are secondary and are listed in `10_source_ledger.csv`; most come from statistics, feminist economics, care ethics and public health, deliberately low-overlap fields.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o'| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the measurement frame's prior about what counts as productive, inherited from the SNA production boundary and the "third party criterion" (ONS 2016, section 3).
- **a** is the measurement act: what a statistical office counts, classifies, imputes and publishes.
- **Γ(b,a)** is what the accounts predict will show up as output and employment.
- **o'** is what households actually produce and the time actually spent, including care that is "on call" rather than active.
- **s** is the slot: an activity type, a household, a sex, a country, a survey round. R is indexed by all of these, never averaged into one global number.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."** (Fig 1 :28)

The phenomenon to explain is not the size of the estimate but the persistence of the residual after decades of valuation work. Observed: unpaid care is repeatedly estimated at roughly 15 to 26 per cent of GDP by replacement cost and 44 to 69 per cent by opportunity cost across G7 countries (Jones, Ruiz and Undurraga 2026, reporting van de Ven et al. 2018), and repeatedly excluded from the core accounts. A frame that treats "unpaid care = zero" as a measurement, or that treats "unpaid care = X per cent of GDP" as the answer, has a residual here.

State the residual as: *why does the gap between what the accounts count and what households actually produce persist, and how can a valuation rule reduce it without destroying the per-slot signal that says where the gap is?* This is an effect description. It names no theory, no "satellite account", no "replacement cost", no "intrinsic worth". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a rule with four properties, (i) R stays indexed by slot, (ii) the convention is separated from the factual claim, (iii) each instrument's blind axes are named next to its output, (iv) any cross-context transfer carries a measured round-trip gap. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names candidate anchors directly: *"A measurement, an experiment, a counter, a market, a patient outcome."* Fig 2 :30: *"you push on it, it is not an anchor."* Time-use survey diaries are a measurement; recipient and patient outcomes are a patient outcome; both are nameable. Market wages are a market, but the question is whether they move when pushed. Sections 3 and 6 show they do: they encode the very gender pay gap the valuation is meant to correct. So they are instruments, not anchors. Viable anchors: measured time per slot and measured care outcomes, neither of which changes because an economist prefers a different convention.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a three-place relation: activity a, measurement frame Γ, unit of account u, indexed by slot s and by time t. It carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72), because care is a flow through a day and a life, and a **comparison** bond (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87), because "productive" is a threshold relative to a production boundary. It is not symmetric: caregiver and recipient, market and household, are not interchangeable.
- **Symmetry.** The division of labour is asymmetric in the observed world (women perform about three times the unpaid care of men globally, roughly five times in Kenya and seven times in Bangladesh; UN Women 2023 and 2024). That asymmetry is a measurement finding, not a figure law. It matters here because an instrument that averages over it destroys the signal (Fig 1 :22).
- **Scale.** Three scales are in view: the single household and its care sequence (one-agent panel, Fig 4), the national accounts with *"something that ranks what they produce"* (Fig 4 :5), and the channel across survey rounds and over a life course. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so a round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The measurement frame** (national accounts) | statistical offices, SNA production boundary, GDP, LFS | monetary aggregates, employment counts | yes: time-use measurement (Fig 2 :29), the productive activity itself | admitted |
| **D2 The household care habitat** | caregivers, care recipients, activities, conditions (water, distance, illness, "on call" time) | time, effort, use-value, recipient outcomes | yes: measured minutes and *"a patient outcome"* (Fig 2 :29) | admitted |
| **D3 The valuation instrument set** | replacement wage, opportunity wage, output price, productivity adjustment | money (a wage or price) | **no** independent anchor: a market wage moves when pushed (Fig 2 :30), and *"instruments can be wrong on axes they do not measure"* (Fig 2 :37-38) | not a domain; retained as an instrument inside D1 |
| **D4 The convention frame** (policy and statistical standards) | UN SNA revisions, SDG 5.4.1 reporting, agencies, ministries | agreed meaning, budget, decisions | consequences in the world, but the object here is partly a convention (Fig 2 :41) | admitted as a convention domain; verdicts not pooled with D1/D2 |
| **X1 "Intrinsic worth of care" as a free-floating property** | the valuer | sentiment | **no** anchor independent of the valuer's frame (Fig 11 :48: *"You do not invent the list. You read it off the world"*) | not a domain yet |
| **X2 "Women's natural duty to care" as an explanation** | the stereotype | duty | no anchor independent of the measured division of labour; fails independence (Fig 2 :31) | excluded |

X1 and X2 fail the anchor test and are excluded before any figure line is applied to them. This is a structural exclusion, not a claim that care lacks worth or that norms are causally inert.

### 1.3 Partition or union

D1 and D2 overlap: measuring household activity is the contact point between the frame and the habitat, so the overlap is a compound with its own loop. D1 and D4 overlap: the production boundary is a convention that decides what is counted, so that overlap is a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are:

- **C1, a factual verdict** about what households produce and who produces it. Needs a non-moving anchor. Agreement from a shared wage table is disqualifying here (Fig 2 :40).
- **C2, a convention** for a unit of account and a boundary. Here agreement is the product, not a corruption (Fig 2 :41), provided the convention does not decide an outcome (Fig 10 :47).
- **C3, an instrument question**: which wage proxy, and on which axes is it blind. This assumes the answers to C1 and C2, so it is asked last (Formula step 7, SEARCHED first).

A single lever, for example "adopt replacement cost everywhere", clears the region where only C3 holds and leaves the intersections standing (Fig 9 :55). This is why the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the time-use survey see the activity? ONS 2016 records only *"active care"* and notes that *"both active care and passive care are valuable in their own right"*) → 2 vocabulary (does the classification have terms for what a household affords? the *"third party criterion"* is a vocabulary decision, ONS 2016) → 3 objective (what would count as progress, stated as a convention rather than assumed) → 4 planning (which valuation method) → 5 learn and carry. The middle link, having terms for what a household affords and saying what would count as progress, is the one with no instrument. Most valuation effort lands above the break, on better wage rates, because that is where the measurements already exist (Fig 3 :29-30).

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed and why one number fails |
| 2 The Ground | anchor must not move; correlation has valence: convention vs verdict | governs D1/D2 anchors and the C1/C2 split |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs household-to-nation transfer and cross-country comparison |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs whether a new valuation term is owed at all |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs whether adding a wage rate adds an atom (it does not) |
| 7 Room Chain | same closure handed along; agreement compounds, evidence does not | governs repeated rounds of the same valuation method |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs the source gate for wage proxies |
| 9 Leave / Arrive | union vs partition; describe the residual first; filters vs witnesses | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; a convention that decides an outcome has stopped being one | governs C2 and the "zero by convention" failure |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual; enumerate, never compose | decisive for D2 and the relational reading of care |
| 12 The Bond | isomers; arrangement is the substance; a plan is a sequence | governs why methods differ and why order in a day matters |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop; not the physical substrate applied to production factors |

Strain test applied during this census: an early attempt to apply Fig 13's six physical terms directly to "factors of production" in care work only fit by calling time a kind of energy and a care relation a kind of gradient. That is a strain, so Fig 13 does **not** govern the economics of care. Re-census sent Fig 13 to the honest-stop role only (section 6, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about measurement practice, `grounded` only if settled by a measurement. None is `grounded`.

### F1: R is per slot, never one GDP-equivalent

**Mode: `general` with a `specified` consequence for method. Domains D1, D2. Status: triangulated (Fig 1 and Fig 9, low overlap: per-object indexing vs filter/witness).**

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

The common output of the field is a single ratio, "unpaid work is X per cent of GDP" (ONS 2016: unpaid work valued at £1 trillion against GDP of £1.8 trillion in 2014; ECLAC 2025: more than 20 per cent of GDP in most Latin American countries; ILO 2018: 9.0 per cent of global GDP at minimum wage). That ratio is a filter for where to look and a budget instrument; it is not a witness for the verdict. OECD 2021 notes that both standard methods *"do not differentiate between the value each man or woman contributes, neither in productivity nor in the value of each hour of work provided, but rather accumulate the total amount of housework performed."* UN Women 2026 reports total hours disaggregated by sex and country, which is the per-slot form. The specified consequence: any answer to ECN-0070 delivered as one aggregate has already thrown away the only signal that says which household and which activity is losing contact.

**Refuter:** a single aggregate statistic that predicts, prospectively and per named slot, which household or activity will lose contact with the ground. If one exists, F1's methodological consequence is false.

### F2: Unbundle the union before choosing a lever

**Mode: `general`. Domains all. Status: triangulated (Fig 9 and Fig 2, low overlap: union/partition vs valence of correlation).**

Fig 9 :54, :55 and :57 are quoted in section 1.3. Fig 2 adds the rule that decides which part gets which treatment:

> **"Correlation has valence."** (Fig 2 :39)
> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** (Fig 2 :40)
> **"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"** (Fig 2 :41)

So the three conditions need different instruments. C1 (factual) needs an anchor; agreement produced by a shared wage table is one pool talking. C2 (convention) legitimately seeks agreement on the unit of account and the boundary. C3 (instrument) needs an axis audit, not a consensus. Conflating them is the named error. The Library of Babel essay states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

**Refuter:** a single intervention that resolves C1, C2 and C3 with no categorically different residue left over. That would collapse the union into a partition.

### F3: The frame cannot score itself with a quantity it produces

**Mode: `general`. Domains D1, D4. Status: triangulated (Fig 1 and Fig 2, low overlap: frame-internal metrics vs anchor rule).**

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"predicates minted, and credibility accrued"** (Fig 1 :26)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)

Declaring unpaid care to have zero value because the core production boundary excludes it is a frame scoring itself with its own boundary. So is asserting its value by its contribution to GDP, the metric the frame produces. The world names the same structure: Benería 1999 writes that *"Conceptual and theoretical norms are at the root of statistical biases leading to the underestimation of women's work in labour force and national accounting statistics"*; Waring 1988 showed housework and caring *"is automatically excluded from value in economic theory"*; Kabeer 2026 concludes that we should *"abandon measures of progress that use the market to determine what is valued by societies."*

**Refuter:** a demonstration that the accounts' own metric can settle R without any external measurement or time-use observation. F3 predicts this cannot be done; if it is, the frame is not scoring itself and F3 is false.

### F4: A market wage is an instrument, not an anchor, and it moves when pushed

**Mode: `specified`. Domain D3 (instrument inside D1). Status: triangulated (Fig 2 and Fig 10, low overlap: anchor rule vs convention-that-decides).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** (Fig 2 :29)
> **"you push on it, it is not an anchor."** (Fig 2 :30)
> **"It is only an instrument for is this code correct, and instruments can be wrong on axes they"** (Fig 2 :37)
> **"do not measure."** (Fig 2 :38)
> **"a convention that decides an outcome has stopped being one"** (Fig 10 :47)

This is the decisive finding. The two standard monetary methods use wages drawn from the market they are meant to correct. Jones, Ruiz and Undurraga 2026: *"replacement cost risks replicating the low pay typical of feminized occupations, while opportunity cost varies by the socioeconomic status of caregivers."* Budlender 2004: *"the sex-disaggregated approach, in fact, lowers the overall estimated value of unpaid work. This happens because (a) women generally perform more unpaid work than men; and (b) the average female wage is usually lower than the average male wage."* Folbre 2015: the opportunity cost method *"has the odd effect of valuing the household work with a wage based on a very different type of activity,"* so a graduate's hour of cooking counts for more than a better cook's hour. Elson 2017, as reported by Jones et al., notes estimates are *"sensitive to the wage rates applied, meaning that nations with lower care wages will tend to show lower values under replacement cost approaches."*

Every one of these is a case of the reading moving when the thing underneath it is pushed. The wage instrument is blind to the axis "does this wage reflect the undervaluation of care?" That is exactly Fig 2 :37-38. Valuing care with a feminized-occupation wage and then reporting the result as a correction of women's invisibility uses the cause as the measure of the effect.

**Refuter:** a wage proxy demonstrated to be invariant across a documented change in the gender pay gap and in occupational segregation, while still tracking the care activity. If such a proxy exists, the instrument does not move on the axis that matters and F4 is false.

### F5: What the survey cannot see is residual, not zero

**Mode: `specified`. Domain D2. Status: triangulated (Fig 11 and Fig 1, low overlap: habitat enumeration vs per-slot gap).**

> **"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."** (Fig 11 :48)
> **"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."** (Fig 1 :28)

ONS 2016 is explicit: *"only active care is recorded and therefore analysed in this report,"* while *"both active care and passive care are valuable in their own right"* (an on-call firefighter is paid for the whole shift). The unrecorded on-call hour is not zero care; it is R that the instrument cannot yet read. The Symbols table says R *"is always a slice: what cannot be perceived yet is residual and simply cannot be read."* Hoque 2024 makes the same point from a different field: current measurements *"rarely account for"* the *"concurrent joy and burden, and emotional aspects of reproductive labour."* The residual is the blind axis, not an absence.

**Refuter:** an instrument that records passive and on-call care, and the relational and emotional dimensions, without changing the frame that defines the activity. If one exists with no new residual appearing elsewhere, F5 is false.

### F6: Care is agent-and-habitat and relational, not an isolated hour

**Mode: `specified`. Domain D2. Status: triangulated (Fig 11 and Fig 12, low overlap: habitat relations vs composition structures).**

> **"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."** (Fig 11 :39)
> **"An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)
> **"An actor’s valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"The arrangement is the substance."** (Fig 12 :94)

An hour of care is not a commodity with a fixed value. Its value depends on who receives it, what else is available, and the conditions of the habitat (distance to water, illness, whether a sibling or a state service also provides). Fig 11 :43: *"The habitat is enumerated, never composed."* The care ethics literature, a low-overlap field, says the same in its own terms: the Internet Encyclopedia of Philosophy reports Tronto and Fischer's definition of care as *"a species of activity that includes everything we do to maintain, contain, and repair our ‘world’ so that we can live in it as well as possible"*; Pettersen 2011 argues for *"care as a relational activity"* with a *"relational ontology"* of mutually interconnected, vulnerable and dependent agents. The valuation instrument that prices an hour in isolation prices a state, not the relation that produces it.

**Refuter:** a valuation invariant across a documented change of care relation and habitat (recipient need, alternative providers, distance, season). If no change of valence can be found anywhere, F6 weakens to `general`.

### F7: Cross-context transfer carries a measured round-trip gap

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 4 and Fig 8, low overlap: scale transform vs provenance).**

> **"Only methods cross up. Only head starts come down."** (Fig 4 :22)
> **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."** (Fig 4 :30)
> **"Convergent derivation and adopted import look identical in the contents."** (Fig 8 :51)

A wage rate or conversion ratio exported from one country or one survey round to another is a recording of one occasion, not a method (Fig 4 :25). The transform is lossy, so the gap R_T between what was sent and what came back must be measured rather than assumed zero. Jones et al. 2026 report *"the challenges for cross-country comparison that arise from the use of different methods."* OECD 2021 notes that replacement cost comes *"close to using minimum wages as an approximated value of housework"* and *"ignores productivity and quality differences between own-account housework and the work of service providers,"* with adjustments that are *"arbitrary."* Those dropped constraints are the R_T. Cross-country league tables that report one percentage per country without the gap are dead reckoning.

**Refuter:** a transfer of a valuation method between two contexts where R_T is measured and shown to be zero, with every dropped constraint recovered on return. F7 predicts this will not happen; if it does, F7 is false.

### F8: Do not let the convention decide the outcome

**Mode: `specified`. Domain D4. Status: triangulated (Fig 10 and Fig 2, low overlap: seat prohibition vs anchor rule).**

> **"a declared meaning is not a grounded one"** (Fig 10 :18)
> **"a convention that decides an outcome has stopped being one"** (Fig 10 :47)
> **"Guard, from Figure 10: a convention that decides an outcome has stopped being one."** (Fig 2 :43)

The exclusion of unpaid household services from the core production boundary is a convention, not a discovery. It becomes a constant carrying an authority no one declared when it determines whether a large group appears in employment statistics, which in turn shapes policy, budgets and the *"feminization of poverty"* (UN Women Kenya 2023). The 2025 SNA revision handles this honestly: it *"encourages satellite (or thematic) accounts on unpaid work, allowing for the measurement and reporting of unpaid household services without altering the core production boundary"* (OECD 2025). That keeps the convention visible instead of letting it settle the outcome. ONS 2016 calls the household satellite account *"the current best practice internationally."* Kabeer 2026 asks us to *"abandon measures of progress that use the market to determine what is valued by societies."*

**Refuter:** show that the core-boundary choice has no consequence for any decision, budget, employment statistic or policy. If it has none, F8 is false and the convention is harmless.

### F9: The break is usually at vocabulary and objective

**Mode: `specified`. Domain D1. Status: single-source (Fig 3, with Fig 12 :112 as a corroborating line from the same framework, so one witness).**

> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)
> **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** (Fig 3 :29)
> **"A vocabulary without bonds can name a state and cannot name a route to one."** (Fig 12 :112)

The field spends most of its effort on wage rates and productivity adjustments (above the break) because those measurements exist. The earlier links are weaker: whether the survey can perceive passive care (Fig 3 :1), whether the classification has terms for what a household affords (the *"third party criterion"*, Fig 3 :2), and whether "what would count as progress" was stated or assumed (Fig 3 :3). A link with no instrument is not a link that works (Fig 3 :27). F9 predicts the highest-value diagnostic question is not "which wage rate is right?" but "at which link does this measurement chain stop, and was that measured?"

**Refuter:** a documented case where perception and vocabulary both measure as working and the failure is located at the choice of valuation method. That falsifies "usually at the middle", though not the dependency ordering.

### F10: What survives, with modes attached; what is a gap

| claim | mode | figure | status |
|---|---|---|---|
| R is per household and activity, never one GDP ratio | general | Fig 1 :19, :22, :28 | figure-derived |
| The union must be unbundled into verdict, convention, instrument | general | Fig 9 :54, :55, :57; Fig 2 :39-41 | triangulated F2 |
| The accounts cannot score themselves with GDP | general | Fig 1 :23, :26, :27 | triangulated F3 |
| A market wage is a blind instrument, not an anchor | specified | Fig 2 :29, :30, :37-38 | triangulated F4 |
| Unseen care is residual, not zero | specified | Fig 11 :48; Fig 1 :28 | triangulated F5 |
| Care value is agent-and-habitat and relational | specified | Fig 11 :39, :40, :49; Fig 12 :94 | triangulated F6 |
| Cross-context transfer has a measurable R_T | specified | Fig 4 :22, :30; Fig 8 :51 | triangulated F7 |
| A convention must not decide the outcome | specified | Fig 10 :18, :47 | triangulated F8 |
| The break is usually at vocabulary/objective | specified | Fig 3 :19, :24, :29 | single-source F9 |
| Which single monetary number is "correct" | not stated | none | gap: Fig 9 :32, Fig 13 :134 |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. **Anchor test.** A wage proxy or valuation rule whose output is invariant under a documented change in the gender pay gap and occupational segregation (breaks F4, Fig 2 :30, :37-38).
2. **Per-slot test.** A single aggregate statistic that predicts, prospectively and per named slot, which household or activity will lose contact with the ground (breaks F1, Fig 1 :19, :22).
3. **Union test.** One lever that resolves the factual verdict, the convention and the instrument question with no categorically different residue (breaks F2 and F8, Fig 9 :57).
4. **Settlement test.** A valuation settled by the accounts' own metric with no external time-use or outcome measurement (breaks F3, Fig 1 :23; Formula step 5: *"the ground settles it. Verified only by what pays. A gate is not the ground."*).
5. **Visibility test.** An instrument that records passive, on-call and relational care with no new residual appearing elsewhere (breaks F5, Fig 11 :48).
6. **Round-trip test.** A transfer of a valuation method between two contexts with R_T measured and equal to zero (breaks F7, Fig 4 :30).
7. **Framework test.** One of the six substrate terms derived from the other five, or closure shown not to be idempotent (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a measurement has paid for the shape.

---

## 5. Recommendation

1. Publish time and distribution first, money second (Fig 1 :19; Fig 4 :22: *"Only methods cross up. Only head starts come down."*).
2. Separate the convention from the verdict in every report. A single headline ratio does both jobs badly (Fig 9 :54-57; Fig 2 :39-41).
3. Name the instrument's blind axes next to every monetary estimate: replacement cost replicates feminized low pay, opportunity cost varies by socioeconomic status, output methods raise comparability and quality questions (Fig 2 :37-38).
4. Keep the core boundary and the satellite account distinct. Do not let the convention decide the outcome (Fig 10 :47).
5. Measure R_T on every cross-country or cross-survey comparison; keep every cut ranked and reversible (Fig 4 :30; Fig 9 :41).
6. Enumerate the care habitat, who cares for whom under what conditions, before valuing any hour (Fig 11 :43, :48).
7. Stop at the shape. Do not name one "correct" number; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32), and *"Unreachable is a verdict here, not a silence"* (Fig 13 :134).
8. Offer the method, not a recording (Fig 4 :22). Each user writes their own refuter and states their own mode.

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, `THE_FORMULA.md`, and three essays fetched 2026-11-23 (*The Library of Babel*, *The Recursive Self-Improvement Trap*, *The Hard Problem is About Source*).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop.
- *The Library of Babel*: *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* And the bundle passage quoted in F2.
- *The Recursive Self-Improvement Trap*: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* And *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."*
- *The Hard Problem is About Source*: *"the instrument is speaking only about what it measured, it cannot comment on the source."* This is F4's mechanism: the wage reads a price and names a worth; several sources can give the same reading.

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13 six-term physical set to factors of production in care | **Retracted, strain S1** | Only fit by renaming time as energy and a relation as a gradient. Re-census: Fig 13 governs the physical substrate, not a measurement frame's Γ; retained for the honest-stop role only |
| Treated the market wage as an anchor in an early draft | **Retracted at record level** | Fig 2 :30 and :37-38; F4. It is an instrument with blind axes |
| Treated "unpaid work = X per cent of GDP" as the answer | **Retracted as a witness, kept as a filter** | Fig 9 :60; an averaged quantity is frame-internal (Fig 1 :27) |
| Read the Fig 2 :41 line on agreement being efficient for a convention as permission to seek consensus on the magnitude | **Narrowed** | It licenses agreement on the unit of account and boundary only, not on the factual magnitude (Fig 2 :40) |
| Planned to name one "correct" valuation method | **Marked `gap`** | Fig 9 :32 returns a kind of thing, never the answer; Fig 13 :134 makes unreachability a verdict |
| Wanted to call Fig 11 :39 a `general` law about all care systems | **Narrowed to `specified`** | It is structural; no care-outcome measurement pays for the economics-level version here |
| Used UN and ILO percentages as corroboration of the answer | **Narrowed to filters and one witness pool** | They share time-use and SNA methodology (Fig 2 :31, :40); they corroborate the shape, not a single number |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Fig 1 and Fig 9 are two figures, but from one framework; triangulation here means low topical overlap, not independent evidence pools |

**Strains sent to the log:** S1 (Fig 13 applied to production factors), resolved by re-census; S2 (calling the market an anchor while also treating wages as moving with the pay gap), resolved by Fig 2 :29-30 and :37-38. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of a factual verdict, a convention and an instrument question, each with its own test.
2. **What is the anchor?** Measured time per slot and care outcomes, both named in Fig 2 :29. Not consensus, not internal account totals (Fig 1 :27).
3. **Is the answer in the accounts alone?** No. Fig 1 :27 and F3. A frame cannot score itself with GDP.
4. **Why do the two standard methods diverge?** Fig 12 :117: same atoms, different bond, different substance. See `06_isomers_and_order.md`.
5. **Why does the wage proxy fail?** It is blind to the axis "does this price embed the undervaluation it is meant to correct?" (Fig 2 :37-38; F4).
6. **Why does the unseen care matter?** What the instrument cannot read is residual, not zero (Fig 11 :48; F5), and care is a relation in a habitat (Fig 11 :39, :49).
7. **What can be said at the stop?** A shape and seven refuters. Not one number, not `grounded`. *"Unreachable is a verdict here, not a silence"* (Fig 13 :134), and *"a search that finds nothing is never a proof of absence"* (Fig 8 :39).

---

## 8. Updated verdict

The shape survives: **economists should keep the measurement residual indexed by household, activity and sex; unbundle the factual verdict from the unit-of-account convention from the instrument question; treat time-use and care outcomes as the anchors and wage proxies as instruments with named blind axes; enumerate the care habitat before pricing an hour; and measure the round-trip gap on every cross-context transfer.** The single "correct" monetary number does not survive: it is a `gap`, not a silence, because the framework returns a shape and the convention part has no ground to settle it. Mode `specified`. No world source was allowed to flip a verdict; the genuine conflicts (wage proxies, boundary conventions) were returned to the census and re-mapped. No unresolved strain remains after re-census.
