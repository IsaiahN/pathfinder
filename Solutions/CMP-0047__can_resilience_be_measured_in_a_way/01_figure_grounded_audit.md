# Figure-grounded audit: can resilience measurement distinguish resistance from recovery?

**Mode of this document: `specified` on the separator shape, `general` on the structural non-additivity claim, `gap` on a universal index.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* states that LLMs can *"simulate an approximate answer/output with the formula"* but that *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** The 16 canonical framework files under `FRAMEWORK/`, read through `FRAMEWORK/reference/03-FIGURES_TEXT.md` and `FRAMEWORK/figures/THE_FORMULA.md` this session, plus the public web pages listed in `10_source_ledger.csv`. Every figure quote in this file, in `07` and in `09` was checked verbatim against the figure text by `Scripts/validate_solution.py`.

---

## 0. The residual in effect terms

The ordinary word "resilience" is a bundled term. Before choosing any figure line, the residual must be stated as an effect.

A system S holds a library Γ that predicts its own trajectory. A disturbance d arrives at time t₀. The observed trajectory o′ departs from prediction Γ(b,a). The gap is R = |Γ(b,a) - o′|, indexed per component slot s and per time t. It is never a single global number:

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)

Two readings of the same post-disturbance R trajectory are on the table:

| reading | effect it reports | candidate bond | anchor |
|---|---|---|---|
| Resistance | magnitude of the immediate departure at t₀+ | comparison ⋛ against a reference, an ordering question | the pre-disturbance reference state |
| Recovery / reorganization | shape of R across t₀ onward: return, new basin, or no resolution | sequence → over time, with a possible cycle | the same reference, plus which basin the system is in |

The question asks whether *one measurement* can keep these apart. So the residual is not "what is resilience" but "what does a measurement have to preserve so that a magnitude reading and a trajectory reading do not collapse into each other."

**Anchor check.** Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."** Fig 2 :36: **"An anchor is legitimate when the question is constitutively about it."** This question is constitutively about a measured response, so a measurement is the legitimate anchor. We have a domain, not yet a `gap`.

**Binding the sought-for shape before the run** (Formula, "Direction"): write down what an answer would look like and let it accrue a residual. The bound term B is: *a two-axis report in which a magnitude reading is taken at the disturbance and a trajectory reading is taken through the subsequent transient, with an explicit discriminator between same-basin return and basin change, and with the reading kept per slot.* If B fails to survive the figure census, that failure is recorded, not smoothed over.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale

- **Arity.** R is a relation among at least five operands: system slot s, predicted state Γ(b,a), observed state o′, disturbance d, and time t. A two-place reading (system, resilience score) loses the disturbance, the prediction and the time index, so it is rejected before any figure is consulted.
- **Symmetry.** Not symmetric. Swapping the magnitude reading with the trajectory reading changes the thing being measured. Fig 12 :30 defines sequence as **"A then B; B needs A to have happened"**, and the Operators table gives the test: *"swap them. Does it become a different thing? Yes."* Resistance is a comparison of two quantities (Operators table: *"a threshold relation between two quantities"*), not a conjunction. The two readings therefore carry different typed bonds, not different labels on one bond.
- **Scale.** The slot is a component, but "recovery" and "reorganization" are readable only across the time axis and against a stability landscape whose boundaries sit at the system or habitat scale. The measurement is intrinsically cross-scale, crossing the membrane described in Fig 4. Fig 4 :20: **"it or a thousand. Only the actors, the currency and the anchor change."** The kernel is the same loop; what changes between scales is the cast.

### 1.2 One line per domain: actors, currency, anchor

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Measured state trajectory | instrument, state variable, disturbance | R per slot per time | the observed trajectory and the pre-disturbance reference, a measurement (Fig 2 :29) | admitted |
| D2 Disturbance regime / habitat | perturbation, environment, neighbouring systems | contact and forcing magnitude | what the environment actually does; it does not update on the system's report | admitted |
| D3 Channel and instrument | sensor, metric, percept, readout | contact fidelity; failure modes *"saturated metrics, pooled readings"* | the ground, which persists while the channel does (Fig 10 :24) | admitted |
| D4 The two readings | magnitude/ordering and duration/pathway | two non-additive readings | the ground settles which reading bears on which decision | admitted |
| D5 Regime and basin structure | attractor, basin boundary, threshold | cycle closure versus basin change | which basin the system occupies, settleable by observation | admitted |
| X1 A universal resilience scalar as a property of the system alone | none nameable independent of D1 to D4 | a single number | none: a scalar that merges two non-additive readings has no independent ground | not a domain yet, absorbed into the D1+D3+D4 compound |
| X2 Resilience as a free-floating trait | an abstracted system | a score | self-report or behaviour, already inside D1 and D3 | absorbed |

"No nameable anchor means it is not a domain yet." X1 and X2 fail that test. They are not silently discarded; they are recorded as absorbed into a compound.

### 1.3 Partition or union

**Union, not partition.** D1 plus D3 (the measurement and its channel) and D4 plus D5 (the two readings and the regime structure) are two overlapping conditions. The overlap is real: the trajectory reading cannot be taken at all unless the channel stays in contact through the transient. That overlap is a compound with its own loop.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

So "measure resistance better" and "measure recovery better" are not two points on one dial. A lever that improves the resistance reading (for example, a faster, more saturated peak detector) can degrade the recovery reading by dropping the transient. This is the union signature, and it is why the question cannot be answered by choosing a single best metric.

### 1.4 Dependency order

Order by dependency, not importance (Fig 3): perception (tell the pre-disturbance state from what was there before, Fig 3 :5) → vocabulary (have terms for displacement and return) → objective (say what would count as recovery, that is, which reference and which basin) → planning (aim the instrument at the transient) → learn and carry (name what worked, verify it, carry it).

> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

The middle link, vocabulary to objective, is where this question lives. "Resilience" is an ingredient word with no bond typed between magnitude and duration. Fig 12 :111: **"A vocabulary without bonds can name a state and cannot name a route to one."** A system holding only the ingredient "resilience" can say what a disturbed situation contains and cannot say what would count as getting somewhere from it.

---

## 2. Figure census: quoted before concluding

Each line below was re-opened in `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session. The strain column is filled before any verdict is read off.

| figure | verbatim bearing | strain? |
|---|---|---|
| Fig 1 | residual per slot, do not aggregate, frame-internal scores disqualified | no |
| Fig 2 | measurement is a legitimate anchor; independence; agreement with a shared pool is worthless | no |
| Fig 3 | the objective link has no instrument and is where chains break | no if scoped to the objective link; yes if read as a claim about all measurement, re-census below |
| Fig 4 | methods cross scales, recordings do not; bracket the round trip | no |
| Fig 5 | support, reachability, novelty as a product; settling is not sufficiency | no |
| Fig 6 | instruments are improved from worse instruments already returning something | no |
| Fig 7 | agreement in a room is not a verdict | no |
| Fig 8 | no search proves absence; union surplus needs differing closures | no |
| Fig 9 | two readings in one bundle form a union; unbundle; filters are not witnesses | no |
| Fig 10 | the ground does not decay, the channel does; dropped transients; verifier non-access | no |
| Fig 11 | capability is agent-and-habitat; enumerate the habitat; valence is residual-relative | no, after re-census: habitat updates, ground settles |
| Fig 12 | sequence versus comparison; two currencies that do not add; cycle closure; isomer | no |
| Fig 13 | ordering is not duration; the set is closed, arrangements are not; unreachable is a verdict | no, after re-census: it governs the substrate distinction, not physical units only |
| Operators table | ⋛ is a threshold relation; → is ordered; ¬ is a refusal, not a bond | no |
| Symbols table | R is the aim and always a slice; the ground is the anchor | no |

---

## 3. Findings F1 to F9

### F1. The two readings are different bond types, not two labels on one scale (decisive for distinguishability)

> **"Space, time and energy are not three readings of one quantity. Neither are spectrum, gradient and network."** (Fig 13 :36)
> **"adjacency is not duration, an ordering is not a pathway, a pathway is not a direction."** (Fig 13 :36)
> **"A then B; B needs A to have happened"** (Fig 12 :30, sequence)
> **"a threshold relation between two quantities"** (Operators table, comparison ⋛)

Resistance asks *how much* the state moved: an ordering or magnitude, a comparison of the disturbed state against a reference. Recovery asks *what happened next and where it ended*: a duration and a pathway through time. The figure's own example is exact. Adjacency is not duration, and an ordering is not a pathway. If the two readings drew on the same underlying fact, one would be redundant rather than minimal (Fig 13 :37).

This is the direct answer to the "distinguishes" half of the question. The two effects are not the same quantity at two resolutions; they are two differently bonded quantities. Mode `general` for the structural claim, `specified` for the resilience application. Status **triangulated** (Fig 13 on the kind distinction and Fig 12 plus the Operators table on the bond distinction, two figure lines with low conceptual overlap).

**Refuter.** Show that the two readings are related by a deterministic one-to-one map across all disturbances and all component slots, so that carrying one carries the other with no loss. Then the bond-type distinction is nominal and F1 fails.

### F2. A single scalar that merges them is the named error

> **"A composition costs in two currencies, and they do not add."** (Fig 12 :125)
> **"Bits price the description. Actions price finding out whether it holds."** (Fig 12 :126)
> **"Neither figure predicts the other, so both are read or the choice is made blind."** (Fig 12 :129)
> **"Summing them into one figure is the error this names, not the fix for it. A price in bits and a price in actions are two readings, held apart."** (Fig 12 :130)

A one-number resilience index is a sum of two readings. The figure names that sum as the error, not the remedy. The parallel with Fig 9 is exact: a bundled problem is a union of overlapping conditions, and *"a case in two conditions is not a harder case of either"* (Fig 9 :57). The honest form is two readings reported side by side, each with its own anchor and its own failure mode.

Scope, stated carefully: the figures forbid *summing* two incommensurable readings into one figure. They do not forbid reporting two numbers in one table, and they do not forbid a decision rule that uses both readings. What they forbid is a single number that has discarded the distinction the decision needed. Mode `general` for the prohibition, `specified` for the resilience-index case. Status **triangulated** (Fig 12 plus Fig 9).

**Refuter.** Produce a scalar whose round-trip gap is zero against a ground on which both decisions (resist or prepare to recover) must be made and can conflict. If no information is lost, the prohibition does not bite and F2 is retracted.

### F3. The measurement must stay per slot

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

A resilience score averaged across components, replicates or time windows removes the very signal the question asks for. A lake can be highly resistant in one basin and collapse-prone in another; a forest species can be damage-resistant and recruitment-weak while another is the reverse (world corroboration, section 4). Averaging the two into one "ecosystem resilience" collapses them into the mean.

Status **single-source** on the figure side (Fig 1 is the only figure line that governs per-slot indexing). World sources corroborate, but corroboration from a different pool cannot promote a single-source figure verdict into a triangulated one. Mode `specified`.

**Refuter.** Show a case in which component-level readings, when averaged, preserve the decision-relevant signal that decides same-basin return versus basin change, and the per-component readings add nothing.

### F4. The channel, not the ground, is what fails in a resilience measurement

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"stale percepts, dropped transients, saturated metrics, pooled readings"** (Fig 10 :26)
> **"keep the anchor reachable"** (Fig 10 :29)

The resistance/recovery distinction lives in the transient immediately after disturbance. Each named channel failure deletes a different half of it:

- *dropped transients* deletes the recovery trajectory, leaving only the peak displacement;
- *saturated metrics* delete the magnitude of resistance, leaving only a capped reading;
- *pooled readings* delete per-slot structure (F3);
- *stale percepts* delete the reference the comparison is made against.

This is a measurement finding, not a complaint about instruments in general. It says which specific failure mode destroys which specific reading. Mode `specified`. Status **triangulated** (Fig 10 on channel failure and Fig 1 on the signal that is lost, low overlap between the ground-maintainer seat and the agent loop).

**Refuter.** Demonstrate an instrument for which none of the four named failures deletes either reading, with a record showing the transient and the reference at full resolution. That would not refute the figure line, which is about what loss does, but it would remove this as a live risk for the particular measurement.

### F5. This is reachable at the current budget: a proto-instrument already exists

> **"An instrument is not built from a description. It is improved from a worse instrument already returning something."** (Fig 6 :32)
> **"The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."** (Fig 6 :34)
> **"What is unavailable is a sensor for something that has never registered anywhere, at any resolution."** (Fig 6 :40)
> **"So a search that finds nothing is never a proof of absence."** (Fig 8 :39)

Return time, resistance magnitude, recovery rate and lag-1 autocorrelation are already returning something. They register the effect at some resolution and fail to resolve it fully (same basin versus different basin, and resistance versus recovery). By Fig 6 :32 the correct move is to improve those instruments from the residual they already produce, not to declare a `gap` and not to import a new primitive. By Fig 6 :40, this is not the unreachable-in-principle case: resilience has registered at many resolutions.

Status **triangulated** (Fig 6 and Fig 8, distinct roles: instrument improvement versus the absence proof). Mode `specified`.

**Refuter.** Show that every existing recovery-related reading fails to register at any resolution whatsoever, so there is no edge from which to improve an instrument. Then the question moves toward the unreachable-in-principle case and F5 is withdrawn.

### F6. Reorganization is a cycle-closure question, and regime shift is its failure

> **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** (Fig 12 :121)
> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)
> **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."** (Fig 11 :44)

Three outcomes are distinguishable by the bond structure, not by the magnitude of the drop:

1. **Recovery:** the loop closes, R returns toward the reference, and the same basin re-forms.
2. **Reorganization:** the cycle closes but with a different arrangement; the functional group survives and the members change (Fig 12 :119 distinguishes spent and regenerating parts).
3. **Regime shift:** the loop does not close at the available resolution; the system has crossed into a different basin, and a chain reading cannot represent this because a chain cannot close (Fig 12 :121).

Enumeration (Fig 11 :44) is required because the residual that matters can be several steps out in the cascade: a disturbance can change a slow variable three links away, and the return failure appears at a place the direct measurement never watched. Mode `specified` for the three-outcome separator, `general` for the cycle-closure form. Status **single-source** on Fig 12 for the cycle bond, with Fig 11 as a low-overlap corroborator on enumeration. I do not upgrade this to triangulated because the decisive closure claim comes from one figure line.

**Refuter.** Exhibit a regime shift in which the post-disturbance trajectory is indistinguishable from same-basin recovery at every resolution of every instrument built from a proto-instrument, and show that no better instrument can be derived from one already returning something. Then the three-outcome separator is not measurable and F6 moves to `gap`.

### F7. The universal scalar and the universal threshold are a declared `gap`

> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)
> **"Unreachable is a verdict here, not a silence,"** (Fig 13 :134, cited as a substring of the line)

No figure line returns a universal resilience number, a universal recovery time, or a universal resistance threshold that transfers across systems with different anchors. What the figures return is a shape: two readings held apart, per slot, with a channel that must stay reachable and a discriminator that must be built from a proto-instrument. The missing thing is characterized in effect terms, not named. This is `unreachable` in the sense of Fig 8 :40-43, unreachable at this budget and underived from the figure set, not a silence.

Status **gap**. Mode `general` on the refusal, with no `specified` claim about any particular numeric threshold. This gap is not a failure of the derivation; the master plan states that a question may honestly end in gap, and the figures say *"Unreachable is a verdict here, not a silence."*

### F8. World conflict: the field does not advocate separate measurement, and says the construct is hard to measure

Two world conflicts were triggered and returned to the census; neither flipped a verdict.

**Conflict 1.** Walker, Holling, Carpenter and Kinzig (2004) define resilience with four components including resistance, but write that they do *"not believe in or advocate their separate measurement (especially because of their inter-dependencies)"* while maintaining that *"substantive qualitative assessments can be made of each of these components of resilience."* Read naively, this conflicts with the two-reading separator.

Re-census: the field is answering *should one operationally report them separately, given their coupling*, while this derivation answers *can a measurement keep the two effects distinct in principle*. Those are D3 (operational cost and coupling) and D4 (distinguishability of readings), two different domains with different anchors. The field's caution is recorded as a real cost on the `should` question and carried into `07` and `09` as a cost if wrong. The `can` verdict is unchanged.

**Conflict 2.** The psychological-resilience literature says the construct is *"difficult to measure and test ... because resilience can be interpreted in a variety of ways"* and distinguishes resisting adverse conditions from *"psychological recovery"* as returning to pre-trauma conditions.

Re-census: "difficult to measure" concerns reliability and definition, not distinguishability. At the same time this source *corroborates* the separateness of the two effects at a different stratum. The conflict dissolves into a cost, and the corroboration is kept.

Both conflicts follow the rule that a conflict sends the derivation back to the census, never to a softer verdict.

### F9. What survives

| claim | mode | status | figure |
|---|---|---|---|
| Resistance is a magnitude/ordering reading, recovery a duration/pathway reading | `general` structural, `specified` applied | triangulated | Fig 13 :36, Fig 12 :30, Operators on ⋛ |
| A single scalar that sums them is the named error | `general` | triangulated | Fig 12 :125, :130, Fig 9 :57 |
| The report must stay per slot | `specified` | single-source | Fig 1 :19, :22 |
| Channel failure deletes named halves of the distinction | `specified` | triangulated | Fig 10 :24, :26, Fig 1 :22 |
| An instrument can be improved from a proto-instrument already returning something | `specified` | triangulated | Fig 6 :32, :34, :40 |
| Recovery, reorganization and regime shift separate by cycle closure | `specified` | single-source | Fig 12 :121, Fig 11 :44 |
| A universal scalar index and universal threshold | `gap` | gap | Fig 9 :32, Fig 13 :134 |

---

## 4. World checks (secondary, figures still decide)

The field literature, read this session and recorded in `10_source_ledger.csv`, aligns with the two-reading shape:

- Walker et al. 2004 (*Ecology and Society*) distinguish *"engineering resilience"* (speed of return to equilibrium) from ecological resilience, and say return time *"cannot be considered as the measure of resilience"* because multiple stable states mean it *"doesn't measure all of the ways in which a system may fail."* This corroborates F1 and F2. It is the same paper that refuses separate measurement, handled in F8.
- Grimm and Wissel 1997, as reported in the resistance-ecology reference page, reduced 163 definitions of stability to three properties: *"staying essentially unchanged"*, *"returning to the reference state ... after a temporary disturbance"* and persistence through time. That is the two-reading split in the field's own vocabulary, corroborating F1.
- Boucher et al. 1994 and Bellingham et al. 1995, as reported in the same page, classified tree species after hurricanes into resistant, susceptible, usurper and resilient groups using *"degree of hurricane damage and the magnitude of the post-hurricane response"*. That is a two-axis measurement already in use, corroborating F1 and F5.
- Scheffer et al. 2009 (*Nature*) report *"generic early-warning signals"* and illustrate *"Critical slowing down indicated by an increase in lag-1 autocorrelation"*. The recovery reading is already instrumented, corroborating F5 and F6.
- Woods and Hollnagel in resilience engineering separate robustness (anticipated challenge) from *"graceful extensibility"* (new capability under surprise), corroborating F1 and F2 from a safety-science pool with low overlap.
- Business continuity practice separates RTO (time to restore) from RPO (acceptable data loss) and defines an organization's resistance to failure as the ability *"to withstand changes in its environment and still function"*, corroborating F1 and F5 at practitioner level.

These are secondary witnesses. The ecology and social-ecological sources are one evidence pool, not four corroborations. Woods and Scheffer come from different pools but Scheffer shares authors with the ecology pool. No world source overrode a figure verdict; both conflicts were returned to the census.

---

## 5. Pre-registered refuter

Written before the conclusion, per the master plan's requirement that *"a falsifier written before the run is a design instrument."* The two-reading shape is refuted if any of the following holds:

1. **Informational equivalence.** A measurement is demonstrated in which the resistance reading is a deterministic one-to-one function of the trajectory reading across all disturbances and all component slots, so the two-axis split carries no information (breaks F1).
2. **Zero round-trip loss.** A single scalar is shown to preserve everything needed for both decisions on a ground where the resist decision and the recover decision can conflict, with a measured R_T of zero (breaks F2).
3. **Aggregation invariance.** A case is found in which per-slot readings, once averaged, preserve the signal that decides same-basin return versus basin change, and the per-slot readings add nothing (breaks F3).
4. **No proto-instrument.** Every existing recovery-related reading fails to register at any resolution, and no better instrument can be derived from one already returning something (breaks F5, moves the question toward unreachable in principle).
5. **Closure indistinguishability.** A regime shift is observed whose trajectory is indistinguishable from same-basin recovery at every achievable resolution, with no derivable discriminator (breaks F6).

If any fires, the two-reading shape is withdrawn or narrowed, and the retraction is written here rather than erased.

---

## 6. Recommendation

1. Lead with the separator, not with a definition of resilience: magnitude at disturbance versus trajectory through the transient, reported per slot (F1, F3).
2. Refuse the one-number index explicitly and say why: two currencies do not add (F2).
3. Specify the channel failures that delete each half, because those are testable in twenty minutes (F4).
4. Build the discriminator from instruments already returning something. Do not declare a gap where a proto-instrument exists (F5, F6).
5. Report the universal scalar as `unreachable`, characterized in effect terms, with the five refuters attached (F7).
6. Carry the field's own caution about interdependency into the cost-if-wrong section. Distinguishability in principle is not a recommendation to operationalize every component separately (F8).

Fig 4 :25: **"A recording carried upward looks like knowledge and is a description of one occasion."** Send the separator and its refuter, not a list of resilience indices.

---

## 7. Canonical usage check

Two local sources govern how the figures may be used, and both were read after the first six sections:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* The framework *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."* *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: the eight-step loop, the mode rule, and the direction discipline. Step 7 separates SEARCHED, INWARD and OUTWARD. Here SEARCHED is answered first: the literature already holds instruments that register the effect, so more search is warranted before importing a new primitive. INWARD would be to sharpen the return-time instrument; OUTWARD would be to import a discriminator from a frame with a differing closure, with source gate and shadow test. They are opposed and are not read against each other.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "The figures answer whether resilience can be measured" | **Retracted.** They return a shape and a separation, not an instrument specification and not a ground verdict. The question is reported as reachable in principle, not settled. |
| "Fig 13 :36 applies only to physical space and time" | **Retracted and re-censused.** Fig 13 governs the distinction between ordering and duration at any substrate. The physical six-term set itself is not mapped onto resilience domains, and no claim here depends on such a mapping. |
| "Walker et al. corroborate separate measurement" | **Retracted at that strength.** They explicitly do not advocate it. Their statement is now used as a cost on the operational question (F8), not as corroboration of a recommendation. |
| "The world literature is slow to measure resilience, so the question is a gap" | **Retracted.** Return time, resistance, recovery rate and lag-1 autocorrelation already register. The gap is the universal scalar and the discriminator, not the whole measurement problem (F5, F7). |
| "The three resilience outcomes are a partition" | **Retracted.** They are a union with a shared channel and a shared reference, and regime shift can hide inside the others at low resolution (F6, Fig 9 :54). |
| "Dropped transients are just an instrumentation detail" | **Kept, not retracted, and elevated.** They delete exactly the half of the residual that recovery needs (F4). |
| F1 and F2 | **Canonically confirmed.** The README's re-census rule supports reading ordering versus duration as different kinds, and Fig 12 :130 directly names the summing error. |
| F7 | **Canonically confirmed.** *"you get a kind of thing, never the answer itself"* (Fig 9 :32) and *"Unreachable is a verdict here, not a silence"* (Fig 13 :134). |

### Strain test after re-census

| strain | handling |
|---|---|
| Fig 13 physical substrate versus an abstract temporal trajectory | re-census: Fig 13 governs only the ordering/duration distinction here. Resolved. |
| Fig 3 "link with no instrument" read as a claim that all measurement is broken | re-census: scoped to the vocabulary-to-objective link, which is exactly what "resilience" lacks as an unbound term. Resolved. |
| Walker et al. refusal of separate measurement | re-census: `can` (D4) separated from `should` (D3). Resolved, cost retained. |
| Psychology's "difficult to measure" versus reliability | re-census: definition and reliability are not distinguishability. Resolved, cost retained. |
| Regime shift hidden at every available resolution | live, not dissolved. F6's refuter names it and F7 records the consequence if it fires. |

No strain was smoothed over. Strains that could not be dissolved are recorded as live with a refuter.

---

## 8. Status

The two-reading separator survives the figure census and the canonical check. Resistance and recovery are differently bonded readings in different currencies, so a single scalar is the named error rather than the goal. The measurement stays per slot, the channel must survive the transient, and the discriminator can be built from instruments already returning something. The universal scalar and universal threshold are a declared `gap`, reported as unreachable rather than silence. Mode `specified` on the separator, `general` on the non-additivity, not `grounded`. One live strain remains on regime-shift indistinguishability, with a refuter written in advance.
