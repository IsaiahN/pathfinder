# Program versus lookup table: isomers, bonds and order

**Mode: `specified` on the structural claims, `general` on the bond rule, not `grounded`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6). Every figure line is quoted verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`.

## RESIDUAL

A general-purpose computer and a system that imitates under a chosen interpretation can produce the same input-output table. If the table is all we record, the two are indistinguishable. The residual is: what arrangement is missing from the table, and is that arrangement a different substance or just a different spelling? Three questions are owed.

1. Are a program and a lookup table over the same alphabet isomers under Fig 12's definition?
2. What order does the separator itself have (Fig 3 dependency chain)?
3. Is the observer's interpretation the same kind of relation as the machine's transition, or a different bond?

## DOMAIN CENSUS

Atoms held: input symbols, output symbols, state symbols, transitions, a clock, a memory. Bonds held: the seven, with + and ≡ symmetric, →, ⇒, − and ⋛ ordered, plus the unary negation. No new primitive is available without import. Scale: first order inside the machine; second order when a program becomes data to a universal machine. Anchor: the output under counterfactual input, checked per slot.

## DERIVATION

### Q1 — Program and lookup table as isomers

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."

Write both artifacts over the same finite input alphabet I and output alphabet O.

- **Lookup table L.** For each listed input, an entry pairs it with an output. The arrangement is a flat collection of pairings: a conjunction of recorded cases. Under the symmetric bond +, k entries have k! spellings and one table, so row order carries no information. The table "names states" but not a route.
- **Program P.** A finite sequence of state transitions over the same alphabet, with a clock and a read-write mechanism. The arrangement is an ordered chain under →, so reordering the transitions gives a different term. The program "names a route" and, when the program is stored as data for a universal machine, produces a second-order composition.

Same atoms (inputs, outputs, states, a clock, memory), different bond (+ under one reading, → under the other), different substance. By Fig 12 :117 they are **isomers**: same compositions, different arrangements, different behavior under unseen input. Fig 12 :96: "Two entries can share every ingredient and be inverses of one another." That is the case here: L is correct only on its listed rows, P can be correct on rows never listed.

**Falsifier, written before the run:** if a program and a lookup table over the same alphabet are related by a symmetry that preserves behavior on all inputs, so that the bond difference carries no behavioral consequence, the isomer claim fails and the two are the same term under two spellings. A second failure: if the table can be shown to contain the transition rule as a proper substructure, then it is not the flat case and the contrast collapses.

- Mode: `specified`. Triangulated for the bond rule (Fig 12 :5, :96, :117); single-source for the identification of + and → as the two bonds, with Chalmers 1996 on trace versus structure as a low-overlap world corroborator.

### Q2 — The order of the separator

Fig 3 :20: "The chain is ordered by dependency, not by importance." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." Fig 3 :23: "It is a reading of nothing."

The separator in `01` has a dependency order, not an importance order.

1. **Perception.** Can the system's states be read and told apart from what was there before? An interpreted rock has an imposed state partition; a universal machine has a machine table that fixes its states from inside.
2. **Vocabulary.** Does it have terms for what its states afford and for routes (Fig 12 :111: "A vocabulary without bonds can name a state and cannot name a route to one.")? The lookup table fails here: it has entries, not a route.
3. **Objective.** Can it say what would count as progress in its own terms? A fixed-function system with no objective link cannot be diagnosed, only its predecessor can (Fig 3 :22).
4. **Planning and ground settlement.** Only now can the counterfactual-input test run.

Effort applied at step 4 cannot rescue a break at step 2. That is why a large trace of a lookup table's successes cannot promote it to a general-purpose computer: "Optimising a link that already works cannot rescue one that does not" (Fig 3 :19).

**Falsifier:** show that ground settlement can be achieved for a system that has no internal route term, without importing one from the observer. That would invert steps 2 and 4 and break the dependency order.

### Q3 — Universality as closed set, unbounded arrangements

Fig 13 :115: "The set is closed. The arrangements are not. That gap is why import exists." Fig 13 :118: "So a frame can search without end and still not arrive: infinite effort inside a finite reach."

A universal machine holds a finite instruction set (closed) and an unbounded space of programs (arrangements). The stored-program idea, placing the action table in the same memory as the data, is what makes the arrangement itself an operand. Turing's universal machine interprets the description of any other machine; that is a second-order composition, and it requires the first-order machine to be settled before it can become an atom (Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom").

An interpretation-only imitation is in the opposite position. It has one arrangement and an unbounded supply of descriptions supplied by the observer. Its infinite variety is on the observer's side of the membrane. Fig 13 :116: "Six members, and no amount of arranging produces a seventh: a new member would have to be a new kind, and composition only ever rearranges the kinds already held."

**Falsifier:** a fixed-arrangement system that reaches the universal closure without reading a program as data and without an imported mapping. Mode: `specified`, triangulated (Fig 13 plus Fig 12 plus SEP Turing Machines and Wikipedia UTM).

### Q4 — Interpretation is an identity bond; a transition is a sequence

Operators :24: "identity" and :25: "two names, one referent." Fig 12 :71: "A then B; B needs A to have happened." Fig 12 :72 is the test: "swap them. Does it become a different thing? Yes."

The observer's mapping says: this physical state *is* this formal state, two names, one referent. It is symmetric and it carries no route. The machine's transition is ordered: state then next state, and swapping them gives a different term. Conflating the two is a bond type error, not a disagreement about degree. This is the structural reason interpretation-only imitation cannot borrow the standing of a generated computation: the relation doing the work (≡) is not the relation that carries a route (→). Fig 12 :99: "A bond costs what it could have been, and nothing more." An identity bond is cheap precisely because it carries no transition.

**Falsifier:** exhibit a mapping that is symmetric by the Operators test yet carries a counterfactual transition, so that identity and sequence are the same bond here. Mode: `general`, single-source on the operators table, triangulated with Fig 12.

### Q5 — Clock, dial and the trivial implementation

Chalmers 1996 shows that once a physical system has a clock (a reliable sequence) and a dial (a state that stays put), every inputless finite automaton is implemented on the weak mapping account. In figure terms:

- a clock is a **cycle** (Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction.");
- a dial is a **functional group** (Fig 12 :123: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member.");
- the resulting "computation" is a recording of one trace, and Fig 5 :44: "A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."

The correct response to "everything computes" is not another theory but a **refusal**. Operators :58: "a refutation is a negation, which is why a vocabulary without it can only accumulate." Fig 6 :42: "What is recorded only grows. What is reachable is derived, and it can fall. A refutation adds a term that refuses; it removes nothing, and the reach falls because something was added rather than because anything was deleted." This is F9 of `01`: the interpretation-only case is refused the standing to count as a general-purpose computation.

**Falsifier:** show that the clock-plus-dial construction streams a new correct output for every new input without an imported mapping. Mode: `specified`, triangulated (Fig 12 plus Fig 5 plus Operators plus Chalmers 1996).

## CONCLUSION

A program and a lookup table over the same alphabet are isomers: same atoms, different bond, different substance. A general-purpose computer is the one whose arrangement is a route (→) stored as data over a closed instruction set, whose states are fixed by a machine table rather than by an observer, and whose outputs settle against a non-updating ground under counterfactual input. The interpretation-only imitation has a symmetric identity mapping (≡), a flat conjunction of recorded cases (+), and a habitat substituted by the interpreter. The difference is the bond, and the bond is the substance. No figure line named a specific physical system as the separator, and none was offered.

## ANCHOR

Verbatim figure text read this session at `FRAMEWORK/reference/03-FIGURES_TEXT.md`; Fig 12 original SVG structure checked where layout matters (seven bonds, three symmetric, four ordered); the eight essays opened this session; Chalmers 1996 and the SEP entry on Turing machines opened this session. No measurement of a physical system was used.

## FIGURE CENSUS

Fig 3 (dependency order, broken middle link), Fig 5 (MDL, one-occasion failure), Fig 6 (refusal lowers reach), Fig 9 (union, describe before looking), Fig 11 (habitat substitution), Fig 12 (bond, isomer, functional group, cycle, sequence, identity, priced arrangement), Fig 13 (closed set, unbounded arrangements, settled molecule), Operators table (identity, sequence, negation), Symbols table (R is a slice). Strains: S1 (physical six-term substrate versus instruction sets) resolved by re-census: Fig 13 is used only for the substrate-agnostic closed-set claim. One live subtlety: whether a stored program counts as a quantity at the second level for ⋛, not needed for this question's separator.
