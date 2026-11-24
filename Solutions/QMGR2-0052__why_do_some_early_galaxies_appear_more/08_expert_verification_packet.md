# Expert verification packet: the Tether on bright early galaxies

**What this is:** a claim in a form an astronomer can check. Mode, derivation and refuters are stated before the conclusion, so the reader knows what to look for and what would settle it.

**Mode: `general` on the shape, `specified` on the per-domain verdicts, `gap` on the single physical cause. Not `grounded`.** No new astronomical measurement is claimed. This is a simulated derivation checked for internal consistency against the figures, not a ground reading.

## 1. The claim, in one paragraph

An apparently too-bright early galaxy is a positive residual on one object slot: a gap between a model prediction and an instrument reading. Three overlapping conditions can produce it, with different anchors: a channel defect in the reading (photometric redshift, AGN light, dust), a term the model already holds but has mis-set (star-formation efficiency, burstiness, IMF, dust geometry, feedback), or an atom the model closure does not hold (for example a different early-dark-energy cosmology). The order of tests is forced: settle the reading with a spectrum, state what would count as a model match, apply the baryon-bound and source-discriminator checks, and only then consider an import with provenance and a shadow test. The framework returns this shape and these refuters; it does not name the dominating cause.

## 2. Three checkable sub-claims

### C1: instrument-facing; checkable by an observer against the record

- **Statement:** the bright-excess residual is per slot, and the reading must be settled before the model is blamed. Both directions occur: a suggested z approximately 16 candidate was reclassified, and two z approximately 14 candidates were confirmed.
- **Source, verbatim:** Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 10 :24 "the ground does not decay, the channel does". Fig 6 :32 "An instrument is not built from a description. It is improved from a worse instrument already returning something."
- **World anchor:** Arrabal Haro et al. 2023, "Confirmation and refutation of very luminous galaxies in the early Universe", Nature 622, 707, abstract: a candidate "with suggested z ≈ 16 instead has z = 4.9". Carniani et al. 2024, Nature 633, 318, abstract: "spectroscopic confirmation of two luminous galaxies at a redshift of 14."
- **What to check:** for a named candidate, is the redshift spectroscopic or photometric? Was a low-redshift interloper or a broad-line AGN excluded, and by which observation?
- **Refuter:** a sample in which every bright candidate keeps its excess under a clean spectrum, with contamination and AGN alternatives excluded, removes the channel verdict for that sample and forces the causal work into D2/D3.

### C2: model-facing; checkable by a galaxy-formation modeller

- **Statement:** efficiency, burstiness, IMF, dust and early black holes are re-fits of atoms already in the model closure, not new primitives. An outward import is owed only when those re-fits and the instrument upgrade leave a residual.
- **Source, verbatim:** Fig 5 :13 "mis-attached: refit what you have, do not invent". Fig 6 :21 "MINT composes inside the closure and can never add an atom." Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."
- **World anchor:** Ceverino et al. 2024, A&A 689, A244: "The efficiency of galaxy formation increases significantly with mass and redshift." Donnan et al. 2025, arXiv:2501.03217: "No evidence (yet) for increased star-formation efficiency at early times"; a non-evolving efficiency plus younger stellar populations reproduces the UV LF and GSMF. Shen et al. 2024, MNRAS 533, 3923: early dark energy removes the tension for spectroscopically confirmed galaxies, at the price of S8 and age tensions.
- **What to check:** does the proposed fix introduce a primitive the model did not hold, or re-set a held one? If it is a new primitive, is a source gate and shadow test supplied, and is the import debited against the independence of the frame it came from?
- **Refuter:** a confirmed z > 10 object whose stellar mass exceeds the baryon bound after all systematic alternatives are excluded (this forces an import), or a claimed import shown to be already in the closure (this withdraws the wall-moving claim).

### C3: framework-internal; checkable by reading Figures 9 and 11

- **Statement:** the conditions form a union of overlapping conditions, not a partition, and the habitat must be enumerated rather than composed from a standing list.
- **Source, verbatim:** Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 11 :43 "The habitat is enumerated, never composed." Fig 11 :51 "No standing list of good actors survives a change of residual."
- **World anchor:** Carniani et al. 2024 needed a spectrum (redshift), an extended 260 parsec morphology and a blue UV slope (AGN exclusion), and a halo-abundance scaling (model comparison) for the same object. One lever cleared none of the intersections.
- **What to check:** can a single intervention close every slot including the overlaps? If yes, the union claim fails. Can a fixed list of causes with fixed valence predict a new slot? If yes, the enumeration claim fails.
- **Refuter:** exhibit either a single lever that closes the intersections or a standing cause list with fixed valence that predicts a new slot without re-enumeration.

## 3. What is explicitly not claimed

- Not that ΛCDM is broken, and not that the baryon bound has been violated. The published candidates sit at the edge of the bound, which is an unresolved issue spanning observation, galaxy formation and cosmology, not a measurement of failure.
- Not that all bright candidates are real. One was refuted; two were confirmed. Verdicts are per slot.
- Not a mechanism. No cause is named for any slot, and the literal "why" is a declared `gap` (Fig 9 :32 "you get a kind of thing, never the answer itself").
- Not that star-formation efficiency is constant or evolving. The world literature disagrees; the disagreement is evidence for the union, not a verdict.
- Not that the figure-derived isomers are galaxies-as-molecules. `06_isomers_and_order.md` is a structural analogue over an abstract atom set (live strain S1).
- Not `grounded`. This packet is a simulated derivation, not a ground reading.

## 4. Provenance

- Question: `QM & GR Questions.txt` line 207, ID QMGR2-0052, section F (Galaxies and cosmic structure).
- Figure text extracted verbatim from Isaiah's 13 figures plus the Operators and Symbols tables: `FRAMEWORK/reference/03-FIGURES_TEXT.md`.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`.
- Loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`.
- Eight essays by Isaiah N, 2026-08 to 2026-11; three opened directly this session and recorded in `05_what_shape_means.md`.
- World sources: 11 substantive sources opened or returned by the public search index on 2026-11-23, with author, venue, year, quote, field and overlap in `10_source_ledger.csv`. Fetch failures are recorded in `04_links_and_distribution.md`.
- This packet compiled 2026-11-23.

## 5. What would settle it

A ground reading, not more agreement.

1. **Redshift:** is the slot spectroscopic, and is a low-redshift interloper excluded? (closes C1)
2. **Baryon bound:** does the confirmed stellar mass exceed the maximum allowed for the expected halos at that redshift? (fires R1, forces an import)
3. **Source discriminator:** do UV slope, morphology, emission lines and ALMA dust separate efficiency from IMF from AGN for that slot? (closes the habitat enumeration for that slot)
4. **Union check:** is one lever sufficient across the intersections? (refutes C3 if yes)

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19, Fig 10 :24, Fig 5 :13, Fig 6 :21 and :23, Fig 9 :57, Fig 11 :43 and :51. Eight short passages.
2. Pick one known z > 10 candidate and state whether its redshift is spectroscopic or photometric, and whether an AGN alternative was excluded.
3. Name one instrument that would discriminate among efficiency, IMF, dust and black-hole contributions for that object, or say why none is available.
4. Send the refutation. A failure is more useful than an endorsement. Agreement is not pooled as corroboration (Fig 2 :40).

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
