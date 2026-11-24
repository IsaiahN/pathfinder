# Figure-grounded audit: when are two species interchangeable?

**Mode of this document: `general` on the structural shape, `specified` on the ecology-facing claims, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*, read this session: LLMs *"can quickly simulate an approximate answer/output with the formula"* but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the ecological question it reports on. See `05_what_shape_means.md` §7.

**Sources.** The 16 canonical figure files: Figures 1 to 13 plus the Operators and Symbols tables, as verbatim text in `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Canonical usage rule in `FRAMEWORK/reference/FIGURES_README_canonical.md`. The eight essays by Isaiah N, all opened 2026-11-23. Public ecological sources in `10_source_ledger.csv`, all fetched 2026-11-23.

---

## 0. The residual, in effect terms

> When may one species be substituted for another with no loss of the ecological function under discussion, and when does that claim of redundancy mislead?

Stated as an effect: an observer predicts that after substituting species B for species A, a measured function (pollination rate, biomass production, nutrient cycling, predation pressure) will be unchanged. The residual `R` is the gap between that prediction and the observation. The decision is whether to treat A and B as one term (the identity bond, interchangeable) or as two terms (different substances, not interchangeable).

Two possible readings and what each leads to:

- **Reading A, the flat reading.** Group species by shared traits or by a functional-group label, then assert that members of a group are interchangeable. This clears a region quickly but leaves the intersections standing, because two species can share every listed trait and still sit at different positions in the interaction network.
- **Reading B, the bonded reading.** Treat interchangeability as a term that must be settled by substitution at each slot, in the relevant habitat, including the cascade, by a frame that is independent of the one that proposed the group. This is slower but the result is checkable.

What an answer would look like, bound as an ordinary term before the run (formula step "Direction"): *interchangeable(A, B, F, H, t)* is true if and only if substituting B for A leaves the measured function F with zero residual at every slot that matters, in habitat H, over the time horizon t that includes indirect effects, and the result is reproduced by a frame that did not share the evidence pool that produced the grouping. That is the sought-for shape made refusable.

---

## 1. Pre-registered refuter

Written before the findings below, as required by the discipline (Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device"*). If any of the following fires, the shape claim is withdrawn or revised, and the revision is recorded here rather than silently applied.

1. **Settlement refuter.** A controlled reciprocal substitution of A and B, measured per slot, leaves every residual at zero, including third-order cascade slots, under at least two contrasting environmental conditions. Then the identity bond is settled for that pair, and any statement that their apparent redundancy is "misleading" is refuted for that pair.
2. **Instrument refuter.** A method is demonstrated that licenses the identity bond from trait descriptions alone, with no substitution measurement and no ground reading. That would break the requirement of settlement and make the flat reading legitimate.
3. **Per-slot refuter.** An aggregate curve (for example the shape of biomass against species richness) predicts the outcome of a specific substitution as well as per-slot residuals do. That would break the per-slot rule as applied to this residual.
4. **Bond refuter.** Two species with identical trait sets and identical network positions are shown to be non-interchangeable in a way the figure's bond vocabulary cannot represent. That would send the bond census back to the Operators table rather than to a softer reading.

None of these was run in this session. No part of the result is `grounded`.

---

## 2. Domain census

R by arity, symmetry and scale, then one line per domain with actors, currency and anchor. A domain without a nameable anchor is not a domain yet.

**R, the residual.** Arity: two indices, species-slot and function-slot. Symmetry: substitutability is the symmetric identity bond (Fig 12 :66: *"two names, one referent"*, and Fig 12 :69: *"substitute one for the other. Is anything lost? No."*), but the relations that carry the function are not all symmetric: sequence (→), production (⇒), subtraction (−) and comparison (⋛) are ordered. Scale: first-order direct contact versus second- and third-order cascade; local condition versus changed condition.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1, trait and function frame | species as bundles of traits; the measured process | effect on a named function (biomass, pollen transfer, nutrient flux) | the measurement of that function under substitution | domain, anchor nameable |
| D2, habitat and contact frame | species, conditions (light, water, temperature, season, terrain), relations (pollination, predation, competition, dependency) | contact and cascade | the ground reading of the function under that condition | domain, anchor nameable |
| D3, verification frame | ecologists, reviewers, datasets, experiments | residuals and agreement | the ground, never agreement | domain, anchor nameable |
| D4, nomenclature only | names on a functional-group list | labels and membership | none | **not a domain yet** |

D4 is named and excluded. A functional-group list with no measurement behind it has no anchor: nothing in it can decide the substitution question. It is nevertheless where most "apparent redundancy" is generated, because a label with no anchor can be repeated without ever being checked. The exclusion is a finding, not a dismissal.

**Partition or union.** This is a **union compound**, not one question. It bundles at least three overlapping conditions: (a) ingredient equivalence, same traits; (b) bond equivalence, same position and relation under the same condition; (c) instrument equivalence, a measurement at the right slot and horizon. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :55-56: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :57-58: *"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."* A single lever, listing species by functional group, clears the region where only (a) holds and leaves the intersections standing.

**Order by dependency (Fig 3).** Perception: measure the function at each species-slot. Vocabulary: have terms for what each species affords (Fig 3 :7: *"it has terms for what things afford: what can be moved, opened, joined, blocked"*). Objective: state what would count as no loss, which is a comparison (Operators table :51: *"a goal is a comparison, which is why a vocabulary without it cannot state one"*). This citation was corrected on 2026-11-23 after the second-seat check found it mislabelled as Fig 12 :52; the correction is recorded in `11_audit.md`. Planning: choose which substitution to run. Learn and carry: name what worked, verify it, carry it. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* The middle link, from affordances to a stated objective, is the one usually taken for granted in redundancy claims.

### Figure census before findings

| figure | verbatim line, cited as `Fig N :line` | bearing | verdict after strain test |
|---|---|---|---|
| 1 The Agent | :19, :22, :13, :28 | residual per slot; averaging hides live signals | governs D1 and D3 |
| 2 The Ground | :29-30, :35, :40, :42 | anchor; agreement versus triangulation | governs D3 |
| 3 Dependency Chain | :7, :27 | vocabulary and objective; uninstrumented links | governs order |
| 4 The Membrane | :22, :30 | methods cross, round trip | governs outreach only |
| 5 Mint Pipeline | :26, :62-65 | acceptance bargain; sought shape as preference | governs refuter design |
| 6 Closure | :23, :27 | import and reach; depth versus absence | governs honest stop |
| 7 Room Chain | :13, :35 | agreement is variation, not verdict | governs D3 |
| 8 Union Surplus | :39, :49, :50 | convergence versus import; no proof of absence | governs D1 |
| 9 Leave / Arrive | :27-28, :32, :54-58, :60 | describe residual first; union split; filters | governs the whole census |
| 10 Ground Maintainer | :24, :42, :52 | ground does not decay; verifier non-access | governs D3 and outreach |
| 11 The Habitat | :39, :40, :47, :49, :50, :52-53 | valence relative to residual; cascade | governs D2 |
| 12 The Bond | :66, :69, :94, :95-96, :117 | identity, arrangement, isomer | governs D1 |
| 13 Minimum Set | :35-37, :115, :134 | overlap implies redundancy among frames; unreachable verdict | governs D1 and honest stop |
| Operators / Symbols | identity ≡; R per slot | notation check | consistent |

---

## 3. Findings

### F1 — Interchangeability is a ground-settled identity bond, not a resemblance

Fig 12 :66 *"two names, one referent"* and Fig 12 :69 *"substitute one for the other. Is anything lost? No."* define the test: the bond is confirmed by substitution plus a reading, not by comparing descriptions. Fig 9 :32 *"you get a kind of thing, never the answer itself"* limits what the framework can produce here: it can give the shape of interchangeability (a symmetric bond settled against a ground) but it cannot name which pair of species holds it.

World corroboration, low overlap with the figures: the *Ecological niche* article (Wikipedia, 2026) defines an ecological equivalent as *"an organism from a different taxonomic group exhibiting similar adaptations in a similar habitat"* and gives cactus and euphorbia, and the anole ecomorphs of the Greater Antilles, which *"evolved in similar microhabitats independently of each other and resulted in the same ecomorphs across all four islands."* That is convergence of form, which Fig 8 :50 *"Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence"* treats as evidence about the atom, not as the identity bond between two particular organisms. Resemblance licenses the hypothesis. It does not settle the substitution.

**Refuter:** the settlement refuter in §1. **Status: triangulated** across Fig 12 (bond definition), Fig 8 (convergence) and the canonical figures README's shape limit. **Mode: `general`** that a substitution test is required; **each species pair `specified`** and ungrounded until measured. No strain after re-census: convergence governs the origin of the form, substitution governs the bond.

### F2 — The live residual is per slot; aggregating across species hides it

Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."* Fig 1 :13 *"a global R near zero with one live slot residual is a legal state"* is the exact formal statement of misleading redundancy at the aggregate level: total function looks unchanged while one species-slot carries a live residual. Fig 1 :28 *"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."*

World corroboration: Tilman et al. 1997, quoted in the *Diversity-function debate* article (Wikipedia, 2026): *"the number of functionally different roles represented in an ecosystem may be a stronger determinant of ecosystem processes than the total number of species, per se. However, species diversity and functional diversity are correlated..."* The clause after the pause matters: a role count and a species count can move together, which is one evidence pool producing two readings. Fetzer et al. 2015 (PNAS, open access) report that the shape of the biodiversity-function relation differs by environment, with saturation in one environment suggesting redundancy and a near-linear relation in another suggesting that each added species matters. The *Ecological effects of biodiversity* article (Wikipedia, 2026) notes that productivity *"is generally measured by taking the total aboveground biomass of all plants in an area"* and that *"Many assume that it can be used as a general indicator of ecosystem function"*. That assumption is the aggregate reading the figures warn against.

**Refuter:** the per-slot refuter in §1. **Status: triangulated** across Fig 1 and two independent literature lines (Tilman quote, Fetzer experiment), with the Wikipedia biodiversity article as a mapping aid rather than a separate witness. **Mode: `general`** structural, `specified` for any given community. Strain check: the aggregate saturation curve and the per-slot rule look opposed only if the curve is treated as a verdict. Fig 9 :60 *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* Re-census dissolves it: the curve is a filter, the per-slot residual is the witness.

### F3 — Same ingredients, different bond: the isomer test

Fig 12 :94 *"The arrangement is the substance."* Fig 12 :95-96 *"Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."* Fig 12 :117 *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*

Applied here: a functional group is an ingredient list. Two species in the same group can be isomers rather than copies, different substances whose shared trait list cannot tell them apart. World corroboration: the *Functional group (ecology)* article (Wikipedia, 2026) says that functional groups are groups whose members *"produce resembling effects to external factors of an inhabiting system"* and that *"variables based on overall function and performance are interchangeable"*, while also reporting Davic's 2003 operational keystone definition: *"a strongly interacting species whose top-down effect on species diversity and competition is large relative to its biomass dominance within a functional group."* That last clause is the bond: within one group, non-redundant dynamics can exist.

**Refuter:** the bond refuter in §1. **Status: triangulated** across Fig 12 and the functional-group/keystone literature. **Mode: `general`** structural, `specified` for a given pair.

### F4 — Redundancy is relative to a residual in a habitat, not a property of a species, and roles shift when the condition changes

Fig 11 :49 *"An actor's valence is relative to the residual, not a property it carries."* Fig 11 :50 *"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."* Fig 11 :39 *"So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."* Fig 11 :40 *"An improvement that does not change contact changes nothing, however much it improves."*

World corroboration, genuinely low overlap: Fetzer et al. 2015 write *"Species that are functionally redundant in one environment may become pivotal in another"* and *"caution is advised in drawing conclusions about functional redundancy based on a single environmental situation."* The *Keystone species* article (Wikipedia, 2026) reports that Menge's work showed *Pisaster* was a powerful keystone on wave-exposed shores but far less important in sheltered places, so *"the extent to which a species could be described as a keystone depended on the ecological context."*

**Refuter:** the settlement refuter, run under two contrasting conditions. **Status: triangulated** across Fig 11 and two empirical literature lines. **Mode: `general`** structural, `specified` that a given pair is condition-dependent.

**RETRACTION, kept visible.** The *Arrival of the Fittest: The Tether Architecture* essay (Isaiah N, 2026-08-19) has a section "Three mappings offered and declined" containing: *"The habitat as an ecological niche. A niche is defined by an organism's relation to its environment. A habitat here is defined by contact with a residual, and the residual moves so the same actors constitute a different habitat when the question changes. The resemblance is real and the definitions do not align."* An earlier draft of this audit used the phrase "ecological niche" as a synonym for the figure's habitat. That mapping is **declined by the source** and is retracted here. Fig 11 is used only as a structural rule about actors, conditions and relations in contact with a residual; no claim is made that figure-habitat equals ecological niche.

### F5 — Contact cascades: interchangeable at first order can fail at third order

Fig 11 :47 *"relations: pollination, predation, competition, dependency"* and Fig 11 :52-53 *"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."*

World corroboration: the *Keystone species* article reports Paine's removal experiment: with the starfish removed, *"the mussels quickly outgrew the other species crowding them out"*, and the rocky pools went from 15 species to 8 after three years and to largely one species after ten. The *Ecological effects of biodiversity* article names the single-level blind spot directly: *"One major problem with both the diversity-productivity and diversity-stability debates discussed up to this point is that both focus on interactions at just a single trophic level."*

**Refuter:** the settlement refuter's cascade clause. **Status: triangulated** across Fig 11 and two literature lines. **Mode: `general`** structural, `specified` for a given cascade.

### F6 — Agreement about redundancy is a convention until a ground settles it

Fig 2 :29-30 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Fig 2 :40 *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* and Fig 2 :42 *"Buy independence in proportion to the cost of being wrong."* Fig 7 :13 *"agreement compounds, evidence does not"* and Fig 7 :35 *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*

World corroboration from a different field (engineering), deliberately low overlap: the *Redundancy (engineering)* article (Wikipedia, 2026) states that *"dissimilar redundancy uses different things. The idea is that the different things are unlikely to contain identical flaws"*, and that the independence formula *"assumes independence of failure events"*, with the failure case of *"two power supplies connected to the same socket in such a way that if one power supply failed, the other would too."* It also records Perrow's point that *"Redundancy sometimes produces less, instead of greater reliability"* because it adds complexity. Two redundant components sharing one failure source are the engineering instance of Fig 2's shared evidence pool. In ecology, the *Functional group (ecology)* article records that *"there is no one clear method for calculating functional redundancy accurately, which can be problematic"* and that *"the tools with which we measure diversity and redundancy cannot be used interchangeably."* The *Diversity-function debate* article records Wardle's critique that experiments presented as solid fact were *"confounded by an experimental design"* and the named *"selection probability effect."*

**Refuter:** a genuine independent frame or a substitution experiment would settle a pair where pooled agreement does not. **Status: triangulated** across Fig 2, Fig 7 and the engineering/ecology literature. **Mode: `general`**.

### F7 — What survives, and where the answer honestly stops

A figure line does govern the residual, so this is not a `gap`. But the specific question (which actual species are interchangeable, in which function, in which habitat) is **unreached**, because no substitution measurement was taken here. Fig 8 :39 *"So a search that finds nothing is never a proof of absence."* Fig 9 :44 *"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."* Fig 13 :134 *"Unreachable is a verdict here, not a silence"*; the framework can return a shape and a route, not a species name. Fig 6 :23 *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*

The defensible residue, each with its mode:

| claim | mode | figure |
|---|---|---|
| Interchangeability is the identity bond, settled by substitution, not by resemblance | `general` structural | Fig 12 :66, :69 |
| The residual lives per species-slot and per function-slot | `general` structural | Fig 1 :19, :22, :13 |
| Same traits with different relations are isomers, not copies | `general` structural | Fig 12 :94, :117 |
| Redundancy is relative to a residual in a habitat and shifts with conditions | `specified`, triangulated in the literature | Fig 11 :49, :50 |
| Direct-contact scoping misses cascade effects | `specified`, triangulated | Fig 11 :52-53 |
| Pooled agreement cannot settle any of the above | `general` structural | Fig 2 :35, :40 |
| This particular pair of species is interchangeable | **not asserted**; requires the ground | §1 refuter |

---

## 4. Recommendation

1. Lead with the shape and the refuter, not with a list of redundant species. Fig 10 :52 *"Bring a characterised residual, never the source."*
2. Describe the residual in effect terms before choosing a literature frame. Fig 9 :27-28 *"describe it before you go looking, or any frame you pick will seem to fit."*
3. Treat functional-group membership as a filter for the budget, never as a witness for the verdict (Fig 9 :60).
4. Measure per slot, under at least two contrasting conditions, including third-order cascade slots. Otherwise the result is an aggregate reading that cannot distinguish the two readings in §0.
5. Keep the lineage: record which grouping produced the hypothesis, which frame tested it, and which condition it was tested under. Fig 13 :128-129 *"Nothing about a composed term tells you, from looking at it, which route produced it or whether that route was available."*
6. Fig 4 :22 *"Only methods cross up. Only head starts come down."* Send the decision procedure and the refuter, not a conclusion.

---

## 5. Canonical usage check

Two framework sources were consulted after the first four sections and they govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)"* then stops at the limit of the instruments. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule, step 7 (SEARCHED first, then INWARD, then OUTWARD), and the Direction discipline of binding the sought-for shape as an ordinary term.

### Retractions and confirmations

| earlier reading | status after canonical check |
|---|---|
| "Functional group equals the identity bond" | **Refused.** A group is an ingredient list; the bond is settled by substitution (F1, F3). |
| "Figure habitat equals ecological niche" | **Retracted.** The source essay explicitly declines this mapping (F4 retraction). |
| "Saturation curve proves redundancy" | **Downgraded to a filter.** It is an aggregate instrument; per-slot residuals are the witness (F2). |
| "Apparent redundancy is always misleading" | **Refused.** The shape is conditional. If the §1 settlement refuter fires, the pair is genuinely interchangeable. |
| "Fig 1 and the saturation result strain against each other" | **Not strained after re-census.** Different quantities: aggregate curve versus per-slot residual. |
| "Two species in one group are literally identical" | **Refused.** *"Indiscernibility is not identity."* At most the function is indiscernible under substitution, and the lineage must be kept. |
| Shape-not-a-name applied to species pairs | **Narrowed.** The framework cannot name which pair; an ecologist can name a pair only by settling the bond against the ground, which is a measurement and not a derivation. |

### Note on the mode of the world sources

Every ecological source used here is secondary corroboration for the shape, not a source for the figure verdict. The figures decide. Where a world source conflicts with a figure, the census is reopened; no conflict was triggered. The eight framework essays share an author and an evidence pool with the figures, so their agreement is internal consistency, not independent corroboration. The Wikipedia ecology articles and the Fetzer experiment are a different pool from the framework; they carry more weight as corroboration, but still cannot overrule a figure.

### Updated verdict

The shape survives: interchangeability is a bond settled against a ground at a per-slot level, conditional on habitat and cascade, and apparent redundancy misleads when the reading is aggregated, scoped to direct contact, borrowed from one environment, or produced by a shared evidence pool. What does not survive is any claim that this derivation has settled a particular species pair. Strains after re-census: one named and narrowing, the identity-bond literalism in the retraction table. Nothing hidden.
