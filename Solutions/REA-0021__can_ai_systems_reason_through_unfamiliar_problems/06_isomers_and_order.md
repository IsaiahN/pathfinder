# Isomers and order: are the two "sources" different substances or different spellings?

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §7).

## RESIDUAL

The question offers two sources for a success on an unfamiliar problem: reasoning, and extension of prior patterns. `01_figure_grounded_audit.md` F1 splits them into S1 (search inside closure), S2 (new molecule from held atoms) and S3 (import of a new atom). Two questions are owed:

1. Are S1 and S2 **isomers** under Fig 12's definition, that is, the same atoms arranged differently, or are they merely different spellings of one term?
2. What **order** do the cases have, under Fig 3's dependency chain and Fig 12's bond types?

## DOMAIN CENSUS

Atoms held for D1: the six substrate terms (Space, Time, Energy states; Spectrum, Gradient, Network structures), plus the domain atoms a system actually holds in its library (rules, representations, skills). Bonds held: the seven, with `+ ∥ ≡` symmetric and `→ ⇒ − ⋛` ordered, plus the unary `¬`. No new primitive is available without import (Fig 13 :74: *"Everything else is a composition across the two kinds, never within one."*).

## DERIVATION

### Q1 — Are S1 and S2 different terms?

Fig 12 :94: *"The arrangement is the substance."*
Fig 12 :117: *"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*

- S1 and S2 draw on the same atoms and the same closure. They differ in whether the particular molecule was already instantiated in the examples.
- Under Fig 12, a difference in instantiation history alone is not a difference in substance: the molecule is what it is, regardless of which occasion produced it. Fig 12 :107-110 says a settled arrangement re-derives as a lookup where the record crosses the boundary, so *when* it was first built is not part of the term.
- Therefore **S1 and S2 are not isomers by composition alone**. They are the same term reached by two routes, which Fig 13 :121 calls *"Different routes can arrive at the same substance."*
- The behavioural difference is real but it is a **functional-group** difference at the level of routes, not at the level of the molecule: Fig 12 :123, *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."* S1 and S2 share the group (composition inside closure); they differ in the qualifier (first instantiation versus re-lookup).

**Correction to a first reading.** I initially wrote that S1 and S2 are isomers because "a novel combination and a replayed one have the same atoms, different history, so different substances." That was wrong. History is provenance, not a bond. Fig 12 :130: *"A term carries the atoms it was built from and the bonds that joined them. That record is not documentation of the term. It is the term."* A different history with the same atoms and bonds is the same term. The reading is preserved here as a retraction.

### Q2 — Are S2 and S3 isomers?

- S2 adds no atom. S3 adds an atom from a frame whose closure differs (Fig 6 :21, Fig 6 :23).
- Fig 12 :115: *"A vocabulary without bonds can name a state and cannot name a route to one."* A vocabulary that can compose but cannot import can name many routes and still never add a kind.
- So S2 and S3 do **not** share the atom set. They fail Fig 12's "same atoms" condition. S3 is not an isomer of S2; it is a different term over a larger library. Fig 13 :115: *"The set is closed. The arrangements are not. That gap is why import exists."*
- **Falsifier, written before the run:** if a case classified as S3 turns out to use only held atoms once provenance is known, the S2/S3 distinction collapses for that case and the import claim is withdrawn for it.

### Q3 — What is the order of the three cases?

Fig 3 :20: *"The chain is ordered by dependency, not by importance."* Fig 12 :71: sequence, *"A then B; B needs A to have happened."*

Ordered by dependency, not by prestige or by how impressive the claim sounds:

1. **Perception (Fig 3 :5):** can the system tell the unfamiliar slot from the stored ones? Without this, there is no R to index.
2. **Vocabulary (Fig 3 :7):** does it have terms for what the problem affords? Fig 12 :115 warns that having ingredients is not having a route.
3. **Objective (Fig 3 :10):** can it say what progress on this problem would be in its own terms? This is the break identified in F7.
4. **S1 search:** sweep the current closure. Fig 6 :49: *"more search at the same reach: is it in here and unfound? The closure does not change."* Asked first because it is cheapest.
5. **S2 composition:** a new molecule from held atoms, gated by SUPPORT, REACHABILITY and NOVELTY (Formula step 3).
6. **S3 import:** only if no φ in closure(R) closes R. Fig 8 :53: *"Residual first, frame second."* Fig 6 :24: *"Import from a live peer is debited against that frame's independence. A wrong atom costs more than starting from primitives."*
7. **Settlement (Formula step 5):** *"the ground settles it. Verified only by what pays. A gate is not the ground."*

S3 is last by dependency, not highest by value. Importing early, before S1 and S2 are tried, adds an atom that was not needed. Underivable-in-principle and unreachable-at-this-budget are different facts with different instructions (Formula step 7).

### Q4 — Which bond is "reasoning"?

No single bond. Fig 12 :117-124 names four structures a compositional system exhibits: isomer, catalyst, cycle, functional group. The question's word "reasoning" spans at least three different operators:

| use of "reasoning" | operator | figure |
|---|---|---|
| a route to an objective under incomplete information | sequence `→` plus comparison `⋛` | Fig 12 :71, :87 |
| a correction that survives and is reused | catalyst: *"A part that survives its own use."* Fig 12 :119 | Fig 12 :119 |
| refusing a held term that keeps failing | negation `¬`, *"A refutation is a negation"* | Operators table :58 |
| a new atom crossing from another frame | IMPORT, not a bond at all | Fig 6 :14, Fig 12 :134-136 |

**Strain, named:** the Operators table says negation *"is the eighth operator"* but also that *"Seven of the eight are bonds"*, while Fig 12 :134 says *"a bond is a binary operator, and this figure defines the bonds. It does not define the unary ones."* The two texts describe the same operator set at different levels of precision. Re-census: seven bonds plus one unary operator, eight operators total. No verdict depends on calling ¬ a bond, so the strain does not propagate. It is recorded, not hidden.

### Q5 — Round-trip gap R_T

Symbols table: `R_T = gap(x, (T_E ∘ T_A)(x))`, the gap between what was sent up and what came back down. Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

1. **Sent up (x):** the three-case shape (S1, S2, S3), the union rule, the source-underdetermination claim and the habitat claim.
2. **Abstraction (T_A):** "the binary is a union; scores cannot see sources; capability needs contact."
3. **Concretisation (T_E):** a test on a named system, say a reasoning model on a novel benchmark.

What the shorthand cannot carry back:

- the per-slot indexing (a model can be S2 on one task and S1 on another; the shorthand sounds system-level);
- the provenance requirement (a score plus a trace is still a projection, not a source);
- the dependency order (S3 is not a better S2, it is a later remedy owed only after S1 and S2 fail);
- the distinction between a missing atom and an unreachable-at-budget term.

**R_T is nonzero.** It was not measured numerically because no ground reading was taken; it is recorded qualitatively as the enumerated set of dropped constraints. Treating "the formula is the condensed version of the metalaws" as identity would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names.

## CONCLUSION

S1 and S2 are not isomers: they are the same molecule reached by different routes, so the difference is provenance and functional-group qualifier, not substance. S2 and S3 are not isomers either: S3 changes the atom set, which Fig 12's isomer definition forbids. The three cases are ordered by dependency (search, compose, import, settle), and "reasoning" names at least four different operators, only one of which is a new composition and none of which is a benchmark score. The isomer temptation was a first reading and is retracted above. The remaining live item is the operand question for `⋛` when the operands are successes rather than quantities, which needs an instrument, not an argument.

## ANCHOR

Verbatim figure text extracted at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session. No measurement was used. World sources used as corroboration: Lake and Baroni 2018 (SCAN *dax* split), Chollet 2019 (priors and skill acquisition), and Wikipedia *Fluid and crystallized intelligence* (two overlapping ability conditions). All are listed in `10_source_ledger.csv`.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 3 (dependency order), Fig 4 (round trip), Fig 6 (no atom from MINT; import from differing closure; search at same reach), Fig 8 (provenance; residual first), Fig 12 (isomer, functional group, arrangement is the substance, structures, unary amendment), Fig 13 (different routes to one substance; closed set and open arrangements), Operators table (negation). Strains after re-census: one in the bond/unary description of ¬, named and non-propagating; one open on the operand type of ⋛ at the level of successes.
