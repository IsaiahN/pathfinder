# The Tether's answer: how common are rocky planets in habitable zones, by star type

**Mode: `general` on the structural rule, `specified` on the shape claims. Not `grounded`.** This is a simulated derivation checked against the figures (`05_what_shape_means.md` §6), not a ground reading. The numbers quoted from the world literature are `grounded` **as reported by their authors**; this document did not take those measurements.

## 1. The residual it answers

The question does not have one number as its answer. It has a table. "Different kinds of stars" makes the star kind a slot index, and "rocky planets in the potentially habitable zone" conjoins three conditions (rocky, in the HZ, per host kind). Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* The figures decide the form of the table. They do not fill it.

## 2. The shape (from the figures)

1. **Index by slot, do not aggregate.** Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."* One rate per star kind, each with its instrument and definitions attached.
2. **Unbundle the union into columns.** Rows are the star-kind partition; columns are the conjoined conditions (rocky bound, HZ definition, catalog epoch). Fig 9 :54. Two studies with different radius floors or HZ boundaries are not measuring the same quantity.
3. **The anchor is the measurement, not consensus.** Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 1 :23 *"The ground enters as the only metric."* Agreement among analyses of one Kepler catalog is one evidence pool (Fig 2 :40), not several witnesses.
4. **Zero detections is not zero planets.** Fig 8 :39 *"So a search that finds nothing is never a proof of absence."* Keep non-detection and absence distinct in every cell.
5. **The number is imported, not derived.** Fig 13 :134 *"Unreachable is a verdict here, not a silence"*; Fig 6 :23 *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* The figures have no completeness map or climate model, so the cell values come from the measurement literature with provenance and error bars.
6. **A mission-planning number is a filter, not a witness.** Fig 9 :60 *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

## 3. What the world sources supply (secondary, imported)

Reported with their own uncertainty, not endorsed by the derivation:

- **FGK / Sun-like stars:** the final Kepler team analysis gave a conservative HZ occurrence between 0.37 and 0.60 and an optimistic one between 0.58 and 0.88 planets per star (Bryson et al. 2021, as reported in the opened 2025 review). A widely quoted planning baseline is about 0.24 (Jenkins, NASA SPIN 2024), chosen for mission design, not settled by measurement. The 2025 review concludes that estimates range widely and that *"there is little evidence of convergence in estimates of η⊕ after 2019."*
- **M dwarfs:** Bergsten et al. (2023) find η⊕ of 8.58 (+17.94/-8.22) percent for the conservative HZ and 14.22 (+24.96/-12.71) percent optimistic, with large uncertainties driven by the scarcity of HZ detections after Gaia revisions.
- **Trend across kinds:** the same study finds *no evidence* for an increase from FGK to M stars, contrary to earlier extrapolations of the close-in ~3.5x small-planet factor. So the honest answer to "different kinds" is: the per-kind table exists and the rows are currently consistent within large errors, not that one kind is known to be richer.
- **Why the spread:** differing definitions, stellar samples, catalogs, completeness/reliability treatment, few detections, and extrapolation from larger or shorter-period planets (2025 review; Pascucci et al. 2019 on stripped cores).

## 4. What it explicitly does not say

- Not a single η⊕ value. No cell is filled by the figures.
- Not that M dwarfs are known to host more rocky HZ planets than FGK stars, or fewer.
- Not that "potentially habitable" means habitable. No instrument measures habitability directly yet.
- Not that zero HZ candidates means absence. Completeness in the HZ bin is the live residual.
- Not a derivation of stellar astrophysics or climate science from the six-term substrate. Those are imports with their own anchors.
- Not `grounded` as our result. The world numbers are `grounded` as reported by their authors; the synthesis is simulated.

## 5. What would settle it (the ground)

1. **More detections in the η⊕ regime:** reprocessed Kepler DR25 candidates, TESS, PLATO and radial velocity confirmation, each reported with its slot and definition. Fig 6 :33 *"Nobody specified a telescope from an account of Mars."* Instruments are sharpened from instruments already returning something.
2. **A resolved definition:** agreement on the rocky radius bound (~1.5 to 1.64 Earth radii) and on conservative versus optimistic HZ, with the alternative reported alongside rather than buried.
3. **Stable slot definitions across catalog epochs**, so a 2015 M-dwarf sample and a 2023 one are the same row.
4. **Independent instruments:** transit, radial velocity, direct imaging, with separate derivations recorded. Fig 2 :31 *"Independence, between two frames, is how little they draw on the same evidence."*
5. **Source discrimination:** an instrument that distinguishes a born-rocky planet from a stripped core, so the composition condition can be set by observation rather than extrapolation. Fig 4 :30 requires the round-trip gap to be measured, not assumed.

## 6. The honest stop

**Reached for the shape, unreached for the number.** The figures return the form of the answer and stop at the limit of what the available instruments distinguish, recording the lineage so the stop is checkable. The canonical README: *"Indiscernibility is not identity."* The numeric value is a `gap` from the figures, filled provisionally by measurements whose credible intervals still overlap. Two star kinds can be consistent within errors without being the same slot. Prestige or consensus cannot close that gap: *"Only the ground can settle it"* (*The Recursive Self-Improvement Trap*, opened this session).

## 7. One-paragraph version for outreach

> The Tether does not produce a number for how common rocky habitable-zone planets are. It says the question has the wrong shape if you ask for one number: the residual is indexed by star kind, so the answer is a table with a rate per kind (FGK, early M, mid to late M), each tied to its definition of rocky and of the habitable zone and to the telescope that measured it. The conditions are conjoined, so they must be shown as columns, and a zero-detection cell must say "not detected", not "absent". The number itself is imported from measurements, not derived from the framework; current estimates for Sun-like stars span roughly 0.05 to 0.6 and the 2025 review finds no convergence after 2019, while an updated M-dwarf analysis finds no evidence that small stars are richer in Earth-sized habitable-zone planets. What the framework offers is the shape any answer must have, five falsifiers written in advance, and a clear account of what only a better instrument can close.
