# Splitting the residual, and the order of the three questions

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §7).

## RESIDUAL

The question says "unobtainable **or** fundamentally uncertain" as if it named one state. Two things are owed: (1) can the single phrase be split into categories with different instructions, and (2) in what order must the candidate actions be considered. A third question follows: are the world decision criteria **isomers** under Fig 12, and does that help choose among them?

## DOMAIN CENSUS

Held: the loop's terms (Γ, b, a, o', R, s) and the three route questions SEARCHED, INWARD, OUTWARD from Formula step 7. The world frame holds named criteria (maximin, minimax regret, Hurwicz, Laplace, info-gap robustness). No new primitive is available without import. Anchors: the ground for the loop, a decision problem's outcome for the world frame.

## DERIVATION

### Q1: Is the residual a partition or a union?

- Fig 8 :40-43: **"Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."**
- Fig 9 :54: **"when the split lands on a union rather than a partition, unbundle before you search again."** Fig 9 :57: **"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."**
- The phrase therefore names a **union of two conditions**, not one hard problem. A compound has its own loop and its own ground. Treating the two as one is the error Fig 9 :5-6 names: *"Disagreements that do not shrink with effort... are not one hard question but several well-formed ones. Split it rather than search."*
- **Falsifier:** a single rule that handles both conditions with identical instructions and no loss. If found, the split collapses and F1 in `01` is withdrawn.

### Q2: What is the order of the three questions?

- Formula step 7: SEARCHED is asked **first**, because it is cheapest and the other two assume its answer. INWARD extends an instrument already returning something. OUTWARD imports a frame whose closure predicts the shape.
- Fig 6 :21: **"MINT composes inside the closure and can never add an atom."** So SEARCHED does not change the closure; it changes only how much of the space is visited (Fig 6 :49-50: *"more of the space actually visited"*; *"Distribute the search, and keep the searchers independent."*).
- Fig 9 :43: **"The verdict tells you to leave. The lookup tells you where to go. Elimination is what you do after you arrive."** So the order is verdict, lookup, narrowing. Eliminating candidate criteria before the verdict is how a system arrives somewhere it did not need to go.
- Fig 3 :19-21: **"Optimising a link that already works cannot rescue one that does not."** The chain is ordered by dependency. If the reachability question is not settled, choosing a criterion is effort above the break.
- **Falsifier:** a case where OUTWARD is cheaper and strictly dominates SEARCHED even when the atom is already in the closure. That would reverse the order and break Formula step 7.

### Q3: Are the named criteria isomers under Fig 12?

- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**
- Maximin and maximax are the same payoff matrix under a different comparison operator: one takes the minimum of each row then the maximum, the other the maximum then the maximum. They share atoms and differ in arrangement. Under Fig 12's definition that is an **isomer** pair, not two variants of one rule.
- Minimax regret first builds a regret matrix, then applies a comparison. It shares the payoff matrix with maximin but inserts an extra composition, so it is closer to a **functional group** relation: same kind of decision rule, different member with an added substructure.
- The Hurwicz index composes min and max under a weighted operator. The Laplace rule composes an equal-probability assumption with an expectation. Info-gap composes a robustness function around an estimate. All are arrangements over the atoms "outcomes, states, comparison, weighting," which is what makes them mutually legible.
- **Consequence for this question:** because the criteria are isomers or functional-group relatives over shared atoms, no figure line can rank them by atom content. Ranking needs a ground that pays for the arrangement in this problem. That is exactly the gap recorded in `01` F11.
- **Falsifier:** a criterion that requires an atom none of the others require (for example a privileged probability prior unavailable to the others) would break the isomer claim and make it a different kind of thing. The Laplace rule is the standing candidate, since it assumes equal probabilities where the others do not.

### Q4: What order is the act itself?

- Step 1, preserve the signal: Fig 1 :19 **"The residual is indexed by object slot, not aggregated."** Keep the live slot; never collapse to one aggregate before the classification.
- Step 2, classify: Fig 8 :40-43 (budget versus principle). This is the verdict question of Fig 9 :6, *"the verdict: is φ* in here at all?"*
- Step 3, refuse or mint: if the failure is a false held term, Formula step 2 owes a refusal. Fig 5 :53: **"refuted: a term we hold is wrong; a term is owed that says so."** If the failure is genuine novelty, Fig 5 :14 owes a new term, gated by support, reachability and novelty.
- Step 4, act on contact: Fig 10 :24 **"the ground does not decay, the channel does."** Fig 11 :40 **"An improvement that does not change contact changes nothing, however much it improves."**
- Step 5, report: Fig 13 :134 **"Unreachable is a verdict here, not a silence,"** and :140 **"not only what was concluded, but what could have been concluded, and what would have had to be true for the answer to differ."**
- **Falsifier:** a decision problem in which reporting the classification reduces decision quality relative to acting immediately on the prior. That would break the dependency order, not merely the report.

## CONCLUSION

The single phrase in the question is a **union of two conditions** with different instructions. The three questions run in a fixed order: SEARCHED first, then INWARD or OUTWARD, then narrowing, with the verdict before the lookup. The named decision criteria are isomers or functional-group relatives over a shared payoff matrix, so figure lines cannot rank them; that remains an honest gap. What the figures do license is the order of the act: preserve the live signal, classify, refuse before mint, keep contact, report a verdict and a shape.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; `THE_FORMULA.md`; the eight essays. No measurement was used.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 3 (dependency order), Fig 5 (refused fifth kind), Fig 6 (search does not add an atom), Fig 8 (underivable versus unreachable-at-budget, isomers of closure), Fig 9 (verdict / lookup / narrowing, union split), Fig 10 (channel), Fig 11 (contact), Fig 12 (isomer, functional group), Fig 13 (unreachable is a verdict). Strained after re-census: none. The Laplace rule's privileged prior is recorded as a candidate falsifier, not smoothed over.
