# Expert verification packet: overlapping data and "independent" H0 measurements

**What this is:** a claim in a form a cosmologist, statistician or philosopher of science can check in twenty minutes. Mode, derivation and refuters are stated before the conclusion.

**Mode: `general` for the law, `specified` for the pipeline application, not `grounded`.** No measurement was taken. This is a shape and a test, not an H0 value.

## 1. The claim, in one paragraph

The evidentiary value of an agreement between two measurement frames is a function of how little evidence they share, not of how many teams or instruments produced it. Two H0 determinations that draw on a common supernova compilation, calibrator or parallax solution can agree because the shared pool is talking; that agreement is evidence about the pipeline, not independent confirmation of the expansion rate. Genuine corroboration is possible when frames reach the same shape from disjoint evidence, and the published provenance of each rung is the only thing that distinguishes convergence from adoption. The figures cannot say which H0 value is right; that is settled at the ground.

## 2. Three checkable sub-claims

### C1: Framework-internal; checkable by reading Figures 2 and 8

- **Statement:** independence is defined by evidence overlap, and the same quantity decides both whether agreement carries weight and whether the union of two frames has surplus.
- **Source, verbatim:** Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence." Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool". Fig 8 :47 "Independence is one quantity read twice." Fig 8 :50 "corroboration at maximum independence".
- **Refuter:** produce a verbatim figure line in which overlapping evidence increases the information carried by agreement, or show two pipelines with measured and removed shared covariance whose agreement still tracks the ground along an axis neither shares.

### C2: Statistics-facing; checkable against any covariance matrix

- **Statement:** adding analyses that reuse the same data multiplies agreement, not evidence. The framework names this as standard arithmetic, not metaphor.
- **Source, verbatim:** Fig 2 :44 "The effective-sample-size correction for correlated observations is standard in survey statistics and meta-analysis; the collapse is the same arithmetic read as a warning." Fig 7 :13 "agreement compounds, evidence does not". World corroboration, from a non-framework source: Design effect (Wikipedia, accessed 2026-11-23) states "The effective sample size, defined by Kish in 1965, is calculated by dividing the original sample size by the design effect."
- **What to check:** take two published H0 likelihoods, identify the shared covariance terms, and ask whether the combined constraint uses `n` or `n_eff`. If the shared rungs dominate the error budget, the two estimates are fewer than two witnesses.
- **Refuter:** show an ensemble sharing one data set whose aggregate error falls as `1/sqrt(N)` with no covariance penalty, while the shared component remains unchanged.

### C3: Cosmology-facing; checkable against the two ladder papers

- **Statement:** the word "independent" in a paper title does not establish independence at the rung that matters. A TRGB ladder is independent of a Cepheid ladder at the first rung and overlapping at the SNe Ia, HST and LMC rungs.
- **Source, verbatim:** Fig 8 :51 "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them". World corroboration: Freedman et al. 2019 (arXiv:1907.05922) describe TRGB as "parallel to, but independent of the Cepheid distance scale" and in the same abstract anchor it with HST imaging, the LMC distance modulus and the Carnegie Supernova Project SNe Ia sample. Brout et al. 2022 (ApJ 938 110) describe Pantheon+ as adding "multiple cross-calibrated photometric systems of SNe".
- **Refuter:** identify a published pair of H0 estimates with zero shared atoms in their error budgets whose agreement is still fully explained by a common pipeline term. That would make provenance insufficient and C3 false.

## 3. What is explicitly not claimed

- Not an H0 value, not a verdict on new physics, not a calibration error assigned to any team.
- Not that overlapping agreement is worthless. It is evidence about the shared pipeline and can localise a rung-level problem.
- Not that the frameworks' author or any prestigious group is right. Prestige is a filter for the budget, not a witness: Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."
- Not a result of the eight essays or of any world source. Those corroborate; the figures decide. All essays share an author with the figures, so their agreement is one evidence pool.
- Not `grounded`. This packet has been checked for internal consistency against the figures only.

## 4. Provenance

- Residual stated in effect terms: `01_figure_grounded_audit.md` §0. Domain census before figure selection: §1. Figure census and findings: §2 to §3.
- Pre-registered refuter written before the conclusion: `01_figure_grounded_audit.md` §4.
- Figure text: verbatim extract `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read 2026-11-23. Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md`. Loop and mode: `FRAMEWORK/figures/THE_FORMULA.md`.
- World sources, all opened 2026-11-23: Di Valentino et al. 2021 (arXiv:2103.01183); Freedman et al. 2019 (arXiv:1907.05922); Brout et al. 2022 (ApJ 938 110, via IOPscience); Wikipedia Hubble's law / Hubble tension; Wikipedia Design effect; Stanford Encyclopedia of Philosophy entries on Confirmation and Scientific Method. Full metadata and quotes in `10_source_ledger.csv`.
- Compiled 2026-11-23. This is a simulated derivation, not a ground reading.

## 5. What would settle it

1. An independence audit per pair of estimates: list shared atoms and shared covariance, state `rho`, and score agreement with `n_eff`.
2. A per-rung residual table, so a live slot is not averaged away (Fig 1 :19 "The residual is indexed by object slot, not aggregated.").
3. A measurement channel with no shared rung: standard sirens, masers, lensing with independent mass modelling, or cosmic chronometers. Agreement there is high-independence corroboration (Fig 8 :50); disagreement is a real conflict to be settled at the ground.
4. A blind reanalysis, with analysis choices fixed before the combined fit, so the same evidence is not used twice.

## 6. What an expert can check in twenty minutes

1. Read Fig 2 :31, :40, Fig 8 :47, :50 and Fig 7 :13. Five short passages.
2. Check C2 against a covariance matrix you know: does the field count `n` or `n_eff` when rungs are shared?
3. Check C3 against one ladder paper you have read: which rungs are genuinely owned, and which are adopted?
4. Name one channel with disjoint systematics, or say why none is available.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
