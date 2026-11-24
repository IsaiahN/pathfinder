# Figure-grounded audit: can governments pick winners?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured and what would have to be true for the verdict to flip. Per `THE_FORMULA.md` (Formula step, mode rule): *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status: SIMULATED DERIVATION, not a ground reading.** This audit was produced by a model simulating the loop and checking the result for internal consistency against the figures. The framework's own rule (*The Recursive Self-Improvement Trap*, Isaiah N, adventuresinml, 2026-11-19): LLMs can *"simulate an approximate answer/output with the formula"* but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* No welfare measurement, policy record, or market outcome was collected here. This document cannot settle the question it reports on.

**Sources.** Verbatim figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, quoted as `Fig N :line`. Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md`. Loop: `FRAMEWORK/figures/THE_FORMULA.md`. Seats: `THE_SEAT_MAP_Field_Guide_amended.md`. World sources actually opened are in `10_source_ledger.csv`.

---

## 0. The question in effect terms

The question arrives as an either/or: either governments successfully pick winners, or they misallocate and reward political connections. Stated as a residual:

> **R = the gap, per firm or sector slot s, between the selection the public frame makes and what the paying ground will settle, after the resources have moved.**

It is a residual, not a sentiment. Fig 1 :19: **"The residual is indexed by object slot, not aggregated."** Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."** A national industrial-policy score or a single "did it work" verdict is exactly the aggregation that erases the signal. The honest object is a per-slot ledger: which firm, which instrument, which counterfactual, which ground reading.

Three observations about the question before any figure line is chosen:

1. It asks about an **ordered** relation. "Pick" means the selection precedes the outcome; a correlation between political connection and winning is symmetric and cannot choose the arrow. Operators table on symmetric versus ordered bonds: swapping operands under `+` changes nothing, under `→` it becomes a different thing.
2. It bundles at least three different jobs: knowing which firm will win, having a selector whose reading is not corrupted by its own interest, and tracing the cascade of a policy through a habitat it did not author. Fig 9 :4-5: **"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones."**
3. It has two candidate anchors: the market (customers pay, firms survive) and the political process (officials are rewarded). Which one is the anchor decides the whole answer. Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** If the selector's reward moves when the selector pushes on it, it is not an anchor.

## 1. R by arity, symmetry and scale

- **Arity.** At least three conditions in a union, not two options in a partition: knowledge, incentive, and habitat cascade. Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** Fig 9 :57: **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."**
- **Symmetry.** The selection-to-outcome relation is ordered (`→`), while the connection-to-selection correlation is symmetric (`+`). A pooled effect size cannot decide which produced which. This is the same guard used in the business seat-reasoning cases: a correlation reads the projection, not the source.
- **Scale.** Per firm is first order. Sector and national welfare are second order, composed from settled per-slot verdicts, and the transform between them is lossy (Fig 4 :30). A sector-level success and a firm-level rent can occupy the same aggregate number.
- **Dependency.** The instrument and objective link comes first, then knowledge, then incentive, then outcome. Fig 3 :20: **"The chain is ordered by dependency, not by importance."** Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."** The broken link in most of this literature is neither perception nor planning, it is the middle: Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."**

## 2. DOMAIN CENSUS (before choosing any figure line)

One line per domain: actors, currency, anchor. A domain is admitted only if a nameable anchor exists.

| domain | actors | currency | anchor (nameable?) | question type |
|---|---|---|---|---|
| **D1 Selection knowledge** | public analysts, firm managers, prices, customers | predictions and residuals per firm slot | YES: the paying market, which does not update on the analyst's belief | partition boundary: what is reachable inside the public closure |
| **D2 Political incentive** | officials, lobbyists, rent-seekers, firms | influence, rents, contributions, careers | YES: a non-updating counterfactual (competitive tender, independent review, published criteria); where absent, no anchor and collapse 1 applies | union: connection and competence overlap |
| **D3 Allocation outcome** | instruments (subsidy, tariff, procurement), firms, habitat | resources moved, entry, exit, output, welfare | YES: the counterfactual welfare or market test that settles whether resources moved to better use | union: misallocation has several sufficient conditions |
| **D4 Instrument / verification** | auditors, datasets, experimental designs, outside frames | residuals, refuters, provenance | YES: the ground, which does not decay; the channel does (Fig 10 :24) | dependency: precedes D1 to D3 |

**Partition or union.** Union of overlapping conditions (Fig 9 :54-58), not a partition. A single lever, "ban industrial policy" or "pick better firms," leaves the intersections standing. A firm can be both a genuine market winner and politically connected; the two conditions bind at once and the case is categorically different from either.

**Order by dependency (Fig 3).** D4 (instrument, objective) precedes D1 (can the ground be read), which precedes D2 (does the reading update on the reader), which precedes D3 (what happens to resources). Effort spent at D3 before D4 is effort above the break.

**Strain test applied before conclusion.** Fig 11 :36 (*"intelligence is a label applied afterwards to a lineage that met its ground"*) seems to say selection can never be picked, while Fig 7 :35 (*"Selection between rooms is where the ground votes"*) says a seat can select. Re-census: Fig 11 governs the **unmaintained** habitat where no seat acts; Fig 7 governs the **maintained** case where a seat enumerates rooms and lets the ground vote between them. Different objects, so no strain after re-census. This mirrors the canonical re-census rule: a reading that makes two figures contradict one another has misidentified its domain.

## 3. FIGURE CENSUS

| figure | bearing on this question | verdict |
|---|---|---|
| **1 The Agent** | residual per slot; frame-internal quantities disqualified | no aggregate verdict admissible |
| **2 The Ground** | anchor must not update; no-anchor convergence on influence; correlation valence | decisive for D2 |
| **3 Dependency Chain** | objective/vocabulary link is the usual break | sets dependency order |
| **4 The Membrane** | methods cross up, recordings do not; round trip gap | warns against importing a success story as a method |
| **5 Mint Pipeline** | three guards as product; cost bargain | no figure-licensed winner can be minted from an ungrounded preference |
| **6 Closure / Reachability** | no escape from closure; import is the only wall-moving operator | decisive for D1 |
| **7 Room Chain** | selection between differing rooms is where ground votes; agreement is variation | permits a re-grounded "pick" |
| **8 Union Surplus** | idempotent closure; convergence versus adopted import; residual first | governs provenance of any claimed success |
| **9 Leave / Arrive** | split rather than search; unbundle a union; filters versus witnesses | governs the question's shape |
| **10 Ground Maintainer** | channel decay; verifier non-access; interest in the reading disqualifying | decisive for D2 and D4 |
| **11 The Habitat** | post-hoc winner label; valence relative to residual; asymmetric introduction; cascades; substitution | decisive for D1 and D3 |
| **12 The Bond** | isomer, catalyst, cycle, functional group; typed bonds | governs the supporting derivation in `06` |
| **13 Minimum Viable Set** | set closed, arrangements not; unreachable is a verdict | governs the gap on numerical rates |
| **Operators table** | `+` symmetric versus `→` ordered; `¬` refusal | blocks the correlation-to-cause move |
| **Symbols table** | `R` is the aim and always a slice; ground is the anchor | confirms per-slot residual |

## 4. FINDINGS F1 to F10

### F1: A "winner" is a post-hoc label, not a nameable object available before selection

Fig 11 :36: **"Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran. The word does no work there."**

The word "winner" does the same work as "intelligent" in that line. It is assigned after the ground has paid. Asking a selector to name the winner in advance asks it to read a residual that has not arrived. Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** And Fig 6 :32: **"An instrument is not built from a description. It is improved from a worse instrument already returning something."**

What survives: a **shape**, the set of conditions under which a lineage will meet a ground. What does not survive: a standing list. Fig 11 :51: **"No standing list of good actors survives a change of residual."**

**Refuter:** show a selection rule whose named pick, made before the payout, is the same object the ground later settles, across changes of residual, without importing an atom from the market frame. If such a rule exists, F1 is false.

**Status:** `triangulated` (Fig 11 :36 and :51 are the habitat route; Fig 6 :23 and :32 are the closure/instrument route; the two figure sets have low overlap). Not `grounded`: no policy prediction was tested.

### F2: An unanchored selection frame converges on influence, not on the winner

Fig 2 :13-15: **"no anchor; each updates on the others / they converge, and what they converge on / is whoever had the most influence."** Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**

This is the figure-grounded core of the "reward political connections" half of the question. It is not an empirical opinion about officials. It is what a checking arrangement does when its reference is another party to the disagreement rather than a ground: the agreement is a weighted average of influence. Seat Map :163: *"High correlation is disqualifying for a verdict and efficient for a convention."*

The disqualifying condition is named in Fig 10 :59: **"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."** Fig 10 :60: **"Where a stake cannot be removed, declare it. An undeclared interest is modelled anyway and an unnamed model runs unchallenged."** An official may want the policy to succeed. An official who benefits from the *reading* of whether it succeeded cannot be the reader.

**Refuter:** exhibit a selection process in which the selector has no interest in the reading (blind, pre-registered criteria, an independent verifier who cannot reconstruct the pick, a ground that does not move when the selector pushes). If connected firms still win under that arrangement at the same rate, the influence-collapse account is false.

**Status:** `triangulated` (Fig 2 :13-15 and Fig 10 :59-60 are separate figures with different actors and currencies). Not `grounded`.

### F3: Misallocation is a union of sufficient conditions, not one malfunction

Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** Fig 9 :57: **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."**

The conditions, each with a figure:

1. **Unenumerated cascade.** Fig 11 :52-53: **"Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."** A subsidy aimed at one firm changes entry, prices, and suppliers three steps out.
2. **Substituted habitat.** Fig 11 :66: **"Isolation is not removal of the habitat. It is substitution of one habitat for another."** Fig 11 :70: **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."** Protection substitutes a habitat and the firm that wins there need not win outside it.
3. **Asymmetric introduction.** Fig 11 :61: **"The seat's power is asymmetric. Introduction is available; exclusion is not."** A government can add an actor and cannot subtract the market. A managed habitat is permanent work.
4. **Aggregated signal.** Fig 1 :22, already quoted. A national employment or GDP total hides the losing slots.
5. **Convention promoted to verdict.** Fig 10 :47: **"a convention that decides an outcome has stopped being one."** An eligibility rule that was a shared meaning becomes a verdict when it decides who gets paid.

**Refuter:** show that one of these conditions is not sufficient even in combination with the others, or that a sixth condition with a different anchor is required and the union list is incomplete. The list is claimed as sufficient in union, not exhaustive of all worlds.

**Status:** `triangulated` for the union shape (Fig 9 plus Fig 11 plus Fig 1 plus Fig 10, four distinct figures); `single-source` for the specific five-item enumeration, which is this derivation's reading of those figures, not a figure line.

### F4: The figures do not return a probability that governments misallocate

Fig 9 :32: **"you get a kind of thing, never the answer itself."** Fig 13 :134: **"So the system can report that it lacks something rather than producing an answer anyway."** Fig 13 :135: **"It cannot say which primitive is missing, because naming it would mean already holding it."**

No figure line returns " governments succeed X percent of the time" or "rent-seeking dominates in Y cases." That quantity needs an instrument and a counterfactual, and no amount of closure-internal search manufactures it. Fig 8 :39: **"So a search that finds nothing is never a proof of absence."** The honest mark is `gap`, of the unreachable-at-this-budget kind, not underivable in principle and not silence.

**Refuter:** exhibit a figure line that does return a numerical success rate, with the derivation from the six-term set to the number. Until then, any percentage in this debate is a world-source estimate, not a Tether result.

**Status:** `gap`. This is a verdict, not an omission.

### F5: A market-led and a state-led allocation over the same atoms are isomers

Fig 12 :117: **"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** If both allocators are written over the same held atoms (firms, capital, demand, information, time, a ground), what differs is the bond: price signal (`→` through a market) versus administrative selection (`→` through an office). Same ingredient list, different substance.

This matters because the common question "which allocator is better" assumes the two are variants of one thing. Fig 12 :94: **"The arrangement is the substance."** A change of bond is a categorical change, not a degree of the same dial. It also matters that a catalyst can survive its own use: Fig 12 :119: **"A part that survives its own use."** A selection office that is spent and regenerating behaves differently across uses, and nothing in a policy's ingredient list records which it is.

**Refuter:** show that the two allocations can be written with the same typed bonds over the same atoms and still differ only in degree. Then the isomer claim fails and a scalar comparison is licensed.

**Status:** `single-source` on the figure definition (Fig 12), with the world check unmeasured. Mode `specified`.

### F6: The rent-seeking loop is a cycle, and the sign decides whether it closes

Fig 12 :121: **"The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** A connection buys a selection; the selection yields a rent; part of the rent buys the next connection. That is a positive feedback cycle. Its alternative, a selection that pays for itself and then loses the standing to select again, is a negative loop. The flat policy description records neither sign.

Fig 6 :24: **"Import from a live peer is debited against that frame's independence. A wrong atom costs more than starting from primitives."** A regulator that imports its market knowledge from the firms it regulates spends precisely the independence that would make its verdict count. World corroboration for this exact mechanism is in `09` WORLD: the Wikipedia *Rent-seeking* article notes that regulatory capture is *"especially when the government agency must rely on the firms for knowledge about the market."*

**Refuter:** show a rent cycle whose output does not re-enter as input, or a selection with a positive loop that does not close. Then Fig 12 :121 has been misapplied to this object and the domain needs re-census.

**Status:** `triangulated` in shape (Fig 12 cycle plus Fig 6 import debit plus a low-overlap world source on regulatory capture). Not `grounded`.

### F7: Success stories are recordings, and recordings carried across a boundary produce replay, not capability

Fig 4 :22: **"Only methods cross up. Only head starts come down."** Fig 4 :25: **"A recording carried upward looks like knowledge and is a description of one occasion."** An East Asian developmental state, a successful mission-oriented agency, or a celebrated procurement program, cited as "proof that picking works," is a recording of one occasion. Replayed in another habitat it produces a system that repeats a past success and cannot produce a new one.

Fig 8 :50-52: **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them."** This is why the provenance of every cited success must be recorded: independently derived from a difference the figure predicts (convergence, admissible as weak corroboration), or lifted from one case and installed in another (an import with a source gate and shadow test still owed).

**Refuter:** exhibit a transferred policy that carries its binding arrangement intact, with the provenance and the shadow test recorded, and still fails. That would show the boundary is not where this figure places it.

**Status:** `triangulated` (Fig 4 membrane plus Fig 8 provenance). Not `grounded`.

### F8: There is no nameable "right firm," but there is a nameable separator

This is the correction to my own first pass, kept visible. I initially wrote that the figures forbid naming any winner and that the whole question is therefore a `gap`. Re-census shows that is an overstatement. The canonical limit is about a **missing primitive**, not about binding an atom already held. The exact wording in the figures README is *"what a missing thing would have to look like (a shape, not a name)."* Firms, capital, demand and a ground are already in the habitat; naming a specific firm as a candidate is a binding from the world frame, not the invention of a seventh primitive. What remains forbidden is treating that binding as a derivation or as an import that moves the wall.

What the figures do fix is the **separator** (D4): per-slot residual, non-updating anchor, low-overlap frames, pre-registered refuter. Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** Effect sizes, prestige, and track records are filters for the budget. They are not witnesses for the verdict.

**Refuter:** show a figure line that selects a particular firm, sector, or instrument, or a case where a high-prestige endorsement legitimately settles an allocation question without a ground reading.

**Status:** `triangulated` (Fig 9 plus the canonical README). The retraction is recorded in section 9.

### F9: Selection is permitted, but only as selection between differing rooms

Fig 7 :35: **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."** Fig 7 :36: **"The next room must differ from the last, and match the residual it surfaced."**

This is the figure-grounded repair of option A. "Government can pick winners" is not refused outright. What is refused is a room that agrees with itself and calls its agreement a verdict. What is permitted is a maintained seat that enumerates several genuinely different policy rooms, writes down the residual each surfaced, and lets a ground that cannot be moved by the rooms vote between them. A single agency, one advisory panel, one house view, is one long room: motion without progress.

**Refuter:** show a single closed room whose internal agreement tracks the ground without an external anchor, across changes of residual. By Fig 2 :34 that would be coherent drift, and if drift can track a ground the figure is wrong.

**Status:** `triangulated` (Fig 7 plus Fig 2). Not `grounded`.

### F10: The evidence pool problem is structural in this literature

Fig 2 :40: **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."** Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."**

Economists debating industrial policy overwhelmingly cite the same cluster of cases: South Korea, Taiwan, MITI, the Napoleonic Blockade, Chinese shipbuilding, the 2025 optimal-policy estimates. Two papers that both cite Amsden 1992 and Barwick et al. 2019 are not two witnesses; they are one evidence pool with two sets of words. Fig 8 :48-49 makes the same point as a surplus condition: *"How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus."*

This is why `09` WORLD marks overlap per source rather than counting heads, and why the genuinely low-overlap witnesses here are survivorship bias (cognitive science) and the tautology discussion around "survival of the fittest" (evolutionary biology), not yet another industrial-policy review.

**Refuter:** exhibit two policy-evaluation frames with demonstrably independent data, instruments, and closures whose agreement survives the overlap test. Then the agreement carries verdict weight it currently does not.

**Status:** `triangulated` (Fig 2 plus Fig 8). Mode `general` on the structural claim.

## 5. Verdicts per domain (kept separate, never averaged)

| domain | verdict | mode | status | one-line reason |
|---|---|---|---|---|
| D1 selection knowledge | A standing winner list is refused; a shape plus a refuter is returned | `specified` | triangulated | Fig 11 :36/:51, Fig 6 :23/:32 |
| D2 political incentive | Where the reading updates on the reader, the outcome converges on influence; where an unmoved anchor exists, triangulation is possible | `specified` | triangulated | Fig 2 :13-15/:35, Fig 10 :59-60 |
| D3 allocation outcome | Misallocation is a union of at least five sufficient conditions; the numerical magnitude is `gap` | `specified` on conditions, `gap` on rate | triangulated on shape, gap on number | Fig 9 :55/:57, Fig 11 :52-70, Fig 1 :22 |
| D4 instrument / verification | Separator named; no figure supplies a policy parameter or a success rate | `general` structural | triangulated | Fig 9 :32/:60, Fig 13 :134-135 |

**No averaging.** A country with a clean anchor but a substituted habitat and a country with an unanchored selector but clean habitat are not points on one scale. They are different compounds (Fig 9 :57).

## 6. Strain test and re-census

| apparent strain | re-census | result |
|---|---|---|
| Fig 11 :36 says the winner is only a post-hoc label, Fig 7 :35 says a seat can select | Fig 11 governs the unmaintained habitat (no seat); Fig 7 governs the maintained case (a seat enumerates rooms and the ground votes) | dissolved, both readings kept |
| "shape, not a name" seems to forbid naming a winner at all | The canonical limit governs a missing primitive. Firms and grounds are held atoms; naming one is a binding, not a new primitive | corrected in F8, retraction visible in section 9 |
| Fig 2 :40 says agreement is worthless, Fig 8 :45 says two frames reach a surplus | Fig 2 governs verdict weight of agreement; Fig 8 governs surplus of composition when closures differ; same independence parameter, two quantities | dissolved |
| Fig 11 :61 says introduction only, but policy can withdraw a subsidy | Withdrawal is the removal of an added actor, not subtraction of the habitat; the market contact persists | dissolved by re-census |

**After re-census: no live figure strain.** One `gap` (the numerical rate) and one world-source disagreement (whether optimal policy gains are 1.08 percent or 4.06 percent of GDP, from the Wikipedia *Industrial policy* summary of Bartelme et al. 2025) are recorded, not smoothed.

## 7. Pre-registered refuter (written before the conclusion)

A falsifier written before the run is a design instrument. The separator is refuted if any of the following holds:

1. **Anchor fails.** A selection rule is shown whose ground moves when the selector pushes on it, yet the rule still separates winners from connected winners out of sample.
2. **Per-slot fails.** A pooled welfare gain is demonstrated to be sufficient for deciding which individual firm or sector slot was correctly selected, with no residual left at any slot.
3. **Independence fails.** Two frames drawing on the same evidence pool are shown to carry full verdict weight without an overlap debit, or an outside checker who can reconstruct the claim is shown to verify it soundly.
4. **Isomer fails.** Market-led and state-led allocation can be written with identical typed bonds over identical atoms and still differ only by degree.
5. **Cycle fails.** A rent cycle is exhibited whose output does not re-enter as input, or a positive loop that provably never closes.
6. **Instrument fails.** A figure line is produced that returns a numerical success rate for governments picking winners, derived from the six-term set.
7. **World conflict.** A low-overlap experimental frame, with its own data and its own non-updating ground, returns a verdict that contradicts the separator and survives the source-gate and shadow-test checks.

If any fires, the relevant finding is withdrawn and this folder is retracted in `11_audit.md` with provenance. Until one is run, nothing here is `grounded`.

## 8. Filters versus witnesses

| item | role | why |
|---|---|---|
| Prestige of an economist or agency | filter for budget only | Fig 1 :24-26 disqualifies frame-internal quantities; Seat Map :163 |
| Number of endorsing experts | filter for budget only | Fig 7 :35, agreement is variation not a verdict |
| Effect size (for example 1.08 percent of GDP) | filter for budget only | Fig 9 :60, never let a filter hand you a verdict |
| Country case studies | witnesses only if provenance and shadow test are shown | Fig 8 :50-52 |
| A non-updating ground reading per slot | witness | Fig 2 :29, :45 |
| Two low-overlap frames ranging separately against it | witness | Fig 2 :31-32, :35 |

## 9. Recommendation

1. Do not present the question as a binary. Present the union and the four-domain separator (F3, F8).
2. Lead with the pre-registered refuter, not with a conclusion about industrial policy (section 7).
3. Withhold any numerical success rate. It is a `gap`, and inventing one is the named failure mode (F4).
4. Require provenance for every cited success story: independently derived convergence or an imported recording with a source gate and shadow test (F7).
5. Ask the outside checker what they would count as a failure **before** showing them the framework (Fig 10 :52).
6. Keep D2's interest declaration visible. An official's interest in the outcome is unavoidable; an interest in the reading disqualifies (Fig 10 :59-60).

## 10. Canonical usage check and retraction / confirmation log

Read after sections 0 to 6 were drafted, as the canonical usage rule requires: `FRAMEWORK/reference/FIGURES_README_canonical.md`. Two of its sentences govern how the figures may be used here: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* And: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*

| earlier reading | status after the canonical check |
|---|---|
| "The figures forbid naming any winner; the whole question is a gap" | **Retracted and narrowed.** The limit governs a missing primitive, not a binding onto held atoms. F8 records the correction. |
| F1 called "decisive" | **Downgraded to a structural verdict on a standing list.** Fig 7 :35 permits a maintained seat selecting between differing rooms; what is refused is the pre-payout name and the standing list. |
| "Political connections are the cause of misallocation" | **Retracted as a causal claim.** Fig 2 :13-15 gives the no-anchor mechanism; it does not prove that every observed connection is a cause. D2 is `specified`, not `grounded`. |
| F4 (no numerical rate) | **Canonically confirmed.** Fig 13 :135: the framework cannot name what it does not hold. Fig 9 :32: a kind of thing, never the answer itself. |
| F5 (isomers) | **Confirmed with a boundary.** Over a fixed atom set only, and `single-source` on the figure definition. |
| Fig 11 versus Fig 7 apparent conflict | **Not strained.** Re-census: unmaintained habitat versus maintained seat, as section 6 records. |
| Fig 2 :40 versus Fig 8 surplus | **Not strained.** Verdict weight versus compositional surplus, same independence parameter. |
| My own derivation is a ground reading | **Refused.** It is a simulation, checked for internal consistency only. See the status line at the top. |

### Seven-question recursive derivation (summary)

1. **Is "pick the winner" a nameable object?** No. Fig 11 :36 makes it a post-hoc label; Fig 6 :23 blocks the read from inside the closure.
2. **Which figure governs the connections half?** Fig 2 :13-15 plus Fig 10 :59-60. No anchor means convergence on influence.
3. **Is the question one question?** No. Fig 9 :4-5 and :55-57 make it a union of at least three conditions.
4. **Can a selector ever legitimately choose?** Yes, but only as selection between differing rooms with a ground that votes (Fig 7 :35-36).
5. **Can a winning recipe be imported?** Only with a source gate and shadow test; otherwise it is a recording of one occasion (Fig 4 :22-25, Fig 8 :50-52).
6. **What is composed?** Isomers over a fixed atom set, a rent cycle whose sign decides closure, and catalysts that survive their use (Fig 12 :117/:119/:121).
7. **What is unreachable?** The numerical success rate and the identity of the specific missing instrument. Fig 13 :134-135. Reported as `gap`, not silence.

### Updated verdict

The separator survives. A winner is not a nameable pre-payout object; an unanchored selector converges on influence; misallocation is a union of conditions rather than one malfunction; and selection is permitted only as ground-voted selection between differing rooms. What does not survive is my first-pass claim that the whole question is a nameless gap, the causal claim that connections always cause the misallocation, and any numerical rate. Strains after re-census: none. Gaps: one, declared. Status: `specified` on the derivation, `general` on the structural shape, `gap` on the number, not `grounded`.
