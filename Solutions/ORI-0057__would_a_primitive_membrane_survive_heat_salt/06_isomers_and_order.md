# Order, isomers and analogues in membrane survival

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §7).

## RESIDUAL

"Heat, salt, acidity, or other plausible early-Earth conditions" reads like an ordered list. Is it a sequence, a set, or a union? And do two primitive membranes with the same amphiphiles but different arrangements count as the same object for this question? Three questions are owed:

1. What bond relates the conditions to each other and to the membrane?
2. Are two membrane compositions with the same ingredient set different substances under Fig 12?
3. Which of Fig 12's four named structures (isomer, catalyst, cycle, functional group) actually applies here?

## DOMAIN CENSUS

Atoms held for this derivation: the six substrate terms, plus the imported chemistry terms (fatty acid, fatty alcohol, glycerol ester, nucleobase, sugar, NaCl, Mg2+, pH, temperature). Bonds held: the seven, including `→` sequence and `⋛` comparison; negation is the eighth operator and is not a bond. No new substrate primitive is available without import.

## DERIVATION

### Q1: The conditions are a disjunction, not a sequence

Fig 12 :55-59: conjunction "+" is symmetric, "swap the operands. Does the meaning change? No." Sequence `→` is ordered, "swap them. Does it become a different thing? Yes" (Operators table :33). The question's "or" is not `→`. Heat does not need salt to have happened first; they co-occur or they do not. The correct bond for co-presence is `+`, with the union caveat of Fig 9 :54.

Three errors are available here and all are refused:

- Writing `heat → salt → acidity` invents an order the world does not give.
- Collapsing the three into one severity scalar aggregates across slots (Fig 1 :19).
- Treating them as `⋛` comparison imports a threshold relation between two quantities (Operators table :49) where there is no single quantity being compared.

**Falsifier:** a measured mechanism in which salt can only act after a thermal step, with a single ordered threshold that predicts all three conditions. If found, the `+` reading fails.

### Q2: Same ingredients, different membrane, different outcome

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

World case: a 2:1 fatty acid/glycerol-ester mixture "retained internal RNA and DNA oligonucleotides at temperatures ranging from 0 °C to 100 °C" (W1), while pure fatty-acid vesicles of the same chain family leaked at 50 °C to 80 °C (W1). The amphiphile set differs by one member, so this is not a strict isomer of the full set. The stricter case arrives if two assemblies share the same amphiphiles and differ only in headgroup bonding and packing; Fig 12 predicts different behavior despite an identical ingredient list. That is the checkable structural claim.

The weaker, safe reading is Fig 12 :123: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." The glycerol monoester headgroup, or a bound nucleobase, is a substructure whose presence fixes the salt outcome (W2, W3). That much is supported at the ground.

**Falsifier, written before the run:** if two compositions with the same amphiphile set and the same headgroup bonding show identical retention across temperature, salt and pH, the isomer claim fails and only the functional-group claim survives.

### Q3: The cycle is real, and a chain cannot close by construction

Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."

World case: thermal cycling is not just a stressor. A 2:1 mixture survived 20 cycles of 2 min at 20 °C and 2 min at 90 °C with no loss of entrapped oligonucleotide (W1), and high-temperature excursions allowed strand separation and nucleotide uptake inside the vesicle. Wet-dry cycling likewise improved vesicle stability and binding (W6, encyclopedia overview). The output of one cycle (a vesicle that has taken up material) is the input to the next. That is a cycle, not a sequence, and it is why a one-shot survival assay is not the whole residual.

**Falsifier:** show that repeated cycling is statistically identical to one exposure of the same integrated duration, with no re-entry effect. Then the cycle finding fails.

### Q4: A part that survives its own use

Fig 12 :119: "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."

The mineral and surface actors in W4 are not consumed by the reactions they support, and bound building blocks in W3 stabilize the membrane across uses. This is the catalyst analogue. It matters for the survival question because a part that regenerates changes the second-order behavior of the habitat: the same condition acts differently after the part has done its work. The label is a binding from the chemistry frame onto Fig 12's term, provenance recorded.

**Falsifier:** show that every stabilizing actor in the measured cases is spent by one use and must be replenished from outside. Then the catalyst analogue is wrong for this question.

### Q5: Level relativity settles what counts as the object

Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."

A vesicle whose retention has been settled under a named condition becomes an atom for the next level: a population of such vesicles under selection, or a vesicle-plus-cargo system in a cycle. The question "would it survive" changes level when the vesicle becomes an operand. This is why `01` §1 separates first-order integrity from second-order persistence and cascade.

**Falsifier:** show a case where a settled membrane cannot serve as an operand for a higher-level composition. Then level relativity does not apply here.

## CONCLUSION

The conditions form a symmetric co-presence with a union caveat, not a sequence and not a comparison. Two membranes with the same ingredients can be different substances under Fig 12, but the strict isomer case is still unmeasured; the functional-group case is supported at the ground. Cycling is a real cycle, and surfaces and bound cargo behave as parts that survive their own use. Level relativity makes a settled membrane an atom for the next question. None of this gives a yes/no to ORI-0057; it gives the arrangement the answer must have.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the Operators table, and the local framework files, all opened this session. World quotes from W1, W3, W4 and W6 as listed in `10_source_ledger.csv`. No measurement was taken by this derivation.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 9 (union, unbundle), Fig 11 (habitat, cascades), Fig 12 (bond types, isomer, catalyst, cycle, functional group, level relativity), Operators (symmetry and comparison tests), Formula (steps 3, 5, 7 and the Habitat rule). Strains after re-census: none hidden. The one open item is the strict isomer case, which needs a discriminating measurement, not another argument.
