# Isomers, order and analogues in a minimal metabolic network

**Mode: `specified` on the structural claims, `general` on the analogy discipline.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

Two networks with the same molecules but different arrangements may behave differently, so counting molecules cannot settle "smallest." Three questions are owed: (1) are such networks isomers under Fig 12; (2) what order does a reaction network require; (3) which analogues may be imported, and with what gates.

## DOMAIN CENSUS

Atoms held: the six terms of Fig 13 (space, time, energy; spectrum, gradient, network), plus the chemistry atoms supplied by the food set of a given experiment. Operators held: the seven bonds of Fig 12 and negation. No new primitive is available without an import. Currency: bits of description and actions of testing, held apart (Fig 12 :125-126). Anchor: the ground for chemistry is experiment; for the framework, the figures as metalaws.

## DERIVATION

### Q1 : Are two networks with the same metabolites but different bonds isomers?

Fig 12 :94: **"The arrangement is the substance."**
Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

A flat ingredient list for a network, for example `{pyruvate, glyoxylate, oxaloacetate, alpha-ketoglutarate}`, does not record which compound catalyses which step, whether the graph closes, or where the external reductant enters. Under Fig 12 those two networks are not variants of one thing; they are different substances. Therefore a "smallest" ranking by molecule count is the flat-formula failure: it charges the ingredients and not the arrangement. Mode `specified`, single-source for the figure definition, with chemistry corroboration from Stubbs et al. 2020 (same ketoacid set, different products under different conditions).

**Falsifier, written before the run:** if two networks with identical metabolite sets and different bond arrangements behave identically in a sustained-flow experiment over the full range of plausible conditions, the isomer claim fails and the flat ingredient count stands instead.

### Q2 : What order does a reaction network need?

Operators table: `→` is *"A then B; B needs A to have happened"*; `⇒` is production, *"A produces B; B did not exist before."* A reaction set needs both: an admissible ordering of steps and the production of molecules that did not exist before. Fig 12 :48: **"A chain is the degenerate case: one bond type, no branching."** Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."** So:

- `→` gives the ordering but cannot close the network.
- `⇒` gives production but says nothing by itself about regeneration of the catalyst.
- A cycle is a further structural fact, not a longer chain (Fig 12 :117-121).

Fig 12 :111: **"A vocabulary without bonds can name a state and cannot name a route to one."** A list of metabolites names a state; a bonded reaction graph names a route. This is the dependency-chain break from Fig 3 applied to chemistry: having the ingredients is not having the grammar.

### Q3 : Functional group versus individual network

Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

The motif `state → structure → state` is a functional group shared by many networks: an energy state, a mediating structure, a metabolite state. The qualifier (which gradient, which catalyst, which closing step) selects the member. "Smallest" must therefore state which functional group and which qualifier is being minimised. Minimising over the functional group and minimising over a member are different questions, and Fig 9 :54 requires unbundling a union before searching again.

### Q4 : Which analogues may be imported?

Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** Fig 8 :50-52: convergent derivation and adopted import look identical in the contents; only the record separates them.

Three candidate analogues were considered:

1. **RAF sets (Huson, Xavier and Steel 2024).** Source gate: biomathematics, *J R Soc Interface*, 2024, opened and quoted in `10_source_ledger.csv`. Shadow test: it explains why a food set plus internal catalysis closes a network, which the shape term in `01` section 0 requires but does not derive. Verdict: admissible import of vocabulary. It adds access to a frame, not an atom to the world (Fig 6 :25). Status: `specified`, low overlap with the framework.
2. **Network motifs (Milo et al. 2002).** Source gate: *Science*, 2002. Shadow test: it explains why motif sets differ with the currency that flows, corroborating the separation of bits from actions. Verdict: admissible corroboration, not an import of a framework primitive.
3. **The lab reaction sequences (Stubbs et al. 2020; Preiner et al. 2020).** Source gate: *Nature Chemistry* 2020 and *Nature Ecology & Evolution* 2020. Shadow test: they explain why small reaction sets can be driven under plausible conditions. Verdict: admissible as wiring evidence, **not** as evidence of self-maintenance (Fig 11 :70: *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."*).

No analogue was admitted merely because it resembled the framework. *Arrival of the Fittest: The Tether Architecture* has a section titled "Three mappings offered and declined"; the same discipline applies here.

### Q5 : Recursion and level

Fig 12 :104: **"A settled molecule becomes an atom for whatever composes over it."** A reaction network that has settled against the ground can become an atom for a higher-level composition, for example a compartment or a population of compartments. That is recursion, not import and not a new smallest primitive. The level decides what is irreducible; "no bottom" governs the level of composition, not the number of reactions in a network (the strain refused in `01` F9).

## CONCLUSION

The two cores are not comparable by ingredient count. Under Fig 12 they are isomers when they share metabolites but differ in bonds, and the flat formula hides the difference. A reaction network needs sequence (`→`), production (`⇒`) and a closing cycle, which is a distinct structure rather than a longer chain. The `state → structure → state` motif is a functional group; the qualifier selects the member. RAF vocabulary and network-motif results are admissible imports with a source gate and a shadow test, while lab reaction sequences are wiring evidence in substituted habitats. The isomer and order claims are `specified` and carry the falsifier in Q1. No named network is asserted to be the smallest.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened this session; the Operators table in the same extract; the eight essays; and the world sources recorded in `10_source_ledger.csv`. No measurement was used.

## FIGURE CENSUS

Fig 3 (dependency order), Fig 6 (import and source gate), Fig 8 (provenance), Fig 9 (unbundle a union), Fig 11 (substituted habitat), Fig 12 (arrangement, isomer, functional group, chain, cycle, bonds, two currencies, recursion), Fig 13 (six terms), Operators table (sequence and production). Strains after re-census: none hidden. The one open type question is whether a computational minimum in a catalytic reaction system and a description-length minimum in the framework are the same ordering; Fig 12 :125-126 says they are different currencies, and Huson et al. 2024 supply a cost fact from a third field.
