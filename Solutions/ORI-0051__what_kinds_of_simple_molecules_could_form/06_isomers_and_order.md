# Candidate kinds, order and analogues — supporting derivation

**Mode: `specified` on the structural relations, `grounded` only on the experiments reported from the papers read; not `grounded` on any historical claim.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

Deamer 2017 lists several membrane-forming candidate families; Ekosso et al. 2026 compare three anionic headgroups over changing chain length, pH and medium. Two questions are owed: (1) are these candidates **isomers** under Fig 12's definition, or something weaker, and (2) in what **order** do the assembly conditions bind? Both matter because a wrong relation here would make a successful experiment stand in for a different claim.

## DOMAIN CENSUS

Atoms held in the chemistry frame (world bindings, not framework primitives): polar head groups (carboxylate, hydroxyl, phosphate, sulfate, amine), hydrocarbon tails (C10 to C18, saturated or with cis unsaturation), glycerol backbones, and water plus ions as the medium. Bonds held: ester, ether, amide-like linking, and non-covalent hydrophobic and van der Waals association. No figure line supplies a new chemical primitive.

## DERIVATION

### Q1 — Are the candidate kinds isomers?

Fig 12 :117: *"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*

Check each pair:

- Decyl sulfate (DS, C10 sulfate) versus dodecyl sulfate (DDS, C12 sulfate): different atom counts, so **not isomers** under the figure's definition. They differ in composition, not just arrangement. The correct weaker relation is a **functional group** (Fig 12 :123): *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."* The sulfate head says *kind*; the chain length says *which member*.
- Dodecyl sulfate versus dodecyl phosphate (DDP): same C12 tail, different headgroup, hence different composition. Again **not isomers**; same functional-group family of anionic single-chain amphiphiles, different member.
- Lauric acid versus glycerol monolaurate: different composition. The robust system is their **1:1 mixture**, which is a composition of two kinds, not an isomer of either (Milshteyn et al. 2018).
- Oleic acid (C18:1, one cis double bond) versus stearic acid (C18:0): same carbon count, different hydrogen count and different bond. Not strict isomers in the figure's sense either, but the nearest chemical case of *same skeleton, different bond, different substance*: stearic acid melts near 69 °C and is a solid at ordinary temperatures, oleic acid near 13 °C and forms vesicles at about 3 mM (Deamer 2017).

So the figure's isomer definition is mostly **declined** for the candidate list, and the functional-group reading is adopted. This is a correction to a first-pass reading that called the families "isomers" loosely. The weaker reading is not a consolation prize: it is what makes the prediction testable. If family membership fixes the kind of behaviour and the qualifier fixes the threshold, then swapping the qualifier should shift thresholds without changing the kind. Ekosso et al. 2026 report exactly that: DS, DDS and DDP agree on vesicle formation in roughly 61 to 66 percent of tested conditions and disagree in the remainder, with phosphate forming vesicles over a broader stability window and giving the lowest permeation rate.

**Falsifier, written before the run:** if two families that differ in composition behave identically across all tested pH, ionic and temperature conditions, the functional-group prediction fails and the candidate list collapses into a single undifferentiated class. If two candidates with identical composition and different bonding are found, the isomer claim is restored for that pair.

### Q2 — Is the mixture a molecule, and does that matter?

Fig 12 :48: *"A molecule is a bonded arrangement. A chain is the degenerate case: one bond type, no branching."* Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*

A 1:1 acid/monoglyceride mixture is **not** one molecule by the figure's definition. It is a composition of two molecules whose ratio carries information. Calling it "a simple molecule", as the question's wording invites, would be a category error at the framework level. The honest unit is a **membrane composition**: a bonded arrangement at the molecular scale plus a mixing ratio at the assembly scale.

Consequence: the question "what kinds of simple molecules?" is itself slightly mis-specified. The checkable question is "which molecular compositions could form the first cell-like boundaries?" Milshteyn et al. 2018 report that the mixture is *"less temperature-sensitive and assembled into relatively stable membranes at both acidic and alkaline pH ranges"* than the pure acid. The ratio is load-bearing.

**Falsifier:** if a pure species matches the mixture's pH and temperature stability across the tested range, the composition-over-molecule reading loses its main empirical support.

### Q3 — What is the order of the assembly conditions?

Fig 3 :20: *"The chain is ordered by dependency, not by importance."* Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."*

Dependency order for a candidate boundary:

1. **Supply.** The amphiphile must be available without modern metabolism. Deamer 2017 notes that phospholipids and sterols are products of *"complex and highly evolved metabolic pathways"* and are implausible prebiotically; fatty acids, alcohols and monoglycerides are more plausible. Meteoritic delivery and Fischer-Tropsch-type synthesis are the two supplied routes discussed.
2. **Concentration.** The amphiphile must reach its critical vesicle concentration. Deamer 2017: single-chain fatty acids need millimolar concentrations, where diacyl phospholipids assemble in the micromolar range; wet-dry cycles on mineral surfaces concentrate dilute organics.
3. **Medium.** pH near the carboxylate pK and low divalent-cation concentration. Deamer 2017: pure fatty-acid membranes are stable near the pK, where mixed charged and protonated headgroups hydrogen-bond; seawater divalent cations precipitate them as soaps.
4. **Temperature.** Above the gel-fluid transition, below degradation. Milshteyn et al. 2018 report that vesicles collapsed into crystalline structures when slides cooled below the melting points.
5. **Composition.** Mixture ratio tunes stability and permeability once 1 to 4 are satisfied.
6. **Encapsulation and propagation.** Only then does it matter whether polymers are captured and whether growth and division occur.

A failure at step 3 is not repaired by a cleverer step 6. This is Fig 3's break: effort spent above a broken link arrives at a step that cannot use it.

**Falsifier:** a candidate that forms vesicles in a setting where steps 1 to 4 fail would break the dependency order; that would be a genuine surprise and would require the census to be redone.

### Q4 — Analogues and their limits

Three analogues are used in this folder, each with its limit stated:

1. **Figure 4's membrane.** Same shape (a filter with a direction), different stratum (agent/population boundary, not a lipid bilayer). `general`. The chemistry is carried by Deamer 2017's permeability range.
2. **Figure 12's catalyst and cycle.** A recycling amphiphile that persists across assembly cycles resembles *"a part that survives its own use"*; a vesicle that grows and divides is a cycle whose output re-enters as input. But the figure's definitions are structural, not molecular; no lipid is asserted to be a catalyst in the biochemical sense.
3. **Figure 11's habitat.** The enumerated conditions (light, water, temperature, season, terrain) map onto pH, ionic strength, temperature and wet-dry cycling. This is a reading across domains under the framework's domain-agnostic rule, not a claim that the figures discuss hot springs.

Each analogue is a method for seeing shape, not a source of chemical names. Fig 9 :30-31: *"your words are borrowed too, so describe the effect rather than the cause."*

## CONCLUSION

The candidate families are not isomers under Fig 12's definition; they are members of a functional group whose qualifier (chain length, headgroup, ratio) shifts the environmental thresholds. The robust reported unit is a composition, often a mixture, rather than a single simple molecule. The assembly conditions are ordered by dependency, and the historical question of which composition came first is a ground question left open. This framing keeps what is checkable in the question without pretending the figures name a winner.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md`; the essays read 2026-11-23; Deamer 2017, Milshteyn et al. 2018, Budin and Szostak 2011 and Ekosso et al. 2026 read in full through PubMed Central. No measurement was taken by this derivation.

## FIGURE CENSUS

Fig 3 (dependency order), Fig 4 (membrane analogue), Fig 9 (describe the effect, not the cause), Fig 11 (habitat), Fig 12 (isomer, functional group, molecule as bonded arrangement, catalyst, cycle), Fig 13 (cross-kind composition as a structural check only). Strains after re-census: one analogue (Fig 4) labelled; the isomer claim declined and replaced with the functional-group reading; no figure forced to a chemical claim.
