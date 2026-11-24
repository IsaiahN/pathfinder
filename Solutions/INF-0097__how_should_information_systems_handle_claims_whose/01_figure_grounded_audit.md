# Figure-grounded audit: how an information system should handle an unsettled claim

**Mode of this document: `general` on the shape, `specified` on the three-domain mapping, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, plus the world sources actually opened and listed in `10_source_ledger.csv`.

---

## 0. The question under audit, in effect terms

> How should information systems handle claims whose truth is uncertain, contested, or dependent on future events?

The system holds claim C in slot s. Its library Γ issues a prediction Γ(b,a); the ground returns an observation o′; the residual R_s = |Γ(b,a) - o′| is the quantity that drives every step (Symbols table :38). For an unsettled claim R_s does not close. The question asks for the operation the system should perform while R_s is live.

The first move is not to choose an operation. It is to describe R before choosing a frame (Fig 9 :27-28) and to ask whether this is one fact or several (Fig 9 :4-5).

---

## 1. The residual by arity, symmetry and scale

- **Arity.** The question names three conditions, not one. R is a **three-place union compound**, not a single hard question: Fig 9 :4 says disagreements that do not shrink with effort, with each rule working on a different subset, "are not one hard question but several well-formed ones"; Fig 9 :57 adds *"a case in two conditions is not a harder case of either."*
- **Symmetry.** The three conditions are not interchangeable. Uncertainty is a support failure, contest is a frame-agreement failure, and future-dependence is an arrival failure. Ordering matters: refusal before mint (Formula step 2), settlement before composition (Fig 12 :104), describe before look up (Fig 8 :53). The bond between the conditions is ordered, not symmetric.
- **Scale.** R is per claim slot (Fig 1 :19). It compounds upward to a corpus of claims and downward to one source's percept; the transform between is lossy (Fig 4 :27-30). An aggregate aggregate truthfulness score for the whole corpus is a different quantity and is frame-internal (Fig 1 :25-27).

Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* This is the governing move for this question.

---

## 2. Domain census

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Uncertain claim, single slot | claim C, library Γ, observer instrument | per-slot residual R_s, support | the measurement or record that settles this slot | admitted |
| D2 Contested claim, multiple frames | frames/sources, claim, ground | agreement, correlation, residual | the ground, never the vote | admitted |
| D3 Future-dependent claim, time channel | claim, future event, current percepts, channel | contact over time | the event when it arrives | admitted |
| D4 The system itself | operators mint/refuse/import, record Γ, habitat | bits for description, actions for settlement | ground contact, maintained by a seat | admitted |
| X1 Truth as internal consensus score | the system's own tally | agreement it produces itself | none nameable; it updates on frames (Fig 2 :25) | not a domain yet |
| X2 Prestige or engagement as evidence | authors, popularity signals | accrued credibility | none nameable; frame-internal (Fig 1 :26-27) | not a domain yet |

**Partition or union.** D1 and D4 form a compound (one slot inside a designing system). D2 and D3 form a compound (agreement about an event that has not arrived). The whole is a **union**, not a partition: the three named conditions overlap in real claims (a claim can be contested *and* future-dependent), and a single lever clears only the region where one condition holds (Fig 9 :55-58).

**Order by dependency (Fig 3).** perceive the per-slot residual, have terms for refuse/pending/anchor, say what counts as settlement, route the claim to a ground, record provenance and carry. Fig 3 :25-27: the middle link, having terms for what a situation affords and being able to say what would count as progress, has neither obvious failures nor obvious instruments, so it attracts the least attention. An information system that has terms for "true", "false" and "engagement" but no term for "refused", "pending" or "lost contact" is broken at the middle link. *"A link with no instrument is not a link that works. It is a link nobody has looked at."* (Fig 3 :27)

---

## 3. Figure census

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | residual per slot; frame-internal quantities disqualified | no single truth score; keep R_s |
| 2 The Ground | anchor must not update; correlation has valence | classify world-claim vs convention before using agreement |
| 3 Dependency Chain | middle link usually breaks | vocabulary for refusal/pending is the missing link |
| 4 The Membrane | lossy transform across scales | corpus-level "reliability" is not a sum of slots |
| 5 Mint Pipeline | refuted is a fifth gap; make the sought shape an ordinary term | a refusal is owed; bind the shape before the run |
| 6 Closure / Reachability | record grows, reach can fall; open contradiction | a refutation is added, not a deletion; hold conflict visibly |
| 7 Room Chain | agreement compounds, evidence does not | passing a claim along agreeing channels adds nothing |
| 8 Union Surplus | residual first, frame second; provenance separates convergence from import | describe the gap before choosing the checker |
| 9 Leave / Arrive | split a union; filters are not witnesses | split the three conditions; stop is a verdict |
| 10 Ground Maintainer | ground does not decay, channel does; declare stakes | report lost contact, not a verdict |
| 11 The Habitat | capability is agent-and-habitat; valence relative to residual | source reliability is claim-relative, not a standing list |
| 12 The Bond | negation is a unary operator, not a bond | a system that only accumulates cannot carry a refusal |
| 13 Minimum Viable Set | unreachable is a verdict; you get a kind of thing | name of the best algorithm is a gap, not a hidden answer |
| Operators table | ¬ refuses a claim; − removes an operand | refusal and absence are different states |
| Symbols table | R is always a slice; ground is the anchor | what cannot be perceived yet is residual, not zero |

Strained readings are named as such below, not smoothed over.

---

## 4. Findings

### F1 - Keep the residual per claim, never average it (decisive for D1)

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**

A corpus-level "this source is 87 percent reliable" collapses live claim slots into one number. Fig 1 :23-27 disqualifies the usual substitutes: *"coverage, and compression achieved"* and *"predicates minted, and credibility accrued... are frame-internal. A frame cannot score itself with a quantity it also produces."*

**Refuter:** show that a single aggregate reliability score preserves the per-claim signal that locates a live failure, under a documented change of one slot. Mode `general`.

### F2 - The ground decides; agreement has valence (decisive for D2)

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."**
Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**
Fig 2 :40: **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"**
Fig 2 :41: **"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"**

These two lines are not in conflict. They govern different question types. A contested claim about the world needs independent frames ranged against an anchor. A contested claim about meaning or convention *is* made by agreement. The system must classify which it has before it uses consensus. Otherwise it either treats a convention as a discovery or treats a shared evidence pool as two witnesses.

Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."** Fig 2 :34 warns what happens when the anchor updates on frames: *"everything drifts together, and the drift is coherent, which is why nobody notices."* A system whose "truth" is the moving consensus is in that collapse.

**Refuter:** a case where a claim about the world is settled by shared-pool agreement with no anchor, and the settlement survives a documented change of the pool. Mode `specified`.

### F3 - Refusal is a first-class state, not absence (decisive for D4)

Operators table :58: **"a refutation is a negation, which is why a vocabulary without it can only accumulate"**
Fig 5 :53: **"refuted: a term we hold is wrong; a term is owed that says so"**
Fig 5 :55: **"What it removes is not a term but a term's standing to be composed over."**

An information system whose only states are "stored" and "not stored" cannot carry a correction. It can only accumulate. The subtraction operator does not help: Operators table :46 says *"progress is a subtraction, which is why a vocabulary without it cannot say how far along it is"*, and the amendment in Fig 12 :135-136 distinguishes subtraction (absence of an operand) from negation (refusal of a claim). They are different states and need different slots.

**Refuter:** a system with no negation operator that nonetheless carries a refutation as a first-class, non-deletable state and composes over it correctly. Mode `general`.

### F4 - A recorded refusal lowers reach without deleting anything (D4)

Fig 6 :42: **"What is recorded only grows. What is reachable is derived, and it can fall."**
Fig 6 :47: **"Open. If a term and its refusal are both settled, the record holds a contradiction. Whether that is two scopes, an error in the ground, or a world that changed is not yet decidable here."**

This is the framework's own open item and it bears directly on contested claims. A system must keep both a claim and its refusal in the record, and accept that what may be built on them shrinks. It must not silently pick one when both are settled; the correct report is that the record holds a contradiction of undecidable kind. This is a live strain, recorded, not resolved by fiat.

**Refuter:** a system that deletes the refused term and shows the resulting reach is identical, including all terms that were built on it. Mode `general`.

### F5 - The channel decays, the ground does not (decisive for D3)

Fig 10 :24: **"the ground does not decay, the channel does"**
Fig 10 :25-26: **"stale percepts, dropped transients,"** and **"saturated metrics, pooled readings"**
Fig 10 :27-28: **"the output is not a verdict, it is you have lost touch"**

For a future-dependent claim the failure is not that truth changed. It is that the channel carrying the observation went stale. The correct output is a loss-of-contact report, not a guessed truth value. Fig 10 :29: *"→ keep the anchor reachable."*

**Refuter:** a case where the ground event changed its answer because a frame revised it, with the revision surviving an independent check. Mode `specified`.

### F6 - Unreached is a verdict, not silence (D1, D3)

Fig 13 :134: **"Unreachable is a verdict here, not a silence,"**
Fig 8 :39: **"So a search that finds nothing is never a proof of absence."**
Fig 9 :32: **"you get a kind of thing, never the answer itself"**

An information system must be able to say "no settlement available at this budget" and record it. Browsing more sources inside the same closed pool does not manufacture the missing atom (Fig 6 :21: **"MINT composes inside the closure and can never add an atom."**). The honest output is a shape plus the name of the instrument that would close it, in effect terms.

**Refuter:** a closed pool that, by exhaustive internal search alone, settles a claim whose anchor has not returned. Mode `general`.

### F7 - Split before you search (D2, D3)

Fig 9 :4: **"First: is there a fact here? Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."**
Fig 9 :57: **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."**

"Uncertain, contested, future-dependent" is a bundled question. A single lever, for example more aggregation or more sources, clears the region where only one condition holds and leaves the intersections standing. The residue is categorically different: a claim that is contested *and* future-dependent is not a harder uncertain claim. It is a compound with its own loop.

**Refuter:** one intervention that settles all three conditions with no categorically different residue. Mode `general`.

### F8 - Describe the claim's gap before you choose the checker (all domains)

Fig 8 :53: **"Residual first, frame second."**
Fig 9 :27-28: **"describe it before you go looking, or any frame you pick will seem to fit"**
Fig 9 :30-31: **"your words are borrowed too, so describe the effect rather than the cause"**

Routing a claim to a preferred checker before describing why its residual is live selects a friend, not an anchor. Fig 10 :74: *"the residual selects the members, but only from what is available. A candidate set chosen by a participant is an authored room however well the selection is reasoned."*

**Refuter:** a checker chosen from popularity or prior agreement whose disagreement is later shown to be independent of that choice. Mode `specified`.

### F9 - Source reliability is relative to the claim, not a standing list (D4)

Fig 11 :49: **"An actor's valence is relative to the residual, not a property it carries."**
Fig 11 :51: **"No standing list of good actors survives a change of residual."**
Fig 11 :70: **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."**

A whitelist of "trusted sources" is a standing list of good actors. It fails when the residual changes. A system's ability to handle contested claims is a property of system-and-habitat, not of the algorithm alone: Fig 11 :40, *"An improvement that does not change contact changes nothing, however much it improves."* A benchmark with clean labels proves wiring, not capability on real contested claims.

**Refuter:** an invariant source-trust ranking that remains predictive across documented changes in the claim and the habitat. Mode `specified`.

### F10 - Filters are for the budget, witnesses are for the verdict (D2, D4)

Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**
Fig 7 :13: **"agreement compounds, evidence does not"**

Engagement, recency, authority and prestige decide how much attention a claim gets. They are filters. None of them settles the claim. Fig 7 :35: **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."**

**Refuter:** a relevance filter that also functions as a ground-verified witness without changing what it filters. Mode `general`.

### F11 - Stakes must be declared (D4)

Fig 10 :59: **"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."**
Fig 10 :65: **"Provenance shows a ruling was reached legitimately. It never shows it was right: the ground does that, and a wrong ruling stays wrong however clean its record."**

A system that grades claims through a seat with a stake in a particular answer has a corrupt channel even with a perfect audit trail. The record makes the error locatable, not right.

**Refuter:** a verifier with a declared stake in the outcome whose readings remain ground-invariant across a change of that stake. Mode `specified`.

### F12 - What survives, with mode attached

| claim | mode | figure |
|---|---|---|
| Keep the residual per claim slot; no aggregate score can replace it | `general` | Fig 1 :19, :22 |
| Classify world-claim versus convention before using agreement | `specified` | Fig 2 :40, :41 |
| Carrying a refusal requires a negation operator; accumulation is not correction | `general` | Operators :58, Fig 5 :53 |
| Report lost contact rather than a truth value when the channel decays | `specified` | Fig 10 :24-28 |
| Unreached is a verdict; the shape and the missing instrument are reportable | `general` | Fig 13 :134, Fig 8 :39 |
| Source reliability is claim-relative; there is no standing good list | `specified` | Fig 11 :49, :51 |
| Which specific algorithm best implements this is not determined by the figures | `gap` | Fig 9 :32 |

---

## 5. Pre-registered refuter

Required before any outreach: a falsifier written before the run is a design instrument.

The shape claim is refuted if any of the following holds:

1. A single aggregate reliability score is shown to preserve the live per-slot signal under a documented change of one slot (breaks F1).
2. A claim about the world is settled by shared-pool agreement with no anchor, and the settlement survives a change of the pool (breaks F2).
3. A system with no negation operator carries a refutation as a first-class, non-deletable state and composes over it correctly (breaks F3).
4. A closed pool, by internal search alone, settles a claim whose anchor has not returned (breaks F6).
5. One intervention settles all three conditions with no categorically different residue (breaks F7).
6. An invariant source-trust ranking stays predictive across documented changes of claim and habitat (breaks F9).

If any fires, the shape is wrong in that domain and the claim is withdrawn there. Until one is run, no part of this may be labelled `grounded`.

---

## 6. Recommendation

1. Split the question before answering it (F7). Write the three conditions as separate loops, then write the intersections as compounds.
2. Store a claim slot with at least five distinct states: pending, settled, refused, lost-contact, and unreached-at-this-budget. Do not collapse them into a scalar (F1, F3, F5, F6).
3. Before using consensus, classify whether the claim is about the world or about a convention (F2). Use independent frames plus an anchor for the first; treat agreement as the product for the second, and refuse to let it decide an outcome (Fig 10 :47).
4. Keep the claim and its refusal in the record, with provenance and a date; accept that the reachable set falls (F4).
5. Evaluate a source relative to the specific residual, not from a standing whitelist; declare every stake that cannot be removed (F9, F11).
6. Do not name a single best algorithm. That is a `gap` after a genuine re-census, and Fig 13 :134 makes unreachable a verdict rather than a silence.

---

## 7. Canonical usage check

Two local files govern how the figures may be used, read after the findings above:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the canonical limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)"*, then *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest. Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: the eight-step loop, the mode rule, and the third question at step 7. SEARCHED first, then INWARD, then OUTWARD, kept distinct.

### Retractions and confirmations

| earlier finding | status after the canonical check |
|---|---|
| "information systems should just maintain a Bayesian truth posterior and update by opinion" | **Retracted.** It makes the ground a frame that updates on frames (Fig 2 :34) and treats shared-pool agreement as a verdict (Fig 2 :40). Kept visible as the rejected Option A in the README. |
| "contested is one hard problem needing better aggregation" | **Retracted.** Fig 9 :4 and :57 require a split; a case in two conditions is categorically different. |
| "a correction should delete the false claim from the index" | **Retracted.** Fig 6 :42 says the record only grows and the reach falls because something was added. Deletion would lose the distinction between never-held and given-up. |
| "agreement is always disqualifying" | **Narrowed, not retracted.** Fig 2 :41 makes agreement efficient for a convention. The rule is valence-dependent, and the two lines govern different question types. |
| "shape, not a name forbids naming any state" | **Narrowed.** The canonical phrase governs a *missing* thing. Naming a reportable state such as "lost contact" is binding an ordinary term, which Fig 5 :65 requires. Naming the best algorithm is still forbidden. |
| F10 (all ToE style finality) | **Not applicable here, but confirmed as posture.** No last room: the answer stops and records the lineage. |
| Apparent conflict Fig 2 :40 vs Fig 2 :41 | **Not strained.** Re-census: world-claim and convention are different question types. Matches the canonical re-census rule. |
| Fig 6 :47 contradiction when term and refusal are both settled | **Live open item, kept visible.** Not smoothed into a choice rule. |

### SEARCHED / INWARD / OUTWARD, kept distinct

- **SEARCHED:** is the settlement already in the claim's own slot and merely unfound? Distribute the search and keep checkers independent (Formula step 7). This is cheapest and the other two assume its answer.
- **INWARD:** is our representation adequate to hold the distinction between pending, refused and lost-contact? Sharpen in our own terms, from an instrument already returning something (Fig 6 :29).
- **OUTWARD:** does another frame already hold the missing discriminator? Characterize R in effect terms, cast the description so it travels, and find that frame (Fig 6 :30). Import has a source gate and a shadow test and is debited against independence.
- These are opposed instruments. Never read one against the other.

### Updated verdict

The shape survives: keep R per slot; classify the valence of agreement before using it; carry refusals as first-class terms; report lost contact and unreached states instead of guessing; evaluate sources relative to the residual; declare stakes. Every specific implementation claim is withheld. After re-census: **one live open item (Fig 6 :47), named, and no hidden strain.** This is `general`/`specified`, ungrounded, and a candidate only.
