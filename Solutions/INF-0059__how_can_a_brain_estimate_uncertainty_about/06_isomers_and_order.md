# Second order, local versus global, and the analogues that survive

**Mode: `specified` on the structure and order, `general` on the bond-level claim, not `grounded`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).

## RESIDUAL

The main audit establishes that an uncertainty estimate must be per-slot, typed, second order, channel aware and refusable. Three questions remain: (1) what makes the estimate second order rather than a re-description of the first-order decision; (2) are local and global confidence the same kind of object, so that one number can stand for the other; (3) which of Fig 12's four structures (isomer, catalyst, cycle, functional group) actually transfer to this question, and which are forced analogies.

## DOMAIN CENSUS

Atoms held for this derivation: b (belief, *"Not the observation"*, Symbols :21), a (action), o′ (observation), R per slot, w (learnable belief-source weight, Symbols :23-24), the five gap kinds (Fig 5), negation ¬ (Operators :53). Bonds held: the seven plus ¬. No new primitive is available without import, and none is needed. The implementation frame D4 remained a `gap` in the main census and is not smuggled in here.

---

## DERIVATION

### Q1 — What makes the estimate second order?

Fig 12 :104: **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom"**. A first-order decision is `b → (gap kind) → o′` resolved by a ground; once settled it can serve as an atom for a confidence molecule at the next level. The confidence reader is therefore not a re-description of the decision. It composes *over* the decision, which is precisely what makes it second order.

Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** A list containing the decision and a confidence number has recorded the ingredients but not the bond between them. Which bond holds is not recoverable from the operands.

The estimate must also be **settled** before it can be composed over again (Fig 5 :69-72, the settling amendment; `THE_FORMULA.md` step 5, *"A gate is not the ground"*). A confidence readout that has not been ranged against an outcome is a gate result, not a settled term.

**Falsifier, written before the run:** if a confidence estimate can be shown to be a relabelling of the first-order decision variable with no additional bond, and the relabelling makes the same predictions as the second-order reading in every slot, the second-order claim fails.

### Q2 — Are local and global confidence isomers?

Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** Fig 12 :123: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

Consider two confidence objects built from the same held atoms {R per slot, gap kind, w, ¬}:

- **Local confidence**: `R_s` bonded to a gap kind within one slot, with the channel check inside the bond. It routes a probe or a refusal for that slot.
- **Global confidence**: a read over many slots that drops the slot index, bonded to a summary criterion rather than to a specific gap kind.

They share the atom set but not the bond, so under Fig 12 they are **isomers**, not two strengths of one quantity. This is why a global meta-d′/d′ cannot stand in for a local confidence judgment: the global object has *"aggregated across slots"* (Fig 1 :22) and has therefore lost the operand that made the local object the substance it was.

Under the weaker reading, if only the substructure `read of R` is shared and the atoms differ, they are members of the same **functional group**: *"the group says what kind; the qualifier says which member"* (Fig 12 :123). Both readings agree that one cannot be averaged into the other.

**World check.** Wikipedia Metacognition (opened 2026-11-23): the domain-general/domain-specific question *"remains an active area of research"*, with neuroimaging and lesion studies finding distinct substrates for perceptual and memory metacognition while *"domain-general confidence signals also exist in frontal and posterior midline regions."* Fleming 2026 (opened) distinguishes local confidence from *"abstract, global self-beliefs"* supported by multimodal prefrontal areas. This corroborates the two-level distinction but does not decide the isomer versus functional-group question, which needs a fixed neural atom set not yet agreed. Marked `specified`, unmeasured.

**Falsifier:** if local and global confidence are shown to be the same substance under a fixed atom set (one can be derived from the other with no change of bond and no loss), the isomer claim fails and the functional-group reading stands instead.

### Q3 — Is the Symbols table's w the precision weight? (live strain S2)

Symbols table :23-24: **"How far the belief leans on private history versus inherited prior. w_A + w_B = 1, and w is learnable from the outcomes of past weightings."** This is a **belief-source** mixture: two origins of a belief, private history and inherited prior.

Wikipedia Predictive coding (opened 2026-11-23): *"Estimates of the precision are crucial for effectively minimizing prediction error, as it allows to weight sensory inputs and predictions according to their reliability."* This is an **evidence-reliability** weight applied to a prediction error.

Behrens et al. 2007 (opened): prediction error δ is multiplied by a learning rate α that *"should depend on the current levels of uncertainty in the estimate of the action's value."* This is an uncertainty-dependent gain on an update.

All three are learnable multipliers, and that shared shape is why the confusion is tempting. But they range over different operands: w mixes two sources of a belief, precision weights a sensory prediction error by estimated reliability, and α scales an update by value uncertainty. Under Fig 12 :46, **"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."** Different operands and different bonds mean different molecules.

**Resolution:** they are not one operator. The strain S2 from `01_figure_grounded_audit.md` section 7 stays **live and named**, not smoothed over. I earlier read them as the same thing; that reading is retracted and kept visible here.

**Falsifier:** an intervention that changes w while holding precision and α fixed, or changes precision while holding w fixed, would show they are distinct. If no such intervention can be constructed even in principle under a single generative model, the distinction collapses and this finding must be withdrawn.

### Q4 — What order does the composition have?

Fig 12 :111: **"A vocabulary without bonds can name a state and cannot name a route to one."** Fig 12 :112: **"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."** Formula, Composition: *"A plan is a sequence, a goal is a comparison, progress is a subtraction."*

The estimate therefore needs, in dependency order:

1. **Perception**: can it read R per slot (Fig 3 :4-5)?
2. **Vocabulary**: does it have the five gap kinds, so a residual can be sorted (Fig 3 :6-8, Fig 5 :10-14)?
3. **Objective**: can it say what would count as being right per slot (Fig 3 :9-11)? This is the link with no instrument (Fig 3 :27).
4. **Routing**: only now can it sequence a probe, compare against a threshold, subtract progress, or negate a held belief (Fig 12 :111-112).

Order is by dependency, not importance (Fig 3 :20, **"The chain is ordered by dependency, not by importance."**). Effort spent on a refined confidence score above a break cannot rescue the missing objective link below it.

**Falsifier:** demonstrate that a system can route a correct probe or refusal without any term for what counts as progress in its own slot. If so, the objective link is not required and the dependency order is wrong.

### Q5 — Which analogues transfer, and which are refused?

Fig 12 :116-124 lists four structures a compositional system exhibits. Tested one by one:

- **Isomer** (Fig 12 :117, quoted in Q2): transfers to local versus global confidence, conditionally on a fixed neural atom set. Marked `specified`.
- **Catalyst** (Fig 12 :119, *"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."*): transfers as a *question*, not a result. A confidence reader that is used to route a probe and then regenerated behaves differently across uses from one that is spent. Nothing in the figure set records which a given reader is, so this is a test to run, not a claim to make. Refused as an assertion.
- **Cycle** (Fig 12 :121, *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."*): transfers to the confidence/decision loop only if the second-order read re-enters as a first-order input (Fig 12 :121; Formula step 8, the reach changes so the prediction changes). The sign decides whether confidence calibration settles or runs away. Marked `specified`, unmeasured.
- **Functional group** (Fig 12 :123, quoted in Q2): transfers cleanly to the shared `read of R` substructure across perceptual, memory and decision metacognition. This is the weakest and safest analogue.

**Refused analogue:** the seven bonds are not a taxonomy of confidence phenomena. Fig 12 :90-91: **"Six tests, and they separate the seven bonds. Seven is a count of bonds, not of operators. Whether there are additional bonds is a question no test derived from these can answer."** A relation that fails the six tests is *"a claim that has not been made yet"* (Fig 12 :91), not a missing bond. Mapping "certainty", "doubt" and "surprise" onto three different bonds would be an apophenia, not a derivation (Fig 9 :27-28, *"describe it before you go looking, or any frame you pick will seem to fit"*).

### Q6 — Two currencies, held apart

Fig 12 :125: **"A composition costs in two currencies, and they do not add."** Fig 12 :126: **"Bits price the description. Actions price finding out whether it holds."**

A typed, per-slot confidence estimate is expensive to describe (bits) and may be cheap to refute with one well-aimed intervention, or the reverse: a short scalar is cheap to state and may take a whole experiment to settle. Neither figure predicts the other, so both must be read or the choice is made blind (Fig 12 :128-129). Summing them into one "better measure" score is the named error, not the fix (Fig 12 :130).

**Falsifier:** exhibit a single measure in the same units that correctly prices both the description length and the experimental cost of settling a per-slot confidence claim, with both readings preserved rather than summed.

---

## CONCLUSION

The uncertainty estimate is second order by the settled-molecule rule (Fig 12 :104), not by relabelling. Local and global confidence are isomers over a shared atom set or, more weakly, members of one functional group; they are not two strengths of one quantity (Fig 12 :117, :123). The Symbols table's w is not the precision weight nor the Behrens learning rate; the operands differ, and strain S2 stays live (Fig 12 :46). The composition is ordered by dependency, and the objective link, what counts as being right per slot, has no agreed instrument (Fig 3 :27). Of the four structures in Fig 12, isomer, catalyst, cycle and functional group, one transfers conditionally, one cleanly, and two are questions rather than claims. Every mapping onto a specific bond is refused.

This rescues what is defensible without inventing a primitive or naming a circuit: the estimate has a level, an order and a typed difference from the decision it reads. What it does not have is a ground that settles it, so nothing here is `grounded`.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; `THE_FORMULA.md` and the canonical figures README read locally; the world sources listed in `10_source_ledger.csv` opened 2026-11-23. No measurement was taken by this derivation.

## FIGURE CENSUS

Fig 1 (per-slot indexing), Fig 3 (dependency order, objective link), Fig 5 (gap kinds, settling amendment), Fig 6 (import and effect terms), Fig 9 (describe before looking, union), Fig 12 (settled molecule, bond typing, isomer, catalyst, cycle, functional group, two currencies, bond count), Fig 13 (shape not name), Operators (negation), Symbols (b not the observation, w learnable). Strains after re-census: S2 (w versus precision weighting) live and named; the isomer-versus-functional-group decision unmeasured because the neural atom set is not agreed.
