# Isomers, order and bond type in the information question

**Mode: `specified` on the structural claims, `general` on the bond classification.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

The word "information" is shared by four frames with different anchors. Two questions are owed. (1) Is the relation between information and uncertainty symmetric, so a single join would do, or ordered, so a sequence or comparison is required? (2) Are the four frames isomers of one another under Fig 12's definition, or do they stand in a weaker relation?

## DOMAIN CENSUS

Atoms held in the figures: six substrate terms, seven bonds and negation. Bonds: the symmetric set `+` (both hold), `∥` (either suffices), `≡` (identity), and the ordered set `→` (sequence), `⇒` (production), `−` (subtraction), `⋛` (comparison). No new primitive is available without import. The world frames add their own atoms (probability, truth, program length, physical state), each with its own anchor.

## DERIVATION

### Q1 — Which bond does the relation use?

- Operators table: `+` is *"both hold at once"* with test *"swap the operands. Does the meaning change? No."*
- Operators table: `→` is *"A then B; B needs A to have happened"* with test *"swap them. Does it become a different thing? Yes."*
- Operators table: `⋛` is *"a threshold relation between two quantities"* with test *"is it about which is larger, rather than both being present? Yes."*
- The relation "information reduces uncertainty" fails the `+` test: swapping gives "uncertainty reduces information," which is not the same claim. It passes the `→` test as an ordered reduction, and it can be cast as `⋛` when the question is "which is larger, information or uncertainty at this resolution."
- ⇒ The relation is **ordered**, not symmetric. A flat formula with `+` would record the ingredients and lose the direction, which is the flat-formula collapse Fig 12 :6-16 names.
- **Falsifier:** produce a case where uncertainty reduces information and information reduces uncertainty under the same measure and anchor. That would licence `+` and break the ordered reading.

### Q2 — Are the four frames isomers?

- Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
- Fig 12 :124: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*
- As the frames are usually written, D1 (entropy), D2 (truth), D3 (program length) and D4 (physical state) do **not** share an atom set. They share only a word. By Fig 12's definition they are **not isomers**; they are members of a **functional group** in the loose sense that each is a difference that makes a difference, with different atoms in the slots.
- The stronger claim is available if all four are written over a shared abstract atom set (a state, a distinction and an anchor), differing only in which atom is bonded to which and by which bond. Then they **are** isomers: same atoms, different arrangement, different substance. That is the claim worth testing, because it predicts what a bridge between the frames would have to look like.
- **Falsifier:** show that one frame requires an atom that cannot be mapped onto the shared set at all (for example, truth in D2 with no counterpart in D1). The isomer claim fails and the functional-group reading stands.

### Q3 — What order does the dependency chain have?

- Fig 3 :20-21: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces."*
- The order here is not "answer yes, then defend it." It is: (1) decide whether the anchor is a ground or a convention (Fig 2 :36); (2) describe R in effect terms; (3) unbundle into frames (Fig 9 :54); (4) read the figure lines for each frame; (5) check whatever ground each frame has.
- A step whose input never arrives cannot be diagnosed. Asking "is uncertainty essential?" before step 1 is a reading below the break, which Fig 3 :22-23 calls *"a reading of nothing."*
- **Falsifier:** show that the definitional question is ground-settleable before any frame is named. That would reverse steps 1 and 3.

### Q4 — Round trip between "information" in D1 and in D5

- Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*
- Sent up (`x`): the figures' claim that the bond is information and that derivatives are what a composition leaves behind.
- Abstraction (`T_A`): "information is a difference that makes a difference."
- Concretisation (`T_E`): either Shannon entropy (a probability spread) or Landauer's physical bit (a state with an erasure cost).
- **R_T is nonzero.** What the shorthand holds and the trip back down drops: the bond is *typed* (seven kinds, not one), the unit differs (bits as entropy versus joules per erased bit), and the anchor differs (the code versus the second law). Treating the shorthand as identical to either frame would set R_T to zero and commit the dead-reckoning error. The honest form is a lossy condensation with a named gap.

## CONCLUSION

The information/uncertainty relation is **ordered**, not a symmetric join. The four frames are **not isomers as written** (they share a word, not an atom set); the stronger isomer claim requires writing them over a shared abstract atom set and has a stated falsifier. The dependency order puts the anchor question first and the verdict last. The round trip from the figures' "information" to either a Shannon or a Landauer reading carries a nonzero gap R_T that must be recorded rather than assumed away.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the Operators and Symbols tables, and `THE_FORMULA.md`. World sources (SEP Information, SEP Semantic Information, Landauer's principle page) are secondary and recorded in `10_source_ledger.csv`. No measurement was taken by this derivation.

## FIGURE CENSUS

Fig 3 (dependency order), Fig 4 (round trip gap), Fig 9 (unbundle), Fig 12 (isomer, functional group, bond types and prices), Operators table (bond tests), Fig 2 (anchor legitimacy). Strains after re-census: none hidden; the Fig 12 versus Shannon strain is recorded in `01_figure_grounded_audit.md` F2.
