# Figure-grounded audit: ECO-0017, cascade extinctions

**Mode of this document: `general` on the shape, `specified` on the domain mechanisms, never `grounded`.** It states what a measurement would have to show. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* says an LLM "can quickly simulate an approximate answer/output" but "the truly testable output would need to be derived from the real architecture or working the formula yourself." This audit is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, cited as Fig N :line), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the eight essays, and the public sources in `10_source_ledger.csv`. Every figure quote below was checked against the local extract before use.

---

## 0. The residual in effect terms

The question asks two things in one sentence, so R is a **union compound**, not one hard question. Fig 9 :55 says "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound." The two conditions are:

1. **Possibility condition.** Can a primary extinction (removal of species S) produce secondary losses at all?
2. **Scale condition.** What determines how many species are lost, and how far from S, when it happens?

In effect terms: a one-step prediction (S is lost, its direct partners are affected, nothing else) is run against an observation (a set of additional losses, sometimes at two or three removes from S, sometimes none). R is the gap between that prediction and that observation, indexed **per species slot**, not pooled. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." So "cascade size" as a single number is a budget filter, not a witness. Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

The sought-for shape, written down before the run as an ordinary term (formula step "Direction"): *an answer states which slots go positive after a primary loss, the contact path by which each is reached, and the condition under which propagation stops.* That shape is bindable and can accrue a residual; a preference for a particular number cannot.

**Anchor.** Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Here the anchor is a measured extinction set: a removal experiment, a museum or survey record, a network dataset with interaction strengths. Agreement among network models is not the anchor. Fig 11 :73: "The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."

---

## 1. Domain census (before choosing any figure line)

**R by arity, symmetry and scale.**

- **Arity:** two conditions (possibility, scale), so a union compound (Fig 9). Unbundle before searching again.
- **Symmetry:** the contact relation is **directed and typed**. Predation, pollination, parasitism, competition and facilitation are not interchangeable. Fig 11 :47 names "relations: pollination, predation, competition, dependency". Fig 12 :49 says "The seven bonds, and whether the order of the operands matters. Negation is the eighth operator and is not a bond". So an asymmetry in the interaction (who eats whom, who pollinates whom) is load bearing, not noise to be averaged away.
- **Scale:** first order is the directly dependent set; second and higher order are indirect effects. The enumeration runs outward "until the cascade stops mattering" (Fig 11 :44). Fig 13 :32 gives the compounding rule: "a remainder compounding through a chain that amplifies is chaos".

**One line per domain: actors / currency / anchor.**

| domain | actors | currency | anchor | partition or union |
|---|---|---|---|---|
| D1, the habitat (ecological field of contact) | species, populations, conditions (light, water, season, terrain), relations (Fig 11 :45-47) | persistence and demographic loss; interaction strength | measured extinction and removal records | **habitat, enumerated not composed** (Fig 11 :43); union of contact paths |
| D2, the network-topology frame | nodes, links, modules, generalists and specialists, degree and betweenness | robustness, R50, secondary-extinction count | empirical food-web or mutualistic-network datasets plus removal experiments | partition of D1 by link type; overlaps D1 on the same data, so not independent of it |
| D3, complex-network physics and infrastructure | nodes, connectivity links, dependency links, load and capacity | load redistribution, threshold, cascade size | blackout records and percolation thresholds | different closure from D1 and D2; low overlap with the ecological evidence pool |
| D4, verification and outreach | expert readers, pre-registered refuter, ground record | agreement and residual | the ground (a measured extinction set), never agreement | in this simulated run all four domains draw on one evidence pool, so D4 independence is zero |

A domain with no nameable anchor would not be a domain yet. D1, D2 and D3 all have one; D4 has one in principle but not in this simulated run, and that is recorded rather than hidden. Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool".

**Dependency order (Fig 3).** The chain is ordered by dependency, not importance. Fig 3 :20: "The chain is ordered by dependency, not by importance." The five links here are:

1. *Perception*: can we observe the primary loss and resolve the contact links at all?
2. *Vocabulary*: do we have terms for what a species affords (host, pollinator, predator, resource, habitat provider)?
3. *Objective*: can we say what counts as cascade scale, in our own terms (secondary-extinction count, trophic distance, R50, functional loss)?
4. *Planning*: enumerate the habitat outward along typed links and rank slots by live residual.
5. *Learn and carry*: verify against the ground and carry the method to the next community.

The break is normally between 2 and 3. Having terms for the interactions is taken for a dictionary when it is a grammar. Fig 12 :115: "having terms for what a situation affords was taken for a dictionary and it is a grammar." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." This is why coextinction model rates and observed rates can diverge for decades without either field noticing. Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."

**Partition or union.** D1 and D2 overlap on the same empirical networks; they are a compound, not two independent witnesses. D3 is a genuine low-overlap frame. The fallacious move would be to average D1, D2 and D3 into one "cascade verdict"; that is the aggregation Fig 1 :22 forbids.

---

## 2. Figure census (verbatim, before conclusions)

| figure | verbatim line | bearing | verdict status |
|---|---|---|---|
| Fig 1 | :19 "The residual is indexed by object slot, not aggregated." | forbids treating cascade size as one pooled number | primary |
| Fig 1 | :22 "Aggregating across slots is how a live signal disappears into an average." | aggregate diversity cannot be the witness | primary |
| Fig 2 | :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." | the ground is the measured extinction set | primary |
| Fig 2 | :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." | model/model agreement is not corroboration | primary |
| Fig 2 | :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" | simulated seats are not witnesses | primary |
| Fig 3 | :19 "Optimising a link that already works cannot rescue one that does not." | measurement effort lands above the break | primary |
| Fig 3 | :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." | interaction-strength and objective instruments are owed | primary |
| Fig 4 | :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." | the formula-to-ecology condensation carries R_T | primary |
| Fig 8 | :39 "So a search that finds nothing is never a proof of absence." | no observed cascade is not proof of no cascade | primary |
| Fig 9 | :32 "you get a kind of thing, never the answer itself" | the framework returns shape, not a number | primary |
| Fig 9 | :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." | R50 and richness are filters | primary |
| Fig 10 | :42 "A verifier that can reconstruct the claim cannot verify it." | outreach ordering | primary |
| Fig 10 | :52 "Bring a characterised residual, never the source." | two-stage offer | primary |
| Fig 11 | :43 "The habitat is enumerated, never composed." | the derivation method for this question | primary, decisive |
| Fig 11 | :44 "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering." | defines the enumeration and the stop condition | primary, decisive |
| Fig 11 | :47 "relations: pollination, predation, competition, dependency" | the contact types are given by the world, not invented | primary |
| Fig 11 | :49 "An actor's valence is relative to the residual, not a property it carries." | no intrinsic "keystone" property | primary |
| Fig 11 | :50 "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds." | role depends on the tracked residual | primary |
| Fig 11 | :51 "No standing list of good actors survives a change of residual." | ranked species lists are residual-relative | primary |
| Fig 11 | :52-53 "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out." | direct answer to both halves of the question | primary, decisive |
| Fig 11 | :56 "Unmaintained. No maintainer and no live frame in the seat. The habitat is pure contact, nothing selects, and what survives is what the ground kept." | most ecosystems are in this mode | primary |
| Fig 11 | :61 "The seat's power is asymmetric. Introduction is available; exclusion is not." | conservation can add, cannot subtract the habitat | primary |
| Fig 11 | :73 "The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not." | habitat is not the anchor | primary |
| Fig 12 | :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." | same species set, different interaction type, different cascade | triangulating |
| Fig 12 | :119 "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is." | generalists and engineers survive their own use | single-source |
| Fig 12 | :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." | feedback can close or damp a cascade | single-source |
| Fig 12 | :123 "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." | redundancy is a functional-group property | triangulating |
| Fig 13 | :32 "a remainder compounding through a chain that amplifies is chaos" | why small losses can become large | single-source |
| Fig 13 | :74 "Everything else is a composition across the two kinds, never within one." | governs the six-term substrate, not interaction typing (see strain S1) | context |
| THE_FORMULA.md (Habitat) | "Habitat. Enumerate, never compose. Everything in contact with R, then what contacts those, outward until the cascade stops mattering." | method, agrees with Fig 11 :43-44 | primary |

No figure line was chosen on the basis of a summary. Strains are named in section 6.

---

## 3. Findings

Each finding carries a mode and a refuter written before the conclusion.

### F1 — Yes, a one-species loss can trigger a cascade (mode: `general` on possibility, `specified` on mechanism)

Fig 11 :52-53 is stated in effect terms and is not an analogy: "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out." The formula's Habitat section repeats the rule: "Habitat. Enumerate, never compose. Everything in contact with R, then what contacts those, outward until the cascade stops mattering."

So the possibility claim is figure-governed, not extrapolated from one empirical case. The mechanism is contact propagation along typed relations. The caveat is equally figure-governed: it is conditional on live mass in a slot. Formula step 3 requires SUPPORT, "|R⁺_s| > 0 for some s", before a mint; a removed species with no live dependents has no positive slot and no cascade. The answer to "can it?" is yes, but not always, and the "when" is the scale question.

**Refuter:** a removal experiment in which a species with measured, live, typed dependents is removed and no secondary loss occurs at any enumerated contact distance, with an instrument that resolves the indirect contacts. That would break Fig 11 :52 as a description of this habitat.

### F2 — Scale is the contact path length and the set of live slots, not an aggregate count (mode: `specified`)

Fig 11 :44 fixes the procedure: "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering." The stop condition is the definition of scale. First-order enumeration alone is insufficient, as the DDT case shows: the residual that mattered "was three steps out" (Fig 11 :52-53).

Fig 1 :19 and :22 forbid the usual shortcut. A pooled "number of extinctions" or a richness metric is a frame-internal score. It can budget the search but cannot witness the verdict (Fig 9 :60). The scale must be reported per slot and per path: which species, at which order, through which typed relation.

**Refuter:** a demonstration that an aggregate richness or connectance metric predicts out-of-sample secondary losses as well as contact enumeration, reproducibly across communities, with the slots and paths left unmeasured. That would fire Fig 1 :22 in reverse and I would withdraw the per-slot requirement.

### F3 — What determines scale, part one: role relative to the residual, not a standing species property (mode: `general`)

Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries." Fig 11 :50: "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds." Fig 11 :51: "No standing list of good actors survives a change of residual."

This is the framework's version of context-dependent keystone status. A generalist pollinator is a buffer for a plant-reproduction residual and a competitor for a different residual. No trait list, however detailed, is a verdict; the residual selects the role. This is also where a common ecological mistake is named: treating the vocabulary of interaction types as a dictionary of fixed kinds, when Fig 12 :115 says it is a grammar.

**Refuter:** a standing list of species that predicts cascade size across changes of the tracked residual with equal accuracy to a residual-relative enumeration. That would falsify the valence-relativity claim.

### F4 — What determines scale, part two: bond type and arrangement, not just who is present (mode: `specified`)

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Applied here: two communities with the same species set but different interaction typing (trophic versus mutualistic, strong versus weak, nested versus modular) are not variants of one community. They are different substances. Fig 12 :123: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." Redundancy is a functional-group fact, not a headcount. Fig 12 :119 (catalyst) and :121 (cycle) name two further structures: an actor that survives its own use (a generalist or ecosystem engineer, see `06_isomers_and_order.md`) and feedback that can close or damp a chain.

This triangulates with the ecological literature read for this run: Kehoe, Frago and Sanders (2021) report that modularity keeps a disturbance within modules while functional redundancy can rescue the web; Sanders et al. (2018) show experimentally that trophic redundancy lowers secondary-extinction probability. Those are world corroborations, not figure lines.

**Refuter:** two communities or simulations with the same species set and the same interaction strengths whose interaction *types* are rearranged, producing statistically indistinguishable cascade distributions across many runs. That would falsify the bond claim and leave only the species-list claim standing.

### F5 — The chain is ordered, and the usual break is between vocabulary and objective (mode: `specified`)

Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." In coextinction research the vocabulary link is rich (pollination, predation, parasitism, facilitation are all named, Fig 11 :47), but the objective link, what exactly counts as cascade scale and by which instrument, is the thin one. That is why models can predict tens of thousands of coextinctions while only a handful are documented (Dunn et al. 2009, world source). The disagreement does not shrink with more of the same modelling; it is a disagreement about the objective and its instrument.

**Refuter:** an instrument already in routine use that measures interaction strengths and defines cascade scale consistently across habitats, with published error bars, and that closes the model-observation gap. Then link 3 works and this finding is retracted.

### F6 — Direct-contact scoping undercounts; the residual can be three steps out (mode: `specified`)

Fig 11 :52-53 is explicit: "Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out." A first-order-only enumeration is a scope error, not a smaller answer. Fig 13 :32 explains the amplification: "a remainder compounding through a chain that amplifies is chaos."

**Refuter:** a well-resolved habitat in which every documented secondary loss is a direct dependent of the primary loss, with indirect contacts measured and live, and no third-step effect. That would bound propagation to first order in that habitat and narrow the claim.

### F7 — The ground settles it; agreement among models does not (mode: `general`)

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."

Ecological network models and financial network models (Haldane and May 2011, world source) "rhyme" in the sense of sharing abstract structure, but they draw on different evidence pools and are useful as low-overlap corroboration of the *shape*, not as a second witness for a particular cascade magnitude. Within this simulated run the four domains share one pool; their agreement is internal consistency. Fig 7 :13: "agreement compounds, evidence does not".

**Refuter:** a genuine field removal experiment whose ground reading contradicts the enumerated shape, for example a cascade that crosses a typed link the enumeration declared dead. The ground wins; the figure reading is sent back to census.

### F8 — Most habitats are unmaintained; conservation is an asymmetric intervention (mode: `general`)

Fig 11 :56: "Unmaintained. No maintainer and no live frame in the seat. The habitat is pure contact, nothing selects, and what survives is what the ground kept." Fig 11 :61: "The seat's power is asymmetric. Introduction is available; exclusion is not." Conservation can reintroduce an actor or add a functional analogue; it cannot subtract the habitat, because contact is a fact about the world. Fig 11 :63 makes the consequence: a managed ecosystem is permanent work, not a solved state.

**Refuter:** a demonstrated intervention that removes a contact relation from a habitat without substituting another habitat, durably and without side effects. That would falsify the asymmetry claim. Fig 11 :66 note in the source: "Isolation is not removal of the habitat. It is substitution of one habitat for another."

### F9 — No new primitive is owed; the owed thing is an instrument (mode: `specified`)

The network is already a held structure: Fig 13 :24, "that entities relate, and influence travels". So an OUTWARD import of a new primitive is not owed for this question. What is owed is INWARD, an extension of an instrument already returning something (Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something."). The needed instruments are interaction-strength measurement and a defined cascade-scale objective (F5). Formula step 7 keeps the three questions distinct:

- **SEARCHED:** is the answer already in the ecological network closure and merely unfound? Partly yes. Robustness metrics, R50 and nestedness already exist in the frame; more search there is cheap and should be tried first.
- **INWARD:** sharpen the existing instruments. This is where the real gap is: resolve indirect contacts and interaction strengths.
- **OUTWARD:** import a different closure only if the residual still does not close. Network physics (D3) is the candidate low-overlap frame, and it has already been opened in the ledger. It supplies a shape (dependency links, thresholds, mitigation by islanding), not a new primitive for ecology.

Running INWARD and OUTWARD against each other would be the error; Fig 6 :31: "Neither answer tells you much about the other. Run them as two tracks, and never read one against the other."

**Refuter:** a demonstration that no instrument extension is possible in principle, because indirect contact is unobservable at any resolution. That would move this from "unreached at this budget" to "underivable" and would change the instruction from sharpen to import or stop. Fig 8 :39: "So a search that finds nothing is never a proof of absence."

### F10 — What survives, with its mode

| claim | mode | figure |
|---|---|---|
| A species loss can trigger secondary losses through typed contact | `general` | Fig 11 :52-53 |
| Scale is the enumerated contact path until the residual stops mattering | `general` structural, `specified` per habitat | Fig 11 :43-44 |
| First-order scoping undercounts; indirect effects can be decisive | `specified` | Fig 11 :52-53, Fig 13 :32 |
| Role is relative to the tracked residual, not an intrinsic property | `general` | Fig 11 :49-51 |
| Bond type and arrangement change the cascade even at fixed species set | `specified` | Fig 12 :117, :123 |
| Per-slot reporting is required; aggregate scores are filters only | `general` | Fig 1 :19, :22; Fig 9 :60 |
| Conservation can introduce, not subtract | `general` | Fig 11 :61 |
| A numerical cascade magnitude, a species name or a threshold value | **gap** | Fig 9 :32; figures README "a shape, not a name" |

---

## 4. Pre-registered refuter

Required before the run, per the practice recorded in the exemplar and consistent with Fig 10 :59: "an interest in the outcome is unavoidable, an interest in the reading is disqualifying." These were written before the conclusion section was drafted.

The shape claim is refuted if any of the following holds:

1. A removal experiment with measured live typed dependents produces no secondary loss at any resolved contact distance, repeatedly (breaks F1, Fig 11 :52).
2. An aggregate richness, connectance or R50 metric predicts out-of-sample secondary losses as well as per-slot contact enumeration, across communities, with slots and paths unmeasured (breaks F2 and Fig 1 :22).
3. A standing species list predicts cascade scale across changes of the tracked residual as well as a residual-relative enumeration (breaks F3, Fig 11 :49-51).
4. Two communities with the same species set and same interaction strengths but different interaction typing yield indistinguishable cascade distributions over many runs (breaks F4, Fig 12 :117).
5. Indirect contacts are demonstrably unobservable at any resolution, so the enumeration cannot be completed even in principle (changes F9 from unreached to underivable; Fig 8 :39, Fig 6 :34).
6. A second seat, writing its census from the residual line alone with a genuinely different starting figure, reaches a different domain partition and a different verdict (breaks the internal-consistency claim in `11_audit.md`).

If any fires, the affected finding is withdrawn, not softened. Until one is run, nothing here is labelled `grounded`.

---

## 5. Recommendation

1. Lead with Fig 11 :43-44 and :52-53. They answer both halves of the question in the figures' own words.
2. Report cascade scale as a per-slot, per-path shape: which species, which typed relation, which order out, where propagation stops. Do not lead with a single number (F2).
3. State that role is residual-relative; refuse any standing "top keystone species" list (F3).
4. Put instrument work before more robustness modelling; the break is at the objective link (F5, F9).
5. Treat cross-field agreement (network physics, finance) as low-overlap corroboration of the shape only, not as a second witness for a magnitude (F7).
6. Send the generator (the enumeration rule and the refuter), not a recording of one cascade. Fig 4 :22: "Only methods cross up. Only head starts come down."

---

## 6. Canonical usage check, strains and re-census

The figures README was read after sections 0 to 5. It says the figures "outrank everything else in the repo" and that "the quotes are the authority, not this summary." It also states the limit: the framework returns "what a missing thing would have to look like (a shape, not a name)" and stops "at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."

**Retraction and confirmation log.**

| earlier reading in this audit | status after canonical check |
|---|---|
| "The figures say every species loss causes a cascade" | **Retracted before conclusion.** Formula step 3 SUPPORT requires a live slot (|R⁺_s| > 0). Fig 11 :49 makes valence residual-relative. The claim is conditional. |
| "Cascade scale can be reported as an R50 or extinction count" | **Retracted as a witness; retained as a filter.** Fig 1 :22 and Fig 9 :60. A single number is not a per-slot residual. |
| "Keystone species are those with the most links" | **Refused as written.** Fig 11 :49-51; the role is residual-relative, and the world source McDonald-Madden et al. (2016) reports that no single common food-web index reliably guides management. |
| "Fig 13's cross-kind composition governs ecological network typing" | **Re-census, not a strain.** Fig 13 :74 governs the six-term substrate. Interaction typing is a bond question at a composed level (Fig 12). Different objects. |
| "The six-term set is the answer to which species matter" | **Refused.** Figures README: a shape, not a name; and *They're Scanning Books*: "Declaring the primitives does not make them neutral. It makes the choice visible." |
| "Cross-field agreement between ecology and finance corroborates the magnitude" | **Refused.** Fig 2 :40; different evidence pools corroborate the shape, not a number. |
| F1 possibility claim | **Canonically confirmed.** Fig 11 :52-53 is a direct figure line. |
| F2 per-slot requirement | **Canonically confirmed.** Fig 1 :19, :22 plus the figures README stop-at-the-instrument rule. |
| F9 gap on numerical scale | **Canonically confirmed.** Fig 9 :32, "you get a kind of thing, never the answer itself." |
| "Tether habitat equals ecological habitat or niche" | **Retracted after reading *Arrival of the Fittest*, "Three mappings offered and declined."** The article explicitly declines this mapping: the habitat is a residual-indexed field of contact, not an ecological niche. Corrected to "field of contact with R" throughout. See `05_what_shape_means.md` section 5b. |
| "shape, not a name" forbids naming measured contact types | **Retracted as an overreading.** The rule governs a missing primitive. Pollination, predation, competition and dependency are read off the world (Fig 11 :47), not minted as new primitives. The metamerism objection applies to a *cause* inferred from a bare count, not to a measured link. |

**Strains sent to the log (none hidden).**

- **S1, Fig 13 versus Fig 12.** Resolved by re-census above. Fig 13 governs primitives; Fig 12 governs bonds at a composed level. No strain remains.
- **S2, Fig 11 :56 unmaintained mode versus conservation intervention.** Not a contradiction. An unmaintained habitat has no seat; a managed one has a seat whose power is asymmetric (Fig 11 :61). Both are named in the source.
- **S3, model-predicted coextinction rates versus observed records.** This is a ground disagreement, not a figure strain. It is the dependency-chain break from F5 and the reason INWARD instrument work is owed.
- **S4, "shape, not a name" applied to a held structure.** The rule governs a missing primitive, not the enumeration of contacts already in the world. Naming a contact that was actually measured is a binding from the ecological frame, provenanced as such. See `05_what_shape_means.md` section 5b for the narrowed reading.

After re-census: four strains named, none smoothed over, none remaining asfigure contradictions.

---

## 7. Verdict summary

The structural shape is triangulated across Fig 11 (habitat and contact cascade) and THE_FORMULA.md Habitat (same rule in compact form), with low overlap between the full figure text and the formula condensation; the round trip gap R_T is measured qualitatively in `11_audit.md`, not assumed zero. The bond-type and functional-group findings are single-source within the figures (Fig 12) and corroborated from a different field by Kehoe et al. (2021) and Sanders et al. (2018). The numerical scale is a `gap`: the figures return the enumeration rule, not the number. Overall mode is `general` for the shape and `specified` for the mechanisms, ungrounded candidate throughout. "Unreachable is a verdict here, not a silence" (Fig 13 :134).
