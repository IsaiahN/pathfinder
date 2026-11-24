# Isomers, bonds and order: the supporting derivation

**Mode: `specified` on the structural claims, `general` on the order rule, not `grounded`.** Simulated derivation checked against the figures, not a ground reading.

## RESIDUAL

Two questions are owed that the main audit does not settle:

1. If the ingredient list of a corpus (demographics, languages, genres) is held fixed, can the arrangement still change the apparent social reading? That is an isomer question under Fig 12.
2. What is the dependency order among corpus, evaluator, habitat and instrument, and can a lever at one stage rescue a break at another? That is a Fig 3 question.

## DOMAIN CENSUS

- Atoms "held" at the corpus scale: tokens, the states they name and the structures they arrange. The six-term physical substrate is not being mapped onto cultures; that mapping was retracted in the exemplar and is not repeated here. Here the atoms are whatever the corpus supplies to the model's library Γ.
- Bonds held: the seven plus negation. Conjunction `+` and identity `≡` are symmetric; sequence `→`, production `⇒`, subtraction `−` and comparison `⋛` are ordered. Negation `¬` is unary and is not a bond.
- Anchor: a non-updating ground for each slot. Not present for D4.

## DERIVATION

### Q1. Ingredients versus arrangement (isomer)

Fig 12 :6-7 names the collapse: *"collapse 6: the flat formula"*, *"the ingredients are recorded and the arrangement is not."* Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."* Fig 12 :94: *"The arrangement is the substance."*

Fig 12 :117:

> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

Let a corpus C have ingredient multiset I (the same proportions of the same languages, genres and demographic markers). Let two arrangements A1 and A2 bond those ingredients differently: in A1, polite indirectness is bonded to deference; in A2, the same linguistic forms are bonded to intimacy. The ingredient formula is identical; the bonded molecules are different substances. Under Fig 12 :117 the two corpora are isomers, and the difference in the model's per-slot social readings is *"decisive in the behaviour"* even though it is *"invisible in the formula."*

This is the exact defect of a bias report that lists percentages and stops. It prices the description in bits and never pays the action cost. Fig 12 :125-126: *"A composition costs in two currencies, and they do not add. Bits price the description. Actions price finding out whether it holds."*

- **Falsifier, written before the run:** swap bonds at fixed I and find no per-slot reading change against a low-overlap ground. Then the flat formula was sufficient and the isomer claim fails.

### Q2. Functional group versus isomer

Fig 12 :123:

> **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

Two models trained on different corpora may still share a functional group: the `state → structure → state` loop that produces any social reading at all. The group fixes the kind (a reading exists); it does not fix the member (which reading, for whom). So a universal claim like "all LLMs are socially intelligent in the same way" is a functional-group claim smuggled in as an identity claim. Fig 12 :68: identity is *"two names, one referent"*, with the test *"substitute one for the other. Is anything lost? No."* Substituting one corpus for another does lose something at the per-slot level, so identity fails.

- **Falsifier:** if substituting one corpus for another preserves every per-slot reading, identity holds and the functional-group/non-identity distinction collapses for that case.

### Q3. Metamerism is not isomerism (a useful distinction)

The source-discrimination essay's metamerism is about **different causes producing the same reading**. Fig 12's isomerism is about **same atoms, different bonds, different behaviour**. They are inverses in an important sense:

- Isomer: same ingredients, different arrangement, different output. The formula hides the difference.
- Metamer: different sources, same output. The reading hides the difference.

Both are projection losses. Fig 12 :15-16: *"nothing downstream can tell them apart, and nothing signals that anything was lost."* The auditable consequence is the same: the flat report does not carry the information needed to distinguish cases. The distinction matters for the instrument in D4: an isomer test varies the bond and watches the output; a metamer test varies the source and watches whether the output stays fixed. Both are needed.

- **Falsifier:** an instrument that varies source and bond independently and finds that output changes iff bond changes (never iff source changes) would refute the metamer half while leaving the isomer half standing. Recorded as a partial-failure condition.

### Q4. Order by dependency (Fig 3)

Fig 3 :20: *"The chain is ordered by dependency, not by importance."* The four domains form a chain:

```
corpus atoms and bonds  ->  model reach  ->  evaluator reading  ->  deployment contact
                                 |                 |
                          (no instrument at vocabulary -> objective)
                                                        ^
                                          D4 discriminator owed, not in the chain
```

- **Link 1, perception/vocabulary:** does the model have terms for what a social situation affords in that culture? Cultural assumptions set this invisibly.
- **Link 2, objective:** what would count as progress in that culture, in the frame's own terms? Fig 3 :25-27: *"having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."*
- **Link 3, planning and learn and carry:** Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* Adding more training data (link 1) cannot rescue a missing objective (link 2).
- **Link 4, contact:** Fig 11 :40: *"An improvement that does not change contact changes nothing, however much it improves."*

D4 is not a link in this chain. It is the instrument that would make link 2 visible, and it is missing. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

- **Falsifier:** an intervention at link 1 that moves the deployment ground while link 2 remains uninstrumented would break the dependency claim. Recorded.

### Q5. Two readings of the same independence parameter

Fig 8 :47: *"Independence is one quantity read twice."* Fig 8 :48: how much two frames draw on the same evidence decides *"both whether their agreement means anything and whether their union has any surplus."* Fig 2 :39-41 gives the valence: disqualifying for a verdict, efficient for a convention.

So the same fact (evaluator and corpus share a cultural pool) has two consequences:

1. Their agreement about the reading is a convention, not a verdict (D2).
2. Their union has no surplus, so no new atom can be imported from that pairing (D1/D4).

This is not a contradiction with Fig 8 :45, *"Two frames together reach what neither reaches alone"*; that claim requires differing closures. At high overlap it is one frame wearing two names (Fig 8 :49: *"Two frames that overlap almost completely are one frame wearing two names."*).

- **Falsifier:** a high-overlap pair that nevertheless produces a new atom with provenance and a shadow test would refute the no-surplus reading for that pair.

## CONCLUSION

Over a fixed ingredient multiset, differently bonded corpora are Fig 12 isomers: same atoms, different bond, different substance, with the difference decisive in behaviour and invisible in a percentage report. The cultural source of a single reading is a Fig 11 metamer problem: different sources, one projection. The dependency chain breaks at vocabulary to objective, which has no instrument, and adding data upstream cannot rescue it. Independence is one parameter with two readings: shared pools manufacture conventions and remove surplus at the same time.

Both the isomer and the metamer claims are `specified`, ungrounded. No corpus was bonded and no instrument was run. The falsifiers above are written before this conclusion.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session. Fig 12 (isomer, functional group, flat formula, two currencies, identity test), Fig 3 (dependency order, unmeasured middle link), Fig 8 (independence read twice), Fig 2 (correlation valence), Fig 11 (contact). Plus the source-discrimination essay for the metamer distinction (framework author, high overlap, no independent witness weight). No measurement was used.

## FIGURE CENSUS

Fig 2 :39-41, Fig 3 :19/:20/:25-27, Fig 8 :45/:47/:48/:49, Fig 11 :40, Fig 12 :5/:6-7/:15-16/:68/:94/:117/:123/:125-126. Operators table for symmetric versus ordered bonds. Strains after re-census: the comparator operand type (S3 in `01` section 7), named and left open.
