# Figure-grounded audit: how indirect effects propagate through food webs

**Mode of this document: `general` on the structural shape, `specified` on the three domain readings, `gap` on a universal dominance law. Nothing here is `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** By the Recursive Self-Improvement Trap essay, LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the ecological question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** Figures 1 to 13, Operators and Symbols tables, `THE_FORMULA.md`, canonical figures README, verbatim figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md` (opened and checked this session). World sources are listed in `10_source_ledger.csv` and used only as secondary corroboration.

---

## 0. The question under audit and the bound answer shape

> How do indirect effects propagate through food webs, and when do they outweigh direct interactions?

Restated in effect terms. An intervention on species A produces a response in species C. A direct-link model, built from who eats whom, predicts that response from the A to C edge if one exists and from no edge otherwise. The residual `R_s = |prediction_s - observation_s'|` at species C is the object of the question. When the model has the A to C edge correct and still misses C, the residual is indirect: it required at least one intermediary B. The question asks two things, and they are different predicates:

1. the **carrier**: what transports the residual from A to C when no A to C edge exists;
2. the **dominance condition**: the condition under which the indirect contribution to `R_C` exceeds the direct contribution.

**The shape an answer would look like, written down and bound before any figure line was chosen** (Formula step "Direction": make the sought-for shape an ordinary term so it can accrue a residual). The answer must be:

- indexed by **slot**, that is by species and by contact distance from the perturbation, not by a single web-wide total;
- **signed** relative to the tracked residual, so that a two-step chain and a three-step chain can invert one another;
- expressed over a **contact habitat** enumerated outward until the cascade stops mattering, not over a pre-chosen list of pairwise links;
- settled by an **anchor** that does not update when a frame re-describes the web: an intervention, a measured abundance, an experiment.

Any candidate that collapses these into one scalar, or that names a magnitude threshold without a slot and an anchor, is refused at the census stage. This binding is the pre-registered shape of section 4.

---

## 1. Domain census, before any figure line is chosen

### 1.1 R by arity, symmetry and scale

- **Arity.** The minimal indirect effect is **ternary**, not binary. It needs A, an intermediary B, and the recipient C. A two-species edge cannot express it. Longer effects are k-ary chains with k greater than or equal to three species. This arity is a structural requirement of the effect, not a figure quote.
- **Symmetry.** Directed and sign-bearing. The sign of a length-k chain is the product of the link signs relative to the tracked residual. A predator of my predator gives a positive indirect effect on my prey (the "enemy of my enemy" case); adding one more link inverts it again. Fig 11 :49 states *"An actor's valence is relative to the residual, not a property it carries."* The symmetry of the bond matters: the ordered bond `→` (sequence, *"A then B; B needs A to have happened"*, Operators table) is not the symmetric bond `+`.
- **Scale.** First order is the direct edge A to C. Second order is A to B to C. Third order and beyond are cascades. Fig 11 :52 records a case where the effect that mattered was *"three steps out."* Scales are not interchangeable: a magnitude at step three does not average with a magnitude at step one (Fig 12 :125, *"A composition costs in two currencies, and they do not add."* applies by analogy to distinct readings; the ecological reading is declared as our binding, not a figure claim).

### 1.2 One line per domain: actors, currency, anchor

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D1 The food web as habitat | species; relations of predation, competition, mutualism, parasitism, dependency (Fig 11 :45, :47) | abundance and biomass per species; contact distance in steps | a field intervention or measured response, the ground (Fig 2 :29) | habitat, enumerated never composed (Fig 11 :43); no nameable anchor until a measurement is specified |
| D2 The compositional structure | the six substrate terms, especially network (*"that entities relate, and influence travels"*, Fig 13 :24) and gradient (*"a difference that can be spent"*, Fig 13 :22); the bonds sequence, production, cycle, comparison | composition inside closure(Γ); flows over the network (Fig 13 :76) | the figures as metalaws | partition: what may compose across the two kinds, and which bond carries the effect |
| D3 The measurement and verification frame | the manipulating ecologist, path analysis or structural equation models, interaction-strength estimates | residual between predicted and observed response per species and per step | the anchor of Fig 2 :29 to :30, which *"does not change its answer because of what any frame thinks"* | triangulation, not negotiation (Fig 2 :35) |

No domain is admitted without a nameable anchor. D1 has one only when an intervention or measurement is specified; a web diagram without a ground is not yet a domain, it is a candidate list. D3's anchor is the ground, never agreement among ecologists.

### 1.3 Partition or union

This is a **union**, not a partition. Direct and indirect effects can both hold for the same species pair in the same web: a predator can eat a prey directly and also affect it through a competitor or a shared resource. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :57: *"a case in two conditions is not a harder case of either."* The indirect effect is a specific compound with its own loop, not a mixture to be searched as one harder direct question. Fig 11 :50 reinforces this at the habitat level: *"the same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."*

### 1.4 Order by dependency (Fig 3)

Fig 3 :20: *"The chain is ordered by dependency, not by importance."* The operational order is:

1. perceive and enumerate the habitat and its direct contacts (links 1 to 2);
2. state what counts as progress: the per-slot residual and its step index (link 3, the objective);
3. only then choose instruments, manipulations and path models (link 4);
4. let the ground settle the magnitude comparison (link 5).

A network centrality score computed without a measured per-slot response is a reading taken below the break. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* Fig 3 :22 to :23: a reading below the break is *"a reading of nothing."*

---

## 2. Figure census, quoted verbatim before concluding

Each quote below was checked character by character against `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session. Citations are `Fig N :line` against that file. A line that only fits with a strain is marked as governing another quantity and sent back to census (section 6).

| figure | bearing on this question | verdict after census |
|---|---|---|
| Fig 1 The Agent | residual indexed by slot, never aggregated | governs D1 and D3; triangulates with Fig 11 |
| Fig 2 The Ground | anchor test, independence, agreement from a shared pool | governs D3; sets the verdict rule |
| Fig 3 Dependency Chain | order by dependency, reading below the break | governs the procedure; no magnitude claim |
| Fig 4 The Membrane | round trip and its gap R_T | governs the condensation check in `11_audit.md` |
| Fig 5 Mint Pipeline | guards as product, acceptance as bargain | no mint is attempted; used to refuse a global law |
| Fig 6 Closure / Reachability | import adds an atom; inward versus outward questions | governs the no-new-primitive rule |
| Fig 7 Room Chain | agreement compounds, evidence does not | governs why more agreeing web studies are one witness |
| Fig 8 Union Surplus | residual first, frame second; search that finds nothing | governs the union split and the honest gap |
| Fig 9 Leave / Arrive | unbundle a union; describe the residual before choosing a frame | governs F5 |
| Fig 10 Ground Maintainer | bring a characterised residual, never the source | governs outreach in `02` and `08` |
| Fig 11 The Habitat | **the governing figure**: contact cascades, enumeration outward, DDT three steps out, valence relative to residual, asymmetric introduction | governs D1 and the dominance answer; single-source for the specific DDT case, triangulated with Fig 13 for the network claim |
| Fig 12 The Bond | typed bonds, cycle sign, isomers, functional group, two currencies | governs D2; single-source for the sign and isomer readings |
| Fig 13 Minimum Viable Set | network as a structure, energy and gradient compose a flow, unbounded arrangements, unreachable as verdict | governs D2 and the `gap` verdict |
| Operators table | `→` sequence and `⇒` production are ordered, not symmetric | governs the chain direction; the sign claim is our binding |
| Symbols table | `R` is the aim and the ground is the anchor | governs D3 |

**Strain test applied during census.** The phrase "the web is a network" at first seemed to make network a seventh primitive. Re-census: Fig 13 :24 lists network as one of the six structures (*"network / that entities relate, and influence travels"*), so there is no new atom. No import is owed. This strain is dissolved, not hidden; it is recorded in section 6.

---

## 3. Findings F1 to F9

### F1 — The residual is per slot and per step; an aggregate hides the effect

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**
Fig 1 :23: **"The ground enters as the only metric."**

If a web-wide total abundance is the measured quantity, a strong positive response in one species and a strong negative response in another cancel, and the indirect effect vanishes from the report while remaining real at both slots. The answer shape bound in section 0 requires a residual vector, one entry per species and one entry per contact distance. This is a `general` structural constraint.

**Status:** triangulated, Fig 1 and Fig 11 :44 (enumerate outward, which presupposes distinguishable steps).
**Mode:** general.
**Refuter:** a prediction that pools responses across species and still identifies which slot needs a mediator and at what step. If such a pooled statistic exists, the slot-indexing constraint is wrong for this quantity.

### F2 — Propagation is a contact cascade over an enumerated habitat

Fig 11 :43: **"The habitat is enumerated, never composed."**
Fig 11 :44: **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."**
Fig 11 :52: **"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."**
Fig 11 :48: **"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."**

This is the figure-grounded answer to "how do indirect effects propagate": by contact, outward through the habitat, one step at a time, until the residual at further steps stops mattering. The list is read off the world, not composed from a vocabulary of interaction types. Fig 13 :24 names the structure that makes this possible: **"that entities relate, and influence travels"**. Fig 13 :76: **"Energy and a gradient compose a flow."** A trophic cascade is a flow over the network; the gradient is the difference that can be spent, and the network is what carries it.

The DDT case in Fig 11 :52 is the load-bearing empirical instance inside the figure itself: a first-order enumeration of direct contacts missed an effect that was three steps out. Fig 11 :54: **"Carson, Silent Spring, 1962. The mechanism, biomagnification through the food chain to eggshell thinning, was established over the following decade."** The ground here is the measured thinning and the population decline, and it settled the mechanism over a decade.

**Status:** triangulated across Fig 11 (habitat enumeration and contact cascade) and Fig 13 (network and flow), two figures with low content overlap. The specific DDT-to-eagles case is single-source within the figures.
**Mode:** general for the cascade rule, specified for the three-step case.
**Refuter:** an indirect response observed across a gap in the enumerated contact habitat, with no intermediary at any step, and with the gap confirmed by a ground measurement. That would break the contact requirement.

### F3 — The dominance condition: scoping to direct contact is what makes the far residual dominant

Fig 11 :52, quoted above, is also the figure-grounded answer to the second half of the question, and it is a **scoping condition, not a universal magnitude law**: *"Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."*

Read precisely, the sentence says three things in order:

1. the enumeration was scoped to **direct contact** (a decision about the observer's habitat, not a fact about the world);
2. the effect that ensued was **second-order** at the first relay and continued outward;
3. the residual that **mattered**, that is the one that settled the impairment, was **three steps out**.

So indirect effects outweigh direct interactions when the working model stops at first order while the ground-visible residual sits beyond it, and when the sign and strength of the relays do not damp it to nothing. The condition is about the relation between an enumeration and a ground, not about an intrinsic property of indirectness. This matters: Fig 11 :61 says **"Introduction is available; exclusion is not."** Contact is a fact about the world and does not consult the observer, so a first-order scope does not remove the far step, it only omits it from the prediction.

World corroboration is recorded, not promoted to a verdict. Wootton 1994 states that *"there are many examples where the direct effects of a manipulated species on a particular target species are much weaker than the indirect effects involved."* Menge 1995 reports that two methods put indirect effects at about 40 percent of the change in community structure from manipulations, range 24 to 61 percent, with the proportion roughly constant across web richness. Zhao et al. 2016 report secondary extinctions *"even when a species is more than one trophic link away from the primary extinction."* These are real measurements in one partially shared evidence pool; they corroborate the shape the figure gives, they do not set a universal threshold.

**Status:** single-source for the figure line, triangulated with the world literature once and declared as one pool.
**Mode:** specified (the dominance condition is falsifiable once a slot, perturbation and anchor are named).
**Refuter:** a system in which, after a habitat correctly enumerated outward, the dominant per-slot residual in every tested species and under every tested perturbation sits at the first order. That would kill the dominance condition as stated.

### F4 — The sign of the loop decides whether the cascade closes or amplifies

Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."**
Fig 12 :46: **"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."**
Operators table: **"sequence / A then B; B needs A to have happened"** (ordered) and **"production / A produces B; B did not exist before"** (ordered).

A food web is not a chain. Fig 12 :121 says a chain cannot close by construction, while a cycle can, and the sign of the loop decides the outcome. The signed product of an interacting chain is our binding onto the figure's cycle and bond vocabulary, not a quote from the figure; it is stated here as `specified` and single-source on the figure side. The "enemy of my enemy" positive effect and the sign inversion on adding a third trophic link are both instances of this binding. The mirror test: the same two species linked through one intermediary versus through two give different signs, so the arrangement, not the ingredient list, carries the outcome (Fig 12 :5, *"The bond is the rest of the information, and it is the half nothing was recording."*).

**Status:** triangulated across Fig 12 (cycle and bond) and Fig 13 (network and flow), with the sign arithmetic itself a binding, named as such.
**Mode:** specified.
**Refuter:** a measured indirect chain whose sign is not the product of its link signs relative to the tracked residual, after the links and the residual are independently measured. That would refute the binding, not the figure.

### F5 — Direct and indirect form a union compound; unbundle before searching

Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**
Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
Fig 9 :57: **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."**
Fig 11 :50: **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."**

An "indirect effect" is not a fifth interaction type to add beside predation and competition. It is a case where two conditions co-occur: A affects B and B affects C. It therefore has its own loop and its own ground, and it must be unbundled from the direct effect before a search for a mechanism begins (Fig 9 :27 to :28: **"describe it before you go looking, or any frame you pick will seem to fit"**). Wootton 2002 distinguishes two general ways the effect arises, through linked chains of direct interactions and through one species changing the interactions among other species, and the Wootton Lab page records the same distinction: *"through chains of linked species interactions (mediated by changes in density) and when a species modifies the interaction between two other species."* These are two members of the union, not two readings of one quantity (Fig 13 :35: *"Space, time and energy are not three readings of one quantity."*, applied as an analogy and marked as our binding).

**Status:** triangulated, Fig 9 and Fig 11.
**Mode:** general.
**Refuter:** a case where direct and indirect contributions to the same slot cannot be separated even in principle by any intervention or path model. That would collapse the union into one condition and kill F5.

### F6 — Two currencies: material flow is not interaction impact

Fig 12 :125: **"A composition costs in two currencies, and they do not add."**
Fig 12 :126: **"Bits price the description. Actions price finding out whether it holds. They are in different units, so a system holding one accounting cannot compare them"**
Fig 12 :130: **"Summing them into one figure is the error this names, not the fix for it."**

Applied to this domain as an explicit binding: the amount of biomass or carbon flowing along a link (a description-currency reading) and the change in recipient abundance caused by removing the link (an intervention-currency reading) are two readings in different units. Zhao et al. 2016 report that *"controlled removal studies have demonstrated empirically that material flow does not always translate directly to the impacts that interaction strength purports to capture."* Novak et al. 2011 find that *"system indeterminacy rapidly overwhelms predictive insights"* once a modest number of pairwise interactions is present, and that sign-only information is weaker than even poorly estimated strengths. Paine 1980 defined a strong interactor operationally: *"A consumer will be a strong interactor if, in its absence, pronounced changes ensue."* That is an intervention definition, not a flow definition.

**Status:** single-source on the figure side (Fig 12), corroborated by three ecology sources that share a partial evidence pool.
**Mode:** specified.
**Refuter:** a demonstrated scalar that ranks both description cost and intervention impact exactly across several webs, such that flow magnitude predicts removal impact without residue. That would dissolve the two-currency distinction for this domain.

### F7 — Habitat is not ground: management has asymmetric power

Fig 11 :61: **"The seat's power is asymmetric. Introduction is available; exclusion is not."**
Fig 11 :63: **"Which is why a managed ecosystem is permanent work rather than a solved state."**
Fig 11 :66: **"Isolation is not removal of the habitat. It is substitution of one habitat for another."**

In the unmaintained habitat nobody authors the list; what survives is what the ground kept (Fig 11 :56). In the maintained habitat a seat can add an actor for its cascade but cannot subtract the habitat. So a management answer to "when do indirect effects outweigh direct ones" is not a one-time calculation: an introduced species re-enters the loop and the work continues. This is the habitat law, not the Fig 6 import law. The earlier reading that treated an ecological introduction as a wall-moving import was wrong and is retracted in section 6.

**Status:** single-source (Fig 11).
**Mode:** general.
**Refuter:** a demonstrated exclusion that genuinely removes an actor from a habitat, rather than substituting a new habitat, with a ground measurement to confirm it. Fig 11 :66 predicts this will look like substitution; a true subtraction would break the law.

### F8 — Valence is relative to the tracked residual

Fig 11 :49: **"An actor's valence is relative to the residual, not a property it carries."**
Fig 11 :51: **"No standing list of good actors survives a change of residual."**
Fig 13 :38: **"Which is Figure 2's condition applied to the set itself: independence is how little two frames draw on the same evidence, and it is what makes their agreement mean anything."** (Used here as the independence rule for two residuals, an analogy and declared as our binding.)

Whether an intermediary amplifies or dampens the effect cannot be read off the species name. A predator can be a benefactor for a plant residual and a malfactor for a herbivore residual in the same web. The dominance condition in F3 is therefore relative to a named residual; it is not a statement about the web as a whole. This is also why a "most influential species" ranking without a named residual is inadmissible (Fig 9 :28, **"describe it before you go looking, or any frame you pick will seem to fit"**).

**Status:** triangulated, Fig 11 and Fig 13 independence rule (analogy, declared).
**Mode:** general.
**Refuter:** an actor whose sign relative to the ground is fixed and identical across two independently defined residuals in the same web. That would give valence a property-like standing and break F8.

### F9 — What survives and what is refused

| claim | mode | figure | status |
|---|---|---|---|
| Propagation is contact outward through an enumerated habitat | general | Fig 11 :43, :44, :52 | triangulated with Fig 13 :24 |
| The residual must be indexed per species and per step | general | Fig 1 :19, :22 | triangulated with Fig 11 :44 |
| Dominance holds when a first-order scope misses a residual that sits further out | specified | Fig 11 :52 | single-source, world corroboration in one pool |
| Loop sign decides closure and amplification | specified | Fig 12 :121 | triangulated for the structure, binding for the sign arithmetic |
| Direct and indirect form a union compound | general | Fig 9 :54, :57; Fig 11 :50 | triangulated |
| Material flow and removal impact are two currencies | specified | Fig 12 :125, :130 | single-source, world corroboration |
| A universal scalar law that indirect always exceeds direct, independent of slot, perturbation and anchor | **refused** | Fig 11 :52 (a scoping case, not a law); Fig 13 :134 (unreachable is a verdict) | gap |

The refusal in the last row is not a silence. Fig 13 :134: **"Unreachable is a verdict here, not a silence,"**. Fig 8 :39: **"So a search that finds nothing is never a proof of absence."** What is owed is an instrument: a named species pair, a named perturbation, a fixed step index and an anchor that does not update.

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach, per the seat map's rule that a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following fires:

1. **Slot refuter.** A pooled, web-wide statistic that still identifies which species needs a mediator and at what contact distance, with no per-slot indexing. Breaks F1.
2. **Contact refuter.** An indirect response confirmed by a ground measurement across a gap in the enumerated contact habitat, with no intermediary at any step. Breaks F2.
3. **Dominance refuter.** A web in which, after correct outward enumeration, the dominant per-slot residual sits at first order in every tested species under every tested perturbation. Breaks F3.
4. **Sign refuter.** A measured indirect chain whose sign is not the product of its link signs relative to the tracked residual, after links and residual are independently measured. Breaks the F4 binding.
5. **Currency refuter.** A scalar that ranks flow magnitude and removal impact exactly across several webs, with no residue. Breaks F6.
6. **Valence refuter.** An actor with identical sign relative to two independently defined residuals in the same web. Breaks F8.

If any fires, the corresponding finding is withdrawn and the verdict is re-censused from the residual line. Until one is run, no ecological dominance claim may be labelled `grounded`.

---

## 5. Recommendation

1. Ask the question as a **shape**, not a law: enumerate outward, index the residual per species and per step, sign it relative to the tracked residual, and name the ground (F1, F2, F8).
2. Treat "when do they outweigh" as a **scoping condition plus a measurement**, not a universal magnitude threshold (F3). The condition is testable precisely because it is about a first-order enumeration missing a further-out residual.
3. Unbundle density-mediated chains from interaction modifications before searching for a mechanism (F5, Wootton 1994 and 2002).
4. Keep flow magnitudes and removal impacts in **separate columns** (F6). A single ranked "importance" number is the flat-formula error.
5. Ask an outside checker for a refutation, using `08_expert_verification_packet.md`, and record their verdict on stage 1 before offering any framework material (Fig 10 :52: **"Bring a characterised residual, never the source."**).
6. Send the generator, not a recording. Fig 4 :25: **"A recording carried upward looks like knowledge and is a description of one occasion."**

---

## 6. Canonical usage check and retraction / confirmation log

Two framework sources were read after the first five sections and govern how the figures may be used: the canonical figures README and `THE_FORMULA.md`. The README states that the figures *"outrank everything else in the repo"*, that *"the quotes are the authority, not this summary"*, and that a reading making two figures contradict one another has *"misidentified its domain, not found a flaw."* It describes the output as *"a shape, not a name"* and *"Indiscernibility is not identity."*

| earlier reading | status after the canonical check |
|---|---|
| "The framework contains a food-web magnitude law" | **Retracted.** Fig 11 contains a DDT scoping case, not a universal law. The dominance claim is a `specified` condition tied to a scoping decision and a ground. |
| "Network must be a new primitive for webs" | **Retracted at census.** Fig 13 :24 lists network among the six structures. No atom is added; no import is owed (Fig 6 :21, *"MINT composes inside the closure and can never add an atom."*). |
| "An ecological introduction is a wall-moving import" | **Retracted.** Fig 11 :61 to :63 governs translocation, not Fig 6. The seat adds to a habitat it did not author. |
| "Indirect effects always outweigh direct ones" | **Refused.** A global verdict with no slot, perturbation or anchor violates the mode rule and Fig 13 :134. Recorded as a gap, not a silence. |
| "Direct and indirect are two kinds of interaction" | **Retracted.** They are two conditions that co-occur; the union reading of Fig 9 :54 governs. |
| "Material flow measures interaction strength" | **Narrowed.** Flow is one currency; removal impact is another (Fig 12 :125). The world sources agree but are one pool. |
| Fig 12 cycle versus Fig 13 network strain | **Not strained.** Fig 12 governs loop sign; Fig 13 governs the structure that carries influence. Different quantities. Recensus, not a softer reading. |
| Fig 1 slot indexing versus fishery/web total abundance | **Not strained.** A web total is a frame-internal aggregate; Fig 1 :22 says exactly that aggregating destroys the signal. The residual is the per-slot vector. |
| Wootton 1994 versus Menge 1995 on relative importance | **Not a conflict.** Wootton says direct effects are often stronger but gives many cases where indirect dominate; Menge reports about 40 percent indirect in rocky intertidal webs. Different residuals and systems, so two readings, not one averaged rank (Fig 12 :130). |
| Wootton 1997 on timing | **Confirming, with a limit.** Indirect effects appeared simultaneously with or shortly after direct effects in intertidal experiments; this limits any claim that indirect effects are always slow, and is recorded as such. |

After re-census: no live strain. Two re-censuses were performed (network as seventh primitive, and introduction as import), both dissolved by assigning the line to its proper quantity.

---

## 7. Honest stop

The figure set gives the **shape** of the answer: contact cascade, outward enumeration, per-slot signed residual, union unbundling, two currencies, and a scoping condition for dominance. It does not give a number, a universal threshold, or a ranking of species, and it cannot, because no ground measurement is held in this derivation. The verdict on the universal form of the question is `gap`, reported as a verdict. The verdict on the scoped form is `specified` and awaits an experiment. Agreement among the world sources is one evidence pool talking (Fig 2 :40), not corroboration by independent frames. No part of this audit can settle the question it reports on.
