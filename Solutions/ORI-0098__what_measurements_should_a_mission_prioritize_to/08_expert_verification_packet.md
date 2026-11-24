# Expert verification packet: measurement priority for life detection

**What this is:** a claim in a form an astrobiology or mission-design reader can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the ordering, `general` on the shape, not `grounded`.** No measurement is claimed. This is a dependency rule and a set of falsifiers.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the question it reports on.

## 1. The claim, in one paragraph

A life detection mission should not rank candidate biosignatures and fly the strongest ones. It should order measurement roles by dependency: describe the residual before naming instruments, split past life from present life, secure context and vocabulary and a stated disconfirmation criterion before any signifier, buy independence between measurements rather than agreement among interpreters, price arrangement above mere ingredient presence, treat contamination control and calibration as anchor maintenance, sharpen instruments already returning a failing signal, and report a null as unreached with a named gap rather than as absence. The framework does not name the correct instrument, molecule or target.

## 2. Three checkable sub-claims

### C1 - dependency order, checkable by reading Figure 3

- **Statement:** the priority order is perception, vocabulary, objective, then planning (instrument selection). The middle links have the fewest instruments and therefore come first.
- **Source, verbatim:** Fig 3 :20-21 - *"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."* Also Fig 3 :26-27 - *"A link with no instrument is not a link that works. It is a link nobody has looked at."*
- **What to check:** in a real mission formulation, is the payload typically selected before habitat context and disconfirmation criteria are stated? If yes, the effort is above the break.
- **Refuter:** exhibit a mission that flies only a high-rung signifier, with no context measurement and no pre-stated disconfirmation criterion, whose result nonetheless bears on the ground. If one exists, the dependency ordering is wrong.

### C2 - independence, checkable by reading Figures 2 and 13

- **Statement:** two measurements count as two frames only if they draw on different evidence. Agreement between readers of one spectrum, or between instruments using one physical principle, is one witness. The three structural axes (ordering, spendable difference, relation) are independent by construction.
- **Source, verbatim:** Fig 2 :31-32 - *"Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are."* Also Fig 2 :40 - *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* and Fig 13 :35-37 - *"Space, time and energy are not three readings of one quantity. Neither are spectrum, gradient and network. Each answers a question the other two cannot"*
- **What to check:** do ordering (mass/isotopic/size spectra), spendable difference (redox, pH, thermal gradients) and relation (co-occurrence across samples) actually rely on different physical processes at the target, or can two be derived from one under a declared code?
- **Refuter:** show that two of the axes reduce to a single measurement under a declared code so that their agreement carries no information, or show that two measurements sharing one abiotic mechanism carry independent information about the biological hypothesis. Either breaks C2.

### C3 - bonds over ingredients and honest nulls, checkable by reading Figures 12 and 8

- **Statement:** ingredient presence is not sufficient to discriminate a biological source; arrangement is the information-bearing part. And a non-detection by a closed instrument set is not a verdict of absence.
- **Source, verbatim:** Fig 12 :5 - *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."* Fig 12 :117 - *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* Fig 8 :39 - *"So a search that finds nothing is never a proof of absence."*
- **What to check:** are there cases in the target environment where amino acid or lipid presence alone separates biology from abiotic synthesis and contamination, with no arrangement or context information? And is the expected detection of each null stated?
- **Refuter:** exhibit an ingredient-only discrimination that holds across known pathways, or exhibit a null from a closed set that legitimately entails absence with no statement about expected detection. Either breaks C3. Brewer (2025) supplies the sharpening condition: *"AoE is not EoA, except in cases wherein evidence for the hypothesis in question is highly likely to occur and be found."*

## 3. What is explicitly not claimed

- Not a ranked list of instruments, molecules or landing sites. No name is asserted as the right slot occupant.
- Not that one biosignature is decisive. A reading cannot comment on its own source.
- Not that a null means absence, and not that a positive means life.
- Not that reviewer or institutional agreement is corroboration. Agreement in one evidence pool is one witness (Fig 2 :40).
- Not a mission design, not a mass/power budget, not a target-selection recommendation.
- Not `grounded`. No measurement in this packet pays for a claim.

## 4. Provenance

- Question source: `Questions/origins of life.txt` line 133, section 10.
- Primary figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, extracted verbatim from Isaiah N's SVGs, read 2026-11-23.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`, read 2026-11-23.
- Formula and seat map: `FRAMEWORK/figures/THE_FORMULA.md` and `THE_SEAT_MAP_Field_Guide_amended.md`, read 2026-11-23.
- Essays opened this session: *The Library of Babel*, *The Hard Problem is About Source*, *The Recursive Self-Improvement Trap* (Isaiah N, adventuresinml, 2026).
- World sources read 2026-11-23: NASA Ladder pages (Neveu et al. 2018 framework), Talbert 2018, Sharma et al. 2023 (Nature, open access), Smith and Sinapayen (arXiv v3 2026), Brewer 2025 (Philosophy of Science), MacKenzie 2011 (NZJE). Full ledger with URLs, dates and quotes: `10_source_ledger.csv`.
- This packet compiled 2026-11-23.

## 5. What would settle it

1. **Source separation:** a comparison showing that the set distinguishes biology from abiotic synthesis and terrestrial contamination for one reading, under declared nulls. If it cannot, the result is a projection.
2. **Independence audit:** a demonstration that the three axes draw on different physical processes, or a demonstration that they do not (which would refute C2).
3. **Expected detection:** for each null, the reading the instrument would have returned if the target were present. Without it, a null has no weight.
4. **Channel check:** calibration, blanks and preservation held throughout. A saturated or pooled reading is loss of contact, not a verdict (Fig 10 :24-28).
5. The six pre-registered falsifiers in `01_figure_grounded_audit.md` §5.

## 6. What an expert can check in twenty minutes

1. Read Fig 3 :20-21 and :26-27, Fig 2 :31-32 and :40, Fig 13 :35-37, Fig 12 :5 and :117, and Fig 8 :39. Eight short passages.
2. Check C1 against a mission you know: was the payload chosen before context and disconfirmation criteria were stated?
3. Check C2 against your instrument suite: which two of your measurements actually share a physical process?
4. Check C3 against a positive or null you have seen: was the source discriminated, and was expected detection stated?
5. Send the refutation. A failure is more useful than an endorsement.
