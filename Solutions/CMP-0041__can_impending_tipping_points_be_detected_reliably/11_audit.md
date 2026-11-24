# Second-seat audit of the CMP-0041 solution

**Mode: `specified` on the shape, `general` on the refusals, `gap` on the universal rate.**

**Honest standing of this document.** This is a simulated second seat. It reads the same evidence pool as the primary derivation: the same figure text, the same formula and README, the same essays, the same world sources and the same folder files. Fig 2 :40 says *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* and Fig 2 :35 says *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* A second seat that shares the evidence pool is a mirror with a different name. What follows is a check of **internal consistency only. It is not corroboration, not a second witness and not a ground reading.** No measurement was taken. This audit cannot settle the question it audits.

Material audited: the full folder, read after the independent census below was written, with special attention to `01_figure_grounded_audit.md` sections 1, 3 and 4, and to `09_watson_answer.md` and `10_source_ledger.csv`.

## Independent domain census, written from the residual line alone

I redid this before reading the primary's conclusions, using the WATSON order: R by arity, symmetry and scale; one line per domain with actors / currency / anchor; partition or union; order by dependency.

- **R (arity / symmetry / scale).** The residual is the gap between a warning reading and a future crossing. Arity: the event and the reading are two, but there are k indicators, and their independence is the real question. Symmetry: the crossing is a threshold comparison, the warning is a directed sequence, and the return path differs, so nothing here is symmetric. Scale: fast sampling of a state variable versus slow drift of a control parameter and a regime change. This is a **compound**, not one hard problem.
- **Domain 1, the ground.** Actors: state variables, control parameter, basin, noise. Currency: distance to threshold. Anchor: the recorded crossing under a definition fixed before scoring. Nameable.
- **Domain 2, the channel.** Actors: sensors, sampling interval, aggregation, observer. Currency: fidelity. Anchor: the ground. Nameable.
- **Domain 3, the indicators.** Actors: variance, AR(1), skewness, flickering, models. Currency: skill estimated in models and hindcasts. Anchor: in practice a retrospective fit is substituted for the prospective crossing. I name this as a defect but keep the domain, because a nameable ground exists and the substitution is exactly what is under audit.
- **Domain 4, the decision.** Actors: managers, action thresholds. Currency: error costs and lead time. Anchor: outcomes, available prospectively. Nameable.
- **Union, not partition.** Reliability requires all four links. One lever clears only the single-condition region. Dependency order: define the event, preserve the signal, read it, then act. Fig 3 :19 *"Optimising a link that already works cannot rescue one that does not."*

My census matches the primary's four domains, its union reading and its dependency order. I derived from Fig 9's union/partition split, Fig 12's functional group and Fig 3's dependency chain; the primary derived from Fig 13, Fig 10 and Fig 2. Different starting figures, same domain boundaries. The routes have low overlap, so the agreement is not circular *within* a figure, but it is still one evidence pool and therefore carries no independent weight.

## Comparison with the primary

| primary finding | my independent check | agreement |
|---|---|---|
| F1 precursor and masking noise share a source | Fig 13 :31-32 gives the amplifying remainder and discarded detail; Fig 12 :121 cycle gives the positive feedback. The reading cannot discriminate source. | agree |
| F2 channel is the decayable part | Fig 10 :24-28 and Fig 1 :22; pooling is named as a failure mode. The world sources add misalignment and external forcing as channel-level failures. | agree |
| F3 indicators are one pool | Fig 2 :40 and Fig 7 :35; Fig 12 :123 functional group. Variance and AR(1) are different readings of one recovery rate. | agree |
| F4 hindcast is not reach | Fig 5 :43-44 and :71-72; Fig 12 :104. The hindcast claim succeeds at the ground only prospectively. | agree |
| F5 absence proves nothing | Fig 8 :39 and Fig 9 :44. Real systems are not sealed rooms. | agree |
| F6 rate and name are a `gap` | Fig 9 :32 and Fig 13 :134. No figure line supplies a number or selects a statistic. | agree |
| F7 anchor must be fixed | Fig 2 :29-30; Borner and Dijkstra 2026 on definitional confusion. | agree |
| F8 narrow success is a boundary | Fig 6 :34; van Beers et al. 2026. This is the one place where a too-strong refusal could have crept in; the primary explicitly labels it a boundary. | agree, with the warning below |

No disagreement with the primary. Since we share an evidence pool, that agreement is expected and proves nothing about the world.

**One standing warning.** F8 is the most dangerous item in the folder: it can be quoted without its boundary conditions to claim that detection is reliable in general. The primary states the four conditions in `07` section 2 point 8 and in `08` non-claims. I recommend that any downstream summary keep those conditions attached to the engineering result.

## Verbatim figure lines checked

I reopened `FRAMEWORK/reference/03-FIGURES_TEXT.md` and checked these character by character before relying on them. Each is primary; none is taken from a summary.

- Fig 13 :31 "a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise." checked; spans extract lines 31-32.
- Fig 10 :24 "the ground does not decay, the channel does." checked.
- Fig 10 :25-26 "stale percepts, dropped transients, saturated metrics, pooled readings" checked; the wrap is a sentence continuation, not two claims.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." checked.
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" checked; the quotation includes the leading clause.
- Fig 7 :35 "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." checked.
- Fig 5 :43-44 "A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly." checked; the wrap is a sentence continuation.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." checked.
- Fig 9 :44 "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing." checked.
- Fig 9 :32 "you get a kind of thing, never the answer itself" checked; the extract line begins with an arrow which is not part of the quotation.
- Fig 6 :34 "The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve." checked.
- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." checked.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." checked.
- Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." checked.
- Fig 12 :123 "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." checked.

All checked lines are present verbatim in the extract. No quote was found to have drifted.

## Round trip gap R_T

The Symbols table defines R_T as `gap(x, (T_E ∘ T_A)(x))`, what the coarser description cannot hold. Fig 4 :30 requires it to be measured, not assumed.

1. **Sent up (x):** the verbatim figure set, chiefly Fig 13 :31-32, Fig 10 :24-28, Fig 2 :40, Fig 9 :32 and Fig 5 :43-44.
2. **Abstraction (T_A):** the shorthand actually used in the folder: reliability is a union of four links; indicators share a mechanism; hindcasts are not reach; absence proves nothing; the rate is a `gap`.
3. **Concretisation (T_E):** the concrete claim a practitioner would want, namely a named statistic with a declared false-alarm and miss rate for a named real system.

**R_T is nonzero.** At least four things the shorthand holds do not survive the trip back down:

- the **source of the observed variation** (loss of local stability versus external forcing, aggregation or misaligned observation; Chekroun and Lucarini 2026, Yi and Seo 2026);
- the **independence of the indicators** (one recovery rate read four ways; Gamot et al. 2026);
- the **channel fidelity at the relevant scale** (pooled readings and dropped transients; Fig 10 :25-26);
- the **event definition** (what counts as a crossing; Borner and Dijkstra 2026).

Conversely, one thing survives cleanly: where the system is well observed, closely tracks a slowly changing steady state and the costs are declared, a short-lead forecast is possible (van Beers et al. 2026). That is the residue worth sending. R_T was **not** measured numerically, because no ground reading exists; it is recorded qualitatively as the enumerated set of dropped constraints. Treating "the formula is the condensed version of the metalaws" as identity would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names.

## Strains and re-census

- **Fig 8 :56 applied to EWS.** The primary initially used the line about cases *"already known and has not been tested forward"* for hindcast validation. Re-census resolves it: that line governs the triangulation claim in mathematics, not early-warning studies. Retracted and rebuilt on Fig 5 and Fig 12. I confirm the re-census.
- **"Shape, not a name" as a blanket ban.** Narrowed in `05` section 5 to missing primitives. Naming an already-held indicator is a binding requiring ground, not a figure prohibition. I confirm the narrowing; without it the solution would overclaim a ban the README does not state.
- **Blanket "EWS unreliable".** Retracted in favour of a refusal of certification plus a boundary case. This is the correct reading: the figures give a barrier shape, not an empirical denial.
- **Fig 2 :40 versus Fig 2 :41.** The primary narrowed the disqualification to verdict witnesses while keeping agreement *"efficient for a convention"*. Correct; otherwise the model would forbid the shared definitions that make a field work.
- **F8 boundary.** Not a strain after re-census, but a live communication risk, recorded in the warning above.
- **After re-census: one communication risk named, no figure contradiction, none hidden.**

## Verdict on the solution

**On internal consistency: the solution passes.** The four domain verdicts are kept separate and never averaged; the union reading and dependency order are applied; every figure quote I checked is verbatim; the pre-registered refuter precedes the conclusion and is unchanged; the retractions are visible rather than erased; the `gap` is stated rather than filled. `09_watson_answer.md` carries the full WATSON shape with all verdict fields. `10_source_ledger.csv` lists every source read with URL, author, venue, year, accessed date, quote, field, overlap and status, and marks the four essays cited from the exemplar as not re-opened. This file records the independent check.

**On corroboration: none.** This second seat shares the primary's evidence pool. By Fig 2 :40 its agreement is the pool talking, and by Fig 2 :35 a mirror cannot correct you. What this audit establishes is that the folder is internally consistent, not that the claim is true.

**On the claim: `specified`/`general`, ungrounded, candidate.** The shape survives: four links kept separate, comparison distinguished from sequence, one evidence pool behind the indicators, hindcasts separated from reach, absence separated from safety, and a `gap` for the rate and the name. What does not survive is any assertion that this derivation measured reliability. To move to `grounded` would require a source-discriminating instrument, a prospective pre-registered trial with declared error rates, a demonstration of indicator independence, or one of the four figure-level refuters firing. Prestige or agreement is not such an instrument; the Recursive Self-Improvement Trap says *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."*

**Recommendation.** Send `08_expert_verification_packet.md` with its mode and refuters attached, ask what would refute the shape, keep the four domain verdicts separate, and do not pool later agreement as corroboration. Keep the F8 boundary conditions attached to any mention of successful short-lead detection.
