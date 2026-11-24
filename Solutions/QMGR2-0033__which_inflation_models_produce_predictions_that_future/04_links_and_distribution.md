# Public links and distribution

## Verified sources actually fetched

All URLs below were opened on 2026-11-23 unless noted. Where a fetch failed, that is stated rather than hidden.

| what | URL | verified content |
|---|---|---|
| LiteBIRD mission paper (arXiv abstract) | https://arxiv.org/abs/2202.02773 | LiteBIRD Collaboration, PTEP 2023, 042F01. Abstract: "The primary scientific objective of LiteBIRD is to search for the signal from cosmic inflation, either making a discovery or ruling out well-motivated inflationary models." Full text section 2.4 (read via the search extract): "different classes of models of inflation make different predictions for r" and "For a given reheating history, a model makes a definitive prediction, corresponding to a point in the n s - r plane." Level 1 requirement: total uncertainty on r of `delta r < 1 x 10^-3`. |
| The decisive future of inflation | https://arxiv.org/abs/1803.09491 | Hardwick, Vennin and Wands, JCAP 05 (2018) 070. Abstract: "a decrease in the measurement uncertainty of the scalar spectral index would be more decisive than a decrease in the uncertainty in the tensor-to-scalar ratio." Published journal reference and authors verified. |
| Back to the features | https://arxiv.org/abs/2210.07028 | Braglia, Chen, Kumar Hazra and Pinol, JCAP 2023 (03) 014. Full abstract and discussion read: "they will also be able to discriminate between models and narrow down the physical mechanism originating them with high statistical significance"; "there do exist exceptional cases in which microscopically very different models predict almost identical features in the power spectrum"; "two models with identical power spectra lead to primordial non-Gaussianities of different amplitudes." |
| Present and future of the most favoured inflationary models after Planck 2015 | https://ar5iv.labs.arxiv.org/html/1509.05419 | Escudero, Ramirez, Boubekeur, Giusarma and Mena, arXiv:1509.05419. Full text read. "the measurement of r will not be enough to discriminate between the models on the (r,n s ) plane"; "disentangling between the various models that lie in the same regions in the canonical (n s ,r) plane might not be straightforward either"; "the (n s ,r) plane appears to be unevenly filled, with a potentially forbidden zone and other highly populated regions in which mostly all the theoretical predictions lie." |
| How much can we learn about the physics of inflation? | https://arxiv.org/abs/1403.6310 | Dodelson, Phys. Rev. Lett. 112, 191301 (2014). Abstract: "Low resolution measurements can pin down the tensor to scalar ratio at the percent level, thereby distinguishing models from one another." |
| Underdetermination of Scientific Theory | https://plato.stanford.edu/entries/scientific-underdetermination/ | Stanford Encyclopedia of Philosophy, first published 2009, substantive revision 2023-04-04. Section 3: contrastive underdetermination is "the possibility that for any body of evidence confirming a theory, there might well be other theories that are also well confirmed by that very same body of evidence"; van Fraassen's empirical equivalents are "alternative theories making the very same empirical predictions, and which therefore cannot be better or worse supported by any possible body of evidence." Low-overlap philosophy corroboration. |
| Simons Observatory | https://simonsobservatory.org/ | Fetched. Lists "Inflation and the early universe" as a science objective: "The Simons Observatory may detect this smoking gun signature if the energy scale of inflation is large enough. SO will also test other signatures of inflation, such as departures from Gaussianity in the distribution of density fluctuations." Public Contact Us block and opt-in email list. |
| CMB-S4 | https://cmb-s4.org/ | Fetched. Carries the 2025-07-09 DOE/NSF statement: "they can no longer support the CMB-S4 Project"; the project is "proceeding with an orderly shutdown" while "The CMB-S4 Science Collaboration, which is an independent organization, is working to develop plans to best support the community." |
| APS submissions server | https://authors.aps.org/Submissions/ | Fetched. Public manuscript submission route for Physical Review journals. |
| FQxI | https://fqxi.org | Fetched. "FQxI catalyzes research and outreach primarily on questions at the foundations of physics and cosmology." Public contact page and essay competitions. |
| Local figure text | local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md | Verbatim figure text with line numbers; authority for every `Fig N :line` citation in this folder. |
| Local formula | local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\figures\THE_FORMULA.md | Eight-step loop, mode rule, inward and outward discipline. |

### Fetch failures, recorded rather than hidden

- `https://academic.oup.com/ptep/article/2023/4/042F01/6835420` returned 403. The same paper was verified through the arXiv abstract at `https://arxiv.org/abs/2202.02773` and the OUP metadata returned by the DOI search.
- `https://litebird.jp/eng/` failed with a transport error. The peer-reviewed mission paper was used instead.
- `https://iopscience.iop.org/journal/1475-7516/page/Author Guide` and the `Preparing your article` deep link both returned 404. The journal homepage is listed; check the current author guide before submitting.
- `https://www.aps.org/about/contact` returned 403. It is marked accordingly in `03_public_contact_points.csv`.

---

## Live correction to the field's instrument set

An earlier draft of this package (and much of the forecast literature) treated CMB-S4 as one of the future experiments that would separate inflation models. The CMB-S4 site now states that DOE and NSF jointly decided on 2025-07-09 that they "can no longer support the CMB-S4 Project", which is in orderly shutdown. The independent Science Collaboration continues. This is a re-census of the habitat (Fig 11 :43: "The habitat is enumerated, never composed."), not a change to the figure verdict. Concretely:

- any claim of the form "future observations will distinguish models X and Y" must now name LiteBIRD, Simons Observatory, or a different available instrument, not CMB-S4;
- older forecast numbers that assumed CMB-S4 carry an extra round-trip gap `R_T`;
- the structural verdict (per-slot residual, overlap collapse, union compound, inward/outward split) is unaffected, because it does not depend on which instrument happens to be funded.

A conflict sends the census back to work; it never flips the figure verdict. That is what happened here.

---

## Three findings in the wider literature that bear directly on this question

1. **Sharper measurements separate models on some slots and not others.** Dodelson (2014) says percent-level `r` would be "thereby distinguishing models from one another". Escudero et al (2015/2016) found that with realistic foreground treatment "the measurement of `r` will not be enough to discriminate between the models on the `(r,n_s)` plane". These are not a contradiction: they are answers at different achievable resolutions and with different foreground assumptions, exactly the `R_T` that Fig 4 :30 requires to be measured.
2. **The decisive slot may not be the one funded.** Hardwick, Vennin and Wands (2018) found `n_s` precision more decisive than `r` precision for single-field model selection, even though `r` is the more "fundamentally attractive" observable to theorists. Fig 6 :31: "Neither answer tells you much about the other. Run them as two tracks, and never read one against the other."
3. **Identical power spectra do not imply identical models.** Braglia et al (2023) found exceptional cases where "microscopically very different models predict almost identical features in the power spectrum", but "two models with identical power spectra lead to primordial non-Gaussianities of different amplitudes". This is Fig 8's surplus on a second slot, and the metamerism point from *The Hard Problem is About Source*: "An instrument that can't distinguish these cases demonstrates its own inadequacy."

---

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22-23** - "Only methods cross up. Only head starts come down." Sending the full architecture before anyone has described a residual sends a recording, not a generator. Lead with the criterion and the refuter; offer the links after.
- **Fig 10 :42** - "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the whole framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28** - "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the criterion were true before giving them the article.
- **Seat Map :163** - "High correlation is disqualifying for a verdict and efficient for a convention." A mass send selected for people who already agree produces a convention, not corroboration.

**Recommended order in a reply:** (1) the criterion and its refuter; (2) ask what they would count as a failure, and record it; (3) only then the links, with the note that the figures, not the summary, are the authority.

## The two-stage offer (with an optional third stage)

1. **Validate the output first.** Ask the recipient to check the four points in `02_outreach_email.md` against their own knowledge of CMB observables and instrument forecasts. Their verdict is recorded before any framework is shown.
2. **Opt-in only.** If they are curious, offer the figure text and the three cosmology papers above. Their later agreement with the framework is never pooled as corroboration, because by then they hold the interiors (Fig 2 :40).
3. **Method reuse, optional.** The formula is a generator, so giving it away does not give away an answer (Fig 4 :22). Each user must write down what would refute their result before running it and state the mode of what they get, because a frame "cannot check the direction of its own question" (`THE_FORMULA.md`, "Direction").

**Hard precondition:** stages 1 to 3 only work if the stage-1 output survives. If a referee shows that the per-slot criterion fails, or that identical prediction vectors can be separated by a calibrated instrument, stop and retract before sending stage 2.

## Hosting

This agent does not send anything. Hosting the packet (Drive, Dropbox, a repo release) and sending the link is for the parent session. If hosted, prefer a link that lets a recipient decline contact; an opt-in download page is closer to the figure's rule than an attachment pushed to a list.
