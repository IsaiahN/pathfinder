# Public links and distribution

All links in the first table were fetched and read on 2026-11-23. Links that could not be fetched are listed separately and are not used as evidence. No personal emails were collected.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| BICEP/Keck XIII (BK18) | https://arxiv.org/html/2110.00483 | Published in PRL 127, 151301 (2021). Abstract: "The likelihood analysis yields the constraint r0.05<0.036 at 95% confidence" and "These are the strongest constraints to date on primordial gravitational waves." Introduction: "Inflation makes an additional prediction which has not yet been observed—a background of tensor perturbations, also known as gravitational waves." Reports that lensing sample variance now dominates sigma(r). |
| BK18 data products | http://bicepkeck.org/bk18_2021_release.html | Public bandpowers, r likelihood, bandpasses, component spectra, masks and CosmoMC chains, released under CC BY 4.0. History section documents the 2021 release and the 2023 mask addition. |
| Improved limits using BICEP and Planck | https://arxiv.org/abs/2112.07961 | Tristram et al., PRD 105, 083524 (2022). Abstract: combining Planck PR4 with BK18 and BAO gives "results consistent with r = 0 and tightens the constraint to r < 0.032." An independent analysis group, low overlap with the collaboration paper. |
| CMB-S4 forecast | https://arxiv.org/html/2008.12619 | Abazajian et al. (CMB-S4 Collaboration), ApJ 926, 54 (2022). Design goal: "detecting primordial gravitational waves for r > 0.003 at greater than 5σ, or, in the absence of a detection, of reaching an upper limit of r < 0.001 at 95% CL." Also warns that ab initio forecasts have often not been achieved, motivating scaling from achieved performance. |
| CMB-S4 public status | https://cmb-s4.org/ | States that on 9 July 2025 DOE and NSF decided they could no longer support the CMB-S4 Project; orderly shutdown, document archive preserved, independent Science Collaboration continuing. |
| LiteBIRD delensing forecast | https://arxiv.org/html/2312.05194 | LiteBIRD Collaboration (2023). "The current best bound on the tensor-to-scalar ratio, r, is limited by lensing rather than Galactic foregrounds." Multitracer delensing improves the r constraint by about 15 percent, 20 percent with CMB-S4 added. |
| Primordial Gravitational Waves 2024 | https://arxiv.org/html/2407.02714v2 | Deng Wang, IFIC (CSIC-Universitat de València). Poses "(i) Have PGWs been detected? (ii) If not, what precision of r could be required to find out PGWs?" Notes direct detectors "are not sensitive enough to detect PGWs at high frequencies and can just place upper bounds on the amplitude of PGWs at current stage." |
| Simons Observatory | https://simonsobservatory.org/ | Public science objective: "The Simons Observatory may detect this smoking gun signature if the energy scale of inflation is large enough." Public Contact Us and email-list channels. |
| NASA LAMBDA | https://lambda.gsfc.nasa.gov/ | NASA CMB archive, "a multi-mission NASA center of expertise for cosmic microwave background (CMB) radiation research"; community suggestions encouraged. |
| LIGO Caltech | https://www.ligo.caltech.edu/ | Public alerts, For Scientists section, institutional Contact LIGO Caltech page. |
| JCAP | https://iopscience.iop.org/journal/1475-7516 | Journal scope covers "all aspects of cosmology and particle astrophysics ... theoretical, observational and experimental areas as well as computation and simulation"; public Submit an article link. |
| arXiv submission help | https://arxiv.org/help/submit | Public submission overview, category cross-listing and endorsement guidance; links to the submission endpoint. |
| FQxI | https://fqxi.org | "FQxI catalyzes research and outreach primarily on questions at the foundations of physics and cosmology"; public essay competitions and institutional contact. |
| Library of Babel | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Isaiah N, Oct 2 2026: "You can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Isaiah N, Aug 28 2026: "If several paths create the same behavior, then behavior is a projection with lossy information." Also "An instrument that can't distinguish these cases demonstrates its own inadequacy." |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, Nov 19 2026: "the output is only as good as the validator"; "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action." |
| Decoding Tacit Knowledge | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | Isaiah N, Nov 10 2026: "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." |

## Failed fetches, recorded honestly

- `https://www.mdpi.com/2218-1997/8/9/489` (Galaxies 2022 review on CMB observations and primordial gravitational waves) returned 403. A search snippet was visible but the page was not opened, so it is not cited as a source in the ledger.
- `https://www.aps.org/about/contact` and `https://meetings.aps.org/` returned 403. No APS contact point is listed in `03_public_contact_points.csv`.
- `https://bicepkeck.org/` over HTTPS and `https://www.litebird.jp/eng/` produced transport errors. The HTTP data-products page for BK18 was fetched successfully and is used; the LiteBIRD collaboration paper on arXiv is used instead of the mission site.

A failed fetch is not a source. Where a link appears only as a link on a fetched page, `03_public_contact_points.csv` says so in its notes column.

## Two things in the literature that bear directly on the shape

1. **A threshold is already written into the experiment design.** CMB-S4's forecast is explicitly a pair of outcomes on either side of a comparison: detect for `r > 0.003` at more than 5 sigma, or bound at `r < 0.001`. That is the figure's `⋛` in the vocabulary of an experiment. It is a budget statement, not evidence about the sky (Fig 9 :60, "Use filters for the budget and witnesses for the verdict").
2. **The channel, not the sky, is now the limiting factor.** BK18 says lensing sample variance dominates `sigma(r)`; LiteBIRD 2023 says the bound is limited by lensing rather than Galactic foregrounds and that delensing is critical. This is Fig 10 :24 in instrument language: "the ground does not decay, the channel does." A refuter should target the channel first.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22**, "Only methods cross up. Only head starts come down." Sending a full cosmology argument before anyone has described the threshold sends a recording, not a generator. Lead with the shape and its refuter; offer the links after.
- **Fig 10 :42**, "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28**, "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the threshold shape were true before giving them the paper.
- **Fig 2 :40**, "agreement about the world is worthless when the agreeing frames share an evidence pool." Do not select recipients for likely agreement and do not pool later agreement as corroboration.
- **Fig 2 :42**, "Buy independence in proportion to the cost of being wrong." The cost here is a false absence claim about the early universe, so outside checks are worth buying.

**Recommended order in a reply:** (1) the union split and the threshold shape; (2) the pre-registered refuter and the question "what would you count as a failure?"; (3) record their verdict; (4) only then the links, with the note that the figure text, not the summary, is the authority.

## The two-stage offer

- **Stage 1:** send the residual in effect terms, the shape `r ⋛ sigma(r)`, and the refuter. Ask for a failure, not an endorsement. Record the verdict before any framework material is shown. This is Fig 10 :52, "Bring a characterised residual, never the source", and Fig 2 :45, "Frames range against the ground. They do not negotiate with it."
- **Stage 2, opt-in only:** if curious, offer the figure text and the four world links. A later agreement is never pooled as corroboration (Fig 2 :40).
- **Stage 3:** offer the eight-step formula as a method to reuse. Fig 4 :22 permits sending a method. Each user writes their own refuter before running it and labels the mode of what they get, because the Formula "Direction" section says a frame "cannot check the direction of its own question."

**Hard precondition:** stages 1 to 3 only work if the stage-1 shape survives. The live strain in `01_figure_grounded_audit.md` §8 must remain visible when it is sent.
