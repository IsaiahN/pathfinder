# Expert verification packet - the Tether on interstellar objects

**What this is:** a claim in a form an astronomer or planetary scientist can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `general` on the structural shape, `specified` on every substantive claim, not `grounded`.** No new measurement is claimed. This is a shape and a route, not a result.

## 1. The claim, in one paragraph

The question "how common are interstellar objects, and what can they reveal about other planetary systems?" is two overlapping conditions with different grounds, so it must be unbundled before either is searched. The count residual is indexed by characterized survey slot, not averaged into one scalar: the density near 0.1 au^-3 comes from the Pan-STARRS detection of 1I, the 2I survey has unpublished depth and area, and the Poisson interval spans orders of magnitude. Because the size-frequency distribution is unconstrained by three objects, "common" is a comparison with no grounded threshold, so the count half is unreachable at this budget and the remedy is more independent survey search rather than a new object class. Scaling a local count to a galactic population carries a round-trip gap that must be measured. The reveal half returns a class of parent systems plus a discriminating instrument, never a unique star: composition and isotope ratios constrain metallicity and formation zone, while different routes can produce the same substance. The ejection mechanisms are enumerated from the literature, and 1I and 2I share a functional group rather than being chemical isomers.

## 2. Three checkable sub-claims

### C1 - framework-internal plus survey-facing; checkable by reading Figure 1 and the survey record

- **Statement:** the abundance residual is per characterized survey slot; aggregating dissimilar surveys into one density hides the signal about where to look. "Common" is a threshold comparison that is not grounded until the size distribution is constrained by more detections.
- **Source, verbatim:** Fig 1 :19 *"The residual is indexed by object slot, not aggregated."* and Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."* Fig 1 :19 and :22 are in `FRAMEWORK/reference/03-FIGURES_TEXT.md`.
- **What to check:** is the 2I discovery survey actually uncharacterized in depth, area and cadence (Jewitt 2024 states this)? Does the Poisson interval on the Oumuamua-like density really span orders of magnitude (Siraj and Loeb 2022)?
- **Refuter:** publish a selection function for the 2I survey and show it yields a density consistent with Pan-STARRS within a small error, or demonstrate a grounded threshold for "common." Either kills this sub-claim.

### C2 - framework-internal scaling; checkable by reading Figure 4 and the mass-budget papers

- **Statement:** the local count to galactic population transform is lossy and non-invertible; its gap `R_T` must be measured, so the mass-budget claim stays `specified`. Fig 4 :30 *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*
- **What to check:** Jewitt 2024 gives roughly 10^4 bodies inside Neptune and roughly 10^26 in the Galaxy from 0.1 au^-3; Siraj and Loeb 2022 give 2 to 50 percent of stellar mass. Do those depend on different size-distribution assumptions? Jewitt et al. 2019 and Raymond et al. 2018 conclude that number density cannot yet be converted to mass density reliably.
- **Refuter:** exhibit an invertible, size-distribution-independent map from number density to ejected mass density; then `R_T` is zero and this sub-claim falls.

### C3 - framework-internal inference limit; checkable by reading Figure 9 and Figure 13

- **Statement:** composition constrains a class of parent systems but does not name one; the reveal is a kind of thing, never the answer itself. Fig 9 :32 *"you get a kind of thing, never the answer itself"* and Fig 13 :121 *"Different routes can arrive at the same substance."*
- **What to check:** Hopkins et al. 2026 predict an ammonia-metallicity correlation and return metallicity *ranges* for 2I and 3I, not identities. Jewitt 2024 notes that streams make a unique origin hard to pin down and that siblings might be needed.
- **Refuter:** identify a composition vector that determines one parent star by measurement, with the discriminator specified and the alternatives excluded. Then the shape-not-a-name verdict is refuted for this domain.

## 3. What is explicitly not claimed

- Not a settled density, and not `grounded`. Every number quoted is a world measurement with stated uncertainty, not a result of this derivation.
- Not a named parent star for any of 1I, 2I or 3I, and not a single dominant ejection mechanism.
- Not a new object class offered against the budget-limited residual. Fig 8 :40-43 is explicit about the cost of a wrong atom.
- Not a claim that 1I and 2I are chemical isomers. They share a functional group, not an atom inventory. See `06_isomers_and_order.md`.
- Not one question. Count and reveal are kept separate and never averaged.
- Not a claim that the framework is the only account of small-body populations, and not a self-validation.

## 4. Provenance

- Question: QM & GR Questions.txt line 255, ID QMGR2-0089, section I.
- Figure text extracted verbatim from Isaiah's 13 SVGs plus the Operators and Symbols tables, in `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read 2026-11-23.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`; metalaw reading: `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`.
- The eight essays by Isaiah N, 2026, catalogued in `05_what_shape_means.md`, all opened 2026-11-23.
- Astronomy sources and accessed dates in `10_source_ledger.csv`.
- This packet compiled 2026-11-23 by a simulated derivation, not a ground reading.

## 5. What would settle it

1. **Count:** a survey with published depth, area and cadence that shrinks the Poisson interval and constrains the size distribution. Rubin/LSST and NEO Surveyor are the named candidates.
2. **Scaling:** a size-distribution-independent count-to-mass map, which would set `R_T` to zero.
3. **Source:** an isotope or volatile-ratio discriminator that separates candidate parent systems at stated precision. Ammonia is the tracer proposed by Hopkins et al. 2026.
4. **Standing falsifiers:** negligible-uncertainty density; invertible count-to-mass map; composition vector naming one star; shared anchor for count and source.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19-22, Fig 4 :30, Fig 9 :32 and Fig 13 :121, four short passages.
2. Check C1 against the actual survey characterization for the second and third interlopers. Is the per-slot objection right?
3. Check C2 against the size-distribution caveat in Jewitt et al. 2019 and Raymond et al. 2018. Is the round-trip gap real?
4. Check C3 against the metallicity ranges in Hopkins et al. 2026. Is a class returned rather than a name?
5. Name one discriminator that would move a case above the union horizon, or say why none is possible.
6. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
