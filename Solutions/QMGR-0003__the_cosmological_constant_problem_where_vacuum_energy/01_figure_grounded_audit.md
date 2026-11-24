# Figure-grounded audit: the cosmological constant problem

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap* (Isaiah N, Adventures in Machine Learning, 2026-11-19): *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post."* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Figures 1 to 13 plus the Operators and Symbols tables, quoted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session. The eight essays, the figures README, `THE_FORMULA.md`, and `60_FIGURES_AS_METALAWS.md`. World sources are listed in `10_source_ledger.csv` and were all opened.

---

## 0. The residual, stated in effect terms

Let `R = |Γ(b,a) − o′|` per slot `s` (Symbols table :36 to :44).

- **Γ (the prediction).** The quantum field theory frame holds a field as a collection of oscillators in momentum space. Per Carroll (Living Reviews in Relativity, 2001): *"A (free) quantum field can be thought of as a collection of an infinite number of harmonic oscillators in momentum space. Formally, the zero-point energy of such an infinite collection will be infinite."* With a cutoff `k_max` the frame returns `ρ_vac ~ k_max^4`. If the theory is trusted to the Planck scale, this is of order `10^76 GeV^4`.
- **o′ (the observation).** The cosmological frame reads the expansion history `H(a)` and returns an effective vacuum density of order `(2 meV)^4`, about `10^-47 GeV^4`. Padmanabhan (Phys. Rept. 380, 2003) writes the same bound as *"Λ L_P^2 ≲ 10^-123"*.
- **R.** The discrepancy is about `10^120` in energy density. Weinberg (Rev. Mod. Phys. 61, 1, 1989) states it in effect terms: *"which is larger than is observationally allowed by some 120 orders of magnitude. Such terms in V can be cancelled by other contributions that we can't calculate, but the cancellation then has to be accurate to 120 decimal places."*

**Arity.** `R` is a binary comparison between two quantities, the comparison bond ⋛ (*"a threshold relation between two quantities"*, Operators table :48 to :51). The prediction side is itself built by a unary summation over many mode slots. So the residual is a comparison whose left operand is an aggregate. That structure is the first thing to census, not the last thing to explain.

**Symmetry.** Both operands are Lorentz invariant: Carroll notes the vacuum stress tensor has *"the only Lorentz-invariant form for Tvacμν"*, which is why it is indistinguishable from a geometric constant. Under the substrate, energy is *"conserved, finite, directionless alone"* (Fig 13 :13 to :14). The symmetry of the problem is one-sided: swapping the two frames is not a symmetry, because their closures differ and one of them has no anchor for the absolute level.

**Scale.** The predicted value is set by the ultraviolet cutoff, about `10^19 GeV`. The observed value is set by the Hubble scale, about `10^-42 GeV` in energy or `10^-123` in Planck units. The residual spans the whole hierarchy from the ultraviolet to the infrared. Any treatment that ignores the scale gap is a reading of the wrong slot.

**What an answer would look like, bound as an ordinary term (formula step "Direction").** An acceptable answer must: (1) index the residual per mode rather than aggregate it; (2) range against an anchor that does not move when a frame changes its cutoff; (3) survive the minimum description length bargain, that is, not explain one occasion perfectly by saying nothing; (4) if it comes from another frame, carry provenance and a shadow test; (5) name a ground that could reverse it. This shape is now a term in the census and can be refused by the same test as everything else.

---

## 1. Domain census before choosing any figure line

One line per domain: actors, currency, anchor. The rule from the plan is applied strictly: no nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| **D1. QFT vacuum frame** | field modes in momentum space, the regulator, the counterterm | zero-point energy `½ℏω` per mode; tuning precision in decimal places | mode energies and vacuum *differences* (Casimir) are measured; the **absolute** level is not anchored inside QFT | domain with partial authority; it can price differences but not the absolute value gravity couples to |
| **D2. Cosmological observation frame** | metric, Λ term, matter density, scale factor, supernovae, CMB, BAO | energy density and curvature; the observable is `H(a)` | the measured expansion history and the inferred `ρ_Λ`; it does not update on what any theorist thinks | full domain, anchor nameable |
| **D3. UV regulator and counterterm (the harness)** | the cutoff `k_max`, the box, the scheme, the bare term | cutoff energy, number of modes retained | **none.** The cutoff is a convention for where to stop trusting the theory, not a measurement | **not a domain yet.** Fig 11 :66 to :70 classifies it as a substituted habitat |
| **D4. Prospective import frame (area counting, holography)** | horizon area, boundary degrees of freedom, black-hole entropy | bits of area instead of volume modes | black-hole entropy bookkeeping is a theoretical deduction, not a measurement of Λ | not a domain yet under the strict anchor test (Fig 2 :29/:30); prospective import with a provenance gate |

**Partition or union.** This is a **union**, not a partition. Fig 9 :54 to :58:

> Fig 9 :54 : "And when the split lands on a union rather than a partition, unbundle before you search again."
> Fig 9 :55 : "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the"
> Fig 9 :56 : "intersections standing, because the second condition still binds."
> Fig 9 :57 : "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific"
> Fig 9 :58 : "compound."

The overlap is **energy**. In D1 energy is a state (mode energy); in D2 the same energy term is bonded to space as a density. Unbundled, the conditions are:

1. Why is the ultraviolet mode sum as large as the cutoff allows? (D1 plus D3, a representation question.)
2. Why does the absolute vacuum level gravitate at all? (contact between D1 and D2.)
3. Why does the observed value have the particular magnitude it has? (D2, an anchor question.)

A lever that lowers the cutoff clears condition 1 and leaves 2 and 3 standing. The residue after any single lever is a specific compound, not a smaller version of the same problem. This matches *The Library of Babel*: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

**Dependency order (Fig 3).** The chain for this question is: perception (measure `H(a)`, reached); vocabulary (zero-point energy, cutoff, counterterm, bare Λ, partly reached); objective (what would count as progress here, in the frame's own terms, **not reached**); planning (SUSY, quintessence, anthropic selection, relaxation mechanisms); learn and carry. The break is at link 3, not link 4. Fig 3 :19 to :23:

> Fig 3 :19 : "Optimising a link that already works cannot rescue one that does not."
> Fig 3 :20 : "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step"
> Fig 3 :21 : "that cannot use it."
> Fig 3 :22 : "A step whose input never arrives cannot be diagnosed, only its predecessor can. Which is why a reading taken below the break is not a weak"
> Fig 3 :23 : "reading. It is a reading of nothing."

And the middle link, Fig 3 :25 to :27:

> Fig 3 :25 : "Perception has obvious failures and obvious tests. Planning has obvious failures and obvious tests. The link between them, having terms for what a"
> Fig 3 :26 : "situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."
> Fig 3 :27 : "A link with no instrument is not a link that works. It is a link nobody has looked at."

The implicit objective has been "naturalness," and it has no instrument. Koberinski, Falck and Smeenk (arXiv:2212.04335, 2023) corroborate from philosophy of science: *"Mere curve fits do not support ongoing inquiry."* They also argue that appeals to naturalness and to probability in the multiverse are not similarly justifiable (paraphrase, not a quote). This is why decades of planning-level proposals have not moved the residual: the objective link above them has no instrument. **Filters such as "natural" and "not fine-tuned" are budget filters, never witnesses.** Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

---

## 2. Figure census, quoted before concluding

Only lines from `03-FIGURES_TEXT.md` are quoted. Each quoted string is a single exact line with its line number.

### Aggregation and slot indexing

> Fig 1 :19 : "The residual is indexed by object slot, not aggregated."
> Fig 1 :22 : "Aggregating across slots is how a live signal disappears into an average."
> Fig 1 :13 : "a global R near zero with one live slot residual is a legal state"
> Fig 1 :23 : "The ground enters as the only metric."
> Fig 1 :27 : "They are frame-internal. A frame cannot score itself with a quantity it also produces."

Symbols table :41 to :44: *"One object, region or entity being tracked. R is measured per slot, never as a single global"* and *"number."*

### The anchor and independence

> Fig 2 :29 : "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when"
> Fig 2 :30 : "you push on it, it is not an anchor."
> Fig 2 :33 : "The anchor must not update."
> Fig 2 :34 : "If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices."
> Fig 2 :35 : "Alignment is triangulation, not negotiation. A mirror cannot correct you."
> Fig 2 :36 : "An anchor is legitimate when the question is constitutively about it."
> Fig 2 :39 : "Correlation has valence."
> Fig 2 :40 : "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"
> Fig 2 :42 : "Buy independence in proportion to the cost of being wrong."

### The bargain, the mint guards and the harness

> Fig 5 :42 : "The acceptance test is a bargain, not a threshold."
> Fig 5 :43 : "A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before. A term that explains everything by saying nothing"
> Fig 5 :44 : "fails this, and so does a term that explains one occasion perfectly."
> Fig 5 :29 : "nothing new here"
> Fig 5 :30 : "the machinery worked; the answer was already known"
> Fig 11 :66 : "Isolation is not removal of the habitat. It is substitution of one habitat for another."
> Fig 11 :68 : "what you failed to reproduce is invisible until the goal fails"
> Fig 11 :70 : "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."

### Closure, import, reachability

> Fig 6 :21 : "MINT composes inside the closure and can never add an atom."
> Fig 6 :22 : "NOVEL means novel relative to atoms, not to the world. IMPORT adds an atom, and the added atom is what expands the closure."
> Fig 6 :23 : "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."
> Fig 6 :24 : "Import from a live peer is debited against that frame's independence. A wrong atom costs more than starting from primitives."
> Fig 6 :27 : "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."
> Fig 6 :34 : "The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve. Where nothing is, there is no edge to"
> Fig 6 :35 : "extend from, and the search for a proto-instrument is a search for one that is already there."

### Union surplus, idempotence, triangulation

> Fig 8 :32 : "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."
> Fig 8 :39 : "So a search that finds nothing is never a proof of absence."
> Fig 8 :40 : "Scope. These prove the metaframe is underivable. They do not prove any particular atom is far away. Underivable-in-principle and unreachable-at-this-budget are"
> Fig 8 :41 : "different facts, and they issue different instructions. Underivable: go outside. Unreachable-at-budget: the term is"
> Fig 8 :42 : "already in the closure and was not found, so the remedy is more search, not another atom. Importing against a budget limit adds an atom"
> Fig 8 :43 : "that was not needed, and Figure 6 prices a wrong atom above starting from primitives."
> Fig 8 :45 : "Two frames together reach what neither reaches alone."
> Fig 8 :50 : "But shared atoms are not the signature. Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."
> Fig 8 :56 : "How to read the claims here. Rules 1 to 3 are proved theorems. The triangulation claim fits four cases already known and has not been tested forward: Wiles and Frey, Montgomery and Dyson, Bekenstein and"
> Fig 8 :57 : "holography, the relativization barriers in complexity theory."

### Leaving, arriving, the ground

> Fig 9 :4 : "First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset,"
> Fig 9 :5 : "are not one hard question but several well-formed ones. Split it rather than search."
> Fig 9 :20 : "→ \"it is not in here\" cannot be proved from inside"
> Fig 9 :26 : "R's own predicates name the habitat that holds φ*"
> Fig 9 :27 : "describe it before you go looking, or"
> Fig 9 :28 : "any frame you pick will seem to fit"
> Fig 9 :32 : "→ you get a kind of thing, never the answer itself"
> Fig 9 :42 : "→ narrowing gets you close, the ground decides"
> Fig 9 :44 : "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."

### Substrate, finiteness, channel, provenance

> Fig 13 :13 : "energy"
> Fig 13 :14 : "conserved, finite, directionless alone"
> Fig 13 :66 : "energy"
> Fig 13 :67 : "second"
> Fig 13 :68 : "finiteness in a finite region is what makes the counting terminate"
> Fig 13 :134 : "So the system can report that it lacks something rather than producing an answer anyway. Unreachable is a verdict here, not a silence,"
> Fig 13 :135 : "It cannot say which primitive is missing, because naming it would mean already holding it."
> Fig 10 :24 : "the ground does not decay, the channel does"
> Fig 10 :25 : "stale percepts, dropped transients,"
> Fig 10 :26 : "saturated metrics, pooled readings"
> Fig 10 :27 : "the output is not a verdict, it is"
> Fig 10 :28 : "you have lost touch"
> Fig 10 :42 : "A verifier that can reconstruct the claim cannot verify it."
> Fig 10 :52 : "Bring a characterised residual, never the source."

### Isomer structure and two currencies

> Fig 12 :95 : "Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is"
> Fig 12 :96 : "carried entirely by the bond."
> Fig 12 :117 : "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
> Fig 12 :125 : "A composition costs in two currencies, and they do not add."
> Fig 12 :126 : "Bits price the description. Actions price finding out whether it holds. They are in different units, so a system holding one accounting cannot compare them"

---

## 3. Findings F1 to F12

### F1 : The 120-order number is an aggregate, and aggregation is the named failure mode

**Mode: `general` (structural). Triangulated** (Fig 1 :19/:22 and Fig 2 :29/:30 are different figures with low overlap: one governs internal residual bookkeeping, the other governs what may settle a question).

Fig 1 :19 and :22 govern directly. The QFT prediction is formed by summing the zero-point energy of each momentum mode. The observed value is compared to the *total*. By Fig 1 :19 the residual is indexed by slot; by Fig 1 :22 aggregation is exactly how a live signal disappears into an average. The 10^120 figure therefore tells us that **at least one mode slot carries a residual the total has hidden**, not that all 10^120 orders are one unexplained number.

Fig 1 :13 adds that a global residual near zero with one live slot residual is a legal state. The smallness of the observed Λ is not evidence that each mode's contribution is small. This is the reverse of the usual reading and it follows from the figure without any physics assumption.

**Refuter:** a per-mode treatment whose residuals each vanish against the observed value without a counterterm fitted to that value would defeat this. Written before the conclusion.

### F2 : The QFT frame has no anchor for the absolute level

**Mode: `specified`, ungrounded. Single-source** for the anchor test (Fig 2 :29/:30), corroborated at the world level by Carroll, who notes that in the absence of gravity the vacuum energy is arbitrary and *"is traditionally discarded (by a process known as normal-ordering)"*, and that *"gravity does exist, and the actual value of the vacuum energy has important consequences."*

D1 can anchor *differences* of vacuum energy. It cannot anchor the absolute level, because shifting the zero is unobservable without gravity. Gravity couples to the absolute level, which is D2's anchor. The residual is therefore generated at a **contact between two frames with different anchors**, which is the situation Fig 2 :33/:34 warns about: if the QFT frame's cutoff is allowed to update the observed value, the anchor becomes another frame and the drift is coherent.

**Refuter:** an internal QFT measurement that fixes the absolute vacuum zero without reference to gravity would collapse D1 and D2 into one frame and defeat this finding.

### F3 : The harness is not a domain and cannot settle anything

**Mode: `general`. Triangulated** (Fig 11 :70 governs the harness; Fig 6 :34/:35 governs the instrument edge; different figures, low overlap).

D3 (cutoff, box, counterterm) has no nameable anchor. Fig 11 :70: *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."* The `k_max^4` calculation proves the wiring of the regulated theory. It does not prove a capability to predict the observed value. Fig 5 :29/:30 names the same state from inside the mint pipeline: *"nothing new here / the machinery worked; the answer was already known."*

This is also why the "120 orders" is a report about frames, not a report about nature. It is a `grounded` measurement *of the calculation*, and a `candidate` claim *about the world*.

**Refuter:** show that the cutoff choice is itself settled by a measurement rather than by convention, and D3 acquires an anchor and becomes a domain.

### F4 : The break is at the objective link, not the planning link

**Mode: `specified`. Triangulated** (Fig 3 :19/:26 and Fig 9 :60: one governs chain dependency, the other governs filter versus witness; low overlap).

Every proposed solution (supersymmetry, quintessence, relaxation, anthropic selection, holography) is planning-level work. Fig 3 :20/:21 says effort above the break arrives at a step that cannot use it. Fig 3 :26 says the link from vocabulary to "what would count as progress" has neither obvious failures nor obvious tests. The history confirms it: O'Raifeartaigh, O'Keeffe, Nahm and Mitton (EPJ H, 2017) describe *"the marginalization of the term following the discovery of cosmic expansion"* and its later *"re-emergence"* as a sequence of convenience-driven reinstatements, not a converged objective. Koberinski, Falck and Smeenk call naturalness *"not similarly justifiable."*

**Refuter:** an operational, instrument-backed criterion for progress on Λ that all parties can apply would move the break from link 3 to link 4 and defeat this finding.

### F5 : A counterterm fitted to the observed value fails the bargain

**Mode: `general`. Single-source** for the figure line (Fig 5 :43/:44), corroborated by philosophy of science (Koberinski et al.: *"Mere curve fits do not support ongoing inquiry."*).

Fig 5 :43/:44: a term that *"explains everything by saying nothing"* and *"a term that explains one occasion perfectly"* both fail the acceptance test. A bare Λ chosen so that `Λ_eff` equals the measured value is exactly the second case. Padmanabhan's words are precise: *"This requires Λ and V(ϕ_min) to be fine tuned to an enormous accuracy"*, and *"It is really of no help to set Vmin=0 by hand."*

This is a structural refusal, not a claim that renormalization is wrong. Renormalization is a legitimate procedure inside D1. What is refused is promoting the fitted constant to an explanation of the residual.

**Refuter:** a counterterm rule that predicts the value before measurement, with no degree of freedom fitted to it, would pass the bargain and defeat this.

### F6 : The divergence is a counting problem, not yet a verdict about nature

**Mode: `specified`, extrapolated. Single-source** (Fig 13 :14 and :68), with the extrapolation flagged.

Fig 13 :14 says energy is *"conserved, finite, directionless alone"*; Fig 13 :68 says *"finiteness in a finite region is what makes the counting terminate."* The regulated calculation terminates its counting by imposing a cutoff, which is the representation-level analogue of that substrate rule. Carroll: *"Formally, the zero-point energy of such an infinite collection will be infinite"*, and with a cutoff *"This answer could have been guessed by dimensional analysis."*

**Strain test applied here:** reading Fig 13 :14/:68 as forbidding a continuum calculation strains. Re-census: the line governs the substrate term *energy* and what makes counting terminate in the derivation of the laws; it does not adjudicate regulator schemes. Marked `specified`, not `general`, and not used as a verdict on any particular calculation. If a reader wants to refute it: exhibit a finite-region energy count that legitimately fails to terminate under the substrate rule.

### F7 : The continuum line governs a primitive question, not this calculation

**Mode: `general`. Re-census result, no verdict on Λ.**

Fig 13 :43/:44: *"A continuum was the seventh and was removed for failing exactly this: it is a spectrum without gaps, or"* and *"smoothness over space and time. A generating set must not contain what its own members produce."* Fig 13 :124: *"Smoothness, symmetry, chaos and discreteness are each what a particular composition leaves behind, and none is a seventh member."*

It is tempting to say the divergence arises because the calculation uses a continuum the framework removed. That is a strain. Re-census: the continuum line governs what counts as a **primitive**, not whether a derived continuum may be used in a calculation. The framework says a continuum is a composition, not a member of the minimum set. It does not say derived continua are invalid. So this line is recorded, its proper object is named, and it is **not** used to close the residual.

### F8 : The problem is a union compound, and the split must precede the search

**Mode: `general`. Triangulated** (Fig 9 :54/:58 and *The Library of Babel* essay, different frames with low overlap).

Fig 9 :4/:5 and :54/:58 govern. The overlap is energy; the three conditions are listed in the census. A single lever clears at most one. This is why "solving the cosmological constant problem" has the shape of a family of problems and not a single theorem. Fig 9 :32: *"→ you get a kind of thing, never the answer itself."*

**Refuter:** a single parameter change that sets the observed value, makes the mode sum vanish, and explains why it gravitates, all at once, would make the union reading unnecessary.

### F9 : Reachability: unreachable at this budget, not proved underivable

**Mode: `specified`. Triangulated** (Fig 8 :39/:40 and Fig 6 :27; different figures, low overlap).

Fig 6 :27 says depth and genuine absence look the same from inside. Fig 8 :39 says a search that finds nothing is never a proof of absence. Fig 8 :40/:42 distinguishes underivable-in-principle from unreachable-at-budget and issues different instructions. Fig 9 :20: *"→ \"it is not in here\" cannot be proved from inside."*

**Verdict:** within the closure held by D1, D2 and D3, the mechanism that sets the absolute vacuum level is **unreachable at this budget**. It is **not** declared underivable in principle, because no frame inside can prove that. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and :135: *"It cannot say which primitive is missing, because naming it would mean already holding it."*

**Refuter:** derive the observed scale from inside D1's closure with no import and no fit, and this verdict is refuted (it was depth, not absence).

### F10 : The legitimate wall-moving move is a provenanced import, and its shape is area counting

**Mode: `specified`, candidate. Single-source** for the figure case list (Fig 8 :56/:57), corroborated at the world level by 't Hooft (arXiv:gr-qc/9310026, 1993) and by Fig 6 :23.

Fig 6 :21/:22: minting cannot add an atom; only import expands the closure. Fig 8 :45: *"Two frames together reach what neither reaches alone."* Fig 8 :56/:57 names *"Bekenstein and holography"* as one of four known triangulation cases, with the explicit limit *"has not been tested forward."*

The prospective import has a definite shape: count degrees of freedom by boundary area rather than volume. 't Hooft: *"the observable degrees of freedom can best be described as if they were Boolean variables defined on a two-dimensional lattice, evolving with time"*, and *"This observation, deduced from not much more than unitarity, entropy and counting arguments, implies severe restrictions on possible models of quantum gravity."*

Source gate and shadow test are required (Fig 6 :12/:13, Fig 8 :50). The shadow it explains is the volume overcount. **It is a prospective import, not a verdict**, and it carries no claim about the observed number itself. Under the strict anchor test (Fig 2 :29/:30) it is not yet a domain.

**Refuter:** show that area counting does not change the mode count relevant to the absolute vacuum level, or that its provenance is a shared evidence pool with D1 (Fig 8 :48/:49), and the import is withdrawn. Second-seat correction, 11 §3: under the strict anchor test (Fig 2 :29/:30) D4 is not a domain yet, so this is a prospective import with a shape claim, not triangulation with a held frame.

### F11 : The observed value is an anchor and settles the number but not the mechanism

**Mode: `specified`. Triangulated** (Fig 2 :36 and Fig 9 :42; different figures, low overlap).

Fig 2 :36: *"An anchor is legitimate when the question is constitutively about it."* The question is constitutively about the measured vacuum density, so D2 is a legitimate anchor. Fig 9 :42: *"→ narrowing gets you close, the ground decides."* The ground settles the magnitude. It does not settle why that magnitude. Carroll: *"the question of why the observed vacuum energy is so small in comparison to the scales of particle physics has become a celebrated puzzle."*

**Refuter:** a measurement that changes the inferred `ρ_Λ` when the theorist changes the cutoff would make the anchor update, which Fig 2 :33/:34 forbids for a legitimate anchor.

### F12 : Two currencies are being added as one

**Mode: `general`. Single-source** (Fig 12 :125/:126), corroborated by Friederich (SEP, 2026): *"(Depending on the specific assumptions made, the discrepancy is between 10^50 and 10^123.)"*

Fig 12 :125/:126: *"A composition costs in two currencies, and they do not add."* Bits price the description; actions price finding out whether it holds. The 120 orders is a statement in **bits** (the precision of a tuning, the length of a description). The settlement requires **actions** (an observation that discriminates sources). The fine-tuning literature routinely sums them into one "naturalness" score. Fig 12 :129 warns that *"Neither figure predicts the other, so both are read or the choice is made blind"*, and :130: *"Summing them into one figure is the error this names, not the fix for it."*

**Refuter:** a single measure that prices both description length and ground-settling actions in one unit without loss, and demonstrably predicts the other, would defeat this.

---

## 4. Per-domain verdicts, kept separate and never averaged

| domain | verdict | mode | status | ground line |
|---|---|---|---|---|
| D1 QFT vacuum frame | live per-slot residual hidden by summation; no anchor for the absolute level | `general` for slot indexing, `specified` for anchor scope | **triangulated** (Fig 1 + Fig 2) | per-mode measurement of vacuum differences; no absolute reading |
| D2 cosmological frame | legitimate anchor; settles magnitude, not mechanism | `specified` | **triangulated** (Fig 2 + Fig 9) | expansion history `H(a)` |
| D3 regulator harness | not a domain yet; substituted habitat; returns wiring, not capability | `general` | **triangulated** (Fig 11 + Fig 6) | none; cannot settle |
| D4 area-counting import | prospective import with provenance gate; not a domain yet under the strict anchor test; shadow = volume overcount | `specified` | **single-source** in figures (Fig 8 :56/:57), world corroboration from 't Hooft | none yet; black-hole entropy bookkeeping is not a Λ measurement |
| **Whole question** | **union compound; break at Fig 3 link 3; mechanism unreachable at this budget; `gap` on the mechanism** | `specified` | shape triangulated, mechanism **gap** | an instrument that discriminates sources |

No verdict above was averaged with another. The small observed value does not dilute the large predicted value; they are different domains with different anchors.

---

## 5. Pre-registered refuter (written before the conclusion)

A falsifier written before the run is a design instrument. Written before any verdict was settled:

1. **Per-slot refutation.** Exhibit a per-mode vacuum-energy residual indexed by slot that matches the observed density at the ground without any counterterm fitted to that density. This defeats F1 and F5 together.
2. **Anchor refutation.** Show that the inferred `ρ_Λ` changes when the QFT frame changes its cutoff scheme. The anchor then updates on a frame, Fig 2 :33/:34 applies, and F2/F11 fail.
3. **Depth refutation.** Derive `Λ L_P^2 ~ 10^-123` from inside D1's closure with no import and no fitted parameter. The residual was depth, not absence; F9 fails.
4. **Coupling refutation.** Measure that zero-point energy does not gravitate at the same coefficient as the observed Λ (an equation-of-state deviation or a screening mechanism). This kills the whole framing at the ground, not inside a frame.
5. **Live-mass refutation.** Show the aggregate residual has no positive mass at any slot under any regulator, that is, the discrepancy cancels in every observable quantity. Then Fig 5 :21 (*"the gap has real mass somewhere"*) fails and there is nothing to explain.
6. **Import refutation.** Show that the area-counting import draws on the same evidence pool as the volume calculation (Fig 8 :48/:49), or that it fails its shadow test. Then F10 is withdrawn.

Until one of these is run, no part of this may be labelled `grounded` as a result about nature.

---

## 6. Recommendation

1. Lead with the residual, not with the theory. Fig 10 :52: *"Bring a characterised residual, never the source."*
2. Split the union before searching (Fig 9 :54/:58). Ask which of the three conditions a proposed solution actually clears.
3. Stop planning at link 4 until an instrument exists at link 3 (Fig 3 :26/:27). A new mechanism without an objective is motion, not progress. Fig 7 :35: *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."*
4. Report the 120 orders as a frame-internal aggregate (Fig 1 :19/:22), a saturated channel (Fig 10 :24/:26), and a harness output (Fig 11 :70), in that order.
5. Offer the area-counting import as a prospective import with provenance and a shadow test, never as the answer and never as triangulation with a held frame (Fig 6 :23/:24, Fig 8 :56/:57, second-seat correction in `11` §3).
6. Ask for a refutation. Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*

---

## 7. Canonical usage check

Read after the first six sections, as in the exemplar, and applied to what is written above:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* And: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* This confirms the F7 re-census: the continuum line was aimed at a different object.
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are metalaws and decide design questions by themselves. In particular Fig 9 :60 (*"Use filters for the budget and witnesses for the verdict"*) confirms that "naturalness" cannot be used as a witness. The seat must not ask the anchor (or a famous physicist) to decide what the figures already settle.
- `FRAMEWORK/figures/THE_FORMULA.md` step 7: SEARCHED first, then INWARD, then OUTWARD, kept distinct. Applied here: SEARCHED within D1 is not the remedy, because the problem is a union (Fig 9 :5). INWARD would sharpen a cutoff that has no edge to sharpen from (Fig 6 :34/:35). OUTWARD is the only wall-moving operator (Fig 6 :14, *"the only operator that moves the wall"*), and it must be cast in effect terms.
- Indiscernibility is not identity. The observed value and the predicted value are indiscernible in their units and equation-of-state form; that does not make them the same term. Fig 12 :95/:96 carries the bond.

### Retraction and confirmation log

| earlier move | status after canonical check |
|---|---|
| "Use Fig 13 continuum removal to explain the divergence" | **Retracted before conclusion.** Strain detected; re-census sent it to F7; the line governs primitives, not regulator schemes. |
| "Energy is finite so the calculation must terminate" | **Downgraded to `specified`.** Fig 13 :68 is a substrate claim about counting in the laws; applying it to the mode sum is an extrapolation, recorded as such in F6. |
| "No anchor in QFT" | **Qualified, not retracted.** D1 anchors differences but not the absolute level. F2 now states the narrower claim. |
| "The problem is one hard problem" | **Retracted.** Fig 9 :5 plus the Babel essay make it a union compound; F8 and the dependency census replace it. |
| "The 120 orders is a measurement of nature" | **Retracted.** It is a measurement of the frames and the harness. F3 and F11 separate the two. |
| "Unreachable means there is no answer" | **Retracted.** Fig 8 :39 and Fig 13 :134 make it a verdict of limited reach, not a proof of absence. |
| Fig 8 Bekenstein/holography triangulation | **Canonically confirmed but limited.** The figure itself says the claim *"has not been tested forward"* (Fig 8 :56). It stays a prospective import. |
| Slot indexing as governing line | **Canonically confirmed.** Symbols table :43/:44: *"R is measured per slot, never as a single global"* / *"number."* |

---

## 8. Updated verdict

The shape survives: the cosmological constant residual is a union compound whose live signal is indexed per mode, whose anchor is the observed expansion history, whose regulating calculation is a harness rather than a domain, and whose only wall-moving move is a provenanced import whose shape is area counting rather than volume counting. The mechanism that sets the absolute value is **unreachable at this budget** and is recorded as `gap`, not as silence and not as a named new primitive. Strains after re-census: one detected (the continuum line), re-censused and resolved; one retained and named (Fig 13 :68 applied by extrapolation to the mode sum). Everything is `specified` unless individually marked `general`. Nothing here is `grounded` as a result about nature, and this document cannot settle the question it reports on.
