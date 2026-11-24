# Bonds, reach and habitat order: the supporting derivation for REA-0017

**Mode: `specified` on the application, `general` on the structural claims. Not `grounded`.** Simulated derivation checked for internal consistency against the figures, not a ground reading.

## RESIDUAL

Two supporting questions are owed after `01`:

- Q1: what exactly is carried by a "representation" if the ingredient list is not the molecule? If two representations hold the same active features, are they the same substance?
- Q2: what is the dependency order of the three conditions, and which of them can be substituted for which?

## DOMAIN CENSUS (supporting)

Atoms available: the six of Fig 13 plus the held atoms of the machine-learning frame (features, objectives, environments, generators). Bonds available: the seven plus negation. No new primitive is available without import. Relevant figures: Fig 4 (membrane), Fig 6 (closure wall), Fig 8 (union surplus), Fig 11 (habitat), Fig 12 (bond), Fig 13 (closed set, open arrangements), Operators table (negation).

## DERIVATION

### Q1 - Are two representations with the same active features the same substance?

- Fig 12 :46: **"A recipe that names only its ingredients has recorded half of itself."**
- Fig 12 :94: **"The arrangement is the substance."**
- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Fig 12 :23: *"this bond is symmetric, so the four are one term and nothing consults the bond to find that out"* (on `A+B+C` spellings).

A feature vector is an ingredient list. Two learners with the same active dimensions but different typed relations among them are, under Fig 12's definition, **isomers**, not variants of one thing. The difference is invisible in the vector and decisive in transfer behaviour. This is the structural reason why measuring only accuracy on familiar patterns cannot distinguish a generator from a recording.

- Fig 12 :119: **"catalyst. A part that survives its own use."** Some components are re-applicable methods; others are spent parts. Fig 12 :120: *"Spent and regenerating parts behave differently across uses, and nothing records which a term is."* A training procedure can leave a catalyst (an inductive bias that survives) or a spent part (a record of one occasion). Distinguishing them needs a second-use test, which is what transfer evaluation is.
- Fig 12 :123: **"functional group. A substructure whose presence fixes the outcome."** Generalizing regimes share a functional group: the generator-plus-differing-contact arrangement. The particular method is the qualifier that says which member.
- Fig 12 :125-126: **"A composition costs in two currencies, and they do not add."** *"Bits price the description. Actions price finding out whether it holds."* A compact representation (few bits) can be expensive to verify on a novel situation (many actions), and a verbose arrangement can be cheap to refute. Benchmark accuracy prices neither correctly on its own. Fig 12 :130: **"Summing them into one figure is the error this names, not the fix for it."**

**Falsifier, written before the run:** if a representation's transfer behaviour is fully predicted by its ingredient list with the bond term set to zero across a change of situation, the isomer claim fails and the flat-form reading stands.

**Status:** triangulated. Fig 12 supplies the bond definitions; the pigeon and education studies supply the low-overlap behavioural analogue (same task, different training arrangement, different transfer). The direct measurement of a bond term in a neural representation is not in this folder, so the application stays `specified`.

### Q2 - What is the dependency order of the three conditions?

Fig 3 :20: **"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces."**

The chain for generalization:

```
perception of situation slots (Fig 1 :19)
  -> vocabulary / terms for what a situation affords (Fig 3 :7; Fig 12 :111)
  -> objective / what counts as progress on a novel slot (Fig 3 :10; Operators :51 "a goal is a comparison")
  -> plan / which training habitat to construct (Fig 3 :13)
  -> learn and carry / name what worked and verify it (Fig 3 :15)
```

- Fig 12 :111: **"A vocabulary without bonds can name a state and cannot name a route to one."** A learner with only ingredients cannot state a training plan that changes reach; it can only accumulate states.
- Operators table :51: **"a goal is a comparison, which is why a vocabulary without it cannot state one."** "Generalize beyond familiar patterns" is a comparison. A learner that cannot encode the comparison cannot make it its objective; the training objective has to be stated in the learner's own terms (Fig 3 :10).
- Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."** The objective link is the weak one, as Bengio et al. 2013 confirm from inside the field.

**Order verdict:** the habitat condition (D2) must be set before the objective can be evaluated, and the objective must be stated before a training plan is intelligible. This is why "just use more data" (a D2 budget lever) cannot substitute for a generator (D1) or an anchor (D3): effort spent above the break cannot rescue a link below it (Fig 3 :19).

**Falsifier:** an instrument that measures the objective link in a given learner and shows it is not the binding constraint in a documented OOD failure.

### Q3 - Are the three conditions a partition or a union?

- Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
- Fig 9 :57: **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."**
- Fig 8 :47: **"Independence is one quantity read twice."**

The three conditions overlap: a generator is only identifiable against a ground; a differing-closure habitat is only valuable if the learner can carry what it finds; a ground reading is only meaningful per slot. They form a union with intersections, not three independent dials. A single lever (say, more environments) clears the region where only the habitat condition is missing and leaves the generator and ground intersections standing.

One subtlety is kept visible: the same independence parameter that makes a union of frames productive (Fig 8 :45) also makes agreement worthless when frames share an evidence pool (Fig 2 :40). This is not a contradiction. Fig 8 :48: **"How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus."** One quantity, two readings.

### Q4 - What does Fig 4's membrane add that Fig 6's wall does not?

- Fig 4 :21: **"The membrane is the boundary between the sizes, and the rule about what may cross it. Not a wall: a filter with a direction."**
- Fig 6 :21: **"MINT composes inside the closure and can never add an atom."**

Fig 6 governs whether a new primitive can be reached at all (within-scale closure wall). Fig 4 governs what may travel between one learner and a population of learners, or between one training run and the next (between-scale filter). A training method crosses up only if it is re-applicable; a recording of one success does not. Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."** The round trip gap `R_T` between the three-condition shorthand and a concrete method recommendation is recorded in `11_audit.md`.

**Strain resolved by re-census:** an initial reading set Fig 4 against Fig 6. Re-census assigns them different objects (membrane versus wall). No hidden contradiction.

## CONCLUSION

The representation is a molecule, not an ingredient list: same features under a different bond are a different substance with different transfer behaviour (Fig 12 :117). The three conditions of the main answer are ordered by dependency, with the objective link the least instrumented (Fig 3 :25-27), and they form a union rather than a partition (Fig 9 :55-57). Fig 4's membrane and Fig 6's wall govern different boundaries and do not strain after re-census. Both supporting claims are `specified` where applied to learning systems and `general` at the structural level, and neither is a ground reading.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, checked this session; the Operators and Symbols tables; `THE_FORMULA.md`; the world sources in `10_source_ledger.csv`. No training run or OOD measurement was performed.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 2 (anchor and independence), Fig 3 (dependency order, broken middle link), Fig 4 (membrane, round trip), Fig 6 (closure wall, import), Fig 8 (union surplus, one quantity read twice), Fig 9 (union versus partition), Fig 11 (habitat enumeration, lineage), Fig 12 (bond, isomer, catalyst, functional group, two currencies, grammar), Fig 13 (closed set, arrangements not), Operators table (goal as comparison, negation). Strained after re-census: none; one live type question carried from `01` F9 (the threshold defining "beyond familiar").
