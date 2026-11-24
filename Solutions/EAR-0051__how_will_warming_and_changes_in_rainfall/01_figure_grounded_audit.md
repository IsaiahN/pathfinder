# Figure-grounded audit: warming, rainfall and soil carbon storage

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md` step 107: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." (attributed to the local formula, not to a figure line).

**Status of this derivation: a simulation, not a ground reading.** LLM output is simulacra, and a testable output would have to be derived from a real architecture or by working the formula by hand. This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FIGURES_README_canonical.md`, `THE_FORMULA.md`, all opened this session. World sources opened this session are in `10_source_ledger.csv`.

---

## 0. The residual, in effect terms

The question asks how warming and changes in rainfall will affect soil carbon storage. Stated as a residual:

**R = the gap between what a frame predicts for the net soil-carbon flux under a given combination of temperature and water conditions, and what the ground returns when that combination is actually applied, measured per soil slot and per carbon fraction.**

- **Arity:** three, not two. Warming, rainfall change, and their interaction. The interaction is its own operand because a single-driver lever leaves the intersection standing (Fig 9 :56).
- **Symmetry:** not symmetric. Warming is an energy condition, rainfall is a water and gradient condition, and swapping them is not the same experiment. The comparison that decides the sign of the flux is ordered (input against output), not a symmetric average.
- **Scale:** first order at the plot and soil-profile slot; second order at landscape and region; third order through cascade (erosion, fire, permafrost thaw, snow-cover change).
- **Index:** R is indexed by slot, never by a global total. Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." A global mean SOC percentage hides permafrost, peatland and tropical mineral soil, which are the live slots.

**What an answer would look like (bound as an ordinary term before the run, per formula step "Direction"):** a conditional map from (temperature, water, slot, carbon fraction) to the sign and approximate magnitude of the net SOC flux, with the threshold region where the sign flips stated explicitly. A single global number is NOT an acceptable answer shape; it fails the index rule above.

**Each option leads to:** predicting net loss commits us to a positive carbon-climate feedback and thinning remaining budgets; predicting net gain commits us to CO2 fertilisation and input increases outweighing decomposition; predicting "small or uncertain" commits us to a residual that lives in indirect effects and in the interaction term. The three are not three guesses at one number, they are three different compounds.

---

## 1. Domain census, written before any figure line was chosen

R by arity, symmetry and scale is stated above. One line per domain with actors, currency and anchor. A domain without a nameable anchor is not a domain yet and is not admitted.

| domain | actors | currency | anchor (nameable?) |
|---|---|---|---|
| D1 Habitat conditions | temperature, water, season, terrain as conditions in contact with soil | contact with the soil system, not a shared "climate" scalar | yes: Fig 11 :46 lists water and temperature as habitat conditions |
| D2 Stock and flow | SOC fractions, roots, microbial necromass, mineral surfaces | carbon mass, residence time, input flow versus output flow | yes: Fig 12 operators table, comparison is "a threshold relation between two quantities" |
| D3 Actor valence | decomposers, mycorrhizae, soil fauna, crops | benefit or harm relative to SOC storage, not a fixed property | yes: Fig 11 :49 valence is relative to the residual |
| D4 Compound and cascade | warming, rainfall, erosion, fire, thaw, snow-cover change | second and third-order effects; intersection terms | yes: Fig 9 :55 union of overlapping conditions; Fig 11 :52 contact cascades |
| D5 Verification | field warming-plus-rainfall experiments, long-term monitoring, remote sensing, process models | independent contact with the ground | yes: Fig 2 :29 measurement and experiment as anchor |

**Partition or union?** D1 and D2 form a **union compound**, not a list. Two conditions in contact (warming, rainfall) act on a stock that is itself a comparison of flows. Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." D3 through D5 attach to the compound; they are not additional drivers to be averaged with it.

**Order by dependency (Fig 3):** enumerate the habitat first (D1), describe the residual before choosing any frame (Fig 9 :27-28), settle each slot before aggregating (D1 before D2 at scale), then verify with independent frames (D5). Composition cannot be assessed before the conditions that feed it are named.

---

## 2. Figure census (quoted verbatim before concluding)

| figure | bearing | verdict on this question |
|---|---|---|
| Fig 1 | residual per slot, frame-internal quantities disqualified | global SOC averages are not the signal |
| Fig 2 | anchor must not update, independence from low overlap | models agreeing with models cannot corroborate |
| Fig 3 | dependency order, a reading below the break reads nothing | enumerate conditions before modelling the stock |
| Fig 4 | lossy round trip, measure the gap | condensation to a single number has a measurable R_T |
| Fig 5 | three guards as a product, MDL bargain | no new primitive is licensed by this question |
| Fig 6 | import moves the wall, instruments grow from worse instruments | the ground needs a discriminator, not a new label |
| Fig 7 | agreement is variation, not a verdict | multi-model ensembles are not witnesses |
| Fig 8 | union surplus, residual first and frame second | low-overlap field experiments plus synthesis have surplus |
| Fig 9 | union compound, describe before looking | warming-by-rainfall is a compound with its own loop |
| Fig 10 | ground does not decay, channel does; bring a characterised residual | long-term monitoring is a channel that can be lost |
| Fig 11 | habitat enumerated; conditions include temperature and water; cascade | the primary governor of D1, D3, D4 |
| Fig 12 | catalyst, cycle, isomer, functional group, two currencies | the mechanism vocabulary for D2 |
| Fig 13 | six terms, cross-kind composition, energy plus gradient compose a flow | temperature and moisture are bonded through a flow, not added |
| Operators table | ⋛ comparison is a threshold relation between two quantities | net flux sign is a comparison, not a sum |

---

## 3. Findings F1 to F9

### F1: The figures name water and temperature as conditions, and require enumeration rather than composition (governs D1)

Fig 11 :43 "The habitat is enumerated, never composed."
Fig 11 :44 "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."
Fig 11 :46 "conditions: light, water, temperature, season, terrain"
Fig 11 :48 "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."

Warming and rainfall change are two entries on the habitat's own condition list. The instruction is to enumerate them separately and then outward, not to blend them into one "climate" variable before the residual is described. Collapsing the two into a single index is the blend failure the figures forbid: it removes exactly the axis the question asks about.

**Mode:** `general` (structural rule). **Status:** triangulated across Fig 11 :43-48 and Fig 9 :27-28 (low overlap: habitat enumeration versus leave-and-arrive order).

**Refuter:** show a frame in which temperature and water are one primitive and the union compound still predicts the sign flip at the same threshold. Until then, two conditions stay two operands.

### F2: Energy plus gradient compose a flow; the two drivers are different terms (governs D1 to D2)

Fig 13 :76 "Energy and a gradient compose a flow. A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is."
Fig 13 :45 "An ordering varying across space gives a distribution, and a distribution is a fact that stays put. What makes a gradient a gradient is that it can be spent, and neither an ordering nor a span of space has directedness."

Temperature is the energy state; rainfall sets the moisture distribution whose spent directedness drives decomposition and transport. Fig 13 itself says a gradient over space and a gradient over time are different terms. A warming-over-time experiment and a rainfall-across-space experiment therefore cannot be substituted for one another, and neither alone composes the flow that the other completes.

**Mode:** `specified` (mechanism shape). **Status:** triangulated across Fig 13 :76 and Fig 13 :45-47 (same figure but different claims and operands; the world sources in `09` provide the genuinely low-overlap check).

**Refuter:** demonstrate that a temperature-only manipulation and a water-only manipulation produce the same fraction-resolved flux response, including the same threshold, at the same slot.

### F3: The sign of the stock change is a comparison, not a sum (governs D2)

Operators table :48-49 "a threshold relation between two quantities" with the test "is it about which is larger, rather than both being present? Yes."
Fig 12 :123 "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

Net soil-carbon change is input flow against output flow. When output exceeds input the slot is a source; when input exceeds output it is a sink. That is a comparison (⋛) with a threshold at equality, so the response to two conditions is expected to be nonlinear near the switch. Fractions matter: mineral-associated and particulate carbon are members of the same functional group with different qualifiers, and their fluxes are not interchangeable.

**Mode:** `specified`. **Status:** single-source for the figure definition (operators table and Fig 12), corroborated in the world by Beillouin et al. 2023 (small mean effects with wide intervals) and Chen et al. 2026 (a threshold between 2 and 4 °C that only appears under increased precipitation); see `09`.

**Refuter:** show a soil system whose net flux is a linear, additive function of temperature and water with no threshold and no fraction dependence across the measured range.

### F4: Warming plus rainfall change is a union compound, so a single-factor lever is structurally insufficient (governs D4)

Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
Fig 9 :56 "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."
Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

This is the sharpest figure bearing on the question's actual form. A warming-only result settles the region where water is not limiting. A rainfall-only result settles the region where temperature is not limiting. The intersection stays standing, and it is categorically different, not "more of the same".

**Mode:** `general` (structural). **Status:** triangulated across Fig 9 :54-58 and Fig 1 :19-22 (different figures, low overlap: union logic versus slot indexing).

**Refuter:** a single-factor response function that predicts the combined response within the measurement error across all slots and fractions, with no interaction term needed.

### F5: Actors' valence is relative to this residual (governs D3)

Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries."
Fig 11 :50 "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."

A decomposer that is a benefactor to nutrient cycling can be a malfactor to carbon storage. Warming and rainfall change can flip that relation without changing the actor. A standing list of "good soil microbes for carbon" does not survive a change of residual.

**Mode:** `general`. **Status:** single-source (Fig 11).

**Refuter:** exhibit an actor whose effect on SOC is identical in sign and magnitude under every temperature and water regime and every slot.

### F6: Contact cascades; the residual that matters may be three steps out (governs D4)

Fig 11 :52 "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."

Direct effects of warming and rainfall on decomposition are first order. More intense rainfall drives erosion (second order); warming and drying drive fire and permafrost thaw (second and third order). The world synthesis in `09` reports that indirect climate effects (wildfire, snow-cover change) exceed direct effects, which is the cascade in data form.

**Mode:** `specified`. **Status:** triangulated across Fig 11 :52-54 and the world synthesis (low overlap: figure rule versus empirical meta-analysis).

**Refuter:** show that indirect effects are bounded below direct effects at every slot, with the cascade enumerated to the point where it stops mattering.

### F7: Managed soil is permanent work, not a solved state (governs recommendations)

Fig 11 :61 "The seat's power is asymmetric. Introduction is available; exclusion is not. You can add an actor and you cannot subtract the habitat, because contact is a fact about the world and does not consult you."
Fig 11 :63 "Which is why a managed ecosystem is permanent work rather than a solved state."
Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves."

Management can add residue, trees or biochar; it cannot remove the changed temperature and water regime. So a "soil carbon solution" is a maintained practice, not a one-off stock attainment. This is also a warning against counting a practice as a verdict before the ground pays for it.

**Mode:** `general`. **Status:** single-source (Fig 11).

**Refuter:** demonstrate a management intervention that permanently fixes the stock without further contact with a changing habitat.

### F8: The cycle's sign decides whether soil is a sink or a source (governs D2 at scale)

Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."

Carbon lost from soil enters the atmosphere, raising temperature, which can increase loss again. The sign of that loop is decided by the threshold in F3, so the global question is not a sum of local answers but a loop whose sign can flip. A chain cannot close by construction, which is why a linear input-output account cannot represent the feedback.

**Mode:** `specified`. **Status:** triangulated across Fig 12 :121 and Fig 12 :119 ("catalyst. A part that survives its own use."), describing microbial residues that persist after the organism acts.

**Refuter:** show a soil-carbon loop whose sign is fixed and cannot flip under any reachable temperature and water combination.

### F9: No new primitive is licensed; the answer is a shape, not a number

Fig 9 :32 "you get a kind of thing, never the answer itself"
Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."
Fig 5 :41 "Any one of them at zero stops the mint entirely."

The figures do not deliver a PgC number for 2100. They constrain the shape any such number must have: slot-indexed, fraction-resolved, threshold-bearing, union-compounded, with a stated refuter. A number without that shape is not a better answer, it is a different kind of claim that the figures do not license.

**Mode:** `general`. **Status:** triangulated across Fig 9 :32 and the canonical figures README (a shape, not a name).

**Refuter:** derive the global number from the six-term set alone, with the threshold and interaction terms, and show it is not a binding from an external earth-system model.

---

## 4. Pre-registered refuter (written before the conclusion)

The shape claim is refuted if any of the following holds:

1. Warming and rainfall change are shown to be one primitive with one response function, and the union-compound prediction of an interaction term fails (breaks F1, F4).
2. A single-factor experiment predicts the combined, fraction-resolved response within error at all slots (breaks F4).
3. The net flux is shown to be linear and additive in temperature and water, with no threshold and no fraction dependence (breaks F3, F8).
4. The slot index is shown to be unnecessary: a global mean predicts each slot's sign and magnitude (breaks §0 and F1).
5. Indirect effects are shown to be strictly smaller than direct effects everywhere (breaks F6).

If any fires, the shape is withdrawn or re-censused. Until one is run, no part of this may be labelled `grounded`. A failure is more useful than an endorsement.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a global number. Ask what a checker would count as a failure (Fig 10 :52 "Bring a characterised residual, never the source.").
2. Keep verdicts per domain separate. Do not average D1 through D5 into a single confidence label.
3. Use filters for budget only. Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."
4. Buy independence in proportion to the cost of being wrong. Fig 2 :42 "Buy independence in proportion to the cost of being wrong." A field manipulation, a long-term monitoring record and a synthesis are three frames only if they do not draw on the same evidence pool.
5. Offer the framework last and opt-in. Fig 4 :22 "Only methods cross up. Only head starts come down." The method is the generator; the conclusion is a recording of one occasion.

---

## 6. Canonical usage check

Two local sources were read after the first five sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md` states the figures "outrank everything else in the repo" and that "the quotes are the authority, not this summary." It also states that "a reading that makes one contradict another has misidentified its domain, not found a flaw" and that the framework reports "a shape, not a name".
- `THE_FORMULA.md` states mode (`general | specified | grounded`), the three-question exit (SEARCHED, INWARD, OUTWARD) and the round-trip gap R_T. Step 7 distinguishes underivable-in-principle from unreachable-at-this-budget: "importing against a budget limit adds an atom that was not needed".

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "soil carbon storage is a state, so its change is a flow" | **Narrowed.** Fig 13 :76 says energy plus gradient compose a flow; the stock itself is a state. The flux is the composition, not the stock. F2 rewritten accordingly. |
| "the figures name temperature and water" | **Confirmed and strengthened.** Fig 11 :46 lists them literally as habitat conditions. F1 is the strongest direct bearing. |
| "warming and rainfall are two independent drivers" | **Retracted as stated.** Independence is a property of frames, not of conditions (Fig 2 :31). They are two enumerated conditions in a union; their evidence pools may overlap. F4 now says "two operands", not "independent drivers". |
| "a threshold must exist" | **Downgraded from verdict to prediction.** The figures license the comparison shape (⋛) and the union compound, not the numerical location of a threshold. The location is a world claim from Chen et al. 2026, `specified` and ungrounded. F3 now says "expected to be nonlinear near the switch". |
| "permafrost is the live slot" | **Not a figure claim.** Slot indexing is Fig 1 :19; which slots are live is a world claim (IPCC AR6 WG1 Ch5). Kept separate. |
| "models agreeing cannot corroborate" | **Confirmed with the correct reason.** Fig 2 :40: agreement from a shared evidence pool is one witness. Fig 7 :35: "A room's agreement is variation, not a verdict." |
| apparent strain Fig 9 (union) versus Fig 13 (composition) | **Not strained after re-census.** Fig 9 governs how the residual splits into conditions; Fig 13 governs what may compose with what. Different quantities. |

### Three-question exit, in order

- **SEARCHED (first, cheapest):** is the interaction term already in the current soil-carbon frame and unfound? The world synthesis says data on individual and combined direct effects are "very limited", so this is a genuine search gap, not proof of absence. Fig 8 :39 "a search that finds nothing is never a proof of absence."
- **INWARD:** sharpen the instrument already returning something. Fig 6 :33 "Nobody specified a telescope from an account of Mars." Fraction-resolved, multi-level warming-plus-precipitation field jobs are the existing proto-instrument; sharpen those, do not invent a new one from a description.
- **OUTWARD:** import only if another closure predicts the interaction's shape. Fig 6 :23. The critical-transitions literature (Bury et al. 2020, Scheffer et al. 2009) is such a frame, imported with a shadow test: it explains the threshold shape the soil frame leaves undescribed, and is debited against its independence.

### Updated verdict

The shape survives: two enumerated habitat conditions form a union compound; their bonded flow is compared against a stock whose sign flips at a threshold; actors' valence is relative to the residual; effects cascade beyond direct contact; and the answer is a slot-indexed conditional map with a pre-registered refuter, not a global number. No figure line yields the numerical response, so the verdict is `specified`, `candidate`, ungrounded. Strains after re-census: **none hidden**; the threshold's location is explicitly a world claim, and the independence of the three verification frames is explicitly unverified.
