# Figure-grounded audit: which local rules produce robust collective behavior

**Mode of this document: `specified` on the structural shape, `general` on the reframe of what the question is asking.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** The Recursive Self-Improvement Trap (essay, 2026-11-19) states that LLM output simulates an approximate answer and that *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §7.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, cited as `Fig N :line`), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, the eight essays, and eight public reference pages actually fetched on 2026-11-22. Full provenance in `10_source_ledger.csv`.

---

## 0. The residual, in effect terms

When a fixed local rule set is run from different initial conditions, some rule sets converge to the same macro pattern and others yield different patterns, noise, or divergence. The question asks for the class of local rules whose macro outcome is invariant to initial conditions. The unexplained effect is this: there is no general, context-free characterization of that class. The public statistical-physics reference is explicit that *"to date there is no known set of general characteristics that guarantee a system will display SOC"* and that the *"question of whether it is possible to derive a general rule for determining if an arbitrary algorithm displays SOC"* is unresolved (Wikipedia, Self-organized criticality, 2026).

What an answer would look like, bound as an ordinary term before the run (formula "Direction"): a claim of the form "rules with structural property P, in habitat H, give macro invariance to initial conditions I", with P stated as a shape, the habitat enumerated, and a refuter written in advance. Without binding that shape, the frame's preference for a favorite rule type is invisible to its own checks (Fig 5 :62 to :63: *"Every check above runs on the MECHANISM and none runs on the DIRECTION OF THE QUESTION"*).

Five-line proposal header (seat reasoning, required before any test or proposal):

```
DECIDES:    If the figures yield a shape for robustness -> answer with the shape and a refuter;
            if they yield no line after re-census -> report gap. A = B? No: a shape constrains
            candidate rule classes, a name picks one. The question asks for types (names), so
            the answer must say what a name would require (Fig 9 :32).
HOURS:      This simulated derivation is one agent pass across 12 artifacts; the cost of being
            wrong is bounded by the refuter and is undone by a corrected packet, not by a
            ground reading (Fig 12 :126-127: bits and actions are two currencies).
PRIOR CASE: Fig 11 :39-40, capability is agent-and-habitat; SOC reference page, no general
            rule guaranteeing criticality. Same residual shape: robustness is relational.
ANALOGUE:   Ant foraging: simple local rules plus pheromone feedback give a collective decision
            (Wikipedia, Swarm behaviour, 2026). Actors = ants and trails, currency = pheromone,
            anchor = the food source actually found. The rule does not carry robustness alone.
LIMIT:      At 10^6 agents / one year of lifetime, does the cost stay flat? Only if the verdict
            is kept per slot and per domain (Fig 1 :19) and never averaged over initial
            conditions or over rule classes.
```

---

## 1. DOMAIN CENSUS (written before any figure line was chosen)

### a. R by arity, symmetry, scale (Fig 9 :22, *"arity · symmetry · scale"*)

- **Arity.** The residual is a map from (local rule class × habitat/coupling × initial condition) to (macro pattern). It relates at least three things, so a single-cause answer is already the wrong shape. Arity three or more.
- **Symmetry.** Robustness *is* an invariance: under permutation of the initial condition, the macro outcome is unchanged. Multiple initial conditions that yield one macro pattern are *"two reads of one event"* in the sense of Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence."* They are one report wearing many starting states.
- **Scale.** Step (one agent update) to cycle (local feedback loop) to level (macro pattern) to lineage (if the agents adapt). Fig 11 :36: *"Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran."* Adaptation adds a lineage scale, so the nonadaptive and adaptive cases must be separated.

### b. One line per domain: actors / currency / anchor

No nameable anchor means it is not a domain yet. All four below have one.

- **Domain 1, the local rule (micro).** Actors: agents, neighborhoods, the rule as a state-to-action map. Currency: per-slot residuals R and state updates. Anchor: the rule's measured behavior under a run, not its elegance. *"The residual is indexed by object slot, not aggregated."* (Fig 1 :19)
- **Domain 2, the macro pattern (selection).** Actors: attractors, order parameters, basins. Currency: stability and persistence. Anchor: the macro configuration the ground returns. *"Selection between rooms is where the ground votes."* (Fig 7 :35)
- **Domain 3, the initial conditions and habitat.** Actors: initial configurations, coupling topology, perturbations. Currency: variation across starting states. Anchor: the invariant that survives ground contact. *"The habitat is enumerated, never composed."* (Fig 11 :43)
- **Domain 4, the verification and modelling frame.** Actors: researchers, simulations, reviewers. Currency: agreement and residual. Anchor: the ground, never agreement. *"Frames range against the ground. They do not negotiate with it."* (Fig 2 :45)

### c. Partition or union?

Union, not partition. The question bundles two conditions: (i) does local interaction produce order at all, and (ii) is that order invariant to initial conditions. Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Their overlap is a compound with its own loop and its own ground. The public resilience-engineering reference makes the same cut from outside the framework: it *"focuses on understanding how complex adaptive systems cope when encountering a surprise"* and contrasts resilience with *"robustness, which is the ability of a system to deal effectively with potential challenges that were anticipated in advance."* Initial-condition variation is anticipated, so the question's word "robust" is the right one; the unanticipated case is a different compound.

### d. Order by dependency (Fig 3)

Perception (measure the macro pattern) to vocabulary (terms for what a rule affords) to objective (say what "invariant to initial conditions" counts as, in its own terms) to planning (search rule classes) to learn and carry (verified robust classes). Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* The middle link, vocabulary to objective, is where this question is weakest: there is no standard instrument that reads initial-condition invariance per slot and returns a single number without throwing the signal away (Fig 1 :28).

---

## 2. Figure census (bearing before verdict)

| figure | bearing on this question | verdict |
|---|---|---|
| 1 The Agent | per-slot residual, never aggregated | measure invariance per agent and per initial condition, not as one average |
| 2 The Ground | anchor must not update; correlation disqualifies | macro invariance is decided by measurement, not by agreement among modellers |
| 3 Dependency Chain | objective link is uninstrumented | the robustness metric is the likely break, not the rule search |
| 4 The Membrane | same loop at one or a thousand agents | a local rule is the loop at one scale; scale invariance is structural |
| 5 Mint Pipeline | guards and the shape-not-a-name limit | the sought-for rule class is a preference until bound and refuted |
| 6 Closure / Reachability | import moves the wall; instruments improved from worse ones | a rule class absent from Γ is owed an import, not more composing |
| 7 Room Chain | variation inside, selection between | rule variants are variation; the ground selects the robust one |
| 8 Union Surplus | no proof of absence; independence decides | failure to find a class is not proof none exists |
| 9 Leave / Arrive | union unbundling; describe before looking | split order formation from order invariance |
| 10 Ground Maintainer | verifier non-access; bring the residual | send the shape and refuter, not the full model |
| 11 The Habitat | capability is agent-and-habitat; no standing good actor | robustness is relational; valence is relative to the residual |
| 12 The Bond | cycle sign closes or not; catalyst, functional group, isomer | the structural shape of a robust rule is a closing loop that survives its use |
| 13 Minimum Viable Set | remainder compounding gives chaos | amplifying remainders produce sensitivity to initial conditions |
| Operators table | ⋛ is a threshold comparison; a goal is a comparison | a local rule with a tolerance is a comparison bond |
| Symbols table | R is the aim, per slot; the ground is the anchor | no R is stated in the question as posed |

Strained readings are named in §4, not smoothed over.

---

## 3. Findings, per domain, with verbatim quotes and refuters

### F1 : Reframe: robustness is a property of rule and habitat, not of a rule type (Domain 1)

Fig 4 :19 to :20: *"Only the actors, the currency and the anchor change."* and *"whether one agent is running it or a thousand"*. The kernel, the same loop and the same naming rule, does not change with size.

Fig 11 :39: *"capability is a property of agent-and-habitat, never of the agent alone"*. Fig 11 :40: *"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."*

So the question as posed, "which types of local rules produce robustness", splits into a rule and the habitat it runs in. There is no rule-type answer independent of coupling, topology, and the family of initial conditions. The public CAS reference agrees from outside: *"Complex adaptive systems feature a high degree of adaptive capacity, giving them resilience in the face of perturbation."* (Wikipedia, Complex adaptive system, 2026). And the swarm reference: swarming is *"an emergent behaviour arising from simple rules that are followed by individuals and does not involve any central coordination."* The rules are simple; the robustness is in the rule-plus-habitat.

**Mode: `general` (structural). Triangulated:** Fig 4 (membrane, scale invariance) and Fig 11 (habitat, capability), two figures with different subject matter and low overlap.

**Refuter:** exhibit a local rule whose macro invariance holds in every habitat and coupling tested, independent of the environment. That would break Fig 11 :39 to :40 and collapse the reframe.

### F2 : The question is a union compound; unbundle before searching (Domain 1 and Domain 3)

Fig 9 :4 to :5: *"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."* Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*

If different rule types work on different initial-condition subsets, there is no single class to name. The compound is (a) does order form, and (b) is it initial-condition invariant. The Library of Babel essay gives the same instruction in prose: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually to find their answers and then combine them in a satisfactory way."*

**Mode: `specified` (the split is a claim about this question). Single-source in the figures (Fig 9), corroborated by the resilience-engineering distinction between anticipated robustness and unanticipated resilience.**

**Refuter:** show that the two conditions always have the same answer over the rule space, so that no rule forms order without being initial-condition invariant, and vice versa. Then the union is a partition and the split was wrong.

### F3 : The structural shape of robustness: closing loops and per-slot settling (Domain 3)

Fig 12 :121: *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."* The sign that closes is the damping, opposing sign; the sign that runs away does not close. Fig 12 :119: *"catalyst. A part that survives its own use."* A maintained regulator survives repeated use; a spent one does not.

Fig 13 :31 to :32: *"a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise."* Sensitivity to initial conditions is what an amplifying remainder does. A rule that damps its per-slot remainder rather than amplifying it is the shape that gives invariance.

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :28: *"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."* Robustness must be measured per slot and per initial condition. An average over starting states hides the subset on which the rule fails.

The boids reference gives the world-side instance: the three local rules are *"Move in the same direction as their neighbours / Remain close to their neighbours / Avoid collisions with their neighbours"* and starlings follow a *"topological, rather than a metric, rule"* (Wikipedia, Swarm behaviour, 2026). The name "negative feedback" is a binding from the CAS frame onto the figure's *"sign of the loop"*, not a figure-given name.

**Mode: `specified`, not `grounded`. Triangulated:** Fig 12 (bond structures) and Fig 13 (remainder and chaos) and Fig 1 (per-slot residual), three figures with low overlap.

**Refuter:** exhibit a rule with no closing or damping loop and no per-slot residual settling whose macro pattern is invariant to initial conditions in a system with a genuinely amplifying remainder. Or show that an amplifying remainder can still yield macro invariance. Either breaks the shape.

### F4 : The verdict is the ground's, not the community's (Domain 2 and Domain 4)

Fig 7 :35: *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool"*.

A list of rule types that researchers find pleasing is a convention, not corroboration (Seat Map :163, quoted in README). The attractor reference is the world-side statement of the anchor: *"an attractor is a set of states toward which a system tends to evolve, for a wide variety of starting conditions of the system. System values that get close enough to the attractor values remain close even if slightly disturbed."* (Wikipedia, Attractor, 2026). That is an effect definition of the very invariance being asked about, and it is settled by measurement, not by agreement. The same page notes the failure mode: some initial conditions *"may lie in a different basin of attraction and map asymptotically into a different attractor"*, which is the F2 union in another vocabulary.

**Mode: `general` (verification rule). Triangulated:** Fig 7 and Fig 2, plus the seat map.

**Refuter:** a demonstration that two modeller frames with zero shared evidence and no ground reading can settle which rule class is robust by agreement alone. That would break Fig 2 :35 and :40.

### F5 : A shape, not a name; no standing list of good rules (Domain 1 and Domain 3)

Fig 9 :32: *"you get a kind of thing, never the answer itself"*. Fig 11 :51: *"No standing list of good actors survives a change of residual."* Fig 13 :134: *"Unreachable is a verdict here, not a silence"*. Fig 13 :115: *"The set is closed. The arrangements are not. That gap is why import exists."*

The framework can return the shape of a robust rule (closing loop, per-slot damping, maintained regulator). It cannot, from the figures alone, name the universally best rule type. Naming "negative feedback", "majority rule", or "topological alignment" is a binding from the CAS frame onto an atom held elsewhere, licensed only by ground settlement or by a provenanced import with a shadow test (Fig 6 :23). The No Free Lunch reference states the same limit mathematically: *"any two algorithms are equivalent when their performance is averaged across all possible problems"* (Wikipedia, No free lunch in search and optimization, 2026). Canalisation adds the conditional form: *"it is always necessary to specify which trait is canalised (robust) to which perturbations."*

**Mode: `general` (limit) plus `specified` (the particular bindings are ungrounded). Triangulated:** Fig 9, Fig 11, Fig 13.

**Refuter:** derive a single rule type from the figures that dominates all habitats and all residuals, or exhibit a standing list of robust local rules that survives a change of residual. Either breaks the shape-not-a-name limit.

### F6 : Search discipline when no class closes the residual (Domain 4)

Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

If no rule class in the current closure settles the question, the three questions are SEARCHED (is it in here and unfound, distributing independent searchers), INWARD (extend the instrument that already returns something, here the per-slot invariance metric), and OUTWARD (import from a frame whose closure differs; the SOC, attractor, and canalisation references are such frames). Ranking rules by elegance or by how often they appear in textbooks is a filter for the budget, never a witness for the verdict. Fig 7 :13: *"agreement compounds, evidence does not"*.

**Mode: `general`. Triangulated:** Fig 8 and Fig 9 and Fig 4.

**Refuter:** show that the closure is sealed and exhaustively searched, so that absence of a rule class is proof of absence. The figures forbid a sealed frame, so this refuter is expected to fail, which is why the verdict stays `candidate` rather than `gap`.

### F7 : The dependency chain breaks at the objective, not at the rule search (Domain 4)

Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

The link from vocabulary to objective, saying what counts as initial-condition invariance per slot, has no standard instrument. Most effort in this question would land in rule search (upstream of the break), where measurements already exist, exactly as Fig 3 :29 to :30 warns. The honest first move is to build or sharpen the invariance instrument from one already returning something (Fig 6 :32: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."*).

**Mode: `specified`. Single-source (Fig 3), corroborated by the resilience-engineering literature's reliance on incident analysis rather than a priori hazard lists.**

**Refuter:** produce a calibrated, per-slot instrument that already returns a graded invariance signal across initial conditions and show it is the rule search, not the objective, that limits progress. Then F7 is retracted.

### F8 : What survives, with mode attached

| claim | mode | figure |
|---|---|---|
| Robustness is a property of rule and habitat, not of a rule alone | `general` (structural) | Fig 11 :39 to :40, Fig 4 :19 to :20 |
| The question bundles two conditions and must be unbundled | `specified` | Fig 9 :4 to :5, :55 |
| Robust macro behavior has the shape of a closing loop and per-slot remainder damping | `specified`, ungrounded | Fig 12 :121, Fig 13 :31 to :32, Fig 1 :19 |
| The selector is the ground, not agreement among modellers | `general` | Fig 7 :35, Fig 2 :35, :40 |
| No standing list of robust rule types survives a change of residual | `general` (limit) | Fig 9 :32, Fig 11 :51 |
| Naming a specific type (negative feedback, majority rule) is a binding, not a derivation | `specified`, ungrounded | Fig 6 :23, Fig 8 :50 to :52 |
| The objective link is the likely break | `specified`, unmeasured | Fig 3 :19, :27 |

---

## 4. Strain test and re-census

Two readings initially strained and were re-censed rather than smoothed:

1. **Cycle sign mapped to positive or negative feedback.** Fig 12 :121 governs the sign of a composition loop, not a CAS control-theory label. Re-census: the figure governs the formal closure condition; the CAS reading (damping versus amplifying) is an analogue at a different stratum, corroborated by the attractor and swarm references. It is recorded as a binding with mode `specified`, not as a figure-given name. No strain remains after the re-census, but the name is not claimed as derived.
2. **Room selection mapped to rule-class search.** Fig 7 concerns handoffs between rooms. Re-census: the figure is domain-agnostic (Fig 4 :19 to :20, only actors, currency and anchor change), so the same selection structure applies to rule variants as variation. No strain remains.

After re-census: no live figure-to-figure strain. The two honest gaps are the uninstrumented objective (F7) and the unproven binding of a name to the shape (F5). Both are recorded, not hidden.

---

## 5. Pre-registered refuter (written before the conclusion)

Required before any outreach. Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."*

The shape claim is refuted if any of the following holds:

1. A local rule is exhibited whose macro outcome is invariant to initial conditions in a system with no closing or damping loop and with a genuinely amplifying per-slot remainder. (Breaks F3.)
2. A rule type is shown to be robust in every habitat and coupling tested, independent of contact. (Breaks F1.)
3. A standing list of robust local rules is exhibited that survives a change of residual. (Breaks F5.)
4. Macro invariance is established by agreement among frames sharing one evidence pool, with no ground measurement. (Breaks F4.)
5. A calibrated per-slot invariance instrument exists and the binding constraint is shown to be rule search, not the objective link. (Breaks F7; actually falsifies this audit's diagnosis rather than the whole shape.)

If any of 1 to 4 fires, the shape claim is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 6. Recommendation

1. Lead with F1 and F3, the reframe and the shape, and keep the question's demand for "types" answered as a shape plus the conditions under which a name is licensed.
2. Unbundle F2 before searching. Ask the two questions separately.
3. Build the objective instrument first (F7). Without it, rule-class comparisons are averages over the very signal being sought.
4. Measure per slot and per initial condition (Fig 1 :19, :28). Never report a single robustness score without its per-subset distribution.
5. Send the generator, the shape and its refuter, not a list of favorite rules. Fig 4 :22: *"Only methods cross up. Only head starts come down."*

---

## 7. Canonical usage check and retraction log

Two local sources were read after the first sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo"*; *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; the framework reports *"what a missing thing would have to look like (a shape, not a name)"*, stops at the limit of the instruments, and records the lineage so the stop is honest; *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule, per-slot residual, the three questions of step 7, and the habitat rule *"Enumerate, never compose."*

### Retractions and confirmations of my own readings

| earlier reading in this audit | status after the canonical check |
|---|---|
| Initial draft treated "which rule types" as answerable by a list | **Retracted.** The figures return a shape, not a name (Fig 9 :32); a list is a convention unless grounded. Kept visible here. |
| Initial draft named "negative feedback" as the figure's answer | **Retracted to a binding.** Fig 12 :121 gives the closing-loop shape; CAS gives the name. A name needs ground settlement or a provenanced import. |
| Initial census had one domain for "local rules" | **Corrected to a union** of order formation and order invariance, with rule, habitat, and initial conditions as separate domains. The correction produced F2 and F7. |
| "No general rule" from the SOC reference was read as a conflict with the figures | **Not a conflict.** Re-census: the figures also withhold a name (Fig 9 :32, Fig 11 :51). The reference corroborates the limit; it does not overrule it. |
| Fig 12 cycle sign and Fig 7 rooms seemed strained when mapped to CAS | **Not strained after re-census.** Different strata, same rules; see §4. Both readings retained with mode attached. |
| The resilience-engineering robustness/resilience distinction | **Confirmed and used.** Initial-condition variation is anticipated, so "robust" is the correct word; unanticipated surprise is a separate compound. |
| Fig 1 :28 aggregation warning read as only about agents | **Broadened.** It governs any averaging that discards per-slot signal, including averaging over initial conditions. Kept as F3/F5 support. |

### Round trip note

The condensation used in the outreach packet is: "robustness needs closing loops, per-slot damping, and a ground-measured invariance metric; no rule type is named by the framework." The round trip back to the concrete question drops three things: the habitat dependence (F1), the union split (F2), and the shape-not-a-name limit (F5). `11_audit.md` records the gap as a nonzero `R_T`.

---

## 8. Honest stop

**Unreached, not unreachable.** The answer stops at the limit of the available instruments: there is no calibrated per-slot invariance metric in this simulated run and no ground reading of any rule class. The framework returns the shape any robust-rule candidate must have, the refuters written in advance, and the import frames that already hold parts of the answer. It does not settle which rules are robust. *"A search that finds nothing is never a proof of absence"* (Fig 8 :39), so this is a `candidate` result, not a `gap` verdict. The lineage is recorded so a later reader can locate the error rather than only feel it.
