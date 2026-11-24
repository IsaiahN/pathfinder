# Figure-grounded audit: is computation intrinsic or observer-relative?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output can *"quickly simulate an approximate answer/output"*; *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim SVGs), `FIGURES_README_canonical.md`, `THE_FORMULA.md`, and the public sources recorded in `10_source_ledger.csv`, all fetched 2026-11-23.

---

## 0. The claim under audit

> **Option A (intrinsic).** Computation is a property of the system itself. A system computes or does not, independently of how anyone describes it. A rock does not compute; a calculator does; a malfunction can be a miscomputation.
>
> **Option B (observer-relative).** Computation is a property of how an observer maps the system's states to inputs and outputs. Under a different mapping the same physical system computes something else, or nothing. The world source for this option is Searle: *"Computation exists only relative to some agent or observer who imposes a computational interpretation on some phenomenon"* (SEP, Chinese Room Argument, quoting Searle 2002b, p.17).

The audit asks which shape each option leads to, and whether the dichotomy is itself the right cut.

---

## 1. The residual in effect terms

**R.** The disputed predicate "computation." We must decide what would settle an ascription of it.

- **Arity: three terms, not two.** The predicate relates (i) a system with states and transitions, (ii) a mapping of those states to inputs and outputs, and (iii) a ground that settles whether the mapping is faithful. Either option in the question drops one term. A drops (ii); B drops (iii).
- **Symmetry: ordered, not symmetric.** The mapping is a directed transform with a vantage. The Symbols table defines F, *"the frame transform"*, as *"The map between allocentric and egocentric at one scale... Cannot be run without a pose"* (Symbols table :79-82). Inputs precede outputs; the frame ranges against the ground, never the reverse (Fig 2 :45). This is not a symmetric join of two peers.
- **Scale: at one scale for the system and its frame, at a different logical type for the ground.** F is *"Distinct from T_A and T_E, which run between scales"* (Symbols table :81). The ground *"does not update"* (Fig 10 :22) and is not a frame.

**What each option leads to.** A leads to a property with no role for the pose, and therefore no account of why one mapping rather than another is correct. B leads to a property with no resistor to an arbitrary mapping, and therefore to the trivialization result the world literature names (Putnam: *"everything is a Probabilistic Automaton under some Description"*). Neither option, alone, closes R.

**Mode:** `general` (the arity and asymmetry are structural), with the consequence for each option `specified`.

---

## 2. Domain census

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | nameable? |
|---|---|---|---|---|
| **D1, the physical system** | states, state transitions, physical components | physical state change (causal transitions) | an instrument reading what the system does under intervention (Fig 2 :29) | yes, a counter or measurement |
| **D2, the observer / mapping frame** | the observer, the mapping F, the pose | mapping states to inputs and outputs | none of its own; it borrows D1's ground | no independent anchor; see F2 and F3 |
| **D3, the ground / verification frame** | instruments, experiments, the researcher | residuals R settled against the anchor | the ground itself, which does not update (Fig 2 :29, Fig 10 :22) | yes, the ground |

**Partition or union.** The question presents a partition (system OR observer). Fig 9 :54 says *"when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :55 adds *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Here the two conditions overlap: a computation ascription needs a system with the right organization (D1), a pose-dependent mapping (D2), and a ground that settles the mapping (D3). A single lever, declaring a mapping, clears the region where only D2 holds and leaves the intersections standing, because D1 and D3 still bind. Fig 9 :57: *"a case in two conditions is not a harder case of either."* So this is a **union compound with its own loop**, not one hard question and not two separate questions. **Verdict: union.**

**Dependency order (Fig 3).** The chain is: track the states (perception), have terms for what the transitions afford (vocabulary), say what would count as a faithful mapping (objective), then settle it. Fig 3 :22-23: a step whose input never arrives is not weak, it is *"a reading of nothing."* A claim of computation made before the ground link is built is a reading below the break. Settle D1, then D2, then D3. Do not optimise a mapping (D2) before the system's transitions are tracked (D1).

**Figure census before findings** (bearing and draft verdict):

| figure | bearing | draft verdict |
|---|---|---|
| 2 The Ground | anchor must not update; anchor legitimate when question is constitutively about it | bars pure B |
| 6 Closure / Reachability | inward and outward are opposed; no search adds an atom | search inside one camp cannot add the missing term |
| 8 Union Surplus | convergent derivation and adopted import look identical; underivable is not unknowable | provenance, not contents, separates the camps |
| 9 Leave / Arrive | union vs partition; describe before looking; filters vs witnesses | the dichotomy is a union; lead with the residual |
| 10 Ground Maintainer | a declared meaning is not a grounded one | bars "any mapping goes" |
| 11 The Habitat | capability is agent-and-habitat, never agent alone | bars pure A |
| 12 The Bond | the bond is the rest of the information; isomer, functional group | computation is in the arrangement, not either term alone |
| 13 Minimum Viable Set | shape, not a name; cannot name a missing primitive | the binary is unreached, not answered |
| Symbols table | F is a frame transform requiring a pose | the observer component is real but bounded |
| THE_FORMULA | mode rule; direction is a discipline; step 7 | state mode; pre-register the refuter |

---

## 3. Findings

### F1: The anchor test bars pure observer-relativity (decisive)

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."*

Fig 2 :36: *"An anchor is legitimate when the question is constitutively about it."*

Fig 2 :37-38: *"Human judgment is the right anchor for is this a good answer for a person, because the question is about people. It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."*

Fig 2 :33-34: *"The anchor must not update. If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together."*

The question "is this system computing X" is constitutively about what the system would do under intervention, not about the observer's classificatory act. If an ascription could be flipped by redrawing the mapping while every physical fact and intervention outcome stayed fixed, the anchor would have become another frame, which is panel 1, coherent drift. So computation cannot be *only* the observer's mapping.

The legitimate sub-case is recorded, not hidden: if the question were constitutively about the observer's practice (for example, "is this a good ascription for a person"), human judgment would be the right anchor by Fig 2 :37. The framework cannot decide a priori which the question is constitutively about; that requires the ground. This is named as a strain in §9.

**Mode:** `specified`. **Status:** `triangulated` (Fig 2's anchor rule and Fig 10 :49 below are two figures with low overlap). **Refuter:** an experiment in which the computational status of a system changes while all physical facts and intervention outcomes are held fixed.

### F2: But the mapping is real and pose-dependent (the part B gets right)

Symbols table :80-82: *"the frame transform"*, *"The map between allocentric and egocentric at one scale. Distinct from T_A and T_E, which run between scales. Cannot be run without a pose."*

Fig 10 :68: *"Different actors, a different currency, a different ground, and a lossy transform between."*

There IS an observer-dependent component: a transform F, from a vantage, between the system's own description and the frame's description. It is lossy. But F runs at one scale and is *"Distinct from T_A and T_E"*, so it is not a free redescription of the system at any level. The observer contributes a pose, not the property.

**Mode:** `general` (structural). **Status:** `triangulated` for the claim that a lossy frame transform exists (Symbols table and Fig 10), `single-source` for its specific identification as F. **Refuter:** a description of a system's states that yields a unique input/output partition with no vantage or pose at all.

### F3: A declared mapping is not a grounded mapping (bars "anything goes")

Fig 10 :18: *"a declared meaning is not a grounded one."*

Fig 10 :49: *"Declaring a meaning does not ground it."*

Fig 8 :51-52: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them."*

An observer imposing a computational interpretation is declaring a meaning. The figures forbid treating a declaration as a settlement. This is the framework's form of the trivialization problem the world literature documents: the simple mapping account makes a rock under the sun implement a NOT gate, because a mapping of temperature states to 0 and 1 is easy to find. The SEP on computation in physical systems states the problem directly: *"solving it requires an account of concrete computation."* The restriction is not "the observer may not map"; it is "the mapping must pay against the ground."

**Mode:** `specified`. **Status:** `triangulated` (Fig 10 and Fig 8). **Refuter:** a case in which an unrestricted mapping, with no counterfactual or causal support, is sufficient for a genuine computation ascription.

### F4: The bond reading: computation is in the arrangement, not in either term

Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*

Fig 12 :46-47: *"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands. A recipe that names only its ingredients has recorded half of itself."*

Fig 12 :95-96: *"Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."*

The system's states are the ingredients. The mapping is the typed bond. The rock and the NOT gate can share the same state pattern while differing in the bond: the rock's transitions are driven by the sun, not by the rock's own causal organization. So the intrinsic option misses the bond, and the observer-relative option misses the requirement that the bond be typed and priced, not freely declared. Computation is in the bonded arrangement.

**Mode:** `general` on the bond rule, `specified` on the rock case. **Status:** `single-source` for the isomer/bond definition (Fig 12), triangulated with Fig 11 :39-40 for the relational claim in F5. **Refuter:** a system whose states and transitions are fully described but for which the mapping adds no information, or two systems with identical states and identical bonds but different computational status.

### F5: Capability is relational, but not arbitrary

Fig 11 :39: *"capability is a property of agent-and-habitat, never of the agent alone."*

Fig 11 :40: *"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."*

Fig 11 :73: *"The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."*

The intrinsic option is right that something must change in the system, not only in the description. It is wrong that the property belongs to the system alone. The habitat analogue gives the shape: a property of system-and-contact, where contact is settled by the ground. This is not the same as saying the observer makes it so, because the habitat is enumerated from the world, not composed by the observer (Fig 11 :43-48).

**Mode:** `specified`. **Status:** `triangulated` (Fig 11 and Fig 2). **Refuter:** an agent-only improvement that moves the ground. The figure itself names this as its standing refuter (Fig 11 :72).

### F6: The framework returns a shape, so it cannot certify either camp

Fig 9 :32: *"you get a kind of thing, never the answer itself."*

Fig 13 :135: *"It cannot say which primitive is missing, because naming it would mean already holding it."*

Fig 8 :39: *"a search that finds nothing is never a proof of absence."*

The honest output is the shape any answer must have: three terms, a pose-dependent transform, a ground that does not update. It is not a verdict that "intrinsic" or "observer-relative" is the correct name. Calling the question `unreached` is different from calling it `unreachable`: no discriminator has been applied, so the binary is open, not declared undecidable. Fig 8 :32: *"no search, however long, adds an atom"*; more reading within one camp will not supply the missing discriminator.

**Mode:** `general`. **Status:** `triangulated` (Fig 9 and Fig 13). **Refuter:** a figure line that names which of the three terms is constitutive of computation, or an instrument that discriminates the two options at the ground.

### F7: Reachability: two opposed tracks, never read against each other

Fig 6 :29: *"inward: is our representation adequate to hold it? The instrument extends access."*

Fig 6 :30: *"outward: does another frame already hold it? The description travels."*

Fig 8 :54: *"the atom cannot be derived from inside A. But the union is searchable from contact, so underivable is not unknowable."*

INWARD asks whether our vocabulary can hold the property (a better discriminator of causal organization). OUTWARD asks whether another frame already holds it (the mechanistic and restricted-mapping accounts in the world literature). `THE_FORMULA.md` step 7: *"INWARD and OUTWARD are opposed; never read one against the other."* Their agreement would be one evidence pool if both are read by the same seat, so the world sources in `09_watson_answer.md` are corroboration only.

**Mode:** `general`. **Status:** `triangulated` (Fig 6 and Fig 8). **Refuter:** a derivation of the missing discriminator purely inside one frame, which would collapse the two tracks.

### F8: Filters are not witnesses

Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

Choosing which philosophical camp to read first, or which venue to submit to, is a budget decision. It says nothing about which account is true. Selecting experts for likely agreement is the collapse Fig 2 :40 names.

**Mode:** `general`. **Status:** `single-source` (Fig 9 :60). **Refuter:** a verdict that changes when the reading order changes.

---

## 4. Pre-registered refuter

Required before any outreach. The shape claim is refuted if any of the following holds:

1. A system's computational status changes when an observer redraws the mapping while every physical fact and intervention outcome is held fixed (breaks F1 and Fig 2 :29-30).
2. No pose-dependent frame transform is needed: the states alone yield the input/output partition uniquely, with no vantage (breaks F2 and Symbols table :82).
3. An unrestricted mapping with no counterfactual or causal support is sufficient for a genuine computation ascription (breaks F3 and Fig 10 :49).
4. Two systems with identical states and identical typed bonds differ in computational status (breaks F4 and Fig 12 :95-96).
5. An experiment shows computation tracking the observer's ascription rather than the system's intervention-invariant causal organization (breaks the ground claim at the ground).

Written before the conclusion. If any fires, the shape is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with the union reframe, not with a winner between the two camps (F7, Fig 9 :54).
2. State the mode on every sentence. The output is `specified`, not `grounded`.
3. Put the residual and its refuter before the framework. Fig 10 :52: *"Bring a characterised residual, never the source."*
4. Use the public submission and contact points in `03_public_contact_points.csv`. Ask what would count as a failure rather than agreement.
5. Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."* Send the generator, the residual and the refuter, not a conclusion.

---

## 6. Canonical usage check

Two local sources govern use after the first five sections:

- `FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; and the limit: the framework says what a missing thing would look like, *"a shape, not a name"*, then stops at the limit of the available instruments and records the lineage. *"Indiscernibility is not identity."*
- `THE_FORMULA.md`: the mode rule, and *"Direction"*, the discipline of making the sought-for shape an ordinary term so it can accrue a residual and be refused.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "The framework answers that computation is observer-relative, because F needs a pose." | **Retracted as one-sided.** Fig 2's anchor rule and Fig 11's capability claim forbid reducing the property to the mapping. The correct shape is the union compound (F1, F5). |
| "Fig 13's 'cannot name the missing primitive' means a total gap." | **Narrowed.** The binary is `unreached`, not `unreachable`. The shape is given (F6). Fig 8 :39: a search that finds nothing is not a proof of absence. |
| "Union means two separate questions, one for the system and one for the observer." | **Retracted.** Fig 9 :55-57 makes it a compound with its own loop and its own ground, not a list (§2). |
| "Declaring a mapping is just the observer-relative account, so the figures side with B." | **Retracted.** Fig 10 :49 forbids a declaration counting as a settlement; this is a restriction on B, not an endorsement (F3). |
| F1's legitimate sub-case (question constitutively about an observer's practice) | **Retained as a named strain**, not smoothed. Fig 2 :36-38 licenses the observer as anchor only for questions constitutively about people. |
| F4 bond/isomer reading | **Canonically confirmed** as a shape claim by Fig 12, but not a name: the figures do not say which bond an imputation uses for a given system. |
| Simulated status | **Confirmed** by *The Recursive Self-Improvement Trap*. This audit cannot settle the question it audits. |

---

## 7. Conclusion / updated verdict

The dichotomy is the wrong shape. Computation is a three-term union compound: a system with the right organization, a pose-dependent frame transform, and a ground that settles the mapping. Pure A omits the pose and cannot say why one mapping is correct. Pure B omits the ground and trivializes, because a declared meaning is not a grounded one. The figure-derived shape survives all eight findings; the choice between the two names stays `unreached`, not `unreachable`, until an instrument that discriminates intervention-invariant causal structure from imposed description is applied. Strains after re-census: one named (the observer-as-anchor sub-case), none hidden. Mode: `specified`, ungrounded, candidate.
