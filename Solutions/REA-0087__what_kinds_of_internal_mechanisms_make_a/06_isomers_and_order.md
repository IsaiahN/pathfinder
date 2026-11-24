# Structure, operators, isomers and order in the robustness answer

**Mode: `general` for the bond and operator structure, `specified` for any binding to AI components, nothing `grounded`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

The main audit names conditions: a per-slot residual, a refusal operator, a reachable ground and a channel monitor, independent frames, an import path, a habitat, and a measured round trip gap. It does not say what kind of thing these conditions are, nor how they must be arranged. Two questions are owed: (1) are candidate "mechanisms" atoms or bonds, and (2) can two systems with the same components but a different arrangement be genuine isomers under Fig 12's definition?

## DOMAIN CENSUS

Atoms available under the substrate: Space, Time, Energy (states) and Spectrum, Gradient, Network (structures), Fig 13 :3: *"No system functions without any of them, none is built from the others, and everything else is a composition across the two kinds."* Operators available: seven bonds plus the unary negation (Operators table). No new primitive is available without an import with a source gate and a shadow test.

The binding of these atoms to AI components is **not** derived. It is a `specified` mapping from the engineering frame, and it is recorded as such. What *is* general is the bond grammar: any composed system, at any stratum, pays for the arrangement and needs a refusal operator if it is to carry a correction.

## DERIVATION

### Q1 - Is a mechanism a component or an arrangement?

Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**
Fig 12 :46: **"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."**
Fig 12 :94: **"The arrangement is the substance."**

A list such as "ensemble plus monitor plus refuter plus red team" names ingredients. It does not say whether the models are conjoined or disjoined, whether the monitor precedes or follows the action, or whether the red team produces examples or merely compares them. Two systems with the same list can therefore behave as different substances. The answer to the question's "what kinds" is a taxonomy of **operators and arrangements**, not a parts list. This is a structural result, `general`.

### Q2 - The operator taxonomy (speculative, `specified` bindings)

These are candidate bindings of engineering components to the figure operators. Each is a hypothesis, not a derivation; each owes provenance and a shadow test before it carries any weight.

| operator | figure test (Operators table) | candidate engineering reading | what would discriminate it |
|---|---|---|---|
| `+` conjunction | *"swap the operands. Does the meaning change? No."* | an ensemble whose members must all hold | remove one member: a conjunction breaks, Fig 12 :64 |
| `∥` disjunction | *"remove one. Does it still work? Yes."* | a fallback path where any member suffices | remove one member: it still works |
| `→` sequence | *"swap them. Does it become a different thing? Yes."* | perceive then act then predict, or monitor then intervene | swap the order; if behaviour is unchanged it was not a sequence |
| `⇒` production | *"is there a B before A fires? No."* | a red team that generates examples that did not exist | look for the produced example before generation |
| `−` subtraction | *"is the second operand's absence the point? Yes."* | a progress measure against a removed capability or a removed input | check whether the absence, not the presence, carries the result |
| `⋛` comparison | *"is it about which is larger, rather than both being present? Yes."* | a threshold on the live residual `R⁺_s` | check whether a larger or smaller relation, not co-presence, decides |
| `¬` negation | *"is the point that it is false, rather than absent? Yes."* | a refusal of a held regularity | distinguish "this term is wrong" from "this term is missing" |

The last row is not a bond. Operators table :70-71: **"Seven of the eight are bonds: they join two operands, and both the symmetry column and the tests are questions about how two things join. Negation joins nothing"**. Fig 12 :140: **"A vocabulary that cannot refuse can only accumulate."** A system that can write `−` but not `¬` can say what is missing from an arrangement and cannot say the arrangement is wrong (Operators table :73-74). This is the precise operator-level content of F2 in the main audit.

**Falsifier for Q2:** if a component's behaviour is unchanged when the candidate operator is swapped for another operator with a different test (for example, removing a member from a supposed conjunction leaves it working), the binding is wrong and must be withdrawn.

### Q3 - Are two robustness architectures isomers?

Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

Take two systems over the same component set `{model A, model B, monitor, generator}`.

- System 1 conjoins its models (`+`) and ranges both against a ground through an independent monitor.
- System 2 disjoins the same models (`∥`) and ranges them against the same ground through the same monitor.

By Fig 12 :117 they are **isomers**: same atoms, different bond, different substance, with the difference invisible in a parts list and decisive in behaviour under an input where one model fails. This is the usable version of the question's "what kinds": kinds of arrangement.

**Important correction, recorded rather than smoothed.** Suppose instead that the two systems differ only in that one holds `¬` and the other does not. That is **not** an isomer difference under Fig 12's definition, because `¬` is not a bond and does not enter the arrangement price (Operators table :77: *"negation is not one of them, so it does not enter that count"*). It is an operator-set difference, governed by Fig 12 :140 and Operators table :58, and it has a different consequence: the first system can carry a correction, the second can only accumulate. Calling it an isomer would have been a strain, so the reading was re-censused. Both verdicts are kept separately: isomer for bond differences, operator-set difference for `¬`.

**Falsifier for Q3:** the isomer reading fails if two systems with identical components and different bonds behave identically under both an unfamiliar input and adversarial pressure, or if the behavioural difference is fully explained by a component difference rather than by the bond. The operator-set reading fails if a system without `¬` carries a refusal as well as one with `¬`.

### Q4 - Order is a dependency, not a preference

Formula step 2 routes REFUTED before mint; Fig 9 :27-28: **"describe it before you go looking, or any frame you pick will seem to fit"**; Fig 3 :20: **"The chain is ordered by dependency, not by importance."** Fig 12 :111: **"A vocabulary without bonds can name a state and cannot name a route to one."**

So the order in any robustness design is: (1) describe the residual in effect terms, including which slot is live; (2) decide which bin the failure falls into, including whether a held term is false; (3) refuse before minting; (4) settle against a ground that does not update; (5) only then promote a method upward, carrying the round trip gap. Putting the architecture before the refuter inverts this chain, and a step whose input never arrives cannot be diagnosed (Fig 3 :22-23).

**Falsifier for Q4:** the order claim fails if a mint succeeds while an unrefuted false term still composes and the reach does not fall, or if a frame can check the direction of its own question without binding the sought-for shape as an ordinary term.

### Q5 - The arrangement is priced in two currencies

Fig 12 :125: **"A composition costs in two currencies, and they do not add."**
Fig 12 :126: **"Bits price the description. Actions price finding out whether it holds."**
Fig 12 :127: *"It proposes arrangements it cannot afford to test, and the budget is what decides how much of the space is reached at all."*

A robustness design with many conditional branches is expensive to describe and may cost one action to refute; a short arrangement over a costly operand is cheap to state and may take a whole budget to settle. Neither figure predicts the other, so both must be read (Fig 12 :129: *"Neither figure predicts the other, so both are read or the choice is made blind."*). A single "cost" number that adds bits and actions is the flat-formula error again.

**Falsifier for Q5:** show a case where the two prices are commensurable and adding them preserves every decision the separate readings make.

## CONCLUSION

The "kinds" asked for are kinds of **operator and arrangement**, not components. Over a shared component set, systems differing in a bond (conjunction versus disjunction, for example) are genuine isomers with the same parts and different behaviour (Fig 12 :117). Systems differing in the presence of `¬` are not isomers; they differ in operator set, and the consequence is that one can carry a correction while the other can only accumulate (Fig 12 :140). The order is refuse before mint, describe before frame, settle before promote. The arrangement is priced in bits and in actions, separately. All bindings to specific AI components are `specified`, unproven, and owed a source gate.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the Operators table and `THE_FORMULA.md`, all local, all opened 2026-11-24. No measurement was used. The engineering bindings are hypotheses, not ground readings.

## FIGURE CENSUS

Fig 3 (dependency order), Fig 8 (one frame wearing two names), Fig 9 (describe before frame), Fig 12 (ingredients versus arrangement, seven bonds, negation as unary operator, isomer, two currencies), Fig 13 (substrate), Operators table (the six tests, the unary amendment), Formula (steps 2, 5, 7). Strained after re-census: one apparent strain, `¬` as an eighth bond, dissolved by the Operators table amendment which makes it unary and outside the bond count; both readings preserved above.
