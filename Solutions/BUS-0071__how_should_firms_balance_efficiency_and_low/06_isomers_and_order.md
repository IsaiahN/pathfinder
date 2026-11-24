# Structure, order and analogues: a supporting derivation for BUS-0071

**Mode: `specified` for the firm application, `general` for the structural claims.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §5).

## RESIDUAL

"How much efficiency should we trade for resilience" treats the two as quantities on one scale. The supporting questions are: (1) what is the actual structure being chosen, (2) in what dependency order must the decision run, (3) which low-overlap analogues transfer, and (4) what the round trip from figure to policy loses.

## DOMAIN CENSUS

Atoms available in the operations frame: a component, a qualified supplier, a second qualified supplier, a buffer, a route, a contract, a near-miss signal. Bonds available (Fig 12, Operators table): `+` conjunction (both hold), `∥` disjunction (either suffices), `≡` identity, `→` sequence, `⇒` production, `−` subtraction, `⋛` comparison, and `¬` negation (unary, not a bond). No new atom can be minted from inside a fixed supplier set (Fig 6 :32). Anchor: realized recovery, not the plan.

Dependency order (Fig 3): perception, vocabulary, objective, planning, learn and carry.

## DERIVATION

### Q1. Are lean JIT and buffered dual-source supply chains isomers?

- Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Fig 12 :92-93: under a symmetric bond, k operands have k! spellings and one term; under an ordered bond, different orders are different terms.
- Operators table on `∥`: "either suffices; not both required" with the test "remove one. Does it still work? Yes."
- Operators table on `→`: "A then B; B needs A to have happened" with the test "swap them. Does it become a different thing? Yes."
- A single-source JIT arrangement is `supplier → component → assembly`, an ordered chain in which each link must hold; `+` conjunction is implicit (all links must hold at once). A dual-source arrangement adds `∥`: either supplier suffices. A buffered arrangement adds a buffer atom that changes the sequence relation. The atoms are nearly identical; the bond differs, so the substance differs.
- **Result:** yes, under Fig 12's definition they are isomers. This is why a bill of materials, which lists atoms and not bonds, cannot predict disruption behaviour. Mode `specified`. Status triangulated: Fig 12 definition plus Fig 1 :22 (aggregation hides the live slot).
- **Falsifier, written before the run:** if two configurations with identical atoms and identical bond records nonetheless differ under every disruption tested, a hidden atom exists and the isomer reading fails; if configurations with different bond records behave identically across all disruptions that reach them, the bond carries nothing under this reading.

### Q2. Functional group: what fixes the kind of resilience?

- Fig 12 :124: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."
- The group here is "a qualified alternate for a critical component" (a `∥` bond over two suppliers). It fixes the **kind** of protection. The qualifier, which component and which alternate, fixes the member.
- This blocks a common error: buying a second supplier for a non-critical component does not install the functional group for the critical one. A count of dual-sourced components is a summary, not the structure.

### Q3. Where does the decision chain actually break?

- Fig 3 :25-26: perception and planning have obvious failures and obvious tests; the link between them, *"having terms for what a situation offers and being able to say what would count as progress, has neither."*
- Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."
- Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."
- Cost accounting gives firms excellent terms for unit cost and weak terms for what a disruption affords and what recovery would count as progress. Effort therefore lands above the break, on an already working cost link. The missing instrument is not more cost precision; it is a per-slot recovery signal (Fig 6 :34-35: "the search for a proto-instrument is a search for one that is already there"). Mode `specified`, single-source for the chain diagnosis.

### Q4. What is the order of the decision itself?

Fig 12 :111-112: "A vocabulary without bonds can name a state and cannot name a route to one." "A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."

So, in operator terms:

1. `¬` refuse the premise that efficiency and resilience add on one scale (Formula step 2: a refusal is owed before a mint; Operators :57-58: "a refutation is a negation, which is why a vocabulary without it can only accumulate"). Negation is unary and joins nothing, so it precedes the composition.
2. Enumerate the habitat per slot (Fig 11 :43-48), outward until the cascade stops mattering (Fig 11 :52).
3. `⋛` compare the two ledgers: cost and recovery are ordered quantities, not a conjunction (Operators :49-51: "is it about which is larger, rather than both being present? Yes.").
4. Bond choice: `+`, `∥`, `→` as Q1. Import a new atom only when the closure lacks one (Fig 6 :23), with source gate and shadow test (Fig 8).
5. `-` measure progress as the residual removed per slot, not as terms minted.
6. Settle against a disruption. "A gate is not the ground" (`THE_FORMULA.md` step 5).

A plan is a sequence, so reordering these steps changes the thing. Presenting the buffer number before the refusal and the census is a sequence error, not merely a presentation choice.

### Q5. Which analogues transfer, and which are one witness?

- **Ecology, low overlap.** Through the tertiary *Ecological resilience* page (reporting Folke et al. 2002): *"This very act of specialisation weakens resilience by permitting systems to become accustomed to and dependent upon their prevailing conditions."* Predicts that the cheapest configuration is the one most dependent on its current conditions. Corroborates the contact claim, not the firm-level fact.
- **Human factors and organizational cognition, low overlap.** Through the tertiary *High reliability organization* page (reporting Weick, Sutcliffe and Obstfeld 1999; Perrow 1984): *"they look across system boundaries to determine the path of problems (where they started, where they may end up) and value a diversity of experience and opinions."* Also: *"At Three Mile Island the technology was tightly coupled due to time-dependent processes, invariant sequences, and limited slack."* Predicts tier-k enumeration and a measured price for tight coupling. Corroborates F2, F3 and F7.
- **Healthcare operations, low overlap.** Hasmee et al. 2026, BMJ Open Quality: *"A hybrid inventory model that combines just-in-time (JIT) principles with emergency buffer stock strategies and AI-based demand forecasting was recommended to enhance supply chain flexibility and minimise disruptions."* Also: *"Resilience can be strengthened through scenario-based procurement, multi-tier supplier reviews and early warning systems via real-time dashboards."* Predicts a conditional bond choice by component criticality, not a universal buffer. Corroborates Q2.
- **Construction engineering, low overlap.** Zhang and Yu 2021, Journal of Civil Engineering and Management: *"formulation of the resilience-cost tradeoff optimization model for the PCSC planning is developed"*, solved as *"a multi-objective optimization model"*. Predicts two objectives kept separate rather than summed. Corroborates F1's keep-apart instruction.
- **Operations management, same broad pool as the question.** *Lean manufacturing* (tertiary) on the prerequisite for lean: *"a supportive, high-performance supplier network."* This is the habitat claim stated by practitioners. It is not an independent second witness for the figures; it shares the business pool.

Conflict rule: none of these conflicts with the figure verdict. If one did, the instruction is to return to the domain census, not to flip the verdict (Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you.").

## CONCLUSION

The choice is structural, not scalar. Lean JIT, dual-source and buffered configurations are isomers: the atoms are largely shared and the bond carries the difference that a bill of materials cannot show. The functional group for a critical component is a qualified alternate, and a count of alternates elsewhere does not install it. The decision chain breaks at the missing recovery instrument, not at cost accounting, and the order of operations begins with a refusal of the one-dial premise. Low-overlap analogues from ecology, human factors, healthcare and construction engineering corroborate the shape but do not settle the firm-level quantity.

## ANCHOR

Verbatim figure text at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the Operators table, and the five essays opened and quoted in `05_what_shape_means.md`. No firm was measured. No disruption outcome was observed.

## FIGURE CENSUS

Fig 1 (per slot), Fig 2 (anchor and independence), Fig 3 (dependency order and missing instrument), Fig 6 (import, proto-instrument), Fig 8 (import gates, no proof of absence), Fig 9 (union and keep-apart), Fig 11 (habitat, cascade), Fig 12 (bond types, isomer, functional group, plan/goal/progress/refusal), Operators table (`∥`, `→`, `⋛`, `¬`). Strained after re-census: none within the figure set; the mapping of Fig 12's bit/action currencies onto dollars/recovery remains a mapping strain recorded in `01` §6.

## FALSIFIER

Before this run: if any configuration achieves identical recovery with a strictly dominated bond structure across a representative disruption set, or if removing one of two bonded suppliers never matters, the isomer claim fails and the difference is in an atom not yet enumerated, so the census must be redone. If the decision order can be reversed with no loss of residual, Q4 fails.
