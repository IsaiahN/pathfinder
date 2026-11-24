# Supporting derivation: bond structure, dependency order and analogues

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

`01` finds a union of five roles, not one architecture. Two questions remain: (1) are a neural-dominant and a symbolic-dominant composition **isomers** under Fig 12, and (2) in what **order** do the five roles sit? Without an order, "combine" is still an unordered bag.

## DOMAIN CENSUS

Atoms and roles held: Γ, belief b, weighting w, action a, observation o-prime and residual R indexed by slot s (Symbols table); the six substrate terms and their two kinds (Fig 13); seven bonds and one unary negation (Operators table); closure(Γ), the record and imports (Fig 6); instruments and habitat (Fig 11). No new primitive is available without import.

Partition or union: a union of overlapping conditions (Fig 9 :55). Order by dependency, not by importance (Fig 3 :20).

## DERIVATION

### Q1 - Are neural and symbolic isomers? Answer: not as usually written; a narrower isomer claim is available

- Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
- As engineering modules, a neural network and a logic engine do not share an atom set in the framework's sense. They are not isomers; they are different kinds of thing with different vocabularies. Claiming they are would strain Fig 12, so it is refused.
- Fig 12 :124: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."* What the two dominant styles share is a functional group, not an ingredient set: something like `state → structure → state` with different fillers.
- The narrower isomer claim: write both compositions over the **same** framework atoms, differing only in which bond mediates. A neural-dominant run and a symbolic-dominant run over the same six terms with different bond placement are isomers in Fig 12's exact sense. That is the checkable version.
- **Falsifier, written before the run:** if two such compositions, with identical atom sets and different bonds, produce identical per-slot residuals and identical probe outcomes on every instrument available, the isomer claim fails and only the functional-group claim survives.

### Q2 - What order are the five roles in?

- Fig 3 :20: *"The chain is ordered by dependency, not by importance."*
- Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*
- The dependency chain reads: **perception → vocabulary → objective → planning → learn and carry** (Fig 3 :4 to :15). Mapped to this question without renaming the framework's terms:
  1. perception: instruments and tools extend what can be represented at all (Fig 6 :26).
  2. vocabulary: the bond grammar, which is what symbolic reasoning contributes (Fig 12 :46).
  3. objective: a ground and a comparison, which is where "what counts as progress" is stated (Fig 12 :112, goal is a comparison).
  4. planning: search over the closure, chosen under incomplete information (Fig 6 :49).
  5. learn and carry: name what worked, verify it, carry it; the memory role (Fig 3 :15).
- This order is a binding from the engineering frame onto the chain, `specified`, not derived from the six-term set. It is falsifiable at each link.
- **Fig 3 :25-26 identifies the break:** *"Perception has obvious failures and obvious tests. Planning has obvious failures and obvious tests. The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."* That middle link is vocabulary plus objective, which is exactly the symbolic contribution. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* So the most common failure in a hybrid system is not the neural matcher or the search budget; it is the unmeasured grammar-to-goal link.

### Q3 - A pipeline is a chain and cannot close; a system needs the cycle

- Fig 12 :121: *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."*
- Fig 12 :48: *"A molecule is a bonded arrangement. A chain is the degenerate case: one bond type, no branching."*
- Five modules in a row are the degenerate chain case: one bond type, no branching, no closure. What makes the residual re-enter is the per-slot R of Fig 1, which is an error signal and an aim (Symbols table). So the correct picture is a cyclic loop with typed bonds, not a linear stack of named modules.
- Fig 12 :103: *"Composition is recursive, and the level decides what is irreducible."* A settled first-order composition becomes an atom for the next level, so the loop is a generator across levels, not a fixed pipeline.

### Q4 - Symmetry decides which orderings cost something

- Fig 12 :92: *"Symmetry is what decides whether an arrangement is a new thing."*
- Operators table: the symmetric bonds are +, ∥ and ≡; the ordered bonds are →, ⇒, − and ⋛. Negation is unary and joins nothing.
- If the bond between neural and symbolic is `+` (conjunction, both hold at once), swapping the operands changes nothing and the two spellings are one term. If it is `→` (sequence), swapping them produces a different thing and must be charged for. Fig 12 :93 notes the symmetric bond undercharges the sequence and the ordered code overcharges it, in opposite directions.
- So "which order" is not a free aesthetic choice. It is a priced commitment to a bond type. Claiming "they run together" while building a fixed pipeline is the flat-formula error: the ingredients are recorded and the arrangement is not.

### Q5 - Two currencies, not one benchmark scalar

- Fig 12 :125: *"A composition costs in two currencies, and they do not add."*
- Fig 12 :126: *"Bits price the description. Actions price finding out whether it holds."*
- A hybrid system can be cheap to describe and expensive to settle (a short symbolic rule over a costly operand), or expensive to describe and cheap to refute (a long learned chain). Summing parameter count, token count and FLOPs into one "efficiency" score is the error this figure names. Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

### Q6 - Analogues that survive translation, and one that does not

- **Catalyst (Fig 12 :119):** *"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."* Applied to memory: a cached rule that survives its use and a one-shot trace that does not are different terms even with the same content. A memory design must record which it holds.
- **Dual-process cognition (Evans, 2008, opened 2026-11-24):** a fast automatic and a slow deliberative distinction is often used as an analogy for neural and symbolic roles. Per Fig 9 :30-31, describe the effect rather than the cause: the analogy supports a two-role shape, not a licence to import a cognitive architecture wholesale. Its evidence pool is different from the AI sources, but it is an analogy, not a witness for the verdict.
- **Analogue that fails:** some engineering discussions treat symbolic rules as a "false" version of learned weights. Fig 5's fifth kind and the Operators table refuse that: *"a refutation is a negation, which is why a vocabulary without it can only accumulate."* A refusal is not a better weight and a weight is not a refusal; they are different operators.

## CONCLUSION

The two dominant styles are not isomers as usually written; a genuine isomer claim exists only when both are written over the same atom set with a different bond. The five roles form a dependency chain ordered perception → vocabulary → objective → planning → learn and carry, with the middle vocabulary-to-goal link the one most likely to be unmeasured. The whole must be a cycle with typed priced bonds, not a linear stack, because a chain cannot close by construction. Description cost and action cost are two currencies and are never summed into one verdict. Falsifier: permutation invariance of per-slot residuals across all five roles, or behavioural identity across two different bonds over the same atoms.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the Operators table, and `THE_FORMULA.md`, all read this session. Evans (2008) abstract read via the search index. No measurement was taken; nothing here is `grounded`.

## FIGURE CENSUS

Fig 3 (dependency order, middle break, no-instrument rule), Fig 6 (instruments, closure, search), Fig 9 (union, describe the effect, filters versus witnesses), Fig 11 (habitat and contact), Fig 12 (isomer, functional group, cycle, catalyst, symmetry, recursion, two currencies), Fig 13 (no new primitive), Operators table (bond symmetry, negation unary), Symbols table (R as aim). Strained after re-census: none. The earlier attempt to call neural and symbolic direct isomers was withdrawn rather than strained into Fig 12.
