# Expert verification packet — the Tether on cloud representation in climate models

**What this is:** a claim in a form a climate modeler or cloud observer can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the sub-claims, `general` on the structural shape, not `grounded`.** No measurement is claimed by this derivation. It states what would have to be measured.

**Status:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the question it reports on.

## 1. The claim, in one paragraph

Why models differ in representing clouds is a union of at least four overlapping conditions: different closures inside each model, different instrument reach across the cloud-to-grid scale membrane, different conventions about what counts as a match, and observational underdetermination of the SST pattern effect and aerosol forcing. The residual is indexed per model and per cloud regime, not averaged into a multimodel mean. Cloud radiative effect is settled by a non-updating measurement (satellite flux and active-sensor profile), not by agreement among models or by reanalyses built with model parameterizations. Two schemes holding the same cloud variables can differ by the typed bond between them, so matching net cloud radiative effect does not establish that the clouds are right: compensating errors can cancel in the flux. What is owed is a source-discriminating instrument, a fixed objective, and independent anchors. No figure line selects a winning parameterization, so that part is reported as a gap.

## 2. Three checkable sub-claims

### C1 — A flat radiative scalar can hide compensating cloud errors (the strongest claim)

- **Statement:** a model can match top-of-atmosphere net cloud radiative effect while cloud fraction, liquid water path, cloud optical depth and droplet effective radius are biased in opposite-signed ways that cancel. Therefore net CRE cannot rank which model represents clouds best.
- **Source, verbatim:** Fig 12 :5 — *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."* Fig 12 :94 — *"The arrangement is the substance."* Fig 5 :70 — *"A term is settled when the ground pays for it. A term is usable when something can compose over it."*
- **What to check:** is the cancellation real in the observational record? The opened source reports that modelled net CRE and absorbed solar radiation over the Southern Ocean are comparable to CERES, while LWP and effective radius are underestimated by about 20% and 11%, with biases in optical depth and liquid cloud fraction cancelling: Zhao, Wang, Zhao, Dong and Yung, 2022, *Advances in Atmospheric Sciences* 39, 2156 to 2171, "Compensating Errors in Cloud Radiative and Physical Properties over the Southern Ocean in the CMIP6 Climate Models", https://link.springer.com/article/10.1007/s00376-022-2036-z.
- **Refuter:** exhibit a case where matching net CRE across all regimes entails matching the joint distribution of cloud fraction, optical depth, phase and effective radius. If it does, this sub-claim fails and a scalar is sufficient.

### C2 — The spread is a union of conditions with a broken objective link

- **Statement:** the intermodel spread is not one problem with one lever. Four overlapping conditions are live: closure, instrument reach, evaluation convention, and observational underdetermination. Within that union, the chain breaks at the objective (present-day flux versus dCRE/dT), not at the cloud physics.
- **Source, verbatim:** Fig 9 :54 — *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :4-5 — *"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones."* Fig 3 :27 — *"A link with no instrument is not a link that works. It is a link nobody has looked at."*
- **What to check:** does present-day mean-state cloud skill predict cloud-feedback skill? The opened Eos highlight of Zelinka, Klein, Qin and Myers 2022 (*JGR Atmospheres* 127, e2021JD035198) states: *"more skillful simulation of mean-state cloud properties does not guarantee more skillful simulation of cloud feedbacks."* https://eos.org/editor-highlights/cloud-feedbacks-in-cmip6-models-versus-expert-synthesis. If that relation holds in the checker's own work, it supports the broken-link reading.
- **Refuter:** a single intervention removing the whole intermodel spread with no residual regime; or a deployed mean-state metric that reliably selects realistic feedback. Either dissolves the union or moves the break, and the claim must be narrowed.

### C3 — Same variables, different bond: the isomer reading, with an anchor condition

- **Statement:** two GCM cloud schemes over a fixed variable set are **isomers** under Fig 12: same atoms, different typed bond, different radiative substance. Where they share only a few variables they are a **functional group**, not isomers. Any verdict between them requires a non-updating measured anchor; reanalyses and model-derived kernels do not qualify.
- **Source, verbatim:** Fig 12 :117 — *"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* Fig 12 :124 — *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."* Fig 2 :29 — *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*
- **What to check:** pick two CMIP6 schemes with the same cloud variable list. Identify which quantity mediates which in each. Is the difference a different bond (type) or only a different parameter value (degree)? Then name the measurement that could discriminate, and say whether it is independent of the models' own evaluation data.
- **Refuter:** show that the intermodel spread is fully explained by one continuous scalar in a fixed scheme with no change of mediating relation (kills the isomer claim), or exhibit a tuning target independent of all model output and all model-built reanalyses against which models still fail to range separately (kills the anchor condition).

## 4. What is explicitly not claimed

- Not a winning model, scheme, resolution or parameter value. No figure line returns one.
- Not a number for ECS, cloud feedback or aerosol forcing.
- Not that models are converged on the truth, or that their agreement is corroboration. They share code, forcing, evaluation data and tuning targets.
- Not that reanalyses are the ground. They inherit parameterizations.
- Not that resolution alone solves the problem.
- Not that "shape, not a name" forbids naming an already-held binding. It governs missing primitives; a named scheme is a provenanced candidate, not a derivation from the figures.
- Not `grounded`. Nothing here was measured by this derivation.

## 5. Provenance

- Figure text extracted verbatim from Isaiah's 13 figures plus the Operators and Symbols tables: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened 2026-11-22.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`; the loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`; seat rules: `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`.
- Eight essays by Isaiah N, 2026, mapped in `05_what_shape_means.md`; the essay quotations there are carried from the completed exemplar and are marked as not re-opened this session.
- World sources actually opened: Zelinka et al. 2020 (GRL, via LLNL/OSTI); Bock and Lauer 2024 (ACP); Zhao et al. 2022 (Advances in Atmospheric Sciences); Ma et al. 2026 (npj Climate and Atmospheric Science); Eos highlight of Zelinka et al. 2022; Carbon Brief 2021; NCAR Climate Data Guide COSP entry; CFMIP project pages; Stanford Encyclopedia entries on *Scientific Pluralism* and *Models in Science*. Full URLs, quotes, fields, overlap and dates in `10_source_ledger.csv`.
- This packet compiled 2026-11-22.

## 6. What would settle it

A source-discriminating instrument, not another argument. The analogy from *The Hard Problem is About Source*: a spectrometer distinguishes several arrangements that all read green. Here:

1. co-located cloud fraction, LWP, effective radius and phase with radiative closure, to discriminate arrangements producing the same net CRE (CERES, CloudSat, CALIPSO, EarthCARE, in situ);
2. an objective that predicts dCRE/dT from present-day fields, or the admission that feedback must be tested directly against warming;
3. anchor tests with declared dataset overlap and independent active-sensor versus in situ evidence;
4. the five standing refuters in `01` §4, plus a measured non-lossless or lossless cross-scale round trip R_T.

## 7. What an expert can check in twenty minutes

1. Read Fig 12 :5, :94, :117, :124 and Fig 5 :70 (five short passages).
2. Check C1 against one region you know: do cloud fraction, LWP and effective radius errors cancel in net CRE there?
3. Pick two schemes and say whether their difference is a bond (type) or a parameter (degree). Name one measurement that could discriminate.
4. Say whether present-day cloud skill predicts feedback skill in your experience, and what objective you would use instead.
5. Send the refutation. A failure is more useful than an endorsement. Record the verdict before reading any framework material beyond the passages above.

**Status of this packet:** a simulated derivation, internally consistent with the verbatim figure text, not a ground reading. It cannot settle the claim it reports on.
