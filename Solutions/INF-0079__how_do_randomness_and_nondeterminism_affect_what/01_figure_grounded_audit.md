# Figure-grounded audit: randomness, nondeterminism, computation, prediction

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." The structural shape is `general`; the per-domain claims are `specified` and unmeasured.

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap* (read 2026-11-23): "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, with figure line numbers), `FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. World sources are listed in `10_source_ledger.csv` and were opened on 2026-11-23.

---

## 0. The residual in effect terms

The question bundles two effects. Fig 9 :54-57 says a union must be unbundled before searching: "when the split lands on a union rather than a partition, unbundle before you search again." A single lever will clear the region where only one condition holds and leave the intersection standing.

**R1, computation.** Does adding random choice or branching change the set of functions a machine can compute, that is, does it move the wall of `closure(Γ)`?

- Option A: it extends the class. A probabilistic or nondeterministic machine computes functions no deterministic machine computes. Randomness supplies a new primitive.
- Option B: it does not extend the class. It changes how much of a fixed reach is visited, and what it costs to visit it.
- What each leads to: A requires a new atom and predicts an unbounded reach; B predicts an unchanged reach with a changed budget and a changed independence requirement.

**R2, prediction.** Does adding random choice or branching change what a frame can predict, that is, the residual `R` it cannot reduce?

- Option A: randomness is a primitive property of the world that a better frame could in principle eliminate, so prediction is limited only by budget.
- Option B: randomness is what the residual looks like after compression, arising where a turn leaves a remainder and where a crossing discards detail. Prediction is limited by the lossy transform, and whether the loss is ontic is a separate open question.
- What each leads to: A predicts a sealed room that could be searched to the end; B predicts a finite predictability horizon and a lineage that must be recorded.

**What an answer would look like (the shape bound as an ordinary term, formula "Direction").** A statement of (i) which quantity randomness moves, the wall, the search or the residual, (ii) a nameable anchor for each half, and (iii) a refuter per half. A shape, not a verdict. `SPACE(???)TIME` in the exemplar is the precedent for an explicitly open slot; here the open slots are `NEW KIND(???)` and `ONTIC(???)`.

---

## 1. Domain census, before any figure line is chosen

**R by arity, symmetry and scale.**

- Arity: two conditions, computation and prediction. Union, not one hard question (Fig 9 :54-57). Each gets its own loop and its own ground.
- Symmetry: not interchangeable. The figures give two distinct sources of randomness in the same sentence (Fig 13 :31-32): a remainder amplified through a chain, and detail discarded at a crossing. The world literature adds a third distinction, ontic versus epistemic, which is not a symmetry of the system but a question about the ground.
- Scale: within-run (search over arrangements, probabilistic choice at a step) versus across-scale (the round trip between a state and a structure, where detail is lost).

**One line per domain: actors, currency, anchor.** No nameable anchor means it is not yet a domain.

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D1, computability (mathematics and theory of computation) | deterministic, probabilistic and nondeterministic machines; `atoms(Γ)`, `closure(Γ)`, bonds, the six terms | reachability, composition, cost in bits and in actions | proof: decidability and the Gödel/Tarski/Chaitin limits | partition: what composes inside a closed reach |
| D2, prediction (physics and information theory) | the ground, `R` per slot, the observer frame, instruments, states and structures in alternation | `R` per slot, round-trip gap `R_T`, bits versus actions | the ground: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." (Fig 2 :29) | union of chaos (amplified remainder) and noise (discarded detail) |
| D3, verification and search (cryptography, complexity, randomized algorithms) | verifier, prover, adversary, independent searchers, random bits | error probability, independence, probability of success | proof plus the verifier's non-access | partition: what randomness buys under bounded resources |
| D4, ontic indeterminacy (foundations of probability) | the six terms, the world, the frame | settlement | none available to this framework | gap: no nameable anchor at this budget |

D4 has no anchor that this framework can point to. It is recorded as a domain because the residual requires an answer, but its verdict is `gap`, not silence (Fig 13 :134: "Unreachable is a verdict here, not a silence").

**Partition or union.** D1 and D2 are a union (two conditions, each with its own loop). D2 is itself a union of two mechanisms (chaos and noise). D3 is a partition inside D1 (bounded-resource sub-question). D4 is a compound that cannot be partitioned without an instrument it does not have.

**Order by dependency (Fig 3).** Settle the closed reach first (D1), then what remains unpredictable across a crossing (D2), then how independent searchers spend randomness (D3), then the ontic question (D4), which needs an instrument none of the others supplies. Optimising a link above the break cannot rescue one below it (Fig 3 :19).

**Strain test applied before choosing:** Fig 13's randomness-from-remainder line was first tried on D1 (computability) and strained, because a probabilistic machine's coin is not a remainder of a turn across scales. Re-census moved it to D2. This is the rule from the canonical README: a reading that makes figures contradict one another has misidentified its domain.

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | residual per slot, ground is the only metric, aggregation hides the live signal | randomness must be read per slot, not averaged into "the system is random" |
| **2 The Ground** | anchor, independence, correlation valence | prediction is anchored on the ground; agreement about randomness is not a ground |
| **3 Dependency Chain** | a reading below the break is a reading of nothing | order the four domains by dependency, not importance |
| **4 The Membrane** | lossy transform, round trip, gap `R_T` | the source of noise; the gap must be measured, not assumed zero |
| **5 Mint Pipeline** | MDL bargain, guards, refusal, settling is not sufficient | randomness does not mint a new atom; it can pay the action price of a search |
| **6 Closure / Reachability** | import moves the wall, instruments extend access, more search at same reach | D1 verdict: randomness moves coverage, not the wall |
| **7 Room Chain** | no last room, agreement compounds and evidence does not | many random searchers are one room unless independence is bought |
| **8 Union Surplus** | idempotent closure, Gödel/Tarski/Chaitin, underivable versus unreachable at budget | formal limit on proving randomness; gap verdict for D4 |
| **9 Leave / Arrive** | describe the residual before choosing a frame, unbundle a union | the two-effect split is figure-required, not rhetorical |
| **10 Ground Maintainer** | verifier non-access, zero-knowledge, declare the stake | D3 verdict: randomness buys adversarial unpredictability, not correctness |
| **11 The Habitat** | capability is agent-and-habitat, enumerate, do not compose | searchers must be drawn from an unauthored habitat, not a list of believers |
| **12 The Bond** | two currencies, bits and actions, do not add | randomness trades actions for bits; the two readings are held apart |
| **13 Minimum Viable Set** | alternation is where randomness comes from; set closed, arrangements not; indeterminacy open | decisive for D2 and for the D1 no-new-kind claim |
| **Operators table** | negation is unary, not a bond; a vocabulary without it can only accumulate | a "this is random" claim is a refusal of predictability, not a new primitive |
| **Symbols table** | `R` is the aim and is always a slice; ground is the anchor | the question is about a slice of `R`, not a global label |

Strained readings are named in the findings and in the retraction log, not smoothed over.

---

## 3. Findings

### F1 - Randomness and branching do not add a kind, so they do not move the computability wall (D1, triangulated)

Fig 13 :115: "The set is closed. The arrangements are not. That gap is why import exists."
Fig 13 :116-118: "infinite effort inside a finite reach."
Fig 6 :21: "MINT composes inside the closure and can never add an atom."
Fig 6 :25: "An import adds no atom to the world."

A random choice selects among arrangements of what is held. A nondeterministic branch enumerates arrangements. Neither produces a seventh kind, because "no amount of arranging produces a seventh" (Fig 13 :116). A new atom comes only from an import with a source gate and a shadow test (Fig 6 :14, Fig 8 :9-13), and even an import "adds no atom to the world" (Fig 6 :25). So the reach is unchanged in kind. What changes is how much of the finite reach is visited.

**Mode:** `specified`, unmeasured. **Status:** triangulated (Fig 13 set closure, Fig 6 atom accounting, Fig 8 idempotence). **Refuter:** exhibit a probabilistic or nondeterministic machine that computes a function outside `closure(Γ)` of its deterministic counterpart, or derive a seventh kind from arranging the six. Either fires and F1 is withdrawn.

### F2 - Randomness changes the budget and the independence of searchers, not the reach (D1 and D3, triangulated)

Fig 6 :49: "more search at the same reach: is it in here and unfound? The closure does not change. Same atoms, same wall, more of the space actually visited."
Fig 12 :125-126: "A composition costs in two currencies, and they do not add." and "Bits price the description. Actions price finding out whether it holds."
Fig 6 :53-54: "searchers drawing on the same evidence are one searcher wearing many names."

A Monte Carlo draw is an action price paid to avoid a bit price. The 2026 CCC abstract read this session puts the resource reading plainly: "Randomness can be viewed as a resource, like space and time" (Randomized algorithm, Wikipedia, 2026). The figures do not forbid that; they price it. But adding searchers who share a source is "one searcher wearing many names", so the number of branches is not the gain; independence is.

**Mode:** `specified`. **Status:** triangulated (Fig 6 budget, Fig 12 currencies, Fig 7 room chain). **Refuter:** show that correlated searchers add reach at the same rate as independent ones, or that random sampling leaves `closure(Γ)` unchanged in name but changed in kind without an import.

### F3 - In prediction, randomness is the residual: chaos from an amplified remainder, noise from a discarded detail (D2, triangulated)

Fig 13 :28: "They alternate, and the alternation is where both the recursion and the randomness come from."
Fig 13 :31-32: "a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise."
Seat Map, substrate law: "The derived quantities a seat encounters, symmetry, smoothness, chaos, a continuum, are what a turn of the loop leaves rather than members of the set."

This is the direct answer to the prediction half. Randomness is not a seventh atom. It is what a turn leaves behind. A remainder that re-enters an amplifying chain is chaos: long-horizon prediction fails even when the dynamics are deterministic. The detail a crossing drops reappears above the crossing as noise: the coarser description cannot carry it. The world literature corroborates from a low-overlap field. *Chaos theory* (Wikipedia, 2026): "despite the deterministic nature of these systems, this does not make them predictable." Lorenz, quoted there: "Chaos: When the present determines the future but the approximate present does not approximately determine the future."

**Mode:** `specified` for the structural claim, `general` for the shape. **Status:** triangulated (Fig 13 alternation, Fig 4 lossy transform, seat map derived-quantity law). **Refuter:** exhibit a randomness in computation that cannot be expressed as a residual compounding through a crossing or as detail discarded at one, or derive chaos as a primitive member of the six.

### F4 - The round-trip gap is the measure of what prediction gives up (D2, single-source for the figure mechanism)

Fig 4 :27: "The transform between scales loses information, and that is the point."
Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."
Fig 4 :31: "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold,"
Fig 6 :27: "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."

So an unpredicted detail is not evidence of a new primitive. It may be depth (the instrument is too coarse) or genuine absence (nothing there to resolve), and from inside the frame the two look the same. The honest report is `R_T`, the gap between what was sent up and what came back down, not a claim about what the world is.

**Mode:** `specified`. **Status:** single-source for the mechanism (Fig 4), corroborated in kind by the source-discrimination essay and by SEP's product-versus-process distinction. **Refuter:** demonstrate a crossing with zero `R_T` that still loses predictive detail, or recover the discarded detail from the artefact alone, which would contradict Fig 13 :127 to :130 (the lineage is the proof).

### F5 - Formal limits: randomness cannot be certified from inside a fixed frame (D1, triangulated)

Fig 8 :34: "A frame cannot reach its own metaframe. Godel's second theorem: a consistent system cannot prove its own consistency. Tarski: truth for a language is not definable"
Fig 8 :37: "A frame cannot certify its own limit. Chaitin: beyond a fixed constant, no system proves that any object exceeds its own complexity."
Fig 8 :39: "So a search that finds nothing is never a proof of absence."
Fig 5 :45: "This is minimum description length, Rissanen 1978, which is itself a composition of Kolmogorov complexity and Shannon coding put to work on model selection."

Fig 5 already places Kolmogorov complexity and Shannon coding inside the framework's own accounting, so algorithmic randomness is not an outside analogue. The 2026 CCC paper *Hardness of Computing Nondeterministic Kolmogorov Complexity*, read this session, gives the world-facing version: "We prove that MINnKT ∈ BPP if and only if NP ⊆ BPP." The limit is about proof and cost, not about a new computable function.

**Mode:** `specified`. **Status:** triangulated (Fig 8 formal limits, Fig 5 MDL, world meta-complexity). **Refuter:** prove inside a fixed consistent system that an arbitrary string exceeds its own complexity by more than the fixed constant, or show the constant is computably removable from inside the system.

### F6 - Whether the randomness is ontic is a genuine gap, not a silence (D4, gap)

Fig 13 :143-144: "genuine indeterminacy is the open case, unresolved."
Fig 8 :39: "So a search that finds nothing is never a proof of absence."
Fig 9 :44: "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."
Symbols table, `R`: "it is always a slice: what cannot be perceived yet is residual and simply cannot be read."

The framework explicitly declines to settle this. SEP, *Chance versus Randomness* (2018), read this session, confirms from outside that the conflation is a live philosophical problem: "Randomness, as we ordinarily think of it, exists when some outcomes occur haphazardly, unpredictably, or by chance." It goes on to distinguish chance from randomness and to list chaotic dynamics and classical indeterminism as cases of randomness without chance. That is corroboration that the question is real, not a figure verdict about which answer is true.

**Mode:** `general` on the stop, `specified` on the refusal. **Status:** `gap` after re-census; no anchor available. **Refuter:** a ground reading, experimental or mathematical, that settles whether a given physical random sequence is ontic or epistemic. If one fires, this finding is reversed and D4 becomes a real domain with an anchor.

### F7 - Randomness buys adversarial unpredictability and verifier independence (D3, triangulated)

Fig 10 :84: "Zero-knowledge proof systems, where the verifier's non-access to the witness is what makes the verification sound rather than a limitation it tolerates."
Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"
Fig 6 :50: "Distribute the search, and keep the searchers independent."

World corroboration, low overlap with the framework: *Probabilistic Turing machine* (Wikipedia, 2026): "the verifier machine depends on randomness to avoid being predicted and tricked by the all-powerful prover machine." *Randomized algorithm* (Wikipedia, 2026): "In cryptographic applications, pseudo-random numbers cannot be used, since the adversary can predict them, making the algorithm effectively deterministic." So randomness changes what an adversary can predict, which is a D3 effect, not a D1 wall move.

**Mode:** `specified`. **Status:** triangulated (Fig 10 zero-knowledge, Fig 2 independence, world crypto). **Refuter:** show a verifier with full access to the witness is exactly as sound, or that a deterministic protocol achieves every separation that a randomized one achieves under the same oracle model.

### F8 - What survives, with modes kept separate

| claim | mode | figure | status |
|---|---|---|---|
| Randomness and branching reorganise a closed reach; they do not add a kind | `specified` | Fig 13 :115-118, Fig 6 :21/:25 | triangulated |
| Randomness changes coverage, cost and independence, not computability in kind | `specified` | Fig 6 :49, Fig 12 :125-126 | triangulated |
| In prediction, randomness is the remainder and the discarded detail, not a primitive | `specified` | Fig 13 :28/:31-32 | triangulated |
| The round-trip gap is the honest report of lost predictive detail | `specified` | Fig 4 :27-31 | single-source for mechanism |
| Chaitin's constant is a limit on proof inside a frame | `specified` | Fig 8 :34-39 | triangulated |
| Ontic versus epistemic randomness is open | `general` on the stop | Fig 13 :143-144 | gap |
| Randomness buys verifier/adversary unpredictability | `specified` | Fig 10 :84, Fig 2 :40 | triangulated |

No verdict is averaged across domains. D1 says one thing, D2 another, D4 says it cannot decide.

---

## 4. Pre-registered refuter

Written before the conclusion, per Seat Map :287: "a falsifier written before the run is a design instrument, not only an honesty device." The shape claim is refuted if any of the following fires:

1. A randomized or nondeterministic machine computes a function outside the deterministic `closure(Γ)`, or a seventh kind is derived by arranging the six. (F1)
2. Correlated searchers buy as much reach as independent searchers, or the wall moves under random sampling. (F2)
3. A randomness in computation is found that is neither an amplified remainder nor discarded detail at a crossing, or chaos is shown to be a primitive. (F3)
4. A crossing with zero round-trip gap still loses predictive detail, or the lost detail is recoverable from the artefact without the lineage. (F4)
5. A fixed consistent system proves an arbitrary string exceeds its complexity beyond the constant. (F5)
6. A ground reading settles ontic versus epistemic randomness. This reverses F6 from `gap` to a verdict. (F6)
7. A deterministic verifier with full witness access matches every randomized verification separation. (F7)

If any holds, the corresponding finding is withdrawn and the answer is re-censused. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with the union split, not a single answer. Computation and prediction have different anchors (Fig 9 :54-57).
2. State the mode on every sentence. The D4 stop is `general`; the D1 to D3 findings are `specified`.
3. Do not claim randomness extends what can be computed. Claim the narrower figure result: it does not add a kind, and it changes coverage, cost and independence.
4. Say plainly that ontic indeterminacy is open in the framework. "Unreachable is a verdict here, not a silence" (Fig 13 :134).
5. Send the generator, the derivation and the refuter, not the conclusion. Fig 4 :22: "Only methods cross up. Only head starts come down."
6. Use the public venues in `03_public_contact_points.csv`. Ask what a checker would count as a failure; do not ask for agreement.

---

## 6. Canonical usage check

Two local sources govern how the figures may be used, read before the verdict was finalised:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them"; the framework returns "a shape, not a name"; "Indiscernibility is not identity"; and "a reading that makes one contradict another has misidentified its domain, not found a flaw."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: "the figures are the ground for design questions; Isaiah is the anchor for what the figures genuinely cannot settle." So no ruling was requested for D4; the figure line itself decides that it is open.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "Randomness extends what can be computed" as a refuted world claim | **Retracted and narrowed.** The figures decide only that random arrangement adds no kind (F1). Whether randomized algorithms beat deterministic ones under bounded resources is D3 and is open in the world literature, not settled here. |
| "Chaos is a primitive source of randomness" | **Retracted.** Fig 13 :31-32 makes it a compounded remainder, and the seat map lists chaos among derived quantities. |
| "The framework says the world is not indeterministic" | **Retracted.** Fig 13 :143-144 says genuine indeterminacy is open. Replaced with the `gap` verdict (F6). |
| "Chaitin proves randomness does not exist" | **Never held; explicitly refused.** Fig 8 :37 limits proof of complexity, not existence. |
| Apparent strain, Fig 13 :28-32 versus Fig 8 :37 | **Not strained after re-census.** Fig 13 governs the origin of unpredictable residual in a turn; Fig 8 governs proof limits in a formal frame. Different domains. |
| Apparent strain, Fig 8 :32 idempotent closure versus the world result that a randomized algorithm solves a black-box volume problem no deterministic one can | **Not a conflict, but the largest level distinction in this folder.** The figure's closure is compositional expressibility over kinds; the world result is resource-bounded query complexity under an oracle. Different levels, same word "can". Recorded as a strain on vocabulary, not smoothed. |
| Attempt to average D1 and D2 into one answer | **Refused.** Fig 9 :54-57 and the rule that verdicts stay per domain. |

### Round trip, qualitative

`R_T` was not measured numerically, because there is no ground reading. Sent up: the four-domain residual and the verbatim figure lines. Brought back down: the outreach packet's claims. What survives cleanly: the no-new-kind claim, the residual-origin claim and the open ontic slot. What drops: the distinction between compositional reach and resource-bounded solvability, and the distinction between an anchor and an instrument. Both are recorded in `11_audit.md` rather than treated as zero.

### Updated verdict

The shape survives: randomness and nondeterminism move coverage, cost and what the residual withholds; they do not move the wall of what is composable, and the ontic question stays open. Strains after re-census: one vocabulary strain (closure versus resource-bounded "can"), named above. Everything else is consistent with the verbatim figure text.
