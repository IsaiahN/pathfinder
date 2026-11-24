# Public links and distribution

All public links below were fetched on 2026-11-23 unless marked otherwise. Full provenance is in `10_source_ledger.csv`.

## Verified public links actually fetched

| what | URL | verified content |
|---|---|---|
| 2026 review of small-scale constraints | https://arxiv.org/html/2607.28564v2 | "Dark Matter Constraints from Small-Scale Cosmic Structure", Nadler, Rogers and Drlica-Wagner, arXiv:2607.28564v2, 13 Nov 2026. Defines small-scale structure, reviews warm / fuzzy / interacting DM, and states that the strongest lower limits come from MW satellites, stellar streams, lensing flux ratios and high-resolution Lyman-alpha. Notes that dwarf galaxies and stellar streams share systematics while lensing, Lyman-alpha and high-z galaxies have distinct ones. |
| Small-scale challenges review | https://doi.org/10.1146/annurev-astro-091916-055313 | Bullock and Boylan-Kolchin 2017, Annual Review of Astronomy and Astrophysics 55, 343. Names cusp/core, missing satellites and too-big-to-fail, and asks whether baryon physics, DM physics or both are required. |
| PNAS small-scale controversies | https://www.pnas.org/doi/full/10.1073/pnas.1308716112 | 2015 PNAS review. States the Lyman-alpha lower limit is high enough that the dark matter is effectively cold from the point of view of the cusp-core problem, and that WDM on its own does not fix rotation curve shapes. |
| Lyman-alpha as a diagnostic | https://doi.org/10.1093/mnras/stz2188 | 2018 MNRAS paper. Reports that the flux power-spectrum cutoff can be fit with CDM or with about 7 keV sterile neutrinos, and that the DM free-streaming cutoff scales differently with redshift than the thermal cutoff. |
| Very little room for WDM | https://doi.org/10.1103/physrevd.88.043502 | Viel, Becker, Bolton and Haehnelt 2013, PRD 88, 043502. Finds m_WDM greater than 3.3 keV and says there is very little room for free-streaming to solve the small-scale crisis. |
| Weak preference for warmth | https://doi.org/10.1103/physrevd.108.023502 | Villasenor, Robertson, Madau and Schneider 2023, PRD 108, 023502. 1080 hydro simulations; weakly favors WDM near 4.5 keV, and shows the preference depends on the smallest high-k data points. |
| How to constrain WDM with Lyman-alpha | https://doi.org/10.1093/mnras/stab192 | 2021 MNRAS paper. Shows a data-compatible colder reionization history lowers the robust WDM mass bound to 1.9 keV, a measured instance of the model-to-observable round-trip gap. |
| Non-cold and mixed DM | https://arxiv.org/abs/1806.08371 | Murgia, Iršič and Viel 2018, PRD 98, 083540. Reports that a fluid composed of both a warm and a cold component is also in tension with Lyman-alpha at large suppression scales. Directly bears on the "mixture" option. |
| 21 cm and SKA forecasts | https://arxiv.org/abs/2207.03107 | Mosbech, Boehm and Wong 2023, JCAP. Forecasts that 21 cm intensity mapping will constrain WDM, and that distinguishing WDM from interacting DM needs percent-level matter power at z greater than 15. |
| 21 cm WDM signatures for SKA | https://doi.org/10.1088/1475-7516/2015/07/047 | Carucci et al. 2015, JCAP. Forecasts ruling out a 4 keV thermal relic with 5000 hours at z greater than 3. |
| 21 cm filament imaging, a negative result | https://arxiv.org/abs/2609.03649 | 2026 study. Finds that beam smearing erases the intrinsic CDM/WDM filament contrast, so direct filament imaging with SKA-Low is unlikely to discriminate the models. |
| Bayesian evidence and model selection | https://doi.org/10.1016/j.dsp.2015.06.012 | Knuth, Habeck, Malakar, Mubeen and Placek, Digital Signal Processing, 2014. Review of Bayes factors and model selection. Low overlap with the cosmology evidence pool. |
| Model comparison and Occam's razor | https://www.inference.org.uk/mackay/itprnn/ps/343.355.pdf | MacKay 2003, chapter 28. "Simple models tend to make precise predictions. Complex models, by their nature, are capable of making a greater variety of predictions." Low overlap field: statistics / information theory. |
| Shape and source essays | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the and https://adventuresinml.substack.com/p/the-hard-problem-is-about-source and https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap and https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | Fetched this session. Provide the canonical shape-not-a-name rule, the metamerism / source argument, the prestige-not-action rule and the "describe what you would expect to see" contact rule. Framework-author sources, so high overlap with the figures. |

Local files read: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, `Scripts/validate_solution.py`.

## What in the wider literature bears directly on the question

1. **The cutoff has more than one possible source.** The 2018 MNRAS paper shows that Doppler broadening, Jeans smoothing and free-streaming all produce a cutoff resembling the data. This is the metamerism case: one reading, several sources. It is the reason the answer cannot be a name.
2. **The answer is method-dependent in a measurable way.** The 2013 bound (greater than 3.3 keV), the 2021 bound (greater than 1.9 keV under colder reionization histories), the 2023 weak preference near 4.5 keV and the 2026 joint bound (greater than about 10 keV) differ. That spread is the round-trip gap `R_T` between microphysics and observables, not noise to be averaged away.
3. **Baryons and DM temperature are a union, not a list.** Bullock and Boylan-Kolchin 2017 and the 2015 PNAS review both frame the small-scale issues as a question of baryon physics, dark matter physics, or both. Fig 9 :57-58 "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."
4. **The "mixture" option is already constrained.** Murgia et al. 2018 find mixed warm plus cold components in tension with Lyman-alpha for large suppression scales. This is a filter on which mixtures get tried, not a verdict that no mixture exists (Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict").
5. **The next discriminator is an instrument, not a new idea.** The 21 cm forecasts (Carucci 2015, Mosbech 2023) and the negative filament-imaging result (2026) together say which instrument axis can carry the signal and which cannot. Fig 6 :32-33 "Nobody specified a telescope from an account of Mars. A wandering point in the sky was already a reading, and every sharper instrument was built on the residual the last one produced."
6. **Model choice needs an evidence rule.** The statistics sources supply the Occam factor: a complex model (mixed DM with extra parameters) must pay for its complexity. This is the same bargain as Fig 5 :26 "does the new term cost less to state than the confusion it removes?", reached from a low-overlap field.

## Distribution: offer, do not push

- **Fig 4 :22-25** "Only methods cross up. Only head starts come down. A recording carried upward looks like knowledge and is a description of one occasion." Sending the full framework before a reader has described a residual sends a recording, not a generator. Lead with the shape claim and its refuter; offer links after.
- **Fig 10 :42** "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the framework before giving a stage-1 verdict has joined the frame being checked.
- **Fig 9 :27-28** "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the shape claim were true before giving them the article.
- **Fig 2 :39-40** "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." A send selected for people who already agree produces a convention, not corroboration.
- **Fig 10 :59** "an interest in the outcome is unavoidable, an interest in the reading is disqualifying." Declare that this packet is a simulated derivation produced by the same model that wrote it.

**Recommended order in a reply:** (1) the per-slot residual and the shape claim; (2) the pre-registered refuter and the question "what would you count as a failure?"; (3) record their verdict; (4) only then the sources, with the note that the figures, not the summary, are the authority.

## The two-stage offer

1. **Stage 1.** Check the shape claim against the ground. No theory shown, no agreement requested.
2. **Stage 2, opt-in only.** If curious, read the derivation and the figures. Any later agreement is never pooled as corroboration.
3. **Stage 3.** Offer the formula as a method to reuse, with the instruction that each user writes their own refuter and states their own mode before running it.

The hard precondition is unchanged: stages 1 and 2 only work if the stage-1 output survives. If a refuter fires, copy it into `11_audit.md` with provenance and re-evaluate it in the auditor seat.
