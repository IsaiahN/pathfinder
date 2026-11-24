# Chain, cycle and order: the supporting derivation

**Mode: `general` on the structural distinction, `specified` on the ordered dependencies, `gap` on the rate. This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §8).**

## RESIDUAL

The main audit left two supporting questions open. (1) Exactly what structural difference separates a strand that can be copied from a strand that can anchor a lineage? (2) In what order must the conditions be satisfied, and does the order constrain which experiment answers which part of the question? A third question is demanded by the term "isomers and order": are the joining and copying conditions variants of one thing, or different structures over the same atoms?

## DOMAIN CENSUS

Atoms held in the chemistry frame: the four ribonucleotides plus activated derivatives, phosphodiester backbone bonds, Watson-Crick and wobble base pairs, mineral surfaces, thermal or wet-dry cycling, protocell compartments. Bonds: the backbone bond (one type, ordered) and base pairing (a second type, with its own geometry). Currency: bond formation, fidelity, rate, survival. Anchors: template-directed chemistry experiments, the error-threshold calculation, serial-transfer evolution experiments. No new primitive is minted here; feedstock chemistry is an import with a source gate.

## DERIVATION

### Q1 - Chain versus cycle is a structure difference, not a length difference

Fig 12 :48: "A molecule is a bonded arrangement. A chain is the degenerate case: one bond type, no branching." Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."

A 10-nucleotide oligomer and a 100-nucleotide polymer are both chains: same bond type, no branching. Length does not change the structure class. What changes the class is the relation that lets the product serve as input again. In template-directed copying that relation is complementary base pairing, a second bond type. So the replication loop is a two-strand cycle over a chain substrate, not a longer chain.

**Falsifier, written before the run:** if a single backbone-bonded chain, with no complementary strand and no second bond type, is shown to copy itself with output re-entering as input, the chain/cycle distinction as used here fails.

### Q2 - The evolving unit must be the regenerating part

Fig 12 :119: "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."

This is a second structural distinction, orthogonal to Q1. A strand can be a good template (Q1 satisfied) and still be a spent reagent that is destroyed or locked in a duplex after one round. Robertson and Joyce's net-rate argument (error-free copies minus decomposition of parents) is the world-facing version; Szostak's high-Tm duplex dead end is the concrete mechanism. A lineage needs the regenerating kind.

**Falsifier:** a system in which the template is consumed each round yet heritable variation persists across many generations with no other regenerating carrier.

### Q3 - Are joining and copying isomers?

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Fig 12 :123: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

Joining by backbone ligation and copying by template-directed extension use the same atoms (activated nucleotides) but different bonds and different directions of assembly. By Fig 12's definition they are **isomers** in the narrow sense: same atom set, different bond, different substance, with the difference invisible in a formula that records ingredients only. They also share a functional group, the phosphodiester linkage, which fixes the kind of polymer while the bond arrangement says which process it is.

The stronger claim, that a prebiotic mixture can be described entirely as different arrangements of one atom set with no imported catalyst or surface, is **not** licensed. Fig 8 :32 ("Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means.") and Fig 6 :23 ("No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs.") require feedstock and mineral or activation chemistry to be treated as imports with provenance.

**Falsifier:** show that ligation and templated copying require different atom sets with no shared substructure, which would reduce them to two unrelated reactions rather than isomers over one chemistry.

### Q4 - Order by dependency, and which break matters

Fig 3 :20: "The chain is ordered by dependency, not by importance." Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

The dependency order is:

1. **Feedstock.** Activated monomers must be available. This is an import, not a search result.
2. **Joining.** Short oligomers form by ligation or primer extension on a template or surface.
3. **Cycle closure.** Complement becomes template; strand separation must be possible.
4. **Fidelity.** Copying accuracy must exceed the error threshold before length can grow.
5. **Selection.** Variants must differ in survival or replication rate, with spatial localization so a useful variant keeps its advantage.
6. **Evolution.** Multi-generation heritable change is the output of steps 1 to 5, not a seventh independent condition.

The likely break is between 3 and 4. Joining and complement formation have instruments (gel assays, sequencing, mass spectrometry); the sustained fidelity-plus-selection bridge has fewer, which is exactly Fig 3's "middle link" case. Effort spent optimizing step 2 when step 4 has no instrument arrives at a step that cannot use it.

**Falsifier:** an experiment that shows sustained evolution can begin with fidelity below the error threshold, so step 4 does not depend on step 3 in the way claimed.

### Q5 - The threshold orders fidelity before length

The world literature supplies the quantitative order that the figures only gesture at. Robertson and Joyce give the condition q to the power n greater than s, where q is per-condensation fidelity, n the number of reactions to make a complete copy and s the selective advantage. Szostak restates it as an error rate below the reciprocal of the functionally important bases. The virtual circular genome paper ends with the same open variable: whether chemical replication can attain sufficient accuracy.

So fidelity is upstream of length. A 10-nucleotide strand with poor fidelity can persist only if its advantage is large; a 50-nucleotide catalytic RNA needs roughly 2 percent per-position accuracy. These numbers are world results with provenance, not figure lines, and they are recorded as such in `10_source_ledger.csv`. The figure contribution is the shape: one factor cannot substitute for the other (Fig 7 :26, "progress per handoff: R = h² × S"), and the round trip from figures to numbers carries a gap that must be measured (Fig 4 :30).

### Q6 - Analogues that are instances, not derivations

- **Spiegelman's Monster** (serial transfer of Qβ RNA with replicase, down to 218 bases and below) is an **instance**: once a copying system is supplied, selection has purchase. It is not a derivation of the first replicator, because the replicase and nucleotides were supplied.
- **The virtual circular genome** is an **analogue and a proposed mechanism**: short overlapping fragments grow by one nucleotide on average, with cycling environments reshuffling base-paired configurations. It instantiates F2 and Q1 (many short chains, distributed copying) but remains untested.
- **The 24-3 polymerase ribozyme** is an **instance** of a copying catalyst evolved in the lab, still far from self-replication (RNA world survey, accessed 2026-11-23).

Mixing these three into one story would be the provenance error Fig 8 warns about: convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them.

## CONCLUSION

The structural work survives: joining is a chain, replication is a two-strand cycle closed by a second bond type, and the evolving unit is the regenerating part. Joining and copying are isomers over one atom set in Fig 12's sense, while feedstock and surfaces remain imports. The dependency order puts feedstock, joining, cycle closure, fidelity and selection in that sequence, with the fidelity-to-selection bridge the likely unmeasured break. Fidelity is upstream of length in the world literature. None of this supplies the literal "often enough" number, which stays an honest `gap`.

## ANCHOR

Verbatim figure text in `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read this session; six essays listed in `05_what_shape_means.md`; world sources in `10_source_ledger.csv`, all opened 2026-11-23. No laboratory measurement was taken.

## FIGURE CENSUS

Fig 3 :20, :27 (dependency, instrument); Fig 4 :30 (round trip); Fig 6 :23 (import); Fig 7 :26 (two-factor product); Fig 8 :32 (idempotent closure); Fig 12 :48, :117, :119, :121, :123 (chain, isomer, catalyst, cycle, functional group). Strains after re-census: none left hidden. The Fig 7 cross-scale instance is named as `specified`, and the number is `gap`.
