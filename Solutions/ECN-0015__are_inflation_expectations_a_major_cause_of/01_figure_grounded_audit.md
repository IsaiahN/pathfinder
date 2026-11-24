# Figure-grounded audit: are inflation expectations a cause of inflation or a response to it?

**Mode of this document: `specified` on the shape, `general` on the per-slot rule, `gap` on the magnitude.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." No measurement settles "major" here, so the magnitude verdict is not `grounded`.

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, 2026-11-19, opened 2026-11-23): "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." The same essay calls LLM output simulacra and says "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §7.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, line-numbered), `FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, plus the eight essays and the world sources in `10_source_ledger.csv`. All figure quotes below were checked against the local extract character by character before use.

---

## 0. The residual, stated in effect terms

Two quantities are in play and they are measured differently:

- **Expected inflation**, written `pi^e`: a statement made before the price changes it describes. In the loop's notation this is the belief `b`, "What the system takes to be the case before it acts." (Symbols table :20), "mixed by w. Not the observation." (Symbols table :21).
- **Realised inflation**, written `pi`: the price index outturn. In the loop's notation this is the observation `o'`, "What actually happened." (Symbols table :32).

The effect to decide is the **directed coupling** between them. Option A, "expectations are a major cause": changing `pi^e` changes subsequent price and wage setting, so the belief enters the generator that produces the observation. Option B, "expectations are mostly a response": changing `pi` changes `pi^e`, so the observation updates the belief. The word "major" asks for a **magnitude**, not merely a direction.

The residual `R` is the forecast error, the gap between prediction and outturn. Symbols table :38: "The gap between prediction and observation. The central quantity: everything the system does is driven by it." Symbols table :39: "It is the aim, not only the error signal, and it is always a slice: what cannot be perceived yet is residual and simply cannot be read." Per slot `s` (a country, a horizon, a forecaster type, a regime), `R_s = |Gamma(b,a) - o'|`. The question asks which term in the loop carries the mass of `R_s`.

**What an answer would look like**, written down before the run and bound as an ordinary term (Formula "Direction"; Fig 5 :62-64): a shape statement (chain or cycle), a scale statement (aggregate or per slot), an instrument statement (what would move one term without moving the other), and a refuter. A bare "A" or "B" does not satisfy this description.

**Strain test on the residual itself.** If the question were a single directed edge, one figure line would close it. The first pass found two sets of lines pulling in opposite directions (belief enters the prediction; belief learns from the outcome). Per the canonical usage rule, a reading that makes figures contradict one another means the domain was misidentified, not that the figures are flawed. That sent the derivation back to the census (§5, Retractions R0).

---

## 1. Domain census (before choosing any figure line)

**R by arity, symmetry and scale.**

- **Arity.** The question frames a binary choice, but the mechanism it describes has three terms: belief `b`, action `a` (price and wage setting), observation `o'`. Fig 1 :10: "one bet per object slot, every action". The forced A-or-B has arity 2; the phenomenon has arity 3 with feedback. This is the first signal that the choice is malformed.
- **Symmetry.** The coupling need not be symmetric. The bond set separates ordered bonds from symmetric ones. Operators table :30: "A then B; B needs A to have happened" (sequence, ordered). Operators table :36: "A produces B; B did not exist before" (production, ordered). Operators table :48: "a threshold relation between two quantities" (comparison, ordered). Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." The sign of a loop is not read off its name; it must be measured.
- **Scale.** First order inside a period: belief guides an action that produces an outturn. Second order across periods: the outturn re-enters and updates the belief. Fig 12 :103: "Composition is recursive, and the level decides what is irreducible."

**One line per domain: actors / currency / anchor.**

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| D1 Belief formation | households, firms, professional forecasters, survey respondents | stated or formed expectations `pi^e` | the survey response itself is a legitimate anchor only for *stated* expectations; for "what is truly believed" there is no direct anchor here | measurement, not causality |
| D2 Price and wage setting | firms, unions, workers, price setters | prices and wages, the action `a` | realised inflation from a price index (CPI, PCE), a measurement that does not move when a frame changes its mind | production |
| D3 Verification and identification | econometricians, central banks, survey designers | residuals (forecast errors), identification strategies | an exogenous shift in expectations, for example a randomised information treatment or an unexpected policy announcement, which moves the belief without moving costs or demand | triangulation, currently unanchored at this budget |

A domain with no nameable anchor is not a domain yet (master plan §8). D3 has a **specified** anchor shape (exogenous variation in beliefs) but no ground reading was taken in this run, so its status is `candidate`.

**Partition or union?** Union. Both conditions hold in the same system and overlap: higher realised inflation raises expectations, and higher expectations raise price setting, which raises realised inflation. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :5: "are not one hard question but several well-formed ones. Split it rather than search." Fig 9 :58: "a case in two conditions is not a harder case of either". A single lever aimed at only one condition clears the region where that condition alone holds and leaves the intersection standing.

**Order by dependency (Fig 3).**

1. Establish that `b` and `o'` are distinct terms (Symbols table). Without this the question is a category error.
2. Read `R` per slot (Fig 1 :19, :22). Without this the aggregate can hide a live signal.
3. Determine the directed coupling (cycle versus chain), one loop per domain (Fig 12 :121).
4. Only then ask for the magnitude, which needs the D3 instrument (Fig 6 :32).

Ordering matters because Fig 3 :19: "Optimising a link that already works cannot rescue one that does not." Effort spent estimating a magnitude (step 4) before the direction and scale are settled (steps 2 and 3) lands on a step that cannot use it.

**Strain test applied.** The first pass read Fig 12 :121 as if it governed D2 alone. It actually governs the cross-domain composition D1 to D2 to D1. Re-census: Fig 1 governs the per-slot residual, Fig 12 governs the bond arrangement, Symbols governs the terms. No contradiction after re-census. One live strain remains and is named in §6.

---

## 2. Figure census (quoted verbatim before concluding)

| figure | bearing | verdict for this question |
|---|---|---|
| **1 The Agent** | residual per slot; ground is the only metric | aggregate "major cause" hides the signal |
| **2 The Ground** | anchor does not update; agreement in a shared pool is worthless | CPI outturns are the anchor for D2; D3 has no reading here |
| **3 Dependency Chain** | order by dependency, not importance | magnitude must come after direction and scale |
| **4 The Membrane** | round trip loses information; measure the gap R_T | a condensed answer must state what it dropped |
| **5 Mint Pipeline** | gap bins, three guards, the MDL bargain | no new primitive is owed; the fifth bin (refutation) applies to the forced choice |
| **6 Closure and Reachability** | import moves the wall; instruments improved from worse instruments | sharpen an existing instrument, do not import a new theory |
| **7 Room Chain** | agreement compounds, evidence does not; next room picked against residual | more agreeing economists do not corroborate |
| **8 Union Surplus** | residual first, frame second; no search proves absence | describe the coupling before choosing a literature camp |
| **9 Leave / Arrive / Search** | union unbundling; shape not magnitude; filters not witnesses | governs the refusal of A-or-B and the gap on "major" |
| **10 Ground Maintainer** | verifier non-access; bring a characterised residual | outreach order: residual first, source later |
| **11 The Habitat** | capability is agent-and-habitat; contact is the currency | a survey without exogenous variation does not change contact |
| **12 The Bond** | cycle, sequence, production, functional group, isomer | governs the signed cycle and the isomer test |
| **13 Minimum Viable Set** | unreachable is a verdict, not a silence | the magnitude is unreached here, not answered "no" |
| **Operators table** | ordered bonds versus symmetric bonds | the directed coupling is a bond question |
| **Symbols table** | `b` belief, `o'` observation, `R` residual, `w` weighting | expectations and outturns are distinct terms |

---

## 3. Findings F1 to F10

### F1: The forced choice is a union compound, not a partition (decisive for the framing)

Fig 9 :4-5: "are not one hard question but several well-formed ones. Split it rather than search." Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :58: "a case in two conditions is not a harder case of either".

The two options are not rival answers to one question. They are two conditions that are jointly present. Higher realised inflation updates expectations (condition B), and higher expectations enter price setting and produce realised inflation (condition A). Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." Asking which single direction is "the" cause is asking a chain question about a cycle.

**Status: triangulated** (Fig 9 union rule and Fig 12 cycle rule, low overlap: one is about problem splitting, the other about bond arrangement). **Mode: `general`** for the structure. **Refuter:** a measurement showing the coupling is a one-way chain in every sector, horizon and regime, so the loop does not close. If that fires, the union reading is withdrawn.

### F2: Expectations and realised inflation are distinct terms, not two names for one reading

Symbols table :21: "mixed by w. Not the observation." Symbols table :32: "What actually happened." Fig 1 :11: "residual R indexed by object slot".

The belief is formed before the action and is explicitly not the observation. This is why "does A cause B or B cause A" is a well-formed question at the level of terms: there are two things to relate. It also warns against the market-breakeven shortcut. A breakeven inflation rate is a reading from bond markets that mixes expected inflation with risk and liquidity premia; the Cleveland Fed's own indicator page (opened 2026-11-23) says its estimates use "Treasury yields, inflation data, inflation swaps, and survey-based measures of inflation expectations." A reading that does not discriminate among these sources is not a clean reading of `b`.

**Status: triangulated** (Symbols table definition and Fig 1 residual indexing, low overlap). **Mode: `general`.** **Refuter:** a demonstration that the survey measure of `pi^e` and the realised price index are the same series under a relabelling, so no residual exists.

### F3: The cause leg is real: belief enters the action that produces the outturn

Symbols table :20: "What the system takes to be the case before it acts." Fig 1 :10: "one bet per object slot, every action". Operators table :36: "A produces B; B did not exist before" (the production bond `⇒`).

Price setters act on the inflation they expect. In loop terms the belief conditions the prediction `Gamma(b,a)` and the action `a` produces `o'`. This is the structural content of the New Keynesian claim that expected future inflation enters current inflation. The Cambridge cross-country study (Moessner, 2025, opened 2026-11-23) put it in the world literature: "We find that inflation expectations have a significant effect on inflation." That is a world corroboration, not a figure verdict.

**Status: triangulated** (Symbols table and Fig 1 and Operators table, low overlap between a notation definition and an agent-loop claim). **Mode: `specified`**, because the mechanism is structural and the magnitude is unmeasured. **Refuter:** an exogenous, randomised shift in expectations that produces no change in price or wage setting at any horizon. This is refuter R1 in §4.

### F4: The response leg is real: the belief is formed from history and the weight learns from outcomes

Symbols table :21: "it inherited, mixed by w. Not the observation." Symbols table :25: "learnable from the outcomes of past weightings." Fig 12 :121: "cycle. The output re-enters as input."

The belief is "Formed from its own history" (Symbols table :20), and the weighting `w` is learnable from prior outcomes. So the observation re-enters as an input to the next belief. This is the structural content of adaptive expectations. The adaptive-expectations article (Wikipedia contributors, opened 2026-11-23) states the same mechanism: "current expectations of future inflation reflect past expectations and an 'error-adjustment' term, in which current expectations are raised (or lowered) according to the gap between actual inflation and previous expectations."

**Status: triangulated** (Symbols table weighting and Fig 12 cycle, low overlap). **Mode: `specified`.** **Refuter:** realised inflation surprises that produce no update in stated expectations at any horizon. Refuter R2 in §4.

### F5: The residual must be read per slot; a single aggregate "major" discards the signal

Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

Slots here are countries, sectors, horizons, forecaster types and inflation regimes. Moessner (2025) found that "inflation expectations matter significantly more for inflation when inflation is higher". That is precisely a per-slot result: the coupling is stronger in the high-inflation slot. A single global coefficient answers a question nobody asked, and the framework explicitly disqualifies it as the place to look.

**Status: triangulated** (Fig 1 and the world finding, with the caveat that world agreement is secondary). **Mode: `general`** for the rule. **Refuter:** a demonstration that the directed coupling has the same sign and the same magnitude in every sector, horizon, forecaster type and regime, so the per-slot residual vanishes into the average. Refuter R3 in §4.

### F6: "Major" is a magnitude question and the figures return a shape, not a number (gap)

Fig 9 :32: "you get a kind of thing, never the answer itself". Fig 13 :134: "Unreachable is a verdict here, not a silence". Fig 8 :39: "So a search that finds nothing is never a proof of absence."

No figure line states a coefficient, a share of variance, or a threshold for "major". The framework's canonical rule is that it returns a shape, not a name and not a magnitude. Rudd's FEDS paper (2021, abstract opened 2026-11-23) reports that the belief that expectations are a key determinant "rests on extremely shaky foundations", and Moessner (2025) writes that "There is no consensus in the empirical literature on whether inflation expectations matter for inflation." Both are world reports about an unsettled measurement, and neither overrules the figure verdict: the magnitude is a `gap` here.

**Status: single-source for the limit** (Fig 9 plus Fig 13, which overlap in the same framework; world sources only corroborate the difficulty). **Mode: `general`.** **Refuter:** a figure line that directly governs a magnitude, or a ground reading with an instrument that exogenously moves expectations and measures the inflation response. Either would move this from `gap` to `grounded`.

### F7: Disagreement between camps is not a witness; they read the same pool

Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence." Fig 2 :40: "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool". Fig 2 :42: "Buy independence in proportion to the cost of being wrong." Fig 7 :13: "agreement compounds, evidence does not".

The "expectations matter" camp and the "expectations follow inflation" camp frequently estimate variants of the same Phillips curve on the same national accounts and survey data. Their agreement, when it happens, is the pool talking. Their disagreement, when it persists, is the signal to split (F1), not to average. The Rudd paper and the Moessner paper reach different emphases while citing overlapping literatures (both discuss Coibion and Gorodnichenko, Rudd, and the New Keynesian Phillips curve), so they are one evidence pool with two readings, not two independent witnesses.

**Status: triangulated** (Fig 2 and Fig 7, low overlap). **Mode: `general`.** **Refuter:** two estimates built on disjoint data and disjoint instruments that converge on the same magnitude. That would be corroboration at maximum independence.

### F8: The instrument for direction already exists in a weaker form; sharpen it rather than import a new theory

Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something." Fig 6 :35: "the search for a proto-instrument is a search for one that is already there." Fig 6 :49: "more search at the same reach: is it in here and unfound? The closure does not change."

We already have instruments that return something: household and firm inflation surveys, professional forecaster panels, central bank communication events and market breakevens. What they fail to resolve is exogeneity: did expectations move because of new information about future prices, or because prices already moved? The remedy is to sharpen the existing instrument (randomised information treatments, announcement surprises, staggered survey waves), and to distribute the search across independent frames. It is **not** to import a new grand theory of inflation, which would add an atom that was not needed (Fig 6 :24: "A wrong atom costs more than starting from primitives").

**Status: triangulated** (Fig 6 instrument rule and Fig 8 residual-first rule). **Mode: `specified`.** **Refuter:** a demonstration that no existing reading returns anything that fails to resolve direction, so there is no proto-instrument to sharpen. That would change the verdict from "unreached" to "underivable at this budget" and issue a different instruction.

### F9: Measurement drift is a channel failure, not a world failure

Fig 10 :24: "the ground does not decay, the channel does". Fig 11 :40: "An improvement that does not change contact changes nothing, however much it improves."

A survey series that is rebased, a market measure whose risk premium shifts, or a pooled sample that straddles a change in monetary regime: each is a channel problem. The inflation outturn did not decay. Adding more observations to a dead channel does not restore contact. Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." A longer time series is a larger budget, not a new witness.

**Status: single-source** (Fig 10 and Fig 11 are framework primaries with overlapping provenance). **Mode: `general`.** **Refuter:** a case where adding observations to a single unchanged instrument settles direction without any change in contact. I know of no such case and would record it if found.

### F10: What survives and what is refused

| claim | mode | figure | status |
|---|---|---|---|
| The coupling is a cycle, not a one-way chain | `general` | Fig 12 :121 | survives, triangulated |
| The question is a union compound and must be unbundled | `general` | Fig 9 :54, :58 | survives, triangulated |
| The residual must be read per slot | `general` | Fig 1 :19, :22 | survives, triangulated |
| Expectations enter price setting (cause leg) | `specified` | Symbols :20, Fig 1 :10 | survives structurally, unmeasured |
| Realised inflation updates expectations (response leg) | `specified` | Symbols :25, Fig 12 :121 | survives structurally, unmeasured |
| Expectations are a *major* cause, with a stated magnitude | `gap` | Fig 9 :32, Fig 13 :134 | refused at this budget |
| Either A or B alone answers the question | `general` | Fig 9 :4-5 | refused as malformed |
| More agreement among economists settles it | disqualified | Fig 2 :40 | refused |

---

## 4. Pre-registered refuter (written before the conclusion)

Required by the seat map :287: "And a falsifier written before the run is a design instrument, not only an honesty device." These were written before §3 was finalised.

1. **R1 (kills the cause leg).** A randomised, exogenous shift in inflation expectations produces no change in subsequent price or wage setting at any horizon, in a setting where the shift is known to have been received.
2. **R2 (kills the response leg).** Realised inflation surprises produce no update in stated expectations at any horizon, after controlling for the information content of the surprise.
3. **R3 (kills the per-slot shape claim).** The directed coupling has the same sign and the same magnitude across countries, sectors, horizons, forecaster types and inflation regimes, so the per-slot residual is zero everywhere and unbundling buys nothing.
4. **R4 (closes the gap).** A figure line governs the magnitude directly, or a ground reading with an exogenous instrument reports the share of inflation attributable to expectations. Then the magnitude is no longer `gap`.

If R1 and R2 both fire, the cycle is refuted and the honest answer is that neither direction is operative in the measured setting. If R3 fires, F5 is withdrawn and an aggregate answer is licensed. Until one fires, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. **Unbundle before searching.** Split the question into D1 (how expectations form), D2 (how expectations enter price setting) and D3 (what instrument identifies direction). Do not average them (F1, F5).
2. **State the mode on every sentence.** "Both directions are structurally present" is `specified`. "The magnitude is unknown here" is `gap`. Neither is a verdict (seat map :281: "an unmeasured quantity is a specification of what to measure and is worth having, it is not a verdict").
3. **Sharpen the existing instrument, do not import a theory** (F8). Ask for the design of an exogenous expectations shift, not for a new school of macroeconomics.
4. **Keep the slots separate in every result** (F5). Report the coupling by country, horizon and inflation regime, then say what the union of slots looks like.
5. **Lead with the shape claim and the refuter** (Fig 10 :52). Ask what a failure would look like before offering links. Do not ask for agreement (Fig 2 :35).
6. **Carry the round-trip gap** (Fig 4 :30): "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." The condensed answer in `07` and `09` drops details that `01` and `06` keep. `11_audit.md` enumerates them as `R_T`.

---

## 6. Strains and re-census

- **First reading: "the figures prove A."** The belief `b` enters the prediction, so expectations must cause inflation. This strained against Symbols :25 (the weight learns from outcomes) and Fig 12 :121 (cycle). Re-census: the first reading governed D2 only; the lines it ignored govern D1 and the cross-domain composition. Retracted as one-sided and replaced by F3 plus F4.
- **First reading: "the figures cannot say anything about economics."** Strained against F1, F2 and F5, which are figure-governed shape claims about union, term distinction and per-slot residuals. Retracted at the shape level. It remains true at the magnitude level (F6).
- **Candidate line Fig 12 :119 (catalyst), considered for central-bank credibility.** "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is." The strain: central bank credibility is a world import, not a quantity the figures govern. Re-census to Fig 12 :121 (cycle). The catalyst line is not used.
- **Live strain, named not hidden.** Fig 9 :32 and Fig 13 :134 say the framework returns a shape and that unreachable is a verdict. The world literature does report magnitudes. Whether a secondary report of a ground reading can count as a ground reading for *this* derivation is not decidable from the figures: the figures say the seat reads the ground, and this seat did not run the instrument. We record the tension and keep the magnitude at `gap`.
- **After re-census: one live strain, none silently smoothed.**

---

## 7. Canonical usage check (figures README + WATSON 60, 2026-11-22)

Two local sources were read after the first four sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw." And the canonical limit: the framework says "what a missing thing would have to look like (a shape, not a name)", then stops at the limit of the instruments and records the lineage so the stop is honest. "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: "the figures are the ground for design questions; Isaiah is the anchor for what the figures genuinely cannot settle." The seat does not ask the anchor to decide what the figures already settle. Applied here: the union reading and the cycle are figure decisions, so no external ruling is owed on them. The magnitude is genuinely unsettled, so it is recorded as a gap rather than escalated.

### Retraction and confirmation log

| earlier reading | status after the canonical check |
|---|---|
| "The forced choice can be answered by picking A or B" | **Refused.** The canonical union rule (Fig 9 :54) plus the cycle (Fig 12 :121) govern. The question must be split. |
| "The figures prove expectations cause inflation" | **Retracted as one-sided.** Fig 3 dependency order and the Symbols weighting line require both legs before the magnitude is asked. |
| "The figures cannot speak to economics" | **Retracted at shape level, confirmed at magnitude level.** Shape is figure-governed; number is not. |
| "More agreement would settle it" | **Refused.** Fig 2 :40 and seat map :163 both disqualify a pooled-agreement verdict. |
| "World sources decide the magnitude" | **Refused.** They are secondary. They corroborate the difficulty and the per-slot result but do not overrule the gap. |
| "Search harder and the magnitude will appear" | **Refused under Fig 6 :49.** More search at the same reach is a budget fact, not a new instrument. |
| "The magnitude is unreachable in principle" | **Not claimed.** It is unreached at this budget. Fig 8 :39: "So a search that finds nothing is never a proof of absence." These issue different instructions. |
| "This is a ground reading" | **Refused.** Simulated derivation, checked for internal consistency only. |

---

## 8. Updated verdict

The shape survives: a **signed cycle** over a **union compound**, read **per slot**, with the **cause leg and the response leg both structurally present** and the **magnitude owed to an instrument**. The forced A-or-B is refused as malformed. The word "major" is a `gap` here, not a "no". Strains after re-census: one live, about whether a secondary report of a ground reading can close a gap that the figures leave open; it is recorded, not smoothed. No figure quote was taken from a summary, and every `Fig N :line` string used above was checked against `FRAMEWORK/reference/03-FIGURES_TEXT.md` before it was written.
