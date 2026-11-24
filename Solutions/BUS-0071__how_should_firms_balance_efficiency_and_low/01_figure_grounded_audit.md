# Figure-grounded audit: BUS-0071, efficiency versus spare capacity and resilience

**Mode of this document: `specified`, not `grounded`.** The structural claims are `general`; the application to firms is `specified`. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Primary sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, cited as `Fig N :line`), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`. World sources are secondary and are opened only in `04_links_and_distribution.md`, `09_watson_answer.md` and `10_source_ledger.csv`.

---

## 0. The residual, in effect terms

`R = |Γ(b,a) − o′|` per slot (Symbols table: *"The gap between prediction and observation"*). A firm's library Γ predicts service level, cost and time to recover for each component slot. A disruption arrives, and `o′` is what actually happened. The residual is where the prediction failed, indexed by supplier, component, route and period. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

The question as asked assumes one dial, with cheap-and-lean at one end and spare-and-resilient at the other. That assumption is the first thing under audit, not an input to it. Note the shape sought, as an ordinary term before the run (Formula step "Direction"): an answer would state which conditions a configuration must satisfy, which bonds between which atoms, and what would refute it. It would **not** be a number, because no number in the framework is licensed without a ground reading.

**Anchor candidate:** the realized disruption outcome (service restored, time to recover, cost actually incurred). Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome." Internal cost reports and planner consensus are frames, not anchors: they move when the firm pushes on them.

---

## 1. Domain census (before any figure line is chosen)

**R by arity, symmetry and scale.** Arity: at least three, a configuration (atoms plus bonds), a disruption event, and an outcome; the "balance" is not a two-place sum. Symmetry: the relation between cost and recovery is ordered and comparative, not a symmetric join; adding a buffer and cutting a supplier are different directions and do not commute. Scale: the single firm loop, the supply network habitat, the multi-tier contact cascade, and the time channel between routine operation and disruption. The membrane between scales is lossy (Fig 4).

One line per domain, with actors, currency and an anchor. A candidate with no nameable anchor is not yet a domain.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Firm operating loop | planners, routines, Γ, capacity policy | actions, unit cost, per-slot residual | realized service level and realized cost | admitted |
| D2 Supply network habitat | tier-1 to tier-n suppliers, logistics, customers, regulators | survival, fill rate, time to recover | customer payment and the actual disruption outcome | admitted |
| D3 Disruption channel | near misses, tier-k deviations, stress tests, real events | contact, bracket fidelity | the ground, which does not decay | admitted |
| D4 Reach / capability library | atoms (sources, buffers, routes, contracts) and bonds (single, dual, buffered, regional) | reach, `|φ|` | settlement against a disruption | admitted |
| X1 "the optimal cost-versus-resilience point" | none nameable | none | none | **not a domain yet**. A preference, not a term (Fig 5 :61-64; it predicts nothing and accrues no residual) |
| X2 "risk" as one probability-times-cost scalar | already inside D3 and D1 | aggregated expected loss | absorbed; aggregation destroys the per-slot signal (Fig 1 :22) | absorbed, not admitted as its own domain |

**Partition or union.** Union, not partition. C1 (routine efficiency, channel to a cost ground) and C2 (survival under disruption, channel to a disruption ground) overlap at the shared atoms (suppliers, capacity, routes). Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." The intersection is a specific compound with its own loop, not a harder version of either condition. D1/D2 and D3/D4 are compounds: capability is a property of agent-and-habitat, and of library-and-ground.

**Order by dependency (Fig 3).** perception (per-slot residual) to vocabulary (terms for what a disruption affords: buffer, alternate source, route) to objective (what counts as progress: time to recover, not aggregate unit cost) to planning (which bonds between which atoms) to learn and carry (settle against a real disruption, carry the method up, never the recording). Refuse the single-scalar premise before minting (Formula step 2). Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."

Strain test applied throughout: when a line fits only by forcing a mapping, it governs another quantity and the census is reopened. Two such re-censuses are recorded in §6.

---

## 2. Figure census (bearing before verdict)

| figure | verbatim bearing used | verdict |
|---|---|---|
| Fig 1 | "The residual is indexed by object slot, not aggregated." | aggregate service or cost metrics are inadmissible as the verdict signal |
| Fig 2 | "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." | the ground is realized recovery, not the plan or planner agreement |
| Fig 3 | "A link with no instrument is not a link that works. It is a link nobody has looked at." | a tier with no signal is not a tier that is safe |
| Fig 4 | "Only the actors, the currency and the anchor change." | the loop is the same at firm and network scale; the cast changes |
| Fig 5 | "the gap has real mass somewhere" | a resilience program with no live slot is inert |
| Fig 6 | "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." | efficiency search cannot mint a capability the supplier closure lacks |
| Fig 7 | "agreement compounds, evidence does not" | consensus across planning rooms is not a stress test |
| Fig 8 | "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." | qualifying a new source is an import, not an optimisation |
| Fig 9 | "a case in two conditions is not a harder case of either" | the balance is a union compound, to be unbundled |
| Fig 10 | "the ground does not decay, the channel does" | cost metrics saturate; near misses are dropped transients |
| Fig 11 | "An improvement that does not change contact changes nothing, however much it improves." | slack inside the firm that does not reach the disruption ground changes nothing |
| Fig 12 | "Same atoms, different bond, different substance." | JIT single-source and buffered dual-source are isomers, invisible in a cost bill |
| Fig 13 | "Unreachable is a verdict here, not a silence" | a specific buffer quantity is `gap`, not a hidden answer |
| Operators | `⋛` comparison: "is it about which is larger, rather than both being present?" | the "balance" is not `+`; do not sum the two ledgers |
| Symbols | `R` is "the gap between prediction and observation" | the aim is a per-slot residual, not a single index |

---

## 3. Findings, each with verbatim lines, mode and refuter

### F1. The balance is a union compound, not one scalar trade-off (decisive)

**Mode: `general` for the structure, `specified` for firms. Status: triangulated (Fig 9 union logic and Fig 12 two-currency rule, low overlap).**

Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :56: "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." Fig 9 :59: "not that the pile is smaller, but that the residue is finally describable."

Fig 12 :125: "A composition costs in two currencies, and they do not add." Fig 12 :130: "Summing them into one figure is the error this names, not the fix for it. A price in bits and a price in actions are two readings, held apart."

A single optimum on a cost-resilience curve is therefore a notation error, not a decision rule. Two ledgers must be kept: what the configuration costs to state and run, and what it costs to find out whether it holds under disruption. **Strain, named:** Fig 12's "bits" are not literally a firm's dollars and "actions" are not literally a recovery time. The line is used only for the keep-apart instruction, which is structural; re-census confirms it does not license a unit conversion. Reported rather than smoothed (see §6).

**Refuter:** a single scalar index that fully predicts both routine unit cost and disruption survival with no remaining per-slot residual, across firms, breaks F1. Also broken if the two readings are shown to share one evidence pool entirely, so that "held apart" is redundant.

### F2. Capability lives in the firm-and-habitat, not in the firm's slack policy

**Mode: `general`. Status: triangulated (Fig 11 capability claim and Fig 4 kernel rule: the loop is invariant, the cast changes).**

Fig 11 :39: "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone." Fig 11 :40: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves." Fig 4 :19-20: "Only the actors, the currency and the anchor change."

Adding spare capacity to the firm while leaving its supplier contact structure untouched changes the firm, not the contact. It may still be worth doing for other reasons, but it has not changed resilience as the figure defines it. This is why a "how much slack" answer is the wrong unit of analysis.

**Refuter:** a controlled habitat substitution that removes or replaces a firm's suppliers while holding its internal policy fixed, and leaves the disruption outcome unchanged, breaks F2. So does a case where an agent-only change moves the ground.

### F3. Contact cascades beyond the direct suppliers

**Mode: `specified` (the cascade law is `general`, the tier-1-to-tier-n application is `specified`). Status: single-source for the figure law; world corroboration noted separately, not counted as a second figure.**

Fig 11 :52: "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out." Fig 11 :48: "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

A tier-1 supplier map is a first-order enumeration. The residual that matters may be three steps out. The habitat is read off the world, not composed from the org chart.

**Refuter:** a documented disruption whose outcome is fully determined by tier-1 suppliers alone, with a measured zero effect at tier 2 and beyond, breaks the application. It does not break the general cascade law, which is about cases where contact does cascade.

### F4. Efficiency search inside the current closure cannot mint resilience

**Mode: `general` for closure, `specified` for sourcing. Status: triangulated (Fig 6 idempotence/import and Fig 8 where imports come from).**

Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means." Fig 6 :32: "MINT composes inside the closure and can never add an atom." Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."

To survive a disruption that the current supplier set cannot absorb, the firm needs contact with a differing closure: a qualified alternative source, another region, a different technology, a second logistics route. That is an import, with a source gate (provenance) and a shadow test (does it explain a gap). Fig 8 :50-52: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them." A column saying "dual sourced" records the ingredient; the record of how the second source was qualified and whether it was exercised is what makes it checkable.

**Refuter:** a reach to a disruption-surviving configuration renewed purely by internal optimisation, with no new atom entering the closure and no differing frame contacted, breaks F4.

### F5. Isolation is substitution, and a stress test proves wiring only

**Mode: `general`. Status: single-source (all three lines are Fig 11); world corroboration in `09_watson_answer.md` is secondary.**

Fig 11 :66: "Isolation is not removal of the habitat. It is substitution of one habitat for another." Fig 11 :67: "Move the residual and you must reproduce everything its goal required, and you inherit the new habitat’s actors, which you did not choose." Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." Fig 11 :61: "The seat’s power is asymmetric. Introduction is available; exclusion is not." Fig 11 :63: "Which is why a managed ecosystem is permanent work rather than a solved state."

Reshoring, nearshoring and "de-risking" substitute a habitat; they do not remove risk, and they import the new habitat's actors unchosen. A stress test is a substituted habitat too, so passing one demonstrates that the wiring responds, not that the firm can recover in the real habitat. A managed supply chain is permanent work, not a solved state.

**Refuter:** a stress-test pass that transfers to real-disruption capability with no residual at all, or a habitat substitution that removes the original dependency without introducing an unchosen one, breaks F5.

### F6. Same suppliers, different bond, different firm

**Mode: `specified`. Status: single-source for the figure definition (Fig 12); F1's measurement point is the low-overlap second route.**

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Fig 12 :124: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

Two firms with the same supplier list, the same inventory budget and the same components can be isomers: one bonds them single-source and just-in-time, the other bonds them dual-source with a qualified buffer. The cost bill records the atoms and hides the bond, which is exactly why a cost-minimising model cannot see the difference and why the disruption behaviour differs decisively.

**Refuter:** two configurations identical in atoms and bond record but different in disruption behaviour, or identical in both and identical in behaviour under every disruption that reaches them, breaks F6.

### F7. The anchor is realized recovery, bought independence in proportion to being wrong

**Mode: `general` for the anchor rule, `specified` for supplier diversity. Status: triangulated (Fig 2 anchor and independence are distinct low-overlap statements).**

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 2 :42: "Buy independence in proportion to the cost of being wrong." Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool."

If all suppliers, all planners and all dashboards report "no issue" from the same upstream signal, that is one frame with many names. Diversity of source is not redundant spend under this reading; it is independence, purchased at a level set by the cost of being wrong, not by the average expected loss.

**Refuter:** a case where internal agreement from a shared evidence pool correctly settled a disruption outcome without any contact with a differing frame breaks the independence claim, though not the anchor claim.

### F8. The channel decays even while the ground does not

**Mode: `general`. Status: triangulated (Fig 10 channel rule and Fig 1 per-slot rule).**

Fig 10 :24: "the ground does not decay, the channel does" Fig 10 :26: "saturated metrics, pooled readings" Fig 10 :28: "you have lost touch" Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."

An aggregate on-time-delivery percentage can stay high while one component slot is live and failing. Near misses are dropped transients. The output of a saturated metric is not a verdict; it is a report that the seat has lost touch. Keep the anchor reachable with per-slot, non-pooled readings (Fig 10 :29: "keep the anchor reachable").

**Refuter:** a case where the aggregate metric tracked the disruption outcome without saturation or pooling loss, across slots and over time, breaks F8's application.

### F9. The early-warning instrument is improved from one already returning something

**Mode: `general`. Status: single-source (Fig 6).**

Fig 6 :34: "Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there." Fig 8 :39: "So a search that finds nothing is never a proof of absence." Fig 8 :41-42: "underivable-in-principle and unreachable-at-this-budget are DIFFERENT FACTS, and they issue different instructions."

A perfect disruption sensor cannot be specified from an account of the disruption. It is built from a weaker reading already returning something: a near miss, a tier-2 delay, a quality deviation, a port congestion signal. No history of disruption is not evidence of no risk. If the needed signal has never registered anywhere, the honest report is `unreachable`, and importing more reporting inside the same frame would add an atom that was not needed if the true problem is budget, not closure.

**Refuter:** a disruption signal specified successfully from no prior reading, with no weaker instrument to extend from, breaks F9.

### F10. The specific quantity is `gap`

**Mode: `general`. Status: triangulated (Fig 9 shape limit, Fig 13 unreachable, Fig 8 search-is-not-absence).**

Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 13 :134: "Unreachable is a verdict here, not a silence" Fig 8 :39: "So a search that finds nothing is never a proof of absence." No figure line yields "hold eleven days of inventory" or "use three suppliers." What is available is the shape any answer must have (F1 to F9), a set of falsifiers, and a description in effect terms of what a missing instrument would have to do. The number stays `gap` until the ground settles it.

**Refuter:** a figure line that, after genuine re-census, directly determines a numeric buffer or supplier count would break F10. None was found; the claim is about the figure set, not about the world.

---

## 4. Pre-registered refuter (written before the conclusion)

Required by the seat rule: *"a falsifier written before the run is a design instrument, not only an honesty device."*

The shape claim is refused if any of the following holds:

1. One scalar index fully predicts routine cost and disruption survival with no per-slot residual left (breaks F1, Fig 9 :57, Fig 12 :130).
2. Changing a firm's habitat while holding its internal slack policy fixed leaves disruption outcome unchanged (breaks F2, Fig 11 :40).
3. A documented disruption has zero tier-2-and-beyond effect (breaks the F3 application, Fig 11 :52).
4. A disruption-surviving reach is renewed by internal optimisation alone, with no import from a differing closure (breaks F4, Fig 8 :32).
5. A synthetic stress test transfers to full real-habitat capability with no residual (breaks F5, Fig 11 :70).
6. Atoms and bonds being equal, behaviour under disruption is either still different (a hidden atom) or the bond record is shown to carry nothing (breaks F6, Fig 12 :117).
7. Planner agreement from a shared evidence pool settles a disruption outcome without any anchor contact (breaks F7, Fig 2 :35, :40).
8. A cost or recovery figure line is found that directly sets a numeric buffer or supplier count (breaks F10).

If any fires, the corresponding finding is withdrawn and the census is redone. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. **Refuse the one-dial framing.** Split into two loops, routine cost and disruption recovery, and keep two ledgers unsummed (F1).
2. **Change the unit of analysis.** Work on firm-and-habitat, enumerated outward through tiers, not on the firm's inventory policy alone (F2, F3).
3. **Name the bonds, not just the atoms.** Write down which supplier is bonded to which component under which failure, and keep the qualification record, because the ingredient list cannot show the isomer (F6, F4).
4. **Buy independence where the cost of being wrong is high**, with supplier and route diversity priced as independence rather than as waste (F7).
5. **Import deliberately.** With a new source or region, supply a source gate (where this came from) and a shadow test (which gap it explains). Do not claim a stress test proves capability (F4, F5).
6. **Keep the channel reachable.** Per-slot, non-aggregated near-miss and recovery signals, improved from a weaker reading already returning something (F8, F9).
7. **State the stop.** Report the shape, the falsifiers and the `gap`, and say plainly that the number is not derived. A failure from an outside reader is more useful than an endorsement (Fig 10 :52, "Bring a characterised residual, never the source").

---

## 6. Canonical usage check, strains and retraction log

Two sources were read after the first findings and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the canonical limit: the framework says *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments cannot distinguish and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are the ground for design questions; the seat reads the ground, it does not ask the maintainer for a ruling the figures already decide. Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

### Retractions and confirmations applied to my own first pass

| earlier reading | status after check |
|---|---|
| "efficiency and resilience are two currencies that do not add" as a direct business claim | **Narrowed.** Fig 12 :125-130 governs bits and actions, not dollars and slack. Re-census: its valid use here is the keep-apart instruction only. The direct union claim rests on Fig 9 :55-57. Strain recorded, not hidden. |
| "spare capacity is useless" | **Retracted.** Fig 11 :40 says an improvement that does not change contact changes nothing. It does not say the improvement has no other value. The claim is narrowed to contact-relative resilience. |
| "buy independence" read as "always dual source" | **Retracted.** Fig 2 :42 says buy in proportion to the cost of being wrong. A cheap, low-consequence component may warrant none. The verdict was a filter being mistaken for a witness (Fig 9 :60). |
| "stress tests are worthless" | **Retracted.** Fig 11 :70 says a synthetic solve proves wiring and never capability. Wiring is a real, checkable output. The claim is narrowed to the capability inference, not the test itself. |
| "supplier diversity is an import" | **Narrowed.** Adding a source already in the closure is a new bond, an isomer (Fig 12 :117). Only a source from a differing closure adds an atom (Fig 6 :32). Both moves are legitimate and different; the record must say which. |
| "no figure line governs the number" | **Canonically confirmed.** The README's shape-not-a-name limit governs a thing not held; here the missing thing is a ground-settled quantity. Fig 13 :134 makes unreachable a verdict. |
| Apparent conflict Fig 11 capability claim versus standard slack advice | **Not strained.** Re-census: the figure governs contact-relative capability; practitioner slack advice governs a cost or service objective in a fixed habitat. Different objects, so no contradiction. |

### Strain log

1. **Fig 12 bits/actions mapped to cost/recovery.** Live strain in the *mapping*, not in the figure. Kept for the keep-apart instruction only; no unit conversion is claimed.
2. **Fig 11 asymmetry ("exclusion is not available") versus actual supplier termination.** A firm can drop a supplier contract. Re-census: the figure's exclusion is removal from the habitat, which is contact and cannot be contracted away; dropping a contract is substitution, not removal (Fig 11 :66). Not a contradiction.
3. **Fig 8 import versus Fig 12 isomer.** Adding a second source inside the current closure is a bond change (isomer, no new atom); adding a never-qualified source or region is an import (new atom). Different quantities, both admitted.
4. **After re-census: two strains named in the mapping, none hidden, no figure-versus-figure contradiction.**

---

## 7. Verdict

The question's premise is refused: efficiency and resilience are not two ends of one dial. The figure-derived shape is a union of two conditions with their own loops and their own grounds. Capability lives in the firm-and-habitat, the habitat must be enumerated outward through tiers, the relevant arrangement is a bond between atoms that a cost bill cannot show, reach to a new capability requires contact with a differing closure, and the channel must be kept reachable per slot because aggregated metrics saturate. Stress tests prove wiring, not capability. The specific numeric balance is `gap`, to be settled by a disruption or a source-discriminating instrument, never by agreement. **Mode `specified`, ungrounded, candidate.** The next seat's independent re-census is in `11_audit.md`.
