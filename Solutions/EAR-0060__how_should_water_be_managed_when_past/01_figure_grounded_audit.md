# Figure-grounded audit: water management when past patterns fail

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** LLM output is simulacra; the testable output would have to be derived from a real basin, a real instrument, or by working the formula by hand. This document is a simulated derivation checked for internal consistency against the verbatim figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources for figure lines.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session. All `Fig N :line` citations are verbatim from that file. `THE_FORMULA.md` and the canonical figures README were read for the mode rule and the usage rule. World sources are listed in `10_source_ledger.csv` and are secondary corroboration only.

---

## 0. The question under audit

> **Source question (earth systems.txt line 79):** "How should water be managed when past patterns no longer reliably predict future supply?"

Stated as an effect: a water manager holds a belief `b` formed from a historical record and an inherited prior (Symbols table: *"How far the belief leans on private history versus inherited prior"*). It acts `a` (build a reservoir, set an allocation rule, issue a permit). The ground returns an observation `o′` (actual supply). The residual is `R = |Γ(b,a) − o′|` per slot `s`: a basin, an aquifer, a season, a user class. Under non-stationarity, `R` on some slots persists and does not trend down as more history is added. That is the whole effect. The question asks what the controller should do.

**Bound answer-shape (written before the run, per Formula step "Direction"):** a management regime that (i) keeps the ground reachable per slot, (ii) refuses the held stationarity term instead of refitting it, (iii) holds objectives as thresholds rather than fixed targets, (iv) sequences actions as revisable pathways, and (v) is corrected by monitoring against surfaced residuals. This shape is an ordinary term here, so it can be refuted.

---

## 1. Residual by arity, symmetry, scale

- **Arity.** More than one condition. Non-stationary supply is not one broken variable. It is a union of overlapping conditions: a changed climate, an extraction regime, a pollution load, a demand trajectory, and an infrastructure legacy. Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* A single lever clears the region where only one condition holds and leaves the intersections standing.
- **Symmetry.** Asymmetric. Water supply has directedness (Fig 13 :22: *"a difference that can be spent"*), and the management habitat is asymmetric in exactly the framework's sense: Fig 11 :61 *"Introduction is available; exclusion is not."* You can add a measure; you cannot subtract the habitat. There is no symmetric swap between "predict from the past" and "predict from the future" that leaves the decision unchanged.
- **Scale.** Per slot, not global. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* First order inside one basin or season; second order at the portfolio and governance level, where a settled measure becomes an atom for the next decision (Fig 12 :104). The cross-scale transform is lossy (Fig 4 :30), so the round trip gap `R_T` must be recorded, not assumed zero.

**Strain test applied before choosing figure lines.** I first tried to read the residual as a BROKEN-mechanism gap owing a new mint (Fig 5 :14, *"mechanism broken: a new term is owed"*). It fits only with a strain: the regime that failed is not a missing mechanism, it is a held regularity that is false. Re-census: the fifth gap kind governs here (F2 below). I kept the first reading visible rather than erasing it.

---

## 2. Domain census

One line per domain: actors, currency, anchor. A domain with no nameable anchor is not a domain yet. Partition or union stated. Order by dependency (Fig 3 :20: *"The chain is ordered by dependency, not by importance."*).

| domain | actors | currency | anchor | type |
|---|---|---|---|---|
| **D1, hydrologic ground** | precipitation, snowpack, soil moisture, groundwater, rivers, aquifers, demand | water quantity, quality and timing; energy composes with gradient into flow (Fig 13 :76) | measured supply and demand outcomes. Legitimate because the question is constitutively about future supply (Fig 2 :36). It does not update on what a manager thinks (Fig 2 :33) | ground, not a frame |
| **D2, the record and forecast frame** | historical hydrograph, statistical model, prior, forecast | prediction residual; belief weight `w` | **none of its own.** It is an instrument, not a ground. Its anchor was borrowed from D1 and has decayed (Fig 10 :24) | frame (stale channel) |
| **D3, the decision and institution frame** | managers, rules, permits, infrastructure portfolios, stakeholders | robustness versus regret; cost in two currencies (Fig 12 :126) | the ground, reached through monitoring (Fig 10 :29) | frame; union with D2, not a partition |
| **D4, verification and outreach** | expert readers, water managers, reviewers | agreement and residuals | the ground, never agreement (Fig 2 :35, :40) | frame; in this simulated run all seats share one evidence pool, so independence is zero |

**Partition or union.** D2 and D3 overlap: the forecast is inside the decision, and the decision changes the record it later reads. This is a compound with its own loop, so it gets its own derivation (see `06_isomers_and_order.md`). D1 is the ground and must not be listed as a party; Fig 2 :47 warns that *"A ground listed as one of the parties has already become a frame."*

**Dependency order (Fig 3).** 1, perception: keep the anchor reachable, measure the actual system. 2, vocabulary: name the slots and thresholds. 3, objective: say what would count as progress under a shifted regime. 4, planning: choose a portfolio or pathway. 5, learn and carry: monitor and revise. A rule written at step 4 while step 3 still assumes stationary supply is a reading below the break. Fig 3 :22: *"A step whose input never arrives cannot be diagnosed, only its predecessor can."* And Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

---

## 3. Figure census

| figure | bearing on this residual | verdict after strain test |
|---|---|---|
| 1 The Agent | residual per slot; frame-internal quantities disqualified | governs D1/D3 scaling; triangulated with Symbols table |
| 2 The Ground | anchor legitimacy; correlation disqualifies a verdict | governs D1 and D4; triangulated with Fig 10 |
| 3 Dependency Chain | objective must be re-fit before planning | governs D3 order; single-source for the order |
| 4 The Membrane | a historical rule replayed is a recording; measure `R_T` | governs D2 to D3 transfer; single-source |
| 5 Mint Pipeline | fifth gap kind is REFUTED, needing negation | governs D2; triangulated with Fig 6 closure |
| 6 Closure / Reachability | more search of the record adds no atom; instruments improved from worse ones | governs D2 and D3; triangulated with Fig 8 |
| 7 Room Chain | no final plan; book successive distinct rooms | governs D3; triangulated with Fig 12 :112 |
| 8 Union Surplus | union of conditions; describe residual before picking a frame | governs D1/D2/D3 split; single-source for figure rule, world-corroborated |
| 9 Leave / Arrive | split a union before search; shape not a name | governs question form; triangulated with README canonical |
| 10 Ground Maintainer | ground does not decay, channel does; room follows question | governs D2 and D3; triangulated with Fig 2 |
| 11 The Habitat | capability is agent-and-habitat; enumerate contact; permanent work | governs D1 to D3 coupling; triangulated with Fig 10 :72 |
| 12 The Bond | plan is sequence, goal is comparison, progress is subtraction; cycle | governs D3 regime form; single-source, Operators table corroborates |
| 13 Minimum Viable Set | gradient-as-spendable-difference; flow; cross-kind composition | grounds physical description of supply; single-source |
| Operators table | ⋛ comparison defines a threshold objective; ¬ refuses a term | corroborates F3 and F7 |
| Symbols table | `w` belief weight; `R` per slot; ground is the anchor | corroborates F1 and F3 |

---

## 4. Findings

Every verdict is kept per domain. "Triangulated" means two figures with low overlap between them. "Single-source" means one figure line, with world corroboration noted where present but never counted as a second figure.

### F1: The historical record is a stale instrument, not the anchor (decisive for D2)

Fig 2 :36: *"An anchor is legitimate when the question is constitutively about it."*
Fig 10 :24: *"the ground does not decay, the channel does"*
Fig 10 :25: *"stale percepts, dropped transients,"*
Fig 10 :29: *"keep the anchor reachable"*

The question is constitutively about future supply, so the ground is the future hydrologic state, not the historical hydrograph. The hydrograph is a channel that used to carry a reading. When the regime shifts, the channel degrades while the ground persists. The framework's named failure is not "we need a better forecast"; it is "you have lost touch." The output of the channel check is a warning, not a verdict about which policy is right.

- **Mode:** `specified`. A specific basin could show this; none was measured here.
- **Triangulation:** triangulated, Fig 2 (anchor legitimacy) and Fig 10 (channel decay), low overlap between the definition of an anchor and the mechanics of a stale channel.
- **Refuter:** if the question were constitutively about the record itself (for example, "how well did past operating rules fit past flows?"), the record would be a legitimate anchor and F1 would not apply. Also refuted if a manager can show an instrument that moves when pushed and still settles the question.

### F2: Refuse the stationarity term; do not refit it and do not mint a new one (D2)

Fig 5 :53: *"refuted: a term we hold is wrong; a term is owed that says so"*
Fig 5 :55: *"What falls is the reach."*
Fig 8 :32: *"no search, however long, adds an atom"*
Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

The held term is "future supply is distributed as past supply." Its residual persists and does not trend down (Formula step 2's "shrinking test, opposite sign"). That makes it the term to point a refusal at. A refusal is a negation `¬`, not a new mechanism, and the Operators table says: *"a refutation is a negation, which is why a vocabulary without it can only accumulate."* Nothing is deleted; the reach falls because something was added. Consequently "collect more historical record" is the wrong lever: the record's closure does not contain the new regime, and closure is idempotent.

- **Mode:** `specified`. Whether a particular stationarity term is the wrong one is a claim about a particular model, unmeasured here.
- **Triangulation:** triangulated, Fig 5 (fifth gap kind) and Fig 8 (closure idempotent), different arguments.
- **Refuter:** demonstrate a held term that already predicts the shifted regime without new atoms. Then no refusal is owed and F2 collapses. Note also that "unreachable at this budget" and "underivable in principle" are different facts (Fig 8 :40-43); declaring a refusal when the term is merely unfound would be an error in the opposite direction.

### F3: Keep the residual per slot; the average hides the live signal (D1, D3)

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*

A regional "average water supply" can sit near zero while one aquifer, one season, or one user class carries a live, growing residual. The Symbols table: *"One object, region or entity being tracked. R is measured per slot, never as a single global number."* Management must therefore be per basin, per aquifer, per season, per threshold. This is a structural constraint, not a policy recommendation.

- **Mode:** `general` as a structural constraint; `specified` when applied to a named basin.
- **Triangulation:** triangulated, Fig 1 and Symbols table, low overlap.
- **Refuter:** show a basin where all live residuals are fully captured by the global average at every decision date. That is a measure-zero case, but if it holds, aggregation is harmless there.

### F4: It is a union compound; unbundle before searching (D1, D2, D3)

Fig 9 :5: *"are not one hard question but several well-formed ones. Split it rather than search."*
Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*

Climate shift, extraction, pollution, demand growth, and infrastructure legacy overlap. The residual does not shrink with effort when each rule keeps working on a different subset (Fig 9 :4). The correct first move is to split, not to search harder for a single optimum. When the split lands on a union rather than a partition, the intersections become a specific compound with its own loop.

- **Mode:** `general` for the compound reading; `specified` for any particular decomposition.
- **Triangulation:** single-source for the figure rule (Fig 9). The RAND and Bureau of Reclamation source corroborates from a different pool by naming multiple concurrent drivers, but agreement from another field is one witness, not a second figure.
- **Refuter:** exhibit one lever that clears the whole residual across all intersections, not merely the single-condition regions. Then the union reading is wrong.

### F5: Capability is agent-and-habitat; manage contact, not the institution in isolation (D1 to D3)

Fig 11 :40: *"An improvement that does not change contact changes nothing, however much it improves."*
Fig 11 :39: *"capability is a property of agent-and-habitat, never of the agent alone"*
Fig 11 :43: *"The habitat is enumerated, never composed."*
Fig 11 :61: *"Introduction is available; exclusion is not."*
Fig 11 :63: *"a managed ecosystem is permanent work rather than a solved state"*
Fig 10 :72: *"When the question changes, the room should change."*

A water institution cannot be made more capable by training the institution alone. Contact must change: gauges, monitoring, revised allocation rules, new measures introduced into a habitat the manager did not author. The habitat is read off the world (actors, conditions, relations), including the conditions *"light, water, temperature, season, terrain"* named in Fig 11 :46. Because exclusion is unavailable, management is permanent work. When the hydrologic question changes, a fixed institution is the failure, and the correlation with past success is only its symptom.

- **Mode:** `general` for the capability claim; `specified` when a particular intervention is proposed.
- **Triangulation:** triangulated, Fig 11 (agent-and-habitat) and Fig 10 :72 (room follows question), two different arguments.
- **Refuter:** Fig 11 :72 states its own falsifier honestly: *"an agent-only improvement that moved the ground would refute the capability claim."* Exhibit that and F5 falls.

### F6: No final plan; book a sequence of distinct rooms against surfaced residuals (D3)

Fig 7 :6: *"the limit: no last room"*
Fig 7 :36: *"The next room must differ from the last, and match the residual it surfaced."*
Fig 7 :42: *"the next room you book is the direction you travel"*

A water plan that is declared final is a last room. The framework forbids it. Each revision must differ from the last and be selected against the residual the last one surfaced. Fig 7 :37-39 adds the two factors that can zero progress: the bracket's fidelity across the handoff and the ground's pressure on the room. In water terms, a monitoring signpost with no fidelity to the threshold it watches, or an adaptation with no ground pressure behind it, is motion without progress.

- **Mode:** `specified`. The sequence is a shape; no particular pathway is asserted.
- **Triangulation:** triangulated, Fig 7 (room chain) and Fig 12 :112 (*"A plan is a sequence."*), low overlap.
- **Refuter:** a rule that remains correct across the full plausible range without revision, with no monitoring signposts, would remove the need for a sequence. Also refuted if handoff fidelity and ground pressure are both demonstrably irrelevant to adaptation outcomes.

### F7: The regime must be writable as comparisons, sequences and subtractions (D3)

Fig 12 :112: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."*
Fig 12 :111: *"A vocabulary without bonds can name a state and cannot name a route to one."*
Fig 12 :121: *"The output re-enters as input. The sign of the loop decides whether it closes"*
Operators table :51: *"a goal is a comparison, which is why a vocabulary without it cannot state one"*

An ingredient list (dams, desalination, conservation, reuse) can name what a system contains and cannot name a route to a moving target. A workable regime needs: threshold objectives (`⋛` comparison), ordered actions (`→` sequence), measured progress (`−` subtraction), and a monitoring loop whose sign decides whether it closes (Fig 12 :121, *"cycle"*). This is why "build more supply" is not an answer shape: it is an ingredient.

- **Mode:** `general` for the notation constraint; `specified` for any instantiated regime.
- **Triangulation:** single-source for the figure rule (Fig 12), with the Operators table as a closely related corroborator, not an independent witness.
- **Refuter:** exhibit a vocabulary with no comparison, no sequence and no subtraction that still states a goal and a route to it under change. The figures say it cannot be done; a demonstration would refute the claim.

### F8: Buy independence in proportion to the cost of being wrong (D4)

Fig 2 :42: *"Buy independence in proportion to the cost of being wrong."*
Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool"*

Water decisions have a high cost if wrong, so independent frames are worth buying: different gauging networks, different climate models, different institutional perspectives. Agreement among models that share a reanalysis product is one witness wearing many names. In this simulated run, all seats draw on one evidence pool, so their agreement is internal consistency and not corroboration.

- **Mode:** `general`.
- **Triangulation:** triangulated, Fig 2 (correlation valence) and Fig 7 :35 (*"A room's agreement is variation, not a verdict"*), low overlap.
- **Refuter:** show agreement between frames drawing on a single pool carrying verdict weight. The figures say it cannot.

### F9: Any condensed water rule carries a round trip gap `R_T` (D2 to D3)

Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."*
Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

Taking a successful historical operating rule and applying it to a shifted future is replaying a recording. It produces the old success if the conditions recur and fails silently if they do not. Fig 4 :34: *"A seed carries no small tree: it carries what will grow one, and the conditions it lands in decide what it becomes."* The honest form is a lossy condensation with a measured gap, not an identity claim.

- **Mode:** `general`.
- **Triangulation:** single-source (Fig 4), with the Formula's *"a library that grows is not a reach that grows"* as a same-framework corroborator only.
- **Refuter:** a condensation whose round trip returns the original without loss at the level that matters. Then `R_T` is zero there and the warning does not bite.

### F10: Improve the instrument from something already returning signal (D2, D3)

Fig 6 :32: *"An instrument is not built from a description. It is improved from a worse instrument already returning something."*
Fig 6 :34: *"Where nothing is, there is no edge to extend from"*
Fig 6 :14: *"the only operator that moves the wall"*

The response to a stale record is not to wait for a perfect forecast. It is to find whatever is already registering the shift at some resolution: an early-warning indicator, a changed snowmelt date, a falling baseflow, a salinity front. Fig 6 :35: *"the search for a proto-instrument is a search for one that is already there."* Where nothing has ever registered, the honest verdict is unreachability at this budget, not a promise of eventual prediction. Import from a frame whose closure differs is the only operator that moves the wall, and it pays a source gate and a shadow test.

- **Mode:** `specified`. Which indicator is already returning signal is basin-specific and unmeasured here.
- **Triangulation:** single-source (Fig 6). The RAND tool corroborates from a different pool by naming *"signposts to monitor"*, but that is one secondary witness.
- **Refuter:** specify an instrument built from a pure description with no prior reading to improve from, and show it works. The figures say no edge exists to extend from.

### F11 (added after world search): Local robustness around a bad estimate can be false comfort

The info-gap literature records a genuine conflict: *"info-gap's robustness model is unsuitable for the treatment of severe uncertainty characterized by a poor estimate and a vast uncertainty space"* (Sniedovich, as summarized in the source read). This does **not** flip the figure verdict. It sends the census back to D2: robustness defined only in the neighbourhood of the historical estimate is a local stability claim, and the held estimate is exactly what F2 says to refuse. Fig 6 :27: *"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."*

- **Mode:** `specified`.
- **Verdict after re-census:** corroborates F10's demand for an instrument already returning signal; conflicts with any reading of "robustness" as comfort around the old mean. No figure is overturned.

---

## 5. Pre-registered refuter

Required before the conclusion: *"a falsifier written before the run is a design instrument, not only an honesty device."* The shape claim is refuted if any of the following holds:

1. A basin's supply regime is shown to be stationary over the decision horizon at the resolution that matters, so the historical record is a legitimate anchor there (breaks F1).
2. A held term is demonstrated to predict the shifted regime without new atoms, so no refusal is owed (breaks F2).
3. A single lever clears the whole residual across all condition intersections (breaks F4).
4. An agent-only improvement changes the hydrologic ground (breaks F5, its own stated falsifier).
5. A rule remains correct across the full plausible range with no signposts and no revision (breaks F6).
6. A vocabulary without comparison, sequence or subtraction states a goal and a route to it under change (breaks F7).
7. A condensed water rule round trips with zero loss at the level that matters (breaks F9).

If any fires, the corresponding finding is withdrawn. Until one is run, no part of this may be labelled `grounded`.

---

## 6. Recommendation

1. Stop treating the historical hydrograph as the anchor (F1). Name the ground: measured supply, demand, and threshold crossings per slot.
2. Write down the stationarity term as an ordinary term and refuse it (F2). Do not answer a false regularity with more fitting.
3. Split the compound before optimising (F4). Keep D1, D2, D3, D4 loops separate.
4. Specify objectives as comparisons and actions as sequences with signposts (F6, F7). Report per-slot residuals, never a single average (F3).
5. Enumerate the habitat rather than composing it (F5). Buy independent frames in proportion to the cost of being wrong (F8).
6. Measure `R_T` for any condensed rule before reusing it (F9). Seek the indicator already returning signal (F10).
7. Send the refuter before the theory (Fig 10 :52, *"Bring a characterised residual, never the source"*).

---

## 7. Canonical usage check

Two rules were read after the first six sections and govern how the figures may be used:

- The canonical figures README: the figures *"outrank everything else in the repo"* and *"the quotes are the authority, not this summary"*. A reading that makes one figure contradict another has misidentified its domain. The framework returns *"a shape, not a name"* and stops at the limit of the instruments, recording the lineage. *"Indiscernibility is not identity."*
- `THE_FORMULA.md`: verdict and budget are separate; *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* A tier, a journal, or a prestigious reviewer is a filter, not a witness.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| Non-stationarity is a BROKEN-mechanism gap owing a new mint (Fig 5 :14) | **Retracted at domain level.** Re-census: it is the REFUTED fifth kind (Fig 5 :53), owing a negation, not a mechanism. Both readings are recorded so the correction is visible. |
| "Robust adaptive management" is the answer | **Retracted as a name.** That phrase names a family of methods from the world literature. The figures return a shape with constraints; robustness is a property of the shape, not a named primitive. See `09_watson_answer.md` VERDICT. |
| F1 "decisive" | **Narrowed, not withdrawn.** It is decisive for D2 (the record as anchor). It does not apply if the question is constitutively about the record. Boundary condition stated in F1. |
| Fig 13 cross-kind rule considered for F7 | **Dropped after strain test.** *"Two states never bond directly"* governs the six primitives, not a water management regime. Forcing it would have been the exact error the strain test exists to catch. Kept visible here as a dropped candidate. |
| F5 habitat asymmetry versus "portfolio composition" | **Not strained.** Re-census: the habitat is enumerated (read off the world); the management regime is a composition of measures in D3. Different objects, so both rules govern without conflict. |
| "Unreachable" feared as a silence | **Canonically refused.** Fig 13 :134: *"Unreachable is a verdict here, not a silence"*; Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* |

---

## 8. Strain and re-census log

- **Fig 5 mint versus Fig 5 refuted.** Resolved by re-census at step 1 (see strain test above). The false term is a held regularity, so the fifth kind governs.
- **Fig 11 enumeration versus Fig 12 composition.** Resolved: habitat in D1 is enumerated; regime in D3 is composed. Different objects.
- **⋛ as threshold objective.** Live but minor strain. The Operators table defines ⋛ as *"a threshold relation between two quantities"*, while D3 objectives compare measured supply against a requirement. At the management level those are quantities, so the type fits. If an objective were instead a comparison of two whole regimes, the strain would reopen and need an instrument, not an argument.
- **After re-census: one minor live strain, named, none hidden.**

---

## 9. Round trip gap `R_T`

The condensation used in this folder is: "keep the ground reachable, refuse stationarity, hold thresholds, sequence actions, revise against residuals." Round tripping it against the concrete world (a reservoir rule, an allocation permit, a desalination investment) drops at least three constraints: per-slot indexing (a single portfolio average can swallow a live aquifer residual), the requirement that the refusal target a bound term (not merely a preference for flexibility), and the monitor fidelity condition at each handoff. `R_T` is therefore nonzero and is recorded qualitatively. It was not measured numerically because no ground reading exists.

---

## 10. Verdict summary

| claim | mode | figure basis | status |
|---|---|---|---|
| Record is an instrument, not the anchor | `specified` | Fig 2 :36, Fig 10 :24 | triangulated |
| Stationarity term must be refused, not refitted | `specified` | Fig 5 :53, Fig 8 :32 | triangulated |
| Residual per slot, never averaged | `general` / `specified` | Fig 1 :19, :22 | triangulated |
| Union compound, split before search | `general` | Fig 9 :5, :55 | single-source figure, world-corroborated |
| Capability is agent-and-habitat | `general` | Fig 11 :39-40, Fig 10 :72 | triangulated |
| No final plan; sequence of distinct rooms | `specified` | Fig 7 :36, :42 | triangulated |
| Regime needs comparison, sequence, subtraction, cycle | `general` | Fig 12 :111-112, :121 | single-source figure |
| Buy independence; agreement is not verdict | `general` | Fig 2 :42, :35 | triangulated |
| Condensed rules carry `R_T` | `general` | Fig 4 :25, :30 | single-source figure |
| Improve instruments from existing readings | `specified` | Fig 6 :32, :34 | single-source figure, world-corroborated |

**Overall:** the shape survives the derive-first audit. No figure line closes to a specific named policy, and none was forced to. The specific policy choices are left to the ground.
