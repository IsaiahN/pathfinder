# Supporting derivation: structure, order, and analogues

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6). The narrow chemical facts cited here are the experiments' property, not this derivation's.

## RESIDUAL

The question names three properties and one exclusion. Three things are owed before the main answer can be assembled:

1. Can the three properties be written as figure-governed bonds rather than as a loose list of nouns?
2. Are the two candidate implementations, a self-replicating ribozyme system (D1) and an autocatalytic reaction network (D3), **isomers** under Fig 12's definition, or something weaker?
3. What is the **dependency order** between growth, maintenance and heredity, and what does the scale recursion do to the answer?

## DOMAIN CENSUS

Framework atoms held: Space, Time, Energy (states) and Spectrum, Gradient, Network (structures, Fig 13). Bonds held: the seven, including ⇒ production, → sequence, ⋛ comparison, and the unary negation ¬. Derived structures available from Fig 12: cycle, catalyst, functional group, isomer. Chemical atoms held from the world (imported with provenance, no new framework primitive): nucleotides, lipids, catalysts, food-set molecules, energy gradients. No new framework primitive is available without import, and none is needed.

Verbatim lines that gate this derivation:

- Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."**
- Fig 12 :119: **"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."**
- Fig 12 :123: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**
- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Fig 12 :104: **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world"**

## DERIVATION

### Q1 - Can the three properties be written as bonds?

- **Growth.** Fig 12 :77 defines production: **"A produces B; B did not exist before"**. A system that increases its copy number is a production bond iterated, and the iteration is a cycle (Fig 12 :121). Growth alone is a chain that does not close; it ends when substrates run out. The logistic curve in the Lincoln and Joyce paper is exactly this: exponential growth then leveling "as the supply of substrates became depleted".
- **Maintenance.** Fig 12 :119 defines the catalyst as *"a part that survives its own use"*. A reflexively autocatalytic, food-generated (RAF) set is a network in which every reaction is catalysed by a member and every reactant comes from the food set. That is a catalyst plus a cycle: the output re-enters as input (Fig 12 :121). Maintenance is therefore not a new atom; it is a priced arrangement of held bonds.
- **Heritable change.** Fig 12 :72 defines sequence: **"A then B; B needs A to have happened"**. A lineage is an ordered sequence of generations, not a symmetric set of molecules. Selection between variants adds Fig 12 :87, the comparison bond: **"a threshold relation between two quantities"**. Fitness differences are a comparison across variants at one level; the Operators table gives the same definition. 
- **The exclusion.** "Without modern enzymes" is a negation (¬), not a bond. Fig 12 amendment (extract :134-140): *"Negation is not one: it takes a term and yields a term, and joins nothing"*; Operators :73-74: *"− is A with B removed or absent, which is the absence of an operand. Negation is the refusal of a claim."* So the question's exclusion refuses a class of components rather than subtracting one operand from a recipe. It does not compose with the three properties; it constrains the closure they may be composed in. That is why `01` treats it as a boundary condition (F5), not a fourth property.

**Strain named, not hidden:** ⋛ is defined for *"two quantities"*. Fitness at the population level is a quantity in the evolutionary frame, but whether a fitness difference qualifies at the level where the bond is applied needs an instrument, not an argument. Recorded as a live type question, as the exemplar does for ⋛ at second order.

### Q2 - Catalyst versus enzyme: functional group, not contradiction

Fig 12 :123: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

"Catalyst" is the functional group: a part that survives its own use (Fig 12 :119). "Protein enzyme", "ribozyme", "mineral surface" are qualifiers naming members. The question's "without modern enzymes" therefore excludes one **member** of a functional group, not the group itself. The cross-replicating RNA enzymes satisfy the exclusion precisely because the catalyst is an RNA member of the group, generated inside the system, not a protein supplied from outside. Reading "without modern enzymes" as "without any catalyst" would be a category error: it would forbid the very cycle that makes growth and maintenance possible. This is the cleanest structural answer to the boundary condition and it needs no new primitive.

**Falsifier for Q2:** demonstrate a growing, maintaining, evolving chemical system whose closures contain no catalyst of any kind, neither protein, ribozyme, nor mineral surface. If such a system cannot exist, then the functional-group reading is confirmed; if one is found that does, the catalyst group is not necessary and Fig 12 :119 was aimed at a different quantity.

### Q3 - Are D1 and D3 isomers?

As the two systems are actually written in the literature:

- D1 (Lincoln and Joyce ribozymes): atoms {genetic polymer, ribozyme catalyst, four oligonucleotide substrates, Mg2+}. Bond: cross-catalysis plus sequence over generations.
- D3 (RAF networks, Xavier et al.): atoms {reaction network, food-set molecules, catalysts, acetyl-CoA and monomers}. Bond: reflexive catalysis plus food generation.

They share the **catalyst functional group** (Fig 12 :123) and little else. By Fig 12 :117, *"Same atoms, different bond, different substance"*, they are **not strict isomers as written**: the atom lists differ. They are two members of the same functional group, which is the weaker claim and the honest one at this stage.

The stronger version is worth stating because it is checkable. If both are written over the **full shared prebiotic atom set** {nucleotides, lipids, catalysts, food molecules, energy gradients}, differing only in which structure mediates which transformation, then they **are** isomers: same atoms, different arrangement, different substance, with the difference invisible in a flat ingredient list and decisive in behaviour (Fig 12 :117, :94 *"The arrangement is the substance."*). This is the claim to test. It would explain why the two research programmes keep producing results that look interchangeable at the level of "self-sustaining chemistry" while differing sharply at the level of mechanism.

**Falsifier, written before the run:** if either system can be shown to require an atom the other does not even when both are written over the full shared prebiotic set (for example, RAFs demanding a mineral surface that ribozymes do not, or ribozymes demanding a particular activated nucleotide absent from any food set), the isomer claim fails and the functional-group reading stands instead. Triangulated for the functional group (Fig 12 :119 and :123); single-source for the strict isomer definition (Fig 12 :117), with the chemistry check unmeasured.

### Q4 - What order, and what recursion?

Fig 3 :20: **"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."**

Dependency order in this question:

1. Energy gradient and food set (Gradient over Space and Time, Fig 13 :76: *"A gradient over space and one over time are different terms, because which state it is bonded to is part of what it is."*).
2. Network of reactions (Network structure) that can persist on that food set.
3. Cycle and catalyst closing into autocatalytic maintenance (D3 settles).
4. Genetic polymer copying with variation (D1 settles, consuming steps 1 to 3).
5. Compartment coupling genome to lineage (D2 settles).
6. Population under selection, where the ⋛ comparison reads fitness differences.

The "metabolism first or genetics first" dispute is a fight about steps 3 and 4. Because the chain is dependency-ordered and the conditions overlap, the dispute is a **union**, not a partition (Fig 9 :55). Optimising step 4 cannot rescue a missing step 3 (Fig 3 :19). The missing instrument is at the objective link, "what would count as progress toward life" (Fig 3 :25-27), which is why this folder returns a separator and a discriminator rather than a victory for either camp.

Scale recursion, Fig 12 :104: a settled molecule becomes an atom for whatever composes over it. The ribozyme system, once settled against the ground, becomes an atom for the protocell; the protocell, once settled, becomes an atom for the population where evolution reads it. Irreducible is a fact about a level, never about the world. This is why the three properties can be true at different scales without being one property: growth at the molecular scale, maintenance at the network scale, heritable change at the population scale.

**Falsifier for Q4:** show that heritable change can be settled at the molecular scale with no dependency on a food-generated network, so that step 4 does not consume step 3 and the dependency order collapses. The 2009 ribozyme experiments do not show this: they require a continual supply of activated oligonucleotide substrates, which is a food set in all but name.

## CONCLUSION

The three properties are not a loose list. Growth is production plus cycle, maintenance is catalyst plus cycle, heritable change is sequence plus comparison, and the enzyme exclusion is a unary negation that constrains the closure rather than composing inside it. "Catalyst" is a functional group whose modern-enzyme and ribozyme members are alternatives, so "without modern enzymes" is satisfiable without "without any catalyst". The ribozyme system and the RAF network are members of one functional group as written, and become strict isomers only under the stronger fixed-atom reading, with a stated falsifier. Their order is a dependency chain in which genetics consumes metabolism, which is why the first-vs-first debate is a union question, and the three properties sit at different scales joined by the settled-molecule recursion. No new primitive, no wall-moving import and no seventh term is needed for any of this.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; the 2009 and 2020 to 2024 chemistry sources in `10_source_ledger.csv`. No new measurement was taken in this derivation.

## FIGURE CENSUS

Fig 3 (dependency order, objective link), Fig 9 (union versus partition), Fig 12 (production, sequence, comparison, cycle, catalyst, functional group, isomer, settled-molecule recursion, amendment on negation), Fig 13 (gradient over space versus time, closed set), Operators table (¬ versus −, ⋛ type). Strained after re-census: ⋛'s operand type at the population scale, named in Q1 and not hidden.
