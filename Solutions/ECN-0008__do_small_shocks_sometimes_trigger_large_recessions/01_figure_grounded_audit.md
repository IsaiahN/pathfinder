# Figure-grounded audit: small shocks, large recessions, tipping points and feedback loops

**Mode of this document: `specified` on the mechanism predictions, `general` on the structural shape, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive Self-Improvement Trap* (Isaiah N, 2026-11-19): "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No recession data was read or measured here. See `05_what_shape_means.md` section 6.

**Sources.** The canonical figure extract at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the figures README copy at `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, and the local reference files in `FRAMEWORK/reference/`. World sources were opened on 2026-11-22 and are recorded in `10_source_ledger.csv`.

---

## 0. The question in effect terms

> Do small shocks sometimes trigger large recessions because economies contain tipping points and feedback loops?

Two claims are bundled here, and the bundle is a union, not a single hard question (Fig 9 :54-57):

- **Claim E (effect):** a proportionally small input perturbation sometimes produces a large output response in an economy. This is a ground question. It is settled by data, not by any frame.
- **Claim M (mechanism):** the reason is that the economy contains tipping points and feedback loops. This is a structural question about what composes over what.

The word "because" asserts that M explains E. The figures can constrain the shape of M and say whether it is composable. They cannot, by themselves, establish M for a particular economy or settle E. Agreement in the literature is not a substitute for the measurement (Fig 2 :35, Fig 7 :35).

**Direction bound as a term.** The sought-for shape is written down here so it can accrue a residual: a chain that compounds a remainder, a threshold comparison that switches regime, and a loop whose sign decides amplification. If that shape does not survive the figure census, it is refused rather than quietly reinterpreted (Fig 5 :62-66).

---

## 1. Residual in effect terms

R is the discrepancy between a proportional prediction and an observed disproportionate response.

- **Predictor held:** a linear or near-linear map from shock size to output response. A shock of size `d` gives a response of order `d`.
- **Observation:** on some occasions the response is much larger than order `d`. A small subprime loss, for example, is reported to have produced large reductions in wealth, employment and output (Krishnamurthy, NBER WP 15040, 2009; Wikipedia, "Financial accelerator", 2026).
- **R:** the excess of the response over the proportional prediction, indexed by the object slot where it appears (a sector, a balance sheet, a network node). Not a single global number (Fig 1 :19, :28).
- **What each option leads to:** if M holds, the excess is owed to a threshold comparison and a positive loop that re-feeds output into input; if E fails, there is no excess to explain and the residual is zero; if E holds and M fails, the excess is owed to something not in this shape and an import is owed (Formula step 7).

**R by arity, symmetry, scale:**

- **Arity:** the map is many-to-one. A shock enters at one or a few slots and the recession is read at the aggregate. The explanation names two conditions (tipping point, feedback loop), so the question is a union compound with its own loop (Fig 9 :55, :57).
- **Symmetry:** the response is not symmetric in the shock. Amplification is ordered (`→` then a threshold comparison `⋛`), not a symmetric join. There is no reason to expect the reverse path to undo it (hysteresis in the world sources; Fig 12 :86-89).
- **Scale:** micro or sectoral input, macro output. The chain crosses the membrane between scales (Fig 4).

---

## 2. Domain census before choosing any figure line

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor (nameable?) | question type |
|---|---|---|---|---|
| D1, micro contact and cascade | households, firms, banks, counterparties, sectors | credit, spending, balance-sheet value, transmitted load | measured balance sheets, network adjacency, transaction data: **yes** | partition boundary: which links carry the residual |
| D2, threshold / tipping | a state variable and its critical value, the regime on each side | comparison over an ordering (distance to threshold) | a dated regime change and a measured threshold variable: **yes** | threshold relation, ordered, not symmetric |
| D3, feedback loop | output of the loop and its re-entry as input | the sign and gain of the loop | an impulse-response estimate or a measured loop gain: **yes** | cycle, sign decides closure |
| D4, aggregate measurement | statistical agencies, modelers, estimators | GDP, employment, forecast error | business-cycle data, national accounts: **yes** | scale crossing, lossy transform, round-trip gap |
| D5, verification / outreach | expert readers and their instruments | agreement and residual | the ground, never agreement: **yes** | triangulation vs mirror |

**Partition or union.** D1 is a partition boundary question (which contacts transmit). D2 and D3 are a **union**, not a partition: a small shock may be amplified by a threshold alone, by a loop alone, or by a threshold that activates a loop. A case in two conditions is not a harder case of either (Fig 9 :57). They must be unbundled before search, and each keeps its own verdict (Fig 9 :54-55). The compound, where a loop pushes a state across a threshold, gets its own loop.

**Order by dependency (Fig 3).** D1 perception first (can we see the shock and where it lands?), D2/D3 vocabulary second (do we have terms for threshold and loop?), D4 objective third (what counts as "large"?), D5 verification last. A reading taken below a break in this chain is a reading of nothing (Fig 3 :22-23). Optimising D4 measurement cannot rescue a missing D2 vocabulary (Fig 3 :19).

**Strain test applied before concluding.** A line is accepted only if it fits its own quantity without forcing. Two apparent strains were found and resolved by re-census, not smoothed over: the word "chaos" in Fig 13 :31-32 governs the structure of an amplifying chain at any stratum, not a claim that a particular economy is chaotic; and the "tipping point" of the world literature is a threshold comparison, not the membrane of Fig 4. Both are recorded in section 8.

---

## 3. Figure census, verbatim, before concluding

Each quote below is an exact substring of `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Quotes are read from the extract, not from a summary.

| figure | line(s) | bearing | this domain |
|---|---|---|---|
| Fig 1 | :13, :19, :22, :28 | residual per slot, aggregation destroys the live signal | D1, D4 |
| Fig 2 | :29-30, :31-32, :35, :40, :42 | anchor, independence, correlation as warning | D5 |
| Fig 3 | :19, :20-21, :27 | dependency order, link with no instrument | all |
| Fig 4 | :19-20, :27-32 | kernel across scales, round trip, lossy transform | D4 |
| Fig 5 | :33, :41, :62-66 | guards as product, direction as limit | method |
| Fig 6 | :23, :32-35 | import moves wall, instrument improved from worse instrument | D4, method |
| Fig 7 | :13, :35 | agreement compounds, evidence does not | D5 |
| Fig 8 | :32, :39, :53 | search adds no atom, no proof of absence, residual first | all |
| Fig 9 | :27-28, :54-57, :60 | unbundle union, describe residual first, filters not witnesses | method |
| Fig 10 | :24, :42, :52 | channel decay, verifier non-access, bring residual | D5 |
| Fig 11 | :39-40, :43-44, :52-53 | capability is agent-and-habitat, enumerate habitat, contact cascades | D1 |
| Fig 12 | :86-89, :104, :117, :121, :125-127 | threshold bond, settled molecule, isomer, cycle, two currencies | D2, D3 |
| Fig 13 | :22, :24, :29-30, :31-32, :74-75, :76 | gradient, network, lockstep, amplifying chain, cross-kind composition | D1, D2, D3 |
| Operators | :48, :51 | ⋛ threshold relation; a goal is a comparison | D2 |
| Symbols | :37-40 | R is the aim and the error signal, always a slice | all |

---

## 4. Findings

### F1 - The question is a union, not one hard question (method, decisive for structure)

Fig 9 :54-55: **"And when the split lands on a union rather than a partition, unbundle before you search again."** Fig 9 :57: **"a case in two conditions is not a harder case of either"**. The Library of Babel essay (Isaiah N, 2026-10-02) says the same from the search side: "Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually."

So "tipping points and feedback loops" cannot be scored as one mechanism. D2 and D3 get separate verdicts below, and their compound gets a third. Marking them as one would manufacture an average that neither figure licenses (Fig 1 :22).

### F2 - A small remainder compounded through an amplifying chain is the figure's own account of small-to-large (general, structural)

Fig 13 :31-32: **"a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise"**.

This is the closest figure line to the question. It says that when a chain amplifies, the remainder left at each turn, rather than being damped, grows and dominates. In effect terms, that is exactly a small shock becoming a large response. Mode `general`: it is a structural statement about any amplifying chain, not a measurement of any economy. It does not say whether an economy's chain amplifies, only what follows if it does.

**Triangulation:** this line and the Fig 1 slot result (F6) are two figures with low overlap (substrate scale versus per-slot indexing) governing the same small-to-large effect. Triangulated.

### F3 - A feedback loop is a cycle, and the sign decides closure (specified, single-source for the definition)

Fig 12 :121: **"The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."**

This is the figure's definition of a feedback loop. A chain cannot close; a cycle can. The sign decides whether the loop amplifies (positive) or damps (negative). The world source "Positive feedback" (Wikipedia, 2026) gives the corresponding measured quantity: a loop gain above 1 yields growth and divergence, and "A key feature of positive feedback is thus that small disturbances get bigger." The financial accelerator is an instance: falling asset prices worsen balance sheets, which force liquidation, which lowers prices further (Bernanke, Gertler and Gilchrist, NBER WP 4789, 1994; Krishnamurthy, NBER WP 15040, 2009).

**Verdict D3:** the mechanism shape is legal and exactly what the figure defines. Whether a given economy's loop gain exceeds 1 is a ground question. `specified`, unmeasured. Marked single-source for the figure definition, triangulated with F5 for the cascade shape.

### F4 - A tipping point is a threshold comparison, not a new kind of thing (specified, single-source)

Fig 12 :86-89: **"a threshold relation between two quantities"** and **"is it about which is larger, rather than both being present? Yes."** Operators :48: **"a threshold relation between two quantities"**. Operators :51: **"a goal is a comparison, which is why a vocabulary without it cannot state one"**.

A tipping point compares a quantity with a critical value. It is the `⋛` bond, already in the library, not a new primitive. This is a binding onto a held bond, not an import that moves the wall (Fig 6 :23). The world definition matches: "beyond a certain point, the rate of the process increases dramatically" (Wikipedia, "Tipping point (sociology)", 2026), and the classic case is a small added weight toppling a balanced object.

**Verdict D2:** the shape is legal and already available. `specified`, single-source for the figure definition. The existence of a particular threshold in a particular economy is ground-decided. Note the limit: a threshold is a comparison, and a comparison states a goal-like relation, not a mechanism that moves the quantity. Saying "the economy tipped" names the crossing, not what pushed it. The push is D3.

### F5 - Contact cascades carry the residual several steps out (general, triangulates F3)

Fig 11 :52-53: **"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."** Fig 11 :43-44: **"The habitat is enumerated, never composed."** and **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."**

This explains why a first-order model misses the large effect: it enumerates only direct contacts. Fig 11 :39-40 adds that capability is a property of agent-and-habitat: **"An improvement that does not change contact changes nothing, however much it improves."** So making a representative agent smarter does not change the cascade unless it changes the contact structure.

The world source "Cascading failure" (Wikipedia, 2026) gives the same shape in finance: "the failure of one financial institution may cause other financial institutions (its counterparties) to fail, cascading throughout the system", and "systemic risk is not due to individual institutions per se, but due to the interconnections." This is low overlap with Fig 12's bond definition, so it triangulates F3's cascade shape.

### F6 - Aggregation erases the live slot (general, triangulates F2)

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."** Fig 1 :13: **"a global R near zero with one live slot residual is a legal state"**. Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."** Fig 1 :28: **"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."**

This is the sharpest checkable prediction this derivation makes. Translated from the agent frame into the economy frame (only actors, currency and anchor change, Fig 4 :19-20): an aggregate model can be nearly right on average while one sector carries a live residual. Averaging across heterogeneous agents does not just smooth the signal; it removes the information about where to look. The world source "Agent-based model" (Wikipedia, 2026) reports the corresponding modelling choice: "representative agents are replaced by agents with diverse, dynamic, and interdependent behavior" and "ABMs can represent unstable systems with crashes and booms that develop out of non-linear (disproportionate) responses to proportionally small changes."

Mode `general` for the structural claim about averages. Whether a particular representative-agent specification actually loses the signal in a given episode is ground-decided.

### F7 - The figures cannot settle "sometimes" for actual economies (general limit)

Fig 2 :29-30: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** For this question the anchor exists: measured output responses, dated regime changes, loop-gain estimates. Fig 2 :31-32: **"Independence, between two frames, is how little they draw on the same evidence."** Fig 8 :39: **"So a search that finds nothing is never a proof of absence."** Fig 6 :32-33: **"An instrument is not built from a description. It is improved from a worse instrument already returning something."**

So a failure to find amplification in a given dataset is not proof that economies lack the mechanism, and a figure line is not a substitute for the instrument. The correct status for E is `candidate`, awaiting the ground. This is a limit, not a gap: figure lines do govern the shape. "Unreachable is a verdict, not a silence" applies to the empirical half, not to the whole question.

### F8 - The micro to macro step is a lossy crossing (general)

Fig 4 :19-20: **"Only the actors, the currency and the anchor change."** Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

The shock-to-recession map crosses a membrane. Detail is thrown away going up, which is what makes an aggregate statement reusable, and the trip is not reversible. The round-trip gap R_T is the honest report of what the aggregate cannot hold. `11_audit.md` records this gap qualitatively. No figure line gives a numeric R_T, and none should be invented.

### F9 - Description and settlement are two currencies (general, budget filter only)

Fig 12 :125-127: **"A composition costs in two currencies, and they do not add."** and **"Bits price the description. Actions price finding out whether it holds."** A model of amplification can be cheap to state and expensive to settle, or the reverse. Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** This governs how much of the mechanism space we try to test, never whether the mechanism is true.

### F10 - Agreement among macroeconomists is not an anchor (general)

Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."** Fig 2 :40: **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"**. Fig 7 :35: **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."** Fig 7 :13: **"same closure, handed along; agreement compounds, evidence does not"**.

A survey of leading economists agreeing that small shocks matter is a convention, not corroboration, especially when they draw on the same textbooks and datasets. From *The Recursive Self-Improvement Trap*: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." This is why `03_public_contact_points.csv` contains institutional opt-in venues and no ranking by receptiveness.

---

## 5. Pre-registered refuter

Written before the conclusion and before any outreach, per Fig 5 :62-66: writing the sought-for shape as an ordinary term makes it refusable. The shape claim is refused if any of the following holds:

1. **No amplifying chain.** A documented case where a small shock produced a proportionally large recession response while every measured loop gain was at or below 1 and no threshold crossing occurred. This breaks F2 (Fig 13 :31-32).
2. **Aggregation is lossless.** A measured case where averaging across agents preserved the live slot residual exactly, so the aggregate carried all the information about where the shock acted. This breaks F6 (Fig 1 :22).
3. **Feedback without re-entry.** A mechanism called a feedback loop whose output does not re-enter as input, or whose sign does not decide whether it closes. This breaks F3 (Fig 12 :121).
4. **Tipping without comparison.** A transition called a tipping point that is not a threshold relation between two quantities, for example a smooth proportional response relabelled as a tip. This breaks F4 (Fig 12 :86-89, Operators :48).
5. **Large shock, not small.** A large recession traced to a proportionally large shock. This does not refute the mechanism but removes the case from the question's premise, so it cannot be counted as evidence for E.
6. **Import owed.** A case where the excess response is explained only by an atom absent from the held set, with a provenanced source gate and a shadow test (Fig 8 :9-13). Then the shape is incomplete and an import, not a reinterpretation, is owed.

If any of 1 to 4 fires, the shape claim is withdrawn. Until a ground test is run, nothing in this folder is labelled `grounded`.

---

## 6. Conclusion and recommendation

**Verdict from the figures.** The mechanism shape is composable and expected: an amplifying chain compounds a remainder (Fig 13 :31-32), a feedback loop re-enters output as input with a sign that decides closure (Fig 12 :121), a tipping point is a threshold comparison already in the bond set (Fig 12 :86-89), and contact cascades carry the residual several steps out while aggregation erases the live slot (Fig 11 :52-53, Fig 1 :22). These are `general` structural results and `specified` mechanism predictions. None is `grounded`. The empirical "sometimes" is owed to the anchor, and this derivation does not settle it.

**Recommendation.**

1. Keep D2 and D3 separate. Do not average "tipping point" and "feedback loop" into one cause (F1).
2. Lead with the slot-level prediction (F6), since it is the most checkable: find an episode where an aggregate model was near-right while one sector carried a live residual, then test whether the loop gain in that sector exceeded 1.
3. Record the threshold variable and its critical value before the episode, so the crossing is not named after the fact (Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit").
4. Measure the round trip (F8): carry the micro account up to the aggregate and back, and report R_T rather than treating the aggregate as the micro story in fewer words.
5. Offer the packet in `08` to the public venues in `03`, ask what would refute it, and record the verdict before any theory is shown (Fig 10 :52).

---

## 7. Canonical usage check

Two local reference files govern how the figures may be used and were read after the first four sections:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo"; "a reading that makes one contradict another has misidentified its domain, not found a flaw"; the framework returns "a shape, not a name" and stops at the limit of the instruments, recording the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/figures/THE_FORMULA.md`: step 7 separates SEARCHED, INWARD and OUTWARD; the mode rule; and the Direction limit, which is why the shape was bound as a term before the run.

### Retractions and confirmations of my own earlier readings

| earlier reading | status after the canonical check |
|---|---|
| "The figures answer yes, small shocks do cause large recessions" | **Retracted.** The figures give a legal and expected shape. Whether it fires is ground-decided. No measurement was taken here. |
| "Tipping points and feedback loops are one mechanism" | **Retracted.** Fig 9 :54-57 makes it a union. Separate verdicts are now kept for D2 and D3. |
| "Fig 13 proves real economies are chaotic" | **Narrowed.** Fig 13 :31-32 states a structural condition on any amplifying chain. It does not assert that an economy's chain amplifies. |
| "The butterfly effect is the figure line" | **Refused.** The butterfly effect is a world-side analogue (Wikipedia, 2026), not a figure quote. Only Fig 13 :31-32 is cited as figure text. |
| "Naming the threshold variable is allowed by the figures" | **Narrowed.** The threshold *shape* is figure-governed; naming an economic variable is a binding onto a held bond, provenanced as such, not a figure derivation. |
| F6 aggregation claim | **Canonically confirmed as shape.** "Aggregating across slots is how a live signal disappears into an average" is figure text, and the README's domain-agnostic rule licenses the economy-frame reading. Its application to a specific model remains unmeasured. |
| Apparent strain, Fig 13 chaos versus economics | **Not strained after re-census.** Fig 4 :19-20 allows only actors, currency and anchor to change across strata; the amplifying-chain rule is the kernel. Different domain, same loop. |
| Apparent strain, tipping point versus Fig 4 membrane | **Not strained.** A tipping point is the `⋛` comparison bond (Fig 12 :86-89); the membrane is the scale boundary (Fig 4 :21). Different quantities. |

### Seven-question recursive derivation, summary

1. **Is there a fact here?** Two conditions are bundled, so split before searching (Fig 9 :54-57).
2. **Can a small remainder dominate?** Yes if the chain amplifies (Fig 13 :31-32). `general`.
3. **What closes the chain?** A cycle whose output re-enters as input (Fig 12 :121). `specified`.
4. **What makes a tip a tip?** A threshold comparison between two quantities (Fig 12 :86-89). `specified`.
5. **Why is it missed?** Contact cascades go several steps out (Fig 11 :52-53) and aggregation erases the live slot (Fig 1 :22). `general`.
6. **Is an import owed?** Not for the shape: all parts are in the library. An import would be owed only if the refuter item 6 fires.
7. **Who settles it?** The ground, not agreement (Fig 2 :29-30, Fig 7 :35). Status `candidate`.

**After re-census: no hidden strain.** Two apparent strains were named and dissolved by re-census. The remaining open item is empirical, not structural: whether particular economies have the threshold values and loop gains the shape requires.
