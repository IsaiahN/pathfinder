# Order, isomers and cycles in a condition sequence

**Mode: `specified` on the checkable claims, `general` on the bond grammar. Not `grounded`.** This is a simulated derivation checked against the figures (see `05_what_shape_means.md` §5).

## RESIDUAL

The question uses the word "sequence" without saying what makes an ordered run different from a bag of reactions. Two things are owed:

1. What kind of bond holds a condition sequence together, and how would we tell it from a conjunction of independent reactions?
2. Are two protocols that use the same set of conditions in a different order the same experiment or different experiments? The file name asks the isomer question directly.

A third point follows from the literature: wet-dry and day-night cycling means a pathway can loop. Does the framework have a structure for a loop, or only for a line?

## DOMAIN CENSUS

Atoms held for this derivation: the condition set of a protocol (heating, drying, rehydration, irradiation, pH change, reagent delivery) and the products carried between steps. Bonds held: the seven, of which **→ sequence** and **+ conjunction** are the two candidates for joining conditions; **⇒ production** is the candidate for joining a product to the step that makes it; **cycle** and **catalyst** are structures named in Fig 12, not new primitives. No new primitive is needed. Anchor: Fig 12's six bond tests and the verbatim figure text.

Order by dependency: settle whether order matters before asking whether two protocols are isomers; settle whether a step is a cycle before asking whether the chain closes.

## DERIVATION

### Q1 : What bond joins consecutive conditions?

Fig 12 :70 to :74 defines **sequence**: *"A then B; B needs A to have happened"*, with the test *"swap them. Does it become a different thing? Yes."*

Fig 12 :55 to :59 defines **conjunction**: *"both hold at once"*, with the test *"swap the operands. Does the meaning change? No."*

These are mutually exclusive by the figures' own tests. So the answer is empirical but sharply posed:

- If reversing two condition steps changes the measured outcome (the product set, the yield, the intermediate that survives), the bond is **→ sequence**, and the protocol is a route.
- If reversing them changes nothing, the bond is **+ conjunction**, and the two steps are one symmetric molecule with k! spellings. Fig 12 :92: *"Under a symmetric bond, k operands have k! spellings and one term"*. The elaborate order is then notation, not substance.

This is the cleanest experimental operationalisation of the whole question. It does not require a new theory; it requires swapping two steps and measuring.

**Falsifier:** if a protocol's condition order can be permuted freely with no change in outcome across the whole set of steps, the sequence reading fails for that protocol and it should be treated as a single multi-component reaction. Note that this is a result about that protocol, not a refutation of Fig 12.

### Q2 : Are two differently ordered protocols isomers?

Fig 12 :117: *"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*

Take two protocols built from the same condition set {mild heating in water, evaporation, dry-state heating, rehydration, UV irradiation} (the set reported by Powner and Sutherland 2011), but with a different order.

- If Q1 returns "order matters", the two protocols are **isomers** in the figure's sense: same atoms, different arrangement, different substance. Reporting only the ingredient list hides the difference, which is exactly the flat-formula collapse (Fig 12 :14 to :17: *"the ingredients are recorded and the arrangement is not"*).
- If Q1 returns "order does not matter", they are **one term** under a symmetric bond, and counting them as two is the overcharge Fig 12 :92 names.

Fig 12 :124 gives the weaker relation when atoms differ: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."* Two unrelated pathways that both use a dry-down step share a functional group, not an identity.

**Falsifier:** show two protocols with the same condition set and a demonstrated order dependence whose products are nevertheless indistinguishable under every available measurement. Then the "decisive in the behaviour" clause fails and the isomer claim is withdrawn for that pair.

### Q3 : Why a single step is not the sequence

Fig 12 :111: *"A vocabulary without bonds can name a state and cannot name a route to one."*

Fig 12 :112: *"A plan is a sequence. A goal is a comparison. Progress is a subtraction."*

A single isolated reaction has no → between steps, no ⇒ producing a genuinely new feedstock for a later step, and no subtraction measuring how far the chain has moved. It has the grammar of a state term. This is not a claim that the chemistry is simple; it is a claim about what the description can express. The world literature agrees in its own terms: Hirakawa et al. 2025 note that models "often have many steps, each separately validated by laboratory experiments" and that the open challenge is whether the steps "work together in natural geological environments, absent human intervention."

### Q4 : What about cycles?

Fig 12 :119: *"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."*

Fig 12 :121: *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."*

Wet-dry cycling is not just a repeated condition; it is a candidate cycle structure. The figure gives a precise test: does the output re-enter as input, and what is the sign of the loop? A cycle that regenerates a catalyst closes; a chain that merely repeats a step does not. A protocol report that lists "ten wet-dry cycles" without recording what is carried from one cycle to the next has recorded the number of repetitions and not the structure. Fig 13 :88 to :89: *"The residual of the turn just closed is what the next turn composes against, so no two passes begin from the same place."*

**Falsifier:** show a cycling protocol in which each pass begins from exactly the same state, so the residual of the closed turn is not composed against. Then the cycle reading is wrong for that protocol and it is a repeated chain, which Fig 12 :121 says cannot close.

### Q5 : Where the chain breaks

Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*

Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

Fig 3's five links are perception, vocabulary, objective, planning, learn and carry. In prebiotic simulation research the well-instrumented link is perception (analytical chemistry). The least instrumented is the middle link: terms for what a condition affords and a statement of what counts as progress through the chain. Richert 2018 proposes reporting the number of manual interventions precisely because that link was not being reported. Eiby and Hassenkam 2025 make the same move for the stated scenario and its boundaries.

## CONCLUSION

The ordered bond, not conjunction, is the bond the question is asking about, and the operational test is to swap two conditions and measure. Two protocols with the same condition set are isomers when order changes the outcome and one term when it does not. Wet-dry repetition is a cycle only if the output re-enters as input; otherwise it is a chain that cannot close. The chain's likely break is the middle link, where the field has fewer instruments, not the reaction step, where it has many.

None of these claims names a pathway. They are the shape an answer must have, with tests attached.

## ANCHOR

Verbatim figure text extracted from the local SVGs, cited as `Fig N :line`; the Operators table for the sequence test; the world sources in `10_source_ledger.csv` for the practice claims. No laboratory measurement was made by this derivation.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 3 (dependency order, uninstrumented middle link), Fig 5 (one-occasion term fails), Fig 9 (union unbundling), Fig 11 (substituted habitat), Fig 12 (sequence and conjunction tests, symmetric spellings, catalyst, cycle, functional group, isomer, state versus route), Fig 13 (each turn begins from the last remainder), Operators table (sequence test). Strains after re-census: none. The Fig 12 structures are applied to the *description of a protocol*, not asserted as literal bond types in a reaction flask; this is an analogue at the level of grammar and is labelled as such in `01_figure_grounded_audit.md`'s retraction log.
