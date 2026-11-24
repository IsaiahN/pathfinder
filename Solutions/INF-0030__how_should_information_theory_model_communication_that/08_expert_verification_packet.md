# Expert verification packet - modeling belief-changing communication

**What this is:** a claim in a form a communication researcher, information theorist or social scientist can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `general` on the shape, `specified` on the predictions, not `grounded`.** No behavioral measurement is claimed. This is a shape and a route, not a result.

## 1. The claim, in one paragraph

A model of communication that changes beliefs or behavior needs two anchors, not one. Keep fidelity for the symbol layer, but anchor the effect layer on an observed per-participant change that neither sender nor receiver can move by agreement. Measure that change per participant, never as an average. Treat the receiver as a frame whose belief `b` and weighting `w` come from its history, and gate the message by three conditions: a live residual, composability with what is held, and novelty. Carry the bond (framing, order, relation) as part of the message, since equal facts under a different bond are isomers with different effects. Keep agreement about a shared code separate from evidence about the world. Price description in bits and settlement in actions without summing them. The output is a shape any adequate model must satisfy, not a fitted law.

## 2. Three checkable sub-claims

### C1 - framework-internal and measurement-facing; checkable by reading Figures 1, 2 and 5

- **Statement:** the effect anchor must be per participant and at the ground; a message changes a receiver only if support, reachability and novelty all hold.
- **Source, verbatim:** Fig 1 :19 - **"The residual is indexed by object slot, not aggregated."** Fig 2 :29 - **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."** Fig 5 :20 - **"is there anything to explain?"** Fig 5 :23 - **"it composes from what we already have"** Fig 5 :25 - **"it is not already in the library"**
- **What to check:** can you design a per-participant readout that neither communicator can move by agreement? Do the three guards correspond to anything you would measure? Symbols table :24-26 says two frames with identical architecture diverge because their histories and `w` diverge, so the same message should not have the same effect on everyone.
- **Refuter:** an already-held message on a slot with no live residual that still produces a per-participant change tracking the message rather than the receiver's history, under a ground test. Or flat per-person effects plus a large surviving aggregate.

### C2 - the distinction that decides the question; checkable by reading Figures 2 and 7

- **Statement:** agreement about a shared code is the product of communication; agreement about the world is not a verdict when the agreeing frames share an evidence pool. These are two quantities with different valence.
- **Source, verbatim:** Fig 2 :39 - **"Correlation has valence."** Fig 2 :40 - **"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"** Fig 2 :41 - **"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"** Fig 7 :13 - **"agreement compounds, evidence does not"**
- **What to check:** does the field actually treat shared meaning as the product (so maximizing code agreement is correct) while treating shared-source agreement as a confound when the claim is about the world? If both are treated as "information transferred", the distinction has been erased.
- **Refuter:** a verified case in which a population drawing on one shared evidence pool returns a world-belief tracking a movable ground better than a low-overlap frame with separate evidence. Or an agreeing chain that tracks the ground better than any single frame. World corroboration to check against: Lorenz et al. 2011 (PNAS), https://pmc.ncbi.nlm.nih.gov/articles/PMC3107299.

### C3 - structural; checkable by reading Figure 12

- **Statement:** the message is a molecule, and the bond carries information the atoms do not. Equal atoms under a different bond are isomers with different behavioral effects. Description bits and settlement actions are two prices that do not add.
- **Source, verbatim:** Fig 12 :5 - **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** Fig 12 :94 - **"The arrangement is the substance."** Fig 12 :117 - **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** Fig 12 :125 - **"A composition costs in two currencies, and they do not add."**
- **What to check:** does a framing manipulation with genuinely identical facts change a per-participant ground measure? Is there a single scalar in current practice that conflates message length with the cost of verifying its effect?
- **Refuter:** a controlled frame manipulation with identical atom sets and a live residual that produces no discriminable difference. Or a demonstrated conversion between the two currencies preserving predictions under a test that keeps them separate. World corroboration to check against: https://en.wikipedia.org/wiki/Framing_(social_sciences), the equivalency-framing section.

## 3. What is explicitly not claimed

- Not a new formula for semantic information, persuasion or "information gain"; no coefficients and no fitted law.
- Not that mutual information is wrong. It is right for the shared-code layer and insufficient for the effect layer.
- Not that fidelity is unnecessary; it is necessary for the symbol layer and insufficient for the effect layer.
- Not that any particular belief-change measure is correct. The framework returns a shape, not a name.
- Not that a message alone determines the effect; habitat and receiver history matter (Fig 11 :39).
- Not grounded. Nothing here was settled by an experiment run for this packet.
- Not a claim that recipients should agree. A failure is more useful than an endorsement.

## 4. Provenance

- Question: `Information Theory.txt` line 37, section 3, Communication and coding, ID INF-0030.
- Figure text extracted verbatim into `FRAMEWORK/reference/03-FIGURES_TEXT.md`; all `Fig N :line` citations above were checked against it.
- `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, `FIGURES_README_canonical.md`, read this session.
- Eight essays by Isaiah N, 2026, mapped in `05_what_shape_means.md`; five low-overlap world sources opened 2026-11-23 and listed in `10_source_ledger.csv`.
- This packet compiled 2026-11-23. This is a simulated derivation checked for internal consistency, not a ground reading.

## 5. What would settle it

1. A per-participant, ground-anchored readout that separates message-driven change from receiver-history-driven change. A behavior reading alone cannot do this (*The Hard Problem is About Source*: the instrument *"cannot comment on the source"*).
2. A controlled framing test with identical atom sets and different bonds, with a discriminating effect measure.
3. A direct test of the valence law: compare a shared-evidence population with a low-overlap frame against a movable ground, as Lorenz et al. did for estimates.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19, Fig 2 :29 and :39-41, Fig 5 :20-25, Fig 12 :5, :117, :125. Six short passages.
2. Say whether the two-anchor proposal changes anything you would actually measure, or whether the fidelity metric already captures it.
3. Name one instrument that would separate message-driven change from receiver-history-driven change, or say why none is possible.
4. Send the refutation. A one-line failure is more useful than an endorsement.

**Status of this packet:** simulated derivation, `general`/`specified`, candidate. It cannot settle the claim it reports on.
