# Bonds, order, and isomers: rule, statistic, category

**Mode: `specified` on the derivation, `general` on the bond reading. Not `grounded`.** Simulated derivation checked against the figures, not a ground reading (`05` section 7).

## RESIDUAL

The three artifacts in the question are listed as if they were one kind of thing: "rules, statistics, or official categories." Two questions are owed:

1. Are they the same object under different names, or different molecules under different bonds?
2. In what order do they compose, and can any two of them be isomers under Fig 12's definition?

If they are one kind, a single fix should clear all three. If they are union conditions with different bonds, one lever leaves the intersections standing (Fig 9 :57: *"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."*).

## DOMAIN CENSUS

Atoms available for this derivation: the case, the object slot, the count, the threshold, the declared name, the ground reading, the convention. Bonds available: the seven binary operators plus negation. No new primitive is needed. Fig 12 :46: *"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."*

Order by dependency: a category must be declared before a statistic can count which slots belong; a statistic must exist before a rule can set a threshold on it; a rule can be refused only if negation is available. Fig 12 :112: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."*

## DERIVATION

### Q1. What bond does each artifact use?

**Statistic: the symmetric bond.** Operators table :15: *"swap the operands. Does the meaning change? No."* A count over slots does not change when two slots are swapped. Fig 12 :92: *"Symmetry is what decides whether an arrangement is a new thing."* Under a symmetric bond, k operands have k! spellings and one term, so a code that charges for the sequence overcharges. This is exactly why the where-to-look information is lost: the ordering of slots, which carried the live residual, is not part of the term (Fig 1 :22).

**Rule: the ordered or threshold bond.** Operators table :33: *"swap them. Does it become a different thing? Yes."* A rule that says A before B is not the rule that says B before A. And Operators table :51: *"a goal is a comparison, which is why a vocabulary without it cannot state one."* A threshold rule (*"above this count, the case qualifies"*) is ⋛, the comparison bond, whose test is Operators table :50: *"is it about which is larger, rather than both being present? Yes."*

**Official category: the identity bond.** Operators table :24: *"two names, one referent."* A category asserts that this case and that case are one referent under a declared name. Its test is Operators table :26: *"substitute one for the other. Is anything lost? No."* The declaration is legitimate in the Fig 10 :16-18 sense: it makes the bug statable.

So the three artifacts are not variants of one thing. They are three different bonds. A fix addressed to the symmetric bond (publish the per-slot data) does not touch the comparison bond (the threshold that decides outcomes) or the identity bond (who counts as a member).

### Q2. Are they isomers?

Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

As the question actually writes them, the three artifacts share only the atom "case":

- a rule is roughly `{case, threshold, outcome}` under ⋛;
- a statistic is `{case, count, average}` under +;
- a category is `{case, declared name, boundary}` under ≡.

Sharing one atom is not enough. By Fig 12 :123 they are members of a **functional group**: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."** The group is `case -> bond -> artifact`; the qualifier names which bond.

The stronger form is checkable: if both artifacts are rewritten over the full shared atom set `{case, slot, count, threshold, declared name, ground reading}`, differing only in which structure mediates which pair, then they **are** isomers, same atoms, different arrangement, different substance. That is the isomer claim worth testing, and `08` carries it as a checkable sub-claim.

**Falsifier, written before the run:** if either artifact can be written without an atom the other requires, for example a rule with no count or a statistic with no category defining which slots to count, the isomer claim fails and the functional-group reading stands instead.

### Q3. What is the order of union?

Fig 12 :104: **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."**

The dependency order is therefore:

1. **Declare the category** (identity bond). Without it there is no slot set to count.
2. **Aggregate the statistic** (symmetric bond) over the declared slots.
3. **Set the rule threshold** (comparison bond) on the aggregate.
4. **Refuse or revise** (negation, not a bond). Operators table :58: *"a refutation is a negation, which is why a vocabulary without it can only accumulate."*

This order is a `specified` claim, not an observed sequence in any particular bureau. It is derived from the fact that each bond consumes what the previous one produces (Fig 3 :20: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces"*).

### Q4. What exactly is the promotion in F1?

The promotion is a **re-bonding over the same atoms**, not the arrival of a new atom. A convention and a verdict can share every ingredient: the case, the name, the count, the authority of the seat. What changes is the bond. Fig 12 :94: **"The arrangement is the substance."** Fig 12 :96: **"Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."**

In the convention form, the bond is reversible: the ground can revise the meaning. In the verdict form, the same name is bonded to an outcome by an ordered or threshold relation that the seat authors and nothing outside can check (Fig 10 :48). The flat notation of a rule book records the ingredients and not the bond, which is why an auditor reading the rule book cannot tell the two apart. This is Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**

**Falsifier Q4:** if a convention that decides an outcome is still demonstrably revisable by the ground, with a logged revision, the re-bonding claim is false for that case and F1 must be narrowed.

## CONCLUSION

Rule, statistic and official category are three different bonds, not three names for one object. As the question writes them they are a functional group sharing the atom "case"; over a fixed shared atom set they are a testable isomer claim. Their dependency order is category, statistic, rule, refusal, with each step consuming what the last produced. The promotion named in F1 is a change of bond over the same atoms, which is why a flat rule book cannot reveal it and why the round trip gap R_T is nonzero.

Mode `specified` on the order and isomer claim, `general` on the bond reading. Not `grounded`: no artifact was inspected.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session, reopened for every line below. The Operators table provided the bond tests. No measurement was used.

## FIGURE CENSUS

Fig 1 :22 (symmetric aggregation loses the slot signal); Fig 3 :20 (dependency order); Fig 6 :23 (no new atom without contact); Fig 9 :57 (union compound); Fig 10 :16-18, :48 (convention and authored constant); Fig 12 :5, :46, :92, :94, :96, :104, :112, :117, :123 (bond, symmetry, arrangement, recursion, isomer, functional group); Operators table :15, :24, :26, :33, :48, :50, :51, :58 (symmetry and the test for each bond). Strained after re-census: whether a rule's threshold ⋛ operates on settled categories as quantities at that level is still open, named in `01` strain S4; the Operators table :48 restricts ⋛ to two quantities, and whether a settled category counts as a quantity needs an instrument, not an argument.
