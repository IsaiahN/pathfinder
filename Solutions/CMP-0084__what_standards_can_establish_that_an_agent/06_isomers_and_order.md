# Isomers, order, and the two currencies of a standard

**Mode: `specified` on the substantive claims, `general` on the structural ones.** This is a simulated derivation checked against the figures, not a ground reading (`05_what_shape_means.md` §6).

## RESIDUAL

A reproduced pattern does not tell us whether two models are the same model in different clothes, or genuinely different mechanisms. Two questions are owed: (1) are two ABMs that fit the same stylised fact **isomers** under Fig 12's definition, and (2) in what order do the V&V standards depend on one another, and what does a standard cost? These are necessary to the main answer because a grounding criterion that cannot discriminate isomers is just a pattern-matching test.

## DOMAIN CENSUS

Atoms held for this derivation: the agents, rules, parameters, initial conditions, and interaction topology of an ABM; plus the ground readings it claims. Bonds held: the seven (the relevant ones here are `+` conjunction, `→` sequence, `−` subtraction, `⋛` comparison, and `⇒` production). No new primitive is available without an import of external data or an instrument. Order by dependency: describe the residual, then fix the objective, then design the test, then record the lineage (Fig 3; Fig 9 :27-28).

## DERIVATION

### Q1 - Are two pattern-equivalent ABMs isomers?

- Fig 12 :117: "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Fig 12 :94: "The arrangement is the substance."
- Two models M1 and M2 with the same agent types and rule vocabulary but different interaction topologies or update orders share atoms and differ in bonds. Under Fig 12 they are **isomers**: same recipe list, different substance, and the difference is invisible in the published pattern.
- Windrum et al. (2007) supply the empirical version: "different models can be consistent with the data that is used for empirical validation," and Haavelmo's "it is impossible for statistical inference to decide between hypotheses that are observationally equivalent."
- ⇒ Pattern reproduction cannot discriminate isomers. A grounding standard must name the observation that would. This is Fig 12 :117 applied at the model level; the operand-type strain is recorded in `01` §9.
- **Falsifier, written before the run:** exhibit M1 and M2 that fit the same pattern and are also equivalent under every feasible intervention, and show the claim at issue does not depend on which mechanism is real. Then the isomer distinction is idle for that claim and pattern matching suffices. Triangulated for the structure (Fig 12 + Windrum), single-source for the model-level mapping.

### Q2 - Are they a functional group instead?

- Fig 12 :124: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."
- If M1 and M2 share only the skeleton "agents with rules produce an aggregate" and differ in their atoms (different agent types, different state variables), they are not isomers. They are members of a functional group. The weaker claim (same kind of model) survives where the stronger claim (same atoms, different arrangement) does not.
- **Falsifier:** if no shared substructure fixes any outcome in both models, the functional-group claim collapses too and the two are simply different models. This is a live possibility, not a rhetorical one.

### Q3 - What is the order of the V&V chain?

- Fig 3 :20-21: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."
- Mapped to this question: (1) perception, can the model represent the relevant slots and are they observable? (2) vocabulary, are there terms for what the data affords (a residual, a hold-out, an instrument)? (3) objective, what counts as progress, that is, which residual is the ground-establishing one? (4) planning, which validation design buys the needed independence? (5) learn and carry, reproducibility, lineage, and pre-registered refuters.
- Fig 3 :24-27 names the middle link as the usual break: "having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments." This is exactly "empirically grounded": a phrase everyone uses, with no agreed instrument.
- Fig 3 :29-30: "Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed." A model with excellent code and no named anchor stops at link 3. Effort on link 5 (more documentation) cannot rescue it.
- **Falsifier:** show a case where work on documentation or code quality changes the model's ground contact, so the chain is not ordered as Fig 3 says. That would be a real counterexample to the dependency reading.

### Q4 - What do standards cost, and in how many currencies?

- Fig 12 :125: "A composition costs in two currencies, and they do not add."
- Fig 12 :126: "Bits price the description. Actions price finding out whether it holds."
- An ODD document, TRACE file, and code deposit price **bits**: they make the model cheap to state, reuse, and audit. A held-out field season, an independent instrument, and a replication price **actions**: they find out whether the model holds. They are in different units. "Neither figure predicts the other, so both are read or the choice is made blind" (Fig 12 :129).
- Consequence for the question: a standard that only prices bits (documentation checklists) will systematically under-charge for the actions needed to establish contact. A standard that only prices actions (one expensive field campaign) will be impossible to audit cheaply. Summing them into one score is the named error, not the fix (Fig 12 :130).
- **Falsifier:** a single unit in which description cost and test cost are commensurable for this question, with an exchange rate that survives a change of instrument. None was found; the claim is held as `specified`.

### Q5 - What is the round trip gap R_T for a grounding standard?

- Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." Symbols table: R_T = gap(x, (T_E ∘ T_A)(x)), "Measures what the coarser description cannot hold."
- Sent up (x): the six-condition shape from `01` §0 and §12.
- Abstraction (T_A): the shorthand "a grounded ABM is one that is validated, documented, and reproducible."
- Concretisation (T_E): an actual paper's claim, "our model is empirically grounded because it reproduces four stylised facts and the code is archived."
- **R_T is nonzero.** Dropped on the trip: the non-updating anchor, the per-slot residual, the low-overlap evidence, the discrimination test, the pre-registered refuter, and the lineage. What survives cleanly: documentation and reproducibility. That is the residue worth sending as a *gate*, not as a verdict. R_T is not measured numerically (no ground reading); it is recorded as the enumerated set of dropped constraints. Treating "validated = documented and reproducible" as identity would set R_T to zero and commit the dead-reckoning error.
- **Falsifier:** a shorthand from which all six constraints survive the trip back down unchanged. Then the gap is zero for that shorthand and this finding is retracted for it.

## CONCLUSION

Two ABMs that fit the same pattern are isomers unless they are shown to share only a functional group; a grounding standard that cannot discriminate them is a pattern test, not a contact test. The V&V chain is ordered by dependency and currently breaks at the objective link, where "what counts as empirically grounded" has the fewest instruments. Standards price bits and actions in different units, so a documentation-only standard under-charges for contact. The shorthand "validated, documented, reproducible" carries a nonzero round-trip gap R_T against the full shape; the dropped constraints are exactly the grounding criteria. The falsifiers are stated above and were written before the derivation was completed.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session; `THE_FORMULA.md`; the eight essays; Windrum, Fagiolo and Moneta (2007), read this session. No measurement was used.

## FIGURE CENSUS

Fig 3 (dependency order, the unmeasured middle link, measurement before judgement), Fig 4 (round trip, dead reckoning), Fig 9 (describe before looking, unbundle a union), Fig 11 (contact, capability), Fig 12 (isomer, functional group, two currencies, do not sum), Fig 8 (observational equivalence via Windrum et al.), Fig 2 (anchor). Strains after re-census: one, the operand type of the isomer claim at the model level (Fig 12 :104 permits settled molecules to become atoms, but whether a whole ABM is settled enough to be an atom needs an instrument). Named, not hidden.
