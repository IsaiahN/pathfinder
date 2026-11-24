# Union, arity, and bond: why information gain cannot be the whole guide

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

```
DECIDES:  Information gain is necessary as a filter and gradient generator, but a next
          inquiry move is admitted only by a union of four conditions: per-slot residual,
          two-currency bargain, ground-tied consequence, and independence bought against
          cost of being wrong. A = B? No: A maximizes one scalar; B selects under four
          conditions. Fig 9 :55, :57; Fig 12 :125-130.
HOURS:    This supporting derivation: about 0.5 hours of simulated work. A ground test
          (measured comparison of two inquiry policies) is not included and would be extra.
PRIOR CASE: QMGR-0037. Its union/partition split and its use of Fig 12's bond vocabulary
          show how a compound is unbundled before a frame is chosen.
ANALOGUE: Chemistry's isomers: same ingredients, different bond, different substance.
          A gain-only policy and a four-leg policy can share the same vocabulary and be
          different policies because the bonds differ. Fig 12 :117.
LIMIT:    The framework cannot name the weighting among the four legs. That is a binding
          from an applied field or a settlement at the ground, not a derivation.
```

## RESIDUAL

The question asks whether one scalar can close the choice of a next inquiry move, or whether several conditions must bind together. Two supporting questions are owed before the main verdict can be stated:

1. Do the four legs form a partition (separate questions, each searchable alone) or a union (overlapping conditions, requiring unbundling)?
2. Does a scalar have the right arity and symmetry to select a move at all?

## DOMAIN CENSUS (supporting)

Atoms already held: a residual `R` indexed by slot `s`; a candidate term φ; a library Γ; two currencies (bits and actions); an immovable ground. Bonds held: the seven plus negation. No new primitive is introduced below.

## DERIVATION

### Q1 - Partition or union?

- Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
- Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."
- A gain-only lever clears the region where only the gain condition holds. It leaves the intersections standing, because relevance, cost, and consequence still bind.
- Therefore the four legs are a **union compound**. A single lever (maximize gain) does not clear the compound; it clears one condition.
- Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."
- **Falsifier written before the run:** if a re-census shows each leg binds on a disjoint set of moves, so that clearing gain alone clears the whole decision, the union reading fails and the partition reading stands instead.
- Verdict: `triangulated` across Fig 9 and Fig 12 (union rule plus bond structure), low overlap in wording.

### Q2 - Does a scalar have the right arity and symmetry?

- `THE_FORMULA.md` step 1 writes `R = |Γ(b,a) − o′| per slot s`. Arity includes the slot.
- Fig 1 :19 "The residual is indexed by object slot, not aggregated."
- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."
- A global gain scalar is a map from a policy to one number. It has arity one at the decision point; the decision it would close has the slot as an extra argument. This is not a difference of degree but a difference of type.
- Symmetry: under permutation of slots the global scalar is invariant; the per-slot residual is not. The figure's governing quantity breaks the symmetry the scalar preserves. So the scalar is not a coarse version of the figure's quantity; it is a different quantity.
- **Falsifier:** exhibit an arrangement of slot residuals for which a global gain scalar provably selects the live slot, and show that this holds for all arrangements, not just one. Until then the scalar is not licensed as a selector.
- Verdict: `single-source` for the figure line (Fig 1), with world corroboration from Tishby et al. and the Stanford Encyclopedia of Philosophy in `09_watson_answer.md`.

### Q3 - Vocabulary without bonds cannot name a route

- Fig 12 :111 "A vocabulary without bonds can name a state and cannot name a route to one."
- Fig 12 :112-113 "A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."
- Information gain names a **state** of belief (how uncertain the inquirer is). It does not, by itself, name the **route** to a different state, because that requires a sequence, a comparison, and a subtraction against something held.
- Fig 12 :117 "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- A gain-only policy and a four-leg policy can share the same ingredients (a residual, a candidate, a cost, a ground) and be different policies. The difference is carried by the bond: the gain-only policy compares numbers inside a frame; the four-leg policy sequences a slot check, a bargain, a currency check, and a ground range. The formula that lists the ingredients cannot tell them apart.
- **Falsifier:** show that two policies with identical ingredient sets but different bonds behave identically under every possible residual arrangement. That would collapse the isomer claim.
- Verdict: `single-source` for the figure definition (Fig 12), with the applied comparison unmeasured.

### Q4 - Order by dependency, not by importance

- Fig 3 :19 "Optimising a link that already works cannot rescue one that does not."
- Fig 3 :20 "The chain is ordered by dependency, not by importance."
- Dependency order for this question: (1) perceive the per-slot residual → (2) say what would count as progress here (relevance) → (3) price the move in both currencies → (4) range the verdict against a ground → (5) change contact in the habitat.
- Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." The gain calculation has an excellent instrument. The relevance and consequence links are the ones usually assumed rather than measured, which is exactly where effort is misdirected.
- **Falsifier:** show that a link below the gap can still be diagnosed from above, or that the chain's order is one of importance rather than dependency.
- Verdict: `single-source` (Fig 3), corroborated by the world's value-of-information literature, which places the decision before the measurement.

### Q5 - What the union does to the answer

Because the compound is a union, the honest answer to "gain alone or gain plus the other three" is not a weighted average:

- gain alone: clears one condition, leaves three intersections standing;
- gain plus relevance but no cost: still proposes arrangements it cannot afford to test (Fig 12 :127);
- gain plus relevance and cost but no ground range: a self-consistent frame with no verdict (Fig 2 :35);
- all four: a move that is aimed, affordable in both currencies, and answerable to something that cannot move.

These are categorically different cases, not four points on one scale. That is the structural content of "must be combined".

## CONCLUSION

The four legs form a union compound, not a partition, so no single lever clears them. A global information-gain scalar has the wrong arity (it drops the slot) and the wrong symmetry (it is invariant where the residual is not), so it cannot be the selector even at its own level. Fig 12's bond rule explains why two policies with the same vocabulary can differ decisively in behaviour. Dependency order (Fig 3) puts the slot and the relevance link before the gain calculation, and the ground range after it.

This rescues what is defensible in the gain-only position, gain as a filter and as the curiosity gradient of Fig 5 :46-47, while refusing its promotion to a guide. No weighting among the four legs is derived, and no objective function is named.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` (opened this session). The eight essays and the world sources in `10_source_ledger.csv` are secondary. No measurement was used.

## FIGURE CENSUS

Fig 1 (per-slot residual, aggregation), Fig 3 (dependency order), Fig 5 (curiosity drive and bargain), Fig 9 (union, unbundle before search), Fig 12 (bond, isomer, plan/goal/progress, two currencies), `THE_FORMULA.md` steps 1, 3, 5, 7 and the "Direction" discipline. Strained after re-census: none. The precision limit on the meaning of "information gain" is recorded in `01_figure_grounded_audit.md` §3 F9 and is not a figure strain.
