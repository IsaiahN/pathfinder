# Figure-grounded audit: how should uncertainty be communicated so it is neither overstated nor mistaken for lack of risk?

**Mode: `specified` on the substantive findings, `general` on the structural shape. Not `grounded`.** `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status: simulated derivation, not a ground reading.** *The Recursive Self-Improvement Trap*: "LLMs can quickly simulate an approximate answer/output" but "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, with line numbers), `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`. Every `Fig N :line` quote below is an exact substring of `03-FIGURES_TEXT.md`. Seat Map quotes are from the local field guide and are labelled as such.

---

## 0. The residual in effect terms

The question asks how to present an uncertain estimate so that two failures are avoided at once:

- **Overstating uncertainty:** the presentation makes the state of knowledge look worse than it is, so the recipient discounts the risk.
- **Uncertainty mistaken for lack of risk:** the presence of a range or a qualifier is read as "we do not know whether there is a risk," so the recipient discounts the risk by a different route.

Both are failures of the same quantity: the recipient's takeaway about risk versus what the ground warrants. The ground here is the realised outcome the decision bears on, not the comfort or consensus of the wording. State the residual as:

> **R = (recipient's risk takeaway) minus (risk warranted by the ground), measured per slot at the receiving end of a communication channel.**

What an answer would look like, bound as an ordinary term before the run (Formula step "Direction"; Fig 5 :65): a communication shape such that (a) a live slot risk stays visible, (b) the channel to the ground stays reachable, (c) uncertainty labels are checkable rather than authoritative, and (d) the provenance of the estimate travels with it. That is the sought-for shape, written down so it can accrue a residual like anything else.

**What each option leads to.** Option A, optimise the wording for reassurance: the channel is decorated and the anchor is moved toward the audience. Option B, optimise the wording for the ground: the channel is kept transparent and the anchor is left unmoved. A produces agreement and a possible false sense of safety; B produces a checkable message that may be uncomfortable. The figures decide between them below.

## 1. Domain census (before choosing any figure line)

**R by arity, symmetry, scale.** Arity: one quantity, risk calibration at the receiver, but observed at two ends of one channel (sender presentation, receiver interpretation), so a compound with one loop, not two independent problems. Symmetry: the residual is asymmetric. Understating and overstating uncertainty are not mirror failures; they carry different costs (Fig 2 :42 "Buy independence in proportion to the cost of being wrong."). Scale: risk is per slot and cascades across scales (Fig 1 :19; Fig 11 :52). A global mean is a different object from a slot residual.

**One line per domain: actors, currency, anchor.**

| domain | actors | currency | anchor (nameable?) | partition or union |
|---|---|---|---|---|
| D1 Risk/assessment frame | models, observations, assessors, projections, tails | predictions and residuals against observation | the ground: realised climate and impacts (Fig 2 :29) | partition boundary: what composes into an estimate |
| D2 Communication channel | communicator, message, uncertainty label, recipient | information transferred, channel fidelity | the ground, kept reachable (Fig 10 :24, :29) | union compound with D3: "present" and "interpret" overlap in one event |
| D3 Decision frame | decision-maker, policy, levers, stakes | decisions and their outcomes | the ground: the outcome the decision bears on | overlaps D2; unbundle before searching (Fig 9 :54) |

No domain is admitted without a nameable anchor. D1 has the realised outcome, D2 has the same ground held reachable through a channel, D3 has the decision outcome. All three are legitimate. There is no fourth domain of "pure wording," because wording with no ground is a convention that carries no verdict (Fig 10 :48).

**Partition or union.** This is a **union compound**. The two named failures are coupled: overstating uncertainty tends to produce the "no risk" reading, so a single lever on the wording clears the region where only one condition holds and leaves the intersection standing (Fig 9 :55-58: "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound"). The compound gets one loop, at the channel.

**Order by dependency (Fig 3).** The chain runs: perception of risk (link 1) before vocabulary for what the uncertainty affords (link 2), before the objective of a calibrated takeaway (link 3), before the communication act (link 4), before learning what worked (link 5). Fig 3 :24-27 says the middle link is where chains break: perception and planning have obvious tests, but "having terms for what a situation offers and being able to say what would count as progress" has neither. In climate risk communication there are abundant instruments for producing uncertainty numbers and for measuring decision outcomes, and few for the middle link. That is why "neither overstated nor mistaken for lack of risk" is hard: it is a link-2/link-3 demand stated in link-1 language.

## 1b. Figure census (quoted before concluding)

| figure | verbatim line | bearing | reading |
|---|---|---|---|
| Fig 1 :19 | "The residual is indexed by object slot, not aggregated." | per-slot signal | governs F1 |
| Fig 1 :22 | "Aggregating across slots is how a live signal disappears into an average." | aggregation erases risk | governs F1 |
| Fig 1 :13 | "a global R near zero with one live slot residual is a legal state" | global mean can be benign while one slot is live | governs F1 |
| Symbols :43 | "R is measured per slot, never as a single global number" | definition of R | governs F1 (triangulates) |
| Fig 2 :29 | "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." | ground is not the audience | governs F2 |
| Fig 2 :35 | "Alignment is triangulation, not negotiation. A mirror cannot correct you." | do not negotiate the wording | governs F2 |
| Fig 2 :45 | "Frames range against the ground. They do not negotiate with it." | both ends range against ground | governs F2 |
| Fig 2 :42 | "Buy independence in proportion to the cost of being wrong." | high stakes buy independence | governs F8 |
| Fig 10 :24 | "the ground does not decay, the channel does" | channel failure is the failure | governs F2 |
| Fig 10 :25 | "stale percepts, dropped transients," | channel decay modes | governs F2 |
| Fig 10 :26 | "saturated metrics, pooled readings" | channel decay modes | governs F2 |
| Fig 10 :28 | "you have lost touch" | output of a decayed channel | governs F2 |
| Fig 10 :29 | "keep the anchor reachable" | communication's job | governs F2 |
| Fig 10 :18 | "a declared meaning is not a grounded one" | labels are not ground | governs F3 |
| Fig 10 :49 | "Declaring a meaning does not ground it." | labels are not ground | governs F3 |
| Fig 10 :19 | "install what can be violated" | make checkable statements | governs F3 |
| Fig 10 :47 | "a convention that decides an outcome has stopped being one" | label deciding policy | governs F4 |
| Fig 10 :48 | "a convention nothing can check is a constant the seat authored, carrying the seat's authority" | authority smuggled in as convention | governs F4 |
| Fig 10 :53 | "And a prohibition nothing can satisfy is a prohibition stated wrong." | read the question itself | governs F4 |
| Fig 9 :60 | "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." | category is not verdict | governs F5 |
| Fig 9 :40-41 | "a wrong cut removes the answer and speeds up" / "so keep every cut ranked and reversible" | keep framings reversible | governs F5 |
| Fig 8 :50 | "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them" | provenance | governs F6 |
| Fig 8 :53 | "Residual first, frame second." | describe before naming | governs F6 |
| Fig 9 :27 | "describe it before you go looking, or any frame you pick will seem to fit" | describe before naming | governs F6 |
| Fig 9 :30 | "your words are borrowed too, so describe the effect rather than the cause" | effect not cause | governs F7 |
| Operators :4 | "The bond carries information the operands do not, so a term that names only its ingredients has recorded half of itself." | number is not the message | governs F7 |
| Fig 12 :111 | "A vocabulary without bonds can name a state and cannot name a route to one." | need relations | governs F7 |
| Fig 12 :112 | "A plan is a sequence. A goal is a comparison. Progress is a subtraction." | needs bonds for decision | governs F7 |
| Fig 5 :65 | "make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else." | bind the shape | governs F8 |
| Fig 11 :52 | "And contact cascades." | cascade | governs F9 |
| Fig 11 :52-53 | "first-order enumeration, second-order effect, and the residual that mattered was three steps out." | cascade | governs F9 |
| Fig 9 :32 | "you get a kind of thing, never the answer itself" | shape not phrasing | governs F10 |
| Fig 13 :134 | "Unreachable is a verdict here, not a silence" | gap is a verdict | governs F10 |
| Fig 8 :39 | "So a search that finds nothing is never a proof of absence." | gap is not proof of no rule | governs F10 |

Strained readings are named in section 6, not smoothed over.

## 2. Findings

### F1: risk is per slot; a global aggregate is how the risk disappears (decisive for "mistaken for lack of risk")

Fig 1 :19: "The residual is indexed by object slot, not aggregated."
Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average."
Fig 1 :13: "a global R near zero with one live slot residual is a legal state"
Symbols :43-44: "R is measured per slot, never as a single global number."

A single global uncertainty figure (one global mean temperature, one global damage estimate, one pooled confidence label) is a legal summary but a bad carrier of the residual. If one region, impact or population carries a live risk, the global figure can remain near zero and still be legal. The "lack of risk" reading is produced structurally by the aggregation, not only by hostile framing. This is triangulated: the agent's slot indexing (Fig 1) and the habitat's contact cascade (Fig 11 :52) are low-overlap routes to the same demand, so the verdict is `triangulated`.

**Refuter:** exhibit a single global uncertainty statistic that preserves a live slot-level risk signal with no loss, such that a decision-maker in the affected slot cannot be misled by the aggregate. If such a statistic is demonstrated, F1 fails for that statistic.

### F2: the channel decays, not the ground; communication's job is to keep the anchor reachable

Fig 10 :24: "the ground does not decay, the channel does"
Fig 10 :25-26: "stale percepts, dropped transients," / "saturated metrics, pooled readings"
Fig 10 :27-29: "the output is not a verdict, it is" / "you have lost touch" / "keep the anchor reachable"
Fig 2 :45: "Frames range against the ground. They do not negotiate with it."
Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you."

The two failures named in the question are the two ends of one channel fault. At the sender end, "pooled readings" and "saturated metrics" overstate or flatten uncertainty. At the receiver end, the same loss of contact is read as absence of risk. The fix is not to tune the tone until both sides are comfortable; that is negotiation, and a mirror cannot correct you. Both frames must range separately against the ground. This is `triangulated` across Fig 10 (ground maintainer) and Fig 2 (ground and alignment), which have different roles and low overlap.

**Refuter:** demonstrate a message whose fidelity to the ground is unchanged under pooling of readings or saturation of the metric, or show a case where negotiating the wording between communicator and recipient still settles the risk correctly. Either breaks F2.

### F3: a declared uncertainty label is not a grounded one; install what can be violated

Fig 10 :18: "a declared meaning is not a grounded one"
Fig 10 :19: "install what can be violated"
Fig 10 :49: "Declaring a meaning does not ground it."

"Likely", "medium confidence", "95 percent interval" are declared meanings until a recipient can check them against the ground. The ground settles the meaning; the label does not. The operational form of "install what can be violated" is a statement of what would be observed if the risk were as claimed, so the recipient can test it. World corroboration, low overlap: Hoekstra et al. (2014) found that "both researchers and students endorsed, on average, more than three statements, indicating a gross misunderstanding of CIs"; Slovic (2004) that "when consequences carry sharp and strong affective meaning ... variation in probability often carries too little weight"; Sunstein (2003) that "people tend to focus on the badness of the outcome, rather than on the probability that the outcome will occur." These predict that a bare label will not do the work. `single-source` on the figure line (Fig 10), with strong world corroboration from statistics and cognitive psychology.

**Refuter:** produce an uncertainty label whose meaning is settled by the ground and checkable without any further instrument, while remaining informative to a decision-maker. If such a label exists, F3 is false for it.

### F4: a convention that decides an outcome has stopped being a convention

Fig 10 :47: "a convention that decides an outcome has stopped being one"
Fig 10 :48: "a convention nothing can check is a constant the seat authored, carrying the seat's authority"
Fig 10 :53: "And a prohibition nothing can satisfy is a prohibition stated wrong."
Seat Map :163 (local field guide): "High correlation is disqualifying for a verdict and efficient for a convention."

When a risk label is used as the decision rule, the label stops being a neutral convention and becomes an authority over the verdict. That is the "overstated uncertainty" failure in its structural form: the uncertainty statement is given a standing it did not earn. Fig 10 :53 applies to the question as written. If "neither overstated nor mistaken for lack of risk" is a prohibition no real communicator can satisfy (because every wording shifts one of the two), then the question is stated wrong and must be re-posed as a checkable constraint, not an absolute. This is a genuine reading, not a rhetorical point. `triangulated` across Fig 10 and the Seat Map :163 (different documents, different functions).

**Refuter:** show a risk-communication convention that decides a policy outcome while remaining a checkable convention with no authority over the verdict; or show that the stated prohibition is satisfiable by a real communicator under a checkable criterion. Either breaks F4.

### F5: filters for the budget, witnesses for the verdict; keep cuts ranked and reversible

Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."
Fig 9 :40-41: "a wrong cut removes the answer and speeds up" / "so keep every cut ranked and reversible"

An uncertainty category is a filter for attention, not a witness for the risk verdict. "Medium confidence" may allocate effort; it may not hand the decision. Every choice of which scenarios, ranges or tails to show is a cut, and a wrong cut removes the answer and speeds up the wrong conclusion. Keep every cut ranked and reversible: show the alternative framings, keep the tails, do not let one presentation become the only one. World corroboration from decision science: RAND's robust decision making "achieve[s] set threshold for indicators of satisfactory outcomes across a wide range of plausible futures" rather than optimising one forecast. `triangulated` across Fig 9 and the RAND world source (low overlap).

**Refuter:** exhibit a case where an uncertainty category legitimately determines the risk verdict without a ground reading, and where an irreversible single framing loses nothing. If so, F5 fails.

### F6: provenance travels with the number, or the content cannot be read

Fig 8 :50: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"
Fig 8 :53: "Residual first, frame second."
Fig 9 :27: "describe it before you go looking, or any frame you pick will seem to fit"

Two identical uncertainty numbers, one independently derived and one adopted from a source with an interest in the outcome, are indistinguishable in content. Only the record separates them. So the communication shape must carry provenance: where the estimate came from, what evidence pool it draws on, and whether an apparent second source is merely the first wearing another name (Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool"). Describe the residual first, then name the frame; otherwise any frame will seem to fit. `triangulated` across Fig 8 and Fig 9 (different questions, low overlap).

**Refuter:** show two uncertainty estimates with identical content and different provenance where the provenance makes no difference to any checkable decision. If so, F6 is decorative rather than constitutive.

### F7: describe the effect rather than the cause; a number is not the whole message

Fig 9 :30: "your words are borrowed too, so describe the effect rather than the cause"
Operators :4: "The bond carries information the operands do not, so a term that names only its ingredients has recorded half of itself."
Fig 12 :111: "A vocabulary without bonds can name a state and cannot name a route to one."
Fig 12 :112: "A plan is a sequence. A goal is a comparison. Progress is a subtraction."

A probability number is an ingredient. The bonds to consequence, to threshold and to action carry the meaning the recipient needs. A message that names only the number has recorded half of itself. What is owed is the effect (what would be observed, what would change, what the decision turns on), not the cause (the model, the jargon). This is why a bare "10 percent chance" can be simultaneously overstated (read as near-certainty by an affect-driven reader) and under-read (read as no risk by a numerate reader), the two failures named in the question. `triangulated` across Fig 9, the Operators table and Fig 12, three low-overlap sources.

**Refuter:** exhibit a bare probability number that conveys the route, the goal and the comparison a decision requires, with no additional relational structure, for a real decision-maker tested against a ground. If so, F7 fails.

### F8: bind the sought-for shape before communicating; buy independence in proportion to cost

Fig 5 :65: "make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else."
Fig 2 :42: "Buy independence in proportion to the cost of being wrong."

A communicator cannot check the direction of their own message, because the sought-for takeaway is a preference, not a term already in the message. The remedy is a discipline: write down what a correct takeaway would look like before sending, then check the message against it. Climate risk is high cost if wrong, so independence is bought in proportion: separate assessors, separate instruments, separate readers, not one pooled evidence pool. `single-source` on Fig 5 for the binding rule, `triangulated` with Fig 2 for independence (different figures, different functions).

**Refuter:** show a communicator who reliably calibrates a recipient to the ground without ever writing down what a correct takeaway would look like, in a case where the direction of the question is genuinely in doubt. If so, the discipline in F8 is unnecessary.

### F9: enumerate the cascade; scoping to direct contact misses the material residual

Fig 11 :52: "And contact cascades."
Fig 11 :52-53: "first-order enumeration, second-order effect, and the residual that mattered was three steps out."

Risk communication that lists only direct effects is DDT-at-the-eagles reasoning: the residual that matters is three steps out. The habitat is enumerated, never composed (Fig 11 :43), so the communicator lists what acts on the risk, the conditions, and the relations, outward until the cascade stops mattering. This is a distinct requirement from F1 (per slot) and F2 (channel): F1 is about where the signal sits, F9 is about how far it travels. `single-source` on Fig 11, with the IPCC risk note's requirement to consider "magnitude, reversibility, distributional effects" as world corroboration.

**Refuter:** exhibit a risk communicated at direct contact only that is sufficient for a decision in which the material residual was demonstrably three steps out. If so, F9 fails.

### F10: the framework returns a shape, not a phrasing (gap, recorded honestly)

Fig 9 :32: "you get a kind of thing, never the answer itself"
Fig 13 :134: "Unreachable is a verdict here, not a silence"
Fig 8 :39: "So a search that finds nothing is never a proof of absence."

No figure line dictates the exact words, the exact probability threshold, or the exact confidence label. A genuine re-census over all 13 figures, the Operators and Symbols tables and the formula finds lines governing the channel, the anchor, the slot, the bond, the convention and the provenance, and none governing phrasing. That is a **gap**, not a silence: the framework returns a kind of thing (a communication shape that preserves the ground, the slot and the provenance), never the answer itself. World practice supplies the phrasing (IPCC calibrated language, Kause et al.'s recommendations), but that is secondary and cannot be promoted to a figure verdict.

**Refuter:** produce a verbatim figure line that determines the exact wording of an uncertainty statement, or a ground measurement that settles one phrasing for all recipients. If found, F10 is withdrawn. Until then the gap stands.

## 3. Pre-registered refuter (written before the conclusion)

Required by Seat Map :287: "a falsifier written before the run is a design instrument, not only an honesty device."

The whole shape claim is refuted if any of the following holds:

1. **Channel invariance.** A message is demonstrated whose calibration to the ground is unaffected by pooling of readings, saturation of the metric, or a global aggregation that erases a live slot signal (breaks F1 and F2).
2. **Self-grounding label.** An uncertainty label is demonstrated whose meaning is settled by the ground with no further instrument, while also deciding an outcome without ceasing to be a checkable convention (breaks F3 and F4).
3. **Bare-number sufficiency.** A bare uncertainty number is demonstrated to convey the route, goal and comparison a real decision requires, tested against a ground (breaks F7).
4. **Phrasing rule.** A verbatim figure line is found that dictates the exact wording of an uncertainty statement (breaks F10).

If any fires, the shape is withdrawn or narrowed accordingly. Until one is run, no part of this may be labelled `grounded`.

## 4. Recommendation

1. Report risk per slot, with tails and ranges, not only a global headline (F1). World practice agrees: the AR6 chapter encourages "complete probability distributions or percentile ranges, including quantification of tails of distributions, which are important for risk management."
2. State what would be observed if the risk were as claimed, so the label can be violated and checked (F3). Keep the convention checkable; do not let it decide the outcome (F4).
3. Keep every framing ranked and reversible; a category budgets attention, it does not hand the verdict (F5).
4. Carry provenance with every number; name the evidence pool, not just the estimate (F6).
5. Write down what a correct takeaway would look like before sending, and buy independent checkers in proportion to the cost of being wrong (F8).
6. Enumerate the cascade outward until the residual stops mattering (F9).
7. Do not claim the framework supplies the exact words. Record the phrasing gap and use the institutional venues in `03_public_contact_points.csv` to have the shape checked by people who can refute it (F10).
8. Fig 4 :25 "A recording carried upward looks like knowledge and is a description of one occasion." Send the generator, the shape and its refuter, not a polished conclusion.

## 5. Canonical usage check and retraction / confirmation log

Read after the first four sections, per the standing instruction:

- `FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw"; the framework returns "a shape, not a name"; and "Indiscernibility is not identity."
- `THE_SEAT_MAP_Field_Guide_amended.md`: :163 correlation valence, :171 "an interest in the reading is disqualifying", :287 falsifier as design instrument.

| earlier reading | status after canonical check |
|---|---|
| F1 aggregation erases the signal | **Confirmed and triangulated.** Symbols :43-44 independently defines R per slot; Fig 11 :52 gives the cascade route. Low overlap, so not one witness twice. |
| F2 as "tone tuning is negotiation" | **Narrowed, not retracted.** Fig 2 :35 forbids negotiation for a verdict, but the calibration of a message to an audience is a convention in part. The figure governs the verdict, not the courtesy. Reworded as: tune the channel, never the anchor. |
| F3 "labels are not ground" | **Narrowed.** The README's "shape, not a name" governs a missing primitive, not an uncertainty label. F3 rests on Fig 10 :18, :49 alone for the label case, so it is `single-source` on the figure, with world corroboration. Withdrawn as a triangulation claim. |
| F4 "a convention that decides an outcome" | **Canonically confirmed.** Seat Map :163 states the same rule in the checking arrangement. Different document, different function, so triangulated. |
| F5 filters not witnesses | **Canonically confirmed.** Fig 9 :60 is explicit and the README's barrier-theorem reading supports it. |
| F6 provenance separates content-identical estimates | **Canonically confirmed.** Fig 8 :50-52 plus Fig 9 :27-28. |
| F10 no phrasing rule | **Canonically confirmed as a gap.** The README says the framework returns "a shape, not a name" and stops at the limit of instruments. "Unreachable is a verdict here, not a silence" (Fig 13 :134). |
| Apparent Fig 10 versus IPCC strain | **Not strained after re-census.** Fig 10 :47 governs a convention that silently decides an outcome. The IPCC calibrated language is explicitly traceable and checkable, and the assessment states the confidence "will depend on how the risk is stated." Different objects. Recorded in section 6 as a re-census, not a correction. |
| "This settles how to communicate uncertainty" | **Retracted.** The derivation is a simulation (RSI trap) and returns a shape. No ground reading was taken. It cannot settle the question. |

## 6. Gaps, strains and triangulations

**Gaps.** One genuine gap: no verbatim figure line governs the exact wording, threshold or label. F10 records it as a verdict, not a silence. World practice fills the operational space, but it is secondary and carries no figure authority.

**Strains and their re-census.**
- *Fig 10 :47 versus IPCC calibrated language.* Initially read as a conflict, because IPCC labels routinely accompany policy decisions. Re-census: the figure's object is a convention that decides an outcome without being checkable; IPCC language is built on traceability and explicit evidence/agreement mapping. Different objects, no strain after re-census.
- *Fig 1 per-slot versus aggregated reporting practice.* Re-census: per-slot governs the residual signal; an aggregate headline governs a different quantity (a summary). Not a strain, but the mismatch is exactly F1.
- *Fig 10 :53 versus the question as written.* The prohibition is absolute, so the figure requires checking whether a real communicator can satisfy it. Answered in F4: it can, as a ranked and reversible constraint, not as an absolute. No re-census owed.

**Triangulation ledger.** F1 triangulated (Fig 1, Symbols, Fig 11). F2 triangulated (Fig 10, Fig 2). F3 single-source on the figure (Fig 10) with world corroboration. F4 triangulated (Fig 10, Seat Map). F5 triangulated (Fig 9, world decision science). F6 triangulated (Fig 8, Fig 9). F7 triangulated (Fig 9, Operators, Fig 12). F8 mixed (Fig 5 single-source for binding, Fig 2 for independence). F9 single-source (Fig 11) with world corroboration. F10 gap.

**After re-census: no hidden strains, one recorded gap, and no averaged verdicts.** Findings stay separate by domain; none is averaged across domains or with world sources.
