# Expert verification packet: assumption dependence of cosmological results

**What this is:** a claim in a form a cosmological systematics researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the shape, `general` on the structural figure laws, not `grounded`.** No new measurement is claimed. This is a protocol and a route, not a result.

## 1. The claim, in one paragraph

A reported cosmological result is not a ground reading; it is the output of a channel, and the channel is indexed by assumptions. The checkable claim is that "how much a result depends on assumptions" must be reported as a per-slot displacement map with a registered push test, not as a single scalar. For each assumption (prior width, dataset selection, calibration anchor, nuisance model, model class), hold the recorded observations fixed, push the assumption within an admissible range declared in advance, re-run, and record the displacement and any sign flip. A result invariant under all registered pushes passes an anchor test for that set; a result that flips is carried by that slot. Agreement between analyses counts only when they draw on different evidence, and a robustness claim is a measured round-trip gap `R_T`, not an assumed zero. The framework does not say which slot dominates current results; that is left to measurement.

## 2. Three checkable sub-claims

### C1 - Push-invariance is the anchor test, and it runs per slot

- **Statement:** the recorded measurement is the anchor; the posterior is a frame product. Dependence is discovered by pushing one assumption at a time, not by counting analyses.
- **Source, verbatim:** Fig 2 :29-30: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor."* Also Fig 10 :24: *"the ground does not decay, the channel does"* and Fig 1 :19: *"The residual is indexed by object slot, not aggregated."*
- **Refuter:** register a push set in advance. If a result invariant under all pushes is later overturned by the ground, or a result moved by all pushes is later confirmed by the ground, push-invariance does not track anchoring. A weaker failure is that the admissible range of an assumption cannot be registered because no instrument arbitrates it; that is a `gap`, not a win.

### C2 - A single dependency percentage loses the bond that carries the answer

- **Statement:** prior width, dataset selection, calibration, and model class are overlapping conditions (a union), and a global scalar merges them into the flat-formula error. Isomeric analyses, same ingredients and different pushed slots, are different substances.
- **Source, verbatim:** Fig 12 :5: *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."* Fig 12 :117: *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*
- **Refuter:** exhibit a dependency measure unchanged when two slots are merged and a third is split, or invariant when the pushed bond is swapped (prior changed to calibration) while the displacement is held fixed. If a downstream reader's prediction does not change, the bond carries no information and this sub-claim fails.

### C3 - Robustness is a measured round trip, and agreement needs independence

- **Statement:** the gap between a baseline result and its full re-run under an admissible alternative is `R_T` and must be reported. Two analyses sharing a dataset, calibration zero point, or likelihood are one witness.
- **Source, verbatim:** Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."* Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool"* Fig 2 :31: *"Independence, between two frames, is how little they draw on the same evidence."*
- **Refuter:** show a full alternative-prior re-run returning the baseline result exactly for every registered slot (`R_T = 0`), or show that removing one of two "independent" confirmations never changes a conclusion across a registered sample because they share an input. Either breaks this sub-claim.

## 3. What is explicitly not claimed

- Not a global dependence percentage, and not a claim that a particular fraction of any current result is assumption driven.
- Not that the Hubble tension is a systematic, or that dark energy does not evolve, or that LCDM is wrong.
- Not that any one assumption slot dominates current results. That is a `gap` in this derivation, not a verdict.
- Not a ranking of researchers, and not a list of people likely to agree. Prestige is excluded from evidence.
- Not `grounded`. The numbers cited from cosmology papers are their authors' published claims, not results of this derivation.

## 4. Provenance

- Residual and derivation: `01_figure_grounded_audit.md`, sections 0 to 6, this session.
- Figure text: local canonical `FRAMEWORK/reference/03-FIGURES_TEXT.md`, checked verbatim before use.
- Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`.
- World sources actually opened and quoted, with author, venue, year and accessed date: Planck 2018 VI (arXiv:1807.06209), DESI 2024 VI (arXiv:2404.03002), Riess et al. 1998 (astro-ph/9805201), Freedman et al. 2019 (arXiv:1907.05922), Verde, Treu and Riess 2019 (arXiv:1907.10625), Di Valentino et al. 2020 (arXiv:2008.11284), Heavens et al. 2017 (arXiv:1704.03467), Hu and McEwen 2026 (arXiv:2601.15132), Yang et al. 2026 (arXiv:2606.30504), Regnault 2026 (arXiv:2611.26192), Cheshire et al. 2026 (arXiv:2611.26864). Full ledger: `10_source_ledger.csv`.
- Essays opened directly: *The Recursive Self-Improvement Trap* (2026-11-19) and *The Hard Problem is About Source* (2026-08-28). The other six of the eight were not reopened this session.
- Packet compiled 2026-11-23.

## 5. What would settle it

1. **Push table:** publish baseline and pushed results per slot with the admissible ranges registered before the outcomes. Yang et al. 2026 show that different summaries of one posterior respond differently to a prior change, so declare the summary too.
2. **Anchor chain:** identify which quantity is the recorded measurement and which is derived. Freedman et al. 2019 show a calibration-anchor swap moving the result between Planck and SH0ES.
3. **Independence provenance:** state data set, calibration program, and pipeline for each confirming analysis. LEMAITRE (Regnault 2026) is a designed example of independence on all three.
4. **Measured gap:** report what fraction of a full re-run each cheap robustness shortcut recovers. The 17 percent in Yang et al. 2026 is a worked `R_T`.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :19, Fig 2 :29-31, Fig 4 :30, Fig 9 :55, Fig 10 :24, Fig 12 :5 and :117. Seven short passages.
2. Check C2 against a sensitivity table you know: are the prior-width, sample-choice, and calibration results reported as separate rows, or merged into one spread?
3. Name one pair of "independent" confirmations in the literature you know and say whether they share a calibration or a likelihood.
4. Name one cheap robustness shortcut and estimate what fraction of a full re-run it actually recovers.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
