# Union, order, and isomers of measurement combinations

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

Two questions are owed after `01`: (1) is "physical discrepancy versus analysis problem" a partition or a union, and (2) what is the **order** of a combination that can discriminate between the two? A third question follows from Fig 12: are two measurement combinations that use the same ingredients but different arrangements different terms, and why does that matter for choosing the discriminant?

## DOMAIN CENSUS

Atoms held: a measurement regime (D1 early, D2 ladder, D3 independent geometry), a channel (D5), a null statistic (D4), and a verifier (D6). Bonds held: sequence (→), production (⇒), comparison (⋛), subtraction (−), and negation (¬). No new observable is available without an import. The relevant scale distinction is first order inside a regime versus second order at the comparison between regimes.

## DERIVATION

### Q1: Partition or union?

- Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
- Fig 9 :57-58: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."
- The conditions here overlap. A Cepheid calibration error affects D2 and propagates into any SNe Ia-based cross-check; a lens mass-profile prior affects D3; a sound-horizon assumption affects D1. No condition is confined to one method.
- Therefore splitting "the tension" into "new physics" and "systematics" as a clean partition is wrong. The correct operation is to **unbundle** before searching again (Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."). The null statistic in F4 is the unbundling lever: it separates the conditions that share H0 from the condition that does not.
- **Falsifier, written before the run:** if a single lever clears the offset under every analysis choice in every frame, the problem is a partition after all (one condition), and the union claim fails. The TDCOSMO result already contradicts this: a single assumption swap inside one frame moves H0 by several km/s/Mpc while leaving other frames untouched, which is the signature of overlapping conditions.

### Q2: What order is the discriminant?

- Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."
- Each measurement regime, once settled against its own ground, is a molecule. CMB+ΛCDM is settled as a prediction; the local ladder is settled as a measurement; time-delay lensing and standard sirens are settled in their own domains. Each can be an operand at the next level.
- The comparison of an early-universe **prediction** with a late-universe **measurement** of the same dimensionless ratio is therefore a **second-order composition**: `(settled early molecule) ⋛ (settled late molecule)`. It is legal only because both first-order molecules are settled.
- This is the recursion Fig 12 names, not an import that moves a wall. Nothing new is added to the observable set; the comparison is a bond between settled terms.
- **Type caveat, still open.** The Operators table defines ⋛ as "a threshold relation between two quantities." At second order the operands are molecules now serving as atoms. Whether they count as quantities at that level is a type question that needs an instrument, not an argument. I record it as a strain, not hide it. Triangulated for the recursion (Fig 12 plus the world example in F4); single-source and strained on the operand type.

### Q3: Are two measurement combinations isomers?

- Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Fig 12 :124: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."
- Consider two combinations over the same atom set `{early inference, ladder, time delays, standard sirens, null statistic}`. Combination X averages all five into one H0. Combination Y uses the null statistic as the comparison and keeps the other four as separate slots. Same ingredients, different bond and different arrangement, different substance: by Fig 12 they are **isomers**, not variants of one analysis. X returns one number and cannot tell the source; Y returns a differential signature and can. The difference is invisible in a list of ingredients and decisive in the behaviour.
- The weaker reading: any two H0 determinations share the **functional group** `calibration → distance → inference` (Fig 12 :124, "the group says what kind; the qualifier says which member"). Sharing the group is why they are comparable; it is also why they can share a systematic and fail independence.
- **Falsifier, written before the run:** if combination X and combination Y return the same differential signature on a controlled data set in which a known systematic is injected, the isomer claim fails and the two are the same term under different notation. This is checkable with simulations today, which makes it the cheapest refuter in the folder.

### Q4: Why the null statistic is a catalyst, not a product

- Fig 12 :119: "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."
- A calibration ladder is spent when it is used to set a distance scale; it must be re-established for each new regime. A dimensionless null statistic built from ratios is regenerating: it is recomputed from each new data set without being consumed by it. That is why it can be carried across the early-late boundary and why it is the right carrier for F4.
- **Falsifier:** if the statistic must be recalibrated from the same ladder each time it is used, it is spent, not regenerating, and the catalyst claim is retracted. Check by asking whether H0 cancels in its definition; if it does not, the statistic is spent.

### Q5: What order is the outreach and verification chain?

- Fig 3 :20: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces."
- Fig 7 :36: "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."
- Dependency order for this question: state the residual (done in `01` section 0) → name the two source conditions (D5 and the physical branch) → define the null objective (F4) → choose low-overlap frames (F3) → run blind swaps (F2) → report per slot (F6). Sending a paper or a theory before the residual is stated is effort above the break; it cannot rescue the missing objective link.
- **Falsifier:** if a recipient of stage 1 can name the required properties without being told the residual, then the residual link was not required and the ordering claim is weakened. That is a cheap test and should be run.

## CONCLUSION

The question is a **union compound** and must be unbundled with a second-order comparison, not averaged into one H0. The discriminating combination is an isomer of the averaging combination: same measurement ingredients, different bond, different behaviour. Its null statistic behaves as a catalyst, surviving across uses because the disputed quantity cancels. The order of work is residual → objective → frame → swap → report, and the only live strain is the operand type of ⋛ at second order. This framing keeps what is checkable (the union shape, the second-order comparison, the isomer and catalyst tests) without claiming that any particular instrument or result has settled the tension.

## ANCHOR

Verbatim figure text from `FRAMEWORK\reference\03-FIGURES_TEXT.md` reopened this session; `THE_FORMULA.md`; the eight essays' two relevant pieces; the cosmology sources in `10_source_ledger.csv`. No cosmological measurement was taken.

## FIGURE CENSUS

Fig 3 (dependency order), Fig 7 (selection between rooms), Fig 9 (union, unbundle, residual first), Fig 12 (settled molecule, isomer, functional group, catalyst), Operators (⋛ operand type), Fig 1 (per-slot residual), Fig 2 (independence). Strains after re-census: one, the ⋛ operand type at second order, named in Q2 and carried into `07_the_tether_answer.md` and `08_expert_verification_packet.md`.
