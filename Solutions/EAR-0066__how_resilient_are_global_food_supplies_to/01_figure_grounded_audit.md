# Figure-grounded audit: resilience of global food supplies to simultaneous harvest failures

**Mode: `general` on the structural shape, `specified` on the four per-domain verdicts, `gap` on the literal magnitude. Not `grounded`.**

Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Nothing in this audit is accepted by a ground reading.

**Status: simulated derivation, not a ground reading.** From *The Recursive Self-Improvement Trap* (Isaiah N, adventuresinml Substack, opened 2026-11-22): *"LLMs can quickly simulate an approximate answer/output"* but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No yield, price, stock or food-security measurement was taken by this author.

**Framework sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, cited as `Fig N :line`), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`. World sources actually opened are recorded in `10_source_ledger.csv`.

---

## 0. The claim under audit

The question as posed treats "global food supplies" as one object with one property, resilience, and asks how much of it exists when major producing regions fail together. That framing is refused at step 1, before any figure is chosen, because the ordinary term hides the slot structure and the coupling structure.

**Residual stated in effect terms.** R is the per-slot gap between:

- the prediction: planned physical availability plus expected economic access under a normal season, and
- the observation: physical availability plus actual economic access in the season when several breadbaskets fail.

Slots are crop x producing region x consuming population x time. Harm is declared before the run: undernourishment, loss of access for net food buyers, or a sustained calorie shortfall. The residual is a slice, not a scalar. Symbols table :38-40 defines it: *"It is the aim, not only the error signal, and it is always a slice: what cannot be perceived yet is residual and simply cannot be read."*

**What each option leads to.** If we answer with a single global number, we aggregate the live slot into an average and lose the only signal that says where to look (Fig 1 :22). If we answer with a per-slot separator plus a refuter and an instrument, we keep the verdict checkable and the stop honest. The second option is what this audit derives.

**Direction made an ordinary term (Formula "Direction").** Written down before the run: an answer would look like a structured set of conditions, per domain, that (a) says which couplings turn one failure into many, (b) names imports that increase genuine independence with provenance and a shadow test, (c) keeps verdicts separate, and (d) states the instrument that would settle each slot. A universal resilience coefficient, a single ranking of countries, or a universal diversification prescription would all fail this description and are therefore not what is being searched for.

---

## 1. Domain census (before choosing any figure line)

### 1.1 R by arity, symmetry, scale

- **Arity.** Multiple conditions, not one. Production shortfall, trade and price transmission, policy reaction, and household access all bind at once. Fig 9 :4-5 says a disagreement that does not shrink with effort because each rule works on a different subset is *"not one hard question but several well-formed ones. Split it rather than search."*
- **Symmetry.** The failure events are **not** symmetric independent trials. They are coupled by shared climate modes. Fig 2 :6-7 names *"collapse 2: common cause (hidden shared source)"*. The symmetry of a naive Poisson or diversification model is exactly the assumption world evidence refutes (Anderson et al. 2019, ledger). The comparison operator that matters is `⋛` (threshold), not `+` (both hold) and not `∥` (either suffices): what settles a slot is whether availability crosses a need threshold (Operators table :48-51, Fig 12 :87).
- **Scale.** Sub-annual shock, one to three year trade and storage carry-over, multi-decadal trend in failure probability. Fig 11 :52-54 warns that the residual that matters can be three steps out. Fig 4 :19-20: *"Only the actors, the currency and the anchor change."* Renaming the anchor at the food-system scale is legitimate; renaming the law is not.

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if it has a nameable anchor. These four do.

| domain | actors | currency | anchor (does not update on what a frame thinks) |
|---|---|---|---|
| **D1 production / biophysical** | crops, soil, water, pollinators, pests, climate modes (ENSO, IOD, NAO) | yield anomaly, biomass | measured yield and harvest statistics (FAOSTAT, crop cuts, remote sensing) |
| **D2 trade, price and stock** | exporters, importers, traders, stockholders, futures markets | price, trade flow, stock-to-use | realised transactions and physical stock counts, not sentiment |
| **D3 policy / governance** | states, reserve agencies, trade-policy makers, aid donors | rules, bans, reserves, releases | enacted policy events and their outcomes |
| **D4 nutrition / food security outcome** | households, net food buyers, smallholders, vulnerable groups | calories, access, affordability | measured food security outcomes (FIES, undernourishment, consumption) per population slot |

**Anchor test applied (Fig 2 :29-30).** *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* D1 and D4 have anchors that do not move with beliefs. D2 is the danger domain: a price is an anchor only if we read the realised transaction and physical stock, not the expectation embedded in it. D3 has event anchors (a ban happened or did not). Where a price series is used as if it were the ground, Fig 2 :33-34 applies: the reference moved, *"everything drifts together, and the drift is coherent, which is why nobody notices."*

**No fifth domain admitted.** "Market confidence", "resilience culture" and "systemic risk appetite" were considered and rejected: none has a nameable anchor that fails the Fig 2 :30 test (*"you push on it, it is not an anchor"*). An unanchored candidate is not a domain yet.

### 1.3 Partition or union

**Union, not partition.** Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :55-57: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."*

A harvest failure that hits an import-dependent region with a small supplier base and a binding export ban sits in three conditions at once. More storage clears the region where only stock is short and leaves the intersection standing. The compound is categorically different, not a harder case of any one condition.

### 1.4 Order by dependency (Fig 3)

Fig 3 :20: *"The chain is ordered by dependency, not by importance."* The dependency order is:

1. D1 perception and measurement of the production shock (link 1 and 2).
2. D2 translation through trade and stock into price and availability.
3. D3 policy response that can amplify or damp the translation.
4. D4 realised food security outcome.

The chain typically breaks between vocabulary and objective (Fig 3 :25-27): the literature has many terms for yield and price but no stable instrument for what counts as progress at the outcome slot, because "resilience" is contested (Béné et al. 2023: rigorous measurement methods still missing). Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* Effort spent above the break, such as finer price models, arrives at a step that cannot use it.

---

## 2. Figure census (bearing and verdict)

| figure | bearing on this residual | verdict after reading |
|---|---|---|
| 1 The Agent | residual indexed per slot; frame-internal quantities disqualified | controls F1, F5 |
| 2 The Ground | common cause, one evidence pool, non-updating anchor, independence | controls F2, F5, F6 |
| 3 Dependency Chain | break between vocabulary and objective; dependency order | controls the census order and F6 |
| 4 The Membrane | actors/currency/anchor change across scale; round trip gap | governs the substrate strain (S1) and R_T |
| 5 Mint Pipeline | guards as product; settling necessary not sufficient; preference as ordinary term | controls F3, F8 |
| 6 Closure / Reachability | import only wall-moving operator; instruments from worse instruments | controls F3, F4 |
| 7 Room Chain | agreement compounds, evidence does not; selection between rooms | controls the no-consensus-as-verdict point in F5 |
| 8 Union Surplus | idempotent closure; independence read twice; residual first | controls F2, F3, F4 |
| 9 Leave / Arrive | union versus partition; filters not witnesses; shape not answer | controls F2, F5, F8 |
| 10 Ground Maintainer | channel decays not ground; saturated metrics, pooled readings; declare stake | controls F6 and the honesty labels |
| 11 The Habitat | enumerate habitat outward; valence relative to residual; introduction not exclusion; isolation substitutes | controls F7 |
| 12 The Bond | bond carries information; catalyst, cycle, functional group; two currencies | controls F7 and `06_isomers_and_order.md` |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict; shape not name | controls F3, F8 and the stop |
| Operators / Symbols | `⋛` threshold, `+` conjunction, `−` subtraction, `¬` refusal; R and habitat definitions | governs the effect-language of F1 and F8 |

Strained readings are named in section 7, not smoothed over.

---

## 3. Findings

### F1 — The residual must be indexed per slot; a global average throws away the live signal (decisive for framing)

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**
Fig 1 :28: **"The gap is measured per object, not per step."**
Fig 11 :43-44: **"The habitat is enumerated, never composed."** and **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."**

A single "global food supply resilience" score is the forbidden aggregate. The live slot is the import-dependent, small-supplier-base population whose availability crosses the need threshold. World corroboration is direct: Kuhla et al. 2026 report regional conditional consumption at risk ranging from negligible to over 100 Mcal per capita per year, and Zurek et al. 2022 frame the field's own four questions as *"Resilience of what? Resilience to what? Resilience from whose perspective? Resilience for how long?"*

**Refuter:** a validated global scalar that predicts, for every crop-region-population slot, whether availability stays above the declared threshold across a simultaneous failure, with a non-updating anchor. If that exists, per-slot indexing is a preference, not a requirement, and F1 falls.

### F2 — Simultaneous failures are a common-cause union, not N independent shocks (decisive for mechanism)

Fig 2 :6-7: **"collapse 2: common cause (hidden shared source)"**
Fig 2 :18-21: **"they never talk, and still agree"** and **"so the agreement is the pool talking, not two frames confirming each other"**
Fig 2 :31-32: **"Independence, between two frames, is how little they draw on the same evidence."** **"Independence is what makes agreement mean something."**
Fig 2 :44: **"The effective-sample-size correction for correlated observations is standard in survey statistics and meta-analysis; the collapse is the same arithmetic read as a warning."**
Fig 9 :55-57: *"A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."*

"Simultaneous" is the operative word. If several breadbaskets fail because one climate mode organised drought and heat across them, then those failures are one evidence pool wearing several country names. Treating them as independent draws overstates the diversification of the system and understates the shock. Gaupp et al. 2020 write that *"Depending on the correlation structure between the breadbaskets, spatial dependence between climatic extremes globally can mitigate or aggravate the risks for the global food production."* Anderson et al. 2019 are blunter: *"The problem with pooling our risk as a mitigating strategy is that it assumes failures are random. But we know that strong El Niño or La Niña events in effect organize which regions experience drought and extreme temperatures."*

This is a figure/world agreement at low overlap: climate science measuring cross-region covariance is not reading the figures. It is corroboration, not authority. The verdict comes from Fig 2 and Fig 9.

**Refuter:** demonstrate that under the strong modes, cross-breadbasket shock correlations are near zero and that geographic diversification therefore buys the full independence the naive model assumes. Then the common-cause finding is wrong for the residual at hand.

### F3 — More search inside the current closure cannot add resilience (decisive for remedy)

Fig 8 :32: **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."**
Fig 6 :21: **"MINT composes inside the closure and can never add an atom."**
Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**
Fig 13 :115: **"The set is closed. The arrangements are not. That gap is why import exists."**
Fig 13 :116-118: **"So a frame can search without end and still not arrive: infinite effort inside a finite reach."**

The efficiency program of the last decades, just-in-time logistics, specialisation, consolidation and the removal of redundancy, is search inside one closure. It improves the description and consumes the buffer. Zhang, Tyfield and Liu 2025 report that *"The over-pursuit of efficiency, standardisation, and specialisation in the food system has reduced its functional and organisational diversity, limiting its capability to buffer disruptions and thus reducing resilience."* Béné et al. 2023 list connectivity, redundancy and diversity as emergent system properties and note that most research on them *"lacks empirical ground"* in food systems. Finer price forecasts inside the same trade frame do not add a new atom; they visit more of the same space (Fig 6 :49).

**Refuter:** show an efficiency change made entirely inside the existing atom set that raises measured independence and buffer across all four domains, with the gain surviving a ground test. That would mean the "closure" was not closed and the finding misidentified the wall.

### F4 — The only remedy that moves the wall is an import from a differing closure, gated by provenance and a shadow test

Fig 6 :14: **"the only operator that moves the wall"**
Fig 6 :24: **"Import from a live peer is debited against that frame's independence. A wrong atom costs more than starting from primitives."**
Fig 8 :52: **"Only the record of where each came from separates them, and the surplus lives only where the closures differ."**
Fig 8 :48: **"How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus."**

What counts as an import here is not a slogan. It is, per domain: genuinely independent climate exposure (not a second breadbasket loading on the same ENSO mode), a different supplier base, a different input source, a reserve regime with its own trigger and replenishment rule, a source-discriminating early-warning instrument. Each needs a source gate (where did this atom come from, and is the provenance checkable) and a shadow test (does it explain a gap that was previously unexplained). Kuhla et al. 2026 end with a coordinated agenda of *"diversifying production and trade, strengthening storage management, and implementing early-warning systems"* and explicitly note that broadening supplier links *"may also shift rather than eliminate dependencies"*, which is the Fig 6 :24 price of a wrong atom.

**Refuter:** a diversification program whose components share the same climate driver and whose buffers are released by the same trigger, yet which demonstrably widens the per-slot reach. Under Fig 8 :14-15 that is two names for one frame and the union adds nothing; if it did add reach, the independence law fails.

### F5 — Verdicts stay per domain and are never averaged; indices are filters for budget, not witnesses

Fig 1 :19 and :22 (above). Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**
Fig 1 :27: **"They are frame-internal. A frame cannot score itself with a quantity it also produces."**
Fig 7 :35: **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."**
Fig 12 :125-126: **"A composition costs in two currencies, and they do not add."** **"Bits price the description. Actions price finding out whether it holds."**

A stock-to-use ratio, a diversification index, a resilience score and a price variance are all produced by the frame they are used to grade. They allocate attention and budget; they do not witness the outcome. The outcome anchor is D4: did people actually remain food secure. Béné et al. 2023 separate resilience capacity from realised resilience and warn that the latter is a latent variable approached only by proxies. Zurek et al. 2022 say operationalising resilience *"involves normative choices"*, so the values that decide which threshold counts must be declared, not hidden in a composite.

**Refuter:** a measure that is simultaneously a budget filter and a ground-settled witness for all four domains, meaning its movement is caused by the outcome and not by the frame that computes it. Until such a measure is shown, averaging D1 to D4 into "the resilience of global food supplies" is refused.

### F6 — The ground does not decay; the channel does. Monitoring is a seat office, not a loop step

Fig 10 :24: **"the ground does not decay, the channel does"**
Fig 10 :25: **"stale percepts, dropped transients, saturated metrics, pooled readings"**
Fig 10 :27-28: **"the output is not a verdict, it is you have lost touch"**
Fig 10 :52: **"Bring a characterised residual, never the source."**
Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

Pooled global metrics and saturation are the named failure. Chen et al. 2024 show why a single-variable channel misleads: univariate heat trends suggest rising shocks while the full multivariate model shows decreases in wheat and soy, and conclude that climate *"accounts for a greater proportion of crop yield shocks in the recent period"* even as total shock frequency falls. Kuhla et al. 2026 call for early-warning systems and note their effectiveness depends on reliable data and timely implementation. The channel must be kept reachable per slot. The ground does not need maintenance; the instrument does.

**Refuter:** an instrument that resolves the per-slot residual without decay, saturation or pooling, verified against held-out seasons and with a published failure rate. If one exists, the seat-office warning is still valid but no longer binds this case.

### F7 — Cascades, valence and feedback sign decide whether one failure becomes many

Fig 11 :49: **"An actor's valence is relative to the residual, not a property it carries."**
Fig 11 :51: **"No standing list of good actors survives a change of residual."**
Fig 11 :52-54: **"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."**
Fig 11 :61: **"The seat's power is asymmetric. Introduction is available; exclusion is not."**
Fig 12 :119: **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."**
Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."**

The habitat must be enumerated outward: fertilizer, energy, feed, transport, storage, trade policy. Kuhla et al. 2026 list shortages of fertilizer and energy as systemic shocks and note that *"abrupt export bans can amplify international market stress and trigger cascading restrictions"*, which is a positive feedback cycle, and that high stock-to-use ratios provide a buffer, which is a catalyst only if replenished. Valence flips with the slot: the same self-sufficiency protects Australia's maize consumption from world prices and harms Argentina's wheat consumption because no foreign supplier exists when domestic production fails (Kuhla et al. 2026). There is therefore no standing list of good policies.

**Refuter:** a policy or actor with fixed positive valence across every slot and every residual in the four domains. Fig 11 :51 predicts none; finding one would break this finding.

### F8 — The literal magnitude is a `gap`, reported as unreachable at this budget, not as silence

Fig 9 :32: **"you get a kind of thing, never the answer itself"**
Fig 13 :134-135: **"Unreachable is a verdict here, not a silence,"** **"It cannot say which primitive is missing, because naming it would mean already holding it."**
Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**
Fig 13 :138-139: **"and it can say the answer is out of reach with the library as it stands, so something has to be imported before it is asked again."**

No figure line returns a resilience coefficient, a failure probability, a ranking of countries or a universal prescription. Those are world-measurement questions and this is a simulated derivation with no ground reading. The honest return is the shape plus the instrument owed. This is **unreachable-at-this-budget**, not underivable in principle: the atom may well be in the closure of food-security science, and Béné et al. 2023 say the measurement methods are still missing rather than impossible. Importing a number from a model here would be Fig 6's wrong atom priced above primitives.

**Refuter:** a ground-settled, source-discriminating measure that ranks every slot's resilience with a declared threshold and a non-updating anchor, replicated by two frames that do not share evidence. If produced, the gap closes and this audit is superseded, not defended.

### F9 — What actually survives (the residue worth sending)

| claim | mode | figure / world support |
|---|---|---|
| Residual must be per crop-region-population slot | `general` structural | Fig 1 :19, :22; Kuhla 2026, Zurek 2022 |
| Simultaneous failure is a common-cause union, not independent trials | `specified` | Fig 2 :6-7, :18-21, :44; Fig 9 :55-57; Anderson 2019, Gaupp 2020 |
| Optimising inside the current closure cannot add the buffer atom | `specified` | Fig 8 :32; Fig 6 :21; Zhang 2025 |
| Independence requires imports with provenance and a shadow test | `specified` | Fig 6 :14, :24; Fig 8 :52 |
| Verdicts per domain, never averaged; indices are budget filters | `general` + `specified` | Fig 9 :60; Fig 1 :27; Béné 2023 |
| Channel decays; keep a per-slot instrument reachable | `specified` | Fig 10 :24-28; Chen 2024 |
| Cascades and feedback sign decide amplification; valence relative to residual | `specified` | Fig 11 :49-54; Fig 12 :119, :121; Kuhla 2026 |
| The numerical resilience of global supply | `gap` | Fig 9 :32; Fig 13 :134-135 |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the seat-map rule carried in the exemplar: a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. **Slot condition.** A single global scalar predicts every crop-region-population slot's threshold outcome across simultaneous failures, with a non-updating anchor. (Breaks F1, F5.)
2. **Independence condition.** Cross-breadbasket failure correlations under strong climate modes are near zero, so geographic and supplier diversification buy the full independence the naive model assumes. (Breaks F2, F4.)
3. **Reach condition.** A within-closure efficiency or specialisation change raises measured buffer and independence across all four domains and survives a ground test. (Breaks F3.)
4. **Channel condition.** A monitoring instrument exists that resolves the per-slot residual without decay, saturation or pooling and publishes its held-out failure rate. (Breaks F6, weakens F8.)
5. **Valence condition.** Some policy or actor has fixed positive valence across every slot and every residual in D1 to D4. (Breaks F7.)
6. **Magnitude condition.** A ground-settled, source-discriminating resilience measure ranks every slot with a declared threshold, replicated by two non-overlapping frames. (Closes F8 and supersedes this audit.)

No result in this audit may be labelled `grounded` until at least conditions 1 and 6 are run and survive.

---

## 5. Recommendation

1. Lead with the residual, not the theory: food supply failure is a per-slot union with a common cause (F1, F2).
2. Stop reporting a single global resilience number. Report per-domain verdicts and name the threshold and perspective for each (F5, Zurek 2022).
3. Treat diversification claims as import claims. Require provenance and a shadow test; reject diversification that shares a climate driver (F4).
4. Enumerate the habitat outward to fertilizer, energy, feed, transport and trade rules before recommending a lever (F7).
5. Maintain the channel with a per-slot instrument; record saturation and pooling as loss of touch, not as evidence of resilience (F6).
6. Keep the gap visible. Say what would settle it, and do not fill it with a model number (F8).
7. Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."* Send the separator and the refuter, not a conclusion.

---

## 6. Canonical usage check and retraction / confirmation log

Two framework sources were read after the first five sections and govern use of the quotes:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the canonical limit *"a shape, not a name"* with *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule, step 7 (SEARCHED first, then INWARD, then OUTWARD), and *"nothing here maintains the ground. The ground does not decay; the channel does."*

### Retractions and confirmations

| earlier reading in this audit | status after the canonical check |
|---|---|
| First pass framed "global food supply resilience" as one system property | **Retracted.** Re-census gives a per-slot residual and four anchored domains. F1, F5. |
| First pass treated several failing breadbaskets as independent trials | **Retracted.** Common-cause collapse, Fig 2 :6-7; corroborated by Anderson 2019. F2. |
| First pass mapped the six physical terms (space, time, energy, spectrum, gradient, network) directly onto crops, trade and policy | **Retracted as a forced binding.** The six-term set governs physical composition; the domain-agnostic laws govern here with actors/currency/anchor renamed (Fig 4 :19-20). Kept as strain S1, not as a derivation. |
| First pass called diversification "the" remedy | **Narrowed and kept visible.** Only imports from a closure differing at the evidence level buy independence (Fig 6 :23, Fig 8 :48). Same-mode diversification is one frame under two names. F4. |
| First pass read Fig 6 :14 ("only operator that moves the wall") as applying to storage alone | **Narrowed.** Storage is one catalyst; the operator is import generally, and a release rule that shares a trigger with the shock is not an independent atom. F4, F7. |
| Per-slot indexing | **Canonically confirmed.** Fig 1 :19 and :22 plus Symbols table :38-40. |
| Union reading of simultaneous failure | **Canonically confirmed.** Fig 9 :54-57 plus Fig 2 common-cause panels. |
| The `gap` on magnitude | **Canonically confirmed.** Fig 9 :32, Fig 13 :134-135, Fig 8 :39. Unreachable is a verdict. |
| Apparent conflict: Fig 8 :48 (independence read twice) versus Fig 2 :40 (correlation disqualifies) | **Not strained.** Re-census: same parameter, different uses. High overlap destroys verdict weight and destroys union surplus together. One quantity read twice. |

---

## 7. Strain register

- **S1, substrate mapping (live, contained).** Fig 13's six terms are a physical substrate. Mapping them onto food-system roles is a binding, not a derivation. Re-census: Fig 4 :19-20 licenses renaming actors, currency and anchor across scale; the domain-agnostic loop and metalaws govern the food-system case. No figure line was forced. The strain is recorded, not hidden.
- **S2, threshold type of "resilient" (live, narrowed).** `⋛` is *"a threshold relation between two quantities"* (Operators table :48-51). At D4 the quantities are availability and need; at D2 they are price and purchasing power. These are different thresholds in different currencies and are not summed. Fig 12 :125-126 licenses keeping them apart.
- **S3, price as anchor (live, constrained).** D2's currency can update on expectation. The anchor is restricted to realised transactions and physical stocks; any use of a forward-looking price as ground is refused under Fig 2 :33-34.
- **S4, world disagreement on shock frequency (evidence, not a flipped verdict).** Gaupp et al. 2020 report increasing simultaneous risk; Chen et al. 2024 report decreasing observed shock frequency. The conflict was returned to the census and dissolved: they measure different quantities (climate hazard exposure versus realised yield anomalies after management and non-climate trends). Chen et al. say climate now accounts for a larger share of a smaller set of shocks. Both are kept as evidence for the union and common-cause verdict.
- **After re-census: four strains named, none smoothed, no verdict flipped by a world conflict.**

---

## 8. Round-trip note (full treatment in `11_audit.md`)

The shorthand carried in the outreach files is "per slot, common cause, import with provenance, no number". The concretisation back into a food-system claim drops at least three constraints: the typed threshold in each domain, the per-slot habitat enumeration, and the requirement that an import differ at the evidence level. R_T is therefore nonzero and is recorded qualitatively, not measured numerically, because no ground reading exists. Treating the shorthand as identical to the figure set would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names.
