# Public links and distribution

All links in the table below were fetched on 2026-11-23 unless noted. A fetch that failed is recorded as failed, not hidden.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Cuspy halo problem (reference overview) | https://en.wikipedia.org/wiki/Cuspy_halo_problem | Defines the discrepancy, quotes de Blok on the cusp result, lists observational diversity, feedback solutions and the McGaugh/Barker/de Blok three interpretations. Also lists primary papers used below. |
| de Blok, "The Core-Cusp Problem" | https://arxiv.org/abs/0910.3538 | Abstract: *"Observations seem to indicate an approximately constant dark matter density in the inner parts of galaxies, while cosmological computer simulations indicate a steep power-law-like behaviour."* Advances in Astronomy 2010, DOI 10.1155/2010/789293. |
| Navarro, Frenk and White, "A Universal Density Profile from Hierarchical Clustering" | https://arxiv.org/abs/astro-ph/9611107 | Abstract: *"We find that all such profiles have the same shape, independent of halo mass, of initial density fluctuation spectrum, and of the values of the cosmological parameters."* ApJ 490, 493, 1997. |
| Pontzen and Governato, "How supernova feedback turns dark matter cusps into cores" | https://arxiv.org/abs/1106.0499 | Abstract: *"fluctuations in the central potential irreversibly transfer energy into collisionless particles, thus generating a dark matter core."* MNRAS 421, 3464, 2012. |
| Oman et al., "The unexpected diversity of dwarf galaxy rotation curves" | https://arxiv.org/abs/1504.01437 | Abstract: *"This is at odds with observed dwarf galaxies, which show a large diversity of rotation curve shapes, even at fixed maximum rotation speed."* Also lists the three possible interpretations, including incorrect inferred mass profiles. MNRAS 452, 3650, 2015. |
| Cooke et al., "Cuspy dark matter density profiles in massive dwarf galaxies" | https://arxiv.org/abs/2203.00694 | Abstract: six ALMA CO dwarfs, *"cuspier profiles than lower mass dwarfs"*, steeper than FIRE and NIHAO predictions under the same slope definition. MNRAS 512, 1012, 2022. |
| Sands et al. summary, FIRE project | https://fire.northwestern.edu/2024/06/18/confronting-the-diversity-problem-the-limits-of-galaxy-rotation-curves-as-a-tool-to-understand-dark-matter-profiles | Abstract: rotation-curve reconstruction can err by 50 percent or more; *"features that contribute to these failures are not always visibly obvious in HI observations"*; apparent diversity can be artificial. |
| Library of Babel essay | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* Also the bundle/conflation warning. |
| The Hard Problem is About Source | https://adventuresinml.substack.com/p/the-hard-problem-is-about-source | *"If several paths create the same behavior, then behavior is a projection with lossy information"*; the spectrometer example; *"It was proven wrong not by argument, but by the arrival of a better instrument."* |
| Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | *"the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself."* Also the prestige/action separation. |
| arXiv submission overview | https://arxiv.org/help/submit | Public submission routes confirmed. |
| JCAP journal page | https://iopscience.iop.org/journal/1475-7516 | Scope covers theoretical, observational, experimental and simulation cosmology; live Submit link. |
| IAU main site | https://www.iau.org/ | Public contact and meetings routes; a guessed Division J deep link returned 404. |
| FQxI main site | https://fqxi.org | Public mission, competitions and contact routes. |

**Failed automated fetches (recorded, not concealed):** `https://academic.oup.com/mnras/pages/Author_Guidelines` and `https://www.aanda.org/for-authors` both returned 403 to the fetch tool, and `https://aas.org/` returned 403. These are real public venues and are listed in `03_public_contact_points.csv` with the verification limitation stated in the notes column, so no one mistakes a tool failure for a confirmed detail.

**Cited but not opened:** one ultra-diffuse galaxy case (AGC 242019) appears as reference 14 on the Wikipedia page and in that page's prose. It was not opened in this session and is not used as a source in `10_source_ledger.csv`. It is mentioned in `01_figure_grounded_audit.md` only as a reference listed on the page, with that limitation stated.

## What the wider literature does for the derivation

1. **It fixes the prediction (NFW 1997).** A universal cusp-like family from collisionless N-body simulations, so F2's closure claim has a real target. NFW is a frame prediction, not a ground reading.
2. **It fixes the observation side as a distribution, not a single number (de Blok, Oman, Cooke).** Constant-density inner regions in many low-mass systems; large diversity at fixed V_max; cuspy slopes in more massive dwarfs. This is the evidence behind F1's per-slot verdict.
3. **It supplies the imported atom with provenance (Pontzen and Governato).** A mechanism exists in a frame whose closure differs from dark-matter-only N-body. Fig 8 :50 says convergent derivation and adopted import look identical in the contents, so the provenance is the whole point.
4. **It supplies a low-overlap check on the anchor (Sands et al.).** This source is about the measuring instrument rather than about halo models. It is the closest thing in this run to a frame that does not share the prediction's evidence pool, and it bears directly on the inference link of Fig 3.
5. **It keeps the refusal option honest (Wikipedia's McGaugh/Barker/de Blok interpretations).** One of the three is that the CDM halo formation picture is wrong. That is the fifth kind of residual in Fig 5, not a new explanatory story.

Overlap: sources 1 to 4 and de Blok, Oman and Cooke all sit in overlapping astrophysics pools (common compilations, common ΛCDM priors, overlapping authorship chains: Navarro and Frenk and White appear on NFW and on Oman et al.). Their agreement is one pool talking, not several witnesses (Fig 2 :40). The Sands/FIRE source is partly independent in subject matter (instrument reconstruction), which is why it is used for the channel strain rather than for the model verdict.

## Distribution: offer, do not push

- **Fig 4 :22:** *"Only methods cross up. Only head starts come down."* **Fig 4 :25:** *"A recording carried upward looks like knowledge and is a description of one occasion."* Sending a full framework before anyone has described a residual sends a recording. Lead with the per-slot claim and its refuter.
- **Fig 10 :42:** *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before giving a verdict has joined the frame being checked.
- **Fig 9 :27-28:** *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what they would expect to see in a cored versus cuspy dwarf before offering the mechanism.
- **Fig 2 :40:** *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*. Do not solicit endorsements from people who will read only papers written from the same prior.
- **Fig 2 :42:** *"Buy independence in proportion to the cost of being wrong."* Cost here includes discarding a working model or building an instrument for the wrong quantity.

**Recommended order in a reply:** (1) the per-slot shape claim and its four refuters; (2) ask what they would count as a failure and what independent measurement they would trust; (3) record their verdict; (4) only then offer the links, with the note that the figures, not the summary, are the authority.

## The two-stage offer, restated

- **Stage 1:** validate the output against the ground. The recipient checks the per-slot claim and the refuter without holding the framework's interior (Fig 10 :52, *"Bring a characterised residual, never the source."*).
- **Stage 2, opt-in:** only after the stage-1 verdict is recorded, offer the figure set and the loop. Later agreement is never pooled as corroboration.
- **Stage 3:** offer the loop as a method to reuse. Each user writes their own refuter and states their own mode, because a frame cannot check the direction of its own question (Formula, "Direction").

**Hard precondition:** stages 1 to 3 work only if the stage-1 output survives. The stage-1 output here is deliberately modest (a per-slot mismatch, a typed comparison, a channel strain, an imported candidate mechanism). It does not claim to decide the dark-matter model. That modesty is what makes it checkable in twenty minutes.
