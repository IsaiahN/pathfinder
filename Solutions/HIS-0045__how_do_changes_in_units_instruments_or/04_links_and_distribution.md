# Public links and distribution

All links below were opened on 2026-11-23. Where a direct fetch was blocked and the text came from the public search index, that is stated in the row and in `10_source_ledger.csv`. Nothing here is cited from a page that was not opened or returned by the index.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| BIPM, metre historical perspective | https://www.bipm.org/en/history-si/metre | The 1889 prototype definition was replaced in 1960 by a krypton-86 wavelength definition, then in 1983 by the speed-of-light definition; the original prototype is still kept at BIPM. Content returned by the public search index; the direct fetch returned the site's navigation shell. |
| BIPM, SI Brochure 9th edition, concise summary | https://www.bipm.org/documents/20126/41483022/SI-Brochure-9-concise-EN.pdf/2fda4656-e236-0fcb-3867-36ca74eea4e3 | "Since then the SI has been periodically updated to take account of advances in science and the need for measurements in new domains"; the 2018 revision fixed seven defining constants. |
| BIPM, CIPM joint statement on the 2019 revision | https://www.bipm.org/documents/20126/52505189/SI-statement.pdf/a42e1340-2a8f-7cf4-e5c6-ee090d908200 | "care has been taken to ensure that there will be no perceptible impact on daily life and that measurements made with previous definitions of the units remain valid within their measurement uncertainties." |
| NIST, Meter | https://www.nist.gov/si-redefinition/meter | Full history of the metre: cubit and barleycorn, the 1790s meridian survey, the 0.2 mm shortfall of the prototype, the 1960 krypton definition, the 1983 light definition. Fetched directly in full. |
| WMO Guidelines on Homogenization (2020) | https://dgm-meteo.github.io/wmo-clino/Docs/WMO2020_1245_en_Guidelines%20on%20Homogenization.pdf | "No climate time series should be used without homogenization testing and adjustment, where appropriate"; instrument changes listed as an explicit source of inhomogeneity. |
| Williams, Menne and Thorne (2012) | https://www.ncei.noaa.gov/pub/data/ushcn/papers/williams-etal2012.pdf | Two dominant US temperature biases: time of observation and conversion to electronic resistance thermometers, with opposite signs on maximum and minimum. Text obtained from the public search index; the direct PDF fetch was unsupported by the fetcher. |
| Wijffels et al. (2008), Journal of Climate | https://nora.nerc.ac.uk/id/eprint/526021/1/2008jcli2290.1.pdf | The XBT fall-rate minimum from 1975 to 1985 appears as a 10-year warm period in uncorrected thermosteric sea level estimates. Text obtained via the search index; direct PDF fetch unsupported. |
| Kumar et al. (2025), Cancer Epidemiology Biomarkers & Prevention | https://pmc.ncbi.nlm.nih.gov/articles/PMC12333449 | Full article fetched directly. "Coding changes in disease definitions have influenced trends in bladder cancer epidemiologic outcomes in registries." Tis incidence rose then fell under the original staging variable but declined consistently at 4 percent per year under the harmonised one. |
| Coscarelli et al. (2021), Scientific Reports | https://www.nature.com/articles/s41598-021-97685-7 | Full article fetched directly. At least 60 percent of an apparent Alpine climate signal attributed to instrument inhomogeneities in the cited reconstruction. |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | Fetched directly. Metamerism: one green reading, many possible sources; the spectrometer, not an argument, resolved the source. |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Fetched directly. "the output is only as good as the validator"; "Prestige can fund an action... but it cannot settle an action." |
| Figures and formula, public repository | https://github.com/IsaiahN/tether/tree/general-agent/figures | Figures 1 to 13, Operators and Symbols tables, README and THE_FORMULA on branch `general-agent`. The authority is the figure text, not the summary. |
| Canonical figures README (local copy) | local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\FIGURES_README_canonical.md | "They outrank everything else in the repo"; "a shape, not a name"; "Indiscernibility is not identity." |
| Verbatim figure text (local) | local: C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md | Every `Fig N :line` quote in this folder is checked against this file. |

## Wider literature that bears on the question

Grouped by axis so a reader can see where the evidence pools are. One pool is one witness, however many pages it contains.

- **Units and definitions as engineered conventions.** BIPM metre history, the SI Brochure preface, the CIPM joint statement and NIST Meter. These are one institutional pool. Their common practice is to preserve continuity across a redefinition, which is a direct, real-world instance of "a convention makes no claim about the world" (Fig 10 :46) and of a deliberately measured round trip (Fig 4 :30).
- **Instruments as a decaying channel.** Wijffels et al., Williams et al., WMO guidelines, Hubbard and Lin, Levitus et al. These are one climate-records pool. They show that break detection needs metadata, that a universal correction fails per station, and that correcting a channel changes structure but need not change a long-term slope. That last result is recorded as a boundary on the claim rather than hidden.
- **Definitions as slot re-slicing.** Kumar et al. and the 2001 PubMed abstract on soft-tissue sarcoma are one cancer-registry pool. Reclassification moved cases between stages and changed the apparent trend, and two case definitions gave opposite slopes for the same population.
- **Source discrimination.** *The Hard Problem is About Source* is framework-author material, high overlap with the figures, so it carries no independent witness weight. Its claim that an instrument reads a projection and cannot name the source is a shape corroboration, not a separate witness.

## Distribution rules: offer, do not push

Figure-grounded reasons:

- **Fig 10 :52 "Bring a characterised residual, never the source."** Send the union framing and the refuter first. The full framework before a reader has described a residual is a recording, not a generator.
- **Fig 4 :22 "Only methods cross up. Only head starts come down."** Stage 3 sends the formula as a method, which is permitted. It does not send an answer.
- **Fig 2 :31-32 "Two people reading the same report are not two frames; two instruments pointed at the same thing are."** Do not send the same packet to ten people who read the same review and count the replies as independent checks.
- **Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you."** Do not ask for agreement. Ask what they would count as a failure.
- **Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."** A venue's prestige, a journal's impact factor, or a reviewer's fame is a filter for where to try, never a reason to accept the claim.

**Recommended order in a reply:** (1) the union framing and its refuter; (2) ask what they would expect to see if it were true, and what would count as a failure; (3) record their verdict; (4) only then offer the three links, with the note that the figures, not the summary, are the authority; (5) offer the formula as a method, with the instruction that each user writes their own refuter.

## The two-stage offer

- **Stage 1, before any theory:** the residual and the separator, with the six refuters in `02_outreach_email.md`. The recipient checks the output without holding the framework's interior (Fig 10 :42, "A verifier that can reconstruct the claim cannot verify it.").
- **Stage 2, opt-in only:** if curious, the recipient opens the figures, the BIPM history page and the WMO guideline. Their stage 1 verdict is already recorded; later agreement is never pooled as corroboration (Fig 2 :40).
- **Stage 3, optional:** the formula as a reusable method. Each user states a ground and a refuter for their own problem, because a frame cannot check the direction of its own question (THE_FORMULA.md, "Direction").

## A venue constraint recorded honestly

The public Duotrope listing for *Isis* states "Human-created work only; no AI use allowed", and the journal's own author guidelines contain an AI policy section. This package is a simulated derivation produced with an LLM. Do not submit it to *Isis* as authored research. It may still be used as a private check list or as a question posed through a public contact channel where the recipient is told exactly what the artifact is. Metrologia's guidelines require a short novelty, impact and relevance statement; if the material is ever developed into a real, ground-checked study by a human author, that statement and the open-access charge apply. No submission is made by this agent.

## What is not sent

No personal emails, no purchased list, no bulk send, no opt-out suppression, no request for trust. Hosting and sending are yours to do. Prefer a link that lets a recipient decline contact over an attachment pushed to a list.
