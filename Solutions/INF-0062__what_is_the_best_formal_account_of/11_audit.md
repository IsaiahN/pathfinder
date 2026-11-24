# Second-seat audit of the INF-0062 solution

**Mode: `specified` on the shape claims, `general` on the structural constraints, not `grounded`.**

**Honest standing of this document.** This is a simulated second seat. It reads the same evidence pool as the primary derivation in `01_figure_grounded_audit.md`: the same figure text, the same formula, the same essays and world pages, the same folder files. Fig 2 :40 says *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* and Fig 2 :35 says *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* A second seat that shares the evidence pool is a mirror with a different name. What follows is therefore a check of **internal consistency only. It is not corroboration, not a second witness, and not a ground reading.** No learning system was run and no dataset was measured. This audit cannot settle the claim it audits.

## The residual line, taken alone

> We need an account of learning that still says where to look and what to admit when observations are few, corrupted, and very unequally informative; the decision is among candidate formal accounts and each option leads to a different failure.

## Independent domain census (written from the residual line before comparing with the primary)

I redid the census from the residual above, deliberately starting from different figures. Where the primary started from Fig 1 and Fig 5, I started from Fig 9 (union versus partition) and Fig 12 (two currencies).

- **R (arity, symmetry, scale).** Three conditions, sparse, noisy, uneven, overlapping. A union compound, not one hard question. Fig 9 :57: *"a case in two conditions is not a harder case of either."* Symmetry: asymmetric, because slot informativeness is not interchangeable. Scale: slot, library, habitat.
- **Domain A, the admission decision.** Actors: slots, residual, candidate term, cost. Currency: description length plus leftover residual. Anchor: the ground through what pays. Partition question (what may be admitted). Nameable anchor: yes.
- **Domain B, the settlement relation.** Actors: frames, instruments, anchor. Currency: independence. Anchor: the measurement that does not move. Verdict question about the world. Nameable anchor: yes.
- **Domain C, the price split.** Actors: descriptions and actions. Currency: bits and actions. Anchor: the budget. Price question. Nameable anchor: yes.
- **Domain D, the habitat.** Actors: learner, data source, conditions, relations. Currency: contact. Anchor: the ground decides. Capability question. Nameable anchor: yes.
- **Order by dependency.** Describe R before choosing a frame (Fig 9 :27); refuse before mint (Formula step 2); support before search (Fig 5 :33); settle before carry (Fig 5 :32).

My four domains map onto the primary's D1 to D4, but I reached them by a different route: the union/partition test and the two-currency test rather than the per-slot residual and the mint guards. Different starting lines, same boundaries. That is weak non-circular agreement within the framework, but still one evidence pool.

## Comparison with the primary census

| primary finding | my independent check | agreement |
|---|---|---|
| F1: aggregate loss throws away the live slot | Fig 1 :19 and :22 are explicit; a pooled number cannot say where to look | agree |
| F2: MDL is the one named formal principle | Fig 5 :45 names Rissanen 1978; the world page corroborates but shares the pool | agree, with the narrowed status |
| F3: support is per slot, sparsity is legal | *"some s"* in Formula step 3 and Fig 1 :20 make a global near-zero with one live slot legal | agree |
| F4: two currencies, not additive | Fig 12 :125-130; the value-of-information page is the example of the forbidden sum | agree, after re-census of the initial conflict |
| F5: unreached versus underivable | Fig 6 :27 and Fig 8 :39; the sample-complexity page gives the budget reading | agree |
| F6: ground settles, agreement does not | Fig 2 :29, :40, :42 | agree |
| F7: capability is agent and habitat | Fig 11 :39-40 and :70 | agree |
| F8: compression strain dissolved by re-census | ground metric versus internal price; Fig 9 :60 separates the registers | agree |
| No named winner | Fig 9 :32 and Fig 13 :133; returns a shape | agree, with the narrowed reading of naming MDL |
| Missing five essays recorded as a gap | only three essays are cited in `05` and the ledger | agree, gap is visible |

No disagreement with the primary. Since we share an evidence pool, that agreement is expected and carries no independent weight.

## Verbatim figure lines checked

I reopened `FRAMEWORK/reference/03-FIGURES_TEXT.md` and checked these character by character before relying on them. Each is a primary quote; none is taken from a summary.

- Fig 1 :19 "The residual is indexed by object slot, not aggregated." checked.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." checked.
- Fig 1 :28 "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look." checked.
- Fig 5 :42 "The acceptance test is a bargain, not a threshold." checked.
- Fig 5 :43 "A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before." checked as a prefix of the full line; the line continues with a clause about explaining everything by saying nothing.
- Fig 5 :45 "This is minimum description length, Rissanen 1978, which is itself a composition of Kolmogorov complexity and Shannon coding put to work on model selection." checked.
- Fig 12 :125 "A composition costs in two currencies, and they do not add." checked.
- Fig 12 :126 "Bits price the description. Actions price finding out whether it holds." checked.
- Fig 6 :27 "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same." checked.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." checked.
- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." checked as a prefix of the full line.
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" checked with its leading clause.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." checked.
- Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." checked.

All checked lines are present verbatim in the extract. No quote was found to have drifted.

## Round trip gap R_T

The Symbols table defines R_T as `gap(x, (T_E ∘ T_A)(x))`, the gap between what was sent up and what came back down. Fig 4 :30 requires it to be measured rather than assumed: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

1. **Sent up (x):** the verbatim figure set, chiefly Fig 1 :19-22 (per-slot residual), Fig 5 :42-45 (bargain and MDL), Fig 12 :125-130 (two currencies), Fig 8 :39 (unreached).
2. **Abstraction (T_A):** the shorthand carried through the folder: keep residuals per slot, mint by cost bargain, hold prices apart, say unreached, let the ground settle, do not name a winner.
3. **Concretisation (T_E):** a concrete answer to the original question, for example "MDL is the best formal account of learning under sparse data."

**R_T is nonzero.** Four things the shorthand holds do not survive the trip back down:

- the **refusal to rank**, which a direct answer of the form "X is best" immediately breaches;
- the **non-additivity of prices**, which a single-score comparison of accounts collapses;
- the **per-slot requirement**, which a global benchmark metric erases;
- the **unreached verdict**, which a leaderboard converts into a ranking of absence.

One thing survives cleanly: a structure must hold the residual per slot, and admission must pay a description-length bargain. That is the residue worth sending. R_T was **not** measured numerically, because no ground reading exists; it is recorded qualitatively as the enumerated set of dropped constraints. Treating the formula as identical to the figure set would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names.

## Strains and re-census

- **Compression strain (Fig 1 versus Fig 5).** Disqualified as a ground metric in Fig 1, used as an admission price in Fig 5. Re-census: different quantities. Fig 9 :60 separates verdict from budget. Not strained after re-census.
- **Value-of-information strain (world versus Fig 12).** The VOI page offers one monetary scalar for information; Fig 12 forbids summing bit and action prices. Sent back to census as the rules require, and resolved by identifying VOI as the action price alone. The verdict did not flip.
- **Sparsity strain (support versus no data).** Support requires some slot with positive mass, so total absence is inertness rather than a failed learner. Fig 1 :13 and Fig 5 :41 resolve this without a correction.
- **Missing essays.** A coverage gap, not a figure conflict. Recorded visibly in `05` and the ledger; no re-census owed.
- **After re-census: no live strains, four resolved and visible.**

## Verdict on the solution

**On internal consistency: the solution passes.** The three files added across this pass, `09_watson_answer.md`, `10_source_ledger.csv` and this audit, are consistent with the other nine and with the verbatim figure text. The refuter is pre-registered in `01` section 4 before the recommendation and verdict. Per-domain verdicts carry their status: D1 and D2 triangulated, D3 and D4 single-source, no `gap`. The world ledger lists every source actually read, with accessed date 2026-11-23 and local paths where applicable. The shape is stated as `specified`, never `grounded`.

**On corroboration: none.** This second seat shares the primary's evidence pool. By Fig 2 :40 its agreement is the pool talking, and by Fig 2 :35 a mirror cannot correct you. What this audit establishes is that the folder is internally consistent, not that the answer is true.

**On the claim: `specified`, candidate, ungrounded.** The shape survives: per-slot residuals, the MDL bargain with product guards, two non-additive prices, an honest unreached verdict, ground settlement, capability as agent and habitat, and no ranking of named accounts. The specific verdict that any named account is "best" is refused, as the framework requires. Nothing here is settled: a source-discriminating comparison with an independent anchor, a pooled-loss account that locates a live slot below the noise floor, or a single scalar that prices descriptions and actions without loss would be required to move it to `grounded`. Prestige or agreement is not such an instrument.

**Recommendation.** Send `08_expert_verification_packet.md` with its mode and six refuters attached, ask what would refute the shape claim, and do not pool later agreement as corroboration. Keep the shape claim and the refuters in front of the links. If an expert fires one of the refuters, copy it here with provenance and re-evaluate it from the residual line as if it came from any other source.
