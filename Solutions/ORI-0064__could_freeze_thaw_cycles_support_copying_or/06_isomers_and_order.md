# Assembly versus copying: structure, order and analogues

**Mode: `specified` on the structural sub-claims, `general` on the bond taxonomy, not `grounded`.** This is a simulated derivation checked against the figures (`05_what_shape_means.md` section 7), not a ground reading.

## RESIDUAL

The source question uses the words "copying **or** assembly". The two are treated as alternatives. Fig 12's bond taxonomy says they are different structures, and a cycle can contain both. Three questions are owed:

1. Are assembly and copying the same kind of thing, or different bonds over the same atoms?
2. What does an ordered cycle add that a single reaction does not?
3. Are a pre-cycle pool and a post-cycle pool isomers under Fig 12, or merely different mixtures?

## DOMAIN CENSUS (supporting derivation only)

Atoms held in the chemistry frame: mono- and oligonucleotides, activating groups, metal ions, water/ice phases, template strands. No new atom is contributed by the framework. Bonds held: the seven, including `→` sequence, `⇒` production, `⋛` comparison, `−` subtraction, and the unary `¬`. Structures held: cycle, catalyst, functional group, isomer (Fig 12 :117-124). Currency: bit cost of stating the arrangement versus action cost of testing it (Fig 12 :126).

## DERIVATION

### Q1: Assembly and copying are different bonds, not two names for one effect

Operators table :37: *"A produces B; B did not exist before"* (production, `⇒`). Fig 12 :72: *"A then B; B needs A to have happened"* (sequence, `→`).

- **Assembly** is production: a bond that did not exist before is created between monomers or short oligomers. The relevant figure structures are Fig 12 :119 catalyst (*"A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."*) and Fig 12 :123 functional group (*"A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*). A mineral surface or an imidazolium bridge is a substructure whose presence fixes the outcome; the qualifier says which nucleotide is involved.
- **Copying** is sequence plus production: a template must precede the copied strand, and the new strand did not exist before. Ding et al. (2023) show this split cleanly: in their system much of the primer extension occurs during the eutectic ice phase, while most of the ligation occurs after the temperature rises. The two steps have different temperature optima and different rate constants. That is a `→` ordered pair of two `⇒` operations, not one effect.

**Conclusion Q1:** "copying or assembly" is a union phrased as a disjunction. A cycle may include both. Keeping the word "or" hides the dependency order of Fig 3, because assembly supplies the oligomers that catalyse copying in the cited chemistry.

**Refuter:** show a single bond operation that both creates a new phosphodiester bond and copies a template without an ordered template-first step. If that is demonstrated, the distinction collapses and this sub-claim is withdrawn.

### Q2: The ordered cycle adds closure, which a single reaction does not have

Fig 12 :121: *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."* Fig 13 :31: *"each turn leaves a remainder (the residual) that re-enters the next"*. Fig 13 :12: *"the ordered succession of differences"*.

A single primer-extension reaction is a chain. It produces one extended primer and stops. A replication cycle is a loop: the product is isolated, becomes a template, and is copied again. Attwater et al. (2025) show the second-order case: product strands of cycle 1 being used as templates in cycle 2, and exponential amplification over many cycles. Salibi et al. (2023) show a different closure: content exchange between vesicle populations followed by autocatalytic ligase replication, sustained over serial dilution.

The sign condition is decisive. A freeze-thaw oscillation that fragments vesicles, degrades selected sequences, or loses the product on thaw is a cycle with the **wrong sign**: it does not close a replicator loop. Root-Bernstein and Brown (2022) and Ding et al. (2023) both report the destructive side. Ding et al. suggest activation in a nearby partially frozen environment with transfer into a separate replicating compartment, which is a two-room solution to a sign problem.

**Conclusion Q2:** order across cycles is a typed `→` chain of productions whose sign is set by product retention. The framework licenses this as a cycle structure; it does not license a claim that any particular oscillation has the right sign.

**Refuter:** a chain of reactions in which the product never re-enters as input but is still reported as replication. That is a misuse of the word and breaks Fig 12 :121.

### Q3: Pre-cycle and post-cycle pools are isomers only over a fixed atom set

Fig 12 :117: *"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* Fig 12 :104: *"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."*

Two readings must be kept apart:

- **Loose reading (retracted).** If a pre-cycle pool contains only monomers and a post-cycle pool contains oligomers, the atom inventory as written has changed: new phosphodiester bonds exist that did not before. Under Fig 12's definition these are not isomers; they are different substances with different ingredient lists once bonds are counted as part of the molecule. My first pass called them isomers. That reading is retracted and kept visible here.
- **Strict reading (standing).** If both pools are described over the **full shared atom set**, including the eventual bond types as available slots, then the same atoms are arranged differently: monomers free in brine versus the same residues in a copied duplex. That is an isomer claim in the figure's sense, *"invisible in the formula and decisive in the behaviour"*. It is `specified` and single-source for the figure definition; the chemistry check is the sequencing data, not the framework.

This matches the exemplar's correction pattern on isomer claims: the figure's definition is structural, and the chemical case has to meet the fixed-atom condition.

**Conclusion Q3:** the isomer claim is real only under the fixed-atom condition. Without it, say "different substances" and stop.

**Falsifier, written before the run:** if either pool requires an atom the other lacks, the isomer claim fails and the functional-group reading (same `state --- structure --- state` motif, different occupants) stands instead.

### Q4: Catalysts and spent parts are the same ingredients read differently across uses

Fig 12 :119: *"catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."*

Attwater et al. (2010) report the ribozyme half-life rising from under 52 hours at 17 °C to over 16 days in ice at −7 °C, with activity persisting for weeks. That is a part that survives its own use in the figure's sense. By contrast, an activated mononucleotide consumed in primer extension is a spent part. The same chemical inventory can contain both, and a listing of ingredients does not say which is which. This is why the answer must track the **lineage** of a molecule across uses, not just its composition at one time.

**Conclusion Q4:** a cycle can only close if at least one part survives its own use. Whether a given molecule is that part is a measurement, not a figure verdict.

**Refuter:** show a catalyst that is consumed in the same step it catalyses and still supports a second cycle. If that occurs, the catalyst/spent-part distinction needs re-census.

### Q5: Description cost and test cost do not add

Fig 12 :126: *"Bits price the description. Actions price finding out whether it holds."* Fig 12 :128: *"Neither figure predicts the other, so both are read or the choice is made blind."*

A freeze-thaw protocol is cheap to describe: freeze, hold, thaw, repeat. It can be expensive to test: controlled temperature ramps, rigorous controls, sequencing, replication across labs. Conversely, a complex eutectic chemistry is expensive to state and may cost one measurement to refute. The two currencies must be kept apart. This is why `03_public_contact_points.csv` is a **budget** artifact (where to get a claim tried) and `08_expert_verification_packet.md` is a **verdict** artifact (what would refute it). Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

**Conclusion Q5:** the cheapness of the phrase "freeze-thaw cycles" is not evidence for the mechanism. It is a low bit-cost description that may carry a high action cost.

**Refuter:** show that a description's bit cost predicts its test cost in this domain. No source read here supports that.

## CONCLUSION

Assembly is `⇒` production, copying is ordered `→` over productions, and a cycle is a typed structure whose sign is set by product retention. Over a fixed atom set the pre- and post-cycle pools can be isomers, but only then. Catalysts survive their own use and spent parts do not, and a listing of ingredients cannot tell which is which. Each sub-claim carries its falsifier above. None is `grounded` by the figure frame; the measurements belong to the cited authors.

## ANCHOR

Verbatim figure text read from `FRAMEWORK/reference/03-FIGURES_TEXT.md` (local path in `10_source_ledger.csv`). World anchor: the experiments of Attwater et al. 2010 and 2025, Ding et al. 2023, Salibi et al. 2023, and the critical review by Root-Bernstein and Brown 2022, all opened and recorded in `10_source_ledger.csv`. No new measurement was taken in this simulated derivation.

## FIGURE CENSUS

Fig 12 :72, :104, :117, :119, :121, :123, :126, :128; Operators table :37; Fig 13 :12, :31; Fig 3 :19; Fig 6 :21; Fig 9 :60. Strained after re-census: the isomer claim when the atom set is not held fixed (Q3), retracted in the loose form and kept in the strict form. No other strain.
