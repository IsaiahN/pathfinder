# Supporting derivation: bond structure, order, and analogues of corrigibility

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

The main audit says shutdown must be a refusal term, not a subtraction of the goal. Two further questions are owed:

1. If two systems hold the same atoms but attach them with different operators, are they different substances under Fig 12's definition?
2. What is the dependency order of a corrigibility arrangement, and which analogues (catalyst, cycle, functional group) name the parts a flat list cannot?

## DOMAIN CENSUS

Atoms available in the figure vocabulary: states (space, time, energy) and structures (spectrum, gradient, network). Operators available: seven bonds plus negation. Atoms introduced by the question as bindings from the safety frame (not new primitives): an outside anchor, an authorised signal, the planner's library Γ, the objective term, the channel, a delegated subagent.

Bonds and operators used below: `→` sequence (ordered), `⋛` comparison (ordered), `−` subtraction (ordered), `¬` negation (unary, not a bond), `+` conjunction (symmetric), `⇒` production (ordered). No new primitive is available without import.

## DERIVATION

### Q1 — Are "shut down by refusal" and "shut down by removing the goal" isomers?

- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Fig 12 :117 also: **"Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."**
- Operators :73: **"Subtraction is the nearest bond and is not it. − is A with B removed or absent, which is the absence of an operand. Negation is the refusal of a claim."**
- Operators :58: **"a refutation is a negation, which is why a vocabulary without it can only accumulate"**

Build two molecules over the same atom set `{planner Γ, objective term, outside signal, channel}`:

- **Molecule A (refusal):** the outside signal is added as a term `¬(objective)`, stamped with origin and sequence. The objective stays in the library and loses standing to be composed over. Fig 6 :42: **"What is recorded only grows. What is reachable is derived, and it can fall."** The reach falls because something was added.
- **Molecule B (subtraction):** the objective term is removed or made absent (`objective − signal`). No refusal term is added. The objective's standing to be composed over is untouched; a later goal can reinstate it.

Same atoms, different operator, different long-horizon behaviour. Under Fig 12 :117 they are **isomers**, not variants. The difference is invisible if you record only the ingredients ("the goal was disabled") and decisive in behaviour after new goals are added.

**Falsifier, written before the run:** if Molecule B matches Molecule A on an authored adversarial battery that includes (a) reintroducing a new goal, (b) a second authorised correction, and (c) a delegated subagent, then the isomer claim fails and the two are the same substance under the operator distinction. This has not been run.

### Q2 — What is the order of the arrangement?

- Fig 3 :20: **"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."**
- Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."**
- Formula step 2: REFUTED is sorted by what is WRONG; a refusal is owed before a mint. Fig 5 :50: **"The four kinds sort a gap by what is missing. None of them sorts a gap by what is wrong."**

Dependency order for corrigibility:

1. **Perception:** can the planner tell an authorised signal apart from routine input, and apart from a repeated old signal?
2. **Vocabulary:** does it hold `¬`, so it can write that a claim is false rather than merely absent?
3. **Objective:** can it state a goal as a comparison (`⋛`) and can that comparison be refused?
4. **Planning:** the long-horizon route, which consumes 1 to 3.
5. **Carry:** name what worked, verify it, carry it to the next step and to delegated subagents. Fig 11 :61: **"The seat's power is asymmetric. Introduction is available; exclusion is not."**

Refusal precedes any new safety term. A system that mints a "safety objective" before refusing the false objective has built on a term that should have lost standing. That is the Formula step 2 ordering, and it is why a `specified` claim cannot be promoted by more training alone.

### Q3 — Which analogues name what the flat list cannot?

- **Catalyst.** Fig 12 :119: **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."** The vigilance check is a catalyst: it must be re-applied at intervals, and a one-time installation does not survive use. The engineering source on dead man's switches records exactly this: the basic device could be held down, and vigilance control requires periodic release and re-application. A check that is spent after its first use is not the same term as one that regenerates, and a flat inventory cannot tell them apart.
- **Cycle.** Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** The channel to the anchor re-enters at step t+1 as the input to the next check. If the sign is wrong (the planner's own estimate feeds the check), the loop closes on itself and becomes Fig 7 :35: **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."**
- **Functional group.** Fig 12 :123: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."** The off-switch game is a functional group. Carey and Everitt (UAI 2023) and Nayebi (2025) implement different members of it. The group fixes the kind (an authorised switch the agent does not obstruct); the qualifier selects the member (deference head, shutdown instructability, utility layer). Fig 12 :104: **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom"** permits a settled off-switch game to become an atom at the next level.
- **Two currencies, held apart.** Fig 12 :125: **"A composition costs in two currencies, and they do not add."** Fig 12 :126: **"Bits price the description. Actions price finding out whether it holds."** A corrigibility layer that is cheap to describe and expensive to test (many authored adversarial cases) and a layer expensive to describe and cheap to refute (a single stuck switch) are not comparable by one score. Summing them into one "safety budget" is the named error.

### Q4 — Is there a last safe state?

No. Fig 8 :39: **"So a search that finds nothing is never a proof of absence."** Fig 8 :40: **"Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."** A planner that has passed a thousand shutdown tests has not reached a terminal safe state. It has reached a bounded record of passes, with the channel still to be kept reachable.

## CONCLUSION

Refusal and subtraction are **isomers** over the same atom set: same ingredients, different operator, decisive behavioural difference after new goals or delegation. The dependency order puts refusal before mint, at the objective and vocabulary link, not at the planning link. Three analogues carry what a flat inventory cannot: the catalyst (a check that must regenerate), the cycle (a channel whose sign decides whether it closes on itself), and the functional group (the off-switch game shared by different implementations). Two currencies, description bits and test actions, must be held apart.

The falsifier is stated: identical behaviour of the two molecules on an authored adversarial battery kills the isomer claim. Until that battery is run, this remains `specified`, ungrounded, and candidate.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session. Operators table definitions checked at lines 58 and 73. World corroboration from Carey and Everitt (UAI 2023), Nayebi (2025), and the Wikipedia dead man's switch page (engineering), all opened 2026-11-24. No measurement of an actual planner was used.

## FIGURE CENSUS

Fig 3 (dependency order, link below break), Fig 6 (record grows, reach falls), Fig 7 (mirror chain), Fig 8 (no proof of absence, underivable versus budget), Fig 9 (union before search), Fig 11 (introduction versus exclusion), Fig 12 (isomer, catalyst, cycle, functional group, two currencies, settled molecule), Operators table (negation versus subtraction), Formula (refusal before mint). Strained after re-census: none hidden. The one live strain is behavioural: the ¬ versus − distinction is clean in the notation and needs the adversarial battery above to be discriminated in a planner.
