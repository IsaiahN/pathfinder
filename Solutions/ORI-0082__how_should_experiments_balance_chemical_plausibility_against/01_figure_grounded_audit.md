# Figure-grounded audit: how experiments should balance plausibility against a complete evolving system

**Mode of this document: `general` on the design shape, `specified` on the failure predictions, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, 2026-11-19): "LLMs can quickly simulate an approximate answer/output with the formula" but "the truly testable output would need to be derived from the real architecture or working the formula yourself." What follows is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §7.

**Sources.** The canonical figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the figures README, `THE_FORMULA.md`, the amended Seat Map, the eight essays, and the public sources recorded in `10_source_ledger.csv`. Every `Fig N :line` quote below was checked character by character against the verbatim extract this session.

---

## 0. The residual stated in effect terms

The question is "How should experiments balance chemical plausibility against the need to produce a complete, evolving system?" Stated as an effect, not a topic:

- An experiment optimised for **chemical plausibility** can return prebiotically realistic feedstocks and measured products that never become a system that evolves. Miller-Urey chemistry produced amino acids, not a lineage. The measured chemistry was correct and the residual did not close.
- An experiment optimised for **a complete evolving system** can return heritable variation and a selection response that depends on purified enzymes, engineered templates or an otherwise hand-authored habitat. Spiegelman-style in vitro evolution and directed evolution do exactly this, and the directed-evolution literature records the failure honestly when it notes that selection for the assayed function produces specialisation to the proxy.
- The residual R is the **gap between the two**. Neither axis alone returns a system that is both. Asking "what is the right weighting?" already assumes the answer is a scalar. The figures deny that assumption before any chemistry is considered.

What an answer would look like (binding the sought-for shape as an ordinary term, per formula step "Direction"): a **design rule that determines what is measured, what is held fixed, what may be imported, and what would refute the result**, with the two axes kept as separate slots rather than combined. We write that shape down now so it can accrue a residual and be refused. It is the shape claimed in §6 and tested in §3 and §7.

---

## 1. Domain census (before any figure line is chosen)

R by arity, symmetry and scale:

- **Arity:** two conditions, chemical plausibility and system completeness, with a non-empty intersection. Not one lever with two settings.
- **Symmetry:** not interchangeable. Plausibility constrains the *substrate* the system must use; completeness constrains the *arrangement* the substrate enters. One is a constraint on what may be present, the other a constraint on what the present thing does over generations.
- **Scale:** plausibility is checked at the reaction and feedstock scale (first order, molecules into products). Evolvability is checked at the lineage scale (a higher-order composition that becomes the operand of selection). The two are separated by a lossy transform, and that is where the design question lives.

One line per domain, with actors, currency and anchor. No nameable anchor means it is not yet a domain.

| domain | actors | currency | anchor | nameable anchor? |
|---|---|---|---|---|
| D1 Prebiotic chemistry frame | feedstock molecules, energy sources, mineral surfaces, reaction networks | yield, selectivity, thermodynamic feasibility | the measured reaction outcome under stated conditions, Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." | yes: the measured outcome, which does not move when a narrative about early Earth changes |
| D2 Evolutionary systems frame | replicators, vesicles, metabolic cycles, heredity, variation | heritable variation and differential persistence over generations | generational counts and a selection response | yes: a lineage either responds to selection or it does not |
| D3 Experiment-design and verification frame | experimenter, reviewer, venue, other labs | residuals and agreement | the ground (D1 and D2 outcomes), never agreement | yes: the chemical and evolutionary results, which no reviewer can move |

**Partition or union?** Union, not partition. The plausible-and-evolving case is a case in two conditions. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :57-58: "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound." The overlap gets its own loop and its own ground.

**Order by dependency (Fig 3):** perception (can we detect what formed?) → vocabulary (do we have terms for what a system affords evolutionarily?) → objective (what counts as progress here?) → planning → learn and carry. The recurring break is at vocabulary and objective, not at planning. Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." Chemists have instruments for yield; they mostly lack an instrument for "would this configuration evolve", so that link is assumed rather than measured.

Strain test applied before concluding: a line that only fits by force governs another quantity. Two strains are named in §5 and re-censused rather than smoothed over.

---

## 2. Figure census (lines quoted before conclusions)

| figure | bearing | verdict for this question |
|---|---|---|
| Fig 1 The Agent | residual is per slot, ground is the only metric, frame-internal quantities disqualified | bars a single blended plausibility/evolvability score |
| Fig 2 The Ground | anchor does not update; triangulation not negotiation; independence | grounds both axes in measurement; bars agreement as evidence |
| Fig 3 Dependency Chain | the middle link (vocabulary/objective) is where chains break | the evolvability objective is the unmeasured link |
| Fig 4 The Membrane | methods cross up, recordings do not; round-trip gap | a protocol may travel, a single lucky result may not |
| Fig 5 Mint Pipeline | three guards as product; acceptance is a bargain | a new mechanism term is owed only with support, reach and novelty |
| Fig 6 Closure / Reachability | import is the only operator that moves the wall; inward and outward are opposed | engineered components are imports; prefer inward instrumentation |
| Fig 7 Room Chain | a room's agreement is variation, not a verdict | many experiments must be selected between, not averaged |
| Fig 8 Union Surplus | low overlap buys surplus; residual first, frame second | the chemistry and evolution frames must be independent |
| Fig 9 Leave / Arrive | union unbundling; filters versus witnesses; describe before looking | the governing figure for the design rule |
| Fig 10 Ground Maintainer | bring a characterised residual, never the source; verifier non-access | first contact carries the residual and refuter, not the theory |
| Fig 11 The Habitat | capability is agent-and-habitat; introduction not exclusion; substitution, test harness | the lab is a substituted habitat; a synthetic solve proves wiring, not capability |
| Fig 12 The Bond | a list of ingredients is not a route; arrangement is the substance | plausible ingredients alone cannot name the route to an evolving system |
| Fig 13 Minimum Viable Set | a closed set with open arrangements; derivatives are not new members | evolvability is a derivative arrangement, not a seventh primitive |
| Operators table | sequence, production, comparison, negation | only used structurally (a route is a sequence; a refusal is a negation) |
| Symbols table | R is per slot; the ground is the anchor | fixes the vocabulary of §1 |

---

## 3. Findings F1 to F10, each with verbatim lines and a refuter

### F1: The two goods cannot be averaged. Decisive against "balance" as a scalar.

Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
Fig 1 :23: "The ground enters as the only metric."

A single score `w * plausibility + (1-w) * completeness` aggregates across slots. It lets a high yield in D1 hide a dead lineage in D2, which is exactly the Miller-Urey shape. The figures require two residuals, each with its own ground, reported separately. The word "balance" in the question is the trap: the correct response is an ordering and a separation, not a weight.

**Refuter (falsifies F1):** demonstrate a single scalar that preserves the per-slot signal, in the sense that a drop in either slot always moves the scalar in the same direction and no live slot can be netted out by the other. No such scalar is supplied by the question. Until one is shown, F1 stands. Triangulated: Fig 1 :19/:22 plus Fig 9 :60 (low overlap between a measurement rule and a budget rule).

### F2: Chemical plausibility is a filter on the budget, never a witness for the verdict.

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."
Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces."
Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."

Plausibility decides **which systems get tried**, not **whether an evolving system exists**. A pathway that is geochemically realistic is an admissibility condition on the feedstocks and conditions. It is not evidence that the product evolves. The converse error is equally barred: an evolving system in the lab is not evidence that its feedstocks were prebiotically available.

The world literature makes the same point in its own terms. Bernal, quoted in the abiogenesis survey: "it is not enough to explain the formation of such molecules, what is necessary, is a physical-chemical explanation of the origins of these molecules that suggests the presence of suitable sources and sinks for free energy." The directed-evolution literature adds the sharper version: "selecting for improvement in the assayed function simply generates improvements in the assayed function", and leads to "evolutionary specialisation to the proxy without improving the desired activity."

**Refuter (falsifies F2):** show a case where plausibility is itself the ground for the system-completeness claim, so that establishing the former settles the latter without a generational measurement. If that case is produced, F2 collapses to F1's per-slot rule and the separation is unnecessary. Single-source for the figure rule (Fig 9 :60), triangulated across fields by the two world sources above, which are low-overlap with the figures.

### F3: Evolvability is a derivative arrangement, not a seventh primitive.

Fig 13 :115: "The set is closed. The arrangements are not. That gap is why import exists."
Fig 13 :113-114: "The array is unbounded and the reach is not. More compositions never add a member, and no chain reaches outside what the six and their bonds already span."
Fig 13 :124-125: "Smoothness, symmetry, chaos and discreteness are each what a particular composition leaves behind, and none is a seventh member."

"An evolving system" is what a composition leaves behind. It is not an ingredient to be added to a reaction mixture and not a new kind of matter to be imported. The practical consequence: try to reach evolvability by rearranging the primitives already admitted by the plausibility filter, because the generating set is closed and the arrangements are not. If you must add an engineered enzyme to make the arrangement work, you have imported an atom the prebiotic frame does not hold, and you have changed the question.

Caveat, stated not hidden: Fig 13's six specific terms (space, time, energy; spectrum, gradient, network) are a substrate for physical composition, not a list of chemical species. We invoke only the **formal** law here (closed generating set, open arrangements, derived properties are not members). See the strain note in §5.

**Refuter (falsifies F3):** exhibit a system whose evolvability cannot be expressed as an arrangement of the primitives its plausibility filter admits, but requires a genuinely new primitive rather than an import from another frame. If that is shown, the "no seventh member" move fails at this level. Triangulated: Fig 13 :115 plus Fig 12 :111 "A vocabulary without bonds can name a state and cannot name a route to one" plus Fig 12 :5 "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."

### F4: Prefer inward instrumentation before outward import.

Fig 6 :29: "inward: is our representation adequate to hold it? The instrument extends access. Fails by refining forever on an axis that cannot carry it. Sharpen in our own terms."
Fig 6 :30: "outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."
Fig 6 :51: "Figure 8 separates underivable-in-principle from unreachable-at-this-budget."
Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."

The first question is always the cheapest one, SEARCHED: is the evolvability signal in the plausible system and unfound (Fig 6 :49-50)? Only then do we ask whether the instrument can resolve it (inward) or whether a component must be brought in (outward). Importing an implausible component against a *budget* or *depth* limit adds an atom that was not needed, and a wrong atom costs more than starting from primitives (Fig 6 :51-52). Importing because the closure genuinely differs is legitimate, but it must be sourced and debited (Fig 6 :24: "Import from a live peer is debited against that frame's independence. A wrong atom costs more than starting from primitives.").

The RNA-world literature supplies the positive analogue: "Regardless of its plausibility in a prebiotic scenario, the RNA world can serve as a model system for studying the origin of life." A model system is an inward instrument, not the answer. It is allowed to be used, and it is not allowed to be reported as the ground.

**Refuter (falsifies F4):** show that every inward instrument for evolvability refines forever on an axis that cannot carry the signal (Fig 6 :29's own failure mode), and that the only route is an import. Until that is measured, F4 is a design order, not a claim that inward must succeed. Triangulated: Fig 6 :29/:30/:51 plus Fig 11 :70 (a low-overlap habitat line).

### F5: A lab habitat that evolves proves wiring, not capability.

Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."
Fig 11 :66: "Isolation is not removal of the habitat. It is substitution of one habitat for another."
Fig 11 :40: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."
Fig 11 :61: "The seat's power is asymmetric. Introduction is available; exclusion is not."

This is the sharpest figure bearing on the question. The experiment is a substituted habitat. If the system evolves only when the harness supplies purified components, the result demonstrates that the wiring works and says nothing about whether prebiotic chemistry could have produced that system. You can add a component; you cannot subtract the prebiotic habitat from the claim. "Capability is a property of agent-and-habitat, never of the agent alone" (Fig 11 :39).

The world sources agree from a different direction. The protocell survey records: "Although a functional protocell that evolves has not yet been achieved in a laboratory setting, the goal to understand the process appears possible." And on plausibility constraints: "net fatty acid synthesis would not yield sufficient concentrations for spontaneous membrane formation without significant evaporation of Earth's aqueous environments" (Cohen et al. 2022, as reported there). A result that works because the lab evaporated the pool is a harness result.

**Refuter (falsifies F5):** demonstrate transfer of the evolved function from the substituted habitat to a plausibly constituted habitat without import, with the ground measured in both. If it transfers, the harness was an instrument rather than a substitution and F5 is withdrawn for that case. Single-source for the figure line (Fig 11 :70), corroborated by two low-overlap world sources.

### F6: Unbundle the union; the compound needs its own loop and its own ground.

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
Fig 9 :57-58: "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."
Fig 9 :26: "R's own predicates name the habitat that holds φ*"
Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit"

Run a plausibility loop and an evolvability loop, describe each residual in effect terms first, and only then look for a frame. The intersect case (plausible **and** evolving) is not "more of the same"; it is a third object. This is why the answer is a design and not a trade-off curve.

The Library of Babel essay names the same failure in search terms: "Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually." That is corroboration from human search practice, a field with low overlap withEither origin-of-life chemistry or the figures.

**Refuter (falsifies F6):** show that one loop and one ground close both conditions at once, so the intersection has no residual of its own. Until then F6 stands. Single-source for the figure rule (Fig 9 :54-58); the essay is corroboration, not a second figure.

### F7: Two low-overlap frames range against the ground separately.

Fig 2 :45: "Frames range against the ground. They do not negotiate with it."
Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."
Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool"
Fig 2 :42: "Buy independence in proportion to the cost of being wrong."
Fig 8 :29: "low overlap: B does not draw on A's evidence"
Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

The chemistry frame and the evolution frame must be built so that neither draws on the other's evidence pool. Agreement between them is then corroboration at maximum independence. If the same lab, the same dataset and the same author supply both, their agreement is one pool talking. Many experiments are variation between rooms; the ground, not a vote, selects among them.

**Refuter (falsifies F7):** produce two checks whose agreement is demonstrably independent while drawing on one evidence pool, and show the independence measure is unaffected. By Fig 2 :31-32 that is not possible by construction, so F7 is a structural rule. Triangulated: Fig 2 :35/:40/:45 plus Fig 8 :29 plus Fig 7 :35 (three figures, low overlap between them).

### F8: The middle link is where the design usually breaks.

Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."
Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."
Fig 3 :29-30: "ask which link it currently stops at, and whether the answer was measured or assumed."

Most effort in prebiotic experiment design lands on the measurable links: precursor synthesis, yield, product identity. The link "what would count as a complete evolving system here" has no cheap instrument and is therefore assumed. Optimising yield cannot rescue a missing evolvability objective.

The Tacit Knowledge essay gives the corresponding method: "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." Before showing anyone a design, write down what would be observed if it worked.

**Refuter (falsifies F8):** exhibit a program where the evolvability objective has a calibrated instrument and the yield does not, and show that effort on yield still fails to rescue it. That would invert the dependency claim and send us back to the census. Single-source for the figure rule (Fig 3 :19/:27).

### F9: Settling is necessary and not sufficient; a growing literature is not a growing reach.

Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom"
Fig 5 :69-70: "settling is necessary for a term to be composed over, and it is not sufficient."
Fig 1 :24-26: "coverage, and compression achieved", "predicates minted, and credibility accrued", "They are frame-internal."

A reaction that has been reproduced is settled at the chemistry level. That does not make it composable into an evolving system; whether it composes is a fact about arrangement, not about what it paid. Counting papers, pathways or published yields is counting the denominator.

**Refuter (falsifies F9):** show a settled molecule that cannot serve as an atom at the next level, or conversely that every settled reaction is automatically composable. Both are live empirical questions. The figure asserts only the structural distinction. Triangulated: Fig 12 :104 plus Fig 5 :69-70 plus Fig 1 :24-26.

### F10: The sought-for shape is a preference until it is bound as an ordinary term.

Fig 9 :32: "you get a kind of thing, never the answer itself"
Fig 5 :62-63: "A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term. It is not bound, it predicts nothing, and it accrues no residual."
Fig 13 :133: "what it returns is a shape rather than a name."

The design shape written in §0 is bound here so it can be refused. Without that binding, every check would run on the mechanism (yields, conditions) and none on the direction of the question (are we even trying to build an evolving system?). This is the exception that makes the pre-registered refuter possible.

**Refuter (falsifies F10):** show a mechanism-only check that can detect a wrong direction of the question without a bound prediction. By Fig 5 :62-68 it cannot; this is a limit, not a step. Triangulated: Fig 5 :62-68 plus Fig 9 :32 plus the formula's "Direction" section.

---

## 4. Pre-registered refuter (written before the conclusion)

Required by the Seat Map :287: "And a falsifier written before the run is a design instrument, not only an honesty device." The shape claim of §6 is refuted if any of the following holds:

1. **A scalar exists.** A single score is exhibited that preserves both per-slot signals with no netting out (kills F1).
2. **Plausibility is the verdict.** A case is shown where establishing plausibility settles system completeness without a generational measurement (kills F2).
3. **Transfer without import.** An evolved function transfers from the substituted lab habitat to a plausibly constituted habitat with the ground measured in both, and no engineer-supplied component remains (kills F5 for that case; weakens F4).
4. **The union collapses.** One loop and one ground close both conditions, so the intersection has no residual of its own (kills F6).
5. **A seventh primitive is required.** Evolvability cannot be expressed as an arrangement of the admitted primitives and requires a new primitive, not a sourced import (kills F3).

If any fires, the design shape is withdrawn or revised in this file with the correction left visible. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Strains, re-census and canonical usage check

### Strain S1: Fig 13's six terms versus chemical species

Fig 13's six terms are space, time, energy, spectrum, gradient, network. They are not feedstocks. Applying "the set is closed" to a list of prebiotically available molecules would be a category error.

**Re-census.** F3 invokes only the **formal** property Fig 13 demonstrates: a generating set that composition cannot enlarge, with arrangements that do not run out, and derived properties that are not members. That property is stated in the metalaw reading as domain-agnostic: the same rules at every stratum, only actors, currency and anchor change. Chemical species are the actors at this stratum; the closed/open-set law governs the arrangement. After the re-census the strain is dissolved, not smoothed. The specific six are **not** asserted for chemistry.

### Strain S2: "substitution" in Fig 11 versus an ordinary lab control

Fig 11 :66 says isolation is substitution of a habitat, not removal of one. A critic could say every experiment is a substituted habitat and the line therefore says nothing.

**Re-census.** The figure's claim is asymmetric: "Introduction is available; exclusion is not." The relevant difference is not "lab versus field" but "which actors did the seat add that the residual's habitat did not contain". A control that changes temperature is a condition, not an introduced actor. A purification step that supplies an enantiopure template that no plausible route supplies is an introduced actor. After re-census, Fig 11 :70 bears exactly on the latter and not the former. Strain dissolved by narrowing the predicate.

### Canonical usage check

Two sources govern how the figures may be used and were read after the first four sections:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo"; "a reading that makes one contradict another has misidentified its domain, not found a flaw"; and the framework returns "what a missing thing would have to look like (a shape, not a name)", then "stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest." "Indiscernibility is not identity."
- `THE_SEAT_MAP_Field_Guide_amended.md`: ignorance is load-bearing; "A verifier that can reconstruct the claim cannot verify it"; "High correlation is disqualifying for a verdict and efficient for a convention"; "an interest in the outcome is unavoidable, an interest in the reading is disqualifying."

### Retraction and confirmation log

| earlier reading | status after the canonical check |
|---|---|
| F1 called "decisive against a scalar" | **Confirmed, with narrowing.** The figures bar aggregation of per-slot residuals. They do not bar a budget weight used only to allocate experimental effort; that is a filter, and Fig 9 :60 permits filters for the budget. |
| "Plausibility cannot be named" | **Never asserted; explicitly refused.** Naming which feedstocks are plausible is a binding from the chemistry frame, allowed with provenance. The forbidden move is treating the binding as a derivation of evolvability. |
| "Inward must succeed" in F4 | **Retracted to a design order.** Fig 6 :29 names refinement-forever as a real failure mode. F4 says try inward first and measure; it does not promise success. |
| F5 "proves wiring, not capability" | **Canonically confirmed and narrowed.** Fig 11 :70 is exact. S2 narrows "substitution" to introduced actors, not all laboratory conditions. |
| Fig 13 applied to chemical species | **Retracted as a category error.** S1 re-census keeps only the formal closed-set law. No claim is made that the six are chemical species. |
| "Shape, not a name" used to ban naming a structure | **Corrected.** The README governs a *missing* primitive. Here we name no missing primitive; we narrow the design shape. The correction is preserved in `05_what_shape_means.md` §6. |
| Apparent Fig 13 versus F4 strain | **Not strained after re-census.** Fig 13 governs the closure of kinds; F4 governs which instrument to try first. Different quantities. |

---

## 6. Recommendation

1. **State two residuals, not one score.** Per-slot: measured plausibility of feedstocks and conditions; measured heritable variation and selection response. Keep them in separate columns of the lab notebook and separate panels of the paper (F1, Fig 1 :19/:22).
2. **Treat plausibility as an admissibility filter on which systems are tried, and never as evidence that a system evolves** (F2, Fig 9 :60). Record the source for each admitted feedstock.
3. **Try to reach evolvability by rearranging admitted primitives before importing engineered components** (F3, F4). Where an import is unavoidable, give it a source gate, a shadow test, and a debit against independence (Fig 6 :24, Fig 8 :12-13).
4. **Report the habitat.** List the introduced actors explicitly and state which ones a plausible habitat does not supply (F5, Fig 11 :61). A result that depends on them is a wiring result.
5. **Run two low-overlap checks and select between experiments, do not average them** (F6, F7). Use different labs, different datasets or different instruments so independence is real rather than asserted.
6. **Bind the design shape and publish the refuter before the run** (F10, §4). Ask reviewers what would count as failure before showing them the design.
7. **Offer the method, not the conclusion.** Fig 4 :22: "Only methods cross up. Only head starts come down." The protocol is the portable object.

---

## 7. Canonical usage check on the verdict and honest stop

The verdict is `general` on the design shape and `specified` on the five predictions in §4. It is a candidate, not accepted. Fig 13 :134: "Unreachable is a verdict here, not a silence," and :135: "It cannot say which primitive is missing, because naming it would mean already holding it." The figures give the shape of the design; they do not pick the feedstock, the setting or the organism. That is the ground's work, and no measurement in this folder performs it.

Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." The round-trip gap for this condensation is computed in `11_audit.md`. It is nonzero, and it is recorded rather than assumed away.
