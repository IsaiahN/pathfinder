# Figure-grounded audit: which limits come from architecture and which from resources

**Mode of this document: `specified` on the shape, `general` on the distinction, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** By *The Recursive Self-Improvement Trap*, LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle which cause is active in any particular AI system. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, cited as `Fig N :line`), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. World sources are listed in `10_source_ledger.csv` and used only as secondary corroboration.

---

## 0. The residual, stated in effect terms

A system's performance falls short of what is wanted. The question asks us to sort the shortfall into two causes.

- **Option A, architectural.** The system's library `Γ` does not contain the term, and composition inside `closure(Γ)` cannot reach it. The remedy is an import: a new primitive, or contact with a frame whose closure differs. Effort spent as more data, compute, or energy is effort spent inside a wall that does not move.
- **Option B, resource.** The term is already in `closure(Γ)` but was not found, not settled, or not represented at sufficient resolution. The remedy is more search, better allocation, or a sharper instrument.

What each leads to: A leads to changing the kind of system or importing from another frame. B leads to buying more of the same resource. Mislabeling A as B spends an unbounded budget against a fixed wall; mislabeling B as A imports an atom that was not needed and, by Fig 6, costs more than starting from primitives.

**What an answer would look like, bound as an ordinary term (formula step "Direction"):** a decision procedure that says which cause is active, plus a stated cost of being wrong, plus the instrument that would reverse the classification. The sought shape is not itself a term the loop can see, so it is written down here and made refusable in §3.

---

## 1. Domain census (before any figure line was chosen)

**R by arity, symmetry, scale.** Arity: the question proposes two causes, but it is a **union compound**, not a partition, because a third condition (search at the same reach) and a fourth (contact with the habitat) also produce shortfalls. Symmetry: asymmetric. Architecture sets the wall; budget sets how much of the already-reachable space is visited. Scale: architecture operates at the level of kinds and primitives (Fig 13); resources operate on arrangements inside a fixed closure (Fig 13 :115-118). A claim that mixes the two scales is a type error.

**One line per domain: actors / currency / anchor.**

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D1, architecture / closure | `Γ`, `atoms(Γ)`, `closure(Γ)`, the wall, IMPORT | composition and reach | the figures as metalaws; a measurement for any specific wall | partition boundary: what composes across the two kinds |
| D2, resources / budget | searchers, corpus, FLOPs, watts, tokens, instruments | bits and actions (two currencies) | the ground, by measurement | unfound versus unfunded inside a fixed reach |
| D3, habitat / contact | the model, the environment, the benchmark, the user | contact with the ground | the ground, never agreement | agent-and-habitat, not agent alone |
| D4, verification / evaluation | metrics, benchmarks, expert readers | agreement and residual | the ground, never agreement | which cause is active |

**No nameable anchor means it is not a domain yet.** All four have one: the figures for D1, measurement for D2 and D3 and D4. D4's anchor is the ground rather than the readers' agreement, so reader agreement cannot decide a classification.

**Partition or union.** A union with overlapping conditions. Fig 9 :4 opens: "First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." Fig 9 :54 adds: "And when the split lands on a union rather than a partition, unbundle before you search again." A single lever that buys more compute clears the region where only the budget condition holds and leaves the wall standing.

**Order by dependency (Fig 3).** Settle D1 first: whether the term is in the closure at all decides whether D2's question is even well posed. Then settle D2 (SEARCHED before INWARD before OUTWARD, formula step 7). D3 and D4 must be read before either, because a benchmark solve can masquerade as capability and a metric can masquerade as a new atom. Fig 3 :20: "The chain is ordered by dependency, not by importance." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

**Strain test applied during the census.** "Architecture" in machine-learning discourse names implementation choices (attention variant, depth, precision). "Architecture" in the figures names the closure of a frame, that is, its atoms, bonds, and the wall they define. These are different referents. An architecture change is an import in the figures' sense **only if** it adds a new atom or kind to `Γ`; if it merely rearranges existing atoms it is a budget-like search inside the same reach. This is recorded as a live strain in §6 and is the reason a re-census, not a softer reading, was needed.

---

## 2. Findings

### F1 — The question's binary is a compound, not a partition (`general`, triangulated)

Fig 8 :40-41: "Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."

Fig 6 :48-49 adds a third condition: "more search at the same reach: is it in here and unfound? The closure does not change. Same atoms, same wall, more of the space actually visited."

So there are at least three states, not two: (i) underivable, the term is not in the closure; (ii) unreachable at this budget, the term is in the closure and was not found; (iii) unfound at the same reach, more of the same space needs visiting. State (iii) is not a new atom and not a new wall. Fig 9 :4 requires a split rather than a search. Treating the question as a two-way partition is the first error to repair.

**Refuter:** show that all observed shortfalls are sorted exhaustively by a single scalar budget, with no residual term that persists and does not trend down under more search at fixed architecture.

### F2 — Architectural limits are closure limits (`specified`, triangulated)

Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."

Fig 6 :21: "MINT composes inside the closure and can never add an atom."

Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."

Fig 13 :113: "The array is unbounded and the reach is not. More compositions never add a member, and no chain reaches outside what the six and their bonds already span."

Fig 13 :118: "infinite effort inside a finite reach."

Fig 13 :115: "The set is closed. The arrangements are not. That gap is why import exists."

These are three low-overlap routes: an idempotence law (Fig 8), a wall-and-import operator law (Fig 6), and an unbounded-arrangements/finite-reach law (Fig 13). They converge on the same shape: an architectural limit is a limit on what is composable at all, and it is moved only by import, not by buying more of what the frame already holds.

World corroboration, secondary: Merrill and Sabharwal place log-precision transformers in `TC0` and state that "any massively scaled up model—transformer or otherwise—will likely obey restrictions similar to the ones derived here for log-precision transformers." This is a conditional theorem, not an unconditional wall; see the strain in §6.

**Refuter:** produce a case where more data, compute, and energy at a strictly fixed closure adds a new kind rather than visiting more of the same space, or derive a new member from the held set (breaks Fig 13's minimality).

### F3 — Resource limits are budget limits inside a fixed closure (`specified`, triangulated)

Fig 8 :41-42: "Unreachable-at-budget: the term is already in the closure and was not found, so the remedy is more search, not another atom."

Fig 6 :49: "more search at the same reach: is it in here and unfound? The closure does not change. Same atoms, same wall, more of the space actually visited."

Fig 12 :127: "the budget is what decides how much of the space is reached at all."

Fig 6 :39: "instruments do not have to improve by small steps. A jump in resolution is fine."

Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something."

So data, compute, and energy are budget quantities that decide coverage, not kinds. The remedy is distributed, independent search, or an instrument improved from a worse one that was already returning something. Fig 6 :40 bounds this: "What is unavailable is a sensor for something that has never registered anywhere, at any resolution. That is the whole of it."

World corroboration, secondary: Hoffmann and colleagues report that "our main finding is that the current large language models are far too large for their compute budget and are not being trained on enough data." That is a budget-allocation result inside a fixed architecture, exactly F3's shape. Villalobos and colleagues forecast that the stock of public human text will be fully used between 2026 and 2032 and note that "the growth in compute is also subject to limits," which is a budget bound, not a claim that a new kind has become impossible.

**Refuter:** show that an apparent budget shortfall persists unchanged under arbitrarily more independent search at the same closure AND that the term is derivable in the closure after all. If it is not derivable, it was F2 all along.

### F4 — From inside the frame, the two causes look the same (`general`, triangulated)

Fig 6 :27: "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."

Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces."

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

A single average loss curve is a frame-internal quantity. It cannot tell depth from absence. This is the figure-grounded reason the question cannot be answered by reading a scaling plot: the observation underdetermines the cause. The classification requires a discriminating intervention, which D4 supplies.

World corroboration, secondary: Schaeffer and colleagues conclude that "alleged emergent abilities evaporate with different metrics or with better statistics, and may not be a fundamental property of scaling AI models." Shojaee and colleagues report a "counter-intuitive scaling limit" in which reasoning effort "declines despite having an adequate token budget." One says the apparent new atom was a metric artifact; the other says the shortfall persists despite budget. Both fit F4: the raw curve does not decide the cause.

**Refuter:** exhibit a single metric on model outputs that reliably separates underivable from merely-unfound without any ground intervention or change of instrument.

### F5 — The two resource currencies do not add (`specified`, single-source for the figure, corroborated in the resource literature)

Fig 12 :125-126: "A composition costs in two currencies, and they do not add. Bits price the description. Actions price finding out whether it holds."

Fig 12 :127-128: "They are in different units, so a system holding one accounting cannot compare them and will not notice the shortfall. It proposes arrangements it cannot afford to test, and the budget is what decides how much of the space is reached at all."

Fig 12 :130: "Summing them into one figure is the error this names, not the fix for it."

Data is bits; compute and energy price actions and test coverage. A single "scaling" number that adds parameters, tokens, and FLOPs hides which currency is short. This is why the Chinchilla result (more tokens per parameter at fixed FLOPs) mattered: it re-allocated within a budget rather than adding a kind.

**Refuter:** provide a single unit in which description cost and test cost are commensurable, such that optimizing the sum never proposes an arrangement it cannot afford to test.

### F6 — A third category: contact with the habitat (`specified`, single-source in the figures)

Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone."

Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves."

Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."

Some observed "performance limits" are limits of the habitat or benchmark, not of the model's closure and not of its budget. Scaling the agent in isolation does not move them. This category is single-source within the framework, so it is marked as such; the Apple puzzle results (collapse at high compositional depth despite adequate token budget) are compatible with it but do not settle it.

**Refuter:** show an agent-only improvement that moves the ground on the same task while leaving contact and habitat fixed.

### F7 — Search first, then inward, then outward (`general`, triangulated with formula step 7)

Formula step 7 names three distinct questions: SEARCHED ("is it in here and unfound?"), INWARD (extend the instrument), OUTWARD (import). Fig 8 :30-31 says "underivable, and searchable" and "Neither answer tells you much about the other. Run them as two tracks, and never read one against the other." Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."

The practical order is forced: SEARCHED is cheapest and the other two assume its answer. Buying a new architecture before sweeping the current one at fixed reach is the priced error of importing against a budget limit.

**Refuter:** show a case where OUTWARD succeeds while SEARCHED was never attempted at comparable budget, with the imported atom later found to be already in the original closure.

### F8 — What survives, with modes

| claim | mode | figure line | status |
|---|---|---|---|
| Underivable and unreachable-at-budget are different facts | `general` | Fig 8 :40 | triangulated with Fig 6 :48 |
| More budget cannot add an atom inside a closure | `specified` | Fig 8 :32; Fig 13 :113 | triangulated across three figures |
| A budget shortfall is cured by more search or a sharper instrument, not a new atom | `specified` | Fig 8 :41-42; Fig 6 :32 | triangulated |
| Depth and absence are indiscernible from inside | `general` | Fig 6 :27 | triangulated with Fig 1 :22/:27 |
| Bits and actions do not add | `specified` | Fig 12 :125-130 | single-source in the figures |
| Contact limits are neither architecture nor resource | `specified` | Fig 11 :39-40 | single-source |
| This or that observed LLM limit is architectural | `grounded` | none | **not claimed**; requires a ground reading |

---

## 3. Pre-registered refuter (written before the conclusion)

Seat Map :287: "And a falsifier written before the run is a design instrument, not only an honesty device." Seat Map :281: "An unmeasured quantity is a specification of what to measure and is worth having, it is not a verdict."

The shape claim is: the two named causes are distinguishable in principle but not from inside the frame by inspection, and a third contact category exists. It is refuted if any of the following holds.

1. A single measure on model outputs reliably assigns the active cause without a ground intervention or a change of instrument.
2. At strictly fixed closure, more data, compute, and energy add a new kind rather than visiting more of the same space.
3. An architecture swap at equal or lower data, compute, and energy produces a capability that arbitrarily more budget at the old architecture cannot, on the same task and against the same ground. (This would not refute the distinction; it would refute the claim that F2 is hard to detect. Recorded so the claim cannot dodge a cheap disconfirmation.)
4. A metric change on the same outputs turns an apparent new capability into a continuous curve, where the capability claim had been used as evidence for an architectural limit.
5. An agent-only improvement moves the ground while contact and habitat are held fixed.
6. A seventh primitive is derived from the six.

If any fires, the corresponding finding is withdrawn and `07_the_tether_answer.md` is revised. Until one is run, no part of this folder may be labelled `grounded`.

---

## 4. Recommendation

1. Split the question before answering it. Report three or four verdicts, never one averaged verdict (Fig 9 :4, Fig 1 :19).
2. For each observed limit, run SEARCHED first at fixed architecture, then INWARD (sharper instrument), then OUTWARD (import), and keep the three records separate (formula step 7).
3. Hold bits and actions in separate accounts; never publish a single "scaling" score as if it were the budget (Fig 12 :130).
4. Treat a benchmark solve as a wiring result, not a capability result, until contact with a real habitat is shown (Fig 11 :70).
5. Report an unresolved limit as "unreachable with the library as it stands," not as silence. Fig 13 :134: "Unreachable is a verdict here, not a silence."
6. Figure 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." Publish the round-trip gap `R_T` alongside any condensation of this audit (see §6).

---

## 5. Canonical usage check and retraction log

Two canonical sources were read after the first four sections and govern how the figures may be used: `FRAMEWORK/reference/FIGURES_README_canonical.md` ("They outrank everything else in the repo... the quotes are the authority, not this summary"; "a reading that makes one contradict another has misidentified its domain, not found a flaw") and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` (the figures are the ground for design questions; "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict").

| earlier reading | status after the canonical check |
|---|---|
| "architecture versus resources is a partition" | **Retracted.** It is a union compound with a third unfound-at-same-reach condition and a fourth contact condition. Fig 8 :40 and Fig 6 :48 govern; Fig 9 :4 requires a split. |
| "the parallelism tradeoff proves transformers cannot do X, so the limit is architectural" | **Narrowed.** The theorem is conditional on unproven complexity conjectures and asymptotic. It corroborates the shape of an underivable limit; it does not certify a specific production system's wall. |
| "the emergent-abilities mirage result refutes scaling" | **Narrowed.** It refutes a metric-induced discontinuity, not scaling. It corroborates F4 (the metric is frame-internal) and leaves resource limits intact. |
| "the Apple collapse result proves an architectural wall" | **Narrowed.** Collapse despite adequate token budget is compatible with F2, F3, or F6. The experiment does not discriminate. Recorded as compatible, not as evidence for one cause. |
| "the Chinchilla result shows no new principle is needed" | **Retracted.** It is a budget-allocation result inside a fixed closure, F3. It says nothing about F2. |
| "shape, not a name forbids saying which cause is active" | **Narrowed.** The framework returns the shape of the decision procedure, not a name for the cause of a particular observed limit. Naming a cause requires ground contact. |
| "architecture in ML and architecture in the figures are the same thing" | **Retracted.** Different referents. An ML architecture change is an import only if it adds a new atom or kind; otherwise it is a rearrangement inside the same reach. Strain named, not hidden. |
| F1, F2, F3, F4 | **Canonically confirmed.** Fig 8 :40, Fig 8 :32, Fig 6 :23, and Fig 6 :27 are quoted verbatim from the extract and are consistent with the metalaw reading. |

---

## 6. Round-trip gap `R_T` and strains

The Symbols table defines `R_T` as `gap(x, (T_E ∘ T_A)(x))`. Fig 4 :30 requires it to be measured rather than assumed zero.

1. **Sent up (`x`):** the verbatim figure set, chiefly Fig 8 :40, Fig 8 :32, Fig 6 :23/:27/:48, Fig 13 :113/:118, Fig 12 :125-130, Fig 11 :39-40.
2. **Abstraction (`T_A`):** the shorthand used in `07_the_tether_answer.md`, "architecture sets the wall, resources set coverage, and the two look the same from inside."
3. **Concretisation (`T_E`):** a working answer to the question as asked, "changes to architecture fix the first class of limits; more data, compute, and energy fix the second."

**`R_T` is nonzero.** Four constraints in the shorthand do not survive the trip down:

- the unfound-at-same-reach third condition (Fig 6 :48);
- the two-currency rule, which forbids a single budget figure (Fig 12 :125-130);
- the contact/habitat category (Fig 11 :39-40);
- the indiscernibility of depth and absence from inside (Fig 6 :27).

Conversely, one thing survives cleanly: underivable and unreachable-at-budget are different facts with different instructions. That is the residue worth sending. `R_T` was **not** measured numerically, because no ground reading exists; it is recorded qualitatively as the enumerated set of dropped constraints. Treating "the formula is the condensed version of the metalaws" as identity would set `R_T` to zero and would be the dead-reckoning error Fig 4 :30 names.

**Strains after re-census:**

- **Conditional architecture impossibility.** The complexity results are conditional and asymptotic; the figure's "underivable in principle" is definitional closure. Different objects, so no contradiction, but the world source cannot be promoted to a figure line. Live strain, named.
- **Metric artifact versus real collapse.** Schaeffer and Shojaee appear to conflict. Re-census resolves it: Schaeffer measures the metric's effect on a fixed output family; Shojaee measures accuracy against compositional depth at a fixed metric. Different objects, no strain after re-census.
- **"Architecture" referent.** Live strain, named in §1. It is a vocabulary collision between domains, not a figure conflict; the re-census rule from the canonical README applies.

**After re-census: two strains live, both named, none hidden.**

---

## 7. Verdict of this audit

The figures govern this question directly. The answer is a shape plus a procedure: distinguish underivable (architecture, import required) from unreachable-at-budget (resources, more search required), add the unfound-at-same-reach and contact conditions, and admit that no single curve decides the case. Verdicts are kept per domain and never averaged. Mode `specified`, ungrounded, candidate. Nothing here claims that any named real system's limit has been correctly classified.
