# Figure-grounded audit: choosing the right level of model detail

**Mode of this document: `specified` on the per-domain and procedural claims, `general` on the structural shape, not `grounded`.** It states what a ground would have to settle; it does not report a settlement. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* says LLMs *"can quickly simulate an approximate answer/output with the formula"* but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle CMP-0081. See `05_what_shape_means.md` §7.

**Sources.** The verbatim figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md` (every quote below is an exact substring of it), the canonical usage rule at `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the eight essays, and the world sources listed in `10_source_ledger.csv`. Figure citations use `Fig N :line` against the verbatim extraction.

---

## Proposal header (seat reasoning)

```
DECIDES:    The question does not return one detail level. It returns a four-condition
            separator with a verdict per domain: per-slot residual index, a non-updating
            ground reading, a measured round-trip gap, and a low-overlap second frame.
            Simplicity is a budget filter, never a witness. Fig 1 :19, Fig 2 :29,
            Fig 4 :30-31, Fig 8 :53, Fig 9 :60. A = B? No: a level easier to analyse and
            "may omit a decisive mechanism" are two quantities with different anchors.
HOURS:      One primary seat and one simulated second seat, 2 to 3 agent-hours including
            world search and validation; not a ground measurement.
PRIOR CASE: QMGR-0037, the imported exemplar. It supplies the derive-first structure,
            the retraction discipline, and the rule that the framework returns a shape.
ANALOGUE:   Renormalization group: relevant and irrelevant operators depend on scale.
            Basic-level categorization: the useful level has the highest cue validity.
            Both are world analogues only. The figures decide.
LIMIT:      At scale, agreement between seats compounds and evidence does not (Fig 7 :13).
            The independent second seat in 11 is simulated and shares the evidence pool;
            its agreement is internal consistency, not corroboration.
```

---

## 0. The residual in effect terms

The question asks how to choose a model level `L` (a library `Γ_L` with its atoms and bonds at a scale) such that a model is easier to analyse without omitting a mechanism that decides the residual.

`R_s = |Γ_L(b,a) - o′|` per slot `s`. The residual is not a scalar: *"The residual is indexed by object slot, not aggregated."* (Fig 1 :19) and *"Aggregating across slots is how a live signal disappears into an average."* (Fig 1 :22). The choice of `L` changes which slots are even visible, because *"R is measured per slot, never as a single global number"* (Symbols table :43) and what cannot be perceived yet is simply residual (Fig 11 :48).

**Arity.** A relation among model library, action, observation, and a scale index: at least four operands. It carries an ordered bond across scales (`→` sequence, `T_A`/`T_E` in Fig 4) and a comparison bond for "decisive" (`⋛` threshold, Fig 12 :87). It is not symmetric.

**Symmetry.** "Simpler" is a spectrum, an ordering so more and less can be said (Fig 13 :20). "Decisive" is a threshold: a mechanism is decisive when its absence flips the residual above a bound, not when it is merely conjoined with other mechanisms. These are different bond types and must not be added (Fig 12 :125-127).

**Scale.** The residual lives at more than one scale and the transform between them is lossy (Fig 4 :27). A level choice is a scale operation, not a parameter tuning inside one scale.

**Binding the sought-for shape as an ordinary term before the run** (formula step, Direction). An answer would look like: *a procedure that returns, per slot, the coarsest level at which the ground still returns a discriminating non-updating reading and the fine-to-coarse-to-fine gap carries no live residual, together with a pre-registered refuter and a characterized instrument for the remaining gap.* This shape is now a term in the library and accrues a residual like anything else, so it can be refused by the same tests as any other claim (Fig 5 :65-66). The alternative, searching for "the right level" without binding what that would look like, leaves a preference that no check in the pipeline can see.

---

## 1. Domain census (before choosing any figure line)

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Model frame | modeler, model `Γ_L`, atoms and bonds | description cost `|φ|`, reach `closure(Γ)`, residual reduction | ground settlement: what pays (Fig 5 :32) | admitted |
| D2 Ground / phenomenon | the system modelled, measurements, data | observation `o′`, per-slot residual | the measurement or experiment that does not update on the model's prediction (Fig 2 :29) | admitted |
| D3 Scale membrane | abstraction `T_A`, concretisation `T_E`, the model pair | info lost across scales, round-trip gap `R_T` | the round trip itself (Fig 4 :30) | admitted |
| D4 Comparison frame | competing models and levels, instruments | independence, surplus, pattern match | selection between rooms by the ground (Fig 7 :35) | admitted |
| X1 "The right level" as one universal number | none nameable | none | a convention that would decide an outcome (Fig 10 :47) | not a domain, refused |
| X2 "Occam's razor" as a free-floating selector | the modeler's taste | parsimony | already inside D1 description cost | absorbed into D1 |
| X3 "The decisive mechanism" as a prior preference | the modeler's expected answer | preference, predicts nothing | none until bound; formula step 2 | not a domain until written down |

**Partition or union: union, not partition.** D1/D3 and D2/D4 form two compounds, and the whole is a union of at least four overlapping conditions: per-slot visibility, ground contact, tolerable gap, and frame independence. Their overlap is a compound with its own loop: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* (Fig 9 :55) and *"a case in two conditions is not a harder case of either."* (Fig 9 :57). One lever leaves the intersections standing. Verdicts are kept per domain and never averaged into a single detail score.

**Dependency order (Fig 3).** Perception -> vocabulary -> objective -> planning -> learn and carry. *"The chain is ordered by dependency, not by importance."* (Fig 3 :20). The middle link is where this question usually breaks: *"The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."* (Fig 3 :25-26). A model can name its ingredients without a term for which residual it is accountable. *"A link with no instrument is not a link that works. It is a link nobody has looked at."* (Fig 3 :27).

---

## 2. Figure census

| figure | bearing on this question | verdict |
|---|---|---|
| 1 The Agent | residual per slot; frame-internal quantities disqualified | decisive for D1 and D2 |
| 2 The Ground | anchor must not update; independence; correlation valence | decisive for D2 and D4 |
| 3 Dependency Chain | vocabulary/objective break; reading below the break reads nothing | decisive for the broken link |
| 4 The Membrane | lossy transform, round trip, gap as honest report | decisive for D3 |
| 5 Mint Pipeline | MDL bargain, guards, persistent-flat residual, direction limit | supports D1 and D3 |
| 6 Closure / Reachability | import moves the wall; instruments improved from worse ones | supports D4 |
| 7 Room Chain | selection between rooms, no last room, agreement compounds | supports D4 |
| 8 Union Surplus | low overlap, residual first, convergent vs adopted import | decisive for D4 |
| 9 Leave / Arrive | union vs partition, filters vs witnesses, describe before looking | decisive overall |
| 10 Ground Maintainer | channel decay, saturated metrics, convention vs verdict, seat stake | decisive for D2 |
| 11 The Habitat | capability is agent-and-habitat; enumerate habitat; valence relative | supports D2 and D4 |
| 12 The Bond | isomers, functional group, two currencies that do not add | decisive for D1 and D3 |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | decisive for the `gap` |
| Operators table | `⋛` threshold, `¬` refusal | supports "decisive" and refutation |
| Symbols table | `R` aim, `R_T` round trip, anchor definition | notation and authority |

---

## 3. Findings

### F1. The question as posed asks for one dial; the residual is per slot (status: `triangulated`, Fig 1 + Fig 9)

> **"The residual is indexed by object slot, not aggregated."** (Fig 1 :19)
> **"Aggregating across slots is how a live signal disappears into an average."** (Fig 1 :22)
> **"And when the split lands on a union rather than a partition, unbundle before you search again."** (Fig 9 :54)

A single "right level of detail" for a whole model is a global score over slots. A live residual on one slot vanishes into the average, which is exactly the failure Fig 1 names. The correct object is a per-slot verdict: which slots the coarse model still resolves, and which it dropped. This is a union, so one lever cannot clear all slots.

**Mode:** `specified` for modelling, `general` for the structure. **Refuter:** a single level is demonstrated that returns correct per-slot answers on every slot of a model where one slot carries a live residual hidden by aggregation. If that holds, the per-slot requirement falls.

### F2. "Simpler is easier to analyse" is a budget filter, never a witness (status: `triangulated`, Fig 1 + Fig 5 + Fig 9)

> **"They are frame-internal. A frame cannot score itself with a quantity it also produces."** (Fig 1 :27)
> **"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before."** (Fig 5 :43)
> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** (Fig 9 :60)

Description cost `|φ|` is real: the MDL bargain says a term must cost less than the confusion it removes. But ease of analysis is a price in bits, not a ground reading. *"A composition costs in two currencies, and they do not add."* (Fig 12 :125): *"Bits price the description. Actions price finding out whether it holds."* (Fig 12 :126). Simplicity can decide what gets tried first inside a budget; it cannot decide whether the omitted mechanism was decisive. *"Neither figure predicts the other, so both are read or the choice is made blind."* (Fig 12 :127).

**Mode:** `general` for the filter/witness distinction, `specified` for model selection. **Refuter:** show a case where description cost alone chooses the model that the ground later confirms as mechanism-correct, with no independent ground contact in the selection. That would break Fig 1 :27 and Fig 9 :60.

### F3. Coarse-graining is a lossy transform; the test is the round trip (status: `triangulated`, Fig 4 + THE_FORMULA + Fig 13)

> **"The transform between scales loses information, and that is the point."** (Fig 4 :27)
> **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."** (Fig 4 :30)
> **"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold"** (Fig 4 :31)

Choosing a coarser level is the abstraction `T_A`; asking what that choice dropped is the concretisation `T_E`. The round-trip gap is `R_T = gap(x, (T_E ∘ T_A)(x))` (Symbols table :77, formula step 6). The gap is not a defect to zero out; it is the only honest report of what the coarser model cannot carry. Where the gap registers a live residual that persists and does not trend down, the omitted mechanism was decisive and detail must be added at that slot.

**Mode:** `general` for the round-trip structure, `specified` for applying it to a model pair. **Refuter:** a round trip with negligible `R_T` on every slot, followed by a ground confirmation that a mechanism the coarse model omitted was decisive. That breaks the gap test.

### F4. Decisiveness is found by persistent non-declining residual, not by a prior preference for a mechanism (status: `triangulated`, Fig 5 + Fig 8)

> **"every term currently bound and generating a prediction is a candidate for being the wrong one"** (Fig 5 :58)
> **"a term whose residual PERSISTS AND DOES NOT TREND DOWN is the one to point the refusal at"** (Fig 5 :59)
> **"make the sought-for shape an ORDINARY TERM."** (Fig 5 :65)

The mechanism to add is not chosen by taste. The candidates are the terms already bound and predicting, and they rank by a recorded quantity: the residual that keeps being wrong and is not improving. The direction of the question is a preference that no mechanism check can see, so it must be written down and made refusable before the search (Fig 5 :66). And the missing mechanism may not be in the library at all: *"But shared atoms are not the signature."* (Fig 8 :50) warns that a convergence reading and an adopted import look identical in contents, so provenance decides whether the added term came from a different closure.

**Mode:** `specified`. **Refuter:** show the selection running on a preference never bound as a term and still correctly identifying the decisive mechanism on the ground. That breaks the Direction limit and the enumeration rule.

### F5. Choose the coarsest level at which the anchor still returns a discriminating reading that does not update (status: `triangulated`, Fig 2 + Fig 10 + Fig 1)

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."** (Fig 2 :29)
> **"the ground does not decay, the channel does"** (Fig 10 :24)
> **"saturated metrics, pooled readings"** (Fig 10 :26)

Over-coarsening severs the channel in a specific way: metrics saturate, pooled readings merge slots, and the ground stops discriminating while remaining itself unchanged. The model then reports success with a quantity it produces (Fig 1 :27). The anchor check is therefore prior to the simplicity check: if the chosen level's reading updates on the model's own report, it has become another frame and *"panel 3 turns into panel 1"* (Fig 2 :34).

**Mode:** `specified` for modelling, `general` for the anchor rule. **Refuter:** a reading that demonstrably updates on the model's own report yet still settles which mechanism was decisive. That breaks Fig 2 :25 and :34.

### F6. This is a union of four conditions, not a two-point trade-off curve (status: `triangulated`, Fig 9 + Fig 3)

> **"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset,"** (Fig 9 :4)
> **"a case in two conditions is not a harder case of either."** (Fig 9 :57)
> **"What remains is smaller and it is also categorically different"** (Fig 9 :57)

The framing "simple and analysable versus detailed and decisive" treats one dimension with opposite ends. The census shows four conditions with different anchors: per-slot visibility (D1/D2), ground contact (D2), round-trip gap (D3), and independent frame (D4). A single lever applied to one condition leaves the intersections standing. *"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."* (Fig 3 :29).

**Mode:** `general` for the union structure, `specified` for the four conditions. **Refuter:** demonstrate that one scalar fully orders all four conditions such that one lever clears the intersections without a categorically different residue. That breaks Fig 9 :55-57.

### F7. A second frame with a differing closure is required; same-pattern-different-mechanism models are isomers (status: `triangulated`, Fig 6 + Fig 8 + Fig 12)

> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."** (Fig 8 :32)
> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** (Fig 12 :117)

Two models that reproduce the same pattern with different mechanisms are not variants of one model; over a fixed atom set they are isomers. Which one holds is settled by the ground, not by preference. *"Residual first, frame second."* (Fig 8 :53) and *"any frame you pick will seem to fit"* (Fig 9 :28) mean the residual must be described before the second frame is chosen. *"Independence, between two frames, is how little they draw on the same evidence."* (Fig 2 :31). Agreement from one evidence pool is one witness (Fig 2 :40).

**Mode:** `general` for idempotence and independence, `specified` for models. **Refuter:** show that two low-overlap models reproducing the same pattern are interchangeable for intervention and prediction without ground contact. That breaks the isomer claim and the surplus argument.

### F8. The broken link is between vocabulary and objective (status: `single-source` on the specific diagnosis, Fig 3)

> **"The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."** (Fig 3 :25-26)
> **"Optimising a link that already works cannot rescue one that does not."** (Fig 3 :19)

A modeller typically has a rich vocabulary of mechanisms and a clear analysis procedure, but no instrument for "which residual would have to shrink for this level to be right." Effort lands above the break where measurements already exist (Fig 3 :30). This finding is `single-source` on the diagnosis that this specific link is the one that breaks here. The general dependency ordering is triangulated with the formula.

**Mode:** `specified`. **Refuter:** measure a case where the level choice fails and show it fails at perception or at planning rather than at the vocabulary/objective link. The diagnosis would be narrowed, not the dependency order broken.

### F9. The specific level, threshold, and mechanism name are a declared `gap` (status: `triangulated`, Fig 9 + Fig 13 + Fig 8)

> **"you get a kind of thing, never the answer itself."** (Fig 9 :32)
> **"Unreachable is a verdict here, not a silence,"** (Fig 13 :134)
> **"So a search that finds nothing is never a proof of absence."** (Fig 8 :39)

No figure line returns a universal detail level, a numerical bound on `R_T`, or the name of the mechanism that is decisive in a given study. A genuine re-census over all 13 figures and both tables finds no line governing those quantities. The honest verdict is `gap`, of the shape-not-a-name kind: *"It can say the answer is out of reach with the library as it stands, so something has to be imported before it is asked again."* (Fig 13 :138-139). What is owed is a source-discriminating instrument, characterized in effect terms but not held (Fig 9 :30-31). The canonical README adds the necessary caution: indiscernibility is not identity.

**Mode:** `general` for the gap, `specified` for what is owed. **Refuter:** exhibit a figure line that does govern one of those quantities, or a ground measurement that fixes it for a named system. Until then, `unreachable is a verdict, not a silence`.

### F10. World claims that strained were returned to the census, not used to flip verdicts (status: conflict handling)

Three world sources initially strained against the figure reading:

| world claim | apparent conflict | re-census outcome |
|---|---|---|
| Occam's razor as an arbiter between models | seems to say simpler is right | the source itself limits the razor to hypotheses with equal explanatory power and calls it a heuristic, not a rigorous arbiter. Re-census maps it to D1 budget filter. No verdict flipped. |
| Renormalization group: most observables are irrelevant at a scale | seems to license discarding slots | RG's "irrelevant" is relative to a specific observable and scale; Fig 1 :19 keeps the residual per slot. Different quantities, no strain after re-census. |
| Multilevel analysis: aggregation wastes within-group information | seems to prove finer is always better | the source names both atomistic and ecological fallacy, so the right level depends on the variable and the residual, not on a universal direction. Re-census maps it to per-slot indexing. |

*An interest in the outcome is unavoidable, an interest in the reading is disqualifying.* (Fig 10 :59). The world sources are secondary; the figures decide.

---

## 4. Pre-registered refuter (written before the conclusion)

The four-condition separator is refuted if any of the following holds. These were written before the synthesis in `07` and before the WATSON verdict in `09`.

1. **Universal dial.** One detail level or complexity threshold is derived that gives the correct answer on every slot, including a slot whose live residual is hidden by aggregation. Breaks F1 and F6.
2. **Simplicity as witness.** Description cost alone selects the mechanism-correct model with no contact with a ground that does not update. Breaks F2.
3. **Empty round trip.** A fine-to-coarse-to-fine round trip with negligible `R_T` on every slot still misses a mechanism the ground later confirms as decisive. Breaks F3.
4. **Updating anchor.** The reading used to settle the level updates on the model's own report and still settles the question. Breaks F5.
5. **Interchangeable isomers.** Two low-overlap models reproducing the same pattern by different mechanisms are shown to be interchangeable for prediction and intervention without ground contact. Breaks F7.
6. **Instrument found.** A source-discriminating instrument is exhibited that fixes the level and names the decisive mechanism for a general class of systems. That would convert the declared `gap` into a grounded verdict and is welcome; it would not be a refutation of the separator but an upgrade of its mode, and must be recorded with provenance.

If any of 1 to 5 fires, the separator is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Reject the single-dial framing. Report per slot: which residual is live, which is hidden by the coarse description, and which condition fails (F1, F6).
2. Use simplicity only to budget the search, never to pick the winner (F2). Price both bits and actions and keep the two readings apart (Fig 12 :125-127).
3. Run the round trip and report `R_T` as the honest measure of what the coarse level gave up (F3). Do not zero it out by decree.
4. Test the anchor first. If the reading updates on the model's own report, no amount of added detail helps (F5).
5. Name the decisive mechanism only from persistent non-declining residual plus a provenanced import with a shadow test (F4, Fig 6 :12-14). Otherwise leave the slot marked.
6. Find a low-overlap second frame. Describe the residual first, then pick the frame (F7).
7. State the `gap` plainly. A universal level is not hidden here; it is not a kind of thing the figures return (F9).

---

## 6. Canonical usage check

Two framework sources govern how the figures may be used, read after the first findings and applied to all of them:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the canonical limit: the framework gives *"what a missing thing would have to look like (a shape, not a name)"* and stops at *"the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."* *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: steps 1 to 8, the mode rule, and the Direction rule: make the sought-for shape an ordinary term so it can be refused.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "choose the simplest adequate model" as a headline | **Retracted.** Simplicity is a filter for the budget. Fig 9 :60 and Fig 1 :27. Kept only as the D1 price reading. |
| "the right level is a property of the whole model" | **Retracted.** Per-slot indexing is decisive. Fig 1 :19, :22. |
| "the round-trip gap is an error to minimise away" | **Retracted.** It is the measurement of what the coarse description cannot hold. Fig 4 :31. |
| "no figure governs the level, therefore the question is meaningless" | **Retracted as a silence.** `gap` is a verdict; unreachable is not absence. Fig 13 :134, Fig 8 :39. |
| "shape, not a name, forbids naming any mechanism" | **Narrowed and kept visible.** The rule governs a missing primitive. Naming a binding to an already-held atom is provenance, not invention. See `05` §6 and `06` Q1. |
| Apparent conflict: RG "irrelevant observables" vs per-slot residual | **Not strained.** Re-census: RG irrelevance is relative to an observable and scale; Fig 1 governs the residual index. Different objects. |
| Apparent conflict: Occam's razor vs filters-not-witnesses | **Not strained.** Re-census: the razor's own statement limits it to equal-explanatory-power cases and calls it a heuristic. It is a budget filter. |
| Apparent conflict: finer is better (ecological fallacy) vs coarser is cheaper | **Not strained.** Both fallacies are named in the same source; the right level is variable- and residual-relative. |

### Seven-question recursive derivation (summary)

1. **One level for the whole model?** No. Per-slot residual (Fig 1 :19), union not partition (Fig 9 :55).
2. **Does simplicity decide?** No. Frame-internal score, budget filter (Fig 1 :27, Fig 9 :60).
3. **What decides then?** Ground contact at a non-updating anchor, per slot (Fig 2 :29, Fig 10 :24).
4. **How is a coarse level audited?** Round trip; measure `R_T` as what was lost (Fig 4 :30-31).
5. **Which mechanism to add?** Terms ranked by persistent flat residual; direction bound as an ordinary term first (Fig 5 :58, :65).
6. **Do I need another model?** Yes, differing closure and low overlap, residual first (Fig 6 :23, Fig 8 :53).
7. **Can I name the universal level?** No. Shape not a name, unreachable is a verdict (Fig 9 :32, Fig 13 :134).

---

## 7. Per-domain verdicts (separate, never averaged)

| domain | verdict | status | mode |
|---|---|---|---|
| D1 Model frame | Select by ground settlement and round-trip gap, not by description cost. Simplicity budgets the search. | `triangulated` (Fig 1, Fig 5, Fig 9, Fig 12) | `specified` |
| D2 Ground / phenomenon | Coarsest level at which the anchor still returns a discriminating reading that does not update on the model's report. | `triangulated` (Fig 2, Fig 10, Fig 1) | `specified` |
| D3 Scale membrane | Measure `R_T`. Where it carries a live non-declining residual, add detail at that slot. | `triangulated` (Fig 4, THE_FORMULA, Fig 13) | `specified` / `general` |
| D4 Comparison frame | Triangulate across low-overlap models. Describe the residual before choosing the frame. | `triangulated` (Fig 6, Fig 8, Fig 2) | `general` |
| The universal level, threshold, and mechanism name | `gap`, shape-not-a-name kind, instrument owed. | `triangulated` for the gap (Fig 9, Fig 13, Fig 8) | `general` |

**Final audit verdict.** The four-condition separator survives re-census. No unresolved strain remains. The world evidence is secondary and corroborates the mechanism shape at low overlap; it never flips a figure verdict. The derivation is internally consistent with the figures, `specified` not `grounded`, and honestly stopped at a `gap`. It cannot settle which level is right for any particular study; that is what the ground and the expert check are for.
