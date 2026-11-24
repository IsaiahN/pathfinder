# Order of diagnosis, and the isomer question

**Mode: `specified`.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

The primary audit yields five kinds of algorithmically limited reasoning (F1 to F5) and three causes (A algorithmic, B budget, C instrument/data). Two questions remain:

1. In what order should the causes be tested, and is that an order of dependency or of importance?
2. Are the three self-reference results (Godel, Tarski, Chaitin) one kind or three? Fig 12 gives the test.

## DOMAIN CENSUS

Atoms held: the figures' closure, atoms, bonds and operators; the three failure causes. Bonds held: the seven plus negation. No new primitive is available without import. Anchor: the verbatim figure text; no measurement was taken.

---

## DERIVATION

### Q1 — What is the order of the three causes?

- Fig 3 :20: **"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."**
- `THE_FORMULA.md` step 7: SEARCHED is *"Asked FIRST — it is cheapest and the other two assume its answer."*
- Fig 8 :42: importing against a budget limit *"adds an atom that was not needed"*, and a wrong atom is priced above starting from primitives.

So the total order is:

```
1. SEARCHED      is the term already in closure(Γ) and merely unfound?   (cause B)
2. INWARD        is our representation adequate to hold it? Extend an instrument
                 that is already returning something.                    (cause C)
3. OUTWARD       does another frame already hold it? Import in effect terms.(cause A)
```

This is a dependency order. Step 2 and step 3 assume step 1 has been answered, because both change the frame unnecessarily if the answer was budget all along. Note the ordering is *not* "algorithmic first because the question is about algorithmic limits." The question's interest does not set the diagnostic order. Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

- **Falsifier written before the run:** if an import (step 3) routinely fixes cases that more independent search (step 1) would also have fixed, the dependency order is wrong and SEARCHED is not actually cheapest. That would require evidence that imported atoms are cheaper than distributed search in cases where the term was already in closure.

### Q2 — Where in the dependency chain does an algorithmic limit bite?

Fig 3 :4-13 lists five links: perception, vocabulary, objective, planning, learn and carry. Fig 3 :24-27 says the chain usually breaks in the middle, and that link has *"neither"* obvious failures nor obvious tests, so it attracts *"the least attention and the fewest instruments."*

Fig 12 :111: **"A vocabulary without bonds can name a state and cannot name a route to one."** Fig 12 :112-113: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."* Fig 12 :114-115:

> **"Which is the bound that would bite at the middle of Figure 3’s chain. Whether it is what breaks there is not yet measured, because a link below a break cannot be read. What can be said is that having terms for what a situation affords was taken for a dictionary and it is a grammar."**

So the algorithmic limit that matters for link 3 is a **missing operator**, not a missing datum. A system holding only ingredients can say what a situation contains and cannot say what would count as progress toward an objective. Adding data to that system increases its inventory; adding ⋛ (comparison), → (sequence), − (subtraction) or ¬ (negation) changes what it can state.

This is `specified` and explicitly unmeasured, both by the figure's own admission and because no real system was run here. The honest form: *if a system fails to state an objective, check its bond vocabulary before increasing its data or its compute.*

- **Falsifier:** exhibit a system that states a well-formed objective and tracks progress without comparison, sequence, subtraction and negation operators in any form, using only more data of the same kind. That would break the Fig 12 to Fig 3 mapping.

### Q3 — Are Godel, Tarski and Chaitin one kind or three? (isomer test)

- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- The three results share a mechanism: diagonalisation against a formal system that can encode its own statements. They differ in the quantity targeted:
  - Godel: provability of the system's own consistency (F, `F ⊬ Cons(F)`);
  - Tarski: definability of truth inside the language;
  - Chaitin: provability of a complexity lower bound above a fixed constant.
- Same atoms (self-reference plus a formal system), different target, different theorem. Under Fig 12's definition they are **isomers**, not instances of one result with three names. The SEP Gödel entry's own table of contents separates *"4.1 Tarski's Theorem on the Undefinability of Truth"* from *"4.2 The Undecidability Results"*, and the Kolmogorov article has a distinct section titled *"Chaitin's incompleteness theorem"*, which is corroboration from outside the framework.

- **Caveat, declared:** by Fig 2 :40 the three share a mathematical evidence pool (the diagonal method), so for *corroboration* purposes they remain one witness with three faces, not three independent witnesses. The isomer reading is structural (what each theorem states), not statistical (how independently it was found). Both statements are kept; neither is smoothed away.

- **Falsifier:** show that one of the three theorems is derivable from the other two without re-running the diagonal construction. Then the three collapse to one term and the isomer claim fails.

### Q4 — Do the five kinds form a chain?

No. F1 through F5 share D2 (intra-frame composition) but bind different operators or different boundaries:

| kind | operator or boundary it binds | domain |
|---|---|---|
| F1 self-reference | an external metaframe | D1 |
| F2 refusal | the unary operator ¬ | D2 |
| F3 closure escape | the import boundary | D2 |
| F4 arrangement | the bond, not the atom | D2 |
| F5 inverse / direction | the lossy transform T_A / T_E and the bound shape | D3 |

Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* They are a union of overlapping conditions, not a list of separate ones. There is no total order among them; only the diagnostic order in Q1 is total.

- **Falsifier:** derive all five from one missing operator (for example, show that adding negation alone removes the closure limit, the bond limit and the round-trip limit). Then the union is a partition after all and the five-kind taxonomy is an overcount.

---

## CONCLUSION

The only defensible total order is the diagnostic one: SEARCHED, then INWARD, then OUTWARD, ordered by dependency rather than importance. The algorithmic limit that bites at Fig 3's middle link is a missing bond vocabulary, specifically the operators needed to state an objective, and the figure itself says whether that is what actually breaks is not yet measured. The three self-reference results are isomers under Fig 12: same self-referential atoms, different target, different theorem, with a declared shared-method caveat. The five kinds form a union, not a chain.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; `THE_FORMULA.md` step 7. No measurement was used, so nothing here is `grounded`.

## FIGURE CENSUS

Fig 3 (dependency order, the unmeasured middle link), Fig 8 (cost of importing against budget), Fig 9 (union unbundling, filters versus verdicts), Fig 11 (capability is agent and habitat), Fig 12 (isomer, bonds, vocabulary without bonds, the bound at the middle of the chain), Fig 2 (correlation caveat for the isomer reading), Formula step 7 (searched first). Strains after re-census: none. The explicit unmeasured status of the Fig 12 to Fig 3 mapping is recorded, not hidden.
