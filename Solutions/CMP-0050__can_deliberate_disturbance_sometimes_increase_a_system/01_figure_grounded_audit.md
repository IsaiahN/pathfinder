# Figure-grounded audit: CMP-0050, deliberate disturbance and long-term resilience

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, read 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too (intelligence is essentially arrangement). However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the resilience question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) − o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the system's belief about its habitat, formed from its own history and inherited priors.
- **a** is the deliberate disturbance, an action applied by a seat or manager inside or outside the system.
- **Γ(b,a)** is what the system's library predicts will happen under that disturbance.
- **o′** is what the habitat actually returns: state after the perturbation, recovery time, survival, function retained.
- **s** is the system or patch. R is indexed by slot and by time, never aggregated into a landscape average.

> Fig 1 :19 "The residual is indexed by object slot, not aggregated."
> Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."

The phenomenon to explain is not whether a disturbance moves R at all. It is why an intervention of a given class leaves the ground reachable and R small for a long run in some slots, and fails in others. State the residual as: *why would applying a deliberate perturbation at time t leave a per-slot residual smaller, or the channel to the ground more reachable, at time t+n than in an otherwise similar control that did not receive it, and how could an outside observer tell the difference without already believing the answer?* This is an effect description. It names no theory, no "adaptive cycle", no "intermediate disturbance", no "response diversity". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a conjunction of conditions under which an introduction changes contact and moves the reach outward, plus an instrument that discriminates a genuine increase in resilience from a changed reading. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names candidates directly: *"A measurement, an experiment, a counter, a market, a patient outcome."* A controlled experiment, or a naturally occurring perturbation treated as one, is a nameable anchor here. So this is a well-formed question, not yet a `gap`. But the word "resilience" is itself a bundle, and that is the first finding.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a relation among the system library Γ, the disturbance action a, and the habitat return o′, indexed by slot s and ordered by time t. It has at least three operands and an ordering, so it carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) and a **comparison** bond for "increase" (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87). It is not symmetric: applying then reversing a disturbance does not restore the prior state.
- **Symmetry.** "More resilient" is a threshold relative to a control and a baseline, not an absolute quantity (Fig 12 :85-89; Operators table :46-51). The disturbance and the recovery are not interchangeable operands.
- **Scale.** The disturbance is applied at one scale, but contact cascades across scales. Fig 11 :52 names the pattern: *"Scoping the habitat to direct contact is how DDT reached the eagles"*, a first-order enumeration with the residual three steps out. Walker et al. 2004 (opened, see ledger) call the cross-scale case **panarchy**. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and the transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The disturbed system loop** | the system, its Γ, the disturbance action a, the monitored slot | residual reduction per slot, return time | yes: measured state before/after against a control | admitted |
| **D2 The habitat and field of contact** | actors, conditions, relations in contact with R, the introduced actor | contact, cascade, survival, identity retained | yes: the ground that settles and does not update (Fig 11 :73); experiment and control | admitted |
| **D3 The reach and closure** | atoms and bonds, imports from a differing closure | reach, |φ| cost, what can be composed | yes: settlement, *"then check it against the ground, then carry it up"* (Fig 5 :32) | admitted |
| **D4 The measurement channel and verifier** | instruments, metrics, the control, the outside frame | contact with the ground | yes: the anchor, which must not update when pushed (Fig 2 :29-30) | admitted |
| **X1 "Resilience" as one scalar carried by the system** | none nameable | a single score | **no**: a scalar conflates resistance, recovery, reorganization, latitude and panarchy | not a domain yet, split, see F6 |
| **X2 "Disturbance" as intrinsically good** | none | novelty | **no**: valence is relative to the residual (Fig 11 :49) | not a domain, dissolved into D2 |

X1 fails the anchor test and is therefore split before any figure line is applied to it. X2 has no anchor independent of the residual, so it is dissolved. These are structural exclusions, not claims that disturbance never helps.

### 1.3 Partition or union

D1 and D2 overlap: the disturbance is applied inside a habitat whose contact it changes. D3 and D4 overlap: the instrument changes what can be admitted to the library. The whole question is a **union, not a partition**.

> Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."
> Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
> Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

The unbundled conditions are: (C1) the introduction changes contact and its cascade is enumerated; (C2) the reach is renewed through contact with a closure that differs, and the gain is measured by a source-discriminating instrument. A system failing only C1 and a system failing only C2 are not different degrees of one failure; they are different compounds and need different instruments. *The Library of Babel* states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually to find their answers and then combine them in a satisfactory way."*

### 1.4 Dependency order (Fig 3)

> Fig 3 :20 "The chain is ordered by dependency, not by importance."
> Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at."
> Fig 3 :29 "Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."

Order for this question: 1 perception (can the system or observer read o′ under disturbance?) → 2 vocabulary (are there terms for what the disturbance affords and what would count as more resilient?) → 3 objective (state the comparison ⋛ and the control) → 4 planning (choose the disturbance and the design) → 5 learn and carry (name what worked, verify, carry). The middle link is the one with no instrument. Fig 12 :113-115 says a vocabulary holding only ingredients can say what a situation contains and cannot say what would count as getting somewhere from it. Most diagnostic effort lands above the break because that is where the measurements already exist (Fig 3 :29-30). Walker et al. 2004 make the same point in resilience language: *"Different management interventions would be required to enhance resilience for each of these."*

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not whether disturbance helps |
| 2 The Ground | experiment named as anchor; independence vs common pool | governs the test, not the intervention |
| 3 Dependency Chain | middle link breaks first; effort above the break wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs scale transfer and the harvest of a test |
| 5 Mint Pipeline | curiosity manufactures a gradient; own output not a measure | governs the deliberate disturbance as an action |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs renewal of reach (C2) |
| 7 Room Chain | differing rooms vs chain of mirrors; two-factor progress | governs long-term as a sequence, not one shock |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and source rules |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; keep anchor reachable | governs quick loss and verifier independence |
| 11 The Habitat | introduction available, exclusion not; contact cascades; ecosystem engineering | **decisive for D2, the intervention half** |
| 12 The Bond | isomer, catalyst, cycle, two currencies | governs structure and the cost of testing |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | honest stop only, see strain S1 |

Strain test applied during this census: an early attempt to apply Fig 13's six physical substrate terms directly to "ecological resilience" (calling latitude a spectrum and a disturbance regime an energy gradient) only fit by renaming ecological quantities as physical states. That is a strain, so Fig 13 does **not** govern the intervention. It is sent to the honest-stop role only (section 7, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about resilience and disturbance, `grounded` only if settled by a controlled measurement. None is `grounded`.

### F1: A disturbance that does not change contact changes nothing

**Mode: `specified`. Domains D1, D2. Status: triangulated (Fig 11 and Fig 4, low overlap: habitat vs membrane).**

> Fig 11 :39 "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."
> Fig 11 :40 "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."
> Fig 4 :20 "Only the actors, the currency and the anchor change."

A deliberate disturbance is an action on the system. If it leaves the system's contact with the paying habitat unchanged, the figure says it changes nothing about capability, however impressive the intervention looks. This is the necessary condition and the primary refuter. The tempting answer, "disturbance builds strength the way exercise builds muscle", is an agent-only improvement in figure terms; it is not licensed unless contact changes.

**Refuter:** a controlled comparison in which a deliberate disturbance leaves all measured contact variables (ground payment, habitat relations, cascading actors) unchanged yet the long-term per-slot residual is durably smaller across several handoffs. If it survives, F1 is false at this stratum.

**World bearing (secondary only):** Walker, Holling, Carpenter and Kinzig 2004 define *"Adaptability is the capacity of actors in a system to influence resilience. In a SES, this amounts to the capacity of humans to manage resilience."* That is the same seat, stated in resilience language, and it **corroborates** F1. It shares the resilience research pool with the other resilience sources, so it is one witness, not several (Fig 2 :31).

### F2: The disturbance is an introduction, and the seat's power is asymmetric

**Mode: `specified`. Domain D2. Status: triangulated (Fig 11 :61 and Fig 11 :65, same figure but distinct claims, plus the opened Wikipedia record of Jones et al. 1994 as a low-overlap secondary).**

> Fig 11 :61 "The seat's power is asymmetric. Introduction is available; exclusion is not."
> Fig 11 :63 "Which is why a managed ecosystem is permanent work rather than a solved state."
> Fig 11 :65 "Introducing an actor for its cascade is ecosystem engineering, after Jones, Lawton and Shachak, 1994. Cane toads and kudzu are the same move with the cascade unenumerated."

The figure itself names the domain. A manager can add a disturbance regime, an actor, a pulse of fire or a pulse of grazing. The manager cannot subtract the habitat, because contact is a fact about the world. So a deliberate disturbance is never a one-off fix; it is permanent work, and the same move that helps (introducing a low-severity fire regime) can harm when the cascade is unenumerated (cane toads, kudzu). This is the structural reason the answer is **sometimes** and not **always**.

**Refuter:** a documented case in which a deliberately introduced disturbance reliably increased long-term resilience with no further management and no second-order cascade anywhere in a well-enumerated habitat. That would break the asymmetry and F2 with it.

**World bearing:** the opened Wikipedia record for ecosystem engineering states *"An ecosystem engineer is any species that creates, significantly modifies, maintains or destroys a habitat"* and records that kudzu, introduced to the southeast US, *"changes the distribution and number of animal and bird species in the areas it invades. It also crowds out native plant species."* This corroborates both halves of Fig 11 :65. Hamilton and Burton 2023 (opened via Zenodo) report that *"Historically, both grassland and forest ecosystems experienced high-frequency, low-severity fire regimes. Since European settlement and introduction of livestock grazing and fire exclusion, trees have encroached on grasslands"* and that *"External factors - particularly past heavy livestock grazing and fire suppression - have caused ecosystem precariousness that can be addressed with management actions."* Here the exclusion of disturbance created precariousness and reintroduction is the available remedy. That is Fig 11 :61 observed in a forest-grassland mosaic. Overlap: Hamilton and Burton share the resilience-theory frame but not the strategy or cognition pools, so it is a distinct witness for the mechanism.

### F3: Contact cascades, so an unenumerated cascade turns a remedy into a cane toad

**Mode: `specified`. Domain D2. Status: triangulated (Fig 11 :52 and Hamilton and Burton's bistable states, low topical overlap).**

> Fig 11 :43 "The habitat is enumerated, never composed."
> Fig 11 :52 "Scoping the habitat to direct contact is how DDT reached the eagles"
> Fig 11 :73 "The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."

The residual that matters can be three steps out from the point of intervention. A test that measures only the direct effect of a disturbance has scoped the habitat to first-order contact and will report a success while the second-order and third-order effects accumulate. The habitat updates; the ground settles. So the enumeration must include what contacts the introduced actor, and outward until the cascade stops mattering.

**Refuter:** a deliberate disturbance whose full cascade is enumerated in advance and that produces no off-target effect at any distance in a habitat subsequently shown to be well enumerated. If that is generally the case, F3 weakens to `general`.

**World bearing:** Hamilton and Burton 2023 report *"Evidence supports the concept of mutually exclusive fire-reinforced bi-stable grassland and forest states"*, that is, multiple basins whose identity is reinforced by the disturbance regime itself. MathisonSlee et al. 2022 add that *"Cross-scale interactions critically determine the form of the subsequent adaptive cycle at any one focal scale"* (as reported in the opened page). Both corroborate the cascade requirement without sharing the management strategy pool.

### F4: Renewal needs a differing closure; repeating the same disturbance is motion, not progress

**Mode: `specified`. Domain D3. Status: triangulated (Fig 6, Fig 7 and Fig 8, distinct roles).**

> Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."
> Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."
> Fig 7 :36 "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."
> Fig 7 :32 "→ one long room: motion, no progress"

A system can repeat the same prescribed burn, the same stress test, the same disturbance protocol forever and never add an atom. Long-term resilience is a chain of rooms that each differ from the last and are selected against the residual the last one surfaced. Fig 7 :37-39 gives the two-factor form: *"Progress per handoff has two factors. Zero either and the chain runs in place:"*, *"the bracket's fidelity across the handoff"* and *"the ground's pressure on the room"*. Zero either and the chain runs in place.

**Refuter:** a system that renews its reach and keeps R small across two decades by repeating an identical disturbance with no new atom entering from a differing closure. That breaks idempotence (Fig 8 :32) and the mirror-chain rule (Fig 7 :36) together.

**World bearing:** Walker et al. 2004 describe the release and reorganization phases of the adaptive cycle as a time *"during which, innovation and new opportunities are possible"*. MathisonSlee et al. 2022 report a *"rigidity trap, where a system stuck in one phase of the adaptive cycle becomes highly connected, rigid, and inflexible. System capacity for novelty is diminished, leading to a decrease in adaptive responses to shocks"*, and note that *"the release and reorganization phase is a natural part of an ecosystem often hampered by policies and management in the context of forest fire management"*. Fire suppression is the authored room that stops travelling. Both corroborate F4. They share the resilience pool with F1, so they do not multiply the witness count.

### F5: A deliberate disturbance manufactures a gradient when nothing is scoring, but its own output is not a measure of success

**Mode: `specified`. Domains D1, D4. Status: triangulated (Fig 5 and Fig 1, low overlap: mint pipeline vs metric disqualification).**

> Fig 5 :46 "When nothing is scoring, the drive manufactures a gradient."
> Fig 5 :47 "So a system that starts with nothing can still be shaped, by seeking the gap that is large and compressible, which is the same quantity the acceptance test scores."
> Fig 5 :48 "Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."
> Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces."

A deliberate disturbance is a manufactured gradient. That licenses trying it, especially when nothing else is producing a residual. It does not license calling the result a success. The system that designed the disturbance also generated the metric that celebrates it, which is the frame-internal error of Fig 1 :27.

**Refuter:** a disturbance whose success is established solely by the instrument that motivated it, with no independent ground and no control. Under Fig 5 :48 and Fig 1 :27 that is not a result; if the field treats it as one, F5 is falsified as a description of practice.

**World bearing:** Aslan et al. 2024 (opened via the Northern Arizona University record) write that *"resilience in literature is often treated as an abstract concept, with widely varying definitions. Achieving common and reliable resilience metrics that cross systems and contexts remains elusive."* They add that *"The power of meta-analysis in this arena remains limited due to few quantitative studies that test individual variables."* This corroborates the measurement half of F5 from a different field and evidence pool (meta-analysis of disturbance resilience studies).

### F6: "Resilience" is a union and must be unbundled before a lever is chosen

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 9 and Walker et al. 2004, framework and ecology, low topical overlap).**

> Fig 9 :4 "First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset,"
> Fig 9 :5 "are not one hard question but several well-formed ones. Split it rather than search."

Walker et al. 2004 define resilience as *"the capacity of a system to absorb disturbance and reorganize while undergoing change so as to still retain essentially the same function, structure, identity, and feedbacks"* and immediately give it four components: *"latitude, resistance, precariousness, and panarchy"*, adding that *"Different management interventions would be required to enhance resilience for each of these."* Aslan et al. 2024 report widely varying definitions and elusive metrics. So "increase resilience" is not one quantity. A disturbance can increase recovery speed while decreasing latitude, or increase resistance while increasing precariousness. The question must be split before a lever is chosen. Fig 9 :57 (quoted in section 1.3) governs.

**Refuter:** a single intervention that restores all components of resilience in both failure types and leaves no categorically different residue. That would collapse the union into a partition and falsify F6.

**Conflict handling:** Walker et al. also write that *"resilience is not always a good thing. Sometimes change is desirable, generally at larger scales, and then effective management requires overcoming the resilience in the system to precipitate changes at these scales."* Read literally, that seems to conflict with "increase resilience". Per the conflict rule, this was returned to the census, not used to flip a verdict. Re-census: CMP-0050 asks about a specific residual and a desired configuration; increasing the resilience of an undesirable basin is the wrong target, and the shape now carries "which basin and which component" as a condition. No contradiction remains (see re-census R1 in section 7).

### F7: The test needs an anchor that does not update, and independent frames

**Mode: `general` with a `specified` consequence for this field. Domain D4. Status: triangulated (Fig 2 and Fig 9, anchor rule vs budget/witness rule).**

> Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
> Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you."
> Fig 2 :42 "Buy independence in proportion to the cost of being wrong."
> Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

If the "resilience score" moves when the manager pushes on it, it is not an anchor (Fig 2 :30 *"you push on it, it is not an anchor."*). A meta-analysis that aggregates studies sharing the same definitions and the same datasets is one witness wearing many names (Fig 2 :31). The anchor here is a real outcome: survival, return time, identity retained, measured against a control that did not receive the disturbance.

**Refuter:** a claimed resilience gain that is visible only in a metric the manager produced, or a set of confirming studies all drawing on one evidence pool with no low-overlap frame. Either breaks F7.

**World bearing:** Aslan et al. 2024 corroborate the need for individual-variable tests with their finding that *"dispersal and connectivity as well as nutrients and chemistry emerged as significantly predictive of resilience, whereas animal communities and ecological functions were significant indicators of resilience."* Note the predictive/indicator distinction: an indicator is a reading, a predictor is closer to a source. This is the Fig 2 anchor distinction in ecological clothing.

### F8: The instrument must discriminate sources, not just readings

**Mode: `general` for the method, `specified` for the claim that a source discriminator is currently missing. Domains D1, D4. Status: triangulated (Fig 6 :34 and the opened source essay, plus Hamilton and Burton's natural experiment).**

> Fig 6 :34 "Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."

The essay *The Hard Problem is About Source*, read directly, states the error: *"the instrument is speaking only about what it measured, it cannot comment on the source"* and *"If several paths create the same behavior, then behavior is a projection with lossy information"*. A shorter return time can come from a genuine increase in resilience, from a changed reading, from a shift in which basin the system occupies, or from luck. The reading does not determine the source. The essay adds: *"The answer is unreached until a better instrument exists."* Hamilton and Burton 2023 supply a real instance of such an instrument arriving: *"we treated the wildfire event as a natural experiment, sampling post-wildfire plant species composition and soil moisture"*. A naturally occurring perturbation with before and after measurements is a source-discriminating arrangement, not an argument.

**Refuter:** a proposed test under which a genuine resilience gain and a changed reading are indistinguishable and no better instrument can be built or found. If such an instrument is later arrived at and the two separate, F8's current `specified` gap is closed rather than falsified; if they never separate because they are the same thing, the shape is wrong.

### F9: A synthetic test proves wiring, not capability

**Mode: `specified`. Domain D4. Status: triangulated (Fig 11 and Fig 4).**

> Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."
> Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

A model-only or lab-only demonstration of "disturbance increased resilience" substitutes a habitat for the real one. It proves that the designed mechanism works under the reproduced conditions, and inherits the new habitat's actors, which were not chosen. The round-trip gap R_T between the synthetic result and the field result must be measured, not assumed zero.

**Refuter:** a synthetic resilience test whose result transfers unchanged to the real habitat with all relevant actors and cascades reproduced and measured. If that happens generally, F9 is false.

### F10: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per system or patch, never a landscape average | general | Fig 1 :19, :22 | figure-derived |
| An experiment or measurement is the anchor, not agreement | general | Fig 2 :29, :35 | figure-derived |
| A disturbance that does not change contact changes nothing | specified | Fig 11 :39, :40 | triangulated F1 |
| Introduction is available, exclusion is not; it is permanent work | specified | Fig 11 :61, :63, :65 | triangulated F2 |
| The cascade must be enumerated to the third step | specified | Fig 11 :43, :52 | triangulated F3 |
| Renewal needs a differing closure; identical repetitions are motion | specified | Fig 6 :23; Fig 8 :32; Fig 7 :36 | triangulated F4 |
| A manufactured gradient is not a measure of its own success | specified | Fig 5 :46, :48; Fig 1 :27 | triangulated F5 |
| "Resilience" is a union and must be split before testing | general | Fig 9 :4, :5, :57 | triangulated F6 |
| The instrument must discriminate sources | general | Fig 6 :34; source essay | triangulated F8 |
| A synthetic test proves wiring, not capability | specified | Fig 11 :70; Fig 4 :30 | triangulated F9 |
| Which disturbance and which metric actually work here | not stated | none | gap: framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A deliberate disturbance leaves measured contact unchanged yet produces a durable, per-slot reduction in R against a control across multiple handoffs (breaks F1, Fig 11 :39-40).
2. A disturbance reliably increases long-term resilience with no second-order cascade anywhere in a well-enumerated habitat (breaks F2 and F3, Fig 11 :52, :65).
3. A system renews its reach and keeps R small across two decades by repeating an identical disturbance with no import from a differing closure (breaks F4, Fig 8 :32, Fig 7 :36).
4. A single intervention restores all components of resilience in both failure types and leaves no categorically different residue (breaks F6, Fig 9 :57).
5. The claimed improvement is visible only in a metric that moves when the manager pushes on it, or all confirming studies share one evidence pool (breaks F7, Fig 2 :29-30, :31).
6. The proposed instrument cannot distinguish a genuine resilience gain from a changed reading and no better instrument is arrived at (breaks F8, Fig 6 :34).
7. Fig 8's idempotence fails inside a closed set, or Fig 11's introduction/exclusion asymmetry fails (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a control-backed field measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory that disturbance is good (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Split "resilience" into its components and name which component is being increased, per slot, against a control (Fig 9 :5; Walker et al. 2004).
3. Enumerate the habitat and the cascade before the introduction. Treat the intervention as permanent work, not a solved state (Fig 11 :43, :61-65).
4. Prefer a naturally occurring perturbation with before and after measurements, or a controlled experiment, over a synthetic harness (Fig 11 :70; Hamilton and Burton 2023).
5. Record the bond as well as the atoms: two systems with the same species and the same disturbance can be isomers if the cascade arrangement differs (Fig 12 :117).
6. Use the resilience literature as one corroborating witness and a budget filter, never as the verdict. Walker, MathisonSlee and Aslan overlap in the resilience pool (Fig 2 :31, :40).
7. Stop at the shape. Do not name which disturbance or which metric is the right one for a system you have not enumerated (Fig 9 :32, *"you get a kind of thing, never the answer itself"*).
8. Offer the formula as a method after a verdict is recorded. Each user writes their own refuter and states their own mode (Fig 4 :22).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and the three essays *The Library of Babel*, *The Recursive Self-Improvement Trap* and *The Hard Problem is About Source* (all fetched 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. This governs section 5's stop.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Draft answered "yes, disturbance increases resilience" as a general verdict | **Retracted, narrowed to `specified`** | Fig 9 :32 returns a kind of thing, not a name; the mode rule forbids a verdict without a ground |
| Treated "resilience" as one measurable quantity | **Retracted, split (F6)** | Fig 9 :4-5 and Walker et al. 2004 four components. A scalar conflates distinct compounds |
| Attempted to apply Fig 13's six physical terms to ecological resilience | **Retracted, strain S1** | Only fit by renaming ecological quantities as physical states. Fig 13 now governs only the honest stop |
| Used the Intermediate Disturbance Hypothesis as a direct world witness | **Narrowed, then dropped** | Diversity is not resilience. The primary was not opened this session, so no substantive quote is used |
| Called Jones, Lawton and Shachak 1994 an opened primary | **Corrected** | The primary was not opened. The Wikipedia record was opened and is used as the secondary; Fig 11 :65 is the primary authority inside this framework |
| Read Walker et al.'s "resilience is not always a good thing" as a conflict | **Conflict, re-census R1** | Re-mapped to "which basin and which component". Verdict unchanged, see F6 |
| Wanted to call F1 a `general` law about all disturbances | **Narrowed to `specified`** | No control-backed measurement pays for the general claim here |
| Planned to name prescribed fire as the answer | **Retracted at record level** | A name where the framework returns a shape; prescribed fire is one binding, provenance owed |
| F3 "cascade unenumerated" as a moral failing | **Narrowed to a structural condition** | Valence is relative to the residual (Fig 11 :49); no standing list of good disturbances survives a change of residual |

**Strains sent to the log:** S1 (Fig 13 applied to ecological resilience), resolved by re-census; S2 (calling the habitat "the ground" while the habitat plainly updates), resolved by Fig 11 :73; S3 (treating Fig 7 :26, *"progress per handoff: R = h² × S"*, as a calibrated equation with measurable h² and S), resolved by reading it as a product structure in `specified` mode, not a formula to fit; S4 (the apparent Walker conflict), resolved by re-census R1. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :4-5, :54-57 plus the Library of Babel bundle passage: it is a union of an intervention condition and a measurement condition, each with its own instrument.
2. **What is the anchor?** A controlled experiment or a natural experiment, named in Fig 2 :29. Not manager agreement, not a resilience score that moves when pushed.
3. **Can the disturbance help at all?** Only if it changes contact (Fig 11 :39-40) and is an introduction whose cascade is enumerated (Fig 11 :61-65, :52).
4. **Why only sometimes?** Introduction is available and exclusion is not (Fig 11 :61); the same move with an unenumerated cascade is kudzu (Fig 11 :65); repeating the same closure adds no atom (Fig 8 :32); the resilience literature reports non-monotonic effects (MathisonSlee et al. 2022, inverted U-shaped diversity-resilience relation).
5. **What makes it long-term?** A chain of differing rooms selected against the surfaced residual (Fig 7 :36), with bracket fidelity and ground pressure both nonzero (Fig 7 :37-39).
6. **How is it tested?** Split the components, measure per slot against a control, discriminate sources with an instrument that arrived from somewhere real (Fig 6 :34; the source essay; Hamilton and Burton's natural experiment), and never let a shared pool hand you a verdict (Fig 9 :60).
7. **What can be said at the stop?** A shape and seven falsifiers. Not which disturbance, not which metric, not a `grounded` answer. Fig 13 :134 *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39 *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **a deliberate disturbance can increase long-term resilience only when it is an introduction that changes contact, whose cascade is enumerated outward through the habitat, and whose repetition is replaced by contact with closures that differ; even then the gain is a union of distinct components with distinct instruments, and it is established only by a control-backed, source-discriminating measurement, not by the metric that motivated the intervention.** The verdict is kept separate per domain, never averaged. Mode `specified`. No world source flipped a verdict; the one genuine apparent conflict (Walker's "resilience is not always good") was returned to the census and re-mapped. No unresolved strain remains after re-census. Which particular disturbance and which particular metric work in a given habitat is a `gap`, not a hidden answer: the framework returns a shape, and the discriminating instrument is not held here.
