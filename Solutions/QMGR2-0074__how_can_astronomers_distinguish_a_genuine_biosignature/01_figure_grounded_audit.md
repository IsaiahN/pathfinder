# Figure-grounded audit: distinguishing a genuine biosignature from confusing chemistry or instrument noise

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** The 13 figures plus Operators and Symbols tables, verbatim at `FRAMEWORK/reference/03-FIGURES_TEXT.md`; `FRAMEWORK/figures/THE_FORMULA.md`; `FRAMEWORK/reference/FIGURES_README_canonical.md`; the eight essays mapped in `05_what_shape_means.md`; the public world sources listed in `10_source_ledger.csv`, every one opened this session.

---

## 0. Residual, stated in effect terms

An astronomer holds a **reading** r: a spectrum, a transit light curve, a direct-imaging photometric point. The question asks which **source** produced r. Three candidate classes are in play:

- S_bio: a biological process (metabolism, metabolic waste, isotope fractionation, homochirality).
- S_abiotic: abiotic chemistry or photochemistry (stellar UV photolysis, volcanism, impacts, Fischer-Tropsch-type synthesis, sulfur chemistry).
- S_instrument: the telescope, detector, reduction pipeline, telluric correction, or stellar model.

The residual is the gap between the source and the reading. It is indexed per object slot, never aggregated:

- Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
- Fig 1 :13: **"a global R near zero with one live slot residual is a legal state"**
- Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**

So a disk-integrated or band-averaged fit that looks ordinary can coexist with one narrow band that carries the entire signal. Slots here are spectral channels, bands, epochs, and individual targets.

**Arity.** The map source → reading is many-to-one: at least three source classes project onto one reading. This is a lossy projection, not a one-to-one identification. From the essay *The Hard Problem is About Source*: *"If several paths create the same behavior, then behavior is a projection with lossy information"*; the essay's instrument reads green and *"cannot comment on the source."* The parallel is exact: a spectrometer reads an absorption feature and cannot comment on whether life, photochemistry, or the pipeline made it. The essay's own resolution is *"the answer is unreached until a better instrument exists."*

**Symmetry.** Not a symmetric bond. Under the reading the sources behave like alternatives (disjunction, "either suffices"), but the physical route source → reading is a lossy production, and the discrimination against each source is a **refusal** (negation), not a joining. Fig 12 :140: **"A vocabulary that cannot refuse can only accumulate."** The final comparison between surviving hypotheses is a threshold relation, not a symmetric join.

**Scale.** Per-feature (micro), per-target and per-habitat (meso), per-survey and per-instrument (macro). The membrane between a laboratory spectrum and a sky spectrum is lossy; Fig 4 :30 requires the round trip to be measured: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

**Binding the sought-for shape before the run (Formula, "Direction").** The shape is: a *source attribution* that survives per-slot indexing, independent channel verification, prior refusal of S_instrument and S_abiotic, habitat-context enumeration, provenance-recorded triangulation across low-overlap mechanisms, and a description-length bargain. Until this is written down as an ordinary term it predicts nothing and no check in the loop can see it. This paragraph is that binding.

---

## 1. Domain census (before choosing any figure line)

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet.

| id | domain | actors | currency | anchor | status |
|---|---|---|---|---|---|
| D1 | Photon and detector channel (the "instrument noise" domain) | telescope, detector, reduction pipeline, telluric correction, stellar spectrum | photons, counts, systematic error | an independent instrument or independent re-reduction whose systematics differ | admitted |
| D2 | Molecular and spectroscopic identification | spectral features, line lists, molecules | line identity, description length in bits | laboratory-measured spectra at relevant temperature and pressure | admitted |
| D3 | Planetary photochemistry and geochemistry (the "confusing chemistry" domain) | host-star UV, temperature, volcanism, photolysis, impacts, redox disequilibrium | production and loss rates, disequilibrium | laboratory experiment and photochemical model constrained by measured planetary context | admitted, anchor strained (see section 6) |
| D4 | Biological source (the hypothesis) | metabolisms, metabolic waste, isotopic fractionation, homochirality | fluxes and fractionation | ground truth from life we know, plus in situ sampling where available | admitted as hypothesis; ground unreachable for an exoplanet at this budget |
| D5 | Verification and outreach frame | expert readers, independent observatories, journals | agreement and residual | the ground, never agreement | admitted; independence zero in this simulated run |
| X1 | "This single feature is a biosignature" | none nameable | none | none: it confuses a reading with its source | **not a domain yet**; absorbed into D3/D4 as the metamerism error (F1) |

**Partition or union.** This is a **union**, not a partition, and not one hard question. Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** Fig 9 :57: **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."** The three confusions overlap: an abiotic pathway can be mistaken for biology; a pipeline artifact can be mistaken for a line; a stellar UV model error can produce an apparent abiotic explanation for a real biological gas. One lever (one more spectral line) clears the region where only one condition holds and leaves the intersections standing. Each domain needs its own loop, and the compound needs its own loop.

The essay *The Library of Babel* gives the same instruction from a different field: *"Perhaps your problem was a bundle or conflation of several problems masquerading as one? You will need to search all of those problems individually to find their answers and then combine them in a satisfactory way."*

**Dependency order (Fig 3).** perception (is the feature real, D1) → vocabulary (do we hold a line that identifies it, D2) → objective (what would count as source discrimination, D3/D4) → planning (which independent follow-up, D5) → learn and carry. Fig 3 :29-30: **"Before asking whether a system is good, ask which link it currently stops at, and whether the answer was measured or assumed."** Declaring "life" before D1 and D2 are settled is a reading below the break; Fig 3 :23 calls it **"a reading of nothing."**

---

## 2. Figure census

| figure | bearing | verdict |
|---|---|---|
| 1 The Agent | per-slot residual, aggregate kills the signal | governs D1 and D2 slotting |
| 2 The Ground | anchor, independence, common-cause collapse | governs D5 and the independence requirement |
| 3 Dependency Chain | a reading below the break is a reading of nothing | governs the order of the loops |
| 4 The Membrane | lossy cross-scale transform, round-trip gap | governs lab-to-sky transfer |
| 5 Mint Pipeline | four missing kinds plus the fifth "wrong" kind; three guards; MDL bargain | governs refusal and the "life" term |
| 6 Closure / Reachability | import is the only operator that moves the wall; instruments improved from worse ones | governs unidentified features and new line lists |
| 7 Room Chain | agreement is variation, not a verdict | governs multi-instrument "confirmation" claims |
| 8 Union Surplus | identical contents, provenance separates them; independence one quantity read twice | **the governing figure for the whole question** |
| 9 Leave / Arrive | describe the residual before choosing a frame; union vs partition; filters vs witnesses | governs the search procedure |
| 10 Ground Maintainer | channel decays, ground does not; verifier non-access | governs "instrument noise" as channel failure |
| 11 The Habitat | valence relative to the residual; enumerate the habitat outward; contact cascades | governs planetary context |
| 12 The Bond | isomer, functional group, two currencies; negation is not a bond | governs atmospheric-composition comparisons |
| 13 Minimum Viable Set | independence between members; overlapping frames carry no information | corroborates the independence rule at the substrate level |
| Operators / Symbols | negation ¬ refuses; ⋛ compares two quantities | the refusal operator is unary, not one of the seven bonds |

Strained readings are named as such in section 6, not smoothed over.

---

## 3. Findings F1 to F11 (verbatim quotes, then refuters)

### F1: The reading does not determine its source (decisive, governing)

Fig 8 :50-52:

> **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them."**

Fig 12 :95-96:

> **"Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."**

A biogenic gas and an abiotic gas can return the same line at the same wavelength and strength. Their notation, the spectrum, is identical. What separates them is the **record of the source**, exactly as the figure says. This is why "the line is there" is not an answer. The essay *The Hard Problem is About Source* supplies the independent corroboration: *"This is why the True Hard Problem is about determining the Source."*

- **Mode:** `general` for the projection, `specified` for the biosignature application.
- **Status:** `triangulated` (Fig 8 and Fig 12 are low-overlap: one is about provenance across frames, the other about notation and bonds). The external essay corroborates but shares no evidence pool with the figures? It does share an author, so it is weak corroboration and is declared as such in `10_source_ledger.csv`.
- **Refuter:** an instrument or observation that maps a given reading uniquely to S_bio versus S_abiotic versus S_instrument without any contextual record. If one exists and is demonstrated, this finding is false.

### F2: Index per slot, never average

Fig 1 :19, :22, :13 (quoted in section 0). A global fit near zero with one live narrow feature is a legal state. A disk-integrated spectrum can dilute a surface or seasonal biosignal below the detection threshold while a per-slot residual is live. The world literature corroborates at the level of retrieval assumptions: a recent arXiv listing (Dubey et al., 2026) is titled *"Demographic inference in exoplanet chemistry is shaped by retrieval assumptions"*, a direct statement that the averaging model shapes the inferred chemistry.

- **Mode:** `general` (structural), `specified` for the observation plan.
- **Status:** `triangulated` (Fig 1 per-slot rule plus the inverse-problem literature on non-uniqueness and noise amplification).
- **Refuter:** a controlled demonstration that the biosignal is recoverable only in the averaged spectrum and is absent from every per-slot residual.

### F3: The three confusions are a union, not one lever

Fig 9 :55 and :57 (quoted in section 1). Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**

- **Mode:** `general`.
- **Status:** `triangulated` (Fig 9 union rule plus the essay's "bundle masquerading as one").
- **Refuter:** one intervention that removes all three confusion conditions at once and leaves a categorically simpler residue. Until that is shown, a single-number "significance" cannot be the verdict (Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**).

### F4: "Instrument noise" is channel failure, not a second source on the same footing

Fig 10 :24: **"the ground does not decay, the channel does"**

Fig 10 :26: **"stale percepts, dropped transients, saturated metrics, pooled readings"**

Fig 10 :42: **"A verifier that can reconstruct the claim cannot verify it."**

This is the figure that governs the instrument-noise half of the question. S_instrument is not a rival hypothesis symmetric with life; it is a failure of the channel that carries the reading. Calibration drift, interpolation errors, telluric residuals, and saturated detectors are all named shapes of channel decay. The Venus phosphine episode is the real-world case: the Nature Astronomy editor's note records *"an error in the original processing of the ALMA Observatory data underlying the work"* and that *"recalibration of the data has had an impact on the conclusions that can be drawn"*; the Wikipedia record adds that *"re-analysis of data with the fixed algorithm do not result in the detection of phosphine."*

- **Mode:** `specified`.
- **Status:** `triangulated` (Fig 10 channel rule plus the independently published retraction record; low overlap between a metalaw and a data-reduction history).
- **Refuter:** a feature that survives independent re-reduction **and** an independent instrument with different systematics at the stated significance. If it does, the channel explanation is refused.

### F5: Refusal before mint: the discrimination is fundamentally negative

Fig 5 :50-52 (amendment, the fifth kind):

> **"The four kinds sort a gap by what is missing. None of them sorts a gap by what is wrong."**

Fig 5 :53: **"refuted: a term we hold is wrong; a term is owed that says so"**

Fig 12 :140: **"A vocabulary that cannot refuse can only accumulate."**

The public definition of the field says the same thing in plain words: a biosignature is a phenomenon *"where all possible abiotic causes of this phenomenon have been eliminated"* (Wikipedia, Biosignature). The order is therefore fixed: refuse S_instrument (F4), refuse S_abiotic (F8), then S_bio is what remains. Formula step 2 agrees: **"REFUTED a term held is false; what is owed is a refusal, not an explanation"**, and a refusal is owed before a mint. Naming "life" before the refusals is the apophenia the figures forbid.

One caveat, recorded not hidden: the refusal uses the unary operator ¬, which Fig 12 :134-136 places **outside** the seven bonds. It is a legitimate operator but is not a bond and does not enter the bond price. This is a product of the figure's own amendment, not a strain.

- **Mode:** `specified` for the procedure, `general` for the refusal-first rule.
- **Status:** `triangulated` (Fig 5 fifth kind, Fig 12 negation rule, Formula step 2, plus the field definition; low overlap between the framework sources and the encyclopedia definition).
- **Refuter:** a positive biosignature claim that survives with no refusal step performed, or a demonstration that elimination of alternatives is not required for a source attribution.

### F6: Line identification is bounded by the held spectral library

Fig 6 :22: **"NOVEL means novel relative to atoms, not to the world."**

Fig 6 :27: **"Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same."**

Fig 8 :32: **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."**

Fig 9 :44: **"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."**

An unidentified band can be a molecule absent from the line list (depth) or nothing (genuine absence); from inside the frame they look the same. More viewing time on the same instrument with the same line lists cannot add an atom. What can add one is an import: a new laboratory spectrum, a new wavelength range, a new instrument, or an in situ sample. Note the instrument rule, Fig 6 :32-33: **"An instrument is not built from a description. It is improved from a worse instrument already returning something."** and **"Nobody specified a telescope from an account of Mars. A wandering point in the sky was already a reading, and every sharper instrument was built on the residual the last one produced."** The residual from the last unresolved band is where the next instrument comes from.

- **Mode:** `general` for idempotence, `specified` for the line-list application.
- **Status:** `triangulated` (Fig 6, Fig 8, Fig 9, plus the Wikipedia inverse-problem result that the solution can be undetermined and that noise is amplified in inversion).
- **Refuter:** an unidentified feature identified purely by more search within the same line list and same wavelength coverage, with no new laboratory measurement or instrument. Also refuted if a non-detection is used as positive proof that no life exists.

### F7: Triangulation requires independence of mechanism, not volume of agreement

Fig 2 :31: **"Independence, between two frames, is how little they draw on the same evidence."**

Fig 2 :35: **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**

Fig 8 :47: **"Independence is one quantity read twice."**

Fig 7 :35: **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."**

Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."**

Two lines produced by one photochemical network are one witness, no matter how many lines there are. Two instruments with different systematics pointed at the same target are two frames. The cost of a false positive is high (a retracted discovery and a spent credibility), so the figure says to buy independence in proportion to that cost. The base-rate literature gives the statistical form of the same warning: *"When the prevalence, the proportion of those who have a given condition, is lower than the test's false positive rate, even tests that have a very low risk of giving a false positive in an individual case will give more false than true positives overall."* A 15-sigma single line against a large library of possible abiotic backgrounds is not automatically a verdict.

- **Mode:** `specified`.
- **Status:** `triangulated` (Fig 2, Fig 7, Fig 8 plus the statistics literature; low overlap between the metalaw and screening statistics).
- **Refuter:** two apparently independent confirmations shown to share a common cause (same telluric correction, same line list, same stellar model, same reduction code).

### F8: Context is the habitat; a gas has no standing valence

Fig 11 :49: **"An actor's valence is relative to the residual, not a property it carries."**

Fig 11 :51: **"No standing list of good actors survives a change of residual."**

Fig 11 :39: **"capability is a property of agent-and-habitat, never of the agent alone"**

Fig 11 :43-44: **"The habitat is enumerated, never composed."** **"List everything in contact with the residual, then what is in contact with those, and outward until the cascade stops mattering."**

Fig 11 :52-53: **"Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."**

Oxygen is a good biosignature on an Earth-like planet with a Sun-like star and is a false positive where water loss plus UV photolysis can build it abiotically. The gas does not carry its own valence; the habitat fixes it. Enumerate outward: stellar spectrum and UV history, temperature and pressure, co-existing gases (a redox pair is stronger than either gas), surface geology, and second-order cascades. The Wikipedia Biosignature article states the field version: *"when looking at disequilibria, it is important to consider the context of the environment, because not all atmospheric disequilibria has biotic causes."*

- **Mode:** `specified`.
- **Status:** `triangulated` (Fig 11 valence and enumeration plus the field literature).
- **Refuter:** a gas that retains its biosignature status across a documented change of planetary context with all abiotic pathways still available.

### F9: "Life" must pay the description-length bargain

Fig 5 :43-44: **"A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before."** and **"A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly."**

Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**

"Life" invoked to explain a single gas is exactly a term that explains one occasion perfectly; the figure says it fails. A persistent O2 plus CH4 disequilibrium requiring ongoing replenishment across multiple channels is a cheaper term because it constrains more with less. It is a **functional group** in Fig 12's sense: the `state → structure → state` disequilibrium motif fixes the kind of explanation, and the particular gases are the qualifiers.

- **Mode:** `specified`.
- **Status:** `single-source` for the MDL rule (Fig 5 plus Fig 12 functional group, same figure family and same author), corroborated weakly at the field level by the standard disequilibrium argument.
- **Refuter:** a "life" term that beats the best abiotic model in description length on a single feature with no habitat context and no second channel.

### F10: Bits and actions are two currencies and do not add

Fig 12 :125-126: **"A composition costs in two currencies, and they do not add. Bits price the description. Actions price finding out whether it holds."**

Fig 12 :127: **"Neither figure predicts the other, so both are read or the choice is made blind."**

Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

Spectral resolution and line-list completeness are bits. Follow-up telescope time, laboratory experiments, and an in situ sampler are actions. A high signal-to-noise ratio is a **filter for the budget** (which target to observe next), never a witness for the verdict (whether the source is biological). Summing significance and follow-up cost into one score is the exact error the figure names.

- **Mode:** `general` for the two-currency rule, `specified` for the observing application.
- **Status:** `triangulated` (Fig 12 two currencies plus Fig 9 filter/witness).
- **Refuter:** a verdict determined by a single scalar that adds descriptive precision and verification cost, with no separate reading of each.

### F11: For an exoplanet the ground is unreachable; status is candidate, never grounded

Fig 2 :29: **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."**

Fig 2 :37-38: **"It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."**

Formula step 5 (the settle gate, quoted in `THE_FORMULA.md`): **"SETTLE the ground settles it. Verified only by what pays. A gate is not the ground."**

A laboratory spectrum is an anchor for **line identity**, not for **source identity**. A photochemical model is an instrument for plausibility, and instruments can be wrong on the source axis. For an exoplanet there is no sample in hand, so the source question is *unreachable at this budget*, which is a different fact from *underivable in principle* (Fig 8 :40-43). In situ sampling or a source-discriminating observation would move a specific target to `grounded`; nothing short of that does.

- **Mode:** `specified`.
- **Status:** `triangulated` (Fig 2 anchor and axis rule, Formula step 5, Fig 8 budget distinction).
- **Refuter:** a direct measurement of the source at an exoplanet (sample return, in situ probe, or a demonstrated source-discriminating remote observation) that settles S_bio versus S_abiotic for that target.

---

## 4. Pre-registered refuter (written before the conclusion)

The standing instruction says: *"A falsifier written before the run is a design instrument."* The shape claim is refuted, revised, or settled if any of the following fires:

1. A source-discriminating observation or instrument maps a given reading uniquely to S_bio, S_abiotic, or S_instrument with no contextual record (breaks F1).
2. A controlled demonstration that the signal exists only in the averaged spectrum and in no per-slot residual (breaks F2).
3. One intervention clears the entire three-condition union and leaves a categorically simpler residue (breaks F3).
4. The feature survives independent re-reduction **and** an independent instrument with different systematics at the stated significance (breaks F4).
5. Two apparently independent confirmations are shown to share a single cause (breaks F7).
6. A gas retains biosignature status across a documented change of planetary context (breaks F8).
7. A "life" term beats the abiotic model in description length on one feature with no context (breaks F9).
8. A verdict is produced by a single scalar that adds bits and actions (breaks F10).
9. A direct source measurement settles the question for a specific target (F11 fires; status moves to `grounded` for that target only).

If any fires, the shape is revised and the revision is logged here. Until one fires, no part of this may be labelled `grounded`. A verdict of `unreachable at this budget` is a verdict, not a silence.

---

## 5. Recommendation

1. Lead with F1 and F4: the reading does not determine the source, and the instrument half is channel failure, not a rival species of life. Everything else follows from those two.
2. Unbundle before searching (F3). Run D1, D2, D3, D4, and D5 as separate loops and give the compound its own loop (Fig 9 :54).
3. Put refusal before naming (F5). Publish the elimination of S_instrument and S_abiotic before any use of the word "life."
4. Use per-slot residuals (F2) and enumerate the habitat outward (F8), including second-order cascades.
5. Buy independence (F7). Count physical mechanisms and instruments, not spectral lines or agreeable reviewers.
6. Keep bits and actions in separate columns (F10), and keep filters out of the verdict (Fig 9 :60).
7. State the mode on every claim and the honest stop at the ground (F11). *"Unreachable is a verdict, not a silence."*

---

## 6. Canonical usage check, strains, and re-census

Two framework sources were read after the first sections and govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md` says *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* It also says a reading that makes one figure contradict another has misidentified its domain, and that the framework returns *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the instrument limit and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md` step 7 separates SEARCHED (is it in here and unfound?), INWARD (extend an instrument already returning something) and OUTWARD (import from a frame whose closure differs). Underivable-in-principle and unreachable-at-budget are different facts with different instructions.

### Strains, named rather than hidden

- **S_instrument initially treated as a symmetric third hypothesis.** Re-census sent back to Fig 10 :24: the ground does not decay, the channel does. S_instrument is not the same kind of object as S_abiotic or S_bio. It is a failure of the carrier. **Retracted** the symmetric framing; the domains are now separate with different anchors.
- **"More data resolves the source."** First reading of Fig 8 :50-52 as supporting this was wrong. The line says only the *record* separates identical contents; it does not say more of the same content separates them. **Retracted**, replaced by F6 and F7.
- **D3 anchor strain, still live.** The anchor for abiotic plausibility is a laboratory experiment or constrained model. Fig 2 :37-38 warns that an instrument can be wrong on the axis it does not measure, and Fig 4 :30 requires the lab-to-sky round-trip gap R_T to be measured. Laboratory spectra at Earth pressure and temperature do not automatically transfer to a hot exoplanet atmosphere. This strain is recorded, not smoothed.
- **Negation as a sixth bond.** Considered and refused. Fig 12 :134-136 puts ¬ outside the seven bonds; it is a unary operator. F5 uses it as such. No strain after re-census.

### Retraction and confirmation log

| earlier reading | status after canonical check |
|---|---|
| "a biosignature is a line that has been detected" | **Refused.** F1: identical contents from different sources are separated only by the record. The framework returns a shape, not a name. |
| "instrument noise is a third rival hypothesis" | **Retracted at census level.** Fig 10 :24 makes it channel failure, with its own anchor and its own loop. |
| "more spectra will settle the source" | **Retracted.** Fig 8 :32 idempotence; need an import (new instrument, new lab data, in situ), not more of the same. |
| "O2 plus CH4 is the answer" | **Refused as a name.** It survives only as a functional-group example (F9), and its valence is habitat-dependent (F8). |
| "a 15-sigma line is a verdict" | **Refused.** Fig 9 :60: filters for budget, witnesses for verdict. F7 requires independent mechanisms. |
| F1 read as framework-only | **Narrowed.** Fig 8 and Fig 12 triangulate it internally; the source essay corroborates but shares an author, so its weight is declared low. |
| "no ground exists" | **Narrowed to "unreachable at this budget."** Fig 8 :40-43: underivable in principle and unreachable at budget are different facts. In situ sampling would reach it. |
| Absence of a line means absence of life | **Refused.** Fig 9 :44 and Fig 8 :39: *"So a search that finds nothing is never a proof of absence."* |

### Verdict after re-census

The shape survives: a biosignature is a **source attribution**, not a reading, and it is licensed only by a refusal-and-provenance procedure across independent mechanisms, in an enumerated habitat, at a stated mode. The specific enthronement of any gas is refused; the symmetric treatment of instrument noise is retracted; the "more data" claim is retracted. After re-census one strain is live (D3 lab-to-sky anchor, Fig 4 round trip) and one operator caveat is resolved (negation is unary). This is a `specified`, ungrounded result.
