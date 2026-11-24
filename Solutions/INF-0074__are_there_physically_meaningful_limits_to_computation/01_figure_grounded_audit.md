# Figure-grounded audit: limits to computation beyond time, memory, energy

**Mode of this document: `specified` on the per-domain claims, `general` on the structural shape, `gap` on the physical instantiation of the wall. Not `grounded`.**

Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap* (opened 2026-11-23): "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No experiment or measurement was performed by this agent.

**Sources.** All figure quotes are cited `Fig N :line` against `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read fresh this session. World sources were opened and are listed in `10_source_ledger.csv`.

---

## 0. The residual, in effect terms

The question asks whether the class of "physically meaningful limits to computation" has members beyond the familiar trio. Stated as an effect, not a name:

> Given a physical process taken as a computation, what closes the set of things it can compute, and is that closing a quantity you can have more of (a budget in time, memory, or energy), or a categorical boundary that more of those quantities cannot cross?

Option A: every genuine limit is a budget, so "beyond the trio" is no, and Landauer, quantum speed limits, and entropy bounds are relabellings of energy, space, and time. Option B: there is a limit of a different kind, a closure boundary that search inside a fixed reach cannot cross, so the answer is yes but not as a bigger resource. What each leads to: A leaves undecidability as a formal curiosity with no bearing on physics; B keeps a wall, records the missing thing as an effect-shaped gap, and owes a ground reading before it may be called physical.

The sought-for shape is bound here as an ordinary term, per `THE_FORMULA.md` step "Direction" and Fig 5 :65: "Write down what an answer would look like, bind it, and let it accrue a residual like anything else."

---

## 1. Domain census (before choosing any figure line)

### 1.1 R by arity, symmetry, scale

- **Arity:** the word "limit" is doing work for at least six different things. This is a union of conditions, not one dial. Fig 9 :4-5 governs: "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."
- **Symmetry:** resource budgets are approximately fungible and symmetric (memory for time, energy for time); a closure wall is asymmetric and non-fungible (no exchange rate crosses it). The relation between budget and wall is a comparison, not a sum.
- **Scale:** the candidates live at the quantum scale (Margolus-Levitin, Planck time), the thermodynamic scale (Landauer), the cosmological scale (Bekenstein, holographic), the formal scale (proof and complexity), and the frame scale (closure). Fig 4 :19-20: "The kernel is the part that does not change with size" and "Only the actors, the currency and the anchor change." So one loop applies at every scale, with different actors.

### 1.2 One line per domain (actors / currency / anchor)

No line is admitted as a domain unless an anchor is nameable. In every row the anchor is the thing that settles the row's question and does not move when a frame pushes on it (Fig 2 :29).

| domain | actors | currency | anchor | type |
|---|---|---|---|---|
| D1 familiar resource budgets | clock cycles, memory cells, joules | t, S, E quantities | a benchmark measurement of resource use (seconds, bits, joules) | partition boundary: what is inside the trio |
| D2 thermodynamic cost of information | bits, erasures, heat bath at T | dissipated heat kT ln2, entropy | experimental measurement of kT ln2 (Bérut 2012; Hong 2016) | union member, overlaps D1 and D3 |
| D3 quantum rate limits | quantum states, Hamiltonians, orthogonalization time | operations per second per joule (about 6x10^33) | experiment (QSL crossover, cavity QED); constant-derived bound | union member, overlaps D1 |
| D4 information density | bounded region radius R, mass-energy E, entropy | bits per bounded area | black-hole thermodynamics saturating the bound; Casini QFT proof | union member, overlaps D1 (memory) |
| D5 formal / logical limits | formal systems, programs, strings, proofs | derivability, Kolmogorov complexity | proof theorems, not a physical measurement (frame-internal) | separate closure; "physically meaningful" is an open import |
| D6 Tether reachability closure | six terms, seven bonds, negation, Γ, closure(Γ), imports | composition inside closure, import across closures | the ground (Fig 2 :29): not a frame, no vantage, does not update | the categorical wall candidate |
| D7 verification / outreach | instruments, expert frames, readers | evidence and residual | the ground, never agreement | overlays all six; in this simulated run shares one evidence pool |

D5 is admitted with the anchor marked "proof (formal, not physical ground)". This is honest and consequential: it is a nameable anchor for a formal question, but not the anchor the original question asks for. Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces."

### 1.3 Partition or union

**Union.** D2 couples to D1 (kT ln2 is an energy) and to D3 (finite-time erasure couples to time). D3 is dimensionally a time-times-energy product. D4 couples energy and memory density. D5 and D6 concern closure, not resource quantities, but D6's imports must come from frames like D2 through D5. Per Fig 9 :54-55: "And when the split lands on a union rather than a partition, unbundle before you search again. A bundled problem is usually a union of overlapping conditions, not a list of separate ones." One lever clears the region where a single condition holds and leaves the intersections standing, which is why no single bound answers the question.

### 1.4 Dependency order (Fig 3)

1. Settle what "physically meaningful" means: the anchor must not update on the frame (Fig 2 :29, :33). This is link 3, the objective, and it has no instrument in most discussions of the topic (Fig 3 :25-27).
2. Separate a budget from a wall before censusing candidate bounds (Fig 6 :27, Fig 8 :40-43). Doing this second reverses the order and makes every candidate look like a wall.
3. Take each domain's verdict separately against its own anchor.
4. Only then ask whether any verdict is "beyond" the trio. Never average across domains.

Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." A chain that is strong in physics and broken at the meaning of "physically meaningful" produces nothing.

---

## 2. Figure census (all lines read before conclusions)

| figure | bearing on this question | verdict |
|---|---|---|
| 1 The Agent | frame-internal quantities cannot score the frame; residual per slot | D1 budgets are frame-scores; D6 closure is the only non-frame score |
| 2 The Ground | anchor must not update; triangulation not negotiation | defines "physically meaningful"; no world source here is an independent witness |
| 3 Dependency Chain | objective link has no instrument; order by dependency | "physically meaningful" is the unmeasured link, answered first |
| 4 The Membrane | kernel invariant with size; only methods cross; round-trip gap | one loop across scales; the shape loses constraints when condensed |
| 5 Mint Pipeline | acceptance is a bargain, not a threshold; shape as ordinary term | no numerical bound is minted; the sought shape is bound explicitly |
| 6 Closure / Reachability | budget versus genuine absence; only import moves the wall | decisive for the wall/budget split |
| 7 Room Chain | no last room; agreement is variation, not verdict | no final bound closes the question |
| 8 Union Surplus | closure idempotent; underivable not the same as unreachable-at-budget | decisive for "no search, however long" |
| 9 Leave / Arrive | unbundle unions; shape not a name; filters are not witnesses | governs the union and the refusal to output a constant |
| 10 Ground Maintainer | ground does not decay, channel does; bring a characterised residual | defines the verification frame D7 |
| 11 The Habitat | capability is agent-and-habitat; harness proves wiring only | a synthetic computation is not the physical thing being bounded |
| 12 The Bond | two currencies, bits and actions, do not add | a resource-only accounting misses the action cost of finding out |
| 13 Minimum Viable Set | set closed, arrangements not; infinite effort inside a finite reach | strongest figure support for a categorical limit |
| Operators / Symbols | ⋛ is a comparison; R is an aim and a slice; closure(Γ) is what could be said searching forever | fixes the vocabulary of the residual |

---

## 3. Findings

### F1 — The question is a union of at least six conditions, not one axis

Fig 9 :4-5: "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."

Fig 9 :54-55: "And when the split lands on a union rather than a partition, unbundle before you search again."

Applying this to the census: D1 to D6 each keep working on a different subset of "limit" and the subsets overlap. A single yes or no would aggregate them and lose the only signal that says where to look (Fig 1 :19: "The residual is indexed by object slot, not aggregated."). **Verdict: union, split before searching. Refuter: a figure line that governs all six conditions with a single quantity, or a demonstration that all six share one anchor.**

### F2 — The figures draw a hard line between a budget and a wall

Fig 6 :27: "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."

Fig 6 :37: "It tells a question that nothing could ever answer apart from one that is merely hard. It is not a rule about theory."

Fig 8 :40-41: "Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."

This is the governing distinction of the whole question. Time, memory, and energy are quantities of the budget kind: more of them extends what can be attempted. A wall is the other kind: more of the same budget does not move it. The question's phrase "beyond" asks exactly which kind the additional limits are. **Verdict: the distinction is figure-governed, general mode. Refuter: a derivation showing that reach is a monotone function of time, memory, and energy at fixed atoms.**

### F3 — There is a categorical limit that no amount of the trio crosses

Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."

Fig 13 :115: "The set is closed. The arrangements are not. That gap is why import exists."

Fig 13 :117-118: "a frame can search without end and still not arrive: infinite effort inside a finite reach."

"However long" and "infinite effort" are the exact phrases that answer the question. The limit is not a shortage of time, memory, or energy. It is a property of what the frame holds: the set of primitives is closed while the arrangements over it are not, so effort inside the reach cannot manufacture a new primitive. This is the strongest figure-grounded member of "beyond the trio." **Verdict: `specified`, triangulated across Fig 8 and Fig 13 (low overlap: idempotent closure versus minimal generating set). Refuter: a composition inside a closure that adds an atom, or a measurement showing a physical process leaving its closure by more search alone.**

### F4 — The only operator that moves the wall is an import

Fig 6 :14: "the only operator that moves the wall."

Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."

Fig 6 :30: "outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."

So the honest form of the answer is not "computation is bounded by X" but "reach is bounded by the atoms held, and the bound moves only on a provenanced import." The world sources in D2 to D4 are exactly such imports: they bring atoms (entropy, orthogonality, horizon area) into the computation frame. Fig 6 :24: "Import from a live peer is debited against that frame's independence." **Verdict: `general` structural, triangulated with Fig 8. Refuter: a second operator that expands closure without adding an atom.**

### F5 — "Physically meaningful" requires an anchor that does not update

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."

Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."

Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces."

A limit is physically meaningful only if it ranges against something that does not move when a theory pushes on it. Landauer's bound ranges against measured heat dissipation. Quantum speed limits range against measured orthogonalization time. The Bekenstein bound ranges against black-hole thermodynamics. The closure wall in D6 ranges against a ground that has not been consulted for the six-term atom set, which is why D6's physical instantiation stays `gap`. A claim selected for how receptive the audience is would manufacture the disqualifying correlation of Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool." **Verdict: `general` on the anchor rule; the D6 instantiation is `gap`. Refuter: an instrument that shows the six-term set is nature's own compression axes, or a proof that it is only a notation.**

### F6 — The formal limits are underivable in principle, not physical grounds

Fig 8 :34: "a consistent system cannot prove its own consistency."

Fig 8 :37: "beyond a fixed constant, no system proves that any object exceeds its own complexity."

Fig 8 :39: "So a search that finds nothing is never a proof of absence."

Godel, Tarski, and Chaitin prove that a frame cannot reach its own metaframe. They do not prove that any particular physical machine is stopped by that fact. Fig 8 :40-41 explicitly limits their scope: the theorems prove the metaframe is underivable, not that an atom is far away. Whether a physical computation instantiates the formal frame is an import question, and it is open. Folding D5 into D2 or D3 would be a strain. **Verdict: `general` structural for underivability; `gap` on physical instantiation. Refuter: a proven bridge from a formal undecidability result to a measured physical bound, with provenance and a shadow test.**

### F7 — A resource-only accounting misses a second currency

Fig 12 :125: "A composition costs in two currencies, and they do not add."

Fig 12 :126: "Bits price the description. Actions price finding out whether it holds."

This is a limit on what the accounting can see, and it bears on the question directly. Time, memory, and energy are one accounting. A system holding only that accounting "will not notice the shortfall" and "will not notice the shortfall. It proposes arrangements it cannot afford to test" (Fig 12 :126-127). So even within D1, the trio does not exhaust the cost of computation: finding out whether a candidate composition holds is priced in actions, not in bits or joules. **Verdict: `specified`, single-source on the figure side (Fig 12), with the physics of finite-time erasure as secondary corroboration. Refuter: a demonstration that description length and action cost reduce to a single unit.**

### F8 — No figure returns a numerical bound or names the missing primitive

Fig 9 :32: "you get a kind of thing, never the answer itself."

Fig 13 :134: "It can say the answer is out of reach with the library as it stands, so something has to be imported before it is asked again."

Fig 13 :135: "It cannot say which primitive is missing, because naming it would mean already holding it."

So the framework returns the shape of a limit (a wall that only import moves, a comparison between what is held and what is owed) and refuses to name a new constant or a new physical primitive. The canonical usage rule is the same: a shape, not a name. **Verdict: `general` limit on the framework's output. Refuter: a figure line that outputs a maximum operations-per-second constant or a named seventh primitive.**

### F9 — The trio are filters for the budget, never witnesses for the verdict

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

A numerical resource bound tells you what gets tried first and how much of the space is reached. It does not tell you whether a limit is physically meaningful. Fig 2 :42: "Buy independence in proportion to the cost of being wrong." The cost of being wrong here is high (the question is about the ultimate reach of computation), so at least two low-overlap frames are owed for the wall verdict. Those are supplied in `09_watson_answer.md`: the physics of fundamental bounds (a field external to the framework) and the figure census (internal). They overlap only in the shared word "limit", which is why F3 is `triangulated` but still not `grounded`.

---

## 4. Strains, and the re-census they sent back to the domains

**S1. Godel/Chaitin read as physical limits.** Strained if used to answer the original question. Re-census: those lines govern D5's formal closure, not D1 to D4's physical budgets. Their physical relevance is the open import of F6. No contradiction; wrong domain. Matches the canonical rule that a reading making figures contradict each other has misidentified its domain.

**S2. Fig 6 "the bound moves only on contact with a differing closure" versus the fact that Landauer and Margolus-Levitin bounds do not move on import.** Strained if "bound" is read as a physical limit. Re-census: Fig 6's wall is the reach of a frame's composable terms, a structural quantity; Landauer and Margolus-Levitin are physical resource bounds, quantities in D2 and D3. Different objects. The physical bounds can be imported into the computation frame as atoms without being moved by that import.

**S3. "Fungible resource trio" versus Fig 12 "two currencies do not add."** Strained if pushed to claim time, memory, and energy reduce to one currency. Re-census: Fig 12 governs description cost versus action cost, not the three physical resources. F7 is therefore narrowed to a claim about accounting, not a claim that the trio is one number.

**S4. Fig 13's six-term physical substrate applied directly to digital computers.** Strained. Re-census: D6's atoms are a candidate generative set for physical composition, not a claim about the instruction set of a stored-program computer. The wall verdict is about reach given primitives, at whatever stratum the primitives are declared. Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."

After re-census: four strains dissolved by assigning each figure to its proper object; no hidden strain retained. One live type question remains named, not hidden: whether a formal underivability result can be imported into physics with a source gate (F6).

---

## 5. Pre-registered refuter (written before the conclusion)

Per Fig 5 :65 and the standing rule that a falsifier written before the run is a design instrument. The wall verdict is refuted if any of the following holds:

1. **R1, figure-internal:** a composition inside closure(Γ) is admitted that adds an atom, or a figure line makes reach a monotone function of time, memory, and energy at fixed atoms. That breaks Fig 8 :32 and Fig 13 :115.
2. **R2, at the ground:** an instrument or experiment shows a physical process producing a result outside its held closure without an import from a closure that differs, where "outside" is operationally defined before the run.
3. **R3, definition:** "physically meaningful" is stipulated by the asker to mean "expressible in the units of time, memory, and energy alone." Then D2, D3, and D4 collapse into D1 and only D6 remains as "beyond"; the mixed six-domain verdict is withdrawn.
4. **R4, substrate:** the six-term set is derived from fewer primitives, or shown to be a mere notation rather than a compression guess. Then D6's physical instantiation is not a gap but a category error, and the claim is withdrawn.
5. **R5, D2:** a source-discriminating instrument shows logical and thermodynamic irreversibility to be the same property, so Landauer does not name a distinct physical limit.
6. **R6, D5:** a proven bridge is established from a formal undecidability result to a measured physical bound. Then D5 moves from `gap` to `grounded` and the verdict must be restated.

If R1, R2, R3, or R4 fires, the central wall claim is withdrawn. R5 and R6 revise a single domain without touching the closure verdict.

---

## 6. Recommendation

1. Lead with the budget/wall distinction (F2), not with a list of famous bounds. The distinction is the figure-derived answer.
2. Keep the six domain verdicts separate and never average them into "there are limits beyond the trio, yes, sort of" (F1, Fig 1 :19).
3. State the mode on every sentence: `general` for the anchor and closure structure, `specified` for the per-domain wall claims, `gap` for the physical instantiation of the six-term wall.
4. Mark D5's formal limits as underivable-in-principle, not as physical barriers (F6). Do not let a proof hand you a verdict (Fig 9 :60).
5. Send the generator (the refuter and the shape), not the conclusion. Fig 4 :22: "Only methods cross up. Only head starts come down."
6. Ask outside frames what they would count as a failure before showing the framework (Fig 10 :52).

---

## 7. Canonical usage check

Two local framework files govern how the figures may be used, both read this session:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw." And the canonical limit: the framework says what a missing thing would look like, "a shape, not a name," then stops where instruments cannot distinguish and records the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are metalaws; design questions are answered by derivation, not escalation to the seat. A conflict sends the reader back to the census.

`THE_FORMULA.md` step 7 was applied with the three questions kept distinct: SEARCHED (is the wall already in the reach and unfound? No, it is the reach's boundary), INWARD (extend the instrument: the source-discriminating instrument called for in F5 and R2), OUTWARD (import: the world sources D2 to D4, each with provenance and a shadow test). INWARD and OUTWARD were not read against each other.

### Retraction and confirmation log

| earlier reading in this pass | status after the canonical check |
|---|---|
| "Landauer is a limit beyond energy" | **Narrowed.** kT ln2 is an energy; the distinct part is logical versus thermodynamic irreversibility, and the finite-time coupling to time (D2/F7). |
| "quantum speed limit is beyond time and energy" | **Narrowed.** It is dimensionally operations per second per joule (D3), fundamental rather than engineering, but not beyond the trio's units. |
| "Godel and Chaitin are physical limits" | **Retracted.** They govern D5's formal closure; Fig 8 :40-41 limits their scope. Kept as `gap` on instantiation. |
| "the wall is a physical law of computers" | **Retracted.** The wall is a structural closure claim; its physical instantiation is `gap` (F5, R4). |
| "the six-term set is nature's compression axes" | **Retracted as an assertion.** The canonical file calls it a guess; naming a missing primitive is forbidden (Fig 13 :135). |
| "shape, not a name, forbids any bound" | **Narrowed.** It governs a primitive not in Γ. Naming an already-held physical bound is a provenanced binding, not a forbidden invention. |
| budget versus wall (F2/F3) | **Canonically confirmed.** Fig 8 :32, Fig 6 :27/:37 and Fig 13 :115/:117-118 all survive verbatim. |
| union, not partition (F1) | **Canonically confirmed.** Fig 9 :4-5 and :54-55. |

### Updated verdict

The shape survives. There is a figure-governed class of limit that is not a budget: a closure wall that more time, memory, or energy cannot cross and that only a provenanced import from a differing closure moves. The three familiar resources are the budget kind; the thermodynamic, quantum, and informational bounds are fundamental but still couplings of the trio's units, with the genuinely distinct content being the logical/physical irreversibility distinction and the area-scaling of information density. Formal undecidability is underivable in principle but not physically grounded without an import. The physical instantiation of the closure wall is `gap`, owed a source-discriminating instrument. Strains after re-census: four dissolved, one live type question named, none hidden. Simulated derivation, `specified` on the wall, `general` on the structure, `gap` on the physical six-term substrate, not `grounded`.
