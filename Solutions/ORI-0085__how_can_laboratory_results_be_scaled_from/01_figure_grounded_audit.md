# Figure-grounded audit: scaling a lab result to a geological habitat

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, 2026-11-19): LLM output is *"simulacra"*, and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** The verbatim figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical figures README, `THE_FORMULA.md`, the eight essays, and the world sources listed in `10_source_ledger.csv`. Every figure quote below was re-opened in the local extract before use.

---

## 0. The residual, in effect terms

A controlled microcosm yields a result. The question asks what would have to be true for that result to still hold in a geologically realistic environment. The residual `R` is the gap between what the lab frame predicts when it extrapolates and what the geological ground would return if the pathway were run there.

- **Arity.** A two-frame relation (lab frame, geology frame) joined by a scale transform. It is also multi-slot: `R` is indexed by condition (pH, concentration, temperature, mineral surface, cycling, time), not aggregated into a single "does it scale" number. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Aggregating across conditions is how a live failure disappears into an average.
- **Symmetry.** Asymmetric. Carrying a method up is not sending a recording down (Fig 4), and a maintainer may introduce an actor but cannot subtract the habitat (Fig 11 :61). The transform between scales is lossy and non-invertible (Fig 4 :28-29).
- **Scale.** Scale is the governing axis of this question, not a background variable. Fig 4 is titled *"The Membrane Between Scales"* and describes *"the same machine at two sizes."* The lab is one agent's loop; the geological setting is the population-and-time regime on the other side of the membrane.

The residual is a **union compound**, not one hard problem. It bundles at least four conditions that do not reduce to one another: reproduce the controlled conditions, enumerate what the new habitat introduces, survive geological time, and be checkable against a ground that does not move. Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*

---

## 1. Domain census

One line per domain: actors, currency, anchor. No nameable anchor means it is not yet a domain.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Lab system (substituted habitat, test harness) | purified reagents, fixed conditions, instrument, experimenter in the maintainer seat | yield under fixed conditions, reproducibility | the lab measurement, which pays or does not | admitted |
| D2 Geological habitat (field of contact) | minerals, wet-dry cycling, hydrothermal flux, concentration and dilution, dissolved organic matter, time, contaminants | persistence of a pathway under real contact | rock record, geochemical signature, field measurement | admitted |
| D3 The scale membrane (transform) | method carried up, head start sent down, recording, `R_T` | methods up, head starts down, gap measured | the round trip (Fig 4 :30) | admitted |
| D4 Verification / ground-maintainer frame | independent instruments, natural analogues, field studies, other frames | ground contact, not agreement | the anchor, which does not update (Fig 2 :29) | admitted |
| X1 "The result itself scales" as a free-floating property | the result | truth | none nameable; it depends on which habitat | **not a domain yet** |
| X2 "Just run a bigger version" | volume, throughput | scale | already inside D3; scale changes the actors (Fig 4 :19-20) | absorbed into D3 |

**Partition or union:** union. D1 and D3 form one compound (what may cross the membrane); D2 and D4 form another (what the ground settles). The four-condition residual above is a union of overlapping conditions (Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*). A single lever clears the region where only one condition holds and leaves the intersections standing.

**Dependency order (Fig 3):**
1. perception: enumerate the geological habitat, read it off the world (Fig 11 :43-44);
2. vocabulary: have terms for what a setting affords (concentration, mineral surface, cycling, duration);
3. objective: say what would count as "the result still holds" in effect terms;
4. planning: design the field test or natural analogue;
5. learn and carry: name what worked, carry the method up.

The probable break is between 2 and 3. Fig 3 :25-26: *"having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."* Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* More careful lab control (link 1) cannot rescue a missing objective (link 3), because Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*

---

## 2. Findings

### F1  -  The lab result is a substituted habitat; a synthetic solve proves wiring, not capability (decisive for the framing)

Fig 11 :70:

> **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."**

Fig 11 :66:

> **"Isolation is not removal of the habitat. It is substitution of one habitat for another."**

Fig 11 :67:

> **"Move the residual and you must reproduce everything its goal required, and you inherit the new habitat's actors, which you did not choose."**

A tiny controlled system is not a smaller geological system. It is a different habitat substituted for one that cannot be brought into the lab. The move is a substitution, not an enlargement. What is proved in the harness is that a mechanism can be wired to produce the result under the conditions the harness supplies. It is not proved that the pathway has capability in the geological habitat, because capability is a property of agent and habitat together (Fig 11 :39: *"capability is a property of agent-and-habitat, never of the agent alone."*).

Mode `general` for the structural claim, `specified` for the lab-to-geology case. **Refuter:** a protocol whose result is unchanged across a documented habitat substitution that removes a condition its goal required, and that still pays at the ground.

### F2  -  The two silent failure modes are named by the figure, and by the geochemistry literature

Fig 11 :28-30:

> **"two silent failure modes"** / **"what you failed to reproduce, and what you brought with you"**

The first is the missing condition (no mineral surface, no cycling, no concentration mechanism, no geological time). The second is the introduced actor (purified reagents, analytical detection limits, a clean vessel, a single pathway). Cleaves (2013, *Life* 3(2):331-345), read 2026-11-23, states the same asymmetry in laboratory terms: *"The behavior of organic compounds is highly dependent on context, and it cannot be assumed that a reaction that has been shown to occur under one set of conditions may therefore be assumed to occur robustly, if at all, under any set of geochemically relevant conditions."* And: *"Experiments are often optimized to make very specific products under very specific conditions, and having found conditions that work, the experimentation ends. It is often then assumed that if a reaction works under one set of conditions, it will work under any set of conditions, which has led to a proliferation of unproductive schemes in the literature."*

Ferris, Hill, Liu and Orgel (1996, *Nature* 381:59-61), read 2026-11-23, supply a positive instance of the first mode: *"whereas the reactions in solution produce only short oligomers (the longest typically being a 10-mer), the presence of mineral surfaces (montmorillonite for nucleotides, illite and hydroxylapatite for amino acids) induces the formation of oligomers up to 55 monomers long."* Change the habitat, change the result.

Mode `general` (the failure modes) and `specified` (the mineral instance). Two figures/literatures with low overlap, so **triangulated**. **Refuter:** a field trial in which both the omitted conditions and the introduced actors are fully enumerated and measured, and the result still pays. If that trial is run, the failure mode is closed; it does not by itself refute the shape.

### F3  -  Carry the method up, never the recording down

Fig 4 :22-23:

> **"Only methods cross up. Only head starts come down."**
> **"upward: a method that can be reapplied. Never the recording of a particular success."**

Fig 4 :25: **"A recording carried upward looks like knowledge and is a description of one occasion."**

The lab yield is a recording of one occasion. What can cross to the field is the method that produced it: the protocol for varying pH, concentration, temperature, mineral and cycling until failure. Cleaves (2013) proposes exactly this as a remedy: *"every reaction should be tested to the point of failure with respect to a few parameters which can be explored simply using a reaction screening matrix."* A screening matrix is a generator; a single optimised yield is a recording.

Mode `general`. Triangulated across Fig 4 and Cleaves (different evidence pools: framework figure versus geochemistry review). **Refuter:** a case where a recorded outcome, replayed at field scale with no method carried and no condition varied, pays at the ground.

### F4  -  The round-trip gap must be measured, not assumed zero

Fig 4 :27-29:

> **"The transform between scales loses information, and that is the point."**
> **"Going up throws away detail; that is what makes the result reapplicable. But it means the trip is not reversible, and something carried up and brought back down will not match what was sent."**

Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

Fig 4 :31-32: **"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."**

`R_T` is the difference between what the lab shorthand predicts and what the field returns. A claim of the form "this result scales" without an `R_T` is the dead-reckoning error the figure names. Pianowski (2026, *Communications Chemistry* 9:337), read 2026-11-23, supplies the field-facing half: *"While many gaps between laboratory simulations and the early Earth environment still exist, prebiotic chemistry has already filled some of them with unexpectedly high accuracy, proving to be a promising approach for understanding the abiogenesis process."* Gaps exist and some are closed; that is a measured `R_T`, not a binary verdict.

Mode `general` for the requirement, `specified` for the lab-to-field case. **Refuter:** a measured round trip showing `R_T = 0` across every condition the result's goal required, confirmed against the ground. Until then `R_T` is unmeasured, not zero.

### F5  -  The habitat is enumerated, never composed

Fig 11 :43-44:

> **"The habitat is enumerated, never composed."**
> **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."**

Fig 11 :48: **"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."**

Fig 11 :52-53: **"Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."**

You cannot derive the geological habitat from inside the lab frame. You enumerate it in contact with the residual, then outward. Westall, Brack, Fairén and Schulte (2023, *Frontiers in Astronomy and Space Sciences* 9:1095701), read 2026-11-23, give a concrete second-order item: in a Hadean seawater simulant, *"the mineral surfaces were coated by a 'conditioning film' of organic molecules as soon as the material was exposed to seawater"*, a layer that forms *"within minutes"*. A mineral surface in the field is not the mineral surface in the flask. The residual that matters can be three steps out.

Mode `general`. Triangulated (Fig 11 versus Westall et al., low overlap). **Refuter:** a habitat derived a priori from lab terms, with no field enumeration, that pays at the ground.

### F6  -  It is a union, so one lever is insufficient

Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**

Fig 9 :57: **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."**

"Scale up" is a bundle: reproduce conditions, enumerate introduced actors, survive time, be checkable. Enlarging the vessel, or lengthening the run, or adding a mineral each clears the region where only one condition binds. The intersection remains and is categorically different. Fig 9 :54 requires unbundling before searching again.

Mode `general`. Single-source for the union rule (Fig 9), with the four conditions drawn from the census. **Refuter:** one intervention that restores all four conditions simultaneously and leaves no categorically different residue.

### F7  -  The chain probably breaks at the middle link: no instrument for "still holds in the field"

Fig 3 :25-26: **"having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."**

Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."**

Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."**

The lab side has excellent instruments (yield, spectroscopy, microscopy). The geology side has excellent instruments (isotopes, petrography, dating). The middle, "what would count as the same result having happened in the field", is the least instrumented link. This is a `gap` after re-census: no figure line supplies a general criterion of field equivalence, and no world source read here supplies one either. Fig 9 :32: *"you get a kind of thing, never the answer itself."* Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* What can be reported is the shape of the missing instrument: something that discriminates among geological settings that would produce the same lab reading. *The Hard Problem is About Source* (2026-08-28) names the analogue: an instrument that reads green *"cannot comment on the source"*, and *"The answer is unreached until a better instrument exists."*

Mode `general` for the break-location rule, `specified` for this question. **Refuter:** a published, instrument-backed, generally used criterion for field equivalence. That would close the gap, not overturn it.

### F8  -  Agreement among labs is not the geological ground

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."**

Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**

Fig 2 :40: **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"**

Fig 10 :24: **"the ground does not decay, the channel does"**; Fig 10 :26: **"stale percepts, dropped transients, saturated metrics, pooled readings"**

Twenty labs reproducing the same yield are one evidence pool. The ground here is the rock record or a field measurement, and it does not move when labs disagree. What decays is the channel: the percepts, the protocol transcription, the instrument calibration. Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."** Natural analogue studies are one way to buy it: the MPIWG *Deep Time Labscapes* project (Diener, 2023-2025) describes *"a history of thinking in natural analogues and experimental simulation in earth system science and of the tension between observation and experimentation"*, where geological time is *"an object that is actually beyond control."*

Mode `general`. **Refuter:** a field measurement that changes its answer when labs disagree; then it is a frame, not an anchor.

### F9  -  What actually survives: the shape, not the protocol

| claim | mode | figure / source |
|---|---|---|
| The lab is a substituted habitat; a synthetic solve proves wiring, not capability | `general`, structural | Fig 11 :70 |
| Scaling is a habitat substitution, not an enlargement | `general`, structural | Fig 11 :66 |
| Carry methods up, never recordings | `general` | Fig 4 :22-23, Cleaves 2013 |
| Measure `R_T`; the gap is the report | `general` | Fig 4 :30-32 |
| Enumerate the habitat from the world, including second-order contact | `general` | Fig 11 :43-44, :52-53 |
| The residual is a union of conditions | `general` | Fig 9 :55-57 |
| A general field-equivalence criterion is unavailable at this budget | `gap` | Fig 9 :32, Fig 13 :134, Fig 8 :39 |
| Which specific mineral, cycling regime or duration matters here | `gap` | no figure line; ground settlement required |

Mode `general` on the shape, `specified` on its application to prebiotic chemistry, `gap` on the two named absences.

---

## 3. Pre-registered refuter

Written before the conclusion, so it is a design instrument. `THE_FORMULA.md` "Direction": committing a prediction before a run makes the sought-for shape an ordinary term that can accrue a residual. The scaling shape is refuted or closed if any of the following fires:

1. **Habitat invariance.** A lab result persists unchanged across a documented habitat substitution that removes a condition its goal required, and pays at the ground. Breaks F1 and F2.
2. **Recording success.** A recorded outcome, replayed at field scale with no method carried and no condition varied, pays at the ground. Breaks F3.
3. **Zero gap.** A measured round trip shows `R_T = 0` across every condition the goal required, confirmed against a ground that does not update. Breaks F4.
4. **Single lever.** One intervention restores all four union conditions and leaves no categorically different residue. Breaks F6.
5. **Instrument appears.** A published, instrument-backed criterion for field equivalence is generally used by practitioners. Closes F7.

Until one of these is run, no part of this may be labelled `grounded`. A failure is more useful than an endorsement.

---

## 4. Recommendation

1. Do not report "we scaled it." Report the method, the enumerated habitat, and the measured `R_T`. Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."*
2. Present the lab result as a wiring claim under a substituted habitat, not a capability claim (F1). State the mode on every sentence.
3. Test to failure across a small parameter matrix before claiming robustness; that matrix is the exportable method (F3).
4. Enumerate the geological habitat from the field, including second-order contact such as conditioning films and mineral alteration (F5).
5. Unbundle the four conditions and report the residue after each lever (F6).
6. Ask a field-facing checker: what would you count as a failure of this claim? Record the answer before offering the framework (F8, `02_outreach_email.md`).
7. Use public opt-in venues in `03_public_contact_points.csv`, not a list of people likely to agree.

---

## 5. Canonical usage check (figures README + THE_FORMULA, read 2026-11-23)

Two governing sources were applied after the first four sections:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also the re-census rule: *"a reading that makes one contradiction another has misidentified its domain, not found a flaw."* And the limit: the framework reports *"a shape, not a name"*, then *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."*
- `THE_FORMULA.md`: the mode rule and step 7's separation of SEARCHED, INWARD and OUTWARD. Here SEARCHED means: is a field-equivalence criterion already in our library and unfound? INWARD means: sharpen our own lab instruments. OUTWARD means: find a frame that already holds the missing criterion, from geology, geochemistry or natural-analogue practice. These are three tracks, never read against one another (Fig 6 :29-30).

### Strain test

- **Fig 4 (membrane) versus Fig 11 (habitat).** Initial strain: one says the kernel is invariant across size, the other says the habitat must be reproduced. Re-census resolves it. Fig 4 governs the transform and what may cross it; Fig 11 governs the source and target habitats and what is in contact with the residual. Different quantities. Not strained.
- **Fig 11 :40 ("an improvement that does not change contact changes nothing") versus Cleaves' screening matrix.** Not strained. A screening matrix changes contact by varying conditions until failure. It is exactly the kind of improvement the figure permits.
- **Pianowski (2026) "gaps still exist" versus "filled some with unexpectedly high accuracy."** Not a conflict with the shape. It is a quantitative report of a nonzero but partly closed `R_T`.

### Retraction and confirmation log

| earlier reading | status after the canonical check |
|---|---|
| "Lab results never scale" | **Retracted.** Fig 11 :70 says a synthetic solve proves wiring and never capability. It does not say the wiring is false; it says what kind of thing is proved. The scoped claim survives: lab settlement licenses a mechanism claim under the controlled habitat, not a geological claim. |
| "Scaling means running a bigger version" | **Retracted.** Fig 11 :66 makes it a habitat substitution. A volume change does not name the new actors. Absorbed into D3. |
| F1 called "decisive for the framing" | **Kept, scoped.** Decisive for how the question is framed, not a verdict that any particular result fails. |
| F7 as a `gap` | **Confirmed.** No figure line and no world source read here supplies a general field-equivalence instrument. The honest word is `gap`, not silence. |
| F4 `R_T` | **Confirmed and named.** Pianowski (2026) reports gaps that are partly filled; this is a measured gap, not a binary. |
| F8 "agreement is not the ground" | **Canonically confirmed.** Fig 2 :29, :35, :40 and the figures README's ground-not-agreement rule. |
| Simulated status | **Confirmed.** *The Recursive Self-Improvement Trap* names LLM output *"simulacra"*. This audit is internal consistency only. |

### Three-track answer to "no line closes the residual"

- **SEARCHED (first, cheapest).** Is a field-equivalence criterion already in the library? The figure set returns a shape (Fig 9 :32) and a warning that a search finding nothing is not a proof of absence (Fig 8 :39). No general criterion found here.
- **INWARD.** Sharpen the lab instruments: reaction screening to failure (Cleaves 2013), source-discriminating measurement in the sense of *The Hard Problem is About Source*. This refines our own terms and cannot by itself name the geological habitat (Fig 6 :29).
- **OUTWARD.** Import in effect terms: enumerate the habitat from geology, geochemistry and natural analogue studies (Fig 11 :43-44; Westall et al. 2023; Diener 2023-2025). Source gate and shadow test apply: does the imported practice explain a gap the lab frame could not?

### Updated verdict

The shape survives. Scaling a lab result is a habitat substitution across a lossy membrane, not a magnification. The deliverable is a reappable method with a measured round-trip gap, enumerated from the geological habitat and settled by a ground that does not update. What does not survive is the idea that a single controlled-system yield carries capability into the field, and the framing of the move as a bigger version of the same experiment. Strains after re-census: **none hidden, one named gap (F7)**. Mode: `general` on the shape, `specified` on its application, nothing `grounded`.
