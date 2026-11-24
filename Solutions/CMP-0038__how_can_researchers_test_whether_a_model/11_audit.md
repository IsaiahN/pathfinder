# Second-seat audit of the CMP-0038 solution

**Mode: `general` on the shape, `specified` on the falsifiable predictions, not `grounded`.**

**Honest standing of this document.** This is a simulated second seat. It reads the same evidence pool as the primary derivation in `01_figure_grounded_audit.md`: the same figure text, the same canonical README, the same formula, the same essays, the same five world sources, the same folder files. Fig 2 :40 says "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" and Fig 2 :35 says "Alignment is triangulation, not negotiation. A mirror cannot correct you." A second seat that shares the pool is a mirror with a different name. What follows is therefore a check of **internal consistency only. It is not corroboration, not a second witness, and not a ground reading.** No model was deployed and no measurement was taken. This audit cannot settle the question it audits.

The material audited is the full folder, read after I rebuilt the census from the residual line alone.

## Independent domain census

I redid the census before relying on the primary's conclusions, using the WATSON order: R by arity, symmetry and scale; one line per domain with actors / currency / anchor; partition or union; order by dependency.

- **R (arity / symmetry / scale).** The residual is a transport residual R(M, C). Arity two, the model and the habitat: Fig 11 :39 "capability is a property of agent-and-habitat, never of the agent alone". Symmetry ordered, because the anchor does not update and the transport direction is part of the quantity. Scale two: first order within a condition, second order across conditions. Fig 9's union/partition rule applies, so fit and transport are a compound, not one hard question.
- **Domain 1, fitting frame.** Actors: model, historical data, optimiser. Currency: in-sample loss. Anchor: none internally. It is the object under test.
- **Domain 2, evaluation frame.** Actors: sealed conditions, instrument, verifier. Currency: residual against observation. Anchor: the observation, which does not move.
- **Domain 3, habitat / transport frame.** Actors: conditions, actors, relations in contact with R. Currency: contact. Anchor: the ground, not the habitat. Overlaps D2, so its own loop is owed.
- **Domain 4, reporting frame.** Actors: verifier, per-condition record. Currency: admissible evidence. Anchor: ground, never agreement.

Order by dependency: describe R, seal the anchor, enumerate the habitat, choose an instrument, range per condition, measure the round trip, then pick the next condition against the surfaced residual (Fig 3 :20-21).

**Comparison with the primary.** My census matches the primary's four domains, union reading, and dependency order. The primary derived the in-sample verdict from Fig 1 :27 and Fig 5 :44; I reached the same boundary from Fig 2 :23 (the ground enters as the only metric) and Fig 11 :39 (capability is agent-and-habitat). Different starting figures, same boundary: low overlap between routes inside the framework, so the agreement is weak but not circular at the line level. It is still one evidence pool.

## Verbatim figure lines checked

I reopened `FRAMEWORK/reference/03-FIGURES_TEXT.md` and checked these character by character before relying on them. Each is a primary quote; none is taken from a summary.

- Fig 1 :27 "A frame cannot score itself with a quantity it also produces." checked.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." checked. The surrounding lines speak of object slots; the condition-slot use is a declared level crossing.
- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." checked. The full SVG sentence continues onto :30 and ends "If it moves when you push on it, it is not an anchor." Both forms appear in the folder and both are exact substrings.
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" checked. The leading clause is part of the line and is preserved where the whole line is presented.
- Fig 2 :42 "Buy independence in proportion to the cost of being wrong." checked.
- Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." checked.
- Fig 5 :44 "A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly." checked across the wrap from :43 to :44; whitespace collapse makes it a single continuous string in the extract.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." checked.
- Fig 9 :51 "evidence bearing on the residual is admissible; evidence bearing only on its maker is a stake-inducing channel, and the verifier is denied it" checked.
- Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." checked.

All checked lines are present verbatim in the extract. No quote drifted.

## Round trip gap R_T

The Symbols table defines R_T as `gap(x, (T_E ∘ T_A)(x))`, what the coarser description cannot hold. Fig 4 :30 requires it to be measured rather than assumed zero. I ran the round trip on the condensation the folder actually uses.

1. **Sent up (x):** the verbatim figure set, chiefly Fig 1 :27 (frame cannot self-score), Fig 2 :29-30 (anchor), Fig 4 :30 (round trip), Fig 11 :70 (substituted habitat).
2. **Abstraction (T_A):** the shorthand carried in `07_the_tether_answer.md`: sealed anchor, low-overlap conditions, per-condition residual, R_T as transport error, candidate verdict.
3. **Concretisation (T_E):** a concrete validation protocol someone would actually run: freeze the model, seal a new site or later period, observe outcomes, publish the residual vector.

**R_T is nonzero.** Three things the shorthand holds do not survive the trip back down:

- which frame a test condition borrows from. "Low overlap" is a shape; the concrete protocol must record the actual evidence sources, and a convenience sample can silently be the same pool;
- what "sealed" means operationally. Model selection, threshold choice and preprocessing all have to be frozen, not just the final fit;
- the index of the residual. Fig 1's slot is an object; the concrete protocol's slot is a condition, a level crossing that must be stated or the per-condition rule becomes a metaphor.

Conversely, one thing survives cleanly: a fit score produced by the model cannot witness transport. That is the residue worth sending. R_T was **not** measured numerically, because no ground reading exists. It is recorded qualitatively as the enumerated set of dropped constraints. Treating "the formula is the condensed version of the figures" as identity would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names. The honest form is a lossy condensation with a recorded gap, which is what `09_watson_answer.md` states.

## Strains and re-census

- **`object slot` to `condition slot`.** Live. Fig 1 :19 indexes by tracked objects. The folder uses the rule "never aggregate over the index" with conditions as the index. Justified by the domain-agnostic reading and Fig 10 :68 (a crossing is a change of role rather than a step upward), but it is a `specified` extension, declared in `01` §7 and here. Not hidden, not a figure quote about conditions.
- **Fig 4 round trip applied to fit and deployment.** Not strained after re-census. Fig 4 :19-20 says the kernel is invariant across sizes and only actors, currency and anchor change. The lossy transform is the same structure at a different stratum.
- **Fig 6 retraction.** The primary first used Fig 6 (import, reachability) as the governing line and then retracted it. My independent reading agrees with the retraction: a transport test ranges the same model against a new anchor; it does not add an atom to the model's library. The retraction is visible in `01` §8, as required.
- **Fig 1 self-score verdict versus world sources.** The five world sources corroborate but are not witnesses for the figure verdict. D'Amour et al. and Collins et al. are independently low-overlap, so their agreement is useful triangulation at the world level; it still does not decide. Geirhos et al. cite Arjovsky et al., so that pair is partial overlap, declared in the ledger.
- **No gap after re-census.** The question is answerable in the figures' vocabulary as a transport residual, so no import is owed. "Unreachable is a verdict, not a silence," but it is not needed here.

## Verdict on the solution

**On internal consistency: the solution passes.** The twelve files agree with each other and with the verbatim figure text. Modes are stated on substantive claims. The five refuters are pre-registered in `01` §4 before the conclusion section and repeated in the packet. The retraction log is applied rather than ignored: Fig 6 is withdrawn as the governing line, D1's "anchor" is corrected to none, and the condition-slot extension is narrowed and declared. `09_watson_answer.md` carries the full WATSON shape with cost if wrong, undoable and reversed by, and `10_source_ledger.csv` lists every source actually read with verified URLs and the 2026-11-22 access date. `03_public_contact_points.csv` contains only public institutional or opt-in venues and no personal emails.

**On corroboration: none from this seat.** I share the primary's evidence pool. By Fig 2 :40 the agreement is the pool talking, and by Fig 2 :35 a mirror cannot correct you. What this audit establishes is that the folder is internally consistent, not that the answer is true.

**On the claim: `general`/`specified`, ungrounded, candidate.** The shape survives: capability belongs to model and habitat; fit is not transport evidence; the anchor must be sealed; conditions must be low-overlap; transport error is a per-condition round-trip gap; passing is not proof. No part is settled: a sealed new-condition observation, a demonstration that same-pool validation predicts deployment error equally well, or a re-census putting capability in the model alone would move it. Prestige or agreement is not such an observation.

**Recommendation.** Send `08_expert_verification_packet.md` with its mode and refuters attached, ask what would refute it, and do not pool later agreement as corroboration. Keep the residual, the three-part shape and the refuters in front of the links.
