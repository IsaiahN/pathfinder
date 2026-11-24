# Union, order and isomers in the decision under irreversible risk

**Mode: `specified` on the structural derivation, `general` on the bond and order rules, not `grounded`.** Simulated derivation checked against the figures, not a ground reading.

## RESIDUAL

The question bundles plausibility, irreversibility and unresolved timing and probability. Two supporting questions are owed before the answer: (1) is the bundle a union compound or a partition, and what follows from each? (2) over a fixed set of decision elements, are alternative decision paths different things (isomers) or different amounts of one thing? A third question follows: what is the required order of operations, given that a refusal is a negation and not a bond?

## DOMAIN CENSUS (for this supporting derivation)

Atoms held for the decision object: `slot`, `cut`, `monitor`, `ground`, `frame`, `stake`, `reversal`. Bonds held: the seven, including `→` sequence, `⋛` comparison, `−` subtraction, `+` conjunction, and the unary `¬` negation (Operators table :52-58). No new primitive is available without import. Currency: residual per slot, plus the two non-additive currencies of description bits and actions (Fig 12 :125-127). Anchor: the ground for the physical claim, human judgment for the decision claim (Fig 2 :36-37).

---

## Q1 - Union or partition?

Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :56: "A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds." Fig 9 :57: "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."

Apply the test to the three conditions:

| lever | clears plausibility alone? | clears irreversibility alone? | clears unresolved probability alone? | leaves the intersection? |
|---|---|---|---|---|
| "gather more evidence" | partly, if a slot closes | no | only if SEARCHED closes it; if underivable, no | yes, irreversibility still binds |
| "maximise expected value" | no, the live slot is averaged away (Fig 1 :22) | no, asymmetry is not a probability | no, needs a distribution it does not have | yes |
| "act on the worst case" | yes | yes, if the action is reversible | yes, if cost is ignored | yes, but imports a cost-blind convention (Fig 10 :47) |
| "keep the cut reversible and the channel reachable" | keeps the slot indexed | answers the one-way move directly | works without a distribution | no, it is a lever on the compound itself |

The three conditions are a **union**: no single lever clears the intersections except one that changes the kind of object being decided, from an optimised outcome to a revisable process. Fig 9 :58: "It stops being a mixture and becomes a specific compound."

**Falsifier written before the run:** if one lever clears all three conditions and their intersections while keeping a non-updating ground reachable at the live slot, the union reading is refuted and the problem is a partition after all.

**Verdict:** `specified`, union reading; falsifiable as stated.

## Q2 - Are the alternative decision paths isomers?

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

Hold the atom set fixed: `{slot, cut, monitor, ground, frame, stake, reversal}`. Now compare two decision paths:

- Path A: `slot + cut → monitor ⋛ ground → reversal`
- Path B: `slot + cut → monitor ⋛ ground` with no `reversal` atom bonded

Both name a monitoring decision over the same ingredients. They are not variants of one thing. Path A is a revisable process; Path B is a one-way commitment whose monitoring has no consequence. Same atoms, different bond, different substance. Under Fig 12 :117 they are **isomers**, and the difference is decisive in behaviour even though an ingredient list cannot show it.

Fig 12 :119: "catalyst. A part that survives its own use." A monitoring channel that survives its own use (is renewed, not saturated) is a catalyst; a one-off early-warning study that is never read again is a spent part (Fig 12 :120). Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." Iterative risk management is a cycle; a predict-then-act pipeline is a chain and cannot close. The sign of the loop decides whether the decision can learn.

**Falsifier:** if two paths over the same atoms with different bonds behave identically under a stated ground reading, the isomer claim fails and they are the same substance spelled differently. If monitoring is a spent part rather than a catalyst, the catalyst claim fails.

**Verdict:** `specified`, isomer and catalyst claims on the figure definition; behaviour unmeasured, so not `grounded`.

## Q3 - What order is required?

Fig 12 :111: "A vocabulary without bonds can name a state and cannot name a route to one." Fig 12 :112: "A plan is a sequence. A goal is a comparison. Progress is a subtraction."

The decision object therefore requires three ordered relations:

- **Plan** (`→`): enumerate, then range frames, then choose a cut, then write the reversal condition. Order matters; swapping the operands changes the thing (Operators table :29-34).
- **Goal** (`⋛`): a threshold relation between two quantities (Operators table :47). A hazard compared with a tolerated consequence is the comparison. This is not a join of two states.
- **Progress** (`−`): the reduction in residual at the live slot, measured per slot, not the growth of the report library (Fig 1 :19; Formula step 8).

The refusal comes **before** the commitment. Operators table :58: "a refutation is a negation, which is why a vocabulary without it can only accumulate." Fig 5 :64: "a frame can refuse the right kind of thing and still aim the refusal at the outcome it did not want rather than at the belief it holds." The pre-registered refuter in `01` section 4 binds that direction as an ordinary term. A vocabulary with `−` but without `¬` can say what is missing from an arrangement and cannot say the arrangement is wrong (Operators table :73-74).

**Falsifier:** exhibit a decision that states a plan, a goal and progress using only symmetric bonds and still ranges correctly against a ground. Or exhibit a process that commits before writing what would refuse the commitment and refuses its failed commitments at the same rate as one that does not.

**Verdict:** `general`, ordered; the sequence and comparison type of an actual policy remains a case-level question.

## Q4 - The two currencies are not a hidden isomer pair

Fig 12 :125: "A composition costs in two currencies, and they do not add." Fig 12 :126: "Bits price the description. Actions price finding out whether it holds." Fig 12 :127: "They are in different units, so a system holding one accounting cannot compare them and will not notice the shortfall."

Description cost and action cost are **not** isomers of each other. Isomers share atoms and differ in bonds. These two quantities differ in kind and in unit; there is no shared atom set to hold fixed. Fig 12 :130: "Summing them into one figure is the error this names, not the fix for it."

**Falsifier:** a demonstrated unit-preserving conversion between model confidence and the cost of an intervention that preserves the ordering of actions against the ground. Until one is shown, the two accounts stay apart.

**Verdict:** `general`, structural; no conversion supplied.

## Q5 - Analogues from low-overlap fields (corroboration only)

These are world analogues, not figure lines. Each is recorded in `10_source_ledger.csv` and cannot overrule the figures.

1. **Ecology, bet hedging.** Feldman and Kettenring 2025 (*Wetlands*, open access) found that seeding treatments were "overwhelmed by water depth due to two extreme weather events" and recommend "bet-hedging strategies (e.g., seeding diverse mixes with species with a range of hydrologic tolerances)". Predicts diverse, revisable options under unresolved extremes. Corroborates F3 and F4. Falsifier: a single-treatment strategy that survives both drought and flood at both sites at the same cost.
2. **Decision science, robust decision making.** Lempert and Collins 2007, as carried in the public RDM record: robust approaches "characterize uncertainty with multiple representations of the future rather than a single set of probability distributions and use robustness, rather than optimality, as a decision criterion." Predicts no single distribution and "keeping options open". Corroborates F1, F4, F6. Falsifier: a single-distribution optimum that stays robust across the full plausible set.
3. **Human cognition, ambiguity aversion.** The Ellsberg paradox is "generally taken to be evidence of ambiguity aversion, in which a person tends to prefer choices with quantifiable risks over those with unknown, incalculable risks", and under unknown probabilities "a choice based on maximizing the expected utility is also impossible." Predicts that a low-probability label is not the same object as an unknown-probability slot. Corroborates F1, F2, F6. Falsifier: experimental subjects treating unknown and known probabilities as the same object at equal payoff.
4. **Law and governance, the precautionary family.** Rio Declaration Principle 15 and the weak formulation "lack of scientific evidence does not preclude action if damage would otherwise be serious and irreversible." Predicts action without full certainty, but with proportionality and cost-effectiveness. Corroborates F2 and F4; the strong cost-blind form **conflicts** and is handled as S5 in `01` section 7. Falsifier: a cost-blind rule that still rates actions correctly against a ground.

Overlap declared: sources 1 to 4 are from different fields and are genuinely low overlap with one another. IPCC sources quoted elsewhere in the folder are the same broad climate-risk evidence pool as each other and count as one witness, not several.

---

## CONCLUSION

The decision problem is a union compound, not a partition. Over a fixed atom set, a revisable process and a one-way commitment are isomers: same ingredients, different bond, decisive difference in behaviour. The required order is enumerate, range, compare, cut, refuse, where the refusal is a negation written before the commitment and is not itself a bond. Description cost and action cost are different currencies and cannot be fused. Four low-overlap analogues corroborate the shape without settling it.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` (opened this session); the Operators table in the same extract; the world sources listed above and in `10_source_ledger.csv` (opened 2026-11-22). No measurement of any decision outcome was used.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 2 (anchor legitimacy and independence), Fig 5 (refusal before mint), Fig 6 (import and instruments), Fig 8 (absence is not proof), Fig 9 (union versus partition, filters versus witnesses), Fig 10 (channel and convention), Fig 11 (habitat asymmetry), Fig 12 (isomer, catalyst, cycle, plan/goal/progress, two currencies), Fig 13 (unreachable verdict), Operators table (sequence, comparison, negation), Symbols table (residual as slice). Strains after re-census: S2 and S5 live and named in `01` section 7; none hidden.

**Non-claim:** this derivation does not name a policy, a probability, a discount rate or an allocation. Those are a `gap`, reported as `unreached` rather than silence.
