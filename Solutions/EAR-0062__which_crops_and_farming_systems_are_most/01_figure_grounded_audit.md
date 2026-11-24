# Figure-grounded audit: which crops and farming systems are most likely to adapt successfully

**Mode of this document: `specified` on the per-domain findings, `general` on the structural shape, `gap` on the literal winner list. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." An unmeasured quantity is a specification of what to measure, not a verdict.

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap* (opened this session): "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too (intelligence is essentially arrangement). However, the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figure text. It cannot settle the question it reports on. No trial, measurement or field observation was taken by this author.

**Sources.** Figure lines are quoted verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` and cited as `Fig N :line`, where the number is the SVG text element's own line number in that extract. THE_FORMULA and the canonical README are local framework files. World sources were opened on 2026-11-22 and are listed in `10_source_ledger.csv`.

---

## 0. The question under audit, stated as a residual in effect terms

The question is: which crops and farming systems are most likely to adapt successfully to future climate conditions?

Stated as an effect, not as a name. Let a slot `s` be a crop genotype, a place, a season and a management set together. Let the prediction be what the current variety-and-management package will yield at `s` under the next distribution of conditions. Let the observation be what actually happens at `s` as conditions move. The residual is `R_s = |Gamma(b, a) - o' |` at that slot (`Fig 1 :11`, Symbols table: R is "the gap between prediction and observation"). "Adapt successfully" is the claim that `R_s` stays small while the habitat around `s` changes, and that the slot remains in contact with a ground that pays for yield and persistence.

What is being decided: whether to return a standing list of winners (Option A) or a shape plus a separator that keeps the per-slot verdicts and states what would refute them (Option B). What an answer would look like, bound as an ordinary term before the run (Formula step "Direction"): a **separator** that, for any candidate crop-and-system pair, says (i) which conditions its success depends on, enumerated in effect terms; (ii) what non-updating ground would have to pay for the claim; (iii) which conditions would have to be imported from a differing closure; (iv) what failure would retract it. That term is bound here at the start, so it can accrue a residual like anything else and be refusable by the same test.

The question is not asking for a physiology textbook. It is asking for a *ranking*. The first finding is that the figures cannot produce the object the question asks for, and that this is a verdict rather than a silence.

---

## 1. Domain census, before any figure line is chosen

### R by arity, symmetry and scale

- **Arity:** many slots, at least four distinct condition classes acting together. "Future climate conditions" is not one variable. Fig 11 :46-47 names the condition list: "conditions: light, water, temperature, season, terrain" and "relations: pollination, predation, competition, dependency". The agriculture literature adds management as a co-equal dimension. The residual is therefore a compound with at least three interacting dimensions (genotype, environment, management), not a one-variable question.
- **Symmetry:** "adapt successfully" is **ordered and comparative**, not a symmetric join. It asks which option ranks higher against a threshold. Fig 12 :87 defines comparison as "a threshold relation between two quantities"; the Operators table calls ⋛ "a threshold relation between two quantities" and notes "a goal is a comparison, which is why a vocabulary without it cannot state one". A symmetric bond would let us swap crop and system and get the same term; here the arrangement decides the substance (`Fig 12 :5`: "The bond is the rest of the information, and it is the half nothing was recording.").
- **Scale:** at least three. Crop physiology (organism), field and farm (managed seat), region and food supply (population). Fig 4 :19-20: the kernel is "the same loop and the same rule for naming what worked, whether one agent is running it or a thousand. Only the actors, the currency and the anchor change." Fig 12 :103: "Composition is recursive, and the level decides what is irreducible." A variety that pays at field scale is not automatically an atom at food-supply scale.

### One line per domain: actors / currency / anchor

| domain | actors | currency | anchor | nameable anchor? |
|---|---|---|---|---|
| **D1 Crop genotype and physiology** | genotypes, traits (phenology, heat and drought tolerance, root depth), seed systems | survival and reproduction expressed as yield under stress | multi-environment trials, measured yield, common-garden comparison | yes: yield measurement that does not move when a breeder changes its mind |
| **D2 Farming system as maintained seat** | the manager and the practices: variety choice, sowing date, density, irrigation, soil management, diversification, livestock integration | introduced actors and changed contact; head starts carried from one season to the next | multi-year on-farm outcomes, input use, yield stability | yes: on-farm measured persistence across seasons |
| **D3 Climate and habitat** | conditions (light, water, temperature, season, terrain) and relations (pollination, predation, competition, dependency) | selection pressure and cascading effects | climate observations, phenology records, pest and pollinator surveys | yes: observations, though the habitat updates and must not be confused with the ground |
| **D4 Verification and research frame** | breeders, agronomists, crop modellers, reviewers, farmers' observations | agreement and residual | measured yield and a seat able to refuse a failing practice | yes: the ground, never agreement |

No domain is admitted without a nameable anchor. D3 is admitted because observations exist, with the explicit note that the habitat is not the ground: "The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not." (Fig 11 :73). If a domain had no anchor, it would not be a domain yet and would be listed as owed, not smuggled in.

### Partition or union

**Union, not partition.** Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57: "a case in two conditions is not a harder case of either". A crop's success sits in the intersection of genotype, environment and management. A single lever (a drought-tolerant gene, an irrigation scheme, a diversification practice) clears the region where only one condition binds and leaves the intersections standing. Fig 9 :54: "when the split lands on a union rather than a partition, unbundle before you search again."

This is not a figure-only claim. Cooper et al. 2021 open with "Climate change and Genotype-by-Environment-by-Management interactions together challenge our strategies for crop improvement" and add that climate change introduces "directional changes in the environmental dimension of the G × E × M factorial". They state that "the actual dimensionality of the problem space is greater than expectations set by viewing the problem from only one of the contributing dimensions." That is world corroboration of the union, from a low-overlap frame (crop modelling and quantitative genetics) relative to the figure census.

### Order by dependency (Fig 3)

Fig 3 :20: "The chain is ordered by dependency, not by importance." The five links for this question:

1. **Perception.** Can the frame tell which conditions are actually changing at a slot? IPCC AR6 WGII Ch 5 reports that warming has altered "the distribution, growing area suitability and timing of key biological events, such as flowering and insect emergence", with "plant–pollinator and pest mismatches". Perception exists but is uneven.
2. **Vocabulary.** Are there terms for what a situation affords? G x E x M, environment-types, target population of environments, functional diversity. Yes, and Cooper et al. explicitly call the current state "describing G × E × M outcomes" rather than predicting them.
3. **Objective.** Can the frame say what counts as progress in its own terms? This is the broken link. Handayani et al. 2026: "improvements in soil health, biodiversity, yield, income, or diet do not demonstrate the capacity to absorb, recover from, or adapt to climatic shocks." Fig 3 :25-27 says the link between having terms and saying what counts as progress "has neither, so it attracts the least attention and the fewest instruments" and "A link with no instrument is not a link that works. It is a link nobody has looked at."
4. **Planning.** Choosing crops and systems for a non-stationary target. Cooper et al. describe the need to "co-design new G–M technologies for a non-stationary TPE".
5. **Learn and carry.** Multi-environment trials and on-farm record, carried as a method. Fig 4 :22: "Only methods cross up. Only head starts come down."

Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." Most adaptation effort lands on link 4 (planning, new varieties) while link 3 (what counts as success under a shock) lacks an instrument. Effort spent above the break arrives at a step that cannot use it.

---

## 2. Figure census

| figure | bearing on this question | verdict after strain test |
|---|---|---|
| **1 The Agent** | residual per slot; ground is the only metric; frame-internal quantities disqualified | governs the per-slot indexing; forbids a global winner average |
| **2 The Ground** | anchor must not update; agreement from one evidence pool is not two witnesses | governs the measurement anchor and the correspondence trap |
| **3 Dependency Chain** | breaks between vocabulary and objective; objective link has no instrument | governs the "success" definition, not the crop list |
| **4 The Membrane** | only methods cross up; head starts come down; round trip has a gap | governs what a recommendation may be: a method, not a recording |
| **5 Mint Pipeline** | three guards as a product; settlement necessary but not sufficient | a named winner without support and settlement is not a mint |
| **6 Closure / Reachability** | import is the only operator that moves the wall; instruments improved from worse ones | governs moving a crop into a new region as import, with a cost |
| **7 Room Chain** | agreement compounds, evidence does not; next room must differ | governs a multisite consensus pool |
| **8 Union Surplus** | low-overlap frames; convergent derivation vs adopted import; import needs provenance | governs D1/D2/D4 triangulation and the diversification analogues |
| **9 Leave / Arrive** | union vs partition; describe residual before frame; filters for budget | decisive for refusing the single list and for keeping effect sizes as filters |
| **10 Ground Maintainer** | ground does not decay, channel does; conventions must not decide outcomes | governs the measured-yield anchor and the non-updating trial |
| **11 The Habitat** | capability is agent-and-habitat; valence relative to residual; no standing list; introduction not exclusion; isolation is substitution | decisive across all four domains |
| **12 The Bond** | arrangement carries meaning; comparison is ordered; two currencies; recursion | governs G x E x M as a typed composition and the cost accounting |
| **13 Minimum Viable Set** | six terms, set closed, arrangements not; unreachable is a verdict | governs the substrate analogue and the declared gap |
| **Operators table** | ⋛ is a threshold relation; a goal is a comparison | "most likely" is a comparison, not a property |
| **Symbols table** | R is the aim and is always a slice; ground is the anchor | keeps the residual per slot and unsellable to a frame |

Strained readings are named in section 7, not smoothed over.

---

## 3. Findings

### F1 :The literal winner list is structurally refused (decisive for the object asked for)

`Fig 11 :51`: "No standing list of good actors survives a change of residual."

`Fig 11 :49`: "An actor's valence is relative to the residual, not a property it carries."

`Fig 11 :50`: "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."

A crop is not "adaptable" in the abstract. Under one residual (a hotter, drier slot with reliable irrigation) maize with a heat-tolerant hybrid and high-density management is a benefactor. Under another residual (the same heat with no water and a shifted pest complex) the same combination is a malfactor. The world literature says the same thing in its own terms: Romagosa et al. (Springer reference entry, opened) write that "it is very hard to identify the 'best' variety across a diverse set of environments subjected to complex biotic and abiotic factors and interactions generally causing significant changes in varietal rank." They define a genotype as stable "if it yields well relative to the productive potential of the environments in which is grown", and distinguish broad from "specific or narrow adaptation". Valence is relative to the environment list, exactly as Fig 11 :49 says.

**Refuter:** produce a crop-and-system pair whose success is invariant across the enumerated condition classes at multiple slots under a non-updating ground, with the rank unchanged. If that holds, the standing list is licensed and F1 falls. Until then, "most likely" must be indexed per slot.

**Status:** triangulated across Fig 11 :49-51 and the Romagosa quantitative-genetics frame (low overlap: plant breeding statistics versus Figure 11's habitat law). The world source predicts rank change; the figure predicts valence flip. Same shape, different evidence pools.

### F2 :"Most" aggregates away the live signal

`Fig 1 :19`: "The residual is indexed by object slot, not aggregated."

`Fig 1 :22`: "Aggregating across slots is how a live signal disappears into an average."

A global answer "crop X is most likely to adapt" is an average across slots. The live signal is the slot where the current package is failing while the global mean still looks healthy. `Fig 1 :13`: "a global R near zero with one live slot residual is a legal state". The exemplar's correction applies here too: a system that averages across objects has thrown away the only signal that says where to look.

Handayani et al. 2026 corroborate at the level of evidence synthesis: "heterogeneous evidence precluded a pooled effect estimate." Their review explicitly distinguishes "direct resilience evidence", "indirect evidence based on intermediate outcomes or proxies" and "conceptual or mechanistic inference", and concludes that "Outcomes varied with agroecological conditions, market access, farm size, labor availability, gender relations, and diversification design". A pooled winner would erase exactly that variation.

**Refuter:** show a global statistic whose per-slot residuals are all near zero and trending down under a fixed anchor. Then aggregation would be harmless. Note the asymmetry: a global number cannot establish this; only the per-slot readings can.

**Status:** triangulated (Fig 1 plus Handayani's evidence-classification finding).

### F3 :The residual is a union of overlapping conditions

`Fig 9 :54`: "when the split lands on a union rather than a partition, unbundle before you search again."

`Fig 9 :55`: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."

`Fig 9 :57`: "a case in two conditions is not a harder case of either"

`Fig 11 :46`: "conditions: light, water, temperature, season, terrain"

`Fig 11 :47`: "relations: pollination, predation, competition, dependency"

The question bundles genotype, environment and management into one superlative. Cooper et al. 2021 make the union explicit: "Climate change and Genotype-by-Environment-by-Management interactions together challenge our strategies for crop improvement", and "the challenge for both breeders and agronomists is to co-design new G–M technologies for a non-stationary TPE." They also quote Lobell and Burke's "How will climate change interact with the many other factors that affect the future of food production and food security?" with the answer "there are no easy answers". That is world corroboration that one lever will not clear the intersections.

`Fig 9 :60`: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." Effect sizes, trial counts and model scores are filters for where to spend the next season of work. None of them is a witness for which crop wins.

**Refuter:** demonstrate a partition of climate-risk cases into disjoint crop classes such that one practice clears every class and no intersection remains. G x E x M theory predicts this cannot be done; a counterexample would dissolve the union reading.

**Status:** triangulated (Fig 9 union rules plus the G x E xM frame, independent evidence pools).

### F4 :"Adapt successfully" has no instrument at the crucial link

`Fig 3 :27`: "A link with no instrument is not a link that works. It is a link nobody has looked at."

`Fig 3 :18`: "Optimising a link that already works cannot rescue one that does not."

`Fig 3 :20`: "The chain is ordered by dependency, not by importance."

"Success" is usually read off an intermediate outcome: higher yield, more soil carbon, more biodiversity, higher income, better diet. Handayani et al. 2026 refuse that reading: "improvements in soil health, biodiversity, yield, income, or diet do not demonstrate the capacity to absorb, recover from, or adapt to climatic shocks." Their review's central distinction between direct and proxy evidence is the missing instrument made visible. IPCC AR6 WGII Ch 5 is careful in the same way: it says "Ecosystem-based approaches such as diversification, land restoration, agroecology and agroforestry have the potential to strengthen resilience to climate change with multiple co-benefits, but trade-offs and benefits vary with socio-ecological context (high confidence)", and adds "Implemented adaptation in crop production will be insufficient to offset the negative effects of climate change (high confidence)."

The Operators table rules that "a goal is a comparison, which is why a vocabulary without it cannot state one". A goal without a threshold is not a goal. "Adapt successfully" must be bound to a comparison against a declared threshold on a non-updating ground. Until then it is a `specified` objective owed an instrument, not a settled quantity.

**Refuter:** exhibit a discriminating instrument that distinguishes actual adaptation from its proxies at the slot (for example a shock-period survival-and-recovery measurement that separates capacity from a good mean season). If none can be named, the objective link stays broken and no winner can be settled.

**Status:** triangulated (Fig 3 link rule plus Handayani's proxy warning plus the IPCC confidence language). Single-source on the figure side for the link placement itself, so marked honestly.

### F5 :Capability is agent-and-habitat; the farming system is a maintained seat

`Fig 11 :39`: "capability is a property of agent-and-habitat, never of the agent alone."

`Fig 11 :40`: "An improvement that does not change contact changes nothing, however much it improves."

`Fig 11 :37`: "Where a seat exists, something is doing work, and it is exactly what the seat does: enumerate the habitat, rank by cascade, introduce actors, build instruments, read the ground."

`Fig 11 :61`: "Introduction is available; exclusion is not."

`Fig 11 :63`: "Which is why a managed ecosystem is permanent work rather than a solved state."

This is the strongest positive result for the farming-system half of the question. A farming system is not a product with a fixed adaptability score. It is a maintained seat whose power is asymmetric: it can add an actor (a variety, a cover crop, an irrigation schedule, a pollinator strip) and cannot subtract the habitat, because "contact is a fact about the world and does not consult you" (`Fig 11 :61-62`). A system that keeps the channel to a non-updating ground reachable and keeps a seat able to refuse a failing practice is the kind of system that adapts. A system that merely holds a good variety while its channel decays does not.

`Fig 11 :36`: "Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground." In dryland farming there is a seat (the breeder, the agronomist, the farmer). The label "resilient" does no work there; the work is enumerating, ranking, introducing and reading.

**Refuter:** show an improvement to a crop in isolation that moves the ground at the slot without changing contact (no change in conditions sampled, no change in management, no change in the reading). Fig 11 :40 says this cannot happen; Fig 11 :71-72 names it as the standing refuter of the capability claim in the figure itself.

**Status:** triangulated (Fig 11 :37-40, :61-63 plus the ICRISAT program description, which says "context-dependent agriculture and sustainable livelihoods" and combines "Accelerated Crop Improvement", "Resilient Farming Systems" and "Transforming Agrifood System").

### F6 :The habitat must be enumerated, not composed, and contact cascades

`Fig 11 :43`: "The habitat is enumerated, never composed."

`Fig 11 :44`: "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."

`Fig 11 :52`: "And contact cascades."

`Fig 11 :54`: "Carson, Silent Spring, 1962. The mechanism, biomagnification through the food chain to eggshell thinning, was established over the following decade."

A heat-and-drought list is a first-order enumeration. IPCC AR6 WGII Ch 5 reports second- and third-order effects: "plant–pollinator and pest mismatches", "reduced effectiveness of pollinator agents as species are lost from certain areas", "toxigenic fungi, plant and animal-based pathogens", and competition for land, energy and water. The DDT example in Fig 11 is the canonical case: the residual that mattered was three steps out. A crop that survives heat but loses its pollinator or acquires a new pest has not adapted.

**Refuter:** enumerate the habitat to second and third order at one slot, then show that a crop's rank is unchanged from the first-order-only ranking. If rank is invariant, the cascade rule adds nothing here.

**Status:** triangulated (Fig 11 :43-54 plus IPCC cascade findings, genuinely different evidence pools).

### F7 :Diversification is a method or a recording, and the world sources disagree about its price

`Fig 4 :22`: "Only methods cross up. Only head starts come down."

`Fig 4 :25`: "A recording carried upward looks like knowledge and is a description of one occasion."

A recommendation to diversify is a method only if it travels with the arrangement: which crops, in which order, with which water and soil conditions, and what would count as failure at this slot. A bare "diversify" is a recording of other people's successes and cannot produce a new one here.

The world sources disagree sharply, and the disagreement is informative rather than fatal:

- Tamburini et al. 2020 (second-order meta-analysis, 98 meta-analyses, 5160 original studies, 41,946 comparisons) found diversification "without compromising crop yields" with a neutral yield effect, "lnRR = 0.01; 95% confidence interval (CI) = −0.12 to 0.14", and concluded "Variability in responses and occurrence of trade-offs highlight the context dependency of outcomes."
- Sridhar et al. 2026 (PRISMA synthesis of 134 diversified systems) report "average yields that are 20-38% better than monocropping" while adding "the effectiveness of the diversification is moderated by regional climatic conditions, policy frameworks and access to markets."
- Handayani et al. 2026 report that "heterogeneous evidence precluded a pooled effect estimate" and that proxy outcomes do not demonstrate adaptation.

A conflict sends us back to the census, never flips the verdict. Re-census: the three sources are measuring different quantities at different scales (ecosystem-service bundle, reported yield ratio, demonstrated shock resilience), so their disagreement is itself evidence for the union and for `Fig 9 :60`: the percentages are filters for the budget, not witnesses for the verdict. No figure line is being overruled by a meta-analysis.

**Refuter:** provide one estimand, one anchor and one shock definition under which all three sources' yield claims agree in sign and magnitude. If that is done, the "filters not witnesses" reading of the conflict loses its force here.

**Status:** figure verdict triangulated (Fig 4 plus Fig 9 :60); world sources conflict and are recorded as one evidence stream with a visible strain, not as three witnesses.

### F8 :Moving a crop is an import with a source gate, a shadow test and a substituted habitat

`Fig 6 :23`: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."

`Fig 8 :50`: "Convergent derivation and adopted import look identical in the contents."

`Fig 11 :66`: "Isolation is not removal of the habitat. It is substitution of one habitat for another."

`Fig 11 :67`: "Move the residual and you must reproduce everything its goal required, and you inherit the new habitat's actors, which you did not choose."

`Fig 11 :70`: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."

"Grow crop X in region Y because X is drought tolerant" is an import from the breeding frame into the new region. It needs provenance (which trial, which environment-types, which years) and a shadow test (does it explain the gap this slot actually has?). Moving the crop reproduces only part of the habitat and inherits pests, pollinators, soils and markets that were not chosen. The two silent failures are named in `Fig 11 :68-69`: "what you failed to reproduce is invisible until the goal fails" and "what you unintentionally introduced is invisible until it acts". Cane toads and kudzu are the same move with the cascade unenumerated (`Fig 11 :65`).

`Fig 11 :65` continues: "Introducing an actor for its cascade is ecosystem engineering, after Jones, Lawton and Shachak, 1994." This is a framework-internal borrowed citation; it is not being counted as an independently opened world source.

**Refuter:** show a translocation where all conditions the goal required were reproduced, all inherited actors were enumerated, and the crop's rank held against a non-updating ground for multiple seasons. That would narrow the import cost, not erase the rule.

**Status:** triangulated (Fig 6, Fig 8, Fig 11 substitution law).

### F9 :The anchor must not update; a correspondent pool is one witness

`Fig 2 :29`: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."

`Fig 2 :33`: "The anchor must not update."

`Fig 2 :35`: "Alignment is triangulation, not negotiation. A mirror cannot correct you."

`Fig 2 :40`: "agreement about the world is worthless when the agreeing frames share an evidence pool"

`Fig 7 :13`: "agreement compounds, evidence does not"

The ground for "adapt successfully" is measured yield and persistence across a declared set of environment-types, with a seat able to refuse a practice when the ground turns against it. A model tuned on the same multi-environment trials it is then used to endorse is not a second frame; it is the same pool talking. `Fig 10 :24`: "the ground does not decay, the channel does" and the channel fails through "stale percepts, dropped transients, saturated metrics, pooled readings" (`Fig 10 :25-26`). In agriculture the corresponding failures are a trial network that stops sampling new environment-types, a yield metric that saturates, and regional averages that pool away the live slot.

**Refuter:** produce two genuinely independent readings of the same slot (for example a process-based crop model and a farmer-observed outcome series) with low overlap in their evidence and show they disagree. That is a healthy signal, not a defect. What would break the rule is showing that agreement between two frames sharing all their data carries verdict weight.

**Status:** triangulated (Fig 2, Fig 7, Fig 10).

### F10 :The named list is a `gap`, reported as unreached, not as silence

`Fig 9 :32`: "you get a kind of thing, never the answer itself"

`Fig 8 :39`: "So a search that finds nothing is never a proof of absence."

`Fig 13 :134`: "Unreachable is a verdict here, not a silence"

`Fig 13 :135`: "It cannot say which primitive is missing, because naming it would mean already holding it."

No figure line returns "maize", "millet", "sorghum", "intercropping", "agroforestry" or an optimal diversification percentage. The figure set gives the shape an adapting option must have and the conditions under which a candidate can be admitted. The specific names are bindings from the agriculture frame onto held terms (genotype, environment-type, management practice), recorded as provenance. They are not derivations of a seventh primitive.

Formula step 7 separates the three questions, and they are kept distinct here:

- **SEARCHED:** is a winner already in our closure and unfound? Partly. Multi-environment trials already contain rank data, but only for sampled environment-types; Cooper et al. say the current state is "describing G × E × M outcomes", and the target is non-stationary. More search at the same reach will not settle a future ranking.
- **INWARD:** extend the instrument from one already returning something. Yes: the objective-measurement link in F4. Build a source-discriminating shock-recovery metric from existing trial and on-farm series.
- **OUTWARD:** import from a frame whose closure differs. Yes: quantitative genetics (G x E x M and TPE), ecology (diversity and stability), earth systems (IPCC hazard cascades). Each import needs a source gate and a shadow test; a wrong atom costs more than starting from primitives (`Fig 6 :24`).

Underivable-in-principle and unreachable-at-this-budget are different facts (Fig 8 :40-43). This is **unreached at this budget**: no ground reading was taken and no multi-decade trial was run. It is not a claim that no crop could ever be named.

**Refuter:** a figure re-census that produces a ranking rule from the figure text alone, verbatim, with no binding from an outside frame. Until that is shown, the list stays a `gap`.

**Status:** single-source on the figure side for the shape-not-a-name limit (Fig 9 plus the canonical README, so triangulated with the local canonical usage rule), and corroborated by the world result that rank changes with environment.

### F11 :Two currencies cannot be summed into one "most likely"

`Fig 12 :125`: "A composition costs in two currencies, and they do not add."

`Fig 12 :126`: "Bits price the description. Actions price finding out whether it holds."

`Fig 12 :127`: "They are in different units, so a system holding one accounting cannot compare them and will not notice the shortfall."

The question's superlative silently sums mean yield, yield stability, cost, input use, labour, biodiversity and risk into one score. Those are different currencies with different anchors. A high-yield irrigated system and a low-yield but shock-stable diversified system are not points on one scale. Handayani et al. report that "competition, added labor, weak demand, and insecure access to resources could offset benefits" of diversification; Sridhar et al. report higher labour requirements alongside lower input costs. `Fig 12 :130`: "Summing them into one figure is the error this names, not the fix for it."

**Refuter:** exhibit a common unit in which yield, stability, labour, biodiversity and risk are commensurable at the slot, with the conversion declared and checkable. Absent that, the superlative is a category error rather than a hard calculation.

**Status:** triangulated (Fig 12 plus the world source disagreements on what diversification buys).

### F12 :Prestige and agreement cannot validate an adaptation claim

From *The Recursive Self-Improvement Trap* (opened): "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it. The Ground Maintainer must be blind to prestige." `Fig 2 :42`: "Buy independence in proportion to the cost of being wrong." A well-known institute's endorsement of a crop gets the claim a budget to be tried. It does not make the claim true. `Fig 10 :59`: "an interest in the outcome is unavoidable, an interest in the reading is disqualifying." The author's stake in a favourite crop or system is declared here and handled with the pre-registered refuter below.

**Status:** single-source on the figure side (Fig 2 plus the essay, same author and evidence pool), stated as a discipline rather than as an independent corroboration.

### F13 :The substrate analogue is an analogue, and is marked as such

Fig 13 :7-24 names six terms in two kinds: states (space, time, energy) and structures (spectrum, gradient, network). At the agronomic scale these recur as a **structural analogue**, not as an identity: space is the field and region, time is season and phenology, energy is the conserved finite budget of radiation and water, spectrum is the ordering of environment-types by severity, gradient is the spendable difference across a water or heat cline, network is the pollination, pest, market and seed relations. Fig 4 :20 governs the transfer: "Only the actors, the currency and the anchor change." Fig 13 :74: "Everything else is a composition across the two kinds, never within one." So a crop state cannot be composed directly with a climate state; an environment-type (a structure) must sit between, which is exactly what the TPE and environment-type vocabulary in Cooper et al. supplies.

**This mapping is a strain.** The six-term set is derived for physical systems in Fig 13, not for agronomy. It is used here only as a recursion analogue across scales, with `general` mode. If the analogy were pressed (for example by claiming that water is literally the energy term), it would be a forced reading and would govern a different quantity. Kept visible, not hidden.

**Refuter:** derive one of the six from the other five at any scale, or show that the agronomic case requires a seventh kind rather than a binding of the six. Either breaks the analogue.

**Status:** single-source, `general`, explicitly an analogue.

---

## 4. Pre-registered refuter

Required before the conclusion, per the standing instruction: a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. A crop-and-system pair keeps its rank across all enumerated condition classes at multiple slots under a non-updating ground, with no valence flip (breaks F1).
2. A global winner statistic is found whose per-slot residuals are all near zero and trending down (breaks F2).
3. The genotype, environment and management conditions form a partition rather than a union, and one lever clears every class including the intersections (breaks F3).
4. A discriminating instrument shows that a proxy outcome (yield, soil carbon, income, diet) is sufficient for demonstrated shock adaptation at the slot (breaks F4).
5. An agent-only crop improvement moves the ground without changing contact (breaks Fig 11 :40 and F5).
6. A translocation reproduces every required condition, enumerates all inherited actors and holds rank for multiple seasons against a non-updating ground (weakens F8's cost, does not break the rule).
7. A figure re-census yields a verbatim figure line that names a crop, a system or an optimal percentage (breaks F10).

If any fires, the relevant finding is withdrawn in the retraction log below. Until one is run, no part of this folder may be labelled `grounded`.

---

## 5. Recommendation

1. Do not send a winner list. Send the separator: per-slot shape, enumerated habitat, non-updating anchor, imported frames with provenance, and the seven refuters above.
2. Bind "adapt successfully" as an ordinary term before any further search (Formula step "Direction"), with a threshold on a shock-recovery measurement. Write the failure condition before the measurement.
3. Repair link 3 of the dependency chain before spending on link 4. An objective with no instrument is the place where effort is wasted.
4. Use the G x E x M and TPE literature as an imported frame with source gate and shadow test, never as a list of answers. Cooper et al. describe a *method* for prediction; that is what may cross the membrane.
5. Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion." Send the generator (the census, the shape, the refuter), not the conclusion.
6. Route through the institutional venues in `03_public_contact_points.csv`. Ask what would refute the shape claim, not whether anyone agrees with it.

---

## 6. Canonical usage check and retraction log

Two local sources govern how the figures may be used, and both were read again this session: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/figures/THE_FORMULA.md`. The key rule from the README: "a reading that makes one contradict another has misidentified its domain, not found a flaw." The limit: the framework returns "what a missing thing would have to look like (a shape, not a name)", then "stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."

| earlier reading in this derivation | status after the canonical check |
|---|---|
| First pass: "Fig 11 :51 means diversification cannot be recommended at all" | **Retracted and narrowed.** Fig 11 :51 refuses a *standing list*, not a maintained practice. Diversification as a method with a declared arrangement and a refuter is admissible; diversification as a universal winner is not. |
| First pass: "no objective is stated, so the question is empty" | **Narrowed.** The objective link is broken, not absent. Handayani et al. name the exact proxy/direct distinction that supplies the instrument. `specified`, owed a measurement. |
| First pass: "the three diversification meta-analyses conflict, so one must be wrong" | **Retracted as a conflict of verdicts.** Re-census: they have different estimands. Their disagreement is evidence for the union and for Fig 9 :60. Kept visible as strain S2. |
| First pass: "the six terms map directly onto crop science" | **Retracted.** The mapping is a recursion analogue across scales (Fig 4 :20), `general` mode, not an identity. Kept as F13 with its refuter. |
| "shape, not a name" applied to maize, millet, sorghum | **Narrowed.** The README's phrase governs a *missing* primitive. Named crops are bindings from the agriculture frame onto held slot terms, so naming one is provenance, not a forbidden invention. The framework still cannot say which binding the ground will settle. |
| "unreachable" read as "unanswerable in principle" | **Retracted.** Formula step 7 and Fig 8 :40-43 distinguish the two. This is unreached at this budget, with INWARD and OUTWARD routes named. |
| Apparent Fig 11 :51 versus Tamburini et al. (diversification works) | **Not strained after re-census.** Fig 11 governs the standing list; Tamburini measures an ecosystem-service bundle at a given slot. Different objects, and Tamburini's own "context dependency" clause agrees with Fig 11 :49. |

### Seven-question recursive derivation, summary

1. **What is the residual?** Per-slot failure of the current genotype-and-management package as conditions move (Fig 1 :19, Fig 10 :24).
2. **What kind of thing is asked for?** A superlative, which is a comparison (Operators ⋛), not a property carried (Fig 11 :49).
3. **Is it one question?** No. A union of at least genotype, environment, management and their intersections (Fig 9 :55; Cooper et al. G x E x M).
4. **What closes it?** Nothing in the figure closure names a crop. The specific binding is an import with provenance (Fig 6 :23, Fig 8 :50), and translocation is habitat substitution (Fig 11 :66).
5. **What would settle it?** A non-updating ground reading: multi-environment, multi-year shock-recovery measurement with a seat able to refuse (Fig 2 :29, Fig 10 :42).
6. **What is the mode?** `general` on shape, `specified` on per-domain verdicts, `gap` on the list. Nothing `grounded`.
7. **Where does the loop stop?** At the limit of the available instruments, with the lineage and refuters recorded (Fig 13 :134).

---

## 7. Strains and re-census

- **S1, live and narrowed:** Fig 13's physical six-term substrate mapped onto agronomy. Re-census assigns it to Fig 4 :20 (kernel fixed, actors and anchor change), so it is a recursion analogue at `general` mode, not an identity. Kept visible in F13.
- **S2, live and recorded:** three world syntheses disagree on the yield effect of diversification. Re-census assigns them different estimands; their conflict corroborates Fig 9 :60 rather than threatening the verdict. No verdict was flipped.
- **S3, dissolved by re-census:** Fig 11 :51 (no standing list) versus the practical success of diversification. Fig 11 governs the valence of actors relative to a residual; the meta-analyses govern a maintained practice at a sampled set of slots. Different objects.
- **S4, named type question:** ⋛ is defined as a threshold relation between two quantities (Operators table). The superlative "most likely" compares candidate packages whose currencies do not add (Fig 12 :125). Whether a composed package counts as a quantity at that level needs an instrument, not an argument. Left open.
- **S5, dissolved:** "adapt successfully" as a property versus Fig 11 :39 as a relation. Re-census: success is contact-maintenance, so the frame is agent-and-habitat, not a crop trait list.

After re-census: two live strains (S1 narrowed, S2 recorded), one live type question (S4), three dissolved. None hidden.

---

## 8. Updated verdict

The shape survives. The literal object asked for does not.

- **D1 crop genotype:** `specified`, triangulated. No crop wins in general; valence flips with the residual, and rank changes across environment-types.
- **D2 farming system:** `specified`, triangulated. A maintained seat whose power is introduction, not exclusion; adaptation is permanent work; methods cross, recordings do not.
- **D3 climate and habitat:** `specified`, triangulated on the enumeration rule, with the objective-measurement link marked `gap` and owed an instrument.
- **D4 verification frame:** `general`, triangulated. Two non-updating, low-overlap readings against a ground; agreement from a shared pool is one witness.
- **Literal list, universal percentage, named next winner:** `gap`, of the unreached-at-this-budget kind, reported as a verdict and not as silence.

The whole folder is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. Cost if wrong, undoability and reversal are stated in `09_watson_answer.md`.
