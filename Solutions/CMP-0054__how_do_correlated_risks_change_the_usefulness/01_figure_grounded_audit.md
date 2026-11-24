# Figure-grounded audit: correlated risk and the usefulness of diversification

**Mode of this document: `general` on the shape, `specified` on each domain application, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** LLM output is "simulacra"; "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It took no measurement. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Primary source.** All `Fig N :line` citations are against `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read verbatim this session. Every quoted string below was re-checked character by character against that extract before use. No figure line is quoted from a summary or from memory.

---

## 0. The question under audit

> How do correlated risks change the usefulness of diversification in financial, ecological, or infrastructure networks?

Restated in effect terms: diversification buys a reduction in aggregate loss by combining many slots whose losses are not co-signed. Correlation is the name for slots whose losses *are* co-signed. The question is how the second quantity changes the first.

Bind the sought-for shape as an ordinary term before the run (Formula, "Direction", because a frame cannot check the direction of its own question):

> **SHAPE TERM (bound before the run).** An answer is a relation between the overlap among slots (how much they draw on one hidden source) and the effective number of independent bets those slots deliver. Usefulness falls as overlap rises, reaches zero surplus at full overlap, and has a valence that depends on whether the union is being used as a verdict about the world or as a convention about shared meaning.

This shape term is written down so it can accrue a residual and be refused by the same test as everything else. It is not assumed true.

---

## 1. Residual in effect terms

The residual `R` is not "diversification is poorly understood". It is a specific per-slot gap:

- Let each slot `s` (a holding, a species, a component) carry a prediction of its own loss and an observation of its realised loss. `R_s = |prediction - observation|`, per slot.
- Diversification is the claim that combining slots reduces the aggregate of these residuals because the positive mass on one slot is not mirrored on another.
- The residual that drives this audit: **when slots share a hidden source, their residuals move together, and the aggregation that diversification performs stops being a reduction and becomes a propagation.** The measured aggregate no longer distinguishes a live slot from a quiet one.

Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

These two lines are the first governing move. Diversification is *literally* an aggregation across slots. The framework's first figure warns that aggregating across slots is how the only localising signal is lost. So the instrument used to declare diversification "useful" (a single portfolio variance, a single ecosystem function, a single uptime figure) is already the thing the framework disqualifies as a metric. This is a finding, not a rhetorical point (F3).

The ground that would settle the residual: a realised loss distribution under a stress in which the hidden source is active. Until such a reading, every verdict below is `specified` or `general`, never `grounded`.

---

## 2. Domain census

### 2.1 R by arity, symmetry and scale

- **Arity.** `k >= 2` slots. Diversification is not a property of one object; it is a relation over a collection. `R` is indexed per slot, never as one global number (Fig 1 :19).
- **Symmetry.** Slots are interchangeable *for counting* under a symmetric conjunction (Fig 12 records that under a symmetric bond k operands have k! spellings and one term). But correlation is not a property carried by a slot. It is a relation between slots, and its valence is relative to the residual. Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries." So the apparent symmetry is broken by the common cause, not by the slots.
- **Scale.** First order inside one network (the portfolio, the community, the grid). Second order at the coupling that correlates slots, whether that is a macro factor, a shared stressor, or a common control system. Fig 11 :52-53: "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out." The loss that matters is typically second or third order.

### 2.2 One line per domain (actors / currency / anchor)

A domain needs a nameable anchor. All four below have one.

| domain | actors | currency | anchor (nameable?) |
|---|---|---|---|
| **D1 Financial networks** | holdings, investors, leveraged intermediaries, a common macro factor | capital and realised return | a market and its counters, realised losses. Fig 2 :29 names "A measurement, an experiment, a counter, a market, a patient outcome." Yes. |
| **D2 Ecological networks** | species, functional groups, a shared stressor (drought, temperature) | biomass, persistence, ecosystem function | measured survival and function under perturbation. Yes. |
| **D3 Infrastructure networks** | nodes, links, common-mode sources (shared supply, shared control software, co-location) | service continuity and flow | measured uptime and service delivered. Yes. |
| **D4 Framework-internal independence law** | frames, evidence pools, anchors | evidence, never agreement | the ground. Fig 2 :29, :33: "The anchor must not update." Yes. |

D4 is not a fifth application. It is the domain that supplies the governing lines, and it is kept separate so its verdict is not averaged into the applied verdicts.

### 2.3 Partition or union

Two different splits must not be confused:

- **Across domains:** a partition by actors, currency and anchor. The framework is domain-agnostic; what changes is only the cast. Fig 4 :19-20: "Only the actors, the currency and the anchor change." So there is no separate financial theory of correlation and ecological theory of correlation. There is one law with three casts.
- **Inside each domain:** diversification is a **union** of `k` slots. When the slots overlap heavily, it ceases to be a union of independent frames. Fig 8 :49: "Two frames that overlap almost completely are one frame wearing two names." Fig 9 :54 warns what to do when the split lands on a union: "And when the split lands on a union rather than a partition, unbundle before you search again." So the correct move is to unbundle the common source before counting slots.

There is also a cross-domain union (physical and financial networks coupled together), which is question 57, not this one. It is named here as a boundary, not analysed.

### 2.4 Order by dependency (Fig 3)

| link | what it is here | where the instrument is |
|---|---|---|
| 1 perception | can we tell the slots and their residuals apart before aggregating? | Fig 1 :19, :22; this is the link most often skipped |
| 2 vocabulary | do we have terms for overlap, common cause and independence? | Fig 2 :31-32; Fig 13 :35-39 |
| 3 objective | what counts as progress: number of slots, or effective independent slots? | Fig 2 :44 |
| 4 planning | how much independence to buy, given the cost of being wrong? | Fig 2 :42 |
| 5 learn and carry | measure, verify, carry the method, measure the round trip | Fig 4 :30 |

Fig 3 :24-27 says the middle links (having terms for what a situation affords, and saying what would count as progress) attract the least attention and the fewest instruments. That is exactly the failure here: practitioners optimise link 4 (add more holdings, more species, more redundant links) while link 2 and 3 (instrument the shared cause, count effective bets) go unmeasured. A link with no instrument is not a link that works.

---

## 3. Figure census

| figure | bearing on this question | verdict |
|---|---|---|
| **1 The Agent** | residual per slot; aggregation across slots destroys the localising signal | governs the metric, F3 |
| **2 The Ground** | independence is low shared evidence; common cause is the hidden shared source; correlation has valence; effective-sample-size correction | **primary governing figure**, F1, F2, F3, F4, F5 |
| **3 Dependency Chain** | optimisation lands above the break; the correlation link has no instrument | governs the diagnosis, section 2.4 |
| **4 The Membrane** | only methods cross up; round trip gap must be measured | governs carry and honesty, F7 |
| **5 Mint Pipeline** | no new term is owed; this is a derivation from held terms | confirms no mint, F7 |
| **6 Closure / Reachability** | import only on contact with a differing closure; inward and outward are opposed | governs the world sources as imports, F7 |
| **7 Room Chain** | "agreement compounds, evidence does not"; a room's agreement is variation, not a verdict | governs outreach, F5 |
| **8 Union Surplus** | surplus lives only where closures differ; full overlap gives one frame with two names | **co-primary**, F1, F2 |
| **9 Leave / Arrive** | unbundle a union before searching; filters are for budget, witnesses for verdict | governs method, F1, F5 |
| **10 Ground Maintainer** | the verifier must not hold the interiors; bring a characterised residual | governs the packet, section 6 |
| **11 The Habitat** | valence is relative to the residual; contact cascades reach three steps out | governs F2 and F6 |
| **12 The Bond** | symmetric conjunction and identity; isomers and functional groups | governs `06_isomers_and_order.md` |
| **13 Minimum Viable Set** | independence condition applied to the set itself; overlapping members would be fewer names | **co-primary**, F1 |
| **Operators table** | `+` is a symmetric conjunction; `≡` is identity; the test for each | governs `06` |
| **Symbols table** | `R` is per slot; the ground is the anchor and does not update | governs section 1 |

Strained readings are named as such below, not smoothed over. One strain is live (F4, the valence of correlation), and it is resolved by scoping to the purpose of the union, not by forcing the figure.

---

## 4. Findings

### F1: Diversification is a union-of-frames claim, and its usefulness is the surplus from low overlap

**Mode: `general`. Triangulated across Fig 2, Fig 8 and Fig 13 (three different contexts, low overlap).**

Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence."
Fig 2 :32: "Independence is what makes agreement mean something."
Fig 8 :47: "Independence is one quantity read twice."
Fig 8 :48: "How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus."
Fig 8 :49: "Two frames that overlap almost completely are one frame wearing two names."
Fig 13 :38: "independence is how little two frames draw on the same evidence, and it is what makes their agreement mean anything."
Fig 13 :39: "Six members that overlapped would be fewer members wearing six names."

**Derivation.** A diversified collection is a union of slots. The benefit of a union is the surplus it reaches that no single member reaches. The figures say that surplus is decided by exactly one quantity: how little the members draw on the same evidence. At full overlap the union has no surplus and is one frame with two (or k) names. So usefulness is not a function of the count of slots. It is a function of the effective number of independent slots. Monotonic fall with overlap follows directly; the rate is not given by the figures.

**Per-domain reading (`specified`, unmeasured):**

| domain | independent slots | common source that collapses them |
|---|---|---|
| D1 | assets with idiosyncratic returns | a shared macro factor, common leverage, a common rating model |
| D2 | species with asynchronous responses | a shared stressor (drought, temperature) |
| D3 | components with independent failure modes | shared power supply, co-location, common control software |

**Refuter:** show a collection whose realised loss reduction does not fall as measured overlap rises, holding the other terms fixed, or exhibit a union with zero overlap and zero surplus where the figures predict a surplus. If either holds, F1 is withdrawn.

**Overlap of witnesses:** Fig 2 is about verification and alignment, Fig 8 about where imports live, Fig 13 about the minimum viable set. They derive the same quantity from different questions, so this is triangulation, not one pool speaking three times.

### F2: Correlated risks are the common-cause collapse, not a new kind of risk

**Mode: `specified` on each domain, `general` on the mechanism. Triangulated across Fig 2 and Fig 11, with one secondary world source.**

Fig 2 :6: "collapse 2: common cause"
Fig 2 :7: "(hidden shared source)"
Fig 2 :18: "one evidence pool"
Fig 2 :19: "they never talk, and still agree"
Fig 2 :20: "so the agreement is the pool talking,"
Fig 2 :21: "not two frames confirming each other"
Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries."

**Derivation.** The figure names a collapse in which frames do not communicate and nevertheless agree, because they draw on one hidden source. That is the structural description of correlated risk. The slots need not influence one another. They fail together because a source they share moved. This matters because the usual diversification check counts names, not sources: it asks how many holdings, species or components there are, which is Fig 2 panel 2 read as a success. But "not two frames confirming each other" means the apparent independence is the pool talking.

Applying Fig 11 :49: a component that looks like a good diversifier under one residual (a species that thrives in normal years) is not a good diversifier under a different residual (a drought year). There is no standing list of good diversifiers, because valence is relative to the residual.

**World corroboration (secondary only).** Confounding (Wikipedia, fetched 2026-11-22): "Failure to control for a confounder results in a spurious association between exposure and outcome." This is the same arithmetic read in a different field: a hidden common cause produces association without a direct link. It corroborates the mechanism; it does not decide the verdict. Overlap with the figure pool is low (statistics/causal inference vs the Tether figures), so this is the strongest independent witness in the set.

**Refuter:** instrument the shared source in any one domain and show that the slots' losses remain independent conditional on it. Then the common-cause reading is wrong for that domain. If the source cannot be instrumented, the correct verdict is `unreachable at this budget`, not `no correlation`.

### F3: The accounting is in effective slots, not named slots

**Mode: `specified` for the arithmetic, `general` for the principle. Triangulated across Fig 2, Fig 1 and one secondary world source.**

Fig 2 :44: "The effective-sample-size correction for correlated observations is standard in survey statistics and meta-analysis; the collapse is the same arithmetic read as a warning."
Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

**Derivation.** The figure itself points to the standard correction for correlated observations and says the collapse is the same arithmetic read as a warning. So the count of named slots is not the count of independent bets. The effective count is smaller by a factor that grows with the correlation among slots. The instrument that declares diversification useful must report effective slots, not named slots, and must keep the per-slot residuals visible. A single aggregate variance is precisely the average in which the live signal disappears.

**World corroboration (secondary).** "Effective sample size" / "Design effect" (Wikipedia, fetched 2026-11-22) gives the standard form: the effective sample size is the nominal size divided by the design effect, and cluster sampling with intraclass correlation inflates the design effect as `1 + (mean cluster size - 1) * rho`. Diversification (finance) (Wikipedia, fetched 2026-11-22) gives the finance form: for an equally weighted portfolio of many assets, "the portfolio variance tends to the average of covariances between securities as the number of securities becomes arbitrarily large." Both are the same statement in two currencies: adding names stops helping when the covariances are what remain.

**Import discipline.** The arithmetic is a provenanced import from survey statistics and portfolio theory, not a figure-derived law. Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." The source gate is the two pages actually fetched; the shadow test is that they explain the gap the figures name in Fig 2 :44. Recorded as an import, not as a derivation.

**Refuter:** show that under stress the realised loss reduction tracks the number of named slots rather than the effective count predicted by the correlation-adjusted arithmetic, in at least one domain. Then the accounting is wrong for that domain.

### F4: Correlation has a valence; the effect depends on the purpose of the union

**Mode: `general`. Single-source for the valence rule (Fig 2), corroborated by a low-overlap world source. This is the finding most often missed.**

Fig 2 :39: "Correlation has valence."
Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"
Fig 2 :41: "efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"

**Derivation.** A blanket claim that correlation always destroys diversification is wrong. The figure splits by what the union is for:

- If the union is a **verdict about the world** (a claim that the collection carries independent exposure to loss, so losses will average down), high correlation is disqualifying. The agreement among slots is the pool talking, so the collection has fewer independent bets than it has names.
- If the union is a **convention** (a shared protocol, a common currency, a standard interface, a shared meaning that lets parts compose at all), correlation is the product. A shared meaning is useful precisely because the members agree.

So the honest answer to the question is conditional: correlation reduces the usefulness of diversification *in its verdict function*, and it need not reduce (and can build) the usefulness of the same collection *in its convention function*. A payment network whose participants co-move is a better payment network; a portfolio whose assets co-move is a worse portfolio. Conflating the two functions is the error.

**World corroboration (secondary).** Systemic risk (Wikipedia, fetched 2026-11-22): "Within a certain range, financial interconnections serve as a shock-absorber (i.e., connectivity engenders robustness and risk-sharing prevails). But beyond the tipping point, interconnections might serve as a shock-amplifier (i.e., connectivity engenders fragility and risk-spreading prevails)." This is the same valence split in a different field: connection is productive up to a point and destructive beyond it. Note the disagreement in emphasis: the world source makes it a quantitative threshold, the figure makes it a categorical valence. They do not conflict; the figure supplies the kind of thing, the world supplies a candidate shape for the turning point.

**Retraction recorded here.** An earlier reading of mine treated Fig 2 :40 alone as the governing line and concluded "correlation always destroys diversification." That reading is retracted: it ignored Fig 2 :39 and :41 in the same figure, which is exactly the kind of single-line stripping the canonical usage rule forbids. The corrected reading is the conditional one above. Kept visible rather than silently erased.

**Refuter:** exhibit a convention-function of a network whose usefulness falls as its members' agreement rises, or a verdict-function whose usefulness rises as its members' correlation approaches one. Either breaks the valence rule.

### F5: How much independence to buy is a budget rule, not a verdict rule

**Mode: `specified`. Single-source (Fig 2 :42) plus the filter rule at Fig 9 :60.**

Fig 2 :42: "Buy independence in proportion to the cost of being wrong."
Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."
Fig 7 :13: "agreement compounds, evidence does not"
Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

**Derivation.** The price of independence is paid in apparent efficiency: redundancy, heterogeneity, modularity, unused capacity. The figure says to scale that purchase to the cost of being wrong. A household portfolio and a continental grid do not owe the same independence budget, because a wrong reading costs different amounts. But this is a rule for allocating the search budget, not for declaring an asset good. Fig 9 :60 forbids letting a filter hand you a verdict. Adding many agreeable holdings because "diversification is good" is the failure: it raises vocabulary and does not add an anchor (Fig 7 :13).

**Refuter:** show a case where the independence budget is set by the cost of being wrong but the resulting collection's loss under stress is unchanged. Then the budget rule is not governing this quantity and should be re-censused to a different domain.

### F6: The loss that matters is often third order, so direct-correlation audits undercount the source

**Mode: `specified`. Triangulated across Fig 11 and the cascade / infrastructure world sources.**

Fig 11 :52-53: "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."

**Derivation.** A diversification audit that lists only first-order correlations between the named slots can miss the source that correlates them. The loss appears three steps out: a shared stressor changes many species at once, a shared dependency fails many components at once, a shared factor repriced many assets at once. The habitat must be enumerated outward until the cascade stops mattering (Fig 11 :44), not composed from the direct neighbours.

**World corroboration (secondary).** Cascading failure (Wikipedia, fetched 2026-11-22): interdependent networks are "extremely sensitive to random failures", and "a failure of a small fraction of nodes in one network can trigger an iterative cascade of failures in several interdependent networks". The page also records Rinaldi, Peerenboom and Kelly (2001) on critical infrastructure interdependencies. This is the same third-order point in the infrastructure cast.

**Refuter:** exhibit a domain in which a first-order correlation audit of the named slots predicts realised joint losses under stress as well as an audit that includes second- and third-order shared sources. Then F6 is wrong for that domain.

### F7: What the figures do not give: the rate, the threshold, and the identity of the source

**Mode: `general`. Honest `gap` for the numeric quantities.**

Fig 8 :39: "So a search that finds nothing is never a proof of absence."
Fig 9 :32: "you get a kind of thing, never the answer itself"
Fig 8 :32: "no search, however long, adds an atom"
Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

**Derivation.** The figures give the shape: usefulness is a decreasing function of overlap with a valence by purpose, counted in effective slots, priced by cost of being wrong, and vulnerable to third-order sources. They do **not** give the functional form `U(rho)`, the numerical correlation at which a network flips from shock-absorber to amplifier, or the name of the shared source in any particular system. Those are ground questions. Fig 8 :39 forbids reading the absence of a figure line as proof that the quantity is not there. Fig 9 :32 is explicit that the framework returns a kind of thing, never the answer itself.

No new term is owed here. All the atoms needed (frames, evidence pools, ground, union, overlap, valence) are already held. Fig 5 would sort any apparent gap as "nothing new here", so this is not a mint. It is a stop at the limit of what the figures can distinguish, with the lineage recorded.

**Refuter (against the stop, not against the shape):** produce a figure line that derives a numeric threshold, or a source-discriminating measurement that names the source in a specific network. Either moves the answer toward `grounded` and closes this gap.

---

## 5. Pre-registered refuter

Written before the conclusion, per the exemplar's seat-map rule that a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. A diversified collection's realised loss reduction fails to fall as instrumented overlap rises, with other terms held fixed (breaks F1 and F3).
2. The common-cause collapse does not apply in any of the three domains: slots fail independently conditional on an instrumented shared source (breaks F2).
3. A convention-function of a network is destroyed by rising agreement, or a verdict-function is improved by perfect correlation (breaks F4).
4. The correlation-adjusted effective-slot accounting fails to predict realised joint loss under stress in at least one domain (breaks F3).
5. A first-order correlation audit predicts joint losses as well as a full habitat enumeration (breaks F6).

If any fires, the corresponding finding is withdrawn and the domain verdict is re-entered in `09_watson_answer.md`. Until one is run, no part of this may be labelled `grounded`. "Unreachable is a verdict here, not a silence" (Fig 13 :134).

---

## 6. Recommendation

1. **Count effective bets, not names.** Report the correlation-adjusted effective number of independent slots alongside the count, in all three domains (F1, F3).
2. **Instrument the shared source, not just pairwise correlation.** This is the middle link of Fig 3 with no instrument. Enumerate the habitat outward until the cascade stops mattering (F6).
3. **Keep per-slot residuals visible.** Do not let a single aggregate variance become the only evidence of diversification (Fig 1 :19, :22).
4. **Scope by purpose.** State whether the union is being used as a verdict about independent exposure or as a convention about shared meaning before calling correlation good or bad (F4).
5. **Price independence by the cost of being wrong**, and treat that price as a budget filter, never as a verdict (F5, Fig 9 :60).
6. **Withhold the theory in outreach.** Lead with the residual and the refuter; the verifier must not hold the interiors (Fig 10 :42).
7. **Measure the round trip.** Fig 4 :30 requires the gap between the figure-derived shape and any concrete implementation to be measured, not assumed zero.

---

## 7. Canonical usage check and retraction / confirmation log

Two rules were applied after the first sections and they govern how the figures may be used: the canonical figures README (local copy read this session), which says the figures outrank everything else and "the quotes are the authority, not this summary"; and the derive-first discipline, including the rule that a reading which makes two figures contradict one another has misidentified its domain.

| earlier reading | status after the check |
|---|---|
| "Correlation always destroys diversification" (from Fig 2 :40 alone) | **Retracted.** Fig 2 :39 and :41 in the same figure give correlation a valence. Replaced by the conditional reading in F4. Kept visible here. |
| "The figures derive the effective-N formula" | **Retracted.** Fig 2 :44 says the correction is standard in survey statistics and meta-analysis and that the collapse is the same arithmetic read as a warning. It is a provenanced import (Fig 6 :23), not a figure derivation. Recorded in F3. |
| "The common-cause collapse is a metaphor here" | **Confirmed as literal.** Fig 2 :6-7 names "collapse 2: common cause (hidden shared source)" as a structural failure genus, not an analogy. |
| "The three networks need three separate derivations" | **Refused.** Fig 4 :19-20: only actors, currency and anchor change. One law, three casts. Domain verdicts are still kept separate and never averaged. |
| Apparent conflict: Fig 2 :40 (correlation disqualifying) vs systemic-risk world source (connection is a shock-absorber up to a point) | **Not strained after re-census.** Fig 2 governs a verdict about the world; the world source describes a connectivity budget with a tipping point. Different objects: one is a valence rule, the other a candidate threshold. Named in F4, not smoothed over. |
| "This is a mint of a new diversification term" | **Refused.** All atoms are held. Fig 5 would return "nothing new here". This is a stop with a lineage, not a new primitive. |
| "The aggregate variance is a safe summary metric" | **Refused.** Fig 1 :22 says aggregating across slots is how a live signal disappears into an average. |

### Round trip and strains

The condensation used across the folder is: independence decides union surplus; correlation is a hidden common source; the accounting is in effective slots; valence depends on purpose. The trip back down into a concrete portfolio, ecosystem or grid drops at least three things that the shorthand holds: the per-slot residual indexing (Fig 1 :19), the valence split (Fig 2 :39-41), and the third-order cascade reach (Fig 11 :52-53). `R_T` is therefore nonzero and is recorded qualitatively in `11_audit.md`. One strain is live and named: the quantitative turning point between shock-absorber and amplifier is not derivable from the figures (F7).

---

## 8. The honest stop

The shape survives and is checkable. The quantities the question probably wants (a number, a threshold, a named source for a given system) are not reachable from the figures and are not claimed. The answer stops at the limit of what the instruments can distinguish and records the lineage so the stop is checkable. Fig 13 :134: "Unreachable is a verdict here, not a silence" A ground reading, not agreement, would move it.
