# Supporting derivation: the operator reading of the flare chain, order, and analogues

**Mode: `specified` on the structure, `general` on the bond definitions.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

The causal story told by the literature is a list: reconnection, XUV photons, energetic particles, CMEs, exosphere heating, ionization, NOx production, ozone loss, ion escape, surface UV dose, prebiotic chemistry, water loss. A list of ingredients is not a molecule. Two questions are owed: (1) which typed bonds join these operands, and (2) what is the dependency order, since a step below the break cannot be read.

## DOMAIN CENSUS

Atoms held: energy, space, time (states); gradient, spectrum, network (structures) from Fig 13. Bonds held: the seven in Fig 12, plus negation. No new primitive is available without import. The physical operands (O3, NOx, ions, dose) are bindings from the astrophysics frame onto these atoms, recorded as such. No seventh term is introduced.

## DERIVATION

### Q1 — What composes the flare-to-escape chain?

- Fig 13 :76: **"Energy and a gradient compose a flow."** This is a state bonded to a structure, producing a flow. It is cross-kind and legal under Fig 13 :74: **"Everything else is a composition across the two kinds, never within one."**
- Read the chain as: `energy(state) → gradient(structure) → flow`, where the flow is atmospheric escape. The `→` here is the sequence bond, **"A then B; B needs A to have happened"** (Fig 12 :30 in the bond table; the Operators table gives the same test). Order matters, so this is an ordered bond, and the reverse spelling is a different term.
- The energy injected is not consumed by the bond. Fig 12 :119: **"catalyst. A part that survives its own use."** The flare energy is spent; the gradient that drives escape regenerates under quiescent XUV. Whether a given atom is a catalyst or a spent part is not recorded by the literature's ingredient lists, and that is a real gap, not a wording problem.
- **Falsifier, written before the run:** if escape can be shown to proceed with no gradient term, that is, with energy driving the flow directly and no cross-kind intermediary, the composition fails and Fig 13 :76 does not govern this chain.

### Q2 — What is the dependency order, and where is the break?

- Fig 3 :20: **"The chain is ordered by dependency, not by importance."** Fig 3 :18: **"Where a given chain stops is a reading, never a property of the chain."**
- The order is: flare energy deposition (D1) → atmospheric response (D2) → surface dose and habitability (D3). Each link consumes what the one above produces.
- Most measurement effort lands on D1, flare frequency and energy, because that is where the instruments already are (Kepler, TESS, Chandra). Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."** The middle link, atmospheric response, has instruments (photochemical models, spectrographs) but its coupling to surface dose is the least measured. That is where a habitability claim should be checked first.
- **Falsifier:** a habitability verdict that does not consume a measured atmospheric-response value is a reading below the break and is void by Fig 3 :27.

### Q3 — Is the "right balance of flaring" a comparison or a sum?

- Operators table: comparison, **"a threshold relation between two quantities"**, test: **"is it about which is larger, rather than both being present? Yes."**
- GJ 273 (2020): *"surface life might rely on a host stars with the right balance of flaring, not too much and not too little."* This is a threshold relation between a beneficial UV-dose quantity and a harmful escape-or-damage quantity. It is ⋛, not `+`.
- Fig 12 :123: **"functional group. A substructure whose presence fixes the outcome."** The group here is `energy → gradient → flow`, present in both the benefactor case and the malfactor case. What changes is the qualifier, the magnitude and the slot. Same group, different outcome.
- **Falsifier:** if the beneficial and harmful effects are shown to be additive in one measured quantity with no threshold, the comparison reading fails.

### Q4 — Are the benefactor and malfactor readings isomers?

- Fig 12 :117: **"isomer. Same atoms, different bond, different substance."**
- As the two literature cases are written, benefactor and malfactor share more than an atom set: they share the whole `energy → gradient → flow` group and differ in the quantity selected for comparison and in the slot. If both are written over the full shared atom set `{Space, Time, Energy, Gradient, Spectrum, Network}` and differ only in which structure mediates which state pair and which threshold is applied, they are Fig 12 isomers: same atoms, different arrangement, different substance.
- As they are more commonly written, with different physical operands (ribonucleotide yield versus ozone column), they are not isomers in the figure's sense; they are two members of the same **functional group** with different operands. Fig 12 :123: **"the group says what kind; the qualifier says which member."**
- The stronger isomer claim is checkable; the weaker functional-group claim is the conservative one. Both are `specified`, ungrounded.
- **Falsifier:** if one case requires an atom the other does not (for example, a pathway with no gradient term), the isomer claim fails and the functional-group reading stands.

### Q5 — Is negation needed, and where?

- Fig 12 :117 and the Operators table distinguish negation from subtraction. The field's claim *"flares do not significantly affect atmospheric retention"* (Caldiroli et al. 2025) is a refusal of a claim, not the absence of an operand. That requires the unary operator ¬, which Fig 12's amendment describes as refused but not bonded.
- Formula step 2 distinguishes REFUTED from BROKEN: *"the fifth by what is WRONG, and no arrangement of the other four reaches it."* A result that says a term is false is not the same as a result that says a term is missing. The literature's negative results are refusals, and they are recorded as such, not as low values on a scale.
- **Falsifier:** if a negative result can be fully expressed as a smaller magnitude of the same quantity, with no refusal, the need for ¬ in this derivation is not demonstrated.

## CONCLUSION

The flare chain is a cross-kind composition of energy and a gradient into a flow, written as an ordered sequence. Its dependency order is stellar deposition, then atmospheric response, then surface habitability; the middle link is the one a refuter should check first. The "right balance" is a comparison bond, not a sum. Benefactor and malfactor are conservatively two members of one functional group, with a stronger isomer claim that has a stated falsifier. Negative literature results are refusals and need the unary operator, not a smaller number. No new primitive is required at any step.

This rescues the part of the field's story that is structurally checkable without asserting any physical verdict. *"flares strip atmospheres, so these planets are uninhabitable"* remains a world claim, ungrounded here. `energy → gradient → flow` with a threshold per slot is a checkable structural claim.

## ANCHOR

Verbatim figure text extracted from the canonical `03-FIGURES_TEXT.md` this session; `THE_FORMULA.md`; the Operators table. The physical operands come from the seven astrophysics sources in `10_source_ledger.csv`. No measurement was used in this derivation.

## FIGURE CENSUS

Fig 3 (dependency order, reading below the break), Fig 6 (import adds no atom), Fig 12 (bond table, sequence, catalyst, functional group, isomer, negation amendment), Fig 13 (cross-kind composition, energy and gradient compose a flow, closed set), Operators table (comparison test, negation). Strained after re-census: none hidden. The one open item is whether the benefactor and malfactor cases are full isomers over the shared atom set or only a functional group; it is recorded as open, not resolved by assertion.
