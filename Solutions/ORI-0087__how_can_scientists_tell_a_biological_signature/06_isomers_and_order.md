# Isomers, catalysts, cycles and order: a supporting derivation for ORI-0087

**Mode: `specified`, not `grounded`.** This is a simulated derivation checked for internal consistency against the figures, not a ground reading (see `05_what_shape_means.md` §6). No sample was measured and no instrument was run by this derivation.

**Status:** a shape and a route. The specific chemical names that appear below are bindings from the chemistry and astrobiology frame, recorded as such, not figure-derived results.

---

## RESIDUAL

The question asks how a biological signature can be told from a nonbiological chemical process. In effect terms: an observation `o'` is in hand, a spectrum, an isotope ratio, an enantiomeric excess, a morphology, and two candidate sources can produce it, biology `B` and abiotic chemistry `A`. The instrument returns the reading and not the source. The map from source to reading is many-to-one, so the reading cannot be inverted to recover the source.

Fig 1 :19 "The residual is indexed by object slot, not aggregated."
Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."
Symbols table :38 "The gap between prediction and observation. The central quantity: everything the system does is driven by it."

The live slot here is *source*, not *composition*. A total gas abundance or a single concentration is exactly the average that erases it. What is owed is an arrangement-level discriminator, plus a decision procedure that does not collapse when both sources predict the same reading.

---

## DOMAIN CENSUS (before choosing a figure line)

R by arity, symmetry and scale, then one line per domain with actors, currency and anchor. A domain with no nameable anchor is not a domain yet.

- **R (the residual).** Arity: two live source hypotheses, plus sources not yet conceived. Symmetry: many-to-one from source to reading, so the reading is a lossy projection. Scale: molecule, sample, site, environment, time. The residual is the source slot, held per object.
- **D1, the arrangement domain.** Actors: atoms, bonds, functional groups, handedness, catalysts, cycles. Currency: description length of the arrangement and the actions needed to test it. Anchor: a reproducible bond-level reading. Partition: which arrangements a closure can compose.
- **D2, the decision domain.** Actors: biology frame, abiotic-geochemistry frame, anchor instrument. Currency: independent bearings on the same reading. Anchor: an experiment neither frame can move. Union: both conditions can hold at the same reading, so a single lever leaves the intersection standing.
- **D3, the habitat domain.** Actors: light, water, temperature, minerals, radiation, delivery, decay, contamination. Currency: contact and cascades. Anchor: the enumerated world, read off rather than composed. Union with D2.
- **D4, the name-binding domain.** Actors: O2, CH4, isotopologues, enantiomeric excess, morphology. Currency: provenanced bindings. Anchor: ground settlement or a provenanced import with a shadow test. Partition: shape versus name.

**Order by dependency.** Fig 3 :19 "Optimising a link that already works cannot rescue one that does not." Perception (read the sample) precedes vocabulary (what an arrangement affords), which precedes the objective (what would count as progress, written before the search), which precedes planning (choose the second frame), which precedes learn and carry (record the lineage). The bottleneck is the vocabulary to objective link: Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at."

---

## DERIVATION

### Q1. What does an isomer give that an ingredient list does not?

Fig 12 :5 "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."
Fig 12 :94 "The arrangement is the substance."
Fig 12 :96 "Two entries can share every ingredient and be inverses of one another."
Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

The figure gives a chemistry example in its own text: silver fulminate and silver cyanate have the same composition and different properties, which forced structure into the notation (Fig 12 :97 to :98, Liebig and Wöhler 1824 to 1826, named isomerism by Berzelius 1830). That is a figure line, not a world citation. The point transfers directly: a biosignature candidate has to be stated as an arrangement, which atoms, which bond, which handedness, not as a list of detected species. Enantiomers are the biological case, same atoms and opposite handedness.

**Mode `specified`.** Triangulated across Fig 12 (the bond carries the missing information) and Fig 1 (the residual lives in a slot, not an aggregate). Each particular chemical instance stays single-source and unmeasured.

**Refuter.** Show a reading whose source is uniquely determined by that reading alone, with no habitat context, no second instrument and no provenance, across all processes known to produce it. Then the arrangement requirement is unnecessary.

### Q2. What do a catalyst and a cycle add?

Fig 12 :119 "catalyst. A part that survives its own use."
Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."
Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it."

Regeneration across uses and a closed loop are arrangement-level markers. A catalyst that survives its own use and a cycle whose output re-enters as input are structural candidates; a linear accumulation is not, because a chain cannot close by construction. Once a signature is settled it can serve as an atom at the next level, so a detected arrangement can become an operand for a further discriminating test without any new primitive.

**Mode `specified`.** Triangulated for the structural claim (Fig 12 definitions plus the level rule). Single-source for any particular instance. The catalyst and cycle definitions are given by one figure, so the discrimination they license is a candidate binding until an instrument checks it.

**Refuter.** Show an abiotic process that composes the exact closed loop or regenerative arrangement claimed diagnostic, under a declared habitat and budget, with the same behaviour under the discriminating instrument. Then the marker is context-dependent rather than decisive.

### Q3. What is the order of the moves?

Fig 8 :53 "Residual first, frame second."
Fig 9 :27-28 "describe it before you go looking, or any frame you pick will seem to fit"
Fig 9 :30-31 "your words are borrowed too, so describe the effect rather than the cause"
Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."

The inversion to avoid is picking a familiar gas, oxygen or methane or the red edge, and then looking for a process that explains it. The problem is a union compound: biological production and abiotic production can both hold at the same reading. A single lever clears the region where only one condition holds and leaves the intersection standing. The dependency order is therefore: describe the source residual in effect terms, write what would count as a failure, name the arrangement-level discriminator, choose a second frame with a disjoint evidence pool, then import a specific molecule only as a provenanced binding.

**Mode `specified`.** Triangulated across Fig 8 and Fig 9. The world corroboration for frame-first bias is independent of the framework author (National Research Council 2007, see `10_source_ledger.csv`), so it is genuine secondary support rather than a shared pool.

**Refuter.** Show that a terran-frame-first search reaches correct source attribution at equal or better rate than a residual-first search across a declared, unauthored sample. Then the priority order is wrong and this file's Q3 falls.

### Q4. Analogues and where they stop

Fig 6 :32 "An instrument is not built from a description. It is improved from a worse instrument already returning something."
Fig 8 :45 "Two frames together reach what neither reaches alone."
Fig 11 :61 "Introduction is available; exclusion is not."

The human-perception analogue is metamerism, recorded from an independent world source: *a perceived matching of colors with different (nonmatching) spectral power distributions* (Wikipedia, Metamerism (color), 2026-11-23). Metameric fibres cannot be separated by eye or ordinary microscopy, but microspectroscopy resolves them. The remedy is an instrument with a new axis, not another argument. That is Fig 6 :32 in practice and it is why the derived shape asks for a source-discriminating bearing rather than a new gas name. The habitat analogue is that abiotic pathways, UV photolysis, volcanism, meteoritic delivery, mineral catalysis and contamination, are actors in contact with the residual. They can be introduced into the model and cannot be subtracted by assertion, because contact is a fact about the world.

Where the analogue stops: a metamer is a perceptual match under one observer, whereas a biosignature is a source attribution under two frames and a fixed ground. The analogy licenses the instrument point only. It does not license any specific chemical name.

---

## FALSIFIER (written before the conclusion)

Per the Seat Map rule, a falsifier written before the run is a design instrument. This supporting derivation is refuted if any of the following holds:

1. A reading uniquely determines its source with no habitat context, no second frame and no provenance, across all processes known to produce that reading. (Breaks Q1.)
2. An abiotic process composes the exact bond-level arrangement, closed cycle or regenerative catalyst claimed diagnostic under a declared habitat and budget. (Breaks Q2.)
3. A frame-first search matches or beats residual-first search on a declared, unauthored sample. (Breaks Q3.)
4. A complete, closed enumeration of abiotic pathways is produced for a declared signature, making exclusion available. (Breaks the habitat point in Q4.)

If any fires, the shape is narrowed or withdrawn. Until one is run, nothing here is `grounded`.

---

## CONCLUSION

The supporting derivation gives three structural results and one ordering result. An isomer, an enantiomer, a functional group, a regenerative catalyst and a closed cycle are all arrangement-level objects: they are what a flat ingredient list loses and what a source-discriminating instrument would have to resolve. The decision cannot be made from one bearing, because the biological and abiotic conditions form a union at the same reading. The order of moves is residual first, discriminator shape second, refuter before conclusion, frame third and name last. Each named signature is a binding from another frame, provenanced and shadow-tested, carrying no verdict weight until a ground settles it. Specific names (oxygen, methane, chirality, isotopic ratios) are not derived here.

This file is a shape and a route. It is not a detection.

---

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md` (Figures 1, 3, 6, 8, 9, 11 and 12), read only. World sources are recorded with URLs and quotes in `10_source_ledger.csv` and were opened 2026-11-23. No measurement was used.

## FIGURE CENSUS

Used: Fig 1 (per-slot residual), Fig 3 (dependency order, missing instrument), Fig 6 (instrument from worse instrument), Fig 8 (residual first, union surplus), Fig 9 (union compound, describe before looking), Fig 11 (enumeration, asymmetry), Fig 12 (bond, isomer, catalyst, cycle, functional group, settled molecule), Symbols table (R as gap). Strains: none after re-census; the moving union horizon of instrument discrimination is recorded as an open limit in `01_figure_grounded_audit.md` §4 and is carried forward, not smoothed.
