# Structure and order: dependency, union, isomers and the round trip

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

The question asks how three inputs shape learned priority. Three supporting questions are owed and are not answered by the main audit: (1) in what **order** do the three act, (2) is the relation a **partition or a union**, and (3) are two systems with the same data and architecture but different objectives **isomers** under Fig 12's definition? A fourth, the round trip gap between the shorthand and the derivation, is owed by Fig 4.

## DOMAIN CENSUS (supporting)

Atoms held: a system with a library Γ, a belief b, a weighting w, per-slot residuals R_s, and the seven bonds plus negation. No new primitive is available without import. The three levers are not atoms of this set; they are conditions on the habitat, the comparison, and the channel. Currency: two, bits for the description and actions for finding out whether it holds (Fig 12 :125 to :130). Anchor: the ground, never agreement.

## DERIVATION

### Q1: What order do the three levers act in?

- Fig 3 :20: **"The chain is ordered by dependency, not by importance."** Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."**
- Fig 3 orders the links: perception (1), vocabulary / what the situation affords (2), objective / what counts as progress (3), planning (4), learn and carry (5). Training data supplies the first two; the objective is the third; feedback returns R and closes the loop.
- Fig 3 :24 to :27: the middle link is where chains usually break, because *"having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."* So the order is not a sequence in time only. It is a dependency: changing the objective cannot repair a missing vocabulary, and more data cannot repair a missing comparison.
- **Order verdict:** data and vocabulary first, objective second, planning and feedback third, in dependency order. `general`, triangulated (Fig 3 plus the Symbols table's b/w definitions). Refuter: demonstrate that changing the objective restores a system that lacks terms for what a situation affords.

### Q2: Partition or union?

- Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*
- Fig 9 :55 to :57: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."**
- Applied here: feedback labels are data; the objective weights both; the corpus bounds what the objective can express. The intersection (feedback data under a given objective) is a specific compound, not a harder case of either condition.
- Fig 9 :57: **"a case in two conditions is not a harder case of either."**
- **Union verdict.** `general`, triangulated with Fig 8 :45 (*"Two frames together reach what neither reaches alone"*), with the forward test unmeasured. Refuter: demonstrate full separability of the three levers on every slot.

### Q3: Are two systems with different objectives isomers?

- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Fig 12 :123: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**
- Two systems with the same architecture and the same corpus hold the same atoms. If the objective changes the bond (the comparison that decides what counts as progress), then by Fig 12 :117 they are **isomers**: same atoms, different bond, different substance, with the difference invisible in a parameter count and decisive in behavior.
- The weaker reading is a **functional group**: any objective that is a comparison belongs to the same kind, and the specific threshold says which member. Operators table :51: *"a goal is a comparison, which is why a vocabulary without it cannot state one."*
- **Falsifier, written before the run:** if changing the objective while holding data and architecture fixed leaves the per-slot priority unchanged, the isomer claim fails and the functional-group claim is all that remains. If two objectives differ only in name and make the same comparisons, they are one term under a symmetric bond, not two isomers.
- `specified`, single-source for the figure definition (Fig 12), physics/ML-facing check unmeasured.

### Q4: Feedback as a cycle, not a chain

- Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."**
- A feedback channel is exactly this: the output re-enters as input. The sign matters. Fig 10 :24 says *"the ground does not decay, the channel does"*, so a loop that reinforces its own reward model rather than ranging against the ground is a chain that has been mistaken for a cycle.
- Fig 12 :119: **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** A reward model is a part that survives its own use. Unless regenerated against the ground, it is a spent part behaving like a fresh one. This connects F5 with Gao et al.'s measured overoptimization in `09_watson_answer.md`.
- `specified`, triangulated (Fig 12 cycle and catalyst plus Fig 10 channel decay).

### Q5: Two currencies, not one score

- Fig 12 :125: **"A composition costs in two currencies, and they do not add."**
- Fig 12 :126: **"Bits price the description. Actions price finding out whether it holds."**
- Training data buys bits: it makes a description cheaper to state. Ground verification buys actions: it pays for finding out whether the description holds. A single "data quality times reward" score sums quantities the figure says do not add. Fig 12 :130: *"Summing them into one figure is the error this names, not the fix for it."*
- `general`, single-source (Fig 12), with the two currencies named and held apart. Refuter: exhibit a single unit in which description cost and ground-testing cost are commensurable without a choice of exchange rate.

### Q6: Round trip gap R_T

- Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**
- Symbols table: R_T is *"The gap between what was sent up and what came back down: gap(x, (T_E ∘ T_A)(x)). Measures what the coarser description cannot hold."*
- Sent up (x): the verbatim figure set, chiefly Fig 1 :19/:28 (per-slot residual), Fig 3 :20/:27 (dependency and the unmeasured middle link), Fig 10 :24 (channel decay), Fig 9 :55 to :57 (union).
- Abstraction (T_A): the shorthand "training data, objectives and feedback shape priority."
- Concretisation (T_E): a concrete system, with a corpus, a loss, a reward model and a per-slot evaluation.
- R_T is nonzero. The shorthand drops the slot index, the dependency order, the anchor test, the union structure, and the two-currency distinction. These are enumerated in `11_audit.md`. R_T is not measured numerically because no ground reading was taken for this solution; it is recorded qualitatively as the set of dropped constraints. Treating the shorthand as identical to the derivation would set R_T to zero and commit the dead-reckoning error.

## CONCLUSION

The order is dependency, not importance: data and vocabulary, then the comparison we call the objective, then planning and feedback. The relation is a union compound, not a partition. Two systems that differ only in objective are isomers under Fig 12's definition, with a stated falsifier. Feedback is a cycle whose sign can flip, and a reward model is a catalyst that may be spent. Data buys bits and ground contact buys actions, and those two prices do not add. The shorthand loses at least five constraints on the way down, so the round trip gap is nonzero and must be recorded rather than assumed away.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; the Operators and Symbols tables; `THE_FORMULA.md`. No measurement was used. World sources in `09_watson_answer.md` are secondary corroboration only.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 3 (dependency order, unmeasured middle link), Fig 4 (round trip), Fig 8 (union surplus), Fig 9 (union versus partition, unbundle), Fig 10 (channel decay), Fig 12 (isomer, functional group, cycle, catalyst, two currencies), Symbols table (R_T, w), Operators table (goal is comparison). Strains after re-census: the source-gate question for a proxy reward model, and the arity of R across a union; both named in `01_figure_grounded_audit.md` section 8, none hidden.
