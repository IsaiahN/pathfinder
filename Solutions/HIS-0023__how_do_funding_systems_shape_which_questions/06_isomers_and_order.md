# Isomers and order in the funding-and-attention compound

**Mode: `specified` on the structural derivations, `general` on the choice of bond, not `grounded`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).

## RESIDUAL

The question names two effects, "which questions researchers ask" and "which findings receive attention". To decide whether they are one thing or two, and whether two funding mechanisms that look alike in a policy description are alike in operation, three questions are owed: (1) is the compound a union or a partition; (2) what is the bond between funding and question, and between finding and attention; (3) over a fixed atom set, are two mechanisms isomers or merely two spellings of one thing.

## DOMAIN CENSUS (kept short; the full census is in `01` section 1)

- Atoms available for this derivation: question Q, proposal P, reviewer R, money M, finding F, metric C, ground G.
- Bonds available: the seven in Fig 12 and the unary negation in the Operators table. No new primitive is introduced.
- R: arity at least three; ordered in time; indexed per slot; scale from grant to field.
- Domains D1 to D4 as in `01`; D1 and D2 form a union, not a partition.

**Strain declared up front.** Fig 13's six terms are a physical substrate analogue. Mapping money onto energy or a funding panel onto a gradient would be a forced reading. Here the six-term set is used only for the alternation rule (state, structure, state) as a *structural analogy*, never as a claim about what money is. This is recorded as a strain and re-censused in the last section.

## DERIVATION

### Q1  -  Union or partition?

Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57: "a case in two conditions is not a harder case of either." Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."

Let A be "a question is funded" and B be "a finding is attended to". A alone does not give B, because a funded question can produce a finding that is ignored. B alone does not give A, because attention can attach to work that was not funded by the system in question. But A and B overlap: past B is an input to the next A (prior citations as a merit criterion), and A constrains which F can exist to receive B.

Therefore the compound is a union of overlapping conditions with a coupling term, not a partition. A single lever clears the region where only one condition holds and leaves the intersection standing. That is why "increase funding" and "change review criteria" can each produce a visible effect in one domain and fail in the other. **Mode `general`, triangulated across Fig 9 and Fig 12's bond distinction.**

**Falsifier:** exhibit a lever that clears both A-only and B-only regions and their intersection, with per-slot measurement at the ground. The union claim would then fail.

### Q2  -  What is the bond?

Operators table :30 defines `→` as "A then B; B needs A to have happened"; the operators table's symmetry test for `→` is "swap them. Does it become a different thing? Yes." Operators :15 defines `+` as "swap the operands. Does the meaning change? No."

The claim "funding shapes which questions are asked" is an ordered claim. Swapping the operands gives "questions shape funding", which is a different mechanism (demand-pull rather than allocation-push). So the bond between M and Q is `→` or `⇒`, not `+`. Fig 12 :111 says a vocabulary without bonds can name a state and cannot name a route to one. A policy description that lists "money, reviewers, questions, citations" without specifying bonds has recorded half of itself (Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording.").

The two ordered bonds differ in an important way. `→` sequence needs A to have happened before B. `⇒` production means B did not exist before A fired (Operators :39: "is there a B before A fires? No."). Funding a proposal is `⇒` with respect to a funded project: the project did not exist before the award. Funding is `→` with respect to attention: attention to the resulting finding requires the work to have happened, but the attention was already possible in principle. Conflating the two is a type error in the policy claim.

**Mode `specified`. Status single-source on the figure side (operators and Fig 12), corroborated at a different scale by Bol et al. 2018's timing result.**

**Falsifier:** show that swapping M and Q leaves the claim's predictions unchanged, which would make the bond symmetric.

### Q3  -  Are two funding mechanisms isomers?

Fig 12 :117: "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Fig 12 :123: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

Take two mechanisms over the same atom set {Q, P, R, M, F, C, G}:

- **Mechanism 1 (prior-achievement review):** R is bonded to P by C (past metrics), and C is bonded to M by `⋛` comparison against a threshold (Fig 12 :85-89).
- **Mechanism 2 (independent or blinded review):** R is bonded to P by an effect description of the question, and the threshold is applied after the reading; G is bonded to R separately.

Same atoms, different bonds, different substances. They are isomers under Fig 12 :117. A policy description that lists only "review, threshold, money" cannot tell them apart, and the difference is decisive in the distribution they produce. Bol et al. 2018 give the world-side substance: a hard threshold on review scores produced a divergence that was not attributable to proposal quality.

They also share a **functional group**: both are `R → threshold → M`, which fixes the kind (a selection), while the qualifier (which evidence R may use) fixes the member (Fig 12 :123). So the honest statement is: two members of the same functional group, and isomers over a fixed atom set. Both readings are needed; neither alone is the answer.

**Falsifier, written before the run:** if either mechanism requires an atom the other does not (for example an external ground that one cannot access), the isomer claim fails and only the functional-group claim stands. Note that Bol et al. 2018's two mechanisms do differ in an atom (prior-award information is available to one panel and not to another), so the world case sits on the boundary; it is recorded as a strain below.

### Q4  -  Order and the cycle

Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." Fig 7 :12-13: "same closure, handed along; agreement compounds, evidence does not."

The funding-and-attention compound is a cycle, not a chain: C (past attention) re-enters as evidence for the next M. A chain cannot close by construction, so any account that treats "funding then findings then attention" as a one-way line misses the loop that produces the compounding. The sign of the loop is the question: if past attention reduces the chance of funding novel work, the loop is negative and can stabilise; if it increases it, the loop is positive and compounds (Perc 2014 gives the empirical shape of positive attachment).

Fig 7 :36 requires the next room to differ from the last and to match the residual it surfaced. A cycle that rebooks the same room is "one long room": motion without progress.

**Mode `specified`. Status triangulated across Fig 7, Fig 12 and the operators table.**

**Falsifier:** show a sequence in which past attention re-enters with a measured negative sign that keeps the per-slot residual trending down, while the rooms still differ. That would show the cycle can be self-correcting without an external ground and would break the mirror-chain claim in `01` F6.

### Q5  -  Catalyst or spent part

Fig 12 :119: "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."

A reviewer or an instrument that is recalibrated against the ground at each round survives its own use and behaves as a catalyst. A criterion that consumes its own evidence (uses the fact of a past award without re-checking what the award was for) is a spent part presented as fresh. The ingredient list is identical; the behaviour differs; nothing in the grant record tells you which one you have. This is the structural reason to demand provenance on criteria (Fig 10 :62-64).

**Mode `general`. Status single-source on the figure side (Fig 12 :119), with a low-overlap analogue in the world literature on cumulative advantage.**

**Falsifier:** exhibit a record that marks which criteria were regenerated against a ground and which were reused, and show no behavioural difference between them.

### Q6  -  The two currencies do not add

Fig 12 :125: "A composition costs in two currencies, and they do not add." Fig 12 :126: "Bits price the description. Actions price finding out whether it holds." Fig 12 :127: "the budget is what decides how much of the space is reached at all."

A funding decision prices a description (how well the proposal states what it will do) and an action (what it will cost to find out whether it holds). Both are charged, in different units. A system holding one accounting, for example a score that sums textual quality and a track record, cannot compare them and "will not notice the shortfall" (Fig 12 :126). This is a structural reason that a single grant score is a filter, not a witness (Fig 9 :60).

**Mode `general`. Status triangulated across Fig 12 and Fig 9.**

**Falsifier:** exhibit a single-number score that predicts per-slot ground contact as well as two separately priced readings, checked out of sample.

### Q7 - First-order and second-order effects

Fig 11 :52-53: "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."

A funding rule has a first-order effect on which proposals receive money, a second-order effect on which questions get attempted, and a further effect on which findings become visible and citable. The residual that matters can be several steps out from the lever, and a habitat scoped to direct contact will miss it (Fig 11 :44: "List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."). This is the reason a count of awards is a filter and not a witness (Fig 9 :60): it reads the first order while the ground may register at the second or third. It also gives the objective link a location: the instrument owed at Fig 3 :27 has to report contact across the cascade, not just the immediate disbursement.

**Mode `general`, triangulated across Fig 11 and Fig 3.** Status: single-source on the figure side for the cascade claim (Fig 11), corroborated at low overlap by Bol et al. 2018, whose near-threshold divergence appears in later funding and application behaviour rather than in immediate output.

**Falsifier:** show a funding intervention that changes per-slot ground contact at first order, with the full cascade enumerated, and no second-order or third-order effect appearing in any measured slot. That would break the cascade reading.

## CONCLUSION

The two selections are a union with a cyclic coupling, not a partition or a chain. The bond from funding to question is ordered (`⇒` for the project, `→` for the later attention), so "shape" is a route, not a co-occurrence. Two mechanisms that differ only in which evidence the reviewer may use are isomers over a fixed atom set and members of one functional group. The loop can close, and its sign decides whether it stabilises or compounds. Reviewers and criteria divide into catalysts and spent parts that the ingredient list cannot distinguish. Description cost and action cost are two prices that a single score cannot sum.

All seven results are shape results. None returns a funding rule, a numeric optimum, or a rank order of agencies (Fig 9 :32, Fig 13 :115).

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the Operators table, and the eight essays. The Bol et al. 2018 and Perc 2014 papers were opened in full. No new measurement was taken for this derivation.

## FIGURE CENSUS AND STRAIN

Figures used: 3, 6, 7, 8, 9, 10, 11, 12, 13 and the Operators table. Strains after re-census:

- **S6, dissolved.** The six-term physical substrate was initially mapped onto money and panels. Re-census: the substrate is used here only as an alternation analogy (state, structure, state), never as a claim about money. Fig 13 governs a physical minimal set; Fig 12 governs bonds; different objects.
- **S7, live and named.** The isomer claim in Q3 requires a fixed atom set, but the real comparison in Bol et al. 2018 differs in whether prior-award information is available, which is an atom difference. The isomer reading is therefore stated as conditional on holding the atom set fixed; the functional-group reading carries the unconditional case. Kept visible, not smoothed.
- **S8, live and named.** The `⇒` versus `→` distinction depends on whether a funded project "did not exist before". That is a measurement question about project identity, not a figure question. Marked as needing an instrument, not settled by argument.

## FALSIFIER FOR THIS FILE

The whole supporting derivation fails if any one of these fires: (a) a lever clears the union's intersection as well as both single-condition regions; (b) swapping funding and question leaves the predictions unchanged; (c) one mechanism requires an atom the other cannot have and no functional-group claim survives; (d) the re-entry of past attention is shown to have a sign that keeps per-slot residuals trending down without a differing room; (e) a single score predicts per-slot ground contact as well as two separately priced readings; (f) a funding intervention changes per-slot ground contact at first order with the cascade fully enumerated and no later-order effect appears in any measured slot.
