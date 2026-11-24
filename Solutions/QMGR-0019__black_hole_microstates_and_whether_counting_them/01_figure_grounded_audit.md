# Figure-grounded audit: black hole microstates and the Bekenstein-Hawking count

**Mode of this document: `specified` on the physics-facing claims, `general` on the structural shape, `gap` on the identification of microstates for a non-supersymmetric black hole. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (opened 2026-11-23) says LLM output can *"simulate an approximate answer/output"* but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** Local framework primaries: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (all `Fig N :line` citations), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the Operators and Symbols tables. World sources actually opened 2026-11-23 are listed in `10_source_ledger.csv` and used in `09_watson_answer.md`.

---

## 0. The residual, stated in effect terms

The question puts two readings of one number side by side.

1. **Geometric reading.** Combine classical gravity with thermodynamics. Horizon area `A` plays the role of entropy and surface gravity plays the role of temperature. Hawking fixed the constant: `S_BH = k_B A / (4 ℓ_P²)`. The Wikipedia *Black hole thermodynamics* page (opened 2026-11-23) states the formula and records that *"There is no known way to verify black hole thermodynamics; it is the most widely accepted physical model that combines general relativity, quantum field theory, and thermodynamics, though Hawking's area law has already been tested by analyzing gravitational waves."*
2. **Microscopic reading.** Pick a candidate quantum theory, enumerate distinguishable states consistent with the same macrostate, and take `S_stat = k_B log Ω`. The Strominger-Vafa abstract (opened 2026-11-23) states: *"The Bekenstein-Hawking area-entropy relation S_BH=A/4 is derived for a class of five-dimensional extremal black holes in string theory by counting the degeneracy of BPS soliton bound states."*

**Effect of each option.** Option A (yes, counting reproduces the entropy): the area law becomes a count, the counted states become candidates for the microscopic degrees of freedom, and the result can be composed over, since Fig 13 :106 says *"Nothing composes over what was never admitted as a part."* Option B (the match is confined to a protected class, or was fitted): the equality is a retrodiction, the general microscopic origin is unnamed, and the count is a filter for the budget rather than a witness for the verdict (Fig 9 :60).

**The residual is not the arithmetic.** The leading-order match in the protected sector is real and published. The residual is the *provenance* of the match: did two low-overlap frames reach one atom by convergent derivation, which would make the agreement corroboration at maximum independence, or was the counting frame constructed so that `log Ω` returns `A/4`, which would make it an adopted import? Fig 8 :50-52: *"Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence. Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."*

**Bind the sought-for shape as an ordinary term before running.** The answer would look like: a count over distinguishable states, derived inside a closure that differs from the semiclassical one, that returns area scaling without a parameter chosen by demanding area scaling, and that survives removal of the protecting symmetry. Writing that down first makes the preference refusable later, per `THE_FORMULA.md` "Direction": a frame *"cannot check the direction of its own question, because the shape a frame is searching for is not a term it holds."*

---

## 1. Domain census (before any figure line is chosen)

### 1.1 The residual R by arity, symmetry and scale

- **Arity: two readings of one quantity.** Area-derived entropy and state-count entropy. The equality is a comparison between two quantities, not an identity; see F7.
- **Symmetry: the equation is symmetric, the derivation is ordered.** `S_stat = S_BH` can be written either way round, but the area is the anchor in the geometric frame and the count is derived in the microscopic frame and then compared. Reversing the order (choose the frame first, then look for a count) is the apophenia Fig 9 :27-28 warns against: *"describe it before you go looking, or any frame you pick will seem to fit."*
- **Scale: micro to macro, with a cross-scale round trip.** The count lives at the quantum-horizon scale, the area at the macroscopic horizon scale. Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

### 1.2 One line per domain (actors / currency / anchor)

| domain | actors | currency | anchor | no anchor? |
|---|---|---|---|---|
| D1 Thermodynamic-geometric frame | horizon area, surface gravity, the four laws, the generalized second law | area increments, stationarity | the horizon area itself, a non-updating geometric quantity, now tested in gravitational waves | has anchor |
| D2 Microscopic counting frames | BPS bound states, D-branes, CFT states (string frame); horizon punctures and spin networks (loop frame); degeneracy Ω | count of distinguishable states, protected by supersymmetry or by quantum horizon geometry | the enumeration inside the frame, plus the protection that makes it non-renormalized | has anchor |
| D3 Comparison / identification frame | the two numbers, the provenance record, the extrapolation to unprotected black holes | agreement or refusal at the ground | the ground: a measurable discriminator, or failing that the record of whether the count was independently derived | has anchor, but only reached for a protected sector |

All three domains have a nameable anchor, so all three are domains. D2 splits into two low-overlap closures (string and loop), which are handled as two witnesses inside one domain, never merged into one number.

### 1.3 Partition or union

**Union, not partition.** The question bundles two conditions:

- **C1 reproduction:** does a count exist that returns `A/4`?
- **C2 identification:** are the counted states the degrees of freedom of a general black hole?

C1 is met for extremal and near-extremal supersymmetric black holes. C2 is not characterized for the Schwarzschild hole; the Wikipedia *Black hole thermodynamics* page states: *"for the Schwarzschild black hole, viewed as the furthest-from-extremal black hole, the relationship between micro- and macrostates has not been characterized."* One lever (more counting in the protected class) clears C1 and leaves C2 standing. Fig 9 :55-57: a bundled problem is *"a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."* The residue is *"categorically different: a case in two conditions is not a harder case of either."*

### 1.4 Dependency order (Fig 3)

Fig 3 :19-20: *"Optimising a link that already works cannot rescue one that does not. The chain is ordered by dependency, not by importance."*

1. Vocabulary: what counts as a distinguishable microstate? (string frame: BPS degeneracy; loop frame: horizon punctures). This link works in both frames.
2. Objective: what would count as a failure of the match? (a parameter fitted to the area law; failure outside the protected sector; a forward prediction that misses). **This is the weak link in the literature as summarized by the sources opened.** Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*
3. Comparison: `S_stat` versus `S_BH` at a threshold.
4. Settlement: a discriminator, or the honest record that none exists yet.

Effort spent at step 3 cannot rescue a missing step 2.

---

## 2. Figure census: verbatim lines quoted before conclusions

### F1. The ground and the anchor (governs D1 and D3)

Fig 2 :29-30:

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."**

Fig 2 :23:

> **"The ground enters as the only metric."**

The horizon area is the anchor for the magnitude of `S_BH`. It does not move when a theorist changes frames. The count in D2 is not an anchor for the *identification* question, because it is produced inside a frame that wants the match; it becomes evidence only when its provenance shows it was derived before comparison. Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."* Verdict for D1: `specified`, triangulated (area law plus gravitational-wave area-law test reported in the opened Wikipedia page). Verdict for the identification part of D3: `gap`, not silence (Fig 13 :134).

### F2. The residual must stay indexed, not averaged (governs the shape of the answer)

Fig 1 :19:

> **"The residual is indexed by object slot, not aggregated."**

Fig 1 :22:

> **"Aggregating across slots is how a live signal disappears into an average."**

The "does it reproduce" question must be asked per black-hole class (extremal BPS, near-extremal, Schwarzschild, rotating, charged), not folded into a single global "string theory reproduces black hole entropy." The live slot is precisely the unprotected class where the match has not been characterized. A global "yes" throws away the only signal that says where to look. Mode: `general` structural, applied `specified` per class.

### F3. Convergence versus adopted import is the whole issue (governs D3, decisive)

Fig 8 :50-52, quoted in full above:

> **"Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence. Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."**

Fig 2 :31-32:

> **"Independence, between two frames, is how little they draw on the same evidence."**

The string count (D-branes, BPS degeneracy, supersymmetry protection) and the loop count (horizon quantum geometry) are low-overlap closures. If each returns area scaling from its own instruments, their agreement is convergence: two instruments pointed at one thing, not two people reading one report. But Fig 8 :51 is explicit that the *contents* cannot tell convergence from adoption. The Strominger-Vafa derivation was published as a derivation, with its own dates and machinery (arXiv submitted 1996-01-09, v2 1996-02-15); that record is what lets a reader call it convergent. A counting whose parameter is chosen to force `A/4` would carry the same contents and a different record, and would be an adopted import. Verdict: `specified`, triangulated across Fig 8 and Fig 2, with the provenance condition stated as a refuter (section 3).

### F4. The framework's own census already names this case, with a caveat (governs the extrapolation)

Fig 8 :56-57:

> **"The triangulation claim fits four cases already known and has not been tested forward: Wiles and Frey, Montgomery and Dyson, Bekenstein and holography, the relativization barriers in complexity theory."**

This is the single most directly relevant figure line in the folder. It records *"Bekenstein and holography"* as one of four known triangulation cases, and it immediately adds *"has not been tested forward."* So the area-law/holography convergence is a **known case, a retrodiction**, not a forward prediction this framework generated. It governs the thermodynamic frame and the holographic extrapolation (the opened Wikipedia *Holographic principle* page: *"The holographic principle was inspired by the Bekenstein bound of black hole thermodynamics"*). It does **not** certify microstate enumeration for general black holes. My first pass read this line as a blanket endorsement of counting; that overstatement is retracted in section 6 and kept visible.

### F5. A count that explains one occasion perfectly fails the bargain (governs C2)

Fig 5 :43-44:

> **"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before. A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."**

The Strominger-Vafa result was not left as one occasion: the opened Wikipedia *Black hole thermodynamics* page records that *"Their calculation was followed by many similar computations of entropy of large classes of other extremal and near-extremal black holes, and the result always agreed with the Bekenstein-Hawking formula."* So the bargain is paid across a large protected class, not one occasion. The failure begins at the boundary of that class: the same page says the Schwarzschild microstate/macrostate relation *"has not been characterized."* A claim of *general* microscopic origin that extrapolates from the protected class without a new instrument reintroduces the one-occasion failure. Verdict: `specified` for the protected class; `gap` for the general case.

### F6. Overcounting is a bond-symmetry error, not a bigger space (governs the act of counting)

Fig 12 :92-93:

> **"Symmetry is what decides whether an arrangement is a new thing. Under a symmetric bond, k operands have k! spellings and one term, so a code that charges for the sequence overcharges by log₂(k!) while the bond term undercharges. Both wrong, in opposite directions, and only one is usually noticed."**

Fig 12 :94:

> **"The arrangement is the substance."**

Counting microstates is a bond-symmetry problem. Configurations related by a gauge equivalence are k! spellings of one term; counting them as distinct overcharges by `log₂(k!)`, and the error is logarithmic in the number of available bonds, exactly the currency `log Ω` is expressed in. The opened Wikipedia *Entropy (statistical thermodynamics)* page independently warns that *"Neglecting correlations (or, more generally, statistical dependencies) between the states of individual particles will lead to an incorrect probability distribution on the microstates and hence to an overestimate of the entropy,"* and that coarse graining makes the count *"defined only up to an additive constant."* A microstate count that reproduces `A/4` has already solved a symmetry-identification problem, whether or not the paper describes it that way. This is a figure-derived shape constraint on any successful count: it must quotient spellings into terms. Mode: `general` structural; `specified` when applied to a named ensemble. Triangulated (Fig 12 plus the statistical-mechanics source, low overlap).

### F7. The match is a comparison, not an identity (governs the wording of the answer)

Fig 12 :87 (Operators table, comparison ⋛) defines the bond as:

> **"a threshold relation between two quantities"**

The Operators table gives the test: *"is it about which is larger, rather than both being present? Yes."* Identity is a different bond, *"two names, one referent,"* with the test *"substitute one for the other. Is anything lost? No."* Substituting the statistical reading for the geometric one loses something: the geometric reading says nothing about degrees of freedom, and the statistical reading says nothing about horizon area until the count is supplied. So `S_stat` and `S_BH` compare equal in a domain; they are not the same term under identity. Fig 12 :112: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."* The question "does counting reproduce the entropy" is a comparison with a threshold, to be settled by the ground, not a definitional identity. Verdict: `general`, single-source for the bond definition, kept single-source.

### F8. No instrument, no closure; unreachable is a verdict (governs the honest stop)

Fig 6 :32-34:

> **"An instrument is not built from a description. It is improved from a worse instrument already returning something."**

> **"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."**

Fig 8 :39:

> **"So a search that finds nothing is never a proof of absence."**

Fig 13 :134-135:

> **"Unreachable is a verdict here, not a silence,"** and **"It cannot say which primitive is missing, because naming it would mean already holding it."**

For the Schwarzschild case there is a proto-instrument (stationarity and horizon area are already returning readings), so the search for a microstate discriminator is not ruled out by Fig 6 :34. It is **unreached at this budget**, not underivable in principle. The honest report is `gap` with the shape of the missing discriminator stated, not an invented name for the states and not silence.

### F9. A verifier that can reconstruct the claim cannot verify it (governs outreach)

Fig 10 :42:

> **"A verifier that can reconstruct the claim cannot verify it."**

Fig 10 :52:

> **"Bring a characterised residual, never the source."**

A recipient who is taught the full framework before being asked for a verdict has joined the frame being checked. The two-stage offer in `02_outreach_email.md` therefore sends the residual, the shape claim and the refuter first, and records the verdict before any source link is offered. Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*

### F10. The shape, not the name (governs what the framework may assert)

Fig 9 :32:

> **"you get a kind of thing, never the answer itself"**

The canonical figures README (local copy, opened this session) states the limit as *"what a missing thing would have to look like (a shape, not a name)."* Fig 13 :134-135 adds that the framework *"can report that it lacks something rather than producing an answer anyway"* and *"cannot say which primitive is missing."* So the Tether can state the shape a successful microstate account must have (F2, F6) and the provenance it must carry (F3). It cannot name D-branes, punctures, or fuzzballs as *the* answer by derivation. Those names are bindings from the physics frame, recorded as such. **Correction to my own first pass:** I initially read this as a ban on naming any microstate at all. That is an overstatement; "shape, not a name" governs a primitive not held in Γ, not a binding onto atoms already held. The correction is kept visible in `05_what_shape_means.md` section 5b and `06_isomers_and_order.md` Q1.

### Findings summary

| # | governs | verdict | mode | status |
|---|---|---|---|---|
| F1 | D1 anchor, D3 identification limit | area is the anchor; identification needs provenance | specified / gap | triangulated (Fig 2 + opened physics source) |
| F2 | per-class asking | residual per black-hole class | general | triangulated (Fig 1 :19, :22) |
| F3 | convergence vs import | the equality is evidence only with a derivation record | specified | triangulated (Fig 8, Fig 2, low overlap) |
| F4 | extrapolation | Bekenstein/holography is a known case, not tested forward | specified | single-source figure line, world corroboration |
| F5 | protected vs general class | match paid in protected class; general case open | specified / gap | triangulated (Fig 5 + opened physics source) |
| F6 | the act of counting | count must quotient symmetric spellings | general | triangulated (Fig 12 + statistical-mechanics source) |
| F7 | wording | comparison, not identity | general | single-source, kept single-source |
| F8 | honest stop | unreached at this budget, not unreachable | specified | triangulated (Fig 6, Fig 8, Fig 13) |
| F9 | outreach order | verdict before theory | general | triangulated (Fig 10, Fig 2) |
| F10 | naming | shape, not a name; binding allowed with provenance | general | triangulated (Fig 9 + README), correction visible |

---

## 3. Pre-registered refuter (written before the conclusion)

Required by the discipline that a falsifier written before the run is a design instrument. Each condition is checkable without accepting the framework.

1. **Fitted-count refuter.** If a count returns `A/4` only after a parameter or normalization is chosen by demanding `A/4`, it is an adopted import, not convergent derivation (Fig 8 :50-52, finding F3), and the reproduction verdict drops to circular. The count may still be useful; it stops being a witness.
2. **One-class refuter.** If the count cannot be extended beyond its protecting symmetry to a non-extremal black hole, the general identification claim fails the MDL bargain (F5, Fig 5 :43-44) and only the protected-sector claim survives.
3. **Shared-pool refuter.** If the string and loop counts can be shown to draw on the same evidence (for example, both fix their normalization from the semiclassical area law), they are one witness, not two (Fig 2 :40), and the triangulation status in D2 is withdrawn.
4. **Forward-prediction refuter.** If the counted microstates yield a definite prediction at a discriminator (a finite-coupling correction to `A/4`, a specific radiation correlator, a horizon structure observable in principle) and that prediction fails, the match breaks at the ground (Fig 2 :29).
5. **Substrate refuter.** If one of the six terms of Fig 13 can be derived from the other five, or a state-state or structure-structure composition with no intervening opposite-kind term must be admitted and cannot be refused, the framework used to derive the shape is wrong (Fig 13 :75, *"Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state."*).

If any fires, the affected claim is withdrawn and the retraction is recorded here rather than silently erased. Until a discriminator is run, nothing in this folder is `grounded`.

---

## 4. Verdicts per domain (separate, never averaged)

- **D1, thermodynamic-geometric.** `specified`, triangulated. The area law is an anchor for magnitude. It is not a microstate measurement. The opened Wikipedia page reports gravitational-wave evidence for Hawking's area theorem, so the geometric side is the best-grounded part of the question. It does not by itself answer the microstate question.
- **D2, microscopic counting frames.** `specified`, triangulated across two low-overlap closures for area *proportionality* (string BPS count, loop horizon count), single-source for the exact coefficient from each abstract I opened. The exact coefficient question inside the loop frame is not settled from the material I read and is explicitly left open rather than assumed. Convergence is corroboration at maximum independence only if the derivation records are independent (F3, refuter 3).
- **D3, comparison and identification.** `specified` for the protected sector; `gap` for the general identification. The equality is a comparison (⋛), not an identity (F7), and it is a retrodiction, not a forward prediction (F4). The framework returns the shape a successful account must have and refuses to name the states by derivation (F10). `gap` is a verdict, not silence (F8).

**No overall average.** A global "yes, counting reproduces black hole entropy" would aggregate a settled protected-sector result with an unprotected-sector gap, exactly the aggregation Fig 1 :22 disqualifies.

---

## 5. Recommendation

1. Answer at the resolution the evidence supports: yes for extremal and near-extremal supersymmetric black holes under a provenanced derivation, open for the Schwarzschild case. Keep the two verdicts separate.
2. Lead with the comparison and its refuter, not with a name of the microstates. *"you get a kind of thing, never the answer itself"* (Fig 9 :32).
3. State the provenance of any count before treating its agreement as corroboration (Fig 8 :50-52). Convergence and adoption are indistinguishable in the contents.
4. Treat the count as a symmetry-identification problem: quotient spellings into terms before comparing `log Ω` to `A/4` (Fig 12 :92).
5. Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."* Send the derivation and the refuter, not a list of papers that all cite the same result. Many papers reporting one result are one witness wearing many names (Fig 7 :13, *"agreement compounds, evidence does not"*).

---

## 6. Canonical usage check and retraction / confirmation log

Two framework sources were read after the first four sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* The canonical limit is a shape, not a name, and the record of the route is what keeps the stop checkable: *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: the eight-step loop, the mode rule, and the direction rule. Step 7 asks SEARCHED first, then INWARD, then OUTWARD, and keeps them distinct.

| earlier reading in this audit | status after the check | reason |
|---|---|---|
| F4 read as "the framework confirms microstate counting" | **Retracted as overreach.** Now: the framework records the Bekenstein/holography triangulation as a known case and says it *"has not been tested forward."* | Fig 8 :56-57 names the case and the caveat in one sentence. |
| "string and loop counts are isomers" (first pass in `06`) | **Narrowed and kept with a falsifier.** Now: convergent derivation to one atom (area) by default; isomer only over a stipulated shared atom set. | Different atom sets (D-branes versus spin networks) violate Fig 12 :117's "same atoms" condition unless a shared set is stipulated. |
| "no figure line governs the count" (first pass before the census) | **Retracted.** Fig 12 :92 (bond symmetry), Fig 5 :43-44 (one-occasion bargain), Fig 8 :50-52 (provenance), Fig 9 :60 (filters) all govern. | The census was incomplete, not the figures silent. |
| "shape, not a name forbids naming D-branes" | **Corrected, not erased.** It governs a missing primitive. Naming a binding onto held atoms is provenance, not an invented seventh term and not a wall-moving import (Fig 6 :22 *"NOVEL means novel relative to atoms, not to the world."*). | Same correction the exemplar records in `05` section 5b. |
| F1 anchor reading | **Confirmed.** The area is the non-updating anchor for magnitude; agreement is not an anchor for identification. | Fig 2 :29-30, :35. |
| F2 per-class reading | **Confirmed.** The live slot is the unprotected class. | Fig 1 :19, :22. |
| F7 comparison-not-identity | **Confirmed and kept single-source.** The bond definition is framework-internal; the physics check is not claimed. | Operators table, Fig 12 :87. |
| Apparent strain Fig 8 :56 (known case) vs the opened physics pages (general case open) | **Not strained after re-census.** Fig 8 governs the area-law/holography triangulation; the physics pages govern microstate enumeration outside the protected class. Different objects. | Canonical re-census rule. |
| Apparent strain Fig 12 :117 (isomer) vs two counts reaching one atom | **Dissolved by re-census.** Different atom sets mean convergent derivation, not isomerism over a fixed set. | Fig 8 :50. |

**Strains remaining live, named not hidden:** (S1) whether the exact coefficient `1/4` is derived or normalized inside the loop frame, unresolved from the abstracts read; (S2) whether a forward discriminator at the unprotected scale is buildable, unresolved and reported as unreached, not impossible; (S3) the comparison ⋛ is defined over quantities at a level, and whether two entropies from different closures count as quantities at one level needs an instrument, not an argument.

---

## 7. Round-trip gap R_T (qualitative)

`THE_FORMULA.md` step 6 defines `R_T = gap(x, (T_E ∘ T_A)(x))`. Fig 4 :30 requires it to be measured rather than assumed zero. The condensation used in outreach is "string theory counted the microstates and got A/4." Running the round trip:

1. **Sent up:** the verbatim figure set (Fig 8 :50-52, :56-57; Fig 12 :92; Fig 5 :43-44; Fig 2 :29) plus the opened physics abstracts.
2. **Abstraction:** "a count over distinguishable states can reproduce horizon area scaling, if its derivation is independent."
3. **Concretisation:** "black hole microstates have been counted and equal A/4."

Three constraints drop across the trip: the **provenance condition** (convergent versus adopted import), the **class restriction** (protected versus general), and the **bond-symmetry condition** (quotient spellings into terms). One thing survives cleanly: area scaling from an independent count is genuine corroboration when the derivation record is independent. `R_T` is therefore nonzero. It was not measured numerically, because no discriminator reading was taken. `11_audit.md` checks this enumeration independently.

---

## 8. The honest stop

The answer stops where the instruments stop. A source-discriminating instrument for the unprotected sector, or an independent derivation record showing the count was not fitted, would move the verdict. Prestige, citation counts, and agreement among readers who all read the same review are not such instruments (Fig 2 :40; Fig 7 :13). *"Unreachable is a verdict here, not a silence"* (Fig 13 :134). Nothing here is `grounded`, and this simulated derivation cannot settle the question it reports on.
