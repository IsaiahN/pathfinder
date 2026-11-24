# Support derivation: structure, order, and isomers of a reconstructed route

**Mode: `general` on the bond analysis, `specified` on the chemistry-facing predictions, not `grounded`.** This is a simulated derivation checked against the figures (`05_what_shape_means.md` §6), not a ground reading.

## RESIDUAL

The question asks for a *sequence of connected steps*, not isolated reactions. Three things are owed: (1) what structure a route is, (2) what order the bonds impose, and (3) whether two different routes to the same product are variants of one thing or different things. The last matters because it decides what "a plausible sequence" can mean.

## DOMAIN CENSUS

Atoms held: the feedstock and intermediate molecules of a given prebiotic network (states), plus the environment terms enumerated from the habitat (conditions, not composed). Bonds held: the seven, of which `+` (conjunction, symmetric), `→` (sequence, ordered), `⇒` (production, ordered), and `−` (subtraction, ordered) bear here. Negation `¬` is the eighth operator and is not a bond (Operators table :70-78). No new primitive is available without import.

## DERIVATION

### Q1 What structure is a route?

- Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**
- Symbols table :64-66: *"molecule / a bonded arrangement / Any composition of atoms and the bonds between them. A chain is the degenerate case: one bond type, no branching."*
- A pathway is therefore a molecule in the framework's sense: feedstocks and intermediates as operands, handoffs as bonds. It is not a set with an ordering printed on top.
- A demonstration of reaction A to B in isolation contributes an atom (B) and a priced relation. It does not contribute the route.
- **Falsifier:** exhibit a route whose behaviour is fully determined by its ingredient list with the bond structure erased, for the system at issue.

### Q2 What order do the bonds impose?

- `+` conjunction is symmetric: *"swap the operands. Does the meaning change? No."* (Fig 12 :59). A one-pot list of all reactions is read this way.
- `→` sequence is ordered: Fig 12 :72 **"A then B; B needs A to have happened"**; test: **"swap them. Does it become a different thing? Yes."** (Fig 12 :74).
- `⇒` production is ordered and stronger: Fig 12 :77 **"A produces B; B did not exist before"**; test: **"is there a B before A fires? No."** (Fig 12 :79). A prebiotic synthesis step is usually `⇒`, not merely `→`, because the intermediate is absent before the step.
- Fig 12 :92-93: **"Under a symmetric bond, k operands have k! spellings and one term, so a code that charges for the sequence overcharges by log₂(k!) while the bond term undercharges."** A flat formula overcharges the spelling space and undercharges the relation, in opposite directions.
- **Consequence:** "isolated reactions" and "connected sequence" are not the same notation with different labels. They are different bond vocabularies. The first can say what is present; the second can say what follows what. Fig 12 :111: **"A vocabulary without bonds can name a state and cannot name a route to one."**
- **Falsifier:** show a set of reactions under `+` from which the order of every handoff is derivable without any ordered bond.

### Q3 Are two routes to the same product isomers or variants?

- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Fig 12 :97-98: **"This is not an analogy. Chemistry hit it first: silver fulminate and silver cyanate have the same composition and different properties, which is what forced structure into the notation. Liebig and Wöhler, 1824 to 1826; named isomerism by Berzelius, 1830."** Chemistry is the literal case the figure generalises from, so applying isomerism back to chemistry is not a metaphor imported from elsewhere.
- Fig 13 :121: **"Different routes can arrive at the same substance."** Fig 13 :123: **"Two chains built from different links may compose functionally identical terms, and the converse holds too."**
- Two prebiotic routes over the same feedstock set, differing in which intermediate connects to which, are therefore **isomers** in the figure's sense: same atoms, different bond arrangement, potentially different product distribution and different stability. They are not two spellings of one route.
- A weaker reading also exists. If the two routes share only one or two atoms and the same overall pattern, they are members of a Fig 12 :123 **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."** The group says "a connected route exists"; it does not say which.
- **Falsifier:** if either route can be written without an atom the other requires, and both still reach the same product under the same habitat, the isomer reading fails and only the functional-group reading stands. Recorded as a live check, not a result.

### Q4 What closes the route?

- Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."**
- Fig 12 :119: **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."**
- A linear sequence is the degenerate case (Fig 12 :48). It can produce a target once. For a route that continues, the framework requires the cycle and a sign that closes. This is why autocatalytic sets are structurally relevant (world corroboration in `09_watson_answer.md`), but the requirement itself is figure-derived.
- **Falsifier:** a measured, self-sustaining linear route with no regenerated species and no loop.

### Q5 What is the union order of the question?

- Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**
- The route is the union of its conditions, not a partition of independent reactions. The dependency chain (Fig 3 :20: **"The chain is ordered by dependency, not by importance."**) runs: product detection -> vocabulary of affordances -> objective of "connected" -> route plan -> carried method. Optimising an already working step cannot rescue a broken handoff (Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."**).

## CONCLUSION

A connected prebiotic route is a bonded arrangement, not a list. Its order is carried by the sequence and production bonds; the flat one-pot list uses the symmetric conjunction and cannot express that order. Two routes over the same feedstocks are isomers, so the figures license a route *shape* and not a unique pathway. Closure, if claimed, requires a cycle with a sign, which a chain cannot supply by construction. The chemistry-facing statements are `specified` and unmeasured; the bond analysis is `general`.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the Operators and Symbols tables, and `THE_FORMULA.md`, all read this session. No measurement was used. World sources are secondary and are listed in `10_source_ledger.csv`.

## FIGURE CENSUS

Fig 3 :19-20 (dependency order), Fig 9 :54 (union), Fig 12 :5, :48, :59, :72, :74, :77, :79, :92-93, :97-98, :111, :117, :119, :121, :123 (bond, order, isomer, cycle, functional group), Fig 13 :121, :123 (different routes, different links), Operators table :70-78 (negation is unary), Symbols table :64-66 (molecule, chain). Strains after re-census: none internal; the chemistry-facing checks remain unmeasured and are named as such.
