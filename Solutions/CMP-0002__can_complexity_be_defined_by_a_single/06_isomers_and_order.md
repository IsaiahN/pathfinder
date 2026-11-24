# Is one scalar a flat formula? Structure, isomers and order in complexity measurement

**Mode: `general` on the structure, `specified` on the example bindings, ungrounded.** This is a simulated derivation checked against the figures (`05_what_shape_means.md` §6), not a ground reading.

## RESIDUAL

The primary audit refuses a single complexity scalar using the two-currency price and the axis-independence rule. Two supporting questions are owed: (1) is the scalar the *flat formula* failure Fig 12 names, and (2) if different systems really need different measures, what is the figure-level relation between those measures, isomers or something weaker? A third question is the order in which a measurement can be built, since a scalar jumps that order.

## DOMAIN CENSUS

Atoms held: description length in bits (Fig 5 :45), contact cost in actions (Fig 12 :126), typed bonds and arrangements (Fig 12 :46), per-slot residuals (Fig 1 :19), independence (Fig 2 :31). Bonds held: +, ∥, ≡, →, ⇒, −, ⋛ plus negation. No new primitive is available without an import that moves the wall (Fig 6 :23).

## DERIVATION

### Q1 — Is a single scalar the "flat formula" failure?

- Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."
- Fig 12 :14-16: the flat formula records "temperature + state", three different changes in "one written formula"; "the ingredients are recorded and the arrangement is not / nothing downstream can tell them apart, / and nothing signals that anything was lost".
- A complexity scalar records how much description and how much contact a system used, but not the typed relation between those readings and the arrangement of the axes. By Fig 12 :5 that is half the information, and the loss is silent.
- ⇒ The scalar is the flat-formula failure, not an approximation to a richer measure. The words "as a first pass" do not change the case: the missing half is missing either way.
- **Falsifier, written before the run:** if a scalar can be shown to carry the bond information (the typed relation and the arrangement) as part of its value, so that two systems with the same scalar cannot differ only in arrangement, then it is not a flat formula and Q1 fails.

### Q2 — Are two systems' measure sets isomers?

- Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Fig 12 :124: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."
- Take two complex systems over a shared primitive set, for example `{bits of description, actions to settle, a network arrangement, per-slot residuals}`. If they use the same atoms but different bonds to the ground (one settled by an experiment, the other by a market; one arranged as a sequence, the other as a network), then under Fig 12 :117 they are **isomers**: same atoms, different bond, different substance. A scalar, which cannot see the bond, must score them as variants of one thing, which is the error the figure names.
- If they share only one atom (say both are "open systems far from equilibrium" and little else), they are not isomers. They are members of the same **functional group** (Fig 12 :124): the group says what kind, the qualifier says which member.
- ⇒ "Different measures for different systems" has two distinct figure-level readings. The stronger one (isomers over a shared atom set, changed arrangement) is the checkable isomer claim. The weaker one (functional group) is what is left when the atoms differ.
- **Falsifier:** if two systems with the same primitive readings but different arrangements prove indistinguishable on every arrangement-sensitive axis that can be built, the isomer claim fails and only the functional-group claim stands. Equally, if one system requires a primitive the other does not, they are not isomers by definition.

### Q3 — When are two readings two measures?

- Fig 8 :50: "Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."
- Fig 8 :51: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them."
- Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence."
- Two complexity readings that land on the same number can be (a) two instruments that reached it separately, which is corroboration, or (b) one evidence pool wearing two names, which is one witness. The contents do not decide; the provenance record does. This is why `10_source_ledger.csv` carries an `overlap_with_other_sources` column, and why the entropy, description-length and variety sources are declared as one tertiary pool where appropriate.
- ⇒ The number of measures is not the number of formulas. It is the number of independent frames, and that is a question about the record.
- **Falsifier:** show a case where two frames with zero measured independence (same evidence, same code, same data) still produce genuinely independent corroboration of a complexity claim. That would break Fig 2 :31 and Fig 8 :50-51.

### Q4 — What order can a measurement be built in?

Fig 3 gives five links: perception, vocabulary, objective, planning, learn and carry.

1. **Perception:** distinguish what is in front of the system from what was there before. For complexity, this is the per-slot residual (Fig 1 :19 "The residual is indexed by object slot, not aggregated.").
2. **Vocabulary:** have terms for what the thing affords. Here: the declared code for bits, the ground for actions, the bond vocabulary for arrangement (Fig 12 :46).
3. **Objective:** say what would count as progress in the system's own terms. Here: the MDL bargain for the description axis (Fig 5 :45) and a named ground for the contact axis (Fig 2 :29).
4. **Planning:** choose a route under incomplete information. Here: decide which axis is cheap to read and which needs an instrument.
5. **Learn and carry:** name what worked, verify it, carry the *method* to the next system (Fig 4 :22 "Only methods cross up. Only head starts come down.").

Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." The middle links, vocabulary and objective, are where chains usually break because they have neither obvious failures nor obvious tests. A scalar jumps straight from a global perception to a number, skipping the vocabulary and objective links. That is not a shortcut past measurement; it is a reading taken below the break, which Fig 3 :22-23 calls "a reading of nothing."

- **Falsifier:** exhibit a scalar whose vocabulary and objective are declared, whose per-slot perception is preserved, and whose method can be carried to a new system. That clears the order objection even if the two-currency objection stands.

### Q5 — What about Chaisson-style energy rate density and other single metrics?

These are world-side attempts at Option A. They are not figure lines, so they cannot settle a figure question. Their status under the derivation: a single metric is a binding from a world frame onto one axis; it is admissible for a declared purpose if its code and ground are stated, and inadmissible as *the definition of complexity* because it cannot carry the bond information (Q1). The world literature itself reports the disagreement (see `09_watson_answer.md` WORLD).

## CONCLUSION

The single scalar is the flat-formula failure: it records ingredients and not the arrangement, and the loss is silent (Q1). "Different measures for different systems" resolves into a strong isomer claim (same atoms, different bond, decisive in behaviour) and a weaker functional-group claim (shared kind, different members), both with stated falsifiers (Q2). The count of measures is a count of independent frames, decided by provenance, not by formulas (Q3). And the order in which a measurement must be built runs through vocabulary and objective, the two links most likely to break and least likely to be noticed (Q4). These are supporting derivations, not independent witnesses; they share the primary's figure pool.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session. The world-side single-metric claims are secondary and are recorded in `10_source_ledger.csv`. No measurement was taken.

## FIGURE CENSUS

Fig 3 (dependency order, link below the break), Fig 4 (methods cross up), Fig 5 (MDL bargain), Fig 8 (convergent derivation versus adopted import), Fig 12 (flat formula, bond, isomer, functional group), Fig 2 (anchor and independence), Fig 1 (per-slot residual), Fig 6 (only import moves the wall). Strains after re-census: none in this supporting file; the one open empirical strain (are two proposed measures independent?) is recorded in `01_figure_grounded_audit.md` §7.
