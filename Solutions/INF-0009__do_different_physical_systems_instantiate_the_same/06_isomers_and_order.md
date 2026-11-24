# Identity, isomer and functional group - the supporting derivation

**Mode: `specified`, with `general` on the bond-level rules. Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).**

## RESIDUAL

The question asks whether two systems "instantiate the same information" or "only structurally similar representations". The word "same" is unpriced. Three figure relations compete for it: identity (≡), isomerism (same atoms, different bond), and functional-group membership (same kind, different member). Which one governs which comparison, and in what order must the comparisons be made?

## DOMAIN CENSUS

Atoms held: space, time, energy (states) and gradient, network, spectrum (structures). Bonds held: the seven, plus negation. Currency: description length `|φ|` in bits and settling cost in actions (Fig 12 :125). Anchor: the typed bond, which is not recoverable from the operands (Fig 12 :46). No new primitive is available without import.

## DERIVATION

### Q1. What "same" can mean under the figure's own operator set

- Operators :67: *"two names, one referent"*; :69: *"substitute one for the other. Is anything lost? No."* This is the strongest sense, identity ≡. It is symmetric and has a substitution test.
- Operators :59: *"Symmetry decides whether an arrangement is a new thing."* Under a symmetric bond, different spellings collapse to one term (Fig 12 :23: *"this bond is symmetric, so the four are one term"*). Under an ordered bond, different orders are different terms (Fig 12 :73: *"swap them. Does it become a different thing? Yes."*).
- Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* This is the relation between two systems that share atoms but differ in arrangement.
- Fig 12 :124: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."* This is the relation between two systems that share a pattern of composition but not the atoms in the slots.

So the question's "same information" must be indexed to one of these three relations, plus the D4 residual sense from the main audit. Without that indexing, the question is not one question.

### Q2. Are two systems with the same composition but different carriers identical?

- Fig 13 :121: *"Different routes can arrive at the same substance."*
- Fig 8 :50: *"But shared atoms are not the signature. Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."*
- Fig 8 :51: *"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."*

**Reading:** yes under ≡, if the composition is genuinely the same and the substitution test passes. Carrier difference alone does not break identity. Two systems built by different routes from different physical stuff can be two names for one referent at the level of the settled molecule. This is the figure-level content of multiple realizability.

**Cost caveat (not a denial):** Fig 12 :125: *"A composition costs in two currencies, and they do not add."* Identity at the level of the term does not imply identity at the level of the price. Landauer 1991 and Thagard 2022 measure exactly the price difference. The verdict is "same term, different cost", never "same in every respect".

### Q3. Are two systems with the same atoms but a different bond isomers?

- Fig 12 :97: *"silver fulminate and silver cyanate have the same composition and different properties, which is what forced"* structure into the notation.
- Wikipedia Isomer (opened 2026-11-23): *"isomers are molecules or polyatomic ions with an identical molecular formula... but distinct arrangements of atoms in space."* The historical case in that page is the same one the figure cites: Wöhler's silver cyanate versus Liebig's silver fulminate, 1827, and Berzelius's naming of isomerism in 1830.

**Reading:** yes. If S1 and S2 have the same atom set but a different typed bond, they are isomers: different substances whose difference is invisible in the ingredient list and decisive in behaviour. They are **not** "structurally similar representations of the same information"; they are different information in the figure's sense, because *"the bond is the rest of the information"* (Fig 12 :5).

**Falsifier, written before the run:** exhibit S1 and S2 with identical atoms and identical typed bonds that still behave as different substances at the same level. If that is possible, the bond does not carry the missing half and Fig 12 :5 fails for these systems.

### Q4. Are two systems that merely share a composition pattern a functional group?

- Fig 12 :124: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*

If S1 is written as `state - structure - state` and S2 is written with different atoms in the same slots, they share the functional group but not the atom set. They are **not** isomers under Fig 12's definition. The "structurally similar representations" of the question's Option B are, in figure terms, most often a functional group, not an isomer and not an identity. This is the precise content Option B gets right: resemblance is real, but it is a weaker relation than sameness.

**Falsifier:** show two systems with no shared substructure that still produce the same settled per-slot residual against the same anchor. That would collapse the functional-group distinction into the D4 measure verdict and require a re-census.

### Q5. What is the dependency order?

Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* The order is:

1. **Fix the anchor and the slot** (D4). Without an immovable anchor, equality has no ground (Fig 2 :29).
2. **Settle the bond** (D2). Which typed relation holds is not recoverable from the operands (Fig 12 :46).
3. **Only then vary the carrier** (D1). Whether different physical stuff can reach the same term depends on knowing the term first (Fig 9 :27-28: *"describe it before you go looking, or any frame you pick will seem to fit"*).
4. **Check the lineage** (D3). Convergence and adopted import look identical in the contents (Fig 8 :51).
5. **Verify outside** (D5). A verifier that can reconstruct the claim cannot verify it (Fig 10 :42).

The question reverses this order by naming two physical systems first and never describing the residual. That is the apophenia failure Fig 9 :27-28 names.

### Q6. Where does "recursive" bite?

Fig 12 :103: *"Composition is recursive, and the level decides what is irreducible."* Fig 12 :104: *"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom"*.

Two systems that are settled at level n (each an identical term under ≡) can become atoms at level n+1, where a new comparison composes over them. So "same information" can be true at one level and false at the next without any contradiction. This is not relativism; it is level-relativity with a recorded level. A claim of sameness that omits the level is incomplete.

**Falsifier:** show an identity at level n that forces identity at level n+1 without a new composition and settlement. Fig 12 :104 makes that impossible; if it happened the recursion would be wrong.

## CONCLUSION

The question's "same" splits into four indexed relations:

| relation | figure | when it applies | verdict for "same information" |
|---|---|---|---|
| identity ≡ | Operators :67/:69 | same composition, substitution loses nothing, same ground reading | yes, same term, cost may still differ |
| isomer | Fig 12 :117 | same atoms, different typed bond | no, different substance |
| functional group | Fig 12 :124 | same composition pattern, different atoms in slots | only a resemblance, not identity |
| per-slot residual equality | Fig 1 :19, Fig 2 :29 | same slot reduced identically against the same immovable anchor | the measure sense of same, the weakest alone |

The honest answer to the question is that "same information" is licensed only by the conjunction of identity at the settled level, per-slot residual equality against one anchor, and a lineage that survives substitution. Structural similarity is a functional-group relation and is real but weaker. Carrier difference is admissible under Fig 13 :121 and priced under Fig 12 :125. This framing rescues what is defensible in both options without forcing a choice.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; Operators table in the same extract; SEP Information, SEP Semantic Conceptions of Information, Wikipedia Isomer and Wikipedia Metamerism opened this session. No measurement was used.

## FIGURE CENSUS

Fig 1 (per-slot), Fig 2 (anchor), Fig 3 (dependency), Fig 4 (round trip), Fig 6 (convergence and import), Fig 8 (convergent derivation), Fig 9 (describe before looking), Fig 10 (verifier non-access), Fig 12 (identity, isomer, functional group, two currencies, recursion), Fig 13 (different routes, lineage), Operators (identity test), Symbols (residual as slice).

**Strains after re-census:** none unexplained. The apparent Fig 13 :121 versus Fig 12 :117 conflict is dissolved (different routes to one composition versus different compositions over one atoms set). The Thagard conflict is held as a priced-carrier qualification on D1, not smoothed away.
