# Second-seat audit of the REA-0056 solution

**Mode: `specified`, not `grounded`.**

**Honest standing of this document.** This is a simulated second seat. It reads the same evidence pool as the primary derivation in `01_figure_grounded_audit.md`: the same figure text, the same formula and seat map, the same eight essays, the same public sources, the same folder files. Fig 2 :40 says "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" and Fig 2 :35 says "Alignment is triangulation, not negotiation. A mirror cannot correct you." A second seat that shares the evidence pool is a mirror with a different name. What follows is therefore a check of **internal consistency only. It is not corroboration, not a second witness, and not a ground reading.** No experiment was run. This audit cannot settle the claim it audits.

The material audited is the residual line (reasoning.txt 69), the domain census, the retraction table and canonical usage check in `01_figure_grounded_audit.md`, read together with `05`, `06`, `07`, `08`, `09` and the new `10_source_ledger.csv`.

## Independent domain census

I redid the census before reading the primary's conclusions, using the WATSON order: R by arity, symmetry and scale; one line per domain with actors, currency and anchor; partition or union; order by dependency. I deliberately started from different figures than the primary to test the route: Fig 9 (union and partition) and Fig 3 (dependency) rather than Fig 2 (anchor) and Fig 5 (direction).

- **R (arity / symmetry / scale).** The residual is the gap between the objective-selected action and the permitted action. Arity: at least two, usually many clauses and many constraints, so a **union compound** (Fig 9 :4-5 "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."). Symmetry: ordered, because a violation is a threshold crossing, not a symmetric join. Scale: first order per action, second order across a society and its subagents.
- **Domain 1, the acting loop.** Actors: agent, Γ, belief, action, observation. Currency: per-slot residual. Anchor: a reward ground for the mechanism, none for the conflict until the objective is bound. Question type: partition, mechanism check.
- **Domain 2, the instruction or constraint.** Actors: issuer, institution, affected parties. Currency: judgment and compliance. Anchor: human judgment for an instruction constitutively about people; a **union of anchors** for a plural social setting. Question type: partition for one instruction, union for a social setting.
- **Domain 3, the checking seat.** Actors: monitor, auditor, reviewer, board. Currency: conflict verdicts. Anchor: the ground, never agreement. Must be outside the graded frame and range against the same unmoved landmark separately. Question type: partition. In this simulated run its independence is zero.

Order by dependency: describe the residual first (Fig 9 :27-28); refuse before mint (Formula step 2); bind the objective before it can accrue residual (Formula "Direction"); settle the first-order case before composing over it (Fig 12 :104); bracket the round trip (Fig 4 :30).

My census matches the primary's three domains, its union reading, and its dependency order. Where the primary derived Domain 3 from Fig 10 (verifier non-access) and Domain 2 from Fig 2 (anchor), I derived Domain 3 from Fig 7 :35 "A room's agreement is variation, not a verdict" and Domain 2 from Fig 9's union/partition split. Different starting figures, same domain boundaries: low overlap between routes, so the agreement is weak but not circular within the framework. It is still one evidence pool.

## Comparison with primary

| primary finding | my independent check | agreement |
|---|---|---|
| F1, inner loop cannot see its objective | Fig 5 :62 plus Fig 8 :34; the preference is unbound and the frame cannot reach its metaframe | agree, and I add Fig 3 :10 as a third route: the objective link is where the instrument is missing |
| F2, same-frame monitor is a mirror | Fig 2 :35, Fig 10 :42, Fig 2 :40; a shared pool makes its verdict the pool talking | agree |
| F3, anchor must not update | Fig 2 :33-34; coherent drift is exactly the specification-gaming geometry | agree |
| F4, human judgment anchor, union split for social constraints | Fig 2 :36-37 and Fig 9 :4-5; different objects after re-census | agree with the narrowed form |
| F5, per slot not global | Fig 1 :19, :13; Osei's exact gap signal is the per-slot form | agree, single-source in figures |
| F6, detection is a refusal | Fig 5 :51, :53 and Fig 12 :112; the fifth kind is refuted | agree |
| F7, outside detector and link-3 failure | Fig 10 :42, Fig 3 :10, :27, Fig 11 :52 and :70; subagent cascade is second order | agree |
| F8, capability is agent-and-habitat | Fig 11 :39-40; agent-only improvement cannot change contact | agree, single-source in figures |
| F9, shape not name, honest stop | Fig 9 :32, Fig 8 :39, Fig 13 :134, Fig 4 :30 | agree |

No disagreement with the primary. Since we share an evidence pool, that agreement is expected and carries no independent weight.

## Verbatim figure lines checked

I reopened `FRAMEWORK/reference/03-FIGURES_TEXT.md` and checked these lines character by character before relying on them. Each is a primary quote; none is taken from a summary.

- Fig 1 :19 "The residual is indexed by object slot, not aggregated." checked.
- Fig 1 :13 "a global R near zero with one live slot residual is a legal state" checked.
- Fig 2 :33 "The anchor must not update." checked.
- Fig 2 :34 "If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices." checked.
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." checked.
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" checked; the leading clause must be kept if presented as the whole line.
- Fig 5 :62 "A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather than as a term. It is not bound, it predicts nothing, and it accrues no residual, so nothing here can see it." checked; the sentence wraps across two extracted lines and reads continuously.
- Fig 5 :63 "Every check above runs on the MECHANISM and none runs on the DIRECTION OF THE QUESTION" checked as a truncation before the em dash in the source.
- Fig 8 :34 "A frame cannot reach its own metaframe. Godel's second theorem: a consistent system cannot prove its own consistency." checked; the source spells Godel without an umlaut.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." checked.
- Fig 9 :4-5 "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." checked.
- Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." checked.
- Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." checked.
- Fig 12 :112 "A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond." checked.
- Fig 13 :134 "Unreachable is a verdict here, not a silence" checked; the source line ends with a comma, so the quote is a truncation, not a different sentence.

All checked lines are present verbatim in the extract. No quote was found to have drifted. No figure line was quoted from a summary.

## Round trip gap R_T

The Symbols table defines R_T as the gap between what was sent up and what came back down, `gap(x, (T_E ∘ T_A)(x))`, measuring what the coarser description cannot hold. Fig 4 :30 requires it to be measured rather than assumed. I ran the round trip on the condensation the folder actually uses.

1. **Sent up (x):** the verbatim figure set, chiefly Fig 2 :33-35 (anchor and drift), Fig 5 :62-63 (direction limit), Fig 8 :34 (metaframe), Fig 10 :42 (verifier non-access), Fig 1 :19 (per slot).
2. **Abstraction (T_A):** the four conditions carried in `07` and `08`: non-updating anchor, bound objective, outside detector, per-clause refusal.
3. **Concretisation (T_E):** a concrete product claim of the form "model X with guardrail Y recognizes objective conflicts."

**R_T is nonzero.** Three things the shorthand holds do not survive the trip back down:

- the **operand type of ⋛** over a bound objective. The Operators table restricts ⋛ to two quantities; at the level where the objective is bound as an atom it is unclear whether that atom counts as a quantity. Fig 12 :104 permits the demotion to atom, not the type promotion.
- the **independence of the detector**, which the shorthand lists as "outside" but which in practice collapses when the monitor shares preference data or a reward proxy with the actor. Fig 2 :40 prices that collapse; the word "outside" does not preserve it.
- the **per-slot requirement**, which the shorthand compresses into "per clause" but which a scalar alignment dashboard routinely drops. Fig 1 :13 makes the drop invisible from inside.

Conversely, one thing survives cleanly: an instruction that is allowed to update toward the objective is not an anchor, and a monitor drawn from the actor's own evidence pool is a mirror. That residue is worth sending. R_T was **not** measured numerically, because no ground reading exists; it is recorded qualitatively as the enumerated set of dropped constraints. Treating "the formula is the condensed version of the metalaws" as identity would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names. The honest form is a lossy condensation with a measured gap, which is what `09_watson_answer.md` states.

## Strains and re-census

- **Fig 2 :37 versus Fig 9 :4-5.** The primary initially risked treating human judgment as a single anchor for the whole question. Re-census resolves it: Fig 2 governs a single constitutive question; Fig 9 governs a multi-condition union. Different objects, as the canonical README requires.
- **Fig 8 :34 versus Fig 10 :36.** Apparent tension between "a frame cannot reach its own metaframe" and a seat that stands in a second frame. Re-census resolves it: Fig 8 bars self-reach from inside a closure; Fig 10 describes a seat in a frame whose closure differs. Compatible, not strained.
- **Nayebi (2025) versus the direction limit.** A would-be conflict from a different field. Re-census resolves it: the positive corrigibility guarantee rests on structurally separate heads, an externally fixed off-switch and a finite decidable island, which are the figure conditions. Corroboration, not a flip of the verdict.
- **Operand type of ⋛ at the level of a bound objective.** Still live. Fig 12 :104 and the Operators table do not settle whether an atom serving as a quantity at one level counts as a quantity at the comparison level. I record this as a strain, not a correction. `06_isomers_and_order.md` and `08_expert_verification_packet.md` do the same.
- **After re-census: one strain, named, none hidden.**

## Verdict on the solution

**On internal consistency: the solution passes.** The three files added in this pass are consistent with the existing eight and with the verbatim figure text. The retraction table is applied rather than ignored: the absolute "cannot recognize" is narrowed to a conditional, human judgment is narrowed to a constitutive question with a union split, the detection gap is reclassified as a refusal rather than a novel mint, an internal monitor is disqualified unless independently anchored, and a synthetic harness is refused as capability evidence. The would-be conflict from complexity theory is resolved by re-census. `09_watson_answer.md` carries the full WATSON shape with the verdict fields stated; `10_source_ledger.csv` lists every evidence source actually read with author, venue, year, accessed date 2026-11-23 and local paths where applicable; this file records the independent check.

**On corroboration: none.** This second seat shares the primary's evidence pool. By Fig 2 :40 its agreement is the pool talking, and by Fig 2 :35 a mirror cannot correct you. What this audit establishes is that the folder is internally consistent, not that the claim is true. Within the world sources, the AI-alignment cluster is one witness; the low-overlap witnesses are the complexity, runtime-verification, aerospace and control papers.

**On the claim: `specified`, ungrounded, candidate.** The shape survives: recognition is conditional on an anchor that does not update, a bound objective, an outside detector, and a per-clause refusal, with a union split for social constraints. Pure self-monitoring is refused as written. No product is named and no current system is claimed to satisfy the shape. Nothing here is settled: the update, independence, per-clause, refusal, habitat and subagent tests in the field would be required to move it to `grounded`. Prestige, agreement and clean harnesses are not such instruments.

**Recommendation.** Send the packet with its mode and refuters attached, ask what would refute it, and do not pool later agreement as corroboration. Keep the shape claim and the refuter in front of the links.
