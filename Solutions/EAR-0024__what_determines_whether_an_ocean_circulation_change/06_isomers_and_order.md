# Union, cycle sign, hysteresis and isomers: the supporting derivation

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

The question's three adjectives hide four structural questions: (1) is the split a partition or a union? (2) what sets continuity versus abruptness? (3) what sets reversibility? (4) does rate add a determinant? This file derives those structures and tests whether the two circulation states are isomers over a shared atom set.

## DOMAIN CENSUS (restated briefly)

- **R:** multiplace (state, forcing level, forcing rate, history, noise), per circulation slot, ordered and path-dependent, not symmetric. Scale from convection site to global ocean.
- **D1 physical ocean:** water masses, density, salt-advection and convection feedbacks; currency heat and salt transport; anchor observing arrays and proxies.
- **D2 dynamical systems:** control parameter, state variable, feedback loops, basins, bifurcations, rate; currency stability; anchor experiments and proofs.
- **D3 verification:** readers and estimators; currency residual and agreement; anchor the ocean.
- Union of C1 (continuity/threshold), C2 (basin/path), C3 (rate), never averaged.

## DERIVATION

### Q1 - Partition or union?

- Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
- Fig 9 :57: **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."**
- Fig 9 :4-5: disagreements that do not shrink with effort, where each rule works on a different subset, *"are not one hard question but several well-formed ones. Split it rather than search."*

The terms "gradual", "abrupt" and "reversible" do not partition the phenomenon. A change can be abrupt and irreversible (Stommel's jump that stays), or gradual yet effectively irreversible on a human timescale (slow weakening with multi-centennial recovery), or abrupt and reversible (a fast oscillation with no basin switch). This is a union with intersections.

- **Falsifier:** show all observed changes on a single axis with one governing parameter and no intersections.

### Q2 - What sets continuity? The sign of the cycle against a threshold

- Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."**
- Fig 13 :32: **"a remainder compounding through a chain that amplifies is chaos"**
- Fig 12 :87: **"is it about which is larger, rather than both being present?"** (the ⋛ comparison)
- Operators table :51: *"a goal is a comparison, which is why a vocabulary without it cannot state one."*
- Fig 12 :123: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

Derivation: a feedback loop is a cycle. If its sign is negative, a perturbation is damped and the state tracks the moving equilibrium (gradual). If its sign is positive, the output re-enters as same-sign input, the remainder compounds, and when the comparison F ⋛ F_crit holds the state jumps (abrupt). The "stabilising" and "reinforcing" feedbacks of Lenton 2021 are this sign distinction in ocean language. The salt-advection feedback is the named positive loop (Rahmstorf 2005); the salt-redistribution feedback that maintains the current circulation state is the named negative one (Lenton et al. 2008). The group is "amplifying loop against a threshold"; the qualifiers are which loop in which model.

Caveat carried from the world: Chapman et al. 2024 find all three mechanisms in one box model and note the forcing level needed for bifurcation tipping *"varies considerably based on the calibration of the model."* Sign gives the kind of transition, not the numeric location.

- **Falsifier:** an abrupt change with a stabilising dominant loop, no threshold crossed and no rate effect.

### Q3 - What sets reversibility? Basin structure as closure

- Fig 6 :14: **"the only operator that moves the wall"**
- Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**
- Fig 8 :32: **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."**
- Fig 13 :115: **"The set is closed. The arrangements are not. That gap is why import exists."**

Derivation: with one basin, the reachable set contains the original state; remove the forcing and the state returns. With two basins, the current closure cannot reach the other regime by internal composition; a forcing large enough to carry the state across the reverse threshold is the wall-moving import. Stommel 1961 is the literal case: the jumped state *"would then stay there even when A was restored to its original value."*

Important narrowing (strain S2 in `01`): "import" is a statement about reachability, not a physical substance. Physical reversal is a forcing trajectory; the figure's import is the structural shape of what such a trajectory must do. This is a binding, not an identity, and the word import is used in that disciplined sense throughout.

- **Falsifier:** a two-basin model in which the system returns without crossing a reverse threshold.

### Q4 - Is rate a separate determinant?

- Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**
- Fig 7 :37-39: **"Progress per handoff has two factors. Zero either and the chain runs in place:"** *"the bracket's fidelity across the handoff"*, *"the ground's pressure on the room"*
- Fig 10 :24: **"the ground does not decay, the channel does"**

Derivation: if the response depends on dF/dt as well as F, then a threshold expressed in F alone is not a fixed object. Ritchie et al. 2023 define exactly this: tipping *"when external conditions vary faster, or sometimes slower, than some critical rate, usually without crossing any critical levels"*, plus *"return tipping"* on fast reversal. Lenton et al. 2008 arrive at the same place from ocean physics: *"Both the timescale and the magnitude of forcing are important."* So C3 is not reducible to C1.

- **Falsifier:** critical level invariant across rates, no R-tipping, no return tipping.

### Q5 - Are the ON and OFF circulation states isomers?

- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**
- Fig 12 :119: **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."**

Take the atom set to be the six-term substrate instantiated in the ocean: space, time, energy, and the structures gradient, network, spectrum (Fig 13). The strong (ON) overturning and the collapsed (OFF) state can be written over the same atoms, differing in which gradient is bonded to which state and in the sign of the dominant feedback cycle. Same atoms, different arrangement, different substance: an isomer pair in Fig 12's sense. The difference is invisible if you record only the inventory (temperature, salinity, basin geometry) and omit the bonds, which is precisely why a time series of overturning strength alone cannot tell you which state's basin you are in.

The salt-advection feedback is catalyst-like (Fig 12 :119): it survives its own use, so each pass through the loop regenerates the condition for the next, and nothing in a single snapshot records whether a given part is spent or regenerating. This is why the same instantaneous density structure can sit in different dynamical regimes.

- **Condition:** the isomer claim holds only over a fixed atom set. If the collapsed state requires an atom the ON state does not (for example a different convection location, as Rahmstorf 2005 notes for the vertical "steps" in hysteresis curves), the atoms are not shared, the relation is composition plus import, and the isomer claim fails. This condition is kept visible, not hidden.
- **Falsifier:** demonstrate that ON and OFF states require different atom sets in a given model, or that the same recorded inventory with the same bonds yields the same behaviour.

### Q6 - Order: what must be settled before what?

Fig 3 dependency order gives the sequence: describe the residual per slot (perception) → have terms for feedback sign, threshold, basin and rate (vocabulary) → commit to a shape and a refuter (objective) → choose the discriminating instrument (planning) → carry the method, not the recording. The chain likely breaks at vocabulary-to-objective: the literature has "tipping", "hysteresis" and "early warning" as terms, but no agreed instrument that returns a yes/no on the reversibility of the present ocean (Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*).

## CONCLUSION

The question is a union of at least three conditions. Continuity is governed by the sign of the feedback cycle against a threshold (Fig 12 :121, :87); reversibility by basin structure, structurally the closure and its wall (Fig 6 :14, :23); rate by an independent time-channel determinant (Fig 4 :30, Ritchie et al.). Verdicts are per circulation slot, never averaged (Fig 1 :19, :22). The ON and OFF states are isomers over a fixed atom set, with a live condition on atom sharing. No figure returns the numeric threshold, the critical rate, or the specific reversibility; those are a declared `gap` closed only by observation. Mode `specified`, ungrounded, candidate.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session; the eight-essay canonical mapping carried from the completed exemplar; and the world sources in `10_source_ledger.csv`, each opened 2026-11-22. No new measurement was taken.

## FIGURE CENSUS

Fig 1 (:19, :22), Fig 3 (:27), Fig 4 (:30), Fig 6 (:14, :23), Fig 7 (:37-39), Fig 8 (:32), Fig 9 (:4-5, :55, :57), Fig 10 (:24), Fig 12 (:5, :87, :117, :119, :121, :123), Fig 13 (:32, :115), Operators (:51). Strains after re-census: one binding kept visible (S2, import as reachability not substance), one live condition (fixed atom set for the isomer claim), none hidden.
