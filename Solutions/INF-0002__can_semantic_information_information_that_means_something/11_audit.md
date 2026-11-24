# Second-seat audit of the INF-0002 solution

**Mode: `specified` on verdicts, `general` on the shape, not `grounded`.**

**Honest standing of this document.** This is a simulated second seat. It reads the same evidence pool as the primary derivation in `01_figure_grounded_audit.md`: the same verbatim figure text, the same essays actually opened, the same world sources, the same folder files. Fig 2 :40 says "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool" and Fig 2 :35 says "Alignment is triangulation, not negotiation. A mirror cannot correct you." A second seat that shares the evidence pool is a mirror with a different name. What follows checks **internal consistency only. It is not corroboration, not a second witness, and not a ground reading.** No measurement was taken.

The material audited is the full solution, read against the residual line alone before comparing with the primary's conclusions.

## Independent domain census

I redid the census from the question line, using the WATSON order: R by arity, symmetry and scale; one line per domain with actors / currency / anchor; partition or union; order by dependency.

- **R (arity / symmetry / scale).** The residual is the gap between Shannon's transmission measures and aboutness. Arity: signal, referent, bond, optional interpreter; the question asks whether the fourth term can be eliminated. Symmetry: aboutness directed, mutual information symmetric. Scale: four strata, distribution, message, content, uptake. Because several different anchors are in play, I get a **union compound**, not a single hard question: Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."
- **Domain 1, Shannon / syntactic.** Actors: source, channel, receiver, distribution, code. Currency: bits, entropy, mutual information. Anchor: coding theorems. Upstream and settled; supplies ingredients only.
- **Domain 2, causal aboutness.** Actors: signal, source state, causal link. Currency: causal dependence. Anchor: the source state when a stable link is measurable. Interpreter is an instrument.
- **Domain 3, convention.** Actors: parties, code, community. Currency: shared meaning. Anchor: agreement, legitimate for a convention by Fig 2 :41.
- **Domain 4, interpretive meaning.** Actors: interpreter, response, fitness. Currency: uptake. Anchor: behaviour and human judgment where the question is about persons.
- **Domain 5, framework grammar.** Actors: atoms, bonds, ground. Currency: composition then settlement. Anchor: figures as metalaws, ground for measurement.

Order by dependency: settle D1 before D2 through D4; unbundle before searching; settle each bond before composing across levels (Fig 12 :104).

**My census matches the primary's five domains and its union reading.** Where the primary derived the union from Fig 9 :54-57, I derived it from the arity mismatch (four terms versus three) and the anchor multiplicity. Different starting point, same boundary. Low overlap between routes within the framework, but still one evidence pool.

## Comparison with primary

| primary finding | my independent check | agreement |
|---|---|---|
| F1 Shannon is ingredients, semantic is bond | Fig 12 :5 and :47 and Fig 1 :27 all support it; a distribution-internal score is frame-internal | agree |
| F2 symmetry mismatch | Fig 12 :59 and :74 give the swap tests; the fetched Wikipedia article confirms mutual information symmetric, directed information not | agree |
| F3 anchor legitimacy question-relative | Fig 2 :36-38, plus Fig 10 :49; no global answer follows | agree |
| F4 declaration does not ground | Fig 10 :18 and :49; both agent and signal declarations fail the violability test | agree |
| F5 agreement is product for convention | Fig 2 :39 resolves the apparent :40 versus :41 conflict; valence, not contradiction | agree |
| F6 Fig 11 as analogue only | Fig 11 :39 concerns capability; using it as a direct verdict would violate Fig 9 :60 | agree, and the analogue stays labelled |
| F7 union unbundling | Arity and anchor multiplicity both force it; Library of Babel names the same operation | agree |
| F8 shape, not definition | Fig 9 :32 and Fig 13 :134; the slot is reported, not silently filled | agree |
| F9 habitat enumerated | Fig 11 :43 and :48; the CSV lists contact classes, not evidence weights | agree |

No disagreement with the primary. Since we share an evidence pool, that agreement is expected and carries no independent weight.

## Verbatim figure lines checked

I reopened `FRAMEWORK/reference/03-FIGURES_TEXT.md` and checked these character by character before relying on them. Each is a primary quote; none came from a summary.

- Fig 12 :5 "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." checked.
- Fig 12 :47 "A recipe that names only its ingredients has recorded half of itself." checked.
- Fig 12 :94 "The arrangement is the substance." checked.
- Fig 12 :59 "swap the operands. Does the meaning change? No." checked.
- Fig 12 :74 "swap them. Does it become a different thing? Yes." checked.
- Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." checked.
- Fig 2 :36 "An anchor is legitimate when the question is constitutively about it." checked.
- Fig 2 :38 "It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure." checked across the line wrap at :37-38; normalized, it matches.
- Fig 2 :39 "Correlation has valence." checked.
- Fig 2 :41 "efficient for a convention: agreement about a shared meaning is the product, not a corruption of it" checked.
- Fig 10 :49 "Declaring a meaning does not ground it." checked.
- Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." checked.
- Fig 9 :32 "you get a kind of thing, never the answer itself" checked.
- Fig 13 :134 "Unreachable is a verdict here, not a silence," checked; the line ends with a comma, and the shorter form used elsewhere is a truncation of it.
- Fig 8 :39 "So a search that finds nothing is never a proof of absence." checked.
- Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." checked.

All checked lines are present verbatim in the extract. No drift found. One local path in `09_watson_answer.md` was written with a missing directory segment and is corrected in the same pass as this audit; it is a path typo, not a quote drift.

## Round trip gap R_T

The Symbols table defines R_T as `gap(x, (T_E ∘ T_A)(x))`, what the coarser description cannot hold; Fig 4 :30 requires it to be measured rather than assumed zero. I ran the round trip on the condensation the folder actually uses.

1. **Sent up (x):** the verbatim figure set, chiefly Fig 12 :5, :47, :59, :74 (bond and symmetry), Fig 2 :36-41 (anchor and convention), Fig 9 :54 (union unbundling), Fig 13 :134 (unreachable as verdict).
2. **Abstraction (T_A):** the shorthand carried in `07_the_tether_answer.md`: semantic information is a bond; Shannon is the ingredients; the anchor decides the agent question per domain; the framework returns a four-part shape.
3. **Concretisation (T_E):** a concrete definition such as "semantic information is task-relevant meaning defined by classification labels" (the arXiv engineering binding) or "meaning is what the listener brings" (the essay's human-case claim).

**R_T is nonzero.** Three things the shorthand holds do not survive the trip back down:

- the **domain restriction** on the agent verdict, which the engineering binding drops by treating one operational sense as the whole of semantic information;
- the **ground requirement**, which the declaration-style bindings drop (Fig 10 :49);
- the **bond direction**, which a symmetric measure cannot carry (Fig 12 :59 versus :74).

Conversely, one thing survives cleanly: a typed bond and a settling ground are both required, and Shannon's measure alone is insufficient. That is the residue worth sending. R_T was **not** measured numerically, because no ground reading exists; it is recorded qualitatively as the set of dropped constraints. Treating the formula as identical to the law set would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names.

## Strains and re-census

- **Fig 2 :40 versus :41.** Resolved by Fig 2 :39 "Correlation has valence." Different quantities: verdict about world, product about convention. Not strained.
- **Agent as instrument (D2) versus agent as anchor (D4).** Resolved by Fig 2 :36-38, which explicitly distinguishes "constitutively about it" from "only an instrument." Different domains.
- **Fig 11 capability analogue.** Live but labelled. It is an analogue, not a governing line; using it as a verdict would violate Fig 9 :60. Kept visible in F6.
- **Isomer condition in `06_isomers_and_order.md`.** Live but recorded with a fallback: as the world writes the domains they share only the signal slot, so they are a functional group rather than isomers; the isomer claim holds only over the full shared atom set. Honest, not hidden.
- **Essay coverage.** Four essays were opened; four were listed but not re-opened and no verbatim quote from them is used. `05_what_shape_means.md` states this so the provenance is not inflated.
- **After re-census: no hidden strain; two live limitations explicitly labelled.**

## Verdict on the solution

**On internal consistency: the solution passes.** The figure lines check out verbatim, the domain census is stable under an independent route, the per-domain verdicts are kept separate and never averaged, mode is stated on substantive claims, the pre-registered refuter precedes the conclusion, the retraction log records every narrowing made after the canonical check, and the ledger lists every source actually read with author, venue, year, accessed date and quote. `09_watson_answer.md` carries the full WATSON shape with the three verdict fields; `08_expert_verification_packet.md` remains the strongest artifact, with mode, three checkable sub-claims, verbatim lines and refuters before the conclusion.

**On corroboration: none.** This second seat shares the primary's evidence pool. By Fig 2 :40 its agreement is the pool talking; by Fig 2 :35 a mirror cannot correct you. The essays, being by the framework's author, are also one witness. The low-overlap world sources (SEP, Wikipedia, arXiv, biosemiotics.org) corroborate individual findings but do not decide the verdict and were never allowed to.

**On the claim: `specified`, ungrounded, candidate.** The shape survives: semantic information is a bonded arrangement with a ground and a level; Shannon is the ingredients; the unqualified question is a union and must be unbundled; agent-relativity is domain-specific. The over-broad readings do not: a blanket no, a blanket yes, treating Fig 11 as a verdict, and treating agreement as corroboration were all retracted or narrowed in `01` section 7. Nothing here is settled. A source-discriminating instrument, a convention-without-parties result, a partition proof, or a signal-statistics derivation of directed aboutness would be required to move it to `grounded`.

**Recommendation.** Send the corrected packet with its mode and refuters attached, ask which domain the recipient is addressing and what would refute the claim, and do not pool later agreement as corroboration. Keep the shape claim and the refuter in front of the links.
