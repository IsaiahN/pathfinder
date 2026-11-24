# Coupling topologies as isomers, and the order of a cascade

**Mode: `specified`, with `general` on the isomer schema. Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).**

## RESIDUAL

The audit establishes that coupling is a union compound and that the sign of a loop decides closure. Two things remain owed: (1) whether different coupling arrangements over the *same* roster of tipping elements are isomers in Fig 12's sense, and (2) what order the composition has, since a chain cannot close and a cycle can. A third question is carried as a live strain: is a continuous coupling strength an atom, a bond weight, or a new kind of thing?

## DOMAIN CENSUS

Atoms held in this frame: threshold elements (each a `state - structure - state` first-order molecule once settled), the seven bonds including `→` sequence and `⋛` comparison, and the six substrate terms with `network` and `gradient` among the structures. No new primitive is available without an import. Currency: description length in bits and actions to test (Fig 12 :125-127), held apart. Anchor: the ground, a measured cascade. Question type: union with a possible cycle; order by dependency (settle each crossing before composing over it, Fig 12 :104).

## DERIVATION

### Q1 - Are two coupling arrangements over the same roster isomers?

- Fig 12 :117: `isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour.`
- Fix a roster `{A, B, C}` of tipping elements, each already settled into a crossed or baseline regime so each can act as an atom (Fig 12 :104). Hold the atoms constant and vary only the couplings:
  - **reinforcing cycle:** `A ⋛ B`, `B ⋛ C`, `C ⋛ A`, all destabilising. Output re-enters as input. A positive loop can close.
  - **inhibitory cycle:** the same three links with mixed signs. The loop may damp rather than close. Fig 12 :121 names the sign as the deciding quantity.
  - **domino chain:** `A → B → C` with no return link. A sequence, ordered, and by Fig 12 :121 a chain cannot close.
  - **parallel cluster:** all three coupled only to a common driver, not to each other. Clustered rather than propagating, in the vocabulary of Lenton et al. (2024).
- Same three atoms, four different arrangements, four different substances. The roster-level description cannot tell them apart; the bond carries the difference. So they are **isomers** under the figure's definition.
- **Falsifier, written before the run:** if for a fixed roster the outcome is invariant under permutation of the coupling arrangement (signs and order make no difference to closure or consequence), the isomer claim fails and only the roster-level claim remains. Fong et al. (2018) is a world-facing counterexample to that falsifier: additive, synergistic and antagonistic outcomes occurred in equal frequency under one three-stressor roster.
- **Condition to keep attached:** isomerism requires the *same atom set*. If one arrangement needs an atom the other does not (for example a mediator element present in one network and absent in the other), the two are not isomers. They are different rosters. Wunderling et al. (2021) report that the AMOC acts as a mediator while ice sheets act as initiators, which means their four-element networks do share a roster; that is the condition that makes the comparison licensed.

### Q2 - Order: sequence versus cycle

- Fig 12 :72-74 defines `→` sequence: `A then B; B needs A to have happened`, with the test `swap them. Does it become a different thing? Yes`.
- Fig 12 :121: `cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction.`
- A domino cascade is a sequence. A reinforcing cascade is a cycle. These are **different bonds**, so they are different terms even with identical atoms. Writing both as "a cascade" with one flat formula is Fig 12's flat-formula collapse: the ingredient set is recorded and the arrangement is not, so nothing downstream can tell them apart and nothing signals that anything was lost (Fig 12 :14-16).
- Consequence for likelihood: a sequence has a finite length bounded by the roster; a cycle can re-enter and amplify. Asking "how likely is a cascade?" without saying which bond is intended is asking one question about two different objects. This is Fig 9 :4 applied: `Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search.`
- **Falsifier:** exhibit a system whose influence graph is provably acyclic and in which a loop cannot form at any scale; then the cycle term is unavailable there and only the sequence reading applies. The claim is then narrowed to that domain, not abandoned.

### Q3 - What functional group do all the arrangements share?

- Fig 12 :123: `functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member.`
- Every arrangement above contains a crossing (`⋛` between a quantity and a threshold) and a coupling (influence travelling, Fig 13 :24). That `threshold - coupling` substructure fixes the *kind*: a coupled-threshold system. The bond says *which member*: reinforcing, inhibitory, sequential or clustered.
- This matters for the literature split. Multiple-stressor ecology often reports additive, synergistic and antagonistic interactions within one functional group (Pirotta et al. 2022; Fong et al. 2018). Network physics reports first-order versus continuous percolation transitions under different coupling strengths (Gao et al. 2019; Liu et al. 2016). Both are members of one functional group, not variants of one substance.

### Q4 - Level: first-order crossing, second-order cascade

- Fig 12 :104: `A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world.`
- First order: one element crosses, `state → structure → state`, one crossing. It is a molecule.
- Second order: the crossed element has settled against the ground and becomes an atom. Its influence on another element is a composition over that atom. The cascade is second-order, and needs no seventh primitive. The recursion is Fig 12's, not an import.
- **Strain, named.** The Operators table defines `⋛` as `a threshold relation between two quantities`. At second order the operands are settled molecules now acting as atoms. Fig 12 :104 allows the demotion to atom; whether an atom counts as a quantity at that level needs an instrument, not an argument. This is recorded in `01` F12 and F12 of the verification packet. It is not smoothed.
- **Falsifier:** show that a settled molecule cannot serve as an operand of `⋛` at any level. Then the second-order cascade is not composable and the level claim fails.

### Q5 - Is coupling strength an atom, a bond weight, or a new kind?

- Fig 12 :99-101: a bond costs what it could have been, logarithmically in the number of bond types available: `The price of an arrangement is the choice it records, so it is logarithmic in the number of bonds available.` With one bond type the term is zero.
- A continuous coupling strength `d_ij` (as in Wunderling et al. 2021) is not obviously a bond *type*. It looks like a weight on a link, which Fig 12's price does not enumerate. If it is a weight, the bond vocabulary is unchanged and no new primitive is owed. If it behaves as a new kind (for example a signed threshold rather than a magnitude), it would be a seventh item, which the set forbids without import (Fig 13 :115-117).
- The framework cannot say which, because naming the missing primitive would mean already holding it. It can say what the missing thing would have to look like: a quantity that changes closure without adding a state or a structure to the six. That is a shape, not a name.
- **Falsifier:** derive the coupling strength from the six terms and the seven bonds with no import, or show that a seventh primitive is genuinely required. Either outcome removes this strain; the honest current state is that neither has been run.

## CONCLUSION

Over a fixed roster, reinforcing cycles, inhibitory cycles, domino chains and parallel clusters are isomers: same atoms, different bonds, different substances. They all share a `threshold - coupling` functional group, which is why one vocabulary covers them while one number does not. Order is decided by the bond, not by the count: a sequence cannot close, a cycle can, and the sign decides the outcome. The cascade is second-order, licensed by the settled-molecule rule, with one live strain on the operand type of `⋛` and one open question about whether coupling strength is a weight or a new kind. No new primitive is imported, and no universal multiplier is derived. The falsifiers are stated above and were written before this conclusion.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; the canonical figures README and `THE_FORMULA.md` read locally; world sources opened and quoted in `10_source_ledger.csv`. No measurement was used.

## FIGURE CENSUS

Fig 9 :4 (split rather than search), Fig 12 :14-16 (flat formula), :72-74 (sequence), :99-101 (bond price), :104 (settled molecule), :117 (isomer), :121 (cycle), :123 (functional group), :125-127 (two currencies); Fig 13 :24 (network), :115-117 (closed set, unbounded arrangements); Operators table (:48 threshold relation, bond list). Strains after re-census: two live and named (operand type at second order; status of coupling strength), none hidden.
