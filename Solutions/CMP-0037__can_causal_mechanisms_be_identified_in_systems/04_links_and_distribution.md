# Public links and distribution

Every link in the table below was fetched and read on 2026-11-22. Links that returned an error to an automated fetch were dropped rather than listed as verified; three candidates (a publisher journal page, a causal inference conference site and an archived systems biology journal) are omitted for that reason.

## Verified sources actually fetched

| what | URL | verified content |
|---|---|---|
| Verbatim figure text (local) | `FRAMEWORK/reference/03-FIGURES_TEXT.md` | All 13 figures plus Operators and Symbols tables, one SVG text element per line. Every `Fig N :line` citation in this folder was checked against it. |
| Canonical figures README (local) | `FRAMEWORK/reference/FIGURES_README_canonical.md` | The figures outrank the docs and code; quotes are the authority; the framework returns a shape, not a name; indiscernibility is not identity. |
| The formula (local) | `FRAMEWORK/figures/THE_FORMULA.md` | Eight-step loop, three guards as a product, mode rule, direction discipline, SEARCHED / INWARD / OUTWARD. |
| Disentangling Causal Effects from Sets of Interventions | https://proceedings.neurips.cc/paper_files/paper/2022/hash/b29ec434e049fb96f3c4245a405ee976-Abstract-Conference.html | NeurIPS 2022, Jeunen, Gilligan-Lee, Mehrotra, Lalmas. Abstract page fetched. Directly states that disentangling single from jointly applied interventions is hard because simultaneous interventions interact, and that identification is not generally possible but is provable under stated structural assumptions. |
| Learning soft interventions in complex equilibrium systems | https://proceedings.mlr.press/v180/besserve22a.html | UAI 2022, Besserve and Schölkopf, PMLR 180:170-180. Abstract and citation fetched. States that complex systems contain feedback loops described as cyclic causal models and that intervening can give counterintuitive effects not inferable from graph structure. |
| Keystone Species | https://www.nature.com/scitable/knowledge/library/keystone-species-15786127 | Wagner, Nature Education Knowledge 3(10):51, 2010. Full article fetched. Paine's starfish removal changed many connected parts at once relative to an undisturbed control; species diversity fell from fifteen to eight within a year. |
| QCA and causality in complex systems | https://bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-021-10926-2 | Hancock, Petticrew, Thomas and Green, BMC Public Health 21:877, 2021. Full article fetched. Reports equifinality (different paths to the same outcome), causal asymmetry, and a stated limitation for identifying feedback loops and tipping points in complex adaptive systems. |
| Complex intervention modelling and adaptation | https://link.springer.com/article/10.1186/s12874-016-0149-8 | Greenwood-Lee, Hawe, Nettel-Aguirre, Shiell and Marshall, BMC Medical Research Methodology 16:51, 2016. Full article fetched. States that multi-component interventions act independently and interdependently, making the responsible components hard to identify, and that adaptation makes impact deviate from design. |
| Causal Discovery in Action: Learning Chain-Reaction Mechanisms from Interventions | https://arxiv.org/html/2603.22620 | Panayiotou and Şimşek, arXiv:2603.22620, 2026. Full text fetched. States that causal structure may not be identifiable even from interventional data without structural assumptions; observational heuristics fail with delayed or overlapping effects; the identifiability proof assumes a directed tree where each object has at most one direct trigger. |
| Causal Models, Supplement 2: The do-calculus | https://plato.stanford.edu/entries/causal-models/do-calculus.html | Hitchcock, Stanford Encyclopedia of Philosophy. Full supplement fetched. States the three rules, notes that the calculus is complete for post-intervention probabilities expressible as conditional probabilities, and that weaker calculi require less structural knowledge. |
| NeurIPS 2026 Call for Papers | https://neurips.cc/Conferences/2026/CallForPapers | Fetched. Interdisciplinary call including probabilistic methods, AI and network science, and analysis of method limitations. |
| JMLR homepage | https://www.jmlr.org/ | Fetched. Open-access forum; recent volumes include causal inference and unknown-intervention structure learning. |
| Frontiers in Complex Systems | https://www.frontiersin.org/journals/complex-systems | Fetched. Sections include Complex Networks and Complex Systems Theory; submission route present. |
| Santa Fe Institute | https://www.santafe.edu/ | Fetched. Public contact and events present; no personal email used. |
| Institute for the Study of Complex Systems | https://complexsystems.org/ | Fetched. Public Contact page present; no personal email used. |

## What the wider literature bears on this question

1. **Joint interventions interact.** Jeunen et al. (NeurIPS 2022) write that *"Disentangling the effects of single interventions from jointly applied interventions is a challenging task"*, especially because *"simultaneously applied interventions can interact."* Their result is conditional: identification fails in general and is proved under a specified structural model. This corroborates F3 (union before single mechanism) and F8 (identification is conditional on structure and assumptions). Overlap with the other causal-methods sources: high, all draw on the same structural causal model literature.

2. **Feedback defeats graph-only reasoning.** Besserve and Schölkopf (UAI 2022) write that *"Complex systems often contain feedback loops that can be described as cyclic causal models"* and that interventions *"may lead to counterintuitive effects, which cannot be inferred directly from the graph structure."* This corroborates F7 (the vocabulary must express a cycle) and the Fig 12 :121 line that a chain cannot close by construction. Low overlap with ecology and public health; moderate overlap with the other causal-methods sources.

3. **A controlled one-part change can reveal a cascade, with a control.** Wagner's account of Paine's experiment records that *"Paine observed dramatic changes in the temperate intertidal ecosystem after Pisaster was artificially removed compared with the control area that remained unchanged in its species number and distribution."* The intervention was one removal; the response propagated through competition for space to algae and limpets several steps out. This corroborates F4 (enumerate outward) and F5 (an unchanged control is a candidate anchor). Genuinely low overlap with the causal-methods pool.

4. **Multiple paths to one outcome, and a stated blind spot.** Hancock et al. (2021) describe QCA as a method that *"acknowledges that different paths can lead to the same outcome"* and report a limitation for *"identifying unintended consequences, tipping points, and/or feedback loops in complex adaptive systems."* This corroborates F1 (same reading, different arrangement) and F7. Low overlap with the physics and ML pools.

5. **Adaptation deviates from design.** Greenwood-Lee et al. (2016) state that interventions *"may consist of multiple components that act both independently and interdependently, making it difficult to identify the components or combinations of components (and their contexts) that are important mechanisms of change"*, and that impact may deviate from intention as agents adapt. This corroborates F6 (isolation substitutes a habitat) and F4. Low overlap with the causal-methods pool.

6. **Identifiability is a structural assumption, not a default.** Panayiotou and Şimşek (2026) write that *"the underlying causal graph may not be identifiable even from interventional data"* without strong structural assumptions, and that observational heuristics fail *"in regimes with delayed or overlapping causal effects."* Their positive result depends on a directed tree where each object has at most one direct trigger, which is exactly the kind of assumption Fig 6 :23 says a differing closure supplies. Corroborates F8 and the union reading in F3.

7. **The formal calculus is conditional and complete relative to its assumptions.** The SEP supplement records that do-calculus is complete for expressing post-intervention probabilities in terms of conditional probabilities, while weaker calculi trade structural knowledge for weaker guarantees. This is the world-side counterpart of Fig 6 :29-30: an inward instrument and an outward frame are different tracks and must not be read against each other.

No world source conflicts with the figure verdict; the conflict rule was not triggered. The four causal-methods sources (1, 2, 6, 7) share a broad evidence pool around structural causal models and Pearl's calculus, so their agreement is one witness, not four. Sources 3, 4 and 5 are genuinely low overlap.

## Distribution: offer, do not push

- **Fig 10 :52** — *"Bring a characterised residual, never the source."* Lead with the shape claim and its refuter. The first contact carries no framework material.
- **Fig 4 :22** — *"Only methods cross up. Only head starts come down."* A recording of the whole architecture sent before anyone has described a residual is a description of one occasion, not a generator.
- **Fig 9 :27** — *"describe it before you go looking, or any frame you pick will seem to fit."* Ask what the recipient would expect to see if the shape claim were true before showing them anything.
- **Fig 2 :40** — agreement is disqualifying for a verdict when the frames share an evidence pool. A list selected for likely agreement manufactures that pool.
- **Fig 2 :42** — *"Buy independence in proportion to the cost of being wrong."* Prefer venues and readers working in a different closure from the claim.

**Recommended order in a reply:** (1) the shape claim and its pre-registered refuter; (2) ask what they would count as a failure and record the answer; (3) only then the three links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

1. **Stage 1.** Send the residual, the shape claim and the refuter. Ask for a verdict. Record it before any theory is shown. This is Fig 10 :52 and Fig 2 :45, *"Frames range against the ground. They do not negotiate with it."*
2. **Stage 2, opt-in only.** If they are curious, offer the figure text, the canonical README and the formula. Seat 4 must not hold the interiors; once a recipient has absorbed the framework, their agreement stops being evidence and is never pooled as corroboration (Fig 2 :40).
3. **Stage 3, opt-in only.** Offer the formula as a method to reuse. Fig 4 :22 permits sending a generator. Each user must state their own ground and write their own refuter before the run, because a frame cannot check the direction of its own question.

**Hard precondition:** stages 1 to 3 only work if the stage-1 output survives. As written here it is a `specified` shape with a `gap` for the specific mechanism. Do not upgrade it to a named mechanism in outreach; that would breach Fig 9 :32, *"you get a kind of thing, never the answer itself."*

## Host and send

All links are public. This agent does not host or send anything. If an archive is created, prefer an opt-in download page that lets a recipient decline contact over an attachment pushed to a list. Keep the shape claim and the refuter in front of the links in every version.
