# Bond structure, dependency order, and the isomer analogue

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

The main audit (F1) says the distinction is a difference of bond type. Two questions are owed: (1) what **order** does the checking chain require, and where does it usually break? (2) is the correlation-versus-causation pair an **isomer** under Fig 12's definition, or something weaker?

## DOMAIN CENSUS

Atoms held: the six substrate terms (Fig 13), plus the operator set (seven bonds and negation). Bonds held: `+` conjunction (symmetric), `⇒` production (ordered), `→` sequence (ordered), and the rest. No new primitive is available without import. Currency: settlement against the ground. Anchor: the experiment. D1 (associative frame) has no anchor; D2 (intervention frame) does.

## DERIVATION

### Q1 : What order does the chain require?

Fig 3 names five links in dependency order: perception, vocabulary, objective, planning, learn and carry. Fig 3 :20: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."*

For this question the links read:

1. **Perception.** Can the system tell A from B and register a change in B? Fig 3 :5: *"the system can tell what is in front of it, and tell it apart from what was there before."*
2. **Vocabulary.** Can it write both `A + B` and `A ⇒ B`? Operators table :16: *"the only bond in a flat formula, which is why a formula records ingredients and not arrangement."* A vocabulary with only `+` cannot write the second. Seat Map :184: *"A vocabulary of ingredients cannot state a route."*
3. **Objective.** Can it say what counts as progress: a smaller score, or a residual against the ground when A is set? Fig 3 :10: *"it can say what would count as progress here, in its own terms."*
4. **Planning.** Can it design a setting act that breaks the link to other causes of B?
5. **Learn and carry.** Can it settle the term and then compose over it? Formula step 5: settling is necessary but not sufficient.

The chain usually breaks between 2 and 3, because that is where no instrument exists. Fig 3 :25 to :26: perception and planning have obvious failures and obvious tests, while having terms for what a situation offers and saying what counts as progress has neither. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

**Order verdict:** better predictive models are effort above the break (link 1 refined while link 3 is absent). The intervention is the instrument that makes link 3 statable. `specified`, triangulated for the structure (Fig 3 + Fig 12 + Seat Map).

### Q2 : Are correlation and causation isomers?

Fig 12 :117:

> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

Write the two relations over the same atoms A and B:

- correlation: `A + B` (symmetric; swap gives the same term);
- causation: `A ⇒ B` (ordered; the effect is absent before A fires).

Same atoms, different bond, different behaviour under intervention. By Fig 12's definition these are **isomers**. The flat formula `{A, B}` cannot tell them apart, and nothing signals the loss; that is exactly the figure's "flat formula" collapse (Fig 12 :15 to :16: *"nothing downstream can tell them apart, / and nothing signals that anything was lost"*).

The chemical case is not an analogy added for colour. Fig 12 :97 to :98: *"silver fulminate and silver cyanate have the same composition and different properties, which is what forced structure into the notation."* The causal-inference problem is the same notational failure in a different substrate: a dataset records ingredients (co-occurrence) and not arrangement (direction).

**Isomer verdict:** yes, provided both are written over the same atom set. If one relation requires an atom the other does not (an unmeasured common cause, say), they are not isomers but members of a larger compound, and the extra atom must be enumerated from the habitat (Fig 11 :43).

### Q3 : Sequence versus production

Two ordered bonds are easy to confuse here. Fig 12 :70 to :74 defines `→` sequence:

> **"A then B; B needs A to have happened"**

with test *"swap them. Does it become a different thing? Yes."* Fig 12 :75 to :79 defines `⇒` production with *"A produces B; B did not exist before"* and *"is there a B before A fires? No."*

The difference is the status of B before A fires: for sequence, B is **waiting**; for production, B is **absent**. Operators table :40: *"different from sequence: the second operand is not waiting, it is absent until the first fires."*

A well-predicting temporal correlation (B follows A in the log) satisfies sequence but need not satisfy production. The discriminator is whether B exists before A fires, which is a question for the ground, not for the log. This is a second reason a predictive score cannot settle the case: it can establish order without establishing production.

### Q4 : What is the functional group?

Fig 12 :124: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."* The common functional group across the two relations is *two tracked slots with a stable co-variation*. The qualifier that decides the substance is the bond: symmetric versus ordered. Asking "how well does it predict?" examines the functional group; asking "what bond holds?" examines the qualifier.

### Q5 : Does the settled molecule become an atom?

Fig 12 :104: *"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."* Once a causal relation is settled against the ground, it becomes an atom for the next level (a policy, a mechanism, a further prediction). A correlation that merely predicts well has not been settled, so nothing may compose over it as a cause. Formula step 5: *"A gate is not the ground."*

## FALSIFIER, WRITTEN BEFORE THE RUN

The isomer claim fails if either relation can be written without an atom the other requires, or if a flat ingredient list (`{A, B}`) is shown to be sufficient to choose the correct intervention in a habitat specified in advance. The order claim fails if the chain can reach a grounded objective with a vocabulary holding only symmetric co-occurrence. In either case the bond vocabulary is not load-bearing and F1 of `01_figure_grounded_audit.md` must be withdrawn.

## CONCLUSION

The causal and correlational readings of the same two variables are **isomers** over a shared atom set: same ingredients, different bond, different behaviour under intervention. The checking chain is ordered by dependency and usually breaks between vocabulary and objective, where no instrument exists; the intervention is that instrument. Sequence and production are distinct ordered bonds, and only production has the "absent before A fires" test that a predictive log cannot supply. The isomer and order claims are structural (`general` for the shape, `specified` for any case), and neither is a ground reading.

## ANCHOR

Verbatim figure text extracted from the canonical local file `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; the Operators table; `THE_FORMULA.md`; the amended Seat Map; the three re-opened essays. No measurement was used.

## FIGURE CENSUS

Fig 3 (dependency order and the middle break), Fig 11 (habitat enumeration), Fig 12 (isomer, functional group, sequence, production, settled molecule), Operators table (bond tests, flat formula), Formula steps 3 and 5, Seat Map :184. Strains after re-census: none. The apparent tension between "no new atom" and "the confounder is an atom the other relation does not require" is resolved by scoping the isomer claim to the shared atom set; outside it we have a compound, not an isomer.
