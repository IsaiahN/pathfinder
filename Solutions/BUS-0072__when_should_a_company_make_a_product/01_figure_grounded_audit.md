# Figure-grounded audit: BUS-0072, the make-or-buy boundary

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, read 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too (intelligence is essentially arrangement). However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the make-or-buy question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is the firm's belief about what a component will cost, quality and deliver, formed from its own history and inherited priors.
- **a** is the firm's action for that component slot: make it inside the firm, buy it from a supplier, or hold both (plural sourcing).
- **Γ(b,a)** is what the firm's library of routines, tools and knowledge predicts will happen under that choice.
- **o′** is what actually happens on the ground: realized total cost, quality, delivery and continuity of supply.
- **s** is the component slot. R is indexed by component and by time, never aggregated into a single corporate make-or-buy ratio.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)

The phenomenon to explain is the *location of the boundary* at each slot, not a global posture. Observed: two firms facing the same component choose differently; one firm makes one component and buys another; some firms make and buy the same component at once (plural sourcing, Klein and Mazzoni 2025, section 19.2.2). A frame that predicts all components fall on one side of a single rule has a residual here.

State the residual as: *why does the gap between what a firm's routines predict about a component and what the market actually returns stay small when the component is made inside in some slots and bought in others?* This is an effect description. It names no theory, no "core", no "transaction cost", no "asset specificity", no "capability". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a pair of conditions whose conjunction places a component on one side of the boundary, plus an instrument that discriminates a failure of one condition from a failure of the other. One condition governs whether internal composition is reachable and settles. The other governs whether an import from a supplier's closure produces a surplus that survives the source gate, the shadow test and the independence debit. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 4 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names the candidate directly: *"A measurement, an experiment, a counter, a market, a patient outcome."* Both "a counter" and "a market" are named anchors. For make-or-buy the anchor is the realized comparison on the ground: total landed cost, quality, delivery and continuity, measured on a contract or in a market, not "strategic importance" opinion, consultant framework, or board consensus. Fig 2 :30: *"If it moves when you push on it, it is not an anchor."* Internal strategic-importance scores move when pushed; a realized cost and delivery record does not. Viable anchor: realized total cost and reliability per component slot.

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a relation among firm library Γ, component slot s, action a (make or buy), and, in the buy case, a second closure (the supplier), ranged against ground o′. It has at least three operands and, when buying, two distinct closures. It carries an **ordered** bond (`→`, sequence: *"A then B; B needs A to have happened"*, Fig 12 :72) because internal capability must be built before it can be composed over, and a **comparison** bond (`⋛`, *"a threshold relation between two quantities"*, Fig 12 :87) because making versus buying is a threshold between two quantities, not a symmetric join.
- **Symmetry.** "Make or buy" is not symmetric: the ground does not update on the firm's preference (Fig 2 :25, *"pinned: it does not update on A or B"*). "Cheaper" is a threshold relative to a supplier's offer, not an absolute quantity (Fig 12 :85-89; Operators table :46-51). Buying changes the firm's reach in a way that making does not; it adds an atom from a differing closure (Fig 6 :22), so the two actions are not interchangeable.
- **Scale.** Three scales are in view: the single component slot and the firm's step-by-step loop (Fig 4, one-agent panel), the firm's product architecture and library (one scale up), and the supply network or market (population scale, Fig 4 :5, *"many agents, a shared library, and something that ranks what they produce"*). The membrane between the firm and a supplier is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so the round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The make loop** (internal composition) | routines, tools, atoms and bonds inside the firm, internal engineers | reach (what can be composed), |φ| cost, settlement | yes: realized internal cost, quality and delivery on the ground | admitted |
| **D2 The buy path** (import from a supplier's closure) | supplier closures, contracts, the market | import surplus, coordination cost, independence debit | yes: the contract and the market (Fig 2 :29); realized landed cost and reliability | admitted |
| **D3 The boundary / governance** (where the line sits, including hybrids) | both closures, markets, hierarchies, hybrid forms | cost of composition versus cost of import plus debit | yes: the ground settles, "the ground settles it. Verified only by what pays" (Formula step 5) | admitted, this is the compound |
| **D4 The capability channel** (across time) | instruments, metrics, tacit knowledge, percepts | contact with the ground, reach | yes: the ground, "the ground does not decay, the channel does" (Fig 10 :24) | admitted |
| **X1 "Core competence" as a free-floating property** | a label on an activity | strategic importance | **no** anchor independent of the market's verdict | not a domain yet |
| **X2 "Buy because cheaper" as sole cause** | a price quote | immediate cost saving | already inside D2 and D3 | absorbed |

X1 fails the anchor test and is therefore excluded before any figure line is applied to it. "Core" is a name for a relation that has to be settled on the ground; it is not itself a ground. This is a structural exclusion, not a claim that some activities are not more important than others.

### 1.3 Partition or union

D1 and D3 overlap: the make loop is inside the boundary question, so their overlap is a compound with its own loop. D2 and D3 overlap: the buy path is also inside the boundary question, a second compound. D3 and D4 overlap: the chosen boundary has to survive over time, a third compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: (C1) the component is reachable and settles inside the firm's closure, and (C2) an import from a supplier's closure produces a surplus that survives the source gate, the shadow test and the independence debit, with (C3) the make-capability retained over time so the channel does not decay (D4). A firm failing only C2 and a firm failing only C3 are not different degrees of one failure; they need different instruments. The essay *The Library of Babel* states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually to find their answers and then combine them in a satisfactory way."*

The empirical literature's "many shades of gray" is the union's face. Klein and Mazzoni 2025 write that *"there are many shades of gray"* and that *"firms both making and buying the same intermediate goods"* (plural sourcing). A binary make-or-buy variable is a filter for the budget, not a witness for the verdict (Fig 9 :60).

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"Why the middle link is where chains usually break."** (Fig 3 :24)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for this question: 1 perception (can the firm read total landed cost, quality and delivery?) → 2 vocabulary (does Γ have terms for what the component affords, and can it say what progress would count as, in total cost of ownership?) → 3 objective (can it state the comparison ⋛ between internal cost and landed cost?) → 4 planning (a sourcing route under incomplete contracts) → 5 learn and carry (retain the knowledge, verify it, carry it to the next component). The middle link, having terms for what the situation affords and saying what would count as progress, is the one with no instrument. Fig 12 :113-115 says a vocabulary holding only ingredients can say what a situation contains and cannot say what would count as getting somewhere from it, and that *"having terms for what a situation affords was taken for a dictionary and it is a grammar."* Most sourcing-analysis effort lands above the break, because that is where the measurements already exist (Fig 3 :29-30): supplier quotes (link 1) and contract negotiation (link 4) are heavily instrumented; the vocabulary of "what counts as a win here" (link 2) and the carry link (5) are not.

The transaction-cost proxies studied empirically, asset specificity, uncertainty and frequency, sit mostly at links 1 and 4. The "hidden costs" of outsourcing, loss of expertise and reduced ability to detect and respond to competition (Reitzig and Wagner 2010, reported in Klein and Mazzoni 2025, section 19.4.1), sit at link 5. That is why a single metric cannot diagnose a boundary failure.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, never averaged |
| 2 The Ground | the counter and the market are named anchors; independence vs common pool | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs firm-to-supplier transfer and the capita-l-to-component analogue |
| 5 Mint Pipeline | three guards as product; reachability gate; settlement | governs whether a component "can be made" at all |
| 6 Closure / Reachability | import is the only operator that moves the wall; source gate, shadow test, independence debit | decisive for buy as import |
| 7 Room Chain | same closure handed along; fidelity times ground pressure | governs repeated single-supplier sourcing and capability drift |
| 8 Union Surplus | closure idempotent; two frames reach what neither reaches alone; provenance separates convergence from import | governs supplier surplus and the make-versus-buy provenance question |
| 9 Leave / Arrive | union vs partition; describe the residual first; filters vs witnesses | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; keep anchor reachable | governs loss of make-capability over time |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | governs why a make-capability changes sign |
| 12 The Bond | make and buy as different bonds; isomer; catalyst; arrangement is substance | governs why two firms with the same inputs choose different boundaries |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | governs the honest stop |

Strain test applied during this census: an early attempt to apply Fig 13's six-term physical substrate directly to "component atoms" only fit by calling a supplier a kind of network and a machine tool a kind of energy. That is a strain, so Fig 13 does **not** govern the physical composition of a product. Re-census sent Fig 13 to the honest-stop and closure-logic roles only (section 6, strain S1). No other figure needed a strain after re-census.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about firms, `grounded` only if settled by a measurement. None is `grounded`.

### F1: Making composes inside the closure; buying imports from a differing closure

**Mode: `general` for the distinction, `specified` for the firm application. Domains D1, D2. Status: triangulated (Fig 6 and Fig 13, low overlap: closure operator vs substrate set).**

> **"MINT composes inside the closure and can never add an atom."** (Fig 6 :21)
> **"the only operator that moves the wall"** (Fig 6 :14)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)
> **"IMPORT adds an atom, and the added atom is what expands the closure."** (Fig 6 :22)

In effect terms: making a component is a composition inside Γ, so it cannot add a primitive the firm does not hold; buying a component is an import from a supplier's closure, and it is the only one of the two that can expand what the firm can reach. This is a structural asymmetry, not a claim that making is weak. It is exactly why a firm may buy something it could technically make: the import can carry an atom the firm does not hold. It is also why "we can make it" and "we should make it" are different questions; the first is a reachability question, the second a settlement question (Formula step 5).

The economics pool names the same tradeoff. Klein and Mazzoni 2025 write: *"the boundary of the firm, then, is determined by the tradeoff, at the margin, between the relative transaction costs of external and internal exchange."* Their chapter records that *"the core insights of the transaction cost approach and its basic explanatory power in helping us make sense of vertical boundaries remain the same."* Corroborates the shape, but it is one witness and shares a pool with the rest of the economics literature (Fig 2 :31).

**Refuter:** a firm that adds a genuinely new atom to its capability by internal composition alone, with no contact with a differing closure; or a supplier whose component leaves the firm's reach unchanged (an import that moves no wall). Either fires against F1.

### F2: An import is gated, and it carries an independence debit

**Mode: `general` for the rules, `specified` for the firm application. Domain D2. Status: triangulated (Fig 6 and Fig 8, low overlap: what moves the wall vs where the surplus comes from).**

> **"source gate: provenance"** (Fig 6 :12)
> **"shadow test: explains a gap"** (Fig 6 :13)
> **"Import from a live peer is debited against that frame's independence. A wrong atom costs more than starting from primitives."** (Fig 6 :24)
> **"But shared atoms are not the signature. Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."** (Fig 8 :50)

Buying is not free. The import must pass a source gate (where does this component come from, and can the claim be checked?) and a shadow test (does it explain a gap the firm actually has, or is it a decoration?). It is then debited against the buyer's independence: the firm that buys a component it could have made acquires a dependency, and a wrong atom costs more than starting from primitives. Fig 8 :50 is the sharpest operational point: two firms holding the same atom by convergent derivation are corroborating at maximum independence, while a firm that adopts the atom by import has bought a correlation that cannot count as its own capability until provenance is shown.

The world corroborates from three directions. Klein and Mazzoni 2025 report *"hidden costs" of outsourcing such as *"loss of expertise within the firm, reduced ability to detect and respond to competition"* (Reitzig and Wagner 2010). Fine and Whitney's MIT framework, read in a 2004 MIT thesis that records it, states that *"dependency for capacity (the firm retains the knowledge)"* is least risky while *"the most risky is the dependency for that knowledge"* (Weinstein 2004, reporting Fine and Whitney). Hammerstein and Noë 2016, from evolutionary biology with no shared pool with management, report that under market forces *"mycorrhizal fungi would probably have lost the ability to directly acquire carbon"*, and that mutualistic ants are *"having lost the ability to digest sucrose"*. All three are instances of the independence debit, at three different strata. The first two overlap (MIT and economics/engineering), the third is low-overlap.

**Refuter:** a supplier whose component expands the firm's reach with zero independence debit and no coordination cost; or a documented case in which a wrong import cost less than starting from primitives. Either fires against F2.

### F3: The boundary is per component, never an averaged policy

**Mode: `general` with a `specified` consequence for method. Domains all. Status: triangulated (Fig 1 and Fig 9, low overlap: per-slot residual vs union unbundling).**

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"predicates minted, and credibility accrued"** (Fig 1 :26)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)

A corporate "we outsource 40 percent" figure scores the frame with a quantity the frame produces. It is a filter for where to look and a budget instrument, not a witness. Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* The specified consequence: any answer to BUS-0072 that is an average across components has already thrown away the only signal that says which slot is losing contact and where.

Fine and Whitney's MIT record corroborates at the practitioner-engineering level: *"we give examples in which similar companies, facing similar choices, select make/buy patterns in very different ways, resulting in very different patterns of interdependencies along companies' supply chains"* (Fine and Whitney 1996, MIT DSpace abstract, read 2026-11-22). The economics literature concurs that *"asset specificity is an important determinant of vertical contractual relations. It is not the sole determinant"* (Klein and Mazzoni 2025), so no single averaged predictor closes the residual. Both are one pool, and neither is the verdict.

**Refuter:** an averaged make-or-buy ratio that predicts prospectively and per component which named slot will fail its ground test. If one exists, F3's methodological consequence is false.

### F4: The question is a union of conditions, so one lever cannot clear it

**Mode: `specified`. Domains all. Status: triangulated (Fig 9 and the Library of Babel essay, but the essay is framework-internal so the external witness count is one).**

Fig 9 :54, :55 and :57 (quoted in section 1.3) are the governing lines. The three conditions have different instruments:

- A **C1 failure** (not reachable or does not settle inside) shows up as a component whose internal cost and quality never converge, whose tools and knowledge cannot compose it, or whose build keeps missing the ground (Fig 5, *"nothing new here"* is the wrong outcome; Fig 6 :21, minting cannot add an atom).
- A **C2 failure** (import surplus absent or gated out) shows up as a supplier offer with no shadow, no provenance, or a coordination cost plus independence debit that exceeds the saving (Fig 6 :12-13, :24; Fig 8 :45).
- A **C3 failure** (capability channel decayed) shows up as stale percepts, saturated metrics, pooled readings, and a firm that can no longer tell whether it still knows how to make the thing (Fig 10 :24-29).

A single lever, for example "outsource everything non-core" or "insource everything strategic", clears the region where only one condition holds and leaves the intersections standing (Fig 9 :55). That is the figure-grounded reason the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged. The world corroborates: Klein and Mazzoni 2025 report that *"firms both making and buying the same intermediate goods"*, and note that *"There are two kinds of vertical integration: one that facilitates transactions ... and another that results from firms expanding ... by adding subsidiaries that do not interact with each other"*. Plural sourcing and non-transacting integration are two different compounds, not one.

**Refuter:** one intervention that restores all three conditions in all failure types with no categorically different residue left over. That would collapse the union into a partition.

### F5: The contract and the market are the anchor, not internal agreement

**Mode: `general` with a `specified` business consequence. Domains D2, D3. Status: triangulated (Fig 2 and Fig 1, low overlap: anchor rule vs frame-internal metric).**

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."** (Fig 2 :29)
> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** (Fig 2 :35)
> **"If it moves when you push on it, it is not an anchor."** (Fig 2 :30)

A sourcing decision is settled by the realized cost, quality and delivery record, not by an internal strategic-importance score, a consultant's matrix, or board consensus. Those are instruments; instruments can be wrong on axes they do not measure (Fig 2 :36-38). The economics pool's own efficiency test points the same way: Williamson writes that *"backward integration that lacks a transaction cost rationale or serves no strategic purposes will presumably be recognized and will be undone"*, and more quickly *"if the firm is confronted with an active rivalry"* (quoted in Klein and Mazzoni 2025, section 19.3.3). Rivalry is a ground that pushes back. Agreement inside a firm is not.

**Refuter:** a sourcing decision validated solely by internal agreement with no ground comparison, that survives an active-rivalry test with no correction. If such a case is documented, F5's anchor claim is weakened.

### F6: A supplier's surplus exists only where the closures differ

**Mode: `general` for the structural rule, `specified` for firms. Domain D2. Status: triangulated (Fig 8 and Fig 11, low overlap: union surplus vs habitat valence).**

> **"Two frames together reach what neither reaches alone."** (Fig 8 :45)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."** (Fig 8 :32)
> **"An actor's valence is relative to the residual, not a property it carries."** (Fig 11 :49)
> **"No standing list of good actors survives a change of residual."** (Fig 11 :51)

If the supplier's closure is identical to the firm's, same atoms and same bonds, the union adds nothing; the two are *"one frame wearing two names"* (Fig 8 :49). A real buy surplus requires that the supplier hold something the firm does not, which is the figure-grounded form of comparative advantage. The low-overlap biology source states the same rule in effect terms: *"Trade results mainly from specialization and division of labour."* and *"We tend to refuse a particular trade if we know that a better deal can be obtained elsewhere, or if we can pick the cherries ourselves with little effort."* (Hammerstein and Noë 2016). That passage is a literal make-or-buy boundary in animal behaviour: refuse the trade when a better partner exists or when self-provision is cheap. It corroborates the mechanism from a field with no shared evidence pool.

**Refuter:** a supplier whose closure is demonstrably identical to the firm's (same atoms, same bonds) that nevertheless produces a durable surplus for the firm. That breaks F6 and Fig 8 :45.

### F7: Losing the make-capability is channel failure, not ground decay

**Mode: `specified`. Domain D4. Status: triangulated (Fig 10 and Fig 7, low overlap: ground maintainer vs room chain).**

> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"saturated metrics, pooled readings"** (Fig 10 :26)
> **"keep the anchor reachable"** (Fig 10 :29)
> **"same closure, handed along;"** (Fig 7 :12) **"agreement compounds, evidence does not"** (Fig 7 :13)
> **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** (Fig 7 :36)

A firm that buys a component for years and loses the ability to make it has not seen the market stop paying for the component; the market keeps paying the supplier. Its own channel to the make-ground went stale, saturated, or pooled into an average. Fig 7 adds the two-factor form: *"Progress per handoff has two factors. Zero either and the chain runs in place:"* (Fig 7 :37), *"the bracket's fidelity across the handoff"* (Fig 7 :38), *"the ground's pressure on the room"* (Fig 7 :39). Repeatedly buying from one supplier without re-ranging the component against the firm's own ground is handing itself the same room: agreement with the supplier compounds while evidence about the firm's capability does not.

The world corroborates at three strata: Fine and Whitney's *"dependency for that knowledge"* as the most risky kind (Weinstein 2004); Reitzig and Wagner's *"loss of expertise within the firm, reduced ability to detect and respond to competition"* (via Klein and Mazzoni 2025); and Hammerstein and Noë's fungi that *"would probably have lost the ability to directly acquire carbon"* under market competition. The first two share a pool; the third is independent.

**Refuter:** a firm that loses the ability to make a component while its internal readings of internal cost, quality and capability remain fresh, unpooled and ground-verified. That breaks F7's mechanism.

### F8: A make-capability changes valence when the residual changes

**Mode: `specified`. Domains D2, D3. Status: triangulated (Fig 11 and Fig 12, low overlap: habitat relations vs composition structures).**

> **"The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."** (Fig 11 :50)
> **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** (Fig 12 :119)
> **"The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."** (Fig 11 :73)

An in-house line is a catalyst if it regenerates across product generations and a spent part if it does not, and nothing in the line's description records which. When the component's role changes, the formerly winning make-capability can become the thing that prevents the next win. Fine and Whitney's record corroborates operationally: *"no outsourcing or architecture modularity policy that seems suitable at a given time is likely to remain suitable, due to such upsetting factors as technological advances, regulatory changes, and other economic shifts"* (Weinstein 2004, reporting Fine and Whitney). Hammerstein and Noë 2016 corroborate at the biological stratum with the acacia's *"budget cut"* on *"self-made defences"* once the ant defenders are imported: the capability to self-defend is traded away when the residual changes.

**Refuter:** a make-capability whose measured value is invariant across a documented change of what the market rewards. If no such change of valence can be found anywhere, F8 weakens to `general`.

### F9: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| R is per component, never a corporate average | general | Fig 1 :19, :22 | figure-derived |
| The counter and the market are the anchors | general | Fig 2 :29, :30 | figure-derived |
| Make composes inside the closure; buy imports from a differing closure | general | Fig 6 :21, :22, :23 | figure-derived |
| Import is gated and debited against independence | general | Fig 6 :12, :13, :24; Fig 8 :50 | figure-derived |
| The boundary is a union of three conditions | general | Fig 9 :54, :55, :57 | figure-derived |
| A supplier surplus needs differing closures | general | Fig 8 :45, :32 | figure-derived |
| Losing the make-capability is channel failure | specified | Fig 10 :24, :26, :29; Fig 7 :12, :13, :36 | triangulated F7 |
| A make-capability changes valence with the residual | specified | Fig 11 :50; Fig 12 :119 | triangulated F8 |
| The break is usually at vocabulary and carry | specified | Fig 3 :20, :24, :27 | single-source |
| Which specific component to make or buy | not stated | none | gap: framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. A firm adds a genuinely new atom to its capability by internal composition alone, with no contact with a differing closure (breaks F1, Fig 6 :21-23).
2. A supplier whose component expands the firm's reach with zero independence debit and no coordination cost, or a wrong import that cost less than starting from primitives (breaks F2, Fig 6 :24).
3. An averaged make-or-buy ratio that predicts prospectively and per component which named slot will fail (breaks F3, Fig 1 :19, :22).
4. One intervention that restores all three conditions in all failure types and leaves no categorically different residue (breaks F4, Fig 9 :57).
5. A sourcing decision validated solely by internal agreement that survives an active-rivalry test with no correction (breaks F5, Fig 2 :29, :35).
6. A supplier whose closure is identical to the firm's that still produces a durable surplus (breaks F6, Fig 8 :45).
7. A firm that loses the ability to make a component while its internal readings stay fresh, unpooled and ground-verified (breaks F7, Fig 10 :24-29).
8. A make-capability whose measured value is invariant across a documented change of reward (breaks F8, Fig 11 :50).
9. Fig 6's idempotence fails inside a closed set, or Fig 13's six terms are derived from five of them (breaks the figures themselves, not just this reading).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until a ground measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of firm boundaries (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Keep the three conditions separate in every report. A blended "make-or-buy score" is a pooled reading (Fig 10 :26) and destroys the diagnostic.
3. Ask, at each component slot, which link the chain stops at and whether that was measured (Fig 3 :29). Do not fund above the break.
4. Treat a supplier offer as an import with provenance and a shadow test, not as a free head start (Fig 6 :12-13, :24). A head start comes down; a recording carried upward is a description of one occasion (Fig 4 :22, :25).
5. Record the bonds as well as the atoms. Two firm component lists with the same atoms can be isomers with different behaviour (Fig 12 :117).
6. Use the economics and strategy literature as one budget filter and as one corroborating witness, not as the verdict. Klein, Mazzoni, Coase, Williamson, Fine and Whitney draw on overlapping pools (Fig 2 :31, :40). Hammerstein and Noë is the genuinely independent witness.
7. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.
8. Stop at the shape. Do not name which component a particular firm should make; the framework returns *"a kind of thing, never the answer itself"* (Fig 9 :32).

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, and the three essays *The Library of Babel*, *The Recursive Self-Improvement Trap* and *The Hard Problem is About Source* (all fetched 2026-11-22).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish and records the lineage. This governs section 5's stop.
- The source essay confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Attempted to apply Fig 13's six physical terms to "component atoms" | **Retracted, strain S1** | Only fit by renaming a supplier as a network and a tool as energy. Re-census: Fig 13 governs closure logic and the honest stop, not physical product composition |
| Read transaction-cost economics as the verdict | **Retracted at record level** | TCE is a world frame. It is one witness in one pool, and Fig 2 :29 puts the market, not the theory, in the anchor seat |
| Treated "core competence" as a nameable domain | **Excluded, X1** | No anchor independent of the market verdict. X1 is a candidate binding, not a domain |
| Treated the "many shades of gray" literature as evidence for a single hybrid rule | **Narrowed to a filter** | Fig 9 :60; it describes the option set, not which option pays |
| Read "no single best outsourcing policy" as a general law of firms | **Narrowed to `specified`** | It is a structural claim; no ground measurement pays for the firm-level version here |
| Wanted to name "transaction cost" or "core competence" as the framework's answer | **Retracted at record level** | Fig 9 :32 returns a kind of thing, never the answer. These are business-pool bindings, recorded as such |
| F9 row "which specific component to make or buy" | **Marked `gap`** | The essay's metamerism rule: an instrument that reads a result *"cannot comment on the source"*; what is owed is a discriminator, not a name |
| F1 "decisive" in an early draft | **Downgraded to triangulated** | Fig 6 and Fig 13 are two figures, but both come from one framework; triangulation here means low topical overlap, not independent evidence pools |

**Strains sent to the log:** S1 (Fig 13 applied to physical product composition), resolved by re-census; S2 (calling the supplier contract "the ground" while the quoted price plainly moves), resolved by Fig 2 :29-30 and Fig 11 :73: the habitat updates, the ground settles; the anchor is realized total cost and delivery, not a quote. No unresolved strain after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of composability, import surplus and capability retention, each with its own loop and instrument.
2. **What is the anchor?** The counter and the market, named in Fig 2 :29. Not strategic-importance opinion, not internal agreement (Fig 1 :27).
3. **Is the answer in the firm alone?** No. Fig 11 :39, :40. A boundary is a relation between two closures, not a property of one.
4. **Why buy at all?** Only import moves the wall (Fig 6 :14, :21, :23), so a supplier can carry an atom the firm does not hold; two frames together reach what neither reaches alone (Fig 8 :45).
5. **Why is buying not free?** Source gate, shadow test and independence debit (Fig 6 :12-13, :24); a wrong atom costs more than starting from primitives.
6. **Why does the make-capability disappear?** Channel decay, not ground decay (Fig 10 :24-29); a chain handed the same room stops travelling (Fig 7 :36).
7. **What can be said at the stop?** A shape and eight falsifiers. Not which component a named firm should make. Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

---

## 8. Updated verdict

The shape survives: **a component belongs inside the firm when it is reachable and settles under internal composition, and belongs outside when an import from a differing closure produces a gated surplus that survives the independence debit, with the make-capability retained over time so the channel stays reachable; these are three conditions with three different failure modes, kept separate and never averaged.** Which specific component a particular firm should make is a `gap`, not a silence: the framework returns a shape, and the instrument that would name the boundary is not held here. Mode `specified`. No world source was allowed to flip a verdict; the economics and strategy sources were reduced to one witness, and the one genuinely independent corroboration, Hammerstein and Noë 2016, corroborates the mechanism at a different stratum rather than the firm-level fact. No unresolved strain remains after re-census.
