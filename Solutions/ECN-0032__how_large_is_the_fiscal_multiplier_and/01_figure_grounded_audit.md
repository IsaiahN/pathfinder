# Figure-grounded audit: the fiscal multiplier question

**Mode of this document: `specified`, with the structural shape in `general` mode.** It states what would have to hold; it does not measure any multiplier. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (opened 2026-11-23) says *"the truly testable output would need to be derived from the real architecture or working the formula yourself"* and that LLMs can only *"simulate an approximate answer/output with the formula"*. This audit is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Sources.** The local figure text extract `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical figures README, `THE_FORMULA.md`, and `THE_SEAT_MAP_Field_Guide_amended.md`, all read this session; plus the public pages in `10_source_ledger.csv`, fetched 2026-11-23.

---

## 0. The residual in effect terms

The question asks for a coefficient `k` such that a unit change in government purchases `G` produces `k` units of change in output `Y`. The observation that generates the residual is that no single `k` forecasts the response across slots: the same spending change is reported as roughly 1 in some settings, well above 1 in downturns with monetary accommodation, and near or below 1 in others. Predicted `k = constant` versus observed response, per slot, is the gap.

- **Arity.** `k` is not a scalar. It is a function of at least two indices (state of the economy, country) plus a third (the identifying frame that produced the estimate). At minimum the sought object is a vector over slots.
- **Symmetry.** The response is not invariant under swapping slots. A spending rise in a recession and the same rise in an expansion are different objects, so the bond between `G` and `Y` is condition-dependent, like an ordered bond in Fig 12 (the operands are the same, the relation is not).
- **Scale.** A policy decision at the fiscal authority produces a response at the national-accounts level that cascades through households, firms, financial conditions and the external sector. First-order enumeration is not enough (Fig 11 :52-53).

**Bound the sought shape as an ordinary term before searching.** What an answer would look like: a slot-indexed vector `k(s)`, each component with its own anchor (an identified spending change and the measured output response), with the conditions that define each slot recorded as overlapping compounds, and with a stated refuter per component. Binding this shape as a term is the Formula's "Direction" discipline: otherwise the preference for one number is invisible to every check.

---

## 1. Domain census

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet. All four below have one.

| domain | actors | currency | anchor (nameable, does not move with frames) |
|---|---|---|---|
| **1. Fiscal/macro frame** (home of the claim) | government, households, firms | spending, income, output, taxes | measured output response to an identified change in purchases, read off national accounts |
| **2. Monetary/financial frame** | central bank, bond market, banks | policy rate, money, inflation, debt service | the policy-rate path and whether the lower bound binds; an instrument that does not update on our estimate |
| **3. Open-economy frame** | foreign sector, trade partners, exchange rate | imports, exports, exchange rate | trade and balance-of-payments data, which register leakage |
| **4. Identification/verification frame** | researchers, datasets, estimators (SVAR, local projections, narrative shocks) | estimates, confidence intervals, replication | the same measured output response, reached through distinct identification routes |

**Partition or union.** Not a partition. Recession, high debt, a binding lower bound and a small open economy are overlapping conditions; a case in two of them is a compound with its own loop, not a harder case of one (Fig 9 :54-58). So the question as asked is a **union**, and the correct move is to unbundle before searching again.

**Order by dependency (Fig 3).** Identify an exogenous spending change (perception) before naming the conditions that modify it (vocabulary), before stating what counts as a multiplier (objective), before choosing an estimator (planning), before carrying a result to the next country or episode. Effort spent above a broken identification link arrives at a step that cannot use it. A meta-average of 1,800 estimates is above that break if the underlying shocks are not exogenous.

**Re-census note.** Domain 2 and domain 3 were initially merged into "macro conditions". They were split because their anchors differ (a policy-rate path versus trade flows), so their agreement would not be independent. Fig 13's two-kinds rule was tried as a direct mapping onto macro aggregates and set aside after the strain test (section 3).

---

## 2. Figure census and findings

Every quotation below is verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`. A line that only fit with a strain was sent back to the census (section 3).

### F1 - The question indexes the wrong object: one number instead of per-slot residual

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**
Fig 1 :28: **"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."**

The multiplier is a per-slot quantity. "Per slot" here is economy state crossed with country crossed with identifying frame. Publishing a single number answers a question the figures say is malformed: it averages away the very signal the question asks about ("why does it vary"). The variation is not a nuisance parameter around a true constant; it is the object.

**Refuter:** fit one constant `k` on one set of slots and show it predicts out-of-sample output response as well as or better than a slot-indexed vector. If it does, F1 fails.

**Status:** `triangulated` across Fig 1 (residual indexing) and Fig 9 (union unbundling), two different figure routes with low overlap. The world biostatistics source (Anoke et al. 2019) corroborates from a different field, but is secondary.

### F2 - The anchor for `k` is a measured response, not agreement among estimates

Fig 2 :29-30: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."**
Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**

The anchor is an identified change in purchases plus the observed output response. A literature consensus is not an anchor, because it moves when researchers adopt the same prior or reuse the same dataset. Agreement about `k` cannot settle `k`.

**Refuter:** produce a case where a consensus estimate changed the measured output response rather than the other way round. That would make the consensus an anchor and F2 would fail.

**Status:** `single-source` for the figure line (Fig 2), corroborated by a different-field essay (*The Hard Problem is About Source*), which shares an author with the figures and therefore carries little independent weight.

### F3 - The question is a union compound, not one hard question

Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**
Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
Fig 9 :57-58: **"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."**

"Recession versus expansion" and "across countries" are not two axes along which one constant is perturbed. They are overlapping conditions. A downturn with a binding lower bound, high debt and a flexible exchange rate is a specific compound, and the lever that clears the single-condition region leaves the intersections standing. Asking for one multiplier that covers all of them is asking for an average over compounds.

**Refuter:** show that one condition (for example, slack alone) accounts for all the cross-slot variation with no interaction terms and no residual structure left over. If it does, F3 fails.

**Status:** `triangulated` across Fig 9 (union rule) and Fig 1 (per-slot residual), different figure functions, low overlap.

### F4 - Multiplicity of studies is not independence

Fig 2 :31-32: **"Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are."**
Fig 2 :40: **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"**
Fig 8 :51: **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"**

Meta-regressions over the same post-war OECD data, or two SVARs using the same narrative shock series, are one witness wearing many names. Their agreement has the valence of a convention, not a verdict. The remedy is to buy independence in proportion to the cost of being wrong (Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."**), and to record which estimates were reached by separate identification routes.

**Refuter:** exhibit two estimates that use disjoint datasets and disjoint identifying assumptions and show that our verdict depends on treating them as one witness. If independence makes no difference, F4 fails.

**Status:** `triangulated` across Fig 2 and Fig 8; the world psychology source (Silberzahn et al. 2018) corroborates from a different field that analytic choices on one dataset generate wide spread.

### F5 - Identification is upstream of estimation

Fig 3 :20-21: **"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."**
Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."**

The chain runs: identify an exogenous shock, name the modifying conditions, state the estimand, choose the estimator, estimate, carry to another slot. If the first link is broken (the spending change was anticipated, or endogenous to the cycle), no amount of estimator refinement or meta-averaging repairs it. A reading taken below the break is a reading of nothing (Fig 3 :22-23).

**Refuter:** show an estimator that recovers a stable slot-indexed response from spending changes known to have been fully anticipated in real time. If it does, F5 fails.

**Status:** `single-source` (Fig 3) for the dependency claim; the economics literature corroborates that controlling for predictable components changes estimates, but that is the same field, hence weak corroboration.

### F6 - One number fails the description-length bargain

Fig 5 :43-44: **"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before. A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."**

A global `k` is cheap to state and leaves the entire cross-country, cross-regime variation unexplained. It is the flat formula: the ingredient is recorded and the arrangement (the conditions) is not. The slot-indexed vector costs more to state and removes more confusion, so it is the term that pays.

**Refuter:** show that a single `k` plus one fixed adjustment leaves less residual mass across slots than the indexed vector, under an agreed description code. If it does, F6 fails.

**Status:** `single-source` (Fig 5), corroborated in a different field by the biostatistics source on heterogeneity obscuring the mean, at low overlap with the framework.

### F7 - The condensation from many estimates to one number has a round-trip gap

Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**
Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

Any summary of the literature into one headline multiplier is a lossy transform. The round trip (full slot-indexed evidence, condensed to a number, brought back to a country and a regime) drops the conditions that made the estimate applicable. Fig 11 :63: *"a managed ecosystem is permanent work rather than a solved state"* applies to a multiplier used in policy: conditions change and the number does not.

**Refuter:** demonstrate a condensation whose round trip returns the same slot predictions with no dropped conditions. If it does, R_T is zero and F7 fails.

**Status:** `single-source` (Fig 4) for the round-trip requirement.

### F8 - Enumerate the habitat, do not assume the direct effect is the whole effect

Fig 11 :44: **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."**
Fig 11 :52-53: **"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."**

The conditions in contact with the multiplier are not only the current budget and the output gap. They include the monetary reaction (does the central bank offset?), debt and fiscal space, openness and the exchange-rate regime, household leverage, the composition of spending, and confidence. Some are second and third order: a spending change alters expectations, which alter the policy reaction, which alters the output response. Enumerate them before choosing the frame; do not compose them.

**Refuter:** show a slot where the response is invariant to all enumerated conditions and their second-order links. If it is, the habitat enumeration adds nothing and F8 fails.

**Status:** `single-source` (Fig 11) for the enumeration rule.

### F9 - "How large?" selects the wrong search target

Fig 9 :27-28: **"describe it before you go looking, or any frame you pick will seem to fit"**
Fig 9 :32: **"you get a kind of thing, never the answer itself"**

Describing the residual first (one number does not forecast across slots) selects the shape: a per-slot object. If instead the search starts with a preferred number, any dataset will seem to confirm it. The framework returns a kind of thing, not the numeric answer. So the honest output of this derivation is a shape and a set of refuters, not a coefficient.

**Refuter:** show the figure extract returning a specific numeric multiplier. If it does, F9 fails.

**Status:** `triangulated` across Fig 9 and the canonical figures README (*"what a missing thing would have to look like (a shape, not a name)"*), which are different documents with overlapping authorship, so weak rather than strong corroboration.

### F10 - A search that finds no number is not proof there is none

Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**

If the derivation ends without selecting a coefficient, that is a verdict about reachability, not a silence. Underivable-in-principle from the figures and unreachable-at-this-budget from the data are different facts: the figures are the wrong instrument for a number, whereas the empirical literature has the right instrument but must settle each slot separately.

**Refuter:** exhibit a figure line that determines a numeric multiplier. If one exists, F10 fails.

**Status:** `single-source` (Fig 8).

### F11 - What survives, with mode attached

| claim | mode | source |
|---|---|---|
| The multiplier must be indexed by slot; a global average discards the signal | `general` (structural), falsifiable | Fig 1 :19, :22, :28 |
| Recession, expansion and country form a union of overlapping conditions | `specified` | Fig 9 :54-58 |
| The anchor is a measured response, not consensus | `general` | Fig 2 :29-30, :35 |
| Study agreement from shared data is one witness | `specified` | Fig 2 :31-32, :40; Fig 8 :51 |
| Identification precedes estimation in dependency order | `general` | Fig 3 :20-21 |
| The framework returns no numeric value | `general` | Fig 9 :32; figures README |
| Which specific conditions fill the slots, and their weights | **refused as a figure claim** | enumeration from world sources only, provenanced as such |

---

## 3. Strains and re-census

- **Fig 13 (six-term substrate) tried and set aside.** An earlier reading mapped macro "states" (slack, rate regime) onto Fig 13's states and "structures" (propensity to consume, leakage) onto its structures. It fits only with a strain: Fig 13 :74 says *"Everything else is a composition across the two kinds, never within one"* and governs the six primitives, not macro aggregates. Filling those slots with macro variables is a binding from the economics frame, not a derivation, and it does not move the wall (Fig 6). **Re-census:** Fig 13 is used in this folder only as the general reminder that composition crosses kinds and that naming a slot is a binding; it gives no verdict on the multiplier. No figure line was kept on the strength of a strained reading.
- **Fig 12 isomer reading.** The same fiscal atoms under two regime bonds give different substances. This is an analogue (section 06_isomers_and_order.md), mode `general`, with its own falsifier. It is not claimed that the multiplier is one of the six substrate terms.
- **Seat Map :163 versus agreement.** The literature contains genuine convergence from separate identification strategies. Fig 2 says convergence at maximum independence is corroboration; Seat Map :163 says *"High correlation is disqualifying for a verdict and efficient for a convention."* These are not in tension: the first describes separate derivations, the second shared pools. The source ledger records overlap so the two are not confused.

**After re-census: no hidden strains; two named limits (Fig 13 set aside, Fig 12 analogue only).**

---

## 4. Pre-registered refuter

Written before the conclusion, per Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following holds:

1. A single constant multiplier fitted on one set of slots predicts held-out output response as well as or better than a slot-indexed vector.
2. One condition, with no compound interactions, accounts for all variation across recession, expansion and country, leaving no residual structure.
3. Two estimates drawing on the same dataset and the same identifying assumptions are treated as independent witnesses and the verdict changes if they are counted as one.
4. A figure line cited above is shown to govern a different quantity (a strain that survives re-census).

If any fires, the shape is withdrawn or re-censused. Until one is run, nothing here is `grounded`.

---

## 5. Recommendation

1. Retire the headline single number in any write-up; report a slot-indexed table with each slot's identifying route, dataset and anchor (F1, F4).
2. Unbundle recession, expansion and country into named compounds before comparing estimates (F3).
3. Put the identification discussion before the estimates, and state which conditions were controlled for in real time (F5).
4. Record overlap between studies; do not add estimates from one data pool as if they were witnesses (F4).
5. Publish the refuter with the estimates, in the mode stated, and offer the shape to an outside frame before offering the framework (Fig 10 :52).

---

## 6. Canonical usage check and retraction/confirmation log

Read after sections 0 to 5: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `THE_FORMULA.md`.

- The README says the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them"* and that *"the quotes are the authority, not this summary."* All figure quotes above were taken from the local verbatim extract, not from the README or from memory.
- The README's re-census rule (*"a reading that makes one contradict another has misidentified its domain"*) is what sent the Fig 13 mapping back to census (section 3).
- The README's limit is *"what a missing thing would have to look like (a shape, not a name)"*, and it says the framework *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."* That is F9 and F10.

| earlier reading in this audit | status after the canonical check |
|---|---|
| F1 "one number is malformed" | **Confirmed and narrowed.** The README's "shape, not a name" governs a coefficient not held in the frame. The world numbers are secondary evidence about slots, not an output of the figures. |
| F2 "anchor is the measured response" | **Confirmed.** Fig 2 :36 (*"An anchor is legitimate when the question is constitutively about it"*) applies: the question is about output response. |
| Temptation to cite published numbers as the answer | **Retracted before it entered the verdict.** They are demoted to secondary corroboration in `09_watson_answer.md` and to the ledger. |
| Fig 13 mapped onto macro states/structures | **Retracted as a strained mapping.** Re-census moved it to a general shape reminder only. |
| "Meta-analysis settles the multiplier" | **Refused.** Fig 2 :40 prices shared-pool agreement as a convention, and the meta-analytic spread itself is what F1 says is signal. |
| No number returned | **Canonical, not a failure.** Fig 9 :32 and the README both license stopping at a shape with a recorded lineage. |

---

## 7. Verdict of the primary seat

**From the figures:** the shape survives, the scalar does not. The multiplier is a slot-indexed residual whose components are settled individually by measured output responses; the variation across recessions, expansions and countries is a union of overlapping conditions that must be unbundled; study agreement is weighted by independence, not counted as votes. The framework returns no number and does not select which specific conditions fill the slots. Mode `general` for the shape and `specified` for the per-slot and union claims. `candidate`, not `grounded`. Prestige, citation counts and consensus are not instruments and do not move the verdict.
