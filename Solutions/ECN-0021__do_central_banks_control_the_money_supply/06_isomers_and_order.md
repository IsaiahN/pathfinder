# Reachability, union order, and the isomer question

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).

## RESIDUAL

The audit leaves three questions that need a supporting derivation rather than a verdict:

1. Can "control" be rebuilt as a reachability property, and what does that property not buy?
2. Is the either/or a union or a partition, and in what order must its conditions be read?
3. Are "base money" and "broad money" the same term under a different bond (isomers), or different terms altogether? Are monetary-targeting and inflation-targeting regimes isomers over a fixed atom set?

## DOMAIN CENSUS

Atoms held in the relevant frames: the central bank's instruments (policy rate, reserve remuneration, asset purchases, reserve requirements), the banking frame's atoms (loan decisions, deposit creation), the public's atom (currency/deposit choice), and the measurement atoms (M0, M1, M2, M3 definitions). Bonds held: sequence (→), production (⇒), comparison (⋛), conjunction (+), identity (≡). No monetary primitive is available without an import. No figure line names a monetary atom.

## DERIVATION

### Q1 - Can "control" be rebuilt as reachability?

- Fig 6 :21: *"MINT composes inside the closure and can never add an atom."* Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*
- The control-theory analogue, opened this session (Wikipedia "Controllability", citing Ogata 1997 and Sontag), defines controllability as *"the ability of an external input (the vector of control variables) to move the internal state of a system from any initial state to any final state in a finite time interval"* and states the rank test: *"If there are not enough such vectors to span the state space of x, then the system cannot achieve controllability."*
- Map with care. The policy frame's input matrix spans the space of its own instruments and base money. It does not span the loan-decision dimension, which lives in Γ_bank. So the target "broad money at an arbitrary level" is outside the reachable subspace of Γ_cb acting alone. The question "does the central bank control the money supply" is, under this reading, a question about the rank of an input matrix, not about the bank's importance.
- The analogue also carries a warning the figure does not spell out: *"Controllability does not mean that a reached state can be maintained, merely that any state can be reached."* So even where control is granted (the policy rate), reach does not imply maintenance; regime change can sever it. Fig 10 :24 *"the ground does not decay, the channel does"* is the figure-level version of the same warning.
- **Falsifier:** exhibit an instrument in Γ_cb whose columns span the loan-decision dimension without importing the banking frame. If found, the reachability reading fails.

### Q2 - Is the either/or a union or a partition, and in what order?

- Fig 9 :54 *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :57 *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*
- The conditions overlap: the policy rate is an input to bank funding costs, which are an input to lending, which creates deposits, which are money. Union, not partition.
- Fig 3 :20 *"The chain is ordered by dependency, not by importance."* The reading order is therefore: perception of the aggregate (does a series exist at slot s?) before vocabulary (which atoms can the frame name?), before objective (what would count as closing R at s?), before planning (which lever?), before carry (does it survive a regime change?). Optimising the lever (step 4) cannot rescue a missing term at step 2.
- The break here is at step 2: the policy frame has precise terms for its own instruments and none for deposit creation. That is why "control M2" is a badly posed objective rather than a hard plan.
- **Falsifier:** show a clean partition in which the two conditions never co-occur for any aggregate or horizon. Then a single lever verdict becomes available.

### Q3 - Are base money and broad money isomers?

- Fig 12 :117 *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
- As usually described, base money (currency plus reserves) and broad money (currency plus deposits) do **not** share the same atom set: reserves are not deposits, and deposits are created by banks. So they are not isomers under the strict definition. They are different substances built from overlapping but non-identical atoms.
- The stronger isomer reading requires holding the atom set fixed and varying only the bond. If we hold `{central bank liabilities, commercial bank liabilities, public currency demand, payment system}` fixed and vary which structure mediates which state, then "a monetary base target" and "a broad money target" are isomeric policies: same ingredients, different arrangement, different behaviour. This is a `specified` structural claim, not a measured one.
- **Falsifier:** show that one policy requires an atom the other lacks (for example broad money targeting requires a deposit-creation atom that base targeting does not), which kills the fixed-atom isomer claim and leaves the overlapping-atom reading standing.
- Fig 12 :5 *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."* A list of instruments (rate, reserves, QE, reserve requirements) is not a monetary regime; the typed relations between them are the regime.

### Q4 - What order is the union, and where does the convention trap sit?

- Fig 12 :111 *"A vocabulary without bonds can name a state and cannot name a route to one."* The central bank's toolkit names states; the route is a sequence (→) through lending and deposit creation, which are in another closure.
- Fig 10 :47 *"a convention that decides an outcome has stopped being one."* Targeting an aggregate promotes a definition into an outcome-deciding variable. Goodhart 1975, opened this session: *"Any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes."* So the order is: definition (convention) → target (verdict claim) → behavioural adaptation → collapse of the regularity. The convention trap sits at the second arrow.
- Operators :51 *"a goal is a comparison, which is why a vocabulary without it cannot state one."* A target is a comparison (⋛) between a measured value and a desired value. "Control" is not that comparison; it is the reachability property that would make the comparison closable. Conflating them is a type error, and it is the live strain named in `01` F11.

### Q5 - Dependency order versus importance order

- Fig 3 :19 *"Optimising a link that already works cannot rescue one that does not."* Most public argument about this question lands on the lever (step 4): should the bank use rates or quantities? That is effort above the break. The missing link is vocabulary for the banking frame's deposit creation (step 2), which the Bank of England article imports.
- Once that atom is imported, the objective (step 3) can be restated: close R at slot s, not at "money" in general. The plan (step 4) then becomes: set the price of reserves, condition credit, monitor the aggregate, revise when the relationship breaks. That is a maintainable loop, not a one-time verdict.

## CONCLUSION

"Control" is best rebuilt as a reachability property of an input matrix over a named state space, with a warning that reach is not maintenance. The either/or is a union with a dependency order that breaks at vocabulary, not at planning. Base and broad money are not isomers as usually described (different atom sets), but a fixed-atom version of the targeting regimes is a real isomer claim with a written falsifier. The convention trap sits where a definition is promoted into a target. No figure returns a monetary magnitude; the shape is all that is derived.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; the Bank of England, Goodhart, controllability, illusion-of-control and Simpson's-paradox pages opened this session; the five essays opened directly. No monetary measurement was taken in this derivation.

## FIGURE CENSUS

Fig 3 :19/:20 (dependency not importance), Fig 4 :22 (methods cross, recordings do not), Fig 6 :21/:23 (closure and reach), Fig 8 :45/:48 (union surplus, independence), Fig 9 :32/:54/:57 (shape, union vs partition), Fig 10 :24/:47 (channel decay, convention trap), Fig 12 :5/:104/:111/:117 (bond, settled molecule, route, isomer), Fig 13 :134 (honest stop), Operators :51 (comparison is a goal). Strained after re-census: the fixed-atom qualifier on the regime-isomer claim, and the mapping of "control" onto reachability rather than onto ⋛, both named rather than hidden.
