# Public links and distribution

All external links below were fetched and read on 2026-11-23. Local framework files were read from the workspace. Provenance for each is in `10_source_ledger.csv`.

## Verified sources

| what | URL | what was verified in it |
|---|---|---|
| Hubble's law, including the Hubble tension section | https://en.wikipedia.org/wiki/Hubble_tension | "two major categories of methods, each with high precision, fail to agree"; a table of independent channels (TRGB, H0LiCOW lensing, masers, standard sirens, kilonova); "any such systematic error would need to affect multiple different instruments". |
| In the Realm of the Hubble tension, a Review of Solutions | https://arxiv.org/abs/2103.01183 | Di Valentino et al., CQG 38 153001 (2021). Abstract: "The high precision and consistency of the data at both ends present strong challenges to the possible solution space". |
| Carnegie-Chicago Hubble Program VIII, TRGB distance scale | https://arxiv.org/abs/1907.05922 | Freedman et al., ApJ (2019). Abstract: "The TRGB method is both precise and accurate, and is parallel to, but independent of the Cepheid distance scale." It still uses HST imaging, an LMC distance modulus and Type Ia supernovae, so "independent" and "overlapping" are both true at different rungs. |
| The Pantheon+ Analysis: Cosmological Constraints | https://iopscience.iop.org/journal/0004-637X | Brout et al., ApJ 938 110 (2022). Abstract: "increased sample size from the addition of multiple cross-calibrated photometric systems of SNe" and "systematic uncertainties in the use of SNe Ia along the distance ladder comprise less than one-third of the total uncertainty in the measurement of H0". |
| Design effect / effective sample size | https://en.wikipedia.org/wiki/Effective_sample_size | "The effective sample size, defined by Kish in 1965, is calculated by dividing the original sample size by the design effect." Also: Deff greater than 1 arises with "cluster sampling (such as when there is correlation between observations)" and when "combining results from several studies done by different researchers and/or at different times (i.e., Meta-analysis)". |
| Confirmation (Stanford Encyclopedia of Philosophy) | https://plato.stanford.edu/entries/confirmation/ | Use-novelty section: "by using it for the construction of the theory, its confirmational power becomes 'dried out', so to speak." This is the philosophy-of-science version of using the same evidence twice. |
| Scientific Method (Stanford Encyclopedia of Philosophy) | https://plato.stanford.edu/entries/scientific-method/ | "The degree of this support then depends on the quantity, variety and precision of the supporting evidence." Variety, not count, is the relevant quantity. |
| Eight essays by Isaiah N | https://adventuresinml.substack.com/p/how-intelligence-actually-works and the seven other Substack URLs in `10_source_ledger.csv` | Read 2026-11-23. Used in `05_what_shape_means.md`. All share an author with the figures, so corroboration is weak and overlap is declared. |
| Verbatim figure text (local) | `FRAMEWORK/reference/03-FIGURES_TEXT.md` | Primary. Every `Fig N :line` quote in this folder was checked against it. |
| Canonical usage rule (local) | `FRAMEWORK/reference/FIGURES_README_canonical.md` | "They outrank everything else in the repo" and the framework returns "a shape, not a name". |
| Figures folder, public repository | https://github.com/IsaiahN/tether/tree/general-agent/figures | Public SVGs, branch `general-agent`, including the Operators and Symbols tables. Not fetched in this pass except through the local canonical copies; listed as the public source of the local text. |

## What in the wider literature bears on this question

1. **The word "independent" is used at different rungs.** Freedman et al. call TRGB independent of Cepheids, while the same paper anchors TRGB to HST photometry, an LMC distance modulus and the Carnegie Supernova Project SNe Ia. Brout et al. describe Pantheon+ as adding "multiple cross-calibrated photometric systems of SNe". Cross-calibration is overlap. The figure law that governs this is Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence." The empirical rung-level facts and the figure law agree on the same discriminator.

2. **The statistics is not a metaphor.** Fig 2 :44 names the effective-sample-size correction for correlated observations. The Design effect article gives `n_eff = n / Deff` and notes that combining results from several studies is one of the designs that can require it. Ten analyses on one compilation are fewer than ten independent witnesses.

3. **Reusing evidence dries out its confirming power.** The SEP entry on confirmation, in its use-novelty section, says that a theory shaped by the evidence "never ran any risk of failure" and that the evidence "must not be double-counted". This is the same arithmetic as Fig 2 collapse 2, reached from philosophy of science rather than from survey statistics. The two fields do not share an evidence pool with the figures, so this is genuine low-overlap corroboration of the shape.

4. **Variety, not count, is what support depends on.** The SEP entry on scientific method says support depends on "the quantity, variety and precision of the supporting evidence". Fig 7 :13 says "agreement compounds, evidence does not". Both make the same point about adding more of the same.

5. **The tension survives the overlap check.** Brout et al. report that SNe Ia systematic uncertainties "comprise less than one-third of the total uncertainty in the measurement of H0 and cannot explain the present 'Hubble tension'". This does not decide the tension; it closes one rung-level excuse. It should be cited as the world's own answer to a rung-level question, not as a figure result.

## Distribution: offer, do not push

Figure-grounded reasons:

- Fig 4 :22 "Only methods cross up. Only head starts come down." A summary of the conclusion sent before anyone has described a residual is a recording, not a generator. Lead with the residual, the overlap definition and the refuter.
- Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." A reader who has absorbed the framework before giving a verdict has joined the frame being checked.
- Fig 9 :27-28 "describe it before you go looking, or any frame you pick will seem to fit". Ask what the recipient would count as a failure before giving them the article.
- Fig 2 :40: a list selected for receptiveness manufactures the disqualifying correlation. No mass send, no ranking by likely agreement.

**Recommended order in a reply:** (1) the claim about overlap and independence, (2) the four pre-registered refuters, (3) ask what the recipient would need to see measured, and record the answer, (4) only then the three source links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

- **Stage 1:** send the residual in effect terms, the shape claim and the refuter. Ask what would count as a failure. Record the verdict **before** any framework is shown. Fig 10 :52 "Bring a characterised residual, never the source." and Fig 2 :45 "Frames range against the ground. They do not negotiate with it."
- **Stage 2, opt-in only:** if the recipient is curious, offer the three links. Their later agreement is never pooled as corroboration, because by then they hold the interiors. Fig 2 :40 again.
- **Stage 3:** offer the formula as a method to reuse. Fig 4 :22 permits methods to cross up. Each user must write their own refuter and state their own mode, because `THE_FORMULA.md` "Direction" says a frame cannot check the direction of its own question.

**Hard precondition:** stages 1 to 3 only work if stage 1 survives. Nothing in this folder asserts that it has been checked at the ground. It has been checked for internal consistency only.

## Legal and channel note

No personal email addresses are listed. Every venue in `03_public_contact_points.csv` is public and opt-in or submission-based. GDPR and CAN-SPAM style rules apply to unsolicited outreach in many jurisdictions; public calls for abstracts, journal submission portals and public contact routes avoid that failure as well as the structural one. Nothing is sent by this agent. Hosting and sending are yours to do.
