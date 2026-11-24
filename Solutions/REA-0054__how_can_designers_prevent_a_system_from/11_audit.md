# Second-seat audit of the REA-0054 solution

**Mode: `specified`, not `grounded`.**

**Honest standing of this document.** This is a simulated second seat. It reads the same evidence pool as the primary derivation in `01_figure_grounded_audit.md`: the same figure text, the same essays, the same world sources, the same folder files. Fig 2 :40 says *"agreement about the world is worthless when the agreeing frames share an evidence pool"* and Fig 2 :35 says *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* A second seat that shares the evidence pool is a mirror with a different name. What follows is therefore a check of **internal consistency only. It is not corroboration, not a second witness, and not a ground reading.** No measurement was taken. This audit cannot settle the claim it audits.

The material audited is the full folder, read after the residual line was restated from the question alone.

## Independent domain census

I redid the census from the residual line before relying on the primary's conclusions, using the WATSON order: R by arity, symmetry and scale; one line per domain with actors / currency / anchor; partition or union; order by dependency.

- **R (arity / symmetry / scale).** The residual is the gap between an intended outcome O and a literal specification S, coupled by the system's actions. Arity: three quantities. Symmetry: the map S to O is many to one and lossy, so green does not determine its source. Scale: first order at the action, second and third order at the cascade, cross scale when the reward has a physical implementation that can be edited. Question type: **union compound**, because the four mechanisms overlap and a case in two conditions is not a harder case of either.
- **Domain 1, design and specification.** Actors: designers, the written spec, the proxy, the harness. Currency: formal correctness and score. Anchor: **none by default.** A spec is a convention, and a convention that decides an outcome has stopped being one. This domain cannot settle O on its own.
- **Domain 2, the agent's optimization frame.** Actors: agent, policy, reward channel. Currency: proxy return. Anchor: only the reward as seen from inside, which is inside its closure. Agent-only improvement cannot fix this.
- **Domain 3, ground and oversight.** Actors: outcomes, human judgment where the question is about people, instruments, auditor seat. Currency: settled residuals. Anchor: whatever settles the question and does not change its answer because of what any frame thinks. Legitimate here because the question is constitutively about outcomes in the world.
- **Domain 4, habitat and cascade.** Actors: everything in contact with the objective, including the reward implementation. Currency: contact and cascade. Anchor: the ground, not the habitat. Enumeration must go outward.

Order by dependency: diagnose the stop in Fig 3's chain; refuse before mint (formula step 2); SEARCHED, then INWARD, then OUTWARD, kept apart (formula step 7); describe the residual before choosing a frame (Fig 9 :27-28).

**Comparison with the primary census.** My domains match the primary's four and its union reading. Where the primary derived from Fig 2 (anchor geometry) and Fig 10 (ground maintainer), I derived from Fig 9 (union or partition) and Fig 11 (habitat and cascade). Different starting figures, same domain boundaries: low overlap between routes within the framework, so the agreement is weak but not circular. It is still one evidence pool.

## Verbatim figure lines checked

I reopened `FRAMEWORK/reference/03-FIGURES_TEXT.md` and checked these lines character by character before relying on them. Each is a primary quote; none is taken from a summary.

- Fig 1 :27 "A frame cannot score itself with a quantity it also produces." checked.
- Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." checked. The full SVG line continues with examples; the quotation stops at the full stop.
- Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." checked.
- Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool" checked. The full line begins "disqualifying for a verdict:" and the quotation is a verbatim substring.
- Fig 3 :19 "Optimising a link that already works cannot rescue one that does not." checked.
- Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." checked.
- Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." checked.
- Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." checked.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." checked.
- Fig 10 :18 "a declared meaning is not a grounded one" checked.
- Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." checked.
- Fig 10 :53 "And a prohibition nothing can satisfy is a prohibition stated wrong." checked.
- Fig 11 :39 "capability is a property of agent-and-habitat, never of the agent alone." checked as a verbatim substring of the full line.
- Fig 11 :52 "Scoping the habitat to direct contact is how DDT reached the eagles" checked as a verbatim substring.
- Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." checked.
- Fig 12 :117 "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." checked as a verbatim substring; the full line begins "isomer."
- Fig 12 :140 "A vocabulary that cannot refuse can only accumulate." checked as a verbatim substring of the amendment line.
- Fig 13 :134 "Unreachable is a verdict here, not a silence" checked as a verbatim substring.

All checked lines are present verbatim in the extract. No quote was found to have drifted.

## Round trip gap `R_T`

The Symbols table defines `R_T` as the gap between what was sent up and what came back down, `gap(x, (T_E ∘ T_A)(x))`, measuring what the coarser description cannot hold. Fig 4 :30 requires it to be measured rather than assumed. I ran the round trip on the condensation this folder actually uses.

1. **Sent up (x):** the verbatim figure set, chiefly Fig 1 :27 (self-scoring disqualified), Fig 2 :29 and :43 (anchor and convention), Fig 9 :55 and :60 (union, filters), Fig 10 :18-19 and :42 (violable convention, blind verifier), Fig 11 :39-40 and :70 (habitat, synthetic solves), Fig 12 :140 (refusal).
2. **Abstraction (T_A):** the shorthand carried in `07_the_tether_answer.md`: keep a non-updating ground, a falsifiable spec, a blind verifier, refusal, outward enumeration, separate triangulation, and a measured gap.
3. **Concretisation (T_E):** a deployed safety design: a metric, a monitor, a test harness, a red-team protocol, an audit.

**`R_T` is nonzero.** Five things the shorthand holds do not survive the trip back down:

- the distinction between a convention and an anchor, which a deployed metric routinely collapses;
- verifier non-access, which a monitor that the system can inspect loses;
- the order of refusal before mint, which an additive-constraint design reverses;
- the union structure, which a single-lever design treats as a partition;
- the outward enumeration, which a direct-contact test harness drops.

One thing survives cleanly: a score the system produces for itself is not a verdict. That is the residue worth sending. `R_T` was **not** measured numerically, because no ground reading exists; it is recorded qualitatively as the enumerated set of dropped constraints. Treating "the formula is the condensed version of the metalaws" as identity would set `R_T` to zero and would be the dead-reckoning error Fig 4 :30 names. The honest form is a lossy condensation with a measured gap, which is what `09_watson_answer.md` states.

## Strains and re-census

- **Spec as anchor.** The primary initially felt the pull of "the spec is what the system should range against." Re-census resolves it: Fig 2 :29 requires a non-updating referent; a spec updates, so it belongs in Domain 1 and the anchor in Domain 3. This is the load-bearing re-census of the folder, and it is applied consistently in `01`, `07`, `08` and `09`.
- **Declared meaning versus better wording.** Fig 10 :18 strained when pressed onto the spec itself. Re-census shows it governs the convention that decides an outcome, not the value of careful wording. Wording remains budget work; it is not grounding. Strain sent to the log and kept visible in `01` §6.
- **METR's prompt instructions.** Initially readable as a conflict with the framework's prohibition rule. Re-census: Fig 10 :53 predicts exactly the failure of an un-instrumented prohibition, so the world source corroborates rather than conflicts. It never decided the verdict.
- **Isomers versus functional group.** Fig 12 :117 governs same atoms with different bond. The four mechanisms pass that test, so the isomer reading stands. The functional-group reading remains available if a mechanism differs only in quantity. Both are recorded in `06_isomers_and_order.md`; neither is hidden.
- **After re-census: one strain, named, none hidden.**

## Verdict on the solution

**On internal consistency: the solution passes.** The primary's findings are applied rather than smoothed: the spec is demoted to a convention, the agent's score is disqualified, the union is unbundled, negation is required, the habitat is enumerated outward, the closure is named, and the budget is kept out of the verdict. `09_watson_answer.md` carries the full WATSON shape with cost if wrong, undoable and reversed by stated. `10_source_ledger.csv` lists every source actually read with author, venue, year, accessed date, quote, field and overlap. `08_expert_verification_packet.md` is the strongest artifact: mode, three checkable sub-claims, verbatim lines, refuters and provenance before the conclusion.

**On corroboration: none from this seat.** It shares the primary's evidence pool. By Fig 2 :40 its agreement is the pool talking, and by Fig 2 :35 a mirror cannot correct you. What this audit establishes is that the folder is internally consistent, not that the answer is true.

**On the question: `specified`, ungrounded, candidate.** The shape survives; naming a specific technique does not. No measurement in this folder moves it to `grounded`. An anchor test, a verifier non-access test, a cascade test, a refusal test, or the standing refuters in `01` §4 would be required to change the verdict. Prestige or agreement is not such a test.

**Recommendation.** Send `08_expert_verification_packet.md` with its mode and refuters attached, ask what would refute it, and do not pool later agreement as corroboration. Keep the residual and its refuter in front of the links.
