# Public links and distribution

All links below were fetched on 2026-11-22 unless the note says otherwise. Fetch failures are recorded rather than hidden, and nothing was cited from a page that was not read.

## 1. Framework primaries (local, read this session)

| what | path | verified content |
|---|---|---|
| Verbatim figure text with line numbers | `FRAMEWORK/reference/03-FIGURES_TEXT.md` | All 13 figures plus the Operators and Symbols tables as one line per SVG text element. Every `Fig N :line` citation in this folder was checked against it. |
| Canonical usage rule | `FRAMEWORK/reference/FIGURES_README_canonical.md` | "They outrank everything else in the repo... the quotes are the authority, not this summary." The re-census rule and the "shape, not a name" limit are stated here. |
| The eight-step loop and mode rule | `FRAMEWORK/figures/THE_FORMULA.md` | Steps 1 to 8, the three guarded questions in step 7, the round-trip gap `R_T`, and "Mode. general · specified · grounded. State which." |
| Canonical GitHub figures README | `https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md` | Listed in the exemplar and carried here as the public form of the local canonical rule; not re-fetched this session, marked as such in the ledger. |

## 2. World sources actually fetched (see `10_source_ledger.csv` for full provenance)

| what | URL | verified content |
|---|---|---|
| Percolation critical exponents | `https://en.wikipedia.org/wiki/Percolation_critical_exponents` | "The exponents are universal in the sense that they only depend on the type of percolation model and on the space dimension. They are expected to not depend on microscopic details such as the lattice structure, or whether site or bond percolation is considered." Also the correlation-length divergence `xi ~ |p-pc|^(-nu)` and the statement that the infinite cluster becomes homogeneous beyond the correlation length. |
| Turing patterns, Caltech BE150/Bi250b handout, 2019 | `http://be150.caltech.edu/2019/handouts/21_turing.html` | "Turing patterns do not scale with the size of the organism because the wavelength of the pattern, given by the fastest growing mode, k_min, is independent of system size." Also: if the pattern's wave numbers are larger than the domain size, the domain cannot accommodate it and the homogeneous steady state stays stable. Authors: Justin Bois and Michael Elowitz. |
| Pattern formation mechanisms of self-organizing reaction-diffusion systems | `https://pmc.ncbi.nlm.nih.gov/articles/PMC7154499` | Landge, Jordan, Diego and Muller, Developmental Biology, 2020. "Outside the range of lateral inhibition, another activator peak can then arise leading to the sequential emergence of a stationary periodic pattern." Also the contrast between classical Turing patterns with fixed wavelength and wave-pinning patterns whose dimensions scale with domain size. |
| What determines the spatial extent of landscape effects on species? | `https://link.springer.com/article/10.1007/s10980-015-0314-1` | Miguet, Jackson, Jackson, Martin and Fahrig, Landscape Ecology, 2016. "the strength and direction of effect depend on the size of the area within which the environmental variable is measured. Thus a central objective is to identify the optimal spatial extent within which to measure the environmental variable, i.e. the 'scale of effect'." Of 14 predictions, only 9 had been tested and only 5 had empirical support. |
| Slow Recovery from Local Disturbances as an Indicator for Loss of Ecosystem Resilience | `https://pmc.ncbi.nlm.nih.gov/articles/PMC6954009` | van de Leemput, Dakos, Scheffer and van Nes, Ecosystems, 2017 (issue 2018). "the recovery trajectory depends on: (1) the resilience of the ecosystem at large scale, (2) the dispersal rate of organisms, and (3) the scale of the perturbation." Also the distinction between continuous and patchy landscapes and the role of patch degree. |
| Early Warning Signals of Ecological Transitions: Methods for Spatial Patterns | `https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0092097` | Kefi, Guttal, Brock, Carpenter, Ellison, Livina, Seekell, Scheffer, van Nes and Dakos, PLoS ONE, 2014. "the nature of local ecological interactions, such as the relative scales of competition and facilitation, can strongly influence the type of emerging spatial patterns." |
| The Problem of Pattern and Scale in Ecology | `https://esa.org/wp-content/uploads/sites/94/2022/02/Levin_SA_MA.pdf` and `https://esajournals.onlinelibrary.wiley.com/doi/10.2307/1941447` | Levin, Ecology, 1992. Abstract and excerpts retrieved via the public search index from the ESA PDF and mirrors. Direct PDF fetch returned "unsupported fetched file content type", so the row is marked as search-index read with reduced weight. Key line: "there is no single natural scale at which ecological phenomena should be studied". |
| Public venue pages | `https://santafe.edu/about/contact`, `https://www.santafe.edu/engage/learn/programs/sfi-complex-systems-summer-school`, `https://journals.plos.org/complexsystems/s/journal-information`, `https://link.springer.com/journal/10980/how-to-publish-with-us` | Fetched and read for `03_public_contact_points.csv`. SFI is a public institutional contact route; PLOS Complex Systems and Landscape Ecology are opt-in journal submission routes. |

## 3. Fetch failures and partial reads (honest record)

| URL | result | handling |
|---|---|---|
| `http://www.be150.caltech.edu/2020/content/lessons/20_turing.html` | response too large for the fetcher | Replaced by the 2019 handout version `21_turing.html`, which returned the same lesson text in full. Nothing was cited from the failed page. |
| `https://onlinelibrary.wiley.com/doi/full/10.1111/geb.12233` (Jackson and Fahrig 2015) | HTTP 403 | Not cited as read. Used only as a lead to the primary literature already opened. |
| `https://royalsocietypublishing.org/rsta/article/379/2213/20200272/111980/...` | HTTP 403 | Not cited as read; the Landge et al. PMC paper covers the same mechanism. |
| `https://www.science.org/doi/10.1126/science.abj0359` | HTTP 403 | Not cited as read. |
| `https://en.wikipedia.org/wiki/Critical_slowing_down` | HTTP 404 (no page at that title) | Replaced by the Kefi et al. 2014 and van de Leemput et al. sources, which define the mechanism directly. |
| Levin 1992 ESA PDF | unsupported content type on direct fetch | Abstract and excerpts obtained via the public search index; marked as reduced-weight in the ledger. |

## 4. What the wider literature does and does not do for the verdict

The world sources are secondary corroboration only. Figures decide.

- **Low overlap, genuine corroboration of the shape.** Percolation theory (mathematics/statistical physics) and reaction-diffusion theory (biology/physics) independently show that a local interaction range sets a characteristic length in a chosen model, and that beyond a correlation length or outside a domain that cannot accommodate the mode, the pattern does not grow indefinitely. This supports F2's growth-then-saturation shape, but it is instance-level: it does not supply a figure-derived exponent.
- **Low overlap, persistence.** The spatial-resilience literature (van de Leemput et al., Kefi et al.) shows that recovery and persistence depend on dispersal rate, patch connectivity and perturbation scale, not on size alone. This corroborates F3 and F6.
- **Low overlap, scale as a problem.** Levin 1992 says there is no single natural scale and that patterns unique to a range of scales have unique causes and consequences. This corroborates the union verdict F4 and the refusal to average.
- **Shared pool warning.** The spatial ecology sources share a literature pool (Scheffer, van Nes, Dakos appear across several). Agreement among them is one witness, not several (Fig 2 :40). The percolation and Turing strands are genuinely lower overlap. No world source conflicts with the figure verdict, so the conflict rule was not triggered.

## 5. Distribution rules (offer, do not push)

- **Fig 10 :52:** "Bring a characterised residual, never the source." Lead with the residual, the four shape points and the refuters; offer the figures only after a verdict on stage 1 is recorded.
- **Fig 10 :42:** "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the entire framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27-28:** "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the shape claim were true before giving them the article.
- **Fig 2 :40:** "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Do not select recipients for likely agreement and do not pool later agreement as corroboration.
- **Fig 4 :22:** "Only methods cross up. Only head starts come down." Stage 3 sends the formula as a generator, not an answer.

**Recommended order in a reply:** (1) the shape claim and its four refuters; (2) ask what they would count as a failure and record it; (3) only then the figures link and the ledger, with the note that the figures, not the summary, are the authority; (4) only on request, the formula as a method with the instruction that each user writes their own refuter and states their own mode.

## 6. Ten-minute check for a recipient

1. Read Fig 4 :19-20 and Fig 10 :24. Two short passages.
2. Say whether "the rule is scale-free but the cast changes" matches their own experience of a spatial system.
3. Name one instrument that would measure channel state for the structure they work on, or say why none is available.
4. Send the refutation. A failure is more useful than an endorsement.

## 7. Hosting

This agent cannot host or send anything. Hosting the packet on an opt-in download page is closer to the figure's rule than pushing an attachment to a list, because it lets a recipient decline contact before opening the material.
