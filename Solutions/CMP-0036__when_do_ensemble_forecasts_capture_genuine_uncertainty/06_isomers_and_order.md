# Correlation as a bond: an isomer reading of ensembles, and the dependency order

**Mode: `specified` on the isomer claim, `general` on the order, `gap` on any universal numerical value. Simulated derivation checked against the figures, not a ground reading** (see `05_what_shape_means.md` §6).

## RESIDUAL

The member list of an ensemble is routinely treated as the whole object: *n* runs, their spread, their mean. Two ensembles can have the same members and the same marginal spread yet behave differently at the ground, because the errors of one are independent and the errors of the other share a cause. The residual is the missing record of that relation. Two questions are owed:

1. Under Fig 12's definitions, are two ensembles over the same member set **isomers**, and what exactly is the bond that differs?
2. In what order must generation, structural import, verification, and use be checked, and what breaks if the order is reversed?

## DOMAIN CENSUS

Atoms held: a member set `{m1, ..., mk}`, an initial-condition perturbation, a parameterisation, a data set, a verifying observation. Bonds held: the seven typed relations plus negation; in statistical notation, the relevant unrecorded relation is a dependence or covariance structure. No new primitive is available without an import from a frame with a different closure. The ground is the observation, which does not update on the ensemble's output. Scale: within-model at first order, between-model at second order.

## DERIVATION

### Q1 — Is the correlation structure a bond, or just another ingredient?

- Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**
- Fig 12 :46: a bond is *"the typed relation between two operands"*, and **"which one holds is not recoverable from the operands."**
- Operators table :59-62: symmetry decides whether an arrangement is a new thing. Under a symmetric bond, *"k operands have k! spellings and one term"*. Dependence between members is not symmetric in that harmless sense: which members share a cause is part of the term.
- ⇒ The dependence structure is a bond. Recording only the member list is the flat-formula failure Fig 12 names: the ingredients are recorded and the arrangement is not, and **"nothing signals that anything was lost"** (Fig 12 :14-16).

**Falsifier, written before the result:** if two ensembles with the same member list and marginal distributions but different dependence structures always produce the same ground-visible verification, the dependence does not carry information and is not a bond in this domain. F8 of `01` then falls.

### Q2 — Are two ensembles over a fixed member set isomers?

- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**
- Take a fixed set of `k` members. Ensemble A has independent errors; ensemble B has a common-cause component shared by all members. Same atoms, different bond, different substance. Under Fig 12's definition they are **isomers**, and the difference is decisive in the verification behaviour even though it is invisible in the member list.
- The engineering source gives the arithmetic. The ECSS handbook defines beta as *"the ratio of the failure rate due to common cause to the total failure rate"* and writes the two-element system failure probability as `Q_S = Q_I^2 + Q_C`. The Reliafy guide states that *"Any shared cause puts a floor under the system's failure probability that redundancy can't lower."* Both say that the shared term survives averaging.
- If the member sets differ (one ensemble includes a process the other lacks), the relation is not isomerism. It is composition plus import (Fig 6 :23), and the atom difference must be provenanced.
- **Status:** triangulated for the structural claim (Fig 12 definition plus an independent engineering derivation in a different field), `specified` for any concrete forecast instance. Overlap declared: the engineering sources are one evidence pool with each other, not two witnesses.

### Q3 — What is the second derivation, and what does it price?

Fig 12 :125-126: **"A composition costs in two currencies, and they do not add."** **"Bits price the description. Actions price finding out whether it holds."**

Two independent arithmetic accounts converge on the same separator:

1. **Survey statistics.** The Wikipedia *Design effect* source gives `Deff = 1 + (n* - 1) rho` for cluster sampling and `n_eff = n / Deff`. As intraclass correlation `rho` rises, the effective number of independent observations falls toward one. A large `n` with high `rho` is a small ensemble wearing many names. This is Fig 2 :44's arithmetic: *"The effective-sample-size correction for correlated observations is standard in survey statistics and meta-analysis; the collapse is the same arithmetic read as a warning."*
2. **Reliability engineering.** The beta-factor split partitions each component's failure into `(1 - beta)` independent and `beta` common-cause shares. The common-cause share acts like a series element that no parallelism removes. This is the same statement as `Deff` in a different notation, and neither was derived from these figures.

The two accounts price the **information value of a member**, not the cost of describing the member. Description cost and verification actions remain in different units (Fig 12 :126). A complicated ensemble can be cheap to state and expensive to settle, or the reverse; neither figure predicts the other, so both must be read. Any single score that sums them is the error Fig 12 :130 names, **"Summing them into one figure is the error this names, not the fix for it."**

**Falsifier:** show a dependence measure that leaves both `n_eff` and the common-cause floor unchanged while changing verification behaviour. Then the dependence is not the variable these accounts identify.

### Q4 — What order do the four checks run in, and what breaks if they are reversed?

- **Step 1, describe the residual per slot.** Fig 9 :27-28: *"describe it before you go looking, or any frame you pick will seem to fit."* If the ensemble type is chosen first, climatology or a familiar model family will seem to fit.
- **Step 2, refuse self-certification.** Fig 1 :27: *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* Refusal precedes minting (Formula step 2: *"a refusing term pays the same bargain"*). Reversing this step builds a metric out of the quantity being tested.
- **Step 3, settle generation and reach.** Fig 12 :104: **"A settled molecule becomes an atom for whatever composes over it."** A member whose generating assumptions have not been settled cannot serve as an atom for the comparison. Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."**
- **Step 4, range each member against the ground.** Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."* Fig 2 :46: *"Each frame is corrected by it separately, and what makes the correction sound is that neither frame can move it."*
- **Step 5, select the next member against the surfaced residual.** Fig 7 :36: **"The next room must differ from the last, and match the residual it surfaced."** An ensemble assembled from a fixed list before the residual was described is an authored room; Fig 10 :73-79 requires the pool to be unauthored first and examined second.
- **Step 6, use.** Fig 10 :47: *"a convention that decides an outcome has stopped being one."* The use rule is last because it can only be judged after the ground has been reached.

**Falsifier for the order:** exhibit a case in which checking use before ground contact, or choosing members before describing the residual, improves ground settlement without creating a self-certifying loop. Then the dependency order is wrong as stated.

### Q5 — Is more search inside a closure ever the same as a new member?

- Fig 6 :49: **"more search at the same reach: is it in here and unfound? The closure does not change. Same atoms, same wall, more of the space actually visited."**
- Fig 8 :32: **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."**
- Fig 13 :115: **"The set is closed. The arrangements are not."**
- ⇒ A new run of the same model is more visited space. It is not a new atom. The word "new" in "new member" must be qualified: new as a draw, or new as a reach. Only the second matters for structural uncertainty.
- **Live strain:** a stochastic parametrisation may change the representable distribution without adding a process variable. Whether it counts as an atom or as a richer sampling rule inside the closure needs an instrument that discriminates; it is not decidable from these lines. Recorded, not hidden.

## CONCLUSION

Over a fixed member set, independent-error and common-cause ensembles are **isomers** under Fig 12 :117: same atoms, different bond, different substance, with the difference invisible in the member list and decisive in verification. The dependence structure is therefore the object to record, not a nuisance parameter. Two independent arithmetic accounts, effective sample size in survey statistics and the beta factor in reliability engineering, price the information value of a member and agree that correlated members do not buy independent information; they count as two formulations in low-overlap fields, not as two figure lines or two fully independent witnesses. The check order is: describe the residual, refuse self-certification, settle generation and reach, range each member against the ground, select the next member against the surfaced residual, and only then use. Reversing any of these creates either an authored room or a self-certifying metric.

The isomer claim is conditional on a fixed atom set. Where the member sets differ, the relation is composition plus import, with provenance and a shadow test owed (Fig 6 :12-13). No numerical threshold is returned; that remains a `gap` (Fig 9 :32).

## ANCHOR

Verbatim figure text read from `FRAMEWORK/reference/03-FIGURES_TEXT.md`; canonical usage from `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/figures/THE_FORMULA.md`; world arithmetic from the two opened sources recorded in `10_source_ledger.csv`. No forecast experiment was run and no numerical threshold was estimated.

## FIGURE CENSUS

Fig 1 :27, Fig 2 :29/:44/:45/:46, Fig 3 :19, Fig 6 :12-13/:21/:23/:49, Fig 7 :36, Fig 8 :32/:50-52, Fig 9 :27-28/:32, Fig 10 :47/:73-79, Fig 12 :5/:14-16/:46/:94/:104/:117/:124/:125-126/:130, Fig 13 :115, Operators :59-62, Formula steps 2 and 5. Strained after re-census: the stochastic-parametrisation atom question in Q5, named and left open.
