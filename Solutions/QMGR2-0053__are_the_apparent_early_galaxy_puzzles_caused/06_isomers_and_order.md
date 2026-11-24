# Union, order, and analogues for the early-galaxy puzzles

**Mode: `specified` on the order, `general` on the union result.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

The question poses three causes as alternatives. Two derivations are owed: (1) is the correct operation a partition or a union, and in what order must its parts be searched; (2) why can the same observation be several different things, and what would discriminate them.

## DOMAIN CENSUS

Slots held: candidates with (z_phot, z_spec, M_star, A_V, SFR, LRD flag, AGN flag). Operations held: Fig 5's bin sort, Formula step 7's SEARCHED / INWARD / OUTWARD, Fig 9's verdict / lookup / narrowing. No new primitive is available without an import with a source gate.

## DERIVATION

### Q1. Partition or union

- Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."
- The conditions overlap in the data: Wang et al. show that adding MIRI (a measurement change) both lowers the mass and lowers the LRD fraction (a source-classification change). One lever moves two bins. A partition would require each lever to move exactly one.
- ⇒ **union** (`general`, triangulated: Fig 9 plus Wang et al.). The count of independent levers is smaller than the count of conditions, which is the signature of a union.

### Q2. What order does the union require

- Fig 3 :22 "A step whose input never arrives cannot be diagnosed, only its predecessor can."
- Fig 3 :19 "Optimising a link that already works cannot rescue one that does not."
- The dependency chain is perception (D1) before vocabulary (D2) before objective (what counts as a surprise) before planning (D3).
- Formula step 7 orders the searches: SEARCHED first (cheapest, and the other two assume its answer), then INWARD, then OUTWARD.
- ⇒ **order:** re-slot -> sweep SEARCHED -> sharpen INWARD -> consult OUTWARD -> decide whether a term is owed. Cheap bins first, expensive branch last.
- **Falsifier, written before the run:** if a candidate's residual is unchanged when its anchor is sharpened and changed when a theory prior is swapped, the order is reversed and the derivation fails.

### Q3. Why the same SED can be several sources

- *The Hard Problem is About Source*: "If several paths create the same behavior, then behavior is a projection with lossy information." A green reading does not name its source; a compact red SED does not name its source either.
- *How Intelligence Actually Works*: "indiscernibility is not identity." Below a union horizon, a dusty starburst, a quenched z ~ 5 interloper, and an AGN-dominated LRD can read the same.
- Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." This is the structural analogue, not just an analogy: same photometric atoms, different arrangement of dust, line emission and source, different physical object.
- Fig 12 :124 "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." "Compact red at z > 4" is a functional group; the qualifier is the discriminator we do not yet have.
- ⇒ The LRD population is an **isomer claim awaiting a discriminator**, not a settled object class. Casey et al. push it toward AGN ("this suggests stars do not dominate"); other sources in the literature disagree about the dust. The disagreement is expected while the source lies below the union horizon.
- **Falsifier:** an instrument that distinguishes the sources at the relevant redshifts and assigns every slot uniquely. Then the isomer reading collapses into a partition.

### Q4. What the tabulated mass is, structurally

- Fig 12 :94 "The arrangement is the substance." A stellar mass is not a raw reading; it is a molecule of photometry, template, IMF and dust law.
- Fig 4 :25 "A recording carried upward looks like knowledge and is a description of one occasion." A published mass table is a recording; the fitting pipeline is the generator.
- Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."
- ⇒ Sending the table without the method sets R_T to zero by assumption. The honest form is a lossy condensation with a measured gap. Wang et al. measure part of that gap at ~0.4 dex.

### Q5. Is a new term owed at second order

- Fig 13 :115 "The set is closed. The arrangements are not."
- Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."
- The abundance prediction is a second-order composition: a settled halo mass function plus a settled star-formation prescription. A shortfall in that composition is a rearrangement of held atoms (efficiency epsilon, AGN feedback), not a seventh primitive. Fig 13 :134 "Unreachable is a verdict here, not a silence" applies only if no rearrangement can be composed, which has not been shown.
- **Falsifier:** a per-slot residual that survives every rearrangement of held atoms and is predicted in shape by a frame with a different primitive. Then an import is licensed under Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."

## CONCLUSION

The three causes form a union, and the union must be searched in dependency order: perception, vocabulary, objective, planning; within that, SEARCHED, then INWARD, then OUTWARD. The LRD problem is an isomer problem, same photometric atoms under different source arrangements, awaiting a discriminator. The surviving theory-bin residual is a rearrangement of held atoms inside LCDM, not a new primitive. This rescues the defensible part of the "crisis" claim without the part that fails: the order and the discriminator requirement need no new cosmology.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; the four essays opened this session; the ten arXiv abstract pages fetched this session. No measurement was taken by this agent.

## FIGURE CENSUS

Fig 3 (dependency order), Fig 4 (recording versus method, round trip), Fig 5 (bin sort), Fig 6 (import), Fig 9 (union versus partition), Fig 12 (isomer, functional group, level-relative irreducibility, arrangement), Fig 13 (closed set, unreachable verdict), Formula step 7. Strained after re-census: direct dynamical mass at z > 10 has no proto-instrument to extend, so the INWARD track may be budget-blocked there. Named, not hidden.
