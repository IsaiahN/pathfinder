# Star kinds as slots: partition, union and order

**Mode: `specified` on the structural claims, `general` on the partition rule.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

The question asks for a rate "in the potentially habitable zones of different kinds of stars". Two things must be decided before any number is quoted: (1) do the star kinds form a partition (separate slots whose rates may be reported independently) or a union (overlapping conditions that must be unbundled); (2) in what order must the conditions be settled so that a rate means anything.

## DOMAIN CENSUS (supporting)

Atoms held here are not the six physical primitives but the four domains of `01` §1: D1 survey, D2 stellar demographics, D3 definitions, D4 verification. Bonds held: ⋛ comparison (a rate compares counts), → sequence (definition before measurement), − subtraction (a rate is planets minus the undetected, corrected by completeness). No new primitive is imported from the figures. The star-kind list itself is imported from catalogs.

## DERIVATION

### Q1 : Are the star kinds a partition?

- Fig 13 :39: *"Six members that overlapped would be fewer members wearing six names."* This is Figure 2's independence condition applied to a set: members that draw on the same underlying fact are redundant, not several.
- D2 (Gaia-revised effective temperature, radius, luminosity) supplies the slot definitions. The slots are FGK dwarfs, early M, mid to late M, and any further subdivision the catalog supports. They are enumerated from the catalog (Fig 11 :48 *"You do not invent the list. You read it off the world"*), not composed from the theory.
- The slots are a **partition only if their boundaries are disjoint at the epoch of the catalog used**. Bergsten et al. (2023) show that Gaia revisions moved hosts across the M boundary, so a 2015 M-dwarf sample and a 2023 M-dwarf sample are different partitions. Reporting both as one slot is the overlap failure Fig 13 :39 names.
- **Falsifier, written before the run:** show that two star-kind definitions drawn from different catalog epochs contain the same stars with the same effective temperatures and radii. If so, treating them as one slot is correct and the partition warning is idle here. The cited paper says they differ, so the warning is live.

### Q2 : Are the star kinds isomers or a functional group?

- Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
- Fig 12 :124: *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*
- The star kinds are **not isomers** in Fig 12's sense. FGK and M stars are different hosts, not the same atoms under a different bond. There is no shared atom set being rearranged.
- They share a **functional group**: both are "star with a habitable zone in which a rocky planet can be counted". The qualifier (spectral type) says which member. That is Fig 12 :124 exactly: the group fixes the kind of question, the qualifier picks the slot.
- Consequence: one rate template, many slots. You may reuse the analysis method across slots (Fig 4 :22 *"Only methods cross up. Only head starts come down."*), but you may not reuse the resulting number, because the members are different substances for this question.
- **Falsifier:** show that the occurrence rate is invariant under the qualifier (spectral type), so the group alone fixes the answer. Bergsten et al. (2023) find no evidence for an *increase* from FGK to M, which is close to invariance over two slots, but their uncertainties are large and mid-to-late M may differ (Ment and Charbonneau 2023 as summarized in the opened review). So the falsifier is **not fired**, only approached. Keep the slots separate.

### Q3 : Why the question is a union of conditions

- Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."*
- The conditions are: rocky (radius/mass bound), in the habitable zone (instellation bound), around a given star kind (slot). A planet in two conditions is not a harder planet in one; it is a specific compound (Fig 9 :57 *"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."*).
- Operationally: the 2025 review records that lowering the radius floor from 0.75 to 0.5 Earth radii can raise η⊕ by more than a factor of 2, and that conservative versus optimistic HZ boundaries shift it again. Two studies that differ in either condition are measuring different compounds.
- **Falsifier:** show a rate that is unchanged when the radius floor and the HZ boundary are varied over the ranges used in the literature. The review's factor-of-2 result refutes that, so the unbundling is required.

### Q4 : What order do the conditions come in?

- Fig 3 :20: *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces"*.
- Order: (1) perceive the star kinds and planet candidates (catalog), (2) have terms for what the conditions afford (rocky, HZ definitions), (3) say what counts as progress (a rate per slot with error bars), (4) plan the instrument and completeness correction, (5) learn and carry with provenance.
- Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* The middle link here is "terms for what a situation affords": the HZ definition. It has models (Kopparapu) but no direct instrument for the biological part of "habitable". So the rate counts *potentially* habitable planets, not habitable ones. The word "potentially" in the question is load bearing.
- **Falsifier:** exhibit an instrument that directly measures habitability (liquid surface water plus a stable atmosphere) for an exoplanet, so that "potentially" can be dropped. Until then the chain stops at the definitions link and any reading below it is a reading of nothing (Fig 3 :22-23).

### Q5 : What does the union/partition result imply for the answer table?

- The table is a **partition across rows** (star kinds) and a **union across columns** (rocky AND HZ). Rows are independent slots; columns are conjoined conditions attached to each cell.
- A cell is legal only if its row's catalog epoch and its column's definitions are both stated. Otherwise it is an unbracketed recording, and Fig 4 :30 requires the round trip: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*
- The round-trip gap `R_T` here is the information lost when a cell is quoted without its row epoch and column definitions. It is not zero.

## CONCLUSION

The star kinds form a **partition of slots**, enumerated from catalogs, not a set of isomers. They share a **functional group** (host of a potentially habitable rocky planet), so one method template serves all rows while no number transfers between them. The conditions on a cell form a **union** and must be unbundled into columns before comparison. The dependency order puts definitions before instruments and instruments before rates, and the chain currently stops at the definitions link because no instrument directly measures habitability. These are `specified` structural claims with four stated falsifiers; none is `grounded`.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, local canonical README, and world sources opened this session (Fernandes et al. 2025; Bergsten et al. 2023). No measurement was taken by this derivation.

## FIGURE CENSUS

Fig 13 (overlap warning), Fig 11 (enumerate the list), Fig 12 (isomer versus functional group), Fig 9 (union/partition, case in two conditions, describe before looking), Fig 3 (dependency order, link with no instrument), Fig 4 (round trip gap), Fig 6 (methods cross up). Strains after re-census: **none**. The near-invariance of the rate between FGK and M is a world-facing open question, not a figure strain, and is recorded as a falsifier not yet fired.
