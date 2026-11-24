# Figure-grounded audit: EAR-0061, the combined-effect question

**Mode of this document: `specified`, with `general` on the bare structural shape, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general Â· specified Â· grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status: simulated derivation, not a ground reading.** *The Recursive Self-Improvement Trap* (essay, 2026): *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post"* but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document was checked for internal consistency against the figures only. It cannot settle the question it audits.

**Figure source.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session. Every `Fig N :line` quote below is a verbatim substring of that file. **World sources.** Opened this session; see `10_source_ledger.csv`.

---

## 0. The residual under audit

> **"How will heat, drought, floods, pests, and soil change combine to affect major crops?"**
>
> Source: `earth systems.txt` line 83, section 7 (Food, agriculture, and land use).

Stated as an effect, the question asks what the five named conditions compose into. Three readings are possible and they are not equivalent:

- **Reading A (flat sum).** Add five main effects, report one yield change for "major crops."
- **Reading B (union compound).** The five are overlapping conditions; the effect is indexed per crop, region and growth stage; a case in two conditions is a different object from either alone.
- **Reading C (single dominant stressor).** One of the five governs and the rest are noise.

Reading A is the question's ordinary-language default; it is not a figure derivation. We do not pick among A, B and C by plausibility. We census first.

**What an answer would look like (bound as an ordinary term before the run, per the "Direction" section of `THE_FORMULA.md`).** A checkable answer states actors/currency/anchor per domain, names the bond type that joins the five with a refuter for the additive case, keeps verdicts per domain, marks what the framework cannot return, and names the instrument that would close the residual.

---

## 1. Residual description: arity, symmetry, scale

| property | reading |
|---|---|
| **Arity** | Five named operands, so a multi-operand composition. The question literally asks "how will they combine", which is a **bond-type question** (Fig 12 :5), not a request for a list of main effects. |
| **Symmetry** | If the bond were symmetric conjunction `+`, five operands would have 120 spellings and one term (Fig 12 :92). The world evidence says the result depends on timing, severity, growth stage and duration (Li et al. 2025; Romero et al. 2019; Ribeiro et al. 2020), so the governing bond is **ordered and graded**: `â†’` for sequence and `â‹›` for severity threshold. Additivity is a special case, not the default. |
| **Scale** | First order at the crop slot and field; second order at the region or breadbasket; third order at the food system (IPCC AR6 Ch 5). Verdicts stay per scale. |

---

## 2. Domain census (before choosing any figure line)

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet. Then partition or union, then dependency order.

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| **D1 Crop physiology, the crop slot** | crop genotype, heat, water deficit, excess water, soil biota, pest and pathogen | biomass, yield, harvest index | a measured harvest in a factorial field trial (Fig 2 :29) | **union** of conditions; per slot (Fig 1 :19) |
| **D2 Agroecosystem habitat** | conditions (temperature, water, soil, season, terrain) and relations (pollination, predation, competition, dependency) | ecosystem services and disservices | the same non-updating harvest ground | **union with contact cascade**; residual three steps out (Fig 11 :52-53) |
| **D3 Climate and atmosphere frame** | CO2 concentration, temperature trend, precipitation distribution, extreme-event frequency | forcing, concentration, probability | the instrumental record / radiative forcing, which does not update on crop models | different closure; a **binding** into D1 needs a source gate and shadow test |
| **D4 Verification and model frame** | crop models, FACE and T-FACE trials, remote sensing, statistical yield records | residuals and agreement | measured yield, never agreement among models | one evidence pool where models share FACE data (Fig 2 :31) |
| **D5 The intersections (compound domain)** | heatÃ-drought, droughtÃ-flood (sequential), droughtÃ-pest, soilÃ-water, pestÃ-heat | the joint yield deviation | factorial interaction term measured at the ground | **not a list**: a specific compound per intersection (Fig 9 :57-58) |

**Partition or union.** The split lands on a **union**, not a partition. Fig 9 :54-55: *"And when the split lands on a union rather than a partition, unbundle before you search again."* *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*

**Order by dependency (Fig 3).** Perceive each stressor at the slot, acquire terms for what each affords the crop, state what counts as yield loss, plan an intervention, then carry what worked. The chain breaks between vocabulary and objective: we can name all five stressors but have no ordinary term for their joint yield outcome, and that link has the fewest instruments (Fig 3 :25-27). A full-factorial field trial is the missing instrument, not another model.

---

## 3. Figure census, quoted before concluding

The lines below were selected only after the census above. Each is verbatim from `03-FIGURES_TEXT.md`.

### 3.1 Per-slot, never an average

- Fig 1 :19 â€” *"The residual is indexed by object slot, not aggregated."*
- Fig 1 :22 â€” *"Aggregating across slots is how a live signal disappears into an average."*

### 3.2 Union, not partition

- Fig 9 :4-5 â€” *"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."*
- Fig 9 :55-56 â€” *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."*
- Fig 9 :57-58 â€” *"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."*

### 3.3 The habitat is enumerated; the effect is a cascade

- Fig 11 :43 â€” *"The habitat is enumerated, never composed."*
- Fig 11 :46 â€” *"conditions: light, water, temperature, season, terrain"*
- Fig 11 :47 â€” *"relations: pollination, predation, competition, dependency"*
- Fig 11 :52-53 â€” *"Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."*

### 3.4 Bond type is the composition, not the ingredient list

- Fig 12 :5 â€” *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*
- Fig 12 :92 â€” *"Under a symmetric bond, k operands have k! spellings and one term"*
- Fig 12 :117 â€” *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
- Fig 12 :123 â€” *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*
- Fig 12 :87 â€” *"a threshold relation between two quantities"*
- Fig 12 :125 â€” *"A composition costs in two currencies, and they do not add."*

### 3.5 Valence is relative to the residual

- Fig 11 :49 â€” *"An actor's valence is relative to the residual, not a property it carries."*
- Fig 11 :51 â€” *"No standing list of good actors survives a change of residual."*
- Fig 11 :61 â€” *"The seat's power is asymmetric. Introduction is available; exclusion is not."*
- Fig 11 :63 â€” *"a managed ecosystem is permanent work rather than a solved state."*

### 3.6 The ground, and the cost of losing it

- Fig 2 :29 â€” *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*
- Fig 2 :31 â€” *"Independence, between two frames, is how little they draw on the same evidence."*
- Fig 2 :35 â€” *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
- Fig 2 :42 â€” *"Buy independence in proportion to the cost of being wrong."*
- Fig 10 :24 â€” *"the ground does not decay, the channel does"*
- Fig 10 :26 â€” *"saturated metrics, pooled readings"*
- Fig 10 :33 â€” *"The anchor must not update."*

### 3.7 Shape, reach, and the honest gap

- Fig 9 :32 â€” *"you get a kind of thing, never the answer itself"*
- Fig 13 :115 â€” *"The set is closed. The arrangements are not."*
- Fig 13 :118 â€” *"infinite effort inside a finite reach."*
- Fig 13 :134 â€” *"Unreachable is a verdict here, not a silence"*
- Fig 9 :60 â€” *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*
- Fig 8 :39 â€” *"So a search that finds nothing is never a proof of absence."*

---

## 4. Findings F1..F11

### F1 â€” The question asks for a single number; the figures index the residual per slot (decisive against Reading A)

Fig 1 :19 and :22 above. "Major crops" and "global yield" are aggregates over crop slots, regions and growth stages. Li et al. (2025, *Plants*) report that compound drought and heatwave datasets are organised *"across multiple spatial scalesâ€”from site-specific and field-level measurements to regional and global assessments"* and that the response *"cannot be inferred directly from their individual responses"*. Ribeiro et al. (2020, *Biogeosciences*) find the compound effect differs by cereal and region. IPCC AR6 WGII Ch 5 (Bezner Kerr et al., 2022) states: *"Increased, potentially concurrent climate extremes will periodically increase simultaneous losses in major food-producing regions (medium confidence)."* A global average would hide exactly the live slot the question is about.

**Verdict:** Reading A is refused at the ground of the figures. `specified`, triangulated (Fig 1 plus three low-overlap world sources).

### F2 â€” The five are a union with binding intersections; one lever leaves the intersections standing

Fig 9 :55-56 and :57-58. Irrigation clears the drought-only region; it leaves heatÃ-drought, droughtÃ-pest and soilÃ-water intersections standing because the second condition still binds. Romero et al. (2019, *Scientific Reports*, freshwater ecology, genuinely low overlap) found hydrological stress governed 8 of 11 biofilm responses while warming and pesticides governed 4 each, yet 29% of combinations were non-additive and the sign shifted with exposure time. This is the union signature, not a list of five equal causes.

**Verdict:** Reading B. `specified`, triangulated (Fig 9 plus freshwater ecology).

### F3 â€” The composition is a typed bond; additivity is an assumption, not a result

Fig 12 :5, :92 and :117. Asking "how will they combine" is asking which bond holds. If `+` held, the five would have 120 spellings and one term; the code that charges for sequence would overcharge by logâ‚‚(5!). The world says sequence matters: Ribeiro et al. find the compound dry/hot likelihood of crop loss rises above drought alone by 8 to 11 percent and above heat alone by 19 to 29 percent; Romero et al. find antagonisms rise from 59% of significant interactions at 48 hours to 86% at 30 days. Meijer et al. (2026, *Plant Stress*, via search index) classify 58.1% of legume observations as additive, 38.7% antagonistic, 3.2% synergistic. So the additive bond is common but not universal, and the deviation is context-indexed.

**Verdict:** the bond is ordered and graded, `â†’` for timing and `â‹›` for severity. Strain S2 is recorded below because "graded" is not one of the seven named bonds; the Operators table :68 says a relation failing all tests is *"a claim that has not been made yet"*, so we do not mint an eighth bond. We use the two named ordered bonds already held.

### F4 â€” The effect is a contact cascade, not a first-order sum

Fig 11 :43, :46, :47, :52-53. Heat raises atmospheric water demand, which lowers soil moisture, which changes pest susceptibility and soil biological activity, which changes yield. IPCC AR6 Ch 5 writes: *"Climate change frequently exacerbates the effects of other drivers of change"* and lists cascading impacts of climate hazards on food and nutrition. SkendÅ¾iÄ‡ et al. (2021, *Insects*) note that *"Lack of water in the soil can cause plants to lose their biological functions and become even more susceptible to diseases and pests"* and that drought-stressed plants attract bark beetles via xylem cavitation. First-order enumeration misses the residual that matters.

**Verdict:** `specified`, triangulated (Fig 11 plus IPCC and the pest review).

### F5 â€” No standing list of harmful or helpful conditions

Fig 11 :49 and :51. Soil organic matter is not a standing good: a 2026 *Global Change Biology* study (via search index) found that *"the largest yield gains from SOC occur during moderate water supply conditionsâ€”not drought"* and that *"the services SOC provides to crops, including water storage, require water for their effective delivery."* Warming is not a standing harm: SkendÅ¾iÄ‡ et al. report that 59% of analysed pest species showed responses that could reduce their harmful impact, and that low-latitude pests may decline as temperatures pass their optima. Kabato et al. (2025, *Science of The Total Environment*, via search index) stress that soil management must be *"tailored ... to specific soil and environmental contexts."*

**Verdict:** valence is residual-relative. `specified`, triangulated. Any universal "heat bad, soil good" ranking is refused.

### F6 â€” The ground is a factorial harvest measurement, not model agreement

Fig 2 :29, :31, :35, :42; Fig 10 :24, :26, :33. IPCC AR6 Ch 5 describes the instruments actually in use: *"a network of experimental studies with plants exposed to elevated CO2 concentrations, ozone and elevated temperature provides data on the fundamental responses"* (FACE and T-FACE) and adds that *"Increasingly, experimental studies seek to examine the interaction between climatic factors such as temperature, drought and ozone"*. Li et al. (2025) list laboratory experiments, field trials, Earth system observations, statistical records and model simulations as five distinct data classes. Models sharing the same FACE corpus are one evidence pool (Fig 2 :31), not multiple witnesses. The channel decays when the climate moves outside the calibration even though the ground does not (Fig 10 :24).

**Verdict:** the anchor is measured yield from a non-updating, factorial design. `specified`, triangulated.

### F7 â€” A five-way interaction is unreachable at this budget

Fig 13 :115 and :118; Fig 9 :32. A full factorial over five binary conditions has 32 cells per growth stage per site; with three stages and multiple sites the space grows past what current experiments cover. Li et al. (2025) state that *"experiments addressing compound events are inherently more complex than those focusing on single stresses"* and that compound findings *"have yet to be systematically summarized in prior reviews."* The framework returns a shape (union, per-slot, typed bond, threshold), not the coefficient for a named crop.

**Verdict:** `gap` of the unreachable-at-this-budget kind, reported as a verdict, not silence (Fig 13 :134). Not underivable in principle: a designed experiment could arrive.

### F8 â€” Adaptation is permanent work, not a solved state

Fig 11 :61 and :63. One can add irrigation, cultivars, cover crops or diversified planting; one cannot subtract the habitat. IPCC AR6 Ch 5: *"Ecosystem-based approaches such as diversification, land restoration, agroecology and agroforestry have the potential to strengthen resilience to climate change with multiple co-benefits, but trade-offs and benefits vary with socio-ecological context (high confidence)"* and *"Implemented adaptation in crop production will be insufficient to offset the negative effects of climate change (high confidence)."*

**Verdict:** `specified`, triangulated. No once-and-for-all fix; verdicts stay context indexed.

### F9 â€” Global yield loss figures are filters for the budget, never witnesses for the verdict

Fig 9 :60. UNDP/FAO (2022) report *"the combined effects of heat and drought have decreased global average yields of maize, soybeans, and wheat by 11.6 percent, 12.4 percent, and 9.2 percent, respectively"*. Deutsch et al. (2018, *Science*, via search-indexed abstract) project 10 to 25 percent higher pest losses per degree of warming. These numbers are real and useful for prioritising effort. They do not settle the composition question: they are aggregates over the very slots whose residual we must keep separate (F1).

**Verdict:** the numbers go in the budget column, not the verdict column.

### F10 â€” The five crop failures in one region are a union compound, not one harder failure

The bundle-splitting rule above applies at scale 3 as well. IPCC AR6 Ch 5 states: *"Increased, potentially concurrent climate extremes will periodically increase simultaneous losses in major food-producing regions (medium confidence)."* A simultaneous multi-region, multi-crop loss is the intersection of conditions at another scale, with its own anchor (market and food-security outcomes). It must be unbundled before it is searched, as the figure requires, and not folded into the crop-slot residual.

**Verdict:** separate domain at scale 3; verdict not averaged with D1.

### F11 â€” What survives, with mode attached

| claim | mode | figure / source |
|---|---|---|
| The residual is indexed per crop, region and stage, not aggregated | `general` structural, `specified` per slot | Fig 1 :19, :22 |
| The five form a union with binding intersections | `specified` | Fig 9 :55-58 |
| The bond is typed, ordered and threshold-bearing; additive is a special case | `specified` | Fig 12 :5, :92, :117, :87 |
| The effect is a contact cascade, often three steps out | `specified` | Fig 11 :52-53 |
| Valence is relative to the residual; no standing list of good or bad conditions | `specified` | Fig 11 :49, :51 |
| The ground is a factorial harvest measurement | `specified` | Fig 2 :29; Fig 10 :24 |
| The specific coefficients for a named crop and combination | `gap` | Fig 9 :32; Fig 13 :134 |

---

## 5. Pre-registered refuter (written before the conclusion)

Required by the discipline: *"a falsifier written before the run is a design instrument, not only an honesty device"* (the exemplar records this as Seat Map :287; the same rule is expressed in `THE_FORMULA.md` "Direction" and in Fig 5 :65 *"make the sought-for shape an ORDINARY TERM"*).

The shape claim is refuted if any of the following holds:

1. A single measured yield number predicts the joint effect of all five conditions across crops, regions and stages without per-slot residual structure.
2. A single lever demonstrably clears every region of the union, including every intersection where two or more conditions bind.
3. A full-factorial, stage-resolved experiment shows the five combine exactly additively for all crops, severities and durations, with no interaction term.
4. A standing list of conditions that are harmful, or beneficial, for all crops in all contexts is established at the ground.
5. Agreement among models that share one FACE or trial corpus is accepted as the settling verdict for a combination none of them measured.

If any fires, the structural claim is withdrawn. Until one is run, no part may be labelled `grounded`.

---

## 6. Recommendation

1. Do not answer with a global percentage. Report per crop, region and stage (F1).
2. Unbundle the five into conditions and relations by enumerating the habitat (Fig 11 :43-48), then describe each intersection as a compound (F2, F4).
3. State the bond type and write the additive null as a refutable term, not a default (F3).
4. Name the anchor: a factorial field measurement with a channel that is kept reachable as the climate moves (F6, F8).
5. Put the global loss numbers in the budget column (F9).
6. Record the gap honestly as unreachable at this budget, not silence (F7).

---

## 7. Canonical usage check and retraction / confirmation log

Two rules were applied after the first six sections: the canonical figures README (*"the quotes are the authority, not this summary"*; a reading that makes figures contradict one another has misidentified its domain) and `THE_FORMULA.md` mode rule.

| earlier reading | status after the check |
|---|---|
| "F3: an eighth, graded bond is needed" | **Retracted.** The Operators table :68 says a relation failing all tests is a claim not yet made. We use the held ordered bonds `â†’` and `â‹›` and record grading as a parameter, not a new bond. Strain S2 stayed visible. |
| "F5: soil organic matter and diversification are standing goods" | **Retracted and replaced.** Fig 11 :49-51 governs; the GCB 2026 result makes the relativity concrete. |
| "F1: the five are five of the six substrate terms" | **Retracted as a first-pass temptation.** Fig 13 governs the six physical states and structures; heat, drought, floods, pests and soil are habitat conditions and relations under Fig 11. Different objects; no strain after re-census (S1). |
| "F7 is a failure of the search" | **Reframed.** Fig 13 :134: *"Unreachable is a verdict here, not a silence"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* It is unreachable at this budget, not underivable in principle. |
| F2 union reading | **Canonically confirmed.** Fig 9 :54-58 is explicit about unions and intersections. |
| F6 ground reading | **Canonically confirmed.** Fig 2 :29 and Fig 10 :24 are authority for the anchor and the decaying channel. |
| F9 filter/witness split | **Canonically confirmed.** Fig 9 :60. |
| Simulated status | **Confirmed** by *The Recursive Self-Improvement Trap*. No ground reading was taken. |

### Strains carried forward

- **S1 (dissolved by re-census).** Applying Fig 13's cross-kind composition rule directly to "heat plus drought" as two states would be a forced reading. Re-census assigns Fig 13 to the physical substrate and Fig 11 to habitat conditions and relations.
- **S2 (named, not hidden).** Severity grading is a parameter on the held ordered bonds, not an eighth bond. Operators :68 forbids minting it as a relation.
- **S3 (dissolved by re-census).** Fig 11 :51 versus practical adaptation advice. The advice is a binding relative to a yield-stability residual, not a standing category.
- **S4 (dissolved by re-census).** Per-slot residual versus the global food-security question. The global number is an aggregate over slots; IPCC's simultaneous losses are a scale-3 compound, not a larger D1 verdict.
- **S5 (live).** The exact five-way coefficient for a named crop is unreachable at this budget. It stays a gap with a stated instrument, not a hidden assumption.

### Updated verdict

The shape survives. The residual is a per-slot union of overlapping conditions with a typed, ordered, threshold-bearing composition and residual-relative valence, settled only by a factorial harvest measurement. The global single number is refused; the specific coefficients are a declared gap. Verdicts are kept separate per domain and never averaged. Mode `specified` on the domains, `general` on the shape, not `grounded`. Simulated derivation, internally consistent with the figures, not corroboration and not a ground reading.
