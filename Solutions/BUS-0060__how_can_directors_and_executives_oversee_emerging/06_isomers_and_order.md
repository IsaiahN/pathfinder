# Union, bond, and order in board risk oversight

**Mode: `specified` on the structural claims, `general` on the dependency order, not `grounded`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §7).

## RESIDUAL

The question puts three risk classes side by side, as if a board needed one method applied three times. Two further questions are owed: (1) are AI, cyber, and geopolitical exposure a partition or a union, and (2) what order does an oversight chain have, so that a remedy lands on the link that is actually broken? A third question follows from Fig 12: if two boards hold the same oversight atoms, can they still be different substances?

## DOMAIN CENSUS

Atoms available in the governance frame (all already held, none invented here): a per-slot residual R, a ground reading (incident, near miss, loss, regulatory finding), a reporting channel, a management-authored risk claim, an independent assessor, a board committee, a declared stake, a pre-registered refuter, and a refinement or refusal decision. Bonds available: the seven typed bonds plus negation. No new primitive is needed for anything below.

## DERIVATION

### Q1 - Partition or union?

- Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*
- Fig 9 :55-56: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."*
- Fig 9 :57-58: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."*

A model-vendor compromise is simultaneously cyber (unauthorized access), AI (model behaviour), and geopolitical (export controls on the chip supply). It is a case in three conditions, not three harder cases of one. A lever that clears the cyber-only region, such as endpoint hardening, leaves the intersection standing because the vendor's data access still binds. The residual that matters is the compound, and it has its own loop and its own ground.

**Verdict:** union, not partition. Verdicts per risk class and per compound are kept separate and never averaged. NACD's own discussion guide reflects this: it asks whether AI and cyber risk should be *"a separate matter for board discussion and action, or ... integrated as part of our overall operations? Or both?"* (NACD, 2026). "Or both" is the union reading in board language.

**Falsifier:** if a risk class is exhibited whose occurrence is independent of the other two in every observed case, so that one lever closes it without residue, it is a partition member for that case and the union verdict narrows.

### Q2 - What order does the oversight chain have?

- Fig 3 :20: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."*
- Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*
- Fig 3 :25-27: the link between vocabulary and objective *"has neither, so it attracts the least attention and the fewest instruments"*; *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

Order: perception (the report arrives) → vocabulary (what the risk affords) → objective (what counts as progress) → planning (a route under incomplete information) → learn and carry (name what worked, verify it, carry it). The usual board response to limited information buys more of link 1. If the break is at 2 or 3, that spend arrives at a step that cannot use it.

**Verdict:** the chain has a dependency order, and the break must be located before a remedy is chosen. Locating it requires an instrument at links 2 and 3, which most boards do not have (Fig 3 :27).

**Falsifier:** show a board whose risk vocabulary and objective are demonstrably adequate, whose blocker is a genuinely missing observation at link 1, and where supplying that observation changes a ground-measured outcome. Then more information is the right remedy and this verdict narrows.

### Q3 - Refuse before mint

- Operators table :58: *"a refutation is a negation, which is why a vocabulary without it can only accumulate"*.
- Formula step 2: the fifth bin is REFUTED, *"a term held is false; what is owed is a refusal, not an explanation"*, and *"no arrangement of the other four reaches it."*
- Fig 5 :53-55: *"refuted: a term we hold is wrong; a term is owed that says so"*, and *"What it removes is not a term but a term's standing to be composed over. Nothing leaves the library. What falls is the reach."*

A board whose vocabulary contains only nouns, "risk register," "heat map," "control," "posture," can record that a risk exists and cannot say that a previous reading was *wrong*. It can only accumulate items. Before minting a new near-miss instrument, the board must refuse the held term "no material incidents" as a verdict (Fig 10 :47-48: a convention that decides an outcome has stopped being a convention). The refusal adds a term to the record and removes the old reading's standing to be composed over. That is why the order matters: refuse first, then mint.

**Verdict:** a board without a refusal operator can be corrected and cannot carry the correction. The pre-registered refuter in `01` §4 is the board's negation term, written before the run.

**Falsifier:** exhibit a board vocabulary that can state that a held risk reading is false, with the refusal recorded and the old reading's standing withdrawn. Then the missing-operator verdict does not apply there.

### Q4 - Are two oversight arrangements isomers?

- Fig 12 :117: *"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
- Fig 12 :94: *"The arrangement is the substance."*
- Fig 12 :46: *"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands. A recipe that names only its ingredients has recorded half of itself."*

Take two boards with the same atom set: internal audit, an independent technical assessor, the audit committee, an incident channel, and a management-authored risk claim.

- **Arrangement A:** independent assessor → management (production bond ⇒: the assessor's finding produces management's revised claim), audit committee reads management's claim.
- **Arrangement B:** independent assessor → audit committee (sequence bond →, or production ⇒), management reads the committee's question.

Same atom list in both. Different bond, and therefore different substance. Under A, the checker can reconstruct the claim it checks (Fig 10 :42) and soundness is zero. Under B, the assessor's reading arrives at a body that did not author it. The atom inventory in a governance report cannot tell you which board you are looking at, which is exactly Fig 12's point: *"nothing downstream can tell them apart, and nothing signals that anything was lost"* (Fig 12 :15-16).

**Verdict:** oversight arrangements over a fixed atom set are isomers. The variable is bond type, not atom count. Adding a fourth committee to arrangement A does not change its substance; it hands the same claim to another reader.

**Falsifier:** if two boards with identical atom sets and different reporting bonds are shown to produce identical ground-measured outcomes under every condition, the isomer distinction has no behavioural consequence here and the claim is withdrawn.

### Q5 - Functional group and qualifier

- Fig 12 :124: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*

Every oversight arrangement in this derivation shares the functional group `residual → vocabulary → objective → route → carry`, with each link an ordered bond. The qualifier, which atom occupies the anchor seat and which atom occupies the checker seat, says which member of the group it is. The group fixes the kind (a checking arrangement or a mutual-update room); the qualifier fixes the member (AI, cyber, geopolitical compound). This is why the four-condition separator can be general while the verdicts remain per slot.

### Q6 - Two currencies, not one

- Fig 12 :125-127: *"A composition costs in two currencies, and they do not add. Bits price the description. Actions price finding out whether it holds."* and *"Neither figure predicts the other, so both are read or the choice is made blind."*

A risk report is cheap in bits and expensive in actions to verify against a ground. A board meeting is cheap to schedule and may take a whole budget to settle one claim. A governance dashboard that counts reports produced, policies written, and training hours completed is counting the description currency and presenting it as the action currency. Fig 12 :130: *"Summing them into one figure is the error this names, not the fix for it."*

**Verdict:** the cost of a control and the cost of checking it must be reported separately. A single "governance maturity score" adds quantities in different units.

**Falsifier:** exhibit a governance measure in which description cost and action cost are shown to be the same quantity in the same units, so that summing them is legitimate. No source opened here does this.

## CONCLUSION

The three risk classes form a union with compounds, not a partition. The oversight chain has a dependency order and usually breaks between vocabulary and objective, where there is no instrument. A board needs a negation term before it can carry a correction. Oversight arrangements over the same atom set are isomers whose substance lies in the reporting bond, not the atom list. They share a functional group whose qualifier is the slot. Description cost and action cost are two currencies and must not be added.

This rescues what is checkable without inventing any new atom: the union split, the order, the refusal, the bond test, and the two-currency rule. It does not name the board recipe, which remains a declared `gap`.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the Operators table, `THE_FORMULA.md`, and the canonical figures README, all opened this session. World corroboration from NACD (2026) and FRC (2024) for the union and no-template findings. No board measurement was used.

## FIGURE CENSUS

Fig 1 :19/:22 (per slot, no aggregation); Fig 3 :19/:20/:25-27 (dependency order, missing instrument); Fig 5 :53-55 (refusal); Fig 6 :23 (closure moved by contact); Fig 9 :54-58 (union not partition), :32 (shape not name); Fig 10 :42/:47-48 (soundness, convention as verdict); Fig 12 :15-16/:46/:94/:117/:124/:125-127/:130 (bond, isomer, functional group, two currencies); Operators :58 (negation); Symbols :43-44 (slot, R per slot); Formula steps 2, 5, 7. Strains after re-census: none inside governance; the physical-six-term strain is retracted and recorded in `01` §8 S1.
