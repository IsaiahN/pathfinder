# Figure-grounded audit: Hawking radiation mechanism and collapse-dependence

**Mode of this document: `specified` on the shape findings, `general` on the structural limit, `gap` where no ground is held.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap* (read 2026-11-23): LLM output simulates an approximate answer and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No measurement was taken.

**Sources.** Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, cited as `Fig N :line`). Loop: `FRAMEWORK/figures/THE_FORMULA.md`. Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md`. Essays read first-hand this session: three (see `05_what_shape_means.md`). World sources actually opened: seven physics sources, recorded in `10_source_ledger.csv`.

---

## 0. The residual, stated in effect terms

**R:** The gap between the semiclassical prediction and a complete account of black-hole emission. The semiclassical calculation returns a thermal spectrum fixed by the black hole's macroscopic parameters (mass, charge, angular momentum), with a temperature inversely proportional to mass. The complete account would have to say what happens to the detailed state of the matter that collapsed.

Two effects are bundled here, and the framework requires them to be separated before either is searched:

- **A, mechanism.** By what operation does a horizon produce an outgoing quantum flux? Candidate descriptions in the literature: virtual-pair separation at the horizon, Bogoliubov mixing of in and out vacua in a collapse spacetime, the near-horizon Unruh temperature of an accelerated observer, tunnelling. Each leads to a different statement about what the radiation is sensitive to.
- **B, dependence.** Does the spectrum (or the fine-grained state behind it) depend on the details of collapse beyond mass, charge and spin? "No" leads to a thermal channel that forgets the initial state and to the information paradox. "Yes" leads to a channel that carries information and requires a correction to the semiclassical calculation.

**What an answer would look like (bound as an ordinary term before the run):** a composition shape for the mechanism; a verdict for each of A and B separately; a named instrument that would close the part still open; and a refuter written in advance. Binding the sought-for shape is the discipline `THE_FORMULA.md` "Direction" requires, because a frame *"cannot check the direction of its own question, because the shape a frame is searching for is not a term it holds."*

---

## 1. Description of R by arity, symmetry and scale

- **Arity:** two conditions, mechanism and dependence. They overlap at the horizon but are not the same lever. Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :57: *"a case in two conditions is not a harder case of either."* This is a **union compound**, with its own loop, not one hard question to be answered by one lever.
- **Symmetry:** a thermal spectrum is symmetric under exchange of all micro-configurations that share a temperature. Collapse detail is per-configuration, that is, per-slot. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* The two live at different symmetries of description.
- **Scale:** the mechanism is stated at the semiclassical scale (quantum fields on a classical background). The question of the exact spectrum and information is stated at the quantum-gravity scale. Fig 4 :27: *"The transform between scales loses information, and that is the point."*

---

## 2. Domain census

One line per domain: actors, currency, anchor. A domain with no nameable anchor is not yet a ground-reading domain; it is recorded as such rather than filled with a proxy.

| domain | actors | currency | anchor | partition / union | status |
|---|---|---|---|---|---|
| **D1 Semiclassical emission (mechanism)** | quantum field modes, in and out vacua, horizon, accelerated observers, Bogoliubov coefficients | particle number, occupation number, temperature | derivation plus analogue laboratory observation (a substituted habitat, not the gravitational ground) | partition boundary: what composes across kinds | `specified`, exact mechanism `gap` for gravity |
| **D2 Black-hole thermodynamics and uniqueness (dependence, coarse-grained)** | mass M, charge Q, angular momentum J, surface gravity, horizon area, temperature T, entropy S | thermodynamic state variables, spectrum | a theorem conditional on assumptions (analyticity, four dimensions, Einstein Maxwell), not an immovable measurement | partition: which parameters survive relaxation | `triangulated`, conditional |
| **D3 Fine-grained state and information (dependence, exact)** | fine-grained state, entanglement, correlations, microstates, soft hair | information, von Neumann entropy | **none held** | union with D2 at the horizon | `gap` |
| **D4 Verification and outreach** | expert readers in Hawking radiation research | agreement and residual | the ground, never agreement | separate frame | `single-source`, one evidence pool |

**Order by dependency (Fig 3).** The chain runs: perceive (an analogue thermal flux returns something) -> vocabulary (spectrum, gradient, state) -> objective (what would count as collapse-dependence?) -> planning (which instrument?) -> learn and carry. It stops at the link between vocabulary and objective in D3: there is no term for the fine-grained gravitational state that pays against a ground. Fig 3 :22-23: *"a reading taken below the break is not a weak reading. It is a reading of nothing."* Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

**Strain test applied during the census.** I first tried to put D1 and D2 into one domain by saying "the horizon fixes the spectrum." That made Fig 1 :22 (aggregation kills the signal) contradict the no-hair statement (the exterior forgets the signal). The contradiction is a census error, not a figure conflict: Fig 1 governs the *description level of the radiation*, while no-hair governs the *relaxation of the exterior geometry*. They are different objects. Re-census into D1, D2, D3 dissolves the strain. This follows the canonical rule that a reading making figures contradict one another has misidentified its domain.

---

## 3. Figure census (quoted before concluding)

| figure | verbatim line used | bearing |
|---|---|---|
| Fig 1 :19 | "The residual is indexed by object slot, not aggregated." | collapse detail is per-slot |
| Fig 1 :22 | "Aggregating across slots is how a live signal disappears into an average." | a thermal spectrum is an average |
| Fig 2 :29 | "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." | ground test |
| Fig 2 :30 | "If it moves when you push on it, it is not an anchor." | no-hair is assumption-conditional |
| Fig 2 :35 | "Alignment is triangulation, not negotiation. A mirror cannot correct you." | agreement cannot settle |
| Fig 2 :40 | "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" | simulated seats and pooled web sources |
| Fig 2 :42 | "Buy independence in proportion to the cost of being wrong." | instrument priority |
| Fig 3 :22-23 | "a reading taken below the break is not a weak reading. It is a reading of nothing." | D3 has no instrument |
| Fig 4 :27 | "The transform between scales loses information, and that is the point." | analogue to gravity is lossy |
| Fig 4 :30 | "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." | R_T is owed |
| Fig 5 :14 | "mechanism broken: a new term is owed" | mechanism question is a genuine bin |
| Fig 7 :35 | "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." | outreach and consensus |
| Fig 8 :32 | "no search, however long, adds an atom" | more spectra will not manufacture a fine-grained ground |
| Fig 8 :39 | "So a search that finds nothing is never a proof of absence." | non-detection of collapse detail is not proof of its absence |
| Fig 9 :27-28 | "describe it before you go looking, or any frame you pick will seem to fit" | describe the residual first |
| Fig 9 :32 | "you get a kind of thing, never the answer itself" | shape, not the exact mechanism |
| Fig 9 :44 | "Only a sealed room can be searched to the end, and no frame is a sealed room." | semiclassical frame is not sealed |
| Fig 9 :51 | "evidence bearing on the residual is admissible; evidence bearing only on its maker is a stake-inducing channel, and the verifier is denied it" | two-stage offer |
| Fig 9 :55 | "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." | A and B are a union |
| Fig 9 :57 | "a case in two conditions is not a harder case of either" | split before search |
| Fig 10 :42 | "A verifier that can reconstruct the claim cannot verify it." | do not send the framework first |
| Fig 11 :70 | "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." | BEC analogue is substituted |
| Fig 12 :104 | "A settled molecule becomes an atom for whatever composes over it." | settling before composing |
| Fig 12 :117 | "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." | collapse histories and soft hair |
| Fig 13 :14 | "conserved, finite, directionless alone" | energy is directionless alone |
| Fig 13 :20 | "ordering, so more and less can be said" | spectrum as ordering |
| Fig 13 :22 | "a difference that can be spent" | gradient as directedness |
| Fig 13 :74 | "Everything else is a composition across the two kinds, never within one." | cross-kind composition only |
| Fig 13 :75 | "Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state." | a structure mediates |
| Fig 13 :76 | "Energy and a gradient compose a flow. A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is." | temperature as a flow-like derivative |
| Fig 13 :115 | "The set is closed. The arrangements are not. That gap is why import exists." | no new primitive needed |
| Fig 13 :134 | "Unreachable is a verdict here, not a silence" | D3 verdict |

Strained readings are named and sent back to census rather than smoothed over. One live strain remains and is recorded in section 7.

---

## 4. Findings F1 to F7

### F1 - A thermal spectrum is an aggregate, and aggregation is exactly what erases per-slot collapse detail

**Verbatim.** Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."* Triangulated with Fig 4 :27 *"The transform between scales loses information, and that is the point."* (two figures, low overlap: per-slot residual versus cross-scale lossy transform).

**Derivation.** A blackbody spectrum at temperature T is a single-number summary over infinitely many field modes. The world source on the information paradox records Hawking's result as ⟨a_ω a_ω†⟩ = 1/(1 - e^(-ω/kT)), and notes that *"the form of the radiation depends only on a single parameter, temperature, even though the initial state of the black hole cannot be characterized by one parameter."* That is Fig 1 :22 in physics notation. So the statement "the thermal spectrum does not depend on collapse details" is not a new discovery the figures hand us about nature; it is the expected consequence of describing the flux at the coarse-grained level. The live signal, if any, has moved to the fine-grained state, which a thermal spectrum by construction cannot display.

**Consequence.** The question "does the spectrum depend on collapse details?" has a level index. At the coarse-grained level: no, and this is `specified` and ground-supported within the theory and by analogue observation. At the fine-grained level: unreached. Keeping these separate is the whole discipline; averaging them would produce the false verdict "the answer is no."

**Refuter.** Show a measurement in which two gravitational black holes with identical M, Q, J but different collapse histories return different best-fit temperatures at the same detector, or show that the coarse-grained thermal form itself varies with collapse history. Either fires and F1 falls.

### F2 - The mechanism has a legal shape: a structure mediates between energy and a thermal ordering. The framework does not name that structure

**Verbatim.** Fig 13 :74 *"Everything else is a composition across the two kinds, never within one."* Fig 13 :75 *"Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state."* Fig 13 :14 *"conserved, finite, directionless alone"* (energy). Fig 13 :20 *"ordering, so more and less can be said"* (spectrum). Fig 13 :22 *"a difference that can be spent"* (gradient). Fig 13 :76 *"Energy and a gradient compose a flow. A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is."*

**Derivation.** Energy is directionless on its own. An outgoing thermal flux is a spectrum (ordering) with a direction. Under Fig 13 :74-75, a structure must sit between them. The world sources supply the physics content: the Hawking temperature has the same form as the Unruh temperature with surface gravity in the place of acceleration, and surface gravity is the horizon's gradient-like quantity. So the figure-legal shape is `Energy -> (structure at the horizon) -> Spectrum`. This is a `general` structural claim. Identifying the structure as surface gravity, or as the Gradient among the six, is a **binding** from the physics frame onto a held atom. It is provenance, not a derivation, and it does not move the wall (Fig 13 :115 *"The set is closed. The arrangements are not. That gap is why import exists."*).

Why is this not a "shape, not a name" prohibition? The canonical phrase governs a *missing* primitive. Gradient and Spectrum are already among the six (Fig 13), so naming one is selecting a held atom, not inventing a seventh. The selection is still an import from the physics frame with a source gate and a shadow test owed; it is not forbidden, merely unproven. This corrects an over-reading I made first and is kept visible in section 8.

**Refuter.** Derive a direct Energy-to-Spectrum composition within the six-term set with no intervening structure, or show that the emitted flux can be written with no horizon structure at all while remaining thermal at infinity. Either breaks F2.

### F3 - The dependence verdict is level-indexed: no at the thermal level, unreached at the fine-grained level

**Verbatim.** Fig 9 :32 *"you get a kind of thing, never the answer itself"*; Fig 9 :27-28 *"describe it before you go looking, or any frame you pick will seem to fit"*; Fig 8 :39 *"So a search that finds nothing is never a proof of absence."* Triangulated across Fig 8 and Fig 9 (different figures, low overlap: absence-not-proof versus shape-not-name).

**Derivation.** Describe the residual before choosing a frame. The residual is not "is Hawking radiation thermal?" (settled) but "does any level of the radiation carry the collapse state?" At the thermal level the description is a single parameter, so dependence is excluded by the form of the description. At the fine-grained level we have no instrument that returns a gravitational fine-grained spectrum, so a search that finds no dependence would be exactly the case Fig 8 :39 warns against reading as absence. World sources confirm both halves: the information-paradox article records Hawking's argument that the detailed form is independent of the initial state and depends only on M, Q, J; it also records the contrary programme (small corrections, soft hair, replica/Page curve analyses) aimed at showing that information is preserved. These are not two independent witnesses for a Tether verdict; they are the state of the physics literature.

**Refuter.** A gravitational measurement of fine-grained correlations that either (a) matches the thermal prediction exactly with no collapse information while unitarity is independently confirmed, or (b) shows a collapse-history signature in the coarse-grained spectrum. (a) would break the "unreached" half; (b) would break the "no" half.

### F4 - The exact mechanism has no gravitational anchor. The analogue result is a substituted habitat with a non-zero round trip gap

**Verbatim.** Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :30 *"If it moves when you push on it, it is not an anchor."* Fig 11 :70 *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."* Fig 4 :30 *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* Triangulated across Fig 2 and Fig 11 (anchor test versus substituent habitat).

**Derivation.** The world sources state that Hawking radiation from ordinary black holes is *"extremely faint and is many orders of magnitude below the current best telescopes' detecting ability"* and that such bursts *"have not yet been detected."* So the gravitational ground is not held. What is held is analogue: Steinhauer's BEC experiment reports *"spontaneous Hawking radiation, stimulated by quantum vacuum fluctuations, emanating from an analogue black hole in an atomic Bose-Einstein condensate"* with an *"approximately thermal distribution"* and entanglement of high-energy pairs. That is a real ground, but for a different habitat. Under Fig 11 :70 it proves wiring, not gravitational capability. Under Fig 4 :30 the round trip from the analogue back to gravity carries a gap R_T that must be enumerated, not assumed zero. The gap includes: no curved dynamical spacetime, no gravitational back-reaction, a different dispersion relation at short wavelengths (the trans-Planckian issue), and a different notion of horizon.

Verdict for the exact gravitational mechanism: `gap`, unreachable at this budget, not underivable in principle. Fig 13 :134 *"Unreachable is a verdict here, not a silence"*.

**Refuter.** A detection of Hawking radiation from a gravitational black hole, or a demonstration that the analogue's dispersion and back-reaction differences cannot affect the predicted spectrum. Either would move F4 from `gap` toward `grounded`.

### F5 - The question is a union compound and must be searched as two loops

**Verbatim.** Fig 9 :55 *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :57 *"a case in two conditions is not a harder case of either."*

**Derivation.** The mechanism loop (A) is about composition legality and is largely answerable inside the framework plus analogue ground. The dependence loop (B) is about what the radiation's state preserves and needs a fine-grained ground we lack. A single lever, for example "invoke no-hair," clears the region where only B's coarse-grained condition holds and leaves the intersection (mechanism plus information) standing. The exemplar's own rule from Fig 9 applies: unbundle before searching again. `single-source` for the figure (Fig 9), with the physics literature's separate treatment of derivation versus information paradox as corroboration of the split.

**Refuter.** Show that mechanism and dependence are the same condition, for example that any change in the emission mechanism necessarily changes the fine-grained information content in a way fixed by the six-term set. Then the union collapses to one loop and F5 falls.

### F6 - Most world agreement here is one evidence pool; independence must be bought, not assumed

**Verbatim.** Fig 2 :40 *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*; Fig 2 :42 *"Buy independence in proportion to the cost of being wrong."*; Fig 7 :35 *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*; Fig 10 :42 *"A verifier that can reconstruct the claim cannot verify it."* Triangulated across Fig 2 and Fig 7.

**Derivation.** The Wikipedia pages on Hawking radiation, no-hair, the information paradox and the Unruh effect, plus the arXiv abstracts, all draw on the same canonical physics literature. Their agreement is the pool talking, not two frames confirming each other. The essays share an author with the figures. The simulated second seat in `11_audit.md` shares this session's entire evidence pool. None of these agreements is a witness for the Tether verdict; they are context and corroboration of the *physics*, weighted accordingly. The practical consequence for outreach is the two-stage offer: send the residual and the refuter first, ask for a failure, and only then offer links, because a recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked (Fig 10 :42).

**Refuter.** A genuinely independent witness would be an instrument result obtained without using the semiclassical derivation or the analogue model, for example a gravitational observation. If such a result agrees with the coarse-grained verdict, F6's "one pool" claim narrows; it does not flip.

### F7 - No mint is owed at the coarse-grained level; what is owed is a refusal of the question as posed, then a ground

**Verbatim.** Fig 5 :14 *"mechanism broken: a new term is owed"*; Fig 8 :32 *"no search, however long, adds an atom"*; Fig 9 :44 *"Only a sealed room can be searched to the end, and no frame is a sealed room."*

**Derivation.** The three mint guards (support, reachability, novelty) are not satisfied for a new term "collapse-dependence of the thermal spectrum": the term is already in the library, it is not novel, and the support sits in D3 where no instrument returns a residual. Under `THE_FORMULA.md` step 7, the three questions are SEARCHED (is it in here and unfound?), INWARD (extend an instrument already returning something) and OUTWARD (import a frame whose closure predicts its shape). For this question: SEARCHED is exhausted at the coarse-grained level; INWARD is the live route (a source-discriminating fine-grained instrument); OUTWARD is the analogue frame, already imported with a declared gap. Order matters: SEARCHED first, then INWARD, then OUTWARD, and INWARD and OUTWARD are never read against each other. What is owed before any mint is a refusal of "the spectrum depends on collapse details" as posed at the thermal level, because the thermal level excludes it by construction. A refusal adds a term and removes a standing, not an atom (Fig 8 :32).

**Refuter.** Exhibit a new primitive that the six-term set cannot compose over and that is required to state the collapse-dependence question at the fine-grained level. If one is found and pays against a ground, this finding is withdrawn.

---

## 5. Pre-registered refuter (written before the conclusion)

Required before any outreach: a falsifier written in advance is a design instrument. The shape claim is refuted if any of the following fires:

1. **Universality fires.** A measurement of a gravitational black hole shows that the coarse-grained spectrum at fixed mass, charge and spin varies with the collapse history. This breaks F1's "no at the thermal level" and F3's coarse half.
2. **Composition fires.** A derivation inside the six-term set composes Energy directly to Spectrum with no intervening structure, or shows the thermal flux needs no horizon structure at all. This breaks F2.
3. **Anchor fires.** The uniqueness result is shown to move with the frame's assumptions so completely that it cannot serve even as a conditional anchor for the coarse-grained verdict. This breaks D2 and F4's conditional status.
4. **Aggregation fires.** A fine-grained measurement returns radiation whose reduced spectrum is exactly thermal while its correlations carry no collapse information and unitarity is independently confirmed. This breaks the "unreached, signal may hide in aggregation" reading in F1 and F3.
5. **Analogue fires.** A controlled analogue experiment shows that changing the analogue's collapse-like initial conditions changes the thermal form itself. This increases the round-trip gap recorded in F4 rather than shrinking it.

If any fires, the corresponding claim is withdrawn and the log in section 8 is updated rather than the earlier reading silently erased. Until one is run, no part of this may be labelled `grounded`.

---

## 6. Recommendation

1. Lead with the level-indexed verdict, not with a mechanism story. The honest one-line answer is: no at the coarse-grained thermal level, unreached at the fine-grained level.
2. State mode on every sentence. The mechanism shape is `general`; the binding of surface gravity to a structure is `specified` and provenanced; the exact gravitational mechanism and fine-grained dependence are `gap`.
3. Separate A and B into two loops (F5) and do not allow the no-hair theorem to settle the mechanism question.
4. Enumerate the round-trip gap between analogue and gravity in writing before citing an analogue result as support (F4).
5. Buy independence in proportion to the cost of being wrong (Fig 2 :42). For this question the cost is high (a foundational claim about information), so seek an instrument result or a reviewer in a different closure, not more agreement from the same literature.
6. Send the generator, not the recording: the residual, the shape, the refuter. Fig 4 :22-23 from the membrane figure says *"Only methods cross up. Only head starts come down."*

---

## 7. Canonical usage check and retraction log

Two local sources were read after the first sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: a reading that makes one figure contradict another has misidentified its domain; and the framework returns *"what a missing thing would have to look like (a shape, not a name)"*, stopping at the limit of the instruments with the lineage recorded. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule, the three guards as a product, settling necessary but not sufficient, and step 7's SEARCHED / INWARD / OUTWARD discipline.

### Retractions and corrections (kept visible)

| earlier reading in this run | status after the check |
|---|---|
| "The spectrum does not depend on collapse details" as a single verdict | **Corrected to level-indexed.** No at the coarse-grained level; unreached at the fine-grained level. Averaging the two was the error F1 names. |
| "The framework cannot name the structure, so surface gravity cannot be identified" | **Over-reading, retracted.** The shape-not-a-name rule governs a *missing* primitive. Gradient and Spectrum are held atoms; naming one is a binding needing provenance, not a forbidden invention. F2 now says this. |
| "The BEC observation grounds Hawking radiation" | **Retracted.** Fig 11 :70 makes it a substituted habitat. It grounds the kinematics of analogue emission, not the gravitational claim. R_T is non-zero and enumerated. |
| "No dependence found means collapse information is absent" | **Retracted.** Fig 8 :39 forbids that inference. The absence of a signal in a coarse-grained channel is not proof of absence in the fine-grained state. |
| "No-hair settles the dependence question outright" | **Narrowed.** Fig 2 :30 applies: the theorem is assumption-conditional (four dimensions, Einstein Maxwell, analyticity), and the literature records counterexamples in other settings. It is a conditional anchor for D2 only. |
| Apparent Fig 1 :22 versus no-hair strain | **Not strained after re-census.** Fig 1 governs the description level of the radiation; no-hair governs relaxation of the exterior geometry. Different objects. |
| "A mint is owed for collapse-dependence" | **Withdrawn.** The term is not novel and support is absent. What is owed is a refusal at the coarse level and an instrument at the fine level (F7). |

### One live strain, named rather than hidden

Fig 13 :22 calls a gradient *"a difference that can be spent"*, and Fig 13 :76 distinguishes a gradient over space from one over time. Surface gravity is a radial (space-like) gradient redshifted to infinity. Whether it is literally the Gradient atom, or a different derivative structure that happens to play the same role, is a type question that needs an instrument that discriminates the two at the horizon. It is recorded as `strained-for-now` in `06_isomers_and_order.md` and `11_audit.md`. It is not smoothed into a claim that the mapping is proven.

### Verdict of the audit

The shape survives: energy plus a horizon structure composes into a thermal ordering; the coarse-grained spectrum is collapse-independent by construction; the question splits into two loops; the fine-grained part is unreachable at this budget and is reported as `gap`. The specific claim that the framework derives the exact gravitational mechanism, or that it certifies that collapse information is absent, does not survive. Everything here remains `specified` or `general`, and nothing is `grounded`.
