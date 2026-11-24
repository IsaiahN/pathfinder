# Union, order and analogues for the cusp-core residual

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §7).

## RESIDUAL

The residual is a per-slot inner-profile mismatch between a collisionless N-body prediction and an inferred mass profile in galaxy centers. Three questions are owed: (1) is the residual one question or a union of overlapping conditions; (2) where does the dependency chain break, and what order of work follows; (3) what do "cusp" and "core" mean structurally, and which analogue governs the instrument question.

## DOMAIN CENSUS

Atoms available: the six terms (Space, Time, Energy states; Spectrum, Gradient, Network structures) plus the seven bonds and negation, all from Fig 13 and the Operators table. Bonds available: `+ ∥ ≡ → ⇒ − ⋛`, plus `¬` acting on one operand. No new primitive is available without import. The relevant closure for D1 is dark-matter-only N-body; the relevant imported closure for D3 is baryonic hydrodynamics; the anchor for D2 is the instrument. Order by dependency, not importance (Fig 3 :20).

## DERIVATION

### Q1 — Partition or union?

- Fig 9 :54: *"When the split lands on a union rather than a partition, unbundle before you search again."*
- Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*
- Fig 9 :57: *"A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."*
- The residual has at least three conditions in contact: dark-matter microphysics, baryonic response, and measurement inference. Cooke et al. (2022) reports *"steeper slopes than predicted by the FIRE and NIHAO simulations"* in massive dwarfs, so even within the baryonic condition the sign differs by mass.
- ⇒ This is a **union compound**, not one hard question and not a list of three independent questions. It needs its own loop, and the intersections (a low-mass galaxy with bursty feedback and a disturbed gas disk) are a specific compound, not a harder case of any single condition.
- **Falsifier, written before the run:** if the residual is shown to have a single sufficient condition, for example if every slot closes when and only when the dark-matter particle property changes and baryons and inference are irrelevant, the union claim fails and the partition reading stands.

### Q2 — Where does the dependency chain break, and what follows?

Fig 3 names five links: perception, vocabulary, objective, planning, learn and carry. Fig 3 :18: *"The break is drawn between three and four as an illustration. Where a given chain stops is a reading, never a property of the chain."*

Applied here:

| link | in this question | status |
|---|---|---|
| 1 perception | gas kinematics and stellar kinematics return a rotation or dispersion profile | works, with known systematics |
| 2 vocabulary | terms for inner slope, enclosed mass at fixed V_max, circular velocity, non-circular motion | works in the literature |
| 3 objective | what counts as a match: inner slope, or enclosed mass at fixed V_max | contested; Oman et al. reframes the issue as an *"inner mass deficit"* rather than a slope mismatch |
| 4 planning | choose a mechanism frame (feedback import, dark matter change, instrument repair) | cannot use effort spent above a broken objective |
| 5 learn and carry | record which slots closed and by what, with provenance | not yet reached |

The chain stops at link 3, the objective, not at link 4. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* The objective has no settled instrument: the quantity being compared is inferred through a channel with a documented 50 percent+ failure mode (Sands et al. 2024). Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*

⇒ Order of work: (a) state the objective in effect terms (inner enclosed mass at fixed V_max, channel-corrected), (b) check the inference link with an independent mass probe, (c) only then choose a mechanism frame. Running a new feedback simulation before (a) and (b) lands effort above the break.
- **Falsifier:** an independent mass probe that agrees with the rotation-curve inference in the same slots, together with an agreed objective, moves the break from link 3 to link 4 or beyond and reverses this ordering.

### Q3 — Are cusp and core isomers, or members of a functional group?

- Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
- Fig 12 :124: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*
- A cusp and a core over the same dark-matter mass, radius scale and potential share every ingredient. They differ in the arrangement of mass over radius and in the history (with or without repeated potential fluctuations). They are **isomers** in Fig 12's sense: same atoms, different arrangement, decisive difference in observable rotation curve.
- The weaker claim is the **functional group**: both are members of "inner halo profile," with the qualifier "cuspy" or "cored" saying which member. This is the safe reading when the history is unknown.
- Fig 12 :43: *"A bond costs what it could have been, and nothing more."* The choice between the two arrangements is exactly the information a catalog of ingredients omits.
- **Falsifier:** if cusps and cores were shown to require different dark-matter species or different fundamental forces rather than different arrangements of the same matter, the isomer claim fails and a new atom is owed.

### Q4 — Which analogue governs the instrument question?

Two analogues, kept distinct:

1. **Metamerism** (Hard Problem is About Source, fresh 2026-11-23): a colorimeter reads green and *"cannot comment on the source."* A rotation curve reads a potential and cannot comment on the dark-matter source without an instrument that discriminates. This analogue governs **D2** and is the content of F4.
2. **Habitat cascade** (Fig 11 :52): *"And contact cascades."* The residual that matters is *"three steps out"*: star formation, outflow, time-varying potential, energy transfer to collisionless particles, inner profile. This analogue governs **D3** and is the content of F8.

Fig 11 :43: *"The habitat is enumerated, never composed."* The list is read off the world: baryons are in contact with the residual, whether or not a dark-matter-only frame can represent them. Fig 11 :32: *"→ introduce, never subtract"*: the imported atom is added; the collisionless term stays in the record.
- **Falsifier:** a result showing the residual is in contact only with dark-matter microphysics in every slot would break the cascade and force a re-census of D3.

### Q5 — Refusal before import, not after

- Formula step 2 routes a residual whose content is that a held term is false to **REFUTED**, and says what is owed is *"a refusal, not an explanation."*
- Fig 5 :53: *"refuted: a term we hold is wrong; a term is owed that says so"*
- Fig 5 :73: *"The fifth kind is a gap in this figure"* and follows from what the other kinds sort by.
- Operators table :58: *"a refutation is a negation, which is why a vocabulary without negation can only accumulate"*. Negation is unary and joins nothing (Operators amendment, :70-78).
- The held term is the binding "collisionless CDM halo profiles match observed galaxy centers in the low-mass regime." If F3's import test and F4's channel test both fail to close the residual, the correct output is a **negation of that binding**, not another explanatory story. If one of them closes it, the import stands and no refusal is owed. This ordering is written down before the verdict, so it cannot be chosen to flatter the result.
- **Falsifier:** a closed derivation from the six-term set that produces the observed core shapes without an import and without refusing the binding would show that the fifth kind was never triggered here.

## CONCLUSION

The residual is a union compound with its chain stopped at the objective (link 3), so mechanism choice must wait for the inference check. Cusp and core are isomers over shared atoms under Fig 12's definition, with the functional-group reading as the safe fallback when history is unknown. Two analogues govern two different domains: metamerism for the inference channel, habitat cascade for the baryonic import. Refusal is owed before an extra explanation if and only if the import and channel tests fail to close the residual. The structural claims here are `general`; their application to this question is `specified` and ungrounded.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` (Fig 3, Fig 5, Fig 9, Fig 11, Fig 12, Operators table), the eight essays (three re-fetched 2026-11-23, five carried from the QMGR-0037 exemplar's verified ledger), and the world sources recorded in `10_source_ledger.csv`. No measurement was taken by this derivation.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 3 (dependency order, break location), Fig 5 (fifth kind, refusal), Fig 8 (provenance, union surplus), Fig 9 (union vs partition, describe before looking, filters vs witnesses), Fig 11 (habitat enumeration, cascade, introduce not subtract), Fig 12 (isomer, functional group, bond price), Fig 13 (primitives, no new member), Operators table (negation is unary). Strains after re-census: one live, the inference channel of Q2/F4; all others named and resolved by re-census.
