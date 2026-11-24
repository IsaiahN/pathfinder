# Figure-grounded audit: how information should be defined in a quantum system

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, 2026): LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** The local verbatim figure extract `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FIGURES_README_canonical.md`, `THE_FORMULA.md`, and the eight essays. World sources are listed in `10_source_ledger.csv` and used only as secondary corroboration.

---

## 0. The question under audit

> How should information be defined in quantum systems when measurement outcomes depend on the measurement context?
>
> Source: `Questions/Information Theory.txt` line 19, section `2. Information, physics, and thermodynamics`.

Restated as an effect: a prepared system is presented, and a family of mutually incompatible measurement contexts can be applied to it. Each context yields an outcome distribution. We want a definition of *information in the system* that (a) picks out something in the system rather than in a particular read-out, (b) does not change its answer when the context changes, and (c) can be composed with other defined quantities. Option **A** identifies information with the read-out of the chosen context. Option **B** identifies it with the context-invariant quantity and demotes the context to the pose that renders a read-out. The cost of A is a definition whose referent moves with the experimenter's choice. The cost of B is an open slot: the framework returns a shape and refuses to name the occupant.

---

## 1. The residual in effect terms

`R = | Γ(b,a) − o′ |` per slot `s` (Fig 1 and `THE_FORMULA.md` step 1). Symbols table: *"The gap between prediction and observation. The central quantity: everything the system does is driven by it. It is the aim, not only the error signal, and it is always a slice: what cannot be perceived yet is residual and simply cannot be read."*

- **What arrived:** for the same preparation, different compatible-measurement sets return different outcome values, and no assignment of noncontextual definite values reproduces all of them (Held, SEP 2000/2022; Budroni et al., 2022/2023). The read-out depends on the context.
- **What was predicted:** a definition of information that denotes something stable about the system.
- **The slots:** each measurement context is a slot, not a sample from one homogeneous pool. Fig 1 :19, *"The residual is indexed by object slot, not aggregated."* Fig 1 :22, *"Aggregating across slots is how a live signal disappears into an average."* An average "information gained over all bases" throws away the only signal that says which context was used.
- **What cannot be perceived yet:** which quantity in the system plays the invariant role, and whether a context-independent instrument can name it. That is residual, not a name we already hold.

---

## 2. Domain census

Before choosing any figure line, describe R by arity, symmetry and scale, then one line per domain with actors, currency and anchor. No nameable anchor means it is not a domain yet.

**R (arity / symmetry / scale).** Arity: one prepared system against a family of contexts, at least two incompatible ones. Symmetry: changing the context is a relabelling that leaves the invariant quantity alone but changes the outcome report, so it is not a symmetric join of two equal operands. Scale: first order inside one preparation and one measurement, second order when several contexts are composed into a state estimate (tomography). Fig 9 :4-5 names this a **union compound**, not one hard problem: *"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."*

| domain | actors | currency | anchor | nameable? |
|---|---|---|---|---|
| D1, framework-internal composition | six terms, seven bonds, negation, R per slot, φ, Γ | composition inside `closure(Γ)`, then settlement | the figures as metalaws, and the ground for any measurement | yes |
| D2, quantum physics frame | prepared state ρ, observables and projectors, contexts as sets of compatible observables, outcomes, entropy functionals | prediction of outcome probabilities | experiment, the instrument that registers an outcome | yes |
| D3, verification and cognition frame | experimenters, modellers, human respondents, question order | residuals and agreement | the ground, never agreement | yes |

**Partition or union.** Union. D1 asks what composes across the two kinds; D2 asks how a context maps a state to an outcome; D3 asks whether two frames can check each other. Bundling them into "define information" makes the disagreement look like one hard question when it is several well-formed ones with separate grounds. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*

**Dependency order (Fig 3).** Describe R before picking a frame (Fig 9 :27-28). Refuse a context-dependent definition before minting a new one (formula step 2). Settle the invariant at first order before composing contexts into a state estimate at second order (Fig 12 :104). A reading taken below the break in this chain is a reading of nothing (Fig 3 :22-23).

**Strain test applied up front.** Fig 2 says an anchor must not update on the frames. A careless reading demands a noncontextual assignment of definite values to every observable, which the Kochen-Specker theorem forbids in dimension three and above. Re-census resolves it: the anchor is the context-invariant state quantity, not a value map over observables. Value definiteness and state invariance are different objects (Fig 13 :38-39: *"Six members that overlapped would be fewer members wearing six names."*). No strain survives the re-census. This is recorded, not smoothed over.

---

## 3. Figure census

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | residual per object slot; frame-internal quantities cannot score the frame | contexts are slots; averaging over them destroys the signal |
| **2 The Ground** | anchor test; two collapses; correlation disqualifies a verdict | a context-moving definition has no anchor |
| **3 Dependency Chain** | order by dependency; a reading below the break reads nothing | describe, refuse, then settle; do not compose first |
| **4 The Membrane** | *"Only methods cross up. Only head starts come down."* lossy transform and round trip | invariant to outcome is lossy; `R_T` must be measured |
| **5 Mint Pipeline** | three guards as a product; refuted kind; shape as preference | a definition is not a mint; support and novelty fail |
| **6 Closure / Reachability** | import is the only operator that moves the wall; cast in effect terms | the state/entropy candidate is a binding, not a new atom |
| **7 Room Chain** | *"A room's agreement is variation, not a verdict"* | agreement among contexts is not evidence |
| **8 Union Surplus** | convergent derivation and adopted import look identical | provenance separates a derived shape from an imported name |
| **9 Leave / Arrive** | split a union before searching; describe the effect, not the cause | the question must be unbundled; the slot stays open |
| **10 Ground Maintainer** | *"a convention that decides an outcome has stopped being one"* | choosing a basis cannot decide what information is |
| **11 The Habitat** | capability is agent-and-habitat; introduce, never subtract | the context is part of the measurement habitat, not removable |
| **12 The Bond** | the bond carries information the operands do not; isomer, functional group | outcome belongs to the system-context compound |
| **13 Minimum Viable Set** | two kinds in lockstep; overlapping members would be fewer names | re-census splits value definiteness from state invariance |
| **Operators table** | ⋛ comparison, ¬ negation; seven bonds | no operator here names a measurement basis |
| **Symbols table** | `F` is the frame transform and *"Cannot be run without a pose."* | the context is the pose; `R` is per slot; the ground is the anchor |

Strained readings are named as such below, not hidden.

---

## 4. Findings

### F1 - This is a union compound, not one hard question (governing)

Fig 9 :4-5, verbatim above, applies directly. Two rules work well on different subsets: the rule "information is a read-out" works inside a fixed context, and the rule "information is invariant" works across contexts. They do not shrink into one question with effort. Fig 9 :54 adds: *"And when the split lands on a union rather than a partition, unbundle before you search again."*

**Consequence:** the definition question and the context-dependence question get separate loops and separate grounds. A single lever that clears the definition-only region leaves the context-only intersection standing.

**Refuter:** show that one and the same rule resolves both subsets without a remainder, so the compound is a partition after all.

### F2 - A definition that changes with the measurement context has no anchor (decisive, triangulated)

Fig 2 :29-30: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."** Symbols table lines 102 to 106: *"Whatever settles the question and does not change its answer because of what any frame thinks. It is not a frame and has no vantage to update from."*

If the measurement context is allowed to change the definition of information, the definition is panel 1 of Fig 2: no anchor, each frame updates on the others, and they converge on whoever had the most influence. The chosen basis, not the system, decides what the word denotes. Fig 4 :19-20 states the invariant kernel: **"Only the actors, the currency and the anchor change."** A definition of information is not an actor, a currency or an anchor of the loop; it is the thing being anchored.

**Verdict:** Option A is refused as a definition. It is a report, not an anchor. `triangulated` across Fig 2 and the Symbols table, low overlap between the alignment diagram and the notation table.

**Refuter:** exhibit a measurement context such that the definition changes with it and the change is still called the same quantity by the ground (an instrument that settles the question and is itself moved by the choice of basis). By the anchor test that is impossible by construction; a genuine counterexample would have to show the anchor moving and still being an anchor.

### F3 - The outcome requires a pose (single-source figure line, corroborated in physics)

Symbols table lines 79 to 82 define `F`: *"The frame transform / The map between allocentric and egocentric at one scale. Distinct from T_A and T_E, which run between scales. Cannot be run without a pose."*

The invariant quantity is allocentric. The outcome report is egocentric. The transform between them cannot be run without a pose, and the measurement context is that pose. This is the figure's exact structural reading of contextuality: the same state yields different outcomes because the pose changed, not because the state changed.

Corroboration, secondary only: Witten (2019) states that von Neumann entropy *"is manifestly invariant under a unitary transformation ρA → UρAU−1"*, while Shannon entropy is defined once a probability distribution, hence a specified measurement, has been assigned. Budroni et al. (2022/2023) define a context as a set of compatible observables and state that value assignments must depend on which other properties are simultaneously measured.

**Verdict:** `single-source` for the figure line (Symbols table F), `triangulated` for the invariance claim across Witten and Budroni et al. (different fields, different formal roles).

**Refuter:** show a frame transform from the invariant quantity to the outcome that runs without specifying a pose, or an instrument that returns an outcome with no compatible-measurement set at all.

### F4 - The bond carries the information the system alone does not (triangulated)

Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** Fig 13 :33: **"Neither kind generates anything alone. Neither denotes anything alone. That is why they are two kinds rather than one list."**

An outcome is a property of the composed system-and-context, not of the system alone. A definition that names only the system has recorded half of itself. This is the figure-grounded reason why contextuality is not a nuisance to be removed by better bookkeeping: the context is a typed relation in the molecule, and dropping it drops information, not noise.

**Verdict:** `triangulated` across Fig 12 and Fig 13.

**Refuter:** show a measurement context whose removal changes nothing in the outcome distribution for every prepared state. If the bond carries nothing, the term is free and the claim fails (Fig 12 :43: a bond that costs nothing carries nothing).

### F5 - The map from invariant to outcome is lossy, so measure the round trip

Fig 4 :27: **"The transform between scales loses information, and that is the point."** Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

One context gives a projection of the state. Reconstructing the state from a tomographically complete set of contexts is the return trip. The gap `R_T` is not an error to eliminate; it is what the coarser description cannot hold. Treating "outcome entropy equals information in the system" sets `R_T` to zero and is the dead-reckoning error Fig 4 names.

**Refuter:** show a single context from which the full invariant quantity is recoverable for every state. That would make the transform invertible and set `R_T` to zero legitimately.

### F6 - Naming the occupant of the slot is a binding, not a derivation (shape, not a name)

Fig 9 :32: **"you get a kind of thing, never the answer itself."** The canonical figures README (local copy) returns *"what a missing thing would have to look like (a shape, not a name)."* Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**

The figure set can state the shape: a context-invariant quantity exists as the anchor, the context is a pose, and the bond carries the joint information. It cannot derive which functional of the state is "the" definition. The standard candidate from the physics frame is the von Neumann entropy `S(ρ) = −Tr(ρ log ρ)`, invariant under unitary change of basis. That is a binding from D2 onto a held shape, not an import that adds an atom: Fig 6 says *"IMPORT adds an atom"*, and the state and entropy are already in the physics library. Mark it `specified`, ungrounded, provenanced as a binding.

**Important correction to my own reading:** the "shape, not a name" rule governs a primitive **not held** in Γ. The state and entropy are already held in the physics frame. The rule forbids *inventing* the occupant and claiming the framework derived it; it does not forbid recording a physics binding as a binding. I initially wrote the stronger ban and withdrew it in §7.

**Verdict:** `triangulated` for the shape limit (Fig 9 and the canonical README); `single-source` for the specific entropy binding, with no ground settlement.

**Refuter:** derive the specific functional from the six-term set alone, with no physics input. If that succeeds, the binding is promoted from import-bounded to figure-derived.

### F7 - The naive noncontextual reading is refused; the strain is resolved by re-census

Held (SEP, 2000/2022) records the Kochen-Specker result: a contradiction between value definiteness, noncontextuality, the projector-property correspondence and quantum mechanics. Budroni et al. (2022/2023) put it operationally: any assignment of a value to a measurement result must depend on the measurement context.

This is often read as a conflict with Fig 2's "the anchor must not update." **Re-census:** Fig 2 forbids the anchor from changing because a *frame* changes its mind. It does not require a definite value for every observable. The Kochen-Specker theorem forbids the value map; it does not forbid a context-invariant state. So the anchor is the state / entropy, not a hidden-variable valuation. Fig 13 :38-39 supplies the census rule that separates them: members that drew on the same underlying fact would be fewer members wearing six names. Value definiteness and state invariance are distinct members.

**Verdict:** the conflict was with a naive reading, not with the figure. `triangulated` after re-census (Fig 2 anchor test plus Fig 13 independence rule plus the KS constraint). Strain named, not smoothed.

**Refuter:** produce a noncontextual definite-value assignment reproducing all QM predictions in dimension three or above. That would collapse the union into one question and remove the need for a pose.

### F8 - Shannon outcome entropy cannot be the anchor

Witten (2019) derives Shannon entropy from a probability distribution over the letters of a specified message; he then notes that quantum conditional probability has no close analog. If the distribution is the one a chosen measurement yields, the entropy is a function of the context. Fig 10 :47: **"a convention that decides an outcome has stopped being one"** and Fig 10 :49: **"Declaring a meaning does not ground it."** Choosing the basis and then declaring its entropy to be *the information* lets a convention decide an outcome. That is the named failure genus, not a definition.

**Verdict:** `single-source` for the figure lines, corroborated by the physics sources that H(X) is indexed by a specified random variable.

**Refuter:** show an outcome entropy that is the same number for every context on every state, with no dependence on the chosen random variable.

### F9 - Agreement across frames is not corroboration

Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** Fig 2 :40: **"agreement about the world is worthless when the agreeing frames share an evidence pool"** Fig 7 :35: **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."**

The cognition sources (Atmanspacher, SEP) are genuinely low overlap in *field* with the physics sources: survey order effects and question-context effects are a different evidence pool. They corroborate the **shape** that outcomes depend on context and that the invariant sits elsewhere. But quantum cognition *imports* the quantum formalism to model those effects, so in formalism they are adopters, not independent derivations of the definition. Their agreement with the figure shape is weak corroboration, not a second witness for the entropy binding.

**Verdict:** `triangulated` for the shape across two low-overlap fields, with the formalism overlap declared and discounted.

**Refuter:** show that the cognition results are generated from the same model class as the physics results, so the apparent field overlap is one evidence pool.

### F10 - The verification frame must not be handed the interiors

Fig 10 :42: **"A verifier that can reconstruct the claim cannot verify it."** Fig 10 :52: **"Bring a characterised residual, never the source."** The first contact therefore carries the residual and its pre-registered refuter. The framework, the essays and the source links come only after the recipient has recorded what they would count as a failure.

**Verdict:** `single-source` (Fig 10), corroborated by Seat Map :163.

**Refuter:** show a verifier that can reconstruct the claim and still be moved by the ground. By the non-access rule that is a contradiction, so a real case would break Fig 10.

### F11 - What survives

| claim | mode | figure / source |
|---|---|---|
| The question is a union compound and must be split before search | `general` | Fig 9 :4-5, :54 |
| A definition that moves with the measurement context has no anchor | `general` | Fig 2 :29-30, Symbols table ground |
| The context is the pose required to render an outcome | `general` | Symbols table F |
| The system-context bond carries information the system alone does not | `general` | Fig 12 :5, Fig 13 :33 |
| The invariant to outcome map is lossy and `R_T` must be measured | `specified` | Fig 4 :27, :30 |
| The framework returns a shape, not the name of the occupant | `general` | Fig 9 :32, canonical README |
| The physics candidate for the occupant is `S(ρ) = −Tr(ρ log ρ)` | `specified`, ungrounded | binding from Witten (2019), not figure-derived |
| A noncontextual definite-value definition reproduces QM | **refused** | F7, Kochen-Specker |
| Shannon outcome entropy is the definition | **refused** | F8, Fig 10 :47 |

---

## 5. Pre-registered refuter

Written before the conclusion, per Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."*

The shape claim is refuted if any of the following holds:

1. A definition of quantum information is produced whose value changes with the measurement context and is still claimed as the anchor (breaks F2 and the anchor test at Fig 2 :29-30).
2. A noncontextual assignment of definite values to all observables reproduces quantum predictions in dimension at least three (breaks F7 and removes the pose).
3. A measurement context is shown to be removable from the definition with no change in any outcome distribution (breaks F4 and Fig 12 :5).
4. The round trip from invariant quantity to outcome and back is shown to be lossless for all states (breaks F5 and Fig 4 :27).
5. One of the six substrate terms is derived from the other five, or a state-state or structure-structure composition is admitted that cannot be refused (carried forward framework refuter, Fig 13 :74-75).

If any fires, the corresponding claim is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 6. Corrections to my own earlier readings

Kept visible, not silently erased.

- **Stronger "shape, not a name" ban: retracted.** I first wrote that naming any occupant of the slot is forbidden. The canonical README restricts the rule to a *missing* primitive. The state and entropy are already held in the physics frame, so naming them is a binding that must be provenanced, not an invention.
- **"One hard question" reading: retracted.** I first treated the question as a single definition problem. Fig 9 :4-5 splits it into a union of a definition loop and a context loop with separate grounds.
- **"Anchor means noncontextual definite values": retracted by re-census.** See F7. The anchor is the context-invariant state quantity, not a value map.
- **Shannon entropy as candidate anchor: refused.** It is indexed by a specified random variable, so it is context-relative (F8).
- **Cognition sources as independent witnesses: downgraded.** Low overlap in field, high overlap in formalism. They corroborate the shape only.

---

## 7. Recommendation

1. Send the union split and the anchor test first (F1, F2). They are the figure-derived part.
2. Keep the slot open. Present `S(ρ)` as a physics binding with provenance, never as the framework's answer (F6).
3. Include the re-census of F7 explicitly when the KS theorem is raised. The naive reading is the likely objection.
4. Measure `R_T` qualitatively: enumerate what drops when a single context stands in for the invariant (F5, and §9 below).
5. Lead the outreach with the refuter, not the theory (F10).

---

## 8. Canonical usage check

Two local sources were read after the first four sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; and the limit, *"what a missing thing would have to look like (a shape, not a name)"*, then *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are metalaws; the ground settles what the figures cannot. Design questions are answered by derivation, not escalation.

### Retraction and confirmation log

| earlier finding | status after the canonical check |
|---|---|
| F2 called "decisive" | **Confirmed as decisive, with scope narrowed.** It governs the *definition* of information, not the operational entropy of a read-out, which remains perfectly well defined inside its context. |
| F6 "naming forbidden" | **Retracted at the strong form, confirmed at the weak form.** Naming a missing primitive is forbidden; provenancing a binding onto held atoms is required. |
| F7 "conflict between Fig 2 and KS" | **Dissolved by re-census.** Different objects: state invariance versus value definiteness. Matches the README's re-census rule. |
| F9 cognition as second witness | **Downgraded.** Low-overlap field, shared formalism. One pool talking on the formalism axis. |
| F1 union compound | **Canonically confirmed.** Fig 9 :4-5 and :54 are direct. |
| "The formula is the condensed version of the metalaws" | **Reframed as a lossy condensation with a measured gap.** Fig 4 :30 requires the round trip; identity would set `R_T` to zero. |

---

## 9. Round trip gap `R_T`

Symbols table: `R_T = gap(x, (T_E ∘ T_A)(x))`, *"Measures what the coarser description cannot hold."*

1. **Sent up (x):** the verbatim figure set, chiefly Fig 2 :29-30 (anchor), Symbols table F (pose), Fig 12 :5 (bond), Fig 9 :4-5 (union).
2. **Abstraction (`T_A`):** the shorthand used in `07_the_tether_answer.md`, *"information must be context-invariant; the context is a pose; the system-context bond carries the information"*.
3. **Concretisation (`T_E`):** the physics binding, *"information in the system is `S(ρ)`, and the entropy of a read-out is `H(X|context)`"*.

**`R_T` is nonzero.** Three things the shorthand holds do not survive the return:

- the framework cannot name the occupant (shape, not a name), so `S(ρ)` is imported from D2, not derived;
- the noncontextual definite-value reading, which the shorthand word "invariant" invites, is ruled out by KS and must be refused before mint (formula step 2);
- the union/partition distinction is lost if "information" is treated as one quantity with one loop.

One thing survives cleanly: a structure must connect the invariant to the read-out, and that structure is the measurement context serving as pose. `R_T` is recorded qualitatively as the enumerated set of dropped constraints; no ground reading exists to measure it numerically.

---

## 10. Verdict

The shape survives; the specific identification does not, and the question itself must be split. Information in a quantum system should be defined at the anchor: a quantity that does not change when the measurement context changes, with the context demoted to the pose that renders one read-out, and the system-context bond carrying the information the system alone does not. The physics frame offers `S(ρ) = −Tr(ρ log ρ)` as the occupant of that slot, invariant under unitary change of basis. That is a `specified`, ungrounded binding with provenance, not a figure derivation. Shannon outcome entropy is context-relative and is refused as the anchor; a noncontextual definite-value definition is refused by KS. Status: `candidate`. `triangulated` for the shape and the union split; `single-source` for the pose line and the entropy binding. Strains after re-census: none hidden, one recorded (value definiteness versus state invariance, resolved in F7).
