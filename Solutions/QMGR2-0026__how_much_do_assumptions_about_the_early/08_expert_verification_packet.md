# Expert verification packet - the Tether on CMB estimates and early-universe assumptions

**What this is:** a claim in a form a cosmologist can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `general` on the shape, `specified` on the load-bearing claim. Not `grounded`.** No new measurement is claimed. This is a shape and a bound, not a result.

## 1. The claim, in one paragraph

The CMB tightly measures a ratio, `theta_* = r_s / D_A`, but does not measure the sound horizon `r_s` or H0 directly. To infer H0 you must import `r_s` from an assumed pre-recombination model. Therefore the inferred H0 is a function of (data, model), and early-universe assumptions are the dominant systematic in that inference: the measured ratio is essentially assumption-free while the derived rate moves by enough, under plausible changes, to account for much of the 5 sigma offset from the local ladder. The framework supplies the shape and a bound on the movement; it does not name the missing component and does not claim the tension is solved.

## 2. Three checkable sub-claims

### C1 - framework-internal and physics-facing; checkable against Fig 9 and the Planck paper

- **Statement:** the CMB returns a ratio, not an absolute rate; H0 is conditional on the assumed model.
- **Source, verbatim:** Fig 9 :32 "you get a kind of thing, never the answer itself". Supporting: Fig 9 :30-31 "your words are borrowed too, so describe the effect rather than the cause".
- **World check:** Planck 2018 VI reports "The angular acoustic scale is measured to 0.03% precision, with 100theta_*=1.0411+/-0.0003" and states "Assuming the base-Lambda-CDM cosmology, the inferred late-Universe parameters are: Hubble constant H0 = (67.4+/-0.5)km/s/Mpc". The conditional wording is the point.
- **Refuter:** an extraction of H0 from CMB data that supplies no pre-recombination model and reaches comparable precision.

### C2 - framework-internal; checkable by reading Figures 2 and 6

- **Statement:** `r_s` is imported into the inference frame, so the estimate moves when the assumptions move; the estimate is not an anchor.
- **Source, verbatim:** Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :29-30 "If it moves when you push on it, it is not an anchor."
- **What to check:** the anchor test. Does the Planck-inferred H0 stay fixed when N_eff or an early-dark-energy fraction is varied within allowed ranges? If yes, the claim fails. If no, the inferred value is a frame output, not an anchor.
- **Refuter:** a demonstration that `r_s` lies in the measurement closure, so no import occurs, or that the inferred H0 is invariant under allowed early-universe changes.

### C3 - physics-facing; checkable against the literature

- **Statement:** the size of the effect can be comparable to the observed tension, but it costs new physics that is not yet established; the independent check is a sound-horizon measurement, not another fit.
- **Source, verbatim:** Fig 5 :43-44 "A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before. A term that explains everything by saying nothing fails this, and so does a term that explains one occasion perfectly." Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."
- **World check:** Poulin et al. 2019 find regions where the Planck-inferred H0 "agrees with the SH0ES local measurement" by reducing the sound horizon; Poulin, Smith and Karwal 2023 report "current data remain inconclusive on the existence of an EDE phase"; DESI 2024 VI finds "H0=(68.52+/-0.62) km s-1 Mpc-1" from BAO plus BBN plus the CMB acoustic scale, staying near the low value.
- **Refuter:** a model-independent bound showing no allowed early-universe change can move the inferred H0 by more than a small fraction of 5 to 6 km/s/Mpc, or an independent `r_s` measurement that forces the low H0 without assuming the standard model.

## 3. What is explicitly not claimed

- Not that the CMB measurement is wrong, or that the 0.03% acoustic-scale result is in doubt.
- Not that the Hubble tension is solved. Reachability is not settlement.
- Not that early dark energy, extra relativistic species, or altered recombination is the answer. Fig 13 :134 "It cannot say which primitive is missing, because naming it would mean already holding it."
- Not that the local ladder is free of assumptions; only that its anchor is geometric distances that do not move with pre-recombination physics.
- Not `grounded`. Nothing here was settled by a new measurement.
- Not a derivation of one cosmological model from another, and no new primitive.

## 4. Provenance

- Figure text extracted verbatim from Isaiah's 13 SVGs plus the Operators and Symbols tables, local file `FRAMEWORK/reference/03-FIGURES_TEXT.md`, accessed 2026-11-23.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`, accessed 2026-11-23.
- Eight essays by Isaiah N, 2026, cited in `05_what_shape_means.md`; four opened and quoted this session.
- Planck Collaboration 2018/2020, arXiv:1807.06209; Riess et al. 2022, arXiv:2112.04510; Verde, Treu and Riess 2019, arXiv:1907.10625; Poulin et al. 2019, PRL 122, 221301; Poulin, Smith and Karwal 2023, arXiv:2302.09032; DESI 2024 VI, JCAP 02 (2025) 021. All opened 2026-11-23 and recorded in `10_source_ledger.csv`.
- This packet compiled 2026-11-23.

## 5. What would settle it

A source-discriminating instrument, not a further argument. The analogue is the spectrometer in *The Hard Problem is About Source*: it resolved a many-to-one reading that argument could not.

1. An independent measurement of the sound horizon at decoupling, so `r_s` stops being an imported assumption.
2. A direct, assumption-light H0 from the CMB that does not require pre-recombination physics at comparable precision (this would refute the claim).
3. An invariance test on N_eff / EDE / recombination history (this would refute the claim if H0 stays put).
4. A shared-calibration finding that explains the whole offset as one evidence pool (this would dissolve the "two frames" reading).

## 6. What an expert can check in twenty minutes

1. Read Fig 9 :32, Fig 6 :23, Fig 2 :29-30, Fig 9 :60. Four short passages.
2. Confirm the Planck wording that H0 = 67.4 +/- 0.5 is conditional on base Lambda-CDM, while `theta_*` is 0.03% and model-weak.
3. Confirm that early-universe modifications reduce `r_s` and raise the inferred H0 (Poulin et al. 2019), and note the 2023 review's caveat that the mechanism is not established.
4. Name one instrument or dataset that would measure `r_s` independently, or say why none is possible.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
