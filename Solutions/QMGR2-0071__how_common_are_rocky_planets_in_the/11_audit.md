# Second-seat audit of the QMGR2-0071 solution

**Mode: `general` on the structural rule, `specified` on the shape. Not `grounded`.**

**Honest standing of this document.** This is a simulated second seat. It reads the same evidence pool as the primary derivation in `01_figure_grounded_audit.md`: the same figure text, the same canonical README, the same opened world sources, the same folder files. Fig 2 :40 says *"agreement about the world is worthless when the agreeing frames share an evidence pool"* and Fig 2 :35 says *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* A second seat that shares the evidence pool is a mirror with a different name. What follows is a check of **internal consistency only. It is not corroboration, not a second witness, and not a ground reading.** No measurement was taken.

The material audited is the residual and domain census in `01` §0 to §1, read together with the findings F1 to F8, the retraction log in §5, and the derived shape in `06`, `07`, `08` and `09`.

## Independent domain census (from the residual line alone)

I redid the census before relying on the primary's conclusions, using the WATSON order: R by arity, symmetry and scale; one line per domain with actors, currency and anchor; partition or union; order by dependency.

- **R (arity / symmetry / scale).** Arity: one rate per star-kind slot, because the question says "different kinds of stars". Symmetry: a rate compares planets to stars under a completeness correction; it is not a symmetric join of two star kinds, and swapping operands is meaningless. Scale: stellar-population scale. The three conditions (rocky, HZ, host kind) are a union; the host kinds are a partition. This matches the primary's census, but I reached it from Fig 9 :54 (union) and Fig 13 :39 (overlap) rather than from the primary's starting point of Fig 1 :19.
- **Domain 1, survey and instrument.** Actors: Kepler DR25 pipeline, TESS, HARPS radial velocity, completeness, reliability. Currency: detections per star. Anchor: the instrument and the public catalog, which can change under Gaia revision. Question type: partition by survey, union with definitions.
- **Domain 2, stellar demographics.** Actors: FGK, early M, mid to late M, Gaia-revised stellar parameters. Currency: stars per spectral bin. Anchor: the catalog. This is the slot index. Partition.
- **Domain 3, habitability definition.** Actors: HZ models, rocky radius bound. Currency: boundaries. Anchor: climate models and mass-radius relation. Union with D1 and D2.
- **Domain 4, verification and mission design.** Actors: ExoPAG, SAG13, HWO planners, reviewers. Currency: agreement and yield estimates. Anchor: the future detection of actual HZ rocky planets, explicitly not agreement. Union consumer.

Order by dependency: definitions first (D3), star-kind enumeration second (D2), instrument and completeness third (D1), provenance and comparison last (D4). Refuse the aggregate before minting a number (Fig 9 :27-28 describe before looking). Settle a cell with the ground before composing a trend over cells (Fig 12 :104's settled-molecule rule applied by analogy, though the figures do not require a trend here).

My four domains match the primary's four. Different starting figures (mine Fig 9 and Fig 13, the primary's Fig 1), same boundaries. That is low overlap between **routes**, not between evidence pools: both routes end at the same verbatim figure text. The agreement is internal consistency, not an independent witness.

## Comparison with the primary

| primary finding | my independent check | agreement |
|---|---|---|
| F1 slot index governs | Fig 1 :19, :22 require per-slot indexing; Fig 13 :39 and the review's population-dependent definitions point the same way | agree, route differs |
| F2 number is a `gap` from the figures | the six-term substrate and bonds contain no completeness map or climate model; step 7 OUTWARD is the correct instruction | agree |
| F3 anchor is measurement, not consensus | the review's "no convergence after 2019" is exactly the chain failure Fig 7 :12-13 describes | agree |
| F4 zero is not absence | Bergsten et al. 2023 keep a forward-model rate with zero conservative detections; Fig 8 :39 governs | agree |
| F5 shape not a name | the canonical phrase governs a missing thing; here that thing is a measurement, so the table's form is returned and no cell is filled | agree with the narrowed scope |
| F6 overlapping bins | Gaia revisions moved hosts across the M boundary, so 2015 and 2023 M samples are not the same slot; Fig 13 :39 | agree |
| F7 union unbundled | radius floor change alone moves η⊕ by more than a factor of 2, so the conditions are not interchangeable | agree |
| F8 independence bought | NTRS presentation gives a real design cost; Fig 2 :42 | agree; cost is single-source |
| Retraction of the 0.24-as-figure-result reading | correct: 0.24 is an engineering baseline, a filter under Fig 9 :60 | agree |
| Retraction of the M-richer trend | correct: Bergsten et al. 2023 report no evidence for an increase | agree |
| Apparent strains dissolved | budget filter versus verdict, and moving instrument versus moving anchor, are different quantities | agree |

No disagreement with the primary. Because we share an evidence pool, that agreement carries no independent weight.

## Verbatim figure lines checked

I reopened `FRAMEWORK/reference/03-FIGURES_TEXT.md` and checked these character by character before relying on them. Each is a primary quote; none is taken from a summary.

- Fig 1 :19 "The residual is indexed by object slot, not aggregated." checked.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." checked.
- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." checked; this is the opening sentence of the longer line, which continues "A measurement, an experiment, a counter, a market, a patient outcome."
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." checked.
- Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool" checked; the full line begins "disqualifying for a verdict:".
- Fig 2 :42 "Buy independence in proportion to the cost of being wrong." checked.
- Fig 6 :33 "Nobody specified a telescope from an account of Mars." checked.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." checked.
- Fig 9 :32 "you get a kind of thing, never the answer itself" checked.
- Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." checked.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." checked.
- Fig 13 :39 "Six members that overlapped would be fewer members wearing six names." checked; it is the second sentence of the line, preceded by "makes their agreement mean anything."
- Fig 13 :134 "Unreachable is a verdict here, not a silence" checked; the source line ends with a comma after "silence", so the quotation stops before it.
- Fig 11 :48 "You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual." checked.
- Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." checked.

All checked lines are present verbatim in the extract. No quote was found to have drifted.

## Round trip gap R_T

The Symbols table defines R_T as the gap between what was sent up and what came back down, `gap(x, (T_E ∘ T_A)(x))`, measuring what the coarser description cannot hold. Fig 4 :30 requires it to be measured rather than assumed. I ran the round trip on the condensation this folder actually uses.

1. **Sent up (x):** the verbatim figure set, chiefly Fig 1 :19, :22 (per-slot residual), Fig 9 :54 (union), Fig 8 :39 (non-detection), Fig 2 :29, :40 (anchor and shared pool), Fig 13 :134 (`gap` verdict).
2. **Abstraction (T_A):** the shorthand carried in `07` and `09`: report a per-star-kind rate table, unbundle the conditions, keep non-detections distinct, import the numbers.
3. **Concretisation (T_E):** a concrete cell in the table, for example an M-dwarf conservative-HZ rate of 8.58 (+17.94/-8.22) percent from Bergsten et al. 2023.

**R_T is nonzero.** Three things the shorthand holds do not survive the trip back down without an explicit record:

- the **catalog epoch of the star-kind row**: the 2015 M-dwarf sample and the 2023 one contain different stars after Gaia revisions, so a cell quoted without its epoch is a different object from the one the shorthand describes;
- the **definition of "rocky" and of the HZ**: changing the radius floor moves the number by more than a factor of 2, so a bare rate loses the condition that produced it;
- the **independence status of the measurement**: two estimates from one Kepler catalog are one evidence pool, so the shorthand's word "measurement" can be misread as two witnesses.

One thing survives cleanly: a rate must be indexed by star kind and the number must come from the ground, not from consensus. That is the residue worth sending. R_T was **not** measured numerically, because no ground reading exists in this derivation; it is recorded qualitatively as the enumerated set of dropped constraints. Treating "the formula is the condensed version of the figures" as identity would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names.

## Strains and re-census

- **Aggregate versus per-slot.** The primary initially risked reading a single mission-planning value as the answer. Re-census dissolves it: the planning value is a filter for the budget (Fig 9 :60), not a verdict about a slot. Different quantities, no strain.
- **Moving anchor versus moving instrument.** Fig 2 :29 requires an anchor that does not move. Gaia revisions moved the star-kind definitions. Re-census: what moved was the instrument (the catalog), which is exactly what an anchor-reading process is allowed to update. The ground did not move because a frame pushed on it. No strain.
- **M-dwarf near-invariance.** Bergsten et al. 2023 find no evidence for an increase from FGK to M, which sits close to the falsifier for Q2 of `06` (rate invariant under the qualifier). This is **not fired**, because the uncertainties are large and mid-to-late M may differ. It is a live world-facing question, not a figure strain. Recorded, not smoothed.
- **"Shape, not a name" scope.** The primary narrowed this correctly in §5: the phrase governs a missing thing, which here is a measurement, not a primitive in Γ. Naming a star kind is enumeration from a catalog (Fig 11 :48), not the invention of a primitive. No correction owed.
- **After re-census: no figure strain hidden; one live world-facing falsifier.**

## Verdict on the solution

**On internal consistency: the solution passes.** The twelve files agree with one another and with the verbatim figure text. The retraction log is applied rather than ignored: the 0.24-as-result reading, the M-richer trend, the zero-as-absence reading and the unordered-list framing are all withdrawn and none is used in the findings. F1 to F8 carry verbatim figure lines and refuters. `09_watson_answer.md` carries the full WATSON shape with cost if wrong, undoable and reversed by all stated. `10_source_ledger.csv` records every source actually read, with honest notes where a full-text fetch failed (the NASA PDF and the A&A article page). This file records the independent check.

**On corroboration: none.** This second seat shares the primary's evidence pool. By Fig 2 :40 its agreement is the pool talking, and by Fig 2 :35 a mirror cannot correct you. What this audit establishes is that the folder is internally consistent, not that the shape is true or the numbers are right.

**On the claim: `general`/`specified`, ungrounded, candidate.** The shape survives: a per-star-kind rate table, conditions unbundled, non-detections kept distinct, the anchor being measurement rather than consensus, the values imported with their credible intervals. The number is a `gap` from the figures and remains a `gap` there. The world literature does not currently converge, and the updated M-versus-FGK result does not license a richness ranking. Nothing here is settled: more in-regime detections, stable star-kind definitions across catalog epochs, and an instrument that separates born-rocky planets from stripped cores would be required to move a cell toward `grounded`. Agreement and prestige are not such instruments.

**Recommendation.** Send `08_expert_verification_packet.md`, not this audit. Ask what would refute the shape and which η⊕ definition the recipient uses. Record the stage-1 verdict before showing any source. Do not pool later agreement as corroboration.
