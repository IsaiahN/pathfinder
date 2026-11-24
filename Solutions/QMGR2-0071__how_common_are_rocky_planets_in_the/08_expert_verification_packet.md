# Expert verification packet: rocky habitable-zone planets by star type

**What this is:** a claim in a form an exoplanet researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `general` on the structural rule, `specified` on the shape. Not `grounded`.** No new measurement is claimed. This is a shape and a checking discipline, not a number.

## 1. The claim, in one paragraph

The question "how common are rocky planets in the potentially habitable zones of different kinds of stars?" is not answered by one occurrence rate. The residual is indexed by star-kind slot, so the answer is a table: one rate per star kind, each cell carrying its rocky radius bound, its habitable-zone definition, its catalog epoch, and the instrument that measured it. The three conditions (rocky, in the HZ, per host kind) are conjoined and must be shown as columns, not averaged into a single η⊕. A cell with zero detections reports a non-detection, not a zero population. The figures supply this form and stop there; the values are imported from measurement literature with their credible intervals. Current estimates for Sun-like stars span roughly 0.05 to 0.6, and an updated Kepler analysis finds no evidence that M dwarfs have a higher rate than FGK stars.

## 2. Three checkable sub-claims

### C1 : framework-internal; checkable by reading Figure 1

- **Statement:** an occurrence rate must be indexed by star-kind slot; aggregating across kinds destroys the signal the question asks about.
- **Source, verbatim:** Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* And Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."* The overlap consequence is Fig 13 :39 *"Six members that overlapped would be fewer members wearing six names."*
- **Refuter:** show that one aggregate rate preserves everything needed for both mission design and a physical claim about star type; or show that the star-kind bins from two catalog epochs contain the same stars with the same effective temperatures. If either holds, the slot rule does not apply here.

### C2 : framework-internal; checkable by reading Figures 9 and 8

- **Statement:** the three conditions are a union and must be unbundled into columns; zero detections is not zero planets.
- **Source, verbatim:** Fig 9 :54 *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 8 :39 *"So a search that finds nothing is never a proof of absence."* Fig 9 :44 *"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."*
- **What to check against the literature:** does changing the rocky radius floor (0.75 to 0.5 Earth radii) or the HZ definition (conservative vs optimistic) change the reported rate materially? The opened 2025 review says lowering the floor can raise η⊕ by more than a factor of 2. Does the updated M-dwarf analysis keep a forward-model rate despite zero conservative HZ detections? Bergsten et al. (2023) do.
- **Refuter:** show a rate invariant under those definition changes, and a bin with measured near-unity completeness and zero planets. Then the union and the non-detection caution are idle for this question.

### C3 : framework-internal derivation with a world-facing consequence

- **Statement:** the anchor for a cell is the measurement, not consensus, and the number must be imported because the figures' closure contains no instrument model. A mission baseline is a budget filter, not a verdict.
- **Source, verbatim:** Fig 2 :29 *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :40 *"agreement about the world is worthless when the agreeing frames share an evidence pool"* (full line begins "disqualifying for a verdict:"). Fig 9 :60 *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* Fig 13 :134 *"Unreachable is a verdict here, not a silence"*.
- **Refuter:** derive a numerical occurrence rate from the six-term substrate and bond set with no imported stellar or instrumental data; or show that two apparently independent estimates actually used genuinely separate instruments and separate derivations rather than one catalog. The second case would be admissible corroboration, not a refutation of the anchor rule, but it must be shown, not assumed.

## 3. What is explicitly not claimed

- Not a value of η⊕ for any star kind. No cell is filled by the figures.
- Not that M dwarfs are known richer or poorer in rocky HZ planets than FGK stars. The current literature does not establish a trend.
- Not that "potentially habitable" means habitable. Habitability is not directly measured.
- Not that a zero-detection bin is empty.
- Not a derivation of stellar or climate astrophysics from the framework; those are imports.
- Not `grounded` as our result. The world numbers are `grounded` as reported by their authors. This packet is a simulated derivation.

## 4. Provenance

- Figure text extracted verbatim from Isaiah N's 13 SVGs plus the Operators and Symbols tables: local `FRAMEWORK/reference/03-FIGURES_TEXT.md`.
- Canonical usage rule: local `FRAMEWORK/reference/FIGURES_README_canonical.md`; the figures outrank all summaries.
- Eight-step loop and mode rule: local `FRAMEWORK/figures/THE_FORMULA.md`.
- Fernandes, Johnson, Bergsten et al., "Are We There Yet? Challenges in Quantifying the Frequency of Earth Analogs in the Habitable Zone", PASP 137, 121001, published 2025-12-17, opened 2026-11-23: https://iopscience.iop.org/article/10.1088/1538-3873/ae215a
- Bergsten, Pascucci, Hardegree-Ullman, Fernandes, Christiansen and Mulders, "No Evidence for More Earth-sized Planets in the Habitable Zone of Kepler's M versus FGK Stars", AJ 166, 234, accepted 2023-10-15, opened 2026-11-23: https://arxiv.org/html/2310.11613v1
- Jenkins, NASA Ames, "Improving Estimates of the Frequency of Earth-like Planets...", SPIN 2024, NTRS record opened 2026-11-23: https://ntrs.nasa.gov/citations/20240003044
- Essays by Isaiah N opened 2026-11-23: The Library of Babel, The Hard Problem is About Source, The Recursive Self-Improvement Trap.
- Packet compiled 2026-11-23. Full ledger: `10_source_ledger.csv`.

## 5. What would settle it

A better instrument and a stable definition, not more agreement. Specifically:

1. Reprocessed Kepler DR25, TESS, PLATO and radial-velocity confirmations that place more planets inside the η⊕ regime, each with its slot and definition reported.
2. A resolved rocky radius bound and HZ convention, with the alternative reported alongside.
3. Star-kind definitions stable across catalog epochs, so rows mean the same thing over time.
4. An instrument that distinguishes a born-rocky planet from a stripped core, so "rocky" is observed rather than extrapolated.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19, :22; Fig 9 :54; Fig 8 :39; Fig 2 :29, :40; Fig 13 :134. Six short passages.
2. Check C2 against the 2025 review's stated causes of dispersion. Do the definition changes actually move the number?
3. Check the M-versus-FGK claim against Bergsten et al. 2023: is the "no evidence for an increase" conclusion carried by the stated uncertainties?
4. Name one instrument that would move a cell from `candidate` to settled, or say why none is available.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
