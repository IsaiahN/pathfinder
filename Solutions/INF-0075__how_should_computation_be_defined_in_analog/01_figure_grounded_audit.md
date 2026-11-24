# Figure-grounded audit: how computation should be defined in analog, chemical, biological and quantum systems

**Mode of this document: `specified`, with `general` on the structural shape and a declared `gap` on the literal per-substrate definition. It is not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* ( essay, opened 2026-11-23) says LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This audit is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §7.

**Sources.** Figure quotes are verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session, cited `Fig N :line`. Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. The formula and seat map are framework primaries. World sources are secondary corroboration only and are listed in `10_source_ledger.csv`.

---

## 0. The residual, in effect terms

The ordinary question asks for a definition of "computation" in four substrates. Stated as an effect, the residual is:

> A verdict about a physical process is currently made by picking a description (symbols, trajectories, molecular counts, spikes, qubits) and checking whether the process fits it. There is no account of what would settle that verdict from outside the description. Different descriptions of the same process give different answers, and the disagreement does not shrink with more description.

- **Arity.** At least four conditions are bundled: (i) the invariant kernel, (ii) the per-substrate cast of actors, currency and anchor, (iii) the observer/verdict question (who or what decides), (iv) the granularity question (which states count as slots). This is a `union`, not a `partition`.
- **Symmetry.** The verdict "computes" is asymmetric between process and ground, but the mapping from physical states to computational states is symmetric under relabeling. That is why a mapping-only account trivializes: any process fits many descriptions. The world literature names this exactly (SEP, "Computation in Physical Systems", §2.1, opened 2026-11-23).
- **Scale.** First order inside one substrate, where a process is checked against a measurement. Second order when a settled process becomes an atom for another frame (Fig 12 :104). The two must not be averaged.

**Bound shape (the sought-for answer made an ordinary term, Formula "Direction"):** *a bounded frame with a library Γ and a per-slot residual R = |Γ(b,a) − o′|, whose terms are minted under support, reachability and novelty gates, whose settlement is paid by a ground that does not update on what any frame thinks, and whose substrate-specific vocabulary is a cast of actors/currency/anchor rather than a new criterion.* This is a shape, not a name (Fig 9 :32).

**First: is there a fact here?** Fig 9 :4-5: "First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." The four substrate literatures do not disagree about one thing. They work well on different subsets. So the question is split before it is searched.

---

## 1. Domain census

R by arity, symmetry and scale as above. One line per domain: actors, currency, anchor, question type. No nameable anchor means the domain is not yet a domain.

| domain | actors | currency | anchor (nameable?) | type |
|---|---|---|---|---|
| **D0. The definitional frame** | bounded frames with Γ, b, a, o′, R; operators; seats | per-slot residual; settled vs candidate terms | **yes:** a measurement or outcome that does not update on the frame's report (Fig 2 :29) | union of four conditions |
| **D1. Analog / continuous systems** | continuous state variables, integrators, flows, trajectories, noise | residual between predicted and observed trajectory; bits and actions as two currencies (Fig 12 :125) | **yes:** finite-precision measurement of the trajectory; a stable instrument | compound with D2 and D4 |
| **D2. Chemical systems** | molecular species, counts, rate constants, catalysts, reaction networks | molecular counts (naturally digital) and concentrations/rates (analog); product yield | **yes:** measured product counts and yield; a counter | compound with D1 and D3 |
| **D3. Biological systems** | proteins, cells, lineages, habitat actors, conditions, relations | contact and survival; capability of agent-plus-habitat | **yes:** outcome that does not update on the organism's own report (survival, patient outcome) | compound with D2 |
| **D4. Quantum systems** | states, qubits, unitary gates, measurements, outcomes | prediction vs Born-rule outcome; accessible vs specification information | **yes:** the recorded measurement outcome (not the state, which updates) | compound with D1 |

**Partition or union?** Union. Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." A single lever, "define computation over discrete symbols", clears the region where only the symbolic condition holds and leaves the intersections standing: hybrid analog machines (Bournez and Pouly 2018), chemical systems with digital stoichiometry and analog rates (Chen, Doty and Soloveichik 2013), quantum models that may also be analog (Bournez and Pouly 2018), biological systems implemented in chemistry (Flamm, Merkle and Stadler 2025). Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

**Order by dependency (Fig 3).**
1. Refuse the substrate question and re-ground it as the contact question (Fig 11 :41; Formula step 2, refusal before mint). The chain breaks here if it breaks anywhere: Fig 3 :27, "A link with no instrument is not a link that works. It is a link nobody has looked at."
2. Describe R before choosing a frame (Fig 9 :27-28).
3. Cast D1 to D4, each with its own actors, currency and anchor, never averaged.
4. Settle each first-order process before composing at second order (Fig 12 :104).
5. Import only with a source gate and shadow test (Fig 6 :23; Fig 8 :50-52).

Strain test applied before any conclusion: an early reading made Fig 13's six-term set govern "computational substrates" directly. That strained, because the six are physical states and structures, not species of computation. Re-census assigns Fig 13 to the substrate the loop assumes, and Fig 4 to the invariance of the loop across casts. Different objects, so the strain is dissolved rather than smoothed (see §6, F13).

---

## 2. Figure census

| figure | bearing | verdict for this question |
|---|---|---|
| **1 The Agent** | residual per slot; ground is the only metric; frame-internal quantities disqualified | bars a global "computes" bit and a definition scored by symbols processed |
| **2 The Ground** | anchor must not update; triangulation vs mirror; correlation valence | bars mapping-only and observer-only definitions |
| **3 Dependency Chain** | ordered by dependency; a reading below the break is a reading of nothing | refuse before define; describe R before picking a substrate frame |
| **4 The Membrane** | kernel invariant, cast changes; methods cross up, recordings do not | the actual answer to "how define": define the kernel, not the cast |
| **5 Mint Pipeline** | three guards as a product; MDL bargain; fifth kind (refuted) | a substrate definition with no residual and no settlement is not a mint |
| **6 Closure / Reachability** | import is the only wall-moving operator; inward vs outward | substrate primitives are imports with provenance, not derivations |
| **7 Room Chain** | room agreement is variation, not a verdict | four literatures agreeing is one pool, not four witnesses |
| **8 Union Surplus** | describe R before frame; convergent vs adopted import | low overlap between substrate literatures is the surplus, not the confusion |
| **9 Leave / Arrive** | split rather than search; union not partition; shape not a name | decisive for the union verdict and for the declared gap |
| **10 Ground Maintainer** | ground does not decay, channel does; verifier non-access | a "computation" verdict needs a non-updating anchor and a blind checker |
| **11 The Habitat** | substrate question dissolves, contact question does not; capability is agent-and-habitat | decisive: the question as asked is refused and re-grounded |
| **12 The Bond** | ingredients are not the molecule; arrangement is the substance; catalyst, cycle; two currencies | discreteness/continuity is a remainder; arrangement, not medium, is the object |
| **13 Minimum Viable Set** | set closed, arrangements not; discreteness is left behind, not a seventh member | bars treating analog/digital or classical/quantum as new primitives |
| **Operators table** | negation is the refusal; a relation failing all tests is a claim not yet made | the substrate question is refused (¬), not answered with a new bond |
| **Symbols table** | R is the aim, not only the error signal, and is always a slice | what cannot be perceived as a computational state is residual, not absent |

---

## 3. Findings

### F1 — The question is a substrate question, and the figures dissolve it (DECISIVE)

Fig 11 :39-41, verbatim:

> "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."
> "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."
> "Which is the same move as asking what generates lift rather than whether a thing is a bird. The substrate question dissolves; the contact question does not."

The question asks how computation is defined *in analog, chemical, biological and quantum systems*. That is the "whether a thing is a bird" form. Fig 11 :41 replaces it with the contact form: what makes a physical process capable of being checked as computing. Cayley's lift move (Fig 11 :42) separates the forces from the flapping. Here it separates the invariant contact loop from the substrate it runs in.

This is triangulated: Fig 11 :41 (substrate dissolves) and Fig 4 :19-20 (kernel invariant, cast changes) are low-overlap routes to the same verdict. World corroboration is strong but secondary: the SEP's mechanistic account says digital, analog and quantum computation are "species of generic computation" differentiated by vehicle properties, and calls the descriptions "substrate neutral", "medium-independent", "medium-flexible" (SEP, "Computation in Physical Systems", §2.5, opened 2026-11-23).

**Refuter:** exhibit a substrate property that changes whether a process can compute while contact with a non-updating ground and the per-slot residual are held fixed. If such a property exists, the substrate question does not dissolve and F1 is false.

### F2 — The invariant is the loop; the four systems are casts

Fig 4 :19-20:

> "The kernel is the part that does not change with size: the same loop and the same rule for naming what worked, whether one agent is running it or a thousand. Only the actors, the currency and the anchor change."

Fig 10 :68:

> "Different actors, a different currency, a different ground, and a lossy transform between."

So the answer to "how should computation be defined" is not four definitions. It is one definition with four parameter settings: actors vary (variables, molecules, cells, qubits), currency varies (trajectory error, counts, survival contact, measurement outcome), anchor varies (instrument, counter, outcome, recorded result). This is `general` on the shape and `specified` on each cast. Verdicts stay per-domain and are never averaged.

**Refuter:** show that two of D1 to D4 require different loop structure, not merely different actors, currency and anchor, while both remain settled at the ground. Then Fig 4's kernel claim fails for this domain and the four definitions must be separate.

### F3 — Discrete and continuous are not primitives; the analog/digital split is a union

Fig 13 :124-125:

> "Smoothness, symmetry, chaos and discreteness are each what a particular composition leaves behind, and none is a seventh member."

Fig 12 :111:

> "A vocabulary without bonds can name a state and cannot name a route to one."

Discreteness and smoothness are what a composition leaves behind. They are derivatives, not members of the minimum set. So "analog computation" and "digital computation" are not two kinds of computation separated at the substrate. They are arrangements over held atoms, and the boundary leaks. World corroboration: Bournez and Pouly (2018, arXiv:1805.05729) write that "even discrete vs continuous is not a clear dichotomy, and most of the analog machines that were historically built were actually hybrid"; they also note that many quantum models can be considered analog and are out of their scope. Chen, Doty and Soloveichik (2013) write that in chemical reaction networks "the rates of reactions are analog quantities, the identity and stoichiometry of the reactants and products are naturally digital."

Fig 9 :54-57 then governs:

> "And when the split lands on a union rather than a partition, unbundle before you search again."
> "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."

**Refuter:** produce a clean partition of the four substrates with no hybrid case, no shared atom and no property that is both discrete and continuous in the same process. Then a single lever per substrate would be sufficient and the union verdict fails.

### F4 — The observer question is not settled by a mapping

The mapping-only move is a frame. Fig 2 :29:

> "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."

Fig 1 :27:

> "They are frame-internal. A frame cannot score itself with a quantity it also produces."

If "computes" is whatever an observer maps states onto, the observer's mapping is both the claim and the metric. That is the collapse Fig 2 names: "Alignment is triangulation, not negotiation. A mirror cannot correct you." (Fig 2 :35). World corroboration is direct: the SEP's §2.1 shows that under the simple mapping account a rock warming in the sun implements a NOT gate with feedback, and that counterfactual, causal, dispositional, robust-mapping and mechanistic accounts were invented precisely to block that trivialization.

The honest form is not "computation is observer-relative" and not "computation is observer-independent". It is: the observer supplies a cast, and the ground supplies the verdict. A mapping selects what is to be checked; it cannot be what settles the check.

**Refuter:** an observer-independent criterion that still lets the rock count as a computer against a non-updating anchor, or a case where two frames with no shared evidence and an unmoved anchor disagree and the ground fails to settle them.

### F5 — Residual per slot, not a global "computes" bit

Fig 1 :19 and :22:

> "The residual is indexed by object slot, not aggregated."
> "Aggregating across slots is how a live signal disappears into an average."

In D2 this is not an analogy: Flamm, Merkle and Stadler (2025, J. Phys. Complex. 6 015014) state that "in chemical reaction networks, computation may refer to at least two fundamentally different aspects: concentrations of molecules, and molecular structures." A single global "this chemical system computes" bit throws away exactly the signal that says which aspect is being claimed. The same holds across D1 (precision on one variable versus stability of another) and D4 (accessible versus specification information).

**Refuter:** show that a global computes/does-not-computes bit predicts where a process fails as well as a per-slot residual does. If it does, per-slot indexing is an unnecessary restriction.

### F6 — The ground is the only metric; frame-internal yardsticks are disqualified

Fig 1 :23 and the named frame-internal quantities at :24-27:

> "The ground enters as the only metric."
> "They are frame-internal. A frame cannot score itself with a quantity it also produces."

"Computation as manipulation of symbols", "computation as information processing", "computation as complexity achieved" are all scored with quantities the frame also produces. That does not make them false; it makes them unable to settle a verdict. The SEP's §2.3 records the same difficulty for the semantic account: there is "no consensus on where to draw the boundary between representational manipulations that count as computations and representational manipulations that do not." That absence is not silence (Fig 13 :134); it is a gap owed an instrument.

**Refuter:** a definition of computation scored by a frame-internal quantity that nevertheless discriminates a rock from a calculator against an anchor that does not update.

### F7 — Settlement needs a non-updating anchor, which is why "miscomputation" is possible

Fig 2 :29 and :33:

> "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
> "The anchor must not update."

A process can be right or wrong only against something that does not move when the process's own description moves. The SEP's mechanistic account makes the same point from the other side: it "accounts for the possibility of miscomputation — a possibility difficult to make sense of under other accounts." In D4 the state updates on measurement, so the state cannot be the anchor. The recorded outcome can. This is named as a live strain S1 in §6 rather than hidden.

**Refuter:** an account in which the measured quantum state itself is the ground and that still yields a verdict independent of what any observer thinks. Under Fig 2 :34-35 that would turn the anchor into another frame and drift would become coherent and invisible.

### F8 — Minting: a substrate definition with no residual is inert

`THE_FORMULA.md` step 3:

> "SUPPORT |R⁺_s| > 0 for some s before the search"
> "REACHABILITY φ ∈ closure(Γ) during"
> "NOVELTY φ ∉ atoms(Γ) after"
> "gated by a product; any factor at zero forces inertness"

Fig 6 :21:

> "MINT composes inside the closure and can never add an atom."

For a proposed substrate-specific definition of computation: **SUPPORT** is present only where a literature reports a residual (the rock problem, the analogy/hybrid ambiguity, the two-aspect chemical finding). **REACHABILITY** holds for the contact criterion; it does not hold for a new substrate primitive, which must be imported. **NOVELTY** fails if the "new" definition merely renames held atoms (counts, gradient, spectrum, network). **SETTLEMENT** is absent: no instrument returns a verdict on "this is the correct definition of computation in substrate S". Fig 5 :41: "Any one of them at zero stops the mint entirely. Which is why a system that is minting nothing may have nothing wrong with its minting."

**Refuter:** a substrate definition that clears all four gates, including a ground that pays for it. Until one is run, it is a candidate, not an accepted term.

### F9 — Import needs a source gate and a shadow test

Fig 6 :23 and Fig 8 :50-52:

> "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."
> "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."

Every world source used here is an import from a substrate literature into the framework, and each carries a source gate (URL, author, venue, year, accessed date, quote in `10_source_ledger.csv`) and a shadow test (which residual it explains: F1, F3, F4, F5, F6, F7). Bournez and Pouly, Chen et al., Flamm et al., Bray and the SEP are not witnesses for the figures; they are imports that explain named gaps. MacLennan's notes are a second such import for the purpose/function criterion.

**Refuter:** show that one of these imports explains no named residual, or that its provenance record is wrong. Then it is a wrong atom and Fig 6 prices it above starting from primitives.

### F10 — "Computation in a biological system" is a post-hoc label, like "intelligence"

Fig 11 :36 and :40:

> "Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran. The word does no work there."
> "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."

Bray (1995, Nature 376:307-312) writes that "many proteins in living cells appear to have as their primary function the transfer and processing of information", and calls the linked proteins biochemical "circuits" performing amplification, integration and information storage. The word "appear to have as their primary function" is itself the contact claim. Fig 11 :43: "The habitat is enumerated, never composed." The proteins are actors in a habitat; their valence is relative to the residual (Fig 11 :49), and no standing list of computational parts survives a change of residual (Fig 11 :51). A synthetic solve proves wiring and never capability (Fig 11 :70).

**Refuter:** an agent-only improvement in D3 or D4 that moves the ground. Fig 11 :72 records that such a result would refute the capability claim.

### F11 — Two currencies: bits and actions do not add

Fig 12 :125-126:

> "A composition costs in two currencies, and they do not add."
> "Bits price the description. Actions price finding out whether it holds."

In D1, precision has resolution and stability, and noise prices the action. In D2, rate constants are analog and stoichiometry digital (Chen et al. 2013). In D4, the SEP records that a qubit's "accessible information" is at most one bit while "specification information" is conserved under unitary evolution, and that quantum speed-up remains unproved in general. These are two readings of cost. Summing them into one "computational power" scalar is the error Fig 12 names, not the fix. Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

**Refuter:** a single scalar that prices description and action, predicts which substrate wins, and loses no information that the two-reading account retains.

### F12 — What survives is a shape; the per-substrate definition is a declared gap

Fig 9 :32:

> "you get a kind of thing, never the answer itself"

Fig 13 :134:

> "It can say the answer is out of reach with the library as it stands, so something has to be imported before it is asked again."

No figure line selects a unique substrate signature for computation. The framework returns the shape of any candidate answer (contact loop, per-slot residual, gated mint, non-updating anchor) and stops there. Naming a particular substrate mechanism as *the* definition is a binding from that literature, provenanced as such (F9), not a derivation. The literal request in the question is therefore a `gap` in the shape-not-a-name sense, and an unreached verdict rather than a silence: "Unreachable is a verdict here, not a silence" (Fig 13 :134).

**Refuter:** a figure line that selects one substrate signature for computation, or a ground reading that pays for one. None was found after the census below.

### F13 — Strain recorded and dissolved: Fig 13 does not govern computational species

First pass read Fig 13 :41, "Each is indivisible: no arrangement of the other five yields it", as if analog, chemical, biological and quantum computation each had to be one of the six or a composition of them. That strained, because the six are physical states and structures assumed by the loop, while the four are casts of the loop. Re-census: Fig 13 governs the substrate the loop assumes; Fig 4 governs invariance across casts; Fig 12 governs arrangement within a cast. Different objects. The strain is dissolved, and the original reading is preserved here rather than erased. Same for the apparent Fig 11 :41 versus SEP mechanistic-account conflict: the SEP says the vehicles differ, Fig 11 says the substrate is not where the verdict lives. Those are different quantities, not a contradiction.

---

## 4. Pre-registered refuter

Written before the conclusion, per the standing instruction ("a falsifier written before the run is a design instrument"). The shape claim is refuted if any of the following holds:

1. A substrate property changes whether a process can compute while ground contact and the per-slot residual are held fixed (breaks F1 and Fig 11 :41).
2. Two substrate classes require different loop structure, not merely different actors, currency and anchor, while both settle at the ground (breaks F2 and Fig 4 :19-20).
3. A clean partition of the four substrates is produced with no hybrid, no shared atom and no mixed discrete/continuous process (breaks F3 and Fig 9 :54-57).
4. A mapping-only or observer-only criterion settles a verdict against a non-updating anchor, with no frame-internal scoring (breaks F4 and Fig 2 :29).
5. A global computes/does-not-computes bit predicts failure locations as well as per-slot residuals (breaks F5 and Fig 1 :19).
6. A substrate-specific definition clears all four mint gates, including a ground that pays for it (breaks F8).
7. An instrument returns the same verdict on "which substrate defines computation" from two low-overlap frames, with provenance and a shadow test (closes F12's gap).

If any fires, the answer is withdrawn or narrowed. Until one is run, no part of this folder is labelled `grounded`.

---

## 5. Recommendation

1. Lead with F1, not with a per-substrate list. The substrate question is refused; the contact question is answered.
2. State the mode on every claim (F2, F12). `general` on the shape, `specified` per domain, `gap` on the literal definition, never `grounded`.
3. Keep the four domain verdicts separate. Do not return an average or a ranking of substrates (Fig 1 :19, Fig 9 :60).
4. Split the union before searching (Fig 9 :4-5, :55). A single lever will leave the intersections standing.
5. Carry imports with provenance and a shadow test (F9). Do not present a substrate literature as a witness for the figures.
6. Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion." Send the generator (shape plus refuter), not a conclusion.

---

## 6. Canonical usage check, retractions and confirmations

Two canonical sources were read after the first five sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." A reading that makes figures contradict "has misidentified its domain, not found a flaw." The framework returns "what a missing thing would have to look like (a shape, not a name)" and stops at the limit of the instruments, recording the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are the ground for design questions; the anchor is not an oracle for rulings the figures already decide. Fig 11 :40 and Fig 10 :24 are load-bearing, not requests for a human ruling.

### Retraction and confirmation log

| earlier reading | status after canonical check |
|---|---|
| F1 initially read as "substrate talk is banned" | **Retracted and narrowed.** Fig 11 :41 dissolves the substrate *question* as the ground of the verdict. It does not forbid describing the casts. D1 to D4 remain legitimate as casts of actors/currency/anchor. |
| F3 initially read as "analog and digital are the same thing" | **Retracted.** Fig 13 :124-125 makes discreteness a remainder, not a seventh member. They are different arrangements over the same held atoms, so different terms, and the union verdict follows from Fig 9 :55, not from identity. |
| F12 initially read as "the framework cannot say anything about definition" | **Retracted.** It can say the whole shape (F1, F2, F4, F5, F6, F7). The gap is the unique per-substrate name, not the criterion. |
| Fig 13 applied to computational species (F13) | **Retracted and preserved.** Re-census assigns Fig 13 to the assumed physical substrate, Fig 4 to cross-cast invariance, Fig 12 to arrangement. No strain after re-census. |
| "shape, not a name" applied to any substrate mechanism | **Narrowed.** The phrase governs a *missing* primitive (not held in Γ). Naming counts, gradients or qubits is a binding from a substrate literature, provenanced as such, not a forbidden invention and not a wall-moving import. |
| Fig 11 :41 versus SEP mechanistic account | **Not strained.** Different quantities: the SEP differentiates vehicles; Fig 11 locates the verdict in contact. |
| F1 decisive status | **Confirmed.** Triangulated across Fig 11 :41, Fig 4 :19-20 and the SEP §2.5 (low overlap between figure route and world route). |
| F12 gap status | **Confirmed.** Fig 9 :32 and Fig 8 :39 ("So a search that finds nothing is never a proof of absence.") make it unreached, not silence. |

### Seven-question recursive derivation (summary)

1. **Is there a fact here?** Yes, but a union of four well-formed questions (Fig 9 :4-5). Split, do not search.
2. **What is the residual?** A verdict that does not shrink when more descriptions are added. It is indexed per slot (Fig 1 :19).
3. **Which figures govern?** Fig 11 :41 (substrate dissolves), Fig 4 :19-20 (kernel invariant), Fig 2 :29 (anchor), Fig 9 :32 (shape).
4. **What is mintable?** The contact criterion. A substrate-specific signature fails novelty or settlement (F8).
5. **Is an import owed?** Only for substrate primitives, with source gate and shadow test (F9). The world literatures are imports, not witnesses.
6. **Is it settled?** No. Every world literature remains contested (mapping versus mechanistic versus semantic; hypercomputation; quantum advantage unproved). Status `candidate`, `specified`.
7. **Route?** Refuse the substrate question with negation, which is not a bond (Operators :58), then mint the shape. Formula step 2 puts the refusal before the mint.

### Updated verdict

The shape survives: computation is a substrate-invariant contact loop with per-slot residual, gated minting and a non-updating ground, and the four named systems are casts of actors, currency and anchor, not four definitions. Discreteness and continuity are remainders of composition, so the four classes form a union with leaking boundaries, not a partition. The literal request for a definition in each substrate is a `gap` of the shape-not-a-name kind, reported as unreached rather than silence. The observer supplies the cast; the ground supplies the verdict. Strains after re-census: one live type question about the quantum anchor (S1, F7), named, not hidden; one dissolved strain about Fig 13's domain (F13).
