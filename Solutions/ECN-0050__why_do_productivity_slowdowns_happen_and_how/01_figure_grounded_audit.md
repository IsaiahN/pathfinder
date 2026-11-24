# Figure-grounded audit: productivity slowdowns, genuine versus measured

**Mode of this document: `general` on the shape, `specified` on the discrimination procedure, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." No measurement was re-estimated here, so nothing is `grounded`.

**Status: SIMULATED DERIVATION, not a ground reading.** The framework's own rule (*The Recursive Self-Improvement Trap*, Isaiah N, adventuresinml, 2026-11-19): "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post. It will often be better than the generic outputs that you will usually get otherwise too. However, the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Sources.** Figure quotes are verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`. Canonical usage rule from `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. Mode rule from `FRAMEWORK/figures/THE_FORMULA.md`. World sources are listed in `10_source_ledger.csv` and were opened on 2026-11-23.

---

## 0. The residual, stated in effect terms

Observed: measured productivity growth (real output per hour) falls below its own prior trend, in the United States after roughly 1973 and again in many advanced economies from the 2000s (Wikipedia, "Productivity paradox", 2026, opened 2026-11-23). Two candidate causes have different consequences:

- **A (genuine).** The productive system generates fewer new methods, or fails to absorb the new general-purpose technology that would expand what can be produced. Policy response: change the conditions of generation and adoption.
- **B (measurement).** The measuring channel stops registering output that has moved into new goods, quality improvements, intangible investment, or sectors whose measured productivity is near zero by construction. Policy response: change the instrument, not the economy.

The residual R is: given a measured rate o' and a prediction Gamma(b,a), how much of the gap is a change in the ground (the thing being settled) and how much is a change in the channel (the reading of it)? And, separately, what generates a genuine fall?

**R by arity, symmetry, scale.** Arity: two conditions conjoined, so a **union compound**, not one hard question. Fig 9 :54-57: "when the split lands on a union rather than a partition, unbundle before you search again" and "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound." Symmetry: the comparison is a threshold relation between two rates, not a symmetric join of two equal operands. Scale: first order inside an economy (firms, sectors, plants), second order at the measurement layer (national accounts, price indices). Each condition has its own loop and its own ground.

**Why the two must be unbundled before searching.** A single lever that fixes measurement will clear the region where only B holds and leave the intersection standing, because the genuine component still binds. Fig 9 :55-56: "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."

---

## 1. Domain census (before choosing any figure line)

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | partition / union |
|---|---|---|---|---|
| **D1 Generative** (why a slowdown happens) | firms, workers, research, general-purpose technologies, complementary intangible investment | methods and head starts that can be reapplied; new atoms entering the closure | the ground: output that actually pays, revealed only where a measurement registers it | union of stalled composition and absent or unabsorbed import |
| **D2 Measurement / discrimination** (genuine versus artifact) | statistical agencies, price indices, national accounts, hedonic adjustment, alternative data | readings o' of real output and hours | the ground, which must not move when the measure moves (Fig 2 :29-30) | union of ground-change and channel-change; unbundle before search |
| **D3 Aggregation** (where the signal lives) | sectors, industries, plants, states, firms | per-slot residuals R_s | the ground at the slot level, not the aggregate | partition across slots, then union at the aggregate |
| **D4 Verification / outreach** | outside productivity researchers, public data series, journal and agency review | residuals and agreements | the ground, never agreement | one evidence pool in this simulated run, so independence is near zero |

**Partition or union overall.** The question is a union of D1 and D2, with D3 a cross-cutting slot structure and D4 the checking arrangement. It is not a list of separate questions, and it is not one question either.

**Dependency order (Fig 3).** The chain is ordered by dependency, not importance. Fig 3 :20-21: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it." Steps 1-2 (perception, vocabulary: can the instrument tell a real fall from a reading fall?) precede step 3 (objective: what would count as progress here?), which precedes step 4 (planning: which policy lever). Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." So the measurement dispute must be settled before the causal story is believed, not the other way round.

**Anchor test applied to each domain.** D1 has an anchor only where new methods show up as output that pays. D2 has an anchor only if the measure does not change its answer when the frame changes (Fig 2 :29-30). D3 has an anchor at the slot level, and loses it under aggregation (Fig 1 :22). D4 has the ground, never agreement (Fig 2 :45). All four pass the anchor test in principle; this simulated run supplies no reading from D1, D2 or D3, so all verdicts stay `candidate`.

---

## 2. Figure census (quoted before concluding)

The figures that bear, with the verbatim line that governs each. Quotes are taken from the local figure-text extract, not from any summary.

| figure | verbatim line used | what it governs here |
|---|---|---|
| Fig 1 | :19 "The residual is indexed by object slot, not aggregated." | aggregation hides the live signal |
| Fig 2 | :29-30 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." | the measure is an instrument, not automatically an anchor |
| Fig 2 | :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." | agreement inside one data pool cannot settle the dispute |
| Fig 2 | :40 "agreement about the world is worthless when the agreeing frames share an evidence pool" | rival estimates from the same source data are one witness |
| Fig 2 | :42 "Buy independence in proportion to the cost of being wrong." | the case for genuinely independent measures |
| Fig 3 | :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." | measurement before explanation |
| Fig 4 | :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." | any condensation of the argument into a rule must be checked back |
| Fig 5 | :69 "settling is necessary for a term to be composed over, and it is not sufficient." | even a settled statistic is not automatically a usable cause |
| Fig 6 | :14 "the only operator that moves the wall" | a genuine rise in productive reach needs an import, not more effort |
| Fig 6 | :21 "MINT composes inside the closure and can never add an atom." | more research within a fixed technique set cannot by itself raise the reach |
| Fig 8 | :39 "So a search that finds nothing is never a proof of absence." | failure to find a measurement artifact is not proof there is none |
| Fig 9 | :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." | the size of an adjustment is a budget fact, not a verdict |
| Fig 10 | :24 "the ground does not decay, the channel does" | a measured fall may be a channel event, not a ground event |
| Fig 10 | :25-26 "stale percepts, dropped transients, saturated metrics, pooled readings" | concrete failure modes of a productivity statistic |
| Fig 10 | :47 "a convention that decides an outcome has stopped being one" | a target-driven statistic stops being a measure (corroborated by Goodhart's law, low overlap) |
| Fig 12 | :125 "A composition costs in two currencies, and they do not add." | the cost of refining the measure and the cost of settling the cause do not add |
| Fig 13 | :16 "it names what is being measured" | a measurement needs a declared object |
| Fig 13 | :26 "it decides what the measurement would mean" | a measurement needs a declared interpretation |

Strain test: a line that only fits with a strain governs another quantity, so re-census rather than smooth it. Two strains are named and handled in section 6, not hidden.

---

## 3. Findings, one loop per domain

### F1. A genuine slowdown is a stall of the reach, not a shortage of effort (D1)

Figure lines, verbatim:

> Fig 6 :14 **"the only operator that moves the wall"**
> Fig 6 :21 **"MINT composes inside the closure and can never add an atom."**
> Fig 7 :13 **"agreement compounds, evidence does not"**

Fig 6 :21 says composition explores only what the operators already reach. Fig 13 :113-118 adds: "More compositions never add a member, and no chain reaches outside what the six and their bonds already span. The set is closed. The arrangements are not. That gap is why import exists." So a rising count of papers, patents, or process tweaks (library growth) is not the same as a larger productive reach. Fig 7 :13 is the same arithmetic at the population scale: handing a question along a chain of agreeing frames adds vocabulary, not evidence.

The world analogue (secondary, not a verdict): Brynjolfsson, Rock and Syverson (2021, *AEJ: Macroeconomics*, opened 2026-11-23) write that GPT investments "are often intangible and poorly measured in national accounts" and that this "can lead to underestimation of productivity growth in a new GPTs early years and, later, when the benefits of intangible investments are harvested, productivity growth overestimation." That is an import-and-composition lag, not an exhausted technique set: the new atom arrives, but the complementary composition takes time and is counted late.

**Mode: `general`** for the wall claim (structural), **`specified`** for "this historical slowdown was an import lag." The figures cannot name which atom is missing, and naming one would mean already holding it (Fig 13 :134-135).

**Refuter (F1):** an economy whose measured productivity accelerates without bound while the technique set is held fixed and no new general-purpose technology is imported. That breaks the wall claim at the macro level. A weaker refuter: a demonstrated case where more composition within a fixed set raises the reach rather than only the library.

**Status: triangulated** across Fig 6, Fig 7 and Fig 13 (low overlap between the closure rule, the room-chain rule and the substrate rule), with the world J-curve as corroboration only.

### F2. The genuine-versus-measurement question is a ground-versus-channel discrimination (D2)

Figure lines, verbatim:

> Fig 10 :24 **"the ground does not decay, the channel does"**
> Fig 10 :25-26 **"stale percepts, dropped transients, saturated metrics, pooled readings"**
> Fig 2 :29-30 **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**

Fig 10 names the exact failure: the thing being measured need not have changed; the link to it can have. Stale percepts (a price index that no longer tracks where consumption moved), dropped transients (a new good that appears and is treated as inflation rather than output), saturated metrics (a statistic pinned at a boundary), and pooled readings (sector mixes averaged into a single rate) are the four named channels. Fig 2 :29-30 gives the test: if the statistic moves when you push on the measuring convention, it is not an anchor for the question "did productive capability fall?"

This is the sharpest figure-grounded point in the whole answer, and it is `general`: it does not depend on which decade or which country.

World corroboration, two witnesses with low overlap between them:
- Feldstein (2017, *Journal of Economic Perspectives*, opened 2026-11-23): "The official measures provide at best a lower bound on the true real growth rate with no indication of the size of the underestimation." That is a channel claim from within economics.
- Goodhart's law (Wikipedia, opened 2026-11-23): "Any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes." That is a measurement-theory claim from social science, and it corroborates Fig 10 :47 "a convention that decides an outcome has stopped being one" without sharing the framework's evidence pool.

The framework's own metamerism essay (Isaiah N, "The Hard Problem is About Source", 2026-08-28, opened 2026-11-23) supplies the mechanism: "If several paths create the same behavior, then behavior is a projection with lossy information." A productivity reading is a projection. Several underlying sources (a real fall in capability, a quality change misread as inflation, a sector shift toward low-measured-productivity services, an unmeasured intangible investment) can create the same reading. The instrument "cannot comment on the source." What resolves the source is a better instrument, not another argument: "An instrument that can't distinguish these cases demonstrates its own inadequacy."

**Mode: `general`** for ground-versus-channel, **`specified`** for applying it to any named slowdown.

**Refuter (F2):** show that for the question actually asked, the measured rate is the ground by constitution, so no channel-versus-ground distinction applies. Fig 2 :36 allows this: "An anchor is legitimate when the question is constitutively about it." If the question is literally "did measured output per hour fall?" the statistic is the ground and the measurement problem is dissolved by definition. The question here is about *genuine* productivity, so the rate functions as an instrument, but the strain is real and is recorded in section 6.

**Status: triangulated** across Fig 10, Fig 2, and the low-overlap Goodhart source, with the metamerism essay as high-overlap corroboration.

### F3. The aggregate hides the live signal (D3)

Figure lines, verbatim:

> Fig 1 :13 **"a global R near zero with one live slot residual is a legal state"**
> Fig 1 :19 **"The residual is indexed by object slot, not aggregated."**
> Fig 1 :22 **"Aggregating across slots is how a live signal disappears into an average."**

A national rate near its trend is compatible with a live slowdown in particular sectors, exactly as a global residual near zero is compatible with one live slot (Fig 1 :13). The BLS 2026 industry releases show why the slots matter: in 2025 "Total factor productivity fell in 70 of 86 4-digit NAICS manufacturing industries" while other sectors rose, and "Productivity increases in 15 of 30 selected service-providing industries in 2025" (BLS productivity home page, opened 2026-11-23). The aggregate is a weighted average of very different slot behaviours.

The same release publishes revisions: second-quarter 2026 nonfarm business productivity was "revised up 0.7 percentage point" and the nonfinancial corporate figure went from 2.2 percent to 3.4 percent. A measured rate is a reading that changes with the source data, which is precisely the channel behaviour Fig 10 names. This is not a proof that the slowdown is an artifact: it is a demonstration that the reading is not the ground.

**Mode: `specified`** (the slot structure is general, the particular sectors and revisions are grounded in a source that was opened, but this audit did not re-estimate them).

**Refuter (F3):** a slowdown that is uniform across every sector and firm, with no live slot residual, no dispersion, and no revision under alternative data vintages. That would make Fig 1 :22 inapplicable to the case.

**Status: triangulated** across Fig 1 and the BLS slot-level and revision data (two low-overlap routes: a figure rule and an official statistical release).

### F4. How to tell: triangulation with independence, not more agreement (D2 and D4)

Figure lines, verbatim:

> Fig 2 :35 **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**
> Fig 2 :42 **"Buy independence in proportion to the cost of being wrong."**
> Fig 8 :39 **"So a search that finds nothing is never a proof of absence."**

The operational reading: range several instruments at the same ground separately, and make sure they do not draw on the same evidence pool. Concretely, compare the official rate with hedonic-adjusted price measures, with intangible-capital-adjusted TFP (the J-Curve paper reports a TFP level "15.9 percent higher than official measures by the end of 2017"), with physical or engineering indicators of output, and with slot-level series. If all of these move together and none shares the other's source data, that is triangulation. If they all read the same BEA national accounts underneath, it is one witness wearing several names, and Fig 2 :40 applies.

Fig 8 :39 matters here because a negative result is easy to over-read. Finding no measurement artifact at current resolution is not proof there is none; it may be a proto-instrument problem. Fig 6 :33-35: "An instrument is not built from a description. It is improved from a worse instrument already returning something" and "the search for a proto-instrument is a search for one that is already there." So the question to ask is not "could a perfect measure exist?" but "what is already returning something that fails to resolve?"

**Mode: `specified`**: the procedure is general, which instruments count is a matter for the particular economy and has to be grounded by an actual check.

**Refuter (F4):** show that the proposed independent measures all draw on the same source data, so their agreement carries no independence; or show that an instrument exists which discriminates ground change from channel change at current resolution and it returns a single unambiguous answer. Either way the triangulation prescription changes.

**Status: triangulated** across Fig 2, Fig 8 and Fig 6, with the J-Curve adjustment as a worked example of an alternative reading.

### F5. Filters for the budget, witnesses for the verdict (D2, cross-cutting)

Figure lines, verbatim:

> Fig 9 :60 **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**
> Fig 12 :125 **"A composition costs in two currencies, and they do not add."**

The size of a measurement adjustment is a budget fact: it says how much of the observed gap is worth chasing with further measurement effort. It is not the verdict on whether the slowdown is genuine. The verdict requires the ground to pay. Fig 12 :125-126 says the two accounting systems (bits for the description, actions for settling whether it holds) are in different units and do not add. A statistical agency holding only the "bits" accounting will propose refinements it cannot afford to test, and the budget, not the theory, decides how much of the space is reached.

**Mode: `general`.**

**Refuter (F5):** a case where an adjustment's magnitude itself constitutes a ground reading, so the filter and the witness coincide. That would collapse the distinction this finding draws.

**Status: single-source for the figure rule (Fig 9, echoed by Fig 12), corroborated by `60_FIGURES_AS_METALAWS.md` which quotes Fig 9 : "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

### F6. What settles the measurement dispute is an instrument, not an argument (D2)

Figure lines, verbatim:

> Fig 13 :16 **"it names what is being measured"**
> Fig 13 :26 **"it decides what the measurement would mean"**
> Fig 5 :69 **"settling is necessary for a term to be composed over, and it is not sufficient."**

Fig 13 requires two things of a measurement: a state that names the object and a structure that decides what the reading means. A productivity statistic only does the first if "output" and "hours" are declared, and only does the second if the interpretation of the ratio is declared. Feldstein's abstract describes exactly the failure of the second: the official data "understate the changes of real output and productivity" because new goods and quality changes are not captured, and the measures give "no indication of the size of the underestimation." That is a missing discriminator, not a missing argument.

The framework's tacit-knowledge essay (Isaiah N, "Decoding Tacit Knowledge", 2026-11-10, opened 2026-11-23) sharpens the operational form: "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." And it adds the warning that "a measurement with no question is noise, and a reading with no encounter is projection."

**Mode: `general`** for the two-part requirement, **`specified`** for naming which discriminator is missing in a given case.

**Refuter (F6):** a measure that names its object and fixes its interpretation in such a way that all candidate sources of a reading are already discriminated. Then no new instrument is owed.

**Status: triangulated** across Fig 13, Fig 5 and the metamerism/tacit-knowledge essays (the essays are high-overlap with the framework, so this is internal corroboration, not an independent witness).

### F7. What survives, and what is refused

| claim | mode | figure |
|---|---|---|
| A measured fall may be a channel event, not a ground event | `general` | Fig 10 :24-28 |
| The measure is not automatically an anchor for "genuine productivity" | `general` | Fig 2 :29-30, :36-38 |
| Aggregation can hide a live slot-level slowdown | `general` (structural), `specified` for any case | Fig 1 :13, :19, :22 |
| A genuine rise in productive reach needs an import, not just more composition | `general` | Fig 6 :14, :21; Fig 13 :113-118 |
| Independent instruments must be ranged separately at the ground | `general` | Fig 2 :35, :42 |
| "The 1973 slowdown was caused by X" | **refused as written** | figures return a shape, not a name; Fig 9 :32 "you get a kind of thing, never the answer itself" |
| "Mismeasurement explains the whole slowdown" | **refused as written** | Fig 8 :39; the size of an adjustment is a filter, not a verdict |

---

## 4. Pre-registered refuter

Written before the conclusion, per the standing discipline that a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. A productivity statistic is shown to be the ground by constitution for the question "did genuine productivity fall?", so Fig 2 :29-30's channel distinction does not apply.
2. A genuine slowdown is demonstrated in which every slot moves together, no dispersion exists, and the result survives every alternative measurement and every data revision (the ground pays, Fig 5 :69).
3. More composition inside a fixed technique set is shown to raise productive reach without bound, with no import (breaks Fig 6 :21 and Fig 13 :113-118).
4. Two rival measures are shown to be fully independent and to return a single unambiguous answer that discriminates ground change from channel change at current resolution, so the triangulation prescription is unnecessary.
5. An instrument is produced that names the source of a productivity reading directly, so the metamerism limit no longer applies.

If any fires, the corresponding finding is withdrawn and the audit is re-censused. Until one is run, no part of this is `grounded`.

---

## 5. Recommendation

1. Ask the ground-versus-channel question first (F2). Before any causal story, demand a declaration of what is being measured (Fig 13 :16) and what the reading would mean (Fig 13 :26).
2. Decompose before aggregating (F3). Publish the slot-level residuals, not only the national rate.
3. Build independence, not consensus (F4). Range hedonic, intangible-adjusted, sectoral and physical readings separately against the same ground, and record their source overlap.
4. Treat adjustment magnitudes as filters, not verdicts (F5).
5. Offer a shape and a refuter, never a named cause (F7). The outreach order in `02_outreach_email.md` follows Fig 10 :52 "Bring a characterised residual, never the source."

---

## 6. Canonical usage check and retraction log

Two canonical sources were read before finalising: `FIGURES_README_canonical.md` and `60_FIGURES_AS_METALAWS.md`.

- The figures README says they "outrank everything else in the repo: the code, the rulings and the docs answer to them" and that "the quotes are the authority, not this summary." It also gives the canonical limit: the framework returns "a shape, not a name" and stops at "the limit of what the available instruments can distinguish, and records the lineage so the stop is honest." "Indiscernibility is not identity."
- `60_FIGURES_AS_METALAWS.md` says "The figures are the ground for design questions; Isaiah is the anchor for what the figures genuinely cannot settle." It also records the discipline that a reading which makes figures contradict each other has misidentified its domain, not found a flaw.

### Retractions and confirmations of my own earlier readings

| earlier reading | status after canonical check |
|---|---|
| "The framework can name the cause of a slowdown" | **Retracted.** The README's limit is "a shape, not a name." What survives is the ground/channel split and the slot structure, not a named historical cause. |
| "Goodhart's law is a second witness for Fig 10 :47" | **Narrowed.** It is genuinely low-overlap (social science versus the framework), so it corroborates, but corroboration is still secondary and never decides. No verdict rests on it. |
| "A measurement problem is just noise to eliminate" | **Retracted.** Fig 4 :31-32: "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up." The gap is informative. |
| "A big adjustment proves the slowdown was measured, not real" | **Retracted.** Fig 9 :60 makes the adjustment a filter for budget, not a witness for verdict. Both conditions of the union still bind. |
| "The six-term substrate directly governs an economy" | **Narrowed.** The six are the substrate of composed physical systems (Fig 13). An economy has different atoms. The migration in `06_isomers_and_order.md` is a structural analogue with a stated limit, not a derivation of economic growth from space, time and energy. |
| "Applying Fig 2 :36 dissolves the question" | **Kept as a strain.** If the question is read as purely about the measured rate, the rate is the anchor by constitution and the measurement question vanishes. The question asks about genuine productivity, so the rate is treated as an instrument. Recorded, not hidden. |
| "Closure exhaustion explains historical slowdowns" | **Retracted as a causal claim.** Real economies import continually; the world evidence points to an absorb-and-compose lag, not a sealed closure. Fig 6 governs the shape of the wall, not the dating of any episode. |
| "This audit is a ground reading" | **Retracted.** It is a simulated derivation, internally checked against the figures. It cannot settle the question. |

### Strains after re-census

- **Fig 2 :36 (constitutive anchor) versus the channel reading.** Two different questions: "did the rate fall?" (rate is the ground) versus "did capability fall?" (rate is an instrument). Different objects, so no figure contradiction. Kept as a strain because the question wording sits between them.
- **Fig 13 substrate versus economic atoms.** Different domains. Fig 13 governs the minimum set for composed physical systems; the economic analogue borrows only the rules (cross-kind composition, import moves the wall, settled molecules become atoms), not the six names. Kept as a limit, not a contradiction.
- **After re-census: two strains named, none hidden.** The verdict is unchanged.
