# Independent audit: what evidence is sufficient to establish safety at a level of autonomy?

**Mode: `specified` on the structure, `general` on the order claims, not `grounded`.**

**Reviewer seat writes its own census from the residual line alone, before reading the primary census.** That is the instruction followed below: the residual was taken from the question text and the registry line, and the census was drafted before the primary's §1 was consulted.

**Honest standing of this document.** This is a simulated second seat. It reads the same evidence pool as the primary derivation in `01_figure_grounded_audit.md`: the same figure text, the same local framework files, the same essays that were actually opened, the same world sources. Fig 2 :40 says "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" and Fig 2 :35 says "Alignment is triangulation, not negotiation. A mirror cannot correct you." A second seat that shares the evidence pool is a mirror with a different name. What follows is therefore a check of **internal consistency only. It is not corroboration, not a second witness, and not a ground reading.** No measurement was taken. This audit cannot settle the claim it audits.

The material audited: the full primary file set, with special attention to the retraction table and canonical check in `01` §5 and §6, the shape claim in `05` §5, the order derivation in `06`, the verdict fields in `09`, and the provenance in `10_source_ledger.csv`.

## 1. Independent domain census

I redid the census before reading the primary's conclusions, using the WATSON order: R by arity, symmetry and scale; one line per domain with actors, currency and anchor; partition or union; order by dependency.

- **R (arity / symmetry / scale).** The residual is the gap between a safety certificate and the behavior the ground settles at autonomy level L. Arity: relational, evidence compared to a threshold, so a **union compound** with four conditions, not one hard question. Symmetry: asymmetric, ⋛ is an ordered threshold relation, not a symmetric join. Scale: evaluation scale versus deployment scale, with a lossy transform between. Slots: level, domain, subgroup, task class, cascade depth. This matches the primary's arity and scale reading.
- **Domain 1, evaluation frame.** Actors: models, harnesses, evaluators, red teams. Currency: pass rates and coverage. Anchor: none internal. This domain is not self-sufficient; it borrows an anchor from D2. Union condition one.
- **Domain 2, deployment habitat.** Actors: system, users, operators, environment, other agents, cascades. Currency: harm or no harm. Anchor: outcomes at L, "a measurement, an experiment, a counter, a market, a patient outcome" (Fig 2 :29-30). Union condition two and the ground condition.
- **Domain 3, verification / claim frame.** Actors: auditors, regulators, outside readers. Currency: agreement and residuals. Anchor: the ground, never agreement. Union condition three. In this simulated run its independence is zero, since it draws on the same files.
- **Domain 4, threshold and decision.** Actors: scorer, accepted-risk convention, comparison ⋛. Currency: risk versus acceptable risk at L. Anchor: the ground settles the value; the seat authors only the convention. The compound where the other three intersect.
- **Order by dependency:** bind the objective before scaling evaluation (Fig 3 :19); describe the residual before selecting a frame (Fig 9 :27-28); settle a first-order claim before composing over it (Fig 5 :69-70).

**Where the two censuses differ.** I derived the union reading from Fig 9 :54 and the anchorless status of D1 from Fig 2 :29-30, while the primary derived it from Fig 9 plus the Fig 3 dependency chain. Different starting figures, same domain boundaries and same four domains. This is low overlap *between routes*, but both routes sit in the same evidence pool, so the agreement is internal consistency and carries no independent weight. It does not corroborate the verdict.

## 2. Comparison with the primary census

I checked each finding and each retraction against the verbatim figure text and against the primary's own corrected files.

| primary item | my independent check | agreement |
|---|---|---|
| F1 safety is agent-and-habitat | Fig 11 :39-40 gives the capability claim; the same figure's own caveat at :71-72 says it can come back wrong. The safety reading inherits the caveat. | agree, caveat still live |
| F2 harness is substituted habitat | Fig 11 :70 is explicit; :68-69 names the two silent failure modes. METR and Lee et al. corroborate from distinct fields. | agree |
| F3 per-slot, not aggregate | Fig 1 :19 and :22. Hidden stratification is an instance, not an independent authority. | agree with the reclassification |
| F4 absence is not proof | Fig 8 :39, Fig 9 :44, Fig 6 :34-35. Underivable and unreachable-at-budget remain distinct. | agree |
| F5 agreement is not a verdict | Fig 2 :31-32, :35, :40, Fig 7 :13, Fig 9 :51. Fig 8 :50 states the legitimate convergence alternative. | agree |
| F6 safety is a comparison bond | Operators :52 and Fig 12 :87; Fig 5 :65-66 makes the threshold bindable. The invariant alternative is still live. | agree, strain still live |
| F7 assurance is maintained work | Fig 10 :24-28, Fig 11 :61, :63-64. | agree |
| F8 measure R_T | Fig 4 :30, Fig 5 :69-70, Fig 9 :32. | agree |
| "which tests are sufficient" retracted at question level | Fig 9 :32 gives a kind of thing; the sought-for certificate is an unbound preference under Fig 5 :62-64. | agree |
| AMLAS PDF withdrawn | The fetch returned an unsupported content type and the source was not opened, so it is correctly absent from the ledger. | agree, not cited |
| shape not a name overstated in `05` §3 | `05` §5b narrows it to a missing primitive versus a held term; the certificate slot stays open because it is unbound, not because evidence is unspeakable. | agree with the narrowing |

No disagreement with the primary. Since we share an evidence pool, that agreement is expected and carries no independent weight.

## 3. Verbatim figure lines checked

I reopened `FRAMEWORK/reference/03-FIGURES_TEXT.md` and the Operators table and checked these lines before relying on them. Each is a primary quote; none is taken from a summary.

- Fig 11 :39 "And capability is a property of agent-and-habitat, never of the agent alone." checked.
- Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves." checked.
- Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." checked.
- Fig 11 :68 "what you failed to reproduce is invisible until the goal fails" checked; the following line continues "what you unintentionally introduced is invisible until it acts."
- Fig 11 :63 "Which is why a managed ecosystem is permanent work rather than a solved state." checked; the full line continues into the composition sentence, so the quotation is a truncation, not a different quote.
- Fig 1 :19 "The residual is indexed by object slot, not aggregated." checked.
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." checked.
- Fig 8 :39 "a search that finds nothing is never a proof of absence." checked.
- Fig 9 :44 "Only a sealed room can be searched to the end, and no frame is a sealed room." checked; the line continues "So searching and finding nothing proves nothing."
- Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence." checked; the full line continues with the two-readers-versus-two-instruments example.
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." checked.
- Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" checked; the leading clause must be kept if presented as the whole line.
- Fig 2 :42 "Buy independence in proportion to the cost of being wrong." checked.
- Fig 7 :13 "agreement compounds, evidence does not" checked.
- Fig 9 :51 "evidence bearing on the residual is admissible; evidence bearing only on its maker is a stake-inducing channel, and the verifier is denied it" checked.
- Fig 5 :65 "make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else." checked; the line wraps before "residual".
- Fig 10 :24 "the ground does not decay, the channel does." checked.
- Fig 10 :27 "the output is not a verdict, it is" checked; the line wraps into "you have lost touch" at :28.
- Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." checked.
- Fig 9 :32 "you get a kind of thing, never the answer itself" checked.
- Fig 12 :87 "a threshold relation between two quantities." checked.
- Operators table :52 "a goal is a comparison, which is why a vocabulary without it cannot state one." checked.

All checked lines are present verbatim in the extract. No quote was found to have drifted. The two long quotes that were truncated for readability are marked as such above.

## 4. Round trip gap R_T

The Symbols table defines R_T as `gap(x, (T_E ∘ T_A)(x))`, measuring what the coarser description cannot hold, and Fig 4 :30 requires it to be measured rather than assumed. I ran the round trip on the condensation this folder actually uses.

1. **Sent up (x):** the verbatim figure set, chiefly Fig 11 :39-40 and :70 (agent-and-habitat; substituted habitat), Fig 1 :19-22 (per-slot residual), Fig 2 :31-32 and :40 (independence), Fig 5 :65-66 (bind the threshold), Fig 10 :24-28 (channel decay).
2. **Abstraction (T_A):** the shorthand carried in `07` and `08`: ground-ranged, per-slot, low-overlap, threshold-bound, maintained.
3. **Concretisation (T_E):** the question's requested object, a named packet of sufficient evidence for a level of autonomy.

**R_T is nonzero.** Five things the shorthand holds do not survive the trip back down:

- the **anchor identity**: "the ground" can be silently replaced by a harness report, so the abstract condition is satisfied in words while the concrete object is not ranged against outcomes;
- the **slot index**: a concrete checklist tends to collapse host slots into one aggregate pass rate;
- the **independence parameter**: two reviews from one evidence pool are counted as two, which the abstraction forbids but the checklist cannot detect;
- the **threshold binding**: a cutoff chosen after seeing the results is written into the concrete case while the abstraction requires it bound before the run;
- the **maintenance rule**: a one-time certificate is issued while the abstraction requires a standing channel.

Conversely, one thing survives cleanly: a claim about safety at L must be a relation between the system and its habitat, settled at the ground, not a property read off the model. That is the residue worth sending. R_T was **not** measured numerically, because no ground reading exists; it is recorded qualitatively as the enumerated set of dropped constraints. Treating "the shape is the condensed version of the figures" as identity would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names.

## 5. Strains and re-census

- **Certificate question routed to D1.** The primary initially framed the question as "which tests are sufficient?" Re-census moves it to D2 and D4, because D1 has no anchor. This matches the canonical rule that a strained reading means a misidentified domain, not a flaw in the figures.
- **"Shape, not a name" overapplied.** Re-census narrows it: the phrase governs a missing primitive (README), while evidence terms are already held in Γ. The certificate remains unbound as a preference (Fig 5 :62-64), which is a different reason for the open slot. Recorded in `05` §5b; not retracted, narrowed.
- **⋛ comparison versus threshold-free invariant.** Still live. Operators :52 and Fig 12 :87 make "safe at L" a comparison, and "particular level" supplies the second operand. But if an invariant claim settles at the ground and composes, ⋛ governs another quantity. Fig 5 route would then place it in the TRANSFERRED bin. I record this as a strain, not a correction, and the refuter in `01` §3 keeps it falsifiable.
- **Hidden stratification as independent authority.** Reclassified as an instance of Fig 1's law; it corroborates and does not decide. No re-census of the verdict is owed.
- **AMLAS PDF.** Not a figure conflict. The fetch failed, the source was withdrawn, and no inference rests on it.
- **After re-census: one strain live, none hidden.**

## 6. Verdict on the solution

**On internal consistency: the solution passes.** The twelve files are consistent with each other and with the verbatim figure text. The reclassification of hidden stratification is applied rather than ignored, the overapplied shape rule is narrowed with both forms recorded, the AMLAS PDF is withdrawn rather than smuggled in, and the one live strain is named in `01` §6, `06` Q4, `07` §3 and `09` VERDICT. `09_watson_answer.md` carries the WATSON shape with all verdict fields stated; `10_source_ledger.csv` lists every source actually read with verified URLs, accessed date 2026-11-24, and local paths where applicable; this file records the independent check. The strongest artifact remains `08_expert_verification_packet.md`: mode, three checkable sub-claims, verbatim lines, refuters, non-claims and provenance before the conclusion.

**On corroboration: none.** This second seat shares the primary's evidence pool. By Fig 2 :40 its agreement is the pool talking, and by Fig 2 :35 a mirror cannot correct you. What this audit establishes is that the folder is internally consistent, not that the claim is true.

**On the claim: `general` on the shape, `specified` on the falsifiable predictions, ungrounded, candidate.** The shape survives: safety is agent-and-habitat; a harness is a substituted habitat; evidence must be per-slot, low-overlap, ground-ranged, threshold-bound and maintained. The certificate reading does not: it names a content the framework says it cannot name, treats non-detection as absence, and counts pooled agreement as corroboration. Nothing here is settled. A harness that clears full habitat enumeration, an instrument that exposes the live slot, a threshold settled by the ground, convergent low-overlap instruments, or a threshold-free invariant that settles would be required to move it to `grounded`. Prestige or agreement is not such an instrument.

**Recommendation.** Send the corrected packet with its mode and refuters attached, ask what would refute it, and do not pool later agreement as corroboration. Keep the residual and the refuter in front of the links. Record the recipient's stage-1 verdict before showing any theory, because by Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it."
