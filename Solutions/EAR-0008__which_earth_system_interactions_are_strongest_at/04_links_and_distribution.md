# Public links, wider literature and distribution

All links below were fetched directly during this run unless the note says otherwise. Web search returned no results for every query attempted in this session, so sources were reached by known public URLs. Fetch failures are recorded rather than hidden.

## 1. Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Indirect human effects, Earth System Dynamics | https://esd.copernicus.org/articles/17/1719/2026/ | Zoller, Lade, Gotangco Gonzales, Fetzer, Chaudhary and Rocha 2026, *Spatial patterns in indirect effects of human activity on climate, land and water*, ESD 17, 1719-1764, DOI 10.5194/esd-17-1719-2026. Full article text and abstract read. Key lines: *"The magnitude of these effects can vary strongly across regions"*; *"any type of aggregation comes at the cost of information loss"*; *"they emphasize the local nature of indirect impacts"*; the two estimation methods *"do not yield quantitatively comparable results"*. |
| Earth System Dynamics journal scope | https://www.earth-system-dynamics.net/ | EGU/Copernicus open-access journal. Scope: *"The overall behaviour of the Earth system is strongly shaped by the interactions among its various component systems, such as the atmosphere, cryosphere, hydrosphere, oceans, pedosphere, and the lithosphere, but also by life and increasingly by human activity."* Interactive public review; AI policy listed. |
| Tipping points in the climate system | https://en.wikipedia.org/wiki/Tipping_points_in_the_climate_system | Public encyclopaedia entry read in full. *"a tipping point is a critical threshold that, when crossed, leads to large, accelerating and often irreversible changes in the climate system."* Nine global core and seven regional impact elements as of September 2022; a cascading-tipping section with a domino analogy. |
| Teleconnection | https://en.wikipedia.org/wiki/Teleconnection | Public encyclopaedia entry. *"Teleconnection in atmospheric science refers to climate anomalies being related to each other at large distances (typically thousands of kilometers)."* ENSO and NAO examples; Walker's original use of correlation between time series; the ENSO-Indian-monsoon anticorrelation *"has weakened in the 1980s and 1990s"*. |
| Biomagnification | https://en.wikipedia.org/wiki/Biomagnification | Public encyclopaedia entry. DDT, eggshell thinning and the decline of bald eagles and peregrine falcons; BMF and TMF as quantified strength measures; a review concluding biomagnification is *"probably more limited in occurrence than previously thought"*. |
| Ecosystem engineer | https://en.wikipedia.org/wiki/Ecosystem_engineer | Public encyclopaedia entry. Jones, Lawton and Shachak 1994, *Organisms as ecosystem engineers*, Oikos 69(3):373-386. *"creates, significantly modifies, maintains or destroys a habitat"*; *"less abundant species can still have a large impact"*; the kudzu and cane-toad introduction cases. |
| Modifiable areal unit problem | https://en.wikipedia.org/wiki/Modifiable_areal_unit_problem | Public encyclopaedia entry. Openshaw 1984 and Gehlke and Biehl 1934. *"the areal units (zonal objects) used in many geographical studies are arbitrary, modifiable, and subject to the whims and fancies of whoever is doing, or did, the aggregating"*; *"the association between variables depends on the size of areal units for which data are reported"*. |
| The Recursive Self-Improvement Trap | https://adventuresinml.substack.com/p/the-recursive-self-improvement-trap | Essay by Isaiah N, opened 2026-11-22. *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* Also the simulated-output caveat quoted in `01`. |
| The Library of Babel: Locating the Book of Books | https://adventuresinml.substack.com/p/the-library-of-babel-locating-the | Essay by Isaiah N, Oct 2 2026, opened 2026-11-22. *"you can cut your search short if the set of books returned is small and descriptive enough that it provides a general shape of the answer that satisfies your question."* Also the bundle warning about a problem that is *"a bundle or conflation of several problems masquerading as one"*. |
| AGU homepage | https://www.agu.org/ | Verified public sections, 24 journals, annual meeting, ESS Open Archive link, public science-policy and outreach channels. |
| EGU homepage | https://www.egu.eu/ | Verified divisions, EGU27 call for abstracts (4-9 April 2027, hybrid), open-access journals, public contact page. |

## 2. Fetch failures, stated honestly

- `https://en.wikipedia.org/wiki/Tipping_point_(climate)` returned 404. It was replaced with `Tipping_points_in_the_climate_system`, which was fetched and read. Nothing from the 404 page is cited.
- `https://ess.oa.agu.org/` returned a transport error on direct fetch. The URL is linked from the verified AGU homepage and is listed in `03_public_contact_points.csv` with a verify-before-use note. No content from that page is cited.
- Web search returned no results for all four queries attempted (`cross-scale interactions ecosystems hierarchy theory`, `tipping elements in the Earth's climate system Lenton PNAS 2008`, `tipping elements in the Earth's climate system`, `hierarchy theory ecology scale processes dominate different scales`). Sources were therefore located by direct URL, and no source was cited from a search snippet.
- The Lenton 2008 PNAS tipping-elements paper was **not** opened. The tipping-element claims in this folder are taken from the fetched encyclopaedia entry and are attributed to that entry, not to the paper.

## 3. Wider literature that bears on the question

1. **Earth-system modelling, the closest field.** Zoller et al. 2026 is on-topic and recent. Its finding that indirect impacts are highly heterogeneous, that aggregation loses information, and that different effect sizes cannot be compared in absolute terms is the strongest world corroboration of F2 and F3. It also states that results are illustrative because they rest on one dynamical vegetation model, a limitation we keep rather than smooth over.
2. **Spatial statistics and geography.** The MAUP entry explains why the same underlying pattern yields different correlations under different areal partitions. This is a genuinely low-overlap witness for the claim that "strongest at continental scale" depends on the partition chosen (`Fig 1 :22`).
3. **Ecology.** The ecosystem-engineering entry gives the mechanism-shape analogue: an actor's impact is a function of habitat modification, not abundance, and introductions are additions to a habitat. This corroborates F1 and F8. This is the source Jones, Lawton and Shachak 1994 built, and the figure itself names that paper (`Fig 11 :65`), so overlap with the figure is high on provenance even though the field is different.
4. **Atmospheric science.** The teleconnection entry gives the global-scale case: a tropical Pacific anomaly correlated with continental rainfall thousands of kilometres away. Its strength is a correlation that has changed over decades, which is a direct example of F1 (valence is not standing) and F5 (cross-scale contact).
5. **Climate science.** The tipping-points entry gives thresholds and cascades at global and regional scale, including the explicit statement that crossing one threshold may trigger another. It corroborates the cascade shape in F5 and the live type question S3 about threshold comparisons.
6. **Ecotoxicology.** The biomagnification entry documents the DDT case the figure itself cites (`Fig 11 :52-54`). High overlap with the figure on the case, but it independently establishes the multi-step contact shape.

**Overlap ledger.** Items 1, 3, 4 and 5 are all Earth/environmental science and share review and data pools; they count as **one broad witness** for the mechanism shape, not four independent ones. Item 2 (spatial statistics) is the genuinely low-overlap corroborator. Items 6 has high provenance overlap with the figure. The two framework essays share the framework author's evidence pool completely and carry no independent witness weight.

No world source conflicts with the figure verdict. The conflict rule was not triggered.

## 4. Distribution: offer, do not push

- `Fig 4 :22`: *"Only methods cross up. Only head starts come down."* Send the separator and its refuter, not a recording of a conclusion. A summary of the framework sent before anyone has described a residual is a recording of one occasion.
- `Fig 10 :42`: *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the architecture before being asked for a verdict has joined the frame being checked.
- `Fig 9 :27-28`: *"describe it before you go looking, or any frame you pick will seem to fit"* (as quoted in `01`; exact wording there is *"describe it before you go looking, or any frame you pick will seem to fit"*). Ask what they would expect to see if the separator were true before giving them the sources.
- `Fig 2 :40`: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"*. A list of recipients selected for likely agreement produces a convention, not corroboration.
- `THE_FORMULA.md` "Direction": a frame cannot check the direction of its own question, so each user must write down what would refute their result before running it.

Recommended order in a reply: (1) the separator and its five refuter conditions; (2) ask what the recipient would count as a failure at their own scale; (3) record their verdict; (4) only then, opt-in, the source links, with the note that the figures, not the summary, are the authority; (5) offer the formula as a method to reuse, with the instruction to write a fresh refuter and state a mode.

## 5. The two-stage offer, expanded to three

1. **Stage 1: validate the output.** The recipient checks the separator against their own ground without holding the framework's interior. This is `Fig 10 :52` *"Bring a characterised residual, never the source"* and `Fig 2 :45` *"Frames range against the ground. They do not negotiate with it."*
2. **Stage 2: opt-in theory.** Stage 2 is opt-in by construction. The stage-1 verdict is recorded before any theory is shown, and later agreement is never pooled as corroboration (`Fig 2 :40`).
3. **Stage 3: the method.** Giving away the formula gives away a generator, not an answer (`Fig 4 :22`). Each user needs a ground per problem and a self-written refuter (`THE_FORMULA.md` "Direction").

**Hard precondition.** Stages 1 to 3 only work if the stage-1 output survives. The output here is a separator and a declared `gap`, not a ranking. If a recipient asks for the list, the honest answer is that the figures do not return one (`Fig 9 :32`).

**Hosting.** Nothing in this folder is sent by this agent. Hosting and sending are yours to do. Prefer an opt-in download page that lets a recipient decline contact over an attachment pushed to a list.
