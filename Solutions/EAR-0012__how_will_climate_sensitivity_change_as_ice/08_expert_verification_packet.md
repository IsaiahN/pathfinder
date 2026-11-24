# Expert verification packet - the Tether on EAR-0012

**What this is:** a claim in a form a climate researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` - not `grounded`.** No new measurement is claimed. This is a shape and a route, not a result.

## 1. The claim, in one paragraph

Climate sensitivity is a comparison between forcing and response, not an entity with a stable value, so "how it changes" means the operands of the comparison change with state, warming pattern and time scale. It should be reported as a vector of per-feedback-slot signed responses, because a global average hides the live residual. Each feedback is a cycle whose output re-enters as input, and the sign of the loop decides whether it amplifies or damps. Ice, clouds, forests and oceans couple through second- and third-order cascades, so the physical response loop and the carbon-cycle loop are a union of overlapping conditions whose verdicts must be kept separate. The measured top-of-atmosphere energy budget, ocean heat content and temperature record settle the sign; model agreement and assessed ranges are instruments and conventions, not anchors. The numeric future trajectory is a `gap` the figures report honestly.

## 2. Three checkable sub-claims

### C1 - framework-internal, checkable by reading Figure 1 and Figure 12

- **Statement:** the residual is indexed per feedback slot, never aggregated, and a feedback is a cycle whose sign decides closure. A scalar global ECS can be near zero while the cloud slot carries a live residual.
- **Source, verbatim:** Fig 1 :19 - *"The residual is indexed by object slot, not aggregated."* Fig 1 :22 - *"Aggregating across slots is how a live signal disappears into an average."* Fig 1 :13 - *"a global R near zero with one live slot residual is a legal state."* Fig 12 :121 - *"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."*
- **Refuter:** an aggregated global sensitivity metric that predicts prospectively and per named slot which slot's residual will move next and by how much; or a documented loop whose output re-enters as input and whose measured sign fails to close or amplify as predicted across a stated state range.

### C2 - climate-facing, checkable by a researcher against the assessed literature

- **Statement:** the sign of the dominant cloud feedback change is known and positive, the net feedback parameter becomes less negative as temperature rises, the magnitude of future feedback changes is not quantified with a likely range, and land and ocean sinks are expected to take up a declining fraction of emissions. These are compatible as per-slot statements and incompatible as one-scalar statements.
- **What to check:** IPCC AR6 WG1 Ch7 reports *"the net cloud feedback is positive (high confidence)"*, *"Due to the state-dependence of feedbacks... the net feedback parameter will increase (become less negative) as global temperature increases"*, and *"there is currently insufficient evidence to quantify a likely range of the magnitude of future changes to current climate feedbacks."* IPCC AR6 WG1 Ch5 reports *"the fraction of emissions taken up by land and ocean is expected to decline as the CO2 concentration increases (high confidence)."* Are those readings faithful?
- **Refuter:** a measured forcing-response relation that is linear and state-invariant across the observed range and across time scales, with no pattern dependence. That would make the effective-versus-equilibrium distinction empty.

### C3 - framework-internal, checkable by reading Figure 11, Figure 9 and Figure 2

- **Statement:** the residual that matters sits two or three steps out in the contact cascade, the two loops form a union that must not be averaged, and ensemble agreement is a budget filter rather than a witness.
- **Source, verbatim:** Fig 11 :52 - *"And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."* Fig 9 :57 - *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."* Fig 2 :40 - *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."*
- **What to check:** does an ice-to-circulation-to-rainfall-to-forest-to-carbon cascade measurably change the residual, and do high-ECS CMIP6 models share enough machinery for their agreement to be one evidence pool? IPCC Ch7: *"some of the high-sensitivity CMIP6 models are less consistent with observed recent changes in global warming and with paleoclimate proxy data than models with ECS within the very likely range."*
- **Refuter:** a sensitivity change accounted for entirely by first-order direct effects with no detectable cascade contribution after a three-step enumeration; or a model ensemble whose agreement is traced to genuinely independent evidence pools and settled by a measurement neither model can move.

## 3. What is explicitly not claimed

- Not an ECS value, a scenario forecast, or a dated threshold crossing.
- Not that any named system is certainly a tipping element.
- Not that the cloud feedback is uncertain in sign. It is assessed positive with high confidence; the gap is the magnitude of its future change.
- Not that model ensembles are worthless. They are instruments and filters; the anchor is outside them.
- Not `grounded`, and not a substitute for CERES, Argo, flux towers or atmospheric CO2 measurements.
- Not a claim that the framework is the only true account of climate sensitivity.

## 4. Provenance

- Figure text extracted verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; canonical usage rule at `FRAMEWORK/reference/FIGURES_README_canonical.md`; formula at `FRAMEWORK/figures/THE_FORMULA.md`.
- Eight framework essays by Isaiah N, fetched 2026-11-22, listed in `05_what_shape_means.md` and `10_source_ledger.csv`.
- IPCC AR6 WG1 chapters 5 and 7, fetched 2026-11-22.
- Lenton et al. 2008, PNAS 105(6):1786-1793, via PMC, fetched 2026-11-22.
- MathisonSlee et al. 2022, Ecology and Society 27(3):8, fetched 2026-11-22.
- EGUsphere listing page, fetched 2026-11-22 (short summaries only, not full preprints).
- This packet compiled 2026-11-22. It is a simulated derivation and carries zero verdict weight until checked from outside this evidence pool.

## 5. What would settle it

A source-discriminating per-slot instrument, not a further argument. From *The Hard Problem is About Source*: an instrument that reads green *"cannot comment on the source"*; the spectrometer resolved it.

1. Does a state-resolving observation discriminate a genuine state-dependence from an averaging artifact, at a stated warming pattern?
2. **Sign Test:** does each slot's feedback output re-enter with the sign the cycle reading predicts, at a stated state and time scale?
3. **Cascade Test:** after enumerating a three-step habitat, is the second- or third-order contribution to the residual still detectable?
4. **Threshold Test:** is there a critical control value per candidate element, and does the same value give the same state on approach and recovery?

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :13, :19, :22 and Fig 12 :121 - four short passages.
2. Check C2 against your own knowledge of the assessed literature: are those four IPCC readings faithful, and is there a state-invariant alternative?
3. Name one observation that would discriminate a genuine state-dependence from an aggregation artifact in the cloud slot - or say why none is possible.
4. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
