# Figure-grounded audit: displacement effects in intervention design

**Mode of this document: `specified` on the structural findings, `general` on the shape of a method, not `grounded`.** It states what an instrument would have to measure. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status: a simulated derivation, not a ground reading.** *The Recursive Self-Improvement Trap* calls LLM output "simulacra" and says "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figures), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual, stated in effect terms

The question asks how designers can anticipate that "reducing one risk shifts it elsewhere in the system."

Stated as an effect rather than a metaphor: an intervention acts at a target slot s. A measurement at s reports success. A residual R remains live at some other slot s', reached through the system's contacts and relations, and possibly at s'' three steps out. The residual was not destroyed; its reading at s fell while the reading at s' rose or stayed live. What failed to resolve is not the target risk but the **per-slot distribution of the residual after the lever fired**.

- **Arity.** At least two slots plus a connecting relation. The effect is a relation between slots, not a property of the target slot. Cascades can raise the arity above two.
- **Symmetry.** "Risk" is not a property carried by an actor. Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries." A lever that is a benefactor at one residual is a malfactor at another. The relation displacement is not symmetric in general: the receiving slot is often a different class of actor from the target slot.
- **Scale.** Local intervention at s versus system-level cascade. Fig 11 :52 "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out." The figures contain a displacement example verbatim, which is the strongest single governing line for this question.

**What an answer would look like (binding the sought-for shape as an ordinary term, Formula "Direction").** Not a catalogue of named side effects. A method constrained to: keep R per slot; enumerate contacts outward until the cascade stops; treat valence as residual-relative; range each reading against an anchor that does not update on the intervention's own success report; and report an unreached receiving slot as a verdict rather than as silence. The method returns a **shape**, not a name (Fig 9 :32 "you get a kind of thing, never the answer itself"). It cannot return "the displacement will be X at slot Y" without a ground reading.

---

## 1. Domain census before choosing any figure line

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D1 Intervention design frame | designers, target variable, lever, success metric | fall in measured R at the target slot | the measured outcome at s, **but this updates on the frame's own report and is therefore not yet an anchor** (Fig 2 :29-30, :33-34) | local control; cannot settle displacement alone |
| D2 Habitat / adaptive system frame | actors, conditions, relations (Fig 11 :45-47), the network (Fig 13 :23-24), adaptive agents | contact and cascade; behaviour change | an independent reading at receiving slots, which does not move when designers change their report | union compound; the domain that carries displacement |
| D3 Measurement / verification frame | instruments, monitored slots, unmonitored slots | per-slot residual readings | independent ground readings at several slots (Fig 2 :29) | verdict domain; agreement inside one closure is not evidence |

**Partition or union.** This is a **union compound**, not a partition. Fig 9 :54-55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." Reducing the target risk clears the region where only D1 binds. It leaves standing the intersections where D2 (cascade, adaptation) or D3 (pooled measurement) also binds. Fig 9 :57 "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound." Each intersection has its own loop and its own verdict. Verdicts are kept separate and never averaged.

**Dependency order (Fig 3).** Fig 3 :20 "The chain is ordered by dependency, not by importance." The order is: (1) perception, can we see which slots carry R; (2) vocabulary, do we have terms for contact, bond, cascade and route (Fig 12 :111 "A vocabulary without bonds can name a state and cannot name a route to one"); (3) objective, what counts as "risk reduced", which is a comparison and therefore a goal (Operators table :52 "a goal is a comparison, which is why a vocabulary without it cannot state one"); (4) planning, the intervention route; (5) learn and carry. Fig 3 :19 "Optimising a link that already works cannot rescue one that does not." Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." The middle link, having terms for what the situation affords and being able to say what counts as progress, is the one that usually breaks in intervention design: teams have a metric for the target risk but no term for the route by which it moves.

**Strain test applied before concluding.** An early reading tried to make Fig 13 :74 "Everything else is a composition across the two kinds, never within one" govern the displacement of risk directly. That strains. Re-census: Fig 13 governs composition of the six-term substrate; displacement is a contact cascading through a habitat (Fig 11), not a composition of states and structures. Fig 13 is therefore not used as a direct governor of F2. The line that governs displacement is Fig 11 :52. Strains that survived re-census are named in section 7, not hidden.

---

## 2. Figure census (verbatim, quoted before concluding)

| figure | bearing on this residual | verdict |
|---|---|---|
| 1 The Agent | R per object slot; aggregation hides the live slot | governing for F1 |
| 2 The Ground | anchor must not update; triangulation not negotiation | governing for F4 |
| 3 Dependency Chain | order by dependency; the unmeasured middle link | governing for F8 |
| 4 The Membrane | methods cross up, recordings come down; round-trip gap | distribution and audit only, not a verdict here |
| 5 Mint Pipeline | a gate is not the ground; novelty relative to atoms | no mint is claimed, so inertness finding is not triggered |
| 6 Closure / Reachability | import is the only operator that moves the wall | governing for F6 |
| 7 Room Chain | same closure handed along; agreement compounds, evidence does not | governing for F7 |
| 8 Union Surplus | no search adds an atom; no search finding nothing proves absence; residual first, frame second | governing for F6 and F7 |
| 9 Leave / Arrive | union versus partition; describe the effect before choosing a frame; a kind of thing, never the answer | governing for union reading, F6 and the gap |
| 10 Ground Maintainer | ground does not decay, channel does; pooled readings; bring a characterised residual | governing for F4 |
| 11 The Habitat | enumerate the habitat outward; contact cascades; valence relative to residual; introduction available, exclusion not | primary governor for F2, F3 and F5 |
| 12 The Bond | bonds carry the route; the arrangement is the substance | governing for F5 and F8 |
| 13 Minimum Viable Set | the set is closed, arrangements are not | governing for F5 only, after re-census |
| Operators table | a goal is a comparison | governing for F8 |
| Symbols table | R is a slice per slot; the ground is the anchor | supports F1 and F4 |

---

## 3. Findings

### F1 — Aggregation is how a displacement disappears (decisive, general)

Fig 1 :19 "The residual is indexed by object slot, not aggregated."
Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."
Fig 1 :13 "a global R near zero with one live slot residual is a legal state"
Fig 10 :26 "saturated metrics, pooled readings"

If the intervention reports a single net risk score, the fall at s and the rise at s' cancel in the number that gets reported. The framework explicitly says this is a legal state, so it is not a measurement anomaly; it is the default failure of an aggregated success metric. This finding is `general` and structural. It does not say which slot carries the live residual, only that a single aggregated reading cannot tell you.

**Refuter.** An instrument that records R separately at every slot in the enumerated habitat, over a time window long enough to include delays, and returns no positive residual at any receiving slot while the intervention is active. If that instrument exists and fires, aggregation is not the mechanism here. This refuter needs an instrument, not an argument.

### F2 — Enumerate contacts outward; the residual that matters is three steps out (specified)

Fig 11 :43 "The habitat is enumerated, never composed."
Fig 11 :44 "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."
Fig 11 :52 "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."
Fig 11 :48 "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."

This is the governing finding. The figures give a literal displacement case, with the order of the effect named: first-order enumeration, second-order effect, third-order residual. A designer who enumerates only direct stakeholders has scoped the habitat to first contact and has by construction missed the residual that mattered in the canonical case. The list is read off the world, not composed from a theory of what should matter, so a "stakeholder map" assembled from the design team's own categories is an authored habitat and fails the rule.

Triangulation: Fig 11 :44 (enumeration rule) and Fig 11 :52 (cascade case) are two low-overlap passages in the same figure; the world source Segovia-Martin, Creutzig and Winters 2023 supplies an independent cross-domain model with the same shape (see `09_watson_answer.md`). Verdict `triangulated`, still `specified` because no receiving slot in a real intervention was measured here.

**Refuter.** A design case where the cascade demonstrably stops at first contact, with an instrument at second and third contact that would have registered a residual and did not. Note Fig 8 :39 "So a search that finds nothing is never a proof of absence." So the refuter is only valid if the zero is instrumented, not merely unfound.

### F3 — There is no standing list of safe interventions (general)

Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries."
Fig 11 :50 "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."
Fig 11 :51 "No standing list of good actors survives a change of residual."

A displacement is often produced by the adaptive response of actors to the lever, not by the physical lever itself. Because valence is relative to the residual, a lever that is safe under one residual is not safe under another. So the anticipated displacement cannot be read off a classification of interventions as "low risk" or "high risk"; it must be re-derived per residual. The world literature calls the two named mechanisms risk compensation (Peltzman, Wilde, Adams) and perverse incentives (Merton, Siebert). Those are bindings from world frames, not names the figures derive. My first pass asserted them as figure-derived and that is retracted in section 8.

**Refuter.** An intervention whose valence stays benefactor across two materially different residuals, measured at the receiving slots in both cases. That would break the relativity claim.

### F4 — The intervention's own success metric is not an anchor (specified)

Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you."
Fig 2 :45 "Frames range against the ground. They do not negotiate with it."
Fig 10 :24 "the ground does not decay, the channel does"
Fig 10 :25 "stale percepts, dropped transients,"
Fig 10 :26 "saturated metrics, pooled readings"

A metric that falls because the designers decided the intervention worked, or because the reporting rule changed, moves when a frame pushes on it. Fig 2 :30 "If it moves when you push on it, it is not an anchor." It is panel 1 or panel 2 of Fig 2, not panel 3. To anticipate displacement you need readings at receiving slots from an instrument that does not update on the target-slot report. Without that, what looks like triangulation is one evidence pool talking.

Triangulation: Fig 2 :29/:35 (anchor and mirror) and Fig 10 :24-26 (channel decay) are different figures with different objects, so this is low overlap. Mode `specified`: the structural claim holds; which instrument counts as an anchor in a given intervention is not given.

**Refuter.** Show a success metric that changes when designers change their belief but still settles the question at receiving slots. If it does, it is an anchor by the figure's own definition and F4 is false for that case.

### F5 — Displacement is a re-arrangement of a closed set, not a subtraction (general)

Fig 13 :115 "The set is closed. The arrangements are not."
Fig 13 :116 "a new member would have to be a new kind, and composition only ever rearranges the kinds already held"
Fig 12 :94 "The arrangement is the substance."
Fig 11 :61 "The seat's power is asymmetric. Introduction is available; exclusion is not."
Fig 11 :62 "You can add an actor and you cannot subtract the habitat, because contact is a fact about"

Re-census note: Fig 13 governs the six-term substrate, not "risk" as a substance. The correct reading is about **contact**. You can introduce an actor into a habitat; you cannot subtract the habitat or the contacts that already hold, because contact is a fact about the world that does not consult the designer. So a lever that reduces risk at s does not delete risk from the system; it changes the arrangement of contacts and the residual appears at the receiving end of those contacts. The "reduction" is local. This is why displacement is the normal case and a clean global reduction is the one that owes an explanation.

The shape of the claim: over a fixed set of actors and relations, two intervention designs are Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." A change of bond, not a change of ingredients, is what relocates the residual. See `06_isomers_and_order.md`.

**Refuter.** A measured intervention in which total residual across all enumerated slots falls with no compensating rise at any second or third-order slot, no new actor introduced, and no change in contact. That would be genuine subtraction and would break the contact-asymmetry claim.

### F6 — Only a frame whose closure includes the receiving slots can predict them (specified)

Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."
Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."
Fig 8 :45 "Two frames together reach what neither reaches alone."
Fig 9 :27 "describe it before you go looking, or any frame you pick will seem to fit"

To anticipate a residual at s', the design frame needs a closure that already contains s'. If it does not, more deliberation inside the design frame "adds an atom" only by importing one from a frame that differs. Fig 6 :12-13 names the gates: "source gate: provenance" and "shadow test: explains a gap". Fig 9 :27-28 requires the residual to be described in effect terms **before** the frame is chosen, otherwise any frame picked will seem to fit. This is the mirror of the exemplar's apophenia finding: picking the literature first and then finding a displacement that resembles it manufactures agreement.

Order by dependency: describe R; ask which closure predicts its shape; import with provenance and a shadow test; debit the import against the source frame's independence (Fig 6 :24). A wrong atom costs more than starting from primitives.

**Refuter.** A within-closure instrument or model that predicts the shape of a previously unrepresented receiving slot without import, and whose success is not retrospective. That would break the closure claim for this domain.

### F7 — Finding nothing inside one closure is not proof of no displacement (general)

Fig 8 :39 "So a search that finds nothing is never a proof of absence."
Fig 9 :44 "Only a sealed room can be searched to the end, and no frame is a sealed room."
Fig 7 :13 "agreement compounds, evidence does not"
Fig 6 :49 "more of the space actually visited."

More monitoring with the same instrument visits more of the same closure (Fig 6 :49), which is Fig 7's mirror chain: "same closure, handed along". Agreement among similarly equipped monitors is one evidence pool talking, not two frames ranging against an anchor. So "we looked and found no side effects" is not a verdict of absence. It is an unreached result at this budget. Fig 8 :39 is a proved limit, not a pessimistic mood. "Unreachable is a verdict, not a silence."

**Refuter.** A sealed, fully enumerated habitat with a complete instrument at every slot, in which a complete search is possible. Fig 9 :44 says no frame is sealed, so this refuter is a structural impossibility rather than an experiment; that is recorded honestly rather than dressed up as a test.

### F8 — The middle link breaks when the team can name the target but not the route (general)

Fig 3 :25 "having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."
Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at."
Fig 12 :111 "A vocabulary without bonds can name a state and cannot name a route to one."
Operators table :52 "a goal is a comparison, which is why a vocabulary without it cannot state one"

Intervention teams normally have a well-instrumented target metric (perception works) and a well-practised delivery plan (planning works). What they often lack is the vocabulary that connects a change at s to a change at s': network, contact, cascade, bond, route. A list of ingredients can name the target state; it cannot name the route to a displaced state. And "reduce risk" is a comparison, a goal, which a vocabulary without the comparison operator cannot even state. Optimising the target metric (a link that already works) cannot rescue the missing objective link (Fig 3 :19).

**Refuter.** A design team that writes the displacement route in its own vocabulary before the intervention, instruments it, and is still surprised by the receiving slot. Then vocabulary is not the binding gap.

### F9 — Verdicts per domain, never averaged (general)

Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."
Fig 1 :19 "The residual is indexed by object slot, not aggregated."

D1 may be `specified` (the target metric fell), D2 may be `unreached` (the cascade at third contact was not instrumented), and D3 may be `gap` (no independent receiving-slot anchor exists). These stay separate. A composite "net risk reduction" score is a budget filter; it is not a witness for the verdict. Averaging across slots is the same error as F1 at the level of the report.

### F10 — What survives (retraction of named mechanisms)

The defensible residue, with mode attached:

| claim | mode | figure basis |
|---|---|---|
| Keep R per slot, never aggregate into a net score | `general` structural | Fig 1 :19, :22, Fig 10 :26 |
| Enumerate contacts outward until the cascade stops mattering | `specified`, falsifiable | Fig 11 :43, :44, :52 |
| Actor and lever valence are relative to the residual | `general` | Fig 11 :49-51 |
| Success metric must not update on the frame's own report | `specified` | Fig 2 :29, :35, Fig 10 :24-26 |
| Displacement re-arranges a closed set of contacts; nothing is subtracted | `general` | Fig 13 :115, Fig 12 :94, Fig 11 :61-62 |
| A frame without s' in its closure cannot predict s' without import | `specified` | Fig 6 :23, Fig 8 :32, :45 |
| Finding no side effect in one closure is not proof of absence | `general` | Fig 8 :39, Fig 9 :44 |
| Which slot, which magnitude, which named mechanism | `gap` | Fig 9 :32, Fig 13 :134 |

Retracted: the earlier attempt to name risk compensation, the cobra effect, carbon leakage and the rebound effect as things the figures derive. They are world bindings, provenanced as such in `09_watson_answer.md` section WORLD. The figures return a shape, not a name.

---

## 4. Pre-registered refuter (written before the conclusion)

Required by the seat rule: a falsifier written before the run is a design instrument. The shape claim in `07_the_tether_answer.md` is refuted if any of the following holds.

1. A complete per-slot enumeration out to third contact, with instruments that would have registered a residual, shows no live residual at any receiving slot after the intervention. (Breaks F1 and F2.)
2. A metric that demonstrably updates on the designers' own report is shown to still settle the receiving-slot question. (Breaks F4.)
3. A within-closure search is shown to be a sealed room, so finding nothing proves absence. (Breaks F7.)
4. A standing classification of interventions as safe keeps the same valence across two materially different residuals. (Breaks F3.)
5. A measured global fall in residual across all enumerated slots occurs with no re-arrangement of contact and no import of a new actor. (Breaks F5.)
6. A design team that has no vocabulary for cascade and route still anticipates the receiving slot reliably across repeated interventions. (Breaks F8.)

If any fires, the corresponding finding is withdrawn. Until one is run, none of this is `grounded`.

---

## 5. Recommendation

1. **Lead with the shape, not a catalogue.** Report that R must be kept per slot, enumerated outward, and ranged against a non-updating anchor. Do not report a list of named side effects as if derived.
2. **Fix the measurement first** (F1, F4). A single net score and an updating success metric destroy the signal before any anticipation method can use it.
3. **Replace the stakeholder map with an enumerated habitat** (F2). List actors, conditions and relations in contact with the residual, then what contacts those, outward until the cascade stops mattering. Mark what is not yet measurable as residual rather than as zero.
4. **Re-derive valence per residual** (F3). Do not reuse a prior safety classification.
5. **Import a differing closure with a source gate and a shadow test, in that order** (F6). Describe R in effect terms before picking the frame. Debit the import against the source's independence.
6. **Report unreached as a verdict** (F7). "We found no side effects" is not the same sentence as "we could not resolve the receiving slots".
7. **Send the generator, not the recording.** Fig 4 :22 "Only methods cross up. Only head starts come down." Fig 4 :25 "A recording carried upward looks like knowledge and is a description of one occasion." The method and its refuter travel; a list of past displacement cases does not.

---

## 6. Canonical usage check

Two local sources govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also "a reading that makes one contradict another has misidentified its domain, not found a flaw", and the limit that the framework returns "what a missing thing would have to look like (a shape, not a name)", then stops at the limit of the instruments and records the lineage. "Indiscernibility is not identity."
- `THE_FORMULA.md` step 7: SEARCHED, INWARD, OUTWARD are three questions, not one. SEARCHED is asked first because the other two assume its answer. INWARD and OUTWARD are opposed and never read against each other. Underivable-in-principle and unreachable-at-this-budget are different facts with different instructions.

Applied here: the question "which slot will carry the displacement" is SEARCHED first inside the design closure. If it is not there, INWARD asks for a better per-slot instrument and OUTWARD imports a frame whose closure contains the receiving slots. The universal method that guarantees complete enumeration is a `gap` of the shape-not-a-name kind, not a failure to search hard enough. This is recorded in `07` and `09`, not smoothed over.

---

## 7. Strains and re-census

| id | apparent conflict | re-census | status |
|---|---|---|---|
| S1 | Fig 11 :61 "exclusion is not" versus a designer who says they "reduced risk" | The substrate governed is habitat and contact, not a substance called risk. Risk relocates through contact; nothing is subtracted from the world. Different object. | dissolved by re-census, kept visible |
| S2 | Fig 8 :32 "no search, however long, adds an atom" versus the world claim that more monitoring finds more side effects | Fig 6 :49 distinguishes visiting more of a space from adding an atom. More of the same instrument is Fig 7's mirror chain. | dissolved by re-census |
| S3 | Fig 2 :35 "alignment is triangulation" versus participatory intervention design | Participation is efficient for a convention (Fig 2 :41) but is not triangulation unless participants range against an anchor that does not update on them. | live design tension, named, not resolved |
| S4 | "Risk" is a comparison (Operators :52) but is measured as a continuous quantity in the world | A threshold relation between two quantities and a scalar risk score are different objects at different levels. Which instrument discriminates them is an open question. | live type question, named |
| S5 | Fig 13 :74 cross-kind composition versus F2's contact cascade | Re-census: Fig 13 governs composition of the six-term substrate; Fig 11 governs habitat contact. Displacement is not a composition of states and structures. The line that strains was withdrawn. | dissolved, finding F5 narrowed to contact |

After re-census: S3 and S4 remain live and are named; none is hidden; no figure line was forced to fit.

---

## 8. Retraction and confirmation log

| earlier reading | status after canonical check |
|---|---|
| "Displacement is a direct state-state bond failure under Fig 13" | **Retracted.** Fig 13 governs the six-term substrate, not habitat contact. Re-census moved the governor to Fig 11 :52. |
| "Risk compensation, cobra effect, carbon leakage and rebound are figure-derived displacement types" | **Retracted.** They are world bindings from low-overlap fields. The figures return a shape, not a name (Fig 9 :32). They now appear only in section WORLD with provenance. |
| F1 called "aggregation hides displacement" | **Confirmed and narrowed.** Fig 1 :13 says the near-zero global with one live slot is a legal state, so this is structural, not an anomaly. |
| F7 "no side effects found proves nothing" | **Canonically confirmed.** Fig 8 :39 is a proved limit; Fig 9 :44 forbids the sealed room. |
| F6 "import a differing frame" | **Canonically confirmed with gates.** Fig 6 :12-13 adds source gate and shadow test; Fig 6 :24 debits independence. My first pass omitted both. |
| F3 "safe intervention list" | **Confirmed by re-census.** Fig 11 :51 is a structural refusal of a standing list, not a statistical claim that no such list works. |
| "The design team's stakeholder map is the habitat" | **Retracted.** Fig 11 :48 requires the list to be read off the world; a team-authored list is an authored room (Fig 10 :73). |
| Shape-not-a-name applied to mechanism names | **Narrowed.** The limit governs a primitive not held in Γ. Naming a mechanism from a world frame is a provenanced binding, not a forbidden invention and not a wall-moving import. Both readings are recorded. |

---

## 9. Gaps

No figure line returns: which slot will carry a displacement; the numerical magnitude; a universal procedure that guarantees the enumeration is complete; or a name for the mechanism in a given intervention. These are declared `gap` and `unreached`, of both the shape-not-a-name kind (Fig 9 :32) and the unreachable-at-this-budget kind (Fig 8 :39). "A search that finds nothing is never a proof of absence" is the honest stop, not an invitation to invent a universal checklist.
