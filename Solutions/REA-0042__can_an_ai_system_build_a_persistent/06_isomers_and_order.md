# Record and reach: the supporting derivation, order, and analogues

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).

## RESIDUAL

The main audit splits the question into a monotone record (D1) and a fallible reach (D2), and names an open discriminator (D4). Three supporting questions are owed:

1. Are record and reach genuinely two quantities, or two names for one?
2. What is the dependency order among refuse, mint, settle and maintain-channel?
3. Do the analogues from other fields corroborate the split, and where do they stop?

## DOMAIN CENSUS

Atoms held: a library Γ, terms φ, a belief b, a residual R per object slot s, an observation o′, a ground, a channel, and a maintainer seat. Operators held: seven binary bonds and one unary negation. No new primitive is available without import. Record and reach are not atoms; they are derived quantities of the same library under two readings.

## DERIVATION

### Q1 - Are record and reach two quantities? YES

- Fig 6 :42: **"What is recorded only grows. What is reachable is derived, and it can fall."**
- Fig 6 :43: *"So the closure and the reach are two quantities: one monotone, one not."* (paraphrase compressed; the verbatim governing line is :42, which states both behaviours).
- Operators table and Seat Map law: *"What is recorded only grows; what is reachable is derived and can fall. A refutation adds a term that refuses; it removes nothing."* (Seat Map :188, local document).
- ⇒ A system can add a refusing term and thereby **lose** reach while its record **grows**. The two move in opposite directions under the same operation. One quantity cannot do that.
- **Falsifier, written before the run:** exhibit a system in which adding a refusal leaves the reach unchanged or increases it while the record grows. That collapses the distinction and breaks Fig 6 :42.
- **Verdict: `triangulated`** across Fig 6 :42 and the Seat Map law (different documents, low overlap).

### Q2 - What order do the operations run in?

- THE_FORMULA step 2 routes R into five bins. The first four sort what is **missing**; the fifth, REFUTED, sorts what is **wrong**. The formula states: *"the first four sort R by what is MISSING; the fifth by what is WRONG, and no arrangement of the other four reaches it."*
- ⇒ Refuse before mint. A system that tries to solve a false held term by composing more terms builds on the wrong substrate. This is the dependency order in Fig 3 :20: *"The chain is ordered by dependency, not by importance."*
- THE_FORMULA step 5: *"Settling is necessary for a term to be composed over and it is not sufficient."* ⇒ Settle before compose, and do not infer reach from library size.
- THE_FORMULA step 8: *"Nothing here maintains the ground. The ground does not decay; the channel does, and that is a seat's office, not the loop's."* ⇒ Maintain channel upstream of any claim that the model updated, because a claim read through a dead channel is not a verdict (F4).
- **Falsifier:** show a system that correctly refuses a held term only after it has minted a replacement composition for that term, with both steps settled against the same ground. That would mean the four "missing" bins reach the fifth, which the formula denies.
- **Verdict: `triangulated`** across THE_FORMULA steps 2, 5 and 8 and Fig 3 :20.

### Q3 - Is persistence an isomer of correctness? NO

- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- A persisted record and a correct record can share every atom. What differs is whether the term in the record still has standing to be composed over, which is a fact about the arrangement of refusals, not about the atom list. By Fig 12's definition they are **isomers**: same atoms, different bonded arrangement, different behaviour.
- A weaker reading is available. If one treats only the atom list as the formula, persistence and correctness are *"different substances whose notation cannot tell them apart"* (Fig 12 :95, paraphrase; the governing line is :94, *"The arrangement is the substance."*). That is exactly the failure mode: a model can look correct as a list of stored facts and behave wrongly.
- **Falsifier:** show that two records with the same atoms and different refusal arrangements behave identically under every ground reading. That breaks the isomer claim and leaves the weaker flat-form reading standing.
- **Verdict: `single-source`** for the figure definition (Fig 12 :117), with the physics-facing or field-facing check still unmeasured.

### Q4 - What do the analogues corroborate, and where do they stop?

| analogue | field | what it corroborates | where it stops |
|---|---|---|---|
| Concept drift | ML / data science | *"concept drift or drift is an evolution of data that invalidates the data model"* - circumstances change and a fixed model decays; this is the user's "as circumstances change" in effect terms | distinguishes drift, concept evolution and delayed labels but does **not** decide Fig 6 :47's three-way split from inside a frame |
| Digital twin | engineering | *"a digital twin is distinguished from an ordinary simulation in that it continuously uses real data from its physical counterpart to dynamically synchronize with the real system"* - persistence plus updating is defined by the channel | a twin has a designer and a benchmark; nothing here licenses importing that seat into an arbitrary AI system without provenance |
| Catastrophic forgetting | continual learning | *"maintain expertise on tasks which they have not experienced for a long time"* - the two conditions are in genuine tension and the tension is engineerable | mitigation is a weight-level result, not a derivation of the record/reach split; it does not touch negation |
| Predictive coding | neuroscience | *"the brain is constantly generating and updating a 'mental model' of the environment"* - prediction error as the update signal, matching R | the source states *"there is no consensus on how the brain most likely implements predictive coding"*, so it cannot settle a mechanism |
| Cognitive map | animal behaviour | Tolman's 1948 representation supports novel shortcuts, a persistent model in effect terms | the source's criticism section notes simpler explanations for several results; behaviour alone does not establish the representation |
| World-model benchmarks | AI evaluation | *"consistency over minutes of interaction, memory of off-screen objects, and response to user actions"* - the field already tests persistence and updating separately | a passing benchmark is a filter for the budget, *"Use filters for the budget and witnesses for the verdict"* (Fig 9 :60), not a verdict |

- **Verdict: `triangulated` at the level of effect (five low-overlap fields agree the two conditions pull apart), `single-source` at the level of the figure mechanism (only the figures supply negation, the channel office and the open discriminator).** Agreement from a shared evidence pool is one witness; the AI sources overlap heavily and are counted once.

## CONCLUSION

Record and reach are two quantities, one monotone and one not (Q1). The dependency order is maintain channel, refuse, mint, settle, compose (Q2). A persisted record and a correct record are isomers: same atoms, different refusal arrangement, different behaviour (Q3). Five low-overlap fields corroborate the effect but none supplies the mechanism (Q4).

The supporting derivation therefore rescues what is checkable in the question without claiming a new architecture: **a persistent updating model is a growing record with a fallible reach, revised by refusals, kept in contact with a ground by an outside office. The system cannot certify the contact itself, and whether the change was in the world or in its own terms remains open at Fig 6 :47.**

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the Operators table, THE_FORMULA and the Seat Map, all read 2026-11-23. World analogues were fetched and are listed in `10_source_ledger.csv`. No measurement was used.

## FIGURE CENSUS

Fig 3 (dependency order), Fig 4 (lossy transform and round trip), Fig 6 (record versus reach, open discriminator), Fig 8 (no proof of absence from inside, residual first, filters), Fig 9 (union, describe first, filters for budget), Fig 10 (channel, verifier non-access), Fig 11 (capability is agent-and-habitat), Fig 12 (arrangement is the substance, isomer, refusal), Operators table (unary negation), THE_FORMULA (steps 2, 5, 8). Strains after re-census: **none**. The only open item is Fig 6 :47, recorded as a gap and not hidden.
