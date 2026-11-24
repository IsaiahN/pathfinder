# Figure-grounded audit: Could natural heating and cooling cycles concentrate molecules and encourage reactions?

**Mode:** `specified` on the structural conditions, `general` on the unbundling claim. No measurement reported here settles the question, so nothing is `grounded`. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status: simulated derivation, not a ground reading.** The Recursive Self-Improvement Trap (https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap): "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the claim it reports on.

**Sources.** Figure quotes are verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session. Canonical usage from `FRAMEWORK/reference/FIGURES_README_canonical.md`. Loop and mode from `FRAMEWORK/figures/THE_FORMULA.md`. World sources listed in `10_source_ledger.csv`, all opened 2026-11-23.

## Proposal header (seat reasoning)

```
DECIDES:    If the residual is a union of concentration + reaction + retention, answer with the
            necessary shape and three refuters (B). If it is one condition with a single lever,
            answer yes/no (A). A = B? No: A states a groundless verdict and hides two conditions.
HOURS:      ~1.5h primary derivation, ~0.4h independent re-census, ~0.5h world search. Held apart
            from what it tells us (Fig 12 :126-130: bits and actions are different currencies).
PRIOR CASE: QMGR-0037 (spacetime/QM): a proposed mapping was kept as shape and refused as binding.
            Same residual shape here: a mechanism is attractive, the specific claim outruns its ground.
ANALOGUE:   Brownian ratchet (world source, low overlap): a cycle at uniform temperature gives no net
            motion; a gradient plus asymmetry gives directed transport. Mapped by relation, not looks.
LIMIT:      At 10^6 cycles or 4 Gyr, does cost stay flat? Only if the product is retained; otherwise
            every cycle re-pays (Fig 12 :109). That is the quantity to measure, not an assumption.
```

## 0. The claim under audit

> Natural heating and cooling cycles could concentrate molecules and encourage reactions.

Read as an effect claim: an environmental temperature cycle closes a gap between a dilute, slow prebiotic mixture and a state in which reactants are locally dense enough and reactions productive enough to feed further chemistry. The question does not name a setting (hot spring, tidal pool, snow, geothermal field), a cycle period, or a molecule. It asks about the mechanism class.

Two readings are kept separate and never averaged (Fig 1 :19: "The residual is indexed by object slot, not aggregated."):

- **Slot 1, concentration.** Does cycling bring molecules together?
- **Slot 2, reaction promotion.** Does cycling make them react faster or more selectively?
- **Compound slot, retention.** Does the product persist between cycles so the next cycle starts from it?

## 0b. Residual and domain census (written before any figure line is chosen)

**RESIDUAL (effect terms).** In a dilute, ambient, well-mixed prebiotic environment, molecules stay below the concentration and reaction yield required to build the molecules life needs. Something must close that gap. What failed to resolve is not "life" but two separate measurable quantities: local concentration and product yield across repeated cycles.

**R by arity, symmetry, scale** (Fig 9 :22; :27-28 "describe it before you go looking, or any frame you pick will seem to fit").

- **Arity:** three conditions, not one. Concentration (transport/separation), reaction promotion (kinetics), and retention between cycles (a record across a boundary). A lever that clears one leaves the intersection standing.
- **Symmetry:** heating and cooling are ordered, non-interchangeable phases (a sequence bond, not a symmetric join). Swapping them changes the process: evaporation concentrates solute, rehydration dilutes it; freezing excludes impurities, thawing releases them. The cycle has a sign.
- **Scale:** a molecular and mesoscale effect driven by a macroscopic environmental condition (temperature, season, terrain). This is a cross-scale contact, to be checked with care against Fig 4 and not forced.

**One line per domain: actors / currency / anchor.** A domain with no nameable anchor is not a domain yet.

| domain | actors | currency | anchor (nameable?) | type |
|---|---|---|---|---|
| D1 thermal forcing | heat, cold, amplitude, period, day/night, geothermal flux | energy flow, gradient magnitude | thermometer, calorimetry, measured temperature time series | yes, physical |
| D2 transport and concentration | solvent, solute, evaporation, condensation, freezing, brine, pores, surfaces, thermocapillary flow | concentration factor, chemical potential | measured concentration factors, solubility and phase diagrams | yes, physical chemistry |
| D3 prebiotic kinetics | monomers, oligomers, condensation and hydrolysis, surfaces, crowding | rate, yield, activation barrier | laboratory product distributions and yields | yes, chemistry |
| D4 habitat and setting | hot springs, volcanic ponds, snow and ice, obliquity-driven seasons | cycling regularity, stability | field measurements, geological record | yes, geoscience |
| D5 framework-internal composition | six terms, seven bonds, negation | composition in closure(Γ), settlement | the figures as metalaws | yes, framework |

**Partition or union.** D1 to D4 are world domains and form a **union compound** around the residual, not a partition. D5 is the derivation frame applied to the residual, not a sixth world domain. The intersection D2 ∩ D3 ∩ retention is the specific compound that must be unbundled before search (Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."). The Library of Babel essay states the same rule in plain words: "Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually to find their answers."

**Order by dependency (Fig 3).** D1 forcing -> D2 gradient and transport -> concentration -> increased molecular contact -> D3 reactions -> retention of product in a substrate -> the next cycle starts from the accumulated product. Optimising a link that already works cannot rescue one that does not (Fig 3 :19). The link most likely to be assumed rather than measured is retention: "A link with no instrument is not a link that works. It is a link nobody has looked at." (Fig 3 :27).

**Strain test applied before concluding.** My first instinct was to use Fig 4's membrane (methods cross up, head starts down) to govern cycle-to-cycle retention. It strains: Fig 4 governs crossings between sizes, while retention here is a record within one scale. Re-census sends retention to Fig 12's substrate rule (F4), and Fig 4 is demoted to an analogue in `06_isomers_and_order.md`. My second instinct was to treat temperature as one of the six primitives. It strains: temperature is a habitat condition (Fig 11 :46) and an ordering over energy, while energy is the state. Re-census sends temperature to D1/D4 and keeps the six unchanged. Both first readings are preserved in section 6.

## 1. Figure census

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are verbatim.

| figure | bearing | verdict on this question |
|---|---|---|
| 1 The Agent | residual per slot, never aggregated | keep concentration and reaction as separate slots |
| 2 The Ground | anchor is a measurement; agreement is not evidence | the ground is a concentration/yield measurement, not assent |
| 3 Dependency Chain | order by dependency; a link with no instrument is not working | retention is the likely unmeasured link |
| 4 The Membrane | methods cross up, head starts down; round trip has a gap | cross-scale analogue only, not a governing line after re-census |
| 5 Mint Pipeline | support, reachability, novelty as a product; make the shape an ordinary term | the sought-for shape is bound and made refutable |
| 6 Closure / Reachability | import is the only operator that moves the wall; instruments improved from worse ones | no new primitive is imported; settings are bindings, not new atoms |
| 7 Room Chain | a room's agreement is variation, not a verdict | a list of agreeable readers cannot corroborate |
| 8 Union Surplus | provenance separates convergent derivation from adopted import; no proof of absence | world sources are witnesses, not the verdict; absence is not proof |
| 9 Leave / Arrive | union vs partition, unbundle, describe before looking, narrowing by the ground | decisive for F1 and for the shape-not-a-name limit |
| 10 Ground Maintainer | bring a characterised residual, never the source; verifier non-access | stages 1 and 2 of the offer are ordered by this |
| 11 The Habitat | habitat enumerated, conditions include temperature, unmaintained mode | decisive for F3 and F6: no maintainer, pure contact |
| 12 The Bond | cycle, catalyst, substrate recording, arrangement is priced | decisive for F2, F4, F5 |
| 13 Minimum Viable Set | gradient can be spent; energy and gradient compose a flow; each turn leaves a remainder | decisive for F2 and F3 |
| Operators / Symbols | sequence and production are ordered; a bond carries information the operands do not | heating and cooling are ordered, not interchangeable |
| THE_FORMULA | mode rule; step 7 searched / inward / outward; direction discipline | state mode; run searched first; bind the shape |

Strained readings are named and re-censused in section 0b and section 6, not smoothed over.

## 2. Findings

Mode is stated on every substantive claim. Triangulation is between figures with low overlap in subject matter; it is internal consistency, not external corroboration (Fig 2 :40).

### F1 - The residual is a union compound, not one question (general, triangulated)

Fig 9 :57: "a case in two conditions is not a harder case of either"
Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."

Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."

Concentration is a transport/separation effect. Reaction promotion is a kinetics effect. Retention is a record across a cycle boundary. A single lever (for example "raise the temperature amplitude") may clear the transport slot while leaving reaction yield untouched, and vice versa. Asking "could cycles do both?" before unbundling invites a verdict from a mechanism that only addresses one slot. The Library of Babel essay independently states the same discipline in effect terms, and its agreement here is within one author's evidence pool, recorded as such.

**Refuter:** show that concentration, reaction promotion and retention are one condition with one lever, so that a single intervention moves all three together in every tested setting.

### F2 - A cycle concentrates only if its sign is non-closing (specified, triangulated)

Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."
Fig 13 :31: "each turn leaves a remainder (the residual) that re-enters the next"

A perfectly reversible thermal cycle returns the system to its starting state each period. Its net accumulation per cycle is zero, because the loop closes. Concentration requires that the heating half and the cooling half be asymmetric in what they retain: evaporation removes solvent but not solute; freezing excludes ions into brine; a surface adsorbs one species and releases another. In figure terms, each turn must leave a remainder that re-enters the next. This is a shape, not a name: the framework does not say which asymmetry, and naming one is a binding from D2 or D4 (F7).

Low overlap: Fig 12 governs the cycle as a bond structure; Fig 13 governs the remainder of a recursive turn. Different quantities, so this is triangulation within the framework.

**Refuter:** demonstrate a perfectly symmetric thermal cycle, with no retained asymmetry between its halves, that still produces net accumulation of a concentrating species per cycle.

### F3 - The driving gradient must be spendable, and the habitat supplies it (general to specified, single-source on the gradient)

Fig 13 :46: "What makes a gradient a gradient is that it can be spent, and neither an ordering nor a span of space has directedness."
Fig 13 :76: "Energy and a gradient compose a flow."
Fig 11 :46: "conditions: light, water, temperature, season, terrain"
Fig 11 :43: "The habitat is enumerated, never composed."

A bare difference in temperature is an ordering. It becomes a driver only when it has directedness that can be spent: a gradient driving evaporation, thermocapillary flow, or an activation barrier crossed on the hot half and a product trapped on the cold half. The temperature cycle is a condition read off the world (Fig 11 :48: "You do not invent the list. You read it off the world"), not a term composed inside the library. Enumerating the habitat first is what prevents picking a favourite setting and then finding it fits (Fig 9 :27-28).

Single-source: Fig 13 and `THE_FORMULA` substrate section share the same evidence pool and govern the same quantity. The habitat claim (Fig 11) is a separate figure with low overlap, so the combined claim is partly triangulated; the spendable-gradient clause itself is single-source.

**Refuter:** measure a specific cycling regime in which concentration and reaction proceeds with no spendable gradient (uniform temperature, no surface or phase asymmetry) and no external energy source beyond thermal noise at equilibrium.

### F4 - Accumulation requires a substrate that records the product between cycles (specified, single-source on the figure, corroborated in the world)

Fig 12 :107: "Whether that cost must be paid again depends on the substrate: where the arrangement is recorded, re-deriving it is a lookup and the actions were spent once."
Fig 12 :109: "Which boundary matters is the one the record does not cross. Inside a run the arrangement persists and nothing is re-earned; across a boundary that drops it, everything is."
Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves."

This is the decisive condition for "concentrate." If the product of one cycle (an oligomer on a mineral surface, a concentrated brine in a pore, a vesicle trapped in a film) survives into the next cycle, the next cycle begins from a head start and the concentration compounds. If the record is dropped and everything diffuses back to bulk between cycles, each cycle starts from zero and pays the full cost again. Heating alone does not change contact; concentration does, by bringing molecules into contact and keeping them there.

Single-source within the framework (Fig 12). It is corroborated by two world sources with different authors and methods: Ross and Deamer 2016 found that simple Le Chatelier shifts from evaporation were insufficient and that oligomer-stabilizing factors of 5-10 kcal/mol were needed to move polymerase formation forward, and Hassenkam and Deamer 2022 found that wet-dry cycling at 80 °C produced polymer-like products where room-temperature cycling produced only irregular strings. These are independent of the framework and count as genuine low-overlap corroboration, not as a second reading of the same figure.

**Refuter:** show a cycling system in which the record is deliberately dropped between cycles (product fully dispersed, no surface or pore retention) that accumulates product across cycles at the same rate as a retention-enabled control.

### F5 - Reaction promotion needs a regenerating surface or catalyst (specified, single-source)

Fig 12 :119: "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."

A cycling environment can promote reactions twice: kinetically, by crossing activation barriers on the hot half, and structurally, by providing a surface or mineral that survives its own use and re-enters the next cycle. The figure distinguishes a part that is spent from a part that regenerates; a wet-dry regime on clay or metal sulfide is a candidate for the latter. Which surface is a binding from D3/D4, not a derivation. A failed case is also informative: Simonis and Deamer 2026 found that some Icelandic hot-spring waters degraded more than 95% of adenosine monophosphate under sixteen wet-dry cycles, so the surface and water chemistry decide the sign of the effect.

**Refuter:** show sustained product accumulation across cycles with no surface, catalyst, or regenerating structure present, under conditions where homogeneous kinetics alone account for the yield.

### F6 - There is no maintainer; the ground decides (general, triangulated)

Fig 11 :56: "Unmaintained. No maintainer and no live frame in the seat. The habitat is pure contact, nothing selects, and what survives is what the ground kept."
Fig 11 :36: "Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground."
Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."

Prebiotic chemistry has no seat, no designer, and no maintained garden. The habitat is pure contact, and what persists is what the ground kept. Therefore the verdict on this question cannot be produced by agreement among researchers, by the elegance of the mechanism, or by the prestige of the setting. It is settled by a measurement of concentration factor and yield under a declared cycling regime. Low overlap between the habitat's mode (Fig 11) and the definition of an anchor (Fig 2) makes this triangulated.

**Refuter:** produce a ground reading (a controlled cycling experiment with stated amplitude, period, surface and retention) in which the predicted necessary conditions fail to predict the measured concentration and yield.

### F7 - The framework returns a shape, not a name (general, single-source plus canonical doc)

Fig 9 :32: "you get a kind of thing, never the answer itself"
Fig 8 :51: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"

The figures license the necessary shape (a non-closing cycle, a spendable gradient, a retention substrate, a regenerating surface). They do not license the name of a particular setting (hot spring versus snow versus tidal pool). Naming one is a binding from the geoscience frame, provenanced as such. The canonical figures README states the limit as "a shape, not a name," and the Library of Babel essay states the search stops at "a general shape of the answer that satisfies your question." These are the same evidence pool, so they are recorded as one witness, not two.

**Refuter:** derive a specific setting from the six-term set alone, with no import from geoscience, and show the derivation is forced rather than one binding among several.

### F8 - A missing demonstration is not a proof of absence (general, triangulated)

Fig 9 :44: "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."
Fig 8 :39: "So a search that finds nothing is never a proof of absence."
Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

No experiment in this package failed. None was run. The absence of a demonstrated prebiotic pathway in a given setting is not a verdict that no pathway exists. Funding, tractability and expert accessibility are filters for what gets tried first; they are not witnesses for whether the shape holds. Two figures with different subject matter (the sealed room, the union surplus) give the same instruction, so this is triangulated.

**Refuter:** exhibit a sealed frame whose closure is known to be complete, in which an exhaustive search genuinely proves absence. By Fig 9 :44 this is not available for any real frame, so this refuter is expected to stay unfired; it is written down so the limit is visible.

### F9 - What survives, with mode attached

| claim | mode | figure | status |
|---|---|---|---|
| The residual is a union of concentration, reaction and retention | `general` | Fig 9 :54-57 | figure-derived |
| A cycle concentrates only if its sign is non-closing | `specified` | Fig 12 :121; Fig 13 :31 | triangulated within framework, world analogue low overlap |
| The gradient must be spendable; temperature is a habitat condition | `general` / `specified` | Fig 13 :46; Fig 11 :46 | single-source on gradient, triangulated on habitat |
| Accumulation requires a substrate that records the product | `specified` | Fig 12 :107, :109 | single-source, world corroborated |
| A regenerating surface or catalyst is required for reaction promotion | `specified` | Fig 12 :119 | single-source, world corroborated and world-qualified |
| No maintainer; the ground settles it | `general` | Fig 11 :56; Fig 2 :29 | triangulated |
| The framework returns a shape, not a setting | `general` | Fig 9 :32 | single-source plus canonical doc |
| "Yes, cycling works" stated globally | **refused** | F1-F8 | a verdict with no ground and with two conditions hidden |

## 3. Pre-registered refuter

Written before the conclusion, per Fig 10 and the seat rule that a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. A perfectly symmetric thermal cycle, with no retained asymmetry between heating and cooling, produces net accumulation of a concentrating species per cycle. (breaks F2)
2. A cycling system in which the record is dropped between cycles accumulates product at the same rate as a retention-enabled control. (breaks F4)
3. A ground reading shows concentration and reaction proceeding with no spendable gradient, no retained asymmetry, and no regenerating surface. (breaks F2, F3, F5)
4. Concentration, reaction promotion and retention are shown to be one condition with a single lever in every tested setting. (breaks F1)
5. Framework-level: one of the six terms is derived from the other five, or a seventh is admitted. (breaks the substrate the derivation rests on)

If any fires, the shape claim is withdrawn or re-censused. Until one is run, nothing above may be labelled `grounded`.

## 4. Recommendation

1. Unbundle the question into concentration, reaction promotion and retention before any literature search or outreach (F1).
2. Answer with the necessary shape and the three refuters, not with a global yes/no (F9).
3. Name settings only as bindings from D4, with provenance recorded, and never as derivations (F7, Fig 8 :51).
4. Ask experimenters for the measurement that separates the candidates: net concentration per cycle with and without retention (F4). Report failures as data, not as noise (Fig 5 :48: "Its own output is never a measure of success.").
5. Send the generator (the derivation and the refuter), not a recording of a favourite setting: Fig 4 :22 "Only methods cross up. Only head starts come down."
6. Use the public, opt-in venues in `03_public_contact_points.csv`. Do not select recipients for likely agreement (Fig 2 :40).

## 5. Canonical usage check

Two local documents govern how the figures may be used, read after the first four sections:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw," and the limit: the framework returns "what a missing thing would have to look like (a shape, not a name)" and stops "at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest. Indiscernibility is not identity."
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule, step 7 (searched first, then inward, then outward), and the direction discipline that makes the sought-for shape an ordinary term.

Applied here: no figure quote was taken from a summary; every Fig N :line was checked against `03-FIGURES_TEXT.md`; the two strains were re-censused rather than smoothed; no name of a setting was derived from the six-term set; the stop is recorded as `specified` and ungrounded.

Three instrument questions, kept distinct per formula step 7:

- **Searched:** has the retention condition been looked for in the cycling literature? Yes, Ross and Deamer 2016 and Hassenkam and Deamer 2022 address stabilizing factors and temperature dependence. It was found, not absent.
- **Inward:** sharpen the measurement of net concentration per cycle, with and without a retained substrate. This extends an instrument already returning a reading (Fig 6 :32 "An instrument is not built from a description. It is improved from a worse instrument already returning something.").
- **Outward:** import a frame whose closure predicts the shape, for example non-equilibrium ratchet physics (Brownian ratchet, verified 2026-11-23). Cast in effect terms: a cycle plus asymmetry plus a temperature difference yields directed transport; a cycle at uniform temperature yields none. This is corroboration, not a new primitive.

These are not read against one another. Inward sharpens our own instrument; outward borrows an effect description.

## 6. Retractions and confirmations

Corrections and retractions are kept visible. None is silently erased.

| earlier reading | status after re-census / canonical check |
|---|---|
| "Fig 4 membrane governs cycle-to-cycle retention" | **Retracted and re-censused.** Fig 4 governs crossings between sizes, not a record within one scale. Retention is governed by Fig 12 :107-110. Fig 4 survives as an analogue in `06_isomers_and_order.md`, labelled as such. |
| "temperature is a sixth primitive / can be composed as a state" | **Retracted and re-censused.** Fig 11 :46 lists temperature as a habitat condition; energy is the state in the six. Temperature is an ordering over energy, not a new member. No primitive was added (Fig 13 :43 "A continuum was the seventh and was removed for failing exactly this"). |
| "answer yes, cycles concentrate" | **Refused.** A global yes is a `general`-mode verdict with no ground and with three conditions hidden. Replaced by the conditional shape in F9. |
| "the ratchet analogy triangulates Fig 12 :121" | **Relabelled.** The Brownian ratchet is a world source with different authors and field, so it is corroboration, not a second figure. Fig 13 :31 is the second figure. Triangulation status in F2 updated accordingly. |
| "no relevant literature on retention" | **Retracted.** Ross and Deamer 2016 explicitly report that Le Chatelier shifts alone were insufficient and that stabilizing factors were needed. The search found the condition; it did not find an absence. |
| F1 union reading | **Confirmed.** Fig 9 :54-57 and the Library of Babel essay's unbundling rule agree. One evidence pool, recorded as such. |
| F6 no maintainer | **Canonically confirmed.** Fig 11 :56 and the Recursive Self-Improvement Trap essay ("When there is no one in the Ground Maintainer seat, the environment is the only selector") agree. |
| F7 shape not a name | **Confirmed and narrowed.** It governs the choice of a setting not held in Γ. Naming a held atom would be a binding, as in the QMGR-0037 correction. Here no setting is a held atom, so the limit applies directly. |

**Round trip note.** The condensation from the full figure set into the phrase "a working cycle needs a ratchet and a record" is lossy. Fig 4 :30 requires the gap to be measured: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." The dropped constraints are enumerated in `11_audit.md` as R_T. Treating the phrase as identical to the figures would set R_T to zero and would be the dead-reckoning error.
