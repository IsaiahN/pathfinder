# Isomers and order: the structure of a compression and the sequence of checks

**Mode: `specified` on the structure claim, `general` on the ordering rule, not `grounded`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).

## RESIDUAL

The main audit establishes the boundary conditions but leaves two supporting questions open. (1) What is the structure of a compression, so that two compressions can be compared at all? (2) In what order should the checks run, and which analogue credentials may be imported without smuggling in a verdict?

## DOMAIN CENSUS

Atoms held: object slots, residues per slot, features, typed bonds, an anchor that does not update, and the round-trip gap `R_T`. Operators held: the seven bonds, negation, and the two scale transforms `T_A` and `T_E`. No new primitive is available without import. The anchor for this derivation is the measured round trip, not the compressed description's own report.

Order by dependency: perception gives the per-slot residual, vocabulary gives the bonds, the objective gives the round-trip gap, then the refusal or import decision, then verification by a second frame.

## DERIVATION

### Q1. What is the structure of a compression?

A compression is not a number. It is a typed transform from a signal `x` to a coarser description `T_A(x)`, paired with a concretisation `T_E` back into the original situation. The Symbols table :77 defines *"The gap between what was sent up and what came back down: gap(x, (T_E ∘ T_A)(x)). Measures what the coarser description cannot hold."*

Fig 4 :27: *"The transform between scales loses information, and that is the point."* Fig 4 :31 and :32: *"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."*

So the structure has three parts: the abstraction, the concretisation, and the measured gap between them. A report that gives only the abstraction and no gap is a recording presented as knowledge (Fig 4 :25). A report that gives the gap is a method, because the next input can be checked against the same measurement.

**Check.** If a proposed "compression" has no defined concretisation, so there is no way to bring the description back into a situation and compare, it is not a compression under this derivation. It is a substitution of one habitat for another (Fig 11 :66: *"Isolation is not removal of the habitat. It is substitution of one habitat for another."*).

### Q2. Are an efficient compression and a distorting compression isomers?

Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*

Over a fixed atom set, say `{slot, feature, bond, residual, anchor}`, two compressions can keep exactly the same features and differ only in what they keep of the typed relations. One keeps the bonds and is recomposable; the other keeps the ingredient list and is not. They are isomers: same atoms, different bond, different substance. The difference is invisible in a report that lists only active features and decisive in a later judgment.

The same figure gives the weaker relation when the atom sets differ. Fig 12 :123: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."* Two systems that both implement `state to structure to state` but over different features share a functional group, not an isomer relation.

**Falsifier, written before the conclusion.** If a compression that retains only the feature set behaves identically to one that retains the typed bonds, on a task where the bond matters at the ground, the isomer claim fails and only the functional-group claim remains.

**Second falsifier.** The isomer claim is conditional on a fixed atom set. If one compression requires an atom the other does not (a new sensor axis, or a new held term), the relation is composition plus import, not isomerism. This is the live condition, and it is named rather than hidden.

### Q3. What is the order of the checks?

`THE_FORMULA.md` step 2 sorts a gap by what is missing before anything is minted. The five bins are transferred, novel, broken by rebinding, broken by mechanism, and refuted. The first four sort by what is missing; the fifth by what is wrong. Applying that order to a compression loss:

1. **Transferred:** the detail is still present in the description under another name. Nothing owed. Check Fig 8 :50: *"Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."*
2. **Novel:** the system cannot represent the detail at all. Extend perception; aim the probe at a slot already returning something (Fig 6 :32).
3. **Broken, rebinding:** the detail is attached to the wrong slot. Re-fit, do not mint. This is the per-slot failure of F2.
4. **Broken, mechanism:** a term is owed, reachable inside the closure.
5. **Refuted:** a held compression is wrong. What is owed is a refusal, not a new explanation. Fig 12 :111: *"A vocabulary without bonds can name a state and cannot name a route to one."* The Operators table :58 adds the harder case: *"a refutation is a negation, which is why a vocabulary without it can only accumulate"*.

Negation is unary, not a bond. Operators table :71 and :72: *"Negation joins nothing, so its symmetry entry is empty rather than no, and its test asks about the operand it has rather than about an arrangement."* A compression vocabulary that has only bonds can add detail and can never record that a held compression must be withdrawn. That is the structural reason a system can keep a bad compression indefinitely.

**Order falsifier.** If a refusal can be issued before the gap is sorted into its bin, and still pays at the ground, the formula's ordering does not govern this domain. No such case is known here.

### Q4. How do the two currencies enter the order?

Fig 12 :125: *"A composition costs in two currencies, and they do not add."* Fig 12 :126: *"Bits price the description. Actions price finding out whether it holds."*

The bits cost is paid at compression time. The action cost is paid at settlement time. A system can minimise the first and be unable to pay the second. Fig 12 :127: *"They are in different units, so a system holding one accounting cannot compare them and will not notice the shortfall."*

The order is therefore: price the bits, estimate the actions, then decide whether the bargain is affordable. A compression ratio is the first price only. Reporting it as efficiency is the shortfall the figure names. The rate-distortion world source supplies the companion point: a rate can be minimised only relative to a declared distortion measure, and that measure is not given by the rate.

**Falsifier.** If a single scalar can price both currencies without loss, Fig 12 :125 to :129 do not govern this domain.

### Q5. Which analogues transfer, and which are refused?

| analogue | source | transfers? | limit |
|---|---|---|---|
| **Color metamerism** | Wikipedia, color science (low overlap) | yes, as the mechanism of F6: one reading, several sources, match fails under a changed illuminant or observer | it is a three-cone case; it does not fix the bond taxonomy of a neural code |
| **Rate versus temporal code** | Wikipedia, neural coding | yes, as the feature-list-versus-bond case: two spike strings with the same mean rate are different strings | the figure's seven bonds are not mapped onto neural spike relations; a binding is owed |
| **Video frame versus photograph** | *How Intelligence Actually Works* | yes, as provenance loss: the artifact looks the same and nothing in it records which route produced it | it is the author's thought experiment, so it shares the framework evidence pool |
| **Abstract interpretation** | Wikipedia, Cousot and Cousot 1977 (lowest overlap) | yes, as the formal case of `alpha`, `gamma` and the round trip | it is a sound-approximation theory for programs; perceptual ground contact is not program semantics |
| **Change blindness** | Wikipedia, human perception | yes, as the measured dropped transient of Fig 10 :25 | the retinal position is the anchor only in that preparation; do not generalise the number |
| **Catalyst** | Fig 12 :119 | no. A part that survives its own use does not transfer to a compression, because a compression is a transform and not a repeated reaction | refused rather than forced; no falsifier needed because no claim is made |

The analogue rule comes from Fig 9 :27 and :28: *"describe it before you go looking, or any frame you pick will seem to fit"*. The residual was described first in `01_figure_grounded_audit.md`; the frames were chosen second. Any analogue that would have supplied the verdict before the description is refused.

## CONCLUSION

A compression is a three-part structure, abstraction plus concretisation plus a measured gap, not a scalar. Over a fixed atom set, an efficient compression and a distorting compression are isomers: the same features under a different bond, invisible in a feature list and decisive in behavior. When the atom sets differ, the relation is composition plus import, not isomerism. The checks run in dependency order: sort the gap, refuse before mint, price the two currencies separately, then verify against an independent frame. The one live condition is the fixed-atom assumption on the isomer claim, and it carries a falsifier.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`; the eight essays; the world sources listed in `10_source_ledger.csv`. No perceptual measurement was used.

## FIGURE CENSUS

Fig 4 :25/:27/:31-32, Fig 6 :32, Fig 8 :50, Fig 9 :27-28, Fig 11 :66, Fig 12 :101/:117/:119/:123/:125-127, Operators table :58/:71, Symbols table :77, `THE_FORMULA.md` step 2. Strains after re-census: none inside this derivation; the Fig 13 six-term mapping was withdrawn in `01` F11 S2 and is not used here.

## CORRECTION LOG

- The first pass treated "efficient" and "distorting" as a scalar pair and tried to place them on one axis. Retracted: they are union compounds with different anchors (Fig 9 :55 to :57).
- The first pass used the six-term substrate to name perceptual atoms. Withdrawn and preserved in `01` F11 S2.
- The isomer claim was first written without the fixed-atom condition. Narrowed here with two falsifiers.
