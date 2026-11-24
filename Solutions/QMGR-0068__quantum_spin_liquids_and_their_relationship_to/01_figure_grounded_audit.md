# Figure-grounded audit: quantum spin liquids and their relationship to lattice gauge theories

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (opened 2026-11-23): "LLMs can quickly simulate an approximate answer/output" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** Framework primaries: the verbatim figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the canonical usage rule at `FRAMEWORK/reference/FIGURES_README_canonical.md`, and `FRAMEWORK/figures/THE_FORMULA.md`. World sources were opened on 2026-11-23 and are listed in `10_source_ledger.csv`; each is corroboration only.

---

## 0. The question in effect terms

> "Quantum spin liquids and their relationship to lattice gauge theories"
> (`QM & GR Questions.txt` line 87, section Condensed Matter and Analogue Gravity)

Restated as an effect, dropping the theory words:

- A set of interacting spins in a frustrated magnet **fails to produce any local order** even as the temperature goes to zero, and yet it is **not disordered** in the ordinary sense: it carries long-range entanglement, fractionalized excitations, and topological structure.
- A second frame, the lattice gauge theory frame, **already has terms for** link variables, plaquettes, fluxes, Gauss law constraints, deconfined phases, and topological order.
- The word "relationship" asks which operator joins these two frames. There are at least three candidates: **identity** (two names for one referent, the `≡` bond), **production** (spins produce gauge structure, the `⇒` bond), and **import** (the gauge frame is borrowed from particle physics and installed in the spin frame, the operator that moves the wall in Fig 6).
- What each option leads to: identity erases the derivation and the two frames' different closures; production requires a derivation and a settlement; import requires provenance and a shadow test, and a wrong atom costs more than starting from primitives (Fig 6 :24).

**Ordinary term bound before the run (Formula, "Direction").** An answer would look like: *a named relation R between the spin frame and the gauge frame, a stated atom set over which R composes, a per-material ground that discriminates among candidate gauge groups, and a refuter that would break R*. Binding this shape as a term lets it accrue a residual like anything else, rather than remaining an unseen preference.

---

## 1. Domain census, before choosing any figure line

### 1.1 R by arity, symmetry, scale

- **Arity:** at least three conditions are bundled. (i) The microscopic spin system and its Hamiltonian on a lattice geometry. (ii) The lattice gauge description and its topological invariants. (iii) The verification frame that must range both against a ground that does not update. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." This is a **union**, not a partition: the fractionalized excitation sits in the intersections, and a single lever that clears one condition leaves the intersections standing (Fig 9 :57: "a case in two conditions is not a harder case of either").
- **Symmetry:** "relationship" is symmetry-shaped, but the physics claim "emergent gauge theory from spins" is ordered. Operators table :15 gives the identity test, "swap the operands. Does the meaning change? No." Operators table :33 gives the sequence test, "swap them. Does it become a different thing? Yes." Fig 2 :39 names the failure: "Correlation has valence." A symmetric reading cannot select the arrow, so the direction must be made an ordinary term (Fig 5 :65, Formula "Direction").
- **Scale:** first order is the microscopic spin lattice; second order is the settled spin phase and its effective gauge theory; third order is the continuum or universality limit, which Fig 13 :43 removes from the primitive set. Each crossing is lossy (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

| domain | actors | currency | anchor (nameable?) | question type |
|---|---|---|---|---|
| D1 spin frame | spins, exchange couplings, lattice geometry (kagome, honeycomb, triangular, pyrochlore, ruby), frustration | energy and correlations; order parameters that fail to appear | experiment per material: neutron scattering, NMR, specific heat, thermal Hall. **Yes, nameable.** | partition boundary inside the six-term set |
| D2 gauge frame | link variables, plaquettes, fluxes/visons, spinons, Wilson loops, string operators, Gauss law, gauge group Z2 / U(1) / SU(2) | gauge-invariant observables and topological invariants | the same physical ground, read through a different closure. **Yes, nameable.** | union with D1; surplus only where closures differ |
| D3 verification frame | expert readers in condensed matter, quantum simulation, and lattice gauge theory | agreement and residual | the ground, never agreement. **Yes, nameable.** | seat arrangement; independence is the parameter |

No nameable anchor, no domain. All three have one. A hypothetical "purely formal relation between any spin system and any gauge theory" has no anchor and is not admitted as a domain; it is a convention, not a claim about the world (Fig 10 :18: "a declared meaning is not a grounded one").

### 1.3 Partition or union, and dependency order

**Union.** The overlap is the fractionalized excitation, which is where the spin frame and gauge frame meet and where the shared fraction cannot be assigned to either alone. Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Verdicts are kept per domain and never averaged: a successful quantum-simulator realisation does not settle a material candidate, and a material candidate's frustration does not settle the gauge frame's formalism.

**Order by dependency (Fig 3 :20: "The chain is ordered by dependency, not by importance."):**

1. Describe the residual per material slot before choosing a frame (Fig 9 :27-28).
2. Refuse the identity reading before minting an emergence claim (Formula step 2): `¬` is not a bond, and a vocabulary without it can only accumulate (Operators :58: "a refutation is a negation, which is why a vocabulary without it can only accumulate").
3. Settle each first-order spin phase against the ground before composing the second-order gauge effective theory (Fig 12 :104).
4. Only then ask whether the second-order term needs an import.

---

## 2. Figure census (quoted before concluding)

Cited against `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Citations are `Fig N :line` against that extract. Every quoted string below is an exact substring of the extract.

| figure | verbatim line | bearing on this question |
|---|---|---|
| Fig 1 | :19 "The residual is indexed by object slot, not aggregated." | the material-by-material residual must not be averaged into "spin liquids versus gauge theory" |
| Fig 2 | :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." | the experimental ground, not the agreement of theorists |
| Fig 2 | :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." | a list of agreeing experts cannot corroborate |
| Fig 2 | :40 "agreement about the world is worthless when the agreeing frames share an evidence pool" | two reviews citing the same Kitaev paper are one witness |
| Fig 3 | :20 "The chain is ordered by dependency, not by importance." | settle phase before composing the effective gauge theory |
| Fig 4 | :20 "Only the actors, the currency and the anchor change." | same loop, different frame, no special physics frame |
| Fig 4 | :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." | the condensed shape of this answer has a nonzero `R_T` |
| Fig 6 | :21 "MINT composes inside the closure and can never add an atom." | the gauge structure is derived inside the spin frame's closure, not imported |
| Fig 6 | :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." | borrowing QCD machinery is a wall-moving import and needs gates |
| Fig 6 | :25 "An import adds no atom to the world." | the gauge field is not a new primitive in nature |
| Fig 8 | :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." | more spin-model calculation cannot manufacture a new gauge atom |
| Fig 8 | :39 "So a search that finds nothing is never a proof of absence." | failure to observe order is not proof of a spin liquid |
| Fig 8 | :51 "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them" | the decisive distinction for this question is provenance |
| Fig 9 | :27-28 "describe it before you go looking, or any frame you pick will seem to fit" | describe the residual before choosing Z2 or U(1) |
| Fig 9 | :32 "you get a kind of thing, never the answer itself" | the framework returns a shape, not a gauge-group name |
| Fig 9 | :54-57 union/unbundling | the question is a union, not one relation |
| Fig 10 | :42 "A verifier that can reconstruct the claim cannot verify it." | the outside checker must not be taught the framework first |
| Fig 11 | :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." | a quantum simulator proves the simulator's gauge wiring, not the material's |
| Fig 12 | :5 "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." | "the spin liquid is made of spins" records half of it |
| Fig 12 | :104 "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world" | emergence is level-relative irreducibility |
| Fig 12 | :117 "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." | spin liquid versus ordered magnet, and Z2 versus U(1), are isomer claims |
| Fig 12 | :123 "The group says what kind; the qualifier says which member." | the lattice geometry fixes the kind, the gauge group is the qualifier |
| Fig 13 | :43 "A continuum was the seventh and was removed for failing exactly this" | continuum gauge theory is not a primitive |
| Fig 13 | :74 "Everything else is a composition across the two kinds, never within one." | the gauge structure must cross a state with a structure |
| Fig 13 | :75 "Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state." | no direct spin-spin bond yields topological order; a structure sits between |
| Fig 13 | :121 "Different routes can arrive at the same substance." | spin-first and gauge-first routes can converge on one phase |
| Fig 13 | :124 "Smoothness, symmetry, chaos and discreteness are each what a particular composition leaves behind, and none is a seventh member." | lattice discreteness and topological order are derivatives, not primitives |
| Fig 13 | :134 "Unreachable is a verdict here, not a silence" | naming the gauge group of a material is unreached, and that is a verdict |
| Operators | :15 identity test, :33 sequence test | "relationship" is symmetry-shaped; emergence is ordered |
| Operators | :58 "a refutation is a negation, which is why a vocabulary without it can only accumulate" | the identity reading must be refused before minting |
| Symbols | :38 "The gap between prediction and observation." | `R` is per slot, per material |

Strained readings are named as such in section 5 and in `11_audit.md`, not smoothed over.

---

## 3. Findings

### F1 - The residual is indexed by material, not by field (support: Fig 1 :19, :22)

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

The question phrase "quantum spin liquids and their relationship to lattice gauge theories" invites one global answer. It pools the kagome herbertsmithite slot, the ruby Rydberg slot, the Kitaev honeycomb slot, the pyrochlore spin-ice slot, the triangular organic slot, and the ultracold-atom U(1) slot. These have different actors, different currencies, and different instruments:

| slot | anchor that could settle it | what is still live |
|---|---|---|
| herbertsmithite (kagome) | neutron spectrum, NMR, thermal transport | whether a true Z2 topological order exists or a gapless spin liquid |
| Kitaev honeycomb (RuCl3 and relatives) | thermal Hall, neutron continuum, field dependence | whether the expected non-Abelian anyon regime is reached |
| ruby Rydberg array | topological string order, ground-state overlap | whether the observed phase is the deconfined gauge phase or a finite-size crossover |
| square optical superlattice U(1) | Gauss-law violation, pinch points, interferometric coherence | whether the extended regions survive to the thermodynamic limit |
| pyrochlore spin ice | pinch points, neutron scattering | which daughter phase (U(1), Z2, supersolid) is actually realised |

**Verdict:** `specified`, triangulated across Fig 1 and the five independent ground readings in the world sources. One global verdict on "the relationship" is not admissible. The residual must be written per slot.

**Refuter:** show that the same figure line governs two different materials at the same slot with the same anchor. It does not: the anchors differ by material.

### F2 - It is a union of three conditions, not one relation (support: Fig 9 :54, :55, :57)

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57: "a case in two conditions is not a harder case of either".

The word "relationship" bundles: (i) a **derivation** question (can the gauge structure be composed from the spin frame's closure?), (ii) an **import** question (is the gauge frame borrowed from particle physics, and with what gates?), and (iii) a **settlement** question (does a ground discriminate among the candidate gauge groups?). A single lever, for example "declare the spin liquid to be a Z2 gauge theory", clears only the region where condition (i) holds and leaves the intersections standing. Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

**Verdict:** `general` on the structural claim that it is a union, `specified` that the three named conditions are the ones that bind. Triangulated across Fig 9 and the domain census of section 1.

**Refuter:** exhibit a single operator that answers derivation, import, and settlement at once without a ground reading. None of the eight operators does; settlement is a separate office (Fig 5 :32).

### F3 - The arrow cannot be read off the word "relationship" (support: Operators :15, :33; Fig 2 :39; Fig 5 :65)

The operators table separates the symmetric identity bond from the ordered sequence and production bonds. Operators :15: "swap the operands. Does the meaning change? No." Operators :33: "swap them. Does it become a different thing? Yes."

"Spin liquids and their relationship to lattice gauge theories" is symmetric in form. The substantive physics claim usually made is ordered: spins **produce** an emergent gauge structure at low energy. Operators table :40 distinguishes production from sequence: "different from sequence: the second operand is not waiting, it is absent until the first fires". Fig 2 :39: "Correlation has valence." A correlation between the presence of spin-liquid behaviour and the use of a gauge description does not choose the arrow.

Formula, "Direction": a frame "cannot check the direction of its own question, because the shape a frame is searching for is not a term it holds." The remedy is a discipline: bind the sought-for shape as an ordinary term. This audit binds it in section 0.

**Verdict:** the identity reading (spins **are** a gauge theory, `≡`) is **refused** until a discriminator exists. The production reading is kept as `specified`, ungrounded. Single-source on the figure side for the bond taxonomy (Operators table), triangulated with Fig 5 :65 for the discipline.

**Refuter:** a source-discriminating measurement that shows the two descriptions are definitionally identical with no loss in either direction (round-trip gap zero). No such instrument is cited in the world sources.

### F4 - Convergent derivation versus adopted import is the whole issue (support: Fig 8 :51; Fig 6 :23; Fig 6 :25)

Fig 8 :51: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them". Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Fig 6 :25: "An import adds no atom to the world."

Two things in the world literature look the same on the page but are categorically different:

1. **Convergent derivation.** Kitaev (2005/2006) solves a spin-half honeycomb model "by a reduction to free fermions in a static $\mathbb{Z}_{2}$ gauge field". The Z2 structure is derived from inside the spin Hamiltonian's closure. Wiese (2013) records the same move at the toric code: "Kitaev's toric code is a Z(2) lattice gauge theory". Tarabunga et al. (2022) derive an "exact relation between an Ising-Higgs lattice gauge theory on the kagome lattice and blockaded models on Ruby lattices", and explicitly link the spin liquid "to a deconfined phase of a solvable gauge theory". Cheng, Li and Zhai (2023) map a Rydberg blockade model to a lattice gauge theory "where the local gauge conservations replace the role of constraints from the Rydberg blockade". These add no atom to the world. They move no wall. Fig 6 :21: "MINT composes inside the closure and can never add an atom."
2. **Adopted import.** Taking the full apparatus of non-Abelian lattice QCD, which Wiese (2013) describes as "the non-Abelian SU(3) gauge theory of the strong interactions between quarks and gluons, is non-perturbatively regularized on a lattice", and installing it as the description of a spin liquid is a move from a frame whose closure differs. Fig 8 :9-13 requires a **source gate: provenance** and a **shadow test: explains a gap**. Fig 6 :24 prices it: "A wrong atom costs more than starting from primitives."

**Verdict:** `specified`, **triangulated**. Fig 8 governs provenance, Fig 6 governs the wall. The two figures have low overlap (one about records, one about closure), so this is a genuine triangulation, not two views of one sentence.

**Refuter:** produce a case where the gauge atom is genuinely absent from the spin frame's closure and the derivation still succeeds without an import. That would break Fig 6 :21.

### F5 - Emergence is level-relative irreducibility, not a new primitive and not a mere rewrite (support: Fig 12 :104, :5, :46; Fig 13 :110)

Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world". Fig 13 :110: "And each composition becomes an atom for whatever composes over it." Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." Fig 12 :46: "A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."

Once a spin phase settles against the ground (decades of experiment on candidate materials, exact solution on the Kitaev model, direct string-order measurement in the Rydberg array), the phase becomes an atom at the next level. The effective gauge theory composes over it. Two errors are excluded at once:

- Calling the gauge field fundamental is a **level error**: irreducible is a fact about a level, never about the world.
- Calling the gauge description "just the same spins said differently" is a **notation error**: the bond carries information the operands do not. The gauge theory predicts pinch points and string orders that a list of spin couplings does not.

Anderson (opened via the public biographical record, 2026-11-23) is the genuinely low-overlap corroborator here: his 1972 paper "More is Different" "emphasized the limitations of reductionism and the existence of hierarchical levels of science, each of which requires its own fundamental principles for advancement." That is a world-source restatement of Fig 12 :104 from outside the framework author's pool.

**Verdict:** `specified`, triangulated across Fig 12 and Fig 13 plus the independent Anderson source.

**Refuter:** derive a member of the gauge description from the spin atoms with the bond term set to zero (a free bond). If the topological predictions survive with an unpriced bond, the information is not in the bond and this finding fails.

### F6 - Isomer and functional group, with a falsifier written before the run (support: Fig 12 :117, :95, :123, :94)

Fig 12 :117: "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Fig 12 :95: "Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond." Fig 12 :123: "The group says what kind; the qualifier says which member." Fig 12 :94: "The arrangement is the substance."

Three isomer claims are available, at different strengths:

1. **Ordered magnet versus spin liquid, same spins.** Same atoms (the spin degrees of freedom and the lattice), different bond arrangement (Néel order versus resonant superposition), different substance (a symmetry-breaking phase versus a topologically ordered one). The formula "a collection of spins on a kagome lattice" cannot tell them apart; the bond does. Strong figure support.
2. **Z2 versus U(1) spin liquid over a shared six-term atom set.** Both can be written as compositions over the same held atoms (network, spectrum, gradient, space, time, energy), differing in which bond mediates which pair. This is the real isomer claim worth testing.
3. **Different lattice geometries as functional groups.** Fig 12 :123: the geometry (kagome, honeycomb, triangular, ruby, pyrochlore) fixes the *kind*; the gauge group (Z2, U(1), SU(2)) is the *qualifier* that says which member. Fig 13 :76: "A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is."

**Falsifier, written before the run:** if either phase can be written without an atom the other requires (for example, a U(1) spin liquid with no network atom, or a Z2 spin liquid with no spectrum), the isomer claim fails and only the weaker functional-group claim stands. This is checked in `06_isomers_and_order.md` Q3 and repeated in `08_expert_verification_packet.md` C2.

**Verdict:** `specified`, single-source for the figure definition (Fig 12), with the physics-facing check still unmeasured. Do not upgrade to triangulated merely because two materials are cited; both draw on the same figure census.

### F7 - The continuum and the lattice are both derivatives, not primitives (support: Fig 13 :43, :124)

Fig 13 :43: "A continuum was the seventh and was removed for failing exactly this". Fig 13 :124: "Smoothness, symmetry, chaos and discreteness are each what a particular composition leaves behind, and none is a seventh member."

The phrase "lattice gauge theory" tempts a further question: is the lattice or the continuum the real object? The figures refuse the framing. Discreteness and smoothness are both what a composition leaves behind. A continuum gauge theory is a lossy abstraction from the lattice theory, with a round-trip gap `R_T` that must be measured rather than assumed (Fig 4 :30). A lattice regulator is a discrete composition over the same six terms, not a seventh kind of thing.

**Verdict:** `general`, triangulated across Fig 13 and Fig 4. This is a structural refusal of a category error, not a claim about any material.

**Refuter:** exhibit a seventh primitive that is not derivable from the six and is required to state a lattice gauge theory. None of the world sources requires one.

### F8 - A simulator is a substituted habitat; it proves wiring, never material capability (support: Fig 11 :66, :68, :70)

Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." Fig 11 :68: "what you failed to reproduce is invisible until the goal fails". Fig 11 :61: "Introduction is available; exclusion is not."

The two strongest ground readings in the world sources are synthetic: Semeghini et al. (2021, Science 374, 1242) detect a toric-code-type spin liquid in a 219-atom programmable simulator through topological string operators; Karch et al. (2026) prepare extended U(1) spin liquid regions over about 100 sites in a 3,000-site optical superlattice and observe pinch points and round-trip interferometric coherence. These are genuine settlements **for the simulator habitat**. They are not settlements for herbertsmithite or RuCl3. What the simulators did not reproduce (material disorder, longer-range couplings, real phonons) is invisible until the material goal fails. Fig 11 :67: "Move the residual and you must reproduce everything its goal required".

This is the sharpest figure-grounded point in the whole question, and it is a limit, not a dismissal: a simulator can name a gauge group in its own habitat, and that name is a binding for that habitat, provenanced as such.

**Verdict:** `specified`, single-source on the figure side (Fig 11), corroborated at the world level by two independent experimental papers whose closures genuinely differ from the material-search literature.

**Refuter:** a measurement in a solid-state candidate that reproduces the same string-order and pinch-point signatures with a non-updating ground. That would move the finding from "wiring" to "capability" and would not refute this finding, only extend it. The finding is refuted if simulator results are shown to transfer to a material without reproducing the material's habitat conditions.

### F9 - "Shape, not a name" governs missing primitives, not bindings onto held atoms (CORRECTION TO MY OWN FIRST PASS)

Fig 9 :32: "you get a kind of thing, never the answer itself". Fig 13 :134: "Unreachable is a verdict here, not a silence". The canonical README says the framework gives "what a missing thing would have to look like (a shape, not a name)."

My first pass read this as a ban on naming Z2, U(1), or SU(2). That was an overstatement, and it is preserved here rather than silently erased:

- The ban governs a **missing primitive**, one not held in Γ.
- Z2, U(1), and SU(2) gauge structure is not a missing primitive. The gauge field composes from atoms already in the six (network, spectrum, gradient bonded to space, time, energy). Fig 6 :22: "IMPORT adds an atom, and the added atom is what expands the closure." This binding adds none.
- So naming a gauge group is a **binding from the physics frame** onto held atoms, which is provenance, not a derivation and not a wall-moving import. It must be recorded as the searcher's contribution.
- What remains forbidden: claiming the framework *derived* which gauge group, or claiming the framework *imported* a new primitive when it did not (Fig 6 :25).

**Verdict:** `specified`; retracted as applied to gauge-group names, kept as applied to missing primitives. Triangulated across Fig 9 :32, Fig 13 :134, Fig 6 :22.

### F10 - Prestige and agreement cannot settle this (support: Fig 2 :35, :40, :42; Fig 7 :13; Fig 10 :42, :59)

Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool". Fig 2 :42: "Buy independence in proportion to the cost of being wrong." Fig 7 :13: "agreement compounds, evidence does not". Fig 10 :59: "an interest in the outcome is unavoidable, an interest in the reading is disqualifying".

A list of famous spin-liquid theorists who agree that "spin liquids are lattice gauge theories" is a convention, not corroboration. Most of them read the same Kitaev and Wen papers, so they are one evidence pool wearing many names. Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it." Send the residual and the refuter; withhold the framework interior until the verdict on stage 1 is recorded.

*The Recursive Self-Improvement Trap*: "Prestige must never be allowed to validate an action directly" and "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."

**Verdict:** `general` structural, triangulated across Fig 2, Fig 7, Fig 10, and the essay. No world source conflicts.

### F11 - What survives, with mode attached

| claim | mode | figure or source |
|---|---|---|
| The residual is per material slot, never a single global "relationship" | `specified` | Fig 1 :19, :22 |
| The question is a union of derivation, import, and settlement, not one relation | `general` | Fig 9 :54-57 |
| Identity between spin liquid and gauge theory is refused until a discriminator exists | `specified` | Operators :15; Fig 2 :39; Fig 5 :65 |
| A convergent derivation inside the spin closure adds no atom; an adopted import needs provenance and a shadow test | `specified` | Fig 8 :51; Fig 6 :21, :23, :25 |
| Emergence is level-relative irreducibility; the gauge bond carries information the spins alone do not | `specified` | Fig 12 :104, :5, :46 |
| Spin liquid and ordered magnet are isomers over the same spins; Z2 and U(1) are a real isomer claim over a shared atom set | `specified`, unmeasured | Fig 12 :117, :95 |
| Lattice discreteness and continuum smoothness are derivatives, not primitives | `general` | Fig 13 :43, :124 |
| A simulator result settles its own habitat, not a material candidate | `specified` | Fig 11 :66, :68, :70 |
| Naming a gauge group is a binding, not a derivation and not a wall-moving import | `specified` | Fig 9 :32; Fig 6 :22 (narrowed in F9) |
| Which gauge group a given material realises | `gap`, unreached, a verdict not a silence | Fig 13 :134, Fig 8 :39 |

---

## 4. Pre-registered refuter

Written before the conclusion and before any outreach, per Fig 10 :62's lineage rule and the standing instruction that "a falsifier written before the run is a design instrument." The shape claim is refuted if any of the following holds:

1. **Direct-bond failure.** A derivation shows the observed topological order arising from a direct spin-spin or structure-structure bond with no intervening opposite-kind term, admitted by the framework and not refuseable (breaks Fig 13 :74-75).
2. **Ungated import.** A candidate material's gauge structure requires an atom genuinely absent from the spin frame's closure and no source gate or shadow test can be supplied (breaks Fig 8 :9-13 and Fig 6 :23).
3. **Metamerism failure.** A source-discriminating measurement in one material produces the same topological signatures from a non-gauge mechanism, or names a gauge group different from the effective theory's prediction. The instrument "cannot comment on the source" and a better instrument resolves it (*The Hard Problem is About Source*).
4. **Substrate failure.** One of the six terms is derived from the other five (breaks Fig 13 indivisibility and minimality).
5. **Isomer failure.** Z2 and U(1) spin liquids cannot be written over a shared atom set (kills F6's isomer claim; the functional-group claim stands).
6. **Direction failure.** A source-discriminating instrument shows the two descriptions are definitionally identical with a measured round-trip gap of zero (kills F3's arrow).

If any fires, the affected finding is withdrawn with the reason recorded in this table. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Write the residual per material slot; do not average (F1).
2. Unbundle the union before searching; keep derivation, import, and settlement in separate loops (F2).
3. Refuse the identity reading before minting (F3); make the arrow an ordinary term.
4. Record provenance for every gauge binding: derived inside the spin closure, or imported from the particle-physics frame with a source gate and a shadow test (F4).
5. State the level at which each term is irreducible; do not call the gauge field fundamental and do not call the bond a free rename (F5).
6. Keep the isomer claim with its falsifier; do not upgrade it by citing two papers from one pool (F6).
7. Lead with the shape and the refuter, then offer links. Fig 4 :22: "Only methods cross up. Only head starts come down." Fig 10 :52: "Bring a characterised residual, never the source."
8. Ask what a checker would count as a failure, record that verdict before showing any theory, and never pool later agreement as corroboration (F10).

---

## 6. Canonical usage check

Two canonical sources were read after the first five sections:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw"; and the limit: "what a missing thing would have to look like (a shape, not a name)," with the instruction to "record the lineage so the stop is honest."
- `FRAMEWORK/figures/THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." And step 5: "the ground settles it. Verified only by what pays. A gate is not the ground."

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| F1 "one relationship" | **Narrowed.** Fig 1 :19/:22 make it per slot. The global framing was an aggregation error. |
| F3 treated "relationship" as answerable without an arrow | **Refused.** Operators :15/:33 and Fig 2 :39 show the correlation cannot pick the direction. |
| F9 "shape not a name forbids naming Z2 or U(1)" | **Retracted and narrowed.** The rule governs missing primitives. Gauge groups are bindings onto held atoms; see F9 and `05` section 5b. |
| F8 "simulator results settle the spin-liquid question" | **Narrowed.** They settle the simulator habitat only; Fig 11 :70. Not retracted: they are genuine ground readings of gauge wiring. |
| F11 "which gauge group for a material" called a gap | **Canonically confirmed.** Fig 13 :134: "Unreachable is a verdict here, not a silence"; Fig 8 :39: "So a search that finds nothing is never a proof of absence." |
| Apparent strain Fig 6 :25 versus Wiese 2013 | **Not strained.** Re-census: Wiese says gauge theories "underpin our understanding" of both particle physics and quantum materials; this is two closures holding the same atoms, not a new atom in the world. Fig 6 :25 concerns atoms in the world; the question concerns a frame gaining access. |
| F4 "convergent derivation and adopted import" | **Canonically confirmed.** Fig 8 :51 is the exact sentence; Fig 6 :23 supplies the wall. Two low-overlap figures, so `triangulated`. |

### Round trip in brief

Sent up: the six-term set, the seven bonds, the closure and import rules, the per-slot residual. Abstraction: "the gauge description is a derived effective theory over a settled spin phase, with provenance, and material names are bindings." Concretisation back down: "herbertsmithite is a Z2 spin liquid." Three constraints are dropped on the trip: the per-slot indexing, the convergence-versus-import record, and the simulator-habitat limit. `R_T` is nonzero and is enumerated qualitatively in `11_audit.md`. Treating the formula as identical to the figure set would set `R_T` to zero and would be the dead-reckoning error Fig 4 :30 names.

---

## 7. Updated verdict

The shape survives: a spin liquid and a lattice gauge theory are two closures over a shared atom set, joined by a derived or imported bond whose provenance decides what the relation is worth; the gauge description is irreducible at the effective level and adds no primitive to the world; the material-specific gauge group is a binding, not a derivation, and stays open until a source-discriminating ground reading names it. What does not survive: the single global "relationship", the identity reading, the unpriced rename, and the transfer of simulator results to materials without a reproduced habitat. `specified` on the substantive claims, `general` on the structural shape, `gap` on the material gauge group. Strains after re-census: one live, the arrow at first order (F3), named and not hidden; one narrowed, the "shape not a name" rule (F9); one dissolved, Fig 6 :25 versus Wiese (canonical check section 6).
