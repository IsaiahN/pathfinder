# Figure-grounded audit: can species counts alone predict ecosystem functions?

**Mode of this document: `general` on the structural findings, `specified` on the empirical reading, not `grounded`.**
`THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*
No field measurement was taken in this session, so nothing below is a reliability coefficient.

**Status: SIMULATED DERIVATION, not a ground reading.** The essay *The Recursive Self-Improvement Trap* (read 2026-11-23) says the testable output *"would need to be derived from the real architecture or working the formula yourself"* and that LLM output is *"simulacra."* This audit is a simulated derivation checked for internal consistency against the verbatim figures and against world sources that were actually opened. It cannot settle the empirical question it reports on.

**Sources.** Figure quotes are verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` and cited as `Fig N :line`. Every world source was opened on 2026-11-23 and is recorded with a quote in `10_source_ledger.csv`.

---

## 0. The question stated in effect terms

> How reliably can researchers predict ecosystem functions from species counts alone?

Restated as a residual, with the mode attached:

- An observer holds a community described by one integer, the number of species `S` (species richness). The observer predicts a vector of ecosystem functions `F`: primary production, nutrient retention, decomposition, pollination, stability, and so on, at a site and time.
- `R = |Γ(b,a) − o′|` per slot `s`, where the slot is one function at one site in one context, `Γ` is the prediction from `S`, and `o′` is the measured function.
- **Reliability** is the consistency with which the left-over `left(R, φ)` stays small across slots when `φ` is the rule "use `S` alone". It is not one number. It is a distribution over function slots and habitat contexts.
- **What an answer would look like, bound as an ordinary term (formula step "Direction"):** a statement of the form "with predictor class P and habitat H, the per-slot residual for function f is bounded by r, and the bound fails at condition C." Writing this down makes the sought-for shape refusable rather than a preference.

**The decision this audit faces.** Option A: report a single reliability figure for count-only prediction. Option B: report that the question is a union compound, that count is a symmetric lossy projection, and that reliability must be given per slot and per context, with the missing discriminator characterised as a shape rather than a name. What each leads to: A produces a global number that can hide a live slot residual; B produces a checkable shape and an explicit refuter.

---

## 1. Domain census (before choosing any figure line)

### R by arity, symmetry and scale

- **Arity:** one scalar predictor (`S`) against a vector of functions. The map is many-to-one: very many communities share a count.
- **Symmetry:** `S` is invariant under any permutation of species identities. Swapping species A for species X leaves `S` unchanged but can change `F` greatly. This is a *symmetric projection* in the figure's own sense (Fig 12 :23, Fig 12 :92).
- **Scale:** `S` is a site-level aggregate over object slots; `F` is a process rate at a slot. The gap between them is a transform between scales (Fig 4 :27).
- **Indexing:** `R` must be read per slot, not as a global average (Fig 1 :19, Symbols table :43).

### One line per domain: actors, currency, anchor

| domain | actors | currency | anchor | nameable? |
|---|---|---|---|---|
| D1 Taxonomic counting | species as interchangeable tokens, the observer counting them | species number `S` | a plot census or reference collection, a checkable count | yes |
| D2 Trait and composition | species identities, traits, relative abundances, functional groups | trait distributions, identity and dominance, complementarity | measured function in an experiment or survey (Gagic 2015; Hong 2022) | yes |
| D3 Habitat and context | light, water, temperature, season, terrain; pollination, predation, competition, dependency | contact and context, cascades | the ground: the function measured in that habitat (Carrick 2020) | yes |
| D4 Verification | ecologists and referees, the claim and its refuter | residuals and agreement | the ground, never agreement (Fig 2 :29, Fig 2 :45) | yes |

No domain lacks a nameable anchor, so all four are domains. D2 and D3 were not in the original "count alone" frame; they are the frames the residual points toward.

### Partition or union

This is a **union compound**, not a partition, and not one hard problem.

> Fig 9 :54 *"And when the split lands on a union rather than a partition, unbundle before you search again."*
> Fig 9 :57 *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*
> Fig 9 :59 *"a case in two conditions is not a harder case of either"*

"Can S alone predict F?" bundles at least three conditions: identity at fixed count, trait and abundance arrangement, and habitat context. A lever applied only to `S` clears the region where the other conditions do not bind and leaves the intersections standing (Fig 9 :58). The compound has its own loop and its own ground.

### Order by dependency (Fig 3)

Perception first (can the observer even read species identity and count reliably?), then vocabulary (are there terms for traits, functions and relations?), then the objective (reduce per-slot `R`), then planning, then carrying what worked (Fig 3 :19, Fig 3 :20). A count-only protocol that optimises a global fit while one function slot carries positive mass is working above a break it cannot see:

> Fig 3 :22 *"A step whose input never arrives cannot be diagnosed, only its predecessor can. Which is why a reading taken below the break is not a weak reading. It is a reading of nothing."*

---

## 2. Figure census

| figure | bearing on this question | verdict |
|---|---|---|
| 1 The Agent | residual indexed per object slot; aggregation hides live signal | decisive for how reliability must be reported |
| 2 The Ground | anchor is measurement; agreement from one pool is not corroboration | decides the verification frame |
| 3 Dependency Chain | order by dependency; reading below the break is nothing | decides protocol order |
| 4 The Membrane | transform between scales loses information; measure the round trip | governs count as a coarse description |
| 5 Mint Pipeline | a new term needs support, reach and novelty | count-only cannot mint identity from itself |
| 6 Closure and Reachability | import is the only operator that moves the wall | more counting cannot add an atom |
| 7 Room Chain | agreement compounds, evidence does not | a consensus of users of one metric is not a verdict |
| 8 Union Surplus | residual first, frame second; low overlap gives surplus | trait and habitat frames are imports with surplus |
| 9 Leave and Arrive | union before search; filters for budget, witnesses for verdict | decides unbundling and the role of `S` |
| 10 Ground Maintainer | keep the anchor reachable; pooled readings are a channel failure | decides what an expert check may see |
| 11 The Habitat | capability is agent-and-habitat; enumerate, never compose | decisive against count as a habitat substitute |
| 12 The Bond | a list of ingredients is not the arrangement; symmetry prices spellings | count is a symmetric projection, not a composition |
| 13 Minimum Viable Set | reachable shape, not a name; unreachable is a verdict | decides the honest stop |
| Operators table | comparison and negation; a vocabulary without negation only accumulates | a metric that cannot refuse a failed case only accumulates fits |
| Symbols table | `R` per slot, never a single global number | reliability cannot be one global scalar |

Strained readings are named in section 7, not smoothed over.

---

## 3. Findings

### F1 — A count aggregates across slots, and that is how a live signal disappears (decisive, `general`)

> Fig 1 :19 *"The residual is indexed by object slot, not aggregated."*
> Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."*
> Fig 1 :28 *"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."*

Counting a community is exactly aggregation across object slots: ten species here and ten species there are one term under `S = 10`, although their functions may differ. A global reliability coefficient built on that aggregation can be near zero while one function slot carries positive mass:

> Fig 1 :13 *"a global R near zero with one live slot residual is a legal state"*

**Consequence.** The answer to "how reliably" cannot be one number. It must be a per-function, per-habitat report with the worst live slot shown. Symbols table :43: *"One object, region or entity being tracked. R is measured per slot, never as a single global number."*

**Mode:** `general` (structural). **Status:** triangulated across Fig 1 and the Symbols table (two passages with low textual overlap). **Refuter:** a count-only predictor whose per-slot residual stays small across functions and contexts, not merely whose global average is small.

### F2 — Count is a symmetric projection: many spellings, one term (decisive, `general`)

> Fig 12 :23 *"this bond is symmetric, so the four are one term"*
> Fig 12 :92 *"Under a symmetric bond, k operands have k! spellings and one term"*

Under a symmetric bond there are `k!` spellings and one term. Species number behaves this way: all orderings and all identity substitutions of a set of `k` species give the same integer, so a count-only frame literally cannot tell two different communities apart. The world analogue is metamerism:

> World source, colour science and human cognition, Wikipedia, *"Metamerism (color)"*: *"In colorimetry, metamerism is a perceived matching of colors with different (nonmatching) spectral power distributions."*

A colourimeter reading green *"cannot comment on the source"* (essay *The Hard Problem is About Source*, read 2026-11-23). A count reads ten and cannot comment on which ten.

**Mode:** `general`. **Status:** triangulated (Fig 12 symmetric-bond rule plus Operators table symmetry rule plus an independent colour-science source). **Refuter:** show that the target functions are invariant under all permutations and substitutions of species at fixed count. If function really depends only on how many, the symmetry is harmless and this finding falls.

### F3 — The information that decides function is in the arrangement, which the count does not record (decisive, `general` with `specified` empirical corroboration)

> Fig 12 :5 *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*
> Fig 12 :14 *"the ingredients are recorded and the arrangement is not"*

A count is poorer than a list of ingredients: it discards even the names, and with them identity, traits, abundance distribution and interaction structure. The world literature is concordant:

> Gagic et al. 2015, Proc Biol Sci, PMC4309003: *"Trait-based indices consistently provided greater explanatory power than species richness or abundance."* The same abstract concludes that responses were *"due to the identity and dominance patterns of the trait composition rather than the number or abundance of species per se."*
> Hong et al. 2022, Ecol Lett, PMC9300022: *"the positive effects of biodiversity were mainly driven by interspecific complementarity"*.

Complementarity is a relation, a bond in the figure's sense, not a count.

**Mode:** `general` for the structural claim; `specified` for the empirical ranking of predictors. **Status:** triangulated (Fig 12 plus two independent ecology studies with different taxa and methods). **Refuter:** a trait and identity model that adds zero incremental explanatory power over `S` across the same functions. That would mean the arrangement carries nothing, which would break this finding.

### F4 — Habitat is load-bearing and cannot be substituted by a count (decisive, `general` with `specified` corroboration)

> Fig 11 :39 *"capability is a property of agent-and-habitat, never of the agent alone."*
> Fig 11 :40 *"An improvement that does not change contact changes nothing, however much it improves."*
> Fig 11 :43 *"The habitat is enumerated, never composed."*
> Fig 11 :46 *"conditions: light, water, temperature, season, terrain"*
> Fig 11 :47 *"relations: pollination, predation, competition, dependency"*

A species list, and certainly a species count, is not a habitat. The habitat must be read off the world:

> Fig 11 :48 *"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."*

Contact cascades, so a function three steps out can be the one that matters:

> Fig 11 :52 *"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."*

World corroboration:

> Carrick and Forsythe 2020, PLoS One, PMC7392319: *"In recovering ecosystems the relationship between species composition and ecosystem function was weak and saturating (directly accounting for only 2% of the variation)."* The same paper warns of the need *"to properly account for the extensive natural variation."*
> Hong et al. 2022: biodiversity effects were *"often not to the same degree"* across environments.

**Mode:** `general` (habitat is structural), `specified` (the 2% figure is measured in that meta-analysis, not a universal constant). **Status:** triangulated (Fig 11 plus two ecology sources). **Refuter:** a count-only predictor with stable, calibrated, context-independent error across habitats. That would remove the habitat as a necessary condition.

### F5 — This is a union compound, so one lever cannot clear it (`general`)

> Fig 9 :57 *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*
> Fig 9 :59 *"a case in two conditions is not a harder case of either"*

Count identity, trait arrangement and habitat context overlap. Adding more species-count samples is a lever on one condition. It leaves the intersections standing. Fig 8 gives the constructive rule:

> Fig 8 :32 *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."*
> Fig 6 :23 *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*

The remedy is an import from a frame whose closure differs, with a provenance gate and a shadow test (Fig 6 :12, Fig 6 :13). Trait ecology and habitat ecology are such frames. Fig 8 :29 requires *"low overlap: B does not draw on A's evidence"* for the surplus to exist.

**Mode:** `general`. **Status:** triangulated (Fig 9 and Fig 6 and Fig 8, three different figures). **Refuter:** demonstrate that the trait and habitat frames are just renamings of the count frame, so the union has no surplus.

### F6 — Filters are not witnesses: a count is a budget filter, never a verdict (`general`)

> Fig 9 :60 *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

`S` is cheap, and cheapness is a legitimate reason to use it as a first pass: decide which sites need a full functional and habitat survey. It is not a reason to let it decide the function. Confusing the two is the "filter hands you a verdict" failure. A room of users of the same metric cannot repair this:

> Fig 7 :13 *"same closure, handed along; agreement compounds, evidence does not"*
> Fig 2 :40 *"agreement about the world is worthless when the agreeing frames share an evidence pool"*

**Mode:** `general`. **Status:** triangulated (Fig 9, Fig 7, Fig 2). **Refuter:** show that the count predictor's accuracy is produced by independent ground contact at each slot rather than by a shared evidence pool or a convention.

### F7 — Unreachable is a verdict, not a silence (`general`)

> Fig 13 :133 *"A system with a closure can answer that before it searches, and what it returns is a shape rather than a name."*
> Fig 13 :134 *"So the system can report that it lacks something rather than producing an answer anyway. Unreachable is a verdict here, not a silence,"*
> Fig 13 :138 *"you get a kind of thing, never the answer itself"*

The honest report is not "researchers have not yet found the right way to use counts." It is: from a count, for identity-dependent functions, the predictor is **underivable in principle**, because the map has already thrown away the discriminating information. This is distinct from "unreachable at this budget", where more search inside the same closure would help:

> Fig 8 :40 *"Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."*

**Mode:** `general`. **Status:** triangulated (Fig 13, Fig 8, and the independent data-processing-inequality source below). **Refuter:** exhibit a function for which identity substitution at fixed count provably cannot change the outcome, and show all target functions are of that kind.

### F8 — Mathematics corroborates the shape of the loss (secondary, independent field)

> Wikipedia, *"Data processing inequality"*: *"no processing of Y, deterministic or random, can increase the information that Y contains about X."*
> Wikipedia, *"Sufficient statistic"*: *"A sufficient statistic for a model parameter contains all of the information that the dataset provides about that parameter."* The same page notes that *"for an arbitrary distribution the median is not sufficient for the mean"*, because knowing the full sample would still add information.

A count is a deterministic many-to-one processing of community composition. By the data processing inequality it cannot carry more information about function than the full composition does, and for identity-dependent functions it carries strictly less. It is not a sufficient statistic for the vector of functions. The sufficient-statistic page states the condition under which no information is lost, namely equality of mutual informations; that condition is not met by a count when traits and context matter.

**Mode:** `general` (theorem-level), applied to this case as `specified`. **Status:** single-source per claim, but from a field (information theory and statistics) with no overlap with the ecology evidence pool. **Refuter:** show that the target functions are a function of `S` alone, which would make the count sufficient for them.

### F9 — Mode discipline: a reliability number is a measurement, not a derivation (`general`)

> `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

This audit derives the *shape* of the answer, not the coefficient. Any sentence of the form "count alone predicts ecosystem function with reliability r" is a `specified` claim that needs a named ground: a named function, site set, habitat, model and error metric. Without those, it is a preference stated as a verdict.

**Mode:** `general`. **Status:** single-source (formula mode rule), corroborated by the metalaws note: *"the figures are the ground for design questions; Isaiah is the anchor for what the figures genuinely cannot settle."* **Refuter:** a ground reading with all five elements named, in which case the coefficient is `grounded` for that scope.

### F10 — What survives, with modes

| claim | mode | figure or source |
|---|---|---|
| Reliability must be reported per function and per habitat, not as one global number | `general` | Fig 1 :19, :22, :28; Symbols :43 |
| Count is a symmetric many-to-one projection, so identity-dependent information is lost before prediction | `general` | Fig 12 :23, :92; metamerism source |
| Trait identity, dominance and complementarity explain more than richness in the studies read | `specified` | Gagic 2015; Hong 2022 |
| Habitat conditions and relations are load-bearing; count is not a habitat substitute | `general` + `specified` | Fig 11 :43 to :48; Carrick 2020 |
| The predictor missing from a count-only frame is characterisable as a shape, not named by the framework | `general` | Fig 13 :133, :134, :138 |
| A single numerical reliability for "species counts alone" across all functions | **refused** until scope and ground are named | F9 |
| More counting will eventually resolve identity-dependent functions | **refused** | Fig 8 :32, Fig 6 :23 |

---

## 4. Pre-registered refuter (written before the conclusion)

A falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. **Symmetry test.** For the target functions, every permutation and identity substitution at fixed species count leaves the function unchanged, so the discarded information is irrelevant.
2. **Per-slot test.** A count-only predictor keeps per-slot `R` small across functions, sites and habitats, with no single live slot and no context dependence, on held-out data.
3. **No-surplus test.** Adding trait, identity, abundance and habitat variables to a count-only model yields no out-of-sample improvement for any function in the set, so the union has no surplus.
4. **Sufficiency test.** Species count is a sufficient statistic for the target function vector: conditioning on full composition adds no information.

If any fires, the structural claim is withdrawn. Until one is run, no part of this folder may be labelled `grounded`. These tests are also the core of `08_expert_verification_packet.md`.

---

## 5. Recommendation

1. Do not report one reliability number. Report a matrix of functions by habitats, with per-slot residuals and the worst live slot shown (F1).
2. Use `S` as a budget filter: triage sites for full surveys (Fig 9 :60). Do not let it hand the verdict.
3. Unbundle the union before searching again: separate identity at fixed count, trait and abundance arrangement, and habitat context (Fig 9 :54).
4. Import the trait and habitat frames with a provenance gate and a shadow test. The world sources in `10_source_ledger.csv` are the record of where those atoms came from (Fig 8 :51).
5. Keep the shape and the refuter in front of any links or theory. Fig 10 :52: *"Bring a characterised residual, never the source."*
6. State the mode on every claim. A coefficient without a named ground is not a result.

---

## 6. Canonical usage check and retraction log

Two local files were read after the first five sections and govern how the figures may be used: `FRAMEWORK/reference/FIGURES_README_canonical.md` (*"the quotes are the authority, not this summary"*; the framework returns *"what a missing thing would have to look like (a shape, not a name)"*) and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` (design questions are decided by derivation, not by escalation to the anchor).

| earlier reading in this audit | status after the canonical check |
|---|---|
| "Count has no predictive value" | **Retracted.** Richness has a general positive association with ecosystem functioning in the studies read (Hong 2022 and the BEF literature behind Carrick 2020). The surviving claim is that it is not sufficient in general, not that it is useless. |
| "Reliability is a number" | **Retracted.** Fig 1 :19 and Symbols :43 make the number a per-slot object. A single scalar would be the aggregation failure the figures forbid. |
| "Shape, not a name, forbids naming traits" | **Narrowed, as in the exemplar.** The phrase governs a *missing* primitive. Traits and habitat conditions are held atoms in their own frames, so naming them is a provenanced binding from world sources, not the invention of a seventh primitive. The framework still returns a shape for the discriminator a count-only frame lacks. |
| "This is an import that moves the wall" | **Refused.** Traits and habitat are not added to the figure set; the count-only frame imports them from frames whose closures differ (Fig 6 :23). |
| "Species richness is a poor predictor" as a universal verdict | **Narrowed to `specified`.** It is what the specific studies read found, on their taxa, functions and contexts. The structural claim is the many-to-one loss, not a universal ranking. |
| Apparent strain Fig 11 enumerate-versus-compose and Fig 12 composition | **Not strained.** Re-census: Fig 11 governs the habitat (enumerated from the world); Fig 12 governs composition inside a library. Different objects, same as the exemplar's Fig 13 versus Rule 2 re-census. |
| No source conflicts with the figure verdict | **Confirmed.** All opened world sources corroborate the loss-and-context reading. The ecology sources share a literature pool with one another, so their agreement is one witness, not three; the mathematics and colour-science sources are independent fields, so their agreement carries more weight. |

**Seven-question recursive derivation (summary).** Can count predict function? Not in general, because the map is many-to-one (F2). Which shape does the missing predictor have? Slot-indexed, cross-kind, habitat-embedded (F1, F4). Is more search the answer? No, the loss is upstream of search (F5). Can the gap be measured? Yes, per slot against the ground, and the round trip from full composition to count and back has a nonzero gap (Fig 4 :30). Is naming a single best variable allowed? No, a shape is returned, not a name (F7). Can this derivation settle the coefficient? No, it is simulated and ungrounded (F9). Route: SEARCHED first (more count data cannot add the lost atom, so this is underivable, not unfound), then INWARD (better instruments for traits and context), then OUTWARD (import trait and habitat frames with provenance).

**Updated verdict.** The shape survives. A species count is a symmetric lossy aggregation; reliability is per-slot and context-bound; the missing discriminator is a cross-kind, habitat-embedded arrangement characterisable as a shape. Strains after re-census: none hidden, one open item recorded in `11_audit.md` (the exact size of the round-trip gap cannot be measured without a ground reading).
