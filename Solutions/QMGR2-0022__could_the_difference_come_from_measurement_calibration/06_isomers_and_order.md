# Are the two ladders isomers? Union structure, dependency order and anchor tests

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

The local H0 determinations do not form one value with error bars; they form a family of determinations whose spread is itself the object of study. Two questions are owed: (1) is the candidate-cause set a partition or a union, and (2) are the competing ladder determinations isomers under Fig 12's definition, so that a structural comparison is legitimate?

## DOMAIN CENSUS

Atoms held in the measurement habitat: geometric anchors (Gaia parallax, LMC DEBs, NGC 4258 maser), distance indicators (Cepheids, TRGB, SN Ia), and corrections (crowding, dust extinction, metallicity, selection). Bonds held: the seven, including → sequence (a ladder is an ordered chain) and ⋛ comparison (a threshold relation between two H0 values). No new primitive is available without an import from an instrument frame (Fig 6).

## DERIVATION

### Q1 — Is the cause set a partition or a union?

- Fig 9 :4-5: **"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."**
- Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**
- Calibration, crowding, dust, metallicity, pipeline choices and new physics can all be true at once, and they overlap: a metallicity correction is part of calibration *and* part of stellar populations. So the set is a **union**, not a partition.
- Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** A single lever that fixes zero point clears the region where only zero point binds and leaves the intersections standing.
- ⇒ The question "could it be calibration or other systematics?" is not one search. It is at least four searches with a shared ground. **Mode: `general` for the split rule, `specified` for this bundle.**

### Q2 — Are the SH0ES and TRGB ladders isomers?

- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**
- SH0ES writes roughly: geometric anchors → Cepheids → SN Ia → H0, giving 73.04 +/- 1.04.
- CCHP writes roughly: geometric anchors → TRGB → SN Ia → H0, giving 69.8 +/- 0.8 (stat) +/- 1.7 (sys).
- They share the geometric anchors, the SN Ia final rung and the goal H0. They differ in the middle distance indicator. Under Fig 12 they are **not full isomers**, because Cepheid and TRGB are different atoms. They are two members of the same **functional group**: `geometric anchor → distance indicator → SN Ia → H0`, where the group says what kind of ladder and the qualifier says which indicator.
- The stronger isomer claim is available if both ladders are written over the full shared atom set, differing only in which indicator mediates which anchor: same atoms, different arrangement, different H0. That is a checkable structural claim, and the two published values are the behaviour in which the difference is decisive.
- **Falsifier, written before the run:** if either ladder can be written without an atom the other requires, and the H0 values still differ by the same amount, the isomer framing fails and the functional-group framing stands instead. Equally, if a common atom is shown to dominate both results (for example the same SN Ia calibration chain), the difference is a shared systematic, not an isomer difference.

### Q3 — What order is the check?

Fig 3 names a dependency chain and warns that effort above a break cannot rescue a link below it.

| link | question | instrument status |
|---|---|---|
| 1 perception | do we resolve rung-by-rung differences at all? | photometry and per-variant tables exist, so this link is reached |
| 2 vocabulary | do we have terms distinguishing a moving zero point from a model fault? | anchor test (Fig 2 :29-30) and channel decay (Fig 10 :24) supply the terms; this link is newly instrumented by the present derivation |
| 3 objective | what counts as progress? | a drop in live per-slot residual R+_s, not a smaller combined error bar |
| 4 planning | which probe to field next? | independent ladders (TRGB, masers, lensing, SBF, Miras, sirens) |
| 5 learn and carry | name what worked, verify, carry forward | provenance and refuter in `08_expert_verification_packet.md` |

Fig 3 :25-27: **"The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments. A link with no instrument is not a link that works. It is a link nobody has looked at."** In this field, link 2 is the one that has been least instrumented: the debate is conducted in terms of "tension" and "new physics" rather than "anchor moved" versus "channel drifted." That is where this derivation is aimed.

### Q4 — Which anchors survive the push test?

- Fig 2 :29-30: **"If it moves when you push on it, it is not an anchor."**
- Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**
- Push test 1: remove one geometric anchor. Riess et al. 2019 report that removing any one of DEBs, masers or Milky Way parallaxes changes H0 by less than 0.7%. Partial pass.
- Push test 2: substitute a different distance indicator. Freedman et al. 2019 obtain 69.8, a nonzero gap. So the combined H0 moves when the indicator changes, which means the indicator is not a settled anchor for the combined value; it is a rung whose residual must be reported.
- Push test 3: change the early-universe model. Planck's H0 is conditional on base LCDM; the Planck paper states no compelling evidence for extensions. That is a different closure, not a third rung, and it belongs in D2 with its own loop.
- ⇒ There is no single agreed anchor for H0 across both frames. There are anchor candidates inside each frame, and the comparison between frames is a ⋛ comparison of two quantities, not a direct bond. **Mode: `specified`, ungrounded. Status: `triangulated`** (Fig 2 plus Fig 4 plus three independent world measurements).

### Q5 — Does a chain hide a bad bond?

- Fig 12 :14-16: **"the ingredients are recorded and the arrangement is not / nothing downstream can tell them apart, and nothing signals that anything was lost"** (line-wrapped in the extract).
- Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**
- A distance ladder is a chain, the degenerate case with one bond type (Fig 12 :48). A single final H0 records the ingredients but not which rung contributed how much. A fault in a bond is invisible in the final number. This is the structural reason a per-slot residual table is not optional: without it, the chain has recorded half of itself.

## CONCLUSION

The candidate causes form a **union**, not a partition, and must be unbundled before search. The two public ladders are members of one **functional group** of distance ladders, and the stronger isomer claim (both over a shared atom set) is checkable with the published values. The dependency chain currently stops at the vocabulary link: the field has a "tension" number but no settled vocabulary of anchor movement versus channel drift. Anchor push tests partially pass inside each frame, and fail across frames, which is exactly why the residual persists as a per-slot object. The ladder's chain form hides bond-level faults in the final number, so a per-rung residual table is the necessary output.

This framing keeps what is defensible without claiming a culprit: no new primitive, no imported particle, and no naming of a bad rung. "The distance ladder channel could be faulty" is a shape with a test; "the Cepheid zero point is wrong" is a name that needs a ground reading.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; the canonical figures README; the cosmology papers listed in `10_source_ledger.csv`, each opened 2026-11-23. No new measurement was taken.

## FIGURE CENSUS

Fig 2 (anchor test, independence), Fig 3 (dependency order, the middle link), Fig 4 (round trip gap), Fig 6 (instrument extension, import), Fig 8 (empty search), Fig 9 (union vs partition, unbundle), Fig 12 (chain, bond, isomer, functional group, hidden arrangement), Fig 13 (shape vs name). Strains after re-census: none; the "tension" number and the per-slot residual are different objects, so no figure is forced.
