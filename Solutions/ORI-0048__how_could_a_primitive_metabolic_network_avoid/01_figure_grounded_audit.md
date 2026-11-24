# Figure-grounded audit: ORI-0048, robust primitive metabolic networks

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per THE_FORMULA.md: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." (attributed to THE_FORMULA.md, not a figure line).

**Status of this derivation: a simulation, not a ground reading.** The framework's own validation essay says LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself" (Recursive Self-Improvement Trap, a world essay, not a figure line). This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No measurement of a primitive network was taken.

**Sources.** The canonical figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, and the public sources actually opened and listed in `10_source_ledger.csv`. Every quoted figure line below was checked character by character against the figure text extract this session.

---

## 0. The residual, in effect terms

A primitive metabolic network is a set of catalyzed reactions with a closure: the products reachable from an ambient food set. Call the reactions that keep that closure self-maintaining the *essential function*. The question asks how the network avoids losing that function when conditions change.

Stated as an effect, R is the gap between:

- what the network must still compose for self-maintenance (catalyst regeneration, energy harvesting, biomass or precursor production), and
- what remains composable and reachable after the habitat shifts (food species, available gradients, mineral catalysts, temperature, wet-dry cycles).

The question as phrased hides a bind. "Avoid losing essential reactions" treats the reaction list as the thing to preserve. The figures ask a different question: which *arrangement* keeps the function reachable when the ground moves? That is the shape to be bound as an ordinary term before any chemistry is named.

**R by arity, symmetry, scale:**

- **Arity: two conditions, so a union compound.** The network's internal composition and the habitat's supply are both required, and they overlap (catalysts may come from minerals; the food set is environmental). Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." A bundled problem clears only the region where one condition holds and leaves the intersection standing.
- **Symmetry: ordered and graded, not symmetric.** Catalysis is directed (production ⇒, sequence →), gradients have direction (they can be spent), and a perturbation has a direction (from condition A to condition B). Fig 13 :22 "a difference that can be spent" names the directedness that makes a gradient a gradient.
- **Scale: first order inside the network, second order across variants.** Reactions compose into cycles at the network scale; compartments or lineages that survive a change are compared at the next scale. Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."

**Per-slot reading.** Fig 1 :19 "The residual is indexed by object slot, not aggregated." Here the slots are individual reaction functions: energy harvesting, catalyst regeneration, precursor supply. A global "the network is robust" averages away exactly the slot that failed. Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."

---

## 1. Domain census (before any figure line is chosen)

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | partition or union | order |
|---|---|---|---|---|---|
| D1, the reaction network (the frame) | metabolites, reaction steps, catalysts (minerals, cofactors, molecules that survive their own use) | reaction flux, catalytic closure, reachability of products from the food set; bits to describe versus actions to test (Fig 12 :125-126) | kinetic and thermodynamic ground: does the reaction actually run and sustain flux | partition question inside the frame (which compositions close), overlapping with habitat supply | upstream of D2 and D3; must be settled before comparison |
| D2, the habitat (field of contact) | food molecules, mineral surfaces, light, water, temperature, wet-dry cycles, redox gradients, other compartments | availability of spendable difference (gradient), supply of atoms (import), perturbation | the ground settles persistence; the habitat updates (Fig 11 :73) | union with D1; enumerated, never composed | parallel with D1, but read first because the food set bounds closure |
| D3, variation and selection across compartments | protocompartments, network variants, lineages | heritable variation, differential persistence, residual surfaced by the ground | the ground, via selection between rooms (Fig 7 :35) | union with D2 (variants live in habitats) | downstream: needs a settled D1 whole to be a variant of |
| D4, the verification / outreach frame | expert readers | agreement and residuals | the ground, never agreement | overlap with all three if the reader is shown the interiors | last; must not feed back into D1-D3 verdicts |

**Dependency order (Fig 3).** 1 perception: a slot loses viability and R arrives; 2 vocabulary: terms for catalysis, closure, gradient, import; 3 objective: keep the self-maintaining whole reachable; 4 planning: which structural changes preserve closure; 5 learn and carry: record the lineage so a lost function can be re-derived (Fig 12 :107-110). Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." A primitive network has no instrument, so links 3 and 4 are unmeasured here. Recorded as such, not assumed to work.

---

## 2. Figure census (quoted before concluding)

All quotes are verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`. No quote is taken from a summary.

| figure | verbatim line | bearing |
|---|---|---|
| Fig 1 :19 | "The residual is indexed by object slot, not aggregated." | measure robustness per reaction function |
| Fig 2 :40 | "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" | expert agreement cannot settle the shape |
| Fig 3 :27 | "A link with no instrument is not a link that works. It is a link nobody has looked at." | no instrument means no claim about primitive objective/planning |
| Fig 6 :14 | "the only operator that moves the wall" | import is the only route to a reaction outside closure |
| Fig 6 :21 | "MINT composes inside the closure and can never add an atom." | internal rearrangement cannot replace a vanished catalyst |
| Fig 7 :35 | "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." | variation inside, selection between |
| Fig 8 :32 | "no search, however long, adds an atom" | a closed network cannot search its way to a lost reaction |
| Fig 8 :39 | "So a search that finds nothing is never a proof of absence." | honest stop; search silence is not absence |
| Fig 9 :32 | "you get a kind of thing, never the answer itself" | the figures return a shape, not a chemical name |
| Fig 10 :24 | "the ground does not decay, the channel does" | conditions change the channel, not what settles persistence |
| Fig 11 :36 | "Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran. The word does no work there." | no foresight or intelligence required |
| Fig 11 :39 | "capability is a property of agent-and-habitat, never of the agent alone" | robustness is a network-plus-habitat property |
| Fig 11 :40 | "An improvement that does not change contact changes nothing, however much it improves." | optimising the network alone cannot help |
| Fig 11 :43 | "The habitat is enumerated, never composed." | read off actors, conditions, relations |
| Fig 11 :61 | "Introduction is available; exclusion is not." | a seat can add atoms but cannot subtract the habitat |
| Fig 11 :66 | "Isolation is not removal of the habitat. It is substitution of one habitat for another." | changed conditions are a substituted habitat |
| Fig 11 :73 | "The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not." | habitat versus ground, kept distinct |
| Fig 12 :104 | "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world." | closure across levels, no new primitive |
| Fig 12 :107 | "Settling compresses the description and not what it cost to establish." | cost of re-establishment is not compressed |
| Fig 12 :117 | "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." | redundancy by rearrangement over the same atoms |
| Fig 12 :119 | "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is." | catalysts persist across turnovers |
| Fig 12 :121 | "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." | only cycles close; chains cannot self-maintain |
| Fig 12 :124 | "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." | preserve the function, not the specific reaction |
| Fig 12 :125-126 | "A composition costs in two currencies, and they do not add." / "Bits price the description. Actions price finding out whether it holds." | bits and actions held apart |

---

## 3. Findings F1 to F9

### F1: preservation is a shape, not a reaction list (framework-internal, `general`)

The question asks how to avoid losing *reactions*. Fig 12 :124 "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." and Fig 9 :32 "you get a kind of thing, never the answer itself" govern the quantity. What must be preserved is the function (the group), not the particular member reaction. Naming a specific reaction as essential is a binding from the chemistry frame, and must be provenanced as such.

World corroboration (secondary, different authors and methods): Piedrafita et al. 2010 (PLOS Computational Biology) found that a small (M,R) system can recover from "a catastrophic disappearance of a catalyst" because the *whole network*, not any single flux mode, maintains the catalysts. This supports preserving the closing arrangement, not a list. Triangulated: Fig 12 :124 and Fig 12 :121 (independent figure quantities) plus an independent chemistry result.

### F2: essential reactions must sit in cycles, with catalysts that survive their use (`specified`)

Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." A linear pathway cannot close on itself; a reaction whose product re-enters as input can. Fig 12 :119 "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is." together imply that what survives a change is a catalyst that is regenerated by the closed loop, not a reagent that is consumed.

Prediction: the reactions that persist are those inside at least one closing loop that regenerates its own catalysts. Refuter: a demonstrated self-maintaining primitive network whose essential reactions form only open chains with externally replenished catalysts, sustained without any re-entry of output as input. If that fires, F2 is wrong. Triangulated (Fig 12 :119 and :121 are two different structural claims) plus Piedrafita et al. 2010, whose (M,R) system is explicitly three interlocking catalytic cycles and reports recovery of a catastrophically lost catalyst.

### F3: redundancy is isomeric overlap, not spare parts (`specified`)

Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Under a changed condition, one arrangement may fail while another over the same molecular inventory still closes. So robustness comes from *multiple arrangements over the same atoms*, not from duplicating a single reaction. Fig 12 :124 supplies the functional-group reading: the outcome is fixed by the substructure, and several members can carry it.

World corroboration: Soyer and Pfeiffer 2010 (PLOS Computational Biology) found that networks evolved under fluctuating media gain "an increased number of independent fluxes and multifunctional enzymes", and that robustness "should decrease upon switching to more stable environments." Piedrafita et al. 2010 add a direct chemical instance of the figure's isomer claim: "multiple components have the same composition but different functions, depending on the arrangement of their elements", with SUSTU and STUSU as isomers of different activity. Triangulated across two independent figure quantities and two independent world sources, with low overlap between an ODE model and an evolutionary simulation.

### F4: across boundaries, the unrecorded arrangement is paid for again (`specified`)

Fig 12 :107 "Settling compresses the description and not what it cost to establish." The figure continues: "Where it is not, the result carries forward and the deriving does not, so every lineage pays again." A primitive network without a record that crosses the compartment boundary must re-derive its closing arrangement each generation. The lineage that keeps the *record* (a surface, a pore, a template, a persistent mineral site) pays the cost once; the one that carries only the product pays again. This is the figure-grounded reason heritability matters to robustness, and it is a shape, not a claim that any particular molecule is the record.

Refuter: a demonstration that a primitive network reliably re-assembles the same closing arrangement after a full boundary drop with no carried structure and no environmental template, at a cost that does not scale with the difficulty of the arrangement. Then the "every lineage pays again" clause would not govern this case. Single-source on the figure text (Fig 12 :107-110), with the chemistry still unmeasured.

### F5: a closed network cannot re-import what it has lost (`general`, barrier result)

Fig 6 :21 "MINT composes inside the closure and can never add an atom." Fig 8 :32 "no search, however long, adds an atom." Fig 6 :14 names "the only operator that moves the wall". So if a change removes a catalyst or food species that the network's closure does not contain, no amount of internal search or rearrangement restores it. The only route is import: a new atom from a different frame (mineral input, atmospheric or meteoritic supply, syntrophy with another network, a different compartment).

Fig 11 :61 "Introduction is available; exclusion is not." A maintainer can add an actor; it cannot subtract the habitat, because contact is a fact about the world. Refuter: a closed chemical reaction system that regenerates an atom absent from its initial closure and its food set without any external supply. That would falsify closure idempotence for this domain. Triangulated across Fig 6, Fig 8, and the habitat asymmetry in Fig 11, three low-overlap figure quantities.

### F6: the unit of robustness is network plus habitat (`general`)

Fig 11 :39 "capability is a property of agent-and-habitat, never of the agent alone" and Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves." So "the network avoids loss" is not a property of the network considered alone. A change in conditions is a substituted habitat: Fig 11 :66 "Isolation is not removal of the habitat. It is substitution of one habitat for another." Moving a network to new conditions "must reproduce everything its goal required, and you inherit the new habitat's actors, which you did not choose" (Fig 11 :67).

Fig 11 :73 "The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not." Keep the two apart: the environment changes, but whether a network persists is settled by the ground, not by any frame's description of the environment. Fig 10 :24 "the ground does not decay, the channel does": what fails when conditions change is the channel of contact, not the ground.

World corroboration: Braakman and Smith 2013 (Physical Biology) describe metabolic regularities as "constraints on evolutionary dynamics" and report that early core metabolism used "few rules of composition of conserved modules, to produce adaptations to simple chemical or energetic differences of environment"; the 2026 Discover Life review states that "complementary processes operating across interconnected and evolving environments collectively enabled the assembly, concentration, stabilization, and integration of prebiotic molecules." Both predict that the unit of analysis is network plus environment. Triangulated, low overlap between a systems-biology review and an origin-of-life review.

### F7: no foresight is required; selection runs (`general`)

Fig 11 :36 "Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran. The word does no work there." The network does not anticipate the change. Fig 7 :35 "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." So the correct structure is variation inside a population of network variants and selection between them against the changed ground. Agreement among variants that share the same habitat is one evidence pool (Fig 2 :40), not corroboration.

Refuter: a demonstrated primitive network that changes its own reaction set in advance of an environmental change, where the change is not registered by any contact with that environment (no percept, no gradient shift, no concentration change). That would require direction the figures say the loop cannot check. Single-source on the figures (Fig 11 :36, Fig 7 :35, Fig 2 :40), convergent across three quantities but one evidence pool.

### F8: how to enumerate the habitat, and what cannot be claimed from a lab result (`specified`)

Fig 11 :43 "The habitat is enumerated, never composed." The list is read off the world: "conditions: light, water, temperature, season, terrain" (Fig 11 :46), plus actors and relations. "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual" (Fig 11 :48). Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries": a mineral is a benefactor to one residual and a malfactor to another, so there is no standing list of good catalysts.

Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." A laboratory demonstration of robustness under one fixed condition set proves that the wiring works, not that the network is robust under real change. World corroboration: the 2026 Discover Life review states that "the transition from geochemistry to biology remains unresolved, underscoring the need for integrative frameworks", and that evidence supports processes in "fluctuating environments characterized by wet-dry cycles, redox gradients, and episodic energy inputs." Triangulated, low overlap.

### F9: two currencies, held apart (`specified`, a named strain)

Fig 12 :125-126 "A composition costs in two currencies, and they do not add." / "Bits price the description. Actions price finding out whether it holds." A redundant network may be cheap to describe (a repeated motif) and expensive to test (each alternative path must be run under each condition). The figures do not sum these. Applying the figure's bit-price to chemical free energy is a binding, not a derivation. This strain is named and carried into `06_isomers_and_order.md` and `09_watson_answer.md`; it is not smoothed over.

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach: a falsifier written in advance is a design instrument, not only an honesty device (THE_SEAT_MAP, a framework document, not a figure line). The shape claim is refuted if any of the following is demonstrated:

1. A primitive network keeps self-maintenance across a change while its essential reactions form only open chains whose catalysts are externally replenished, with no output re-entering as input (breaks F2, Fig 12 :121).
2. A closed reaction system regenerates a catalyst absent from its initial closure and food set with no external supply (breaks F4 and F5, Fig 6 :21, Fig 8 :32).
3. Robustness is carried by a single fixed reaction list under arbitrary habitat substitution, with no functional overlap and no import route (breaks F1, F3, F6).
4. The same closing arrangement re-assembles after a full boundary drop with no carried structure, at a cost independent of the difficulty of the arrangement (breaks Fig 12 :107-110).

If any fires, the shape is withdrawn or narrowed. Until one is run, no part of this is labelled `grounded`.

---

## 5. Recommendation

1. Lead with the shape and the refuter, not with a chemical name. The figures return a kind of thing, not the answer itself (Fig 9 :32).
2. Census the habitat before proposing a mechanism (Fig 11 :43). List actors, conditions, relations, and the residual for each.
3. Test for cycles and catalyst regeneration first (Fig 12 :119, :121), then for isomeric overlap over shared atoms (Fig 12 :117, :124).
4. Treat import as the only repair for a lost atom (Fig 6 :14, Fig 8 :32), and record the source gate and the shadow test for every import.
5. Do not present a synthetic result as robustness (Fig 11 :70). It proves wiring.
6. Keep bits and actions as two readings (Fig 12 :125-126). Never add them.

---

## 6. Canonical usage check

Two framework documents govern how the figures may be used and were read after the first sections.

- `FRAMEWORK/reference/FIGURES_README_canonical.md` states that the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary" and that the framework reports "what a missing thing would have to look like (a shape, not a name)", then "stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest". Also: "Indiscernibility is not identity." (These are README quotes, not figure lines.)
- `FRAMEWORK/figures/THE_FORMULA.md` gives the eight-step loop, the support/reachability/novelty guards, the rule that "A gate is not the ground" (step 5), and the mode rule.

### Retractions and confirmations applied during the check

| earlier reading | status after canonical check |
|---|---|
| "the network must preserve a specific essential reaction" | **Retracted.** Fig 12 :124 and Fig 9 :32 govern the function, not the member. The reaction name is a binding from the chemistry frame. |
| "robustness means the network buffers the environment" | **Retracted.** Fig 11 :39 makes capability a network-plus-habitat property, and Fig 11 :40 says improving the agent alone changes nothing. |
| "redundancy means duplicate copies" | **Narrowed.** Fig 12 :117 and :124 govern rearrangement over shared atoms; Soyer and Pfeiffer's independent fluxes and multifunctional enzymes are the world analogue, not spare identical parts. |
| "the figures can name the mechanism" | **Forbidden.** The README's "a shape, not a name" governs this answer. Fig 9 :32 agrees. |
| "a lab demonstration settles robustness" | **Refused.** Fig 11 :70: a synthetic solve proves wiring, never capability. |
| "bit cost equals chemical free energy" | **Recorded as a strain.** Fig 12 :125-126 keeps the two currencies apart. No retraction, but no identification either. |
| "no search adds an atom conflicts with import" | **Not strained.** Re-census: Fig 8 :32 governs search inside a closure; Fig 6 :14 governs import from a frame whose closure differs. Different quantities, opposed instruments (Fig 6 :28-31). |
| "Fig 11 habitat versus Fig 10 ground" | **Not strained.** Fig 11 :73 separates them explicitly: the habitat updates, the ground does not. |

### Search order when no line closes the residual

Per THE_FORMULA.md step 7, kept distinct: SEARCHED (is the reaction already in closure and unfound? more independent searchers, Fig 8 :50); INWARD (sharpen the instrument already returning something, e.g. flux or catalyst turnover measurements); OUTWARD (import a frame whose closure predicts the shape, e.g. RAF theory, geochemistry). Applied here: SEARCHED would look for the reaction in the existing food web; INWARD would build a better flux instrument from one already returning data; OUTWARD is the only route if the atom is genuinely absent. Importing against a budget limit would add an atom not needed, which the figures price above starting from primitives.

---

## 7. Verdict of this audit

The figure lines close the residual as a **shape**, not as a chemical answer. Three domains survive with verdicts kept separate:

1. **Network composition (D1):** triangulated. Preserve cycles, regenerating catalysts, and isomeric overlap over shared atoms. Fig 12 :119, :121, :117, :124, corroborated by two independent chemistry sources.
2. **Habitat and import (D2):** triangulated. Robustness is agent-and-habitat; enumerate the habitat; import is the only repair for a lost atom. Fig 11 :39, :43, :61, :66, :73, Fig 6 :14, Fig 8 :32, corroborated by two independent reviews.
3. **Variation and selection (D3):** single-source on the figures and convergent across three quantities. Variation inside, selection between, no foresight. Fig 7 :35, Fig 11 :36, Fig 2 :40. The biological carrier of variation is not named by the figures and is left open.

No domain is averaged with another. The strain on the two currencies is named, not hidden. The honest stop: `specified`, ungrounded, candidate. Unreachable is a verdict here, not a silence (Fig 8 :39: "So a search that finds nothing is never a proof of absence.").
