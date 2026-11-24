# Second-seat audit of the CMP-0090 solution

**Mode: `general` on the shape, `specified` on the per-domain findings, not `grounded`.**

**Honest standing of this document.** This is a simulated second seat. It reads the same evidence pool as the primary derivation in `01_figure_grounded_audit.md`: the same figure text, the same framework notes, the same essays, the same web sources, the same folder files. Fig 2 :40 says *"agreement about the world is worthless when the agreeing frames share an evidence pool"* and Fig 2 :35 says *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* A second seat that shares the evidence pool is a mirror with a different name. What follows is a check of **internal consistency only. It is not corroboration, not a second witness, and not a ground reading.** No model was trained, intervened on or measured. This audit cannot settle the claim it audits.

The material audited is the full solution folder, read after the census below was written from the residual line alone.

## 1. Independent domain census (written before reading the primary's conclusions)

I redid the census from the question and the residual line before opening `01_figure_grounded_audit.md`, using the WATSON order: R by arity, symmetry and scale; one line per domain with actors / currency / anchor; partition or union; order by dependency.

- **R (arity / symmetry / scale).** The residual is the gap between a model's prediction and an observation taken under a habitat different from training. Arity: two frames (model, probe) across two habitats. Symmetry: directional, the ground is pinned and does not update on the model (Fig 2 :25). Scale: first order for the fitted model, a crossing at intervention where model-and-habitat is the object. Under i.i.d. test the residual is near zero for both a mechanism model and a shortcut model, so the training pool cannot discriminate sources. I did not need the primary's F1 to reach this; it follows from the question's own phrase "fail under changing conditions".
- **Domain 1, the model as frame.** Actors: weights, features, objective, training distribution. Currency: in-distribution loss and accuracy. Anchor: none nameable internally, because its data moves with the frame. By the audit rule (no nameable anchor means not yet a domain) I did not admit it as a grounded domain; I folded it into the evaluation domain as an object under test.
- **Domain 2, the composition.** Actors: variables as atoms, structural relations as bonds. Currency: bits for description, actions for testing (Fig 12 :125-126). Anchor: behaviour under intervention. Question type: partition of arrangements over a shared atom set.
- **Domain 3, the evaluation ground and verification frame.** Actors: interventions, deployment environments, probes, reviewers, benchmarks. Currency: per-slot residual under change, plus agreement. Anchor: the measurement that does not move when the model is pushed; never agreement. Question type: a union compound needing unbundling.
- **Partition or union.** Union. A model can hold a mechanism in one slot and a Clever Hans shortcut in another, so the two halves of the question overlap. Fig 9 :55-56 *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* I split it into reachability, bond and habitat before searching.
- **Order by dependency.** perceive a failure under shift, acquire a bond vocabulary, state an objective that survives an independent push, plan the intervention, then name and carry with provenance. Fig 3 :20-21 *"The chain is ordered by dependency, not by importance."*

My census matches the primary's three grounded domains, its union reading and its dependency order. Where the primary derived from Fig 1 and Fig 12, I derived from Fig 2's anchor test and Fig 9's union/partition split. Different starting figures, same domain boundaries: low overlap between routes inside the framework, so the agreement is weak but not circular in derivation. It is still one evidence pool, so it carries no independent weight about the world.

## 2. Comparison with the primary

I checked each surviving finding and each retraction against the verbatim figure text and the primary's own corrected files.

| primary item | my independent check | agreement |
|---|---|---|
| F1 accuracy is frame-internal, a filter not a witness | Fig 1 :27 and Fig 9 :60 say exactly this; no figure line makes accuracy sufficient | agree |
| F2 residual is per slot under change | Fig 1 :19, :22 and Fig 2 :29-30; a global mean hides the live slot | agree |
| F3 correlation versus mechanism is ingredients versus bond | Fig 12 :5, :94, :117; the "isomer" reading is an analogy with a falsifier, not a chemistry claim | agree with the narrowed form |
| F4 benchmark is a substituted habitat | Fig 11 :66-67, :70; a solve proves wiring, not capability | agree |
| F5 independence from the training evidence pool | Fig 2 :31-32, :40, :42; two splits of one generator are one witness | agree |
| F6 more same-distribution search adds no atom | Fig 8 :32, :39; closure idempotent, absence unprovable from inside | agree |
| F7 shape not a name | Fig 9 :32; no figure line certifies a model class | agree |
| F8 union compound must be split | Fig 9 :4-5, :55-56; three conditions, three loops | agree |
| "models cannot reveal mechanisms" retracted | my census never admitted that verdict; it is a general-mode claim the figures do not give | agree, retraction correct |
| "feature importance is a mechanism" refused | Fig 12 :5 requires the bond; importance reports ingredients | agree |
| apparent strain Fig 2 versus Fig 12 | re-census: Fig 2 governs evidence pools between frames, Fig 12 governs arrangement inside one term | agree, not strained |
| apparent strain Fig 11 substituted habitat versus Fig 6 outward import | re-census: one prices a habitat substitution, the other a description travelling to a new frame | agree, not strained |

No disagreement with the primary. Since we share an evidence pool, that agreement is expected and carries no independent weight.

## 3. Verbatim figure lines checked

I reopened `FRAMEWORK/reference/03-FIGURES_TEXT.md` and checked these lines character by character before relying on them. Each is a primary quote from the SVGs, none from a summary.

- Fig 1 :19 "The residual is indexed by object slot, not aggregated." checked.
- Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." checked.
- Fig 2 :25 "pinned: it does not update on A or B" checked.
- Fig 2 :29-30 "If it moves when you push on it, it is not an anchor." checked. The full line begins "An anchor is whatever settles the question"; the quotation stops at the full stop.
- Fig 2 :31-32 "Two people reading the same report are not two frames; two instruments pointed at the same thing are." checked.
- Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool" checked. The full line begins "disqualifying for a verdict:"; the shorter form is a verbatim substring, not a different quote.
- Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." checked.
- Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." checked. The SVG line continues "This one is definitional"; my quotation stops before it.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." checked.
- Fig 9 :4-5 "are not one hard question but several well-formed ones. Split it rather than search." checked; the quotation begins mid-line after "Disagreements that do not shrink with effort...".
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." checked.
- Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." checked.
- Fig 12 :5 "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." checked.
- Fig 12 :94 "The arrangement is the substance." checked.
- Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." checked.
- Fig 13 :134 "Unreachable is a verdict here, not a silence" checked; the SVG line ends with a comma, so the quotation is the clause before it.

All checked lines are present verbatim in the extract. No quote was found to have drifted. One correction I made to the primary during this check: an earlier draft citation of Fig 3 :15 for "name what worked, verify it, and carry it" should be Fig 3 :13; `06_isomers_and_order.md` is corrected. An earlier "what would count of progress" is corrected to the figure's "what would count as progress". Corrections are kept visible here.

## 4. Round trip gap R_T

The Symbols table defines R_T as the gap between what was sent up and what came back down, `gap(x, (T_E o T_A)(x))`, measuring what the coarser description cannot hold. Fig 4 :30 requires it to be measured rather than assumed. I ran the round trip on the condensation the folder actually uses.

1. **Sent up (x):** the verbatim figure set, chiefly Fig 1 :19, :27 (per-slot residual, frame-internal metric), Fig 2 :29-32 (anchor and independence), Fig 8 :32 (idempotence), Fig 11 :70 (substituted habitat), Fig 12 :94, :117 (bond, isomer).
2. **Abstraction (T_A):** the shorthand carried in `07_the_tether_answer.md`: accuracy is a filter; the residual is per slot under an independent push; mechanism is the bond; a benchmark is a substituted habitat; the question is a union compound.
3. **Concretisation (T_E):** a concrete claim a reader might make after reading only the shorthand: "model class M has a mechanism because it scores well on a diverse held-out suite and its attention maps pick the right features."

**R_T is nonzero.** Three things the shorthand holds do not survive the trip back down:

- the **source-discrimination requirement**: the concrete claim uses an importance reading, which reports ingredients and *"cannot comment on the source"* (*The Hard Problem is About Source*);
- the **independence requirement**: a diverse held-out suite may still be one generator, which Fig 2 :31-32 refuses as two frames;
- the **split**: the concrete claim collapses Q_a, Q_b and Q_c into one score, which Fig 9 :55-56 refuses as a union compound.

Conversely, one thing survives cleanly: accuracy alone does not settle the question, and the discriminating observation involves habitat change. That is the residue worth sending. R_T was **not** measured numerically, because no ground reading exists; it is recorded qualitatively as the enumerated set of dropped constraints. Treating "the formula is the condensed version of the metalaws" as identity would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names. The honest form is a lossy condensation with a recorded gap, which is what `09_watson_answer.md` states.

## 5. Strains and re-census

- **Fig 2 independence versus Fig 12 bond.** Both fit "correlation versus mechanism" but govern different domains (evidence pools between frames versus arrangement inside one term). Dissolved by re-census, matching the README rule that a reading which makes figures contradict one another has misidentified its domain.
- **Fig 11 substituted habitat versus Fig 6 outward import.** One prices a substitution of habitat, the other describes a translation to a new frame. Both apply to Q_c at different moments. Dissolved by re-census.
- **Fig 8 :39 search finds nothing versus the C-shape.** The first is an epistemic limit on what a frame can prove about its own closure; the second is a ground claim about behaviour under change. Kept as two distinct statements, not merged.
- **World-source check.** The six external sources support the figure verdict rather than conflict with it. The three framework essays share the author and pool, so their support is expected. No conflict rule was triggered; no re-census was forced by WORLD. Failure-mode note: had a source claimed that held-out accuracy is sufficient for mechanism, the conflict would have sent me back to the census, not flipped the verdict.
- **After re-census: no live strain. Two candidate strains dissolved, one epistemic limit kept visible.**

## 6. Verdict on the solution

**On internal consistency: the solution passes.** The twelve files are consistent with one another and with the verbatim figure text. The pre-registered refuter is written before the conclusion and appears in `01`, `07`, `08` and `09`. The two blanket readings ("models cannot reveal mechanisms" and "accuracy settles it") are retracted rather than silently kept. The union split is applied in the domain census and kept as three separate verdicts in `07` and `09`. `09_watson_answer.md` carries the canonical WATSON shape with all required sections and the cost / undoable / reversed-by fields. `10_source_ledger.csv` lists every source actually read, including failed fetches recorded in `04` rather than hidden. This file records the independent check.

**On corroboration: none.** This second seat shares the primary's evidence pool. By Fig 2 :40 its agreement is the pool talking, and by Fig 2 :35 a mirror cannot correct you. What this audit establishes is that the folder is internally consistent, not that the shape is true of any model.

**On the claim: `general` on the shape, `specified` on the domains, ungrounded, candidate.** The shape survives: accuracy is frame-internal; the discriminating residual is per slot under an independent push; mechanism is the bond, not the ingredients; a benchmark is a substituted habitat; the question is a union compound. The instance stays open. Nothing here is settled: an intervention with near-zero per-slot residual from a disjoint probe, a same-ingredients-identical-behaviour result, or a measured zero round trip gap would be required to move any part of it toward `grounded`. Agreement or prestige is not such an instrument.

**Recommendation.** Send `08_expert_verification_packet.md` with its mode and refuters attached, ask what would refute the criterion, and do not pool later agreement as corroboration. Keep the shape claim and the refuter in front of the links. If a real refutation arrives, copy it here with provenance and re-evaluate it as if it came from any other source.
