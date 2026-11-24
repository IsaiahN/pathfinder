# Are vulnerable species isomers? Structure, order, and analogues

**Mode: `specified` on the ecological binding, `general` on the bond definitions, not `grounded`.** Simulated derivation checked for internal consistency against the figures (`05_what_shape_means.md` §6). No extinction measurement was taken.

## RESIDUAL

`01_figure_grounded_audit.md` returns a four-domain separator and refuses a standing trait list (Fig 11 :51). Two supporting questions remain:

1. **Structure.** If two species hold the same trait inventory, do they differ by arrangement (bond) rather than by ingredients? That is, are they Fig 12's **isomers**?
2. **Order.** Does the order in which the four conditions act matter, and can that order be read off the dependency chain (Fig 3) rather than guessed?

## DOMAIN CENSUS

Atoms available in the ecology frame (binding onto held vocabulary, not new primitives): small population N, large body size B, narrow range R, short dispersal D, long generation time G, habitat specialization H, low genetic variance V, high trophic level T. Bonds available: the seven typed bonds and negation from the Operators table. No new primitive is admitted without import.

Three candidate compounds are already named in the world literature:

- the **rarity compound**: small range + low abundance + narrow habitat tolerance, a union with its own loop inside D2;
- the **life-history compound**: large body + long generation + low reproductive rate + low genetic variance, crossing D1 and D4;
- the **spatial compound**: narrow range + short dispersal + high specialization, inside D2.

## DERIVATION

### Q1 — Are two species with the same trait inventory isomers?

**Fig 12 :5:** *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*

**Fig 12 :46:** *"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."*

**Fig 12 :92:** *"Symmetry is what decides whether an arrangement is a new thing."*

**Fig 12 :94:** *"The arrangement is the substance."*

**Fig 12 :117:** *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*

Consider two species with the same inventory {N small, D short, H high}. In species A, short dispersal bonds to high specialization through a **production** relation: a narrow diet produces a need for local food, so limited dispersal is compensated by local knowledge. In species B, the same two atoms bond through a **subtraction** relation: habitat fragmentation removes the local food, so limited dispersal leaves no substitute. The ingredient lists are identical; the extinction outcomes differ. Under Fig 12 :117 they are isomers, and the difference is carried entirely by the bond.

Under a merely additive reading (small N + short D + high H as three independent risks), they would be the same substance with more or less of it. That reading is the flat-form collapse Fig 12 names, and it is exactly what a pooled regression supplies. So the isomer claim is the structural version of the union claim in `01` §1: same atoms, different arrangement, different residue.

**Refuter, written before the run:** if both species can be written as the same unordered set of independent risk factors with no bond information required to predict their different outcomes, the isomer claim fails and the additive reading stands. A clean test is a mediated design: two species matched on all three traits but differing in one enumerated relation (a mutualist present or absent). If the relation changes the outcome, the bond carries information the atoms do not.

**Live strain:** whether ecological traits actually compose as typed bonds, or merely co-vary as an ingredient list, is not settled by any figure line. Fig 12 defines bonds for a compositional system; it does not assert that every domain composes. This is recorded as a live type condition (S4 in `01` §5), not upgraded to triangulated.

### Q2 — Functional group, not a roster

**Fig 12 :123:** *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*

The life-history compound is better read as a functional group than as a fixed list. The group is *"a small library facing a moving optimum"*; the qualifiers are large body, long generation, low genetic variance, or low reproductive rate. Any qualifier that produces the group shape fixes the outcome; the roster of qualifiers is open. This is why the world literature can find consistent associations (Rivas-Salvador and Reif 2023: *"more vulnerable species are sedentary and have larger body size, longer generation time, and higher degree of habitat specialization"*) without thereby giving a universal list: the group is stable across regions, the members vary.

**Refuter:** if a species exhibits the functional group outcome while none of the known qualifiers is present and no new atom is imported, the functional-group reading fails.

### Q3 — Dependency order: which link breaks first?

**Fig 3 :20:** *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."*

**Fig 3 :27:** *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

**Fig 3 :29:** *"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."*

Map the four domains onto Fig 3's five links:

| Fig 3 link | ecological reading | typical instrument status |
|---|---|---|
| 1 perception | detect that the environment changed | often present (time series, remote sensing) |
| 2 vocabulary | terms for what the changed situation affords | partial; a specialist's closure is narrow |
| 3 objective | what counts as persistence, the threshold | weak; often a Red List category rather than a measurement |
| 4 planning | plasticity, dispersal, genetic rescue route | present but uneven across taxa |
| 5 learn and carry | carry a successful response to the next generation | weakest for long-generation species |

The break most often sits at link 3, the objective, because a category is a convention and not a measurement (Fig 10 :49: *"Declaring a meaning does not ground it."*). Effort spent on link 4 (more dispersal corridors, more plasticity studies) arrives at a step whose measure of success has not been grounded. This is a dependency claim, not an importance claim: it does not say link 4 is unimportant, it says fixing link 4 cannot rescue a broken link 3.

**Refuter:** a species whose persistence verdict is stable and reproducible under two different operational definitions of "persists" (a census threshold and a demographic-rate threshold), with both readings non-updating. That would show link 3 had an instrument after all.

### Q4 — The two scales: why the order is not a sequence of atoms

**Fig 4 :20:** *"it or a thousand. Only the actors, the currency and the anchor change."*

**Fig 4 :22:** *"Only methods cross up. Only head starts come down."*

**Fig 4 :25:** *"A recording carried upward looks like knowledge and is a description of one occasion."*

A trait coefficient measured in one species and applied to another is a recording unless it crosses as a method. A method crosses if it carries the enumeration procedure (actors, conditions, relations) and the refusal condition, not just the fitted number. This is the asymmetry between the two scales: the species-level trait list cannot be carried up as knowledge, but the enumeration method can be carried down as a head start. A pooled coefficient replayed downward produces a system that repeats one occasion and cannot produce a new per-species verdict.

**Refuter:** a single fitted coefficient that transfers across habitat substitutions without re-enumeration and still predicts per-slot persistence. If that exists, the recording is also a generator and Fig 4 :25 does not govern this domain.

### Q5 — Negation, not subtraction

**Operators table :73-74:** *"− is A with B removed or absent, which is the absence of an operand. Negation is the refusal of a claim."*

Two failures in this domain are easy to conflate. Habitat loss is **subtraction**: a condition is removed or absent from an arrangement. A refuted trait association is **negation**: a claim is refused, and a vocabulary without negation can only accumulate. The standing-list error in `01` F1 is a negation owed: the claim *"trait T is universally bad"* must be refused, not merely amended by adding more traits. `01` §3 refuter 1 is the unary operator that makes the correction carryable.

**Refuter:** a vocabulary that can express absence but not refusal, and still manages to withdraw a universal trait claim, would show negation is not needed here. By the Operators table that vocabulary can only accumulate, so this refuter is expected to fail.

## CONCLUSION

Two species with the same trait inventory can be **isomers** over a fixed atom set (Q1), but that claim is `specified`, carries a live type condition, and has a stated falsifier. The life-history compound is a **functional group** rather than a roster (Q2). The dependency chain puts the objective measurement at link 3, which is where the instrument is usually missing (Q3). Between scales, only the enumeration method crosses, never a recording of one fitted coefficient (Q4). The refusal of a universal trait claim is a **negation**, not a subtraction (Q5).

The isomer and functional-group readings rescue what is structurally sound in the macroecological correlations without converting an averaged coefficient into a per-species verdict. `large body size = vulnerability` remains a provenanced binding, not a wall-moving import. `two species over a fixed trait set, arranged differently, are isomers` is a checkable structural claim with a falsifier.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` (Figures 3, 4, 12 and the Operators table), the local `THE_FORMULA.md`, and the world sources recorded in `10_source_ledger.csv`. No measurement was used; the world sources are corroboration only and never overrule a figure line.

## FIGURE CENSUS

Fig 3 :20/:27/:29 (dependency order, missing instrument, where the chain stops), Fig 4 :20/:22/:25 (kernel across scale, method versus recording), Fig 10 :49 (declared meaning not grounded), Fig 12 :5/:46/:92/:94/:117/:123 (bond, symmetry, isomer, functional group), Operators :73-74 (negation versus subtraction). Strains after re-census: one live (the fixed-atom condition on the isomer claim, Q1), named and not hidden.
