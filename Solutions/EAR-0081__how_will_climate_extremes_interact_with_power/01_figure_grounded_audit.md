# Figure-grounded audit: climate extremes and five infrastructure systems

**Mode of this document: `specified` on the shape, `general` on the structural rules, `gap` on the forecast. Not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: simulated, not a ground reading.** The Recursive Self-Improvement Trap (read this session) says LLM output is an approximate simulation and *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No climate model was run and no outage was measured.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (quotes cited as `Fig N :line`), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, and the world sources listed in `10_source_ledger.csv`, all opened 2026-11-22.

## Proposal header (seat reasoning, five lines)

```
DECIDES:  Keep per-sector residuals separate; treat the question as a union compound;
          enumerate the habitat before choosing a frame; refuse an aggregated verdict.
          A single risk scalar that decides adaptation spending is refused (Fig 1 :22,
          Fig 9 :54). A = B? No. A is the question of whether we can predict the
          cascade; B is the question of whether we can rank adaptation by agreement.
          Only A is admissible, and only as a shape.
HOURS:    One primary seat plus one independent reviewer seat. Derivation 2-3h, world
          search and source opening 2-3h, artifacts 2h, audit 1h.
PRIOR CASE: QMGR-0037, which established the retraction discipline and the shape/name
          distinction that this solution inherits.
ANALOGUE: The habitat enumeration of Fig 11, applied to an infrastructure field of
          contact rather than an ecological one; DDT to the eagles becomes power to
          pumps to patients three steps out.
LIMIT:    The figures return a shape, never the probability, timing or magnitude of a
          given outage. The empirical forecast is `gap`, and that is a verdict.
```

---

## 0. The residual in effect terms

Let `R_s = |Γ(b,a) - o'|_s` for each object slot `s` in {power, transport, water, communications, health}, where `Γ` is what a planning model predicts under a design climate and `o'` is the observed service state during an extreme. A second residual sits on the coupling edges: the gap between predicted and observed propagation from one slot to another.

- **Arity:** at least five slots plus the coupling edges. It is not a scalar.
- **Symmetry:** asymmetric and directed. Power loss disables water pumping and telecom masts; a water outage does not disable the grid in the same way. The correct bonds are ordered (`→` sequence, `⇒` production) and threshold comparisons (`⋛`), not symmetric joins. Fig 12 defines `→` as *"A then B; B needs A to have happened"* and `⋛` as *"a threshold relation between two quantities"* (Operators table :48).
- **Scale:** asset, network, system-of-systems, region. The 2003 Northeast blackout and Storm Éowyn both show a local fault becoming a regional service loss. The coupling crosses scales (Fig 4 :21, the membrane as "a filter with a direction").

Bound answer-shape before searching: a per-slot residual vector, an ordered coupling graph, and an instrument per slot. This makes the sought-for shape an ordinary term (Formula "Direction"), so it can accrue a residual and be refused.

---

## 1. Figure census (quotes before conclusions)

| figure | verbatim line used | bearing |
|---|---|---|
| 1 The Agent | Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* | five sectors are five slots |
| 1 The Agent | Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."* | refuses one risk scalar |
| 2 The Ground | Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* | the anchor is realized impact |
| 2 The Ground | Fig 2 :35 *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* | model agreement is not settlement |
| 3 Dependency Chain | Fig 3 :19 *"Optimising a link that already works cannot rescue one that does not."* | where effort is wasted |
| 3 Dependency Chain | Fig 3 :27 *"A link with no instrument is not a link that works. It is a link nobody has looked at."* | the vocabulary/objective break |
| 4 The Membrane | Fig 4 :30 *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* | condensation carries a gap |
| 6 Closure | Fig 6 :23 *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* | imports need provenance |
| 7 Room Chain | Fig 7 :13 *"agreement compounds, evidence does not"* | ensembles are one pool |
| 8 Union Surplus | Fig 8 :39 *"So a search that finds nothing is never a proof of absence."* | gap is not absence |
| 9 Leave / Arrive | Fig 9 :54 *"And when the split lands on a union rather than a partition, unbundle before you search again."* | compound, not a list |
| 9 Leave / Arrive | Fig 9 :60 *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* | tier/score cannot decide |
| 10 Ground Maintainer | Fig 10 :52 *"Bring a characterised residual, never the source."* | outreach order |
| 11 The Habitat | Fig 11 :43 *"The habitat is enumerated, never composed."* | read the contact list off the world |
| 11 The Habitat | Fig 11 :52 *"Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."* | cascades run several steps out |
| 12 The Bond | Fig 12 :117 *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* | arrangement carries the cascade |
| 13 Minimum Set | Fig 13 :74 *"Everything else is a composition across the two kinds, never within one."* | cross-kind composition rule |
| 13 Minimum Set | Fig 13 :134 *"Unreachable is a verdict here, not a silence"* | the empirical stop |

Strain test: applied after the census, below. A line that only fits with force governs another quantity and sends us back to the census.

---

## 2. Domain census

R described above. One line per candidate domain, with actors, currency and anchor. A candidate without a nameable anchor is not a domain yet (Fig 2 :29).

- **D1, climate hazard.** Actors: heat, flood, drought, storm, sea-level rise. Currency: hazard intensity and frequency. Anchor: measured climate (observations, reanalysis, event records). The climate models are frames ranging against that anchor, not the anchor itself. Domain: yes.
- **D2, the five service slots.** Actors: assets, operators, demand. Currency: service delivered versus capacity, outage duration. Anchor: outage and service records. The five members are distinct frames under Fig 13 :34 *"And within a kind the members are distinct too, which is what makes them separate frames."* They are slots, not domains, because they share the same currency and anchor. Domain: the set is one domain with five slots.
- **D3, the coupling habitat.** Actors: dependency edges (power to pumps, telecom to grid control, road access to repair). Currency: cascade propagation. Anchor: observed cascades from event forensics (the 2003 blackout task force, Storm Éowyn operator records). Nameable, so it is a domain. Domain: yes.
- **D4, the assessment frame.** Actors: modellers, scenarios, ensembles, agencies. Currency: risk estimates and agreement. Anchor: none of its own. Its only candidate anchor, realized impact, belongs to D1 through D3. By the anchor test it is a **frame**, not a domain. Fig 1 :27 states the disqualification: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* This dissolution is a result, not an omission.
- **D5, the ground (not a domain).** Realized service outcomes. It is the anchor for D1 to D3, and *"it does not change its answer because of what any frame thinks"* (Fig 2 :29). A ground listed as a party becomes a frame, so it is kept outside the set.

**Partition or union.** Union, not partition. Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Hazard, exposure, vulnerability and interdependency overlap; a case in two conditions is a specific compound (Fig 9 :57). The five sectors also overlap through D3, so unbundling means separating slots and then recombining at the couplings, not treating five independent problems.

**Order by dependency (Fig 3).** The chain for this question is perception (sense hazard and asset state) to vocabulary (terms for what an asset affords under stress, e.g. a substation at 45 °C) to objective (what counts as failure and service loss) to planning to learn and carry. The break is between vocabulary and objective, and Fig 3 :25-27 says such a link has neither obvious failures nor obvious tests and attracts the least attention. The PLOS review corroborates: there is no common disruption metric across sectors, and validation data are scarce. Effort aimed at planning (more ensembles) arrives at a step whose input never arrived.

---

## 3. Findings

### F1 - Five slots, never one score (decisive against Option A)

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* Fig 13 :34 gives the member-distinctness rule. World: the PLOS review reports that *"systemic risk estimates from individual road or rail asset failures cannot be summed up due to network effects"* and that a common disruption metric is still missing.

**Verdict:** `triangulated` (Fig 1 plus Fig 13, low overlap: per-slot bookkeeping versus member distinctness). Mode `general`. **Refuter (written before the run):** a single scalar risk index shown to predict per-sector outages with no loss of per-slot information on held-out events. If that fires, F1 is withdrawn.

### F2 - Union compound, unbundle before search

Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :57: *"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."* World: IPCC AR6 WGII B.5, *"Multiple climate hazards will occur simultaneously, and multiple climatic and non-climatic risks will interact, resulting in compounding overall risk and risks cascading across sectors and regions."*

**Verdict:** `triangulated` (Fig 9 plus the dependency split of Fig 3). Mode `general` for the compound shape, `specified` for any given locality. **Refuter:** a demonstration that hazard and interdependency are additive, so a single hazard-by-hazard sum reproduces observed multi-sector losses with no interaction term.

### F3 - Enumerate the habitat; the residual is three steps out

Fig 11 :43: *"The habitat is enumerated, never composed."* Fig 11 :44: *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."* Fig 11 :52: *"Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."* World: Storm Éowyn, where *"spare parts were in stock but unreachable"* and transport delay then slowed power and telecom recovery (npj Natural Hazards 2025); Pescaroli and Alexander 2016, *"The possible threat to proprieties and lives posed by the secondary crisis can exceed that caused by the original trigger"*.

**Verdict:** `single-source` for the figure rule (Fig 11), corroborated by two low-overlap world fields (empirical event forensics and disaster theory). Mode `general`. **Refuter:** a case where first-order contact enumeration alone predicted all second- and third-order service losses in held-out events, with no cascade term needed.

### F4 - The bonds are ordered; cycles are real

Fig 12 defines `→` as sequence and the Operators table :48 calls *"a threshold relation between two quantities"*. The cascade is `power → telecom → control → repair`, not a symmetric co-occurrence. The Storm Éowyn record adds a cycle: power outage disables telecoms, which slows power restoration, a feedback loop the paper names explicitly. Fig 12 :121 names **cycle** as a structure whose *"output re-enters as input"*. World: Pescaroli and Alexander reject the *"toppling domino metaphor"* with its *"unidirectional causality"* as inadequate for intersecting systems.

**Verdict:** `triangulated` (Fig 12 operator definitions plus the cycle structure). Mode `general`. **Refuter:** a symmetric, order-free coupling representation that predicts cascade direction and timing as well as an ordered graph on held-out events. **Strain, named not hidden:** applying `⋛` to sector-level service losses assumes those losses are *"two quantities"* at that level; whether they are needs an instrument, not an argument.

### F5 - The anchor is realized impact, not model agreement

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Fig 7 :13: *"agreement compounds, evidence does not"*. World: the PLOS review records *"the limited access (due to confidentiality) to outage data, which makes validation and calibration of risk models challenging"*; the npj paper records *"limited empirical evidence from real-world events and systems"*.

**Verdict:** `triangulated` (Fig 2 plus Fig 7, different mechanisms: anchor immovability versus correlated agreement). Mode `general`. **Refuter:** a validated model whose agreement with other models, with no event ground, correctly selected the adaptation that minimized realized service loss.

### F6 - The assessment frame has no ground of its own

Fig 1 :24-27 disqualifies frame-internal quantities: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* D4 therefore cannot be a verdict-bearing domain. This dissolves the question "which modelling framework is right" into "which framework ranges against the ground" (Fig 2 :45, *"Frames range against the ground. They do not negotiate with it."*).

**Verdict:** `triangulated` (Fig 1 plus Fig 2). Mode `general`. **Refuter:** an assessment convention that decides an outcome and cannot be violated by an event. Fig 10 :47 names the failure: *"a convention that decides an outcome has stopped being one"*.

### F7 - The empirical forecast is a gap, not a silence

After the census above, no figure line governs which sector fails first, the failure probability, or the magnitude of loss. The figures carry no climate hazard distribution, no fragility curve, no asset inventory, no repair-time law. Three distinct questions from Formula step 7:

- **SEARCHED (first, cheapest).** Is the answer inside the current closure? Partly. Asset-level exposure studies exist per sector, but the PLOS review says understanding of compounding impacts *"is still in its infancy"* and that multi-hazard multi-infrastructure studies are lacking. More search at the same reach does not add an atom (Fig 8 closure is idempotent).
- **INWARD (extend an instrument already returning something).** Outage records, night-time lights proxies for blackouts, vessel tracking for port disruption, and event forensics are already returning partial readings; sharpen those, do not invent a sensor from a description (Fig 6 :34, *"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."*).
- **OUTWARD (import from a frame whose closure differs).** Complexity science (Bondank and Chester 2020), disaster panarchy theory (Pescaroli and Alexander 2016), and climate assessment (IPCC AR6 WGII) each carry an atom this closure lacks. Each import owes a source gate and a shadow test (Fig 6 :12-13). Their agreement is corroboration, not the verdict.

Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* Fig 13 :134: *"Unreachable is a verdict here, not a silence"*. This is unreachable at this budget with these instruments, not underivable in principle (Fig 8 :40-43 keeps those facts distinct).

**Verdict:** `gap` for the forecast, `triangulated` for the claim that it is a gap (Fig 8 plus Fig 13). Mode `general`. **Refuter:** a figure line shown to govern a specific outage probability after a genuine re-census, or a held-out event set in which the figure-derived shape predicted timing and magnitude better than the empirical models.

---

## 4. Pre-registered refuter (written before the conclusion)

Required before any outreach: a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. A single aggregated risk index predicts per-sector outages on held-out events with no loss of per-slot information (breaks F1).
2. First-order contact enumeration alone predicts all second- and third-order service losses on held-out events (breaks F3).
3. A symmetric, order-free coupling representation predicts cascade direction and timing as well as an ordered graph (breaks F4).
4. Model agreement without event ground selects the adaptation that minimizes realized loss (breaks F5 and F6).
5. A genuine re-census finds a figure line that directly governs a specific outage probability, magnitude or timing (breaks F7).

If any fires, the shape is withdrawn or narrowed. Until one is run, nothing in this folder may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with F1 and its refuter. Ask a responder what they would count as a failure before showing any framework (Fig 10 :52, *"Bring a characterised residual, never the source."*).
2. Unbundle the question into five slots plus their coupling habitat; do not answer it as one risk score.
3. Put enumeration before modelling: list the contact paths, including repair access and backup-fuel logistics, before choosing a cascade model (Fig 11 :43).
4. Use the public opt-in venues in `03_public_contact_points.csv`; do not rank recipients by likely agreement (Fig 2 :40).
5. Report the `gap` plainly. "Unreachable is a verdict, not a silence." Do not manufacture a forecast to fill the slot.
6. Treat the figures as a generator of checkable shape, not as climate science. Fig 4 :30 requires the round-trip gap be measured, not assumed zero.

---

## 6. Canonical usage check and retraction/confirmation log

Read after the first five sections: `FRAMEWORK/reference/FIGURES_README_canonical.md`. It says the quotes are the authority, that a reading making figures contradict one another has misidentified its domain, and that the framework returns *"what a missing thing would have to look like (a shape, not a name)"*. It also says *"Indiscernibility is not identity."*

| earlier reading in this run | status after the canonical check |
|---|---|
| "The five systems are five domains" | **Retracted.** A domain needs its own anchor (Fig 2 :29); the five share a service anchor and a coupling habitat. They are slots in one domain (Fig 13 :34). |
| "Fig 3 means power is upstream of everything, so harden power first" | **Retracted.** Fig 3 :20 says the chain is ordered by dependency, not importance, and :19 says optimising a working link cannot rescue a broken one. The dependency chain here is perception to vocabulary to objective, not a sector hierarchy. |
| "Fig 13 lets us derive the infrastructure composition (network = grid)" | **Retracted.** Network is a held atom, but binding it to "the grid" is an import with no source gate (Fig 6 :23). The canonical rule forbids naming where the framework returns a shape. |
| "Model agreement is corroboration" | **Retracted.** Fig 7 :13 and Fig 2 :40 make agreement inside one evidence pool a single witness. World sources that share the same review pool are one witness too. |
| "A gap means the question is unanswerable" | **Retracted.** Fig 8 :39: a search finding nothing is no proof of absence. It is unreachable here, not underivable in principle. |
| F1 per-slot residual | **Canonically confirmed.** Fig 1 :19 and :22 are primary text. |
| F7 gap verdict | **Canonically confirmed.** Fig 13 :134 and Fig 8 :39, plus the README's shape-not-a-name limit. |
| Apparent strain: Fig 11 "habitat" versus D4 "frame" | **Not strained after re-census.** Fig 11 governs where actors come from; Fig 1 governs what may count as a verdict. Different objects. |
| Live strain: `⋛` operand type at sector level | **Named, not hidden.** Operators table :48 restricts it to two quantities; whether service losses are quantities at that level needs an instrument. |

### Round-trip note

Condensing the figures to "keep slots separate, enumerate contact, use the ground" and then applying it back to a concrete city loses three constraints: the ordered bond types, the union/bundling rule, and the three distinct step-7 questions. That loss is `R_T`, the round-trip gap of Symbols table :75-78. It is recorded, not assumed zero.

---

## 7. Verdict summary

The figures govern the **shape** of a checkable answer and refuse the aggregated-verdict option. They do not govern the forecast. Verdict per domain, never averaged: D1 `general` shape, anchor measured climate; D2 `general` per-slot rule, five slots, no aggregate; D3 `general` enumeration and cascade rule, single-source figure plus two low-overlap world witnesses; D4 dissolved as a frame; the forecast `gap`. Mode overall: `specified` on structure, `general` on rules, `gap` on the empirical claim. Nothing grounded. Pre-registered refuter at section 4 stands until an instrument fires it.
