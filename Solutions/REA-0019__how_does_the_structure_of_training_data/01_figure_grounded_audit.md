# Figure-grounded audit: how training-data structure bounds the learnable reach

**Mode of this document: `general` on the structural laws, `specified` on the application to training corpora, never `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, 2026-11-19, read 2026-11-23): "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post." The essay adds: "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, opened this session), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, the eight essays listed in `05_what_shape_means.md`, and the world sources in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The question asks how the **structure** of training data shapes what a system can learn **in principle**. Restated as an effect:

- The thing to be explained is the *reach*: the set of terms a learner could in principle represent and compose, written `closure(Γ)` in the Symbols table. The reach is not the size of the corpus, the count of parameters, or the number of tokens seen.
- Option A: corpus volume and model scale are the whole story, so reach grows smoothly with quantity.
- Option B: the corpus fixes the **atoms** available, the **bonds** (relations) available, the **fidelity of the channel** to the ground, and the **independence of the closures** contacted. Quantity is a budget filter inside those conditions, never a witness for the reach.
- What each leads to: A predicts smooth, unbounded gains from more of the same data; B predicts hard boundaries at missing atoms and missing bonds, delayed hidden failures when the channel degrades, and a step change only when a genuinely differing closure is contacted.
- The answer is bound as an ordinary term before searching: an answer is **a shape of dependence** plus a written refuter plus a declared unreachable remainder. Binding it lets it accrue a residual and be refused (Formula, "Direction"; Fig 5 :65: "make the sought-for shape an ORDINARY TERM").

The residual is therefore: *why does an identical learning rule, with identical data volume, have a different reach under a different arrangement of the same raw material?*

---

## 1. Domain census (before choosing any figure line)

R is described by arity, symmetry and scale first.

- **Arity.** The residual is a four-place dependence: (atom inventory, bond inventory, channel fidelity, closures contacted) -> reach. It is not a one-place function of token count.
- **Symmetry.** The dependence is not symmetric: data shapes the reach, not the reverse. Inside the data, arrangement is not reducible to ingredients. Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." The bonds split into symmetric (+, ∥, ≡) and ordered (→, ⇒, −, ⋛), so order is sometimes load-bearing and sometimes spurious (Fig 12 :92).
- **Scale.** Three scales are present: the within-run loop, the population of examples, and the membrane between closures. Fig 4 :20: "it or a thousand. Only the actors, the currency and the anchor change."

One line per candidate domain, with actors / currency / anchor. A domain with no nameable anchor is not a domain yet.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Library and reach | atoms(Γ), candidate terms φ, bonds, closure(Γ) | composition, then settlement | the ground (Fig 2 :29) | admitted |
| D2 Data as habitat | examples, labels, actors, conditions and relations in contact | contact | the ground the data is a projection of (Fig 11 :39) | admitted |
| D3 Bond and structure inventory | the seven bonds plus negation; symmetric vs ordered | bits for description, actions for testing | the task's ground (Fig 12 :125-126) | admitted |
| D4 Channel and instrument | percepts, metrics, per-slot indexing, objective link | contact fidelity | the ground, which does not decay (Fig 10 :24) | admitted |
| D5 Cross-closure import | frames with differing closures, imported primitives | union surplus | ground via triangulation (Fig 8 :45, Fig 2 :35) | admitted |
| X1 Model size or compute as sole determinant of *in-principle* reach | parameters | FLOPs | none nameable for "in principle" | not a domain; absorbed into D1 and D4 as a budget change |
| X2 Corpus volume as a quality | tokens | count | none nameable; it is a frame-internal score (Fig 1 :27) | absorbed into D4 as a filter |

**Partition or union.** It is a **union compound**, not a partition. The reach fails if any one of D1 to D5 fails, and the failure conditions overlap. Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." A single lever (more data) clears the region where only one condition binds and leaves the intersections standing, so each condition needs its own loop and its own verdict. They are never averaged.

**Dependency order (Fig 3).** Perception -> vocabulary -> objective -> planning -> learn and carry. Fig 3 :20: "The chain is ordered by dependency, not by importance." Data structure determines what is perceptible (D4), which atoms and bonds exist (D1/D3), and whether "what counts as progress" can be stated (D3, the objective link). The break usually sits at the vocabulary/objective link, because it has no instrument: Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."

**Strain test applied before findings.** An apparent strain between Fig 11 :40 (an agent-only improvement changes nothing) and the empirical success of scaling model size with a fixed corpus is resolved by re-census: if scaling changes contact (better perception of the same data, a new instrument) it is not agent-only; if it leaves contact and habitat fixed it is a budget change governed by Fig 9 :60, not a change in reach. Different quantities, so no strain after re-census. Recorded as a correction in section 6.

---

## 2. Figure census (quoted before concluding)

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual per slot; frame-internal scores disqualified | governs D4 |
| 2 The Ground | anchor does not update; independence between frames | governs D1 anchor, D5 independence |
| 3 Dependency Chain | order by dependency; the middle link has no instrument | governs the dependency order |
| 4 The Membrane | methods cross up, head starts down; lossy round trip | governs D2 to D1 transfer |
| 5 Mint Pipeline | three guards as a product; MDL bargain; direction is outside | governs whether a new term is licensed |
| 6 Closure / Reachability | import is the only wall mover; instruments improved from worse ones | governs D1 and D5 |
| 7 Room Chain | agreement compounds, evidence does not | governs duplicate sources in D5 |
| 8 Union Surplus | idempotent closure; no proof of absence; low overlap | governs D5, yields gap |
| 9 Leave / Arrive | filters vs witnesses; union before search; describe before looking | governs X1/X2 and the census order |
| 10 Ground Maintainer | channel decays; verifier non-access | governs D4 |
| 11 The Habitat | capability is agent-and-habitat; habitat enumerated, not composed | governs D2 |
| 12 The Bond | arrangement is the substance; isomer and functional group | governs D3 |
| 13 Minimum Viable Set | closed set, open arrangements; unreachable is a verdict | governs D1, yields gap |
| Operators table | negation is unary; a vocabulary without it can only accumulate | governs D3 refusals |
| Symbols table | reach, atoms, residual, ground | defines the quantities |

Strained readings are named, not smoothed over. After re-census, one live strain remains: the numeric boundary of "in principle" for a named corpus (F8).

---

## 3. Findings F1 to F8

### F1. "In principle" means the reach, and the data fixes the atom inventory (decisive for D1)

- Fig 6 :21: "MINT composes inside the closure and can never add an atom."
- Fig 6 :22: "NOVEL means novel relative to atoms, not to the world. IMPORT adds an atom, and the added atom is what expands the closure."
- Fig 13 :115: "The set is closed. The arrangements are not. That gap is why import exists."
- Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."

**Reading.** Whatever is not in `atoms(Γ)` cannot appear as a composable term. Training data that never presents a distinction leaves that distinction outside the reach. Training longer, with the same atoms and the same bonds, searches the same finite set of arrangements more thoroughly; Fig 13 :118: "infinite effort inside a finite reach." Mode: `general` for idempotence, `specified` for the binding to corpora. **Triangulated** across Fig 6, Fig 8 and Fig 13 (wall mover, idempotence theorem, closed-set/open-arrangement split: three different roles, low overlap).

**Refuter.** A learner at a fixed atom inventory attains a ground-verified new atom by more in-closure search alone; or a new representable primitive appears with zero contact with any frame whose closure differs.

### F2. Structure is bonds, not ingredient lists (decisive for D3)

- Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."
- Fig 12 :111: "A vocabulary without bonds can name a state and cannot name a route to one."
- Fig 12 :112: "A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."
- Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Fig 12 :140: "A vocabulary that cannot refuse can only accumulate."

**Reading.** Two corpora with the same token inventory but different relational structure (order →, production ⇒, comparison ⋛, absence −, refusal ¬) have different reaches. An ingredient-only corpus supports naming states and not routes, goals, progress or refusals. This is the figure-grounded core of the answer to "structure": structure is the bond inventory and the arrangement, not the bag of items. Mode: `specified`, triangulated (Fig 12 plus Fig 3 :7 "it has terms for what things afford: what can be moved, opened, joined, blocked", plus the Operators table).

**Refuter.** A learner acquires a ground-checked plan, goal, progress measure or refusal from a pure unordered ingredient list with zero relational signal in the data, zero relational inductive bias and zero external supervision of the relation.

### F3. Training data is a substituted habitat; in-distribution success proves wiring, not capability (D2)

- Fig 11 :39: "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."
- Fig 11 :40: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."
- Fig 11 :43: "The habitat is enumerated, never composed."
- Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."
- Fig 4 :22: "Only methods cross up. Only head starts come down."

**Reading.** What can be learned is a property of learner-and-data, never of the learner alone. A training distribution is a substituted habitat: enumerate what is in contact with the target residual, then what contacts those, outward until the cascade stops mattering (Fig 11 :43-44). What the habitat does not contain is residual that cannot be read. Success inside the substituted habitat demonstrates the wiring, not capability under a different habitat. Mode: `general` for the agent-and-habitat law, `specified` for the corpus reading. **Triangulated** across Fig 11, Fig 2 (anchor) and Fig 4 (membrane).

**Refuter.** An agent-only change with habitat and contact demonstrably held fixed moves a ground-measured capability. Fig 11 :72 names exactly this as the refutation of the capability claim: "an agent-only improvement that moved the ground would refute the capability claim."

### F4. Per-slot indexing and the objective link decide what signal exists at all (D4)

- Fig 1 :19: "The residual is indexed by object slot, not aggregated."
- Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
- Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces."
- Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."
- Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."
- Fig 10 :26: "stale percepts, dropped transients, saturated metrics, pooled readings"

**Reading.** If the corpus aggregates across slots, the live residual that says *where to look* vanishes into the average; the data has destroyed the very signal the loop runs on. If the corpus carries no comparison structure, the objective link of Fig 3 has no instrument, the chain breaks at the middle, and planning compute spends itself above a break that cannot use it (Fig 3 :20-22). Mode: `specified`. **Triangulated** across Fig 1, Fig 3 and Fig 10 (indexing, dependency, channel).

**Refuter.** A ground-checked per-slot live residual and a ground-checked objective are learned from purely global aggregate reward with no per-slot structure and no comparison signal.

### F5. Genuine novelty needs contact with a differing closure; more of the same is a mirror chain (D5)

- Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."
- Fig 6 :14: "the only operator that moves the wall"
- Fig 8 :45: "Two frames together reach what neither reaches alone."
- Fig 8 :29: "low overlap: B does not draw on A's evidence"
- Fig 7 :13: "agreement compounds, evidence does not"
- Fig 7 :36: "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."

**Reading.** The *independence* of data sources, not their count, decides whether a new atom can arrive. Duplicate or near-duplicate sources are one witness wearing many names: they add search budget, not reach. OOD generalization is the import case, and import requires a source gate and a shadow test (Fig 6 :12-13: "source gate: provenance", "shadow test: explains a gap"). Mode: `general` for the closure law, `specified` for corpora. **Triangulated** across Fig 6, Fig 8 and Fig 7.

**Refuter.** A ground-verified new atom enters the reach with zero contact with any differing closure, or with sources whose overlap is measured at one (identical evidence).

### F6. The channel decays; curation is a seat's office, not the loop's (D4, cross-cutting)

- Fig 10 :24: "the ground does not decay, the channel does"
- Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."
- Fig 5 :41: "Any one of them at zero stops the mint entirely. Which is why a system that is minting nothing may have nothing wrong with its minting."

**Reading.** The loop cannot certify its own channel. A learner can be perfectly self-consistent while its percepts are stale, pooled or saturated, so a system that mints nothing may have sound machinery and zero support rather than a broken mint. The condensation from a rich world structure to a training corpus is lossy, so a round-trip gap `R_T` must be measured, not assumed zero. Mode: `specified`. **Triangulated** across Fig 10, Fig 4 and Fig 5.

**Refuter.** Channel fidelity and `R_T` measured at zero with no maintenance seat and no loss across the abstraction and concretisation round trip.

### F7. Volume, scale and benchmark score are filters for the budget, not witnesses for the verdict (X1, X2)

- Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."
- Fig 1 :25: "coverage, and compression achieved"
- Fig 1 :26: "predicates minted, and credibility accrued"
- Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces."

**Reading.** Token count, parameter count and benchmark score are quantities a frame produces about itself; they cannot score the frame. They decide how much of the space is actually visited (a budget), not what is in the space (a verdict). This is why X1 and X2 were absorbed rather than admitted as domains. Mode: `general`. **Triangulated** across Fig 9 and Fig 1.

**Refuter.** A figure line that licenses "more examples implies larger reach at fixed atoms, fixed bonds and fixed contact" after a genuine re-census, or a ground measurement showing that pure volume adds a new atom. None was found.

### F8. Gap: the exact reach of a named corpus, and the numeric boundary of "in principle," is not governed by any figure line

- Fig 9 :32: "you get a kind of thing, never the answer itself"
- Fig 8 :39: "So a search that finds nothing is never a proof of absence."
- Fig 13 :134: "Unreachable is a verdict here, not a silence"
- Fig 6 :34: "Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."

**Reading.** The figures give the shape (atoms, bonds, contact, closure, import) and refuse the number. The missing thing is a source-discriminating instrument that reports which primitives a corpus actually supplies and which bonds its arrangements carry. It is characterized in effect terms and is not held. This is a `gap` verdict, not a silence and not a failure: "Unreachable is a verdict, not a silence." Mode: `general` on the limit. **Verdict: gap** for the numeric part, triangulated limit across Fig 9, Fig 8, Fig 13 and Fig 6.

**Refuter (for the gap).** An instrument is produced whose readings discriminate the atom and bond inventory supplied by two corpora and whose output is checked against a ground. That would convert the gap into a measurement.

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach, per the formula's discipline and the exemplar's practice: a falsifier written before the run is a design instrument. The shape claim is **refuted** if any of the following fires:

1. A learner at fixed atom inventory attains a ground-verified new atom by more in-closure search alone, with no contact with a differing closure (breaks F1, Fig 6 :23, Fig 8 :32).
2. A learner acquires a ground-checked plan, goal, progress measure or refusal from a pure ingredient list with zero relational signal, zero relational bias and zero external relation supervision (breaks F2, Fig 12 :111).
3. A ground-checked per-slot live residual and objective are learned from purely global aggregate signal (breaks F4, Fig 1 :19).
4. An agent-only change with habitat and contact held fixed moves a ground-measured capability (breaks F3, Fig 11 :40).
5. A ground-verified new atom enters the reach from sources whose evidence overlap is one, or in-distribution synthetic success transfers to a substituted habitat without new contact (breaks F5, Fig 8 :45, Fig 11 :70).

If any fires, the corresponding finding is withdrawn and the census is rerun. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with F1 and F2. They are the figure-derived core, triangulated, and they answer the question in shape terms: the corpus fixes the atom inventory and the bond inventory, and those two fix the reach.
2. Keep F3, F4, F5 and F6 as separate domain verdicts. Do not average them into a single "data quality" score. A union compound needs four loops.
3. State the mode on every claim. The empirical literature corroborates the shape; it does not settle it (section 6 and `09_watson_answer.md`).
4. Publish F8 as a declared gap with the instrument described in effect terms. Ask a checker for that instrument or for a refuter, not for agreement.
5. Send the generator (the census, the verbatim lines, the refuter), not the conclusion. Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion."

---

## 6. Canonical usage check and retraction and confirmation log

Two sources govern how the figures may be used and were read after the first five sections: the canonical figures README and the WATSON "figures as metalaws" note. Key sentences from the README: the figures "outrank everything else in the repo"; "a reading that makes one contradict another has misidentified its domain, not found a flaw"; and the framework returns "a shape, not a name" then stops at the limit of the instruments and records the lineage. "Indiscernibility is not identity."

| earlier reading | status after the canonical check |
|---|---|
| Initial reading: "training data is Γ" | **Retracted.** Re-census: the corpus supplies atoms and bonds *to* Γ and is a substituted habitat (F2, F3). It does not *equal* Γ, and confusing the two would make the wall movable by more data. |
| Initial reading: "model size sets the in-principle reach" | **Retracted.** No nameable anchor for "in principle"; absorbed into D1 and D4 as a budget change under Fig 9 :60. |
| Initial reading: "shape, not a name, forbids naming an atom" | **Narrowed, not erased.** The phrase governs a *missing* primitive. Naming an atom already held is a binding from another frame and needs provenance, not a ban. Fig 13 :134 remains the limit for what is not held. |
| Apparent strain Fig 11 :40 vs scaling results | **Not strained.** Re-census: scaling that changes contact is not agent-only; scaling that leaves contact fixed is a budget change (Fig 9 :60). Different quantities. |
| Apparent strain Fig 12 :117 isomer vs disjoint corpora | **Not strained.** Two corpora with disjoint atom sets are functional-group relatives (Fig 12 :124), not isomers. The isomer claim requires a shared atom set; see `06_isomers_and_order.md`. |
| F8 "gap" | **Canonically confirmed.** The README says the framework stops at "a shape, not a name" and "Indiscernibility is not identity." Fig 13 :134 makes unreachability a verdict. |
| F7 filters vs witnesses | **Canonically confirmed.** Fig 9 :60 is explicit, and Fig 1 :27 disqualifies frame-internal scores. |

### Seven-question recursive derivation (summary)

1. **What is the residual?** A dependence of reach on arrangement, not on volume. Arity four, not one (section 1).
2. **Where is the boundary?** At `atoms(Γ)` and at the bond inventory. Fig 6 :21-22, Fig 13 :115.
3. **Can more search cross it?** No. Fig 8 :32. More search is SEARCHED, the cheapest of the three questions in Formula step 7.
4. **What actually moves it?** Import from a differing closure, with a source gate and a shadow test. Fig 6 :14, :23; Fig 8 :45.
5. **What does the corpus supply?** Atoms, bonds, contact fidelity, and independence of sources. Fig 11 :43-44, Fig 1 :19, Fig 8 :29.
6. **Is the reach settled?** No. Fig 2 :45: "Frames range against the ground. They do not negotiate with it." Status `candidate`.
7. **Where does the loop stop?** At F8, with the instrument described in effect terms and the lineage recorded. Formula step 7: INWARD (sharpen the representation), OUTWARD (import a differing closure), kept distinct and never read against each other.

### Updated verdict

The shape survives: training-data structure fixes the reach by fixing the atom inventory and the bond inventory, by maintaining the channel, and by determining which differing closures are contacted. Quantity is a filter, not a witness. Everything specific beyond that shape is either `specified` and ungrounded (F2 to F6) or a declared `gap` (F8). Strains after re-census: one live, the missing discriminating instrument, named rather than hidden. No figure line was strained to fit.
