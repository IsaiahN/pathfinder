# Public links and distribution

All links below were opened and checked on 2026-11-23, except where a failed fetch is recorded explicitly.

## Verified sources actually opened

| what | URL | verified content |
|---|---|---|
| Archean atmosphere review (PMC open access) | https://pmc.ncbi.nlm.nih.gov/articles/PMC7043912/ | Catling and Zahnle, *Science Advances* 6(9):eaax1420, 2020. Abstract: "They imply surface O2 levels <10−6 times present, N2 levels that were similar to today or possibly a few times lower, and CO2 and CH4 levels ranging ~10 to 2500 and 102 to 104 times modern amounts, respectively." Table 1 gives the pressure and gas constraints with their ages and bases. |
| Som et al. paleobarometry abstract (UWA repository) | https://research-repository.uwa.edu.au/en/publications/earths-air-pressure-27-billion-years-ago-constrained-to-less-than/ | "Our data indicate a surprisingly low surface atmospheric pressure of P atm = 0.23 ± 0.23 (2σ) bar, and combined with previous studies suggests ∼0.5 bar as an upper limit to late Archaean P atm." *Nature Geoscience* 9(6):448-451, 2016. |
| Marty et al. nitrogen isotopes (arXiv abstract) | https://arxiv.org/abs/1405.6337 | "the PN2 of the Archean atmosphere was lower than 1.1 bar, possibly as low as 0.5 bar, and had a nitrogen isotopic composition comparable to the present-day one." Journal reference *Science* 342, 101 (2013). |
| Lehmer et al. micrometeorite CO2 proxy (PMC) | https://pmc.ncbi.nlm.nih.gov/articles/PMC6976288/ | "Our model reproduces the observed oxidation state of micrometeorites at 2.7 Ga for an estimated atmospheric CO2 concentration of >70% by volume." *Science Advances* 6(4):eaay4644, 2020. Explicitly notes that a 1 bar atmosphere with >0.7 bar CO2 and a 0.23 bar atmosphere with >0.16 bar CO2 give similar oxidation. |
| Kasting modeling chapter (Penn State pure) | https://pure.psu.edu/en/publications/modeling-the-archean-atmosphere-and-climate | "The Archean atmosphere was likely a weakly reduced mixture composed predominantly of N2 and CO2, with smaller concentrations of H2, CO, and CH4." *The Atmosphere - History*, Elsevier, 2013. |
| Goldblatt, Eager-Nash and Horne review (arXiv HTML) | https://arxiv.org/html/2409.13105v1 | "the expected pressure range for the Archean, from a fraction of a bar to a couple of bars" and "Greenhouse gas absorption depends on both the logarithm of gas abundance, and on pressure broadening by ambient air, making composition and pressure both relevant." 2024. |
| Ohmoto and Ferry, dissenting composition (Nature) | https://www.nature.com/articles/s41598-026-43917-7 | "we suggest that life evolved sometime during 4.50–3.9 Ga under a reducing atmosphere, rich in hydrogen (H2), methane (CH4), and ammonia (NH3), but very poor in CO2." *Scientific Reports* 16, 14017, 2026. |
| Library of Babel essay | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | "you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question." Isaiah N, 2026-10-02. |
| Recursive Self-Improvement Trap essay | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself." Isaiah N, 2026-11-19. |
| Hard Problem is About Source essay | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | "If several paths create the same behavior, then behavior is a projection with lossy information." Isaiah N, 2026-08-28. |
| Decoding Tacit Knowledge essay | https://adventuresinml.substack.com/p/decoding-tacit-knowledge-why-context | "When contact isn't possible, the best you can send is a plain description of what you'd expect to see, because anyone can check that against the world." Isaiah N, 2026-11-10. |
| Figures README (canonical, GitHub) | https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md | Read locally as `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." |
| Figures folder (GitHub) | https://github.com/IsaiahN/tether/tree/general-agent/figures | Public figures and formula on branch `general-agent`; the local extract `03-FIGURES_TEXT.md` is the citation authority for `Fig N :line`. |

**Failed fetches, recorded rather than hidden.** The Sage chapter page (https://journals.sagepub.com/doi/10.1089/ast.2021.0139) returned HTTP 403; the ADS record for Marty 2013 returned no content; the old Springer submission URL for journal 11014 returned 404, and the ISSOL and EGU pages first tried returned no content. In each case an alternative source was opened or the venue was replaced. The Sage chapter is therefore not cited as a source in the ledger; the ISSOL and Goldschmidt entries in `03_public_contact_points.csv` were verified through the search results and their alternate public pages.

## What in the wider literature bears on this question

1. **Pressure is not a single number.** Three independent instruments give three bounds: vesicle sizes (0.23 ± 0.23 bar at 2.74 Ga), fossil raindrop imprints (<0.52 to 1.1 bar at 2.7 Ga), and N2/36Ar in fluid inclusions (pN2 < 1.1 bar at 3.5 to 3.0 Ga). The Catling and Zahnle table assembles them. Convergence here is weak triangulation, not a consensus formed by quoting one review.
2. **CO2 is the least settled component.** Catling and Zahnle's table spans 0.003 to 0.75 bar across paleosols; Lehmer et al. infer >70 percent by volume from micrometeorite oxidation. The spread is roughly three orders of magnitude, which is the residual that stays live.
3. **Anoxia is the best constrained component.** S-MIF, detrital uraninite, and redox-sensitive metals agree; Catling and Zahnle put ground-level O2 at <10^-6 present atmospheric level before 2.4 Ga. This is a negation, not a measured zero.
4. **The Hadean is a gap, not an absence.** Catling and Zahnle state the rock record is unavailable there. Ohmoto and Ferry compute a reducing atmosphere from mantle redox assumptions instead. Different anchor, same question.
5. **One live conflict.** Ohmoto and Ferry (2026) argue against the CO2-N2 consensus. The figures do not arbitrate; WATSON sends the conflict back to the domain census and records it as `specified`.

## Distribution: offer, do not push

- Fig 4 :22 "Only methods cross up. Only head starts come down." Sending the whole framework before anyone has described a residual sends a recording, not a generator. Lead with the shape claim and its refuter; offer the links after.
- Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- Fig 9 :27-28 "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see in the rock record if the shape claim were true before giving them the article.
- Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool." Do not circulate a list selected for people likely to agree. Select for ground contact, not receptiveness.
- Fig 2 :42 "Buy independence in proportion to the cost of being wrong." The cost here is a wrong prebiotic scenario built on an untested pressure, so seek independent instruments rather than more endorsements.

**Recommended order in a reply:** (1) the shape claim and its pre-registered refuters; (2) ask what they would count as a failure, and record the answer; (3) only then the three links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

1. **Stage 1.** Send the residual, the shape claim and the refuters. Record the recipient's verdict before showing any theory. This is Fig 10 :52 and Fig 2 :45 "Frames range against the ground. They do not negotiate with it."
2. **Stage 2, opt-in only.** If the recipient is curious, offer the figures, the canonical README and the Catling and Zahnle review. Their later agreement is never pooled as corroboration (Fig 2 :40).
3. **Stage 3.** Offer the formula as a method to reuse. Fig 4 :22 permits sending methods. Each user must name their own ground and write their own refuter before running it, because `THE_FORMULA.md` "Direction" says a frame cannot check the direction of its own question.

**Hard precondition:** stages 1 to 3 work only if stage 1 survives. The current stage-1 claim is a shape claim only. If a recipient names a gas or a pressure as a figure derivation, the claim fails and is withdrawn.

## Zip

There is no archive and no send. Hosting the packet on an opt-in download page is preferable to pushing an attachment, because a recipient can decline contact.
