# Figure-grounded audit: quantum chaos and the chaos bound in black holes

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (read 2026-11-23): LLM output *"can quickly simulate an approximate answer/output with the formula"*, but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the claim it reports on. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, line numbered), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, plus the world sources in `10_source_ledger.csv`, all opened 2026-11-23.

---

## 0. The claim under audit

> Does quantum chaos connect to the chaos bound in black holes?

Stated as effect rather than topic:

- **Frame 1 (spectral).** A quantum system is called chaotic when its energy levels repel and follow random-matrix statistics (Wigner-Dyson), or when its spectral form factor shows the ramp and plateau, or when its eigenstates thermalise (ETH). This frame has no exponential time diagnostic and produces no bound of the form `λ ≤ 2πT`.
- **Frame 2 (dynamical / scrambling).** A quantum system is called chaotic when an OTOC grows exponentially, `C(t) ~ ε e^{2λ_L t}`, with a Lyapunov exponent obeying `λ_L ≤ 2π k_B T / ħ` under analyticity, unitarity, large number of degrees of freedom, and factorisation. Einstein-gravity black holes saturate it; SYK saturates it; Sekino and Susskind conjectured black holes are the fastest scramblers.
- **Residual R.** Why do these two uses of one word not agree on what is being bounded, and is the bound a law about chaos itself or a threshold on one diagnostic of it? A naive answer identifies them and calls black holes "maximally chaotic." The residual asks what would have to be true for that identification to be licensed.

What an answer would look like (bound now, before the verdict): (a) name the quantity the bound constrains; (b) say what kind of thing that quantity is under the six-term substrate; (c) say which frame supplies the factor `2π`; (d) name the ground reading that would move the answer to `grounded`. This is the sought-for shape made an ordinary term, per Fig 5 :65-66: *"make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else."*

---

## 1. Domain census

### R by arity, symmetry, scale

- **Arity:** two conditions. Spectral chaos and OTOC chaos are both called "chaos" but are measured by different instruments. Fig 9 :4-5: *"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."*
- **Symmetry:** the bound is an inequality, a threshold relation between a growth rate and a temperature. It is not a symmetric join of two operands at one level. Operators table :50: *"a threshold relation between two quantities."*
- **Scale:** first order inside a single quantum system (one spectrum, one OTOC); second order at the comparison between a system and a black hole or holographic dual. Fig 13 :103: *"Composition is recursive, and the level decides what is irreducible."*

### One line per domain: actors / currency / anchor

| domain | actors | currency | anchor | nameable? |
|---|---|---|---|---|
| D1 framework-internal composition | six terms, seven bonds, negation | composition in `closure(Γ)`, then settlement | the figures as metalaws; a measurement for any ground claim | yes, the figure text and the instruments |
| D2 spectral quantum chaos | Hamiltonians, levels, spacings, spectral form factor, random matrices | spectral statistics and predictions | measured or numerically computed spectra | yes, spectra |
| D3 scrambling and the chaos bound | OTOCs, commutators, `λ_L`, temperature `T`, scrambling time, SYK, black holes | early-time growth rate of an out-of-time-order correlator | the MSS theorem plus actual OTOC measurements | yes, measured correlators and the proof |
| D4 verification / outreach | expert readers, public venues | agreement and residuals | the ground, never agreement | yes, but in this simulated run it is not reachable (see F8) |

No domain is admitted without a nameable anchor. D4 is admitted because its anchor is nameable (the ground), but its independence is zero in this run, which is reported rather than hidden.

### Partition or union

This is a **union**, not a partition. The overlap is the OTOC itself: Scholarpedia's review uses it both as a quantum-chaos indicator and as the measure of scrambling, and Trunin uses it for both "true chaos" and "false positives." Fig 9 :54-58: *"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound"* The compound has its own loop. Treating it as one hard question is the first error to avoid.

### Order by dependency (Fig 3)

1. **Perception:** can a growth rate be read at all? An instrument already returning something is required (Fig 6 :34-35: *"the search for a proto-instrument is a search for one that is already there."*). OTOC measurement is that instrument; spectral statistics is another.
2. **Vocabulary and objective:** say what would count as progress. Fig 3 :9-10: *the objective: it can say what would count as progress here, in its own terms* Here: a threshold on a derived rate, not a new primitive.
3. **Refuse before mint:** the identification "scrambling equals chaos" must be refused before a "maximal chaos" term is minted (Formula step 2, REFUTED bin; Fig 5 :53: *"refuted: a term we hold is wrong; a term is owed that says so"*).
4. **Settle each first-order diagnostic before the second-order comparison** (Fig 12 :104).
5. **Describe R before choosing a frame** (Fig 9 :27-28).

A step whose input never arrives cannot be diagnosed. If the OTOC instrument is not actually measuring a growth rate of a derived quantity, the bound question below the break is a reading of nothing (Fig 3 :22-23).

### Figure census (quoted before concluding)

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | residual per slot, never averaged; frame-internal quantities disqualified | verdicts kept per domain, no average |
| **2 The Ground** | anchor must not update; one evidence pool is one witness | the MSS theorem is not the ground; measurement is |
| **3 Dependency Chain** | order by dependency; a reading below the break reads nothing | instrument first, comparison second |
| **4 The Membrane** | only methods cross; round trip has a gap | the `2π` number is an import, not a carried recording |
| **5 Mint Pipeline** | three guards as a product; refuted bin; sought shape is a preference | "maximal chaos" fails novelty and settlement |
| **6 Closure / Reachability** | import is the only operator that moves the wall; instruments improved from worse ones | the number is imported with a source gate |
| **7 Room Chain** | agreement is variation, not a verdict | a room of agreeable readers cannot corroborate |
| **8 Union Surplus** | residual first, frame second; provenance separates convergence from adoption | describe R, then find the physics frame |
| **9 Leave / Arrive** | split unions; describe before looking; filters not witnesses | the question is a union compound |
| **10 Ground Maintainer** | bring a characterised residual, never the source; verifier non-access | two-stage offer, verdict before theory |
| **11 The Habitat** | capability is agent-and-habitat; introduce, never subtract | a new instrument changes contact, not a new argument |
| **12 The Bond** | cycle, isomer, settled molecule becomes atom | chaos is a derived leftover, not a member |
| **13 Minimum Viable Set** | chaos is a derived remainder; cross-kind composition only | decisive for the shape |
| **Operators table** | ⋛ is a threshold relation between two quantities; a goal is a comparison | forcing ⋛ onto the bound strains the operand type |
| **Symbols table** | `R` is the aim; the ground is the anchor that cannot update | no ground reading has settled the import here |

Strained readings are named in §2, not smoothed over.

---

## 2. Findings

### F1 - Chaos is what a turn leaves, not a seventh member (decisive for the shape)

Fig 13 :31-32:

> **"a remainder compounding through a chain that amplifies is chaos"**

Fig 13 :124-125:

> **"Smoothness, symmetry, chaos and discreteness are each what a particular composition leaves behind, and none is a seventh member."**

`THE_FORMULA.md` substrate section:

> **"the derived quantities (symmetry, smoothness, chaos, a continuum) are what a turn leaves rather than members of the set."**

Seat Map, "The substrate is six terms and it is closed": *"The derived quantities a seat encounters, symmetry, smoothness, chaos, a continuum, are what a turn of the loop leaves rather than members of the set."*

So "chaos" is not a primitive that a theory of quantum chaos could discover as a new ingredient. It is a **derived quantity**, specifically the remainder of a cross-kind composition re-entering a chain that amplifies. Fig 12 :121 names the amplifying structure:

> **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."**

This gives the shape of the chaos claim before any physics is consulted: any system called chaotic must be one whose cross-kind turns leave a remainder that feeds back with the sign that amplifies. A bound on chaos is therefore, in shape terms, a threshold on the growth of that remainder. It is not a law about a substance.

**Mode:** `general` for the structural claim, `specified` for its application to quantum systems. **Status:** triangulated across Fig 13 (two separate lines), the Formula substrate, and the Seat Map, with low overlap between the figure census and the formula condensation. **Refuter:** derive "chaos" (or any of the six members) as a composition of the others, or exhibit a system in which a cross-kind turn leaves no remainder and is still called chaotic by every diagnostic. Either breaks the derivation.

### F2 - The question is a union compound, so the two diagnoses keep separate verdicts

The word "chaos" is doing two jobs. In the spectral frame the diagnostic is level repulsion and the spectral form factor; in the dynamical frame it is the early exponential growth of an OTOC. Scholarpedia (García-Mata, Jalabert and Wisniacki, 2023) records both: *"Quantum Chaos has originally emerged as the field which studies how the properties of classical chaotic systems arise in their quantum counterparts"* and, of the newer frame, *"The growth of the OTOC is associated with the spread of quantum information, a process commonly referred to as information scrambling."*

Fig 9 :4-5 and :55-58 (quoted in §1) require a split before a search. The compounds are:

- **Compound A, spectral:** "does this system have random-matrix level statistics?" Anchor: spectra.
- **Compound B, dynamical:** "does this system's OTOC grow exponentially, and at what rate?" Anchor: measured correlators.
- **Intersection:** OTOCs are used as a chaos indicator in systems with a classical analogue and as a scrambling measure in systems without one. This intersection is the compound that the chaos bound addresses.

World sources *conflict* with the identification of B with "chaos." Xu, Scaffidi and Cao, *Does scrambling equal chaos?* (PRL 124, 140602, 2020): *"scrambling can simply result from the presence of unstable fixed points in phase space, even in a classically integrable model... We propose that the notion of scrambling be distinguished from that of chaos."* Trunin, *Quantum chaos without false positives* (arXiv:2308.02403, 2023): *"Out-of-time-order correlators are widely used as an indicator of quantum chaos, but give false-positive quantum Lyapunov exponents for integrable systems with isolated saddle points."*

Per WATSON discipline, a conflict sends the derivation back to the census, never flips the verdict. The re-census result: **the bound constrains Compound B's early-time growth rate, not "chaos" unqualified, and not Compound A at all.** The world conflict is recorded as a conflict, not pooled as corroboration of the figures.

**Mode:** `specified`. **Status:** triangulated (Fig 9 split rule plus Fig 1 per-slot rule plus two low-overlap world sources that agree with each other by convergent derivation, not by shared evidence, since one iscond-mat and one is hep-th). **Refuter:** exhibit one instrument that reads spectral chaos and OTOC scrambling as the same quantity, with a single calibration that makes the two agree on an integrable system with an isolated saddle point.

### F3 - The bound is a threshold on a derived rate, not a new primitive and not a bond

The MSS bound, read from the source (Maldacena, Shenker and Stanford, arXiv:1503.01409, 2015; JHEP 08 (2016) 106): *"We conjecture that the influence of chaos on this correlator can develop no faster than exponentially, with Lyapunov exponent λL ≤ 2πkBT/ℏ."* The paper states the assumptions: *"Our direct argument for this bound relied on analyticity, as well as the physical input that certain time-ordered correlation functions should approximately factorize."*

Under the figure census this is a **threshold constraint on a derived quantity**: the quantity constrained (`λ_L`) is the growth rate of the remainder F1 describes; the threshold is set by temperature, a state. Fig 13 :74-75:

> **"Everything else is a composition across the two kinds, never within one."**
> **"Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state."**

Strain test on the tempting mapping "the chaos bound is the comparison bond ⋛." Operators table :50: *"a threshold relation between two quantities"*; Operators table :51: *"a goal is a comparison, which is why a vocabulary without it cannot state one"*; Fig 12 :85-89 gives the test: *"is it about which is larger, rather than both being present? Yes."* The bound does have the threshold shape. But the operands are a growth rate (a derived rate) and a temperature (a state) at different levels, and ⋛'s test was derived for two operands at one level. Fig 12 :104 lets a settled molecule become an atom, but whether a rate-now-atom counts as a *quantity* at that level is not decided by the figure. **The mapping is refused as a derivation and kept as a shape.** It is a strain, named, not a fit.

Fig 5 :43-44: *"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before. A term that explains everything by saying nothing fails this."* Declaring "the chaos bound is ⋛" explains everything by renaming the inequality. It fails the bargain.

**Mode:** `specified`, strain on the operand type. **Status:** single-source for the figure definition of a threshold, with the physics number imported. **Refuter:** show that ⋛'s operands at second order must be bare quantities at every level, so a derived growth rate cannot occupy one; or show that the MSS bound constrains a primitive rather than a rate.

### F4 - The factor `2π` and black-hole saturation are imports with a source gate, not derivations

Fig 6 :14 calls import *"the only operator that moves the wall"*; Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* Fig 8 :12-13 names the gates: *"source gate: provenance"* and *"shadow test: explains a gap."*

The factor `2π k_B T / ħ` is not derivable from the six-term set. It arrives from the black-hole / QFT frame with a specific provenance: MSS 2015, built on Shenker and Stanford's butterfly-effect calculations, Sekino and Susskind's fast-scrambling conjecture, and Kitaev's Lyapunov terminology. The shadow test it passes is real: it explains a gap, namely why scrambling cannot be faster without violating unitarity, analyticity, or the no-cloning bound (Scholarpedia: *"Maldacena, et al. conjectured in 2016 the existence of an upper bound to the growth-rate of the OTOC, essentially given by the temperature of the system"*).

But the figures' own caution applies. Fig 8 :56-57 on the triangulation claim: *"fits four cases already known and has not been tested forward: Wiles and Frey, Montgomery and Dyson, Bekenstein and holography, the relativization barriers in complexity theory."* Bekenstein and holography is a **retrodiction**, a case the frame describes that was arrived at independently. Black-hole saturation of the MSS bound is in the same category. It is not a result the framework produced.

Fig 8 :50-52: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."* Hence the provenance column in the packet is load-bearing, not decoration.

**Mode:** `specified`, ungrounded by the framework. **Status:** triangulated for the import rule (Fig 6 plus Fig 8), single-source for the specific number (MSS 2015). **Refuter:** derive `2π` from the six-term set without importing the QFT frame, or show the import fails the shadow test because it explains no gap that the frame could not already describe.

### F5 - What the MSS bound is an anchor for, and what it is not

Fig 2 :29-30:

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."**

The MSS result is a **theorem**, not a measurement. It is a proof under assumptions (analyticity in a strip, boundedness, factorisation, large hierarchy between dissipation and scrambling). The paper itself lists *"Cases where there is no bound"*: free fields in two dimensions, two-dimensional CFTs with light-cone singularities, random Hermitian matrices with no hierarchy. So its anchor status is local to a domain, exactly as Fig 2 :36-38 requires: *An anchor is legitimate when the question is constitutively about it*

For the physics frame the anchor is the measured OTOC growth rate, not the theorem. Trunin's paper and the Scholarpedia review both document that OTOC measurement is already real (trapped ions, NMR, solid-state spins): *"LOTOC and the replica OTOCs can be experimentally measured using the same protocols as conventional OTOCs."* An improvement that changes contact (a better OTOC protocol, a larger system, a cleaner separation of saddle-point contributions) changes the answer; a further argument does not (Fig 11 :40: *"An improvement that does not change contact changes nothing, however much it improves."*).

**Mode:** `general` for the anchor rule, `specified` for its application. **Status:** triangulated (Fig 2 plus Fig 11 plus the MSS paper's own statement of assumptions). **Refuter:** produce a measurement in which an OTOC growth rate exceeds `2π k_B T / ħ` in a system satisfying the MSS assumptions.

### F6 - Mode discipline: the bound is not a verdict about "chaos"

Seat Map, output-layer failure genus: *"a mode stated as a verdict. Where quantities are unmeasured, the notation still demands them and a reader supplies them. An estimate labelled accepted claims a settlement that did not occur, and the formalism makes it look rigorous. The modes are general, specified, and grounded; each is legitimate and the mode must be stated."*

The phrase "black holes are maximally chaotic" is delivered in the literature as a settled verdict, and it is settled **within physics** by the saturation result. It is not settled by the Tether, and it is not `grounded` by any measurement at a black-hole horizon. The honest form: *"Under the six-term substrate, the quantity bounded is a derived early-time growth rate; the specific bound is a provenanced import from the QFT frame; status `candidate` until an independent ground reading moves it."*

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* So the verdicts stay per domain: D1 general, D2 shape only, D3 specified import, D4 unreachable this run. They are never averaged into a single "answer."

**Mode:** `general`. **Status:** triangulated (Seat Map plus Formula mode rule plus Fig 1). **Refuter:** exhibit a measurement that settles the framework's binding of the bound, not merely the physics bound.

### F7 - A falsifier written before the run

Seat Map :287: *"And a falsifier written before the run is a design instrument, not only an honesty device. Stating what failure looks like surfaces constraints the design does not, and the constraint arrives as a change to the experiment rather than as a note about it."*

See §3. It is written there before any conclusion is drawn in §4.

### F8 - This second seat cannot corroborate anything

Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool"*; Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* The auditor in `11_audit.md` reads the same figure text, the same essays, the same physics sources as this primary seat. Its agreement is the pool talking. D4's verdict is therefore **unreachable at this budget**, which is different from `gap`: the anchor (an outside frame with a different closure) is nameable but not recruited in this simulated run. Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

**Mode:** `general`. **Status:** triangulated (Fig 2 twice, Fig 8). **Refuter:** produce an outside frame with no access to this folder's interiors whose verdict on stage 1 is recorded before it sees the framework.

### F9 - What survives, with mode attached

| claim | mode | figure or source |
|---|---|---|
| Chaos is a derived remainder, not a seventh member | `general`, triangulated | Fig 13 :31-32, :124; Formula substrate |
| A bound on chaos is a threshold on a derived growth rate | `specified`, ungrounded | Fig 13 :31-32; Operators :50 (shape only) |
| Spectral chaos and OTOC scrambling are two conditions of a union compound | `specified`, triangulated | Fig 9 :4-5, :54-58; Xu et al.; Trunin |
| The number `2π k_B T / ħ` is an import with a source gate, not a derivation | `specified`, single-source for the number | Fig 6 :14, :23; Fig 8 :12-13, :50-52; MSS 2015 |
| Black-hole saturation is a retrodiction (an instance), not a framework result | `specified`, triangulated | Fig 8 :56-57; Scholarpedia |
| The chaos bound **is** the comparison bond ⋛ | **refused as a derivation** | Strain on operand type, F3 |
| OTOC scrambling **is** chaos | **refused** | World conflict, F2 |

---

## 3. Pre-registered refuter

Written before the recommendation and the conclusion, per Seat Map :287. The shape claim is refuted if any of the following holds:

1. **Substrate refuter.** One of the six terms is derived from the other five, or chaos is admitted as a seventh member. Breaks Fig 13 indivisibility and F1.
2. **Operand-type refuter.** ⋛ is shown to accept a derived growth rate and a state as operands at the same level in every composition, so the chaos bound can be written as a bond inside `closure(Γ)` with no import. This would clear the strain in F3 and change the verdict from "import" to "derivation."
3. **Ground refuter.** A measurement shows an OTOC growth rate exceeding `2π k_B T / ħ` in a system satisfying the MSS assumptions (analyticity, factorisation, large N, hierarchy of time scales). Breaks the import's shadow test.
4. **Union refuter.** One instrument is shown to read spectral chaos and OTOC scrambling as the same quantity, including on an integrable system with an isolated saddle point. Collapses the union to a partition and re-sends the derivation to the census.
5. **Provenance refuter.** The `2π` factor is derived from the six-term set without importing the QFT frame, with the derivation dated before the MSS paper. Removes the import and changes the verdict.

If any fires, the corresponding claim is withdrawn and the retraction is recorded here, not silently erased. Until one is run, no part of this may be labelled `grounded`.

---

## 4. Recommendation

1. Lead with the shape: chaos is a derived remainder; a bound on chaos is a threshold on that remainder's growth rate, not a primitive. This is the only figure-derived content (F1, F3).
2. Split the union before searching. Say explicitly that the spectral and dynamical diagnoses are two conditions and that the bound addresses the dynamical one (F2).
3. Keep the import provenance attached to `2π` and to black-hole saturation. Do not present saturation as a framework result (F4).
4. Refuse the shortcuts "the bound is ⋛" and "scrambling is chaos." Both are strains or conflicts, not findings (F2, F3).
5. State modes on every sentence. "Maximally chaotic" is a physics verdict, not a Tether verdict (F6).
6. Lead the outreach with the residual and the refuter, then ask what the reader would count as a failure. Offer the links only after their verdict on stage 1 is recorded (Fig 10 :52; Fig 4 :22).

---

## 5. Canonical usage check

Two local sources were read after sections 0 to 4 and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradiction another has misidentified its domain, not found a flaw"*, and the canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of the instruments and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: *"The figures are the ground for design questions; Isaiah is the anchor for what the figures genuinely cannot settle."* Design questions such as "should the union be split" are decided by the figures, not by escalation.
- `THE_SEAT_MAP_Field_Guide_amended.md` :186: the derived quantities include chaos; :163 correlation valence; :281 mode as verdict; :287 pre-registered falsifier.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "The chaos bound maps directly onto ⋛" | **Retracted as a derivation.** Strain test: ⋛ compares two quantities at one level; the operands here are a derived rate and a state at different levels. Kept as a threshold *shape* only. Fig 8 :32 (*"no search, however long, adds an atom"*) forbids manufacturing the number from the bond set. |
| "Quantum chaos and black-hole chaos are one phenomenon" | **Retracted and split.** Union compound; world sources conflict with the identity claim. See F2. |
| "The MSS theorem is the anchor" | **Corrected.** A theorem is a framework-relative proof, not a measurement. The anchor for the physics domain is the measured correlator; the theorem is an import with provenance. Fig 2 :29-30, :36-38. |
| "Fig 13's chaos is the spectral chaos of Wigner-Dyson" | **Narrowed.** Fig 13 :32 describes the amplifying-remainder sense, which matches the OTOC frame. The spectral sense is a different derived leftover (spectrum is a held structure). No single figure line licenses both. |
| "This solution can corroborate the verdict" | **Retracted.** Simulated second seat shares the evidence pool. Internal consistency only. Fig 2 :40. |
| F1, chaos as derived remainder | **Canonically confirmed.** Figures README, Formula substrate, Seat Map :186 all agree; low overlap between them. |
| F4, import needs source gate and shadow test | **Canonically confirmed.** Fig 6 :14, :23 and Fig 8 :12-13, :50-52. |
| Union before search | **Canonically confirmed.** Fig 9 :54-58 and WATSON 60's rule that a bundled problem must be unbundled. |

### Round trip note

Condensing the figures into the shorthand "chaos is a derived remainder; the bound is a threshold" is lossy. Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* What the shorthand drops is recorded in `11_audit.md`: the operand type of ⋛, the assumption set of MSS, and the union structure. The gap is not zero; it is the honest report.

### Updated verdict

The shape survives; the identifications do not. Chaos is a derived remainder of cross-kind composition, a bound on chaos is a threshold on the growth of that remainder, and the specific number and black-hole saturation are provenanced imports from the physics frame. The two diagnoses form a union compound and keep separate verdicts. After re-census: **one strain, the ⋛ operand type, named and not hidden; one world conflict, scrambling versus chaos, sent back to the census and resolved by splitting.** Mode `specified`, ungrounded, candidate.
