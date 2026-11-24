# Figure-grounded audit: how changing temperature and rainfall alter species interactions

**Mode of this document: `general` on the shape, `specified` on the three-route decomposition, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status: simulated derivation, not a ground reading.** LLM output is *simulacra*; *"the truly testable output would need to be derived from the real architecture or working the formula yourself"* (Recursive Self-Improvement Trap). This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No field measurement was taken.

**Sources.** The verbatim figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md` is the only source of `Fig N :line` quotes. The canonical usage rule is `FRAMEWORK/reference/FIGURES_README_canonical.md`. The loop and mode rule are in `FRAMEWORK/figures/THE_FORMULA.md`. World literature is listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

> Question: How will changing temperature and rainfall alter species interactions, not just the ranges of individual species?

State it as a prediction gap, per Formula step 1 (`R = |Γ(b,a) − o′|` per slot):

- The prediction currently available: each species has a range, a suitable-climate envelope, and an observed set of partners. Species are tracked one at a time.
- The observation that fails to resolve: a species can remain in the same place while its pollinator, its prey, its competitor or its predator changes; and the *same two species* can relate differently under a different temperature or rainfall regime. The relation, not the range, is what moved.
- The residual is indexed by **interaction** (by bond), not by species and not by aggregate network statistic. Fig 1 :28: *"The gap is measured per object, not per step."*

What an answer would look like, bound as an ordinary term before the run (Formula "Direction"): a map from a change in two conditions to a change in the typed relations among species, with each relation tracked separately and each direction of change left open until the ground settles it. The sought-for shape is *a decomposition into routes*, not a list of named interactions. I write that shape down here so it can accrue a residual like anything else rather than remaining an invisible preference (Fig 5 :65).

### R by arity, symmetry and scale

- **Arity.** A relation joins two species at first order (binary), but contact cascades: Fig 11 :52 *"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."* The effective arity of the residual is therefore at least three, not two.
- **Symmetry.** Interactions are typed and often directed. Predation is ordered; mutualism is symmetric. Valence is not carried by the species: Fig 11 :49 *"An actor's valence is relative to the residual, not a property it carries."* Under a different residual the same actor changes sign.
- **Scale.** First order is species occurrence and phenology. Second order is the pairwise interaction. Third and higher order is the cascade through the community. The question asks about the second and third order, while most instruments sit at the first.

---

## 1. Figure census

One line per domain. A domain needs actors, a currency and a nameable anchor; without a nameable anchor it is not yet a domain but a candidate.

| domain | actors | currency | anchor | partition or union | dependency |
|---|---|---|---|---|---|
| D1 conditions | temperature, water or rainfall, season (Fig 11 :46) | environmental forcing | instrument record of temperature and precipitation | union with D2 and D3 (two conditions, not one) | upstream |
| D2 occurrence | individual species, populations, phenologies | range position, abundance, timing | census, observation, museum and monitoring data | feeds D3 | middle |
| D3 interactions | species pairs in typed relations (Fig 11 :47) | interaction presence, strength, valence | field observation of the interaction outcome | **compound**, not a sum of D2 slots | the unmeasured link |
| D4 verification | ecologists, reviewers, data managers | agreement versus residual | the ground (field data), never agreement | outside frame | last |

**Partition or union.** This is a union, not a partition. Two conditions act at once (Fig 9 :55), and species-in-relation is a compound with its own loop (Fig 9 :57). A lever that clears the temperature-only region leaves the temperature-and-rainfall intersection standing.

**Order by dependency (Fig 3).** Conditions → occurrence and phenology → pairwise interaction → community function. Fig 3 :20 *"The chain is ordered by dependency, not by importance."* Effort spent measuring ranges cannot rescue a broken interaction link. Fig 3 :27 *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

**Figure bearing table.**

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual per slot, never aggregated | track per interaction, not per network average |
| 2 The Ground | anchor must not update; agreement is a pool | field observation decides, not model agreement |
| 3 Dependency Chain | the unmeasured middle link | interaction measurement is the break, not range measurement |
| 4 Membrane | actors, currency, anchor change across sizes | range result does not carry up to interaction result without a round trip |
| 5 Mint Pipeline | shape as an ordinary term; support, reach, novelty | the shape claim is checkable; the name is withheld |
| 6 Closure / Reachability | import moves the wall; instrument from a worse instrument | interaction data must be imported from field ecology, not derived from range models |
| 7 Room Chain | agreement is variation, not a verdict | a list of agreeable ecologists cannot corroborate |
| 8 Union Surplus | describe the residual before choosing the frame | residual first, subfield second |
| 9 Leave / Arrive | union versus partition; split before search | temperature and rainfall form a compound; split before searching |
| 10 Ground Maintainer | bring a characterised residual, never the source | stage 1 carries the shape and refuter, not the framework |
| 11 The Habitat | conditions and relations are listed; valence is relative; contact cascades; enumerate never compose | **decisive**; this figure governs the question directly |
| 12 The Bond | bond not recoverable from operands; isomer | a relation is not fixed by species identities (analogue, not literal mapping) |
| 13 Minimum Viable Set | cross-kind composition; unreachable is a verdict | direction of a specific interaction is not derivable from the six |
| Operators table | bonds are typed relations | supports Fig 12 analogue only |
| Symbols table | R is the aim and is always a slice | unmeasured interactions are simply not readable |

Strained readings are named in section 6, not smoothed over.

---

## 2. Findings

### F1 — The question is about relations, not properties of species (decisive, triangulated)

Fig 11 :47: **"relations: pollination, predation, competition, dependency"**

Fig 11 :49: **"An actor's valence is relative to the residual, not a property it carries."**

Fig 11 :50: **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."**

Cross-check from a different figure family, Fig 12 :46: **"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."**

Temperature and rainfall act on conditions. But what the question asks about is the bond between species. The bond is not a property of either species, and its type is not recoverable from the species alone. So a prediction of where each species will be does not entail a prediction of who will interact with whom, or how. A species can stay put while its relation changes sign.

**Mode:** `general` (structural). **Triangulation:** Fig 11 (habitat) and Fig 12 (composition) are low-overlap figure families; both say the relation is not carried by the operands. **Refuter:** demonstrate that an ecological interaction type is a function of the two species' identities and traits alone under every temperature and rainfall regime, so that mutualism and parasitism are fixed kinds rather than relations.

### F2 — Conditions are habitat conditions, and the habitat is enumerated, never composed

Fig 11 :46: **"conditions: light, water, temperature, season, terrain"**

Fig 11 :43: **"The habitat is enumerated, never composed."**

Fig 11 :48: **"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."**

Temperature and rainfall are two entries in the condition set, not the whole set. The figure forbids composing an interaction from condition values. Interactions must be read off the world; whatever cannot yet be measured is the residual. This is why range-only models, which compose a suitability score from climate variables, cannot answer the interaction question by construction.

**Mode:** `specified`. **Triangulation:** Fig 11 alone for enumeration; corroborated (not proved) by the world sources on SDM independence in `09_watson_answer.md`. **Refuter:** derive a specific species interaction from temperature and rainfall values with no interaction observation anywhere in the chain.

### F3 — Contact cascades: the residual that matters is three steps out (single-source)

Fig 11 :52: **"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."**

A change in the condition does not stop at the species that experiences it. It propagates through relations. Scoping the question to direct, pairwise contact is exactly the first-order enumeration the figure warns against. This is the most direct figure-grounded reason the question says *"not just the ranges"*: range is first-order, interaction is second-order, and the consequential effect can be third-order.

**Mode:** `general`. **Status:** `single-source` (Fig 11 only; the DDT example is one figure's case). **Refuter:** exhibit a condition change that demonstrably alters no interaction beyond direct pairwise contact in any system, so the cascade route has zero mass.

### F4 — Track per interaction, never as an aggregate network score

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**

Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**

Fig 1 :28: **"The gap is measured per object, not per step."**

Applied here, the "object" is the interaction. A single network-level number such as connectance or nestedness can stay nearly constant while individual links are lost and replaced. Reporting only the aggregate is how the live signal disappears into the average. This is not a stylistic preference; it follows from Fig 1's indexing rule and from Fig 11's enumerate-not-compose rule.

**Mode:** `specified`. **Triangulation:** Fig 1 (agent) and Fig 11 (habitat), low overlap. **Refuter:** show that an aggregate network metric fully determines which single interaction fails under a given warming and drying, with no per-link information.

### F5 — The interaction link is the unmeasured middle link

Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."**

Fig 3 :20: **"The chain is ordered by dependency, not by importance."**

Temperature and rainfall are well instrumented. Ranges and phenologies are well instrumented. Interactions are much less so. By Fig 3, effort spent above the break cannot rescue the link below it. The honest report is which link the chain currently stops at, and whether that was measured or assumed.

**Mode:** `specified`. **Status:** `single-source` (Fig 3), corroborated by world literature on interaction data gaps. **Refuter:** name an instrument that measures interaction change at the same resolution and coverage as range change, and show the middle link is measured rather than assumed.

### F6 — This is a union compound; split before searching

Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**

Fig 9 :57: **"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."**

Temperature and rainfall are two conditions that interact (warming plus drought is not warming plus drought added). Species-in-relation is also a compound, not two species side by side. Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** The compound needs its own loop and its own ground; it is not solved by solving the two conditions separately and adding.

**Mode:** `general`. **Status:** `single-source` (Fig 9) plus the question's own two-condition structure. **Refuter:** show that temperature and rainfall effects on every interaction are additive and separable in all cases, so the union reduces to a list.

### F7 — The ground settles it; agreement among models does not

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**

Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**

Fig 2 :40: **"agreement about the world is worthless when the agreeing frames share an evidence pool"**

The anchor here is field observation of the interaction: who visits whom, who eats whom, who suppresses whom, under a measured temperature and rainfall. Two models that share the same occurrence data are one frame wearing two names. Their agreement on which interaction will flip is not a witness.

**Mode:** `general`. **Triangulation:** Fig 2 and Fig 10 (verifier non-access), low overlap. **Refuter:** show a case where agreement between two models settled the direction of an interaction change without any field measurement of that interaction.

### F8 — The framework returns a shape; the directional question is a genuine gap

Fig 9 :32: **"you get a kind of thing, never the answer itself"**

Fig 13 :134: **"Unreachable is a verdict here, not a silence,"**

Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**

The six-term set does not contain the direction of a particular interaction change under a particular warming and drying. To get "bee X will stop visiting flower Y" you need an enumerated habitat and a field measurement, not a derivation. This is a `gap` after a genuine census, stated plainly. It is not an excuse for silence: the shape (three separable routes, per-interaction tracking, open direction) is a checkable result, and the instruments that would close the gap are nameable.

**Mode:** `general` (limit) / `specified` (the shape). **Status:** `gap` on direction, triangulated across Fig 9, Fig 13 and the canonical README's *"a shape, not a name"*. **Refuter:** derive the direction (strengthen or weaken) of a named interaction from the six terms and the two condition values alone, with no field input.

### F9 — Capability and effect are properties of agent and habitat, not agent alone

Fig 11 :39: **"capability is a property of agent-and-habitat, never of the agent alone"**

Fig 11 :40: **"An improvement that does not change contact changes nothing, however much it improves."**

This is the general form of the question's own distinction. A species' range is the agent; its interactions are the contact. A shift in range that leaves every contact unchanged does not change the system in the way the question asks about. Conversely, an unchanged range with changed partners is a real change. Range-only prediction is the agent-only improvement the figure says changes nothing.

**Mode:** `general`. **Status:** `single-source` (Fig 11). **Refuter:** show a range shift that leaves all partners and interaction strengths unchanged and still constitutes a complete answer to the question.

### F10 — Isolation substitutes a habitat; moving a species is not removing its relations

Fig 11 :66: **"Isolation is not removal of the habitat. It is substitution of one habitat for another."**

Range shifts, transplant experiments and assisted migration all move a species into a substituted habitat. The species inherits that habitat's actors, which it did not choose. The interactions that matter after the move are the new habitat's, not the old habitat's carried along. This is a checkable prediction of the shape: the interaction set after a range shift is not the old interaction set translated.

**Mode:** `specified`. **Status:** `single-source` (Fig 11). **Refuter:** show a relocated population retaining exactly its original interaction set in a habitat with different actors.

---

## 3. Pre-registered refuter

Written before the conclusion, per the formula's "Direction" discipline and Fig 5 :65: *"make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else."*

The shape claim (interaction change decomposes into range-mediated contact change, condition-mediated valence change, and cascading indirect effects, tracked per interaction with direction left open) is refuted if any of the following holds:

1. An ecological interaction type is recoverable from the two species' identities and traits alone under every temperature and rainfall regime, so mutualism and parasitism are fixed kinds rather than relations (breaks F1).
2. A condition change demonstrably alters no interaction beyond direct pairwise contact in any system (breaks F3).
3. An aggregate network metric fully determines which single interaction fails under a given warming and drying, with no per-link information (breaks F4).
4. The six terms plus the two condition values alone determine the direction of a named interaction change with no field input (breaks F8 and closes the gap; this would strengthen the framework, not weaken it, but it would refute the claim that direction is owed to the ground).
5. Temperature and rainfall effects on interactions are additive and separable in all cases, so the compound reduces to a list (breaks F6).

If any fires, the decomposition is withdrawn or revised. Until one is run, no part of this may be labelled `grounded`. A falsifier written before the run is a design instrument, not an honesty device.

---

## 4. Recommendation

1. Lead with the residual and the three routes, not with a list of predicted interactions. Fig 9 :27: **"describe it before you go looking, or any frame you pick will seem to fit"**.
2. State the mode on every claim. *"an unmeasured quantity is a specification of what to measure and is worth having, it is not a verdict"* (`THE_FORMULA.md` / Seat Map output layer).
3. Keep the three route verdicts separate and never average them into one "climate effect on interactions" score. Fig 1 :22 and Fig 9 :60.
4. Ask the checker what they would count as a failure before offering any theory. Fig 10 :52: **"Bring a characterised residual, never the source."**
5. Use the public, opt-in venues in `03_public_contact_points.csv`. Do not send a recording of a conclusion; send the generator, the shape and the refuter. Fig 4 :25: **"A recording carried upward looks like knowledge and is a description of one occasion."**
6. Record the gap on direction as a verdict. *"Unreachable is a verdict, not a silence."*

---

## 5. Canonical usage check

Two local sources were read after the first four sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the limit that the framework says *"what a missing thing would have to look like (**a shape, not a name**)"* then stops at the limit of the instruments and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule, the refusal-before-mint ordering of step 2, and step 7's three distinct questions (SEARCHED, INWARD, OUTWARD).

Applied here: step 7 was run in order. SEARCHED: is the interaction-direction answer already in the ecological closure and merely unfound? No, it needs habitat enumeration and field measurement. INWARD: sharpen our own range instruments? That improves the wrong link (Fig 3). OUTWARD: import from field ecology, with a source gate and a shadow test. That is what the world sources in `09_watson_answer.md` do, and their provenance is recorded. The three were kept distinct and not read against each other (Fig 6 :31).

---

## 6. Retractions, confirmations and strains

| earlier reading | status after canonical check |
|---|---|
| Tried to map the seven bonds of Fig 12 literally onto ecological interaction types (competition = bond X, mutualism = bond Y). | **Retracted.** The seven bonds are composition operators over a typed DSL, not ecological relations. Fig 11 alone names and governs ecological relations. The only thing carried over is the structural point that a relation is not recoverable from its operands (F1), used as low-overlap triangulation, not as a literal taxonomy. |
| Read the question as demanding a predicted direction for named interactions. | **Narrowed, not silently dropped.** Re-census shows the figures give shape only. The directional question is a `gap` (F8), recorded as a verdict with the instruments that would close it. |
| Assumed temperature and rainfall could be treated as two independent single-condition problems. | **Refuted by Fig 9 :55-57.** They are a union compound. F6 and the three-route decomposition were written after this re-census. |
| Fig 11 :39 *"capability is a property of agent-and-habitat"* initially read as a claim about individual fitness. | **Re-census:** the figure's own context is a seat and its capability, but the rule is stated domain-agnostically (Fig 4 :20: *"Only the actors, the currency and the anchor change"*). Applied to a species-and-habitat it is an analogue, not a quote about ecology. Marked `single-source` analogue, not a literal ecological law. |
| Apparent strain Fig 1 per-slot indexing versus Fig 9 aggregate network metrics used in the literature. | **Not strained.** Fig 1 governs the residual; network metrics are frame-internal scores (Fig 1 :24-27 disqualifies quantities a frame produces for itself). Different objects. |
| Fig 8 :39 *"So a search that finds nothing is never a proof of absence"* versus F8's `gap` verdict. | **Not strained.** The gap is recorded from a census and an instrument test, not from failed search. It is a verdict about what is owed, not a claim that no answer exists. |

**Strains after re-census: one, named.** The Fig 12 bond vocabulary remains an analogue rather than a mapping for ecological interaction types. It is not hidden and not used to hand a verdict.

### Three-question closure check (formula step 7)

1. **SEARCHED.** Is the interaction-direction answer in the ecology closure and merely unfound? Not at this budget: it requires habitat enumeration and field interaction data. More reading of range models will not produce it.
2. **INWARD.** Sharpen our own instrument? Range and phenology instruments are already returning something; the interaction instrument is the one with no readings at the required resolution (Fig 3 :27).
3. **OUTWARD.** Import from field ecology and network ecology with a source gate and a shadow test. Done: seven world sources were opened and each is recorded with the gap it explains in `10_source_ledger.csv`.

The three are kept distinct. SEARCHED was asked first, INWARD and OUTWARD were never read against one another.

---

## 7. Figure lines used (verbatim check)

Every quote above was checked character by character against `FRAMEWORK/reference/03-FIGURES_TEXT.md`: Fig 1 :19, :22, :28; Fig 2 :29, :35, :40; Fig 3 :20, :27; Fig 4 :20; Fig 4 :25; Fig 8 :39; Fig 9 :27, :32, :55, :57, :60; Fig 10 :42, :52; Fig 11 :39, :40, :43, :46, :47, :48, :49, :50, :52, :66; Fig 12 :46; Fig 13 :134; Fig 5 :65. None was taken from a summary.

## 8. Verdict

The figures govern the shape of the answer directly and strongly through Fig 11, with triangulation from Fig 1, Fig 3, Fig 9 and Fig 12. The defensible result is a three-route decomposition with per-interaction tracking and an open direction. The specific directional answer is a `gap` owed to the ground. The derivation is `general`/`specified`, ungrounded, and simulated. It is internally consistent with the verbatim figures. It does not settle the question it reports on.
