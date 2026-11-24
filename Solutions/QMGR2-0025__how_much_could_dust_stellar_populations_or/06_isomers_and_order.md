# Bonds, order and analogues for the three systematic slots

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

The question names three effects (dust, stellar populations, ladder choices). Are they one substance with three names, three isomers, or a functional group with different members? And does the ladder's rung order carry information that a flat error budget loses? Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*

## DOMAIN CENSUS

Atoms held: a photometric bias, a selection effect, a geometric anchor, a standard candle, a calibration zero point. Bonds held: the seven (conjunction `+`, disjunction `||`, identity `≡`, sequence `->`, production `=>`, subtraction `-`, comparison `?` as the threshold relation the figures write as a glyph). No new primitive is available without import. Order by dependency (Fig 3): anchor, then host-galaxy standard candle, then Hubble-flow SN, then H0.

## DERIVATION

### Q1 - What bond joins the three systematics?

- Dust extinction and crowding both enter the Cepheid magnitude as additive biases on the same measurement: *"both hold at once"* under a conjunction `+`. Fig 12 :59 (Operators :15): swap the operands, does the meaning change? No, so `+` is symmetric.
- But the ladder rungs are **not** symmetric. Rung 1 must precede rung 2; rung 2 must precede rung 3. That is `->` sequence: Fig 12 :74 *"swap them. Does it become a different thing? Yes."* A flat formula recording only the ingredients (photometry, dust, SNe, anchors) loses the arrangement. Fig 12 :14-16: *"the ingredients are recorded and the arrangement is not / nothing downstream can tell them apart, / and nothing signals that anything was lost."*
- The reported H0 value is a **comparison** between two readings; Fig 12 :52 *"a goal is a comparison"* and Operators :51 *"a threshold relation between two quantities."* The comparison is the output of the chain, not a bond among the three slots.

**Result:** the three slots are joined to the measurement by conjunction (symmetric); the rungs are joined by sequence (ordered); the final tension is a comparison. A single "total systematic" number uses only `+` and drops `->`, so it cannot say which rung to fix.

### Q2 - Are the three slots isomers?

- Fig 12 :117 *"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
- Fig 12 :124 *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*
- As usually reported, dust, stellar populations and ladder choices share only an **outcome** (a biased magnitude), not the same atoms: dust uses an extinction law, crowding uses source superposition, ladder choice uses a calibration or subsample decision. They are **not isomers**; they are a **functional group** (a slot that fixes a bias) with different members.
- The stronger, checkable form: if all three are rewritten over the full shared atom set `{photometric bias, selection effect, calibration zero point, geometric anchor, standard candle}`, differing only in arrangement (which atom is bonded to which rung), then they **are** isomers under Fig 12 :117. This is the claim worth testing.
- **Falsifier, written before the run:** if any one of the three cannot be written over that shared atom set (e.g. a dust law that requires a primitive no ladder choice uses), the isomer claim fails and the functional-group reading stands.

### Q3 - Which structures are load-bearing across uses?

- Fig 12 :119 *"catalyst. A part that survives its own use."* A geometric anchor (maser distance, DEB distance, Gaia parallax) survives recalibration of the rung above it; it is reused, not spent. A one-off photometric zero point derived for a single host is spent when the host changes. Nothing in a flat error budget records which a term is.
- Fig 12 :121 *"cycle. The output re-enters as input."* The residual from one rung becomes the input to the next; `THE_FORMULA.md` step 8: *"IT IS THE REACH THAT DRIVES THE LOOP, NOT THE LIBRARY."* A systematic that is settled at rung 1 becomes an atom for rung 2.
- Fig 12 :123 *"functional group. A substructure whose presence fixes the outcome."* The presence of a crowding-sensitive near-IR band fixes the sign of the bias for a given host geometry; the qualifier (which host, which band) says which member.

### Q4 - What order is the union?

- Fig 12 :104 *"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."*
- Each rung, once settled against the ground, becomes an atom for the next. The ladder is therefore a **sequence of settled molecules**, not a single flat conjunction. Fig 3 :19 *"Optimising a link that already works cannot rescue one that does not."* Effort on rung 3 cannot rescue a broken rung 1 anchor.
- Cross-check at the substrate: Fig 13 :75 *"Two states never bond directly. It is not space-time but space, a structure, time; and two structures join only through a state."* The analogue here is that a calibration zero point (a structure-like relation) must sit between two distance readings; raw brightnesses do not compose directly into a Hubble constant. This is an analogue, not a physical derivation of H0; its status is `general`.
- **Falsifier for the order claim:** if the rungs commute (the final H0 is unchanged under any permutation of anchor, host calibration and Hubble-flow standardization), the sequence bond is wrong and the ladder is a flat conjunction. Empirically it is not, but the figure-level claim is stated so it can fire.

## CONCLUSION

The three systematics form a **functional group** as currently written (different atoms, one bias-producing role), with a real **isomer** claim available if they are all rewritten over the shared atom set. The rungs are an **ordered sequence** (`->`), so a flat aggregate error budget drops the arrangement information and cannot direct a fix. Geometric anchors behave as **catalysts**: they survive the use made of them. The comparison of local and early-universe H0 is a **threshold relation** operating on the settled output, not a bond among the three slots.

What survives: per-slot indexing (F1), dependency order (Fig 3), and the arrangement-is-substance claim (Fig 12 :94 *"The arrangement is the substance."*). What does not survive: treating "total systematic" as a substance with a source.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` read this session; the eight essays; world sources in `10_source_ledger.csv`. No measurement was used.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 3 (dependency order), Fig 6 (settled terms compose), Fig 8 (convergence vs import), Fig 9 (describe before looking, union vs partition), Fig 12 (conjunction, sequence, comparison, isomer, catalyst, cycle, functional group, arrangement is substance, level-relative irreducibility), Fig 13 (cross-kind composition), Operators (bond symmetry tests). Strains after re-census: **one, named** - the `?` comparison's operands are readings (quantities) at the output level, but "settled rung molecules" are not literally quantities; whether they count as such needs an instrument, not an argument. This is the same type strain recorded in `01_figure_grounded_audit.md` and `11_audit.md`, kept visible rather than smoothed.
