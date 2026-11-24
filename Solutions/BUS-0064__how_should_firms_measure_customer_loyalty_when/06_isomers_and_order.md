# Isomers, union and order in the loyalty measurement question

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).

## RESIDUAL

The observable "bought again" is one reading produced by at least four sources. Three questions are owed: (1) is the four-source structure a union or a partition, (2) are the sources isomers of one behavior under Fig 12's definition, and (3) in what dependency order must the measurement chain be built, and where does it actually break?

## DOMAIN CENSUS

Atoms held on the measurement side: the reading R, the customer slot s, the market anchor, the habitat conditions (rivals, switching costs, habit cues, availability), and seven bonds including ⋛ comparison and → sequence. No new primitive is available without an import, and the four conditions are such an import from the business frame, provenanced in `10_source_ledger.csv`.

## DERIVATION

### Q1: Union or partition?

Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*

A customer can be habitual and locked in and face no alternative at once. Removing habit does not remove lock-in; the intersection remains. So the four sources are a **union of overlapping conditions**, not a four-way partition. Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*

**Falsifier, written before the run:** if a single intervention removes all four sources simultaneously and leaves one clean residue, the union reading fails and a partition reading may be enough. Recorded in `01` section 3 as refuter 3.

### Q2: Are the four sources isomers of one behavior?

Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** Fig 12 :94: **"The arrangement is the substance."**

- The four cases share the observable `bought again`. In that sense they have the same atom set at the reading level.
- They differ in the arrangement of causes. Commitment is `belief → choice under rival`; habit is `cue → repetition without evaluation`; lock-in is `accumulated cost → staying despite preference`; no-alternative is `empty choice set → staying by default`.
- They are decisive in behavior in different ways: a committed customer stays when a rival appears; a locked-in customer stays until the cost is removed; a habitual customer stays until the cue changes; a customer with no alternative stays until the set widens.

So at `specified` strength they are **isomers of a reading**: same surface formula, different arrangement, different consequences.

**Strain, named not hidden (S1 of `01`).** Fig 12 :92: *"Symmetry is what decides whether an arrangement is a new thing."* The seven bonds are typed composition relations between operands; the "bond" between a cause and a behavior here is causal, not one of the seven. So this is a structural analogy, not a figure derivation. The mechanism claim rests on the world source on metamerism (*The Hard Problem is About Source*), not on this analogy. If the four sources turn out to differ by a typed bond rather than by causal history, the analogy must be withdrawn and the rest of the derivation stands.

### Q3: What is the dependency order, and where does the chain break?

Fig 3 :20: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."*

| link | present in firms? | instrument? |
|---|---|---|
| 1 perception | yes, abundant transaction logs | yes |
| 2 vocabulary (what an occasion affords: alternatives, costs, cues) | partial | weak |
| 3 objective (what counts as progress: discriminating the source) | usually no | **none** |
| 4 planning (interventions that break each source) | sometimes | partial |
| 5 learn and carry | yes, but carries a score | carries the wrong object |

Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* The chain breaks at link 3. Firms optimise link 1 (more purchase data), which is effort above the break. Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*

**Falsifier:** show a firm with a validated, instrumented objective for source discrimination whose measurement chain still fails at link 4 or 5. That would move the break and change the recommendation from "build the objective" to "build the intervention".

### Q4: What order is the union?

- **First order (the reading).** `customer slot → behavior → market return`. A repeat purchase is a first-order reading: the behavior is composed with a market that pays for it. This is what current metrics record.
- **Second order (the discrimination).** The first-order reading is settled against the ground (the purchase really happened, the customer really paid), so under Fig 12 :104 it becomes an atom for the next level: **"A settled molecule becomes an atom for whatever composes over it."** Each intervention (rival, cost removal, cue break, wider set) composes over that atom as a second-order comparison ⋛ between "behavior under condition A" and "behavior under condition B".
- The comparison is a threshold relation between two quantities (Operators table :48-50: *"a threshold relation between two quantities"*), and the quantities are the same customer's purchasing under two conditions. Operand type is clean here, unlike the second-order ⋛ strain in the QMGR-0037 exemplar.
- This is the recursion Fig 12 names, not an import of a new kind. No new primitive is needed to compare a reading with itself under a changed condition.

**Falsifier:** show that the two operands of the comparison cannot be the same slot under two conditions, because the intervention itself changes the slot. Then the second-order composition fails and each condition must be a separate first-order loop.

## CONCLUSION

The four sources are a union (Q1) and, at `specified` strength with a named strain, isomers of one reading (Q2). The measurement chain breaks at the objective link, not at perception (Q3), so the remedy is an instrument for source discrimination, not more purchase data. The reading is first order; the discrimination is a legal second-order comparison of the same slot under two conditions (Q4). This framing rescues what is defensible in the business literature, attitudinal plus behavioral loyalty, without the part that fails: a single scalar that claims to have recovered the source.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; the business sources in `10_source_ledger.csv`; the eight essays, of which one was re-opened this session. No measurement was taken.

## FIGURE CENSUS

Fig 3 :19/:20/:27 (dependency order and break); Fig 6 :21 (composition adds no atom); Fig 9 :54/:55/:57 (union, unbundle, compound); Fig 10 :26 (pooled readings); Fig 11 :48/:49 (enumerate habitat, valence relative to residual); Fig 12 :92/:94/:104/:117 (isomer, arrangement, settled molecule); Operators table :48-50 (⋛ threshold relation); Fig 13 :134 (unreachable is a verdict). Strained after re-census: one (S1, the causal "bond" versus Fig 12's typed bond), named and not hidden.
