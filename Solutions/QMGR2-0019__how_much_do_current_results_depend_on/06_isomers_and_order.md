# What bond does the work in "how much", and why a scalar is the flat-formula error

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

The question asks for a magnitude: how much do results depend on assumptions. The figures say a magnitude is not a bare number; it is a comparison between two states of a system, and the comparison carries a bond that must be named. Two questions are owed: (1) which operator expresses "baseline result versus pushed result", and (2) is a single dependency number a faithful compression of the arrangement, or does it lose the very thing asked for?

## DOMAIN CENSUS

Atoms held here are not physical primitives but reportable objects: the baseline result `B`, the pushed result `P`, the assumption slot `s`, the push magnitude `d`, the recorded data `D`. Bonds held: the seven binary operators and negation (Fig 12, Operators table). No new primitive is available without an import.

## DERIVATION

### Q1 - Which bond is "how much"?

- Operators table :47-51 defines `⋛` comparison as *"a threshold relation between two quantities"*, with the test *"is it about which is larger, rather than both being present?"* Fig 12 :52 lists the same: *"a goal is a comparison, which is why a vocabulary without it cannot state one."*
- The question is not asking whether B and P are both present. It asks whether P exceeds a threshold of displacement from B. So the governing bond is `⋛`, not conjunction or identity.
- The displacement itself is `B − P` in the sense of Operators table :41-45, subtraction: *"A with B removed or absent"*, with the test *"is the second operand's absence the point? Yes."* Here the second operand is the baseline value; the point is what remains when the baseline is taken away.
- **Fig 12 :126-127:** *"A composition costs in two currencies, and they do not add. Bits price the description. Actions price finding out whether it holds."* A reported dependency in sigma units prices the description; a full prior re-run prices the actions. Reporting one as if it were the other is the unaddressed sum the figure warns about. Yang et al. 2026 give the measured version: a cheap reweighting recovers only about 17 percent of the directly sampled shift, so the cheap description carries about 17 percent of the information about the expensive one.
- **Answer:** `how much(s) = (B ⋛ P) with displacement B − P`, evaluated per slot `s`, with the cost of the evaluation declared in actions as well as in report length. Triangulated (Fig 12 plus Operators table).

### Q2 - Why a global scalar is the flat-formula error

- **Fig 12 :5:** *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*
- A scalar dependency number records the ingredients (a result, an uncertainty, a pooled spread) and drops the bond (which slot was pushed, in which direction, with which admissible range). What is dropped is exactly the information the question asked for.
- **Fig 12 :14-16:** *"the ingredients are recorded and the arrangement is not / nothing downstream can tell them apart, / and nothing signals that anything was lost"*. A paper that reports "results are 30 percent assumption dependent" gives downstream readers no way to tell whether the dependence came from a prior width or a supernova sample, and no signal that the distinction is gone.
- **Fig 12 :117:** **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** Two analyses with the same reported ingredients but different pushed slots are isomers: same atoms, different bond, different substance. The scalar cannot tell them apart. This is the strongest figure-grounded form of the objection in `01_figure_grounded_audit.md` F2.
- **Falsifier, written before the run:** if the reported dependency measure is invariant under a change of which bond was pushed (prior versus calibration versus dataset), the isomer claim fails and the scalar may be adequate. Test: hold the observed displacement fixed, swap the slot label, and ask whether any downstream reader's prediction changes. If none does, the bond is not carrying information.

### Q3 - What is the order of the operations?

- **Fig 12 :74:** *"swap them. Does it become a different thing? Yes."* This is the test for `→` sequence. The operations are ordered and the order matters.
- The legal order is: describe the residual and register the push set (Fig 9 :27-28) → record the baseline B → apply the push to slot s → re-run to obtain P → compute the displacement → test with `⋛` → record `R_T` → only then decide whether "robust" may be admitted as a term.
- Putting the verdict before the push is the same inversion as the exemplar's REFUTED-before-mint error. `THE_FORMULA.md` step 2: *"the first four sort R by what is MISSING; the fifth by what is WRONG, and no arrangement of the other four reaches it."* A claim of robustness made before the pushes is a positive term where a refusal is owed.
- **Negation:** `¬` is the unary operator that refuses a claim (Operators table :53-58). Refusing "the result is robust" is a negation, not a subtraction. A vocabulary with `−` and without `¬` can say what is missing from an analysis and cannot say that the robustness claim is false; it can only accumulate confirmations. This is why the refuter in section 3 of `01_figure_grounded_audit.md` is written as a refusal before any verdict is offered.

### Q4 - Are the four conditions a partition or a union?

- **Fig 9 :55:** **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
- The prior width, dataset selection, calibration anchor, and model class conditions bind the same reported sigma. Fig 9 :56: *"A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."*
- Heavens et al. 2017 show prior width and external data binding together; DESI 2024 VI shows dataset choice and neutrino-mass prior binding together; LEMAITRE changes dataset, calibration, and pipeline together on purpose. Each is a compound, not a harder instance of one condition.
- **Fig 9 :57:** **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** So the loops stay separate and the verdicts are not averaged.

## CONCLUSION

"How much" is a comparison (`⋛`) between a baseline result and a pushed result, with the displacement written as a subtraction (`−`), evaluated per assumption slot, and ordered so that the refusal of premature robustness precedes any positive claim. A single global dependency scalar is the flat-formula failure: it records the ingredients and drops the bond that carries the answer. Under Fig 12's isomer definition, two analyses sharing every ingredient but differing in which slot was pushed are different substances, and a scalar reports them as one. The falsifier is stated: invariance of the measure under swapping the pushed bond would defeat the claim.

This framing rescues what is checkable in the question without inventing a world-level number: the per-slot table, the anchor test, the independence audit, and the measured `R_T` need no new primitive and no imported authority. "The result is 30 percent assumption driven" remains an unproven binding between a figure-derived shape and a world measurement, in the same way the exemplar's "metric tensor equals Gradient" remained an unproven binding.

## ANCHOR

Verbatim figure text extracted from the local canonical `03-FIGURES_TEXT.md` this session, the Operators and Symbols tables in that extract, `THE_FORMULA.md`, and the world sources listed in `10_source_ledger.csv` and `04_links_and_distribution.md`. No measurement was taken by this derivation.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 2 (anchor test, independence), Fig 4 (round trip), Fig 5 (refusal before mint), Fig 8 (provenance separates convergence from import), Fig 9 (union versus partition, describe before looking), Fig 12 (bond carries half the information, isomer, two currencies, sequence, level-relative irreducibility), Operators table (`⋛`, `−`, `→`, `¬`), Formula (steps 2, 5, 7). Strained after re-census: none; the apparent Planck versus DESI conflict was resolved as a difference of assumption slots in `01_figure_grounded_audit.md` section 5.
