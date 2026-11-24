# Isomers and order: the structure underneath "prediction horizon"

**Mode: `specified` on the structure, `general` on the union reading. Not `grounded`.** Simulated derivation checked against the figures, not a ground reading (`05_what_shape_means.md` section 6).

## RESIDUAL

The observed signature "the forecast stopped being useful" can be produced by at least four different limiters (loop sign, lossy abstraction, new atoms in contact, channel decay). Two of them call for more search, two call for a frame change or channel maintenance. We owe a derivation of (1) why this is a union rather than one question, (2) which structure nonlinear feedback instantiates, (3) whether the four limiters stand to each other as isomers, and (4) what order they must be read in.

## DOMAIN CENSUS (supporting)

Atoms held: residual R, slot s, ground, cycle, closure Γ, import, round trip R_T, contact. Bonds held: the seven (including sequence → and comparison ⋛) plus negation ¬. No new primitive is available without import. The four limiters are not new atoms; they are different arrangements of the atoms already held.

## DERIVATION

### Q1: One question or a union?

- `Fig 9 :54`: when the split lands on a union rather than a partition, unbundle before you search again. "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
- A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds.
- ⇒ "prediction horizon" is a **union compound**. The first-order question (does R grow past tolerance at fixed structure?) and the second-order question (did the structure change so the term is outside the closure?) overlap and require different remedies. They are not one hard question and not two independent ones.

### Q2: What structure is nonlinear feedback?

- `Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."`
- A chain cannot close by construction, so a forecast modeled as a chain (one-way time series with no re-entry) cannot even represent the mechanism that sets the horizon. The cycle is the structure; its sign is the qualifier.
- `Fig 12 :119 "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."` The maintained channel in F6 is catalyst-like: it survives its own use across forecast cycles, and a spent channel behaves differently from a regenerating one even though a single score does not record which it is.
- **Falsifier (Q2):** exhibit a forecast whose residual grows exponentially with horizon while its model contains no re-entry of output as input (no active cycle). That would break the cycle reading.

### Q3: Are the four limiters isomers?

- `Fig 12 :117 "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."`
- The four limiters are built from the same atoms (residual, slot, ground, closure, contact, round trip) but differ in which relation binds them:
  1. loop sign: output → input, sign deciding closure,
  2. abstraction: x → T_A(x) → T_E(T_A(x)), gap R_T,
  3. structural change: habitat → new contact → term outside closure,
  4. channel decay: ground → channel → stale percept (the channel changes, the ground does not).
- A declining score is the "formula" here: it cannot tell which bond is holding, exactly as the chemical formula cannot distinguish the isomers. The behaviour (the remedy) differs: close the gain, measure the gap, import the atom, or maintain the channel.
- ⇒ Under Fig 12's definition the limiters are **isomers of one residual**, not degrees of one quantity. They are not averaged; each gets its own verdict and its own check.
- Weaker form if the strong reading fails: they are a **functional group** (Fig 12 :124 "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."), all sharing the shape "residual crosses tolerance" with different qualifiers. The weaker form still forbids averaging, because the qualifier decides the remedy.

### Q4: What order do they come in?

Dependency order (Fig 3), upstream first:

1. Describe R per slot (Fig 1). Without this, every later reading is of a global average, which Fig 1 :22 disqualifies.
2. Fix the loop sign (Fig 12 cycle). A closing loop makes the other limiters mostly inert; an amplifying one dominates the early horizon.
3. Enumerate the habitat outward at least three steps (Fig 11). The residual that matters is often not in direct contact.
4. Measure the round-trip gap (Fig 4). Only now can you say how much of the failure is the description's loss rather than the world's change.
5. Run the budget/absence split (Fig 8 :41). This is the remedy step and it assumes 1 to 4 have been done.

`Fig 3 :20 "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."` A horizon estimate that starts at step 5 (choose a remedy) before step 1 (describe the slot) is a reading of nothing.

### Q5: Does the order commute?

No. The same observed failure read at step 2 (amplifying loop) and at step 5 (absent term) yields opposite remedies: tighten the model versus import a new frame. Reading them in the wrong order is not a weaker reading; by Fig 3 :22 it is "a reading of nothing." This is the operational reason the four limiters cannot be collapsed into a single score.

## CONCLUSION

"Prediction horizon" is a union compound whose limiters are isomers of one residual: same atoms, different bond, different remedy. Nonlinear feedback is a cycle, not a chain, and the maintained channel is catalyst-like. The limiters must be read in dependency order (per-slot residual, loop sign, habitat enumeration, round-trip gap, budget/absence split). The result is a structural shape with a falsifier, not a horizon value.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`; `THE_FORMULA.md`. No measurement was used. World sources (Bøhn et al. 2021, Wesselkamp et al. 2024/2025) corroborate the budget and tolerance distinctions but were not used to choose figure lines.

## FIGURE CENSUS

Fig 1 (per-slot), Fig 3 (dependency order), Fig 4 (round trip), Fig 8 (budget vs absence), Fig 9 (union/partition), Fig 11 (contact cascade, capability in agent-and-habitat), Fig 12 (isomer, catalyst, cycle, functional group). Strained after re-census: none. Fig 7 was trialed as a horizon law and retracted in `01_figure_grounded_audit.md` section 6; it governs frame-to-frame handoffs, not these limiters.

## FALSIFIER (the single one that would collapse this derivation)

If two different limiters are shown to produce reliably distinguishable score signatures such that the score alone names the correct remedy across systems, the isomer claim fails and the four-way census is unnecessary. The weaker functional-group reading could still stand, but the requirement to keep the verdicts separate would fall. This has not been tested; no measurement was taken.
