# Figure-grounded audit: who should be accountable when an AI-driven business decision causes harm

**Mode of this document: `specified`, not `grounded`.** Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."* No court, regulator, board, or affected person has settled the attribution in this derivation, so nothing below is reported as settled.

**Status of this derivation: a simulation, not a ground reading.** The framework's recursion essay states that LLM output is simulacra and that *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FIGURES_README_canonical.md`, `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, all opened this session. World sources listed in `10_source_ledger.csv`.

---

## 0. The claim under audit

> When an AI-driven business decision causes harm, accountability should be assigned to the vendor, the firm, the manager, or the decision-maker.

The question is delivered as a forced choice among four named actors. This audit tests whether any of the four is the thing that settles the question, and whether the question itself is one question.

---

## 1. Residual in effect terms

The residual R is the harm H that arrived and was not predicted. In the loop's notation, R = |Γ(b,a) − o′|: Γ predicted no harm (or a smaller harm) from belief b and action a; o′ is the harm that actually occurred. Fig 1 :23: *"The ground enters as the only metric."*

- **Arity.** More than one condition is in play. The four candidates are not four values of one variable; they stand for four different relations to the harm (production of the artifact, deployment of the system, oversight of the use, authorization of the decision). Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*
- **Symmetry.** The relations are ordered and typed. Production (⇒), sequence (→), threshold (⋛) and refusal (¬) do not commute. Operators table :30: *"A then B; B needs A to have happened."* Operators table :57: *"is the point that it is false, rather than absent? Yes."* A flat list of four nouns cannot carry any of these.
- **Scale.** First order: the decision event and the actors in direct contact with it. Second order: the institution that settles the attribution. The two must not be averaged. Fig 12 :104: *"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."*

**The effect question.** Which thing, when ranged against, corrects the attribution without itself being moved by the parties? That is the anchor test, not a popularity test among the four.

---

## 2. Domain census

One line per domain with actors, currency and anchor. A domain with no nameable anchor is not yet a domain.

| domain | actors | currency | anchor | partition or union | order |
|---|---|---|---|---|---|
| **D1 Harm registration** | affected people, logs, incident reports, instruments | per-slot residuals R⁺_s | the harm as registered, per slot, by someone or something that can be wrong | partition, one slot at a time | first |
| **D2 Decision and habitat** | vendor, firm, manager, decision-maker, plus everyone else in contact with the harm and their contacts | authority, control, contact, production | the same registered harm, held fixed while actors are enumerated around it | **union** of overlapping conditions | second |
| **D3 Accountability settlement** | court, regulator, board, affected people; the four candidates appear here only as frames | verdicts, not agreement | human judgment and the institutional record, which do not update on what a frame thinks | partition boundary: anchor is not one of the parties | third |
| **D4 Verification** | outside expert readers in AI governance and accountability research | refutations | the ground, never agreement | n/a, this is the checking arrangement | last |

**Anchor test, applied.** Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :30: *"If it moves when you push on it, it is not an anchor."*

- D1 anchor: the registered harm. It does not move when the vendor denies causation. If a reading does move when pushed, it is a claim, not an anchor, and D1 is not yet settled.
- D2 anchor: the same harm, used as the fixed point around which the habitat is enumerated (Fig 11 :44).
- D3 anchor: human judgment, legitimate because the question is constitutively about people harmed. Fig 2 :36: *"An anchor is legitimate when the question is constitutively about it."* Fig 2 :37: *"Human judgment is the right anchor for is this a good answer for a person, because the question is about people."* A model's correctness is a different question with a different anchor, and an instrument can be wrong on axes it does not measure.
- D4 anchor: a refutation from the ground, not consensus among readers.

**Critical consequence.** All four offered candidates are parties to the case. Each has an interest in the reading of who is accountable. Fig 10 :86: *"Outside the slice being graded. Whoever is measured by a reading cannot own it."* Fig 10 :59: *"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."* So none of the four can occupy the settlement seat. Listing one of them as "the accountable one" and calling that the answer is the mutual-update collapse arrived at by a different route: Seat Map :22 warns that *"An anchor listed as one of the parties has already become a frame."*

**Partition or union.** The four-way question is a **union**, not a partition. Conditions overlap: the firm may deploy what the vendor built, the manager may approve what the decision-maker executes, and the same person may hold two roles. Fig 9 :54: *"When the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :57: *"a case in two conditions is not a harder case of either."* Picking one of the four is a single lever that clears the region where only one condition holds and leaves the intersections standing.

**Order by dependency (Fig 3).** Fig 3 :20: *"The chain is ordered by dependency, not by importance."*

1. Register the harm per slot (Fig 3 :5, perception). Without this, nothing downstream has an input.
2. Have terms for what each actor afforded: who could refuse, who could override, who controlled the data (Fig 3 :7, vocabulary). This is the middle link, the one with no obvious instrument. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*
3. Say what would count as an answer: a per-slot attribution, not a name (objective).
4. Range each candidate against the anchor and attribute (planning).
5. Record and carry the ruling with provenance (learn and carry).

Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* Effort spent arguing over which of the four is "really" to blame is effort above the break if link 2 (the vocabulary of what each role afforded) has no instrument.

---

## 3. Figure census

Quotes are verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`. Seat Map and Formula citations are from the local framework files with their own line numbers.

| figure | bearing | verdict for this question |
|---|---|---|
| **1 The Agent** | per-slot residual; frame-internal quantities disqualified | attribute per harm, not per organization average |
| **2 The Ground** | anchor must not update; legitimate only when question is about it; correlation has valence | the anchor is human judgment and the institutional record, not any of the four |
| **3 Dependency Chain** | order by dependency; middle link has no instrument | vocabulary of "what this role could refuse" precedes attribution |
| **4 The Membrane** | methods cross up, head starts down, round trip has a gap | the shape in `07` is a lossy condensation; `R_T` recorded in `11_audit.md` |
| **5 Mint Pipeline** | three guards as product; a fifth bin for refuted terms | no term is minted here; the refused option is "the vendor alone" |
| **6 Closure / Reachability** | no frame escapes its own closure | the vendor's closure cannot contain the deployment decision |
| **7 Room Chain** | agreement is variation, not a verdict | a survey of stakeholders cannot settle accountability |
| **8 Union Surplus** | residual first, frame second; provenance separates convergence from import | enumerate the harm before choosing which literature to read |
| **9 Leave / Arrive** | unbundle a union; describe residual before looking; filters not witnesses | the four names are not four answers; they are overlapping conditions |
| **10 Ground Maintainer** | outside the slice; stakes declared; convention that decides an outcome | the four candidates are frames; the seat is a human-facing institution |
| **11 The Habitat** | enumerate, never compose; contact cascades; no standing list of good actors | the list of four is a standing list, not an enumeration |
| **12 The Bond** | arrangement is the substance; route needs bonds; two currencies | naming four actors is a flat formula; the relation carries the attribution |
| **13 Minimum Viable Set** | set closed, arrangements open; unreachable is a verdict | a new actor category would be a new kind, not a rearranged list |
| **Operators table** | → sequence, ⇒ production, ⋛ comparison, ¬ negation | the attribution is a bond structure, not a list |
| **Symbols table** | R is the residual; the ground is the anchor | R is the harm; the ground is what settles who answers |

---

## 4. Findings

### F1: None of the four is the anchor (decisive)

Fig 2 :36: *"An anchor is legitimate when the question is constitutively about it."*
Fig 2 :37: *"Human judgment is the right anchor for is this a good answer for a person, because the question is about people."*
Fig 10 :86: *"Outside the slice being graded. Whoever is measured by a reading cannot own it."*
Seat Map :22: *"An anchor listed as one of the parties has already become a frame."*

A harm to people makes the question constitutively about people. The institution that answers for it (a court, a regulator, a board answerable to affected people) is the anchor. The vendor, firm, manager and decision-maker are the frames that range against it. Each is measured by the reading of who is accountable, so none can own it.

**Refuter:** produce a case where one of the four is something whose answer does not change when any frame pushes on it, and where the question is constitutively about that thing rather than about the people harmed. That would require reframing the question as "is this artifact correct", which is a different question with a different anchor. Under the question as asked, the refuter does not fire. Status: `triangulated` (Fig 2 + Fig 10 + Seat Map, low overlap between the anchor rule and the seat rule).

### F2: The four-way choice is a union compound, not a partition

Fig 9 :54: *"When the split lands on a union rather than a partition, unbundle before you search again."*
Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*
Fig 9 :57: *"a case in two conditions is not a harder case of either."*

The conditions are at least: production of the artifact (vendor), authority to deploy (firm), duty of oversight (manager), authorization of the specific decision (decision-maker). These overlap. A single lever that names one actor clears the region where only one condition holds and leaves the intersections standing. The residue becomes describable only after unbundling.

**Refuter:** show that the four conditions are mutually exclusive and jointly exhaustive in the relevant cases, so a single lever closes the residual. If that were demonstrated, the partition reading would stand and this finding fails. Status: `triangulated` (Fig 9 + Seat Map :211, same rule in a different figure and a different document, low layout overlap).

### F3: A flat list of four actors cannot carry accountability

Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*
Fig 12 :94: *"The arrangement is the substance."*
Fig 12 :111: *"A vocabulary without bonds can name a state and cannot name a route to one."*
Fig 12 :112: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."*
Operators table :34: *"the only bond a flat chain can express, so every term today is a sequence whether or not it should be"*

"Vendor, firm, manager, decision-maker" is a conjunction of four nouns, a flat formula that records ingredients and not arrangement. Accountability is a route claim: who produced the decision (⇒), in what order (→), who had the standing to refuse (¬), and where the authority threshold was crossed (⋛). Without these bonds, the vocabulary can say what a situation contains and cannot say who answers for getting somewhere from it.

**Refuter:** produce a case in which the four roles are independent, non-overlapping atoms whose mere enumeration fully determines the attribution without any relation among them. Status: `triangulated` (Fig 12 + Operators table).

### F4: Attribute per slot, never by organizational average

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."*
Fig 1 :27: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."*

Each harmed party and each decision is a slot. A statement like "the firm is accountable" aggregates across slots and lets the live signal disappear. A firm's own accountability score is frame-internal: a frame cannot score itself with a quantity it also produces. The outside anchor must read the slots separately.

**Refuter:** show a jurisdiction or case where accountability is legally and factually a single aggregate over all harms from a system, with no per-injury finding, and where that aggregate is the thing the ground settles. Status: `triangulated` (Fig 1 + Fig 2 anchor rule).

### F5: The habitat must be enumerated, not chosen from a standing list

Fig 11 :43: *"The habitat is enumerated, never composed."*
Fig 11 :44: *"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."*
Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."*
Fig 11 :51: *"No standing list of good actors survives a change of residual."*

The four offered names are a standing list, assembled before the harm was described. Fig 9 :27-28: *"describe it before you go looking, or any frame you pick will seem to fit."* The cascade matters: Fig 11 :52-53: *"Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."* An AI harm can be three steps out from the decision that triggered it, for example through a downstream lender's use of a score. Enumerate outward until the cascade stops mattering.

**Refuter:** exhibit a case where the complete causal habitat of the harm is exactly the four named roles and nothing in contact with them matters two steps out. Status: `triangulated` (Fig 11 + Fig 9 + Seat Map :213).

### F6: Capability to answer for the decision is agent-and-habitat, not agent alone

Fig 11 :39: *"capability is a property of agent-and-habitat, never of the agent alone."*
Fig 11 :40: *"An improvement that does not change contact changes nothing, however much it improves."*
Fig 11 :70: *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."*

Asking "which of the four is accountable" treats capability as a property of an isolated agent. The capacity to have foreseen, refused or corrected the decision lives in the agent together with the habitat: the logs, the override path, the escalation route, the regulator's access. Removing a named person and changing nothing about contact changes nothing. A vendor's synthetic test suite is a substituted habitat and proves wiring, not capability in the deployed setting.

**Refuter:** show an actual case where one actor alone, with no change in habitat, could have foreseen and prevented the harm and was in a position to do so. That would make the actor-alone reading stand for that case. Status: `single-source` for the capability claim (Fig 11, plus its own standing open item in the figure).

### F7: An internal assignment of responsibility can stop being a convention

Fig 10 :47: *"a convention that decides an outcome has stopped being one"*
Seat Map :167: *"Declaring a meaning does not ground it."*
NIST AI RMF GOVERN 2 (world source): *"Accountability structures are in place so that the appropriate teams and individuals are empowered, responsible, and trained for mapping, measuring, and managing AI risks."*

A firm's internal RACI chart, or a vendor's terms of service assigning all liability to the deployer, is a convention: a shared meaning about who does what. It makes the question statable. But a convention that decides who pays for a harm has stopped being a convention and has become an outcome-deciding mechanism. It must then be ranged against the ground, and a declared meaning does not ground it.

**Refuter:** show a convention that all parties and the external anchor accept as dispositive without ever being checked against the harm. If it is accepted as dispositive, it is already an outcome-deciding instrument, not a convention, and this finding stands rather than fails. Status: `triangulated` (Fig 10 + Seat Map + NIST world source, different fields).

### F8: The vendor's closure cannot contain the deployment decision

Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*
Fig 6 :21: *"MINT composes inside the closure and can never add an atom."*
Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

The vendor's frame holds the model, its specification, its training data and its test record. The decision to deploy it in this firm, under this manager, for this purpose, is not an atom of that closure. Composition inside the closure cannot reach it. So "the vendor is accountable" is not refuted by anything in the vendor's frame; it is simply a question that frame cannot settle. Equally, a search for the deployment decision inside the vendor's records that finds nothing is not proof the decision did not happen.

**Refuter:** show a vendor whose contract and design specification explicitly include the downstream deployment decision as an atom of its own framing, so the decision is in its closure. Then the vendor's frame could in principle reach it. Status: `triangulated` (Fig 6 + Fig 8).

### F9: Refusal is a unary operator the four-name vocabulary lacks

Fig 12 :114: *"A vocabulary without bonds can name a state and cannot name a route to one."*
Operators table :58: *"a refutation is a negation, which is why a vocabulary without it can only accumulate"*
Fig 12 :140: *"A vocabulary that cannot refuse can only accumulate."*

One of the strongest accountability facts is that someone could have said no: the manager could have overridden, the decision-maker could have refused the recommendation, the firm could have declined to deploy. That is ¬, not a bond between two of the four. A list of four nouns cannot write it. A vocabulary that cannot write refusal can only accumulate actors, which is exactly what a four-way blame list does.

**Refuter:** exhibit a case where no one could have refused and where the attribution is still fully determined by the four roles alone. Status: `triangulated` (Fig 12 + Operators table).

### F10: What survives

| claim | mode | figure |
|---|---|---|
| The question is constitutively about people harmed, so the anchor is human judgment and the institutional record | `general`, structural | Fig 2 :36-37 |
| None of the four parties can own the reading of accountability | `specified`, falsifiable | Fig 10 :86; Seat Map :22 |
| The four-way choice is a union of overlapping conditions, not a partition | `specified`, falsifiable | Fig 9 :54-57 |
| Attribution must be per harm and per slot, not averaged | `general`, structural | Fig 1 :19, :22 |
| The habitat must be enumerated outward, not chosen from a standing list | `general`, structural | Fig 11 :43-44, :51 |
| The relation among roles, not the list of roles, carries the attribution | `general`, structural | Fig 12 :5, :94, :111 |
| Exactly one of the four is accountable in general | **refused as written** | F1, F2, F3 |

---

## 5. Pre-registered refuter

Required before any outreach, per Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."* Written before the conclusion of this derivation.

The shape claim is refuted if any of the following holds:

1. A candidate is shown to be the anchor itself: something whose answer does not change when any frame pushes on it, and about which the question is constitutively asked. This would require the question to be "is this artifact correct", not "who answers for a harm to people".
2. The four conditions are shown to be mutually exclusive and jointly exhaustive, so a single lever (one named actor) closes the residual. This would refute the union reading at F2.
3. A real case is produced in which all four candidates meet the control and epistemic conditions, yet no human-facing institution can settle the attribution at all. This would mean the instruction to range each frame against an external anchor is unreachable in practice, and the honest verdict would become `unreachable`, not a shape.
4. A ground reading (a court, regulator or board finding) assigns accountability to exactly one of the four, is stable under independent recomputation, and does not move when the parties push on it. This would settle that case at `grounded` and would be recorded as a case-level result, not averaged into the general shape.

If any fires, the corresponding finding is withdrawn and the retraction table below is updated. Until one is run, no part of this may be labelled `grounded`.

---

## 6. Recommendation

1. Do not answer the forced choice as written. State the shape: a per-slot attribution, enumerated from the habitat, with the four roles ranged against an external human-facing anchor (F1 to F5).
2. Unbundle before searching. Name the conditions (production, authority to deploy, duty of oversight, authorization of the decision) and ask which holds per slot (F2).
3. Write the relation, not the list. Use the bond vocabulary: who produced, who sequenced, who could refuse, where the threshold was crossed (F3, F9).
4. Treat internal responsibility assignments as conventions until the external anchor checks them (F7).
5. Fig 4 :22: *"Only methods cross up. Only head starts come down."* Send the derivation and the refuter, not a conclusion phrased as a verdict.
6. Keep verdicts separate per domain. Never average D1 harm registration with D3 institutional settlement.

---

## 7. Canonical usage check

Two sources govern how the figures may be used, read after the first sections:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also: *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*; and the limit: the framework reports *"what a missing thing would have to look like (a shape, not a name)"* and then stops at the limit of what instruments can distinguish, recording the lineage so the stop is honest. *"Indiscernibility is not identity."*
- `THE_FORMULA.md` step 7: *"the verdict: is φ* in here at all?"* reported as unreachable, not silence; and *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* The tier or field of a source is a budget filter, never a witness.

### Retractions and confirmations

| earlier reading | status after canonical check |
|---|---|
| "the answer is one of the four" | **Refused.** The question is a union of conditions (F2); the figures return a shape, not a name. |
| "human judgment is the anchor, so the decision-maker is the answer" | **Retracted as a slide.** Fig 2 :36-37 makes human judgment the anchor, not the particular human in the case. The decision-maker is a frame ranged against it (F1). |
| "the vendor has no accountability at all" | **Not claimed and not supported.** F8 says the vendor's closure cannot settle the deployment decision. It does not say the vendor owes nothing for the artifact. F3 keeps production (⇒) in the bond structure. |
| apparent conflict between the responsibility-gap and responsibility-abundance literatures | **Not a figure conflict.** Re-census: gap = no candidate meets the conditions; abundance = many candidates meet them but cannot be handled. Two conditions of the same union (F2), not two opposed verdicts. Fig 9 :54 resolves it. |
| "a convention assigning responsibility is invalid" | **Narrowed.** It is valid as a convention that makes the question statable; it fails only when it decides an outcome without external check (F7). |
| any figure line that seemed to strain | **None after re-census.** The only live strain is F6's capability claim, which Fig 11 itself marks as untested forward. |

---

## 8. Round trip note

`11_audit.md` measures `R_T` for the condensation used here. The shorthand "the anchor is human judgment, unbundle the four conditions, enumerate the habitat" drops at least three things that the full figure set holds: the per-slot indexing of R (Fig 1), the typed bond structure of the attribution (Fig 12), and the requirement that a convention deciding an outcome be checked externally (Fig 10 :47). Treating the shorthand as identical to the figures would set `R_T` to zero and would be the dead-reckoning error Fig 4 :30 names: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*
