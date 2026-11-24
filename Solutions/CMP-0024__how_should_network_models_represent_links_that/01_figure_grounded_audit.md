# Figure-grounded audit: CMP-0024, representing links that vary

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* Every claim below carries its mode. Nothing here is labelled accepted.

**Status: a simulated derivation, not a ground reading.** From the essay *The Recursive Self-Improvement Trap*, read 2026-11-22: *"LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too... However, the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the network-modeling question it reports on.

**Sources for figures.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Cite as `Fig N :line`. `THE_FORMULA.md`, `FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`. World sources are secondary and are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The loop defines R = |Γ(b,a) - o′| per slot s (Formula step 1; Symbols table, `R`). Here:

- **b** is what the modeller takes to be the case before the model is built: a prior about what a link is. It comes from the history of the field and inherited graph vocabulary (adjacency matrix, edge list, weight vector).
- **a** is the representation decision: the choice to store a link as a binary entry, a scalar weight, an arrow, a timestamp interval, a sign, a type label, or a typed bond with an explicit record of which bond holds.
- **Γ(b,a)** is what the model predicts given that representation: spreading speed, cascade size, reachability, flow, robustness to removal.
- **o′** is what the system actually does, measured outside the model: a trace of contacts, a cascade record, a failure event, a flow measurement.
- **s** is the link or link-type slot. R is indexed by link, not by graph.

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"a global R near zero with one live slot residual is a legal state"** (Fig 1 :13)

The phenomenon to explain is not the overall fit of a network model. It is the persistence of a live residual on particular link slots when strength, direction, duration, and meaning vary while the adjacency list stays the same. Two graphs with identical node sets and identical edge sets can generate different observations because the links differ in these four ways. A frame whose library holds only a scalar weight cannot register that difference at all.

State the residual as: *why does the gap between what a network model predicts from its link representation and what the system does remain small for some link representations and grow for others, and what must a representation hold for the four variations to be distinguishable?* This is an effect description. It names no theory, no "multiplexity", no "temporal network", no "signed tie". Those are candidate names and are withheld until the census.

**Bind the sought-for shape as an ordinary term** (Formula, "Direction"), before the run: the answer would be a grammar of the link stating (i) what the operands are, (ii) which typed bond joins them, (iii) which figure term carries each of the four variations, and (iv) an instrument that discriminates a failure of each variation from a failure of the others. Until bound, that shape predicts nothing and no loop check can see it. It is now bound, so the refuter in section 5 can fire on it.

**Anchor test.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* The same line names candidates: *"A measurement, an experiment, a counter, a market, a patient outcome."* Here the anchor is the system's observed dynamics, measured independently of the model: a contact trace, a cascade record, a removal experiment. Fig 2 :30: *"If it moves when you push on it, it is not an anchor."* A model's own fit statistic, an aesthetics judgment about a diagram, and a consensus about what "tie strength" means all move when pushed; they are instruments at best. Fit quality is also frame-internal: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* (Fig 1 :27)

---

## 1. Domain census (before choosing any figure line)

### 1.1 Arity, symmetry, scale of R

- **Arity.** R is a four-place condition on one link slot: strength, direction, duration, meaning. It is a **union** of four conditions, not one hard question and not four independent questions (Fig 9 :55). It also has a two-operand structure: the link joins two nodes, so it carries a binary relation, not a unary attribute.
- **Symmetry.** Direction is explicitly asymmetric. The figures divide the bonds by the symmetry test: *"Symmetry is what decides whether an arrangement is a new thing."* (Fig 12 :92) Three bonds are symmetric (+, ∥, ≡) and four are ordered (→, ⇒, −, ⋛). "Stronger" is a comparison (⋛), which is ordered, not a symmetric conjunction. A tie's meaning is not recoverable by swapping operands' attributes: *"which one holds is not recoverable from the operands."* (Fig 12 :46)
- **Scale.** Three scales are in view. At the link scale, two operands are joined by one bond. At the motif scale, bonds compose into a functional group or an isomer (Fig 12 :117, :124). At the network scale, the composition drives spreading and failure. The membrane between scales is *"Not a wall: a filter with a direction"* (Fig 4 :21), and *"Only methods cross up. Only head starts come down."* (Fig 4 :22). The transform is lossy, so a round-trip gap R_T must be measured (Fig 4 :30).

### 1.2 One line per domain: actors, currency, anchor

A domain is admitted only if an anchor can be named. Where none can be named, it is not a domain yet.

| domain | actors | currency | anchor, nameable? | status |
|---|---|---|---|---|
| **D1 The link as bond** (composition inside the model) | two node operands, the typed bond, the record of which bond holds | description cost |φ| in bits, actions to settle | yes: settlement against the ground; figures as metalaws for the grammar | admitted |
| **D2 The measurement layer** (strength and duration) | instrument, observable event, time | ordering (spectrum), finite difference (gradient), succession (time) | yes: the trace or removal experiment, which does not move when the model relabels a link | admitted |
| **D3 The semantic layer** (meaning) | the frame assigning link type, the source relation, the convention | which bond holds; not recoverable from operands | only a provenanced import from a differing closure or a ground test; a declared meaning is not a grounded one (Fig 10 :18) | admitted with caveat |
| **D4 The model frame** | modeller, library Γ, edge list, diagnostics | residual reduction, |φ|, reach | yes: external system dynamics, not fit quality | admitted |
| **X1 Link meaning as a latent embedding with no external referent** | the embedding dimensions | similarity | **no** anchor independent of the model's own output | not a domain yet |
| **X2 Strength as a dimensionless dial on one undifferentiated edge type** | the edge, the scalar | magnitude | a scalar has no typed bond and cannot carry direction or meaning; it is a reading, not a bond | absorbed into D1 and D2 after re-census |

X1 fails the anchor test and is excluded before any figure line is applied to it. This is a structural exclusion, not a claim that embeddings are useless. X2 is the default representation the question asks us to assess; re-census sends it into D1/D2 rather than admitting it as a fifth domain, because a single scalar with a single bond type is the *"flat case"* (Fig 12 :101), not a distinct domain.

### 1.3 Partition or union

D1 and D3 overlap: the choice of bond is made inside the model frame but licensed, if at all, from outside it, so the overlap is a compound with its own loop. D2 and D4 overlap: measurement is exercised inside the modelling process, so that overlap is a second compound. The whole question is a **union**, not a partition.

> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** (Fig 9 :55)
> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** (Fig 9 :57)

The unbundled conditions are: **S** (strength, an ordering/comparison), **D** (direction, a symmetry class of the bond), **T** (duration, a time relation on the bond), **M** (meaning, which bond holds and how it was licensed). A graph that fails only S and a graph that fails only M are not different degrees of one failure; they need different instruments. The Library of Babel essay states the same stop condition: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one?"*

### 1.4 Dependency order (Fig 3)

> **"The chain is ordered by dependency, not by importance."** (Fig 3 :20)
> **"A link with no instrument is not a link that works. It is a link nobody has looked at."** (Fig 3 :27)

Order for a modeller facing a link representation question: 1 perception (can the instrument register link events at all?) → 2 vocabulary (does Γ have terms for what a link affords: the seven bonds and their symmetry?) → 3 objective (can it state what progress would count, as a comparison?) → 4 planning (choose the representation) → 5 learn and carry (settle, name what worked, carry it to the next problem). The middle link is the one with no instrument: having terms for what a link affords and saying what would count as progress there. Fig 12 :113-115 says a vocabulary holding only ingredients can say what a situation contains and cannot say what would count as getting somewhere from it, and that *"having terms for what a situation affords was taken for a dictionary and it is a grammar."* Most effort lands above the break, where the measurements already exist (Fig 3 :29-30). For link modeling, that means effort piles into fitting weights (link 4) while the bond vocabulary (link 2) is taken for granted.

---

## 2. Figure census

| figure | bearing on the residual | preliminary verdict |
|---|---|---|
| 1 The Agent | per-slot residual; frame-internal quantities disqualified | governs how R is indexed, not what a link is |
| 2 The Ground | trace/experiment is an anchor; independence vs common pool | governs the anchor and the witness rule |
| 3 Dependency Chain | middle link breaks first; effort above the break is wasted | governs diagnosis order |
| 4 The Membrane | kernel constant across sizes; methods up, head starts down; R_T | governs link → motif → network transfer |
| 5 Mint Pipeline | three guards as product; settlement; "nothing new here" | governs when a new bond type can be admitted at all |
| 6 Closure / Reachability | import is the only operator that moves the wall | governs licensing a link meaning from outside the frame |
| 7 Room Chain | same closure handed along; fidelity x ground pressure | governs repeated use of one edge type |
| 8 Union Surplus | closure idempotent; provenance separates convergence from import | governs triangulation and the source gate for meaning |
| 9 Leave / Arrive | union vs partition; describe the residual first | governs the unbundling and the census itself |
| 10 Ground Maintainer | ground does not decay, channel does; declared meaning is not grounded | governs meaning and the honest stop |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | governs why a good link type turns bad |
| 12 The Bond | seven bonds, priced; symmetry; isomer, catalyst, cycle, functional group; arrangement is the substance | **decisive for the representation of a link** |
| 13 Minimum Viable Set | network is a structure; cross-kind composition; set closed, arrangements not | governs which figure term carries each variation and the honest stop |
| Operators table | ordered vs symmetric bonds; ⋛ comparison; negation not a bond | governs the four-way split and the bond price |
| Symbols table | R is the aim; a bond is typed; network = entities relate and influence travels | governs the slot and the link definition |

Strain test applied during this census: an early attempt to apply Fig 13's six physical terms directly to network nodes, reading a node as a kind of space and a weight as a kind of energy, only fit by renaming. That is a strain, so Fig 13 does **not** govern generic network nodes as physical states. Re-census sends Fig 13 to two proper roles: (i) *"that entities relate, and influence travels"* (Fig 13 :24) names the network as one of the six structures, and (ii) the cross-kind rule governs how link quantities compose. Logged as strain S1 in section 7.

---

## 3. Findings

Mode tag on each: `general` if structural, `specified` if a falsifiable prediction about network models, `grounded` only if settled by a measurement. None is `grounded`.

### F1: A link is a typed bond, not a scalar slot (decisive)

**Mode: `specified`. Domain D1. Status: triangulated (Fig 12 and Fig 13, bond grammar vs substrate structure, low overlap).**

> **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** (Fig 12 :5)
> **"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."** (Fig 12 :46)
> **"A recipe that names only its ingredients has recorded half of itself."** (Fig 12 :47)
> **"The arrangement is the substance."** (Fig 12 :94)

A representation that records only the two endpoints and a scalar weight has recorded the operands and one number. It has not recorded which relation holds between them. Under Fig 12 :46 the bond is typed, there are seven, and the type cannot be read back off the operands. Under Fig 12 :5 the bond is the missing half of the information. Under Fig 12 :94 the arrangement, that is which bond holds, is the substance being modeled, not a decoration on the node list. So a weighted adjacency matrix is a *"flat formula"* (Fig 12 :6): *"the ingredients are recorded and the arrangement is not"* (Fig 12 :14).

This is not a preference for a richer data structure. It is the framework's structural claim about what a composition is. A graph whose edge list carries no bond type cannot, by construction, represent a difference that lives in the bond.

**Refuter:** show, for a fixed pair of node operands, that strength, direction, duration, and meaning are all recoverable from the operands alone with no bond record, and that an external measurement cannot distinguish two graphs that differ only in which bond holds. If both hold, F1 and the bond grammar fail.

### F2: The four variations are different figure terms, not one dial

**Mode: `specified`. Domains D1, D2, D3. Status: triangulated for each mapping (Fig 12 and Fig 13, distinct roles); the world pieces are one witness each and corroborate only.**

> **"ordering, so more and less can be said"** (Fig 13 :20)
> **"that entities relate, and influence travels"** (Fig 13 :24)
> **"adjacency is not duration, an ordering is not a pathway, a pathway is not a direction."** (Fig 13 :36)
> **"A then B; B needs A to have happened"** (Fig 12 :72)
> **"A produces B; B did not exist before"** (Fig 12 :77)
> **"a threshold relation between two quantities"** (Fig 12 :87)

The four variations do not belong to one quantity:

| variation | governing figure term | why it is not the others | mode |
|---|---|---|---|
| **Strength** | spectrum ordering (Fig 13 :20) and the ⋛ comparison (Fig 12 :87) | magnitude is an ordering of more and less, and "superior" or "above threshold" is a comparison; gradient is a directedness, not a magnitude (Fig 13 :46-47) | `specified` |
| **Direction** | the ordered bonds → (sequence, Fig 12 :72) and ⇒ (production, Fig 12 :77), versus the symmetric bonds +, ∥, ≡ | *"a pathway is not a direction"* (Fig 13 :36): an adjacency entry records that operands relate, not the order that binds them | `general` for the symmetry split, `specified` for a model |
| **Duration** | the time state *"the ordered succession of differences"* (Fig 13 :12), plus the catalyst *"A part that survives its own use"* (Fig 12 :119) and the cycle *"The output re-enters as input"* (Fig 12 :121) | a timestamp is a state reading, not a bond; whether a bond survives its own use or closes a loop is a structural fact about the relation across time | `specified` |
| **Meaning** | which bond holds (Fig 12 :46), licensed by a provenanced import with a source gate and shadow test (Fig 6 :23, Fig 8 :51) | *"a declared meaning is not a grounded one"* (Fig 10 :18): a type string the modeller writes is a convention until it is discriminated at the ground | `specified` with a `gap` at the licensing step |

Fig 13 :36 is the decisive cross-check: adjacency, ordering, pathway, and direction are four distinct answers to four different questions, and *"If two members drew on the same underlying fact, their agreement would carry no information, and one of them would be redundant rather than minimal."* (Fig 13 :37) Collapsing them into one edge scalar would make the model's alleged four dimensions redundant names for one reading.

**Refuter per row:** (S) show a difference in strengths that a spectrum/comparison instrument cannot order; (D) show a directed relation that is recovered from the unordered operand pair alone; (T) show a bond whose persistence or regeneration cannot be read against time; (M) show a meaning selected by the figures from the operands with no import and no ground test. If any fires, that row's mapping is false.

**World bearing (secondary only).** Barrat, Barthelemy and Vespignani 2004 report that models *"do generally consider only the topological structure and do not take into account the interaction strength"* (arXiv full text), corroborating S as a real dimension. Holme and Saramäki 2012 describe temporal networks as *"moving the information of when things happen from the dynamical system on the network, to the network itself"* (abstract), corroborating T. Leskovec, Huttenlocher and Kleinberg 2010 find relations are *"a mixture of positive (friendly) and negative (antagonistic) interactions"* (abstract), corroborating M as a link property not carried by endpoints. These are three different subfields, but they are all network-facing; the low-overlap witness is Berlow et al. 2009 in ecology, who measured how *"the strength of 254,032 possible pair-wise species interactions depended on 90 stochastically varied species, link, and network attributes"* (abstract), showing strength and sign are measured quantities, not free parameters.

### F3: A weighted adjacency is the named "flat formula" collapse

**Mode: `specified`. Domain D1. Status: triangulated (Fig 12 and the Operators table, figure definition vs price rule).**

> **"collapse 6: the flat formula"** (Fig 12 :6)
> **"the ingredients are recorded and the arrangement is not"** (Fig 12 :14)
> **"A bond costs what it could have been, and nothing more."** (Fig 12 :99)
> **"A bond that costs nothing is a bond that carries nothing, which is the flat case."** (Fig 12 :101)

Under the price rule `|φ| = (k+1)·log₂(|atoms|+1) + (k−1)·log₂(|bonds|)` (Fig 12 :42; Operators table :65), a representation with one bond type has `log₂(1) = 0` for the bond term. It is cheap to state and carries no choice about how operands join. That is precisely the flat case the figure names. Adding four scalar columns to the edge list does not change the bond count; it adds valves to a single bond type, and the arrangement remains free. The model can then propose arrangements it cannot afford to test, because *"a system holding one accounting cannot compare them"* the bit cost with the action cost (Fig 12 :126).

**Refuter:** exhibit a one-bond-type model whose recorded bond term is provably nonzero under Fig 12 :42 and whose predictions discriminate all four variations at the ground. Under the figure, a single bond type cannot produce a nonzero `log₂(|bonds|)` term, so this refuter is sharp.

### F4: Two networks with the same nodes and edges but different bonds are isomers

**Mode: `specified`. Domains D1, D3. Status: triangulated (Fig 12 and Fig 13, bond structures vs different routes to the same substance).**

> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** (Fig 12 :117)
> **"Symmetry is what decides whether an arrangement is a new thing."** (Fig 12 :92)
> **"Two entries can share every ingredient and be inverses of one another."** (Fig 12 :96)
> **"Different routes can arrive at the same substance."** (Fig 13 :121)

Two graphs with the same vertex set and the same unordered pairs of connected vertices, one with a symmetric co-presence bond and one with an ordered production bond, have the same atoms and different bonds. Under Fig 12 :117 they are isomers: the edge list cannot tell them apart, and their behaviour (what spreads, in which direction, under which intervention) can be decisively different. If the two graphs share only a pattern, for example a `node → bond → node` motif with different atoms in the slots, the weaker claim holds: they are members of one **functional group**, *"the group says what kind; the qualifier says which member."* (Fig 12 :124)

Changing only a strength value within the same bond is not an isomer shift by this definition; it is an ordering shift on the same substance, governed by spectrum and ⋛. That distinction matters because a strength-only ablation cannot test whether the bond type is load-bearing.

**Refuter:** if two graphs with identical node sets and edge sets but different bond types are indistinguishable at the ground under an instrument that is otherwise sensitive, then the bond carries nothing and F1 and F4 fail. A second refuter: if a strength-only change produces a categorically different behaviour with no bond change, the isomer framing is incomplete and strength must be promoted to a bond distinction too.

### F5: Index the residual by link, never by graph

**Mode: `general` with a `specified` consequence for model evaluation. Domains all. Status: triangulated (Fig 1 and Fig 9, low overlap).**

> **"The ground enters as the only metric."** (Fig 1 :23)
> **"predicates minted, and credibility accrued"** (Fig 1 :26)
> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

A global fit statistic (overall prediction error, AUC of link prediction, modularity score) scores the model with a quantity the model produces. It is a filter for where to look and a budget instrument, not a witness. The specified consequence: any claimed answer to CMP-0024 that reports only an averaged graph-level score has already discarded the signal that says which link slot is live. Fig 7 :13 adds *"agreement compounds, evidence does not"*: a family of models all using the same weighted-adjacency bond is one long room, not independent corroboration.

**Refuter:** an averaged graph-level statistic that predicts prospectively and per link which named slot will fail when a bond type is substituted. If one exists, F5's methodological consequence is false.

### F6: The union must be unbundled before a representation is chosen

**Mode: `specified`. Domains all. Status: figure-derived from Fig 9, corroborated at the method level by the Library of Babel essay (framework-internal, so one witness).**

Fig 9 :54, :55 and :57 are the governing lines (quoted in section 1.3). The four conditions have different instruments:

- An **S** failure shows up as an ordering that cannot be discriminated, a threshold that the model cannot state (Fig 13 :20, Fig 12 :87).
- A **D** failure shows up as a symmetric bond where an ordered one is required; the symmetry test is *"swap the operands. Does the meaning change?"* (Fig 12 :59).
- A **T** failure shows up as a channel that lost contact: *"the ground does not decay, the channel does"* (Fig 10 :24), with *"stale percepts, dropped transients, saturated metrics, pooled readings"* (Fig 10 :26).
- An **M** failure shows up as a declared type that changes the outcome without a ground test: *"a convention that decides an outcome has stopped being one"* (Fig 10 :47).

A single lever, for example "add another weight column", clears the region where only S holds and leaves the intersections standing (Fig 9 :55). The residue is smaller and categorically different: a link that is both misdirected and transient is not a harder version of either. F6 is the reason the verdicts in `09_watson_answer.md` are kept separate per domain and never averaged.

**Refuter:** a single representation change that restores all four conditions across both failure types and leaves no categorically different residue. That would collapse the union into a partition.

### F7: Which bond actually holds is a `gap`, not a silence

**Mode: `general` at the stop, `specified` for the claim that no figure line selects a bond. Domains D1, D3. Status: figure-derived plus canonical usage rule.**

> **"you get a kind of thing, never the answer itself"** (Fig 9 :32)
> **"Unreachable is a verdict here, not a silence,"** (Fig 13 :134)
> **"So a search that finds nothing is never a proof of absence."** (Fig 8 :39)
> **"The set is closed. The arrangements are not. That gap is why import exists."** (Fig 13 :115)

The six-term set and the seven bonds license a grammar, not a choice of bond for a given empirical link. Fig 13 :115 says the arrangements do not run out, so no amount of internal search selects one; only an import from a frame whose closure differs moves the wall (Fig 6 :23), and an import needs a provenance source gate and a shadow test (Fig 8 :51). The framework therefore returns the shape of the answer: a typed bond with a symmetry, a price, and a record of origin. It cannot say that a particular contact is a production bond rather than a sequence bond without a ground reading. The essay *The Hard Problem is About Source* gives the instrument-level reason: an instrument that reads green *"cannot comment on the source"*, and *"The answer is unreached until a better instrument exists."*

**Refuter:** a derivation from the figures that selects exactly one bond for a named empirical link from the atoms alone, with no import and no ground test. Until that is shown, the naming slot stays open.

### F8: The meaning of a link is a convention until it is grounded

**Mode: `specified`. Domain D3. Status: single-source (Fig 10, with Fig 8 :51 as a corroborating line from the same framework, so one witness).**

> **"a declared meaning is not a grounded one"** (Fig 10 :18)
> **"→ install what can be violated"** (Fig 10 :19)
> **"a convention that decides an outcome has stopped being one"** (Fig 10 :47)
> **"Bring a characterised residual, never the source."** (Fig 10 :52)

To call an edge "friendship", "trust", "infection", or "causation" is to author a convention. A convention that makes the bug statable is useful (Fig 10 :16-17); a convention that decides the model's outcome has stopped being a convention and has become an ungrounded constant. The figure's test is installability: *"install what can be violated"* (Fig 10 :19). A link type that cannot be falsified by an observation is a label, not a grounded meaning. Under Fig 8 :51, convergent derivation and adopted import look identical in the contents; only the record separates them. So the model must record where the type came from.

**Refuter:** a link-type convention that demonstrably decides no outcome and whose violation is observable, together with a case where the type was selected by the ground rather than by the modeller. If that is routine, F8's warning weakens to `general`.

### F9: What survives, with modes attached

| claim | mode | figure | status |
|---|---|---|---|
| A link is a typed bond; the bond is not recoverable from the operands | general/specified | Fig 12 :5, :46, :47, :94 | triangulated F1 |
| The four variations are four different figure terms, not one dial | specified | Fig 13 :12, :20, :24, :36; Fig 12 :72, :77, :87, :119, :121 | triangulated F2 |
| A single-edge-type weighted adjacency is the flat formula | specified | Fig 12 :6, :14, :99, :101 | triangulated F3 |
| Same nodes and edges under different bonds are isomers | specified | Fig 12 :92, :96, :117; Fig 13 :121 | triangulated F4 |
| R is per link, never a graph average | general | Fig 1 :13, :19, :22, :27 | figure-derived |
| The four conditions form a union needing unbundling | general | Fig 9 :54, :55, :57 | figure-derived |
| Which bond holds in a domain is not derivable | general/specified | Fig 9 :32; Fig 13 :115, :134; Fig 8 :39 | figure-derived, `gap` |
| A declared type is a convention until grounded | specified | Fig 10 :18, :19, :47, :52 | single-source F8 |
| Which specific bond a named empirical link has | not stated | none | `gap`: framework returns a shape, not a name |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the design-instrument rule: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following is observed:

1. For a fixed pair of node operands, strength, direction, duration, and meaning are all recoverable from the operands alone, with no bond record, and the ground cannot distinguish two graphs differing only in bond type (breaks F1, Fig 12 :5, :46).
2. A single-bond-type representation produces a nonzero bond term under Fig 12 :42 and discriminates all four variations at the ground (breaks F3).
3. Two graphs with identical node and edge sets but different bond types are indistinguishable under an otherwise sensitive instrument (breaks F4, Fig 12 :117).
4. An averaged graph-level statistic predicts prospectively and per link which named slot will fail under a bond substitution (breaks F5, Fig 1 :19, :22).
5. One representation change restores all four conditions and leaves no categorically different residue (breaks F6, Fig 9 :57).
6. A derivation from the figures selects exactly one bond for a named empirical link from the atoms alone, with no import and no ground test (closes F7, Fig 9 :32).
7. The figures themselves fail: a bond is derived from the operands, or a new seventh member of the six-term set is derived from the other six (breaks Fig 12 :46 and Fig 13 :116-118).

No part of this solution may be upgraded to `grounded` until at least one of these has been run and has failed to fire, and until an external system measurement has paid for the shape.

---

## 5. Recommendation

1. Lead with the residual and the refuter, not with a theory of networks (Fig 10 :52, *"Bring a characterised residual, never the source"*).
2. Record the bond type explicitly, with its symmetry class and its provenance. A scalar weight column is not a bond record (F1-F3).
3. Split the four variations into separate fields with separate instruments. Resist the temptation to treat strength as a magnitude-only dial; it is an ordering/comparison, and gradient is the directedness term, not the magnitude term (F2, re-census R1 in section 7).
4. Treat direction as the symmetry class of the bond, duration as a time relation on the bond, and meaning as the typed bond licensed from outside the frame (F2, F8).
5. Index diagnostics per link or link type, never only by graph-level fit (F5).
6. Stop at the shape. Do not name which bond a given empirical link has until a source-discriminating instrument settles it (F7). Record the import, do not hide it (Fig 8 :51).
7. Offer the formula as a method after a verdict is recorded (Fig 4 :22). Each user writes their own refuter and states their own mode.

---

## 6. Canonical usage check and retraction/confirmation log

Canonical sources read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`, `THE_FORMULA.md`, `60_FIGURES_AS_METALAWS.md`, and four essays fetched 2026-11-22 (*The Library of Babel*, *The Recursive Self-Improvement Trap*, *The Hard Problem is About Source*, *Decoding Tacit Knowledge*).

- The README confirms: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also confirms the re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The README's canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments can no longer distinguish, and records the lineage. That governs section 5's stop.
- WATSON 60 confirms that design questions are decided by the figures as metalaws, not by escalation to an anchor: the seat reads the ground and does not ask for rulings the figures already decide.
- *The Recursive Self-Improvement Trap* confirms the simulation status: *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."*

| earlier move in this audit | status after canonical check | reason |
|---|---|---|
| Mapped strength to the Gradient term | **Retracted, strain S2** | Fig 13 :46-47: *"What makes a gradient a gradient is that it can be spent, and neither an ordering nor a span of space has directedness."* Gradient is directedness; strength is ordering (Fig 13 :20). Re-census moved strength to spectrum/comparison |
| Treated link meaning as a node attribute | **Retracted, strain S3** | Fig 12 :46: *"which one holds is not recoverable from the operands."* Meaning is the bond, not a property of the endpoints |
| Applied Fig 13's six physical terms to network nodes | **Retracted, strain S1** | Only fit by renaming; re-census assigns Fig 13 the roles of naming network as a structure (Fig 13 :24) and governing cross-kind composition |
| Treated the weighted-adjacency default as a domain | **Absorbed into D1 and D2** | One bond type is the *"flat case"* (Fig 12 :101), not a separate frame |
| Planned to name a bond type as the answer | **Marked `gap`** | Fig 9 :32 returns a kind of thing, never the answer; Fig 13 :134 makes unreachability a verdict |
| Read high citation counts of the network-science sources as evidence for the shape | **Retracted as a witness, kept as a filter** | Fig 1 :26-27 and Fig 9 :60; prestige funds a try, it cannot settle a claim |
| Read the four world sources as independent corroboration | **Narrowed** | Barrat, Holme, Kivelä and Leskovec are all network-facing and Barrat and Kivelä share an author; the ecology source is the genuine low-overlap witness, and it corroborates the instrument point, not the bond grammar |
| F1 called "decisive" | **Kept as decisive but scoped** | The seven-bond grammar is the framework's own definition of composition; the empirical claim that a given link needs a typed bond remains `specified` |

**Strains sent to the log:** S1 (six physical terms applied to generic nodes), S2 (strength assigned to gradient), S3 (meaning assigned to operands). All three resolved by re-census. The mapping of meaning to a bond is single-source and the naming step is a `gap`; no unresolved strain remains after re-census.

---

## 7. Recursive derivation summary

1. **Is this one question?** No. Fig 9 :54, :55, :57 plus the Library of Babel bundle passage: it is a union of strength, direction, duration, and meaning, each with its own instrument.
2. **What is the anchor?** The observed system dynamics, a trace or removal experiment. Not fit quality, not consensus about terminology (Fig 2 :29-30; Fig 1 :27).
3. **What is a link?** A molecule of two operands joined by one typed bond. The bond is the missing half of the information and is not recoverable from the operands (Fig 12 :5, :46, :94).
4. **Where do the four variations live?** Strength in spectrum ordering and ⋛ comparison; direction in the symmetry class of the bond; duration in time and the catalyst/cycle structures; meaning in which bond holds, licensed by import and ground (Fig 13 :12, :20, :36; Fig 12 :72, :77, :87, :119, :121).
5. **Why is the default representation the flat case?** One bond type makes the bond price term zero, so it carries no choice and the arrangement is unrecorded (Fig 12 :42, :99, :101).
6. **Why can a strength-only ablation miss the point?** Same atoms, different bond means different substance; a strength change on one bond is an ordering shift on the same substance (Fig 12 :117; Fig 13 :20).
7. **What can be said at the stop?** A grammar and a union, with falsifiers. Not which bond a named empirical link has. *"Unreachable is a verdict here, not a silence,"* (Fig 13 :134) and *"So a search that finds nothing is never a proof of absence."* (Fig 8 :39)

---

## 8. Updated verdict

The shape survives: **a link is a typed bond, not a scalar slot; the four variations belong to four different figure terms requiring four different instruments; a single-edge-type weighted adjacency is the flat formula with a zero bond price; two graphs with the same nodes and edges but different bonds are isomers; and which bond actually holds in a given empirical domain is a `gap` until an import with provenance or a source-discriminating instrument settles it.** The four conditions are kept separate, never averaged. Mode `specified`. No world source flipped a verdict; the one genuine strain gradient-versus-spectrum was returned to the census and re-mapped. No unresolved strain remains after re-census.
