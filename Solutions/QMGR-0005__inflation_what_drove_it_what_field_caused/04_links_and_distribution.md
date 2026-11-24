# Public links and distribution

Fetched and verified 2026-11-23 unless marked as inherited from the exemplar (2026-11-22). Every URL below was actually opened; failures are recorded honestly at the end.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Inflation review (Baumann) | https://arxiv.org/abs/0907.5424 | "TASI Lectures on Inflation", Daniel Baumann, submitted 2009-07-30, revised 2012-11-30. Abstract begins with the initial-conditions problems of FRW cosmology and how inflation solves them, then "how inflation transforms microscopic quantum fluctuations into macroscopic seeds", then "the inverse problem of extracting information on the inflationary era from observations of cosmic microwave background fluctuations". |
| Planck 2018 constraints on inflation | https://arxiv.org/abs/1807.06211 | Planck Collaboration, A&A 641, A10 (2020). Abstract: n_s = 0.9649 ± 0.0042 at 68% CL; r_0.002 < 0.10 tightened with BICEP2/Keck BK15 to r_0.002 < 0.056; "slow-roll models with a concave potential, V'' (phi) < 0, are increasingly favoured by the data"; "two different methods for reconstructing the inflaton potential find no evidence for dynamics beyond slow roll". |
| BICEP/Keck XIII | https://arxiv.org/abs/2110.00483 | BICEP/Keck Collaboration, PRL 127, 151301 (2021). Abstract: all BICEP2, Keck Array and BICEP3 data through 2018; "The likelihood analysis yields the constraint r_0.05<0.036 at 95% confidence"; "These are the strongest constraints to date on primordial gravitational waves." |
| Cosmic inflation reference entry | https://en.wikipedia.org/wiki/Inflation_(cosmology) | States "The detailed particle physics mechanism responsible for inflation is unknown", that the hypothetical field is called the inflaton, the vacuum equation of state p = -rho, the monopole/flatness/horizon motivations, the BICEP2 episode and the energy scale of order 10^15 to 10^16 GeV. Used as a reference synthesis, not as a primary authority. |
| Inverse problem reference entry | https://en.wikipedia.org/wiki/Inverse_problem | Mathematics / engineering, low overlap with cosmology: "An inverse problem in science is the process of calculating from a set of observations the causal factors that produced them"; rank-deficient forward maps give non-unique solutions; inverse problems are typically ill-posed. Corroborates the shape-not-a-name limit from an independent field. |
| FQxI | https://fqxi.org | Mission: "FQxI catalyzes research and outreach primarily on questions at the foundations of physics and cosmology." Public competitions and contact. |
| arXiv submission overview | https://arxiv.org/help/submit | Public "Submit an Article" routes, endorsement and cross-listing guidance. |
| JCAP journal page | https://iopscience.iop.org/journal/1475-7516 | "JCAP covers all aspects of cosmology and particle astrophysics and encompasses theoretical, observational and experimental areas as well as computation and simulation." Open access, public "Submit an article" route. |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Isaiah N, 2026-08-28. "If several paths create the same behavior, then behavior is a projection with lossy information"; the spectrometer, not an argument, discriminated the source. |
| The Library of Babel: Locating The Book of Books | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Isaiah N, 2026-10-02. "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Isaiah N, 2026-11-19. "Prestige must never be allowed to validate an action directly"; "the truly testable output would need to be derived from the real architecture or working the formula yourself." |
| Decoding Tacit Knowledge | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | Isaiah N, 2026-11-10. "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." |
| Canonical figures and formula | https://github.com/IsaiahN/tether/tree/general-agent/figures | Inherited from the exemplar verification (2026-11-22). Public repo, branch `general-agent`, folder `figures/`, with Figures 1-13, Operators and Symbols tables, README.md and THE_FORMULA.md. |

## What the wider literature does in this package

1. **Baumann** supplies the residual in the field's own terms: the initial-conditions problems and the inverse problem of extracting inflationary information from the CMB. It predicts that the shape will be inferred from effects, and it corroborates F1 to F3 of `01_figure_grounded_audit.md`. Overlap with the figures: low (independent physics review).
2. **Planck and BICEP/Keck** are the ground for the testability sub-question. They predict that a binding to a specific potential can be constrained but not uniquely settled by n_s and r, which corroborates F5 and F6. Overlap between Planck and BICEP/Keck: moderate, since BICEP/Keck cross-correlates with Planck maps; they are not fully independent witnesses. They are one evidence pool for the tensor bound, and are recorded as such in `10_source_ledger.csv`.
3. **The inverse-problem reference** is a genuinely low-overlap field (mathematics / geophysics / imaging). Its non-uniqueness result predicts that several microphysical fields can project onto one CMB spectrum. It corroborates the shape-not-a-name limit without sharing the framework's author or evidence pool.
4. **The four essays** share an author with the figures. Their agreement is expected and carries little independent weight; it is recorded as high overlap.

No source conflicted with the figure verdict, so the conflict rule (back to the domain census) was not triggered.

## Failed fetches, recorded rather than hidden

- `https://bicepkeck.org/` returned a transport error on 2026-11-23. The collaboration's arXiv paper was used instead.
- `http://www.scholarpedia.org/article/Inflationary_cosmology` returned 404. Not used.
- The ESA Planck mission page returned 404 at the attempted path. The Planck collaboration paper was used instead.
- `https://www.aps.org/about/contact` and `https://physics.stackexchange.com/questions/tagged/cosmology` returned 403 on 2026-11-23. The APS row in `03_public_contact_points.csv` is inherited from the exemplar's 2026-11-22 verification; Stack Exchange was dropped rather than cited unverified.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22-23** - *"Only methods cross up. Only head starts come down. A recording carried upward looks like knowledge and is a description of one occasion."* Sending the full framework before anyone has described a residual sends a recording. Lead with the shape claim and its refuter.
- **Fig 10 :52** - *"Bring a characterised residual, never the source."* The reader checks the output without holding the framework's interior.
- **Fig 9 :27-28** - *"describe it before you go looking, or any frame you pick will seem to fit"* (see `01_figure_grounded_audit.md` F1). Ask what they would expect to see if the shape claim were true before giving them the article.
- **Fig 2 :35** - *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Do not ask for agreement, and do not select recipients for likely agreement (Seat Map :163).
- **Fig 8 :39** - *"So a search that finds nothing is never a proof of absence."* A refusal to engage, or a null result, is not evidence either way.

**Recommended order in a reply:** (1) the residual by slot, the shape claim and its refuter; (2) ask what they would count as a failure; (3) record that verdict; (4) only then the four links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

- **Stage 1 before stage 2** is Fig 10 :52 and Fig 2 :45: *"Frames range against the ground. They do not negotiate with it."* The recipient checks the output without joining the frame.
- **Stage 2 is opt-in by construction.** Once a recipient has absorbed the theory, their agreement stops being evidence (Fig 2 :40: *"agreement about the world is worthless when the agreeing frames share an evidence pool"*). Their stage-1 verdict must be recorded first and never pooled as corroboration.
- **Stage 3 sends a method**, which is permitted by Fig 4 :22 (*"Only methods cross up. Only head starts come down."*), but each user must state their own ground and write their own refuter. `THE_FORMULA.md` "Direction" says a frame "cannot check the direction of its own question, because the shape a frame is searching for is not a term it holds."
- **Hard precondition:** stages 1 to 3 only work if the stage-1 output survives internal checking. The three checkable sub-claims in `08_expert_verification_packet.md` are the test.

Nothing is sent by this agent. Hosting and sending are the user's to do. Prefer an opt-in download page over a pushed attachment.
