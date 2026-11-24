# Figure-grounded audit: deciding which risks to prevent, prepare for, and accept

**Mode of this document: `specified` on the per-domain claims, `general` on the structural shape, `gap` on the allocation number. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Nwukor, 2026): "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No measurement, survey, or climate model was run for this audit.

**Figure source.** All `Fig N :line` citations are against `FRAMEWORK/reference/03-FIGURES_TEXT.md`, reopened this session. Every quoted string was checked as an exact substring. Local primary files read: `FIGURES_README_canonical.md`, `THE_FORMULA.md`, `03-FIGURES_TEXT.md`. World sources are secondary corroboration only, listed with author, venue, year, accessed date and a quote in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

A society holds a finite action budget B. It faces N candidate risk slots s = 1..N. For each slot it holds a belief b formed from its own history and inherited priors, it can take an action a (mitigate, protect, monitor, relocate, insure, do nothing), it makes a prediction Γ(b,a), and later an observation o' arrives. The per-slot residual is R_s = |Γ(b,a) − o'|. The resource limit means the society cannot drive all R_s to zero; the budget is binding, so some slots will keep positive residual.

The question asks for a rule that maps the set of risk slots, their residuals, and the budget into three action classes:

- **prevent**: intervene on the source so the slot stops generating the residual (cut emissions, remove the exposure, cease the activity);
- **prepare**: build capacity so the residual can be absorbed when it arrives (early warning, resilient infrastructure, insurance, staged pathways);
- **accept**: leave the slot without a composed response and record why.

Stated as an effect: an answer is a warrant for assigning each slot to one of three actions, where each warrant must be checkable against something that does not move when the assigning frame changes its mind. That last clause is the whole difficulty. The physical outcome arrives late. The value judgment about who bears the residual is not settled by the physical outcome. And some slots are not in the society's closure at all.

What an answer would look like, bound as an ordinary term (formula "Direction"): a *per-slot, per-domain verdict set with a stated anchor and a written failure condition for each assignment*. Binding this in advance makes the sought-for shape refusable by the same test as everything else (Fig 5 :65-66: "make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else.").

---

## 1. Residual by arity, symmetry, scale

- **Arity:** N slots, each with its own R_s. Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." A single global "risk level" throws away the only signal that says where to look (Fig 1 :28 "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look.").
- **Symmetry:** the three actions are ordered and differently bonded, not symmetric points on one scale. Fig 12 :112 "A plan is a sequence. A goal is a comparison. Progress is a subtraction." "Which risk is worse" is a comparison, Fig 12 :87 "a threshold relation between two quantities", which is ordered, not a symmetric join. There is no figure license for treating prevent, prepare and accept as interchangeable settings of one dial.
- **Scale:** at least two. The individual slot (one hazard, one exposed community, one asset) and the society portfolio (many slots, one budget, institutions and a membrane between them). Fig 4 :19-20 "The kernel is the part that does not change with size: the same loop and the same rule for naming what worked, whether one agent is running it or a thousand. Only the actors, the currency and the anchor change." What crosses the membrane is a method or a head start, never a recording of one occasion (Fig 4 :22 "Only methods cross up. Only head starts come down.").

---

## 2. Domain census (actors / currency / anchor)

No nameable anchor means it is not a domain yet. All five below have one.

| # | domain | actors | currency | anchor | partition or union | order |
|---|---|---|---|---|---|---|
| D1 | physical hazard and impact | hazards, exposure, vulnerability, emissions, affected infrastructure | physical magnitude and realised outcome | measurement and observation, which do not update on what a model thinks (Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks.") | union member | first link: perceive |
| D2 | forecast and modeling frame | models, ensembles, scenarios, expert panels | predictions and residuals | an instrument that can fail a projection; model agreement is one pool, not an anchor (Fig 2 :40) | union member | second link: vocabulary and affordances |
| D3 | decision and allocation | decision makers, budgets, institutions, a seat able to refuse | actions and resources | realised outcome at the slot, not the score that ranked it (Fig 9 :60) | union member | fourth link: planning, only after D4 objective |
| D4 | value and acceptability | affected people, communities, distribution of harms and benefits | welfare, equity, tolerable loss, justice | human judgment, because the question is constitutively about people (Fig 2 :37 "Human judgment is the right anchor for is this a good answer for a person, because the question is about people.") | union member | third link: objective, broken in practice |
| D5 | verification and oversight | auditors, independent expert frames, affected communities, a ground maintainer | refutations, residuals, provenance | the ground, never agreement (Fig 2 :35; Fig 10 :42) | union member | fifth link: learn and carry |

**Dependency order (Fig 3).** Perceive the risk (D1, D2), acquire terms for what it affords (D2, D4), state what would count as progress per slot (D4, this is the objective link), then plan the allocation (D3), then learn and carry (D5). Fig 3 :20-21 "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it." Most climate risk governance effort lands at the planning link, above the break, because that is where the measurements already exist (Fig 3 :29-30 "Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed. Most improvement effort in practice lands above the break, because that is where the measurements already exist.").

**Partition or union?** Union. Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55-56 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." A flood risk that is physically measurable, forecast with model disagreement, politically salient, unjustly distributed, and poorly monitored sits in the intersection of all five. One lever, for example a global risk score, clears only the region where one condition holds. Fig 9 :57 "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."

**Strain test applied before concluding.** Three strains arose and were re-censused rather than smoothed over. They are recorded in section 7.

---

## 3. Findings F1 to F12

Each finding carries a verbatim figure line, a mode, and a refuter. Refuters are not ornament: they are the test that would make the finding false.

### F1: Keep the residual per risk slot; refuse a single global risk score

Fig 1 :19 "The residual is indexed by object slot, not aggregated."
Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."
Fig 1 :20 "Support is satisfied when some slot carries positive mass, so a global residual near zero with one live slot is a legal state and not an inert one."

A heat map that collapses N slots into one national risk index makes a live slot invisible. Support is satisfied when some slot carries positive mass (Fig 1 :20), so a near-zero average with one catastrophic slot is a legal state and must still trigger action.

- **Mode:** `general` (structural).
- **Refuter:** exhibit a case where aggregating slots preserves the per-slot signal and drives the correct per-slot action, or show that R here is genuinely global rather than per-exposure. Either fires, F1 falls.
- **Triangulation:** Fig 1 plus the "Society of Agents" essay rule "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict.", triangulated across the figure text and an essay with low overlap to the figure's per-slot mechanism. Marked `triangulated`.

### F2: This is a union of conditions with different anchors, not a three-bin partition

Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."
Fig 9 :4-5 "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."
Fig 2 :36 "An anchor is legitimate when the question is constitutively about it."

The question's ordinary grammar (prevent / prepare / accept) suggests a partition. The figures refuse that: five conditions with different anchors overlap, so verdicts must be kept per domain and never averaged into a single "correct mix."

- **Mode:** `specified`.
- **Refuter:** exhibit a single anchor that legitimately settles both physical outcome and acceptability to affected people, or show the five conditions are disjoint. Either collapses the union to a partition.
- **Status:** `triangulated` (Fig 9 union rule + Fig 2 anchor legitimacy, low overlap).

### F3: "Which to accept" is anchored in human judgment, not in a model score

Fig 2 :37 "Human judgment is the right anchor for is this a good answer for a person, because the question is about people."
Fig 2 :38 "It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."
Fig 2 :33 "The anchor must not update."

A probability of harm is an instrument for the physical question. It is not the anchor for the acceptability question, because acceptability is about people and instruments "can be wrong on axes they do not measure." World corroboration: Aven, Glette-Iversen and Karatzoudi (2025, Journal of Risk Research) write that the precautionary principle "is not as a decision rule prescribing what to do. When to invoke the principle and how much weight to give to it is fundamentally a management or political issue, not science." That is the same separation from an independent field.

- **Mode:** `specified`.
- **Refuter:** an instrument that settles acceptability without appeal to the people who bear the loss, or a demonstration that the accept question is not constitutively about people.
- **Status:** `triangulated` (Fig 2 + risk-science corroboration, different evidence pools).

### F4: Prevent, prepare and accept are three different bonds, not three settings of one dial

Fig 12 :112 "A plan is a sequence. A goal is a comparison. Progress is a subtraction."
Fig 12 :87 "a threshold relation between two quantities"
Fig 12 :125 "A composition costs in two currencies, and they do not add."
Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves."

- **prevent** changes contact with the ground (Fig 11 :40), so its warrant is a changed physical residual at the slot. Note the asymmetry Fig 11 :61 "The seat's power is asymmetric. Introduction is available; exclusion is not.": a society can introduce a measure, it cannot subtract the hazard from the world, so "prevention" is a change of contact, not literal erasure.
- **prepare** is a head start or a method that makes the next search cheaper (Fig 4 :23 "upward: a method that can be reapplied. Never the recording of a particular success."; Fig 4 :24 "downward: something that makes the next search cheaper. Never a replay of what worked once."). Its warrant is capability under surprise, not a forecast being right. World corroboration: Woods as quoted by the Resilience Engineering Association distinguishes "robustness as being able to deal well with known unknowns, and resilience as being able to deal well with unknown unknowns."
- **accept** is a verdict that no composed response is available within the budget, recorded with its reason, not a passive default and not a convention. A convention that decides an outcome has stopped being one (Fig 10 :47 "a convention that decides an outcome has stopped being one").

The three are differently bonded and priced in different currencies, so they cannot be traded as points on a single scalar.

- **Mode:** `specified`.
- **Refuter:** show two of the three are one action with different parameter values, that is one bond rather than three, or show that description cost and action cost add into one currency (against Fig 12 :125).
- **Status:** `triangulated` for the structural split (Fig 12 + Fig 4 + Fig 11); `single-source` for the specific mapping of "accept" onto an unreachable-at-budget verdict, which rests on Fig 8 :40-43.

### F5: Risk scores are filters for the budget, never witnesses for the verdict

Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."
Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces."

The Australian Government climate risk guidance makes the same point in practice: "The final decision on which actions to pursue should not be based solely on this score; instead, the score is a tool to support your organisation's existing governance structure and delegations." (DCCEEW, 2025). A multi-criteria score is efficient for a convention (Fig 2 :41 "efficient for a convention: agreement about a shared meaning is the product, not a corruption of it") but disqualifying as a verdict about the world (Fig 2 :40).

- **Mode:** `specified`.
- **Refuter:** show a score that is not produced by the frame it ranks, that is independent ground contact rather than a frame-internal quantity.
- **Status:** `triangulated` (Fig 9 + Fig 1 + practitioner guidance).

### F6: The chain most often breaks at the objective link, before planning

Fig 3 :25-26 "The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."
Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at."
Fig 3 :19 "Optimising a link that already works cannot rescue one that does not."

Governance can name a hazard and can plan an allocation, but in many slots it has no stated, measurable answer to "what would count as success here, for whom, by when." Lempert (2025) opens the same gap: "What constitutes a good decision? No universal criterion exists." RDM's first step is decision framing, where stakeholders define objectives and criteria before any ranking. The framework's answer is not to supply the objective; it is to require that the objective be made an ordinary term with its own residual.

- **Mode:** `specified`.
- **Refuter:** an instrument that measures "what counts as progress" per slot in the field, which would repair the broken link, or evidence that the objective link is already measured for the slots in question.
- **Status:** `triangulated` (Fig 3 + decision-science corroboration).

### F7: Buy independence in proportion to the cost of being wrong; model agreement is one pool

Fig 2 :42 "Buy independence in proportion to the cost of being wrong."
Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence."
Fig 7 :35 "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."
Fig 8 :45 "Two frames together reach what neither reaches alone."

Several climate models sharing a physics lineage and data pool are one frame wearing several names (Fig 2 :18-21 "one evidence pool", "they never talk, and still agree", "so the agreement is the pool talking, not two frames confirming each other"). The World Bank's *Agreeing on Robust Decisions* (2014) corroborates the cost rule from an independent field: "Robustness becomes important when the consequences of making a wrong decision are high."

- **Mode:** `general` on the independence rule, `specified` on the field application.
- **Refuter:** a high-cost decision that was genuinely improved by adding another agreeing model rather than an independent frame.

**Important caveat about this simulated run.** The world sources in this folder partly share an evidence pool (the climate-governance literature cites the same IPCC and OECD assessments), so their agreement counts as one witness, not several. The low-overlap fields (human cognition, animal behaviour, safety engineering) are the genuinely independent corroborators. This second seat, in `11_audit.md`, shares the primary's evidence pool entirely, so its agreement is internal consistency, not corroboration (Fig 2 :40).

- **Status:** `triangulated` (Fig 2 + Fig 7 + decision-economics corroboration).

### F8: A society can only triage what its closure can represent; the accept bin must stay honest about the rest

Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."
Fig 8 :39 "So a search that finds nothing is never a proof of absence."
Fig 9 :44 "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."
Fig 11 :44 "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."

"Accept" must distinguish three cases that look identical from inside: underivable in principle (go outside, import a frame with provenance and a shadow test, Fig 8 :40-43); unreachable at this budget (the term is already in the closure and was not found, so more search or a different instrument is owed); and genuine absence, which cannot be proved from inside. Woods's distinction between known unknowns and unknown unknowns, and Lindhout et al.'s "Major accidents often follow an unforeseen sequence of events, this constitutes a scenario gap", corroborate the need to hold the unrepresented cases explicitly. Contact cascades: Fig 11 :52-54 "contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."

- **Mode:** `specified`.
- **Refuter:** a demonstrated sealed and complete risk inventory, or a proof that a no-signal search establishes absence.
- **Status:** `triangulated` (Fig 6, 8, 9, 11 plus safety-engineering corroboration).

### F9: Responses transfer between scales and places only as methods with a measured round-trip gap

Fig 4 :22 "Only methods cross up. Only head starts come down."
Fig 4 :25 "A recording carried upward looks like knowledge and is a description of one occasion."
Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."
Fig 10 :72 "A room that stays fixed while the question moves is the failure; the correlation is only its symptom."

A flood-response recipe copied from one city to another is a recording unless the re-applicable method is distilled and the gap is measured. The kernel (Fig 4 :20) is the loop, not the local recipe.

- **Mode:** `specified`.
- **Refuter:** a case where replaying a past response worked unchanged on a different hazard and a different population, with no method distilled and no gap measured.
- **Status:** `triangulated` (Fig 4 + Fig 10).

### F10: The accepting seat must be able to refuse and must declare its stake

Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it."
Fig 10 :47 "a convention that decides an outcome has stopped being one"
Fig 10 :59 "an interest in the outcome is unavoidable, an interest in the reading is disqualifying"
Fig 10 :60 "Where a stake cannot be removed, declare it."

Acceptance decisions are where a conflict of interest does the most damage, because the accepted residual is borne by someone else. IPCC AR6 WGII Chapter 17 finds with very high confidence that "Governance, especially when inclusive and context sensitive, is an important enabling condition for climate risk management and adaptation." Inclusive and context-sensitive governance is the operational form of Fig 2 :37's anchor: affected people are not a stakeholder to be consulted after the verdict, they are the anchor for the acceptability part of it.

- **Mode:** `specified`.
- **Refuter:** a decision process in which acceptance is fixed by a rule that cannot be violated, or in which the decision maker has an undeclared interest in which risks are accepted.
- **Status:** `triangulated` (Fig 10 + Fig 2 + climate-governance assessment).

### F11: Valence is relative to the residual; there is no standing list of good measures

Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries."
Fig 11 :51 "No standing list of good actors survives a change of residual."
Fig 11 :61 "The seat's power is asymmetric. Introduction is available; exclusion is not."

Insurance is a benefactor to a flood residual and a malfactor to a drought residual if it encourages exposure in a drying basin (the mechanism of maladaptation, corroborated by the World Bank's dike example: a dike "could prove to be either too low (under-adaptation) or too high (over-adaptation)" and can lead to maladaptation). This kills any universal "best practice" list of risk treatments.

- **Mode:** `general` (structural) with `specified` field application.
- **Refuter:** a risk-reduction measure with identical valence for every slot and every residual.
- **Status:** `triangulated` (Fig 11 + development-economics corroboration).

### F12: No figure returns the allocation ratio or the named list: declared gap

Fig 9 :32 "you get a kind of thing, never the answer itself"
Fig 13 :134 "Unreachable is a verdict here, not a silence"
Fig 8 :39 "So a search that finds nothing is never a proof of absence."

The framework returns the shape and the refuters. It does not return "spend 40 percent on prevention", nor "accept coastal flooding in region X". Those need per-slot ground contact: a measured residual, an objective link, a non-updating anchor, and an affected community in the verdict seat. Until those exist, the honest report is `gap` of the unreachable-at-this-budget kind rather than silence and rather than an invented number.

- **Mode:** `general`, status `gap`.
- **Refuter:** a figure line that selects a numerical allocation or a named risk, or a completed per-slot ground reading that settles one.
- **Status:** `single-source` on the figure side (the shape-not-a-name limit is in Fig 9 and the canonical README, which overlap heavily) and `gap` on the object.

---

## 4. Findings summary table

| finding | claim | mode | verdict type |
|---|---|---|---|
| F1 | residual per slot, not a global score | general | triangulated |
| F2 | union of five conditions, verdicts separate | specified | triangulated |
| F3 | acceptability anchored in human judgment | specified | triangulated |
| F4 | prevent / prepare / accept are different bonds | specified | triangulated (one single-source subclaim) |
| F5 | scores filter the budget, never the verdict | specified | triangulated |
| F6 | chain breaks at the objective link | specified | triangulated |
| F7 | buy independence proportional to cost of error | general | triangulated |
| F8 | closure limit and honest accept bin | specified | triangulated |
| F9 | methods transfer, recordings do not | specified | triangulated |
| F10 | refusal seat and declared stake | specified | triangulated |
| F11 | valence relative to residual | general | triangulated |
| F12 | allocation ratio and named list | general | gap |

Verdicts are kept separate and never averaged. No "overall answer score" is computed.

---

## 5. Pre-registered refuter (written before the conclusion)

Per the seat-map discipline, a falsifier written before the run is a design instrument. The shape claim of this folder, namely *a society should assign risks per slot across five anchored domains using a procedure that keeps verdicts separate and records a failure condition for each assignment*, is refuted if any of the following holds:

1. A single global risk score is shown to preserve per-slot signal and to drive correct per-slot action, so F1 falls.
2. An anchor is exhibited that legitimately settles both physical outcome and acceptability to affected people, so F2 and F3 fall.
3. An instrument is shown that settles acceptability without appeal to the people who bear the loss, so F3 falls.
4. Prevent, prepare and accept are shown to be one action with different parameter values, that is one bond rather than three, so F4 falls.
5. A score is shown to be independent of the frame that produces it, so F5 falls.
6. The objective link is shown to be measured per slot in the field, so F6 falls.
7. A sealed and complete risk inventory is demonstrated, or a no-signal search is shown to establish absence, so F8 falls.
8. A figure line is found that returns a numerical allocation or a named risk assignment, so F12 is closed and the gap disappears.

If any fires, the shape claim is withdrawn or amended in this file with the correction left visible. Until one is run, no part of this folder may be labelled `grounded`.

---

## 6. Recommendation (procedure, not a list of risks)

1. Split the question into the five domains; keep a verdict per domain; never average them into one "correct mix" (F2).
2. Bind the residual per risk slot and publish per-slot residuals, not only an aggregate heat map (F1). Legal state: a near-zero average with one live slot still requires action (Fig 1 :20).
3. Repair the objective link before optimizing the allocation: for each slot write down what would count as success, for whom, by what observable measure (F6, Fig 3 :27).
4. Use risk scores and cost-benefit numbers as filters for the budget, never as witnesses for the verdict (F5, Fig 9 :60). Record the score's provenance as a frame-internal quantity (Fig 1 :27).
5. For acceptability, put affected people in the anchor seat for the value part of the verdict; declare any stake that cannot be removed; keep a seat able to refuse (F3, F10).
6. Treat prevent as a change of contact, prepare as capability under surprise, and accept as a recorded verdict of unreachability at this budget, not a passive default (F4, F8).
7. Buy independence in proportion to the cost of being wrong; do not count agreeing models from one evidence pool as corroboration (F7).
8. Enumerate the habitat outward past first-order contact; import missing frames with a source gate and a shadow test, and record which cases are unknown unknowns (F8, Fig 11 :43-44, Fig 8 :50-52).
9. Transfer response recipes only as methods with a measured round-trip gap (F9).
10. Write the refuter before the run and keep the lineage so a later reader can locate the error (section 5).

---

## 7. Strains, re-census, retractions and confirmations

### S1 (resolved by re-census): three bins looked like a partition

The first reading mapped prevent / prepare / accept onto the familiar ISO 31000 treatment families (avoid, reduce, transfer, retain), which look like a partition. Strain: Fig 2 :36-37 requires different anchors for physical-outcome questions and for "good answer for a person" questions, and a partition cannot carry two anchors. Re-census: the three actions are different bonds inside five overlapping domains, so the object is a union (Fig 9 :54). The practitioner vocabulary is retained as a **convention** for labeling (Fig 2 :41 "efficient for a convention") and refused as a **verdict rule** (Fig 2 :40). The Australian guidance agrees: the score supports governance, it does not replace the decision.

### S2 (resolved by re-census): "limited resources" looked like optimize expected utility

Strain: optimizing a single expected-utility score conflicts with Fig 9 :60 (filters are not witnesses) and Fig 12 :125 (bits and actions do not add). Re-census: the budget is a filter that decides how much of the space is reached; description cost and action cost are two readings held apart (Fig 12 :126 "Bits price the description. Actions price finding out whether it holds."). No figure licenses a universal "optimal allocation" number. This is not a strain after re-census, it is a correction of the reading.

### S3 (resolved by re-census): "no signal found" looked like "risk absent"

Strain: a triage process that finds no signal in a slot would naturally record "accept, nothing there." Fig 8 :39 and Fig 9 :44 forbid that inference. Re-census: split the accept bin into three named subcases (underivable, unreachable at budget, genuine absence unprovable), and require the record to say which one it holds. Kept visible in F8.

### Retractions of my own earlier readings

| earlier reading | status after re-census |
|---|---|
| "prevent = literal subtraction of a hazard" | **Retracted.** Fig 11 :61 "Introduction is available; exclusion is not." Prevention is a change of contact (Fig 11 :40), not erasure. |
| "accept = a convention for tolerating residual" | **Retracted as written.** A convention that decides an outcome has stopped being one (Fig 10 :47). Acceptance is a verdict anchored in human judgment for the value part and in unreachability-at-budget for the capability part. |
| "the ISO risk-appetite families are the answer" | **Narrowed.** Useful convention vocabulary (Fig 2 :41), not a verdict rule (Fig 2 :40, Fig 9 :60). |
| "RDM robust = the framework's settled" | **Narrowed.** Robustness is a decision criterion under deep uncertainty (Lempert 2015), not ground settlement; Fig 5 step 5 still requires the ground to pay. |
| "the eight-treatment list is a standing best-practice set" | **Retracted.** Fig 11 :51 refuses a standing list of good actors across changes of residual; see F11. |

### Confirmations from the canonical usage check

The figures README states that the framework returns "what a missing thing would have to look like (a shape, not a name)" and that quotes are the authority, not the summary. This confirms F12 (no allocation number) and the `gap` verdict. `THE_FORMULA.md` step 7 confirms the three distinct questions SEARCHED, INWARD and OUTWARD used in F8. The no-updating-anchor rule in Fig 2 :33-34 confirms F3 and F10. `The Recursive Self-Improvement Trap` confirms the simulation disclosure at the head of this file.

After re-census: **one live type question** (what exactly counts as a non-updating anchor for acceptability in a plural society; human judgment is legitimate per Fig 2 :36-37 but how to aggregate plural judgments is not given by the figures), **three re-censused strains** now dissolved, **no hidden strain**.

---

## 8. Canonical usage check

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also the re-census rule: "a reading that makes one contradict another has misidentified its domain, not found a flaw." Applied in S1 to S3.
- `FRAMEWORK/figures/THE_FORMULA.md` step 7: SEARCHED / INWARD / OUTWARD kept distinct in F8; step 5 "the ground settles it. Verified only by what pays. A gate is not the ground." prevents RDM robustness from being mistaken for settlement.
- `FIGURES_README_canonical.md` limit: the framework returns a shape, records the lineage, and stops at the limit of the available instruments. This is why section 6 is a procedure and not a risk list.

---

## 9. Bottom line of the audit

The question can be answered in shape and in procedure, not in named allocations. The five domains have different anchors, so their verdicts stay separate. The figures decide; the world sources corroborate from lower-overlap fields (human error-management cognition, animal risk allocation, safety engineering, decision science) and never overrule. The specific question "which risks, in this society, with this budget" needs per-slot ground contact and is reported as `gap`, unreachable at this budget, not silence and not an invented percentage. Every substantive claim is `specified` or `general`, none is `grounded`, and the whole folder is a simulated derivation checked for internal consistency against the figures.
