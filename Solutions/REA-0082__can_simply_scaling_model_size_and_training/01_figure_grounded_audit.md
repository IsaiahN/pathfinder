# Figure-grounded audit: does scaling alone produce qualitatively new capabilities?

**Mode of this document: `specified`, not `grounded`.** The formula's mode rule: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." (attributed to THE_FORMULA, not a figure quote).

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (read 2026-11-24): "the truly testable output would need to be derived from the real architecture or working the formula yourself". This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, all `Fig N :line` citations), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the eight essays, and the world sources in `10_source_ledger.csv`.

---

## 0. The residual, bound as an ordinary term

Per the formula's "Direction" rule, I write down what an answer would look like and bind it, so the sought-after shape accrues a residual like anything else.

Let a model family be `M(k)`, where k is a scale parameter (parameters, tokens, compute). Let `Γ` be the library the learner can compose: its primitives, its bond vocabulary (objective, architecture, training signal), and the habitat its data comes from. For a held-out task slot s, define

`R_s(k) = |Γ(b, a) - o'|`

as the prediction gap at slot s. "Qualitatively new capability" is bound as: a slot s for which `R_s` was positive and not trending down across a range of k, and which later drops near zero, **where the drop requires either (i) visiting more of the same closure, or (ii) a term that was not composable from `atoms(Γ)` before**. This is a threshold/comparison (Fig 12 :87: "a threshold relation between two quantities"), not a smooth aggregate quantity.

An answer would look like this: a rule that assigns any observed flip to branch (i) or branch (ii) using only measurements available before the flip, and that states what each assignment costs if wrong. That is the shape I test against the figures. If no figure line governs the assignment, the answer is `gap`, not silence.

---

## 1. Domain census (before choosing any figure line)

**R by arity, symmetry, scale.** Arity: a three-place relation (model library `Γ`, scale k, task slot s), ordered in k and carrying an ordered bond into the future plus a comparison bond at the threshold of "new". Symmetry: "new" is a threshold relative to the old reach, so the comparison is ordered, not a symmetric join. Scale: three distinct scales, one run (more steps at fixed library), one model family (different k), and one habitat (changed data source or interaction).

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Model closure | atoms, bonds, `Γ`, candidate terms | composition, reach | the figures as metalaws; the ground for any measurement | admitted |
| D2 Training search | tokens, data, compute, loss curve | coverage of the closure, compression | held-out task slots, not training loss | admitted |
| D3 Capability ground | evaluator, instrument, held-out tasks | per-slot residual `R_s` | the ground, which does not update | admitted |
| D4 Learning principle / import | objective, architecture, environment, peer frames | new atoms or bonds, provenance, contact | source gate and shadow test | admitted |
| X1 "Emergence as a free-floating property" | none nameable | none | none nameable | not a domain yet; absorbed into D1 and D3 |
| X2 "More data is always more evidence" | the corpus | token count | already inside D2 | absorbed |

**Partition or union.** This is a union, not a partition. D1 with D2 is the budget compound (a case in one condition: in closure, not found). D1 with D4 is the underivable compound (a case in a second condition: not in closure). D3 is the ground both compounds range against. Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." A single lever, scaling, clears the region where only the budget condition holds and leaves the intersection standing.

**Dependency order (Fig 3).** Perception → vocabulary → objective → planning → learn and carry. A reading taken below a break is a reading of nothing (Fig 3 :22-23: "A step whose input never arrives cannot be diagnosed, only its predecessor can"). So a loss curve cannot diagnose a missing objective: the loss is measured above the break where the instrument already exists, while the objective link has no instrument (Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at.").

---

## 2. Figure census (quoted before concluding)

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual per slot; frame-internal quantities disqualified | aggregate loss cannot decide |
| 2 The Ground | anchor must not update; correlation disqualifies | benchmark training data is not an anchor |
| 3 Dependency Chain | objective link has no instrument | loss sits above the break |
| 4 The Membrane | methods cross, recordings do not | scale transfers a search, not an answer |
| 5 Mint Pipeline | three guards; library growth is not reach growth | scaling passes no guard by itself |
| 6 Closure / Reachability | import is the only operator that moves the wall | scaling stays inside the wall |
| 7 Room Chain | same closure handed along is a mirror chain | same-distribution data adds no evidence |
| 8 Union Surplus | closure idempotent; underivable vs unreachable at budget | the two branches are different facts |
| 9 Leave / Arrive | verdict, lookup, narrowing; describe R before choosing frame | branch assignment needs a ground, not a curve |
| 10 Ground Maintainer | channel decays; saturated metrics, pooled readings | metric choice can manufacture a flip |
| 11 The Habitat | capability is agent-and-habitat | agent-only scaling cannot change contact |
| 12 The Bond | arrangement carries the information; threshold comparison | new bond is a new kind, not more of the same |
| 13 Minimum Viable Set | set closed, arrangements not | infinite effort inside a finite reach |
| Operators / Symbols | `R` is the aim; negation refuses | a refusal is owed before a new term is minted |

Strained readings are named as such below, not smoothed over.

---

## 3. Findings

### F1 - Scaling is more search at the same reach (decisive for D1)

Fig 6 :49: "more search at the same reach: is it in here and unfound? The closure does not change. Same atoms, same wall, more of the space actually visited."
Fig 6 :21: "MINT composes inside the closure and can never add an atom."
Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."

Scaling parameters, tokens, and compute is exactly the operation Fig 6 names as SEARCHED: the atoms and the wall are fixed, and more of the space is visited. It follows categorically, not empirically, that scaling cannot add a new atom or a new bond. Mode `general` for the structural claim. **Refuter:** exhibit a term that appears by composition inside `closure(Γ)` with no import, where the term requires an atom not in `atoms(Γ)`. That breaks Fig 6 :21 and Fig 8 :32 at once.

This is the strongest single figure-grounded point and it should lead the answer.

### F2 - The question is a union, and its two branches have opposite remedies (decisive for the verdict)

Fig 8 :41-42: "Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions. Underivable: go outside. Unreachable-at-budget: the term is already in the closure and was not found, so the remedy is more search, not another atom."
Fig 6 :14: "the only operator that moves the wall" (said of IMPORT).

Therefore:
- Branch (i), unreachable-at-budget: scaling is the correct remedy. Adding a new atom here would be a wrong atom, priced by Fig 8 :43: "Importing against a budget limit adds an atom that was not needed, and Figure 6 prices a wrong atom above starting from primitives."
- Branch (ii), underivable: scaling is inert. An import from a frame whose closure differs is required.

Mode `specified` for the application to model families. **Refuter:** show a single remedy that closes both branches without distinguishing them, with a measured case where importing a new atom and adding compute are the same operation. That dissolves the union and breaks Fig 8 :41.

### F3 - Aggregate loss is a filter for the budget, never a witness for novelty (D2)

Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
Fig 1 :13: "a global R near zero with one live slot residual is a legal state"
Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces." (the preceding lines name "coverage, and compression achieved" and "predicates minted, and credibility accrued")
Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

A smooth cross-entropy curve is an aggregate over slots and an output the training loop itself produces. It can price the budget; it cannot certify a qualitative change. A flip in one live slot is legal while the average stays smooth. This is the figure-side reason that the empirical dispute between Wei et al. and Schaeffer et al. cannot be settled by curve shape alone. Mode `specified`. **Refuter:** a demonstration that a continuous aggregate loss predicts, without a per-slot ground reading, which slots flip and which never do, across at least two model families with low overlap. That would make the aggregate a witness and break Fig 1 :22.

### F4 - Same-distribution data is a mirror chain (D2, corroboration from Fig 7)

Fig 7 :12: "same closure, handed along;" and Fig 7 :13: "agreement compounds, evidence does not"
Fig 7 :36: "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."

Scaling a corpus drawn from the same distribution hands the same closure along. It buys motion, not new evidence. This does not claim all added data is the same distribution; it says only that where the data is a mirror, the scale buys search rather than contact. Mode `specified`. **Refuter:** a measured case where adding data from an unchanged habitat changed the anchor rather than the frame, with the anchor shown not to update.

### F5 - Capability is agent-and-habitat (D3 and D4)

Fig 11 :39: "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."
Fig 11 :40: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."

An increase in parameters alone is an improvement of the agent in isolation. If the habitat and the contact are unchanged, the figures say nothing about capability follows. This is the bridge to new learning principles: what a new principle buys, when it buys anything, is a change of contact (new objective, new instrument, new interaction), not a larger number of weights. Mode `specified`. **Refuter:** an agent-only parameter change that moves the ground, measured with an instrument that discriminates contact. Fig 11 :72 already names this as the standing refuter of the capability claim: "an agent-only improvement that moved the ground would refute the capability claim."

### F6 - The ground, not agreement or metric, decides a flip (D3)

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."
Fig 2 :47: "A ground listed as one of the parties has already become a frame."
Fig 10 :26: "stale percepts, dropped transients, saturated metrics, pooled readings"
Fig 10 :24: "the ground does not decay, the channel does"

If a benchmark is trained on, it stops being an anchor and becomes a frame. If the metric is discontinuous, it can manufacture a flip (Schaeffer et al., read 2026-11-24). This is why a claim of qualitative novelty needs a held-out ground and a source-discriminating instrument. Mode `specified`. **Refuter:** a flip that survives a change of metric and a change of evaluator, with the anchor shown immovable under both.

### F7 - A genuinely new kind needs an import with a source gate (D4)

Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."
Fig 8 :9-13: the grounded panel names "source gate: provenance" and "shadow test: explains a gap".
Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit"

So a new learning principle is not any idea that sounds plausible after the failure is observed. It must be characterized in effect terms from `R_s` first, then found in a frame whose closure differs, with provenance and a shadow test. Fig 8 :50: "Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence." The record of where it came from is what distinguishes an import from a convergence. Mode `general` for the gate, `specified` for AI. **Refuter:** a new principle introduced without any differing frame, shown to add a new atom to `Γ` by derivation rather than by relabeling an existing one.

### F8 - The specific principle is a `gap`, not a hidden answer

Fig 9 :32: "you get a kind of thing, never the answer itself"
Fig 13 :134: "Unreachable is a verdict here, not a silence,"
Fig 13 :135: "It cannot say which primitive is missing, because naming it would mean already holding it."

The figures say that a new atom or bond would be needed and what it would have to do (change contact or add a composition the old closure could not reach). They do not and cannot name it. Naming a specific principle (curiosity, interaction, world models, a new optimizer) is a binding from the AI frame, provenanced as such, not a derivation. This is a `gap` after a genuine re-census, not an omission. **Refuter:** derive a specific new principle from the six-term set alone, with no import and no binding. Until then the slot stays open.

### F9 - Figure 5's guards are not passed by scale alone

Fig 5 :29-31: "nothing new here" and "the machinery worked; the answer was already known".
Fig 5 :72: "a library that grows is not a reach that grows"
Fig 5 :48: "Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."

A larger model can produce more output and a larger library without a larger reach. Formula step 8 states the same asymmetry in compact form (attributed to THE_FORMULA): "IT IS THE REACH THAT DRIVES THE LOOP, NOT THE LIBRARY." Scaling counts the denominator. Mode `specified`. **Refuter:** a case where library size grows, reach is held fixed by an independent derivation, and the per-slot residual still falls without an import.

### F10 - What survives the audit

| claim | mode | figure |
|---|---|---|
| Scaling cannot add a new atom or bond; it visits more of the same reach | `general` | Fig 6 :21, Fig 8 :32 |
| Scaling is sufficient when the capability is in the closure and merely unfound | `specified` | Fig 8 :41-42 |
| A genuine new kind requires an import from a differing closure | `general` | Fig 6 :14, :23 |
| Aggregate loss is a budget filter, not a witness for a qualitative change | `specified` | Fig 1 :22, Fig 9 :60 |
| Capability changes only if contact changes | `specified` | Fig 11 :39-40 |
| Which branch an observed capability belongs to | `gap` | Fig 9 :32, Fig 13 :134-135 |

---

## 4. Pre-registered refuter (written before the conclusion)

A falsifier written before the run is a design instrument. I commit to these four before stating the verdict:

1. **Composition refuter.** A new atom or bond is produced purely by scaling inside `closure(Γ)`, with no import. Breaks F1.
2. **Budget refuter.** A per-slot qualitative flip is fully predicted by a continuous aggregate loss curve of the same family, with no new ground instrument and no new slot-level measurement, across two low-overlap families. Breaks F3 and makes branch (i) the whole answer.
3. **Contact refuter.** Capability improves with scale while contact is independently measured as unchanged. Breaks F5.
4. **Single-remedy refuter.** One operation closes both the budget branch and the underivable branch with no branch assignment. Breaks F2.

If any fires, the conclusion below is withdrawn in whole or in part. Until one is run, nothing here is `grounded`.

---

## 5. Recommendation

1. Lead with F1 and F2. The question's "or" is a union split, not an exclusive choice.
2. Report scale results per slot, never only as an aggregate curve (F3).
3. Treat a claimed flip as a measurement claim until metric and evaluator independence are shown (F6).
4. Characterize any proposed new principle in effect terms from `R_s`, then look for a frame that already holds it, with provenance and a shadow test (F7).
5. Do not name the required principle. Say what it must do and stop (F8).

---

## 6. Canonical usage check

Two local sources govern use after the first five sections:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`, read 2026-11-24: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." It also says a reading that makes one figure contradict another has misidentified its domain, and that the framework delivers "a shape, not a name", then stops where instruments stop.
- `FRAMEWORK/figures/THE_FORMULA.md`, read 2026-11-24: the eight-step loop, the three questions of step 7 (SEARCHED, INWARD, OUTWARD), and the mode rule. SEARCHED is asked first because it is cheapest and the other two assume its answer. That order is what F2 follows.

### Retractions and confirmations

| earlier finding | status after the canonical check |
|---|---|
| F1 "scaling cannot add an atom" | **Confirmed and sharpened.** It is definitional (Fig 8 :32), so it is `general` rather than an empirical regularity. |
| F2 "two branches" | **Confirmed.** Fig 8 :41-42 issues two different instructions. Mapping scaling to SEARCHED and new principles to OUTWARD follows the formula's step 7 order. |
| F3 "loss is frame-internal" | **Confirmed.** Fig 1 :25-27 is explicit; the pilot's warning about filters (Fig 9 :60) triangulates. |
| Possible strain: Fig 6 :29 "inward" and Fig 6 :30 "outward" | **Not strained after re-census.** Inward extends the instrument; outward imports a description. Scaling is neither; it is Fig 6 :49's third question (more search at the same reach), which the amendment adds. Different objects. |
| Possible strain: Fig 7 "room chain" vs Fig 8 "union surplus" | **Not strained.** Fig 7 governs handing a question along; Fig 8 governs combining two differing closures. Scaling data is the first, importing a principle is the second. Different operations. |
| Temptation to name a specific new principle | **Refused at record level.** Fig 9 :32 governs, together with the canonical usage rule in the figures README. F8 records the refusal rather than hiding it. |
| My initial reading that Schaeffer et al. refutes Wei et al. | **Retracted.** They share a data pool (claimed emergent tasks) and differ in metric. Fig 2 :40 makes agreement or disagreement inside one pool one witness, not two. The conflict was returned to the census and became F6, not a verdict flip. |
| My initial reading that Sutton's "Bitter Lesson" supports scale-only | **Narrowed.** The methods it praises (search and learning) are themselves imports that were once outside the closure. Once held, scaling them wins. It corroborates branch (i), not a universal sufficiency claim. |

After re-census: **no hidden strain; two named refusals (F8, naming) and one narrowed world reading (Sutton) recorded above.**

---

## 7. Updated verdict

The shape survives and the dichotomy does not. Scaling answers the budget branch; import answers the underivable branch; aggregate curves cannot tell which branch is live; the specific new principle is a `gap`. Mode `specified` for the application, `general` for the closure law, ungrounded throughout. The honest stop is at the instrument: a per-slot, metric-independent ground reading is what would move this to `grounded`, and none is in this folder.
