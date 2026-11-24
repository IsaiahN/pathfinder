# Figure-grounded audit: when does privatizing or contracting public functions improve performance, and when does it weaken accountability?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured and what would count against it. Per `THE_FORMULA.md` mode rule: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status: a simulated derivation, not a ground reading.** From *The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No service outcome, contract record or accountability hearing was measured here. See `05_what_shape_means.md` §6.

**Primary sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text, cited as `Fig N :line`), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`. World sources are secondary and listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

A public function currently fails to meet its ground: a service outcome that citizens actually receive. Someone proposes to change who performs it (public agency to contractor) or how it is procured (in-house to contract). Two predicates are then asserted about the same change:

- **P (performance):** the change makes the function contact the ground better.
- **A (accountability):** the change makes failures less attributable and less correctable.

The question asks when P holds and when A is weakened. The temptation is to trade them off and report a net effect. That trade is the first thing the figures forbid, and the reason is structural rather than rhetorical: P and A have different anchors. P is answered by the service outcome. A is answered by whether that outcome stays reachable for correction. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." A single "net" score over P and A is exactly that aggregation.

State the sought-for shape as an ordinary term before running, as the formula's Direction step requires: an answer would be a pair of conditions, one for P and one for A, each with its own ground, each with a stated falsifier, with no averaging between them.

---

## 1. Domain census (done before choosing any figure line)

State R by arity, symmetry and scale, then one line per domain with actors, currency and anchor. A domain with no nameable anchor is not a domain yet.

**R (arity / symmetry / scale).** Arity: two predicates over one intervention, so this is a **compound**, not one hard question. Fig 9 :57-58: "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound." The two conditions share the same service but not the same anchor, so the correct operation is **split**, then solve each with its own loop. Symmetry: the intervention is asymmetric. Fig 11 :61: "The seat's power is asymmetric. Introduction is available; exclusion is not." A private incentive can be introduced; the public cannot subtract the habitat or the obligation. Scale: first order inside the service (provider to outcome), second order at the oversight layer (measurer to measurement). The two orders must not be read as one.

| domain | actors | currency | anchor (nameable?) | partition / union | dependency |
|---|---|---|---|---|---|
| **D1 Performance (capability / contact)** | the function, the provider (public or contractor), the users, the service outcome | contact with the ground; a method that can be reapplied | **yes:** the service outcome itself. Fig 1 :23: "The ground enters as the only metric." Fig 2 :29 names "a measurement, an experiment, a counter, a market, a patient outcome" as possible anchors | partition boundary: which change alters contact, which only relabels the actor | upstream: a change in contact must be established before a performance verdict is possible |
| **D2 Accountability (ground reachability)** | the public principal, the contractor, oversight bodies, the metric, the users | whether the ground stays reachable for correction; per-slot residuals that remain visible | **yes:** the ground, which must not update. Fig 10 :24: "the ground does not decay, the channel does" | partition boundary: which changes keep the channel intact, which let a convention decide the outcome | downstream of D1 in time but independent in verdict; it is not derived from D1 |
| **D3 Mechanism (the contracting change itself)** | contract designer, procurement officer, monitor, supplier | introduction of an actor into an existing habitat | **no independent anchor:** it is settled only by D1's outcome and D2's reachability | this is not a third domain. It is an overlap/compound, and by the census rule it gets its own loop inside the two domains, not a third averaged verdict | feeds both D1 and D2 |

D3 has no nameable anchor of its own, so it is not admitted as a domain. This matters: the common error is to treat "contracting" as a lever with a single effect. The census says the lever acts on two different anchors and must be looped twice.

Order by dependency (Fig 3 chain rule): establish whether contact changed (D1); keep the ground reachable while judging it (D2); only then attribute a differential outcome to the mechanism (D3 inside each). Effort spent on the mechanism before the anchors are fixed lands at a step that cannot use it. Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."

Strain test applied before any verdict: a line that only fits D1 by forcing it is reassigned to D2 and the census is rerun. Two strains surfaced and are named below, not smoothed (see §6).

---

## 2. Figure census (which figures bear, and on what)

| figure | bearing | which domain | verdict it can support |
|---|---|---|---|
| **1 The Agent** | per-slot residual; ground is the only metric; frame-internal scores disqualified | D1, D2 | aggregate cost savings are not a performance verdict; per-user residuals must stay visible |
| **2 The Ground** | anchor must not update; independence; market can be an anchor only if it does not move when pushed | D1, D2 | a contractor's self-reported metric is not an anchor; a user fee that tracks satisfaction can be |
| **3 Dependency Chain** | status per link; a reading below the break reads nothing | ordering | settle contact before attributing effect to the change |
| **4 The Membrane** | only methods cross up, head starts come down; round-trip gap | D1 | a management technique copied out of a private frame is a method only if it is re-applicable, not a recording |
| **5 Mint Pipeline** | three guards as a product; settle then compose | D1 | a new provider is not a new term unless it adds capability the closure lacked |
| **6 Closure / Reachability** | import is the only operator that moves the wall; source gate and shadow test | D1 | private participation helps when it imports a method the public closure lacked, not when it renames the same method |
| **7 Room Chain** | selection between rooms is where the ground votes; next room must differ and match the residual | D1, D2 | competition and benchmarking are the mechanism that can make contracting change contact; a sole provider is one long room |
| **8 Union Surplus** | two frames reach what neither alone reaches; provenance separates convergent derivation from adopted import | D1, D2 | public and private frames have surplus only if their closures differ and overlap is low |
| **9 Leave / Arrive** | split a compound; filters for budget, witnesses for verdict; describe before looking | both, and the method | refuse the net verdict; a venue is a filter, never a witness |
| **10 Ground Maintainer** | keep the anchor reachable; the channel decays; a convention that decides an outcome stops being a convention | D2 | the central accountability finding |
| **11 The Habitat** | capability is agent-and-habitat; isolation substitutes a habitat with two silent failure modes; valence is relative to the residual | D1, D2 | ownership change alone does not change capability; the decisive figure for this question |
| **12 The Bond** | catalyst (a part that survives its own use); goal is a comparison | D2 | accountability institutions must survive use; a target can stop being a measurement and become the outcome |
| **13 Minimum Viable Set** | independence: six members that overlap would be fewer names | D1, D2 | low overlap between the public and private frames is required for their comparison to mean anything |
| **Operators table** | comparison ⋛ is a threshold relation between two quantities | D2 | a performance target is a comparison, not a substitute for the ground |
| **Symbols table** | R is the aim and is always a slice; the ground is the anchor, not in the library | both | what cannot be perceived in the contract is residual and cannot be read from it |

---

## 3. Findings

Each finding states its mode, its figure line verbatim, and a refuter. Verdicts are kept per domain and are never averaged.

### F1: The actor swap is not the capability change (D1, decisive, `specified`)

Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone."

Fig 11 :40: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."

Privatization is an actor swap. If the method, the habitat and the contact with the outcome are unchanged, the figure predicts no capability gain. The claim "private is more efficient because private" is a `general`-mode verdict with no ground reading, and is refused. What can change contact is a method the old closure could not reach: Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Fig 6 :21: "MINT composes inside the closure and can never add an atom."

This is also the figure's own most falsifiable claim. Fig 11 :71-72: "an agent-only improvement that moved the ground would refute the capability claim." The figures explicitly say this claim "have not been tested forward, so they can still come back wrong." Honest status: `specified`, candidate, potentially refuted by a controlled ground reading.

**Refuter:** a controlled comparison in which the actor label changes while method, habitat and contact are held fixed, and the service outcome reliably moves. If that holds, F1 falls.

### F2: Performance improves through selection between rooms, not through ownership alone (D1, `specified`, triangulated)

Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

Fig 7 :36: "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."

The mechanism that can make contracting change contact is **contestability**: more than one provider, low overlap between them, and selection against the residual the last one surfaced. A single incumbent under a cost-plus contract is one long room; motion, no progress. Fig 7 :12: "same closure, handed along; agreement compounds, evidence does not."

Independence is required for the comparison to mean anything. Fig 2 :31-32: independence is "how little they draw on the same evidence"; "Independence is what makes agreement mean something." Fig 13 :39: "Six members that overlapped would be fewer members wearing six names." Two providers using the same methods and the same self-reported data are one provider wearing two names.

**Triangulated** across Fig 7 (selection between rooms) and Fig 2 plus Fig 13 (independence), which are low-overlap routes. Refuter: a case where a single, uncontested provider under a properly specified contract reliably improves the outcome without any selection pressure, sustained across repeated rounds.

### F3: An anchor is not whatever the contractor reports (D1 and D2, `general` on the definition)

Fig 2 :29-30: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."

A market and a patient outcome are explicitly allowed as anchors, but only on the condition in the last sentence. A contractor's self-reported performance figure changes when the contractor is pushed on it, so it is a frame, not an anchor. A user fee that makes revenue depend on user satisfaction is closer to an anchor because the users' judgement does not update on the contractor's claims.

**Refuter:** show a contractor metric that does not move when the contractor is pressured or rewarded, and that independently tracks the service outcome. Then it qualifies as an anchor.

**Retraction recorded here:** an earlier draft of this audit read the mention of "a market" in Fig 2 :29 as a blanket endorsement of market mechanisms as anchors. That reading is retracted. The condition "If it moves when you push on it, it is not an anchor" governs the whole list, not just the following clauses. The correction is visible here rather than silently applied.

### F4: Accountability is the seat that keeps the ground reachable (D2, decisive, `specified`)

Fig 10 :24: "the ground does not decay, the channel does."

Fig 10 :27-28: "the output is not a verdict, it is you have lost touch."

Fig 10 :29: "→ keep the anchor reachable."

Contracting lengthens the channel between the public principal and the service outcome. A longer channel has more places to decay: stale reports, dropped transients, saturated metrics, pooled readings (Fig 10 :25-26). The world literature says the same thing in different words: contracting out makes accountability chains much longer, and market sanctions often cannot be applied because the principal lacks the capacity to enforce them (Blomqvist and Winblad, 2020/2022; Mulgan, 1997, in `10_source_ledger.csv`). World sources corroborate; they do not decide. The verdict comes from Fig 10.

**Refuter:** a contracting arrangement in which the ground remains reachable in the figure's sense, shown by a case where a failure at any single slot is still detectable and correctable within a stated time, with the metric unable to absorb the failure.

### F5: A target can stop being a measurement (D2, `specified`, triangulated)

Fig 10 :47: "a convention that decides an outcome has stopped being one."

Fig 10 :49: "Declaring a meaning does not ground it."

Operators table :52: "a goal is a comparison, which is why a vocabulary without it cannot state one."

A performance target is a comparison. It becomes a liability when hitting the number replaces contacting the outcome: the convention now decides the outcome, so it is no longer a convention reporting it, and the ground goes unreachable while the dashboard stays green. Fig 12 :119 names the institution that avoids this: "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is." An accountability body that is spent by its first use and one that regenerates look identical in the contract; nothing in the instrument records which it is.

**Triangulated** across Fig 10 (convention that decides an outcome) and Fig 12 (catalyst), low overlap. Refuter: an audited case where a numeric target was attained and the underlying outcome independently improved, with no substitution of target for ground, repeated across providers and years.

### F6: Isolation has two silent failure modes (D2, `specified`, triangulated)

Fig 11 :66: "Isolation is not removal of the habitat. It is substitution of one habitat for another."

Fig 11 :67: "Move the residual and you must reproduce everything its goal required, and you inherit the new habitat's actors, which you did not choose."

Fig 11 :68: "what you failed to reproduce is invisible until the goal fails."

Fig 11 :69: "what you unintentionally introduced is invisible until it acts."

Outsourcing moves the function into a substituted habitat. The accountability mechanisms that were part of the old habitat (open records, complaint routes, appeal, equal-treatment duties) are not removed by the contract; they fail to be reproduced, and the failure is invisible until the goal fails. Simultaneously, the new habitat brings actors the public did not choose, whose effects are invisible until they act. Fig 11 :70: "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." A clean pilot contract proves the paperwork, not the capability.

**Triangulated** across Fig 11 (isolation) and Fig 10 (channel decay). Refuter: a substitution in which all goal-required accountability conditions are explicitly enumerated and reproduced, and all introduced actors are enumerated, with both lists checked against the ground after the move.

### F7: Valence is relative to the residual, not carried by the actor (both, `general`)

Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries."

Fig 11 :48: "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."

Profit motive is not a benefactor or a malfactor in itself. It is a benefactor relative to a residual of low throughput where effort is observable, and a malfactor relative to a residual of quality shading where effort is not observable. Fig 11 :52-53: "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out." The private incentive's first-order effect on cost can be real while the third-order effect on service quality is the one that matters. Any verdict that attaches a fixed sign to "private" has skipped the census.

**Refuter:** a case where the same provider type is a benefactor to one residual and a malfactor to another under identical incentives, shown by two independent ground readings. If no such case exists, the valence claim is weakened.

### F8: What actually survives, with modes attached

| claim | domain | mode | figure |
|---|---|---|---|
| Changing the actor alone does not establish a capability change | D1 | `general` (structural) | Fig 11 :39-40 |
| Contestability with low overlap can change contact; a sole provider cannot | D1 | `specified` (falsifiable) | Fig 7 :35-36; Fig 2 :31-32; Fig 13 :39 |
| A self-reported metric is not an anchor; an outcome that does not move when pushed can be | D1, D2 | `general` | Fig 2 :29-30 |
| Contracting weakens accountability when the channel decays or a convention decides the outcome | D2 | `specified` | Fig 10 :24, :47 |
| Outsourcing substitutes a habitat, with two silent failure modes | D2 | `specified` | Fig 11 :66-69 |
| A merged net verdict over performance and accountability is not admissible | method | `general` | Fig 9 :57-58; Fig 1 :19, :22 |
| The exact distributional weighting between cost and access, and the legal question of which duties may be delegated at all | neither | `gap` | no figure line governs; see §4 |

### F9: Where the figures run out (honest `gap`)

Two sub-questions get no figure line after a genuine re-census.

1. **The distributional weight.** How much cost saving counts against how much loss of access for the worst-off user. The figures say to keep residuals per slot and never aggregate, but they do not supply a social welfare function. This is a value choice, not a derivation. Mark `gap`, not silence: "Unreachable is a verdict, not a silence."
2. **Delegability of a duty.** Which public duties can legally or constitutionally be contracted at all. The figures say the seat's power is asymmetric and that the ground does not consult you (Fig 11 :61), but they do not enumerate a legal competence. That enumeration is read off a jurisdiction's law, which is a different frame with its own ground. Mark `gap`.

Neither gap is filled by agreement among experts. Fig 9 :44: "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."

### F10: Filters are not witnesses

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

Journal venues, conferences and submission portals in `03_public_contact_points.csv` are filters for where to try a claim. They decide nothing about whether it is true. Fig 2 :42: "Buy independence in proportion to the cost of being wrong." The cost of being wrong about a public service is high, so independent frames are worth buying, but their agreement is worth nothing if they share an evidence pool (Fig 2 :40). This is why the outreach artifacts lead with the residual and its refuter and never ask for endorsement.

---

## 4. Pre-registered refuter

Written before the conclusion, per the formula's Direction step and the rule that a falsifier written before the run is a design instrument. The pair-of-conditions verdict is refuted if any of the following holds:

1. **Against F1 and the capability claim:** a controlled comparison in which provider identity changes while method, habitat and contact are held fixed reliably moves the service outcome. Fig 11 :72 already names this as the refuter of the capability claim; we adopt it rather than invent a softer one.
2. **Against F4 and F5:** a contracting arrangement is shown in which every per-slot failure remains detectable and correctable within a stated time, and the reported metric demonstrably cannot absorb the failure, sustained across providers and years.
3. **Against F2:** a single uncontested provider, with no selection between rooms, reliably improves the outcome across repeated rounds.
4. **Against the split itself:** a single scalar is produced that predicts both the service outcome and the correctability of failures, and that survives out-of-sample testing on both anchors. Then the two domains were one after all and the refusal to average was wrong.

If any fires, the corresponding finding is withdrawn and the affected domain is re-censused. Until one is run, no part of this is labelled `grounded`.

---

## 5. Recommendation

1. Refuse the net verdict. Present two conditions with two anchors and two falsifiers (F8, F9).
2. Decide on D1 by asking what changed in contact, not what changed in ownership (F1, F2).
3. Decide on D2 by asking whether the ground is still reachable, per slot, after the channel lengthens (F4 to F6).
4. Treat contestability and low overlap as the operative design variable, and the metric as a possible failure mode rather than a proof (F2, F5).
5. Name the two gaps as gaps. Do not let a value choice or a legal question borrow authority from a figure (F9).
6. Use public submission venues as filters for budget only. Lead with the residual and the refuter, and record the checker's verdict before showing any theory (F10).

---

## 6. Canonical usage check, strains and re-census

The figures README governs the whole application: "a reading that makes one contradict another has misidentified its domain, not found a flaw." Two apparent contradictions were re-censused rather than smoothed.

**Strain 1, Fig 7 (competition) versus Fig 6 (import).** Fig 7 says selection between rooms is where the ground votes; Fig 6 says import is the only operator that moves the wall. Are these two different answers to the same question? Re-census: Fig 7 governs the selection of an existing provider against a residual; Fig 6 governs the arrival of a capability the current closure cannot compose. Different objects. A contest among providers who all use the same method is Fig 7 without Fig 6 (motion, no new wall); a genuinely new method is Fig 6 without a contest. Both are needed and neither overrules the other. Not strained after re-census.

**Strain 2, Fig 2 (market as anchor) versus Fig 10 (a convention that decides an outcome stops being one).** Fig 2 lists "a market" as a possible anchor; Fig 10 warns that a convention which decides an outcome has stopped being a convention. Re-census: they govern different quantities. Fig 2's market is an anchor only when it does not update on what frames think; Fig 10's convention is a measurement only when it does not decide what the outcome is. A user-fee mechanism can be the first and still fail the second if the provider can manipulate demand. Both conditions must hold. The apparent contradiction is a compound of two requirements, not a conflict. Not strained after re-census, but the second condition is recorded as a live design constraint.

**Open item, honestly held.** Fig 11 :71-72 says the capability claim "have not been tested forward, so they can still come back wrong." Our verdict inherits that exposure. It is `specified` and candidate. Agreement with the world literature (which mostly observes the same asymmetry from a different frame) is weak corroboration, not a second witness, because the two bodies of work do not share a citation pool with the figures but do share a broad institutional-economics tradition. Overlap is declared per source in `10_source_ledger.csv`.

### Retraction and confirmation log

| earlier reading | status after canonical check and re-census |
|---|---|
| "Private provision is more efficient" as a general verdict | **Refused.** A `general` mode verdict with no measurement. Narrowed to F1: contact must change. |
| "A market is an anchor" (from Fig 2 :29) | **Retracted as stated.** Fig 2 :30 makes non-updating a condition of the whole list. Narrowed to F3. |
| "Contracting always weakens accountability" | **Narrowed.** Holds when the channel decays or a convention decides the outcome (F4, F5). Arrangements that keep the ground reachable are not pre-refuted. |
| "This is one question about a trade-off" | **Refused.** Compound with two anchors; split per Fig 9 :57-58. |
| Fig 7 versus Fig 6 competition/import | **Re-censused, not strained.** Different objects. |
| Fig 2 market versus Fig 10 convention | **Re-censused, not strained.** Two conditions on the same instrument. |
| Fig 11 capability claim | **Confirmed but exposed.** `specified`, potentially refuted by Fig 11 :72's own refuter. |
| F9 distributional and legal questions | **Confirmed `gap`.** No figure line governs; recorded as verdict, not silence. |

### Verdict of this audit

The pair-of-conditions shape survives. D1: performance follows contact, not ownership; contestability with low overlap is the operative mechanism; a self-reported metric is not an anchor. D2: accountability weakens when the channel decays, a target decides the outcome, or the habitat substitution fails to reproduce goal-required conditions; per-slot residuals must remain visible. The two verdicts are kept separate and are never averaged. Two sub-questions are `gap`. Strains after re-census: none hidden; two dissolved by separating the objects they govern, one live exposure inherited from Fig 11. All substantive claims are `specified` or `general`, none `grounded`, and the whole derivation is a simulation checked for internal consistency against the figures.
