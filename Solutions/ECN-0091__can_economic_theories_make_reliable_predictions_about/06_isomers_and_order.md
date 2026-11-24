# Isomers, cycles and order in adaptive prediction

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).

## RESIDUAL

The audit in `01` returns a shape and a set of per-domain verdicts but leaves three structural questions open: (1) what kind of bond is the expectation feedback, (2) are the pre-adaptation and post-adaptation systems isomers over a fixed atom set, and (3) where does the dependency chain actually break. This file derives those, and states a falsifier before the conclusion.

## DOMAIN CENSUS

Atoms available in the economics frame: agents, expectations, the policy rule, constraints (preferences, technology, resource limits), the target metric, the observed outcome. Bonds held: the seven from Fig 12, including → sequence, ⋛ comparison, and the cycle as a composed form; plus ¬ negation for refusal (Operators table :58: "a refutation is a negation, which is why a vocabulary without it can only accumulate"). No new primitive is available without import.

## DERIVATION

### Q1: What bond is the expectation feedback?

- Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."
- The theory issues a policy a. Agents read a and form an expectation. The expectation changes their action. The aggregate of those actions becomes the outcome o'. The outcome is fed into the next policy decision. Output has re-entered as input.
- The sign of the loop decides whether it closes: a reinforcing loop (Soros's boom-bust, positive feedback in the reflexivity source) closes into instability; a stabilizing loop closes into a fixed point; a zero-sign loop does not close at all.
- A chain model (comparative statics: policy → outcome, one pass) cannot represent a closing loop. This is a structural incapacity, not a parameter problem.
- World corroboration in low-overlap fields: reflexivity in social theory and concept drift in machine learning both describe output re-entering as input. **Falsifier:** an adaptive system whose feedback sign is zero, whose dynamics remain an exact chain under intervention, and whose forecasts stay inside the band. Then the cycle claim fails for that slot. Triangulated for structure; unmeasured for any given market.

### Q2: Are the pre- and post-adaptation systems isomers?

- Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Fig 12 :124: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."
- Take the atom set {agents, expectations, policy rule, constraints, target metric, outcome}. Before adaptation, expectation is a passive parameter and the bond is → sequence (policy → outcome). After adaptation, the expectation is bonded back into the policy outcome, so the composition is a cycle. Same atoms, different bond, different behaviour. By Fig 12's definition they are **isomers**.
- If adaptation instead introduces a genuinely new atom (a new agent class, a previously unmodelled constraint, a new institution), the relation is composition plus import (Fig 6 :23), not isomerism. The import needs a source gate and a shadow test. This distinction matters: the Lucas programme assumes the atom set is stable and the bond changes, which is exactly the isomer claim. If the atom set changes, re-fitting coefficients cannot help.
- **Falsifier, written before the run:** if the pre- and post-adaptation systems cannot be written over the same atom set, the isomer claim fails and the compound is a composition-plus-import case. If they can be written over the same atom set but behave identically under intervention, the isomer claim also fails (same atom, same bond, same substance). Single-source on the figure definition, with the reflexivity and ESS sources as shape analogues only.

### Q3: Do settled "deep" parameters become atoms for the policy model?

- Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."
- `THE_FORMULA.md` step 5: "SETTLE the ground settles it. Verified only by what pays. A gate is not the ground." Its amendment adds that "a library that grows is not a reach that grows."
- A preference or technology parameter settled against individual-level data becomes an atom that the policy model can compose over. This is recursion, not a new theory and not an import that moves the wall.
- But settlement is necessary and not sufficient. Whether the settled atom composes into an aggregate prediction when decision rules change is a fact about how it composes, not about what it paid. `01` F6 keeps this as a live strain.
- **Falsifier:** a parameter that is demonstrably settled at the individual level and composes into an aggregate prediction under a changed policy with no re-estimation. That would show settlement sufficient after all, and would require revising the strain. `specified`, unmeasured. Triangulated for the recursion (Fig 12 plus `THE_FORMULA.md`); single-source for the economics binding.

### Q4: Where does the dependency chain break?

- Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."
- Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."
- The chain: (1) perceive the residual per slot; (2) have terms for what an invariant is; (3) say what would count as progress under an intervention; (4) plan the policy; (5) learn and carry.
- Estimation and fit occupy links that work and have abundant instruments. The broken link is link 3: whether the regularity is invariant to the intervention. It has no standard instrument in much applied work. Effort therefore piles up above the break, which is why better estimation cannot rescue a prediction built on a non-invariant term.
- Fig 3 :22: "not reached, so not assessable". A reading taken below the break is a reading of nothing.
- **Falsifier:** a body of work in which invariance is directly tested with an instrument under a changed regime and is shown to hold for the term being used. Then the chain does not break there for that case. Triangulated (Fig 3 plus the Lucas methodology source, different fields).

### Q5: The two currencies do not add

- Fig 12 :125: "A composition costs in two currencies, and they do not add."
- Fig 12 :126: "Bits price the description. Actions price finding out whether it holds."
- A structural macro model can be cheap to state in bits (a compact system of equations) and extremely expensive in actions to settle (it may take a decade and a natural experiment to discover whether a key coefficient is invariant). A reduced-form forecast can be costly to describe and cheap to refute with one quarter of data. Neither figure predicts the other.
- Summing them into one "model quality" score is the error this names. It is why a forecast accuracy leaderboard is a filter for the budget and not a witness for the verdict (Fig 9 :60).
- **Falsifier:** a demonstrated single measure that predicts both description cost and settling cost across regimes with no residual left over. Single-source on the figure definition, kept as a structural claim.

## CONCLUSION

The expectation feedback is a **cycle**, not a chain; a chain vocabulary cannot close it (Q1). The pre- and post-adaptation systems are **isomers over a fixed atom set**, and the Lucas programme is precisely the claim that the atom set is stable while the bond changes; when the atom set changes the case becomes composition plus import (Q2). Settled individual-level parameters become atoms for the policy model, but settlement is necessary and not sufficient (Q3). The chain breaks at the question of invariance, which lacks a standard instrument, so effort lands above the break (Q4). Description cost and settling cost are two currencies that do not add (Q5).

What this rescues without overclaiming: the adaptation problem is a **type** problem (which bond, which atom set), not a degree problem (how big the coefficient is). No figure line returns the numerical reliability of a given theory. The claim remains `specified` and ungrounded.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `THE_FORMULA.md`, and the world sources opened 2026-11-23 and listed in `10_source_ledger.csv`. No measurement or intervention was used.

## FIGURE CENSUS

Fig 3 (dependency order, broken link), Fig 6 (import versus composition), Fig 9 (filters versus witnesses), Fig 12 (cycle, isomer, functional group, settled molecule, two currencies), Operators table (negation and refusal), `THE_FORMULA.md` (settle, gates). Strains after re-census: one live, the sufficiency of settled parameters (Q3); one conditional, the fixed-atom requirement on the isomer claim (Q2). Both named, none hidden.
