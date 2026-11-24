# Correlation and mechanism as an isomers-and-order question

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §5).

## RESIDUAL

Two models can share every feature and every in-distribution prediction and still behave differently under intervention. The figures' bond vocabulary should say what is added when we call one a mechanism and the other a correlation. Three questions are owed:

- Q1: is a correlational model a *flat formula* and a mechanistic model a *molecule*?
- Q2: are the two isomers, a functional group, or neither?
- Q3: what is the dependency order, and where does the chain usually break?

## DOMAIN CENSUS

Atoms held: the seven bonds plus negation (Operators table); for a model, the variables and features it can represent. Structures named by Fig 12 that can apply: isomer, catalyst, cycle, functional group. Currency: bits for the description, actions for finding out whether the arrangement holds (Fig 12 :125-126 *"Bits price the description. Actions price finding out whether it holds."*). Anchor: intervention behaviour. No new primitive is available without import.

## DERIVATION

### Q1: Flat formula versus molecule

Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."** Fig 12 :14-17: **"the ingredients are recorded and the arrangement is not / nothing downstream can tell them apart, / and nothing signals that anything was lost"**. Fig 12 :94: **"The arrangement is the substance."**

A feature-importance report and a flat accuracy measure record ingredients. They cannot distinguish two arrangements over the same ingredients. The situation is Fig 12 :6-8's collapse: *"collapse 6: the flat formula"*, *"collapse 7: the free bond"*, against *"collapse 7: the free bond"* corrected by *"grounded: the priced bond"*.

- **Correlation-only reading:** the model holds the atoms, and the arrangement it holds is the one that pays inside the training habitat. Nothing in the flat formula records which arrangement it is.
- **Mechanism reading:** the model holds an arrangement that pays when the ground is pushed from a different frame.

Fig 12 :111-113: *"A vocabulary without bonds can name a state and cannot name a route to one. A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."* "Mechanism" is a claim about a route (which relation carries the behaviour), so a vocabulary restricted to ingredients cannot state it. This is the Fig 3 :25-26 middle-link problem in new words: *"The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."*

**Result:** yes, the correlation/mechanism contrast is the flat-formula/molecule contrast, `specified`, triangulated across Fig 12 and `THE_FORMULA.md` "Composition" (two low-overlap routes inside the framework).

### Q2: Isomers, functional group, or neither?

Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."** Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

Three cases:

1. **Same atom set, different bond, different intervention behaviour.** That is the figure's isomer, exactly. For models, two architectures or two fitted parameter sets over the same variables whose predictions coincide in-distribution and diverge under intervention are isomers under this definition. This is the strong claim worth testing.
2. **Different atom sets, same `state → structure → state` pattern.** Two models can share only the pattern (both map inputs through a structural relation to a prediction) while holding different variables. By Fig 12's definition they are **not** isomers; they are members of a **functional group**. This is the weaker, safer claim.
3. **Same atoms, same bond, different behaviour.** Under the figure that is impossible without a change of habitat or a refuted term, so it is a signal to re-census, not a fourth category.

Fig 12 :95-96: **"Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."**

**Falsifier, written before the run:** if two models that pass case 1 (same variables, different arrangement, different intervention behaviour) can be made to agree under every intervention once the habitat is held fixed, the isomer claim fails and only the functional-group reading stands. Conversely, if two models with *different* atoms behave identically under intervention, the mechanism-credit is not tied to a specific bond and F3 of `01` is weakened.

Mode `specified`. Single-source for the figure definition (Fig 12); the model-level application is an analogy with an explicit falsifier, not a chemical identity claim. The exemplar declined a similar over-reach when it narrowed its own isomer reading; the same narrowing is made here.

### Q3: Dependency order, and where the chain breaks

Fig 3 :4-15 gives the five links: perception, vocabulary, objective, planning, learn and carry. Fig 3 :20-21: **"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."**

Applied to mechanism-credit:

1. **Perception:** can the system tell that a prediction failed to resolve under shift? Usually yes (benchmark accuracy drops).
2. **Vocabulary:** does it have terms for bond versus ingredient? Usually no. Fig 3 :25-26: *"The middle link ... has neither, so it attracts the least attention and the fewest instruments."* Feature importance is an ingredient vocabulary.
3. **Objective:** can it say what would count as progress in its own terms? "Higher accuracy" is available; "residual stays down under an independent push" is not always instrumented.
4. **Planning:** intervention design, under incomplete information.
5. **Learn and carry:** name what worked, verify it, carry it with provenance (Fig 3 :13).

Most effort lands above the break, because accuracy has instruments and the bond vocabulary does not (Fig 3 :29-30 *"Most improvement effort in practice lands above the break, because that is where the measurements already exist."*). This is why "scale the model" and "add data" are the default moves, and why Fig 8 :32 says they stay inside the closure.

**Result:** the chain breaks at link 2 or 3. A reading taken below the break is not a weak reading; Fig 3 :22-23: **"A step whose input never arrives cannot be diagnosed, only its predecessor can. Which is why a reading taken below the break is not a weak reading. It is a reading of nothing."** So a claim that a model has a mechanism, made without a bond vocabulary or an intervention objective, is a reading of nothing at that link.

### Q4: What the intervention is in bond terms

An intervention is not just another datum. In bond terms it is the operator that changes which arrangement pays. Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** Fig 11 :68-69: **"what you failed to reproduce is invisible until the goal fails"** and **"what you unintentionally introduced is invisible until it acts"**. So the intervention does two things at once: it reveals what the training habitat failed to reproduce, and it activates what the new habitat unintentionally introduced. Both are Fig 11's silent failure modes, and both are why a single in-distribution score cannot discriminate sources.

Fig 8 :50-52: **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them"**. If an intervention succeeds, the record must say whether the surviving regularity was already derivable in the training closure (convergent) or whether a new atom entered through the probe (import). Without that record the mechanism-credit is unproven.

## CONCLUSION

The correlation/mechanism contrast maps onto Fig 12's flat-formula/molecule contrast with a real falsifier. As normally reported, two models sharing only a pattern are a **functional group**, not isomers; the stronger, checkable claim is that two models over the same variable set with different arrangements are **isomers**, invisible in accuracy and decisive under intervention. The chain breaks at vocabulary or objective, not at scale, and the intervention is the operator that changes which arrangement pays. This rescues the question's real content without either blanket denial or a licence to call feature importance a mechanism. What remains unmeasured is any particular model: that requires the ground.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, reopened this session; the Operators table; the eight essays where cited in `05_what_shape_means.md`. No measurement was used.

## FIGURE CENSUS

Fig 3 (dependency order, middle link, below the break), Fig 6 (closure, import, provenance), Fig 8 (idempotence, convergent derivation versus adopted import), Fig 11 (silent failure modes of substitution), Fig 12 (flat formula, priced bond, isomer, functional group, two currencies), Operators table (seven bonds plus negation), `THE_FORMULA.md` (Composition, step 5 settlement). Strained after re-census: none. The one open item is the falsifier above, which is an instrument question, not a figure conflict.
