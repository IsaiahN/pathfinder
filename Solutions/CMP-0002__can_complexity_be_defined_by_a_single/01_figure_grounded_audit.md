# Figure-grounded audit: can complexity be one measurable quantity?

**Mode of this document: `general` on the structural shape, `specified` on the per-domain measures, `gap` on any universal complexity index. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** The Recursive Self-Improvement Trap states that LLMs "can quickly simulate an approximate answer/output with the formula" but "the truly testable output would need to be derived from the real architecture or working the formula yourself." What follows is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, line-numbered), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, the eight essays, and the public sources in `10_source_ledger.csv`. All opened 2026-11-22.

---

## 0. The question under audit, in effect terms

> Can complexity be defined by a single measurable quantity, or does it require different measures for different systems?

Stated as an effect, the question decides what a measurement report may contain.

- **Option A (one scalar).** Collapse the readings of a system into one number, call that number its complexity, and use it to compare across systems. This leads to a report that can rank systems cheaply but cannot say *where* a difference lives, mixes quantities that have different units, and may score a frame by a quantity the frame itself produces.
- **Option B (different measures).** Keep a system's readings separate, each with its own currency and anchor, and check whether two readings are independent before treating them as two measures. This leads to a report that says where a difference lives and what would settle it, at the cost of refusing a single ranking.

What an answer would look like, bound as an ordinary term before the run (Formula step "Direction"): a *measure shape*, that is, the minimum set of readings any admissible complexity report must contain, the relations between them, and which of them may legitimately vary with the system. Binding the sought-for shape in advance is what makes it refusable rather than a preference the derivation quietly satisfies.

---

## 1. Residual and domain census

### 1.1 R by arity, symmetry and scale

- **Arity:** more than one condition. A complexity report can price a description, price the contact that settles it, record an arrangement, and track a per-component residual. These are at least four conditions, so this is a **union compound** (Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."), not one hard question that a sharper single instrument would resolve.
- **Symmetry:** the comparison between two candidate measures is *not* automatically symmetric in the relevant sense. Whether two measures are two independent frames or one frame with two names is decided by independence (Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence."). Two measures that agree because they share a pool are one measure wearing two labels.
- **Scale:** per component, per system, and per level. Composition is recursive (Fig 12 :103 "Composition is recursive, and the level decides what is irreducible."), so a measure that is primitive at one level is a composed reading at another.

### 1.2 One line per domain (actors / currency / anchor)

| domain | actors | currency | anchor | nameable anchor? | verdict |
|---|---|---|---|---|---|
| D1 Representation and description | library Γ, atoms, candidate term φ, the declared code | bits (description length, |φ|) | the code and the MDL bargain, settled against the ground | yes: compression paid for by data | `general`, triangulated |
| D2 Contact and settling | the ground, instruments, actions, per-slot residual R | actions (cost of finding out whether a composition holds) | the ground, which does not update on the frame | yes: an experiment, a counter, a market, an outcome | `general`, triangulated |
| D3 Structure and arrangement | atoms, bonds, molecules, networks, gradients | the typed relation (the bond) plus the arrangement | the behaviour difference that an arrangement makes | yes: isomer behaviour at the ground | `specified`, triangulated for the figure definition |
| D4 Verification and cross-system comparison | measures, frames, seats, registered reports | independence (how little the frames draw on the same evidence) | the ground, never agreement | yes: a ground that pays or does not | `general`, triangulated |

Every domain has a nameable anchor. D1 is not yet a domain if we speak of "information" without a code; the moment we require a declared code, the anchor appears (Fig 5 :45 "This is minimum description length, Rissanen 1978, which is itself a composition of Kolmogorov complexity and Shannon coding put to work on model selection."). D4 would not be a domain if its currency were agreement, because agreement has no anchor that cannot move; with independence as its currency and the ground as its anchor it is a domain.

### 1.3 Partition or union

**Union, not partition.** One scalar cannot clear the intersections. A single lever applies to whichever single condition holds and leaves the cases where two conditions bind untouched (Fig 9 :55). "Complexity" is the name of the union, not of one member of it. Verdicts are kept per domain and never averaged. An averaged complexity score is precisely the operation the agent figure forbids.

### 1.4 Dependency order (Fig 3)

1. **Describe R before choosing a frame** (Fig 9 :27-28 "describe it before you go looking, or any frame you pick will seem to fit"). Otherwise any complexity measure we happen to know will seem to fit.
2. **Settle D1 and D2 before composing D3**, because an arrangement cannot be priced in actions until the contact that would settle it exists (Fig 3 :20 "The chain is ordered by dependency, not by importance.").
3. **Refuse before mint** (Formula step 2). The single-scalar claim is a refusal target, not a new measure to mint.
4. **Check D4 throughout**, buying independence in proportion to the cost of being wrong (Fig 2 :42 "Buy independence in proportion to the cost of being wrong.").

Strain test applied and resolved where possible; see §7.

---

## 2. Figure census

| figure | bearing on this question | verdict |
|---|---|---|
| 1 The Agent | frame-internal quantities disqualified; residual per slot | no single global score |
| 2 The Ground | anchor must not update; independence decides whether two measures are two | no score from a frame that produces it |
| 3 Dependency Chain | order by dependency; the middle link has no instrument | describe R before picking a measure |
| 4 The Membrane | kernel invariant, actors/currency/anchor change with size | the *form* is general, the measures are per system |
| 5 Mint Pipeline | description cost is an MDL bargain; machinery firing is not success | bits are one axis, not the whole answer |
| 6 Closure / Reachability | no frame escapes its closure; import is the only operator that moves the wall | a universal index is not reachable by search |
| 7 Room Chain | agreement compounds, evidence does not | many measures from one pool are one witness |
| 8 Union Surplus | independence read twice; convergent derivation versus adopted import | two measures need low overlap to be two |
| 9 Leave / Arrive | union before search; describe before looking; filters are not witnesses | the question is a bundled union |
| 10 Ground Maintainer | different actors, currency, ground per level | different systems legitimately use different measures |
| 11 The Habitat | capability is agent-and-habitat; enumerate contacts | a measure lives in a contact network, not in the system alone |
| 12 The Bond | two currencies that do not add; arrangement carries information | decisive against a single scalar |
| 13 Minimum Viable Set | primitives are not readings of one quantity; independent axes | decisive against collapsing axes |
| Operators table | addition is a symmetric bond; it cannot carry two currencies | "summing them" is a notation error |
| Symbols table | R is a slice per slot, never a single global number | the quantity to be measured is indexed |

---

## 3. Findings

### F1 — Any composition has at least two prices, and they do not add (decisive)

Fig 12 :125: "A composition costs in two currencies, and they do not add."
Fig 12 :126: "Bits price the description. Actions price finding out whether it holds. They are in different units, so a system holding one accounting cannot compare them"
Fig 12 :130: "Summing them into one figure is the error this names, not the fix for it. A price in bits and a price in actions are two readings, held apart."

This is the figure that governs the question most directly. A complexity report has to say how hard a system is to describe (bits, the MDL/Kolmogorov family, Fig 5 :45) and how much it costs to settle a claim about it against the ground (actions, instruments, experiments). These are "different units" and the figures call a single combined number "the error this names, not the fix for it." The Operators table adds that addition is a symmetric bond ("a threshold relation between two quantities" belongs to ⋛, while + means "both hold at once"); a bond records a typed relation, not a unit conversion. So a scalar "complexity = bits + actions" is not a clever unification, it is a notation error that discards the type.

Mode `general`: the two-currency price is structural, not an empirical finding about one system. `triangulated` across Fig 12 and Fig 5 (MDL is itself a composition of two earlier results, per Fig 5 :45).

**Refuter:** show a system for which the description price and the settling price are the same quantity in the same unit, so that one number preserves both readings with no loss, and show why Fig 12 :125-130 was aimed at a different quantity. Until then, the single scalar is refused as written.

### F2 — The axes are not readings of one quantity

Fig 13 :35: "Space, time and energy are not three readings of one quantity. Neither are spectrum, gradient and network."
Fig 13 :36: "Each answers a question the other two cannot: adjacency is not duration, an ordering is not a pathway, a pathway is not a direction."
Fig 13 :36-37: "If two members drew on the same underlying fact, their agreement would carry no information, and one of them would be redundant rather than minimal."

The minimum set is explicitly not a set of measurements of one latent thing. Each member answers a question the others cannot, and two members that drew on the same underlying fact would be redundant rather than minimal. Applied to complexity: an entropy reading, a description-length reading, a network-topology reading and a thermodynamically grounded reading are candidates for independent axes only if they answer different questions and do not draw on the same evidence. Their agreement is *evidence only at maximum independence* (Fig 8 :47 "Independence is one quantity read twice."). A single scalar that merges them destroys the very property that makes them informative.

Mode `general` for the axis-independence rule; `specified` for the claim that any particular four measures are the axes. `triangulated` across Fig 13 and Fig 2.

**Refuter:** demonstrate that two proposed complexity measures draw on exactly the same evidence yet carry distinct, non-redundant information that a scalar would lose. That would break the independence criterion and force a re-census of what "axis" means here.

### F3 — Residual is indexed, never aggregated

Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
Fig 1 :23: "The ground enters as the only metric."

A global complexity number is an average across the object slots of a system. The agent figure says that is exactly how the signal that says *where to look* disappears. This is the mechanism-level reason a single scalar fails, and it is independent of F1 and F2 (different figure, low overlap). The cybernetics literature supplies a clean low-overlap witness: Stafford Beer notes that no amount of variety recording a patient's *average* temperature detects a small local signal (recorded in `09_watson_answer.md` WORLD).

Mode `general`. `triangulated` across Fig 1 and the cybernetics source (different evidence pools).

**Refuter:** produce a scalar that provably preserves the per-slot location of a live residual and is settled by the ground, so that averaging loses nothing. Then Fig 1 :22 is aimed at a different quantity and the per-slot objection falls.

### F4 — A frame cannot score itself

Fig 1 :27: "A frame cannot score itself with a quantity it also produces."
Fig 1 :25-26 (the disqualified list): "coverage, and compression achieved" and "predicates minted, and credibility accrued" are frame-internal.
Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."

A complexity number computed from the vocabulary, the term count, or the compression the measuring frame itself produced is frame-internal and disqualified. The measure must range against an anchor outside the frame. This rules out the common move of defining complexity by the size of the description the observer happens to write, unless the code is declared and the result is paid for by data at a ground (Fig 5 :45).

Mode `general`. `triangulated` across Fig 1 and Fig 2.

**Refuter:** exhibit a single scalar that does not depend on any quantity its own frame produces and whose anchor does not move when the frame changes. That would clear the self-scoring objection.

### F5 — What varies with the system is the currency and the anchor, not the form

Fig 4 :20: "Only the actors, the currency and the anchor change."
Fig 10 :68: "Different actors, a different currency, a different ground, and a lossy transform between."

This is the part of the question that Option B gets right and that a naive "everything is relative" answer gets wrong. The kernel of the measurement discipline is invariant: describe R, price description and contact separately, keep per-slot readings, check independence, range against the ground. What changes from system to system is the cast, the currency and the anchor. So the answer is *not* "anything goes, every system needs its own ad hoc measure." It is: the *shape* of the measure is general, while the *binding* is per system and must be provenanced.

Mode `general` on the invariant kernel, `specified` on any particular binding. `triangulated` across Fig 4 and Fig 10.

**Refuter:** show two systems for which no shared measurement kernel exists, so that only the ad hoc measures survive and the general shape is empty. That would break the domain-agnostic claim.

### F6 — A universal scalar is unreachable, and that is a verdict

Fig 13 :115: "The set is closed. The arrangements are not."
Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."
Fig 13 :134: "Unreachable is a verdict here, not a silence,"
Fig 8 :39: "So a search that finds nothing is never a proof of absence."

The six-term substrate is closed: no amount of arranging produces a seventh kind. A single universal complexity scalar is not a term we have failed to find inside the closure of current measures; it would be a new *kind* of measurement that collapses currencies and axes, which the figures forbid definitionally. The correct report is `gap` / unreachable, not "we have not measured it well enough yet." Note the honest asymmetry: this is not a proof that no scalar could ever be useful for a narrow purpose. It is a verdict that the scalar is not figure-licensed as a definition of complexity across systems. "A search that finds nothing is never a proof of absence" cuts the other way too, so we do not claim to have disproved every possible scalar.

Mode `general` on the structural verdict. `single-source` for the closure claim (Fig 6 and Fig 13 are the same framework family, low independence between them).

**Refuter:** an imported primitive, from a frame whose closure genuinely differs, that makes bits and actions commensurable without loss. That would move the wall and clear the `gap`. An import would need a source gate and a shadow test (Fig 6 :12-13).

### F7 — The world literature agrees that there is no unique definition, and disagrees about the proxies

The Complexity article reports that "even among scientists, there is no unique definition of complexity", and lists field-specific measures: algorithmic, information-theoretic, statistical, network, computational, software, and others. Integrated information theory offers a single scalar Φ, but its computation is intractable and "different ways of approximating Φ provide radically different results"; it is contested as unfalsifiable. Ashby's cybernetic variety is measured in bits and requires the observer's powers of discrimination to be specified. These are secondary corroboration only; they share no author with the figures, but Wikipedia articles are one tertiary evidence pool, not three independent witnesses.

Mode `general`. `triangulated` with F1, F3 and F4 across different fields (information theory, neuroscience, cybernetics), with pool overlap declared.

**Refuter:** a widely accepted, instrument-backed scalar complexity measure that predicts the same per-slot and independence results as the multi-axis report. That would be a ground reading and would move the verdict.

### F8 — Filters are not witnesses

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

A measure's convenience (one number, easy ranking, cheap computation) is a budget filter, not evidence that the number is the right definition. This file uses figure lines as witnesses and uses tractability only to decide what gets tried first.

Mode `general`. `triangulated` with the seat map's prestige/action rule.

**Refuter:** show tractability being used in the derivation as a premise for the verdict. That would be a live internal violation and this finding would be withdrawn as unapplied.

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach: the falsifier is a design instrument (Seat Map :287).

The shape claim of this solution, namely that complexity cannot be one scalar and instead has a per-system, multi-axis, non-additive, per-slot shape anchored to the ground, is **refuted** if any one of the following is demonstrated:

1. **Commensurability.** A single quantity prices description and settling in one unit for the same system, preserving both readings with no loss, so that Fig 12 :125-130 is shown to govern a different quantity.
2. **Axis collapse.** Two proposed complexity axes are shown to draw on exactly the same evidence yet remain non-redundant and informative, so that the independence criterion in Fig 2 :31 and Fig 13 :36-37 is wrong for this domain.
3. **Aggregation safety.** A scalar is shown to preserve the per-slot location of a live residual and to be settled by a ground outside the measuring frame, so that Fig 1 :19-27 is aimed at a different quantity.
4. **Ground reading.** An instrument pays for a universal scalar across at least two genuinely different systems, with source gate and shadow test recorded. That would be an import that moves the wall (Fig 6 :23).

If any fires, the shape claim is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Reject Option A as written. The single scalar is a category error, not an approximation (F1, F2, F6).
2. Report complexity as a vector over independent axes with at least two non-additive currencies, per-slot residuals, and an explicit anchor per axis (F1 to F5).
3. Keep verdicts per domain and never average them into a ranking (F3, §1.3).
4. Make the binding per system, provenance it, and refuse any claim that the six-term set is nature's own list of complexity axes (F5; the essays say it is "a human's careful guess at reality's compression axes").
5. Report a `gap` for the universal index rather than inventing one. "Unreachable is a verdict here, not a silence," (Fig 13 :134).
6. Send the packet in `08_expert_verification_packet.md`, ask for a refutation, and do not pool later agreement as corroboration (Fig 2 :40).

---

## 6. Canonical usage check and retraction log

Two sources were read after the first five sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "out-rank everything else in the repo" and "the quotes are the authority, not this summary." A reading that makes figures contradict one another has misidentified its domain. The framework returns "what a missing thing would have to look like (a shape, not a name)" and stops where instruments cannot distinguish, recording the lineage. "Indiscernibility is not identity."
- `docs/05-RESEARCH/60-WATSON_2026-11-22_FIGURES_AS_METALAWS.md` (local copy): design questions are settled by derivation from the figures, not by escalation to an authority; the seat reads the ground.

### Retractions and confirmations

| earlier reading in this audit | status after the canonical check |
|---|---|
| "F1 is decisive against any scalar" | **Narrowed, not retracted.** It is decisive against a scalar that merges the two currencies. A narrow scalar for a single, declared purpose is not ruled out; the figures do not license it as a *definition* of complexity across systems. F6 carries that limit. |
| "the six-term set gives the universal axis list" | **Refused.** The README's "shape, not a name" plus the essay line "a human's careful guess at reality's compression axes; another sensorium's minimum set need not be those six" make this a visible choice, not a discovery. F5 now states the invariant kernel and leaves the binding open. |
| "this proves no complexity scalar can exist" | **Retracted.** Fig 8 :39 says a search that finds nothing is never a proof of absence, and the closure argument proves underivability from *this* set, not impossibility everywhere. Replaced by the `gap` verdict in F6. |
| "the world sources corroborate independently" | **Narrowed.** They are three different fields but a cluster of Wikipedia articles is one tertiary pool, not several witnesses. Declared in F7 and in `09_watson_answer.md`. |
| "Fig 12 sums currencies" | **Retracted at the source.** The figures say the opposite: "Summing them into one figure is the error this names, not the fix for it." No sum is performed anywhere in this solution. |
| F1 to F5 and F8 | **Canonically confirmed.** Each is a verbatim figure line, checked character by character against `03-FIGURES_TEXT.md`, with mode and refuter attached. |

---

## 7. Strains, re-census, and honest stop

- **Possible strain Fig 13 versus Fig 12.** The minimum set looks like one fixed list of axes, while Fig 12 says the arrangement carries the substance. Re-census resolves it: Fig 13 governs primitive kinds; Fig 12 governs arrangements and their prices. Different objects, no strain after re-census.
- **Possible strain F1 versus F5.** F1 says currencies do not add; F5 says the form of measurement is general. Re-census: the general form *is* "keep them separate," so there is no contradiction. A single scalar would break the form.
- **Live strain, named:** whether any two proposed complexity measures are genuinely independent is an empirical question about the evidence pools, not a figure question. The figures supply the criterion (Fig 2 :31); the measurement is owed to the ground. Not hidden, not smoothed.
- **After re-census: one open empirical strain, none hidden.**

**Honest stop.** This is a `general` structural result with `specified` per-domain bindings and a declared `gap`. It is ungrounded. The verdict is a shape, not a name: a complexity report must keep currencies separate, keep readings per slot, check independence, and range against the ground. What would settle the remaining question is a ground reading, not more agreement.
