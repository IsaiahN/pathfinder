# Isomers, order, bonds and currencies: supporting derivation

**Mode: `specified` on the structural claims, `general` on the bond table. Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).**

## RESIDUAL

The main audit leaves four questions open that this file must close for the separator to be usable: (1) are ignore, retain and act different *things* under Fig 12's definition, or only different labels on one thing; (2) what is the order of the routes; (3) in what currencies is the decision priced; (4) which parts survive their own use. A fifth question, functional group, bears on the receptor evolution evidence.

## DOMAIN CENSUS (reused, not re-derived)

Atoms available in the signaling frame: receptor, ligand, methylation state, response regulator, transcription factor, promoter, flagellar motor, phenotype distribution. Bonds available: the seven (Fig 12 :46 "A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."), plus the unary negation operator. No new primitive is available without import. Different atom sets would change the answers below, so the set is held fixed.

---

## Q1. Are ignore, retain and act isomers?

Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Fig 12 :94 "The arrangement is the substance."

Take a fixed atom set `{receptor, ligand, methylation state, response regulator, promoter, motor}`. Write the three routes:

- Retain: `ligand → receptor → methylation state → receptor` with `→` sequence closing into a `cycle`. Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." The methylation feedback loop is exactly this: activity controls methylation, methylation controls activity (Tu 2013, section 3.1 and Fig. 6).
- Act: `ligand → receptor ⇒ response regulator ⇒ motor` with `⇒` production. Fig 12 :77 "A produces B; B did not exist before" is the production test from the Operators table; phosphorylated CheY did not exist before CheA fired.
- Ignore by refusal: `¬(ligand → predicted outcome)` with the unary negation operator. Fig 12 :112 "A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond." This is REFUTED from Fig 5 :53, not the same as a held signal.
- Ignore by holding: `ligand + receptor + (no residual)` with `+` conjunction and nothing owed (Fig 5 :11).

Same atoms, different bonds, different behaviour. Under Fig 12 :117 they are **isomers**, and the difference is invisible in a list of molecular parts. Two cells with the same receptor, ligand and methylation machinery can behave differently because the bond differs.

**Falsifier, written before the run:** if all three routes can be written with the same single bond type over the same operands, so that the arrangement carries no information, the isomer claim fails and the three verbs collapse into a flat formula, which is the flat formula named at Fig 12 :6. The empirical test is whether two cells with identical parts but different loop sign or bond type behave differently; Lan and Tu 2016 supply a case (the MWC and local adaptation models share parts and differ in the loop's locality, with different behaviour).

**Verdict:** `specified`, single-source on the figure definition of isomer, corroborated by a low-overlap biology source for the loop-sign case. The fixed-atom condition is live: if a route needs an atom the others do not, the isomer claim narrows.

---

## Q2. What is the order of the routes?

Fig 12 :111 "A vocabulary without bonds can name a state and cannot name a route to one." Fig 12 :112 gives the grammar: "A plan is a sequence. A goal is a comparison. Progress is a subtraction." Fig 3 :20 "The chain is ordered by dependency, not by importance."

The order licensed by the figures and the biology is:

1. **Perceive.** Fig 3 :5 "the system can tell what is in front of it, and tell it apart from what was there before." Receptor occupancy and the time derivative must be available first. Tu 2013 section 4.2 shows the cell computes the derivative of the logarithm of ligand concentration at low frequency.
2. **Establish the memory before computing the gradient.** The methylation level `m` must be laid down before the comparison that drives tumbling can be made. Lan and Tu 2016: "the working memory of the system as encoded in the methylation level m is crucial for the system to carry out its key function, i.e., computing the gradient of the external stimulus." Reversing this order gives no gradient estimate.
3. **Route by boundary diff.** Fig 1 :14 "boundary diff" and :15 "where to look: broken vs novel". This is where the five-way split happens.
4. **Refuse before mint.** `THE_FORMULA.md` step 2 puts REFUTED before the mint; a term held false must be refused before a new term is composed over its place. Negation is not a bond (Fig 12 amendment), so it is a separate operation.
5. **Settle, then act.** `THE_FORMULA.md` step 5 "SETTLE the ground settles it. Verified only by what pays. A gate is not the ground." Acting before settlement is a bet the cell may still make under uncertainty, but the framework does not call it settled.
6. **Promote across scale.** Fig 4 :22 "Only methods cross up. Only head starts come down." The receptor design becomes a head start for daughter cells, not a recording of one ligand encounter.

**Falsifier:** exhibit a cell that reliably routes a signal with no prior internal state change at all, so that memory is not upstream of the response. A pure reflex with a receptor still has an internal state (receptor occupancy), so the claim to test is about the *route*, not about the absence of a homunculus. If the response is instantaneous and identical for all histories with the same current occupancy, the memory-before-gradient step is not required for that case and Q2 narrows to a conditional claim.

**Verdict:** `specified`; order claim triangulated across Fig 3, Fig 12, `THE_FORMULA.md` and two chemotaxis reviews.

---

## Q3. The two currencies do not add

Fig 12 :125 "A composition costs in two currencies, and they do not add." Fig 12 :126 "Bits price the description. Actions price finding out whether it holds. They are in different units, so a system holding one accounting cannot compare them" (the line continues on :127). Fig 12 :130 "Summing them into one figure is the error this names, not the fix for it. A price in bits and a price in actions are two readings, held apart."

For a cell:

- **Bits:** the precision with which the receptor repertoire and downstream network distinguish environmental states. Tkačik et al., as reported by Pedraza et al. 2018, find that the channel capacity of a single regulatory element is about 1 bit under typical conditions and up to about 3 bits under more restrictive assumptions. That is a price in bits.
- **Actions:** the cost of tumbling, of synthesising the lac enzymes, of entering a persister state and not growing. Dekel and Alon, as reported by Perkins and Swain 2009, measured the cost of lac expression as a nonlinear reduction in growth rate, superlinear because high synthesis rates deplete shared resources. That is a price in fitness, which is the action currency here.
- Pedraza et al. 2018 add a third caution: sensing itself has a metabolic cost, so even imperfect sensing has to be paid for, and the object of optimisation is long-term average growth over a sequence of environments, not instantaneous growth. This is the same "two readings held apart" point at a longer time scale.

A model that maximises mutual information alone will pick a different receptor repertoire from one that minimises the growth-rate cost of acting on false positives. Neither figure predicts the other, so both must be read or the choice is made blind.

**Falsifier:** find a common unit in which bits and actions are additive for a given cellular decision, with an experimentally measured conversion that does not smuggle in a fitness weighting. If found, Fig 12 :125-130 does not govern that case and the two-currency claim narrows.

**Verdict:** `specified`, triangulated across Fig 12 and two low-overlap biological sources.

---

## Q4. Catalyst, spent part and functional group

Fig 12 :119 "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is." Fig 12 :123 "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

**Catalyst.** CheR and CheB are enzymes that methylate and demethylate receptors repeatedly, so they survive their own use. The methyl groups added at specific sites are spent and regenerated. Lan and Tu 2016 describe methylation and demethylation as a covalent modification cycling with receptor activity, which is a catalyst plus a spent part in the figure's sense. The distinction matters because "nothing records which a term is": a model that treats the enzyme and the methyl group as the same kind of term will mispredict behaviour across multiple uses.

**Functional group.** The chemotaxis signaling core is a functional group: a substructure whose presence fixes the outcome (a two-component phosphotransfer that biases the motor). The qualifier, which ligand-binding domain is attached, says which member. Gavira et al. 2020 supply a direct molecular test: in the PctA/PctB/PctC paralogs the signaling domain has more than 96 percent average sequence identity, while the dCache_1 sensory domain has less than 56 percent. The conserved core fixes the kind of response; the variable sensory domain fixes which amino acid is recognised. That is Fig 12 :123 almost literally.

**Falsifier for catalyst:** exhibit a part that is both consumed and regenerated across uses with no record of which, and show that its behaviour across uses is identical to a purely spent part. Then the figure's distinction collapses for that case.

**Falsifier for functional group:** show that the signaling domain varies as much as the sensory domain across the Pct paralogs, so that no stable substructure fixes the outcome. The reported identity figures would then refute the reading.

**Verdict:** `specified`; catalyst claim triangulated across Fig 12 and Lan and Tu 2016; functional-group claim triangulated across Fig 12 and Gavira et al. 2020 (different fields, low overlap).

---

## Q5. Why the three verbs are not a single chain

Fig 12 :48 "A molecule is a bonded arrangement. A chain is the degenerate case: one bond type, no branching." Operators table :34 "the only bond a flat chain can express, so every term today is a sequence whether or not it should be."

If ignore, retain and act were written as a flat chain with a single `→` bond, the model would assert that every signal is first ignored, then retained, then acted on in that order. That is false. The actual structure branches at the route step: TRANSFERRED and REFUTED terminate without a mint, NOVEL parks or extends perception, BROKEN rebinding re-fits, and BROKEN mechanism mints. A chain cannot express this branching, which is why Fig 9 :55 calls the problem a union rather than a list.

This also explains why a single threshold model cannot answer the original question. A threshold is a `⋛` comparison, Fig 12 :87 "a threshold relation between two quantities", and it can choose between two operands. It cannot choose among five routes with overlapping conditions, because the operands are not all present at the same level and one of them (REFUTED) is a negation, not a quantity.

**Falsifier:** exhibit a single scalar threshold that correctly assigns all routes for a cell across a full environmental cycle, with no misclassified intersection. Then the chain reading is sufficient and the union claim narrows to a descriptive convenience.

**Verdict:** `general` on the bond structure, triangulated across Fig 12, the Operators table and Fig 9.

---

## ANCHOR

Verbatim figure text extracted from the local SVGs into `FRAMEWORK/reference/03-FIGURES_TEXT.md`, and the local `THE_FORMULA.md`. Biology claims are anchored to the six sources actually opened and recorded in `10_source_ledger.csv`. No new measurement was taken.

## FIGURE CENSUS

Fig 1 (boundary diff, per-slot residual), Fig 3 (dependency order), Fig 4 (methods and head starts), Fig 5 (five gap kinds), Fig 6 (instrument law), Fig 9 (union versus partition), Fig 11 (valence, selection scale), Fig 12 (isomer, cycle, catalyst, functional group, two currencies, comparison, chain), Operators table (production, negation, sequence), Symbols table (R is a slice), `THE_FORMULA.md` (refuse before mint, settle). Strains after re-census: none hidden. One live condition is named: the isomer claim in Q1 holds only over the fixed atom set stated above; if a route requires an additional atom, the relation is composition plus import instead of isomerism.
