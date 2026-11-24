# Supporting derivation: which bond joins two overlapping pipelines?

**Mode: `specified` (analogical application of Fig 12 to measurement pipelines), not `grounded`.** This is a simulated derivation checked against the figures; see `05_what_shape_means.md` §6.

## RESIDUAL

The main audit concludes that data overlap subtracts from independence. That leaves a structural question it did not answer: exactly **how** are two overlapping pipelines related? Are they two terms, one term with two names, or two variants of one kind? The bond table exists to decide this, and the answer determines what "converge" even means.

Four candidates, using the operators defined in Fig 12 and the Operators table:

- `+` conjunction, "both hold at once" (Fig 12 :57), symmetric. Two independent witnesses.
- `≡` identity, "two names, one referent" (Fig 12 :67), symmetric. One pipeline, two labels.
- `→` sequence, "A then B; B needs A to have happened" (Fig 12 :72), ordered. One pipeline causally upstream of the other.
- `⋛` comparison, "a threshold relation between two quantities" (Fig 12 :87), ordered, second order when the operands are settled estimates.

## DOMAIN CENSUS

Atoms held in the cosmology frame (not the six-term substrate; Fig 12 :103 makes irreducibility level-relative): a distance calibrator, a parallax solution, an LMC anchor, a Type Ia supernova compilation, a Hubble-flow fit, a selection function, a photometric pipeline, a likelihood. Bonds available: the seven plus negation. No new primitive is introduced.

The two frames to compare:

- Frame A: Cepheid-calibrated SNe Ia ladder (SH0ES style).
- Frame B: TRGB-calibrated SNe Ia ladder (CCHP style).

They share the SNe Ia compilation, the Hubble-flow machinery, HST photometry and the LMC anchor; they differ in the first rung (Cepheid period-luminosity versus tip of the red giant branch) and in crowding/metallicity systematics.

## DERIVATION

### Q1: Identity or conjunction?

- Identity test from Fig 12 :69: "substitute one for the other. Is anything lost? No." If Frame A and Frame B are substituted in a combined likelihood and nothing changes except the label, the relation is `≡`-like and the two are one term wearing two names. This is the limit case of total data overlap.
- Conjunction test from Fig 12 :59: "swap the operands. Does the meaning change? No." Conjunction is also symmetric, so symmetry alone does not decide it. The discriminator is whether the *shared evidence* is the whole content or only part of it.
- Fig 2 :31 gives the discriminator in effect terms: "Independence, between two frames, is how little they draw on the same evidence."
- **Result:** when the shared atoms exhaust both pipelines, the relation behaves as `≡` and the agreement is a tautology dressed as corroboration. When each pipeline owns at least one atom that generates a distinct prediction, the relation is `+` (two witnesses) with a shared substructure. No intermediate bond is available; a partial overlap is a molecule whose shared substructure must be unbundled (Fig 9 :54).

### Q2: Are they isomers, or members of a functional group?

- Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Fig 12 :124: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."
- As published, A and B share several atoms but not the full set: the calibrator atom differs, and so do the crowding corrections. Strictly, they are not isomers under Fig 12's definition. They are two members of the same **functional group**, `calibrator -> SNe Ia -> Hubble flow`, with different qualifiers on the calibrator.
- The stronger version: if both are rewritten over the full shared atom set `{calibrator, parallax, LMC anchor, SNe Ia, selection, Hubble-flow fit}`, varying only the bond between calibrator and SNe Ia, then they **are** isomers: same atoms, different arrangement, different H0. That is the claim worth testing, because it makes the difference attributable to arrangement rather than to extra data.
- **Falsifier, written before this derivation:** if one pipeline can be written without an atom the other requires (for example, a ladder with no SNe Ia rung, or a channel with no LMC anchor), the isomer claim fails and the functional-group reading stands.

### Q3: What order is the union?

- Fig 12 :72: "A then B; B needs A to have happened." The SNe Ia compilation is causally upstream of both calibrations in the published analyses; it is not a peer of them. The true structure is a diamond, not a chain: one shared upstream atom splits into two downstream arrangements that rejoin at the H0 estimate.
- Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world." A settled H0 estimate becomes an atom for the second-order comparison between methods, which is why `⋛` applies there and not at first order.
- Fig 12 :119: "A part that survives its own use." The SNe Ia compilation is this case: it is used by both pipelines and is not consumed by either. Nothing in the published summary records which parts are spent and which are catalytic, which is exactly the provenance gap F4 in the main audit.
- Fig 12 :121: "The output re-enters as input." Cross-calibration between teams is a cycle; its sign decides whether it closes. A shared compilation fed back into both calibrations is a positive loop that can produce coherent drift (Fig 2 :34).

### Q4: What does "converge" mean under each bond?

| bond | relation between pipelines | what agreement means |
|---|---|---|
| `≡` identity | one referent, two labels | no information; a tautology |
| `+` conjunction | two witnesses, possibly shared substructure | corroboration weighted by the non-shared atoms (Fig 8 :50) |
| `→` sequence | one upstream of the other | not two measurements at all; a reanalysis |
| `⋛` comparison | two settled estimates compared at a threshold | a second-order claim about the difference, not a first-order measurement |
| `¬` negation | one refuses the other | a conflict to be settled at the ground, not averaged |

This table is the practical output of the supporting derivation: before accepting a convergence claim, name the bond. Most published "independent agreement" claims are `→` or `≡` presented as `+`.

## CONCLUSION

Two pipelines sharing data are not two independent conjuncts. At full overlap the relation is identity-like and their agreement is a tautology; at partial overlap they are members of one functional group with an unbundled shared substructure; over the full shared atom set they can be written as isomers, with the difference attributable to arrangement. The comparison of their final estimates is `⋛` at second order and is not itself a first-order measurement. The isomer claim has a stated falsifier (an atom required by one pipeline and absent from the other) and the identity claim has a stated falsifier below.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, Fig 12 and Operators table, read 2026-11-23. Physics-facing descriptions of the two ladders come from Freedman et al. 2019 (arXiv:1907.05922) and Brout et al. 2022 (ApJ 938 110), both opened and quoted in `10_source_ledger.csv`. No measurement was taken.

## FIGURE CENSUS

Fig 2 :31 (independence), Fig 8 :49-50 (one frame, two names; corroboration), Fig 9 :54 (unbundle unions), Fig 12 :57, :59, :67, :69, :72, :87, :103-104, :117, :119, :121, :124 (bond tests, level-relative irreducibility, isomers, catalyst, cycle, functional group), Operators table :15-58 (symmetry and tests), THE_FORMULA "Composition". Strained after re-census: applying Fig 12's bond vocabulary to measurement pipelines is a `specified` analogy at a different level from the six-term substrate; Fig 12 :103 explicitly permits level-relative irreducibility, so the analogy is licensed but not `grounded`.
