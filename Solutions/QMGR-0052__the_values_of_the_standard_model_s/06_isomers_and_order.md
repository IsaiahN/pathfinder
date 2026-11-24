# Supporting derivation: structure, order, and analogues for the parameter set

**Mode: `specified` on the physics-facing characterizations, `general` on the structural rules, `gap` on the individual values.** This is a simulated derivation checked against the figures, not a ground reading (`05_what_shape_means.md` section 6).

## RESIDUAL

The question names "roughly 19 free parameters" as one object. The audit showed it is a union of coupled blocks, not a flat list: gauge couplings; quark and lepton masses (Yukawa couplings times the Higgs vacuum expectation value); CKM angles and phase; Higgs sector parameters; the QCD vacuum angle; and, depending on the count, neutrino parameters, Newton's constant, and the cosmological constant. Two questions follow. (1) Are these blocks **isomers** under Fig 12's definition, or do they stand in a weaker relation? (2) What is the dependency order in which they should be worked, so that effort spent on one is not wasted on a slot whose input never arrived (Fig 3)?

## DOMAIN CENSUS

Atoms held: the measured values and their types (dimensionless couplings and angles; dimensionful masses and the vacuum expectation value). Bonds held among them: sharing of the vacuum expectation value across all masses; renormalization-group running that connects a coupling across scales; near-unification relations among the three gauge couplings; the Yukawa matrices that connect generations. No new primitive is available without import. The framework's own six-term substrate is deliberately **not** used here: forcing it onto the Standard Model's constants was tried and retracted in `01_figure_grounded_audit.md` section 6 as a strain (Fig 13 governs the framework's primitives, not another theory's parameters).

## DERIVATION

### Q1 - Are the parameter blocks isomers?

Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

The gauge sector `{g1, g2, g3}` and the charged-fermion mass sector `{m_e, m_mu, m_tau, m_u, ... m_t, v}` share no atoms under the figure's definition, except that the masses are all proportional to the same v. They are therefore **not isomers** as the theory currently writes them. They are different substances built from partly overlapping ingredient lists.

Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

The better reading is **functional groups**. A Yukawa coupling times v is a substructure that fixes "a mass of this kind"; the qualifier selects which fermion. The three gauge couplings form a second functional group; the CKM angles and phase a third. Fig 12 :123-124 gives the vocabulary for the recognizable recurring shapes in the parameter set without pretending they share all atoms.

- **Falsifier, written before the run:** if two blocks are shown to be built from exactly the same atoms under different bonds and to yield different physical substances, the isomer claim becomes available for those two blocks and the functional-group reading is too weak there.

### Q2 - Different spellings of one term

Fig 12 :92: **"Symmetry is what decides whether an arrangement is a new thing. Under a symmetric bond, k operands have k! spellings and one term."**

Using pole masses instead of MS-bar masses, the Fermi constant instead of v, or the Higgs quartic coupling instead of the Higgs mass does not produce a new physical parameter set. Those are different spellings of one term under a symmetric identity bond. This is the mechanism behind F5 in the audit: the 18/19/28 counts are bookkeeping over the same underlying theory. The false move is to charge the spelling for the substance, exactly the overcharge Fig 12 :92-93 names.

- **Falsifier:** a choice of parametrization that changes a physical prediction while holding the underlying theory fixed. No such choice exists by construction; if one were found, the identity bond would be misapplied.

### Q3 - Dependency order among the slots

Fig 3 :20: **"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."**

A workable order is:

1. Gauge sector and its running: the couplings are defined by measurement at a scale and evolved.
2. Higgs sector: v and the scalar potential parameters set the scale for all masses.
3. Yukawa and mixing sector: fermion masses and CKM parameters are defined relative to v.
4. The isolated slots: the QCD vacuum angle and, if included, neutrino and gravitational parameters.

Working the Yukawa masses before fixing v is effort spent above a break: the input has not arrived. Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."** For the origin frame (D3 in the audit) there is no instrument, so no amount of effort at step 1 to 4 reaches it. That is why the missing frame is characterized in effect terms and then left open, not filled.

### Q4 - Scales and the round trip

Fig 4 :27: **"The transform between scales loses information, and that is the point."**

A coupling quoted at the Z pole and the same coupling at a unification scale are related by a lossy transform. Carrying a value up and back does not reproduce what was sent; the gap is R_T. Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."** Near-unification of gauge couplings is a result about the *shape* of the running at high scale, not a derivation of the low-energy values. It is a clue about the missing frame, not a name for it.

- **Falsifier:** a scale transform that is exactly invertible for all parameters, so that the round-trip gap is zero. That would remove this particular reason for treating the low-energy values as inputs to a coarse description.

### Q5 - The analogue is a caution, not a solution

Love 2023 (Psyche) reports that humans are *"alert for configurations which are meaningful to us"* as a consequence of evolutionary history, and Donoghue 2007 reports that the quark and lepton masses are *"consistent with being a random distribution"* in log m. The recurring shapes in Q1 and Q4 are therefore real but insufficient: a functional group or a statistical regularity constrains the shape of an origin frame and does not derive any value. Fig 9 :27-28: **"describe it before you go looking, or any frame you pick will seem to fit."**

## CONCLUSION

The parameter blocks are **functional groups**, not isomers as currently written (Q1). Their different counts and parametrizations are different spellings of one term under identity, which is why "roughly 19" is a convention (Q2). They must be worked in dependency order: gauge, Higgs scale, Yukawa and mixing, then the isolated slots (Q3). The origin frame is beyond the last link and has no instrument, so it stays a characterized gap (Q3, Q5). Scale running supplies a shape clue with a nonzero round-trip gap, not a derivation (Q4). Nothing in this derivation names a beyond-Standard-Model theory.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read this session; `THE_FORMULA.md`; and the world sources in `10_source_ledger.csv`. No measurement was taken. The measured parameter values themselves are the ground for physics, but none was used to settle a claim in this file.

## FIGURE CENSUS

Fig 3 :20, :27 (dependency order, instrument); Fig 4 :27, :30 (lossy scale transform, round trip); Fig 9 :27-28 (describe before looking); Fig 12 :92, :117, :124 (spelling, isomer, functional group); Fig 1 :19 (per-slot indexing, carried from the audit). Strained after re-census: none. The earlier attempt to apply Fig 13's six-term set to these parameters was retracted, not smoothed over.
