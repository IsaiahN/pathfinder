# Order, negation and analogues in the belief-change rule

**Mode: `specified`.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

REA-0016 asks *when* evidence should change a learned belief. Three supporting questions are owed: (1) in what order do the five routes and the guards run, and does the order matter; (2) why must the operator that changes a belief be negation rather than a bond; (3) what analogues in other fields are genuinely isomorphic to this shape, and which are only echoes.

## DOMAIN CENSUS

Atoms held: `b` (belief), `w` (weighting), `a` (action), `o'` (observation), `R` (residual per slot), `Γ` (library), `φ` (candidate term), `¬` (negation). Bonds held: the seven, of which `→` sequence and `⋛` comparison are relevant here. No new primitive is available without import. The ground is fixed.

## DERIVATION

### Q1. Does the order of the five routes matter?

- Fig 5 :10 "sort the gap into four kinds"; :50-53 add the fifth, REFUTED.
- Formula step 2 lists the five bins and states: "the first four sort R by what is MISSING; the fifth by what is WRONG, and no arrangement of the other four reaches it."
- Fig 12 :70 "→ sequence: A then B; B needs A to have happened" is an ordered bond. The routes are a sequence, not a conjunction under `+`, because a later route assumes the earlier one returned nothing.
- Fig 3 :19 "Optimising a link that already works cannot rescue one that does not." Minting before routing spends effort where it cannot be used.
- **Answer:** the order is ordered (`→`), not symmetric (`+`). Route first, then rank candidates, then mint or refuse, then settle. Swapping the order produces a different and worse term: a system that mints before it knows the bin will explain a gap when the gap owed a refusal.

**Falsifier, written before the run:** a system that runs MINT before ROUTE and obtains the same settled reach under the same ground. If so, the order is a convention, not a bond.

### Q2. Why negation and not a bond?

- Fig 12 :140 "A vocabulary that cannot refuse can only accumulate."
- Operators table :58 "a refutation is a negation, which is why a vocabulary without it can only accumulate".
- Fig 12 :134-136 "a bond is a binary operator, and this figure defines the bonds. It does not define the unary ones." Negation "takes a term and yields a term, and joins nothing".
- Fig 12 :73 (Operators :73-74) distinguishes `−` subtraction (absence of an operand) from `¬` negation (refusal of a claim). "A vocabulary with − and without ¬ can say what is missing from an arrangement and cannot say that an arrangement is wrong, so it can only ever accumulate."
- A belief change is the refusal of a claim, not the absence of an operand. So the operator is `¬`, unary, outside the bond price and outside the symmetry question.
- **Answer:** the operator that changes a belief cannot be one of the seven bonds. Subtraction is the nearest trap: it can remove an operand but cannot say the remaining arrangement is false. This is why the architecture needs the eighth operator at all.

**Falsifier:** exhibit a belief change expressed entirely with `−` that refuses a held claim (not merely omits an operand) and keeps the never-held distinction. Under the figure it cannot.

### Q3. Is the fifth bin an isomer of the fourth?

- Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Both bin 4 (mechanism broken, mint) and bin 5 (REFUTED, refuse) operate on the same library, the same residual and the same three guards and the same acceptance bargain: "Same mint operator, same three guards, same bargain. Only the direction of the residual differs." (Fig 5 :56).
- Same atoms, same operator set, different direction of residual, different resulting reach. Under Fig 12's definition they are **isomers**: identical ingredient sets, different substances, and the difference is carried by the bond or direction, not the atoms.
- **But** the isomers are distinguishable in the figure text, so they are not invisible in the formal description here. They are invisible only in a system that records ingredients and not the residual direction, which is the "flat formula" collapse Fig 12 :6-17 names. The practical failure is a system whose logs say "term added" for both routes, so no downstream reader can tell a mint from a refusal.

**Falsifier:** a record that carries residual direction explicitly and still cannot distinguish a mint from a refusal. If so, the isomer claim is empty.

### Q4. Which world analogues are real, and which are echoes?

- Fig 8 :50-52 "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them." Fig 9 :27-28 "describe it before you go looking, or any frame you pick will seem to fit."
- **AGM belief revision** (Hansson, SEP): revision via the Levi identity, "K* p = (K÷ ¬p)+p", contraction by the negation then addition. This is structurally close to add-a-refusal. It is a **convergent analogue**: reached independently, from legal-code and logic traditions, with a different vocabulary. Its "recovery" postulate and its entrenchment ranking are echo-like where they assume a logically closed belief set rather than a reach that can fall. Mark `corroborates` with high independence, but not a derivation of the figure.
- **Elastic weight consolidation** (Kirkpatrick et al., PNAS 2017): "selectively slowing down learning on the weights important for those tasks." Structurally close to per-slot residual weighting and to protecting high-entrenchment beliefs. It is a **convergent analogue** from neuroscience-inspired ML. Its absence of a refusal operator makes it an echo of the fourth route, not the fifth. Mark `corroborates` for the trigger, `silent` for the fifth bin.
- **Reward prediction error** (Schultz, 2016): "if the reward is exactly as predicted... there is no prediction error, and we keep our prediction and behavior unchanged; we learn nothing." Isomorphic to the support gate and the zero-residual no-change condition. Mark `corroborates` for the trigger, `silent` for the negation mechanism.
- **Confirmation bias / belief perseverance** (Nickerson 1998; Boden et al. 2016): a flat, persisting belief that does not update on accuracy grounds. Isomorphic to the "persists and does not trend down" diagnostic and to the stake warning (Seat Map :171). Mark `corroborates`, with the caveat that the human literature describes a failure, not the normative rule.

No analogue supplies the fifth bin. The figures do; the world sources corroborate the surrounding structure. That is the correct authority order.

### Q5. What order is the union of conditions in the final rule?

Per Fig 9 :54-58, the question is a union, so unbundle before searching; the residue is "finally describable" once the conditions are separate. The dependency order is:

1. **Support** (D1, per-slot positive mass). If zero, stop: nothing to explain (Fig 5 :21).
2. **Route** (D1, which of five bins). If not REFUTED, no belief change (F1).
3. **Target** (D2, persistent-and-flat ranking over bound terms). If none, no refusal to aim (F2).
4. **Bargain** (D2, MDL). If the refusal costs more than the confusion, hold (F4).
5. **Anchor** (D3, fixed). If the ground moved, report drift, not correction (F5).
6. **Direction** (D4, pre-bound shape). If unbound, the check is blind; write it down before the run (F6).

These are ordered by dependency (Fig 3), and each is a gate: a factor at zero forces inertness (Fig 5 :33 "The three guards are a product, not a checklist").

## CONCLUSION

The route order matters and is an ordered bond (`→`), not a symmetric one. The operator that changes a belief is negation, a unary operator outside the seven bonds, because only a refusal can say a held claim is false; subtraction can only omit an operand. The fourth and fifth bins are isomers under Fig 12, distinguishable only if the record carries residual direction. Four world analogues converge on the trigger and the cost structure; none supplies the fifth bin, so the figure remains primary. The five conditions form a dependency-ordered product, and the figures leave the "term and refusal both settled" case open (Fig 6 :47).

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the Operators and Symbols tables, `THE_FORMULA.md`, and the world sources verified in `10_source_ledger.csv`. No measurement was used.

## FIGURE CENSUS

Fig 3 (ordered chain), Fig 5 (five bins, guards product, bargain, same operator different residual direction), Fig 6 (refusal adds, contradiction open), Fig 8 (convergence vs import), Fig 9 (union unbundling, describe before looking), Fig 12 (sequence, negation not a bond, isomer, flat formula), Operators table (negation unary, refutation is negation). Strains after re-census: none. Open item: Fig 6 :47.
