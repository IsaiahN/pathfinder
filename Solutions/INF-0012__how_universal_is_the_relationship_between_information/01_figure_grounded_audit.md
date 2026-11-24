# Figure-grounded audit: how universal is the erasure-cost relationship?

**Mode of this document: `specified`, not `grounded`.** It states what a ground reading would have to measure. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* names the limit: LLMs *"can quickly simulate an approximate answer/output with the formula"* but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the physics question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** Local: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (primary, verbatim, all `Fig N :line` quotes), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. World sources actually opened are listed in `10_source_ledger.csv` and used only as secondary corroboration.

---

## Proposal header (seat reasoning, five lines)

```
DECIDES:    Keep the figure-derived shape (a priced, substrate-relative floor, unbundled
            per domain) and REFUSE the universal-equality reading. A = B? No. Reading A
            asks for one constant valid everywhere; the shape claim asks for the
            conditions under which a bound holds. They answer different questions:
            a number versus a domain. Universality here is a verdict about a frame's
            reach (Fig 8, Fig 9), not a property of the world.
HOURS:      Setup and reading 2-3. Census and figure quotes 2-3. World corroboration 2-3.
            Four outreach artifacts 1-2. Second-seat audit 1. Roughly 8-12 agent-hours.
PRIOR CASE: QMGR-0037 (spacetime continuum or emergent), the imported calibration
            exemplar. Its method (residual, census, verbatim quotes, retraction table,
            pre-registered refuter) is carried forward, not its answer.
ANALOGUE:   Library of Babel searcher: describe the residual in effect terms, bootstrap
            vocabulary by proximity, steer by the question-as-tether, stop at a shape.
            Second analogue: Fig 13's thermodynamics test, where each member is checked
            against a law rather than scored by a wish.
LIMIT:      The figures do not contain a Landauer principle and cannot settle the
            physics. They govern only the shape of an answer. A universal claim is a
            frame certifying its own reach, which Fig 8 forbids. The audit stays flat at
            scale only if each question gets an independent second census (Fig 7 :35).
```

---

## 0. The claim under audit, and the residual

The question is: *How universal is the relationship between information erasure and thermodynamic cost in real, noisy systems?* The familiar relationship is the Landauer bound: erasing one bit dissipates at least `kT ln2` of heat into a bath at temperature `T`. The word that carries the residual is **universal**. The phrase that carries the domain is **real, noisy systems**.

**Residual stated in effect terms.** The ideal statement was derived and tested under conditions that are themselves named in the literature: a symmetric bit, a quasistatic protocol, a bath that thermalises, weak coupling, equilibrium initial states. Real, noisy systems violate one or more of those conditions. R is the gap between the statement and its domain of validity. It is not one hard question.

- **Arity:** several conditions overlap (symmetry, speed, bath size, coupling, coherence, initial correlations). More than one operand is bound.
- **Symmetry:** the relationship is a *lower bound*, not a symmetric equality. Individual trajectories can fall below it while the average does not. The comparison is a threshold relation, not a join of two equal terms.
- **Scale:** one bit at the mesoscopic scale, where heat is a fluctuating quantity, versus the macroscopic limit, where an entropy state function emerges from typicality.

**What an answer would look like (bound in advance).** The shape is written down in `README.md`: a priced floor, substrate-relative, per-slot under noise, and a union to be unbundled. It is bound as an ordinary term so it can accrue a residual and be refused by the same test as everything else.

**Why this is not a single domain.** Fig 9 :4: *"First: is there a fact here?"* Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are several well-formed questions split rather than one hard question searched. The erasure-cost relationship behaves exactly so: the ideal theorem works in its subset, the finite-time corrections work in theirs, and the quantum equality works in a third. One number cannot close R.

---

## 1. Domain census (before any figure line is chosen)

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet. Partition or union is stated. Order is by dependency (Fig 3), not importance.

| domain | actors | currency | anchor | type |
|---|---|---|---|---|
| D1 The ideal theorem | a bit, a bath at `T`, a quasistatic protocol, a Hamiltonian | work and heat in units of `kT ln2`; description length in bits | the second law and a measurement that saturates the bound | partition boundary: what composes to make a cost |
| D2 Real, noisy mesoscopic systems | colloidal particle, double well, finite bath, stochastic trajectories | fluctuating heat, average work | measured mean dissipated heat over many realisations | union member: speed and bath size overlap |
| D3 Quantum and coherent systems | qubits, coherence, entanglement, non-Markovian reservoirs | von Neumann entropy, mutual information, relative entropy | the equality form of the bound and quantum experiments | union member: coupling and initial correlations overlap |
| D4 Asymmetric and imperfect erasure | asymmetric wells, success probability, initial correlations | free-energy difference, conditional entropy | generalised bounds tested against numerics | union member: symmetry and accuracy overlap |
| D5 The verification frame | expert readers, figure text, ground | residuals and refuters | the ground, never agreement | partition boundary: what may count as a settlement |

**Union or partition.** R is a **union**, not a partition. D2, D3 and D4 overlap: a finite-time experiment can also be quantum, and an asymmetric bit can also be noisy. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* The unbundling is the per-domain verdict in `07_the_tether_answer.md` and `09_watson_answer.md`. Verdicts are kept separate and never averaged.

**Order by dependency (Fig 3).** Settle D1 before D2, D2 before D3 and D4, and the whole before D5. Fig 3 :20: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."* Asking "how universal" before settling what the bound is in its own domain is effort spent above the break.

**No nameable anchor, no domain.** A claim about "universality in all possible physical implementations" has no anchor, because there is no instrument that ranges over all implementations. That is not a domain and is not searched. Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 2. Figure census (quoted verbatim before concluding)

| figure | bearing on this question | verdict it governs |
|---|---|---|
| **1 The Agent** | the residual must stay indexed by object slot, not aggregated | noise cost is per realisation, not a single averaged number |
| **2 The Ground** | triangulation, anchor must not move | experiments settle the shape, agreement does not |
| **3 Dependency Chain** | ordered by dependency | settle the ideal theorem before the noisy corrections |
| **4 The Membrane** | the transform loses information; round trip has a gap | the formula is a lossy condensation of the figures, R_T is nonzero |
| **5 Mint Pipeline** | MDL bargain, Shannon coding, nothing leaves the library | the cost relationship is a price, not a decree; information is not destroyed |
| **6 Closure / Reachability** | import is the only operator that moves the wall | broadening the claim needs a new frame, not more search in one frame |
| **7 Room Chain** | agreement compounds, evidence does not | many agreeing papers are one evidence pool |
| **8 Union Surplus** | a search that finds nothing is not proof of absence; underivable versus unreachable | a universal claim is a frame certifying its own reach |
| **9 Leave / Arrive** | split rather than search; unbundle a union; describe before looking | the question is a union and must be unbundled before verdict |
| **10 Ground Maintainer** | the ground does not decay, the channel does; bring a characterised residual | ask a checker what would refute the shape, not whether they believe it |
| **11 The Habitat** | capability is agent-and-habitat, contact cascades | a bound measured in one habitat does not transfer without the habitat |
| **12 The Bond** | "bits price the description, actions price finding out"; two currencies do not add; the bond is the rest of the information | the erasure-cost relationship is a priced bond between two currencies |
| **13 Minimum Viable Set** | thermodynamics as a test; configurations to count, direction to spend, finiteness in a finite region; noise as discarded detail reappearing | the bound is substrate-relative: its domain is named by these members |
| **Operators table** | `⋛` comparison is a threshold relation between two quantities | the relationship is a floor, not a symmetric join |
| **Symbols table** | `R` is the aim, indexed by slot; the ground is the anchor | the residual is per slot; the measurement settles it |

Strained readings are named as such in section 3, not smoothed over.

---

## 3. Findings

### F1 - The figures do not contain a Landauer principle (decisive for scope)

No figure line states `kT ln2`, or a cost per erased bit, or the second law as a quantified bound. What the figures contain is a *test* for whether a claimed law is load-bearing, and a *shape* for how a cost relates to information.

Fig 13 :49:

> **"Read the established laws of thermodynamics as a test rather than a scorecard."**

Fig 13 :3:

> **"No system functions without any of them, none is built from the others, and everything else is a composition across the two kinds."**

This decides the mode. The figures can say what a universal-erasure-cost claim would have to look like and which substrate would have to carry it. They cannot supply the constant, and they cannot say whether this world's physics pays it. Any answer that quotes a numeric bound as figure-derived has misidentified the source. Triangulated (Fig 13, the figures README, and the metalaws note all agree the figures are a generator of shape, not a table of constants).

### F2 - The relationship is a priced bond between two currencies, not an equality (load-bearing)

Fig 12 :125:

> **"A composition costs in two currencies, and they do not add."**

Fig 12 :126:

> **"Bits price the description. Actions price finding out whether it holds."**

Fig 12 :128:

> **"The two readings come apart in both directions."**

The erasure-cost relationship joins exactly these two currencies: bits of information discarded (description) and heat or work dissipated (actions, measured in energy). The figures say they are in different units and do not add. So the relationship cannot be an identity between a number of bits and a number of joules; it is a *price*, a rate of exchange licensed under stated conditions. This is Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."* The bond between information and energy carries information that neither operand carries alone.

Fig 5 :45 puts the same bargain in its own notation: *"This is minimum description length, Rissanen 1978, which is itself a composition of Kolmogorov complexity and Shannon coding put to work on model selection."* Shannon coding appears in the figure text, so information theory is inside the framework's vocabulary. The thermodynamic constant is not.

**Verdict:** `specified`, triangulated across Fig 12 and Fig 5 (low overlap: the bond pricing and the MDL bargain are different derivations). The price shape is figure-derived. Its numeric value is not.

### F3 - Universality is substrate-relative: the domain is named by the six terms (load-bearing)

Fig 13 :74:

> **"Everything else is a composition across the two kinds, never within one."**

Fig 13 :58 (on the network member):

> **"no relation between systems, and no configurations to count"**

Fig 13 :68 (on the energy member):

> **"finiteness in a finite region is what makes the counting terminate"**

Fig 13 :71 (on the gradient member):

> **"no direction to drive the flow, and no remainder left after each step"**

Erasure *is* a reduction in the number of configurations (two states to one), which requires the network member to have "configurations to count". The cost is finite because the region is finite ("finiteness in a finite region is what makes the counting terminate") and a flow has direction because a gradient can be spent ("no direction to drive the flow"). Remove those members and the relationship has no derivation. So the relationship is universal **within the substrate the figures describe**, and silent outside it. That is not the same as universal over all physical systems, because the six are a visible guess, not nature's own list.

The framework's own canonical text makes this explicit: the framework returns *"a shape, not a name"* (`FIGURES_README_canonical.md`), and the local metalaws note records the six as *"the minimum set any composed reality needs"* rather than a measured constant (`60_FIGURES_AS_METALAWS.md`). A 'universal' verdict over all implementations is a frame certifying its own reach, which Fig 8 forbids.

**Verdict:** `general` on the structural rule (any erasure cost must be a priced bond inside a substrate), `specified` on its application to thermodynamics. Triangulated across Fig 13, the figures README and the metalaws note.

### F4 - Noise is discarded detail reappearing above a crossing (loads D2)

Fig 13 :31:

> **"And because each turn leaves a remainder (the residual) that re-enters the next"**

Fig 13 :32:

> **"the detail a crossing discards reappears above it as noise."**

This is the figure's account of noise, and it is directly the erasure case. Information discarded from the system does not vanish; it reappears above the crossing, in the environment, as heat and as fluctuating detail. Fig 5 :55: *"Nothing leaves the library. What falls is the reach"* Fig 6 :42: *"What is recorded only grows. What is reachable is derived, and it can fall."* Erasure removes the *standing* of a bit to be composed over; it does not delete the record. That is the structural reason there is a cost at all.

For "real, noisy systems" the consequence is specific: the cost is a per-realisation quantity. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* A single averaged heat value hides which realisation carried the live residual. The figures therefore predict that the floor is approached in the mean under the reversible limit and that individual trajectories fluctuate around it. They do not supply the fluctuation distribution.

**Verdict:** `specified`, triangulated across Fig 13 and Fig 1 (different quantities: substrate noise and per-slot residual). The fluctuation formula itself is a `gap` for the figures.

### F5 - The question is a union, so a single universality number is the aggregation error (load-bearing)

Fig 9 :54:

> **"And when the split lands on a union rather than a partition, unbundle before you search again."**

Fig 9 :4:

> **"First: is there a fact here?"**

The conditions that modify the relationship (speed of the protocol, size of the bath, coupling strength, symmetry of the bit, coherence, initial correlations) overlap. D2, D3 and D4 are a union. A single "how universal on a scale of one to ten" answer would be exactly the average that Fig 1 :22 warns against. The correct form is a set of per-domain verdicts, each with its own anchor and its own refuter.

Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* A claim that the relationship is "99 percent universal" is a filter result, not a witness.

**Verdict:** `general`, triangulated across Fig 9 and Fig 1. This governs the *form* of the answer, not its content.

### F6 - "Universal" is a claim about a frame's reach, and a frame cannot certify its own reach

Fig 8 :32:

> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."**

Fig 8 :39:

> **"So a search that finds nothing is never a proof of absence."**

Fig 9 :44:

> **"Only a sealed room can be searched to the end, and no frame is a sealed room."**

To assert that the erasure-cost relationship is universal is to assert that no frame outside the one in which it was derived could change the answer. That is a claim about the closure of all frames, made from inside one frame. The figures forbid it the same way they forbid a last room (Fig 7) and a final theory. What is available is the narrower, checkable claim: within the substrate and under the named conditions, the bound holds; outside them, the verdict is either a documented modification or an honest `gap`.

Fig 8 :56 even lists the Bekenstein and holography case among the known triangulation instances: *"The triangulation claim fits four cases already known and has not been tested forward: Wiles and Frey, Montgomery and Dyson, Bekenstein and holography, the relativization barriers in complexity theory."* Information bounds and thermodynamic bounds have met before, as retrodiction, not as a licence for a universal claim.

**Verdict:** `general`, single-source for the closure rule (Fig 8), triangulated with Fig 7 and Fig 9 for the no-last-room form.

### F7 - The ground for each domain is a measurement, and agreement across papers is one pool

Fig 2 :29:

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."**

Fig 2 :35:

> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**

Fig 2 :40:

> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"**

For D2 the anchor is the measured mean dissipated heat of a colloidal-particle experiment. For D3 it is a quantum experiment result. For D4 it is a numerical test of a generalised bound. A bibliography in which twenty papers cite the same review is one witness wearing twenty names. The world sources in `10_source_ledger.csv` are recorded with an overlap column for exactly this reason. The physics sources are independent of the framework author and therefore constitute genuine low-overlap corroboration of the *shape*; the framework essays share the author's evidence pool and do not.

**Verdict:** `general`, triangulated across Fig 2 and Fig 10.

### F8 - What actually survives, with its mode

| claim | mode | figure or source |
|---|---|---|
| Erasure cost is a priced bond between bits and actions, not an equality | `specified` | Fig 12 :125-126, triangulated with Fig 5 :45 |
| The relationship is universal only within a named substrate | `general` structural, `specified` applied | Fig 13 :3, :58, :68, :71 |
| In noise the cost is a per-slot quantity; the mean approaches a floor in the reversible limit | `specified` | Fig 13 :31-32, Fig 1 :19, :22 |
| The universality question is a union and must be unbundled | `general` | Fig 9 :54, Fig 9 :4 |
| A frame cannot certify that the relationship holds in all frames | `general` | Fig 8 :32, :39, Fig 9 :44 |
| The numeric value `kT ln2`, finite-time corrections, quantum coherence bounds, asymmetry conditions | `gap` for the figures | supplied as secondary world corroboration only |

---

## 4. The three questions of formula step 7, kept distinct

Per `THE_FORMULA.md` step 7, when no term in `closure(Γ)` closes R, ask SEARCHED first, then INWARD, then OUTWARD. They are not interchangeable.

- **SEARCHED (is it in here and unfound?).** Yes for the shape: Fig 12 :125-126 and Fig 13 already contain the priced-bond and substrate test. The closure does not change; the missing item is the numeric constant and the domain map. More searching the figures for a constant is budget spent on a region already swept.
- **INWARD (extend the instrument, from one already returning something).** The instrument already returning something is the measured mean dissipated heat. Sharpening it means single-trajectory heat statistics and faster protocols. This stays inside the physics frame, in our own terms.
- **OUTWARD (import: characterise R in effect terms, find the frame whose closure predicts its shape).** R in effect terms is: a priced floor between discarded configurations and dissipated actions, dependent on symmetry, speed, bath size and coupling. The frame whose closure predicts that shape is finite-time stochastic thermodynamics and quantum information theory. The import carries a source gate and a shadow test (Fig 6 :12-13) and is debited against independence. The world sources in the ledger are that import, recorded with provenance, not promoted into figure lines.

INWARD and OUTWARD are opposed and were run as two tracks. No figure line was stretched to cover a finite-time correction. Where the figures are silent, the answer is `gap`, not a forced fit. Fig 13 :134: *"Unreachable is a verdict here, not a silence."*

---

## 5. Pre-registered refuter (written before the conclusion)

Per the seat rule that *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refused if any of the following holds:

1. A symmetric bit in a thermal bath, erased quasi-statically, is reproducibly measured dissipating less than the stated floor on average. This breaks the priced-bond claim at the ground and contradicts the saturation result in the world literature.
2. The relationship is demonstrated to hold identically where there are no configurations to count, no gradient to spend, and no finite region to make the counting terminate. This breaks Fig 13's thermodynamics test and makes the substrate-relative claim false.
3. Aggregating per-realisation residuals is shown to preserve, rather than hide, the live signal in a noisy erasure ensemble. This breaks Fig 1 :19 and :22.
4. The overlap conditions (speed, bath size, coupling, symmetry, coherence, correlations) are shown to be independent, so the residual is a partition rather than a union. This breaks Fig 9 :54 and restores the single-number reading.
5. A frame is exhibited that certifies its own universality without an outside witness. This breaks Fig 8 :32 and Fig 9 :44.

If any fires, the shape is withdrawn. Until one is run, nothing in this folder is `grounded`.

---

## 6. Recommendation

1. Lead with the shape, not the constant: a priced floor, substrate-relative, per-slot under noise, union to be unbundled (F2, F3, F4, F5).
2. Keep the per-domain verdicts separate and refuse to average them (F5). This is the single most important structural correction.
3. State the mode on every substantive sentence: `general` for the form, `specified` for the thermodynamics application, `gap` for numeric constants and quantum-specific bounds (F1, F8).
4. Import the world results with provenance and a shadow test, never as figure lines (section 4, F7).
5. Ask a checker what would refute the shape before offering the framework. Fig 10 :52: *"Bring a characterised residual, never the source."*
6. Send the generator, not the recording. Fig 4 :22: *"Only methods cross up. Only head starts come down."*

---

## 7. Canonical usage check (figures README and WATSON 60)

Two local sources were read after the first six sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also the canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the limit of the available instruments and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the seat reads the ground; it does not ask the anchor to decide what the figures already settle. The figures are metalaws, so design questions are answered by derivation, not escalation.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| F2 initially mapped `kT ln2` onto Fig 12's bond-price logarithm | **Retracted.** Fig 12's price is in bits (description length), not joules. Equating them is exactly the "two currencies do not add" error the figure names. The figure governs the shape (a price exists), not the numeric rate. Retained as a visible error. |
| F6 initially read the figures as settling whether quantum coherence modifies the bound | **Retracted to `gap`.** The figures are silent on coherence. The quantum result enters only as a secondary world source with provenance. |
| "Universality" initially treated as one domain with one verdict | **Re-censused as a union** (Fig 9 :54). The single-number answer is the aggregation error (Fig 1 :22). Confirmed by the re-census, not smoothed over. |
| F1 "the figures do not contain the bound" | **Canonically confirmed.** The README says the framework returns a shape, not a name, and stops at the limit of instruments. A numeric constant is not a shape. |
| F3 "universality is substrate-relative" | **Canonically confirmed.** The six are *"the minimum set any composed reality needs"* in the metalaws note, not a measured list; declaring them makes a choice visible, not neutral. |
| F4 "noise is discarded detail reappearing" | **Canonically confirmed and sharpened.** Fig 13 :31-32 plus Fig 5 :55 (nothing leaves the library) give the structural reason erasure has a cost. |
| Apparent strain Fig 13 (six terms) versus a numeric erasure law | **Not strained after re-census.** Fig 13 governs the substrate; the numeric law is a world import. Different objects. Matches the README's rule that a reading making figures contradict one another has misidentified its domain. |

### One-paragraph canonical summary

The figures cannot settle how universal the Landauer relationship is, because they do not contain it. What they decide is the shape any answer must have: the relationship is a priced bond between two currencies that do not add, so it is a floor rather than an equality; it is universal only inside a named substrate, because its derivation needs configurations to count, a finite region, and a direction to spend; in real noise it is a per-slot quantity whose average approaches the floor only under the reversible limit; and the universality question is a union that must be unbundled before it is searched. Numeric constants, finite-time corrections and quantum-specific bounds are `gap` for the figures and enter only as provenanced world corroboration. The stop is recorded rather than hidden, because unreachable is a verdict, not a silence.

### Updated verdict

The shape survives with its mode attached. The refusal of the universal-equality reading stands, because it is the form the figures govern. Strains after re-census: **none hidden**; two corrections are recorded above (the bits-to-joules mapping and the quantum-coherence overreach), and the union re-census is recorded as a change of form rather than a correction.
