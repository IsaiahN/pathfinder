# Figure-grounded audit: comparing uncertainty-reducing information with action-changing information

**Mode of this document: `general` on the structural findings, `specified` on the decision-making application. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself"* (`05_what_shape_means.md` §6). This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Sources.** Figure lines are quoted verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited `Fig N :line`. Method from `THE_FORMULA.md` and `60_FIGURES_AS_METALAWS.md`. World sources actually opened are in `10_source_ledger.csv` and `09_watson_answer.md`.

---

## 0. The residual in effect terms

The ordinary practice of "value of information" prices information in one scalar, typically money or expected utility: EVPI, EVSI, expected net gain of sampling (Howard 1966; Keisler et al. 2014, both read). The question asks how to compare two items that behave differently:

- **U:** information that reduces uncertainty. It changes `b` toward `o'`, lowering `R` per slot, while the library Γ, `closure(Γ)`, and the set of composable actions stay fixed. It answers "which of the actions I already have is best?"
- **A:** information that changes what actions are possible. It adds a term or an affordance, extends an instrument, changes contact with the habitat, or refuses a held term. It answers "what actions are available to me at all?"

The residual is not "what is the value of each?" but **"can these two be placed on one scale without losing a constraint?"** The framework supplies a direct test: if an accounting cannot hold both currencies, the comparison is a compound, not a subtraction (Fig 9 :55-57).

**What an answer would look like, bound before the run (Formula "Direction"):** a classifier by effect on the reach, two separate ledgers with their own anchors, a dependency order, and a named instrument that would merge them if one exists. Bound now so it can be refused by the same test as everything else.

R by arity, symmetry, scale: arity two (the two information kinds plus the decision-maker and the ground), ordered not symmetric (refuse before mint, search before import, Formula step 2 and step 7), scale one loop within a closure and a lossy crossing at the membrane (Fig 4).

---

## 1. Domain census before choosing any figure line

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| **D1 Within-closure inference** | belief `b`, action `a`, observation `o'`, slots `s`, Γ | residual reduction per slot; description length in bits | the ground: a measurement, experiment, counter or market (Fig 2 :29) | admitted |
| **D2 Reach and action-space change** | frames with differing closures, imported primitives, instruments, habitat actors and relations | atoms added or standing removed; contact changed; actions priced in actions | the ground, plus provenance and a shadow test for any import (Fig 6 :12-13) | admitted |
| **D3 Valuation and comparison** | the decision-maker, two ledgers, the verifier | bits for the description, actions for finding out whether it holds | the ground, never an aggregate or an audience's agreement (Fig 9 :60) | admitted |
| **X1 "value of information" as one market price independent of users and uses** | analyst | money | not nameable once users and context are removed | not a domain yet; Glynn et al. 2022 explicitly doubt it |
| **X2 audience receptiveness as a proxy for value** | recipients | likelihood of agreement | none: selecting for agreement manufactures the correlation it would measure (Fig 2 :40) | not a domain; forbidden as a verdict input |
| **X3 "important information" as a free-floating property of the message** | the message | salience | none: valence is relative to the residual (Fig 11 :49) | absorbed into D1 and D2 |

**Partition or union.** D1 and D2 are not two levels of one quantity. They are a **union of overlapping conditions**, and must be unbundled before search (Fig 9 :54-57): a case in two conditions is not a harder case of either. D3 is the compound's accounting layer. Verdicts are kept per domain and never averaged.

**Dependency order (Fig 3).** Describe R in effect terms first (Fig 9 :27-28); run SEARCHED before INWARD or OUTWARD because it is cheapest and the other two assume its answer (Formula step 7); refuse before mint (Formula step 2); settle each first-order change before composing over it (Fig 12 :104).

**Strain test applied before concluding.** A line that only fits by forcing is aimed at another quantity and sends us back to census. Two apparent strains were found and resolved, not smoothed (§5).

---

## 2. Figure census (all lines quoted before concluding)

| figure | verbatim bearing | verdict on this question |
|---|---|---|
| 1 The Agent | *"The residual is indexed by object slot, not aggregated."* (Fig 1 :19); *"Aggregating across slots is how a live signal disappears into an average."* (Fig 1 :22) | U must be valued per slot; a single summed figure destroys the signal |
| 2 The Ground | *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* (Fig 2 :29); *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* (Fig 2 :35) | only the ground settles; agreement among decision-makers is not a verdict |
| 3 Dependency Chain | *"it has terms for what things afford: what can be moved, opened, joined, blocked"* (Fig 3 :7); *"The chain is ordered by dependency, not by importance."* (Fig 3 :20) | the class of possible actions is a vocabulary link, and it precedes planning |
| 4 The Membrane | *"Only methods cross up. Only head starts come down."* (Fig 4 :22); *"So take the round trip and measure the gap."* (Fig 4 :30) | action-changing material must travel as a method, not a recording; the condensation carries a gap |
| 5 Mint Pipeline | *"The four kinds sort a gap by what is missing. None of them sorts a gap by what is wrong."* (Fig 5 :51); *"What it removes is not a term but a term's standing to be composed over. Nothing leaves the library. What falls is the reach."* (Fig 5 :55) | the fifth kind (refusal) is a legitimate A item; MDL prices U |
| 6 Closure / Reachability | *"the only operator that moves the wall"* (Fig 6 :14); *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* (Fig 6 :23); *"more search at the same reach: is it in here and unfound? The closure does not change."* (Fig 6 :49) | the U/A distinction is the SEARCHED versus INWARD/OUTWARD distinction |
| 7 Room Chain | *"same closure, handed along; agreement compounds, evidence does not"* (Fig 7 :12-13) | asking more people for one VoI number does not add evidence |
| 8 Union Surplus | *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."* (Fig 8 :32); *"Two frames together reach what neither reaches alone."* (Fig 8 :45) | U cannot become A by effort; A needs a differing closure |
| 9 Leave / Arrive | *"describe it before you go looking, or any frame you pick will seem to fit"* (Fig 9 :27-28); *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* (Fig 9 :60) | a VoI number is a filter, not a witness; classify by effect first |
| 10 Ground Maintainer | *"the ground does not decay, the channel does"* (Fig 10 :24); *"A verifier that can reconstruct the claim cannot verify it."* (Fig 10 :42) | the comparison needs a ground, not an internal score; do not teach the checker the framework first |
| 11 The Habitat | *"And capability is a property of agent-and-habitat, never of the agent alone."* (Fig 11 :39); *"An improvement that does not change contact changes nothing, however much it improves."* (Fig 11 :40) | what actions are possible is agent-and-habitat, not a property of the information alone |
| 12 The Bond | *"A composition costs in two currencies, and they do not add."* (Fig 12 :125); *"Bits price the description. Actions price finding out whether it holds."* (Fig 12 :126); *"Summing them into one figure is the error this names, not the fix for it."* (Fig 12 :130) | decisive against one scalar |
| 13 Minimum Viable Set | *"The set is closed. The arrangements are not. That gap is why import exists."* (Fig 13 :115); *"Unreachable is a verdict here, not a silence"* (Fig 13 :134) | the common scale is unreachable, and that is reported, not hidden |
| Operators table | *"a refutation is a negation, which is why a vocabulary without it can only accumulate"* (Operators :58) | A includes refusal, which removes standing and lowers the reach |
| Symbols table | `R` is *"always a slice: what cannot be perceived yet is residual and simply cannot be read"* (Symbols :39-40) | U is always per slot; unreadable slots are not zero |

---

## 3. Findings

### F1 — The two currencies do not add (decisive against one scalar)

Fig 12 :125-127:

> **"A composition costs in two currencies, and they do not add."**
> **"Bits price the description. Actions price finding out whether it holds."**
> **"They are in different units, so a system holding one accounting cannot compare them and will not notice the shortfall."**

And Fig 12 :130:

> **"Summing them into one figure is the error this names, not the fix for it."**

A number that adds "reduced uncertainty" (bits of entropy removed, or its money equivalent) to "new actions opened" (an option value) is exactly the error named. The shortfall is invisible from inside one accounting. The honest report is two ledgers with a declared gap between them.

**Mode:** `general` for the structural claim, `specified` when applied to VoI practice. **Refuter:** exhibit a common unit that ranks both kinds for one decision and preserves every constraint the figures name, with a measured round trip, not an asserted equivalence.

### F2 — The classification is by effect on the reach, not by topic

Fig 6 :49:

> **"more search at the same reach: is it in here and unfound? The closure does not change."**

The full line reads *"more search at the same reach: is it in here and unfound? The closure does not change. Same atoms, same wall, more of the space actually visited."* Same atoms and same wall is U. Conversely:

> **"the only operator that moves the wall"** (Fig 6 :14, IMPORT)
> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** (Fig 6 :23)
> **"An improvement that does not change contact changes nothing, however much it improves."** (Fig 11 :40)

So the test is mechanical: after receiving the item, did `closure(Γ)` change, did an atom get added, did contact change, or did a term lose its standing to be composed over? If none, it is U regardless of how valuable it feels. If yes, it is A. A message about a new market price that merely updates `b` is U; a message that introduces a new counterparty or a new instrument is A.

**Refuter:** show an item that leaves the closure, contact, and record unchanged yet genuinely creates a new possible action.

### F3 — U has a ceiling; A is the only way past it

Fig 8 :32:

> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."**

Fig 6 :21-22:

> **"MINT composes inside the closure and can never add an atom."**
> **"NOVEL means novel relative to atoms, not to the world. IMPORT adds an atom, and the added atom is what expands the closure."**

So more uncertainty-reducing information, however precisely estimated, cannot manufacture a new action. This is definitional, not empirical. It matters for the "high value of information" case: a very accurate forecast of a market you cannot enter is still U. A rough signal that reveals an instrument you can use is A.

**Refuter:** demonstrate U adding an atom to `closure(Γ)` under a fixed atom set, or derive the idempotence claim falsely.

### F4 — Underivable and unreachable-at-budget issue different instructions

Fig 8 :41-43:

> **"Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."**
> **"importing against a budget limit adds an atom that was not needed"**

Formula step 7 separates SEARCHED, INWARD and OUTWARD and says SEARCHED is asked first because it is cheapest and the other two assume its answer. For the decision-maker this gives a concrete order:

1. **SEARCHED:** is the uncertainty-reducing item already in here and unfound? Then buy more search, keep the wall.
2. **INWARD:** is our representation inadequate to hold it? Extend the instrument from one already returning something (Fig 6 :29, :32).
3. **OUTWARD:** does another frame already hold it? Characterize the residual in effect terms and import with a source gate and shadow test (Fig 6 :30, Fig 6 :12-13).

Buying an import when the answer was merely unfound wastes an atom. Buying more search when the answer is underivable spends the whole budget on a wall that cannot move.

**Refuter:** a case where importing an atom into an already-sufficient closure lowers `left(R,φ)` rather than raising cost.

### F5 — A includes refusal, which lowers the reach

Fig 5 :50-52:

> **"The four kinds sort a gap by what is missing. None of them sorts a gap by what is wrong."**

Fig 5 :54-55:

> **"A term that refuses another pays the same bargain. Stating the refusal, plus what remains unexplained after it, costs less than what was unexplained before. What it removes is not a term but a term's standing to be composed over. Nothing leaves the library. What falls is the reach."**

Operators :58: *"a refutation is a negation, which is why a vocabulary without it can only accumulate."*

This is why "information that changes what actions are possible" is not just "more options." Information that invalidates a model (Glynn et al. 2022, VE3, read) **increases** stated uncertainty while **decreasing** the set of admissible actions, and that is a legitimate A item. A VoI method that only rewards uncertainty reduction structurally cannot score it. This is a second, independent reason the single scale fails.

**Refuter:** show refusal that leaves the reach unchanged and is still a genuine change in what actions are possible.

### F6 — Per-slot indexing forbids the aggregate

Fig 1 :19 and :22:

> **"The residual is indexed by object slot, not aggregated."**
> **"Aggregating across slots is how a live signal disappears into an average."**

Fig 9 :54-57:

> **"And when the split lands on a union rather than a partition, unbundle before you search again."**
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**

A single organization-wide "value of information" number averages across the very slots that say where to look. The correct form is per-slot U values and per-slot A changes, with the overlaps (where an item both reduces R and opens an action) marked as compounds that get their own loop.

**Refuter:** an aggregation that provably preserves the per-slot ordering and the compound structure, with a measured round trip.

### F7 — A "filter" cannot hand you the verdict

Fig 9 :60:

> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

Howard (1966) and Keisler et al. (2014) produce EVPI and EVSI, which are budget tools: they rank which research to buy. Glynn et al. (2022) explicitly question *"How appropriate is it to offer an absolute single estimate of VOI?"* and answer *"We argue not very."* The figures agree: a calculated value is a filter for where to spend, never a witness for what is true or a substitute for the ground. The verdict on a comparison is whether the two ledgers can be merged, and that is settled by the structure of the units, not by a price.

**Refuter:** a decision procedure in which a computed VoI number, not the ground, settles which action is correct.

### F8 — Agreement and prestige are not the ground

Fig 2 :35:

> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**

Fig 2 :40:

> **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"**

Fig 2 :42:

> **"Buy independence in proportion to the cost of being wrong."**

A survey of decision-makers who all use one VoI textbook is one evidence pool. A second witness must draw on a different closure. This is why `03_public_contact_points.csv` lists institutional venues and not a list of likeminded recipients, and why the outreach email asks what would refute the shape rather than asking for endorsement.

**Refuter:** a case where agreement among users of the same method increases the evidence for the comparison.

### F9 — What survives, with mode attached

| claim | mode | figure / source |
|---|---|---|
| U and A are in different units and do not add | `general` (structural) | Fig 12 :125-130 |
| The classifier is effect on the reach: same atoms and wall versus moved wall, contact or standing | `general` | Fig 6 :14, :23, :49; Fig 11 :40 |
| Within-closure search cannot add an atom | `general` (definitional) | Fig 8 :32; Fig 6 :21 |
| SEARCHED before INWARD before OUTWARD, and refuse before mint | `general` | Formula steps 2, 7; Fig 6 :49 |
| U is per slot, never one aggregate | `specified` for decision-makers | Fig 1 :19, :22 |
| Refusal is an A item that lowers the reach | `general` | Fig 5 :51, :55; Operators :58 |
| A common VoI scalar is unreachable with the present instruments | `specified`, candidate | Fig 13 :134; Fig 9 :32 |
| The two ledgers' exact weights and any exchange rate | `gap` | no figure line governs after re-census |

---

## 4. Pre-registered refuter (written before the conclusion)

Per the seat map, *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following holds:

1. A common scalar ranks U and A for the same decision **and** preserves both currencies, with a measured round trip rather than an asserted equivalence (would break Fig 12 :125-130).
2. Within-closure search adds an atom or moves the wall under a fixed atom set (would break Fig 8 :32 and Fig 6 :21).
3. An import changes the ground itself, not just the frame's access to it (would break Fig 6 :25, *"An import adds no atom to the world"*).
4. An item creates a genuinely new possible action with no change of reach, contact, or standing (would break Fig 11 :40 and Fig 5 :55).
5. Aggregating across slots preserves the per-slot "where to look" signal and the compound structure (would break Fig 1 :22 and Fig 9 :55-57).

If any fires, the two-ledger shape is withdrawn and the field's single-number practice is reinstated as the better account. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Strains, re-census, and the canonical usage check

### Strain 1: MDL prices U in bits, but sampling costs actions

Fig 5 :45 says the acceptance bargain *"is minimum description length, Rissanen 1978, which is itself a composition of Kolmogorov complexity and Shannon coding put to work on model selection."* Fig 12 :126 says *"Actions price finding out whether it holds."* A single observation therefore has a bits price and an action price. Is this a contradiction?

**Re-census:** no. It is two readings of one item, and Fig 12 :128-129 says exactly that: *"The two readings come apart in both directions. A long chain of cheap parts is expensive to describe and may cost one action to refute. A short arrangement over a costly operand is cheap to state and may take a whole budget to settle. Neither figure predicts the other, so both are read or the choice is made blind."* Fig 12 :130 forbids summing them. The strain dissolves into the main finding.

### Strain 2: information that increases uncertainty

Glynn et al. (2022, read) report that additional information can invalidate a model and increase uncertainty, which appears to contradict the framing of U as uncertainty reduction.

**Re-census:** it governs Fig 5's fifth kind, not Fig 1's residual. Formula step 2 routes it to REFUTED, where *"what is owed is a refusal, not an explanation."* Fig 5 :55 says the reach falls because something was added. So it is an A item with a negative sign on the reach, not a counterexample to U. Different objects, no strain after re-census.

### Canonical usage check (figures README + WATSON 60, read)

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the limit: *"what a missing thing would have to look like (a shape, not a name)"*.
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are the ground for design questions; the seat reads the ground and does not ask the anchor to decide what the figures settle. *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

Applied here: no ruling was requested from a human expert about whether one number is correct. The figures decide that the units differ; an expert is asked only whether the shape is faithful and what would refute it.

### Retractions and confirmations

| earlier reading | status after canonical check |
|---|---|
| "one VoI number is the answer" | **Refused.** Fig 12 :125-130 is explicit; Glynn et al. 2022 independently doubt the absolute single estimate. |
| "A means more options, U means fewer errors" | **Narrowed.** A also includes refusal, which removes options (Fig 5 :55). Recorded in F5. |
| "the classification is about topic" | **Retracted.** It is about effect on the reach (Fig 6 :49), not subject matter. |
| "U and A are two levels of one value" | **Retracted.** They are a union of overlapping conditions (Fig 9 :55-57), unbundled before search. |
| "this is a measurement of decision quality" | **Retracted.** It is a `specified` shape; nothing here is `grounded`. |
| F3 ceiling and F4 ordering | **Canonically confirmed** by the figures-as-metalaws note: idempotence is definitional, and thresholds are filters, never verdicts. |
| Round trip | The condensation "two currencies, do not add" loses the fifth-kind refusal and the SEARCHED-first ordering when mapped back to practice. `R_T` is nonzero and is recorded qualitatively in `11_audit.md`. |

---

## 6. Recommendation

1. Classify each item by its effect on the reach before assigning any value: same atoms and wall (U), or moved wall, changed contact, added atom, or removed standing (A) (Fig 6 :49, Fig 5 :55).
2. Keep two ledgers. Bits price the description, actions price finding out whether it holds, and no exchange rate is asserted (Fig 12 :125-130).
3. Run SEARCHED first, then INWARD or OUTWARD, and refuse before mint (Formula steps 2 and 7). Do not import an atom against a budget limit.
4. Report per slot, never as one organizational average (Fig 1 :19, :22). Mark overlaps as compounds with their own loop (Fig 9 :54-57).
5. Treat every computed VoI number as a filter for the budget and never as a witness for the verdict (Fig 9 :60).
6. Send the generator, the classifier and the refuter, not the conclusion (Fig 4 :22-25). Ask what would refute the shape; do not pool later agreement as corroboration (Fig 2 :40).

## 7. Updated verdict

The two-ledger shape survives a genuine re-census; the single-scalar answer is refused. U is within-closure search with a definitional ceiling; A is import, instrument extension, or refusal and is the only kind that changes the reach. Bits and actions are held apart, per slot, with SEARCHED before INWARD and OUTWARD. What remains open is the exact weights and any exchange rate: declared `gap`, not filled by a guess. Strains after re-census: **none hidden**, two dissolved and recorded above.
