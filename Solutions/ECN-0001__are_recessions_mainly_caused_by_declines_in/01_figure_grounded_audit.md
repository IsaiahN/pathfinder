# Figure-grounded audit: are recessions mainly demand, supply, or interacting shocks?

**Mode of this document: `specified` on the per-domain verdicts, `general` on the structural shape, `gap` on a single universal main cause. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §7.

**Sources for the figure lines.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`. Every quoted string below is an exact substring of that file (case-insensitive, trailing punctuation ignored). The canonical usage rule is `FRAMEWORK/reference/FIGURES_README_canonical.md`. World sources are recorded in `10_source_ledger.csv` and are secondary only.

---

## 0. The residual, stated in effect terms

R is the decline in measured economic activity that the current frame did not predict and cannot assign to one mechanism without a discriminator. Stated as an effect, not a theory:

- **What failed to resolve:** a fall in output and employment that is read from one aggregate series (GDP, unemployment) while three candidate mechanisms (demand decline, supply disruption, their interaction) each remain capable of producing that same reading.
- **Per slot, not global:** the fall is indexed by sector, region, factor and time. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." A single "recession" number pools the slots that would tell us where to look.
- **The ordinary term bound for the loop:** "main cause" means a single residual-owning mechanism with a nameable, non-updating anchor such that, if it were removed, the recession would not have occurred. Binding it as a term (Formula step "Direction") is what lets it accrue a residual and be refused, instead of remaining an invisible preference for a one-cause answer.
- **What an answer would look like:** either (A) one mechanism returns with an anchor that discriminates it from the other two across episodes, or (B) the trichotomy is refused as a union of overlapping conditions and a separator plus a discriminator is returned in its place. This derivation finds (B), with the universal single-cause answer recorded as `gap`.

---

## 1. Domain census (before any figure line is chosen)

### R by arity, symmetry and scale

- **Arity:** the question offers three options, but the underlying conditions are many and overlapping. The mapping from causes to the observed reading is many-to-one, so arity at the measurement level is one pooled reading with several possible sources.
- **Symmetry:** "demand" and "supply" are not symmetric mirror labels at the level of the reading. Both lower output; they push prices in opposite directions. The reading alone cannot orient the arrow, so a symmetric reading is being asked to decide an ordered, source-level question.
- **Scale:** first order inside one sector or slot (a spending fall or a production disruption); second order at the network level, where a shock to one sector cascades through input-output linkages. The "interacting" option names the second-order region.

### One line per domain: actors, currency, anchor

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D1 Measurement and diagnostics | GDP, unemployment, inflation, NBER dating, sectoral series | a pooled aggregate reading | the data, but as a *reading* rather than a source-discriminating instrument | inverse problem, underdetermined |
| D2 Mechanism and contact | households, firms, banks, government, central bank, external shocks (oil, pandemic, credit) | spending, production, credit, expectations | an exogenous variation that does not update on the economy's own reports, imported from a differing frame | union of overlapping conditions |
| D3 Identification and attribution | VAR/SVAR restrictions, natural experiments, variance decompositions | identification and variance shares | a source-discriminating instrument; the share is a budget filter, not a witness | partition attempt that fails; returns a shape |
| D4 Policy and response | monetary and fiscal authority, rule makers | policy instruments | outcomes, which do not update on the policy's own announcement | convention-versus-verdict test |

No domain is admitted without a nameable anchor. D1's anchor is explicitly demoted to a reading, which is why D1 ends in `gap` rather than a cause. D2 and D3 both require an imported discriminator; that is the atom owed.

### Partition or union

Union, not partition. Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." A recession can satisfy demand *and* supply conditions at once (the Great Recession and the COVID episode both did, per the world sources in §8), so one lever clears only the region where one condition holds and leaves the intersections standing.

### Order by dependency (Fig 3)

Fig 3 :20: "The chain is ordered by dependency, not by importance." The chain runs: perception (measure per slot) -> vocabulary (terms for demand, supply and interaction with typed bonds) -> objective (what counts as progress: discriminating the source) -> planning (an identification strategy) -> learn and carry. The likely break is between vocabulary and objective: macroeconomics can name its ingredients (aggregate demand, aggregate supply) but has no instrument that states progress on the source question. Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." Effort spent refining the aggregate series (perception) cannot rescue the missing objective link.

---

## 2. Figure census (bearing and verdict, before conclusion)

| figure | bearing on this residual | verdict it supports |
|---|---|---|
| **1 The Agent** | residual per slot, never averaged; ground is the only metric | the "main cause" aggregate is the wrong object |
| **2 The Ground** | anchor must not update; independence is low overlap | attribution needs a non-updating anchor and low-overlap frames |
| **3 Dependency Chain** | chain ordered by dependency; a link with no instrument | the source-discriminating instrument is the broken link |
| **4 The Membrane** | methods cross up, head starts down; round-trip gap | the share decompositions are methods, not recordings of one cause |
| **5 Mint Pipeline** | three guards as product; MDL bargain | a new cause term needs support, reach and novelty; none has a settled ground |
| **6 Closure / Reachability** | import is the only operator that moves the wall; instruments improved from worse ones | the discriminator is an import with a source gate and shadow test |
| **7 Room Chain** | a room's agreement is variation, not a verdict | agreement among macro schools is not corroboration |
| **8 Union Surplus** | low overlap creates surplus; residual first, frame second; absence is not proof | two frames can name a cause only if their closures differ at the evidence level |
| **9 Leave / Arrive** | split a disagreement that does not shrink; union versus partition; filters not witnesses | decisive: the trichotomy is a union, the share is a filter |
| **10 Ground Maintainer** | ground does not decay, channel does; a convention that decides an outcome stops being one | pooled metrics sever the channel; "demand management always works" is a failed convention |
| **11 The Habitat** | valence relative to residual; no standing list of good actors; contact cascades | a shock is not intrinsically a cause; first-order enumeration misses third-order effects |
| **12 The Bond** | isomers; arrangement is the substance; two currencies do not add | demand-recession and supply-recession are isomers over a fixed atom set |
| **13 Minimum Viable Set** | set closed, arrangements not; unreachable is a verdict; the question must be split | no seventh "cause" is composable; the universal answer is a gap |
| **Operators table** | negation refuses; comparison is a threshold relation | the universal-cause term is refused, not replaced by a new operator |
| **Symbols table** | R is the aim and is always a slice | what cannot be perceived yet (the source) is residual, not absent |

Strained readings are named in §4, not smoothed over.

---

## 3. Findings

### F1: The disagreement does not shrink, so split it (decisive)

Fig 9 :4-5: "First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."

The demand rule works well on some episodes (the Great Recession in several decompositions); the supply rule works well on others (the 1970s oil shocks); the interaction rule works on the overlapping episodes. Each rule keeps working on a different subset, so by this figure the trichotomy is not one hard question with three answers. It is several well-formed questions that have been bundled. Fig 13 :136: "What it can do is narrow. It can say the question is not one question and must be split before it is searched again."

**Refuter:** show that one rule works uniformly across all episodes with a non-updating anchor that discriminates it from the alternatives. Then the split is unnecessary and F1 falls.

### F2: The question is a union of overlapping conditions, not a partition

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

"Demand", "supply" and "interacting" are not three exhaustive, mutually exclusive boxes. Interaction is the intersection of the first two, which is why it cannot be a third cause of the same kind. The world sources in §8 report episodes with both negative demand and negative supply shocks (Bekaert, Engstrom and Ermolov 2017; Baqaee and Farhi 2020), which is direct evidence for the overlap. Unbundling means: per episode and per slot, enumerate which condition holds (Fig 11 :43, "The habitat is enumerated, never composed."), then ask which instrument clears it.

**Refuter:** demonstrate that the three conditions form a partition (no episode satisfies two), for example by producing a classification in which every recession has exactly one sign pattern with no overlap. F2 would then collapse to a three-way partition and one lever would clear each box.

### F3: The aggregate reading is the wrong object (per-slot residual)

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

A recession is a pool of sectoral and regional declines. The "main cause" question is asked at the aggregate level, where the per-slot signal that would discriminate demand from supply has already been averaged away. Fig 10 :24: "the ground does not decay, the channel does" and Fig 10 :26: "stale percepts, dropped transients, saturated metrics, pooled readings" name the failure: the data still exist, but the channel that would carry a discriminating reading has been saturated by pooling. The low-overlap world source on disaggregated shocks (a production-network study retrieved in §8) reports that sectoral shocks explain more of output fluctuations than aggregate shocks, which is the world-side echo of this figure line.

**Refuter:** show that the aggregate reading preserves the source-discriminating information (for example, that one aggregate series uniquely identifies demand versus supply without any price, credit or sectoral disaggregate). Then per-slot indexing is not owed here.

### F4: A cause is not a standing label; valence is relative to the residual

Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries." Fig 11 :50: "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds." Fig 11 :51: "No standing list of good actors survives a change of residual."

An oil price rise is a supply disruption for an importer and a demand boost for an exporter; a credit contraction is a demand shock in one slot and a supply constraint in another. There is no standing list of "the causes of recessions", because valence flips when the residual changes. The question's request for one main cause is structurally the request for a standing list that Fig 11 refuses. What survives is a relation: which mechanism occupies which slot against which residual.

**Refuter:** exhibit a mechanism whose valence is invariant across residuals and slots (a cause that is a supply disruption everywhere and always, with no possible demand interpretation). F4 is then narrowed to that mechanism.

### F5: Contact cascades; the residual is often three steps out

Fig 11 :52-53: "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."

The figure's own example is ecological, but the rule is domain-agnostic (Fig 4 :19-20: the kernel is the part that does not change with size; only actors, currency and anchor change). A housing-price fall reaches employment through bank balance sheets, shadow-banking rollover risk, fire sales and credit supply; the Christiano (2017) source in §8 describes exactly that chain and calls it a "perfect storm" in which none of the three factors alone would have caused a major recession. First-order enumeration (did spending fall?) misses the third-order mechanism (did a funding structure make the fall explosive?). This is why "interacting shocks" is a union compound with its own loop, not a synonym for "two causes at once".

**Refuter:** show that for the episodes in question the residual is always first-order (direct contact only) and that no second- or third-order mechanism changes the sign of the outcome. Then the cascade clause is idle here.

### F6: Demand-recession and supply-recession are isomers over a fixed atom set

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Fig 12 :94: "The arrangement is the substance." Fig 12 :5: "The bond is the rest of the information, and it is the half nothing was recording."

Write both over the same held atoms (spending, production, credit, expectations, productive capacity, time): a demand-recession arranges them as a fall in spending that pulls production down through a credit channel; a supply-recession arranges them as a loss of productive capacity that pushes prices up while pulling production down. Same atoms, different typed relations, different substance. The difference is invisible in the headline GDP formula and decisive in behaviour: one responds to demand stimulus, the other may only inflate. The full derivation, including the fixed-atom condition and its falsifier, is in `06_isomers_and_order.md`.

**Refuter:** show that one of the two requires an atom the other does not (for example, that a supply recession cannot be written without a physical-capacity term that a demand recession never invokes). Then they are not isomers over a fixed set and the weaker "different members of a functional group" reading stands. This refuter is live and is recorded as a strain in §4 and in `11_audit.md`.

### F7: The share is a filter for the budget, not a witness for the cause

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

The empirical literature answers "how much" with variance decompositions: Blanchard and Quah (1988/1989) report that at a four-quarter horizon the demand contribution ranges from 40 to over 95 per cent under alternative assumptions. That range is information about how much of the budget to spend on each identification strategy; it is not a verdict that demand is or is not the main cause. A filter deciding the verdict is the named error. Fig 2 :39: "Correlation has valence." Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Two decompositions using the same aggregate series are one evidence pool wearing two names.

**Refuter:** produce a variance share that is invariant across identification frames and that comes with a non-updating anchor, then show the field uses it as a verdict rather than a budget. F7 would be narrowed to that share.

### F8: Attribution is an inverse problem; absence of a discriminator is a gap, not silence

Fig 8 :39: "So a search that finds nothing is never a proof of absence." Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 13 :134: "Unreachable is a verdict here, not a silence."

Reading a cause off an aggregate series is an inverse problem: effects to causes, with a many-to-one forward map. The inverse-problem source in §8 (opened directly) states that the solution is not unique and the problem is undetermined without additional information. That is exactly the figure's point: what is owed is a better instrument (an import carrying provenance and a shadow test, Fig 6 :23, Fig 8 :50-52), not a name. The figures can specify the shape of that instrument (a non-updating anchor, low-overlap frames, per-slot readings). They cannot name which mechanism it will find. That is a `gap` of the unreachable-at-this-budget kind, reported plainly.

**Refuter:** exhibit a source-discriminating instrument that returns the same named cause across all episodes and sectors with a non-updating anchor. The gap is then closed and the answer moves toward `grounded`.

### F9: A convention that decides the outcome has stopped being one

Fig 10 :47: "a convention that decides an outcome has stopped being one." Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

A school-level commitment ("recessions are always demand failures", or "always supply failures") is a shared meaning until it is used to pick the policy instrument; then it decides an outcome and has become a verdict, which requires a ground. Agreement among economists who read the same textbooks is one evidence pool talking, not two frames ranging against an anchor. The legitimate ask of an outside checker is what would refute the separator, never whether they agree with it.

**Refuter:** show a case where a school-level convention is used only to coordinate meaning and never to pick an instrument or predict an outcome. Then Fig 10 :47 does not bite that case.

---

## 4. Strain test and re-census

**S1, Fig 13's physical six-term substrate applied to macroeconomics.** Mapping space/time/energy and spectrum/gradient/network onto sectors, intertemporal succession, finite budgets, ordering, price directedness and production-credit linkages is a *binding*, not a derivation. Re-census: Fig 12 :104 says a settled molecule becomes an atom at the next level, so the substrate recurs level-relatively, and Fig 4 :19-20 says only actors, currency and anchor change. "Shape, not a name" governs a *missing* primitive (canonical README), so naming a held atom is provenance, not an invented seventh cause. The mapping is useful for the isomer claim in `06`, but it is recorded as a binding with a strain on whether a finite budget is the same kind of thing as conserved energy. The strain is named, not hidden.

**S2, Fig 11 :51 versus the question's standing list.** No contradiction after re-census. Fig 11 governs actor valence relative to a residual; the question asks for a list invariant to residuals. The figure refuses the question as posed, which is the finding F4, not a conflict with another figure.

**S3, "interacting shocks" versus the ⋛ comparison bond.** A first pass tried to map interaction onto ⋛. Withdrawn. The Operators table defines ⋛ as a threshold relation between two quantities, not a general interaction operator, and forcing it would be a strain that governs another quantity. Re-census assigns interaction to the union's overlapping region (Fig 9 :54-57) and to the contact cascade (Fig 11 :52-53). The withdrawal is preserved here.

**After re-census: one live strain (S1), one live refuter condition (F6's fixed-atom requirement), none hidden.**

---

## 5. Pre-registered refuter (written before the conclusion)

Required before the run: Fig 7 context and the standing instruction that a falsifier written before the run is a design instrument. The separator shape claim is refuted if any of the following holds:

1. One mechanism accounts for all recession episodes with a non-updating anchor that discriminates it from the other candidates (kills F1 and F2).
2. The conditions form a partition rather than a union: no episode satisfies two at once (kills F2).
3. Demand-recession and supply-recession are shown not to be isomers over a fixed atom set, because one requires an atom the other does not (kills F6 and leaves the functional-group reading).
4. A source-discriminating instrument exists and returns one named cause across episodes and slots (closes the gap in F8 and moves the verdict toward `grounded`).
5. A per-slot reading is shown to be unnecessary because one aggregate series already carries the source information (kills F3).

If any fires, the corresponding finding is withdrawn and the answer is rewritten. Until one is run, nothing here is `grounded`.

---

## 6. Recommendation

1. Stop asking "which one is the main cause" and ask, per episode and per slot, which condition holds and which discriminator would settle it (F1, F2, F3).
2. Keep the three verdicts separate and never average them into a universal percentage (Fig 1 :19, Fig 9 :60).
3. Treat any variance share as a budget filter, and buy independence in proportion to the cost of being wrong (Fig 2 :42).
4. Owe a source-discriminating instrument explicitly: low-overlap identification frames, a non-updating anchor, and per-sector readings. Import it with provenance and a shadow test (Fig 6 :23, Fig 8 :50-52).
5. Offer the separator as a method, not a conclusion: *"Only methods cross up. Only head starts come down."* (Fig 4 :22). Lead with the refuter; offer the links only after a verdict on stage 1 is recorded.

---

## 7. Canonical usage check

Two framework sources govern how the figures may be used, read after the first four sections:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the quotes are the authority, not the summary; a reading that makes one figure contradict another has misidentified its domain; the framework returns *"what a missing thing would have to look like (a shape, not a name)"* and stops at the limit of the available instruments, recording the lineage so the stop is honest. It also states *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: step 7 separates SEARCHED, INWARD and OUTWARD; step 5 says a gate is not the ground; the mode rule is stated in §0 above.

Applied here: the universal main cause is not found after SEARCHED (the decompositions disagree by construction, F7); INWARD (finer aggregates) cannot create a source-discriminating instrument out of a reading that never carried it (Fig 6 :34); OUTWARD (a low-overlap identification frame) is what can import one, debited against independence. These three are kept distinct.

### Retractions and confirmations of my own earlier readings

| earlier reading | status after the canonical check |
|---|---|
| "interaction is the ⋛ bond at the macro scale" | **Withdrawn** (S3). ⋛ is a threshold relation between two quantities, not an interaction operator. Interaction is the union's overlapping region plus the contact cascade. |
| "the figures forbid naming demand or supply" | **Narrowed and kept visible.** "Shape, not a name" governs missing primitives. Demand and supply are bindings onto held atoms, so naming them is provenance, not an invented primitive. |
| "one main cause must exist, we just have not found it" | **Retracted.** Fig 9 :4-5 splits the question; Fig 11 :51 refuses the standing list. Replacing the search with the split is the finding, not a postponement. |
| "the inverse-problem analogy is the derivation" | **Retracted.** The inverse-problem source is secondary corroboration only; the verdict comes from Fig 1, Fig 9 and Fig 11. |
| first-pass "global R" framing | **Retracted at slot level.** A global recession rate is the pooled reading that hides the signal (Fig 1 :22). Residual stays per slot. |
| F1 split, F2 union, F3 per-slot, F4 valence, F8 gap | **Canonically confirmed.** Each survives against the figures README's re-census rule and the verbatim text. |

---

## 8. Updated verdict (per domain, kept separate)

| domain | verdict | mode | status |
|---|---|---|---|
| D1 Measurement | No main cause is recoverable from one aggregate reading; underdetermined inverse problem | `general` shape | `gap`, triangulated (Fig 1 :19/:22, Fig 8 :39, Fig 9 :4-5) |
| D2 Mechanism | Union of overlapping conditions; demand- and supply-recessions are isomers over a fixed atom set; interaction names the intersection plus the cascade | `specified` | triangulated (Fig 9 :54-57, Fig 12 :117, Fig 11 :52-53) |
| D3 Identification | What is owed is a source-discriminating instrument with low-overlap frames and a non-updating anchor; the share is a filter | `general` structural, `specified` on the instrument | triangulated (Fig 2 :29/:31, Fig 3 :27, Fig 9 :60) |
| D4 Policy | A school-level rule that picks an instrument is a verdict, not a convention; it must answer to a ground that does not update | `specified` | single-source on the figure side for the convention clause (Fig 10 :47), corroborated by Fig 11 :51 |

The three option verdicts are never averaged. A universal single "main cause" is a `gap` of the unreachable-at-this-budget kind, not underivable in principle: a discriminator could exist, but none is held and none is returned by these figures. Unreachable is a verdict, not a silence (Fig 13 :134). The honest stop is the shape plus the refuter, recorded so a later reader can locate the error.
