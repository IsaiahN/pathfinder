# Union structure, dependency order and the two currencies of an uncertainty claim

**Mode: `specified` for the application to models, `general` for the structural claims. Not `grounded`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 5).

## RESIDUAL

The question offers one disjunction: the model communicates uncertainty reliably, or it mainly reflects the limits of training and evaluation. I need to decide whether this is one quantity with two ends, or two conditions that must be split. I also need to decide what a "reliable" report costs, because a cheap number can look like an expensive settlement.

## DOMAIN CENSUS

Atoms held for this derivation: a report R, a ground value G on the input, a frame F with closure(Γ), and an anchor A outside F. Bonds available: comparison ⋛ between quantities, sequence →, negation ¬ for a refusal. No new primitive is introduced. The human metacognition field is a world analogue, not an atom in this derivation.

## DERIVATION

### Q1: Is the disjunction a partition or a union?

- Fig 9 :54 "when the split lands on a union rather than a partition, unbundle before you search again."
- Fig 9 :55-58: a bundled problem is usually a union of overlapping conditions; a single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds.
- Condition A: calibration on familiar inputs (report tracks accuracy where the model has data). Condition B: detection of unfamiliar inputs (report tracks novelty). Guo et al. (2017) and Hendrycks and Gimpel (2017) show these can come apart: a network can be poorly calibrated even in distribution, and softmax scores are only a baseline for OOD detection.
- Therefore A and B overlap. They are not endpoints of one scale. The residual is a **union compound** and must be unbundled before a search is run. Keeping it bundled is how a global calibration number hides the one unfamiliar slot (Fig 1 :19 "The residual is indexed by object slot, not aggregated.").
- **Triangulated** across Fig 9 and Fig 1 with the two ML sources as secondary corroboration. **Falsifier:** exhibit a decidable internal boundary such that every input satisfies exactly one of A and B. If that boundary exists, the union claim fails and a single loop suffices.

### Q2: Why averaging the two horns is a type error, not just a blunt instrument

- Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."
- Fig 1 :13 "a global R near zero with one live slot residual is a legal state."
- The unfamiliar input is one slot. A good average over familiar slots is compatible with a completely unread novel slot. Averaging is not merely imprecise here; it removes the very quantity the question asks about.
- **Single-source** for the slot rule (Fig 1); world corroboration from Guo et al. (2017). **Falsifier:** show that under a declared metric the novel slot's residual is bounded above by the global residual, so no masking is possible.

### Q3: What order do the loops run in?

Fig 3 :19 "Optimising a link that already works cannot rescue one that does not." Fig 3 :20 "The chain is ordered by dependency, not by importance." The order is:

1. perception (can it tell novel from familiar),
2. vocabulary (does it have a refusal term rather than only a scalar),
3. objective (calibration to what reference),
4. planning (report to decision),
5. learn and carry.

Fig 3 :25-27 says the middle link attracts the least attention and the fewest instruments because it has neither obvious failures nor obvious tests, and "A link with no instrument is not a link that works. It is a link nobody has looked at." Most work on uncertainty scores targets links 3 and 4. Link 1 is where the interesting break may be.

**Falsifier:** show an instrument for link 1 that is already returning something that fails to resolve on novel inputs. Under Fig 6 :34-35, an instrument is improved from a worse one already returning something; if nothing is returning, there is no edge to extend from and the claim that link 1 has an instrument is empty.

### Q4: The two currencies of a report

- Fig 12 :125 "A composition costs in two currencies, and they do not add."
- Fig 12 :126-127: "Bits price the description. Actions price finding out whether it holds. They are in different units, so a system holding one accounting cannot compare them and will not notice the shortfall."
- A confidence scalar is cheap in bits: a few numbers, a temperature scaling fit (Guo et al., 2017). Whether the report actually tracks ground truth on a novel input is priced in actions: an experiment, an external anchor, a source-discriminating instrument. The ML literature demonstrates the gap directly. Post-hoc calibration is cheap in bits, and Ovadia et al. (2019) find it falls short under shift, which is the action cost arriving unpaid.
- A system reporting one accounting cannot compare the two, so it will not notice the shortfall. This is the structural reason the reliability horn cannot be won by producing more calibrated-looking numbers.
- **Triangulated** across Fig 12 and Fig 1 (frame-internal quantities are disqualified), with Guo and Ovadia as world corroboration. **Falsifier:** exhibit a single unit in which description cost and settlement cost are commensurable for this claim. Fig 12 says they do not add; a demonstration that they do would break this finding.

### Q5: The human analogue is an isomer-like case, not a second witness

- Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- A human confidence judgment and a model confidence score can share the same functional arrangement (an internal state, a report, a ground of correctness) while differing in substance. Fleming (2024) reports that human metacognitive judgments are inferential and sometimes diverge from task performance. Jin et al. (2022) report that the across-subject confidence-accuracy correlation is largely unrelated to individual metacognitive ability.
- So the human case is a low-overlap analogue that **corroborates the shape** (a report is not the ground), but it is not a second independent witness for the figure verdict, because it shares the question framing with this derivation. Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool."
- **Falsifier:** show that the human confidence literature and the ML calibration literature were generated by independent instruments with no shared framing. I did not find that; both are studies of confidence versus correctness.

## CONCLUSION

The disjunction is a union compound, not a partition. Its two conditions must be searched separately and never averaged. The dependency order puts novelty perception before calibration objectives, and the middle link lacks an instrument. A report costs in two currencies that do not add, so a cheap calibrated number cannot purchase a ground settlement. The human analogue corroborates the shape but is not a second witness. The falsifiers are stated above and were written before this conclusion.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; `THE_FORMULA.md`; the six world sources opened 2026-11-23 and listed in `10_source_ledger.csv`. No measurement was taken by this derivation.

## FIGURE CENSUS

Fig 1 :13, :19, :22; Fig 2 :40; Fig 3 :19, :20, :25-27; Fig 6 :34-35; Fig 9 :54-58; Fig 12 :117, :125, :126-127; Formula steps 3 and 5. Strains after re-census: none. The apparent Fig 8 versus Fig 6 strain was resolved in `01_figure_grounded_audit.md` section 2.
