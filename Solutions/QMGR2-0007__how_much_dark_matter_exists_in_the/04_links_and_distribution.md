# Public links and distribution

All external links below were fetched and read on 2026-11-23. Local framework paths were opened from the project tree.

## Verified sources

| what | URL | verified content |
|---|---|---|
| Small-Scale Challenges to the LCDM Paradigm (Bullock et al.) | https://ned.ipac.caltech.edu/level5/Sept18/Bullock/Bullock1.html | Annual Review of Astronomy and Astrophysics 55:343-387, 2017. Gives the dSph mass-to-light ratios above 1000, the steep halo and subhalo mass functions, the three classic small-scale challenges, the half-light radius mass estimator, and the WIMP free-streaming cutoff near 10^-6 solar masses. |
| Down to the Core: Dark Matter Deviations in Ultra-Faint Dwarf Galaxies (AAS Nova) | https://aasnova.org/2024/11/01/down-to-the-core-dark-matter-deviations-in-ultra-faint-dwarf-galaxies/ | Lexi Gault, 2024-11-01. Reports Sanchez Almeida et al. 2024 ApJL 973 L15: cored dark matter distributions fit six ultra-faint dwarfs better than cusps, so the lowest-mass galaxies may deviate from collisionless cold dark matter. |
| Micro galaxies in LCDM (Errani et al.) | https://arxiv.org/abs/2311.14798 | arXiv:2311.14798, ApJ 968 89, 2024. Heavily stripped remnants "may reach arbitrarily low luminosity"; dark matter distinguishes them from globular clusters by velocity dispersion or tidal resilience. |
| What is a correlated sample worth? | https://callmequant.github.io/notes/effective-sample-size-correlated-sequences | Binh Ho, 2026-10-12, computation notes. Gives the effective sample size and integrated autocorrelation time; positively correlated draws repeat information. A genuinely low-overlap field. |
| The Library of Babel: Locating The Book of Books | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Isaiah N, 2026-10-02. Gives the shape-of-the-answer stopping rule and the proximity vocabulary method. Framework author, high overlap with the figures. |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Isaiah N, 2026-08-28. Metamerism argument: a reading cannot determine its source; the spectrometer settled it. Framework author, high overlap. |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, 2026-11-19. Prestige is not action; an LLM output is only as good as its validator and the truly testable output must be derived from the architecture or the formula. Framework author, high overlap. |
| Verbatim figure text | local: `FRAMEWORK/reference/03-FIGURES_TEXT.md` | Every `Fig N :line` quote in this folder was checked character by character against this extract. |
| Canonical usage rule | local: `FRAMEWORK/reference/FIGURES_README_canonical.md` | "the quotes are the authority, not this summary"; "a shape, not a name"; "Indiscernibility is not identity." |
| The eight-step loop | local: `FRAMEWORK/figures/THE_FORMULA.md` | Mode rule and the three distinct questions SEARCHED, INWARD, OUTWARD in step 7. |

AAS Nova was read through the specific highlight linked above. The venue list in `03_public_contact_points.csv` contains only pages that were fetched successfully; AASTeX and publisher sites that refused automated fetches were left out rather than asserted.

## What in the wider literature bears on this question

1. **The answer is a distribution, not one number.** Bullock et al. 2017 state that the comoving number density of halos rises steeply toward small masses and that substructure is abundant and almost self-similar, with a mass function running down to the low-mass free-streaming scale. This is the world-side counterpart of F1 and F3.
2. **The faintest systems are dark matter dominated, but by how much is measured per object.** Bullock et al. report mass-to-light ratios within the stellar radii exceeding about 1000 in some cases. That is a per-slot reading. It does not license one aggregate number for all faint systems.
3. **The cutoff is microphysical and imported.** Bullock et al. report that collisional damping and free-streaming erase perturbations below about 10^-6 solar masses for typical WIMP candidates, and that warm or sterile-neutrino models suppress structure on galactic scales and smaller. Errani et al. 2024 predict stripped remnants reaching arbitrarily low luminosity. Neither result comes from the figures; both are imports with provenance and a shadow test.
4. **The small-scale problems are separate conditions.** Bullock et al. list missing satellites, cores versus cusps, and too-big-to-fail. AAS Nova 2024 adds cored profiles in six ultra-faint dwarfs, suggesting warm, self-interacting or fuzzy dark matter. One lever will not clear them all (F5).
5. **Correlation is the budget limit, not a verdict.** Binh Ho's effective sample size arithmetic is the low-overlap corroboration of Fig 2 :44. Two reviews quoting the same kinematic compilation are one witness.

No world source was found that conflicts with the figure verdict. The essay sources share an author with the figures, so their agreement is expected and carries little independent weight; that is declared rather than hidden.

## Distribution: offer, do not push

- **Fig 4 :22** "Only methods cross up. Only head starts come down." Sending the full architecture before anyone has described their residual sends a recording, not a generator. Lead with the shape claim and its refuter.
- **Fig 9 :27-28** "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the per-slot shape were true before giving them the framework.
- **Fig 10 :42** "A verifier that can reconstruct the claim cannot verify it." Once a reader has absorbed the interiors, their agreement stops being evidence.
- **Fig 2 :40** "agreement about the world is worthless when the agreeing frames share an evidence pool." No list ranked by receptiveness, no bulk send.
- **Fig 4 :30** "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." Any summary of the figures into a slogan must carry its round-trip gap `R_T`, recorded in `11_audit.md`.

**Recommended order in a reply:** (1) the shape claim and its five registered refuters; (2) ask what they would count as a failure and record the answer; (3) only then, on request, the three local links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

**Stage 1.** Validate the output against the ground. The output is the per-slot shape plus the declared gap on the number. The recipient checks it without holding the framework's interiors.

**Stage 2, opt-in only.** If curious, read the framework that produced it. By Fig 10 :52 "Bring a characterised residual, never the source," the stage-1 verdict must be recorded first, and later agreement is never pooled as corroboration.

**Stage 3.** Offer the eight-step loop as a method to reuse. That is permitted by Fig 4 :22 because a generator is not an answer. Each user still writes their own refuter before running it and states their own mode, because THE_FORMULA.md "Direction" says a frame cannot check the direction of its own question.

**Hard precondition.** Stages 1 to 3 work only if stage 1 survives. The stage-1 claim here is deliberately modest: a shape, a declared strain and a gap. It makes no numerical prediction to fail on, which is why the refuters are stated in terms of figure governance and instrument reach rather than a mass value.
